import { d as e, o as t } from "./Card-nhqq8IKa.js";
import { n } from "./Tooltip-DGge0ha1.js";
function r(e2) {
  let { textColor2: t2, fontSize: n2, fontWeightStrong: r2, textColor3: i2 } = e2;
  return { textColor: t2, fontSize: n2, fontWeightStrong: r2, "mono-3": `#a0a1a7`, "hue-1": `#0184bb`, "hue-2": `#4078f2`, "hue-3": `#a626a4`, "hue-4": `#50a14f`, "hue-5": `#e45649`, "hue-5-2": `#c91243`, "hue-6": `#986801`, "hue-6-2": `#c18401`, lineNumberTextColor: i2 };
}
var i = { name: `Code`, common: t, self: r };
function a(e2) {
  let { fontWeight: t2, textColor1: n2, textColor2: r2, textColorDisabled: i2, dividerColor: a2, fontSize: o2 } = e2;
  return { titleFontSize: o2, titleFontWeight: t2, dividerColor: a2, titleTextColor: n2, titleTextColorDisabled: i2, fontSize: o2, textColor: r2, arrowColor: r2, arrowColorDisabled: i2, itemMargin: `16px 0 0 0`, titlePadding: `16px 0 0 0` };
}
var o = { name: `Collapse`, common: t, self: a };
function s(e2) {
  let { textColor1: t2, dividerColor: n2, fontWeightStrong: r2 } = e2;
  return { textColor: t2, color: n2, fontWeight: r2 };
}
var c = { name: `Divider`, common: t, self: s };
function l() {
  return { toolbarIconColor: `rgba(255, 255, 255, .9)`, toolbarColor: `rgba(0, 0, 0, .35)`, toolbarBoxShadow: `none`, toolbarBorderRadius: `24px` };
}
const u = e({ name: `Image`, common: t, peers: { Tooltip: n }, self: l });
export {
  a,
  o as i,
  c as n,
  i as o,
  s as r,
  u as t
};
