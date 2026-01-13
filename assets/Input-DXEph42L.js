import { C as e, F as t, L as n, O as r, T as i, _ as a, dt as o, f as s, gt as c, h as l, ht as u, mt as d, ot as ee, p as te, pt as f, u as p, ut as m, w as h, y as ne } from "./Card-nhqq8IKa.js";
import { J as g, S as _, U as re, Y as v, d as y } from "./Tooltip-DGge0ha1.js";
import { Bt as ie, Et as b, Jt as x, Lt as S, Mt as C, Ot as w, Tt as ae, Yt as T, an as E, cn as D, dt as O, gt as k, wt as A } from "./index-DTVnoW_1.js";
import { d as oe, o as se } from "./Button-o58fM-RZ.js";
import { t as ce } from "./use-locale-C5hleQcp.js";
import { n as j, t as M } from "./Suffix-CoOQonUz.js";
import { r as le } from "./light-CQB9eEMb.js";
var N = A({ name: `Eye`, render() {
  return b(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 512 512` }, b(`path`, { d: `M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z`, fill: `none`, stroke: `currentColor`, "stroke-linecap": `round`, "stroke-linejoin": `round`, "stroke-width": `32` }), b(`circle`, { cx: `256`, cy: `256`, r: `80`, fill: `none`, stroke: `currentColor`, "stroke-miterlimit": `10`, "stroke-width": `32` }));
} }), P = A({ name: `EyeOff`, render() {
  return b(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 512 512` }, b(`path`, { d: `M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z`, fill: `currentColor` }), b(`path`, { d: `M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z`, fill: `currentColor` }), b(`path`, { d: `M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z`, fill: `currentColor` }), b(`path`, { d: `M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z`, fill: `currentColor` }), b(`path`, { d: `M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z`, fill: `currentColor` }));
} });
const F = t(`n-input`);
var ue = o(`input`, `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [f(`input, textarea`, `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `), f(`input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder`, `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `), f(`input-el, textarea-el`, `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [m(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`, `
 width: 0;
 height: 0;
 display: none;
 `), m(`&::placeholder`, `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), m(`&:-webkit-autofill ~`, [f(`placeholder`, `display: none;`)])]), d(`round`, [u(`textarea`, `border-radius: calc(var(--n-height) / 2);`)]), f(`placeholder`, `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [m(`span`, `
 width: 100%;
 display: inline-block;
 `)]), d(`textarea`, [f(`placeholder`, `overflow: visible;`)]), u(`autosize`, `width: 100%;`), d(`autosize`, [f(`textarea-el, input-el`, `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]), o(`input-wrapper`, `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `), f(`input-mirror`, `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `), f(`input-el`, `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [m(`&[type=password]::-ms-reveal`, `display: none;`), m(`+`, [f(`placeholder`, `
 display: flex;
 align-items: center; 
 `)])]), u(`textarea`, [f(`placeholder`, `white-space: nowrap;`)]), f(`eye`, `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `), d(`textarea`, `width: 100%;`, [o(`input-word-count`, `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), d(`resizable`, [o(`input-wrapper`, `
 resize: vertical;
 min-height: var(--n-height);
 `)]), f(`textarea-el, textarea-mirror, placeholder`, `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), f(`textarea-mirror`, `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]), d(`pair`, [f(`input-el, placeholder`, `text-align: center;`), f(`separator`, `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [o(`icon`, `
 color: var(--n-icon-color);
 `), o(`base-icon`, `
 color: var(--n-icon-color);
 `)])]), d(`disabled`, `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [f(`border`, `border: var(--n-border-disabled);`), f(`input-el, textarea-el`, `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), f(`placeholder`, `color: var(--n-placeholder-color-disabled);`), f(`separator`, `color: var(--n-text-color-disabled);`, [o(`icon`, `
 color: var(--n-icon-color-disabled);
 `), o(`base-icon`, `
 color: var(--n-icon-color-disabled);
 `)]), o(`input-word-count`, `
 color: var(--n-count-text-color-disabled);
 `), f(`suffix, prefix`, `color: var(--n-text-color-disabled);`, [o(`icon`, `
 color: var(--n-icon-color-disabled);
 `), o(`internal-icon`, `
 color: var(--n-icon-color-disabled);
 `)])]), u(`disabled`, [f(`eye`, `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [m(`&:hover`, `
 color: var(--n-icon-color-hover);
 `), m(`&:active`, `
 color: var(--n-icon-color-pressed);
 `)]), m(`&:hover`, [f(`state-border`, `border: var(--n-border-hover);`)]), d(`focus`, `background-color: var(--n-color-focus);`, [f(`state-border`, `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), f(`border, state-border`, `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), f(`state-border`, `
 border-color: #0000;
 z-index: 1;
 `), f(`prefix`, `margin-right: 4px;`), f(`suffix`, `
 margin-left: 4px;
 `), f(`suffix, prefix`, `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [o(`base-loading`, `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), o(`base-clear`, `
 font-size: var(--n-icon-size);
 `, [f(`placeholder`, [o(`base-icon`, `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), m(`>`, [o(`icon`, `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), o(`base-icon`, `
 font-size: var(--n-icon-size);
 `)]), o(`input-word-count`, `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `), [`warning`, `error`].map((e2) => d(`${e2}-status`, [u(`disabled`, [o(`base-loading`, `
 color: var(--n-loading-color-${e2})
 `), f(`input-el, textarea-el`, `
 caret-color: var(--n-caret-color-${e2});
 `), f(`state-border`, `
 border: var(--n-border-${e2});
 `), m(`&:hover`, [f(`state-border`, `
 border: var(--n-border-hover-${e2});
 `)]), m(`&:focus`, `
 background-color: var(--n-color-focus-${e2});
 `, [f(`state-border`, `
 box-shadow: var(--n-box-shadow-focus-${e2});
 border: var(--n-border-focus-${e2});
 `)]), d(`focus`, `
 background-color: var(--n-color-focus-${e2});
 `, [f(`state-border`, `
 box-shadow: var(--n-box-shadow-focus-${e2});
 border: var(--n-border-focus-${e2});
 `)])])]))]);
const de = o(`input`, [d(`disabled`, [f(`input-el, textarea-el`, `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function I(e2) {
  let t2 = 0;
  for (let n2 of e2) t2++;
  return t2;
}
function L(e2) {
  return e2 === `` || e2 == null;
}
function fe(e2) {
  let t2 = E(null);
  function n2() {
    let { value: n3 } = e2;
    if (!(n3 == null ? void 0 : n3.focus)) {
      i2();
      return;
    }
    let { selectionStart: r3, selectionEnd: a2, value: o2 } = n3;
    if (r3 == null || a2 == null) {
      i2();
      return;
    }
    t2.value = { start: r3, end: a2, beforeText: o2.slice(0, r3), afterText: o2.slice(a2) };
  }
  function r2() {
    var n3;
    let { value: r3 } = t2, { value: i3 } = e2;
    if (!r3 || !i3) return;
    let { value: a2 } = i3, { start: o2, beforeText: s2, afterText: c2 } = r3, l2 = a2.length;
    if (a2.endsWith(c2)) l2 = a2.length - c2.length;
    else if (a2.startsWith(s2)) l2 = s2.length;
    else {
      let e3 = s2[o2 - 1], t3 = a2.indexOf(e3, o2 - 1);
      t3 !== -1 && (l2 = t3 + 1);
    }
    (n3 = i3.setSelectionRange) == null || n3.call(i3, l2, l2);
  }
  function i2() {
    t2.value = null;
  }
  return x(e2, i2), { recordCursor: n2, restoreCursor: r2 };
}
var R = A({ name: `InputWordCount`, setup(e2, { slots: t2 }) {
  let { mergedValueRef: n2, maxlengthRef: r2, mergedClsPrefixRef: i2, countGraphemesRef: a2 } = w(F), o2 = k(() => {
    let { value: e3 } = n2;
    return e3 === null || Array.isArray(e3) ? 0 : (a2.value || I)(e3);
  });
  return () => {
    let { value: e3 } = r2, { value: a3 } = n2;
    return b(`span`, { class: `${i2.value}-input-word-count` }, h(t2.default, { value: a3 === null || Array.isArray(a3) ? `` : a3 }, () => [e3 === void 0 ? o2.value : `${o2.value} / ${e3}`]));
  };
} }), z = A({ name: `Input`, props: Object.assign(Object.assign({}, s.props), { bordered: { type: Boolean, default: void 0 }, type: { type: String, default: `text` }, placeholder: [Array, String], defaultValue: { type: [String, Array], default: null }, value: [String, Array], disabled: { type: Boolean, default: void 0 }, size: String, rows: { type: [Number, String], default: 3 }, round: Boolean, minlength: [String, Number], maxlength: [String, Number], clearable: Boolean, autosize: { type: [Boolean, Object], default: false }, pair: Boolean, separator: String, readonly: { type: [String, Boolean], default: false }, passivelyActivated: Boolean, showPasswordOn: String, stateful: { type: Boolean, default: true }, autofocus: Boolean, inputProps: Object, resizable: { type: Boolean, default: true }, showCount: Boolean, loading: { type: Boolean, default: void 0 }, allowInput: Function, renderCount: Function, onMousedown: Function, onKeydown: Function, onKeyup: [Function, Array], onInput: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClick: [Function, Array], onChange: [Function, Array], onClear: [Function, Array], countGraphemes: Function, status: String, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], textDecoration: [String, Array], attrSize: { type: Number, default: 20 }, onInputBlur: [Function, Array], onInputFocus: [Function, Array], onDeactivate: [Function, Array], onActivate: [Function, Array], onWrapperFocus: [Function, Array], onWrapperBlur: [Function, Array], internalDeactivateOnEnter: Boolean, internalForceFocus: Boolean, internalLoadingBeforeSuffix: { type: Boolean, default: true }, showPasswordToggle: Boolean }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedBorderedRef: i2, inlineThemeDisabled: o2, mergedRtlRef: u2 } = ne(e2), d2 = s(`Input`, `-input`, ue, le, e2, t2);
  se && te(`-input-safari`, de, t2);
  let f2 = E(null), p2 = E(null), m2 = E(null), h2 = E(null), _2 = E(null), y2 = E(null), b2 = E(null), w2 = fe(b2), O2 = E(null), { localeRef: A2 } = ce(`Input`), j2 = E(e2.defaultValue), M2 = re(D(e2, `value`), j2), N2 = oe(e2), { mergedSizeRef: P2, mergedDisabledRef: I2, mergedStatusRef: R2 } = N2, z2 = E(false), B = E(false), V = E(false), H = E(false), U = null, W = k(() => {
    let { placeholder: t3, pair: n2 } = e2;
    return n2 ? Array.isArray(t3) ? t3 : t3 === void 0 ? [``, ``] : [t3, t3] : t3 === void 0 ? [A2.value.placeholder] : [t3];
  }), pe = k(() => {
    let { value: e3 } = V, { value: t3 } = M2, { value: n2 } = W;
    return !e3 && (L(t3) || Array.isArray(t3) && L(t3[0])) && n2[0];
  }), me = k(() => {
    let { value: e3 } = V, { value: t3 } = M2, { value: n2 } = W;
    return !e3 && n2[1] && (L(t3) || Array.isArray(t3) && L(t3[1]));
  }), G = n(() => e2.internalForceFocus || z2.value), he = n(() => {
    if (I2.value || e2.readonly || !e2.clearable || !G.value && !B.value) return false;
    let { value: t3 } = M2, { value: n2 } = G;
    return e2.pair ? !!(Array.isArray(t3) && (t3[0] || t3[1])) && (B.value || n2) : !!t3 && (B.value || n2);
  }), K = k(() => {
    let { showPasswordOn: t3 } = e2;
    if (t3) return t3;
    if (e2.showPasswordToggle) return `click`;
  }), q = E(false), ge = k(() => {
    let { textDecoration: t3 } = e2;
    return t3 ? Array.isArray(t3) ? t3.map((e3) => ({ textDecoration: e3 })) : [{ textDecoration: t3 }] : [``, ``];
  }), _e = E(void 0), ve = () => {
    var _a, _b;
    if (e2.type === `textarea`) {
      let { autosize: t3 } = e2;
      if (t3 && (_e.value = (_b = (_a = O2.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.offsetWidth), !p2.value || typeof t3 == `boolean`) return;
      let { paddingTop: n2, paddingBottom: r2, lineHeight: i3 } = window.getComputedStyle(p2.value), a2 = Number(n2.slice(0, -2)), o3 = Number(r2.slice(0, -2)), s2 = Number(i3.slice(0, -2)), { value: c2 } = m2;
      if (!c2) return;
      if (t3.minRows) {
        let e3 = Math.max(t3.minRows, 1), n3 = `${a2 + o3 + s2 * e3}px`;
        c2.style.minHeight = n3;
      }
      if (t3.maxRows) {
        let e3 = `${a2 + o3 + s2 * t3.maxRows}px`;
        c2.style.maxHeight = e3;
      }
    }
  }, ye = k(() => {
    let { maxlength: t3 } = e2;
    return t3 === void 0 ? void 0 : Number(t3);
  });
  S(() => {
    let { value: e3 } = M2;
    Array.isArray(e3) || $(e3);
  });
  let be = ae().proxy;
  function J(t3, n2) {
    let { onUpdateValue: i3, "onUpdate:value": a2, onInput: o3 } = e2, { nTriggerFormInput: s2 } = N2;
    i3 && r(i3, t3, n2), a2 && r(a2, t3, n2), o3 && r(o3, t3, n2), j2.value = t3, s2();
  }
  function Y(t3, n2) {
    let { onChange: i3 } = e2, { nTriggerFormChange: a2 } = N2;
    i3 && r(i3, t3, n2), j2.value = t3, a2();
  }
  function xe(t3) {
    let { onBlur: n2 } = e2, { nTriggerFormBlur: i3 } = N2;
    n2 && r(n2, t3), i3();
  }
  function Se(t3) {
    let { onFocus: n2 } = e2, { nTriggerFormFocus: i3 } = N2;
    n2 && r(n2, t3), i3();
  }
  function Ce(t3) {
    let { onClear: n2 } = e2;
    n2 && r(n2, t3);
  }
  function we(t3) {
    let { onInputBlur: n2 } = e2;
    n2 && r(n2, t3);
  }
  function Te(t3) {
    let { onInputFocus: n2 } = e2;
    n2 && r(n2, t3);
  }
  function Ee() {
    let { onDeactivate: t3 } = e2;
    t3 && r(t3);
  }
  function De() {
    let { onActivate: t3 } = e2;
    t3 && r(t3);
  }
  function Oe(t3) {
    let { onClick: n2 } = e2;
    n2 && r(n2, t3);
  }
  function ke(t3) {
    let { onWrapperFocus: n2 } = e2;
    n2 && r(n2, t3);
  }
  function Ae(t3) {
    let { onWrapperBlur: n2 } = e2;
    n2 && r(n2, t3);
  }
  function je() {
    V.value = true;
  }
  function Me(e3) {
    V.value = false, e3.target === y2.value ? X(e3, 1) : X(e3, 0);
  }
  function X(t3, n2 = 0, r2 = `input`) {
    let i3 = t3.target.value;
    if ($(i3), t3 instanceof InputEvent && !t3.isComposing && (V.value = false), e2.type === `textarea`) {
      let { value: e3 } = O2;
      e3 && e3.syncUnifiedContainer();
    }
    if (U = i3, V.value) return;
    w2.recordCursor();
    let a2 = Ne(i3);
    if (a2) if (!e2.pair) r2 === `input` ? J(i3, { source: n2 }) : Y(i3, { source: n2 });
    else {
      let { value: e3 } = M2;
      e3 = Array.isArray(e3) ? [e3[0], e3[1]] : [``, ``], e3[n2] = i3, r2 === `input` ? J(e3, { source: n2 }) : Y(e3, { source: n2 });
    }
    be.$forceUpdate(), a2 || C(w2.restoreCursor);
  }
  function Ne(t3) {
    let { countGraphemes: n2, maxlength: r2, minlength: i3 } = e2;
    if (n2) {
      let e3;
      if (r2 !== void 0 && (e3 === void 0 && (e3 = n2(t3)), e3 > Number(r2)) || i3 !== void 0 && (e3 === void 0 && (e3 = n2(t3)), e3 < Number(r2))) return false;
    }
    let { allowInput: a2 } = e2;
    return typeof a2 == `function` ? a2(t3) : true;
  }
  function Pe(e3) {
    we(e3), e3.relatedTarget === f2.value && Ee(), e3.relatedTarget !== null && (e3.relatedTarget === _2.value || e3.relatedTarget === y2.value || e3.relatedTarget === p2.value) || (H.value = false), Z(e3, `blur`), b2.value = null;
  }
  function Fe(e3, t3) {
    Te(e3), z2.value = true, H.value = true, De(), Z(e3, `focus`), t3 === 0 ? b2.value = _2.value : t3 === 1 ? b2.value = y2.value : t3 === 2 && (b2.value = p2.value);
  }
  function Ie(t3) {
    e2.passivelyActivated && (Ae(t3), Z(t3, `blur`));
  }
  function Le(t3) {
    e2.passivelyActivated && (z2.value = true, ke(t3), Z(t3, `focus`));
  }
  function Z(e3, t3) {
    e3.relatedTarget !== null && (e3.relatedTarget === _2.value || e3.relatedTarget === y2.value || e3.relatedTarget === p2.value || e3.relatedTarget === f2.value) || (t3 === `focus` ? (Se(e3), z2.value = true) : t3 === `blur` && (xe(e3), z2.value = false));
  }
  function Re(e3, t3) {
    X(e3, t3, `change`);
  }
  function ze(e3) {
    Oe(e3);
  }
  function Be(e3) {
    Ce(e3), Ve();
  }
  function Ve() {
    e2.pair ? (J([``, ``], { source: `clear` }), Y([``, ``], { source: `clear` })) : (J(``, { source: `clear` }), Y(``, { source: `clear` }));
  }
  function He(t3) {
    let { onMousedown: n2 } = e2;
    n2 && n2(t3);
    let { tagName: r2 } = t3.target;
    if (r2 !== `INPUT` && r2 !== `TEXTAREA`) {
      if (e2.resizable) {
        let { value: e3 } = f2;
        if (e3) {
          let { left: n3, top: r3, width: i3, height: a2 } = e3.getBoundingClientRect();
          if (n3 + i3 - 14 < t3.clientX && t3.clientX < n3 + i3 && r3 + a2 - 14 < t3.clientY && t3.clientY < r3 + a2) return;
        }
      }
      t3.preventDefault(), z2.value || Xe();
    }
  }
  function Ue() {
    var t3;
    B.value = true, e2.type === `textarea` && ((t3 = O2.value) == null || t3.handleMouseEnterWrapper());
  }
  function We() {
    var t3;
    B.value = false, e2.type === `textarea` && ((t3 = O2.value) == null || t3.handleMouseLeaveWrapper());
  }
  function Ge() {
    I2.value || K.value === `click` && (q.value = !q.value);
  }
  function Ke(e3) {
    if (I2.value) return;
    e3.preventDefault();
    let t3 = (e4) => {
      e4.preventDefault(), g(`mouseup`, document, t3);
    };
    if (v(`mouseup`, document, t3), K.value !== `mousedown`) return;
    q.value = true;
    let n2 = () => {
      q.value = false, g(`mouseup`, document, n2);
    };
    v(`mouseup`, document, n2);
  }
  function qe(t3) {
    e2.onKeyup && r(e2.onKeyup, t3);
  }
  function Je(t3) {
    switch (e2.onKeydown && r(e2.onKeydown, t3), t3.key) {
      case `Escape`:
        Q();
        break;
      case `Enter`:
        Ye(t3);
        break;
    }
  }
  function Ye(t3) {
    var n2, r2;
    if (e2.passivelyActivated) {
      let { value: i3 } = H;
      if (i3) {
        e2.internalDeactivateOnEnter && Q();
        return;
      }
      t3.preventDefault(), e2.type === `textarea` ? (n2 = p2.value) == null || n2.focus() : (r2 = _2.value) == null || r2.focus();
    }
  }
  function Q() {
    e2.passivelyActivated && (H.value = false, C(() => {
      var e3;
      (e3 = f2.value) == null || e3.focus();
    }));
  }
  function Xe() {
    var t3, n2, r2;
    I2.value || (e2.passivelyActivated ? (t3 = f2.value) == null || t3.focus() : ((n2 = p2.value) == null || n2.focus(), (r2 = _2.value) == null || r2.focus()));
  }
  function Ze() {
    var _a;
    ((_a = f2.value) == null ? void 0 : _a.contains(document.activeElement)) && document.activeElement.blur();
  }
  function Qe() {
    var e3, t3;
    (e3 = p2.value) == null || e3.select(), (t3 = _2.value) == null || t3.select();
  }
  function $e() {
    I2.value || (p2.value ? p2.value.focus() : _2.value && _2.value.focus());
  }
  function et() {
    let { value: e3 } = f2;
    (e3 == null ? void 0 : e3.contains(document.activeElement)) && e3 !== document.activeElement && Q();
  }
  function tt(t3) {
    if (e2.type === `textarea`) {
      let { value: e3 } = p2;
      e3 == null ? void 0 : e3.scrollTo(t3);
    } else {
      let { value: e3 } = _2;
      e3 == null ? void 0 : e3.scrollTo(t3);
    }
  }
  function $(t3) {
    let { type: n2, pair: r2, autosize: i3 } = e2;
    if (!r2 && i3) if (n2 === `textarea`) {
      let { value: e3 } = m2;
      e3 && (e3.textContent = `${t3 ?? ``}\r
`);
    } else {
      let { value: e3 } = h2;
      e3 && (t3 ? e3.textContent = t3 : e3.innerHTML = `&nbsp;`);
    }
  }
  function nt() {
    ve();
  }
  let rt = E({ top: `0` });
  function it(e3) {
    var t3;
    let { scrollTop: n2 } = e3.target;
    rt.value.top = `${-n2}px`, (t3 = O2.value) == null || t3.syncUnifiedContainer();
  }
  let at = null;
  T(() => {
    let { autosize: t3, type: n2 } = e2;
    t3 && n2 === `textarea` ? at = x(M2, (e3) => {
      !Array.isArray(e3) && e3 !== U && $(e3);
    }) : at == null ? void 0 : at();
  });
  let ot = null;
  T(() => {
    e2.type === `textarea` ? ot = x(M2, (e3) => {
      var t3;
      !Array.isArray(e3) && e3 !== U && ((t3 = O2.value) == null || t3.syncUnifiedContainer());
    }) : ot == null ? void 0 : ot();
  }), ie(F, { mergedValueRef: M2, maxlengthRef: ye, mergedClsPrefixRef: t2, countGraphemesRef: D(e2, `countGraphemes`) });
  let st = { wrapperElRef: f2, inputElRef: _2, textareaElRef: p2, isCompositing: V, clear: Ve, focus: Xe, blur: Ze, select: Qe, deactivate: et, activate: $e, scrollTo: tt }, ct = l(`Input`, u2, t2), lt = k(() => {
    let { value: e3 } = P2, { common: { cubicBezierEaseInOut: t3 }, self: { color: n2, borderRadius: r2, textColor: i3, caretColor: a2, caretColorError: o3, caretColorWarning: s2, textDecorationColor: l2, border: u3, borderDisabled: te2, borderHover: f3, borderFocus: p3, placeholderColor: m3, placeholderColorDisabled: h3, lineHeightTextarea: ne2, colorDisabled: g2, colorFocus: _3, textColorDisabled: re2, boxShadowFocus: v2, iconSize: y3, colorFocusWarning: ie2, boxShadowFocusWarning: b3, borderWarning: x2, borderFocusWarning: S2, borderHoverWarning: C2, colorFocusError: w3, boxShadowFocusError: ae2, borderError: T2, borderFocusError: E2, borderHoverError: D2, clearSize: O3, clearColor: k2, clearColorHover: A3, clearColorPressed: oe2, iconColor: se2, iconColorDisabled: ce2, suffixTextColor: j3, countTextColor: M3, countTextColorDisabled: le2, iconColorHover: N3, iconColorPressed: F2, loadingColor: ue2, loadingColorError: de2, loadingColorWarning: I3, fontWeight: L2, [c(`padding`, e3)]: fe2, [c(`fontSize`, e3)]: R3, [c(`height`, e3)]: z3 } } = d2.value, { left: B2, right: V2 } = ee(fe2);
    return { "--n-bezier": t3, "--n-count-text-color": M3, "--n-count-text-color-disabled": le2, "--n-color": n2, "--n-font-size": R3, "--n-font-weight": L2, "--n-border-radius": r2, "--n-height": z3, "--n-padding-left": B2, "--n-padding-right": V2, "--n-text-color": i3, "--n-caret-color": a2, "--n-text-decoration-color": l2, "--n-border": u3, "--n-border-disabled": te2, "--n-border-hover": f3, "--n-border-focus": p3, "--n-placeholder-color": m3, "--n-placeholder-color-disabled": h3, "--n-icon-size": y3, "--n-line-height-textarea": ne2, "--n-color-disabled": g2, "--n-color-focus": _3, "--n-text-color-disabled": re2, "--n-box-shadow-focus": v2, "--n-loading-color": ue2, "--n-caret-color-warning": s2, "--n-color-focus-warning": ie2, "--n-box-shadow-focus-warning": b3, "--n-border-warning": x2, "--n-border-focus-warning": S2, "--n-border-hover-warning": C2, "--n-loading-color-warning": I3, "--n-caret-color-error": o3, "--n-color-focus-error": w3, "--n-box-shadow-focus-error": ae2, "--n-border-error": T2, "--n-border-focus-error": E2, "--n-border-hover-error": D2, "--n-loading-color-error": de2, "--n-clear-color": k2, "--n-clear-size": O3, "--n-clear-color-hover": A3, "--n-clear-color-pressed": oe2, "--n-icon-color": se2, "--n-icon-color-hover": N3, "--n-icon-color-pressed": F2, "--n-icon-color-disabled": ce2, "--n-suffix-text-color": j3 };
  }), ut = o2 ? a(`input`, k(() => {
    let { value: e3 } = P2;
    return e3[0];
  }), lt, e2) : void 0;
  return Object.assign(Object.assign({}, st), { wrapperElRef: f2, inputElRef: _2, inputMirrorElRef: h2, inputEl2Ref: y2, textareaElRef: p2, textareaMirrorElRef: m2, textareaScrollbarInstRef: O2, rtlEnabled: ct, uncontrolledValue: j2, mergedValue: M2, passwordVisible: q, mergedPlaceholder: W, showPlaceholder1: pe, showPlaceholder2: me, mergedFocus: G, isComposing: V, activated: H, showClearButton: he, mergedSize: P2, mergedDisabled: I2, textDecorationStyle: ge, mergedClsPrefix: t2, mergedBordered: i2, mergedShowPasswordOn: K, placeholderStyle: rt, mergedStatus: R2, textAreaScrollContainerWidth: _e, handleTextAreaScroll: it, handleCompositionStart: je, handleCompositionEnd: Me, handleInput: X, handleInputBlur: Pe, handleInputFocus: Fe, handleWrapperBlur: Ie, handleWrapperFocus: Le, handleMouseEnter: Ue, handleMouseLeave: We, handleMouseDown: He, handleChange: Re, handleClick: ze, handleClear: Be, handlePasswordToggleClick: Ge, handlePasswordToggleMousedown: Ke, handleWrapperKeydown: Je, handleWrapperKeyup: qe, handleTextAreaMirrorResize: nt, getTextareaScrollContainer: () => p2.value, mergedTheme: d2, cssVars: o2 ? void 0 : lt, themeClass: ut == null ? void 0 : ut.themeClass, onRender: ut == null ? void 0 : ut.onRender });
}, render() {
  var _a, _b, _c, _d, _e, _f, _g;
  let { mergedClsPrefix: t2, mergedStatus: n2, themeClass: r2, type: a2, countGraphemes: o2, onRender: s2 } = this, c2 = this.$slots;
  return s2 == null ? void 0 : s2(), b(`div`, { ref: `wrapperElRef`, class: [`${t2}-input`, r2, n2 && `${t2}-input--${n2}-status`, { [`${t2}-input--rtl`]: this.rtlEnabled, [`${t2}-input--disabled`]: this.mergedDisabled, [`${t2}-input--textarea`]: a2 === `textarea`, [`${t2}-input--resizable`]: this.resizable && !this.autosize, [`${t2}-input--autosize`]: this.autosize, [`${t2}-input--round`]: this.round && a2 !== `textarea`, [`${t2}-input--pair`]: this.pair, [`${t2}-input--focus`]: this.mergedFocus, [`${t2}-input--stateful`]: this.stateful }], style: this.cssVars, tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0, onFocus: this.handleWrapperFocus, onBlur: this.handleWrapperBlur, onClick: this.handleClick, onMousedown: this.handleMouseDown, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd, onKeyup: this.handleWrapperKeyup, onKeydown: this.handleWrapperKeydown }, b(`div`, { class: `${t2}-input-wrapper` }, i(c2.prefix, (e2) => e2 && b(`div`, { class: `${t2}-input__prefix` }, e2)), a2 === `textarea` ? b(y, { ref: `textareaScrollbarInstRef`, class: `${t2}-input__textarea`, container: this.getTextareaScrollContainer, theme: (_b = (_a = this.theme) == null ? void 0 : _a.peers) == null ? void 0 : _b.Scrollbar, themeOverrides: (_d = (_c = this.themeOverrides) == null ? void 0 : _c.peers) == null ? void 0 : _d.Scrollbar, triggerDisplayManually: true, useUnifiedContainer: true, internalHoistYRail: true }, { default: () => {
    var _a2, _b2;
    let { textAreaScrollContainerWidth: e2 } = this, n3 = { width: this.autosize && e2 && `${e2}px` };
    return b(O, null, b(`textarea`, Object.assign({}, this.inputProps, { ref: `textareaElRef`, class: [`${t2}-input__textarea-el`, (_a2 = this.inputProps) == null ? void 0 : _a2.class], autofocus: this.autofocus, rows: Number(this.rows), placeholder: this.placeholder, value: this.mergedValue, disabled: this.mergedDisabled, maxlength: o2 ? void 0 : this.maxlength, minlength: o2 ? void 0 : this.minlength, readonly: this.readonly, tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, style: [this.textDecorationStyle[0], (_b2 = this.inputProps) == null ? void 0 : _b2.style, n3], onBlur: this.handleInputBlur, onFocus: (e3) => {
      this.handleInputFocus(e3, 2);
    }, onInput: this.handleInput, onChange: this.handleChange, onScroll: this.handleTextAreaScroll })), this.showPlaceholder1 ? b(`div`, { class: `${t2}-input__placeholder`, style: [this.placeholderStyle, n3], key: `placeholder` }, this.mergedPlaceholder[0]) : null, this.autosize ? b(_, { onResize: this.handleTextAreaMirrorResize }, { default: () => b(`div`, { ref: `textareaMirrorElRef`, class: `${t2}-input__textarea-mirror`, key: `mirror` }) }) : null);
  } }) : b(`div`, { class: `${t2}-input__input` }, b(`input`, Object.assign({ type: a2 === `password` && this.mergedShowPasswordOn && this.passwordVisible ? `text` : a2 }, this.inputProps, { ref: `inputElRef`, class: [`${t2}-input__input-el`, (_e = this.inputProps) == null ? void 0 : _e.class], style: [this.textDecorationStyle[0], (_f = this.inputProps) == null ? void 0 : _f.style], tabindex: this.passivelyActivated && !this.activated ? -1 : (_g = this.inputProps) == null ? void 0 : _g.tabindex, placeholder: this.mergedPlaceholder[0], disabled: this.mergedDisabled, maxlength: o2 ? void 0 : this.maxlength, minlength: o2 ? void 0 : this.minlength, value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue, readonly: this.readonly, autofocus: this.autofocus, size: this.attrSize, onBlur: this.handleInputBlur, onFocus: (e2) => {
    this.handleInputFocus(e2, 0);
  }, onInput: (e2) => {
    this.handleInput(e2, 0);
  }, onChange: (e2) => {
    this.handleChange(e2, 0);
  } })), this.showPlaceholder1 ? b(`div`, { class: `${t2}-input__placeholder` }, b(`span`, null, this.mergedPlaceholder[0])) : null, this.autosize ? b(`div`, { class: `${t2}-input__input-mirror`, key: `mirror`, ref: `inputMirrorElRef` }, `\xA0`) : null), !this.pair && i(c2.suffix, (n3) => n3 || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? b(`div`, { class: `${t2}-input__suffix` }, [i(c2[`clear-icon-placeholder`], (e2) => (this.clearable || e2) && b(j, { clsPrefix: t2, show: this.showClearButton, onClear: this.handleClear }, { placeholder: () => e2, icon: () => {
    var _a2;
    var e3;
    return (_a2 = (e3 = this.$slots)[`clear-icon`]) == null ? void 0 : _a2.call(e3);
  } })), this.internalLoadingBeforeSuffix ? null : n3, this.loading === void 0 ? null : b(M, { clsPrefix: t2, loading: this.loading, showArrow: false, showClear: false, style: this.cssVars }), this.internalLoadingBeforeSuffix ? n3 : null, this.showCount && this.type !== `textarea` ? b(R, null, { default: (e2) => {
    var _a2;
    let { renderCount: t3 } = this;
    return t3 ? t3(e2) : (_a2 = c2.count) == null ? void 0 : _a2.call(c2, e2);
  } }) : null, this.mergedShowPasswordOn && this.type === `password` ? b(`div`, { class: `${t2}-input__eye`, onMousedown: this.handlePasswordToggleMousedown, onClick: this.handlePasswordToggleClick }, this.passwordVisible ? e(c2[`password-visible-icon`], () => [b(p, { clsPrefix: t2 }, { default: () => b(N, null) })]) : e(c2[`password-invisible-icon`], () => [b(p, { clsPrefix: t2 }, { default: () => b(P, null) })])) : null]) : null)), this.pair ? b(`span`, { class: `${t2}-input__separator` }, e(c2.separator, () => [this.separator])) : null, this.pair ? b(`div`, { class: `${t2}-input-wrapper` }, b(`div`, { class: `${t2}-input__input` }, b(`input`, { ref: `inputEl2Ref`, type: this.type, class: `${t2}-input__input-el`, tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, placeholder: this.mergedPlaceholder[1], disabled: this.mergedDisabled, maxlength: o2 ? void 0 : this.maxlength, minlength: o2 ? void 0 : this.minlength, value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0, readonly: this.readonly, style: this.textDecorationStyle[1], onBlur: this.handleInputBlur, onFocus: (e2) => {
    this.handleInputFocus(e2, 1);
  }, onInput: (e2) => {
    this.handleInput(e2, 1);
  }, onChange: (e2) => {
    this.handleChange(e2, 1);
  } }), this.showPlaceholder2 ? b(`div`, { class: `${t2}-input__placeholder` }, b(`span`, null, this.mergedPlaceholder[1])) : null), i(c2.suffix, (e2) => (this.clearable || e2) && b(`div`, { class: `${t2}-input__suffix` }, [this.clearable && b(j, { clsPrefix: t2, show: this.showClearButton, onClear: this.handleClear }, { icon: () => {
    var _a2;
    return (_a2 = c2[`clear-icon`]) == null ? void 0 : _a2.call(c2);
  }, placeholder: () => {
    var _a2;
    return (_a2 = c2[`clear-icon-placeholder`]) == null ? void 0 : _a2.call(c2);
  } }), e2]))) : null, this.mergedBordered ? b(`div`, { class: `${t2}-input__border` }) : null, this.mergedBordered ? b(`div`, { class: `${t2}-input__state-border` }) : null, this.showCount && a2 === `textarea` ? b(R, null, { default: (e2) => {
    var _a2;
    let { renderCount: t3 } = this;
    return t3 ? t3(e2) : (_a2 = c2.count) == null ? void 0 : _a2.call(c2, e2);
  } }) : null);
} });
export {
  N as n,
  z as t
};
