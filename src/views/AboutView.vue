<script setup>
import { ref } from "vue";

import { NH1, NP, NDivider, NConfigProvider, NImage, NCard, NCollapse, NCollapseItem, NIcon } from "naive-ui";
import { useOsTheme, darkTheme } from 'naive-ui';
import { LogoGithub, Link } from "@vicons/ionicons5"
let theme = ref((useOsTheme().value === "dark") ? darkTheme : null);

const credits = ref([
	{
		id: "bingmaps",
		name: "Bing Maps V8 Web Control",
		description: "Microsoft's modern web mapping developer kit.",
		url: "https://learn.microsoft.com/en-us/bingmaps/v8-web-control/"
	},
	{
		id: "bingmaps-typescript-definitions",
		name: "Bing-Maps-V8-TypeScript-Definitions",
		description: "Typescript definitions for Bing Maps V8 Web Control.",
		url: "https://github.com/microsoft/Bing-Maps-V8-TypeScript-Definitions"
	},
	{
		id: "vue",
		name: "Vue.js",
		description: "An approachable, performant and versatile framework for building web user interfaces.",
		url: "https://github.com/vuejs/core"
	},
	{
		id: "vue-router",
		name: "Vue Router",
		description: "Expressive, configurable and convenient routing for Vue.js.",
		url: "https://github.com/vuejs/router"
	},
	{
		id: "naive-ui",
		name: "Naive UI",
		description: "A Vue 3 based UI Components Library",
		url: "https://github.com/tusen-ai/naive-ui"
	},
	{
		id: "uaparser-js",
		name: "UAParser.js",
		description: "The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.",
		url: "https://github.com/faisalman/ua-parser-js"
	},
	{
		id: "prcoords",
		name: "PRCoords",
		description: "A coordinates converter",
		url: "https://github.com/Artoria2e5/PRCoords"
	},
	{
		id: "localforage",
		name: "localForage",
		description: "A fast and simple storage library for JavaScript.",
		url: "https://github.com/localForage/localForage"
	}

])
</script>

<template>
	<n-config-provider :theme="theme">
		<n-card hoverable>
			<template #default>
				<div class="project-card">
					<div class="logo">
						<n-image width="100" src="/favicon.svg" preview-disabled />
					</div>
					<n-h1>Track Maker</n-h1>
					<p>A simple tool for tracking and sharing your routes</p>
				</div>
			</template>
		</n-card>

		<n-card hoverable>
			<template #header>
				Credits
			</template>
			<template #default>
				<n-p>Trackmaker could not be built without the following projects:</n-p>
				<n-divider />
				<n-collapse accordion="true" class="credit-list" :trigger-areas='["main", "arrow"]'>
					<n-collapse-item v-for="credit in credits" :key="credit.id" :title=credit.name :name=credit.id>
						<div>{{ credit.description }}</div>
						<template #header-extra>
							<!-- <n-icon size=24><logo-github /></n-icon> -->
							<a :href=credit.url>
								<n-icon size=24>
									<logo-github v-if="credit.url.includes('github')"/>
									<Link v-else />
								</n-icon>
							</a>
						</template>
					</n-collapse-item>
				</n-collapse>
			</template>
		</n-card>

	</n-config-provider>
</template>

<style scoped>
.n-card{
	margin-bottom: 16px;
}

.project-card {
	display: grid;
	grid-template-columns: 98px auto;
	grid-template-rows: auto 32px;
	align-items: center;
	grid-gap: 16px;
}

.project-card .n-h1 {
	margin: 0;
}

.project-card>.logo {
	grid-column: 1;
	grid-row: 1 / 3;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 100%;
	justify-items: center;
	align-items: center;

}

.project-card>p {
	grid-column: 2;
	grid-row: 2;
}

.project-card>h1 {
	grid-column: 2;
	grid-row: 1;
}

.credit-list a {
	text-decoration: none;
	color: var(--color-text);
}
</style>
