<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'nano-vue-i18n';
import { useRouter } from 'vue-router';
import { NCard, NStatistic, NAlert, NButton, useThemeVars } from 'naive-ui';
import { GeolocationManager } from '@/libs/geolocation';
import { getPlatformServices } from '@/libs/platform/platform-services';
import type { IMUReading, DeviceOrientationReading } from '@/libs/platform';
import type { IIMUProvider, IDeviceOrientationProvider } from '@/libs/platform/types';
import { orientationToCompassHeading } from '@/libs/heading';
import type { GeographicPoint } from '@/libs/geolocation/types';

const { t } = useI18n();
const router = useRouter();
const theme = useThemeVars();

// Platform services
let imuProvider: IIMUProvider | null = null;
let deviceOrientationProvider: IDeviceOrientationProvider | null = null;

// State management
// Device orientation data
const orientationData = ref<DeviceOrientationReading | null>(null);
const orientationListenerId = ref<number | null>(null);

// Device motion data
const accelerationData = ref<IMUReading | null>(null);
const gyroscopeData = ref<IMUReading | null>(null);
const accelerationListenerId = ref<number | null>(null);
const gyroscopeListenerId = ref<number | null>(null);

// GPS data
const gpsData = ref<GeographicPoint | null>(null);
const gpsListenerId = ref<number | null>(null);
const gpsError = ref<string | null>(null);
const gpsBackend = ref<'kalman' | 'gps' | 'ip' | null>(null);
const gpsTimestamp = ref<Date | null>(null);

// Error handling
const orientationError = ref<string | null>(null);
const motionError = ref<string | null>(null);
const orientationSupported = ref<boolean | null>(null);
const motionSupported = ref<boolean | null>(null);

// Computed properties for display
const compassHeading = computed(() => {
  if (!orientationData.value) return 0;
  return orientationToCompassHeading(orientationData.value);
});

const tiltAngle = computed(() => {
  if (!orientationData.value) return 0;
  return Math.sqrt(orientationData.value.beta ** 2 + orientationData.value.gamma ** 2);
});

const accelerationMagnitude = computed(() => {
  if (!accelerationData.value) return 0;
  return Math.sqrt(
    accelerationData.value.x ** 2 +
    accelerationData.value.y ** 2 +
    accelerationData.value.z ** 2
  );
});

const rotationSpeed = computed(() => {
  if (!gyroscopeData.value) return 0;
  return Math.sqrt(
    gyroscopeData.value.x ** 2 +
    gyroscopeData.value.y ** 2 +
    gyroscopeData.value.z ** 2
  );
});

onMounted(async () => {
  await initializePlatformServices();
  await initializeGPS();
});

onUnmounted(() => {
  cleanup();
});

async function initializePlatformServices() {
  try {
    const platformResult = getPlatformServices();
    if (platformResult.isErr()) {
      console.error('Failed to get platform services:', platformResult.error);
      orientationError.value = 'Platform services initialization failed';
      motionError.value = 'Platform services initialization failed';
      return;
    }

    const platform = platformResult.value;

    const imuResult = platform.getIMU();
    const orientationResult = platform.getDeviceOrientation();

    if (imuResult.isErr()) {
      motionSupported.value = false;
    } else {
      imuProvider = imuResult.value;
      subscribeToMotionUpdates();
    }

    if (orientationResult.isErr()) {
      orientationSupported.value = false;
    } else {
      deviceOrientationProvider = orientationResult.value;
      subscribeToOrientationUpdates();
    }
  } catch (error) {
    console.error('Error initializing platform services:', error);
    orientationError.value = 'Initialization error';
    motionError.value = 'Initialization error';
  }
}

