use super::types::Coordinate;
use objc2_core_location::{CLAuthorizationStatus, CLLocationManager};
use std::ffi::c_void;
use std::time::Duration;

// FFI to CoreFoundation run loop — needed to pump events so the
// system permission dialog can actually appear.
extern "C" {
    static kCFRunLoopDefaultMode: *const c_void;
    fn CFRunLoopRunInMode(
        mode: *const c_void,
        seconds: f64,
        return_after_source_handled: u8,
    ) -> i32;
}

/// Spin the current run loop for `seconds`, allowing system UI
/// (like the location-permission dialog) to be presented.
fn run_loop_tick(seconds: f64) {
    unsafe {
        CFRunLoopRunInMode(kCFRunLoopDefaultMode, seconds, 0);
    }
}

// Use proper constants from CLAuthorizationStatus
const _NOT_DETERMINED: i32 = CLAuthorizationStatus::NotDetermined.0;
const _RESTRICTED: i32 = CLAuthorizationStatus::Restricted.0;
const _DENIED: i32 = CLAuthorizationStatus::Denied.0;
const _AUTHORIZED_ALWAYS: i32 = CLAuthorizationStatus::AuthorizedAlways.0;
const _AUTHORIZED_WHEN_IN_USE: i32 = CLAuthorizationStatus::AuthorizedWhenInUse.0;

/// Error type for macOS geolocation operations
#[derive(Debug)]
pub enum MacOSGeolocationError {
    PermissionDenied,
    LocationServicesDisabled,
    NoCachedLocation,
    Timeout,
}

impl std::fmt::Display for MacOSGeolocationError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            MacOSGeolocationError::PermissionDenied => write!(f, "Location permission denied"),
            MacOSGeolocationError::LocationServicesDisabled => {
                write!(f, "Location services disabled")
            }
            MacOSGeolocationError::NoCachedLocation => write!(
                f,
                "No cached location available - try again after granting permission"
            ),
            MacOSGeolocationError::Timeout => write!(f, "Location request timed out"),
        }
    }
}

impl std::error::Error for MacOSGeolocationError {}

/// Get the current location using macOS CoreLocation
///
/// **Important:** This function must be called from the main thread so
/// that the run loop can present the system permission dialog.
pub fn get_current_location() -> Result<Coordinate, MacOSGeolocationError> {
    // Check if location services are enabled at system level
    if !is_location_services_enabled() {
        eprintln!("[macOS Geolocation] Location services are disabled at system level");
        return Err(MacOSGeolocationError::LocationServicesDisabled);
    }

    // Create location manager
    let location_manager = unsafe { CLLocationManager::new() };

    // Check authorization status
    let auth_status = unsafe { location_manager.authorizationStatus() };
    eprintln!(
        "[macOS Geolocation] Authorization status: {}",
        auth_status.0
    );

    match auth_status.0 {
        _NOT_DETERMINED => {
            // Permission not requested yet - return error instead of requesting
            // Permission should be requested separately via request_location_permission()
            eprintln!("[macOS Geolocation] Permission not determined - call request_location_permission() first");
            return Err(MacOSGeolocationError::PermissionDenied);
        }
        _RESTRICTED | _DENIED => {
            eprintln!("[macOS Geolocation] Permission denied or restricted");
            eprintln!("[macOS Geolocation] Enable in: System Settings > Privacy & Security > Location Services");
            return Err(MacOSGeolocationError::PermissionDenied);
        }
        _AUTHORIZED_ALWAYS | _AUTHORIZED_WHEN_IN_USE => {
            eprintln!("[macOS Geolocation] Permission already granted");
        }
        _ => {
            eprintln!(
                "[macOS Geolocation] Unknown permission status: {}",
                auth_status.0
            );
            return Err(MacOSGeolocationError::PermissionDenied);
        }
    }

    // Try cached location first (fast path)
    if let Some(location) = unsafe { location_manager.location() } {
        let coordinate = unsafe { location.coordinate() };
        eprintln!(
            "[macOS Geolocation] Using cached location: lat={}, lon={}",
            coordinate.latitude, coordinate.longitude
        );
        return Ok(Coordinate::new(
            coordinate.longitude as f64,
            coordinate.latitude as f64,
        ));
    }

    eprintln!("[macOS Geolocation] No cached location available");
    Err(MacOSGeolocationError::NoCachedLocation)
}

