var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as e, d as t, o as n } from "./Card-nhqq8IKa.js";
import { l as r, p as i } from "./Tooltip-DGge0ha1.js";
import { St as a, u as o } from "./index-DTVnoW_1.js";
var s = /* @__PURE__ */ new WeakSet();
function c(e2) {
  s.add(e2);
}
function l(e2) {
  return !s.has(e2);
}
function u(e2, ...t2) {
  return typeof e2 == `function` ? e2(...t2) : typeof e2 == `string` ? a(e2) : typeof e2 == `number` ? a(String(e2)) : null;
}
function d(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
const f = { STOP: `STOP` };
function p(e2, t2) {
  let n2 = t2(e2);
  e2.children !== void 0 && n2 !== f.STOP && e2.children.forEach((e3) => p(e3, t2));
}
function m(e2, t2 = {}) {
  let { preserveGroup: n2 = false } = t2, r2 = [], i2 = n2 ? (e3) => {
    e3.isLeaf || (r2.push(e3.key), a2(e3.children));
  } : (e3) => {
    e3.isLeaf || (e3.isGroup || r2.push(e3.key), a2(e3.children));
  };
  function a2(e3) {
    e3.forEach(i2);
  }
  return a2(e2), r2;
}
function h(e2, t2) {
  let { isLeaf: n2 } = e2;
  return n2 === void 0 ? !t2(e2) : n2;
}
function g(e2) {
  return e2.children;
}
function _(e2) {
  return e2.key;
}
function v() {
  return false;
}
function y(e2, t2) {
  let { isLeaf: n2 } = e2;
  return !(n2 === false && !Array.isArray(t2(e2)));
}
function b(e2) {
  return e2.disabled === true;
}
function x(e2, t2) {
  return e2.isLeaf === false && !Array.isArray(t2(e2));
}
function S(e2) {
  return e2 == null ? [] : Array.isArray(e2) ? e2 : e2.checkedKeys ?? [];
}
function C(e2) {
  return e2 == null || Array.isArray(e2) ? [] : e2.indeterminateKeys ?? [];
}
function w(e2, t2) {
  let n2 = new Set(e2);
  return t2.forEach((e3) => {
    n2.has(e3) || n2.add(e3);
  }), Array.from(n2);
}
function T(e2, t2) {
  let n2 = new Set(e2);
  return t2.forEach((e3) => {
    n2.has(e3) && n2.delete(e3);
  }), Array.from(n2);
}
function E(e2) {
  return (e2 == null ? void 0 : e2.type) === `group`;
}
function D(e2) {
  let t2 = /* @__PURE__ */ new Map();
  return e2.forEach((e3, n2) => {
    t2.set(e3.key, n2);
  }), (e3) => t2.get(e3) ?? null;
}
var O = class extends Error {
  constructor() {
    super(), this.message = `SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.`;
  }
};
function k(e2, t2, n2, r2) {
  return M(t2.concat(e2), n2, r2, false);
}
function A(e2, t2) {
  let n2 = /* @__PURE__ */ new Set();
  return e2.forEach((e3) => {
    let r2 = t2.treeNodeMap.get(e3);
    if (r2 !== void 0) {
      let e4 = r2.parent;
      for (; e4 !== null && !(e4.disabled || n2.has(e4.key)); ) n2.add(e4.key), e4 = e4.parent;
    }
  }), n2;
}
function ee(e2, t2, n2, r2) {
  let i2 = M(t2, n2, r2, false), a2 = M(e2, n2, r2, true), o2 = A(e2, n2), s2 = [];
  return i2.forEach((e3) => {
    (a2.has(e3) || o2.has(e3)) && s2.push(e3);
  }), s2.forEach((e3) => i2.delete(e3)), i2;
}
function j(e2, t2) {
  let { checkedKeys: n2, keysToCheck: r2, keysToUncheck: i2, indeterminateKeys: a2, cascade: o2, leafOnly: s2, checkStrategy: c2, allowNotLoaded: l2 } = e2;
  if (!o2) return r2 === void 0 ? i2 === void 0 ? { checkedKeys: Array.from(n2), indeterminateKeys: Array.from(a2) } : { checkedKeys: T(n2, i2), indeterminateKeys: Array.from(a2) } : { checkedKeys: w(n2, r2), indeterminateKeys: Array.from(a2) };
  let { levelTreeNodeMap: u2 } = t2, d2;
  d2 = i2 === void 0 ? r2 === void 0 ? M(n2, t2, l2, false) : k(r2, n2, t2, l2) : ee(i2, n2, t2, l2);
  let f2 = c2 === `parent`, p2 = c2 === `child` || s2, m2 = d2, h2 = /* @__PURE__ */ new Set(), g2 = Math.max.apply(null, Array.from(u2.keys()));
  for (let e3 = g2; e3 >= 0; --e3) {
    let t3 = e3 === 0, n3 = u2.get(e3);
    for (let e4 of n3) {
      if (e4.isLeaf) continue;
      let { key: n4, shallowLoaded: r3 } = e4;
      if (p2 && r3 && e4.children.forEach((e5) => {
        !e5.disabled && !e5.isLeaf && e5.shallowLoaded && m2.has(e5.key) && m2.delete(e5.key);
      }), e4.disabled || !r3) continue;
      let i3 = true, a3 = false, o3 = true;
      for (let t4 of e4.children) {
        let e5 = t4.key;
        if (!t4.disabled) {
          if (o3 && (o3 = false), m2.has(e5)) a3 = true;
          else if (h2.has(e5)) {
            a3 = true, i3 = false;
            break;
          } else if (i3 = false, a3) break;
        }
      }
      i3 && !o3 ? (f2 && e4.children.forEach((e5) => {
        !e5.disabled && m2.has(e5.key) && m2.delete(e5.key);
      }), m2.add(n4)) : a3 && h2.add(n4), t3 && p2 && m2.has(n4) && m2.delete(n4);
    }
  }
  return { checkedKeys: Array.from(m2), indeterminateKeys: Array.from(h2) };
}
function M(e2, t2, n2, r2) {
  let { treeNodeMap: i2, getChildren: a2 } = t2, o2 = /* @__PURE__ */ new Set(), s2 = new Set(e2);
  return e2.forEach((e3) => {
    let t3 = i2.get(e3);
    t3 !== void 0 && p(t3, (e4) => {
      if (e4.disabled) return f.STOP;
      let { key: t4 } = e4;
      if (!o2.has(t4) && (o2.add(t4), s2.add(t4), x(e4.rawNode, a2))) {
        if (r2) return f.STOP;
        if (!n2) throw new O();
      }
    });
  }), s2;
}
function te(e2, { includeGroup: t2 = false, includeSelf: n2 = true }, r2) {
  let i2 = r2.treeNodeMap, a2 = e2 == null ? null : i2.get(e2) ?? null, o2 = { keyPath: [], treeNodePath: [], treeNode: a2 };
  if (a2 == null ? void 0 : a2.ignored) return o2.treeNode = null, o2;
  for (; a2; ) !a2.ignored && (t2 || !a2.isGroup) && o2.treeNodePath.push(a2), a2 = a2.parent;
  return o2.treeNodePath.reverse(), n2 || o2.treeNodePath.pop(), o2.keyPath = o2.treeNodePath.map((e3) => e3.key), o2;
}
function N(e2) {
  if (e2.length === 0) return null;
  let t2 = e2[0];
  return t2.isGroup || t2.ignored || t2.disabled ? t2.getNext() : t2;
}
function P(e2, t2) {
  let n2 = e2.siblings, r2 = n2.length, { index: i2 } = e2;
  return t2 ? n2[(i2 + 1) % r2] : i2 === n2.length - 1 ? null : n2[i2 + 1];
}
function F(e2, t2, { loop: n2 = false, includeDisabled: r2 = false } = {}) {
  let i2 = t2 === `prev` ? I : P, a2 = { reverse: t2 === `prev` }, o2 = false, s2 = null;
  function c2(t3) {
    if (t3 !== null) {
      if (t3 === e2) {
        if (!o2) o2 = true;
        else if (!e2.disabled && !e2.isGroup) {
          s2 = e2;
          return;
        }
      } else if ((!t3.disabled || r2) && !t3.ignored && !t3.isGroup) {
        s2 = t3;
        return;
      }
      if (t3.isGroup) {
        let e3 = R(t3, a2);
        e3 === null ? c2(i2(t3, n2)) : s2 = e3;
      } else {
        let e3 = i2(t3, false);
        if (e3 !== null) c2(e3);
        else {
          let e4 = L(t3);
          (e4 == null ? void 0 : e4.isGroup) ? c2(i2(e4, n2)) : n2 && c2(i2(t3, true));
        }
      }
    }
  }
  return c2(e2), s2;
}
function I(e2, t2) {
  let n2 = e2.siblings, r2 = n2.length, { index: i2 } = e2;
  return t2 ? n2[(i2 - 1 + r2) % r2] : i2 === 0 ? null : n2[i2 - 1];
}
function L(e2) {
  return e2.parent;
}
function R(e2, t2 = {}) {
  let { reverse: n2 = false } = t2, { children: r2 } = e2;
  if (r2) {
    let { length: e3 } = r2, i2 = n2 ? e3 - 1 : 0, a2 = n2 ? -1 : e3, o2 = n2 ? -1 : 1;
    for (let e4 = i2; e4 !== a2; e4 += o2) {
      let n3 = r2[e4];
      if (!n3.disabled && !n3.ignored) if (n3.isGroup) {
        let e5 = R(n3, t2);
        if (e5 !== null) return e5;
      } else return n3;
    }
  }
  return null;
}
const ne = { getChild() {
  return this.ignored ? null : R(this);
}, getParent() {
  let { parent: e2 } = this;
  return (e2 == null ? void 0 : e2.isGroup) ? e2.getParent() : e2;
}, getNext(e2 = {}) {
  return F(this, `next`, e2);
}, getPrev(e2 = {}) {
  return F(this, `prev`, e2);
} };
function re(e2, t2) {
  let n2 = t2 ? new Set(t2) : void 0, r2 = [];
  function i2(e3) {
    e3.forEach((e4) => {
      r2.push(e4), !(e4.isLeaf || !e4.children || e4.ignored) && (e4.isGroup || n2 === void 0 || n2.has(e4.key)) && i2(e4.children);
    });
  }
  return i2(e2), r2;
}
function ie(e2, t2) {
  let n2 = e2.key;
  for (; t2; ) {
    if (t2.key === n2) return true;
    t2 = t2.parent;
  }
  return false;
}
function z(e2, t2, n2, r2, i2, a2 = null, o2 = 0) {
  let s2 = [];
  return e2.forEach((c2, l2) => {
    var u2;
    let d2 = Object.create(r2);
    if (d2.rawNode = c2, d2.siblings = s2, d2.level = o2, d2.index = l2, d2.isFirstChild = l2 === 0, d2.isLastChild = l2 + 1 === e2.length, d2.parent = a2, !d2.ignored) {
      let e3 = i2(c2);
      Array.isArray(e3) && (d2.children = z(e3, t2, n2, r2, i2, d2, o2 + 1));
    }
    s2.push(d2), t2.set(d2.key, d2), n2.has(o2) || n2.set(o2, []), (u2 = n2.get(o2)) == null || u2.push(d2);
  }), s2;
}
function B(e2, t2 = {}) {
  let n2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map(), { getDisabled: i2 = b, getIgnored: a2 = v, getIsGroup: o2 = E, getKey: s2 = _ } = t2, c2 = t2.getChildren ?? g, l2 = t2.ignoreEmptyChildren ? (e3) => {
    let t3 = c2(e3);
    return Array.isArray(t3) ? t3.length ? t3 : null : t3;
  } : c2, u2 = z(e2, n2, r2, Object.assign({ get key() {
    return s2(this.rawNode);
  }, get disabled() {
    return i2(this.rawNode);
  }, get isGroup() {
    return o2(this.rawNode);
  }, get isLeaf() {
    return h(this.rawNode, l2);
  }, get shallowLoaded() {
    return y(this.rawNode, l2);
  }, get ignored() {
    return a2(this.rawNode);
  }, contains(e3) {
    return ie(this, e3);
  } }, ne), l2);
  function f2(e3) {
    if (e3 == null) return null;
    let t3 = n2.get(e3);
    return t3 && !t3.isGroup && !t3.ignored ? t3 : null;
  }
  function p2(e3) {
    if (e3 == null) return null;
    let t3 = n2.get(e3);
    return t3 && !t3.ignored ? t3 : null;
  }
  function x2(e3, t3) {
    let n3 = p2(e3);
    return n3 ? n3.getPrev(t3) : null;
  }
  function w2(e3, t3) {
    let n3 = p2(e3);
    return n3 ? n3.getNext(t3) : null;
  }
  function T2(e3) {
    let t3 = p2(e3);
    return t3 ? t3.getParent() : null;
  }
  function D2(e3) {
    let t3 = p2(e3);
    return t3 ? t3.getChild() : null;
  }
  let O2 = { treeNodes: u2, treeNodeMap: n2, levelTreeNodeMap: r2, maxLevel: Math.max(...r2.keys()), getChildren: l2, getFlattenedNodes(e3) {
    return re(u2, e3);
  }, getNode: f2, getPrev: x2, getNext: w2, getParent: T2, getChild: D2, getFirstAvailableNode() {
    return N(u2);
  }, getPath(e3, t3 = {}) {
    return te(e3, t3, O2);
  }, getCheckedKeys(e3, t3 = {}) {
    let { cascade: n3 = true, leafOnly: r3 = false, checkStrategy: i3 = `all`, allowNotLoaded: a3 = false } = t3;
    return j({ checkedKeys: S(e3), indeterminateKeys: C(e3), cascade: n3, leafOnly: r3, checkStrategy: i3, allowNotLoaded: a3 }, O2);
  }, check(e3, t3, n3 = {}) {
    let { cascade: r3 = true, leafOnly: i3 = false, checkStrategy: a3 = `all`, allowNotLoaded: o3 = false } = n3;
    return j({ checkedKeys: S(t3), indeterminateKeys: C(t3), keysToCheck: e3 == null ? [] : d(e3), cascade: r3, leafOnly: i3, checkStrategy: a3, allowNotLoaded: o3 }, O2);
  }, uncheck(e3, t3, n3 = {}) {
    let { cascade: r3 = true, leafOnly: i3 = false, checkStrategy: a3 = `all`, allowNotLoaded: o3 = false } = n3;
    return j({ checkedKeys: S(t3), indeterminateKeys: C(t3), keysToUncheck: e3 == null ? [] : d(e3), cascade: r3, leafOnly: i3, checkStrategy: a3, allowNotLoaded: o3 }, O2);
  }, getNonLeafKeys(e3 = {}) {
    return m(u2, e3);
  } };
  return O2;
}
var V = { iconSizeTiny: `28px`, iconSizeSmall: `34px`, iconSizeMedium: `40px`, iconSizeLarge: `46px`, iconSizeHuge: `52px` };
function H(e2) {
  let { textColorDisabled: t2, iconColor: n2, textColor2: r2, fontSizeTiny: i2, fontSizeSmall: a2, fontSizeMedium: o2, fontSizeLarge: s2, fontSizeHuge: c2 } = e2;
  return Object.assign(Object.assign({}, V), { fontSizeTiny: i2, fontSizeSmall: a2, fontSizeMedium: o2, fontSizeLarge: s2, fontSizeHuge: c2, textColor: t2, iconColor: n2, extraTextColor: r2 });
}
var U = { name: `Empty`, common: n, self: H }, W = { height: `calc(var(--n-option-height) * 7.6)`, paddingTiny: `4px 0`, paddingSmall: `4px 0`, paddingMedium: `4px 0`, paddingLarge: `4px 0`, paddingHuge: `4px 0`, optionPaddingTiny: `0 12px`, optionPaddingSmall: `0 12px`, optionPaddingMedium: `0 12px`, optionPaddingLarge: `0 12px`, optionPaddingHuge: `0 12px`, loadingSize: `18px` };
function G(e2) {
  let { borderRadius: t2, popoverColor: n2, textColor3: r2, dividerColor: i2, textColor2: a2, primaryColorPressed: o2, textColorDisabled: s2, primaryColor: c2, opacityDisabled: l2, hoverColor: u2, fontSizeTiny: d2, fontSizeSmall: f2, fontSizeMedium: p2, fontSizeLarge: m2, fontSizeHuge: h2, heightTiny: g2, heightSmall: _2, heightMedium: v2, heightLarge: y2, heightHuge: b2 } = e2;
  return Object.assign(Object.assign({}, W), { optionFontSizeTiny: d2, optionFontSizeSmall: f2, optionFontSizeMedium: p2, optionFontSizeLarge: m2, optionFontSizeHuge: h2, optionHeightTiny: g2, optionHeightSmall: _2, optionHeightMedium: v2, optionHeightLarge: y2, optionHeightHuge: b2, borderRadius: t2, color: n2, groupHeaderTextColor: r2, actionDividerColor: i2, optionTextColor: a2, optionTextColorPressed: o2, optionTextColorDisabled: s2, optionTextColorActive: c2, optionOpacityDisabled: l2, optionCheckColor: c2, optionColorPending: u2, optionColorActive: `rgba(0, 0, 0, 0)`, optionColorActivePending: u2, actionTextColor: a2, loadingColor: c2 });
}
var K = t({ name: `InternalSelectMenu`, common: n, peers: { Scrollbar: i, Empty: U }, self: G }), q = { paddingSingle: `0 26px 0 12px`, paddingMultiple: `3px 26px 0 12px`, clearSize: `16px`, arrowSize: `16px` };
function J(t2) {
  let { borderRadius: n2, textColor2: r2, textColorDisabled: i2, inputColor: a2, inputColorDisabled: o2, primaryColor: s2, primaryColorHover: c2, warningColor: l2, warningColorHover: u2, errorColor: d2, errorColorHover: f2, borderColor: p2, iconColor: m2, iconColorDisabled: h2, clearColor: g2, clearColorHover: _2, clearColorPressed: v2, placeholderColor: y2, placeholderColorDisabled: b2, fontSizeTiny: x2, fontSizeSmall: S2, fontSizeMedium: C2, fontSizeLarge: w2, heightTiny: T2, heightSmall: E2, heightMedium: D2, heightLarge: O2, fontWeight: k2 } = t2;
  return Object.assign(Object.assign({}, q), { fontSizeTiny: x2, fontSizeSmall: S2, fontSizeMedium: C2, fontSizeLarge: w2, heightTiny: T2, heightSmall: E2, heightMedium: D2, heightLarge: O2, borderRadius: n2, fontWeight: k2, textColor: r2, textColorDisabled: i2, placeholderColor: y2, placeholderColorDisabled: b2, color: a2, colorDisabled: o2, colorActive: a2, border: `1px solid ${p2}`, borderHover: `1px solid ${c2}`, borderActive: `1px solid ${s2}`, borderFocus: `1px solid ${c2}`, boxShadowHover: `none`, boxShadowActive: `0 0 0 2px ${e(s2, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${e(s2, { alpha: 0.2 })}`, caretColor: s2, arrowColor: m2, arrowColorDisabled: h2, loadingColor: s2, borderWarning: `1px solid ${l2}`, borderHoverWarning: `1px solid ${u2}`, borderActiveWarning: `1px solid ${l2}`, borderFocusWarning: `1px solid ${u2}`, boxShadowHoverWarning: `none`, boxShadowActiveWarning: `0 0 0 2px ${e(l2, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${e(l2, { alpha: 0.2 })}`, colorActiveWarning: a2, caretColorWarning: l2, borderError: `1px solid ${d2}`, borderHoverError: `1px solid ${f2}`, borderActiveError: `1px solid ${d2}`, borderFocusError: `1px solid ${f2}`, boxShadowHoverError: `none`, boxShadowActiveError: `0 0 0 2px ${e(d2, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${e(d2, { alpha: 0.2 })}`, colorActiveError: a2, caretColorError: d2, clearColor: g2, clearColorHover: _2, clearColorPressed: v2 });
}
var Y = t({ name: `InternalSelection`, common: n, peers: { Popover: r }, self: J });
function X(e2) {
  let { boxShadow2: t2 } = e2;
  return { menuBoxShadow: t2 };
}
var ae = t({ name: `Select`, common: n, peers: { InternalSelection: Y, InternalSelectMenu: K }, self: X }), Z = { buttonHeightSmall: `14px`, buttonHeightMedium: `18px`, buttonHeightLarge: `22px`, buttonWidthSmall: `14px`, buttonWidthMedium: `18px`, buttonWidthLarge: `22px`, buttonWidthPressedSmall: `20px`, buttonWidthPressedMedium: `24px`, buttonWidthPressedLarge: `28px`, railHeightSmall: `18px`, railHeightMedium: `22px`, railHeightLarge: `26px`, railWidthSmall: `32px`, railWidthMedium: `40px`, railWidthLarge: `48px` };
function oe(t2) {
  let { primaryColor: n2, opacityDisabled: r2, borderRadius: i2, textColor3: a2 } = t2;
  return Object.assign(Object.assign({}, Z), { iconColor: a2, textColor: `white`, loadingColor: n2, opacityDisabled: r2, railColor: `rgba(0, 0, 0, .14)`, railColorActive: n2, buttonBoxShadow: `0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`, buttonColor: `#FFF`, railBorderRadiusSmall: i2, railBorderRadiusMedium: i2, railBorderRadiusLarge: i2, buttonBorderRadiusSmall: i2, buttonBorderRadiusMedium: i2, buttonBorderRadiusLarge: i2, boxShadowFocus: `0 0 0 2px ${e(n2, { alpha: 0.2 })}` });
}
var se = { name: `Switch`, common: n, self: oe }, Q = new class {
  constructor() {
    __publicField(this, "storageProvider", null);
    __publicField(this, "initialized", false);
  }
  async init() {
    if (this.initialized) return;
    let e2 = o();
    if (e2.isErr()) throw e2.error;
    let t2 = e2.value.getStorage();
    if (t2.isErr()) throw t2.error;
    this.storageProvider = t2.value;
    let n2 = await this.storageProvider.init();
    if (n2.isErr()) throw n2.error;
    this.initialized = true;
  }
  async set(e2, t2) {
    if (this.initialized || await this.init(), !this.storageProvider) throw Error(`Storage provider not initialized`);
    let n2 = await this.storageProvider.set(e2, t2);
    if (n2.isErr()) throw n2.error;
  }
  async get(e2) {
    if (this.initialized || await this.init(), !this.storageProvider) throw Error(`Storage provider not initialized`);
    let t2 = await this.storageProvider.get(e2);
    if (t2.isErr()) throw t2.error;
    return t2.value;
  }
  async save() {
    if (this.initialized || await this.init(), !this.storageProvider) throw Error(`Storage provider not initialized`);
    let e2 = await this.storageProvider.save();
    if (e2.isErr()) throw e2.error;
  }
  async exportToJson() {
    if (this.initialized || await this.init(), !this.storageProvider) throw Error(`Storage provider not initialized`);
    let e2 = await this.storageProvider.exportToJson();
    if (e2.isErr()) throw e2.error;
    return e2.value;
  }
  async clear() {
    if (this.initialized || await this.init(), !this.storageProvider) throw Error(`Storage provider not initialized`);
    let e2 = await this.storageProvider.clear();
    if (e2.isErr()) throw e2.error;
  }
  async remove(e2) {
    if (this.initialized || await this.init(), !this.storageProvider) throw Error(`Storage provider not initialized`);
    let t2 = await this.storageProvider.remove(e2);
    if (t2.isErr()) throw t2.error;
  }
}();
const ce = Q.set.bind(Q), le = Q.get.bind(Q), $ = Q.save.bind(Q);
Q.init.bind(Q), Q.exportToJson.bind(Q), Q.clear.bind(Q), Q.remove.bind(Q);
export {
  l as _,
  Z as a,
  Y as c,
  G as d,
  U as f,
  u as g,
  D as h,
  se as i,
  q as l,
  B as m,
  $ as n,
  ae as o,
  H as p,
  ce as r,
  X as s,
  le as t,
  K as u,
  c as v
};
