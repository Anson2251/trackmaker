var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c;
import { A as e, D as t, E as n, M as r, N as i, P as a, S as o, at as s, c, ct as l, d as u, dt as d, f, ft as p, g as m, h, i as g, it as _, lt as v, n as y, o as b, ot as x, r as S, t as C, tt as ee, u as te, v as w, w as T } from "./Card-D_DaNXyK.js";
import { B as ne, H as re, I as ie, K as ae, M as E, O as oe, R as se, V as ce, X as le, Z as ue, _ as de, b as fe, d as pe, et as D, h as me, j as he, o as ge, p as _e, q as ve, rt as ye, tt as O, w as be, y as xe, z as Se } from "./light-DStk_u6n.js";
import { At as Ce, Bt as we, Dt as Te, J as Ee, Jt as k, Lt as De, Ot as Oe, St as ke, Tt as Ae, Z as je, Zt as A, a as Me, at as Ne, c as Pe, gt as j, h as Fe, kt as Ie, m as Le, mt as M, ot as N, qt as Re, st as ze, tn as Be, ut as Ve, v as P, vt as He, wt as Ue, x as F, xt as We, y as I } from "./index-lIAgGLuV.js";
import { t as Ge } from "./fade-in-scale-up.cssr-Cs4gy4Y4.js";
import { O as L, d as R, i as z, k as Ke, l as qe, n as Je, r as B } from "./core-B0GgJVIi.js";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./Warning-BT_cbo8R.js";
import { t as $e } from "./light-DgETFGvr.js";
import { t as et } from "./light-BROUb78j.js";
var tt = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, nt = M({ name: `MapPin`, render: function(e3, t2) {
  return Ie(), Ve(`svg`, tt, t2[0] || (t2[0] = [ze(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [ze(`circle`, { cx: `12`, cy: `11`, r: `3` }), ze(`path`, { d: `M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z` })], -1)]));
} }), V = k(null);
function rt(e3) {
  if (e3.clientX > 0 || e3.clientY > 0) V.value = { x: e3.clientX, y: e3.clientY };
  else {
    let { target: t2 } = e3;
    if (t2 instanceof Element) {
      let { left: e4, top: n2, width: r2, height: i2 } = t2.getBoundingClientRect();
      e4 > 0 || n2 > 0 ? V.value = { x: e4 + r2 / 2, y: n2 + i2 / 2 } : V.value = { x: 0, y: 0 };
    } else V.value = null;
  }
}
var it = 0, at = true;
function ot() {
  if (!ue) return Re(k(null));
  it === 0 && O(`click`, document, rt, true);
  let e3 = () => {
    it += 1;
  };
  return at && (at = le()) ? (Ue(e3), Ae(() => {
    --it, it === 0 && D(`click`, document, rt, true);
  })) : e3(), Re(V);
}
var st = k(void 0), ct = 0;
function lt() {
  st.value = Date.now();
}
var ut = true;
function dt(e3) {
  if (!ue) return Re(k(false));
  let t2 = k(false), n2 = null;
  function r2() {
    n2 !== null && window.clearTimeout(n2);
  }
  function i2() {
    r2(), t2.value = true, n2 = window.setTimeout(() => {
      t2.value = false;
    }, e3);
  }
  ct === 0 && O(`click`, window, lt, true);
  let a2 = () => {
    ct += 1, O(`click`, window, i2, true);
  };
  return ut && (ut = le()) ? (Ue(a2), Ae(() => {
    --ct, ct === 0 && D(`click`, window, lt, true), D(`click`, window, i2, true), r2();
  })) : a2(), Re(t2);
}
var ft = k(false);
function pt() {
  ft.value = true;
}
function mt() {
  ft.value = false;
}
var H = 0;
function ht() {
  return ie && (Ue(() => {
    H || (window.addEventListener(`compositionstart`, pt), window.addEventListener(`compositionend`, mt)), H++;
  }), Ae(() => {
    H <= 1 ? (window.removeEventListener(`compositionstart`, pt), window.removeEventListener(`compositionend`, mt), H = 0) : H--;
  })), ft;
}
var U = 0, gt = ``, _t = ``, vt = ``, yt = ``;
const bt = k(`0px`);
function xt(e3) {
  if (typeof document > `u`) return;
  let t2 = document.documentElement, n2, r2 = false, i2 = () => {
    t2.style.marginRight = gt, t2.style.overflow = _t, t2.style.overflowX = vt, t2.style.overflowY = yt, bt.value = `0px`;
  };
  Te(() => {
    n2 = De(e3, (e4) => {
      if (e4) {
        if (!U) {
          let e5 = window.innerWidth - t2.offsetWidth;
          e5 > 0 && (gt = t2.style.marginRight, t2.style.marginRight = `${e5}px`, bt.value = `${e5}px`), _t = t2.style.overflow, vt = t2.style.overflowX, yt = t2.style.overflowY, t2.style.overflow = `hidden`, t2.style.overflowX = `hidden`, t2.style.overflowY = `hidden`;
        }
        r2 = true, U++;
      } else U--, U || i2(), r2 = false;
    }, { immediate: true });
  }), Ae(() => {
    n2 == null ? void 0 : n2(), r2 && (r2 = (U--, U || i2(), false));
  });
}
var St = { paddingTiny: `0 8px`, paddingSmall: `0 10px`, paddingMedium: `0 12px`, paddingLarge: `0 14px`, clearSize: `16px` };
function Ct(e3) {
  let { textColor2: t2, textColor3: n2, textColorDisabled: r2, primaryColor: a2, primaryColorHover: o2, inputColor: s2, inputColorDisabled: c2, borderColor: l2, warningColor: u2, warningColorHover: d2, errorColor: f2, errorColorHover: p2, borderRadius: m2, lineHeight: h2, fontSizeTiny: g2, fontSizeSmall: _2, fontSizeMedium: v2, fontSizeLarge: y2, heightTiny: b2, heightSmall: x2, heightMedium: S2, heightLarge: C2, actionColor: ee2, clearColor: te2, clearColorHover: w2, clearColorPressed: T2, placeholderColor: ne2, placeholderColorDisabled: re2, iconColor: ie2, iconColorDisabled: ae2, iconColorHover: E2, iconColorPressed: oe2, fontWeight: se2 } = e3;
  return Object.assign(Object.assign({}, St), { fontWeight: se2, countTextColorDisabled: r2, countTextColor: n2, heightTiny: b2, heightSmall: x2, heightMedium: S2, heightLarge: C2, fontSizeTiny: g2, fontSizeSmall: _2, fontSizeMedium: v2, fontSizeLarge: y2, lineHeight: h2, lineHeightTextarea: h2, borderRadius: m2, iconSize: `16px`, groupLabelColor: ee2, groupLabelTextColor: t2, textColor: t2, textColorDisabled: r2, textDecorationColor: t2, caretColor: a2, placeholderColor: ne2, placeholderColorDisabled: re2, color: s2, colorDisabled: c2, colorFocus: s2, groupLabelBorder: `1px solid ${l2}`, border: `1px solid ${l2}`, borderHover: `1px solid ${o2}`, borderDisabled: `1px solid ${l2}`, borderFocus: `1px solid ${o2}`, boxShadowFocus: `0 0 0 2px ${i(a2, { alpha: 0.2 })}`, loadingColor: a2, loadingColorWarning: u2, borderWarning: `1px solid ${u2}`, borderHoverWarning: `1px solid ${d2}`, colorFocusWarning: s2, borderFocusWarning: `1px solid ${d2}`, boxShadowFocusWarning: `0 0 0 2px ${i(u2, { alpha: 0.2 })}`, caretColorWarning: u2, loadingColorError: f2, borderError: `1px solid ${f2}`, borderHoverError: `1px solid ${p2}`, colorFocusError: s2, borderFocusError: `1px solid ${p2}`, boxShadowFocusError: `0 0 0 2px ${i(f2, { alpha: 0.2 })}`, caretColorError: f2, clearColor: te2, clearColorHover: w2, clearColorPressed: T2, iconColor: ie2, iconColorDisabled: ae2, iconColorHover: E2, iconColorPressed: oe2, suffixTextColor: t2 });
}
var wt = u({ name: `Input`, common: b, peers: { Scrollbar: me }, self: Ct });
function Tt(e3) {
  let { fontSize: t2, boxShadow2: n2, popoverColor: r2, textColor2: i2, borderRadius: a2, borderColor: o2, heightSmall: s2, heightMedium: c2, heightLarge: l2, fontSizeSmall: u2, fontSizeMedium: d2, fontSizeLarge: f2, dividerColor: p2 } = e3;
  return { panelFontSize: t2, boxShadow: n2, color: r2, textColor: i2, borderRadius: a2, border: `1px solid ${o2}`, heightSmall: s2, heightMedium: c2, heightLarge: l2, fontSizeSmall: u2, fontSizeMedium: d2, fontSizeLarge: f2, dividerColor: p2 };
}
var Et = u({ name: `ColorPicker`, common: b, peers: { Input: wt, Button: R }, self: Tt });
const Dt = r(`n-dialog-provider`), Ot = r(`n-dialog-api`), kt = r(`n-dialog-reactive-list`);
var At = { titleFontSize: `18px`, padding: `16px 28px 20px 28px`, iconSize: `28px`, actionSpace: `12px`, contentMargin: `8px 0 16px 0`, iconMargin: `0 4px 0 0`, iconMarginIconTop: `4px 0 8px 0`, closeSize: `22px`, closeIconSize: `18px`, closeMargin: `20px 26px 0 0`, closeMarginIconTop: `10px 16px 0 0` };
function jt(e3) {
  let { textColor1: t2, textColor2: n2, modalColor: r2, closeIconColor: i2, closeIconColorHover: a2, closeIconColorPressed: o2, closeColorHover: s2, closeColorPressed: c2, infoColor: l2, successColor: u2, warningColor: d2, errorColor: f2, primaryColor: p2, dividerColor: m2, borderRadius: h2, fontWeightStrong: g2, lineHeight: _2, fontSize: v2 } = e3;
  return Object.assign(Object.assign({}, At), { fontSize: v2, lineHeight: _2, border: `1px solid ${m2}`, titleTextColor: t2, textColor: n2, color: r2, closeColorHover: s2, closeColorPressed: c2, closeIconColor: i2, closeIconColorHover: a2, closeIconColorPressed: o2, closeBorderRadius: h2, iconColor: p2, iconColorInfo: l2, iconColorSuccess: u2, iconColorWarning: d2, iconColorError: f2, borderRadius: h2, titleFontWeight: g2 });
}
var Mt = u({ name: `Dialog`, common: b, peers: { Button: R }, self: jt }), Nt = { icon: Function, type: { type: String, default: `default` }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean };
const Pt = n(Nt);
var Ft = s([x(`dialog`, `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [l(`icon`, `
 color: var(--n-icon-color);
 `), v(`bordered`, `
 border: var(--n-border);
 `), v(`icon-top`, [l(`close`, `
 margin: var(--n-close-margin);
 `), l(`icon`, `
 margin: var(--n-icon-margin);
 `), l(`content`, `
 text-align: center;
 `), l(`title`, `
 justify-content: center;
 `), l(`action`, `
 justify-content: center;
 `)]), v(`icon-left`, [l(`icon`, `
 margin: var(--n-icon-margin);
 `), v(`closable`, [l(`title`, `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), l(`close`, `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), l(`content`, `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [v(`last`, `margin-bottom: 0;`)]), l(`action`, `
 display: flex;
 justify-content: flex-end;
 `, [s(`> *:not(:last-child)`, `
 margin-right: var(--n-action-space);
 `)]), l(`icon`, `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), l(`title`, `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), x(`dialog-icon-container`, `
 display: flex;
 justify-content: center;
 `)]), p(x(`dialog`, `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), x(`dialog`, [_(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), It = { default: () => j(Ze, null), info: () => j(Ze, null), success: () => j(Xe, null), warning: () => j(Qe, null), error: () => j(Ye, null) };
const Lt = M({ name: `Dialog`, alias: [`NimbusConfirmCard`, `Confirm`], props: Object.assign(Object.assign({}, f.props), Nt), slots: Object, setup(e3) {
  let { mergedComponentPropsRef: t2, mergedClsPrefixRef: n2, inlineThemeDisabled: r2, mergedRtlRef: i2 } = w(e3), a2 = h(`Dialog`, i2, n2), o2 = N(() => {
    var _a2, _b2;
    let { iconPlacement: n3 } = e3;
    return n3 || ((_b2 = (_a2 = t2 == null ? void 0 : t2.value) == null ? void 0 : _a2.Dialog) == null ? void 0 : _b2.iconPlacement) || `left`;
  });
  function s2(t3) {
    let { onPositiveClick: n3 } = e3;
    n3 && n3(t3);
  }
  function c2(t3) {
    let { onNegativeClick: n3 } = e3;
    n3 && n3(t3);
  }
  function l2() {
    let { onClose: t3 } = e3;
    t3 && t3();
  }
  let u2 = f(`Dialog`, `-dialog`, Ft, Mt, e3, n2), p2 = N(() => {
    let { type: t3 } = e3, n3 = o2.value, { common: { cubicBezierEaseInOut: r3 }, self: { fontSize: i3, lineHeight: a3, border: s3, titleTextColor: c3, textColor: l3, color: f2, closeBorderRadius: p3, closeColorHover: m2, closeColorPressed: h2, closeIconColor: g3, closeIconColorHover: _2, closeIconColorPressed: v2, closeIconSize: y2, borderRadius: b2, titleFontWeight: x2, titleFontSize: S2, padding: C2, iconSize: te2, actionSpace: w2, contentMargin: T2, closeSize: ne2, [n3 === `top` ? `iconMarginIconTop` : `iconMargin`]: re2, [n3 === `top` ? `closeMarginIconTop` : `closeMargin`]: ie2, [d(`iconColor`, t3)]: ae2 } } = u2.value, E2 = ee(re2);
    return { "--n-font-size": i3, "--n-icon-color": ae2, "--n-bezier": r3, "--n-close-margin": ie2, "--n-icon-margin-top": E2.top, "--n-icon-margin-right": E2.right, "--n-icon-margin-bottom": E2.bottom, "--n-icon-margin-left": E2.left, "--n-icon-size": te2, "--n-close-size": ne2, "--n-close-icon-size": y2, "--n-close-border-radius": p3, "--n-close-color-hover": m2, "--n-close-color-pressed": h2, "--n-close-icon-color": g3, "--n-close-icon-color-hover": _2, "--n-close-icon-color-pressed": v2, "--n-color": f2, "--n-text-color": l3, "--n-border-radius": b2, "--n-padding": C2, "--n-line-height": a3, "--n-border": s3, "--n-content-margin": T2, "--n-title-font-size": S2, "--n-title-font-weight": x2, "--n-title-text-color": c3, "--n-action-space": w2 };
  }), g2 = r2 ? m(`dialog`, N(() => `${e3.type[0]}${o2.value[0]}`), p2, e3) : void 0;
  return { mergedClsPrefix: n2, rtlEnabled: a2, mergedIconPlacement: o2, mergedTheme: u2, handlePositiveClick: s2, handleNegativeClick: c2, handleCloseClick: l2, cssVars: r2 ? void 0 : p2, themeClass: g2 == null ? void 0 : g2.themeClass, onRender: g2 == null ? void 0 : g2.onRender };
}, render() {
  var e3;
  let { bordered: t2, mergedIconPlacement: n2, cssVars: r2, closable: i2, showIcon: a2, title: s2, content: l2, action: u2, negativeText: d2, positiveText: f2, positiveButtonProps: p2, negativeButtonProps: m2, handlePositiveClick: h2, handleNegativeClick: g2, mergedTheme: _2, loading: v2, type: y2, mergedClsPrefix: b2 } = this;
  (e3 = this.onRender) == null || e3.call(this);
  let x2 = a2 ? j(te, { clsPrefix: b2, class: `${b2}-dialog__icon` }, { default: () => T(this.$slots.icon, (e4) => e4 || (this.icon ? L(this.icon) : It[this.type]())) }) : null, S2 = T(this.$slots.action, (e4) => e4 || f2 || d2 || u2 ? j(`div`, { class: [`${b2}-dialog__action`, this.actionClass], style: this.actionStyle }, e4 || (u2 ? [L(u2)] : [this.negativeText && j(qe, Object.assign({ theme: _2.peers.Button, themeOverrides: _2.peerOverrides.Button, ghost: true, size: `small`, onClick: g2 }, m2), { default: () => L(this.negativeText) }), this.positiveText && j(qe, Object.assign({ theme: _2.peers.Button, themeOverrides: _2.peerOverrides.Button, size: `small`, type: y2 === `default` ? `primary` : y2, disabled: v2, loading: v2, onClick: h2 }, p2), { default: () => L(this.positiveText) })])) : null);
  return j(`div`, { class: [`${b2}-dialog`, this.themeClass, this.closable && `${b2}-dialog--closable`, `${b2}-dialog--icon-${n2}`, t2 && `${b2}-dialog--bordered`, this.rtlEnabled && `${b2}-dialog--rtl`], style: r2, role: `dialog` }, i2 ? T(this.$slots.close, (e4) => {
    let t3 = [`${b2}-dialog__close`, this.rtlEnabled && `${b2}-dialog--rtl`];
    return e4 ? j(`div`, { class: t3 }, e4) : j(c, { focusable: this.closeFocusable, clsPrefix: b2, class: t3, onClick: this.handleCloseClick });
  }) : null, a2 && n2 === `top` ? j(`div`, { class: `${b2}-dialog-icon-container` }, x2) : null, j(`div`, { class: [`${b2}-dialog__title`, this.titleClass], style: this.titleStyle }, a2 && n2 === `left` ? x2 : null, o(this.$slots.header, () => [L(s2)])), j(`div`, { class: [`${b2}-dialog__content`, S2 ? `` : `${b2}-dialog__content--last`, this.contentClass], style: this.contentStyle }, o(this.$slots.default, () => [L(l2)])), S2);
} });
function Rt(e3) {
  let { modalColor: t2, textColor2: n2, boxShadow3: r2 } = e3;
  return { color: t2, textColor: n2, boxShadow: r2 };
}
var zt = u({ name: `Modal`, common: b, peers: { Scrollbar: me, Dialog: Mt, Card: g }, self: Rt });
const Bt = r(`n-modal-provider`), Vt = r(`n-modal-api`), Ht = r(`n-modal-reactive-list`), Ut = `n-draggable`;
function Wt(e3, t2) {
  let n2, r2 = N(() => e3.value !== false), i2 = N(() => r2.value ? Ut : ``), a2 = N(() => {
    let t3 = e3.value;
    return t3 === true || t3 === false ? true : t3 ? t3.bounds !== `none` : true;
  });
  function o2(e4) {
    let r3 = e4.querySelector(`.${Ut}`);
    if (!r3 || !i2.value) return;
    let o3 = 0, s3 = 0, c2 = 0, l2 = 0, u2 = 0, d2 = 0, f2;
    function p2(t3) {
      t3.preventDefault(), f2 = t3;
      let { x: n3, y: r4, right: i3, bottom: a3 } = e4.getBoundingClientRect();
      s3 = n3, l2 = r4, o3 = window.innerWidth - i3, c2 = window.innerHeight - a3;
      let { left: p3, top: m3 } = e4.style;
      u2 = +m3.slice(0, -2), d2 = +p3.slice(0, -2);
    }
    function m2(t3) {
      if (!f2) return;
      let { clientX: n3, clientY: r4 } = f2, i3 = t3.clientX - n3, p3 = t3.clientY - r4;
      a2.value && (i3 > o3 ? i3 = o3 : -i3 > s3 && (i3 = -s3), p3 > c2 ? p3 = c2 : -p3 > l2 && (p3 = -l2));
      let m3 = i3 + d2, h3 = p3 + u2;
      e4.style.top = `${h3}px`, e4.style.left = `${m3}px`;
    }
    function h2() {
      f2 = void 0, t2.onEnd(e4);
    }
    O(`mousedown`, r3, p2), O(`mousemove`, window, m2), O(`mouseup`, window, h2), n2 = () => {
      D(`mousedown`, r3, p2), O(`mousemove`, window, m2), O(`mouseup`, window, h2);
    };
  }
  function s2() {
    n2 && (n2 = (n2(), void 0));
  }
  return Oe(s2), { stopDrag: s2, startDrag: o2, draggableRef: r2, draggableClassRef: i2 };
}
var Gt = Object.assign(Object.assign({}, S), Nt), Kt = n(Gt), qt = M({ name: `ModalBody`, inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, Gt), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(e3) {
  let t2 = k(null), n2 = k(null), r2 = k(e3.show), i2 = k(null), a2 = k(null), o2 = He(ne), s2 = null;
  De(A(e3, `show`), (e4) => {
    e4 && (s2 = o2.getMousePosition());
  }, { immediate: true });
  let { stopDrag: c2, startDrag: l2, draggableRef: u2, draggableClassRef: d2 } = Wt(A(e3, `draggable`), { onEnd: (e4) => {
    h2(e4);
  } }), f2 = N(() => Be([e3.titleClass, d2.value])), p2 = N(() => Be([e3.headerClass, d2.value]));
  De(A(e3, `show`), (e4) => {
    e4 && (r2.value = true);
  }), xt(N(() => e3.blockScroll && r2.value));
  function m2() {
    if (o2.transformOriginRef.value === `center`) return ``;
    let { value: e4 } = i2, { value: t3 } = a2;
    return e4 === null || t3 === null ? `` : n2.value ? `${e4}px ${t3 + n2.value.containerScrollTop}px` : ``;
  }
  function h2(e4) {
    if (o2.transformOriginRef.value === `center` || !s2 || !n2.value) return;
    let t3 = n2.value.containerScrollTop, { offsetLeft: r3, offsetTop: c3 } = e4, l3 = s2.y;
    i2.value = -(r3 - s2.x), a2.value = -(c3 - l3 - t3), e4.style.transformOrigin = m2();
  }
  function g2(e4) {
    ke(() => {
      h2(e4);
    });
  }
  function _2(t3) {
    t3.style.transformOrigin = m2(), e3.onBeforeLeave();
  }
  function v2(t3) {
    let n3 = t3;
    u2.value && l2(n3), e3.onAfterEnter && e3.onAfterEnter(n3);
  }
  function y2() {
    r2.value = false, i2.value = null, a2.value = null, c2(), e3.onAfterLeave();
  }
  function b2() {
    let { onClose: t3 } = e3;
    t3 && t3();
  }
  function x2() {
    e3.onNegativeClick();
  }
  function S2() {
    e3.onPositiveClick();
  }
  let C2 = k(null);
  return De(C2, (e4) => {
    e4 && ke(() => {
      let n3 = e4.el;
      n3 && t2.value !== n3 && (t2.value = n3);
    });
  }), Ce(Se, t2), Ce(re, null), Ce(se, null), { mergedTheme: o2.mergedThemeRef, appear: o2.appearRef, isMounted: o2.isMountedRef, mergedClsPrefix: o2.mergedClsPrefixRef, bodyRef: t2, scrollbarRef: n2, draggableClass: d2, displayed: r2, childNodeRef: C2, cardHeaderClass: p2, dialogTitleClass: f2, handlePositiveClick: S2, handleNegativeClick: x2, handleCloseClick: b2, handleAfterEnter: v2, handleAfterLeave: y2, handleBeforeLeave: _2, handleEnter: g2 };
}, render() {
  let { $slots: t2, $attrs: n2, handleEnter: r2, handleAfterEnter: i2, handleAfterLeave: a2, handleBeforeLeave: o2, preset: s2, mergedClsPrefix: c2 } = this, l2 = null;
  if (!s2) {
    if (l2 = fe(`default`, t2.default, { draggableClass: this.draggableClass }), !l2) {
      e(`modal`, `default slot is empty`);
      return;
    }
    l2 = Ne(l2), l2.props = We({ class: `${c2}-modal` }, n2, l2.props || {});
  }
  return this.displayDirective === `show` || this.displayed || this.show ? we(j(`div`, { role: `none`, class: [`${c2}-modal-body-wrapper`, this.maskHidden && `${c2}-modal-body-wrapper--mask-hidden`] }, j(_e, { ref: `scrollbarRef`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${c2}-modal-scroll-content` }, { default: () => {
    var _a2;
    return [(_a2 = this.renderMask) == null ? void 0 : _a2.call(this), j(be, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => j(Ee, { name: `fade-in-scale-up-transition`, appear: this.appear ?? this.isMounted, onEnter: r2, onAfterEnter: i2, onAfterLeave: a2, onBeforeLeave: o2 }, { default: () => {
      let e3 = [[je, this.show]], { onClickoutside: n3 } = this;
      return n3 && e3.push([E, this.onClickoutside, void 0, { capture: true }]), we(this.preset === `confirm` || this.preset === `dialog` ? j(Lt, Object.assign({}, this.$attrs, { class: [`${c2}-modal`, this.$attrs.class], ref: `bodyRef`, theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, xe(this.$props, Pt), { titleClass: this.dialogTitleClass, "aria-modal": `true` }), t2) : this.preset === `card` ? j(C, Object.assign({}, this.$attrs, { ref: `bodyRef`, class: [`${c2}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, xe(this.$props, y), { headerClass: this.cardHeaderClass, "aria-modal": `true`, role: `dialog` }), t2) : this.childNodeRef = l2, e3);
    } }) })];
  } })), [[je, this.displayDirective === `if` || this.displayed || this.show]]) : null;
} }), Jt = s([x(`modal-container`, `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), x(`modal-mask`, `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [de({ enterDuration: `.25s`, leaveDuration: `.25s`, enterCubicBezier: `var(--n-bezier-ease-out)`, leaveCubicBezier: `var(--n-bezier-ease-out)` })]), x(`modal-body-wrapper`, `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [x(`modal-scroll-content`, `
 min-height: 100%;
 display: flex;
 position: relative;
 `), v(`mask-hidden`, `pointer-events: none;`, [x(`modal-scroll-content`, [s(`> *`, `
 pointer-events: all;
 `)])])]), x(`modal`, `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [Ge({ duration: `.25s`, enterScale: `.5` }), s(`.${Ut}`, `
 cursor: move;
 user-select: none;
 `)])]);
const Yt = Object.assign(Object.assign(Object.assign(Object.assign({}, f.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: `if` }, transformOrigin: { type: String, default: `mouse` }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), Gt), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } });
var Xt = M({ name: `Modal`, inheritAttrs: false, props: Yt, slots: Object, setup(e3) {
  let n2 = k(null), { mergedClsPrefixRef: r2, namespaceRef: i2, inlineThemeDisabled: a2 } = w(e3), o2 = f(`Modal`, `-modal`, Jt, zt, e3, r2), s2 = dt(64), c2 = ot(), l2 = ve(), u2 = e3.internalDialog ? He(Dt, null) : null, d2 = e3.internalModal ? He(ce, null) : null, p2 = ht();
  function h2(n3) {
    let { onUpdateShow: r3, "onUpdate:show": i3, onHide: a3 } = e3;
    r3 && t(r3, n3), i3 && t(i3, n3), a3 && !n3 && a3(n3);
  }
  function g2() {
    let { onClose: t2 } = e3;
    t2 ? Promise.resolve(t2()).then((e4) => {
      e4 !== false && h2(false);
    }) : h2(false);
  }
  function _2() {
    let { onPositiveClick: t2 } = e3;
    t2 ? Promise.resolve(t2()).then((e4) => {
      e4 !== false && h2(false);
    }) : h2(false);
  }
  function v2() {
    let { onNegativeClick: t2 } = e3;
    t2 ? Promise.resolve(t2()).then((e4) => {
      e4 !== false && h2(false);
    }) : h2(false);
  }
  function y2() {
    let { onBeforeLeave: n3, onBeforeHide: r3 } = e3;
    n3 && t(n3), r3 && r3();
  }
  function b2() {
    let { onAfterLeave: n3, onAfterHide: r3 } = e3;
    n3 && t(n3), r3 && r3();
  }
  function x2(t2) {
    var _a2;
    let { onMaskClick: r3 } = e3;
    r3 && r3(t2), e3.maskClosable && ((_a2 = n2.value) == null ? void 0 : _a2.contains(ye(t2))) && h2(false);
  }
  function S2(t2) {
    var n3;
    (n3 = e3.onEsc) == null || n3.call(e3), e3.show && e3.closeOnEsc && Ke(t2) && (p2.value || h2(false));
  }
  Ce(ne, { getMousePosition: () => {
    let e4 = u2 || d2;
    if (e4) {
      let { clickedRef: t2, clickedPositionRef: n3 } = e4;
      if (t2.value && n3.value) return n3.value;
    }
    return s2.value ? c2.value : null;
  }, mergedClsPrefixRef: r2, mergedThemeRef: o2, isMountedRef: l2, appearRef: A(e3, `internalAppear`), transformOriginRef: A(e3, `transformOrigin`) });
  let C2 = N(() => {
    let { common: { cubicBezierEaseOut: e4 }, self: { boxShadow: t2, color: n3, textColor: r3 } } = o2.value;
    return { "--n-bezier-ease-out": e4, "--n-box-shadow": t2, "--n-color": n3, "--n-text-color": r3 };
  }), ee2 = a2 ? m(`theme-class`, void 0, C2, e3) : void 0;
  return { mergedClsPrefix: r2, namespace: i2, isMounted: l2, containerRef: n2, presetProps: N(() => xe(e3, Kt)), handleEsc: S2, handleAfterLeave: b2, handleClickoutside: x2, handleBeforeLeave: y2, doUpdateShow: h2, handleNegativeClick: v2, handlePositiveClick: _2, handleCloseClick: g2, cssVars: a2 ? void 0 : C2, themeClass: ee2 == null ? void 0 : ee2.themeClass, onRender: ee2 == null ? void 0 : ee2.onRender };
}, render() {
  let { mergedClsPrefix: e3 } = this;
  return j(oe, { to: this.to, show: this.show }, { default: () => {
    var t2;
    (t2 = this.onRender) == null || t2.call(this);
    let { showMask: n2 } = this;
    return we(j(`div`, { role: `none`, ref: `containerRef`, class: [`${e3}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, j(qt, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: `bodyWrapper`, displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !n2 }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: n2 ? void 0 : this.handleClickoutside, renderMask: n2 ? () => j(Ee, { name: `fade-in-transition`, key: `mask`, appear: this.internalAppear ?? this.isMounted }, { default: () => this.show ? j(`div`, { "aria-hidden": true, ref: `containerRef`, class: `${e3}-modal-mask`, onClick: this.handleClickoutside }) : null }) : void 0 }), this.$slots)), [[he, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
const Zt = r(`n-message-api`), Qt = r(`n-message-provider`);
function $t(e3) {
  let { modalColor: t2, textColor1: n2, textColor2: r2, boxShadow3: i2, lineHeight: a2, fontWeightStrong: o2, dividerColor: s2, closeColorHover: c2, closeColorPressed: l2, closeIconColor: u2, closeIconColorHover: d2, closeIconColorPressed: f2, borderRadius: p2, primaryColorHover: m2 } = e3;
  return { bodyPadding: `16px 24px`, borderRadius: p2, headerPadding: `16px 24px`, footerPadding: `16px 24px`, color: t2, textColor: r2, titleTextColor: n2, titleFontSize: `18px`, titleFontWeight: o2, boxShadow: i2, lineHeight: a2, headerBorderBottom: `1px solid ${s2}`, footerBorderTop: `1px solid ${s2}`, closeIconColor: u2, closeIconColorHover: d2, closeIconColorPressed: f2, closeSize: `22px`, closeIconSize: `18px`, closeColorHover: c2, closeColorPressed: l2, closeBorderRadius: p2, resizableTriggerColorHover: m2 };
}
var en = u({ name: `Drawer`, common: b, peers: { Scrollbar: me }, self: $t }), tn = u({ name: `DynamicTags`, common: b, peers: { Input: wt, Button: R, Tag: ge, Space: et }, self() {
  return { inputWidth: `64px` };
} }), nn = { gapSmall: `4px 8px`, gapMedium: `8px 12px`, gapLarge: `12px 16px` };
function rn() {
  return nn;
}
var an = { name: `Flex`, self: rn }, on = { feedbackPadding: `4px 0 0 2px`, feedbackHeightSmall: `24px`, feedbackHeightMedium: `24px`, feedbackHeightLarge: `26px`, feedbackFontSizeSmall: `13px`, feedbackFontSizeMedium: `14px`, feedbackFontSizeLarge: `14px`, labelFontSizeLeftSmall: `14px`, labelFontSizeLeftMedium: `14px`, labelFontSizeLeftLarge: `15px`, labelFontSizeTopSmall: `13px`, labelFontSizeTopMedium: `14px`, labelFontSizeTopLarge: `14px`, labelHeightSmall: `24px`, labelHeightMedium: `26px`, labelHeightLarge: `28px`, labelPaddingVertical: `0 0 6px 2px`, labelPaddingHorizontal: `0 12px 0 0`, labelTextAlignVertical: `left`, labelTextAlignHorizontal: `right`, labelFontWeight: `400` };
function sn(e3) {
  let { heightSmall: t2, heightMedium: n2, heightLarge: r2, textColor1: i2, errorColor: a2, warningColor: o2, lineHeight: s2, textColor3: c2 } = e3;
  return Object.assign(Object.assign({}, on), { blankHeightSmall: t2, blankHeightMedium: n2, blankHeightLarge: r2, lineHeight: s2, labelTextColor: i2, asteriskColor: a2, feedbackTextColorError: a2, feedbackTextColorWarning: o2, feedbackTextColor: c2 });
}
var cn = { name: `Form`, common: b, self: sn };
function ln(e3) {
  let { textColorDisabled: t2 } = e3;
  return { iconColorDisabled: t2 };
}
var un = u({ name: `InputNumber`, common: b, peers: { Button: R, Input: wt }, self: ln });
function dn(e3) {
  let { baseColor: t2, textColor2: n2, bodyColor: r2, cardColor: i2, dividerColor: o2, actionColor: s2, scrollbarColor: c2, scrollbarColorHover: l2, invertedColor: u2 } = e3;
  return { textColor: n2, textColorInverted: `#FFF`, color: r2, colorEmbedded: s2, headerColor: i2, headerColorInverted: u2, footerColor: s2, footerColorInverted: u2, headerBorderColor: o2, headerBorderColorInverted: u2, footerBorderColor: o2, footerBorderColorInverted: u2, siderBorderColor: o2, siderBorderColorInverted: u2, siderColor: i2, siderColorInverted: u2, siderToggleButtonBorder: `1px solid ${o2}`, siderToggleButtonColor: t2, siderToggleButtonIconColor: n2, siderToggleButtonIconColorInverted: n2, siderToggleBarColor: a(r2, c2), siderToggleBarColorHover: a(r2, l2), __invertScrollbar: `true` };
}
var fn = u({ name: `Layout`, common: b, peers: { Scrollbar: me }, self: dn }), pn = { iconSize: `22px` };
function mn(e3) {
  let { fontSize: t2, warningColor: n2 } = e3;
  return Object.assign(Object.assign({}, pn), { fontSize: t2, iconColor: n2 });
}
var hn = u({ name: `Popconfirm`, common: b, peers: { Button: R, Popover: pe }, self: mn }), gn = { tabFontSizeSmall: `14px`, tabFontSizeMedium: `14px`, tabFontSizeLarge: `16px`, tabGapSmallLine: `36px`, tabGapMediumLine: `36px`, tabGapLargeLine: `36px`, tabGapSmallLineVertical: `8px`, tabGapMediumLineVertical: `8px`, tabGapLargeLineVertical: `8px`, tabPaddingSmallLine: `6px 0`, tabPaddingMediumLine: `10px 0`, tabPaddingLargeLine: `14px 0`, tabPaddingVerticalSmallLine: `6px 12px`, tabPaddingVerticalMediumLine: `8px 16px`, tabPaddingVerticalLargeLine: `10px 20px`, tabGapSmallBar: `36px`, tabGapMediumBar: `36px`, tabGapLargeBar: `36px`, tabGapSmallBarVertical: `8px`, tabGapMediumBarVertical: `8px`, tabGapLargeBarVertical: `8px`, tabPaddingSmallBar: `4px 0`, tabPaddingMediumBar: `6px 0`, tabPaddingLargeBar: `10px 0`, tabPaddingVerticalSmallBar: `6px 12px`, tabPaddingVerticalMediumBar: `8px 16px`, tabPaddingVerticalLargeBar: `10px 20px`, tabGapSmallCard: `4px`, tabGapMediumCard: `4px`, tabGapLargeCard: `4px`, tabGapSmallCardVertical: `4px`, tabGapMediumCardVertical: `4px`, tabGapLargeCardVertical: `4px`, tabPaddingSmallCard: `8px 16px`, tabPaddingMediumCard: `10px 20px`, tabPaddingLargeCard: `12px 24px`, tabPaddingSmallSegment: `4px 0`, tabPaddingMediumSegment: `6px 0`, tabPaddingLargeSegment: `8px 0`, tabPaddingVerticalLargeSegment: `0 8px`, tabPaddingVerticalSmallCard: `8px 12px`, tabPaddingVerticalMediumCard: `10px 16px`, tabPaddingVerticalLargeCard: `12px 20px`, tabPaddingVerticalSmallSegment: `0 4px`, tabPaddingVerticalMediumSegment: `0 6px`, tabGapSmallSegment: `0`, tabGapMediumSegment: `0`, tabGapLargeSegment: `0`, tabGapSmallSegmentVertical: `0`, tabGapMediumSegmentVertical: `0`, tabGapLargeSegmentVertical: `0`, panePaddingSmall: `8px 0 0 0`, panePaddingMedium: `12px 0 0 0`, panePaddingLarge: `16px 0 0 0`, closeSize: `18px`, closeIconSize: `14px` };
function _n(e3) {
  let { textColor2: t2, primaryColor: n2, textColorDisabled: r2, closeIconColor: i2, closeIconColorHover: a2, closeIconColorPressed: o2, closeColorHover: s2, closeColorPressed: c2, tabColor: l2, baseColor: u2, dividerColor: d2, fontWeight: f2, textColor1: p2, borderRadius: m2, fontSize: h2, fontWeightStrong: g2 } = e3;
  return Object.assign(Object.assign({}, gn), { colorSegment: l2, tabFontSizeCard: h2, tabTextColorLine: p2, tabTextColorActiveLine: n2, tabTextColorHoverLine: n2, tabTextColorDisabledLine: r2, tabTextColorSegment: p2, tabTextColorActiveSegment: t2, tabTextColorHoverSegment: t2, tabTextColorDisabledSegment: r2, tabTextColorBar: p2, tabTextColorActiveBar: n2, tabTextColorHoverBar: n2, tabTextColorDisabledBar: r2, tabTextColorCard: p2, tabTextColorHoverCard: p2, tabTextColorActiveCard: n2, tabTextColorDisabledCard: r2, barColor: n2, closeIconColor: i2, closeIconColorHover: a2, closeIconColorPressed: o2, closeColorHover: s2, closeColorPressed: c2, closeBorderRadius: m2, tabColor: l2, tabColorSegment: u2, tabBorderColor: d2, tabFontWeightActive: f2, tabFontWeight: f2, tabBorderRadius: m2, paneTextColor: t2, fontWeightStrong: g2 });
}
var vn = { name: `Tabs`, common: b, self: _n };
function yn(e3) {
  let { primaryColorHover: t2, borderColor: n2 } = e3;
  return { resizableTriggerColorHover: t2, resizableTriggerColor: n2 };
}
var bn = { name: `Split`, common: b, self: yn }, xn = x(`text`, `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [v(`strong`, `
 font-weight: var(--n-font-weight-strong);
 `), v(`italic`, { fontStyle: `italic` }), v(`underline`, { textDecoration: `underline` }), v(`code`, `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]), Sn = M({ name: `Text`, props: Object.assign(Object.assign({}, f.props), { code: Boolean, type: { type: String, default: `default` }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), setup(e3) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = w(e3), r2 = f(`Typography`, `-text`, xn, $e, e3, t2), i2 = N(() => {
    let { depth: t3, type: n3 } = e3, i3 = n3 === `default` ? t3 === void 0 ? `textColor` : `textColor${t3}Depth` : d(`textColor`, n3), { common: { fontWeightStrong: a3, fontFamilyMono: o2, cubicBezierEaseInOut: s2 }, self: { codeTextColor: c2, codeBorderRadius: l2, codeColor: u2, codeBorder: f2, [i3]: p2 } } = r2.value;
    return { "--n-bezier": s2, "--n-text-color": p2, "--n-font-weight-strong": a3, "--n-font-famliy-mono": o2, "--n-code-border-radius": l2, "--n-code-text-color": c2, "--n-code-color": u2, "--n-code-border": f2 };
  }), a2 = n2 ? m(`text`, N(() => `${e3.type[0]}${e3.depth || ``}`), i2, e3) : void 0;
  return { mergedClsPrefix: t2, compitableTag: ae(e3, [`as`, `tag`]), cssVars: n2 ? void 0 : i2, themeClass: a2 == null ? void 0 : a2.themeClass, onRender: a2 == null ? void 0 : a2.onRender };
}, render() {
  var _a2;
  var e3, t2;
  let { mergedClsPrefix: n2 } = this;
  (e3 = this.onRender) == null || e3.call(this);
  let r2 = [`${n2}-text`, this.themeClass, { [`${n2}-text--code`]: this.code, [`${n2}-text--delete`]: this.delete, [`${n2}-text--strong`]: this.strong, [`${n2}-text--italic`]: this.italic, [`${n2}-text--underline`]: this.underline }], i2 = (_a2 = (t2 = this.$slots).default) == null ? void 0 : _a2.call(t2);
  return this.code ? j(`code`, { class: r2, style: this.cssVars }, this.delete ? j(`del`, null, i2) : i2) : this.delete ? j(`del`, { class: r2, style: this.cssVars }, i2) : j(this.compitableTag || `span`, { class: r2, style: this.cssVars }, i2);
} }), W = [];
for (let e3 = 0; e3 < 256; ++e3) W.push((e3 + 256).toString(16).slice(1));
function Cn(e3, t2 = 0) {
  return (W[e3[t2 + 0]] + W[e3[t2 + 1]] + W[e3[t2 + 2]] + W[e3[t2 + 3]] + `-` + W[e3[t2 + 4]] + W[e3[t2 + 5]] + `-` + W[e3[t2 + 6]] + W[e3[t2 + 7]] + `-` + W[e3[t2 + 8]] + W[e3[t2 + 9]] + `-` + W[e3[t2 + 10]] + W[e3[t2 + 11]] + W[e3[t2 + 12]] + W[e3[t2 + 13]] + W[e3[t2 + 14]] + W[e3[t2 + 15]]).toLowerCase();
}
var wn, Tn = new Uint8Array(16);
function En() {
  if (!wn) {
    if (typeof crypto > `u` || !crypto.getRandomValues) throw Error(`crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`);
    wn = crypto.getRandomValues.bind(crypto);
  }
  return wn(Tn);
}
var Dn = { randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function On(e3, t2, n2) {
  var _a2;
  if (Dn.randomUUID && !t2 && !e3) return Dn.randomUUID();
  e3 || (e3 = {});
  let r2 = e3.random ?? ((_a2 = e3.rng) == null ? void 0 : _a2.call(e3)) ?? En();
  if (r2.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (r2[6] = r2[6] & 15 | 64, r2[8] = r2[8] & 63 | 128, t2) {
    if (n2 || (n2 = 0), n2 < 0 || n2 + 16 > t2.length) throw RangeError(`UUID byte range ${n2}:${n2 + 15} is out of buffer bounds`);
    for (let e4 = 0; e4 < 16; ++e4) t2[n2 + e4] = r2[e4];
    return t2;
  }
  return Cn(r2);
}
var G = On;
function K() {
  return { name: `Untitled`, description: `A new geographic item`, creation_timestamp: Date.now(), modification_timestamp: Date.now(), created_by: `anonymous`, modified_by: `anonymous`, tags: [] };
}
function kn() {
  return { ...K(), version: 1, signature: void 0 };
}
var q = class e2 {
  constructor(e3 = G(), t2, n2, r2) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routes");
    __publicField(this, "drafts");
    this.id = e3, this.routes = t2 || { id: G(), meta: K(), routes: [] }, this.drafts = n2 || { id: G(), meta: K(), drafts: [] }, this.meta = { ...kn(), ...r2 };
  }
  toStorage() {
    return { id: this.id, meta: this.meta, routes: this.routes, drafts: this.drafts };
  }
  static fromStorage(t2) {
    return new e2(t2.id, t2.routes, t2.drafts, t2.meta);
  }
  clone() {
    return e2.fromStorage(this.toStorage());
  }
  updateName(e3) {
    this.meta.name = e3, this.meta.modification_timestamp = Date.now();
  }
  updateDescription(e3) {
    this.meta.description = e3, this.meta.modification_timestamp = Date.now();
  }
  addTag(e3) {
    this.meta.tags.includes(e3) || (this.meta.tags.push(e3), this.meta.modification_timestamp = Date.now());
  }
  removeTag(e3) {
    let t2 = this.meta.tags.indexOf(e3);
    t2 > -1 && (this.meta.tags.splice(t2, 1), this.meta.modification_timestamp = Date.now());
  }
}, An = class {
  constructor(e3 = [], t2 = G(), n2 = K()) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routesInternal");
    this.id = t2, this.meta = n2 ?? K(), this.routesInternal = e3;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = K()), this.meta.name;
  }
  set name(e3) {
    (this.meta === null || this.meta === void 0) && (this.meta = K()), this.meta.name = e3;
  }
  get routes() {
    return F(this.routesInternal);
  }
  set routes(e3) {
    this.routesInternal = F(e3);
  }
  findRoute(e3) {
    return this.routesInternal.find((t2) => t2.id === e3);
  }
  existRoute(e3) {
    return this.routesInternal.some((t2) => t2.id === e3);
  }
  addRoute(e3) {
    if (this.existRoute(e3.id)) throw Error(`[CartoSketch.Route] Route ${e3.id} already exist`);
    this.routesInternal.push(F(e3)), this.updateModificationTime();
  }
  updateRoute(e3) {
    let t2 = this.routesInternal.findIndex((t3) => t3.id === e3.id);
    if (t2 === -1) throw Error(`[CartoSketch.Route] Route ${e3.id} not found`);
    this.routesInternal[t2] = F(e3), this.updateModificationTime();
  }
  removeRoute(e3) {
    let t2 = this.routesInternal.findIndex((t3) => t3.id === e3);
    t2 !== -1 && (this.routesInternal.splice(t2, 1), this.updateModificationTime());
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: `FeatureCollection`, features: this.routesInternal.map((e3) => e3.exportAsGeoJSON()), properties: this.meta };
  }
  exportToStorage() {
    return Object.freeze({ id: this.id, meta: this.meta, routes: this.routesInternal.map((e3) => e3.exportToStorage()) });
  }
}, jn = class {
  constructor(e3 = G(), t2 = [], n2 = {}, r2) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "properties");
    __publicField(this, "points");
    this.id = e3, this.meta = { ...K(), record_timespan: 0, ...r2 }, this.properties = n2, this.points = t2;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = K()), this.meta.name;
  }
  set name(e3) {
    (this.meta === null || this.meta === void 0) && (this.meta = K()), this.meta.name = e3;
  }
  get distance() {
    return this.meta.distance ?? 0;
  }
  set distance(e3) {
    this.meta.distance = e3;
  }
  get recordTimespan() {
    return this.meta.record_timespan ?? 0;
  }
  set recordTimespan(e3) {
    this.meta.record_timespan = e3;
  }
  setPoints(e3) {
    this.points = F(e3), this.updateModificationTime();
  }
  appendPoint(e3) {
    this.points.push(F(e3)), this.updateModificationTime();
  }
  getPoints() {
    return F(this.points);
  }
  setProperties(e3) {
    let t2 = F(e3);
    Object.assign(this.properties, t2), this.updateModificationTime();
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: `Feature`, properties: { ...this.properties, ...this.meta, description: JSON.stringify({ name: this.meta.name, id: this.id }) }, geometry: { type: `LineString`, coordinates: this.points.map((e3) => [e3.longitude, e3.latitude]) } };
  }
  exportToStorage() {
    return F({ id: this.id, meta: this.meta, properties: this.properties, points: this.points });
  }
};
let J = (function(e3) {
  return e3.MIGRATION_FAILED = `MIGRATION_FAILED`, e3.INVALID_VERSION = `INVALID_VERSION`, e3.UNSUPPORTED_VERSION = `UNSUPPORTED_VERSION`, e3.ROLLBACK_FAILED = `ROLLBACK_FAILED`, e3.VALIDATION_FAILED = `VALIDATION_FAILED`, e3.STRATEGY_NOT_FOUND = `STRATEGY_NOT_FOUND`, e3.DATA_CORRUPTION = `DATA_CORRUPTION`, e3;
})({});
var Y = class extends Le {
  constructor(e3, t2 = J.MIGRATION_FAILED, n2) {
    super(e3, n2);
    __publicField(this, "code");
    __publicField(this, "domain", Fe.GENERIC);
    this.code = t2;
  }
}, X = class extends Y {
  constructor(e3, t2 = J.INVALID_VERSION, n2, r2, i2) {
    super(e3, t2, i2), this.currentVersion = n2, this.targetVersion = r2;
  }
}, Z = class extends Y {
  constructor(e3, t2, n2, r2) {
    super(e3, J.VALIDATION_FAILED, r2), this.field = t2, this.value = n2;
  }
}, Mn = class extends Y {
  constructor(e3, t2, n2) {
    super(e3, J.DATA_CORRUPTION, n2), this.corruptedData = t2;
  }
}, Nn = class extends Y {
  constructor(e3, t2, n2, r2) {
    super(e3, J.ROLLBACK_FAILED, r2), this.originalError = t2, this.rollbackError = n2;
  }
}, Q = (_a = class {
  static getCurrentVersion() {
    return this.CURRENT_VERSION;
  }
  static getMinimumSupportedVersion() {
    return this.MIN_SUPPORTED_VERSION;
  }
  static extractVersion(e3) {
    try {
      if (typeof e3 == `object` && e3 && `version` in e3) {
        let t2 = e3.version;
        if (typeof t2 == `number` && t2 >= 0) return I(t2);
      }
      if (this.isRouteCollectionFormat(e3)) return I(0);
      if (this.isSketchArrayFormat(e3)) return I(1);
      throw Error(`Unable to determine data version`);
    } catch (e4) {
      return P(e4 instanceof X ? e4 : new X(`Failed to extract version from data: ${String(e4)}`, J.INVALID_VERSION, void 0, void 0, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  static isRouteCollectionFormat(e3) {
    return typeof e3 == `object` && !!e3 && `routes` in e3 && !(`sketches` in e3) && Array.isArray(e3.routes);
  }
  static isSketchArrayFormat(e3) {
    return Array.isArray(e3) && e3.length > 0 && this.isSketchObject(e3[0]);
  }
  static isSketchObject(e3) {
    return typeof e3 == `object` && !!e3 && `id` in e3 && `meta` in e3 && `routes` in e3 && `drafts` in e3;
  }
  static validateVersion(e3) {
    try {
      if (e3 < this.MIN_SUPPORTED_VERSION) throw new X(`Version ${e3} is below minimum supported version ${this.MIN_SUPPORTED_VERSION}`, J.UNSUPPORTED_VERSION, e3);
      if (e3 > this.CURRENT_VERSION) throw new X(`Version ${e3} is above current version ${this.CURRENT_VERSION}`, J.UNSUPPORTED_VERSION, e3, this.CURRENT_VERSION);
      return I(void 0);
    } catch (t2) {
      return P(t2 instanceof X ? t2 : new X(`Version validation failed: ${String(t2)}`, J.INVALID_VERSION, e3, void 0, t2 instanceof Error ? t2 : Error(String(t2))));
    }
  }
  static addVersionMetadata(e3, t2 = this.CURRENT_VERSION) {
    return { ...e3, [this.VERSION_KEY]: { version: t2, timestamp: Date.now(), description: `Version ${t2} data format` } };
  }
  static extractVersionMetadata(e3) {
    try {
      if (typeof e3 == `object` && e3 && this.VERSION_KEY in e3) {
        let t2 = e3[this.VERSION_KEY];
        if (this.isValidVersionInfo(t2)) return I(t2);
      }
      return I(null);
    } catch (e4) {
      return P(e4 instanceof X ? e4 : new X(`Failed to extract version metadata: ${String(e4)}`, J.INVALID_VERSION, void 0, void 0, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  static isValidVersionInfo(e3) {
    return typeof e3 == `object` && !!e3 && `version` in e3 && `timestamp` in e3 && typeof e3.version == `number` && typeof e3.timestamp == `number`;
  }
  static determineMigrationPath(e3, t2) {
    try {
      let n2 = this.validateVersion(e3);
      if (n2.isErr()) throw n2.error;
      let r2 = this.validateVersion(t2);
      if (r2.isErr()) throw r2.error;
      if (e3 === t2) return I([]);
      let i2 = [], a2 = e3 < t2 ? 1 : -1;
      for (let n3 = e3; n3 !== t2; n3 += a2) i2.push(n3 + a2);
      return I(i2);
    } catch (n2) {
      return P(n2 instanceof X ? n2 : new X(`Failed to determine migration path: ${String(n2)}`, J.INVALID_VERSION, e3, t2, n2 instanceof Error ? n2 : Error(String(n2))));
    }
  }
  static isMigrationNeeded(e3) {
    return this.extractVersion(e3).map((e4) => e4 !== this.CURRENT_VERSION);
  }
}, __publicField(_a, "CURRENT_VERSION", 1), __publicField(_a, "VERSION_KEY", `_data_version`), __publicField(_a, "MIN_SUPPORTED_VERSION", 0), _a), $ = class {
  static validateSketchData(e3) {
    try {
      if (!e3 || typeof e3 != `object`) throw new Z(`Sketch data must be an object`, `data`, e3);
      let t2 = e3;
      for (let e4 of [`id`, `meta`, `routes`, `drafts`]) if (!(e4 in t2)) throw new Z(`Missing required field: ${e4}`, e4, t2[e4]);
      if (typeof t2.id != `string` || !t2.id) throw new Z(`Sketch ID must be a non-empty string`, `id`, t2.id);
      if (!t2.meta || typeof t2.meta != `object`) throw new Z(`Sketch meta must be an object`, `meta`, t2.meta);
      let n2 = this.validateRouteCollectionData(t2.routes);
      if (n2.isErr()) throw n2.error;
      if (!t2.drafts || typeof t2.drafts != `object`) throw new Z(`Sketch drafts must be an object`, `drafts`, t2.drafts);
      return I(t2);
    } catch (t2) {
      return t2 instanceof Z ? P(t2) : P(new Z(`Unexpected validation error: ${String(t2)}`, void 0, e3, t2 instanceof Error ? t2 : Error(String(t2))));
    }
  }
  static validateRouteCollectionData(e3) {
    try {
      if (!e3 || typeof e3 != `object`) throw new Z(`Route collection data must be an object`, `data`, e3);
      let t2 = e3;
      for (let e4 of [`id`, `meta`, `routes`]) if (!(e4 in t2)) throw new Z(`Missing required field: ${e4}`, e4, t2[e4]);
      if (typeof t2.id != `string` || !t2.id) throw new Z(`Route collection ID must be a non-empty string`, `id`, t2.id);
      if (!t2.meta || typeof t2.meta != `object`) throw new Z(`Route collection meta must be an object`, `meta`, t2.meta);
      if (!Array.isArray(t2.routes)) throw new Z(`Routes must be an array`, `routes`, t2.routes);
      for (let e4 = 0; e4 < t2.routes.length; e4++) {
        let n2 = t2.routes[e4], r2 = this.validateRouteItem(n2);
        if (r2.isErr()) throw new Z(`Invalid route at index ${e4}: ${r2.error.message}`, `routes[${e4}]`, n2, r2.error);
      }
      return I(t2);
    } catch (t2) {
      return t2 instanceof Z ? P(t2) : P(new Z(`Unexpected validation error: ${String(t2)}`, void 0, e3, t2 instanceof Error ? t2 : Error(String(t2))));
    }
  }
  static validateRouteItem(e3) {
    try {
      if (!e3 || typeof e3 != `object`) throw new Z(`Route item must be an object`, `data`, e3);
      let t2 = e3;
      for (let e4 of [`id`, `meta`, `properties`, `points`]) if (!(e4 in t2)) throw new Z(`Missing required field: ${e4}`, e4, t2[e4]);
      if (typeof t2.id != `string` || !t2.id) throw new Z(`Route item ID must be a non-empty string`, `id`, t2.id);
      if (!Array.isArray(t2.points)) throw new Z(`Route points must be an array`, `points`, t2.points);
      for (let e4 = 0; e4 < t2.points.length; e4++) {
        let n2 = t2.points[e4];
        if (!n2 || typeof n2 != `object`) throw new Z(`Route point at index ${e4} must be an object`, `points[${e4}]`, n2);
        let r2 = n2;
        if (typeof r2.latitude != `number` || typeof r2.longitude != `number`) throw new Z(`Route point at index ${e4} must have numeric latitude and longitude`, `points[${e4}]`, n2);
      }
      return I(t2);
    } catch (t2) {
      return t2 instanceof Z ? P(t2) : P(new Z(`Unexpected validation error: ${String(t2)}`, void 0, e3, t2 instanceof Error ? t2 : Error(String(t2))));
    }
  }
  static validateSketchArray(e3) {
    try {
      if (!Array.isArray(e3)) throw new Z(`Sketch array must be an array`, `data`, e3);
      if (e3.length === 0) throw new Z(`Sketch array cannot be empty`, `data.length`, e3.length);
      for (let t2 = 0; t2 < e3.length; t2++) {
        let n2 = e3[t2], r2 = this.validateSketchData(n2);
        if (r2.isErr()) throw new Z(`Invalid sketch at index ${t2}: ${r2.error.message}`, `[${t2}]`, n2, r2.error);
      }
      return I(e3);
    } catch (t2) {
      return t2 instanceof Z ? P(t2) : P(new Z(`Unexpected validation error: ${String(t2)}`, void 0, e3, t2 instanceof Error ? t2 : Error(String(t2))));
    }
  }
  static validateData(e3, t2) {
    switch (t2) {
      case `sketch`:
        return this.validateSketchData(e3);
      case `route-collection`:
        return this.validateRouteCollectionData(e3);
      case `sketch-array`:
        return this.validateSketchArray(e3);
      default:
        return P(new Z(`Unknown expected format: ${String(t2)}`, `expectedFormat`, t2));
    }
  }
  static checkDataIntegrity(e3, t2) {
    try {
      let n2 = this.validateData(e3, t2);
      return n2.isErr() ? P(new Mn(`Data validation failed: ${n2.error.message}`, e3, n2.error)) : I({ isValid: true, errors: [], warnings: [] });
    } catch (t3) {
      return P(new Mn(`Data integrity check failed: ${String(t3)}`, e3, t3 instanceof Error ? t3 : Error(String(t3))));
    }
  }
}, Pn = class {
  constructor() {
    __publicField(this, "fromVersion", 0);
    __publicField(this, "toVersion", 1);
    __publicField(this, "name", `route-collection-to-sketch`);
  }
  migrate(e3) {
    try {
      let t2 = $.validateRouteCollectionData(e3);
      if (t2.isErr()) return P(new Y(`Invalid route collection data: ${t2.error.message}`, J.VALIDATION_FAILED, t2.error));
      let n2 = t2.value, r2 = new q();
      return r2.meta.name = n2.meta.name || `Migrated Routes`, r2.meta.description = n2.meta.description || `Migrated from route collection`, r2.meta.creation_timestamp = n2.meta.creation_timestamp, r2.meta.modification_timestamp = Date.now(), r2.routes = n2, I([r2.toStorage()]);
    } catch (e4) {
      return P(new Y(`Route collection to sketch migration failed: ${String(e4)}`, J.MIGRATION_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  rollback(e3) {
    try {
      let t2 = $.validateSketchArray(e3);
      if (t2.isErr()) return P(new Y(`Invalid sketch array data for rollback: ${t2.error.message}`, J.VALIDATION_FAILED, t2.error));
      let n2 = t2.value;
      if (n2.length === 0) return P(new Y(`Cannot rollback: empty sketch array`, J.MIGRATION_FAILED));
      let r2 = n2[0];
      return I(r2.routes);
    } catch (e4) {
      return P(new Y(`Route collection to sketch rollback failed: ${String(e4)}`, J.ROLLBACK_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  validateBefore(e3) {
    return $.validateRouteCollectionData(e3).map(() => void 0).mapErr((e4) => new Z(`Pre-migration validation failed: ${e4.message}`, e4.field, e4.value, e4));
  }
  validateAfter(e3) {
    return $.validateSketchArray(e3).map(() => void 0).mapErr((e4) => new Z(`Post-migration validation failed: ${e4.message}`, e4.field, e4.value, e4));
  }
}, Fn = class {
  constructor() {
    __publicField(this, "fromVersion", 1);
    __publicField(this, "toVersion", 2);
    __publicField(this, "name", `sketch-v1-to-v2`);
  }
  migrate() {
    return P(new Y(`Sketch V1 to V2 migration not yet implemented`, J.STRATEGY_NOT_FOUND));
  }
  validateBefore(e3) {
    return $.validateSketchArray(e3).map(() => void 0).mapErr((e4) => new Z(`Pre-migration validation failed: ${e4.message}`, e4.field, e4.value, e4));
  }
  validateAfter(e3) {
    return P(new Z(`Sketch V2 validation not yet implemented`, void 0, e3));
  }
}, In = (_b = class {
  static register(e3) {
    let t2 = this.getStrategyKey(e3.fromVersion, e3.toVersion);
    this.strategies.set(t2, e3);
  }
  static getStrategy(e3, t2) {
    let n2 = this.getStrategyKey(e3, t2), r2 = this.strategies.get(n2);
    return r2 ? I(r2) : P(new Y(`No migration strategy found for version ${e3} to ${t2}`, J.STRATEGY_NOT_FOUND));
  }
  static getAllStrategies() {
    return Array.from(this.strategies.values());
  }
  static hasStrategy(e3, t2) {
    let n2 = this.getStrategyKey(e3, t2);
    return this.strategies.has(n2);
  }
  static getStrategyKey(e3, t2) {
    return `${e3}->${t2}`;
  }
}, __publicField(_b, "strategies", /* @__PURE__ */ new Map()), _b.register(new Pn()), _b.register(new Fn()), _b), Ln = class {
  static createStrategy(e3, t2) {
    return In.getStrategy(e3, t2);
  }
  static createStrategiesForPath(e3) {
    try {
      let t2 = [];
      for (let n2 = 0; n2 < e3.length; n2++) {
        let r2 = n2 === 0 ? e3[0] - 1 : e3[n2 - 1], i2 = e3[n2], a2 = this.createStrategy(r2, i2);
        if (a2.isErr()) return P(a2.error);
        t2.push(a2.value);
      }
      return I(t2);
    } catch (e4) {
      return P(new Y(`Failed to create strategies for migration path: ${String(e4)}`, J.MIGRATION_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
}, Rn = (_c = class {
  static isMigrationNeeded(e3) {
    return Q.isMigrationNeeded(e3);
  }
  static getDataVersion(e3) {
    return Q.extractVersion(e3);
  }
  static migrateToCurrent(e3, t2 = {}) {
    return this.migrateToVersion(e3, Q.getCurrentVersion(), t2);
  }
  static migrateToVersion(e3, t2, n2 = {}) {
    try {
      let r2 = { ...this.DEFAULT_OPTIONS, ...n2 }, i2 = Q.extractVersion(e3);
      if (i2.isErr()) return P(new Y(`Failed to extract current version: ${i2.error.message}`, J.INVALID_VERSION, i2.error));
      let a2 = i2.value;
      if (a2 === t2) return I({ data: e3, fromVersion: a2, toVersion: t2, migratedVersions: [] });
      let o2 = Q.determineMigrationPath(a2, t2);
      if (o2.isErr()) return P(new Y(`Failed to determine migration path: ${o2.error.message}`, J.INVALID_VERSION, o2.error));
      let s2 = o2.value, c2 = Ln.createStrategiesForPath(s2);
      if (c2.isErr()) return P(c2.error);
      let l2 = c2.value;
      if (r2.validateBefore) {
        let t3 = this.validateDataBeforeMigration(e3, a2);
        if (t3.isErr()) return P(new Y(`Pre-migration validation failed: ${t3.error.message}`, J.VALIDATION_FAILED, t3.error));
      }
      let u2 = r2.enableRollback ? e3 : void 0, d2 = e3, f2 = [];
      for (let e4 of l2) {
        let t3 = this.executeMigrationWithRetry(e4, d2, r2);
        if (t3.isErr()) {
          if (r2.enableRollback && u2) {
            let e5 = this.rollbackToVersion(u2);
            if (e5.isErr()) return P(new Nn(`Migration failed and rollback also failed: ${e5.error.message}`, t3.error, e5.error));
          }
          return P(t3.error);
        }
        d2 = t3.value, f2.push(e4.toVersion);
      }
      if (r2.validateAfter) {
        let e4 = this.validateDataAfterMigration(d2, t2);
        if (e4.isErr()) return P(new Y(`Post-migration validation failed: ${e4.error.message}`, J.VALIDATION_FAILED, e4.error));
      }
      return I({ data: d2, fromVersion: a2, toVersion: t2, migratedVersions: f2, rollbackData: r2.enableRollback ? u2 : void 0 });
    } catch (e4) {
      return P(new Y(`Migration service error: ${String(e4)}`, J.MIGRATION_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  static executeMigrationWithRetry(e3, t2, n2) {
    let r2 = null;
    for (let i2 = 0; i2 <= (n2.maxRetries || 0); i2++) {
      try {
        let n3 = e3.migrate(t2);
        if (n3.isErr()) {
          r2 = n3.error;
          continue;
        }
        if (e3.validateAfter) {
          let t3 = e3.validateAfter(n3.value);
          if (t3.isErr()) {
            r2 = new Y(`Post-migration validation failed: ${t3.error.message}`, J.VALIDATION_FAILED, t3.error);
            continue;
          }
        }
        return I(n3.value);
      } catch (e4) {
        r2 = new Y(`Migration attempt ${i2 + 1} failed: ${String(e4)}`, J.MIGRATION_FAILED, e4 instanceof Error ? e4 : Error(String(e4)));
      }
      i2 < (n2.maxRetries || 0) && n2.retryDelay && console.warn(`Migration failed, retrying in ${n2.retryDelay}ms...`);
    }
    return P(r2 || new Y(`Migration failed after all retry attempts`, J.MIGRATION_FAILED));
  }
  static rollbackToVersion(e3) {
    try {
      return I(e3);
    } catch (e4) {
      return P(new Y(`Rollback failed: ${String(e4)}`, J.ROLLBACK_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  static validateDataBeforeMigration(e3, t2) {
    switch (t2) {
      case 0:
        return $.validateRouteCollectionData(e3).map(() => void 0).mapErr((e4) => new Y(`Route collection validation failed: ${e4.message}`, J.VALIDATION_FAILED, e4));
      case 1:
        return $.validateSketchArray(e3).map(() => void 0).mapErr((e4) => new Y(`Sketch array validation failed: ${e4.message}`, J.VALIDATION_FAILED, e4));
      default:
        return P(new Y(`Unknown version for pre-migration validation: ${t2}`, J.VALIDATION_FAILED));
    }
  }
  static validateDataAfterMigration(e3, t2) {
    switch (t2) {
      case 1:
        return $.validateSketchArray(e3).map(() => void 0).mapErr((e4) => new Y(`Sketch array validation failed: ${e4.message}`, J.VALIDATION_FAILED, e4));
      default:
        return P(new Y(`Unknown version for post-migration validation: ${t2}`, J.VALIDATION_FAILED));
    }
  }
  static checkDataIntegrity(e3, t2) {
    return $.checkDataIntegrity(e3, t2);
  }
}, __publicField(_c, "DEFAULT_OPTIONS", { validateBefore: true, validateAfter: true, enableRollback: true, maxRetries: 3, retryDelay: 1e3 }), _c);
const zn = Me(`sketches`, () => {
  let e3 = k([]), t2 = k(null), n2 = k(null), r2 = N(() => {
    if (!t2.value) return null;
    let n3 = e3.value.find((e4) => e4.id === t2.value);
    return n3 ? new An(n3.routes.routes.map((e4) => new jn(e4.id, e4.points, e4.properties, e4.meta)), n3.routes.id, n3.routes.meta) : null;
  }), i2 = N(() => r2.value ? r2.value.routes.map((e4) => ({ id: e4.id, name: e4.name, points: e4.getPoints(), meta: e4.meta })) : []), a2 = N(() => t2.value && e3.value.find((e4) => e4.id === t2.value) || null), o2 = N(() => a2.value ? a2.value.drafts.drafts : []);
  async function s2() {
    let n3 = await Je(`sketches`);
    if (n3) {
      let r3 = Rn.migrateToCurrent(n3, { validateBefore: true, validateAfter: true, enableRollback: true });
      if (r3.isErr()) {
        console.error(`[SketchStore] Data migration failed:`, r3.error), await c2();
        return;
      }
      let i3 = r3.value;
      if (i3.migratedVersions.length > 0 && console.info(`[SketchStore] Successfully migrated data from version ${i3.fromVersion} to ${i3.toVersion}`), Array.isArray(i3.data)) {
        e3.value = i3.data.map((e4) => q.fromStorage(e4));
        let n4 = [];
        e3.value.forEach((e4) => {
          e4.routes.routes.forEach((e5) => {
            e5.points.length > 1 && !e5.meta.distance && n4.push((async () => {
              try {
                e5.meta.distance = await Pe(e5.points);
              } catch (t3) {
                console.warn(`Failed to calculate route distance:`, t3), e5.meta.distance = 0;
              }
            })());
          });
        }), await Promise.all(n4), !t2.value && e3.value.length > 0 && (t2.value = e3.value[0].id);
      } else await c2();
    } else await c2();
  }
  async function c2() {
    let n3 = new q();
    n3.meta.name = `Default Sketch`, e3.value = [n3], t2.value = n3.id, await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B();
  }
  async function l2(t3 = `New Sketch`) {
    let n3 = new q();
    return n3.meta.name = t3, e3.value.push(n3), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B(), n3;
  }
  async function u2(t3, n3) {
    let r3 = e3.value.find((e4) => e4.id === t3);
    r3 && (n3.name !== void 0 && r3.updateName(n3.name), n3.description !== void 0 && r3.updateDescription(n3.description), n3.tags !== void 0 && (r3.meta.tags.forEach((e4) => {
      r3.removeTag(e4);
    }), n3.tags.forEach((e4) => {
      r3.addTag(e4);
    })), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B());
  }
  async function d2(n3) {
    let r3 = e3.value.findIndex((e4) => e4.id === n3);
    r3 !== -1 && (e3.value.splice(r3, 1), t2.value === n3 && (t2.value = e3.value.length > 0 ? e3.value[0].id : null), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B());
  }
  function f2(e4) {
    t2.value = e4, n2.value = null;
  }
  async function p2(t3, n3 = {}, r3 = {}) {
    a2.value || await c2();
    let i3 = new jn(void 0, [], n3, r3);
    return i3.meta.name = t3, a2.value && a2.value.routes.routes.push(i3.exportToStorage()), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B(), i3;
  }
  async function m2(t3) {
    if (!a2.value) return;
    let r3 = a2.value.routes.routes.findIndex((e4) => e4.id === t3);
    r3 !== -1 && (a2.value.routes.routes.splice(r3, 1), n2.value === t3 && (n2.value = null), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B());
  }
  async function h2(t3, n3) {
    if (!a2.value) return;
    let r3 = a2.value.routes.routes.find((e4) => e4.id === t3);
    if (r3) {
      if (r3.points.push(n3), r3.meta.modification_timestamp = Date.now(), r3.points.length > 1) try {
        if (r3.meta.distance === void 0) {
          let e4 = await Pe(r3.points);
          r3.meta.distance = e4;
        } else {
          let e4 = await Pe([r3.points[r3.points.length - 2], n3]);
          r3.meta.distance += e4;
        }
      } catch (e4) {
        console.warn(`Failed to calculate route distance:`, e4), r3.meta.distance === void 0 && (r3.meta.distance = 0);
      }
      await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B();
    }
  }
  async function g2(t3, n3) {
    if (!a2.value) return;
    let r3 = a2.value.routes.routes.find((e4) => e4.id === t3);
    r3 && (n3.meta !== void 0 && (r3.meta = { ...r3.meta, ...n3.meta }), n3.properties !== void 0 && (r3.properties = { ...r3.properties, ...n3.properties }), r3.meta.modification_timestamp = Date.now(), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B());
  }
  async function _2(t3) {
    if (!a2.value) return;
    let n3 = a2.value.routes.routes.find((e4) => e4.id === t3);
    n3 && (n3.points = [], n3.meta.modification_timestamp = Date.now(), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B());
  }
  function v2(e4) {
    return a2.value && a2.value.routes.routes.find((t3) => t3.id === e4) || null;
  }
  function y2(e4) {
    n2.value = e4;
  }
  async function b2(t3, n3 = {}, r3 = {}) {
    a2.value || await c2();
    let i3 = { id: crypto.randomUUID(), meta: { ...K(), ...r3 }, shape: t3, properties: n3 };
    return a2.value && a2.value.drafts.drafts.push(i3), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B(), i3;
  }
  async function x2(t3, n3) {
    if (!a2.value) return;
    let r3 = a2.value.drafts.drafts.find((e4) => e4.id === t3);
    r3 && (n3.shape !== void 0 && (r3.shape = n3.shape), n3.properties !== void 0 && (r3.properties = { ...r3.properties, ...n3.properties }), n3.meta !== void 0 && (r3.meta = { ...r3.meta, ...n3.meta }, r3.meta.modification_timestamp = Date.now()), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B());
  }
  async function S2(t3) {
    if (!a2.value) return;
    let n3 = a2.value.drafts.drafts.findIndex((e4) => e4.id === t3);
    n3 !== -1 && (a2.value.drafts.drafts.splice(n3, 1), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await B());
  }
  function C2(e4) {
    return a2.value && a2.value.drafts.drafts.find((t3) => t3.id === e4) || null;
  }
  return { sketches: e3, currentSketchId: t2, currentRouteId: n2, routeCollection: r2, routes: i2, currentSketch: a2, currentDrafts: o2, init: s2, createSketch: l2, updateSketch: u2, deleteSketch: d2, setCurrentSketchId: f2, addRoute: p2, deleteRoute: m2, addPointToRoute: h2, updateRoute: g2, clearRoutePoints: _2, getRouteById: v2, setCurrentRouteId: y2, addDraft: b2, updateDraft: x2, deleteDraft: S2, getDraftById: C2 };
});
export {
  jt as A,
  dt as B,
  Ht as C,
  Pt as D,
  Lt as E,
  Tt as F,
  nt as H,
  wt as I,
  St as L,
  Dt as M,
  kt as N,
  Nt as O,
  Et as P,
  xt as R,
  Bt as S,
  Rt as T,
  ot as V,
  Zt as _,
  _n as a,
  Yt as b,
  fn as c,
  sn as d,
  an as f,
  $t as g,
  en as h,
  vn as i,
  Ot as j,
  Mt as k,
  un as l,
  tn as m,
  Sn as n,
  hn as o,
  nn as p,
  bn as r,
  mn as s,
  zn as t,
  cn as u,
  Qt as v,
  zt as w,
  Vt as x,
  Xt as y,
  ht as z
};
