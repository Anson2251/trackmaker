import { onMounted, onUnmounted } from "vue";
import PlatformInfo from "@/utils/platform";

type Platform = "mac" | "win" | "linux";

function getPlatform(): Platform {
    const platformInfo = new PlatformInfo();
    const os = platformInfo.os.toLowerCase();

    if (os.includes("mac") || os.includes("darwin")) {
        return "mac";
    }
    if (os.includes("win")) {
        return "win";
    }
    return "linux";
}

export interface ShortcutConfig {
    key: string;
    modifiers?: { ctrl?: boolean; meta?: boolean; shift?: boolean };
}

export function useKeyboardShortcut(
    config: { mac: ShortcutConfig; win: ShortcutConfig; linux: ShortcutConfig },
    callback: () => void,
) {
    const platform = getPlatform();
    const shortcutConfig = config[platform];

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key !== shortcutConfig.key) return;
        if (shortcutConfig.modifiers?.ctrl && !e.ctrlKey) return;
        if (shortcutConfig.modifiers?.meta && !e.metaKey) return;
        if (shortcutConfig.modifiers?.shift && !e.shiftKey) return;

        e.preventDefault();
        callback();
    };

    onMounted(() => {
        window.addEventListener("keydown", handleKeydown);
    });

    onUnmounted(() => {
        window.removeEventListener("keydown", handleKeydown);
    });
}
