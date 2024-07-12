import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";
import { ObfuscatorOptions } from "javascript-obfuscator";
import viteCompression from 'vite-plugin-compression';
import { promises as fs } from 'fs';

async function checkFileExist(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath);
		return Promise.resolve(true);
	} catch (error) {
		return Promise.resolve(false);
	}
}

async function readFile(filePath: string): Promise<string> {
	try {
		const config = await fs.readFile(filePath, {
			encoding: "utf-8"
		});
		return Promise.resolve(config);
	} catch (err) {
		return Promise.reject(`Cannot load the file "${filePath}"`);
	}
}

const obfuscatorConfig: ObfuscatorOptions  = {
	compact: true,
	controlFlowFlattening: true,
	controlFlowFlatteningThreshold: 0.75,
	deadCodeInjection: false,
	deadCodeInjectionThreshold: 0.4,
	debugProtection: false,
	debugProtectionInterval: 0,
	disableConsoleOutput: false,
	domainLock: [],
	domainLockRedirectUrl: 'about:blank',
	forceTransformStrings: [],
	identifierNamesCache: null,
	identifierNamesGenerator: 'hexadecimal',
	identifiersDictionary: [],
	identifiersPrefix: '',
	ignoreImports: false,
	inputFileName: '',
	log: false,
	numbersToExpressions: true,
	optionsPreset: 'default',
	renameGlobals: false,
	renameProperties: false,
	renamePropertiesMode: 'safe',
	reservedNames: [],
	reservedStrings: [],
	seed: (new Date()).getTime(),
	selfDefending: false,
	simplify: true,
	sourceMap: false,
	sourceMapBaseUrl: '',
	sourceMapFileName: '',
	sourceMapMode: 'separate',
	sourceMapSourcesMode: 'sources-content',
	splitStrings: true,
	splitStringsChunkLength: 5,
	stringArray: true,
	stringArrayCallsTransform: true,
	stringArrayCallsTransformThreshold: 0.5,
	stringArrayEncoding: [],
	stringArrayIndexesType: [
		'hexadecimal-number'
	],
	stringArrayIndexShift: true,
	stringArrayRotate: true,
	stringArrayShuffle: true,
	stringArrayWrappersCount: 1,
	stringArrayWrappersChainedCalls: true,
	stringArrayWrappersParametersMaxCount: 2,
	stringArrayWrappersType: 'variable',
	stringArrayThreshold: 0.75,
	target: 'browser',
	transformObjectKeys: true,
	unicodeEscapeSequence: true
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
	let bingMapsKey = process.env.BING_MAPS_KEY || ""
	const credentialsConfigPath = process.env.CREDENTIALS_CONFIG_PATH || "credentials-config.json";

	if (!bingMapsKey) {
		const keyExposeScriptExist = await checkFileExist(credentialsConfigPath);
		if (keyExposeScriptExist) {
			const configContent = JSON.parse(await readFile(credentialsConfigPath));
			if(configContent.bingMaps) bingMapsKey = String(configContent.bingMaps);
		}
	}

	if(!bingMapsKey) console.warn("\x1b[33m%s\x1b[0m", `Bing Maps Key cannot be found in the environment or load from "${credentialsConfigPath}", please set BING_MAPS_KEY`);

	return {
		define: {
			__BING_MAPS_KEY__: JSON.stringify(bingMapsKey),
			__RELEASE_MODE__: process.env.RELEASE_MODE === "true"
		},
		base: '/trackmaker/',
		plugins: [
			vue(),
			obfuscatorPlugin({
				apply: "build",
				options: obfuscatorConfig,
			}),
			viteCompression({
				algorithm: "brotliCompress",
				compressionOptions: {
					level: 11,
				},
				deleteOriginFile: false
			})
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			},
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
		},
		build: {
			target: "es2015",
			chunkSizeWarningLimit: 2000,
			outDir: "dist/trackmaker",
		},
	}
})
