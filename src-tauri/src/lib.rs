mod modules;

use modules::geolocation;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
enum TauriGeolocationMethod {
    #[serde(rename = "native")]
    Native,
    #[serde(rename = "ip")]
    IP,
}

#[derive(Serialize, Deserialize, Debug)]
struct TauriGeolocationTransmit {
    point: geolocation::types::Coordinate,
    method: TauriGeolocationMethod
}

#[tauri::command]
async fn get_geolocation() -> Option<TauriGeolocationTransmit> {
    let result = geolocation::providers::get_location().await;
    match result {
        Ok(location_result) => {
            let method = match location_result.method {
                #[cfg(target_os = "macos")]
                geolocation::providers::GeolocationMethod::Native => TauriGeolocationMethod::Native,
                geolocation::providers::GeolocationMethod::IP => TauriGeolocationMethod::IP,
                _ => TauriGeolocationMethod::IP, // Fallback for other methods
            };
            
            Some(TauriGeolocationTransmit {
                point: geolocation::converter::wgs84_to_gcj02(&location_result.coordinate),
                method,
            })
        }
        Err(e) => {
            println!("Geolocation error: {}", e.to_string());
            None
        }
    }
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
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, get_geolocation, get_geolocation_permission_status, request_geolocation_permission])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
