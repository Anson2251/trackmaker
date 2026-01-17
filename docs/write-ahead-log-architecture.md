# Write-Ahead Log + Merge Architecture Design

## Overview and Goals

### Problem Statement
The current tracking workflow suffers from performance bottlenecks where every GPS point (1-2Hz) triggers:
1. Full serialization of ALL sketches
2. Complete write of the entire 'sketches' data structure
3. For Tauri: actual disk I/O on every point

### Solution: Write-Ahead Log (WAL) + Merge
Implement a two-tier storage system:
- **Write-Ahead Log**: Fast, append-only storage for frequent point additions
- **Main Data**: Infrequently updated canonical sketch data
- **Background Merge**: Periodically merge log entries into main data

### Design Goals
1. **Performance**: Reduce serialization/write frequency by 90%
2. **Data Integrity**: Guarantee no data loss even during crashes
3. **Backward Compatibility**: Maintain existing data structure and APIs
4. **Transparency**: No user-visible changes during normal operation
5. **Recoverability**: Support crash recovery and manual repair

## Data Structures

### 1. Log Entry Structure
```typescript
interface RouteLogEntry {
  /** Unique ID for this log entry */
  id: string;
  /** Route ID this point belongs to */
  routeId: string;
  /** The geographic point data */
  point: GeographicPoint;
  /** Timestamp when point was recorded */
  timestamp: number;
  /** Sequence number for ordering */
  sequence: number;
  /** Merge status */
  merged: boolean;
  /** Distance increment (calculated during merge) */
  distanceIncrement?: number;
}

interface RouteLogMetadata {
  /** Route ID */
  routeId: string;
  /** Last merge timestamp */
  lastMergeTime: number;
  /** Number of unmerged entries */
  unmergedCount: number;
  /** Last sequence number */
  lastSequence: number;
  /** Total points added (including merged) */
  totalPoints: number;
  /** Checksum for integrity verification */
  checksum?: string;
}
```

### 2. Merge Batch Structure
```typescript
interface MergeBatch {
  /** Batch ID */
  id: string;
  /** Route ID */
  routeId: string;
  /** Start sequence number */
  startSequence: number;
  /** End sequence number */
  endSequence: number;
  /** Number of points merged */
  pointCount: number;
  /** Total distance added */
  distanceAdded: number;
  /** Merge timestamp */
  mergeTime: number;
  /** Status: pending, completed, failed */
  status: 'pending' | 'completed' | 'failed';
  /** Error message if failed */
  error?: string;
}
```

## Storage Schema

### Current Schema (Legacy)
```
'sketches' → Array<GeographicSketchType>
```

### New Schema (WAL + Merge)
```
// Main data (infrequently updated)
'sketches' → Array<GeographicSketchType>

// Write-Ahead Log (frequently updated)
'route:{routeId}:log' → Array<RouteLogEntry>          // Append-only log
'route:{routeId}:metadata' → RouteLogMetadata        // Route-specific metadata
'route:{routeId}:batches' → Array<MergeBatch>        // Merge history

// Global state
'wal:activeRoutes' → Set<string>                     // Routes with pending logs
'wal:lastMergeTime' → number                         // Last global merge time
'wal:statistics' → {                                 // Performance metrics
  writesPerSecond: number;
  averageLogSize: number;
  mergeDuration: number;
}
```

## Write Path

### 1. Point Addition Flow
```
GPS Update (1-2Hz)
    ↓
addPointToRoute(routeId, point)
    ↓
[Fast Path] Append to route:{routeId}:log
    ↓
Update route:{routeId}:metadata (increment counters)
    ↓
Mark route in wal:activeRoutes
    ↓
Schedule merge (debounced, every 30s or 100 points)
    ↓
Return success (async)
```

