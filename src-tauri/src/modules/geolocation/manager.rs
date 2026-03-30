use super::providers::{get_location, GeolocationResult};
use super::types::{Coordinates, Position};
use std::sync::Arc;
use tokio::sync::Mutex;
use std::time::{SystemTime, UNIX_EPOCH};

/// Error types for geolocation manager operations
#[derive(Debug, Clone)]
pub enum GeolocationManagerError {
    NotInitialized,
    NoPositionAvailable,
    PermissionDenied,
    PositionUnavailable(String),
}

impl std::fmt::Display for GeolocationManagerError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            GeolocationManagerError::NotInitialized => {
                write!(f, "Geolocation manager not initialized")
            }
            GeolocationManagerError::NoPositionAvailable => write!(f, "No position available"),
            GeolocationManagerError::PermissionDenied => write!(f, "Location permission denied"),
            GeolocationManagerError::PositionUnavailable(msg) => {
                write!(f, "Position unavailable: {}", msg)
            }
        }
    }
}

impl std::error::Error for GeolocationManagerError {}

/// Internal state of the geolocation manager
#[derive(Debug, Clone)]
struct ManagerState {
    is_initialized: bool,
    last_known_position: Option<Position>,
    is_watching: bool,
    watch_callbacks: Vec<u32>, // Watch IDs
}

impl Default for ManagerState {
    fn default() -> Self {
        Self {
            is_initialized: false,
            last_known_position: None,
            is_watching: false,
            watch_callbacks: Vec::new(),
        }
    }
}

/// GeolocationManager provides a shared singleton instance for managing geolocation
/// Similar to the TypeScript GeolocationManager in src/libs/geolocation/services/geolocation-manager.ts
///
/// This manager handles:
/// - Initialization and permission checks
/// - Getting current position
/// - Watching position updates
/// - Caching last known position
/// - Platform-specific providers (macOS native, IP-based, Tauri plugin for mobile)
pub struct GeolocationManager {
    state: Arc<Mutex<ManagerState>>,
}

impl GeolocationManager {
    /// Get the singleton instance of GeolocationManager
    /// Note: In a real async context, you'd want to use tokio::sync::OnceCell or similar
    pub fn instance() -> Arc<GeolocationManager> {
        use std::sync::OnceLock;
        static INSTANCE: OnceLock<Arc<GeolocationManager>> = OnceLock::new();

        INSTANCE
            .get_or_init(|| {
                Arc::new(GeolocationManager {
                    state: Arc::new(Mutex::new(ManagerState::default())),
                })
            })
            .clone()
    }

    /// Initialize the geolocation manager
    /// This performs an initial location fetch to verify everything works
    pub async fn initialize(&self) -> Result<(), GeolocationManagerError> {
        {
            let state = self.state.lock().await;
            if state.is_initialized {
                return Ok(());
            }
        }

        // Try to get initial position to verify everything works
        match get_location().await {
            Ok(result) => {
                let position = Self::convert_to_position(result);
                let mut state = self.state.lock().await;
                state.last_known_position = Some(position);
                state.is_initialized = true;
                Ok(())
            }
            Err(e) => Err(GeolocationManagerError::PositionUnavailable(e.to_string())),
        }
    }

    /// Check if the manager is initialized
    pub async fn is_initialized(&self) -> bool {
        self.state.lock().await.is_initialized
    }

    /// Get the current position
    /// Returns cached position if available, otherwise fetches a new one
    pub async fn get_current_position(&self) -> Result<Position, GeolocationManagerError> {
        // Check if we have a recent cached position (less than 5 seconds old)
        {
            let state = self.state.lock().await;
            if let Some(ref position) = state.last_known_position {
                let now = current_timestamp();
                let age = now - position.timestamp;
                if age < 5000 {
                    // 5 seconds cache
                    return Ok(position.clone());
                }
            }
        }

        // Fetch new position
        match get_location().await {
            Ok(result) => {
                let position = Self::convert_to_position(result);

                // Update cache
                let mut state = self.state.lock().await;
                state.last_known_position = Some(position.clone());

                Ok(position)
            }
            Err(e) => {
                // If we have a cached position, return it even if it's old
                let state = self.state.lock().await;

                if let Some(position) = state.last_known_position.clone() {
                    return Ok(position);
                }

                Err(GeolocationManagerError::PositionUnavailable(e.to_string()))
            }
        }
    }

    /// Get the last known position (may be stale)
    pub async fn get_last_known_position(&self) -> Option<Position> {
        self.state.lock().await.last_known_position.clone()
    }

    /// Start watching position updates
    /// Returns a watch ID that can be used to stop watching
    /// Note: On desktop, this uses polling. On mobile, this uses the Tauri plugin's watch.
    pub async fn start_watching<F>(&self, _callback: F) -> Result<u32, GeolocationManagerError>
    where
        F: Fn(Position) + Send + Sync + 'static,
    {
        let mut state = self.state.lock().await;

        if !state.is_initialized {
            return Err(GeolocationManagerError::NotInitialized);
        }

        // Generate watch ID
        let watch_id = state.watch_callbacks.len() as u32 + 1;
        state.watch_callbacks.push(watch_id);
        state.is_watching = true;

        // TODO: Implement actual watching mechanism
        // For now, this is a placeholder that would integrate with platform-specific watchers
        // On mobile: Use Tauri plugin's watchPosition
        // On desktop: Use polling with tokio::time::interval

        Ok(watch_id)
    }

    /// Stop watching position updates
    pub async fn stop_watching(&self, watch_id: u32) -> Result<(), GeolocationManagerError> {
        let mut state = self.state.lock().await;

        state.watch_callbacks.retain(|&id| id != watch_id);

        if state.watch_callbacks.is_empty() {
            state.is_watching = false;
        }

        Ok(())
    }

    /// Check if watching is active
    pub async fn is_watching(&self) -> bool {
        self.state.lock().await.is_watching
    }

    /// Convert a GeolocationResult to a Position with full navigator.geolocation-like data
    fn convert_to_position(result: GeolocationResult) -> Position {
        let timestamp = current_timestamp();

        Position::with_coords(
            Coordinates::with_full_data(
                result.coordinate.latitude,
                result.coordinate.longitude,
                None, // altitude - not available from most providers
                if result.is_native() { 10.0 } else { 1000.0 }, // accuracy estimate
                None, // altitude_accuracy
                None, // heading
                None, // speed
            ),
            timestamp,
        )
    }

    /// Update the last known position (called by watch callbacks)
    pub async fn update_position(&self, position: Position) {
        let mut state = self.state.lock().await;
        state.last_known_position = Some(position);
    }
}

/// Get current timestamp in milliseconds since Unix epoch
fn current_timestamp() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_singleton_instance() {
        let instance1 = GeolocationManager::instance();
        let instance2 = GeolocationManager::instance();
        // Both should point to the same underlying data (Arc comparison)
        assert!(Arc::ptr_eq(&instance1, &instance2));
    }

    #[tokio::test]
    async fn test_last_known_position() {
        let manager = GeolocationManager::instance();

        // Initially should be None
        assert!(manager.get_last_known_position().await.is_none());

        // Manually set a position
        let position =
            Position::with_coords(Coordinates::new(37.7749, -122.4194), current_timestamp());

        manager.update_position(position.clone()).await;

        // Should now be available
        let retrieved = manager.get_last_known_position().await;
        assert!(retrieved.is_some());
        let retrieved = retrieved.unwrap();
        assert_eq!(retrieved.coords.latitude, 37.7749);
        assert_eq!(retrieved.coords.longitude, -122.4194);
    }
}
