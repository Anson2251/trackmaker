/// <reference path="../../node_modules/@types/bingmaps/index.d.ts" />

import type { Location } from "./geoLocation";

export namespace bingmaps {
    export function getMap(container: HTMLElement, credentials: string, centre: Location, type: Microsoft.Maps.MapTypeId): Microsoft.Maps.Map {
        const map = new Microsoft.Maps.Map(container, {
            credentials: credentials,
            center: new Microsoft.Maps.Location(centre.latitude, centre.longitude),
            mapTypeId: type,
            zoom: 10
        });
        return map;
    }
}

export default bingmaps;