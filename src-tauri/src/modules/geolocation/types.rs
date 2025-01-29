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

#[derive(Serialize, Clone, Debug)]
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
