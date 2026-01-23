# Route Write-Ahead Log (WAL) Test Suite

## Core Unit Tests

| File | Description | Tests |
|------|-------------|-------|
| **`types.test.ts`** | Schema validation and type checking | 20 tests |
| **`write-ahead-log-manager.test.ts`** | Core WAL manager, buffers, mutex, flushing | 23 tests |
| **`merge-processor.test.ts`** | Merge scheduling and processing | 9 tests |
| **`combined-route-reader.test.ts`** | Route data retrieval and caching | 8 tests |
| **`crash-recovery-manager.test.ts`** | Crash recovery and data restoration | 4 tests |
| **`index.test.ts`** | Module exports and constants | 12 tests |

## Extended Test Coverage

| File | Description | Coverage Focus |
|------|-------------|----------------|
| **`integration.test.ts`** | End-to-end data flow: append → flush → merge → read | Full pipeline validation |
| **`error-recovery.test.ts`** | Storage failures, corrupted data, emergency flush | Error handling & recovery |
| **`concurrency.test.ts`** | Race conditions, AsyncMutex, concurrent operations | Thread safety & locking |
| **`complex-methods.test.ts`** | Internal methods: `doFlush`, `scheduleMergeWithRetry`, etc. | Edge cases & internal logic |
| **`lifecycle.test.ts`** | Event handlers, shutdown, visibility changes | Lifecycle management |

## Test Categories

## 1. **Data Integrity & Validation**
- Schema validation with Zod
- Invalid input rejection
- Corrupted data recovery
- Type safety guarantees

## 2. **Concurrency & Thread Safety**
- AsyncMutex locking behavior
- Concurrent append operations
- Race condition prevention
- Buffer synchronization

## 3. **Error Recovery**
- Storage failure handling
- Corrupted log recovery
- Emergency flush to localStorage
- Metadata reconciliation

## 4. **Integration & End-to-End**
- Complete data flow validation
- Multiple route handling
- Crash recovery scenarios
- Merge processor integration

## 5. **Lifecycle Management**
- Beforeunload event handling
- Visibility change flushing
- Graceful shutdown
- Resource cleanup
