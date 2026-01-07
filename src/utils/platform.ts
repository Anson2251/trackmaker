import { UAParser } from 'ua-parser-js';
import { getPlatformContext, isTauri } from '@/libs/platform';

export class PlatformInfo {
    private parser: UAParser;
    private platformContext;

    constructor() {
        this.parser = new UAParser(navigator.userAgent);
        this.platformContext = getPlatformContext();
    }

    public get isMobile(): boolean {
        return this.platformContext.isMobile;
    }

    public get isTablet(): boolean {
        return this.platformContext.isTablet;
    }

    public get isUnknown(): boolean {
        return typeof this.parser.getDevice().type === "undefined";
    }

    public get browser(): string {
        return isTauri() ? "Tauri" : (this.platformContext.browser || "");
    }

    public get engine(): string {
        return this.parser.getEngine().name || "";
    }

    public get os(): string {
        return this.platformContext.os || "";
    }

    /**
     * Get the full platform context with capabilities and configuration
     */
    public get context() {
        return this.platformContext;
    }

    /**
     * Check if running in Tauri environment
     */
    public get isTauri(): boolean {
        return isTauri();
    }

    /**
     * Check if running in web environment
     */
    public get isWeb(): boolean {
        const env = this.platformContext.environment;
        // oxlint-disable-next-line no-unsafe-enum-comparison
        return env === 'web' || env === 'mobile_web';
    }
}

export default PlatformInfo;
