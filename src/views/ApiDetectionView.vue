<script lang="ts" setup>
import { NCard, NList, NListItem, NTag, NSpace, NAlert, NDivider, NPerformantEllipsis } from "naive-ui";
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface ApiStatus {
  name: string;
  available: boolean;
  details?: string;
  error?: string;
}

const apiStatuses = ref<ApiStatus[]>([
  { name: "fetch", available: false },
  { name: "geolocation", available: false },
  { name: "performance", available: false },
  { name: "permission", available: false },
  { name: "deviceorientation", available: false },
  { name: "devicemotion", available: false },
]);

const checkApiAvailability = () => {
  // Check Fetch API
  try {
    apiStatuses.value[0].available = typeof fetch !== "undefined";
    apiStatuses.value[0].details = apiStatuses.value[0].available
      ? t('apiDetection.descriptions.fetch.available')
      : t('apiDetection.descriptions.fetch.unavailable');
  } catch (error) {
    apiStatuses.value[0].available = false;
    apiStatuses.value[0].error = error instanceof Error ? error.message : "Unknown error";
  }

  // Check Geolocation API
  try {
    apiStatuses.value[1].available = "geolocation" in navigator;
    apiStatuses.value[1].details = apiStatuses.value[1].available
      ? t('apiDetection.descriptions.geolocation.available')
      : t('apiDetection.descriptions.geolocation.unavailable');
  } catch (error) {
    apiStatuses.value[1].available = false;
    apiStatuses.value[1].error = error instanceof Error ? error.message : "Unknown error";
  }

  // Check Performance API
  try {
    apiStatuses.value[2].available = "performance" in window;
    apiStatuses.value[2].details = apiStatuses.value[2].available
      ? t('apiDetection.descriptions.performance.available')
      : t('apiDetection.descriptions.performance.unavailable');
  } catch (error) {
    apiStatuses.value[2].available = false;
    apiStatuses.value[2].error = error instanceof Error ? error.message : "Unknown error";
  }

  // Check Permissions API
  try {
    apiStatuses.value[3].available = "permissions" in navigator;
    apiStatuses.value[3].details = apiStatuses.value[3].available
      ? t('apiDetection.descriptions.permission.available')
      : t('apiDetection.descriptions.permission.unavailable');
  } catch (error) {
    apiStatuses.value[3].available = false;
    apiStatuses.value[3].error = error instanceof Error ? error.message : "Unknown error";
  }

  // Check Device Orientation API
  try {
    apiStatuses.value[4].available = "DeviceOrientationEvent" in window;
    apiStatuses.value[4].details = apiStatuses.value[4].available
      ? t('apiDetection.descriptions.deviceorientation.available')
      : t('apiDetection.descriptions.deviceorientation.unavailable');
  } catch (error) {
    apiStatuses.value[4].available = false;
    apiStatuses.value[4].error = error instanceof Error ? error.message : "Unknown error";
  }

  // Check Device Motion API
  try {
    apiStatuses.value[5].available = "DeviceMotionEvent" in window;
    apiStatuses.value[5].details = apiStatuses.value[5].available
      ? t('apiDetection.descriptions.devicemotion.available')
      : t('apiDetection.descriptions.devicemotion.unavailable');
  } catch (error) {
    apiStatuses.value[5].available = false;
    apiStatuses.value[5].error = error instanceof Error ? error.message : "Unknown error";
  }
};

onMounted(() => {
  checkApiAvailability();
});
</script>

<template>
  <div class="api-detection-view">
    <div class="api-detection-content">
      <n-space vertical size="large">
        <n-card :title="$t('apiDetection.title')">
          <n-alert type="info" :show-icon="false">
            {{ $t('apiDetection.description') }}
          </n-alert>
          <n-divider horizontal />
          <n-list>
            <n-list-item v-for="api in apiStatuses" :key="api.name">
              <div class="api-status-item">
                <div class="api-name">
                  {{ $t(`apiDetection.apis.${api.name}`) }}
                </div>
                <n-tag
                  :type="api.available ? 'success' : 'error'"
                  :bordered="false"
                >
                  {{ api.available ? $t('apiDetection.available') : $t('apiDetection.unavailable') }}
                </n-tag>
              </div>

              <div v-if="api.details" class="api-details">
                <n-performant-ellipsis>
                {{ api.details }}
                </n-performant-ellipsis>
              </div>
              <div v-if="api.error" class="api-error">
                {{ $t('apiDetection.error') }}: {{ api.error }}
              </div>
            </n-list-item>
          </n-list>
        </n-card>
      </n-space>
    </div>
  </div>
</template>

<style scoped>
.api-detection-view {
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}

.api-detection-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.api-status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.api-name {
  font-weight: 500;
  text-transform: capitalize;
}

.api-details {
  font-size: 0.875rem;
  color: var(--n-text-color-2);
  margin-top: 4px;
}

.api-error {
  font-size: 0.875rem;
  color: var(--n-error-color);
  margin-top: 4px;
}
</style>
