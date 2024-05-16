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
    "error": (...args: string[]) => `[loadModules] Module "${args[0]}" failed to load, Trackback: ${args[1]}`,
    "errorDetermined": (...args: string[]) => `[loadModules] Module "${args[0]}" failed to load, asserted by another instance, skip`,
    "alreadyLoading": (...args: string[]) => `[loadModules] Module "${args[0]}" is already loading by another instance, skip`,
    "alreadyLoaded": (...args: string[]) => `[loadModules] Module "${args[0]}" has been loaded by another instance, skip`,
    "missingDependencies": (...args: string[]) => `[loadModules] Module "${args[0]}" is missing the following dependencies: ${args[1]}`,
    "dependenciesReady": (...args: string[]) => `[loadModules] Module "${args[0]}" dependencies are ready`,
    "dependenciesFailure": (...args: string[]) => `[loadModules] Module "${args[0]}" dependencies failed to load. \n\n- Trackback: ${args[1]}`
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
export async function loadModules(library: moduleItem[], moduleName: string, timeout: number = 10000, printLog: boolean = false): Promise<void> {
    const module = library.find((m) => m.name === moduleName);
    if (!module) throw new Error(`cannot exactly find module "${moduleName}" from the library`);
    const moduleIndex = library.findIndex((m) => m.name === module.name);
    if (library[moduleIndex].status === "loaded") {
        if(printLog) console.log(messageFormat.alreadyLoaded(module.name));
        return Promise.resolve()
    }

    const dependencies = module.dependencies || []; // the modules used by the dependences
    const dependencyModules = library.filter((m) => dependencies.includes(m.name));
    const missingDependencies = dependencies.filter((name) => !library.find((m) => m.name === name));

    if (missingDependencies.length > 0) {
        const msg = messageFormat.missingDependencies(module.name, missingDependencies.join(", "));
        if(printLog) console.log(msg);
        return Promise.reject(msg);
    }

    if (library[moduleIndex].status === "error") {
        const msg = messageFormat.errorDetermined(module.name);
        if(printLog) console.log(msg);
        return Promise.reject(msg);
    }

    if (library[moduleIndex].status === "loading") {
        if(printLog) console.log(messageFormat.alreadyLoading(module.name));
        await waitUntilModuleLoaded(library, module.name, timeout);
        return Promise.resolve()
    }

    try {
        if (dependencyModules.length > 0) { 
            // load all the dependencies
            await Promise.all(
                dependencyModules.map((m) => loadModules(library, m.name, timeout, printLog))
                || [(new Promise(resolve => resolve(null)))]
            );
            if(printLog) console.log(messageFormat.dependenciesReady(module.name));
        }
        library[moduleIndex].status = "loading"; // Set the status to "loading"
        try {
            if(printLog) console.log(messageFormat.loading(module.name));
            await module.moduleInit(timeout);
            library[moduleIndex].status = "loaded";
            if(printLog) console.log(messageFormat.loaded(module.name));
            return Promise.resolve();
        } catch (error) {
            library[moduleIndex].status = "error";
            return Promise.reject(messageFormat.error(module.name, error as string));
        }
    } catch (error) {
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
