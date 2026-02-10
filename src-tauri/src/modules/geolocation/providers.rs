use super::super::inet;
use super::types::{Coordinate, FreeIPApiGeolocation, GeolocationProviderError};
use anyhow::Result;
use geolocation;

const FREE_IP_API_BASE_URL: &str = "https://freeipapi.com/api/json";

#[allow(unused)]
pub async fn ip() -> Result<Coordinate, GeolocationProviderError> {
    let location = geolocation::find(&(inet::get_ip_address().await?))?;

    Ok(Coordinate {
        latitude: location
            .latitude
            .parse::<f64>()
            .map_err(GeolocationProviderError::ParseError)?,
        longitude: location
            .longitude
            .parse::<f64>()
            .map_err(GeolocationProviderError::ParseError)?,
    })
}

#[allow(unused)]
pub async fn free_ip_api() -> Result<Coordinate, reqwest::Error> {
    let location = reqwest::get(FREE_IP_API_BASE_URL)
        .await?
        .json::<FreeIPApiGeolocation>()
        .await?;

    Ok(Coordinate {
        latitude: location.latitude,
        longitude: location.longitude,
    })
}

#[cfg(target_os = "macos")]
use super::macos::get_current_location;

/// Geolocation method used to obtain the location
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GeolocationMethod {
    /// Native macOS CoreLocation
    #[cfg(target_os = "macos")]
    Native,
    /// IP-based geolocation
    IP,
    /// Free IP API
    #[allow(unused)]
    FreeIPApi,
}

impl std::fmt::Display for GeolocationMethod {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            #[cfg(target_os = "macos")]
            GeolocationMethod::Native => write!(f, "native"),
            GeolocationMethod::IP => write!(f, "ip"),
            GeolocationMethod::FreeIPApi => write!(f, "free_ip_api"),
        }
    }
}

/// Result of a geolocation lookup including the method used
#[derive(Debug, Clone)]
pub struct GeolocationResult {
    pub coordinate: Coordinate,
    pub method: GeolocationMethod,
}

impl GeolocationResult {
    /// Returns true if the location was obtained using native GPS/CoreLocation
    pub fn is_native(&self) -> bool {
        match self.method {
            #[cfg(target_os = "macos")]
            GeolocationMethod::Native => true,
            _ => false,
        }
    }
    
    /// Returns true if the location was obtained via IP-based geolocation
    pub fn is_ip_based(&self) -> bool {
        matches!(self.method, GeolocationMethod::IP | GeolocationMethod::FreeIPApi)
    }
}

/// Get the current location using the best available method.
///
/// On macOS, this function will first try to use the native CoreLocation API.
/// If that fails or on other platforms, it falls back to IP-based geolocation.
///
/// # Returns
/// Returns a `GeolocationResult` containing both the coordinate and the method used.
///
/// # Errors
/// Returns an error if all available methods fail.
pub async fn get_location() -> Result<GeolocationResult, GeolocationProviderError> {
    // Try macOS native geolocation first
    #[cfg(target_os = "macos")]
    {
        match macos_core_location() {
            Ok(coord) => {
                return Ok(GeolocationResult {
                    coordinate: coord,
                    method: GeolocationMethod::Native,
                });
            }
            Err(e) => {
                eprintln!("macOS native geolocation failed: {}, falling back to IP", e);
            }
        }
    }

    // Fall back to IP-based geolocation
    match ip().await {
        Ok(coord) => Ok(GeolocationResult {
            coordinate: coord,
            method: GeolocationMethod::IP,
        }),
        Err(e) => Err(e),
    }
}

/// Get the current location using macOS CoreLocation framework.
///
/// This provider uses the native macOS CoreLocation APIs to get the device's
/// current location. It requires location permissions to be granted.
///
/// # Platform
/// This function is only available on macOS.
///
/// # Errors
/// Returns an error if:
/// - Location services are disabled
/// - Permission is denied
/// - Unable to get a location fix within the timeout period
#[cfg(target_os = "macos")]
#[allow(unused)]
pub fn macos_core_location() -> Result<Coordinate, GeolocationProviderError> {
    match get_current_location() {
        Ok(coord) => Ok(coord),
        Err(e) => Err(GeolocationProviderError::MacOSError(e.to_string())),
    }
}
