<script lang="ts" setup>
import { NConfigProvider, NText, NSpace } from "naive-ui";
import { lightTheme } from "naive-ui";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import PlatformInfo from "@/utils/platform";
import { useRouteStore } from "@/store/route-store";
import type { GeographicPoint } from "@/libs/geolocation/types";

const { t } = useI18n();
const platform = new PlatformInfo();
const isMobile = platform.isMobile;
const devMode = !__RELEASE_MODE__;
const routeStore = useRouteStore();

interface Props {
  isRecording: boolean;
  recordTimespan?: number;
  isRouteDrawerOpen: boolean;
  currentLocation?: GeographicPoint;
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

// Kalman gain computation (simplified for display)
const kalmanGain = computed(() => {
  // For now, return a placeholder value since the KalmanFilter doesn't expose the gain
  // In a real implementation, you'd need to modify KalmanFilter to expose the current gain
  if (!props.isRecording || !props.currentLocation) return null;

  // Placeholder: simulate a typical Kalman gain value (0-1 range)
  // Higher values mean more trust in measurements, lower values mean more trust in predictions
  const accuracy = props.currentLocation.accuracy || 10;
  const gain = Math.max(0.1, Math.min(0.9, 1 / (1 + accuracy / 10)));
  return gain.toFixed(2);
});

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
</script>

<template>
  <!-- Mobile status bar positioned at bottom -->
  <div
    v-if="isMobile || devMode"
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

        <!-- Kalman Gain (if available and recording) -->
        <div
          v-if="isRecording && kalmanGain && currentLocation"
          class="status-item"
        >
          <n-text class="status-label">
            {{ t('trackerView.statusBar.kalmanGain') }}:
          </n-text>
          <n-text class="status-value kalman-gain">
            {{ kalmanGain }}
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
      </n-space>
    </n-config-provider>
  </div>
</template>

<style scoped>
.mobile-status-bar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
}

.mobile-status-bar.drawer-open {
  margin-bottom: 48px; /* Make space when drawer opens */
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
