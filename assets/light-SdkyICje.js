import { z as B, i as J, j as H, f as Q, p as ee, d as U, h as x, B as te, t as re } from "./index-CFhMVeLy.js";
import { i as ne, aC as oe, l as N, c as ie, m as ae, n as K, aj as se, A as T, Y as G, Z as le, a0 as de, f as P } from "./light-BiBhEq9V.js";
const Y = /* @__PURE__ */ new WeakSet();
function Ze(e) {
  Y.add(e);
}
function Je(e) {
  return !Y.has(e);
}
function Qe(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? B(e) : typeof e == "number" ? B(String(e)) : null;
}
const R = ne("n-form-item");
function et(e, { defaultSize: t = "medium", mergedSize: r, mergedDisabled: o } = {}) {
  const n = J(R, null);
  ee(R, null);
  const a = H(r ? () => r(n) : () => {
    const { size: s } = e;
    if (s) return s;
    if (n) {
      const { mergedSize: d } = n;
      if (d.value !== void 0) return d.value;
    }
    return t;
  }), i = H(o ? () => o(n) : () => {
    const { disabled: s } = e;
    return s !== void 0 ? s : n ? n.disabled.value : false;
  }), u = H(() => {
    const { status: s } = e;
    return s || (n == null ? void 0 : n.mergedValidationStatus.value);
  });
  return Q(() => {
    n && n.restoreValidation();
  }), { mergedSizeRef: a, mergedDisabledRef: i, mergedStatusRef: u, nTriggerFormBlur() {
    n && n.handleContentBlur();
  }, nTriggerFormChange() {
    n && n.handleContentChange();
  }, nTriggerFormFocus() {
    n && n.handleContentFocus();
  }, nTriggerFormInput() {
    n && n.handleContentInput();
  } };
}
const ce = U({ name: "BaseIconSwitchTransition", setup(e, { slots: t }) {
  const r = oe();
  return () => x(te, { name: "icon-switch-transition", appear: r.value }, t);
} }), { cubicBezierEaseInOut: ue } = ie;
function j({ originalTransform: e = "", left: t = 0, top: r = 0, transition: o = `all .3s ${ue} !important` } = {}) {
  return [N("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", { transform: `${e} scale(0.75)`, left: t, top: r, opacity: 0 }), N("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", { transform: `scale(1) ${e}`, left: t, top: r, opacity: 1 }), N("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", { transformOrigin: "center", position: "absolute", left: t, top: r, transition: o })];
}
const fe = N([N("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), ae("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [K("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [j()]), K("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [j({ left: "50%", top: "50%", originalTransform: "translateX(-50%) translateY(-50%)" })]), K("container", `
 animation: rotator 3s linear infinite both;
 `, [K("icon", `
 height: 1em;
 width: 1em;
 `)])])]), M = "1.6s", he = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, tt = U({ name: "BaseLoading", props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, he), setup(e) {
  se("-base-loading", fe, re(e, "clsPrefix"));
}, render() {
  const { clsPrefix: e, radius: t, strokeWidth: r, stroke: o, scale: n } = this, a = t / n;
  return x("div", { class: `${e}-base-loading`, role: "img", "aria-label": "loading" }, x(ce, null, { default: () => this.show ? x("div", { key: "icon", class: `${e}-base-loading__transition-wrapper` }, x("div", { class: `${e}-base-loading__container` }, x("svg", { class: `${e}-base-loading__icon`, viewBox: `0 0 ${2 * a} ${2 * a}`, xmlns: "http://www.w3.org/2000/svg", style: { color: o } }, x("g", null, x("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${a} ${a};270 ${a} ${a}`, begin: "0s", dur: M, fill: "freeze", repeatCount: "indefinite" }), x("circle", { class: `${e}-base-loading__icon`, fill: "none", stroke: "currentColor", "stroke-width": r, "stroke-linecap": "round", cx: a, cy: a, r: t - r / 2, "stroke-dasharray": 5.67 * t, "stroke-dashoffset": 18.48 * t }, x("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`, begin: "0s", dur: M, fill: "freeze", repeatCount: "indefinite" }), x("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * t};${1.42 * t};${5.67 * t}`, begin: "0s", dur: M, fill: "freeze", repeatCount: "indefinite" })))))) : x("div", { key: "placeholder", class: `${e}-base-loading__placeholder` }, this.$slots) }));
} });
function D(e) {
  return Array.isArray(e) ? e : [e];
}
const W = { STOP: "STOP" };
function q(e, t) {
  const r = t(e);
  e.children !== void 0 && r !== W.STOP && e.children.forEach((o) => q(o, t));
}
function ge(e, t = {}) {
  const { preserveGroup: r = false } = t, o = [], n = r ? (i) => {
    i.isLeaf || (o.push(i.key), a(i.children));
  } : (i) => {
    i.isLeaf || (i.isGroup || o.push(i.key), a(i.children));
  };
  function a(i) {
    i.forEach(n);
  }
  return a(e), o;
}
function pe(e, t) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !t(e);
}
function me(e) {
  return e.children;
}
function ye(e) {
  return e.key;
}
function be() {
  return false;
}
function xe(e, t) {
  const { isLeaf: r } = e;
  return !(r === false && !Array.isArray(t(e)));
}
function Se(e) {
  return e.disabled === true;
}
function ve(e, t) {
  return e.isLeaf === false && !Array.isArray(t(e));
}
function F(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function O(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function Ce(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function we(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function ke(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function rt(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    t.set(r.key, o);
  }), (r) => {
    var o;
    return (o = t.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class Le extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function $e(e, t, r, o) {
  return z(t.concat(e), r, o, false);
}
function Ae(e, t) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    const n = t.treeNodeMap.get(o);
    if (n !== void 0) {
      let a = n.parent;
      for (; a !== null && !(a.disabled || r.has(a.key)); ) r.add(a.key), a = a.parent;
    }
  }), r;
}
function Pe(e, t, r, o) {
  const n = z(t, r, o, false), a = z(e, r, o, true), i = Ae(e, r), u = [];
  return n.forEach((s) => {
    (a.has(s) || i.has(s)) && u.push(s);
  }), u.forEach((s) => n.delete(s)), n;
}
function I(e, t) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: n, indeterminateKeys: a, cascade: i, leafOnly: u, checkStrategy: s, allowNotLoaded: d } = e;
  if (!i) return o !== void 0 ? { checkedKeys: Ce(r, o), indeterminateKeys: Array.from(a) } : n !== void 0 ? { checkedKeys: we(r, n), indeterminateKeys: Array.from(a) } : { checkedKeys: Array.from(r), indeterminateKeys: Array.from(a) };
  const { levelTreeNodeMap: h } = t;
  let f;
  n !== void 0 ? f = Pe(n, r, t, d) : o !== void 0 ? f = $e(o, r, t, d) : f = z(r, t, d, false);
  const y = s === "parent", L = s === "child" || u, g = f, k = /* @__PURE__ */ new Set(), $ = Math.max.apply(null, Array.from(h.keys()));
  for (let w = $; w >= 0; w -= 1) {
    const A = w === 0, S = h.get(w);
    for (const l of S) {
      if (l.isLeaf) continue;
      const { key: c, shallowLoaded: m } = l;
      if (L && m && l.children.forEach((p) => {
        !p.disabled && !p.isLeaf && p.shallowLoaded && g.has(p.key) && g.delete(p.key);
      }), l.disabled || !m) continue;
      let v = true, b = false, C = true;
      for (const p of l.children) {
        const E = p.key;
        if (!p.disabled) {
          if (C && (C = false), g.has(E)) b = true;
          else if (k.has(E)) {
            b = true, v = false;
            break;
          } else if (v = false, b) break;
        }
      }
      v && !C ? (y && l.children.forEach((p) => {
        !p.disabled && g.has(p.key) && g.delete(p.key);
      }), g.add(c)) : b && k.add(c), A && L && g.has(c) && g.delete(c);
    }
  }
  return { checkedKeys: Array.from(g), indeterminateKeys: Array.from(k) };
}
function z(e, t, r, o) {
  const { treeNodeMap: n, getChildren: a } = t, i = /* @__PURE__ */ new Set(), u = new Set(e);
  return e.forEach((s) => {
    const d = n.get(s);
    d !== void 0 && q(d, (h) => {
      if (h.disabled) return W.STOP;
      const { key: f } = h;
      if (!i.has(f) && (i.add(f), u.add(f), ve(h.rawNode, a))) {
        if (o) return W.STOP;
        if (!r) throw new Le();
      }
    });
  }), u;
}
function Ne(e, { includeGroup: t = false, includeSelf: r = true }, o) {
  var n;
  const a = o.treeNodeMap;
  let i = e == null ? null : (n = a.get(e)) !== null && n !== void 0 ? n : null;
  const u = { keyPath: [], treeNodePath: [], treeNode: i };
  if (i == null ? void 0 : i.ignored) return u.treeNode = null, u;
  for (; i; ) !i.ignored && (t || !i.isGroup) && u.treeNodePath.push(i), i = i.parent;
  return u.treeNodePath.reverse(), r || u.treeNodePath.pop(), u.keyPath = u.treeNodePath.map((s) => s.key), u;
}
function Te(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Ee(e, t) {
  const r = e.siblings, o = r.length, { index: n } = e;
  return t ? r[(n + 1) % o] : n === r.length - 1 ? null : r[n + 1];
}
function V(e, t, { loop: r = false, includeDisabled: o = false } = {}) {
  const n = t === "prev" ? Ke : Ee, a = { reverse: t === "prev" };
  let i = false, u = null;
  function s(d) {
    if (d !== null) {
      if (d === e) {
        if (!i) i = true;
        else if (!e.disabled && !e.isGroup) {
          u = e;
          return;
        }
      } else if ((!d.disabled || o) && !d.ignored && !d.isGroup) {
        u = d;
        return;
      }
      if (d.isGroup) {
        const h = _(d, a);
        h !== null ? u = h : s(n(d, r));
      } else {
        const h = n(d, false);
        if (h !== null) s(h);
        else {
          const f = ze(d);
          (f == null ? void 0 : f.isGroup) ? s(n(f, r)) : r && s(n(d, true));
        }
      }
    }
  }
  return s(e), u;
}
function Ke(e, t) {
  const r = e.siblings, o = r.length, { index: n } = e;
  return t ? r[(n - 1 + o) % o] : n === 0 ? null : r[n - 1];
}
function ze(e) {
  return e.parent;
}
function _(e, t = {}) {
  const { reverse: r = false } = t, { children: o } = e;
  if (o) {
    const { length: n } = o, a = r ? n - 1 : 0, i = r ? -1 : n, u = r ? -1 : 1;
    for (let s = a; s !== i; s += u) {
      const d = o[s];
      if (!d.disabled && !d.ignored) if (d.isGroup) {
        const h = _(d, t);
        if (h !== null) return h;
      } else return d;
    }
  }
  return null;
}
const He = { getChild() {
  return this.ignored ? null : _(this);
}, getParent() {
  const { parent: e } = this;
  return (e == null ? void 0 : e.isGroup) ? e.getParent() : e;
}, getNext(e = {}) {
  return V(this, "next", e);
}, getPrev(e = {}) {
  return V(this, "prev", e);
} };
function Me(e, t) {
  const r = t ? new Set(t) : void 0, o = [];
  function n(a) {
    a.forEach((i) => {
      o.push(i), !(i.isLeaf || !i.children || i.ignored) && (i.isGroup || r === void 0 || r.has(i.key)) && n(i.children);
    });
  }
  return n(e), o;
}
function Fe(e, t) {
  const r = e.key;
  for (; t; ) {
    if (t.key === r) return true;
    t = t.parent;
  }
  return false;
}
function X(e, t, r, o, n, a = null, i = 0) {
  const u = [];
  return e.forEach((s, d) => {
    var h;
    const f = Object.create(o);
    if (f.rawNode = s, f.siblings = u, f.level = i, f.index = d, f.isFirstChild = d === 0, f.isLastChild = d + 1 === e.length, f.parent = a, !f.ignored) {
      const y = n(s);
      Array.isArray(y) && (f.children = X(y, t, r, o, n, f, i + 1));
    }
    u.push(f), t.set(f.key, f), r.has(i) || r.set(i, []), (h = r.get(i)) === null || h === void 0 || h.push(f);
  }), u;
}
function nt(e, t = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), { getDisabled: a = Se, getIgnored: i = be, getIsGroup: u = ke, getKey: s = ye } = t, d = (r = t.getChildren) !== null && r !== void 0 ? r : me, h = t.ignoreEmptyChildren ? (l) => {
    const c = d(l);
    return Array.isArray(c) ? c.length ? c : null : c;
  } : d, f = Object.assign({ get key() {
    return s(this.rawNode);
  }, get disabled() {
    return a(this.rawNode);
  }, get isGroup() {
    return u(this.rawNode);
  }, get isLeaf() {
    return pe(this.rawNode, h);
  }, get shallowLoaded() {
    return xe(this.rawNode, h);
  }, get ignored() {
    return i(this.rawNode);
  }, contains(l) {
    return Fe(this, l);
  } }, He), y = X(e, o, n, f, h);
  function L(l) {
    if (l == null) return null;
    const c = o.get(l);
    return c && !c.isGroup && !c.ignored ? c : null;
  }
  function g(l) {
    if (l == null) return null;
    const c = o.get(l);
    return c && !c.ignored ? c : null;
  }
  function k(l, c) {
    const m = g(l);
    return m ? m.getPrev(c) : null;
  }
  function $(l, c) {
    const m = g(l);
    return m ? m.getNext(c) : null;
  }
  function w(l) {
    const c = g(l);
    return c ? c.getParent() : null;
  }
  function A(l) {
    const c = g(l);
    return c ? c.getChild() : null;
  }
  const S = { treeNodes: y, treeNodeMap: o, levelTreeNodeMap: n, maxLevel: Math.max(...n.keys()), getChildren: h, getFlattenedNodes(l) {
    return Me(y, l);
  }, getNode: L, getPrev: k, getNext: $, getParent: w, getChild: A, getFirstAvailableNode() {
    return Te(y);
  }, getPath(l, c = {}) {
    return Ne(l, c, S);
  }, getCheckedKeys(l, c = {}) {
    const { cascade: m = true, leafOnly: v = false, checkStrategy: b = "all", allowNotLoaded: C = false } = c;
    return I({ checkedKeys: F(l), indeterminateKeys: O(l), cascade: m, leafOnly: v, checkStrategy: b, allowNotLoaded: C }, S);
  }, check(l, c, m = {}) {
    const { cascade: v = true, leafOnly: b = false, checkStrategy: C = "all", allowNotLoaded: p = false } = m;
    return I({ checkedKeys: F(c), indeterminateKeys: O(c), keysToCheck: l == null ? [] : D(l), cascade: v, leafOnly: b, checkStrategy: C, allowNotLoaded: p }, S);
  }, uncheck(l, c, m = {}) {
    const { cascade: v = true, leafOnly: b = false, checkStrategy: C = "all", allowNotLoaded: p = false } = m;
    return I({ checkedKeys: F(c), indeterminateKeys: O(c), keysToUncheck: l == null ? [] : D(l), cascade: v, leafOnly: b, checkStrategy: C, allowNotLoaded: p }, S);
  }, getNonLeafKeys(l = {}) {
    return ge(y, l);
  } };
  return S;
}
const Oe = { iconSizeTiny: "28px", iconSizeSmall: "34px", iconSizeMedium: "40px", iconSizeLarge: "46px", iconSizeHuge: "52px" };
function Ie(e) {
  const { textColorDisabled: t, iconColor: r, textColor2: o, fontSizeTiny: n, fontSizeSmall: a, fontSizeMedium: i, fontSizeLarge: u, fontSizeHuge: s } = e;
  return Object.assign(Object.assign({}, Oe), { fontSizeTiny: n, fontSizeSmall: a, fontSizeMedium: i, fontSizeLarge: u, fontSizeHuge: s, textColor: t, iconColor: r, extraTextColor: o });
}
const We = { name: "Empty", common: T, self: Ie }, Ge = { height: "calc(var(--n-option-height) * 7.6)", paddingTiny: "4px 0", paddingSmall: "4px 0", paddingMedium: "4px 0", paddingLarge: "4px 0", paddingHuge: "4px 0", optionPaddingTiny: "0 12px", optionPaddingSmall: "0 12px", optionPaddingMedium: "0 12px", optionPaddingLarge: "0 12px", optionPaddingHuge: "0 12px", loadingSize: "18px" };
function _e(e) {
  const { borderRadius: t, popoverColor: r, textColor3: o, dividerColor: n, textColor2: a, primaryColorPressed: i, textColorDisabled: u, primaryColor: s, opacityDisabled: d, hoverColor: h, fontSizeTiny: f, fontSizeSmall: y, fontSizeMedium: L, fontSizeLarge: g, fontSizeHuge: k, heightTiny: $, heightSmall: w, heightMedium: A, heightLarge: S, heightHuge: l } = e;
  return Object.assign(Object.assign({}, Ge), { optionFontSizeTiny: f, optionFontSizeSmall: y, optionFontSizeMedium: L, optionFontSizeLarge: g, optionFontSizeHuge: k, optionHeightTiny: $, optionHeightSmall: w, optionHeightMedium: A, optionHeightLarge: S, optionHeightHuge: l, borderRadius: t, color: r, groupHeaderTextColor: o, actionDividerColor: n, optionTextColor: a, optionTextColorPressed: i, optionTextColorDisabled: u, optionTextColorActive: s, optionOpacityDisabled: d, optionCheckColor: s, optionColorPending: h, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: h, actionTextColor: a, loadingColor: s });
}
const Be = G({ name: "InternalSelectMenu", common: T, peers: { Scrollbar: le, Empty: We }, self: _e }), Re = { paddingSingle: "0 26px 0 12px", paddingMultiple: "3px 26px 0 12px", clearSize: "16px", arrowSize: "16px" };
function je(e) {
  const { borderRadius: t, textColor2: r, textColorDisabled: o, inputColor: n, inputColorDisabled: a, primaryColor: i, primaryColorHover: u, warningColor: s, warningColorHover: d, errorColor: h, errorColorHover: f, borderColor: y, iconColor: L, iconColorDisabled: g, clearColor: k, clearColorHover: $, clearColorPressed: w, placeholderColor: A, placeholderColorDisabled: S, fontSizeTiny: l, fontSizeSmall: c, fontSizeMedium: m, fontSizeLarge: v, heightTiny: b, heightSmall: C, heightMedium: p, heightLarge: E, fontWeight: Z } = e;
  return Object.assign(Object.assign({}, Re), { fontSizeTiny: l, fontSizeSmall: c, fontSizeMedium: m, fontSizeLarge: v, heightTiny: b, heightSmall: C, heightMedium: p, heightLarge: E, borderRadius: t, fontWeight: Z, textColor: r, textColorDisabled: o, placeholderColor: A, placeholderColorDisabled: S, color: n, colorDisabled: a, colorActive: n, border: `1px solid ${y}`, borderHover: `1px solid ${u}`, borderActive: `1px solid ${i}`, borderFocus: `1px solid ${u}`, boxShadowHover: "none", boxShadowActive: `0 0 0 2px ${P(i, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${P(i, { alpha: 0.2 })}`, caretColor: i, arrowColor: L, arrowColorDisabled: g, loadingColor: i, borderWarning: `1px solid ${s}`, borderHoverWarning: `1px solid ${d}`, borderActiveWarning: `1px solid ${s}`, borderFocusWarning: `1px solid ${d}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 0 2px ${P(s, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${P(s, { alpha: 0.2 })}`, colorActiveWarning: n, caretColorWarning: s, borderError: `1px solid ${h}`, borderHoverError: `1px solid ${f}`, borderActiveError: `1px solid ${h}`, borderFocusError: `1px solid ${f}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 0 2px ${P(h, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${P(h, { alpha: 0.2 })}`, colorActiveError: n, caretColorError: h, clearColor: k, clearColorHover: $, clearColorPressed: w });
}
const De = G({ name: "InternalSelection", common: T, peers: { Popover: de }, self: je });
function Ve(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const ot = G({ name: "Select", common: T, peers: { InternalSelection: De, InternalSelectMenu: Be }, self: Ve }), Ue = { buttonHeightSmall: "14px", buttonHeightMedium: "18px", buttonHeightLarge: "22px", buttonWidthSmall: "14px", buttonWidthMedium: "18px", buttonWidthLarge: "22px", buttonWidthPressedSmall: "20px", buttonWidthPressedMedium: "24px", buttonWidthPressedLarge: "28px", railHeightSmall: "18px", railHeightMedium: "22px", railHeightLarge: "26px", railWidthSmall: "32px", railWidthMedium: "40px", railWidthLarge: "48px" };
function Ye(e) {
  const { primaryColor: t, opacityDisabled: r, borderRadius: o, textColor3: n } = e;
  return Object.assign(Object.assign({}, Ue), { iconColor: n, textColor: "white", loadingColor: t, opacityDisabled: r, railColor: "rgba(0, 0, 0, .14)", railColorActive: t, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: o, railBorderRadiusMedium: o, railBorderRadiusLarge: o, buttonBorderRadiusSmall: o, buttonBorderRadiusMedium: o, buttonBorderRadiusLarge: o, boxShadowFocus: `0 0 0 2px ${P(t, { alpha: 0.2 })}` });
}
const it = { name: "Switch", common: T, self: Ye };
export {
  ce as N,
  _e as a,
  Ve as b,
  Re as c,
  tt as d,
  We as e,
  Ue as f,
  nt as g,
  Be as h,
  j as i,
  De as j,
  ot as k,
  it as l,
  Je as m,
  R as n,
  rt as o,
  Ze as p,
  Qe as r,
  Ie as s,
  et as u
};
