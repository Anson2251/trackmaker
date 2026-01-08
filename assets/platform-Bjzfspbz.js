var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { N as e, o as t } from "./Card-Cnwdt0Jy.js";
import { Jt as n, Lt as r, a as i, d as a, f as o, p as s } from "./index-DqD7808G.js";
import { n as c, r as l, t as u } from "./storage-Clz-7Xzp.js";
var d = { radioSizeSmall: `14px`, radioSizeMedium: `16px`, radioSizeLarge: `18px`, labelPadding: `0 8px`, labelFontWeight: `400` };
function f(t2) {
  let { borderColor: n2, primaryColor: r2, baseColor: i2, textColorDisabled: a2, inputColorDisabled: o2, textColor2: s2, opacityDisabled: c2, borderRadius: l2, fontSizeSmall: u2, fontSizeMedium: f2, fontSizeLarge: p2, heightSmall: m2, heightMedium: h2, heightLarge: g, lineHeight: _ } = t2;
  return Object.assign(Object.assign({}, d), { labelLineHeight: _, buttonHeightSmall: m2, buttonHeightMedium: h2, buttonHeightLarge: g, fontSizeSmall: u2, fontSizeMedium: f2, fontSizeLarge: p2, boxShadow: `inset 0 0 0 1px ${n2}`, boxShadowActive: `inset 0 0 0 1px ${r2}`, boxShadowFocus: `inset 0 0 0 1px ${r2}, 0 0 0 2px ${e(r2, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${r2}`, boxShadowDisabled: `inset 0 0 0 1px ${n2}`, color: i2, colorDisabled: o2, colorActive: `#0000`, textColor: s2, textColorDisabled: a2, dotColorActive: r2, dotColorDisabled: n2, buttonBorderColor: n2, buttonBorderColorActive: r2, buttonBorderColorHover: n2, buttonColor: i2, buttonColorActive: i2, buttonTextColor: s2, buttonTextColorActive: r2, buttonTextColorHover: r2, opacityDisabled: c2, buttonBoxShadowFocus: `inset 0 0 0 1px ${r2}, 0 0 0 2px ${e(r2, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px #0000`, buttonBoxShadow: `inset 0 0 0 1px #0000`, buttonBorderRadius: l2 });
}
var p = { name: `Radio`, common: t, self: f };
const m = i(`settings`, () => {
  let e2 = n({ theme: `system`, interfaceLanguage: `en`, mapLanguage: `interface`, watchCompatibilityMode: true, geolocationCorrection: false });
  async function t2() {
    let t3 = await u(`settings`);
    t3 && (e2.value = { ...e2.value, ...t3 });
  }
  async function i2() {
    await l(`settings`, JSON.parse(JSON.stringify(e2.value))), await c();
  }
  return r(e2, i2, { deep: true }), { settings: e2, init: t2 };
});
var h = class {
  constructor() {
    __publicField(this, "parser");
    __publicField(this, "platformContext");
    this.parser = new s(navigator.userAgent), this.platformContext = o();
  }
  get isMobile() {
    return this.platformContext.isMobile;
  }
  get isTablet() {
    return this.platformContext.isTablet;
  }
  get isUnknown() {
    return this.parser.getDevice().type === void 0;
  }
  get browser() {
    return a() ? `Tauri` : this.platformContext.browser || ``;
  }
  get engine() {
    return this.parser.getEngine().name || ``;
  }
  get os() {
    return this.platformContext.os || ``;
  }
  get context() {
    return this.platformContext;
  }
  get isTauri() {
    return a();
  }
  get isWeb() {
    let e2 = this.platformContext.environment;
    return e2 === `web` || e2 === `mobile_web`;
  }
};
export {
  d as i,
  m as n,
  p as r,
  h as t
};
