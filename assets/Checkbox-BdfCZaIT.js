import { F as e, L as t, O as n, T as r, _ as i, _t as a, dt as o, f as s, gt as c, h as l, mt as u, pt as d, ut as f, vt as p, y as m } from "./Card-nhqq8IKa.js";
import { U as h, X as g, Y as _ } from "./Tooltip-DGge0ha1.js";
import { Bt as v, Et as y, Ot as b, an as x, cn as S, gt as C, wt as w } from "./index-DTVnoW_1.js";
import { l as T } from "./Dropdown-dlLCnzPd.js";
import { c as E, d as D, l as O } from "./Button-o58fM-RZ.js";
const k = e(`n-checkbox-group`);
var A = w({ name: `CheckboxGroup`, props: { min: Number, max: Number, size: String, value: Array, defaultValue: { type: Array, default: null }, disabled: { type: Boolean, default: void 0 }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onChange: [Function, Array] }, setup(e2) {
  let { mergedClsPrefixRef: t2 } = m(e2), r2 = D(e2), { mergedSizeRef: i2, mergedDisabledRef: a2 } = r2, o2 = x(e2.defaultValue), s2 = h(C(() => e2.value), o2), c2 = C(() => {
    var _a;
    return ((_a = s2.value) == null ? void 0 : _a.length) || 0;
  }), l2 = C(() => Array.isArray(s2.value) ? new Set(s2.value) : /* @__PURE__ */ new Set());
  function u2(t3, i3) {
    let { nTriggerFormInput: a3, nTriggerFormChange: c3 } = r2, { onChange: l3, "onUpdate:value": u3, onUpdateValue: d2 } = e2;
    if (Array.isArray(s2.value)) {
      let e3 = Array.from(s2.value), r3 = e3.findIndex((e4) => e4 === i3);
      t3 ? ~r3 || (e3.push(i3), d2 && n(d2, e3, { actionType: `check`, value: i3 }), u3 && n(u3, e3, { actionType: `check`, value: i3 }), a3(), c3(), o2.value = e3, l3 && n(l3, e3)) : ~r3 && (e3.splice(r3, 1), d2 && n(d2, e3, { actionType: `uncheck`, value: i3 }), u3 && n(u3, e3, { actionType: `uncheck`, value: i3 }), l3 && n(l3, e3), o2.value = e3, a3(), c3());
    } else t3 ? (d2 && n(d2, [i3], { actionType: `check`, value: i3 }), u3 && n(u3, [i3], { actionType: `check`, value: i3 }), l3 && n(l3, [i3]), o2.value = [i3], a3(), c3()) : (d2 && n(d2, [], { actionType: `uncheck`, value: i3 }), u3 && n(u3, [], { actionType: `uncheck`, value: i3 }), l3 && n(l3, []), o2.value = [], a3(), c3());
  }
  return v(k, { checkedCountRef: c2, maxRef: S(e2, `max`), minRef: S(e2, `min`), valueSetRef: l2, disabledRef: a2, mergedSizeRef: i2, toggleCheckbox: u2 }), { mergedClsPrefix: t2 };
}, render() {
  return y(`div`, { class: `${this.mergedClsPrefix}-checkbox-group`, role: `group` }, this.$slots);
} }), j = () => y(`svg`, { viewBox: `0 0 64 64`, class: `check-icon` }, y(`path`, { d: `M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z` })), M = () => y(`svg`, { viewBox: `0 0 100 100`, class: `line-icon` }, y(`path`, { d: `M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z` })), N = f([o(`checkbox`, `
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `, [u(`show-label`, `line-height: var(--n-label-line-height);`), f(`&:hover`, [o(`checkbox-box`, [d(`border`, `border: var(--n-border-checked);`)])]), f(`&:focus:not(:active)`, [o(`checkbox-box`, [d(`border`, `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), u(`inside-table`, [o(`checkbox-box`, `
 background-color: var(--n-merged-color-table);
 `)]), u(`checked`, [o(`checkbox-box`, `
 background-color: var(--n-color-checked);
 `, [o(`checkbox-icon`, [f(`.check-icon`, `
 opacity: 1;
 transform: scale(1);
 `)])])]), u(`indeterminate`, [o(`checkbox-box`, [o(`checkbox-icon`, [f(`.check-icon`, `
 opacity: 0;
 transform: scale(.5);
 `), f(`.line-icon`, `
 opacity: 1;
 transform: scale(1);
 `)])])]), u(`checked, indeterminate`, [f(`&:focus:not(:active)`, [o(`checkbox-box`, [d(`border`, `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), o(`checkbox-box`, `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [d(`border`, { border: `var(--n-border-checked)` })])]), u(`disabled`, { cursor: `not-allowed` }, [u(`checked`, [o(`checkbox-box`, `
 background-color: var(--n-color-disabled-checked);
 `, [d(`border`, { border: `var(--n-border-disabled-checked)` }), o(`checkbox-icon`, [f(`.check-icon, .line-icon`, { fill: `var(--n-check-mark-color-disabled-checked)` })])])]), o(`checkbox-box`, `
 background-color: var(--n-color-disabled);
 `, [d(`border`, `
 border: var(--n-border-disabled);
 `), o(`checkbox-icon`, [f(`.check-icon, .line-icon`, `
 fill: var(--n-check-mark-color-disabled);
 `)])]), d(`label`, `
 color: var(--n-text-color-disabled);
 `)]), o(`checkbox-box-wrapper`, `
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `), o(`checkbox-box`, `
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `, [d(`border`, `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `), o(`checkbox-icon`, `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [f(`.check-icon, .line-icon`, `
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `), E({ left: `1px`, top: `1px` })])]), d(`label`, `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [f(`&:empty`, { display: `none` })])]), a(o(`checkbox`, `
 --n-merged-color-table: var(--n-color-table-modal);
 `)), p(o(`checkbox`, `
 --n-merged-color-table: var(--n-color-table-popover);
 `))]), P = w({ name: `Checkbox`, props: Object.assign(Object.assign({}, s.props), { size: String, checked: { type: [Boolean, String, Number], default: void 0 }, defaultChecked: { type: [Boolean, String, Number], default: false }, value: [String, Number], disabled: { type: Boolean, default: void 0 }, indeterminate: Boolean, label: String, focusable: { type: Boolean, default: true }, checkedValue: { type: [Boolean, String, Number], default: true }, uncheckedValue: { type: [Boolean, String, Number], default: false }, "onUpdate:checked": [Function, Array], onUpdateChecked: [Function, Array], privateInsideTable: Boolean, onChange: [Function, Array] }), setup(e2) {
  let r2 = b(k, null), a2 = x(null), { mergedClsPrefixRef: o2, inlineThemeDisabled: u2, mergedRtlRef: d2 } = m(e2), f2 = x(e2.defaultChecked), p2 = h(S(e2, `checked`), f2), _2 = t(() => {
    if (r2) {
      let t2 = r2.valueSetRef.value;
      return t2 && e2.value !== void 0 ? t2.has(e2.value) : false;
    } else return p2.value === e2.checkedValue;
  }), v2 = D(e2, { mergedSize(t2) {
    let { size: n2 } = e2;
    if (n2 !== void 0) return n2;
    if (r2) {
      let { value: e3 } = r2.mergedSizeRef;
      if (e3 !== void 0) return e3;
    }
    if (t2) {
      let { mergedSize: e3 } = t2;
      if (e3 !== void 0) return e3.value;
    }
    return `medium`;
  }, mergedDisabled(t2) {
    let { disabled: n2 } = e2;
    if (n2 !== void 0) return n2;
    if (r2) {
      if (r2.disabledRef.value) return true;
      let { maxRef: { value: e3 }, checkedCountRef: t3 } = r2;
      if (e3 !== void 0 && t3.value >= e3 && !_2.value) return true;
      let { minRef: { value: n3 } } = r2;
      if (n3 !== void 0 && t3.value <= n3 && _2.value) return true;
    }
    return t2 ? t2.disabled.value : false;
  } }), { mergedDisabledRef: y2, mergedSizeRef: w2 } = v2, E2 = s(`Checkbox`, `-checkbox`, N, T, e2, o2);
  function O2(t2) {
    if (r2 && e2.value !== void 0) r2.toggleCheckbox(!_2.value, e2.value);
    else {
      let { onChange: r3, "onUpdate:checked": i2, onUpdateChecked: a3 } = e2, { nTriggerFormInput: o3, nTriggerFormChange: s2 } = v2, c2 = _2.value ? e2.uncheckedValue : e2.checkedValue;
      i2 && n(i2, c2, t2), a3 && n(a3, c2, t2), r3 && n(r3, c2, t2), o3(), s2(), f2.value = c2;
    }
  }
  function A2(e3) {
    y2.value || O2(e3);
  }
  function j2(e3) {
    if (!y2.value) switch (e3.key) {
      case ` `:
      case `Enter`:
        O2(e3);
    }
  }
  function M2(e3) {
    switch (e3.key) {
      case ` `:
        e3.preventDefault();
    }
  }
  let P2 = { focus: () => {
    var e3;
    (e3 = a2.value) == null || e3.focus();
  }, blur: () => {
    var e3;
    (e3 = a2.value) == null || e3.blur();
  } }, F = l(`Checkbox`, d2, o2), I = C(() => {
    let { value: e3 } = w2, { common: { cubicBezierEaseInOut: t2 }, self: { borderRadius: n2, color: r3, colorChecked: i2, colorDisabled: a3, colorTableHeader: o3, colorTableHeaderModal: s2, colorTableHeaderPopover: l2, checkMarkColor: u3, checkMarkColorDisabled: d3, border: f3, borderFocus: p3, borderDisabled: m2, borderChecked: h2, boxShadowFocus: g2, textColor: _3, textColorDisabled: v3, checkMarkColorDisabledChecked: y3, colorDisabledChecked: b2, borderDisabledChecked: x2, labelPadding: S2, labelLineHeight: C2, labelFontWeight: T2, [c(`fontSize`, e3)]: D2, [c(`size`, e3)]: O3 } } = E2.value;
    return { "--n-label-line-height": C2, "--n-label-font-weight": T2, "--n-size": O3, "--n-bezier": t2, "--n-border-radius": n2, "--n-border": f3, "--n-border-checked": h2, "--n-border-focus": p3, "--n-border-disabled": m2, "--n-border-disabled-checked": x2, "--n-box-shadow-focus": g2, "--n-color": r3, "--n-color-checked": i2, "--n-color-table": o3, "--n-color-table-modal": s2, "--n-color-table-popover": l2, "--n-color-disabled": a3, "--n-color-disabled-checked": b2, "--n-text-color": _3, "--n-text-color-disabled": v3, "--n-check-mark-color": u3, "--n-check-mark-color-disabled": d3, "--n-check-mark-color-disabled-checked": y3, "--n-font-size": D2, "--n-label-padding": S2 };
  }), L = u2 ? i(`checkbox`, C(() => w2.value[0]), I, e2) : void 0;
  return Object.assign(v2, P2, { rtlEnabled: F, selfRef: a2, mergedClsPrefix: o2, mergedDisabled: y2, renderedChecked: _2, mergedTheme: E2, labelId: g(), handleClick: A2, handleKeyUp: j2, handleKeyDown: M2, cssVars: u2 ? void 0 : I, themeClass: L == null ? void 0 : L.themeClass, onRender: L == null ? void 0 : L.onRender });
}, render() {
  var e2;
  let { $slots: t2, renderedChecked: n2, mergedDisabled: i2, indeterminate: a2, privateInsideTable: o2, cssVars: s2, labelId: c2, label: l2, mergedClsPrefix: u2, focusable: d2, handleKeyUp: f2, handleKeyDown: p2, handleClick: m2 } = this;
  (e2 = this.onRender) == null || e2.call(this);
  let h2 = r(t2.default, (e3) => l2 || e3 ? y(`span`, { class: `${u2}-checkbox__label`, id: c2 }, l2 || e3) : null);
  return y(`div`, { ref: `selfRef`, class: [`${u2}-checkbox`, this.themeClass, this.rtlEnabled && `${u2}-checkbox--rtl`, n2 && `${u2}-checkbox--checked`, i2 && `${u2}-checkbox--disabled`, a2 && `${u2}-checkbox--indeterminate`, o2 && `${u2}-checkbox--inside-table`, h2 && `${u2}-checkbox--show-label`], tabindex: i2 || !d2 ? void 0 : 0, role: `checkbox`, "aria-checked": a2 ? `mixed` : n2, "aria-labelledby": c2, style: s2, onKeyup: f2, onKeydown: p2, onClick: m2, onMousedown: () => {
    _(`selectstart`, window, (e3) => {
      e3.preventDefault();
    }, { once: true });
  } }, y(`div`, { class: `${u2}-checkbox-box-wrapper` }, `\xA0`, y(`div`, { class: `${u2}-checkbox-box` }, y(O, null, { default: () => this.indeterminate ? y(`div`, { key: `indeterminate`, class: `${u2}-checkbox-icon` }, M()) : y(`div`, { key: `check`, class: `${u2}-checkbox-icon` }, j()) }), y(`div`, { class: `${u2}-checkbox-box__border` }))), h2);
} });
export {
  A as n,
  P as t
};
