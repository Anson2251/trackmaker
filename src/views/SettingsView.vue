<script lang="ts" setup>
import {
  NAnchor,
  NAnchorLink,
  NCard,
  NList,
  NListItem,
  NRadioGroup,
  NRadioButton,
  NSelect,
  NSwitch,
} from "naive-ui";
import { useSettingsStore } from "@/store/settings-store";
import { computed, inject, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const isNarrowScreen = computed(() => width.value < 640);
const isExtremeNarrowScreen = computed(() => width.value < 480);
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
    };

type Section = {
  title: string;
  items: SettingItem[];
};

type Config = Section[];

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
    ],
  },
  {
    title: "geolocation",
    items: [
      {
        title: "watchCompatibilityMode",
        type: "checkbox",
      },
    ],
  },
  {
    title: "language",
    items: [
      {
        title: "interfaceLanguage",
        type: "select",
        items: availableLocales.map((l) => ({
          value: l,
          label: t(`settings.language.interfaceLanguage.options.${l}`),
        })),
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
]);

onMounted(() => {
  settingsStore.init();
});
</script>

<template>
  <div class="settings-view">
    <div class="settings-layout">
      <div class="settings-content">
        <n-card
          v-for="section in configs"
          id="appearance"
          :key="section.title"
          :title="$t(`settings.${section.title}.title`)"
        >
          <n-list>
            <n-list-item
              v-for="item of section.items"
              :key="item.title"
            >
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div style="white-space: nowrap">
                  {{
                    (item as any).items
                      ? $t(`settings.${section.title}.${item.title}.title`)
                      : $t(`settings.${section.title}.${item.title}`)
                  }}
                </div>
                <div v-if="item.type === 'radio'">
                  <n-radio-group
                    v-if="!isNarrowScreen"
                    v-model:value="settingsStore.settings[item.title]"
                  >
                    <n-radio-button
                      v-for="option of item.items"
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
                    v-model:value="(settingsStore.settings[item.title] as any)"
                    :options="item.items"
                    :consistent-menu-width="false"
                  />
                </div>
                <div v-else-if="item.type === 'select'">
                  <n-select
                    v-model:value="(settingsStore.settings[item.title] as any)"
                    :options="item.items"
                    :consistent-menu-width="false"
                  />
                </div>
                <div v-else-if="item.type === 'checkbox'">
                  <n-switch
                    v-model:value="settingsStore.settings[item.title]"
                  />
                </div>
              </div>
            </n-list-item>
          </n-list>
        </n-card>
      </div>
      <n-anchor
        v-if="!isExtremeNarrowScreen"
        :show-rail="true"
        class="settings-nav"
        style="width: 128px"
      >
        <n-anchor-link
          v-for="section in configs"
          :key="section.title"
          :title="$t(`settings.${section.title}.title`)"
          :href="`#${section.title.toLowerCase()}`"
        />
      </n-anchor>
    </div>
  </div>
</template>

<style scoped>
.settings-view {
  padding: 8px;
  max-width: 1200px;
  margin: 0 auto;
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
}
</style>
