<script lang="ts">
import CartoSketchEdit from '@/components/CartoSketchEdit.vue';

export default {
	components: {
		CartoSketchEdit
	},
	setup() {
		
	}
}
</script>

<template>
	<CartoSketchEdit :lite-mode="true" :force-high-dpi="true" />
</template>
