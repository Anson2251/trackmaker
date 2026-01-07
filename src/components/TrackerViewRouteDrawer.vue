<script lang="ts" setup>
import { computed, ref } from "vue";
import { useDialog, useThemeVars } from "naive-ui";
import { useRouteStore } from "@/store/route-store";
import { NDropdown, NModal, NInput, NButton, NIcon } from "naive-ui";
import { useI18n } from "vue-i18n";
import MglDrawer from "./MglDrawer.vue";
import SelectableSwipeableMenuList from "./SelectableSwipeableMenuList.vue";
import { Trash } from "@vicons/tabler";
import PlatformInfo from "@/utils/platform";
import { formatDistance } from "@/utils/proj4-distance";

const platform = new PlatformInfo();
const isMobile = platform.isMobile;

const { t } = useI18n();
const dialog = useDialog();

const emit = defineEmits<{
  (e: "update:width", value: number): void;
}>();

const routeStore = useRouteStore();
const theme = useThemeVars();

const show = defineModel("show", {
  type: Boolean,
  default: false,
});

const showRouteContextMenu = ref(false);
const contextMenuX = ref(0);
const contextMenuY = ref(0);
const selectedRoute = ref<{ id: string; name: string; points: readonly unknown[] } | null>(null);
const showRenameDialog = ref(false);
const newRouteName = ref("");
const renameRouteId = ref<string | null>(null);

const listMenuOptions = [
  {
    label: computed(() =>
      t("components.trackerViewRouteDrawer.contextMenu.new")
    ),
    key: "new",
    props: {
      onClick: () => {
        showRouteContextMenu.value = false;
        routeStore.addRoute(t("components.trackerViewRouteDrawer.nameNewRoute"));
      },
    },
  },
];

const itemMenuOptions = [
  {
    label: computed(() =>
      t("components.trackerViewRouteDrawer.contextMenu.rename")
    ),
    key: "rename",
    props: {
      onClick: () => {
        if (selectedRoute.value?.id) {
          newRouteName.value = selectedRoute.value.name || "";
          showRenameDialog.value = true;
        }
      },
    },
  },
  {
    label: computed(() =>
      t("components.trackerViewRouteDrawer.contextMenu.delete")
    ),
    key: "delete",
    props: {
      onClick: () => {
        if (selectedRoute.value) {
          routeStore.deleteRoute(selectedRoute.value.id);
        }
      },
    },
  },
  {
    key: "divider-1",
    type: "divider",
  },
  ...listMenuOptions,
];

const swipeActions = [
  {
    label: computed(() =>
      t("components.trackerViewRouteDrawer.contextMenu.rename")
    ),
    name: "rename",
    action: (id: string) => {
      const route = routeStore.routes.find((r) => r.id === id);
      renameRouteId.value = id;
      newRouteName.value = route?.name || "";
      showRenameDialog.value = true;
    },
  },
  {
    label: computed(() =>
      t("components.trackerViewRouteDrawer.contextMenu.delete")
    ),
    name: "delete",
    action: (id: string) => routeStore.deleteRoute(id),
    color: theme.value.errorColorSuppl,
  },
];

function openRouteContextMenu(e: MouseEvent) {
  e.stopPropagation();
  e.preventDefault();
  renameRouteId.value = routeStore.currentRouteId;
  if (showRouteContextMenu.value) {
    showRouteContextMenu.value = false;
    return;
  }
  contextMenuX.value = e.clientX;
  contextMenuY.value = e.clientY;
  showRouteContextMenu.value = true;
}

async function handleRename(routeId: string) {
  if (newRouteName.value.trim()) {
    await routeStore.updateRoute(routeId, {
      meta: { name: newRouteName.value.trim() },
    });
    showRenameDialog.value = false;
  }
}

const selectedRouteIds = ref<string[]>([]);
function handleRouteBatchDelete() {
  dialog.warning({
    title: t("components.trackerViewRouteDrawer.deleteConfirmation.title"),
    content: t("components.trackerViewRouteDrawer.deleteConfirmation.prompt"),
    positiveText: t("components.trackerViewRouteDrawer.deleteConfirmation.yes"),
    negativeText: t("components.trackerViewRouteDrawer.deleteConfirmation.no"),
    onPositiveClick: () => {
      selectedRouteIds.value.forEach((r) => {
        routeStore.deleteRoute(r);
        selectedRouteIds.value = selectedRouteIds.value.filter(
          (id) => id !== r
        );
      });
    },
  });
}
</script>

