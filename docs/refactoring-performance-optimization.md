# Performance Optimization Refactoring Plan for TrackMaker

## Executive Summary
The current tracking workflow suffers from significant performance issues due to synchronous full-data serialization and storage writes on every GPS update (1-2 seconds). This document outlines a comprehensive refactoring plan to address these issues while maintaining data integrity and user experience.

## Current Architecture Analysis

### GPS Update Flow
1. **Geolocation Updates**: GPS position updates occur every 1-2 seconds (configurable via `gpsUpdateInterval`)
2. **Route Store Callback**: Each update triggers `addPointToRoute()` in the route store
3. **Sketch Store Processing**: Points are added to the current route's `points` array
4. **Storage Operations**: Every point triggers:
   - `storageSet('sketches', sketches.value.map(s => s.toStorage()))` - Serializes ALL sketches
   - `storageSave()` - For Tauri: writes entire JSON to disk; for Web: IndexedDB transaction

### Identified Performance Issues

#### 1. **Excessive Serialization**
- **Issue**: `sketches.value.map(s => s.toStorage())` serializes **all sketches** on every GPS update
- **Impact**: As sketch count grows, serialization overhead increases exponentially
- **Location**: `sketch-store.ts:249`

#### 2. **Frequent Disk I/O (Tauri)**
- **Issue**: `storageSave()` performs actual file writes on every point
- **Impact**: Blocking I/O operations that can cause UI stuttering
- **Location**: `tauri-storage-provider.ts:75-90`

#### 3. **IndexedDB Transaction Overhead (Web)**
- **Issue**: Each `storageSet()` creates an IndexedDB transaction
- **Impact**: Transaction setup/teardown overhead for every point
- **Location**: `web-storage-provider.ts:117-143`

#### 4. **No Batching or Debouncing**
- **Issue**: No mechanism to batch multiple points before saving
- **Impact**: Maximum I/O frequency matches GPS update frequency

#### 5. **Distance Calculation Synchronization**
- **Issue**: `calculatePathDistance()` called synchronously on every point
- **Impact**: Can block point processing if calculation is slow

## Proposed Solutions

### 1. **Debounced/Batched Storage Writes**
Implement a write queue that batches changes and saves periodically:
- **Debounce period**: 5-10 seconds minimum, or every 10-20 points
- **Smart flushing**: Save immediately on app pause/route stop
- **Incremental updates**: Only save modified sketches/routes

### 2. **Differential Sketch Serialization**
Track modified sketches and serialize only changed data:
- Add `dirtySketches: Set<string>` to track modified sketch IDs
- Add `dirtyRoutes: Map<string, Set<string>>` to track modified routes per sketch
- Only serialize sketches with `isDirty` flag

### 3. **Atomic Route Updates**
Add dedicated storage methods for route-specific updates:
```typescript
interface RouteUpdate {
  routeId: string;
  points: GeographicPoint[];
  meta: Partial<GeographicRouteItemType["meta"]>;
}

async function updateRoutePoints(update: RouteUpdate): Promise<void>
```

### 4. **Memory Buffer with Periodic Flush**
Implement an in-memory buffer for recent points with background flushing:
```typescript
class PointBuffer {
  private buffer: Map<string, GeographicPoint[]> = new Map();
  private flushInterval: number | null = null;
  
  addPoint(routeId: string, point: GeographicPoint): void {
    // Add to buffer
    // Schedule flush if not already scheduled
  }
  
  flush(): Promise<void> {
    // Write buffered points to persistent storage
  }
}
```

### 5. **Asynchronous Distance Calculation**
Move distance calculation to background with eventual consistency:
```typescript
// Queue for deferred calculations
const distanceQueue = new Queue<{routeId: string, points: GeographicPoint[]}>();
// Process queue when idle or in batches
```

## Implementation Plan

### Phase 1: Core Infrastructure (Week 1)