### 2. Detailed Write Implementation
```typescript
class WriteAheadLogManager {
  private writeBuffer = new Map<string, RouteLogEntry[]>();
  private isMerging = false;
  
  async appendPoint(routeId: string, point: GeographicPoint): Promise<void> {
    // 1. Create log entry
    const entry: RouteLogEntry = {
      id: crypto.randomUUID(),
      routeId,
      point,
      timestamp: Date.now(),
      sequence: await this.getNextSequence(routeId),
      merged: false
    };
    
    // 2. Add to in-memory buffer (for batching)
    if (!this.writeBuffer.has(routeId)) {
      this.writeBuffer.set(routeId, []);
    }
    this.writeBuffer.get(routeId)!.push(entry);
    
    // 3. Schedule flush if buffer reaches threshold
    if (this.writeBuffer.get(routeId)!.length >= 10) {
      await this.flushBuffer(routeId);
    }
    
    // 4. Schedule merge if needed
    this.scheduleMerge(routeId);
  }
  
  private async flushBuffer(routeId: string): Promise<void> {
    const entries = this.writeBuffer.get(routeId) || [];
    if (entries.length === 0) return;
    
    // Append to persistent log
    const currentLog = await storageGet<RouteLogEntry[]>(`route:${routeId}:log`) || [];
    const newLog = [...currentLog, ...entries];
    await storageSet(`route:${routeId}:log`, newLog);
    
    // Update metadata
    const metadata = await this.getOrCreateMetadata(routeId);
    metadata.unmergedCount += entries.length;
    metadata.totalPoints += entries.length;
    metadata.lastSequence = entries[entries.length - 1].sequence;
    await storageSet(`route:${routeId}:metadata`, metadata);
    
    // Clear buffer
    this.writeBuffer.delete(routeId);
    
    // Mark route as active
    await this.markRouteActive(routeId);
  }
}
```

## Read Path

### 1. Route Data Retrieval
```
getRouteById(routeId)
    ↓
Load from 'sketches' (main data)
    ↓
Load from 'route:{routeId}:log' (unmerged points)
    ↓
Combine: mainPoints + logPoints (sorted by timestamp/sequence)
    ↓
Calculate total distance (mainDistance + incremental from log)
    ↓
Return combined route
```

### 2. Combined Read Implementation
```typescript
class CombinedRouteReader {
  async getRoute(routeId: string): Promise<GeographicRouteItemType | null> {
    // 1. Get main route data
    const mainRoute = await this.getMainRoute(routeId);
    if (!mainRoute) return null;
    
    // 2. Get unmerged log entries
    const logEntries = await this.getUnmergedLogEntries(routeId);
    if (logEntries.length === 0) return mainRoute;
    
    // 3. Combine points
    const combinedPoints = [
      ...mainRoute.points,
      ...logEntries.map(entry => entry.point)
    ];
    
    // 4. Calculate combined distance
    const combinedDistance = await this.calculateCombinedDistance(
      mainRoute.meta.distance || 0,
      logEntries
    );
    
    // 5. Return combined route
    return {
      ...mainRoute,
      points: combinedPoints,
      meta: {
        ...mainRoute.meta,
        distance: combinedDistance,
        // Use latest modification time from log
        modification_timestamp: Math.max(
          mainRoute.meta.modification_timestamp,
          logEntries[logEntries.length - 1]?.timestamp || 0
        )
      }
    };
  }
  
  private async calculateCombinedDistance(
    baseDistance: number,
    logEntries: RouteLogEntry[]
  ): Promise<number> {
    if (logEntries.length === 0) return baseDistance;
    
    // Calculate incremental distance from log entries
    // This could be pre-calculated during log append or during merge
    let incrementalDistance = 0;
    
    // Simple haversine between consecutive points in log
    for (let i = 1; i < logEntries.length; i++) {
      const p1 = logEntries[i-1].point;
      const p2 = logEntries[i].point;
      incrementalDistance += this.haversineDistance(p1, p2);
    }
    
    // Also add distance from last main point to first log point
    if (logEntries.length > 0) {
      // We'd need the last main point for this calculation
      // For simplicity, we can calculate during merge and store in log entry
    }
    
    return baseDistance + incrementalDistance;
  }
}
```

## Merge Process

### 1. Merge Trigger Conditions
Merge is triggered when ANY of these conditions are met:
- **Time-based**: 30 seconds since last merge
- **Size-based**: 100 unmerged points for a route
- **Route Stop**: Recording stops
- **App Background**: App goes to background
- **Manual**: User initiates save

### 2. Merge Algorithm
```
mergeRoute(routeId)
    ↓
Load main route from 'sketches'
    ↓
Load unmerged entries from 'route:{routeId}:log'
    ↓
Create merge batch record (pending)
    ↓
[Transaction Start]
    ↓
Append points to main route.points
    ↓
Recalculate total distance (incremental update)
    ↓
Update route metadata (modification timestamp)
    ↓
Mark log entries as merged
    ↓
Update route:{routeId}:metadata
    ↓
Save updated 'sketches'
    ↓
[Transaction End]
    ↓
Update merge batch (completed)
    ↓
Cleanup: remove merged entries (optional)
```

