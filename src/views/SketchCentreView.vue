<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import {
  NCard,
  NGrid,
  NGridItem,
  NButton,
  NIcon,
  NText,
  NSpace,
  NModal,
  NInput,
  NForm,
  NFormItem,
  NTag,
  NDrawer,
  NDrawerContent,
  useDialog,
  useMessage,
  useThemeVars,
} from "naive-ui";
import {
  Plus,
  Edit,
  Trash,
  MapPin,
  Calendar,
  Route,
  FileText,
} from "@vicons/tabler";
import { useSketchStore } from "@/store/sketch-store";
import { CartoSketch } from "@/libs/cartosketch";
import SketchEdit from "@/components/CartoSketch/SketchEdit.vue";
import { useWindowSize } from "@vueuse/core";

const { t } = useI18n();
const dialog = useDialog();
const message = useMessage();
const themeVars = useThemeVars();
const sketchStore = useSketchStore();

// Use the sketch store for data
const sketches = computed(() => sketchStore.sketches);
const selectedSketchId = computed({
  get: () => sketchStore.currentSketchId,
  set: (value) => sketchStore.setCurrentSketchId(value)
});

// Computed property for card style based on selection state
const getCardStyle = (sketchId: string) => {
  const isSelected = selectedSketchId.value === sketchId;
  return {
    // boxShadow: isSelected ? `0 0px 48px -8px ${themeVars.value.primaryColor}, 0 0px 6px -2px ${themeVars.value.primaryColor}` : '',
    // transform: isSelected ? 'translateY(-2px)' : '',
    borderColor: isSelected ? themeVars.value.primaryColor : '',
    borderWidth: isSelected ? '2px' : '1px',
    padding: isSelected ? '0px' : '1px',
    zIndex: isSelected ? 0 : 1,
  };
};
const showNewSketchModal = ref(false);
const newSketchName = ref("");
const newSketchDescription = ref("");
const showEditDrawer = ref(false);
const editingSketchId = ref("");

// Load sketches from the store
const loadSketches = async () => {
  await sketchStore.init();
};

// Format date for display
const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString();
};

// Get the number of routes in a sketch
const routeCount = (sketch: CartoSketch) => {
  return sketch.routes.routes.length;
};

// Get the number of drafts in a sketch
const draftCount = (sketch: CartoSketch) => {
  return sketch.drafts.drafts.length;
};

// Select a sketch
const selectSketch = (sketchId: string) => {
  sketchStore.setCurrentSketchId(sketchId);
};

// Show sketch editor in drawer
const editSketch = (sketchId: string) => {
  editingSketchId.value = sketchId;
  showEditDrawer.value = true;
};

// Create a new sketch
const createNewSketch = async () => {
  if (!newSketchName.value.trim()) {
    message.error(t("sketchCentreView.nameRequired"));
    return;
  }

  const newSketch = await sketchStore.createSketch(newSketchName.value);
  await sketchStore.updateSketch(newSketch.id, {
    description: newSketchDescription.value
  });

  sketchStore.setCurrentSketchId(newSketch.id);
  showNewSketchModal.value = false;
  newSketchName.value = "";
  newSketchDescription.value = "";

  message.success(t("sketchCentreView.sketchCreated"));
};

// Delete a sketch with confirmation
const deleteSketch = (sketchId: string) => {
  const sketch = sketches.value.find(s => s.id === sketchId);
  if (!sketch) return;

  dialog.warning({
    title: t("sketchCentreView.deleteConfirmation.title"),
    content: t("sketchCentreView.deleteConfirmation.prompt", { name: sketch.meta.name }),
    positiveText: t("sketchCentreView.deleteConfirmation.yes"),
    negativeText: t("sketchCentreView.deleteConfirmation.no"),
    onPositiveClick: async () => {
      await sketchStore.deleteSketch(sketchId);
      message.success(t("sketchCentreView.sketchDeleted"));
    },
  });
};

const {width: windowWidth} = useWindowSize();
// Responsive grid columns based on screen size
const gridCols = computed(() => Math.floor(windowWidth.value / 360));
onMounted(() => {
  loadSketches();
});

const theme = useThemeVars();
</script>

