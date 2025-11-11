<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { NCard, NStatistic, NAlert } from 'naive-ui';
import { imuOrientationManager } from '@/libs/imu';
import { GeolocationManager } from '@/libs/geolocation';
import type { IMUReading, DeviceOrientationReading } from '@/libs/platform';
import type { GeographicPoint } from '@/libs/geolocation/types';

const { t } = useI18n();
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
const geolocationManager = new GeolocationManager();
const gpsData = ref<GeographicPoint | null>(null);
const gpsListenerId = ref<number | null>(null);
const gpsError = ref<string | null>(null);
const gpsBackend = ref<'platform' | 'ip' | null>(null);
const gpsTimestamp = ref<Date | null>(null);

// Error handling
const orientationError = ref<string | null>(null);
const motionError = ref<string | null>(null);

// Computed properties for display
const compassHeading = computed(() => {
  if (!orientationData.value) return 0;
  return orientationData.value.webkitCompassHeading || (360 - orientationData.value.alpha);
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
  await initializeManager();
  await initializeGPS();
});

onUnmounted(() => {
  cleanup();
});

async function initializeManager() {
  try {
    const initResult = await imuOrientationManager.initialize();
    if (initResult.isErr()) {
      console.error('Failed to initialize IMU manager:', initResult.error);
      orientationError.value = 'IMU manager initialization failed';
      motionError.value = 'IMU manager initialization failed';
      return;
    }

    // Automatically start monitoring if supported
    await startOrientationMonitoring();
    await startMotionMonitoring();

    // Get initial readings if available
    const lastOrientation = imuOrientationManager.getLastKnownOrientation();
    if (lastOrientation) {
      orientationData.value = lastOrientation;
    }

    const lastMotion = imuOrientationManager.getLastKnownMotion();
    if (lastMotion) {
      accelerationData.value = lastMotion.acceleration;
      gyroscopeData.value = lastMotion.gyroscope;
    }
  } catch (error) {
    console.error('Error initializing IMU manager:', error);
    orientationError.value = 'Initialization error';
    motionError.value = 'Initialization error';
  }
}

async function startOrientationMonitoring() {
  try {
    const startResult = await imuOrientationManager.startOrientationUpdates((orientation: DeviceOrientationReading) => {
      orientationData.value = orientation;
      orientationError.value = null;
    });

    if (startResult.isOk()) {
      orientationListenerId.value = startResult.value;
      orientationError.value = null;
    } else {
      orientationError.value = `Start failed: ${startResult.error.message}`;
    }
  } catch (error) {
    orientationError.value = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

async function startMotionMonitoring() {
  try {
    // Start acceleration updates
    const accStartResult = await imuOrientationManager.startAccelerationUpdates(
      { normalizeToENU: true },
      (reading: IMUReading) => {
        accelerationData.value = reading;
        motionError.value = null;
      }
    );

    if (accStartResult.isErr()) {
      motionError.value = `Acceleration start failed: ${accStartResult.error.message}`;
      return;
    }

    // Start gyroscope updates
    const gyroStartResult = await imuOrientationManager.startGyroscopeUpdates(
      { normalizeToENU: false },
      (reading: IMUReading) => {
        gyroscopeData.value = reading;
        motionError.value = null;
      }
    );

    if (gyroStartResult.isErr()) {
      // Stop acceleration if gyroscope failed
      if (accStartResult.isOk()) {
        imuOrientationManager.stopAccelerationUpdates(accStartResult.value);
      }
      motionError.value = `Gyroscope start failed: ${gyroStartResult.error.message}`;
      return;
    }

    accelerationListenerId.value = accStartResult.value;
    gyroscopeListenerId.value = gyroStartResult.value;
    motionError.value = null;
  } catch (error) {
    motionError.value = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

async function initializeGPS() {
  try {
    const initResult = await geolocationManager.initialize();
    if (initResult.isErr()) {
      console.error('Failed to initialize GPS manager:', initResult.error);
      gpsError.value = 'GPS manager initialization failed';
      return;
    }

    // Get initial location if available
    const lastLocation = geolocationManager.getLastKnownLocation();
    if (lastLocation && lastLocation.latitude !== 0 && lastLocation.longitude !== 0) {
      gpsData.value = lastLocation;
      gpsTimestamp.value = new Date();
    }

    gpsBackend.value = geolocationManager.getCurrentBackend();

    // Start GPS monitoring
    await startGPSMonitoring();
  } catch (error) {
    console.error('Error initializing GPS manager:', error);
    gpsError.value = 'GPS initialization error';
  }
}

async function startGPSMonitoring() {
  try {
    const startResult = await geolocationManager.startLocationUpdates((location: GeographicPoint) => {
      gpsData.value = location;
      gpsTimestamp.value = new Date();
      gpsBackend.value = geolocationManager.getCurrentBackend();
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
  if (orientationListenerId.value !== null) {
    imuOrientationManager.stopOrientationUpdates(orientationListenerId.value);
  }
  if (accelerationListenerId.value !== null) {
    imuOrientationManager.stopAccelerationUpdates(accelerationListenerId.value);
  }
  if (gyroscopeListenerId.value !== null) {
    imuOrientationManager.stopGyroscopeUpdates(gyroscopeListenerId.value);
  }
  if (gpsListenerId.value !== null) {
    geolocationManager.stopLocationUpdates(gpsListenerId.value);
  }
}

</script>

<template>
  <div class="sensor-demo-view">
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
                :value="accelerationData.x.toFixed(3)"
                suffix="m/s²"
              />
              <NStatistic
                :label="t('sensorTest.deviceMotion.acceleration.y')"
                :value="accelerationData.y.toFixed(3)"
                suffix="m/s²"
              />
              <NStatistic
                :label="t('sensorTest.deviceMotion.acceleration.z')"
                :value="accelerationData.z.toFixed(3)"
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
                :value="gyroscopeData.x.toFixed(3)"
                suffix="rad/s"
              />
              <NStatistic
                :label="t('sensorTest.deviceMotion.gyroscope.y')"
                :value="gyroscopeData.y.toFixed(3)"
                suffix="rad/s"
              />
              <NStatistic
                :label="t('sensorTest.deviceMotion.gyroscope.z')"
                :value="gyroscopeData.z.toFixed(3)"
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
                :value="gpsBackend === 'platform' ? t('sensorTest.gps.backendGPS') : t('sensorTest.gps.backendIP')"
              />
              <NStatistic
                v-if="gpsTimestamp"
                :label="t('sensorTest.gps.timestamp')"
                :value="gpsTimestamp.toLocaleTimeString()"
              />
            </div>
          </div>
        </div>

        <div
          v-else-if="!gpsError"
          class="data-section"
        >
          <p>{{ t('sensorTest.gps.noData') }}</p>
        </div>
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
