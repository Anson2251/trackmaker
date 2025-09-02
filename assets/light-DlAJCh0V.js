import { Y as C, A as a, f as r } from "./light-Cs_wBr-w.js";
import { t as S } from "./Tooltip-DLb3jOEK.js";
const L = C({ name: "Ellipsis", common: a, peers: { Tooltip: S } }), v = { radioSizeSmall: "14px", radioSizeMedium: "16px", radioSizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function H(l) {
  const { borderColor: t, primaryColor: o, baseColor: e, textColorDisabled: n, inputColorDisabled: s, textColor2: i, opacityDisabled: d, borderRadius: b, fontSizeSmall: x, fontSizeMedium: h, fontSizeLarge: p, heightSmall: u, heightMedium: c, heightLarge: m, lineHeight: g } = l;
  return Object.assign(Object.assign({}, v), { labelLineHeight: g, buttonHeightSmall: u, buttonHeightMedium: c, buttonHeightLarge: m, fontSizeSmall: x, fontSizeMedium: h, fontSizeLarge: p, boxShadow: `inset 0 0 0 1px ${t}`, boxShadowActive: `inset 0 0 0 1px ${o}`, boxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${r(o, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${o}`, boxShadowDisabled: `inset 0 0 0 1px ${t}`, color: e, colorDisabled: s, colorActive: "#0000", textColor: i, textColorDisabled: n, dotColorActive: o, dotColorDisabled: t, buttonBorderColor: t, buttonBorderColorActive: o, buttonBorderColorHover: t, buttonColor: e, buttonColorActive: e, buttonTextColor: i, buttonTextColorActive: o, buttonTextColorHover: o, opacityDisabled: d, buttonBoxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${r(o, { alpha: 0.3 })}`, buttonBoxShadowHover: "inset 0 0 0 1px #0000", buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: b });
}
const $ = { name: "Radio", common: a, self: H };
export {
  v as c,
  L as e,
  $ as r
};
