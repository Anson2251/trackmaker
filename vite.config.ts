import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import obfuscator from 'rollup-plugin-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		obfuscator({ // encrypt the my bing map credential key 
			global: true,
			// https://github.com/javascript-obfuscator/javascript-obfuscator
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
				numbersToExpressions: false,
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
				splitStringsChunkLength: 10,
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
				unicodeEscapeSequence: false
			}
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		target: "es2015"
	}
})
