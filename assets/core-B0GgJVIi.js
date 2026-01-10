var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { D as e, M as t, N as n, P as r, at as i, ct as a, d as o, dt as s, f as c, g as l, h as u, lt as d, m as f, o as p, ot as m, p as h, s as g, ut as _, v, w as y, x as b } from "./Card-D_DaNXyK.js";
import { C as x, I as S, Q as C, d as w, h as T, q as E } from "./light-DStk_u6n.js";
import { $t as D, At as O, Dt as k, Gt as A, Ht as j, J as M, Jt as N, Lt as P, Rt as ee, St as te, Tt as ne, Xt as F, Zt as re, _t as ie, en as ae, ft as oe, gt as I, ht as se, mt as L, ot as R, u as ce, vt as le } from "./index-lIAgGLuV.js";
var ue = /* @__PURE__ */ new WeakSet();
function de(e2) {
  ue.add(e2);
}
function fe(e2) {
  return !ue.has(e2);
}
function pe(e2, ...t2) {
  return typeof e2 == `function` ? e2(...t2) : typeof e2 == `string` ? oe(e2) : typeof e2 == `number` ? oe(String(e2)) : null;
}
const z = t(`n-form-item`);
function me(e2, { defaultSize: t2 = `medium`, mergedSize: n2, mergedDisabled: r2 } = {}) {
  let i2 = le(z, null);
  O(z, null);
  let a2 = R(n2 ? () => n2(i2) : () => {
    let { size: n3 } = e2;
    if (n3) return n3;
    if (i2) {
      let { mergedSize: e3 } = i2;
      if (e3.value !== void 0) return e3.value;
    }
    return t2;
  }), o2 = R(r2 ? () => r2(i2) : () => {
    let { disabled: t3 } = e2;
    return t3 === void 0 ? i2 ? i2.disabled.value : false : t3;
  }), s2 = R(() => {
    let { status: t3 } = e2;
    return t3 || (i2 == null ? void 0 : i2.mergedValidationStatus.value);
  });
  return ne(() => {
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
var B = L({ name: `BaseIconSwitchTransition`, setup(e2, { slots: t2 }) {
  let n2 = E();
  return () => I(M, { name: `icon-switch-transition`, appear: n2.value }, t2);
} }), { cubicBezierEaseInOut: he } = f;
function V({ originalTransform: e2 = ``, left: t2 = 0, top: n2 = 0, transition: r2 = `all .3s ${he} !important` } = {}) {
  return [i(`&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to`, { transform: `${e2} scale(0.75)`, left: t2, top: n2, opacity: 0 }), i(`&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from`, { transform: `scale(1) ${e2}`, left: t2, top: n2, opacity: 1 }), i(`&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active`, { transformOrigin: `center`, position: `absolute`, left: t2, top: n2, transition: r2 })];
}
var ge = i([i(`@keyframes rotator`, `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), m(`base-loading`, `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [a(`transition-wrapper`, `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [V()]), a(`placeholder`, `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [V({ left: `50%`, top: `50%`, originalTransform: `translateX(-50%) translateY(-50%)` })]), a(`container`, `
 animation: rotator 3s linear infinite both;
 `, [a(`icon`, `
 height: 1em;
 width: 1em;
 `)])])]), H = `1.6s`, _e = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, ve = L({ name: `BaseLoading`, props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, _e), setup(e2) {
  h(`-base-loading`, ge, re(e2, `clsPrefix`));
}, render() {
  let { clsPrefix: e2, radius: t2, strokeWidth: n2, stroke: r2, scale: i2 } = this, a2 = t2 / i2;
  return I(`div`, { class: `${e2}-base-loading`, role: `img`, "aria-label": `loading` }, I(B, null, { default: () => this.show ? I(`div`, { key: `icon`, class: `${e2}-base-loading__transition-wrapper` }, I(`div`, { class: `${e2}-base-loading__container` }, I(`svg`, { class: `${e2}-base-loading__icon`, viewBox: `0 0 ${2 * a2} ${2 * a2}`, xmlns: `http://www.w3.org/2000/svg`, style: { color: r2 } }, I(`g`, null, I(`animateTransform`, { attributeName: `transform`, type: `rotate`, values: `0 ${a2} ${a2};270 ${a2} ${a2}`, begin: `0s`, dur: H, fill: `freeze`, repeatCount: `indefinite` }), I(`circle`, { class: `${e2}-base-loading__icon`, fill: `none`, stroke: `currentColor`, "stroke-width": n2, "stroke-linecap": `round`, cx: a2, cy: a2, r: t2 - n2 / 2, "stroke-dasharray": 5.67 * t2, "stroke-dashoffset": 18.48 * t2 }, I(`animateTransform`, { attributeName: `transform`, type: `rotate`, values: `0 ${a2} ${a2};135 ${a2} ${a2};450 ${a2} ${a2}`, begin: `0s`, dur: H, fill: `freeze`, repeatCount: `indefinite` }), I(`animate`, { attributeName: `stroke-dashoffset`, values: `${5.67 * t2};${1.42 * t2};${5.67 * t2}`, begin: `0s`, dur: H, fill: `freeze`, repeatCount: `indefinite` })))))) : I(`div`, { key: `placeholder`, class: `${e2}-base-loading__placeholder` }, this.$slots) }));
} });
function ye(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
const U = { STOP: `STOP` };
function be(e2, t2) {
  let n2 = t2(e2);
  e2.children !== void 0 && n2 !== U.STOP && e2.children.forEach((e3) => be(e3, t2));
}
function xe(e2, t2 = {}) {
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
function Se(e2, t2) {
  let { isLeaf: n2 } = e2;
  return n2 === void 0 ? !t2(e2) : n2;
}
function Ce(e2) {
  return e2.children;
}
function we(e2) {
  return e2.key;
}
function Te() {
  return false;
}
function Ee(e2, t2) {
  let { isLeaf: n2 } = e2;
  return !(n2 === false && !Array.isArray(t2(e2)));
}
function De(e2) {
  return e2.disabled === true;
}
function Oe(e2, t2) {
  return e2.isLeaf === false && !Array.isArray(t2(e2));
}
function W(e2) {
  return e2 == null ? [] : Array.isArray(e2) ? e2 : e2.checkedKeys ?? [];
}
function G(e2) {
  return e2 == null || Array.isArray(e2) ? [] : e2.indeterminateKeys ?? [];
}
function ke(e2, t2) {
  let n2 = new Set(e2);
  return t2.forEach((e3) => {
    n2.has(e3) || n2.add(e3);
  }), Array.from(n2);
}
function Ae(e2, t2) {
  let n2 = new Set(e2);
  return t2.forEach((e3) => {
    n2.has(e3) && n2.delete(e3);
  }), Array.from(n2);
}
function je(e2) {
  return (e2 == null ? void 0 : e2.type) === `group`;
}
function Me(e2) {
  let t2 = /* @__PURE__ */ new Map();
  return e2.forEach((e3, n2) => {
    t2.set(e3.key, n2);
  }), (e3) => t2.get(e3) ?? null;
}
var Ne = class extends Error {
  constructor() {
    super(), this.message = `SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.`;
  }
};
function Pe(e2, t2, n2, r2) {
  return q(t2.concat(e2), n2, r2, false);
}
function Fe(e2, t2) {
  let n2 = /* @__PURE__ */ new Set();
  return e2.forEach((e3) => {
    let r2 = t2.treeNodeMap.get(e3);
    if (r2 !== void 0) {
      let e4 = r2.parent;
      for (; e4 !== null && !(e4.disabled || n2.has(e4.key)); ) n2.add(e4.key), e4 = e4.parent;
    }
  }), n2;
}
function Ie(e2, t2, n2, r2) {
  let i2 = q(t2, n2, r2, false), a2 = q(e2, n2, r2, true), o2 = Fe(e2, n2), s2 = [];
  return i2.forEach((e3) => {
    (a2.has(e3) || o2.has(e3)) && s2.push(e3);
  }), s2.forEach((e3) => i2.delete(e3)), i2;
}
function K(e2, t2) {
  let { checkedKeys: n2, keysToCheck: r2, keysToUncheck: i2, indeterminateKeys: a2, cascade: o2, leafOnly: s2, checkStrategy: c2, allowNotLoaded: l2 } = e2;
  if (!o2) return r2 === void 0 ? i2 === void 0 ? { checkedKeys: Array.from(n2), indeterminateKeys: Array.from(a2) } : { checkedKeys: Ae(n2, i2), indeterminateKeys: Array.from(a2) } : { checkedKeys: ke(n2, r2), indeterminateKeys: Array.from(a2) };
  let { levelTreeNodeMap: u2 } = t2, d2;
  d2 = i2 === void 0 ? r2 === void 0 ? q(n2, t2, l2, false) : Pe(r2, n2, t2, l2) : Ie(i2, n2, t2, l2);
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
function q(e2, t2, n2, r2) {
  let { treeNodeMap: i2, getChildren: a2 } = t2, o2 = /* @__PURE__ */ new Set(), s2 = new Set(e2);
  return e2.forEach((e3) => {
    let t3 = i2.get(e3);
    t3 !== void 0 && be(t3, (e4) => {
      if (e4.disabled) return U.STOP;
      let { key: t4 } = e4;
      if (!o2.has(t4) && (o2.add(t4), s2.add(t4), Oe(e4.rawNode, a2))) {
        if (r2) return U.STOP;
        if (!n2) throw new Ne();
      }
    });
  }), s2;
}
function Le(e2, { includeGroup: t2 = false, includeSelf: n2 = true }, r2) {
  let i2 = r2.treeNodeMap, a2 = e2 == null ? null : i2.get(e2) ?? null, o2 = { keyPath: [], treeNodePath: [], treeNode: a2 };
  if (a2 == null ? void 0 : a2.ignored) return o2.treeNode = null, o2;
  for (; a2; ) !a2.ignored && (t2 || !a2.isGroup) && o2.treeNodePath.push(a2), a2 = a2.parent;
  return o2.treeNodePath.reverse(), n2 || o2.treeNodePath.pop(), o2.keyPath = o2.treeNodePath.map((e3) => e3.key), o2;
}
function Re(e2) {
  if (e2.length === 0) return null;
  let t2 = e2[0];
  return t2.isGroup || t2.ignored || t2.disabled ? t2.getNext() : t2;
}
function ze(e2, t2) {
  let n2 = e2.siblings, r2 = n2.length, { index: i2 } = e2;
  return t2 ? n2[(i2 + 1) % r2] : i2 === n2.length - 1 ? null : n2[i2 + 1];
}
function Be(e2, t2, { loop: n2 = false, includeDisabled: r2 = false } = {}) {
  let i2 = t2 === `prev` ? Ve : ze, a2 = { reverse: t2 === `prev` }, o2 = false, s2 = null;
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
        let e3 = Ue(t3, a2);
        e3 === null ? c2(i2(t3, n2)) : s2 = e3;
      } else {
        let e3 = i2(t3, false);
        if (e3 !== null) c2(e3);
        else {
          let e4 = He(t3);
          (e4 == null ? void 0 : e4.isGroup) ? c2(i2(e4, n2)) : n2 && c2(i2(t3, true));
        }
      }
    }
  }
  return c2(e2), s2;
}
function Ve(e2, t2) {
  let n2 = e2.siblings, r2 = n2.length, { index: i2 } = e2;
  return t2 ? n2[(i2 - 1 + r2) % r2] : i2 === 0 ? null : n2[i2 - 1];
}
function He(e2) {
  return e2.parent;
}
function Ue(e2, t2 = {}) {
  let { reverse: n2 = false } = t2, { children: r2 } = e2;
  if (r2) {
    let { length: e3 } = r2, i2 = n2 ? e3 - 1 : 0, a2 = n2 ? -1 : e3, o2 = n2 ? -1 : 1;
    for (let e4 = i2; e4 !== a2; e4 += o2) {
      let n3 = r2[e4];
      if (!n3.disabled && !n3.ignored) if (n3.isGroup) {
        let e5 = Ue(n3, t2);
        if (e5 !== null) return e5;
      } else return n3;
    }
  }
  return null;
}
const We = { getChild() {
  return this.ignored ? null : Ue(this);
}, getParent() {
  let { parent: e2 } = this;
  return (e2 == null ? void 0 : e2.isGroup) ? e2.getParent() : e2;
}, getNext(e2 = {}) {
  return Be(this, `next`, e2);
}, getPrev(e2 = {}) {
  return Be(this, `prev`, e2);
} };
function Ge(e2, t2) {
  let n2 = t2 ? new Set(t2) : void 0, r2 = [];
  function i2(e3) {
    e3.forEach((e4) => {
      r2.push(e4), !(e4.isLeaf || !e4.children || e4.ignored) && (e4.isGroup || n2 === void 0 || n2.has(e4.key)) && i2(e4.children);
    });
  }
  return i2(e2), r2;
}
function Ke(e2, t2) {
  let n2 = e2.key;
  for (; t2; ) {
    if (t2.key === n2) return true;
    t2 = t2.parent;
  }
  return false;
}
function qe(e2, t2, n2, r2, i2, a2 = null, o2 = 0) {
  let s2 = [];
  return e2.forEach((c2, l2) => {
    var u2;
    let d2 = Object.create(r2);
    if (d2.rawNode = c2, d2.siblings = s2, d2.level = o2, d2.index = l2, d2.isFirstChild = l2 === 0, d2.isLastChild = l2 + 1 === e2.length, d2.parent = a2, !d2.ignored) {
      let e3 = i2(c2);
      Array.isArray(e3) && (d2.children = qe(e3, t2, n2, r2, i2, d2, o2 + 1));
    }
    s2.push(d2), t2.set(d2.key, d2), n2.has(o2) || n2.set(o2, []), (u2 = n2.get(o2)) == null || u2.push(d2);
  }), s2;
}
function Je(e2, t2 = {}) {
  let n2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map(), { getDisabled: i2 = De, getIgnored: a2 = Te, getIsGroup: o2 = je, getKey: s2 = we } = t2, c2 = t2.getChildren ?? Ce, l2 = t2.ignoreEmptyChildren ? (e3) => {
    let t3 = c2(e3);
    return Array.isArray(t3) ? t3.length ? t3 : null : t3;
  } : c2, u2 = qe(e2, n2, r2, Object.assign({ get key() {
    return s2(this.rawNode);
  }, get disabled() {
    return i2(this.rawNode);
  }, get isGroup() {
    return o2(this.rawNode);
  }, get isLeaf() {
    return Se(this.rawNode, l2);
  }, get shallowLoaded() {
    return Ee(this.rawNode, l2);
  }, get ignored() {
    return a2(this.rawNode);
  }, contains(e3) {
    return Ke(this, e3);
  } }, We), l2);
  function d2(e3) {
    if (e3 == null) return null;
    let t3 = n2.get(e3);
    return t3 && !t3.isGroup && !t3.ignored ? t3 : null;
  }
  function f2(e3) {
    if (e3 == null) return null;
    let t3 = n2.get(e3);
    return t3 && !t3.ignored ? t3 : null;
  }
  function p2(e3, t3) {
    let n3 = f2(e3);
    return n3 ? n3.getPrev(t3) : null;
  }
  function m2(e3, t3) {
    let n3 = f2(e3);
    return n3 ? n3.getNext(t3) : null;
  }
  function h2(e3) {
    let t3 = f2(e3);
    return t3 ? t3.getParent() : null;
  }
  function g2(e3) {
    let t3 = f2(e3);
    return t3 ? t3.getChild() : null;
  }
  let _2 = { treeNodes: u2, treeNodeMap: n2, levelTreeNodeMap: r2, maxLevel: Math.max(...r2.keys()), getChildren: l2, getFlattenedNodes(e3) {
    return Ge(u2, e3);
  }, getNode: d2, getPrev: p2, getNext: m2, getParent: h2, getChild: g2, getFirstAvailableNode() {
    return Re(u2);
  }, getPath(e3, t3 = {}) {
    return Le(e3, t3, _2);
  }, getCheckedKeys(e3, t3 = {}) {
    let { cascade: n3 = true, leafOnly: r3 = false, checkStrategy: i3 = `all`, allowNotLoaded: a3 = false } = t3;
    return K({ checkedKeys: W(e3), indeterminateKeys: G(e3), cascade: n3, leafOnly: r3, checkStrategy: i3, allowNotLoaded: a3 }, _2);
  }, check(e3, t3, n3 = {}) {
    let { cascade: r3 = true, leafOnly: i3 = false, checkStrategy: a3 = `all`, allowNotLoaded: o3 = false } = n3;
    return K({ checkedKeys: W(t3), indeterminateKeys: G(t3), keysToCheck: e3 == null ? [] : ye(e3), cascade: r3, leafOnly: i3, checkStrategy: a3, allowNotLoaded: o3 }, _2);
  }, uncheck(e3, t3, n3 = {}) {
    let { cascade: r3 = true, leafOnly: i3 = false, checkStrategy: a3 = `all`, allowNotLoaded: o3 = false } = n3;
    return K({ checkedKeys: W(t3), indeterminateKeys: G(t3), keysToUncheck: e3 == null ? [] : ye(e3), cascade: r3, leafOnly: i3, checkStrategy: a3, allowNotLoaded: o3 }, _2);
  }, getNonLeafKeys(e3 = {}) {
    return xe(u2, e3);
  } };
  return _2;
}
var Ye = { iconSizeTiny: `28px`, iconSizeSmall: `34px`, iconSizeMedium: `40px`, iconSizeLarge: `46px`, iconSizeHuge: `52px` };
function Xe(e2) {
  let { textColorDisabled: t2, iconColor: n2, textColor2: r2, fontSizeTiny: i2, fontSizeSmall: a2, fontSizeMedium: o2, fontSizeLarge: s2, fontSizeHuge: c2 } = e2;
  return Object.assign(Object.assign({}, Ye), { fontSizeTiny: i2, fontSizeSmall: a2, fontSizeMedium: o2, fontSizeLarge: s2, fontSizeHuge: c2, textColor: t2, iconColor: n2, extraTextColor: r2 });
}
var Ze = { name: `Empty`, common: p, self: Xe }, Qe = { height: `calc(var(--n-option-height) * 7.6)`, paddingTiny: `4px 0`, paddingSmall: `4px 0`, paddingMedium: `4px 0`, paddingLarge: `4px 0`, paddingHuge: `4px 0`, optionPaddingTiny: `0 12px`, optionPaddingSmall: `0 12px`, optionPaddingMedium: `0 12px`, optionPaddingLarge: `0 12px`, optionPaddingHuge: `0 12px`, loadingSize: `18px` };
function $e(e2) {
  let { borderRadius: t2, popoverColor: n2, textColor3: r2, dividerColor: i2, textColor2: a2, primaryColorPressed: o2, textColorDisabled: s2, primaryColor: c2, opacityDisabled: l2, hoverColor: u2, fontSizeTiny: d2, fontSizeSmall: f2, fontSizeMedium: p2, fontSizeLarge: m2, fontSizeHuge: h2, heightTiny: g2, heightSmall: _2, heightMedium: v2, heightLarge: y2, heightHuge: b2 } = e2;
  return Object.assign(Object.assign({}, Qe), { optionFontSizeTiny: d2, optionFontSizeSmall: f2, optionFontSizeMedium: p2, optionFontSizeLarge: m2, optionFontSizeHuge: h2, optionHeightTiny: g2, optionHeightSmall: _2, optionHeightMedium: v2, optionHeightLarge: y2, optionHeightHuge: b2, borderRadius: t2, color: n2, groupHeaderTextColor: r2, actionDividerColor: i2, optionTextColor: a2, optionTextColorPressed: o2, optionTextColorDisabled: s2, optionTextColorActive: c2, optionOpacityDisabled: l2, optionCheckColor: c2, optionColorPending: u2, optionColorActive: `rgba(0, 0, 0, 0)`, optionColorActivePending: u2, actionTextColor: a2, loadingColor: c2 });
}
var et = o({ name: `InternalSelectMenu`, common: p, peers: { Scrollbar: T, Empty: Ze }, self: $e }), tt = { paddingSingle: `0 26px 0 12px`, paddingMultiple: `3px 26px 0 12px`, clearSize: `16px`, arrowSize: `16px` };
function nt(e2) {
  let { borderRadius: t2, textColor2: r2, textColorDisabled: i2, inputColor: a2, inputColorDisabled: o2, primaryColor: s2, primaryColorHover: c2, warningColor: l2, warningColorHover: u2, errorColor: d2, errorColorHover: f2, borderColor: p2, iconColor: m2, iconColorDisabled: h2, clearColor: g2, clearColorHover: _2, clearColorPressed: v2, placeholderColor: y2, placeholderColorDisabled: b2, fontSizeTiny: x2, fontSizeSmall: S2, fontSizeMedium: C2, fontSizeLarge: w2, heightTiny: T2, heightSmall: E2, heightMedium: D2, heightLarge: O2, fontWeight: k2 } = e2;
  return Object.assign(Object.assign({}, tt), { fontSizeTiny: x2, fontSizeSmall: S2, fontSizeMedium: C2, fontSizeLarge: w2, heightTiny: T2, heightSmall: E2, heightMedium: D2, heightLarge: O2, borderRadius: t2, fontWeight: k2, textColor: r2, textColorDisabled: i2, placeholderColor: y2, placeholderColorDisabled: b2, color: a2, colorDisabled: o2, colorActive: a2, border: `1px solid ${p2}`, borderHover: `1px solid ${c2}`, borderActive: `1px solid ${s2}`, borderFocus: `1px solid ${c2}`, boxShadowHover: `none`, boxShadowActive: `0 0 0 2px ${n(s2, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${n(s2, { alpha: 0.2 })}`, caretColor: s2, arrowColor: m2, arrowColorDisabled: h2, loadingColor: s2, borderWarning: `1px solid ${l2}`, borderHoverWarning: `1px solid ${u2}`, borderActiveWarning: `1px solid ${l2}`, borderFocusWarning: `1px solid ${u2}`, boxShadowHoverWarning: `none`, boxShadowActiveWarning: `0 0 0 2px ${n(l2, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${n(l2, { alpha: 0.2 })}`, colorActiveWarning: a2, caretColorWarning: l2, borderError: `1px solid ${d2}`, borderHoverError: `1px solid ${f2}`, borderActiveError: `1px solid ${d2}`, borderFocusError: `1px solid ${f2}`, boxShadowHoverError: `none`, boxShadowActiveError: `0 0 0 2px ${n(d2, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${n(d2, { alpha: 0.2 })}`, colorActiveError: a2, caretColorError: d2, clearColor: g2, clearColorHover: _2, clearColorPressed: v2 });
}
var rt = o({ name: `InternalSelection`, common: p, peers: { Popover: w }, self: nt }), { cubicBezierEaseInOut: J } = f;
function it({ duration: e2 = `.2s`, delay: t2 = `.1s` } = {}) {
  return [i(`&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to`, { opacity: 1 }), i(`&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from`, `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), i(`&.fade-in-width-expand-transition-leave-active`, `
 overflow: hidden;
 transition:
 opacity ${e2} ${J},
 max-width ${e2} ${J} ${t2},
 margin-left ${e2} ${J} ${t2},
 margin-right ${e2} ${J} ${t2};
 `), i(`&.fade-in-width-expand-transition-enter-active`, `
 overflow: hidden;
 transition:
 opacity ${e2} ${J} ${t2},
 max-width ${e2} ${J},
 margin-left ${e2} ${J},
 margin-right ${e2} ${J};
 `)];
}
var at = m(`base-wave`, `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), ot = L({ name: `BaseWave`, props: { clsPrefix: { type: String, required: true } }, setup(e2) {
  h(`-base-wave`, at, re(e2, `clsPrefix`));
  let t2 = N(null), n2 = N(false), r2 = null;
  return ne(() => {
    r2 !== null && window.clearTimeout(r2);
  }), { active: n2, selfRef: t2, play() {
    r2 !== null && (window.clearTimeout(r2), n2.value = false, r2 = null), te(() => {
      var e3;
      (e3 = t2.value) == null || e3.offsetHeight, n2.value = true, r2 = window.setTimeout(() => {
        n2.value = false, r2 = null;
      }, 1e3);
    });
  } };
}, render() {
  let { clsPrefix: e2 } = this;
  return I(`div`, { ref: `selfRef`, "aria-hidden": true, class: [`${e2}-base-wave`, this.active && `${e2}-base-wave--active`] });
} });
const st = S && `chrome` in window;
S && navigator.userAgent.includes(`Firefox`);
const ct = S && navigator.userAgent.includes(`Safari`) && !st;
function Y(e2) {
  return r(e2, [255, 255, 255, 0.16]);
}
function X(e2) {
  return r(e2, [0, 0, 0, 0.12]);
}
const lt = t(`n-button-group`);
var ut = { paddingTiny: `0 6px`, paddingSmall: `0 10px`, paddingMedium: `0 14px`, paddingLarge: `0 18px`, paddingRoundTiny: `0 10px`, paddingRoundSmall: `0 14px`, paddingRoundMedium: `0 18px`, paddingRoundLarge: `0 22px`, iconMarginTiny: `6px`, iconMarginSmall: `6px`, iconMarginMedium: `6px`, iconMarginLarge: `6px`, iconSizeTiny: `14px`, iconSizeSmall: `18px`, iconSizeMedium: `18px`, iconSizeLarge: `20px`, rippleDuration: `.6s` };
function dt(e2) {
  let { heightTiny: t2, heightSmall: n2, heightMedium: r2, heightLarge: i2, borderRadius: a2, fontSizeTiny: o2, fontSizeSmall: s2, fontSizeMedium: c2, fontSizeLarge: l2, opacityDisabled: u2, textColor2: d2, textColor3: f2, primaryColorHover: p2, primaryColorPressed: m2, borderColor: h2, primaryColor: g2, baseColor: _2, infoColor: v2, infoColorHover: y2, infoColorPressed: b2, successColor: x2, successColorHover: S2, successColorPressed: C2, warningColor: w2, warningColorHover: T2, warningColorPressed: E2, errorColor: D2, errorColorHover: O2, errorColorPressed: k2, fontWeight: A2, buttonColor2: j2, buttonColor2Hover: M2, buttonColor2Pressed: N2, fontWeightStrong: P2 } = e2;
  return Object.assign(Object.assign({}, ut), { heightTiny: t2, heightSmall: n2, heightMedium: r2, heightLarge: i2, borderRadiusTiny: a2, borderRadiusSmall: a2, borderRadiusMedium: a2, borderRadiusLarge: a2, fontSizeTiny: o2, fontSizeSmall: s2, fontSizeMedium: c2, fontSizeLarge: l2, opacityDisabled: u2, colorOpacitySecondary: `0.16`, colorOpacitySecondaryHover: `0.22`, colorOpacitySecondaryPressed: `0.28`, colorSecondary: j2, colorSecondaryHover: M2, colorSecondaryPressed: N2, colorTertiary: j2, colorTertiaryHover: M2, colorTertiaryPressed: N2, colorQuaternary: `#0000`, colorQuaternaryHover: M2, colorQuaternaryPressed: N2, color: `#0000`, colorHover: `#0000`, colorPressed: `#0000`, colorFocus: `#0000`, colorDisabled: `#0000`, textColor: d2, textColorTertiary: f2, textColorHover: p2, textColorPressed: m2, textColorFocus: p2, textColorDisabled: d2, textColorText: d2, textColorTextHover: p2, textColorTextPressed: m2, textColorTextFocus: p2, textColorTextDisabled: d2, textColorGhost: d2, textColorGhostHover: p2, textColorGhostPressed: m2, textColorGhostFocus: p2, textColorGhostDisabled: d2, border: `1px solid ${h2}`, borderHover: `1px solid ${p2}`, borderPressed: `1px solid ${m2}`, borderFocus: `1px solid ${p2}`, borderDisabled: `1px solid ${h2}`, rippleColor: g2, colorPrimary: g2, colorHoverPrimary: p2, colorPressedPrimary: m2, colorFocusPrimary: p2, colorDisabledPrimary: g2, textColorPrimary: _2, textColorHoverPrimary: _2, textColorPressedPrimary: _2, textColorFocusPrimary: _2, textColorDisabledPrimary: _2, textColorTextPrimary: g2, textColorTextHoverPrimary: p2, textColorTextPressedPrimary: m2, textColorTextFocusPrimary: p2, textColorTextDisabledPrimary: d2, textColorGhostPrimary: g2, textColorGhostHoverPrimary: p2, textColorGhostPressedPrimary: m2, textColorGhostFocusPrimary: p2, textColorGhostDisabledPrimary: g2, borderPrimary: `1px solid ${g2}`, borderHoverPrimary: `1px solid ${p2}`, borderPressedPrimary: `1px solid ${m2}`, borderFocusPrimary: `1px solid ${p2}`, borderDisabledPrimary: `1px solid ${g2}`, rippleColorPrimary: g2, colorInfo: v2, colorHoverInfo: y2, colorPressedInfo: b2, colorFocusInfo: y2, colorDisabledInfo: v2, textColorInfo: _2, textColorHoverInfo: _2, textColorPressedInfo: _2, textColorFocusInfo: _2, textColorDisabledInfo: _2, textColorTextInfo: v2, textColorTextHoverInfo: y2, textColorTextPressedInfo: b2, textColorTextFocusInfo: y2, textColorTextDisabledInfo: d2, textColorGhostInfo: v2, textColorGhostHoverInfo: y2, textColorGhostPressedInfo: b2, textColorGhostFocusInfo: y2, textColorGhostDisabledInfo: v2, borderInfo: `1px solid ${v2}`, borderHoverInfo: `1px solid ${y2}`, borderPressedInfo: `1px solid ${b2}`, borderFocusInfo: `1px solid ${y2}`, borderDisabledInfo: `1px solid ${v2}`, rippleColorInfo: v2, colorSuccess: x2, colorHoverSuccess: S2, colorPressedSuccess: C2, colorFocusSuccess: S2, colorDisabledSuccess: x2, textColorSuccess: _2, textColorHoverSuccess: _2, textColorPressedSuccess: _2, textColorFocusSuccess: _2, textColorDisabledSuccess: _2, textColorTextSuccess: x2, textColorTextHoverSuccess: S2, textColorTextPressedSuccess: C2, textColorTextFocusSuccess: S2, textColorTextDisabledSuccess: d2, textColorGhostSuccess: x2, textColorGhostHoverSuccess: S2, textColorGhostPressedSuccess: C2, textColorGhostFocusSuccess: S2, textColorGhostDisabledSuccess: x2, borderSuccess: `1px solid ${x2}`, borderHoverSuccess: `1px solid ${S2}`, borderPressedSuccess: `1px solid ${C2}`, borderFocusSuccess: `1px solid ${S2}`, borderDisabledSuccess: `1px solid ${x2}`, rippleColorSuccess: x2, colorWarning: w2, colorHoverWarning: T2, colorPressedWarning: E2, colorFocusWarning: T2, colorDisabledWarning: w2, textColorWarning: _2, textColorHoverWarning: _2, textColorPressedWarning: _2, textColorFocusWarning: _2, textColorDisabledWarning: _2, textColorTextWarning: w2, textColorTextHoverWarning: T2, textColorTextPressedWarning: E2, textColorTextFocusWarning: T2, textColorTextDisabledWarning: d2, textColorGhostWarning: w2, textColorGhostHoverWarning: T2, textColorGhostPressedWarning: E2, textColorGhostFocusWarning: T2, textColorGhostDisabledWarning: w2, borderWarning: `1px solid ${w2}`, borderHoverWarning: `1px solid ${T2}`, borderPressedWarning: `1px solid ${E2}`, borderFocusWarning: `1px solid ${T2}`, borderDisabledWarning: `1px solid ${w2}`, rippleColorWarning: w2, colorError: D2, colorHoverError: O2, colorPressedError: k2, colorFocusError: O2, colorDisabledError: D2, textColorError: _2, textColorHoverError: _2, textColorPressedError: _2, textColorFocusError: _2, textColorDisabledError: _2, textColorTextError: D2, textColorTextHoverError: O2, textColorTextPressedError: k2, textColorTextFocusError: O2, textColorTextDisabledError: d2, textColorGhostError: D2, textColorGhostHoverError: O2, textColorGhostPressedError: k2, textColorGhostFocusError: O2, textColorGhostDisabledError: D2, borderError: `1px solid ${D2}`, borderHoverError: `1px solid ${O2}`, borderPressedError: `1px solid ${k2}`, borderFocusError: `1px solid ${O2}`, borderDisabledError: `1px solid ${D2}`, rippleColorError: D2, waveOpacity: `0.6`, fontWeight: A2, fontWeightStrong: P2 });
}
var ft = { name: `Button`, common: p, self: dt }, pt = i([m(`button`, `
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
 `, [d(`color`, [a(`border`, { borderColor: `var(--n-border-color)` }), d(`disabled`, [a(`border`, { borderColor: `var(--n-border-color-disabled)` })]), _(`disabled`, [i(`&:focus`, [a(`state-border`, { borderColor: `var(--n-border-color-focus)` })]), i(`&:hover`, [a(`state-border`, { borderColor: `var(--n-border-color-hover)` })]), i(`&:active`, [a(`state-border`, { borderColor: `var(--n-border-color-pressed)` })]), d(`pressed`, [a(`state-border`, { borderColor: `var(--n-border-color-pressed)` })])])]), d(`disabled`, { backgroundColor: `var(--n-color-disabled)`, color: `var(--n-text-color-disabled)` }, [a(`border`, { border: `var(--n-border-disabled)` })]), _(`disabled`, [i(`&:focus`, { backgroundColor: `var(--n-color-focus)`, color: `var(--n-text-color-focus)` }, [a(`state-border`, { border: `var(--n-border-focus)` })]), i(`&:hover`, { backgroundColor: `var(--n-color-hover)`, color: `var(--n-text-color-hover)` }, [a(`state-border`, { border: `var(--n-border-hover)` })]), i(`&:active`, { backgroundColor: `var(--n-color-pressed)`, color: `var(--n-text-color-pressed)` }, [a(`state-border`, { border: `var(--n-border-pressed)` })]), d(`pressed`, { backgroundColor: `var(--n-color-pressed)`, color: `var(--n-text-color-pressed)` }, [a(`state-border`, { border: `var(--n-border-pressed)` })])]), d(`loading`, `cursor: wait;`), m(`base-wave`, `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [d(`active`, { zIndex: 1, animationName: `button-wave-spread, button-wave-opacity` })]), S && `MozBoxSizing` in document.createElement(`div`).style ? i(`&::moz-focus-inner`, { border: 0 }) : null, a(`border, state-border`, `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), a(`border`, `
 border: var(--n-border);
 `), a(`state-border`, `
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `), a(`icon`, `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [m(`icon-slot`, `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [V({ top: `50%`, originalTransform: `translateY(-50%)` })]), it()]), a(`content`, `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [i(`~`, [a(`icon`, { margin: `var(--n-icon-margin)`, marginRight: 0 })])]), d(`block`, `
 display: flex;
 width: 100%;
 `), d(`dashed`, [a(`border, state-border`, { borderStyle: `dashed !important` })]), d(`disabled`, { cursor: `not-allowed`, opacity: `var(--n-opacity-disabled)` })]), i(`@keyframes button-wave-spread`, { from: { boxShadow: `0 0 0.5px 0 var(--n-ripple-color)` }, to: { boxShadow: `0 0 0.5px 4.5px var(--n-ripple-color)` } }), i(`@keyframes button-wave-opacity`, { from: { opacity: `var(--n-wave-opacity)` }, to: { opacity: 0 } })]), mt = L({ name: `Button`, props: Object.assign(Object.assign({}, c.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: `button` }, type: { type: String, default: `default` }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: `left` }, attrType: { type: String, default: `button` }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !ct } }), slots: Object, setup(t2) {
  let r2 = N(null), i2 = N(null), a2 = N(false), o2 = C(() => !t2.quaternary && !t2.tertiary && !t2.secondary && !t2.text && (!t2.color || t2.ghost || t2.dashed) && t2.bordered), d2 = le(lt, {}), { mergedSizeRef: f2 } = me({}, { defaultSize: `medium`, mergedSize: (e2) => {
    let { size: n2 } = t2;
    if (n2) return n2;
    let { size: r3 } = d2;
    if (r3) return r3;
    let { mergedSize: i3 } = e2 || {};
    return i3 ? i3.value : `medium`;
  } }), p2 = R(() => t2.focusable && !t2.disabled), m2 = (e2) => {
    var n2;
    p2.value || e2.preventDefault(), !t2.nativeFocusBehavior && (e2.preventDefault(), !t2.disabled && p2.value && ((n2 = r2.value) == null || n2.focus({ preventScroll: true })));
  }, h2 = (n2) => {
    var r3;
    if (!t2.disabled && !t2.loading) {
      let { onClick: a3 } = t2;
      a3 && e(a3, n2), t2.text || (r3 = i2.value) == null || r3.play();
    }
  }, g2 = (e2) => {
    switch (e2.key) {
      case `Enter`:
        if (!t2.keyboard) return;
        a2.value = false;
    }
  }, _2 = (e2) => {
    switch (e2.key) {
      case `Enter`:
        if (!t2.keyboard || t2.loading) {
          e2.preventDefault();
          return;
        }
        a2.value = true;
    }
  }, y2 = () => {
    a2.value = false;
  }, { inlineThemeDisabled: b2, mergedClsPrefixRef: S2, mergedRtlRef: w2 } = v(t2), T2 = c(`Button`, `-button`, pt, ft, t2, S2), E2 = u(`Button`, w2, S2), D2 = R(() => {
    let { common: { cubicBezierEaseInOut: e2, cubicBezierEaseOut: r3 }, self: i3 } = T2.value, { rippleDuration: a3, opacityDisabled: o3, fontWeight: c2, fontWeightStrong: l2 } = i3, u2 = f2.value, { dashed: d3, type: p3, ghost: m3, text: h3, color: g3, round: _3, circle: v2, textColor: y3, secondary: b3, tertiary: x2, quaternary: S3, strong: C2 } = t2, w3 = { "--n-font-weight": C2 ? l2 : c2 }, E3 = { "--n-color": `initial`, "--n-color-hover": `initial`, "--n-color-pressed": `initial`, "--n-color-focus": `initial`, "--n-color-disabled": `initial`, "--n-ripple-color": `initial`, "--n-text-color": `initial`, "--n-text-color-hover": `initial`, "--n-text-color-pressed": `initial`, "--n-text-color-focus": `initial`, "--n-text-color-disabled": `initial` }, D3 = p3 === `tertiary`, O3 = p3 === `default`, k2 = D3 ? `default` : p3;
    if (h3) {
      let e3 = y3 || g3, t3 = e3 || i3[s(`textColorText`, k2)];
      E3 = { "--n-color": `#0000`, "--n-color-hover": `#0000`, "--n-color-pressed": `#0000`, "--n-color-focus": `#0000`, "--n-color-disabled": `#0000`, "--n-ripple-color": `#0000`, "--n-text-color": t3, "--n-text-color-hover": e3 ? Y(e3) : i3[s(`textColorTextHover`, k2)], "--n-text-color-pressed": e3 ? X(e3) : i3[s(`textColorTextPressed`, k2)], "--n-text-color-focus": e3 ? Y(e3) : i3[s(`textColorTextHover`, k2)], "--n-text-color-disabled": e3 || i3[s(`textColorTextDisabled`, k2)] };
    } else if (m3 || d3) {
      let e3 = y3 || g3;
      E3 = { "--n-color": `#0000`, "--n-color-hover": `#0000`, "--n-color-pressed": `#0000`, "--n-color-focus": `#0000`, "--n-color-disabled": `#0000`, "--n-ripple-color": g3 || i3[s(`rippleColor`, k2)], "--n-text-color": e3 || i3[s(`textColorGhost`, k2)], "--n-text-color-hover": e3 ? Y(e3) : i3[s(`textColorGhostHover`, k2)], "--n-text-color-pressed": e3 ? X(e3) : i3[s(`textColorGhostPressed`, k2)], "--n-text-color-focus": e3 ? Y(e3) : i3[s(`textColorGhostHover`, k2)], "--n-text-color-disabled": e3 || i3[s(`textColorGhostDisabled`, k2)] };
    } else if (b3) {
      let e3 = O3 ? i3.textColor : D3 ? i3.textColorTertiary : i3[s(`color`, k2)], t3 = g3 || e3, r4 = p3 !== `default` && p3 !== `tertiary`;
      E3 = { "--n-color": r4 ? n(t3, { alpha: Number(i3.colorOpacitySecondary) }) : i3.colorSecondary, "--n-color-hover": r4 ? n(t3, { alpha: Number(i3.colorOpacitySecondaryHover) }) : i3.colorSecondaryHover, "--n-color-pressed": r4 ? n(t3, { alpha: Number(i3.colorOpacitySecondaryPressed) }) : i3.colorSecondaryPressed, "--n-color-focus": r4 ? n(t3, { alpha: Number(i3.colorOpacitySecondaryHover) }) : i3.colorSecondaryHover, "--n-color-disabled": i3.colorSecondary, "--n-ripple-color": `#0000`, "--n-text-color": t3, "--n-text-color-hover": t3, "--n-text-color-pressed": t3, "--n-text-color-focus": t3, "--n-text-color-disabled": t3 };
    } else if (x2 || S3) {
      let e3 = O3 ? i3.textColor : D3 ? i3.textColorTertiary : i3[s(`color`, k2)], t3 = g3 || e3;
      x2 ? (E3[`--n-color`] = i3.colorTertiary, E3[`--n-color-hover`] = i3.colorTertiaryHover, E3[`--n-color-pressed`] = i3.colorTertiaryPressed, E3[`--n-color-focus`] = i3.colorSecondaryHover, E3[`--n-color-disabled`] = i3.colorTertiary) : (E3[`--n-color`] = i3.colorQuaternary, E3[`--n-color-hover`] = i3.colorQuaternaryHover, E3[`--n-color-pressed`] = i3.colorQuaternaryPressed, E3[`--n-color-focus`] = i3.colorQuaternaryHover, E3[`--n-color-disabled`] = i3.colorQuaternary), E3[`--n-ripple-color`] = `#0000`, E3[`--n-text-color`] = t3, E3[`--n-text-color-hover`] = t3, E3[`--n-text-color-pressed`] = t3, E3[`--n-text-color-focus`] = t3, E3[`--n-text-color-disabled`] = t3;
    } else E3 = { "--n-color": g3 || i3[s(`color`, k2)], "--n-color-hover": g3 ? Y(g3) : i3[s(`colorHover`, k2)], "--n-color-pressed": g3 ? X(g3) : i3[s(`colorPressed`, k2)], "--n-color-focus": g3 ? Y(g3) : i3[s(`colorFocus`, k2)], "--n-color-disabled": g3 || i3[s(`colorDisabled`, k2)], "--n-ripple-color": g3 || i3[s(`rippleColor`, k2)], "--n-text-color": y3 || (g3 ? i3.textColorPrimary : D3 ? i3.textColorTertiary : i3[s(`textColor`, k2)]), "--n-text-color-hover": y3 || (g3 ? i3.textColorHoverPrimary : i3[s(`textColorHover`, k2)]), "--n-text-color-pressed": y3 || (g3 ? i3.textColorPressedPrimary : i3[s(`textColorPressed`, k2)]), "--n-text-color-focus": y3 || (g3 ? i3.textColorFocusPrimary : i3[s(`textColorFocus`, k2)]), "--n-text-color-disabled": y3 || (g3 ? i3.textColorDisabledPrimary : i3[s(`textColorDisabled`, k2)]) };
    let A2 = { "--n-border": `initial`, "--n-border-hover": `initial`, "--n-border-pressed": `initial`, "--n-border-focus": `initial`, "--n-border-disabled": `initial` };
    A2 = h3 ? { "--n-border": `none`, "--n-border-hover": `none`, "--n-border-pressed": `none`, "--n-border-focus": `none`, "--n-border-disabled": `none` } : { "--n-border": i3[s(`border`, k2)], "--n-border-hover": i3[s(`borderHover`, k2)], "--n-border-pressed": i3[s(`borderPressed`, k2)], "--n-border-focus": i3[s(`borderFocus`, k2)], "--n-border-disabled": i3[s(`borderDisabled`, k2)] };
    let { [s(`height`, u2)]: j2, [s(`fontSize`, u2)]: M2, [s(`padding`, u2)]: N2, [s(`paddingRound`, u2)]: P2, [s(`iconSize`, u2)]: ee2, [s(`borderRadius`, u2)]: te2, [s(`iconMargin`, u2)]: ne2, waveOpacity: F2 } = i3, re2 = { "--n-width": v2 && !h3 ? j2 : `initial`, "--n-height": h3 ? `initial` : j2, "--n-font-size": M2, "--n-padding": v2 || h3 ? `initial` : _3 ? P2 : N2, "--n-icon-size": ee2, "--n-icon-margin": ne2, "--n-border-radius": h3 ? `initial` : v2 || _3 ? j2 : te2 };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": e2, "--n-bezier-ease-out": r3, "--n-ripple-duration": a3, "--n-opacity-disabled": o3, "--n-wave-opacity": F2 }, w3), E3), A2), re2);
  }), O2 = b2 ? l(`button`, R(() => {
    let e2 = ``, { dashed: n2, type: r3, ghost: i3, text: a3, color: o3, round: s2, circle: c2, textColor: l2, secondary: u2, tertiary: d3, quaternary: p3, strong: m3 } = t2;
    n2 && (e2 += `a`), i3 && (e2 += `b`), a3 && (e2 += `c`), s2 && (e2 += `d`), c2 && (e2 += `e`), u2 && (e2 += `f`), d3 && (e2 += `g`), p3 && (e2 += `h`), m3 && (e2 += `i`), o3 && (e2 += `j${x(o3)}`), l2 && (e2 += `k${x(l2)}`);
    let { value: h3 } = f2;
    return e2 += `l${h3[0]}`, e2 += `m${r3[0]}`, e2;
  }), D2, t2) : void 0;
  return { selfElRef: r2, waveElRef: i2, mergedClsPrefix: S2, mergedFocusable: p2, mergedSize: f2, showBorder: o2, enterPressed: a2, rtlEnabled: E2, handleMousedown: m2, handleKeydown: _2, handleBlur: y2, handleKeyup: g2, handleClick: h2, customColorCssVars: R(() => {
    let { color: e2 } = t2;
    if (!e2) return null;
    let n2 = Y(e2);
    return { "--n-border-color": e2, "--n-border-color-hover": n2, "--n-border-color-pressed": X(e2), "--n-border-color-focus": n2, "--n-border-color-disabled": e2 };
  }), cssVars: b2 ? void 0 : D2, themeClass: O2 == null ? void 0 : O2.themeClass, onRender: O2 == null ? void 0 : O2.onRender };
}, render() {
  let { mergedClsPrefix: e2, tag: t2, onRender: n2 } = this;
  n2 == null ? void 0 : n2();
  let r2 = y(this.$slots.default, (t3) => t3 && I(`span`, { class: `${e2}-button__content` }, t3));
  return I(t2, { ref: `selfElRef`, class: [this.themeClass, `${e2}-button`, `${e2}-button--${this.type}-type`, `${e2}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e2}-button--rtl`, this.disabled && `${e2}-button--disabled`, this.block && `${e2}-button--block`, this.enterPressed && `${e2}-button--pressed`, !this.text && this.dashed && `${e2}-button--dashed`, this.color && `${e2}-button--color`, this.secondary && `${e2}-button--secondary`, this.loading && `${e2}-button--loading`, this.ghost && `${e2}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === `right` && r2, I(g, { width: true }, { default: () => y(this.$slots.icon, (t3) => (this.loading || this.renderIcon || t3) && I(`span`, { class: `${e2}-button__icon`, style: { margin: b(this.$slots.default) ? `0` : `` } }, I(B, null, { default: () => this.loading ? I(ve, { clsPrefix: e2, key: `loading`, class: `${e2}-icon-slot`, strokeWidth: 20 }) : I(`div`, { key: `icon`, class: `${e2}-icon-slot`, role: `none` }, this.renderIcon ? this.renderIcon() : t3) }))) }), this.iconPlacement === `left` && r2, this.text ? null : I(ot, { ref: `waveElRef`, clsPrefix: e2 }), this.showBorder ? I(`div`, { "aria-hidden": true, class: `${e2}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? I(`div`, { "aria-hidden": true, class: `${e2}-button__state-border`, style: this.customColorCssVars }) : null);
} }), ht = mt;
const gt = mt;
function _t(e2) {
  let { boxShadow2: t2 } = e2;
  return { menuBoxShadow: t2 };
}
var vt = o({ name: `Select`, common: p, peers: { InternalSelection: rt, InternalSelectMenu: et }, self: _t }), yt = { buttonHeightSmall: `14px`, buttonHeightMedium: `18px`, buttonHeightLarge: `22px`, buttonWidthSmall: `14px`, buttonWidthMedium: `18px`, buttonWidthLarge: `22px`, buttonWidthPressedSmall: `20px`, buttonWidthPressedMedium: `24px`, buttonWidthPressedLarge: `28px`, railHeightSmall: `18px`, railHeightMedium: `22px`, railHeightLarge: `26px`, railWidthSmall: `32px`, railWidthMedium: `40px`, railWidthLarge: `48px` };
function bt(e2) {
  let { primaryColor: t2, opacityDisabled: r2, borderRadius: i2, textColor3: a2 } = e2;
  return Object.assign(Object.assign({}, yt), { iconColor: a2, textColor: `white`, loadingColor: t2, opacityDisabled: r2, railColor: `rgba(0, 0, 0, .14)`, railColorActive: t2, buttonBoxShadow: `0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`, buttonColor: `#FFF`, railBorderRadiusSmall: i2, railBorderRadiusMedium: i2, railBorderRadiusLarge: i2, buttonBorderRadiusSmall: i2, buttonBorderRadiusMedium: i2, buttonBorderRadiusLarge: i2, boxShadowFocus: `0 0 0 2px ${n(t2, { alpha: 0.2 })}` });
}
var xt = { name: `Switch`, common: p, self: bt }, Z = new class {
  constructor() {
    __publicField(this, "storageProvider", null);
    __publicField(this, "initialized", false);
  }
  async init() {
    if (this.initialized) return;
    let e2 = ce();
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
const St = Z.set.bind(Z), Ct = Z.get.bind(Z), wt = Z.save.bind(Z);
Z.init.bind(Z), Z.exportToJson.bind(Z), Z.clear.bind(Z), Z.remove.bind(Z);
function Tt(e2) {
  return j() ? (A(e2), true) : false;
}
var Et = /* @__PURE__ */ new WeakMap(), Dt = (...e2) => {
  var _a;
  let t2 = e2[0], n2 = (_a = se()) == null ? void 0 : _a.proxy;
  if (n2 == null && !ie()) throw Error(`injectLocal must be called in setup`);
  return n2 && Et.has(n2) && t2 in Et.get(n2) ? Et.get(n2)[t2] : le(...e2);
}, Q = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var Ot = Object.prototype.toString, kt = (e2) => Ot.call(e2) === `[object Object]`;
function At(e2) {
  return e2.endsWith(`rem`) ? Number.parseFloat(e2) * 16 : Number.parseFloat(e2);
}
function jt(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function Mt(e2) {
  return e2 || se();
}
function Nt(e2, t2 = true, n2) {
  Mt(n2) ? k(e2, n2) : t2 ? e2() : te(e2);
}
function Pt(e2, t2, n2) {
  return P(e2, t2, { ...n2, immediate: true });
}
var Ft = Q ? window : void 0;
Q && window.document, Q && window.navigator, Q && window.location;
function It(e2) {
  let t2 = D(e2);
  return (t2 == null ? void 0 : t2.$el) ?? t2;
}
function $(...e2) {
  let t2 = [], n2 = () => {
    t2.forEach((e3) => e3()), t2.length = 0;
  }, r2 = (e3, t3, n3, r3) => (e3.addEventListener(t3, n3, r3), () => e3.removeEventListener(t3, n3, r3)), i2 = R(() => {
    let t3 = jt(D(e2[0])).filter((e3) => e3 != null);
    return t3.every((e3) => typeof e3 != `string`) ? t3 : void 0;
  }), a2 = Pt(() => {
    var _a;
    return [((_a = i2.value) == null ? void 0 : _a.map((e3) => It(e3))) ?? [Ft].filter((e3) => e3 != null), jt(D(i2.value ? e2[1] : e2[0])), jt(ae(i2.value ? e2[2] : e2[1])), D(i2.value ? e2[3] : e2[2])];
  }, ([e3, i3, a3, o2]) => {
    if (n2(), !(e3 == null ? void 0 : e3.length) || !(i3 == null ? void 0 : i3.length) || !(a3 == null ? void 0 : a3.length)) return;
    let s2 = kt(o2) ? { ...o2 } : o2;
    t2.push(...e3.flatMap((e4) => i3.flatMap((t3) => a3.map((n3) => r2(e4, t3, n3, s2)))));
  }, { flush: `post` });
  return Tt(n2), () => {
    a2(), n2();
  };
}
function Lt() {
  let e2 = F(false), t2 = se();
  return t2 && k(() => {
    e2.value = true;
  }, t2), e2;
}
function Rt(e2) {
  let t2 = Lt();
  return R(() => (t2.value, !!e2()));
}
var zt = Symbol(`vueuse-ssr-width`);
function Bt() {
  let e2 = ie() ? Dt(zt, null) : null;
  return typeof e2 == `number` ? e2 : void 0;
}
function Vt(e2, t2 = {}) {
  let { window: n2 = Ft, ssrWidth: r2 = Bt() } = t2, i2 = Rt(() => n2 && `matchMedia` in n2 && typeof n2.matchMedia == `function`), a2 = F(typeof r2 == `number`), o2 = F(), s2 = F(false);
  return ee(() => {
    if (a2.value) {
      a2.value = !i2.value, s2.value = D(e2).split(`,`).some((e3) => {
        let t3 = e3.includes(`not all`), n3 = e3.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), i3 = e3.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a3 = !!(n3 || i3);
        return n3 && a3 && (a3 = r2 >= At(n3[1])), i3 && a3 && (a3 = r2 <= At(i3[1])), t3 ? !a3 : a3;
      });
      return;
    }
    i2.value && (o2.value = n2.matchMedia(D(e2)), s2.value = o2.value.matches);
  }), $(o2, `change`, (e3) => {
    s2.value = e3.matches;
  }, { passive: true }), R(() => s2.value);
}
function Ht(e2 = {}) {
  let { window: t2 = Ft, initialWidth: n2 = 1 / 0, initialHeight: r2 = 1 / 0, listenOrientation: i2 = true, includeScrollbar: a2 = true, type: o2 = `inner` } = e2, s2 = F(n2), c2 = F(r2), l2 = () => {
    if (t2) if (o2 === `outer`) s2.value = t2.outerWidth, c2.value = t2.outerHeight;
    else if (o2 === `visual` && t2.visualViewport) {
      let { width: e3, height: n3, scale: r3 } = t2.visualViewport;
      s2.value = Math.round(e3 * r3), c2.value = Math.round(n3 * r3);
    } else a2 ? (s2.value = t2.innerWidth, c2.value = t2.innerHeight) : (s2.value = t2.document.documentElement.clientWidth, c2.value = t2.document.documentElement.clientHeight);
  };
  l2(), Nt(l2);
  let u2 = { passive: true };
  return $(`resize`, l2, u2), t2 && o2 === `visual` && t2.visualViewport && $(t2.visualViewport, `resize`, l2, u2), i2 && P(Vt(`(orientation: portrait)`), () => l2()), { width: s2, height: c2 };
}
export {
  de as A,
  ve as C,
  me as D,
  z as E,
  pe as O,
  Me as S,
  B as T,
  et as _,
  xt as a,
  Xe as b,
  _t as c,
  ft as d,
  dt as f,
  tt as g,
  rt as h,
  St as i,
  fe as k,
  ht as l,
  ct as m,
  Ct as n,
  yt as o,
  lt as p,
  wt as r,
  vt as s,
  Ht as t,
  gt as u,
  $e as v,
  V as w,
  Je as x,
  Ze as y
};
