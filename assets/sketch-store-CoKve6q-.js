var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c;
import { C as e, D as t, F as n, I as r, O as i, P as a, T as o, _ as s, _t as c, c as l, d as u, dt as d, f, gt as p, h as m, i as h, j as g, lt as _, mt as v, n as y, o as b, ot as x, pt as S, r as C, t as w, u as T, ut as E, y as ee, z as te } from "./Card-nhqq8IKa.js";
import { F as ne, G as re, H as ie, I as D, J as ae, K as oe, L as se, O as ce, P as le, Q as ue, R as de, T as fe, Y as O, _ as pe, d as me, h as he, i as ge, k as _e, p as ve, v as ye, x as be } from "./Tooltip-DGge0ha1.js";
import { A as k, Bt as xe, C as Se, D as A, Et as j, Ft as Ce, Jt as we, Lt as Te, Mt as Ee, O as M, Ot as De, Pt as Oe, Rt as ke, Zt as Ae, _t as je, a as Me, an as N, bt as Ne, c as Pe, cn as P, fn as Fe, gt as F, ht as Ie, in as Le, jt as Re, rt as ze, st as Be, w as Ve, wt as I, zt as He } from "./index-DTVnoW_1.js";
import { t as Ue } from "./fade-in-scale-up.cssr-DGTJWPO8.js";
import { _ as We, g as L, n as R, r as z, t as Ge } from "./storage-DsEl3RSe.js";
import { r as B, t as Ke } from "./Button-o58fM-RZ.js";
import { n as qe, r as Je, t as Ye } from "./Success-SBPGeO_s.js";
import { t as Xe } from "./Warning-DtnUwqHe.js";
import { r as Ze } from "./light-CQB9eEMb.js";
import { t as Qe } from "./light-ByENEBpl.js";
import { t as $e } from "./light-DVAUVx3a.js";
var et = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, tt = I({ name: `MapPin`, render: function(e3, t2) {
  return He(), Ne(`svg`, et, t2[0] || (t2[0] = [je(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [je(`circle`, { cx: `12`, cy: `11`, r: `3` }), je(`path`, { d: `M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z` })], -1)]));
} }), V = N(null);
function nt(e3) {
  if (e3.clientX > 0 || e3.clientY > 0) V.value = { x: e3.clientX, y: e3.clientY };
  else {
    let { target: t2 } = e3;
    if (t2 instanceof Element) {
      let { left: e4, top: n2, width: r2, height: i2 } = t2.getBoundingClientRect();
      e4 > 0 || n2 > 0 ? V.value = { x: e4 + r2 / 2, y: n2 + i2 / 2 } : V.value = { x: 0, y: 0 };
    } else V.value = null;
  }
}
var H = 0, rt = true;
function it() {
  if (!oe) return Le(N(null));
  H === 0 && O(`click`, document, nt, true);
  let e3 = () => {
    H += 1;
  };
  return rt && (rt = re()) ? (Oe(e3), Ce(() => {
    --H, H === 0 && ae(`click`, document, nt, true);
  })) : e3(), Le(V);
}
var at = N(void 0), ot = 0;
function st() {
  at.value = Date.now();
}
var ct = true;
function lt(e3) {
  if (!oe) return Le(N(false));
  let t2 = N(false), n2 = null;
  function r2() {
    n2 !== null && window.clearTimeout(n2);
  }
  function i2() {
    r2(), t2.value = true, n2 = window.setTimeout(() => {
      t2.value = false;
    }, e3);
  }
  ot === 0 && O(`click`, window, st, true);
  let a2 = () => {
    ot += 1, O(`click`, window, i2, true);
  };
  return ct && (ct = re()) ? (Oe(a2), Ce(() => {
    --ot, ot === 0 && ae(`click`, window, st, true), ae(`click`, window, i2, true), r2();
  })) : a2(), Le(t2);
}
var ut = N(false);
function dt() {
  ut.value = true;
}
function ft() {
  ut.value = false;
}
var U = 0;
function pt() {
  return a && (Oe(() => {
    U || (window.addEventListener(`compositionstart`, dt), window.addEventListener(`compositionend`, ft)), U++;
  }), Ce(() => {
    U <= 1 ? (window.removeEventListener(`compositionstart`, dt), window.removeEventListener(`compositionend`, ft), U = 0) : U--;
  })), ut;
}
var W = 0, mt = ``, ht = ``, gt = ``, _t = ``;
const vt = N(`0px`);
function yt(e3) {
  if (typeof document > `u`) return;
  let t2 = document.documentElement, n2, r2 = false, i2 = () => {
    t2.style.marginRight = mt, t2.style.overflow = ht, t2.style.overflowX = gt, t2.style.overflowY = _t, vt.value = `0px`;
  };
  Te(() => {
    n2 = we(e3, (e4) => {
      if (e4) {
        if (!W) {
          let e5 = window.innerWidth - t2.offsetWidth;
          e5 > 0 && (mt = t2.style.marginRight, t2.style.marginRight = `${e5}px`, vt.value = `${e5}px`), ht = t2.style.overflow, gt = t2.style.overflowX, _t = t2.style.overflowY, t2.style.overflow = `hidden`, t2.style.overflowX = `hidden`, t2.style.overflowY = `hidden`;
        }
        r2 = true, W++;
      } else W--, W || i2(), r2 = false;
    }, { immediate: true });
  }), Ce(() => {
    n2 == null ? void 0 : n2(), r2 && (r2 = (W--, W || i2(), false));
  });
}
function bt(e3) {
  let { fontSize: t2, boxShadow2: n2, popoverColor: r2, textColor2: i2, borderRadius: a2, borderColor: o2, heightSmall: s2, heightMedium: c2, heightLarge: l2, fontSizeSmall: u2, fontSizeMedium: d2, fontSizeLarge: f2, dividerColor: p2 } = e3;
  return { panelFontSize: t2, boxShadow: n2, color: r2, textColor: i2, borderRadius: a2, border: `1px solid ${o2}`, heightSmall: s2, heightMedium: c2, heightLarge: l2, fontSizeSmall: u2, fontSizeMedium: d2, fontSizeLarge: f2, dividerColor: p2 };
}
var xt = u({ name: `ColorPicker`, common: b, peers: { Input: Ze, Button: B }, self: bt });
const St = n(`n-dialog-provider`), Ct = n(`n-dialog-api`), wt = n(`n-dialog-reactive-list`);
var Tt = { titleFontSize: `18px`, padding: `16px 28px 20px 28px`, iconSize: `28px`, actionSpace: `12px`, contentMargin: `8px 0 16px 0`, iconMargin: `0 4px 0 0`, iconMarginIconTop: `4px 0 8px 0`, closeSize: `22px`, closeIconSize: `18px`, closeMargin: `20px 26px 0 0`, closeMarginIconTop: `10px 16px 0 0` };
function Et(e3) {
  let { textColor1: t2, textColor2: n2, modalColor: r2, closeIconColor: i2, closeIconColorHover: a2, closeIconColorPressed: o2, closeColorHover: s2, closeColorPressed: c2, infoColor: l2, successColor: u2, warningColor: d2, errorColor: f2, primaryColor: p2, dividerColor: m2, borderRadius: h2, fontWeightStrong: g2, lineHeight: _2, fontSize: v2 } = e3;
  return Object.assign(Object.assign({}, Tt), { fontSize: v2, lineHeight: _2, border: `1px solid ${m2}`, titleTextColor: t2, textColor: n2, color: r2, closeColorHover: s2, closeColorPressed: c2, closeIconColor: i2, closeIconColorHover: a2, closeIconColorPressed: o2, closeBorderRadius: h2, iconColor: p2, iconColorInfo: l2, iconColorSuccess: u2, iconColorWarning: d2, iconColorError: f2, borderRadius: h2, titleFontWeight: g2 });
}
var Dt = u({ name: `Dialog`, common: b, peers: { Button: B }, self: Et }), Ot = { icon: Function, type: { type: String, default: `default` }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean };
const kt = t(Ot);
var At = E([d(`dialog`, `
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
 `, [S(`icon`, `
 color: var(--n-icon-color);
 `), v(`bordered`, `
 border: var(--n-border);
 `), v(`icon-top`, [S(`close`, `
 margin: var(--n-close-margin);
 `), S(`icon`, `
 margin: var(--n-icon-margin);
 `), S(`content`, `
 text-align: center;
 `), S(`title`, `
 justify-content: center;
 `), S(`action`, `
 justify-content: center;
 `)]), v(`icon-left`, [S(`icon`, `
 margin: var(--n-icon-margin);
 `), v(`closable`, [S(`title`, `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), S(`close`, `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), S(`content`, `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [v(`last`, `margin-bottom: 0;`)]), S(`action`, `
 display: flex;
 justify-content: flex-end;
 `, [E(`> *:not(:last-child)`, `
 margin-right: var(--n-action-space);
 `)]), S(`icon`, `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), S(`title`, `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), d(`dialog-icon-container`, `
 display: flex;
 justify-content: center;
 `)]), c(d(`dialog`, `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), d(`dialog`, [_(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), jt = { default: () => j(qe, null), info: () => j(qe, null), success: () => j(Ye, null), warning: () => j(Xe, null), error: () => j(Je, null) };
const Mt = I({ name: `Dialog`, alias: [`NimbusConfirmCard`, `Confirm`], props: Object.assign(Object.assign({}, f.props), Ot), slots: Object, setup(e3) {
  let { mergedComponentPropsRef: t2, mergedClsPrefixRef: n2, inlineThemeDisabled: r2, mergedRtlRef: i2 } = ee(e3), a2 = m(`Dialog`, i2, n2), o2 = F(() => {
    var _a2, _b2;
    let { iconPlacement: n3 } = e3;
    return n3 || ((_b2 = (_a2 = t2 == null ? void 0 : t2.value) == null ? void 0 : _a2.Dialog) == null ? void 0 : _b2.iconPlacement) || `left`;
  });
  function c2(t3) {
    let { onPositiveClick: n3 } = e3;
    n3 && n3(t3);
  }
  function l2(t3) {
    let { onNegativeClick: n3 } = e3;
    n3 && n3(t3);
  }
  function u2() {
    let { onClose: t3 } = e3;
    t3 && t3();
  }
  let d2 = f(`Dialog`, `-dialog`, At, Dt, e3, n2), h2 = F(() => {
    let { type: t3 } = e3, n3 = o2.value, { common: { cubicBezierEaseInOut: r3 }, self: { fontSize: i3, lineHeight: a3, border: s2, titleTextColor: c3, textColor: l3, color: u3, closeBorderRadius: f2, closeColorHover: m2, closeColorPressed: h3, closeIconColor: g3, closeIconColorHover: _2, closeIconColorPressed: v2, closeIconSize: y2, borderRadius: b2, titleFontWeight: S2, titleFontSize: C2, padding: w2, iconSize: T2, actionSpace: E2, contentMargin: ee2, closeSize: te2, [n3 === `top` ? `iconMarginIconTop` : `iconMargin`]: ne2, [n3 === `top` ? `closeMarginIconTop` : `closeMargin`]: re2, [p(`iconColor`, t3)]: ie2 } } = d2.value, D2 = x(ne2);
    return { "--n-font-size": i3, "--n-icon-color": ie2, "--n-bezier": r3, "--n-close-margin": re2, "--n-icon-margin-top": D2.top, "--n-icon-margin-right": D2.right, "--n-icon-margin-bottom": D2.bottom, "--n-icon-margin-left": D2.left, "--n-icon-size": T2, "--n-close-size": te2, "--n-close-icon-size": y2, "--n-close-border-radius": f2, "--n-close-color-hover": m2, "--n-close-color-pressed": h3, "--n-close-icon-color": g3, "--n-close-icon-color-hover": _2, "--n-close-icon-color-pressed": v2, "--n-color": u3, "--n-text-color": l3, "--n-border-radius": b2, "--n-padding": w2, "--n-line-height": a3, "--n-border": s2, "--n-content-margin": ee2, "--n-title-font-size": C2, "--n-title-font-weight": S2, "--n-title-text-color": c3, "--n-action-space": E2 };
  }), g2 = r2 ? s(`dialog`, F(() => `${e3.type[0]}${o2.value[0]}`), h2, e3) : void 0;
  return { mergedClsPrefix: n2, rtlEnabled: a2, mergedIconPlacement: o2, mergedTheme: d2, handlePositiveClick: c2, handleNegativeClick: l2, handleCloseClick: u2, cssVars: r2 ? void 0 : h2, themeClass: g2 == null ? void 0 : g2.themeClass, onRender: g2 == null ? void 0 : g2.onRender };
}, render() {
  var t2;
  let { bordered: n2, mergedIconPlacement: r2, cssVars: i2, closable: a2, showIcon: s2, title: c2, content: u2, action: d2, negativeText: f2, positiveText: p2, positiveButtonProps: m2, negativeButtonProps: h2, handlePositiveClick: g2, handleNegativeClick: _2, mergedTheme: v2, loading: y2, type: b2, mergedClsPrefix: x2 } = this;
  (t2 = this.onRender) == null || t2.call(this);
  let S2 = s2 ? j(T, { clsPrefix: x2, class: `${x2}-dialog__icon` }, { default: () => o(this.$slots.icon, (e3) => e3 || (this.icon ? L(this.icon) : jt[this.type]())) }) : null, C2 = o(this.$slots.action, (e3) => e3 || p2 || f2 || d2 ? j(`div`, { class: [`${x2}-dialog__action`, this.actionClass], style: this.actionStyle }, e3 || (d2 ? [L(d2)] : [this.negativeText && j(Ke, Object.assign({ theme: v2.peers.Button, themeOverrides: v2.peerOverrides.Button, ghost: true, size: `small`, onClick: _2 }, h2), { default: () => L(this.negativeText) }), this.positiveText && j(Ke, Object.assign({ theme: v2.peers.Button, themeOverrides: v2.peerOverrides.Button, size: `small`, type: b2 === `default` ? `primary` : b2, disabled: y2, loading: y2, onClick: g2 }, m2), { default: () => L(this.positiveText) })])) : null);
  return j(`div`, { class: [`${x2}-dialog`, this.themeClass, this.closable && `${x2}-dialog--closable`, `${x2}-dialog--icon-${r2}`, n2 && `${x2}-dialog--bordered`, this.rtlEnabled && `${x2}-dialog--rtl`], style: i2, role: `dialog` }, a2 ? o(this.$slots.close, (e3) => {
    let t3 = [`${x2}-dialog__close`, this.rtlEnabled && `${x2}-dialog--rtl`];
    return e3 ? j(`div`, { class: t3 }, e3) : j(l, { focusable: this.closeFocusable, clsPrefix: x2, class: t3, onClick: this.handleCloseClick });
  }) : null, s2 && r2 === `top` ? j(`div`, { class: `${x2}-dialog-icon-container` }, S2) : null, j(`div`, { class: [`${x2}-dialog__title`, this.titleClass], style: this.titleStyle }, s2 && r2 === `left` ? S2 : null, e(this.$slots.header, () => [L(c2)])), j(`div`, { class: [`${x2}-dialog__content`, C2 ? `` : `${x2}-dialog__content--last`, this.contentClass], style: this.contentStyle }, e(this.$slots.default, () => [L(u2)])), C2);
} });
function Nt(e3) {
  let { modalColor: t2, textColor2: n2, boxShadow3: r2 } = e3;
  return { color: t2, textColor: n2, boxShadow: r2 };
}
var Pt = u({ name: `Modal`, common: b, peers: { Scrollbar: ve, Dialog: Dt, Card: h }, self: Nt });
const Ft = n(`n-modal-provider`), It = n(`n-modal-api`), Lt = n(`n-modal-reactive-list`), Rt = `n-draggable`;
function zt(e3, t2) {
  let n2, r2 = F(() => e3.value !== false), i2 = F(() => r2.value ? Rt : ``), a2 = F(() => {
    let t3 = e3.value;
    return t3 === true || t3 === false ? true : t3 ? t3.bounds !== `none` : true;
  });
  function o2(e4) {
    let r3 = e4.querySelector(`.${Rt}`);
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
      ae(`mousedown`, r3, p2), O(`mousemove`, window, m2), O(`mouseup`, window, h2);
    };
  }
  function s2() {
    n2 && (n2 = (n2(), void 0));
  }
  return ke(s2), { stopDrag: s2, startDrag: o2, draggableRef: r2, draggableClassRef: i2 };
}
var Bt = Object.assign(Object.assign({}, C), Ot), Vt = t(Bt), Ht = I({ name: `ModalBody`, inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, Bt), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(e3) {
  let t2 = N(null), n2 = N(null), r2 = N(e3.show), i2 = N(null), a2 = N(null), o2 = De(D), s2 = null;
  we(P(e3, `show`), (e4) => {
    e4 && (s2 = o2.getMousePosition());
  }, { immediate: true });
  let { stopDrag: c2, startDrag: l2, draggableRef: u2, draggableClassRef: d2 } = zt(P(e3, `draggable`), { onEnd: (e4) => {
    h2(e4);
  } }), f2 = F(() => Fe([e3.titleClass, d2.value])), p2 = F(() => Fe([e3.headerClass, d2.value]));
  we(P(e3, `show`), (e4) => {
    e4 && (r2.value = true);
  }), yt(F(() => e3.blockScroll && r2.value));
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
    Ee(() => {
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
  let C2 = N(null);
  return we(C2, (e4) => {
    e4 && Ee(() => {
      let n3 = e4.el;
      n3 && t2.value !== n3 && (t2.value = n3);
    });
  }), xe(ne, t2), xe(de, null), xe(le, null), { mergedTheme: o2.mergedThemeRef, appear: o2.appearRef, isMounted: o2.isMountedRef, mergedClsPrefix: o2.mergedClsPrefixRef, bodyRef: t2, scrollbarRef: n2, draggableClass: d2, displayed: r2, childNodeRef: C2, cardHeaderClass: p2, dialogTitleClass: f2, handlePositiveClick: S2, handleNegativeClick: x2, handleCloseClick: b2, handleAfterEnter: v2, handleAfterLeave: y2, handleBeforeLeave: _2, handleEnter: g2 };
}, render() {
  let { $slots: e3, $attrs: t2, handleEnter: n2, handleAfterEnter: r2, handleAfterLeave: i2, handleBeforeLeave: a2, preset: o2, mergedClsPrefix: s2 } = this, c2 = null;
  if (!o2) {
    if (c2 = ye(`default`, e3.default, { draggableClass: this.draggableClass }), !c2) {
      g(`modal`, `default slot is empty`);
      return;
    }
    c2 = Ie(c2), c2.props = Re({ class: `${s2}-modal` }, t2, c2.props || {});
  }
  return this.displayDirective === `show` || this.displayed || this.show ? Ae(j(`div`, { role: `none`, class: [`${s2}-modal-body-wrapper`, this.maskHidden && `${s2}-modal-body-wrapper--mask-hidden`] }, j(me, { ref: `scrollbarRef`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${s2}-modal-scroll-content` }, { default: () => {
    var _a2;
    return [(_a2 = this.renderMask) == null ? void 0 : _a2.call(this), j(be, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => j(ze, { name: `fade-in-scale-up-transition`, appear: this.appear ?? this.isMounted, onEnter: n2, onAfterEnter: r2, onAfterLeave: i2, onBeforeLeave: a2 }, { default: () => {
      let t3 = [[Be, this.show]], { onClickoutside: n3 } = this;
      return n3 && t3.push([_e, this.onClickoutside, void 0, { capture: true }]), Ae(this.preset === `confirm` || this.preset === `dialog` ? j(Mt, Object.assign({}, this.$attrs, { class: [`${s2}-modal`, this.$attrs.class], ref: `bodyRef`, theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, pe(this.$props, kt), { titleClass: this.dialogTitleClass, "aria-modal": `true` }), e3) : this.preset === `card` ? j(w, Object.assign({}, this.$attrs, { ref: `bodyRef`, class: [`${s2}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, pe(this.$props, y), { headerClass: this.cardHeaderClass, "aria-modal": `true`, role: `dialog` }), e3) : this.childNodeRef = c2, t3);
    } }) })];
  } })), [[Be, this.displayDirective === `if` || this.displayed || this.show]]) : null;
} }), Ut = E([d(`modal-container`, `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), d(`modal-mask`, `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [he({ enterDuration: `.25s`, leaveDuration: `.25s`, enterCubicBezier: `var(--n-bezier-ease-out)`, leaveCubicBezier: `var(--n-bezier-ease-out)` })]), d(`modal-body-wrapper`, `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [d(`modal-scroll-content`, `
 min-height: 100%;
 display: flex;
 position: relative;
 `), v(`mask-hidden`, `pointer-events: none;`, [d(`modal-scroll-content`, [E(`> *`, `
 pointer-events: all;
 `)])])]), d(`modal`, `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [Ue({ duration: `.25s`, enterScale: `.5` }), E(`.${Rt}`, `
 cursor: move;
 user-select: none;
 `)])]);
