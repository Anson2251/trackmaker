import type {MapPlugin} from "@/libs/map-backends/plugin";
import BingMapBackend from "@/components/BingMap/bing-map-backend";

export class BingMapPlugin_LiteModeHiDPI implements MapPlugin<BingMapBackend> {
    host: BingMapBackend;
    space: string;
    id: string | undefined;
    containerID: string;
    previousScale: number;
    constructor(parentMap: BingMapBackend) {
        this.host = parentMap;
        this.space = "liteModeHiDpi";
        this.containerID = parentMap.container.id;
        this.previousScale = window.devicePixelRatio;
    }
    mount() {
        (this.host as any).plugins[this.space] = this;
        if(this.host.properties.liteModeForceHiDPI) this.id = this.enableLiteForceHiDPI();
        return true;
    }
    unmount() {
        (this.host as any).plugins[this.space] = null;
        if(!this.host.properties.liteModeForceHiDPI) return true;
        return this.disableLiteForceHiDPI();
    }

    private onResize() {
        if (this.previousScale !== window.devicePixelRatio) {
            this.previousScale = window.devicePixelRatio;
            this.enable(this.containerID);
        }
    }

    private enableLiteForceHiDPI(): string {
        window.addEventListener("resize", () => this.onResize());
        return this.enable(this.containerID);
    }

    private enable = (containerID: string) => {
        const container = document.getElementById(containerID)!;
        const borderRadiusOriginal = Number(window.getComputedStyle(container).borderRadius.match(/\d+/g));

        const styleElementID = `${containerID}-force-hidpi-style-support`;
        const styleElement = document.getElementById(styleElementID) || (() => {
            const element = document.createElement("style");
            element.id = styleElementID;
            document.head.appendChild(element);
            return element
        })();
        styleElement.innerHTML = `
            #${containerID} > div {
                transform: scale(${1 / window.devicePixelRatio}) !important;
                transform-origin: top left !important;
                width: ${window.devicePixelRatio * 100}% !important;
                height: ${window.devicePixelRatio * 100}% !important;
            }
            #${containerID} * {
                border-radius: ${window.devicePixelRatio * borderRadiusOriginal}px !important;
            }
        `;
        return styleElementID;
    }

    private disableLiteForceHiDPI() {
        const styleElementID = `${this.containerID}-force-hidpi-style-support`;
        const styleElement = document.getElementById(styleElementID);
        if (styleElement) {
            document.head.removeChild(styleElement);
        }else{
            return false;
        }
        window.removeEventListener("resize", () => this.onResize());
        return true;
    }
}

export default BingMapPlugin_LiteModeHiDPI;
