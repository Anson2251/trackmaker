import { t as e } from "./Card-DdZpYuN6.js";
import "./light-DrGL0wr2.js";
import { Dt as t, Jt as n, ct as r, en as i, ft as a, jt as o, kt as s, lt as c, mt as l, pt as u, rn as d, st as f, t as p, tt as m, ut as h, zt as g } from "./index-CYjE8tga.js";
import { n as _ } from "./vue-i18n-Ci3j_veG.js";
import { n as v, r as y, t as b } from "./ListItem-CQyygcrU.js";
import { t as x } from "./Alert-kcJwJqda.js";
import { t as S } from "./PerformantEllipsis-C8tFxaZN.js";
import { t as C } from "./Divider-BaQRafxX.js";
import { t as w } from "./Space-BmZdSGRe.js";
var T = { class: `api-detection-view` }, E = { class: `api-detection-content` }, D = { class: `api-status-item` }, O = { class: `api-name` }, k = { key: 0, class: `api-details` }, A = { key: 1, class: `api-error` }, j = p(l({ __name: `ApiDetectionView`, setup(l2) {
  let { t: p2 } = _(), j2 = n([{ name: `fetch`, available: false }, { name: `geolocation`, available: false }, { name: `performance`, available: false }, { name: `permission`, available: false }, { name: `deviceorientation`, available: false }, { name: `devicemotion`, available: false }]), M = () => {
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
  return t(() => {
    M();
  }), (t2, n2) => (s(), h(`div`, T, [f(`div`, E, [u(i(w), { vertical: ``, size: `large` }, { default: g(() => [u(i(e), { title: t2.$t(`apiDetection.title`) }, { default: g(() => [u(i(x), { type: `info`, "show-icon": false }, { default: g(() => [a(d(t2.$t(`apiDetection.description`)), 1)]), _: 1 }), u(i(C), { horizontal: `` }), u(i(v), null, { default: g(() => [(s(true), h(m, null, o(j2.value, (e2) => (s(), r(i(b), { key: e2.name }, { default: g(() => [f(`div`, D, [f(`div`, O, d(t2.$t(`apiDetection.apis.${e2.name}`)), 1), u(i(y), { type: e2.available ? `success` : `error`, bordered: false }, { default: g(() => [a(d(e2.available ? t2.$t(`apiDetection.available`) : t2.$t(`apiDetection.unavailable`)), 1)]), _: 2 }, 1032, [`type`])]), e2.details ? (s(), h(`div`, k, [u(i(S), null, { default: g(() => [a(d(e2.details), 1)]), _: 2 }, 1024)])) : c(``, true), e2.error ? (s(), h(`div`, A, d(t2.$t(`apiDetection.error`)) + `: ` + d(e2.error), 1)) : c(``, true)]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 }, 8, [`title`])]), _: 1 })])]));
} }), [[`__scopeId`, `data-v-485d4d3d`]]);
export {
  j as default
};
