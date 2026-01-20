import { i as k, b as I, Z as y, j as $, X as w } from "./index-B6-IRX0K.js";
const R = /* @__PURE__ */ Symbol("i18n"), b = /* @__PURE__ */ new Map();
function j(e, r = "") {
  const c = /* @__PURE__ */ new Map();
  for (const o in e) {
    const a = r ? `${r}.${o}` : o, l = e[o];
    if (typeof l == "string") c.set(a, l);
    else if (typeof l == "object" && l !== null) {
      const v = j(l, a);
      for (const [d, u] of v) c.set(d, u);
    }
  }
  return c;
}
function h(e, r) {
  const c = j(e), o = /* @__PURE__ */ new Map();
  for (const [a, l] of c) o.set(a, y(l));
  return o;
}
function T(e) {
  const r = I(e.locale), c = y(e.messages), o = e.fallbackLocale, a = Object.keys(c.value);
  for (const n of a) b.has(n) || b.set(n, h(c.value[n]));
  function l(n) {
    var _a, _b, _c, _d;
    const t = (_b = (_a = b.get(r.value)) == null ? void 0 : _a.get(n)) == null ? void 0 : _b.value;
    if (t !== void 0) return t;
    if (r.value !== o) {
      const f = (_d = (_c = b.get(o)) == null ? void 0 : _c.get(n)) == null ? void 0 : _d.value;
      if (f !== void 0) return f;
    }
    return n;
  }
  function v(n, s) {
    return $(() => {
      let t = l(n);
      if (!s) return t;
      const i = w(s) ? s.value : s;
      return t = t.replace(/\{(\w+)\}/g, (f, g) => g in i ? String(i[g]) : f), t;
    });
  }
  function d(n, s) {
    let t = l(n);
    if (s) {
      const i = w(s) ? s.value : s;
      t = t.replace(/\{(\w+)\}/g, (f, g) => g in i ? String(i[g]) : f);
    }
    return t;
  }
  const u = { t: v, locale: r, availableLocales: a, messages: c.value, fallbackLocale: o };
  return Object.assign(u, { install(n) {
    n.config.globalProperties.$t = d, n.config.globalProperties.$i18n = u, n.provide(R, u), n.config.globalProperties.$locale = r;
  } });
}
function K() {
  const e = k(R);
  if (!e) throw new Error("I18n instance not found. Did you forget to install the i18n plugin?");
  return e;
}
export {
  T as c,
  K as u
};
