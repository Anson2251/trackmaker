import { UAParser } from 'ua-parser-js'; 

export namespace BrowserPlatform {
    export const ua = new UAParser(navigator.userAgent)
    export const isMobile = ua.getDevice().type === "mobile";
    export const isTablet = ua.getDevice().type === "tablet";
    export const isUnknown = ua.getDevice().type === "";

    export const browser = ua.getBrowser().name || "";
    export const engine = ua.getEngine().name || "";
    
    export const os = ua.getOS().name || "";
}

export default BrowserPlatform;