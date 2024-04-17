<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BingMap from './components/BingMap.vue';
</script>

<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</nav>

	<div class="main-layout">
		<RouterView />
	</div>
</template>

<style scoped>
.main-layout {
	grid-column: 1;
	grid-row: 2;
}

nav {
	font-size: 12px;
	text-align: center;

	grid-column: 1;
	grid-row: 1;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
