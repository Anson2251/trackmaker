import { R as e, o as t, z as n } from "./Card-nhqq8IKa.js";
var r = { iconMargin: `11px 8px 0 12px`, iconMarginRtl: `11px 12px 0 8px`, iconSize: `24px`, closeIconSize: `16px`, closeSize: `20px`, closeMargin: `13px 14px 0 0`, closeMarginRtl: `13px 0 0 14px`, padding: `13px` };
function i(t2) {
  let { lineHeight: i2, borderRadius: a2, fontWeightStrong: o2, baseColor: s2, dividerColor: c, actionColor: l, textColor1: u, textColor2: d, closeColorHover: f, closeColorPressed: p, closeIconColor: m, closeIconColorHover: h, closeIconColorPressed: g, infoColor: _, successColor: v, warningColor: y, errorColor: b, fontSize: x } = t2;
  return Object.assign(Object.assign({}, r), { fontSize: x, lineHeight: i2, titleFontWeight: o2, borderRadius: a2, border: `1px solid ${c}`, color: l, titleTextColor: u, iconColor: d, contentTextColor: d, closeBorderRadius: a2, closeColorHover: f, closeColorPressed: p, closeIconColor: m, closeIconColorHover: h, closeIconColorPressed: g, borderInfo: `1px solid ${n(s2, e(_, { alpha: 0.25 }))}`, colorInfo: n(s2, e(_, { alpha: 0.08 })), titleTextColorInfo: u, iconColorInfo: _, contentTextColorInfo: d, closeColorHoverInfo: f, closeColorPressedInfo: p, closeIconColorInfo: m, closeIconColorHoverInfo: h, closeIconColorPressedInfo: g, borderSuccess: `1px solid ${n(s2, e(v, { alpha: 0.25 }))}`, colorSuccess: n(s2, e(v, { alpha: 0.08 })), titleTextColorSuccess: u, iconColorSuccess: v, contentTextColorSuccess: d, closeColorHoverSuccess: f, closeColorPressedSuccess: p, closeIconColorSuccess: m, closeIconColorHoverSuccess: h, closeIconColorPressedSuccess: g, borderWarning: `1px solid ${n(s2, e(y, { alpha: 0.33 }))}`, colorWarning: n(s2, e(y, { alpha: 0.08 })), titleTextColorWarning: u, iconColorWarning: y, contentTextColorWarning: d, closeColorHoverWarning: f, closeColorPressedWarning: p, closeIconColorWarning: m, closeIconColorHoverWarning: h, closeIconColorPressedWarning: g, borderError: `1px solid ${n(s2, e(b, { alpha: 0.25 }))}`, colorError: n(s2, e(b, { alpha: 0.08 })), titleTextColorError: u, iconColorError: b, contentTextColorError: d, closeColorHoverError: f, closeColorPressedError: p, closeIconColorError: m, closeIconColorHoverError: h, closeIconColorPressedError: g });
}
var a = { name: `Alert`, common: t, self: i };
function o(e2) {
  let { textColor2: t2, textColor3: n2, fontSize: r2, fontWeight: i2 } = e2;
  return { labelFontSize: r2, labelFontWeight: i2, valueFontWeight: i2, valueFontSize: `24px`, labelTextColor: n2, valuePrefixTextColor: t2, valueSuffixTextColor: t2, valueTextColor: t2 };
}
var s = { name: `Statistic`, common: t, self: o };
export {
  r as i,
  o as n,
  a as r,
  s as t
};
