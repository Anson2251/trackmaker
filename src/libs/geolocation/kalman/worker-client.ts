/**
 * Client for communicating with Kalman filter web worker
 */

import type { IMUReading } from '../types';
import type { KalmanConfig } from './kalman-types';
import type {
    CartesianGPSReading,
    WorkerMessage,
    InitializeMessage,
    ProcessGPSMessage,
    ProcessIMUMessage,
    KalmanState
} from './worker-types';

export interface WorkerResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
}

export class KalmanWorkerClient {
    private worker: Worker | null = null;
    private pendingRequests: Map<number, { resolve: (value: any) => void; reject: (error: Error) => void }> = new Map();
    private nextId = 0;
    private isInitialized = false;
    private workerModulePromise: Promise<typeof import('./worker?worker')> | null = null;

    constructor() {
        // Worker will be created lazily on first initialize
    }

    async initialize(config: KalmanConfig, initialReading: CartesianGPSReading): Promise<void> {
        if (!this.worker) {
            console.log('[KalmanWorkerClient] Creating worker...');
            try {
                if (!this.workerModulePromise) {
                    this.workerModulePromise = import('./worker?worker');
                }
                const module = await this.workerModulePromise;
                console.log('[KalmanWorkerClient] Worker module loaded');
                this.worker = new module.default();
                console.log('[KalmanWorkerClient] Worker instance created');
                this.worker.onmessage = this.handleWorkerMessage.bind(this);
                this.worker.onerror = this.handleWorkerError.bind(this);
            } catch (error) {
                console.error('[KalmanWorkerClient] Failed to create worker:', error);
                throw new Error(`Failed to create Kalman worker: ${error instanceof Error ? error.message : String(error)}`);
            }
        }

        const message: InitializeMessage = {
            type: 'INITIALIZE',
            id: this.nextId++,
            config,
            initialReading
        };

        const response = await this.sendMessage(message);
        if (!response.success) {
            throw new Error(response.error || 'Failed to initialize worker');
        }

        this.isInitialized = true;
    }

    async processGPS(reading: CartesianGPSReading): Promise<void> {
        if (!this.isInitialized || !this.worker) {
            throw new Error('Worker not initialized');
        }

        const message: ProcessGPSMessage = {
            type: 'PROCESS_GPS',
            id: this.nextId++,
            reading
        };

        const response = await this.sendMessage(message);
        if (!response.success) {
            throw new Error(response.error || 'Failed to process GPS reading');
        }
    }

    async processIMU(reading: IMUReading): Promise<void> {
        if (!this.isInitialized || !this.worker) {
            throw new Error('Worker not initialized');
        }

        const message: ProcessIMUMessage = {
            type: 'PROCESS_IMU',
            id: this.nextId++,
            reading
        };

        const response = await this.sendMessage(message);
        if (!response.success) {
            throw new Error(response.error || 'Failed to process IMU reading');
        }
    }

    async getFilteredPosition(): Promise<{ x: number; y: number }> {
        if (!this.isInitialized || !this.worker) {
            throw new Error('Worker not initialized');
        }

        const message = {
            type: 'GET_FILTERED_POSITION',
            id: this.nextId++
        } as const;

        const response = await this.sendMessage(message);
        if (!response.success) {
            throw new Error(response.error || 'Failed to get filtered position');
        }

        const data = response.data as { position: { x: number; y: number } };
        return data.position;
    }

    async getState(): Promise<KalmanState> {
        if (!this.isInitialized || !this.worker) {
            throw new Error('Worker not initialized');
        }

        const message = {
            type: 'GET_STATE',
            id: this.nextId++
        } as const;

        const response = await this.sendMessage(message);
        if (!response.success) {
            throw new Error(response.error || 'Failed to get state');
        }

        const data = response.data as { state: KalmanState };
        return data.state;
    }

    async getLastKalmanGain(): Promise<number[][] | null> {
        if (!this.isInitialized || !this.worker) {
            throw new Error('Worker not initialized');
        }

        const message = {
            type: 'GET_KALMAN_GAIN',
            id: this.nextId++
        } as const;

        const response = await this.sendMessage(message);
        if (!response.success) {
            throw new Error(response.error || 'Failed to get Kalman gain');
        }

        const data = response.data as { gain: number[][] | null };
        return data.gain;
    }

    async reset(): Promise<void> {
        const message = {
            type: 'RESET',
            id: this.nextId++
        } as const;

        const response = await this.sendMessage(message);
        if (!response.success) {
            throw new Error(response.error || 'Failed to reset worker');
        }

        this.isInitialized = false;
    }

    dispose(): void {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
        this.workerModulePromise = null;
        this.pendingRequests.clear();
        this.isInitialized = false;
    }

    isReady(): boolean {
        return this.isInitialized && this.worker !== null;
    }

    private sendMessage(message: WorkerMessage): Promise<WorkerResponse> {
        return new Promise((resolve, reject) => {
            if (!this.worker) {
                reject(new Error('Worker not available'));
                return;
            }

            this.pendingRequests.set(message.id, { resolve, reject });
            // console.log(`[KalmanWorkerClient] Sending message ${message.type} with id ${message.id}`);
            this.worker.postMessage(message);
        });
    }

    private handleWorkerMessage(event: MessageEvent<WorkerMessage>): void {
        const message = event.data;

        if (message.type === 'RESULT') {
            const request = this.pendingRequests.get(message.originalId);
            if (request) {
                this.pendingRequests.delete(message.originalId);
                request.resolve({
                    success: true,
                    data: message.data
                });
            }
        } else if (message.type === 'ERROR') {
            if (message.originalId !== undefined) {
                const request = this.pendingRequests.get(message.originalId);
                if (request) {
                    this.pendingRequests.delete(message.originalId);
                    console.error('[KalmanWorkerClient] Worker error for request', message.originalId, ':', message.error);
                    request.resolve({
                        success: false,
                        error: message.error
                    });
                }
            } else {
                console.error('[KalmanWorkerClient] Worker error without originalId:', message.error);
            }
        }
    }

    private handleWorkerError(error: ErrorEvent): void {
        console.error('[KalmanWorkerClient] Worker error:', error);

        // Reject all pending requests
        for (const [, request] of this.pendingRequests) {
            request.reject(new Error(`Worker error: ${error.message}`));
        }
        this.pendingRequests.clear();

        this.isInitialized = false;
        this.worker = null;
    }
}
