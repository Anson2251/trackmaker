import { F as e, L as t, O as n, _ as r, dt as i, f as a, gt as o, h as s, ht as c, mt as l, pt as u, ut as d, y as f } from "./Card-nhqq8IKa.js";
import { U as p, y as m } from "./Tooltip-DGge0ha1.js";
import { Bt as h, Et as g, Ot as _, an as v, cn as y, gt as b, wt as x } from "./index-DTVnoW_1.js";
import { r as S } from "./Tag-BCblq9DP.js";
import { d as C } from "./Button-o58fM-RZ.js";
import { n as w } from "./settings-store-NEXTm_Ep.js";
const T = { name: String, value: { type: [String, Number, Boolean], default: `on` }, checked: { type: Boolean, default: void 0 }, defaultChecked: Boolean, disabled: { type: Boolean, default: void 0 }, label: String, size: String, onUpdateChecked: [Function, Array], "onUpdate:checked": [Function, Array], checkedValue: { type: Boolean, default: void 0 } }, E = e(`n-radio-group`);
function D(e2) {
  let r2 = _(E, null), i2 = C(e2, { mergedSize(t2) {
    let { size: n2 } = e2;
    if (n2 !== void 0) return n2;
    if (r2) {
      let { mergedSizeRef: { value: e3 } } = r2;
      if (e3 !== void 0) return e3;
    }
    return t2 ? t2.mergedSize.value : `medium`;
  }, mergedDisabled(t2) {
    return !!(e2.disabled || (r2 == null ? void 0 : r2.disabledRef.value) || (t2 == null ? void 0 : t2.disabled.value));
  } }), { mergedSizeRef: a2, mergedDisabledRef: o2 } = i2, s2 = v(null), c2 = v(null), l2 = v(e2.defaultChecked), u2 = p(y(e2, `checked`), l2), d2 = t(() => r2 ? r2.valueRef.value === e2.value : u2.value), m2 = t(() => {
    let { name: t2 } = e2;
    if (t2 !== void 0) return t2;
    if (r2) return r2.nameRef.value;
  }), h2 = v(false);
  function g2() {
    if (r2) {
      let { doUpdateValue: t2 } = r2, { value: i3 } = e2;
      n(t2, i3);
    } else {
      let { onUpdateChecked: t2, "onUpdate:checked": r3 } = e2, { nTriggerFormInput: a3, nTriggerFormChange: o3 } = i2;
      t2 && n(t2, true), r3 && n(r3, true), a3(), o3(), l2.value = true;
    }
  }
  function b2() {
    o2.value || d2.value || g2();
  }
  function x2() {
    b2(), s2.value && (s2.value.checked = d2.value);
  }
  function S2() {
    h2.value = false;
  }
  function w2() {
    h2.value = true;
  }
  return { mergedClsPrefix: r2 ? r2.mergedClsPrefixRef : f(e2).mergedClsPrefixRef, inputRef: s2, labelRef: c2, mergedName: m2, mergedDisabled: o2, renderSafeChecked: d2, focus: h2, mergedSize: a2, handleRadioInputChange: x2, handleRadioInputBlur: S2, handleRadioInputFocus: w2 };
}
var O = i(`radio-group`, `
 display: inline-block;
 font-size: var(--n-font-size);
`, [u(`splitor`, `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `, [l(`checked`, { backgroundColor: `var(--n-button-border-color-active)` }), l(`disabled`, { opacity: `var(--n-opacity-disabled)` })]), l(`button-group`, `
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [i(`radio-button`, { height: `var(--n-height)`, lineHeight: `var(--n-height)` }), u(`splitor`, { height: `var(--n-height)` })]), i(`radio-button`, `
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `, [i(`radio-input`, `
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `), u(`state-border`, `
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `), d(`&:first-child`, `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [u(`state-border`, `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), d(`&:last-child`, `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [u(`state-border`, `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), c(`disabled`, `
 cursor: pointer;
 `, [d(`&:hover`, [u(`state-border`, `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), c(`checked`, { color: `var(--n-button-text-color-hover)` })]), l(`focus`, [d(`&:not(:active)`, [u(`state-border`, { boxShadow: `var(--n-button-box-shadow-focus)` })])])]), l(`checked`, `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), l(`disabled`, `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
function k(e2, t2, n2) {
  var _a;
  let r2 = [], i2 = false;
  for (let a2 = 0; a2 < e2.length; ++a2) {
    let o2 = e2[a2], s2 = (_a = o2.type) == null ? void 0 : _a.name;
    s2 === `RadioButton` && (i2 = true);
    let c2 = o2.props;
    if (s2 !== `RadioButton`) {
      r2.push(o2);
      continue;
    }
    if (a2 === 0) r2.push(o2);
    else {
      let e3 = r2[r2.length - 1].props, i3 = t2 === e3.value, a3 = e3.disabled, s3 = t2 === c2.value, l2 = c2.disabled, u2 = (i3 ? 2 : 0) + (a3 ? 0 : 1), d2 = (s3 ? 2 : 0) + (l2 ? 0 : 1), f2 = { [`${n2}-radio-group__splitor--disabled`]: a3, [`${n2}-radio-group__splitor--checked`]: i3 }, p2 = { [`${n2}-radio-group__splitor--disabled`]: l2, [`${n2}-radio-group__splitor--checked`]: s3 }, m2 = u2 < d2 ? p2 : f2;
      r2.push(g(`div`, { class: [`${n2}-radio-group__splitor`, m2] }), o2);
    }
  }
  return { children: r2, isButtonGroup: i2 };
}
var A = x({ name: `RadioGroup`, props: Object.assign(Object.assign({}, a.props), { name: String, value: [String, Number, Boolean], defaultValue: { type: [String, Number, Boolean], default: null }, size: String, disabled: { type: Boolean, default: void 0 }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), setup(e2) {
  let t2 = v(null), { mergedSizeRef: i2, mergedDisabledRef: c2, nTriggerFormChange: l2, nTriggerFormInput: u2, nTriggerFormBlur: d2, nTriggerFormFocus: m2 } = C(e2), { mergedClsPrefixRef: g2, inlineThemeDisabled: _2, mergedRtlRef: x2 } = f(e2), S2 = a(`Radio`, `-radio-group`, O, w, e2, g2), T2 = v(e2.defaultValue), D2 = p(y(e2, `value`), T2);
  function k2(t3) {
    let { onUpdateValue: r2, "onUpdate:value": i3 } = e2;
    r2 && n(r2, t3), i3 && n(i3, t3), T2.value = t3, l2(), u2();
  }
  function A2(e3) {
    let { value: n2 } = t2;
    n2 && (n2.contains(e3.relatedTarget) || m2());
  }
  function j(e3) {
    let { value: n2 } = t2;
    n2 && (n2.contains(e3.relatedTarget) || d2());
  }
  h(E, { mergedClsPrefixRef: g2, nameRef: y(e2, `name`), valueRef: D2, disabledRef: c2, mergedSizeRef: i2, doUpdateValue: k2 });
  let M = s(`Radio`, x2, g2), N = b(() => {
    let { value: e3 } = i2, { common: { cubicBezierEaseInOut: t3 }, self: { buttonBorderColor: n2, buttonBorderColorActive: r2, buttonBorderRadius: a2, buttonBoxShadow: s2, buttonBoxShadowFocus: c3, buttonBoxShadowHover: l3, buttonColor: u3, buttonColorActive: d3, buttonTextColor: f2, buttonTextColorActive: p2, buttonTextColorHover: m3, opacityDisabled: h2, [o(`buttonHeight`, e3)]: g3, [o(`fontSize`, e3)]: _3 } } = S2.value;
    return { "--n-font-size": _3, "--n-bezier": t3, "--n-button-border-color": n2, "--n-button-border-color-active": r2, "--n-button-border-radius": a2, "--n-button-box-shadow": s2, "--n-button-box-shadow-focus": c3, "--n-button-box-shadow-hover": l3, "--n-button-color": u3, "--n-button-color-active": d3, "--n-button-text-color": f2, "--n-button-text-color-hover": m3, "--n-button-text-color-active": p2, "--n-height": g3, "--n-opacity-disabled": h2 };
  }), P = _2 ? r(`radio-group`, b(() => i2.value[0]), N, e2) : void 0;
  return { selfElRef: t2, rtlEnabled: M, mergedClsPrefix: g2, mergedValue: D2, handleFocusout: j, handleFocusin: A2, cssVars: _2 ? void 0 : N, themeClass: P == null ? void 0 : P.themeClass, onRender: P == null ? void 0 : P.onRender };
}, render() {
  var e2;
  let { mergedValue: t2, mergedClsPrefix: n2, handleFocusin: r2, handleFocusout: i2 } = this, { children: a2, isButtonGroup: o2 } = k(m(S(this)), t2, n2);
  return (e2 = this.onRender) == null || e2.call(this), g(`div`, { onFocusin: r2, onFocusout: i2, ref: `selfElRef`, class: [`${n2}-radio-group`, this.rtlEnabled && `${n2}-radio-group--rtl`, this.themeClass, o2 && `${n2}-radio-group--button-group`], style: this.cssVars }, a2);
} });
export {
  T as n,
  D as r,
  A as t
};
