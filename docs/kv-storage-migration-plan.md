# KV Storage Architecture Migration Plan

## Overview

This document outlines the migration from the current nested JSON blob storage with complex Write-Ahead Log (WAL) to a simplified Key-Value (KV) architecture using raw IndexedDB.

**Motivation:**
- Eliminate the time jump bug in recording status display
- Remove ~1,400 lines of unnecessary WAL complexity
- Improve performance with O(1) point appends instead of O(n) read-modify-write
- Simplify mental model - each entity is independently accessible

**Breaking Change:** Yes - requires data migration on app startup

---

## Architecture

### Key Schema

```
# Routes (primary entities)
route:{routeId}:meta              → RouteMeta object
route:{routeId}:points            → GeographicPoint[] (raw points array)
route:{routeId}:pointCount        → number (cached for quick stats)
route:{routeId}:lastUpdate        → timestamp

# Sketch index (lightweight references)
sketch:{sketchId}:meta            → SketchMeta object
sketch:{sketchId}:routeIds        → string[] (array of route IDs)

# Global indexes (for listing)
index:routes                      → string[] (all route IDs)
index:sketches                   → string[] (all sketch IDs)
index:routeToSketch:{routeId}   → sketchId (reverse lookup)

# Recording session (ephemeral)
session:active                    → { routeId, startTime, previousTimespan } | null
```

### TypeScript Interfaces

```typescript
interface RouteMeta {
  id: string;
  name: string;
  sketchId: string;
  createdAt: number;
  distance: number;      // meters
  timespan: number;      // milliseconds
  lastUpdate: number;    // timestamp
}

interface SketchMeta {
  id: string;
  name: string;
  createdAt: number;
  routeIds: string[];    // Reference to routes, not embedded
}

interface RecordingSession {
  routeId: string;
  startTime: number;
  previousTimespan: number;
}
```

---

## Implementation Components

### 1. Core KV Storage Layer

**File:** `src/libs/kv-storage/indexeddb-kv.ts`

```typescript
export class IndexedDBKV {
  private db: IDBDatabase | null = null;
  private readonly DB_NAME = 'trackmaker';
  private readonly DB_VERSION = 1;
  private readonly STORE_NAME = 'kv';

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          db.createObjectStore(this.STORE_NAME);
        }
      };
    });
  }

  async get<T>(key: string): Promise<T | null> {
    if (!this.db) throw new Error('KV not initialized');
    
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction([this.STORE_NAME], 'readonly');
      const store = tx.objectStore(this.STORE_NAME);
      const request = store.get(key);
      
      request.onsuccess = () => resolve(request.result ?? null);
      request.onerror = () => reject(request.error);
    });
  }

  async set<T>(key: string, value: T): Promise<void> {
    if (!this.db) throw new Error('KV not initialized');
    
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction([this.STORE_NAME], 'readwrite');
      const store = tx.objectStore(this.STORE_NAME);
      const request = store.put(value, key);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async delete(key: string): Promise<void> {
    if (!this.db) throw new Error('KV not initialized');
    
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction([this.STORE_NAME], 'readwrite');
      const store = tx.objectStore(this.STORE_NAME);
      const request = store.delete(key);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // Critical: Prefix scanning using IndexedDB cursors
  async scanKeys(prefix: string): Promise<string[]> {
    if (!this.db) throw new Error('KV not initialized');
    
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction([this.STORE_NAME], 'readonly');
      const store = tx.objectStore(this.STORE_NAME);
      
      // Use \uffff as upper bound (highest possible Unicode char)
      const range = IDBKeyRange.bound(prefix, prefix + '\uffff');
      const request = store.openCursor(range);
      
      const keys: string[] = [];
      
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          keys.push(cursor.key as string);
          cursor.continue();
        } else {
          resolve(keys);
        }
      };
      
      request.onerror = () => reject(request.error);
    });
  }

  // Atomic batch write
  async batchSet(entries: { key: string; value: unknown }[]): Promise<void> {
    if (!this.db) throw new Error('KV not initialized');
    
    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction([this.STORE_NAME], 'readwrite');
      const store = tx.objectStore(this.STORE_NAME);
      
      for (const { key, value } of entries) {
        store.put(value, key);
      }
      
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }
}

export const kvStorage = new IndexedDBKV();
```

### 2. Route Storage API

**File:** `src/libs/kv-storage/route-storage.ts`