const Wt = Object.assign(Object.assign(Object.assign(Object.assign({}, f.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: `if` }, transformOrigin: { type: String, default: `mouse` }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), Bt), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } });
var Gt = I({ name: `Modal`, inheritAttrs: false, props: Wt, slots: Object, setup(e3) {
  let t2 = N(null), { mergedClsPrefixRef: n2, namespaceRef: a2, inlineThemeDisabled: o2 } = ee(e3), c2 = f(`Modal`, `-modal`, Ut, Pt, e3, n2), l2 = lt(64), u2 = it(), d2 = r(), p2 = e3.internalDialog ? De(St, null) : null, m2 = e3.internalModal ? De(se, null) : null, h2 = pt();
  function g2(t3) {
    let { onUpdateShow: n3, "onUpdate:show": r2, onHide: a3 } = e3;
    n3 && i(n3, t3), r2 && i(r2, t3), a3 && !t3 && a3(t3);
  }
  function _2() {
    let { onClose: t3 } = e3;
    t3 ? Promise.resolve(t3()).then((e4) => {
      e4 !== false && g2(false);
    }) : g2(false);
  }
  function v2() {
    let { onPositiveClick: t3 } = e3;
    t3 ? Promise.resolve(t3()).then((e4) => {
      e4 !== false && g2(false);
    }) : g2(false);
  }
  function y2() {
    let { onNegativeClick: t3 } = e3;
    t3 ? Promise.resolve(t3()).then((e4) => {
      e4 !== false && g2(false);
    }) : g2(false);
  }
  function b2() {
    let { onBeforeLeave: t3, onBeforeHide: n3 } = e3;
    t3 && i(t3), n3 && n3();
  }
  function x2() {
    let { onAfterLeave: t3, onAfterHide: n3 } = e3;
    t3 && i(t3), n3 && n3();
  }
  function S2(n3) {
    var _a2;
    let { onMaskClick: r2 } = e3;
    r2 && r2(n3), e3.maskClosable && ((_a2 = t2.value) == null ? void 0 : _a2.contains(ue(n3))) && g2(false);
  }
  function C2(t3) {
    var n3;
    (n3 = e3.onEsc) == null || n3.call(e3), e3.show && e3.closeOnEsc && We(t3) && (h2.value || g2(false));
  }
  xe(D, { getMousePosition: () => {
    let e4 = p2 || m2;
    if (e4) {
      let { clickedRef: t3, clickedPositionRef: n3 } = e4;
      if (t3.value && n3.value) return n3.value;
    }
    return l2.value ? u2.value : null;
  }, mergedClsPrefixRef: n2, mergedThemeRef: c2, isMountedRef: d2, appearRef: P(e3, `internalAppear`), transformOriginRef: P(e3, `transformOrigin`) });
  let w2 = F(() => {
    let { common: { cubicBezierEaseOut: e4 }, self: { boxShadow: t3, color: n3, textColor: r2 } } = c2.value;
    return { "--n-bezier-ease-out": e4, "--n-box-shadow": t3, "--n-color": n3, "--n-text-color": r2 };
  }), T2 = o2 ? s(`theme-class`, void 0, w2, e3) : void 0;
  return { mergedClsPrefix: n2, namespace: a2, isMounted: d2, containerRef: t2, presetProps: F(() => pe(e3, Vt)), handleEsc: C2, handleAfterLeave: x2, handleClickoutside: S2, handleBeforeLeave: b2, doUpdateShow: g2, handleNegativeClick: y2, handlePositiveClick: v2, handleCloseClick: _2, cssVars: o2 ? void 0 : w2, themeClass: T2 == null ? void 0 : T2.themeClass, onRender: T2 == null ? void 0 : T2.onRender };
}, render() {
  let { mergedClsPrefix: e3 } = this;
  return j(fe, { to: this.to, show: this.show }, { default: () => {
    var t2;
    (t2 = this.onRender) == null || t2.call(this);
    let { showMask: n2 } = this;
    return Ae(j(`div`, { role: `none`, ref: `containerRef`, class: [`${e3}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, j(Ht, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: `bodyWrapper`, displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !n2 }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: n2 ? void 0 : this.handleClickoutside, renderMask: n2 ? () => j(ze, { name: `fade-in-transition`, key: `mask`, appear: this.internalAppear ?? this.isMounted }, { default: () => this.show ? j(`div`, { "aria-hidden": true, ref: `containerRef`, class: `${e3}-modal-mask`, onClick: this.handleClickoutside }) : null }) : void 0 }), this.$slots)), [[ce, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
const Kt = n(`n-message-api`), qt = n(`n-message-provider`);
function Jt(e3) {
  let { modalColor: t2, textColor1: n2, textColor2: r2, boxShadow3: i2, lineHeight: a2, fontWeightStrong: o2, dividerColor: s2, closeColorHover: c2, closeColorPressed: l2, closeIconColor: u2, closeIconColorHover: d2, closeIconColorPressed: f2, borderRadius: p2, primaryColorHover: m2 } = e3;
  return { bodyPadding: `16px 24px`, borderRadius: p2, headerPadding: `16px 24px`, footerPadding: `16px 24px`, color: t2, textColor: r2, titleTextColor: n2, titleFontSize: `18px`, titleFontWeight: o2, boxShadow: i2, lineHeight: a2, headerBorderBottom: `1px solid ${s2}`, footerBorderTop: `1px solid ${s2}`, closeIconColor: u2, closeIconColorHover: d2, closeIconColorPressed: f2, closeSize: `22px`, closeIconSize: `18px`, closeColorHover: c2, closeColorPressed: l2, closeBorderRadius: p2, resizableTriggerColorHover: m2 };
}
var Yt = u({ name: `Drawer`, common: b, peers: { Scrollbar: ve }, self: Jt }), Xt = u({ name: `DynamicTags`, common: b, peers: { Input: Ze, Button: B, Tag: ge, Space: Qe }, self() {
  return { inputWidth: `64px` };
} }), Zt = { gapSmall: `4px 8px`, gapMedium: `8px 12px`, gapLarge: `12px 16px` };
function Qt() {
  return Zt;
}
var $t = { name: `Flex`, self: Qt }, en = { feedbackPadding: `4px 0 0 2px`, feedbackHeightSmall: `24px`, feedbackHeightMedium: `24px`, feedbackHeightLarge: `26px`, feedbackFontSizeSmall: `13px`, feedbackFontSizeMedium: `14px`, feedbackFontSizeLarge: `14px`, labelFontSizeLeftSmall: `14px`, labelFontSizeLeftMedium: `14px`, labelFontSizeLeftLarge: `15px`, labelFontSizeTopSmall: `13px`, labelFontSizeTopMedium: `14px`, labelFontSizeTopLarge: `14px`, labelHeightSmall: `24px`, labelHeightMedium: `26px`, labelHeightLarge: `28px`, labelPaddingVertical: `0 0 6px 2px`, labelPaddingHorizontal: `0 12px 0 0`, labelTextAlignVertical: `left`, labelTextAlignHorizontal: `right`, labelFontWeight: `400` };
function tn(e3) {
  let { heightSmall: t2, heightMedium: n2, heightLarge: r2, textColor1: i2, errorColor: a2, warningColor: o2, lineHeight: s2, textColor3: c2 } = e3;
  return Object.assign(Object.assign({}, en), { blankHeightSmall: t2, blankHeightMedium: n2, blankHeightLarge: r2, lineHeight: s2, labelTextColor: i2, asteriskColor: a2, feedbackTextColorError: a2, feedbackTextColorWarning: o2, feedbackTextColor: c2 });
}
var nn = { name: `Form`, common: b, self: tn };
function rn(e3) {
  let { textColorDisabled: t2 } = e3;
  return { iconColorDisabled: t2 };
}
var an = u({ name: `InputNumber`, common: b, peers: { Button: B, Input: Ze }, self: rn });
function on(e3) {
  let { baseColor: t2, textColor2: n2, bodyColor: r2, cardColor: i2, dividerColor: a2, actionColor: o2, scrollbarColor: s2, scrollbarColorHover: c2, invertedColor: l2 } = e3;
  return { textColor: n2, textColorInverted: `#FFF`, color: r2, colorEmbedded: o2, headerColor: i2, headerColorInverted: l2, footerColor: o2, footerColorInverted: l2, headerBorderColor: a2, headerBorderColorInverted: l2, footerBorderColor: a2, footerBorderColorInverted: l2, siderBorderColor: a2, siderBorderColorInverted: l2, siderColor: i2, siderColorInverted: l2, siderToggleButtonBorder: `1px solid ${a2}`, siderToggleButtonColor: t2, siderToggleButtonIconColor: n2, siderToggleButtonIconColorInverted: n2, siderToggleBarColor: te(r2, s2), siderToggleBarColorHover: te(r2, c2), __invertScrollbar: `true` };
}
var sn = u({ name: `Layout`, common: b, peers: { Scrollbar: ve }, self: on }), cn = { tabFontSizeSmall: `14px`, tabFontSizeMedium: `14px`, tabFontSizeLarge: `16px`, tabGapSmallLine: `36px`, tabGapMediumLine: `36px`, tabGapLargeLine: `36px`, tabGapSmallLineVertical: `8px`, tabGapMediumLineVertical: `8px`, tabGapLargeLineVertical: `8px`, tabPaddingSmallLine: `6px 0`, tabPaddingMediumLine: `10px 0`, tabPaddingLargeLine: `14px 0`, tabPaddingVerticalSmallLine: `6px 12px`, tabPaddingVerticalMediumLine: `8px 16px`, tabPaddingVerticalLargeLine: `10px 20px`, tabGapSmallBar: `36px`, tabGapMediumBar: `36px`, tabGapLargeBar: `36px`, tabGapSmallBarVertical: `8px`, tabGapMediumBarVertical: `8px`, tabGapLargeBarVertical: `8px`, tabPaddingSmallBar: `4px 0`, tabPaddingMediumBar: `6px 0`, tabPaddingLargeBar: `10px 0`, tabPaddingVerticalSmallBar: `6px 12px`, tabPaddingVerticalMediumBar: `8px 16px`, tabPaddingVerticalLargeBar: `10px 20px`, tabGapSmallCard: `4px`, tabGapMediumCard: `4px`, tabGapLargeCard: `4px`, tabGapSmallCardVertical: `4px`, tabGapMediumCardVertical: `4px`, tabGapLargeCardVertical: `4px`, tabPaddingSmallCard: `8px 16px`, tabPaddingMediumCard: `10px 20px`, tabPaddingLargeCard: `12px 24px`, tabPaddingSmallSegment: `4px 0`, tabPaddingMediumSegment: `6px 0`, tabPaddingLargeSegment: `8px 0`, tabPaddingVerticalLargeSegment: `0 8px`, tabPaddingVerticalSmallCard: `8px 12px`, tabPaddingVerticalMediumCard: `10px 16px`, tabPaddingVerticalLargeCard: `12px 20px`, tabPaddingVerticalSmallSegment: `0 4px`, tabPaddingVerticalMediumSegment: `0 6px`, tabGapSmallSegment: `0`, tabGapMediumSegment: `0`, tabGapLargeSegment: `0`, tabGapSmallSegmentVertical: `0`, tabGapMediumSegmentVertical: `0`, tabGapLargeSegmentVertical: `0`, panePaddingSmall: `8px 0 0 0`, panePaddingMedium: `12px 0 0 0`, panePaddingLarge: `16px 0 0 0`, closeSize: `18px`, closeIconSize: `14px` };
function ln(e3) {
  let { textColor2: t2, primaryColor: n2, textColorDisabled: r2, closeIconColor: i2, closeIconColorHover: a2, closeIconColorPressed: o2, closeColorHover: s2, closeColorPressed: c2, tabColor: l2, baseColor: u2, dividerColor: d2, fontWeight: f2, textColor1: p2, borderRadius: m2, fontSize: h2, fontWeightStrong: g2 } = e3;
  return Object.assign(Object.assign({}, cn), { colorSegment: l2, tabFontSizeCard: h2, tabTextColorLine: p2, tabTextColorActiveLine: n2, tabTextColorHoverLine: n2, tabTextColorDisabledLine: r2, tabTextColorSegment: p2, tabTextColorActiveSegment: t2, tabTextColorHoverSegment: t2, tabTextColorDisabledSegment: r2, tabTextColorBar: p2, tabTextColorActiveBar: n2, tabTextColorHoverBar: n2, tabTextColorDisabledBar: r2, tabTextColorCard: p2, tabTextColorHoverCard: p2, tabTextColorActiveCard: n2, tabTextColorDisabledCard: r2, barColor: n2, closeIconColor: i2, closeIconColorHover: a2, closeIconColorPressed: o2, closeColorHover: s2, closeColorPressed: c2, closeBorderRadius: m2, tabColor: l2, tabColorSegment: u2, tabBorderColor: d2, tabFontWeightActive: f2, tabFontWeight: f2, tabBorderRadius: m2, paneTextColor: t2, fontWeightStrong: g2 });
}
var un = { name: `Tabs`, common: b, self: ln };
function dn(e3) {
  let { primaryColorHover: t2, borderColor: n2 } = e3;
  return { resizableTriggerColorHover: t2, resizableTriggerColor: n2 };
}
var fn = { name: `Split`, common: b, self: dn }, pn = d(`text`, `
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
 `)]), mn = I({ name: `Text`, props: Object.assign(Object.assign({}, f.props), { code: Boolean, type: { type: String, default: `default` }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), setup(e3) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = ee(e3), r2 = f(`Typography`, `-text`, pn, $e, e3, t2), i2 = F(() => {
    let { depth: t3, type: n3 } = e3, i3 = n3 === `default` ? t3 === void 0 ? `textColor` : `textColor${t3}Depth` : p(`textColor`, n3), { common: { fontWeightStrong: a3, fontFamilyMono: o2, cubicBezierEaseInOut: s2 }, self: { codeTextColor: c2, codeBorderRadius: l2, codeColor: u2, codeBorder: d2, [i3]: f2 } } = r2.value;
    return { "--n-bezier": s2, "--n-text-color": f2, "--n-font-weight-strong": a3, "--n-font-famliy-mono": o2, "--n-code-border-radius": l2, "--n-code-text-color": c2, "--n-code-color": u2, "--n-code-border": d2 };
  }), a2 = n2 ? s(`text`, F(() => `${e3.type[0]}${e3.depth || ``}`), i2, e3) : void 0;
  return { mergedClsPrefix: t2, compitableTag: ie(e3, [`as`, `tag`]), cssVars: n2 ? void 0 : i2, themeClass: a2 == null ? void 0 : a2.themeClass, onRender: a2 == null ? void 0 : a2.onRender };
}, render() {
  var _a2;
  var e3, t2;
  let { mergedClsPrefix: n2 } = this;
  (e3 = this.onRender) == null || e3.call(this);
  let r2 = [`${n2}-text`, this.themeClass, { [`${n2}-text--code`]: this.code, [`${n2}-text--delete`]: this.delete, [`${n2}-text--strong`]: this.strong, [`${n2}-text--italic`]: this.italic, [`${n2}-text--underline`]: this.underline }], i2 = (_a2 = (t2 = this.$slots).default) == null ? void 0 : _a2.call(t2);
  return this.code ? j(`code`, { class: r2, style: this.cssVars }, this.delete ? j(`del`, null, i2) : i2) : this.delete ? j(`del`, { class: r2, style: this.cssVars }, i2) : j(this.compitableTag || `span`, { class: r2, style: this.cssVars }, i2);
} }), G = [];
for (let e3 = 0; e3 < 256; ++e3) G.push((e3 + 256).toString(16).slice(1));
function hn(e3, t2 = 0) {
  return (G[e3[t2 + 0]] + G[e3[t2 + 1]] + G[e3[t2 + 2]] + G[e3[t2 + 3]] + `-` + G[e3[t2 + 4]] + G[e3[t2 + 5]] + `-` + G[e3[t2 + 6]] + G[e3[t2 + 7]] + `-` + G[e3[t2 + 8]] + G[e3[t2 + 9]] + `-` + G[e3[t2 + 10]] + G[e3[t2 + 11]] + G[e3[t2 + 12]] + G[e3[t2 + 13]] + G[e3[t2 + 14]] + G[e3[t2 + 15]]).toLowerCase();
}
var gn, _n = new Uint8Array(16);
function vn() {
  if (!gn) {
    if (typeof crypto > `u` || !crypto.getRandomValues) throw Error(`crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`);
    gn = crypto.getRandomValues.bind(crypto);
  }
  return gn(_n);
}
var yn = { randomUUID: typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function bn(e3, t2, n2) {
  var _a2;
  if (yn.randomUUID && !t2 && !e3) return yn.randomUUID();
  e3 || (e3 = {});
  let r2 = e3.random ?? ((_a2 = e3.rng) == null ? void 0 : _a2.call(e3)) ?? vn();
  if (r2.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (r2[6] = r2[6] & 15 | 64, r2[8] = r2[8] & 63 | 128, t2) {
    if (n2 || (n2 = 0), n2 < 0 || n2 + 16 > t2.length) throw RangeError(`UUID byte range ${n2}:${n2 + 15} is out of buffer bounds`);
    for (let e4 = 0; e4 < 16; ++e4) t2[n2 + e4] = r2[e4];
    return t2;
  }
  return hn(r2);
}
var K = bn;
function q() {
  return { name: `Untitled`, description: `A new geographic item`, creation_timestamp: Date.now(), modification_timestamp: Date.now(), created_by: `anonymous`, modified_by: `anonymous`, tags: [] };
}
function xn() {
  return { ...q(), version: 1, signature: void 0 };
}
var Sn = class e2 {
  constructor(e3 = K(), t2, n2, r2) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routes");
    __publicField(this, "drafts");
    this.id = e3, this.routes = t2 || { id: K(), meta: q(), routes: [] }, this.drafts = n2 || { id: K(), meta: q(), drafts: [] }, this.meta = { ...xn(), ...r2 };
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
}, Cn = class {
  constructor(e3 = [], t2 = K(), n2 = q()) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routesInternal");
    this.id = t2, this.meta = n2 ?? q(), this.routesInternal = e3;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = q()), this.meta.name;
  }
  set name(e3) {
    (this.meta === null || this.meta === void 0) && (this.meta = q()), this.meta.name = e3;
  }
  get routes() {
    return k(this.routesInternal);
  }
  set routes(e3) {
    this.routesInternal = k(e3);
  }
  findRoute(e3) {
    return this.routesInternal.find((t2) => t2.id === e3);
  }
  existRoute(e3) {
    return this.routesInternal.some((t2) => t2.id === e3);
  }
  addRoute(e3) {
    if (this.existRoute(e3.id)) throw Error(`[CartoSketch.Route] Route ${e3.id} already exist`);
    this.routesInternal.push(k(e3)), this.updateModificationTime();
  }
  updateRoute(e3) {
    let t2 = this.routesInternal.findIndex((t3) => t3.id === e3.id);
    if (t2 === -1) throw Error(`[CartoSketch.Route] Route ${e3.id} not found`);
    this.routesInternal[t2] = k(e3), this.updateModificationTime();
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
}, wn = class {
  constructor(e3 = K(), t2 = [], n2 = {}, r2) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "properties");
    __publicField(this, "points");
    this.id = e3, this.meta = { ...q(), record_timespan: 0, ...r2 }, this.properties = n2, this.points = t2;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = q()), this.meta.name;
  }
  set name(e3) {
    (this.meta === null || this.meta === void 0) && (this.meta = q()), this.meta.name = e3;
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
    this.points = k(e3), this.updateModificationTime();
  }
  appendPoint(e3) {
    this.points.push(k(e3)), this.updateModificationTime();
  }
  getPoints() {
    return k(this.points);
  }
  setProperties(e3) {
    let t2 = k(e3);
    Object.assign(this.properties, t2), this.updateModificationTime();
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: `Feature`, properties: { ...this.properties, ...this.meta, description: JSON.stringify({ name: this.meta.name, id: this.id }) }, geometry: { type: `LineString`, coordinates: this.points.map((e3) => [e3.longitude, e3.latitude]) } };
  }
  exportToStorage() {
    return k({ id: this.id, meta: this.meta, properties: this.properties, points: this.points });
  }
};
let J = (function(e3) {
  return e3.MIGRATION_FAILED = `MIGRATION_FAILED`, e3.INVALID_VERSION = `INVALID_VERSION`, e3.UNSUPPORTED_VERSION = `UNSUPPORTED_VERSION`, e3.ROLLBACK_FAILED = `ROLLBACK_FAILED`, e3.VALIDATION_FAILED = `VALIDATION_FAILED`, e3.STRATEGY_NOT_FOUND = `STRATEGY_NOT_FOUND`, e3.DATA_CORRUPTION = `DATA_CORRUPTION`, e3;
})({});
var Y = class extends Se {
  constructor(e3, t2 = J.MIGRATION_FAILED, n2) {
    super(e3, n2);
    __publicField(this, "code");
    __publicField(this, "domain", Ve.GENERIC);
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
}, Tn = class extends Y {
  constructor(e3, t2, n2) {
    super(e3, J.DATA_CORRUPTION, n2), this.corruptedData = t2;
  }
}, En = class extends Y {
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
        if (typeof t2 == `number` && t2 >= 0) return M(t2);
      }
      if (this.isRouteCollectionFormat(e3)) return M(0);
      if (this.isSketchArrayFormat(e3)) return M(1);
      throw Error(`Unable to determine data version`);
    } catch (e4) {
      return A(e4 instanceof X ? e4 : new X(`Failed to extract version from data: ${String(e4)}`, J.INVALID_VERSION, void 0, void 0, e4 instanceof Error ? e4 : Error(String(e4))));
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
      return M(void 0);
    } catch (t2) {
      return A(t2 instanceof X ? t2 : new X(`Version validation failed: ${String(t2)}`, J.INVALID_VERSION, e3, void 0, t2 instanceof Error ? t2 : Error(String(t2))));
    }
  }
  static addVersionMetadata(e3, t2 = this.CURRENT_VERSION) {
    return { ...e3, [this.VERSION_KEY]: { version: t2, timestamp: Date.now(), description: `Version ${t2} data format` } };
  }
  static extractVersionMetadata(e3) {
    try {
      if (typeof e3 == `object` && e3 && this.VERSION_KEY in e3) {
        let t2 = e3[this.VERSION_KEY];
        if (this.isValidVersionInfo(t2)) return M(t2);
      }
      return M(null);
    } catch (e4) {
      return A(e4 instanceof X ? e4 : new X(`Failed to extract version metadata: ${String(e4)}`, J.INVALID_VERSION, void 0, void 0, e4 instanceof Error ? e4 : Error(String(e4))));
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
      if (e3 === t2) return M([]);
      let i2 = [], a2 = e3 < t2 ? 1 : -1;
      for (let n3 = e3; n3 !== t2; n3 += a2) i2.push(n3 + a2);
      return M(i2);
    } catch (n2) {
      return A(n2 instanceof X ? n2 : new X(`Failed to determine migration path: ${String(n2)}`, J.INVALID_VERSION, e3, t2, n2 instanceof Error ? n2 : Error(String(n2))));
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
      return M(t2);
    } catch (t2) {
      return t2 instanceof Z ? A(t2) : A(new Z(`Unexpected validation error: ${String(t2)}`, void 0, e3, t2 instanceof Error ? t2 : Error(String(t2))));
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
      return M(t2);
    } catch (t2) {
      return t2 instanceof Z ? A(t2) : A(new Z(`Unexpected validation error: ${String(t2)}`, void 0, e3, t2 instanceof Error ? t2 : Error(String(t2))));
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
      return M(t2);
    } catch (t2) {
      return t2 instanceof Z ? A(t2) : A(new Z(`Unexpected validation error: ${String(t2)}`, void 0, e3, t2 instanceof Error ? t2 : Error(String(t2))));
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
      return M(e3);
    } catch (t2) {
      return t2 instanceof Z ? A(t2) : A(new Z(`Unexpected validation error: ${String(t2)}`, void 0, e3, t2 instanceof Error ? t2 : Error(String(t2))));
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
        return A(new Z(`Unknown expected format: ${String(t2)}`, `expectedFormat`, t2));
    }
  }
  static checkDataIntegrity(e3, t2) {
    try {
      let n2 = this.validateData(e3, t2);
      return n2.isErr() ? A(new Tn(`Data validation failed: ${n2.error.message}`, e3, n2.error)) : M({ isValid: true, errors: [], warnings: [] });
    } catch (t3) {
      return A(new Tn(`Data integrity check failed: ${String(t3)}`, e3, t3 instanceof Error ? t3 : Error(String(t3))));
    }
  }
}, Dn = class {
  constructor() {
    __publicField(this, "fromVersion", 0);
    __publicField(this, "toVersion", 1);
    __publicField(this, "name", `route-collection-to-sketch`);
  }
  migrate(e3) {
    try {
      let t2 = $.validateRouteCollectionData(e3);
      if (t2.isErr()) return A(new Y(`Invalid route collection data: ${t2.error.message}`, J.VALIDATION_FAILED, t2.error));
      let n2 = t2.value, r2 = new Sn();
      return r2.meta.name = n2.meta.name || `Migrated Routes`, r2.meta.description = n2.meta.description || `Migrated from route collection`, r2.meta.creation_timestamp = n2.meta.creation_timestamp, r2.meta.modification_timestamp = Date.now(), r2.routes = n2, M([r2.toStorage()]);
    } catch (e4) {
      return A(new Y(`Route collection to sketch migration failed: ${String(e4)}`, J.MIGRATION_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  rollback(e3) {
    try {
      let t2 = $.validateSketchArray(e3);
      if (t2.isErr()) return A(new Y(`Invalid sketch array data for rollback: ${t2.error.message}`, J.VALIDATION_FAILED, t2.error));
      let n2 = t2.value;
      if (n2.length === 0) return A(new Y(`Cannot rollback: empty sketch array`, J.MIGRATION_FAILED));
      let r2 = n2[0];
      return M(r2.routes);
    } catch (e4) {
      return A(new Y(`Route collection to sketch rollback failed: ${String(e4)}`, J.ROLLBACK_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  validateBefore(e3) {
    return $.validateRouteCollectionData(e3).map(() => void 0).mapErr((e4) => new Z(`Pre-migration validation failed: ${e4.message}`, e4.field, e4.value, e4));
  }
  validateAfter(e3) {
    return $.validateSketchArray(e3).map(() => void 0).mapErr((e4) => new Z(`Post-migration validation failed: ${e4.message}`, e4.field, e4.value, e4));
  }
}, On = class {
  constructor() {
    __publicField(this, "fromVersion", 1);
    __publicField(this, "toVersion", 2);
    __publicField(this, "name", `sketch-v1-to-v2`);
  }
  migrate() {
    return A(new Y(`Sketch V1 to V2 migration not yet implemented`, J.STRATEGY_NOT_FOUND));
  }
  validateBefore(e3) {
    return $.validateSketchArray(e3).map(() => void 0).mapErr((e4) => new Z(`Pre-migration validation failed: ${e4.message}`, e4.field, e4.value, e4));
  }
  validateAfter(e3) {
    return A(new Z(`Sketch V2 validation not yet implemented`, void 0, e3));
  }
}, kn = (_b = class {
  static register(e3) {
    let t2 = this.getStrategyKey(e3.fromVersion, e3.toVersion);
    this.strategies.set(t2, e3);
  }
  static getStrategy(e3, t2) {
    let n2 = this.getStrategyKey(e3, t2), r2 = this.strategies.get(n2);
    return r2 ? M(r2) : A(new Y(`No migration strategy found for version ${e3} to ${t2}`, J.STRATEGY_NOT_FOUND));
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
}, __publicField(_b, "strategies", /* @__PURE__ */ new Map()), _b.register(new Dn()), _b.register(new On()), _b), An = class {
  static createStrategy(e3, t2) {
    return kn.getStrategy(e3, t2);
  }
  static createStrategiesForPath(e3) {
    try {
      let t2 = [];
      for (let n2 = 0; n2 < e3.length; n2++) {
        let r2 = n2 === 0 ? e3[0] - 1 : e3[n2 - 1], i2 = e3[n2], a2 = this.createStrategy(r2, i2);
        if (a2.isErr()) return A(a2.error);
        t2.push(a2.value);
      }
      return M(t2);
    } catch (e4) {
      return A(new Y(`Failed to create strategies for migration path: ${String(e4)}`, J.MIGRATION_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
}, jn = (_c = class {
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
      if (i2.isErr()) return A(new Y(`Failed to extract current version: ${i2.error.message}`, J.INVALID_VERSION, i2.error));
      let a2 = i2.value;
      if (a2 === t2) return M({ data: e3, fromVersion: a2, toVersion: t2, migratedVersions: [] });
      let o2 = Q.determineMigrationPath(a2, t2);
      if (o2.isErr()) return A(new Y(`Failed to determine migration path: ${o2.error.message}`, J.INVALID_VERSION, o2.error));
      let s2 = o2.value, c2 = An.createStrategiesForPath(s2);
      if (c2.isErr()) return A(c2.error);
      let l2 = c2.value;
      if (r2.validateBefore) {
        let t3 = this.validateDataBeforeMigration(e3, a2);
        if (t3.isErr()) return A(new Y(`Pre-migration validation failed: ${t3.error.message}`, J.VALIDATION_FAILED, t3.error));
      }
      let u2 = r2.enableRollback ? e3 : void 0, d2 = e3, f2 = [];
      for (let e4 of l2) {
        let t3 = this.executeMigrationWithRetry(e4, d2, r2);
        if (t3.isErr()) {
          if (r2.enableRollback && u2) {
            let e5 = this.rollbackToVersion(u2);
            if (e5.isErr()) return A(new En(`Migration failed and rollback also failed: ${e5.error.message}`, t3.error, e5.error));
          }
          return A(t3.error);
        }
        d2 = t3.value, f2.push(e4.toVersion);
      }
      if (r2.validateAfter) {
        let e4 = this.validateDataAfterMigration(d2, t2);
        if (e4.isErr()) return A(new Y(`Post-migration validation failed: ${e4.error.message}`, J.VALIDATION_FAILED, e4.error));
      }
      return M({ data: d2, fromVersion: a2, toVersion: t2, migratedVersions: f2, rollbackData: r2.enableRollback ? u2 : void 0 });
    } catch (e4) {
      return A(new Y(`Migration service error: ${String(e4)}`, J.MIGRATION_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
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
        return M(n3.value);
      } catch (e4) {
        r2 = new Y(`Migration attempt ${i2 + 1} failed: ${String(e4)}`, J.MIGRATION_FAILED, e4 instanceof Error ? e4 : Error(String(e4)));
      }
      i2 < (n2.maxRetries || 0) && n2.retryDelay && console.warn(`Migration failed, retrying in ${n2.retryDelay}ms...`);
    }
    return A(r2 || new Y(`Migration failed after all retry attempts`, J.MIGRATION_FAILED));
  }
  static rollbackToVersion(e3) {
    try {
      return M(e3);
    } catch (e4) {
      return A(new Y(`Rollback failed: ${String(e4)}`, J.ROLLBACK_FAILED, e4 instanceof Error ? e4 : Error(String(e4))));
    }
  }
  static validateDataBeforeMigration(e3, t2) {
    switch (t2) {
      case 0:
        return $.validateRouteCollectionData(e3).map(() => void 0).mapErr((e4) => new Y(`Route collection validation failed: ${e4.message}`, J.VALIDATION_FAILED, e4));
      case 1:
        return $.validateSketchArray(e3).map(() => void 0).mapErr((e4) => new Y(`Sketch array validation failed: ${e4.message}`, J.VALIDATION_FAILED, e4));
      default:
        return A(new Y(`Unknown version for pre-migration validation: ${t2}`, J.VALIDATION_FAILED));
    }
  }
  static validateDataAfterMigration(e3, t2) {
    switch (t2) {
      case 1:
        return $.validateSketchArray(e3).map(() => void 0).mapErr((e4) => new Y(`Sketch array validation failed: ${e4.message}`, J.VALIDATION_FAILED, e4));
      default:
        return A(new Y(`Unknown version for post-migration validation: ${t2}`, J.VALIDATION_FAILED));
    }
  }
  static checkDataIntegrity(e3, t2) {
    return $.checkDataIntegrity(e3, t2);
  }
}, __publicField(_c, "DEFAULT_OPTIONS", { validateBefore: true, validateAfter: true, enableRollback: true, maxRetries: 3, retryDelay: 1e3 }), _c);
const Mn = Me(`sketches`, () => {
  let e3 = N([]), t2 = N(null), n2 = N(null), r2 = F(() => {
    if (!t2.value) return null;
    let n3 = e3.value.find((e4) => e4.id === t2.value);
    return n3 ? new Cn(n3.routes.routes.map((e4) => new wn(e4.id, e4.points, e4.properties, e4.meta)), n3.routes.id, n3.routes.meta) : null;
  }), i2 = F(() => r2.value ? r2.value.routes.map((e4) => ({ id: e4.id, name: e4.name, points: e4.getPoints(), meta: e4.meta })) : []), a2 = F(() => t2.value && e3.value.find((e4) => e4.id === t2.value) || null), o2 = F(() => a2.value ? a2.value.drafts.drafts : []);
  async function s2() {
    let n3 = await Ge(`sketches`);
    if (n3) {
      let r3 = jn.migrateToCurrent(n3, { validateBefore: true, validateAfter: true, enableRollback: true });
      if (r3.isErr()) {
        console.error(`[SketchStore] Data migration failed:`, r3.error), await c2();
        return;
      }
      let i3 = r3.value;
      if (i3.migratedVersions.length > 0 && console.info(`[SketchStore] Successfully migrated data from version ${i3.fromVersion} to ${i3.toVersion}`), Array.isArray(i3.data)) {
        e3.value = i3.data.map((e4) => Sn.fromStorage(e4));
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
    let n3 = new Sn();
    n3.meta.name = `Default Sketch`, e3.value = [n3], t2.value = n3.id, await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R();
  }
  async function l2(t3 = `New Sketch`) {
    let n3 = new Sn();
    return n3.meta.name = t3, e3.value.push(n3), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R(), n3;
  }
  async function u2(t3, n3) {
    let r3 = e3.value.find((e4) => e4.id === t3);
    r3 && (n3.name !== void 0 && r3.updateName(n3.name), n3.description !== void 0 && r3.updateDescription(n3.description), n3.tags !== void 0 && (r3.meta.tags.forEach((e4) => {
      r3.removeTag(e4);
    }), n3.tags.forEach((e4) => {
      r3.addTag(e4);
    })), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R());
  }
  async function d2(n3) {
    let r3 = e3.value.findIndex((e4) => e4.id === n3);
    r3 !== -1 && (e3.value.splice(r3, 1), t2.value === n3 && (t2.value = e3.value.length > 0 ? e3.value[0].id : null), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R());
  }
  function f2(e4) {
    t2.value = e4, n2.value = null;
  }
  async function p2(t3, n3 = {}, r3 = {}) {
    a2.value || await c2();
    let i3 = new wn(void 0, [], n3, r3);
    return i3.meta.name = t3, a2.value && a2.value.routes.routes.push(i3.exportToStorage()), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R(), i3;
  }
  async function m2(t3) {
    if (!a2.value) return;
    let r3 = a2.value.routes.routes.findIndex((e4) => e4.id === t3);
    r3 !== -1 && (a2.value.routes.routes.splice(r3, 1), n2.value === t3 && (n2.value = null), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R());
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
      await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R();
    }
  }
  async function g2(t3, n3) {
    if (!a2.value) return;
    let r3 = a2.value.routes.routes.find((e4) => e4.id === t3);
    r3 && (n3.meta !== void 0 && (r3.meta = { ...r3.meta, ...n3.meta }), n3.properties !== void 0 && (r3.properties = { ...r3.properties, ...n3.properties }), r3.meta.modification_timestamp = Date.now(), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R());
  }
  async function _2(t3) {
    if (!a2.value) return;
    let n3 = a2.value.routes.routes.find((e4) => e4.id === t3);
    n3 && (n3.points = [], n3.meta.modification_timestamp = Date.now(), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R());
  }
  function v2(e4) {
    return a2.value && a2.value.routes.routes.find((t3) => t3.id === e4) || null;
  }
  function y2(e4) {
    n2.value = e4;
  }
  async function b2(t3, n3 = {}, r3 = {}) {
    a2.value || await c2();
    let i3 = { id: crypto.randomUUID(), meta: { ...q(), ...r3 }, shape: t3, properties: n3 };
    return a2.value && a2.value.drafts.drafts.push(i3), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R(), i3;
  }
  async function x2(t3, n3) {
    if (!a2.value) return;
    let r3 = a2.value.drafts.drafts.find((e4) => e4.id === t3);
    r3 && (n3.shape !== void 0 && (r3.shape = n3.shape), n3.properties !== void 0 && (r3.properties = { ...r3.properties, ...n3.properties }), n3.meta !== void 0 && (r3.meta = { ...r3.meta, ...n3.meta }, r3.meta.modification_timestamp = Date.now()), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R());
  }
  async function S2(t3) {
    if (!a2.value) return;
    let n3 = a2.value.drafts.drafts.findIndex((e4) => e4.id === t3);
    n3 !== -1 && (a2.value.drafts.drafts.splice(n3, 1), await z(`sketches`, e3.value.map((e4) => e4.toStorage())), await R());
  }
  function C2(e4) {
    return a2.value && a2.value.drafts.drafts.find((t3) => t3.id === e4) || null;
  }
  function w2() {
    return a2.value ? a2.value.routes.routes.map((e4) => e4.id) : [];
  }
  function T2() {
    return a2.value ? a2.value.drafts.drafts.map((e4) => e4.id) : [];
  }
  return { sketches: e3, currentSketchId: t2, currentRouteId: n2, routeCollection: r2, routes: i2, currentSketch: a2, currentDrafts: o2, init: s2, createSketch: l2, updateSketch: u2, deleteSketch: d2, setCurrentSketchId: f2, addRoute: p2, deleteRoute: m2, addPointToRoute: h2, updateRoute: g2, clearRoutePoints: _2, getRouteById: v2, setCurrentRouteId: y2, listRouteIDs: w2, addDraft: b2, updateDraft: x2, deleteDraft: S2, getDraftById: C2, listDraftIDs: T2 };
});
export {
  St as A,
  Nt as C,
  Dt as D,
  Ot as E,
  pt as F,
  lt as I,
  it as L,
  xt as M,
  bt as N,
  Et as O,
  yt as P,
  tt as R,
  Pt as S,
  kt as T,
  Gt as _,
  ln as a,
  Ft as b,
  nn as c,
  Zt as d,
  Xt as f,
  qt as g,
  Kt as h,
  un as i,
  wt as j,
  Ct as k,
  tn as l,
  Jt as m,
  mn as n,
  sn as o,
  Yt as p,
  fn as r,
  an as s,
  Mn as t,
  $t as u,
  Wt as v,
  Mt as w,
  Lt as x,
  It as y
};
