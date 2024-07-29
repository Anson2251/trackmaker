import { fileURLToPath, URL } from 'node:url';
import { promises as fs } from 'fs';

import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";
import type { ObfuscatorOptions } from "javascript-obfuscator";


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
};

const obfuscator = obfuscatorPlugin({
	apply: "build",
	options: obfuscatorConfig,
});

const compression = viteCompression({
	verbose: true,
	algorithm: "brotliCompress",
	compressionOptions: {
		level: 11,
	},
	deleteOriginFile: false
});

type CredentialItemType = {
	name: string,
	type: "string" | "number"
}
const credentialItems: CredentialItemType[] = [
	{
		name: "BING_MAPS_KEY",
		type: "string"
	}
];

const credentialFileDefaultPath = "./credentials-config.json";

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
		return Promise.reject(`Cannot read from the file "${filePath}"`);
	}
}

async function getCredentials(credentialFilePath: string) {
	if(credentialFilePath !== credentialFileDefaultPath) {
		console.log(`Using credential configuration file: ${credentialFilePath}`);
	}
	const credentialFileExist = await checkFileExist(credentialFilePath);
	const credentialFileContent: Record<string, string | number> = credentialFileExist ? JSON.parse(await readFile(credentialFilePath)) : {};
	const finalCredential: Record<string, string> = {};

	credentialItems.forEach(item => {
		let value: string | number | undefined = process.env[item.name] || credentialFileContent[item.name] || undefined;
		
		if(typeof value === "undefined") {
			console.warn("\x1b[33m%s\x1b[0m", `Credential item "${item.name}" cannot be found in the environment or the "${credentialFilePath}"`);
			value = "";
		}

		if(item.type === "string") value = String(value);
		else if(item.type === "number") value = Number(value);

		finalCredential[`__${item.name}__`] = JSON.stringify(value);
	});

	return finalCredential;
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
	const credentialsConfigPath = process.env.CREDENTIALS_CONFIG_PATH || credentialFileDefaultPath;
	const releaseMode = !!JSON.parse((process.env.RELEASE_MODE || "false").toLowerCase());

	return {
		define: {
			...(await getCredentials(credentialsConfigPath)),
			__RELEASE_MODE__: releaseMode ? "true" : "false",
		},
		base: './',
		plugins: [
			vue(),
			obfuscator,
			compression,
			legacy({
				targets: ">0.3%, edge>=12, firefox>=57, chrome>=48, safari>=11, chromeAndroid>=48, iOS>=12",
			}),
		],
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
