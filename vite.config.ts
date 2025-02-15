import { fileURLToPath, URL } from 'node:url';
import dotenv from 'dotenv';

import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'
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

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => {
	const releaseMode = !!JSON.parse((process.env.RELEASE_MODE || "false").toLowerCase());
	const tauriEnv = !!JSON.parse((process.env.TAURI_ENVIRONMENT || "false").toLowerCase());

	const plugins = [
		vue(),
		tailwindcss(),
	];

	if (!tauriEnv) {
		if (releaseMode) {
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

		// Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
		//
		// 1. prevent vite from obscuring rust errors
		clearScreen: false,
		// 2. tauri expects a fixed port, fail if that port is not available
		server: {
			port: 1420,
			strictPort: true,
			host: host || false,
			hmr: host
				? {
					protocol: "ws",
					host,
					port: 1421,
				}
				: undefined,
			watch: {
				// 3. tell vite to ignore watching `src-tauri`
				ignored: ["**/src-tauri/**"],
			},
			sourcemap: true
		},
	};
});
