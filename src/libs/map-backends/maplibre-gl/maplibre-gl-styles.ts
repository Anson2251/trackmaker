// FROM https://maplibre.org/maplibre-gl-js/docs/examples/3d-terrain/
export const MapLibreGLTypeStreet = (credential: string) =>`https://api.maptiler.com/maps/streets-v2/style.json?key=${credential}`;

export const MapLibreGLTypeBasic = (credential: string) =>`https://api.maptiler.com/maps/basic-v2/style.json?key=${credential}`;

export const MapLibreGLTypeOutdoor = (credential: string) => `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${credential}`;

export const MapLibreGLTypeSatellite = (credential: string) => `https://api.maptiler.com/maps/satellite/style.json?key=${credential}`;

export function getMapLibreGLStyle(type: string, credential: string) {
    switch(type) {
        case "street": return MapLibreGLTypeStreet(credential);
        case "basic": return MapLibreGLTypeBasic(credential);
        case "outdoor": return MapLibreGLTypeOutdoor(credential);
        case "satellite": return MapLibreGLTypeSatellite(credential);
        default: {
            console.warn(`The map type ${type} is not supported. Fallback to the default map type basic`);
            return MapLibreGLTypeBasic(credential);
        }
    }
}