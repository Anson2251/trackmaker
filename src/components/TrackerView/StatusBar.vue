<script lang="ts" setup>
import { NConfigProvider, NText, NSpace } from "naive-ui";
import { lightTheme } from "naive-ui";
import { computed } from "vue";
import { useI18n } from "nano-vue-i18n";
import { useRouteStore } from "@/store/route-store";
import type { GeographicPoint } from "@/libs/geolocation/types";
import type { KalmanState } from "@/libs/geolocation";
import type Matrix from "ml-matrix";

const { t } = useI18n();
const routeStore = useRouteStore();

interface Props {
  isRecording: boolean;
  recordTimespan?: number;
  isRouteDrawerOpen: boolean;
  currentLocation?: GeographicPoint;
  kalmanState?: KalmanState;
  kalmanGain?: Matrix | null;
}

const props = defineProps<Props>();

// Computed properties for status data
const currentRoute = computed(() => {
  if (!routeStore.currentRouteId) return null;
  return routeStore.routes.find(r => r.id === routeStore.currentRouteId);
});

const routeDistance = computed(() => {
  if (!currentRoute.value?.meta.distance) return 0;
  return currentRoute.value.meta.distance;
});

// // Kalman gain computation (use prop if available, otherwise placeholder)
// const kalmanGain = computed(() => {
//   // Use prop if provided
//   if (props.kalmanGain !== undefined) {
//     if (!props.kalmanGain) return null;
//     // Compute norm of Kalman gain matrix for display
//     const values = props.kalmanGain.to1DArray();
//     const norm = Math.sqrt(values.reduce((sum, val) => sum + val * val, 0));
//     return norm.toFixed(3);
//   }

//   // Fallback to placeholder
//   if (!props.isRecording || !props.currentLocation) return null;
//   const accuracy = props.currentLocation.accuracy || 10;
//   const gain = Math.max(0.1, Math.min(0.9, 1 / (1 + accuracy / 10)));
//   return gain.toFixed(2);
// });

// Format recording time
function formatDuration(ms: number) {
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;

  const displaySeconds = seconds % 60;
  const displayMinutes = minutes % 60;
  const displayHours = hours;

  let formatted = "";
  if (Math.floor(displayHours) > 0) formatted += `${String(Math.floor(displayHours))}h `;
  if (Math.floor(displayMinutes) > 0) formatted += `${String(Math.floor(displayMinutes))}m `;
  formatted += `${String(displaySeconds.toFixed(1)).padStart(4, "0")}s`;
  return formatted;
}

// Format distance
function formatDistance(meters: number) {
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  } else {
    return `${(meters / 1000).toFixed(2)}km`;
  }
}

// Format Kalman state for display
const formattedCoordinates = computed(() => {
  if (!props.currentLocation) return null;
  return `(${props.currentLocation.latitude.toFixed(6)}, ${props.currentLocation.longitude.toFixed(6)})`;
});

const formattedVelocity = computed(() => {
  if (!props.kalmanState) return null;
  const speed = Math.sqrt(props.kalmanState.velocity.x ** 2 + props.kalmanState.velocity.y ** 2);
  return `${speed.toFixed(1)} m/s`;
});

const formattedAcceleration = computed(() => {
  if (!props.kalmanState) return null;
  const accel = Math.sqrt(props.kalmanState.acceleration.x ** 2 + props.kalmanState.acceleration.y ** 2);
  return `${accel.toFixed(6)} m/s²`;
});

// Compute 95% confidence radius from 2x2 covariance submatrix
// r_95 = sqrt(lambda_max * chi2_2_0.95) where chi2_2_0.95 = 5.991
function computeAccuracy95(covariance: Matrix | null, rowStart: number): number | null {
  if (!covariance) return null;
  const a = covariance.get(rowStart, rowStart);
  const b = covariance.get(rowStart, rowStart + 1);
  const c = covariance.get(rowStart + 1, rowStart);
  const d = covariance.get(rowStart + 1, rowStart + 1);
  const trace = a + d;
  const det = a * d - b * c;
  const discriminant = Math.max(trace * trace - 4 * det, 0);
  const lambdaMax = (trace + Math.sqrt(discriminant)) / 2;
  return Math.sqrt(lambdaMax * 5.991);
}

const positionAccuracy = computed(() => {
  if (!props.kalmanState?.covariance) return null;
  return computeAccuracy95(props.kalmanState.covariance, 0);
});

const velocityAccuracy = computed(() => {
  if (!props.kalmanState?.covariance) return null;
  return computeAccuracy95(props.kalmanState.covariance, 2);
});

