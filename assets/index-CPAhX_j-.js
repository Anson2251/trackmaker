import { i as d, b as x, B as M } from "./index-Cd-IjdDN.js";
var I = /* @__PURE__ */ Symbol("i18n"), p = "";
function v(e, t = "") {
  let l = /* @__PURE__ */ new Map(), a = /\s*\|\s*/g;
  for (let f in e) {
    let c = t ? `${t}.${f}` : f, i = e[f];
    if (typeof i == "string") l.set(c, i.replace(a, p));
    else if (Array.isArray(i)) l.set(c, i.join(p));
    else if (typeof i == "object" && i !== null) {
      let g = v(i, c);
      for (let [$, s] of g) l.set($, s);
    }
  }
  return l;
}
function k(e) {
  let t = /* @__PURE__ */ new Map();
  return e.forEach((l, a) => {
    l.includes(p) && t.set(a, l.split(p).map((f) => f.trim()));
  }), t;
}
function z(e) {
  let t = /* @__PURE__ */ new Map();
  for (let l in y) t.set(l, y[l]);
  if (!e) return t;
  for (let l in e) t.set(l, e[l]);
  return t;
}
var y = { zh: () => 0, "zh-CN": () => 0, "zh-TW": () => 0, en: (e) => e === 1 ? 0 : 1, ja: () => 0, ko: () => 0, fr: (e) => e === 0 || e === 1 ? 0 : 1, de: (e) => e === 1 ? 0 : 1, es: (e) => e === 1 ? 0 : 1, ru: (e) => {
  let t = e % 10, l = e % 100;
  return t === 1 && l !== 11 ? 0 : t >= 2 && t <= 4 && (l < 10 || l >= 20) ? 1 : 2;
}, pl: (e) => {
  if (e === 1) return 0;
  let t = e % 10, l = e % 100;
  return t >= 2 && t <= 4 && (l < 10 || l >= 20) ? 1 : 2;
}, ar: (e) => e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 && e % 100 <= 99 ? 4 : 5 };
function E(e) {
  let t = x(e.locale), l = e.messages, a = e.fallbackLocale, f = Object.keys(l), c = v(l), i = z(e.customPluralRules), g = k(c);
  function $(r, o) {
    let n = g.get(`${t.value}.${r}`) ?? g.get(`${a}.${r}`);
    if (!n || n.length === 0) return s(r);
    let h = (i.get(t.value) ?? i.get(a) ?? ((b) => b === 1 ? 0 : 1))(Math.abs(o));
    return n[Math.min(h, n.length - 1)];
  }
  function s(r) {
    let o = c.get(`${t.value}.${r}`) ?? c.get(`${a}.${r}`);
    return typeof o < "u" ? o : r;
  }
  let w = /\{(\w+)\}/g;
  function m(r, o) {
    if (!o) return r;
    let n = M(o);
    return r.replace(w, (h, b) => b in n ? String(n[b]) : h);
  }
  function P(r, o) {
    return m(s(r), o);
  }
  function j(r, o, n) {
    return isNaN(o) && (o = 1), m($(r, o), n);
  }
  let u = { t: P, tc: j, locale: t, availableLocales: f, messages: l, fallbackLocale: a };
  return Object.assign(u, { install(r) {
    var _a;
    r.provide(I, u), e.globalInject !== false && (((_a = e.globalInjectPrefix) == null ? void 0 : _a.length) ? (r.config.globalProperties[`$${e.globalInjectPrefix}T`] = P, r.config.globalProperties[`$${e.globalInjectPrefix}I18n`] = u, r.config.globalProperties[`$${e.globalInjectPrefix}Locale`] = t, r.config.globalProperties[`$${e.globalInjectPrefix}Tc`] = j) : (r.config.globalProperties.$t = P, r.config.globalProperties.$i18n = u, r.config.globalProperties.$locale = t, r.config.globalProperties.$tc = j));
  } });
}
function N() {
  let e = d(I);
  if (!e) throw new Error("I18n (nano) instance not found. Did you forget to install the i18n plugin?");
  return e;
}
export {
  E as v,
  N as z
};
