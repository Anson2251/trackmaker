import { t as e } from "./Card-nhqq8IKa.js";
import "./Tooltip-DGge0ha1.js";
import { Ct as t, Lt as n, St as r, Vt as i, Xt as a, _t as o, an as s, bt as c, dn as l, dt as u, mn as d, t as f, vt as p, wt as m, yt as h, zt as g } from "./index-DTVnoW_1.js";
import { o as _ } from "./vue-router-Bobm8XWN.js";
import { n as v } from "./vue-i18n-BAINxUFe.js";
import { t as y } from "./Tag-BCblq9DP.js";
import { t as b } from "./Button-o58fM-RZ.js";
import { t as x } from "./PerformantEllipsis-DJXJ4P1h.js";
import { t as S } from "./Space-DRVg8nuM.js";
import { n as C, t as w } from "./ListItem-DOTKksGl.js";
var T = { class: `api-detection-view` }, E = { class: `api-detection-header` }, D = { class: `api-detection-content` }, O = { class: `api-status-item` }, k = { class: `api-name` }, A = { key: 0, class: `api-details` }, j = { key: 1, class: `api-error` }, M = f(m({ __name: `ApiDetectionView`, setup(f2) {
  let { t: m2 } = v(), M2 = _(), N = s([{ name: `fetch`, available: false }, { name: `geolocation`, available: false }, { name: `performance`, available: false }, { name: `permission`, available: false }, { name: `deviceorientation`, available: false }, { name: `devicemotion`, available: false }]), P = () => {
    try {
      N.value[0].available = typeof fetch < `u`, N.value[0].details = N.value[0].available ? m2(`apiDetection.descriptions.fetch.available`) : m2(`apiDetection.descriptions.fetch.unavailable`);
    } catch (e2) {
      N.value[0].available = false, N.value[0].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      N.value[1].available = `geolocation` in navigator, N.value[1].details = N.value[1].available ? m2(`apiDetection.descriptions.geolocation.available`) : m2(`apiDetection.descriptions.geolocation.unavailable`);
    } catch (e2) {
      N.value[1].available = false, N.value[1].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      N.value[2].available = `performance` in window, N.value[2].details = N.value[2].available ? m2(`apiDetection.descriptions.performance.available`) : m2(`apiDetection.descriptions.performance.unavailable`);
    } catch (e2) {
      N.value[2].available = false, N.value[2].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      N.value[3].available = `permissions` in navigator, N.value[3].details = N.value[3].available ? m2(`apiDetection.descriptions.permission.available`) : m2(`apiDetection.descriptions.permission.unavailable`);
    } catch (e2) {
      N.value[3].available = false, N.value[3].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      N.value[4].available = `DeviceOrientationEvent` in window, N.value[4].details = N.value[4].available ? m2(`apiDetection.descriptions.deviceorientation.available`) : m2(`apiDetection.descriptions.deviceorientation.unavailable`);
    } catch (e2) {
      N.value[4].available = false, N.value[4].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
    try {
      N.value[5].available = `DeviceMotionEvent` in window, N.value[5].details = N.value[5].available ? m2(`apiDetection.descriptions.devicemotion.available`) : m2(`apiDetection.descriptions.devicemotion.unavailable`);
    } catch (e2) {
      N.value[5].available = false, N.value[5].error = e2 instanceof Error ? e2.message : `Unknown error`;
    }
  };
  n(() => {
    P();
  });
  let F = () => {
    M2.back();
  };
  return (n2, s2) => (g(), c(`div`, T, [o(`div`, E, [t(l(b), { quaternary: ``, circle: ``, onClick: F }, { icon: a(() => [...s2[0] || (s2[0] = [o(`svg`, { xmlns: `http://www.w3.org/2000/svg`, width: `20`, height: `20`, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, "stroke-width": `2` }, [o(`path`, { d: `m12 19-7-7 7-7` }), o(`path`, { d: `M19 12H5` })], -1)])]), _: 1 }), o(`h1`, null, d(n2.$t(`apiDetection.title`)), 1)]), o(`div`, D, [t(l(S), { vertical: ``, size: `large` }, { default: a(() => [t(l(e), null, { default: a(() => [t(l(C), null, { default: a(() => [(g(true), c(u, null, i(N.value, (e2) => (g(), p(l(w), { key: e2.name }, { default: a(() => [o(`div`, O, [o(`div`, k, d(n2.$t(`apiDetection.apis.${e2.name}`)), 1), t(l(y), { type: e2.available ? `success` : `error`, bordered: false }, { default: a(() => [r(d(e2.available ? n2.$t(`apiDetection.available`) : n2.$t(`apiDetection.unavailable`)), 1)]), _: 2 }, 1032, [`type`])]), e2.details ? (g(), c(`div`, A, [t(l(x), null, { default: a(() => [r(d(e2.details), 1)]), _: 2 }, 1024)])) : h(``, true), e2.error ? (g(), c(`div`, j, d(n2.$t(`apiDetection.error`)) + `: ` + d(e2.error), 1)) : h(``, true)]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 })]), _: 1 })])]));
} }), [[`__scopeId`, `data-v-532a3c8d`]]);
export {
  M as default
};