<template>
  <mgl-drawer
    v-model:show="show"
    :position="isMobile ? 'bottom' : 'left'"
    @click="() => (routeStore.currentRouteId = null)"
    @update:width="(w) => emit('update:width', w)"
    @contextmenu="(e) => openRouteContextMenu(e)"
  >
    <div class="drawer-floating">
      <slot
        v-if="isMobile && show"
        name="bottom-floating"
      />
    </div>
    <div class="drawer-container">
      <div class="drawer-header">
        <p class="drawer-title">
          {{ t("components.trackerViewRouteDrawer.routes") }}
        </p>
        <n-button
          v-if="selectedRouteIds.length > 0"
          strong
          secondary
          circle
          type="error"
          @click="handleRouteBatchDelete"
        >
          <template #icon>
            <n-icon :component="Trash" />
          </template>
        </n-button>
      </div>
      <div class="drawer-content" @touchstart="(e) => e.stopPropagation()" @touchend="(e) => e.stopPropagation()">
        <selectable-swipeable-menu-list
          v-model:selection="(routeStore.currentRouteId as any)"
          v-model:multiple-selection="selectedRouteIds"
          :items="routeStore.routes"
          :menu-options="itemMenuOptions"
          :swipe-actions="swipeActions"
          @contextmenu="
            (_, item) => {
              renameRouteId = item?.id ?? null;
              selectedRoute = item ?? null;
            }
          "
        >
          <template #item="{ item: route }">
            <div style="height: fit-content; padding: 8px 12px; text-align: left">
              <div>
                {{
                  route.name ?? t("components.trackerViewRouteDrawer.nameNewRoute")
                }}
              </div>
              <div style="font-size: 0.8rem; opacity: 0.7; display: flex; flex-direction: row; gap: 12px;">
                <div>
                  {{
                    t("components.trackerViewRouteDrawer.points", {
                      num: route.points.length,
                    })
                  }}
                </div>
                <div v-if="route.points.length > 1 && route.meta?.distance">
                  {{
                    t("components.trackerViewRouteDrawer.distance", {
                      distance: formatDistance(route.meta.distance)
                    })
                  }}
                </div>
              </div>
            </div>
          </template>
        </selectable-swipeable-menu-list>
      </div>
    </div>
  </mgl-drawer>

  <n-dropdown
    :show="showRouteContextMenu"
    :x="contextMenuX"
    :y="contextMenuY"
    :options="listMenuOptions.map((o) => ({ ...o, label: o.label.value }))"
    placement="bottom-start"
    trigger="manual"
    @clickoutside="showRouteContextMenu = false"
  />

  <n-modal
    v-model:show="showRenameDialog"
    preset="dialog"
    title="Rename Route"
    positive-text="Save"
    negative-text="Cancel"
    @positive-click="
      () => {
        if (renameRouteId) handleRename(renameRouteId);
      }
    "
  >
    <n-input
      v-model:value="newRouteName"
      placeholder="Enter new route name"
      @keyup.enter="
        () => {
          if (renameRouteId) handleRename(renameRouteId);
        }
      "
    />
  </n-modal>
</template>

<style scoped>
@keyframes drawer-floating-fade-in {
  0% {
    bottom: 100%;
    opacity: 0;
  }
  100% {
    bottom: calc(100% + 8px);
    opacity: 1;
  }
}

.drawer-container {
  display: flex;
  flex-direction: column;
  padding: 8px 1rem;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
}

.drawer-floating {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  animation: drawer-floating-fade-in 0.2s ease-in-out;
}

.drawer-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.route-list {
  max-height: calc(100% - 4em);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.route-list-item {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  border: 1px solid transparent;
  border-radius: v-bind("theme.borderRadius");
}

.route-list-item:hover:not(.active) {
  background-color: v-bind("theme.hoverColor");
  transition: background-color 0.1s ease-in-out;
}

.route-list-item.active {
  border: 1px solid v-bind("theme.primaryColorPressed");
}

.swipe-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.actions-col,
.content-col {
  text-align: center;
  overflow: hidden;
  top: 0;
  bottom: 0;
}

.active:deep(.content-col) {
  background-color: v-bind("theme.primaryColor");
  color: v-bind("theme.bodyColor");
  font-weight: 500;
}

.menu-action {
  overflow: hidden;
  text-align: center;
  height: 100%;
  flex-grow: 1;
  white-space: nowrap;
}
</style>
