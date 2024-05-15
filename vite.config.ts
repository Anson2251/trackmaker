import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";
import viteCompression from 'vite-plugin-compression';

if(!process.env.BING_MAPS_KEY) console.warn("\x1b[33m%s\x1b[0m", "No Bing Maps Key can be found in the environment, please set BING_MAPS_KEY");

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		__BING_MAPS_KEY__: JSON.stringify(process.env.BING_MAPS_KEY || ""),
	},
	base: '/trackmaker/',
	plugins: [
		vue(),
		obfuscatorPlugin({
			apply: "build",
			options: {
				compact: true,
				controlFlowFlattening: false,
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
				seed: 0,
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
})
