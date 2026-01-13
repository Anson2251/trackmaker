import { R as e, d as t, o as n } from "./Card-nhqq8IKa.js";
import { l as r, p as i } from "./Tooltip-DGge0ha1.js";
import { r as a } from "./Button-o58fM-RZ.js";
var o = { paddingTiny: `0 8px`, paddingSmall: `0 10px`, paddingMedium: `0 12px`, paddingLarge: `0 14px`, clearSize: `16px` };
function s(t2) {
  let { textColor2: n2, textColor3: r2, textColorDisabled: i2, primaryColor: a2, primaryColorHover: s2, inputColor: c2, inputColorDisabled: l2, borderColor: u2, warningColor: d2, warningColorHover: f, errorColor: p, errorColorHover: m, borderRadius: h, lineHeight: g, fontSizeTiny: _, fontSizeSmall: v, fontSizeMedium: y, fontSizeLarge: b, heightTiny: x, heightSmall: S, heightMedium: C, heightLarge: w, actionColor: T, clearColor: E, clearColorHover: D, clearColorPressed: O, placeholderColor: k, placeholderColorDisabled: A, iconColor: j, iconColorDisabled: M, iconColorHover: N, iconColorPressed: P, fontWeight: F } = t2;
  return Object.assign(Object.assign({}, o), { fontWeight: F, countTextColorDisabled: i2, countTextColor: r2, heightTiny: x, heightSmall: S, heightMedium: C, heightLarge: w, fontSizeTiny: _, fontSizeSmall: v, fontSizeMedium: y, fontSizeLarge: b, lineHeight: g, lineHeightTextarea: g, borderRadius: h, iconSize: `16px`, groupLabelColor: T, groupLabelTextColor: n2, textColor: n2, textColorDisabled: i2, textDecorationColor: n2, caretColor: a2, placeholderColor: k, placeholderColorDisabled: A, color: c2, colorDisabled: l2, colorFocus: c2, groupLabelBorder: `1px solid ${u2}`, border: `1px solid ${u2}`, borderHover: `1px solid ${s2}`, borderDisabled: `1px solid ${u2}`, borderFocus: `1px solid ${s2}`, boxShadowFocus: `0 0 0 2px ${e(a2, { alpha: 0.2 })}`, loadingColor: a2, loadingColorWarning: d2, borderWarning: `1px solid ${d2}`, borderHoverWarning: `1px solid ${f}`, colorFocusWarning: c2, borderFocusWarning: `1px solid ${f}`, boxShadowFocusWarning: `0 0 0 2px ${e(d2, { alpha: 0.2 })}`, caretColorWarning: d2, loadingColorError: p, borderError: `1px solid ${p}`, borderHoverError: `1px solid ${m}`, colorFocusError: c2, borderFocusError: `1px solid ${m}`, boxShadowFocusError: `0 0 0 2px ${e(p, { alpha: 0.2 })}`, caretColorError: p, clearColor: E, clearColorHover: D, clearColorPressed: O, iconColor: j, iconColorDisabled: M, iconColorHover: N, iconColorPressed: P, suffixTextColor: n2 });
}
var c = t({ name: `Input`, common: n, peers: { Scrollbar: i }, self: s }), l = { iconSize: `22px` };
function u(e2) {
  let { fontSize: t2, warningColor: n2 } = e2;
  return Object.assign(Object.assign({}, l), { fontSize: t2, iconColor: n2 });
}
var d = t({ name: `Popconfirm`, common: n, peers: { Button: a, Popover: r }, self: u });
export {
  o as i,
  u as n,
  c as r,
  d as t
};
