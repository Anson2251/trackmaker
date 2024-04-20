/// <reference path="../../node_modules/@types/bingmaps/index.d.ts" />

export namespace bingmaps {
    export function getMap(container: HTMLElement, credentials: string, centre: Microsoft.Maps.Location, type: Microsoft.Maps.MapTypeId): Microsoft.Maps.Map {
        return new Microsoft.Maps.Map(container, {
            credentials: credentials,
            center: centre,
            mapTypeId: type,
            zoom: 0
        });
    }

    /**
     * Initializes the Bing Maps script by appending a script tag to the document head.
     * If the script is already loaded, it resolves immediately.
     *
     * @param [scriptURL] - The URL of the Bing Maps script. Defaults to [https://www.bing.com/api/maps/mapcontrol](https://www.bing.com/api/maps/mapcontrol).
     * @param [timeout=10000] - The maximum time in milliseconds to wait for the script to load. Defaults to 10000.
     * @return A promise that resolves when the Bing Maps script is loaded, or rejects if the timeout is reached.
     */
    export function initMapScript(scriptURL?: string, timeout = 10000): Promise<null> {
        // <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol'></script>
        return new Promise((resolve, reject) => {
            if ((window as any).LoadedBingMapScripts) resolve(null);
            (window as any).LoadedBingMapScripts = false;
            const callbackName = "onBingMapLoad";

            if(!document.getElementById("bingMapScript")){ // if the script is not already loaded (not inserted into the document head)
                const bingMapURL = scriptURL || `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}`; 
                // set the callback name to remove the loading status
                const script = document.createElement('script'); // load script
                script.type = 'text/javascript';
                script.src = bingMapURL;
                script.async = true;
                script.id = "bingMapScript";
                document.head.appendChild(script);
            }

            let timer = 0;
            const waitReady = setInterval(() => { // in case of timeout
                timer += 100;
                if (timer >= timeout) {
                    clearInterval(waitReady);
                    reject("Loading bing map timeout");
                }
                if((window as any).LoadedBingMapScripts) {
                    clearInterval(waitReady);
                    resolve(null);
                }
            }, 100);

            if(!(window as any)[callbackName]){
                (window as any)[callbackName] = () => { // success to load the script
                    clearInterval(waitReady);
                    (window as any).LoadedBingMapScripts = true;
                    (window as any)[callbackName] = null;
                    resolve(null);
                }
            }
        })
    }
    (window as any).initMapScript = initMapScript;
}

export default bingmaps;