export type moduleItem = {
    name: string,
    moduleInit: () => Promise<null>,
    dependencies?: string[]
}

export function loadModules(myModules: moduleItem[], timeout: number = 10000, filterList?: string[]): Promise<null> {
    myModules = filterList ? myModules.filter((m) => filterList.includes(m.name)) : myModules // if filterList exist filter the modules, otherwise load all

    return new Promise((resolve, reject) => {
        if (myModules.length === 0) resolve(null); // no modules to load, resolve
        const loadingStatus = new Array(myModules.length).fill(false); // the registration status of the modules

        myModules.forEach((module, index) => {
            if(module.dependencies){ // has dependencies
                loadModules(myModules, timeout, module.dependencies).then(() => { // all the dependencies are loaded
                    module.moduleInit().then(() => {
                        loadingStatus[index] = true;
                    }).catch((e) => {
                        console.error(`Failed to load module: "${module.name}" at index ${index}\nReason: "${e}"`);
                    })
                }).catch((e) => {
                    console.error(`Failed to load the dependencies of module: "${module.name}"\nReason: "${e}"`);
                });
            }else{
                module.moduleInit().then(() => {
                    loadingStatus[index] = true;
                }).catch((e) => {
                    console.error(`Failed to load module: "${module.name}" at index ${index}\nReason: "${e}"`);
                })
            }
        })

        let timer = 0;
        const waiter = setInterval(() => {
            timer += 1;
            if (allLoaded(loadingStatus)) { // all the modules has been loaded
                resolve(null)
                clearInterval(waiter);
            }
            if (timer >= timeout) { // timeout
                reject(new Error("Loading modules timeout"));
                console.error("Loading modules timeout");
                console.table(myModules.map((m, i) => new Object({ Module: m.name, Status: loadingStatus[i] })), ["Module", "Status"]);
                clearInterval(waiter);
            }
        }, 1);
    });
}

function allLoaded(loadingStatus: Array<boolean>) {
    let flag = true;
    loadingStatus.forEach((status) => flag = status && flag);
    return flag;
}
