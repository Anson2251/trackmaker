# Account & Sharing Feature Implementation Plan

## Overview

The backend service is named **Cairn** — a stack of stones that marks the path for travelers, fitting for a service that stores and syncs routes between users.

This document outlines the implementation plan for adding account features (user authentication, route/sketch sharing, cloud sync) to Trackmaker. The implementation follows a two-stage sync approach: automatic sync with conflict detection first, then collaborative editing.

## Technology Stack

### Backend
- **Language**: Rust
- **Framework**: Axum (async, lightweight, Tauri-compatible)
- **Database**: PostgreSQL (robust, supports relationships)
- **Authentication**: JWT + OAuth2 (Google/GitHub)
- **Async Runtime**: Tokio

### Client
- **Framework**: Vue 3 + Pinia (existing)
- **UI Components**: Naive UI (existing)
- **Storage**: Extended platform abstraction layer

---

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    hashed_password TEXT, -- NULL if OAuth-only
    oauth_provider VARCHAR(20), -- 'google', 'github', or NULL
    oauth_id VARCHAR(100), -- Provider-specific ID
    avatar_url TEXT,
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_oauth ON users(oauth_provider, oauth_id);
```

### Sketches Table
```sql
CREATE TABLE sketches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    data JSONB NOT NULL, -- Full sketch data (routes, drafts)
    version INTEGER NOT NULL DEFAULT 1,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_synced_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_sketches_user ON sketches(user_id);
CREATE INDEX idx_sketches_public ON sketches(is_public) WHERE is_public = TRUE;
```

### Shares Table
```sql
CREATE TABLE shares (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sketch_id UUID NOT NULL REFERENCES sketches(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    access_level VARCHAR(20) NOT NULL DEFAULT 'view', -- 'view', 'edit', 'admin'
    share_token VARCHAR(64) UNIQUE, -- For public link sharing
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES users(id),
    
    UNIQUE(sketch_id, user_id, access_level)
);

CREATE INDEX idx_shares_token ON shares(share_token);
CREATE INDEX idx_shares_user ON shares(user_id);
```

### Sync Events Table (Stage 2)
```sql
CREATE TABLE sync_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sketch_id UUID NOT NULL REFERENCES sketches(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id),
    operation JSONB NOT NULL, -- OT operation format
    client_id UUID NOT NULL, -- Client instance identifier
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    parent_event_id UUID REFERENCES sync_events(id)
);

CREATE INDEX idx_sync_events_sketch ON sync_events(sketch_id);
CREATE INDEX idx_sync_events_client ON sync_events(client_id);
```

---

## API Endpoints

### Authentication
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/auth/register` | Register with email/password |
| POST | `/api/auth/login` | Login with email/password |
| POST | `/api/auth/logout` | Logout (invalidate token) |
| POST | `/api/auth/refresh` | Refresh access token |
| GET | `/api/auth/me` | Get current user profile |
| GET | `/api/auth/oauth/{provider}` | Initiate OAuth flow |
| GET | `/api/auth/oauth/{provider}/callback` | OAuth callback |

### Sketches (Protected)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/sketches` | List user's sketches |
| POST | `/api/sketches` | Create new sketch |
| GET | `/api/sketches/{id}` | Get sketch by ID |
| PUT | `/api/sketches/{id}` | Update sketch |
| DELETE | `/api/sketches/{id}` | Delete sketch |
| GET | `/api/sketches/{id}/version` | Get current version |

### Sync
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/sketches/{id}/push` | Push local changes |
| GET | `/api/sketches/{id}/pull` | Pull remote changes |
| GET | `/api/sketches/{id}/conflict` | Check for conflicts |
| POST | `/api/sketches/{id}/resolve` | Resolve conflict |

### Sharing
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/sketches/{id}/share` | Share with user |
| GET | `/api/sketches/{id}/shares` | List shares |
| DELETE | `/api/sketches/{id}/shares/{share_id}` | Revoke share |
| POST | `/api/sketches/{id}/public-link` | Create public link |
| GET | `/api/public/{token}` | Access public share |
| PUT | `/api/public/{token}` | Update via public link |

---

## Client Architecture

### New Stores

#### User Store (`user-store.ts`)
```typescript
interface UserState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

interface User {
    id: string;
    email: string;
    username: string;
    avatarUrl?: string;
    settings: UserSettings;
}
```

#### Sync Store (`sync-store.ts`)
```typescript
interface SyncState {
    status: 'idle' | 'syncing' | 'error' | 'offline' | 'conflict';
    lastSyncedAt: number | null;
    pendingOperations: PendingOperation[];
    conflicts: ConflictInfo[];
}

interface PendingOperation {
    sketchId: string;
    localVersion: number;
    serverVersion: number;
    timestamp: number;
}
```

