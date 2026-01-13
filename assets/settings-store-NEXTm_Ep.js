import { R as e, o as t } from "./Card-nhqq8IKa.js";
import { Jt as n, a as r, an as i, p as a } from "./index-DTVnoW_1.js";
import { n as o, r as s, t as c } from "./storage-DsEl3RSe.js";
var l = { radioSizeSmall: `14px`, radioSizeMedium: `16px`, radioSizeLarge: `18px`, labelPadding: `0 8px`, labelFontWeight: `400` };
function u(t2) {
  let { borderColor: n2, primaryColor: r2, baseColor: i2, textColorDisabled: a2, inputColorDisabled: o2, textColor2: s2, opacityDisabled: c2, borderRadius: u2, fontSizeSmall: d2, fontSizeMedium: f2, fontSizeLarge: p2, heightSmall: m, heightMedium: h, heightLarge: g, lineHeight: _ } = t2;
  return Object.assign(Object.assign({}, l), { labelLineHeight: _, buttonHeightSmall: m, buttonHeightMedium: h, buttonHeightLarge: g, fontSizeSmall: d2, fontSizeMedium: f2, fontSizeLarge: p2, boxShadow: `inset 0 0 0 1px ${n2}`, boxShadowActive: `inset 0 0 0 1px ${r2}`, boxShadowFocus: `inset 0 0 0 1px ${r2}, 0 0 0 2px ${e(r2, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${r2}`, boxShadowDisabled: `inset 0 0 0 1px ${n2}`, color: i2, colorDisabled: o2, colorActive: `#0000`, textColor: s2, textColorDisabled: a2, dotColorActive: r2, dotColorDisabled: n2, buttonBorderColor: n2, buttonBorderColorActive: r2, buttonBorderColorHover: n2, buttonColor: i2, buttonColorActive: i2, buttonTextColor: s2, buttonTextColorActive: r2, buttonTextColorHover: r2, opacityDisabled: c2, buttonBoxShadowFocus: `inset 0 0 0 1px ${r2}, 0 0 0 2px ${e(r2, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px #0000`, buttonBoxShadow: `inset 0 0 0 1px #0000`, buttonBorderRadius: u2 });
}
var d = { name: `Radio`, common: t, self: u }, f = `trackmaker_settings`;
const p = r(`settings`, () => {
  let e2 = i({ ...a });
  async function t2() {
    let t3 = await c(`settings`);
    t3 && (e2.value = { ...e2.value, ...t3 }), l2();
  }
  async function r2() {
    await s(`settings`, JSON.parse(JSON.stringify(e2.value))), await o(), l2();
  }
  function l2() {
    try {
      localStorage.setItem(f, JSON.stringify(e2.value));
    } catch {
    }
  }
  function u2() {
    let t3 = { theme: e2.value.theme, interfaceLanguage: e2.value.interfaceLanguage, mapLanguage: e2.value.mapLanguage, watchCompatibilityMode: e2.value.watchCompatibilityMode, geolocationCorrection: e2.value.geolocationCorrection };
    e2.value = { ...a, ...t3 };
  }
  function d2(t3) {
    let n2 = a, r3 = e2.value;
    r3[t3] = n2[t3], e2.value = { ...r3 };
  }
  return n(e2, () => {
    l2(), r2();
  }, { deep: true }), { settings: e2, init: t2, resetAdvancedSettings: u2, resetSetting: d2 };
});
export {
  d as n,
  l as r,
  p as t
};
