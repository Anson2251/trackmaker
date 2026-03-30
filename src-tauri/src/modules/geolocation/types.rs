use isahc;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct FreeIPApiCurrency {
    pub code: String,
    pub name: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct FreeIPApiGeolocation {
    #[serde(rename = "ipVersion")]
    pub ip_version: u8,
    #[serde(rename = "ipAddress")]
    pub ip_address: String,
    pub latitude: f64,
    pub longitude: f64,
    #[serde(rename = "countryName")]
    pub country_name: String,
    #[serde(rename = "countryCode")]
    pub country_code: String,
    #[serde(rename = "timeZone")]
    pub time_zone: String,
    #[serde(rename = "zipCode")]
    pub zip_code: Option<String>, // Optional field
    #[serde(rename = "cityName")]
    pub city_name: String,
    #[serde(rename = "regionName")]
    pub region_name: String,
    #[serde(rename = "isProxy")]
    pub is_proxy: bool,
    pub continent: String,
    #[serde(rename = "continentCode")]
    pub continent_code: String,
    pub currency: FreeIPApiCurrency,
    pub language: String,
    #[serde(rename = "timeZones")]
    pub time_zones: Vec<String>,
    pub tlds: Vec<String>,
}

/// Geographic coordinate with latitude and longitude
#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Coordinate {
    pub latitude: f64,
    pub longitude: f64,
}

impl Coordinate {
    pub fn new(longitude: f64, latitude: f64) -> Self {
        Self {
            longitude,
            latitude,
        }
    }
}

/// Full position data similar to navigator.geolocation Position interface
/// Includes all available fields: coords (latitude, longitude, altitude, accuracy, etc.) and timestamp
#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Position {
    /// Geographic coordinates
    pub coords: Coordinates,
    /// Timestamp when position was acquired (milliseconds since Unix epoch)
    pub timestamp: u64,
}

/// Coordinates data similar to navigator.geolocation Coordinates interface
#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Coordinates {
    /// Latitude in decimal degrees
    pub latitude: f64,
    /// Longitude in decimal degrees
    pub longitude: f64,
    /// Altitude in meters above the WGS84 ellipsoid (null if not available)
    pub altitude: Option<f64>,
    /// Accuracy of latitude and longitude in meters
    pub accuracy: f64,
    /// Accuracy of altitude in meters (null if not available)
    pub altitude_accuracy: Option<f64>,
    /// Direction of travel in degrees clockwise from true north (null if not available)
    pub heading: Option<f64>,
    /// Speed in meters per second (null if not available)
    pub speed: Option<f64>,
}

impl Coordinates {
    /// Create a new Coordinates instance with just latitude and longitude (basic GPS data)
    pub fn new(latitude: f64, longitude: f64) -> Self {
        Self {
            latitude,
            longitude,
            altitude: None,
            accuracy: 0.0,
            altitude_accuracy: None,
            heading: None,
            speed: None,
        }
    }

    /// Create a new Coordinates instance with full data
    pub fn with_full_data(
        latitude: f64,
        longitude: f64,
        altitude: Option<f64>,
        accuracy: f64,
        altitude_accuracy: Option<f64>,
        heading: Option<f64>,
        speed: Option<f64>,
    ) -> Self {
        Self {
            latitude,
            longitude,
            altitude,
            accuracy,
            altitude_accuracy,
            heading,
            speed,
        }
    }
}

impl Position {
    /// Create a new Position from basic coordinates
    pub fn from_coordinate(coord: &Coordinate, accuracy: f64, timestamp: u64) -> Self {
        Self {
            coords: Coordinates::with_full_data(
                coord.latitude,
                coord.longitude,
                None,
                accuracy,
                None,
                None,
                None,
            ),
            timestamp,
        }
    }

    /// Create a new Position with full coordinate data
    pub fn with_coords(coords: Coordinates, timestamp: u64) -> Self {
        Self { coords, timestamp }
    }
}

#[derive(Debug)]
pub enum GeolocationProviderError {
    InetError(reqwest::Error),
    LookupError(isahc::Error),
    ParseError(std::num::ParseFloatError),
    #[cfg(target_os = "macos")]
    MacOSError(String),
}

impl std::fmt::Display for GeolocationProviderError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            GeolocationProviderError::InetError(e) => write!(f, "InetError: {}", e),
            GeolocationProviderError::LookupError(e) => write!(f, "LookupError: {}", e),
            GeolocationProviderError::ParseError(e) => write!(f, "ParseError: {}", e),
            #[cfg(target_os = "macos")]
            GeolocationProviderError::MacOSError(e) => write!(f, "MacOSError: {}", e),
        }
    }
}

impl From<reqwest::Error> for GeolocationProviderError {
    fn from(err: reqwest::Error) -> Self {
        GeolocationProviderError::InetError(err)
    }
}

impl From<isahc::Error> for GeolocationProviderError {
    fn from(err: isahc::Error) -> Self {
        GeolocationProviderError::LookupError(err)
    }
}

impl From<std::num::ParseFloatError> for GeolocationProviderError {
    fn from(err: std::num::ParseFloatError) -> Self {
        GeolocationProviderError::ParseError(err)
    }
}

impl std::error::Error for GeolocationProviderError {}
