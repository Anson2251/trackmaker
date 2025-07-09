<script lang="ts" setup>
import { ref } from "vue";
import { useThemeVars } from "naive-ui";
import { useRouteStore } from "@/store/route-store";
import { NDropdown, NModal, NInput } from "naive-ui";
import type { Route } from "@/libs/store/types";
import { useI18n } from "vue-i18n";
import MglDrawer from "./MglDrawer.vue";
import { clamp } from "lodash-es";

const { t } = useI18n();

const emit = defineEmits<{
  (e: "update:width", value: number): void;
}>();

const routeStore = useRouteStore();
const theme = useThemeVars();

const show = defineModel("show", {
  type: Boolean,
  default: false,
});

const swipeTransitionDuration = ref("0s");
// Swipe handling
const swipeState = ref<{
  startX: number;
  delta: number;
  currentX: number;
  containerWidth: number;
  activeId: string | null;
}>({
  startX: 0,
  delta: 0,
  currentX: 0,
  containerWidth: 0,
  activeId: null,
});

function handleTouchStart(e: TouchEvent, routeId: string) {
  if (swipeState.value.activeId !== routeId) clearSwipeState();
  const touch = e.touches[0];
  swipeState.value = {
    startX: touch.clientX,
    delta: swipeState.value.delta ?? 0,
    currentX: touch.clientX,
    containerWidth: (e.currentTarget as HTMLElement).offsetWidth,
    activeId: routeId,
  };
}

function handleTouchMove(e: TouchEvent) {
  if (!swipeState.value.activeId) return;
  swipeState.value.currentX = e.touches[0].clientX;
  swipeState.value.delta += swipeState.value.startX - swipeState.value.currentX;
  swipeState.value.delta = clamp(
    swipeState.value.delta,
    0,
    swipeState.value.containerWidth
  );

  swipeState.value.startX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (!swipeState.value.activeId) return;

  swipeTransitionDuration.value = `${
    (swipeState.value.delta / swipeState.value.containerWidth) * 0.3
  }s`;
  setTimeout(() => {
    swipeTransitionDuration.value = "0s";
  }, 300);

  swipeState.value.delta =
    swipeState.value.delta > swipeState.value.containerWidth * 0.5
      ? swipeState.value.containerWidth
      : 0;
}

const showItemContextMenu = ref(false);
const showRouteContextMenu = ref(false);
const contextMenuX = ref(0);
const contextMenuY = ref(0);
const selectedRoute = ref<Route | null>(null);
const showRenameDialog = ref(false);
const newRouteName = ref("");

const listMenuOptions = [
  {
    label: t("components.trackerViewRouteDrawer.contextMenu.new"),
    key: "new",
    props: {
      onClick: () => {
        showRouteContextMenu.value = false;
        routeStore.addRoute({ name: "Untitled Route", points: [] });
      },
    },
  },
];

