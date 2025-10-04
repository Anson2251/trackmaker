import { isNumber } from "lodash-es";

function triggerHandlers() {
    for (const handler of DeviceOrientationService.handlers) {
        handler.callback((360-DeviceOrientationService.bearing));
    }
}

type HandlerItemType = {
    callback: (degree: number) => void;
    id: number;
}

export namespace DeviceOrientationService {
    export let bearing = 0;

    let started = false;
    export const handlers: HandlerItemType[] = [];

    export function updater(event: DeviceOrientationEvent) {
        if (!(isNumber(event.alpha) || (typeof (event as any).webkitCompassHeading !== "undefined"))) {
            stop();
            return;
        }
        bearing = event.alpha!;

        if (typeof (event as any).webkitCompassHeading !== "undefined") {
            // For iOS, event.webkitCompassHeading gives the heading directly
            bearing = (event as any).webkitCompassHeading;
        }

        triggerHandlers();
    }

    export function addHandler(callback: (degree: number) => void) {
        const id = handlers.length > 0 ? handlers[handlers.length - 1].id + 1 : 0;
        handlers.push({ callback, id });
        return id;
    }

    export function start() {
        if (started) return;
        window.addEventListener('deviceorientation', updater, true);
        started = true;
    }

    export function stop() {
        if (!started) return;
        window.removeEventListener('deviceorientation', updater, true);
        started = false;
    }
}
