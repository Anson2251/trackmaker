<script setup>
import { NH1, NP, NA, NDivider, NImage, NCard, NCollapse, NCollapseItem, NIcon, NElement } from "naive-ui";
import { LogoGithub, Link, DocumentTextOutline } from "@vicons/ionicons5";
import { credits } from "@/configs";
import { ref } from "vue";

const logo = ref(new URL("/favicon.svg", import.meta.url).href);
</script>

<template>
	<n-card hoverable>
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
			<n-divider style="margin-top: 8px; margin-bottom: 12px;" title-placement="left">License</n-divider>
			<div class="license-container">
				<n-p :depth="2">
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
					<n-a href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</n-a>.
				</n-p>
			</div>
		</template>
	</n-card>

	<n-card hoverable>
		<template #header>
			Credits
		</template>
		<template #default>
			<n-p>Without the following (open source) projects, Trackmaker could not be built:</n-p>
			<n-divider />
			<n-collapse :accordion="true" class="credit-list" :trigger-areas='["main", "arrow"]'>
				<n-collapse-item v-for="credit in credits.sort((a, b) => a.name.localeCompare(b.name))" :key="credit.id"
					:title=credit.name :name=credit.id>
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
</template>

<style scoped>
:root {
	--font-family-mono: inherit;
	--font-size-mini: inherit;
	--color-text: inherit;
}

.license-container {
	text-align: justify;
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
	cursor: text;

	display: block;
	transition: .3s;
}

.n-card {
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

.credit-list .link-icon-list {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.link-icon-list>a {
	text-decoration: none;
	color: var(--color-text);
	cursor: grab;
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
