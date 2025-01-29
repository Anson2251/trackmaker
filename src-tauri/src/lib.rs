mod modules;

use modules::geolocation;

#[tauri::command]
async fn get_geolocation() -> Option<geolocation::types::Coordinate> {
    let location = geolocation::providers::ip().await;
    match location {
        Ok(location) => Some(geolocation::converter::wgs84_to_gcj02(&location)),
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
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, get_geolocation])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
