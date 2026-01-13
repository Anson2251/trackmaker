import { $t as e, Dt as t, Jt as n, Lt as r, Mt as i, Ot as a, Tt as o, Yt as s, dn as c, gt as l, nn as u, sn as d, un as f } from "./index-DTVnoW_1.js";
function p(t2) {
  return e() ? (u(t2), true) : false;
}
var m = /* @__PURE__ */ new WeakMap(), h = (...e2) => {
  var _a;
  let n2 = e2[0], r2 = (_a = o()) == null ? void 0 : _a.proxy;
  if (r2 == null && !t()) throw Error(`injectLocal must be called in setup`);
  return r2 && m.has(r2) && n2 in m.get(r2) ? m.get(r2)[n2] : a(...e2);
}, g = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var _ = Object.prototype.toString, v = (e2) => _.call(e2) === `[object Object]`;
function y(e2) {
  return e2.endsWith(`rem`) ? Number.parseFloat(e2) * 16 : Number.parseFloat(e2);
}
function b(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function x(e2) {
  return e2 || o();
}
function S(e2, t2 = true, n2) {
  x(n2) ? r(e2, n2) : t2 ? e2() : i(e2);
}
function C(e2, t2, r2) {
  return n(e2, t2, { ...r2, immediate: true });
}
var w = g ? window : void 0;
g && window.document, g && window.navigator, g && window.location;
function T(e2) {
  let t2 = f(e2);
  return (t2 == null ? void 0 : t2.$el) ?? t2;
}
function E(...e2) {
  let t2 = [], n2 = () => {
    t2.forEach((e3) => e3()), t2.length = 0;
  }, r2 = (e3, t3, n3, r3) => (e3.addEventListener(t3, n3, r3), () => e3.removeEventListener(t3, n3, r3)), i2 = l(() => {
    let t3 = b(f(e2[0])).filter((e3) => e3 != null);
    return t3.every((e3) => typeof e3 != `string`) ? t3 : void 0;
  }), a2 = C(() => {
    var _a;
    return [((_a = i2.value) == null ? void 0 : _a.map((e3) => T(e3))) ?? [w].filter((e3) => e3 != null), b(f(i2.value ? e2[1] : e2[0])), b(c(i2.value ? e2[2] : e2[1])), f(i2.value ? e2[3] : e2[2])];
  }, ([e3, i3, a3, o2]) => {
    if (n2(), !(e3 == null ? void 0 : e3.length) || !(i3 == null ? void 0 : i3.length) || !(a3 == null ? void 0 : a3.length)) return;
    let s2 = v(o2) ? { ...o2 } : o2;
    t2.push(...e3.flatMap((e4) => i3.flatMap((t3) => a3.map((n3) => r2(e4, t3, n3, s2)))));
  }, { flush: `post` });
  return p(n2), () => {
    a2(), n2();
  };
}
function D() {
  let e2 = d(false), t2 = o();
  return t2 && r(() => {
    e2.value = true;
  }, t2), e2;
}
function O(e2) {
  let t2 = D();
  return l(() => (t2.value, !!e2()));
}
var k = Symbol(`vueuse-ssr-width`);
function A() {
  let e2 = t() ? h(k, null) : null;
  return typeof e2 == `number` ? e2 : void 0;
}
function j(e2, t2 = {}) {
  let { window: n2 = w, ssrWidth: r2 = A() } = t2, i2 = O(() => n2 && `matchMedia` in n2 && typeof n2.matchMedia == `function`), a2 = d(typeof r2 == `number`), o2 = d(), c2 = d(false);
  return s(() => {
    if (a2.value) {
      a2.value = !i2.value, c2.value = f(e2).split(`,`).some((e3) => {
        let t3 = e3.includes(`not all`), n3 = e3.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), i3 = e3.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a3 = !!(n3 || i3);
        return n3 && a3 && (a3 = r2 >= y(n3[1])), i3 && a3 && (a3 = r2 <= y(i3[1])), t3 ? !a3 : a3;
      });
      return;
    }
    i2.value && (o2.value = n2.matchMedia(f(e2)), c2.value = o2.value.matches);
  }), E(o2, `change`, (e3) => {
    c2.value = e3.matches;
  }, { passive: true }), l(() => c2.value);
}
function M(e2 = {}) {
  let { window: t2 = w, initialWidth: r2 = 1 / 0, initialHeight: i2 = 1 / 0, listenOrientation: a2 = true, includeScrollbar: o2 = true, type: s2 = `inner` } = e2, c2 = d(r2), l2 = d(i2), u2 = () => {
    if (t2) if (s2 === `outer`) c2.value = t2.outerWidth, l2.value = t2.outerHeight;
    else if (s2 === `visual` && t2.visualViewport) {
      let { width: e3, height: n2, scale: r3 } = t2.visualViewport;
      c2.value = Math.round(e3 * r3), l2.value = Math.round(n2 * r3);
    } else o2 ? (c2.value = t2.innerWidth, l2.value = t2.innerHeight) : (c2.value = t2.document.documentElement.clientWidth, l2.value = t2.document.documentElement.clientHeight);
  };
  u2(), S(u2);
  let f2 = { passive: true };
  return E(`resize`, u2, f2), t2 && s2 === `visual` && t2.visualViewport && E(t2.visualViewport, `resize`, u2, f2), a2 && n(j(`(orientation: portrait)`), () => u2()), { width: c2, height: l2 };
}
export {
  M as t
};
