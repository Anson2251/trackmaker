import { ct as e, f as t, g as n, lt as r, ot as i, ut as a, v as o } from "./Card-BhZanKs1.js";
import { gt as s, mt as c, ot as l, tt as u } from "./index-CkQURd6u.js";
import { t as d } from "./light-CzAhMXMy.js";
var f = i(`divider`, `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`, [a(`vertical`, `
 margin-top: 24px;
 margin-bottom: 24px;
 `, [a(`no-title`, `
 display: flex;
 align-items: center;
 `)]), e(`title`, `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `), r(`title-position-left`, [e(`line`, [r(`left`, { width: `28px` })])]), r(`title-position-right`, [e(`line`, [r(`right`, { width: `28px` })])]), r(`dashed`, [e(`line`, `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]), r(`vertical`, `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `), e(`line`, `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `), a(`dashed`, [e(`line`, { backgroundColor: `var(--n-color)` })]), r(`dashed`, [e(`line`, { borderColor: `var(--n-color)` })]), r(`vertical`, { backgroundColor: `var(--n-color)` })]), p = c({ name: `Divider`, props: Object.assign(Object.assign({}, t.props), { titlePlacement: { type: String, default: `center` }, dashed: Boolean, vertical: Boolean }), setup(e2) {
  let { mergedClsPrefixRef: r2, inlineThemeDisabled: i2 } = o(e2), a2 = t(`Divider`, `-divider`, f, d, e2, r2), s2 = l(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { color: t2, textColor: n2, fontWeight: r3 } } = a2.value;
    return { "--n-bezier": e3, "--n-color": t2, "--n-text-color": n2, "--n-font-weight": r3 };
  }), c2 = i2 ? n(`divider`, void 0, s2, e2) : void 0;
  return { mergedClsPrefix: r2, cssVars: i2 ? void 0 : s2, themeClass: c2 == null ? void 0 : c2.themeClass, onRender: c2 == null ? void 0 : c2.onRender };
}, render() {
  var e2;
  let { $slots: t2, titlePlacement: n2, vertical: r2, dashed: i2, cssVars: a2, mergedClsPrefix: o2 } = this;
  return (e2 = this.onRender) == null || e2.call(this), s(`div`, { role: `separator`, class: [`${o2}-divider`, this.themeClass, { [`${o2}-divider--vertical`]: r2, [`${o2}-divider--no-title`]: !t2.default, [`${o2}-divider--dashed`]: i2, [`${o2}-divider--title-position-${n2}`]: t2.default && n2 }], style: a2 }, r2 ? null : s(`div`, { class: `${o2}-divider__line ${o2}-divider__line--left` }), !r2 && t2.default ? s(u, null, s(`div`, { class: `${o2}-divider__title` }, this.$slots), s(`div`, { class: `${o2}-divider__line ${o2}-divider__line--right` })) : null);
} });
export {
  p as t
};
