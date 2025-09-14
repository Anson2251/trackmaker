var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as Ee, i as He, j as Y, v as so, p as dt, b as se, q as ft, h as B, X as jr, g as Vf, af as FC, O as Mn, c as As, o as Ls, a as Pr, r as sn, J as vo, k as vr, f as It, e as Fn, L as HC, M as OC, z as vl, F as Hn, Q as Fs, P as An, T as kC, t as Je, a7 as Kf, ag as DC, w as mo, B as cn, V as WC, m as bo, N as ms, R as Uf, ah as NC, W as Rd, l as jC, n as Id, ai as GC, a3 as VC, aj as KC, ak as UC, al as qf, am as co, an as qC, ao as YC, ae as Bd } from "./index-CSUogF-v.js";
/*!
* vue-router v4.5.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const ao = typeof document < "u";
function Yf(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t;
}
function XC(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && Yf(t.default);
}
const rt = Object.assign;
function Ja(t, r) {
  const o = {};
  for (const i in r) {
    const a = r[i];
    o[i] = gr(a) ? a.map(t) : t(a);
  }
  return o;
}
const Ko = () => {
}, gr = Array.isArray, Xf = /#/g, ZC = /&/g, QC = /\//g, JC = /=/g, e1 = /\?/g, Zf = /\+/g, t1 = /%5B/g, r1 = /%5D/g, Qf = /%5E/g, n1 = /%60/g, Jf = /%7B/g, o1 = /%7C/g, eh = /%7D/g, i1 = /%20/g;
function Hs(t) {
  return encodeURI("" + t).replace(o1, "|").replace(t1, "[").replace(r1, "]");
}
function l1(t) {
  return Hs(t).replace(Jf, "{").replace(eh, "}").replace(Qf, "^");
}
function bs(t) {
  return Hs(t).replace(Zf, "%2B").replace(i1, "+").replace(Xf, "%23").replace(ZC, "%26").replace(n1, "`").replace(Jf, "{").replace(eh, "}").replace(Qf, "^");
}
function a1(t) {
  return bs(t).replace(JC, "%3D");
}
function s1(t) {
  return Hs(t).replace(Xf, "%23").replace(e1, "%3F");
}
function c1(t) {
  return t == null ? "" : s1(t).replace(QC, "%2F");
}
function Yo(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {
  }
  return "" + t;
}
const u1 = /\/$/, d1 = (t) => t.replace(u1, "");
function es(t, r, o = "/") {
  let i, a = {}, c = "", u = "";
  const d = r.indexOf("#");
  let f = r.indexOf("?");
  return d < f && d >= 0 && (f = -1), f > -1 && (i = r.slice(0, f), c = r.slice(f + 1, d > -1 ? d : r.length), a = t(c)), d > -1 && (i = i || r.slice(0, d), u = r.slice(d, r.length)), i = g1(i ?? r, o), { fullPath: i + (c && "?") + c + u, path: i, query: a, hash: Yo(u) };
}
function f1(t, r) {
  const o = r.query ? t(r.query) : "";
  return r.path + (o && "?") + o + (r.hash || "");
}
function h1(t, r, o) {
  const i = r.matched.length - 1, a = o.matched.length - 1;
  return i > -1 && i === a && ho(r.matched[i], o.matched[a]) && th(r.params, o.params) && t(r.query) === t(o.query) && r.hash === o.hash;
}
function ho(t, r) {
  return (t.aliasOf || t) === (r.aliasOf || r);
}
function th(t, r) {
  if (Object.keys(t).length !== Object.keys(r).length) return false;
  for (const o in t) if (!p1(t[o], r[o])) return false;
  return true;
}
function p1(t, r) {
  return gr(t) ? Md(t, r) : gr(r) ? Md(r, t) : t === r;
}
function Md(t, r) {
  return gr(r) ? t.length === r.length && t.every((o, i) => o === r[i]) : t.length === 1 && t[0] === r;
}
function g1(t, r) {
  if (t.startsWith("/")) return t;
  if (!t) return r;
  const o = r.split("/"), i = t.split("/"), a = i[i.length - 1];
  (a === ".." || a === ".") && i.push("");
  let c = o.length - 1, u, d;
  for (u = 0; u < i.length; u++) if (d = i[u], d !== ".") if (d === "..") c > 1 && c--;
  else break;
  return o.slice(0, c).join("/") + "/" + i.slice(u).join("/");
}
const rn = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var Xo;
(function(t) {
  t.pop = "pop", t.push = "push";
})(Xo || (Xo = {}));
var ml;
(function(t) {
  t.back = "back", t.forward = "forward", t.unknown = "";
})(ml || (ml = {}));
const ts = "";
function v1(t) {
  if (!t) if (ao) {
    const r = document.querySelector("base");
    t = r && r.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "");
  } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), d1(t);
}
const m1 = /^[^#]+#/;
function b1(t, r) {
  return t.replace(m1, "#") + r;
}
function x1(t, r) {
  const o = document.documentElement.getBoundingClientRect(), i = t.getBoundingClientRect();
  return { behavior: r.behavior, left: i.left - o.left - (r.left || 0), top: i.top - o.top - (r.top || 0) };
}
const C1 = () => ({ left: window.scrollX, top: window.scrollY });
function y1(t) {
  let r;
  if ("el" in t) {
    const o = t.el, i = typeof o == "string" && o.startsWith("#"), a = typeof o == "string" ? i ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!a) return;
    r = x1(a, t);
  } else r = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(r) : window.scrollTo(r.left != null ? r.left : window.scrollX, r.top != null ? r.top : window.scrollY);
}
function Ad(t, r) {
  return (history.state ? history.state.position - r : -1) + t;
}
const xs = /* @__PURE__ */ new Map();
function w1(t, r) {
  xs.set(t, r);
}
function S1(t) {
  const r = xs.get(t);
  return xs.delete(t), r;
}
function PT(t = "") {
  let r = [], o = [[ts, {}]], i = 0;
  t = v1(t);
  function a(d, f = {}) {
    i++, i !== o.length && o.splice(i), o.push([d, f]);
  }
  function c(d, f, { direction: p, delta: g }) {
    const m = { direction: p, delta: g, type: Xo.pop };
    for (const C of r) C(d, f, m);
  }
  const u = { location: ts, state: {}, base: t, createHref: b1.bind(null, t), replace(d, f) {
    o.splice(i--, 1), a(d, f);
  }, push(d, f) {
    a(d, f);
  }, listen(d) {
    return r.push(d), () => {
      const f = r.indexOf(d);
      f > -1 && r.splice(f, 1);
    };
  }, destroy() {
    r = [], o = [[ts, {}]], i = 0;
  }, go(d, f = true) {
    const p = this.location, g = d < 0 ? ml.back : ml.forward;
    i = Math.max(0, Math.min(i + d, o.length - 1)), f && c(this.location, p, { direction: g, delta: d });
  } };
  return Object.defineProperty(u, "location", { enumerable: true, get: () => o[i][0] }), Object.defineProperty(u, "state", { enumerable: true, get: () => o[i][1] }), u;
}
function $1(t) {
  return typeof t == "string" || t && typeof t == "object";
}
function rh(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const nh = Symbol("");
var Ld;
(function(t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated";
})(Ld || (Ld = {}));
function po(t, r) {
  return rt(new Error(), { type: t, [nh]: true }, r);
}
function Dr(t, r) {
  return t instanceof Error && nh in t && (r == null || !!(t.type & r));
}
const Fd = "[^/]+?", P1 = { sensitive: false, strict: false, start: true, end: true }, _1 = /[.+*?^${}()[\]/\\]/g;
function T1(t, r) {
  const o = rt({}, P1, r), i = [];
  let a = o.start ? "^" : "";
  const c = [];
  for (const p of t) {
    const g = p.length ? [] : [90];
    o.strict && !p.length && (a += "/");
    for (let m = 0; m < p.length; m++) {
      const C = p[m];
      let x = 40 + (o.sensitive ? 0.25 : 0);
      if (C.type === 0) m || (a += "/"), a += C.value.replace(_1, "\\$&"), x += 40;
      else if (C.type === 1) {
        const { value: y, repeatable: P, optional: _, regexp: $ } = C;
        c.push({ name: y, repeatable: P, optional: _ });
        const R = $ || Fd;
        if (R !== Fd) {
          x += 10;
          try {
            new RegExp(`(${R})`);
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${y}" (${R}): ` + I.message);
          }
        }
        let L = P ? `((?:${R})(?:/(?:${R}))*)` : `(${R})`;
        m || (L = _ && p.length < 2 ? `(?:/${L})` : "/" + L), _ && (L += "?"), a += L, x += 20, _ && (x += -8), P && (x += -20), R === ".*" && (x += -50);
      }
      g.push(x);
    }
    i.push(g);
  }
  if (o.strict && o.end) {
    const p = i.length - 1;
    i[p][i[p].length - 1] += 0.7000000000000001;
  }
  o.strict || (a += "/?"), o.end ? a += "$" : o.strict && !a.endsWith("/") && (a += "(?:/|$)");
  const u = new RegExp(a, o.sensitive ? "" : "i");
  function d(p) {
    const g = p.match(u), m = {};
    if (!g) return null;
    for (let C = 1; C < g.length; C++) {
      const x = g[C] || "", y = c[C - 1];
      m[y.name] = x && y.repeatable ? x.split("/") : x;
    }
    return m;
  }
  function f(p) {
    let g = "", m = false;
    for (const C of t) {
      (!m || !g.endsWith("/")) && (g += "/"), m = false;
      for (const x of C) if (x.type === 0) g += x.value;
      else if (x.type === 1) {
        const { value: y, repeatable: P, optional: _ } = x, $ = y in p ? p[y] : "";
        if (gr($) && !P) throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
        const R = gr($) ? $.join("/") : $;
        if (!R) if (_) C.length < 2 && (g.endsWith("/") ? g = g.slice(0, -1) : m = true);
        else throw new Error(`Missing required param "${y}"`);
        g += R;
      }
    }
    return g || "/";
  }
  return { re: u, score: i, keys: c, parse: d, stringify: f };
}
function E1(t, r) {
  let o = 0;
  for (; o < t.length && o < r.length; ) {
    const i = r[o] - t[o];
    if (i) return i;
    o++;
  }
  return t.length < r.length ? t.length === 1 && t[0] === 80 ? -1 : 1 : t.length > r.length ? r.length === 1 && r[0] === 80 ? 1 : -1 : 0;
}
function oh(t, r) {
  let o = 0;
  const i = t.score, a = r.score;
  for (; o < i.length && o < a.length; ) {
    const c = E1(i[o], a[o]);
    if (c) return c;
    o++;
  }
  if (Math.abs(a.length - i.length) === 1) {
    if (Hd(i)) return 1;
    if (Hd(a)) return -1;
  }
  return a.length - i.length;
}
function Hd(t) {
  const r = t[t.length - 1];
  return t.length > 0 && r[r.length - 1] < 0;
}
const z1 = { type: 0, value: "" }, R1 = /[a-zA-Z0-9_]/;
function I1(t) {
  if (!t) return [[]];
  if (t === "/") return [[z1]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function r(x) {
    throw new Error(`ERR (${o})/"${p}": ${x}`);
  }
  let o = 0, i = o;
  const a = [];
  let c;
  function u() {
    c && a.push(c), c = [];
  }
  let d = 0, f, p = "", g = "";
  function m() {
    p && (o === 0 ? c.push({ type: 0, value: p }) : o === 1 || o === 2 || o === 3 ? (c.length > 1 && (f === "*" || f === "+") && r(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`), c.push({ type: 1, value: p, regexp: g, repeatable: f === "*" || f === "+", optional: f === "*" || f === "?" })) : r("Invalid state to consume buffer"), p = "");
  }
  function C() {
    p += f;
  }
  for (; d < t.length; ) {
    if (f = t[d++], f === "\\" && o !== 2) {
      i = o, o = 4;
      continue;
    }
    switch (o) {
      case 0:
        f === "/" ? (p && m(), u()) : f === ":" ? (m(), o = 1) : C();
        break;
      case 4:
        C(), o = i;
        break;
      case 1:
        f === "(" ? o = 2 : R1.test(f) ? C() : (m(), o = 0, f !== "*" && f !== "?" && f !== "+" && d--);
        break;
      case 2:
        f === ")" ? g[g.length - 1] == "\\" ? g = g.slice(0, -1) + f : o = 3 : g += f;
        break;
      case 3:
        m(), o = 0, f !== "*" && f !== "?" && f !== "+" && d--, g = "";
        break;
      default:
        r("Unknown state");
        break;
    }
  }
  return o === 2 && r(`Unfinished custom RegExp for param "${p}"`), m(), u(), a;
}
function B1(t, r, o) {
  const i = T1(I1(t.path), o), a = rt(i, { record: t, parent: r, children: [], alias: [] });
  return r && !a.record.aliasOf == !r.record.aliasOf && r.children.push(a), a;
}
function M1(t, r) {
  const o = [], i = /* @__PURE__ */ new Map();
  r = Wd({ strict: false, end: true, sensitive: false }, r);
  function a(m) {
    return i.get(m);
  }
  function c(m, C, x) {
    const y = !x, P = kd(m);
    P.aliasOf = x && x.record;
    const _ = Wd(r, m), $ = [P];
    if ("alias" in m) {
      const I = typeof m.alias == "string" ? [m.alias] : m.alias;
      for (const F of I) $.push(kd(rt({}, P, { components: x ? x.record.components : P.components, path: F, aliasOf: x ? x.record : P })));
    }
    let R, L;
    for (const I of $) {
      const { path: F } = I;
      if (C && F[0] !== "/") {
        const k = C.record.path, S = k[k.length - 1] === "/" ? "" : "/";
        I.path = C.record.path + (F && S + F);
      }
      if (R = B1(I, C, _), x ? x.alias.push(R) : (L = L || R, L !== R && L.alias.push(R), y && m.name && !Dd(R) && u(m.name)), ih(R) && f(R), P.children) {
        const k = P.children;
        for (let S = 0; S < k.length; S++) c(k[S], R, x && x.children[S]);
      }
      x = x || R;
    }
    return L ? () => {
      u(L);
    } : Ko;
  }
  function u(m) {
    if (rh(m)) {
      const C = i.get(m);
      C && (i.delete(m), o.splice(o.indexOf(C), 1), C.children.forEach(u), C.alias.forEach(u));
    } else {
      const C = o.indexOf(m);
      C > -1 && (o.splice(C, 1), m.record.name && i.delete(m.record.name), m.children.forEach(u), m.alias.forEach(u));
    }
  }
  function d() {
    return o;
  }
  function f(m) {
    const C = F1(m, o);
    o.splice(C, 0, m), m.record.name && !Dd(m) && i.set(m.record.name, m);
  }
  function p(m, C) {
    let x, y = {}, P, _;
    if ("name" in m && m.name) {
      if (x = i.get(m.name), !x) throw po(1, { location: m });
      _ = x.record.name, y = rt(Od(C.params, x.keys.filter((L) => !L.optional).concat(x.parent ? x.parent.keys.filter((L) => L.optional) : []).map((L) => L.name)), m.params && Od(m.params, x.keys.map((L) => L.name))), P = x.stringify(y);
    } else if (m.path != null) P = m.path, x = o.find((L) => L.re.test(P)), x && (y = x.parse(P), _ = x.record.name);
    else {
      if (x = C.name ? i.get(C.name) : o.find((L) => L.re.test(C.path)), !x) throw po(1, { location: m, currentLocation: C });
      _ = x.record.name, y = rt({}, C.params, m.params), P = x.stringify(y);
    }
    const $ = [];
    let R = x;
    for (; R; ) $.unshift(R.record), R = R.parent;
    return { name: _, path: P, params: y, matched: $, meta: L1($) };
  }
  t.forEach((m) => c(m));
  function g() {
    o.length = 0, i.clear();
  }
  return { addRoute: c, resolve: p, removeRoute: u, clearRoutes: g, getRoutes: d, getRecordMatcher: a };
}
function Od(t, r) {
  const o = {};
  for (const i of r) i in t && (o[i] = t[i]);
  return o;
}
function kd(t) {
  const r = { path: t.path, redirect: t.redirect, name: t.name, meta: t.meta || {}, aliasOf: t.aliasOf, beforeEnter: t.beforeEnter, props: A1(t), children: t.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in t ? t.components || null : t.component && { default: t.component } };
  return Object.defineProperty(r, "mods", { value: {} }), r;
}
function A1(t) {
  const r = {}, o = t.props || false;
  if ("component" in t) r.default = o;
  else for (const i in t.components) r[i] = typeof o == "object" ? o[i] : o;
  return r;
}
function Dd(t) {
  for (; t; ) {
    if (t.record.aliasOf) return true;
    t = t.parent;
  }
  return false;
}
function L1(t) {
  return t.reduce((r, o) => rt(r, o.meta), {});
}
function Wd(t, r) {
  const o = {};
  for (const i in t) o[i] = i in r ? r[i] : t[i];
  return o;
}
function F1(t, r) {
  let o = 0, i = r.length;
  for (; o !== i; ) {
    const c = o + i >> 1;
    oh(t, r[c]) < 0 ? i = c : o = c + 1;
  }
  const a = H1(t);
  return a && (i = r.lastIndexOf(a, i - 1)), i;
}
function H1(t) {
  let r = t;
  for (; r = r.parent; ) if (ih(r) && oh(t, r) === 0) return r;
}
function ih({ record: t }) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect);
}
function O1(t) {
  const r = {};
  if (t === "" || t === "?") return r;
  const i = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let a = 0; a < i.length; ++a) {
    const c = i[a].replace(Zf, " "), u = c.indexOf("="), d = Yo(u < 0 ? c : c.slice(0, u)), f = u < 0 ? null : Yo(c.slice(u + 1));
    if (d in r) {
      let p = r[d];
      gr(p) || (p = r[d] = [p]), p.push(f);
    } else r[d] = f;
  }
  return r;
}
function Nd(t) {
  let r = "";
  for (let o in t) {
    const i = t[o];
    if (o = a1(o), i == null) {
      i !== void 0 && (r += (r.length ? "&" : "") + o);
      continue;
    }
    (gr(i) ? i.map((c) => c && bs(c)) : [i && bs(i)]).forEach((c) => {
      c !== void 0 && (r += (r.length ? "&" : "") + o, c != null && (r += "=" + c));
    });
  }
  return r;
}
function k1(t) {
  const r = {};
  for (const o in t) {
    const i = t[o];
    i !== void 0 && (r[o] = gr(i) ? i.map((a) => a == null ? null : "" + a) : i == null ? i : "" + i);
  }
  return r;
}
const D1 = Symbol(""), jd = Symbol(""), Os = Symbol(""), ks = Symbol(""), Cs = Symbol("");
function Do() {
  let t = [];
  function r(i) {
    return t.push(i), () => {
      const a = t.indexOf(i);
      a > -1 && t.splice(a, 1);
    };
  }
  function o() {
    t = [];
  }
  return { add: r, list: () => t.slice(), reset: o };
}
function ln(t, r, o, i, a, c = (u) => u()) {
  const u = i && (i.enterCallbacks[a] = i.enterCallbacks[a] || []);
  return () => new Promise((d, f) => {
    const p = (C) => {
      C === false ? f(po(4, { from: o, to: r })) : C instanceof Error ? f(C) : $1(C) ? f(po(2, { from: r, to: C })) : (u && i.enterCallbacks[a] === u && typeof C == "function" && u.push(C), d());
    }, g = c(() => t.call(i && i.instances[a], r, o, p));
    let m = Promise.resolve(g);
    t.length < 3 && (m = m.then(p)), m.catch((C) => f(C));
  });
}
function rs(t, r, o, i, a = (c) => c()) {
  const c = [];
  for (const u of t) for (const d in u.components) {
    let f = u.components[d];
    if (!(r !== "beforeRouteEnter" && !u.instances[d])) if (Yf(f)) {
      const g = (f.__vccOpts || f)[r];
      g && c.push(ln(g, o, i, u, d, a));
    } else {
      let p = f();
      c.push(() => p.then((g) => {
        if (!g) throw new Error(`Couldn't resolve component "${d}" at "${u.path}"`);
        const m = XC(g) ? g.default : g;
        u.mods[d] = g, u.components[d] = m;
        const x = (m.__vccOpts || m)[r];
        return x && ln(x, o, i, u, d, a)();
      }));
    }
  }
  return c;
}
function Gd(t) {
  const r = He(Os), o = He(ks), i = Y(() => {
    const f = so(t.to);
    return r.resolve(f);
  }), a = Y(() => {
    const { matched: f } = i.value, { length: p } = f, g = f[p - 1], m = o.matched;
    if (!g || !m.length) return -1;
    const C = m.findIndex(ho.bind(null, g));
    if (C > -1) return C;
    const x = Vd(f[p - 2]);
    return p > 1 && Vd(g) === x && m[m.length - 1].path !== x ? m.findIndex(ho.bind(null, f[p - 2])) : C;
  }), c = Y(() => a.value > -1 && V1(o.params, i.value.params)), u = Y(() => a.value > -1 && a.value === o.matched.length - 1 && th(o.params, i.value.params));
  function d(f = {}) {
    if (G1(f)) {
      const p = r[so(t.replace) ? "replace" : "push"](so(t.to)).catch(Ko);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => p), p;
    }
    return Promise.resolve();
  }
  return { route: i, href: Y(() => i.value.href), isActive: c, isExactActive: u, navigate: d };
}
function W1(t) {
  return t.length === 1 ? t[0] : t;
}
const N1 = Ee({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: Gd, setup(t, { slots: r }) {
  const o = Vf(Gd(t)), { options: i } = He(Os), a = Y(() => ({ [Kd(t.activeClass, i.linkActiveClass, "router-link-active")]: o.isActive, [Kd(t.exactActiveClass, i.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive }));
  return () => {
    const c = r.default && W1(r.default(o));
    return t.custom ? c : B("a", { "aria-current": o.isExactActive ? t.ariaCurrentValue : null, href: o.href, onClick: o.navigate, class: a.value }, c);
  };
} }), j1 = N1;
function G1(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const r = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(r)) return;
    }
    return t.preventDefault && t.preventDefault(), true;
  }
}
function V1(t, r) {
  for (const o in r) {
    const i = r[o], a = t[o];
    if (typeof i == "string") {
      if (i !== a) return false;
    } else if (!gr(a) || a.length !== i.length || i.some((c, u) => c !== a[u])) return false;
  }
  return true;
}
function Vd(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : "";
}
const Kd = (t, r, o) => t ?? r ?? o, K1 = Ee({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(t, { attrs: r, slots: o }) {
  const i = He(Cs), a = Y(() => t.route || i.value), c = He(jd, 0), u = Y(() => {
    let p = so(c);
    const { matched: g } = a.value;
    let m;
    for (; (m = g[p]) && !m.components; ) p++;
    return p;
  }), d = Y(() => a.value.matched[u.value]);
  dt(jd, Y(() => u.value + 1)), dt(D1, d), dt(Cs, a);
  const f = se();
  return ft(() => [f.value, d.value, t.name], ([p, g, m], [C, x, y]) => {
    g && (g.instances[m] = p, x && x !== g && p && p === C && (g.leaveGuards.size || (g.leaveGuards = x.leaveGuards), g.updateGuards.size || (g.updateGuards = x.updateGuards))), p && g && (!x || !ho(g, x) || !C) && (g.enterCallbacks[m] || []).forEach((P) => P(p));
  }, { flush: "post" }), () => {
    const p = a.value, g = t.name, m = d.value, C = m && m.components[g];
    if (!C) return Ud(o.default, { Component: C, route: p });
    const x = m.props[g], y = x ? x === true ? p.params : typeof x == "function" ? x(p) : x : null, _ = B(C, rt({}, y, r, { onVnodeUnmounted: ($) => {
      $.component.isUnmounted && (m.instances[g] = null);
    }, ref: f }));
    return Ud(o.default, { Component: _, route: p }) || _;
  };
} });
function Ud(t, r) {
  if (!t) return null;
  const o = t(r);
  return o.length === 1 ? o[0] : o;
}
const U1 = K1;
function _T(t) {
  const r = M1(t.routes, t), o = t.parseQuery || O1, i = t.stringifyQuery || Nd, a = t.history, c = Do(), u = Do(), d = Do(), f = jr(rn);
  let p = rn;
  ao && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const g = Ja.bind(null, (O) => "" + O), m = Ja.bind(null, c1), C = Ja.bind(null, Yo);
  function x(O, te) {
    let K, he;
    return rh(O) ? (K = r.getRecordMatcher(O), he = te) : he = O, r.addRoute(he, K);
  }
  function y(O) {
    const te = r.getRecordMatcher(O);
    te && r.removeRoute(te);
  }
  function P() {
    return r.getRoutes().map((O) => O.record);
  }
  function _(O) {
    return !!r.getRecordMatcher(O);
  }
  function $(O, te) {
    if (te = rt({}, te || f.value), typeof O == "string") {
      const ge = es(o, O, te.path), Ge = r.resolve({ path: ge.path }, te), jt = a.createHref(ge.fullPath);
      return rt(ge, Ge, { params: C(Ge.params), hash: Yo(ge.hash), redirectedFrom: void 0, href: jt });
    }
    let K;
    if (O.path != null) K = rt({}, O, { path: es(o, O.path, te.path).path });
    else {
      const ge = rt({}, O.params);
      for (const Ge in ge) ge[Ge] == null && delete ge[Ge];
      K = rt({}, O, { params: m(ge) }), te.params = m(te.params);
    }
    const he = r.resolve(K, te), Me = O.hash || "";
    he.params = g(C(he.params));
    const je = f1(i, rt({}, O, { hash: l1(Me), path: he.path })), we = a.createHref(je);
    return rt({ fullPath: je, hash: Me, query: i === Nd ? k1(O.query) : O.query || {} }, he, { redirectedFrom: void 0, href: we });
  }
  function R(O) {
    return typeof O == "string" ? es(o, O, f.value.path) : rt({}, O);
  }
  function L(O, te) {
    if (p !== O) return po(8, { from: te, to: O });
  }
  function I(O) {
    return S(O);
  }
  function F(O) {
    return I(rt(R(O), { replace: true }));
  }
  function k(O) {
    const te = O.matched[O.matched.length - 1];
    if (te && te.redirect) {
      const { redirect: K } = te;
      let he = typeof K == "function" ? K(O) : K;
      return typeof he == "string" && (he = he.includes("?") || he.includes("#") ? he = R(he) : { path: he }, he.params = {}), rt({ query: O.query, hash: O.hash, params: he.path != null ? {} : O.params }, he);
    }
  }
  function S(O, te) {
    const K = p = $(O), he = f.value, Me = O.state, je = O.force, we = O.replace === true, ge = k(K);
    if (ge) return S(rt(R(ge), { state: typeof ge == "object" ? rt({}, Me, ge.state) : Me, force: je, replace: we }), te || K);
    const Ge = K;
    Ge.redirectedFrom = te;
    let jt;
    return !je && h1(i, he, K) && (jt = po(16, { to: Ge, from: he }), Le(he, he, true, false)), (jt ? Promise.resolve(jt) : V(Ge, he)).catch((Ue) => Dr(Ue) ? Dr(Ue, 2) ? Ue : ze(Ue) : ue(Ue, Ge, he)).then((Ue) => {
      if (Ue) {
        if (Dr(Ue, 2)) return S(rt({ replace: we }, R(Ue.to), { state: typeof Ue.to == "object" ? rt({}, Me, Ue.to.state) : Me, force: je }), te || Ge);
      } else Ue = W(Ge, he, true, we, Me);
      return J(Ge, he, Ue), Ue;
    });
  }
  function M(O, te) {
    const K = L(O, te);
    return K ? Promise.reject(K) : Promise.resolve();
  }
  function A(O) {
    const te = xt.values().next().value;
    return te && typeof te.runWithContext == "function" ? te.runWithContext(O) : O();
  }
  function V(O, te) {
    let K;
    const [he, Me, je] = q1(O, te);
    K = rs(he.reverse(), "beforeRouteLeave", O, te);
    for (const ge of he) ge.leaveGuards.forEach((Ge) => {
      K.push(ln(Ge, O, te));
    });
    const we = M.bind(null, O, te);
    return K.push(we), Pe(K).then(() => {
      K = [];
      for (const ge of c.list()) K.push(ln(ge, O, te));
      return K.push(we), Pe(K);
    }).then(() => {
      K = rs(Me, "beforeRouteUpdate", O, te);
      for (const ge of Me) ge.updateGuards.forEach((Ge) => {
        K.push(ln(Ge, O, te));
      });
      return K.push(we), Pe(K);
    }).then(() => {
      K = [];
      for (const ge of je) if (ge.beforeEnter) if (gr(ge.beforeEnter)) for (const Ge of ge.beforeEnter) K.push(ln(Ge, O, te));
      else K.push(ln(ge.beforeEnter, O, te));
      return K.push(we), Pe(K);
    }).then(() => (O.matched.forEach((ge) => ge.enterCallbacks = {}), K = rs(je, "beforeRouteEnter", O, te, A), K.push(we), Pe(K))).then(() => {
      K = [];
      for (const ge of u.list()) K.push(ln(ge, O, te));
      return K.push(we), Pe(K);
    }).catch((ge) => Dr(ge, 8) ? ge : Promise.reject(ge));
  }
  function J(O, te, K) {
    d.list().forEach((he) => A(() => he(O, te, K)));
  }
  function W(O, te, K, he, Me) {
    const je = L(O, te);
    if (je) return je;
    const we = te === rn, ge = ao ? history.state : {};
    K && (he || we ? a.replace(O.fullPath, rt({ scroll: we && ge && ge.scroll }, Me)) : a.push(O.fullPath, Me)), f.value = O, Le(O, te, K, we), ze();
  }
  let oe;
  function re() {
    oe || (oe = a.listen((O, te, K) => {
      if (!Tt.listening) return;
      const he = $(O), Me = k(he);
      if (Me) {
        S(rt(Me, { replace: true, force: true }), he).catch(Ko);
        return;
      }
      p = he;
      const je = f.value;
      ao && w1(Ad(je.fullPath, K.delta), C1()), V(he, je).catch((we) => Dr(we, 12) ? we : Dr(we, 2) ? (S(rt(R(we.to), { force: true }), he).then((ge) => {
        Dr(ge, 20) && !K.delta && K.type === Xo.pop && a.go(-1, false);
      }).catch(Ko), Promise.reject()) : (K.delta && a.go(-K.delta, false), ue(we, he, je))).then((we) => {
        we = we || W(he, je, false), we && (K.delta && !Dr(we, 8) ? a.go(-K.delta, false) : K.type === Xo.pop && Dr(we, 20) && a.go(-1, false)), J(he, je, we);
      }).catch(Ko);
    }));
  }
  let G = Do(), ie = Do(), U;
  function ue(O, te, K) {
    ze(O);
    const he = ie.list();
    return he.length ? he.forEach((Me) => Me(O, te, K)) : console.error(O), Promise.reject(O);
  }
  function Be() {
    return U && f.value !== rn ? Promise.resolve() : new Promise((O, te) => {
      G.add([O, te]);
    });
  }
  function ze(O) {
    return U || (U = !O, re(), G.list().forEach(([te, K]) => O ? K(O) : te()), G.reset()), O;
  }
  function Le(O, te, K, he) {
    const { scrollBehavior: Me } = t;
    if (!ao || !Me) return Promise.resolve();
    const je = !K && S1(Ad(O.fullPath, 0)) || (he || !K) && history.state && history.state.scroll || null;
    return Mn().then(() => Me(O, te, je)).then((we) => we && y1(we)).catch((we) => ue(we, O, te));
  }
  const Oe = (O) => a.go(O);
  let mt;
  const xt = /* @__PURE__ */ new Set(), Tt = { currentRoute: f, listening: true, addRoute: x, removeRoute: y, clearRoutes: r.clearRoutes, hasRoute: _, getRoutes: P, resolve: $, options: t, push: I, replace: F, go: Oe, back: () => Oe(-1), forward: () => Oe(1), beforeEach: c.add, beforeResolve: u.add, afterEach: d.add, onError: ie.add, isReady: Be, install(O) {
    const te = this;
    O.component("RouterLink", j1), O.component("RouterView", U1), O.config.globalProperties.$router = te, Object.defineProperty(O.config.globalProperties, "$route", { enumerable: true, get: () => so(f) }), ao && !mt && f.value === rn && (mt = true, I(a.location).catch((Me) => {
    }));
    const K = {};
    for (const Me in rn) Object.defineProperty(K, Me, { get: () => f.value[Me], enumerable: true });
    O.provide(Os, te), O.provide(ks, FC(K)), O.provide(Cs, f);
    const he = O.unmount;
    xt.add(O), O.unmount = function() {
      xt.delete(O), xt.size < 1 && (p = rn, oe && oe(), oe = null, f.value = rn, mt = false, U = false), he();
    };
  } };
  function Pe(O) {
    return O.reduce((te, K) => te.then(() => A(K)), Promise.resolve());
  }
  return Tt;
}
function q1(t, r) {
  const o = [], i = [], a = [], c = Math.max(r.matched.length, t.matched.length);
  for (let u = 0; u < c; u++) {
    const d = r.matched[u];
    d && (t.matched.find((p) => ho(p, d)) ? i.push(d) : o.push(d));
    const f = t.matched[u];
    f && (r.matched.find((p) => ho(p, f)) || a.push(f));
  }
  return [o, i, a];
}
function TT(t) {
  return He(ks);
}
const Y1 = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, ET = Ee({ name: "Map", render: function(r, o) {
  return Ls(), As("svg", Y1, o[0] || (o[0] = [Pr("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Pr("path", { d: "M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3V7" }), Pr("path", { d: "M9 4v13" }), Pr("path", { d: "M15 7v13" })], -1)]));
} }), X1 = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, zT = Ee({ name: "MapPin", render: function(r, o) {
  return Ls(), As("svg", X1, o[0] || (o[0] = [Pr("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Pr("circle", { cx: "12", cy: "11", r: "3" }), Pr("path", { d: "M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" })], -1)]));
} }), Z1 = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, RT = Ee({ name: "Settings", render: function(r, o) {
  return Ls(), As("svg", Z1, o[0] || (o[0] = [Pr("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Pr("path", { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z" }), Pr("circle", { cx: "12", cy: "12", r: "3" })], -1)]));
} });
function Q1(t) {
  let r = ".", o = "__", i = "--", a;
  if (t) {
    let y = t.blockPrefix;
    y && (r = y), y = t.elementPrefix, y && (o = y), y = t.modifierPrefix, y && (i = y);
  }
  const c = { install(y) {
    a = y.c;
    const P = y.context;
    P.bem = {}, P.bem.b = null, P.bem.els = null;
  } };
  function u(y) {
    let P, _;
    return { before($) {
      P = $.bem.b, _ = $.bem.els, $.bem.els = null;
    }, after($) {
      $.bem.b = P, $.bem.els = _;
    }, $({ context: $, props: R }) {
      return y = typeof y == "string" ? y : y({ context: $, props: R }), $.bem.b = y, `${(R == null ? void 0 : R.bPrefix) || r}${$.bem.b}`;
    } };
  }
  function d(y) {
    let P;
    return { before(_) {
      P = _.bem.els;
    }, after(_) {
      _.bem.els = P;
    }, $({ context: _, props: $ }) {
      return y = typeof y == "string" ? y : y({ context: _, props: $ }), _.bem.els = y.split(",").map((R) => R.trim()), _.bem.els.map((R) => `${($ == null ? void 0 : $.bPrefix) || r}${_.bem.b}${o}${R}`).join(", ");
    } };
  }
  function f(y) {
    return { $({ context: P, props: _ }) {
      y = typeof y == "string" ? y : y({ context: P, props: _ });
      const $ = y.split(",").map((I) => I.trim());
      function R(I) {
        return $.map((F) => `&${(_ == null ? void 0 : _.bPrefix) || r}${P.bem.b}${I !== void 0 ? `${o}${I}` : ""}${i}${F}`).join(", ");
      }
      const L = P.bem.els;
      return L !== null ? R(L[0]) : R();
    } };
  }
  function p(y) {
    return { $({ context: P, props: _ }) {
      y = typeof y == "string" ? y : y({ context: P, props: _ });
      const $ = P.bem.els;
      return `&:not(${(_ == null ? void 0 : _.bPrefix) || r}${P.bem.b}${$ !== null && $.length > 0 ? `${o}${$[0]}` : ""}${i}${y})`;
    } };
  }
  return Object.assign(c, { cB: ((...y) => a(u(y[0]), y[1], y[2])), cE: ((...y) => a(d(y[0]), y[1], y[2])), cM: ((...y) => a(f(y[0]), y[1], y[2])), cNotM: ((...y) => a(p(y[0]), y[1], y[2])) }), c;
}
function J1(t) {
  let r = 0;
  for (let o = 0; o < t.length; ++o) t[o] === "&" && ++r;
  return r;
}
const lh = /\s*,(?![^(]*\))\s*/g, ey = /\s+/g;
function ty(t, r) {
  const o = [];
  return r.split(lh).forEach((i) => {
    let a = J1(i);
    if (a) {
      if (a === 1) {
        t.forEach((u) => {
          o.push(i.replace("&", u));
        });
        return;
      }
    } else {
      t.forEach((u) => {
        o.push((u && u + " ") + i);
      });
      return;
    }
    let c = [i];
    for (; a--; ) {
      const u = [];
      c.forEach((d) => {
        t.forEach((f) => {
          u.push(d.replace("&", f));
        });
      }), c = u;
    }
    c.forEach((u) => o.push(u));
  }), o;
}
function ry(t, r) {
  const o = [];
  return r.split(lh).forEach((i) => {
    t.forEach((a) => {
      o.push((a && a + " ") + i);
    });
  }), o;
}
function ny(t) {
  let r = [""];
  return t.forEach((o) => {
    o = o && o.trim(), o && (o.includes("&") ? r = ty(r, o) : r = ry(r, o));
  }), r.join(", ").replace(ey, " ");
}
function qd(t) {
  if (!t) return;
  const r = t.parentElement;
  r && r.removeChild(t);
}
function wl(t, r) {
  return (r ?? document.head).querySelector(`style[cssr-id="${t}"]`);
}
function oy(t) {
  const r = document.createElement("style");
  return r.setAttribute("cssr-id", t), r;
}
function rl(t) {
  return t ? /^\s*@(s|m)/.test(t) : false;
}
const iy = /[A-Z]/g;
function ah(t) {
  return t.replace(iy, (r) => "-" + r.toLowerCase());
}
function ly(t, r = "  ") {
  return typeof t == "object" && t !== null ? ` {
` + Object.entries(t).map((o) => r + `  ${ah(o[0])}: ${o[1]};`).join(`
`) + `
` + r + "}" : `: ${t};`;
}
function ay(t, r, o) {
  return typeof t == "function" ? t({ context: r.context, props: o }) : t;
}
function Yd(t, r, o, i) {
  if (!r) return "";
  const a = ay(r, o, i);
  if (!a) return "";
  if (typeof a == "string") return `${t} {
${a}
}`;
  const c = Object.keys(a);
  if (c.length === 0) return o.config.keepEmptyBlock ? t + ` {
}` : "";
  const u = t ? [t + " {"] : [];
  return c.forEach((d) => {
    const f = a[d];
    if (d === "raw") {
      u.push(`
` + f + `
`);
      return;
    }
    d = ah(d), f != null && u.push(`  ${d}${ly(f)}`);
  }), t && u.push("}"), u.join(`
`);
}
function ys(t, r, o) {
  t && t.forEach((i) => {
    if (Array.isArray(i)) ys(i, r, o);
    else if (typeof i == "function") {
      const a = i(r);
      Array.isArray(a) ? ys(a, r, o) : a && o(a);
    } else i && o(i);
  });
}
function sh(t, r, o, i, a) {
  const c = t.$;
  let u = "";
  if (!c || typeof c == "string") rl(c) ? u = c : r.push(c);
  else if (typeof c == "function") {
    const p = c({ context: i.context, props: a });
    rl(p) ? u = p : r.push(p);
  } else if (c.before && c.before(i.context), !c.$ || typeof c.$ == "string") rl(c.$) ? u = c.$ : r.push(c.$);
  else if (c.$) {
    const p = c.$({ context: i.context, props: a });
    rl(p) ? u = p : r.push(p);
  }
  const d = ny(r), f = Yd(d, t.props, i, a);
  u ? o.push(`${u} {`) : f.length && o.push(f), t.children && ys(t.children, { context: i.context, props: a }, (p) => {
    if (typeof p == "string") {
      const g = Yd(d, { raw: p }, i, a);
      o.push(g);
    } else sh(p, r, o, i, a);
  }), r.pop(), u && o.push("}"), c && c.after && c.after(i.context);
}
function sy(t, r, o) {
  const i = [];
  return sh(t, [], i, r, o), i.join(`

`);
}
function Zo(t) {
  for (var r = 0, o, i = 0, a = t.length; a >= 4; ++i, a -= 4) o = t.charCodeAt(i) & 255 | (t.charCodeAt(++i) & 255) << 8 | (t.charCodeAt(++i) & 255) << 16 | (t.charCodeAt(++i) & 255) << 24, o = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= o >>> 24, r = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      r ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      r ^= t.charCodeAt(i) & 255, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function cy(t, r, o, i) {
  const { els: a } = r;
  if (o === void 0) a.forEach(qd), r.els = [];
  else {
    const c = wl(o, i);
    c && a.includes(c) && (qd(c), r.els = a.filter((u) => u !== c));
  }
}
function Xd(t, r) {
  t.push(r);
}
function uy(t, r, o, i, a, c, u, d, f) {
  let p;
  if (o === void 0 && (p = r.render(i), o = Zo(p)), f) {
    f.adapter(o, p ?? r.render(i));
    return;
  }
  d === void 0 && (d = document.head);
  const g = wl(o, d);
  if (g !== null && !c) return g;
  const m = g ?? oy(o);
  if (p === void 0 && (p = r.render(i)), m.textContent = p, g !== null) return g;
  if (u) {
    const C = d.querySelector(`meta[name="${u}"]`);
    if (C) return d.insertBefore(m, C), Xd(r.els, m), m;
  }
  return a ? d.insertBefore(m, d.querySelector("style, link")) : d.appendChild(m), Xd(r.els, m), m;
}
function dy(t) {
  return sy(this, this.instance, t);
}
function fy(t = {}) {
  const { id: r, ssr: o, props: i, head: a = false, force: c = false, anchorMetaName: u, parent: d } = t;
  return uy(this.instance, this, r, i, a, c, u, d, o);
}
function hy(t = {}) {
  const { id: r, parent: o } = t;
  cy(this.instance, this, r, o);
}
const nl = function(t, r, o, i) {
  return { instance: t, $: r, props: o, children: i, els: [], render: dy, mount: fy, unmount: hy };
}, py = function(t, r, o, i) {
  return Array.isArray(r) ? nl(t, { $: null }, null, r) : Array.isArray(o) ? nl(t, r, null, o) : Array.isArray(i) ? nl(t, r, o, i) : nl(t, r, o, null);
};
function ch(t = {}) {
  const r = { c: ((...o) => py(r, ...o)), use: (o, ...i) => o.install(r, ...i), find: wl, context: {}, config: t };
  return r;
}
function gy(t, r) {
  if (t === void 0) return false;
  if (r) {
    const { context: { ids: o } } = r;
    return o.has(t);
  }
  return wl(t) !== null;
}
const vy = "n", Qo = `.${vy}-`, my = "__", by = "--", uh = ch(), dh = Q1({ blockPrefix: Qo, elementPrefix: my, modifierPrefix: by });
uh.use(dh);
const { c: X, find: IT } = uh, { cB: ye, cE: ae, cM: pe, cNotM: an } = dh;
function fh(t) {
  return X(({ props: { bPrefix: r } }) => `${r || Qo}modal, ${r || Qo}drawer`, [t]);
}
function xy(t) {
  return X(({ props: { bPrefix: r } }) => `${r || Qo}popover`, [t]);
}
function hh(t) {
  return X(({ props: { bPrefix: r } }) => `&${r || Qo}modal`, t);
}
const Cy = (...t) => X(">", [ye(...t)]);
function Ce(t, r) {
  return t + (r === "default" ? "" : r.replace(/^[a-z]/, (o) => o.toUpperCase()));
}
let bl = [];
const ph = /* @__PURE__ */ new WeakMap();
function yy() {
  bl.forEach((t) => t(...ph.get(t))), bl = [];
}
function wy(t, ...r) {
  ph.set(t, r), !bl.includes(t) && bl.push(t) === 1 && requestAnimationFrame(yy);
}
function Zd(t, r) {
  let { target: o } = t;
  for (; o; ) {
    if (o.dataset && o.dataset[r] !== void 0) return true;
    o = o.parentElement;
  }
  return false;
}
function Jo(t) {
  return t.composedPath()[0] || null;
}
function Qd(t) {
  return typeof t == "string" ? t.endsWith("px") ? Number(t.slice(0, t.length - 2)) : Number(t) : t;
}
function BT(t) {
  if (t != null) return typeof t == "number" ? `${t}px` : t.endsWith("px") ? t : `${t}px`;
}
function Tn(t, r) {
  const o = t.trim().split(/\s+/g), i = { top: o[0] };
  switch (o.length) {
    case 1:
      i.right = o[0], i.bottom = o[0], i.left = o[0];
      break;
    case 2:
      i.right = o[1], i.left = o[1], i.bottom = o[0];
      break;
    case 3:
      i.right = o[1], i.bottom = o[2], i.left = o[1];
      break;
    case 4:
      i.right = o[1], i.bottom = o[2], i.left = o[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + t + " is not a valid value.");
  }
  return r === void 0 ? i : i[r];
}
function MT(t, r) {
  const [o, i] = t.split(" ");
  return { row: o, col: i || o };
}
const Jd = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32", transparent: "#0000" };
function AT(t, r, o) {
  r /= 100, o /= 100;
  const i = r * Math.min(o, 1 - o) + o;
  return [t, i ? (2 - 2 * o / i) * 100 : 0, i * 100];
}
function LT(t, r, o) {
  r /= 100, o /= 100;
  const i = o - o * r / 2, a = Math.min(i, 1 - i);
  return [t, a ? (o - i) / a * 100 : 0, i * 100];
}
function Sy(t, r, o) {
  r /= 100, o /= 100;
  let i = (a, c = (a + t / 60) % 6) => o - o * r * Math.max(Math.min(c, 4 - c, 1), 0);
  return [i(5) * 255, i(3) * 255, i(1) * 255];
}
function FT(t, r, o) {
  t /= 255, r /= 255, o /= 255;
  let i = Math.max(t, r, o), a = i - Math.min(t, r, o), c = a && (i == t ? (r - o) / a : i == r ? 2 + (o - t) / a : 4 + (t - r) / a);
  return [60 * (c < 0 ? c + 6 : c), i && a / i * 100, i * 100];
}
function HT(t, r, o) {
  t /= 255, r /= 255, o /= 255;
  let i = Math.max(t, r, o), a = i - Math.min(t, r, o), c = 1 - Math.abs(i + i - a - 1), u = a && (i == t ? (r - o) / a : i == r ? 2 + (o - t) / a : 4 + (t - r) / a);
  return [60 * (u < 0 ? u + 6 : u), c ? a / c * 100 : 0, (i + i - a) * 50];
}
function $y(t, r, o) {
  r /= 100, o /= 100;
  let i = r * Math.min(o, 1 - o), a = (c, u = (c + t / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  return [a(0) * 255, a(8) * 255, a(4) * 255];
}
const Tr = "^\\s*", Er = "\\s*$", un = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", Qt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", En = "([0-9A-Fa-f])", zn = "([0-9A-Fa-f]{2})", gh = new RegExp(`${Tr}hsl\\s*\\(${Qt},${un},${un}\\)${Er}`), vh = new RegExp(`${Tr}hsv\\s*\\(${Qt},${un},${un}\\)${Er}`), mh = new RegExp(`${Tr}hsla\\s*\\(${Qt},${un},${un},${Qt}\\)${Er}`), bh = new RegExp(`${Tr}hsva\\s*\\(${Qt},${un},${un},${Qt}\\)${Er}`), Py = new RegExp(`${Tr}rgb\\s*\\(${Qt},${Qt},${Qt}\\)${Er}`), _y = new RegExp(`${Tr}rgba\\s*\\(${Qt},${Qt},${Qt},${Qt}\\)${Er}`), Ds = new RegExp(`${Tr}#${En}${En}${En}${Er}`), Ws = new RegExp(`${Tr}#${zn}${zn}${zn}${Er}`), Ns = new RegExp(`${Tr}#${En}${En}${En}${En}${Er}`), js = new RegExp(`${Tr}#${zn}${zn}${zn}${zn}${Er}`);
function kt(t) {
  return parseInt(t, 16);
}
function Ty(t) {
  try {
    let r;
    if (r = mh.exec(t)) return [_r(r[1]), ht(r[5]), ht(r[9]), Gr(r[13])];
    if (r = gh.exec(t)) return [_r(r[1]), ht(r[5]), ht(r[9]), 1];
    throw new Error(`[seemly/hsla]: Invalid color value ${t}.`);
  } catch (r) {
    throw r;
  }
}
function Ey(t) {
  try {
    let r;
    if (r = bh.exec(t)) return [_r(r[1]), ht(r[5]), ht(r[9]), Gr(r[13])];
    if (r = vh.exec(t)) return [_r(r[1]), ht(r[5]), ht(r[9]), 1];
    throw new Error(`[seemly/hsva]: Invalid color value ${t}.`);
  } catch (r) {
    throw r;
  }
}
function dn(t) {
  try {
    let r;
    if (r = Ws.exec(t)) return [kt(r[1]), kt(r[2]), kt(r[3]), 1];
    if (r = Py.exec(t)) return [lt(r[1]), lt(r[5]), lt(r[9]), 1];
    if (r = _y.exec(t)) return [lt(r[1]), lt(r[5]), lt(r[9]), Gr(r[13])];
    if (r = Ds.exec(t)) return [kt(r[1] + r[1]), kt(r[2] + r[2]), kt(r[3] + r[3]), 1];
    if (r = js.exec(t)) return [kt(r[1]), kt(r[2]), kt(r[3]), Gr(kt(r[4]) / 255)];
    if (r = Ns.exec(t)) return [kt(r[1] + r[1]), kt(r[2] + r[2]), kt(r[3] + r[3]), Gr(kt(r[4] + r[4]) / 255)];
    if (t in Jd) return dn(Jd[t]);
    if (gh.test(t) || mh.test(t)) {
      const [o, i, a, c] = Ty(t);
      return [...$y(o, i, a), c];
    } else if (vh.test(t) || bh.test(t)) {
      const [o, i, a, c] = Ey(t);
      return [...Sy(o, i, a), c];
    }
    throw new Error(`[seemly/rgba]: Invalid color value ${t}.`);
  } catch (r) {
    throw r;
  }
}
function zy(t) {
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Ry(t, r, o) {
  return `rgb(${lt(t)}, ${lt(r)}, ${lt(o)})`;
}
function ws(t, r, o, i) {
  return `rgba(${lt(t)}, ${lt(r)}, ${lt(o)}, ${zy(i)})`;
}
function ns(t, r, o, i, a) {
  return lt((t * r * (1 - i) + o * i) / a);
}
function ne(t, r) {
  Array.isArray(t) || (t = dn(t)), Array.isArray(r) || (r = dn(r));
  const o = t[3], i = r[3], a = Gr(o + i - o * i);
  return ws(ns(t[0], o, r[0], i, a), ns(t[1], o, r[1], i, a), ns(t[2], o, r[2], i, a), a);
}
function ce(t, r) {
  const [o, i, a, c = 1] = Array.isArray(t) ? t : dn(t);
  return typeof r.alpha == "number" ? ws(o, i, a, r.alpha) : ws(o, i, a, c);
}
function ol(t, r) {
  const [o, i, a, c = 1] = Array.isArray(t) ? t : dn(t), { lightness: u = 1, alpha: d = 1 } = r;
  return Iy([o * u, i * u, a * u, c * d]);
}
function Gr(t) {
  const r = Math.round(Number(t) * 100) / 100;
  return r > 1 ? 1 : r < 0 ? 0 : r;
}
function _r(t) {
  const r = Math.round(Number(t));
  return r >= 360 || r < 0 ? 0 : r;
}
function lt(t) {
  const r = Math.round(Number(t));
  return r > 255 ? 255 : r < 0 ? 0 : r;
}
function ht(t) {
  const r = Math.round(Number(t));
  return r > 100 ? 100 : r < 0 ? 0 : r;
}
function OT(t) {
  const [r, o, i] = Array.isArray(t) ? t : dn(t);
  return Ry(r, o, i);
}
function Iy(t) {
  const [r, o, i] = t;
  return 3 in t ? `rgba(${lt(r)}, ${lt(o)}, ${lt(i)}, ${Gr(t[3])})` : `rgba(${lt(r)}, ${lt(o)}, ${lt(i)}, 1)`;
}
function kT(t) {
  return `hsv(${_r(t[0])}, ${ht(t[1])}%, ${ht(t[2])}%)`;
}
function DT(t) {
  const [r, o, i] = t;
  return 3 in t ? `hsva(${_r(r)}, ${ht(o)}%, ${ht(i)}%, ${Gr(t[3])})` : `hsva(${_r(r)}, ${ht(o)}%, ${ht(i)}%, 1)`;
}
function WT(t) {
  return `hsl(${_r(t[0])}, ${ht(t[1])}%, ${ht(t[2])}%)`;
}
function NT(t) {
  const [r, o, i] = t;
  return 3 in t ? `hsla(${_r(r)}, ${ht(o)}%, ${ht(i)}%, ${Gr(t[3])})` : `hsla(${_r(r)}, ${ht(o)}%, ${ht(i)}%, 1)`;
}
function jT(t) {
  if (typeof t == "string") {
    let i;
    if (i = Ws.exec(t)) return `${i[0]}FF`;
    if (i = js.exec(t)) return i[0];
    if (i = Ds.exec(t)) return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}FF`;
    if (i = Ns.exec(t)) return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}${i[4]}${i[4]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${t}.`);
  }
  const r = `#${t.slice(0, 3).map((i) => lt(i).toString(16).toUpperCase().padStart(2, "0")).join("")}`, o = t.length === 3 ? "FF" : lt(t[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return r + o;
}
function GT(t) {
  if (typeof t == "string") {
    let r;
    if (r = Ws.exec(t)) return r[0];
    if (r = js.exec(t)) return r[0].slice(0, 7);
    if (r = Ds.exec(t) || Ns.exec(t)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${t}.`);
  }
  return `#${t.slice(0, 3).map((r) => lt(r).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function By(t = 8) {
  return Math.random().toString(16).slice(2, 2 + t);
}
function hl(t) {
  return t.composedPath()[0];
}
const My = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function Ay(t, r, o) {
  if (t === "mousemoveoutside") {
    const i = (a) => {
      r.contains(hl(a)) || o(a);
    };
    return { mousemove: i, touchstart: i };
  } else if (t === "clickoutside") {
    let i = false;
    const a = (u) => {
      i = !r.contains(hl(u));
    }, c = (u) => {
      i && (r.contains(hl(u)) || o(u));
    };
    return { mousedown: a, mouseup: c, touchstart: a, touchend: c };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`), {};
}
function xh(t, r, o) {
  const i = My[t];
  let a = i.get(r);
  a === void 0 && i.set(r, a = /* @__PURE__ */ new WeakMap());
  let c = a.get(o);
  return c === void 0 && a.set(o, c = Ay(t, r, o)), c;
}
function Ly(t, r, o, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = xh(t, r, o);
    return Object.keys(a).forEach((c) => {
      Ze(c, document, a[c], i);
    }), true;
  }
  return false;
}
function Fy(t, r, o, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = xh(t, r, o);
    return Object.keys(a).forEach((c) => {
      Xe(c, document, a[c], i);
    }), true;
  }
  return false;
}
function Hy() {
  if (typeof window > "u") return { on: () => {
  }, off: () => {
  } };
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  function o() {
    t.set(this, true);
  }
  function i() {
    t.set(this, true), r.set(this, true);
  }
  function a(S, M, A) {
    const V = S[M];
    return S[M] = function() {
      return A.apply(S, arguments), V.apply(S, arguments);
    }, S;
  }
  function c(S, M) {
    S[M] = Event.prototype[M];
  }
  const u = /* @__PURE__ */ new WeakMap(), d = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function f() {
    var S;
    return (S = u.get(this)) !== null && S !== void 0 ? S : null;
  }
  function p(S, M) {
    d !== void 0 && Object.defineProperty(S, "currentTarget", { configurable: true, enumerable: true, get: M ?? d.get });
  }
  const g = { bubble: {}, capture: {} }, m = {};
  function C() {
    const S = function(M) {
      const { type: A, eventPhase: V, bubbles: J } = M, W = hl(M);
      if (V === 2) return;
      const oe = V === 1 ? "capture" : "bubble";
      let re = W;
      const G = [];
      for (; re === null && (re = window), G.push(re), re !== window; ) re = re.parentNode || null;
      const ie = g.capture[A], U = g.bubble[A];
      if (a(M, "stopPropagation", o), a(M, "stopImmediatePropagation", i), p(M, f), oe === "capture") {
        if (ie === void 0) return;
        for (let ue = G.length - 1; ue >= 0 && !t.has(M); --ue) {
          const Be = G[ue], ze = ie.get(Be);
          if (ze !== void 0) {
            u.set(M, Be);
            for (const Le of ze) {
              if (r.has(M)) break;
              Le(M);
            }
          }
          if (ue === 0 && !J && U !== void 0) {
            const Le = U.get(Be);
            if (Le !== void 0) for (const Oe of Le) {
              if (r.has(M)) break;
              Oe(M);
            }
          }
        }
      } else if (oe === "bubble") {
        if (U === void 0) return;
        for (let ue = 0; ue < G.length && !t.has(M); ++ue) {
          const Be = G[ue], ze = U.get(Be);
          if (ze !== void 0) {
            u.set(M, Be);
            for (const Le of ze) {
              if (r.has(M)) break;
              Le(M);
            }
          }
        }
      }
      c(M, "stopPropagation"), c(M, "stopImmediatePropagation"), p(M);
    };
    return S.displayName = "evtdUnifiedHandler", S;
  }
  function x() {
    const S = function(M) {
      const { type: A, eventPhase: V } = M;
      if (V !== 2) return;
      const J = m[A];
      J !== void 0 && J.forEach((W) => W(M));
    };
    return S.displayName = "evtdUnifiedWindowEventHandler", S;
  }
  const y = C(), P = x();
  function _(S, M) {
    const A = g[S];
    return A[M] === void 0 && (A[M] = /* @__PURE__ */ new Map(), window.addEventListener(M, y, S === "capture")), A[M];
  }
  function $(S) {
    return m[S] === void 0 && (m[S] = /* @__PURE__ */ new Set(), window.addEventListener(S, P)), m[S];
  }
  function R(S, M) {
    let A = S.get(M);
    return A === void 0 && S.set(M, A = /* @__PURE__ */ new Set()), A;
  }
  function L(S, M, A, V) {
    const J = g[M][A];
    if (J !== void 0) {
      const W = J.get(S);
      if (W !== void 0 && W.has(V)) return true;
    }
    return false;
  }
  function I(S, M) {
    const A = m[S];
    return !!(A !== void 0 && A.has(M));
  }
  function F(S, M, A, V) {
    let J;
    if (typeof V == "object" && V.once === true ? J = (ie) => {
      k(S, M, J, V), A(ie);
    } : J = A, Ly(S, M, J, V)) return;
    const oe = V === true || typeof V == "object" && V.capture === true ? "capture" : "bubble", re = _(oe, S), G = R(re, M);
    if (G.has(J) || G.add(J), M === window) {
      const ie = $(S);
      ie.has(J) || ie.add(J);
    }
  }
  function k(S, M, A, V) {
    if (Fy(S, M, A, V)) return;
    const W = V === true || typeof V == "object" && V.capture === true, oe = W ? "capture" : "bubble", re = _(oe, S), G = R(re, M);
    if (M === window && !L(M, W ? "bubble" : "capture", S, A) && I(S, A)) {
      const U = m[S];
      U.delete(A), U.size === 0 && (window.removeEventListener(S, P), m[S] = void 0);
    }
    G.has(A) && G.delete(A), G.size === 0 && re.delete(M), re.size === 0 && (window.removeEventListener(S, y, oe === "capture"), g[oe][S] = void 0);
  }
  return { on: F, off: k };
}
const { on: Ze, off: Xe } = Hy();
function Oy(t) {
  const r = se(!!t.value);
  if (r.value) return sn(r);
  const o = ft(t, (i) => {
    i && (r.value = true, o());
  });
  return sn(r);
}
function ur(t) {
  const r = Y(t), o = se(r.value);
  return ft(r, (i) => {
    o.value = i;
  }), typeof t == "function" ? o : { __v_isRef: true, get value() {
    return o.value;
  }, set value(i) {
    t.set(i);
  } };
}
function Gs() {
  return vo() !== null;
}
const Vs = typeof window < "u";
let uo, Uo;
const ky = () => {
  var t, r;
  uo = Vs ? (r = (t = document) === null || t === void 0 ? void 0 : t.fonts) === null || r === void 0 ? void 0 : r.ready : void 0, Uo = false, uo !== void 0 ? uo.then(() => {
    Uo = true;
  }) : Uo = true;
};
ky();
function Dy(t) {
  if (Uo) return;
  let r = false;
  vr(() => {
    Uo || (uo == null ? void 0 : uo.then(() => {
      r || t();
    }));
  }), It(() => {
    r = true;
  });
}
const jo = se(null);
function ef(t) {
  if (t.clientX > 0 || t.clientY > 0) jo.value = { x: t.clientX, y: t.clientY };
  else {
    const { target: r } = t;
    if (r instanceof Element) {
      const { left: o, top: i, width: a, height: c } = r.getBoundingClientRect();
      o > 0 || i > 0 ? jo.value = { x: o + a / 2, y: i + c / 2 } : jo.value = { x: 0, y: 0 };
    } else jo.value = null;
  }
}
let il = 0, tf = true;
function Wy() {
  if (!Vs) return sn(se(null));
  il === 0 && Ze("click", document, ef, true);
  const t = () => {
    il += 1;
  };
  return tf && (tf = Gs()) ? (Fn(t), It(() => {
    il -= 1, il === 0 && Xe("click", document, ef, true);
  })) : t(), sn(jo);
}
const Ny = se(void 0);
let ll = 0;
function rf() {
  Ny.value = Date.now();
}
let nf = true;
function jy(t) {
  if (!Vs) return sn(se(false));
  const r = se(false);
  let o = null;
  function i() {
    o !== null && window.clearTimeout(o);
  }
  function a() {
    i(), r.value = true, o = window.setTimeout(() => {
      r.value = false;
    }, t);
  }
  ll === 0 && Ze("click", window, rf, true);
  const c = () => {
    ll += 1, Ze("click", window, a, true);
  };
  return nf && (nf = Gs()) ? (Fn(c), It(() => {
    ll -= 1, ll === 0 && Xe("click", window, rf, true), Xe("click", window, a, true), i();
  })) : c(), sn(r);
}
function Ch(t, r) {
  return ft(t, (o) => {
    o !== void 0 && (r.value = o);
  }), Y(() => t.value === void 0 ? r.value : t.value);
}
function Sl() {
  const t = se(false);
  return vr(() => {
    t.value = true;
  }), sn(t);
}
function yh(t, r) {
  return Y(() => {
    for (const o of r) if (t[o] !== void 0) return t[o];
    return t[r[r.length - 1]];
  });
}
const Gy = (typeof window > "u" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function Vy() {
  return Gy;
}
function Ky(t = {}, r) {
  const o = Vf({ ctrl: false, command: false, win: false, shift: false, tab: false }), { keydown: i, keyup: a } = t, c = (f) => {
    switch (f.key) {
      case "Control":
        o.ctrl = true;
        break;
      case "Meta":
        o.command = true, o.win = true;
        break;
      case "Shift":
        o.shift = true;
        break;
      case "Tab":
        o.tab = true;
        break;
    }
    i !== void 0 && Object.keys(i).forEach((p) => {
      if (p !== f.key) return;
      const g = i[p];
      if (typeof g == "function") g(f);
      else {
        const { stop: m = false, prevent: C = false } = g;
        m && f.stopPropagation(), C && f.preventDefault(), g.handler(f);
      }
    });
  }, u = (f) => {
    switch (f.key) {
      case "Control":
        o.ctrl = false;
        break;
      case "Meta":
        o.command = false, o.win = false;
        break;
      case "Shift":
        o.shift = false;
        break;
      case "Tab":
        o.tab = false;
        break;
    }
    a !== void 0 && Object.keys(a).forEach((p) => {
      if (p !== f.key) return;
      const g = a[p];
      if (typeof g == "function") g(f);
      else {
        const { stop: m = false, prevent: C = false } = g;
        m && f.stopPropagation(), C && f.preventDefault(), g.handler(f);
      }
    });
  }, d = () => {
    (r === void 0 || r.value) && (Ze("keydown", document, c), Ze("keyup", document, u)), r !== void 0 && ft(r, (f) => {
      f ? (Ze("keydown", document, c), Ze("keyup", document, u)) : (Xe("keydown", document, c), Xe("keyup", document, u));
    });
  };
  return Gs() ? (Fn(d), It(() => {
    (r === void 0 || r.value) && (Xe("keydown", document, c), Xe("keyup", document, u));
  })) : d(), sn(o);
}
function VT(t) {
  return t;
}
const KT = "n-internal-select-menu", Uy = "n-internal-select-menu-body", $l = "n-drawer-body", UT = "n-drawer", Pl = "n-modal-body", qy = "n-modal-provider", wh = "n-modal", ni = "n-popover-body", Sh = "__disabled__";
function go(t) {
  const r = He(Pl, null), o = He($l, null), i = He(ni, null), a = He(Uy, null), c = se();
  if (typeof document < "u") {
    c.value = document.fullscreenElement;
    const u = () => {
      c.value = document.fullscreenElement;
    };
    vr(() => {
      Ze("fullscreenchange", document, u);
    }), It(() => {
      Xe("fullscreenchange", document, u);
    });
  }
  return ur(() => {
    var u;
    const { to: d } = t;
    return d !== void 0 ? d === false ? Sh : d === true ? c.value || "body" : d : (r == null ? void 0 : r.value) ? (u = r.value.$el) !== null && u !== void 0 ? u : r.value : (o == null ? void 0 : o.value) ? o.value : (i == null ? void 0 : i.value) ? i.value : (a == null ? void 0 : a.value) ? a.value : d ?? (c.value || "body");
  });
}
go.tdkey = Sh;
go.propTo = { type: [String, Object, Boolean], default: void 0 };
function Yy(t, r, o) {
  const i = se(t.value);
  let a = null;
  return ft(t, (c) => {
    a !== null && window.clearTimeout(a), c === true ? o && !o.value ? i.value = true : a = window.setTimeout(() => {
      i.value = true;
    }, r) : i.value = false;
  }), i;
}
const oi = typeof document < "u" && typeof window < "u", Ks = se(false);
function of() {
  Ks.value = true;
}
function lf() {
  Ks.value = false;
}
let Wo = 0;
function Xy() {
  return oi && (Fn(() => {
    Wo || (window.addEventListener("compositionstart", of), window.addEventListener("compositionend", lf)), Wo++;
  }), It(() => {
    Wo <= 1 ? (window.removeEventListener("compositionstart", of), window.removeEventListener("compositionend", lf), Wo = 0) : Wo--;
  })), Ks;
}
let no = 0, af = "", sf = "", cf = "", uf = "";
const df = se("0px");
function Zy(t) {
  if (typeof document > "u") return;
  const r = document.documentElement;
  let o, i = false;
  const a = () => {
    r.style.marginRight = af, r.style.overflow = sf, r.style.overflowX = cf, r.style.overflowY = uf, df.value = "0px";
  };
  vr(() => {
    o = ft(t, (c) => {
      if (c) {
        if (!no) {
          const u = window.innerWidth - r.offsetWidth;
          u > 0 && (af = r.style.marginRight, r.style.marginRight = `${u}px`, df.value = `${u}px`), sf = r.style.overflow, cf = r.style.overflowX, uf = r.style.overflowY, r.style.overflow = "hidden", r.style.overflowX = "hidden", r.style.overflowY = "hidden";
        }
        i = true, no++;
      } else no--, no || a(), i = false;
    }, { immediate: true });
  }), It(() => {
    o == null ? void 0 : o(), i && (no--, no || a(), i = false);
  });
}
function Qy(t) {
  const r = { isDeactivated: false };
  let o = false;
  return HC(() => {
    if (r.isDeactivated = false, !o) {
      o = true;
      return;
    }
    t();
  }), OC(() => {
    r.isDeactivated = true, o || (o = true);
  }), r;
}
function Ss(t, r, o = "default") {
  const i = r[o];
  if (i === void 0) throw new Error(`[vueuc/${t}]: slot[${o}] is empty.`);
  return i();
}
function $s(t, r = true, o = []) {
  return t.forEach((i) => {
    if (i !== null) {
      if (typeof i != "object") {
        (typeof i == "string" || typeof i == "number") && o.push(vl(String(i)));
        return;
      }
      if (Array.isArray(i)) {
        $s(i, r, o);
        return;
      }
      if (i.type === Hn) {
        if (i.children === null) return;
        Array.isArray(i.children) && $s(i.children, r, o);
      } else i.type !== Fs && o.push(i);
    }
  }), o;
}
function ff(t, r, o = "default") {
  const i = r[o];
  if (i === void 0) throw new Error(`[vueuc/${t}]: slot[${o}] is empty.`);
  const a = $s(i());
  if (a.length === 1) return a[0];
  throw new Error(`[vueuc/${t}]: slot[${o}] should have exactly one child.`);
}
let nn = null;
function $h() {
  if (nn === null && (nn = document.getElementById("v-binder-view-measurer"), nn === null)) {
    nn = document.createElement("div"), nn.id = "v-binder-view-measurer";
    const { style: t } = nn;
    t.position = "fixed", t.left = "0", t.right = "0", t.top = "0", t.bottom = "0", t.pointerEvents = "none", t.visibility = "hidden", document.body.appendChild(nn);
  }
  return nn.getBoundingClientRect();
}
function Jy(t, r) {
  const o = $h();
  return { top: r, left: t, height: 0, width: 0, right: o.width - t, bottom: o.height - r };
}
function os(t) {
  const r = t.getBoundingClientRect(), o = $h();
  return { left: r.left - o.left, top: r.top - o.top, bottom: o.height + o.top - r.bottom, right: o.width + o.left - r.right, width: r.width, height: r.height };
}
function ew(t) {
  return t.nodeType === 9 ? null : t.parentNode;
}
function Ph(t) {
  if (t === null) return null;
  const r = ew(t);
  if (r === null) return null;
  if (r.nodeType === 9) return document;
  if (r.nodeType === 1) {
    const { overflow: o, overflowX: i, overflowY: a } = getComputedStyle(r);
    if (/(auto|scroll|overlay)/.test(o + a + i)) return r;
  }
  return Ph(r);
}
const _h = Ee({ name: "Binder", props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(t) {
  var r;
  dt("VBinder", (r = vo()) === null || r === void 0 ? void 0 : r.proxy);
  const o = He("VBinder", null), i = se(null), a = ($) => {
    i.value = $, o && t.syncTargetWithParent && o.setTargetRef($);
  };
  let c = [];
  const u = () => {
    let $ = i.value;
    for (; $ = Ph($), $ !== null; ) c.push($);
    for (const R of c) Ze("scroll", R, m, true);
  }, d = () => {
    for (const $ of c) Xe("scroll", $, m, true);
    c = [];
  }, f = /* @__PURE__ */ new Set(), p = ($) => {
    f.size === 0 && u(), f.has($) || f.add($);
  }, g = ($) => {
    f.has($) && f.delete($), f.size === 0 && d();
  }, m = () => {
    wy(C);
  }, C = () => {
    f.forEach(($) => $());
  }, x = /* @__PURE__ */ new Set(), y = ($) => {
    x.size === 0 && Ze("resize", window, _), x.has($) || x.add($);
  }, P = ($) => {
    x.has($) && x.delete($), x.size === 0 && Xe("resize", window, _);
  }, _ = () => {
    x.forEach(($) => $());
  };
  return It(() => {
    Xe("resize", window, _), d();
  }), { targetRef: i, setTargetRef: a, addScrollListener: p, removeScrollListener: g, addResizeListener: y, removeResizeListener: P };
}, render() {
  return Ss("binder", this.$slots);
} }), Th = Ee({ name: "Target", setup() {
  const { setTargetRef: t, syncTarget: r } = He("VBinder");
  return { syncTarget: r, setTargetDirective: { mounted: t, updated: t } };
}, render() {
  const { syncTarget: t, setTargetDirective: r } = this;
  return t ? An(ff("follower", this.$slots), [[r]]) : ff("follower", this.$slots);
} }), oo = "@@mmoContext", tw = { mounted(t, { value: r }) {
  t[oo] = { handler: void 0 }, typeof r == "function" && (t[oo].handler = r, Ze("mousemoveoutside", t, r));
}, updated(t, { value: r }) {
  const o = t[oo];
  typeof r == "function" ? o.handler ? o.handler !== r && (Xe("mousemoveoutside", t, o.handler), o.handler = r, Ze("mousemoveoutside", t, r)) : (t[oo].handler = r, Ze("mousemoveoutside", t, r)) : o.handler && (Xe("mousemoveoutside", t, o.handler), o.handler = void 0);
}, unmounted(t) {
  const { handler: r } = t[oo];
  r && Xe("mousemoveoutside", t, r), t[oo].handler = void 0;
} }, io = "@@coContext", Ps = { mounted(t, { value: r, modifiers: o }) {
  t[io] = { handler: void 0 }, typeof r == "function" && (t[io].handler = r, Ze("clickoutside", t, r, { capture: o.capture }));
}, updated(t, { value: r, modifiers: o }) {
  const i = t[io];
  typeof r == "function" ? i.handler ? i.handler !== r && (Xe("clickoutside", t, i.handler, { capture: o.capture }), i.handler = r, Ze("clickoutside", t, r, { capture: o.capture })) : (t[io].handler = r, Ze("clickoutside", t, r, { capture: o.capture })) : i.handler && (Xe("clickoutside", t, i.handler, { capture: o.capture }), i.handler = void 0);
}, unmounted(t, { modifiers: r }) {
  const { handler: o } = t[io];
  o && Xe("clickoutside", t, o, { capture: r.capture }), t[io].handler = void 0;
} };
function rw(t, r) {
  console.error(`[vdirs/${t}]: ${r}`);
}
class nw {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(r, o) {
    const { elementZIndex: i } = this;
    if (o !== void 0) {
      r.style.zIndex = `${o}`, i.delete(r);
      return;
    }
    const { nextZIndex: a } = this;
    i.has(r) && i.get(r) + 1 === this.nextZIndex || (r.style.zIndex = `${a}`, i.set(r, a), this.nextZIndex = a + 1, this.squashState());
  }
  unregister(r, o) {
    const { elementZIndex: i } = this;
    i.has(r) ? i.delete(r) : o === void 0 && rw("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: r } = this;
    r || (this.nextZIndex = 2e3), this.nextZIndex - r > 2500 && this.rearrange();
  }
  rearrange() {
    const r = Array.from(this.elementZIndex.entries());
    r.sort((o, i) => o[1] - i[1]), this.nextZIndex = 2e3, r.forEach((o) => {
      const i = o[0], a = this.nextZIndex++;
      `${a}` !== i.style.zIndex && (i.style.zIndex = `${a}`);
    });
  }
}
const is = new nw(), lo = "@@ziContext", Us = { mounted(t, r) {
  const { value: o = {} } = r, { zIndex: i, enabled: a } = o;
  t[lo] = { enabled: !!a, initialized: false }, a && (is.ensureZIndex(t, i), t[lo].initialized = true);
}, updated(t, r) {
  const { value: o = {} } = r, { zIndex: i, enabled: a } = o, c = t[lo].enabled;
  a && !c && (is.ensureZIndex(t, i), t[lo].initialized = true), t[lo].enabled = !!a;
}, unmounted(t, r) {
  if (!t[lo].initialized) return;
  const { value: o = {} } = r, { zIndex: i } = o;
  is.unregister(t, i);
} }, ow = "@css-render/vue3-ssr";
function iw(t, r) {
  return `<style cssr-id="${t}">
${r}
</style>`;
}
function lw(t, r, o) {
  const { styles: i, ids: a } = o;
  a.has(t) || i !== null && (a.add(t), i.push(iw(t, r)));
}
const aw = typeof document < "u";
function xo() {
  if (aw) return;
  const t = He(ow, null);
  if (t !== null) return { adapter: (r, o) => lw(r, o, t), context: t };
}
function hf(t, r) {
  console.error(`[vueuc/${t}]: ${r}`);
}
const { c: Go } = ch(), Eh = "vueuc-style";
function pf(t) {
  return typeof t == "string" ? document.querySelector(t) : t() || null;
}
const zh = Ee({ name: "LazyTeleport", props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(t) {
  return { showTeleport: Oy(Je(t, "show")), mergedTo: Y(() => {
    const { to: r } = t;
    return r ?? "body";
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? Ss("lazy-teleport", this.$slots) : B(kC, { disabled: this.disabled, to: this.mergedTo }, Ss("lazy-teleport", this.$slots)) : null;
} }), al = { top: "bottom", bottom: "top", left: "right", right: "left" }, gf = { start: "end", center: "center", end: "start" }, ls = { top: "height", bottom: "height", left: "width", right: "width" }, sw = { "bottom-start": "top left", bottom: "top center", "bottom-end": "top right", "top-start": "bottom left", top: "bottom center", "top-end": "bottom right", "right-start": "top left", right: "center left", "right-end": "bottom left", "left-start": "top right", left: "center right", "left-end": "bottom right" }, cw = { "bottom-start": "bottom left", bottom: "bottom center", "bottom-end": "bottom right", "top-start": "top left", top: "top center", "top-end": "top right", "right-start": "top right", right: "center right", "right-end": "bottom right", "left-start": "top left", left: "center left", "left-end": "bottom left" }, uw = { "bottom-start": "right", "bottom-end": "left", "top-start": "right", "top-end": "left", "right-start": "bottom", "right-end": "top", "left-start": "bottom", "left-end": "top" }, vf = { top: true, bottom: false, left: true, right: false }, mf = { top: "end", bottom: "start", left: "end", right: "start" };
function dw(t, r, o, i, a, c) {
  if (!a || c) return { placement: t, top: 0, left: 0 };
  const [u, d] = t.split("-");
  let f = d ?? "center", p = { top: 0, left: 0 };
  const g = (x, y, P) => {
    let _ = 0, $ = 0;
    const R = o[x] - r[y] - r[x];
    return R > 0 && i && (P ? $ = vf[y] ? R : -R : _ = vf[y] ? R : -R), { left: _, top: $ };
  }, m = u === "left" || u === "right";
  if (f !== "center") {
    const x = uw[t], y = al[x], P = ls[x];
    if (o[P] > r[P]) {
      if (r[x] + r[P] < o[P]) {
        const _ = (o[P] - r[P]) / 2;
        r[x] < _ || r[y] < _ ? r[x] < r[y] ? (f = gf[d], p = g(P, y, m)) : p = g(P, x, m) : f = "center";
      }
    } else o[P] < r[P] && r[y] < 0 && r[x] > r[y] && (f = gf[d]);
  } else {
    const x = u === "bottom" || u === "top" ? "left" : "top", y = al[x], P = ls[x], _ = (o[P] - r[P]) / 2;
    (r[x] < _ || r[y] < _) && (r[x] > r[y] ? (f = mf[x], p = g(P, x, m)) : (f = mf[y], p = g(P, y, m)));
  }
  let C = u;
  return r[u] < o[ls[u]] && r[u] < r[al[u]] && (C = al[u]), { placement: f !== "center" ? `${C}-${f}` : C, left: p.left, top: p.top };
}
function fw(t, r) {
  return r ? cw[t] : sw[t];
}
function hw(t, r, o, i, a, c) {
  if (c) switch (t) {
    case "bottom-start":
      return { top: `${Math.round(o.top - r.top + o.height)}px`, left: `${Math.round(o.left - r.left)}px`, transform: "translateY(-100%)" };
    case "bottom-end":
      return { top: `${Math.round(o.top - r.top + o.height)}px`, left: `${Math.round(o.left - r.left + o.width)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "top-start":
      return { top: `${Math.round(o.top - r.top)}px`, left: `${Math.round(o.left - r.left)}px`, transform: "" };
    case "top-end":
      return { top: `${Math.round(o.top - r.top)}px`, left: `${Math.round(o.left - r.left + o.width)}px`, transform: "translateX(-100%)" };
    case "right-start":
      return { top: `${Math.round(o.top - r.top)}px`, left: `${Math.round(o.left - r.left + o.width)}px`, transform: "translateX(-100%)" };
    case "right-end":
      return { top: `${Math.round(o.top - r.top + o.height)}px`, left: `${Math.round(o.left - r.left + o.width)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "left-start":
      return { top: `${Math.round(o.top - r.top)}px`, left: `${Math.round(o.left - r.left)}px`, transform: "" };
    case "left-end":
      return { top: `${Math.round(o.top - r.top + o.height)}px`, left: `${Math.round(o.left - r.left)}px`, transform: "translateY(-100%)" };
    case "top":
      return { top: `${Math.round(o.top - r.top)}px`, left: `${Math.round(o.left - r.left + o.width / 2)}px`, transform: "translateX(-50%)" };
    case "right":
      return { top: `${Math.round(o.top - r.top + o.height / 2)}px`, left: `${Math.round(o.left - r.left + o.width)}px`, transform: "translateX(-100%) translateY(-50%)" };
    case "left":
      return { top: `${Math.round(o.top - r.top + o.height / 2)}px`, left: `${Math.round(o.left - r.left)}px`, transform: "translateY(-50%)" };
    case "bottom":
    default:
      return { top: `${Math.round(o.top - r.top + o.height)}px`, left: `${Math.round(o.left - r.left + o.width / 2)}px`, transform: "translateX(-50%) translateY(-100%)" };
  }
  switch (t) {
    case "bottom-start":
      return { top: `${Math.round(o.top - r.top + o.height + i)}px`, left: `${Math.round(o.left - r.left + a)}px`, transform: "" };
    case "bottom-end":
      return { top: `${Math.round(o.top - r.top + o.height + i)}px`, left: `${Math.round(o.left - r.left + o.width + a)}px`, transform: "translateX(-100%)" };
    case "top-start":
      return { top: `${Math.round(o.top - r.top + i)}px`, left: `${Math.round(o.left - r.left + a)}px`, transform: "translateY(-100%)" };
    case "top-end":
      return { top: `${Math.round(o.top - r.top + i)}px`, left: `${Math.round(o.left - r.left + o.width + a)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "right-start":
      return { top: `${Math.round(o.top - r.top + i)}px`, left: `${Math.round(o.left - r.left + o.width + a)}px`, transform: "" };
    case "right-end":
      return { top: `${Math.round(o.top - r.top + o.height + i)}px`, left: `${Math.round(o.left - r.left + o.width + a)}px`, transform: "translateY(-100%)" };
    case "left-start":
      return { top: `${Math.round(o.top - r.top + i)}px`, left: `${Math.round(o.left - r.left + a)}px`, transform: "translateX(-100%)" };
    case "left-end":
      return { top: `${Math.round(o.top - r.top + o.height + i)}px`, left: `${Math.round(o.left - r.left + a)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "top":
      return { top: `${Math.round(o.top - r.top + i)}px`, left: `${Math.round(o.left - r.left + o.width / 2 + a)}px`, transform: "translateY(-100%) translateX(-50%)" };
    case "right":
      return { top: `${Math.round(o.top - r.top + o.height / 2 + i)}px`, left: `${Math.round(o.left - r.left + o.width + a)}px`, transform: "translateY(-50%)" };
    case "left":
      return { top: `${Math.round(o.top - r.top + o.height / 2 + i)}px`, left: `${Math.round(o.left - r.left + a)}px`, transform: "translateY(-50%) translateX(-100%)" };
    case "bottom":
    default:
      return { top: `${Math.round(o.top - r.top + o.height + i)}px`, left: `${Math.round(o.left - r.left + o.width / 2 + a)}px`, transform: "translateX(-50%)" };
  }
}
const pw = Go([Go(".v-binder-follower-container", { position: "absolute", left: "0", right: "0", top: "0", height: "0", pointerEvents: "none", zIndex: "auto" }), Go(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [Go("> *", { pointerEvents: "all" })])]), Rh = Ee({ name: "Follower", inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: "bottom" }, syncTrigger: { type: Array, default: ["resize", "scroll"] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(t) {
  const r = He("VBinder"), o = ur(() => t.enabled !== void 0 ? t.enabled : t.show), i = se(null), a = se(null), c = () => {
    const { syncTrigger: C } = t;
    C.includes("scroll") && r.addScrollListener(f), C.includes("resize") && r.addResizeListener(f);
  }, u = () => {
    r.removeScrollListener(f), r.removeResizeListener(f);
  };
  vr(() => {
    o.value && (f(), c());
  });
  const d = xo();
  pw.mount({ id: "vueuc/binder", head: true, anchorMetaName: Eh, ssr: d }), It(() => {
    u();
  }), Dy(() => {
    o.value && f();
  });
  const f = () => {
    if (!o.value) return;
    const C = i.value;
    if (C === null) return;
    const x = r.targetRef, { x: y, y: P, overlap: _ } = t, $ = y !== void 0 && P !== void 0 ? Jy(y, P) : os(x);
    C.style.setProperty("--v-target-width", `${Math.round($.width)}px`), C.style.setProperty("--v-target-height", `${Math.round($.height)}px`);
    const { width: R, minWidth: L, placement: I, internalShift: F, flip: k } = t;
    C.setAttribute("v-placement", I), _ ? C.setAttribute("v-overlap", "") : C.removeAttribute("v-overlap");
    const { style: S } = C;
    R === "target" ? S.width = `${$.width}px` : R !== void 0 ? S.width = R : S.width = "", L === "target" ? S.minWidth = `${$.width}px` : L !== void 0 ? S.minWidth = L : S.minWidth = "";
    const M = os(C), A = os(a.value), { left: V, top: J, placement: W } = dw(I, $, M, F, k, _), oe = fw(W, _), { left: re, top: G, transform: ie } = hw(W, A, $, J, V, _);
    C.setAttribute("v-placement", W), C.style.setProperty("--v-offset-left", `${Math.round(V)}px`), C.style.setProperty("--v-offset-top", `${Math.round(J)}px`), C.style.transform = `translateX(${re}) translateY(${G}) ${ie}`, C.style.setProperty("--v-transform-origin", oe), C.style.transformOrigin = oe;
  };
  ft(o, (C) => {
    C ? (c(), p()) : u();
  });
  const p = () => {
    Mn().then(f).catch((C) => console.error(C));
  };
  ["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach((C) => {
    ft(Je(t, C), f);
  }), ["teleportDisabled"].forEach((C) => {
    ft(Je(t, C), p);
  }), ft(Je(t, "syncTrigger"), (C) => {
    C.includes("resize") ? r.addResizeListener(f) : r.removeResizeListener(f), C.includes("scroll") ? r.addScrollListener(f) : r.removeScrollListener(f);
  });
  const g = Sl(), m = ur(() => {
    const { to: C } = t;
    if (C !== void 0) return C;
    g.value;
  });
  return { VBinder: r, mergedEnabled: o, offsetContainerRef: a, followerRef: i, mergedTo: m, syncPosition: f };
}, render() {
  return B(zh, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var t, r;
    const o = B("div", { class: ["v-binder-follower-container", this.containerClass], ref: "offsetContainerRef" }, [B("div", { class: "v-binder-follower-content", ref: "followerRef" }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t))]);
    return this.zindexable ? An(o, [[Us, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : o;
  } });
} });
var In = [], gw = function() {
  return In.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, vw = function() {
  return In.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, bf = "ResizeObserver loop completed with undelivered notifications.", mw = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", { message: bf }) : (t = document.createEvent("Event"), t.initEvent("error", false, false), t.message = bf), window.dispatchEvent(t);
}, ei;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ei || (ei = {}));
var Bn = function(t) {
  return Object.freeze(t);
}, bw = /* @__PURE__ */ (function() {
  function t(r, o) {
    this.inlineSize = r, this.blockSize = o, Bn(this);
  }
  return t;
})(), Ih = (function() {
  function t(r, o, i, a) {
    return this.x = r, this.y = o, this.width = i, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Bn(this);
  }
  return t.prototype.toJSON = function() {
    var r = this, o = r.x, i = r.y, a = r.top, c = r.right, u = r.bottom, d = r.left, f = r.width, p = r.height;
    return { x: o, y: i, top: a, right: c, bottom: u, left: d, width: f, height: p };
  }, t.fromRect = function(r) {
    return new t(r.x, r.y, r.width, r.height);
  }, t;
})(), qs = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, Bh = function(t) {
  if (qs(t)) {
    var r = t.getBBox(), o = r.width, i = r.height;
    return !o && !i;
  }
  var a = t, c = a.offsetWidth, u = a.offsetHeight;
  return !(c || u || t.getClientRects().length);
}, xf = function(t) {
  var r;
  if (t instanceof Element) return true;
  var o = (r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(o && t instanceof o.Element);
}, xw = function(t) {
  switch (t.tagName) {
    case "INPUT":
      if (t.type !== "image") break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
}, qo = typeof window < "u" ? window : {}, sl = /* @__PURE__ */ new WeakMap(), Cf = /auto|scroll/, Cw = /^tb|vertical/, yw = /msie|trident/i.test(qo.navigator && qo.navigator.userAgent), wr = function(t) {
  return parseFloat(t || "0");
}, fo = function(t, r, o) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0), o === void 0 && (o = false), new bw((o ? r : t) || 0, (o ? t : r) || 0);
}, yf = Bn({ devicePixelContentBoxSize: fo(), borderBoxSize: fo(), contentBoxSize: fo(), contentRect: new Ih(0, 0, 0, 0) }), Mh = function(t, r) {
  if (r === void 0 && (r = false), sl.has(t) && !r) return sl.get(t);
  if (Bh(t)) return sl.set(t, yf), yf;
  var o = getComputedStyle(t), i = qs(t) && t.ownerSVGElement && t.getBBox(), a = !yw && o.boxSizing === "border-box", c = Cw.test(o.writingMode || ""), u = !i && Cf.test(o.overflowY || ""), d = !i && Cf.test(o.overflowX || ""), f = i ? 0 : wr(o.paddingTop), p = i ? 0 : wr(o.paddingRight), g = i ? 0 : wr(o.paddingBottom), m = i ? 0 : wr(o.paddingLeft), C = i ? 0 : wr(o.borderTopWidth), x = i ? 0 : wr(o.borderRightWidth), y = i ? 0 : wr(o.borderBottomWidth), P = i ? 0 : wr(o.borderLeftWidth), _ = m + p, $ = f + g, R = P + x, L = C + y, I = d ? t.offsetHeight - L - t.clientHeight : 0, F = u ? t.offsetWidth - R - t.clientWidth : 0, k = a ? _ + R : 0, S = a ? $ + L : 0, M = i ? i.width : wr(o.width) - k - F, A = i ? i.height : wr(o.height) - S - I, V = M + _ + F + R, J = A + $ + I + L, W = Bn({ devicePixelContentBoxSize: fo(Math.round(M * devicePixelRatio), Math.round(A * devicePixelRatio), c), borderBoxSize: fo(V, J, c), contentBoxSize: fo(M, A, c), contentRect: new Ih(m, f, M, A) });
  return sl.set(t, W), W;
}, Ah = function(t, r, o) {
  var i = Mh(t, o), a = i.borderBoxSize, c = i.contentBoxSize, u = i.devicePixelContentBoxSize;
  switch (r) {
    case ei.DEVICE_PIXEL_CONTENT_BOX:
      return u;
    case ei.BORDER_BOX:
      return a;
    default:
      return c;
  }
}, ww = /* @__PURE__ */ (function() {
  function t(r) {
    var o = Mh(r);
    this.target = r, this.contentRect = o.contentRect, this.borderBoxSize = Bn([o.borderBoxSize]), this.contentBoxSize = Bn([o.contentBoxSize]), this.devicePixelContentBoxSize = Bn([o.devicePixelContentBoxSize]);
  }
  return t;
})(), Lh = function(t) {
  if (Bh(t)) return 1 / 0;
  for (var r = 0, o = t.parentNode; o; ) r += 1, o = o.parentNode;
  return r;
}, Sw = function() {
  var t = 1 / 0, r = [];
  In.forEach(function(u) {
    if (u.activeTargets.length !== 0) {
      var d = [];
      u.activeTargets.forEach(function(p) {
        var g = new ww(p.target), m = Lh(p.target);
        d.push(g), p.lastReportedSize = Ah(p.target, p.observedBox), m < t && (t = m);
      }), r.push(function() {
        u.callback.call(u.observer, d, u.observer);
      }), u.activeTargets.splice(0, u.activeTargets.length);
    }
  });
  for (var o = 0, i = r; o < i.length; o++) {
    var a = i[o];
    a();
  }
  return t;
}, wf = function(t) {
  In.forEach(function(o) {
    o.activeTargets.splice(0, o.activeTargets.length), o.skippedTargets.splice(0, o.skippedTargets.length), o.observationTargets.forEach(function(a) {
      a.isActive() && (Lh(a.target) > t ? o.activeTargets.push(a) : o.skippedTargets.push(a));
    });
  });
}, $w = function() {
  var t = 0;
  for (wf(t); gw(); ) t = Sw(), wf(t);
  return vw() && mw(), t > 0;
}, as, Fh = [], Pw = function() {
  return Fh.splice(0).forEach(function(t) {
    return t();
  });
}, _w = function(t) {
  if (!as) {
    var r = 0, o = document.createTextNode(""), i = { characterData: true };
    new MutationObserver(function() {
      return Pw();
    }).observe(o, i), as = function() {
      o.textContent = "".concat(r ? r-- : r++);
    };
  }
  Fh.push(t), as();
}, Tw = function(t) {
  _w(function() {
    requestAnimationFrame(t);
  });
}, pl = 0, Ew = function() {
  return !!pl;
}, zw = 250, Rw = { attributes: true, characterData: true, childList: true, subtree: true }, Sf = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], $f = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, ss = false, Iw = (function() {
  function t() {
    var r = this;
    this.stopped = true, this.listener = function() {
      return r.schedule();
    };
  }
  return t.prototype.run = function(r) {
    var o = this;
    if (r === void 0 && (r = zw), !ss) {
      ss = true;
      var i = $f(r);
      Tw(function() {
        var a = false;
        try {
          a = $w();
        } finally {
          if (ss = false, r = i - $f(), !Ew()) return;
          a ? o.run(1e3) : r > 0 ? o.run(r) : o.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var r = this, o = function() {
      return r.observer && r.observer.observe(document.body, Rw);
    };
    document.body ? o() : qo.addEventListener("DOMContentLoaded", o);
  }, t.prototype.start = function() {
    var r = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), Sf.forEach(function(o) {
      return qo.addEventListener(o, r.listener, true);
    }));
  }, t.prototype.stop = function() {
    var r = this;
    this.stopped || (this.observer && this.observer.disconnect(), Sf.forEach(function(o) {
      return qo.removeEventListener(o, r.listener, true);
    }), this.stopped = true);
  }, t;
})(), _s = new Iw(), Pf = function(t) {
  !pl && t > 0 && _s.start(), pl += t, !pl && _s.stop();
}, Bw = function(t) {
  return !qs(t) && !xw(t) && getComputedStyle(t).display === "inline";
}, Mw = (function() {
  function t(r, o) {
    this.target = r, this.observedBox = o || ei.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return t.prototype.isActive = function() {
    var r = Ah(this.target, this.observedBox, true);
    return Bw(this.target) && (this.lastReportedSize = r), this.lastReportedSize.inlineSize !== r.inlineSize || this.lastReportedSize.blockSize !== r.blockSize;
  }, t;
})(), Aw = /* @__PURE__ */ (function() {
  function t(r, o) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = r, this.callback = o;
  }
  return t;
})(), cl = /* @__PURE__ */ new WeakMap(), _f = function(t, r) {
  for (var o = 0; o < t.length; o += 1) if (t[o].target === r) return o;
  return -1;
}, ul = (function() {
  function t() {
  }
  return t.connect = function(r, o) {
    var i = new Aw(r, o);
    cl.set(r, i);
  }, t.observe = function(r, o, i) {
    var a = cl.get(r), c = a.observationTargets.length === 0;
    _f(a.observationTargets, o) < 0 && (c && In.push(a), a.observationTargets.push(new Mw(o, i && i.box)), Pf(1), _s.schedule());
  }, t.unobserve = function(r, o) {
    var i = cl.get(r), a = _f(i.observationTargets, o), c = i.observationTargets.length === 1;
    a >= 0 && (c && In.splice(In.indexOf(i), 1), i.observationTargets.splice(a, 1), Pf(-1));
  }, t.disconnect = function(r) {
    var o = this, i = cl.get(r);
    i.observationTargets.slice().forEach(function(a) {
      return o.unobserve(r, a.target);
    }), i.activeTargets.splice(0, i.activeTargets.length);
  }, t;
})(), Lw = (function() {
  function t(r) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof r != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ul.connect(this, r);
  }
  return t.prototype.observe = function(r, o) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!xf(r)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ul.observe(this, r, o);
  }, t.prototype.unobserve = function(r) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!xf(r)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ul.unobserve(this, r);
  }, t.prototype.disconnect = function() {
    ul.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
})();
class Fw {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Lw)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(r) {
    for (const o of r) {
      const i = this.elHandlersMap.get(o.target);
      i !== void 0 && i(o);
    }
  }
  registerHandler(r, o) {
    this.elHandlersMap.set(r, o), this.observer.observe(r);
  }
  unregisterHandler(r) {
    this.elHandlersMap.has(r) && (this.elHandlersMap.delete(r), this.observer.unobserve(r));
  }
}
const Tf = new Fw(), Ef = Ee({ name: "ResizeObserver", props: { onResize: Function }, setup(t) {
  let r = false;
  const o = vo().proxy;
  function i(a) {
    const { onResize: c } = t;
    c !== void 0 && c(a);
  }
  vr(() => {
    const a = o.$el;
    if (a === void 0) {
      hf("resize-observer", "$el does not exist.");
      return;
    }
    if (a.nextElementSibling !== a.nextSibling && a.nodeType === 3 && a.nodeValue !== "") {
      hf("resize-observer", "$el can not be observed (it may be a text node).");
      return;
    }
    a.nextElementSibling !== null && (Tf.registerHandler(a.nextElementSibling, i), r = true);
  }), It(() => {
    r && Tf.unregisterHandler(o.$el.nextElementSibling);
  });
}, render() {
  return Kf(this.$slots, "default");
} }), Wr = "v-hidden", Hw = Go("[v-hidden]", { display: "none!important" }), qT = Ee({ name: "Overflow", props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(t, { slots: r }) {
  const o = se(null), i = se(null);
  function a(u) {
    const { value: d } = o, { getCounter: f, getTail: p } = t;
    let g;
    if (f !== void 0 ? g = f() : g = i.value, !d || !g) return;
    g.hasAttribute(Wr) && g.removeAttribute(Wr);
    const { children: m } = d;
    if (u.showAllItemsBeforeCalculate) for (const L of m) L.hasAttribute(Wr) && L.removeAttribute(Wr);
    const C = d.offsetWidth, x = [], y = r.tail ? p == null ? void 0 : p() : null;
    let P = y ? y.offsetWidth : 0, _ = false;
    const $ = d.children.length - (r.tail ? 1 : 0);
    for (let L = 0; L < $ - 1; ++L) {
      if (L < 0) continue;
      const I = m[L];
      if (_) {
        I.hasAttribute(Wr) || I.setAttribute(Wr, "");
        continue;
      } else I.hasAttribute(Wr) && I.removeAttribute(Wr);
      const F = I.offsetWidth;
      if (P += F, x[L] = F, P > C) {
        const { updateCounter: k } = t;
        for (let S = L; S >= 0; --S) {
          const M = $ - 1 - S;
          k !== void 0 ? k(M) : g.textContent = `${M}`;
          const A = g.offsetWidth;
          if (P -= x[S], P + A <= C || S === 0) {
            _ = true, L = S - 1, y && (L === -1 ? (y.style.maxWidth = `${C - A}px`, y.style.boxSizing = "border-box") : y.style.maxWidth = "");
            const { onUpdateCount: V } = t;
            V && V(M);
            break;
          }
        }
      }
    }
    const { onUpdateOverflow: R } = t;
    _ ? R !== void 0 && R(true) : (R !== void 0 && R(false), g.setAttribute(Wr, ""));
  }
  const c = xo();
  return Hw.mount({ id: "vueuc/overflow", head: true, anchorMetaName: Eh, ssr: c }), vr(() => a({ showAllItemsBeforeCalculate: false })), { selfRef: o, counterRef: i, sync: a };
}, render() {
  const { $slots: t } = this;
  return Mn(() => this.sync({ showAllItemsBeforeCalculate: false })), B("div", { class: "v-overflow", ref: "selfRef" }, [Kf(t, "default"), t.counter ? t.counter() : B("span", { style: { display: "inline-block" }, ref: "counterRef" }), t.tail ? t.tail() : null]);
} });
function Hh(t) {
  return t instanceof HTMLElement;
}
function Oh(t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const o = t.childNodes[r];
    if (Hh(o) && (Dh(o) || Oh(o))) return true;
  }
  return false;
}
function kh(t) {
  for (let r = t.childNodes.length - 1; r >= 0; r--) {
    const o = t.childNodes[r];
    if (Hh(o) && (Dh(o) || kh(o))) return true;
  }
  return false;
}
function Dh(t) {
  if (!Ow(t)) return false;
  try {
    t.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === t;
}
function Ow(t) {
  if (t.tabIndex > 0 || t.tabIndex === 0 && t.getAttribute("tabIndex") !== null) return true;
  if (t.getAttribute("disabled")) return false;
  switch (t.nodeName) {
    case "A":
      return !!t.href && t.rel !== "ignore";
    case "INPUT":
      return t.type !== "hidden" && t.type !== "file";
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
}
let No = [];
const Wh = Ee({ name: "FocusTrap", props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(t) {
  const r = By(), o = se(null), i = se(null);
  let a = false, c = false;
  const u = typeof document > "u" ? null : document.activeElement;
  function d() {
    return No[No.length - 1] === r;
  }
  function f(_) {
    var $;
    _.code === "Escape" && d() && (($ = t.onEsc) === null || $ === void 0 || $.call(t, _));
  }
  vr(() => {
    ft(() => t.active, (_) => {
      _ ? (m(), Ze("keydown", document, f)) : (Xe("keydown", document, f), a && C());
    }, { immediate: true });
  }), It(() => {
    Xe("keydown", document, f), a && C();
  });
  function p(_) {
    if (!c && d()) {
      const $ = g();
      if ($ === null || $.contains(Jo(_))) return;
      x("first");
    }
  }
  function g() {
    const _ = o.value;
    if (_ === null) return null;
    let $ = _;
    for (; $ = $.nextSibling, !($ === null || $ instanceof Element && $.tagName === "DIV"); ) ;
    return $;
  }
  function m() {
    var _;
    if (!t.disabled) {
      if (No.push(r), t.autoFocus) {
        const { initialFocusTo: $ } = t;
        $ === void 0 ? x("first") : (_ = pf($)) === null || _ === void 0 || _.focus({ preventScroll: true });
      }
      a = true, document.addEventListener("focus", p, true);
    }
  }
  function C() {
    var _;
    if (t.disabled || (document.removeEventListener("focus", p, true), No = No.filter((R) => R !== r), d())) return;
    const { finalFocusTo: $ } = t;
    $ !== void 0 ? (_ = pf($)) === null || _ === void 0 || _.focus({ preventScroll: true }) : t.returnFocusOnDeactivated && u instanceof HTMLElement && (c = true, u.focus({ preventScroll: true }), c = false);
  }
  function x(_) {
    if (d() && t.active) {
      const $ = o.value, R = i.value;
      if ($ !== null && R !== null) {
        const L = g();
        if (L == null || L === R) {
          c = true, $.focus({ preventScroll: true }), c = false;
          return;
        }
        c = true;
        const I = _ === "first" ? Oh(L) : kh(L);
        c = false, I || (c = true, $.focus({ preventScroll: true }), c = false);
      }
    }
  }
  function y(_) {
    if (c) return;
    const $ = g();
    $ !== null && (_.relatedTarget !== null && $.contains(_.relatedTarget) ? x("last") : x("first"));
  }
  function P(_) {
    c || (_.relatedTarget !== null && _.relatedTarget === o.value ? x("last") : x("first"));
  }
  return { focusableStartRef: o, focusableEndRef: i, focusableStyle: "position: absolute; height: 0; width: 0;", handleStartFocus: y, handleEndFocus: P };
}, render() {
  const { default: t } = this.$slots;
  if (t === void 0) return null;
  if (this.disabled) return t();
  const { active: r, focusableStyle: o } = this;
  return B(Hn, null, [B("div", { "aria-hidden": "true", tabindex: r ? "0" : "-1", ref: "focusableStartRef", style: o, onFocus: this.handleStartFocus }), t(), B("div", { "aria-hidden": "true", style: o, ref: "focusableEndRef", tabindex: r ? "0" : "-1", onFocus: this.handleEndFocus })]);
} });
function zf(t) {
  return t.replace(/#|\(|\)|,|\s|\./g, "_");
}
const kw = /^(\d|\.)+$/, Rf = /(\d|\.)+/;
function gl(t, { c: r = 1, offset: o = 0, attachPx: i = true } = {}) {
  if (typeof t == "number") {
    const a = (t + o) * r;
    return a === 0 ? "0" : `${a}px`;
  } else if (typeof t == "string") if (kw.test(t)) {
    const a = (Number(t) + o) * r;
    return i ? a === 0 ? "0" : `${a}px` : `${a}`;
  } else {
    const a = Rf.exec(t);
    return a ? t.replace(Rf, String((Number(a[0]) + o) * r)) : t;
  }
  return t;
}
function If(t) {
  const { left: r, right: o, top: i, bottom: a } = Tn(t);
  return `${i} ${r} ${a} ${o}`;
}
let cs;
function Dw() {
  return cs === void 0 && (cs = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), cs;
}
const Nh = /* @__PURE__ */ new WeakSet();
function YT(t) {
  Nh.add(t);
}
function Ww(t) {
  return !Nh.has(t);
}
function Ln(t, r) {
  console.error(`[naive/${t}]: ${r}`);
}
function XT(t, r, o) {
  console.error(`[naive/${t}]: ${r}`, o);
}
function Nw(t, r) {
  throw new Error(`[naive/${t}]: ${r}`);
}
function Wt(t, ...r) {
  if (Array.isArray(t)) t.forEach((o) => Wt(o, ...r));
  else return t(...r);
}
function jw(t) {
  return (r) => {
    r ? t.value = r.$el : t.value = null;
  };
}
function xl(t, r = true, o = []) {
  return t.forEach((i) => {
    if (i !== null) {
      if (typeof i != "object") {
        (typeof i == "string" || typeof i == "number") && o.push(vl(String(i)));
        return;
      }
      if (Array.isArray(i)) {
        xl(i, r, o);
        return;
      }
      if (i.type === Hn) {
        if (i.children === null) return;
        Array.isArray(i.children) && xl(i.children, r, o);
      } else {
        if (i.type === Fs && r) return;
        o.push(i);
      }
    }
  }), o;
}
function Gw(t, r = "default", o = void 0) {
  const i = t[r];
  if (!i) return Ln("getFirstSlotVNode", `slot[${r}] is empty`), null;
  const a = xl(i(o));
  return a.length === 1 ? a[0] : (Ln("getFirstSlotVNode", `slot[${r}] should have exactly one child`), null);
}
function Vw(t, r, o) {
  if (!r) return null;
  const i = xl(r(o));
  return i.length === 1 ? i[0] : (Ln("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function ti(t, r = [], o) {
  const i = {};
  return r.forEach((a) => {
    i[a] = t[a];
  }), Object.assign(i, o);
}
function Ys(t) {
  return Object.keys(t);
}
function ZT(t, r = [], o) {
  const i = {};
  return Object.getOwnPropertyNames(t).forEach((c) => {
    r.includes(c) || (i[c] = t[c]);
  }), Object.assign(i, o);
}
function $r(t, ...r) {
  return typeof t == "function" ? t(...r) : typeof t == "string" ? vl(t) : typeof t == "number" ? vl(String(t)) : null;
}
function cr(t) {
  return t.some((r) => DC(r) ? !(r.type === Fs || r.type === Hn && !cr(r.children)) : true) ? t : null;
}
function Bf(t, r) {
  return t && cr(t()) || r();
}
function QT(t, r, o) {
  return t && cr(t(r)) || o(r);
}
function Dt(t, r) {
  const o = t && cr(t());
  return r(o || null);
}
function JT(t, r, o) {
  const i = t && cr(t(r));
  return o(i || null);
}
function Ts(t) {
  return !(t && cr(t()));
}
const Mf = Ee({ render() {
  var t, r;
  return (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t);
} }), Vr = "n-config-provider", Cl = "n";
function zr(t = {}, r = { defaultBordered: true }) {
  const o = He(Vr, null);
  return { inlineThemeDisabled: o == null ? void 0 : o.inlineThemeDisabled, mergedRtlRef: o == null ? void 0 : o.mergedRtlRef, mergedComponentPropsRef: o == null ? void 0 : o.mergedComponentPropsRef, mergedBreakpointsRef: o == null ? void 0 : o.mergedBreakpointsRef, mergedBorderedRef: Y(() => {
    var i, a;
    const { bordered: c } = t;
    return c !== void 0 ? c : (a = (i = o == null ? void 0 : o.mergedBorderedRef.value) !== null && i !== void 0 ? i : r.defaultBordered) !== null && a !== void 0 ? a : true;
  }), mergedClsPrefixRef: o ? o.mergedClsPrefixRef : jr(Cl), namespaceRef: Y(() => o == null ? void 0 : o.mergedNamespaceRef.value) };
}
function eE() {
  const t = He(Vr, null);
  return t ? t.mergedClsPrefixRef : jr(Cl);
}
function Kr(t, r, o, i) {
  o || Nw("useThemeClass", "cssVarsRef is not passed");
  const a = He(Vr, null), c = a == null ? void 0 : a.mergedThemeHashRef, u = a == null ? void 0 : a.styleMountTarget, d = se(""), f = xo();
  let p;
  const g = `__${t}`, m = () => {
    let C = g;
    const x = r ? r.value : void 0, y = c == null ? void 0 : c.value;
    y && (C += `-${y}`), x && (C += `-${x}`);
    const { themeOverrides: P, builtinThemeOverrides: _ } = i;
    P && (C += `-${Zo(JSON.stringify(P))}`), _ && (C += `-${Zo(JSON.stringify(_))}`), d.value = C, p = () => {
      const $ = o.value;
      let R = "";
      for (const L in $) R += `${L}: ${$[L]};`;
      X(`.${C}`, R).mount({ id: C, ssr: f, parent: u }), p = void 0;
    };
  };
  return mo(() => {
    m();
  }), { themeClass: d, onRender: () => {
    p == null ? void 0 : p();
  } };
}
const Af = "n-form-item";
function Kw(t, { defaultSize: r = "medium", mergedSize: o, mergedDisabled: i } = {}) {
  const a = He(Af, null);
  dt(Af, null);
  const c = Y(o ? () => o(a) : () => {
    const { size: f } = t;
    if (f) return f;
    if (a) {
      const { mergedSize: p } = a;
      if (p.value !== void 0) return p.value;
    }
    return r;
  }), u = Y(i ? () => i(a) : () => {
    const { disabled: f } = t;
    return f !== void 0 ? f : a ? a.disabled.value : false;
  }), d = Y(() => {
    const { status: f } = t;
    return f || (a == null ? void 0 : a.mergedValidationStatus.value);
  });
  return It(() => {
    a && a.restoreValidation();
  }), { mergedSizeRef: c, mergedDisabledRef: u, mergedStatusRef: d, nTriggerFormBlur() {
    a && a.handleContentBlur();
  }, nTriggerFormChange() {
    a && a.handleContentChange();
  }, nTriggerFormFocus() {
    a && a.handleContentFocus();
  }, nTriggerFormInput() {
    a && a.handleContentInput();
  } };
}
var dl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tE(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Vo = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
var Uw = Vo.exports, Lf;
function qw() {
  return Lf || (Lf = 1, (function(t, r) {
    (function() {
      var o, i = "4.17.21", a = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", d = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, g = "__lodash_placeholder__", m = 1, C = 2, x = 4, y = 1, P = 2, _ = 1, $ = 2, R = 4, L = 8, I = 16, F = 32, k = 64, S = 128, M = 256, A = 512, V = 30, J = "...", W = 800, oe = 16, re = 1, G = 2, ie = 3, U = 1 / 0, ue = 9007199254740991, Be = 17976931348623157e292, ze = NaN, Le = 4294967295, Oe = Le - 1, mt = Le >>> 1, xt = [["ary", S], ["bind", _], ["bindKey", $], ["curry", L], ["curryRight", I], ["flip", A], ["partial", F], ["partialRight", k], ["rearg", M]], Tt = "[object Arguments]", Pe = "[object Array]", O = "[object AsyncFunction]", te = "[object Boolean]", K = "[object Date]", he = "[object DOMException]", Me = "[object Error]", je = "[object Function]", we = "[object GeneratorFunction]", ge = "[object Map]", Ge = "[object Number]", jt = "[object Null]", Ue = "[object Object]", kn = "[object Promise]", yo = "[object Proxy]", Ve = "[object RegExp]", We = "[object Set]", Gt = "[object String]", Dn = "[object Symbol]", ci = "[object Undefined]", Vt = "[object WeakMap]", ui = "[object WeakSet]", pn = "[object ArrayBuffer]", Rr = "[object DataView]", Wn = "[object Float32Array]", wo = "[object Float64Array]", gn = "[object Int8Array]", vn = "[object Int16Array]", Nn = "[object Int32Array]", mr = "[object Uint8Array]", di = "[object Uint8ClampedArray]", Z = "[object Uint16Array]", de = "[object Uint32Array]", Se = /\b__p \+= '';/g, qe = /\b(__p \+=) '' \+/g, st = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ct = /&(?:amp|lt|gt|quot|#39);/g, Mt = /[&<>"']/g, et = RegExp(Ct.source), At = RegExp(Mt.source), br = /<%-([\s\S]+?)%>/g, Rl = /<%([\s\S]+?)%>/g, fi = /<%=([\s\S]+?)%>/g, Il = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bl = /^\w*$/, Ml = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, So = /[\\^$.*+?()[\]{}|]/g, Al = RegExp(So.source), $o = /^\s+/, Ll = /\s/, Fl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Hl = /\{\n\/\* \[wrapped with (.+)\] \*/, Ol = /,? & /, kl = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Dl = /[()=,{}\[\]\/\s]/, Wl = /\\(\\)?/g, Nl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hi = /\w*$/, wp = /^[-+]0x[0-9a-f]+$/i, Sp = /^0b[01]+$/i, $p = /^\[object .+?Constructor\]$/, Pp = /^0o[0-7]+$/i, _p = /^(?:0|[1-9]\d*)$/, Tp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, pi = /($^)/, Ep = /['\n\r\u2028\u2029\\]/g, gi = "\\ud800-\\udfff", zp = "\\u0300-\\u036f", Rp = "\\ufe20-\\ufe2f", Ip = "\\u20d0-\\u20ff", ic = zp + Rp + Ip, lc = "\\u2700-\\u27bf", ac = "a-z\\xdf-\\xf6\\xf8-\\xff", Bp = "\\xac\\xb1\\xd7\\xf7", Mp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ap = "\\u2000-\\u206f", Lp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", sc = "A-Z\\xc0-\\xd6\\xd8-\\xde", cc = "\\ufe0e\\ufe0f", uc = Bp + Mp + Ap + Lp, jl = "['\u2019]", Fp = "[" + gi + "]", dc = "[" + uc + "]", vi = "[" + ic + "]", fc = "\\d+", Hp = "[" + lc + "]", hc = "[" + ac + "]", pc = "[^" + gi + uc + fc + lc + ac + sc + "]", Gl = "\\ud83c[\\udffb-\\udfff]", Op = "(?:" + vi + "|" + Gl + ")", gc = "[^" + gi + "]", Vl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Kl = "[\\ud800-\\udbff][\\udc00-\\udfff]", jn = "[" + sc + "]", vc = "\\u200d", mc = "(?:" + hc + "|" + pc + ")", kp = "(?:" + jn + "|" + pc + ")", bc = "(?:" + jl + "(?:d|ll|m|re|s|t|ve))?", xc = "(?:" + jl + "(?:D|LL|M|RE|S|T|VE))?", Cc = Op + "?", yc = "[" + cc + "]?", Dp = "(?:" + vc + "(?:" + [gc, Vl, Kl].join("|") + ")" + yc + Cc + ")*", Wp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Np = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wc = yc + Cc + Dp, jp = "(?:" + [Hp, Vl, Kl].join("|") + ")" + wc, Gp = "(?:" + [gc + vi + "?", vi, Vl, Kl, Fp].join("|") + ")", Vp = RegExp(jl, "g"), Kp = RegExp(vi, "g"), Ul = RegExp(Gl + "(?=" + Gl + ")|" + Gp + wc, "g"), Up = RegExp([jn + "?" + hc + "+" + bc + "(?=" + [dc, jn, "$"].join("|") + ")", kp + "+" + xc + "(?=" + [dc, jn + mc, "$"].join("|") + ")", jn + "?" + mc + "+" + bc, jn + "+" + xc, Np, Wp, fc, jp].join("|"), "g"), qp = RegExp("[" + vc + gi + ic + cc + "]"), Yp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Xp = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Zp = -1, tt = {};
      tt[Wn] = tt[wo] = tt[gn] = tt[vn] = tt[Nn] = tt[mr] = tt[di] = tt[Z] = tt[de] = true, tt[Tt] = tt[Pe] = tt[pn] = tt[te] = tt[Rr] = tt[K] = tt[Me] = tt[je] = tt[ge] = tt[Ge] = tt[Ue] = tt[Ve] = tt[We] = tt[Gt] = tt[Vt] = false;
      var Qe = {};
      Qe[Tt] = Qe[Pe] = Qe[pn] = Qe[Rr] = Qe[te] = Qe[K] = Qe[Wn] = Qe[wo] = Qe[gn] = Qe[vn] = Qe[Nn] = Qe[ge] = Qe[Ge] = Qe[Ue] = Qe[Ve] = Qe[We] = Qe[Gt] = Qe[Dn] = Qe[mr] = Qe[di] = Qe[Z] = Qe[de] = true, Qe[Me] = Qe[je] = Qe[Vt] = false;
      var Qp = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00C7: "C", \u00E7: "c", \u00D0: "D", \u00F0: "d", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00D1: "N", \u00F1: "n", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00DD: "Y", \u00FD: "y", \u00FF: "y", \u00C6: "Ae", \u00E6: "ae", \u00DE: "Th", \u00FE: "th", \u00DF: "ss", \u0100: "A", \u0102: "A", \u0104: "A", \u0101: "a", \u0103: "a", \u0105: "a", \u0106: "C", \u0108: "C", \u010A: "C", \u010C: "C", \u0107: "c", \u0109: "c", \u010B: "c", \u010D: "c", \u010E: "D", \u0110: "D", \u010F: "d", \u0111: "d", \u0112: "E", \u0114: "E", \u0116: "E", \u0118: "E", \u011A: "E", \u0113: "e", \u0115: "e", \u0117: "e", \u0119: "e", \u011B: "e", \u011C: "G", \u011E: "G", \u0120: "G", \u0122: "G", \u011D: "g", \u011F: "g", \u0121: "g", \u0123: "g", \u0124: "H", \u0126: "H", \u0125: "h", \u0127: "h", \u0128: "I", \u012A: "I", \u012C: "I", \u012E: "I", \u0130: "I", \u0129: "i", \u012B: "i", \u012D: "i", \u012F: "i", \u0131: "i", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013B: "L", \u013D: "L", \u013F: "L", \u0141: "L", \u013A: "l", \u013C: "l", \u013E: "l", \u0140: "l", \u0142: "l", \u0143: "N", \u0145: "N", \u0147: "N", \u014A: "N", \u0144: "n", \u0146: "n", \u0148: "n", \u014B: "n", \u014C: "O", \u014E: "O", \u0150: "O", \u014D: "o", \u014F: "o", \u0151: "o", \u0154: "R", \u0156: "R", \u0158: "R", \u0155: "r", \u0157: "r", \u0159: "r", \u015A: "S", \u015C: "S", \u015E: "S", \u0160: "S", \u015B: "s", \u015D: "s", \u015F: "s", \u0161: "s", \u0162: "T", \u0164: "T", \u0166: "T", \u0163: "t", \u0165: "t", \u0167: "t", \u0168: "U", \u016A: "U", \u016C: "U", \u016E: "U", \u0170: "U", \u0172: "U", \u0169: "u", \u016B: "u", \u016D: "u", \u016F: "u", \u0171: "u", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017B: "Z", \u017D: "Z", \u017A: "z", \u017C: "z", \u017E: "z", \u0132: "IJ", \u0133: "ij", \u0152: "Oe", \u0153: "oe", \u0149: "'n", \u017F: "s" }, Jp = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, eg = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, tg = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, rg = parseFloat, ng = parseInt, Sc = typeof dl == "object" && dl && dl.Object === Object && dl, og = typeof self == "object" && self && self.Object === Object && self, yt = Sc || og || Function("return this")(), ql = r && !r.nodeType && r, mn = ql && true && t && !t.nodeType && t, $c = mn && mn.exports === ql, Yl = $c && Sc.process, er = (function() {
        try {
          var E = mn && mn.require && mn.require("util").types;
          return E || Yl && Yl.binding && Yl.binding("util");
        } catch {
        }
      })(), Pc = er && er.isArrayBuffer, _c = er && er.isDate, Tc = er && er.isMap, Ec = er && er.isRegExp, zc = er && er.isSet, Rc = er && er.isTypedArray;
      function Kt(E, D, H) {
        switch (H.length) {
          case 0:
            return E.call(D);
          case 1:
            return E.call(D, H[0]);
          case 2:
            return E.call(D, H[0], H[1]);
          case 3:
            return E.call(D, H[0], H[1], H[2]);
        }
        return E.apply(D, H);
      }
      function ig(E, D, H, le) {
        for (var $e = -1, De = E == null ? 0 : E.length; ++$e < De; ) {
          var pt = E[$e];
          D(le, pt, H(pt), E);
        }
        return le;
      }
      function tr(E, D) {
        for (var H = -1, le = E == null ? 0 : E.length; ++H < le && D(E[H], H, E) !== false; ) ;
        return E;
      }
      function lg(E, D) {
        for (var H = E == null ? 0 : E.length; H-- && D(E[H], H, E) !== false; ) ;
        return E;
      }
      function Ic(E, D) {
        for (var H = -1, le = E == null ? 0 : E.length; ++H < le; ) if (!D(E[H], H, E)) return false;
        return true;
      }
      function Ur(E, D) {
        for (var H = -1, le = E == null ? 0 : E.length, $e = 0, De = []; ++H < le; ) {
          var pt = E[H];
          D(pt, H, E) && (De[$e++] = pt);
        }
        return De;
      }
      function mi(E, D) {
        var H = E == null ? 0 : E.length;
        return !!H && Gn(E, D, 0) > -1;
      }
      function Xl(E, D, H) {
        for (var le = -1, $e = E == null ? 0 : E.length; ++le < $e; ) if (H(D, E[le])) return true;
        return false;
      }
      function nt(E, D) {
        for (var H = -1, le = E == null ? 0 : E.length, $e = Array(le); ++H < le; ) $e[H] = D(E[H], H, E);
        return $e;
      }
      function qr(E, D) {
        for (var H = -1, le = D.length, $e = E.length; ++H < le; ) E[$e + H] = D[H];
        return E;
      }
      function Zl(E, D, H, le) {
        var $e = -1, De = E == null ? 0 : E.length;
        for (le && De && (H = E[++$e]); ++$e < De; ) H = D(H, E[$e], $e, E);
        return H;
      }
      function ag(E, D, H, le) {
        var $e = E == null ? 0 : E.length;
        for (le && $e && (H = E[--$e]); $e--; ) H = D(H, E[$e], $e, E);
        return H;
      }
      function Ql(E, D) {
        for (var H = -1, le = E == null ? 0 : E.length; ++H < le; ) if (D(E[H], H, E)) return true;
        return false;
      }
      var sg = Jl("length");
      function cg(E) {
        return E.split("");
      }
      function ug(E) {
        return E.match(kl) || [];
      }
      function Bc(E, D, H) {
        var le;
        return H(E, function($e, De, pt) {
          if (D($e, De, pt)) return le = De, false;
        }), le;
      }
      function bi(E, D, H, le) {
        for (var $e = E.length, De = H + (le ? 1 : -1); le ? De-- : ++De < $e; ) if (D(E[De], De, E)) return De;
        return -1;
      }
      function Gn(E, D, H) {
        return D === D ? wg(E, D, H) : bi(E, Mc, H);
      }
      function dg(E, D, H, le) {
        for (var $e = H - 1, De = E.length; ++$e < De; ) if (le(E[$e], D)) return $e;
        return -1;
      }
      function Mc(E) {
        return E !== E;
      }
      function Ac(E, D) {
        var H = E == null ? 0 : E.length;
        return H ? ta(E, D) / H : ze;
      }
      function Jl(E) {
        return function(D) {
          return D == null ? o : D[E];
        };
      }
      function ea(E) {
        return function(D) {
          return E == null ? o : E[D];
        };
      }
      function Lc(E, D, H, le, $e) {
        return $e(E, function(De, pt, Ye) {
          H = le ? (le = false, De) : D(H, De, pt, Ye);
        }), H;
      }
      function fg(E, D) {
        var H = E.length;
        for (E.sort(D); H--; ) E[H] = E[H].value;
        return E;
      }
      function ta(E, D) {
        for (var H, le = -1, $e = E.length; ++le < $e; ) {
          var De = D(E[le]);
          De !== o && (H = H === o ? De : H + De);
        }
        return H;
      }
      function ra(E, D) {
        for (var H = -1, le = Array(E); ++H < E; ) le[H] = D(H);
        return le;
      }
      function hg(E, D) {
        return nt(D, function(H) {
          return [H, E[H]];
        });
      }
      function Fc(E) {
        return E && E.slice(0, Dc(E) + 1).replace($o, "");
      }
      function Ut(E) {
        return function(D) {
          return E(D);
        };
      }
      function na(E, D) {
        return nt(D, function(H) {
          return E[H];
        });
      }
      function Po(E, D) {
        return E.has(D);
      }
      function Hc(E, D) {
        for (var H = -1, le = E.length; ++H < le && Gn(D, E[H], 0) > -1; ) ;
        return H;
      }
      function Oc(E, D) {
        for (var H = E.length; H-- && Gn(D, E[H], 0) > -1; ) ;
        return H;
      }
      function pg(E, D) {
        for (var H = E.length, le = 0; H--; ) E[H] === D && ++le;
        return le;
      }
      var gg = ea(Qp), vg = ea(Jp);
      function mg(E) {
        return "\\" + tg[E];
      }
      function bg(E, D) {
        return E == null ? o : E[D];
      }
      function Vn(E) {
        return qp.test(E);
      }
      function xg(E) {
        return Yp.test(E);
      }
      function Cg(E) {
        for (var D, H = []; !(D = E.next()).done; ) H.push(D.value);
        return H;
      }
      function oa(E) {
        var D = -1, H = Array(E.size);
        return E.forEach(function(le, $e) {
          H[++D] = [$e, le];
        }), H;
      }
      function kc(E, D) {
        return function(H) {
          return E(D(H));
        };
      }
      function Yr(E, D) {
        for (var H = -1, le = E.length, $e = 0, De = []; ++H < le; ) {
          var pt = E[H];
          (pt === D || pt === g) && (E[H] = g, De[$e++] = H);
        }
        return De;
      }
      function xi(E) {
        var D = -1, H = Array(E.size);
        return E.forEach(function(le) {
          H[++D] = le;
        }), H;
      }
      function yg(E) {
        var D = -1, H = Array(E.size);
        return E.forEach(function(le) {
          H[++D] = [le, le];
        }), H;
      }
      function wg(E, D, H) {
        for (var le = H - 1, $e = E.length; ++le < $e; ) if (E[le] === D) return le;
        return -1;
      }
      function Sg(E, D, H) {
        for (var le = H + 1; le--; ) if (E[le] === D) return le;
        return le;
      }
      function Kn(E) {
        return Vn(E) ? Pg(E) : sg(E);
      }
      function dr(E) {
        return Vn(E) ? _g(E) : cg(E);
      }
      function Dc(E) {
        for (var D = E.length; D-- && Ll.test(E.charAt(D)); ) ;
        return D;
      }
      var $g = ea(eg);
      function Pg(E) {
        for (var D = Ul.lastIndex = 0; Ul.test(E); ) ++D;
        return D;
      }
      function _g(E) {
        return E.match(Ul) || [];
      }
      function Tg(E) {
        return E.match(Up) || [];
      }
      var Eg = (function E(D) {
        D = D == null ? yt : Un.defaults(yt.Object(), D, Un.pick(yt, Xp));
        var H = D.Array, le = D.Date, $e = D.Error, De = D.Function, pt = D.Math, Ye = D.Object, ia = D.RegExp, zg = D.String, rr = D.TypeError, Ci = H.prototype, Rg = De.prototype, qn = Ye.prototype, yi = D["__core-js_shared__"], wi = Rg.toString, Ke = qn.hasOwnProperty, Ig = 0, Wc = (function() {
          var e = /[^.]+$/.exec(yi && yi.keys && yi.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Si = qn.toString, Bg = wi.call(Ye), Mg = yt._, Ag = ia("^" + wi.call(Ke).replace(So, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), $i = $c ? D.Buffer : o, Xr = D.Symbol, Pi = D.Uint8Array, Nc = $i ? $i.allocUnsafe : o, _i = kc(Ye.getPrototypeOf, Ye), jc = Ye.create, Gc = qn.propertyIsEnumerable, Ti = Ci.splice, Vc = Xr ? Xr.isConcatSpreadable : o, _o = Xr ? Xr.iterator : o, bn = Xr ? Xr.toStringTag : o, Ei = (function() {
          try {
            var e = Sn(Ye, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), Lg = D.clearTimeout !== yt.clearTimeout && D.clearTimeout, Fg = le && le.now !== yt.Date.now && le.now, Hg = D.setTimeout !== yt.setTimeout && D.setTimeout, zi = pt.ceil, Ri = pt.floor, la = Ye.getOwnPropertySymbols, Og = $i ? $i.isBuffer : o, Kc = D.isFinite, kg = Ci.join, Dg = kc(Ye.keys, Ye), gt = pt.max, $t = pt.min, Wg = le.now, Ng = D.parseInt, Uc = pt.random, jg = Ci.reverse, aa = Sn(D, "DataView"), To = Sn(D, "Map"), sa = Sn(D, "Promise"), Yn = Sn(D, "Set"), Eo = Sn(D, "WeakMap"), zo = Sn(Ye, "create"), Ii = Eo && new Eo(), Xn = {}, Gg = $n(aa), Vg = $n(To), Kg = $n(sa), Ug = $n(Yn), qg = $n(Eo), Bi = Xr ? Xr.prototype : o, Ro = Bi ? Bi.valueOf : o, qc = Bi ? Bi.toString : o;
        function v(e) {
          if (it(e) && !_e(e) && !(e instanceof Fe)) {
            if (e instanceof nr) return e;
            if (Ke.call(e, "__wrapped__")) return Yu(e);
          }
          return new nr(e);
        }
        var Zn = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(n) {
            if (!ot(n)) return {};
            if (jc) return jc(n);
            e.prototype = n;
            var l = new e();
            return e.prototype = o, l;
          };
        })();
        function Mi() {
        }
        function nr(e, n) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
        }
        v.templateSettings = { escape: br, evaluate: Rl, interpolate: fi, variable: "", imports: { _: v } }, v.prototype = Mi.prototype, v.prototype.constructor = v, nr.prototype = Zn(Mi.prototype), nr.prototype.constructor = nr;
        function Fe(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Le, this.__views__ = [];
        }
        function Yg() {
          var e = new Fe(this.__wrapped__);
          return e.__actions__ = Lt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Lt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Lt(this.__views__), e;
        }
        function Xg() {
          if (this.__filtered__) {
            var e = new Fe(this);
            e.__dir__ = -1, e.__filtered__ = true;
          } else e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function Zg() {
          var e = this.__wrapped__.value(), n = this.__dir__, l = _e(e), s = n < 0, h = l ? e.length : 0, b = cm(0, h, this.__views__), w = b.start, T = b.end, z = T - w, N = s ? T : w - 1, j = this.__iteratees__, q = j.length, ee = 0, fe = $t(z, this.__takeCount__);
          if (!l || !s && h == z && fe == z) return bu(e, this.__actions__);
          var be = [];
          e: for (; z-- && ee < fe; ) {
            N += n;
            for (var Re = -1, xe = e[N]; ++Re < q; ) {
              var Ae = j[Re], ke = Ae.iteratee, Xt = Ae.type, Rt = ke(xe);
              if (Xt == G) xe = Rt;
              else if (!Rt) {
                if (Xt == re) continue e;
                break e;
              }
            }
            be[ee++] = xe;
          }
          return be;
        }
        Fe.prototype = Zn(Mi.prototype), Fe.prototype.constructor = Fe;
        function xn(e) {
          var n = -1, l = e == null ? 0 : e.length;
          for (this.clear(); ++n < l; ) {
            var s = e[n];
            this.set(s[0], s[1]);
          }
        }
        function Qg() {
          this.__data__ = zo ? zo(null) : {}, this.size = 0;
        }
        function Jg(e) {
          var n = this.has(e) && delete this.__data__[e];
          return this.size -= n ? 1 : 0, n;
        }
        function ev(e) {
          var n = this.__data__;
          if (zo) {
            var l = n[e];
            return l === f ? o : l;
          }
          return Ke.call(n, e) ? n[e] : o;
        }
        function tv(e) {
          var n = this.__data__;
          return zo ? n[e] !== o : Ke.call(n, e);
        }
        function rv(e, n) {
          var l = this.__data__;
          return this.size += this.has(e) ? 0 : 1, l[e] = zo && n === o ? f : n, this;
        }
        xn.prototype.clear = Qg, xn.prototype.delete = Jg, xn.prototype.get = ev, xn.prototype.has = tv, xn.prototype.set = rv;
        function Ir(e) {
          var n = -1, l = e == null ? 0 : e.length;
          for (this.clear(); ++n < l; ) {
            var s = e[n];
            this.set(s[0], s[1]);
          }
        }
        function nv() {
          this.__data__ = [], this.size = 0;
        }
        function ov(e) {
          var n = this.__data__, l = Ai(n, e);
          if (l < 0) return false;
          var s = n.length - 1;
          return l == s ? n.pop() : Ti.call(n, l, 1), --this.size, true;
        }
        function iv(e) {
          var n = this.__data__, l = Ai(n, e);
          return l < 0 ? o : n[l][1];
        }
        function lv(e) {
          return Ai(this.__data__, e) > -1;
        }
        function av(e, n) {
          var l = this.__data__, s = Ai(l, e);
          return s < 0 ? (++this.size, l.push([e, n])) : l[s][1] = n, this;
        }
        Ir.prototype.clear = nv, Ir.prototype.delete = ov, Ir.prototype.get = iv, Ir.prototype.has = lv, Ir.prototype.set = av;
        function Br(e) {
          var n = -1, l = e == null ? 0 : e.length;
          for (this.clear(); ++n < l; ) {
            var s = e[n];
            this.set(s[0], s[1]);
          }
        }
        function sv() {
          this.size = 0, this.__data__ = { hash: new xn(), map: new (To || Ir)(), string: new xn() };
        }
        function cv(e) {
          var n = Ki(this, e).delete(e);
          return this.size -= n ? 1 : 0, n;
        }
        function uv(e) {
          return Ki(this, e).get(e);
        }
        function dv(e) {
          return Ki(this, e).has(e);
        }
        function fv(e, n) {
          var l = Ki(this, e), s = l.size;
          return l.set(e, n), this.size += l.size == s ? 0 : 1, this;
        }
        Br.prototype.clear = sv, Br.prototype.delete = cv, Br.prototype.get = uv, Br.prototype.has = dv, Br.prototype.set = fv;
        function Cn(e) {
          var n = -1, l = e == null ? 0 : e.length;
          for (this.__data__ = new Br(); ++n < l; ) this.add(e[n]);
        }
        function hv(e) {
          return this.__data__.set(e, f), this;
        }
        function pv(e) {
          return this.__data__.has(e);
        }
        Cn.prototype.add = Cn.prototype.push = hv, Cn.prototype.has = pv;
        function fr(e) {
          var n = this.__data__ = new Ir(e);
          this.size = n.size;
        }
        function gv() {
          this.__data__ = new Ir(), this.size = 0;
        }
        function vv(e) {
          var n = this.__data__, l = n.delete(e);
          return this.size = n.size, l;
        }
        function mv(e) {
          return this.__data__.get(e);
        }
        function bv(e) {
          return this.__data__.has(e);
        }
        function xv(e, n) {
          var l = this.__data__;
          if (l instanceof Ir) {
            var s = l.__data__;
            if (!To || s.length < a - 1) return s.push([e, n]), this.size = ++l.size, this;
            l = this.__data__ = new Br(s);
          }
          return l.set(e, n), this.size = l.size, this;
        }
        fr.prototype.clear = gv, fr.prototype.delete = vv, fr.prototype.get = mv, fr.prototype.has = bv, fr.prototype.set = xv;
        function Yc(e, n) {
          var l = _e(e), s = !l && Pn(e), h = !l && !s && tn(e), b = !l && !s && !h && to(e), w = l || s || h || b, T = w ? ra(e.length, zg) : [], z = T.length;
          for (var N in e) (n || Ke.call(e, N)) && !(w && (N == "length" || h && (N == "offset" || N == "parent") || b && (N == "buffer" || N == "byteLength" || N == "byteOffset") || Fr(N, z))) && T.push(N);
          return T;
        }
        function Xc(e) {
          var n = e.length;
          return n ? e[xa(0, n - 1)] : o;
        }
        function Cv(e, n) {
          return Ui(Lt(e), yn(n, 0, e.length));
        }
        function yv(e) {
          return Ui(Lt(e));
        }
        function ca(e, n, l) {
          (l !== o && !hr(e[n], l) || l === o && !(n in e)) && Mr(e, n, l);
        }
        function Io(e, n, l) {
          var s = e[n];
          (!(Ke.call(e, n) && hr(s, l)) || l === o && !(n in e)) && Mr(e, n, l);
        }
        function Ai(e, n) {
          for (var l = e.length; l--; ) if (hr(e[l][0], n)) return l;
          return -1;
        }
        function wv(e, n, l, s) {
          return Zr(e, function(h, b, w) {
            n(s, h, l(h), w);
          }), s;
        }
        function Zc(e, n) {
          return e && Cr(n, bt(n), e);
        }
        function Sv(e, n) {
          return e && Cr(n, Ht(n), e);
        }
        function Mr(e, n, l) {
          n == "__proto__" && Ei ? Ei(e, n, { configurable: true, enumerable: true, value: l, writable: true }) : e[n] = l;
        }
        function ua(e, n) {
          for (var l = -1, s = n.length, h = H(s), b = e == null; ++l < s; ) h[l] = b ? o : Ga(e, n[l]);
          return h;
        }
        function yn(e, n, l) {
          return e === e && (l !== o && (e = e <= l ? e : l), n !== o && (e = e >= n ? e : n)), e;
        }
        function or(e, n, l, s, h, b) {
          var w, T = n & m, z = n & C, N = n & x;
          if (l && (w = h ? l(e, s, h, b) : l(e)), w !== o) return w;
          if (!ot(e)) return e;
          var j = _e(e);
          if (j) {
            if (w = dm(e), !T) return Lt(e, w);
          } else {
            var q = Pt(e), ee = q == je || q == we;
            if (tn(e)) return yu(e, T);
            if (q == Ue || q == Tt || ee && !h) {
              if (w = z || ee ? {} : Du(e), !T) return z ? em(e, Sv(w, e)) : Jv(e, Zc(w, e));
            } else {
              if (!Qe[q]) return h ? e : {};
              w = fm(e, q, T);
            }
          }
          b || (b = new fr());
          var fe = b.get(e);
          if (fe) return fe;
          b.set(e, w), gd(e) ? e.forEach(function(xe) {
            w.add(or(xe, n, l, xe, e, b));
          }) : hd(e) && e.forEach(function(xe, Ae) {
            w.set(Ae, or(xe, n, l, Ae, e, b));
          });
          var be = N ? z ? Ra : za : z ? Ht : bt, Re = j ? o : be(e);
          return tr(Re || e, function(xe, Ae) {
            Re && (Ae = xe, xe = e[Ae]), Io(w, Ae, or(xe, n, l, Ae, e, b));
          }), w;
        }
        function $v(e) {
          var n = bt(e);
          return function(l) {
            return Qc(l, e, n);
          };
        }
        function Qc(e, n, l) {
          var s = l.length;
          if (e == null) return !s;
          for (e = Ye(e); s--; ) {
            var h = l[s], b = n[h], w = e[h];
            if (w === o && !(h in e) || !b(w)) return false;
          }
          return true;
        }
        function Jc(e, n, l) {
          if (typeof e != "function") throw new rr(u);
          return Oo(function() {
            e.apply(o, l);
          }, n);
        }
        function Bo(e, n, l, s) {
          var h = -1, b = mi, w = true, T = e.length, z = [], N = n.length;
          if (!T) return z;
          l && (n = nt(n, Ut(l))), s ? (b = Xl, w = false) : n.length >= a && (b = Po, w = false, n = new Cn(n));
          e: for (; ++h < T; ) {
            var j = e[h], q = l == null ? j : l(j);
            if (j = s || j !== 0 ? j : 0, w && q === q) {
              for (var ee = N; ee--; ) if (n[ee] === q) continue e;
              z.push(j);
            } else b(n, q, s) || z.push(j);
          }
          return z;
        }
        var Zr = _u(xr), eu = _u(fa, true);
        function Pv(e, n) {
          var l = true;
          return Zr(e, function(s, h, b) {
            return l = !!n(s, h, b), l;
          }), l;
        }
        function Li(e, n, l) {
          for (var s = -1, h = e.length; ++s < h; ) {
            var b = e[s], w = n(b);
            if (w != null && (T === o ? w === w && !Yt(w) : l(w, T))) var T = w, z = b;
          }
          return z;
        }
        function _v(e, n, l, s) {
          var h = e.length;
          for (l = Te(l), l < 0 && (l = -l > h ? 0 : h + l), s = s === o || s > h ? h : Te(s), s < 0 && (s += h), s = l > s ? 0 : md(s); l < s; ) e[l++] = n;
          return e;
        }
        function tu(e, n) {
          var l = [];
          return Zr(e, function(s, h, b) {
            n(s, h, b) && l.push(s);
          }), l;
        }
        function wt(e, n, l, s, h) {
          var b = -1, w = e.length;
          for (l || (l = pm), h || (h = []); ++b < w; ) {
            var T = e[b];
            n > 0 && l(T) ? n > 1 ? wt(T, n - 1, l, s, h) : qr(h, T) : s || (h[h.length] = T);
          }
          return h;
        }
        var da = Tu(), ru = Tu(true);
        function xr(e, n) {
          return e && da(e, n, bt);
        }
        function fa(e, n) {
          return e && ru(e, n, bt);
        }
        function Fi(e, n) {
          return Ur(n, function(l) {
            return Hr(e[l]);
          });
        }
        function wn(e, n) {
          n = Jr(n, e);
          for (var l = 0, s = n.length; e != null && l < s; ) e = e[yr(n[l++])];
          return l && l == s ? e : o;
        }
        function nu(e, n, l) {
          var s = n(e);
          return _e(e) ? s : qr(s, l(e));
        }
        function Et(e) {
          return e == null ? e === o ? ci : jt : bn && bn in Ye(e) ? sm(e) : ym(e);
        }
        function ha(e, n) {
          return e > n;
        }
        function Tv(e, n) {
          return e != null && Ke.call(e, n);
        }
        function Ev(e, n) {
          return e != null && n in Ye(e);
        }
        function zv(e, n, l) {
          return e >= $t(n, l) && e < gt(n, l);
        }
        function pa(e, n, l) {
          for (var s = l ? Xl : mi, h = e[0].length, b = e.length, w = b, T = H(b), z = 1 / 0, N = []; w--; ) {
            var j = e[w];
            w && n && (j = nt(j, Ut(n))), z = $t(j.length, z), T[w] = !l && (n || h >= 120 && j.length >= 120) ? new Cn(w && j) : o;
          }
          j = e[0];
          var q = -1, ee = T[0];
          e: for (; ++q < h && N.length < z; ) {
            var fe = j[q], be = n ? n(fe) : fe;
            if (fe = l || fe !== 0 ? fe : 0, !(ee ? Po(ee, be) : s(N, be, l))) {
              for (w = b; --w; ) {
                var Re = T[w];
                if (!(Re ? Po(Re, be) : s(e[w], be, l))) continue e;
              }
              ee && ee.push(be), N.push(fe);
            }
          }
          return N;
        }
        function Rv(e, n, l, s) {
          return xr(e, function(h, b, w) {
            n(s, l(h), b, w);
          }), s;
        }
        function Mo(e, n, l) {
          n = Jr(n, e), e = Gu(e, n);
          var s = e == null ? e : e[yr(lr(n))];
          return s == null ? o : Kt(s, e, l);
        }
        function ou(e) {
          return it(e) && Et(e) == Tt;
        }
        function Iv(e) {
          return it(e) && Et(e) == pn;
        }
        function Bv(e) {
          return it(e) && Et(e) == K;
        }
        function Ao(e, n, l, s, h) {
          return e === n ? true : e == null || n == null || !it(e) && !it(n) ? e !== e && n !== n : Mv(e, n, l, s, Ao, h);
        }
        function Mv(e, n, l, s, h, b) {
          var w = _e(e), T = _e(n), z = w ? Pe : Pt(e), N = T ? Pe : Pt(n);
          z = z == Tt ? Ue : z, N = N == Tt ? Ue : N;
          var j = z == Ue, q = N == Ue, ee = z == N;
          if (ee && tn(e)) {
            if (!tn(n)) return false;
            w = true, j = false;
          }
          if (ee && !j) return b || (b = new fr()), w || to(e) ? Hu(e, n, l, s, h, b) : lm(e, n, z, l, s, h, b);
          if (!(l & y)) {
            var fe = j && Ke.call(e, "__wrapped__"), be = q && Ke.call(n, "__wrapped__");
            if (fe || be) {
              var Re = fe ? e.value() : e, xe = be ? n.value() : n;
              return b || (b = new fr()), h(Re, xe, l, s, b);
            }
          }
          return ee ? (b || (b = new fr()), am(e, n, l, s, h, b)) : false;
        }
        function Av(e) {
          return it(e) && Pt(e) == ge;
        }
        function ga(e, n, l, s) {
          var h = l.length, b = h, w = !s;
          if (e == null) return !b;
          for (e = Ye(e); h--; ) {
            var T = l[h];
            if (w && T[2] ? T[1] !== e[T[0]] : !(T[0] in e)) return false;
          }
          for (; ++h < b; ) {
            T = l[h];
            var z = T[0], N = e[z], j = T[1];
            if (w && T[2]) {
              if (N === o && !(z in e)) return false;
            } else {
              var q = new fr();
              if (s) var ee = s(N, j, z, e, n, q);
              if (!(ee === o ? Ao(j, N, y | P, s, q) : ee)) return false;
            }
          }
          return true;
        }
        function iu(e) {
          if (!ot(e) || vm(e)) return false;
          var n = Hr(e) ? Ag : $p;
          return n.test($n(e));
        }
        function Lv(e) {
          return it(e) && Et(e) == Ve;
        }
        function Fv(e) {
          return it(e) && Pt(e) == We;
        }
        function Hv(e) {
          return it(e) && Ji(e.length) && !!tt[Et(e)];
        }
        function lu(e) {
          return typeof e == "function" ? e : e == null ? Ot : typeof e == "object" ? _e(e) ? cu(e[0], e[1]) : su(e) : Ed(e);
        }
        function va(e) {
          if (!Ho(e)) return Dg(e);
          var n = [];
          for (var l in Ye(e)) Ke.call(e, l) && l != "constructor" && n.push(l);
          return n;
        }
        function Ov(e) {
          if (!ot(e)) return Cm(e);
          var n = Ho(e), l = [];
          for (var s in e) s == "constructor" && (n || !Ke.call(e, s)) || l.push(s);
          return l;
        }
        function ma(e, n) {
          return e < n;
        }
        function au(e, n) {
          var l = -1, s = Ft(e) ? H(e.length) : [];
          return Zr(e, function(h, b, w) {
            s[++l] = n(h, b, w);
          }), s;
        }
        function su(e) {
          var n = Ba(e);
          return n.length == 1 && n[0][2] ? Nu(n[0][0], n[0][1]) : function(l) {
            return l === e || ga(l, e, n);
          };
        }
        function cu(e, n) {
          return Aa(e) && Wu(n) ? Nu(yr(e), n) : function(l) {
            var s = Ga(l, e);
            return s === o && s === n ? Va(l, e) : Ao(n, s, y | P);
          };
        }
        function Hi(e, n, l, s, h) {
          e !== n && da(n, function(b, w) {
            if (h || (h = new fr()), ot(b)) kv(e, n, w, l, Hi, s, h);
            else {
              var T = s ? s(Fa(e, w), b, w + "", e, n, h) : o;
              T === o && (T = b), ca(e, w, T);
            }
          }, Ht);
        }
        function kv(e, n, l, s, h, b, w) {
          var T = Fa(e, l), z = Fa(n, l), N = w.get(z);
          if (N) {
            ca(e, l, N);
            return;
          }
          var j = b ? b(T, z, l + "", e, n, w) : o, q = j === o;
          if (q) {
            var ee = _e(z), fe = !ee && tn(z), be = !ee && !fe && to(z);
            j = z, ee || fe || be ? _e(T) ? j = T : ct(T) ? j = Lt(T) : fe ? (q = false, j = yu(z, true)) : be ? (q = false, j = wu(z, true)) : j = [] : ko(z) || Pn(z) ? (j = T, Pn(T) ? j = bd(T) : (!ot(T) || Hr(T)) && (j = Du(z))) : q = false;
          }
          q && (w.set(z, j), h(j, z, s, b, w), w.delete(z)), ca(e, l, j);
        }
        function uu(e, n) {
          var l = e.length;
          if (l) return n += n < 0 ? l : 0, Fr(n, l) ? e[n] : o;
        }
        function du(e, n, l) {
          n.length ? n = nt(n, function(b) {
            return _e(b) ? function(w) {
              return wn(w, b.length === 1 ? b[0] : b);
            } : b;
          }) : n = [Ot];
          var s = -1;
          n = nt(n, Ut(me()));
          var h = au(e, function(b, w, T) {
            var z = nt(n, function(N) {
              return N(b);
            });
            return { criteria: z, index: ++s, value: b };
          });
          return fg(h, function(b, w) {
            return Qv(b, w, l);
          });
        }
        function Dv(e, n) {
          return fu(e, n, function(l, s) {
            return Va(e, s);
          });
        }
        function fu(e, n, l) {
          for (var s = -1, h = n.length, b = {}; ++s < h; ) {
            var w = n[s], T = wn(e, w);
            l(T, w) && Lo(b, Jr(w, e), T);
          }
          return b;
        }
        function Wv(e) {
          return function(n) {
            return wn(n, e);
          };
        }
        function ba(e, n, l, s) {
          var h = s ? dg : Gn, b = -1, w = n.length, T = e;
          for (e === n && (n = Lt(n)), l && (T = nt(e, Ut(l))); ++b < w; ) for (var z = 0, N = n[b], j = l ? l(N) : N; (z = h(T, j, z, s)) > -1; ) T !== e && Ti.call(T, z, 1), Ti.call(e, z, 1);
          return e;
        }
        function hu(e, n) {
          for (var l = e ? n.length : 0, s = l - 1; l--; ) {
            var h = n[l];
            if (l == s || h !== b) {
              var b = h;
              Fr(h) ? Ti.call(e, h, 1) : wa(e, h);
            }
          }
          return e;
        }
        function xa(e, n) {
          return e + Ri(Uc() * (n - e + 1));
        }
        function Nv(e, n, l, s) {
          for (var h = -1, b = gt(zi((n - e) / (l || 1)), 0), w = H(b); b--; ) w[s ? b : ++h] = e, e += l;
          return w;
        }
        function Ca(e, n) {
          var l = "";
          if (!e || n < 1 || n > ue) return l;
          do
            n % 2 && (l += e), n = Ri(n / 2), n && (e += e);
          while (n);
          return l;
        }
        function Ie(e, n) {
          return Ha(ju(e, n, Ot), e + "");
        }
        function jv(e) {
          return Xc(ro(e));
        }
        function Gv(e, n) {
          var l = ro(e);
          return Ui(l, yn(n, 0, l.length));
        }
        function Lo(e, n, l, s) {
          if (!ot(e)) return e;
          n = Jr(n, e);
          for (var h = -1, b = n.length, w = b - 1, T = e; T != null && ++h < b; ) {
            var z = yr(n[h]), N = l;
            if (z === "__proto__" || z === "constructor" || z === "prototype") return e;
            if (h != w) {
              var j = T[z];
              N = s ? s(j, z, T) : o, N === o && (N = ot(j) ? j : Fr(n[h + 1]) ? [] : {});
            }
            Io(T, z, N), T = T[z];
          }
          return e;
        }
        var pu = Ii ? function(e, n) {
          return Ii.set(e, n), e;
        } : Ot, Vv = Ei ? function(e, n) {
          return Ei(e, "toString", { configurable: true, enumerable: false, value: Ua(n), writable: true });
        } : Ot;
        function Kv(e) {
          return Ui(ro(e));
        }
        function ir(e, n, l) {
          var s = -1, h = e.length;
          n < 0 && (n = -n > h ? 0 : h + n), l = l > h ? h : l, l < 0 && (l += h), h = n > l ? 0 : l - n >>> 0, n >>>= 0;
          for (var b = H(h); ++s < h; ) b[s] = e[s + n];
          return b;
        }
        function Uv(e, n) {
          var l;
          return Zr(e, function(s, h, b) {
            return l = n(s, h, b), !l;
          }), !!l;
        }
        function Oi(e, n, l) {
          var s = 0, h = e == null ? s : e.length;
          if (typeof n == "number" && n === n && h <= mt) {
            for (; s < h; ) {
              var b = s + h >>> 1, w = e[b];
              w !== null && !Yt(w) && (l ? w <= n : w < n) ? s = b + 1 : h = b;
            }
            return h;
          }
          return ya(e, n, Ot, l);
        }
        function ya(e, n, l, s) {
          var h = 0, b = e == null ? 0 : e.length;
          if (b === 0) return 0;
          n = l(n);
          for (var w = n !== n, T = n === null, z = Yt(n), N = n === o; h < b; ) {
            var j = Ri((h + b) / 2), q = l(e[j]), ee = q !== o, fe = q === null, be = q === q, Re = Yt(q);
            if (w) var xe = s || be;
            else N ? xe = be && (s || ee) : T ? xe = be && ee && (s || !fe) : z ? xe = be && ee && !fe && (s || !Re) : fe || Re ? xe = false : xe = s ? q <= n : q < n;
            xe ? h = j + 1 : b = j;
          }
          return $t(b, Oe);
        }
        function gu(e, n) {
          for (var l = -1, s = e.length, h = 0, b = []; ++l < s; ) {
            var w = e[l], T = n ? n(w) : w;
            if (!l || !hr(T, z)) {
              var z = T;
              b[h++] = w === 0 ? 0 : w;
            }
          }
          return b;
        }
        function vu(e) {
          return typeof e == "number" ? e : Yt(e) ? ze : +e;
        }
        function qt(e) {
          if (typeof e == "string") return e;
          if (_e(e)) return nt(e, qt) + "";
          if (Yt(e)) return qc ? qc.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -U ? "-0" : n;
        }
        function Qr(e, n, l) {
          var s = -1, h = mi, b = e.length, w = true, T = [], z = T;
          if (l) w = false, h = Xl;
          else if (b >= a) {
            var N = n ? null : om(e);
            if (N) return xi(N);
            w = false, h = Po, z = new Cn();
          } else z = n ? [] : T;
          e: for (; ++s < b; ) {
            var j = e[s], q = n ? n(j) : j;
            if (j = l || j !== 0 ? j : 0, w && q === q) {
              for (var ee = z.length; ee--; ) if (z[ee] === q) continue e;
              n && z.push(q), T.push(j);
            } else h(z, q, l) || (z !== T && z.push(q), T.push(j));
          }
          return T;
        }
        function wa(e, n) {
          return n = Jr(n, e), e = Gu(e, n), e == null || delete e[yr(lr(n))];
        }
        function mu(e, n, l, s) {
          return Lo(e, n, l(wn(e, n)), s);
        }
        function ki(e, n, l, s) {
          for (var h = e.length, b = s ? h : -1; (s ? b-- : ++b < h) && n(e[b], b, e); ) ;
          return l ? ir(e, s ? 0 : b, s ? b + 1 : h) : ir(e, s ? b + 1 : 0, s ? h : b);
        }
        function bu(e, n) {
          var l = e;
          return l instanceof Fe && (l = l.value()), Zl(n, function(s, h) {
            return h.func.apply(h.thisArg, qr([s], h.args));
          }, l);
        }
        function Sa(e, n, l) {
          var s = e.length;
          if (s < 2) return s ? Qr(e[0]) : [];
          for (var h = -1, b = H(s); ++h < s; ) for (var w = e[h], T = -1; ++T < s; ) T != h && (b[h] = Bo(b[h] || w, e[T], n, l));
          return Qr(wt(b, 1), n, l);
        }
        function xu(e, n, l) {
          for (var s = -1, h = e.length, b = n.length, w = {}; ++s < h; ) {
            var T = s < b ? n[s] : o;
            l(w, e[s], T);
          }
          return w;
        }
        function $a(e) {
          return ct(e) ? e : [];
        }
        function Pa(e) {
          return typeof e == "function" ? e : Ot;
        }
        function Jr(e, n) {
          return _e(e) ? e : Aa(e, n) ? [e] : qu(Ne(e));
        }
        var qv = Ie;
        function en(e, n, l) {
          var s = e.length;
          return l = l === o ? s : l, !n && l >= s ? e : ir(e, n, l);
        }
        var Cu = Lg || function(e) {
          return yt.clearTimeout(e);
        };
        function yu(e, n) {
          if (n) return e.slice();
          var l = e.length, s = Nc ? Nc(l) : new e.constructor(l);
          return e.copy(s), s;
        }
        function _a(e) {
          var n = new e.constructor(e.byteLength);
          return new Pi(n).set(new Pi(e)), n;
        }
        function Yv(e, n) {
          var l = n ? _a(e.buffer) : e.buffer;
          return new e.constructor(l, e.byteOffset, e.byteLength);
        }
        function Xv(e) {
          var n = new e.constructor(e.source, hi.exec(e));
          return n.lastIndex = e.lastIndex, n;
        }
        function Zv(e) {
          return Ro ? Ye(Ro.call(e)) : {};
        }
        function wu(e, n) {
          var l = n ? _a(e.buffer) : e.buffer;
          return new e.constructor(l, e.byteOffset, e.length);
        }
        function Su(e, n) {
          if (e !== n) {
            var l = e !== o, s = e === null, h = e === e, b = Yt(e), w = n !== o, T = n === null, z = n === n, N = Yt(n);
            if (!T && !N && !b && e > n || b && w && z && !T && !N || s && w && z || !l && z || !h) return 1;
            if (!s && !b && !N && e < n || N && l && h && !s && !b || T && l && h || !w && h || !z) return -1;
          }
          return 0;
        }
        function Qv(e, n, l) {
          for (var s = -1, h = e.criteria, b = n.criteria, w = h.length, T = l.length; ++s < w; ) {
            var z = Su(h[s], b[s]);
            if (z) {
              if (s >= T) return z;
              var N = l[s];
              return z * (N == "desc" ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function $u(e, n, l, s) {
          for (var h = -1, b = e.length, w = l.length, T = -1, z = n.length, N = gt(b - w, 0), j = H(z + N), q = !s; ++T < z; ) j[T] = n[T];
          for (; ++h < w; ) (q || h < b) && (j[l[h]] = e[h]);
          for (; N--; ) j[T++] = e[h++];
          return j;
        }
        function Pu(e, n, l, s) {
          for (var h = -1, b = e.length, w = -1, T = l.length, z = -1, N = n.length, j = gt(b - T, 0), q = H(j + N), ee = !s; ++h < j; ) q[h] = e[h];
          for (var fe = h; ++z < N; ) q[fe + z] = n[z];
          for (; ++w < T; ) (ee || h < b) && (q[fe + l[w]] = e[h++]);
          return q;
        }
        function Lt(e, n) {
          var l = -1, s = e.length;
          for (n || (n = H(s)); ++l < s; ) n[l] = e[l];
          return n;
        }
        function Cr(e, n, l, s) {
          var h = !l;
          l || (l = {});
          for (var b = -1, w = n.length; ++b < w; ) {
            var T = n[b], z = s ? s(l[T], e[T], T, l, e) : o;
            z === o && (z = e[T]), h ? Mr(l, T, z) : Io(l, T, z);
          }
          return l;
        }
        function Jv(e, n) {
          return Cr(e, Ma(e), n);
        }
        function em(e, n) {
          return Cr(e, Ou(e), n);
        }
        function Di(e, n) {
          return function(l, s) {
            var h = _e(l) ? ig : wv, b = n ? n() : {};
            return h(l, e, me(s, 2), b);
          };
        }
        function Qn(e) {
          return Ie(function(n, l) {
            var s = -1, h = l.length, b = h > 1 ? l[h - 1] : o, w = h > 2 ? l[2] : o;
            for (b = e.length > 3 && typeof b == "function" ? (h--, b) : o, w && zt(l[0], l[1], w) && (b = h < 3 ? o : b, h = 1), n = Ye(n); ++s < h; ) {
              var T = l[s];
              T && e(n, T, s, b);
            }
            return n;
          });
        }
        function _u(e, n) {
          return function(l, s) {
            if (l == null) return l;
            if (!Ft(l)) return e(l, s);
            for (var h = l.length, b = n ? h : -1, w = Ye(l); (n ? b-- : ++b < h) && s(w[b], b, w) !== false; ) ;
            return l;
          };
        }
        function Tu(e) {
          return function(n, l, s) {
            for (var h = -1, b = Ye(n), w = s(n), T = w.length; T--; ) {
              var z = w[e ? T : ++h];
              if (l(b[z], z, b) === false) break;
            }
            return n;
          };
        }
        function tm(e, n, l) {
          var s = n & _, h = Fo(e);
          function b() {
            var w = this && this !== yt && this instanceof b ? h : e;
            return w.apply(s ? l : this, arguments);
          }
          return b;
        }
        function Eu(e) {
          return function(n) {
            n = Ne(n);
            var l = Vn(n) ? dr(n) : o, s = l ? l[0] : n.charAt(0), h = l ? en(l, 1).join("") : n.slice(1);
            return s[e]() + h;
          };
        }
        function Jn(e) {
          return function(n) {
            return Zl(_d(Pd(n).replace(Vp, "")), e, "");
          };
        }
        function Fo(e) {
          return function() {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new e();
              case 1:
                return new e(n[0]);
              case 2:
                return new e(n[0], n[1]);
              case 3:
                return new e(n[0], n[1], n[2]);
              case 4:
                return new e(n[0], n[1], n[2], n[3]);
              case 5:
                return new e(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var l = Zn(e.prototype), s = e.apply(l, n);
            return ot(s) ? s : l;
          };
        }
        function rm(e, n, l) {
          var s = Fo(e);
          function h() {
            for (var b = arguments.length, w = H(b), T = b, z = eo(h); T--; ) w[T] = arguments[T];
            var N = b < 3 && w[0] !== z && w[b - 1] !== z ? [] : Yr(w, z);
            if (b -= N.length, b < l) return Mu(e, n, Wi, h.placeholder, o, w, N, o, o, l - b);
            var j = this && this !== yt && this instanceof h ? s : e;
            return Kt(j, this, w);
          }
          return h;
        }
        function zu(e) {
          return function(n, l, s) {
            var h = Ye(n);
            if (!Ft(n)) {
              var b = me(l, 3);
              n = bt(n), l = function(T) {
                return b(h[T], T, h);
              };
            }
            var w = e(n, l, s);
            return w > -1 ? h[b ? n[w] : w] : o;
          };
        }
        function Ru(e) {
          return Lr(function(n) {
            var l = n.length, s = l, h = nr.prototype.thru;
            for (e && n.reverse(); s--; ) {
              var b = n[s];
              if (typeof b != "function") throw new rr(u);
              if (h && !w && Vi(b) == "wrapper") var w = new nr([], true);
            }
            for (s = w ? s : l; ++s < l; ) {
              b = n[s];
              var T = Vi(b), z = T == "wrapper" ? Ia(b) : o;
              z && La(z[0]) && z[1] == (S | L | F | M) && !z[4].length && z[9] == 1 ? w = w[Vi(z[0])].apply(w, z[3]) : w = b.length == 1 && La(b) ? w[T]() : w.thru(b);
            }
            return function() {
              var N = arguments, j = N[0];
              if (w && N.length == 1 && _e(j)) return w.plant(j).value();
              for (var q = 0, ee = l ? n[q].apply(this, N) : j; ++q < l; ) ee = n[q].call(this, ee);
              return ee;
            };
          });
        }
        function Wi(e, n, l, s, h, b, w, T, z, N) {
          var j = n & S, q = n & _, ee = n & $, fe = n & (L | I), be = n & A, Re = ee ? o : Fo(e);
          function xe() {
            for (var Ae = arguments.length, ke = H(Ae), Xt = Ae; Xt--; ) ke[Xt] = arguments[Xt];
            if (fe) var Rt = eo(xe), Zt = pg(ke, Rt);
            if (s && (ke = $u(ke, s, h, fe)), b && (ke = Pu(ke, b, w, fe)), Ae -= Zt, fe && Ae < N) {
              var ut = Yr(ke, Rt);
              return Mu(e, n, Wi, xe.placeholder, l, ke, ut, T, z, N - Ae);
            }
            var pr = q ? l : this, kr = ee ? pr[e] : e;
            return Ae = ke.length, T ? ke = wm(ke, T) : be && Ae > 1 && ke.reverse(), j && z < Ae && (ke.length = z), this && this !== yt && this instanceof xe && (kr = Re || Fo(kr)), kr.apply(pr, ke);
          }
          return xe;
        }
        function Iu(e, n) {
          return function(l, s) {
            return Rv(l, e, n(s), {});
          };
        }
        function Ni(e, n) {
          return function(l, s) {
            var h;
            if (l === o && s === o) return n;
            if (l !== o && (h = l), s !== o) {
              if (h === o) return s;
              typeof l == "string" || typeof s == "string" ? (l = qt(l), s = qt(s)) : (l = vu(l), s = vu(s)), h = e(l, s);
            }
            return h;
          };
        }
        function Ta(e) {
          return Lr(function(n) {
            return n = nt(n, Ut(me())), Ie(function(l) {
              var s = this;
              return e(n, function(h) {
                return Kt(h, s, l);
              });
            });
          });
        }
        function ji(e, n) {
          n = n === o ? " " : qt(n);
          var l = n.length;
          if (l < 2) return l ? Ca(n, e) : n;
          var s = Ca(n, zi(e / Kn(n)));
          return Vn(n) ? en(dr(s), 0, e).join("") : s.slice(0, e);
        }
        function nm(e, n, l, s) {
          var h = n & _, b = Fo(e);
          function w() {
            for (var T = -1, z = arguments.length, N = -1, j = s.length, q = H(j + z), ee = this && this !== yt && this instanceof w ? b : e; ++N < j; ) q[N] = s[N];
            for (; z--; ) q[N++] = arguments[++T];
            return Kt(ee, h ? l : this, q);
          }
          return w;
        }
        function Bu(e) {
          return function(n, l, s) {
            return s && typeof s != "number" && zt(n, l, s) && (l = s = o), n = Or(n), l === o ? (l = n, n = 0) : l = Or(l), s = s === o ? n < l ? 1 : -1 : Or(s), Nv(n, l, s, e);
          };
        }
        function Gi(e) {
          return function(n, l) {
            return typeof n == "string" && typeof l == "string" || (n = ar(n), l = ar(l)), e(n, l);
          };
        }
        function Mu(e, n, l, s, h, b, w, T, z, N) {
          var j = n & L, q = j ? w : o, ee = j ? o : w, fe = j ? b : o, be = j ? o : b;
          n |= j ? F : k, n &= ~(j ? k : F), n & R || (n &= -4);
          var Re = [e, n, h, fe, q, be, ee, T, z, N], xe = l.apply(o, Re);
          return La(e) && Vu(xe, Re), xe.placeholder = s, Ku(xe, e, n);
        }
        function Ea(e) {
          var n = pt[e];
          return function(l, s) {
            if (l = ar(l), s = s == null ? 0 : $t(Te(s), 292), s && Kc(l)) {
              var h = (Ne(l) + "e").split("e"), b = n(h[0] + "e" + (+h[1] + s));
              return h = (Ne(b) + "e").split("e"), +(h[0] + "e" + (+h[1] - s));
            }
            return n(l);
          };
        }
        var om = Yn && 1 / xi(new Yn([, -0]))[1] == U ? function(e) {
          return new Yn(e);
        } : Xa;
        function Au(e) {
          return function(n) {
            var l = Pt(n);
            return l == ge ? oa(n) : l == We ? yg(n) : hg(n, e(n));
          };
        }
        function Ar(e, n, l, s, h, b, w, T) {
          var z = n & $;
          if (!z && typeof e != "function") throw new rr(u);
          var N = s ? s.length : 0;
          if (N || (n &= -97, s = h = o), w = w === o ? w : gt(Te(w), 0), T = T === o ? T : Te(T), N -= h ? h.length : 0, n & k) {
            var j = s, q = h;
            s = h = o;
          }
          var ee = z ? o : Ia(e), fe = [e, n, l, s, h, j, q, b, w, T];
          if (ee && xm(fe, ee), e = fe[0], n = fe[1], l = fe[2], s = fe[3], h = fe[4], T = fe[9] = fe[9] === o ? z ? 0 : e.length : gt(fe[9] - N, 0), !T && n & (L | I) && (n &= -25), !n || n == _) var be = tm(e, n, l);
          else n == L || n == I ? be = rm(e, n, T) : (n == F || n == (_ | F)) && !h.length ? be = nm(e, n, l, s) : be = Wi.apply(o, fe);
          var Re = ee ? pu : Vu;
          return Ku(Re(be, fe), e, n);
        }
        function Lu(e, n, l, s) {
          return e === o || hr(e, qn[l]) && !Ke.call(s, l) ? n : e;
        }
        function Fu(e, n, l, s, h, b) {
          return ot(e) && ot(n) && (b.set(n, e), Hi(e, n, o, Fu, b), b.delete(n)), e;
        }
        function im(e) {
          return ko(e) ? o : e;
        }
        function Hu(e, n, l, s, h, b) {
          var w = l & y, T = e.length, z = n.length;
          if (T != z && !(w && z > T)) return false;
          var N = b.get(e), j = b.get(n);
          if (N && j) return N == n && j == e;
          var q = -1, ee = true, fe = l & P ? new Cn() : o;
          for (b.set(e, n), b.set(n, e); ++q < T; ) {
            var be = e[q], Re = n[q];
            if (s) var xe = w ? s(Re, be, q, n, e, b) : s(be, Re, q, e, n, b);
            if (xe !== o) {
              if (xe) continue;
              ee = false;
              break;
            }
            if (fe) {
              if (!Ql(n, function(Ae, ke) {
                if (!Po(fe, ke) && (be === Ae || h(be, Ae, l, s, b))) return fe.push(ke);
              })) {
                ee = false;
                break;
              }
            } else if (!(be === Re || h(be, Re, l, s, b))) {
              ee = false;
              break;
            }
          }
          return b.delete(e), b.delete(n), ee;
        }
        function lm(e, n, l, s, h, b, w) {
          switch (l) {
            case Rr:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return false;
              e = e.buffer, n = n.buffer;
            case pn:
              return !(e.byteLength != n.byteLength || !b(new Pi(e), new Pi(n)));
            case te:
            case K:
            case Ge:
              return hr(+e, +n);
            case Me:
              return e.name == n.name && e.message == n.message;
            case Ve:
            case Gt:
              return e == n + "";
            case ge:
              var T = oa;
            case We:
              var z = s & y;
              if (T || (T = xi), e.size != n.size && !z) return false;
              var N = w.get(e);
              if (N) return N == n;
              s |= P, w.set(e, n);
              var j = Hu(T(e), T(n), s, h, b, w);
              return w.delete(e), j;
            case Dn:
              if (Ro) return Ro.call(e) == Ro.call(n);
          }
          return false;
        }
        function am(e, n, l, s, h, b) {
          var w = l & y, T = za(e), z = T.length, N = za(n), j = N.length;
          if (z != j && !w) return false;
          for (var q = z; q--; ) {
            var ee = T[q];
            if (!(w ? ee in n : Ke.call(n, ee))) return false;
          }
          var fe = b.get(e), be = b.get(n);
          if (fe && be) return fe == n && be == e;
          var Re = true;
          b.set(e, n), b.set(n, e);
          for (var xe = w; ++q < z; ) {
            ee = T[q];
            var Ae = e[ee], ke = n[ee];
            if (s) var Xt = w ? s(ke, Ae, ee, n, e, b) : s(Ae, ke, ee, e, n, b);
            if (!(Xt === o ? Ae === ke || h(Ae, ke, l, s, b) : Xt)) {
              Re = false;
              break;
            }
            xe || (xe = ee == "constructor");
          }
          if (Re && !xe) {
            var Rt = e.constructor, Zt = n.constructor;
            Rt != Zt && "constructor" in e && "constructor" in n && !(typeof Rt == "function" && Rt instanceof Rt && typeof Zt == "function" && Zt instanceof Zt) && (Re = false);
          }
          return b.delete(e), b.delete(n), Re;
        }
        function Lr(e) {
          return Ha(ju(e, o, Qu), e + "");
        }
        function za(e) {
          return nu(e, bt, Ma);
        }
        function Ra(e) {
          return nu(e, Ht, Ou);
        }
        var Ia = Ii ? function(e) {
          return Ii.get(e);
        } : Xa;
        function Vi(e) {
          for (var n = e.name + "", l = Xn[n], s = Ke.call(Xn, n) ? l.length : 0; s--; ) {
            var h = l[s], b = h.func;
            if (b == null || b == e) return h.name;
          }
          return n;
        }
        function eo(e) {
          var n = Ke.call(v, "placeholder") ? v : e;
          return n.placeholder;
        }
        function me() {
          var e = v.iteratee || qa;
          return e = e === qa ? lu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function Ki(e, n) {
          var l = e.__data__;
          return gm(n) ? l[typeof n == "string" ? "string" : "hash"] : l.map;
        }
        function Ba(e) {
          for (var n = bt(e), l = n.length; l--; ) {
            var s = n[l], h = e[s];
            n[l] = [s, h, Wu(h)];
          }
          return n;
        }
        function Sn(e, n) {
          var l = bg(e, n);
          return iu(l) ? l : o;
        }
        function sm(e) {
          var n = Ke.call(e, bn), l = e[bn];
          try {
            e[bn] = o;
            var s = true;
          } catch {
          }
          var h = Si.call(e);
          return s && (n ? e[bn] = l : delete e[bn]), h;
        }
        var Ma = la ? function(e) {
          return e == null ? [] : (e = Ye(e), Ur(la(e), function(n) {
            return Gc.call(e, n);
          }));
        } : Za, Ou = la ? function(e) {
          for (var n = []; e; ) qr(n, Ma(e)), e = _i(e);
          return n;
        } : Za, Pt = Et;
        (aa && Pt(new aa(new ArrayBuffer(1))) != Rr || To && Pt(new To()) != ge || sa && Pt(sa.resolve()) != kn || Yn && Pt(new Yn()) != We || Eo && Pt(new Eo()) != Vt) && (Pt = function(e) {
          var n = Et(e), l = n == Ue ? e.constructor : o, s = l ? $n(l) : "";
          if (s) switch (s) {
            case Gg:
              return Rr;
            case Vg:
              return ge;
            case Kg:
              return kn;
            case Ug:
              return We;
            case qg:
              return Vt;
          }
          return n;
        });
        function cm(e, n, l) {
          for (var s = -1, h = l.length; ++s < h; ) {
            var b = l[s], w = b.size;
            switch (b.type) {
              case "drop":
                e += w;
                break;
              case "dropRight":
                n -= w;
                break;
              case "take":
                n = $t(n, e + w);
                break;
              case "takeRight":
                e = gt(e, n - w);
                break;
            }
          }
          return { start: e, end: n };
        }
        function um(e) {
          var n = e.match(Hl);
          return n ? n[1].split(Ol) : [];
        }
        function ku(e, n, l) {
          n = Jr(n, e);
          for (var s = -1, h = n.length, b = false; ++s < h; ) {
            var w = yr(n[s]);
            if (!(b = e != null && l(e, w))) break;
            e = e[w];
          }
          return b || ++s != h ? b : (h = e == null ? 0 : e.length, !!h && Ji(h) && Fr(w, h) && (_e(e) || Pn(e)));
        }
        function dm(e) {
          var n = e.length, l = new e.constructor(n);
          return n && typeof e[0] == "string" && Ke.call(e, "index") && (l.index = e.index, l.input = e.input), l;
        }
        function Du(e) {
          return typeof e.constructor == "function" && !Ho(e) ? Zn(_i(e)) : {};
        }
        function fm(e, n, l) {
          var s = e.constructor;
          switch (n) {
            case pn:
              return _a(e);
            case te:
            case K:
              return new s(+e);
            case Rr:
              return Yv(e, l);
            case Wn:
            case wo:
            case gn:
            case vn:
            case Nn:
            case mr:
            case di:
            case Z:
            case de:
              return wu(e, l);
            case ge:
              return new s();
            case Ge:
            case Gt:
              return new s(e);
            case Ve:
              return Xv(e);
            case We:
              return new s();
            case Dn:
              return Zv(e);
          }
        }
        function hm(e, n) {
          var l = n.length;
          if (!l) return e;
          var s = l - 1;
          return n[s] = (l > 1 ? "& " : "") + n[s], n = n.join(l > 2 ? ", " : " "), e.replace(Fl, `{
/* [wrapped with ` + n + `] */
`);
        }
        function pm(e) {
          return _e(e) || Pn(e) || !!(Vc && e && e[Vc]);
        }
        function Fr(e, n) {
          var l = typeof e;
          return n = n ?? ue, !!n && (l == "number" || l != "symbol" && _p.test(e)) && e > -1 && e % 1 == 0 && e < n;
        }
        function zt(e, n, l) {
          if (!ot(l)) return false;
          var s = typeof n;
          return (s == "number" ? Ft(l) && Fr(n, l.length) : s == "string" && n in l) ? hr(l[n], e) : false;
        }
        function Aa(e, n) {
          if (_e(e)) return false;
          var l = typeof e;
          return l == "number" || l == "symbol" || l == "boolean" || e == null || Yt(e) ? true : Bl.test(e) || !Il.test(e) || n != null && e in Ye(n);
        }
        function gm(e) {
          var n = typeof e;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
        }
        function La(e) {
          var n = Vi(e), l = v[n];
          if (typeof l != "function" || !(n in Fe.prototype)) return false;
          if (e === l) return true;
          var s = Ia(l);
          return !!s && e === s[0];
        }
        function vm(e) {
          return !!Wc && Wc in e;
        }
        var mm = yi ? Hr : Qa;
        function Ho(e) {
          var n = e && e.constructor, l = typeof n == "function" && n.prototype || qn;
          return e === l;
        }
        function Wu(e) {
          return e === e && !ot(e);
        }
        function Nu(e, n) {
          return function(l) {
            return l == null ? false : l[e] === n && (n !== o || e in Ye(l));
          };
        }
        function bm(e) {
          var n = Zi(e, function(s) {
            return l.size === p && l.clear(), s;
          }), l = n.cache;
          return n;
        }
        function xm(e, n) {
          var l = e[1], s = n[1], h = l | s, b = h < (_ | $ | S), w = s == S && l == L || s == S && l == M && e[7].length <= n[8] || s == (S | M) && n[7].length <= n[8] && l == L;
          if (!(b || w)) return e;
          s & _ && (e[2] = n[2], h |= l & _ ? 0 : R);
          var T = n[3];
          if (T) {
            var z = e[3];
            e[3] = z ? $u(z, T, n[4]) : T, e[4] = z ? Yr(e[3], g) : n[4];
          }
          return T = n[5], T && (z = e[5], e[5] = z ? Pu(z, T, n[6]) : T, e[6] = z ? Yr(e[5], g) : n[6]), T = n[7], T && (e[7] = T), s & S && (e[8] = e[8] == null ? n[8] : $t(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = h, e;
        }
        function Cm(e) {
          var n = [];
          if (e != null) for (var l in Ye(e)) n.push(l);
          return n;
        }
        function ym(e) {
          return Si.call(e);
        }
        function ju(e, n, l) {
          return n = gt(n === o ? e.length - 1 : n, 0), function() {
            for (var s = arguments, h = -1, b = gt(s.length - n, 0), w = H(b); ++h < b; ) w[h] = s[n + h];
            h = -1;
            for (var T = H(n + 1); ++h < n; ) T[h] = s[h];
            return T[n] = l(w), Kt(e, this, T);
          };
        }
        function Gu(e, n) {
          return n.length < 2 ? e : wn(e, ir(n, 0, -1));
        }
        function wm(e, n) {
          for (var l = e.length, s = $t(n.length, l), h = Lt(e); s--; ) {
            var b = n[s];
            e[s] = Fr(b, l) ? h[b] : o;
          }
          return e;
        }
        function Fa(e, n) {
          if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__") return e[n];
        }
        var Vu = Uu(pu), Oo = Hg || function(e, n) {
          return yt.setTimeout(e, n);
        }, Ha = Uu(Vv);
        function Ku(e, n, l) {
          var s = n + "";
          return Ha(e, hm(s, Sm(um(s), l)));
        }
        function Uu(e) {
          var n = 0, l = 0;
          return function() {
            var s = Wg(), h = oe - (s - l);
            if (l = s, h > 0) {
              if (++n >= W) return arguments[0];
            } else n = 0;
            return e.apply(o, arguments);
          };
        }
        function Ui(e, n) {
          var l = -1, s = e.length, h = s - 1;
          for (n = n === o ? s : n; ++l < n; ) {
            var b = xa(l, h), w = e[b];
            e[b] = e[l], e[l] = w;
          }
          return e.length = n, e;
        }
        var qu = bm(function(e) {
          var n = [];
          return e.charCodeAt(0) === 46 && n.push(""), e.replace(Ml, function(l, s, h, b) {
            n.push(h ? b.replace(Wl, "$1") : s || l);
          }), n;
        });
        function yr(e) {
          if (typeof e == "string" || Yt(e)) return e;
          var n = e + "";
          return n == "0" && 1 / e == -U ? "-0" : n;
        }
        function $n(e) {
          if (e != null) {
            try {
              return wi.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Sm(e, n) {
          return tr(xt, function(l) {
            var s = "_." + l[0];
            n & l[1] && !mi(e, s) && e.push(s);
          }), e.sort();
        }
        function Yu(e) {
          if (e instanceof Fe) return e.clone();
          var n = new nr(e.__wrapped__, e.__chain__);
          return n.__actions__ = Lt(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
        }
        function $m(e, n, l) {
          (l ? zt(e, n, l) : n === o) ? n = 1 : n = gt(Te(n), 0);
          var s = e == null ? 0 : e.length;
          if (!s || n < 1) return [];
          for (var h = 0, b = 0, w = H(zi(s / n)); h < s; ) w[b++] = ir(e, h, h += n);
          return w;
        }
        function Pm(e) {
          for (var n = -1, l = e == null ? 0 : e.length, s = 0, h = []; ++n < l; ) {
            var b = e[n];
            b && (h[s++] = b);
          }
          return h;
        }
        function _m() {
          var e = arguments.length;
          if (!e) return [];
          for (var n = H(e - 1), l = arguments[0], s = e; s--; ) n[s - 1] = arguments[s];
          return qr(_e(l) ? Lt(l) : [l], wt(n, 1));
        }
        var Tm = Ie(function(e, n) {
          return ct(e) ? Bo(e, wt(n, 1, ct, true)) : [];
        }), Em = Ie(function(e, n) {
          var l = lr(n);
          return ct(l) && (l = o), ct(e) ? Bo(e, wt(n, 1, ct, true), me(l, 2)) : [];
        }), zm = Ie(function(e, n) {
          var l = lr(n);
          return ct(l) && (l = o), ct(e) ? Bo(e, wt(n, 1, ct, true), o, l) : [];
        });
        function Rm(e, n, l) {
          var s = e == null ? 0 : e.length;
          return s ? (n = l || n === o ? 1 : Te(n), ir(e, n < 0 ? 0 : n, s)) : [];
        }
        function Im(e, n, l) {
          var s = e == null ? 0 : e.length;
          return s ? (n = l || n === o ? 1 : Te(n), n = s - n, ir(e, 0, n < 0 ? 0 : n)) : [];
        }
        function Bm(e, n) {
          return e && e.length ? ki(e, me(n, 3), true, true) : [];
        }
        function Mm(e, n) {
          return e && e.length ? ki(e, me(n, 3), true) : [];
        }
        function Am(e, n, l, s) {
          var h = e == null ? 0 : e.length;
          return h ? (l && typeof l != "number" && zt(e, n, l) && (l = 0, s = h), _v(e, n, l, s)) : [];
        }
        function Xu(e, n, l) {
          var s = e == null ? 0 : e.length;
          if (!s) return -1;
          var h = l == null ? 0 : Te(l);
          return h < 0 && (h = gt(s + h, 0)), bi(e, me(n, 3), h);
        }
        function Zu(e, n, l) {
          var s = e == null ? 0 : e.length;
          if (!s) return -1;
          var h = s - 1;
          return l !== o && (h = Te(l), h = l < 0 ? gt(s + h, 0) : $t(h, s - 1)), bi(e, me(n, 3), h, true);
        }
        function Qu(e) {
          var n = e == null ? 0 : e.length;
          return n ? wt(e, 1) : [];
        }
        function Lm(e) {
          var n = e == null ? 0 : e.length;
          return n ? wt(e, U) : [];
        }
        function Fm(e, n) {
          var l = e == null ? 0 : e.length;
          return l ? (n = n === o ? 1 : Te(n), wt(e, n)) : [];
        }
        function Hm(e) {
          for (var n = -1, l = e == null ? 0 : e.length, s = {}; ++n < l; ) {
            var h = e[n];
            s[h[0]] = h[1];
          }
          return s;
        }
        function Ju(e) {
          return e && e.length ? e[0] : o;
        }
        function Om(e, n, l) {
          var s = e == null ? 0 : e.length;
          if (!s) return -1;
          var h = l == null ? 0 : Te(l);
          return h < 0 && (h = gt(s + h, 0)), Gn(e, n, h);
        }
        function km(e) {
          var n = e == null ? 0 : e.length;
          return n ? ir(e, 0, -1) : [];
        }
        var Dm = Ie(function(e) {
          var n = nt(e, $a);
          return n.length && n[0] === e[0] ? pa(n) : [];
        }), Wm = Ie(function(e) {
          var n = lr(e), l = nt(e, $a);
          return n === lr(l) ? n = o : l.pop(), l.length && l[0] === e[0] ? pa(l, me(n, 2)) : [];
        }), Nm = Ie(function(e) {
          var n = lr(e), l = nt(e, $a);
          return n = typeof n == "function" ? n : o, n && l.pop(), l.length && l[0] === e[0] ? pa(l, o, n) : [];
        });
        function jm(e, n) {
          return e == null ? "" : kg.call(e, n);
        }
        function lr(e) {
          var n = e == null ? 0 : e.length;
          return n ? e[n - 1] : o;
        }
        function Gm(e, n, l) {
          var s = e == null ? 0 : e.length;
          if (!s) return -1;
          var h = s;
          return l !== o && (h = Te(l), h = h < 0 ? gt(s + h, 0) : $t(h, s - 1)), n === n ? Sg(e, n, h) : bi(e, Mc, h, true);
        }
        function Vm(e, n) {
          return e && e.length ? uu(e, Te(n)) : o;
        }
        var Km = Ie(ed);
        function ed(e, n) {
          return e && e.length && n && n.length ? ba(e, n) : e;
        }
        function Um(e, n, l) {
          return e && e.length && n && n.length ? ba(e, n, me(l, 2)) : e;
        }
        function qm(e, n, l) {
          return e && e.length && n && n.length ? ba(e, n, o, l) : e;
        }
        var Ym = Lr(function(e, n) {
          var l = e == null ? 0 : e.length, s = ua(e, n);
          return hu(e, nt(n, function(h) {
            return Fr(h, l) ? +h : h;
          }).sort(Su)), s;
        });
        function Xm(e, n) {
          var l = [];
          if (!(e && e.length)) return l;
          var s = -1, h = [], b = e.length;
          for (n = me(n, 3); ++s < b; ) {
            var w = e[s];
            n(w, s, e) && (l.push(w), h.push(s));
          }
          return hu(e, h), l;
        }
        function Oa(e) {
          return e == null ? e : jg.call(e);
        }
        function Zm(e, n, l) {
          var s = e == null ? 0 : e.length;
          return s ? (l && typeof l != "number" && zt(e, n, l) ? (n = 0, l = s) : (n = n == null ? 0 : Te(n), l = l === o ? s : Te(l)), ir(e, n, l)) : [];
        }
        function Qm(e, n) {
          return Oi(e, n);
        }
        function Jm(e, n, l) {
          return ya(e, n, me(l, 2));
        }
        function e0(e, n) {
          var l = e == null ? 0 : e.length;
          if (l) {
            var s = Oi(e, n);
            if (s < l && hr(e[s], n)) return s;
          }
          return -1;
        }
        function t0(e, n) {
          return Oi(e, n, true);
        }
        function r0(e, n, l) {
          return ya(e, n, me(l, 2), true);
        }
        function n0(e, n) {
          var l = e == null ? 0 : e.length;
          if (l) {
            var s = Oi(e, n, true) - 1;
            if (hr(e[s], n)) return s;
          }
          return -1;
        }
        function o0(e) {
          return e && e.length ? gu(e) : [];
        }
        function i0(e, n) {
          return e && e.length ? gu(e, me(n, 2)) : [];
        }
        function l0(e) {
          var n = e == null ? 0 : e.length;
          return n ? ir(e, 1, n) : [];
        }
        function a0(e, n, l) {
          return e && e.length ? (n = l || n === o ? 1 : Te(n), ir(e, 0, n < 0 ? 0 : n)) : [];
        }
        function s0(e, n, l) {
          var s = e == null ? 0 : e.length;
          return s ? (n = l || n === o ? 1 : Te(n), n = s - n, ir(e, n < 0 ? 0 : n, s)) : [];
        }
        function c0(e, n) {
          return e && e.length ? ki(e, me(n, 3), false, true) : [];
        }
        function u0(e, n) {
          return e && e.length ? ki(e, me(n, 3)) : [];
        }
        var d0 = Ie(function(e) {
          return Qr(wt(e, 1, ct, true));
        }), f0 = Ie(function(e) {
          var n = lr(e);
          return ct(n) && (n = o), Qr(wt(e, 1, ct, true), me(n, 2));
        }), h0 = Ie(function(e) {
          var n = lr(e);
          return n = typeof n == "function" ? n : o, Qr(wt(e, 1, ct, true), o, n);
        });
        function p0(e) {
          return e && e.length ? Qr(e) : [];
        }
        function g0(e, n) {
          return e && e.length ? Qr(e, me(n, 2)) : [];
        }
        function v0(e, n) {
          return n = typeof n == "function" ? n : o, e && e.length ? Qr(e, o, n) : [];
        }
        function ka(e) {
          if (!(e && e.length)) return [];
          var n = 0;
          return e = Ur(e, function(l) {
            if (ct(l)) return n = gt(l.length, n), true;
          }), ra(n, function(l) {
            return nt(e, Jl(l));
          });
        }
        function td(e, n) {
          if (!(e && e.length)) return [];
          var l = ka(e);
          return n == null ? l : nt(l, function(s) {
            return Kt(n, o, s);
          });
        }
        var m0 = Ie(function(e, n) {
          return ct(e) ? Bo(e, n) : [];
        }), b0 = Ie(function(e) {
          return Sa(Ur(e, ct));
        }), x0 = Ie(function(e) {
          var n = lr(e);
          return ct(n) && (n = o), Sa(Ur(e, ct), me(n, 2));
        }), C0 = Ie(function(e) {
          var n = lr(e);
          return n = typeof n == "function" ? n : o, Sa(Ur(e, ct), o, n);
        }), y0 = Ie(ka);
        function w0(e, n) {
          return xu(e || [], n || [], Io);
        }
        function S0(e, n) {
          return xu(e || [], n || [], Lo);
        }
        var $0 = Ie(function(e) {
          var n = e.length, l = n > 1 ? e[n - 1] : o;
          return l = typeof l == "function" ? (e.pop(), l) : o, td(e, l);
        });
        function rd(e) {
          var n = v(e);
          return n.__chain__ = true, n;
        }
        function P0(e, n) {
          return n(e), e;
        }
        function qi(e, n) {
          return n(e);
        }
        var _0 = Lr(function(e) {
          var n = e.length, l = n ? e[0] : 0, s = this.__wrapped__, h = function(b) {
            return ua(b, e);
          };
          return n > 1 || this.__actions__.length || !(s instanceof Fe) || !Fr(l) ? this.thru(h) : (s = s.slice(l, +l + (n ? 1 : 0)), s.__actions__.push({ func: qi, args: [h], thisArg: o }), new nr(s, this.__chain__).thru(function(b) {
            return n && !b.length && b.push(o), b;
          }));
        });
        function T0() {
          return rd(this);
        }
        function E0() {
          return new nr(this.value(), this.__chain__);
        }
        function z0() {
          this.__values__ === o && (this.__values__ = vd(this.value()));
          var e = this.__index__ >= this.__values__.length, n = e ? o : this.__values__[this.__index__++];
          return { done: e, value: n };
        }
        function R0() {
          return this;
        }
        function I0(e) {
          for (var n, l = this; l instanceof Mi; ) {
            var s = Yu(l);
            s.__index__ = 0, s.__values__ = o, n ? h.__wrapped__ = s : n = s;
            var h = s;
            l = l.__wrapped__;
          }
          return h.__wrapped__ = e, n;
        }
        function B0() {
          var e = this.__wrapped__;
          if (e instanceof Fe) {
            var n = e;
            return this.__actions__.length && (n = new Fe(this)), n = n.reverse(), n.__actions__.push({ func: qi, args: [Oa], thisArg: o }), new nr(n, this.__chain__);
          }
          return this.thru(Oa);
        }
        function M0() {
          return bu(this.__wrapped__, this.__actions__);
        }
        var A0 = Di(function(e, n, l) {
          Ke.call(e, l) ? ++e[l] : Mr(e, l, 1);
        });
        function L0(e, n, l) {
          var s = _e(e) ? Ic : Pv;
          return l && zt(e, n, l) && (n = o), s(e, me(n, 3));
        }
        function F0(e, n) {
          var l = _e(e) ? Ur : tu;
          return l(e, me(n, 3));
        }
        var H0 = zu(Xu), O0 = zu(Zu);
        function k0(e, n) {
          return wt(Yi(e, n), 1);
        }
        function D0(e, n) {
          return wt(Yi(e, n), U);
        }
        function W0(e, n, l) {
          return l = l === o ? 1 : Te(l), wt(Yi(e, n), l);
        }
        function nd(e, n) {
          var l = _e(e) ? tr : Zr;
          return l(e, me(n, 3));
        }
        function od(e, n) {
          var l = _e(e) ? lg : eu;
          return l(e, me(n, 3));
        }
        var N0 = Di(function(e, n, l) {
          Ke.call(e, l) ? e[l].push(n) : Mr(e, l, [n]);
        });
        function j0(e, n, l, s) {
          e = Ft(e) ? e : ro(e), l = l && !s ? Te(l) : 0;
          var h = e.length;
          return l < 0 && (l = gt(h + l, 0)), el(e) ? l <= h && e.indexOf(n, l) > -1 : !!h && Gn(e, n, l) > -1;
        }
        var G0 = Ie(function(e, n, l) {
          var s = -1, h = typeof n == "function", b = Ft(e) ? H(e.length) : [];
          return Zr(e, function(w) {
            b[++s] = h ? Kt(n, w, l) : Mo(w, n, l);
          }), b;
        }), V0 = Di(function(e, n, l) {
          Mr(e, l, n);
        });
        function Yi(e, n) {
          var l = _e(e) ? nt : au;
          return l(e, me(n, 3));
        }
        function K0(e, n, l, s) {
          return e == null ? [] : (_e(n) || (n = n == null ? [] : [n]), l = s ? o : l, _e(l) || (l = l == null ? [] : [l]), du(e, n, l));
        }
        var U0 = Di(function(e, n, l) {
          e[l ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function q0(e, n, l) {
          var s = _e(e) ? Zl : Lc, h = arguments.length < 3;
          return s(e, me(n, 4), l, h, Zr);
        }
        function Y0(e, n, l) {
          var s = _e(e) ? ag : Lc, h = arguments.length < 3;
          return s(e, me(n, 4), l, h, eu);
        }
        function X0(e, n) {
          var l = _e(e) ? Ur : tu;
          return l(e, Qi(me(n, 3)));
        }
        function Z0(e) {
          var n = _e(e) ? Xc : jv;
          return n(e);
        }
        function Q0(e, n, l) {
          (l ? zt(e, n, l) : n === o) ? n = 1 : n = Te(n);
          var s = _e(e) ? Cv : Gv;
          return s(e, n);
        }
        function J0(e) {
          var n = _e(e) ? yv : Kv;
          return n(e);
        }
        function eb(e) {
          if (e == null) return 0;
          if (Ft(e)) return el(e) ? Kn(e) : e.length;
          var n = Pt(e);
          return n == ge || n == We ? e.size : va(e).length;
        }
        function tb(e, n, l) {
          var s = _e(e) ? Ql : Uv;
          return l && zt(e, n, l) && (n = o), s(e, me(n, 3));
        }
        var rb = Ie(function(e, n) {
          if (e == null) return [];
          var l = n.length;
          return l > 1 && zt(e, n[0], n[1]) ? n = [] : l > 2 && zt(n[0], n[1], n[2]) && (n = [n[0]]), du(e, wt(n, 1), []);
        }), Xi = Fg || function() {
          return yt.Date.now();
        };
        function nb(e, n) {
          if (typeof n != "function") throw new rr(u);
          return e = Te(e), function() {
            if (--e < 1) return n.apply(this, arguments);
          };
        }
        function id(e, n, l) {
          return n = l ? o : n, n = e && n == null ? e.length : n, Ar(e, S, o, o, o, o, n);
        }
        function ld(e, n) {
          var l;
          if (typeof n != "function") throw new rr(u);
          return e = Te(e), function() {
            return --e > 0 && (l = n.apply(this, arguments)), e <= 1 && (n = o), l;
          };
        }
        var Da = Ie(function(e, n, l) {
          var s = _;
          if (l.length) {
            var h = Yr(l, eo(Da));
            s |= F;
          }
          return Ar(e, s, n, l, h);
        }), ad = Ie(function(e, n, l) {
          var s = _ | $;
          if (l.length) {
            var h = Yr(l, eo(ad));
            s |= F;
          }
          return Ar(n, s, e, l, h);
        });
        function sd(e, n, l) {
          n = l ? o : n;
          var s = Ar(e, L, o, o, o, o, o, n);
          return s.placeholder = sd.placeholder, s;
        }
        function cd(e, n, l) {
          n = l ? o : n;
          var s = Ar(e, I, o, o, o, o, o, n);
          return s.placeholder = cd.placeholder, s;
        }
        function ud(e, n, l) {
          var s, h, b, w, T, z, N = 0, j = false, q = false, ee = true;
          if (typeof e != "function") throw new rr(u);
          n = ar(n) || 0, ot(l) && (j = !!l.leading, q = "maxWait" in l, b = q ? gt(ar(l.maxWait) || 0, n) : b, ee = "trailing" in l ? !!l.trailing : ee);
          function fe(ut) {
            var pr = s, kr = h;
            return s = h = o, N = ut, w = e.apply(kr, pr), w;
          }
          function be(ut) {
            return N = ut, T = Oo(Ae, n), j ? fe(ut) : w;
          }
          function Re(ut) {
            var pr = ut - z, kr = ut - N, zd = n - pr;
            return q ? $t(zd, b - kr) : zd;
          }
          function xe(ut) {
            var pr = ut - z, kr = ut - N;
            return z === o || pr >= n || pr < 0 || q && kr >= b;
          }
          function Ae() {
            var ut = Xi();
            if (xe(ut)) return ke(ut);
            T = Oo(Ae, Re(ut));
          }
          function ke(ut) {
            return T = o, ee && s ? fe(ut) : (s = h = o, w);
          }
          function Xt() {
            T !== o && Cu(T), N = 0, s = z = h = T = o;
          }
          function Rt() {
            return T === o ? w : ke(Xi());
          }
          function Zt() {
            var ut = Xi(), pr = xe(ut);
            if (s = arguments, h = this, z = ut, pr) {
              if (T === o) return be(z);
              if (q) return Cu(T), T = Oo(Ae, n), fe(z);
            }
            return T === o && (T = Oo(Ae, n)), w;
          }
          return Zt.cancel = Xt, Zt.flush = Rt, Zt;
        }
        var ob = Ie(function(e, n) {
          return Jc(e, 1, n);
        }), ib = Ie(function(e, n, l) {
          return Jc(e, ar(n) || 0, l);
        });
        function lb(e) {
          return Ar(e, A);
        }
        function Zi(e, n) {
          if (typeof e != "function" || n != null && typeof n != "function") throw new rr(u);
          var l = function() {
            var s = arguments, h = n ? n.apply(this, s) : s[0], b = l.cache;
            if (b.has(h)) return b.get(h);
            var w = e.apply(this, s);
            return l.cache = b.set(h, w) || b, w;
          };
          return l.cache = new (Zi.Cache || Br)(), l;
        }
        Zi.Cache = Br;
        function Qi(e) {
          if (typeof e != "function") throw new rr(u);
          return function() {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, n[0]);
              case 2:
                return !e.call(this, n[0], n[1]);
              case 3:
                return !e.call(this, n[0], n[1], n[2]);
            }
            return !e.apply(this, n);
          };
        }
        function ab(e) {
          return ld(2, e);
        }
        var sb = qv(function(e, n) {
          n = n.length == 1 && _e(n[0]) ? nt(n[0], Ut(me())) : nt(wt(n, 1), Ut(me()));
          var l = n.length;
          return Ie(function(s) {
            for (var h = -1, b = $t(s.length, l); ++h < b; ) s[h] = n[h].call(this, s[h]);
            return Kt(e, this, s);
          });
        }), Wa = Ie(function(e, n) {
          var l = Yr(n, eo(Wa));
          return Ar(e, F, o, n, l);
        }), dd = Ie(function(e, n) {
          var l = Yr(n, eo(dd));
          return Ar(e, k, o, n, l);
        }), cb = Lr(function(e, n) {
          return Ar(e, M, o, o, o, n);
        });
        function ub(e, n) {
          if (typeof e != "function") throw new rr(u);
          return n = n === o ? n : Te(n), Ie(e, n);
        }
        function db(e, n) {
          if (typeof e != "function") throw new rr(u);
          return n = n == null ? 0 : gt(Te(n), 0), Ie(function(l) {
            var s = l[n], h = en(l, 0, n);
            return s && qr(h, s), Kt(e, this, h);
          });
        }
        function fb(e, n, l) {
          var s = true, h = true;
          if (typeof e != "function") throw new rr(u);
          return ot(l) && (s = "leading" in l ? !!l.leading : s, h = "trailing" in l ? !!l.trailing : h), ud(e, n, { leading: s, maxWait: n, trailing: h });
        }
        function hb(e) {
          return id(e, 1);
        }
        function pb(e, n) {
          return Wa(Pa(n), e);
        }
        function gb() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return _e(e) ? e : [e];
        }
        function vb(e) {
          return or(e, x);
        }
        function mb(e, n) {
          return n = typeof n == "function" ? n : o, or(e, x, n);
        }
        function bb(e) {
          return or(e, m | x);
        }
        function xb(e, n) {
          return n = typeof n == "function" ? n : o, or(e, m | x, n);
        }
        function Cb(e, n) {
          return n == null || Qc(e, n, bt(n));
        }
        function hr(e, n) {
          return e === n || e !== e && n !== n;
        }
        var yb = Gi(ha), wb = Gi(function(e, n) {
          return e >= n;
        }), Pn = ou(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? ou : function(e) {
          return it(e) && Ke.call(e, "callee") && !Gc.call(e, "callee");
        }, _e = H.isArray, Sb = Pc ? Ut(Pc) : Iv;
        function Ft(e) {
          return e != null && Ji(e.length) && !Hr(e);
        }
        function ct(e) {
          return it(e) && Ft(e);
        }
        function $b(e) {
          return e === true || e === false || it(e) && Et(e) == te;
        }
        var tn = Og || Qa, Pb = _c ? Ut(_c) : Bv;
        function _b(e) {
          return it(e) && e.nodeType === 1 && !ko(e);
        }
        function Tb(e) {
          if (e == null) return true;
          if (Ft(e) && (_e(e) || typeof e == "string" || typeof e.splice == "function" || tn(e) || to(e) || Pn(e))) return !e.length;
          var n = Pt(e);
          if (n == ge || n == We) return !e.size;
          if (Ho(e)) return !va(e).length;
          for (var l in e) if (Ke.call(e, l)) return false;
          return true;
        }
        function Eb(e, n) {
          return Ao(e, n);
        }
        function zb(e, n, l) {
          l = typeof l == "function" ? l : o;
          var s = l ? l(e, n) : o;
          return s === o ? Ao(e, n, o, l) : !!s;
        }
        function Na(e) {
          if (!it(e)) return false;
          var n = Et(e);
          return n == Me || n == he || typeof e.message == "string" && typeof e.name == "string" && !ko(e);
        }
        function Rb(e) {
          return typeof e == "number" && Kc(e);
        }
        function Hr(e) {
          if (!ot(e)) return false;
          var n = Et(e);
          return n == je || n == we || n == O || n == yo;
        }
        function fd(e) {
          return typeof e == "number" && e == Te(e);
        }
        function Ji(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ue;
        }
        function ot(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function it(e) {
          return e != null && typeof e == "object";
        }
        var hd = Tc ? Ut(Tc) : Av;
        function Ib(e, n) {
          return e === n || ga(e, n, Ba(n));
        }
        function Bb(e, n, l) {
          return l = typeof l == "function" ? l : o, ga(e, n, Ba(n), l);
        }
        function Mb(e) {
          return pd(e) && e != +e;
        }
        function Ab(e) {
          if (mm(e)) throw new $e(c);
          return iu(e);
        }
        function Lb(e) {
          return e === null;
        }
        function Fb(e) {
          return e == null;
        }
        function pd(e) {
          return typeof e == "number" || it(e) && Et(e) == Ge;
        }
        function ko(e) {
          if (!it(e) || Et(e) != Ue) return false;
          var n = _i(e);
          if (n === null) return true;
          var l = Ke.call(n, "constructor") && n.constructor;
          return typeof l == "function" && l instanceof l && wi.call(l) == Bg;
        }
        var ja = Ec ? Ut(Ec) : Lv;
        function Hb(e) {
          return fd(e) && e >= -ue && e <= ue;
        }
        var gd = zc ? Ut(zc) : Fv;
        function el(e) {
          return typeof e == "string" || !_e(e) && it(e) && Et(e) == Gt;
        }
        function Yt(e) {
          return typeof e == "symbol" || it(e) && Et(e) == Dn;
        }
        var to = Rc ? Ut(Rc) : Hv;
        function Ob(e) {
          return e === o;
        }
        function kb(e) {
          return it(e) && Pt(e) == Vt;
        }
        function Db(e) {
          return it(e) && Et(e) == ui;
        }
        var Wb = Gi(ma), Nb = Gi(function(e, n) {
          return e <= n;
        });
        function vd(e) {
          if (!e) return [];
          if (Ft(e)) return el(e) ? dr(e) : Lt(e);
          if (_o && e[_o]) return Cg(e[_o]());
          var n = Pt(e), l = n == ge ? oa : n == We ? xi : ro;
          return l(e);
        }
        function Or(e) {
          if (!e) return e === 0 ? e : 0;
          if (e = ar(e), e === U || e === -U) {
            var n = e < 0 ? -1 : 1;
            return n * Be;
          }
          return e === e ? e : 0;
        }
        function Te(e) {
          var n = Or(e), l = n % 1;
          return n === n ? l ? n - l : n : 0;
        }
        function md(e) {
          return e ? yn(Te(e), 0, Le) : 0;
        }
        function ar(e) {
          if (typeof e == "number") return e;
          if (Yt(e)) return ze;
          if (ot(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = ot(n) ? n + "" : n;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = Fc(e);
          var l = Sp.test(e);
          return l || Pp.test(e) ? ng(e.slice(2), l ? 2 : 8) : wp.test(e) ? ze : +e;
        }
        function bd(e) {
          return Cr(e, Ht(e));
        }
        function jb(e) {
          return e ? yn(Te(e), -ue, ue) : e === 0 ? e : 0;
        }
        function Ne(e) {
          return e == null ? "" : qt(e);
        }
        var Gb = Qn(function(e, n) {
          if (Ho(n) || Ft(n)) {
            Cr(n, bt(n), e);
            return;
          }
          for (var l in n) Ke.call(n, l) && Io(e, l, n[l]);
        }), xd = Qn(function(e, n) {
          Cr(n, Ht(n), e);
        }), tl = Qn(function(e, n, l, s) {
          Cr(n, Ht(n), e, s);
        }), Vb = Qn(function(e, n, l, s) {
          Cr(n, bt(n), e, s);
        }), Kb = Lr(ua);
        function Ub(e, n) {
          var l = Zn(e);
          return n == null ? l : Zc(l, n);
        }
        var qb = Ie(function(e, n) {
          e = Ye(e);
          var l = -1, s = n.length, h = s > 2 ? n[2] : o;
          for (h && zt(n[0], n[1], h) && (s = 1); ++l < s; ) for (var b = n[l], w = Ht(b), T = -1, z = w.length; ++T < z; ) {
            var N = w[T], j = e[N];
            (j === o || hr(j, qn[N]) && !Ke.call(e, N)) && (e[N] = b[N]);
          }
          return e;
        }), Yb = Ie(function(e) {
          return e.push(o, Fu), Kt(Cd, o, e);
        });
        function Xb(e, n) {
          return Bc(e, me(n, 3), xr);
        }
        function Zb(e, n) {
          return Bc(e, me(n, 3), fa);
        }
        function Qb(e, n) {
          return e == null ? e : da(e, me(n, 3), Ht);
        }
        function Jb(e, n) {
          return e == null ? e : ru(e, me(n, 3), Ht);
        }
        function ex(e, n) {
          return e && xr(e, me(n, 3));
        }
        function tx(e, n) {
          return e && fa(e, me(n, 3));
        }
        function rx(e) {
          return e == null ? [] : Fi(e, bt(e));
        }
        function nx(e) {
          return e == null ? [] : Fi(e, Ht(e));
        }
        function Ga(e, n, l) {
          var s = e == null ? o : wn(e, n);
          return s === o ? l : s;
        }
        function ox(e, n) {
          return e != null && ku(e, n, Tv);
        }
        function Va(e, n) {
          return e != null && ku(e, n, Ev);
        }
        var ix = Iu(function(e, n, l) {
          n != null && typeof n.toString != "function" && (n = Si.call(n)), e[n] = l;
        }, Ua(Ot)), lx = Iu(function(e, n, l) {
          n != null && typeof n.toString != "function" && (n = Si.call(n)), Ke.call(e, n) ? e[n].push(l) : e[n] = [l];
        }, me), ax = Ie(Mo);
        function bt(e) {
          return Ft(e) ? Yc(e) : va(e);
        }
        function Ht(e) {
          return Ft(e) ? Yc(e, true) : Ov(e);
        }
        function sx(e, n) {
          var l = {};
          return n = me(n, 3), xr(e, function(s, h, b) {
            Mr(l, n(s, h, b), s);
          }), l;
        }
        function cx(e, n) {
          var l = {};
          return n = me(n, 3), xr(e, function(s, h, b) {
            Mr(l, h, n(s, h, b));
          }), l;
        }
        var ux = Qn(function(e, n, l) {
          Hi(e, n, l);
        }), Cd = Qn(function(e, n, l, s) {
          Hi(e, n, l, s);
        }), dx = Lr(function(e, n) {
          var l = {};
          if (e == null) return l;
          var s = false;
          n = nt(n, function(b) {
            return b = Jr(b, e), s || (s = b.length > 1), b;
          }), Cr(e, Ra(e), l), s && (l = or(l, m | C | x, im));
          for (var h = n.length; h--; ) wa(l, n[h]);
          return l;
        });
        function fx(e, n) {
          return yd(e, Qi(me(n)));
        }
        var hx = Lr(function(e, n) {
          return e == null ? {} : Dv(e, n);
        });
        function yd(e, n) {
          if (e == null) return {};
          var l = nt(Ra(e), function(s) {
            return [s];
          });
          return n = me(n), fu(e, l, function(s, h) {
            return n(s, h[0]);
          });
        }
        function px(e, n, l) {
          n = Jr(n, e);
          var s = -1, h = n.length;
          for (h || (h = 1, e = o); ++s < h; ) {
            var b = e == null ? o : e[yr(n[s])];
            b === o && (s = h, b = l), e = Hr(b) ? b.call(e) : b;
          }
          return e;
        }
        function gx(e, n, l) {
          return e == null ? e : Lo(e, n, l);
        }
        function vx(e, n, l, s) {
          return s = typeof s == "function" ? s : o, e == null ? e : Lo(e, n, l, s);
        }
        var wd = Au(bt), Sd = Au(Ht);
        function mx(e, n, l) {
          var s = _e(e), h = s || tn(e) || to(e);
          if (n = me(n, 4), l == null) {
            var b = e && e.constructor;
            h ? l = s ? new b() : [] : ot(e) ? l = Hr(b) ? Zn(_i(e)) : {} : l = {};
          }
          return (h ? tr : xr)(e, function(w, T, z) {
            return n(l, w, T, z);
          }), l;
        }
        function bx(e, n) {
          return e == null ? true : wa(e, n);
        }
        function xx(e, n, l) {
          return e == null ? e : mu(e, n, Pa(l));
        }
        function Cx(e, n, l, s) {
          return s = typeof s == "function" ? s : o, e == null ? e : mu(e, n, Pa(l), s);
        }
        function ro(e) {
          return e == null ? [] : na(e, bt(e));
        }
        function yx(e) {
          return e == null ? [] : na(e, Ht(e));
        }
        function wx(e, n, l) {
          return l === o && (l = n, n = o), l !== o && (l = ar(l), l = l === l ? l : 0), n !== o && (n = ar(n), n = n === n ? n : 0), yn(ar(e), n, l);
        }
        function Sx(e, n, l) {
          return n = Or(n), l === o ? (l = n, n = 0) : l = Or(l), e = ar(e), zv(e, n, l);
        }
        function $x(e, n, l) {
          if (l && typeof l != "boolean" && zt(e, n, l) && (n = l = o), l === o && (typeof n == "boolean" ? (l = n, n = o) : typeof e == "boolean" && (l = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = Or(e), n === o ? (n = e, e = 0) : n = Or(n)), e > n) {
            var s = e;
            e = n, n = s;
          }
          if (l || e % 1 || n % 1) {
            var h = Uc();
            return $t(e + h * (n - e + rg("1e-" + ((h + "").length - 1))), n);
          }
          return xa(e, n);
        }
        var Px = Jn(function(e, n, l) {
          return n = n.toLowerCase(), e + (l ? $d(n) : n);
        });
        function $d(e) {
          return Ka(Ne(e).toLowerCase());
        }
        function Pd(e) {
          return e = Ne(e), e && e.replace(Tp, gg).replace(Kp, "");
        }
        function _x(e, n, l) {
          e = Ne(e), n = qt(n);
          var s = e.length;
          l = l === o ? s : yn(Te(l), 0, s);
          var h = l;
          return l -= n.length, l >= 0 && e.slice(l, h) == n;
        }
        function Tx(e) {
          return e = Ne(e), e && At.test(e) ? e.replace(Mt, vg) : e;
        }
        function Ex(e) {
          return e = Ne(e), e && Al.test(e) ? e.replace(So, "\\$&") : e;
        }
        var zx = Jn(function(e, n, l) {
          return e + (l ? "-" : "") + n.toLowerCase();
        }), Rx = Jn(function(e, n, l) {
          return e + (l ? " " : "") + n.toLowerCase();
        }), Ix = Eu("toLowerCase");
        function Bx(e, n, l) {
          e = Ne(e), n = Te(n);
          var s = n ? Kn(e) : 0;
          if (!n || s >= n) return e;
          var h = (n - s) / 2;
          return ji(Ri(h), l) + e + ji(zi(h), l);
        }
        function Mx(e, n, l) {
          e = Ne(e), n = Te(n);
          var s = n ? Kn(e) : 0;
          return n && s < n ? e + ji(n - s, l) : e;
        }
        function Ax(e, n, l) {
          e = Ne(e), n = Te(n);
          var s = n ? Kn(e) : 0;
          return n && s < n ? ji(n - s, l) + e : e;
        }
        function Lx(e, n, l) {
          return l || n == null ? n = 0 : n && (n = +n), Ng(Ne(e).replace($o, ""), n || 0);
        }
        function Fx(e, n, l) {
          return (l ? zt(e, n, l) : n === o) ? n = 1 : n = Te(n), Ca(Ne(e), n);
        }
        function Hx() {
          var e = arguments, n = Ne(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var Ox = Jn(function(e, n, l) {
          return e + (l ? "_" : "") + n.toLowerCase();
        });
        function kx(e, n, l) {
          return l && typeof l != "number" && zt(e, n, l) && (n = l = o), l = l === o ? Le : l >>> 0, l ? (e = Ne(e), e && (typeof n == "string" || n != null && !ja(n)) && (n = qt(n), !n && Vn(e)) ? en(dr(e), 0, l) : e.split(n, l)) : [];
        }
        var Dx = Jn(function(e, n, l) {
          return e + (l ? " " : "") + Ka(n);
        });
        function Wx(e, n, l) {
          return e = Ne(e), l = l == null ? 0 : yn(Te(l), 0, e.length), n = qt(n), e.slice(l, l + n.length) == n;
        }
        function Nx(e, n, l) {
          var s = v.templateSettings;
          l && zt(e, n, l) && (n = o), e = Ne(e), n = tl({}, n, s, Lu);
          var h = tl({}, n.imports, s.imports, Lu), b = bt(h), w = na(h, b), T, z, N = 0, j = n.interpolate || pi, q = "__p += '", ee = ia((n.escape || pi).source + "|" + j.source + "|" + (j === fi ? Nl : pi).source + "|" + (n.evaluate || pi).source + "|$", "g"), fe = "//# sourceURL=" + (Ke.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Zp + "]") + `
`;
          e.replace(ee, function(xe, Ae, ke, Xt, Rt, Zt) {
            return ke || (ke = Xt), q += e.slice(N, Zt).replace(Ep, mg), Ae && (T = true, q += `' +
__e(` + Ae + `) +
'`), Rt && (z = true, q += `';
` + Rt + `;
__p += '`), ke && (q += `' +
((__t = (` + ke + `)) == null ? '' : __t) +
'`), N = Zt + xe.length, xe;
          }), q += `';
`;
          var be = Ke.call(n, "variable") && n.variable;
          if (!be) q = `with (obj) {
` + q + `
}
`;
          else if (Dl.test(be)) throw new $e(d);
          q = (z ? q.replace(Se, "") : q).replace(qe, "$1").replace(st, "$1;"), q = "function(" + (be || "obj") + `) {
` + (be ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (z ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + q + `return __p
}`;
          var Re = Td(function() {
            return De(b, fe + "return " + q).apply(o, w);
          });
          if (Re.source = q, Na(Re)) throw Re;
          return Re;
        }
        function jx(e) {
          return Ne(e).toLowerCase();
        }
        function Gx(e) {
          return Ne(e).toUpperCase();
        }
        function Vx(e, n, l) {
          if (e = Ne(e), e && (l || n === o)) return Fc(e);
          if (!e || !(n = qt(n))) return e;
          var s = dr(e), h = dr(n), b = Hc(s, h), w = Oc(s, h) + 1;
          return en(s, b, w).join("");
        }
        function Kx(e, n, l) {
          if (e = Ne(e), e && (l || n === o)) return e.slice(0, Dc(e) + 1);
          if (!e || !(n = qt(n))) return e;
          var s = dr(e), h = Oc(s, dr(n)) + 1;
          return en(s, 0, h).join("");
        }
        function Ux(e, n, l) {
          if (e = Ne(e), e && (l || n === o)) return e.replace($o, "");
          if (!e || !(n = qt(n))) return e;
          var s = dr(e), h = Hc(s, dr(n));
          return en(s, h).join("");
        }
        function qx(e, n) {
          var l = V, s = J;
          if (ot(n)) {
            var h = "separator" in n ? n.separator : h;
            l = "length" in n ? Te(n.length) : l, s = "omission" in n ? qt(n.omission) : s;
          }
          e = Ne(e);
          var b = e.length;
          if (Vn(e)) {
            var w = dr(e);
            b = w.length;
          }
          if (l >= b) return e;
          var T = l - Kn(s);
          if (T < 1) return s;
          var z = w ? en(w, 0, T).join("") : e.slice(0, T);
          if (h === o) return z + s;
          if (w && (T += z.length - T), ja(h)) {
            if (e.slice(T).search(h)) {
              var N, j = z;
              for (h.global || (h = ia(h.source, Ne(hi.exec(h)) + "g")), h.lastIndex = 0; N = h.exec(j); ) var q = N.index;
              z = z.slice(0, q === o ? T : q);
            }
          } else if (e.indexOf(qt(h), T) != T) {
            var ee = z.lastIndexOf(h);
            ee > -1 && (z = z.slice(0, ee));
          }
          return z + s;
        }
        function Yx(e) {
          return e = Ne(e), e && et.test(e) ? e.replace(Ct, $g) : e;
        }
        var Xx = Jn(function(e, n, l) {
          return e + (l ? " " : "") + n.toUpperCase();
        }), Ka = Eu("toUpperCase");
        function _d(e, n, l) {
          return e = Ne(e), n = l ? o : n, n === o ? xg(e) ? Tg(e) : ug(e) : e.match(n) || [];
        }
        var Td = Ie(function(e, n) {
          try {
            return Kt(e, o, n);
          } catch (l) {
            return Na(l) ? l : new $e(l);
          }
        }), Zx = Lr(function(e, n) {
          return tr(n, function(l) {
            l = yr(l), Mr(e, l, Da(e[l], e));
          }), e;
        });
        function Qx(e) {
          var n = e == null ? 0 : e.length, l = me();
          return e = n ? nt(e, function(s) {
            if (typeof s[1] != "function") throw new rr(u);
            return [l(s[0]), s[1]];
          }) : [], Ie(function(s) {
            for (var h = -1; ++h < n; ) {
              var b = e[h];
              if (Kt(b[0], this, s)) return Kt(b[1], this, s);
            }
          });
        }
        function Jx(e) {
          return $v(or(e, m));
        }
        function Ua(e) {
          return function() {
            return e;
          };
        }
        function eC(e, n) {
          return e == null || e !== e ? n : e;
        }
        var tC = Ru(), rC = Ru(true);
        function Ot(e) {
          return e;
        }
        function qa(e) {
          return lu(typeof e == "function" ? e : or(e, m));
        }
        function nC(e) {
          return su(or(e, m));
        }
        function oC(e, n) {
          return cu(e, or(n, m));
        }
        var iC = Ie(function(e, n) {
          return function(l) {
            return Mo(l, e, n);
          };
        }), lC = Ie(function(e, n) {
          return function(l) {
            return Mo(e, l, n);
          };
        });
        function Ya(e, n, l) {
          var s = bt(n), h = Fi(n, s);
          l == null && !(ot(n) && (h.length || !s.length)) && (l = n, n = e, e = this, h = Fi(n, bt(n)));
          var b = !(ot(l) && "chain" in l) || !!l.chain, w = Hr(e);
          return tr(h, function(T) {
            var z = n[T];
            e[T] = z, w && (e.prototype[T] = function() {
              var N = this.__chain__;
              if (b || N) {
                var j = e(this.__wrapped__), q = j.__actions__ = Lt(this.__actions__);
                return q.push({ func: z, args: arguments, thisArg: e }), j.__chain__ = N, j;
              }
              return z.apply(e, qr([this.value()], arguments));
            });
          }), e;
        }
        function aC() {
          return yt._ === this && (yt._ = Mg), this;
        }
        function Xa() {
        }
        function sC(e) {
          return e = Te(e), Ie(function(n) {
            return uu(n, e);
          });
        }
        var cC = Ta(nt), uC = Ta(Ic), dC = Ta(Ql);
        function Ed(e) {
          return Aa(e) ? Jl(yr(e)) : Wv(e);
        }
        function fC(e) {
          return function(n) {
            return e == null ? o : wn(e, n);
          };
        }
        var hC = Bu(), pC = Bu(true);
        function Za() {
          return [];
        }
        function Qa() {
          return false;
        }
        function gC() {
          return {};
        }
        function vC() {
          return "";
        }
        function mC() {
          return true;
        }
        function bC(e, n) {
          if (e = Te(e), e < 1 || e > ue) return [];
          var l = Le, s = $t(e, Le);
          n = me(n), e -= Le;
          for (var h = ra(s, n); ++l < e; ) n(l);
          return h;
        }
        function xC(e) {
          return _e(e) ? nt(e, yr) : Yt(e) ? [e] : Lt(qu(Ne(e)));
        }
        function CC(e) {
          var n = ++Ig;
          return Ne(e) + n;
        }
        var yC = Ni(function(e, n) {
          return e + n;
        }, 0), wC = Ea("ceil"), SC = Ni(function(e, n) {
          return e / n;
        }, 1), $C = Ea("floor");
        function PC(e) {
          return e && e.length ? Li(e, Ot, ha) : o;
        }
        function _C(e, n) {
          return e && e.length ? Li(e, me(n, 2), ha) : o;
        }
        function TC(e) {
          return Ac(e, Ot);
        }
        function EC(e, n) {
          return Ac(e, me(n, 2));
        }
        function zC(e) {
          return e && e.length ? Li(e, Ot, ma) : o;
        }
        function RC(e, n) {
          return e && e.length ? Li(e, me(n, 2), ma) : o;
        }
        var IC = Ni(function(e, n) {
          return e * n;
        }, 1), BC = Ea("round"), MC = Ni(function(e, n) {
          return e - n;
        }, 0);
        function AC(e) {
          return e && e.length ? ta(e, Ot) : 0;
        }
        function LC(e, n) {
          return e && e.length ? ta(e, me(n, 2)) : 0;
        }
        return v.after = nb, v.ary = id, v.assign = Gb, v.assignIn = xd, v.assignInWith = tl, v.assignWith = Vb, v.at = Kb, v.before = ld, v.bind = Da, v.bindAll = Zx, v.bindKey = ad, v.castArray = gb, v.chain = rd, v.chunk = $m, v.compact = Pm, v.concat = _m, v.cond = Qx, v.conforms = Jx, v.constant = Ua, v.countBy = A0, v.create = Ub, v.curry = sd, v.curryRight = cd, v.debounce = ud, v.defaults = qb, v.defaultsDeep = Yb, v.defer = ob, v.delay = ib, v.difference = Tm, v.differenceBy = Em, v.differenceWith = zm, v.drop = Rm, v.dropRight = Im, v.dropRightWhile = Bm, v.dropWhile = Mm, v.fill = Am, v.filter = F0, v.flatMap = k0, v.flatMapDeep = D0, v.flatMapDepth = W0, v.flatten = Qu, v.flattenDeep = Lm, v.flattenDepth = Fm, v.flip = lb, v.flow = tC, v.flowRight = rC, v.fromPairs = Hm, v.functions = rx, v.functionsIn = nx, v.groupBy = N0, v.initial = km, v.intersection = Dm, v.intersectionBy = Wm, v.intersectionWith = Nm, v.invert = ix, v.invertBy = lx, v.invokeMap = G0, v.iteratee = qa, v.keyBy = V0, v.keys = bt, v.keysIn = Ht, v.map = Yi, v.mapKeys = sx, v.mapValues = cx, v.matches = nC, v.matchesProperty = oC, v.memoize = Zi, v.merge = ux, v.mergeWith = Cd, v.method = iC, v.methodOf = lC, v.mixin = Ya, v.negate = Qi, v.nthArg = sC, v.omit = dx, v.omitBy = fx, v.once = ab, v.orderBy = K0, v.over = cC, v.overArgs = sb, v.overEvery = uC, v.overSome = dC, v.partial = Wa, v.partialRight = dd, v.partition = U0, v.pick = hx, v.pickBy = yd, v.property = Ed, v.propertyOf = fC, v.pull = Km, v.pullAll = ed, v.pullAllBy = Um, v.pullAllWith = qm, v.pullAt = Ym, v.range = hC, v.rangeRight = pC, v.rearg = cb, v.reject = X0, v.remove = Xm, v.rest = ub, v.reverse = Oa, v.sampleSize = Q0, v.set = gx, v.setWith = vx, v.shuffle = J0, v.slice = Zm, v.sortBy = rb, v.sortedUniq = o0, v.sortedUniqBy = i0, v.split = kx, v.spread = db, v.tail = l0, v.take = a0, v.takeRight = s0, v.takeRightWhile = c0, v.takeWhile = u0, v.tap = P0, v.throttle = fb, v.thru = qi, v.toArray = vd, v.toPairs = wd, v.toPairsIn = Sd, v.toPath = xC, v.toPlainObject = bd, v.transform = mx, v.unary = hb, v.union = d0, v.unionBy = f0, v.unionWith = h0, v.uniq = p0, v.uniqBy = g0, v.uniqWith = v0, v.unset = bx, v.unzip = ka, v.unzipWith = td, v.update = xx, v.updateWith = Cx, v.values = ro, v.valuesIn = yx, v.without = m0, v.words = _d, v.wrap = pb, v.xor = b0, v.xorBy = x0, v.xorWith = C0, v.zip = y0, v.zipObject = w0, v.zipObjectDeep = S0, v.zipWith = $0, v.entries = wd, v.entriesIn = Sd, v.extend = xd, v.extendWith = tl, Ya(v, v), v.add = yC, v.attempt = Td, v.camelCase = Px, v.capitalize = $d, v.ceil = wC, v.clamp = wx, v.clone = vb, v.cloneDeep = bb, v.cloneDeepWith = xb, v.cloneWith = mb, v.conformsTo = Cb, v.deburr = Pd, v.defaultTo = eC, v.divide = SC, v.endsWith = _x, v.eq = hr, v.escape = Tx, v.escapeRegExp = Ex, v.every = L0, v.find = H0, v.findIndex = Xu, v.findKey = Xb, v.findLast = O0, v.findLastIndex = Zu, v.findLastKey = Zb, v.floor = $C, v.forEach = nd, v.forEachRight = od, v.forIn = Qb, v.forInRight = Jb, v.forOwn = ex, v.forOwnRight = tx, v.get = Ga, v.gt = yb, v.gte = wb, v.has = ox, v.hasIn = Va, v.head = Ju, v.identity = Ot, v.includes = j0, v.indexOf = Om, v.inRange = Sx, v.invoke = ax, v.isArguments = Pn, v.isArray = _e, v.isArrayBuffer = Sb, v.isArrayLike = Ft, v.isArrayLikeObject = ct, v.isBoolean = $b, v.isBuffer = tn, v.isDate = Pb, v.isElement = _b, v.isEmpty = Tb, v.isEqual = Eb, v.isEqualWith = zb, v.isError = Na, v.isFinite = Rb, v.isFunction = Hr, v.isInteger = fd, v.isLength = Ji, v.isMap = hd, v.isMatch = Ib, v.isMatchWith = Bb, v.isNaN = Mb, v.isNative = Ab, v.isNil = Fb, v.isNull = Lb, v.isNumber = pd, v.isObject = ot, v.isObjectLike = it, v.isPlainObject = ko, v.isRegExp = ja, v.isSafeInteger = Hb, v.isSet = gd, v.isString = el, v.isSymbol = Yt, v.isTypedArray = to, v.isUndefined = Ob, v.isWeakMap = kb, v.isWeakSet = Db, v.join = jm, v.kebabCase = zx, v.last = lr, v.lastIndexOf = Gm, v.lowerCase = Rx, v.lowerFirst = Ix, v.lt = Wb, v.lte = Nb, v.max = PC, v.maxBy = _C, v.mean = TC, v.meanBy = EC, v.min = zC, v.minBy = RC, v.stubArray = Za, v.stubFalse = Qa, v.stubObject = gC, v.stubString = vC, v.stubTrue = mC, v.multiply = IC, v.nth = Vm, v.noConflict = aC, v.noop = Xa, v.now = Xi, v.pad = Bx, v.padEnd = Mx, v.padStart = Ax, v.parseInt = Lx, v.random = $x, v.reduce = q0, v.reduceRight = Y0, v.repeat = Fx, v.replace = Hx, v.result = px, v.round = BC, v.runInContext = E, v.sample = Z0, v.size = eb, v.snakeCase = Ox, v.some = tb, v.sortedIndex = Qm, v.sortedIndexBy = Jm, v.sortedIndexOf = e0, v.sortedLastIndex = t0, v.sortedLastIndexBy = r0, v.sortedLastIndexOf = n0, v.startCase = Dx, v.startsWith = Wx, v.subtract = MC, v.sum = AC, v.sumBy = LC, v.template = Nx, v.times = bC, v.toFinite = Or, v.toInteger = Te, v.toLength = md, v.toLower = jx, v.toNumber = ar, v.toSafeInteger = jb, v.toString = Ne, v.toUpper = Gx, v.trim = Vx, v.trimEnd = Kx, v.trimStart = Ux, v.truncate = qx, v.unescape = Yx, v.uniqueId = CC, v.upperCase = Xx, v.upperFirst = Ka, v.each = nd, v.eachRight = od, v.first = Ju, Ya(v, (function() {
          var e = {};
          return xr(v, function(n, l) {
            Ke.call(v.prototype, l) || (e[l] = n);
          }), e;
        })(), { chain: false }), v.VERSION = i, tr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          v[e].placeholder = v;
        }), tr(["drop", "take"], function(e, n) {
          Fe.prototype[e] = function(l) {
            l = l === o ? 1 : gt(Te(l), 0);
            var s = this.__filtered__ && !n ? new Fe(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = $t(l, s.__takeCount__) : s.__views__.push({ size: $t(l, Le), type: e + (s.__dir__ < 0 ? "Right" : "") }), s;
          }, Fe.prototype[e + "Right"] = function(l) {
            return this.reverse()[e](l).reverse();
          };
        }), tr(["filter", "map", "takeWhile"], function(e, n) {
          var l = n + 1, s = l == re || l == ie;
          Fe.prototype[e] = function(h) {
            var b = this.clone();
            return b.__iteratees__.push({ iteratee: me(h, 3), type: l }), b.__filtered__ = b.__filtered__ || s, b;
          };
        }), tr(["head", "last"], function(e, n) {
          var l = "take" + (n ? "Right" : "");
          Fe.prototype[e] = function() {
            return this[l](1).value()[0];
          };
        }), tr(["initial", "tail"], function(e, n) {
          var l = "drop" + (n ? "" : "Right");
          Fe.prototype[e] = function() {
            return this.__filtered__ ? new Fe(this) : this[l](1);
          };
        }), Fe.prototype.compact = function() {
          return this.filter(Ot);
        }, Fe.prototype.find = function(e) {
          return this.filter(e).head();
        }, Fe.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Fe.prototype.invokeMap = Ie(function(e, n) {
          return typeof e == "function" ? new Fe(this) : this.map(function(l) {
            return Mo(l, e, n);
          });
        }), Fe.prototype.reject = function(e) {
          return this.filter(Qi(me(e)));
        }, Fe.prototype.slice = function(e, n) {
          e = Te(e);
          var l = this;
          return l.__filtered__ && (e > 0 || n < 0) ? new Fe(l) : (e < 0 ? l = l.takeRight(-e) : e && (l = l.drop(e)), n !== o && (n = Te(n), l = n < 0 ? l.dropRight(-n) : l.take(n - e)), l);
        }, Fe.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Fe.prototype.toArray = function() {
          return this.take(Le);
        }, xr(Fe.prototype, function(e, n) {
          var l = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), h = v[s ? "take" + (n == "last" ? "Right" : "") : n], b = s || /^find/.test(n);
          h && (v.prototype[n] = function() {
            var w = this.__wrapped__, T = s ? [1] : arguments, z = w instanceof Fe, N = T[0], j = z || _e(w), q = function(Ae) {
              var ke = h.apply(v, qr([Ae], T));
              return s && ee ? ke[0] : ke;
            };
            j && l && typeof N == "function" && N.length != 1 && (z = j = false);
            var ee = this.__chain__, fe = !!this.__actions__.length, be = b && !ee, Re = z && !fe;
            if (!b && j) {
              w = Re ? w : new Fe(this);
              var xe = e.apply(w, T);
              return xe.__actions__.push({ func: qi, args: [q], thisArg: o }), new nr(xe, ee);
            }
            return be && Re ? e.apply(this, T) : (xe = this.thru(q), be ? s ? xe.value()[0] : xe.value() : xe);
          });
        }), tr(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var n = Ci[e], l = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
          v.prototype[e] = function() {
            var h = arguments;
            if (s && !this.__chain__) {
              var b = this.value();
              return n.apply(_e(b) ? b : [], h);
            }
            return this[l](function(w) {
              return n.apply(_e(w) ? w : [], h);
            });
          };
        }), xr(Fe.prototype, function(e, n) {
          var l = v[n];
          if (l) {
            var s = l.name + "";
            Ke.call(Xn, s) || (Xn[s] = []), Xn[s].push({ name: n, func: l });
          }
        }), Xn[Wi(o, $).name] = [{ name: "wrapper", func: o }], Fe.prototype.clone = Yg, Fe.prototype.reverse = Xg, Fe.prototype.value = Zg, v.prototype.at = _0, v.prototype.chain = T0, v.prototype.commit = E0, v.prototype.next = z0, v.prototype.plant = I0, v.prototype.reverse = B0, v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = M0, v.prototype.first = v.prototype.head, _o && (v.prototype[_o] = R0), v;
      }), Un = Eg();
      mn ? ((mn.exports = Un)._ = Un, ql._ = Un) : yt._ = Un;
    }).call(Uw);
  })(Vo, Vo.exports)), Vo.exports;
}
var Rn = qw();
const ri = "naive-ui-style";
function ii(t, r, o) {
  if (!r) return;
  const i = xo(), a = Y(() => {
    const { value: d } = r;
    if (!d) return;
    const f = d[t];
    if (f) return f;
  }), c = He(Vr, null), u = () => {
    mo(() => {
      const { value: d } = o, f = `${d}${t}Rtl`;
      if (gy(f, i)) return;
      const { value: p } = a;
      p && p.style.mount({ id: f, head: true, anchorMetaName: ri, props: { bPrefix: d ? `.${d}-` : void 0 }, ssr: i, parent: c == null ? void 0 : c.styleMountTarget });
    });
  };
  return i ? u() : Fn(u), a;
}
const On = { fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace", fontWeight: "400", fontWeightStrong: "500", cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)", cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)", cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)", borderRadius: "3px", borderRadiusSmall: "2px", fontSize: "14px", fontSizeMini: "12px", fontSizeTiny: "12px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", lineHeight: "1.6", heightMini: "16px", heightTiny: "22px", heightSmall: "28px", heightMedium: "34px", heightLarge: "40px", heightHuge: "46px" }, { fontSize: Yw, fontFamily: Xw, lineHeight: Zw } = On, jh = X("body", `
 margin: 0;
 font-size: ${Yw};
 font-family: ${Xw};
 line-height: ${Zw};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [X("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function _l(t, r, o) {
  if (!r) return;
  const i = xo(), a = He(Vr, null), c = () => {
    const u = o.value;
    r.mount({ id: u === void 0 ? t : u + t, head: true, anchorMetaName: ri, props: { bPrefix: u ? `.${u}-` : void 0 }, ssr: i, parent: a == null ? void 0 : a.styleMountTarget }), (a == null ? void 0 : a.preflightStyleDisabled) || jh.mount({ id: "n-global", head: true, anchorMetaName: ri, ssr: i, parent: a == null ? void 0 : a.styleMountTarget });
  };
  i ? c() : Fn(c);
}
function rE(t) {
  return t;
}
function at(t, r, o, i, a, c) {
  const u = xo(), d = He(Vr, null);
  if (o) {
    const p = () => {
      const g = c == null ? void 0 : c.value;
      o.mount({ id: g === void 0 ? r : g + r, head: true, props: { bPrefix: g ? `.${g}-` : void 0 }, anchorMetaName: ri, ssr: u, parent: d == null ? void 0 : d.styleMountTarget }), (d == null ? void 0 : d.preflightStyleDisabled) || jh.mount({ id: "n-global", head: true, anchorMetaName: ri, ssr: u, parent: d == null ? void 0 : d.styleMountTarget });
    };
    u ? p() : Fn(p);
  }
  return Y(() => {
    var p;
    const { theme: { common: g, self: m, peers: C = {} } = {}, themeOverrides: x = {}, builtinThemeOverrides: y = {} } = a, { common: P, peers: _ } = x, { common: $ = void 0, [t]: { common: R = void 0, self: L = void 0, peers: I = {} } = {} } = (d == null ? void 0 : d.mergedThemeRef.value) || {}, { common: F = void 0, [t]: k = {} } = (d == null ? void 0 : d.mergedThemeOverridesRef.value) || {}, { common: S, peers: M = {} } = k, A = Rn.merge({}, g || R || $ || i.common, F, S, P), V = Rn.merge((p = m || L || i.self) === null || p === void 0 ? void 0 : p(A), y, k, x);
    return { common: A, self: V, peers: Rn.merge({}, i.peers, I, C), peerOverrides: Rn.merge({}, y.peers, M, _) };
  });
}
at.props = { theme: Object, themeOverrides: Object, builtinThemeOverrides: Object };
const Qw = ye("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [X("svg", `
 height: 1em;
 width: 1em;
 `)]), Gh = Ee({ name: "BaseIcon", props: { role: String, ariaLabel: String, ariaDisabled: { type: Boolean, default: void 0 }, ariaHidden: { type: Boolean, default: void 0 }, clsPrefix: { type: String, required: true }, onClick: Function, onMousedown: Function, onMouseup: Function }, setup(t) {
  _l("-base-icon", Qw, Je(t, "clsPrefix"));
}, render() {
  return B("i", { class: `${this.clsPrefix}-base-icon`, onClick: this.onClick, onMousedown: this.onMousedown, onMouseup: this.onMouseup, role: this.role, "aria-label": this.ariaLabel, "aria-hidden": this.ariaHidden, "aria-disabled": this.ariaDisabled }, this.$slots);
} }), Vh = Ee({ name: "BaseIconSwitchTransition", setup(t, { slots: r }) {
  const o = Sl();
  return () => B(cn, { name: "icon-switch-transition", appear: o.value }, r);
} });
function li(t, r) {
  const o = Ee({ render() {
    return r();
  } });
  return Ee({ name: Rn.upperFirst(t), setup() {
    var i;
    const a = (i = He(Vr, null)) === null || i === void 0 ? void 0 : i.mergedIconsRef;
    return () => {
      var c;
      const u = (c = a == null ? void 0 : a.value) === null || c === void 0 ? void 0 : c[t];
      return u ? u() : B(o, null);
    };
  } });
}
const Jw = Ee({ name: "ChevronRight", render() {
  return B("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, B("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" }));
} }), eS = li("close", () => B("svg", { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true }, B("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, B("g", { fill: "currentColor", "fill-rule": "nonzero" }, B("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))), tS = li("error", () => B("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, B("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, B("g", { "fill-rule": "nonzero" }, B("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" }))))), Ff = li("info", () => B("svg", { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, B("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, B("g", { "fill-rule": "nonzero" }, B("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" }))))), rS = li("success", () => B("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, B("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, B("g", { "fill-rule": "nonzero" }, B("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" }))))), nS = li("warning", () => B("svg", { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, B("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, B("g", { "fill-rule": "nonzero" }, B("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" }))))), { cubicBezierEaseInOut: oS } = On;
function Es({ originalTransform: t = "", left: r = 0, top: o = 0, transition: i = `all .3s ${oS} !important` } = {}) {
  return [X("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", { transform: `${t} scale(0.75)`, left: r, top: o, opacity: 0 }), X("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", { transform: `scale(1) ${t}`, left: r, top: o, opacity: 1 }), X("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", { transformOrigin: "center", position: "absolute", left: r, top: o, transition: i })];
}
const iS = ye("base-close", `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [pe("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), X("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), an("disabled", [X("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), X("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), X("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), X("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), X("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), pe("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), pe("round", [X("&::before", `
 border-radius: 50%;
 `)])]), Kh = Ee({ name: "BaseClose", props: { isButtonTag: { type: Boolean, default: true }, clsPrefix: { type: String, required: true }, disabled: { type: Boolean, default: void 0 }, focusable: { type: Boolean, default: true }, round: Boolean, onClick: Function, absolute: Boolean }, setup(t) {
  return _l("-base-close", iS, Je(t, "clsPrefix")), () => {
    const { clsPrefix: r, disabled: o, absolute: i, round: a, isButtonTag: c } = t;
    return B(c ? "button" : "div", { type: c ? "button" : void 0, tabindex: o || !t.focusable ? -1 : 0, "aria-disabled": o, "aria-label": "close", role: c ? void 0 : "button", disabled: o, class: [`${r}-base-close`, i && `${r}-base-close--absolute`, o && `${r}-base-close--disabled`, a && `${r}-base-close--round`], onMousedown: (d) => {
      t.focusable || d.preventDefault();
    }, onClick: t.onClick }, B(Gh, { clsPrefix: r }, { default: () => B(eS, null) }));
  };
} }), lS = Ee({ name: "FadeInExpandTransition", props: { appear: Boolean, group: Boolean, mode: String, onLeave: Function, onAfterLeave: Function, onAfterEnter: Function, width: Boolean, reverse: Boolean }, setup(t, { slots: r }) {
  function o(d) {
    t.width ? d.style.maxWidth = `${d.offsetWidth}px` : d.style.maxHeight = `${d.offsetHeight}px`, d.offsetWidth;
  }
  function i(d) {
    t.width ? d.style.maxWidth = "0" : d.style.maxHeight = "0", d.offsetWidth;
    const { onLeave: f } = t;
    f && f();
  }
  function a(d) {
    t.width ? d.style.maxWidth = "" : d.style.maxHeight = "";
    const { onAfterLeave: f } = t;
    f && f();
  }
  function c(d) {
    if (d.style.transition = "none", t.width) {
      const f = d.offsetWidth;
      d.style.maxWidth = "0", d.offsetWidth, d.style.transition = "", d.style.maxWidth = `${f}px`;
    } else if (t.reverse) d.style.maxHeight = `${d.offsetHeight}px`, d.offsetHeight, d.style.transition = "", d.style.maxHeight = "0";
    else {
      const f = d.offsetHeight;
      d.style.maxHeight = "0", d.offsetWidth, d.style.transition = "", d.style.maxHeight = `${f}px`;
    }
    d.offsetWidth;
  }
  function u(d) {
    var f;
    t.width ? d.style.maxWidth = "" : t.reverse || (d.style.maxHeight = ""), (f = t.onAfterEnter) === null || f === void 0 || f.call(t);
  }
  return () => {
    const { group: d, width: f, appear: p, mode: g } = t, m = d ? WC : cn, C = { name: f ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition", appear: p, onEnter: c, onAfterEnter: u, onBeforeLeave: o, onLeave: i, onAfterLeave: a };
    return d || (C.mode = g), B(m, C, r);
  };
} }), aS = X([X("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), ye("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [ae("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Es()]), ae("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Es({ left: "50%", top: "50%", originalTransform: "translateX(-50%) translateY(-50%)" })]), ae("container", `
 animation: rotator 3s linear infinite both;
 `, [ae("icon", `
 height: 1em;
 width: 1em;
 `)])])]), us = "1.6s", sS = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, cS = Ee({ name: "BaseLoading", props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, sS), setup(t) {
  _l("-base-loading", aS, Je(t, "clsPrefix"));
}, render() {
  const { clsPrefix: t, radius: r, strokeWidth: o, stroke: i, scale: a } = this, c = r / a;
  return B("div", { class: `${t}-base-loading`, role: "img", "aria-label": "loading" }, B(Vh, null, { default: () => this.show ? B("div", { key: "icon", class: `${t}-base-loading__transition-wrapper` }, B("div", { class: `${t}-base-loading__container` }, B("svg", { class: `${t}-base-loading__icon`, viewBox: `0 0 ${2 * c} ${2 * c}`, xmlns: "http://www.w3.org/2000/svg", style: { color: i } }, B("g", null, B("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${c} ${c};270 ${c} ${c}`, begin: "0s", dur: us, fill: "freeze", repeatCount: "indefinite" }), B("circle", { class: `${t}-base-loading__icon`, fill: "none", stroke: "currentColor", "stroke-width": o, "stroke-linecap": "round", cx: c, cy: c, r: r - o / 2, "stroke-dasharray": 5.67 * r, "stroke-dashoffset": 18.48 * r }, B("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${c} ${c};135 ${c} ${c};450 ${c} ${c}`, begin: "0s", dur: us, fill: "freeze", repeatCount: "indefinite" }), B("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * r};${1.42 * r};${5.67 * r}`, begin: "0s", dur: us, fill: "freeze", repeatCount: "indefinite" })))))) : B("div", { key: "placeholder", class: `${t}-base-loading__placeholder` }, this.$slots) }));
} }), { cubicBezierEaseInOut: Hf } = On;
function Uh({ name: t = "fade-in", enterDuration: r = "0.2s", leaveDuration: o = "0.2s", enterCubicBezier: i = Hf, leaveCubicBezier: a = Hf } = {}) {
  return [X(`&.${t}-transition-enter-active`, { transition: `all ${r} ${i}!important` }), X(`&.${t}-transition-leave-active`, { transition: `all ${o} ${a}!important` }), X(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, { opacity: 0 }), X(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`, { opacity: 1 })];
}
const ve = { neutralBase: "#FFF", neutralInvertBase: "#000", neutralTextBase: "#000", neutralPopover: "#fff", neutralCard: "#fff", neutralModal: "#fff", neutralBody: "#fff", alpha1: "0.82", alpha2: "0.72", alpha3: "0.38", alpha4: "0.24", alpha5: "0.18", alphaClose: "0.6", alphaDisabled: "0.5", alphaAvatar: "0.2", alphaProgressRail: ".08", alphaInput: "0", alphaScrollbar: "0.25", alphaScrollbarHover: "0.4", primaryHover: "#36ad6a", primaryDefault: "#18a058", primaryActive: "#0c7a43", primarySuppl: "#36ad6a", infoHover: "#4098fc", infoDefault: "#2080f0", infoActive: "#1060c9", infoSuppl: "#4098fc", errorHover: "#de576d", errorDefault: "#d03050", errorActive: "#ab1f3f", errorSuppl: "#de576d", warningHover: "#fcb040", warningDefault: "#f0a020", warningActive: "#c97c10", warningSuppl: "#fcb040", successHover: "#36ad6a", successDefault: "#18a058", successActive: "#0c7a43", successSuppl: "#36ad6a" }, uS = dn(ve.neutralBase), qh = dn(ve.neutralInvertBase), dS = `rgba(${qh.slice(0, 3).join(", ")}, `;
function Of(t) {
  return `${dS + String(t)})`;
}
function _t(t) {
  const r = Array.from(qh);
  return r[3] = Number(t), ne(uS, r);
}
const Q = Object.assign(Object.assign({ name: "common" }, On), { baseColor: ve.neutralBase, primaryColor: ve.primaryDefault, primaryColorHover: ve.primaryHover, primaryColorPressed: ve.primaryActive, primaryColorSuppl: ve.primarySuppl, infoColor: ve.infoDefault, infoColorHover: ve.infoHover, infoColorPressed: ve.infoActive, infoColorSuppl: ve.infoSuppl, successColor: ve.successDefault, successColorHover: ve.successHover, successColorPressed: ve.successActive, successColorSuppl: ve.successSuppl, warningColor: ve.warningDefault, warningColorHover: ve.warningHover, warningColorPressed: ve.warningActive, warningColorSuppl: ve.warningSuppl, errorColor: ve.errorDefault, errorColorHover: ve.errorHover, errorColorPressed: ve.errorActive, errorColorSuppl: ve.errorSuppl, textColorBase: ve.neutralTextBase, textColor1: "rgb(31, 34, 37)", textColor2: "rgb(51, 54, 57)", textColor3: "rgb(118, 124, 130)", textColorDisabled: _t(ve.alpha4), placeholderColor: _t(ve.alpha4), placeholderColorDisabled: _t(ve.alpha5), iconColor: _t(ve.alpha4), iconColorHover: ol(_t(ve.alpha4), { lightness: 0.75 }), iconColorPressed: ol(_t(ve.alpha4), { lightness: 0.9 }), iconColorDisabled: _t(ve.alpha5), opacity1: ve.alpha1, opacity2: ve.alpha2, opacity3: ve.alpha3, opacity4: ve.alpha4, opacity5: ve.alpha5, dividerColor: "rgb(239, 239, 245)", borderColor: "rgb(224, 224, 230)", closeIconColor: _t(Number(ve.alphaClose)), closeIconColorHover: _t(Number(ve.alphaClose)), closeIconColorPressed: _t(Number(ve.alphaClose)), closeColorHover: "rgba(0, 0, 0, .09)", closeColorPressed: "rgba(0, 0, 0, .13)", clearColor: _t(ve.alpha4), clearColorHover: ol(_t(ve.alpha4), { lightness: 0.75 }), clearColorPressed: ol(_t(ve.alpha4), { lightness: 0.9 }), scrollbarColor: Of(ve.alphaScrollbar), scrollbarColorHover: Of(ve.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: _t(ve.alphaProgressRail), railColor: "rgb(219, 219, 223)", popoverColor: ve.neutralPopover, tableColor: ve.neutralCard, cardColor: ve.neutralCard, modalColor: ve.neutralModal, bodyColor: ve.neutralBody, tagColor: "#eee", avatarColor: _t(ve.alphaAvatar), invertedColor: "rgb(0, 20, 40)", inputColor: _t(ve.alphaInput), codeColor: "rgb(244, 244, 248)", tabColor: "rgb(247, 247, 250)", actionColor: "rgb(250, 250, 252)", tableHeaderColor: "rgb(250, 250, 252)", hoverColor: "rgb(243, 243, 245)", tableColorHover: "rgba(0, 0, 100, 0.03)", tableColorStriped: "rgba(0, 0, 100, 0.02)", pressedColor: "rgb(237, 237, 239)", opacityDisabled: ve.alphaDisabled, inputColorDisabled: "rgb(250, 250, 252)", buttonColor2: "rgba(46, 51, 56, .05)", buttonColor2Hover: "rgba(46, 51, 56, .09)", buttonColor2Pressed: "rgba(46, 51, 56, .13)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), fS = { railInsetHorizontalBottom: "auto 2px 4px 2px", railInsetHorizontalTop: "4px 2px auto 2px", railInsetVerticalRight: "2px 4px 2px auto", railInsetVerticalLeft: "2px auto 2px 4px", railColor: "transparent" };
function hS(t) {
  const { scrollbarColor: r, scrollbarColorHover: o, scrollbarHeight: i, scrollbarWidth: a, scrollbarBorderRadius: c } = t;
  return Object.assign(Object.assign({}, fS), { height: i, width: a, borderRadius: c, color: r, colorHover: o });
}
const St = { name: "Scrollbar", common: Q, self: hS }, pS = ye("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [X(">", [ye("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [X("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), X(">", [ye("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), X(">, +", [ye("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [pe("horizontal", `
 height: var(--n-scrollbar-height);
 `, [X(">", [ae("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), pe("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), pe("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), pe("vertical", `
 width: var(--n-scrollbar-width);
 `, [X(">", [ae("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), pe("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), pe("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), pe("disabled", [X(">", [ae("scrollbar", "pointer-events: none;")])]), X(">", [ae("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Uh(), X("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), gS = Object.assign(Object.assign({}, at.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: "hover" }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: "right" }, xPlacement: { type: String, default: "bottom" } }), Yh = Ee({ name: "Scrollbar", props: gS, inheritAttrs: false, setup(t) {
  const { mergedClsPrefixRef: r, inlineThemeDisabled: o, mergedRtlRef: i } = zr(t), a = ii("Scrollbar", i, r), c = se(null), u = se(null), d = se(null), f = se(null), p = se(null), g = se(null), m = se(null), C = se(null), x = se(null), y = se(null), P = se(null), _ = se(0), $ = se(0), R = se(false), L = se(false);
  let I = false, F = false, k, S, M = 0, A = 0, V = 0, J = 0;
  const W = Vy(), oe = at("Scrollbar", "-scrollbar", pS, St, t, r), re = Y(() => {
    const { value: Z } = C, { value: de } = g, { value: Se } = y;
    return Z === null || de === null || Se === null ? 0 : Math.min(Z, Se * Z / de + Qd(oe.value.self.width) * 1.5);
  }), G = Y(() => `${re.value}px`), ie = Y(() => {
    const { value: Z } = x, { value: de } = m, { value: Se } = P;
    return Z === null || de === null || Se === null ? 0 : Se * Z / de + Qd(oe.value.self.height) * 1.5;
  }), U = Y(() => `${ie.value}px`), ue = Y(() => {
    const { value: Z } = C, { value: de } = _, { value: Se } = g, { value: qe } = y;
    if (Z === null || Se === null || qe === null) return 0;
    {
      const st = Se - Z;
      return st ? de / st * (qe - re.value) : 0;
    }
  }), Be = Y(() => `${ue.value}px`), ze = Y(() => {
    const { value: Z } = x, { value: de } = $, { value: Se } = m, { value: qe } = P;
    if (Z === null || Se === null || qe === null) return 0;
    {
      const st = Se - Z;
      return st ? de / st * (qe - ie.value) : 0;
    }
  }), Le = Y(() => `${ze.value}px`), Oe = Y(() => {
    const { value: Z } = C, { value: de } = g;
    return Z !== null && de !== null && de > Z;
  }), mt = Y(() => {
    const { value: Z } = x, { value: de } = m;
    return Z !== null && de !== null && de > Z;
  }), xt = Y(() => {
    const { trigger: Z } = t;
    return Z === "none" || R.value;
  }), Tt = Y(() => {
    const { trigger: Z } = t;
    return Z === "none" || L.value;
  }), Pe = Y(() => {
    const { container: Z } = t;
    return Z ? Z() : u.value;
  }), O = Y(() => {
    const { content: Z } = t;
    return Z ? Z() : d.value;
  }), te = (Z, de) => {
    if (!t.scrollable) return;
    if (typeof Z == "number") {
      we(Z, de ?? 0, 0, false, "auto");
      return;
    }
    const { left: Se, top: qe, index: st, elSize: Ct, position: Mt, behavior: et, el: At, debounce: br = true } = Z;
    (Se !== void 0 || qe !== void 0) && we(Se ?? 0, qe ?? 0, 0, false, et), At !== void 0 ? we(0, At.offsetTop, At.offsetHeight, br, et) : st !== void 0 && Ct !== void 0 ? we(0, st * Ct, Ct, br, et) : Mt === "bottom" ? we(0, Number.MAX_SAFE_INTEGER, 0, false, et) : Mt === "top" && we(0, 0, 0, false, et);
  }, K = Qy(() => {
    t.container || te({ top: _.value, left: $.value });
  }), he = () => {
    K.isDeactivated || Vt();
  }, Me = (Z) => {
    if (K.isDeactivated) return;
    const { onResize: de } = t;
    de && de(Z), Vt();
  }, je = (Z, de) => {
    if (!t.scrollable) return;
    const { value: Se } = Pe;
    Se && (typeof Z == "object" ? Se.scrollBy(Z) : Se.scrollBy(Z, de || 0));
  };
  function we(Z, de, Se, qe, st) {
    const { value: Ct } = Pe;
    if (Ct) {
      if (qe) {
        const { scrollTop: Mt, offsetHeight: et } = Ct;
        if (de > Mt) {
          de + Se <= Mt + et || Ct.scrollTo({ left: Z, top: de + Se - et, behavior: st });
          return;
        }
      }
      Ct.scrollTo({ left: Z, top: de, behavior: st });
    }
  }
  function ge() {
    yo(), Ve(), Vt();
  }
  function Ge() {
    jt();
  }
  function jt() {
    Ue(), kn();
  }
  function Ue() {
    S !== void 0 && window.clearTimeout(S), S = window.setTimeout(() => {
      L.value = false;
    }, t.duration);
  }
  function kn() {
    k !== void 0 && window.clearTimeout(k), k = window.setTimeout(() => {
      R.value = false;
    }, t.duration);
  }
  function yo() {
    k !== void 0 && window.clearTimeout(k), R.value = true;
  }
  function Ve() {
    S !== void 0 && window.clearTimeout(S), L.value = true;
  }
  function We(Z) {
    const { onScroll: de } = t;
    de && de(Z), Gt();
  }
  function Gt() {
    const { value: Z } = Pe;
    Z && (_.value = Z.scrollTop, $.value = Z.scrollLeft * ((a == null ? void 0 : a.value) ? -1 : 1));
  }
  function Dn() {
    const { value: Z } = O;
    Z && (g.value = Z.offsetHeight, m.value = Z.offsetWidth);
    const { value: de } = Pe;
    de && (C.value = de.offsetHeight, x.value = de.offsetWidth);
    const { value: Se } = p, { value: qe } = f;
    Se && (P.value = Se.offsetWidth), qe && (y.value = qe.offsetHeight);
  }
  function ci() {
    const { value: Z } = Pe;
    Z && (_.value = Z.scrollTop, $.value = Z.scrollLeft * ((a == null ? void 0 : a.value) ? -1 : 1), C.value = Z.offsetHeight, x.value = Z.offsetWidth, g.value = Z.scrollHeight, m.value = Z.scrollWidth);
    const { value: de } = p, { value: Se } = f;
    de && (P.value = de.offsetWidth), Se && (y.value = Se.offsetHeight);
  }
  function Vt() {
    t.scrollable && (t.useUnifiedContainer ? ci() : (Dn(), Gt()));
  }
  function ui(Z) {
    var de;
    return !(!((de = c.value) === null || de === void 0) && de.contains(Jo(Z)));
  }
  function pn(Z) {
    Z.preventDefault(), Z.stopPropagation(), F = true, Ze("mousemove", window, Rr, true), Ze("mouseup", window, Wn, true), A = $.value, V = (a == null ? void 0 : a.value) ? window.innerWidth - Z.clientX : Z.clientX;
  }
  function Rr(Z) {
    if (!F) return;
    k !== void 0 && window.clearTimeout(k), S !== void 0 && window.clearTimeout(S);
    const { value: de } = x, { value: Se } = m, { value: qe } = ie;
    if (de === null || Se === null) return;
    const Ct = ((a == null ? void 0 : a.value) ? window.innerWidth - Z.clientX - V : Z.clientX - V) * (Se - de) / (de - qe), Mt = Se - de;
    let et = A + Ct;
    et = Math.min(Mt, et), et = Math.max(et, 0);
    const { value: At } = Pe;
    if (At) {
      At.scrollLeft = et * ((a == null ? void 0 : a.value) ? -1 : 1);
      const { internalOnUpdateScrollLeft: br } = t;
      br && br(et);
    }
  }
  function Wn(Z) {
    Z.preventDefault(), Z.stopPropagation(), Xe("mousemove", window, Rr, true), Xe("mouseup", window, Wn, true), F = false, Vt(), ui(Z) && jt();
  }
  function wo(Z) {
    Z.preventDefault(), Z.stopPropagation(), I = true, Ze("mousemove", window, gn, true), Ze("mouseup", window, vn, true), M = _.value, J = Z.clientY;
  }
  function gn(Z) {
    if (!I) return;
    k !== void 0 && window.clearTimeout(k), S !== void 0 && window.clearTimeout(S);
    const { value: de } = C, { value: Se } = g, { value: qe } = re;
    if (de === null || Se === null) return;
    const Ct = (Z.clientY - J) * (Se - de) / (de - qe), Mt = Se - de;
    let et = M + Ct;
    et = Math.min(Mt, et), et = Math.max(et, 0);
    const { value: At } = Pe;
    At && (At.scrollTop = et);
  }
  function vn(Z) {
    Z.preventDefault(), Z.stopPropagation(), Xe("mousemove", window, gn, true), Xe("mouseup", window, vn, true), I = false, Vt(), ui(Z) && jt();
  }
  mo(() => {
    const { value: Z } = mt, { value: de } = Oe, { value: Se } = r, { value: qe } = p, { value: st } = f;
    qe && (Z ? qe.classList.remove(`${Se}-scrollbar-rail--disabled`) : qe.classList.add(`${Se}-scrollbar-rail--disabled`)), st && (de ? st.classList.remove(`${Se}-scrollbar-rail--disabled`) : st.classList.add(`${Se}-scrollbar-rail--disabled`));
  }), vr(() => {
    t.container || Vt();
  }), It(() => {
    k !== void 0 && window.clearTimeout(k), S !== void 0 && window.clearTimeout(S), Xe("mousemove", window, gn, true), Xe("mouseup", window, vn, true);
  });
  const Nn = Y(() => {
    const { common: { cubicBezierEaseInOut: Z }, self: { color: de, colorHover: Se, height: qe, width: st, borderRadius: Ct, railInsetHorizontalTop: Mt, railInsetHorizontalBottom: et, railInsetVerticalRight: At, railInsetVerticalLeft: br, railColor: Rl } } = oe.value, { top: fi, right: Il, bottom: Bl, left: Ml } = Tn(Mt), { top: So, right: Al, bottom: $o, left: Ll } = Tn(et), { top: Fl, right: Hl, bottom: Ol, left: kl } = Tn((a == null ? void 0 : a.value) ? If(At) : At), { top: Dl, right: Wl, bottom: Nl, left: hi } = Tn((a == null ? void 0 : a.value) ? If(br) : br);
    return { "--n-scrollbar-bezier": Z, "--n-scrollbar-color": de, "--n-scrollbar-color-hover": Se, "--n-scrollbar-border-radius": Ct, "--n-scrollbar-width": st, "--n-scrollbar-height": qe, "--n-scrollbar-rail-top-horizontal-top": fi, "--n-scrollbar-rail-right-horizontal-top": Il, "--n-scrollbar-rail-bottom-horizontal-top": Bl, "--n-scrollbar-rail-left-horizontal-top": Ml, "--n-scrollbar-rail-top-horizontal-bottom": So, "--n-scrollbar-rail-right-horizontal-bottom": Al, "--n-scrollbar-rail-bottom-horizontal-bottom": $o, "--n-scrollbar-rail-left-horizontal-bottom": Ll, "--n-scrollbar-rail-top-vertical-right": Fl, "--n-scrollbar-rail-right-vertical-right": Hl, "--n-scrollbar-rail-bottom-vertical-right": Ol, "--n-scrollbar-rail-left-vertical-right": kl, "--n-scrollbar-rail-top-vertical-left": Dl, "--n-scrollbar-rail-right-vertical-left": Wl, "--n-scrollbar-rail-bottom-vertical-left": Nl, "--n-scrollbar-rail-left-vertical-left": hi, "--n-scrollbar-rail-color": Rl };
  }), mr = o ? Kr("scrollbar", void 0, Nn, t) : void 0;
  return Object.assign(Object.assign({}, { scrollTo: te, scrollBy: je, sync: Vt, syncUnifiedContainer: ci, handleMouseEnterWrapper: ge, handleMouseLeaveWrapper: Ge }), { mergedClsPrefix: r, rtlEnabled: a, containerScrollTop: _, wrapperRef: c, containerRef: u, contentRef: d, yRailRef: f, xRailRef: p, needYBar: Oe, needXBar: mt, yBarSizePx: G, xBarSizePx: U, yBarTopPx: Be, xBarLeftPx: Le, isShowXBar: xt, isShowYBar: Tt, isIos: W, handleScroll: We, handleContentResize: he, handleContainerResize: Me, handleYScrollMouseDown: wo, handleXScrollMouseDown: pn, cssVars: o ? void 0 : Nn, themeClass: mr == null ? void 0 : mr.themeClass, onRender: mr == null ? void 0 : mr.onRender });
}, render() {
  var t;
  const { $slots: r, mergedClsPrefix: o, triggerDisplayManually: i, rtlEnabled: a, internalHoistYRail: c, yPlacement: u, xPlacement: d, xScrollable: f } = this;
  if (!this.scrollable) return (t = r.default) === null || t === void 0 ? void 0 : t.call(r);
  const p = this.trigger === "none", g = (x, y) => B("div", { ref: "yRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--vertical`, `${o}-scrollbar-rail--vertical--${u}`, x], "data-scrollbar-rail": true, style: [y || "", this.verticalRailStyle], "aria-hidden": true }, B(p ? Mf : cn, p ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? B("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), m = () => {
    var x, y;
    return (x = this.onRender) === null || x === void 0 || x.call(this), B("div", bo(this.$attrs, { role: "none", ref: "wrapperRef", class: [`${o}-scrollbar`, this.themeClass, a && `${o}-scrollbar--rtl`], style: this.cssVars, onMouseenter: i ? void 0 : this.handleMouseEnterWrapper, onMouseleave: i ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (y = r.default) === null || y === void 0 ? void 0 : y.call(r) : B("div", { role: "none", ref: "containerRef", class: [`${o}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, B(Ef, { onResize: this.handleContentResize }, { default: () => B("div", { ref: "contentRef", role: "none", style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle], class: [`${o}-scrollbar-content`, this.contentClass] }, r) })), c ? null : g(void 0, void 0), f && B("div", { ref: "xRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--horizontal`, `${o}-scrollbar-rail--horizontal--${d}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, B(p ? Mf : cn, p ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? B("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: a ? this.xBarLeftPx : void 0, left: a ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, C = this.container ? m() : B(Ef, { onResize: this.handleContainerResize }, { default: m });
  return c ? B(Hn, null, C, g(this.themeClass, this.cssVars)) : C;
} }), Xh = Yh;
function kf(t) {
  return Array.isArray(t) ? t : [t];
}
const zs = { STOP: "STOP" };
function Zh(t, r) {
  const o = r(t);
  t.children !== void 0 && o !== zs.STOP && t.children.forEach((i) => Zh(i, r));
}
function vS(t, r = {}) {
  const { preserveGroup: o = false } = r, i = [], a = o ? (u) => {
    u.isLeaf || (i.push(u.key), c(u.children));
  } : (u) => {
    u.isLeaf || (u.isGroup || i.push(u.key), c(u.children));
  };
  function c(u) {
    u.forEach(a);
  }
  return c(t), i;
}
function mS(t, r) {
  const { isLeaf: o } = t;
  return o !== void 0 ? o : !r(t);
}
function bS(t) {
  return t.children;
}
function xS(t) {
  return t.key;
}
function CS() {
  return false;
}
function yS(t, r) {
  const { isLeaf: o } = t;
  return !(o === false && !Array.isArray(r(t)));
}
function wS(t) {
  return t.disabled === true;
}
function SS(t, r) {
  return t.isLeaf === false && !Array.isArray(r(t));
}
function ds(t) {
  var r;
  return t == null ? [] : Array.isArray(t) ? t : (r = t.checkedKeys) !== null && r !== void 0 ? r : [];
}
function fs(t) {
  var r;
  return t == null || Array.isArray(t) ? [] : (r = t.indeterminateKeys) !== null && r !== void 0 ? r : [];
}
function $S(t, r) {
  const o = new Set(t);
  return r.forEach((i) => {
    o.has(i) || o.add(i);
  }), Array.from(o);
}
function PS(t, r) {
  const o = new Set(t);
  return r.forEach((i) => {
    o.has(i) && o.delete(i);
  }), Array.from(o);
}
function _S(t) {
  return (t == null ? void 0 : t.type) === "group";
}
function nE(t) {
  const r = /* @__PURE__ */ new Map();
  return t.forEach((o, i) => {
    r.set(o.key, i);
  }), (o) => {
    var i;
    return (i = r.get(o)) !== null && i !== void 0 ? i : null;
  };
}
class TS extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function ES(t, r, o, i) {
  return yl(r.concat(t), o, i, false);
}
function zS(t, r) {
  const o = /* @__PURE__ */ new Set();
  return t.forEach((i) => {
    const a = r.treeNodeMap.get(i);
    if (a !== void 0) {
      let c = a.parent;
      for (; c !== null && !(c.disabled || o.has(c.key)); ) o.add(c.key), c = c.parent;
    }
  }), o;
}
function RS(t, r, o, i) {
  const a = yl(r, o, i, false), c = yl(t, o, i, true), u = zS(t, o), d = [];
  return a.forEach((f) => {
    (c.has(f) || u.has(f)) && d.push(f);
  }), d.forEach((f) => a.delete(f)), a;
}
function hs(t, r) {
  const { checkedKeys: o, keysToCheck: i, keysToUncheck: a, indeterminateKeys: c, cascade: u, leafOnly: d, checkStrategy: f, allowNotLoaded: p } = t;
  if (!u) return i !== void 0 ? { checkedKeys: $S(o, i), indeterminateKeys: Array.from(c) } : a !== void 0 ? { checkedKeys: PS(o, a), indeterminateKeys: Array.from(c) } : { checkedKeys: Array.from(o), indeterminateKeys: Array.from(c) };
  const { levelTreeNodeMap: g } = r;
  let m;
  a !== void 0 ? m = RS(a, o, r, p) : i !== void 0 ? m = ES(i, o, r, p) : m = yl(o, r, p, false);
  const C = f === "parent", x = f === "child" || d, y = m, P = /* @__PURE__ */ new Set(), _ = Math.max.apply(null, Array.from(g.keys()));
  for (let $ = _; $ >= 0; $ -= 1) {
    const R = $ === 0, L = g.get($);
    for (const I of L) {
      if (I.isLeaf) continue;
      const { key: F, shallowLoaded: k } = I;
      if (x && k && I.children.forEach((V) => {
        !V.disabled && !V.isLeaf && V.shallowLoaded && y.has(V.key) && y.delete(V.key);
      }), I.disabled || !k) continue;
      let S = true, M = false, A = true;
      for (const V of I.children) {
        const J = V.key;
        if (!V.disabled) {
          if (A && (A = false), y.has(J)) M = true;
          else if (P.has(J)) {
            M = true, S = false;
            break;
          } else if (S = false, M) break;
        }
      }
      S && !A ? (C && I.children.forEach((V) => {
        !V.disabled && y.has(V.key) && y.delete(V.key);
      }), y.add(F)) : M && P.add(F), R && x && y.has(F) && y.delete(F);
    }
  }
  return { checkedKeys: Array.from(y), indeterminateKeys: Array.from(P) };
}
function yl(t, r, o, i) {
  const { treeNodeMap: a, getChildren: c } = r, u = /* @__PURE__ */ new Set(), d = new Set(t);
  return t.forEach((f) => {
    const p = a.get(f);
    p !== void 0 && Zh(p, (g) => {
      if (g.disabled) return zs.STOP;
      const { key: m } = g;
      if (!u.has(m) && (u.add(m), d.add(m), SS(g.rawNode, c))) {
        if (i) return zs.STOP;
        if (!o) throw new TS();
      }
    });
  }), d;
}
function IS(t, { includeGroup: r = false, includeSelf: o = true }, i) {
  var a;
  const c = i.treeNodeMap;
  let u = t == null ? null : (a = c.get(t)) !== null && a !== void 0 ? a : null;
  const d = { keyPath: [], treeNodePath: [], treeNode: u };
  if (u == null ? void 0 : u.ignored) return d.treeNode = null, d;
  for (; u; ) !u.ignored && (r || !u.isGroup) && d.treeNodePath.push(u), u = u.parent;
  return d.treeNodePath.reverse(), o || d.treeNodePath.pop(), d.keyPath = d.treeNodePath.map((f) => f.key), d;
}
function BS(t) {
  if (t.length === 0) return null;
  const r = t[0];
  return r.isGroup || r.ignored || r.disabled ? r.getNext() : r;
}
function MS(t, r) {
  const o = t.siblings, i = o.length, { index: a } = t;
  return r ? o[(a + 1) % i] : a === o.length - 1 ? null : o[a + 1];
}
function Df(t, r, { loop: o = false, includeDisabled: i = false } = {}) {
  const a = r === "prev" ? AS : MS, c = { reverse: r === "prev" };
  let u = false, d = null;
  function f(p) {
    if (p !== null) {
      if (p === t) {
        if (!u) u = true;
        else if (!t.disabled && !t.isGroup) {
          d = t;
          return;
        }
      } else if ((!p.disabled || i) && !p.ignored && !p.isGroup) {
        d = p;
        return;
      }
      if (p.isGroup) {
        const g = Xs(p, c);
        g !== null ? d = g : f(a(p, o));
      } else {
        const g = a(p, false);
        if (g !== null) f(g);
        else {
          const m = LS(p);
          (m == null ? void 0 : m.isGroup) ? f(a(m, o)) : o && f(a(p, true));
        }
      }
    }
  }
  return f(t), d;
}
function AS(t, r) {
  const o = t.siblings, i = o.length, { index: a } = t;
  return r ? o[(a - 1 + i) % i] : a === 0 ? null : o[a - 1];
}
function LS(t) {
  return t.parent;
}
function Xs(t, r = {}) {
  const { reverse: o = false } = r, { children: i } = t;
  if (i) {
    const { length: a } = i, c = o ? a - 1 : 0, u = o ? -1 : a, d = o ? -1 : 1;
    for (let f = c; f !== u; f += d) {
      const p = i[f];
      if (!p.disabled && !p.ignored) if (p.isGroup) {
        const g = Xs(p, r);
        if (g !== null) return g;
      } else return p;
    }
  }
  return null;
}
const FS = { getChild() {
  return this.ignored ? null : Xs(this);
}, getParent() {
  const { parent: t } = this;
  return (t == null ? void 0 : t.isGroup) ? t.getParent() : t;
}, getNext(t = {}) {
  return Df(this, "next", t);
}, getPrev(t = {}) {
  return Df(this, "prev", t);
} };
function HS(t, r) {
  const o = r ? new Set(r) : void 0, i = [];
  function a(c) {
    c.forEach((u) => {
      i.push(u), !(u.isLeaf || !u.children || u.ignored) && (u.isGroup || o === void 0 || o.has(u.key)) && a(u.children);
    });
  }
  return a(t), i;
}
function OS(t, r) {
  const o = t.key;
  for (; r; ) {
    if (r.key === o) return true;
    r = r.parent;
  }
  return false;
}
function Qh(t, r, o, i, a, c = null, u = 0) {
  const d = [];
  return t.forEach((f, p) => {
    var g;
    const m = Object.create(i);
    if (m.rawNode = f, m.siblings = d, m.level = u, m.index = p, m.isFirstChild = p === 0, m.isLastChild = p + 1 === t.length, m.parent = c, !m.ignored) {
      const C = a(f);
      Array.isArray(C) && (m.children = Qh(C, r, o, i, a, m, u + 1));
    }
    d.push(m), r.set(m.key, m), o.has(u) || o.set(u, []), (g = o.get(u)) === null || g === void 0 || g.push(m);
  }), d;
}
function kS(t, r = {}) {
  var o;
  const i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), { getDisabled: c = wS, getIgnored: u = CS, getIsGroup: d = _S, getKey: f = xS } = r, p = (o = r.getChildren) !== null && o !== void 0 ? o : bS, g = r.ignoreEmptyChildren ? (I) => {
    const F = p(I);
    return Array.isArray(F) ? F.length ? F : null : F;
  } : p, m = Object.assign({ get key() {
    return f(this.rawNode);
  }, get disabled() {
    return c(this.rawNode);
  }, get isGroup() {
    return d(this.rawNode);
  }, get isLeaf() {
    return mS(this.rawNode, g);
  }, get shallowLoaded() {
    return yS(this.rawNode, g);
  }, get ignored() {
    return u(this.rawNode);
  }, contains(I) {
    return OS(this, I);
  } }, FS), C = Qh(t, i, a, m, g);
  function x(I) {
    if (I == null) return null;
    const F = i.get(I);
    return F && !F.isGroup && !F.ignored ? F : null;
  }
  function y(I) {
    if (I == null) return null;
    const F = i.get(I);
    return F && !F.ignored ? F : null;
  }
  function P(I, F) {
    const k = y(I);
    return k ? k.getPrev(F) : null;
  }
  function _(I, F) {
    const k = y(I);
    return k ? k.getNext(F) : null;
  }
  function $(I) {
    const F = y(I);
    return F ? F.getParent() : null;
  }
  function R(I) {
    const F = y(I);
    return F ? F.getChild() : null;
  }
  const L = { treeNodes: C, treeNodeMap: i, levelTreeNodeMap: a, maxLevel: Math.max(...a.keys()), getChildren: g, getFlattenedNodes(I) {
    return HS(C, I);
  }, getNode: x, getPrev: P, getNext: _, getParent: $, getChild: R, getFirstAvailableNode() {
    return BS(C);
  }, getPath(I, F = {}) {
    return IS(I, F, L);
  }, getCheckedKeys(I, F = {}) {
    const { cascade: k = true, leafOnly: S = false, checkStrategy: M = "all", allowNotLoaded: A = false } = F;
    return hs({ checkedKeys: ds(I), indeterminateKeys: fs(I), cascade: k, leafOnly: S, checkStrategy: M, allowNotLoaded: A }, L);
  }, check(I, F, k = {}) {
    const { cascade: S = true, leafOnly: M = false, checkStrategy: A = "all", allowNotLoaded: V = false } = k;
    return hs({ checkedKeys: ds(F), indeterminateKeys: fs(F), keysToCheck: I == null ? [] : kf(I), cascade: S, leafOnly: M, checkStrategy: A, allowNotLoaded: V }, L);
  }, uncheck(I, F, k = {}) {
    const { cascade: S = true, leafOnly: M = false, checkStrategy: A = "all", allowNotLoaded: V = false } = k;
    return hs({ checkedKeys: ds(F), indeterminateKeys: fs(F), keysToUncheck: I == null ? [] : kf(I), cascade: S, leafOnly: M, checkStrategy: A, allowNotLoaded: V }, L);
  }, getNonLeafKeys(I = {}) {
    return vS(C, I);
  } };
  return L;
}
const DS = { iconSizeTiny: "28px", iconSizeSmall: "34px", iconSizeMedium: "40px", iconSizeLarge: "46px", iconSizeHuge: "52px" };
function WS(t) {
  const { textColorDisabled: r, iconColor: o, textColor2: i, fontSizeTiny: a, fontSizeSmall: c, fontSizeMedium: u, fontSizeLarge: d, fontSizeHuge: f } = t;
  return Object.assign(Object.assign({}, DS), { fontSizeTiny: a, fontSizeSmall: c, fontSizeMedium: u, fontSizeLarge: d, fontSizeHuge: f, textColor: r, iconColor: o, extraTextColor: i });
}
const fn = { name: "Empty", common: Q, self: WS }, NS = { height: "calc(var(--n-option-height) * 7.6)", paddingTiny: "4px 0", paddingSmall: "4px 0", paddingMedium: "4px 0", paddingLarge: "4px 0", paddingHuge: "4px 0", optionPaddingTiny: "0 12px", optionPaddingSmall: "0 12px", optionPaddingMedium: "0 12px", optionPaddingLarge: "0 12px", optionPaddingHuge: "0 12px", loadingSize: "18px" };
function jS(t) {
  const { borderRadius: r, popoverColor: o, textColor3: i, dividerColor: a, textColor2: c, primaryColorPressed: u, textColorDisabled: d, primaryColor: f, opacityDisabled: p, hoverColor: g, fontSizeTiny: m, fontSizeSmall: C, fontSizeMedium: x, fontSizeLarge: y, fontSizeHuge: P, heightTiny: _, heightSmall: $, heightMedium: R, heightLarge: L, heightHuge: I } = t;
  return Object.assign(Object.assign({}, NS), { optionFontSizeTiny: m, optionFontSizeSmall: C, optionFontSizeMedium: x, optionFontSizeLarge: y, optionFontSizeHuge: P, optionHeightTiny: _, optionHeightSmall: $, optionHeightMedium: R, optionHeightLarge: L, optionHeightHuge: I, borderRadius: r, color: o, groupHeaderTextColor: i, actionDividerColor: a, optionTextColor: c, optionTextColorPressed: u, optionTextColorDisabled: d, optionTextColorActive: f, optionOpacityDisabled: p, optionCheckColor: f, optionColorPending: g, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: g, actionTextColor: c, loadingColor: f });
}
const ai = { name: "InternalSelectMenu", common: Q, peers: { Scrollbar: St, Empty: fn }, self: jS }, { cubicBezierEaseIn: Wf, cubicBezierEaseOut: Nf } = On;
function Jh({ transformOrigin: t = "inherit", duration: r = ".2s", enterScale: o = ".9", originalTransform: i = "", originalTransition: a = "" } = {}) {
  return [X("&.fade-in-scale-up-transition-leave-active", { transformOrigin: t, transition: `opacity ${r} ${Wf}, transform ${r} ${Wf} ${a && `,${a}`}` }), X("&.fade-in-scale-up-transition-enter-active", { transformOrigin: t, transition: `opacity ${r} ${Nf}, transform ${r} ${Nf} ${a && `,${a}`}` }), X("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", { opacity: 0, transform: `${i} scale(${o})` }), X("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", { opacity: 1, transform: `${i} scale(1)` })];
}
const GS = { space: "6px", spaceArrow: "10px", arrowOffset: "10px", arrowOffsetVertical: "10px", arrowHeight: "6px", padding: "8px 14px" };
function VS(t) {
  const { boxShadow2: r, popoverColor: o, textColor2: i, borderRadius: a, fontSize: c, dividerColor: u } = t;
  return Object.assign(Object.assign({}, GS), { fontSize: c, borderRadius: a, color: o, dividerColor: u, textColor: i, boxShadow: r });
}
const hn = { name: "Popover", common: Q, peers: { Scrollbar: St }, self: VS }, ps = { top: "bottom", bottom: "top", left: "right", right: "left" }, vt = "var(--n-arrow-height) * 1.414", KS = X([ye("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [X(">", [ye("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), an("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [an("scrollable", [an("show-header-or-footer", "padding: var(--n-padding);")])]), ae("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), ae("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), pe("scrollable, show-header-or-footer", [ae("content", `
 padding: var(--n-padding);
 `)])]), ye("popover-shared", `
 transform-origin: inherit;
 `, [ye("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [ye("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${vt});
 height: calc(${vt});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), X("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `), X("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `), X("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), X("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), sr("top-start", `
 top: calc(${vt} / -2);
 left: calc(${Nr("top-start")} - var(--v-offset-left));
 `), sr("top", `
 top: calc(${vt} / -2);
 transform: translateX(calc(${vt} / -2)) rotate(45deg);
 left: 50%;
 `), sr("top-end", `
 top: calc(${vt} / -2);
 right: calc(${Nr("top-end")} + var(--v-offset-left));
 `), sr("bottom-start", `
 bottom: calc(${vt} / -2);
 left: calc(${Nr("bottom-start")} - var(--v-offset-left));
 `), sr("bottom", `
 bottom: calc(${vt} / -2);
 transform: translateX(calc(${vt} / -2)) rotate(45deg);
 left: 50%;
 `), sr("bottom-end", `
 bottom: calc(${vt} / -2);
 right: calc(${Nr("bottom-end")} + var(--v-offset-left));
 `), sr("left-start", `
 left: calc(${vt} / -2);
 top: calc(${Nr("left-start")} - var(--v-offset-top));
 `), sr("left", `
 left: calc(${vt} / -2);
 transform: translateY(calc(${vt} / -2)) rotate(45deg);
 top: 50%;
 `), sr("left-end", `
 left: calc(${vt} / -2);
 bottom: calc(${Nr("left-end")} + var(--v-offset-top));
 `), sr("right-start", `
 right: calc(${vt} / -2);
 top: calc(${Nr("right-start")} - var(--v-offset-top));
 `), sr("right", `
 right: calc(${vt} / -2);
 transform: translateY(calc(${vt} / -2)) rotate(45deg);
 top: 50%;
 `), sr("right-end", `
 right: calc(${vt} / -2);
 bottom: calc(${Nr("right-end")} + var(--v-offset-top));
 `), ...Rn.map({ top: ["right-start", "left-start"], right: ["top-end", "bottom-end"], bottom: ["right-end", "left-end"], left: ["top-start", "bottom-start"] }, (t, r) => {
  const o = ["right", "left"].includes(r), i = o ? "width" : "height";
  return t.map((a) => {
    const c = a.split("-")[1] === "end", d = `calc((${`var(--v-target-${i}, 0px)`} - ${vt}) / 2)`, f = Nr(a);
    return X(`[v-placement="${a}"] >`, [ye("popover-shared", [pe("center-arrow", [ye("popover-arrow", `${r}: calc(max(${d}, ${f}) ${c ? "+" : "-"} var(--v-offset-${o ? "left" : "top"}));`)])])]);
  });
})]);
function Nr(t) {
  return ["top", "bottom"].includes(t.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function sr(t, r) {
  const o = t.split("-")[0], i = ["top", "bottom"].includes(o) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return X(`[v-placement="${t}"] >`, [ye("popover-shared", `
 margin-${ps[o]}: var(--n-space);
 `, [pe("show-arrow", `
 margin-${ps[o]}: var(--n-space-arrow);
 `), pe("overlap", `
 margin: 0;
 `), Cy("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${ps[o]}: auto;
 ${i}
 `, [ye("popover-arrow", r)])])]);
}
const ep = Object.assign(Object.assign({}, at.props), { to: go.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function tp({ arrowClass: t, arrowStyle: r, arrowWrapperClass: o, arrowWrapperStyle: i, clsPrefix: a }) {
  return B("div", { key: "__popover-arrow__", style: i, class: [`${a}-popover-arrow-wrapper`, o] }, B("div", { class: [`${a}-popover-arrow`, t], style: r }));
}
const US = Ee({ name: "PopoverBody", inheritAttrs: false, props: ep, setup(t, { slots: r, attrs: o }) {
  const { namespaceRef: i, mergedClsPrefixRef: a, inlineThemeDisabled: c, mergedRtlRef: u } = zr(t), d = at("Popover", "-popover", KS, hn, t, a), f = ii("Popover", u, a), p = se(null), g = He("NPopover"), m = se(null), C = se(t.show), x = se(false);
  mo(() => {
    const { show: A } = t;
    A && !Dw() && !t.internalDeactivateImmediately && (x.value = true);
  });
  const y = Y(() => {
    const { trigger: A, onClickoutside: V } = t, J = [], { positionManuallyRef: { value: W } } = g;
    return W || (A === "click" && !V && J.push([Ps, k, void 0, { capture: true }]), A === "hover" && J.push([tw, F])), V && J.push([Ps, k, void 0, { capture: true }]), (t.displayDirective === "show" || t.animated && x.value) && J.push([ms, t.show]), J;
  }), P = Y(() => {
    const { common: { cubicBezierEaseInOut: A, cubicBezierEaseIn: V, cubicBezierEaseOut: J }, self: { space: W, spaceArrow: oe, padding: re, fontSize: G, textColor: ie, dividerColor: U, color: ue, boxShadow: Be, borderRadius: ze, arrowHeight: Le, arrowOffset: Oe, arrowOffsetVertical: mt } } = d.value;
    return { "--n-box-shadow": Be, "--n-bezier": A, "--n-bezier-ease-in": V, "--n-bezier-ease-out": J, "--n-font-size": G, "--n-text-color": ie, "--n-color": ue, "--n-divider-color": U, "--n-border-radius": ze, "--n-arrow-height": Le, "--n-arrow-offset": Oe, "--n-arrow-offset-vertical": mt, "--n-padding": re, "--n-space": W, "--n-space-arrow": oe };
  }), _ = Y(() => {
    const A = t.width === "trigger" ? void 0 : gl(t.width), V = [];
    A && V.push({ width: A });
    const { maxWidth: J, minWidth: W } = t;
    return J && V.push({ maxWidth: gl(J) }), W && V.push({ maxWidth: gl(W) }), c || V.push(P.value), V;
  }), $ = c ? Kr("popover", void 0, P, t) : void 0;
  g.setBodyInstance({ syncPosition: R }), It(() => {
    g.setBodyInstance(null);
  }), ft(Je(t, "show"), (A) => {
    t.animated || (A ? C.value = true : C.value = false);
  });
  function R() {
    var A;
    (A = p.value) === null || A === void 0 || A.syncPosition();
  }
  function L(A) {
    t.trigger === "hover" && t.keepAliveOnHover && t.show && g.handleMouseEnter(A);
  }
  function I(A) {
    t.trigger === "hover" && t.keepAliveOnHover && g.handleMouseLeave(A);
  }
  function F(A) {
    t.trigger === "hover" && !S().contains(Jo(A)) && g.handleMouseMoveOutside(A);
  }
  function k(A) {
    (t.trigger === "click" && !S().contains(Jo(A)) || t.onClickoutside) && g.handleClickOutside(A);
  }
  function S() {
    return g.getTriggerElement();
  }
  dt(ni, m), dt($l, null), dt(Pl, null);
  function M() {
    if ($ == null ? void 0 : $.onRender(), !(t.displayDirective === "show" || t.show || t.animated && x.value)) return null;
    let V;
    const J = g.internalRenderBodyRef.value, { value: W } = a;
    if (J) V = J([`${W}-popover-shared`, (f == null ? void 0 : f.value) && `${W}-popover--rtl`, $ == null ? void 0 : $.themeClass.value, t.overlap && `${W}-popover-shared--overlap`, t.showArrow && `${W}-popover-shared--show-arrow`, t.arrowPointToCenter && `${W}-popover-shared--center-arrow`], m, _.value, L, I);
    else {
      const { value: oe } = g.extraClassRef, { internalTrapFocus: re } = t, G = !Ts(r.header) || !Ts(r.footer), ie = () => {
        var U, ue;
        const Be = G ? B(Hn, null, Dt(r.header, (Oe) => Oe ? B("div", { class: [`${W}-popover__header`, t.headerClass], style: t.headerStyle }, Oe) : null), Dt(r.default, (Oe) => Oe ? B("div", { class: [`${W}-popover__content`, t.contentClass], style: t.contentStyle }, r) : null), Dt(r.footer, (Oe) => Oe ? B("div", { class: [`${W}-popover__footer`, t.footerClass], style: t.footerStyle }, Oe) : null)) : t.scrollable ? (U = r.default) === null || U === void 0 ? void 0 : U.call(r) : B("div", { class: [`${W}-popover__content`, t.contentClass], style: t.contentStyle }, r), ze = t.scrollable ? B(Xh, { themeOverrides: d.value.peerOverrides.Scrollbar, theme: d.value.peers.Scrollbar, contentClass: G ? void 0 : `${W}-popover__content ${(ue = t.contentClass) !== null && ue !== void 0 ? ue : ""}`, contentStyle: G ? void 0 : t.contentStyle }, { default: () => Be }) : Be, Le = t.showArrow ? tp({ arrowClass: t.arrowClass, arrowStyle: t.arrowStyle, arrowWrapperClass: t.arrowWrapperClass, arrowWrapperStyle: t.arrowWrapperStyle, clsPrefix: W }) : null;
        return [ze, Le];
      };
      V = B("div", bo({ class: [`${W}-popover`, `${W}-popover-shared`, (f == null ? void 0 : f.value) && `${W}-popover--rtl`, $ == null ? void 0 : $.themeClass.value, oe.map((U) => `${W}-${U}`), { [`${W}-popover--scrollable`]: t.scrollable, [`${W}-popover--show-header-or-footer`]: G, [`${W}-popover--raw`]: t.raw, [`${W}-popover-shared--overlap`]: t.overlap, [`${W}-popover-shared--show-arrow`]: t.showArrow, [`${W}-popover-shared--center-arrow`]: t.arrowPointToCenter }], ref: m, style: _.value, onKeydown: g.handleKeydown, onMouseenter: L, onMouseleave: I }, o), re ? B(Wh, { active: t.show, autoFocus: true }, { default: ie }) : ie());
    }
    return An(V, y.value);
  }
  return { displayed: x, namespace: i, isMounted: g.isMountedRef, zIndex: g.zIndexRef, followerRef: p, adjustedTo: go(t), followerEnabled: C, renderContentNode: M };
}, render() {
  return B(Rh, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === go.tdkey }, { default: () => this.animated ? B(cn, { name: "popover-transition", appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var t;
    (t = this.internalOnAfterLeave) === null || t === void 0 || t.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), qS = Object.keys(ep), YS = { focus: ["onFocus", "onBlur"], click: ["onClick"], hover: ["onMouseenter", "onMouseleave"], manual: [], nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"] };
function XS(t, r, o) {
  YS[r].forEach((i) => {
    t.props ? t.props = Object.assign({}, t.props) : t.props = {};
    const a = t.props[i], c = o[i];
    a ? t.props[i] = (...u) => {
      a(...u), c(...u);
    } : t.props[i] = c;
  });
}
const Tl = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: "hover" }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: "top" }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: "if" }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: go.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number }, ZS = Object.assign(Object.assign(Object.assign({}, at.props), Tl), { internalOnAfterLeave: Function, internalRenderBody: Function }), rp = Ee({ name: "Popover", inheritAttrs: false, props: ZS, slots: Object, __popover__: true, setup(t) {
  const r = Sl(), o = se(null), i = Y(() => t.show), a = se(t.defaultShow), c = Ch(i, a), u = ur(() => t.disabled ? false : c.value), d = () => {
    if (t.disabled) return true;
    const { getDisabled: G } = t;
    return !!(G == null ? void 0 : G());
  }, f = () => d() ? false : c.value, p = yh(t, ["arrow", "showArrow"]), g = Y(() => t.overlap ? false : p.value);
  let m = null;
  const C = se(null), x = se(null), y = ur(() => t.x !== void 0 && t.y !== void 0);
  function P(G) {
    const { "onUpdate:show": ie, onUpdateShow: U, onShow: ue, onHide: Be } = t;
    a.value = G, ie && Wt(ie, G), U && Wt(U, G), G && ue && Wt(ue, true), G && Be && Wt(Be, false);
  }
  function _() {
    m && m.syncPosition();
  }
  function $() {
    const { value: G } = C;
    G && (window.clearTimeout(G), C.value = null);
  }
  function R() {
    const { value: G } = x;
    G && (window.clearTimeout(G), x.value = null);
  }
  function L() {
    const G = d();
    if (t.trigger === "focus" && !G) {
      if (f()) return;
      P(true);
    }
  }
  function I() {
    const G = d();
    if (t.trigger === "focus" && !G) {
      if (!f()) return;
      P(false);
    }
  }
  function F() {
    const G = d();
    if (t.trigger === "hover" && !G) {
      if (R(), C.value !== null || f()) return;
      const ie = () => {
        P(true), C.value = null;
      }, { delay: U } = t;
      U === 0 ? ie() : C.value = window.setTimeout(ie, U);
    }
  }
  function k() {
    const G = d();
    if (t.trigger === "hover" && !G) {
      if ($(), x.value !== null || !f()) return;
      const ie = () => {
        P(false), x.value = null;
      }, { duration: U } = t;
      U === 0 ? ie() : x.value = window.setTimeout(ie, U);
    }
  }
  function S() {
    k();
  }
  function M(G) {
    var ie;
    f() && (t.trigger === "click" && ($(), R(), P(false)), (ie = t.onClickoutside) === null || ie === void 0 || ie.call(t, G));
  }
  function A() {
    if (t.trigger === "click" && !d()) {
      $(), R();
      const G = !f();
      P(G);
    }
  }
  function V(G) {
    t.internalTrapFocus && G.key === "Escape" && ($(), R(), P(false));
  }
  function J(G) {
    a.value = G;
  }
  function W() {
    var G;
    return (G = o.value) === null || G === void 0 ? void 0 : G.targetRef;
  }
  function oe(G) {
    m = G;
  }
  return dt("NPopover", { getTriggerElement: W, handleKeydown: V, handleMouseEnter: F, handleMouseLeave: k, handleClickOutside: M, handleMouseMoveOutside: S, setBodyInstance: oe, positionManuallyRef: y, isMountedRef: r, zIndexRef: Je(t, "zIndex"), extraClassRef: Je(t, "internalExtraClass"), internalRenderBodyRef: Je(t, "internalRenderBody") }), mo(() => {
    c.value && d() && P(false);
  }), { binderInstRef: o, positionManually: y, mergedShowConsideringDisabledProp: u, uncontrolledShow: a, mergedShowArrow: g, getMergedShow: f, setShow: J, handleClick: A, handleMouseEnter: F, handleMouseLeave: k, handleFocus: L, handleBlur: I, syncPosition: _ };
}, render() {
  var t;
  const { positionManually: r, $slots: o } = this;
  let i, a = false;
  if (!r && (i = Gw(o, "trigger"), i)) {
    i = Uf(i), i = i.type === NC ? B("span", [i]) : i;
    const c = { onClick: this.handleClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur };
    if (!((t = i.type) === null || t === void 0) && t.__popover__) a = true, i.props || (i.props = { internalSyncTargetWithParent: true, internalInheritedEventHandlers: [] }), i.props.internalSyncTargetWithParent = true, i.props.internalInheritedEventHandlers ? i.props.internalInheritedEventHandlers = [c, ...i.props.internalInheritedEventHandlers] : i.props.internalInheritedEventHandlers = [c];
    else {
      const { internalInheritedEventHandlers: u } = this, d = [c, ...u], f = { onBlur: (p) => {
        d.forEach((g) => {
          g.onBlur(p);
        });
      }, onFocus: (p) => {
        d.forEach((g) => {
          g.onFocus(p);
        });
      }, onClick: (p) => {
        d.forEach((g) => {
          g.onClick(p);
        });
      }, onMouseenter: (p) => {
        d.forEach((g) => {
          g.onMouseenter(p);
        });
      }, onMouseleave: (p) => {
        d.forEach((g) => {
          g.onMouseleave(p);
        });
      } };
      XS(i, u ? "nested" : r ? "manual" : this.trigger, f);
    }
  }
  return B(_h, { ref: "binderInstRef", syncTarget: !a, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    const c = this.getMergedShow();
    return [this.internalTrapFocus && c ? An(B("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 } }), [[Us, { enabled: c, zIndex: this.zIndex }]]) : null, r ? null : B(Th, null, { default: () => i }), B(US, ti(this.$props, qS, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: c })), { default: () => {
      var u, d;
      return (d = (u = this.$slots).default) === null || d === void 0 ? void 0 : d.call(u);
    }, header: () => {
      var u, d;
      return (d = (u = this.$slots).header) === null || d === void 0 ? void 0 : d.call(u);
    }, footer: () => {
      var u, d;
      return (d = (u = this.$slots).footer) === null || d === void 0 ? void 0 : d.call(u);
    } })];
  } });
} }), QS = { closeIconSizeTiny: "12px", closeIconSizeSmall: "12px", closeIconSizeMedium: "14px", closeIconSizeLarge: "14px", closeSizeTiny: "16px", closeSizeSmall: "16px", closeSizeMedium: "18px", closeSizeLarge: "18px", padding: "0 7px", closeMargin: "0 0 0 4px" };
function JS(t) {
  const { textColor2: r, primaryColorHover: o, primaryColorPressed: i, primaryColor: a, infoColor: c, successColor: u, warningColor: d, errorColor: f, baseColor: p, borderColor: g, opacityDisabled: m, tagColor: C, closeIconColor: x, closeIconColorHover: y, closeIconColorPressed: P, borderRadiusSmall: _, fontSizeMini: $, fontSizeTiny: R, fontSizeSmall: L, fontSizeMedium: I, heightMini: F, heightTiny: k, heightSmall: S, heightMedium: M, closeColorHover: A, closeColorPressed: V, buttonColor2Hover: J, buttonColor2Pressed: W, fontWeightStrong: oe } = t;
  return Object.assign(Object.assign({}, QS), { closeBorderRadius: _, heightTiny: F, heightSmall: k, heightMedium: S, heightLarge: M, borderRadius: _, opacityDisabled: m, fontSizeTiny: $, fontSizeSmall: R, fontSizeMedium: L, fontSizeLarge: I, fontWeightStrong: oe, textColorCheckable: r, textColorHoverCheckable: r, textColorPressedCheckable: r, textColorChecked: p, colorCheckable: "#0000", colorHoverCheckable: J, colorPressedCheckable: W, colorChecked: a, colorCheckedHover: o, colorCheckedPressed: i, border: `1px solid ${g}`, textColor: r, color: C, colorBordered: "rgb(250, 250, 252)", closeIconColor: x, closeIconColorHover: y, closeIconColorPressed: P, closeColorHover: A, closeColorPressed: V, borderPrimary: `1px solid ${ce(a, { alpha: 0.3 })}`, textColorPrimary: a, colorPrimary: ce(a, { alpha: 0.12 }), colorBorderedPrimary: ce(a, { alpha: 0.1 }), closeIconColorPrimary: a, closeIconColorHoverPrimary: a, closeIconColorPressedPrimary: a, closeColorHoverPrimary: ce(a, { alpha: 0.12 }), closeColorPressedPrimary: ce(a, { alpha: 0.18 }), borderInfo: `1px solid ${ce(c, { alpha: 0.3 })}`, textColorInfo: c, colorInfo: ce(c, { alpha: 0.12 }), colorBorderedInfo: ce(c, { alpha: 0.1 }), closeIconColorInfo: c, closeIconColorHoverInfo: c, closeIconColorPressedInfo: c, closeColorHoverInfo: ce(c, { alpha: 0.12 }), closeColorPressedInfo: ce(c, { alpha: 0.18 }), borderSuccess: `1px solid ${ce(u, { alpha: 0.3 })}`, textColorSuccess: u, colorSuccess: ce(u, { alpha: 0.12 }), colorBorderedSuccess: ce(u, { alpha: 0.1 }), closeIconColorSuccess: u, closeIconColorHoverSuccess: u, closeIconColorPressedSuccess: u, closeColorHoverSuccess: ce(u, { alpha: 0.12 }), closeColorPressedSuccess: ce(u, { alpha: 0.18 }), borderWarning: `1px solid ${ce(d, { alpha: 0.35 })}`, textColorWarning: d, colorWarning: ce(d, { alpha: 0.15 }), colorBorderedWarning: ce(d, { alpha: 0.12 }), closeIconColorWarning: d, closeIconColorHoverWarning: d, closeIconColorPressedWarning: d, closeColorHoverWarning: ce(d, { alpha: 0.12 }), closeColorPressedWarning: ce(d, { alpha: 0.18 }), borderError: `1px solid ${ce(f, { alpha: 0.23 })}`, textColorError: f, colorError: ce(f, { alpha: 0.1 }), colorBorderedError: ce(f, { alpha: 0.08 }), closeIconColorError: f, closeIconColorHoverError: f, closeIconColorPressedError: f, closeColorHoverError: ce(f, { alpha: 0.12 }), closeColorPressedError: ce(f, { alpha: 0.18 }) });
}
const np = { name: "Tag", common: Q, self: JS }, e2 = { paddingSingle: "0 26px 0 12px", paddingMultiple: "3px 26px 0 12px", clearSize: "16px", arrowSize: "16px" };
function t2(t) {
  const { borderRadius: r, textColor2: o, textColorDisabled: i, inputColor: a, inputColorDisabled: c, primaryColor: u, primaryColorHover: d, warningColor: f, warningColorHover: p, errorColor: g, errorColorHover: m, borderColor: C, iconColor: x, iconColorDisabled: y, clearColor: P, clearColorHover: _, clearColorPressed: $, placeholderColor: R, placeholderColorDisabled: L, fontSizeTiny: I, fontSizeSmall: F, fontSizeMedium: k, fontSizeLarge: S, heightTiny: M, heightSmall: A, heightMedium: V, heightLarge: J, fontWeight: W } = t;
  return Object.assign(Object.assign({}, e2), { fontSizeTiny: I, fontSizeSmall: F, fontSizeMedium: k, fontSizeLarge: S, heightTiny: M, heightSmall: A, heightMedium: V, heightLarge: J, borderRadius: r, fontWeight: W, textColor: o, textColorDisabled: i, placeholderColor: R, placeholderColorDisabled: L, color: a, colorDisabled: c, colorActive: a, border: `1px solid ${C}`, borderHover: `1px solid ${d}`, borderActive: `1px solid ${u}`, borderFocus: `1px solid ${d}`, boxShadowHover: "none", boxShadowActive: `0 0 0 2px ${ce(u, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${ce(u, { alpha: 0.2 })}`, caretColor: u, arrowColor: x, arrowColorDisabled: y, loadingColor: u, borderWarning: `1px solid ${f}`, borderHoverWarning: `1px solid ${p}`, borderActiveWarning: `1px solid ${f}`, borderFocusWarning: `1px solid ${p}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 0 2px ${ce(f, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${ce(f, { alpha: 0.2 })}`, colorActiveWarning: a, caretColorWarning: f, borderError: `1px solid ${g}`, borderHoverError: `1px solid ${m}`, borderActiveError: `1px solid ${g}`, borderFocusError: `1px solid ${m}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 0 2px ${ce(g, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${ce(g, { alpha: 0.2 })}`, colorActiveError: a, caretColorError: g, clearColor: P, clearColorHover: _, clearColorPressed: $ });
}
const Zs = { name: "InternalSelection", common: Q, peers: { Popover: hn }, self: t2 }, { cubicBezierEaseInOut: on } = On;
function r2({ duration: t = ".2s", delay: r = ".1s" } = {}) {
  return [X("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }), X("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), X("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${on},
 max-width ${t} ${on} ${r},
 margin-left ${t} ${on} ${r},
 margin-right ${t} ${on} ${r};
 `), X("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${on} ${r},
 max-width ${t} ${on},
 margin-left ${t} ${on},
 margin-right ${t} ${on};
 `)];
}
const n2 = ye("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), o2 = Ee({ name: "BaseWave", props: { clsPrefix: { type: String, required: true } }, setup(t) {
  _l("-base-wave", n2, Je(t, "clsPrefix"));
  const r = se(null), o = se(false);
  let i = null;
  return It(() => {
    i !== null && window.clearTimeout(i);
  }), { active: o, selfRef: r, play() {
    i !== null && (window.clearTimeout(i), o.value = false, i = null), Mn(() => {
      var a;
      (a = r.value) === null || a === void 0 || a.offsetHeight, o.value = true, i = window.setTimeout(() => {
        o.value = false, i = null;
      }, 1e3);
    });
  } };
}, render() {
  const { clsPrefix: t } = this;
  return B("div", { ref: "selfRef", "aria-hidden": true, class: [`${t}-base-wave`, this.active && `${t}-base-wave--active`] });
} }), i2 = { iconMargin: "11px 8px 0 12px", iconMarginRtl: "11px 12px 0 8px", iconSize: "24px", closeIconSize: "16px", closeSize: "20px", closeMargin: "13px 14px 0 0", closeMarginRtl: "13px 0 0 14px", padding: "13px" };
function l2(t) {
  const { lineHeight: r, borderRadius: o, fontWeightStrong: i, baseColor: a, dividerColor: c, actionColor: u, textColor1: d, textColor2: f, closeColorHover: p, closeColorPressed: g, closeIconColor: m, closeIconColorHover: C, closeIconColorPressed: x, infoColor: y, successColor: P, warningColor: _, errorColor: $, fontSize: R } = t;
  return Object.assign(Object.assign({}, i2), { fontSize: R, lineHeight: r, titleFontWeight: i, borderRadius: o, border: `1px solid ${c}`, color: u, titleTextColor: d, iconColor: f, contentTextColor: f, closeBorderRadius: o, closeColorHover: p, closeColorPressed: g, closeIconColor: m, closeIconColorHover: C, closeIconColorPressed: x, borderInfo: `1px solid ${ne(a, ce(y, { alpha: 0.25 }))}`, colorInfo: ne(a, ce(y, { alpha: 0.08 })), titleTextColorInfo: d, iconColorInfo: y, contentTextColorInfo: f, closeColorHoverInfo: p, closeColorPressedInfo: g, closeIconColorInfo: m, closeIconColorHoverInfo: C, closeIconColorPressedInfo: x, borderSuccess: `1px solid ${ne(a, ce(P, { alpha: 0.25 }))}`, colorSuccess: ne(a, ce(P, { alpha: 0.08 })), titleTextColorSuccess: d, iconColorSuccess: P, contentTextColorSuccess: f, closeColorHoverSuccess: p, closeColorPressedSuccess: g, closeIconColorSuccess: m, closeIconColorHoverSuccess: C, closeIconColorPressedSuccess: x, borderWarning: `1px solid ${ne(a, ce(_, { alpha: 0.33 }))}`, colorWarning: ne(a, ce(_, { alpha: 0.08 })), titleTextColorWarning: d, iconColorWarning: _, contentTextColorWarning: f, closeColorHoverWarning: p, closeColorPressedWarning: g, closeIconColorWarning: m, closeIconColorHoverWarning: C, closeIconColorPressedWarning: x, borderError: `1px solid ${ne(a, ce($, { alpha: 0.25 }))}`, colorError: ne(a, ce($, { alpha: 0.08 })), titleTextColorError: d, iconColorError: $, contentTextColorError: f, closeColorHoverError: p, closeColorPressedError: g, closeIconColorError: m, closeIconColorHoverError: C, closeIconColorPressedError: x });
}
const a2 = { name: "Alert", common: Q, self: l2 }, { cubicBezierEaseInOut: Sr, cubicBezierEaseOut: s2, cubicBezierEaseIn: c2 } = On;
function oE({ overflow: t = "hidden", duration: r = ".3s", originalTransition: o = "", leavingDelay: i = "0s", foldPadding: a = false, enterToProps: c = void 0, leaveToProps: u = void 0, reverse: d = false } = {}) {
  const f = d ? "leave" : "enter", p = d ? "enter" : "leave";
  return [X(`&.fade-in-height-expand-transition-${p}-from,
 &.fade-in-height-expand-transition-${f}-to`, Object.assign(Object.assign({}, c), { opacity: 1 })), X(`&.fade-in-height-expand-transition-${p}-to,
 &.fade-in-height-expand-transition-${f}-from`, Object.assign(Object.assign({}, u), { opacity: 0, marginTop: "0 !important", marginBottom: "0 !important", paddingTop: a ? "0 !important" : void 0, paddingBottom: a ? "0 !important" : void 0 })), X(`&.fade-in-height-expand-transition-${p}-active`, `
 overflow: ${t};
 transition:
 max-height ${r} ${Sr} ${i},
 opacity ${r} ${s2} ${i},
 margin-top ${r} ${Sr} ${i},
 margin-bottom ${r} ${Sr} ${i},
 padding-top ${r} ${Sr} ${i},
 padding-bottom ${r} ${Sr} ${i}
 ${o ? `,${o}` : ""}
 `), X(`&.fade-in-height-expand-transition-${f}-active`, `
 overflow: ${t};
 transition:
 max-height ${r} ${Sr},
 opacity ${r} ${c2},
 margin-top ${r} ${Sr},
 margin-bottom ${r} ${Sr},
 padding-top ${r} ${Sr},
 padding-bottom ${r} ${Sr}
 ${o ? `,${o}` : ""}
 `)];
}
const u2 = { linkFontSize: "13px", linkPadding: "0 0 0 16px", railWidth: "4px" };
function d2(t) {
  const { borderRadius: r, railColor: o, primaryColor: i, primaryColorHover: a, primaryColorPressed: c, textColor2: u } = t;
  return Object.assign(Object.assign({}, u2), { borderRadius: r, railColor: o, railColorActive: i, linkColor: ce(i, { alpha: 0.15 }), linkTextColor: u, linkTextColorHover: a, linkTextColorPressed: c, linkTextColorActive: i });
}
const f2 = { name: "Anchor", common: Q, self: d2 }, h2 = oi && "chrome" in window;
oi && navigator.userAgent.includes("Firefox");
const p2 = oi && navigator.userAgent.includes("Safari") && !h2, g2 = { paddingTiny: "0 8px", paddingSmall: "0 10px", paddingMedium: "0 12px", paddingLarge: "0 14px", clearSize: "16px" };
function v2(t) {
  const { textColor2: r, textColor3: o, textColorDisabled: i, primaryColor: a, primaryColorHover: c, inputColor: u, inputColorDisabled: d, borderColor: f, warningColor: p, warningColorHover: g, errorColor: m, errorColorHover: C, borderRadius: x, lineHeight: y, fontSizeTiny: P, fontSizeSmall: _, fontSizeMedium: $, fontSizeLarge: R, heightTiny: L, heightSmall: I, heightMedium: F, heightLarge: k, actionColor: S, clearColor: M, clearColorHover: A, clearColorPressed: V, placeholderColor: J, placeholderColorDisabled: W, iconColor: oe, iconColorDisabled: re, iconColorHover: G, iconColorPressed: ie, fontWeight: U } = t;
  return Object.assign(Object.assign({}, g2), { fontWeight: U, countTextColorDisabled: i, countTextColor: o, heightTiny: L, heightSmall: I, heightMedium: F, heightLarge: k, fontSizeTiny: P, fontSizeSmall: _, fontSizeMedium: $, fontSizeLarge: R, lineHeight: y, lineHeightTextarea: y, borderRadius: x, iconSize: "16px", groupLabelColor: S, groupLabelTextColor: r, textColor: r, textColorDisabled: i, textDecorationColor: r, caretColor: a, placeholderColor: J, placeholderColorDisabled: W, color: u, colorDisabled: d, colorFocus: u, groupLabelBorder: `1px solid ${f}`, border: `1px solid ${f}`, borderHover: `1px solid ${c}`, borderDisabled: `1px solid ${f}`, borderFocus: `1px solid ${c}`, boxShadowFocus: `0 0 0 2px ${ce(a, { alpha: 0.2 })}`, loadingColor: a, loadingColorWarning: p, borderWarning: `1px solid ${p}`, borderHoverWarning: `1px solid ${g}`, colorFocusWarning: u, borderFocusWarning: `1px solid ${g}`, boxShadowFocusWarning: `0 0 0 2px ${ce(p, { alpha: 0.2 })}`, caretColorWarning: p, loadingColorError: m, borderError: `1px solid ${m}`, borderHoverError: `1px solid ${C}`, colorFocusError: u, borderFocusError: `1px solid ${C}`, boxShadowFocusError: `0 0 0 2px ${ce(m, { alpha: 0.2 })}`, caretColorError: m, clearColor: M, clearColorHover: A, clearColorPressed: V, iconColor: oe, iconColorDisabled: re, iconColorHover: G, iconColorPressed: ie, suffixTextColor: r });
}
const Jt = { name: "Input", common: Q, peers: { Scrollbar: St }, self: v2 };
function m2(t) {
  const { boxShadow2: r } = t;
  return { menuBoxShadow: r };
}
const b2 = { name: "AutoComplete", common: Q, peers: { InternalSelectMenu: ai, Input: Jt }, self: m2 };
function x2(t) {
  const { borderRadius: r, avatarColor: o, cardColor: i, fontSize: a, heightTiny: c, heightSmall: u, heightMedium: d, heightLarge: f, heightHuge: p, modalColor: g, popoverColor: m } = t;
  return { borderRadius: r, fontSize: a, border: `2px solid ${i}`, heightTiny: c, heightSmall: u, heightMedium: d, heightLarge: f, heightHuge: p, color: ne(i, o), colorModal: ne(g, o), colorPopover: ne(m, o) };
}
const op = { name: "Avatar", common: Q, self: x2 };
function C2() {
  return { gap: "-12px" };
}
const y2 = { name: "AvatarGroup", common: Q, peers: { Avatar: op }, self: C2 }, w2 = { width: "44px", height: "44px", borderRadius: "22px", iconSize: "26px" };
function S2(t) {
  const { popoverColor: r, textColor2: o, primaryColorHover: i, primaryColorPressed: a } = t;
  return Object.assign(Object.assign({}, w2), { color: r, textColor: o, iconColor: o, iconColorHover: i, iconColorPressed: a, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
}
const $2 = { name: "BackTop", common: Q, self: S2 };
function P2(t) {
  const { errorColor: r, infoColor: o, successColor: i, warningColor: a, fontFamily: c } = t;
  return { color: r, colorInfo: o, colorSuccess: i, colorError: r, colorWarning: a, fontSize: "12px", fontFamily: c };
}
const _2 = { name: "Badge", common: Q, self: P2 }, T2 = { fontWeightActive: "400" };
function E2(t) {
  const { fontSize: r, textColor3: o, textColor2: i, borderRadius: a, buttonColor2Hover: c, buttonColor2Pressed: u } = t;
  return Object.assign(Object.assign({}, T2), { fontSize: r, itemLineHeight: "1.25", itemTextColor: o, itemTextColorHover: i, itemTextColorPressed: i, itemTextColorActive: i, itemBorderRadius: a, itemColorHover: c, itemColorPressed: u, separatorColor: o });
}
const z2 = { name: "Breadcrumb", common: Q, self: E2 };
function _n(t) {
  return ne(t, [255, 255, 255, 0.16]);
}
function fl(t) {
  return ne(t, [0, 0, 0, 0.12]);
}
const R2 = "n-button-group", I2 = { paddingTiny: "0 6px", paddingSmall: "0 10px", paddingMedium: "0 14px", paddingLarge: "0 18px", paddingRoundTiny: "0 10px", paddingRoundSmall: "0 14px", paddingRoundMedium: "0 18px", paddingRoundLarge: "0 22px", iconMarginTiny: "6px", iconMarginSmall: "6px", iconMarginMedium: "6px", iconMarginLarge: "6px", iconSizeTiny: "14px", iconSizeSmall: "18px", iconSizeMedium: "18px", iconSizeLarge: "20px", rippleDuration: ".6s" };
function B2(t) {
  const { heightTiny: r, heightSmall: o, heightMedium: i, heightLarge: a, borderRadius: c, fontSizeTiny: u, fontSizeSmall: d, fontSizeMedium: f, fontSizeLarge: p, opacityDisabled: g, textColor2: m, textColor3: C, primaryColorHover: x, primaryColorPressed: y, borderColor: P, primaryColor: _, baseColor: $, infoColor: R, infoColorHover: L, infoColorPressed: I, successColor: F, successColorHover: k, successColorPressed: S, warningColor: M, warningColorHover: A, warningColorPressed: V, errorColor: J, errorColorHover: W, errorColorPressed: oe, fontWeight: re, buttonColor2: G, buttonColor2Hover: ie, buttonColor2Pressed: U, fontWeightStrong: ue } = t;
  return Object.assign(Object.assign({}, I2), { heightTiny: r, heightSmall: o, heightMedium: i, heightLarge: a, borderRadiusTiny: c, borderRadiusSmall: c, borderRadiusMedium: c, borderRadiusLarge: c, fontSizeTiny: u, fontSizeSmall: d, fontSizeMedium: f, fontSizeLarge: p, opacityDisabled: g, colorOpacitySecondary: "0.16", colorOpacitySecondaryHover: "0.22", colorOpacitySecondaryPressed: "0.28", colorSecondary: G, colorSecondaryHover: ie, colorSecondaryPressed: U, colorTertiary: G, colorTertiaryHover: ie, colorTertiaryPressed: U, colorQuaternary: "#0000", colorQuaternaryHover: ie, colorQuaternaryPressed: U, color: "#0000", colorHover: "#0000", colorPressed: "#0000", colorFocus: "#0000", colorDisabled: "#0000", textColor: m, textColorTertiary: C, textColorHover: x, textColorPressed: y, textColorFocus: x, textColorDisabled: m, textColorText: m, textColorTextHover: x, textColorTextPressed: y, textColorTextFocus: x, textColorTextDisabled: m, textColorGhost: m, textColorGhostHover: x, textColorGhostPressed: y, textColorGhostFocus: x, textColorGhostDisabled: m, border: `1px solid ${P}`, borderHover: `1px solid ${x}`, borderPressed: `1px solid ${y}`, borderFocus: `1px solid ${x}`, borderDisabled: `1px solid ${P}`, rippleColor: _, colorPrimary: _, colorHoverPrimary: x, colorPressedPrimary: y, colorFocusPrimary: x, colorDisabledPrimary: _, textColorPrimary: $, textColorHoverPrimary: $, textColorPressedPrimary: $, textColorFocusPrimary: $, textColorDisabledPrimary: $, textColorTextPrimary: _, textColorTextHoverPrimary: x, textColorTextPressedPrimary: y, textColorTextFocusPrimary: x, textColorTextDisabledPrimary: m, textColorGhostPrimary: _, textColorGhostHoverPrimary: x, textColorGhostPressedPrimary: y, textColorGhostFocusPrimary: x, textColorGhostDisabledPrimary: _, borderPrimary: `1px solid ${_}`, borderHoverPrimary: `1px solid ${x}`, borderPressedPrimary: `1px solid ${y}`, borderFocusPrimary: `1px solid ${x}`, borderDisabledPrimary: `1px solid ${_}`, rippleColorPrimary: _, colorInfo: R, colorHoverInfo: L, colorPressedInfo: I, colorFocusInfo: L, colorDisabledInfo: R, textColorInfo: $, textColorHoverInfo: $, textColorPressedInfo: $, textColorFocusInfo: $, textColorDisabledInfo: $, textColorTextInfo: R, textColorTextHoverInfo: L, textColorTextPressedInfo: I, textColorTextFocusInfo: L, textColorTextDisabledInfo: m, textColorGhostInfo: R, textColorGhostHoverInfo: L, textColorGhostPressedInfo: I, textColorGhostFocusInfo: L, textColorGhostDisabledInfo: R, borderInfo: `1px solid ${R}`, borderHoverInfo: `1px solid ${L}`, borderPressedInfo: `1px solid ${I}`, borderFocusInfo: `1px solid ${L}`, borderDisabledInfo: `1px solid ${R}`, rippleColorInfo: R, colorSuccess: F, colorHoverSuccess: k, colorPressedSuccess: S, colorFocusSuccess: k, colorDisabledSuccess: F, textColorSuccess: $, textColorHoverSuccess: $, textColorPressedSuccess: $, textColorFocusSuccess: $, textColorDisabledSuccess: $, textColorTextSuccess: F, textColorTextHoverSuccess: k, textColorTextPressedSuccess: S, textColorTextFocusSuccess: k, textColorTextDisabledSuccess: m, textColorGhostSuccess: F, textColorGhostHoverSuccess: k, textColorGhostPressedSuccess: S, textColorGhostFocusSuccess: k, textColorGhostDisabledSuccess: F, borderSuccess: `1px solid ${F}`, borderHoverSuccess: `1px solid ${k}`, borderPressedSuccess: `1px solid ${S}`, borderFocusSuccess: `1px solid ${k}`, borderDisabledSuccess: `1px solid ${F}`, rippleColorSuccess: F, colorWarning: M, colorHoverWarning: A, colorPressedWarning: V, colorFocusWarning: A, colorDisabledWarning: M, textColorWarning: $, textColorHoverWarning: $, textColorPressedWarning: $, textColorFocusWarning: $, textColorDisabledWarning: $, textColorTextWarning: M, textColorTextHoverWarning: A, textColorTextPressedWarning: V, textColorTextFocusWarning: A, textColorTextDisabledWarning: m, textColorGhostWarning: M, textColorGhostHoverWarning: A, textColorGhostPressedWarning: V, textColorGhostFocusWarning: A, textColorGhostDisabledWarning: M, borderWarning: `1px solid ${M}`, borderHoverWarning: `1px solid ${A}`, borderPressedWarning: `1px solid ${V}`, borderFocusWarning: `1px solid ${A}`, borderDisabledWarning: `1px solid ${M}`, rippleColorWarning: M, colorError: J, colorHoverError: W, colorPressedError: oe, colorFocusError: W, colorDisabledError: J, textColorError: $, textColorHoverError: $, textColorPressedError: $, textColorFocusError: $, textColorDisabledError: $, textColorTextError: J, textColorTextHoverError: W, textColorTextPressedError: oe, textColorTextFocusError: W, textColorTextDisabledError: m, textColorGhostError: J, textColorGhostHoverError: W, textColorGhostPressedError: oe, textColorGhostFocusError: W, textColorGhostDisabledError: J, borderError: `1px solid ${J}`, borderHoverError: `1px solid ${W}`, borderPressedError: `1px solid ${oe}`, borderFocusError: `1px solid ${W}`, borderDisabledError: `1px solid ${J}`, rippleColorError: J, waveOpacity: "0.6", fontWeight: re, fontWeightStrong: ue });
}
const Bt = { name: "Button", common: Q, self: B2 }, M2 = X([ye("button", `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [pe("color", [ae("border", { borderColor: "var(--n-border-color)" }), pe("disabled", [ae("border", { borderColor: "var(--n-border-color-disabled)" })]), an("disabled", [X("&:focus", [ae("state-border", { borderColor: "var(--n-border-color-focus)" })]), X("&:hover", [ae("state-border", { borderColor: "var(--n-border-color-hover)" })]), X("&:active", [ae("state-border", { borderColor: "var(--n-border-color-pressed)" })]), pe("pressed", [ae("state-border", { borderColor: "var(--n-border-color-pressed)" })])])]), pe("disabled", { backgroundColor: "var(--n-color-disabled)", color: "var(--n-text-color-disabled)" }, [ae("border", { border: "var(--n-border-disabled)" })]), an("disabled", [X("&:focus", { backgroundColor: "var(--n-color-focus)", color: "var(--n-text-color-focus)" }, [ae("state-border", { border: "var(--n-border-focus)" })]), X("&:hover", { backgroundColor: "var(--n-color-hover)", color: "var(--n-text-color-hover)" }, [ae("state-border", { border: "var(--n-border-hover)" })]), X("&:active", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [ae("state-border", { border: "var(--n-border-pressed)" })]), pe("pressed", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [ae("state-border", { border: "var(--n-border-pressed)" })])]), pe("loading", "cursor: wait;"), ye("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [pe("active", { zIndex: 1, animationName: "button-wave-spread, button-wave-opacity" })]), oi && "MozBoxSizing" in document.createElement("div").style ? X("&::moz-focus-inner", { border: 0 }) : null, ae("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), ae("border", { border: "var(--n-border)" }), ae("state-border", { border: "var(--n-border)", borderColor: "#0000", zIndex: 1 }), ae("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [ye("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [Es({ top: "50%", originalTransform: "translateY(-50%)" })]), r2()]), ae("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [X("~", [ae("icon", { margin: "var(--n-icon-margin)", marginRight: 0 })])]), pe("block", `
 display: flex;
 width: 100%;
 `), pe("dashed", [ae("border, state-border", { borderStyle: "dashed !important" })]), pe("disabled", { cursor: "not-allowed", opacity: "var(--n-opacity-disabled)" })]), X("@keyframes button-wave-spread", { from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" }, to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" } }), X("@keyframes button-wave-opacity", { from: { opacity: "var(--n-wave-opacity)" }, to: { opacity: 0 } })]), A2 = Object.assign(Object.assign({}, at.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: "button" }, type: { type: String, default: "default" }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: "left" }, attrType: { type: String, default: "button" }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !p2 } }), Rs = Ee({ name: "Button", props: A2, slots: Object, setup(t) {
  const r = se(null), o = se(null), i = se(false), a = ur(() => !t.quaternary && !t.tertiary && !t.secondary && !t.text && (!t.color || t.ghost || t.dashed) && t.bordered), c = He(R2, {}), { mergedSizeRef: u } = Kw({}, { defaultSize: "medium", mergedSize: (I) => {
    const { size: F } = t;
    if (F) return F;
    const { size: k } = c;
    if (k) return k;
    const { mergedSize: S } = I || {};
    return S ? S.value : "medium";
  } }), d = Y(() => t.focusable && !t.disabled), f = (I) => {
    var F;
    d.value || I.preventDefault(), !t.nativeFocusBehavior && (I.preventDefault(), !t.disabled && d.value && ((F = r.value) === null || F === void 0 || F.focus({ preventScroll: true })));
  }, p = (I) => {
    var F;
    if (!t.disabled && !t.loading) {
      const { onClick: k } = t;
      k && Wt(k, I), t.text || (F = o.value) === null || F === void 0 || F.play();
    }
  }, g = (I) => {
    switch (I.key) {
      case "Enter":
        if (!t.keyboard) return;
        i.value = false;
    }
  }, m = (I) => {
    switch (I.key) {
      case "Enter":
        if (!t.keyboard || t.loading) {
          I.preventDefault();
          return;
        }
        i.value = true;
    }
  }, C = () => {
    i.value = false;
  }, { inlineThemeDisabled: x, mergedClsPrefixRef: y, mergedRtlRef: P } = zr(t), _ = at("Button", "-button", M2, Bt, t, y), $ = ii("Button", P, y), R = Y(() => {
    const I = _.value, { common: { cubicBezierEaseInOut: F, cubicBezierEaseOut: k }, self: S } = I, { rippleDuration: M, opacityDisabled: A, fontWeight: V, fontWeightStrong: J } = S, W = u.value, { dashed: oe, type: re, ghost: G, text: ie, color: U, round: ue, circle: Be, textColor: ze, secondary: Le, tertiary: Oe, quaternary: mt, strong: xt } = t, Tt = { "--n-font-weight": xt ? J : V };
    let Pe = { "--n-color": "initial", "--n-color-hover": "initial", "--n-color-pressed": "initial", "--n-color-focus": "initial", "--n-color-disabled": "initial", "--n-ripple-color": "initial", "--n-text-color": "initial", "--n-text-color-hover": "initial", "--n-text-color-pressed": "initial", "--n-text-color-focus": "initial", "--n-text-color-disabled": "initial" };
    const O = re === "tertiary", te = re === "default", K = O ? "default" : re;
    if (ie) {
      const Ve = ze || U;
      Pe = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": "#0000", "--n-text-color": Ve || S[Ce("textColorText", K)], "--n-text-color-hover": Ve ? _n(Ve) : S[Ce("textColorTextHover", K)], "--n-text-color-pressed": Ve ? fl(Ve) : S[Ce("textColorTextPressed", K)], "--n-text-color-focus": Ve ? _n(Ve) : S[Ce("textColorTextHover", K)], "--n-text-color-disabled": Ve || S[Ce("textColorTextDisabled", K)] };
    } else if (G || oe) {
      const Ve = ze || U;
      Pe = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": U || S[Ce("rippleColor", K)], "--n-text-color": Ve || S[Ce("textColorGhost", K)], "--n-text-color-hover": Ve ? _n(Ve) : S[Ce("textColorGhostHover", K)], "--n-text-color-pressed": Ve ? fl(Ve) : S[Ce("textColorGhostPressed", K)], "--n-text-color-focus": Ve ? _n(Ve) : S[Ce("textColorGhostHover", K)], "--n-text-color-disabled": Ve || S[Ce("textColorGhostDisabled", K)] };
    } else if (Le) {
      const Ve = te ? S.textColor : O ? S.textColorTertiary : S[Ce("color", K)], We = U || Ve, Gt = re !== "default" && re !== "tertiary";
      Pe = { "--n-color": Gt ? ce(We, { alpha: Number(S.colorOpacitySecondary) }) : S.colorSecondary, "--n-color-hover": Gt ? ce(We, { alpha: Number(S.colorOpacitySecondaryHover) }) : S.colorSecondaryHover, "--n-color-pressed": Gt ? ce(We, { alpha: Number(S.colorOpacitySecondaryPressed) }) : S.colorSecondaryPressed, "--n-color-focus": Gt ? ce(We, { alpha: Number(S.colorOpacitySecondaryHover) }) : S.colorSecondaryHover, "--n-color-disabled": S.colorSecondary, "--n-ripple-color": "#0000", "--n-text-color": We, "--n-text-color-hover": We, "--n-text-color-pressed": We, "--n-text-color-focus": We, "--n-text-color-disabled": We };
    } else if (Oe || mt) {
      const Ve = te ? S.textColor : O ? S.textColorTertiary : S[Ce("color", K)], We = U || Ve;
      Oe ? (Pe["--n-color"] = S.colorTertiary, Pe["--n-color-hover"] = S.colorTertiaryHover, Pe["--n-color-pressed"] = S.colorTertiaryPressed, Pe["--n-color-focus"] = S.colorSecondaryHover, Pe["--n-color-disabled"] = S.colorTertiary) : (Pe["--n-color"] = S.colorQuaternary, Pe["--n-color-hover"] = S.colorQuaternaryHover, Pe["--n-color-pressed"] = S.colorQuaternaryPressed, Pe["--n-color-focus"] = S.colorQuaternaryHover, Pe["--n-color-disabled"] = S.colorQuaternary), Pe["--n-ripple-color"] = "#0000", Pe["--n-text-color"] = We, Pe["--n-text-color-hover"] = We, Pe["--n-text-color-pressed"] = We, Pe["--n-text-color-focus"] = We, Pe["--n-text-color-disabled"] = We;
    } else Pe = { "--n-color": U || S[Ce("color", K)], "--n-color-hover": U ? _n(U) : S[Ce("colorHover", K)], "--n-color-pressed": U ? fl(U) : S[Ce("colorPressed", K)], "--n-color-focus": U ? _n(U) : S[Ce("colorFocus", K)], "--n-color-disabled": U || S[Ce("colorDisabled", K)], "--n-ripple-color": U || S[Ce("rippleColor", K)], "--n-text-color": ze || (U ? S.textColorPrimary : O ? S.textColorTertiary : S[Ce("textColor", K)]), "--n-text-color-hover": ze || (U ? S.textColorHoverPrimary : S[Ce("textColorHover", K)]), "--n-text-color-pressed": ze || (U ? S.textColorPressedPrimary : S[Ce("textColorPressed", K)]), "--n-text-color-focus": ze || (U ? S.textColorFocusPrimary : S[Ce("textColorFocus", K)]), "--n-text-color-disabled": ze || (U ? S.textColorDisabledPrimary : S[Ce("textColorDisabled", K)]) };
    let he = { "--n-border": "initial", "--n-border-hover": "initial", "--n-border-pressed": "initial", "--n-border-focus": "initial", "--n-border-disabled": "initial" };
    ie ? he = { "--n-border": "none", "--n-border-hover": "none", "--n-border-pressed": "none", "--n-border-focus": "none", "--n-border-disabled": "none" } : he = { "--n-border": S[Ce("border", K)], "--n-border-hover": S[Ce("borderHover", K)], "--n-border-pressed": S[Ce("borderPressed", K)], "--n-border-focus": S[Ce("borderFocus", K)], "--n-border-disabled": S[Ce("borderDisabled", K)] };
    const { [Ce("height", W)]: Me, [Ce("fontSize", W)]: je, [Ce("padding", W)]: we, [Ce("paddingRound", W)]: ge, [Ce("iconSize", W)]: Ge, [Ce("borderRadius", W)]: jt, [Ce("iconMargin", W)]: Ue, waveOpacity: kn } = S, yo = { "--n-width": Be && !ie ? Me : "initial", "--n-height": ie ? "initial" : Me, "--n-font-size": je, "--n-padding": Be || ie ? "initial" : ue ? ge : we, "--n-icon-size": Ge, "--n-icon-margin": Ue, "--n-border-radius": ie ? "initial" : Be || ue ? Me : jt };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": F, "--n-bezier-ease-out": k, "--n-ripple-duration": M, "--n-opacity-disabled": A, "--n-wave-opacity": kn }, Tt), Pe), he), yo);
  }), L = x ? Kr("button", Y(() => {
    let I = "";
    const { dashed: F, type: k, ghost: S, text: M, color: A, round: V, circle: J, textColor: W, secondary: oe, tertiary: re, quaternary: G, strong: ie } = t;
    F && (I += "a"), S && (I += "b"), M && (I += "c"), V && (I += "d"), J && (I += "e"), oe && (I += "f"), re && (I += "g"), G && (I += "h"), ie && (I += "i"), A && (I += `j${zf(A)}`), W && (I += `k${zf(W)}`);
    const { value: U } = u;
    return I += `l${U[0]}`, I += `m${k[0]}`, I;
  }), R, t) : void 0;
  return { selfElRef: r, waveElRef: o, mergedClsPrefix: y, mergedFocusable: d, mergedSize: u, showBorder: a, enterPressed: i, rtlEnabled: $, handleMousedown: f, handleKeydown: m, handleBlur: C, handleKeyup: g, handleClick: p, customColorCssVars: Y(() => {
    const { color: I } = t;
    if (!I) return null;
    const F = _n(I);
    return { "--n-border-color": I, "--n-border-color-hover": F, "--n-border-color-pressed": fl(I), "--n-border-color-focus": F, "--n-border-color-disabled": I };
  }), cssVars: x ? void 0 : R, themeClass: L == null ? void 0 : L.themeClass, onRender: L == null ? void 0 : L.onRender };
}, render() {
  const { mergedClsPrefix: t, tag: r, onRender: o } = this;
  o == null ? void 0 : o();
  const i = Dt(this.$slots.default, (a) => a && B("span", { class: `${t}-button__content` }, a));
  return B(r, { ref: "selfElRef", class: [this.themeClass, `${t}-button`, `${t}-button--${this.type}-type`, `${t}-button--${this.mergedSize}-type`, this.rtlEnabled && `${t}-button--rtl`, this.disabled && `${t}-button--disabled`, this.block && `${t}-button--block`, this.enterPressed && `${t}-button--pressed`, !this.text && this.dashed && `${t}-button--dashed`, this.color && `${t}-button--color`, this.secondary && `${t}-button--secondary`, this.loading && `${t}-button--loading`, this.ghost && `${t}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === "right" && i, B(lS, { width: true }, { default: () => Dt(this.$slots.icon, (a) => (this.loading || this.renderIcon || a) && B("span", { class: `${t}-button__icon`, style: { margin: Ts(this.$slots.default) ? "0" : "" } }, B(Vh, null, { default: () => this.loading ? B(cS, { clsPrefix: t, key: "loading", class: `${t}-icon-slot`, strokeWidth: 20 }) : B("div", { key: "icon", class: `${t}-icon-slot`, role: "none" }, this.renderIcon ? this.renderIcon() : a) }))) }), this.iconPlacement === "left" && i, this.text ? null : B(o2, { ref: "waveElRef", clsPrefix: t }), this.showBorder ? B("div", { "aria-hidden": true, class: `${t}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? B("div", { "aria-hidden": true, class: `${t}-button__state-border`, style: this.customColorCssVars }) : null);
} }), iE = Rs, L2 = { titleFontSize: "22px" };
function F2(t) {
  const { borderRadius: r, fontSize: o, lineHeight: i, textColor2: a, textColor1: c, textColorDisabled: u, dividerColor: d, fontWeightStrong: f, primaryColor: p, baseColor: g, hoverColor: m, cardColor: C, modalColor: x, popoverColor: y } = t;
  return Object.assign(Object.assign({}, L2), { borderRadius: r, borderColor: ne(C, d), borderColorModal: ne(x, d), borderColorPopover: ne(y, d), textColor: a, titleFontWeight: f, titleTextColor: c, dayTextColor: u, fontSize: o, lineHeight: i, dateColorCurrent: p, dateTextColorCurrent: g, cellColorHover: ne(C, m), cellColorHoverModal: ne(x, m), cellColorHoverPopover: ne(y, m), cellColor: C, cellColorModal: x, cellColorPopover: y, barColor: p });
}
const H2 = { name: "Calendar", common: Q, peers: { Button: Bt }, self: F2 }, O2 = { paddingSmall: "12px 16px 12px", paddingMedium: "19px 24px 20px", paddingLarge: "23px 32px 24px", paddingHuge: "27px 40px 28px", titleFontSizeSmall: "16px", titleFontSizeMedium: "18px", titleFontSizeLarge: "18px", titleFontSizeHuge: "18px", closeIconSize: "18px", closeSize: "22px" };
function k2(t) {
  const { primaryColor: r, borderRadius: o, lineHeight: i, fontSize: a, cardColor: c, textColor2: u, textColor1: d, dividerColor: f, fontWeightStrong: p, closeIconColor: g, closeIconColorHover: m, closeIconColorPressed: C, closeColorHover: x, closeColorPressed: y, modalColor: P, boxShadow1: _, popoverColor: $, actionColor: R } = t;
  return Object.assign(Object.assign({}, O2), { lineHeight: i, color: c, colorModal: P, colorPopover: $, colorTarget: r, colorEmbedded: R, colorEmbeddedModal: R, colorEmbeddedPopover: R, textColor: u, titleTextColor: d, borderColor: f, actionColor: R, titleFontWeight: p, closeColorHover: x, closeColorPressed: y, closeBorderRadius: o, closeIconColor: g, closeIconColorHover: m, closeIconColorPressed: C, fontSizeSmall: a, fontSizeMedium: a, fontSizeLarge: a, fontSizeHuge: a, boxShadow: _, borderRadius: o });
}
const Qs = { name: "Card", common: Q, self: k2 }, D2 = X([ye("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [hh({ background: "var(--n-color-modal)" }), pe("hoverable", [X("&:hover", "box-shadow: var(--n-box-shadow);")]), pe("content-segmented", [X(">", [ae("content", { paddingTop: "var(--n-padding-bottom)" })])]), pe("content-soft-segmented", [X(">", [ae("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), pe("footer-segmented", [X(">", [ae("footer", { paddingTop: "var(--n-padding-bottom)" })])]), pe("footer-soft-segmented", [X(">", [ae("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), X(">", [ye("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [ae("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), ae("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), ae("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), ae("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), ae("content", "flex: 1; min-width: 0;"), ae("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [X("&:first-child", { paddingTop: "var(--n-padding-bottom)" })]), ae("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), ye("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [X("img", `
 display: block;
 width: 100%;
 `)]), pe("bordered", `
 border: 1px solid var(--n-border-color);
 `, [X("&:target", "border-color: var(--n-color-target);")]), pe("action-segmented", [X(">", [ae("action", [X("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), pe("content-segmented, content-soft-segmented", [X(">", [ae("content", { transition: "border-color 0.3s var(--n-bezier)" }, [X("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), pe("footer-segmented, footer-soft-segmented", [X(">", [ae("footer", { transition: "border-color 0.3s var(--n-bezier)" }, [X("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), pe("embedded", `
 background-color: var(--n-color-embedded);
 `)]), fh(ye("card", `
 background: var(--n-color-modal);
 `, [pe("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), xy(ye("card", `
 background: var(--n-color-popover);
 `, [pe("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), Js = { title: [String, Function], contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], headerExtraClass: String, headerExtraStyle: [Object, String], footerClass: String, footerStyle: [Object, String], embedded: Boolean, segmented: { type: [Boolean, Object], default: false }, size: { type: String, default: "medium" }, bordered: { type: Boolean, default: true }, closable: Boolean, hoverable: Boolean, role: String, onClose: [Function, Array], tag: { type: String, default: "div" }, cover: Function, content: [String, Function], footer: Function, action: Function, headerExtra: Function, closeFocusable: Boolean }, W2 = Ys(Js), N2 = Object.assign(Object.assign({}, at.props), Js), j2 = Ee({ name: "Card", props: N2, slots: Object, setup(t) {
  const r = () => {
    const { onClose: p } = t;
    p && Wt(p);
  }, { inlineThemeDisabled: o, mergedClsPrefixRef: i, mergedRtlRef: a } = zr(t), c = at("Card", "-card", D2, Qs, t, i), u = ii("Card", a, i), d = Y(() => {
    const { size: p } = t, { self: { color: g, colorModal: m, colorTarget: C, textColor: x, titleTextColor: y, titleFontWeight: P, borderColor: _, actionColor: $, borderRadius: R, lineHeight: L, closeIconColor: I, closeIconColorHover: F, closeIconColorPressed: k, closeColorHover: S, closeColorPressed: M, closeBorderRadius: A, closeIconSize: V, closeSize: J, boxShadow: W, colorPopover: oe, colorEmbedded: re, colorEmbeddedModal: G, colorEmbeddedPopover: ie, [Ce("padding", p)]: U, [Ce("fontSize", p)]: ue, [Ce("titleFontSize", p)]: Be }, common: { cubicBezierEaseInOut: ze } } = c.value, { top: Le, left: Oe, bottom: mt } = Tn(U);
    return { "--n-bezier": ze, "--n-border-radius": R, "--n-color": g, "--n-color-modal": m, "--n-color-popover": oe, "--n-color-embedded": re, "--n-color-embedded-modal": G, "--n-color-embedded-popover": ie, "--n-color-target": C, "--n-text-color": x, "--n-line-height": L, "--n-action-color": $, "--n-title-text-color": y, "--n-title-font-weight": P, "--n-close-icon-color": I, "--n-close-icon-color-hover": F, "--n-close-icon-color-pressed": k, "--n-close-color-hover": S, "--n-close-color-pressed": M, "--n-border-color": _, "--n-box-shadow": W, "--n-padding-top": Le, "--n-padding-bottom": mt, "--n-padding-left": Oe, "--n-font-size": ue, "--n-title-font-size": Be, "--n-close-size": J, "--n-close-icon-size": V, "--n-close-border-radius": A };
  }), f = o ? Kr("card", Y(() => t.size[0]), d, t) : void 0;
  return { rtlEnabled: u, mergedClsPrefix: i, mergedTheme: c, handleCloseClick: r, cssVars: o ? void 0 : d, themeClass: f == null ? void 0 : f.themeClass, onRender: f == null ? void 0 : f.onRender };
}, render() {
  const { segmented: t, bordered: r, hoverable: o, mergedClsPrefix: i, rtlEnabled: a, onRender: c, embedded: u, tag: d, $slots: f } = this;
  return c == null ? void 0 : c(), B(d, { class: [`${i}-card`, this.themeClass, u && `${i}-card--embedded`, { [`${i}-card--rtl`]: a, [`${i}-card--content${typeof t != "boolean" && t.content === "soft" ? "-soft" : ""}-segmented`]: t === true || t !== false && t.content, [`${i}-card--footer${typeof t != "boolean" && t.footer === "soft" ? "-soft" : ""}-segmented`]: t === true || t !== false && t.footer, [`${i}-card--action-segmented`]: t === true || t !== false && t.action, [`${i}-card--bordered`]: r, [`${i}-card--hoverable`]: o }], style: this.cssVars, role: this.role }, Dt(f.cover, (p) => {
    const g = this.cover ? cr([this.cover()]) : p;
    return g && B("div", { class: `${i}-card-cover`, role: "none" }, g);
  }), Dt(f.header, (p) => {
    const { title: g } = this, m = g ? cr(typeof g == "function" ? [g()] : [g]) : p;
    return m || this.closable ? B("div", { class: [`${i}-card-header`, this.headerClass], style: this.headerStyle, role: "heading" }, B("div", { class: `${i}-card-header__main`, role: "heading" }, m), Dt(f["header-extra"], (C) => {
      const x = this.headerExtra ? cr([this.headerExtra()]) : C;
      return x && B("div", { class: [`${i}-card-header__extra`, this.headerExtraClass], style: this.headerExtraStyle }, x);
    }), this.closable && B(Kh, { clsPrefix: i, class: `${i}-card-header__close`, onClick: this.handleCloseClick, focusable: this.closeFocusable, absolute: true })) : null;
  }), Dt(f.default, (p) => {
    const { content: g } = this, m = g ? cr(typeof g == "function" ? [g()] : [g]) : p;
    return m && B("div", { class: [`${i}-card__content`, this.contentClass], style: this.contentStyle, role: "none" }, m);
  }), Dt(f.footer, (p) => {
    const g = this.footer ? cr([this.footer()]) : p;
    return g && B("div", { class: [`${i}-card__footer`, this.footerClass], style: this.footerStyle, role: "none" }, g);
  }), Dt(f.action, (p) => {
    const g = this.action ? cr([this.action()]) : p;
    return g && B("div", { class: `${i}-card__action`, role: "none" }, g);
  }));
} });
function G2() {
  return { dotSize: "8px", dotColor: "rgba(255, 255, 255, .3)", dotColorActive: "rgba(255, 255, 255, 1)", dotColorFocus: "rgba(255, 255, 255, .5)", dotLineWidth: "16px", dotLineWidthActive: "24px", arrowColor: "#eee" };
}
const V2 = { name: "Carousel", common: Q, self: G2 }, K2 = { sizeSmall: "14px", sizeMedium: "16px", sizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function U2(t) {
  const { baseColor: r, inputColorDisabled: o, cardColor: i, modalColor: a, popoverColor: c, textColorDisabled: u, borderColor: d, primaryColor: f, textColor2: p, fontSizeSmall: g, fontSizeMedium: m, fontSizeLarge: C, borderRadiusSmall: x, lineHeight: y } = t;
  return Object.assign(Object.assign({}, K2), { labelLineHeight: y, fontSizeSmall: g, fontSizeMedium: m, fontSizeLarge: C, borderRadius: x, color: r, colorChecked: f, colorDisabled: o, colorDisabledChecked: o, colorTableHeader: i, colorTableHeaderModal: a, colorTableHeaderPopover: c, checkMarkColor: r, checkMarkColorDisabled: u, checkMarkColorDisabledChecked: u, border: `1px solid ${d}`, borderDisabled: `1px solid ${d}`, borderDisabledChecked: `1px solid ${d}`, borderChecked: `1px solid ${f}`, borderFocus: `1px solid ${f}`, boxShadowFocus: `0 0 0 2px ${ce(f, { alpha: 0.3 })}`, textColor: p, textColorDisabled: u });
}
const Co = { name: "Checkbox", common: Q, self: U2 };
function q2(t) {
  const { borderRadius: r, boxShadow2: o, popoverColor: i, textColor2: a, textColor3: c, primaryColor: u, textColorDisabled: d, dividerColor: f, hoverColor: p, fontSizeMedium: g, heightMedium: m } = t;
  return { menuBorderRadius: r, menuColor: i, menuBoxShadow: o, menuDividerColor: f, menuHeight: "calc(var(--n-option-height) * 6.6)", optionArrowColor: c, optionHeight: m, optionFontSize: g, optionColorHover: p, optionTextColor: a, optionTextColorActive: u, optionTextColorDisabled: d, optionCheckMarkColor: u, loadingColor: u, columnWidth: "180px" };
}
const Y2 = { name: "Cascader", common: Q, peers: { InternalSelectMenu: ai, InternalSelection: Zs, Scrollbar: St, Checkbox: Co, Empty: fn }, self: q2 };
function X2(t) {
  const { textColor2: r, fontSize: o, fontWeightStrong: i, textColor3: a } = t;
  return { textColor: r, fontSize: o, fontWeightStrong: i, "mono-3": "#a0a1a7", "hue-1": "#0184bb", "hue-2": "#4078f2", "hue-3": "#a626a4", "hue-4": "#50a14f", "hue-5": "#e45649", "hue-5-2": "#c91243", "hue-6": "#986801", "hue-6-2": "#c18401", lineNumberTextColor: a };
}
const ip = { name: "Code", common: Q, self: X2 };
function Z2(t) {
  const { fontWeight: r, textColor1: o, textColor2: i, textColorDisabled: a, dividerColor: c, fontSize: u } = t;
  return { titleFontSize: u, titleFontWeight: r, dividerColor: c, titleTextColor: o, titleTextColorDisabled: a, fontSize: u, textColor: i, arrowColor: i, arrowColorDisabled: a, itemMargin: "16px 0 0 0", titlePadding: "16px 0 0 0" };
}
const Q2 = { name: "Collapse", common: Q, self: Z2 };
function J2(t) {
  const { cubicBezierEaseInOut: r } = t;
  return { bezier: r };
}
const e$ = { name: "CollapseTransition", common: Q, self: J2 };
function t$(t) {
  const { fontSize: r, boxShadow2: o, popoverColor: i, textColor2: a, borderRadius: c, borderColor: u, heightSmall: d, heightMedium: f, heightLarge: p, fontSizeSmall: g, fontSizeMedium: m, fontSizeLarge: C, dividerColor: x } = t;
  return { panelFontSize: r, boxShadow: o, color: i, textColor: a, borderRadius: c, border: `1px solid ${u}`, heightSmall: d, heightMedium: f, heightLarge: p, fontSizeSmall: g, fontSizeMedium: m, fontSizeLarge: C, dividerColor: x };
}
const r$ = { name: "ColorPicker", common: Q, peers: { Input: Jt, Button: Bt }, self: t$ }, n$ = { abstract: Boolean, bordered: { type: Boolean, default: void 0 }, clsPrefix: String, locale: Object, dateLocale: Object, namespace: String, rtl: Array, tag: { type: String, default: "div" }, hljs: Object, katex: Object, theme: Object, themeOverrides: Object, componentOptions: Object, icons: Object, breakpoints: Object, preflightStyleDisabled: Boolean, styleMountTarget: Object, inlineThemeDisabled: { type: Boolean, default: void 0 }, as: { type: String, validator: () => (Ln("config-provider", "`as` is deprecated, please use `tag` instead."), true), default: void 0 } }, lE = Ee({ name: "ConfigProvider", alias: ["App"], props: n$, setup(t) {
  const r = He(Vr, null), o = Y(() => {
    const { theme: P } = t;
    if (P === null) return;
    const _ = r == null ? void 0 : r.mergedThemeRef.value;
    return P === void 0 ? _ : _ === void 0 ? P : Object.assign({}, _, P);
  }), i = Y(() => {
    const { themeOverrides: P } = t;
    if (P !== null) {
      if (P === void 0) return r == null ? void 0 : r.mergedThemeOverridesRef.value;
      {
        const _ = r == null ? void 0 : r.mergedThemeOverridesRef.value;
        return _ === void 0 ? P : Rn.merge({}, _, P);
      }
    }
  }), a = ur(() => {
    const { namespace: P } = t;
    return P === void 0 ? r == null ? void 0 : r.mergedNamespaceRef.value : P;
  }), c = ur(() => {
    const { bordered: P } = t;
    return P === void 0 ? r == null ? void 0 : r.mergedBorderedRef.value : P;
  }), u = Y(() => {
    const { icons: P } = t;
    return P === void 0 ? r == null ? void 0 : r.mergedIconsRef.value : P;
  }), d = Y(() => {
    const { componentOptions: P } = t;
    return P !== void 0 ? P : r == null ? void 0 : r.mergedComponentPropsRef.value;
  }), f = Y(() => {
    const { clsPrefix: P } = t;
    return P !== void 0 ? P : r ? r.mergedClsPrefixRef.value : Cl;
  }), p = Y(() => {
    var P;
    const { rtl: _ } = t;
    if (_ === void 0) return r == null ? void 0 : r.mergedRtlRef.value;
    const $ = {};
    for (const R of _) $[R.name] = Rd(R), (P = R.peers) === null || P === void 0 || P.forEach((L) => {
      L.name in $ || ($[L.name] = Rd(L));
    });
    return $;
  }), g = Y(() => t.breakpoints || (r == null ? void 0 : r.mergedBreakpointsRef.value)), m = t.inlineThemeDisabled || (r == null ? void 0 : r.inlineThemeDisabled), C = t.preflightStyleDisabled || (r == null ? void 0 : r.preflightStyleDisabled), x = t.styleMountTarget || (r == null ? void 0 : r.styleMountTarget), y = Y(() => {
    const { value: P } = o, { value: _ } = i, $ = _ && Object.keys(_).length !== 0, R = P == null ? void 0 : P.name;
    return R ? $ ? `${R}-${Zo(JSON.stringify(i.value))}` : R : $ ? Zo(JSON.stringify(i.value)) : "";
  });
  return dt(Vr, { mergedThemeHashRef: y, mergedBreakpointsRef: g, mergedRtlRef: p, mergedIconsRef: u, mergedComponentPropsRef: d, mergedBorderedRef: c, mergedNamespaceRef: a, mergedClsPrefixRef: f, mergedLocaleRef: Y(() => {
    const { locale: P } = t;
    if (P !== null) return P === void 0 ? r == null ? void 0 : r.mergedLocaleRef.value : P;
  }), mergedDateLocaleRef: Y(() => {
    const { dateLocale: P } = t;
    if (P !== null) return P === void 0 ? r == null ? void 0 : r.mergedDateLocaleRef.value : P;
  }), mergedHljsRef: Y(() => {
    const { hljs: P } = t;
    return P === void 0 ? r == null ? void 0 : r.mergedHljsRef.value : P;
  }), mergedKatexRef: Y(() => {
    const { katex: P } = t;
    return P === void 0 ? r == null ? void 0 : r.mergedKatexRef.value : P;
  }), mergedThemeRef: o, mergedThemeOverridesRef: i, inlineThemeDisabled: m || false, preflightStyleDisabled: C || false, styleMountTarget: x }), { mergedClsPrefix: f, mergedBordered: c, mergedNamespace: a, mergedTheme: o, mergedThemeOverrides: i };
}, render() {
  var t, r, o, i;
  return this.abstract ? (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o) : B(this.as || this.tag, { class: `${this.mergedClsPrefix || Cl}-config-provider` }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t));
} });
function o$(t) {
  const { boxShadow2: r } = t;
  return { menuBoxShadow: r };
}
const lp = { name: "Popselect", common: Q, peers: { Popover: hn, InternalSelectMenu: ai }, self: o$ };
function i$(t) {
  const { boxShadow2: r } = t;
  return { menuBoxShadow: r };
}
const ap = { name: "Select", common: Q, peers: { InternalSelection: Zs, InternalSelectMenu: ai }, self: i$ }, l$ = { itemPaddingSmall: "0 4px", itemMarginSmall: "0 0 0 8px", itemMarginSmallRtl: "0 8px 0 0", itemPaddingMedium: "0 4px", itemMarginMedium: "0 0 0 8px", itemMarginMediumRtl: "0 8px 0 0", itemPaddingLarge: "0 4px", itemMarginLarge: "0 0 0 8px", itemMarginLargeRtl: "0 8px 0 0", buttonIconSizeSmall: "14px", buttonIconSizeMedium: "16px", buttonIconSizeLarge: "18px", inputWidthSmall: "60px", selectWidthSmall: "unset", inputMarginSmall: "0 0 0 8px", inputMarginSmallRtl: "0 8px 0 0", selectMarginSmall: "0 0 0 8px", prefixMarginSmall: "0 8px 0 0", suffixMarginSmall: "0 0 0 8px", inputWidthMedium: "60px", selectWidthMedium: "unset", inputMarginMedium: "0 0 0 8px", inputMarginMediumRtl: "0 8px 0 0", selectMarginMedium: "0 0 0 8px", prefixMarginMedium: "0 8px 0 0", suffixMarginMedium: "0 0 0 8px", inputWidthLarge: "60px", selectWidthLarge: "unset", inputMarginLarge: "0 0 0 8px", inputMarginLargeRtl: "0 8px 0 0", selectMarginLarge: "0 0 0 8px", prefixMarginLarge: "0 8px 0 0", suffixMarginLarge: "0 0 0 8px" };
function a$(t) {
  const { textColor2: r, primaryColor: o, primaryColorHover: i, primaryColorPressed: a, inputColorDisabled: c, textColorDisabled: u, borderColor: d, borderRadius: f, fontSizeTiny: p, fontSizeSmall: g, fontSizeMedium: m, heightTiny: C, heightSmall: x, heightMedium: y } = t;
  return Object.assign(Object.assign({}, l$), { buttonColor: "#0000", buttonColorHover: "#0000", buttonColorPressed: "#0000", buttonBorder: `1px solid ${d}`, buttonBorderHover: `1px solid ${d}`, buttonBorderPressed: `1px solid ${d}`, buttonIconColor: r, buttonIconColorHover: r, buttonIconColorPressed: r, itemTextColor: r, itemTextColorHover: i, itemTextColorPressed: a, itemTextColorActive: o, itemTextColorDisabled: u, itemColor: "#0000", itemColorHover: "#0000", itemColorPressed: "#0000", itemColorActive: "#0000", itemColorActiveHover: "#0000", itemColorDisabled: c, itemBorder: "1px solid #0000", itemBorderHover: "1px solid #0000", itemBorderPressed: "1px solid #0000", itemBorderActive: `1px solid ${o}`, itemBorderDisabled: `1px solid ${d}`, itemBorderRadius: f, itemSizeSmall: C, itemSizeMedium: x, itemSizeLarge: y, itemFontSizeSmall: p, itemFontSizeMedium: g, itemFontSizeLarge: m, jumperFontSizeSmall: p, jumperFontSizeMedium: g, jumperFontSizeLarge: m, jumperTextColor: r, jumperTextColorDisabled: u });
}
const sp = { name: "Pagination", common: Q, peers: { Select: ap, Input: Jt, Popselect: lp }, self: a$ }, s$ = { padding: "4px 0", optionIconSizeSmall: "14px", optionIconSizeMedium: "16px", optionIconSizeLarge: "16px", optionIconSizeHuge: "18px", optionSuffixWidthSmall: "14px", optionSuffixWidthMedium: "14px", optionSuffixWidthLarge: "16px", optionSuffixWidthHuge: "16px", optionIconSuffixWidthSmall: "32px", optionIconSuffixWidthMedium: "32px", optionIconSuffixWidthLarge: "36px", optionIconSuffixWidthHuge: "36px", optionPrefixWidthSmall: "14px", optionPrefixWidthMedium: "14px", optionPrefixWidthLarge: "16px", optionPrefixWidthHuge: "16px", optionIconPrefixWidthSmall: "36px", optionIconPrefixWidthMedium: "36px", optionIconPrefixWidthLarge: "40px", optionIconPrefixWidthHuge: "40px" };
function c$(t) {
  const { primaryColor: r, textColor2: o, dividerColor: i, hoverColor: a, popoverColor: c, invertedColor: u, borderRadius: d, fontSizeSmall: f, fontSizeMedium: p, fontSizeLarge: g, fontSizeHuge: m, heightSmall: C, heightMedium: x, heightLarge: y, heightHuge: P, textColor3: _, opacityDisabled: $ } = t;
  return Object.assign(Object.assign({}, s$), { optionHeightSmall: C, optionHeightMedium: x, optionHeightLarge: y, optionHeightHuge: P, borderRadius: d, fontSizeSmall: f, fontSizeMedium: p, fontSizeLarge: g, fontSizeHuge: m, optionTextColor: o, optionTextColorHover: o, optionTextColorActive: r, optionTextColorChildActive: r, color: c, dividerColor: i, suffixColor: o, prefixColor: o, optionColorHover: a, optionColorActive: ce(r, { alpha: 0.1 }), groupHeaderTextColor: _, optionTextColorInverted: "#BBB", optionTextColorHoverInverted: "#FFF", optionTextColorActiveInverted: "#FFF", optionTextColorChildActiveInverted: "#FFF", colorInverted: u, dividerColorInverted: "#BBB", suffixColorInverted: "#BBB", prefixColorInverted: "#BBB", optionColorHoverInverted: r, optionColorActiveInverted: r, groupHeaderTextColorInverted: "#AAA", optionOpacityDisabled: $ });
}
const El = { name: "Dropdown", common: Q, peers: { Popover: hn }, self: c$ }, u$ = { padding: "8px 14px" };
function d$(t) {
  const { borderRadius: r, boxShadow2: o, baseColor: i } = t;
  return Object.assign(Object.assign({}, u$), { borderRadius: r, boxShadow: o, color: ne(i, "rgba(0, 0, 0, .85)"), textColor: i });
}
const si = { name: "Tooltip", common: Q, peers: { Popover: hn }, self: d$ }, cp = { name: "Ellipsis", common: Q, peers: { Tooltip: si } }, f$ = { radioSizeSmall: "14px", radioSizeMedium: "16px", radioSizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function h$(t) {
  const { borderColor: r, primaryColor: o, baseColor: i, textColorDisabled: a, inputColorDisabled: c, textColor2: u, opacityDisabled: d, borderRadius: f, fontSizeSmall: p, fontSizeMedium: g, fontSizeLarge: m, heightSmall: C, heightMedium: x, heightLarge: y, lineHeight: P } = t;
  return Object.assign(Object.assign({}, f$), { labelLineHeight: P, buttonHeightSmall: C, buttonHeightMedium: x, buttonHeightLarge: y, fontSizeSmall: p, fontSizeMedium: g, fontSizeLarge: m, boxShadow: `inset 0 0 0 1px ${r}`, boxShadowActive: `inset 0 0 0 1px ${o}`, boxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${ce(o, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${o}`, boxShadowDisabled: `inset 0 0 0 1px ${r}`, color: i, colorDisabled: c, colorActive: "#0000", textColor: u, textColorDisabled: a, dotColorActive: o, dotColorDisabled: r, buttonBorderColor: r, buttonBorderColorActive: o, buttonBorderColorHover: r, buttonColor: i, buttonColorActive: i, buttonTextColor: u, buttonTextColorActive: o, buttonTextColorHover: o, opacityDisabled: d, buttonBoxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${ce(o, { alpha: 0.3 })}`, buttonBoxShadowHover: "inset 0 0 0 1px #0000", buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: f });
}
const up = { name: "Radio", common: Q, self: h$ }, p$ = { thPaddingSmall: "8px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "8px", tdPaddingMedium: "12px", tdPaddingLarge: "12px", sorterSize: "15px", resizableContainerSize: "8px", resizableSize: "2px", filterSize: "15px", paginationMargin: "12px 0 0 0", emptyPadding: "48px 0", actionPadding: "8px 12px", actionButtonMargin: "0 8px 0 0" };
function g$(t) {
  const { cardColor: r, modalColor: o, popoverColor: i, textColor2: a, textColor1: c, tableHeaderColor: u, tableColorHover: d, iconColor: f, primaryColor: p, fontWeightStrong: g, borderRadius: m, lineHeight: C, fontSizeSmall: x, fontSizeMedium: y, fontSizeLarge: P, dividerColor: _, heightSmall: $, opacityDisabled: R, tableColorStriped: L } = t;
  return Object.assign(Object.assign({}, p$), { actionDividerColor: _, lineHeight: C, borderRadius: m, fontSizeSmall: x, fontSizeMedium: y, fontSizeLarge: P, borderColor: ne(r, _), tdColorHover: ne(r, d), tdColorSorting: ne(r, d), tdColorStriped: ne(r, L), thColor: ne(r, u), thColorHover: ne(ne(r, u), d), thColorSorting: ne(ne(r, u), d), tdColor: r, tdTextColor: a, thTextColor: c, thFontWeight: g, thButtonColorHover: d, thIconColor: f, thIconColorActive: p, borderColorModal: ne(o, _), tdColorHoverModal: ne(o, d), tdColorSortingModal: ne(o, d), tdColorStripedModal: ne(o, L), thColorModal: ne(o, u), thColorHoverModal: ne(ne(o, u), d), thColorSortingModal: ne(ne(o, u), d), tdColorModal: o, borderColorPopover: ne(i, _), tdColorHoverPopover: ne(i, d), tdColorSortingPopover: ne(i, d), tdColorStripedPopover: ne(i, L), thColorPopover: ne(i, u), thColorHoverPopover: ne(ne(i, u), d), thColorSortingPopover: ne(ne(i, u), d), tdColorPopover: i, boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)", boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)", loadingColor: p, loadingSize: $, opacityLoading: R });
}
const v$ = { name: "DataTable", common: Q, peers: { Button: Bt, Checkbox: Co, Radio: up, Pagination: sp, Scrollbar: St, Empty: fn, Popover: hn, Ellipsis: cp, Dropdown: El }, self: g$ }, m$ = Object.assign(Object.assign({}, Tl), at.props), aE = Ee({ name: "Tooltip", props: m$, slots: Object, __popover__: true, setup(t) {
  const { mergedClsPrefixRef: r } = zr(t), o = at("Tooltip", "-tooltip", void 0, si, t, r), i = se(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    i.value.syncPosition();
  }, setShow(c) {
    i.value.setShow(c);
  } }), { popoverRef: i, mergedTheme: o, popoverThemeOverrides: Y(() => o.value.self) });
}, render() {
  const { mergedTheme: t, internalExtraClass: r } = this;
  return B(rp, Object.assign(Object.assign({}, this.$props), { theme: t.peers.Popover, themeOverrides: t.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: r.concat("tooltip"), ref: "popoverRef" }), this.$slots);
} }), ec = "n-dropdown-menu", zl = "n-dropdown", jf = "n-dropdown-option", dp = Ee({ name: "DropdownDivider", props: { clsPrefix: { type: String, required: true } }, render() {
  return B("div", { class: `${this.clsPrefix}-dropdown-divider` });
} }), b$ = Ee({ name: "DropdownGroupHeader", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  const { showIconRef: t, hasSubmenuRef: r } = He(ec), { renderLabelRef: o, labelFieldRef: i, nodePropsRef: a, renderOptionRef: c } = He(zl);
  return { labelField: i, showIcon: t, hasSubmenu: r, renderLabel: o, nodeProps: a, renderOption: c };
}, render() {
  var t;
  const { clsPrefix: r, hasSubmenu: o, showIcon: i, nodeProps: a, renderLabel: c, renderOption: u } = this, { rawNode: d } = this.tmNode, f = B("div", Object.assign({ class: `${r}-dropdown-option` }, a == null ? void 0 : a(d)), B("div", { class: `${r}-dropdown-option-body ${r}-dropdown-option-body--group` }, B("div", { "data-dropdown-option": true, class: [`${r}-dropdown-option-body__prefix`, i && `${r}-dropdown-option-body__prefix--show-icon`] }, $r(d.icon)), B("div", { class: `${r}-dropdown-option-body__label`, "data-dropdown-option": true }, c ? c(d) : $r((t = d.title) !== null && t !== void 0 ? t : d[this.labelField])), B("div", { class: [`${r}-dropdown-option-body__suffix`, o && `${r}-dropdown-option-body__suffix--has-submenu`], "data-dropdown-option": true })));
  return u ? u({ node: f, option: d }) : f;
} });
function x$(t) {
  const { textColorBase: r, opacity1: o, opacity2: i, opacity3: a, opacity4: c, opacity5: u } = t;
  return { color: r, opacity1Depth: o, opacity2Depth: i, opacity3Depth: a, opacity4Depth: c, opacity5Depth: u };
}
const fp = { name: "Icon", common: Q, self: x$ }, C$ = ye("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [pe("color-transition", { transition: "color .3s var(--n-bezier)" }), pe("depth", { color: "var(--n-color)" }, [X("svg", { opacity: "var(--n-opacity)", transition: "opacity .3s var(--n-bezier)" })]), X("svg", { height: "1em", width: "1em" })]), y$ = Object.assign(Object.assign({}, at.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), w$ = Ee({ _n_icon__: true, name: "Icon", inheritAttrs: false, props: y$, setup(t) {
  const { mergedClsPrefixRef: r, inlineThemeDisabled: o } = zr(t), i = at("Icon", "-icon", C$, fp, t, r), a = Y(() => {
    const { depth: u } = t, { common: { cubicBezierEaseInOut: d }, self: f } = i.value;
    if (u !== void 0) {
      const { color: p, [`opacity${u}Depth`]: g } = f;
      return { "--n-bezier": d, "--n-color": p, "--n-opacity": g };
    }
    return { "--n-bezier": d, "--n-color": "", "--n-opacity": "" };
  }), c = o ? Kr("icon", Y(() => `${t.depth || "d"}`), a, t) : void 0;
  return { mergedClsPrefix: r, mergedStyle: Y(() => {
    const { size: u, color: d } = t;
    return { fontSize: gl(u), color: d };
  }), cssVars: o ? void 0 : a, themeClass: c == null ? void 0 : c.themeClass, onRender: c == null ? void 0 : c.onRender };
}, render() {
  var t;
  const { $parent: r, depth: o, mergedClsPrefix: i, component: a, onRender: c, themeClass: u } = this;
  return !((t = r == null ? void 0 : r.$options) === null || t === void 0) && t._n_icon__ && Ln("icon", "don't wrap `n-icon` inside `n-icon`"), c == null ? void 0 : c(), B("i", bo(this.$attrs, { role: "img", class: [`${i}-icon`, u, { [`${i}-icon--depth`]: o, [`${i}-icon--color-transition`]: o !== void 0 }], style: [this.cssVars, this.mergedStyle] }), a ? B(a) : this.$slots);
} });
function Is(t, r) {
  return t.type === "submenu" || t.type === void 0 && t[r] !== void 0;
}
function S$(t) {
  return t.type === "group";
}
function hp(t) {
  return t.type === "divider";
}
function $$(t) {
  return t.type === "render";
}
const pp = Ee({ name: "DropdownOption", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null }, placement: { type: String, default: "right-start" }, props: Object, scrollable: Boolean }, setup(t) {
  const r = He(zl), { hoverKeyRef: o, keyboardKeyRef: i, lastToggledSubmenuKeyRef: a, pendingKeyPathRef: c, activeKeyPathRef: u, animatedRef: d, mergedShowRef: f, renderLabelRef: p, renderIconRef: g, labelFieldRef: m, childrenFieldRef: C, renderOptionRef: x, nodePropsRef: y, menuPropsRef: P } = r, _ = He(jf, null), $ = He(ec), R = He(ni), L = Y(() => t.tmNode.rawNode), I = Y(() => {
    const { value: U } = C;
    return Is(t.tmNode.rawNode, U);
  }), F = Y(() => {
    const { disabled: U } = t.tmNode;
    return U;
  }), k = Y(() => {
    if (!I.value) return false;
    const { key: U, disabled: ue } = t.tmNode;
    if (ue) return false;
    const { value: Be } = o, { value: ze } = i, { value: Le } = a, { value: Oe } = c;
    return Be !== null ? Oe.includes(U) : ze !== null ? Oe.includes(U) && Oe[Oe.length - 1] !== U : Le !== null ? Oe.includes(U) : false;
  }), S = Y(() => i.value === null && !d.value), M = Yy(k, 300, S), A = Y(() => !!(_ == null ? void 0 : _.enteringSubmenuRef.value)), V = se(false);
  dt(jf, { enteringSubmenuRef: V });
  function J() {
    V.value = true;
  }
  function W() {
    V.value = false;
  }
  function oe() {
    const { parentKey: U, tmNode: ue } = t;
    ue.disabled || f.value && (a.value = U, i.value = null, o.value = ue.key);
  }
  function re() {
    const { tmNode: U } = t;
    U.disabled || f.value && o.value !== U.key && oe();
  }
  function G(U) {
    if (t.tmNode.disabled || !f.value) return;
    const { relatedTarget: ue } = U;
    ue && !Zd({ target: ue }, "dropdownOption") && !Zd({ target: ue }, "scrollbarRail") && (o.value = null);
  }
  function ie() {
    const { value: U } = I, { tmNode: ue } = t;
    f.value && !U && !ue.disabled && (r.doSelect(ue.key, ue.rawNode), r.doUpdateShow(false));
  }
  return { labelField: m, renderLabel: p, renderIcon: g, siblingHasIcon: $.showIconRef, siblingHasSubmenu: $.hasSubmenuRef, menuProps: P, popoverBody: R, animated: d, mergedShowSubmenu: Y(() => M.value && !A.value), rawNode: L, hasSubmenu: I, pending: ur(() => {
    const { value: U } = c, { key: ue } = t.tmNode;
    return U.includes(ue);
  }), childActive: ur(() => {
    const { value: U } = u, { key: ue } = t.tmNode, Be = U.findIndex((ze) => ue === ze);
    return Be === -1 ? false : Be < U.length - 1;
  }), active: ur(() => {
    const { value: U } = u, { key: ue } = t.tmNode, Be = U.findIndex((ze) => ue === ze);
    return Be === -1 ? false : Be === U.length - 1;
  }), mergedDisabled: F, renderOption: x, nodeProps: y, handleClick: ie, handleMouseMove: re, handleMouseEnter: oe, handleMouseLeave: G, handleSubmenuBeforeEnter: J, handleSubmenuAfterEnter: W };
}, render() {
  var t, r;
  const { animated: o, rawNode: i, mergedShowSubmenu: a, clsPrefix: c, siblingHasIcon: u, siblingHasSubmenu: d, renderLabel: f, renderIcon: p, renderOption: g, nodeProps: m, props: C, scrollable: x } = this;
  let y = null;
  if (a) {
    const R = (t = this.menuProps) === null || t === void 0 ? void 0 : t.call(this, i, i.children);
    y = B(gp, Object.assign({}, R, { clsPrefix: c, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
  }
  const P = { class: [`${c}-dropdown-option-body`, this.pending && `${c}-dropdown-option-body--pending`, this.active && `${c}-dropdown-option-body--active`, this.childActive && `${c}-dropdown-option-body--child-active`, this.mergedDisabled && `${c}-dropdown-option-body--disabled`], onMousemove: this.handleMouseMove, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onClick: this.handleClick }, _ = m == null ? void 0 : m(i), $ = B("div", Object.assign({ class: [`${c}-dropdown-option`, _ == null ? void 0 : _.class], "data-dropdown-option": true }, _), B("div", bo(P, C), [B("div", { class: [`${c}-dropdown-option-body__prefix`, u && `${c}-dropdown-option-body__prefix--show-icon`] }, [p ? p(i) : $r(i.icon)]), B("div", { "data-dropdown-option": true, class: `${c}-dropdown-option-body__label` }, f ? f(i) : $r((r = i[this.labelField]) !== null && r !== void 0 ? r : i.title)), B("div", { "data-dropdown-option": true, class: [`${c}-dropdown-option-body__suffix`, d && `${c}-dropdown-option-body__suffix--has-submenu`] }, this.hasSubmenu ? B(w$, null, { default: () => B(Jw, null) }) : null)]), this.hasSubmenu ? B(_h, null, { default: () => [B(Th, null, { default: () => B("div", { class: `${c}-dropdown-offset-container` }, B(Rh, { show: this.mergedShowSubmenu, placement: this.placement, to: x && this.popoverBody || void 0, teleportDisabled: !x }, { default: () => B("div", { class: `${c}-dropdown-menu-wrapper` }, o ? B(cn, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, { default: () => y }) : y) })) })] }) : null);
  return g ? g({ node: $, option: i }) : $;
} }), P$ = Ee({ name: "NDropdownGroup", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null } }, render() {
  const { tmNode: t, parentKey: r, clsPrefix: o } = this, { children: i } = t;
  return B(Hn, null, B(b$, { clsPrefix: o, tmNode: t, key: t.key }), i == null ? void 0 : i.map((a) => {
    const { rawNode: c } = a;
    return c.show === false ? null : hp(c) ? B(dp, { clsPrefix: o, key: a.key }) : a.isGroup ? (Ln("dropdown", "`group` node is not allowed to be put in `group` node."), null) : B(pp, { clsPrefix: o, tmNode: a, parentKey: r, key: a.key });
  }));
} }), _$ = Ee({ name: "DropdownRenderOption", props: { tmNode: { type: Object, required: true } }, render() {
  const { rawNode: { render: t, props: r } } = this.tmNode;
  return B("div", r, [t == null ? void 0 : t()]);
} }), gp = Ee({ name: "DropdownMenu", props: { scrollable: Boolean, showArrow: Boolean, arrowStyle: [String, Object], clsPrefix: { type: String, required: true }, tmNodes: { type: Array, default: () => [] }, parentKey: { type: [String, Number], default: null } }, setup(t) {
  const { renderIconRef: r, childrenFieldRef: o } = He(zl);
  dt(ec, { showIconRef: Y(() => {
    const a = r.value;
    return t.tmNodes.some((c) => {
      var u;
      if (c.isGroup) return (u = c.children) === null || u === void 0 ? void 0 : u.some(({ rawNode: f }) => a ? a(f) : f.icon);
      const { rawNode: d } = c;
      return a ? a(d) : d.icon;
    });
  }), hasSubmenuRef: Y(() => {
    const { value: a } = o;
    return t.tmNodes.some((c) => {
      var u;
      if (c.isGroup) return (u = c.children) === null || u === void 0 ? void 0 : u.some(({ rawNode: f }) => Is(f, a));
      const { rawNode: d } = c;
      return Is(d, a);
    });
  }) });
  const i = se(null);
  return dt(Pl, null), dt($l, null), dt(ni, i), { bodyRef: i };
}, render() {
  const { parentKey: t, clsPrefix: r, scrollable: o } = this, i = this.tmNodes.map((a) => {
    const { rawNode: c } = a;
    return c.show === false ? null : $$(c) ? B(_$, { tmNode: a, key: a.key }) : hp(c) ? B(dp, { clsPrefix: r, key: a.key }) : S$(c) ? B(P$, { clsPrefix: r, tmNode: a, parentKey: t, key: a.key }) : B(pp, { clsPrefix: r, tmNode: a, parentKey: t, key: a.key, props: c.props, scrollable: o });
  });
  return B("div", { class: [`${r}-dropdown-menu`, o && `${r}-dropdown-menu--scrollable`], ref: "bodyRef" }, o ? B(Xh, { contentClass: `${r}-dropdown-menu__content` }, { default: () => i }) : i, this.showArrow ? tp({ clsPrefix: r, arrowStyle: this.arrowStyle, arrowClass: void 0, arrowWrapperClass: void 0, arrowWrapperStyle: void 0 }) : null);
} }), T$ = ye("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Jh(), ye("dropdown-option", `
 position: relative;
 `, [X("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [X("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), ye("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [X("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), an("disabled", [pe("pending", `
 color: var(--n-option-text-color-hover);
 `, [ae("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), X("&::before", "background-color: var(--n-option-color-hover);")]), pe("active", `
 color: var(--n-option-text-color-active);
 `, [ae("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), X("&::before", "background-color: var(--n-option-color-active);")]), pe("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [ae("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), pe("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), pe("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [ae("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [pe("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), ae("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [pe("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), ye("icon", `
 font-size: var(--n-option-icon-size);
 `)]), ae("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), ae("suffix", `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `, [pe("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), ye("icon", `
 font-size: var(--n-option-icon-size);
 `)]), ye("dropdown-menu", "pointer-events: all;")]), ye("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), ye("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), ye("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), X(">", [ye("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), an("scrollable", `
 padding: var(--n-padding);
 `), pe("scrollable", [ae("content", `
 padding: var(--n-padding);
 `)])]), E$ = { animated: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, size: { type: String, default: "medium" }, inverted: Boolean, placement: { type: String, default: "bottom" }, onSelect: [Function, Array], options: { type: Array, default: () => [] }, menuProps: Function, showArrow: Boolean, renderLabel: Function, renderIcon: Function, renderOption: Function, nodeProps: Function, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, value: [String, Number] }, z$ = Object.keys(Tl), R$ = Object.assign(Object.assign(Object.assign({}, Tl), E$), at.props), sE = Ee({ name: "Dropdown", inheritAttrs: false, props: R$, setup(t) {
  const r = se(false), o = Ch(Je(t, "show"), r), i = Y(() => {
    const { keyField: W, childrenField: oe } = t;
    return kS(t.options, { getKey(re) {
      return re[W];
    }, getDisabled(re) {
      return re.disabled === true;
    }, getIgnored(re) {
      return re.type === "divider" || re.type === "render";
    }, getChildren(re) {
      return re[oe];
    } });
  }), a = Y(() => i.value.treeNodes), c = se(null), u = se(null), d = se(null), f = Y(() => {
    var W, oe, re;
    return (re = (oe = (W = c.value) !== null && W !== void 0 ? W : u.value) !== null && oe !== void 0 ? oe : d.value) !== null && re !== void 0 ? re : null;
  }), p = Y(() => i.value.getPath(f.value).keyPath), g = Y(() => i.value.getPath(t.value).keyPath), m = ur(() => t.keyboard && o.value);
  Ky({ keydown: { ArrowUp: { prevent: true, handler: F }, ArrowRight: { prevent: true, handler: I }, ArrowDown: { prevent: true, handler: k }, ArrowLeft: { prevent: true, handler: L }, Enter: { prevent: true, handler: S }, Escape: R } }, m);
  const { mergedClsPrefixRef: C, inlineThemeDisabled: x } = zr(t), y = at("Dropdown", "-dropdown", T$, El, t, C);
  dt(zl, { labelFieldRef: Je(t, "labelField"), childrenFieldRef: Je(t, "childrenField"), renderLabelRef: Je(t, "renderLabel"), renderIconRef: Je(t, "renderIcon"), hoverKeyRef: c, keyboardKeyRef: u, lastToggledSubmenuKeyRef: d, pendingKeyPathRef: p, activeKeyPathRef: g, animatedRef: Je(t, "animated"), mergedShowRef: o, nodePropsRef: Je(t, "nodeProps"), renderOptionRef: Je(t, "renderOption"), menuPropsRef: Je(t, "menuProps"), doSelect: P, doUpdateShow: _ }), ft(o, (W) => {
    !t.animated && !W && $();
  });
  function P(W, oe) {
    const { onSelect: re } = t;
    re && Wt(re, W, oe);
  }
  function _(W) {
    const { "onUpdate:show": oe, onUpdateShow: re } = t;
    oe && Wt(oe, W), re && Wt(re, W), r.value = W;
  }
  function $() {
    c.value = null, u.value = null, d.value = null;
  }
  function R() {
    _(false);
  }
  function L() {
    A("left");
  }
  function I() {
    A("right");
  }
  function F() {
    A("up");
  }
  function k() {
    A("down");
  }
  function S() {
    const W = M();
    (W == null ? void 0 : W.isLeaf) && o.value && (P(W.key, W.rawNode), _(false));
  }
  function M() {
    var W;
    const { value: oe } = i, { value: re } = f;
    return !oe || re === null ? null : (W = oe.getNode(re)) !== null && W !== void 0 ? W : null;
  }
  function A(W) {
    const { value: oe } = f, { value: { getFirstAvailableNode: re } } = i;
    let G = null;
    if (oe === null) {
      const ie = re();
      ie !== null && (G = ie.key);
    } else {
      const ie = M();
      if (ie) {
        let U;
        switch (W) {
          case "down":
            U = ie.getNext();
            break;
          case "up":
            U = ie.getPrev();
            break;
          case "right":
            U = ie.getChild();
            break;
          case "left":
            U = ie.getParent();
            break;
        }
        U && (G = U.key);
      }
    }
    G !== null && (c.value = null, u.value = G);
  }
  const V = Y(() => {
    const { size: W, inverted: oe } = t, { common: { cubicBezierEaseInOut: re }, self: G } = y.value, { padding: ie, dividerColor: U, borderRadius: ue, optionOpacityDisabled: Be, [Ce("optionIconSuffixWidth", W)]: ze, [Ce("optionSuffixWidth", W)]: Le, [Ce("optionIconPrefixWidth", W)]: Oe, [Ce("optionPrefixWidth", W)]: mt, [Ce("fontSize", W)]: xt, [Ce("optionHeight", W)]: Tt, [Ce("optionIconSize", W)]: Pe } = G, O = { "--n-bezier": re, "--n-font-size": xt, "--n-padding": ie, "--n-border-radius": ue, "--n-option-height": Tt, "--n-option-prefix-width": mt, "--n-option-icon-prefix-width": Oe, "--n-option-suffix-width": Le, "--n-option-icon-suffix-width": ze, "--n-option-icon-size": Pe, "--n-divider-color": U, "--n-option-opacity-disabled": Be };
    return oe ? (O["--n-color"] = G.colorInverted, O["--n-option-color-hover"] = G.optionColorHoverInverted, O["--n-option-color-active"] = G.optionColorActiveInverted, O["--n-option-text-color"] = G.optionTextColorInverted, O["--n-option-text-color-hover"] = G.optionTextColorHoverInverted, O["--n-option-text-color-active"] = G.optionTextColorActiveInverted, O["--n-option-text-color-child-active"] = G.optionTextColorChildActiveInverted, O["--n-prefix-color"] = G.prefixColorInverted, O["--n-suffix-color"] = G.suffixColorInverted, O["--n-group-header-text-color"] = G.groupHeaderTextColorInverted) : (O["--n-color"] = G.color, O["--n-option-color-hover"] = G.optionColorHover, O["--n-option-color-active"] = G.optionColorActive, O["--n-option-text-color"] = G.optionTextColor, O["--n-option-text-color-hover"] = G.optionTextColorHover, O["--n-option-text-color-active"] = G.optionTextColorActive, O["--n-option-text-color-child-active"] = G.optionTextColorChildActive, O["--n-prefix-color"] = G.prefixColor, O["--n-suffix-color"] = G.suffixColor, O["--n-group-header-text-color"] = G.groupHeaderTextColor), O;
  }), J = x ? Kr("dropdown", Y(() => `${t.size[0]}${t.inverted ? "i" : ""}`), V, t) : void 0;
  return { mergedClsPrefix: C, mergedTheme: y, tmNodes: a, mergedShow: o, handleAfterLeave: () => {
    t.animated && $();
  }, doUpdateShow: _, cssVars: x ? void 0 : V, themeClass: J == null ? void 0 : J.themeClass, onRender: J == null ? void 0 : J.onRender };
}, render() {
  const t = (i, a, c, u, d) => {
    var f;
    const { mergedClsPrefix: p, menuProps: g } = this;
    (f = this.onRender) === null || f === void 0 || f.call(this);
    const m = (g == null ? void 0 : g(void 0, this.tmNodes.map((x) => x.rawNode))) || {}, C = { ref: jw(a), class: [i, `${p}-dropdown`, this.themeClass], clsPrefix: p, tmNodes: this.tmNodes, style: [...c, this.cssVars], showArrow: this.showArrow, arrowStyle: this.arrowStyle, scrollable: this.scrollable, onMouseenter: u, onMouseleave: d };
    return B(gp, bo(this.$attrs, C, m));
  }, { mergedTheme: r } = this, o = { show: this.mergedShow, theme: r.peers.Popover, themeOverrides: r.peerOverrides.Popover, internalOnAfterLeave: this.handleAfterLeave, internalRenderBody: t, onUpdateShow: this.doUpdateShow, "onUpdate:show": void 0 };
  return B(rp, Object.assign({}, ti(this.$props, z$), o), { trigger: () => {
    var i, a;
    return (a = (i = this.$slots).default) === null || a === void 0 ? void 0 : a.call(i);
  } });
} }), I$ = { itemFontSize: "12px", itemHeight: "36px", itemWidth: "52px", panelActionPadding: "8px 0" };
function B$(t) {
  const { popoverColor: r, textColor2: o, primaryColor: i, hoverColor: a, dividerColor: c, opacityDisabled: u, boxShadow2: d, borderRadius: f, iconColor: p, iconColorDisabled: g } = t;
  return Object.assign(Object.assign({}, I$), { panelColor: r, panelBoxShadow: d, panelDividerColor: c, itemTextColor: o, itemTextColorActive: i, itemColorHover: a, itemOpacityDisabled: u, itemBorderRadius: f, borderRadius: f, iconColor: p, iconColorDisabled: g });
}
const vp = { name: "TimePicker", common: Q, peers: { Scrollbar: St, Button: Bt, Input: Jt }, self: B$ }, M$ = { itemSize: "24px", itemCellWidth: "38px", itemCellHeight: "32px", scrollItemWidth: "80px", scrollItemHeight: "40px", panelExtraFooterPadding: "8px 12px", panelActionPadding: "8px 12px", calendarTitlePadding: "0", calendarTitleHeight: "28px", arrowSize: "14px", panelHeaderPadding: "8px 12px", calendarDaysHeight: "32px", calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px", calendarLeftPaddingDate: "6px 12px 4px 12px", calendarLeftPaddingDatetime: "4px 12px", calendarLeftPaddingDaterange: "6px 12px 4px 12px", calendarLeftPaddingDatetimerange: "4px 12px", calendarLeftPaddingMonth: "0", calendarLeftPaddingYear: "0", calendarLeftPaddingQuarter: "0", calendarLeftPaddingMonthrange: "0", calendarLeftPaddingQuarterrange: "0", calendarLeftPaddingYearrange: "0", calendarLeftPaddingWeek: "6px 12px 4px 12px", calendarRightPaddingDate: "6px 12px 4px 12px", calendarRightPaddingDatetime: "4px 12px", calendarRightPaddingDaterange: "6px 12px 4px 12px", calendarRightPaddingDatetimerange: "4px 12px", calendarRightPaddingMonth: "0", calendarRightPaddingYear: "0", calendarRightPaddingQuarter: "0", calendarRightPaddingMonthrange: "0", calendarRightPaddingQuarterrange: "0", calendarRightPaddingYearrange: "0", calendarRightPaddingWeek: "0" };
function A$(t) {
  const { hoverColor: r, fontSize: o, textColor2: i, textColorDisabled: a, popoverColor: c, primaryColor: u, borderRadiusSmall: d, iconColor: f, iconColorDisabled: p, textColor1: g, dividerColor: m, boxShadow2: C, borderRadius: x, fontWeightStrong: y } = t;
  return Object.assign(Object.assign({}, M$), { itemFontSize: o, calendarDaysFontSize: o, calendarTitleFontSize: o, itemTextColor: i, itemTextColorDisabled: a, itemTextColorActive: c, itemTextColorCurrent: u, itemColorIncluded: ce(u, { alpha: 0.1 }), itemColorHover: r, itemColorDisabled: r, itemColorActive: u, itemBorderRadius: d, panelColor: c, panelTextColor: i, arrowColor: f, calendarTitleTextColor: g, calendarTitleColorHover: r, calendarDaysTextColor: i, panelHeaderDividerColor: m, calendarDaysDividerColor: m, calendarDividerColor: m, panelActionDividerColor: m, panelBoxShadow: C, panelBorderRadius: x, calendarTitleFontWeight: y, scrollItemBorderRadius: x, iconColor: f, iconColorDisabled: p });
}
const L$ = { name: "DatePicker", common: Q, peers: { Input: Jt, Button: Bt, TimePicker: vp, Scrollbar: St }, self: A$ }, F$ = { thPaddingBorderedSmall: "8px 12px", thPaddingBorderedMedium: "12px 16px", thPaddingBorderedLarge: "16px 24px", thPaddingSmall: "0", thPaddingMedium: "0", thPaddingLarge: "0", tdPaddingBorderedSmall: "8px 12px", tdPaddingBorderedMedium: "12px 16px", tdPaddingBorderedLarge: "16px 24px", tdPaddingSmall: "0 0 8px 0", tdPaddingMedium: "0 0 12px 0", tdPaddingLarge: "0 0 16px 0" };
function H$(t) {
  const { tableHeaderColor: r, textColor2: o, textColor1: i, cardColor: a, modalColor: c, popoverColor: u, dividerColor: d, borderRadius: f, fontWeightStrong: p, lineHeight: g, fontSizeSmall: m, fontSizeMedium: C, fontSizeLarge: x } = t;
  return Object.assign(Object.assign({}, F$), { lineHeight: g, fontSizeSmall: m, fontSizeMedium: C, fontSizeLarge: x, titleTextColor: i, thColor: ne(a, r), thColorModal: ne(c, r), thColorPopover: ne(u, r), thTextColor: i, thFontWeight: p, tdTextColor: o, tdColor: a, tdColorModal: c, tdColorPopover: u, borderColor: ne(a, d), borderColorModal: ne(c, d), borderColorPopover: ne(u, d), borderRadius: f });
}
const O$ = { name: "Descriptions", common: Q, self: H$ }, k$ = "n-dialog-provider", cE = "n-dialog-api", uE = "n-dialog-reactive-list", D$ = { titleFontSize: "18px", padding: "16px 28px 20px 28px", iconSize: "28px", actionSpace: "12px", contentMargin: "8px 0 16px 0", iconMargin: "0 4px 0 0", iconMarginIconTop: "4px 0 8px 0", closeSize: "22px", closeIconSize: "18px", closeMargin: "20px 26px 0 0", closeMarginIconTop: "10px 16px 0 0" };
function W$(t) {
  const { textColor1: r, textColor2: o, modalColor: i, closeIconColor: a, closeIconColorHover: c, closeIconColorPressed: u, closeColorHover: d, closeColorPressed: f, infoColor: p, successColor: g, warningColor: m, errorColor: C, primaryColor: x, dividerColor: y, borderRadius: P, fontWeightStrong: _, lineHeight: $, fontSize: R } = t;
  return Object.assign(Object.assign({}, D$), { fontSize: R, lineHeight: $, border: `1px solid ${y}`, titleTextColor: r, textColor: o, color: i, closeColorHover: d, closeColorPressed: f, closeIconColor: a, closeIconColorHover: c, closeIconColorPressed: u, closeBorderRadius: P, iconColor: x, iconColorInfo: p, iconColorSuccess: g, iconColorWarning: m, iconColorError: C, borderRadius: P, titleFontWeight: _ });
}
const tc = { name: "Dialog", common: Q, peers: { Button: Bt }, self: W$ }, rc = { icon: Function, type: { type: String, default: "default" }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean }, N$ = Ys(rc), j$ = X([ye("dialog", `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [ae("icon", { color: "var(--n-icon-color)" }), pe("bordered", { border: "var(--n-border)" }), pe("icon-top", [ae("close", { margin: "var(--n-close-margin)" }), ae("icon", { margin: "var(--n-icon-margin)" }), ae("content", { textAlign: "center" }), ae("title", { justifyContent: "center" }), ae("action", { justifyContent: "center" })]), pe("icon-left", [ae("icon", { margin: "var(--n-icon-margin)" }), pe("closable", [ae("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), ae("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), ae("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [pe("last", "margin-bottom: 0;")]), ae("action", `
 display: flex;
 justify-content: flex-end;
 `, [X("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), ae("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), ae("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), ye("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), fh(ye("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), ye("dialog", [hh(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), G$ = { default: () => B(Ff, null), info: () => B(Ff, null), success: () => B(rS, null), warning: () => B(nS, null), error: () => B(tS, null) }, V$ = Ee({ name: "Dialog", alias: ["NimbusConfirmCard", "Confirm"], props: Object.assign(Object.assign({}, at.props), rc), slots: Object, setup(t) {
  const { mergedComponentPropsRef: r, mergedClsPrefixRef: o, inlineThemeDisabled: i, mergedRtlRef: a } = zr(t), c = ii("Dialog", a, o), u = Y(() => {
    var x, y;
    const { iconPlacement: P } = t;
    return P || ((y = (x = r == null ? void 0 : r.value) === null || x === void 0 ? void 0 : x.Dialog) === null || y === void 0 ? void 0 : y.iconPlacement) || "left";
  });
  function d(x) {
    const { onPositiveClick: y } = t;
    y && y(x);
  }
  function f(x) {
    const { onNegativeClick: y } = t;
    y && y(x);
  }
  function p() {
    const { onClose: x } = t;
    x && x();
  }
  const g = at("Dialog", "-dialog", j$, tc, t, o), m = Y(() => {
    const { type: x } = t, y = u.value, { common: { cubicBezierEaseInOut: P }, self: { fontSize: _, lineHeight: $, border: R, titleTextColor: L, textColor: I, color: F, closeBorderRadius: k, closeColorHover: S, closeColorPressed: M, closeIconColor: A, closeIconColorHover: V, closeIconColorPressed: J, closeIconSize: W, borderRadius: oe, titleFontWeight: re, titleFontSize: G, padding: ie, iconSize: U, actionSpace: ue, contentMargin: Be, closeSize: ze, [y === "top" ? "iconMarginIconTop" : "iconMargin"]: Le, [y === "top" ? "closeMarginIconTop" : "closeMargin"]: Oe, [Ce("iconColor", x)]: mt } } = g.value, xt = Tn(Le);
    return { "--n-font-size": _, "--n-icon-color": mt, "--n-bezier": P, "--n-close-margin": Oe, "--n-icon-margin-top": xt.top, "--n-icon-margin-right": xt.right, "--n-icon-margin-bottom": xt.bottom, "--n-icon-margin-left": xt.left, "--n-icon-size": U, "--n-close-size": ze, "--n-close-icon-size": W, "--n-close-border-radius": k, "--n-close-color-hover": S, "--n-close-color-pressed": M, "--n-close-icon-color": A, "--n-close-icon-color-hover": V, "--n-close-icon-color-pressed": J, "--n-color": F, "--n-text-color": I, "--n-border-radius": oe, "--n-padding": ie, "--n-line-height": $, "--n-border": R, "--n-content-margin": Be, "--n-title-font-size": G, "--n-title-font-weight": re, "--n-title-text-color": L, "--n-action-space": ue };
  }), C = i ? Kr("dialog", Y(() => `${t.type[0]}${u.value[0]}`), m, t) : void 0;
  return { mergedClsPrefix: o, rtlEnabled: c, mergedIconPlacement: u, mergedTheme: g, handlePositiveClick: d, handleNegativeClick: f, handleCloseClick: p, cssVars: i ? void 0 : m, themeClass: C == null ? void 0 : C.themeClass, onRender: C == null ? void 0 : C.onRender };
}, render() {
  var t;
  const { bordered: r, mergedIconPlacement: o, cssVars: i, closable: a, showIcon: c, title: u, content: d, action: f, negativeText: p, positiveText: g, positiveButtonProps: m, negativeButtonProps: C, handlePositiveClick: x, handleNegativeClick: y, mergedTheme: P, loading: _, type: $, mergedClsPrefix: R } = this;
  (t = this.onRender) === null || t === void 0 || t.call(this);
  const L = c ? B(Gh, { clsPrefix: R, class: `${R}-dialog__icon` }, { default: () => Dt(this.$slots.icon, (F) => F || (this.icon ? $r(this.icon) : G$[this.type]())) }) : null, I = Dt(this.$slots.action, (F) => F || g || p || f ? B("div", { class: [`${R}-dialog__action`, this.actionClass], style: this.actionStyle }, F || (f ? [$r(f)] : [this.negativeText && B(Rs, Object.assign({ theme: P.peers.Button, themeOverrides: P.peerOverrides.Button, ghost: true, size: "small", onClick: y }, C), { default: () => $r(this.negativeText) }), this.positiveText && B(Rs, Object.assign({ theme: P.peers.Button, themeOverrides: P.peerOverrides.Button, size: "small", type: $ === "default" ? "primary" : $, disabled: _, loading: _, onClick: x }, m), { default: () => $r(this.positiveText) })])) : null);
  return B("div", { class: [`${R}-dialog`, this.themeClass, this.closable && `${R}-dialog--closable`, `${R}-dialog--icon-${o}`, r && `${R}-dialog--bordered`, this.rtlEnabled && `${R}-dialog--rtl`], style: i, role: "dialog" }, a ? Dt(this.$slots.close, (F) => {
    const k = [`${R}-dialog__close`, this.rtlEnabled && `${R}-dialog--rtl`];
    return F ? B("div", { class: k }, F) : B(Kh, { focusable: this.closeFocusable, clsPrefix: R, class: k, onClick: this.handleCloseClick });
  }) : null, c && o === "top" ? B("div", { class: `${R}-dialog-icon-container` }, L) : null, B("div", { class: [`${R}-dialog__title`, this.titleClass], style: this.titleStyle }, c && o === "left" ? L : null, Bf(this.$slots.header, () => [$r(u)])), B("div", { class: [`${R}-dialog__content`, I ? "" : `${R}-dialog__content--last`, this.contentClass], style: this.contentStyle }, Bf(this.$slots.default, () => [$r(d)])), I);
} });
function K$(t) {
  const { modalColor: r, textColor2: o, boxShadow3: i } = t;
  return { color: r, textColor: o, boxShadow: i };
}
const mp = { name: "Modal", common: Q, peers: { Scrollbar: St, Dialog: tc, Card: Qs }, self: K$ }, Bs = "n-draggable";
function U$(t, r) {
  let o;
  const i = Y(() => t.value !== false), a = Y(() => i.value ? Bs : ""), c = Y(() => {
    const f = t.value;
    return f === true || f === false ? true : f ? f.bounds !== "none" : true;
  });
  function u(f) {
    const p = f.querySelector(`.${Bs}`);
    if (!p || !a.value) return;
    let g = 0, m = 0, C = 0, x = 0, y = 0, P = 0, _;
    function $(I) {
      I.preventDefault(), _ = I;
      const { x: F, y: k, right: S, bottom: M } = f.getBoundingClientRect();
      m = F, x = k, g = window.innerWidth - S, C = window.innerHeight - M;
      const { left: A, top: V } = f.style;
      y = +V.slice(0, -2), P = +A.slice(0, -2);
    }
    function R(I) {
      if (!_) return;
      const { clientX: F, clientY: k } = _;
      let S = I.clientX - F, M = I.clientY - k;
      c.value && (S > g ? S = g : -S > m && (S = -m), M > C ? M = C : -M > x && (M = -x));
      const A = S + P, V = M + y;
      f.style.top = `${V}px`, f.style.left = `${A}px`;
    }
    function L() {
      _ = void 0, r.onEnd(f);
    }
    Ze("mousedown", p, $), Ze("mousemove", window, R), Ze("mouseup", window, L), o = () => {
      Xe("mousedown", p, $), Ze("mousemove", window, R), Ze("mouseup", window, L);
    };
  }
  function d() {
    o && (o(), o = void 0);
  }
  return jC(d), { stopDrag: d, startDrag: u, draggableRef: i, draggableClassRef: a };
}
const nc = Object.assign(Object.assign({}, Js), rc), q$ = Ys(nc), Y$ = Ee({ name: "ModalBody", inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, nc), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(t) {
  const r = se(null), o = se(null), i = se(t.show), a = se(null), c = se(null), u = He(wh);
  let d = null;
  ft(Je(t, "show"), (M) => {
    M && (d = u.getMousePosition());
  }, { immediate: true });
  const { stopDrag: f, startDrag: p, draggableRef: g, draggableClassRef: m } = U$(Je(t, "draggable"), { onEnd: (M) => {
    P(M);
  } }), C = Y(() => Id([t.titleClass, m.value])), x = Y(() => Id([t.headerClass, m.value]));
  ft(Je(t, "show"), (M) => {
    M && (i.value = true);
  }), Zy(Y(() => t.blockScroll && i.value));
  function y() {
    if (u.transformOriginRef.value === "center") return "";
    const { value: M } = a, { value: A } = c;
    if (M === null || A === null) return "";
    if (o.value) {
      const V = o.value.containerScrollTop;
      return `${M}px ${A + V}px`;
    }
    return "";
  }
  function P(M) {
    if (u.transformOriginRef.value === "center" || !d || !o.value) return;
    const A = o.value.containerScrollTop, { offsetLeft: V, offsetTop: J } = M, W = d.y, oe = d.x;
    a.value = -(V - oe), c.value = -(J - W - A), M.style.transformOrigin = y();
  }
  function _(M) {
    Mn(() => {
      P(M);
    });
  }
  function $(M) {
    M.style.transformOrigin = y(), t.onBeforeLeave();
  }
  function R(M) {
    const A = M;
    g.value && p(A), t.onAfterEnter && t.onAfterEnter(A);
  }
  function L() {
    i.value = false, a.value = null, c.value = null, f(), t.onAfterLeave();
  }
  function I() {
    const { onClose: M } = t;
    M && M();
  }
  function F() {
    t.onNegativeClick();
  }
  function k() {
    t.onPositiveClick();
  }
  const S = se(null);
  return ft(S, (M) => {
    M && Mn(() => {
      const A = M.el;
      A && r.value !== A && (r.value = A);
    });
  }), dt(Pl, r), dt($l, null), dt(ni, null), { mergedTheme: u.mergedThemeRef, appear: u.appearRef, isMounted: u.isMountedRef, mergedClsPrefix: u.mergedClsPrefixRef, bodyRef: r, scrollbarRef: o, draggableClass: m, displayed: i, childNodeRef: S, cardHeaderClass: x, dialogTitleClass: C, handlePositiveClick: k, handleNegativeClick: F, handleCloseClick: I, handleAfterEnter: R, handleAfterLeave: L, handleBeforeLeave: $, handleEnter: _ };
}, render() {
  const { $slots: t, $attrs: r, handleEnter: o, handleAfterEnter: i, handleAfterLeave: a, handleBeforeLeave: c, preset: u, mergedClsPrefix: d } = this;
  let f = null;
  if (!u) {
    if (f = Vw("default", t.default, { draggableClass: this.draggableClass }), !f) {
      Ln("modal", "default slot is empty");
      return;
    }
    f = Uf(f), f.props = bo({ class: `${d}-modal` }, r, f.props || {});
  }
  return this.displayDirective === "show" || this.displayed || this.show ? An(B("div", { role: "none", class: [`${d}-modal-body-wrapper`, this.maskHidden && `${d}-modal-body-wrapper--mask-hidden`] }, B(Yh, { ref: "scrollbarRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${d}-modal-scroll-content` }, { default: () => {
    var p;
    return [(p = this.renderMask) === null || p === void 0 ? void 0 : p.call(this), B(Wh, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => {
      var g;
      return B(cn, { name: "fade-in-scale-up-transition", appear: (g = this.appear) !== null && g !== void 0 ? g : this.isMounted, onEnter: o, onAfterEnter: i, onAfterLeave: a, onBeforeLeave: c }, { default: () => {
        const m = [[ms, this.show]], { onClickoutside: C } = this;
        return C && m.push([Ps, this.onClickoutside, void 0, { capture: true }]), An(this.preset === "confirm" || this.preset === "dialog" ? B(V$, Object.assign({}, this.$attrs, { class: [`${d}-modal`, this.$attrs.class], ref: "bodyRef", theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, ti(this.$props, N$), { titleClass: this.dialogTitleClass, "aria-modal": "true" }), t) : this.preset === "card" ? B(j2, Object.assign({}, this.$attrs, { ref: "bodyRef", class: [`${d}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, ti(this.$props, W2), { headerClass: this.cardHeaderClass, "aria-modal": "true", role: "dialog" }), t) : this.childNodeRef = f, m);
      } });
    } })];
  } })), [[ms, this.displayDirective === "if" || this.displayed || this.show]]) : null;
} }), X$ = X([ye("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), ye("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [Uh({ enterDuration: ".25s", leaveDuration: ".25s", enterCubicBezier: "var(--n-bezier-ease-out)", leaveCubicBezier: "var(--n-bezier-ease-out)" })]), ye("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [ye("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `), pe("mask-hidden", "pointer-events: none;", [X("> *", `
 pointer-events: all;
 `)])]), ye("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [Jh({ duration: ".25s", enterScale: ".5" }), X(`.${Bs}`, `
 cursor: move;
 user-select: none;
 `)])]), Z$ = Object.assign(Object.assign(Object.assign(Object.assign({}, at.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: "if" }, transformOrigin: { type: String, default: "mouse" }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), nc), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } }), dE = Ee({ name: "Modal", inheritAttrs: false, props: Z$, slots: Object, setup(t) {
  const r = se(null), { mergedClsPrefixRef: o, namespaceRef: i, inlineThemeDisabled: a } = zr(t), c = at("Modal", "-modal", X$, mp, t, o), u = jy(64), d = Wy(), f = Sl(), p = t.internalDialog ? He(k$, null) : null, g = t.internalModal ? He(qy, null) : null, m = Xy();
  function C(k) {
    const { onUpdateShow: S, "onUpdate:show": M, onHide: A } = t;
    S && Wt(S, k), M && Wt(M, k), A && !k && A(k);
  }
  function x() {
    const { onClose: k } = t;
    k ? Promise.resolve(k()).then((S) => {
      S !== false && C(false);
    }) : C(false);
  }
  function y() {
    const { onPositiveClick: k } = t;
    k ? Promise.resolve(k()).then((S) => {
      S !== false && C(false);
    }) : C(false);
  }
  function P() {
    const { onNegativeClick: k } = t;
    k ? Promise.resolve(k()).then((S) => {
      S !== false && C(false);
    }) : C(false);
  }
  function _() {
    const { onBeforeLeave: k, onBeforeHide: S } = t;
    k && Wt(k), S && S();
  }
  function $() {
    const { onAfterLeave: k, onAfterHide: S } = t;
    k && Wt(k), S && S();
  }
  function R(k) {
    var S;
    const { onMaskClick: M } = t;
    M && M(k), t.maskClosable && !((S = r.value) === null || S === void 0) && S.contains(Jo(k)) && C(false);
  }
  function L(k) {
    var S;
    (S = t.onEsc) === null || S === void 0 || S.call(t), t.show && t.closeOnEsc && Ww(k) && (m.value || C(false));
  }
  dt(wh, { getMousePosition: () => {
    const k = p || g;
    if (k) {
      const { clickedRef: S, clickedPositionRef: M } = k;
      if (S.value && M.value) return M.value;
    }
    return u.value ? d.value : null;
  }, mergedClsPrefixRef: o, mergedThemeRef: c, isMountedRef: f, appearRef: Je(t, "internalAppear"), transformOriginRef: Je(t, "transformOrigin") });
  const I = Y(() => {
    const { common: { cubicBezierEaseOut: k }, self: { boxShadow: S, color: M, textColor: A } } = c.value;
    return { "--n-bezier-ease-out": k, "--n-box-shadow": S, "--n-color": M, "--n-text-color": A };
  }), F = a ? Kr("theme-class", void 0, I, t) : void 0;
  return { mergedClsPrefix: o, namespace: i, isMounted: f, containerRef: r, presetProps: Y(() => ti(t, q$)), handleEsc: L, handleAfterLeave: $, handleClickoutside: R, handleBeforeLeave: _, doUpdateShow: C, handleNegativeClick: P, handlePositiveClick: y, handleCloseClick: x, cssVars: a ? void 0 : I, themeClass: F == null ? void 0 : F.themeClass, onRender: F == null ? void 0 : F.onRender };
}, render() {
  const { mergedClsPrefix: t } = this;
  return B(zh, { to: this.to, show: this.show }, { default: () => {
    var r;
    (r = this.onRender) === null || r === void 0 || r.call(this);
    const { showMask: o } = this;
    return An(B("div", { role: "none", ref: "containerRef", class: [`${t}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, B(Y$, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: "bodyWrapper", displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !o }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: o ? void 0 : this.handleClickoutside, renderMask: o ? () => {
      var i;
      return B(cn, { name: "fade-in-transition", key: "mask", appear: (i = this.internalAppear) !== null && i !== void 0 ? i : this.isMounted }, { default: () => this.show ? B("div", { "aria-hidden": true, ref: "containerRef", class: `${t}-modal-mask`, onClick: this.handleClickoutside }) : null });
    } : void 0 }), this.$slots)), [[Us, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
function Q$(t) {
  const { primaryColor: r, errorColor: o } = t;
  return { colorError: o, colorLoading: r, height: "2px" };
}
const J$ = { name: "LoadingBar", common: Q, self: Q$ }, fE = "n-message-api", hE = "n-message-provider", eP = { margin: "0 0 8px 0", padding: "10px 20px", maxWidth: "720px", minWidth: "420px", iconMargin: "0 10px 0 0", closeMargin: "0 0 0 10px", closeSize: "20px", closeIconSize: "16px", iconSize: "20px", fontSize: "14px" };
function tP(t) {
  const { textColor2: r, closeIconColor: o, closeIconColorHover: i, closeIconColorPressed: a, infoColor: c, successColor: u, errorColor: d, warningColor: f, popoverColor: p, boxShadow2: g, primaryColor: m, lineHeight: C, borderRadius: x, closeColorHover: y, closeColorPressed: P } = t;
  return Object.assign(Object.assign({}, eP), { closeBorderRadius: x, textColor: r, textColorInfo: r, textColorSuccess: r, textColorError: r, textColorWarning: r, textColorLoading: r, color: p, colorInfo: p, colorSuccess: p, colorError: p, colorWarning: p, colorLoading: p, boxShadow: g, boxShadowInfo: g, boxShadowSuccess: g, boxShadowError: g, boxShadowWarning: g, boxShadowLoading: g, iconColor: r, iconColorInfo: c, iconColorSuccess: u, iconColorWarning: f, iconColorError: d, iconColorLoading: m, closeColorHover: y, closeColorPressed: P, closeIconColor: o, closeIconColorHover: i, closeIconColorPressed: a, closeColorHoverInfo: y, closeColorPressedInfo: P, closeIconColorInfo: o, closeIconColorHoverInfo: i, closeIconColorPressedInfo: a, closeColorHoverSuccess: y, closeColorPressedSuccess: P, closeIconColorSuccess: o, closeIconColorHoverSuccess: i, closeIconColorPressedSuccess: a, closeColorHoverError: y, closeColorPressedError: P, closeIconColorError: o, closeIconColorHoverError: i, closeIconColorPressedError: a, closeColorHoverWarning: y, closeColorPressedWarning: P, closeIconColorWarning: o, closeIconColorHoverWarning: i, closeIconColorPressedWarning: a, closeColorHoverLoading: y, closeColorPressedLoading: P, closeIconColorLoading: o, closeIconColorHoverLoading: i, closeIconColorPressedLoading: a, loadingColor: m, lineHeight: C, borderRadius: x, border: "0" });
}
const rP = { name: "Message", common: Q, self: tP }, nP = { closeMargin: "16px 12px", closeSize: "20px", closeIconSize: "16px", width: "365px", padding: "16px", titleFontSize: "16px", metaFontSize: "12px", descriptionFontSize: "12px" };
function oP(t) {
  const { textColor2: r, successColor: o, infoColor: i, warningColor: a, errorColor: c, popoverColor: u, closeIconColor: d, closeIconColorHover: f, closeIconColorPressed: p, closeColorHover: g, closeColorPressed: m, textColor1: C, textColor3: x, borderRadius: y, fontWeightStrong: P, boxShadow2: _, lineHeight: $, fontSize: R } = t;
  return Object.assign(Object.assign({}, nP), { borderRadius: y, lineHeight: $, fontSize: R, headerFontWeight: P, iconColor: r, iconColorSuccess: o, iconColorInfo: i, iconColorWarning: a, iconColorError: c, color: u, textColor: r, closeIconColor: d, closeIconColorHover: f, closeIconColorPressed: p, closeBorderRadius: y, closeColorHover: g, closeColorPressed: m, headerTextColor: C, descriptionTextColor: x, actionTextColor: r, boxShadow: _ });
}
const iP = { name: "Notification", common: Q, peers: { Scrollbar: St }, self: oP };
function lP(t) {
  const { textColor1: r, dividerColor: o, fontWeightStrong: i } = t;
  return { textColor: r, color: o, fontWeight: i };
}
const aP = { name: "Divider", common: Q, self: lP };
function sP(t) {
  const { modalColor: r, textColor1: o, textColor2: i, boxShadow3: a, lineHeight: c, fontWeightStrong: u, dividerColor: d, closeColorHover: f, closeColorPressed: p, closeIconColor: g, closeIconColorHover: m, closeIconColorPressed: C, borderRadius: x, primaryColorHover: y } = t;
  return { bodyPadding: "16px 24px", borderRadius: x, headerPadding: "16px 24px", footerPadding: "16px 24px", color: r, textColor: i, titleTextColor: o, titleFontSize: "18px", titleFontWeight: u, boxShadow: a, lineHeight: c, headerBorderBottom: `1px solid ${d}`, footerBorderTop: `1px solid ${d}`, closeIconColor: g, closeIconColorHover: m, closeIconColorPressed: C, closeSize: "22px", closeIconSize: "18px", closeColorHover: f, closeColorPressed: p, closeBorderRadius: x, resizableTriggerColorHover: y };
}
const cP = { name: "Drawer", common: Q, peers: { Scrollbar: St }, self: sP }, uP = { actionMargin: "0 0 0 20px", actionMarginRtl: "0 20px 0 0" };
function dP() {
  return uP;
}
const fP = { name: "DynamicInput", common: Q, peers: { Input: Jt, Button: Bt }, self: dP }, hP = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function pP() {
  return hP;
}
const bp = { name: "Space", self: pP }, gP = { name: "DynamicTags", common: Q, peers: { Input: Jt, Button: Bt, Tag: np, Space: bp }, self() {
  return { inputWidth: "64px" };
} }, vP = { name: "Element", common: Q }, mP = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function bP() {
  return mP;
}
const xP = { name: "Flex", self: bP }, CP = { name: "ButtonGroup", common: Q }, yP = { feedbackPadding: "4px 0 0 2px", feedbackHeightSmall: "24px", feedbackHeightMedium: "24px", feedbackHeightLarge: "26px", feedbackFontSizeSmall: "13px", feedbackFontSizeMedium: "14px", feedbackFontSizeLarge: "14px", labelFontSizeLeftSmall: "14px", labelFontSizeLeftMedium: "14px", labelFontSizeLeftLarge: "15px", labelFontSizeTopSmall: "13px", labelFontSizeTopMedium: "14px", labelFontSizeTopLarge: "14px", labelHeightSmall: "24px", labelHeightMedium: "26px", labelHeightLarge: "28px", labelPaddingVertical: "0 0 6px 2px", labelPaddingHorizontal: "0 12px 0 0", labelTextAlignVertical: "left", labelTextAlignHorizontal: "right", labelFontWeight: "400" };
function wP(t) {
  const { heightSmall: r, heightMedium: o, heightLarge: i, textColor1: a, errorColor: c, warningColor: u, lineHeight: d, textColor3: f } = t;
  return Object.assign(Object.assign({}, yP), { blankHeightSmall: r, blankHeightMedium: o, blankHeightLarge: i, lineHeight: d, labelTextColor: a, asteriskColor: c, feedbackTextColorError: c, feedbackTextColorWarning: u, feedbackTextColor: f });
}
const SP = { name: "Form", common: Q, self: wP };
function $P(t) {
  const { primaryColor: r, successColor: o, warningColor: i, errorColor: a, infoColor: c, fontWeightStrong: u } = t;
  return { fontWeight: u, rotate: "252deg", colorStartPrimary: ce(r, { alpha: 0.6 }), colorEndPrimary: r, colorStartInfo: ce(c, { alpha: 0.6 }), colorEndInfo: c, colorStartWarning: ce(i, { alpha: 0.6 }), colorEndWarning: i, colorStartError: ce(a, { alpha: 0.6 }), colorEndError: a, colorStartSuccess: ce(o, { alpha: 0.6 }), colorEndSuccess: o };
}
const PP = { name: "GradientText", common: Q, self: $P };
function _P(t) {
  const { textColorDisabled: r } = t;
  return { iconColorDisabled: r };
}
const TP = { name: "InputNumber", common: Q, peers: { Button: Bt, Input: Jt }, self: _P };
function EP() {
  return { inputWidthSmall: "24px", inputWidthMedium: "30px", inputWidthLarge: "36px", gapSmall: "8px", gapMedium: "8px", gapLarge: "8px" };
}
const zP = { name: "InputOtp", common: Q, peers: { Input: Jt }, self: EP };
function RP(t) {
  const { baseColor: r, textColor2: o, bodyColor: i, cardColor: a, dividerColor: c, actionColor: u, scrollbarColor: d, scrollbarColorHover: f, invertedColor: p } = t;
  return { textColor: o, textColorInverted: "#FFF", color: i, colorEmbedded: u, headerColor: a, headerColorInverted: p, footerColor: u, footerColorInverted: p, headerBorderColor: c, headerBorderColorInverted: p, footerBorderColor: c, footerBorderColorInverted: p, siderBorderColor: c, siderBorderColorInverted: p, siderColor: a, siderColorInverted: p, siderToggleButtonBorder: `1px solid ${c}`, siderToggleButtonColor: r, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: ne(i, d), siderToggleBarColorHover: ne(i, f), __invertScrollbar: "true" };
}
const IP = { name: "Layout", common: Q, peers: { Scrollbar: St }, self: RP }, BP = { name: "Row", common: Q };
function MP(t) {
  const { textColor2: r, cardColor: o, modalColor: i, popoverColor: a, dividerColor: c, borderRadius: u, fontSize: d, hoverColor: f } = t;
  return { textColor: r, color: o, colorHover: f, colorModal: i, colorHoverModal: ne(i, f), colorPopover: a, colorHoverPopover: ne(a, f), borderColor: c, borderColorModal: ne(i, c), borderColorPopover: ne(a, c), borderRadius: u, fontSize: d };
}
const AP = { name: "List", common: Q, self: MP };
function LP(t) {
  const { textColor2: r, modalColor: o, borderColor: i, fontSize: a, primaryColor: c } = t;
  return { loaderFontSize: a, loaderTextColor: r, loaderColor: o, loaderBorder: `1px solid ${i}`, loadingColor: c };
}
const FP = { name: "Log", common: Q, peers: { Scrollbar: St, Code: ip }, self: LP };
function HP(t) {
  const { boxShadow2: r } = t;
  return { menuBoxShadow: r };
}
const OP = { name: "Mention", common: Q, peers: { InternalSelectMenu: ai, Input: Jt }, self: HP };
function kP(t, r, o, i) {
  return { itemColorHoverInverted: "#0000", itemColorActiveInverted: r, itemColorActiveHoverInverted: r, itemColorActiveCollapsedInverted: r, itemTextColorInverted: t, itemTextColorHoverInverted: o, itemTextColorChildActiveInverted: o, itemTextColorChildActiveHoverInverted: o, itemTextColorActiveInverted: o, itemTextColorActiveHoverInverted: o, itemTextColorHorizontalInverted: t, itemTextColorHoverHorizontalInverted: o, itemTextColorChildActiveHorizontalInverted: o, itemTextColorChildActiveHoverHorizontalInverted: o, itemTextColorActiveHorizontalInverted: o, itemTextColorActiveHoverHorizontalInverted: o, itemIconColorInverted: t, itemIconColorHoverInverted: o, itemIconColorActiveInverted: o, itemIconColorActiveHoverInverted: o, itemIconColorChildActiveInverted: o, itemIconColorChildActiveHoverInverted: o, itemIconColorCollapsedInverted: t, itemIconColorHorizontalInverted: t, itemIconColorHoverHorizontalInverted: o, itemIconColorActiveHorizontalInverted: o, itemIconColorActiveHoverHorizontalInverted: o, itemIconColorChildActiveHorizontalInverted: o, itemIconColorChildActiveHoverHorizontalInverted: o, arrowColorInverted: t, arrowColorHoverInverted: o, arrowColorActiveInverted: o, arrowColorActiveHoverInverted: o, arrowColorChildActiveInverted: o, arrowColorChildActiveHoverInverted: o, groupTextColorInverted: i };
}
function DP(t) {
  const { borderRadius: r, textColor3: o, primaryColor: i, textColor2: a, textColor1: c, fontSize: u, dividerColor: d, hoverColor: f, primaryColorHover: p } = t;
  return Object.assign({ borderRadius: r, color: "#0000", groupTextColor: o, itemColorHover: f, itemColorActive: ce(i, { alpha: 0.1 }), itemColorActiveHover: ce(i, { alpha: 0.1 }), itemColorActiveCollapsed: ce(i, { alpha: 0.1 }), itemTextColor: a, itemTextColorHover: a, itemTextColorActive: i, itemTextColorActiveHover: i, itemTextColorChildActive: i, itemTextColorChildActiveHover: i, itemTextColorHorizontal: a, itemTextColorHoverHorizontal: p, itemTextColorActiveHorizontal: i, itemTextColorActiveHoverHorizontal: i, itemTextColorChildActiveHorizontal: i, itemTextColorChildActiveHoverHorizontal: i, itemIconColor: c, itemIconColorHover: c, itemIconColorActive: i, itemIconColorActiveHover: i, itemIconColorChildActive: i, itemIconColorChildActiveHover: i, itemIconColorCollapsed: c, itemIconColorHorizontal: c, itemIconColorHoverHorizontal: p, itemIconColorActiveHorizontal: i, itemIconColorActiveHoverHorizontal: i, itemIconColorChildActiveHorizontal: i, itemIconColorChildActiveHoverHorizontal: i, itemHeight: "42px", arrowColor: a, arrowColorHover: a, arrowColorActive: i, arrowColorActiveHover: i, arrowColorChildActive: i, arrowColorChildActiveHover: i, colorInverted: "#0000", borderColorHorizontal: "#0000", fontSize: u, dividerColor: d }, kP("#BBB", i, "#FFF", "#AAA"));
}
const WP = { name: "Menu", common: Q, peers: { Tooltip: si, Dropdown: El }, self: DP }, NP = { titleFontSize: "18px", backSize: "22px" };
function jP(t) {
  const { textColor1: r, textColor2: o, textColor3: i, fontSize: a, fontWeightStrong: c, primaryColorHover: u, primaryColorPressed: d } = t;
  return Object.assign(Object.assign({}, NP), { titleFontWeight: c, fontSize: a, titleTextColor: r, backColor: o, backColorHover: u, backColorPressed: d, subtitleTextColor: i });
}
const GP = { name: "PageHeader", common: Q, self: jP }, VP = { iconSize: "22px" };
function KP(t) {
  const { fontSize: r, warningColor: o } = t;
  return Object.assign(Object.assign({}, VP), { fontSize: r, iconColor: o });
}
const UP = { name: "Popconfirm", common: Q, peers: { Button: Bt, Popover: hn }, self: KP };
function qP(t) {
  const { infoColor: r, successColor: o, warningColor: i, errorColor: a, textColor2: c, progressRailColor: u, fontSize: d, fontWeight: f } = t;
  return { fontSize: d, fontSizeCircle: "28px", fontWeightCircle: f, railColor: u, railHeight: "8px", iconSizeCircle: "36px", iconSizeLine: "18px", iconColor: r, iconColorInfo: r, iconColorSuccess: o, iconColorWarning: i, iconColorError: a, textColorCircle: c, textColorLineInner: "rgb(255, 255, 255)", textColorLineOuter: c, fillColor: r, fillColorInfo: r, fillColorSuccess: o, fillColorWarning: i, fillColorError: a, lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)" };
}
const xp = { name: "Progress", common: Q, self: qP };
function YP(t) {
  const { railColor: r } = t;
  return { itemColor: r, itemColorActive: "#FFCC33", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
}
const XP = { name: "Rate", common: Q, self: YP }, ZP = { titleFontSizeSmall: "26px", titleFontSizeMedium: "32px", titleFontSizeLarge: "40px", titleFontSizeHuge: "48px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", iconSizeSmall: "64px", iconSizeMedium: "80px", iconSizeLarge: "100px", iconSizeHuge: "125px", iconColor418: void 0, iconColor404: void 0, iconColor403: void 0, iconColor500: void 0 };
function QP(t) {
  const { textColor2: r, textColor1: o, errorColor: i, successColor: a, infoColor: c, warningColor: u, lineHeight: d, fontWeightStrong: f } = t;
  return Object.assign(Object.assign({}, ZP), { lineHeight: d, titleFontWeight: f, titleTextColor: o, textColor: r, iconColorError: i, iconColorSuccess: a, iconColorInfo: c, iconColorWarning: u });
}
const JP = { name: "Result", common: Q, self: QP }, e_ = { railHeight: "4px", railWidthVertical: "4px", handleSize: "18px", dotHeight: "8px", dotWidth: "8px", dotBorderRadius: "4px" };
function t_(t) {
  const r = "rgba(0, 0, 0, .85)", o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: i, primaryColor: a, baseColor: c, cardColor: u, modalColor: d, popoverColor: f, borderRadius: p, fontSize: g, opacityDisabled: m } = t;
  return Object.assign(Object.assign({}, e_), { fontSize: g, markFontSize: g, railColor: i, railColorHover: i, fillColor: a, fillColorHover: a, opacityDisabled: m, handleColor: "#FFF", dotColor: u, dotColorModal: d, dotColorPopover: f, handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", indicatorColor: r, indicatorBoxShadow: o, indicatorTextColor: c, indicatorBorderRadius: p, dotBorder: `2px solid ${i}`, dotBorderActive: `2px solid ${a}`, dotBoxShadow: "" });
}
const r_ = { name: "Slider", common: Q, self: t_ };
function n_(t) {
  const { opacityDisabled: r, heightTiny: o, heightSmall: i, heightMedium: a, heightLarge: c, heightHuge: u, primaryColor: d, fontSize: f } = t;
  return { fontSize: f, textColor: d, sizeTiny: o, sizeSmall: i, sizeMedium: a, sizeLarge: c, sizeHuge: u, color: d, opacitySpinning: r };
}
const o_ = { name: "Spin", common: Q, self: n_ };
function i_(t) {
  const { textColor2: r, textColor3: o, fontSize: i, fontWeight: a } = t;
  return { labelFontSize: i, labelFontWeight: a, valueFontWeight: a, valueFontSize: "24px", labelTextColor: o, valuePrefixTextColor: r, valueSuffixTextColor: r, valueTextColor: r };
}
const l_ = { name: "Statistic", common: Q, self: i_ }, a_ = { stepHeaderFontSizeSmall: "14px", stepHeaderFontSizeMedium: "16px", indicatorIndexFontSizeSmall: "14px", indicatorIndexFontSizeMedium: "16px", indicatorSizeSmall: "22px", indicatorSizeMedium: "28px", indicatorIconSizeSmall: "14px", indicatorIconSizeMedium: "18px" };
function s_(t) {
  const { fontWeightStrong: r, baseColor: o, textColorDisabled: i, primaryColor: a, errorColor: c, textColor1: u, textColor2: d } = t;
  return Object.assign(Object.assign({}, a_), { stepHeaderFontWeight: r, indicatorTextColorProcess: o, indicatorTextColorWait: i, indicatorTextColorFinish: a, indicatorTextColorError: c, indicatorBorderColorProcess: a, indicatorBorderColorWait: i, indicatorBorderColorFinish: a, indicatorBorderColorError: c, indicatorColorProcess: a, indicatorColorWait: "#0000", indicatorColorFinish: "#0000", indicatorColorError: "#0000", splitorColorProcess: i, splitorColorWait: i, splitorColorFinish: a, splitorColorError: i, headerTextColorProcess: u, headerTextColorWait: i, headerTextColorFinish: i, headerTextColorError: c, descriptionTextColorProcess: d, descriptionTextColorWait: i, descriptionTextColorFinish: i, descriptionTextColorError: c });
}
const c_ = { name: "Steps", common: Q, self: s_ }, u_ = { buttonHeightSmall: "14px", buttonHeightMedium: "18px", buttonHeightLarge: "22px", buttonWidthSmall: "14px", buttonWidthMedium: "18px", buttonWidthLarge: "22px", buttonWidthPressedSmall: "20px", buttonWidthPressedMedium: "24px", buttonWidthPressedLarge: "28px", railHeightSmall: "18px", railHeightMedium: "22px", railHeightLarge: "26px", railWidthSmall: "32px", railWidthMedium: "40px", railWidthLarge: "48px" };
function d_(t) {
  const { primaryColor: r, opacityDisabled: o, borderRadius: i, textColor3: a } = t;
  return Object.assign(Object.assign({}, u_), { iconColor: a, textColor: "white", loadingColor: r, opacityDisabled: o, railColor: "rgba(0, 0, 0, .14)", railColorActive: r, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: i, railBorderRadiusMedium: i, railBorderRadiusLarge: i, buttonBorderRadiusSmall: i, buttonBorderRadiusMedium: i, buttonBorderRadiusLarge: i, boxShadowFocus: `0 0 0 2px ${ce(r, { alpha: 0.2 })}` });
}
const f_ = { name: "Switch", common: Q, self: d_ }, h_ = { thPaddingSmall: "6px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "6px", tdPaddingMedium: "12px", tdPaddingLarge: "12px" };
function p_(t) {
  const { dividerColor: r, cardColor: o, modalColor: i, popoverColor: a, tableHeaderColor: c, tableColorStriped: u, textColor1: d, textColor2: f, borderRadius: p, fontWeightStrong: g, lineHeight: m, fontSizeSmall: C, fontSizeMedium: x, fontSizeLarge: y } = t;
  return Object.assign(Object.assign({}, h_), { fontSizeSmall: C, fontSizeMedium: x, fontSizeLarge: y, lineHeight: m, borderRadius: p, borderColor: ne(o, r), borderColorModal: ne(i, r), borderColorPopover: ne(a, r), tdColor: o, tdColorModal: i, tdColorPopover: a, tdColorStriped: ne(o, u), tdColorStripedModal: ne(i, u), tdColorStripedPopover: ne(a, u), thColor: ne(o, c), thColorModal: ne(i, c), thColorPopover: ne(a, c), thTextColor: d, tdTextColor: f, thFontWeight: g });
}
const g_ = { name: "Table", common: Q, self: p_ }, v_ = { tabFontSizeSmall: "14px", tabFontSizeMedium: "14px", tabFontSizeLarge: "16px", tabGapSmallLine: "36px", tabGapMediumLine: "36px", tabGapLargeLine: "36px", tabGapSmallLineVertical: "8px", tabGapMediumLineVertical: "8px", tabGapLargeLineVertical: "8px", tabPaddingSmallLine: "6px 0", tabPaddingMediumLine: "10px 0", tabPaddingLargeLine: "14px 0", tabPaddingVerticalSmallLine: "6px 12px", tabPaddingVerticalMediumLine: "8px 16px", tabPaddingVerticalLargeLine: "10px 20px", tabGapSmallBar: "36px", tabGapMediumBar: "36px", tabGapLargeBar: "36px", tabGapSmallBarVertical: "8px", tabGapMediumBarVertical: "8px", tabGapLargeBarVertical: "8px", tabPaddingSmallBar: "4px 0", tabPaddingMediumBar: "6px 0", tabPaddingLargeBar: "10px 0", tabPaddingVerticalSmallBar: "6px 12px", tabPaddingVerticalMediumBar: "8px 16px", tabPaddingVerticalLargeBar: "10px 20px", tabGapSmallCard: "4px", tabGapMediumCard: "4px", tabGapLargeCard: "4px", tabGapSmallCardVertical: "4px", tabGapMediumCardVertical: "4px", tabGapLargeCardVertical: "4px", tabPaddingSmallCard: "8px 16px", tabPaddingMediumCard: "10px 20px", tabPaddingLargeCard: "12px 24px", tabPaddingSmallSegment: "4px 0", tabPaddingMediumSegment: "6px 0", tabPaddingLargeSegment: "8px 0", tabPaddingVerticalLargeSegment: "0 8px", tabPaddingVerticalSmallCard: "8px 12px", tabPaddingVerticalMediumCard: "10px 16px", tabPaddingVerticalLargeCard: "12px 20px", tabPaddingVerticalSmallSegment: "0 4px", tabPaddingVerticalMediumSegment: "0 6px", tabGapSmallSegment: "0", tabGapMediumSegment: "0", tabGapLargeSegment: "0", tabGapSmallSegmentVertical: "0", tabGapMediumSegmentVertical: "0", tabGapLargeSegmentVertical: "0", panePaddingSmall: "8px 0 0 0", panePaddingMedium: "12px 0 0 0", panePaddingLarge: "16px 0 0 0", closeSize: "18px", closeIconSize: "14px" };
function m_(t) {
  const { textColor2: r, primaryColor: o, textColorDisabled: i, closeIconColor: a, closeIconColorHover: c, closeIconColorPressed: u, closeColorHover: d, closeColorPressed: f, tabColor: p, baseColor: g, dividerColor: m, fontWeight: C, textColor1: x, borderRadius: y, fontSize: P, fontWeightStrong: _ } = t;
  return Object.assign(Object.assign({}, v_), { colorSegment: p, tabFontSizeCard: P, tabTextColorLine: x, tabTextColorActiveLine: o, tabTextColorHoverLine: o, tabTextColorDisabledLine: i, tabTextColorSegment: x, tabTextColorActiveSegment: r, tabTextColorHoverSegment: r, tabTextColorDisabledSegment: i, tabTextColorBar: x, tabTextColorActiveBar: o, tabTextColorHoverBar: o, tabTextColorDisabledBar: i, tabTextColorCard: x, tabTextColorHoverCard: x, tabTextColorActiveCard: o, tabTextColorDisabledCard: i, barColor: o, closeIconColor: a, closeIconColorHover: c, closeIconColorPressed: u, closeColorHover: d, closeColorPressed: f, closeBorderRadius: y, tabColor: p, tabColorSegment: g, tabBorderColor: m, tabFontWeightActive: C, tabFontWeight: C, tabBorderRadius: y, paneTextColor: r, fontWeightStrong: _ });
}
const b_ = { name: "Tabs", common: Q, self: m_ };
function x_(t) {
  const { textColor1: r, textColor2: o, fontWeightStrong: i, fontSize: a } = t;
  return { fontSize: a, titleTextColor: r, textColor: o, titleFontWeight: i };
}
const C_ = { name: "Thing", common: Q, self: x_ }, y_ = { titleMarginMedium: "0 0 6px 0", titleMarginLarge: "-2px 0 6px 0", titleFontSizeMedium: "14px", titleFontSizeLarge: "16px", iconSizeMedium: "14px", iconSizeLarge: "14px" };
function w_(t) {
  const { textColor3: r, infoColor: o, errorColor: i, successColor: a, warningColor: c, textColor1: u, textColor2: d, railColor: f, fontWeightStrong: p, fontSize: g } = t;
  return Object.assign(Object.assign({}, y_), { contentFontSize: g, titleFontWeight: p, circleBorder: `2px solid ${r}`, circleBorderInfo: `2px solid ${o}`, circleBorderError: `2px solid ${i}`, circleBorderSuccess: `2px solid ${a}`, circleBorderWarning: `2px solid ${c}`, iconColor: r, iconColorInfo: o, iconColorError: i, iconColorSuccess: a, iconColorWarning: c, titleTextColor: u, contentTextColor: d, metaTextColor: r, lineColor: f });
}
const S_ = { name: "Timeline", common: Q, self: w_ }, $_ = { extraFontSizeSmall: "12px", extraFontSizeMedium: "12px", extraFontSizeLarge: "14px", titleFontSizeSmall: "14px", titleFontSizeMedium: "16px", titleFontSizeLarge: "16px", closeSize: "20px", closeIconSize: "16px", headerHeightSmall: "44px", headerHeightMedium: "44px", headerHeightLarge: "50px" };
function P_(t) {
  const { fontWeight: r, fontSizeLarge: o, fontSizeMedium: i, fontSizeSmall: a, heightLarge: c, heightMedium: u, borderRadius: d, cardColor: f, tableHeaderColor: p, textColor1: g, textColorDisabled: m, textColor2: C, textColor3: x, borderColor: y, hoverColor: P, closeColorHover: _, closeColorPressed: $, closeIconColor: R, closeIconColorHover: L, closeIconColorPressed: I } = t;
  return Object.assign(Object.assign({}, $_), { itemHeightSmall: u, itemHeightMedium: u, itemHeightLarge: c, fontSizeSmall: a, fontSizeMedium: i, fontSizeLarge: o, borderRadius: d, dividerColor: y, borderColor: y, listColor: f, headerColor: ne(f, p), titleTextColor: g, titleTextColorDisabled: m, extraTextColor: x, extraTextColorDisabled: m, itemTextColor: C, itemTextColorDisabled: m, itemColorPending: P, titleFontWeight: r, closeColorHover: _, closeColorPressed: $, closeIconColor: R, closeIconColorHover: L, closeIconColorPressed: I });
}
const __ = { name: "Transfer", common: Q, peers: { Checkbox: Co, Scrollbar: St, Input: Jt, Empty: fn, Button: Bt }, self: P_ };
function T_(t) {
  const { borderRadiusSmall: r, dividerColor: o, hoverColor: i, pressedColor: a, primaryColor: c, textColor3: u, textColor2: d, textColorDisabled: f, fontSize: p } = t;
  return { fontSize: p, lineHeight: "1.5", nodeHeight: "30px", nodeWrapperPadding: "3px 0", nodeBorderRadius: r, nodeColorHover: i, nodeColorPressed: a, nodeColorActive: ce(c, { alpha: 0.1 }), arrowColor: u, nodeTextColor: d, nodeTextColorDisabled: f, loadingColor: c, dropMarkColor: c, lineColor: o };
}
const Cp = { name: "Tree", common: Q, peers: { Checkbox: Co, Scrollbar: St, Empty: fn }, self: T_ };
function E_(t) {
  const { popoverColor: r, boxShadow2: o, borderRadius: i, heightMedium: a, dividerColor: c, textColor2: u } = t;
  return { menuPadding: "4px", menuColor: r, menuBoxShadow: o, menuBorderRadius: i, menuHeight: `calc(${a} * 7.6)`, actionDividerColor: c, actionTextColor: u, actionPadding: "8px 12px", headerDividerColor: c, headerTextColor: u, headerPadding: "8px 12px" };
}
const z_ = { name: "TreeSelect", common: Q, peers: { Tree: Cp, Empty: fn, InternalSelection: Zs }, self: E_ }, R_ = { headerFontSize1: "30px", headerFontSize2: "22px", headerFontSize3: "18px", headerFontSize4: "16px", headerFontSize5: "16px", headerFontSize6: "16px", headerMargin1: "28px 0 20px 0", headerMargin2: "28px 0 20px 0", headerMargin3: "28px 0 20px 0", headerMargin4: "28px 0 18px 0", headerMargin5: "28px 0 18px 0", headerMargin6: "28px 0 18px 0", headerPrefixWidth1: "16px", headerPrefixWidth2: "16px", headerPrefixWidth3: "12px", headerPrefixWidth4: "12px", headerPrefixWidth5: "12px", headerPrefixWidth6: "12px", headerBarWidth1: "4px", headerBarWidth2: "4px", headerBarWidth3: "3px", headerBarWidth4: "3px", headerBarWidth5: "3px", headerBarWidth6: "3px", pMargin: "16px 0 16px 0", liMargin: ".25em 0 0 0", olPadding: "0 0 0 2em", ulPadding: "0 0 0 2em" };
function I_(t) {
  const { primaryColor: r, textColor2: o, borderColor: i, lineHeight: a, fontSize: c, borderRadiusSmall: u, dividerColor: d, fontWeightStrong: f, textColor1: p, textColor3: g, infoColor: m, warningColor: C, errorColor: x, successColor: y, codeColor: P } = t;
  return Object.assign(Object.assign({}, R_), { aTextColor: r, blockquoteTextColor: o, blockquotePrefixColor: i, blockquoteLineHeight: a, blockquoteFontSize: c, codeBorderRadius: u, liTextColor: o, liLineHeight: a, liFontSize: c, hrColor: d, headerFontWeight: f, headerTextColor: p, pTextColor: o, pTextColor1Depth: p, pTextColor2Depth: o, pTextColor3Depth: g, pLineHeight: a, pFontSize: c, headerBarColor: r, headerBarColorPrimary: r, headerBarColorInfo: m, headerBarColorError: x, headerBarColorWarning: C, headerBarColorSuccess: y, textColor: o, textColor1Depth: p, textColor2Depth: o, textColor3Depth: g, textColorPrimary: r, textColorInfo: m, textColorSuccess: y, textColorWarning: C, textColorError: x, codeTextColor: o, codeColor: P, codeBorder: "1px solid #0000" });
}
const yp = { name: "Typography", common: Q, self: I_ };
function B_(t) {
  const { iconColor: r, primaryColor: o, errorColor: i, textColor2: a, successColor: c, opacityDisabled: u, actionColor: d, borderColor: f, hoverColor: p, lineHeight: g, borderRadius: m, fontSize: C } = t;
  return { fontSize: C, lineHeight: g, borderRadius: m, draggerColor: d, draggerBorder: `1px dashed ${f}`, draggerBorderHover: `1px dashed ${o}`, itemColorHover: p, itemColorHoverError: ce(i, { alpha: 0.06 }), itemTextColor: a, itemTextColorError: i, itemTextColorSuccess: c, itemIconColor: r, itemDisabledOpacity: u, itemBorderImageCardError: `1px solid ${i}`, itemBorderImageCard: `1px solid ${f}` };
}
const M_ = { name: "Upload", common: Q, peers: { Button: Bt, Progress: xp }, self: B_ }, A_ = { name: "Watermark", common: Q, self(t) {
  const { fontFamily: r } = t;
  return { fontFamily: r };
} };
function L_(t) {
  const { popoverColor: r, dividerColor: o, borderRadius: i } = t;
  return { color: r, buttonBorderColor: o, borderRadiusSquare: i, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
}
const F_ = { name: "FloatButtonGroup", common: Q, self: L_ };
function H_(t) {
  const { popoverColor: r, textColor2: o, buttonColor2Hover: i, buttonColor2Pressed: a, primaryColor: c, primaryColorHover: u, primaryColorPressed: d, borderRadius: f } = t;
  return { color: r, colorHover: i, colorPressed: a, colorPrimary: c, colorPrimaryHover: u, colorPrimaryPressed: d, textColor: o, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)", textColorPrimary: "#fff", borderRadiusSquare: f };
}
const O_ = { name: "FloatButton", common: Q, self: H_ };
function k_(t) {
  const { borderRadius: r, fontSizeMini: o, fontSizeTiny: i, fontSizeSmall: a, fontWeight: c, textColor2: u, cardColor: d, buttonColor2Hover: f } = t;
  return { activeColors: ["#9be9a8", "#40c463", "#30a14e", "#216e39"], borderRadius: r, borderColor: d, textColor: u, mininumColor: f, fontWeight: c, loadingColorStart: "rgba(0, 0, 0, 0.06)", loadingColorEnd: "rgba(0, 0, 0, 0.12)", rectSizeSmall: "10px", rectSizeMedium: "11px", rectSizeLarge: "12px", borderRadiusSmall: "2px", borderRadiusMedium: "2px", borderRadiusLarge: "2px", xGapSmall: "2px", xGapMedium: "3px", xGapLarge: "3px", yGapSmall: "2px", yGapMedium: "3px", yGapLarge: "3px", fontSizeSmall: i, fontSizeMedium: o, fontSizeLarge: a };
}
const D_ = { name: "Heatmap", common: Q, self: k_ };
function W_(t) {
  const { primaryColor: r, baseColor: o } = t;
  return { color: r, iconColor: o };
}
const N_ = { name: "IconWrapper", common: Q, self: W_ };
function j_() {
  return { toolbarIconColor: "rgba(255, 255, 255, .9)", toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
}
const G_ = { name: "Image", common: Q, peers: { Tooltip: si }, self: j_ }, V_ = { extraFontSize: "12px", width: "440px" };
function K_(t) {
  const { fontWeight: r, iconColorDisabled: o, iconColor: i, fontSizeLarge: a, fontSizeMedium: c, fontSizeSmall: u, heightLarge: d, heightMedium: f, heightSmall: p, borderRadius: g, cardColor: m, tableHeaderColor: C, textColor1: x, textColorDisabled: y, textColor2: P, borderColor: _, hoverColor: $ } = t;
  return Object.assign(Object.assign({}, V_), { itemHeightSmall: p, itemHeightMedium: f, itemHeightLarge: d, fontSizeSmall: u, fontSizeMedium: c, fontSizeLarge: a, borderRadius: g, borderColor: _, listColor: m, headerColor: ne(m, C), titleTextColor: x, titleTextColorDisabled: y, extraTextColor: P, filterDividerColor: _, itemTextColor: P, itemTextColorDisabled: y, itemColorPending: $, titleFontWeight: r, iconColor: i, iconColorDisabled: o });
}
const U_ = { name: "Transfer", common: Q, peers: { Checkbox: Co, Scrollbar: St, Input: Jt, Empty: fn, Button: Bt }, self: K_ };
function q_() {
  return {};
}
const Y_ = { name: "Marquee", common: Q, self: q_ };
function X_(t) {
  return { borderRadius: t.borderRadius };
}
const Z_ = { name: "QrCode", common: Q, self: X_ };
function Q_(t) {
  const { heightSmall: r, heightMedium: o, heightLarge: i, borderRadius: a } = t;
  return { color: "#eee", colorEnd: "#ddd", borderRadius: a, heightSmall: r, heightMedium: o, heightLarge: i };
}
const J_ = { name: "Skeleton", common: Q, self: Q_ };
function eT(t) {
  const { primaryColorHover: r, borderColor: o } = t;
  return { resizableTriggerColorHover: r, resizableTriggerColor: o };
}
const tT = { name: "Split", common: Q, self: eT }, rT = ye("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [pe("strong", `
 font-weight: var(--n-font-weight-strong);
 `), pe("italic", { fontStyle: "italic" }), pe("underline", { textDecoration: "underline" }), pe("code", `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]), nT = Object.assign(Object.assign({}, at.props), { code: Boolean, type: { type: String, default: "default" }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), pE = Ee({ name: "Text", props: nT, setup(t) {
  const { mergedClsPrefixRef: r, inlineThemeDisabled: o } = zr(t), i = at("Typography", "-text", rT, yp, t, r), a = Y(() => {
    const { depth: u, type: d } = t, f = d === "default" ? u === void 0 ? "textColor" : `textColor${u}Depth` : Ce("textColor", d), { common: { fontWeightStrong: p, fontFamilyMono: g, cubicBezierEaseInOut: m }, self: { codeTextColor: C, codeBorderRadius: x, codeColor: y, codeBorder: P, [f]: _ } } = i.value;
    return { "--n-bezier": m, "--n-text-color": _, "--n-font-weight-strong": p, "--n-font-famliy-mono": g, "--n-code-border-radius": x, "--n-code-text-color": C, "--n-code-color": y, "--n-code-border": P };
  }), c = o ? Kr("text", Y(() => `${t.type[0]}${t.depth || ""}`), a, t) : void 0;
  return { mergedClsPrefix: r, compitableTag: yh(t, ["as", "tag"]), cssVars: o ? void 0 : a, themeClass: c == null ? void 0 : c.themeClass, onRender: c == null ? void 0 : c.onRender };
}, render() {
  var t, r, o;
  const { mergedClsPrefix: i } = this;
  (t = this.onRender) === null || t === void 0 || t.call(this);
  const a = [`${i}-text`, this.themeClass, { [`${i}-text--code`]: this.code, [`${i}-text--delete`]: this.delete, [`${i}-text--strong`]: this.strong, [`${i}-text--italic`]: this.italic, [`${i}-text--underline`]: this.underline }], c = (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r);
  return this.code ? B("code", { class: a, style: this.cssVars }, this.delete ? B("del", null, c) : c) : this.delete ? B("del", { class: a, style: this.cssVars }, c) : B(this.compitableTag || "span", { class: a, style: this.cssVars }, c);
} }), oT = () => ({}), iT = { name: "Equation", common: Q, self: oT }, gE = { name: "light", common: Q, Alert: a2, Anchor: f2, AutoComplete: b2, Avatar: op, AvatarGroup: y2, BackTop: $2, Badge: _2, Breadcrumb: z2, Button: Bt, ButtonGroup: CP, Calendar: H2, Card: Qs, Carousel: V2, Cascader: Y2, Checkbox: Co, Code: ip, Collapse: Q2, CollapseTransition: e$, ColorPicker: r$, DataTable: v$, DatePicker: L$, Descriptions: O$, Dialog: tc, Divider: aP, Drawer: cP, Dropdown: El, DynamicInput: fP, DynamicTags: gP, Element: vP, Empty: fn, Equation: iT, Ellipsis: cp, Flex: xP, Form: SP, GradientText: PP, Heatmap: D_, Icon: fp, IconWrapper: N_, Image: G_, Input: Jt, InputNumber: TP, InputOtp: zP, Layout: IP, LegacyTransfer: U_, List: AP, LoadingBar: J$, Log: FP, Menu: WP, Mention: OP, Message: rP, Modal: mp, Notification: iP, PageHeader: GP, Pagination: sp, Popconfirm: UP, Popover: hn, Popselect: lp, Progress: xp, QrCode: Z_, Radio: up, Rate: XP, Row: BP, Result: JP, Scrollbar: St, Skeleton: J_, Select: ap, Slider: r_, Space: bp, Spin: o_, Statistic: l_, Steps: c_, Switch: f_, Table: g_, Tabs: b_, Tag: np, Thing: C_, TimePicker: vp, Timeline: S_, Tooltip: si, Transfer: __, Tree: Cp, TreeSelect: z_, Typography: yp, Upload: M_, Watermark: A_, Split: tT, FloatButton: O_, FloatButtonGroup: F_, Marquee: Y_ };
class lT {
  constructor() {
    __publicField(this, "storageProvider", null);
    __publicField(this, "initialized", false);
  }
  async init() {
    if (this.initialized) return;
    const r = GC();
    if (r.isErr()) throw r.error;
    const o = r.value.getStorage();
    if (o.isErr()) throw o.error;
    this.storageProvider = o.value;
    const i = await this.storageProvider.init();
    if (i.isErr()) throw i.error;
    this.initialized = true;
  }
  async set(r, o) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const i = await this.storageProvider.set(r, o);
    if (i.isErr()) throw i.error;
  }
  async get(r) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const o = await this.storageProvider.get(r);
    if (o.isErr()) throw o.error;
    return o.value;
  }
  async save() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const r = await this.storageProvider.save();
    if (r.isErr()) throw r.error;
  }
  async exportToJson() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const r = await this.storageProvider.exportToJson();
    if (r.isErr()) throw r.error;
    return r.value;
  }
  async clear() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const r = await this.storageProvider.clear();
    if (r.isErr()) throw r.error;
  }
  async remove(r) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const o = await this.storageProvider.remove(r);
    if (o.isErr()) throw o.error;
  }
}
const Nt = new lT(), aT = Nt.set.bind(Nt), sT = Nt.get.bind(Nt), cT = Nt.save.bind(Nt);
Nt.init.bind(Nt);
Nt.exportToJson.bind(Nt);
Nt.clear.bind(Nt);
Nt.remove.bind(Nt);
const vE = VC("settings", () => {
  const t = se({ theme: "system", interfaceLanguage: "en", mapLanguage: "interface", watchCompatibilityMode: true, geolocationCorrection: false });
  async function r() {
    const i = await sT("settings");
    i && (t.value = { ...t.value, ...i });
  }
  async function o() {
    await aT("settings", JSON.parse(JSON.stringify(t.value))), await cT();
  }
  return ft(t, o, { deep: true }), { settings: t, init: r };
});
function uT(t) {
  return KC() ? (UC(t), true) : false;
}
const gs = /* @__PURE__ */ new WeakMap(), dT = (...t) => {
  var r;
  const o = t[0], i = (r = vo()) == null ? void 0 : r.proxy;
  if (i == null && !qf()) throw new Error("injectLocal must be called in setup");
  return i && gs.has(i) && o in gs.get(i) ? gs.get(i)[o] : He(...t);
}, fT = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const hT = Object.prototype.toString, pT = (t) => hT.call(t) === "[object Object]";
function Gf(t) {
  return t.endsWith("rem") ? Number.parseFloat(t) * 16 : Number.parseFloat(t);
}
function vs(t) {
  return Array.isArray(t) ? t : [t];
}
function gT(t) {
  return vo();
}
function vT(t, r = true, o) {
  gT() ? vr(t, o) : r ? t() : Mn(t);
}
function mT(t, r, o) {
  return ft(t, r, { ...o, immediate: true });
}
const oc = fT ? window : void 0;
function bT(t) {
  var r;
  const o = co(t);
  return (r = o == null ? void 0 : o.$el) != null ? r : o;
}
function Ms(...t) {
  const r = [], o = () => {
    r.forEach((d) => d()), r.length = 0;
  }, i = (d, f, p, g) => (d.addEventListener(f, p, g), () => d.removeEventListener(f, p, g)), a = Y(() => {
    const d = vs(co(t[0])).filter((f) => f != null);
    return d.every((f) => typeof f != "string") ? d : void 0;
  }), c = mT(() => {
    var d, f;
    return [(f = (d = a.value) == null ? void 0 : d.map((p) => bT(p))) != null ? f : [oc].filter((p) => p != null), vs(co(a.value ? t[1] : t[0])), vs(so(a.value ? t[2] : t[1])), co(a.value ? t[3] : t[2])];
  }, ([d, f, p, g]) => {
    if (o(), !(d == null ? void 0 : d.length) || !(f == null ? void 0 : f.length) || !(p == null ? void 0 : p.length)) return;
    const m = pT(g) ? { ...g } : g;
    r.push(...d.flatMap((C) => f.flatMap((x) => p.map((y) => i(C, x, y, m)))));
  }, { flush: "post" }), u = () => {
    c(), o();
  };
  return uT(o), u;
}
function xT() {
  const t = jr(false), r = vo();
  return r && vr(() => {
    t.value = true;
  }, r), t;
}
function CT(t) {
  const r = xT();
  return Y(() => (r.value, !!t()));
}
const yT = Symbol("vueuse-ssr-width");
function wT() {
  const t = qf() ? dT(yT, null) : null;
  return typeof t == "number" ? t : void 0;
}
function ST(t, r = {}) {
  const { window: o = oc, ssrWidth: i = wT() } = r, a = CT(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), c = jr(typeof i == "number"), u = jr(), d = jr(false), f = (p) => {
    d.value = p.matches;
  };
  return mo(() => {
    if (c.value) {
      c.value = !a.value;
      const p = co(t).split(",");
      d.value = p.some((g) => {
        const m = g.includes("not all"), C = g.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), x = g.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let y = !!(C || x);
        return C && y && (y = i >= Gf(C[1])), x && y && (y = i <= Gf(x[1])), m ? !y : y;
      });
      return;
    }
    a.value && (u.value = o.matchMedia(co(t)), d.value = u.value.matches);
  }), Ms(u, "change", f, { passive: true }), Y(() => d.value);
}
function mE(t = {}) {
  const { window: r = oc, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: i = Number.POSITIVE_INFINITY, listenOrientation: a = true, includeScrollbar: c = true, type: u = "inner" } = t, d = jr(o), f = jr(i), p = () => {
    if (r) if (u === "outer") d.value = r.outerWidth, f.value = r.outerHeight;
    else if (u === "visual" && r.visualViewport) {
      const { width: m, height: C, scale: x } = r.visualViewport;
      d.value = Math.round(m * x), f.value = Math.round(C * x);
    } else c ? (d.value = r.innerWidth, f.value = r.innerHeight) : (d.value = r.document.documentElement.clientWidth, f.value = r.document.documentElement.clientHeight);
  };
  p(), vT(p);
  const g = { passive: true };
  if (Ms("resize", p, g), r && u === "visual" && r.visualViewport && Ms(r.visualViewport, "resize", p, g), a) {
    const m = ST("(orientation: portrait)");
    ft(m, () => p());
  }
  return { width: d, height: f };
}
class bE {
  constructor() {
    __publicField(this, "parser");
    __publicField(this, "platformContext");
    this.parser = new qC(navigator.userAgent), this.platformContext = YC();
  }
  get isMobile() {
    return this.platformContext.isMobile;
  }
  get isTablet() {
    return this.platformContext.isTablet;
  }
  get isUnknown() {
    return typeof this.parser.getDevice().type > "u";
  }
  get browser() {
    return Bd() ? "Tauri" : this.platformContext.browser || "";
  }
  get engine() {
    return this.parser.getEngine().name || "";
  }
  get os() {
    return this.platformContext.os || "";
  }
  get context() {
    return this.platformContext;
  }
  get isTauri() {
    return Bd();
  }
  get isWeb() {
    const r = this.platformContext.environment;
    return r === "web" || r === "mobile_web";
  }
}
export {
  By as $,
  q2 as A,
  fn as B,
  Z2 as C,
  J2 as D,
  t$ as E,
  i$ as F,
  a$ as G,
  c$ as H,
  u$ as I,
  f$ as J,
  g$ as K,
  x$ as L,
  B$ as M,
  A$ as N,
  H$ as O,
  W$ as P,
  K$ as Q,
  VT as R,
  V$ as S,
  ti as T,
  dE as U,
  rc as V,
  N$ as W,
  ZT as X,
  Wy as Y,
  jy as Z,
  k$ as _,
  ne as a,
  aE as a$,
  cE as a0,
  uE as a1,
  tP as a2,
  X as a3,
  ye as a4,
  oE as a5,
  ae as a6,
  pe as a7,
  Es as a8,
  Vh as a9,
  MP as aA,
  DP as aB,
  jP as aC,
  KP as aD,
  qP as aE,
  QP as aF,
  e_ as aG,
  n_ as aH,
  i_ as aI,
  s_ as aJ,
  u_ as aK,
  p_ as aL,
  m_ as aM,
  x_ as aN,
  y_ as aO,
  $_ as aP,
  T_ as aQ,
  I_ as aR,
  B_ as aS,
  Vr as aT,
  Rn as aU,
  Q as aV,
  k_ as aW,
  W_ as aX,
  V_ as aY,
  q_ as aZ,
  an as a_,
  $r as aa,
  Kh as ab,
  zr as ac,
  hE as ad,
  ii as ae,
  at as af,
  Ce as ag,
  Kr as ah,
  cS as ai,
  Gh as aj,
  rP as ak,
  tS as al,
  nS as am,
  rS as an,
  Ff as ao,
  lS as ap,
  fE as aq,
  Z$ as ar,
  oP as as,
  lP as at,
  sP as au,
  uP as av,
  hP as aw,
  mP as ax,
  wP as ay,
  EP as az,
  hS as b,
  xy as b$,
  ur as b0,
  Ys as b1,
  sE as b2,
  Ef as b3,
  kS as b4,
  Ch as b5,
  yh as b6,
  qT as b7,
  WP as b8,
  Wt as b9,
  li as bA,
  Bf as bB,
  KT as bC,
  Jh as bD,
  Dt as bE,
  Yh as bF,
  ai as bG,
  nE as bH,
  Tn as bI,
  Zd as bJ,
  Uy as bK,
  np as bL,
  zf as bM,
  Mf as bN,
  Zs as bO,
  a2 as bP,
  Dy as bQ,
  f2 as bR,
  QT as bS,
  Jt as bT,
  p2 as bU,
  Kw as bV,
  Ze as bW,
  Xe as bX,
  oi as bY,
  R2 as bZ,
  fh as b_,
  oT as ba,
  TT as bb,
  vE as bc,
  bE as bd,
  mE as be,
  pE as bf,
  Rs as bg,
  w$ as bh,
  rp as bi,
  U1 as bj,
  ET as bk,
  j1 as bl,
  zT as bm,
  RT as bn,
  tE as bo,
  gE as bp,
  lE as bq,
  Vs as br,
  xo as bs,
  Go as bt,
  Eh as bu,
  Qd as bv,
  BT as bw,
  wy as bx,
  Tf as by,
  _l as bz,
  On as c,
  Zo as c$,
  Co as c0,
  Q2 as c1,
  Oy as c2,
  Jw as c3,
  JT as c4,
  Nw as c5,
  NT as c6,
  Ey as c7,
  LT as c8,
  Iy as c9,
  cp as cA,
  aP as cB,
  Wh as cC,
  UT as cD,
  Zy as cE,
  $l as cF,
  ni as cG,
  Pl as cH,
  Uh as cI,
  Us as cJ,
  zh as cK,
  cP as cL,
  gl as cM,
  Xy as cN,
  Ww as cO,
  bp as cP,
  MT as cQ,
  gP as cR,
  xP as cS,
  SP as cT,
  Af as cU,
  G_ as cV,
  TP as cW,
  iE as cX,
  AP as cY,
  UP as cZ,
  Tl as c_,
  Sy as ca,
  jT as cb,
  Ty as cc,
  DT as cd,
  AT as ce,
  $y as cf,
  FT as cg,
  HT as ch,
  GT as ci,
  WT as cj,
  OT as ck,
  kT as cl,
  Ln as cm,
  _h as cn,
  Th as co,
  Rh as cp,
  go as cq,
  Ps as cr,
  r$ as cs,
  Sl as ct,
  Jo as cu,
  ap as cv,
  YT as cw,
  xl as cx,
  up as cy,
  eE as cz,
  WS as d,
  xp as d0,
  o_ as d1,
  tT as d2,
  Ts as d3,
  f_ as d4,
  b_ as d5,
  yp as d6,
  XT as d7,
  M_ as d8,
  sT as d9,
  aT as da,
  cT as db,
  j2 as dc,
  _T as dd,
  PT as de,
  jS as e,
  VS as f,
  QS as g,
  Gs as h,
  ce as i,
  e2 as j,
  i2 as k,
  d2 as l,
  rE as m,
  g2 as n,
  m2 as o,
  x2 as p,
  C2 as q,
  dn as r,
  ol as s,
  w2 as t,
  E2 as u,
  B2 as v,
  F2 as w,
  k2 as x,
  G2 as y,
  U2 as z
};
