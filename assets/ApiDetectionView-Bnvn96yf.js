import { t as e } from "./Card-wTK5VWgg.js";
import "./light-DcazuQOY.js";
import { At as t, Mt as n, Ot as r, Vt as i, Xt as a, an as o, ct as s, dt as c, ht as l, lt as u, mt as d, nn as f, nt as p, pt as m, t as h, ut as g } from "./index-C4uc8sCV.js";
import { n as _ } from "./vue-i18n-BmCNrBEx.js";
import { n as v, r as y, t as b } from "./ListItem-CojxfxaX.js";
import { t as x } from "./Alert-Dcs0al4V.js";
import { t as S } from "./PerformantEllipsis-Du1-qbTc.js";
import { t as C } from "./Divider-v3pR-5Ul.js";
import { t as w } from "./Space-B096YzDs.js";
var T = { class: `api-detection-view` }, E = { class: `api-detection-content` }, D = { class: `api-status-item` }, O = { class: `api-name` }, k = { key: 0, class: `api-details` }, A = { key: 1, class: `api-error` }, j = h(l({ __name: `ApiDetectionView`, setup(l2) {
  let { t: h2 } = _(), j2 = a([{ name: `fetch`, available: false }, { name: `geolocation`, available: false }, { name: `performance`, available: false }, { name: `permission`, available: false }, { name: `deviceorientation`, available: false }, { name: `devicemotion`, available: false }]), M = () => {
    try {
      j2.value[0].available = typeof fetch < `u`, j2.value[0].details = j2.value[0].available ? h2(`apiDetection.descriptions.fetch.available`) : h2(`apiDetection.descriptions.fetch.unavailable`);
    } catch (e2) {
      j2.value[0].available = false, j2.value[0].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[1].available = `geolocation` in navigator, j2.value[1].details = j2.value[1].available ? h2(`apiDetection.descriptions.geolocation.available`) : h2(`apiDetection.descriptions.geolocation.unavailable`);
    } catch (e2) {
      j2.value[1].available = false, j2.value[1].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[2].available = `performance` in window, j2.value[2].details = j2.value[2].available ? h2(`apiDetection.descriptions.performance.available`) : h2(`apiDetection.descriptions.performance.unavailable`);
    } catch (e2) {
      j2.value[2].available = false, j2.value[2].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[3].available = `permissions` in navigator, j2.value[3].details = j2.value[3].available ? h2(`apiDetection.descriptions.permission.available`) : h2(`apiDetection.descriptions.permission.unavailable`);
    } catch (e2) {
      j2.value[3].available = false, j2.value[3].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[4].available = `DeviceOrientationEvent` in window, j2.value[4].details = j2.value[4].available ? h2(`apiDetection.descriptions.deviceorientation.available`) : h2(`apiDetection.descriptions.deviceorientation.unavailable`);
    } catch (e2) {
      j2.value[4].available = false, j2.value[4].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[5].available = `DeviceMotionEvent` in window, j2.value[5].details = j2.value[5].available ? h2(`apiDetection.descriptions.devicemotion.available`) : h2(`apiDetection.descriptions.devicemotion.unavailable`);
    } catch (e2) {
      j2.value[5].available = false, j2.value[5].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
  };
  return r(() => {
    M();
  }), (r2, a2) => (t(), c(`div`, T, [s(`div`, E, [d(f(w), { vertical: ``, size: `large` }, { default: i(() => [d(f(e), { title: r2.$t(`apiDetection.title`) }, { default: i(() => [d(f(x), { type: `info`, "show-icon": false }, { default: i(() => [m(o(r2.$t(`apiDetection.description`)), 1)]), _: 1 }), d(f(C), { horizontal: `` }), d(f(v), null, { default: i(() => [(t(true), c(p, null, n(j2.value, (e2) => (t(), u(f(b), { key: e2.name }, { default: i(() => [s(`div`, D, [s(`div`, O, o(r2.$t(`apiDetection.apis.${e2.name}`)), 1), d(f(y), { type: e2.available ? `success` : `error`, bordered: false }, { default: i(() => [m(o(e2.available ? r2.$t(`apiDetection.available`) : r2.$t(`apiDetection.unavailable`)), 1)]), _: 2 }, 1032, [`type`])]), e2.details ? (t(), c(`div`, k, [d(f(S), null, { default: i(() => [m(o(e2.details), 1)]), _: 2 }, 1024)])) : g(``, true), e2.error ? (t(), c(`div`, A, o(r2.$t(`apiDetection.error`)) + `: ` + o(e2.error), 1)) : g(``, true)]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 }, 8, [`title`])]), _: 1 })])]));
} }), [[`__scopeId`, `data-v-485d4d3d`]]);
export {
  j as default
};
