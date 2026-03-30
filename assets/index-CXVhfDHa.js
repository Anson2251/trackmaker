import { b7 as a, b8 as i, b9 as c } from "./index-BlAw5vSD.js";
async function r(n, e) {
  const o = new c();
  return o.onmessage = (t) => {
    typeof t == "string" ? e(null, t) : e(t);
  }, await i("plugin:geolocation|watch_position", { options: n, channel: o }), o.id;
}
async function u(n) {
  return await i("plugin:geolocation|get_current_position", { options: n });
}
async function l(n) {
  await i("plugin:geolocation|clear_watch", { channelId: n });
}
async function g() {
  return await a("geolocation");
}
async function p(n) {
  return await i("plugin:geolocation|request_permissions", { permissions: n });
}
export {
  g as checkPermissions,
  l as clearWatch,
  u as getCurrentPosition,
  p as requestPermissions,
  r as watchPosition
};
