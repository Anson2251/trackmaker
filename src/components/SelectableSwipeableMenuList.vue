<script lang="ts" setup generic="ListItemType extends { id: string; [key: string]: unknown }">
import { type Ref, ref } from "vue";
import { useThemeVars } from "naive-ui";
import { NDropdown, NCheckbox, type MenuOption } from "naive-ui";
import { clamp } from "lodash-es";

type SwipeState = {
  startX: number;
  delta: number;
  currentX: number;
  containerWidth: number;
  activeId: string | null;
  leftMax: number;
  rightMax: number;
};


const props = defineProps<{
  items: Array<ListItemType>;
  menuOptions: Array<MenuOption & { label?: string | Ref<string> }>;
  swipeActions: Array<{
    label: string | Ref<string>;
    name: string;
    action: (id: string) => void;
    color?: string;
  }>;
}>();

const selection = defineModel("selection", {
  type: String,
  default: null,
});

const multipleSelection = defineModel("multipleSelection", {
  type: Array as () => string[],
  default: () => [] as string[],
});

const emit = defineEmits<{
  (e: "contextmenu", event: MouseEvent, item?: ListItemType): void;
}>();

const theme = useThemeVars();

const swipeTransitionDuration = ref("0s");
const swipeState = ref<SwipeState>({
  startX: 0,
  delta: 0,
  currentX: 0,
  containerWidth: 0,
  activeId: null,
  leftMax: 0,
  rightMax: 0,
});

const showContextMenu = ref(false);
const contextMenuX = ref(0);
const contextMenuY = ref(0);
const selectedItem = ref<unknown | null>(null);
const leftSwipeMax = 120;
const rightSwipeMax = 40;

function handleTouchStart(e: TouchEvent, itemId: string) {
  if (swipeState.value.activeId !== itemId) clearSwipeState();
  const touch = e.touches[0];
  swipeState.value = {
    startX: touch.clientX,
    delta: swipeState.value.delta ?? 0,
    currentX: touch.clientX,
    containerWidth: (e.currentTarget as HTMLElement).offsetWidth,
    activeId: itemId,
    leftMax: leftSwipeMax < 0 ? swipeState.value.containerWidth : leftSwipeMax,
    rightMax:
      rightSwipeMax < 0 ? swipeState.value.containerWidth : rightSwipeMax,
  };
}

function handleTouchMove(e: TouchEvent) {
  if (!swipeState.value.activeId) return;
  swipeState.value.currentX = e.touches[0].clientX;
  swipeState.value.delta += swipeState.value.currentX - swipeState.value.startX;
  swipeState.value.delta = clamp(
    swipeState.value.delta,
    -swipeState.value.leftMax,
    swipeState.value.rightMax
  );
  swipeState.value.startX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (!swipeState.value.activeId) return;

  swipeTransitionDuration.value = `${
    (Math.abs(swipeState.value.delta) / swipeState.value.containerWidth) * 0.3
  }s`;
  setTimeout(() => {
    swipeTransitionDuration.value = "0s";
  }, 300);

  const threshold =
    swipeState.value.delta < 0
      ? swipeState.value.leftMax
      : swipeState.value.rightMax;
  swipeState.value.delta =
    Math.abs(swipeState.value.delta) > threshold * 0.4
      ? Math.sign(swipeState.value.delta) * threshold
      : 0;

  // Only clear selection on tap (not swipe) if no delta movement
  if (swipeState.value.delta === 0 && Math.abs(swipeState.value.delta) < 5) {
    // Don't clear selection on tap - let the click handler manage selection
  }
}

function handleItemClick(e: MouseEvent, item: ListItemType) {
  e.stopPropagation();
  if (swipeState.value.delta > 5) return;
  clearSwipeState();
  if (selection.value !== item.id) selection.value = item.id;
}

