import type { GeographicDraftItemType, GeographicRouteItemType, GeoJSONPoint } from '@/libs/cartosketch/definitions';
import type { LngLatBoundsLike } from 'maplibre-gl';

export function createComponentOptions(
  drafts: GeographicDraftItemType[],
  routes: GeographicRouteItemType[]
) {
  const options: Array<{
    label: string;
    value: string;
    type: 'draft' | 'route';
  }> = [];

  // Add drafts
  drafts.forEach((draft) => {
    options.push({
      label: draft.meta.name,
      value: draft.id,
      type: "draft" as const,
    });
  });

  // Add routes
  routes.forEach((route) => {
    options.push({
      label: route.meta.name,
      value: route.id,
      type: "route" as const,
    });
  });

  return options;
}

export function getDefaultDraftShape() {
  return {
    type: "Polygon" as const,
    coordinates: [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
      [0, 0],
    ] as [number, number][],
  };
}

export function getDefaultDraftProperties() {
  return {
    fillColor: "#007bff",
    strokeColor: "#0056b3",
    strokeThickness: 2,
  };
}

export function getDefaultRouteProperties() {
  return {
    strokeColor: "#28a745",
    strokeThickness: 3,
  };
}

export function isDraftComponent(
  component: unknown
): component is GeographicDraftItemType {
  return (
    typeof component === "object" &&
    component !== null &&
    "type" in component &&
    (component as { type: string }).type === "draft"
  );
}

export function isRouteComponent(
  component: unknown
): component is GeographicRouteItemType {
  return (
    typeof component === "object" &&
    component !== null &&
    "type" in component &&
    (component as { type: string }).type === "route"
  );
}

/**
 * Calculate bounds from component coordinates
 * Returns bounds in [sw, ne] format: [[minLng, minLat], [maxLng, maxLat]]
 */
export function getComponentBounds(
  component: GeographicDraftItemType | GeographicRouteItemType | null
): LngLatBoundsLike | null {
  if (!component) return null;

  let coordinates: GeoJSONPoint[] = [];

  // Handle draft items
  if ('shape' in component && component.shape) {
    const shape = component.shape;
    if (Array.isArray(shape.coordinates)) {
      if (shape.type === 'Polygon') {
        // For polygons, coordinates is an array of arrays (outer ring)
        // Take the first ring
        const ring = shape.coordinates[0];
        if (ring && Array.isArray(ring)) {
          coordinates = ring as unknown as GeoJSONPoint[];
        }
      } else if (shape.type === 'LineString') {
        // For line strings, coordinates is an array of points
        coordinates = shape.coordinates as unknown as GeoJSONPoint[];
      } else if (shape.type === 'Point') {
        // For points, coordinates is a single point
        coordinates = [shape.coordinates as unknown as GeoJSONPoint];
      }
    }
  }
  // Handle route items
  else if ('points' in component && Array.isArray(component.points)) {
    coordinates = component.points.map(p => [p.longitude, p.latitude] as GeoJSONPoint);
  }

  if (coordinates.length === 0) return null;

  // Calculate bounds
  let minLng = Infinity;
  let minLat = Infinity;
  let maxLng = -Infinity;
  let maxLat = -Infinity;

  for (const coord of coordinates) {
    const [lng, lat] = coord;
    minLng = Math.min(minLng, lng);
    minLat = Math.min(minLat, lat);
    maxLng = Math.max(maxLng, lng);
    maxLat = Math.max(maxLat, lat);
  }

  // Return bounds in [sw, ne] format
  return [
    [minLng, minLat], // Southwest corner
    [maxLng, maxLat]  // Northeast corner
  ];
}
