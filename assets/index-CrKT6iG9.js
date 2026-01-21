import { i as y, b as x, v as I } from "./index-DQa64P1P.js";
var $ = /* @__PURE__ */ Symbol("i18n");
function P(e, o = "") {
  let r = /* @__PURE__ */ new Map();
  for (let i in e) {
    let f = o ? `${o}.${i}` : i, t = e[i];
    if (typeof t == "string") r.set(f, t);
    else if (typeof t == "object" && t !== null) {
      let s = P(t, f);
      for (let [b, n] of s) r.set(b, n);
    }
  }
  return r;
}
function v(e) {
  let o = x(e.locale), r = e.messages, i = e.fallbackLocale, f = Object.keys(r), t = P(r);
  function s(l) {
    let a = t.get(`${o.value}.${l}`) ?? t.get(`${i}.${l}`);
    return typeof a < "u" ? a : l;
  }
  let b = /\{(\w+)\}/g;
  function n(l, a) {
    let g = s(l);
    if (!a) return g;
    let u = I(a);
    return g = g.replace(b, (j, p) => p in u ? String(u[p]) : j), g;
  }
  let c = { t: n, locale: o, availableLocales: f, messages: r, fallbackLocale: i };
  return Object.assign(c, { install(l) {
    var _a;
    l.provide($, c), e.globalInject !== false && (((_a = e.globalInjectPrefix) == null ? void 0 : _a.length) ? (l.config.globalProperties[`$${e.globalInjectPrefix}T`] = n, l.config.globalProperties[`$${e.globalInjectPrefix}I18n`] = c, l.config.globalProperties[`$${e.globalInjectPrefix}Locale`] = o) : (l.config.globalProperties.$t = n, l.config.globalProperties.$i18n = c, l.config.globalProperties.$locale = o));
  } });
}
function L() {
  let e = y($);
  if (!e) throw new Error("I18n (nano) instance not found. Did you forget to install the i18n plugin?");
  return e;
}
export {
  L,
  v as x
};
