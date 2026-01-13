import { A as e, F as t, _ as n, _t as r, dt as i, f as a, h as o, mt as s, pt as c, ut as l, vt as u, y as d } from "./Card-nhqq8IKa.js";
import { Bt as f, Et as p, Ot as m, cn as h, gt as g, wt as _ } from "./index-DTVnoW_1.js";
import { t as v } from "./light-ClCXo0GD.js";
var y = l([i(`list`, `
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `, [s(`show-divider`, [i(`list-item`, [l(`&:not(:last-child)`, [c(`divider`, `
 background-color: var(--n-merged-border-color);
 `)])])]), s(`clickable`, [i(`list-item`, `
 cursor: pointer;
 `)]), s(`bordered`, `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), s(`hoverable`, [i(`list-item`, `
 border-radius: var(--n-border-radius);
 `, [l(`&:hover`, `
 background-color: var(--n-merged-color-hover);
 `, [c(`divider`, `
 background-color: transparent;
 `)])])]), s(`bordered, hoverable`, [i(`list-item`, `
 padding: 12px 20px;
 `), c(`header, footer`, `
 padding: 12px 20px;
 `)]), c(`header, footer`, `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [l(`&:not(:last-child)`, `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), i(`list-item`, `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [c(`prefix`, `
 margin-right: 20px;
 flex: 0;
 `), c(`suffix`, `
 margin-left: 20px;
 flex: 0;
 `), c(`main`, `
 flex: 1;
 `), c(`divider`, `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), r(i(`list`, `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), u(i(`list`, `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);
const b = Object.assign(Object.assign({}, a.props), { size: { type: String, default: `medium` }, bordered: Boolean, clickable: Boolean, hoverable: Boolean, showDivider: { type: Boolean, default: true } }), x = t(`n-list`);
var S = _({ name: `List`, props: b, slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: r2, mergedRtlRef: i2 } = d(e2), s2 = o(`List`, i2, t2), c2 = a(`List`, `-list`, y, v, e2, t2);
  f(x, { showDividerRef: h(e2, `showDivider`), mergedClsPrefixRef: t2 });
  let l2 = g(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { fontSize: t3, textColor: n2, color: r3, colorModal: i3, colorPopover: a2, borderColor: o2, borderColorModal: s3, borderColorPopover: l3, borderRadius: u3, colorHover: d2, colorHoverModal: f2, colorHoverPopover: p2 } } = c2.value;
    return { "--n-font-size": t3, "--n-bezier": e3, "--n-text-color": n2, "--n-color": r3, "--n-border-radius": u3, "--n-border-color": o2, "--n-border-color-modal": s3, "--n-border-color-popover": l3, "--n-color-modal": i3, "--n-color-popover": a2, "--n-color-hover": d2, "--n-color-hover-modal": f2, "--n-color-hover-popover": p2 };
  }), u2 = r2 ? n(`list`, void 0, l2, e2) : void 0;
  return { mergedClsPrefix: t2, rtlEnabled: s2, cssVars: r2 ? void 0 : l2, themeClass: u2 == null ? void 0 : u2.themeClass, onRender: u2 == null ? void 0 : u2.onRender };
}, render() {
  var _a;
  let { $slots: e2, mergedClsPrefix: t2, onRender: n2 } = this;
  return n2 == null ? void 0 : n2(), p(`ul`, { class: [`${t2}-list`, this.rtlEnabled && `${t2}-list--rtl`, this.bordered && `${t2}-list--bordered`, this.showDivider && `${t2}-list--show-divider`, this.hoverable && `${t2}-list--hoverable`, this.clickable && `${t2}-list--clickable`, this.themeClass], style: this.cssVars }, e2.header ? p(`div`, { class: `${t2}-list__header` }, e2.header()) : null, (_a = e2.default) == null ? void 0 : _a.call(e2), e2.footer ? p(`div`, { class: `${t2}-list__footer` }, e2.footer()) : null);
} }), C = _({ name: `ListItem`, slots: Object, setup() {
  let t2 = m(x, null);
  return t2 || e(`list-item`, "`n-list-item` must be placed in `n-list`."), { showDivider: t2.showDividerRef, mergedClsPrefix: t2.mergedClsPrefixRef };
}, render() {
  let { $slots: e2, mergedClsPrefix: t2 } = this;
  return p(`li`, { class: `${t2}-list-item` }, e2.prefix ? p(`div`, { class: `${t2}-list-item__prefix` }, e2.prefix()) : null, e2.default ? p(`div`, { class: `${t2}-list-item__main` }, e2) : null, e2.suffix ? p(`div`, { class: `${t2}-list-item__suffix` }, e2.suffix()) : null, this.showDivider && p(`div`, { class: `${t2}-list-item__divider` }));
} });
export {
  S as n,
  C as t
};
