import { d as C, h as f, a4 as S, B as b, m as z, j as x } from "./index-CFhMVeLy.js";
import { A as v, m as H, o as u, l as y, W as L, u as P, q as W, v as T, Q as $ } from "./light-BiBhEq9V.js";
const O = typeof document < "u" && typeof window < "u", k = C({ name: "FadeInExpandTransition", props: { appear: Boolean, group: Boolean, mode: String, onLeave: Function, onAfterLeave: Function, onAfterEnter: Function, width: Boolean, reverse: Boolean }, setup(t, { slots: r }) {
  function n(e) {
    t.width ? e.style.maxWidth = `${e.offsetWidth}px` : e.style.maxHeight = `${e.offsetHeight}px`, e.offsetWidth;
  }
  function d(e) {
    t.width ? e.style.maxWidth = "0" : e.style.maxHeight = "0", e.offsetWidth;
    const { onLeave: o } = t;
    o && o();
  }
  function a(e) {
    t.width ? e.style.maxWidth = "" : e.style.maxHeight = "";
    const { onAfterLeave: o } = t;
    o && o();
  }
  function i(e) {
    if (e.style.transition = "none", t.width) {
      const o = e.offsetWidth;
      e.style.maxWidth = "0", e.offsetWidth, e.style.transition = "", e.style.maxWidth = `${o}px`;
    } else if (t.reverse) e.style.maxHeight = `${e.offsetHeight}px`, e.offsetHeight, e.style.transition = "", e.style.maxHeight = "0";
    else {
      const o = e.offsetHeight;
      e.style.maxHeight = "0", e.offsetWidth, e.style.transition = "", e.style.maxHeight = `${o}px`;
    }
    e.offsetWidth;
  }
  function s(e) {
    var o;
    t.width ? e.style.maxWidth = "" : t.reverse || (e.style.maxHeight = ""), (o = t.onAfterEnter) === null || o === void 0 || o.call(t);
  }
  return () => {
    const { group: e, width: o, appear: h, mode: c } = t, p = e ? S : b, l = { name: o ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition", appear: h, onEnter: i, onAfterEnter: s, onBeforeLeave: n, onLeave: d, onAfterLeave: a };
    return e || (l.mode = c), f(p, l, r);
  };
} });
function w(t) {
  const { textColorBase: r, opacity1: n, opacity2: d, opacity3: a, opacity4: i, opacity5: s } = t;
  return { color: r, opacity1Depth: n, opacity2Depth: d, opacity3Depth: a, opacity4Depth: i, opacity5Depth: s };
}
const F = { name: "Icon", common: v, self: w }, D = H("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [u("color-transition", { transition: "color .3s var(--n-bezier)" }), u("depth", { color: "var(--n-color)" }, [y("svg", { opacity: "var(--n-opacity)", transition: "opacity .3s var(--n-bezier)" })]), y("svg", { height: "1em", width: "1em" })]), E = Object.assign(Object.assign({}, W.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), q = C({ _n_icon__: true, name: "Icon", inheritAttrs: false, props: E, setup(t) {
  const { mergedClsPrefixRef: r, inlineThemeDisabled: n } = P(t), d = W("Icon", "-icon", D, F, t, r), a = x(() => {
    const { depth: s } = t, { common: { cubicBezierEaseInOut: e }, self: o } = d.value;
    if (s !== void 0) {
      const { color: h, [`opacity${s}Depth`]: c } = o;
      return { "--n-bezier": e, "--n-color": h, "--n-opacity": c };
    }
    return { "--n-bezier": e, "--n-color": "", "--n-opacity": "" };
  }), i = n ? T("icon", x(() => `${t.depth || "d"}`), a, t) : void 0;
  return { mergedClsPrefix: r, mergedStyle: x(() => {
    const { size: s, color: e } = t;
    return { fontSize: $(s), color: e };
  }), cssVars: n ? void 0 : a, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var t;
  const { $parent: r, depth: n, mergedClsPrefix: d, component: a, onRender: i, themeClass: s } = this;
  return !((t = r == null ? void 0 : r.$options) === null || t === void 0) && t._n_icon__ && L("icon", "don't wrap `n-icon` inside `n-icon`"), i == null ? void 0 : i(), f("i", z(this.$attrs, { role: "img", class: [`${d}-icon`, s, { [`${d}-icon--depth`]: n, [`${d}-icon--color-transition`]: n !== void 0 }], style: [this.cssVars, this.mergedStyle] }), a ? f(a) : this.$slots);
} }), A = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function M() {
  return A;
}
const N = { name: "Space", self: M }, _ = { headerFontSize1: "30px", headerFontSize2: "22px", headerFontSize3: "18px", headerFontSize4: "16px", headerFontSize5: "16px", headerFontSize6: "16px", headerMargin1: "28px 0 20px 0", headerMargin2: "28px 0 20px 0", headerMargin3: "28px 0 20px 0", headerMargin4: "28px 0 18px 0", headerMargin5: "28px 0 18px 0", headerMargin6: "28px 0 18px 0", headerPrefixWidth1: "16px", headerPrefixWidth2: "16px", headerPrefixWidth3: "12px", headerPrefixWidth4: "12px", headerPrefixWidth5: "12px", headerPrefixWidth6: "12px", headerBarWidth1: "4px", headerBarWidth2: "4px", headerBarWidth3: "3px", headerBarWidth4: "3px", headerBarWidth5: "3px", headerBarWidth6: "3px", pMargin: "16px 0 16px 0", liMargin: ".25em 0 0 0", olPadding: "0 0 0 2em", ulPadding: "0 0 0 2em" };
function I(t) {
  const { primaryColor: r, textColor2: n, borderColor: d, lineHeight: a, fontSize: i, borderRadiusSmall: s, dividerColor: e, fontWeightStrong: o, textColor1: h, textColor3: c, infoColor: p, warningColor: l, errorColor: m, successColor: g, codeColor: B } = t;
  return Object.assign(Object.assign({}, _), { aTextColor: r, blockquoteTextColor: n, blockquotePrefixColor: d, blockquoteLineHeight: a, blockquoteFontSize: i, codeBorderRadius: s, liTextColor: n, liLineHeight: a, liFontSize: i, hrColor: e, headerFontWeight: o, headerTextColor: h, pTextColor: n, pTextColor1Depth: h, pTextColor2Depth: n, pTextColor3Depth: c, pLineHeight: a, pFontSize: i, headerBarColor: r, headerBarColorPrimary: r, headerBarColorInfo: p, headerBarColorError: m, headerBarColorWarning: l, headerBarColorSuccess: g, textColor: n, textColor1Depth: h, textColor2Depth: n, textColor3Depth: c, textColorPrimary: r, textColorInfo: p, textColorSuccess: g, textColorWarning: l, textColorError: m, codeTextColor: n, codeColor: B, codeBorder: "1px solid #0000" });
}
const V = { name: "Typography", common: v, self: I };
export {
  k as N,
  I as a,
  q as b,
  A as c,
  N as d,
  F as e,
  O as i,
  w as s,
  V as t
};
