<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router';
import { h, ref } from "vue";

import { NMenu, type MenuOption } from "naive-ui";
import { useOsTheme, darkTheme, NConfigProvider, NGlobalStyle, NMessageProvider } from 'naive-ui';

let theme = ref((useOsTheme().value === "dark") ? darkTheme : null);
const menuOptions: MenuOption[] = [
	{
		label: () =>
			h(
				RouterLink,
				{
					to: "/",
				},
				{ default: () => 'Tracker' }
			),
		key: 'tracker',
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
	}
];
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
	padding-left: 16px;
	padding-right: 16px;
	padding-bottom: 16px;
	padding-top: 1em;
	box-sizing: border-box;

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