#### Sharing Store (`sharing-store.ts`)
```typescript
interface SharingState {
    shares: ShareInfo[];
    publicLinks: PublicLink[];
}

interface ShareInfo {
    sketchId: string;
    userId: string;
    username: string;
    accessLevel: 'view' | 'edit' | 'admin';
}

interface PublicLink {
    sketchId: string;
    token: string;
    expiresAt?: number;
}
```

### UI Components

#### New Components
- `src/components/user-menu.vue` - User dropdown menu
- `src/components/auth-dialog.vue` - Login/register modal
- `src/components/profile-view.vue` - User profile page
- `src/components/share-dialog.vue` - Sketch sharing interface
- `src/components/sync-status.vue` - Sync indicator
- `src/components/conflict-resolver.vue` - Conflict resolution UI

#### Modified Components
- `src/AppLayout.vue` - Add user menu
- `src/views/SettingsView.vue` - Add Account section
- `src/views/SketchCentreView.vue` - Add share buttons
- `src/views/TrackerView.vue` - Add sync status

### Platform Layer Extensions

Extend `PlatformServicesConfig`:
```typescript
interface PlatformServicesConfig {
    sync?: {
        serverUrl?: string;
        autoSyncInterval?: number;
        conflictResolution?: 'local' | 'server' | 'manual';
    };
    auth?: {
        oauthClientId?: string;
        oauthRedirectUri?: string;
    };
}
```

Add `ISyncProvider` interface:
```typescript
interface ISyncProvider {
    init(): Promise<Result<void, AppError>>;
    authenticate(credentials: AuthCredentials): Promise<Result<AuthToken, AppError>>;
    sync(sketchId: string): Promise<Result<SyncResult, AppError>>;
    getStatus(): SyncStatus;
}
```

---

## Implementation Phases

### Phase 1: Foundation (2-3 weeks)

#### Backend
- [ ] Set up Rust project with Axum
- [ ] Implement database schema and migrations
- [ ] Create user registration/login endpoints
- [ ] Implement JWT authentication middleware
- [ ] Create sketch CRUD operations
- [ ] Implement basic sync (push/pull with version checking)

#### Client
- [ ] Create user store with auth state
- [ ] Create auth dialog component
- [ ] Add auth API client layer
- [ ] Integrate user menu in AppLayout
- [ ] Add Account section in Settings
- [ ] Implement basic sync store

**Deliverable**: Users can create accounts, login, and sync sketches to the cloud.

### Phase 2: Sharing & Collaboration (2-3 weeks)

#### Backend
- [ ] Implement share creation/revocation
- [ ] Add public link generation
- [ ] Implement permission checking middleware
- [ ] Add conflict detection logic
- [ ] Implement OAuth2 (Google/GitHub)

#### Client
- [ ] Create share dialog component
- [ ] Add share buttons to SketchCentreView
- [ ] Implement sharing store
- [ ] Add public link UI
- [ ] Create conflict resolver component
- [ ] Add OAuth login buttons

**Deliverable**: Users can share sketches with others and resolve sync conflicts.

### Phase 3: Advanced Sync (2-3 weeks)

#### Backend
- [ ] Implement WebSocket for real-time updates
- [ ] Create operational transformation engine
- [ ] Implement sync event logging
- [ ] Add presence indicators
- [ ] Optimize for concurrent editing

