<script setup lang="ts">
import { NForm, NFormItem, NInput, NSwitch, NColorPicker, NInputNumber, NText, NTime, NTag, NEmpty } from 'naive-ui';
import type { GeographicDraftItemType, GeographicDraftItemProperties, GeographicRouteItemProperties } from '@/libs/cartosketch/definitions';
import type { CartoSketchRouteItem } from '@/libs/cartosketch/route';

interface Props {
  component: GeographicDraftItemType | CartoSketchRouteItem | null;
  type: 'draft' | 'route' | null;
}

defineProps<Props>();

const emit = defineEmits<{
  updateProperties: [properties: GeographicDraftItemProperties | GeographicRouteItemProperties];
  updateMeta: [meta: { name: string }];
}>();
</script>

<template>
  <div
    v-if="component"
    class="properties-panel"
  >
    <n-form>
      <!-- Common Properties -->
      <n-form-item label="Name">
        <NInput
          :value="component.meta.name"
          @update:value="(val) => emit('updateMeta', { name: val })"
        />
      </n-form-item>

      <n-form-item label="Visible">
        <n-switch
          :value="component.properties.visible !== false"
          @update:value="(val) => emit('updateProperties', { visible: val })"
        />
      </n-form-item>

      <!-- Draft-specific Properties -->
      <template v-if="type === 'draft'">
        <n-form-item label="Fill Color">
          <n-color-picker
            :value="(component as GeographicDraftItemType).properties.fillColor || '#007bff'"
            :show-alpha="false"
            @update:value="(val) => emit('updateProperties', { fillColor: val })"
          />
        </n-form-item>
        <n-form-item label="Stroke Color">
          <n-color-picker
            :value="(component as GeographicDraftItemType).properties.strokeColor || '#0056b3'"
            :show-alpha="false"
            @update:value="(val) => emit('updateProperties', { strokeColor: val })"
          />
        </n-form-item>
        <n-form-item label="Stroke Thickness">
          <n-input-number
            :value="(component as GeographicDraftItemType).properties.strokeThickness || 2"
            :min="1"
            :max="10"
            @update:value="(val) => emit('updateProperties', { strokeThickness: val ?? undefined })"
          />
        </n-form-item>
      </template>

      <!-- Route-specific Properties -->
      <template v-if="type === 'route'">
        <n-form-item label="Stroke Color">
          <n-color-picker
            :value="(component as CartoSketchRouteItem).properties.strokeColor || '#28a745'"
            :show-alpha="false"
            @update:value="(val) => emit('updateProperties', { strokeColor: val })"
          />
        </n-form-item>
        <n-form-item label="Stroke Thickness">
          <NInputNumber
            :value="(component as CartoSketchRouteItem).properties.strokeThickness || 3"
            :min="1"
            :max="10"
            @update:value="(val) => emit('updateProperties', { strokeThickness: val ?? undefined })"
          />
        </n-form-item>
      </template>
    </n-form>

    <n-text
      depth="3"
      class="metadata"
    >
      <div style="padding-top: 8px;">
        Created:
        <n-time
          :time="component.meta.creation_timestamp"
          type="datetime"
        />
      </div>
      <div>
        Modified:
        <n-time
          :time="component.meta.modification_timestamp"
          type="datetime"
        />
      </div>
      <div v-if="component.meta.tags?.length">
        Tags:
        <n-tag
          v-for="tag in component.meta.tags"
          :key="tag"
          size="small"
          style="margin-left: 4px"
        >
          {{ tag }}
        </n-tag>
      </div>
    </n-text>
  </div>
  <div
    v-else
    style="height: 100%; width: 100%; display: flex; justify-content: center; align-items: center;"
  >
    <n-empty description="Select a component to edit properties" />
  </div>
</template>

<style scoped>
.properties-panel {
  padding: 12px;
  min-height: 0;
  overflow: auto;
}

.metadata {
  font-size: 12px;
  line-height: 1.4;
}

.metadata > div {
  margin-bottom: 4px;
}
</style>
