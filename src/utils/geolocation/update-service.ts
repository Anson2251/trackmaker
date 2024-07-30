import type { GeographicPointType } from "./definitions";
import { Driver as UpdaterDriver } from "./location-update-worker";

type HandlerItemType = {
    id: number
    callback: (geoLocation: GeographicPointType) => void
    type: "change" | "error" | "start" | "stop"
}

export class Updater {
    worker: Worker;
    interval: number;
    handlers: HandlerItemType[] = [];
    geoLocationPresent: GeographicPointType = {
        latitude: 0,
        longitude: 0
    };
    running = false;
    locationInitialised = false;
    constructor(interval: number){
        this.worker = UpdaterDriver.createUpdater();
        this.interval = interval;

        this.worker.onmessage = this.onMessage.bind(this);
    }

    onMessage(event: MessageEvent) {
        switch(event.data.msg) {
            case "location": {
                this.update(event.data.data);
                break;
            }
            case "error": {
                console.error("Failed to get location: " + event.data.data.message);
                this.executeHandlers("error");
                this.stop();
                break;
            }
            case "location-request": {
                UpdaterDriver.responseLocation(this.worker);
                break;
            }
        }
    }

    start() {
        if(this.running) return;
        this.running = true;
        UpdaterDriver.startUpdater(this.worker, this.interval);
        this.executeHandlers("start");
    }

    stop() {
        if(!this.running) return;
        this.running = false;
        UpdaterDriver.stopUpdater(this.worker);
        this.executeHandlers("stop");
    }

    update(geoLocation: GeographicPointType) {
        if(!this.running) return;
        this.geoLocationPresent = { ...geoLocation };
        this.locationInitialised = true;
        this.executeHandlers("change");
    }

    addHandler(type: HandlerItemType['type'], callback: HandlerItemType['callback']): number {
        const id = this.handlers.length > 0 ? this.handlers[this.handlers.length - 1].id + 1 : 0;
        this.handlers.push({ id: id, callback: callback, type: type });
        return id;
    }

    removeHandler(id: number) {
        this.handlers = this.handlers.filter((item) => item.id !== id);
    }

    private executeHandlers(type: HandlerItemType['type']) {
        this.handlers.filter((item) => item.type === type).forEach(item => item.callback(this.geoLocationPresent));
    }
}

export namespace UpdateService {
    export const worker = new Updater(200);

    export const getPresent = () => worker.geoLocationPresent;
    export const isStarted = () => worker.running;
    export const isInitialised = () => worker.locationInitialised;

    export const start = () => UpdateService.worker.start();

    export const stop = () => UpdateService.worker.stop();

    export const addListener = (callback: (location: GeographicPointType) => void) => UpdateService.worker.addHandler("change", callback);
    
    export const removeListener = (id: number) => UpdateService.worker.removeHandler(id);
}