#### 1.1 Create `DirtyTracking` Mixin/Decorator
```typescript
interface DirtyTrackable {
  markDirty(): void;
  clearDirty(): void;
  isDirty: boolean;
}

class DirtyTracker {
  private dirtyEntities = new Set<string>();
  
  mark(entityId: string): void;
  clear(entityId: string): void;
  getDirtyIds(): string[];
}
```

#### 1.2 Implement `PointBuffer` Class
```typescript
class RoutePointBuffer {
  constructor(
    private readonly maxBufferSize: number = 50,
    private readonly flushIntervalMs: number = 5000
  ) {}
  
  addPoint(routeId: string, point: GeographicPoint): Promise<void>;
  flush(): Promise<void>;
  flushRoute(routeId: string): Promise<void>;
}
```

#### 1.3 Create `DebouncedStorage` Wrapper
```typescript
class DebouncedStorage implements Storage {
  constructor(
    private readonly storage: Storage,
    private readonly debounceMs: number = 5000
  ) {}
  
  async set<T>(key: string, value: T): Promise<void> {
    // Queue for debounced write
  }
}
```

### Phase 2: Store Integration (Week 2)

#### 2.1 Refactor `SketchStore.addPointToRoute()`
```typescript
async function addPointToRoute(id: string, point: GeographicPoint): Promise<void> {
  // 1. Add to in-memory route points
  // 2. Add to point buffer
  // 3. Mark route/sketch as dirty
  // 4. Schedule save (debounced)
  // 5. Queue distance calculation (deferred)
}
```

#### 2.2 Modify `SketchStore` Save Logic
```typescript
async function saveDirtySketches(): Promise<void> {
  const dirtyIds = dirtyTracker.getDirtyIds();
  if (dirtyIds.length === 0) return;
  
  const sketchesToSave = sketches.value.filter(s => dirtyIds.includes(s.id));
  await storageSet('sketches', sketchesToSave.map(s => s.toStorage()));
  dirtyTracker.clearAll();
}
```

#### 2.3 Add App Lifecycle Hooks
```typescript
// Save on app pause/background
window.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    pointBuffer.flush();
    saveDirtySketches();
  }
});

// Save on route stop
routeStore.onStopRecording(() => {
  pointBuffer.flushRoute(currentRouteId);
  saveDirtySketches();
});
```

### Phase 3: Storage Provider Optimizations (Week 3)

#### 3.1 Tauri: Implement Write Batching
```typescript
class TauriStorageProvider {
  private writeQueue: Array<{key: string, value: unknown}> = [];
  private isSaving = false;
  
  async set<T>(key: string, value: T): Promise<Result<void, StorageError>> {
    // Add to queue instead of immediate write
    this.writeQueue.push({key, value});
    this.scheduleSave();
  }
  
  private async scheduleSave(): Promise<void> {
    // Debounced save implementation
  }
}
```

#### 3.2 Web: Optimize IndexedDB Transactions
```typescript
class WebStorageProvider {
  private bulkTransaction: IDBTransaction | null = null;
  
  async setMultiple<T>(entries: Array<{key: string, value: T}>): Promise<void> {
    // Single transaction for multiple writes
  }
}
```

#### 3.3 Add Storage Metrics
```typescript
interface StorageMetrics {
  writesPerSecond: number;
  averageWriteSize: number;
  queueLength: number;
}

class StorageMonitor {
  trackWrite(key: string, size: number): void;
  getMetrics(): StorageMetrics;
  alertIfOverloaded(): void;
}
```

### Phase 4: Advanced Optimizations (Week 4)

#### 4.1 Compression for Large Routes
```typescript
interface CompressedRouteData {
  compressed: boolean;
  data: string | GeographicPoint[]; // Base64 encoded compressed or raw
}

function compressRoutePoints(points: GeographicPoint[]): CompressedRouteData;
function decompressRoutePoints(data: CompressedRouteData): GeographicPoint[];
```

