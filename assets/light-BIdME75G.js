import { d as e, o as t } from "./Card-CcG1RIrm.js";
import { gt as n, mt as r } from "./index-BQuUBdbi.js";
import { n as i } from "./Tooltip-q9ouPHGY.js";
var a = r({ name: `ChevronRight`, render() {
  return n(`svg`, { viewBox: `0 0 16 16`, fill: `none`, xmlns: `http://www.w3.org/2000/svg` }, n(`path`, { d: `M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`, fill: `currentColor` }));
} });
function o(e2) {
  let { fontWeight: t2, textColor1: n2, textColor2: r2, textColorDisabled: i2, dividerColor: a2, fontSize: o2 } = e2;
  return { titleFontSize: o2, titleFontWeight: t2, dividerColor: a2, titleTextColor: n2, titleTextColorDisabled: i2, fontSize: o2, textColor: r2, arrowColor: r2, arrowColorDisabled: i2, itemMargin: `16px 0 0 0`, titlePadding: `16px 0 0 0` };
}
var s = { name: `Collapse`, common: t, self: o };
function c() {
  return { toolbarIconColor: `rgba(255, 255, 255, .9)`, toolbarColor: `rgba(0, 0, 0, .35)`, toolbarBoxShadow: `none`, toolbarBorderRadius: `24px` };
}
const l = e({ name: `Image`, common: t, peers: { Tooltip: i }, self: c });
export {
  a as i,
  s as n,
  o as r,
  l as t
};
