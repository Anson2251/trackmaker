use super::types::{Coordinate, FreeIPApiGeolocation};
use anyhow::Result;

const FREE_IP_API_BASE_URL: &str = "https://freeipapi.com/api/json";

pub async fn ip() -> Result<Coordinate, reqwest::Error> {
    let location = reqwest::get(FREE_IP_API_BASE_URL)
        .await?
        .json::<FreeIPApiGeolocation>()
        .await?;

    Ok(Coordinate {
        latitude: location.latitude,
        longitude: location.longitude,
    })
}