#### 4.2 Smart Point Deduplication
```typescript
class SmartPointFilter {
  private lastPoint: GeographicPoint | null = null;
  
  shouldAddPoint(point: GeographicPoint): boolean {
    // Filter based on distance, accuracy, time
    return this.isSignificantMovement(point);
  }
}
```

#### 4.3 Progressive Distance Calculation
```typescript
class IncrementalDistanceCalculator {
  private lastCalculatedIndex = 0;
  private cachedDistance = 0;
  
  addPoints(newPoints: GeographicPoint[]): number {
    // Only calculate distance for new segments
    const incrementalDistance = calculatePathDistance([
      this.lastPoint,
      ...newPoints
    ]);
    this.cachedDistance += incrementalDistance;
    return this.cachedDistance;
  }
}
```

## Risk Assessment & Mitigation

### High Risk Areas

#### 1. **Data Loss During App Crash**
- **Risk**: Buffered points lost if app crashes before flush
- **Mitigation**: 
  - Implement WAL (Write-Ahead Logging)
  - Periodic checkpointing (every 30 seconds)
  - Emergency flush on `beforeunload`

#### 2. **Increased Memory Usage**
- **Risk**: Point buffer consumes more memory
- **Mitigation**:
  - Configurable buffer size limits
  - Automatic flush when memory threshold exceeded
  - Use efficient data structures (Float64Array for coordinates)

#### 3. **Complexity Increase**
- **Risk**: More complex codebase, harder to debug
- **Mitigation**:
  - Comprehensive unit tests
  - Detailed logging with performance metrics
  - Feature flags for gradual rollout

#### 4. **Race Conditions**
- **Risk**: Concurrent access to shared buffers
- **Mitigation**:
  - Immutable data structures where possible
  - Proper locking/queueing mechanisms
  - Transactional updates

## Performance Targets

### Success Metrics
1. **Storage Write Frequency**: Reduce from 1-2Hz to ≤0.1Hz (90% reduction)
2. **Serialization Overhead**: Reduce by 80% for multi-sketch scenarios
3. **UI Responsiveness**: Ensure <16ms frame time during tracking
4. **Memory Usage**: Keep buffer memory under 10MB for typical use

### Measurement Strategy
```typescript
// Performance monitoring integration
class PerformanceMonitor {
  static measure<T>(operation: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    return fn().finally(() => {
      const duration = performance.now() - start;
      if (duration > 100) console.warn(`Slow ${operation}: ${duration}ms`);
    });
  }
}
```

## Rollout Strategy

### Stage 1: Internal Testing
- Feature flag: `performance.optimizedTracking`
- A/B testing with synthetic routes
- Performance metrics collection

### Stage 2: Beta Users
- Opt-in beta program
- Crash reporting enhancement
- User feedback on battery life

### Stage 3: Gradual Rollout
- 10% → 50% → 100% of users
- Monitor error rates and performance
- Rollback plan in place

## Backup & Migration Plan

### Data Migration
```typescript
// Ensure backward compatibility
class MigrationHelper {
  static async migrateToOptimizedFormat(): Promise<void> {
    // Convert existing routes to optimized format
  }
  
  static async rollbackIfNeeded(): Promise<void> {
    // Restore from backup if issues detected
  }
}
```

### Backup Strategy
1. Automatic backup before migration
2. Versioned data format with fallback
3. Emergency recovery tool

## Conclusion

This refactoring plan addresses the critical performance bottlenecks in TrackMaker's tracking workflow. By implementing debounced writes, differential serialization, and smart buffering, we can achieve:
- **90% reduction** in storage I/O operations
- **80% reduction** in serialization overhead  
- **Improved battery life** on mobile devices
- **Smoother UI** during long tracking sessions

The phased approach minimizes risk while delivering incremental benefits. Each phase includes measurable success criteria and rollback capabilities.