# CartoSketch

CartoSketch is a space which stored a route `Route` and its peripheral part `Drafts`, such as text and other shapes.

```
└── CartoSketch
    ├── Route
    └── Drafts
```

## Route

Route is defined as the collection of geographical points.

```typescript
type GeographicPoint = {
    latitude: number;
    longitude: number;
}
```

```typescript
type GeographicRoute = GeographicPoint[];
```

The points are linked together in the sequence to form a polyline. The first point is the start of the route, the last point is the end of the part.


## Draft

Draft is the collection of all the comments to the route.

Each element is stored in GeoJSON. It may contain polygons, polylines, pushpins, and text label.

The collection of elements is stored in an array.

### Polygon

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [100.0, 0.0],
        [101.0, 0.0],
        [101.0, 1.0],
        [100.0, 1.0],
        [100.0, 0.0]
      ]
    ]
  },
  "properties": {
    "name": "Example Polygon"
  }
}
```

### Polyline

```json
{
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [100.0, 0.0],
      [101.0, 1.0],
      [102.0, 0.0],
      [103.0, 1.0]
    ]
  },
  "properties": {
    "name": "Example Polyline"
  }
}
```

### Pushpin

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [100.0, 0.0]
  },
  "properties": {
    "name": "Example Pushpin"
  }
}
```

### Label

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [101.0, 1.0]
  },
  "properties": {
    "name": "<LABEL>-Example Text Label",
    "label": "Hello World!"
  }
}
```

---

## Storage

Routes and its corresponding Drafts are stored separately in the indexedDB using `localforage`.

The instance stores the routes is named `routes_storage`

The instance stores the drafts is named `drafts_storage`

The indexes of each table is corresponding.
