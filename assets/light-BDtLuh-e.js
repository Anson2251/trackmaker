import { d as e, o as t } from "./Card-D_DaNXyK.js";
import { i as n } from "./light-DStk_u6n.js";
import { gt as r, mt as i } from "./index-lIAgGLuV.js";
var a = i({ name: `ChevronRight`, render() {
  return r(`svg`, { viewBox: `0 0 16 16`, fill: `none`, xmlns: `http://www.w3.org/2000/svg` }, r(`path`, { d: `M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`, fill: `currentColor` }));
} });
function o(e2) {
  let { textColor2: t2, fontSize: n2, fontWeightStrong: r2, textColor3: i2 } = e2;
  return { textColor: t2, fontSize: n2, fontWeightStrong: r2, "mono-3": `#a0a1a7`, "hue-1": `#0184bb`, "hue-2": `#4078f2`, "hue-3": `#a626a4`, "hue-4": `#50a14f`, "hue-5": `#e45649`, "hue-5-2": `#c91243`, "hue-6": `#986801`, "hue-6-2": `#c18401`, lineNumberTextColor: i2 };
}
var s = { name: `Code`, common: t, self: o };
function c(e2) {
  let { fontWeight: t2, textColor1: n2, textColor2: r2, textColorDisabled: i2, dividerColor: a2, fontSize: o2 } = e2;
  return { titleFontSize: o2, titleFontWeight: t2, dividerColor: a2, titleTextColor: n2, titleTextColorDisabled: i2, fontSize: o2, textColor: r2, arrowColor: r2, arrowColorDisabled: i2, itemMargin: `16px 0 0 0`, titlePadding: `16px 0 0 0` };
}
var l = { name: `Collapse`, common: t, self: c };
function u() {
  return { toolbarIconColor: `rgba(255, 255, 255, .9)`, toolbarColor: `rgba(0, 0, 0, .35)`, toolbarBoxShadow: `none`, toolbarBorderRadius: `24px` };
}
const d = e({ name: `Image`, common: t, peers: { Tooltip: n }, self: u });
export {
  a,
  s as i,
  l as n,
  c as r,
  d as t
};
