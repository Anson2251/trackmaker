/**
 * Types for web worker communication with Kalman filter
 */

import type { IMUReading } from '../types';
import type { KalmanConfig } from './kalman-types';
import type { Matrix } from 'ml-matrix';

export interface KalmanState {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    acceleration: { x: number; y: number };
    covariance: number[][];
    timestamp: number;
}

export interface KalmanStateInternal {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    acceleration: { x: number; y: number };
    covariance: Matrix; // ml-matrix Matrix object
    timestamp: number;
}

export interface CartesianGPSReading {
    x: number;
    y: number;
    accuracy: number;
    timestamp: number;
    speed?: number;
    velocity?: { x: number; y: number };
}

// Worker message types
export type WorkerMessageType =
    | 'INITIALIZE'
    | 'PROCESS_GPS'
    | 'PROCESS_IMU'
    | 'GET_FILTERED_POSITION'
    | 'GET_STATE'
    | 'GET_KALMAN_GAIN'
    | 'RESET'
    | 'ERROR'
    | 'RESULT';

export interface WorkerMessageBase {
    id: number;
    type: WorkerMessageType;
}

export interface InitializeMessage extends WorkerMessageBase {
    type: 'INITIALIZE';
    config: KalmanConfig;
    initialReading: CartesianGPSReading;
}

export interface ProcessGPSMessage extends WorkerMessageBase {
    type: 'PROCESS_GPS';
    reading: CartesianGPSReading;
}

export interface ProcessIMUMessage extends WorkerMessageBase {
    type: 'PROCESS_IMU';
    reading: IMUReading;
}

export interface GetFilteredPositionMessage extends WorkerMessageBase {
    type: 'GET_FILTERED_POSITION';
}

export interface GetStateMessage extends WorkerMessageBase {
    type: 'GET_STATE';
}

export interface GetKalmanGainMessage extends WorkerMessageBase {
    type: 'GET_KALMAN_GAIN';
}

export interface ResetMessage extends WorkerMessageBase {
    type: 'RESET';
}

export interface ErrorMessage extends WorkerMessageBase {
    type: 'ERROR';
    error: string;
    originalId?: number;
}

export interface ResultMessage<T = any> extends WorkerMessageBase {
    type: 'RESULT';
    data: T;
    originalId: number;
}

export type WorkerMessage =
    | InitializeMessage
    | ProcessGPSMessage
    | ProcessIMUMessage
    | GetFilteredPositionMessage
    | GetStateMessage
    | GetKalmanGainMessage
    | ResetMessage
    | ErrorMessage
    | ResultMessage;

// Helper functions for creating messages


// Type guard functions
export function isInitializeMessage(msg: WorkerMessage): msg is InitializeMessage {
    return msg.type === 'INITIALIZE';
}

export function isProcessGPSMessage(msg: WorkerMessage): msg is ProcessGPSMessage {
    return msg.type === 'PROCESS_GPS';
}

export function isProcessIMUMessage(msg: WorkerMessage): msg is ProcessIMUMessage {
    return msg.type === 'PROCESS_IMU';
}

export function isGetFilteredPositionMessage(msg: WorkerMessage): msg is GetFilteredPositionMessage {
    return msg.type === 'GET_FILTERED_POSITION';
}

export function isGetStateMessage(msg: WorkerMessage): msg is GetStateMessage {
    return msg.type === 'GET_STATE';
}

export function isGetKalmanGainMessage(msg: WorkerMessage): msg is GetKalmanGainMessage {
    return msg.type === 'GET_KALMAN_GAIN';
}

export function isResetMessage(msg: WorkerMessage): msg is ResetMessage {
    return msg.type === 'RESET';
}

export function isErrorMessage(msg: WorkerMessage): msg is ErrorMessage {
    return msg.type === 'ERROR';
}

export function isResultMessage(msg: WorkerMessage): msg is ResultMessage {
    return msg.type === 'RESULT';
}
