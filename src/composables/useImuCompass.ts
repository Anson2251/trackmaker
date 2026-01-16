import { ref, onUnmounted, type Ref } from "vue";
import { getPlatformServices } from "@/libs/platform";
import type {
    DeviceOrientationReading,
    IDeviceOrientationProvider,
} from "@/libs/platform";
import { logError, toAppError } from "@/libs/error-handling";

export interface UseImuCompassOptions {
    autoStart?: boolean;
}

export interface UseImuCompassReturn {
    bearing: Ref<number>;
    isTracking: Ref<boolean>;
    isSupported: Ref<boolean>;
    error: Ref<string | null>;
    startTracking: () => Promise<void>;
    stopTracking: () => void;
    toggleTracking: () => Promise<void>;
}

export function useImuCompass(
    options: UseImuCompassOptions = {},
): UseImuCompassReturn {
    const { autoStart = false } = options;

    // State
    const bearing = ref(0);
    const isTracking = ref(false);
    const isSupported = ref(false);
    const error = ref<string | null>(null);

    let orientationProvider: IDeviceOrientationProvider | null = null;
    let listenerId: number | null = null;

    const orientationToBearing = (
        orientation: DeviceOrientationReading,
    ): number => {
        // Use webkitCompassHeading if available (iOS)
        if (orientation.webkitCompassHeading !== undefined) {
            return orientation.webkitCompassHeading;
        }

        // Use alpha value for other platforms
        // Alpha is the compass direction the device is facing (0-360)
        // Convert to bearing (0-360, where 0 = North)
        if (orientation.alpha !== null) {
            return (360 - orientation.alpha) % 360;
        }

        return 0;
    };

    // Start tracking
    const startTracking = async (): Promise<void> => {
        try {
            if (isTracking.value) return;

            const platformResult = getPlatformServices();
            if (platformResult.isErr()) {
                throw platformResult.error;
            }
            const platformServices = platformResult.value;

            const orientationResult = platformServices.getDeviceOrientation();
            if (orientationResult.isErr()) {
                throw orientationResult.error;
            }
            orientationProvider = orientationResult.value;

            const orientationSupported = await orientationProvider.isSupported();
            if (!orientationSupported) {
                throw new Error(
                    "Device orientation is not supported on this device",
                );
            }

            isSupported.value = true;

            const initResult = await orientationProvider.init();
            if (initResult.isErr()) {
                throw initResult.error;
            }

            const startResult = await orientationProvider.start();
            if (startResult.isErr()) {
                throw startResult.error;
            }

            const wrappedCallback = (orientation: DeviceOrientationReading) => {
                try {
                    const newBearing = orientationToBearing(orientation);
                    bearing.value = newBearing;
                    error.value = null;
                } catch (err) {
                    const errorMsg = "Failed to process orientation update";
                    error.value = errorMsg;
                    logError(
                        toAppError(
                            err as Error,
                            "useImuCompass.handleOrientationUpdate",
                        ),
                        "useImuCompass.handleOrientationUpdate",
                    );
                }
            };

            listenerId =
                orientationProvider.onOrientationChange(wrappedCallback);
            isTracking.value = true;
            error.value = null;

            const currentResult =
                await orientationProvider.getCurrentOrientation();
            if (currentResult.isOk() && currentResult.value) {
                const newBearing = orientationToBearing(currentResult.value);
                bearing.value = newBearing;
            }
        } catch (err) {
            const errorMsg =
                err instanceof Error
                    ? err.message
                    : "Failed to start compass tracking";
            error.value = errorMsg;
            isTracking.value = false;
            logError(
                toAppError(err as Error, "useImuCompass.startTracking"),
                "useImuCompass.startTracking",
            );
        }
    };

    // Stop tracking
    const stopTracking = (): void => {
        if (!isTracking.value || listenerId === null || !orientationProvider)
            return;

        try {
            orientationProvider.removeEventListener(listenerId);
            orientationProvider.stop();
            listenerId = null;
            isTracking.value = false;
        } catch (err) {
            const errorMsg = "Failed to stop compass tracking";
            error.value = errorMsg;
            logError(
                toAppError(err as Error, "useImuCompass.stopTracking"),
                "useImuCompass.stopTracking",
            );
        }
    };

    // Toggle tracking
    const toggleTracking = async (): Promise<void> => {
        if (isTracking.value) {
            stopTracking();
        } else {
            await startTracking();
        }
    };

    // Auto-start if requested
    if (autoStart) {
        startTracking().catch(console.error);
    }

    // Cleanup on unmount
    onUnmounted(() => {
        stopTracking();
    });

    return {
        bearing,
        isTracking,
        isSupported,
        error,
        startTracking,
        stopTracking,
        toggleTracking,
    };
}
