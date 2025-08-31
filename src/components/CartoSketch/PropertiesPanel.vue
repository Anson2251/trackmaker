<script setup lang="ts">
import { NForm, NFormItem, NSwitch, NColorPicker, NInputNumber, NEmpty, NTabs, NTabPane, NInput, NDynamicTags } from 'naive-ui';
import type { GeographicDraftItemType, GeographicDraftItemProperties, GeographicRouteItemProperties } from '@/libs/cartosketch/definitions';
import type { CartoSketchRouteItem } from '@/libs/cartosketch/route';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Props {
  component: GeographicDraftItemType | CartoSketchRouteItem | null;
  type: 'draft' | 'route' | null;
}

defineProps<Props>();

const emit = defineEmits<{
  updateProperties: [properties: GeographicDraftItemProperties | GeographicRouteItemProperties];
  updateMeta: [meta: { name: string; description: string; tags: string[] }];
}>();
</script>

<template>
  <div
    v-if="component"
    class="properties-panel"
  >
    <n-tabs
      type="line"
      animated
      :default-value="'properties'"
    >
      <!-- Properties Tab -->
      <n-tab-pane
        name="properties"
        :tab="t('sketchEdit.properties')"
      >
        <n-form>
          <n-form-item :label="t('sketchEdit.visible')">
            <n-switch
              :value="component.properties.visible !== false"
              @update:value="(val) => emit('updateProperties', { visible: val })"
            />
          </n-form-item>

          <!-- Draft-specific Properties -->
          <template v-if="type === 'draft'">
            <n-form-item :label="t('sketchEdit.fillColor')">
              <n-color-picker
                :value="(component as GeographicDraftItemType).properties.fillColor || '#007bff'"
                :show-alpha="false"
                @update:value="(val) => emit('updateProperties', { fillColor: val })"
              />
            </n-form-item>
            <n-form-item :label="t('sketchEdit.strokeColor')">
              <n-color-picker
                :value="(component as GeographicDraftItemType).properties.strokeColor || '#0056b3'"
                :show-alpha="false"
                @update:value="(val) => emit('updateProperties', { strokeColor: val })"
              />
            </n-form-item>
            <n-form-item :label="t('sketchEdit.strokeThickness')">
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
            <n-form-item :label="t('sketchEdit.strokeColor')">
              <n-color-picker
                :value="(component as CartoSketchRouteItem).properties.strokeColor || '#28a745'"
                :show-alpha="false"
                @update:value="(val) => emit('updateProperties', { strokeColor: val })"
              />
            </n-form-item>
            <n-form-item :label="t('sketchEdit.strokeThickness')">
              <NInputNumber
                :value="(component as CartoSketchRouteItem).properties.strokeThickness || 3"
                :min="1"
                :max="10"
                @update:value="(val) => emit('updateProperties', { strokeThickness: val ?? undefined })"
              />
            </n-form-item>
          </template>
        </n-form>
      </n-tab-pane>

      <!-- Metadata Tab -->
      <n-tab-pane
        name="metadata"
        :tab="t('sketchEdit.metadata')"
      >
        <n-form>
          <n-form-item :label="t('sketchEdit.name')">
            <NInput
              :value="component.meta.name"
              @update:value="(val) => emit('updateMeta', {
                name: val,
                description: component?.meta.description ?? '',
                tags: component?.meta.tags ?? []
              })"
            />
          </n-form-item>

          <n-form-item :label="t('sketchEdit.description')">
            <NInput
              :value="component.meta.description"
              type="textarea"
              :rows="3"
              @update:value="(val) => emit('updateMeta', {
                name: component?.meta.name ?? '',
                description: val,
                tags: component?.meta.tags ?? []
              })"
            />
          </n-form-item>

          <n-form-item :label="t('sketchEdit.tags')">
            <n-dynamic-tags
              :value="component.meta.tags || []"
              :placeholder="t('sketchEdit.addTagPlaceholder')"
              @update:value="(val: string[]) => emit('updateMeta', {
                name: component?.meta.name ?? '',
                description: component?.meta.description ?? '',
                tags: val
              })"
            />
          </n-form-item>

          <n-form-item label="UUID">
            <NInput
              :value="component.id"
              style="font-family: monospace;"
              readonly
            />
          </n-form-item>
        </n-form>
      </n-tab-pane>
    </n-tabs>
  </div>
  <div
    v-else
    style="height: 100%; width: 100%; display: flex; justify-content: center; align-items: center;"
  >
    <n-empty :description="t('sketchEdit.selectComponentToEdit')" />
  </div>
</template>

<style scoped>
.properties-panel {
  min-height: 0;
  overflow: auto;
}

.metadata {
  font-size: 12px;
  line-height: 1.4;
}

.metadata-item {
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--n-divider-color);
}

.metadata-item:last-child {
  border-bottom: none;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
}

.tag-item {
  margin-right: 4px;
  margin-bottom: 4px;
}
</style>
