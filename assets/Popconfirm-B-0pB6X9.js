import { C as e, D as t, F as n, O as r, T as i, _ as a, dt as o, f as s, pt as c, u as l, ut as u, y as d } from "./Card-nhqq8IKa.js";
import { _ as f, o as p, s as m } from "./Tooltip-DGge0ha1.js";
import { Bt as h, Et as g, Ot as _, an as v, cn as y, gt as b, wt as x } from "./index-DTVnoW_1.js";
import { t as S } from "./omit-DTu60rkx.js";
import { t as C } from "./Button-o58fM-RZ.js";
import { t as w } from "./use-locale-C5hleQcp.js";
import { t as T } from "./Warning-DtnUwqHe.js";
import { t as E } from "./light-CQB9eEMb.js";
var D = { tiny: `mini`, small: `tiny`, medium: `small`, large: `medium`, huge: `large` };
function O(e2) {
  let t2 = D[e2];
  if (t2 === void 0) throw Error(`${e2} has no smaller size.`);
  return t2;
}
const k = n(`n-popconfirm`), A = { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true } }, j = t(A);
var M = x({ name: `NPopconfirmPanel`, props: A, setup(e2) {
  let { localeRef: t2 } = w(`Popconfirm`), { inlineThemeDisabled: n2 } = d(), { mergedClsPrefixRef: r2, mergedThemeRef: i2, props: o2 } = _(k), s2 = b(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { fontSize: t3, iconSize: n3, iconColor: r3 } } = i2.value;
    return { "--n-bezier": e3, "--n-font-size": t3, "--n-icon-size": n3, "--n-icon-color": r3 };
  }), c2 = n2 ? a(`popconfirm-panel`, void 0, s2, o2) : void 0;
  return Object.assign(Object.assign({}, w(`Popconfirm`)), { mergedClsPrefix: r2, cssVars: n2 ? void 0 : s2, localizedPositiveText: b(() => e2.positiveText || t2.value.positiveText), localizedNegativeText: b(() => e2.negativeText || t2.value.negativeText), positiveButtonProps: y(o2, `positiveButtonProps`), negativeButtonProps: y(o2, `negativeButtonProps`), handlePositiveClick(t3) {
    e2.onPositiveClick(t3);
  }, handleNegativeClick(t3) {
    e2.onNegativeClick(t3);
  }, themeClass: c2 == null ? void 0 : c2.themeClass, onRender: c2 == null ? void 0 : c2.onRender });
}, render() {
  var t2;
  let { mergedClsPrefix: n2, showIcon: r2, $slots: a2 } = this, o2 = e(a2.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && g(C, Object.assign({ size: `small`, onClick: this.handleNegativeClick }, this.negativeButtonProps), { default: () => this.localizedNegativeText }), this.positiveText !== null && g(C, Object.assign({ size: `small`, type: `primary`, onClick: this.handlePositiveClick }, this.positiveButtonProps), { default: () => this.localizedPositiveText })]);
  return (t2 = this.onRender) == null || t2.call(this), g(`div`, { class: [`${n2}-popconfirm__panel`, this.themeClass], style: this.cssVars }, i(a2.default, (t3) => r2 || t3 ? g(`div`, { class: `${n2}-popconfirm__body` }, r2 ? g(`div`, { class: `${n2}-popconfirm__icon` }, e(a2.icon, () => [g(l, { clsPrefix: n2 }, { default: () => g(T, null) })])) : null, t3) : null), o2 ? g(`div`, { class: [`${n2}-popconfirm__action`] }, o2) : null);
} }), N = o(`popconfirm`, [c(`body`, `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [c(`icon`, `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), c(`action`, `
 display: flex;
 justify-content: flex-end;
 `, [u(`&:not(:first-child)`, `margin-top: 8px`), o(`button`, [u(`&:not(:last-child)`, `margin-right: 8px;`)])])]), P = x({ name: `Popconfirm`, props: Object.assign(Object.assign(Object.assign({}, s.props), m), { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, trigger: { type: String, default: `click` }, positiveButtonProps: Object, negativeButtonProps: Object, onPositiveClick: Function, onNegativeClick: Function }), slots: Object, __popover__: true, setup(e2) {
  let { mergedClsPrefixRef: t2 } = d(), n2 = s(`Popconfirm`, `-popconfirm`, N, E, e2, t2), i2 = v(null);
  function a2(t3) {
    var _a;
    if (!((_a = i2.value) == null ? void 0 : _a.getMergedShow())) return;
    let { onPositiveClick: n3, "onUpdate:show": a3 } = e2;
    Promise.resolve(n3 ? n3(t3) : true).then((e3) => {
      var t4;
      e3 !== false && ((t4 = i2.value) == null || t4.setShow(false), a3 && r(a3, false));
    });
  }
  function o2(t3) {
    var _a;
    if (!((_a = i2.value) == null ? void 0 : _a.getMergedShow())) return;
    let { onNegativeClick: n3, "onUpdate:show": a3 } = e2;
    Promise.resolve(n3 ? n3(t3) : true).then((e3) => {
      var t4;
      e3 !== false && ((t4 = i2.value) == null || t4.setShow(false), a3 && r(a3, false));
    });
  }
  return h(k, { mergedThemeRef: n2, mergedClsPrefixRef: t2, props: e2 }), { setShow(e3) {
    var t3;
    (t3 = i2.value) == null || t3.setShow(e3);
  }, syncPosition() {
    var e3;
    (e3 = i2.value) == null || e3.syncPosition();
  }, mergedTheme: n2, popoverInstRef: i2, handlePositiveClick: a2, handleNegativeClick: o2 };
}, render() {
  let { $slots: e2, $props: t2, mergedTheme: n2 } = this;
  return g(p, Object.assign({}, S(t2, j), { theme: n2.peers.Popover, themeOverrides: n2.peerOverrides.Popover, internalExtraClass: [`popconfirm`], ref: `popoverInstRef` }), { trigger: e2.trigger, default: () => {
    let n3 = f(t2, j);
    return g(M, Object.assign({}, n3, { onPositiveClick: this.handlePositiveClick, onNegativeClick: this.handleNegativeClick }), e2);
  } });
} });
export {
  O as n,
  P as t
};
