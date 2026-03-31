# Testing Notes

This directory contains shared testing setup and the current testing strategy for Trackmaker.

## Current Setup

- Test runner: `vitest`
- Default environment: `node`
- Browser-style tests: per-file `@vitest-environment jsdom`
- Shared setup: `src/test/setup.ts`

## Test Layers

### 1. Pure library tests

Target modules:

- `src/libs/**`
- math helpers
- coordinate transforms
- heading and vector conversions
- small stateful utilities

Rules:

- Prefer `node` environment
- Avoid DOM and browser globals
- Keep these tests deterministic and data-light

### 2. Browser provider tests

Target modules:

- `src/libs/platform/providers/**`
- browser sensor adapters
- geolocation providers

Rules:

- Use `jsdom`
- Mock `window`, browser events, and permission APIs
- Test through public APIs, not private methods

### 3. Module integration tests

Target modules:

- `src/composables/**`
- `src/store/**`
- lightweight service wrappers

Rules:

- Mock platform and storage boundaries
- Test behavior and lifecycle, not implementation details

### 4. Component behavior tests

Target modules:

- Vue components with real interaction logic
- components that wire stores, composables, or map state

Rules:

- Use `@vue/test-utils`
- Prioritize logic-heavy components over visual wrappers

## Current Coverage

- `src/libs/heading.test.ts`
- `src/libs/platform/providers/web-imu-provider.test.ts`
- `src/libs/geolocation/utils/coordinate-transformer.test.ts`
- `src/libs/storage/index.test.ts`
- `src/store/map-store.test.ts`
- `src/composables/useImuCompass.test.ts`

Covered themes:

- heading normalization and compass availability
- screen rotation compensation
- IMU permission flow and sensor listener lifecycle
- ENU transform and gravity removal
- coordinate transform fallback behavior
- storage facade delegation
- map store persistence behavior
- compass composable lifecycle and unavailable-heading paths

## TODO

### High priority

- [ ] Add tests for `src/libs/geolocation/kalman/worker-kalman-filter.ts`
- [ ] Add tests for `src/libs/geolocation/kalman/location-processor.ts`
- [ ] Add tests for `src/libs/geolocation/services/geolocation-manager.ts`
- [ ] Add tests for `src/libs/platform/providers/web-geolocation-provider.ts`
- [ ] Add tests for `src/libs/platform/platform-services.ts`

### Medium priority

- [ ] Add tests for `src/components/TrackerView/MapContainer.vue`
- [ ] Add tests for map orientation tracking wiring
- [ ] Add tests for `src/libs/recording-session.ts`
- [ ] Add tests for storage migration paths
- [ ] Add tests for cartosketch route/signature utilities

### Edge cases still worth adding

- [ ] IMU event ordering issues between `deviceorientation` and `devicemotion`
- [ ] Orientation updates while screen angle changes during tracking
- [ ] Sensor permission prompt flow with explicit user rejection
- [ ] Null or partial `rotationRate` / `accelerationIncludingGravity` payloads on unstable browsers
- [ ] Repeated start/stop cycles across providers and composables

## Real Data Backlog

The current tests mainly use synthetic sensor payloads. We still need real recordings to validate assumptions against actual devices and browsers.

### IMU / orientation recordings needed

- [ ] iPhone Safari portrait orientation samples
- [ ] iPhone Safari landscape-left and landscape-right samples
- [ ] Android Chrome portrait orientation samples
- [ ] Android Chrome landscape orientation samples
- [ ] Devices with `absolute === false` readings
- [ ] Devices exposing `webkitCompassHeading`

For each recording, capture:

- raw `alpha`, `beta`, `gamma`
- `absolute`
- `webkitCompassHeading` if present
- screen orientation angle
- expected real-world heading
- whether the device was stationary or rotating

### Motion recordings needed

- [ ] Stationary flat-on-table gravity samples
- [ ] Stationary upright portrait samples
- [ ] Stationary landscape samples
- [ ] Smooth yaw rotation samples
- [ ] Walking samples with normal phone carrying posture
- [ ] High-noise / low-end Android samples

For each recording, capture:

- raw `acceleration`
- raw `accelerationIncludingGravity`
- raw `rotationRate`
- synchronized orientation payloads
- rough ground-truth posture or motion note

### Geolocation / Kalman recordings needed

- [ ] Clean outdoor walk with good GPS
- [ ] Urban canyon route with degraded GPS
- [ ] Low-speed stop-and-go route
- [ ] Route with frequent heading changes
- [ ] Route with IMU available and unavailable variants for comparison

For each recording, capture:

- raw GPS points with timestamp, accuracy, speed, and heading
- raw IMU stream with timestamp alignment if possible
- expected route notes: turns, stops, drift areas, signal loss areas

## Suggested Recording Format

Prefer storing raw captures as newline-delimited JSON or timestamp-sorted JSON arrays.

Recommended fields:

```json
{
  "timestamp": 0,
  "screenAngle": 0,
  "orientation": {
    "alpha": 0,
    "beta": 0,
    "gamma": 0,
    "absolute": true,
    "webkitCompassHeading": 0
  },
  "motion": {
    "acceleration": { "x": 0, "y": 0, "z": 0 },
    "accelerationIncludingGravity": { "x": 0, "y": 0, "z": 0 },
    "rotationRate": { "alpha": 0, "beta": 0, "gamma": 0 }
  },
  "gps": {
    "latitude": 0,
    "longitude": 0,
    "accuracy": 0,
    "speed": 0,
    "heading": 0
  },
  "notes": "portrait, stationary, facing north"
}
```

## Running Tests

Run all tests:

```bash
pnpm test
```

Run a focused file:

```bash
pnpm vitest run src/libs/platform/providers/web-imu-provider.test.ts
```

Run type-checking alongside tests:

```bash
pnpm exec vue-tsc --noEmit
```