### 3. Merge Implementation
```typescript
class MergeProcessor {
  private mergeQueue = new PriorityQueue<MergeJob>();
  private isProcessing = false;
  
  async scheduleMerge(routeId: string, priority: 'low' | 'normal' | 'high' = 'normal'): Promise<void> {
    const job: MergeJob = {
      routeId,
      priority,
      scheduledTime: Date.now(),
      attempts: 0
    };
    
    this.mergeQueue.enqueue(job, this.getPriorityScore(priority));
    this.processQueue();
  }
  
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.mergeQueue.isEmpty()) return;
    
    this.isProcessing = true;
    
    try {
      while (!this.mergeQueue.isEmpty()) {
        const job = this.mergeQueue.dequeue()!;
        
        try {
          await this.mergeRoute(job.routeId);
          job.attempts = 0; // Reset attempts on success
        } catch (error) {
          console.error(`Merge failed for route ${job.routeId}:`, error);
          job.attempts++;
          
          // Retry with exponential backoff
          if (job.attempts < 3) {
            job.scheduledTime = Date.now() + (1000 * Math.pow(2, job.attempts));
            this.mergeQueue.enqueue(job, this.getPriorityScore(job.priority));
          } else {
            // Mark as failed, will need manual intervention
            await this.recordMergeFailure(job.routeId, error);
          }
        }
      }
    } finally {
      this.isProcessing = false;
    }
  }
  
  private async mergeRoute(routeId: string): Promise<void> {
    // 1. Create merge batch record
    const batchId = crypto.randomUUID();
    const batch: MergeBatch = {
      id: batchId,
      routeId,
      startSequence: 0,
      endSequence: 0,
      pointCount: 0,
      distanceAdded: 0,
      mergeTime: Date.now(),
      status: 'pending'
    };
    
    // 2. Load data
    const [mainSketches, logEntries, metadata] = await Promise.all([
      storageGet<GeographicSketchType[]>('sketches'),
      this.getUnmergedLogEntries(routeId),
      storageGet<RouteLogMetadata>(`route:${routeId}:metadata`)
    ]);
    
    if (!mainSketches || !metadata) {
      throw new Error(`Missing data for route ${routeId}`);
    }
    
    if (logEntries.length === 0) {
      // Nothing to merge
      batch.status = 'completed';
      await storageSet(`route:${routeId}:batches:${batchId}`, batch);
      return;
    }
    
    // 3. Find the route in sketches
    const sketchIndex = mainSketches.findIndex(sketch => 
      sketch.routes.routes.some(route => route.id === routeId)
    );
    
    if (sketchIndex === -1) {
      throw new Error(`Route ${routeId} not found in sketches`);
    }
    
    const routeIndex = mainSketches[sketchIndex].routes.routes.findIndex(
      route => route.id === routeId
    );
    
    // 4. Prepare merge
    const route = mainSketches[sketchIndex].routes.routes[routeIndex];
    const lastMainPoint = route.points[route.points.length - 1];
    
    // Calculate distance increments
    let totalDistanceAdded = 0;
    const pointsToAdd: GeographicPoint[] = [];
    
    for (let i = 0; i < logEntries.length; i++) {
      const entry = logEntries[i];
      const prevPoint = i === 0 ? lastMainPoint : logEntries[i-1].point;
      
      const distance = this.haversineDistance(prevPoint, entry.point);
      totalDistanceAdded += distance;
      
      // Store distance increment in log entry for reference
      entry.distanceIncrement = distance;
      pointsToAdd.push(entry.point);
    }
    
    // 5. Apply merge
    route.points.push(...pointsToAdd);
    route.meta.distance = (route.meta.distance || 0) + totalDistanceAdded;
    route.meta.modification_timestamp = Date.now();
    
    // Mark entries as merged
    logEntries.forEach(entry => entry.merged = true);
    
    // 6. Update batch info
    batch.startSequence = logEntries[0].sequence;
    batch.endSequence = logEntries[logEntries.length - 1].sequence;
    batch.pointCount = logEntries.length;
    batch.distanceAdded = totalDistanceAdded;
    
    // 7. Save everything
    await this.saveMergeTransaction(
      mainSketches,
      routeId,
      logEntries,
      metadata,
      batch
    );
    
    // 8. Cleanup old merged entries (optional)
    await this.cleanupMergedEntries(routeId);
  }
  
  private async saveMergeTransaction(
    sketches: GeographicSketchType[],
    routeId: string,
    logEntries: RouteLogEntry[],
    metadata: RouteLogMetadata,
    batch: MergeBatch
  ): Promise<void> {
    // This should be atomic, but current storage doesn't support transactions
    // Implement with rollback capability
    
    const backup = {
      sketches: cloneDeep(sketches),
      logEntries: cloneDeep(logEntries),
      metadata: cloneDeep(metadata)
    };
    
    try {
      // Update metadata
      metadata.unmergedCount -= logEntries.length;
      metadata.lastMergeTime = Date.now();
      
      // Save everything
      await Promise.all([
        storageSet('sketches', sketches),
        storageSet(`route:${routeId}:log`, logEntries),
        storageSet(`route:${routeId}:metadata`, metadata),
        storageSet(`route:${routeId}:batches:${batch.id}`, batch)
      ]);
      
      batch.status = 'completed';
      await storageSet(`route:${routeId}:batches:${batch.id}`, batch);
      
    } catch (error) {
      // Rollback
      await Promise.all([
        storageSet('sketches', backup.sketches),
        storageSet(`route:${routeId}:log`, backup.logEntries),
        storageSet(`route:${routeId}:metadata`, backup.metadata)
      ]);
      
      batch.status = 'failed';
      batch.error = error instanceof Error ? error.message : 'Unknown error';
      await storageSet(`route:${routeId}:batches:${batch.id}`, batch);
      
      throw error;
    }
  }
}
```

