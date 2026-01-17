# Atomic Route Updates - Detailed Investigation

## Current Data Architecture Analysis

### Storage Hierarchy
```
Storage Key: 'sketches'
  └── Array<GeographicSketchType>
      └── GeographicSketchType
          ├── meta: GeographicSketchMetaType
          ├── routes: GeographicRouteType
          │   ├── meta: GeographicGeneralMetaType
          │   └── routes: Array<GeographicRouteItemType>
          │       └── GeographicRouteItemType
          │           ├── id: string
          │           ├── meta: GeographicGeneralMetaType & { record_timespan?, distance? }
          │           ├── properties: GeographicRouteItemProperties
          │           └── points: Array<GeographicPoint>  // ← This is what changes frequently
          └── drafts: GeographicDraftType
```

### Current Update Flow
1. GPS update (every 1-2 seconds)
2. `addPointToRoute(routeId, point)` called
3. Find route in current sketch's routes array
4. Append point to `route.points`
5. Update route metadata (modification timestamp, distance)
6. **Serialize ALL sketches**: `sketches.value.map(s => s.toStorage())`
7. **Write to storage**: `storageSet('sketches', serializedData)`
8. **Flush to disk**: `storageSave()` (Tauri only)

### Performance Bottleneck
The entire sketch collection (potentially MBs of data) is serialized and written for each GPS point addition (~500ms-2s intervals).

## Atomic Route Update Approaches

### Approach 1: Granular Key-Value Storage

#### Concept
Store each route as a separate key-value pair instead of nesting them inside sketches.

#### Proposed Key Structure
```
sketches:index → Array<{id: string, name: string}>  // Sketch metadata index
sketch:{id}:meta → GeographicSketchMetaType
sketch:{id}:routes → Array<string>  // List of route IDs in this sketch
route:{id} → GeographicRouteItemType
sketch:{id}:drafts → Array<string>  // List of draft IDs in this sketch  
draft:{id} → GeographicDraftItemType
```

#### Advantages
- **True atomic updates**: Updating a route only touches `route:{id}`
- **Independent loading**: Can load routes on-demand
- **Better cache locality**: Frequently updated routes separate from static sketch metadata
- **Parallel operations**: Multiple routes can be updated concurrently

#### Disadvantages
- **Breaking change**: Requires complete data migration
- **Increased complexity**: Need to maintain relationships/indices
- **Transaction coordination**: Multiple keys need to be updated atomically for some operations
- **Backward compatibility**: Existing code expects monolithic sketch structure

#### Implementation Complexity: HIGH
Would require rewriting:
- `CartoSketch` class (remove routes/drafts, store IDs only)
- `SketchStore` (manage distributed data)
- Storage providers (add transaction support)
- Migration service (convert existing data)

### Approach 2: Write-Ahead Log + Merge

#### Concept
Maintain current monolithic structure but use a write-ahead log for frequent updates, merging periodically.

#### Proposed Structure
```
sketches → Array<GeographicSketchType>  // Main data (infrequently updated)
route:{id}:updates → Array<{timestamp: number, point: GeographicPoint}>  // Append-only log
route:{id}:metadata → {lastMergeTime: number, pointCount: number}
```

#### Update Flow
1. On GPS update: Append point to `route:{id}:updates` log (fast append)
2. Every N points or T seconds: Merge log into main `sketches` data
3. Clear log after successful merge

#### Advantages
- **Fast writes**: Appending to log is O(1)
- **Maintains current architecture**: Minimal changes to data model
- **Debounced heavy operations**: Merging happens less frequently
- **Crash recovery**: Log can be replayed if merge fails

#### Disadvantages
- **Data duplication**: Points exist in both log and main data
- **Merge complexity**: Need to handle concurrent reads/writes during merge
- **Eventual consistency**: Main data lags behind real-time
- **Storage overhead**: Log adds extra storage

#### Implementation Complexity: MEDIUM
Would require:
- Log management system
- Background merge process
- Conflict resolution
- Cleanup logic

### Approach 3: Differential Serialization

#### Concept
Track exactly which parts of the data changed and only serialize/write those parts.

#### Proposed Structure
Keep current monolithic structure but add:
- Dirty tracking at multiple levels (sketch, route, draft)
- Smart serialization that only processes dirty branches
- Still writes to same 'sketches' key but with optimized serialization

#### Implementation
```typescript
class DirtyTracker {
  private dirtySketches = new Set<string>();
  private dirtyRoutes = new Map<string, Set<string>>(); // sketchId → Set<routeId>
  
  markRouteDirty(sketchId: string, routeId: string): void {
    this.dirtySketches.add(sketchId);
    if (!this.dirtyRoutes.has(sketchId)) {
      this.dirtyRoutes.set(sketchId, new Set());
    }
    this.dirtyRoutes.get(sketchId)!.add(routeId);
  }
}

class OptimizedSerializer {
  serializeSketches(sketches: CartoSketch[], dirtyTracker: DirtyTracker): any[] {
    return sketches.map(sketch => {
      if (!dirtyTracker.isSketchDirty(sketch.id)) {
        // Return cached serialization
        return sketch.cachedSerialization;
      }
      // Only serialize dirty routes fully, reuse cached for others
      return this.serializeSketchWithDirtyRoutes(sketch, dirtyTracker);
    });
  }
}
```

#### Advantages
- **Backward compatible**: Same storage key and structure
- **Significant optimization**: Only serialize changed parts
- **Progressive**: Can be implemented incrementally
- **No data migration**: Works with existing data

#### Disadvantages
- **Not truly atomic**: Still writes entire 'sketches' key (but smaller payload)
- **Cache management**: Need to cache serialized versions
- **Memory overhead**: Tracking state and cached serializations
- **Complex serialization logic**

