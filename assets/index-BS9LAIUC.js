import { ag as $, ah as G, ai as D } from "./light-BiBhEq9V.js";
import { d as Q, I as H, h as z, R as Y, b as L, k as V, q as P, ad as J, ae as K, a2 as x, af as U, i as X, G as b, j as E, ag as y, w as Z, v as q } from "./index-CFhMVeLy.js";
const p = "v-hidden", _ = G("[v-hidden]", { display: "none!important" }), me = Q({ name: "Overflow", props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(e, { slots: t }) {
  const o = L(null), l = L(null);
  function a(c) {
    const { value: n } = o, { getCounter: i, getTail: s } = e;
    let u;
    if (i !== void 0 ? u = i() : u = l.value, !n || !u) return;
    u.hasAttribute(p) && u.removeAttribute(p);
    const { children: v } = n;
    if (c.showAllItemsBeforeCalculate) for (const h of v) h.hasAttribute(p) && h.removeAttribute(p);
    const d = n.offsetWidth, f = [], r = t.tail ? s == null ? void 0 : s() : null;
    let g = r ? r.offsetWidth : 0, A = false;
    const N = n.children.length - (t.tail ? 1 : 0);
    for (let h = 0; h < N - 1; ++h) {
      if (h < 0) continue;
      const W = v[h];
      if (A) {
        W.hasAttribute(p) || W.setAttribute(p, "");
        continue;
      } else W.hasAttribute(p) && W.removeAttribute(p);
      const T = W.offsetWidth;
      if (g += T, f[h] = T, g > d) {
        const { updateCounter: F } = e;
        for (let w = h; w >= 0; --w) {
          const C = N - 1 - w;
          F !== void 0 ? F(C) : u.textContent = `${C}`;
          const k = u.offsetWidth;
          if (g -= f[w], g + k <= d || w === 0) {
            A = true, h = w - 1, r && (h === -1 ? (r.style.maxWidth = `${d - k}px`, r.style.boxSizing = "border-box") : r.style.maxWidth = "");
            const { onUpdateCount: R } = e;
            R && R(C);
            break;
          }
        }
      }
    }
    const { onUpdateOverflow: S } = e;
    A ? S !== void 0 && S(true) : (S !== void 0 && S(false), u.setAttribute(p, ""));
  }
  const m = $();
  return _.mount({ id: "vueuc/overflow", head: true, anchorMetaName: D, ssr: m }), V(() => a({ showAllItemsBeforeCalculate: false })), { selfRef: o, counterRef: l, sync: a };
}, render() {
  const { $slots: e } = this;
  return H(() => this.sync({ showAllItemsBeforeCalculate: false })), z("div", { class: "v-overflow", ref: "selfRef" }, [Y(e, "default"), e.counter ? e.counter() : z("span", { style: { display: "inline-block" }, ref: "counterRef" }), e.tail ? e.tail() : null]);
} });
function ee(e) {
  return J() ? (K(e), true) : false;
}
const I = /* @__PURE__ */ new WeakMap(), te = (...e) => {
  var t;
  const o = e[0], l = (t = x()) == null ? void 0 : t.proxy;
  if (l == null && !U()) throw new Error("injectLocal must be called in setup");
  return l && I.has(l) && o in I.get(l) ? I.get(l)[o] : X(...e);
}, ne = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const oe = Object.prototype.toString, ie = (e) => oe.call(e) === "[object Object]";
function B(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function M(e) {
  return Array.isArray(e) ? e : [e];
}
function se(e) {
  return x();
}
function ue(e, t = true, o) {
  se() ? V(e, o) : t ? e() : H(e);
}
function le(e, t, o) {
  return P(e, t, { ...o, immediate: true });
}
const j = ne ? window : void 0;
function re(e) {
  var t;
  const o = y(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function O(...e) {
  const t = [], o = () => {
    t.forEach((n) => n()), t.length = 0;
  }, l = (n, i, s, u) => (n.addEventListener(i, s, u), () => n.removeEventListener(i, s, u)), a = E(() => {
    const n = M(y(e[0])).filter((i) => i != null);
    return n.every((i) => typeof i != "string") ? n : void 0;
  }), m = le(() => {
    var n, i;
    return [(i = (n = a.value) == null ? void 0 : n.map((s) => re(s))) != null ? i : [j].filter((s) => s != null), M(y(a.value ? e[1] : e[0])), M(q(a.value ? e[2] : e[1])), y(a.value ? e[3] : e[2])];
  }, ([n, i, s, u]) => {
    if (o(), !(n == null ? void 0 : n.length) || !(i == null ? void 0 : i.length) || !(s == null ? void 0 : s.length)) return;
    const v = ie(u) ? { ...u } : u;
    t.push(...n.flatMap((d) => i.flatMap((f) => s.map((r) => l(d, f, r, v)))));
  }, { flush: "post" }), c = () => {
    m(), o();
  };
  return ee(o), c;
}
function ae() {
  const e = b(false), t = x();
  return t && V(() => {
    e.value = true;
  }, t), e;
}
function ce(e) {
  const t = ae();
  return E(() => (t.value, !!e()));
}
const de = Symbol("vueuse-ssr-width");
function fe() {
  const e = U() ? te(de, null) : null;
  return typeof e == "number" ? e : void 0;
}
function he(e, t = {}) {
  const { window: o = j, ssrWidth: l = fe() } = t, a = ce(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), m = b(typeof l == "number"), c = b(), n = b(false), i = (s) => {
    n.value = s.matches;
  };
  return Z(() => {
    if (m.value) {
      m.value = !a.value;
      const s = y(e).split(",");
      n.value = s.some((u) => {
        const v = u.includes("not all"), d = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), f = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let r = !!(d || f);
        return d && r && (r = l >= B(d[1])), f && r && (r = l <= B(f[1])), v ? !r : r;
      });
      return;
    }
    a.value && (c.value = o.matchMedia(y(e)), n.value = c.value.matches);
  }), O(c, "change", i, { passive: true }), E(() => n.value);
}
function we(e = {}) {
  const { window: t = j, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: l = Number.POSITIVE_INFINITY, listenOrientation: a = true, includeScrollbar: m = true, type: c = "inner" } = e, n = b(o), i = b(l), s = () => {
    if (t) if (c === "outer") n.value = t.outerWidth, i.value = t.outerHeight;
    else if (c === "visual" && t.visualViewport) {
      const { width: v, height: d, scale: f } = t.visualViewport;
      n.value = Math.round(v * f), i.value = Math.round(d * f);
    } else m ? (n.value = t.innerWidth, i.value = t.innerHeight) : (n.value = t.document.documentElement.clientWidth, i.value = t.document.documentElement.clientHeight);
  };
  s(), ue(s);
  const u = { passive: true };
  if (O("resize", s, u), t && c === "visual" && t.visualViewport && O(t.visualViewport, "resize", s, u), a) {
    const v = he("(orientation: portrait)");
    P(v, () => s());
  }
  return { width: n, height: i };
}
export {
  me as V,
  we as u
};
