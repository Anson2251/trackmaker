<script setup lang="ts">
import { computed } from 'vue';
import markdownToHtml from '@/utils/markdownToHtml';

const props = defineProps<{
  source: string
}>();

const html = computed(() => markdownToHtml(props.source))
</script>

<template>
  <div v-html="html"></div>
</template>
