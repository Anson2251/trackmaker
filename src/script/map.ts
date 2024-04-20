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
            if (window.Microsoft !== undefined) resolve(null);
            let loaded = false;
            const bingMapURL = scriptURL || "https://www.bing.com/api/maps/mapcontrol";
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = bingMapURL;
            script.async = false;
            script.onload = () => {
                loaded = true;
            }
            document.head.appendChild(script);
            let timer = 0;
            const waitImport = setInterval(() => {
                timer += 100;
                if (loaded
                    && window.Microsoft
                    && window.Microsoft.Maps
                    && window.Microsoft.Maps.Map
                    && window.Microsoft.Maps.Location
                    && window.Microsoft.Maps.MapTypeId
                    && document.readyState === "complete"
                ) {
                    clearInterval(waitImport);
                    resolve(null);
                }
                if (timer >= timeout) {
                    clearInterval(waitImport);
                    reject("Loading bing map timeout");
                }
            }, 100);
        })
    }
}

export default bingmaps;