mod modules;

use modules::geolocation;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
enum TauriGeolocationMethod {
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
    let location = geolocation::providers::ip().await;
    match location {
        Ok(location) => Some(TauriGeolocationTransmit {
            point: geolocation::converter::wgs84_to_gcj02(&location),
            method: TauriGeolocationMethod::IP
        }),
        Err(e) => {
            println!("{}", e.to_string());
            None
        }
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
        .invoke_handler(tauri::generate_handler![greet, get_geolocation])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
