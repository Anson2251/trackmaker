import { $ as e, D as t, S as n, at as r, ct as i, dt as a, f as o, g as s, h as c, j as l, lt as u, nt as d, ot as f, tt as p, u as m, ut as h, v as g, w as _, x as v } from "./Card-bZRU5_dU.js";
import { A as y, C as b, D as x, E as S, G as C, H as w, P as T, S as E, U as D, V as O, W as k, Y as A, a as ee, et as j, h as M, j as N, k as P, tt as F, u as I, w as L } from "./light-D_ALVt-Q.js";
import { At as R, Bt as z, Ct as te, Dt as B, Et as ne, J as V, Jt as H, Lt as U, Rt as W, St as re, Tt as ie, Z as G, Zt as K, gt as q, mt as J, ot as Y, tt as ae, vt as X, xt as Z } from "./index-CUxSoUWF.js";
import { n as oe, t as se } from "./fade-in-scale-up.cssr-Cry6SdAY.js";
import { t as Q } from "./attribute-BjRHbRSg.js";
import { n as ce } from "./core-CRm4dJjp.js";
import { C as le, D as $, E as ue, S as de, b as fe, g as pe, i as me, k as he, m as ge, o as _e, v as ve, w as ye, x as be } from "./storage-BvOi6SEb.js";
import { t as xe } from "./use-locale-SVRhztN4.js";
import { t as Se } from "./Suffix-DSN4asCg.js";
import { r as Ce } from "./ListItem-DUy-uA9z.js";
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
function je({ columnsRef: e2, renderColRef: t2, renderItemWithColsRef: n2 }) {
  let r2 = H(0), i2 = H(0), a2 = Y(() => {
    let t3 = e2.value;
    if (t3.length === 0) return null;
    let n3 = new Te(t3.length, 0);
    return t3.forEach((e3, t4) => {
      n3.add(t4, e3.width);
    }), n3;
  });
  return R(Ae, { startIndexRef: A(() => {
    let e3 = a2.value;
    return e3 === null ? 0 : Math.max(e3.getBound(i2.value) - 1, 0);
  }), endIndexRef: A(() => {
    let t3 = a2.value;
    return t3 === null ? 0 : Math.min(t3.getBound(i2.value + r2.value) + 1, e2.value.length - 1);
  }), columnsRef: e2, renderColRef: t2, renderItemWithColsRef: n2, getLeft: (e3) => {
    let t3 = a2.value;
    return t3 === null ? 0 : t3.sum(e3);
  } }), { listWidthRef: r2, scrollLeftRef: i2 };
}
const Me = J({ name: `VirtualListRow`, props: { index: { type: Number, required: true }, item: { type: Object, required: true } }, setup() {
  let { startIndexRef: e2, endIndexRef: t2, columnsRef: n2, getLeft: r2, renderColRef: i2, renderItemWithColsRef: a2 } = X(Ae);
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
var Ne = S(`.v-vl`, { maxHeight: `inherit`, height: `100%`, overflow: `auto`, minWidth: `1px` }, [S(`&:not(.v-vl--show-scrollbar)`, { scrollbarWidth: `none` }, [S(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`, { width: 0, height: 0, display: `none` })])]), Pe = J({ name: `VirtualList`, inheritAttrs: false, props: { showScrollbar: { type: Boolean, default: true }, columns: { type: Array, default: () => [] }, renderCol: Function, renderItemWithCols: Function, items: { type: Array, default: () => [] }, itemSize: { type: Number, required: true }, itemResizable: Boolean, itemsStyle: [String, Object], visibleItemsTag: { type: [String, Object], default: `div` }, visibleItemsProps: Object, ignoreItemResize: Boolean, onScroll: Function, onWheel: Function, onResize: Function, defaultScrollKey: [Number, String], defaultScrollIndex: Number, keyField: { type: String, default: `key` }, paddingTop: { type: [Number, String], default: 0 }, paddingBottom: { type: [Number, String], default: 0 } }, setup(t2) {
  let n2 = l();
  Ne.mount({ id: `vueuc/virtual-list`, head: true, anchorMetaName: x, ssr: n2 }), B(() => {
    let { defaultScrollIndex: e2, defaultScrollKey: n3 } = t2;
    e2 == null ? n3 != null && y2({ key: n3 }) : y2({ index: e2 });
  });
  let r2 = false, i2 = false;
  te(() => {
    if (r2 = false, !i2) {
      i2 = true;
      return;
    }
    y2({ top: g2.value, left: s2.value });
  }), ne(() => {
    r2 = true, i2 || (i2 = true);
  });
  let a2 = A(() => {
    if (t2.renderCol == null && t2.renderItemWithCols == null || t2.columns.length === 0) return;
    let e2 = 0;
    return t2.columns.forEach((t3) => {
      e2 += t3.width;
    }), e2;
  }), o2 = Y(() => {
    let e2 = /* @__PURE__ */ new Map(), { keyField: n3 } = t2;
    return t2.items.forEach((t3, r3) => {
      e2.set(t3[n3], r3);
    }), e2;
  }), { scrollLeftRef: s2, listWidthRef: c2 } = je({ columnsRef: K(t2, `columns`), renderColRef: K(t2, `renderCol`), renderItemWithColsRef: K(t2, `renderItemWithCols`) }), u2 = H(null), f2 = H(void 0), p2 = /* @__PURE__ */ new Map(), m2 = Y(() => {
    let { items: e2, itemSize: n3, keyField: r3 } = t2, i3 = new Te(e2.length, n3);
    return e2.forEach((e3, t3) => {
      let n4 = e3[r3], a3 = p2.get(n4);
      a3 !== void 0 && i3.add(t3, a3);
    }), i3;
  }), h2 = H(0), g2 = H(0), _2 = A(() => Math.max(m2.value.getBound(g2.value - e(t2.paddingTop)) - 1, 0)), v2 = Y(() => {
    let { value: e2 } = f2;
    if (e2 === void 0) return [];
    let { items: n3, itemSize: r3 } = t2, i3 = _2.value, a3 = Math.min(i3 + Math.ceil(e2 / r3 + 1), n3.length - 1), o3 = [];
    for (let e3 = i3; e3 <= a3; ++e3) o3.push(n3[e3]);
    return o3;
  }), y2 = (e2, t3) => {
    if (typeof e2 == `number`) {
      w2(e2, t3, `auto`);
      return;
    }
    let { left: n3, top: r3, index: i3, key: a3, position: s3, behavior: c3, debounce: l2 = true } = e2;
    if (n3 !== void 0 || r3 !== void 0) w2(n3, r3, c3);
    else if (i3 !== void 0) C2(i3, c3, l2);
    else if (a3 !== void 0) {
      let e3 = o2.value.get(a3);
      e3 !== void 0 && C2(e3, c3, l2);
    } else s3 === `bottom` ? w2(0, 2 ** 53 - 1, c3) : s3 === `top` && w2(0, 0, c3);
  }, b2, S2 = null;
  function C2(n3, r3, i3) {
    let { value: a3 } = m2, o3 = a3.sum(n3) + e(t2.paddingTop);
    if (!i3) u2.value.scrollTo({ left: 0, top: o3, behavior: r3 });
    else {
      b2 = n3, S2 !== null && window.clearTimeout(S2), S2 = window.setTimeout(() => {
        b2 = void 0, S2 = null;
      }, 16);
      let { scrollTop: e2, offsetHeight: t3 } = u2.value;
      if (o3 > e2) {
        let i4 = a3.get(n3);
        o3 + i4 <= e2 + t3 || u2.value.scrollTo({ left: 0, top: o3 + i4 - t3, behavior: r3 });
      } else u2.value.scrollTo({ left: 0, top: o3, behavior: r3 });
    }
  }
  function w2(e2, t3, n3) {
    u2.value.scrollTo({ left: e2, top: t3, behavior: n3 });
  }
  function T2(e2, n3) {
    var _a, _b;
    if (r2 || t2.ignoreItemResize || M2(n3.target)) return;
    let { value: i3 } = m2, a3 = o2.value.get(e2), s3 = i3.get(a3), c3 = ((_b = (_a = n3.borderBoxSize) == null ? void 0 : _a[0]) == null ? void 0 : _b.blockSize) ?? n3.contentRect.height;
    if (c3 === s3) return;
    c3 - t2.itemSize === 0 ? p2.delete(e2) : p2.set(e2, c3 - t2.itemSize);
    let l2 = c3 - s3;
    if (l2 === 0) return;
    i3.add(a3, l2);
    let d2 = u2.value;
    if (d2 != null) {
      if (b2 === void 0) {
        let e3 = i3.sum(a3);
        d2.scrollTop > e3 && d2.scrollBy(0, l2);
      } else (a3 < b2 || a3 === b2 && c3 + i3.sum(a3) > d2.scrollTop + d2.offsetHeight) && d2.scrollBy(0, l2);
      j2();
    }
    h2.value++;
  }
  let E2 = !De(), D2 = false;
  function O2(e2) {
    var n3;
    (n3 = t2.onScroll) == null || n3.call(t2, e2), (!E2 || !D2) && j2();
  }
  function k2(e2) {
    var n3;
    if ((n3 = t2.onWheel) == null || n3.call(t2, e2), E2) {
      let t3 = u2.value;
      if (t3 != null) {
        if (e2.deltaX === 0 && (t3.scrollTop === 0 && e2.deltaY <= 0 || t3.scrollTop + t3.offsetHeight >= t3.scrollHeight && e2.deltaY >= 0)) return;
        e2.preventDefault(), t3.scrollTop += e2.deltaY / ke(), t3.scrollLeft += e2.deltaX / ke(), j2(), D2 = true, F(() => {
          D2 = false;
        });
      }
    }
  }
  function ee2(e2) {
    if (r2 || M2(e2.target)) return;
    if (t2.renderCol == null && t2.renderItemWithCols == null) {
      if (e2.contentRect.height === f2.value) return;
    } else if (e2.contentRect.height === f2.value && e2.contentRect.width === c2.value) return;
    f2.value = e2.contentRect.height, c2.value = e2.contentRect.width;
    let { onResize: n3 } = t2;
    n3 !== void 0 && n3(e2);
  }
  function j2() {
    let { value: e2 } = u2;
    e2 != null && (g2.value = e2.scrollTop, s2.value = e2.scrollLeft);
  }
  function M2(e2) {
    let t3 = e2;
    for (; t3 !== null; ) {
      if (t3.style.display === `none`) return true;
      t3 = t3.parentElement;
    }
    return false;
  }
  return { listHeight: f2, listStyle: { overflow: `auto` }, keyToIndex: o2, itemsStyle: Y(() => {
    let { itemResizable: e2 } = t2, n3 = d(m2.value.sum());
    return h2.value, [t2.itemsStyle, { boxSizing: `content-box`, width: d(a2.value), height: e2 ? `` : n3, minHeight: e2 ? n3 : ``, paddingTop: d(t2.paddingTop), paddingBottom: d(t2.paddingBottom) }];
  }), visibleItemsStyle: Y(() => (h2.value, { transform: `translateY(${d(m2.value.sum(_2.value))})` })), viewportItems: v2, listElRef: u2, itemsElRef: H(null), scrollTo: y2, handleListResize: ee2, handleListScroll: O2, handleListWheel: k2, handleItemResize: T2 };
}, render() {
  let { itemResizable: e2, keyField: t2, keyToIndex: n2, visibleItemsTag: r2 } = this;
  return q(E, { onResize: this.handleListResize }, { default: () => {
    var _a;
    var i2;
    return q(`div`, Z(this.$attrs, { class: [`v-vl`, this.showScrollbar && `v-vl--show-scrollbar`], onScroll: this.handleListScroll, onWheel: this.handleListWheel, ref: `listElRef` }), [this.items.length === 0 ? (_a = (i2 = this.$slots).empty) == null ? void 0 : _a.call(i2) : q(`div`, { ref: `itemsElRef`, class: `v-vl-items`, style: this.itemsStyle }, [q(r2, Object.assign({ class: `v-vl-visible-items`, style: this.visibleItemsStyle }, this.visibleItemsProps), { default: () => {
      let { renderCol: r3, renderItemWithCols: i3 } = this;
      return this.viewportItems.map((a2) => {
        let o2 = a2[t2], s2 = n2.get(o2), c2 = r3 == null ? void 0 : q(Me, { index: s2, item: a2 }), l2 = i3 == null ? void 0 : q(Me, { index: s2, item: a2 }), u2 = this.$slots.default({ item: a2, renderedCols: c2, renderedItemWithCols: l2, index: s2 })[0];
        return e2 ? q(E, { key: o2, onResize: (e3) => this.handleItemResize(o2, e3) }, { default: () => u2 }) : (u2.key = o2, u2);
      });
    } })])]);
  } });
} });
function Fe(e2, t2) {
  t2 && (B(() => {
    let { value: n2 } = e2;
    n2 && b.registerHandler(n2, t2);
  }), U(e2, (e3, t3) => {
    t3 && b.unregisterHandler(t3);
  }, { deep: false }), ie(() => {
    let { value: t3 } = e2;
    t3 && b.unregisterHandler(t3);
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
var Le = J({ name: `Checkmark`, render() {
  return q(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 16 16` }, q(`g`, { fill: `none` }, q(`path`, { d: `M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`, fill: `currentColor` })));
} }), Re = J({ name: `Empty`, render() {
  return q(`svg`, { viewBox: `0 0 28 28`, fill: `none`, xmlns: `http://www.w3.org/2000/svg` }, q(`path`, { d: `M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`, fill: `currentColor` }), q(`path`, { d: `M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`, fill: `currentColor` }));
} }), ze = J({ props: { onFocus: Function, onBlur: Function }, setup(e2) {
  return () => q(`div`, { style: `width: 0; height: 0`, tabindex: 0, onFocus: e2.onFocus, onBlur: e2.onBlur });
} }), Be = f(`empty`, `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [i(`icon`, `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [r(`+`, [i(`description`, `
 margin-top: 8px;
 `)])]), i(`description`, `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), i(`extra`, `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), Ve = J({ name: `Empty`, props: Object.assign(Object.assign({}, o.props), { description: String, showDescription: { type: Boolean, default: true }, showIcon: { type: Boolean, default: true }, size: { type: String, default: `medium` }, renderIcon: Function }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2, mergedComponentPropsRef: r2 } = g(e2), i2 = o(`Empty`, `-empty`, Be, ve, e2, t2), { localeRef: c2 } = xe(`Empty`), l2 = Y(() => {
    var _a, _b;
    return e2.description ?? ((_b = (_a = r2 == null ? void 0 : r2.value) == null ? void 0 : _a.Empty) == null ? void 0 : _b.description);
  }), u2 = Y(() => {
    var _a, _b;
    return ((_b = (_a = r2 == null ? void 0 : r2.value) == null ? void 0 : _a.Empty) == null ? void 0 : _b.renderIcon) || (() => q(Re, null));
  }), d2 = Y(() => {
    let { size: t3 } = e2, { common: { cubicBezierEaseInOut: n3 }, self: { [a(`iconSize`, t3)]: r3, [a(`fontSize`, t3)]: o2, textColor: s2, iconColor: c3, extraTextColor: l3 } } = i2.value;
    return { "--n-icon-size": r3, "--n-font-size": o2, "--n-bezier": n3, "--n-text-color": s2, "--n-icon-color": c3, "--n-extra-text-color": l3 };
  }), f2 = n2 ? s(`empty`, Y(() => {
    let t3 = ``, { size: n3 } = e2;
    return t3 += n3[0], t3;
  }), d2, e2) : void 0;
  return { mergedClsPrefix: t2, mergedRenderIcon: u2, localizedDescription: Y(() => l2.value || c2.value.description), cssVars: n2 ? void 0 : d2, themeClass: f2 == null ? void 0 : f2.themeClass, onRender: f2 == null ? void 0 : f2.onRender };
}, render() {
  let { $slots: e2, mergedClsPrefix: t2, onRender: n2 } = this;
  return n2 == null ? void 0 : n2(), q(`div`, { class: [`${t2}-empty`, this.themeClass], style: this.cssVars }, this.showIcon ? q(`div`, { class: `${t2}-empty__icon` }, e2.icon ? e2.icon() : q(m, { clsPrefix: t2 }, { default: this.mergedRenderIcon })) : null, this.showDescription ? q(`div`, { class: `${t2}-empty__description` }, e2.default ? e2.default() : this.localizedDescription) : null, e2.extra ? q(`div`, { class: `${t2}-empty__extra` }, e2.extra()) : null);
} }), He = J({ name: `NBaseSelectGroupHeader`, props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  let { renderLabelRef: e2, renderOptionRef: t2, labelFieldRef: n2, nodePropsRef: r2 } = X(w);
  return { labelField: n2, nodeProps: r2, renderLabel: e2, renderOption: t2 };
}, render() {
  let { clsPrefix: e2, renderLabel: t2, renderOption: n2, nodeProps: r2, tmNode: { rawNode: i2 } } = this, a2 = r2 == null ? void 0 : r2(i2), o2 = t2 ? t2(i2, false) : $(i2[this.labelField], i2, false), s2 = q(`div`, Object.assign({}, a2, { class: [`${e2}-base-select-group-header`, a2 == null ? void 0 : a2.class] }), o2);
  return i2.render ? i2.render({ node: s2, option: i2 }) : n2 ? n2({ node: s2, option: i2, selected: false }) : s2;
} });
function Ue(e2, t2) {
  return q(V, { name: `fade-in-scale-up-transition` }, { default: () => e2 ? q(m, { clsPrefix: t2, class: `${t2}-base-select-option__check` }, { default: () => q(Le) }) : null });
}
var We = J({ name: `NBaseSelectOption`, props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup(e2) {
  let { valueRef: t2, pendingTmNodeRef: n2, multipleRef: r2, valueSetRef: i2, renderLabelRef: a2, renderOptionRef: o2, labelFieldRef: s2, valueFieldRef: c2, showCheckmarkRef: l2, nodePropsRef: u2, handleOptionClick: d2, handleOptionMouseEnter: f2 } = X(w), p2 = A(() => {
    let { value: t3 } = n2;
    return t3 ? e2.tmNode.key === t3.key : false;
  });
  function m2(t3) {
    let { tmNode: n3 } = e2;
    n3.disabled || d2(t3, n3);
  }
  function h2(t3) {
    let { tmNode: n3 } = e2;
    n3.disabled || f2(t3, n3);
  }
  function g2(t3) {
    let { tmNode: n3 } = e2, { value: r3 } = p2;
    n3.disabled || r3 || f2(t3, n3);
  }
  return { multiple: r2, isGrouped: A(() => {
    let { tmNode: t3 } = e2, { parent: n3 } = t3;
    return n3 && n3.rawNode.type === `group`;
  }), showCheckmark: l2, nodeProps: u2, isPending: p2, isSelected: A(() => {
    let { value: n3 } = t2, { value: a3 } = r2;
    if (n3 === null) return false;
    let o3 = e2.tmNode.rawNode[c2.value];
    if (a3) {
      let { value: e3 } = i2;
      return e3.has(o3);
    } else return n3 === o3;
  }), labelField: s2, renderLabel: a2, renderOption: o2, handleMouseMove: g2, handleMouseEnter: h2, handleClick: m2 };
}, render() {
  let { clsPrefix: e2, tmNode: { rawNode: t2 }, isSelected: n2, isPending: r2, isGrouped: i2, showCheckmark: a2, nodeProps: o2, renderOption: s2, renderLabel: c2, handleClick: l2, handleMouseEnter: u2, handleMouseMove: d2 } = this, f2 = Ue(n2, e2), p2 = c2 ? [c2(t2, n2), a2 && f2] : [$(t2[this.labelField], t2, n2), a2 && f2], m2 = o2 == null ? void 0 : o2(t2), h2 = q(`div`, Object.assign({}, m2, { class: [`${e2}-base-select-option`, t2.class, m2 == null ? void 0 : m2.class, { [`${e2}-base-select-option--disabled`]: t2.disabled, [`${e2}-base-select-option--selected`]: n2, [`${e2}-base-select-option--grouped`]: i2, [`${e2}-base-select-option--pending`]: r2, [`${e2}-base-select-option--show-checkmark`]: a2 }], style: [(m2 == null ? void 0 : m2.style) || ``, t2.style || ``], onClick: Ie([l2, m2 == null ? void 0 : m2.onClick]), onMouseenter: Ie([u2, m2 == null ? void 0 : m2.onMouseenter]), onMousemove: Ie([d2, m2 == null ? void 0 : m2.onMousemove]) }), q(`div`, { class: `${e2}-base-select-option__content` }, p2));
  return t2.render ? t2.render({ node: h2, option: t2, selected: n2 }) : s2 ? s2({ node: h2, option: t2, selected: n2 }) : h2;
} }), Ge = f(`base-select-menu`, `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [f(`scrollbar`, `
 max-height: var(--n-height);
 `), f(`virtual-list`, `
 max-height: var(--n-height);
 `), f(`base-select-option`, `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [i(`content`, `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), f(`base-select-group-header`, `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), f(`base-select-menu-option-wrapper`, `
 position: relative;
 width: 100%;
 `), i(`loading, empty`, `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), i(`loading`, `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), i(`header`, `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), i(`action`, `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), f(`base-select-group-header`, `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), f(`base-select-option`, `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [u(`show-checkmark`, `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), r(`&::before`, `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), r(`&:active`, `
 color: var(--n-option-text-color-pressed);
 `), u(`grouped`, `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), u(`pending`, [r(`&::before`, `
 background-color: var(--n-option-color-pending);
 `)]), u(`selected`, `
 color: var(--n-option-text-color-active);
 `, [r(`&::before`, `
 background-color: var(--n-option-color-active);
 `), u(`pending`, [r(`&::before`, `
 background-color: var(--n-option-color-active-pending);
 `)])]), u(`disabled`, `
 cursor: not-allowed;
 `, [h(`selected`, `
 color: var(--n-option-text-color-disabled);
 `), u(`selected`, `
 opacity: var(--n-option-opacity-disabled);
 `)]), i(`check`, `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [se({ enterScale: `0.5` })])])]), Ke = J({ name: `InternalSelectMenu`, props: Object.assign(Object.assign({}, o.props), { clsPrefix: { type: String, required: true }, scrollable: { type: Boolean, default: true }, treeMate: { type: Object, required: true }, multiple: Boolean, size: { type: String, default: `medium` }, value: { type: [String, Number, Array], default: null }, autoPending: Boolean, virtualScroll: { type: Boolean, default: true }, show: { type: Boolean, default: true }, labelField: { type: String, default: `label` }, valueField: { type: String, default: `value` }, loading: Boolean, focusable: Boolean, renderLabel: Function, renderOption: Function, nodeProps: Function, showCheckmark: { type: Boolean, default: true }, onMousedown: Function, onScroll: Function, onFocus: Function, onBlur: Function, onKeyup: Function, onKeydown: Function, onTabOut: Function, onMouseenter: Function, onMouseleave: Function, onResize: Function, resetMenuOnOptionsChange: { type: Boolean, default: true }, inlineThemeDisabled: Boolean, onToggle: Function }), setup(t2) {
  let { mergedClsPrefixRef: n2, mergedRtlRef: r2 } = g(t2), i2 = c(`InternalSelectMenu`, r2, n2), l2 = o(`InternalSelectMenu`, `-internal-select-menu`, Ge, pe, t2, K(t2, `clsPrefix`)), u2 = H(null), d2 = H(null), f2 = H(null), m2 = Y(() => t2.treeMate.getFlattenedNodes()), h2 = Y(() => be(m2.value)), _2 = H(null);
  function v2() {
    let { treeMate: e2 } = t2, n3 = null, { value: r3 } = t2;
    r3 === null ? n3 = e2.getFirstAvailableNode() : (n3 = t2.multiple ? e2.getNode((r3 || [])[(r3 || []).length - 1]) : e2.getNode(r3), (!n3 || n3.disabled) && (n3 = e2.getFirstAvailableNode())), z2(n3 || null);
  }
  function y2() {
    let { value: e2 } = _2;
    e2 && !t2.treeMate.getNode(e2.key) && (_2.value = null);
  }
  let b2;
  U(() => t2.show, (e2) => {
    e2 ? b2 = U(() => t2.treeMate, () => {
      t2.resetMenuOnOptionsChange ? (t2.autoPending ? v2() : y2(), re(te2)) : y2();
    }, { immediate: true }) : b2 == null ? void 0 : b2();
  }, { immediate: true }), ie(() => {
    b2 == null ? void 0 : b2();
  });
  let x2 = Y(() => e(l2.value.self[a(`optionHeight`, t2.size)])), S2 = Y(() => p(l2.value.self[a(`padding`, t2.size)])), C2 = Y(() => t2.multiple && Array.isArray(t2.value) ? new Set(t2.value) : /* @__PURE__ */ new Set()), T2 = Y(() => {
    let e2 = m2.value;
    return e2 && e2.length === 0;
  });
  function E2(e2) {
    let { onToggle: n3 } = t2;
    n3 && n3(e2);
  }
  function D2(e2) {
    let { onScroll: n3 } = t2;
    n3 && n3(e2);
  }
  function k2(e2) {
    var t3;
    (t3 = f2.value) == null || t3.sync(), D2(e2);
  }
  function A2() {
    var e2;
    (e2 = f2.value) == null || e2.sync();
  }
  function ee2() {
    let { value: e2 } = _2;
    return e2 || null;
  }
  function j2(e2, t3) {
    t3.disabled || z2(t3, false);
  }
  function M2(e2, t3) {
    t3.disabled || E2(t3);
  }
  function N2(e2) {
    var n3;
    oe(e2, `action`) || (n3 = t2.onKeyup) == null || n3.call(t2, e2);
  }
  function P2(e2) {
    var n3;
    oe(e2, `action`) || (n3 = t2.onKeydown) == null || n3.call(t2, e2);
  }
  function F2(e2) {
    var n3;
    (n3 = t2.onMousedown) == null || n3.call(t2, e2), !t2.focusable && e2.preventDefault();
  }
  function I2() {
    let { value: e2 } = _2;
    e2 && z2(e2.getNext({ loop: true }), true);
  }
  function L2() {
    let { value: e2 } = _2;
    e2 && z2(e2.getPrev({ loop: true }), true);
  }
  function z2(e2, t3 = false) {
    _2.value = e2, t3 && te2();
  }
  function te2() {
    var e2, n3;
    let r3 = _2.value;
    if (!r3) return;
    let i3 = h2.value(r3.key);
    i3 !== null && (t2.virtualScroll ? (e2 = d2.value) == null || e2.scrollTo({ index: i3 }) : (n3 = f2.value) == null || n3.scrollTo({ index: i3, elSize: x2.value }));
  }
  function ne2(e2) {
    var _a;
    var n3;
    ((_a = u2.value) == null ? void 0 : _a.contains(e2.target)) && ((n3 = t2.onFocus) == null || n3.call(t2, e2));
  }
  function V2(e2) {
    var _a;
    var n3;
    ((_a = u2.value) == null ? void 0 : _a.contains(e2.relatedTarget)) || (n3 = t2.onBlur) == null || n3.call(t2, e2);
  }
  R(w, { handleOptionMouseEnter: j2, handleOptionClick: M2, valueSetRef: C2, pendingTmNodeRef: _2, nodePropsRef: K(t2, `nodeProps`), showCheckmarkRef: K(t2, `showCheckmark`), multipleRef: K(t2, `multiple`), valueRef: K(t2, `value`), renderLabelRef: K(t2, `renderLabel`), renderOptionRef: K(t2, `renderOption`), labelFieldRef: K(t2, `labelField`), valueFieldRef: K(t2, `valueField`) }), R(O, u2), B(() => {
    let { value: e2 } = f2;
    e2 && e2.sync();
  });
  let W2 = Y(() => {
    let { size: e2 } = t2, { common: { cubicBezierEaseInOut: n3 }, self: { height: r3, borderRadius: i3, color: o2, groupHeaderTextColor: s2, actionDividerColor: c2, optionTextColorPressed: u3, optionTextColor: d3, optionTextColorDisabled: f3, optionTextColorActive: m3, optionOpacityDisabled: h3, optionCheckColor: g2, actionTextColor: _3, optionColorPending: v3, optionColorActive: y3, loadingColor: b3, loadingSize: x3, optionColorActivePending: S3, [a(`optionFontSize`, e2)]: C3, [a(`optionHeight`, e2)]: w2, [a(`optionPadding`, e2)]: T3 } } = l2.value;
    return { "--n-height": r3, "--n-action-divider-color": c2, "--n-action-text-color": _3, "--n-bezier": n3, "--n-border-radius": i3, "--n-color": o2, "--n-option-font-size": C3, "--n-group-header-text-color": s2, "--n-option-check-color": g2, "--n-option-color-pending": v3, "--n-option-color-active": y3, "--n-option-color-active-pending": S3, "--n-option-height": w2, "--n-option-opacity-disabled": h3, "--n-option-text-color": d3, "--n-option-text-color-active": m3, "--n-option-text-color-disabled": f3, "--n-option-text-color-pressed": u3, "--n-option-padding": T3, "--n-option-padding-left": p(T3, `left`), "--n-option-padding-right": p(T3, `right`), "--n-loading-color": b3, "--n-loading-size": x3 };
  }), { inlineThemeDisabled: G2 } = t2, q2 = G2 ? s(`internal-select-menu`, Y(() => t2.size[0]), W2, t2) : void 0, J2 = { selfRef: u2, next: I2, prev: L2, getPendingTmNode: ee2 };
  return Fe(u2, t2.onResize), Object.assign({ mergedTheme: l2, mergedClsPrefix: n2, rtlEnabled: i2, virtualListRef: d2, scrollbarRef: f2, itemSize: x2, padding: S2, flattenedNodes: m2, empty: T2, virtualListContainer() {
    let { value: e2 } = d2;
    return e2 == null ? void 0 : e2.listElRef;
  }, virtualListContent() {
    let { value: e2 } = d2;
    return e2 == null ? void 0 : e2.itemsElRef;
  }, doScroll: D2, handleFocusin: ne2, handleFocusout: V2, handleKeyUp: N2, handleKeyDown: P2, handleMouseDown: F2, handleVirtualListResize: A2, handleVirtualListScroll: k2, cssVars: G2 ? void 0 : W2, themeClass: q2 == null ? void 0 : q2.themeClass, onRender: q2 == null ? void 0 : q2.onRender }, J2);
}, render() {
  let { $slots: e2, virtualScroll: t2, clsPrefix: r2, mergedTheme: i2, themeClass: a2, onRender: o2 } = this;
  return o2 == null ? void 0 : o2(), q(`div`, { ref: `selfRef`, tabindex: this.focusable ? 0 : -1, class: [`${r2}-base-select-menu`, this.rtlEnabled && `${r2}-base-select-menu--rtl`, a2, this.multiple && `${r2}-base-select-menu--multiple`], style: this.cssVars, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onKeyup: this.handleKeyUp, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave }, _(e2.header, (e3) => e3 && q(`div`, { class: `${r2}-base-select-menu__header`, "data-header": true, key: `header` }, e3)), this.loading ? q(`div`, { class: `${r2}-base-select-menu__loading` }, q(de, { clsPrefix: r2, strokeWidth: 20 })) : this.empty ? q(`div`, { class: `${r2}-base-select-menu__empty`, "data-empty": true }, n(e2.empty, () => [q(Ve, { theme: i2.peers.Empty, themeOverrides: i2.peerOverrides.Empty, size: this.size })])) : q(I, { ref: `scrollbarRef`, theme: i2.peers.Scrollbar, themeOverrides: i2.peerOverrides.Scrollbar, scrollable: this.scrollable, container: t2 ? this.virtualListContainer : void 0, content: t2 ? this.virtualListContent : void 0, onScroll: t2 ? void 0 : this.doScroll }, { default: () => t2 ? q(Pe, { ref: `virtualListRef`, class: `${r2}-virtual-list`, items: this.flattenedNodes, itemSize: this.itemSize, showScrollbar: false, paddingTop: this.padding.top, paddingBottom: this.padding.bottom, onResize: this.handleVirtualListResize, onScroll: this.handleVirtualListScroll, itemResizable: true }, { default: ({ item: e3 }) => e3.isGroup ? q(He, { key: e3.key, clsPrefix: r2, tmNode: e3 }) : e3.ignored ? null : q(We, { clsPrefix: r2, key: e3.key, tmNode: e3 }) }) : q(`div`, { class: `${r2}-base-select-menu-option-wrapper`, style: { paddingTop: this.padding.top, paddingBottom: this.padding.bottom } }, this.flattenedNodes.map((e3) => e3.isGroup ? q(He, { key: e3.key, clsPrefix: r2, tmNode: e3 }) : q(We, { clsPrefix: r2, key: e3.key, tmNode: e3 }))) }), _(e2.action, (e3) => e3 && [q(`div`, { class: `${r2}-base-select-menu__action`, "data-action": true, key: `action` }, e3), q(ze, { onFocus: this.onTabOut, key: `focus-detector` })]));
} }), qe = r([f(`base-selection`, `
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
 `, [f(`base-loading`, `
 color: var(--n-loading-color);
 `), f(`base-selection-tags`, `min-height: var(--n-height);`), i(`border, state-border`, `
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
 `), i(`state-border`, `
 z-index: 1;
 border-color: #0000;
 `), f(`base-suffix`, `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [i(`arrow`, `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), f(`base-selection-overlay`, `
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
 `, [i(`wrapper`, `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), f(`base-selection-placeholder`, `
 color: var(--n-placeholder-color);
 `, [i(`inner`, `
 max-width: 100%;
 overflow: hidden;
 `)]), f(`base-selection-tags`, `
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
 `), f(`base-selection-label`, `
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
 `, [f(`base-selection-input`, `
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
 `, [i(`content`, `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), i(`render-label`, `
 color: var(--n-text-color);
 `)]), h(`disabled`, [r(`&:hover`, [i(`state-border`, `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), u(`focus`, [i(`state-border`, `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), u(`active`, [i(`state-border`, `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), f(`base-selection-label`, `background-color: var(--n-color-active);`), f(`base-selection-tags`, `background-color: var(--n-color-active);`)])]), u(`disabled`, `cursor: not-allowed;`, [i(`arrow`, `
 color: var(--n-arrow-color-disabled);
 `), f(`base-selection-label`, `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [f(`base-selection-input`, `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), i(`render-label`, `
 color: var(--n-text-color-disabled);
 `)]), f(`base-selection-tags`, `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), f(`base-selection-placeholder`, `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), f(`base-selection-input-tag`, `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [i(`input`, `
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
 `), i(`mirror`, `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), [`warning`, `error`].map((e2) => u(`${e2}-status`, [i(`state-border`, `border: var(--n-border-${e2});`), h(`disabled`, [r(`&:hover`, [i(`state-border`, `
 box-shadow: var(--n-box-shadow-hover-${e2});
 border: var(--n-border-hover-${e2});
 `)]), u(`active`, [i(`state-border`, `
 box-shadow: var(--n-box-shadow-active-${e2});
 border: var(--n-border-active-${e2});
 `), f(`base-selection-label`, `background-color: var(--n-color-active-${e2});`), f(`base-selection-tags`, `background-color: var(--n-color-active-${e2});`)]), u(`focus`, [i(`state-border`, `
 box-shadow: var(--n-box-shadow-focus-${e2});
 border: var(--n-border-focus-${e2});
 `)])])]))]), f(`base-selection-popover`, `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), f(`base-selection-tag-wrapper`, `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [r(`&:last-child`, `padding-right: 0;`), f(`tag`, `
 font-size: 14px;
 max-width: 100%;
 `, [i(`content`, `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), Je = J({ name: `InternalSelection`, props: Object.assign(Object.assign({}, o.props), { clsPrefix: { type: String, required: true }, bordered: { type: Boolean, default: void 0 }, active: Boolean, pattern: { type: String, default: `` }, placeholder: String, selectedOption: { type: Object, default: null }, selectedOptions: { type: Array, default: null }, labelField: { type: String, default: `label` }, valueField: { type: String, default: `value` }, multiple: Boolean, filterable: Boolean, clearable: Boolean, disabled: Boolean, size: { type: String, default: `medium` }, loading: Boolean, autofocus: Boolean, showArrow: { type: Boolean, default: true }, inputProps: Object, focused: Boolean, renderTag: Function, onKeydown: Function, onClick: Function, onBlur: Function, onFocus: Function, onDeleteOption: Function, maxTagCount: [String, Number], ellipsisTagPopoverProps: Object, onClear: Function, onPatternInput: Function, onPatternFocus: Function, onPatternBlur: Function, renderLabel: Function, status: String, inlineThemeDisabled: Boolean, ignoreComposition: { type: Boolean, default: true }, onResize: Function }), setup(e2) {
  let { mergedClsPrefixRef: t2, mergedRtlRef: n2 } = g(e2), r2 = c(`InternalSelection`, n2, t2), i2 = H(null), l2 = H(null), u2 = H(null), d2 = H(null), f2 = H(null), m2 = H(null), h2 = H(null), _2 = H(null), v2 = H(null), y2 = H(null), b2 = H(false), x2 = H(false), S2 = H(false), C2 = o(`InternalSelection`, `-internal-selection`, qe, ge, e2, K(e2, `clsPrefix`)), w2 = Y(() => e2.clearable && !e2.disabled && (S2.value || e2.active)), T2 = Y(() => e2.selectedOption ? e2.renderTag ? e2.renderTag({ option: e2.selectedOption, handleClose: () => {
  } }) : e2.renderLabel ? e2.renderLabel(e2.selectedOption, true) : $(e2.selectedOption[e2.labelField], e2.selectedOption, true) : e2.placeholder), E2 = Y(() => {
    let t3 = e2.selectedOption;
    if (t3) return t3[e2.labelField];
  }), D2 = Y(() => e2.multiple ? !!(Array.isArray(e2.selectedOptions) && e2.selectedOptions.length) : e2.selectedOption !== null);
  function O2() {
    var t3;
    let { value: n3 } = i2;
    if (n3) {
      let { value: r3 } = l2;
      r3 && (r3.style.width = `${n3.offsetWidth}px`, e2.maxTagCount !== `responsive` && ((t3 = v2.value) == null || t3.sync({ showAllItemsBeforeCalculate: false })));
    }
  }
  function k2() {
    let { value: e3 } = y2;
    e3 && (e3.style.display = `none`);
  }
  function A2() {
    let { value: e3 } = y2;
    e3 && (e3.style.display = `inline-block`);
  }
  U(K(e2, `active`), (e3) => {
    e3 || k2();
  }), U(K(e2, `pattern`), () => {
    e2.multiple && re(O2);
  });
  function ee2(t3) {
    let { onFocus: n3 } = e2;
    n3 && n3(t3);
  }
  function j2(t3) {
    let { onBlur: n3 } = e2;
    n3 && n3(t3);
  }
  function M2(t3) {
    let { onDeleteOption: n3 } = e2;
    n3 && n3(t3);
  }
  function N2(t3) {
    let { onClear: n3 } = e2;
    n3 && n3(t3);
  }
  function P2(t3) {
    let { onPatternInput: n3 } = e2;
    n3 && n3(t3);
  }
  function F2(e3) {
    var _a;
    (!e3.relatedTarget || !((_a = u2.value) == null ? void 0 : _a.contains(e3.relatedTarget))) && ee2(e3);
  }
  function I2(e3) {
    var _a;
    ((_a = u2.value) == null ? void 0 : _a.contains(e3.relatedTarget)) || j2(e3);
  }
  function L2(e3) {
    N2(e3);
  }
  function R2() {
    S2.value = true;
  }
  function z2() {
    S2.value = false;
  }
  function te2(t3) {
    !e2.active || !e2.filterable || t3.target !== l2.value && t3.preventDefault();
  }
  function ne2(e3) {
    M2(e3);
  }
  let V2 = H(false);
  function ie2(t3) {
    if (t3.key === `Backspace` && !V2.value && !e2.pattern.length) {
      let { selectedOptions: t4 } = e2;
      (t4 == null ? void 0 : t4.length) && ne2(t4[t4.length - 1]);
    }
  }
  let G2 = null;
  function q2(t3) {
    let { value: n3 } = i2;
    n3 && (n3.textContent = t3.target.value, O2()), e2.ignoreComposition && V2.value ? G2 = t3 : P2(t3);
  }
  function J2() {
    V2.value = true;
  }
  function ae2() {
    V2.value = false, e2.ignoreComposition && P2(G2), G2 = null;
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
    if (e2.filterable) x2.value = false, (t3 = m2.value) == null || t3.blur(), (n3 = l2.value) == null || n3.blur();
    else if (e2.multiple) {
      let { value: e3 } = d2;
      e3 == null ? void 0 : e3.blur();
    } else {
      let { value: e3 } = f2;
      e3 == null ? void 0 : e3.blur();
    }
  }
  function se2() {
    var t3, n3, r3;
    e2.filterable ? (x2.value = false, (t3 = m2.value) == null || t3.focus()) : e2.multiple ? (n3 = d2.value) == null || n3.focus() : (r3 = f2.value) == null || r3.focus();
  }
  function Q2() {
    let { value: e3 } = l2;
    e3 && (A2(), e3.focus());
  }
  function ce2() {
    let { value: e3 } = l2;
    e3 && e3.blur();
  }
  function le2(e3) {
    let { value: t3 } = h2;
    t3 && t3.setTextContent(`+${e3}`);
  }
  function ue2() {
    let { value: e3 } = _2;
    return e3;
  }
  function de2() {
    return l2.value;
  }
  let fe2 = null;
  function pe2() {
    fe2 !== null && window.clearTimeout(fe2);
  }
  function me2() {
    e2.active || (pe2(), fe2 = window.setTimeout(() => {
      D2.value && (b2.value = true);
    }, 100));
  }
  function he2() {
    pe2();
  }
  function _e2(e3) {
    e3 || (pe2(), b2.value = false);
  }
  U(D2, (e3) => {
    e3 || (b2.value = false);
  }), B(() => {
    W(() => {
      let t3 = m2.value;
      t3 && (e2.disabled ? t3.removeAttribute(`tabindex`) : t3.tabIndex = x2.value ? -1 : 0);
    });
  }), Fe(u2, e2.onResize);
  let { inlineThemeDisabled: ve2 } = e2, ye2 = Y(() => {
    let { size: t3 } = e2, { common: { cubicBezierEaseInOut: n3 }, self: { fontWeight: r3, borderRadius: i3, color: o2, placeholderColor: s2, textColor: c2, paddingSingle: l3, paddingMultiple: u3, caretColor: d3, colorDisabled: f3, textColorDisabled: m3, placeholderColorDisabled: h3, colorActive: g2, boxShadowFocus: _3, boxShadowActive: v3, boxShadowHover: y3, border: b3, borderFocus: x3, borderHover: S3, borderActive: w3, arrowColor: T3, arrowColorDisabled: E3, loadingColor: D3, colorActiveWarning: O3, boxShadowFocusWarning: k3, boxShadowActiveWarning: A3, boxShadowHoverWarning: ee3, borderWarning: j3, borderFocusWarning: M3, borderHoverWarning: N3, borderActiveWarning: P3, colorActiveError: F3, boxShadowFocusError: I3, boxShadowActiveError: L3, boxShadowHoverError: R3, borderError: z3, borderFocusError: te3, borderHoverError: B2, borderActiveError: ne3, clearColor: V3, clearColorHover: H2, clearColorPressed: U2, clearSize: W2, arrowSize: re2, [a(`height`, t3)]: ie3, [a(`fontSize`, t3)]: G3 } } = C2.value, K2 = p(l3), q3 = p(u3);
    return { "--n-bezier": n3, "--n-border": b3, "--n-border-active": w3, "--n-border-focus": x3, "--n-border-hover": S3, "--n-border-radius": i3, "--n-box-shadow-active": v3, "--n-box-shadow-focus": _3, "--n-box-shadow-hover": y3, "--n-caret-color": d3, "--n-color": o2, "--n-color-active": g2, "--n-color-disabled": f3, "--n-font-size": G3, "--n-height": ie3, "--n-padding-single-top": K2.top, "--n-padding-multiple-top": q3.top, "--n-padding-single-right": K2.right, "--n-padding-multiple-right": q3.right, "--n-padding-single-left": K2.left, "--n-padding-multiple-left": q3.left, "--n-padding-single-bottom": K2.bottom, "--n-padding-multiple-bottom": q3.bottom, "--n-placeholder-color": s2, "--n-placeholder-color-disabled": h3, "--n-text-color": c2, "--n-text-color-disabled": m3, "--n-arrow-color": T3, "--n-arrow-color-disabled": E3, "--n-loading-color": D3, "--n-color-active-warning": O3, "--n-box-shadow-focus-warning": k3, "--n-box-shadow-active-warning": A3, "--n-box-shadow-hover-warning": ee3, "--n-border-warning": j3, "--n-border-focus-warning": M3, "--n-border-hover-warning": N3, "--n-border-active-warning": P3, "--n-color-active-error": F3, "--n-box-shadow-focus-error": I3, "--n-box-shadow-active-error": L3, "--n-box-shadow-hover-error": R3, "--n-border-error": z3, "--n-border-focus-error": te3, "--n-border-hover-error": B2, "--n-border-active-error": ne3, "--n-clear-size": W2, "--n-clear-color": V3, "--n-clear-color-hover": H2, "--n-clear-color-pressed": U2, "--n-arrow-size": re2, "--n-font-weight": r3 };
  }), be2 = ve2 ? s(`internal-selection`, Y(() => e2.size[0]), ye2, e2) : void 0;
  return { mergedTheme: C2, mergedClearable: w2, mergedClsPrefix: t2, rtlEnabled: r2, patternInputFocused: x2, filterablePlaceholder: T2, label: E2, selected: D2, showTagsPanel: b2, isComposing: V2, counterRef: h2, counterWrapperRef: _2, patternInputMirrorRef: i2, patternInputRef: l2, selfRef: u2, multipleElRef: d2, singleElRef: f2, patternInputWrapperRef: m2, overflowRef: v2, inputTagElRef: y2, handleMouseDown: te2, handleFocusin: F2, handleClear: L2, handleMouseEnter: R2, handleMouseLeave: z2, handleDeleteOption: ne2, handlePatternKeyDown: ie2, handlePatternInputInput: q2, handlePatternInputBlur: Z2, handlePatternInputFocus: X2, handleMouseEnterCounter: me2, handleMouseLeaveCounter: he2, handleFocusout: I2, handleCompositionEnd: ae2, handleCompositionStart: J2, onPopoverUpdateShow: _e2, focus: se2, focusInput: Q2, blur: oe2, blurInput: ce2, updateCounter: le2, getCounter: ue2, getTail: de2, renderLabel: e2.renderLabel, cssVars: ve2 ? void 0 : ye2, themeClass: be2 == null ? void 0 : be2.themeClass, onRender: be2 == null ? void 0 : be2.onRender };
}, render() {
  let { status: e2, multiple: t2, size: n2, disabled: r2, filterable: i2, maxTagCount: a2, bordered: o2, clsPrefix: s2, ellipsisTagPopoverProps: c2, onRender: l2, renderTag: u2, renderLabel: d2 } = this;
  l2 == null ? void 0 : l2();
  let f2 = a2 === `responsive`, p2 = typeof a2 == `number`, m2 = f2 || p2, h2 = q(M, null, { default: () => q(Se, { clsPrefix: s2, loading: this.loading, showArrow: this.showArrow, showClear: this.mergedClearable && this.selected, onClear: this.handleClear }, { default: () => {
    var _a;
    var e3;
    return (_a = (e3 = this.$slots).arrow) == null ? void 0 : _a.call(e3);
  } }) }), g2;
  if (t2) {
    let { labelField: e3 } = this, t3 = (t4) => q(`div`, { class: `${s2}-base-selection-tag-wrapper`, key: t4.value }, u2 ? u2({ option: t4, handleClose: () => {
      this.handleDeleteOption(t4);
    } }) : q(Ce, { size: n2, closable: !t4.disabled, disabled: r2, onClose: () => {
      this.handleDeleteOption(t4);
    }, internalCloseIsButtonTag: false, internalCloseFocusable: false }, { default: () => d2 ? d2(t4, true) : $(t4[e3], t4, true) })), o3 = () => (p2 ? this.selectedOptions.slice(0, a2) : this.selectedOptions).map(t3), l3 = i2 ? q(`div`, { class: `${s2}-base-selection-input-tag`, ref: `inputTagElRef`, key: `__input-tag__` }, q(`input`, Object.assign({}, this.inputProps, { ref: `patternInputRef`, tabindex: -1, disabled: r2, value: this.pattern, autofocus: this.autofocus, class: `${s2}-base-selection-input-tag__input`, onBlur: this.handlePatternInputBlur, onFocus: this.handlePatternInputFocus, onKeydown: this.handlePatternKeyDown, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })), q(`span`, { ref: `patternInputMirrorRef`, class: `${s2}-base-selection-input-tag__mirror` }, this.pattern)) : null, _2 = f2 ? () => q(`div`, { class: `${s2}-base-selection-tag-wrapper`, ref: `counterWrapperRef` }, q(Ce, { size: n2, ref: `counterRef`, onMouseenter: this.handleMouseEnterCounter, onMouseleave: this.handleMouseLeaveCounter, disabled: r2 })) : void 0, v2;
    if (p2) {
      let e4 = this.selectedOptions.length - a2;
      e4 > 0 && (v2 = q(`div`, { class: `${s2}-base-selection-tag-wrapper`, key: `__counter__` }, q(Ce, { size: n2, ref: `counterRef`, onMouseenter: this.handleMouseEnterCounter, disabled: r2 }, { default: () => `+${e4}` })));
    }
    let y2 = f2 ? i2 ? q(ce, { ref: `overflowRef`, updateCounter: this.updateCounter, getCounter: this.getCounter, getTail: this.getTail, style: { width: `100%`, display: `flex`, overflow: `hidden` } }, { default: o3, counter: _2, tail: () => l3 }) : q(ce, { ref: `overflowRef`, updateCounter: this.updateCounter, getCounter: this.getCounter, style: { width: `100%`, display: `flex`, overflow: `hidden` } }, { default: o3, counter: _2 }) : p2 && v2 ? o3().concat(v2) : o3(), b2 = m2 ? () => q(`div`, { class: `${s2}-base-selection-popover` }, f2 ? o3() : this.selectedOptions.map(t3)) : void 0, x2 = m2 ? Object.assign({ show: this.showTagsPanel, trigger: `hover`, overlap: true, placement: `top`, width: `trigger`, onUpdateShow: this.onPopoverUpdateShow, theme: this.mergedTheme.peers.Popover, themeOverrides: this.mergedTheme.peerOverrides.Popover }, c2) : null, S2 = !this.selected && (!this.active || !this.pattern && !this.isComposing) ? q(`div`, { class: `${s2}-base-selection-placeholder ${s2}-base-selection-overlay` }, q(`div`, { class: `${s2}-base-selection-placeholder__inner` }, this.placeholder)) : null, C2 = i2 ? q(`div`, { ref: `patternInputWrapperRef`, class: `${s2}-base-selection-tags` }, y2, f2 ? null : l3, h2) : q(`div`, { ref: `multipleElRef`, class: `${s2}-base-selection-tags`, tabindex: r2 ? void 0 : 0 }, y2, h2);
    g2 = q(ae, null, m2 ? q(ee, Object.assign({}, x2, { scrollable: true, style: `max-height: calc(var(--v-target-height) * 6.6);` }), { trigger: () => C2, default: b2 }) : C2, S2);
  } else if (i2) {
    let e3 = this.pattern || this.isComposing, t3 = this.active ? !e3 : !this.selected, n3 = this.active ? false : this.selected;
    g2 = q(`div`, { ref: `patternInputWrapperRef`, class: `${s2}-base-selection-label`, title: this.patternInputFocused ? void 0 : Q(this.label) }, q(`input`, Object.assign({}, this.inputProps, { ref: `patternInputRef`, class: `${s2}-base-selection-input`, value: this.active ? this.pattern : ``, placeholder: ``, readonly: r2, disabled: r2, tabindex: -1, autofocus: this.autofocus, onFocus: this.handlePatternInputFocus, onBlur: this.handlePatternInputBlur, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })), n3 ? q(`div`, { class: `${s2}-base-selection-label__render-label ${s2}-base-selection-overlay`, key: `input` }, q(`div`, { class: `${s2}-base-selection-overlay__wrapper` }, u2 ? u2({ option: this.selectedOption, handleClose: () => {
    } }) : d2 ? d2(this.selectedOption, true) : $(this.label, this.selectedOption, true))) : null, t3 ? q(`div`, { class: `${s2}-base-selection-placeholder ${s2}-base-selection-overlay`, key: `placeholder` }, q(`div`, { class: `${s2}-base-selection-overlay__wrapper` }, this.filterablePlaceholder)) : null, h2);
  } else g2 = q(`div`, { ref: `singleElRef`, class: `${s2}-base-selection-label`, tabindex: this.disabled ? void 0 : 0 }, this.label === void 0 ? q(`div`, { class: `${s2}-base-selection-placeholder ${s2}-base-selection-overlay`, key: `placeholder` }, q(`div`, { class: `${s2}-base-selection-placeholder__inner` }, this.placeholder)) : q(`div`, { class: `${s2}-base-selection-input`, title: Q(this.label), key: `input` }, q(`div`, { class: `${s2}-base-selection-input__content` }, u2 ? u2({ option: this.selectedOption, handleClose: () => {
  } }) : d2 ? d2(this.selectedOption, true) : $(this.label, this.selectedOption, true))), h2);
  return q(`div`, { ref: `selfRef`, class: [`${s2}-base-selection`, this.rtlEnabled && `${s2}-base-selection--rtl`, this.themeClass, e2 && `${s2}-base-selection--${e2}-status`, { [`${s2}-base-selection--active`]: this.active, [`${s2}-base-selection--selected`]: this.selected || this.active && this.pattern, [`${s2}-base-selection--disabled`]: this.disabled, [`${s2}-base-selection--multiple`]: this.multiple, [`${s2}-base-selection--focus`]: this.focused }], style: this.cssVars, onClick: this.onClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onKeydown: this.onKeydown, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onMousedown: this.handleMouseDown }, g2, o2 ? q(`div`, { class: `${s2}-base-selection__border` }) : null, o2 ? q(`div`, { class: `${s2}-base-selection__state-border` }) : null);
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
var tt = r([f(`select`, `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), f(`select-menu`, `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [se({ originalTransition: `background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)` })])]), nt = J({ name: `Select`, props: Object.assign(Object.assign({}, o.props), { to: T.propTo, bordered: { type: Boolean, default: void 0 }, clearable: Boolean, clearFilterAfterSelect: { type: Boolean, default: true }, options: { type: Array, default: () => [] }, defaultValue: { type: [String, Number, Array], default: null }, keyboard: { type: Boolean, default: true }, value: [String, Number, Array], placeholder: String, menuProps: Object, multiple: Boolean, size: String, menuSize: { type: String }, filterable: Boolean, disabled: { type: Boolean, default: void 0 }, remote: Boolean, loading: Boolean, filter: Function, placement: { type: String, default: `bottom-start` }, widthMode: { type: String, default: `trigger` }, tag: Boolean, onCreate: Function, fallbackOption: { type: [Function, Boolean], default: void 0 }, show: { type: Boolean, default: void 0 }, showArrow: { type: Boolean, default: true }, maxTagCount: [Number, String], ellipsisTagPopoverProps: Object, consistentMenuWidth: { type: Boolean, default: true }, virtualScroll: { type: Boolean, default: true }, labelField: { type: String, default: `label` }, valueField: { type: String, default: `value` }, childrenField: { type: String, default: `children` }, renderLabel: Function, renderOption: Function, renderTag: Function, "onUpdate:value": [Function, Array], inputProps: Object, nodeProps: Function, ignoreComposition: { type: Boolean, default: true }, showOnFocus: Boolean, onUpdateValue: [Function, Array], onBlur: [Function, Array], onClear: [Function, Array], onFocus: [Function, Array], onScroll: [Function, Array], onSearch: [Function, Array], onUpdateShow: [Function, Array], "onUpdate:show": [Function, Array], displayDirective: { type: String, default: `show` }, resetMenuOnOptionsChange: { type: Boolean, default: true }, status: String, showCheckmark: { type: Boolean, default: true }, onChange: [Function, Array], items: Array }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: n2, mergedBorderedRef: r2, namespaceRef: i2, inlineThemeDisabled: a2 } = g(e2), c2 = o(`Select`, `-select`, tt, _e, e2, n2), l2 = H(e2.defaultValue), u2 = C(K(e2, `value`), l2), d2 = H(false), f2 = H(``), p2 = D(e2, [`items`, `options`]), m2 = H([]), h2 = H([]), _2 = Y(() => h2.value.concat(m2.value).concat(p2.value)), v2 = Y(() => {
    let { filter: t2 } = e2;
    if (t2) return t2;
    let { labelField: n3, valueField: r3 } = e2;
    return (e3, t3) => {
      if (!t3) return false;
      let i3 = t3[n3];
      if (typeof i3 == `string`) return Ze(e3, i3);
      let a3 = t3[r3];
      return typeof a3 == `string` ? Ze(e3, a3) : typeof a3 == `number` ? Ze(e3, String(a3)) : false;
    };
  }), y2 = Y(() => {
    if (e2.remote) return p2.value;
    {
      let { value: t2 } = _2, { value: n3 } = f2;
      return !n3.length || !e2.filterable ? t2 : $e(t2, v2.value, n3, e2.childrenField);
    }
  }), b2 = Y(() => {
    let { valueField: t2, childrenField: n3 } = e2, r3 = Qe(t2, n3);
    return fe(y2.value, r3);
  }), x2 = Y(() => et(_2.value, e2.valueField, e2.childrenField)), S2 = H(false), w2 = C(K(e2, `show`), S2), E2 = H(null), O2 = H(null), A2 = H(null), { localeRef: ee2 } = xe(`Select`), M2 = Y(() => e2.placeholder ?? ee2.value.placeholder), N2 = [], P2 = H(/* @__PURE__ */ new Map()), F2 = Y(() => {
    let { fallbackOption: t2 } = e2;
    if (t2 === void 0) {
      let { labelField: t3, valueField: n3 } = e2;
      return (e3) => ({ [t3]: String(e3), [n3]: e3 });
    }
    return t2 === false ? false : (e3) => Object.assign(t2(e3), { value: e3 });
  });
  function I2(t2) {
    let n3 = e2.remote, { value: r3 } = P2, { value: i3 } = x2, { value: a3 } = F2, o2 = [];
    return t2.forEach((e3) => {
      if (i3.has(e3)) o2.push(i3.get(e3));
      else if (n3 && r3.has(e3)) o2.push(r3.get(e3));
      else if (a3) {
        let t3 = a3(e3);
        t3 && o2.push(t3);
      }
    }), o2;
  }
  let L2 = Y(() => {
    if (e2.multiple) {
      let { value: e3 } = u2;
      return Array.isArray(e3) ? I2(e3) : [];
    }
    return null;
  }), R2 = Y(() => {
    let { value: t2 } = u2;
    return !e2.multiple && !Array.isArray(t2) ? t2 === null ? null : I2([t2])[0] || null : null;
  }), z2 = ue(e2), { mergedSizeRef: te2, mergedDisabledRef: B2, mergedStatusRef: ne2 } = z2;
  function V2(n3, r3) {
    let { onChange: i3, "onUpdate:value": a3, onUpdateValue: o2 } = e2, { nTriggerFormChange: s2, nTriggerFormInput: c3 } = z2;
    i3 && t(i3, n3, r3), o2 && t(o2, n3, r3), a3 && t(a3, n3, r3), l2.value = n3, s2(), c3();
  }
  function W2(n3) {
    let { onBlur: r3 } = e2, { nTriggerFormBlur: i3 } = z2;
    r3 && t(r3, n3), i3();
  }
  function re2() {
    let { onClear: n3 } = e2;
    n3 && t(n3);
  }
  function ie2(n3) {
    let { onFocus: r3, showOnFocus: i3 } = e2, { nTriggerFormFocus: a3 } = z2;
    r3 && t(r3, n3), a3(), i3 && X2();
  }
  function G2(n3) {
    let { onSearch: r3 } = e2;
    r3 && t(r3, n3);
  }
  function q2(n3) {
    let { onScroll: r3 } = e2;
    r3 && t(r3, n3);
  }
  function J2() {
    var t2;
    let { remote: n3, multiple: r3 } = e2;
    if (n3) {
      let { value: n4 } = P2;
      if (r3) {
        let { valueField: r4 } = e2;
        (t2 = L2.value) == null || t2.forEach((e3) => {
          n4.set(e3[r4], e3);
        });
      } else {
        let t3 = R2.value;
        t3 && n4.set(t3[e2.valueField], t3);
      }
    }
  }
  function ae2(n3) {
    let { onUpdateShow: r3, "onUpdate:show": i3 } = e2;
    r3 && t(r3, n3), i3 && t(i3, n3), S2.value = n3;
  }
  function X2() {
    B2.value || (ae2(true), S2.value = true, e2.filterable && je2());
  }
  function Z2() {
    ae2(false);
  }
  function se2() {
    f2.value = ``, h2.value = N2;
  }
  let Q2 = H(false);
  function ce2() {
    e2.filterable && (Q2.value = true);
  }
  function le2() {
    e2.filterable && (Q2.value = false, w2.value || se2());
  }
  function $2() {
    B2.value || (w2.value ? e2.filterable ? je2() : Z2() : X2());
  }
  function de2(e3) {
    var _a, _b;
    ((_b = (_a = A2.value) == null ? void 0 : _a.selfRef) == null ? void 0 : _b.contains(e3.relatedTarget)) || (d2.value = false, W2(e3), Z2());
  }
  function pe2(e3) {
    ie2(e3), d2.value = true;
  }
  function me2() {
    d2.value = true;
  }
  function ge2(e3) {
    var _a;
    ((_a = E2.value) == null ? void 0 : _a.$el.contains(e3.relatedTarget)) || (d2.value = false, W2(e3), Z2());
  }
  function ve2() {
    var e3;
    (e3 = E2.value) == null || e3.focus(), Z2();
  }
  function ye2(e3) {
    var _a;
    w2.value && (((_a = E2.value) == null ? void 0 : _a.$el.contains(j(e3))) || Z2());
  }
  function be2(t2) {
    if (!Array.isArray(t2)) return [];
    if (F2.value) return Array.from(t2);
    {
      let { remote: n3 } = e2, { value: r3 } = x2;
      if (n3) {
        let { value: e3 } = P2;
        return t2.filter((t3) => r3.has(t3) || e3.has(t3));
      } else return t2.filter((e3) => r3.has(e3));
    }
  }
  function Se2(e3) {
    Ce2(e3.rawNode);
  }
  function Ce2(t2) {
    if (B2.value) return;
    let { tag: n3, remote: r3, clearFilterAfterSelect: i3, valueField: a3 } = e2;
    if (n3 && !r3) {
      let { value: e3 } = h2, t3 = e3[0] || null;
      if (t3) {
        let e4 = m2.value;
        e4.length ? e4.push(t3) : m2.value = [t3], h2.value = N2;
      }
    }
    if (r3 && P2.value.set(t2[a3], t2), e2.multiple) {
      let e3 = be2(u2.value), o2 = e3.findIndex((e4) => e4 === t2[a3]);
      if (~o2) {
        if (e3.splice(o2, 1), n3 && !r3) {
          let e4 = we2(t2[a3]);
          ~e4 && (m2.value.splice(e4, 1), i3 && (f2.value = ``));
        }
      } else e3.push(t2[a3]), i3 && (f2.value = ``);
      V2(e3, I2(e3));
    } else {
      if (n3 && !r3) {
        let e3 = we2(t2[a3]);
        ~e3 ? m2.value = [m2.value[e3]] : m2.value = N2;
      }
      Ae2(), Z2(), V2(t2[a3], t2);
    }
  }
  function we2(t2) {
    return m2.value.findIndex((n3) => n3[e2.valueField] === t2);
  }
  function Te2(t2) {
    w2.value || X2();
    let { value: n3 } = t2.target;
    f2.value = n3;
    let { tag: r3, remote: i3 } = e2;
    if (G2(n3), r3 && !i3) {
      if (!n3) {
        h2.value = N2;
        return;
      }
      let { onCreate: t3 } = e2, r4 = t3 ? t3(n3) : { [e2.labelField]: n3, [e2.valueField]: n3 }, { valueField: i4, labelField: a3 } = e2;
      p2.value.some((e3) => e3[i4] === r4[i4] || e3[a3] === r4[a3]) || m2.value.some((e3) => e3[i4] === r4[i4] || e3[a3] === r4[a3]) ? h2.value = N2 : h2.value = [r4];
    }
  }
  function Ee2(t2) {
    t2.stopPropagation();
    let { multiple: n3 } = e2;
    !n3 && e2.filterable && Z2(), re2(), n3 ? V2([], []) : V2(null, null);
  }
  function De2(e3) {
    !oe(e3, `action`) && !oe(e3, `empty`) && !oe(e3, `header`) && e3.preventDefault();
  }
  function Oe2(e3) {
    q2(e3);
  }
  function ke2(t2) {
    var _a, _b;
    var n3, r3, i3;
    if (!e2.keyboard) {
      t2.preventDefault();
      return;
    }
    switch (t2.key) {
      case ` `:
        if (e2.filterable) break;
        t2.preventDefault();
      case `Enter`:
        if (!((_a = E2.value) == null ? void 0 : _a.isComposing)) {
          if (w2.value) {
            let t3 = (_b = A2.value) == null ? void 0 : _b.getPendingTmNode();
            t3 ? Se2(t3) : e2.filterable || (Z2(), Ae2());
          } else if (X2(), e2.tag && Q2.value) {
            let t3 = h2.value[0];
            if (t3) {
              let n4 = t3[e2.valueField], { value: r4 } = u2;
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
        w2.value && (he(t2), Z2()), (i3 = E2.value) == null || i3.focus();
        break;
    }
  }
  function Ae2() {
    var e3;
    (e3 = E2.value) == null || e3.focus();
  }
  function je2() {
    var e3;
    (e3 = E2.value) == null || e3.focusInput();
  }
  function Me2() {
    var e3;
    w2.value && ((e3 = O2.value) == null || e3.syncPosition());
  }
  J2(), U(K(e2, `options`), J2);
  let Ne2 = { focus: () => {
    var e3;
    (e3 = E2.value) == null || e3.focus();
  }, focusInput: () => {
    var e3;
    (e3 = E2.value) == null || e3.focusInput();
  }, blur: () => {
    var e3;
    (e3 = E2.value) == null || e3.blur();
  }, blurInput: () => {
    var e3;
    (e3 = E2.value) == null || e3.blurInput();
  } }, Pe2 = Y(() => {
    let { self: { menuBoxShadow: e3 } } = c2.value;
    return { "--n-menu-box-shadow": e3 };
  }), Fe2 = a2 ? s(`select`, void 0, Pe2, e2) : void 0;
  return Object.assign(Object.assign({}, Ne2), { mergedStatus: ne2, mergedClsPrefix: n2, mergedBordered: r2, namespace: i2, treeMate: b2, isMounted: k(), triggerRef: E2, menuRef: A2, pattern: f2, uncontrolledShow: S2, mergedShow: w2, adjustedTo: T(e2), uncontrolledValue: l2, mergedValue: u2, followerRef: O2, localizedPlaceholder: M2, selectedOption: R2, selectedOptions: L2, mergedSize: te2, mergedDisabled: B2, focused: d2, activeWithoutMenuOpen: Q2, inlineThemeDisabled: a2, onTriggerInputFocus: ce2, onTriggerInputBlur: le2, handleTriggerOrMenuResize: Me2, handleMenuFocus: me2, handleMenuBlur: ge2, handleMenuTabOut: ve2, handleTriggerClick: $2, handleToggle: Se2, handleDeleteOption: Ce2, handlePatternInput: Te2, handleClear: Ee2, handleTriggerBlur: de2, handleTriggerFocus: pe2, handleKeydown: ke2, handleMenuAfterLeave: se2, handleMenuClickOutside: ye2, handleMenuScroll: Oe2, handleMenuKeydown: ke2, handleMenuMousedown: De2, mergedTheme: c2, cssVars: a2 ? void 0 : Pe2, themeClass: Fe2 == null ? void 0 : Fe2.themeClass, onRender: Fe2 == null ? void 0 : Fe2.onRender });
}, render() {
  return q(`div`, { class: `${this.mergedClsPrefix}-select` }, q(N, null, { default: () => [q(y, null, { default: () => q(Je, { ref: `triggerRef`, inlineThemeDisabled: this.inlineThemeDisabled, status: this.mergedStatus, inputProps: this.inputProps, clsPrefix: this.mergedClsPrefix, showArrow: this.showArrow, maxTagCount: this.maxTagCount, ellipsisTagPopoverProps: this.ellipsisTagPopoverProps, bordered: this.mergedBordered, active: this.activeWithoutMenuOpen || this.mergedShow, pattern: this.pattern, placeholder: this.localizedPlaceholder, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions, multiple: this.multiple, renderTag: this.renderTag, renderLabel: this.renderLabel, filterable: this.filterable, clearable: this.clearable, disabled: this.mergedDisabled, size: this.mergedSize, theme: this.mergedTheme.peers.InternalSelection, labelField: this.labelField, valueField: this.valueField, themeOverrides: this.mergedTheme.peerOverrides.InternalSelection, loading: this.loading, focused: this.focused, onClick: this.handleTriggerClick, onDeleteOption: this.handleDeleteOption, onPatternInput: this.handlePatternInput, onClear: this.handleClear, onBlur: this.handleTriggerBlur, onFocus: this.handleTriggerFocus, onKeydown: this.handleKeydown, onPatternBlur: this.onTriggerInputBlur, onPatternFocus: this.onTriggerInputFocus, onResize: this.handleTriggerOrMenuResize, ignoreComposition: this.ignoreComposition }, { arrow: () => {
    var _a;
    var e2;
    return [(_a = (e2 = this.$slots).arrow) == null ? void 0 : _a.call(e2)];
  } }) }), q(L, { ref: `followerRef`, show: this.mergedShow, to: this.adjustedTo, teleportDisabled: this.adjustedTo === T.tdkey, containerClass: this.namespace, width: this.consistentMenuWidth ? `target` : void 0, minWidth: `target`, placement: this.placement }, { default: () => q(V, { name: `fade-in-scale-up-transition`, appear: this.isMounted, onAfterLeave: this.handleMenuAfterLeave }, { default: () => {
    var _a, _b;
    var e2;
    return this.mergedShow || this.displayDirective === `show` ? ((e2 = this.onRender) == null || e2.call(this), z(q(Ke, Object.assign({}, this.menuProps, { ref: `menuRef`, onResize: this.handleTriggerOrMenuResize, inlineThemeDisabled: this.inlineThemeDisabled, virtualScroll: this.consistentMenuWidth && this.virtualScroll, class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, (_a = this.menuProps) == null ? void 0 : _a.class], clsPrefix: this.mergedClsPrefix, focusable: true, labelField: this.labelField, valueField: this.valueField, autoPending: true, nodeProps: this.nodeProps, theme: this.mergedTheme.peers.InternalSelectMenu, themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu, treeMate: this.treeMate, multiple: this.multiple, size: this.menuSize, renderOption: this.renderOption, renderLabel: this.renderLabel, value: this.mergedValue, style: [(_b = this.menuProps) == null ? void 0 : _b.style, this.cssVars], onToggle: this.handleToggle, onScroll: this.handleMenuScroll, onFocus: this.handleMenuFocus, onBlur: this.handleMenuBlur, onKeydown: this.handleMenuKeydown, onTabOut: this.handleMenuTabOut, onMousedown: this.handleMenuMousedown, show: this.mergedShow, showCheckmark: this.showCheckmark, resetMenuOnOptionsChange: this.resetMenuOnOptionsChange }), { empty: () => {
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
    } }), this.displayDirective === `show` ? [[G, this.mergedShow], [P, this.handleMenuClickOutside, void 0, { capture: true }]] : [[P, this.handleMenuClickOutside, void 0, { capture: true }]])) : null;
  } }) })] }));
} }), rt = f(`switch`, `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [i(`children-placeholder`, `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), i(`rail-placeholder`, `
 display: flex;
 flex-wrap: none;
 `), i(`button-placeholder`, `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), f(`base-loading`, `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [le({ left: `50%`, top: `50%`, originalTransform: `translateX(-50%) translateY(-50%)` })]), i(`checked, unchecked`, `
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
 `), i(`checked`, `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), i(`unchecked`, `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), r(`&:focus`, [i(`rail`, `
 box-shadow: var(--n-box-shadow-focus);
 `)]), u(`round`, [i(`rail`, `border-radius: calc(var(--n-rail-height) / 2);`, [i(`button`, `border-radius: calc(var(--n-button-height) / 2);`)])]), h(`disabled`, [h(`icon`, [u(`rubber-band`, [u(`pressed`, [i(`rail`, [i(`button`, `max-width: var(--n-button-width-pressed);`)])]), i(`rail`, [r(`&:active`, [i(`button`, `max-width: var(--n-button-width-pressed);`)])]), u(`active`, [u(`pressed`, [i(`rail`, [i(`button`, `left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]), i(`rail`, [r(`&:active`, [i(`button`, `left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]), u(`active`, [i(`rail`, [i(`button`, `left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]), i(`rail`, `
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
 `, [i(`button-icon`, `
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
 `, [le()]), i(`button`, `
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
 `)]), u(`active`, [i(`rail`, `background-color: var(--n-rail-color-active);`)]), u(`loading`, [i(`rail`, `
 cursor: wait;
 `)]), u(`disabled`, [i(`rail`, `
 cursor: not-allowed;
 opacity: .5;
 `)])]);
const it = Object.assign(Object.assign({}, o.props), { size: { type: String, default: `medium` }, value: { type: [String, Number, Boolean], default: void 0 }, loading: Boolean, defaultValue: { type: [String, Number, Boolean], default: false }, disabled: { type: Boolean, default: void 0 }, round: { type: Boolean, default: true }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], checkedValue: { type: [String, Number, Boolean], default: true }, uncheckedValue: { type: [String, Number, Boolean], default: false }, railStyle: Function, rubberBand: { type: Boolean, default: true }, onChange: [Function, Array] });
var at, ot = J({ name: `Switch`, props: it, slots: Object, setup(n2) {
  at === void 0 && (at = typeof CSS < `u` ? CSS.supports === void 0 ? false : CSS.supports(`width`, `max(1px)`) : true);
  let { mergedClsPrefixRef: r2, inlineThemeDisabled: i2 } = g(n2), c2 = o(`Switch`, `-switch`, rt, me, n2, r2), l2 = ue(n2), { mergedSizeRef: u2, mergedDisabledRef: f2 } = l2, p2 = H(n2.defaultValue), m2 = C(K(n2, `value`), p2), h2 = Y(() => m2.value === n2.checkedValue), _2 = H(false), v2 = H(false), y2 = Y(() => {
    let { railStyle: e2 } = n2;
    if (e2) return e2({ focused: v2.value, checked: h2.value });
  });
  function b2(e2) {
    let { "onUpdate:value": r3, onChange: i3, onUpdateValue: a2 } = n2, { nTriggerFormInput: o2, nTriggerFormChange: s2 } = l2;
    r3 && t(r3, e2), a2 && t(a2, e2), i3 && t(i3, e2), p2.value = e2, o2(), s2();
  }
  function x2() {
    let { nTriggerFormFocus: e2 } = l2;
    e2();
  }
  function S2() {
    let { nTriggerFormBlur: e2 } = l2;
    e2();
  }
  function w2() {
    n2.loading || f2.value || (m2.value === n2.checkedValue ? b2(n2.uncheckedValue) : b2(n2.checkedValue));
  }
  function T2() {
    v2.value = true, x2();
  }
  function E2() {
    v2.value = false, S2(), _2.value = false;
  }
  function D2(e2) {
    n2.loading || f2.value || e2.key === ` ` && (m2.value === n2.checkedValue ? b2(n2.uncheckedValue) : b2(n2.checkedValue), _2.value = false);
  }
  function O2(e2) {
    n2.loading || f2.value || e2.key === ` ` && (e2.preventDefault(), _2.value = true);
  }
  let k2 = Y(() => {
    let { value: t2 } = u2, { self: { opacityDisabled: n3, railColor: r3, railColorActive: i3, buttonBoxShadow: o2, buttonColor: s2, boxShadowFocus: l3, loadingColor: f3, textColor: p3, iconColor: m3, [a(`buttonHeight`, t2)]: h3, [a(`buttonWidth`, t2)]: g2, [a(`buttonWidthPressed`, t2)]: _3, [a(`railHeight`, t2)]: v3, [a(`railWidth`, t2)]: y3, [a(`railBorderRadius`, t2)]: b3, [a(`buttonBorderRadius`, t2)]: x3 }, common: { cubicBezierEaseInOut: S3 } } = c2.value, C2, w3, T3;
    return at ? (C2 = `calc((${v3} - ${h3}) / 2)`, w3 = `max(${v3}, ${h3})`, T3 = `max(${y3}, calc(${y3} + ${h3} - ${v3}))`) : (C2 = d((e(v3) - e(h3)) / 2), w3 = d(Math.max(e(v3), e(h3))), T3 = e(v3) > e(h3) ? y3 : d(e(y3) + e(h3) - e(v3))), { "--n-bezier": S3, "--n-button-border-radius": x3, "--n-button-box-shadow": o2, "--n-button-color": s2, "--n-button-width": g2, "--n-button-width-pressed": _3, "--n-button-height": h3, "--n-height": w3, "--n-offset": C2, "--n-opacity-disabled": n3, "--n-rail-border-radius": b3, "--n-rail-color": r3, "--n-rail-color-active": i3, "--n-rail-height": v3, "--n-rail-width": y3, "--n-width": T3, "--n-box-shadow-focus": l3, "--n-loading-color": f3, "--n-text-color": p3, "--n-icon-color": m3 };
  }), A2 = i2 ? s(`switch`, Y(() => u2.value[0]), k2, n2) : void 0;
  return { handleClick: w2, handleBlur: E2, handleFocus: T2, handleKeyup: D2, handleKeydown: O2, mergedRailStyle: y2, pressed: _2, mergedClsPrefix: r2, mergedValue: m2, checked: h2, mergedDisabled: f2, cssVars: i2 ? void 0 : k2, themeClass: A2 == null ? void 0 : A2.themeClass, onRender: A2 == null ? void 0 : A2.onRender };
}, render() {
  let { mergedClsPrefix: e2, mergedDisabled: t2, checked: n2, mergedRailStyle: r2, onRender: i2, $slots: a2 } = this;
  i2 == null ? void 0 : i2();
  let { checked: o2, unchecked: s2, icon: c2, "checked-icon": l2, "unchecked-icon": u2 } = a2, d2 = !(v(c2) && v(l2) && v(u2));
  return q(`div`, { role: `switch`, "aria-checked": n2, class: [`${e2}-switch`, this.themeClass, d2 && `${e2}-switch--icon`, n2 && `${e2}-switch--active`, t2 && `${e2}-switch--disabled`, this.round && `${e2}-switch--round`, this.loading && `${e2}-switch--loading`, this.pressed && `${e2}-switch--pressed`, this.rubberBand && `${e2}-switch--rubber-band`], tabindex: this.mergedDisabled ? void 0 : 0, style: this.cssVars, onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, q(`div`, { class: `${e2}-switch__rail`, "aria-hidden": `true`, style: r2 }, _(o2, (t3) => _(s2, (n3) => t3 || n3 ? q(`div`, { "aria-hidden": true, class: `${e2}-switch__children-placeholder` }, q(`div`, { class: `${e2}-switch__rail-placeholder` }, q(`div`, { class: `${e2}-switch__button-placeholder` }), t3), q(`div`, { class: `${e2}-switch__rail-placeholder` }, q(`div`, { class: `${e2}-switch__button-placeholder` }), n3)) : null)), q(`div`, { class: `${e2}-switch__button` }, _(c2, (t3) => _(l2, (n3) => _(u2, (r3) => q(ye, null, { default: () => this.loading ? q(de, { key: `loading`, clsPrefix: e2, strokeWidth: 20 }) : this.checked && (n3 || t3) ? q(`div`, { class: `${e2}-switch__button-icon`, key: n3 ? `checked-icon` : `icon` }, n3 || t3) : !this.checked && (r3 || t3) ? q(`div`, { class: `${e2}-switch__button-icon`, key: r3 ? `unchecked-icon` : `icon` }, r3 || t3) : null })))), _(o2, (t3) => t3 && q(`div`, { key: `checked`, class: `${e2}-switch__checked` }, t3)), _(s2, (t3) => t3 && q(`div`, { key: `unchecked`, class: `${e2}-switch__unchecked` }, t3)))));
} });
export {
  nt as n,
  Ve as r,
  ot as t
};
