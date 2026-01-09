import { D as e, M as t, at as n, c as r, ct as i, dt as a, f as o, ft as s, g as c, h as l, k as u, lt as d, ot as f, pt as p, tt as m, ut as h, v as g, w as _ } from "./Card-D60iqeq5.js";
import { b as v, r as y, t as b } from "./light-BMk8WVBh.js";
import { At as x, Jt as S, Zt as C, gt as w, mt as T, ot as E, vt as D } from "./index-BKmvGcPh.js";
var O = { color: Object, type: { type: String, default: `default` }, round: Boolean, size: { type: String, default: `medium` }, closable: Boolean, disabled: { type: Boolean, default: void 0 } }, k = f(`tag`, `
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
 `), i(`border`, `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), i(`icon`, `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), i(`avatar`, `
 display: flex;
 margin: 0 6px 0 0;
 `), i(`close`, `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), d(`round`, `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [i(`icon`, `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), i(`avatar`, `
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
 `, [h(`disabled`, [n(`&:hover`, `background-color: var(--n-color-hover-checkable);`, [h(`checked`, `color: var(--n-text-color-hover-checkable);`)]), n(`&:active`, `background-color: var(--n-color-pressed-checkable);`, [h(`checked`, `color: var(--n-text-color-pressed-checkable);`)])]), d(`checked`, `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [h(`disabled`, [n(`&:hover`, `background-color: var(--n-color-checked-hover);`), n(`&:active`, `background-color: var(--n-color-checked-pressed);`)])])])]);
