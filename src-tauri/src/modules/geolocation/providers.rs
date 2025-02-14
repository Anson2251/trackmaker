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
