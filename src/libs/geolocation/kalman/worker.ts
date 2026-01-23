/**
 * Web Worker for Kalman filter processing
 */

import { WorkerKalmanFilter } from './worker-kalman-filter';
import type {
    WorkerMessage,
    InitializeMessage,
    ProcessGPSMessage,
    ProcessIMUMessage,
    GetFilteredPositionMessage,
    GetStateMessage,
    GetKalmanGainMessage,
    ResetMessage
} from './worker-types';

let kalmanFilter: WorkerKalmanFilter | null = null;

function handleInitialize(message: InitializeMessage): void {
    console.log('[KalmanWorker] Handling INITIALIZE message');
    try {
        if (kalmanFilter) {
            kalmanFilter.dispose();
        }

        console.log('[KalmanWorker] Creating WorkerKalmanFilter with config:', message.config);
        kalmanFilter = new WorkerKalmanFilter(message.config);
        console.log('[KalmanWorker] Initializing filter with reading:', message.initialReading);
        kalmanFilter.initialize(message.initialReading);

        console.log('[KalmanWorker] Filter initialized successfully');
        self.postMessage({
            type: 'RESULT',
            data: { success: true },
            originalId: message.id
        });
    } catch (error) {
        self.postMessage({
            type: 'ERROR',
            error: error instanceof Error ? error.message : String(error),
            originalId: message.id
        });
    }
}

function handleProcessGPS(message: ProcessGPSMessage): void {
    try {
        if (!kalmanFilter) {
            throw new Error('Kalman filter not initialized');
        }

        kalmanFilter.updateGPS(message.reading);

        self.postMessage({
            type: 'RESULT',
            data: { success: true },
            originalId: message.id
        });
    } catch (error) {
        self.postMessage({
            type: 'ERROR',
            error: error instanceof Error ? error.message : String(error),
            originalId: message.id
        });
    }
}

function handleProcessIMU(message: ProcessIMUMessage): void {
    try {
        if (!kalmanFilter) {
            throw new Error('Kalman filter not initialized');
        }

        kalmanFilter.updateIMU(message.reading);

        self.postMessage({
            type: 'RESULT',
            data: { success: true },
            originalId: message.id
        });
    } catch (error) {
        self.postMessage({
            type: 'ERROR',
            error: error instanceof Error ? error.message : String(error),
            originalId: message.id
        });
    }
}

function handleGetFilteredPosition(message: GetFilteredPositionMessage): void {
    try {
        if (!kalmanFilter) {
            throw new Error('Kalman filter not initialized');
        }

        const position = kalmanFilter.getFilteredPosition();

        self.postMessage({
            type: 'RESULT',
            data: { position },
            originalId: message.id
        });
    } catch (error) {
        console.error('[KalmanWorker] Error getting filtered position:', error);
        self.postMessage({
            type: 'ERROR',
            error: error instanceof Error ? error.message : String(error),
            originalId: message.id
        });
    }
}

function handleGetState(message: GetStateMessage): void {
    try {
        if (!kalmanFilter) {
            throw new Error('Kalman filter not initialized');
        }

        const state = kalmanFilter.getState();

        self.postMessage({
            type: 'RESULT',
            data: { state },
            originalId: message.id
        });
    } catch (error) {
        self.postMessage({
            type: 'ERROR',
            error: error instanceof Error ? error.message : String(error),
            originalId: message.id
        });
    }
}

function handleGetKalmanGain(message: GetKalmanGainMessage): void {
    try {
        if (!kalmanFilter) {
            throw new Error('Kalman filter not initialized');
        }

        const gain = kalmanFilter.getLastKalmanGain();

        self.postMessage({
            type: 'RESULT',
            data: { gain },
            originalId: message.id
        });
    } catch (error) {
        self.postMessage({
            type: 'ERROR',
            error: error instanceof Error ? error.message : String(error),
            originalId: message.id
        });
    }
}

function handleReset(message: ResetMessage): void {
    try {
        if (kalmanFilter) {
            kalmanFilter.dispose();
            kalmanFilter = null;
        }

        self.postMessage({
            type: 'RESULT',
            data: { success: true },
            originalId: message.id
        });
    } catch (error) {
        self.postMessage({
            type: 'ERROR',
            error: error instanceof Error ? error.message : String(error),
            originalId: message.id
        });
    }
}

self.onmessage = (event: MessageEvent<WorkerMessage>) => {
    const message = event.data;

    switch (message.type) {
        case 'INITIALIZE':
            handleInitialize(message);
            break;
        case 'PROCESS_GPS':
            handleProcessGPS(message);
            break;
        case 'PROCESS_IMU':
            handleProcessIMU(message);
            break;
        case 'GET_FILTERED_POSITION':
            handleGetFilteredPosition(message);
            break;
        case 'GET_STATE':
            handleGetState(message);
            break;
        case 'GET_KALMAN_GAIN':
            handleGetKalmanGain(message);
            break;
        case 'RESET':
            handleReset(message);
            break;
        case 'ERROR':
        case 'RESULT':
            // Worker should not receive these message types
            console.warn('[KalmanWorker] Received unexpected message type:', message.type);
            break;
        default:
            // Exhaustiveness check
            const _exhaustiveCheck: never = message;
            throw new Error(`Unhandled message type: ${(_exhaustiveCheck as WorkerMessage).type}`);
    }
};

// Log worker startup
console.log('[KalmanWorker] Worker started');