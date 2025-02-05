use reqwest;

const DEVICE_IP_QUERY_API_URL: &str = "https://ipv4.ip.mir6.com";

pub async fn get_ip_address() -> Result<String, reqwest::Error> {
	reqwest::get(DEVICE_IP_QUERY_API_URL).await?.text().await
}
