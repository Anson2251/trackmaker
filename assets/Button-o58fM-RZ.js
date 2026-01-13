import { F as e, I as t, L as n, M as r, O as i, P as a, R as o, S as s, T as c, _ as l, dt as u, f as d, gt as f, h as p, ht as m, m as h, mt as g, o as _, p as v, pt as y, s as b, ut as x, y as S, z as C } from "./Card-nhqq8IKa.js";
import { Bt as w, Et as T, Ft as E, Mt as D, Ot as O, an as k, cn as A, gt as j, rt as M, wt as N } from "./index-DTVnoW_1.js";
const P = e(`n-form-item`);
function F(e2, { defaultSize: t2 = `medium`, mergedSize: n2, mergedDisabled: r2 } = {}) {
  let i2 = O(P, null);
  w(P, null);
  let a2 = j(n2 ? () => n2(i2) : () => {
    let { size: n3 } = e2;
    if (n3) return n3;
    if (i2) {
      let { mergedSize: e3 } = i2;
      if (e3.value !== void 0) return e3.value;
    }
    return t2;
  }), o2 = j(r2 ? () => r2(i2) : () => {
    let { disabled: t3 } = e2;
    return t3 === void 0 ? i2 ? i2.disabled.value : false : t3;
  }), s2 = j(() => {
    let { status: t3 } = e2;
    return t3 || (i2 == null ? void 0 : i2.mergedValidationStatus.value);
  });
  return E(() => {
    i2 && i2.restoreValidation();
  }), { mergedSizeRef: a2, mergedDisabledRef: o2, mergedStatusRef: s2, nTriggerFormBlur() {
    i2 && i2.handleContentBlur();
  }, nTriggerFormChange() {
    i2 && i2.handleContentChange();
  }, nTriggerFormFocus() {
    i2 && i2.handleContentFocus();
  }, nTriggerFormInput() {
    i2 && i2.handleContentInput();
  } };
}
var I = N({ name: `BaseIconSwitchTransition`, setup(e2, { slots: n2 }) {
  let r2 = t();
  return () => T(M, { name: `icon-switch-transition`, appear: r2.value }, n2);
} }), { cubicBezierEaseInOut: L } = h;
function R({ originalTransform: e2 = ``, left: t2 = 0, top: n2 = 0, transition: r2 = `all .3s ${L} !important` } = {}) {
  return [x(`&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to`, { transform: `${e2} scale(0.75)`, left: t2, top: n2, opacity: 0 }), x(`&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from`, { transform: `scale(1) ${e2}`, left: t2, top: n2, opacity: 1 }), x(`&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active`, { transformOrigin: `center`, position: `absolute`, left: t2, top: n2, transition: r2 })];
}
var z = x([x(`@keyframes rotator`, `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), u(`base-loading`, `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [y(`transition-wrapper`, `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [R()]), y(`placeholder`, `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [R({ left: `50%`, top: `50%`, originalTransform: `translateX(-50%) translateY(-50%)` })]), y(`container`, `
 animation: rotator 3s linear infinite both;
 `, [y(`icon`, `
 height: 1em;
 width: 1em;
 `)])])]), B = `1.6s`, V = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, H = N({ name: `BaseLoading`, props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, V), setup(e2) {
  v(`-base-loading`, z, A(e2, `clsPrefix`));
}, render() {
  let { clsPrefix: e2, radius: t2, strokeWidth: n2, stroke: r2, scale: i2 } = this, a2 = t2 / i2;
  return T(`div`, { class: `${e2}-base-loading`, role: `img`, "aria-label": `loading` }, T(I, null, { default: () => this.show ? T(`div`, { key: `icon`, class: `${e2}-base-loading__transition-wrapper` }, T(`div`, { class: `${e2}-base-loading__container` }, T(`svg`, { class: `${e2}-base-loading__icon`, viewBox: `0 0 ${2 * a2} ${2 * a2}`, xmlns: `http://www.w3.org/2000/svg`, style: { color: r2 } }, T(`g`, null, T(`animateTransform`, { attributeName: `transform`, type: `rotate`, values: `0 ${a2} ${a2};270 ${a2} ${a2}`, begin: `0s`, dur: B, fill: `freeze`, repeatCount: `indefinite` }), T(`circle`, { class: `${e2}-base-loading__icon`, fill: `none`, stroke: `currentColor`, "stroke-width": n2, "stroke-linecap": `round`, cx: a2, cy: a2, r: t2 - n2 / 2, "stroke-dasharray": 5.67 * t2, "stroke-dashoffset": 18.48 * t2 }, T(`animateTransform`, { attributeName: `transform`, type: `rotate`, values: `0 ${a2} ${a2};135 ${a2} ${a2};450 ${a2} ${a2}`, begin: `0s`, dur: B, fill: `freeze`, repeatCount: `indefinite` }), T(`animate`, { attributeName: `stroke-dashoffset`, values: `${5.67 * t2};${1.42 * t2};${5.67 * t2}`, begin: `0s`, dur: B, fill: `freeze`, repeatCount: `indefinite` })))))) : T(`div`, { key: `placeholder`, class: `${e2}-base-loading__placeholder` }, this.$slots) }));
} }), { cubicBezierEaseInOut: U } = h;
function W({ duration: e2 = `.2s`, delay: t2 = `.1s` } = {}) {
  return [x(`&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to`, { opacity: 1 }), x(`&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from`, `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), x(`&.fade-in-width-expand-transition-leave-active`, `
 overflow: hidden;
 transition:
 opacity ${e2} ${U},
 max-width ${e2} ${U} ${t2},
 margin-left ${e2} ${U} ${t2},
 margin-right ${e2} ${U} ${t2};
 `), x(`&.fade-in-width-expand-transition-enter-active`, `
 overflow: hidden;
 transition:
 opacity ${e2} ${U} ${t2},
 max-width ${e2} ${U},
 margin-left ${e2} ${U},
 margin-right ${e2} ${U};
 `)];
}
var G = u(`base-wave`, `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), K = N({ name: `BaseWave`, props: { clsPrefix: { type: String, required: true } }, setup(e2) {
  v(`-base-wave`, G, A(e2, `clsPrefix`));
  let t2 = k(null), n2 = k(false), r2 = null;
  return E(() => {
    r2 !== null && window.clearTimeout(r2);
  }), { active: n2, selfRef: t2, play() {
    r2 !== null && (window.clearTimeout(r2), n2.value = false, r2 = null), D(() => {
      var e3;
      (e3 = t2.value) == null || e3.offsetHeight, n2.value = true, r2 = window.setTimeout(() => {
        n2.value = false, r2 = null;
      }, 1e3);
    });
  } };
}, render() {
  let { clsPrefix: e2 } = this;
  return T(`div`, { ref: `selfRef`, "aria-hidden": true, class: [`${e2}-base-wave`, this.active && `${e2}-base-wave--active`] });
} });
const ee = a && `chrome` in window;
a && navigator.userAgent.includes(`Firefox`);
const q = a && navigator.userAgent.includes(`Safari`) && !ee;
function J(e2) {
  return C(e2, [255, 255, 255, 0.16]);
}
function Y(e2) {
  return C(e2, [0, 0, 0, 0.12]);
}
const X = e(`n-button-group`);
var te = { paddingTiny: `0 6px`, paddingSmall: `0 10px`, paddingMedium: `0 14px`, paddingLarge: `0 18px`, paddingRoundTiny: `0 10px`, paddingRoundSmall: `0 14px`, paddingRoundMedium: `0 18px`, paddingRoundLarge: `0 22px`, iconMarginTiny: `6px`, iconMarginSmall: `6px`, iconMarginMedium: `6px`, iconMarginLarge: `6px`, iconSizeTiny: `14px`, iconSizeSmall: `18px`, iconSizeMedium: `18px`, iconSizeLarge: `20px`, rippleDuration: `.6s` };
function Z(e2) {
  let { heightTiny: t2, heightSmall: n2, heightMedium: r2, heightLarge: i2, borderRadius: a2, fontSizeTiny: o2, fontSizeSmall: s2, fontSizeMedium: c2, fontSizeLarge: l2, opacityDisabled: u2, textColor2: d2, textColor3: f2, primaryColorHover: p2, primaryColorPressed: m2, borderColor: h2, primaryColor: g2, baseColor: _2, infoColor: v2, infoColorHover: y2, infoColorPressed: b2, successColor: x2, successColorHover: S2, successColorPressed: C2, warningColor: w2, warningColorHover: T2, warningColorPressed: E2, errorColor: D2, errorColorHover: O2, errorColorPressed: k2, fontWeight: A2, buttonColor2: j2, buttonColor2Hover: M2, buttonColor2Pressed: N2, fontWeightStrong: P2 } = e2;
  return Object.assign(Object.assign({}, te), { heightTiny: t2, heightSmall: n2, heightMedium: r2, heightLarge: i2, borderRadiusTiny: a2, borderRadiusSmall: a2, borderRadiusMedium: a2, borderRadiusLarge: a2, fontSizeTiny: o2, fontSizeSmall: s2, fontSizeMedium: c2, fontSizeLarge: l2, opacityDisabled: u2, colorOpacitySecondary: `0.16`, colorOpacitySecondaryHover: `0.22`, colorOpacitySecondaryPressed: `0.28`, colorSecondary: j2, colorSecondaryHover: M2, colorSecondaryPressed: N2, colorTertiary: j2, colorTertiaryHover: M2, colorTertiaryPressed: N2, colorQuaternary: `#0000`, colorQuaternaryHover: M2, colorQuaternaryPressed: N2, color: `#0000`, colorHover: `#0000`, colorPressed: `#0000`, colorFocus: `#0000`, colorDisabled: `#0000`, textColor: d2, textColorTertiary: f2, textColorHover: p2, textColorPressed: m2, textColorFocus: p2, textColorDisabled: d2, textColorText: d2, textColorTextHover: p2, textColorTextPressed: m2, textColorTextFocus: p2, textColorTextDisabled: d2, textColorGhost: d2, textColorGhostHover: p2, textColorGhostPressed: m2, textColorGhostFocus: p2, textColorGhostDisabled: d2, border: `1px solid ${h2}`, borderHover: `1px solid ${p2}`, borderPressed: `1px solid ${m2}`, borderFocus: `1px solid ${p2}`, borderDisabled: `1px solid ${h2}`, rippleColor: g2, colorPrimary: g2, colorHoverPrimary: p2, colorPressedPrimary: m2, colorFocusPrimary: p2, colorDisabledPrimary: g2, textColorPrimary: _2, textColorHoverPrimary: _2, textColorPressedPrimary: _2, textColorFocusPrimary: _2, textColorDisabledPrimary: _2, textColorTextPrimary: g2, textColorTextHoverPrimary: p2, textColorTextPressedPrimary: m2, textColorTextFocusPrimary: p2, textColorTextDisabledPrimary: d2, textColorGhostPrimary: g2, textColorGhostHoverPrimary: p2, textColorGhostPressedPrimary: m2, textColorGhostFocusPrimary: p2, textColorGhostDisabledPrimary: g2, borderPrimary: `1px solid ${g2}`, borderHoverPrimary: `1px solid ${p2}`, borderPressedPrimary: `1px solid ${m2}`, borderFocusPrimary: `1px solid ${p2}`, borderDisabledPrimary: `1px solid ${g2}`, rippleColorPrimary: g2, colorInfo: v2, colorHoverInfo: y2, colorPressedInfo: b2, colorFocusInfo: y2, colorDisabledInfo: v2, textColorInfo: _2, textColorHoverInfo: _2, textColorPressedInfo: _2, textColorFocusInfo: _2, textColorDisabledInfo: _2, textColorTextInfo: v2, textColorTextHoverInfo: y2, textColorTextPressedInfo: b2, textColorTextFocusInfo: y2, textColorTextDisabledInfo: d2, textColorGhostInfo: v2, textColorGhostHoverInfo: y2, textColorGhostPressedInfo: b2, textColorGhostFocusInfo: y2, textColorGhostDisabledInfo: v2, borderInfo: `1px solid ${v2}`, borderHoverInfo: `1px solid ${y2}`, borderPressedInfo: `1px solid ${b2}`, borderFocusInfo: `1px solid ${y2}`, borderDisabledInfo: `1px solid ${v2}`, rippleColorInfo: v2, colorSuccess: x2, colorHoverSuccess: S2, colorPressedSuccess: C2, colorFocusSuccess: S2, colorDisabledSuccess: x2, textColorSuccess: _2, textColorHoverSuccess: _2, textColorPressedSuccess: _2, textColorFocusSuccess: _2, textColorDisabledSuccess: _2, textColorTextSuccess: x2, textColorTextHoverSuccess: S2, textColorTextPressedSuccess: C2, textColorTextFocusSuccess: S2, textColorTextDisabledSuccess: d2, textColorGhostSuccess: x2, textColorGhostHoverSuccess: S2, textColorGhostPressedSuccess: C2, textColorGhostFocusSuccess: S2, textColorGhostDisabledSuccess: x2, borderSuccess: `1px solid ${x2}`, borderHoverSuccess: `1px solid ${S2}`, borderPressedSuccess: `1px solid ${C2}`, borderFocusSuccess: `1px solid ${S2}`, borderDisabledSuccess: `1px solid ${x2}`, rippleColorSuccess: x2, colorWarning: w2, colorHoverWarning: T2, colorPressedWarning: E2, colorFocusWarning: T2, colorDisabledWarning: w2, textColorWarning: _2, textColorHoverWarning: _2, textColorPressedWarning: _2, textColorFocusWarning: _2, textColorDisabledWarning: _2, textColorTextWarning: w2, textColorTextHoverWarning: T2, textColorTextPressedWarning: E2, textColorTextFocusWarning: T2, textColorTextDisabledWarning: d2, textColorGhostWarning: w2, textColorGhostHoverWarning: T2, textColorGhostPressedWarning: E2, textColorGhostFocusWarning: T2, textColorGhostDisabledWarning: w2, borderWarning: `1px solid ${w2}`, borderHoverWarning: `1px solid ${T2}`, borderPressedWarning: `1px solid ${E2}`, borderFocusWarning: `1px solid ${T2}`, borderDisabledWarning: `1px solid ${w2}`, rippleColorWarning: w2, colorError: D2, colorHoverError: O2, colorPressedError: k2, colorFocusError: O2, colorDisabledError: D2, textColorError: _2, textColorHoverError: _2, textColorPressedError: _2, textColorFocusError: _2, textColorDisabledError: _2, textColorTextError: D2, textColorTextHoverError: O2, textColorTextPressedError: k2, textColorTextFocusError: O2, textColorTextDisabledError: d2, textColorGhostError: D2, textColorGhostHoverError: O2, textColorGhostPressedError: k2, textColorGhostFocusError: O2, textColorGhostDisabledError: D2, borderError: `1px solid ${D2}`, borderHoverError: `1px solid ${O2}`, borderPressedError: `1px solid ${k2}`, borderFocusError: `1px solid ${O2}`, borderDisabledError: `1px solid ${D2}`, rippleColorError: D2, waveOpacity: `0.6`, fontWeight: A2, fontWeightStrong: P2 });
}
var Q = { name: `Button`, common: _, self: Z }, ne = x([u(`button`, `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [g(`color`, [y(`border`, { borderColor: `var(--n-border-color)` }), g(`disabled`, [y(`border`, { borderColor: `var(--n-border-color-disabled)` })]), m(`disabled`, [x(`&:focus`, [y(`state-border`, { borderColor: `var(--n-border-color-focus)` })]), x(`&:hover`, [y(`state-border`, { borderColor: `var(--n-border-color-hover)` })]), x(`&:active`, [y(`state-border`, { borderColor: `var(--n-border-color-pressed)` })]), g(`pressed`, [y(`state-border`, { borderColor: `var(--n-border-color-pressed)` })])])]), g(`disabled`, { backgroundColor: `var(--n-color-disabled)`, color: `var(--n-text-color-disabled)` }, [y(`border`, { border: `var(--n-border-disabled)` })]), m(`disabled`, [x(`&:focus`, { backgroundColor: `var(--n-color-focus)`, color: `var(--n-text-color-focus)` }, [y(`state-border`, { border: `var(--n-border-focus)` })]), x(`&:hover`, { backgroundColor: `var(--n-color-hover)`, color: `var(--n-text-color-hover)` }, [y(`state-border`, { border: `var(--n-border-hover)` })]), x(`&:active`, { backgroundColor: `var(--n-color-pressed)`, color: `var(--n-text-color-pressed)` }, [y(`state-border`, { border: `var(--n-border-pressed)` })]), g(`pressed`, { backgroundColor: `var(--n-color-pressed)`, color: `var(--n-text-color-pressed)` }, [y(`state-border`, { border: `var(--n-border-pressed)` })])]), g(`loading`, `cursor: wait;`), u(`base-wave`, `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [g(`active`, { zIndex: 1, animationName: `button-wave-spread, button-wave-opacity` })]), a && `MozBoxSizing` in document.createElement(`div`).style ? x(`&::moz-focus-inner`, { border: 0 }) : null, y(`border, state-border`, `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), y(`border`, `
 border: var(--n-border);
 `), y(`state-border`, `
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `), y(`icon`, `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [u(`icon-slot`, `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [R({ top: `50%`, originalTransform: `translateY(-50%)` })]), W()]), y(`content`, `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [x(`~`, [y(`icon`, { margin: `var(--n-icon-margin)`, marginRight: 0 })])]), g(`block`, `
 display: flex;
 width: 100%;
 `), g(`dashed`, [y(`border, state-border`, { borderStyle: `dashed !important` })]), g(`disabled`, { cursor: `not-allowed`, opacity: `var(--n-opacity-disabled)` })]), x(`@keyframes button-wave-spread`, { from: { boxShadow: `0 0 0.5px 0 var(--n-ripple-color)` }, to: { boxShadow: `0 0 0.5px 4.5px var(--n-ripple-color)` } }), x(`@keyframes button-wave-opacity`, { from: { opacity: `var(--n-wave-opacity)` }, to: { opacity: 0 } })]), $ = N({ name: `Button`, props: Object.assign(Object.assign({}, d.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: `button` }, type: { type: String, default: `default` }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: `left` }, attrType: { type: String, default: `button` }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !q } }), slots: Object, setup(e2) {
  let t2 = k(null), a2 = k(null), s2 = k(false), c2 = n(() => !e2.quaternary && !e2.tertiary && !e2.secondary && !e2.text && (!e2.color || e2.ghost || e2.dashed) && e2.bordered), u2 = O(X, {}), { mergedSizeRef: m2 } = F({}, { defaultSize: `medium`, mergedSize: (t3) => {
    let { size: n2 } = e2;
    if (n2) return n2;
    let { size: r2 } = u2;
    if (r2) return r2;
    let { mergedSize: i2 } = t3 || {};
    return i2 ? i2.value : `medium`;
  } }), h2 = j(() => e2.focusable && !e2.disabled), g2 = (n2) => {
    var r2;
    h2.value || n2.preventDefault(), !e2.nativeFocusBehavior && (n2.preventDefault(), !e2.disabled && h2.value && ((r2 = t2.value) == null || r2.focus({ preventScroll: true })));
  }, _2 = (t3) => {
    var n2;
    if (!e2.disabled && !e2.loading) {
      let { onClick: r2 } = e2;
      r2 && i(r2, t3), e2.text || (n2 = a2.value) == null || n2.play();
    }
  }, v2 = (t3) => {
    switch (t3.key) {
      case `Enter`:
        if (!e2.keyboard) return;
        s2.value = false;
    }
  }, y2 = (t3) => {
    switch (t3.key) {
      case `Enter`:
        if (!e2.keyboard || e2.loading) {
          t3.preventDefault();
          return;
        }
        s2.value = true;
    }
  }, b2 = () => {
    s2.value = false;
  }, { inlineThemeDisabled: x2, mergedClsPrefixRef: C2, mergedRtlRef: w2 } = S(e2), T2 = d(`Button`, `-button`, ne, Q, e2, C2), E2 = p(`Button`, w2, C2), D2 = j(() => {
    let { common: { cubicBezierEaseInOut: t3, cubicBezierEaseOut: n2 }, self: r2 } = T2.value, { rippleDuration: i2, opacityDisabled: a3, fontWeight: s3, fontWeightStrong: c3 } = r2, l2 = m2.value, { dashed: u3, type: d2, ghost: p2, text: h3, color: g3, round: _3, circle: v3, textColor: y3, secondary: b3, tertiary: x3, quaternary: S2, strong: C3 } = e2, w3 = { "--n-font-weight": C3 ? c3 : s3 }, E3 = { "--n-color": `initial`, "--n-color-hover": `initial`, "--n-color-pressed": `initial`, "--n-color-focus": `initial`, "--n-color-disabled": `initial`, "--n-ripple-color": `initial`, "--n-text-color": `initial`, "--n-text-color-hover": `initial`, "--n-text-color-pressed": `initial`, "--n-text-color-focus": `initial`, "--n-text-color-disabled": `initial` }, D3 = d2 === `tertiary`, O2 = d2 === `default`, k2 = D3 ? `default` : d2;
    if (h3) {
      let e3 = y3 || g3, t4 = e3 || r2[f(`textColorText`, k2)];
      E3 = { "--n-color": `#0000`, "--n-color-hover": `#0000`, "--n-color-pressed": `#0000`, "--n-color-focus": `#0000`, "--n-color-disabled": `#0000`, "--n-ripple-color": `#0000`, "--n-text-color": t4, "--n-text-color-hover": e3 ? J(e3) : r2[f(`textColorTextHover`, k2)], "--n-text-color-pressed": e3 ? Y(e3) : r2[f(`textColorTextPressed`, k2)], "--n-text-color-focus": e3 ? J(e3) : r2[f(`textColorTextHover`, k2)], "--n-text-color-disabled": e3 || r2[f(`textColorTextDisabled`, k2)] };
    } else if (p2 || u3) {
      let e3 = y3 || g3;
      E3 = { "--n-color": `#0000`, "--n-color-hover": `#0000`, "--n-color-pressed": `#0000`, "--n-color-focus": `#0000`, "--n-color-disabled": `#0000`, "--n-ripple-color": g3 || r2[f(`rippleColor`, k2)], "--n-text-color": e3 || r2[f(`textColorGhost`, k2)], "--n-text-color-hover": e3 ? J(e3) : r2[f(`textColorGhostHover`, k2)], "--n-text-color-pressed": e3 ? Y(e3) : r2[f(`textColorGhostPressed`, k2)], "--n-text-color-focus": e3 ? J(e3) : r2[f(`textColorGhostHover`, k2)], "--n-text-color-disabled": e3 || r2[f(`textColorGhostDisabled`, k2)] };
    } else if (b3) {
      let e3 = O2 ? r2.textColor : D3 ? r2.textColorTertiary : r2[f(`color`, k2)], t4 = g3 || e3, n3 = d2 !== `default` && d2 !== `tertiary`;
      E3 = { "--n-color": n3 ? o(t4, { alpha: Number(r2.colorOpacitySecondary) }) : r2.colorSecondary, "--n-color-hover": n3 ? o(t4, { alpha: Number(r2.colorOpacitySecondaryHover) }) : r2.colorSecondaryHover, "--n-color-pressed": n3 ? o(t4, { alpha: Number(r2.colorOpacitySecondaryPressed) }) : r2.colorSecondaryPressed, "--n-color-focus": n3 ? o(t4, { alpha: Number(r2.colorOpacitySecondaryHover) }) : r2.colorSecondaryHover, "--n-color-disabled": r2.colorSecondary, "--n-ripple-color": `#0000`, "--n-text-color": t4, "--n-text-color-hover": t4, "--n-text-color-pressed": t4, "--n-text-color-focus": t4, "--n-text-color-disabled": t4 };
    } else if (x3 || S2) {
      let e3 = O2 ? r2.textColor : D3 ? r2.textColorTertiary : r2[f(`color`, k2)], t4 = g3 || e3;
      x3 ? (E3[`--n-color`] = r2.colorTertiary, E3[`--n-color-hover`] = r2.colorTertiaryHover, E3[`--n-color-pressed`] = r2.colorTertiaryPressed, E3[`--n-color-focus`] = r2.colorSecondaryHover, E3[`--n-color-disabled`] = r2.colorTertiary) : (E3[`--n-color`] = r2.colorQuaternary, E3[`--n-color-hover`] = r2.colorQuaternaryHover, E3[`--n-color-pressed`] = r2.colorQuaternaryPressed, E3[`--n-color-focus`] = r2.colorQuaternaryHover, E3[`--n-color-disabled`] = r2.colorQuaternary), E3[`--n-ripple-color`] = `#0000`, E3[`--n-text-color`] = t4, E3[`--n-text-color-hover`] = t4, E3[`--n-text-color-pressed`] = t4, E3[`--n-text-color-focus`] = t4, E3[`--n-text-color-disabled`] = t4;
    } else E3 = { "--n-color": g3 || r2[f(`color`, k2)], "--n-color-hover": g3 ? J(g3) : r2[f(`colorHover`, k2)], "--n-color-pressed": g3 ? Y(g3) : r2[f(`colorPressed`, k2)], "--n-color-focus": g3 ? J(g3) : r2[f(`colorFocus`, k2)], "--n-color-disabled": g3 || r2[f(`colorDisabled`, k2)], "--n-ripple-color": g3 || r2[f(`rippleColor`, k2)], "--n-text-color": y3 || (g3 ? r2.textColorPrimary : D3 ? r2.textColorTertiary : r2[f(`textColor`, k2)]), "--n-text-color-hover": y3 || (g3 ? r2.textColorHoverPrimary : r2[f(`textColorHover`, k2)]), "--n-text-color-pressed": y3 || (g3 ? r2.textColorPressedPrimary : r2[f(`textColorPressed`, k2)]), "--n-text-color-focus": y3 || (g3 ? r2.textColorFocusPrimary : r2[f(`textColorFocus`, k2)]), "--n-text-color-disabled": y3 || (g3 ? r2.textColorDisabledPrimary : r2[f(`textColorDisabled`, k2)]) };
    let A3 = { "--n-border": `initial`, "--n-border-hover": `initial`, "--n-border-pressed": `initial`, "--n-border-focus": `initial`, "--n-border-disabled": `initial` };
    A3 = h3 ? { "--n-border": `none`, "--n-border-hover": `none`, "--n-border-pressed": `none`, "--n-border-focus": `none`, "--n-border-disabled": `none` } : { "--n-border": r2[f(`border`, k2)], "--n-border-hover": r2[f(`borderHover`, k2)], "--n-border-pressed": r2[f(`borderPressed`, k2)], "--n-border-focus": r2[f(`borderFocus`, k2)], "--n-border-disabled": r2[f(`borderDisabled`, k2)] };
    let { [f(`height`, l2)]: j2, [f(`fontSize`, l2)]: M2, [f(`padding`, l2)]: N2, [f(`paddingRound`, l2)]: P2, [f(`iconSize`, l2)]: F2, [f(`borderRadius`, l2)]: I2, [f(`iconMargin`, l2)]: L2, waveOpacity: R2 } = r2, z2 = { "--n-width": v3 && !h3 ? j2 : `initial`, "--n-height": h3 ? `initial` : j2, "--n-font-size": M2, "--n-padding": v3 || h3 ? `initial` : _3 ? P2 : N2, "--n-icon-size": F2, "--n-icon-margin": L2, "--n-border-radius": h3 ? `initial` : v3 || _3 ? j2 : I2 };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": t3, "--n-bezier-ease-out": n2, "--n-ripple-duration": i2, "--n-opacity-disabled": a3, "--n-wave-opacity": R2 }, w3), E3), A3), z2);
  }), A2 = x2 ? l(`button`, j(() => {
    let t3 = ``, { dashed: n2, type: i2, ghost: a3, text: o2, color: s3, round: c3, circle: l2, textColor: u3, secondary: d2, tertiary: f2, quaternary: p2, strong: h3 } = e2;
    n2 && (t3 += `a`), a3 && (t3 += `b`), o2 && (t3 += `c`), c3 && (t3 += `d`), l2 && (t3 += `e`), d2 && (t3 += `f`), f2 && (t3 += `g`), p2 && (t3 += `h`), h3 && (t3 += `i`), s3 && (t3 += `j${r(s3)}`), u3 && (t3 += `k${r(u3)}`);
    let { value: g3 } = m2;
    return t3 += `l${g3[0]}`, t3 += `m${i2[0]}`, t3;
  }), D2, e2) : void 0;
  return { selfElRef: t2, waveElRef: a2, mergedClsPrefix: C2, mergedFocusable: h2, mergedSize: m2, showBorder: c2, enterPressed: s2, rtlEnabled: E2, handleMousedown: g2, handleKeydown: y2, handleBlur: b2, handleKeyup: v2, handleClick: _2, customColorCssVars: j(() => {
    let { color: t3 } = e2;
    if (!t3) return null;
    let n2 = J(t3);
    return { "--n-border-color": t3, "--n-border-color-hover": n2, "--n-border-color-pressed": Y(t3), "--n-border-color-focus": n2, "--n-border-color-disabled": t3 };
  }), cssVars: x2 ? void 0 : D2, themeClass: A2 == null ? void 0 : A2.themeClass, onRender: A2 == null ? void 0 : A2.onRender };
}, render() {
  let { mergedClsPrefix: e2, tag: t2, onRender: n2 } = this;
  n2 == null ? void 0 : n2();
  let r2 = c(this.$slots.default, (t3) => t3 && T(`span`, { class: `${e2}-button__content` }, t3));
  return T(t2, { ref: `selfElRef`, class: [this.themeClass, `${e2}-button`, `${e2}-button--${this.type}-type`, `${e2}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e2}-button--rtl`, this.disabled && `${e2}-button--disabled`, this.block && `${e2}-button--block`, this.enterPressed && `${e2}-button--pressed`, !this.text && this.dashed && `${e2}-button--dashed`, this.color && `${e2}-button--color`, this.secondary && `${e2}-button--secondary`, this.loading && `${e2}-button--loading`, this.ghost && `${e2}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === `right` && r2, T(b, { width: true }, { default: () => c(this.$slots.icon, (t3) => (this.loading || this.renderIcon || t3) && T(`span`, { class: `${e2}-button__icon`, style: { margin: s(this.$slots.default) ? `0` : `` } }, T(I, null, { default: () => this.loading ? T(H, { clsPrefix: e2, key: `loading`, class: `${e2}-icon-slot`, strokeWidth: 20 }) : T(`div`, { key: `icon`, class: `${e2}-icon-slot`, role: `none` }, this.renderIcon ? this.renderIcon() : t3) }))) }), this.iconPlacement === `left` && r2, this.text ? null : T(K, { ref: `waveElRef`, clsPrefix: e2 }), this.showBorder ? T(`div`, { "aria-hidden": true, class: `${e2}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? T(`div`, { "aria-hidden": true, class: `${e2}-button__state-border`, style: this.customColorCssVars }) : null);
} }), re = $;
const ie = $;
export {
  X as a,
  R as c,
  F as d,
  Z as i,
  I as l,
  ie as n,
  q as o,
  Q as r,
  H as s,
  re as t,
  P as u
};
