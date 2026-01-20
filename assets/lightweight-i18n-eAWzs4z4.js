import { i as w, b as j, v as I } from "./index-BRrbf56c.js";
const y = /* @__PURE__ */ Symbol("i18n");
function R(e, l = "") {
  const s = /* @__PURE__ */ new Map();
  for (const o in e) {
    const c = l ? `${l}.${o}` : o, t = e[o];
    if (typeof t == "string") s.set(c, t);
    else if (typeof t == "object" && t !== null) {
      const u = R(t, c);
      for (const [g, i] of u) s.set(g, i);
    }
  }
  return s;
}
function M(e, l) {
  const s = R(e), o = /* @__PURE__ */ new Map();
  for (const [c, t] of s) o.set(c, t);
  return o;
}
function p(e) {
  const l = j(e.locale), s = e.messages, o = e.fallbackLocale, c = Object.keys(s), t = /* @__PURE__ */ new Map();
  for (const n of c) t.has(n) || t.set(n, M(s[n]));
  function u(n) {
    var _a, _b;
    const r = (_a = t.get(l.value)) == null ? void 0 : _a.get(n);
    if (r !== void 0) return r;
    if (l.value !== o) {
      const f = (_b = t.get(o)) == null ? void 0 : _b.get(n);
      if (f !== void 0) return f;
    }
    return n;
  }
  const g = /\{(\w+)\}/g;
  function i(n, a) {
    let r = u(n);
    if (!a) return r;
    const d = I(a);
    return r = r.replace(g, (f, v) => v in d ? String(d[v]) : f), r;
  }
  function k(n, a) {
    return i(n, a);
  }
  const b = { t: i, locale: l, availableLocales: c, messages: s, fallbackLocale: o };
  return Object.assign(b, { install(n) {
    n.config.globalProperties.$t = k, n.config.globalProperties.$i18n = b, n.provide(y, b), n.config.globalProperties.$locale = l;
  } });
}
function T() {
  const e = w(y);
  if (!e) throw new Error("I18n instance not found. Did you forget to install the i18n plugin?");
  return e;
}
export {
  p as c,
  T as u
};