const A = Object.assign(Object.assign(Object.assign({}, o.props), O), { bordered: { type: Boolean, default: void 0 }, checked: Boolean, checkable: Boolean, strong: Boolean, triggerClickOnClose: Boolean, onClose: [Array, Function], onMouseenter: Function, onMouseleave: Function, "onUpdate:checked": Function, onUpdateChecked: Function, internalCloseFocusable: { type: Boolean, default: true }, internalCloseIsButtonTag: { type: Boolean, default: true }, onCheckedChange: Function }), j = t(`n-tag`);
var M = T({ name: `Tag`, props: A, slots: Object, setup(t2) {
  let n2 = S(null), { mergedBorderedRef: r2, mergedClsPrefixRef: i2, inlineThemeDisabled: s2, mergedRtlRef: u2 } = g(t2), d2 = o(`Tag`, `-tag`, k, y, t2, i2);
  x(j, { roundRef: C(t2, `round`) });
  function f2() {
    if (!t2.disabled && t2.checkable) {
      let { checked: e2, onCheckedChange: n3, onUpdateChecked: r3, "onUpdate:checked": i3 } = t2;
      r3 && r3(!e2), i3 && i3(!e2), n3 && n3(!e2);
    }
  }
  function p2(n3) {
    if (t2.triggerClickOnClose || n3.stopPropagation(), !t2.disabled) {
      let { onClose: r3 } = t2;
      r3 && e(r3, n3);
    }
  }
  let h2 = { setTextContent(e2) {
    let { value: t3 } = n2;
    t3 && (t3.textContent = e2);
  } }, _2 = l(`Tag`, u2, i2), b2 = E(() => {
    let { type: e2, size: n3, color: { color: i3, textColor: o2 } = {} } = t2, { common: { cubicBezierEaseInOut: s3 }, self: { padding: c2, closeMargin: l2, borderRadius: u3, opacityDisabled: f3, textColorCheckable: p3, textColorHoverCheckable: h3, textColorPressedCheckable: g2, textColorChecked: _3, colorCheckable: v2, colorHoverCheckable: y2, colorPressedCheckable: b3, colorChecked: x2, colorCheckedHover: S2, colorCheckedPressed: C2, closeBorderRadius: w3, fontWeightStrong: T2, [a(`colorBordered`, e2)]: E2, [a(`closeSize`, n3)]: D2, [a(`closeIconSize`, n3)]: O2, [a(`fontSize`, n3)]: k2, [a(`height`, n3)]: A2, [a(`color`, e2)]: j2, [a(`textColor`, e2)]: M2, [a(`border`, e2)]: N2, [a(`closeIconColor`, e2)]: P2, [a(`closeIconColorHover`, e2)]: F2, [a(`closeIconColorPressed`, e2)]: I2, [a(`closeColorHover`, e2)]: L2, [a(`closeColorPressed`, e2)]: R } } = d2.value, z = m(l2);
    return { "--n-font-weight-strong": T2, "--n-avatar-size-override": `calc(${A2} - 8px)`, "--n-bezier": s3, "--n-border-radius": u3, "--n-border": N2, "--n-close-icon-size": O2, "--n-close-color-pressed": R, "--n-close-color-hover": L2, "--n-close-border-radius": w3, "--n-close-icon-color": P2, "--n-close-icon-color-hover": F2, "--n-close-icon-color-pressed": I2, "--n-close-icon-color-disabled": P2, "--n-close-margin-top": z.top, "--n-close-margin-right": z.right, "--n-close-margin-bottom": z.bottom, "--n-close-margin-left": z.left, "--n-close-size": D2, "--n-color": i3 || (r2.value ? E2 : j2), "--n-color-checkable": v2, "--n-color-checked": x2, "--n-color-checked-hover": S2, "--n-color-checked-pressed": C2, "--n-color-hover-checkable": y2, "--n-color-pressed-checkable": b3, "--n-font-size": k2, "--n-height": A2, "--n-opacity-disabled": f3, "--n-padding": c2, "--n-text-color": o2 || M2, "--n-text-color-checkable": p3, "--n-text-color-checked": _3, "--n-text-color-hover-checkable": h3, "--n-text-color-pressed-checkable": g2 };
  }), w2 = s2 ? c(`tag`, E(() => {
    let e2 = ``, { type: n3, size: i3, color: { color: a2, textColor: o2 } = {} } = t2;
    return e2 += n3[0], e2 += i3[0], a2 && (e2 += `a${v(a2)}`), o2 && (e2 += `b${v(o2)}`), r2.value && (e2 += `c`), e2;
  }), b2, t2) : void 0;
  return Object.assign(Object.assign({}, h2), { rtlEnabled: _2, mergedClsPrefix: i2, contentRef: n2, mergedBordered: r2, handleClick: f2, handleCloseClick: p2, cssVars: s2 ? void 0 : b2, themeClass: w2 == null ? void 0 : w2.themeClass, onRender: w2 == null ? void 0 : w2.onRender });
}, render() {
  var _a;
  var e2;
  let { mergedClsPrefix: t2, rtlEnabled: n2, closable: i2, color: { borderColor: a2 } = {}, round: o2, onRender: s2, $slots: c2 } = this;
  s2 == null ? void 0 : s2();
  let l2 = _(c2.avatar, (e3) => e3 && w(`div`, { class: `${t2}-tag__avatar` }, e3)), u2 = _(c2.icon, (e3) => e3 && w(`div`, { class: `${t2}-tag__icon` }, e3));
  return w(`div`, { class: [`${t2}-tag`, this.themeClass, { [`${t2}-tag--rtl`]: n2, [`${t2}-tag--strong`]: this.strong, [`${t2}-tag--disabled`]: this.disabled, [`${t2}-tag--checkable`]: this.checkable, [`${t2}-tag--checked`]: this.checkable && this.checked, [`${t2}-tag--round`]: o2, [`${t2}-tag--avatar`]: l2, [`${t2}-tag--icon`]: u2, [`${t2}-tag--closable`]: i2 }], style: this.cssVars, onClick: this.handleClick, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave }, u2 || l2, w(`span`, { class: `${t2}-tag__content`, ref: `contentRef` }, (_a = (e2 = this.$slots).default) == null ? void 0 : _a.call(e2)), !this.checkable && i2 ? w(r, { clsPrefix: t2, class: `${t2}-tag__close`, disabled: this.disabled, onClick: this.handleCloseClick, focusable: this.internalCloseFocusable, round: o2, isButtonTag: this.internalCloseIsButtonTag, absolute: true }) : null, !this.checkable && this.mergedBordered ? w(`div`, { class: `${t2}-tag__border`, style: { borderColor: a2 } }) : null);
} }), N = n([f(`list`, `
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
 `, [d(`show-divider`, [f(`list-item`, [n(`&:not(:last-child)`, [i(`divider`, `
 background-color: var(--n-merged-border-color);
 `)])])]), d(`clickable`, [f(`list-item`, `
 cursor: pointer;
 `)]), d(`bordered`, `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), d(`hoverable`, [f(`list-item`, `
 border-radius: var(--n-border-radius);
 `, [n(`&:hover`, `
 background-color: var(--n-merged-color-hover);
 `, [i(`divider`, `
 background-color: transparent;
 `)])])]), d(`bordered, hoverable`, [f(`list-item`, `
 padding: 12px 20px;
 `), i(`header, footer`, `
 padding: 12px 20px;
 `)]), i(`header, footer`, `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [n(`&:not(:last-child)`, `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), f(`list-item`, `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [i(`prefix`, `
 margin-right: 20px;
 flex: 0;
 `), i(`suffix`, `
 margin-left: 20px;
 flex: 0;
 `), i(`main`, `
 flex: 1;
 `), i(`divider`, `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), s(f(`list`, `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), p(f(`list`, `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);
const P = Object.assign(Object.assign({}, o.props), { size: { type: String, default: `medium` }, bordered: Boolean, clickable: Boolean, hoverable: Boolean, showDivider: { type: Boolean, default: true } }), F = t(`n-list`);
var I = T({ name: `List`, props: P, slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2, mergedRtlRef: r2 } = g(e2), i2 = l(`List`, r2, t2), a2 = o(`List`, `-list`, N, b, e2, t2);
  x(F, { showDividerRef: C(e2, `showDivider`), mergedClsPrefixRef: t2 });
  let s2 = E(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { fontSize: t3, textColor: n3, color: r3, colorModal: i3, colorPopover: o2, borderColor: s3, borderColorModal: c2, borderColorPopover: l2, borderRadius: u3, colorHover: d2, colorHoverModal: f2, colorHoverPopover: p2 } } = a2.value;
    return { "--n-font-size": t3, "--n-bezier": e3, "--n-text-color": n3, "--n-color": r3, "--n-border-radius": u3, "--n-border-color": s3, "--n-border-color-modal": c2, "--n-border-color-popover": l2, "--n-color-modal": i3, "--n-color-popover": o2, "--n-color-hover": d2, "--n-color-hover-modal": f2, "--n-color-hover-popover": p2 };
  }), u2 = n2 ? c(`list`, void 0, s2, e2) : void 0;
  return { mergedClsPrefix: t2, rtlEnabled: i2, cssVars: n2 ? void 0 : s2, themeClass: u2 == null ? void 0 : u2.themeClass, onRender: u2 == null ? void 0 : u2.onRender };
}, render() {
  var _a;
  let { $slots: e2, mergedClsPrefix: t2, onRender: n2 } = this;
  return n2 == null ? void 0 : n2(), w(`ul`, { class: [`${t2}-list`, this.rtlEnabled && `${t2}-list--rtl`, this.bordered && `${t2}-list--bordered`, this.showDivider && `${t2}-list--show-divider`, this.hoverable && `${t2}-list--hoverable`, this.clickable && `${t2}-list--clickable`, this.themeClass], style: this.cssVars }, e2.header ? w(`div`, { class: `${t2}-list__header` }, e2.header()) : null, (_a = e2.default) == null ? void 0 : _a.call(e2), e2.footer ? w(`div`, { class: `${t2}-list__footer` }, e2.footer()) : null);
} }), L = T({ name: `ListItem`, slots: Object, setup() {
  let e2 = D(F, null);
  return e2 || u(`list-item`, "`n-list-item` must be placed in `n-list`."), { showDivider: e2.showDividerRef, mergedClsPrefix: e2.mergedClsPrefixRef };
}, render() {
  let { $slots: e2, mergedClsPrefix: t2 } = this;
  return w(`li`, { class: `${t2}-list-item` }, e2.prefix ? w(`div`, { class: `${t2}-list-item__prefix` }, e2.prefix()) : null, e2.default ? w(`div`, { class: `${t2}-list-item__main` }, e2) : null, e2.suffix ? w(`div`, { class: `${t2}-list-item__suffix` }, e2.suffix()) : null, this.showDivider && w(`div`, { class: `${t2}-list-item__divider` }));
} });
export {
  O as i,
  I as n,
  M as r,
  L as t
};