#### Implementation Complexity: MEDIUM-LOW

### Approach 4: Hybrid - Route-Specific Storage with Index

#### Concept
Store routes separately but maintain a master index for backward compatibility.

#### Proposed Structure
```
sketches → Array<GeographicSketchType>  // Legacy/compatibility view
sketch:{id} → {meta, routeIds, draftIds}  // New structure
route:{id} → GeographicRouteItemType
draft:{id} → GeographicDraftItemType
```

#### Dual Update Strategy
1. **Write to new structure**: Update `route:{id}` atomically
2. **Async update legacy**: Periodically rebuild `sketches` from distributed data
3. **Read from new structure**: New code uses distributed, old code uses legacy (during transition)

#### Advantages
- **Gradual migration**: Can run both systems in parallel
- **True atomic updates** for new code
- **Backward compatibility** during transition
- **Optimized for common case**: Route updates are atomic

#### Disadvantages
- **Data duplication**: During transition period
- **Consistency challenges**: Two representations of same data
- **Migration complexity**: Need to keep both in sync
- **Storage overhead**: Double storage during transition

#### Implementation Complexity: HIGH (but manageable)

## Technical Feasibility Analysis

### Storage Provider Capabilities

#### Tauri Store (`@tauri-apps/plugin-store`)
- **Key-value store** with file persistence
- **No partial updates**: `set()` replaces entire value
- **No transactions**: Individual operations are atomic but no multi-key transactions
- **Auto-save option**: Can defer saves but not helpful for atomicity

#### Web/IndexedDB (`web-storage-provider.ts`)
- **Key-value abstraction** on top of IndexedDB
- **Single object store**: All data in one store
- **No partial updates**: `put()` replaces entire object
- **Transactions**: Could be used for multi-key ops but current abstraction doesn't expose

### Constraints
1. **Current interface**: `IStorageProvider` only has `get(key)`, `set(key, value)` - no partial updates
2. **Data model**: Deeply nested structure not optimized for frequent leaf updates
3. **Existing dependencies**: Many components expect monolithic sketch structure

## Recommended Approach: Progressive Optimization

### Phase 1: Differential Serialization (Immediate)
Implement dirty tracking and optimized serialization. This provides 80-90% of the benefit with minimal risk.

**Estimated improvement**: Reduce serialization time by 80% for typical use case.

### Phase 2: Write Buffer + Debounced Save (Short-term)
Add point buffer and debounced storage writes. Decouples GPS updates from disk I/O.

**Estimated improvement**: Reduce disk writes by 90%.

### Phase 3: Route-Level Storage (Long-term)
Gradually migrate to distributed storage model:
1. Add new storage methods: `getRoute(routeId)`, `updateRoute(routeId, data)`
2. Dual-write during transition
3. Update components to use new API
4. Remove legacy storage

## Implementation Roadmap for Atomic Route Updates

### Step 1: Extend Storage Interface
```typescript
interface IAtomicStorageProvider extends IStorageProvider {
  // Route-specific operations
  getRoute(routeId: string): Promise<Result<GeographicRouteItemType | null, AppError>>;
  updateRoute(routeId: string, route: GeographicRouteItemType): Promise<Result<void, AppError>>;
  
  // Sketch operations (distributed)
  getSketch(sketchId: string): Promise<Result<{meta: GeographicSketchMetaType, routeIds: string[], draftIds: string[]} | null, AppError>>;
  
  // Transaction support
  beginTransaction(): Promise<Result<TransactionHandle, AppError>>;
  commitTransaction(handle: TransactionHandle): Promise<Result<void, AppError>>;
}
```

### Step 2: Implement for Each Provider
- **Tauri**: Use multiple keys in same store
- **Web**: Use multiple IndexedDB records in same object store
- Add transaction emulation if not natively supported

### Step 3: Create Migration Layer
```typescript
class StorageMigrationLayer {
  constructor(
    private legacyStorage: IStorageProvider,
    private atomicStorage: IAtomicStorageProvider,
    private mode: 'legacy' | 'atomic' | 'dual'
  ) {}
  
  // Routes all operations based on mode
  async addPointToRoute(routeId: string, point: GeographicPoint): Promise<void> {
    if (this.mode === 'legacy') {
      // Use old monolithic approach
    } else if (this.mode === 'atomic') {
      // Use new atomic approach
    } else {
      // Dual-write to both
    }
  }
}
```

### Step 4: Performance Monitoring
Add metrics to measure:
- Serialization time per update
- Storage write frequency and size
- Memory usage of buffers
- UI responsiveness during tracking

## Risk Assessment

### High Risk
- **Data loss during migration**: Mitigation: Comprehensive backup, incremental migration
- **Performance regression**: Mitigation: A/B testing, feature flags, rollback capability
- **Complexity bugs**: Mitigation: Extensive unit tests, gradual rollout

### Medium Risk  
- **Increased storage usage** (during dual-write phase): Mitigation: Time-bound transition, cleanup
- **API compatibility breaks**: Mitigation: Adapter layer, versioned APIs

### Low Risk
- **User-visible changes**: Should be transparent to users
- **Battery impact**: Should improve due to reduced I/O

## Conclusion

Atomic route updates are technically feasible but require careful implementation. The **recommended approach** is:

1. **Start with differential serialization** for quick wins (80% benefit)
2. **Add write buffering** to decouple GPS from I/O  
3. **Gradually migrate to distributed storage** over multiple releases
4. **Maintain backward compatibility** throughout transition

This balanced approach minimizes risk while delivering progressive performance improvements. The end state would support true atomic route updates where adding a point only touches that specific route's data, eliminating the serialization bottleneck entirely.