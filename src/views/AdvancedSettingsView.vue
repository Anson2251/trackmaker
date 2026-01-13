<script lang="ts" setup>
import {
  NCard,
  NInput,
  NDataTable,
  NTag,
  NButton,
  NSwitch,
  NSpace,
  NPopconfirm,
} from "naive-ui";
import { computed, h, inject, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useSettingsStore } from "@/store/settings-store";
import { advancedSettingsConfig, type AdvancedSettingConfig } from "@/libs/default-settings";

const { t } = useI18n();
const router = useRouter();
const settingsStore = inject("settings") as ReturnType<typeof useSettingsStore>;

const searchQuery = ref("");
const editingKey = ref<string | null>(null);
const editingValue = ref<string | number | boolean>("");

const filteredConfigs = computed(() => {
  if (!searchQuery.value) return advancedSettingsConfig;
  const query = searchQuery.value.toLowerCase();
  return advancedSettingsConfig.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      String(item.key).toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
  );
});

const getTypeLabel = (type: string) => {
  switch (type) {
    case "boolean":
      return t("settings.advanced.config.type.boolean");
    case "string":
      return t("settings.advanced.config.type.string");
    case "number":
      return t("settings.advanced.config.type.number");
    default:
      return type;
  }
};

const getTypeTagType = (type: string) => {
  switch (type) {
    case "boolean":
      return "info";
    case "string":
      return "warning";
    case "number":
      return "success";
    default:
      return "default";
  }
};

const startEdit = (item: AdvancedSettingConfig) => {
  editingKey.value = item.key;
  editingValue.value = settingsStore.settings[item.key];
};

const cancelEdit = () => {
  editingKey.value = null;
  editingValue.value = "";
};

const saveEdit = (item: AdvancedSettingConfig) => {
  if (editingKey.value === item.key) {
    let value: string | number | boolean = editingValue.value;
    if (item.type === "number") {
      value = Number(editingValue.value);
    } else if (item.type === "boolean") {
      value = Boolean(editingValue.value);
    } else {
      value = String(editingValue.value);
    }
    (settingsStore.settings as any)[item.key] = value;
    editingKey.value = null;
    editingValue.value = "";
  }
};

const resetToDefault = (item: AdvancedSettingConfig) => {
  settingsStore.resetSetting(item.key);
};

const resetAllToDefault = () => {
  settingsStore.resetAdvancedSettings();
};

const goBack = () => {
  router.back();
};

const configColumns = computed(() => [
  {
    title: t("settings.advanced.config.columns.name"),
    key: "name",
    width: 220,
    render: (row: AdvancedSettingConfig) =>
      h("div", { style: "display: flex; flex-direction: column; gap: 2px;" }, [
        h("span", { style: "font-weight: 500;" }, row.name),
        h("span", { style: "font-family: monospace; font-size: 12px; color: #888; opacity: 0.8;" }, "settings." + String(row.key)),
      ]),
  },
  {
    title: t("settings.advanced.config.columns.value"),
    key: "value",
    render: (row: AdvancedSettingConfig) => {
      const currentValue = (settingsStore.settings as any)[row.key];
      if (editingKey.value === row.key) {
        if (row.type === "boolean") {
          return h(NSwitch, {
            value: editingValue.value as boolean,
            "onUpdate:value": (val: boolean) => {
              editingValue.value = val;
            },
          });
        }
        return h(NInput, {
          value: String(editingValue.value),
          "onUpdate:value": (val: string) => {
            editingValue.value = row.type === "number" ? Number(val) : val;
          },
          size: "small",
          style: "min-width: 150px; max-width: 300px;",
        });
      }
      if (row.type === "boolean") {
        return h(NSwitch, {
          value: currentValue as boolean,
          disabled: true,
        });
      }
      return h("span", { style: "font-family: monospace;" }, String(currentValue));
    },
  },
  {
    title: t("settings.advanced.config.columns.type"),
    key: "type",
    width: 100,
    render: (row: AdvancedSettingConfig) =>
      h(NTag, { type: getTypeTagType(row.type), size: "small" }, () =>
        getTypeLabel(row.type)
      ),
  },
  {
    title: t("settings.advanced.config.columns.description"),
    key: "description",
    ellipsis: {
      tooltip: true,
    },
  },
  {
    title: "",
    key: "actions",
    width: 120,
    render: (row: AdvancedSettingConfig) => {
      if (editingKey.value === row.key) {
        return h(NSpace, {}, () => [
          h(NButton, {
            type: "primary",
            size: "small",
            onClick: () => saveEdit(row),
          }, () => t("settings.advanced.config.actions.save")),
          h(NButton, {
            size: "small",
            onClick: cancelEdit,
          }, () => t("settings.advanced.config.actions.cancel")),
        ]);
      }
      return h(NSpace, {}, () => [
        h(NButton, {
          size: "small",
          onClick: () => startEdit(row),
        }, () => t("settings.advanced.config.actions.modify")),
        h(NPopconfirm, {
          onPositiveClick: () => resetToDefault(row),
        }, {
          trigger: () =>
            h(NButton, { size: "small", quaternary: true }, () =>
              t("settings.advanced.config.actions.reset")
            ),
          default: () => t("settings.advanced.config.actions.resetConfirmation"),
        }),
      ]);
    },
  },
]);
</script>

<template>
  <div class="advanced-settings-view">
    <div class="advanced-settings-header">
      <n-button quaternary circle @click="goBack">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
        </template>
      </n-button>
      <h1>{{ $t("settings.advanced.title") }}</h1>
    </div>

    <div class="advanced-settings-content">
      <n-card>
        <div class="config-search">
          <n-input
            v-model:value="searchQuery"
            :placeholder="$t('settings.advanced.config.searchPlaceholder')"
            clearable
            size="large"
          >
            <template #prefix>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </template>
          </n-input>
        </div>

        <div class="config-toolbar">
          <span class="config-count">
            {{ filteredConfigs.length }} {{ $t("settings.advanced.config.items") }}
          </span>
          <n-popconfirm @positive-click="resetAllToDefault">
            <template #trigger>
              <n-button size="small" quaternary>
                {{ $t("settings.advanced.config.resetAll") }}
              </n-button>
            </template>
            {{ $t("settings.advanced.config.resetAllConfirmation") }}
          </n-popconfirm>
        </div>

        <n-data-table
          :columns="configColumns"
          :data="filteredConfigs"
          :bordered="false"
          :single-line="false"
          size="small"
          :row-class-name="(_row: any, index: number) => index % 2 === 0 ? 'even-row' : 'odd-row'"
        >
          <template #empty>
            <div class="config-empty">
              {{ $t("settings.advanced.config.noResults") }}
            </div>
          </template>
        </n-data-table>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.advanced-settings-view {
  padding: 16px;
  max-width: 1000px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}

.advanced-settings-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.advanced-settings-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.advanced-settings-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.config-search {
  margin-bottom: 16px;
}

.config-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.config-count {
  color: var(--n-text-color-secondary);
  font-size: 14px;
}

.config-empty {
  padding: 32px;
  text-align: center;
  color: var(--n-text-color-secondary);
}

:deep(.even-row) {
  background-color: var(--n-row-even-color);
}

:deep(.odd-row) {
  background-color: var(--n-row-odd-color);
}

:deep(.n-data-table .n-data-table-tr) {
  cursor: default;
}

:deep(.n-data-table .n-data-table-td) {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
