

<script setup>
import { ref } from "vue";

import { NH1, NP, NDivider, NConfigProvider, NImage, NCard, NCollapse, NCollapseItem, NIcon } from "naive-ui";
import { useOsTheme, darkTheme } from 'naive-ui';
import { LogoGithub, Link } from "@vicons/ionicons5"
import { credits } from "@/config";
let theme = ref((useOsTheme().value === "dark") ? darkTheme : null);

</script>

<template>
	<n-config-provider :theme="theme">
		<n-card hoverable>
			<template #default>
				<div class="project-card">
					<div class="logo">
						<n-image width="100" src="/trackmaker/favicon.svg" preview-disabled />
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
				<n-p>Track Maker could not be built without the following projects:</n-p>
				<n-divider />
				<n-collapse :accordion="true" class="credit-list" :trigger-areas='["main", "arrow"]'>
					<n-collapse-item v-for="credit in credits.sort((a, b) => a.name.localeCompare(b.name))" :key="credit.id" :title=credit.name :name=credit.id>
						<template #default>
							<div>{{ credit.description }}</div>
							<n-divider v-if="credit.license"/>
							<div class="license" v-if="credit.license">
								<p>License:</p>
								<pre>{{ credit.license.trim().split("\n\n").map((l) => l.split("\n").map((s) => s.trim()).join(" ")).join("\n\n") }}</pre>
							</div>		
						</template>
						<template #header-extra>
							<!-- <n-icon size=24><logo-github /></n-icon> -->
							<a :href=credit.url>
								<n-icon size=24>
									<logo-github v-if="credit.url.includes('github')" />
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
.license {
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 2em auto;
}
.license > p {
	grid-row: 1 / 1;
	grid-column: 1 / 1;

	font-weight: bold;
}
.license > pre {
	grid-row: 2 / 2;
	grid-column: 1 / 1;

	font-family: monospace;
	font-size: 12px;
	white-space: pre-wrap;
	overflow: auto;
	margin: 0;
	padding: 24px;
	max-height: 36em;
	border-radius: 8px;
	background-color: rgba(128, 128, 128, 0.1);
	border: 1px solid rgba(128, 128, 128, 0.3);
	user-select: text;
	cursor: text;
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

.credit-list a {
	text-decoration: none;
	color: var(--color-text);
	cursor: grab;
}

.credit-list a *{
	cursor: grab;
}
</style>
