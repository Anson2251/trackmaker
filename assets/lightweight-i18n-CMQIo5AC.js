import { i as R, b as j, v as k, X as I } from "./index-BR1TjnZz.js";
const y = /* @__PURE__ */ Symbol("i18n"), b = /* @__PURE__ */ new Map();
function w(t, c = "") {
  const l = /* @__PURE__ */ new Map();
  for (const o in t) {
    const a = c ? `${c}.${o}` : o, s = t[o];
    if (typeof s == "string") l.set(a, s);
    else if (typeof s == "object" && s !== null) {
      const v = w(s, a);
      for (const [d, u] of v) l.set(d, u);
    }
  }
  return l;
}
function $(t, c) {
  const l = w(t), o = /* @__PURE__ */ new Map();
  for (const [a, s] of l) o.set(a, s);
  return o;
}
function T(t) {
  const c = j(t.locale), l = t.messages, o = t.fallbackLocale, a = Object.keys(l);
  for (const n of a) b.has(n) || b.set(n, $(l[n]));
  function s(n) {
    var _a, _b;
    const e = (_a = b.get(c.value)) == null ? void 0 : _a.get(n);
    if (e !== void 0) return e;
    if (c.value !== o) {
      const f = (_b = b.get(o)) == null ? void 0 : _b.get(n);
      if (f !== void 0) return f;
    }
    return n;
  }
  function v(n, r) {
    let e = s(n);
    if (!r) return e;
    const i = k(r);
    return e = e.replace(/\{(\w+)\}/g, (f, g) => g in i ? String(i[g]) : f), e;
  }
  function d(n, r) {
    let e = s(n);
    if (r) {
      const i = I(r) ? r.value : r;
      e = e.replace(/\{(\w+)\}/g, (f, g) => g in i ? String(i[g]) : f);
    }
    return e;
  }
  const u = { t: v, locale: c, availableLocales: a, messages: l.value, fallbackLocale: o };
  return Object.assign(u, { install(n) {
    n.config.globalProperties.$t = d, n.config.globalProperties.$i18n = u, n.provide(y, u), n.config.globalProperties.$locale = c;
  } });
}
function h() {
  const t = R(y);
  if (!t) throw new Error("I18n instance not found. Did you forget to install the i18n plugin?");
  return t;
}
export {
  T as c,
  h as u
};
