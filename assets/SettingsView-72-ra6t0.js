import { D as e, M as t, at as n, ct as r, dt as i, f as a, g as o, h as s, lt as c, ot as l, t as u, ut as d, v as f, w as p } from "./Card-D60iqeq5.js";
import { G as m, Y as h, v as g } from "./light-BMk8WVBh.js";
import { At as _, Dt as v, Jt as y, Zt as b, ct as x, en as S, ft as C, gt as w, jt as T, kt as E, lt as D, mt as O, ot as k, pt as A, rn as j, st as M, t as N, tt as P, ut as F, vt as I, zt as L } from "./index-BKmvGcPh.js";
import { o as R } from "./vue-router-BzEIeKkE.js";
import { n as z } from "./vue-i18n-DHAY1egt.js";
import { n as B, t as ee } from "./AnchorAdapter-Bk5ZPJyq.js";
import { n as V, t as H } from "./Switch-BLAno_Pq.js";
import { t as U } from "./core-mJed2MS8.js";
import { E as W, c as G } from "./storage-V9xFiAD0.js";
import { t as K } from "./get-slot-DtyO76SV.js";
import { n as q, t as J } from "./ListItem-BxFkz237.js";
import { r as Y, t as X } from "./platform-gMXK0SRr.js";
import { t as Z } from "./PerformantEllipsis-BJ6MkXvT.js";
const Q = { name: String, value: { type: [String, Number, Boolean], default: `on` }, checked: { type: Boolean, default: void 0 }, defaultChecked: Boolean, disabled: { type: Boolean, default: void 0 }, label: String, size: String, onUpdateChecked: [Function, Array], "onUpdate:checked": [Function, Array], checkedValue: { type: Boolean, default: void 0 } }, $ = t(`n-radio-group`);
function te(t2) {
  let n2 = I($, null), r2 = W(t2, { mergedSize(e2) {
    let { size: r3 } = t2;
    if (r3 !== void 0) return r3;
    if (n2) {
      let { mergedSizeRef: { value: e3 } } = n2;
      if (e3 !== void 0) return e3;
    }
    return e2 ? e2.mergedSize.value : `medium`;
  }, mergedDisabled(e2) {
    return !!(t2.disabled || (n2 == null ? void 0 : n2.disabledRef.value) || (e2 == null ? void 0 : e2.disabled.value));
  } }), { mergedSizeRef: i2, mergedDisabledRef: a2 } = r2, o2 = y(null), s2 = y(null), c2 = y(t2.defaultChecked), l2 = m(b(t2, `checked`), c2), u2 = h(() => n2 ? n2.valueRef.value === t2.value : l2.value), d2 = h(() => {
    let { name: e2 } = t2;
    if (e2 !== void 0) return e2;
    if (n2) return n2.nameRef.value;
  }), p2 = y(false);
  function g2() {
    if (n2) {
      let { doUpdateValue: r3 } = n2, { value: i3 } = t2;
      e(r3, i3);
    } else {
      let { onUpdateChecked: n3, "onUpdate:checked": i3 } = t2, { nTriggerFormInput: a3, nTriggerFormChange: o3 } = r2;
      n3 && e(n3, true), i3 && e(i3, true), a3(), o3(), c2.value = true;
    }
  }
  function _2() {
    a2.value || u2.value || g2();
  }
  function v2() {
    _2(), o2.value && (o2.value.checked = u2.value);
  }
  function x2() {
    p2.value = false;
  }
  function S2() {
    p2.value = true;
  }
  return { mergedClsPrefix: n2 ? n2.mergedClsPrefixRef : f(t2).mergedClsPrefixRef, inputRef: o2, labelRef: s2, mergedName: d2, mergedDisabled: a2, renderSafeChecked: u2, focus: p2, mergedSize: i2, handleRadioInputChange: v2, handleRadioInputBlur: x2, handleRadioInputFocus: S2 };
}
var ne = O({ name: `RadioButton`, props: Q, setup: te, render() {
  let { mergedClsPrefix: e2 } = this;
  return w(`label`, { class: [`${e2}-radio-button`, this.mergedDisabled && `${e2}-radio-button--disabled`, this.renderSafeChecked && `${e2}-radio-button--checked`, this.focus && [`${e2}-radio-button--focus`]] }, w(`input`, { ref: `inputRef`, type: `radio`, class: `${e2}-radio-input`, value: this.value, name: this.mergedName, checked: this.renderSafeChecked, disabled: this.mergedDisabled, onChange: this.handleRadioInputChange, onFocus: this.handleRadioInputFocus, onBlur: this.handleRadioInputBlur }), w(`div`, { class: `${e2}-radio-button__state-border` }), p(this.$slots.default, (t2) => !t2 && !this.label ? null : w(`div`, { ref: `labelRef`, class: `${e2}-radio__label` }, t2 || this.label)));
} }), re = l(`radio-group`, `
 display: inline-block;
 font-size: var(--n-font-size);
`, [r(`splitor`, `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `, [c(`checked`, { backgroundColor: `var(--n-button-border-color-active)` }), c(`disabled`, { opacity: `var(--n-opacity-disabled)` })]), c(`button-group`, `
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [l(`radio-button`, { height: `var(--n-height)`, lineHeight: `var(--n-height)` }), r(`splitor`, { height: `var(--n-height)` })]), l(`radio-button`, `
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
 `, [l(`radio-input`, `
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
 `), r(`state-border`, `
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `), n(`&:first-child`, `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [r(`state-border`, `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), n(`&:last-child`, `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [r(`state-border`, `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), d(`disabled`, `
 cursor: pointer;
 `, [n(`&:hover`, [r(`state-border`, `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), d(`checked`, { color: `var(--n-button-text-color-hover)` })]), c(`focus`, [n(`&:not(:active)`, [r(`state-border`, { boxShadow: `var(--n-button-box-shadow-focus)` })])])]), c(`checked`, `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), c(`disabled`, `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
function ie(e2, t2, n2) {
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
      r2.push(w(`div`, { class: [`${n2}-radio-group__splitor`, m2] }), o2);
    }
  }
  return { children: r2, isButtonGroup: i2 };
}
var ae = O({ name: `RadioGroup`, props: Object.assign(Object.assign({}, a.props), { name: String, value: [String, Number, Boolean], defaultValue: { type: [String, Number, Boolean], default: null }, size: String, disabled: { type: Boolean, default: void 0 }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), setup(t2) {
  let n2 = y(null), { mergedSizeRef: r2, mergedDisabledRef: c2, nTriggerFormChange: l2, nTriggerFormInput: u2, nTriggerFormBlur: d2, nTriggerFormFocus: p2 } = W(t2), { mergedClsPrefixRef: h2, inlineThemeDisabled: g2, mergedRtlRef: v2 } = f(t2), x2 = a(`Radio`, `-radio-group`, re, Y, t2, h2), S2 = y(t2.defaultValue), C2 = m(b(t2, `value`), S2);
  function w2(n3) {
    let { onUpdateValue: r3, "onUpdate:value": i2 } = t2;
    r3 && e(r3, n3), i2 && e(i2, n3), S2.value = n3, l2(), u2();
  }
  function T2(e2) {
    let { value: t3 } = n2;
    t3 && (t3.contains(e2.relatedTarget) || p2());
  }
  function E2(e2) {
    let { value: t3 } = n2;
    t3 && (t3.contains(e2.relatedTarget) || d2());
  }
  _($, { mergedClsPrefixRef: h2, nameRef: b(t2, `name`), valueRef: C2, disabledRef: c2, mergedSizeRef: r2, doUpdateValue: w2 });
  let D2 = s(`Radio`, v2, h2), O2 = k(() => {
    let { value: e2 } = r2, { common: { cubicBezierEaseInOut: t3 }, self: { buttonBorderColor: n3, buttonBorderColorActive: a2, buttonBorderRadius: o2, buttonBoxShadow: s2, buttonBoxShadowFocus: c3, buttonBoxShadowHover: l3, buttonColor: u3, buttonColorActive: d3, buttonTextColor: f2, buttonTextColorActive: p3, buttonTextColorHover: m2, opacityDisabled: h3, [i(`buttonHeight`, e2)]: g3, [i(`fontSize`, e2)]: _2 } } = x2.value;
    return { "--n-font-size": _2, "--n-bezier": t3, "--n-button-border-color": n3, "--n-button-border-color-active": a2, "--n-button-border-radius": o2, "--n-button-box-shadow": s2, "--n-button-box-shadow-focus": c3, "--n-button-box-shadow-hover": l3, "--n-button-color": u3, "--n-button-color-active": d3, "--n-button-text-color": f2, "--n-button-text-color-hover": m2, "--n-button-text-color-active": p3, "--n-height": g3, "--n-opacity-disabled": h3 };
  }), A2 = g2 ? o(`radio-group`, k(() => r2.value[0]), O2, t2) : void 0;
  return { selfElRef: n2, rtlEnabled: D2, mergedClsPrefix: h2, mergedValue: C2, handleFocusout: E2, handleFocusin: T2, cssVars: g2 ? void 0 : O2, themeClass: A2 == null ? void 0 : A2.themeClass, onRender: A2 == null ? void 0 : A2.onRender };
}, render() {
  var e2;
  let { mergedValue: t2, mergedClsPrefix: n2, handleFocusin: r2, handleFocusout: i2 } = this, { children: a2, isButtonGroup: o2 } = ie(g(K(this)), t2, n2);
  return (e2 = this.onRender) == null || e2.call(this), w(`div`, { onFocusin: r2, onFocusout: i2, ref: `selfElRef`, class: [`${n2}-radio-group`, this.rtlEnabled && `${n2}-radio-group--rtl`, this.themeClass, o2 && `${n2}-radio-group--button-group`], style: this.cssVars }, a2);
} }), oe = { class: `settings-view` }, se = { class: `settings-layout` }, ce = { class: `settings-content` }, le = { style: { display: `flex`, "flex-direction": `row`, "justify-content": `space-between`, "align-items": `center`, "min-width": `0` } }, ue = { key: 0 }, de = { key: 1 }, fe = { key: 2 }, pe = { key: 3 }, me = { key: 0, class: `settings-nav` }, he = N(O({ __name: `SettingsView`, setup(e2) {
  let t2 = new X(), n2 = R(), r2 = k(() => t2.isMobile), { width: i2 } = U(), a2 = k(() => i2.value < 800), o2 = k(() => i2.value < 680), { t: s2, availableLocales: c2 } = z(), l2 = I(`settings`), d2 = k(() => [{ title: `appearance`, items: [{ title: `theme`, type: `radio`, items: [{ value: `light`, label: s2(`settings.appearance.theme.options.light`) }, { value: `dark`, label: s2(`settings.appearance.theme.options.dark`) }, { value: `system`, label: s2(`settings.appearance.theme.options.system`) }] }] }, { title: `geolocation`, items: [{ title: `watchCompatibilityMode`, type: `checkbox` }, { title: `geolocationCorrection`, type: `checkbox` }] }, { title: `language`, items: [{ title: `interfaceLanguage`, type: `select`, items: c2.map((e3) => ({ value: e3, label: s2(`settings.language.interfaceLanguage.options.${e3}`) })) }, { title: `mapLanguage`, type: `select`, items: c2.map((e3) => ({ value: e3, label: s2(`settings.language.mapLanguage.options.${e3}`) })).concat([{ value: `interface`, label: s2(`settings.language.mapLanguage.options.interface`) }]) }] }, { title: `tools`, items: [{ title: `apiDetection`, type: `button` }, { title: `imuOrientationTesting`, type: `button` }] }]), f2 = () => {
    n2.push(`/api-detection`);
  }, p2 = () => {
    n2.push(`/sensor-demo`);
  };
  return v(() => {
    l2.init();
  }), (e3, t3) => (E(), F(`div`, oe, [M(`div`, se, [M(`div`, ce, [(E(true), F(P, null, T(d2.value, (t4) => (E(), x(S(u), { id: `appearance`, key: t4.title, title: e3.$t(`settings.${t4.title}.title`) }, { default: L(() => [A(S(q), null, { default: L(() => [(E(true), F(P, null, T(t4.items, (n3) => (E(), x(S(J), { key: n3.title }, { default: L(() => [M(`div`, le, [A(S(Z), { style: { "white-space": `nowrap` }, tooltip: { trigger: r2.value ? `click` : `hover` } }, { tooltip: L(() => [C(j(n3.items || n3.type === `button` ? e3.$t(`settings.${t4.title}.${n3.title}.title`) : e3.$t(`settings.${t4.title}.${n3.title}`)), 1)]), default: L(() => [C(j(n3.items || n3.type === `button` ? e3.$t(`settings.${t4.title}.${n3.title}.title`) : e3.$t(`settings.${t4.title}.${n3.title}`)) + ` `, 1)]), _: 2 }, 1032, [`tooltip`]), n3.type === `radio` ? (E(), F(`div`, ue, [a2.value ? (E(), x(S(V), { key: 1, value: S(l2).settings[n3.title], "onUpdate:value": (e4) => S(l2).settings[n3.title] = e4, options: n3.items, "consistent-menu-width": false }, null, 8, [`value`, `onUpdate:value`, `options`])) : (E(), x(S(ae), { key: 0, value: S(l2).settings[n3.title], "onUpdate:value": (e4) => S(l2).settings[n3.title] = e4 }, { default: L(() => [(E(true), F(P, null, T(n3.items, (e4) => (E(), x(S(ne), { key: e4.value, value: e4.value, label: e4.label, checked: S(l2).settings[n3.title] === e4.value }, null, 8, [`value`, `label`, `checked`]))), 128))]), _: 2 }, 1032, [`value`, `onUpdate:value`]))])) : n3.type === `select` ? (E(), F(`div`, de, [A(S(V), { value: S(l2).settings[n3.title], "onUpdate:value": (e4) => S(l2).settings[n3.title] = e4, options: n3.items, "consistent-menu-width": false }, null, 8, [`value`, `onUpdate:value`, `options`])])) : n3.type === `checkbox` ? (E(), F(`div`, fe, [A(S(H), { value: S(l2).settings[n3.title], "onUpdate:value": (e4) => S(l2).settings[n3.title] = e4 }, null, 8, [`value`, `onUpdate:value`])])) : n3.type === `button` ? (E(), F(`div`, pe, [A(S(G), { type: `primary`, onClick: (e4) => n3.title === `apiDetection` ? f2() : p2() }, { default: L(() => [C(j(e3.$t(`settings.${t4.title}.${n3.title}.button`)), 1)]), _: 2 }, 1032, [`onClick`])])) : D(``, true)])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)]), _: 2 }, 1032, [`title`]))), 128))]), o2.value ? D(``, true) : (E(), F(`div`, me, [A(S(ee), { "show-rail": true, style: { width: `128px` } }, { default: L(() => [(E(true), F(P, null, T(d2.value, (t4) => (E(), x(S(B), { key: t4.title, title: e3.$t(`settings.${t4.title}.title`), href: `#${t4.title.toLowerCase()}` }, null, 8, [`title`, `href`]))), 128))]), _: 1 })]))])]));
} }), [[`__scopeId`, `data-v-8793c34f`]]);
export {
  he as default
};
