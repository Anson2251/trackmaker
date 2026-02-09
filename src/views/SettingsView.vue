<script lang="ts" setup>
import {
  NAnchor,
  NAnchorLink,
  NCard,
  NList,
  NH3,
  NFlex,
  NListItem,
  NRadioGroup,
  NRadioButton,
  NSelect,
  NSwitch,
  NPerformantEllipsis,
  NButton,
} from "naive-ui";
import { useSettingsStore } from "@/store/settings-store";
import { computed, inject, onMounted } from "vue";
import { useI18n } from "nano-vue-i18n";
import { useWindowSize } from "@vueuse/core";
import PlatformInfo from "@/utils/platform";
import { useRouter } from "vue-router";

const platform = new PlatformInfo();
const router = useRouter();

const isMobile = computed(() => platform.isMobile);

const { width } = useWindowSize();
const isNarrowScreen = computed(() => width.value < 800);
const isExtremeNarrowScreen = computed(() => width.value < 680);
const { t, availableLocales } = useI18n();
const settingsStore = inject("settings") as ReturnType<typeof useSettingsStore>;

type SettingItemTitle = keyof typeof settingsStore.settings;
type SettingOption = {
  value: string;
  label: string;
};
type SettingItem =
  | {
      title: SettingItemTitle;
      type: "radio";
      items: SettingOption[];
    }
  | {
      title: SettingItemTitle;
      type: "select";
      items: SettingOption[];
    }
  | {
      title: SettingItemTitle;
      type: "checkbox";
    }
  | {
      title: string;
      type: "button";
    };

type Section = {
  title: string;
  items: SettingItem[];
};

type Config = Section[];

const navigateToAdvancedSettings = () => {
  router.push("/advanced-settings");
};

const configs = computed<Config>(() => [
  {
    title: "appearance",
    items: [
      {
        title: "theme",
        type: "radio",
        items: [
          {
            value: "light",
            label: t("settings.appearance.theme.options.light"),
          },
          { value: "dark", label: t("settings.appearance.theme.options.dark") },
          {
            value: "system",
            label: t("settings.appearance.theme.options.system"),
          },
        ],
      },
      {
        title: "nightMode",
        type: "checkbox",
      },
    ],
  },
  {
    title: "geolocation",
    items: [
      {
        title: "geolocationBackend",
        type: "select",
        items: [
          {
            value: "auto",
            label: t("settings.geolocation.geolocationBackend.options.auto"),
          },
          {
            value: "kalman",
            label: t("settings.geolocation.geolocationBackend.options.kalman"),
          },
          {
            value: "kalman-no-imu",
            label: t("settings.geolocation.geolocationBackend.options.kalman-no-imu"),
          },
          {
            value: "gps",
            label: t("settings.geolocation.geolocationBackend.options.gps"),
          },
          {
            value: "ip",
            label: t("settings.geolocation.geolocationBackend.options.ip"),
          },
        ],
      },
    ],
  },
  {
    title: "language",
    items: [
      {
        title: "interfaceLanguage",
        type: "select",
        items: [
          {
            value: "system",
            label: t("settings.language.interfaceLanguage.options.system"),
          },
          ...availableLocales.map((l) => ({
            value: l,
            label: t(`settings.language.interfaceLanguage.options.${l}`),
          })),
        ],
      },
      {
        title: "mapLanguage",
        type: "select",
        items: availableLocales
          .map((l) => ({
            value: l,
            label: t(`settings.language.mapLanguage.options.${l}`),
          }))
          .concat([
            {
              value: "interface",
              label: t("settings.language.mapLanguage.options.interface"),
            },
          ]),
      },
    ],
  },
  {
    title: "tools",
    items: [
      {
        title: "apiDetection",
        type: "button",
      },
      {
        title: "imuOrientationTesting",
        type: "button",
      },
    ],
  },
]);

const navigateToApiDetection = () => {
  router.push("/api-detection");
};

const navigateToSensorTest = () => {
  router.push("/sensor-demo");
};

onMounted(() => {
  settingsStore.init();
});
</script>

