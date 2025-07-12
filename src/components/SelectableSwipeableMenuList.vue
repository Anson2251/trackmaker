<script lang="ts" setup>
import { ref } from "vue";
import { useThemeVars } from "naive-ui";
import { NDropdown } from "naive-ui";
import { clamp } from "lodash-es";
import type { Route } from "@/libs/store/types";

const props = defineProps<{
  items: Array<{ id: string; [key: string]: any }>;
  selectedId: string | null;
  menuOptions: Array<any>;
  swipeActions: Array<{
    label: string;
    name: string;
    action: (id: string) => void;
    color?: string;
  }>;
}>();

const emit = defineEmits<{
  (e: "select", id: string): void;
  (e: "contextmenu", event: MouseEvent, item?: Route): void;
}>();

const theme = useThemeVars();

const swipeTransitionDuration = ref("0s");
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

const showContextMenu = ref(false);
const contextMenuX = ref(0);
const contextMenuY = ref(0);
const selectedItem = ref<any>(null);

function handleTouchStart(e: TouchEvent, itemId: string) {
  if (swipeState.value.activeId !== itemId) clearSwipeState();
  const touch = e.touches[0];
  swipeState.value = {
    startX: touch.clientX,
    delta: swipeState.value.delta ?? 0,
    currentX: touch.clientX,
    containerWidth: (e.currentTarget as HTMLElement).offsetWidth,
    activeId: itemId,
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
    (swipeState.value.delta / (swipeState.value.containerWidth)) * 0.3
  }s`;
  setTimeout(() => {
    swipeTransitionDuration.value = "0s";
  }, 300);

  swipeState.value.delta =
    swipeState.value.delta > swipeState.value.containerWidth * 0.4
      ? swipeState.value.containerWidth
      : 0;
}

function handleItemClick(e: MouseEvent, item: any) {
  e.stopPropagation();
  if (swipeState.value.delta > 5) return;
  clearSwipeState();
  emit("select", item.id);
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

function openItemContextMenu(e: MouseEvent, item: any) {
  e.stopPropagation();
  e.preventDefault();
  if (showContextMenu.value) {
    showContextMenu.value = false;
    return;
  }
  selectedItem.value = item;
  contextMenuX.value = e.clientX;
  contextMenuY.value = e.clientY;
  showContextMenu.value = true;
  emit("contextmenu", e, item);
}
</script>

<template>
  <div class="menu-list">
    <div
      v-for="item in props.items"
      :key="item.id"
      @click="handleItemClick($event, item)"
      @contextmenu.prevent="(e) => openItemContextMenu(e, item)"
      @touchstart="handleTouchStart($event, item.id)"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :class="[
        'menu-list-item',
        ...(item.id === props.selectedId ? ['active'] : []),
      ]"
      :style="{
        'touch-action': swipeState.activeId === item.id ? 'pan-y' : 'auto',
      }"
    >
      <div class="swipe-container">
        <div
          class="content-col"
          :style="{
            transform: `translateX(${
              swipeState.activeId === item.id ? -swipeState.delta : 0
            }px)`,
            willChange: swipeState.activeId === item.id ? `transform` : 'auto',
          }"
        >
          <slot name="item" :item="item">
            <div style="height: fit-content; padding: 8px 12px">
              <div>{{ item.name ?? "Untitled" }}</div>
            </div>
          </slot>
        </div>
        <div
          class="actions-col"
          :style="{
            width: `${
              swipeState.activeId === item.id ? swipeState.delta : 0
            }px`,
            willChange: swipeState.activeId === item.id ? `width` : 'auto',
          }"
        >
          <button
            v-for="action in props.swipeActions"
            :key="action.name"
            class="menu-action"
            @click="
              () => {
                action.action(item.id);
                swipeState.activeId = null;
              }
            "
            :style="{ background: action.color || theme.primaryColorSuppl }"
          >
            {{ action.label }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <n-dropdown
    :show="showContextMenu"
    :x="contextMenuX"
    :y="contextMenuY"
    :options="props.menuOptions"
    @clickoutside="showContextMenu = false"
    placement="bottom-start"
    trigger="manual"
  />
</template>

<style scoped>
.menu-list {
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.menu-list-item {
  position: relative;
  overflow: visible;
  width: 100%;
  height: fit-content;
}

.menu-list-item:hover:not(.active) {
  background-color: v-bind("theme.hoverColor");
  transition: background-color 0.1s ease-in-out;
}

.swipe-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: v-bind("theme.borderRadius");
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
  color: white;
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
