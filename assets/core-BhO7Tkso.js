import { j as e } from "./Card-ClR_k1CL.js";
import { D as t, E as n } from "./light-C7QIC2jc.js";
import { $t as r, Dt as i, Gt as a, Ht as o, Jt as s, Lt as c, Mt as l, Rt as u, St as d, Xt as f, _t as p, en as m, gt as h, ht as g, mt as _, ot as v, vt as y } from "./index-Dp5QXTAC.js";
var b = `v-hidden`, x = n(`[v-hidden]`, { display: `none!important` }), S = _({ name: `Overflow`, props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(n2, { slots: r2 }) {
  let a2 = s(null), o2 = s(null);
  function c2(e2) {
    let { value: t2 } = a2, { getCounter: i2, getTail: s2 } = n2, c3;
    if (c3 = i2 === void 0 ? o2.value : i2(), !t2 || !c3) return;
    c3.hasAttribute(b) && c3.removeAttribute(b);
    let { children: l3 } = t2;
    if (e2.showAllItemsBeforeCalculate) for (let e3 of l3) e3.hasAttribute(b) && e3.removeAttribute(b);
    let u2 = t2.offsetWidth, d2 = [], f2 = r2.tail ? s2 == null ? void 0 : s2() : null, p2 = f2 ? f2.offsetWidth : 0, m2 = false, h2 = t2.children.length - (r2.tail ? 1 : 0);
    for (let e3 = 0; e3 < h2 - 1; ++e3) {
      if (e3 < 0) continue;
      let t3 = l3[e3];
      if (m2) {
        t3.hasAttribute(b) || t3.setAttribute(b, ``);
        continue;
      } else t3.hasAttribute(b) && t3.removeAttribute(b);
      let r3 = t3.offsetWidth;
      if (p2 += r3, d2[e3] = r3, p2 > u2) {
        let { updateCounter: t4 } = n2;
        for (let r4 = e3; r4 >= 0; --r4) {
          let i3 = h2 - 1 - r4;
          t4 === void 0 ? c3.textContent = `${i3}` : t4(i3);
          let a3 = c3.offsetWidth;
          if (p2 -= d2[r4], p2 + a3 <= u2 || r4 === 0) {
            m2 = true, e3 = r4 - 1, f2 && (e3 === -1 ? (f2.style.maxWidth = `${u2 - a3}px`, f2.style.boxSizing = `border-box`) : f2.style.maxWidth = ``);
            let { onUpdateCount: t5 } = n2;
            t5 && t5(i3);
            break;
          }
        }
      }
    }
    let { onUpdateOverflow: g2 } = n2;
    m2 ? g2 !== void 0 && g2(true) : (g2 !== void 0 && g2(false), c3.setAttribute(b, ``));
  }
  let l2 = e();
  return x.mount({ id: `vueuc/overflow`, head: true, anchorMetaName: t, ssr: l2 }), i(() => c2({ showAllItemsBeforeCalculate: false })), { selfRef: a2, counterRef: o2, sync: c2 };
}, render() {
  let { $slots: e2 } = this;
  return d(() => this.sync({ showAllItemsBeforeCalculate: false })), h(`div`, { class: `v-overflow`, ref: `selfRef` }, [l(e2, `default`), e2.counter ? e2.counter() : h(`span`, { style: { display: `inline-block` }, ref: `counterRef` }), e2.tail ? e2.tail() : null]);
} });
function C(e2) {
  return o() ? (a(e2), true) : false;
}
var w = /* @__PURE__ */ new WeakMap(), T = (...e2) => {
  var _a;
  let t2 = e2[0], n2 = (_a = g()) == null ? void 0 : _a.proxy;
  if (n2 == null && !p()) throw Error(`injectLocal must be called in setup`);
  return n2 && w.has(n2) && t2 in w.get(n2) ? w.get(n2)[t2] : y(...e2);
}, E = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var D = Object.prototype.toString, O = (e2) => D.call(e2) === `[object Object]`;
function k(e2) {
  return e2.endsWith(`rem`) ? Number.parseFloat(e2) * 16 : Number.parseFloat(e2);
}
function A(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function j(e2) {
  return e2 || g();
}
function M(e2, t2 = true, n2) {
  j(n2) ? i(e2, n2) : t2 ? e2() : d(e2);
}
function N(e2, t2, n2) {
  return c(e2, t2, { ...n2, immediate: true });
}
var P = E ? window : void 0;
E && window.document, E && window.navigator, E && window.location;
function F(e2) {
  let t2 = r(e2);
  return (t2 == null ? void 0 : t2.$el) ?? t2;
}
function I(...e2) {
  let t2 = [], n2 = () => {
    t2.forEach((e3) => e3()), t2.length = 0;
  }, i2 = (e3, t3, n3, r2) => (e3.addEventListener(t3, n3, r2), () => e3.removeEventListener(t3, n3, r2)), a2 = v(() => {
    let t3 = A(r(e2[0])).filter((e3) => e3 != null);
    return t3.every((e3) => typeof e3 != `string`) ? t3 : void 0;
  }), o2 = N(() => {
    var _a;
    return [((_a = a2.value) == null ? void 0 : _a.map((e3) => F(e3))) ?? [P].filter((e3) => e3 != null), A(r(a2.value ? e2[1] : e2[0])), A(m(a2.value ? e2[2] : e2[1])), r(a2.value ? e2[3] : e2[2])];
  }, ([e3, r2, a3, o3]) => {
    if (n2(), !(e3 == null ? void 0 : e3.length) || !(r2 == null ? void 0 : r2.length) || !(a3 == null ? void 0 : a3.length)) return;
    let s2 = O(o3) ? { ...o3 } : o3;
    t2.push(...e3.flatMap((e4) => r2.flatMap((t3) => a3.map((n3) => i2(e4, t3, n3, s2)))));
  }, { flush: `post` });
  return C(n2), () => {
    o2(), n2();
  };
}
function L() {
  let e2 = f(false), t2 = g();
  return t2 && i(() => {
    e2.value = true;
  }, t2), e2;
}
function R(e2) {
  let t2 = L();
  return v(() => (t2.value, !!e2()));
}
var z = Symbol(`vueuse-ssr-width`);
function B() {
  let e2 = p() ? T(z, null) : null;
  return typeof e2 == `number` ? e2 : void 0;
}
function V(e2, t2 = {}) {
  let { window: n2 = P, ssrWidth: i2 = B() } = t2, a2 = R(() => n2 && `matchMedia` in n2 && typeof n2.matchMedia == `function`), o2 = f(typeof i2 == `number`), s2 = f(), c2 = f(false);
  return u(() => {
    if (o2.value) {
      o2.value = !a2.value, c2.value = r(e2).split(`,`).some((e3) => {
        let t3 = e3.includes(`not all`), n3 = e3.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), r2 = e3.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a3 = !!(n3 || r2);
        return n3 && a3 && (a3 = i2 >= k(n3[1])), r2 && a3 && (a3 = i2 <= k(r2[1])), t3 ? !a3 : a3;
      });
      return;
    }
    a2.value && (s2.value = n2.matchMedia(r(e2)), c2.value = s2.value.matches);
  }), I(s2, `change`, (e3) => {
    c2.value = e3.matches;
  }, { passive: true }), v(() => c2.value);
}
function H(e2 = {}) {
  let { window: t2 = P, initialWidth: n2 = 1 / 0, initialHeight: r2 = 1 / 0, listenOrientation: i2 = true, includeScrollbar: a2 = true, type: o2 = `inner` } = e2, s2 = f(n2), l2 = f(r2), u2 = () => {
    if (t2) if (o2 === `outer`) s2.value = t2.outerWidth, l2.value = t2.outerHeight;
    else if (o2 === `visual` && t2.visualViewport) {
      let { width: e3, height: n3, scale: r3 } = t2.visualViewport;
      s2.value = Math.round(e3 * r3), l2.value = Math.round(n3 * r3);
    } else a2 ? (s2.value = t2.innerWidth, l2.value = t2.innerHeight) : (s2.value = t2.document.documentElement.clientWidth, l2.value = t2.document.documentElement.clientHeight);
  };
  u2(), M(u2);
  let d2 = { passive: true };
  return I(`resize`, u2, d2), t2 && o2 === `visual` && t2.visualViewport && I(t2.visualViewport, `resize`, u2, d2), i2 && c(V(`(orientation: portrait)`), () => u2()), { width: s2, height: l2 };
}
export {
  S as n,
  H as t
};
