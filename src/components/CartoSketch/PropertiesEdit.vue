<script setup lang="ts">
import {
	NRadioButton, NRadioGroup,
	NList, NListItem, NFlex, NColorPicker, NInputNumber,
	NSwitch
} from 'naive-ui';
import { ref, watch } from 'vue';

interface Props {
	properties: {
		strokeColor: string,
		strokeThickness: number,
		visible: boolean
		routeOrDraft: string
	}
}
const props = defineProps<Props>();
const emit = defineEmits(['updateProperties']);

const routeOrDraft = ref(props.properties.routeOrDraft);
const strokeColor = ref(props.properties.strokeColor);
const strokeThickness = ref(props.properties.strokeThickness);
const visible = ref(props.properties.visible);

const propertiesEditview = [
	{
		name: "strokeColor",
		label: "Stroke Color",
		type: "color",
		model: strokeColor
	},
	{
		name: "strokeThickness",
		label: "Stroke Thickness",
		type: "number",
		model: strokeThickness
	},
	{
		name: "visible",
		label: "Visible",
		type: "switch",
		defaultValue: true,
		model: visible,

	},
	{
		name: "routeOrDraft",
		label: "Classification",
		type: "radio",
		defaultValue: "draft",
		model: routeOrDraft,
		options: [
			{
				label: "Route",
				value: "route"
			},
			{
				label: "Draft",
				value: "draft"
			}
		]
	}
]
const localProperties = ref({
	strokeColor: strokeColor,
	strokeThickness: strokeThickness,
	visible: visible,
	routeOrDraft: routeOrDraft
})

watch(localProperties, () => {
	const newProperties = { ...localProperties.value }
	console.log(newProperties)
	emit('updateProperties', newProperties)
}, { deep: true })
</script>

<template>
	<div style="height: 100%; width: 100%; overflow: auto;">
		<n-list :show-divider="false" style="height: max-content; width: fit-content; min-width: 100%;">
			<n-list-item style="text-align: center; padding: 0;" v-for="property in propertiesEditview"
				:key="property.name">
				<n-flex :align="'center'" justify="space-between" :wrap="false">
					<p style="white-space: nowrap;">{{ property.label }}</p>

					<n-radio-group v-if="property.type === 'radio'" :name="property.name"
						:default-value="property.defaultValue" v-model:value="property.model.value">
						<n-radio-button v-for="option in property.options" :key="option.value" :label="option.label"
							:value="option.value" />
					</n-radio-group>

					<n-color-picker v-if="property.type === 'color'" v-model:value="(property.model.value as string)"
						size="small" :show-alpha="false" />

					<n-input-number v-if="property.type === 'number'" v-model:value="(property.model.value as number)"
						size="small" placeholder="Thickness" :min="0" :max="100" />

					<n-switch v-if="property.type === 'switch'" v-model:value="(property.model.value as boolean)"
						size="medium" />
				</n-flex>
			</n-list-item>
		</n-list>
	</div>

</template>

<style scoped></style>