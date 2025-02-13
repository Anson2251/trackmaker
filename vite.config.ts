import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.TAURI_DEV_HOST;
const inTauri = process.env.IN_TAURI === "true";

console.log(`Using host ${host}`);
console.log(`In Tauri mode: ${inTauri}`)

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [
		tailwindcss(),
		sveltekit(),
	],
	define: {
		__MAP_TILER_KEY__: JSON.stringify(process.env.MAP_TILER_KEY ?? ""),
		__IN_TAURI__: JSON.stringify(inTauri ? true : false)
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
}));
