import { ref, onUnmounted, type Ref } from "vue";
import { getPlatformServices } from "@/libs/platform";
import type {
    DeviceOrientationReading,
    IIMUProvider,
} from "@/libs/platform";
import { logError, toAppError } from "@/libs/error-handling";
import { orientationToCompassHeading } from "@/libs/heading";

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

    let imuProvider: IIMUProvider | null = null;
    let listenerId: number | null = null;

    const platformResult = getPlatformServices();
    if (platformResult.isErr()) {
        throw platformResult.error;
    }
    const platformServices = platformResult.value;

    const imuResult = platformServices.getIMU();
    if (imuResult.isErr()) {
        isSupported.value = false;
    }
    else {
        imuProvider = imuResult.value;
        isSupported.value = true
    }

    // Start tracking
    const startTracking = async (): Promise<void> => {
        try {
            if (isTracking.value) return;

            if (!isSupported.value || !imuProvider) {
                console.warn("[useImuCompass] IMU orientation not supported, failed to start tracking");
                return;
            }

            const wrappedCallback = (orientation: DeviceOrientationReading) => {
                try {
                    const newBearing = orientationToCompassHeading(orientation);
                    if (newBearing === undefined) {
                        error.value = "Compass heading unavailable";
                        return;
                    }

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

            listenerId = imuProvider.onOrientationChange(wrappedCallback);
            isTracking.value = true;
            error.value = null;

            const currentResult = await imuProvider.getCurrentOrientation();
            if (currentResult.isOk() && currentResult.value) {
                const newBearing = orientationToCompassHeading(currentResult.value);
                if (newBearing !== undefined) {
                    bearing.value = newBearing;
                }
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
        if (!isTracking.value || listenerId === null || !imuProvider)
            return;

        try {
            imuProvider.removeEventListener(listenerId);
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
