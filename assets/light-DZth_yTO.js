import { A as e, at as t, f as n, g as r, lt as i, o as a, ot as o, v as s } from "./Card-BhZanKs1.js";
import { S as c } from "./light-12JaccNJ.js";
import { gt as l, mt as u, ot as d, xt as f } from "./index-CkQURd6u.js";
function p(e2) {
  let { textColorBase: t2, opacity1: n2, opacity2: r2, opacity3: i2, opacity4: a2, opacity5: o2 } = e2;
  return { color: t2, opacity1Depth: n2, opacity2Depth: r2, opacity3Depth: i2, opacity4Depth: a2, opacity5Depth: o2 };
}
var m = { name: `Icon`, common: a, self: p }, h = o(`icon`, `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [i(`color-transition`, { transition: `color .3s var(--n-bezier)` }), i(`depth`, { color: `var(--n-color)` }, [t(`svg`, { opacity: `var(--n-opacity)`, transition: `opacity .3s var(--n-bezier)` })]), t(`svg`, { height: `1em`, width: `1em` })]);
const g = u({ _n_icon__: true, name: `Icon`, inheritAttrs: false, props: Object.assign(Object.assign({}, n.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: i2 } = s(e2), a2 = n(`Icon`, `-icon`, h, m, e2, t2), o2 = d(() => {
    let { depth: t3 } = e2, { common: { cubicBezierEaseInOut: n2 }, self: r2 } = a2.value;
    if (t3 !== void 0) {
      let { color: e3, [`opacity${t3}Depth`]: i3 } = r2;
      return { "--n-bezier": n2, "--n-color": e3, "--n-opacity": i3 };
    }
    return { "--n-bezier": n2, "--n-color": ``, "--n-opacity": `` };
  }), l2 = i2 ? r(`icon`, d(() => `${e2.depth || `d`}`), o2, e2) : void 0;
  return { mergedClsPrefix: t2, mergedStyle: d(() => {
    let { size: t3, color: n2 } = e2;
    return { fontSize: c(t3), color: n2 };
  }), cssVars: i2 ? void 0 : o2, themeClass: l2 == null ? void 0 : l2.themeClass, onRender: l2 == null ? void 0 : l2.onRender };
}, render() {
  var _a;
  let { $parent: t2, depth: n2, mergedClsPrefix: r2, component: i2, onRender: a2, themeClass: o2 } = this;
  return ((_a = t2 == null ? void 0 : t2.$options) == null ? void 0 : _a._n_icon__) && e(`icon`, "don't wrap `n-icon` inside `n-icon`"), a2 == null ? void 0 : a2(), l(`i`, f(this.$attrs, { role: `img`, class: [`${r2}-icon`, o2, { [`${r2}-icon--depth`]: n2, [`${r2}-icon--color-transition`]: n2 !== void 0 }], style: [this.cssVars, this.mergedStyle] }), i2 ? l(i2) : this.$slots);
} });
var _ = { headerFontSize1: `30px`, headerFontSize2: `22px`, headerFontSize3: `18px`, headerFontSize4: `16px`, headerFontSize5: `16px`, headerFontSize6: `16px`, headerMargin1: `28px 0 20px 0`, headerMargin2: `28px 0 20px 0`, headerMargin3: `28px 0 20px 0`, headerMargin4: `28px 0 18px 0`, headerMargin5: `28px 0 18px 0`, headerMargin6: `28px 0 18px 0`, headerPrefixWidth1: `16px`, headerPrefixWidth2: `16px`, headerPrefixWidth3: `12px`, headerPrefixWidth4: `12px`, headerPrefixWidth5: `12px`, headerPrefixWidth6: `12px`, headerBarWidth1: `4px`, headerBarWidth2: `4px`, headerBarWidth3: `3px`, headerBarWidth4: `3px`, headerBarWidth5: `3px`, headerBarWidth6: `3px`, pMargin: `16px 0 16px 0`, liMargin: `.25em 0 0 0`, olPadding: `0 0 0 2em`, ulPadding: `0 0 0 2em` };
function v(e2) {
  let { primaryColor: t2, textColor2: n2, borderColor: r2, lineHeight: i2, fontSize: a2, borderRadiusSmall: o2, dividerColor: s2, fontWeightStrong: c2, textColor1: l2, textColor3: u2, infoColor: d2, warningColor: f2, errorColor: p2, successColor: m2, codeColor: h2 } = e2;
  return Object.assign(Object.assign({}, _), { aTextColor: t2, blockquoteTextColor: n2, blockquotePrefixColor: r2, blockquoteLineHeight: i2, blockquoteFontSize: a2, codeBorderRadius: o2, liTextColor: n2, liLineHeight: i2, liFontSize: a2, hrColor: s2, headerFontWeight: c2, headerTextColor: l2, pTextColor: n2, pTextColor1Depth: l2, pTextColor2Depth: n2, pTextColor3Depth: u2, pLineHeight: i2, pFontSize: a2, headerBarColor: t2, headerBarColorPrimary: t2, headerBarColorInfo: d2, headerBarColorError: p2, headerBarColorWarning: f2, headerBarColorSuccess: m2, textColor: n2, textColor1Depth: l2, textColor2Depth: n2, textColor3Depth: u2, textColorPrimary: t2, textColorInfo: d2, textColorSuccess: m2, textColorWarning: f2, textColorError: p2, codeTextColor: n2, codeColor: h2, codeBorder: `1px solid #0000` });
}
var y = { name: `Typography`, common: a, self: v };
export {
  p as a,
  m as i,
  v as n,
  g as r,
  y as t
};
