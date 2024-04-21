<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { h, ref } from "vue";


import { NMenu,  NConfigProvider} from "naive-ui";
import type { MenuOption } from 'naive-ui';

import { useOsTheme, darkTheme } from 'naive-ui';

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
					to: "/about",
				},
				{ default: () => 'About' }
			),
		key: 'about',
	},
]


let theme = ref((useOsTheme().value === "dark") ? darkTheme : null);
</script>

<template>
	<n-config-provider :theme="theme">
		<n-menu :options="menuOptions" mode="horizontal" class="nav-bar"  default-value="home"/>
	</n-config-provider>

	<div class="main-layout">
		<RouterView />
	</div>
</template>

<style scoped>
.main-layout {
	grid-column: 1;
	grid-row: 2;

	margin: 2em;
	margin-top: 1em;
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
