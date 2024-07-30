import type { GeographicPointType } from "@/utils/geolocation";
import DrawingComponentProxy from "./component";

export type PushpinProperties = {
    draggable: boolean;
    icon: string;
    label: string;
    title: string;
    subTitle: string;
    visible: boolean;
}

export type PushPinGeoJSON = {
    type: "Feature",
    properties: PushpinProperties,
    geometry: {
        type: "Point",
        coordinates: [number, number],
    },
}

/* **Warning**: For the coordinates, it just takes the first element of the array to get the location of the pin */
export class PushPinProxy extends DrawingComponentProxy<PushpinProperties> {
    type = "Point";

    /**
     * Initializes a new instance of the PushPinProxy class.
     *
     * @param coordinates The coordinates of the pushpin. **Warning**: The location of the pin should only be stored as te first element
     * @param properties The properties of the pushpin.
     * @param [id] The ID of the pushpin.
     * @param [name] The name of the pushpin.
     */
    constructor(coordinates: GeographicPointType[], properties: PushpinProperties, id?: string, name?: string) {
        super(coordinates, properties, id, name);
    }

    /**
     * Retrieves the location of the pushpin.
     *
     * @returns {GeographicPointType} The location of the pushpin.
     */
    getLocation(): GeographicPointType {
        const nativeLocation = this.getLocations()[0];
        return {
            latitude: nativeLocation.latitude,
            longitude: nativeLocation.longitude,
        };
    }

    /**
     * Converts the pushpin object to a GeoJSON representation.
     *
     * @return {PushPinGeoJSON} The GeoJSON representation of the pushpin object.
     */
    exportToGeoJSON(): PushPinGeoJSON {
        const location = this.getLocation();
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [location.longitude, location.latitude],
            },
            properties: this.properties,
        };
    }
}

export default PushPinProxy;
