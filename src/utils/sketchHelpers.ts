import type { GeographicDraftItemType, GeographicRouteItemType } from '@/libs/cartosketch/definitions';

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
