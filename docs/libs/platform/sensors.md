[**trackmaker**](../../README.md) • **Docs**

***

# Sensor API Reference

## Overview

Sensors provide hardware abstraction for accessing device capabilities like GPS, IMU, and orientation sensors. Each sensor implements the `ISensor<T>` interface and manages its own lifecycle, permissions, and fallback strategies.

## ISensor Interface

```typescript
interface ISensor<T> {
  name: string;
  
  // Lifecycle
  init(): Promise<Result<void, AppError>>;
  start(): Promise<Result<void, AppError>>;
  stop(): Result<void, AppError>;
  
  // Data access
  isAvailable(): boolean;
  getData(): Promise<Result<T, AppError>>;
  subscribe(callback: (data: T) => void): number;
  unsubscribe(id: number): void;
  
  // Permission management
  getPermissionStatus(): Promise<Result<PermissionState, AppError>>;
  requestPermission(promptCallback?: PermissionPromptCallback): Promise<Result<PermissionState, AppError>>;
  onPermissionChange?(callback: (state: PermissionState) => void): number;
}
```

## Built-in Sensors

### GPSSensor

Provides access to device location through platform-specific geolocation providers with automatic IP geolocation fallback.

#### Features

- **Platform-aware**: Uses Tauri provider or Web Geolocation API
- **Automatic fallback**: Falls back to IP geolocation when GPS unavailable
- **Permission handling**: iOS and Android compliant permission requests
- **Continuous updates**: Subscribe to position changes

#### Usage

```typescript
const gpsSensor = new GPSSensor({
  timeout: 10000,
  enableHighAccuracy: true
});

await gpsSensor.init();

// Request permission
const permissionResult = await gpsSensor.requestPermission(
  async (state, explanation) => {
    return confirm(explanation);
  }
);

// Get current position
const positionResult = await gpsSensor.getData();
if (positionResult.isOk()) {
  console.log('Position:', positionResult.value);
}

// Subscribe to updates
const subscriptionId = gpsSensor.subscribe((position) => {
  console.log('New position:', position);
});

// Unsubscribe
gpsSensor.unsubscribe(subscriptionId);
```

#### Data Format

```typescript
interface GeoPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
  timestamp: number;
}
```

#### Internal Fallback Strategy

The GPS sensor automatically manages fallback to IP geolocation:

```typescript
async getData(): Promise<Result<GeoPosition, AppError>> {
  // Check permission
  const permStatus = await this.getPermissionStatus();
  
  if (permStatus.isOk() && permStatus.value === 'granted') {
    // Try platform GPS
    const result = await this.platformProvider.getCurrentPosition();
    if (result.isOk()) return result;
  }
  
  // Fallback to IP geolocation (transparent to caller)
  console.warn('[GPSSensor] Using IP fallback');
  return await this.ipFallback.getCurrentPosition();
}
```

### IMUSensor

Provides access to device motion sensors (accelerometer and gyroscope).

#### Features

- **iOS 13+ support**: Handles DeviceMotionEvent permission
- **ENU normalization**: Optional coordinate transformation
- **Configurable frequency**: Adjust sampling rate
- **Platform detection**: Uses PlatformInfo for iOS detection

#### Usage

```typescript
const imuSensor = new IMUSensor();

await imuSensor.init();

// Request permission (iOS only)
if (imuSensor.needsPermission()) {
  await imuSensor.requestPermission(
    async (state, explanation) => {
      return confirm(explanation);
    }
  );
}

// Start acceleration monitoring
await imuSensor.start();

// Subscribe to readings
imuSensor.subscribe((reading) => {
  console.log('Acceleration:', reading);
});
```

#### Data Format

```typescript
interface IMUReading {
  x: number;        // m/s² in x-axis
  y: number;        // m/s² in y-axis
  z: number;        // m/s² in z-axis
  timestamp: number;
}
```

#### iOS Motion Permission

The IMU sensor automatically detects iOS 13+ and requests motion permission:

```typescript
protected needsPermission(): boolean {
  const isIOS = /iPhone|iPad|iPod/.test(this.platformInfo.os);
  const hasAPI = typeof (DeviceMotionEvent as any).requestPermission === 'function';
  return isIOS && hasAPI;
}

protected async requestPlatformPermission(): Promise<Result<PermissionState, AppError>> {
  if (!this.requiresIOSMotionPermission()) {
    return ok('granted');
  }

  const permission = await (DeviceMotionEvent as any).requestPermission();
  return ok(permission === 'granted' ? 'granted' : 'denied');
}
```

