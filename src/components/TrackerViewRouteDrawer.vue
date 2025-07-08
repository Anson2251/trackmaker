<script lang="ts" setup>
import { ref } from "vue";
import { useThemeVars } from "naive-ui";
import { useRouteStore } from "@/store/route-store";
import { NDropdown, NModal, NInput } from "naive-ui";
import type { Route } from "@/libs/store/types";
import { useI18n } from "vue-i18n";
import MglDrawer from "./MglDrawer.vue";

const { t } = useI18n()

const emit = defineEmits<{
  (e: "update:width", value: number): void;
}>();

const routeStore = useRouteStore();
const theme = useThemeVars();

const show = defineModel("show", {
  type: Boolean,
  default: false,
});

const showItemContextMenu = ref(false);
const showRouteContextMenu = ref(false);
const contextMenuX = ref(0);
const contextMenuY = ref(0);
const selectedRoute = ref<Route | null>(null);
const showRenameDialog = ref(false);
const newRouteName = ref("");

const listMenuOptions = [
  {
    label: t('components.trackerViewRouteDrawer.contextMenu.new'),
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
    label: t('components.trackerViewRouteDrawer.contextMenu.rename'),
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
    label: t('components.trackerViewRouteDrawer.contextMenu.delete'),
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
  <mgl-drawer v-model:show=show @click="() => routeStore.currentRouteId = null"
    @update:width="(w) => emit('update:width', w)" @contextmenu="(e) => openRouteContextMenu(e)">
    <div class="p-4" style="height: 100%">
      <p class="text-lg font-bold mb-4 ">{{ t("components.trackerViewRouteDrawer.routes") }}</p>
      <div class="route-list">
        <div v-for="route in routeStore.routes" :key="route.id" @click="
          (e) => {
            e.stopPropagation();
            routeStore.currentRouteId = route.id;
          }
        " @contextmenu.prevent="
          (e) => {
            e.stopPropagation();
            openItemContextMenu(e, route);
          }
        " :class="[
        'route-list-item',
        ...(route.id === routeStore.currentRouteId ? ['active'] : []),
      ]">
          <div>{{ route.name ?? t('components.trackerViewRouteDrawer.nameNewRoute') }}</div>
          <div>{{ t('components.trackerViewRouteDrawer.points', { num: route.points.length }) }}</div>
        </div>
      </div>
    </div>
  </mgl-drawer>

  <n-dropdown :show="showItemContextMenu" :x="contextMenuX" :y="contextMenuY" :options="itemMenuOptions"
    @clickoutside="showItemContextMenu = false" placement="bottom-start" trigger="manual"/>

  <n-dropdown :show="showRouteContextMenu" :x="contextMenuX" :y="contextMenuY" :options="listMenuOptions"
    @clickoutside="showRouteContextMenu = false" placement="bottom-start" trigger="manual"/>

  <n-modal preset="dialog" v-model:show="showRenameDialog" title="Rename Route" positive-text="Save"
    negative-text="Cancel" @positive-click="handleRename">
    <n-input v-model:value="newRouteName" placeholder="Enter new route name" @keyup.enter="handleRename" />
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
  width: 100%;
  height: fit-content;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: v-bind("theme.borderRadius");
}

.route-list-item:hover:not(.active) {
  background-color: v-bind("theme.hoverColor");
  transition: background-color 0.1s ease-in-out;
}

.route-list-item.active {
  border: 1px solid v-bind("theme.primaryColorPressed");
  background-color: v-bind("theme.primaryColor");
  color: v-bind("theme.bodyColor");
  font-weight: 500;
}
</style>