```typescript
import { kvStorage } from './indexeddb-kv';
import type { GeographicPoint } from '../geolocation/types';

export interface RouteMeta {
  id: string;
  name: string;
  sketchId: string;
  createdAt: number;
  distance: number;
  timespan: number;
  lastUpdate: number;
}

export class RouteStorage {
  async getRoute(routeId: string): Promise<{ meta: RouteMeta; points: GeographicPoint[] } | null> {
    const [meta, points] = await Promise.all([
      kvStorage.get<RouteMeta>(`route:${routeId}:meta`),
      kvStorage.get<GeographicPoint[]>(`route:${routeId}:points`)
    ]);
    
    if (!meta) return null;
    return { meta, points: points || [] };
  }

  async appendPoints(routeId: string, newPoints: GeographicPoint[]): Promise<void> {
    if (newPoints.length === 0) return;
    
    const [meta, existingPoints] = await Promise.all([
      kvStorage.get<RouteMeta>(`route:${routeId}:meta`),
      kvStorage.get<GeographicPoint[]>(`route:${routeId}:points`)
    ]);
    
    if (!meta) throw new Error(`Route ${routeId} not found`);
    
    const points = existingPoints || [];
    let distanceAdded = 0;
    let lastPoint = points.length > 0 ? points[points.length - 1] : null;
    
    for (const point of newPoints) {
      if (lastPoint) {
        distanceAdded += calculateHaversineDistance(lastPoint, point);
      }
      lastPoint = point;
    }
    
    // Atomic batch update
    await kvStorage.batchSet([
      { key: `route:${routeId}:points`, value: [...points, ...newPoints] },
      { key: `route:${routeId}:pointCount`, value: points.length + newPoints.length },
      { 
        key: `route:${routeId}:meta`, 
        value: {
          ...meta,
          distance: meta.distance + distanceAdded,
          lastUpdate: Date.now()
        }
      }
    ]);
  }

  async createRoute(sketchId: string, name: string): Promise<string> {
    const routeId = crypto.randomUUID();
    const now = Date.now();
    
    const meta: RouteMeta = {
      id: routeId,
      name,
      sketchId,
      createdAt: now,
      distance: 0,
      timespan: 0,
      lastUpdate: now
    };
    
    await kvStorage.batchSet([
      { key: `route:${routeId}:meta`, value: meta },
      { key: `route:${routeId}:points`, value: [] },
      { key: `route:${routeId}:pointCount`, value: 0 },
      { key: `route:${routeId}:lastUpdate`, value: now },
      { key: `index:routeToSketch:${routeId}`, value: sketchId }
    ]);
    
    // Update sketch's route list
    const sketchMeta = await kvStorage.get<SketchMeta>(`sketch:${sketchId}:meta`);
    if (sketchMeta) {
      await kvStorage.set(`sketch:${sketchId}:meta`, {
        ...sketchMeta,
        routeIds: [...sketchMeta.routeIds, routeId]
      });
    }
    
    // Add to global index
    const allRoutes = await kvStorage.get<string[]>('index:routes') || [];
    await kvStorage.set('index:routes', [...allRoutes, routeId]);
    
    return routeId;
  }

  async updateTimespan(routeId: string, timespanMs: number): Promise<void> {
    const meta = await kvStorage.get<RouteMeta>(`route:${routeId}:meta`);
    if (!meta) return;
    
    await kvStorage.set(`route:${routeId}:meta`, {
      ...meta,
      timespan: timespanMs,
      lastUpdate: Date.now()
    });
  }
}

export const routeStorage = new RouteStorage();
```

### 3. Recording Session (The Bug Fix)

**File:** `src/libs/kv-storage/recording-session.ts`

```typescript
import { kvStorage } from './indexeddb-kv';
import { routeStorage } from './route-storage';

interface SessionData {
  routeId: string;
  startTime: number;
  previousTimespan: number;
}

export class RecordingSession {
  private routeId: string | null = null;
  private sessionStartTime: number = 0;
  private previousTimespan: number = 0;
  private isRecording: boolean = false;

  async start(routeId: string): Promise<void> {
    const route = await routeStorage.getRoute(routeId);
    if (!route) throw new Error(`Route ${routeId} not found`);
    
    this.routeId = routeId;
    this.previousTimespan = route.meta.timespan || 0;
    this.sessionStartTime = Date.now();
    this.isRecording = true;
    
    // Persist for crash recovery
    await kvStorage.set('session:active', {
      routeId,
      startTime: this.sessionStartTime,
      previousTimespan: this.previousTimespan
    });
  }

  /**
   * THE FIX: Pure arithmetic on in-memory values.
   * No storage reads, no caching, no race conditions.
   */
  getCurrentTimespan(): number {
    if (!this.isRecording) return this.previousTimespan;
    return this.previousTimespan + (Date.now() - this.sessionStartTime);
  }

  async stop(): Promise<number> {
    if (!this.isRecording || !this.routeId) {
      return this.previousTimespan;
    }
    
    const finalTimespan = this.getCurrentTimespan();
    this.isRecording = false;
    
    // Save final timespan to route
    await routeStorage.updateTimespan(this.routeId, finalTimespan);
    
    // Clear session marker
    await kvStorage.delete('session:active');
    
    return finalTimespan;
  }

  async recover(): Promise<boolean> {
    const session = await kvStorage.get<SessionData>('session:active');
    if (!session) return false;
    
    console.info('[RecordingSession] Recovering interrupted session');
    
    // Restore session state
    this.routeId = session.routeId;
    this.sessionStartTime = session.startTime;
    this.previousTimespan = session.previousTimespan;
    this.isRecording = true;
    
    return true;
  }

  isActive(): boolean {
    return this.isRecording;
  }

  getRouteId(): string | null {
    return this.routeId;
  }
}

export const recordingSession = new RecordingSession();
```

