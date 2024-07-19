import DrawingComponentProxy from "@/libs/drawing-map/components-proxies/component";
import PolygonProxy, { type PolygonProperties } from "@/libs/drawing-map/components-proxies/polygon";
import PushPinProxy, { type PushpinProperties } from "@/libs/drawing-map/components-proxies/pushpin";
import PolylineProxy, { type PolylineProperties } from "@/libs/drawing-map/components-proxies/polyline";

/**
 * Retrieves the ID of a primitive object.
 *
 * @param {Microsoft.Maps.IPrimitive} primitive - The primitive object to extract the ID from.
 * @return {number} The ID of the primitive object.
 */
export function getPrimitiveID(primitive: Microsoft.Maps.IPrimitive): number {
    return (primitive as any).id as number;
}

/**
 * Retrieves the class name of a Microsoft.Maps.IPrimitive object.
 *
 * @param {Microsoft.Maps.IPrimitive} p - The primitive object to extract the class name from.
 * @return {string} The class name of the primitive object.
 */
export function getPrimitiveClass(p: Microsoft.Maps.IPrimitive): string {
    return ((p as any).entity.id as string).split("_")[0].toLocaleLowerCase();
}

/**
 * Converts a DrawingComponentProxy to a Microsoft.Maps.IPrimitive based on the component type.
 *
 * @param {DrawingComponentProxy<PolygonProperties | PushpinProperties | PolylineProperties>} component - The DrawingComponentProxy to convert.
 * @return {Microsoft.Maps.IPrimitive} The converted Microsoft.Maps.IPrimitive object.
 */
export function convertProxyComponent2BingMapPrimitive(component: DrawingComponentProxy<PolygonProperties | PushpinProperties | PolylineProperties>): Microsoft.Maps.IPrimitive {
    const className = component.type;
    switch (className) {
        case "pushpin": {
            return convertPushPinProxy2Primitive(component as PushPinProxy);
        }
        case "polyline": {
            return convertPolylineProxy2Primitive(component as PolylineProxy);
        }
        case "polygon": {
            return convertPolygonProxy2Primitive(component as PolygonProxy);
        }
    }
    throw new Error(`Fail to convert component with class name "${className}"`);
}

/**
 * Converts a Microsoft.Maps.IPrimitive object to a DrawingComponentProxy based on the primitive type.
 *
 * @param {Microsoft.Maps.IPrimitive} primitive - The primitive object to convert.
 * @return {DrawingComponentProxy<PolygonProperties | PushpinProperties | PolylineProperties>} The converted DrawingComponentProxy object.
 */
export function convertNativePrimitive2ProxyComponent(primitive: Microsoft.Maps.IPrimitive): DrawingComponentProxy<PolygonProperties | PushpinProperties | PolylineProperties> {
    const className = getPrimitiveClass(primitive);
    let newComponent: any = null;
    switch (className) {
        case "pushpin": {
            newComponent = convertPushPinPrimitive2Proxy(primitive as Microsoft.Maps.Pushpin);
            break;
        }
        case "polyline": {
            newComponent = convertPolylinePrimitive2Proxy(primitive as Microsoft.Maps.Polyline);
            break;
        }
        case "polygon": {
            newComponent = convertPolygonPrimitive2Proxy(primitive as Microsoft.Maps.Polygon);
            break;
        }
    }
    if (!newComponent) throw new Error(`Fail to convert primitive with class name "${className}"`);
    return newComponent;
}


/**
 * Converts a Microsoft.Maps.Pushpin object to a PushPinProxy object.
 *
 * @param {Microsoft.Maps.Pushpin} primitive - The Pushpin object to convert.
 * @return {PushPinProxy} The converted PushPinProxy object.
 */
