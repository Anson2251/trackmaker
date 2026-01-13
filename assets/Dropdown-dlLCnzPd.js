import { F as e, L as t, O as n, R as r, _ as i, d as a, dt as o, f as s, gt as c, ht as l, j as u, mt as d, o as f, pt as p, ut as m, y as h, z as g } from "./Card-nhqq8IKa.js";
import { A as _, F as v, G as y, J as b, P as x, R as S, U as ee, Y as C, _ as w, c as T, f as E, j as D, l as O, o as k, p as A, s as j, w as M } from "./Tooltip-DGge0ha1.js";
import { Bt as N, Et as P, Ft as te, Jt as F, Ot as I, Pt as ne, an as L, cn as R, dt as re, gt as z, in as ie, jt as B, rn as ae, rt as oe, wt as V } from "./index-DTVnoW_1.js";
import { n as H, t as se } from "./fade-in-scale-up.cssr-DGTJWPO8.js";
import { f as ce, g as U, m as le, o as ue, u as de } from "./storage-DsEl3RSe.js";
import { r as fe } from "./Button-o58fM-RZ.js";
import { t as pe } from "./ChevronRight-CARsiNm-.js";
import { r as me } from "./light-CQB9eEMb.js";
import { t as he } from "./light-CRdznqhu.js";
import { n as ge } from "./settings-store-NEXTm_Ep.js";
import { t as _e } from "./Icon-y0y4QmKo.js";
function ve(e2 = {}, t2) {
  let n2 = ae({ ctrl: false, command: false, win: false, shift: false, tab: false }), { keydown: r2, keyup: i2 } = e2, a2 = (e3) => {
    switch (e3.key) {
      case `Control`:
        n2.ctrl = true;
        break;
      case `Meta`:
        n2.command = true, n2.win = true;
        break;
      case `Shift`:
        n2.shift = true;
        break;
      case `Tab`:
        n2.tab = true;
        break;
    }
    r2 !== void 0 && Object.keys(r2).forEach((t3) => {
      if (t3 !== e3.key) return;
      let n3 = r2[t3];
      if (typeof n3 == `function`) n3(e3);
      else {
        let { stop: t4 = false, prevent: r3 = false } = n3;
        t4 && e3.stopPropagation(), r3 && e3.preventDefault(), n3.handler(e3);
      }
    });
  }, o2 = (e3) => {
    switch (e3.key) {
      case `Control`:
        n2.ctrl = false;
        break;
      case `Meta`:
        n2.command = false, n2.win = false;
        break;
      case `Shift`:
        n2.shift = false;
        break;
      case `Tab`:
        n2.tab = false;
        break;
    }
    i2 !== void 0 && Object.keys(i2).forEach((t3) => {
      if (t3 !== e3.key) return;
      let n3 = i2[t3];
      if (typeof n3 == `function`) n3(e3);
      else {
        let { stop: t4 = false, prevent: r3 = false } = n3;
        t4 && e3.stopPropagation(), r3 && e3.preventDefault(), n3.handler(e3);
      }
    });
  }, s2 = () => {
    (t2 === void 0 || t2.value) && (C(`keydown`, document, a2), C(`keyup`, document, o2)), t2 !== void 0 && F(t2, (e3) => {
      e3 ? (C(`keydown`, document, a2), C(`keyup`, document, o2)) : (b(`keydown`, document, a2), b(`keyup`, document, o2));
    });
  };
  return y() ? (ne(s2), te(() => {
    (t2 === void 0 || t2.value) && (b(`keydown`, document, a2), b(`keyup`, document, o2));
  })) : s2(), ie(n2);
}
function ye(e2, t2, n2) {
  if (!t2) return e2;
  let r2 = L(e2.value), i2 = null;
  return F(e2, (e3) => {
    i2 !== null && window.clearTimeout(i2), e3 === true ? n2 && !n2.value ? r2.value = true : i2 = window.setTimeout(() => {
      r2.value = true;
    }, t2) : r2.value = false;
  }), r2;
}
function W(e2) {
  return (t2) => {
    t2 ? e2.value = t2.$el : e2.value = null;
  };
}
var be = { sizeSmall: `14px`, sizeMedium: `16px`, sizeLarge: `18px`, labelPadding: `0 8px`, labelFontWeight: `400` };
function G(e2) {
  let { baseColor: t2, inputColorDisabled: n2, cardColor: i2, modalColor: a2, popoverColor: o2, textColorDisabled: s2, borderColor: c2, primaryColor: l2, textColor2: u2, fontSizeSmall: d2, fontSizeMedium: f2, fontSizeLarge: p2, borderRadiusSmall: m2, lineHeight: h2 } = e2;
  return Object.assign(Object.assign({}, be), { labelLineHeight: h2, fontSizeSmall: d2, fontSizeMedium: f2, fontSizeLarge: p2, borderRadius: m2, color: t2, colorChecked: l2, colorDisabled: n2, colorDisabledChecked: n2, colorTableHeader: i2, colorTableHeaderModal: a2, colorTableHeaderPopover: o2, checkMarkColor: t2, checkMarkColorDisabled: s2, checkMarkColorDisabledChecked: s2, border: `1px solid ${c2}`, borderDisabled: `1px solid ${c2}`, borderDisabledChecked: `1px solid ${c2}`, borderChecked: `1px solid ${l2}`, borderFocus: `1px solid ${l2}`, boxShadowFocus: `0 0 0 2px ${r(l2, { alpha: 0.3 })}`, textColor: u2, textColorDisabled: s2 });
}
var K = { name: `Checkbox`, common: f, self: G };
function xe(e2) {
  let { boxShadow2: t2 } = e2;
  return { menuBoxShadow: t2 };
}
var q = a({ name: `Popselect`, common: f, peers: { Popover: O, InternalSelectMenu: de }, self: xe }), Se = { itemPaddingSmall: `0 4px`, itemMarginSmall: `0 0 0 8px`, itemMarginSmallRtl: `0 8px 0 0`, itemPaddingMedium: `0 4px`, itemMarginMedium: `0 0 0 8px`, itemMarginMediumRtl: `0 8px 0 0`, itemPaddingLarge: `0 4px`, itemMarginLarge: `0 0 0 8px`, itemMarginLargeRtl: `0 8px 0 0`, buttonIconSizeSmall: `14px`, buttonIconSizeMedium: `16px`, buttonIconSizeLarge: `18px`, inputWidthSmall: `60px`, selectWidthSmall: `unset`, inputMarginSmall: `0 0 0 8px`, inputMarginSmallRtl: `0 8px 0 0`, selectMarginSmall: `0 0 0 8px`, prefixMarginSmall: `0 8px 0 0`, suffixMarginSmall: `0 0 0 8px`, inputWidthMedium: `60px`, selectWidthMedium: `unset`, inputMarginMedium: `0 0 0 8px`, inputMarginMediumRtl: `0 8px 0 0`, selectMarginMedium: `0 0 0 8px`, prefixMarginMedium: `0 8px 0 0`, suffixMarginMedium: `0 0 0 8px`, inputWidthLarge: `60px`, selectWidthLarge: `unset`, inputMarginLarge: `0 0 0 8px`, inputMarginLargeRtl: `0 8px 0 0`, selectMarginLarge: `0 0 0 8px`, prefixMarginLarge: `0 8px 0 0`, suffixMarginLarge: `0 0 0 8px` };
function J(e2) {
  let { textColor2: t2, primaryColor: n2, primaryColorHover: r2, primaryColorPressed: i2, inputColorDisabled: a2, textColorDisabled: o2, borderColor: s2, borderRadius: c2, fontSizeTiny: l2, fontSizeSmall: u2, fontSizeMedium: d2, heightTiny: f2, heightSmall: p2, heightMedium: m2 } = e2;
  return Object.assign(Object.assign({}, Se), { buttonColor: `#0000`, buttonColorHover: `#0000`, buttonColorPressed: `#0000`, buttonBorder: `1px solid ${s2}`, buttonBorderHover: `1px solid ${s2}`, buttonBorderPressed: `1px solid ${s2}`, buttonIconColor: t2, buttonIconColorHover: t2, buttonIconColorPressed: t2, itemTextColor: t2, itemTextColorHover: r2, itemTextColorPressed: i2, itemTextColorActive: n2, itemTextColorDisabled: o2, itemColor: `#0000`, itemColorHover: `#0000`, itemColorPressed: `#0000`, itemColorActive: `#0000`, itemColorActiveHover: `#0000`, itemColorDisabled: a2, itemBorder: `1px solid #0000`, itemBorderHover: `1px solid #0000`, itemBorderPressed: `1px solid #0000`, itemBorderActive: `1px solid ${n2}`, itemBorderDisabled: `1px solid ${s2}`, itemBorderRadius: c2, itemSizeSmall: f2, itemSizeMedium: p2, itemSizeLarge: m2, itemFontSizeSmall: l2, itemFontSizeMedium: u2, itemFontSizeLarge: d2, jumperFontSizeSmall: l2, jumperFontSizeMedium: u2, jumperFontSizeLarge: d2, jumperTextColor: t2, jumperTextColorDisabled: o2 });
}
var Y = a({ name: `Pagination`, common: f, peers: { Select: ue, Input: me, Popselect: q }, self: J }), Ce = { padding: `4px 0`, optionIconSizeSmall: `14px`, optionIconSizeMedium: `16px`, optionIconSizeLarge: `16px`, optionIconSizeHuge: `18px`, optionSuffixWidthSmall: `14px`, optionSuffixWidthMedium: `14px`, optionSuffixWidthLarge: `16px`, optionSuffixWidthHuge: `16px`, optionIconSuffixWidthSmall: `32px`, optionIconSuffixWidthMedium: `32px`, optionIconSuffixWidthLarge: `36px`, optionIconSuffixWidthHuge: `36px`, optionPrefixWidthSmall: `14px`, optionPrefixWidthMedium: `14px`, optionPrefixWidthLarge: `16px`, optionPrefixWidthHuge: `16px`, optionIconPrefixWidthSmall: `36px`, optionIconPrefixWidthMedium: `36px`, optionIconPrefixWidthLarge: `40px`, optionIconPrefixWidthHuge: `40px` };
function we(e2) {
  let { primaryColor: t2, textColor2: n2, dividerColor: i2, hoverColor: a2, popoverColor: o2, invertedColor: s2, borderRadius: c2, fontSizeSmall: l2, fontSizeMedium: u2, fontSizeLarge: d2, fontSizeHuge: f2, heightSmall: p2, heightMedium: m2, heightLarge: h2, heightHuge: g2, textColor3: _2, opacityDisabled: v2 } = e2;
  return Object.assign(Object.assign({}, Ce), { optionHeightSmall: p2, optionHeightMedium: m2, optionHeightLarge: h2, optionHeightHuge: g2, borderRadius: c2, fontSizeSmall: l2, fontSizeMedium: u2, fontSizeLarge: d2, fontSizeHuge: f2, optionTextColor: n2, optionTextColorHover: n2, optionTextColorActive: t2, optionTextColorChildActive: t2, color: o2, dividerColor: i2, suffixColor: n2, prefixColor: n2, optionColorHover: a2, optionColorActive: r(t2, { alpha: 0.1 }), groupHeaderTextColor: _2, optionTextColorInverted: `#BBB`, optionTextColorHoverInverted: `#FFF`, optionTextColorActiveInverted: `#FFF`, optionTextColorChildActiveInverted: `#FFF`, colorInverted: s2, dividerColorInverted: `#BBB`, suffixColorInverted: `#BBB`, prefixColorInverted: `#BBB`, optionColorHoverInverted: t2, optionColorActiveInverted: t2, groupHeaderTextColorInverted: `#AAA`, optionOpacityDisabled: v2 });
}
var X = a({ name: `Dropdown`, common: f, peers: { Popover: O }, self: we }), Te = { thPaddingSmall: `8px`, thPaddingMedium: `12px`, thPaddingLarge: `12px`, tdPaddingSmall: `8px`, tdPaddingMedium: `12px`, tdPaddingLarge: `12px`, sorterSize: `15px`, resizableContainerSize: `8px`, resizableSize: `2px`, filterSize: `15px`, paginationMargin: `12px 0 0 0`, emptyPadding: `48px 0`, actionPadding: `8px 12px`, actionButtonMargin: `0 8px 0 0` };
function Ee(e2) {
  let { cardColor: t2, modalColor: n2, popoverColor: r2, textColor2: i2, textColor1: a2, tableHeaderColor: o2, tableColorHover: s2, iconColor: c2, primaryColor: l2, fontWeightStrong: u2, borderRadius: d2, lineHeight: f2, fontSizeSmall: p2, fontSizeMedium: m2, fontSizeLarge: h2, dividerColor: _2, heightSmall: v2, opacityDisabled: y2, tableColorStriped: b2 } = e2;
  return Object.assign(Object.assign({}, Te), { actionDividerColor: _2, lineHeight: f2, borderRadius: d2, fontSizeSmall: p2, fontSizeMedium: m2, fontSizeLarge: h2, borderColor: g(t2, _2), tdColorHover: g(t2, s2), tdColorSorting: g(t2, s2), tdColorStriped: g(t2, b2), thColor: g(t2, o2), thColorHover: g(g(t2, o2), s2), thColorSorting: g(g(t2, o2), s2), tdColor: t2, tdTextColor: i2, thTextColor: a2, thFontWeight: u2, thButtonColorHover: s2, thIconColor: c2, thIconColorActive: l2, borderColorModal: g(n2, _2), tdColorHoverModal: g(n2, s2), tdColorSortingModal: g(n2, s2), tdColorStripedModal: g(n2, b2), thColorModal: g(n2, o2), thColorHoverModal: g(g(n2, o2), s2), thColorSortingModal: g(g(n2, o2), s2), tdColorModal: n2, borderColorPopover: g(r2, _2), tdColorHoverPopover: g(r2, s2), tdColorSortingPopover: g(r2, s2), tdColorStripedPopover: g(r2, b2), thColorPopover: g(r2, o2), thColorHoverPopover: g(g(r2, o2), s2), thColorSortingPopover: g(g(r2, o2), s2), tdColorPopover: r2, boxShadowBefore: `inset -12px 0 8px -12px rgba(0, 0, 0, .18)`, boxShadowAfter: `inset 12px 0 8px -12px rgba(0, 0, 0, .18)`, loadingColor: l2, loadingSize: v2, opacityLoading: y2 });
}
var De = a({ name: `DataTable`, common: f, peers: { Button: fe, Checkbox: K, Radio: ge, Pagination: Y, Scrollbar: A, Empty: ce, Popover: O, Ellipsis: he, Dropdown: X }, self: Ee });
const Z = e(`n-dropdown-menu`), Q = e(`n-dropdown`), Oe = e(`n-dropdown-option`);
var ke = V({ name: `DropdownDivider`, props: { clsPrefix: { type: String, required: true } }, render() {
  return P(`div`, { class: `${this.clsPrefix}-dropdown-divider` });
} }), Ae = V({ name: `DropdownGroupHeader`, props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  let { showIconRef: e2, hasSubmenuRef: t2 } = I(Z), { renderLabelRef: n2, labelFieldRef: r2, nodePropsRef: i2, renderOptionRef: a2 } = I(Q);
  return { labelField: r2, showIcon: e2, hasSubmenu: t2, renderLabel: n2, nodeProps: i2, renderOption: a2 };
}, render() {
  let { clsPrefix: e2, hasSubmenu: t2, showIcon: n2, nodeProps: r2, renderLabel: i2, renderOption: a2 } = this, { rawNode: o2 } = this.tmNode, s2 = P(`div`, Object.assign({ class: `${e2}-dropdown-option` }, r2 == null ? void 0 : r2(o2)), P(`div`, { class: `${e2}-dropdown-option-body ${e2}-dropdown-option-body--group` }, P(`div`, { "data-dropdown-option": true, class: [`${e2}-dropdown-option-body__prefix`, n2 && `${e2}-dropdown-option-body__prefix--show-icon`] }, U(o2.icon)), P(`div`, { class: `${e2}-dropdown-option-body__label`, "data-dropdown-option": true }, i2 ? i2(o2) : U(o2.title ?? o2[this.labelField])), P(`div`, { class: [`${e2}-dropdown-option-body__suffix`, t2 && `${e2}-dropdown-option-body__suffix--has-submenu`], "data-dropdown-option": true })));
  return a2 ? a2({ node: s2, option: o2 }) : s2;
} });
function $(e2, t2) {
  return e2.type === `submenu` || e2.type === void 0 && e2[t2] !== void 0;
}
function je(e2) {
  return e2.type === `group`;
}
function Me(e2) {
  return e2.type === `divider`;
}
function Ne(e2) {
  return e2.type === `render`;
}
var Pe = V({ name: `DropdownOption`, props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null }, placement: { type: String, default: `right-start` }, props: Object, scrollable: Boolean }, setup(e2) {
  let n2 = I(Q), { hoverKeyRef: r2, keyboardKeyRef: i2, lastToggledSubmenuKeyRef: a2, pendingKeyPathRef: o2, activeKeyPathRef: s2, animatedRef: c2, mergedShowRef: l2, renderLabelRef: u2, renderIconRef: d2, labelFieldRef: f2, childrenFieldRef: p2, renderOptionRef: m2, nodePropsRef: h2, menuPropsRef: g2 } = n2, _2 = I(Oe, null), v2 = I(Z), y2 = I(x), b2 = z(() => e2.tmNode.rawNode), S2 = z(() => {
    let { value: t2 } = p2;
    return $(e2.tmNode.rawNode, t2);
  }), ee2 = z(() => {
    let { disabled: t2 } = e2.tmNode;
    return t2;
  }), C2 = ye(z(() => {
    if (!S2.value) return false;
    let { key: t2, disabled: n3 } = e2.tmNode;
    if (n3) return false;
    let { value: s3 } = r2, { value: c3 } = i2, { value: l3 } = a2, { value: u3 } = o2;
    return s3 === null ? c3 === null ? l3 === null ? false : u3.includes(t2) : u3.includes(t2) && u3[u3.length - 1] !== t2 : u3.includes(t2);
  }), 300, z(() => i2.value === null && !c2.value)), w2 = z(() => !!(_2 == null ? void 0 : _2.enteringSubmenuRef.value)), T2 = L(false);
  N(Oe, { enteringSubmenuRef: T2 });
  function E2() {
    T2.value = true;
  }
  function D2() {
    T2.value = false;
  }
  function O2() {
    let { parentKey: t2, tmNode: n3 } = e2;
    n3.disabled || l2.value && (a2.value = t2, i2.value = null, r2.value = n3.key);
  }
  function k2() {
    let { tmNode: t2 } = e2;
    t2.disabled || l2.value && r2.value !== t2.key && O2();
  }
  function A2(t2) {
    if (e2.tmNode.disabled || !l2.value) return;
    let { relatedTarget: n3 } = t2;
    n3 && !H({ target: n3 }, `dropdownOption`) && !H({ target: n3 }, `scrollbarRail`) && (r2.value = null);
  }
  function j2() {
    let { value: t2 } = S2, { tmNode: r3 } = e2;
    l2.value && !t2 && !r3.disabled && (n2.doSelect(r3.key, r3.rawNode), n2.doUpdateShow(false));
  }
  return { labelField: f2, renderLabel: u2, renderIcon: d2, siblingHasIcon: v2.showIconRef, siblingHasSubmenu: v2.hasSubmenuRef, menuProps: g2, popoverBody: y2, animated: c2, mergedShowSubmenu: z(() => C2.value && !w2.value), rawNode: b2, hasSubmenu: S2, pending: t(() => {
    let { value: t2 } = o2, { key: n3 } = e2.tmNode;
    return t2.includes(n3);
  }), childActive: t(() => {
    let { value: t2 } = s2, { key: n3 } = e2.tmNode, r3 = t2.findIndex((e3) => n3 === e3);
    return r3 === -1 ? false : r3 < t2.length - 1;
  }), active: t(() => {
    let { value: t2 } = s2, { key: n3 } = e2.tmNode, r3 = t2.findIndex((e3) => n3 === e3);
    return r3 === -1 ? false : r3 === t2.length - 1;
  }), mergedDisabled: ee2, renderOption: m2, nodeProps: h2, handleClick: j2, handleMouseMove: k2, handleMouseEnter: O2, handleMouseLeave: A2, handleSubmenuBeforeEnter: E2, handleSubmenuAfterEnter: D2 };
}, render() {
  var _a;
  let { animated: e2, rawNode: t2, mergedShowSubmenu: n2, clsPrefix: r2, siblingHasIcon: i2, siblingHasSubmenu: a2, renderLabel: o2, renderIcon: s2, renderOption: c2, nodeProps: l2, props: u2, scrollable: d2 } = this, f2 = null;
  if (n2) {
    let e3 = (_a = this.menuProps) == null ? void 0 : _a.call(this, t2, t2.children);
    f2 = P(Le, Object.assign({}, e3, { clsPrefix: r2, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
  }
  let p2 = { class: [`${r2}-dropdown-option-body`, this.pending && `${r2}-dropdown-option-body--pending`, this.active && `${r2}-dropdown-option-body--active`, this.childActive && `${r2}-dropdown-option-body--child-active`, this.mergedDisabled && `${r2}-dropdown-option-body--disabled`], onMousemove: this.handleMouseMove, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onClick: this.handleClick }, m2 = l2 == null ? void 0 : l2(t2), h2 = P(`div`, Object.assign({ class: [`${r2}-dropdown-option`, m2 == null ? void 0 : m2.class], "data-dropdown-option": true }, m2), P(`div`, B(p2, u2), [P(`div`, { class: [`${r2}-dropdown-option-body__prefix`, i2 && `${r2}-dropdown-option-body__prefix--show-icon`] }, [s2 ? s2(t2) : U(t2.icon)]), P(`div`, { "data-dropdown-option": true, class: `${r2}-dropdown-option-body__label` }, o2 ? o2(t2) : U(t2[this.labelField] ?? t2.title)), P(`div`, { "data-dropdown-option": true, class: [`${r2}-dropdown-option-body__suffix`, a2 && `${r2}-dropdown-option-body__suffix--has-submenu`] }, this.hasSubmenu ? P(_e, null, { default: () => P(pe, null) }) : null)]), this.hasSubmenu ? P(D, null, { default: () => [P(_, null, { default: () => P(`div`, { class: `${r2}-dropdown-offset-container` }, P(M, { show: this.mergedShowSubmenu, placement: this.placement, to: d2 && this.popoverBody || void 0, teleportDisabled: !d2 }, { default: () => P(`div`, { class: `${r2}-dropdown-menu-wrapper` }, e2 ? P(oe, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: `fade-in-scale-up-transition`, appear: true }, { default: () => f2 }) : f2) })) })] }) : null);
  return c2 ? c2({ node: h2, option: t2 }) : h2;
} }), Fe = V({ name: `NDropdownGroup`, props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null } }, render() {
  let { tmNode: e2, parentKey: t2, clsPrefix: n2 } = this, { children: r2 } = e2;
  return P(re, null, P(Ae, { clsPrefix: n2, tmNode: e2, key: e2.key }), r2 == null ? void 0 : r2.map((e3) => {
    let { rawNode: r3 } = e3;
    return r3.show === false ? null : Me(r3) ? P(ke, { clsPrefix: n2, key: e3.key }) : e3.isGroup ? (u(`dropdown`, "`group` node is not allowed to be put in `group` node."), null) : P(Pe, { clsPrefix: n2, tmNode: e3, parentKey: t2, key: e3.key });
  }));
} }), Ie = V({ name: `DropdownRenderOption`, props: { tmNode: { type: Object, required: true } }, render() {
  let { rawNode: { render: e2, props: t2 } } = this.tmNode;
  return P(`div`, t2, [e2 == null ? void 0 : e2()]);
} }), Le = V({ name: `DropdownMenu`, props: { scrollable: Boolean, showArrow: Boolean, arrowStyle: [String, Object], clsPrefix: { type: String, required: true }, tmNodes: { type: Array, default: () => [] }, parentKey: { type: [String, Number], default: null } }, setup(e2) {
  let { renderIconRef: t2, childrenFieldRef: n2 } = I(Q);
  N(Z, { showIconRef: z(() => {
    let n3 = t2.value;
    return e2.tmNodes.some((e3) => {
      var _a;
      if (e3.isGroup) return (_a = e3.children) == null ? void 0 : _a.some(({ rawNode: e4 }) => n3 ? n3(e4) : e4.icon);
      let { rawNode: t3 } = e3;
      return n3 ? n3(t3) : t3.icon;
    });
  }), hasSubmenuRef: z(() => {
    let { value: t3 } = n2;
    return e2.tmNodes.some((e3) => {
      var _a;
      if (e3.isGroup) return (_a = e3.children) == null ? void 0 : _a.some(({ rawNode: e4 }) => $(e4, t3));
      let { rawNode: n3 } = e3;
      return $(n3, t3);
    });
  }) });
  let r2 = L(null);
  return N(v, null), N(S, null), N(x, r2), { bodyRef: r2 };
}, render() {
  let { parentKey: e2, clsPrefix: t2, scrollable: n2 } = this, r2 = this.tmNodes.map((r3) => {
    let { rawNode: i2 } = r3;
    return i2.show === false ? null : Ne(i2) ? P(Ie, { tmNode: r3, key: r3.key }) : Me(i2) ? P(ke, { clsPrefix: t2, key: r3.key }) : je(i2) ? P(Fe, { clsPrefix: t2, tmNode: r3, parentKey: e2, key: r3.key }) : P(Pe, { clsPrefix: t2, tmNode: r3, parentKey: e2, key: r3.key, props: i2.props, scrollable: n2 });
  });
  return P(`div`, { class: [`${t2}-dropdown-menu`, n2 && `${t2}-dropdown-menu--scrollable`], ref: `bodyRef` }, n2 ? P(E, { contentClass: `${t2}-dropdown-menu__content` }, { default: () => r2 }) : r2, this.showArrow ? T({ clsPrefix: t2, arrowStyle: this.arrowStyle, arrowClass: void 0, arrowWrapperClass: void 0, arrowWrapperStyle: void 0 }) : null);
} }), Re = o(`dropdown-menu`, `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [se(), o(`dropdown-option`, `
 position: relative;
 `, [m(`a`, `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [m(`&::before`, `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), o(`dropdown-option-body`, `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [m(`&::before`, `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), l(`disabled`, [d(`pending`, `
 color: var(--n-option-text-color-hover);
 `, [p(`prefix, suffix`, `
 color: var(--n-option-text-color-hover);
 `), m(`&::before`, `background-color: var(--n-option-color-hover);`)]), d(`active`, `
 color: var(--n-option-text-color-active);
 `, [p(`prefix, suffix`, `
 color: var(--n-option-text-color-active);
 `), m(`&::before`, `background-color: var(--n-option-color-active);`)]), d(`child-active`, `
 color: var(--n-option-text-color-child-active);
 `, [p(`prefix, suffix`, `
 color: var(--n-option-text-color-child-active);
 `)])]), d(`disabled`, `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), d(`group`, `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [p(`prefix`, `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [d(`show-icon`, `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), p(`prefix`, `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [d(`show-icon`, `
 width: var(--n-option-icon-prefix-width);
 `), o(`icon`, `
 font-size: var(--n-option-icon-size);
 `)]), p(`label`, `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), p(`suffix`, `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `, [d(`has-submenu`, `
 width: var(--n-option-icon-suffix-width);
 `), o(`icon`, `
 font-size: var(--n-option-icon-size);
 `)]), o(`dropdown-menu`, `pointer-events: all;`)]), o(`dropdown-offset-container`, `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), o(`dropdown-divider`, `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), o(`dropdown-menu-wrapper`, `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), m(`>`, [o(`scrollbar`, `
 height: inherit;
 max-height: inherit;
 `)]), l(`scrollable`, `
 padding: var(--n-padding);
 `), d(`scrollable`, [p(`content`, `
 padding: var(--n-padding);
 `)])]), ze = { animated: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, size: { type: String, default: `medium` }, inverted: Boolean, placement: { type: String, default: `bottom` }, onSelect: [Function, Array], options: { type: Array, default: () => [] }, menuProps: Function, showArrow: Boolean, renderLabel: Function, renderIcon: Function, renderOption: Function, nodeProps: Function, labelField: { type: String, default: `label` }, keyField: { type: String, default: `key` }, childrenField: { type: String, default: `children` }, value: [String, Number] }, Be = Object.keys(j), Ve = V({ name: `Dropdown`, inheritAttrs: false, props: Object.assign(Object.assign(Object.assign({}, j), ze), s.props), setup(e2) {
  let r2 = L(false), a2 = ee(R(e2, `show`), r2), o2 = z(() => {
    let { keyField: t2, childrenField: n2 } = e2;
    return le(e2.options, { getKey(e3) {
      return e3[t2];
    }, getDisabled(e3) {
      return e3.disabled === true;
    }, getIgnored(e3) {
      return e3.type === `divider` || e3.type === `render`;
    }, getChildren(e3) {
      return e3[n2];
    } });
  }), l2 = z(() => o2.value.treeNodes), u2 = L(null), d2 = L(null), f2 = L(null), p2 = z(() => u2.value ?? d2.value ?? f2.value ?? null), m2 = z(() => o2.value.getPath(p2.value).keyPath), g2 = z(() => o2.value.getPath(e2.value).keyPath), _2 = t(() => e2.keyboard && a2.value);
  ve({ keydown: { ArrowUp: { prevent: true, handler: D2 }, ArrowRight: { prevent: true, handler: E2 }, ArrowDown: { prevent: true, handler: O2 }, ArrowLeft: { prevent: true, handler: T2 }, Enter: { prevent: true, handler: k2 }, Escape: w2 } }, _2);
  let { mergedClsPrefixRef: v2, inlineThemeDisabled: y2 } = h(e2), b2 = s(`Dropdown`, `-dropdown`, Re, X, e2, v2);
  N(Q, { labelFieldRef: R(e2, `labelField`), childrenFieldRef: R(e2, `childrenField`), renderLabelRef: R(e2, `renderLabel`), renderIconRef: R(e2, `renderIcon`), hoverKeyRef: u2, keyboardKeyRef: d2, lastToggledSubmenuKeyRef: f2, pendingKeyPathRef: m2, activeKeyPathRef: g2, animatedRef: R(e2, `animated`), mergedShowRef: a2, nodePropsRef: R(e2, `nodeProps`), renderOptionRef: R(e2, `renderOption`), menuPropsRef: R(e2, `menuProps`), doSelect: x2, doUpdateShow: S2 }), F(a2, (t2) => {
    !e2.animated && !t2 && C2();
  });
  function x2(t2, r3) {
    let { onSelect: i2 } = e2;
    i2 && n(i2, t2, r3);
  }
  function S2(t2) {
    let { "onUpdate:show": i2, onUpdateShow: a3 } = e2;
    i2 && n(i2, t2), a3 && n(a3, t2), r2.value = t2;
  }
  function C2() {
    u2.value = null, d2.value = null, f2.value = null;
  }
  function w2() {
    S2(false);
  }
  function T2() {
    j2(`left`);
  }
  function E2() {
    j2(`right`);
  }
  function D2() {
    j2(`up`);
  }
  function O2() {
    j2(`down`);
  }
  function k2() {
    let e3 = A2();
    (e3 == null ? void 0 : e3.isLeaf) && a2.value && (x2(e3.key, e3.rawNode), S2(false));
  }
  function A2() {
    let { value: e3 } = o2, { value: t2 } = p2;
    return !e3 || t2 === null ? null : e3.getNode(t2) ?? null;
  }
  function j2(e3) {
    let { value: t2 } = p2, { value: { getFirstAvailableNode: n2 } } = o2, r3 = null;
    if (t2 === null) {
      let e4 = n2();
      e4 !== null && (r3 = e4.key);
    } else {
      let t3 = A2();
      if (t3) {
        let n3;
        switch (e3) {
          case `down`:
            n3 = t3.getNext();
            break;
          case `up`:
            n3 = t3.getPrev();
            break;
          case `right`:
            n3 = t3.getChild();
            break;
          case `left`:
            n3 = t3.getParent();
            break;
        }
        n3 && (r3 = n3.key);
      }
    }
    r3 !== null && (u2.value = null, d2.value = r3);
  }
  let M2 = z(() => {
    let { size: t2, inverted: n2 } = e2, { common: { cubicBezierEaseInOut: r3 }, self: i2 } = b2.value, { padding: a3, dividerColor: o3, borderRadius: s2, optionOpacityDisabled: l3, [c(`optionIconSuffixWidth`, t2)]: u3, [c(`optionSuffixWidth`, t2)]: d3, [c(`optionIconPrefixWidth`, t2)]: f3, [c(`optionPrefixWidth`, t2)]: p3, [c(`fontSize`, t2)]: m3, [c(`optionHeight`, t2)]: h2, [c(`optionIconSize`, t2)]: g3 } = i2, _3 = { "--n-bezier": r3, "--n-font-size": m3, "--n-padding": a3, "--n-border-radius": s2, "--n-option-height": h2, "--n-option-prefix-width": p3, "--n-option-icon-prefix-width": f3, "--n-option-suffix-width": d3, "--n-option-icon-suffix-width": u3, "--n-option-icon-size": g3, "--n-divider-color": o3, "--n-option-opacity-disabled": l3 };
    return n2 ? (_3[`--n-color`] = i2.colorInverted, _3[`--n-option-color-hover`] = i2.optionColorHoverInverted, _3[`--n-option-color-active`] = i2.optionColorActiveInverted, _3[`--n-option-text-color`] = i2.optionTextColorInverted, _3[`--n-option-text-color-hover`] = i2.optionTextColorHoverInverted, _3[`--n-option-text-color-active`] = i2.optionTextColorActiveInverted, _3[`--n-option-text-color-child-active`] = i2.optionTextColorChildActiveInverted, _3[`--n-prefix-color`] = i2.prefixColorInverted, _3[`--n-suffix-color`] = i2.suffixColorInverted, _3[`--n-group-header-text-color`] = i2.groupHeaderTextColorInverted) : (_3[`--n-color`] = i2.color, _3[`--n-option-color-hover`] = i2.optionColorHover, _3[`--n-option-color-active`] = i2.optionColorActive, _3[`--n-option-text-color`] = i2.optionTextColor, _3[`--n-option-text-color-hover`] = i2.optionTextColorHover, _3[`--n-option-text-color-active`] = i2.optionTextColorActive, _3[`--n-option-text-color-child-active`] = i2.optionTextColorChildActive, _3[`--n-prefix-color`] = i2.prefixColor, _3[`--n-suffix-color`] = i2.suffixColor, _3[`--n-group-header-text-color`] = i2.groupHeaderTextColor), _3;
  }), P2 = y2 ? i(`dropdown`, z(() => `${e2.size[0]}${e2.inverted ? `i` : ``}`), M2, e2) : void 0;
  return { mergedClsPrefix: v2, mergedTheme: b2, tmNodes: l2, mergedShow: a2, handleAfterLeave: () => {
    e2.animated && C2();
  }, doUpdateShow: S2, cssVars: y2 ? void 0 : M2, themeClass: P2 == null ? void 0 : P2.themeClass, onRender: P2 == null ? void 0 : P2.onRender };
}, render() {
  let e2 = (e3, t3, n3, r2, i2) => {
    var a2;
    let { mergedClsPrefix: o2, menuProps: s2 } = this;
    (a2 = this.onRender) == null || a2.call(this);
    let c2 = (s2 == null ? void 0 : s2(void 0, this.tmNodes.map((e4) => e4.rawNode))) || {}, l2 = { ref: W(t3), class: [e3, `${o2}-dropdown`, this.themeClass], clsPrefix: o2, tmNodes: this.tmNodes, style: [...n3, this.cssVars], showArrow: this.showArrow, arrowStyle: this.arrowStyle, scrollable: this.scrollable, onMouseenter: r2, onMouseleave: i2 };
    return P(Le, B(this.$attrs, l2, c2));
  }, { mergedTheme: t2 } = this, n2 = { show: this.mergedShow, theme: t2.peers.Popover, themeOverrides: t2.peerOverrides.Popover, internalOnAfterLeave: this.handleAfterLeave, internalRenderBody: e2, onUpdateShow: this.doUpdateShow, "onUpdate:show": void 0 };
  return P(k, Object.assign({}, w(this.$props, Be), n2), { trigger: () => {
    var _a;
    var e3;
    return (_a = (e3 = this.$slots).default) == null ? void 0 : _a.call(e3);
  } });
} });
export {
  we as a,
  q as c,
  W as d,
  X as i,
  K as l,
  De as n,
  Y as o,
  Ee as r,
  J as s,
  Ve as t,
  G as u
};
