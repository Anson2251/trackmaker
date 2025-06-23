<script lang="ts" setup>
import { computed, useTemplateRef, watch, ref } from "vue";
import { useThemeVars } from "naive-ui";
import { useRouteStore } from "@/store/route-store";
import { NButton, NDropdown, NModal, NInput } from "naive-ui";
import type { Route } from "@/libs/store/types";
import { clamp } from "lodash-es";

const emit = defineEmits<{
    (e: 'update:width', value: number): void;
}>()

const routeStore = useRouteStore();
const theme = useThemeVars();

const routeDrawer = useTemplateRef("route-drawer");
const routeDrawerWidth = computed(() => Math.min(clamp(Math.round((routeDrawer.value?.parentElement?.clientWidth ?? 2000) * 0.4), 320, 640), (routeDrawer.value?.parentElement?.clientWidth ?? Infinity) - 48));
const drawerTranslation = computed(
  () => `${-16 - (routeDrawerWidth.value)}px`
);

watch(routeDrawerWidth, () => emit('update:width', routeDrawerWidth.value))

const drawerWidth = computed(
  () => `${routeDrawerWidth.value}px`
);

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
    label: 'New Route',
    key: 'new',
    props: {
      onClick: () => {
        showRouteContextMenu.value = false;
        routeStore.addRoute({name: 'Untitled Route', points: []})
      }
    }
  },
]

const itemMenuOptions = [
  {
    label: 'Rename',
    key: 'rename',
    props: {
      onClick: () => {
        showItemContextMenu.value = false;
        if (selectedRoute.value?.id) {
          newRouteName.value = selectedRoute.value.name || '';
          showRenameDialog.value = true;
          console.log(showRenameDialog.value)
        }
      }
    }
  },
  {
    label: 'Delete',
    key: 'delete',
    props: {
      onClick: () => {
        showItemContextMenu.value = false;
        if (selectedRoute.value) {
          routeStore.deleteRoute(selectedRoute.value.id);
        }
      }
    }
  },
  {
    key: 'divider-1',
    type: 'divider'
  },
  ...listMenuOptions,
];



function openItemContextMenu(e: MouseEvent, route: Route) {
  e.preventDefault()
  selectedRoute.value = route;
  contextMenuX.value = e.clientX;
  contextMenuY.value = e.clientY;
  showItemContextMenu.value = true;
}

function openRouteContextMenu(e: MouseEvent) {
  e.preventDefault()
  contextMenuX.value = e.clientX;
  contextMenuY.value = e.clientY;
  showRouteContextMenu.value = true;
}

async function handleRename() {
  if (selectedRoute.value && newRouteName.value.trim()) {
    await routeStore.updateRoute(selectedRoute.value.id, {
      name: newRouteName.value.trim()
    });
    showRenameDialog.value = false;
  }
}
</script>

<template>
  <transition name="slide">
    <div class="route-drawer" ref="route-drawer" v-show="show" @click="routeStore.currentRouteId = null" @contextmenu="(e) => openRouteContextMenu(e)">
      <div class="p-4" style="height: 100%">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-content: center;
            height: 4em;
          "
        >
          <p class="text-lg font-bold mb-4">Routes</p>
        </div>
        <div class="route-list">
          <div
            v-for="route in routeStore.routes"
            :key="route.id"
            @click="
              (e) => {
                e.stopPropagation()
                routeStore.currentRouteId = route.id;
              }
            "
            @contextmenu.prevent="(e) => {
              e.stopPropagation();
              openItemContextMenu(e, route)
            }"
            :class="[
              'route-list-item',
              ...(route.id === routeStore.currentRouteId ? ['active'] : []),
            ]"
          >
            <div>{{ route.name ?? 'Untitled Route' }}</div>
            <div>{{ route.points.length }} points</div>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <n-dropdown
    :show="showItemContextMenu"
    :x="contextMenuX"
    :y="contextMenuY"
    :options="itemMenuOptions"
    @clickoutside="showItemContextMenu = false"
  />

  <n-dropdown
    :show="showRouteContextMenu"
    :x="contextMenuX"
    :y="contextMenuY"
    :options="listMenuOptions"
    @clickoutside="showRouteContextMenu = false"
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
.route-drawer {
  position: absolute;
  padding-left: 48px;
  padding-bottom: 32px;
  box-sizing: border-box;

  bottom: 0;
  left: 0px;

  top: 0;
  width: v-bind(drawerWidth);

  background-color: v-bind("theme.modalColor");
  box-shadow: 10px 4px 15px 3px rgba(0, 0, 0, 0.1),
    2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: v-bind("theme.borderRadius");
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(v-bind("drawerTranslation"));
  opacity: 0.8;
  transition: all 0.5s;
}

.slide-leave-from,
.slide-enter-to {
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.5s;
}

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
  transition: background-color 0.1s ease-in-out;
}

.route-list-item:hover:not(.active) {
  background-color: v-bind("theme.hoverColor");
}

.route-list-item.active {
  background-color: v-bind("theme.actionColor");
}
</style>
