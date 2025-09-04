import { d as g, h as l } from "./index-BhqEYxnh.js";
import { l as s, c as f, A as c, Y as h } from "./light-DWUXhvof.js";
import { t as C } from "./Tooltip-CjJdriJZ.js";
const O = g({ name: "ChevronRight", render() {
  return l("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, l("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" }));
} }), { cubicBezierEaseInOut: e, cubicBezierEaseOut: x, cubicBezierEaseIn: b } = f;
function z({ overflow: i = "hidden", duration: t = ".3s", originalTransition: n = "", leavingDelay: o = "0s", foldPadding: a = false, enterToProps: d = void 0, leaveToProps: r = void 0, reverse: p = false } = {}) {
  const m = p ? "leave" : "enter", $ = p ? "enter" : "leave";
  return [s(`&.fade-in-height-expand-transition-${$}-from,
 &.fade-in-height-expand-transition-${m}-to`, Object.assign(Object.assign({}, d), { opacity: 1 })), s(`&.fade-in-height-expand-transition-${$}-to,
 &.fade-in-height-expand-transition-${m}-from`, Object.assign(Object.assign({}, r), { opacity: 0, marginTop: "0 !important", marginBottom: "0 !important", paddingTop: a ? "0 !important" : void 0, paddingBottom: a ? "0 !important" : void 0 })), s(`&.fade-in-height-expand-transition-${$}-active`, `
 overflow: ${i};
 transition:
 max-height ${t} ${e} ${o},
 opacity ${t} ${x} ${o},
 margin-top ${t} ${e} ${o},
 margin-bottom ${t} ${e} ${o},
 padding-top ${t} ${e} ${o},
 padding-bottom ${t} ${e} ${o}
 ${n ? `,${n}` : ""}
 `), s(`&.fade-in-height-expand-transition-${m}-active`, `
 overflow: ${i};
 transition:
 max-height ${t} ${e},
 opacity ${t} ${b},
 margin-top ${t} ${e},
 margin-bottom ${t} ${e},
 padding-top ${t} ${e},
 padding-bottom ${t} ${e}
 ${n ? `,${n}` : ""}
 `)];
}
function v(i) {
  const { fontWeight: t, textColor1: n, textColor2: o, textColorDisabled: a, dividerColor: d, fontSize: r } = i;
  return { titleFontSize: r, titleFontWeight: t, dividerColor: d, titleTextColor: n, titleTextColorDisabled: a, fontSize: r, textColor: o, arrowColor: o, arrowColorDisabled: a, itemMargin: "16px 0 0 0", titlePadding: "16px 0 0 0" };
}
const j = { name: "Collapse", common: c, self: v };
function u(i) {
  const { textColor1: t, dividerColor: n, fontWeightStrong: o } = i;
  return { textColor: t, color: n, fontWeight: o };
}
const E = { name: "Divider", common: c, self: u };
function w() {
  return { toolbarIconColor: "rgba(255, 255, 255, .9)", toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
}
const S = h({ name: "Image", common: c, peers: { Tooltip: C }, self: w });
export {
  O as C,
  u as a,
  j as c,
  E as d,
  z as f,
  S as i,
  v as s
};
