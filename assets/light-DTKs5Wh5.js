import { N as e, o as t } from "./Card-llegvRlo.js";
var n = { linkFontSize: `13px`, linkPadding: `0 0 0 16px`, railWidth: `4px` };
function r(t2) {
  let { borderRadius: r2, railColor: i2, primaryColor: a, primaryColorHover: o, primaryColorPressed: s, textColor2: c } = t2;
  return Object.assign(Object.assign({}, n), { borderRadius: r2, railColor: i2, railColorActive: a, linkColor: e(a, { alpha: 0.15 }), linkTextColor: c, linkTextColorHover: o, linkTextColorPressed: s, linkTextColorActive: a });
}
var i = { name: `Anchor`, common: t, self: r };
export {
  r as n,
  i as t
};
