[**trackmaker**](../../README.md) • **Docs**

***

# Platform Architecture Overview

## Introduction

The platform abstraction layer provides a unified interface for accessing device sensors and processing their data across different runtime environments (Web, Tauri, Mobile Web). The architecture consists of three main components:

1. **Sensors** - Hardware abstraction for GPS, IMU, orientation sensors
2. **Middleware Pipeline** - Composable data processing chain
3. **Platform Services** - Unified service registry and initialization

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                        │
│            (GeolocationManager, Components)                  │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                  Platform Services                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            Middleware Pipeline                        │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │  │
│  │  │Validation│→ │  Kalman  │→ │    Accuracy      │   │  │
│  │  │          │  │  Filter  │  │   Estimation     │   │  │
│  │  └──────────┘  └─────┬────┘  └──────────────────┘   │  │
│  │                      │                               │  │
│  │                      │ Queries Sensors               │  │
│  │                      ▼                               │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            Sensor Registry                            │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │  │
│  │  │   GPS    │  │   IMU    │  │   Orientation    │   │  │
│  │  │  Sensor  │  │  Sensor  │  │     Sensor       │   │  │
│  │  └────┬─────┘  └──────────┘  └──────────────────┘   │  │
│  │       │                                              │  │
│  │       │ Internal Fallback                            │  │
│  │       ▼                                              │  │
│  │  ┌──────────┐                                        │  │
│  │  │    IP    │                                        │  │
│  │  │   Geo    │                                        │  │
│  │  └──────────┘                                        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│               Platform Providers                             │
│  (WebGeolocationProvider, TauriGeolocationProvider, etc.)   │
└─────────────────────────────────────────────────────────────┘
```

## Key Principles

### 1. Separation of Concerns

- **Sensors** own hardware access and fallback strategies
- **Middleware** owns data processing and filtering
- **Platform Services** owns initialization and coordination

### 2. Middleware Queries Sensors

Middleware components can query any registered sensor through the platform services:

```typescript
class KalmanFilterMiddleware implements GeolocationMiddleware {
  async onInit() {
    // Query platform for sensors this middleware needs
    this.gpsSensor = this.platform.getSensor<GeoPosition>('gps');
    this.imuSensor = this.platform.getSensor<IMUReading>('imu');
    
    if (this.imuSensor?.isAvailable()) {
      this.imuSensor.subscribe((reading) => {
        this.kalmanFilter.updateWithIMU(reading);
      });
    }
  }
}
```

### 3. Sensors Handle Fallback Internally

GPS sensor manages its own fallback to IP geolocation - this is not exposed to the platform or middleware:

```typescript
class GPSSensor implements ISensor<GeoPosition> {
  private platformProvider: IGeolocationProvider;  // Native GPS
  private ipFallback: IPGeolocationBackend;        // Internal fallback
  
  async getData(): Promise<Result<GeoPosition, AppError>> {
    // Try GPS first
    const result = await this.platformProvider.getCurrentPosition();
    if (result.isOk()) return result;
    
    // Fallback to IP (internal strategy)
    return await this.ipFallback.getCurrentPosition();
  }
}
```

### 4. Platform-Aware Permissions

Sensors use `PlatformInfo` to determine platform-specific permission requirements:

```typescript
class IMUSensor extends BaseSensor<IMUReading> {
  protected needsPermission(): boolean {
    // Only iOS 13+ requires explicit motion permission
    return this.requiresIOSMotionPermission();
  }
  
  private requiresIOSMotionPermission(): boolean {
    const isIOS = /iPhone|iPad|iPod/.test(this.platformInfo.os);
    const hasAPI = typeof (DeviceMotionEvent as any).requestPermission === 'function';
    return isIOS && hasAPI;
  }
}
```

## Initialization Flow

### Phase 1: Sensor Initialization

```typescript
async initializeSensors(config: PlatformServicesConfig) {
  // Fixed list of sensors (not dynamically loaded)
  const sensorList = [
    { name: 'gps', factory: () => new GPSSensor(config.gps) },
    { name: 'imu', factory: () => new IMUSensor() },
    { name: 'orientation', factory: () => new OrientationSensor() }
  ];

  for (const { name, factory } of sensorList) {
    const sensor = factory();
    if (sensor.isSupported()) {
      await sensor.init();
      this.sensors.set(name, sensor);
    }
  }
}
```

### Phase 2: Permission Requests

```typescript
async requestSensorPermissions(promptCallback?: PermissionPromptCallback) {
  // Request in platform-specific order
  const order = this.getPermissionRequestOrder(); // ['gps', 'imu', 'orientation']
  
  for (const sensorName of order) {
    const sensor = this.getSensor(sensorName);
    if (sensor) {
      await sensor.requestPermission(promptCallback);
    }
  }
}
```

### Phase 3: Middleware Bootstrap

```typescript
async bootstrapMiddleware(config: PlatformServicesConfig) {
  // Simple array - order matters
  if (config.validation?.enabled) {
    this.middlewarePipeline.push(new ValidationMiddleware());
  }
  
  if (config.kalmanFilter?.enabled) {
    this.middlewarePipeline.push(
      new KalmanFilterMiddleware(this, config.kalmanFilter)
    );
  }

  // Initialize middleware (can now query sensors)
  for (const middleware of this.middlewarePipeline) {
    await middleware.onInit?.();
  }
}
```

## Benefits

1. **No coupling** - Sensors don't know about middleware or each other
2. **Clean fallback** - IP geolocation is internal to GPS sensor
3. **Composable** - Easy to add/remove middleware
4. **Testable** - Mock sensor registry for testing
5. **Platform-aware** - Automatic handling of iOS/Android/Tauri differences
6. **Permission-friendly** - iOS-compliant permission flow

## Integration with Module Loading System

The platform services integrate with the existing module loading system in `configs.ts`:

```typescript
export const modules: ModuleItem[] = [
  {
    name: "platform-services",
    displayName: "Platform Services",
    moduleInit: async () => {
      const platformServices = getPlatformServices({
        requestPermissions: true,
        permissionPromptCallback: async (state, explanation) => {
          return confirm(explanation || 'Grant permission?');
        },
        kalmanFilter: {
          enabled: true,
          enableIMUFusion: true
        }
      });
      
      await platformServices.initialize();
    },
    dependencies: []
  },
  {
    name: "geolocation",
    displayName: "Geolocation Service",
    moduleInit: async () => {
      // GeolocationManager uses platform services internally
      const geolocationManager = new GeolocationManager();
      await geolocationManager.initialize();
    },
    dependencies: ["platform-services"]
  }
];
```

## See Also

- [Sensor API Reference](./sensors.md)
- [Middleware Guide](./middleware.md)
- [Permission Handling](./permissions.md)
- [Migration Guide](./migration-guide.md)
