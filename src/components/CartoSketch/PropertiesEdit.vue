<script setup lang="ts">
import {
	NRadioButton, NRadioGroup,
	NList, NListItem, NFlex, NColorPicker, NInputNumber,
	NSwitch
} from 'naive-ui';
import {watch, ref, computed, type Ref} from 'vue';

type supportedOptionType = "color" | "number" | "switch" | "radio" | "string";
type supportedDataType = string | number | boolean;

interface RadioOption {
	label: string;
	value: string;
}

interface RadioData {
	options: RadioOption[];
}

// Type guard to check if data is RadioData
function isRadioData(data: OptionData): data is RadioData {
	return (data as RadioData).options !== undefined;
}

type OptionData = Record<string, unknown> | RadioData;

type OptionInfo = {
	/** unique id for the option*/
	name: string;
	label: string;
	default: string | number | boolean;
	type: supportedOptionType;
	data: OptionData;
}

const optionDB: Record<string, OptionInfo> = {
	strokeColor: {
		name: "strokeColor",
		label: "Stroke Color",
		type: "color",
		default: "#000000",
		data: {},
	},
	strokeThickness: {
		name: "strokeThickness",
		label: "Stroke Thickness",
		type: "number",
		default: 1,
		data: {},
	},
	visible: {
		name: "visible",
		label: "Visible",
		type: "switch",
		default: true,
		data: {},
	},
	color: {
		name: "color",
		label: "Color",
		type: "color",
		default: "#000000",
		data: {},
	},
	draggable: {
		name: "draggable",
		label: "Draggable",
		type: "switch",
		default: true,
		data: {},
	},
	icon: {
		name: "icon",
		label: "Icon",
		type: "string",
		default: "",
		data: {}
	},
	text: {
		name: "text",
		label: "Text",
		type: "string",
		default: "",
		data: {}
	},
	title: {
		name: "title",
		label: "Title",
		type: "string",
		default: "",
		data: {}
	},
	subTitle: {
		name: "subTitle",
		label: "Sub Title",
		type: "string",
		default: "",
		data: {}
	},
	routeOrDraft: {
		name: "routeOrDraft",
		label: "Classification",
		type: "radio",
		default: "draft",
		data: {
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
	}
};

interface Props {
	componentID: string,
	properties: Record<string, supportedDataType>
}

const props = defineProps<Props>();
const emit = defineEmits(['updateProperties']);

interface PropertyEditItem {
	name: string;
	label: string;
	type: supportedOptionType;
	default: string | number | boolean;
	model: Ref<supportedDataType>;
	data: OptionData;
}

const propertiesEditview = computed<PropertyEditItem[]>(() => {
	return getConfigItems();
});

// const configTypes = ["color", "number", "switch", "radio"];
// const keys = Object.keys(props.properties);

const getConfigItems = () => {
	return Object.keys(props.properties).map(key => {
		return {
			name: key,
			label: optionDB[key].label,
			type: optionDB[key].type,
			default: optionDB[key].default,
			model: ref<supportedDataType>(props.properties[key as keyof Props["properties"]] || optionDB[key].default),
			data: optionDB[key].data
		};
	});
};

console.log(props);

watch(propertiesEditview, () => {
	const property: Record<string, supportedDataType> = {};
	Object.keys(props.properties).forEach(key => {
		const foundItem = propertiesEditview.value.find(p => p.name === key);
		if (foundItem) {
			property[key] = foundItem.model.value;
		}
	});
	emit('updateProperties', property);
}, {deep: true});
</script>

<template>
  <div style="height: 100%; width: 100%; overflow: auto;">
    <n-list
      :show-divider="false"
      style="height: max-content; width: fit-content; min-width: 100%;"
    >
      <n-list-item
        v-for="property in propertiesEditview"
        :key="property.name"
        style="text-align: center; padding: 0;"
      >
        <n-flex
          :align="'center'"
          justify="space-between"
          :wrap="false"
        >
          <p style="white-space: nowrap;">
            {{ property.label }}
          </p>

          <n-radio-group
            v-if="property.type === 'radio'"
            v-model:value="property.model.value"
            :name="property.name"
            :default-value="property.default"
          >
            <n-radio-button
              v-for="option in (isRadioData(property.data) ? property.data.options : [])"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </n-radio-group>

          <n-color-picker
            v-if="property.type === 'color'"
            v-model:value="(property.model.value as string)"
            size="small"
            :show-alpha="false"
          />

          <n-input-number
            v-if="property.type === 'number'"
            v-model:value="(property.model.value as number)"
            size="small"
            placeholder="Thickness"
            :min="0"
            :max="100"
          />

          <n-switch
            v-if="property.type === 'switch'"
            v-model:value="(property.model.value as boolean)"
            size="medium"
          />
        </n-flex>
      </n-list-item>
    </n-list>
  </div>
</template>

<style scoped></style>