#[allow(dead_code)]
pub fn request_fresh_location() -> Result<Coordinate, MacOSGeolocationError> {
    let location_manager = unsafe { CLLocationManager::new() };

    let auth_status = unsafe { location_manager.authorizationStatus() };
    if !matches!(auth_status.0, _AUTHORIZED_ALWAYS | _AUTHORIZED_WHEN_IN_USE) {
        return Err(MacOSGeolocationError::PermissionDenied);
    }

    unsafe {
        location_manager.startUpdatingLocation();
    }

    let timeout = Duration::from_secs(5);
    let start = std::time::Instant::now();

    while start.elapsed() < timeout {
        // Pump the run loop so delegate callbacks fire
        run_loop_tick(0.1);

        if let Some(location) = unsafe { location_manager.location() } {
            unsafe {
                location_manager.stopUpdatingLocation();
            }
            let coordinate = unsafe { location.coordinate() };
            return Ok(Coordinate::new(
                coordinate.longitude as f64,
                coordinate.latitude as f64,
            ));
        }
    }

    unsafe {
        location_manager.stopUpdatingLocation();
    }

    Err(MacOSGeolocationError::Timeout)
}

pub fn is_location_services_enabled() -> bool {
    unsafe { CLLocationManager::locationServicesEnabled_class() }
}

pub fn get_authorization_status() -> CLAuthorizationStatus {
    let location_manager = unsafe { CLLocationManager::new() };
    unsafe { location_manager.authorizationStatus() }
}

/// Request location permission from the user and wait for response
///
/// This function shows the system permission dialog and polls until the user
/// responds or timeout is reached.
pub fn request_location_permission() -> Result<(), MacOSGeolocationError> {
    let location_manager = unsafe { CLLocationManager::new() };

    // Check current status first
    let auth_status = unsafe { location_manager.authorizationStatus() };
    match auth_status.0 {
        _AUTHORIZED_ALWAYS | _AUTHORIZED_WHEN_IN_USE => {
            eprintln!("[macOS Geolocation] Permission already granted");
            return Ok(());
        }
        _RESTRICTED | _DENIED => {
            eprintln!("[macOS Geolocation] Permission already denied");
            return Err(MacOSGeolocationError::PermissionDenied);
        }
        _NOT_DETERMINED => {
            eprintln!("[macOS Geolocation] Requesting permission...");
        }
        _ => {}
    }

    // Request authorization
    unsafe {
        location_manager.requestWhenInUseAuthorization();
    }

    // Pump the run loop so the system can present the dialog,
    // then poll for the user's response.
    let timeout = Duration::from_secs(60);
    let start = std::time::Instant::now();
    let mut last_status = auth_status.0;

    while start.elapsed() < timeout {
        run_loop_tick(0.1);

        let current_status = unsafe { location_manager.authorizationStatus() };

        if current_status.0 != last_status {
            eprintln!(
                "[macOS Geolocation] Permission status changed to: {}",
                current_status.0
            );
            last_status = current_status.0;
        }

        match current_status.0 {
            _AUTHORIZED_ALWAYS | _AUTHORIZED_WHEN_IN_USE => {
                eprintln!("[macOS Geolocation] Permission granted!");
                return Ok(());
            }
            _RESTRICTED | _DENIED => {
                eprintln!("[macOS Geolocation] Permission denied or restricted");
                return Err(MacOSGeolocationError::PermissionDenied);
            }
            _NOT_DETERMINED => {
                // Still waiting for user response — loop continues
            }
            _ => {
                eprintln!(
                    "[macOS Geolocation] Unknown permission status: {}",
                    current_status.0
                );
                return Err(MacOSGeolocationError::PermissionDenied);
            }
        }
    }

    eprintln!("[macOS Geolocation] Permission request timed out");
    Err(MacOSGeolocationError::PermissionDenied)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_location_services_enabled() {
        let _enabled = is_location_services_enabled();
    }

    #[test]
    fn test_authorization_status() {
        let _status = get_authorization_status();
    }
}
