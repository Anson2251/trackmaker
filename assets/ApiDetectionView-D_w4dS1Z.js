import { t as e } from "./Card-kwg1fWHx.js";
import "./light-30G_vb0E.js";
import { Bt as t, Dt as n, Yt as r, ct as i, ft as a, in as o, jt as s, kt as c, lt as l, mt as u, pt as d, st as f, t as p, tn as m, tt as h, ut as g } from "./index-Vl7drdoJ.js";
import { n as _ } from "./vue-i18n-ClQBsBIw.js";
import { n as v, r as y, t as b } from "./ListItem-B1kvIxTU.js";
import { t as x } from "./Alert-CM9wB-Ap.js";
import { t as S } from "./PerformantEllipsis-BwEc1Kyu.js";
import { t as C } from "./Divider-CRxl8LRC.js";
import { t as w } from "./Space-DQST00ZU.js";
var T = { class: `api-detection-view` }, E = { class: `api-detection-content` }, D = { class: `api-status-item` }, O = { class: `api-name` }, k = { key: 0, class: `api-details` }, A = { key: 1, class: `api-error` }, j = p(u({ __name: `ApiDetectionView`, setup(u2) {
  let { t: p2 } = _(), j2 = r([{ name: `fetch`, available: false }, { name: `geolocation`, available: false }, { name: `performance`, available: false }, { name: `permission`, available: false }, { name: `deviceorientation`, available: false }, { name: `devicemotion`, available: false }]), M = () => {
    try {
      j2.value[0].available = typeof fetch < `u`, j2.value[0].details = j2.value[0].available ? p2(`apiDetection.descriptions.fetch.available`) : p2(`apiDetection.descriptions.fetch.unavailable`);
    } catch (e2) {
      j2.value[0].available = false, j2.value[0].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[1].available = `geolocation` in navigator, j2.value[1].details = j2.value[1].available ? p2(`apiDetection.descriptions.geolocation.available`) : p2(`apiDetection.descriptions.geolocation.unavailable`);
    } catch (e2) {
      j2.value[1].available = false, j2.value[1].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[2].available = `performance` in window, j2.value[2].details = j2.value[2].available ? p2(`apiDetection.descriptions.performance.available`) : p2(`apiDetection.descriptions.performance.unavailable`);
    } catch (e2) {
      j2.value[2].available = false, j2.value[2].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[3].available = `permissions` in navigator, j2.value[3].details = j2.value[3].available ? p2(`apiDetection.descriptions.permission.available`) : p2(`apiDetection.descriptions.permission.unavailable`);
    } catch (e2) {
      j2.value[3].available = false, j2.value[3].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[4].available = `DeviceOrientationEvent` in window, j2.value[4].details = j2.value[4].available ? p2(`apiDetection.descriptions.deviceorientation.available`) : p2(`apiDetection.descriptions.deviceorientation.unavailable`);
    } catch (e2) {
      j2.value[4].available = false, j2.value[4].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      j2.value[5].available = `DeviceMotionEvent` in window, j2.value[5].details = j2.value[5].available ? p2(`apiDetection.descriptions.devicemotion.available`) : p2(`apiDetection.descriptions.devicemotion.unavailable`);
    } catch (e2) {
      j2.value[5].available = false, j2.value[5].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
  };
  return n(() => {
    M();
  }), (n2, r2) => (c(), g(`div`, T, [f(`div`, E, [d(m(w), { vertical: ``, size: `large` }, { default: t(() => [d(m(e), { title: n2.$t(`apiDetection.title`) }, { default: t(() => [d(m(x), { type: `info`, "show-icon": false }, { default: t(() => [a(o(n2.$t(`apiDetection.description`)), 1)]), _: 1 }), d(m(C), { horizontal: `` }), d(m(v), null, { default: t(() => [(c(true), g(h, null, s(j2.value, (e2) => (c(), i(m(b), { key: e2.name }, { default: t(() => [f(`div`, D, [f(`div`, O, o(n2.$t(`apiDetection.apis.${e2.name}`)), 1), d(m(y), { type: e2.available ? `success` : `error`, bordered: false }, { default: t(() => [a(o(e2.available ? n2.$t(`apiDetection.available`) : n2.$t(`apiDetection.unavailable`)), 1)]), _: 2 }, 1032, [`type`])]), e2.details ? (c(), g(`div`, k, [d(m(S), null, { default: t(() => [a(o(e2.details), 1)]), _: 2 }, 1024)])) : l(``, true), e2.error ? (c(), g(`div`, A, o(n2.$t(`apiDetection.error`)) + `: ` + o(e2.error), 1)) : l(``, true)]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 }, 8, [`title`])]), _: 1 })])]));
} }), [[`__scopeId`, `data-v-485d4d3d`]]);
export {
  j as default
};
