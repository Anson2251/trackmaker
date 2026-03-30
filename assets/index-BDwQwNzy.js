import { b8 as e, b9 as i, ba as c } from "./index-BHjb7qzr.js";
async function r(n, a) {
  const o = new c();
  return o.onmessage = (t) => {
    typeof t == "string" ? a(null, t) : a(t);
  }, await i("plugin:geolocation|watch_position", { options: n, channel: o }), o.id;
}
async function u(n) {
  return await i("plugin:geolocation|get_current_position", { options: n });
}
async function l(n) {
  await i("plugin:geolocation|clear_watch", { channelId: n });
}
async function g() {
  return await e("geolocation");
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
