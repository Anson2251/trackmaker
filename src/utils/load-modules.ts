import { isError, isString } from "lodash-es";

type ArgType = string | number | boolean | object;
type ModuleLoadingStatus = "unloaded" | "loading" | "loaded" | "error"

export interface Logger {
    info: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    debug: (...args: unknown[]) => void;
}

export interface ProgressReporter {
    onModuleStart?: (moduleName: string) => void;
    onModuleProgress?: (moduleName: string, progress: number) => void;
    onModuleComplete?: (moduleName: string) => void;
    onModuleError?: (moduleName: string, error: Error) => void;
    onOverallProgress?: (completed: number, total: number) => void;
}

export type ModuleItem = {
    name: string,
    displayName: string,
    moduleInit: (timeout: number, ...args: ArgType[]) => Promise<void>,
    dependencies?: string[]
    status?: ModuleLoadingStatus
}

const formatArg = (arg: ArgType) => isString(arg) ? arg : JSON.stringify(arg);

export const messageFormat = {
    "unloaded": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" has not been loaded yet`,
    "loading": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" is loading`,
    "loaded": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" has been loaded`,
    "error": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" failed to load.\nTrackback: \n${formatArg(args[1])}`,
    "errorDetermined": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" failed to load, asserted by another instance, skip`,
    "alreadyLoading": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" is already loading by another instance, skip`,
    "alreadyLoaded": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" has been loaded by another instance, skip`,
    "missingDependencies": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" is missing the following dependencies: ${formatArg(args[1])}`,
    "loadDependencies": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" is loading its dependencies (${args.slice(1).map(a => formatArg(a)).join(', ')})`,
    "dependenciesReady": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" dependencies are ready`,
    "dependenciesFailure": (...args: ArgType[]) => `[loadModules] Module "${formatArg(args[0])}" dependencies failed to load. \n\nTrackback: \n${formatArg(args[1])}`
};

export interface LoadModulesOptions {
    logger?: Logger;
    progressReporter?: ProgressReporter;
    printLog?: boolean;
}

const defaultLogger: Logger = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
};

/**
 * Loads modules from the library based on the specified module name and its dependencies
 *
 * @param {ModuleItem[]} libraryList - The library of modules to load from.
 * @param {string} moduleName - The name of the module to load.
 * @param {number} [loadTimeout=10000] - The timeout duration in milliseconds for loading the module.
 * @param {LoadModulesOptions} [options={}] - Options for loading modules including logger and progress reporting.
 * @return {Promise<void>} A promise that resolves once the modules are loaded or rejects on errors.
 */
