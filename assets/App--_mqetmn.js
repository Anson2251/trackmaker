import { d as O, c as ce, o as ee, a as oe, r as ro, b as Z, e as Co, f as AA, h as v, n as fo, F as De, p as L, g as Ye, i as re, j as D, k as bo, T as rA, w as Ne, l as tA, t as to, m as nA, u as lA, q as aA, s as F, v as H, x as no, y as K, z as lo, A as ao, B as iA, C as We, K as sA, D as cA, _ as dA } from "./index-DvHcDzOm.js";
import { h as uA, c as mA, s as T, r as xo, a as be, b as hA, d as pA, e as gA, f as vA, g as CA, i as C, j as fA, k as bA, l as xA, m as IA, n as SA, o as BA, p as yA, q as kA, t as EA, u as wA, v as DA, w as zA, x as PA, y as RA, z as MA, A as HA, B as QA, C as OA, D as TA, E as FA, F as LA, G as VA, H as jA, I as NA, J as WA, K as ZA, L as GA, M as $A, N as YA, O as KA, P as JA, Q as XA, R as he, S as qA, T as ke, U as Io, V as UA, W as _A, X as Ke, Y as So, Z as Bo, _ as er, $ as ze, a0 as or, a1 as Ar, a2 as rr, a3 as w, a4 as E, a5 as yo, a6 as B, a7 as R, a8 as tr, a9 as nr, aa as ue, ab as lr, ac as Je, ad as ko, ae as ar, af as Pe, ag as le, ah as Eo, ai as ir, aj as wo, ak as sr, al as cr, am as dr, an as ur, ao as mr, ap as Do, aq as hr, ar as pr, as as gr, at as vr, au as Cr, av as fr, aw as br, ax as xr, ay as Ir, az as Sr, aA as Br, aB as yr, aC as kr, aD as Er, aE as wr, aF as Dr, aG as zr, aH as Pr, aI as Rr, aJ as Mr, aK as Hr, aL as Qr, aM as Or, aN as Tr, aO as Fr, aP as Lr, aQ as Vr, aR as jr, aS as Nr, aT as Wr, aU as Zr, aV as io, aW as Gr, aX as $r, aY as Yr, aZ as Kr, a_ as fe, a$ as Jr, b0 as Ze, b1 as Xe, b2 as Xr, b3 as qr, b4 as Fe, b5 as so, b6 as Ur, b7 as _r, b8 as et, b9 as ie, ba as ot, bb as At, bc as zo, bd as Po, be as rt, bf as co, bg as tt, bh as uo, bi as nt, bj as lt, bk as at, bl as Se, bm as it, bn as st, bo as ct, bp as dt, bq as ut } from "./platform-DTutzxCy.js";
import { u as mt } from "./vue-i18n-B4KSkYFh.js";
const ht = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, pt = O({ name: "InfoCircle", render: function(o, A) {
  return ee(), ce("svg", ht, A[0] || (A[0] = [oe("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [oe("circle", { cx: "12", cy: "12", r: "9" }), oe("path", { d: "M12 8h.01" }), oe("path", { d: "M11 12h1v4h1" })], -1)]));
} }), gt = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, vt = O({ name: "Menu", render: function(o, A) {
  return ee(), ce("svg", gt, A[0] || (A[0] = [oe("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [oe("path", { d: "M4 8h16" }), oe("path", { d: "M4 16h16" })], -1)]));
} });
let Be = 0;
const Ct = typeof window < "u" && window.matchMedia !== void 0, me = Z(null);
let q, de;
function Ee(e) {
  e.matches && (me.value = "dark");
}
function we(e) {
  e.matches && (me.value = "light");
}
function ft() {
  q = window.matchMedia("(prefers-color-scheme: dark)"), de = window.matchMedia("(prefers-color-scheme: light)"), q.matches ? me.value = "dark" : de.matches ? me.value = "light" : me.value = null, q.addEventListener ? (q.addEventListener("change", Ee), de.addEventListener("change", we)) : q.addListener && (q.addListener(Ee), de.addListener(we));
}
function bt() {
  "removeEventListener" in q ? (q.removeEventListener("change", Ee), de.removeEventListener("change", we)) : "removeListener" in q && (q.removeListener(Ee), de.removeListener(we)), q = void 0, de = void 0;
}
let mo = true;
function xt() {
  return Ct ? (Be === 0 && ft(), mo && (mo = uA()) && (Co(() => {
    Be += 1;
  }), AA(() => {
    Be -= 1, Be === 0 && bt();
  })), ro(me)) : ro(me);
}
const It = O({ name: "ChevronDownFilled", render() {
  return v("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, v("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" }));
} }), g = { neutralBase: "#000", neutralInvertBase: "#fff", neutralTextBase: "#fff", neutralPopover: "rgb(72, 72, 78)", neutralCard: "rgb(24, 24, 28)", neutralModal: "rgb(44, 44, 50)", neutralBody: "rgb(16, 16, 20)", alpha1: "0.9", alpha2: "0.82", alpha3: "0.52", alpha4: "0.38", alpha5: "0.28", alphaClose: "0.52", alphaDisabled: "0.38", alphaDisabledInput: "0.06", alphaPending: "0.09", alphaTablePending: "0.06", alphaTableStriped: "0.05", alphaPressed: "0.05", alphaAvatar: "0.18", alphaRail: "0.2", alphaProgressRail: "0.12", alphaBorder: "0.24", alphaDivider: "0.09", alphaInput: "0.1", alphaAction: "0.06", alphaTab: "0.04", alphaScrollbar: "0.2", alphaScrollbarHover: "0.3", alphaCode: "0.12", alphaTag: "0.2", primaryHover: "#7fe7c4", primaryDefault: "#63e2b7", primaryActive: "#5acea7", primarySuppl: "rgb(42, 148, 125)", infoHover: "#8acbec", infoDefault: "#70c0e8", infoActive: "#66afd3", infoSuppl: "rgb(56, 137, 197)", errorHover: "#e98b8b", errorDefault: "#e88080", errorActive: "#e57272", errorSuppl: "rgb(208, 58, 82)", warningHover: "#f5d599", warningDefault: "#f2c97d", warningActive: "#e6c260", warningSuppl: "rgb(240, 138, 0)", successHover: "#7fe7c4", successDefault: "#63e2b7", successActive: "#5acea7", successSuppl: "rgb(42, 148, 125)" }, St = xo(g.neutralBase), Ro = xo(g.neutralInvertBase), Bt = `rgba(${Ro.slice(0, 3).join(", ")}, `;
function y(e) {
  return `${Bt + String(e)})`;
}
function yt(e) {
  const o = Array.from(Ro);
  return o[3] = Number(e), be(St, o);
}
const u = Object.assign(Object.assign({ name: "common" }, mA), { baseColor: g.neutralBase, primaryColor: g.primaryDefault, primaryColorHover: g.primaryHover, primaryColorPressed: g.primaryActive, primaryColorSuppl: g.primarySuppl, infoColor: g.infoDefault, infoColorHover: g.infoHover, infoColorPressed: g.infoActive, infoColorSuppl: g.infoSuppl, successColor: g.successDefault, successColorHover: g.successHover, successColorPressed: g.successActive, successColorSuppl: g.successSuppl, warningColor: g.warningDefault, warningColorHover: g.warningHover, warningColorPressed: g.warningActive, warningColorSuppl: g.warningSuppl, errorColor: g.errorDefault, errorColorHover: g.errorHover, errorColorPressed: g.errorActive, errorColorSuppl: g.errorSuppl, textColorBase: g.neutralTextBase, textColor1: y(g.alpha1), textColor2: y(g.alpha2), textColor3: y(g.alpha3), textColorDisabled: y(g.alpha4), placeholderColor: y(g.alpha4), placeholderColorDisabled: y(g.alpha5), iconColor: y(g.alpha4), iconColorDisabled: y(g.alpha5), iconColorHover: y(Number(g.alpha4) * 1.25), iconColorPressed: y(Number(g.alpha4) * 0.8), opacity1: g.alpha1, opacity2: g.alpha2, opacity3: g.alpha3, opacity4: g.alpha4, opacity5: g.alpha5, dividerColor: y(g.alphaDivider), borderColor: y(g.alphaBorder), closeIconColorHover: y(Number(g.alphaClose)), closeIconColor: y(Number(g.alphaClose)), closeIconColorPressed: y(Number(g.alphaClose)), closeColorHover: "rgba(255, 255, 255, .12)", closeColorPressed: "rgba(255, 255, 255, .08)", clearColor: y(g.alpha4), clearColorHover: T(y(g.alpha4), { alpha: 1.25 }), clearColorPressed: T(y(g.alpha4), { alpha: 0.8 }), scrollbarColor: y(g.alphaScrollbar), scrollbarColorHover: y(g.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: y(g.alphaProgressRail), railColor: y(g.alphaRail), popoverColor: g.neutralPopover, tableColor: g.neutralCard, cardColor: g.neutralCard, modalColor: g.neutralModal, bodyColor: g.neutralBody, tagColor: yt(g.alphaTag), avatarColor: y(g.alphaAvatar), invertedColor: g.neutralBase, inputColor: y(g.alphaInput), codeColor: y(g.alphaCode), tabColor: y(g.alphaTab), actionColor: y(g.alphaAction), tableHeaderColor: y(g.alphaAction), hoverColor: y(g.alphaPending), tableColorHover: y(g.alphaTablePending), tableColorStriped: y(g.alphaTableStriped), pressedColor: y(g.alphaPressed), opacityDisabled: g.alphaDisabled, inputColorDisabled: y(g.alphaDisabledInput), buttonColor2: "rgba(255, 255, 255, .08)", buttonColor2Hover: "rgba(255, 255, 255, .12)", buttonColor2Pressed: "rgba(255, 255, 255, .08)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), V = { name: "Scrollbar", common: u, self: hA }, pe = { name: "Empty", common: u, self: pA }, xe = { name: "InternalSelectMenu", common: u, peers: { Scrollbar: V, Empty: pe }, self: gA }, ge = { name: "Popover", common: u, peers: { Scrollbar: V }, self: vA }, Mo = { name: "Tag", common: u, self(e) {
  const { textColor2: o, primaryColorHover: A, primaryColorPressed: t, primaryColor: r, infoColor: i, successColor: l, warningColor: c, errorColor: n, baseColor: s, borderColor: a, tagColor: m, opacityDisabled: h, closeIconColor: b, closeIconColorHover: S, closeIconColorPressed: I, closeColorHover: z, closeColorPressed: M, borderRadiusSmall: N, fontSizeMini: j, fontSizeTiny: W, fontSizeSmall: J, fontSizeMedium: Y, heightMini: Q, heightTiny: X, heightSmall: U, heightMedium: Ae, buttonColor2Hover: _, buttonColor2Pressed: te, fontWeightStrong: ae } = e;
  return Object.assign(Object.assign({}, CA), { closeBorderRadius: N, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: Ae, borderRadius: N, opacityDisabled: h, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, fontWeightStrong: ae, textColorCheckable: o, textColorHoverCheckable: o, textColorPressedCheckable: o, textColorChecked: s, colorCheckable: "#0000", colorHoverCheckable: _, colorPressedCheckable: te, colorChecked: r, colorCheckedHover: A, colorCheckedPressed: t, border: `1px solid ${a}`, textColor: o, color: m, colorBordered: "#0000", closeIconColor: b, closeIconColorHover: S, closeIconColorPressed: I, closeColorHover: z, closeColorPressed: M, borderPrimary: `1px solid ${C(r, { alpha: 0.3 })}`, textColorPrimary: r, colorPrimary: C(r, { alpha: 0.16 }), colorBorderedPrimary: "#0000", closeIconColorPrimary: T(r, { lightness: 0.7 }), closeIconColorHoverPrimary: T(r, { lightness: 0.7 }), closeIconColorPressedPrimary: T(r, { lightness: 0.7 }), closeColorHoverPrimary: C(r, { alpha: 0.16 }), closeColorPressedPrimary: C(r, { alpha: 0.12 }), borderInfo: `1px solid ${C(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: C(i, { alpha: 0.16 }), colorBorderedInfo: "#0000", closeIconColorInfo: T(i, { alpha: 0.7 }), closeIconColorHoverInfo: T(i, { alpha: 0.7 }), closeIconColorPressedInfo: T(i, { alpha: 0.7 }), closeColorHoverInfo: C(i, { alpha: 0.16 }), closeColorPressedInfo: C(i, { alpha: 0.12 }), borderSuccess: `1px solid ${C(l, { alpha: 0.3 })}`, textColorSuccess: l, colorSuccess: C(l, { alpha: 0.16 }), colorBorderedSuccess: "#0000", closeIconColorSuccess: T(l, { alpha: 0.7 }), closeIconColorHoverSuccess: T(l, { alpha: 0.7 }), closeIconColorPressedSuccess: T(l, { alpha: 0.7 }), closeColorHoverSuccess: C(l, { alpha: 0.16 }), closeColorPressedSuccess: C(l, { alpha: 0.12 }), borderWarning: `1px solid ${C(c, { alpha: 0.3 })}`, textColorWarning: c, colorWarning: C(c, { alpha: 0.16 }), colorBorderedWarning: "#0000", closeIconColorWarning: T(c, { alpha: 0.7 }), closeIconColorHoverWarning: T(c, { alpha: 0.7 }), closeIconColorPressedWarning: T(c, { alpha: 0.7 }), closeColorHoverWarning: C(c, { alpha: 0.16 }), closeColorPressedWarning: C(c, { alpha: 0.11 }), borderError: `1px solid ${C(n, { alpha: 0.3 })}`, textColorError: n, colorError: C(n, { alpha: 0.16 }), colorBorderedError: "#0000", closeIconColorError: T(n, { alpha: 0.7 }), closeIconColorHoverError: T(n, { alpha: 0.7 }), closeIconColorPressedError: T(n, { alpha: 0.7 }), closeColorHoverError: C(n, { alpha: 0.16 }), closeColorPressedError: C(n, { alpha: 0.12 }) });
} }, qe = { name: "InternalSelection", common: u, peers: { Popover: ge }, self(e) {
  const { borderRadius: o, textColor2: A, textColorDisabled: t, inputColor: r, inputColorDisabled: i, primaryColor: l, primaryColorHover: c, warningColor: n, warningColorHover: s, errorColor: a, errorColorHover: m, iconColor: h, iconColorDisabled: b, clearColor: S, clearColorHover: I, clearColorPressed: z, placeholderColor: M, placeholderColorDisabled: N, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: Ae, fontWeight: _ } = e;
  return Object.assign(Object.assign({}, fA), { fontWeight: _, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: Ae, borderRadius: o, textColor: A, textColorDisabled: t, placeholderColor: M, placeholderColorDisabled: N, color: r, colorDisabled: i, colorActive: C(l, { alpha: 0.1 }), border: "1px solid #0000", borderHover: `1px solid ${c}`, borderActive: `1px solid ${l}`, borderFocus: `1px solid ${c}`, boxShadowHover: "none", boxShadowActive: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, boxShadowFocus: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, caretColor: l, arrowColor: h, arrowColorDisabled: b, loadingColor: l, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${s}`, borderActiveWarning: `1px solid ${n}`, borderFocusWarning: `1px solid ${s}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, colorActiveWarning: C(n, { alpha: 0.1 }), caretColorWarning: n, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${m}`, borderActiveError: `1px solid ${a}`, borderFocusError: `1px solid ${m}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, colorActiveError: C(a, { alpha: 0.1 }), caretColorError: a, clearColor: S, clearColorHover: I, clearColorPressed: z });
} }, kt = { name: "Alert", common: u, self(e) {
  const { lineHeight: o, borderRadius: A, fontWeightStrong: t, dividerColor: r, inputColor: i, textColor1: l, textColor2: c, closeColorHover: n, closeColorPressed: s, closeIconColor: a, closeIconColorHover: m, closeIconColorPressed: h, infoColorSuppl: b, successColorSuppl: S, warningColorSuppl: I, errorColorSuppl: z, fontSize: M } = e;
  return Object.assign(Object.assign({}, bA), { fontSize: M, lineHeight: o, titleFontWeight: t, borderRadius: A, border: `1px solid ${r}`, color: i, titleTextColor: l, iconColor: c, contentTextColor: c, closeBorderRadius: A, closeColorHover: n, closeColorPressed: s, closeIconColor: a, closeIconColorHover: m, closeIconColorPressed: h, borderInfo: `1px solid ${C(b, { alpha: 0.35 })}`, colorInfo: C(b, { alpha: 0.25 }), titleTextColorInfo: l, iconColorInfo: b, contentTextColorInfo: c, closeColorHoverInfo: n, closeColorPressedInfo: s, closeIconColorInfo: a, closeIconColorHoverInfo: m, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${C(S, { alpha: 0.35 })}`, colorSuccess: C(S, { alpha: 0.25 }), titleTextColorSuccess: l, iconColorSuccess: S, contentTextColorSuccess: c, closeColorHoverSuccess: n, closeColorPressedSuccess: s, closeIconColorSuccess: a, closeIconColorHoverSuccess: m, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${C(I, { alpha: 0.35 })}`, colorWarning: C(I, { alpha: 0.25 }), titleTextColorWarning: l, iconColorWarning: I, contentTextColorWarning: c, closeColorHoverWarning: n, closeColorPressedWarning: s, closeIconColorWarning: a, closeIconColorHoverWarning: m, closeIconColorPressedWarning: h, borderError: `1px solid ${C(z, { alpha: 0.35 })}`, colorError: C(z, { alpha: 0.25 }), titleTextColorError: l, iconColorError: z, contentTextColorError: c, closeColorHoverError: n, closeColorPressedError: s, closeIconColorError: a, closeIconColorHoverError: m, closeIconColorPressedError: h });
} }, Et = { name: "Anchor", common: u, self: xA };
function wt(e) {
  const { textColor2: o, textColor3: A, textColorDisabled: t, primaryColor: r, primaryColorHover: i, inputColor: l, inputColorDisabled: c, warningColor: n, warningColorHover: s, errorColor: a, errorColorHover: m, borderRadius: h, lineHeight: b, fontSizeTiny: S, fontSizeSmall: I, fontSizeMedium: z, fontSizeLarge: M, heightTiny: N, heightSmall: j, heightMedium: W, heightLarge: J, clearColor: Y, clearColorHover: Q, clearColorPressed: X, placeholderColor: U, placeholderColorDisabled: Ae, iconColor: _, iconColorDisabled: te, iconColorHover: ae, iconColorPressed: ne, fontWeight: Ce } = e;
  return Object.assign(Object.assign({}, SA), { fontWeight: Ce, countTextColorDisabled: t, countTextColor: A, heightTiny: N, heightSmall: j, heightMedium: W, heightLarge: J, fontSizeTiny: S, fontSizeSmall: I, fontSizeMedium: z, fontSizeLarge: M, lineHeight: b, lineHeightTextarea: b, borderRadius: h, iconSize: "16px", groupLabelColor: l, textColor: o, textColorDisabled: t, textDecorationColor: o, groupLabelTextColor: o, caretColor: r, placeholderColor: U, placeholderColorDisabled: Ae, color: l, colorDisabled: c, colorFocus: C(r, { alpha: 0.1 }), groupLabelBorder: "1px solid #0000", border: "1px solid #0000", borderHover: `1px solid ${i}`, borderDisabled: "1px solid #0000", borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 8px 0 ${C(r, { alpha: 0.3 })}`, loadingColor: r, loadingColorWarning: n, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${s}`, colorFocusWarning: C(n, { alpha: 0.1 }), borderFocusWarning: `1px solid ${s}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.3 })}`, caretColorWarning: n, loadingColorError: a, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${m}`, colorFocusError: C(a, { alpha: 0.1 }), borderFocusError: `1px solid ${m}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.3 })}`, caretColorError: a, clearColor: Y, clearColorHover: Q, clearColorPressed: X, iconColor: _, iconColorDisabled: te, iconColorHover: ae, iconColorPressed: ne, suffixTextColor: o });
}
const $ = IA({ name: "Input", common: u, peers: { Scrollbar: V }, self: wt }), Dt = { name: "AutoComplete", common: u, peers: { InternalSelectMenu: xe, Input: $ }, self: BA }, Ho = { name: "Avatar", common: u, self: yA }, zt = { name: "AvatarGroup", common: u, peers: { Avatar: Ho }, self: kA }, Pt = { name: "BackTop", common: u, self(e) {
  const { popoverColor: o, textColor2: A, primaryColorHover: t, primaryColorPressed: r } = e;
  return Object.assign(Object.assign({}, EA), { color: o, textColor: A, iconColor: A, iconColorHover: t, iconColorPressed: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
} }, Rt = { name: "Badge", common: u, self(e) {
  const { errorColorSuppl: o, infoColorSuppl: A, successColorSuppl: t, warningColorSuppl: r, fontFamily: i } = e;
  return { color: o, colorInfo: A, colorSuccess: t, colorError: o, colorWarning: r, fontSize: "12px", fontFamily: i };
} }, Mt = { name: "Breadcrumb", common: u, self: wA }, G = { name: "Button", common: u, self(e) {
  const o = DA(e);
  return o.waveOpacity = "0.8", o.colorOpacitySecondary = "0.16", o.colorOpacitySecondaryHover = "0.2", o.colorOpacitySecondaryPressed = "0.12", o;
} }, Ht = { name: "Calendar", common: u, peers: { Button: G }, self: zA }, Qo = { name: "Card", common: u, self(e) {
  const o = PA(e), { cardColor: A, modalColor: t, popoverColor: r } = e;
  return o.colorEmbedded = A, o.colorEmbeddedModal = t, o.colorEmbeddedPopover = r, o;
} }, Qt = { name: "Carousel", common: u, self: RA }, ve = { name: "Checkbox", common: u, self(e) {
  const { cardColor: o } = e, A = MA(e);
  return A.color = "#0000", A.checkMarkColor = o, A;
} }, Ot = { name: "Cascader", common: u, peers: { InternalSelectMenu: xe, InternalSelection: qe, Scrollbar: V, Checkbox: ve, Empty: QA }, self: HA }, Oo = { name: "Code", common: u, self(e) {
  const { textColor2: o, fontSize: A, fontWeightStrong: t, textColor3: r } = e;
  return { textColor: o, fontSize: A, fontWeightStrong: t, "mono-3": "#5c6370", "hue-1": "#56b6c2", "hue-2": "#61aeee", "hue-3": "#c678dd", "hue-4": "#98c379", "hue-5": "#e06c75", "hue-5-2": "#be5046", "hue-6": "#d19a66", "hue-6-2": "#e6c07b", lineNumberTextColor: r };
} }, Tt = { name: "Collapse", common: u, self: OA }, Ft = { name: "CollapseTransition", common: u, self: TA }, Lt = { name: "ColorPicker", common: u, peers: { Input: $, Button: G }, self: FA }, To = { name: "Popselect", common: u, peers: { Popover: ge, InternalSelectMenu: xe } }, Fo = { name: "Select", common: u, peers: { InternalSelection: qe, InternalSelectMenu: xe }, self: LA }, Lo = { name: "Pagination", common: u, peers: { Select: Fo, Input: $, Popselect: To }, self(e) {
  const { primaryColor: o, opacity3: A } = e, t = C(o, { alpha: Number(A) }), r = VA(e);
  return r.itemBorderActive = `1px solid ${t}`, r.itemBorderDisabled = "1px solid #0000", r;
} }, Ue = { name: "Dropdown", common: u, peers: { Popover: ge }, self(e) {
  const { primaryColorSuppl: o, primaryColor: A, popoverColor: t } = e, r = jA(e);
  return r.colorInverted = t, r.optionColorActive = C(A, { alpha: 0.15 }), r.optionColorActiveInverted = o, r.optionColorHoverInverted = o, r;
} }, Re = { name: "Tooltip", common: u, peers: { Popover: ge }, self(e) {
  const { borderRadius: o, boxShadow2: A, popoverColor: t, textColor2: r } = e;
  return Object.assign(Object.assign({}, NA), { borderRadius: o, boxShadow: A, color: t, textColor: r });
} }, Vo = { name: "Ellipsis", common: u, peers: { Tooltip: Re } }, jo = { name: "Radio", common: u, self(e) {
  const { borderColor: o, primaryColor: A, baseColor: t, textColorDisabled: r, inputColorDisabled: i, textColor2: l, opacityDisabled: c, borderRadius: n, fontSizeSmall: s, fontSizeMedium: a, fontSizeLarge: m, heightSmall: h, heightMedium: b, heightLarge: S, lineHeight: I } = e;
  return Object.assign(Object.assign({}, WA), { labelLineHeight: I, buttonHeightSmall: h, buttonHeightMedium: b, buttonHeightLarge: S, fontSizeSmall: s, fontSizeMedium: a, fontSizeLarge: m, boxShadow: `inset 0 0 0 1px ${o}`, boxShadowActive: `inset 0 0 0 1px ${A}`, boxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, boxShadowHover: `inset 0 0 0 1px ${A}`, boxShadowDisabled: `inset 0 0 0 1px ${o}`, color: "#0000", colorDisabled: i, colorActive: "#0000", textColor: l, textColorDisabled: r, dotColorActive: A, dotColorDisabled: o, buttonBorderColor: o, buttonBorderColorActive: A, buttonBorderColorHover: A, buttonColor: "#0000", buttonColorActive: A, buttonTextColor: l, buttonTextColorActive: t, buttonTextColorHover: A, opacityDisabled: c, buttonBoxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px ${A}`, buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: n });
} }, Vt = { name: "DataTable", common: u, peers: { Button: G, Checkbox: ve, Radio: jo, Pagination: Lo, Scrollbar: V, Empty: pe, Popover: ge, Ellipsis: Vo, Dropdown: Ue }, self(e) {
  const o = ZA(e);
  return o.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", o.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", o;
} }, jt = { name: "Icon", common: u, self: GA }, No = { name: "TimePicker", common: u, peers: { Scrollbar: V, Button: G, Input: $ }, self: $A }, Nt = { name: "DatePicker", common: u, peers: { Input: $, Button: G, TimePicker: No, Scrollbar: V }, self(e) {
  const { popoverColor: o, hoverColor: A, primaryColor: t } = e, r = YA(e);
  return r.itemColorDisabled = be(o, A), r.itemColorIncluded = C(t, { alpha: 0.15 }), r.itemColorHover = be(o, A), r;
} }, Wt = { name: "Descriptions", common: u, self: KA }, Wo = { name: "Dialog", common: u, peers: { Button: G }, self: JA }, Zt = { name: "Modal", common: u, peers: { Scrollbar: V, Dialog: Wo, Card: Qo }, self: XA }, Gt = he("n-modal-provider"), $t = he("n-modal-api"), Yt = he("n-modal-reactive-list"), Kt = Object.assign(Object.assign({}, UA), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, internalStyle: [String, Object], maskClosable: { type: Boolean, default: true }, zIndex: Number, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function, draggable: [Boolean, Object] }), Jt = O({ name: "DialogEnvironment", props: Object.assign(Object.assign({}, Kt), { internalKey: { type: String, required: true }, to: [String, Object], onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = Z(true);
  function A() {
    const { onInternalAfterLeave: a, internalKey: m, onAfterLeave: h } = e;
    a && a(m), h && h();
  }
  function t(a) {
    const { onPositiveClick: m } = e;
    m ? Promise.resolve(m(a)).then((h) => {
      h !== false && n();
    }) : n();
  }
  function r(a) {
    const { onNegativeClick: m } = e;
    m ? Promise.resolve(m(a)).then((h) => {
      h !== false && n();
    }) : n();
  }
  function i() {
    const { onClose: a } = e;
    a ? Promise.resolve(a()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function l(a) {
    const { onMaskClick: m, maskClosable: h } = e;
    m && (m(a), h && n());
  }
  function c() {
    const { onEsc: a } = e;
    a && a();
  }
  function n() {
    o.value = false;
  }
  function s(a) {
    o.value = a;
  }
  return { show: o, hide: n, handleUpdateShow: s, handleAfterLeave: A, handleCloseClick: i, handleNegativeClick: r, handlePositiveClick: t, handleMaskClick: l, handleEsc: c };
}, render() {
  const { handlePositiveClick: e, handleUpdateShow: o, handleNegativeClick: A, handleCloseClick: t, handleAfterLeave: r, handleMaskClick: i, handleEsc: l, to: c, zIndex: n, maskClosable: s, show: a } = this;
  return v(Io, { show: a, onUpdateShow: o, onMaskClick: i, onEsc: l, to: c, zIndex: n, maskClosable: s, onAfterEnter: this.onAfterEnter, onAfterLeave: r, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, draggable: this.draggable, internalAppear: true, internalDialog: true }, { default: ({ draggableClass: m }) => v(qA, Object.assign({}, ke(this.$props, _A), { titleClass: fo([this.titleClass, m]), style: this.internalStyle, onClose: t, onNegativeClick: A, onPositiveClick: e })) });
} }), Xt = { injectionKey: String, to: [String, Object] }, qt = O({ name: "DialogProvider", props: Xt, setup() {
  const e = Z([]), o = {};
  function A(c = {}) {
    const n = ze(), s = Ye(Object.assign(Object.assign({}, c), { key: n, destroy: () => {
      var a;
      (a = o[`n-dialog-${n}`]) === null || a === void 0 || a.hide();
    } }));
    return e.value.push(s), s;
  }
  const t = ["info", "success", "warning", "error"].map((c) => (n) => A(Object.assign(Object.assign({}, n), { type: c })));
  function r(c) {
    const { value: n } = e;
    n.splice(n.findIndex((s) => s.key === c), 1);
  }
  function i() {
    Object.values(o).forEach((c) => {
      c == null ? void 0 : c.hide();
    });
  }
  const l = { create: A, destroyAll: i, info: t[0], success: t[1], warning: t[2], error: t[3] };
  return L(or, l), L(er, { clickedRef: Bo(64), clickedPositionRef: So() }), L(Ar, e), Object.assign(Object.assign({}, l), { dialogList: e, dialogInstRefs: o, handleAfterLeave: r });
}, render() {
  var e, o;
  return v(De, null, [this.dialogList.map((A) => v(Jt, Ke(A, ["destroy", "style"], { internalStyle: A.style, to: this.to, ref: (t) => {
    t === null ? delete this.dialogInstRefs[`n-dialog-${A.key}`] : this.dialogInstRefs[`n-dialog-${A.key}`] = t;
  }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }))), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), Ut = { name: "LoadingBar", common: u, self(e) {
  const { primaryColor: o } = e;
  return { colorError: "red", colorLoading: o, height: "2px" };
} }, _t = { name: "Message", common: u, self: rr }, Zo = { icon: Function, type: { type: String, default: "info" }, content: [String, Number, Function], showIcon: { type: Boolean, default: true }, closable: Boolean, keepAliveOnHover: Boolean, onClose: Function, onMouseenter: Function, onMouseleave: Function }, en = w([E("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [yo({ overflow: "visible", originalTransition: "transform .3s var(--n-bezier)", enterToProps: { transform: "scale(1)" }, leaveToProps: { transform: "scale(0.85)" } })]), E("message", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `, [B("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), B("icon", `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => R(`${e}-type`, [w("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), w("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [tr()])]), B("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [w("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), w("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), E("message-container", `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [R("top", `
 top: 12px;
 left: 0;
 right: 0;
 `), R("top-left", `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), R("top-right", `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), R("bottom", `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), R("bottom-left", `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), R("bottom-right", `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]), on = { info: () => v(mr, null), success: () => v(ur, null), warning: () => v(dr, null), error: () => v(cr, null), default: () => null }, An = O({ name: "Message", props: Object.assign(Object.assign({}, Zo), { render: Function }), setup(e) {
  const { inlineThemeDisabled: o, mergedRtlRef: A } = Je(e), { props: t, mergedClsPrefixRef: r } = re(ko), i = ar("Message", A, r), l = Pe("Message", "-message", en, sr, t, r), c = D(() => {
    const { type: s } = e, { common: { cubicBezierEaseInOut: a }, self: { padding: m, margin: h, maxWidth: b, iconMargin: S, closeMargin: I, closeSize: z, iconSize: M, fontSize: N, lineHeight: j, borderRadius: W, border: J, iconColorInfo: Y, iconColorSuccess: Q, iconColorWarning: X, iconColorError: U, iconColorLoading: Ae, closeIconSize: _, closeBorderRadius: te, [le("textColor", s)]: ae, [le("boxShadow", s)]: ne, [le("color", s)]: Ce, [le("closeColorHover", s)]: Me, [le("closeColorPressed", s)]: He, [le("closeIconColor", s)]: Qe, [le("closeIconColorPressed", s)]: Oe, [le("closeIconColorHover", s)]: Te } } = l.value;
    return { "--n-bezier": a, "--n-margin": h, "--n-padding": m, "--n-max-width": b, "--n-font-size": N, "--n-icon-margin": S, "--n-icon-size": M, "--n-close-icon-size": _, "--n-close-border-radius": te, "--n-close-size": z, "--n-close-margin": I, "--n-text-color": ae, "--n-color": Ce, "--n-box-shadow": ne, "--n-icon-color-info": Y, "--n-icon-color-success": Q, "--n-icon-color-warning": X, "--n-icon-color-error": U, "--n-icon-color-loading": Ae, "--n-close-color-hover": Me, "--n-close-color-pressed": He, "--n-close-icon-color": Qe, "--n-close-icon-color-pressed": Oe, "--n-close-icon-color-hover": Te, "--n-line-height": j, "--n-border-radius": W, "--n-border": J };
  }), n = o ? Eo("message", D(() => e.type[0]), c, {}) : void 0;
  return { mergedClsPrefix: r, rtlEnabled: i, messageProviderProps: t, handleClose() {
    var s;
    (s = e.onClose) === null || s === void 0 || s.call(e);
  }, cssVars: o ? void 0 : c, themeClass: n == null ? void 0 : n.themeClass, onRender: n == null ? void 0 : n.onRender, placement: t.placement };
}, render() {
  const { render: e, type: o, closable: A, content: t, mergedClsPrefix: r, cssVars: i, themeClass: l, onRender: c, icon: n, handleClose: s, showIcon: a } = this;
  c == null ? void 0 : c();
  let m;
  return v("div", { class: [`${r}-message-wrapper`, l], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [{ alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end" }, i] }, e ? e(this.$props) : v("div", { class: [`${r}-message ${r}-message--${o}-type`, this.rtlEnabled && `${r}-message--rtl`] }, (m = rn(n, o, r)) && a ? v("div", { class: `${r}-message__icon ${r}-message__icon--${o}-type` }, v(nr, null, { default: () => m })) : null, v("div", { class: `${r}-message__content` }, ue(t)), A ? v(lr, { clsPrefix: r, class: `${r}-message__close`, onClick: s, absolute: true }) : null));
} });
function rn(e, o, A) {
  if (typeof e == "function") return e();
  {
    const t = o === "loading" ? v(ir, { clsPrefix: A, strokeWidth: 24, scale: 0.85 }) : on[o]();
    return t ? v(wo, { clsPrefix: A, key: o }, { default: () => t }) : null;
  }
}
const tn = O({ name: "MessageEnvironment", props: Object.assign(Object.assign({}, Zo), { duration: { type: Number, default: 3e3 }, onAfterLeave: Function, onLeave: Function, internalKey: { type: String, required: true }, onInternalAfterLeave: Function, onHide: Function, onAfterHide: Function }), setup(e) {
  let o = null;
  const A = Z(true);
  bo(() => {
    t();
  });
  function t() {
    const { duration: a } = e;
    a && (o = window.setTimeout(l, a));
  }
  function r(a) {
    a.currentTarget === a.target && o !== null && (window.clearTimeout(o), o = null);
  }
  function i(a) {
    a.currentTarget === a.target && t();
  }
  function l() {
    const { onHide: a } = e;
    A.value = false, o && (window.clearTimeout(o), o = null), a && a();
  }
  function c() {
    const { onClose: a } = e;
    a && a(), l();
  }
  function n() {
    const { onAfterLeave: a, onInternalAfterLeave: m, onAfterHide: h, internalKey: b } = e;
    a && a(), m && m(b), h && h();
  }
  function s() {
    l();
  }
  return { show: A, hide: l, handleClose: c, handleAfterLeave: n, handleMouseleave: i, handleMouseenter: r, deactivate: s };
}, render() {
  return v(Do, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, { default: () => [this.show ? v(An, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null] });
} }), nn = Object.assign(Object.assign({}, Pe.props), { to: [String, Object], duration: { type: Number, default: 3e3 }, keepAliveOnHover: Boolean, max: Number, placement: { type: String, default: "top" }, closable: Boolean, containerClass: String, containerStyle: [String, Object] }), ln = O({ name: "MessageProvider", props: nn, setup(e) {
  const { mergedClsPrefixRef: o } = Je(e), A = Z([]), t = Z({}), r = { create(n, s) {
    return i(n, Object.assign({ type: "default" }, s));
  }, info(n, s) {
    return i(n, Object.assign(Object.assign({}, s), { type: "info" }));
  }, success(n, s) {
    return i(n, Object.assign(Object.assign({}, s), { type: "success" }));
  }, warning(n, s) {
    return i(n, Object.assign(Object.assign({}, s), { type: "warning" }));
  }, error(n, s) {
    return i(n, Object.assign(Object.assign({}, s), { type: "error" }));
  }, loading(n, s) {
    return i(n, Object.assign(Object.assign({}, s), { type: "loading" }));
  }, destroyAll: c };
  L(ko, { props: e, mergedClsPrefixRef: o }), L(hr, r);
  function i(n, s) {
    const a = ze(), m = Ye(Object.assign(Object.assign({}, s), { content: n, key: a, destroy: () => {
      var b;
      (b = t.value[a]) === null || b === void 0 || b.hide();
    } })), { max: h } = e;
    return h && A.value.length >= h && A.value.shift(), A.value.push(m), m;
  }
  function l(n) {
    A.value.splice(A.value.findIndex((s) => s.key === n), 1), delete t.value[n];
  }
  function c() {
    Object.values(t.value).forEach((n) => {
      n.hide();
    });
  }
  return Object.assign({ mergedClsPrefix: o, messageRefs: t, messageList: A, handleAfterLeave: l }, r);
}, render() {
  var e, o, A;
  return v(De, null, (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e), this.messageList.length ? v(rA, { to: (A = this.to) !== null && A !== void 0 ? A : "body" }, v("div", { class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass], key: "message-container", style: this.containerStyle }, this.messageList.map((t) => v(tn, Object.assign({ ref: (r) => {
    r && (this.messageRefs[t.key] = r);
  }, internalKey: t.key, onInternalAfterLeave: this.handleAfterLeave }, Ke(t, ["destroy"], void 0), { duration: t.duration === void 0 ? this.duration : t.duration, keepAliveOnHover: t.keepAliveOnHover === void 0 ? this.keepAliveOnHover : t.keepAliveOnHover, closable: t.closable === void 0 ? this.closable : t.closable }))))) : null);
} }), an = O({ name: "ModalEnvironment", props: Object.assign(Object.assign({}, pr), { internalKey: { type: String, required: true }, onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = Z(true);
  function A() {
    const { onInternalAfterLeave: a, internalKey: m, onAfterLeave: h } = e;
    a && a(m), h && h();
  }
  function t() {
    const { onPositiveClick: a } = e;
    a ? Promise.resolve(a()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function r() {
    const { onNegativeClick: a } = e;
    a ? Promise.resolve(a()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function i() {
    const { onClose: a } = e;
    a ? Promise.resolve(a()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function l(a) {
    const { onMaskClick: m, maskClosable: h } = e;
    m && (m(a), h && n());
  }
  function c() {
    const { onEsc: a } = e;
    a && a();
  }
  function n() {
    o.value = false;
  }
  function s(a) {
    o.value = a;
  }
  return { show: o, hide: n, handleUpdateShow: s, handleAfterLeave: A, handleCloseClick: i, handleNegativeClick: r, handlePositiveClick: t, handleMaskClick: l, handleEsc: c };
}, render() {
  const { handleUpdateShow: e, handleAfterLeave: o, handleMaskClick: A, handleEsc: t, show: r } = this;
  return v(Io, Object.assign({}, this.$props, { show: r, onUpdateShow: e, onMaskClick: A, onEsc: t, onAfterLeave: o, internalAppear: true, internalModal: true }), this.$slots);
} }), sn = { to: [String, Object] }, cn = O({ name: "ModalProvider", props: sn, setup() {
  const e = Z([]), o = {};
  function A(l = {}) {
    const c = ze(), n = Ye(Object.assign(Object.assign({}, l), { key: c, destroy: () => {
      var s;
      (s = o[`n-modal-${c}`]) === null || s === void 0 || s.hide();
    } }));
    return e.value.push(n), n;
  }
  function t(l) {
    const { value: c } = e;
    c.splice(c.findIndex((n) => n.key === l), 1);
  }
  function r() {
    Object.values(o).forEach((l) => {
      l == null ? void 0 : l.hide();
    });
  }
  const i = { create: A, destroyAll: r };
  return L($t, i), L(Gt, { clickedRef: Bo(64), clickedPositionRef: So() }), L(Yt, e), Object.assign(Object.assign({}, i), { modalList: e, modalInstRefs: o, handleAfterLeave: t });
}, render() {
  var e, o;
  return v(De, null, [this.modalList.map((A) => {
    var t;
    return v(an, Ke(A, ["destroy", "render"], { to: (t = A.to) !== null && t !== void 0 ? t : this.to, ref: (r) => {
      r === null ? delete this.modalInstRefs[`n-modal-${A.key}`] : this.modalInstRefs[`n-modal-${A.key}`] = r;
    }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }), { default: A.render });
  }), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), dn = { name: "Notification", common: u, peers: { Scrollbar: V }, self: gr }, un = { name: "Divider", common: u, self: vr }, mn = { name: "Drawer", common: u, peers: { Scrollbar: V }, self: Cr }, hn = { name: "DynamicInput", common: u, peers: { Input: $, Button: G }, self() {
  return fr;
} }, Go = { name: "Space", self() {
  return br;
} }, pn = { name: "DynamicTags", common: u, peers: { Input: $, Button: G, Tag: Mo, Space: Go }, self() {
  return { inputWidth: "64px" };
} }, gn = { name: "Element", common: u }, vn = { name: "Flex", self() {
  return xr;
} }, Cn = { name: "ButtonGroup", common: u }, fn = { name: "Form", common: u, self: Ir }, bn = { name: "GradientText", common: u, self(e) {
  const { primaryColor: o, successColor: A, warningColor: t, errorColor: r, infoColor: i, primaryColorSuppl: l, successColorSuppl: c, warningColorSuppl: n, errorColorSuppl: s, infoColorSuppl: a, fontWeightStrong: m } = e;
  return { fontWeight: m, rotate: "252deg", colorStartPrimary: o, colorEndPrimary: l, colorStartInfo: i, colorEndInfo: a, colorStartWarning: t, colorEndWarning: n, colorStartError: r, colorEndError: s, colorStartSuccess: A, colorEndSuccess: c };
} }, xn = { name: "InputNumber", common: u, peers: { Button: G, Input: $ }, self(e) {
  const { textColorDisabled: o } = e;
  return { iconColorDisabled: o };
} }, In = { name: "InputOtp", common: u, peers: { Input: $ }, self: Sr }, Sn = { name: "Layout", common: u, peers: { Scrollbar: V }, self(e) {
  const { textColor2: o, bodyColor: A, popoverColor: t, cardColor: r, dividerColor: i, scrollbarColor: l, scrollbarColorHover: c } = e;
  return { textColor: o, textColorInverted: o, color: A, colorEmbedded: A, headerColor: r, headerColorInverted: r, footerColor: r, footerColorInverted: r, headerBorderColor: i, headerBorderColorInverted: i, footerBorderColor: i, footerBorderColorInverted: i, siderBorderColor: i, siderBorderColorInverted: i, siderColor: r, siderColorInverted: r, siderToggleButtonBorder: "1px solid transparent", siderToggleButtonColor: t, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: be(A, l), siderToggleBarColorHover: be(A, c), __invertScrollbar: "false" };
} }, Bn = { name: "Row", common: u }, yn = { name: "List", common: u, self: Br }, kn = { name: "Log", common: u, peers: { Scrollbar: V, Code: Oo }, self(e) {
  const { textColor2: o, inputColor: A, fontSize: t, primaryColor: r } = e;
  return { loaderFontSize: t, loaderTextColor: o, loaderColor: A, loaderBorder: "1px solid #0000", loadingColor: r };
} }, En = { name: "Mention", common: u, peers: { InternalSelectMenu: xe, Input: $ }, self(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
} }, wn = { name: "Menu", common: u, peers: { Tooltip: Re, Dropdown: Ue }, self(e) {
  const { primaryColor: o, primaryColorSuppl: A } = e, t = yr(e);
  return t.itemColorActive = C(o, { alpha: 0.15 }), t.itemColorActiveHover = C(o, { alpha: 0.15 }), t.itemColorActiveCollapsed = C(o, { alpha: 0.15 }), t.itemColorActiveInverted = A, t.itemColorActiveHoverInverted = A, t.itemColorActiveCollapsedInverted = A, t;
} }, Dn = { name: "PageHeader", common: u, self: kr }, zn = { name: "Popconfirm", common: u, peers: { Button: G, Popover: ge }, self: Er }, $o = { name: "Progress", common: u, self(e) {
  const o = wr(e);
  return o.textColorLineInner = "rgb(0, 0, 0)", o.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", o;
} }, Pn = { name: "Rate", common: u, self(e) {
  const { railColor: o } = e;
  return { itemColor: o, itemColorActive: "#CCAA33", itemSize: "20px", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
} }, Rn = { name: "Result", common: u, self: Dr }, Mn = { name: "Slider", common: u, self(e) {
  const o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: A, modalColor: t, primaryColorSuppl: r, popoverColor: i, textColor2: l, cardColor: c, borderRadius: n, fontSize: s, opacityDisabled: a } = e;
  return Object.assign(Object.assign({}, zr), { fontSize: s, markFontSize: s, railColor: A, railColorHover: A, fillColor: r, fillColorHover: r, opacityDisabled: a, handleColor: "#FFF", dotColor: c, dotColorModal: t, dotColorPopover: i, handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", indicatorColor: i, indicatorBoxShadow: o, indicatorTextColor: l, indicatorBorderRadius: n, dotBorder: `2px solid ${A}`, dotBorderActive: `2px solid ${r}`, dotBoxShadow: "" });
} }, Hn = { name: "Spin", common: u, self: Pr }, Qn = { name: "Statistic", common: u, self: Rr }, On = { name: "Steps", common: u, self: Mr }, Tn = { name: "Switch", common: u, self(e) {
  const { primaryColorSuppl: o, opacityDisabled: A, borderRadius: t, primaryColor: r, textColor2: i, baseColor: l } = e;
  return Object.assign(Object.assign({}, Hr), { iconColor: l, textColor: i, loadingColor: o, opacityDisabled: A, railColor: "rgba(255, 255, 255, .20)", railColorActive: o, buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", buttonColor: "#FFF", railBorderRadiusSmall: t, railBorderRadiusMedium: t, railBorderRadiusLarge: t, buttonBorderRadiusSmall: t, buttonBorderRadiusMedium: t, buttonBorderRadiusLarge: t, boxShadowFocus: `0 0 8px 0 ${C(r, { alpha: 0.3 })}` });
} }, Fn = { name: "Table", common: u, self: Qr }, Ln = { name: "Tabs", common: u, self(e) {
  const o = Or(e), { inputColor: A } = e;
  return o.colorSegment = A, o.tabColorSegment = A, o;
} }, Vn = { name: "Thing", common: u, self: Tr }, jn = { name: "Timeline", common: u, self(e) {
  const { textColor3: o, infoColorSuppl: A, errorColorSuppl: t, successColorSuppl: r, warningColorSuppl: i, textColor1: l, textColor2: c, railColor: n, fontWeightStrong: s, fontSize: a } = e;
  return Object.assign(Object.assign({}, Fr), { contentFontSize: a, titleFontWeight: s, circleBorder: `2px solid ${o}`, circleBorderInfo: `2px solid ${A}`, circleBorderError: `2px solid ${t}`, circleBorderSuccess: `2px solid ${r}`, circleBorderWarning: `2px solid ${i}`, iconColor: o, iconColorInfo: A, iconColorError: t, iconColorSuccess: r, iconColorWarning: i, titleTextColor: l, contentTextColor: c, metaTextColor: o, lineColor: n });
} }, Nn = { name: "Transfer", common: u, peers: { Checkbox: ve, Scrollbar: V, Input: $, Empty: pe, Button: G }, self(e) {
  const { fontWeight: o, fontSizeLarge: A, fontSizeMedium: t, fontSizeSmall: r, heightLarge: i, heightMedium: l, borderRadius: c, inputColor: n, tableHeaderColor: s, textColor1: a, textColorDisabled: m, textColor2: h, textColor3: b, hoverColor: S, closeColorHover: I, closeColorPressed: z, closeIconColor: M, closeIconColorHover: N, closeIconColorPressed: j, dividerColor: W } = e;
  return Object.assign(Object.assign({}, Lr), { itemHeightSmall: l, itemHeightMedium: l, itemHeightLarge: i, fontSizeSmall: r, fontSizeMedium: t, fontSizeLarge: A, borderRadius: c, dividerColor: W, borderColor: "#0000", listColor: n, headerColor: s, titleTextColor: a, titleTextColorDisabled: m, extraTextColor: b, extraTextColorDisabled: m, itemTextColor: h, itemTextColorDisabled: m, itemColorPending: S, titleFontWeight: o, closeColorHover: I, closeColorPressed: z, closeIconColor: M, closeIconColorHover: N, closeIconColorPressed: j });
} }, Yo = { name: "Tree", common: u, peers: { Checkbox: ve, Scrollbar: V, Empty: pe }, self(e) {
  const { primaryColor: o } = e, A = Vr(e);
  return A.nodeColorActive = C(o, { alpha: 0.15 }), A;
} }, Wn = { name: "TreeSelect", common: u, peers: { Tree: Yo, Empty: pe, InternalSelection: qe } }, Zn = { name: "Typography", common: u, self: jr }, Gn = { name: "Upload", common: u, peers: { Button: G, Progress: $o }, self(e) {
  const { errorColor: o } = e, A = Nr(e);
  return A.itemColorHoverError = C(o, { alpha: 0.09 }), A;
} }, $n = { name: "Watermark", common: u, self(e) {
  const { fontFamily: o } = e;
  return { fontFamily: o };
} }, Yn = { name: "FloatButton", common: u, self(e) {
  const { popoverColor: o, textColor2: A, buttonColor2Hover: t, buttonColor2Pressed: r, primaryColor: i, primaryColorHover: l, primaryColorPressed: c, baseColor: n, borderRadius: s } = e;
  return { color: o, textColor: A, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)", colorHover: t, colorPressed: r, colorPrimary: i, colorPrimaryHover: l, colorPrimaryPressed: c, textColorPrimary: n, borderRadiusSquare: s };
} }, Kn = O({ name: "GlobalStyle", setup() {
  if (typeof document > "u") return;
  const e = re(Wr, null), { body: o } = document, { style: A } = o;
  let t = false, r = true;
  Co(() => {
    Ne(() => {
      var i, l;
      const { textColor2: c, fontSize: n, fontFamily: s, bodyColor: a, cubicBezierEaseInOut: m, lineHeight: h } = e ? Zr.merge({}, ((i = e.mergedThemeRef.value) === null || i === void 0 ? void 0 : i.common) || io, (l = e.mergedThemeOverridesRef.value) === null || l === void 0 ? void 0 : l.common) : io;
      if (t || !o.hasAttribute("n-styled")) {
        A.setProperty("-webkit-text-size-adjust", "100%"), A.setProperty("-webkit-tap-highlight-color", "transparent"), A.padding = "0", A.margin = "0", A.backgroundColor = a, A.color = c, A.fontSize = n, A.fontFamily = s, A.lineHeight = h;
        const b = `color .3s ${m}, background-color .3s ${m}`;
        r ? setTimeout(() => {
          A.transition = b;
        }, 0) : A.transition = b, o.setAttribute("n-styled", ""), t = true, r = false;
      }
    });
  }), tA(() => {
    t && o.removeAttribute("n-styled");
  });
}, render() {
  return null;
} }), Jn = { name: "Heatmap", common: u, self(e) {
  const o = Gr(e);
  return Object.assign(Object.assign({}, o), { activeColors: ["#0d4429", "#006d32", "#26a641", "#39d353"], mininumColor: "rgba(255, 255, 255, 0.1)", loadingColorStart: "rgba(255, 255, 255, 0.12)", loadingColorEnd: "rgba(255, 255, 255, 0.18)" });
} }, Xn = { name: "IconWrapper", common: u, self: $r }, qn = { name: "Image", common: u, peers: { Tooltip: Re }, self: (e) => {
  const { textColor2: o } = e;
  return { toolbarIconColor: o, toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
} }, Un = he("n-layout-sider"), _n = { name: "Transfer", common: u, peers: { Checkbox: ve, Scrollbar: V, Input: $, Empty: pe, Button: G }, self(e) {
  const { iconColorDisabled: o, iconColor: A, fontWeight: t, fontSizeLarge: r, fontSizeMedium: i, fontSizeSmall: l, heightLarge: c, heightMedium: n, heightSmall: s, borderRadius: a, inputColor: m, tableHeaderColor: h, textColor1: b, textColorDisabled: S, textColor2: I, hoverColor: z } = e;
  return Object.assign(Object.assign({}, Yr), { itemHeightSmall: s, itemHeightMedium: n, itemHeightLarge: c, fontSizeSmall: l, fontSizeMedium: i, fontSizeLarge: r, borderRadius: a, borderColor: "#0000", listColor: m, headerColor: h, titleTextColor: b, titleTextColorDisabled: S, extraTextColor: I, filterDividerColor: "#0000", itemTextColor: I, itemTextColorDisabled: S, itemColorPending: z, titleFontWeight: t, iconColor: A, iconColorDisabled: o });
} }, el = { name: "Marquee", common: u, self: Kr }, Ie = he("n-menu"), Ko = he("n-submenu"), _e = he("n-menu-item-group"), ho = [w("&::before", "background-color: var(--n-item-color-hover);"), B("arrow", `
 color: var(--n-arrow-color-hover);
 `), B("icon", `
 color: var(--n-item-icon-color-hover);
 `), E("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [w("a", `
 color: var(--n-item-text-color-hover);
 `), B("extra", `
 color: var(--n-item-text-color-hover);
 `)])], po = [B("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), E("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [w("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), B("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])], ol = w([E("menu", `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [R("horizontal", `
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `, [E("submenu", "margin: 0;"), E("menu-item", "margin: 0;"), E("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [w("&::before", "display: none;"), R("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), E("menu-item-content", [R("selected", [B("icon", "color: var(--n-item-icon-color-active-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [w("a", "color: var(--n-item-text-color-active-horizontal);"), B("extra", "color: var(--n-item-text-color-active-horizontal);")])]), R("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [w("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), B("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), B("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), fe("disabled", [fe("selected, child-active", [w("&:focus-within", po)]), R("selected", [se(null, [B("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [w("a", "color: var(--n-item-text-color-active-hover-horizontal);"), B("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), R("child-active", [se(null, [B("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [w("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), B("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), se("border-bottom: 2px solid var(--n-border-color-horizontal);", po)]), E("menu-item-content-header", [w("a", "color: var(--n-item-text-color-horizontal);")])])]), fe("responsive", [E("menu-item-content-header", `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), R("collapsed", [E("menu-item-content", [R("selected", [w("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), E("menu-item-content-header", "opacity: 0;"), B("arrow", "opacity: 0;"), B("icon", "color: var(--n-item-icon-color-collapsed);")])]), E("menu-item", `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), E("menu-item-content", `
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [w("> *", "z-index: 1;"), w("&::before", `
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), R("disabled", `
 opacity: .45;
 cursor: not-allowed;
 `), R("collapsed", [B("arrow", "transform: rotate(0);")]), R("selected", [w("&::before", "background-color: var(--n-item-color-active);"), B("arrow", "color: var(--n-arrow-color-active);"), B("icon", "color: var(--n-item-icon-color-active);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [w("a", "color: var(--n-item-text-color-active);"), B("extra", "color: var(--n-item-text-color-active);")])]), R("child-active", [E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [w("a", `
 color: var(--n-item-text-color-child-active);
 `), B("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), B("arrow", `
 color: var(--n-arrow-color-child-active);
 `), B("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), fe("disabled", [fe("selected, child-active", [w("&:focus-within", ho)]), R("selected", [se(null, [B("arrow", "color: var(--n-arrow-color-active-hover);"), B("icon", "color: var(--n-item-icon-color-active-hover);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [w("a", "color: var(--n-item-text-color-active-hover);"), B("extra", "color: var(--n-item-text-color-active-hover);")])])]), R("child-active", [se(null, [B("arrow", "color: var(--n-arrow-color-child-active-hover);"), B("icon", "color: var(--n-item-icon-color-child-active-hover);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [w("a", "color: var(--n-item-text-color-child-active-hover);"), B("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), R("selected", [se(null, [w("&::before", "background-color: var(--n-item-color-active-hover);")])]), se(null, ho)]), B("icon", `
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `), B("arrow", `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), E("menu-item-content-header", `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `, [w("a", `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [w("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), B("extra", `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), E("submenu", `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [E("menu-item-content", `
 height: var(--n-item-height);
 `), E("submenu-children", `
 overflow: hidden;
 padding: 0;
 `, [yo({ duration: ".2s" })])]), E("menu-item-group", [E("menu-item-group-title", `
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]), E("menu-tooltip", [w("a", `
 color: inherit;
 text-decoration: none;
 `)]), E("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function se(e, o) {
  return [R("hover", e, o), w("&:hover", e, o)];
}
const Jo = O({ name: "MenuOptionContent", props: { collapsed: Boolean, disabled: Boolean, title: [String, Function], icon: Function, extra: [String, Function], showArrow: Boolean, childActive: Boolean, hover: Boolean, paddingLeft: Number, selected: Boolean, maxIconSize: { type: Number, required: true }, activeIconSize: { type: Number, required: true }, iconMarginRight: { type: Number, required: true }, clsPrefix: { type: String, required: true }, onClick: Function, tmNode: { type: Object, required: true }, isEllipsisPlaceholder: Boolean }, setup(e) {
  const { props: o } = re(Ie);
  return { menuProps: o, style: D(() => {
    const { paddingLeft: A } = e;
    return { paddingLeft: A && `${A}px` };
  }), iconStyle: D(() => {
    const { maxIconSize: A, activeIconSize: t, iconMarginRight: r } = e;
    return { width: `${A}px`, height: `${A}px`, fontSize: `${t}px`, marginRight: `${r}px` };
  }) };
}, render() {
  const { clsPrefix: e, tmNode: o, menuProps: { renderIcon: A, renderLabel: t, renderExtra: r, expandIcon: i } } = this, l = A ? A(o.rawNode) : ue(this.icon);
  return v("div", { onClick: (c) => {
    var n;
    (n = this.onClick) === null || n === void 0 || n.call(this, c);
  }, role: "none", class: [`${e}-menu-item-content`, { [`${e}-menu-item-content--selected`]: this.selected, [`${e}-menu-item-content--collapsed`]: this.collapsed, [`${e}-menu-item-content--child-active`]: this.childActive, [`${e}-menu-item-content--disabled`]: this.disabled, [`${e}-menu-item-content--hover`]: this.hover }], style: this.style }, l && v("div", { class: `${e}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [l]), v("div", { class: `${e}-menu-item-content-header`, role: "none" }, this.isEllipsisPlaceholder ? this.title : t ? t(o.rawNode) : ue(this.title), this.extra || r ? v("span", { class: `${e}-menu-item-content-header__extra` }, " ", r ? r(o.rawNode) : ue(this.extra)) : null), this.showArrow ? v(wo, { ariaHidden: true, class: `${e}-menu-item-content__arrow`, clsPrefix: e }, { default: () => i ? i(o.rawNode) : v(It, null) }) : null);
} }), ye = 8;
function eo(e) {
  const o = re(Ie), { props: A, mergedCollapsedRef: t } = o, r = re(Ko, null), i = re(_e, null), l = D(() => A.mode === "horizontal"), c = D(() => l.value ? A.dropdownPlacement : "tmNodes" in e ? "right-start" : "right"), n = D(() => {
    var h;
    return Math.max((h = A.collapsedIconSize) !== null && h !== void 0 ? h : A.iconSize, A.iconSize);
  }), s = D(() => {
    var h;
    return !l.value && e.root && t.value && (h = A.collapsedIconSize) !== null && h !== void 0 ? h : A.iconSize;
  }), a = D(() => {
    if (l.value) return;
    const { collapsedWidth: h, indent: b, rootIndent: S } = A, { root: I, isGroup: z } = e, M = S === void 0 ? b : S;
    return I ? t.value ? h / 2 - n.value / 2 : M : i && typeof i.paddingLeftRef.value == "number" ? b / 2 + i.paddingLeftRef.value : r && typeof r.paddingLeftRef.value == "number" ? (z ? b / 2 : b) + r.paddingLeftRef.value : 0;
  }), m = D(() => {
    const { collapsedWidth: h, indent: b, rootIndent: S } = A, { value: I } = n, { root: z } = e;
    return l.value || !z || !t.value ? ye : (S === void 0 ? b : S) + I + ye - (h + I) / 2;
  });
  return { dropdownPlacement: c, activeIconSize: s, maxIconSize: n, paddingLeft: a, iconMarginRight: m, NMenu: o, NSubmenu: r, NMenuOptionGroup: i };
}
const oo = { internalKey: { type: [String, Number], required: true }, root: Boolean, isGroup: Boolean, level: { type: Number, required: true }, title: [String, Function], extra: [String, Function] }, Al = O({ name: "MenuDivider", setup() {
  const e = re(Ie), { mergedClsPrefixRef: o, isHorizontalRef: A } = e;
  return () => A.value ? null : v("div", { class: `${o.value}-menu-divider` });
} }), Xo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function }), rl = Xe(Xo), tl = O({ name: "MenuOption", props: Xo, setup(e) {
  const o = eo(e), { NSubmenu: A, NMenu: t, NMenuOptionGroup: r } = o, { props: i, mergedClsPrefixRef: l, mergedCollapsedRef: c } = t, n = A ? A.mergedDisabledRef : r ? r.mergedDisabledRef : { value: false }, s = D(() => n.value || e.disabled);
  function a(h) {
    const { onClick: b } = e;
    b && b(h);
  }
  function m(h) {
    s.value || (t.doSelect(e.internalKey, e.tmNode.rawNode), a(h));
  }
  return { mergedClsPrefix: l, dropdownPlacement: o.dropdownPlacement, paddingLeft: o.paddingLeft, iconMarginRight: o.iconMarginRight, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, mergedTheme: t.mergedThemeRef, menuProps: i, dropdownEnabled: Ze(() => e.root && c.value && i.mode !== "horizontal" && !s.value), selected: Ze(() => t.mergedValueRef.value === e.internalKey), mergedDisabled: s, handleClick: m };
}, render() {
  const { mergedClsPrefix: e, mergedTheme: o, tmNode: A, menuProps: { renderLabel: t, nodeProps: r } } = this, i = r == null ? void 0 : r(A.rawNode);
  return v("div", Object.assign({}, i, { role: "menuitem", class: [`${e}-menu-item`, i == null ? void 0 : i.class] }), v(Jr, { theme: o.peers.Tooltip, themeOverrides: o.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: ["menu-tooltip"] }, { default: () => t ? t(A.rawNode) : ue(this.title), trigger: () => v(Jo, { tmNode: A, clsPrefix: e, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }) }));
} }), qo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, tmNodes: { type: Array, required: true } }), nl = Xe(qo), ll = O({ name: "MenuOptionGroup", props: qo, setup(e) {
  const o = eo(e), { NSubmenu: A } = o, t = D(() => (A == null ? void 0 : A.mergedDisabledRef.value) ? true : e.tmNode.disabled);
  L(_e, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: t });
  const { mergedClsPrefixRef: r, props: i } = re(Ie);
  return function() {
    const { value: l } = r, c = o.paddingLeft.value, { nodeProps: n } = i, s = n == null ? void 0 : n(e.tmNode.rawNode);
    return v("div", { class: `${l}-menu-item-group`, role: "group" }, v("div", Object.assign({}, s, { class: [`${l}-menu-item-group-title`, s == null ? void 0 : s.class], style: [(s == null ? void 0 : s.style) || "", c !== void 0 ? `padding-left: ${c}px;` : ""] }), ue(e.title), e.extra ? v(De, null, " ", ue(e.extra)) : null), v("div", null, e.tmNodes.map((a) => Ao(a, i))));
  };
} });
function Ge(e) {
  return e.type === "divider" || e.type === "render";
}
function al(e) {
  return e.type === "divider";
}
function Ao(e, o) {
  const { rawNode: A } = e, { show: t } = A;
  if (t === false) return null;
  if (Ge(A)) return al(A) ? v(Al, Object.assign({ key: e.key }, A.props)) : null;
  const { labelField: r } = o, { key: i, level: l, isGroup: c } = e, n = Object.assign(Object.assign({}, A), { title: A.title || A[r], extra: A.titleExtra || A.extra, key: i, internalKey: i, level: l, root: l === 0, isGroup: c });
  return e.children ? e.isGroup ? v(ll, ke(n, nl, { tmNode: e, tmNodes: e.children, key: i })) : v($e, ke(n, il, { key: i, rawNodes: A[o.childrenField], tmNodes: e.children, tmNode: e })) : v(tl, ke(n, rl, { key: i, tmNode: e }));
}
const Uo = Object.assign(Object.assign({}, oo), { rawNodes: { type: Array, default: () => [] }, tmNodes: { type: Array, default: () => [] }, tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function, domId: String, virtualChildActive: { type: Boolean, default: void 0 }, isEllipsisPlaceholder: Boolean }), il = Xe(Uo), $e = O({ name: "Submenu", props: Uo, setup(e) {
  const o = eo(e), { NMenu: A, NSubmenu: t } = o, { props: r, mergedCollapsedRef: i, mergedThemeRef: l } = A, c = D(() => {
    const { disabled: h } = e;
    return (t == null ? void 0 : t.mergedDisabledRef.value) || r.disabled ? true : h;
  }), n = Z(false);
  L(Ko, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: c }), L(_e, null);
  function s() {
    const { onClick: h } = e;
    h && h();
  }
  function a() {
    c.value || (i.value || A.toggleExpand(e.internalKey), s());
  }
  function m(h) {
    n.value = h;
  }
  return { menuProps: r, mergedTheme: l, doSelect: A.doSelect, inverted: A.invertedRef, isHorizontal: A.isHorizontalRef, mergedClsPrefix: A.mergedClsPrefixRef, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, iconMarginRight: o.iconMarginRight, dropdownPlacement: o.dropdownPlacement, dropdownShow: n, paddingLeft: o.paddingLeft, mergedDisabled: c, mergedValue: A.mergedValueRef, childActive: Ze(() => {
    var h;
    return (h = e.virtualChildActive) !== null && h !== void 0 ? h : A.activePathRef.value.includes(e.internalKey);
  }), collapsed: D(() => r.mode === "horizontal" ? false : i.value ? true : !A.mergedExpandedKeysRef.value.includes(e.internalKey)), dropdownEnabled: D(() => !c.value && (r.mode === "horizontal" || i.value)), handlePopoverShowChange: m, handleClick: a };
}, render() {
  var e;
  const { mergedClsPrefix: o, menuProps: { renderIcon: A, renderLabel: t } } = this, r = () => {
    const { isHorizontal: l, paddingLeft: c, collapsed: n, mergedDisabled: s, maxIconSize: a, activeIconSize: m, title: h, childActive: b, icon: S, handleClick: I, menuProps: { nodeProps: z }, dropdownShow: M, iconMarginRight: N, tmNode: j, mergedClsPrefix: W, isEllipsisPlaceholder: J, extra: Y } = this, Q = z == null ? void 0 : z(j.rawNode);
    return v("div", Object.assign({}, Q, { class: [`${W}-menu-item`, Q == null ? void 0 : Q.class], role: "menuitem" }), v(Jo, { tmNode: j, paddingLeft: c, collapsed: n, disabled: s, iconMarginRight: N, maxIconSize: a, activeIconSize: m, title: h, extra: Y, showArrow: !l, childActive: b, clsPrefix: W, icon: S, hover: M, onClick: I, isEllipsisPlaceholder: J }));
  }, i = () => v(Do, null, { default: () => {
    const { tmNodes: l, collapsed: c } = this;
    return c ? null : v("div", { class: `${o}-submenu-children`, role: "menu" }, l.map((n) => Ao(n, this.menuProps)));
  } });
  return this.root ? v(Xr, Object.assign({ size: "large", trigger: "hover" }, (e = this.menuProps) === null || e === void 0 ? void 0 : e.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: { fontSizeLarge: "14px", optionIconSizeLarge: "18px" }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: A, renderLabel: t }), { default: () => v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, r(), this.isHorizontal ? null : i()) }) : v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, r(), i());
} }), sl = Object.assign(Object.assign({}, Pe.props), { options: { type: Array, default: () => [] }, collapsed: { type: Boolean, default: void 0 }, collapsedWidth: { type: Number, default: 48 }, iconSize: { type: Number, default: 20 }, collapsedIconSize: { type: Number, default: 24 }, rootIndent: Number, indent: { type: Number, default: 32 }, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, disabledField: { type: String, default: "disabled" }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: { type: [String, Number], default: null }, mode: { type: String, default: "vertical" }, watchProps: { type: Array, default: void 0 }, disabled: Boolean, show: { type: Boolean, default: true }, inverted: Boolean, "onUpdate:expandedKeys": [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], "onUpdate:value": [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, dropdownProps: Object, accordion: Boolean, nodeProps: Function, dropdownPlacement: { type: String, default: "bottom" }, responsive: Boolean, items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array }), Le = O({ name: "Menu", inheritAttrs: false, props: sl, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: A } = Je(e), t = Pe("Menu", "-menu", ol, et, e, o), r = re(Un, null), i = D(() => {
    var f;
    const { collapsed: k } = e;
    if (k !== void 0) return k;
    if (r) {
      const { collapseModeRef: d, collapsedRef: x } = r;
      if (d.value === "width") return (f = x.value) !== null && f !== void 0 ? f : false;
    }
    return false;
  }), l = D(() => {
    const { keyField: f, childrenField: k, disabledField: d } = e;
    return Fe(e.items || e.options, { getIgnored(x) {
      return Ge(x);
    }, getChildren(x) {
      return x[k];
    }, getDisabled(x) {
      return x[d];
    }, getKey(x) {
      var P;
      return (P = x[f]) !== null && P !== void 0 ? P : x.name;
    } });
  }), c = D(() => new Set(l.value.treeNodes.map((f) => f.key))), { watchProps: n } = e, s = Z(null);
  (n == null ? void 0 : n.includes("defaultValue")) ? Ne(() => {
    s.value = e.defaultValue;
  }) : s.value = e.defaultValue;
  const a = to(e, "value"), m = so(a, s), h = Z([]), b = () => {
    h.value = e.defaultExpandAll ? l.value.getNonLeafKeys() : e.defaultExpandedNames || e.defaultExpandedKeys || l.value.getPath(m.value, { includeSelf: false }).keyPath;
  };
  (n == null ? void 0 : n.includes("defaultExpandedKeys")) ? Ne(b) : b();
  const S = Ur(e, ["expandedNames", "expandedKeys"]), I = so(S, h), z = D(() => l.value.treeNodes), M = D(() => l.value.getPath(m.value).keyPath);
  L(Ie, { props: e, mergedCollapsedRef: i, mergedThemeRef: t, mergedValueRef: m, mergedExpandedKeysRef: I, activePathRef: M, mergedClsPrefixRef: o, isHorizontalRef: D(() => e.mode === "horizontal"), invertedRef: to(e, "inverted"), doSelect: N, toggleExpand: W });
  function N(f, k) {
    const { "onUpdate:value": d, onUpdateValue: x, onSelect: P } = e;
    x && ie(x, f, k), d && ie(d, f, k), P && ie(P, f, k), s.value = f;
  }
  function j(f) {
    const { "onUpdate:expandedKeys": k, onUpdateExpandedKeys: d, onExpandedNamesChange: x, onOpenNamesChange: P } = e;
    k && ie(k, f), d && ie(d, f), x && ie(x, f), P && ie(P, f), h.value = f;
  }
  function W(f) {
    const k = Array.from(I.value), d = k.findIndex((x) => x === f);
    if (~d) k.splice(d, 1);
    else {
      if (e.accordion && c.value.has(f)) {
        const x = k.findIndex((P) => c.value.has(P));
        x > -1 && k.splice(x, 1);
      }
      k.push(f);
    }
    j(k);
  }
  const J = (f) => {
    const k = l.value.getPath(f ?? m.value, { includeSelf: false }).keyPath;
    if (!k.length) return;
    const d = Array.from(I.value), x = /* @__PURE__ */ new Set([...d, ...k]);
    e.accordion && c.value.forEach((P) => {
      x.has(P) && !k.includes(P) && x.delete(P);
    }), j(Array.from(x));
  }, Y = D(() => {
    const { inverted: f } = e, { common: { cubicBezierEaseInOut: k }, self: d } = t.value, { borderRadius: x, borderColorHorizontal: P, fontSize: _o, itemHeight: eA, dividerColor: oA } = d, p = { "--n-divider-color": oA, "--n-bezier": k, "--n-font-size": _o, "--n-border-color-horizontal": P, "--n-border-radius": x, "--n-item-height": eA };
    return f ? (p["--n-group-text-color"] = d.groupTextColorInverted, p["--n-color"] = d.colorInverted, p["--n-item-text-color"] = d.itemTextColorInverted, p["--n-item-text-color-hover"] = d.itemTextColorHoverInverted, p["--n-item-text-color-active"] = d.itemTextColorActiveInverted, p["--n-item-text-color-child-active"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHoverInverted, p["--n-item-icon-color"] = d.itemIconColorInverted, p["--n-item-icon-color-hover"] = d.itemIconColorHoverInverted, p["--n-item-icon-color-active"] = d.itemIconColorActiveInverted, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHoverInverted, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActiveInverted, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHoverInverted, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsedInverted, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontalInverted, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontalInverted, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontalInverted, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontalInverted, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontalInverted, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontalInverted, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontalInverted, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontalInverted, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontalInverted, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontalInverted, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontalInverted, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontalInverted, p["--n-arrow-color"] = d.arrowColorInverted, p["--n-arrow-color-hover"] = d.arrowColorHoverInverted, p["--n-arrow-color-active"] = d.arrowColorActiveInverted, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHoverInverted, p["--n-arrow-color-child-active"] = d.arrowColorChildActiveInverted, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHoverInverted, p["--n-item-color-hover"] = d.itemColorHoverInverted, p["--n-item-color-active"] = d.itemColorActiveInverted, p["--n-item-color-active-hover"] = d.itemColorActiveHoverInverted, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsedInverted) : (p["--n-group-text-color"] = d.groupTextColor, p["--n-color"] = d.color, p["--n-item-text-color"] = d.itemTextColor, p["--n-item-text-color-hover"] = d.itemTextColorHover, p["--n-item-text-color-active"] = d.itemTextColorActive, p["--n-item-text-color-child-active"] = d.itemTextColorChildActive, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveHover, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHover, p["--n-item-icon-color"] = d.itemIconColor, p["--n-item-icon-color-hover"] = d.itemIconColorHover, p["--n-item-icon-color-active"] = d.itemIconColorActive, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHover, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActive, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHover, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsed, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontal, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontal, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontal, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontal, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontal, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontal, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontal, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontal, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontal, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontal, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontal, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontal, p["--n-arrow-color"] = d.arrowColor, p["--n-arrow-color-hover"] = d.arrowColorHover, p["--n-arrow-color-active"] = d.arrowColorActive, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHover, p["--n-arrow-color-child-active"] = d.arrowColorChildActive, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHover, p["--n-item-color-hover"] = d.itemColorHover, p["--n-item-color-active"] = d.itemColorActive, p["--n-item-color-active-hover"] = d.itemColorActiveHover, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsed), p;
  }), Q = A ? Eo("menu", D(() => e.inverted ? "a" : "b"), Y, e) : void 0, X = ze(), U = Z(null), Ae = Z(null);
  let _ = true;
  const te = () => {
    var f;
    _ ? _ = false : (f = U.value) === null || f === void 0 || f.sync({ showAllItemsBeforeCalculate: true });
  };
  function ae() {
    return document.getElementById(X);
  }
  const ne = Z(-1);
  function Ce(f) {
    ne.value = e.options.length - f;
  }
  function Me(f) {
    f || (ne.value = -1);
  }
  const He = D(() => {
    const f = ne.value;
    return { children: f === -1 ? [] : e.options.slice(f) };
  }), Qe = D(() => {
    const { childrenField: f, disabledField: k, keyField: d } = e;
    return Fe([He.value], { getIgnored(x) {
      return Ge(x);
    }, getChildren(x) {
      return x[f];
    }, getDisabled(x) {
      return x[k];
    }, getKey(x) {
      var P;
      return (P = x[d]) !== null && P !== void 0 ? P : x.name;
    } });
  }), Oe = D(() => Fe([{}]).treeNodes[0]);
  function Te() {
    var f;
    if (ne.value === -1) return v($e, { root: true, level: 0, key: "__ellpisisGroupPlaceholder__", internalKey: "__ellpisisGroupPlaceholder__", title: "\xB7\xB7\xB7", tmNode: Oe.value, domId: X, isEllipsisPlaceholder: true });
    const k = Qe.value.treeNodes[0], d = M.value, x = !!(!((f = k.children) === null || f === void 0) && f.some((P) => d.includes(P.key)));
    return v($e, { level: 0, root: true, key: "__ellpisisGroup__", internalKey: "__ellpisisGroup__", title: "\xB7\xB7\xB7", virtualChildActive: x, tmNode: k, domId: X, rawNodes: k.rawNode.children || [], tmNodes: k.children || [], isEllipsisPlaceholder: true });
  }
  return { mergedClsPrefix: o, controlledExpandedKeys: S, uncontrolledExpanededKeys: h, mergedExpandedKeys: I, uncontrolledValue: s, mergedValue: m, activePath: M, tmNodes: z, mergedTheme: t, mergedCollapsed: i, cssVars: A ? void 0 : Y, themeClass: Q == null ? void 0 : Q.themeClass, overflowRef: U, counterRef: Ae, updateCounter: () => {
  }, onResize: te, onUpdateOverflow: Me, onUpdateCount: Ce, renderCounter: Te, getCounter: ae, onRender: Q == null ? void 0 : Q.onRender, showOption: J, deriveResponsiveState: te };
}, render() {
  const { mergedClsPrefix: e, mode: o, themeClass: A, onRender: t } = this;
  t == null ? void 0 : t();
  const r = () => this.tmNodes.map((n) => Ao(n, this.$props)), l = o === "horizontal" && this.responsive, c = () => v("div", nA(this.$attrs, { role: o === "horizontal" ? "menubar" : "menu", class: [`${e}-menu`, A, `${e}-menu--${o}`, l && `${e}-menu--responsive`, this.mergedCollapsed && `${e}-menu--collapsed`], style: this.cssVars }), l ? v(_r, { ref: "overflowRef", onUpdateOverflow: this.onUpdateOverflow, getCounter: this.getCounter, onUpdateCount: this.onUpdateCount, updateCounter: this.updateCounter, style: { width: "100%", display: "flex", overflow: "hidden" } }, { default: r, counter: this.renderCounter }) : r());
  return l ? v(qr, { onResize: this.onResize }, { default: c }) : c();
} }), cl = { name: "QrCode", common: u, self: (e) => ({ borderRadius: e.borderRadius }) }, dl = { name: "Skeleton", common: u, self(e) {
  const { heightSmall: o, heightMedium: A, heightLarge: t, borderRadius: r } = e;
  return { color: "rgba(255, 255, 255, 0.12)", colorEnd: "rgba(255, 255, 255, 0.18)", borderRadius: r, heightSmall: o, heightMedium: A, heightLarge: t };
} }, ul = { name: "Split", common: u }, ml = { name: "Equation", common: u, self: ot }, hl = { name: "FloatButtonGroup", common: u, self(e) {
  const { popoverColor: o, dividerColor: A, borderRadius: t } = e;
  return { color: o, buttonBorderColor: A, borderRadiusSquare: t, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
} }, pl = { name: "dark", common: u, Alert: kt, Anchor: Et, AutoComplete: Dt, Avatar: Ho, AvatarGroup: zt, BackTop: Pt, Badge: Rt, Breadcrumb: Mt, Button: G, ButtonGroup: Cn, Calendar: Ht, Card: Qo, Carousel: Qt, Cascader: Ot, Checkbox: ve, Code: Oo, Collapse: Tt, CollapseTransition: Ft, ColorPicker: Lt, DataTable: Vt, DatePicker: Nt, Descriptions: Wt, Dialog: Wo, Divider: un, Drawer: mn, Dropdown: Ue, DynamicInput: hn, DynamicTags: pn, Element: gn, Empty: pe, Ellipsis: Vo, Equation: ml, Flex: vn, Form: fn, GradientText: bn, Heatmap: Jn, Icon: jt, IconWrapper: Xn, Image: qn, Input: $, InputNumber: xn, InputOtp: In, LegacyTransfer: _n, Layout: Sn, List: yn, LoadingBar: Ut, Log: kn, Menu: wn, Mention: En, Message: _t, Modal: Zt, Notification: dn, PageHeader: Dn, Pagination: Lo, Popconfirm: zn, Popover: ge, Popselect: To, Progress: $o, QrCode: cl, Radio: jo, Rate: Pn, Result: Rn, Row: Bn, Scrollbar: V, Select: Fo, Skeleton: dl, Slider: Mn, Space: Go, Spin: Hn, Statistic: Qn, Steps: On, Switch: Tn, Table: Fn, Tabs: Ln, Tag: Mo, Thing: Vn, TimePicker: No, Timeline: jn, Tooltip: Re, Transfer: Nn, Tree: Yo, TreeSelect: Wn, Typography: Zn, Upload: Gn, Watermark: $n, Split: ul, FloatButton: Yn, FloatButtonGroup: hl, Marquee: el }, gl = { key: 0, class: "nav-bar" }, vl = { class: "software-info-menu" }, Cl = { style: { width: "100%" } }, fl = { key: 0, style: { width: "100%", "text-align": "center", padding: "4px" } }, bl = { key: 1, class: "nav-bar" }, xl = { key: 0, style: { width: "100%", "text-align": "center", padding: "4px" } }, Il = { class: "main-layout" }, Sl = O({ __name: "AppLayout", setup(e) {
  lA((I) => ({ dba89f70: S.value ? "column" : "row" }));
  const o = At(), A = zo(), t = new Po(), { t: r, locale: i } = mt();
  function l(I) {
    return () => v(uo, null, { default: () => v(I) });
  }
  A.settings.interfaceLanguage = A.settings.interfaceLanguage ?? i.value, i.value = A.settings.interfaceLanguage, aA(() => A.settings.interfaceLanguage, (I) => {
    I && (i.value = I);
  });
  const c = [{ label: () => v(Se, { to: "/tracker" }, { default: () => r("router.tracker") }), key: "tracker", icon: l(at) }, { label: () => v(Se, { to: "/sketch-centre" }, { default: () => r("router.sketchCentre") }), key: "sketch-centre", icon: l(it) }], n = [{ label: () => v(Se, { to: "/settings" }, { default: () => r("router.settings") }), key: "settings", icon: l(st) }, { label: () => v(Se, { to: "/about" }, { default: () => r("router.about") }), key: "about", icon: l(pt) }], s = D(() => o.path.slice(1)), a = `2a700ac
`, m = false, { width: h, height: b } = rt(), S = D(() => h.value > b.value);
  return (I, z) => (ee(), ce("div", { class: fo(["app-layout", S.value ? "app-layout-horizontal" : "app-layout-vertical"]) }, [S.value ? (ee(), ce("div", gl, [F(H(Le), { options: c, "default-value": "tracker", value: s.value, mode: S.value ? "vertical" : "horizontal" }, null, 8, ["value", "mode"]), oe("div", vl, [oe("div", Cl, [F(H(Le), { options: n, mode: S.value ? "vertical" : "horizontal", value: s.value }, null, 8, ["mode", "value"])]), H(a) ? (ee(), ce("div", fl, [F(H(co), { depth: "3" }, { default: K(() => [lo(ao(m ? "DEV MODE" : "Commit:" + H(a).toLocaleUpperCase()), 1)]), _: 1 })])) : no("", true)])])) : (ee(), ce("div", bl, [F(H(nt), { trigger: H(t).isMobile ? "click" : "hover", style: { padding: "2px 0", transform: "translateX(2px)" }, placement: "bottom-start" }, { trigger: K(() => [F(H(tt), { style: { width: "48px" } }, { icon: K(() => [F(H(uo), null, { default: K(() => [F(H(vt))]), _: 1 })]), _: 1 })]), default: K(() => [F(H(Le), { options: c.concat(n), "default-value": "tracker", value: s.value, "dropdown-placement": "top-start", mode: "vertical" }, null, 8, ["options", "value"])]), _: 1 }, 8, ["trigger"]), H(a) ? (ee(), ce("div", xl, [F(H(co), { depth: "3" }, { default: K(() => [lo(ao(m ? "DEV MODE" : "Commit:" + H(a).toLocaleUpperCase()), 1)]), _: 1 })])) : no("", true)])), oe("div", Il, [F(H(lt), null, { default: K(({ Component: M }) => [F(iA, { name: "slide-fade", mode: "out-in" }, { default: K(() => [(ee(), We(sA, null, [(ee(), We(cA(M), { key: s.value }))], 1024))]), _: 2 }, 1024)]), _: 1 })])], 2));
} }), Bl = dA(Sl, [["__scopeId", "data-v-ee060632"]]);
var Ve, go;
function yl() {
  return go || (go = 1, Ve = { webm: "data:video/webm;base64,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", mp4: "data:video/mp4;base64,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" }), Ve;
}
var je, vo;
function kl() {
  if (vo) return je;
  vo = 1;
  const { webm: e, mp4: o } = yl(), A = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, t = () => "wakeLock" in navigator;
  class r {
    constructor() {
      if (this.enabled = false, t()) {
        this._wakeLock = null;
        const l = () => {
          this._wakeLock !== null && document.visibilityState === "visible" && this.enable();
        };
        document.addEventListener("visibilitychange", l), document.addEventListener("fullscreenchange", l);
      } else A() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", e), this._addSourceToVideo(this.noSleepVideo, "mp4", o), this.noSleepVideo.addEventListener("loadedmetadata", () => {
        this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
          this.noSleepVideo.currentTime > 0.5 && (this.noSleepVideo.currentTime = Math.random());
        });
      }));
    }
    _addSourceToVideo(l, c, n) {
      var s = document.createElement("source");
      s.src = n, s.type = `video/${c}`, l.appendChild(s);
    }
    get isEnabled() {
      return this.enabled;
    }
    enable() {
      return t() ? navigator.wakeLock.request("screen").then((l) => {
        this._wakeLock = l, this.enabled = true, console.log("Wake Lock active."), this._wakeLock.addEventListener("release", () => {
          console.log("Wake Lock released.");
        });
      }).catch((l) => {
        throw this.enabled = false, console.error(`${l.name}, ${l.message}`), l;
      }) : A() ? (this.disable(), console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `), this.noSleepTimer = window.setInterval(() => {
        document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0));
      }, 15e3), this.enabled = true, Promise.resolve()) : this.noSleepVideo.play().then((c) => (this.enabled = true, c)).catch((c) => {
        throw this.enabled = false, c;
      });
    }
    disable() {
      t() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : A() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = false;
    }
  }
  return je = r, je;
}
var El = kl();
const wl = ct(El), Rl = O({ __name: "App", setup(e) {
  const o = zo(), A = window.GeolocationManager, t = xt(), r = D(() => (o.settings.theme === "system" ? t.value : o.settings.theme) === "dark" ? pl : dt), i = { common: { fontFamily: 'Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' } };
  return L("platformInfo", new Po()), L("settings", o), L("noSleep", new wl()), L("geolocation", A), bo(() => o.init()), (l, c) => (ee(), We(H(ut), { theme: r.value, abstract: true, "inline-theme-disabled": true, "theme-overrides": i }, { default: K(() => [F(H(qt), null, { default: K(() => [F(H(cn), null, { default: K(() => [F(H(ln), { placement: "bottom-right" }, { default: K(() => [F(Bl), F(H(Kn))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["theme"]));
} });
export {
  Rl as default
};
