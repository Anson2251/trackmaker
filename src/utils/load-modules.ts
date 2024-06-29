export type moduleItem = {
    name: string,
    moduleInit: (timeout: number, ...args: any) => Promise<void>,
    dependencies?: string[]
    status?: "unloaded" | "loading" | "loaded" | "error"
}

export const messageFormat = {
    "unloaded": (...args: string[]) => `[loadModules] Module "${args[0]}" has not been loaded yet`,
    "loading": (...args: string[]) => `[loadModules] Module "${args[0]}" is loading`,
    "loaded": (...args: string[]) => `[loadModules] Module "${args[0]}" has been loaded`,
    "error": (...args: string[]) => `[loadModules] Module "${args[0]}" failed to load, Track back: \n${args[1]}`,
    "errorDetermined": (...args: string[]) => `[loadModules] Module "${args[0]}" failed to load, asserted by another instance, skip`,
    "alreadyLoading": (...args: string[]) => `[loadModules] Module "${args[0]}" is already loading by another instance, skip`,
    "alreadyLoaded": (...args: string[]) => `[loadModules] Module "${args[0]}" has been loaded by another instance, skip`,
    "missingDependencies": (...args: string[]) => `[loadModules] Module "${args[0]}" is missing the following dependencies: ${args[1]}`,
    "dependenciesReady": (...args: string[]) => `[loadModules] Module "${args[0]}" dependencies are ready`,
    "dependenciesFailure": (...args: string[]) => `[loadModules] Module "${args[0]}" dependencies failed to load. \n\n- Track back: \n${args[1]}`
}

/**
 * Loads modules from the library based on the specified module name and its dependencies
 *
 * @param {moduleItem[]} library - The library of modules to load from.
 * @param {string} moduleName - The name of the module to load.
 * @param {number} [timeout=10000] - The timeout duration in milliseconds for loading the module.
 * @param {boolean} [printLog=false] - Flag to disable the information logs.
 * @return {Promise<void>} A promise that resolves once the modules are loaded or rejects on errors.
 */
export async function loadModules(library: moduleItem[], moduleName: string, timeout: number = 10000, printLog: boolean = !(__RELEASE_MODE__)): Promise<void> {
    // Find the module in the library
    const module = library.find((m) => m.name === moduleName);
    if (!module) throw new Error(`cannot exactly find module "${moduleName}" from the library`);
    const moduleIndex = library.findIndex((m) => m.name === module.name);

    // If the module is already loaded, return
    if (library[moduleIndex].status === "loaded") {
        if(printLog) console.info(messageFormat.alreadyLoaded(module.name));
        return Promise.resolve();
    }

    // Check if all the dependencies are present in the library
    const dependencies = module.dependencies || [];
    const dependencyModules = library.filter((m) => dependencies.includes(m.name));
    const missingDependencies = dependencies.filter((name) => !library.find((m) => m.name === name));

    // If any dependency is missing, reject with an error message
    if (missingDependencies.length > 0) {
        const msg = messageFormat.missingDependencies(module.name, missingDependencies.join(", "));
        if(printLog) console.log(msg);
        return Promise.reject(msg);
    }

    // If the module has already failed to load, reject with an error message
    if (library[moduleIndex].status === "error") {
        const msg = messageFormat.errorDetermined(module.name);
        if(printLog) console.info(msg);
        return Promise.reject(msg);
    }

    // If the module is already being loaded, wait until it is loaded
    if (library[moduleIndex].status === "loading") {
        if(printLog) console.info(messageFormat.alreadyLoading(module.name));
        await waitUntilModuleLoaded(library, module.name, timeout);
        return Promise.resolve();
    }

    try {
        // Load all the dependencies
        if (dependencyModules.length > 0) { 
            await Promise.all(
                dependencyModules.map((m) => loadModules(library, m.name, timeout, printLog))
            );
            if(printLog) console.log(messageFormat.dependenciesReady(module.name));
        }

        // Set the status to "loading"
        library[moduleIndex].status = "loading";

        try {
            // Load the module
            if(printLog) console.log(messageFormat.loading(module.name));
            await module.moduleInit(timeout);
            library[moduleIndex].status = "loaded";
            if(printLog) console.log(messageFormat.loaded(module.name));
            return Promise.resolve();
        } catch (error) {
            // If loading the module fails, set the status to "error" and reject with an error message
            library[moduleIndex].status = "error";
            return Promise.reject(messageFormat.error(module.name, error as string));
        }
    } catch (error) {
        // If loading the dependencies fails, set the status to "error" and reject with an error message
        library[moduleIndex].status = "error";
        return Promise.reject(messageFormat.error(module.name, error as string));
    }
}

export async function waitUntilModuleLoaded(library: moduleItem[], moduleName: string, timeout: number = 10000): Promise<void> {
    const startTime = Date.now();
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(async () => {
            const module = library.find((m) => m.name === moduleName);
            if (module && module.status === "loaded") {
                clearInterval(intervalId);
                resolve();
            } else if (Date.now() - startTime > timeout) {
                clearInterval(intervalId);
                reject(new Error(`Load module ${moduleName} timeout`));
            }
        });
    });
}
