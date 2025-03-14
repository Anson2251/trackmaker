<script setup>
import { NH1, NP, NDivider, NImage, NCard, NCollapse, NCollapseItem, NIcon, NElement, NList, NListItem, NTag, NSpace } from "naive-ui";
import VueMarkdown from 'vue-markdown-render';
import { LogoGithub, Link, DocumentTextOutline } from "@vicons/ionicons5";
import { credits, dataProviders } from "@/configs";
import { ref } from "vue";

const logo = ref(new URL("/favicon.svg", import.meta.url).href);

import mapDataInaccuracyDeclaration from "@/assets/map-data-inaccuracy-declaration.md?raw";
import aboutPageLicense from "@/assets/about-page-license.md?raw";
</script>

<template>
	<div class="container">
		<!--project-->
		<n-card hoverable class="project-card-container">
			<template #default>
				<div class="project-card">
					<div class="logo">
						<n-image width="100" :src="logo" preview-disabled />
					</div>
					<n-h1>Trackmaker</n-h1>
					<p>Enabling route planning and navigation for outdoor activities with map marking feature. 
						Create tracks by tracing real-time motion. The created tracks can be shared with your friends and uploaded to DNE social platform. </p>
				</div>
			</template>
			<template #footer>
				<n-collapse>
					<n-collapse-item title="License" name="license">
						<template #header>
							<n-space>
								<n-p>License</n-p>
								<n-tag type="info" round size="small">GPL</n-tag>
							</n-space>
						</template>
						<div class="license-container">
							<n-p :depth="2" class="trackmaker-license">
								<VueMarkdown :source="aboutPageLicense" />
							</n-p>
						</div>
					</n-collapse-item>
				</n-collapse>
			</template>
		</n-card>
		<!--data-providers-->
		<n-card hoverable class="data-provider-card-container" content-style="overflow: auto" footer-style="overflow-y: auto;">
			<template #header>
				Data Sources
			</template>
			<template #default>
				<n-list>
					<n-list-item v-for="provider in dataProviders" :key="provider.id">
						<template #default>
							<n-space>
								<n-p>{{ provider.name }}</n-p>
								<n-tag v-if="!!provider.license" type="info" round size="small">{{
									provider.license }}</n-tag>
							</n-space>
						</template>
						<template #suffix>
							<a :href="provider.url" class="data-provider-link">
								<n-icon size=24 class="link-icon"> <!-- url -->
									<Link />
								</n-icon>
							</a>
						</template>
					</n-list-item>
				</n-list>
			</template>
			<template #footer>
				<n-p>
					<vue-markdown :source="mapDataInaccuracyDeclaration" class="map-data-inaccuracy-md"/>
				</n-p>
			</template>
		</n-card>

		<!--credits-->
		<n-card hoverable class="credits-card-container" footer-style="overflow: auto">
			<template #header>
				Credits
			</template>
			<template #default>
				<n-p style="position: sticky;">Without the following (open source) projects, Trackmaker could not be built:</n-p>
			</template>
			<template #footer>
				<n-collapse :accordion="true" class="credit-list" :trigger-areas='["main", "arrow"]'>
					<n-collapse-item v-for="credit in credits.sort((a, b) => a.name.localeCompare(b.name))"
						:key="credit.id" :title=credit.name :name=credit.id>
						<template #default>
							<div>{{ credit.description }}</div>
							<n-divider v-if="credit.license" />
							<div class="license" v-if="credit.license">
								<n-p>License:</n-p>
								<n-element tag="pre">{{ credit.license.trim().replace(/\n([\s]*)\n/,
									"\n\n").split("\n\n").map((l) => l.split("\n").map((s) =>
										s.trim()).join("")).join("\n\n") }}</n-element>
							</div>
						</template>
						<template #header>
							<n-space :inline="true">
								{{ credit.name }}
								<n-tag v-if="credit.license" round type="info" size="small">{{ credit.licenseType }}</n-tag>
							</n-space>
						</template>
						<template #header-extra>
							<div class="link-icon-list">
								<a :href=credit.homepage v-if="!!credit.homepage">
									<n-icon size=20 class="link-icon"> <!-- homepage -->
										<Link />
									</n-icon>
								</a>
								<a :href=credit.url>
									<n-icon size=24 class="link-icon"> <!-- url -->
										<logo-github v-if="credit.url.includes('github')" />
										<DocumentTextOutline v-else />
									</n-icon>
								</a>
							</div>
						</template>
					</n-collapse-item>
				</n-collapse>
			</template>
		</n-card>
	</div>

</template>

<style>
.map-data-inaccuracy-md * {
	white-space: normal;
	display: inline;
}
</style>

<style scoped>
.container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	padding: 0;
	margin: 0;
}

@media screen and (max-width: 800px) {
	.container {
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto auto auto;
		gap: 16px;
	}

	.project-card-container {
		grid-row: 1 / 2;
		grid-column: 1 / 2;
	}

	.data-provider-card-container {
		grid-row: 2 / 3;
		grid-column: 1 / 2;
	}

	.credits-card-container {
		grid-row: 3 / 4;
		grid-column: 1 / 2;
	}
}

@media screen and (min-width: 800px) {
	.container {
		display: grid;
		grid-template-columns: 2fr 3fr;
		grid-template-rows: auto minmax(0, 1fr);
		gap: 16px;
	}

	.project-card-container {
		grid-row: 1 / 2;
		grid-column: 1 / 3;
	}

	.data-provider-card-container {
		grid-row: 2 / 3;
		grid-column: 1 / 2;
	}

	.credits-card-container {
		grid-row: 2 / 3;
		grid-column: 2 / 3;
	}
}

:root {
	--font-family-mono: inherit;
	--font-size-mini: inherit;
	--color-text: inherit;
}

.license-container {
	text-align: start;
	padding-left: 12px;
	padding-right: 12px;
	border-radius: var(--n-border-radius);

	background-color: rgba(128, 128, 128, 0.1);
	border: 1px solid rgba(128, 128, 128, 0.2);
}

.trackmaker-license {
	user-select: text;
	cursor: auto;
	-webkit-user-select: auto;
}

.license {
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 2em auto;
}

.license>p {
	grid-row: 1 / 1;
	grid-column: 1 / 1;

	font-weight: bold;
}

.license>pre {
	grid-row: 2 / 2;
	grid-column: 1 / 1;

	font-family: var(--font-family-mono), monospace;
	font-size: var(--font-size-mini);
	white-space: pre-wrap;
	overflow: auto;
	margin: 0;
	padding: 32px;
	max-height: 24em;

	user-select: text;
	-webkit-user-select: text;
	cursor: auto;

	display: block;
	transition: .3s;
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

.credit-list .link-icon-list {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.link-icon-list>a,
.data-provider-link {
	text-decoration: none;
	color: var(--color-text);
	cursor: pointer;
}

.credit-list .link-icon-list .link-icon {
	width: 32px;
	height: 32px;

	display: grid;
	justify-items: center;
	align-items: center;
}

.credit-list .link-icon-list * {
	cursor: grab;
}
</style>