export function convertPushPinPrimitive2Proxy(primitive: Microsoft.Maps.Pushpin): PushPinProxy {
    const coord = (primitive as Microsoft.Maps.Pushpin).getLocation();
    const geoLocation = {
        latitude: coord.latitude,
        longitude: coord.longitude
    };
    const properties: PushpinProperties = {
        title: (primitive as Microsoft.Maps.Pushpin).getTitle(),
        subTitle: (primitive as Microsoft.Maps.Pushpin).getSubTitle(),
        label: (primitive as Microsoft.Maps.Pushpin).getSubTitle(),
        icon: (primitive as Microsoft.Maps.Pushpin).getIcon(),
        visible: (primitive as Microsoft.Maps.Pushpin).getVisible(),
        draggable: (primitive as Microsoft.Maps.Pushpin).getDraggable(),
    };
    return new PushPinProxy([geoLocation], properties);
}

/**
 * Converts a Microsoft.Maps.Polyline object to a PolylineProxy object.
 *
 * @param {Microsoft.Maps.Polyline} primitive - The Polyline object to convert.
 * @return {PolylineProxy} The converted PolylineProxy object.
 */
export function convertPolylinePrimitive2Proxy(primitive: Microsoft.Maps.Polyline): PolylineProxy {
    const coordinates = (primitive as Microsoft.Maps.Polyline).getLocations();
    const properties: PolylineProperties = {
        strokeColor: (primitive as Microsoft.Maps.Polyline).getStrokeColor().toString(),
        strokeThickness: (primitive as Microsoft.Maps.Polyline).getStrokeThickness(),
        visible: (primitive as Microsoft.Maps.Polyline).getVisible(),
    };
    return new PolylineProxy(coordinates, properties);
}

/**
 * Converts a Microsoft.Maps.Polygon object to a PolygonProxy object.
 *
 * @param {Microsoft.Maps.Polygon} primitive - The Polygon object to convert.
 * @return {PolygonProxy} The converted PolygonProxy object.
 */
export function convertPolygonPrimitive2Proxy(primitive: Microsoft.Maps.Polygon): PolygonProxy {
    const coordinates = (primitive as Microsoft.Maps.Polygon).getLocations();
    const properties: PolygonProperties = {
        fillColor: (primitive as Microsoft.Maps.Polygon).getFillColor().toString(),
        strokeColor: (primitive as Microsoft.Maps.Polygon).getStrokeColor().toString(),
        strokeThickness: (primitive as Microsoft.Maps.Polygon).getStrokeThickness(),
        visible: (primitive as Microsoft.Maps.Polygon).getVisible(),
    };
    return new PolygonProxy(coordinates, properties);
}

/**
 * Converts a PushPinProxy object to a Microsoft.Maps.Pushpin object.
 *
 * @param {PushPinProxy} proxy - The PushPinProxy object to convert.
 * @return {Microsoft.Maps.Pushpin} The converted Microsoft.Maps.Pushpin object.
 */
export function convertPushPinProxy2Primitive(proxy: PushPinProxy): Microsoft.Maps.Pushpin {
    return new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(proxy.coordinates[0].latitude, proxy.coordinates[0].longitude), proxy.properties);
}

/**
 * Converts a PolylineProxy object to a Microsoft.Maps.Polyline object.
 *
 * @param {PolylineProxy} proxy - The PolylineProxy object to convert.
 * @return {Microsoft.Maps.Polyline} The converted Microsoft.Maps.Polyline object.
 */
export function convertPolylineProxy2Primitive(proxy: PolylineProxy): Microsoft.Maps.Polyline {
    return new Microsoft.Maps.Polyline(proxy.coordinates.map(c => new Microsoft.Maps.Location(c.latitude, c.longitude)), proxy.properties);
}

/**
 * Converts a PolygonProxy object to a Microsoft.Maps.Polygon object.
 *
 * @param {PolygonProxy} proxy - The PolygonProxy object to convert.
 * @return {Microsoft.Maps.Polygon} The converted Microsoft.Maps.Polygon object.
 */
export function convertPolygonProxy2Primitive(proxy: PolygonProxy): Microsoft.Maps.Polygon {
    return new Microsoft.Maps.Polygon(proxy.coordinates.map(c => new Microsoft.Maps.Location(c.latitude, c.longitude)), proxy.properties);
}