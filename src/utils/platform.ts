import { UAParser } from 'ua-parser-js';

export class PlatformInfo {
    private parser: UAParser;

    constructor() {
        this.parser = new UAParser(navigator.userAgent);
    }

    public get isMobile(): boolean {
        return this.parser.getDevice().type === "mobile";
    }

    public get isTablet(): boolean {
        return this.parser.getDevice().type === "tablet";
    }

    public get isUnknown(): boolean {
        return typeof this.parser.getDevice().type === "undefined";
    }

    public get browser(): "Tauri" | string {
        return __TAURI_ENVIRONMENT__ ? "Tauri" : (this.parser.getBrowser().name || "");
    }

    public get engine(): string {
        return this.parser.getEngine().name || "";
    }

    public get os(): string {
        return this.parser.getOS().name || "";
    }
}

export default PlatformInfo;
