<script lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { h, ref } from "vue";

import { NMenu, type MenuOption } from "naive-ui";
import { useOsTheme, darkTheme, NConfigProvider, NGlobalStyle, NMessageProvider } from 'naive-ui';

let theme = ref((useOsTheme().value === "dark") ? darkTheme : null);

export default {
	components: {
		NMenu,
		NConfigProvider,
		RouterView,
		NGlobalStyle,
		NMessageProvider
	},

	setup() {
		const menuOptions: MenuOption[] = [
			{
				label: () =>
					h(
						RouterLink,
						{
							to: "/",
						},
						{ default: () => 'Home' }
					),
				key: 'home',
			},
			{
				label: () =>
					h(
						RouterLink,
						{
							to: "/edit",
						},
						{ default: () => 'Edit' }
					),
				key: 'edit',
			},
			{
				label: () =>
					h(
						RouterLink,
						{
							to: "/about",
						},
						{ default: () => 'About' }
					),
				key: 'about',
			},
			{
				label: () =>
					h(
						RouterLink,
						{
							to: "/exp-maplibregljs",
						},
						{ default: () => 'Preview MapLibreGLJS' }
					),
				key: 'exp-maplibregljs',
			},
		];

		return {
			theme,
			menuOptions
		};
	},
};
</script>

<template>
	<n-config-provider :theme="theme" :abstract="true" :inline-theme-disabled="true">
		<n-message-provider :placement="'bottom-right'">
			<n-menu :options="menuOptions" mode="horizontal" class="nav-bar" default-value="home" />
			<div class="main-layout">
				<RouterView />
			</div>
			<n-global-style />
		</n-message-provider>
	</n-config-provider>
</template>

<style scoped>
.main-layout {
	margin-left: 16px;
	margin-right: 16px;
	margin-bottom: 8px;
	margin-top: 1em;

	position: relative;

	overflow: auto;
}

.nav-bar {
	font-size: 12px;
	text-align: left;

	grid-column: 1;
	grid-row: 1;

	display: flex;
	height: var(--nav-bar-height);
}

.nav-bar>div {
	height: 100%;
}
</style>