### 4. Data Migration

**File:** `src/libs/kv-storage/migration.ts`

```typescript
import { kvStorage } from './indexeddb-kv';
import type { CartoSketch } from '../cartosketch';
import { storageGet } from '../storage';

/**
 * Migrate from nested JSON blobs to KV storage.
 * Runs once on app startup.
 */
export async function migrateToKV(): Promise<boolean> {
  // Check if already migrated
  const migrated = await kvStorage.get<boolean>('kv:migrated');
  if (migrated) return false;
  
  console.info('[Migration] Starting JSON blob → KV migration');
  
  // Load old data format
  const oldSketches = await storageGet<ReturnType<CartoSketch['toStorage']>[]>('sketches');
  if (!oldSketches || oldSketches.length === 0) {
    console.info('[Migration] No existing data to migrate');
    await kvStorage.set('kv:migrated', true);
    return false;
  }
  
  const allRouteIds: string[] = [];
  const allSketchIds: string[] = [];
  
  for (const sketchData of oldSketches) {
    const sketch = CartoSketch.fromStorage(sketchData);
    allSketchIds.push(sketch.id);
    
    // Store sketch meta with route references
    await kvStorage.set(`sketch:${sketch.id}:meta`, {
      id: sketch.id,
      name: sketch.meta.name,
      createdAt: sketch.meta.creation_timestamp,
      routeIds: sketch.routes.routes.map(r => r.id)
    });
    
    // Migrate each route
    for (const route of sketch.routes.routes) {
      allRouteIds.push(route.id);
      
      const now = Date.now();
      await kvStorage.batchSet([
        { 
          key: `route:${route.id}:meta`, 
          value: {
            id: route.id,
            name: route.name,
            sketchId: sketch.id,
            createdAt: route.meta.creation_timestamp,
            distance: route.meta.distance || 0,
            timespan: route.meta.record_timespan || 0,
            lastUpdate: route.meta.modification_timestamp || now
          }
        },
        { key: `route:${route.id}:points`, value: route.points },
        { key: `route:${route.id}:pointCount`, value: route.points.length },
        { key: `route:${route.id}:lastUpdate`, value: route.meta.modification_timestamp || now },
        { key: `index:routeToSketch:${route.id}`, value: sketch.id }
      ]);
    }
  }
  
  // Create global indexes
  await kvStorage.set('index:routes', allRouteIds);
  await kvStorage.set('index:sketches', allSketchIds);
  
  // Mark migration complete
  await kvStorage.set('kv:migrated', true);
  
  console.info(`[Migration] Complete: ${allSketchIds.length} sketches, ${allRouteIds.length} routes`);
  
  return true;
}
```

---

## Integration Plan

### Phase 1: Create KV Infrastructure
1. Create `src/libs/kv-storage/indexeddb-kv.ts` - Core IndexedDB wrapper
2. Create `src/libs/kv-storage/migration.ts` - Data migration
3. Add migration call in `src/store/sketch-store.ts` init()

### Phase 2: Route Store Migration
1. Replace `src/libs/route-wal/` with `src/libs/kv-storage/`
2. Update `src/store/route-store.ts` to use new storage
3. Update recording logic to use `RecordingSession`

### Phase 3: Remove Old Code
1. Delete `src/libs/route-wal/` directory
2. Remove old WAL initialization from `sketch-store.ts`
3. Clean up references to old storage format

### Phase 4: Update Components
1. Update `src/views/TrackerView.vue` - Use new recording session
2. Update `src/components/TrackerView/StatusBar.vue` - Get timespan from session

---

## Testing Strategy

1. **Migration Testing**: Create test data in old format, verify migration
2. **Recording Test**: Start recording, verify time increments smoothly
3. **Crash Recovery**: Kill app during recording, verify recovery works
4. **Performance**: Benchmark point append vs old implementation

---

## Rollback Plan

If issues arise:
1. Keep old `storageGet('sketches')` data until migration confirmed
2. Add `kv:enabled` flag - can disable by setting to false
3. Migration is additive - old data remains untouched

---

## Expected Outcomes

- **Time jump bug**: Fixed (deterministic in-memory calculation)
- **Code reduction**: ~1,400 lines removed
- **Performance**: O(1) point append, faster listing
- **Maintainability**: Simple mental model, no WAL complexity
