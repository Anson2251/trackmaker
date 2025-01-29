use super::types::Coordinate;

const PI: f64 = 3.1415926535897932384626;
const SEMI_MAJOR_AXIS: f64 = 6378245.0; // WGS-84 ellipsoid parameters
const ECCENTRICITY_SQUARED: f64 = 0.00669342162296594323;

/// Returns true if the given coordinate is outside of China's boundaries.
///
/// The range of values checked is:
/// - longitude: 72.004 to 137.8347
/// - latitude: 0.8293 to 55.8271
fn is_outside_china(coordinate: &Coordinate) -> bool {
    (coordinate.longitude < 72.004 || coordinate.longitude > 137.8347)
        || (coordinate.latitude < 0.8293 || coordinate.latitude > 55.8271)
}


fn transform_lat(lng: f64, lat: f64) -> f64 {
    let mut ret =
        -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * lng.abs().sqrt();
    ret += (20.0 * (6.0 * lng * PI).sin() + 20.0 * (2.0 * lng * PI).sin()) * 2.0 / 3.0;
    ret += (20.0 * (lat * PI).sin() + 40.0 * (lat / 3.0 * PI).sin()) * 2.0 / 3.0;
    ret += (160.0 * (lat / 12.0 * PI).sin() + 320.0 * (lat * PI / 30.0).sin()) * 2.0 / 3.0;
    ret
}

fn transform_lng(lng: f64, lat: f64) -> f64 {
    let mut ret =
        300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * lng.abs().sqrt();
    ret += (20.0 * (6.0 * lng * PI).sin() + 20.0 * (2.0 * lng * PI).sin()) * 2.0 / 3.0;
    ret += (20.0 * (lng * PI).sin() + 40.0 * (lng / 3.0 * PI).sin()) * 2.0 / 3.0;
    ret += (150.0 * (lng / 12.0 * PI).sin() + 300.0 * (lng / 30.0 * PI).sin()) * 2.0 / 3.0;
    ret
}

pub fn calculate_deltas(coord: &Coordinate) -> (f64, f64) {
    let base_lng = coord.longitude - 105.0;
    let base_lat = coord.latitude - 35.0;

    let delta_lat = transform_lat(base_lng, base_lat);
    let delta_lng = transform_lng(base_lng, base_lat);

    let radian_lat = coord.latitude.to_radians();
    let sin_lat = radian_lat.sin();
    let eccentricity_factor = 1.0 - ECCENTRICITY_SQUARED * sin_lat.powi(2);
    let sqrt_eccentricity = eccentricity_factor.sqrt();

    // Calculate final deltas using WGS-84 parameters
    let meridian_radius = (SEMI_MAJOR_AXIS * (1.0 - ECCENTRICITY_SQUARED))
        / (eccentricity_factor * sqrt_eccentricity);

    let prime_vertical_radius = SEMI_MAJOR_AXIS / sqrt_eccentricity;

    let final_delta_lat = (delta_lat * 180.0) / (meridian_radius * PI);
    let final_delta_lng = (delta_lng * 180.0) / (prime_vertical_radius * radian_lat.cos() * PI);

    (final_delta_lat, final_delta_lng)
}

/// Converts GCJ-02 (Mars) coordinates to WGS-84 coordinates.
///
/// This function takes coordinates in the GCJ-02 format, which is used primarily in China,
/// and converts them to the WGS-84 format. If the input coordinates are outside China,
/// it returns the input unchanged as GCJ-02 transformation is only applicable within China.
///
/// ### Arguments
///
/// * `coord` - A reference to a `Coordinate` object in GCJ-02 format.
///
/// ### Returns
///
/// A `Coordinate` object in WGS-84 format.
#[allow(unused)]
pub fn gcj02_to_wgs84(coord: &Coordinate) -> Coordinate {
    if is_outside_china(coord) {
        return coord.clone();
    }

    let (delta_lat, delta_lng) = calculate_deltas(&coord);
    let mars_coord = Coordinate::new(coord.longitude + delta_lng, coord.latitude + delta_lat);

    // Reverse the offset using simple subtraction
    Coordinate::new(
        2.0 * coord.longitude - mars_coord.longitude,
        2.0 * coord.latitude - mars_coord.latitude,
    )
}

/// Converts WGS-84 coordinates to GCJ-02 (Mars) coordinates.
///
/// This function takes coordinates in the WGS-84 format and converts them to the
/// GCJ-02 format. If the input coordinates are outside China, it returns the input
/// unchanged as GCJ-02 transformation is only applicable within China.
///
/// ### Arguments
///
/// * `coord` - A reference to a `Coordinate` object in WGS-84 format.
///
/// ### Returns
///
/// A `Coordinate` object in GCJ-02 format.
#[allow(unused)]
pub fn wgs84_to_gcj02(coord: &Coordinate) -> Coordinate {
    if is_outside_china(coord) {
        return coord.clone();
    }

    let (delta_lat, delta_lng) = calculate_deltas(coord);
    Coordinate::new(coord.longitude + delta_lng, coord.latitude + delta_lat)
}
