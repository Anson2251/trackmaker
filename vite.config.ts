import { fileURLToPath, URL } from 'node:url';
import dotenv from 'dotenv';

import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

const legacyLevel = ">0.3%, edge>=12, firefox>=57, chrome>=48, safari>=11, chromeAndroid>=48, iOS>=12";

const compression = viteCompression({
	verbose: true,
	algorithm: "brotliCompress",
	compressionOptions: {
		level: 11,
	},
	deleteOriginFile: false
});

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(async () => {
	const releaseMode = !!JSON.parse((process.env.RELEASE_MODE || "false").toLowerCase());
	const tauriEnv = !!JSON.parse((process.env.TAURI_ENVIRONMENT || "false").toLowerCase());

	const plugins = [];

	plugins.push(vue());

	if(!tauriEnv) {
		if(releaseMode) {
			plugins.push(compression);
			plugins.push(legacy({ targets: legacyLevel }));
		}
	}

	return {
		define: {
			__BING_MAPS_KEY__: "''",
			__MAPTILER_KEY__: JSON.stringify(process.env.MAP_TILER_KEY ?? ""),
			__RELEASE_MODE__: releaseMode ? "true" : "false",
			__TAURI_ENVIRONMENT__: tauriEnv ? "true" : "false",
		},
		base: './',
		plugins: plugins,
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			},
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
		},
		build: {
			chunkSizeWarningLimit: 2000,
			outDir: "dist/trackmaker",
		},
	};
});