## Crash Recovery

### 1. Recovery Scenarios

#### Scenario A: Crash during log append
- **Detection**: Incomplete write to log
- **Recovery**: On startup, validate log entries against metadata counts
- **Action**: Recalculate counts, remove incomplete entries

#### Scenario B: Crash during merge
- **Detection**: Merge batch in 'pending' state
- **Recovery**: Check if main data was updated
- **Action**: Complete merge or rollback based on consistency checks

#### Scenario C: Data corruption
- **Detection**: Checksum mismatch in metadata
- **Recovery**: Use backup or rebuild from log

### 2. Recovery Implementation
```typescript
class CrashRecoveryManager {
  async recover(): Promise<void> {
    // 1. Check for pending merges
    const pendingBatches = await this.findPendingBatches();
    
    for (const batch of pendingBatches) {
      await this.recoverMerge(batch.routeId, batch.id);
    }
    
    // 2. Validate all active routes
    const activeRoutes = await storageGet<Set<string>>('wal:activeRoutes') || new Set();
    
    for (const routeId of activeRoutes) {
      await this.validateRouteLog(routeId);
    }
    
    // 3. Rebuild statistics
    await this.rebuildStatistics();
  }
  
  private async validateRouteLog(routeId: string): Promise<void> {
    const [logEntries, metadata] = await Promise.all([
      storageGet<RouteLogEntry[]>(`route:${routeId}:log`),
      storageGet<RouteLogMetadata>(`route:${routeId}:metadata`)
    ]);
    
    if (!logEntries || !metadata) {
      // Corrupted, try to rebuild
      await this.rebuildRouteLog(routeId);
      return;
    }
    
    // Validate counts
    const unmergedCount = logEntries.filter(entry => !entry.merged).length;
    
    if (unmergedCount !== metadata.unmergedCount) {
      console.warn(`Count mismatch for route ${routeId}: ` +
                   `expected ${metadata.unmergedCount}, found ${unmergedCount}`);
      
      // Fix metadata
      metadata.unmergedCount = unmergedCount;
      await storageSet(`route:${routeId}:metadata`, metadata);
    }
    
    // Validate sequence continuity
    const mergedEntries = logEntries.filter(entry => entry.merged);
    const unmergedEntries = logEntries.filter(entry => !entry.merged);
    
    // Check for gaps in sequence
    this.validateSequenceContinuity([...mergedEntries, ...unmergedEntries]);
  }
}
```

## Integration with Existing Code

### 1. Modified SketchStore Methods
```typescript
// Original
async function addPointToRoute(id: string, point: GeographicPoint): Promise<void> {
  // ... find route, add point, calculate distance
  await storageSet('sketches', sketches.value.map(s => s.toStorage()));
  await storageSave();
}

// New with WAL
async function addPointToRoute(id: string, point: GeographicPoint): Promise<void> {
  // Fast path: append to log
  await walManager.appendPoint(id, point);
  
  // Update in-memory representation for UI
  if (currentSketch.value) {
    const route = currentSketch.value.routes.routes.find(r => r.id === id);
    if (route) {
      route.points.push(point);
      route.meta.modification_timestamp = Date.now();
      
      // Async distance calculation
      this.scheduleDistanceRecalculation(id);
    }
  }
}
```

### 2. Route Retrieval with Log Integration
```typescript
// Original
function getRouteById(id: string) {
  if (!currentSketch.value) return null;
  return currentSketch.value.routes.routes.find(r => r.id === id) || null;
}

// New with WAL
async function getRouteById(id: string): Promise<GeographicRouteItemType | null> {
  // Get from in-memory cache (which includes unmerged points)
  const cached = this.routeCache.get(id);
  if (cached) return cached;
  
  // Load and combine
  const combinedRoute = await combinedRouteReader.getRoute(id);
  if (combinedRoute) {
    this.routeCache.set(id, combinedRoute);
  }
  
  return combinedRoute;
}
```

