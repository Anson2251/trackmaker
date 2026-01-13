import { F as e, M as t, O as n, T as r, _ as i, c as a, dt as o, f as s, gt as c, h as l, ht as u, mt as d, ot as f, pt as p, ut as m, y as h } from "./Card-nhqq8IKa.js";
import { i as g } from "./Tooltip-DGge0ha1.js";
import { Bt as _, Et as v, an as y, cn as b, gt as x, wt as S } from "./index-DTVnoW_1.js";
function C(e2, t2 = `default`, n2 = []) {
  let r2 = e2.$slots[t2];
  return r2 === void 0 ? n2 : r2();
}
var w = { color: Object, type: { type: String, default: `default` }, round: Boolean, size: { type: String, default: `medium` }, closable: Boolean, disabled: { type: Boolean, default: void 0 } }, T = o(`tag`, `
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [d(`strong`, `
 font-weight: var(--n-font-weight-strong);
 `), p(`border`, `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), p(`icon`, `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), p(`avatar`, `
 display: flex;
 margin: 0 6px 0 0;
 `), p(`close`, `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), d(`round`, `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [p(`icon`, `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), p(`avatar`, `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), d(`closable`, `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), d(`icon, avatar`, [d(`round`, `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), d(`disabled`, `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), d(`checkable`, `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [u(`disabled`, [m(`&:hover`, `background-color: var(--n-color-hover-checkable);`, [u(`checked`, `color: var(--n-text-color-hover-checkable);`)]), m(`&:active`, `background-color: var(--n-color-pressed-checkable);`, [u(`checked`, `color: var(--n-text-color-pressed-checkable);`)])]), d(`checked`, `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [u(`disabled`, [m(`&:hover`, `background-color: var(--n-color-checked-hover);`), m(`&:active`, `background-color: var(--n-color-checked-pressed);`)])])])]);
