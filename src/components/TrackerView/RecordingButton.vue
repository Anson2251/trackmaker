<script lang="ts" setup>
import { NConfigProvider, NButton, NIcon } from "naive-ui";
import { lightTheme } from "naive-ui";
import { PlayerRecord, Square } from "@vicons/tabler";
import { useI18n } from "vue-i18n";
import PlatformInfo from "@/utils/platform";

const { t } = useI18n();
const platform = new PlatformInfo();
const isMobile = platform.isMobile;
const devMode = !__RELEASE_MODE__;

interface Props {
  isRecording: boolean;
  recordTimespan?: number;
  isRouteDrawerOpen: boolean;
}

interface Emits {
  (e: 'toggleRecording'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

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
</script>

<template>
  <!-- Mobile record button positioned at bottom -->
  <div
    v-if="isMobile || devMode"
    class="mobile-record-button-container"
    :class="{ 'drawer-open': isRouteDrawerOpen }"
  >
    <n-config-provider :theme="lightTheme">
      <n-button
        :type="isRecording ? 'error' : 'primary'"
        :size="'large'"
        :class="['mobile-record-button', isRecording ? 'recording' : 'not-recording']"
        @click="emit('toggleRecording')"
      >
        <template #icon>
          <n-icon :size="20">
            <component
              :is="isRecording ? Square : PlayerRecord"
              :size="isRecording ? 16 : 20"
            />
          </n-icon>
        </template>
        {{ isRecording ? t('trackerView.uiRecordingStatus.on') : t('trackerView.uiRecordingStatus.off') }}
        <p style="font-family: monospace; padding-left: 8px;">
          {{ recordTimespan ? `(${formatDuration(recordTimespan)})` : '' }}
        </p>
      </n-button>
    </n-config-provider>
  </div>
</template>

<style scoped>
.mobile-record-button-container {
  position: absolute;
  bottom: 48px;
  right: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  z-index: 1000;
  transition: bottom 0.3s ease;
}

.mobile-record-button-container.drawer-open {
  bottom: -128px;
}

.mobile-record-button {
  box-shadow: 0 0 16px -2px v-bind('lightTheme.Button.common?.primaryColorSuppl'), 0 1px 3px -1px #000;
  transition: all 0.2s ease;
  width: fit-content;
}

.mobile-record-button.recording {
  box-shadow: 0 0 16px -2px v-bind('lightTheme.Button.common?.errorColorSuppl'), 0 1px 3px -1px #000;
}

.mobile-record-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px -2px v-bind('lightTheme.Button.common?.primaryColorSuppl'), 0 2px 8px -1px #000;
}

.mobile-record-button.recording:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px -2px v-bind('lightTheme.Button.common?.errorColorSuppl'), 0 2px 8px -1px #000;
}
</style>
