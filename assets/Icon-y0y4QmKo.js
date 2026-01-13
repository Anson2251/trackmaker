import { _ as e, dt as t, f as n, j as r, mt as i, o as a, ut as o, y as s } from "./Card-nhqq8IKa.js";
import { b as c } from "./Tooltip-DGge0ha1.js";
import { Et as l, gt as u, jt as d, wt as f } from "./index-DTVnoW_1.js";
function p(e2) {
  let { textColorBase: t2, opacity1: n2, opacity2: r2, opacity3: i2, opacity4: a2, opacity5: o2 } = e2;
  return { color: t2, opacity1Depth: n2, opacity2Depth: r2, opacity3Depth: i2, opacity4Depth: a2, opacity5Depth: o2 };
}
var m = { name: `Icon`, common: a, self: p }, h = t(`icon`, `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [i(`color-transition`, { transition: `color .3s var(--n-bezier)` }), i(`depth`, { color: `var(--n-color)` }, [o(`svg`, { opacity: `var(--n-opacity)`, transition: `opacity .3s var(--n-bezier)` })]), o(`svg`, { height: `1em`, width: `1em` })]);
const g = f({ _n_icon__: true, name: `Icon`, inheritAttrs: false, props: Object.assign(Object.assign({}, n.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), setup(t2) {
  let { mergedClsPrefixRef: r2, inlineThemeDisabled: i2 } = s(t2), a2 = n(`Icon`, `-icon`, h, m, t2, r2), o2 = u(() => {
    let { depth: e2 } = t2, { common: { cubicBezierEaseInOut: n2 }, self: r3 } = a2.value;
    if (e2 !== void 0) {
      let { color: t3, [`opacity${e2}Depth`]: i3 } = r3;
      return { "--n-bezier": n2, "--n-color": t3, "--n-opacity": i3 };
    }
    return { "--n-bezier": n2, "--n-color": ``, "--n-opacity": `` };
  }), l2 = i2 ? e(`icon`, u(() => `${t2.depth || `d`}`), o2, t2) : void 0;
  return { mergedClsPrefix: r2, mergedStyle: u(() => {
    let { size: e2, color: n2 } = t2;
    return { fontSize: c(e2), color: n2 };
  }), cssVars: i2 ? void 0 : o2, themeClass: l2 == null ? void 0 : l2.themeClass, onRender: l2 == null ? void 0 : l2.onRender };
}, render() {
  var _a;
  let { $parent: e2, depth: t2, mergedClsPrefix: n2, component: i2, onRender: a2, themeClass: o2 } = this;
  return ((_a = e2 == null ? void 0 : e2.$options) == null ? void 0 : _a._n_icon__) && r(`icon`, "don't wrap `n-icon` inside `n-icon`"), a2 == null ? void 0 : a2(), l(`i`, d(this.$attrs, { role: `img`, class: [`${n2}-icon`, o2, { [`${n2}-icon--depth`]: t2, [`${n2}-icon--color-transition`]: t2 !== void 0 }], style: [this.cssVars, this.mergedStyle] }), i2 ? l(i2) : this.$slots);
} });
export {
  m as n,
  p as r,
  g as t
};
