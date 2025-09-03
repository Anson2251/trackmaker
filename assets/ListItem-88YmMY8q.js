import { ah as xe, ai as V, i as E, a2 as Ce, q, f as D, k as ke, d as H, h as f, b as ze, p as X, t as G, j as L } from "./index-DSvGlfEm.js";
import { t as U } from "./use-locale-Dy4qq2qj.js";
import { m as I, o as p, n as b, B as M, l as R, K as W, N as $e, u as Q, q as O, ac as Ie, p as J, t as m, L as Re, v as Y, aQ as A, G as _e, i as Z, M as Te, O as Be, ad as ye, T as Pe } from "./light-DfzEfYBd.js";
var S = function() {
  return xe.Date.now();
}, je = "Expected a function", we = Math.max, Me = Math.min;
function Ee(o, r, e) {
  var n, t, u, a, i, g, s = 0, d = false, c = false, x = true;
  if (typeof o != "function") throw new TypeError(je);
  r = U(r) || 0, V(e) && (d = !!e.leading, c = "maxWait" in e, u = c ? we(U(e.maxWait) || 0, r) : u, x = "trailing" in e ? !!e.trailing : x);
  function l(h) {
    var $ = n, _ = t;
    return n = t = void 0, s = h, a = o.apply(_, $), a;
  }
  function v(h) {
    return s = h, i = setTimeout(k, r), d ? l(h) : a;
  }
  function z(h) {
    var $ = h - g, _ = h - s, j = r - $;
    return c ? Me(j, u - _) : j;
  }
  function C(h) {
    var $ = h - g, _ = h - s;
    return g === void 0 || $ >= r || $ < 0 || c && _ >= u;
  }
  function k() {
    var h = S();
    if (C(h)) return T(h);
    i = setTimeout(k, z(h));
  }
  function T(h) {
    return i = void 0, x && n ? l(h) : (n = t = void 0, a);
  }
  function B() {
    i !== void 0 && clearTimeout(i), s = 0, n = g = t = i = void 0;
  }
  function y() {
    return i === void 0 ? a : T(S());
  }
  function P() {
    var h = S(), $ = C(h);
    if (n = arguments, t = this, g = h, $) {
      if (i === void 0) return v(g);
      if (c) return clearTimeout(i), i = setTimeout(k, r), l(g);
    }
    return i === void 0 && (i = setTimeout(k, r)), a;
  }
  return P.cancel = B, P.flush = y, P;
}
var Oe = "Expected a function";
function Ve(o, r, e) {
  var n = true, t = true;
  if (typeof o != "function") throw new TypeError(Oe);
  return V(e) && (n = "leading" in e ? !!e.leading : n, t = "trailing" in e ? !!e.trailing : t), Ee(o, r, { leading: n, maxWait: r, trailing: t });
}
function qe(o, r, e) {
  var n;
  const t = E(o, null);
  if (t === null) return;
  const u = (n = Ce()) === null || n === void 0 ? void 0 : n.proxy;
  q(e, a), a(e.value), D(() => {
    a(void 0, e.value);
  });
  function a(s, d) {
    if (!t) return;
    const c = t[r];
    d !== void 0 && i(c, d), s !== void 0 && g(c, s);
  }
  function i(s, d) {
    s[d] || (s[d] = []), s[d].splice(s[d].findIndex((c) => c === u), 1);
  }
  function g(s, d) {
    s[d] || (s[d] = []), ~s[d].findIndex((c) => c === u) || s[d].push(u);
  }
}
function Xe(o, r, e) {
  const n = E(o, null);
  n !== null && (r in n || (n[r] = []), n[r].push(e.value), q(e, (t, u) => {
    const a = n[r], i = a.findIndex((g) => g === u);
    ~i && a.splice(i, 1), a.push(t);
  }), D(() => {
    const t = n[r], u = t.findIndex((a) => a === e.value);
    ~u && t.splice(u, 1);
  }));
}
function Ge(o, r, e) {
  const n = E(o, null);
  n !== null && (r in n || (n[r] = []), ke(() => {
    const t = e();
    t && n[r].push(t);
  }), D(() => {
    const t = n[r], u = e(), a = t.findIndex((i) => i === u);
    ~a && t.splice(a, 1);
  }));
}
function Qe(o) {
  switch (typeof o) {
    case "string":
      return o || void 0;
    case "number":
      return String(o);
    default:
      return;
  }
}
function Je(o, r = "default", e = []) {
  const t = o.$slots[r];
  return t === void 0 ? e : t();
}
const Se = { color: Object, type: { type: String, default: "default" }, round: Boolean, size: { type: String, default: "medium" }, closable: Boolean, disabled: { type: Boolean, default: void 0 } }, Le = I("tag", `
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
`, [p("strong", `
 font-weight: var(--n-font-weight-strong);
 `), b("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), b("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), b("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), b("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), p("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [b("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), b("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), p("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), p("icon, avatar", [p("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), p("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), p("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [M("disabled", [R("&:hover", "background-color: var(--n-color-hover-checkable);", [M("checked", "color: var(--n-text-color-hover-checkable);")]), R("&:active", "background-color: var(--n-color-pressed-checkable);", [M("checked", "color: var(--n-text-color-pressed-checkable);")])]), p("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [M("disabled", [R("&:hover", "background-color: var(--n-color-checked-hover);"), R("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), De = Object.assign(Object.assign(Object.assign({}, O.props), Se), { bordered: { type: Boolean, default: void 0 }, checked: Boolean, checkable: Boolean, strong: Boolean, triggerClickOnClose: Boolean, onClose: [Array, Function], onMouseenter: Function, onMouseleave: Function, "onUpdate:checked": Function, onUpdateChecked: Function, internalCloseFocusable: { type: Boolean, default: true }, internalCloseIsButtonTag: { type: Boolean, default: true }, onCheckedChange: Function }), He = Z("n-tag"), Ye = H({ name: "Tag", props: De, slots: Object, setup(o) {
  const r = ze(null), { mergedBorderedRef: e, mergedClsPrefixRef: n, inlineThemeDisabled: t, mergedRtlRef: u } = Q(o), a = O("Tag", "-tag", Le, Ie, o, n);
  X(He, { roundRef: G(o, "round") });
  function i() {
    if (!o.disabled && o.checkable) {
      const { checked: l, onCheckedChange: v, onUpdateChecked: z, "onUpdate:checked": C } = o;
      z && z(!l), C && C(!l), v && v(!l);
    }
  }
  function g(l) {
    if (o.triggerClickOnClose || l.stopPropagation(), !o.disabled) {
      const { onClose: v } = o;
      v && _e(v, l);
    }
  }
  const s = { setTextContent(l) {
    const { value: v } = r;
    v && (v.textContent = l);
  } }, d = J("Tag", u, n), c = L(() => {
    const { type: l, size: v, color: { color: z, textColor: C } = {} } = o, { common: { cubicBezierEaseInOut: k }, self: { padding: T, closeMargin: B, borderRadius: y, opacityDisabled: P, textColorCheckable: h, textColorHoverCheckable: $, textColorPressedCheckable: _, textColorChecked: j, colorCheckable: ee, colorHoverCheckable: oe, colorPressedCheckable: re, colorChecked: ne, colorCheckedHover: te, colorCheckedPressed: ie, closeBorderRadius: le, fontWeightStrong: ae, [m("colorBordered", l)]: se, [m("closeSize", v)]: ce, [m("closeIconSize", v)]: de, [m("fontSize", v)]: ue, [m("height", v)]: N, [m("color", l)]: he, [m("textColor", l)]: ve, [m("border", l)]: ge, [m("closeIconColor", l)]: F, [m("closeIconColorHover", l)]: be, [m("closeIconColorPressed", l)]: fe, [m("closeColorHover", l)]: me, [m("closeColorPressed", l)]: pe } } = a.value, w = Re(B);
    return { "--n-font-weight-strong": ae, "--n-avatar-size-override": `calc(${N} - 8px)`, "--n-bezier": k, "--n-border-radius": y, "--n-border": ge, "--n-close-icon-size": de, "--n-close-color-pressed": pe, "--n-close-color-hover": me, "--n-close-border-radius": le, "--n-close-icon-color": F, "--n-close-icon-color-hover": be, "--n-close-icon-color-pressed": fe, "--n-close-icon-color-disabled": F, "--n-close-margin-top": w.top, "--n-close-margin-right": w.right, "--n-close-margin-bottom": w.bottom, "--n-close-margin-left": w.left, "--n-close-size": ce, "--n-color": z || (e.value ? se : he), "--n-color-checkable": ee, "--n-color-checked": ne, "--n-color-checked-hover": te, "--n-color-checked-pressed": ie, "--n-color-hover-checkable": oe, "--n-color-pressed-checkable": re, "--n-font-size": ue, "--n-height": N, "--n-opacity-disabled": P, "--n-padding": T, "--n-text-color": C || ve, "--n-text-color-checkable": h, "--n-text-color-checked": j, "--n-text-color-hover-checkable": $, "--n-text-color-pressed-checkable": _ };
  }), x = t ? Y("tag", L(() => {
    let l = "";
    const { type: v, size: z, color: { color: C, textColor: k } = {} } = o;
    return l += v[0], l += z[0], C && (l += `a${A(C)}`), k && (l += `b${A(k)}`), e.value && (l += "c"), l;
  }), c, o) : void 0;
  return Object.assign(Object.assign({}, s), { rtlEnabled: d, mergedClsPrefix: n, contentRef: r, mergedBordered: e, handleClick: i, handleCloseClick: g, cssVars: t ? void 0 : c, themeClass: x == null ? void 0 : x.themeClass, onRender: x == null ? void 0 : x.onRender });
}, render() {
  var o, r;
  const { mergedClsPrefix: e, rtlEnabled: n, closable: t, color: { borderColor: u } = {}, round: a, onRender: i, $slots: g } = this;
  i == null ? void 0 : i();
  const s = W(g.avatar, (c) => c && f("div", { class: `${e}-tag__avatar` }, c)), d = W(g.icon, (c) => c && f("div", { class: `${e}-tag__icon` }, c));
  return f("div", { class: [`${e}-tag`, this.themeClass, { [`${e}-tag--rtl`]: n, [`${e}-tag--strong`]: this.strong, [`${e}-tag--disabled`]: this.disabled, [`${e}-tag--checkable`]: this.checkable, [`${e}-tag--checked`]: this.checkable && this.checked, [`${e}-tag--round`]: a, [`${e}-tag--avatar`]: s, [`${e}-tag--icon`]: d, [`${e}-tag--closable`]: t }], style: this.cssVars, onClick: this.handleClick, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave }, d || s, f("span", { class: `${e}-tag__content`, ref: "contentRef" }, (r = (o = this.$slots).default) === null || r === void 0 ? void 0 : r.call(o)), !this.checkable && t ? f($e, { clsPrefix: e, class: `${e}-tag__close`, disabled: this.disabled, onClick: this.handleCloseClick, focusable: this.internalCloseFocusable, round: a, isButtonTag: this.internalCloseIsButtonTag, absolute: true }) : null, !this.checkable && this.mergedBordered ? f("div", { class: `${e}-tag__border`, style: { borderColor: u } }) : null);
} }), Ne = R([I("list", `
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
 `, [p("show-divider", [I("list-item", [R("&:not(:last-child)", [b("divider", `
 background-color: var(--n-merged-border-color);
 `)])])]), p("clickable", [I("list-item", `
 cursor: pointer;
 `)]), p("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), p("hoverable", [I("list-item", `
 border-radius: var(--n-border-radius);
 `, [R("&:hover", `
 background-color: var(--n-merged-color-hover);
 `, [b("divider", `
 background-color: transparent;
 `)])])]), p("bordered, hoverable", [I("list-item", `
 padding: 12px 20px;
 `), b("header, footer", `
 padding: 12px 20px;
 `)]), b("header, footer", `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [R("&:not(:last-child)", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), I("list-item", `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [b("prefix", `
 margin-right: 20px;
 flex: 0;
 `), b("suffix", `
 margin-left: 20px;
 flex: 0;
 `), b("main", `
 flex: 1;
 `), b("divider", `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), Te(I("list", `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), Be(I("list", `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]), Fe = Object.assign(Object.assign({}, O.props), { size: { type: String, default: "medium" }, bordered: Boolean, clickable: Boolean, hoverable: Boolean, showDivider: { type: Boolean, default: true } }), K = Z("n-list"), Ze = H({ name: "List", props: Fe, slots: Object, setup(o) {
  const { mergedClsPrefixRef: r, inlineThemeDisabled: e, mergedRtlRef: n } = Q(o), t = J("List", n, r), u = O("List", "-list", Ne, ye, o, r);
  X(K, { showDividerRef: G(o, "showDivider"), mergedClsPrefixRef: r });
  const a = L(() => {
    const { common: { cubicBezierEaseInOut: g }, self: { fontSize: s, textColor: d, color: c, colorModal: x, colorPopover: l, borderColor: v, borderColorModal: z, borderColorPopover: C, borderRadius: k, colorHover: T, colorHoverModal: B, colorHoverPopover: y } } = u.value;
    return { "--n-font-size": s, "--n-bezier": g, "--n-text-color": d, "--n-color": c, "--n-border-radius": k, "--n-border-color": v, "--n-border-color-modal": z, "--n-border-color-popover": C, "--n-color-modal": x, "--n-color-popover": l, "--n-color-hover": T, "--n-color-hover-modal": B, "--n-color-hover-popover": y };
  }), i = e ? Y("list", void 0, a, o) : void 0;
  return { mergedClsPrefix: r, rtlEnabled: t, cssVars: e ? void 0 : a, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var o;
  const { $slots: r, mergedClsPrefix: e, onRender: n } = this;
  return n == null ? void 0 : n(), f("ul", { class: [`${e}-list`, this.rtlEnabled && `${e}-list--rtl`, this.bordered && `${e}-list--bordered`, this.showDivider && `${e}-list--show-divider`, this.hoverable && `${e}-list--hoverable`, this.clickable && `${e}-list--clickable`, this.themeClass], style: this.cssVars }, r.header ? f("div", { class: `${e}-list__header` }, r.header()) : null, (o = r.default) === null || o === void 0 ? void 0 : o.call(r), r.footer ? f("div", { class: `${e}-list__footer` }, r.footer()) : null);
} }), Ke = H({ name: "ListItem", slots: Object, setup() {
  const o = E(K, null);
  return o || Pe("list-item", "`n-list-item` must be placed in `n-list`."), { showDivider: o.showDividerRef, mergedClsPrefix: o.mergedClsPrefixRef };
}, render() {
  const { $slots: o, mergedClsPrefix: r } = this;
  return f("li", { class: `${r}-list-item` }, o.prefix ? f("div", { class: `${r}-list-item__prefix` }, o.prefix()) : null, o.default ? f("div", { class: `${r}-list-item__main` }, o) : null, o.suffix ? f("div", { class: `${r}-list-item__suffix` }, o.suffix()) : null, this.showDivider && f("div", { class: `${r}-list-item__divider` }));
} });
export {
  Ye as N,
  Ze as a,
  Ke as b,
  Se as c,
  Qe as d,
  Xe as e,
  Ge as f,
  Je as g,
  Ve as t,
  qe as u
};