function subscribeToOrientationUpdates() {
  if (!deviceOrientationProvider) {
    orientationError.value = 'Device orientation provider not available';
    return;
  }

  try {
    const listenerId = deviceOrientationProvider.onOrientationChange((orientation: DeviceOrientationReading) => {
      orientationData.value = orientation;
      orientationError.value = null;
    });

    orientationListenerId.value = listenerId;
    orientationError.value = null;
  } catch (error) {
    orientationError.value = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

function subscribeToMotionUpdates() {
  if (!imuProvider) {
    motionError.value = 'IMU provider not available';
    return;
  }

  try {
    const accListenerId = imuProvider.onAccelerationReading((reading: IMUReading) => {
      accelerationData.value = reading;
      motionError.value = null;
    });

    const gyroListenerId = imuProvider.onGyroscopeReading((reading: IMUReading) => {
      gyroscopeData.value = reading;
      motionError.value = null;
    });

    accelerationListenerId.value = accListenerId;
    gyroscopeListenerId.value = gyroListenerId;
    motionError.value = null;
  } catch (error) {
    motionError.value = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

async function initializeGPS() {
  try {
    const geoResult = await GeolocationManager.getInstance();
    if (geoResult.isErr()) {
      console.error('Failed to initialize GPS manager:', geoResult.error);
      gpsError.value = 'GPS manager initialization failed';
      return;
    }

    const geoManager = geoResult.value;

    // Get initial location if available
    const lastLocation = geoManager.getLastKnownLocation();
    if (lastLocation && lastLocation.latitude !== 0 && lastLocation.longitude !== 0) {
      gpsData.value = lastLocation;
      gpsTimestamp.value = new Date();
    }

    gpsBackend.value = geoManager.getCurrentBackend();

    // Start GPS monitoring
    await startGPSMonitoring();
  } catch (error) {
    console.error('Error initializing GPS manager:', error);
    gpsError.value = 'GPS initialization error';
  }
}

async function startGPSMonitoring() {
  try {
    const geoManager = GeolocationManager.getExistingInstance();
    const startResult = await geoManager.startLocationUpdates((location: GeographicPoint) => {
      gpsData.value = location;
      gpsTimestamp.value = new Date();
      gpsBackend.value = geoManager.getCurrentBackend();
      gpsError.value = null;
    });

    if (startResult.isOk()) {
      gpsListenerId.value = startResult.value;
      gpsError.value = null;
    } else {
      gpsError.value = `GPS start failed: ${startResult.error.message}`;
    }
  } catch (error) {
    gpsError.value = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

function cleanup() {
  if (deviceOrientationProvider && orientationListenerId.value !== null) {
    deviceOrientationProvider.removeEventListener(orientationListenerId.value);
  }

  if (imuProvider) {
    if (accelerationListenerId.value !== null) {
      imuProvider.removeEventListener(accelerationListenerId.value);
    }
    if (gyroscopeListenerId.value !== null) {
      imuProvider.removeEventListener(gyroscopeListenerId.value);
    }
  }

  try {
    const geoManager = GeolocationManager.getExistingInstance();
    if (gpsListenerId.value !== null) {
      geoManager.stopLocationUpdates(gpsListenerId.value);
    }
  } catch {
    // Geolocation manager not initialized, ignore
  }
}

const goBack = () => {
  router.back();
};

const formatNumberString = (value: string) => {
  if (value.trim().startsWith('-')) return value;
  return `+${value}`;
}

</script>

<template>
  <div class="sensor-demo-view">
    <div class="sensor-demo-header">
      <n-button quaternary circle @click="goBack">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
        </template>
      </n-button>
      <h1>{{ t("sensorTest.title") }}</h1>
    </div>

    <div class="demo-container">
      <!-- Device Orientation Section -->
      <NCard
        :title="t('sensorTest.deviceOrientation.title')"
        class="sensor-card"
      >
        <NAlert
          v-if="orientationError"
          type="error"
          :title="orientationError"
          style="margin-top: 16px;"
        />

        <NAlert
          v-if="orientationSupported === false"
          type="warning"
          :title="t('sensorTest.deviceOrientation.notSupported')"
          style="margin-top: 16px;"
        />

        <div
          v-if="orientationData"
          class="data-section"
        >
          <div class="orientation-stats">
            <div class="orientation-row">
              <NStatistic
                :label="t('sensorTest.deviceOrientation.compassHeading')"
                :value="compassHeading.toFixed(1)"
                suffix="°"
              />
              <NStatistic
                :label="t('sensorTest.deviceOrientation.alpha')"
                :value="orientationData.alpha.toFixed(1)"
                suffix="°"
              />
              <NStatistic
                :label="t('sensorTest.deviceOrientation.beta')"
                :value="orientationData.beta.toFixed(1)"
                suffix="°"
              />
            </div>
            <div class="orientation-row">
              <NStatistic
                :label="t('sensorTest.deviceOrientation.gamma')"
                :value="orientationData.gamma.toFixed(1)"
                suffix="°"
              />
              <NStatistic
                :label="t('sensorTest.deviceOrientation.tiltAngle')"
                :value="tiltAngle.toFixed(1)"
                suffix="°"
              />
              <NStatistic
                v-if="orientationData.webkitCompassHeading"
                :label="t('sensorTest.deviceOrientation.iosHeading')"
                :value="orientationData.webkitCompassHeading.toFixed(1)"
                suffix="°"
              />
            </div>
          </div>
        </div>
        <NAlert
          v-else-if="!orientationError && (orientationSupported === true || orientationSupported === null)"
          type="warning"
          :title="t('sensorTest.deviceOrientation.noData')"
          style="margin-top: 16px;"
        />
      </NCard>

      <!-- Device Motion Section -->
      <NCard
        :title="t('sensorTest.deviceMotion.title')"
        class="sensor-card"
      >
        <NAlert
          v-if="motionError"
          type="error"
          :title="motionError"
          style="margin-top: 16px;"
        />

        <NAlert
          v-if="motionSupported === false"
          type="warning"
          :title="t('sensorTest.deviceMotion.notSupported')"
          style="margin-top: 16px;"
        />

        <div
          v-if="accelerationData || gyroscopeData"
          class="data-section"
        >
          <!-- Acceleration Data -->
          <div
            v-if="accelerationData"
            class="sensor-subsection"
          >
            <h4>{{ t('sensorTest.deviceMotion.acceleration.title') }}</h4>
            <div class="xyz-row">
              <NStatistic
                :label="t('sensorTest.deviceMotion.acceleration.x')"
                :value="formatNumberString(accelerationData.x.toFixed(3))"
                suffix="m/s²"

              />
              <NStatistic
                :label="t('sensorTest.deviceMotion.acceleration.y')"
                :value="formatNumberString(accelerationData.y.toFixed(3))"
                suffix="m/s²"
              />
              <NStatistic
                :label="t('sensorTest.deviceMotion.acceleration.z')"
                :value="formatNumberString(accelerationData.z.toFixed(3))"
                suffix="m/s²"
              />
            </div>
            <div class="other-stats-row">
              <NStatistic
                :label="t('sensorTest.deviceMotion.acceleration.magnitude')"
                :value="accelerationMagnitude.toFixed(3)"
                suffix="m/s²"
              />
            </div>
          </div>

          <!-- Gyroscope Data -->
          <div
            v-if="gyroscopeData"
            class="sensor-subsection"
          >
            <h4>{{ t('sensorTest.deviceMotion.gyroscope.title') }}</h4>
            <div class="xyz-row">
              <NStatistic
                :label="t('sensorTest.deviceMotion.gyroscope.x')"
                :value="formatNumberString(gyroscopeData.x.toFixed(3))"
                suffix="rad/s"
              />
              <NStatistic
                :label="t('sensorTest.deviceMotion.gyroscope.y')"
                :value="formatNumberString(gyroscopeData.y.toFixed(3))"
                suffix="rad/s"
              />
              <NStatistic
                :label="t('sensorTest.deviceMotion.gyroscope.z')"
                :value="formatNumberString(gyroscopeData.z.toFixed(3))"
                suffix="rad/s"
              />
            </div>
            <div class="other-stats-row">
              <NStatistic
                :label="t('sensorTest.deviceMotion.gyroscope.rotationSpeed')"
                :value="rotationSpeed.toFixed(3)"
                suffix="rad/s"
              />
            </div>
          </div>
        </div>
        <NAlert
          v-else-if="!motionError && (motionSupported === true || motionSupported === null)"
          type="warning"
          :title="t('sensorTest.deviceMotion.noData')"
          style="margin-top: 16px;"
        />
      </NCard>

      <!-- GPS Location Section -->
      <NCard
        :title="t('sensorTest.gps.title')"
        class="sensor-card"
      >
        <NAlert
          v-if="gpsError"
          type="error"
          :title="gpsError"
          style="margin-top: 16px;"
        />

        <div
          v-if="gpsData"
          class="data-section"
        >
          <div class="gps-stats">
            <div class="gps-row">
              <NStatistic
                :label="t('sensorTest.gps.latitude')"
                :value="gpsData.latitude.toFixed(6)"
                suffix="°"
              />
              <NStatistic
                :label="t('sensorTest.gps.longitude')"
                :value="gpsData.longitude.toFixed(6)"
                suffix="°"
              />
              <NStatistic
                :label="t('sensorTest.gps.accuracy')"
                :value="gpsData.accuracy.toFixed(1)"
                suffix="m"
              />
            </div>
            <div class="gps-row">
              <NStatistic
                :label="t('sensorTest.gps.backend')"
                :value="gpsBackend === 'gps' || gpsBackend === 'kalman' ? t('sensorTest.gps.backendGPS') : t('sensorTest.gps.backendIP')"
              />
              <NStatistic
                v-if="gpsTimestamp"
                :label="t('sensorTest.gps.timestamp')"
                :value="gpsTimestamp.toLocaleTimeString()"
              />
            </div>
          </div>
        </div>

        <NAlert
          v-else-if="!gpsError"
          type="info"
          :title="t('sensorTest.gps.noData')"
          style="margin-top: 16px;"
        />
      </NCard>
    </div>
  </div>
</template>

<style>
.n-list-item__main {
  min-width: 0;
}
</style>

<style scoped>
.demo-container:deep(.n-statistic-value__content) {
  font-family: v-bind('theme.fontFamilyMono') !important;
  font-size: 16px !important;
}

.sensor-demo-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.sensor-demo-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.sensor-demo-view {
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  overflow: auto;
}

.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sensor-card {
  margin-bottom: 16px;
}

.control-section {
  margin-bottom: 16px;
}

.data-section {
  margin-top: 16px;
}

.sensor-subsection {
  margin-bottom: 24px;
}

.sensor-subsection h4 {
  margin-bottom: 12px;
  color: var(--n-text-color);
}

.xyz-row {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 12px;
}

.xyz-row :deep(.n-statistic) {
  flex: 1;
  min-width: 120px;
}

.other-stats-row {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
}

.other-stats-row :deep(.n-statistic) {
  flex: 1;
  min-width: 200px;
}

.orientation-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.orientation-row {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
}

.orientation-row :deep(.n-statistic) {
  flex: 1;
  min-width: 120px;
}

.gps-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.gps-row {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
}

.gps-row :deep(.n-statistic) {
  flex: 1;
  min-width: 120px;
}

@media (max-width: 768px) {
  .xyz-row {
    flex-direction: column !important;
  }

  .other-stats-row {
    flex-direction: column !important;
  }

  .orientation-row {
    flex-direction: column !important;
  }

  .xyz-row :deep(.n-statistic),
  .other-stats-row :deep(.n-statistic),
  .orientation-row :deep(.n-statistic),
  .gps-row :deep(.n-statistic) {
    min-width: auto;
  }
}

.instructions {
  line-height: 1.6;
}

.instructions ul {
  margin-left: 20px;
  margin-bottom: 16px;
}

.instructions li {
  margin-bottom: 4px;
}

@media (max-width: 768px) {
  .sensor-demo-view {
    padding: 8px;
  }
}
</style>