#### Client
- [ ] Implement real-time sync via WebSocket
- [ ] Add collaborative editing indicators
- [ ] Create presence UI (who's viewing/editing)
- [ ] Implement OT client-side
- [ ] Add performance optimizations

**Deliverable**: Real-time collaborative editing with operational transformation.

---

## Data Migration Strategy

### Existing Data
The existing `created_by` and `modified_by` fields in `GeographicGeneralMetaType` are currently set to `"anonymous"`. These will be migrated:

1. **Phase 1**: Add `user_id` UUID to existing data (nullable)
2. **Phase 2**: Update existing "anonymous" data handling for sharing
3. **Phase 3**: Add ownership tracking for collaborative editing

### Backward Compatibility
- All existing sketches remain accessible
- Users can opt-in to cloud sync
- Clear migration prompts for existing users
- Offline-first: local storage remains primary data source

---

## Security Considerations

### Authentication
- JWT tokens with short expiration (15 min) + refresh tokens
- Secure cookie storage for web, secure storage for Tauri
- Password hashing with bcrypt (cost factor 12)
- Rate limiting on auth endpoints (5 attempts/minute)

### Authorization
- All endpoints check ownership/permissions
- Share tokens are cryptographically random (64 chars)
- Public links have optional expiration
- CORS configuration for web deployment

### Data Protection
- HTTPS only in production
- Input validation using JSON Schema
- SQL injection prevention via prepared statements
- XSS protection via proper escaping

---

## Sync Strategy

### Stage 1: Automatic Sync (Last-Write-Wins)

```
1. Client has local changes at version N
2. Push changes to server with version N
3. Server checks if server version == N
   - If yes: Accept, increment to N+1
   - If no: Return CONFLICT status
4. On conflict: 
   - Fetch server version
   - Show conflict resolver UI
   - User chooses local or remote
   - Push resolved version
```

### Stage 2: Collaborative Editing (OT)

```
1. Client transforms operations via OT
2. Send transformed operation to server
3. Server applies and broadcasts to other clients
4. Clients transform and apply incoming operations
5. Automatic conflict resolution in real-time
```

---

## File Structure

```
/trackmaker
├── backend/
│   ├── src/
│   │   ├── main.rs
│   │   ├── config.rs
│   │   ├── db/
│   │   │   ├── mod.rs
│   │   │   ├── schema.rs
│   │   │   └── migrations/
│   │   ├── auth/
│   │   │   ├── mod.rs
│   │   │   ├── handlers.rs
│   │   │   ├── middleware.rs
│   │   │   └── oauth.rs
│   │   ├── sketches/
│   │   │   ├── mod.rs
│   │   │   ├── handlers.rs
│   │   │   └── sync.rs
│   │   ├── sharing/
│   │   │   ├── mod.rs
│   │   │   └── handlers.rs
│   │   └── ws/
│   │       ├── mod.rs
│   │       └── handler.rs
│   ├── Cargo.toml
│   └── .env.example
│
└── src/
    ├── libs/
    │   ├── platform/
    │   │   ├── providers/
    │   │   │   ├── tauri-sync-provider.ts (new)
    │   │   │   ├── web-sync-provider.ts (new)
    │   │   │   └── types.ts
    │   │   └── index.ts
    │   ├── sync/ (new)
    │   │   ├── index.ts
    │   │   ├── client.ts
    │   │   ├── ot.ts
    │   │   └── conflict-resolver.ts
    │   └── user/ (new)
    │       ├── index.ts
    │       ├── client.ts
    │       └── types.ts
    ├── store/
    │   ├── user-store.ts (new)
    │   ├── sync-store.ts (new)
    │   └── sharing-store.ts (new)
    ├── components/
    │   ├── user-menu.vue (new)
    │   ├── auth-dialog.vue (new)
    │   ├── profile-view.vue (new)
    │   ├── share-dialog.vue (new)
    │   ├── sync-status.vue (new)
    │   └── conflict-resolver.vue (new)
    ├── views/
    │   ├── ProfileView.vue (new)
    │   └── AuthCallbackView.vue (new)
    └── router/
        └── index.ts (updated)
```

---

## Environment Variables

### Backend (.env)
```env
# Server
DATABASE_URL=postgresql://user:pass@localhost:5432/trackmaker
JWT_SECRET=your-secret-key-here
JWT_EXPIRY_MINUTES=15
REFRESH_SECRET=your-refresh-secret
REFRESH_DAYS=7

# OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-secret

# Server
HOST=0.0.0.0
PORT=8080
RUST_LOG=info
```

### Client (.env)
```env
VITE_API_URL=http://localhost:8080
VITE_OAUTH_GOOGLE_CLIENT_ID=your-client-id
VITE_OAUTH_GITHUB_CLIENT_ID=your-client-id
```

---

## Testing Strategy

### Backend Tests
- Unit tests for auth logic, OT operations
- Integration tests for API endpoints
- E2E tests for sync flow

### Client Tests
- Store unit tests (Pinia testing utilities)
- Component tests (Vue Test Utils)
- E2E tests for auth flow
- Sync conflict resolution tests

---

## Deployment

### Self-Hosted Server
1. Build Rust binary: `cargo build --release`
2. Run migrations: `./trackmaker-server migrate`
3. Start server: `./trackmaker-server serve`
4. Configure reverse proxy (nginx/Caddy)
5. Set up SSL certificate

### Docker (Optional)
```dockerfile
FROM rust:1.75-alpine AS builder
WORKDIR /app
COPY . .
RUN cargo build --release

FROM alpine:latest
RUN adduser -D appuser
COPY --from=builder /app/target/release/trackmaker-server /usr/local/bin/
USER appuser
CMD ["trackmaker-server", "serve"]
```

---

## Timeline

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| Phase 1 | 2-3 weeks | Auth, basic sync, profile UI |
| Phase 2 | 2-3 weeks | Sharing, OAuth, conflict resolution |
| Phase 3 | 2-3 weeks | Real-time collaboration, OT |

**Total Estimated Time**: 6-9 weeks

---

## Future Considerations

- [ ] Team workspaces
- [ ] Sketch templates
- [ ] Activity history
- [ ] Comments on sketches
- [ ] Export formats (GPX, KML)
- [ ] Offline web support (Service Workers)
- [ ] Mobile app integration