### 3. Migration from Legacy
```typescript
class MigrationService {
  async migrateToWAL(): Promise<void> {
    // 1. Backup current data
    const backup = await storageGet('sketches');
    await storageSet('sketches:backup:pre-wal', backup);
    
    // 2. Initialize WAL structures
    const sketches = await storageGet<GeographicSketchType[]>('sketches');
    if (!sketches) return;
    
    for (const sketch of sketches) {
      for (const route of sketch.routes.routes) {
        // Create log metadata for existing routes
        const metadata: RouteLogMetadata = {
          routeId: route.id,
          lastMergeTime: Date.now(),
          unmergedCount: 0,
          lastSequence: 0,
          totalPoints: route.points.length
        };
        
        await storageSet(`route:${route.id}:metadata`, metadata);
      }
    }
    
    // 3. Set migration flag
    await storageSet('wal:initialized', true);
    await storageSet('wal:version', 1);
  }
}
```

## Performance Expectations

### Before WAL (Current)
- **Serialization**: Full sketch tree on every point (1-2Hz)
- **Storage Writes**: 1-2 writes per second
- **Disk I/O (Tauri)**: File write on every point
- **UI Impact**: Possible jank during serialization

### After WAL
- **Serialization**: Only log entry (tiny) on every point
- **Storage Writes**: Append to array (fast)
- **Disk I/O (Tauri)**: Only during merge (every 30s+)
- **UI Impact**: Minimal, log append is non-blocking

### Expected Improvements
| Metric | Improvement | Reason |
|--------|-------------|---------|
| Serialization time | 95% reduction | Tiny log entries vs full sketches |
| Storage writes | 90% reduction | Merge every 30s vs every point |
| Disk I/O (Tauri) | 95% reduction | Batched file writes |
| Memory usage | 10% increase | Log buffers and metadata |
| Crash safety | Improved | Write-ahead log provides recovery |

## Implementation Plan

### Phase 1: Foundation (Week 1-2)
1. Define TypeScript interfaces for log structures
2. Create `WriteAheadLogManager` core class
3. Implement log append and metadata update
4. Add basic merge scheduling

### Phase 2: Integration (Week 3-4)
1. Modify `SketchStore.addPointToRoute` to use WAL
2. Create `CombinedRouteReader` for transparent reads
3. Update UI components to use combined reads
4. Implement migration from legacy format

### Phase 3: Merge Engine (Week 5-6)
1. Implement `MergeProcessor` with transaction support
2. Add crash recovery mechanisms
3. Implement cleanup of merged entries
4. Add performance monitoring

### Phase 4: Optimization (Week 7-8)
1. Add compression for log entries
2. Implement smart merge scheduling
3. Add statistics and monitoring UI
4. Performance tuning and stress testing

### Phase 5: Rollout (Week 9-10)
1. Feature flag implementation
2. A/B testing with beta users
3. Gradual rollout (10% → 50% → 100%)
4. Monitoring and bug fixes

## Monitoring and Metrics

### Key Metrics to Track
```typescript
interface WALMetrics {
  // Performance
  appendLatency: number[]; // ms
  mergeDuration: number[]; // ms
  logSizePerRoute: Map<string, number>;
  
  // Reliability
  failedAppends: number;
  failedMerges: number;
  recoveryEvents: number;
  
  // Efficiency
  mergeFrequency: number; // merges per hour
  compressionRatio: number; // log size vs merged size
  memoryUsage: number; // MB
}
```

### Alerting Thresholds
- **Critical**: Merge failure rate > 5%
- **Warning**: Append latency > 100ms
- **Warning**: Log size > 10,000 entries per route
- **Critical**: Recovery events > 3 per day

## Rollback Plan

### Conditions for Rollback
1. Data corruption rate > 1%
2. Performance regression > 20%
3. User-reported issues > 5%

### Rollback Procedure
1. Disable WAL via feature flag
2. Force merge all pending logs
3. Revert to legacy write path
4. Notify users of maintenance

## Conclusion

The Write-Ahead Log + Merge architecture provides a balanced solution that:
- **Significantly improves performance** by decoupling GPS updates from heavy serialization
- **Maintains data integrity** through transactional merges and crash recovery
- **Preserves backward compatibility** by keeping the original data structure
- **Enables future optimizations** like compression and smart merging

This design leverages the append-only nature of route points to create a fast write path while maintaining the simplicity of the existing monolithic data model through periodic merges.