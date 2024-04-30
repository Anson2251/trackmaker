<script lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { h, ref } from "vue";
// import SplashScreen from './components/SplashScreen.vue';
// import { modules } from '@/config';
// import { loadModules } from '@/script/loadModules';

import { NMenu, NConfigProvider } from "naive-ui";
import type { MenuOption } from 'naive-ui';

import { useOsTheme, darkTheme } from 'naive-ui';

let theme = ref((useOsTheme().value === "dark") ? darkTheme : null);
//let showSplash = ref(true);

export default {
	components: {
		//SplashScreen,
		NMenu,
		NConfigProvider,
		RouterView
	},

	beforeCreate() {
		//await loadModules(modules, "trackmaker", 30000);
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
		]

		// loadModules(modules, "trackmaker", 30000).then(() => {
		// 	showSplash.value = false;
		// });

		return {
			theme,
			//showSplash,
			menuOptions
		};
	},
	// methods: {
	// 	initModules() {
	// 		try {
	// 			console.log('Modules loaded successfully');
	// 			showSplash.value = false;
	// 		} catch (error) {
	// 			console.error('Error loading modules:', error);
	// 		}
	// 	}
	// }
}
</script>

<template>
	<!-- <SplashScreen v-if="showSplash" />
	<div v-else> -->
		<n-config-provider :theme="theme">
			<n-menu :options="menuOptions" mode="horizontal" class="nav-bar" default-value="home" />
		</n-config-provider>

		<div class="main-layout">
			<RouterView />
		</div>
	<!-- </div> -->
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
