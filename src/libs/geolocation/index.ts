import { ResultAsync } from 'neverthrow'
import {
  GeolocationError,
  GeolocationPermissionError,
  GeolocationPositionError,
  GeolocationTimeoutError,
  GeolocationUnsupportedError,
  GeolocationErrorCode
} from '../error-handling/geolocation';
import { toAppError, logError } from '../error-handling';
import { getPlatformServices } from '@/libs/platform';
import type { Result } from 'neverthrow';
import type { AppError } from '@/libs/error-handling';

// Export the unified geolocation services architecture
export {
  PermissionService,
  GeolocationManager
} from './services';

export type {
  PermissionServiceInterface,
  PermissionPromptCallback,
  GeolocationManagerInterface
} from './services';

// Export platform integration utilities
export { getPlatformServices } from '@/libs/platform';
export type { IGeolocationProvider } from '@/libs/platform/types';

/**
 * Legacy geolocation functions - now use platform providers internally
 * These are kept for backward compatibility but use the new platform provider architecture
 */

export function locate(): ResultAsync<GeolocationPosition, GeolocationError> {
	return ResultAsync.fromPromise(
		new Promise<GeolocationPosition>((resolve, reject) => {
			// Use platform services if available, otherwise fallback to browser API
			const platformServicesResult = getPlatformServices();
			if (platformServicesResult.isOk()) {
				const geolocationProvider = platformServicesResult.value.getGeolocation();
				if (geolocationProvider.isOk()) {
					geolocationProvider.value.getCurrentPosition().then((result: Result<GeolocationPosition, AppError>) => {
						if (result.isOk()) {
							resolve(result.value);
						} else {
							reject(result.error);
						}
					}).catch((error: unknown) => {
						reject(new GeolocationError('Platform provider failed', GeolocationErrorCode.UNKNOWN_ERROR, error as Error));
					});
					return;
				}
			}

			// Fallback to browser geolocation API
			if (!navigator.geolocation) {
				reject(new GeolocationUnsupportedError());
				return;
			}
			navigator.geolocation.getCurrentPosition(resolve, (error) => {
				// Convert GeolocationPositionError to our custom error types
				let customError: GeolocationError;
				switch (error.code) {
					case error.PERMISSION_DENIED:
						customError = new GeolocationPermissionError(error.message);
						break;
					case error.POSITION_UNAVAILABLE:
						customError = new GeolocationPositionError(error.message);
						break;
					case error.TIMEOUT:
						customError = new GeolocationTimeoutError(error.message);
						break;
					default:
						customError = new GeolocationError(error.message, GeolocationErrorCode.UNKNOWN_ERROR);
				}
				reject(customError);
			});
		}),
		(error) => {
			if (error instanceof GeolocationError) {
				return error;
			}
			// Convert unknown errors to GeolocationError
			const appError = toAppError(error, 'Geolocation operation failed');
			return new GeolocationError(appError.message, GeolocationErrorCode.UNKNOWN_ERROR, appError);
		}
	)
}

export function watch(callback: (position: GeolocationPosition) => void): ResultAsync<number, GeolocationError> {
	return ResultAsync.fromPromise(
		new Promise<number>((resolve, reject) => {
			// Use platform services if available, otherwise fallback to browser API
			const platformServicesResult = getPlatformServices();
			if (platformServicesResult.isOk()) {
				const geolocationProvider = platformServicesResult.value.getGeolocation();
				if (geolocationProvider.isOk()) {
					geolocationProvider.value.watchPosition(callback).then((result: Result<number, AppError>) => {
						if (result.isOk()) {
							resolve(result.value);
						} else {
							reject(result.error);
						}
					}).catch((error: unknown) => {
						reject(new GeolocationError('Platform provider failed', GeolocationErrorCode.UNKNOWN_ERROR, error as Error));
					});
					return;
				}
			}

			// Fallback to browser geolocation API
			if (!navigator.geolocation) {
				reject(new GeolocationUnsupportedError());
				return;
			}

			const watchId = navigator.geolocation.watchPosition(
				callback,
				(error) => {
					logError(new GeolocationError(error.message, GeolocationErrorCode.POSITION_UNAVAILABLE), 'geolocation.watch');
				}
			);
			resolve(watchId);
		}),
		(error) => {
			if (error instanceof GeolocationError) {
				return error;
			}
			const appError = toAppError(error, 'Failed to start geolocation watch');
			return new GeolocationError(appError.message, GeolocationErrorCode.UNKNOWN_ERROR, appError);
		}
	);
}

export function unwatch(id: number): ResultAsync<void, GeolocationError> {
	return ResultAsync.fromPromise(
		new Promise<void>((resolve, reject) => {
			// Use platform services if available, otherwise fallback to browser API
			const platformServicesResult = getPlatformServices();
			if (platformServicesResult.isOk()) {
				const geolocationProvider = platformServicesResult.value.getGeolocation();
				if (geolocationProvider.isOk()) {
					const result = geolocationProvider.value.clearWatch(id);
					if (result.isOk()) {
						resolve();
					} else {
						reject(result.error);
					}
					return;
				}
			}

			// Fallback to browser geolocation API
			if (!navigator.geolocation) {
				reject(new GeolocationUnsupportedError());
				return;
			}

			navigator.geolocation.clearWatch(id);
			resolve();
		}),
		(error) => {
			const appError = toAppError(error, 'Failed to stop geolocation watch');
			return new GeolocationError(appError.message, GeolocationErrorCode.UNKNOWN_ERROR, appError);
		}
	);
}