const E = Object.assign(Object.assign(Object.assign({}, s.props), w), { bordered: { type: Boolean, default: void 0 }, checked: Boolean, checkable: Boolean, strong: Boolean, triggerClickOnClose: Boolean, onClose: [Array, Function], onMouseenter: Function, onMouseleave: Function, "onUpdate:checked": Function, onUpdateChecked: Function, internalCloseFocusable: { type: Boolean, default: true }, internalCloseIsButtonTag: { type: Boolean, default: true }, onCheckedChange: Function }), D = e(`n-tag`);
var O = S({ name: `Tag`, props: E, slots: Object, setup(e2) {
  let r2 = y(null), { mergedBorderedRef: a2, mergedClsPrefixRef: o2, inlineThemeDisabled: u2, mergedRtlRef: d2 } = h(e2), p2 = s(`Tag`, `-tag`, T, g, e2, o2);
  _(D, { roundRef: b(e2, `round`) });
  function m2() {
    if (!e2.disabled && e2.checkable) {
      let { checked: t2, onCheckedChange: n2, onUpdateChecked: r3, "onUpdate:checked": i2 } = e2;
      r3 && r3(!t2), i2 && i2(!t2), n2 && n2(!t2);
    }
  }
  function v2(t2) {
    if (e2.triggerClickOnClose || t2.stopPropagation(), !e2.disabled) {
      let { onClose: r3 } = e2;
      r3 && n(r3, t2);
    }
  }
  let S2 = { setTextContent(e3) {
    let { value: t2 } = r2;
    t2 && (t2.textContent = e3);
  } }, C2 = l(`Tag`, d2, o2), w2 = x(() => {
    let { type: t2, size: n2, color: { color: r3, textColor: i2 } = {} } = e2, { common: { cubicBezierEaseInOut: o3 }, self: { padding: s2, closeMargin: l2, borderRadius: u3, opacityDisabled: d3, textColorCheckable: m3, textColorHoverCheckable: h2, textColorPressedCheckable: g2, textColorChecked: _2, colorCheckable: v3, colorHoverCheckable: y2, colorPressedCheckable: b2, colorChecked: x2, colorCheckedHover: S3, colorCheckedPressed: C3, closeBorderRadius: w3, fontWeightStrong: T2, [c(`colorBordered`, t2)]: E3, [c(`closeSize`, n2)]: D2, [c(`closeIconSize`, n2)]: O2, [c(`fontSize`, n2)]: k, [c(`height`, n2)]: A, [c(`color`, t2)]: j, [c(`textColor`, t2)]: M, [c(`border`, t2)]: N, [c(`closeIconColor`, t2)]: P, [c(`closeIconColorHover`, t2)]: F, [c(`closeIconColorPressed`, t2)]: I, [c(`closeColorHover`, t2)]: L, [c(`closeColorPressed`, t2)]: R } } = p2.value, z = f(l2);
    return { "--n-font-weight-strong": T2, "--n-avatar-size-override": `calc(${A} - 8px)`, "--n-bezier": o3, "--n-border-radius": u3, "--n-border": N, "--n-close-icon-size": O2, "--n-close-color-pressed": R, "--n-close-color-hover": L, "--n-close-border-radius": w3, "--n-close-icon-color": P, "--n-close-icon-color-hover": F, "--n-close-icon-color-pressed": I, "--n-close-icon-color-disabled": P, "--n-close-margin-top": z.top, "--n-close-margin-right": z.right, "--n-close-margin-bottom": z.bottom, "--n-close-margin-left": z.left, "--n-close-size": D2, "--n-color": r3 || (a2.value ? E3 : j), "--n-color-checkable": v3, "--n-color-checked": x2, "--n-color-checked-hover": S3, "--n-color-checked-pressed": C3, "--n-color-hover-checkable": y2, "--n-color-pressed-checkable": b2, "--n-font-size": k, "--n-height": A, "--n-opacity-disabled": d3, "--n-padding": s2, "--n-text-color": i2 || M, "--n-text-color-checkable": m3, "--n-text-color-checked": _2, "--n-text-color-hover-checkable": h2, "--n-text-color-pressed-checkable": g2 };
  }), E2 = u2 ? i(`tag`, x(() => {
    let n2 = ``, { type: r3, size: i2, color: { color: o3, textColor: s2 } = {} } = e2;
    return n2 += r3[0], n2 += i2[0], o3 && (n2 += `a${t(o3)}`), s2 && (n2 += `b${t(s2)}`), a2.value && (n2 += `c`), n2;
  }), w2, e2) : void 0;
  return Object.assign(Object.assign({}, S2), { rtlEnabled: C2, mergedClsPrefix: o2, contentRef: r2, mergedBordered: a2, handleClick: m2, handleCloseClick: v2, cssVars: u2 ? void 0 : w2, themeClass: E2 == null ? void 0 : E2.themeClass, onRender: E2 == null ? void 0 : E2.onRender });
}, render() {
  var _a;
  var e2;
  let { mergedClsPrefix: t2, rtlEnabled: n2, closable: i2, color: { borderColor: o2 } = {}, round: s2, onRender: c2, $slots: l2 } = this;
  c2 == null ? void 0 : c2();
  let u2 = r(l2.avatar, (e3) => e3 && v(`div`, { class: `${t2}-tag__avatar` }, e3)), d2 = r(l2.icon, (e3) => e3 && v(`div`, { class: `${t2}-tag__icon` }, e3));
  return v(`div`, { class: [`${t2}-tag`, this.themeClass, { [`${t2}-tag--rtl`]: n2, [`${t2}-tag--strong`]: this.strong, [`${t2}-tag--disabled`]: this.disabled, [`${t2}-tag--checkable`]: this.checkable, [`${t2}-tag--checked`]: this.checkable && this.checked, [`${t2}-tag--round`]: s2, [`${t2}-tag--avatar`]: u2, [`${t2}-tag--icon`]: d2, [`${t2}-tag--closable`]: i2 }], style: this.cssVars, onClick: this.handleClick, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave }, d2 || u2, v(`span`, { class: `${t2}-tag__content`, ref: `contentRef` }, (_a = (e2 = this.$slots).default) == null ? void 0 : _a.call(e2)), !this.checkable && i2 ? v(a, { clsPrefix: t2, class: `${t2}-tag__close`, disabled: this.disabled, onClick: this.handleCloseClick, focusable: this.internalCloseFocusable, round: s2, isButtonTag: this.internalCloseIsButtonTag, absolute: true }) : null, !this.checkable && this.mergedBordered ? v(`div`, { class: `${t2}-tag__border`, style: { borderColor: o2 } }) : null);
} });
export {
  w as n,
  C as r,
  O as t
};