<template>
  <div class="sketch-centre-view">
    <div class="header">
      <h1 class="title">
        {{ t("sketchCentreView.title") }}
      </h1>
      <n-button
        type="primary"
        secondary
        circle
        @click="showNewSketchModal = true"
      >
        <template #icon>
          <n-icon><plus /></n-icon>
        </template>
      </n-button>
    </div>

    <n-grid
      :cols="gridCols"
      :x-gap="16"
      :y-gap="16"
      responsive="screen"
    >
      <n-grid-item
        v-for="sketch in sketches"
        :key="sketch.id"
      >
        <n-card
          :class="['sketch-card', { 'selected': selectedSketchId === sketch.id }]"
          :style="getCardStyle(sketch.id)"
          hoverable
          bordered
          clickable
          @click="selectSketch(sketch.id)"
        >
          <template #header>
            <div class="card-header">
              <n-text class="sketch-name">
                {{ sketch.meta.name }}
              </n-text>
            </div>
          </template>

          <template #header-extra>
            <n-space>
              <n-button
                quaternary
                circle
                size="small"
                @click.stop="editSketch(sketch.id)"
              >
                <template #icon>
                  <n-icon><edit /></n-icon>
                </template>
              </n-button>
              <n-button
                quaternary
                circle
                size="small"
                @click.stop="deleteSketch(sketch.id)"
              >
                <template #icon>
                  <n-icon><trash /></n-icon>
                </template>
              </n-button>
            </n-space>
          </template>

          <div class="card-content">
            <n-text
              depth="3"
              class="description"
            >
              {{ sketch.meta.description || t("sketchCentreView.noDescription") }}
            </n-text>

            <div class="meta-info">
              <div class="meta-item">
                <n-icon :size="16">
                  <calendar />
                </n-icon>
                <n-text
                  depth="3"
                  style="font-size: 12px;"
                >
                  {{ formatDate(sketch.meta.creation_timestamp) }}
                </n-text>
              </div>

              <div class="meta-item">
                <n-icon :size="16">
                  <route />
                </n-icon>
                <n-text
                  depth="3"
                  style="font-size: 12px;"
                >
                  {{ routeCount(sketch) }} {{ t("sketchCentreView.routes") }}
                </n-text>
              </div>

              <div class="meta-item">
                <n-icon :size="16">
                  <file-text />
                </n-icon>
                <n-text
                  depth="3"
                  style="font-size: 12px;"
                >
                  {{ draftCount(sketch) }} {{ t("sketchCentreView.drafts") }}
                </n-text>
              </div>
            </div>

            <div
              v-if="sketch.meta.tags.length > 0"
              class="tags"
            >
              <n-tag
                v-for="tag in sketch.meta.tags.slice(0, 3)"
                :key="tag"
                size="small"
                round
              >
                {{ tag }}
              </n-tag>
              <n-tag
                v-if="sketch.meta.tags.length > 3"
                size="small"
                round
              >
                +{{ sketch.meta.tags.length - 3 }}
              </n-tag>
            </div>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>

    <div
      v-if="sketches.length === 0"
      class="empty-state"
    >
      <n-icon
        size="48"
        depth="3"
      >
        <map-pin />
      </n-icon>
      <n-text depth="3">
        {{ t("sketchCentreView.emptyState") }}
      </n-text>
      <n-button
        type="primary"
        @click="showNewSketchModal = true"
      >
        <template #icon>
          <n-icon><plus /></n-icon>
        </template>
        {{ t("sketchCentreView.createFirstSketch") }}
      </n-button>
    </div>

    <!-- New Sketch Modal -->
    <n-modal
      v-model:show="showNewSketchModal"
      :mask-closable="true"
      preset="card"
      style="max-width: 500px"
      :title="t('sketchCentreView.newSketch')"
    >
      <n-form
        :model="{ name: newSketchName, description: newSketchDescription }"
        label-placement="top"
        require-mark-placement="right-hanging"
      >
        <n-form-item
          :label="t('sketchCentreView.sketchName')"
          required
        >
          <n-input
            v-model:value="newSketchName"
            :placeholder="t('sketchCentreView.sketchNamePlaceholder')"
          />
        </n-form-item>
        <n-form-item :label="t('sketchCentreView.sketchDescription')">
          <n-input
            v-model:value="newSketchDescription"
            type="textarea"
            :placeholder="t('sketchCentreView.sketchDescriptionPlaceholder')"
            :autosize="{ minRows: 3, maxRows: 5 }"
          />
        </n-form-item>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button @click="showNewSketchModal = false">
            {{ t("sketchCentreView.cancel") }}
          </n-button>
          <n-button
            type="primary"
            @click="createNewSketch"
          >
            {{ t("sketchCentreView.create") }}
          </n-button>
        </n-space>
      </template>
    </n-modal>

    <!-- Edit Sketch Drawer -->
    <n-drawer
      v-model:show="showEditDrawer"
      :width="800"
      :placement="'right'"
      display-directive="show"
      :height="'100%'"
    >
      <n-drawer-content
        :title="t('sketchCentreView.editSketch')"
        closable
        :body-content-style="{ padding: 0, height: '100%' }"
      >
        <SketchEdit
          v-if="editingSketchId"
          :sketch-id="editingSketchId"
        />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style scoped>
.sketch-centre-view {
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: v-bind('theme.bodyColor');
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: center;
  padding-bottom: 16px;
}

.title {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}

.sketch-card {
  height: 100%;
  transition: border-color 0.3s ease;
}

.sketch-card.selected {
  position: relative;
  background-color: var(--n-color-hover);
}

.sketch-card.selected::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-color-hover));
  border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sketch-name {
  font-weight: 500;
  font-size: 16px;
}

.selected-icon {
  color: var(--primary-color);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.description {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 40px;
}

.meta-info {
  display: flex;
  gap: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 0;
  text-align: center;
}

@media (max-width: 640px) {
  .sketch-centre-view {
    padding: 12px;
  }

  .title {
    font-size: 20px;
    text-align: center;
  }

  .meta-info {
    flex-direction: row;
    gap: 8px;
  }
}
</style>