<template>
  <div class="settings-view">
    <div class="settings-layout">
      <div class="settings-content">
        <n-flex vertical :size="40">
          <div v-for="section in configs">
            <n-h3 prefix="bar"
              >{{ t(`settings.${section.title}.title`) }}
            </n-h3>
            <n-card
              content-style="padding: 0;"
              id="appearance"
              :key="section.title"
            >
              <n-list hoverable>
                <n-list-item v-for="item of section.items" :key="item.title">
                  <n-performant-ellipsis
                    style="white-space: nowrap"
                    :tooltip="{
                      trigger: isMobile ? 'click' : 'hover',
                    }"
                  >
                    {{
                      (item as any).items || (item as any).type === "button"
                        ? t(`settings.${section.title}.${item.title}.title`)
                        : t(`settings.${section.title}.${item.title}`)
                    }}
                    <template #tooltip>
                      {{
                        (item as any).items || (item as any).type === "button"
                          ? t(`settings.${section.title}.${item.title}.title`)
                          : t(`settings.${section.title}.${item.title}`)
                      }}
                    </template>
                  </n-performant-ellipsis>
                  <template #suffix>
                    <div v-if="item.type === 'radio'">
                      <n-radio-group
                        v-if="!isNarrowScreen"
                        v-model:value="settingsStore.settings[item.title]"
                      >
                        <n-radio-button
                          v-for="option of item.items"
                          :disabled="section.title === 'appearance' && item.title === 'theme' && settingsStore.settings.nightMode"
                          :key="option.value"
                          :value="option.value"
                          :label="option.label"
                          :checked="
                            settingsStore.settings[item.title] === option.value
                          "
                        />
                      </n-radio-group>
                      <n-select
                        v-else
                        :disabled="section.title === 'appearance' && item.title === 'theme' && settingsStore.settings.nightMode"
                        v-model:value="
                          settingsStore.settings[item.title] as any
                        "
                        :options="item.items"
                        :consistent-menu-width="false"
                      />
                    </div>
                    <div v-else-if="item.type === 'select'">
                      <n-select
                        v-model:value="
                          settingsStore.settings[item.title] as any
                        "
                        :options="item.items"
                        :consistent-menu-width="false"
                      />
                    </div>
                    <div v-else-if="item.type === 'checkbox'">
                      <n-switch
                        v-model:value="settingsStore.settings[item.title]"
                      />
                    </div>
                    <div v-else-if="item.type === 'button'">
                      <n-button
                        type="primary"
                        @click="
                          item.title === 'apiDetection'
                            ? navigateToApiDetection()
                            : navigateToSensorTest()
                        "
                      >
                        {{
                          t(`settings.${section.title}.${item.title}.button`)
                        }}
                      </n-button>
                    </div>
                  </template>
                </n-list-item>
              </n-list>
            </n-card>
          </div>

          <!-- Advanced Options Button -->
          <div>
            <n-h3 prefix="bar">{{ t("settings.advancedOptions.title") }}</n-h3>
            <n-card id="advanced-options" content-style="padding: 0;" hoverable>
              <n-list hoverable>
                <n-list-item>
                  {{ t("settings.advancedOptions.description") }}
                  <template #suffix>
                    <n-button
                      type="primary"
                      size="large"
                      @click="navigateToAdvancedSettings"
                    >
                      {{ t("settings.advancedOptions.button") }}
                    </n-button>
                  </template>
                </n-list-item>
              </n-list>
            </n-card>
          </div>
        </n-flex>
      </div>
      <div v-if="!isExtremeNarrowScreen" class="settings-nav">
        <n-anchor :show-rail="true" style="width: 128px">
          <n-anchor-link
            v-for="section in configs"
            :key="section.title"
            :title="t(`settings.${section.title}.title`)"
            :href="`#${section.title.toLowerCase()}`"
          />
        </n-anchor>
      </div>
    </div>
  </div>
</template>

<style scoped>
.n-list-item:deep(div.n-list-item__main) {
  min-width: 0;
}

.settings-view {
  padding: 8px;
  max-width: 1200px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}

.settings-layout {
  display: flex;
  gap: 20px;
}

.settings-nav {
  width: 200px;
  position: sticky;
  top: 20px;
  align-self: flex-start;
}

.settings-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

@media (max-width: 600px) {
  .advanced-options-card {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .advanced-options-card .n-button {
    width: 100%;
  }
}
</style>
