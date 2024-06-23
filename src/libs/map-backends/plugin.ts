import MapBackend from "./backend";
import { type Options } from "./backend";

export class MapPlugin<MapType, OptionTypes extends Options<OptionTypes["type"]>> {
    host: MapBackend<MapType, OptionTypes>;
    space: string | undefined;
    constructor(parentMap: MapBackend<MapType, OptionTypes>){
        this.host = parentMap;
    }

    mount(): boolean {
        throw new Error(`Mount method not implemented by the plugin ${this.space}`);
    }

    unmount(): boolean {
        throw new Error(`Unmount method not implemented by the plugin ${this.space}`);
    }
}

export default MapPlugin;
