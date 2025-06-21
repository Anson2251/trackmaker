<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router';
import { h, ref, type Component, provide, onMounted } from "vue";
import { Map, InfoCircle } from '@vicons/tabler';

import { NMenu, type MenuOption } from "naive-ui";
import { useOsTheme, darkTheme, NConfigProvider, NGlobalStyle, NMessageProvider, NIcon } from 'naive-ui';
import { useGeolocationStore } from './stores/geolocation';

let theme = ref((useOsTheme().value === "dark") ? darkTheme : null);

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const locator = useGeolocationStore();
provide('geolocation', locator);

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
		icon: renderIcon(Map),
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
		icon: renderIcon(InfoCircle),
	}
];

onMounted(() => {
	locator.service.build();
})
</script>

<template>
	<n-config-provider :theme="theme" :abstract="true" :inline-theme-disabled="true">
		<n-message-provider :placement="'bottom-right'">
			<n-menu :options="menuOptions" mode="horizontal" class="nav-bar" default-value="tracker" />
			<div class="main-layout">
				<router-view v-slot="{ Component, route }">
                <transition name="slide-fade" mode="out-in">
                  <keep-alive>
					<component :is="Component" :key="route.path"/>
                  </keep-alive>
                </transition>
              </router-view>
			</div>
			<n-global-style />
		</n-message-provider>
	</n-config-provider>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.1s ease-out;
}

.slide-fade-enter-from {
  /* transform: translateX(20px); */
  opacity: 0;
}

.slide-fade-leave-to {
  /* transform: translateX(-20px); */
  opacity: 0;
}

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
	grid-column: 1;
	grid-row: 1;

	display: flex;
	height: var(--nav-bar-height);
}
</style>