export async function loadModules(
    libraryList: ModuleItem[],
    moduleName: string,
    loadTimeout: number = 10000,
    options: LoadModulesOptions = {},
    depth = 0,
    totalSteps = 0,
    completedSteps = 0
): Promise<{ completed: number; total: number }> {
    const { logger = defaultLogger, progressReporter, printLog = true } = options;

    // Find the module in the library
    const module = libraryList.find((m) => m.name === moduleName);
    if (!module) throw new Error(`cannot exactly find module "${moduleName}" from the library`);
    const moduleIndex = libraryList.findIndex((m) => m.name === module.name);

    // If the module is already loaded, return
    if (libraryList[moduleIndex].status === "loaded") {
        if(printLog) logger.info(messageFormat.alreadyLoaded(module.name));
        return { completed: completedSteps, total: totalSteps };
    }

    // Check if all the dependencies are present in the library
    const dependencies = module.dependencies || [];
    const dependencyModules = libraryList.filter((m) => dependencies.includes(m.name));
    const missingDependencies = dependencies.filter((name) => !libraryList.find((m) => m.name === name));

    // If any dependency is missing, reject with an error message
    if (missingDependencies.length > 0) {
        const msg = messageFormat.missingDependencies(module.name, missingDependencies.join(", "));
        if(printLog) logger.error(msg);
        throw new Error(msg);
    }

    // If the module has already failed to load, reject with an error message
    if (libraryList[moduleIndex].status === "error") {
        const msg = messageFormat.errorDetermined(module.name);
        if(printLog) logger.info(msg);
        throw new Error(msg);
    }

    // If the module is already being loaded, wait until it is loaded
    if (libraryList[moduleIndex].status === "loading") {
        if(printLog) logger.info(messageFormat.alreadyLoading(module.name));
        await waitUntilModuleLoaded(libraryList, module.name, loadTimeout, logger);
        return { completed: completedSteps, total: totalSteps };
    }

    try {
        // Calculate total steps if this is the root call
        let currentTotalSteps = totalSteps;
        let currentCompletedSteps = completedSteps;

        if (depth === 0) {
            // Start with the main module and count all unique dependencies
            const allModules = new Set<string>();
            const collectAllModules = (name: string) => {
                if (allModules.has(name)) return;
                allModules.add(name);

                const mod = libraryList.find((m) => m.name === name);
                if (mod && mod.dependencies) {
                    for (const dep of mod.dependencies) {
                        collectAllModules(dep);
                    }
                }
            };

            collectAllModules(moduleName);
            currentTotalSteps = allModules.size;
            currentCompletedSteps = 0; // Reset completed steps for root call
        }

        // Load all the dependencies
        if (dependencyModules.length > 0) {
            logger.info(messageFormat.loadDependencies(module.name, dependencyModules.map(m => m.name)))

            // Load dependencies sequentially to properly track progress
            for (const depModule of dependencyModules) {
                const result = await loadModules(libraryList, depModule.name, loadTimeout, { logger, progressReporter, printLog }, depth + 1, currentTotalSteps, currentCompletedSteps);
                currentCompletedSteps = result.completed;
                currentTotalSteps = result.total;

                // Report progress after each dependency completes
                progressReporter?.onOverallProgress?.(currentCompletedSteps, currentTotalSteps);
            }
            if(printLog) logger.info(messageFormat.dependenciesReady(module.name));
        }

        // Set the status to "loading"
        libraryList[moduleIndex].status = "loading";
        progressReporter?.onModuleStart?.(module.displayName);

        try {
            // Load the module
            if(printLog) logger.info(messageFormat.loading(module.name));
            await module.moduleInit(loadTimeout);
            libraryList[moduleIndex].status = "loaded";

            // Increment completed count and report progress
            currentCompletedSteps++;
            progressReporter?.onModuleComplete?.(module.displayName);
            progressReporter?.onOverallProgress?.(currentCompletedSteps, currentTotalSteps);

            if(printLog) logger.info(messageFormat.loaded(module.name));
            return { completed: currentCompletedSteps, total: currentTotalSteps };
        } catch (error) {
            // If loading the module fails, set the status to "error" and reject with an error message
            libraryList[moduleIndex].status = "error";
            const errorMessage = messageFormat.error(module.name, isString(error) ? error : (isError(error) ? error.message : JSON.stringify(error)));
            logger.error(errorMessage);
            progressReporter?.onModuleError?.(module.displayName, isString(error) ? new Error(error) : error as Error);
            throw new Error(errorMessage);
        }
    } catch (error) {
        // If loading the dependencies fails, set the status to "error" and reject with an error message
        libraryList[moduleIndex].status = "error";
        const errorMessage = messageFormat.error(module.name, error as string);
        logger.error(errorMessage);
        progressReporter?.onModuleError?.(module.displayName, error as Error);
        throw new Error(errorMessage);
    }
}

export async function waitUntilModuleLoaded(
    library: ModuleItem[],
    moduleName: string,
    timeout: number = 10000,
    logger?: Logger
): Promise<void> {
    const startTime = Date.now();
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
            const module = library.find((m) => m.name === moduleName);
            if (module && module.status === "loaded") {
                clearInterval(intervalId);
                resolve();
            } else if (Date.now() - startTime > timeout) {
                clearInterval(intervalId);
                const error = new Error(`Load module ${moduleName} timeout`);
                logger?.error(error.message);
                reject(error);
            }
        }, 100);
    });
}
