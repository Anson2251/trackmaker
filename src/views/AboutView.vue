<script setup>
import { NH1, NP, NA, NDivider, NImage, NCard, NCollapse, NCollapseItem, NIcon, NElement, NList, NListItem, NTag, NSpace } from "naive-ui";
import { LogoGithub, Link, DocumentTextOutline } from "@vicons/ionicons5";
import { credits, dataProviders } from "@/configs";
import { ref } from "vue";

const logo = ref(new URL("/favicon.svg", import.meta.url).href);
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
					<p>Enabling route planning and navigation for sports activities with map marking feature.</p>
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
								Copyright (C) 2024-Present Heyan Zhu and the Trackmaker contributors
								<br><br>
								This program is free software: you can redistribute it and/or modify
								it under the terms of the GNU General Public License as published by
								the Free Software Foundation, either version 3 of the License, or
								(at your option) any later version.
								<br><br>
								This program is distributed in the hope that it will be useful,
								but WITHOUT ANY WARRANTY; without even the implied warranty of
								MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
								GNU General Public License for more details.
								<br><br>
								You should have received a copy of the GNU General Public License
								along with this program. If not, see
								<n-a href="https://www.gnu.org/licenses/"
									style="text-wrap: wrap;">https://www.gnu.org/licenses/</n-a>.
							</n-p>
						</div>
					</n-collapse-item>
				</n-collapse>
			</template>
		</n-card>
		<!--data-providers-->
		<n-card hoverable class="data-provider-card-container" content-style="overflow: auto">
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
				<n-p :depth="3" style="max-height: 10em; overflow-y: auto; font-size: 0.85em;">
					Please note that the map data provided may contain <b>inaccuracies or controversial content</b>, 
					particularly regarding territorial boundaries. Due to <b>resource limitations</b>, we are 
					currently unable to use higher-quality data, but we are <b>actively seeking</b> better sources 
					and will update the map as soon as feasible. We apologise for any inconvenience or offence this may cause.
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
								<n-tag v-if="credit.license" round type="info" size="small">Open
									Source</n-tag>
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

<style scoped>
.container {
	display: grid;
	grid-template-columns: 2fr 3fr;
	grid-template-rows: auto minmax(0, 1fr);
	gap: 16px;

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	padding: 0;
	margin: 0;
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

:root {
	--font-family-mono: inherit;
	--font-size-mini: inherit;
	--color-text: inherit;
}

.license-container {
	text-align: start;
	padding: 12px;
	border-radius: var(--n-border-radius);

	background-color: rgba(128, 128, 128, 0.1);
	border: 1px solid rgba(128, 128, 128, 0.2);
}

.trackmaker-license {
	white-space: pre-wrap;

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
