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

#[derive(Debug)]
pub enum GeolocationProviderError {
    InetError(reqwest::Error),
    LookupError(isahc::Error),
    ParseError(std::num::ParseFloatError),
}

impl std::fmt::Display for GeolocationProviderError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            GeolocationProviderError::InetError(e) => write!(f, "InetError: {}", e),
            GeolocationProviderError::LookupError(e) => write!(f, "LookupError: {}", e),
            GeolocationProviderError::ParseError(e) => write!(f, "ParseError: {}", e),
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
