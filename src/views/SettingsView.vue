<script lang="ts" setup>
import {
  NAnchor,
  NAnchorLink,
  NCard,
  NList,
  NListItem,
  NRadioGroup,
  NRadioButton,
  NSelect
} from "naive-ui";
import { useSettingsStore } from "@/store/settings-store";
import { computed, inject, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize()
const isNarrowScreen = computed(() => width.value < 640)
const isExtremeNarrowScreen = computed(() => width.value < 480)
const { t } = useI18n();
const settingsStore = inject("settings") as ReturnType<typeof useSettingsStore>

const configs = {
  appearance: {
    theme: {
      type: "radio",
      items: [
        { value: "light", label: t("settings.appearance.options.light") },
        { value: "dark", label: t("settings.appearance.options.dark") },
        { value: "system", label: t("settings.appearance.options.system") },
      ],
    },
  },
};

onMounted(() => {
  settingsStore.init();
});
</script>

<template>
  <div class="settings-view">
    <div class="settings-layout">
      <div class="settings-content">
        <n-card
          id="appearance"
          :title="$t(`settings.${section}.title`)"
          v-for="(config, section) in configs"
          :key="section"
        >
          <n-list>
            <n-list-item v-for="(item, key) in config">
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div style="white-space: nowrap">
                  {{ $t(`settings.${section}.${key}`) }}
                </div>
                <div v-if="item.type === 'radio'">
                <n-radio-group
                  v-model:value="settingsStore[key]"
                  v-if="!isNarrowScreen"
                >
                  <n-radio-button
                    v-for="option in item.items"
                    :key="option.value"
                    :value="option.value"
                    :label="$t(`settings.${section}.options.${option.value}`)"
                    :checked="settingsStore.theme === option.value"
                  />
                </n-radio-group>
                <n-select v-else :options="item.items" v-model:value="settingsStore[key]" :consistent-menu-width="false"/>
                </div>
              </div>
            </n-list-item>
          </n-list>
        </n-card>
      </div>
      <n-anchor :show-rail="true" class="settings-nav" v-if="!isExtremeNarrowScreen" style="width: 128px">
        <n-anchor-link title="Appearance" href="#appearance" />
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
  flex: 1;
}
</style>
