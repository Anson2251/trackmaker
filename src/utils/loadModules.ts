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
    "dependenciesFailure": (...args: string[]) => `[loadModules] Module "${args[0]}" dependencies failed to load, Trackback: ${args[1]}`
}

export async function loadModules(library: moduleItem[], moduleName: string, timeout: number = 10000): Promise<void> {
    const module = library.find((m) => m.name === moduleName);
    if (!module) throw new Error(`cannot exactly find module "${moduleName}" from the library`);
    const moduleIndex = library.findIndex((m) => m.name === module.name);
    if (library[moduleIndex].status === "loaded") {
        console.log(messageFormat.alreadyLoaded(module.name));
        return Promise.resolve()
    }

    const dependencies = module.dependencies || []; // the modules used by the dependences
    const dependencyModules = library.filter((m) => dependencies.includes(m.name));
    const missingDependencies = dependencies.filter((name) => !library.find((m) => m.name === name));

    if (missingDependencies.length > 0) {
        const msg = messageFormat.missingDependencies(module.name, missingDependencies.join(", "));
        console.log(msg);
        return Promise.reject(msg);
    }

    if (library[moduleIndex].status === "error") {
        const msg = messageFormat.errorDetermined(module.name);
        console.log(msg);
        return Promise.reject(msg);
    }

    if (library[moduleIndex].status === "loading") {
        console.log(messageFormat.alreadyLoading(module.name));
        await waitUntilModuleLoaded(library, module.name, timeout);
        return Promise.resolve()
    }

    try {
        if (dependencyModules.length > 0) {
            // Load the module
            await Promise.all(
                dependencyModules.map((m) => loadModules(library, m.name, timeout))
                || [(new Promise(resolve => resolve(null)))]
            );
            console.log(messageFormat.dependenciesReady(module.name));
        }
        library[moduleIndex].status = "loading"; // Set the status to "loading"
        try {
            console.log(messageFormat.loading(module.name));
            await module.moduleInit(timeout);
            library[moduleIndex].status = "loaded";
            console.log(messageFormat.loaded(module.name));
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
                reject(new Error(`Timed out waiting for module ${moduleName} to load`));
            }
        });
    });
}
