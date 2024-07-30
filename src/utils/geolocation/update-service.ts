import type { GeographicPointType } from "./definitions";
import { Driver as UpdaterDriver } from "./update-worker-driver";

type HandlerItemType = {
    id: number
    callback: (geoLocation: GeographicPointType) => void
    type: "change" | "error" | "start" | "stop"
}

/** A wrapper around the location-updating worker */
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

    /** @param {number} interval - The update interval in milliseconds */
    constructor(interval: number){
        this.worker = UpdaterDriver.createUpdater();
        this.interval = interval;

        this.worker.onmessage = this.onMessage.bind(this);
    }

    /**
     * Handles the incoming message event from the worker.
     * @param {MessageEvent} event - The message event containing the data.
     */
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

    /**
     * Starts the updater service if it is not already running.
     *
     * Handlers with type "start" will be triggered.
     * @return This function does not return anything.
     */
    start(): void {
        if(this.running) return;
        this.running = true;
        UpdaterDriver.startUpdater(this.worker, this.interval);
        this.executeHandlers("start");
    }

    /**
     * Stops the updater service if it is currently running.
     * 
     * Handlers with type "stop" will be triggered.
     * @return {void}
     */
    stop(): void {
        if(!this.running) return;
        this.running = false;
        UpdaterDriver.stopUpdater(this.worker);
        this.executeHandlers("stop");
    }

    /**
     * Updates the current geographic location and triggers the "change" event handlers if the updater service is running.
     * @param {GeographicPointType} geoLocation - The new geographic location to update to.
     * @return {void} This function does not return anything.
     */
    update(geoLocation: GeographicPointType): void {
        if(!this.running) return;
        this.geoLocationPresent = { ...geoLocation };
        this.locationInitialised = true;
        this.executeHandlers("change");
    }

    /**
     * Adds a handler to the list of handlers.
     * @param {HandlerItemType['type']} type - The type of the handler.
     * @param {HandlerItemType['callback']} callback - The callback function of the handler.
     * @return {number} The ID of the added handler.
     */
    addHandler(type: HandlerItemType['type'], callback: HandlerItemType['callback']): number {
        const id = this.handlers.length > 0 ? this.handlers[this.handlers.length - 1].id + 1 : 0;
        this.handlers.push({ id: id, callback: callback, type: type });
        return id;
    }

    /**
     * Removes a handler based on the provided ID.
     * @param {number} id - The ID of the handler to be removed.
     */
    removeHandler(id: number) {
        this.handlers = this.handlers.filter((item) => item.id !== id);
    }

    /**
     * Executes the callbacks of all the handlers with the specified type.
     *
     * @param {HandlerItemType['type']} type - The type of the handlers to execute.
     */
    private executeHandlers(type: HandlerItemType['type']) {
        this.handlers.filter((item) => item.type === type).forEach(item => item.callback(this.geoLocationPresent));
    }
}

export namespace UpdateService {
    /** The location-updating worker instance */
    export const worker = new Updater(200);

    /** Get the current geographic location */
    export const getPresent = () => worker.geoLocationPresent;

    /** Whether the updater service is running */
    export const isStarted = () => worker.running;

    /** Whether the default value in the worker has been overwritten */
    export const isInitialised = () => worker.locationInitialised;

    /** Start the updater service */
    export const start = () => UpdateService.worker.start();

    /** Stop the updater service */
    export const stop = () => UpdateService.worker.stop();

    /** Add a handler to the service. It will be triggered on "change" */
    export const addListener = (callback: (location: GeographicPointType) => void) => UpdateService.worker.addHandler("change", callback);
    
    /** Remove a handler from the service 
     * @param {number} id - The ID of the handler to remove
    */
    export const removeListener = (id: number) => UpdateService.worker.removeHandler(id);
}
