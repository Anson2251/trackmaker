import { C as e, I as t, L as n, N as r, O as i, S as a, T as o, _ as s, dt as c, f as l, gt as u, h as d, ht as f, it as p, mt as m, ot as h, pt as g, st as _, u as v, ut as y, y as b } from "./Card-nhqq8IKa.js";
import { $ as x, A as S, B as C, C as w, D as T, E, H as D, N as O, Q as k, S as A, U as j, V as M, d as N, g as P, j as F, k as I, o as L, w as ee } from "./Tooltip-DGge0ha1.js";
import { Bt as R, Et as z, Ft as te, It as B, Jt as V, Lt as ne, Mt as H, Nt as U, Ot as W, Yt as re, Zt as G, an as K, cn as q, dt as J, gt as Y, jt as ie, rt as ae, st as X, wt as Z } from "./index-DTVnoW_1.js";
import { n as oe, t as se } from "./fade-in-scale-up.cssr-DGTJWPO8.js";
import { t as Q } from "./src-A1zXJc7F.js";
import { c as ce, f as le, g as $, h as ue, i as de, m as fe, o as pe, u as me, v as he } from "./storage-DsEl3RSe.js";
import { t as ge } from "./attribute-B6FjjCe-.js";
import { t as _e } from "./Tag-BCblq9DP.js";
import { c as ve, d as ye, l as be, s as xe } from "./Button-o58fM-RZ.js";
import { t as Se } from "./use-locale-C5hleQcp.js";
import { t as Ce } from "./Suffix-CoOQonUz.js";
function we(e2) {
  return e2 & -e2;
}
var Te = class {
  constructor(e2, t2) {
    this.l = e2, this.min = t2;
    let n2 = Array(e2 + 1);
    for (let t3 = 0; t3 < e2 + 1; ++t3) n2[t3] = 0;
    this.ft = n2;
  }
  add(e2, t2) {
    if (t2 === 0) return;
    let { l: n2, ft: r2 } = this;
    for (e2 += 1; e2 <= n2; ) r2[e2] += t2, e2 += we(e2);
  }
  get(e2) {
    return this.sum(e2 + 1) - this.sum(e2);
  }
  sum(e2) {
    if (e2 === void 0 && (e2 = this.l), e2 <= 0) return 0;
    let { ft: t2, min: n2, l: r2 } = this;
    if (e2 > r2) throw Error("[FinweckTree.sum]: `i` is larger than length.");
    let i2 = e2 * n2;
    for (; e2 > 0; ) i2 += t2[e2], e2 -= we(e2);
    return i2;
  }
  getBound(e2) {
    let t2 = 0, n2 = this.l;
    for (; n2 > t2; ) {
      let r2 = Math.floor((t2 + n2) / 2), i2 = this.sum(r2);
      if (i2 > e2) {
        n2 = r2;
        continue;
      } else if (i2 < e2) {
        if (t2 === r2) return this.sum(t2 + 1) <= e2 ? t2 + 1 : r2;
        t2 = r2;
      } else return r2;
    }
    return t2;
  }
}, Ee;
function De() {
  return typeof document > `u` ? false : (Ee === void 0 && (Ee = `matchMedia` in window ? window.matchMedia(`(pointer:coarse)`).matches : false), Ee);
}
var Oe;
function ke() {
  return typeof document > `u` ? 1 : (Oe === void 0 && (Oe = `chrome` in window ? window.devicePixelRatio : 1), Oe);
}
const Ae = `VVirtualListXScroll`;
function je({ columnsRef: e2, renderColRef: t2, renderItemWithColsRef: r2 }) {
  let i2 = K(0), a2 = K(0), o2 = Y(() => {
    let t3 = e2.value;
    if (t3.length === 0) return null;
    let n2 = new Te(t3.length, 0);
    return t3.forEach((e3, t4) => {
      n2.add(t4, e3.width);
    }), n2;
  });
  return R(Ae, { startIndexRef: n(() => {
    let e3 = o2.value;
    return e3 === null ? 0 : Math.max(e3.getBound(a2.value) - 1, 0);
  }), endIndexRef: n(() => {
    let t3 = o2.value;
    return t3 === null ? 0 : Math.min(t3.getBound(a2.value + i2.value) + 1, e2.value.length - 1);
  }), columnsRef: e2, renderColRef: t2, renderItemWithColsRef: r2, getLeft: (e3) => {
    let t3 = o2.value;
    return t3 === null ? 0 : t3.sum(e3);
  } }), { listWidthRef: i2, scrollLeftRef: a2 };
}
const Me = Z({ name: `VirtualListRow`, props: { index: { type: Number, required: true }, item: { type: Object, required: true } }, setup() {
  let { startIndexRef: e2, endIndexRef: t2, columnsRef: n2, getLeft: r2, renderColRef: i2, renderItemWithColsRef: a2 } = W(Ae);
  return { startIndex: e2, endIndex: t2, columns: n2, renderCol: i2, renderItemWithCols: a2, getLeft: r2 };
}, render() {
  let { startIndex: e2, endIndex: t2, columns: n2, renderCol: r2, renderItemWithCols: i2, getLeft: a2, item: o2 } = this;
  if (i2 != null) return i2({ itemIndex: this.index, startColIndex: e2, endColIndex: t2, allColumns: n2, item: o2, getLeft: a2 });
  if (r2 != null) {
    let i3 = [];
    for (let s2 = e2; s2 <= t2; ++s2) {
      let e3 = n2[s2];
      i3.push(r2({ column: e3, left: a2(s2), item: o2 }));
    }
    return i3;
  }
  return null;
} });
var Ne = E(`.v-vl`, { maxHeight: `inherit`, height: `100%`, overflow: `auto`, minWidth: `1px` }, [E(`&:not(.v-vl--show-scrollbar)`, { scrollbarWidth: `none` }, [E(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`, { width: 0, height: 0, display: `none` })])]), Pe = Z({ name: `VirtualList`, inheritAttrs: false, props: { showScrollbar: { type: Boolean, default: true }, columns: { type: Array, default: () => [] }, renderCol: Function, renderItemWithCols: Function, items: { type: Array, default: () => [] }, itemSize: { type: Number, required: true }, itemResizable: Boolean, itemsStyle: [String, Object], visibleItemsTag: { type: [String, Object], default: `div` }, visibleItemsProps: Object, ignoreItemResize: Boolean, onScroll: Function, onWheel: Function, onResize: Function, defaultScrollKey: [Number, String], defaultScrollIndex: Number, keyField: { type: String, default: `key` }, paddingTop: { type: [Number, String], default: 0 }, paddingBottom: { type: [Number, String], default: 0 } }, setup(e2) {
  let t2 = r();
  Ne.mount({ id: `vueuc/virtual-list`, head: true, anchorMetaName: T, ssr: t2 }), ne(() => {
    let { defaultScrollIndex: t3, defaultScrollKey: n2 } = e2;
    t3 == null ? n2 != null && b2({ key: n2 }) : b2({ index: t3 });
  });
  let i2 = false, a2 = false;
  U(() => {
    if (i2 = false, !a2) {
      a2 = true;
      return;
    }
    b2({ top: g2.value, left: c2.value });
  }), B(() => {
    i2 = true, a2 || (a2 = true);
  });
  let o2 = n(() => {
    if (e2.renderCol == null && e2.renderItemWithCols == null || e2.columns.length === 0) return;
    let t3 = 0;
    return e2.columns.forEach((e3) => {
      t3 += e3.width;
    }), t3;
  }), s2 = Y(() => {
    let t3 = /* @__PURE__ */ new Map(), { keyField: n2 } = e2;
    return e2.items.forEach((e3, r2) => {
      t3.set(e3[n2], r2);
    }), t3;
  }), { scrollLeftRef: c2, listWidthRef: l2 } = je({ columnsRef: q(e2, `columns`), renderColRef: q(e2, `renderCol`), renderItemWithColsRef: q(e2, `renderItemWithCols`) }), u2 = K(null), d2 = K(void 0), f2 = /* @__PURE__ */ new Map(), m2 = Y(() => {
    let { items: t3, itemSize: n2, keyField: r2 } = e2, i3 = new Te(t3.length, n2);
    return t3.forEach((e3, t4) => {
      let n3 = e3[r2], a3 = f2.get(n3);
      a3 !== void 0 && i3.add(t4, a3);
    }), i3;
  }), h2 = K(0), g2 = K(0), v2 = n(() => Math.max(m2.value.getBound(g2.value - p(e2.paddingTop)) - 1, 0)), y2 = Y(() => {
    let { value: t3 } = d2;
    if (t3 === void 0) return [];
    let { items: n2, itemSize: r2 } = e2, i3 = v2.value, a3 = Math.min(i3 + Math.ceil(t3 / r2 + 1), n2.length - 1), o3 = [];
    for (let e3 = i3; e3 <= a3; ++e3) o3.push(n2[e3]);
    return o3;
  }), b2 = (e3, t3) => {
    if (typeof e3 == `number`) {
      E2(e3, t3, `auto`);
      return;
    }
    let { left: n2, top: r2, index: i3, key: a3, position: o3, behavior: c3, debounce: l3 = true } = e3;
    if (n2 !== void 0 || r2 !== void 0) E2(n2, r2, c3);
    else if (i3 !== void 0) w2(i3, c3, l3);
    else if (a3 !== void 0) {
      let e4 = s2.value.get(a3);
      e4 !== void 0 && w2(e4, c3, l3);
    } else o3 === `bottom` ? E2(0, 2 ** 53 - 1, c3) : o3 === `top` && E2(0, 0, c3);
  }, S2, C2 = null;
  function w2(t3, n2, r2) {
    let { value: i3 } = m2, a3 = i3.sum(t3) + p(e2.paddingTop);
    if (!r2) u2.value.scrollTo({ left: 0, top: a3, behavior: n2 });
    else {
      S2 = t3, C2 !== null && window.clearTimeout(C2), C2 = window.setTimeout(() => {
        S2 = void 0, C2 = null;
      }, 16);
      let { scrollTop: e3, offsetHeight: r3 } = u2.value;
      if (a3 > e3) {
        let o3 = i3.get(t3);
        a3 + o3 <= e3 + r3 || u2.value.scrollTo({ left: 0, top: a3 + o3 - r3, behavior: n2 });
      } else u2.value.scrollTo({ left: 0, top: a3, behavior: n2 });
    }
  }
  function E2(e3, t3, n2) {
    u2.value.scrollTo({ left: e3, top: t3, behavior: n2 });
  }
  function D2(t3, n2) {
    var _a, _b;
    if (i2 || e2.ignoreItemResize || P2(n2.target)) return;
    let { value: r2 } = m2, a3 = s2.value.get(t3), o3 = r2.get(a3), c3 = ((_b = (_a = n2.borderBoxSize) == null ? void 0 : _a[0]) == null ? void 0 : _b.blockSize) ?? n2.contentRect.height;
    if (c3 === o3) return;
    c3 - e2.itemSize === 0 ? f2.delete(t3) : f2.set(t3, c3 - e2.itemSize);
    let l3 = c3 - o3;
    if (l3 === 0) return;
    r2.add(a3, l3);
    let d3 = u2.value;
    if (d3 != null) {
      if (S2 === void 0) {
        let e3 = r2.sum(a3);
        d3.scrollTop > e3 && d3.scrollBy(0, l3);
      } else (a3 < S2 || a3 === S2 && c3 + r2.sum(a3) > d3.scrollTop + d3.offsetHeight) && d3.scrollBy(0, l3);
      N2();
    }
    h2.value++;
  }
  let O2 = !De(), k2 = false;
  function A2(t3) {
    var n2;
    (n2 = e2.onScroll) == null || n2.call(e2, t3), (!O2 || !k2) && N2();
  }
  function j2(t3) {
    var n2;
    if ((n2 = e2.onWheel) == null || n2.call(e2, t3), O2) {
      let e3 = u2.value;
      if (e3 != null) {
        if (t3.deltaX === 0 && (e3.scrollTop === 0 && t3.deltaY <= 0 || e3.scrollTop + e3.offsetHeight >= e3.scrollHeight && t3.deltaY >= 0)) return;
        t3.preventDefault(), e3.scrollTop += t3.deltaY / ke(), e3.scrollLeft += t3.deltaX / ke(), N2(), k2 = true, x(() => {
          k2 = false;
        });
      }
    }
  }
  function M2(t3) {
    if (i2 || P2(t3.target)) return;
    if (e2.renderCol == null && e2.renderItemWithCols == null) {
      if (t3.contentRect.height === d2.value) return;
    } else if (t3.contentRect.height === d2.value && t3.contentRect.width === l2.value) return;
    d2.value = t3.contentRect.height, l2.value = t3.contentRect.width;
    let { onResize: n2 } = e2;
    n2 !== void 0 && n2(t3);
  }
  function N2() {
    let { value: e3 } = u2;
    e3 != null && (g2.value = e3.scrollTop, c2.value = e3.scrollLeft);
  }
  function P2(e3) {
    let t3 = e3;
    for (; t3 !== null; ) {
      if (t3.style.display === `none`) return true;
      t3 = t3.parentElement;
    }
    return false;
  }
  return { listHeight: d2, listStyle: { overflow: `auto` }, keyToIndex: s2, itemsStyle: Y(() => {
    let { itemResizable: t3 } = e2, n2 = _(m2.value.sum());
    return h2.value, [e2.itemsStyle, { boxSizing: `content-box`, width: _(o2.value), height: t3 ? `` : n2, minHeight: t3 ? n2 : ``, paddingTop: _(e2.paddingTop), paddingBottom: _(e2.paddingBottom) }];
  }), visibleItemsStyle: Y(() => (h2.value, { transform: `translateY(${_(m2.value.sum(v2.value))})` })), viewportItems: y2, listElRef: u2, itemsElRef: K(null), scrollTo: b2, handleListResize: M2, handleListScroll: A2, handleListWheel: j2, handleItemResize: D2 };
}, render() {
  let { itemResizable: e2, keyField: t2, keyToIndex: n2, visibleItemsTag: r2 } = this;
  return z(A, { onResize: this.handleListResize }, { default: () => {
    var _a;
    var i2;
    return z(`div`, ie(this.$attrs, { class: [`v-vl`, this.showScrollbar && `v-vl--show-scrollbar`], onScroll: this.handleListScroll, onWheel: this.handleListWheel, ref: `listElRef` }), [this.items.length === 0 ? (_a = (i2 = this.$slots).empty) == null ? void 0 : _a.call(i2) : z(`div`, { ref: `itemsElRef`, class: `v-vl-items`, style: this.itemsStyle }, [z(r2, Object.assign({ class: `v-vl-visible-items`, style: this.visibleItemsStyle }, this.visibleItemsProps), { default: () => {
      let { renderCol: r3, renderItemWithCols: i3 } = this;
      return this.viewportItems.map((a2) => {
        let o2 = a2[t2], s2 = n2.get(o2), c2 = r3 == null ? void 0 : z(Me, { index: s2, item: a2 }), l2 = i3 == null ? void 0 : z(Me, { index: s2, item: a2 }), u2 = this.$slots.default({ item: a2, renderedCols: c2, renderedItemWithCols: l2, index: s2 })[0];
        return e2 ? z(A, { key: o2, onResize: (e3) => this.handleItemResize(o2, e3) }, { default: () => u2 }) : (u2.key = o2, u2);
      });
    } })])]);
  } });
} });
function Fe(e2, t2) {
  t2 && (ne(() => {
    let { value: n2 } = e2;
    n2 && w.registerHandler(n2, t2);
  }), V(e2, (e3, t3) => {
    t3 && w.unregisterHandler(t3);
  }, { deep: false }), te(() => {
    let { value: t3 } = e2;
    t3 && w.unregisterHandler(t3);
  }));
}
function Ie(e2) {
  let t2 = e2.filter((e3) => e3 !== void 0);
  if (t2.length !== 0) return t2.length === 1 ? t2[0] : (t3) => {
    e2.forEach((e3) => {
      e3 && e3(t3);
    });
  };
}
var Le = Z({ name: `Checkmark`, render() {
  return z(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 16 16` }, z(`g`, { fill: `none` }, z(`path`, { d: `M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`, fill: `currentColor` })));
} }), Re = Z({ name: `Empty`, render() {
  return z(`svg`, { viewBox: `0 0 28 28`, fill: `none`, xmlns: `http://www.w3.org/2000/svg` }, z(`path`, { d: `M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`, fill: `currentColor` }), z(`path`, { d: `M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`, fill: `currentColor` }));
} }), ze = Z({ props: { onFocus: Function, onBlur: Function }, setup(e2) {
  return () => z(`div`, { style: `width: 0; height: 0`, tabindex: 0, onFocus: e2.onFocus, onBlur: e2.onBlur });
} }), Be = c(`empty`, `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [g(`icon`, `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [y(`+`, [g(`description`, `
 margin-top: 8px;
 `)])]), g(`description`, `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), g(`extra`, `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), Ve = Z({ name: `Empty`, props: Object.assign(Object.assign({}, l.props), { description: String, showDescription: { type: Boolean, default: true }, showIcon: { type: Boolean, default: true }, size: { type: String, default: `medium` }, renderIcon: Function }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2, mergedComponentPropsRef: r2 } = b(e2), i2 = l(`Empty`, `-empty`, Be, le, e2, t2), { localeRef: a2 } = Se(`Empty`), o2 = Y(() => {
    var _a, _b;
    return e2.description ?? ((_b = (_a = r2 == null ? void 0 : r2.value) == null ? void 0 : _a.Empty) == null ? void 0 : _b.description);
  }), c2 = Y(() => {
    var _a, _b;
    return ((_b = (_a = r2 == null ? void 0 : r2.value) == null ? void 0 : _a.Empty) == null ? void 0 : _b.renderIcon) || (() => z(Re, null));
  }), d2 = Y(() => {
    let { size: t3 } = e2, { common: { cubicBezierEaseInOut: n3 }, self: { [u(`iconSize`, t3)]: r3, [u(`fontSize`, t3)]: a3, textColor: o3, iconColor: s2, extraTextColor: c3 } } = i2.value;
    return { "--n-icon-size": r3, "--n-font-size": a3, "--n-bezier": n3, "--n-text-color": o3, "--n-icon-color": s2, "--n-extra-text-color": c3 };
  }), f2 = n2 ? s(`empty`, Y(() => {
    let t3 = ``, { size: n3 } = e2;
    return t3 += n3[0], t3;
  }), d2, e2) : void 0;
  return { mergedClsPrefix: t2, mergedRenderIcon: c2, localizedDescription: Y(() => o2.value || a2.value.description), cssVars: n2 ? void 0 : d2, themeClass: f2 == null ? void 0 : f2.themeClass, onRender: f2 == null ? void 0 : f2.onRender };
}, render() {
  let { $slots: e2, mergedClsPrefix: t2, onRender: n2 } = this;
  return n2 == null ? void 0 : n2(), z(`div`, { class: [`${t2}-empty`, this.themeClass], style: this.cssVars }, this.showIcon ? z(`div`, { class: `${t2}-empty__icon` }, e2.icon ? e2.icon() : z(v, { clsPrefix: t2 }, { default: this.mergedRenderIcon })) : null, this.showDescription ? z(`div`, { class: `${t2}-empty__description` }, e2.default ? e2.default() : this.localizedDescription) : null, e2.extra ? z(`div`, { class: `${t2}-empty__extra` }, e2.extra()) : null);
} }), He = Z({ name: `NBaseSelectGroupHeader`, props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  let { renderLabelRef: e2, renderOptionRef: t2, labelFieldRef: n2, nodePropsRef: r2 } = W(M);
  return { labelField: n2, nodeProps: r2, renderLabel: e2, renderOption: t2 };
}, render() {
  let { clsPrefix: e2, renderLabel: t2, renderOption: n2, nodeProps: r2, tmNode: { rawNode: i2 } } = this, a2 = r2 == null ? void 0 : r2(i2), o2 = t2 ? t2(i2, false) : $(i2[this.labelField], i2, false), s2 = z(`div`, Object.assign({}, a2, { class: [`${e2}-base-select-group-header`, a2 == null ? void 0 : a2.class] }), o2);
  return i2.render ? i2.render({ node: s2, option: i2 }) : n2 ? n2({ node: s2, option: i2, selected: false }) : s2;
} });
function Ue(e2, t2) {
  return z(ae, { name: `fade-in-scale-up-transition` }, { default: () => e2 ? z(v, { clsPrefix: t2, class: `${t2}-base-select-option__check` }, { default: () => z(Le) }) : null });
}
var We = Z({ name: `NBaseSelectOption`, props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup(e2) {
  let { valueRef: t2, pendingTmNodeRef: r2, multipleRef: i2, valueSetRef: a2, renderLabelRef: o2, renderOptionRef: s2, labelFieldRef: c2, valueFieldRef: l2, showCheckmarkRef: u2, nodePropsRef: d2, handleOptionClick: f2, handleOptionMouseEnter: p2 } = W(M), m2 = n(() => {
    let { value: t3 } = r2;
    return t3 ? e2.tmNode.key === t3.key : false;
  });
  function h2(t3) {
    let { tmNode: n2 } = e2;
    n2.disabled || f2(t3, n2);
  }
  function g2(t3) {
    let { tmNode: n2 } = e2;
    n2.disabled || p2(t3, n2);
  }
  function _2(t3) {
    let { tmNode: n2 } = e2, { value: r3 } = m2;
    n2.disabled || r3 || p2(t3, n2);
  }
  return { multiple: i2, isGrouped: n(() => {
    let { tmNode: t3 } = e2, { parent: n2 } = t3;
    return n2 && n2.rawNode.type === `group`;
  }), showCheckmark: u2, nodeProps: d2, isPending: m2, isSelected: n(() => {
    let { value: n2 } = t2, { value: r3 } = i2;
    if (n2 === null) return false;
    let o3 = e2.tmNode.rawNode[l2.value];
    if (r3) {
      let { value: e3 } = a2;
      return e3.has(o3);
    } else return n2 === o3;
  }), labelField: c2, renderLabel: o2, renderOption: s2, handleMouseMove: _2, handleMouseEnter: g2, handleClick: h2 };
}, render() {
  let { clsPrefix: e2, tmNode: { rawNode: t2 }, isSelected: n2, isPending: r2, isGrouped: i2, showCheckmark: a2, nodeProps: o2, renderOption: s2, renderLabel: c2, handleClick: l2, handleMouseEnter: u2, handleMouseMove: d2 } = this, f2 = Ue(n2, e2), p2 = c2 ? [c2(t2, n2), a2 && f2] : [$(t2[this.labelField], t2, n2), a2 && f2], m2 = o2 == null ? void 0 : o2(t2), h2 = z(`div`, Object.assign({}, m2, { class: [`${e2}-base-select-option`, t2.class, m2 == null ? void 0 : m2.class, { [`${e2}-base-select-option--disabled`]: t2.disabled, [`${e2}-base-select-option--selected`]: n2, [`${e2}-base-select-option--grouped`]: i2, [`${e2}-base-select-option--pending`]: r2, [`${e2}-base-select-option--show-checkmark`]: a2 }], style: [(m2 == null ? void 0 : m2.style) || ``, t2.style || ``], onClick: Ie([l2, m2 == null ? void 0 : m2.onClick]), onMouseenter: Ie([u2, m2 == null ? void 0 : m2.onMouseenter]), onMousemove: Ie([d2, m2 == null ? void 0 : m2.onMousemove]) }), z(`div`, { class: `${e2}-base-select-option__content` }, p2));
  return t2.render ? t2.render({ node: h2, option: t2, selected: n2 }) : s2 ? s2({ node: h2, option: t2, selected: n2 }) : h2;
} }), Ge = c(`base-select-menu`, `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [c(`scrollbar`, `
 max-height: var(--n-height);
 `), c(`virtual-list`, `
 max-height: var(--n-height);
 `), c(`base-select-option`, `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [g(`content`, `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), c(`base-select-group-header`, `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), c(`base-select-menu-option-wrapper`, `
 position: relative;
 width: 100%;
 `), g(`loading, empty`, `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), g(`loading`, `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), g(`header`, `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), g(`action`, `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), c(`base-select-group-header`, `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), c(`base-select-option`, `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [m(`show-checkmark`, `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), y(`&::before`, `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), y(`&:active`, `
 color: var(--n-option-text-color-pressed);
 `), m(`grouped`, `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), m(`pending`, [y(`&::before`, `
 background-color: var(--n-option-color-pending);
 `)]), m(`selected`, `
 color: var(--n-option-text-color-active);
 `, [y(`&::before`, `
 background-color: var(--n-option-color-active);
 `), m(`pending`, [y(`&::before`, `
 background-color: var(--n-option-color-active-pending);
 `)])]), m(`disabled`, `
 cursor: not-allowed;
 `, [f(`selected`, `
 color: var(--n-option-text-color-disabled);
 `), m(`selected`, `
 opacity: var(--n-option-opacity-disabled);
 `)]), g(`check`, `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [se({ enterScale: `0.5` })])])]), Ke = Z({ name: `InternalSelectMenu`, props: Object.assign(Object.assign({}, l.props), { clsPrefix: { type: String, required: true }, scrollable: { type: Boolean, default: true }, treeMate: { type: Object, required: true }, multiple: Boolean, size: { type: String, default: `medium` }, value: { type: [String, Number, Array], default: null }, autoPending: Boolean, virtualScroll: { type: Boolean, default: true }, show: { type: Boolean, default: true }, labelField: { type: String, default: `label` }, valueField: { type: String, default: `value` }, loading: Boolean, focusable: Boolean, renderLabel: Function, renderOption: Function, nodeProps: Function, showCheckmark: { type: Boolean, default: true }, onMousedown: Function, onScroll: Function, onFocus: Function, onBlur: Function, onKeyup: Function, onKeydown: Function, onTabOut: Function, onMouseenter: Function, onMouseleave: Function, onResize: Function, resetMenuOnOptionsChange: { type: Boolean, default: true }, inlineThemeDisabled: Boolean, onToggle: Function }), setup(e2) {
  let { mergedClsPrefixRef: t2, mergedRtlRef: n2 } = b(e2), r2 = d(`InternalSelectMenu`, n2, t2), i2 = l(`InternalSelectMenu`, `-internal-select-menu`, Ge, me, e2, q(e2, `clsPrefix`)), a2 = K(null), o2 = K(null), c2 = K(null), f2 = Y(() => e2.treeMate.getFlattenedNodes()), m2 = Y(() => ue(f2.value)), g2 = K(null);
  function _2() {
    let { treeMate: t3 } = e2, n3 = null, { value: r3 } = e2;
    r3 === null ? n3 = t3.getFirstAvailableNode() : (n3 = e2.multiple ? t3.getNode((r3 || [])[(r3 || []).length - 1]) : t3.getNode(r3), (!n3 || n3.disabled) && (n3 = t3.getFirstAvailableNode())), z2(n3 || null);
  }
  function v2() {
    let { value: t3 } = g2;
    t3 && !e2.treeMate.getNode(t3.key) && (g2.value = null);
  }
  let y2;
  V(() => e2.show, (t3) => {
    t3 ? y2 = V(() => e2.treeMate, () => {
      e2.resetMenuOnOptionsChange ? (e2.autoPending ? _2() : v2(), H(B2)) : v2();
    }, { immediate: true }) : y2 == null ? void 0 : y2();
  }, { immediate: true }), te(() => {
    y2 == null ? void 0 : y2();
  });
  let x2 = Y(() => p(i2.value.self[u(`optionHeight`, e2.size)])), S2 = Y(() => h(i2.value.self[u(`padding`, e2.size)])), w2 = Y(() => e2.multiple && Array.isArray(e2.value) ? new Set(e2.value) : /* @__PURE__ */ new Set()), T2 = Y(() => {
    let e3 = f2.value;
    return e3 && e3.length === 0;
  });
  function E2(t3) {
    let { onToggle: n3 } = e2;
    n3 && n3(t3);
  }
  function D2(t3) {
    let { onScroll: n3 } = e2;
    n3 && n3(t3);
  }
  function O2(e3) {
    var t3;
    (t3 = c2.value) == null || t3.sync(), D2(e3);
  }
  function k2() {
    var e3;
    (e3 = c2.value) == null || e3.sync();
  }
  function A2() {
    let { value: e3 } = g2;
    return e3 || null;
  }
  function j2(e3, t3) {
    t3.disabled || z2(t3, false);
  }
  function N2(e3, t3) {
    t3.disabled || E2(t3);
  }
  function P2(t3) {
    var n3;
    oe(t3, `action`) || (n3 = e2.onKeyup) == null || n3.call(e2, t3);
  }
  function F2(t3) {
    var n3;
    oe(t3, `action`) || (n3 = e2.onKeydown) == null || n3.call(e2, t3);
  }
  function I2(t3) {
    var n3;
    (n3 = e2.onMousedown) == null || n3.call(e2, t3), !e2.focusable && t3.preventDefault();
  }
  function L2() {
    let { value: e3 } = g2;
    e3 && z2(e3.getNext({ loop: true }), true);
  }
  function ee2() {
    let { value: e3 } = g2;
    e3 && z2(e3.getPrev({ loop: true }), true);
  }
  function z2(e3, t3 = false) {
    g2.value = e3, t3 && B2();
  }
  function B2() {
    var t3, n3;
    let r3 = g2.value;
    if (!r3) return;
    let i3 = m2.value(r3.key);
    i3 !== null && (e2.virtualScroll ? (t3 = o2.value) == null || t3.scrollTo({ index: i3 }) : (n3 = c2.value) == null || n3.scrollTo({ index: i3, elSize: x2.value }));
  }
  function U2(t3) {
    var _a;
    var n3;
    ((_a = a2.value) == null ? void 0 : _a.contains(t3.target)) && ((n3 = e2.onFocus) == null || n3.call(e2, t3));
  }
  function W2(t3) {
    var _a;
    var n3;
    ((_a = a2.value) == null ? void 0 : _a.contains(t3.relatedTarget)) || (n3 = e2.onBlur) == null || n3.call(e2, t3);
  }
  R(M, { handleOptionMouseEnter: j2, handleOptionClick: N2, valueSetRef: w2, pendingTmNodeRef: g2, nodePropsRef: q(e2, `nodeProps`), showCheckmarkRef: q(e2, `showCheckmark`), multipleRef: q(e2, `multiple`), valueRef: q(e2, `value`), renderLabelRef: q(e2, `renderLabel`), renderOptionRef: q(e2, `renderOption`), labelFieldRef: q(e2, `labelField`), valueFieldRef: q(e2, `valueField`) }), R(C, a2), ne(() => {
    let { value: e3 } = c2;
    e3 && e3.sync();
  });
  let re2 = Y(() => {
    let { size: t3 } = e2, { common: { cubicBezierEaseInOut: n3 }, self: { height: r3, borderRadius: a3, color: o3, groupHeaderTextColor: s2, actionDividerColor: c3, optionTextColorPressed: l2, optionTextColor: d2, optionTextColorDisabled: f3, optionTextColorActive: p2, optionOpacityDisabled: m3, optionCheckColor: g3, actionTextColor: _3, optionColorPending: v3, optionColorActive: y3, loadingColor: b2, loadingSize: x3, optionColorActivePending: S3, [u(`optionFontSize`, t3)]: C2, [u(`optionHeight`, t3)]: w3, [u(`optionPadding`, t3)]: T3 } } = i2.value;
    return { "--n-height": r3, "--n-action-divider-color": c3, "--n-action-text-color": _3, "--n-bezier": n3, "--n-border-radius": a3, "--n-color": o3, "--n-option-font-size": C2, "--n-group-header-text-color": s2, "--n-option-check-color": g3, "--n-option-color-pending": v3, "--n-option-color-active": y3, "--n-option-color-active-pending": S3, "--n-option-height": w3, "--n-option-opacity-disabled": m3, "--n-option-text-color": d2, "--n-option-text-color-active": p2, "--n-option-text-color-disabled": f3, "--n-option-text-color-pressed": l2, "--n-option-padding": T3, "--n-option-padding-left": h(T3, `left`), "--n-option-padding-right": h(T3, `right`), "--n-loading-color": b2, "--n-loading-size": x3 };
  }), { inlineThemeDisabled: G2 } = e2, J2 = G2 ? s(`internal-select-menu`, Y(() => e2.size[0]), re2, e2) : void 0, ie2 = { selfRef: a2, next: L2, prev: ee2, getPendingTmNode: A2 };
  return Fe(a2, e2.onResize), Object.assign({ mergedTheme: i2, mergedClsPrefix: t2, rtlEnabled: r2, virtualListRef: o2, scrollbarRef: c2, itemSize: x2, padding: S2, flattenedNodes: f2, empty: T2, virtualListContainer() {
    let { value: e3 } = o2;
    return e3 == null ? void 0 : e3.listElRef;
  }, virtualListContent() {
    let { value: e3 } = o2;
    return e3 == null ? void 0 : e3.itemsElRef;
  }, doScroll: D2, handleFocusin: U2, handleFocusout: W2, handleKeyUp: P2, handleKeyDown: F2, handleMouseDown: I2, handleVirtualListResize: k2, handleVirtualListScroll: O2, cssVars: G2 ? void 0 : re2, themeClass: J2 == null ? void 0 : J2.themeClass, onRender: J2 == null ? void 0 : J2.onRender }, ie2);
}, render() {
  let { $slots: t2, virtualScroll: n2, clsPrefix: r2, mergedTheme: i2, themeClass: a2, onRender: s2 } = this;
  return s2 == null ? void 0 : s2(), z(`div`, { ref: `selfRef`, tabindex: this.focusable ? 0 : -1, class: [`${r2}-base-select-menu`, this.rtlEnabled && `${r2}-base-select-menu--rtl`, a2, this.multiple && `${r2}-base-select-menu--multiple`], style: this.cssVars, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onKeyup: this.handleKeyUp, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave }, o(t2.header, (e2) => e2 && z(`div`, { class: `${r2}-base-select-menu__header`, "data-header": true, key: `header` }, e2)), this.loading ? z(`div`, { class: `${r2}-base-select-menu__loading` }, z(xe, { clsPrefix: r2, strokeWidth: 20 })) : this.empty ? z(`div`, { class: `${r2}-base-select-menu__empty`, "data-empty": true }, e(t2.empty, () => [z(Ve, { theme: i2.peers.Empty, themeOverrides: i2.peerOverrides.Empty, size: this.size })])) : z(N, { ref: `scrollbarRef`, theme: i2.peers.Scrollbar, themeOverrides: i2.peerOverrides.Scrollbar, scrollable: this.scrollable, container: n2 ? this.virtualListContainer : void 0, content: n2 ? this.virtualListContent : void 0, onScroll: n2 ? void 0 : this.doScroll }, { default: () => n2 ? z(Pe, { ref: `virtualListRef`, class: `${r2}-virtual-list`, items: this.flattenedNodes, itemSize: this.itemSize, showScrollbar: false, paddingTop: this.padding.top, paddingBottom: this.padding.bottom, onResize: this.handleVirtualListResize, onScroll: this.handleVirtualListScroll, itemResizable: true }, { default: ({ item: e2 }) => e2.isGroup ? z(He, { key: e2.key, clsPrefix: r2, tmNode: e2 }) : e2.ignored ? null : z(We, { clsPrefix: r2, key: e2.key, tmNode: e2 }) }) : z(`div`, { class: `${r2}-base-select-menu-option-wrapper`, style: { paddingTop: this.padding.top, paddingBottom: this.padding.bottom } }, this.flattenedNodes.map((e2) => e2.isGroup ? z(He, { key: e2.key, clsPrefix: r2, tmNode: e2 }) : z(We, { clsPrefix: r2, key: e2.key, tmNode: e2 }))) }), o(t2.action, (e2) => e2 && [z(`div`, { class: `${r2}-base-select-menu__action`, "data-action": true, key: `action` }, e2), z(ze, { onFocus: this.onTabOut, key: `focus-detector` })]));
} }), qe = y([c(`base-selection`, `
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [c(`base-loading`, `
 color: var(--n-loading-color);
 `), c(`base-selection-tags`, `min-height: var(--n-height);`), g(`border, state-border`, `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), g(`state-border`, `
 z-index: 1;
 border-color: #0000;
 `), c(`base-suffix`, `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [g(`arrow`, `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), c(`base-selection-overlay`, `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [g(`wrapper`, `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), c(`base-selection-placeholder`, `
 color: var(--n-placeholder-color);
 `, [g(`inner`, `
 max-width: 100%;
 overflow: hidden;
 `)]), c(`base-selection-tags`, `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), c(`base-selection-label`, `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [c(`base-selection-input`, `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [g(`content`, `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), g(`render-label`, `
 color: var(--n-text-color);
 `)]), f(`disabled`, [y(`&:hover`, [g(`state-border`, `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), m(`focus`, [g(`state-border`, `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), m(`active`, [g(`state-border`, `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), c(`base-selection-label`, `background-color: var(--n-color-active);`), c(`base-selection-tags`, `background-color: var(--n-color-active);`)])]), m(`disabled`, `cursor: not-allowed;`, [g(`arrow`, `
 color: var(--n-arrow-color-disabled);
 `), c(`base-selection-label`, `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [c(`base-selection-input`, `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), g(`render-label`, `
 color: var(--n-text-color-disabled);
 `)]), c(`base-selection-tags`, `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), c(`base-selection-placeholder`, `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), c(`base-selection-input-tag`, `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [g(`input`, `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), g(`mirror`, `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), [`warning`, `error`].map((e2) => m(`${e2}-status`, [g(`state-border`, `border: var(--n-border-${e2});`), f(`disabled`, [y(`&:hover`, [g(`state-border`, `
 box-shadow: var(--n-box-shadow-hover-${e2});
 border: var(--n-border-hover-${e2});
 `)]), m(`active`, [g(`state-border`, `
 box-shadow: var(--n-box-shadow-active-${e2});
 border: var(--n-border-active-${e2});
 `), c(`base-selection-label`, `background-color: var(--n-color-active-${e2});`), c(`base-selection-tags`, `background-color: var(--n-color-active-${e2});`)]), m(`focus`, [g(`state-border`, `
 box-shadow: var(--n-box-shadow-focus-${e2});
 border: var(--n-border-focus-${e2});
 `)])])]))]), c(`base-selection-popover`, `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), c(`base-selection-tag-wrapper`, `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [y(`&:last-child`, `padding-right: 0;`), c(`tag`, `
 font-size: 14px;
 max-width: 100%;
 `, [g(`content`, `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), Je = Z({ name: `InternalSelection`, props: Object.assign(Object.assign({}, l.props), { clsPrefix: { type: String, required: true }, bordered: { type: Boolean, default: void 0 }, active: Boolean, pattern: { type: String, default: `` }, placeholder: String, selectedOption: { type: Object, default: null }, selectedOptions: { type: Array, default: null }, labelField: { type: String, default: `label` }, valueField: { type: String, default: `value` }, multiple: Boolean, filterable: Boolean, clearable: Boolean, disabled: Boolean, size: { type: String, default: `medium` }, loading: Boolean, autofocus: Boolean, showArrow: { type: Boolean, default: true }, inputProps: Object, focused: Boolean, renderTag: Function, onKeydown: Function, onClick: Function, onBlur: Function, onFocus: Function, onDeleteOption: Function, maxTagCount: [String, Number], ellipsisTagPopoverProps: Object, onClear: Function, onPatternInput: Function, onPatternFocus: Function, onPatternBlur: Function, renderLabel: Function, status: String, inlineThemeDisabled: Boolean, ignoreComposition: { type: Boolean, default: true }, onResize: Function }), setup(e2) {
  let { mergedClsPrefixRef: t2, mergedRtlRef: n2 } = b(e2), r2 = d(`InternalSelection`, n2, t2), i2 = K(null), a2 = K(null), o2 = K(null), c2 = K(null), f2 = K(null), p2 = K(null), m2 = K(null), g2 = K(null), _2 = K(null), v2 = K(null), y2 = K(false), x2 = K(false), S2 = K(false), C2 = l(`InternalSelection`, `-internal-selection`, qe, ce, e2, q(e2, `clsPrefix`)), w2 = Y(() => e2.clearable && !e2.disabled && (S2.value || e2.active)), T2 = Y(() => e2.selectedOption ? e2.renderTag ? e2.renderTag({ option: e2.selectedOption, handleClose: () => {
  } }) : e2.renderLabel ? e2.renderLabel(e2.selectedOption, true) : $(e2.selectedOption[e2.labelField], e2.selectedOption, true) : e2.placeholder), E2 = Y(() => {
    let t3 = e2.selectedOption;
    if (t3) return t3[e2.labelField];
  }), D2 = Y(() => e2.multiple ? !!(Array.isArray(e2.selectedOptions) && e2.selectedOptions.length) : e2.selectedOption !== null);
  function O2() {
    var t3;
    let { value: n3 } = i2;
    if (n3) {
      let { value: r3 } = a2;
      r3 && (r3.style.width = `${n3.offsetWidth}px`, e2.maxTagCount !== `responsive` && ((t3 = _2.value) == null || t3.sync({ showAllItemsBeforeCalculate: false })));
    }
  }
  function k2() {
    let { value: e3 } = v2;
    e3 && (e3.style.display = `none`);
  }
  function A2() {
    let { value: e3 } = v2;
    e3 && (e3.style.display = `inline-block`);
  }
  V(q(e2, `active`), (e3) => {
    e3 || k2();
  }), V(q(e2, `pattern`), () => {
    e2.multiple && H(O2);
  });
  function j2(t3) {
    let { onFocus: n3 } = e2;
    n3 && n3(t3);
  }
  function M2(t3) {
    let { onBlur: n3 } = e2;
    n3 && n3(t3);
  }
  function N2(t3) {
    let { onDeleteOption: n3 } = e2;
    n3 && n3(t3);
  }
  function P2(t3) {
    let { onClear: n3 } = e2;
    n3 && n3(t3);
  }
  function F2(t3) {
    let { onPatternInput: n3 } = e2;
    n3 && n3(t3);
  }
  function I2(e3) {
    var _a;
    (!e3.relatedTarget || !((_a = o2.value) == null ? void 0 : _a.contains(e3.relatedTarget))) && j2(e3);
  }
  function L2(e3) {
    var _a;
    ((_a = o2.value) == null ? void 0 : _a.contains(e3.relatedTarget)) || M2(e3);
  }
  function ee2(e3) {
    P2(e3);
  }
  function R2() {
    S2.value = true;
  }
  function z2() {
    S2.value = false;
  }
  function te2(t3) {
    !e2.active || !e2.filterable || t3.target !== a2.value && t3.preventDefault();
  }
  function B2(e3) {
    N2(e3);
  }
  let U2 = K(false);
  function W2(t3) {
    if (t3.key === `Backspace` && !U2.value && !e2.pattern.length) {
      let { selectedOptions: t4 } = e2;
      (t4 == null ? void 0 : t4.length) && B2(t4[t4.length - 1]);
    }
  }
  let G2 = null;
  function J2(t3) {
    let { value: n3 } = i2;
    n3 && (n3.textContent = t3.target.value, O2()), e2.ignoreComposition && U2.value ? G2 = t3 : F2(t3);
  }
  function ie2() {
    U2.value = true;
  }
  function ae2() {
    U2.value = false, e2.ignoreComposition && F2(G2), G2 = null;
  }
  function X2(t3) {
    var n3;
    x2.value = true, (n3 = e2.onPatternFocus) == null || n3.call(e2, t3);
  }
  function Z2(t3) {
    var n3;
    x2.value = false, (n3 = e2.onPatternBlur) == null || n3.call(e2, t3);
  }
  function oe2() {
    var t3, n3;
    if (e2.filterable) x2.value = false, (t3 = p2.value) == null || t3.blur(), (n3 = a2.value) == null || n3.blur();
    else if (e2.multiple) {
      let { value: e3 } = c2;
      e3 == null ? void 0 : e3.blur();
    } else {
      let { value: e3 } = f2;
      e3 == null ? void 0 : e3.blur();
    }
  }
  function se2() {
    var t3, n3, r3;
    e2.filterable ? (x2.value = false, (t3 = p2.value) == null || t3.focus()) : e2.multiple ? (n3 = c2.value) == null || n3.focus() : (r3 = f2.value) == null || r3.focus();
  }
  function Q2() {
    let { value: e3 } = a2;
    e3 && (A2(), e3.focus());
  }
  function le2() {
    let { value: e3 } = a2;
    e3 && e3.blur();
  }
  function ue2(e3) {
    let { value: t3 } = m2;
    t3 && t3.setTextContent(`+${e3}`);
  }
  function de2() {
    let { value: e3 } = g2;
    return e3;
  }
  function fe2() {
    return a2.value;
  }
  let pe2 = null;
  function me2() {
    pe2 !== null && window.clearTimeout(pe2);
  }
  function he2() {
    e2.active || (me2(), pe2 = window.setTimeout(() => {
      D2.value && (y2.value = true);
    }, 100));
  }
  function ge2() {
    me2();
  }
  function _e2(e3) {
    e3 || (me2(), y2.value = false);
  }
  V(D2, (e3) => {
    e3 || (y2.value = false);
  }), ne(() => {
    re(() => {
      let t3 = p2.value;
      t3 && (e2.disabled ? t3.removeAttribute(`tabindex`) : t3.tabIndex = x2.value ? -1 : 0);
    });
  }), Fe(o2, e2.onResize);
  let { inlineThemeDisabled: ve2 } = e2, ye2 = Y(() => {
    let { size: t3 } = e2, { common: { cubicBezierEaseInOut: n3 }, self: { fontWeight: r3, borderRadius: i3, color: a3, placeholderColor: o3, textColor: s2, paddingSingle: c3, paddingMultiple: l2, caretColor: d2, colorDisabled: f3, textColorDisabled: p3, placeholderColorDisabled: m3, colorActive: g3, boxShadowFocus: _3, boxShadowActive: v3, boxShadowHover: y3, border: b2, borderFocus: x3, borderHover: S3, borderActive: w3, arrowColor: T3, arrowColorDisabled: E3, loadingColor: D3, colorActiveWarning: O3, boxShadowFocusWarning: k3, boxShadowActiveWarning: A3, boxShadowHoverWarning: j3, borderWarning: M3, borderFocusWarning: N3, borderHoverWarning: P3, borderActiveWarning: F3, colorActiveError: I3, boxShadowFocusError: L3, boxShadowActiveError: ee3, boxShadowHoverError: R3, borderError: z3, borderFocusError: te3, borderHoverError: B3, borderActiveError: V2, clearColor: ne2, clearColorHover: H2, clearColorPressed: U3, clearSize: W3, arrowSize: re2, [u(`height`, t3)]: G3, [u(`fontSize`, t3)]: K2 } } = C2.value, q2 = h(c3), J3 = h(l2);
    return { "--n-bezier": n3, "--n-border": b2, "--n-border-active": w3, "--n-border-focus": x3, "--n-border-hover": S3, "--n-border-radius": i3, "--n-box-shadow-active": v3, "--n-box-shadow-focus": _3, "--n-box-shadow-hover": y3, "--n-caret-color": d2, "--n-color": a3, "--n-color-active": g3, "--n-color-disabled": f3, "--n-font-size": K2, "--n-height": G3, "--n-padding-single-top": q2.top, "--n-padding-multiple-top": J3.top, "--n-padding-single-right": q2.right, "--n-padding-multiple-right": J3.right, "--n-padding-single-left": q2.left, "--n-padding-multiple-left": J3.left, "--n-padding-single-bottom": q2.bottom, "--n-padding-multiple-bottom": J3.bottom, "--n-placeholder-color": o3, "--n-placeholder-color-disabled": m3, "--n-text-color": s2, "--n-text-color-disabled": p3, "--n-arrow-color": T3, "--n-arrow-color-disabled": E3, "--n-loading-color": D3, "--n-color-active-warning": O3, "--n-box-shadow-focus-warning": k3, "--n-box-shadow-active-warning": A3, "--n-box-shadow-hover-warning": j3, "--n-border-warning": M3, "--n-border-focus-warning": N3, "--n-border-hover-warning": P3, "--n-border-active-warning": F3, "--n-color-active-error": I3, "--n-box-shadow-focus-error": L3, "--n-box-shadow-active-error": ee3, "--n-box-shadow-hover-error": R3, "--n-border-error": z3, "--n-border-focus-error": te3, "--n-border-hover-error": B3, "--n-border-active-error": V2, "--n-clear-size": W3, "--n-clear-color": ne2, "--n-clear-color-hover": H2, "--n-clear-color-pressed": U3, "--n-arrow-size": re2, "--n-font-weight": r3 };
  }), be2 = ve2 ? s(`internal-selection`, Y(() => e2.size[0]), ye2, e2) : void 0;
  return { mergedTheme: C2, mergedClearable: w2, mergedClsPrefix: t2, rtlEnabled: r2, patternInputFocused: x2, filterablePlaceholder: T2, label: E2, selected: D2, showTagsPanel: y2, isComposing: U2, counterRef: m2, counterWrapperRef: g2, patternInputMirrorRef: i2, patternInputRef: a2, selfRef: o2, multipleElRef: c2, singleElRef: f2, patternInputWrapperRef: p2, overflowRef: _2, inputTagElRef: v2, handleMouseDown: te2, handleFocusin: I2, handleClear: ee2, handleMouseEnter: R2, handleMouseLeave: z2, handleDeleteOption: B2, handlePatternKeyDown: W2, handlePatternInputInput: J2, handlePatternInputBlur: Z2, handlePatternInputFocus: X2, handleMouseEnterCounter: he2, handleMouseLeaveCounter: ge2, handleFocusout: L2, handleCompositionEnd: ae2, handleCompositionStart: ie2, onPopoverUpdateShow: _e2, focus: se2, focusInput: Q2, blur: oe2, blurInput: le2, updateCounter: ue2, getCounter: de2, getTail: fe2, renderLabel: e2.renderLabel, cssVars: ve2 ? void 0 : ye2, themeClass: be2 == null ? void 0 : be2.themeClass, onRender: be2 == null ? void 0 : be2.onRender };
}, render() {
  let { status: e2, multiple: t2, size: n2, disabled: r2, filterable: i2, maxTagCount: a2, bordered: o2, clsPrefix: s2, ellipsisTagPopoverProps: c2, onRender: l2, renderTag: u2, renderLabel: d2 } = this;
  l2 == null ? void 0 : l2();
  let f2 = a2 === `responsive`, p2 = typeof a2 == `number`, m2 = f2 || p2, h2 = z(P, null, { default: () => z(Ce, { clsPrefix: s2, loading: this.loading, showArrow: this.showArrow, showClear: this.mergedClearable && this.selected, onClear: this.handleClear }, { default: () => {
    var _a;
    var e3;
    return (_a = (e3 = this.$slots).arrow) == null ? void 0 : _a.call(e3);
  } }) }), g2;
  if (t2) {
    let { labelField: e3 } = this, t3 = (t4) => z(`div`, { class: `${s2}-base-selection-tag-wrapper`, key: t4.value }, u2 ? u2({ option: t4, handleClose: () => {
      this.handleDeleteOption(t4);
    } }) : z(_e, { size: n2, closable: !t4.disabled, disabled: r2, onClose: () => {
      this.handleDeleteOption(t4);
    }, internalCloseIsButtonTag: false, internalCloseFocusable: false }, { default: () => d2 ? d2(t4, true) : $(t4[e3], t4, true) })), o3 = () => (p2 ? this.selectedOptions.slice(0, a2) : this.selectedOptions).map(t3), l3 = i2 ? z(`div`, { class: `${s2}-base-selection-input-tag`, ref: `inputTagElRef`, key: `__input-tag__` }, z(`input`, Object.assign({}, this.inputProps, { ref: `patternInputRef`, tabindex: -1, disabled: r2, value: this.pattern, autofocus: this.autofocus, class: `${s2}-base-selection-input-tag__input`, onBlur: this.handlePatternInputBlur, onFocus: this.handlePatternInputFocus, onKeydown: this.handlePatternKeyDown, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })), z(`span`, { ref: `patternInputMirrorRef`, class: `${s2}-base-selection-input-tag__mirror` }, this.pattern)) : null, _2 = f2 ? () => z(`div`, { class: `${s2}-base-selection-tag-wrapper`, ref: `counterWrapperRef` }, z(_e, { size: n2, ref: `counterRef`, onMouseenter: this.handleMouseEnterCounter, onMouseleave: this.handleMouseLeaveCounter, disabled: r2 })) : void 0, v2;
    if (p2) {
      let e4 = this.selectedOptions.length - a2;
      e4 > 0 && (v2 = z(`div`, { class: `${s2}-base-selection-tag-wrapper`, key: `__counter__` }, z(_e, { size: n2, ref: `counterRef`, onMouseenter: this.handleMouseEnterCounter, disabled: r2 }, { default: () => `+${e4}` })));
    }
    let y2 = f2 ? i2 ? z(Q, { ref: `overflowRef`, updateCounter: this.updateCounter, getCounter: this.getCounter, getTail: this.getTail, style: { width: `100%`, display: `flex`, overflow: `hidden` } }, { default: o3, counter: _2, tail: () => l3 }) : z(Q, { ref: `overflowRef`, updateCounter: this.updateCounter, getCounter: this.getCounter, style: { width: `100%`, display: `flex`, overflow: `hidden` } }, { default: o3, counter: _2 }) : p2 && v2 ? o3().concat(v2) : o3(), b2 = m2 ? () => z(`div`, { class: `${s2}-base-selection-popover` }, f2 ? o3() : this.selectedOptions.map(t3)) : void 0, x2 = m2 ? Object.assign({ show: this.showTagsPanel, trigger: `hover`, overlap: true, placement: `top`, width: `trigger`, onUpdateShow: this.onPopoverUpdateShow, theme: this.mergedTheme.peers.Popover, themeOverrides: this.mergedTheme.peerOverrides.Popover }, c2) : null, S2 = !this.selected && (!this.active || !this.pattern && !this.isComposing) ? z(`div`, { class: `${s2}-base-selection-placeholder ${s2}-base-selection-overlay` }, z(`div`, { class: `${s2}-base-selection-placeholder__inner` }, this.placeholder)) : null, C2 = i2 ? z(`div`, { ref: `patternInputWrapperRef`, class: `${s2}-base-selection-tags` }, y2, f2 ? null : l3, h2) : z(`div`, { ref: `multipleElRef`, class: `${s2}-base-selection-tags`, tabindex: r2 ? void 0 : 0 }, y2, h2);
    g2 = z(J, null, m2 ? z(L, Object.assign({}, x2, { scrollable: true, style: `max-height: calc(var(--v-target-height) * 6.6);` }), { trigger: () => C2, default: b2 }) : C2, S2);
  } else if (i2) {
    let e3 = this.pattern || this.isComposing, t3 = this.active ? !e3 : !this.selected, n3 = this.active ? false : this.selected;
    g2 = z(`div`, { ref: `patternInputWrapperRef`, class: `${s2}-base-selection-label`, title: this.patternInputFocused ? void 0 : ge(this.label) }, z(`input`, Object.assign({}, this.inputProps, { ref: `patternInputRef`, class: `${s2}-base-selection-input`, value: this.active ? this.pattern : ``, placeholder: ``, readonly: r2, disabled: r2, tabindex: -1, autofocus: this.autofocus, onFocus: this.handlePatternInputFocus, onBlur: this.handlePatternInputBlur, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })), n3 ? z(`div`, { class: `${s2}-base-selection-label__render-label ${s2}-base-selection-overlay`, key: `input` }, z(`div`, { class: `${s2}-base-selection-overlay__wrapper` }, u2 ? u2({ option: this.selectedOption, handleClose: () => {
    } }) : d2 ? d2(this.selectedOption, true) : $(this.label, this.selectedOption, true))) : null, t3 ? z(`div`, { class: `${s2}-base-selection-placeholder ${s2}-base-selection-overlay`, key: `placeholder` }, z(`div`, { class: `${s2}-base-selection-overlay__wrapper` }, this.filterablePlaceholder)) : null, h2);
  } else g2 = z(`div`, { ref: `singleElRef`, class: `${s2}-base-selection-label`, tabindex: this.disabled ? void 0 : 0 }, this.label === void 0 ? z(`div`, { class: `${s2}-base-selection-placeholder ${s2}-base-selection-overlay`, key: `placeholder` }, z(`div`, { class: `${s2}-base-selection-placeholder__inner` }, this.placeholder)) : z(`div`, { class: `${s2}-base-selection-input`, title: ge(this.label), key: `input` }, z(`div`, { class: `${s2}-base-selection-input__content` }, u2 ? u2({ option: this.selectedOption, handleClose: () => {
  } }) : d2 ? d2(this.selectedOption, true) : $(this.label, this.selectedOption, true))), h2);
  return z(`div`, { ref: `selfRef`, class: [`${s2}-base-selection`, this.rtlEnabled && `${s2}-base-selection--rtl`, this.themeClass, e2 && `${s2}-base-selection--${e2}-status`, { [`${s2}-base-selection--active`]: this.active, [`${s2}-base-selection--selected`]: this.selected || this.active && this.pattern, [`${s2}-base-selection--disabled`]: this.disabled, [`${s2}-base-selection--multiple`]: this.multiple, [`${s2}-base-selection--focus`]: this.focused }], style: this.cssVars, onClick: this.onClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onKeydown: this.onKeydown, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onMousedown: this.handleMouseDown }, g2, o2 ? z(`div`, { class: `${s2}-base-selection__border` }) : null, o2 ? z(`div`, { class: `${s2}-base-selection__state-border` }) : null);
} });
function Ye(e2) {
  return e2.type === `group`;
}
function Xe(e2) {
  return e2.type === `ignored`;
}
function Ze(e2, t2) {
  try {
    return !!(1 + t2.toString().toLowerCase().indexOf(e2.trim().toLowerCase()));
  } catch {
    return false;
  }
}
function Qe(e2, t2) {
  return { getIsGroup: Ye, getIgnored: Xe, getKey(t3) {
    return Ye(t3) ? t3.name || t3.key || `key-required` : t3[e2];
  }, getChildren(e3) {
    return e3[t2];
  } };
}
function $e(e2, t2, n2, r2) {
  if (!t2) return e2;
  function i2(e3) {
    if (!Array.isArray(e3)) return [];
    let a2 = [];
    for (let o2 of e3) if (Ye(o2)) {
      let e4 = i2(o2[r2]);
      e4.length && a2.push(Object.assign({}, o2, { [r2]: e4 }));
    } else if (Xe(o2)) continue;
    else t2(n2, o2) && a2.push(o2);
    return a2;
  }
  return i2(e2);
}
function et(e2, t2, n2) {
  let r2 = /* @__PURE__ */ new Map();
  return e2.forEach((e3) => {
    Ye(e3) ? e3[n2].forEach((e4) => {
      r2.set(e4[t2], e4);
    }) : r2.set(e3[t2], e3);
  }), r2;
}
var tt = y([c(`select`, `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), c(`select-menu`, `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [se({ originalTransition: `background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)` })])]), nt = Z({ name: `Select`, props: Object.assign(Object.assign({}, l.props), { to: O.propTo, bordered: { type: Boolean, default: void 0 }, clearable: Boolean, clearFilterAfterSelect: { type: Boolean, default: true }, options: { type: Array, default: () => [] }, defaultValue: { type: [String, Number, Array], default: null }, keyboard: { type: Boolean, default: true }, value: [String, Number, Array], placeholder: String, menuProps: Object, multiple: Boolean, size: String, menuSize: { type: String }, filterable: Boolean, disabled: { type: Boolean, default: void 0 }, remote: Boolean, loading: Boolean, filter: Function, placement: { type: String, default: `bottom-start` }, widthMode: { type: String, default: `trigger` }, tag: Boolean, onCreate: Function, fallbackOption: { type: [Function, Boolean], default: void 0 }, show: { type: Boolean, default: void 0 }, showArrow: { type: Boolean, default: true }, maxTagCount: [Number, String], ellipsisTagPopoverProps: Object, consistentMenuWidth: { type: Boolean, default: true }, virtualScroll: { type: Boolean, default: true }, labelField: { type: String, default: `label` }, valueField: { type: String, default: `value` }, childrenField: { type: String, default: `children` }, renderLabel: Function, renderOption: Function, renderTag: Function, "onUpdate:value": [Function, Array], inputProps: Object, nodeProps: Function, ignoreComposition: { type: Boolean, default: true }, showOnFocus: Boolean, onUpdateValue: [Function, Array], onBlur: [Function, Array], onClear: [Function, Array], onFocus: [Function, Array], onScroll: [Function, Array], onSearch: [Function, Array], onUpdateShow: [Function, Array], "onUpdate:show": [Function, Array], displayDirective: { type: String, default: `show` }, resetMenuOnOptionsChange: { type: Boolean, default: true }, status: String, showCheckmark: { type: Boolean, default: true }, onChange: [Function, Array], items: Array }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: n2, mergedBorderedRef: r2, namespaceRef: a2, inlineThemeDisabled: o2 } = b(e2), c2 = l(`Select`, `-select`, tt, pe, e2, n2), u2 = K(e2.defaultValue), d2 = j(q(e2, `value`), u2), f2 = K(false), p2 = K(``), m2 = D(e2, [`items`, `options`]), h2 = K([]), g2 = K([]), _2 = Y(() => g2.value.concat(h2.value).concat(m2.value)), v2 = Y(() => {
    let { filter: t2 } = e2;
    if (t2) return t2;
    let { labelField: n3, valueField: r3 } = e2;
    return (e3, t3) => {
      if (!t3) return false;
      let i2 = t3[n3];
      if (typeof i2 == `string`) return Ze(e3, i2);
      let a3 = t3[r3];
      return typeof a3 == `string` ? Ze(e3, a3) : typeof a3 == `number` ? Ze(e3, String(a3)) : false;
    };
  }), y2 = Y(() => {
    if (e2.remote) return m2.value;
    {
      let { value: t2 } = _2, { value: n3 } = p2;
      return !n3.length || !e2.filterable ? t2 : $e(t2, v2.value, n3, e2.childrenField);
    }
  }), x2 = Y(() => {
    let { valueField: t2, childrenField: n3 } = e2, r3 = Qe(t2, n3);
    return fe(y2.value, r3);
  }), S2 = Y(() => et(_2.value, e2.valueField, e2.childrenField)), C2 = K(false), w2 = j(q(e2, `show`), C2), T2 = K(null), E2 = K(null), A2 = K(null), { localeRef: M2 } = Se(`Select`), N2 = Y(() => e2.placeholder ?? M2.value.placeholder), P2 = [], F2 = K(/* @__PURE__ */ new Map()), I2 = Y(() => {
    let { fallbackOption: t2 } = e2;
    if (t2 === void 0) {
      let { labelField: t3, valueField: n3 } = e2;
      return (e3) => ({ [t3]: String(e3), [n3]: e3 });
    }
    return t2 === false ? false : (e3) => Object.assign(t2(e3), { value: e3 });
  });
  function L2(t2) {
    let n3 = e2.remote, { value: r3 } = F2, { value: i2 } = S2, { value: a3 } = I2, o3 = [];
    return t2.forEach((e3) => {
      if (i2.has(e3)) o3.push(i2.get(e3));
      else if (n3 && r3.has(e3)) o3.push(r3.get(e3));
      else if (a3) {
        let t3 = a3(e3);
        t3 && o3.push(t3);
      }
    }), o3;
  }
  let ee2 = Y(() => {
    if (e2.multiple) {
      let { value: e3 } = d2;
      return Array.isArray(e3) ? L2(e3) : [];
    }
    return null;
  }), R2 = Y(() => {
    let { value: t2 } = d2;
    return !e2.multiple && !Array.isArray(t2) ? t2 === null ? null : L2([t2])[0] || null : null;
  }), z2 = ye(e2), { mergedSizeRef: te2, mergedDisabledRef: B2, mergedStatusRef: ne2 } = z2;
  function H2(t2, n3) {
    let { onChange: r3, "onUpdate:value": a3, onUpdateValue: o3 } = e2, { nTriggerFormChange: s2, nTriggerFormInput: c3 } = z2;
    r3 && i(r3, t2, n3), o3 && i(o3, t2, n3), a3 && i(a3, t2, n3), u2.value = t2, s2(), c3();
  }
  function U2(t2) {
    let { onBlur: n3 } = e2, { nTriggerFormBlur: r3 } = z2;
    n3 && i(n3, t2), r3();
  }
  function W2() {
    let { onClear: t2 } = e2;
    t2 && i(t2);
  }
  function re2(t2) {
    let { onFocus: n3, showOnFocus: r3 } = e2, { nTriggerFormFocus: a3 } = z2;
    n3 && i(n3, t2), a3(), r3 && X2();
  }
  function G2(t2) {
    let { onSearch: n3 } = e2;
    n3 && i(n3, t2);
  }
  function J2(t2) {
    let { onScroll: n3 } = e2;
    n3 && i(n3, t2);
  }
  function ie2() {
    var t2;
    let { remote: n3, multiple: r3 } = e2;
    if (n3) {
      let { value: n4 } = F2;
      if (r3) {
        let { valueField: r4 } = e2;
        (t2 = ee2.value) == null || t2.forEach((e3) => {
          n4.set(e3[r4], e3);
        });
      } else {
        let t3 = R2.value;
        t3 && n4.set(t3[e2.valueField], t3);
      }
    }
  }
  function ae2(t2) {
    let { onUpdateShow: n3, "onUpdate:show": r3 } = e2;
    n3 && i(n3, t2), r3 && i(r3, t2), C2.value = t2;
  }
  function X2() {
    B2.value || (ae2(true), C2.value = true, e2.filterable && je2());
  }
  function Z2() {
    ae2(false);
  }
  function se2() {
    p2.value = ``, g2.value = P2;
  }
  let Q2 = K(false);
  function ce2() {
    e2.filterable && (Q2.value = true);
  }
  function le2() {
    e2.filterable && (Q2.value = false, w2.value || se2());
  }
  function $2() {
    B2.value || (w2.value ? e2.filterable ? je2() : Z2() : X2());
  }
  function ue2(e3) {
    var _a, _b;
    ((_b = (_a = A2.value) == null ? void 0 : _a.selfRef) == null ? void 0 : _b.contains(e3.relatedTarget)) || (f2.value = false, U2(e3), Z2());
  }
  function de2(e3) {
    re2(e3), f2.value = true;
  }
  function me2() {
    f2.value = true;
  }
  function ge2(e3) {
    var _a;
    ((_a = T2.value) == null ? void 0 : _a.$el.contains(e3.relatedTarget)) || (f2.value = false, U2(e3), Z2());
  }
  function _e2() {
    var e3;
    (e3 = T2.value) == null || e3.focus(), Z2();
  }
  function ve2(e3) {
    var _a;
    w2.value && (((_a = T2.value) == null ? void 0 : _a.$el.contains(k(e3))) || Z2());
  }
  function be2(t2) {
    if (!Array.isArray(t2)) return [];
    if (I2.value) return Array.from(t2);
    {
      let { remote: n3 } = e2, { value: r3 } = S2;
      if (n3) {
        let { value: e3 } = F2;
        return t2.filter((t3) => r3.has(t3) || e3.has(t3));
      } else return t2.filter((e3) => r3.has(e3));
    }
  }
  function xe2(e3) {
    Ce2(e3.rawNode);
  }
  function Ce2(t2) {
    if (B2.value) return;
    let { tag: n3, remote: r3, clearFilterAfterSelect: i2, valueField: a3 } = e2;
    if (n3 && !r3) {
      let { value: e3 } = g2, t3 = e3[0] || null;
      if (t3) {
        let e4 = h2.value;
        e4.length ? e4.push(t3) : h2.value = [t3], g2.value = P2;
      }
    }
    if (r3 && F2.value.set(t2[a3], t2), e2.multiple) {
      let e3 = be2(d2.value), o3 = e3.findIndex((e4) => e4 === t2[a3]);
      if (~o3) {
        if (e3.splice(o3, 1), n3 && !r3) {
          let e4 = we2(t2[a3]);
          ~e4 && (h2.value.splice(e4, 1), i2 && (p2.value = ``));
        }
      } else e3.push(t2[a3]), i2 && (p2.value = ``);
      H2(e3, L2(e3));
    } else {
      if (n3 && !r3) {
        let e3 = we2(t2[a3]);
        ~e3 ? h2.value = [h2.value[e3]] : h2.value = P2;
      }
      Ae2(), Z2(), H2(t2[a3], t2);
    }
  }
  function we2(t2) {
    return h2.value.findIndex((n3) => n3[e2.valueField] === t2);
  }
  function Te2(t2) {
    w2.value || X2();
    let { value: n3 } = t2.target;
    p2.value = n3;
    let { tag: r3, remote: i2 } = e2;
    if (G2(n3), r3 && !i2) {
      if (!n3) {
        g2.value = P2;
        return;
      }
      let { onCreate: t3 } = e2, r4 = t3 ? t3(n3) : { [e2.labelField]: n3, [e2.valueField]: n3 }, { valueField: i3, labelField: a3 } = e2;
      m2.value.some((e3) => e3[i3] === r4[i3] || e3[a3] === r4[a3]) || h2.value.some((e3) => e3[i3] === r4[i3] || e3[a3] === r4[a3]) ? g2.value = P2 : g2.value = [r4];
    }
  }
  function Ee2(t2) {
    t2.stopPropagation();
    let { multiple: n3 } = e2;
    !n3 && e2.filterable && Z2(), W2(), n3 ? H2([], []) : H2(null, null);
  }
  function De2(e3) {
    !oe(e3, `action`) && !oe(e3, `empty`) && !oe(e3, `header`) && e3.preventDefault();
  }
  function Oe2(e3) {
    J2(e3);
  }
  function ke2(t2) {
    var _a, _b;
    var n3, r3, i2;
    if (!e2.keyboard) {
      t2.preventDefault();
      return;
    }
    switch (t2.key) {
      case ` `:
        if (e2.filterable) break;
        t2.preventDefault();
      case `Enter`:
        if (!((_a = T2.value) == null ? void 0 : _a.isComposing)) {
          if (w2.value) {
            let t3 = (_b = A2.value) == null ? void 0 : _b.getPendingTmNode();
            t3 ? xe2(t3) : e2.filterable || (Z2(), Ae2());
          } else if (X2(), e2.tag && Q2.value) {
            let t3 = g2.value[0];
            if (t3) {
              let n4 = t3[e2.valueField], { value: r4 } = d2;
              e2.multiple && Array.isArray(r4) && r4.includes(n4) || Ce2(t3);
            }
          }
        }
        t2.preventDefault();
        break;
      case `ArrowUp`:
        if (t2.preventDefault(), e2.loading) return;
        w2.value && ((n3 = A2.value) == null || n3.prev());
        break;
      case `ArrowDown`:
        if (t2.preventDefault(), e2.loading) return;
        w2.value ? (r3 = A2.value) == null || r3.next() : X2();
        break;
      case `Escape`:
        w2.value && (he(t2), Z2()), (i2 = T2.value) == null || i2.focus();
        break;
    }
  }
  function Ae2() {
    var e3;
    (e3 = T2.value) == null || e3.focus();
  }
  function je2() {
    var e3;
    (e3 = T2.value) == null || e3.focusInput();
  }
  function Me2() {
    var e3;
    w2.value && ((e3 = E2.value) == null || e3.syncPosition());
  }
  ie2(), V(q(e2, `options`), ie2);
  let Ne2 = { focus: () => {
    var e3;
    (e3 = T2.value) == null || e3.focus();
  }, focusInput: () => {
    var e3;
    (e3 = T2.value) == null || e3.focusInput();
  }, blur: () => {
    var e3;
    (e3 = T2.value) == null || e3.blur();
  }, blurInput: () => {
    var e3;
    (e3 = T2.value) == null || e3.blurInput();
  } }, Pe2 = Y(() => {
    let { self: { menuBoxShadow: e3 } } = c2.value;
    return { "--n-menu-box-shadow": e3 };
  }), Fe2 = o2 ? s(`select`, void 0, Pe2, e2) : void 0;
  return Object.assign(Object.assign({}, Ne2), { mergedStatus: ne2, mergedClsPrefix: n2, mergedBordered: r2, namespace: a2, treeMate: x2, isMounted: t(), triggerRef: T2, menuRef: A2, pattern: p2, uncontrolledShow: C2, mergedShow: w2, adjustedTo: O(e2), uncontrolledValue: u2, mergedValue: d2, followerRef: E2, localizedPlaceholder: N2, selectedOption: R2, selectedOptions: ee2, mergedSize: te2, mergedDisabled: B2, focused: f2, activeWithoutMenuOpen: Q2, inlineThemeDisabled: o2, onTriggerInputFocus: ce2, onTriggerInputBlur: le2, handleTriggerOrMenuResize: Me2, handleMenuFocus: me2, handleMenuBlur: ge2, handleMenuTabOut: _e2, handleTriggerClick: $2, handleToggle: xe2, handleDeleteOption: Ce2, handlePatternInput: Te2, handleClear: Ee2, handleTriggerBlur: ue2, handleTriggerFocus: de2, handleKeydown: ke2, handleMenuAfterLeave: se2, handleMenuClickOutside: ve2, handleMenuScroll: Oe2, handleMenuKeydown: ke2, handleMenuMousedown: De2, mergedTheme: c2, cssVars: o2 ? void 0 : Pe2, themeClass: Fe2 == null ? void 0 : Fe2.themeClass, onRender: Fe2 == null ? void 0 : Fe2.onRender });
}, render() {
  return z(`div`, { class: `${this.mergedClsPrefix}-select` }, z(F, null, { default: () => [z(S, null, { default: () => z(Je, { ref: `triggerRef`, inlineThemeDisabled: this.inlineThemeDisabled, status: this.mergedStatus, inputProps: this.inputProps, clsPrefix: this.mergedClsPrefix, showArrow: this.showArrow, maxTagCount: this.maxTagCount, ellipsisTagPopoverProps: this.ellipsisTagPopoverProps, bordered: this.mergedBordered, active: this.activeWithoutMenuOpen || this.mergedShow, pattern: this.pattern, placeholder: this.localizedPlaceholder, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions, multiple: this.multiple, renderTag: this.renderTag, renderLabel: this.renderLabel, filterable: this.filterable, clearable: this.clearable, disabled: this.mergedDisabled, size: this.mergedSize, theme: this.mergedTheme.peers.InternalSelection, labelField: this.labelField, valueField: this.valueField, themeOverrides: this.mergedTheme.peerOverrides.InternalSelection, loading: this.loading, focused: this.focused, onClick: this.handleTriggerClick, onDeleteOption: this.handleDeleteOption, onPatternInput: this.handlePatternInput, onClear: this.handleClear, onBlur: this.handleTriggerBlur, onFocus: this.handleTriggerFocus, onKeydown: this.handleKeydown, onPatternBlur: this.onTriggerInputBlur, onPatternFocus: this.onTriggerInputFocus, onResize: this.handleTriggerOrMenuResize, ignoreComposition: this.ignoreComposition }, { arrow: () => {
    var _a;
    var e2;
    return [(_a = (e2 = this.$slots).arrow) == null ? void 0 : _a.call(e2)];
  } }) }), z(ee, { ref: `followerRef`, show: this.mergedShow, to: this.adjustedTo, teleportDisabled: this.adjustedTo === O.tdkey, containerClass: this.namespace, width: this.consistentMenuWidth ? `target` : void 0, minWidth: `target`, placement: this.placement }, { default: () => z(ae, { name: `fade-in-scale-up-transition`, appear: this.isMounted, onAfterLeave: this.handleMenuAfterLeave }, { default: () => {
    var _a, _b;
    var e2;
    return this.mergedShow || this.displayDirective === `show` ? ((e2 = this.onRender) == null || e2.call(this), G(z(Ke, Object.assign({}, this.menuProps, { ref: `menuRef`, onResize: this.handleTriggerOrMenuResize, inlineThemeDisabled: this.inlineThemeDisabled, virtualScroll: this.consistentMenuWidth && this.virtualScroll, class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, (_a = this.menuProps) == null ? void 0 : _a.class], clsPrefix: this.mergedClsPrefix, focusable: true, labelField: this.labelField, valueField: this.valueField, autoPending: true, nodeProps: this.nodeProps, theme: this.mergedTheme.peers.InternalSelectMenu, themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu, treeMate: this.treeMate, multiple: this.multiple, size: this.menuSize, renderOption: this.renderOption, renderLabel: this.renderLabel, value: this.mergedValue, style: [(_b = this.menuProps) == null ? void 0 : _b.style, this.cssVars], onToggle: this.handleToggle, onScroll: this.handleMenuScroll, onFocus: this.handleMenuFocus, onBlur: this.handleMenuBlur, onKeydown: this.handleMenuKeydown, onTabOut: this.handleMenuTabOut, onMousedown: this.handleMenuMousedown, show: this.mergedShow, showCheckmark: this.showCheckmark, resetMenuOnOptionsChange: this.resetMenuOnOptionsChange }), { empty: () => {
      var _a2;
      var e3;
      return [(_a2 = (e3 = this.$slots).empty) == null ? void 0 : _a2.call(e3)];
    }, header: () => {
      var _a2;
      var e3;
      return [(_a2 = (e3 = this.$slots).header) == null ? void 0 : _a2.call(e3)];
    }, action: () => {
      var _a2;
      var e3;
      return [(_a2 = (e3 = this.$slots).action) == null ? void 0 : _a2.call(e3)];
    } }), this.displayDirective === `show` ? [[X, this.mergedShow], [I, this.handleMenuClickOutside, void 0, { capture: true }]] : [[I, this.handleMenuClickOutside, void 0, { capture: true }]])) : null;
  } }) })] }));
} }), rt = c(`switch`, `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [g(`children-placeholder`, `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), g(`rail-placeholder`, `
 display: flex;
 flex-wrap: none;
 `), g(`button-placeholder`, `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), c(`base-loading`, `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [ve({ left: `50%`, top: `50%`, originalTransform: `translateX(-50%) translateY(-50%)` })]), g(`checked, unchecked`, `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), g(`checked`, `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), g(`unchecked`, `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), y(`&:focus`, [g(`rail`, `
 box-shadow: var(--n-box-shadow-focus);
 `)]), m(`round`, [g(`rail`, `border-radius: calc(var(--n-rail-height) / 2);`, [g(`button`, `border-radius: calc(var(--n-button-height) / 2);`)])]), f(`disabled`, [f(`icon`, [m(`rubber-band`, [m(`pressed`, [g(`rail`, [g(`button`, `max-width: var(--n-button-width-pressed);`)])]), g(`rail`, [y(`&:active`, [g(`button`, `max-width: var(--n-button-width-pressed);`)])]), m(`active`, [m(`pressed`, [g(`rail`, [g(`button`, `left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]), g(`rail`, [y(`&:active`, [g(`button`, `left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]), m(`active`, [g(`rail`, [g(`button`, `left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]), g(`rail`, `
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [g(`button-icon`, `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `, [ve()]), g(`button`, `
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]), m(`active`, [g(`rail`, `background-color: var(--n-rail-color-active);`)]), m(`loading`, [g(`rail`, `
 cursor: wait;
 `)]), m(`disabled`, [g(`rail`, `
 cursor: not-allowed;
 opacity: .5;
 `)])]);
const it = Object.assign(Object.assign({}, l.props), { size: { type: String, default: `medium` }, value: { type: [String, Number, Boolean], default: void 0 }, loading: Boolean, defaultValue: { type: [String, Number, Boolean], default: false }, disabled: { type: Boolean, default: void 0 }, round: { type: Boolean, default: true }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], checkedValue: { type: [String, Number, Boolean], default: true }, uncheckedValue: { type: [String, Number, Boolean], default: false }, railStyle: Function, rubberBand: { type: Boolean, default: true }, onChange: [Function, Array] });
var at, ot = Z({ name: `Switch`, props: it, slots: Object, setup(e2) {
  at === void 0 && (at = typeof CSS < `u` ? CSS.supports === void 0 ? false : CSS.supports(`width`, `max(1px)`) : true);
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = b(e2), r2 = l(`Switch`, `-switch`, rt, de, e2, t2), a2 = ye(e2), { mergedSizeRef: o2, mergedDisabledRef: c2 } = a2, d2 = K(e2.defaultValue), f2 = j(q(e2, `value`), d2), m2 = Y(() => f2.value === e2.checkedValue), h2 = K(false), g2 = K(false), v2 = Y(() => {
    let { railStyle: t3 } = e2;
    if (t3) return t3({ focused: g2.value, checked: m2.value });
  });
  function y2(t3) {
    let { "onUpdate:value": n3, onChange: r3, onUpdateValue: o3 } = e2, { nTriggerFormInput: s2, nTriggerFormChange: c3 } = a2;
    n3 && i(n3, t3), o3 && i(o3, t3), r3 && i(r3, t3), d2.value = t3, s2(), c3();
  }
  function x2() {
    let { nTriggerFormFocus: e3 } = a2;
    e3();
  }
  function S2() {
    let { nTriggerFormBlur: e3 } = a2;
    e3();
  }
  function C2() {
    e2.loading || c2.value || (f2.value === e2.checkedValue ? y2(e2.uncheckedValue) : y2(e2.checkedValue));
  }
  function w2() {
    g2.value = true, x2();
  }
  function T2() {
    g2.value = false, S2(), h2.value = false;
  }
  function E2(t3) {
    e2.loading || c2.value || t3.key === ` ` && (f2.value === e2.checkedValue ? y2(e2.uncheckedValue) : y2(e2.checkedValue), h2.value = false);
  }
  function D2(t3) {
    e2.loading || c2.value || t3.key === ` ` && (t3.preventDefault(), h2.value = true);
  }
  let O2 = Y(() => {
    let { value: e3 } = o2, { self: { opacityDisabled: t3, railColor: n3, railColorActive: i2, buttonBoxShadow: a3, buttonColor: s2, boxShadowFocus: c3, loadingColor: l2, textColor: d3, iconColor: f3, [u(`buttonHeight`, e3)]: m3, [u(`buttonWidth`, e3)]: h3, [u(`buttonWidthPressed`, e3)]: g3, [u(`railHeight`, e3)]: v3, [u(`railWidth`, e3)]: y3, [u(`railBorderRadius`, e3)]: b2, [u(`buttonBorderRadius`, e3)]: x3 }, common: { cubicBezierEaseInOut: S3 } } = r2.value, C3, w3, T3;
    return at ? (C3 = `calc((${v3} - ${m3}) / 2)`, w3 = `max(${v3}, ${m3})`, T3 = `max(${y3}, calc(${y3} + ${m3} - ${v3}))`) : (C3 = _((p(v3) - p(m3)) / 2), w3 = _(Math.max(p(v3), p(m3))), T3 = p(v3) > p(m3) ? y3 : _(p(y3) + p(m3) - p(v3))), { "--n-bezier": S3, "--n-button-border-radius": x3, "--n-button-box-shadow": a3, "--n-button-color": s2, "--n-button-width": h3, "--n-button-width-pressed": g3, "--n-button-height": m3, "--n-height": w3, "--n-offset": C3, "--n-opacity-disabled": t3, "--n-rail-border-radius": b2, "--n-rail-color": n3, "--n-rail-color-active": i2, "--n-rail-height": v3, "--n-rail-width": y3, "--n-width": T3, "--n-box-shadow-focus": c3, "--n-loading-color": l2, "--n-text-color": d3, "--n-icon-color": f3 };
  }), k2 = n2 ? s(`switch`, Y(() => o2.value[0]), O2, e2) : void 0;
  return { handleClick: C2, handleBlur: T2, handleFocus: w2, handleKeyup: E2, handleKeydown: D2, mergedRailStyle: v2, pressed: h2, mergedClsPrefix: t2, mergedValue: f2, checked: m2, mergedDisabled: c2, cssVars: n2 ? void 0 : O2, themeClass: k2 == null ? void 0 : k2.themeClass, onRender: k2 == null ? void 0 : k2.onRender };
}, render() {
  let { mergedClsPrefix: e2, mergedDisabled: t2, checked: n2, mergedRailStyle: r2, onRender: i2, $slots: s2 } = this;
  i2 == null ? void 0 : i2();
  let { checked: c2, unchecked: l2, icon: u2, "checked-icon": d2, "unchecked-icon": f2 } = s2, p2 = !(a(u2) && a(d2) && a(f2));
  return z(`div`, { role: `switch`, "aria-checked": n2, class: [`${e2}-switch`, this.themeClass, p2 && `${e2}-switch--icon`, n2 && `${e2}-switch--active`, t2 && `${e2}-switch--disabled`, this.round && `${e2}-switch--round`, this.loading && `${e2}-switch--loading`, this.pressed && `${e2}-switch--pressed`, this.rubberBand && `${e2}-switch--rubber-band`], tabindex: this.mergedDisabled ? void 0 : 0, style: this.cssVars, onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, z(`div`, { class: `${e2}-switch__rail`, "aria-hidden": `true`, style: r2 }, o(c2, (t3) => o(l2, (n3) => t3 || n3 ? z(`div`, { "aria-hidden": true, class: `${e2}-switch__children-placeholder` }, z(`div`, { class: `${e2}-switch__rail-placeholder` }, z(`div`, { class: `${e2}-switch__button-placeholder` }), t3), z(`div`, { class: `${e2}-switch__rail-placeholder` }, z(`div`, { class: `${e2}-switch__button-placeholder` }), n3)) : null)), z(`div`, { class: `${e2}-switch__button` }, o(u2, (t3) => o(d2, (n3) => o(f2, (r3) => z(be, null, { default: () => this.loading ? z(xe, { key: `loading`, clsPrefix: e2, strokeWidth: 20 }) : this.checked && (n3 || t3) ? z(`div`, { class: `${e2}-switch__button-icon`, key: n3 ? `checked-icon` : `icon` }, n3 || t3) : !this.checked && (r3 || t3) ? z(`div`, { class: `${e2}-switch__button-icon`, key: r3 ? `unchecked-icon` : `icon` }, r3 || t3) : null })))), o(c2, (t3) => t3 && z(`div`, { key: `checked`, class: `${e2}-switch__checked` }, t3)), o(l2, (t3) => t3 && z(`div`, { key: `unchecked`, class: `${e2}-switch__unchecked` }, t3)))));
} });
export {
  Ve as a,
  Ke as i,
  nt as n,
  Ie as o,
  Qe as r,
  Pe as s,
  ot as t
};
