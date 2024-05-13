import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		__BING_MAPS_KEY__: JSON.stringify(process.env.BING_MAPS_KEY),
	},
	base: '/trackmaker/',
	plugins: [

		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
	},
	build: {
		target: "es2015",
		chunkSizeWarningLimit: 2000
	},
})
