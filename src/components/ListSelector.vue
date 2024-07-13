<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { NElement } from 'naive-ui';

type Option = { value: string, label: string };

interface Props {
    list: Option[],
    value?: string
}

const props = defineProps<Props>();
const emit = defineEmits(['update:value']);

const selectedValue = ref<string | undefined>(props.value);

const computedList = computed<{ option: Option, checked: boolean }[]>(() => {
    return props.list.map((item) => ({
        option: item,
        checked: item.value === selectedValue.value
    }));
});

function selectOption(option: Option) {
    selectedValue.value = option.value;
    emit('update:value', option.value);
}

watch(props, () => {
    selectedValue.value = props.value;
});
</script>

<template>
    <n-element tag="div" class="radio-list">
        <template #default>
            <div v-for="(option, index) in computedList" :key="index" @click="selectOption(option.option)"
                :class="`radio-item ${option.checked ? 'radio-item-checked' : ''}`" :data-checked="option.checked">
                {{ option.option.label }}
            </div>
        </template>
    </n-element>
</template>

<style scoped>
:root {
  --hover-color: inherit;
  --border-radius: inherit;
  --primary-color: inherit;
  --body-color: inherit;
}

.radio-list {
    display: flex;
    flex-direction: column;
}

.radio-item {
    display: block;
    margin: 0;
    padding: 0 8px;
    width: calc(100% - 18px);
    height: 32px;

    border: 1px solid transparent;
    border-radius: var(--border-radius);

    cursor: pointer;

    line-height: 32px;

    transition: all 0.2s ease;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.radio-item:hover:not(.radio-item-checked) {
    background-color: var(--hover-color);
}

.radio-item-checked {
    background-color: var(--primary-color);
    color: var(--body-color);
}
</style>