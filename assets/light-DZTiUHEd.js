import { L as e, R as t, bt as n, d as r, i, j as a, o, v as s, x as c, xt as l, z as u } from "./Card-nhqq8IKa.js";
import { i as d, l as f, n as p, p as m } from "./Tooltip-DGge0ha1.js";
import { Bt as h, Et as g, Ot as _, gt as v, tn as y, wt as b } from "./index-DTVnoW_1.js";
import { D as x, M as ee, S as te, c as ne, f as re, i as ie, o as ae, p as oe, r as se, s as ce, u as le } from "./sketch-store-CoKve6q-.js";
import { c as ue, i as S, l as C, n as de, o as fe } from "./Dropdown-dlLCnzPd.js";
import { c as pe, f as w, i as me, o as he, u as T } from "./storage-DsEl3RSe.js";
import { r as E } from "./Button-o58fM-RZ.js";
import { r as ge, t as _e } from "./light-DZsVD2j_.js";
import { t as ve } from "./light-BmapGxr9.js";
import { r as D, t as ye } from "./light-CQB9eEMb.js";
import { i as be, n as xe, o as Se, t as Ce } from "./light-Ru6mz35d.js";
import { t as we } from "./light-CRdznqhu.js";
import { n as Te } from "./settings-store-NEXTm_Ep.js";
import { n as Ee } from "./Icon-y0y4QmKo.js";
import { t as De } from "./light-ByENEBpl.js";
import { t as Oe } from "./light-ClCXo0GD.js";
import { t as ke } from "./light-DVAUVx3a.js";
function O(e2) {
  let { boxShadow2: t2 } = e2;
  return { menuBoxShadow: t2 };
}
var Ae = r({ name: `AutoComplete`, common: o, peers: { InternalSelectMenu: T, Input: D }, self: O });
function k(e2) {
  let { borderRadius: t2, avatarColor: n2, cardColor: r2, fontSize: i2, heightTiny: a2, heightSmall: o2, heightMedium: s2, heightLarge: c2, heightHuge: l2, modalColor: d2, popoverColor: f2 } = e2;
  return { borderRadius: t2, fontSize: i2, border: `2px solid ${r2}`, heightTiny: a2, heightSmall: o2, heightMedium: s2, heightLarge: c2, heightHuge: l2, color: u(r2, n2), colorModal: u(d2, n2), colorPopover: u(f2, n2) };
}
var A = { name: `Avatar`, common: o, self: k };
function j() {
  return { gap: `-12px` };
}
var je = r({ name: `AvatarGroup`, common: o, peers: { Avatar: A }, self: j }), M = { width: `44px`, height: `44px`, borderRadius: `22px`, iconSize: `26px` };
function Me(e2) {
  let { popoverColor: t2, textColor2: n2, primaryColorHover: r2, primaryColorPressed: i2 } = e2;
  return Object.assign(Object.assign({}, M), { color: t2, textColor: n2, iconColor: n2, iconColorHover: r2, iconColorPressed: i2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .12)`, boxShadowHover: `0 2px 12px 0px rgba(0, 0, 0, .18)`, boxShadowPressed: `0 2px 12px 0px rgba(0, 0, 0, .18)` });
}
var Ne = { name: `BackTop`, common: o, self: Me };
function Pe(e2) {
  let { errorColor: t2, infoColor: n2, successColor: r2, warningColor: i2, fontFamily: a2 } = e2;
  return { color: t2, colorInfo: n2, colorSuccess: r2, colorError: t2, colorWarning: i2, fontSize: `12px`, fontFamily: a2 };
}
var Fe = { name: `Badge`, common: o, self: Pe }, Ie = { fontWeightActive: `400` };
function N(e2) {
  let { fontSize: t2, textColor3: n2, textColor2: r2, borderRadius: i2, buttonColor2Hover: a2, buttonColor2Pressed: o2 } = e2;
  return Object.assign(Object.assign({}, Ie), { fontSize: t2, itemLineHeight: `1.25`, itemTextColor: n2, itemTextColorHover: r2, itemTextColorPressed: r2, itemTextColorActive: r2, itemBorderRadius: i2, itemColorHover: a2, itemColorPressed: o2, separatorColor: n2 });
}
var Le = { name: `Breadcrumb`, common: o, self: N }, Re = { titleFontSize: `22px` };
function P(e2) {
  let { borderRadius: t2, fontSize: n2, lineHeight: r2, textColor2: i2, textColor1: a2, textColorDisabled: o2, dividerColor: s2, fontWeightStrong: c2, primaryColor: l2, baseColor: d2, hoverColor: f2, cardColor: p2, modalColor: m2, popoverColor: h2 } = e2;
  return Object.assign(Object.assign({}, Re), { borderRadius: t2, borderColor: u(p2, s2), borderColorModal: u(m2, s2), borderColorPopover: u(h2, s2), textColor: i2, titleFontWeight: c2, titleTextColor: a2, dayTextColor: o2, fontSize: n2, lineHeight: r2, dateColorCurrent: l2, dateTextColorCurrent: d2, cellColorHover: u(p2, f2), cellColorHoverModal: u(m2, f2), cellColorHoverPopover: u(h2, f2), cellColor: p2, cellColorModal: m2, cellColorPopover: h2, barColor: l2 });
}
var ze = r({ name: `Calendar`, common: o, peers: { Button: E }, self: P });
function F() {
  return { dotSize: `8px`, dotColor: `rgba(255, 255, 255, .3)`, dotColorActive: `rgba(255, 255, 255, 1)`, dotColorFocus: `rgba(255, 255, 255, .5)`, dotLineWidth: `16px`, dotLineWidthActive: `24px`, arrowColor: `#eee` };
}
var Be = { name: `Carousel`, common: o, self: F };
function I(e2) {
  let { borderRadius: t2, boxShadow2: n2, popoverColor: r2, textColor2: i2, textColor3: a2, primaryColor: o2, textColorDisabled: s2, dividerColor: c2, hoverColor: l2, fontSizeMedium: u2, heightMedium: d2 } = e2;
  return { menuBorderRadius: t2, menuColor: r2, menuBoxShadow: n2, menuDividerColor: c2, menuHeight: `calc(var(--n-option-height) * 6.6)`, optionArrowColor: a2, optionHeight: d2, optionFontSize: u2, optionColorHover: l2, optionTextColor: i2, optionTextColorActive: o2, optionTextColorDisabled: s2, optionCheckMarkColor: o2, loadingColor: o2, columnWidth: `180px` };
}
var Ve = r({ name: `Cascader`, common: o, peers: { InternalSelectMenu: T, InternalSelection: pe, Scrollbar: m, Checkbox: C, Empty: w }, self: I });
function L(e2) {
  let { cubicBezierEaseInOut: t2 } = e2;
  return { bezier: t2 };
}
var He = { name: `CollapseTransition`, common: o, self: L }, Ue = b({ name: `ConfigProvider`, alias: [`App`], props: { abstract: Boolean, bordered: { type: Boolean, default: void 0 }, clsPrefix: String, locale: Object, dateLocale: Object, namespace: String, rtl: Array, tag: { type: String, default: `div` }, hljs: Object, katex: Object, theme: Object, themeOverrides: Object, componentOptions: Object, icons: Object, breakpoints: Object, preflightStyleDisabled: Boolean, styleMountTarget: Object, inlineThemeDisabled: { type: Boolean, default: void 0 }, as: { type: String, validator: () => (a(`config-provider`, "`as` is deprecated, please use `tag` instead."), true), default: void 0 } }, setup(t2) {
  let r2 = _(c, null), i2 = v(() => {
    let { theme: e2 } = t2;
    if (e2 === null) return;
    let n2 = r2 == null ? void 0 : r2.mergedThemeRef.value;
    return e2 === void 0 ? n2 : n2 === void 0 ? e2 : Object.assign({}, n2, e2);
  }), a2 = v(() => {
    let { themeOverrides: e2 } = t2;
    if (e2 !== null) {
      if (e2 === void 0) return r2 == null ? void 0 : r2.mergedThemeOverridesRef.value;
      {
        let t3 = r2 == null ? void 0 : r2.mergedThemeOverridesRef.value;
        return t3 === void 0 ? e2 : l({}, t3, e2);
      }
    }
  }), o2 = e(() => {
    let { namespace: e2 } = t2;
    return e2 === void 0 ? r2 == null ? void 0 : r2.mergedNamespaceRef.value : e2;
  }), s2 = e(() => {
    let { bordered: e2 } = t2;
    return e2 === void 0 ? r2 == null ? void 0 : r2.mergedBorderedRef.value : e2;
  }), u2 = v(() => {
    let { icons: e2 } = t2;
    return e2 === void 0 ? r2 == null ? void 0 : r2.mergedIconsRef.value : e2;
  }), d2 = v(() => {
    let { componentOptions: e2 } = t2;
    return e2 === void 0 ? r2 == null ? void 0 : r2.mergedComponentPropsRef.value : e2;
  }), f2 = v(() => {
    let { clsPrefix: e2 } = t2;
    return e2 === void 0 ? r2 ? r2.mergedClsPrefixRef.value : `n` : e2;
  }), p2 = v(() => {
    var e2;
    let { rtl: n2 } = t2;
    if (n2 === void 0) return r2 == null ? void 0 : r2.mergedRtlRef.value;
    let i3 = {};
    for (let t3 of n2) i3[t3.name] = y(t3), (e2 = t3.peers) == null || e2.forEach((e3) => {
      e3.name in i3 || (i3[e3.name] = y(e3));
    });
    return i3;
  }), m2 = v(() => t2.breakpoints || (r2 == null ? void 0 : r2.mergedBreakpointsRef.value)), g2 = t2.inlineThemeDisabled || (r2 == null ? void 0 : r2.inlineThemeDisabled), b2 = t2.preflightStyleDisabled || (r2 == null ? void 0 : r2.preflightStyleDisabled), x2 = t2.styleMountTarget || (r2 == null ? void 0 : r2.styleMountTarget);
  return h(c, { mergedThemeHashRef: v(() => {
    let { value: e2 } = i2, { value: t3 } = a2, r3 = t3 && Object.keys(t3).length !== 0, o3 = e2 == null ? void 0 : e2.name;
    return o3 ? r3 ? `${o3}-${n(JSON.stringify(a2.value))}` : o3 : r3 ? n(JSON.stringify(a2.value)) : ``;
  }), mergedBreakpointsRef: m2, mergedRtlRef: p2, mergedIconsRef: u2, mergedComponentPropsRef: d2, mergedBorderedRef: s2, mergedNamespaceRef: o2, mergedClsPrefixRef: f2, mergedLocaleRef: v(() => {
    let { locale: e2 } = t2;
    if (e2 !== null) return e2 === void 0 ? r2 == null ? void 0 : r2.mergedLocaleRef.value : e2;
  }), mergedDateLocaleRef: v(() => {
    let { dateLocale: e2 } = t2;
    if (e2 !== null) return e2 === void 0 ? r2 == null ? void 0 : r2.mergedDateLocaleRef.value : e2;
  }), mergedHljsRef: v(() => {
    let { hljs: e2 } = t2;
    return e2 === void 0 ? r2 == null ? void 0 : r2.mergedHljsRef.value : e2;
  }), mergedKatexRef: v(() => {
    let { katex: e2 } = t2;
    return e2 === void 0 ? r2 == null ? void 0 : r2.mergedKatexRef.value : e2;
  }), mergedThemeRef: i2, mergedThemeOverridesRef: a2, inlineThemeDisabled: g2 || false, preflightStyleDisabled: b2 || false, styleMountTarget: x2 }), { mergedClsPrefix: f2, mergedBordered: s2, mergedNamespace: o2, mergedTheme: i2, mergedThemeOverrides: a2 };
}, render() {
  var _a, _b;
  var e2, t2;
  return this.abstract ? (_a = (t2 = this.$slots).default) == null ? void 0 : _a.call(t2) : g(this.as || this.tag, { class: `${this.mergedClsPrefix || `n`}-config-provider` }, (_b = (e2 = this.$slots).default) == null ? void 0 : _b.call(e2));
} }), We = { itemFontSize: `12px`, itemHeight: `36px`, itemWidth: `52px`, panelActionPadding: `8px 0` };
function R(e2) {
  let { popoverColor: t2, textColor2: n2, primaryColor: r2, hoverColor: i2, dividerColor: a2, opacityDisabled: o2, boxShadow2: s2, borderRadius: c2, iconColor: l2, iconColorDisabled: u2 } = e2;
  return Object.assign(Object.assign({}, We), { panelColor: t2, panelBoxShadow: s2, panelDividerColor: a2, itemTextColor: n2, itemTextColorActive: r2, itemColorHover: i2, itemOpacityDisabled: o2, itemBorderRadius: c2, borderRadius: c2, iconColor: l2, iconColorDisabled: u2 });
}
var z = r({ name: `TimePicker`, common: o, peers: { Scrollbar: m, Button: E, Input: D }, self: R }), Ge = { itemSize: `24px`, itemCellWidth: `38px`, itemCellHeight: `32px`, scrollItemWidth: `80px`, scrollItemHeight: `40px`, panelExtraFooterPadding: `8px 12px`, panelActionPadding: `8px 12px`, calendarTitlePadding: `0`, calendarTitleHeight: `28px`, arrowSize: `14px`, panelHeaderPadding: `8px 12px`, calendarDaysHeight: `32px`, calendarTitleGridTempateColumns: `28px 28px 1fr 28px 28px`, calendarLeftPaddingDate: `6px 12px 4px 12px`, calendarLeftPaddingDatetime: `4px 12px`, calendarLeftPaddingDaterange: `6px 12px 4px 12px`, calendarLeftPaddingDatetimerange: `4px 12px`, calendarLeftPaddingMonth: `0`, calendarLeftPaddingYear: `0`, calendarLeftPaddingQuarter: `0`, calendarLeftPaddingMonthrange: `0`, calendarLeftPaddingQuarterrange: `0`, calendarLeftPaddingYearrange: `0`, calendarLeftPaddingWeek: `6px 12px 4px 12px`, calendarRightPaddingDate: `6px 12px 4px 12px`, calendarRightPaddingDatetime: `4px 12px`, calendarRightPaddingDaterange: `6px 12px 4px 12px`, calendarRightPaddingDatetimerange: `4px 12px`, calendarRightPaddingMonth: `0`, calendarRightPaddingYear: `0`, calendarRightPaddingQuarter: `0`, calendarRightPaddingMonthrange: `0`, calendarRightPaddingQuarterrange: `0`, calendarRightPaddingYearrange: `0`, calendarRightPaddingWeek: `0` };
function B(e2) {
  let { hoverColor: n2, fontSize: r2, textColor2: i2, textColorDisabled: a2, popoverColor: o2, primaryColor: s2, borderRadiusSmall: c2, iconColor: l2, iconColorDisabled: u2, textColor1: d2, dividerColor: f2, boxShadow2: p2, borderRadius: m2, fontWeightStrong: h2 } = e2;
  return Object.assign(Object.assign({}, Ge), { itemFontSize: r2, calendarDaysFontSize: r2, calendarTitleFontSize: r2, itemTextColor: i2, itemTextColorDisabled: a2, itemTextColorActive: o2, itemTextColorCurrent: s2, itemColorIncluded: t(s2, { alpha: 0.1 }), itemColorHover: n2, itemColorDisabled: n2, itemColorActive: s2, itemBorderRadius: c2, panelColor: o2, panelTextColor: i2, arrowColor: l2, calendarTitleTextColor: d2, calendarTitleColorHover: n2, calendarDaysTextColor: i2, panelHeaderDividerColor: f2, calendarDaysDividerColor: f2, calendarDividerColor: f2, panelActionDividerColor: f2, panelBoxShadow: p2, panelBorderRadius: m2, calendarTitleFontWeight: h2, scrollItemBorderRadius: m2, iconColor: l2, iconColorDisabled: u2 });
}
var Ke = r({ name: `DatePicker`, common: o, peers: { Input: D, Button: E, TimePicker: z, Scrollbar: m }, self: B }), qe = { thPaddingBorderedSmall: `8px 12px`, thPaddingBorderedMedium: `12px 16px`, thPaddingBorderedLarge: `16px 24px`, thPaddingSmall: `0`, thPaddingMedium: `0`, thPaddingLarge: `0`, tdPaddingBorderedSmall: `8px 12px`, tdPaddingBorderedMedium: `12px 16px`, tdPaddingBorderedLarge: `16px 24px`, tdPaddingSmall: `0 0 8px 0`, tdPaddingMedium: `0 0 12px 0`, tdPaddingLarge: `0 0 16px 0` };
function V(e2) {
  let { tableHeaderColor: t2, textColor2: n2, textColor1: r2, cardColor: i2, modalColor: a2, popoverColor: o2, dividerColor: s2, borderRadius: c2, fontWeightStrong: l2, lineHeight: d2, fontSizeSmall: f2, fontSizeMedium: p2, fontSizeLarge: m2 } = e2;
  return Object.assign(Object.assign({}, qe), { lineHeight: d2, fontSizeSmall: f2, fontSizeMedium: p2, fontSizeLarge: m2, titleTextColor: r2, thColor: u(i2, t2), thColorModal: u(a2, t2), thColorPopover: u(o2, t2), thTextColor: r2, thFontWeight: l2, tdTextColor: n2, tdColor: i2, tdColorModal: a2, tdColorPopover: o2, borderColor: u(i2, s2), borderColorModal: u(a2, s2), borderColorPopover: u(o2, s2), borderRadius: c2 });
}
var Je = { name: `Descriptions`, common: o, self: V };
function Ye(e2) {
  let { primaryColor: t2, errorColor: n2 } = e2;
  return { colorError: n2, colorLoading: t2, height: `2px` };
}
var Xe = { name: `LoadingBar`, common: o, self: Ye }, Ze = { margin: `0 0 8px 0`, padding: `10px 20px`, maxWidth: `720px`, minWidth: `420px`, iconMargin: `0 10px 0 0`, closeMargin: `0 0 0 10px`, closeSize: `20px`, closeIconSize: `16px`, iconSize: `20px`, fontSize: `14px` };
function H(e2) {
  let { textColor2: t2, closeIconColor: n2, closeIconColorHover: r2, closeIconColorPressed: i2, infoColor: a2, successColor: o2, errorColor: s2, warningColor: c2, popoverColor: l2, boxShadow2: u2, primaryColor: d2, lineHeight: f2, borderRadius: p2, closeColorHover: m2, closeColorPressed: h2 } = e2;
  return Object.assign(Object.assign({}, Ze), { closeBorderRadius: p2, textColor: t2, textColorInfo: t2, textColorSuccess: t2, textColorError: t2, textColorWarning: t2, textColorLoading: t2, color: l2, colorInfo: l2, colorSuccess: l2, colorError: l2, colorWarning: l2, colorLoading: l2, boxShadow: u2, boxShadowInfo: u2, boxShadowSuccess: u2, boxShadowError: u2, boxShadowWarning: u2, boxShadowLoading: u2, iconColor: t2, iconColorInfo: a2, iconColorSuccess: o2, iconColorWarning: c2, iconColorError: s2, iconColorLoading: d2, closeColorHover: m2, closeColorPressed: h2, closeIconColor: n2, closeIconColorHover: r2, closeIconColorPressed: i2, closeColorHoverInfo: m2, closeColorPressedInfo: h2, closeIconColorInfo: n2, closeIconColorHoverInfo: r2, closeIconColorPressedInfo: i2, closeColorHoverSuccess: m2, closeColorPressedSuccess: h2, closeIconColorSuccess: n2, closeIconColorHoverSuccess: r2, closeIconColorPressedSuccess: i2, closeColorHoverError: m2, closeColorPressedError: h2, closeIconColorError: n2, closeIconColorHoverError: r2, closeIconColorPressedError: i2, closeColorHoverWarning: m2, closeColorPressedWarning: h2, closeIconColorWarning: n2, closeIconColorHoverWarning: r2, closeIconColorPressedWarning: i2, closeColorHoverLoading: m2, closeColorPressedLoading: h2, closeIconColorLoading: n2, closeIconColorHoverLoading: r2, closeIconColorPressedLoading: i2, loadingColor: d2, lineHeight: f2, borderRadius: p2, border: `0` });
}
var U = { name: `Message`, common: o, self: H }, Qe = { closeMargin: `16px 12px`, closeSize: `20px`, closeIconSize: `16px`, width: `365px`, padding: `16px`, titleFontSize: `16px`, metaFontSize: `12px`, descriptionFontSize: `12px` };
function W(e2) {
  let { textColor2: t2, successColor: n2, infoColor: r2, warningColor: i2, errorColor: a2, popoverColor: o2, closeIconColor: s2, closeIconColorHover: c2, closeIconColorPressed: l2, closeColorHover: u2, closeColorPressed: d2, textColor1: f2, textColor3: p2, borderRadius: m2, fontWeightStrong: h2, boxShadow2: g2, lineHeight: _2, fontSize: v2 } = e2;
  return Object.assign(Object.assign({}, Qe), { borderRadius: m2, lineHeight: _2, fontSize: v2, headerFontWeight: h2, iconColor: t2, iconColorSuccess: n2, iconColorInfo: r2, iconColorWarning: i2, iconColorError: a2, color: o2, textColor: t2, closeIconColor: s2, closeIconColorHover: c2, closeIconColorPressed: l2, closeBorderRadius: m2, closeColorHover: u2, closeColorPressed: d2, headerTextColor: f2, descriptionTextColor: p2, actionTextColor: t2, boxShadow: g2 });
}
var $e = r({ name: `Notification`, common: o, peers: { Scrollbar: m }, self: W }), G = { actionMargin: `0 0 0 20px`, actionMarginRtl: `0 20px 0 0` };
function et() {
  return G;
}
var tt = r({ name: `DynamicInput`, common: o, peers: { Input: D, Button: E }, self: et }), nt = { name: `Element`, common: o }, rt = { name: `ButtonGroup`, common: o };
function it(e2) {
  let { primaryColor: n2, successColor: r2, warningColor: i2, errorColor: a2, infoColor: o2, fontWeightStrong: s2 } = e2;
  return { fontWeight: s2, rotate: `252deg`, colorStartPrimary: t(n2, { alpha: 0.6 }), colorEndPrimary: n2, colorStartInfo: t(o2, { alpha: 0.6 }), colorEndInfo: o2, colorStartWarning: t(i2, { alpha: 0.6 }), colorEndWarning: i2, colorStartError: t(a2, { alpha: 0.6 }), colorEndError: a2, colorStartSuccess: t(r2, { alpha: 0.6 }), colorEndSuccess: r2 };
}
var at = { name: `GradientText`, common: o, self: it };
function K() {
  return { inputWidthSmall: `24px`, inputWidthMedium: `30px`, inputWidthLarge: `36px`, gapSmall: `8px`, gapMedium: `8px`, gapLarge: `8px` };
}
var ot = r({ name: `InputOtp`, common: o, peers: { Input: D }, self: K }), st = { name: `Row`, common: o };
function ct(e2) {
  let { textColor2: t2, modalColor: n2, borderColor: r2, fontSize: i2, primaryColor: a2 } = e2;
  return { loaderFontSize: i2, loaderTextColor: t2, loaderColor: n2, loaderBorder: `1px solid ${r2}`, loadingColor: a2 };
}
var lt = r({ name: `Log`, common: o, peers: { Scrollbar: m, Code: Se }, self: ct });
function ut(e2) {
  let { boxShadow2: t2 } = e2;
  return { menuBoxShadow: t2 };
}
var dt = r({ name: `Mention`, common: o, peers: { InternalSelectMenu: T, Input: D }, self: ut });
function ft(e2, t2, n2, r2) {
  return { itemColorHoverInverted: `#0000`, itemColorActiveInverted: t2, itemColorActiveHoverInverted: t2, itemColorActiveCollapsedInverted: t2, itemTextColorInverted: e2, itemTextColorHoverInverted: n2, itemTextColorChildActiveInverted: n2, itemTextColorChildActiveHoverInverted: n2, itemTextColorActiveInverted: n2, itemTextColorActiveHoverInverted: n2, itemTextColorHorizontalInverted: e2, itemTextColorHoverHorizontalInverted: n2, itemTextColorChildActiveHorizontalInverted: n2, itemTextColorChildActiveHoverHorizontalInverted: n2, itemTextColorActiveHorizontalInverted: n2, itemTextColorActiveHoverHorizontalInverted: n2, itemIconColorInverted: e2, itemIconColorHoverInverted: n2, itemIconColorActiveInverted: n2, itemIconColorActiveHoverInverted: n2, itemIconColorChildActiveInverted: n2, itemIconColorChildActiveHoverInverted: n2, itemIconColorCollapsedInverted: e2, itemIconColorHorizontalInverted: e2, itemIconColorHoverHorizontalInverted: n2, itemIconColorActiveHorizontalInverted: n2, itemIconColorActiveHoverHorizontalInverted: n2, itemIconColorChildActiveHorizontalInverted: n2, itemIconColorChildActiveHoverHorizontalInverted: n2, arrowColorInverted: e2, arrowColorHoverInverted: n2, arrowColorActiveInverted: n2, arrowColorActiveHoverInverted: n2, arrowColorChildActiveInverted: n2, arrowColorChildActiveHoverInverted: n2, groupTextColorInverted: r2 };
}
function q(e2) {
  let { borderRadius: n2, textColor3: r2, primaryColor: i2, textColor2: a2, textColor1: o2, fontSize: s2, dividerColor: c2, hoverColor: l2, primaryColorHover: u2 } = e2;
  return Object.assign({ borderRadius: n2, color: `#0000`, groupTextColor: r2, itemColorHover: l2, itemColorActive: t(i2, { alpha: 0.1 }), itemColorActiveHover: t(i2, { alpha: 0.1 }), itemColorActiveCollapsed: t(i2, { alpha: 0.1 }), itemTextColor: a2, itemTextColorHover: a2, itemTextColorActive: i2, itemTextColorActiveHover: i2, itemTextColorChildActive: i2, itemTextColorChildActiveHover: i2, itemTextColorHorizontal: a2, itemTextColorHoverHorizontal: u2, itemTextColorActiveHorizontal: i2, itemTextColorActiveHoverHorizontal: i2, itemTextColorChildActiveHorizontal: i2, itemTextColorChildActiveHoverHorizontal: i2, itemIconColor: o2, itemIconColorHover: o2, itemIconColorActive: i2, itemIconColorActiveHover: i2, itemIconColorChildActive: i2, itemIconColorChildActiveHover: i2, itemIconColorCollapsed: o2, itemIconColorHorizontal: o2, itemIconColorHoverHorizontal: u2, itemIconColorActiveHorizontal: i2, itemIconColorActiveHoverHorizontal: i2, itemIconColorChildActiveHorizontal: i2, itemIconColorChildActiveHoverHorizontal: i2, itemHeight: `42px`, arrowColor: a2, arrowColorHover: a2, arrowColorActive: i2, arrowColorActiveHover: i2, arrowColorChildActive: i2, arrowColorChildActiveHover: i2, colorInverted: `#0000`, borderColorHorizontal: `#0000`, fontSize: s2, dividerColor: c2 }, ft(`#BBB`, i2, `#FFF`, `#AAA`));
}
var pt = r({ name: `Menu`, common: o, peers: { Tooltip: p, Dropdown: S }, self: q }), mt = { titleFontSize: `18px`, backSize: `22px` };
function J(e2) {
  let { textColor1: t2, textColor2: n2, textColor3: r2, fontSize: i2, fontWeightStrong: a2, primaryColorHover: o2, primaryColorPressed: s2 } = e2;
  return Object.assign(Object.assign({}, mt), { titleFontWeight: a2, fontSize: i2, titleTextColor: t2, backColor: n2, backColorHover: o2, backColorPressed: s2, subtitleTextColor: r2 });
}
const ht = r({ name: `PageHeader`, common: o, self: J });
function Y(e2) {
  let { infoColor: t2, successColor: n2, warningColor: r2, errorColor: i2, textColor2: a2, progressRailColor: o2, fontSize: s2, fontWeight: c2 } = e2;
  return { fontSize: s2, fontSizeCircle: `28px`, fontWeightCircle: c2, railColor: o2, railHeight: `8px`, iconSizeCircle: `36px`, iconSizeLine: `18px`, iconColor: t2, iconColorInfo: t2, iconColorSuccess: n2, iconColorWarning: r2, iconColorError: i2, textColorCircle: a2, textColorLineInner: `rgb(255, 255, 255)`, textColorLineOuter: a2, fillColor: t2, fillColorInfo: t2, fillColorSuccess: n2, fillColorWarning: r2, fillColorError: i2, lineBgProcessing: `linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)` };
}
var X = { name: `Progress`, common: o, self: Y };
function gt(e2) {
  let { railColor: t2 } = e2;
  return { itemColor: t2, itemColorActive: `#FFCC33`, sizeSmall: `16px`, sizeMedium: `20px`, sizeLarge: `24px` };
}
var _t = { name: `Rate`, common: o, self: gt }, vt = { titleFontSizeSmall: `26px`, titleFontSizeMedium: `32px`, titleFontSizeLarge: `40px`, titleFontSizeHuge: `48px`, fontSizeSmall: `14px`, fontSizeMedium: `14px`, fontSizeLarge: `15px`, fontSizeHuge: `16px`, iconSizeSmall: `64px`, iconSizeMedium: `80px`, iconSizeLarge: `100px`, iconSizeHuge: `125px`, iconColor418: void 0, iconColor404: void 0, iconColor403: void 0, iconColor500: void 0 };
function Z(e2) {
  let { textColor2: t2, textColor1: n2, errorColor: r2, successColor: i2, infoColor: a2, warningColor: o2, lineHeight: s2, fontWeightStrong: c2 } = e2;
  return Object.assign(Object.assign({}, vt), { lineHeight: s2, titleFontWeight: c2, titleTextColor: n2, textColor: t2, iconColorError: r2, iconColorSuccess: i2, iconColorInfo: a2, iconColorWarning: o2 });
}
var yt = { name: `Result`, common: o, self: Z }, Q = { railHeight: `4px`, railWidthVertical: `4px`, handleSize: `18px`, dotHeight: `8px`, dotWidth: `8px`, dotBorderRadius: `4px` };
function bt(e2) {
  let { railColor: t2, primaryColor: n2, baseColor: r2, cardColor: i2, modalColor: a2, popoverColor: o2, borderRadius: s2, fontSize: c2, opacityDisabled: l2 } = e2;
  return Object.assign(Object.assign({}, Q), { fontSize: c2, markFontSize: c2, railColor: t2, railColorHover: t2, fillColor: n2, fillColorHover: n2, opacityDisabled: l2, handleColor: `#FFF`, dotColor: i2, dotColorModal: a2, dotColorPopover: o2, handleBoxShadow: `0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`, handleBoxShadowHover: `0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`, handleBoxShadowActive: `0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`, handleBoxShadowFocus: `0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`, indicatorColor: `rgba(0, 0, 0, .85)`, indicatorBoxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.12)`, indicatorTextColor: r2, indicatorBorderRadius: s2, dotBorder: `2px solid ${t2}`, dotBorderActive: `2px solid ${n2}`, dotBoxShadow: `` });
}
var xt = { name: `Slider`, common: o, self: bt };
function St(e2) {
  let { opacityDisabled: t2, heightTiny: n2, heightSmall: r2, heightMedium: i2, heightLarge: a2, heightHuge: o2, primaryColor: s2, fontSize: c2 } = e2;
  return { fontSize: c2, textColor: s2, sizeTiny: n2, sizeSmall: r2, sizeMedium: i2, sizeLarge: a2, sizeHuge: o2, color: s2, opacitySpinning: t2 };
}
var Ct = { name: `Spin`, common: o, self: St }, wt = { stepHeaderFontSizeSmall: `14px`, stepHeaderFontSizeMedium: `16px`, indicatorIndexFontSizeSmall: `14px`, indicatorIndexFontSizeMedium: `16px`, indicatorSizeSmall: `22px`, indicatorSizeMedium: `28px`, indicatorIconSizeSmall: `14px`, indicatorIconSizeMedium: `18px` };
function Tt(e2) {
  let { fontWeightStrong: t2, baseColor: n2, textColorDisabled: r2, primaryColor: i2, errorColor: a2, textColor1: o2, textColor2: s2 } = e2;
  return Object.assign(Object.assign({}, wt), { stepHeaderFontWeight: t2, indicatorTextColorProcess: n2, indicatorTextColorWait: r2, indicatorTextColorFinish: i2, indicatorTextColorError: a2, indicatorBorderColorProcess: i2, indicatorBorderColorWait: r2, indicatorBorderColorFinish: i2, indicatorBorderColorError: a2, indicatorColorProcess: i2, indicatorColorWait: `#0000`, indicatorColorFinish: `#0000`, indicatorColorError: `#0000`, splitorColorProcess: r2, splitorColorWait: r2, splitorColorFinish: i2, splitorColorError: r2, headerTextColorProcess: o2, headerTextColorWait: r2, headerTextColorFinish: r2, headerTextColorError: a2, descriptionTextColorProcess: s2, descriptionTextColorWait: r2, descriptionTextColorFinish: r2, descriptionTextColorError: a2 });
}
var Et = { name: `Steps`, common: o, self: Tt }, Dt = { thPaddingSmall: `6px`, thPaddingMedium: `12px`, thPaddingLarge: `12px`, tdPaddingSmall: `6px`, tdPaddingMedium: `12px`, tdPaddingLarge: `12px` };
function Ot(e2) {
  let { dividerColor: t2, cardColor: n2, modalColor: r2, popoverColor: i2, tableHeaderColor: a2, tableColorStriped: o2, textColor1: s2, textColor2: c2, borderRadius: l2, fontWeightStrong: d2, lineHeight: f2, fontSizeSmall: p2, fontSizeMedium: m2, fontSizeLarge: h2 } = e2;
  return Object.assign(Object.assign({}, Dt), { fontSizeSmall: p2, fontSizeMedium: m2, fontSizeLarge: h2, lineHeight: f2, borderRadius: l2, borderColor: u(n2, t2), borderColorModal: u(r2, t2), borderColorPopover: u(i2, t2), tdColor: n2, tdColorModal: r2, tdColorPopover: i2, tdColorStriped: u(n2, o2), tdColorStripedModal: u(r2, o2), tdColorStripedPopover: u(i2, o2), thColor: u(n2, a2), thColorModal: u(r2, a2), thColorPopover: u(i2, a2), thTextColor: s2, tdTextColor: c2, thFontWeight: d2 });
}
var kt = { name: `Table`, common: o, self: Ot };
function At(e2) {
  let { textColor1: t2, textColor2: n2, fontWeightStrong: r2, fontSize: i2 } = e2;
  return { fontSize: i2, titleTextColor: t2, textColor: n2, titleFontWeight: r2 };
}
var jt = { name: `Thing`, common: o, self: At }, Mt = { titleMarginMedium: `0 0 6px 0`, titleMarginLarge: `-2px 0 6px 0`, titleFontSizeMedium: `14px`, titleFontSizeLarge: `16px`, iconSizeMedium: `14px`, iconSizeLarge: `14px` };
function Nt(e2) {
  let { textColor3: t2, infoColor: n2, errorColor: r2, successColor: i2, warningColor: a2, textColor1: o2, textColor2: s2, railColor: c2, fontWeightStrong: l2, fontSize: u2 } = e2;
  return Object.assign(Object.assign({}, Mt), { contentFontSize: u2, titleFontWeight: l2, circleBorder: `2px solid ${t2}`, circleBorderInfo: `2px solid ${n2}`, circleBorderError: `2px solid ${r2}`, circleBorderSuccess: `2px solid ${i2}`, circleBorderWarning: `2px solid ${a2}`, iconColor: t2, iconColorInfo: n2, iconColorError: r2, iconColorSuccess: i2, iconColorWarning: a2, titleTextColor: o2, contentTextColor: s2, metaTextColor: t2, lineColor: c2 });
}
var Pt = { name: `Timeline`, common: o, self: Nt }, Ft = { extraFontSizeSmall: `12px`, extraFontSizeMedium: `12px`, extraFontSizeLarge: `14px`, titleFontSizeSmall: `14px`, titleFontSizeMedium: `16px`, titleFontSizeLarge: `16px`, closeSize: `20px`, closeIconSize: `16px`, headerHeightSmall: `44px`, headerHeightMedium: `44px`, headerHeightLarge: `50px` };
function It(e2) {
  let { fontWeight: t2, fontSizeLarge: n2, fontSizeMedium: r2, fontSizeSmall: i2, heightLarge: a2, heightMedium: o2, borderRadius: s2, cardColor: c2, tableHeaderColor: l2, textColor1: d2, textColorDisabled: f2, textColor2: p2, textColor3: m2, borderColor: h2, hoverColor: g2, closeColorHover: _2, closeColorPressed: v2, closeIconColor: y2, closeIconColorHover: b2, closeIconColorPressed: x2 } = e2;
  return Object.assign(Object.assign({}, Ft), { itemHeightSmall: o2, itemHeightMedium: o2, itemHeightLarge: a2, fontSizeSmall: i2, fontSizeMedium: r2, fontSizeLarge: n2, borderRadius: s2, dividerColor: h2, borderColor: h2, listColor: c2, headerColor: u(c2, l2), titleTextColor: d2, titleTextColorDisabled: f2, extraTextColor: m2, extraTextColorDisabled: f2, itemTextColor: p2, itemTextColorDisabled: f2, itemColorPending: g2, titleFontWeight: t2, closeColorHover: _2, closeColorPressed: v2, closeIconColor: y2, closeIconColorHover: b2, closeIconColorPressed: x2 });
}
var Lt = r({ name: `Transfer`, common: o, peers: { Checkbox: C, Scrollbar: m, Input: D, Empty: w, Button: E }, self: It });
function Rt(e2) {
  let { borderRadiusSmall: n2, dividerColor: r2, hoverColor: i2, pressedColor: a2, primaryColor: o2, textColor3: s2, textColor2: c2, textColorDisabled: l2, fontSize: u2 } = e2;
  return { fontSize: u2, lineHeight: `1.5`, nodeHeight: `30px`, nodeWrapperPadding: `3px 0`, nodeBorderRadius: n2, nodeColorHover: i2, nodeColorPressed: a2, nodeColorActive: t(o2, { alpha: 0.1 }), arrowColor: s2, nodeTextColor: c2, nodeTextColorDisabled: l2, loadingColor: o2, dropMarkColor: o2, lineColor: r2 };
}
var zt = r({ name: `Tree`, common: o, peers: { Checkbox: C, Scrollbar: m, Empty: w }, self: Rt });
function Bt(e2) {
  let { popoverColor: t2, boxShadow2: n2, borderRadius: r2, heightMedium: i2, dividerColor: a2, textColor2: o2 } = e2;
  return { menuPadding: `4px`, menuColor: t2, menuBoxShadow: n2, menuBorderRadius: r2, menuHeight: `calc(${i2} * 7.6)`, actionDividerColor: a2, actionTextColor: o2, actionPadding: `8px 12px`, headerDividerColor: a2, headerTextColor: o2, headerPadding: `8px 12px` };
}
var Vt = r({ name: `TreeSelect`, common: o, peers: { Tree: zt, Empty: w, InternalSelection: pe }, self: Bt });
function Ht(e2) {
  let { iconColor: n2, primaryColor: r2, errorColor: i2, textColor2: a2, successColor: o2, opacityDisabled: s2, actionColor: c2, borderColor: l2, hoverColor: u2, lineHeight: d2, borderRadius: f2, fontSize: p2 } = e2;
  return { fontSize: p2, lineHeight: d2, borderRadius: f2, draggerColor: c2, draggerBorder: `1px dashed ${l2}`, draggerBorderHover: `1px dashed ${r2}`, itemColorHover: u2, itemColorHoverError: t(i2, { alpha: 0.06 }), itemTextColor: a2, itemTextColorError: i2, itemTextColorSuccess: o2, itemIconColor: n2, itemDisabledOpacity: s2, itemBorderImageCardError: `1px solid ${i2}`, itemBorderImageCard: `1px solid ${l2}` };
}
var Ut = r({ name: `Upload`, common: o, peers: { Button: E, Progress: X }, self: Ht }), Wt = r({ name: `Watermark`, common: o, self(e2) {
  let { fontFamily: t2 } = e2;
  return { fontFamily: t2 };
} });
function Gt(e2) {
  let { popoverColor: t2, dividerColor: n2, borderRadius: r2 } = e2;
  return { color: t2, buttonBorderColor: n2, borderRadiusSquare: r2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .12)` };
}
var Kt = { name: `FloatButtonGroup`, common: o, self: Gt };
function qt(e2) {
  let { popoverColor: t2, textColor2: n2, buttonColor2Hover: r2, buttonColor2Pressed: i2, primaryColor: a2, primaryColorHover: o2, primaryColorPressed: s2, borderRadius: c2 } = e2;
  return { color: t2, colorHover: r2, colorPressed: i2, colorPrimary: a2, colorPrimaryHover: o2, colorPrimaryPressed: s2, textColor: n2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .16)`, boxShadowHover: `0 2px 12px 0px rgba(0, 0, 0, .24)`, boxShadowPressed: `0 2px 12px 0px rgba(0, 0, 0, .24)`, textColorPrimary: `#fff`, borderRadiusSquare: c2 };
}
var Jt = { name: `FloatButton`, common: o, self: qt };
function $(e2) {
  let { borderRadius: t2, fontSizeMini: n2, fontSizeTiny: r2, fontSizeSmall: i2, fontWeight: a2, textColor2: o2, cardColor: s2, buttonColor2Hover: c2 } = e2;
  return { activeColors: [`#9be9a8`, `#40c463`, `#30a14e`, `#216e39`], borderRadius: t2, borderColor: s2, textColor: o2, mininumColor: c2, fontWeight: a2, loadingColorStart: `rgba(0, 0, 0, 0.06)`, loadingColorEnd: `rgba(0, 0, 0, 0.12)`, rectSizeSmall: `10px`, rectSizeMedium: `11px`, rectSizeLarge: `12px`, borderRadiusSmall: `2px`, borderRadiusMedium: `2px`, borderRadiusLarge: `2px`, xGapSmall: `2px`, xGapMedium: `3px`, xGapLarge: `3px`, yGapSmall: `2px`, yGapMedium: `3px`, yGapLarge: `3px`, fontSizeSmall: r2, fontSizeMedium: n2, fontSizeLarge: i2 };
}
var Yt = r({ name: `Heatmap`, common: o, self: $ });
function Xt(e2) {
  let { primaryColor: t2, baseColor: n2 } = e2;
  return { color: t2, iconColor: n2 };
}
var Zt = { name: `IconWrapper`, common: o, self: Xt }, Qt = { extraFontSize: `12px`, width: `440px` };
function $t(e2) {
  let { fontWeight: t2, iconColorDisabled: n2, iconColor: r2, fontSizeLarge: i2, fontSizeMedium: a2, fontSizeSmall: o2, heightLarge: s2, heightMedium: c2, heightSmall: l2, borderRadius: d2, cardColor: f2, tableHeaderColor: p2, textColor1: m2, textColorDisabled: h2, textColor2: g2, borderColor: _2, hoverColor: v2 } = e2;
  return Object.assign(Object.assign({}, Qt), { itemHeightSmall: l2, itemHeightMedium: c2, itemHeightLarge: s2, fontSizeSmall: o2, fontSizeMedium: a2, fontSizeLarge: i2, borderRadius: d2, borderColor: _2, listColor: f2, headerColor: u(f2, p2), titleTextColor: m2, titleTextColorDisabled: h2, extraTextColor: g2, filterDividerColor: _2, itemTextColor: g2, itemTextColorDisabled: h2, itemColorPending: v2, titleFontWeight: t2, iconColor: r2, iconColorDisabled: n2 });
}
var en = r({ name: `Transfer`, common: o, peers: { Checkbox: C, Scrollbar: m, Input: D, Empty: w, Button: E }, self: $t });
function tn() {
  return {};
}
var nn = { name: `Marquee`, common: o, self: tn };
function rn(e2) {
  return { borderRadius: e2.borderRadius };
}
var an = { name: `QrCode`, common: o, self: rn };
function on(e2) {
  let { heightSmall: t2, heightMedium: n2, heightLarge: r2, borderRadius: i2 } = e2;
  return { color: `#eee`, colorEnd: `#ddd`, borderRadius: i2, heightSmall: t2, heightMedium: n2, heightLarge: r2 };
}
const sn = { name: `Skeleton`, common: o, self: on }, cn = () => ({}), ln = { name: `light`, common: o, Alert: ge, Anchor: ve, AutoComplete: Ae, Avatar: A, AvatarGroup: je, BackTop: Ne, Badge: Fe, Breadcrumb: Le, Button: E, ButtonGroup: rt, Calendar: ze, Card: i, Carousel: Be, Cascader: Ve, Checkbox: C, Code: Se, Collapse: be, CollapseTransition: He, ColorPicker: ee, DataTable: de, DatePicker: Ke, Descriptions: Je, Dialog: x, Divider: xe, Drawer: oe, Dropdown: S, DynamicInput: tt, DynamicTags: re, Element: nt, Empty: w, Equation: { name: `Equation`, common: o, self: cn }, Ellipsis: we, Flex: le, Form: ne, GradientText: at, Heatmap: Yt, Icon: Ee, IconWrapper: Zt, Image: Ce, Input: D, InputNumber: ce, InputOtp: ot, Layout: ae, LegacyTransfer: en, List: Oe, LoadingBar: Xe, Log: lt, Menu: pt, Mention: dt, Message: U, Modal: te, Notification: $e, PageHeader: ht, Pagination: fe, Popconfirm: ye, Popover: f, Popselect: ue, Progress: X, QrCode: an, Radio: Te, Rate: _t, Row: st, Result: yt, Scrollbar: m, Skeleton: sn, Select: he, Slider: xt, Space: De, Spin: Ct, Statistic: _e, Steps: Et, Switch: me, Table: kt, Tabs: ie, Tag: d, Thing: jt, TimePicker: z, Timeline: Pt, Tooltip: p, Transfer: Lt, Tree: zt, TreeSelect: Vt, Typography: ke, Upload: Ut, Watermark: Wt, Split: se, FloatButton: Jt, FloatButtonGroup: Kt, Marquee: nn };
export {
  B as A,
  k as B,
  q as C,
  U as D,
  W as E,
  F,
  P as I,
  N as L,
  Ue as M,
  L as N,
  H as O,
  I as P,
  M as R,
  pt as S,
  G as T,
  O as V,
  Q as _,
  Xt as a,
  Y as b,
  Ht as c,
  Mt as d,
  At as f,
  St as g,
  Ct as h,
  Qt as i,
  R as j,
  V as k,
  Rt as l,
  Tt as m,
  cn as n,
  $ as o,
  Ot as p,
  tn as r,
  Ut as s,
  ln as t,
  Ft as u,
  Z as v,
  K as w,
  J as x,
  X as y,
  j as z
};