### OrientationSensor

Provides access to device orientation (compass heading, pitch, roll).

#### Features

- **Compass support**: WebKit compass heading on iOS
- **Continuous updates**: Real-time orientation changes
- **No permission required**: Works on most platforms without permission

#### Usage

```typescript
const orientationSensor = new OrientationSensor();

await orientationSensor.init();
await orientationSensor.start();

orientationSensor.subscribe((orientation) => {
  console.log('Heading:', orientation.alpha);
  console.log('Pitch:', orientation.beta);
  console.log('Roll:', orientation.gamma);
});
```

#### Data Format

```typescript
interface DeviceOrientationReading {
  alpha: number;              // Compass heading (0-360)
  beta: number;               // Pitch (-180 to 180)
  gamma: number;              // Roll (-90 to 90)
  webkitCompassHeading?: number; // iOS compass heading
  timestamp: number;
}
```

## Creating Custom Sensors

Extend `BaseSensor<T>` to create custom sensors:

```typescript
import { BaseSensor } from '@/libs/platform/sensors/base-sensor';

class CustomSensor extends BaseSensor<CustomReading> {
  name = 'custom-sensor';

  protected needsPermission(): boolean {
    // Determine if permission is needed based on platform
    return this.platformInfo.isMobile;
  }

  protected async requestPlatformPermission(): Promise<Result<PermissionState, AppError>> {
    // Implement platform-specific permission request
    // ...
  }

  async init(): Promise<Result<void, AppError>> {
    // Initialize sensor hardware/API
    // ...
  }

  async start(): Promise<Result<void, AppError>> {
    // Start data collection
    // ...
  }

  stop(): Result<void, AppError> {
    // Stop data collection
    // ...
  }

  async getData(): Promise<Result<CustomReading, AppError>> {
    // Get current sensor reading
    // ...
  }

  isAvailable(): boolean {
    // Check if sensor is available on this platform
    return true;
  }
}
```

## BaseSensor Class

Base class providing common functionality for all sensors:

```typescript
abstract class BaseSensor<T> implements ISensor<T> {
  protected platformInfo: PlatformInfo;
  protected permissionState: PermissionState = 'prompt';
  protected callbacks = new Map<number, (data: T) => void>();
  protected permissionCallbacks = new Map<number, (state: PermissionState) => void>();

  constructor() {
    this.platformInfo = new PlatformInfo();
  }

  // Implemented methods
  subscribe(callback: (data: T) => void): number;
  unsubscribe(id: number): void;
  onPermissionChange(callback: (state: PermissionState) => void): number;
  
  // Abstract methods (must implement)
  abstract needsPermission(): boolean;
  abstract requestPlatformPermission(): Promise<Result<PermissionState, AppError>>;
  abstract init(): Promise<Result<void, AppError>>;
  abstract start(): Promise<Result<void, AppError>>;
  abstract stop(): Result<void, AppError>;
  abstract getData(): Promise<Result<T, AppError>>;
  abstract isAvailable(): boolean;
}
```

## Permission Management

### Permission Flow

1. **Check Status**: Query current permission state
2. **Show Explanation**: Display user-friendly explanation (iOS requirement)
3. **Request Permission**: Trigger platform permission prompt
4. **Track State**: Update internal state and notify listeners

### Permission Callback

```typescript
type PermissionPromptCallback = (
  currentState: PermissionState,
  explanation?: string
) => Promise<boolean>;
```

The callback receives:
- `currentState`: Current permission state ('prompt', 'granted', 'denied')
- `explanation`: Human-readable explanation of why permission is needed

Return `true` to proceed with permission request, `false` to cancel.

### Platform-Specific Considerations

#### iOS
- Requires explanation before system prompt
- Motion sensors need DeviceMotionEvent.requestPermission()
- Must be triggered by user gesture

#### Android
- Geolocation permission required
- Motion sensors typically auto-granted

#### Tauri
- Platform handles permissions differently
- May auto-grant or use OS-level dialogs

## Best Practices

1. **Always check availability**: Use `isAvailable()` before accessing sensor
2. **Handle permission denial**: Provide fallback when permission denied
3. **Unsubscribe when done**: Prevent memory leaks by cleaning up subscriptions
4. **Platform-aware explanations**: Customize permission prompts per platform
5. **Test on real devices**: Emulators may not support all sensors

## See Also

- [Middleware Guide](./middleware.md)
- [Permission Handling](./permissions.md)
- [Platform Services](./platform-services.md)
