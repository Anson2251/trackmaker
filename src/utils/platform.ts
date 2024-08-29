import { UAParser } from 'ua-parser-js'; 

export namespace PlatformInfo {
    export const ua = new UAParser(navigator.userAgent);
    export const isMobile = ua.getDevice().type === "mobile";
    export const isTablet = ua.getDevice().type === "tablet";
    export const isUnknown = ua.getDevice().type === "";

    export const browser: "Tauri" | string = __TAURI_ENVIRONMENT__ ? "Tauri" : (ua.getBrowser().name || "");
    export const engine: string = ua.getEngine().name || "";
    
    export const os: string = ua.getOS().name || "";
}

(window as any).BrowserPlatform = PlatformInfo;

export default PlatformInfo;