const formattedPositionAccuracy = computed(() => {
  if (positionAccuracy.value === null) return null;
  return `±${positionAccuracy.value.toFixed(1)}m`;
});

const formattedVelocityAccuracy = computed(() => {
  if (velocityAccuracy.value === null) return null;
  return `±${velocityAccuracy.value.toFixed(1)}m/s`;
});
</script>

<template>
  <!-- Mobile status bar positioned at bottom -->
  <div
    class="mobile-status-bar"
    :class="{ 'drawer-open': isRouteDrawerOpen }"
  >
    <n-config-provider :theme="lightTheme">
      <n-space
        :size="16"
        align="center"
        justify="center"
      >
        <!-- Recording Time -->
        <div
          v-if="isRecording && recordTimespan"
          class="status-item"
        >
          <n-text class="status-label">
            {{ t('trackerView.statusBar.recordingTime') }}:
          </n-text>
          <n-text class="status-value recording-time">
            {{ formatDuration(recordTimespan) }}
          </n-text>
        </div>

        <!-- Route Distance -->
        <div
          v-if="routeDistance > 0"
          class="status-item"
        >
          <n-text class="status-label">
            {{ t('trackerView.statusBar.distance') }}:
          </n-text>
          <n-text class="status-value">
            {{ formatDistance(routeDistance) }}
          </n-text>

        </div>

        <!-- GPS Status Indicator -->
        <div class="status-item">
          <n-text class="status-label">
            {{ t('trackerView.statusBar.gps') }}:
          </n-text>
          <n-text
            :class="[
              'status-value',
              'gps-status',
              currentLocation ? 'gps-active' : 'gps-inactive'
            ]"
          >
            {{ currentLocation ? 'GPS' : 'No GPS' }}
          </n-text>
        </div>

        <!-- Kalman State (dev mode only) -->
        <div
          v-if="formattedCoordinates"
          class="status-item"
        >
          <n-text class="status-label">
            P:
          </n-text>
          <n-text class="status-value">
            {{ formattedCoordinates }}
          </n-text>
        </div>

        <div
          v-if="formattedVelocity"
          class="status-item"
        >
          <n-text class="status-label">
            V:
          </n-text>
          <n-text class="status-value">
            {{ formattedVelocity }}
          </n-text>
        </div>
        <div
          v-if="formattedPositionAccuracy"
          class="status-item"
        >
          <n-text class="status-label">
            ΔX:
          </n-text>
          <n-text class="status-value">
            {{ formattedPositionAccuracy }}
          </n-text>
        </div>
        <div
          v-if="formattedVelocityAccuracy"
          class="status-item"
        >
          <n-text class="status-label">
            ΔV:
          </n-text>
          <n-text class="status-value">
            {{ formattedVelocityAccuracy }}
          </n-text>
        </div>
        <div
          v-if="formattedAcceleration"
          class="status-item"
        >
          <n-text class="status-label">
            A:
          </n-text>
          <n-text class="status-value">
            {{ formattedAcceleration }}
          </n-text>
        </div>
        <!-- <div
          v-if="formattedAcceleration"
          class="status-item"
        >
          <n-text class="status-label">
            Kalman
          </n-text>
          <n-text class="status-value">
            {{ kalmanState?.covariance.toJSON() }}
          </n-text>
        </div> -->
      </n-space>
    </n-config-provider>
  </div>
</template>

<style scoped>
.mobile-status-bar {
    position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  padding-bottom: 96px;
  transition: transform 0.3s ease-in-out;
}

.mobile-status-bar.drawer-open {
  transform: translateY(128px);
}

.status-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}

.status-label {
  font-weight: 500;
  color: #666;
}

.status-value {
  font-weight: 600;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  color: #333;
}

.recording-time {
  color: #d03050;
}

.kalman-gain {
  color: #2080f0;
}

.gps-status.gps-active {
  color: #18a058;
}

.gps-status.gps-inactive {
  color: #909399;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .mobile-status-bar {
    background: rgba(0, 0, 0, 0.85);
    border-top-color: rgba(255, 255, 255, 0.1);
  }

  .status-label {
    color: #ccc;
  }

  .status-value {
    color: #fff;
  }

  .recording-time {
    color: #f5222d;
  }

  .kalman-gain {
    color: #1890ff;
  }

  .gps-status.gps-active {
    color: #52c41a;
  }

  .gps-status.gps-inactive {
    color: #666;
  }
}
</style>
