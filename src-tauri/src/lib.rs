mod modules;

use modules::geolocation;
use serde::{Deserialize, Serialize};
use tauri::Manager;
use window_vibrancy::{apply_vibrancy, NSVisualEffectMaterial};

/// Geolocation method used to obtain the location
#[derive(Serialize, Deserialize, Debug)]
enum GeolocationMethod {
    #[serde(rename = "native")]
    Native,
    #[serde(rename = "ip")]
    IP,
    #[serde(rename = "mobile_plugin")]
    MobilePlugin,
}

/// Get current position with full navigator.geolocation-compatible data
/// Returns a Position object with coords (latitude, longitude, altitude, accuracy, etc.) and timestamp
#[tauri::command]
async fn get_current_position() -> Result<geolocation::types::Position, String> {
    let manager = geolocation::manager::GeolocationManager::instance();

    // Ensure manager is initialized
    if !manager.is_initialized().await {
        match manager.initialize().await {
            Ok(()) => {}
            Err(e) => return Err(format!("Failed to initialize geolocation manager: {}", e)),
        }
    }

    match manager.get_current_position().await {
        Ok(position) => Ok(position),
        Err(e) => Err(e.to_string()),
    }
}

/// Get the last known position without fetching a new one
/// Returns cached position if available
#[tauri::command]
async fn get_last_known_position() -> Option<geolocation::types::Position> {
    let manager = geolocation::manager::GeolocationManager::instance();
    manager.get_last_known_position().await
}

/// Initialize the geolocation manager
/// This sets up the shared instance and performs initial location fetch
#[tauri::command]
async fn init_geolocation_manager() -> Result<(), String> {
    let manager = geolocation::manager::GeolocationManager::instance();
    match manager.initialize().await {
        Ok(()) => Ok(()),
        Err(e) => Err(e.to_string()),
    }
}

/// Check if geolocation manager is initialized
#[tauri::command]
async fn is_geolocation_initialized() -> bool {
    let manager = geolocation::manager::GeolocationManager::instance();
    manager.is_initialized().await
}

/// Check the current geolocation permission status
#[tauri::command]
async fn get_geolocation_permission_status() -> Result<String, String> {
    #[cfg(target_os = "macos")]
    {
        let status = geolocation::macos::get_authorization_status();
        // Status codes: 0=notDetermined, 1=restricted, 2=denied, 3=authorizedAlways, 4=authorizedWhenInUse
        let status_str = match status.0 {
            0 => "prompt",
            1 | 2 => "denied",
            3 | 4 => "granted",
            _ => "prompt",
        };
        Ok(status_str.to_string())
    }

    #[cfg(not(target_os = "macos"))]
    {
        // For non-macOS platforms, we can't check system-level permissions from Rust
        // The frontend should use browser APIs
        Ok("prompt".to_string())
    }
}

/// Request geolocation permission (macOS only)
#[tauri::command]
async fn request_geolocation_permission() -> Result<(), String> {
    #[cfg(target_os = "macos")]
    {
        // request_location_permission now handles the polling and returns Result
        match geolocation::macos::request_location_permission() {
            Ok(()) => Ok(()),
            Err(e) => Err(e.to_string()),
        }
    }

    #[cfg(not(target_os = "macos"))]
    {
        Err("Permission requests are handled by the browser on this platform".to_string())
    }
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_geolocation::init())
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();

            #[cfg(target_os = "macos")]
            {
                apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
                    .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS")
            }
            Ok(())
        })
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            // Geolocation permission commands
            get_geolocation_permission_status,
            request_geolocation_permission,
            // Geolocation position commands with full navigator.geolocation-compatible data
            get_current_position,
            get_last_known_position,
            init_geolocation_manager,
            is_geolocation_initialized
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