const itemMenuOptions = [
  {
    label: t("components.trackerViewRouteDrawer.contextMenu.rename"),
    key: "rename",
    props: {
      onClick: () => {
        showItemContextMenu.value = false;
        if (selectedRoute.value?.id) {
          newRouteName.value = selectedRoute.value.name || "";
          showRenameDialog.value = true;
          console.log(showRenameDialog.value);
        }
      },
    },
  },
  {
    label: t("components.trackerViewRouteDrawer.contextMenu.delete"),
    key: "delete",
    props: {
      onClick: () => {
        showItemContextMenu.value = false;
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

function openItemContextMenu(e: MouseEvent, route: Route) {
  e.preventDefault();
  if (showItemContextMenu.value) {
    showItemContextMenu.value = false;
    return;
  }
  selectedRoute.value = route;
  contextMenuX.value = e.clientX;
  contextMenuY.value = e.clientY;
  showItemContextMenu.value = true;
}

function openRouteContextMenu(e: MouseEvent) {
  e.preventDefault();
  if (showRouteContextMenu.value) {
    showRouteContextMenu.value = false;
    return;
  }
  contextMenuX.value = e.clientX;
  contextMenuY.value = e.clientY;
  showRouteContextMenu.value = true;
}

function handleRenameAction(route: Route) {
  if (swipeState.value.delta === 0) return;
  selectedRoute.value = route;
  newRouteName.value = route.name || "";
  showRenameDialog.value = true;
}

function handleDeleteAction(routeId: string) {
  if (swipeState.value.delta === 0) return;
  routeStore.deleteRoute(routeId);
}

function clearSwipeState() {
  swipeState.value = {
    startX: 0,
    delta: 0,
    currentX: 0,
    containerWidth: 0,
    activeId: null,
  };
}

async function handleRename() {
  if (selectedRoute.value && newRouteName.value.trim()) {
    await routeStore.updateRoute(selectedRoute.value.id, {
      name: newRouteName.value.trim(),
    });
    showRenameDialog.value = false;
  }
}
</script>

<template>
  <mgl-drawer
    v-model:show="show"
    @click="() => (routeStore.currentRouteId = null)"
    @update:width="(w) => emit('update:width', w)"
    @contextmenu="(e) => openRouteContextMenu(e)"
  >
    <div class="p-4" style="height: 100%">
      <p class="text-lg font-bold mb-4">
        {{ t("components.trackerViewRouteDrawer.routes") }}
      </p>
      <div class="route-list">
        <div
          v-for="route in routeStore.routes"
          :key="route.id"
          @click="
            (e) => {
              e.stopPropagation();
              console.log(swipeState.delta)
              if (swipeState.delta > 5) return
              clearSwipeState()
              routeStore.currentRouteId = route.id;
              console.log('route clicked', route.id)
            }
          "
          @contextmenu.prevent="
            (e) => {
              e.stopPropagation();
              openItemContextMenu(e, route);
            }
          "
          @touchstart="handleTouchStart($event, route.id)"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :class="[
            'route-list-item',
            ...(route.id === routeStore.currentRouteId ? ['active'] : []),
          ]"
          :style="{
            'touch-action': swipeState.activeId === route.id ? 'pan-y' : 'auto',
          }"
          :data-route-id="route.id"
        >
          <div class="swipe-container">
            <div
              class="content-col"
              :style="{
                transform: `translateX(${
                  swipeState.activeId === route.id ? -swipeState.delta : 0
                }px)`,
                willChange:
                  swipeState.activeId === route.id ? `transform` : 'auto',
              }"
            >
              <div style="height: fit-content; padding: 8px 12px">
                <div>
                  {{
                    route.name ??
                    t("components.trackerViewRouteDrawer.nameNewRoute")
                  }}
                </div>
                <div>
                  {{
                    t("components.trackerViewRouteDrawer.points", {
                      num: route.points.length,
                    })
                  }}
                </div>
              </div>
            </div>
            <div
              class="actions-col"
              :style="{
                width: `${
                  swipeState.activeId === route.id ? swipeState.delta : 0
                }px`,
                willChange: swipeState.activeId === route.id ? `width` : 'auto',
              }"
            >
              <button
                class="menu-action"
                @click="() => handleRenameAction(route)"
              >
                {{ t("components.trackerViewRouteDrawer.contextMenu.rename") }}
              </button>
              <button
                class="menu-action"
                @click="() => handleDeleteAction(route.id)"
                :style="{ background: theme.errorColorSuppl }"
              >
                {{ t("components.trackerViewRouteDrawer.contextMenu.delete") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </mgl-drawer>

  <n-dropdown
    :show="showItemContextMenu"
    :x="contextMenuX"
    :y="contextMenuY"
    :options="itemMenuOptions"
    @clickoutside="showItemContextMenu = false"
    placement="bottom-start"
    trigger="manual"
  />

  <n-dropdown
    :show="showRouteContextMenu"
    :x="contextMenuX"
    :y="contextMenuY"
    :options="listMenuOptions"
    @clickoutside="showRouteContextMenu = false"
    placement="bottom-start"
    trigger="manual"
  />

  <n-modal
    preset="dialog"
    v-model:show="showRenameDialog"
    title="Rename Route"
    positive-text="Save"
    negative-text="Cancel"
    @positive-click="handleRename"
  >
    <n-input
      v-model:value="newRouteName"
      placeholder="Enter new route name"
      @keyup.enter="handleRename"
    />
  </n-modal>
</template>

<style scoped>
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

.content-col {
  position: relative;
  transition: transform v-bind("swipeTransitionDuration") ease-out;

  height: 100%;
  right: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.actions-col {
  transition: width v-bind("swipeTransitionDuration") ease-out;
  position: absolute;
  display: flex;
  right: 0;
  align-items: center;
}

.menu-action {
  overflow: hidden;
  text-align: center;
  height: 100%;
  flex-grow: 1;
  white-space: nowrap;
}
</style>