function clearSwipeState() {
  if (swipeState.value.delta > 0) return; // select checkbox opened
  swipeState.value = {
    startX: 0,
    delta: 0,
    currentX: 0,
    containerWidth: 0,
    activeId: null,
    leftMax: 0,
    rightMax: 0,
  };
}

function openItemContextMenu(e: MouseEvent, item: ListItemType) {
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

function toggleSelectCheckbox(itemId: string) {
  const newSelection = [...multipleSelection.value];
  if (newSelection.includes(itemId)) {
    const index = newSelection.indexOf(itemId);
    newSelection.splice(index, 1);
  } else {
    newSelection.push(itemId);
  }
  multipleSelection.value = newSelection;
}
</script>

<template>
  <div class="menu-list">
    <div
      v-for="item in props.items"
      :key="item.id"
      :class="['menu-list-item', ...(item.id === selection ? ['active'] : [])]"
      :style="{
        'touch-action': swipeState.activeId === item.id ? 'pan-y' : 'auto',
      }"
      @click="handleItemClick($event, item)"
      @contextmenu.prevent="(e) => openItemContextMenu(e, item)"
      @touchstart="handleTouchStart($event, item.id)"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="swipe-container">
        <div
          class="content-col"
          :style="{
            transform: `translateX(${
              swipeState.activeId === item.id || swipeState.delta > 0
                ? swipeState.delta
                : 0
            }px)`,
            willChange: swipeState.activeId === item.id ? `transform` : 'auto',
            flexDirection:
              swipeState.delta >= 0 || swipeState.activeId !== item.id
                ? 'row'
                : 'row-reverse',
          }"
        >
          <slot
            name="item"
            :item="item"
          >
            <div style="height: fit-content; padding: 8px 12px">
              <div>{{ item.name ?? "Untitled" }}</div>
            </div>
          </slot>
        </div>
        <div
          class="actions-col"
          :style="{
            width: `${
              swipeState.activeId === item.id && swipeState.delta < 0
                ? -swipeState.delta
                : 0
            }px`,
            visibility:
              swipeState.activeId === item.id && swipeState.delta < 0
                ? 'visible'
                : 'hidden',
            willChange: swipeState.activeId === item.id ? `width` : 'auto',
          }"
        >
          <button
            v-for="action in props.swipeActions"
            :key="action.name"
            class="menu-action"
            :style="{ background: action.color || theme.primaryColorSuppl }"
            @click="
              () => {
                action.action(item.id);
                swipeState.activeId = null;
              }
            "
          >
            {{ action.label }}
          </button>
        </div>
        <div
          class="select-col"
          :style="{
            width: `${swipeState.delta > 0 ? swipeState.delta : 0}px`,
            backgroundColor:
              selection === item.id ? theme.primaryColor : 'transparent',
            visibility: swipeState.delta > 0 ? 'visible' : 'hidden',
          }"
        >
          <div style="padding: 16px">
            <n-checkbox
              :checked="multipleSelection.includes(item.id)"
              :style="{
                border:
                  selection === item.id
                    ? `1px solid ${theme.bodyColor}`
                    : 'none',
                BorderRadius:
                  selection === item.id ? theme.borderRadiusSmall : 'none',
              }"
              @update:checked="() => toggleSelectCheckbox(item.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <n-dropdown
    :show="showContextMenu"
    :x="contextMenuX"
    :y="contextMenuY"
    :options="
      props.menuOptions.map((o) => ({ ...o, label: (o as MenuOption & {label: Ref<string>}).label?.value ?? o.label }))
    "
    placement="bottom-start"
    trigger="manual"
    @click="showContextMenu = false"
    @clickoutside="showContextMenu = false"
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
}

.select-col,
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

.select-col {
  transition: width v-bind("swipeTransitionDuration") ease-out;
  color: white;
  position: absolute;
  display: flex;
  left: 0;
  align-items: center;
}

.menu-action {
  overflow: hidden;
  text-align: center;
  height: 100%;
  flex-grow: 1;
  white-space: nowrap;
  border: none;
  color: white;
}
</style>
