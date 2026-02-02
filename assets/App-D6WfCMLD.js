import { d as T, c as pe, o as oe, a as le, r as ro, b as N, e as go, f as rA, h as v, n as vo, F as xe, p as L, g as Ye, i as Ae, j as k, k as Co, T as tA, w as Ne, l as nA, t as to, m as lA, q as aA, u as fo, s as iA, v as O, x as H, y as K, z as sA, A as cA, _ as bo, B as dA, C as uA, D as We, K as mA, E as hA, G as pA } from "./index-I9jdBYUT.js";
import { h as gA, c as vA, s as F, r as xo, a as be, b as CA, d as fA, e as bA, f as xA, g as IA, i as C, j as SA, k as BA, l as kA, m as yA, n as EA, o as wA, p as DA, q as zA, t as RA, u as PA, v as MA, w as HA, x as QA, y as OA, z as TA, A as FA, B as LA, C as VA, D as jA, E as NA, F as WA, G as ZA, H as GA, I as $A, J as YA, K as KA, L as JA, M as XA, N as qA, O as UA, P as _A, Q as er, R as ge, S as or, T as Ee, U as Ar, V as Io, W as rr, X as Ke, Y as So, Z as Bo, _ as tr, $ as ze, a0 as nr, a1 as lr, a2 as ar, a3 as D, a4 as E, a5 as ko, a6 as S, a7 as P, a8 as ir, a9 as sr, aa as de, ab as cr, ac as Je, ad as yo, ae as dr, af as Re, ag as ne, ah as Eo, ai as ur, aj as wo, ak as mr, al as hr, am as pr, an as gr, ao as vr, ap as Do, aq as Cr, ar as fr, as as br, at as xr, au as Ir, av as Sr, aw as Br, ax as kr, ay as yr, az as Er, aA as wr, aB as Dr, aC as zr, aD as Rr, aE as Pr, aF as Mr, aG as Hr, aH as Qr, aI as Or, aJ as Tr, aK as Fr, aL as Lr, aM as Vr, aN as jr, aO as Nr, aP as Wr, aQ as Zr, aR as Gr, aS as $r, aT as Yr, aU as Kr, aV as no, aW as Jr, aX as Xr, aY as qr, aZ as Ur, a_ as fe, a$ as Xe, b0 as _r, b1 as Ze, b2 as et, b3 as ot, b4 as At, b5 as Fe, b6 as lo, b7 as rt, b8 as tt, b9 as nt, ba as ie, bb as lt, bc as zo, bd as at, be as it, bf as st, bg as ct, bh as dt, bi as Ro, bj as Po, bk as ut, bl as mt, bm as ao, bn as ht, bo as pt, bp as gt, bq as Be, br as vt, bs as Ct, bt as ft, bu as bt, bv as xt } from "./SelectorDrawer.vue_vue_type_script_setup_true_lang-pqwbxKSG.js";
import { z as It } from "./index-DPLSS2D3.js";
import { getSystemLocale as io } from "./index-ln4IO0Xx.js";
const St = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Bt = T({ name: "Menu", render: function(o, A) {
  return oe(), pe("svg", St, A[0] || (A[0] = [le("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [le("path", { d: "M4 8h16" }), le("path", { d: "M4 16h16" })], -1)]));
} });
let ke = 0;
const kt = typeof window < "u" && window.matchMedia !== void 0, ue = N(null);
let q, ce;
function we(e) {
  e.matches && (ue.value = "dark");
}
function De(e) {
  e.matches && (ue.value = "light");
}
function yt() {
  q = window.matchMedia("(prefers-color-scheme: dark)"), ce = window.matchMedia("(prefers-color-scheme: light)"), q.matches ? ue.value = "dark" : ce.matches ? ue.value = "light" : ue.value = null, q.addEventListener ? (q.addEventListener("change", we), ce.addEventListener("change", De)) : q.addListener && (q.addListener(we), ce.addListener(De));
}
function Et() {
  "removeEventListener" in q ? (q.removeEventListener("change", we), ce.removeEventListener("change", De)) : "removeListener" in q && (q.removeListener(we), ce.removeListener(De)), q = void 0, ce = void 0;
}
let so = true;
function wt() {
  return kt ? (ke === 0 && yt(), so && (so = gA()) && (go(() => {
    ke += 1;
  }), rA(() => {
    ke -= 1, ke === 0 && Et();
  })), ro(ue)) : ro(ue);
}
const Dt = T({ name: "ChevronDownFilled", render() {
  return v("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, v("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" }));
} }), g = { neutralBase: "#000", neutralInvertBase: "#fff", neutralTextBase: "#fff", neutralPopover: "rgb(72, 72, 78)", neutralCard: "rgb(24, 24, 28)", neutralModal: "rgb(44, 44, 50)", neutralBody: "rgb(16, 16, 20)", alpha1: "0.9", alpha2: "0.82", alpha3: "0.52", alpha4: "0.38", alpha5: "0.28", alphaClose: "0.52", alphaDisabled: "0.38", alphaDisabledInput: "0.06", alphaPending: "0.09", alphaTablePending: "0.06", alphaTableStriped: "0.05", alphaPressed: "0.05", alphaAvatar: "0.18", alphaRail: "0.2", alphaProgressRail: "0.12", alphaBorder: "0.24", alphaDivider: "0.09", alphaInput: "0.1", alphaAction: "0.06", alphaTab: "0.04", alphaScrollbar: "0.2", alphaScrollbarHover: "0.3", alphaCode: "0.12", alphaTag: "0.2", primaryHover: "#7fe7c4", primaryDefault: "#63e2b7", primaryActive: "#5acea7", primarySuppl: "rgb(42, 148, 125)", infoHover: "#8acbec", infoDefault: "#70c0e8", infoActive: "#66afd3", infoSuppl: "rgb(56, 137, 197)", errorHover: "#e98b8b", errorDefault: "#e88080", errorActive: "#e57272", errorSuppl: "rgb(208, 58, 82)", warningHover: "#f5d599", warningDefault: "#f2c97d", warningActive: "#e6c260", warningSuppl: "rgb(240, 138, 0)", successHover: "#7fe7c4", successDefault: "#63e2b7", successActive: "#5acea7", successSuppl: "rgb(42, 148, 125)" }, zt = xo(g.neutralBase), Mo = xo(g.neutralInvertBase), Rt = `rgba(${Mo.slice(0, 3).join(", ")}, `;
function B(e) {
  return `${Rt + String(e)})`;
}
function Pt(e) {
  const o = Array.from(Mo);
  return o[3] = Number(e), be(zt, o);
}
const u = Object.assign(Object.assign({ name: "common" }, vA), { baseColor: g.neutralBase, primaryColor: g.primaryDefault, primaryColorHover: g.primaryHover, primaryColorPressed: g.primaryActive, primaryColorSuppl: g.primarySuppl, infoColor: g.infoDefault, infoColorHover: g.infoHover, infoColorPressed: g.infoActive, infoColorSuppl: g.infoSuppl, successColor: g.successDefault, successColorHover: g.successHover, successColorPressed: g.successActive, successColorSuppl: g.successSuppl, warningColor: g.warningDefault, warningColorHover: g.warningHover, warningColorPressed: g.warningActive, warningColorSuppl: g.warningSuppl, errorColor: g.errorDefault, errorColorHover: g.errorHover, errorColorPressed: g.errorActive, errorColorSuppl: g.errorSuppl, textColorBase: g.neutralTextBase, textColor1: B(g.alpha1), textColor2: B(g.alpha2), textColor3: B(g.alpha3), textColorDisabled: B(g.alpha4), placeholderColor: B(g.alpha4), placeholderColorDisabled: B(g.alpha5), iconColor: B(g.alpha4), iconColorDisabled: B(g.alpha5), iconColorHover: B(Number(g.alpha4) * 1.25), iconColorPressed: B(Number(g.alpha4) * 0.8), opacity1: g.alpha1, opacity2: g.alpha2, opacity3: g.alpha3, opacity4: g.alpha4, opacity5: g.alpha5, dividerColor: B(g.alphaDivider), borderColor: B(g.alphaBorder), closeIconColorHover: B(Number(g.alphaClose)), closeIconColor: B(Number(g.alphaClose)), closeIconColorPressed: B(Number(g.alphaClose)), closeColorHover: "rgba(255, 255, 255, .12)", closeColorPressed: "rgba(255, 255, 255, .08)", clearColor: B(g.alpha4), clearColorHover: F(B(g.alpha4), { alpha: 1.25 }), clearColorPressed: F(B(g.alpha4), { alpha: 0.8 }), scrollbarColor: B(g.alphaScrollbar), scrollbarColorHover: B(g.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: B(g.alphaProgressRail), railColor: B(g.alphaRail), popoverColor: g.neutralPopover, tableColor: g.neutralCard, cardColor: g.neutralCard, modalColor: g.neutralModal, bodyColor: g.neutralBody, tagColor: Pt(g.alphaTag), avatarColor: B(g.alphaAvatar), invertedColor: g.neutralBase, inputColor: B(g.alphaInput), codeColor: B(g.alphaCode), tabColor: B(g.alphaTab), actionColor: B(g.alphaAction), tableHeaderColor: B(g.alphaAction), hoverColor: B(g.alphaPending), tableColorHover: B(g.alphaTablePending), tableColorStriped: B(g.alphaTableStriped), pressedColor: B(g.alphaPressed), opacityDisabled: g.alphaDisabled, inputColorDisabled: B(g.alphaDisabledInput), buttonColor2: "rgba(255, 255, 255, .08)", buttonColor2Hover: "rgba(255, 255, 255, .12)", buttonColor2Pressed: "rgba(255, 255, 255, .08)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), V = { name: "Scrollbar", common: u, self: CA }, me = { name: "Empty", common: u, self: fA }, Ie = { name: "InternalSelectMenu", common: u, peers: { Scrollbar: V, Empty: me }, self: bA }, he = { name: "Popover", common: u, peers: { Scrollbar: V }, self: xA }, Ho = { name: "Tag", common: u, self(e) {
  const { textColor2: o, primaryColorHover: A, primaryColorPressed: r, primaryColor: t, infoColor: s, successColor: l, warningColor: c, errorColor: n, baseColor: i, borderColor: a, tagColor: m, opacityDisabled: h, closeIconColor: f, closeIconColorHover: x, closeIconColorPressed: w, closeColorHover: z, closeColorPressed: M, borderRadiusSmall: W, fontSizeMini: j, fontSizeTiny: Z, fontSizeSmall: J, fontSizeMedium: Y, heightMini: Q, heightTiny: X, heightSmall: U, heightMedium: ee, buttonColor2Hover: _, buttonColor2Pressed: re, fontWeightStrong: ae } = e;
  return Object.assign(Object.assign({}, IA), { closeBorderRadius: W, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: ee, borderRadius: W, opacityDisabled: h, fontSizeTiny: j, fontSizeSmall: Z, fontSizeMedium: J, fontSizeLarge: Y, fontWeightStrong: ae, textColorCheckable: o, textColorHoverCheckable: o, textColorPressedCheckable: o, textColorChecked: i, colorCheckable: "#0000", colorHoverCheckable: _, colorPressedCheckable: re, colorChecked: t, colorCheckedHover: A, colorCheckedPressed: r, border: `1px solid ${a}`, textColor: o, color: m, colorBordered: "#0000", closeIconColor: f, closeIconColorHover: x, closeIconColorPressed: w, closeColorHover: z, closeColorPressed: M, borderPrimary: `1px solid ${C(t, { alpha: 0.3 })}`, textColorPrimary: t, colorPrimary: C(t, { alpha: 0.16 }), colorBorderedPrimary: "#0000", closeIconColorPrimary: F(t, { lightness: 0.7 }), closeIconColorHoverPrimary: F(t, { lightness: 0.7 }), closeIconColorPressedPrimary: F(t, { lightness: 0.7 }), closeColorHoverPrimary: C(t, { alpha: 0.16 }), closeColorPressedPrimary: C(t, { alpha: 0.12 }), borderInfo: `1px solid ${C(s, { alpha: 0.3 })}`, textColorInfo: s, colorInfo: C(s, { alpha: 0.16 }), colorBorderedInfo: "#0000", closeIconColorInfo: F(s, { alpha: 0.7 }), closeIconColorHoverInfo: F(s, { alpha: 0.7 }), closeIconColorPressedInfo: F(s, { alpha: 0.7 }), closeColorHoverInfo: C(s, { alpha: 0.16 }), closeColorPressedInfo: C(s, { alpha: 0.12 }), borderSuccess: `1px solid ${C(l, { alpha: 0.3 })}`, textColorSuccess: l, colorSuccess: C(l, { alpha: 0.16 }), colorBorderedSuccess: "#0000", closeIconColorSuccess: F(l, { alpha: 0.7 }), closeIconColorHoverSuccess: F(l, { alpha: 0.7 }), closeIconColorPressedSuccess: F(l, { alpha: 0.7 }), closeColorHoverSuccess: C(l, { alpha: 0.16 }), closeColorPressedSuccess: C(l, { alpha: 0.12 }), borderWarning: `1px solid ${C(c, { alpha: 0.3 })}`, textColorWarning: c, colorWarning: C(c, { alpha: 0.16 }), colorBorderedWarning: "#0000", closeIconColorWarning: F(c, { alpha: 0.7 }), closeIconColorHoverWarning: F(c, { alpha: 0.7 }), closeIconColorPressedWarning: F(c, { alpha: 0.7 }), closeColorHoverWarning: C(c, { alpha: 0.16 }), closeColorPressedWarning: C(c, { alpha: 0.11 }), borderError: `1px solid ${C(n, { alpha: 0.3 })}`, textColorError: n, colorError: C(n, { alpha: 0.16 }), colorBorderedError: "#0000", closeIconColorError: F(n, { alpha: 0.7 }), closeIconColorHoverError: F(n, { alpha: 0.7 }), closeIconColorPressedError: F(n, { alpha: 0.7 }), closeColorHoverError: C(n, { alpha: 0.16 }), closeColorPressedError: C(n, { alpha: 0.12 }) });
} }, qe = { name: "InternalSelection", common: u, peers: { Popover: he }, self(e) {
  const { borderRadius: o, textColor2: A, textColorDisabled: r, inputColor: t, inputColorDisabled: s, primaryColor: l, primaryColorHover: c, warningColor: n, warningColorHover: i, errorColor: a, errorColorHover: m, iconColor: h, iconColorDisabled: f, clearColor: x, clearColorHover: w, clearColorPressed: z, placeholderColor: M, placeholderColorDisabled: W, fontSizeTiny: j, fontSizeSmall: Z, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: ee, fontWeight: _ } = e;
  return Object.assign(Object.assign({}, SA), { fontWeight: _, fontSizeTiny: j, fontSizeSmall: Z, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: ee, borderRadius: o, textColor: A, textColorDisabled: r, placeholderColor: M, placeholderColorDisabled: W, color: t, colorDisabled: s, colorActive: C(l, { alpha: 0.1 }), border: "1px solid #0000", borderHover: `1px solid ${c}`, borderActive: `1px solid ${l}`, borderFocus: `1px solid ${c}`, boxShadowHover: "none", boxShadowActive: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, boxShadowFocus: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, caretColor: l, arrowColor: h, arrowColorDisabled: f, loadingColor: l, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${i}`, borderActiveWarning: `1px solid ${n}`, borderFocusWarning: `1px solid ${i}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, colorActiveWarning: C(n, { alpha: 0.1 }), caretColorWarning: n, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${m}`, borderActiveError: `1px solid ${a}`, borderFocusError: `1px solid ${m}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, colorActiveError: C(a, { alpha: 0.1 }), caretColorError: a, clearColor: x, clearColorHover: w, clearColorPressed: z });
} }, Mt = { name: "Alert", common: u, self(e) {
  const { lineHeight: o, borderRadius: A, fontWeightStrong: r, dividerColor: t, inputColor: s, textColor1: l, textColor2: c, closeColorHover: n, closeColorPressed: i, closeIconColor: a, closeIconColorHover: m, closeIconColorPressed: h, infoColorSuppl: f, successColorSuppl: x, warningColorSuppl: w, errorColorSuppl: z, fontSize: M } = e;
  return Object.assign(Object.assign({}, BA), { fontSize: M, lineHeight: o, titleFontWeight: r, borderRadius: A, border: `1px solid ${t}`, color: s, titleTextColor: l, iconColor: c, contentTextColor: c, closeBorderRadius: A, closeColorHover: n, closeColorPressed: i, closeIconColor: a, closeIconColorHover: m, closeIconColorPressed: h, borderInfo: `1px solid ${C(f, { alpha: 0.35 })}`, colorInfo: C(f, { alpha: 0.25 }), titleTextColorInfo: l, iconColorInfo: f, contentTextColorInfo: c, closeColorHoverInfo: n, closeColorPressedInfo: i, closeIconColorInfo: a, closeIconColorHoverInfo: m, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${C(x, { alpha: 0.35 })}`, colorSuccess: C(x, { alpha: 0.25 }), titleTextColorSuccess: l, iconColorSuccess: x, contentTextColorSuccess: c, closeColorHoverSuccess: n, closeColorPressedSuccess: i, closeIconColorSuccess: a, closeIconColorHoverSuccess: m, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${C(w, { alpha: 0.35 })}`, colorWarning: C(w, { alpha: 0.25 }), titleTextColorWarning: l, iconColorWarning: w, contentTextColorWarning: c, closeColorHoverWarning: n, closeColorPressedWarning: i, closeIconColorWarning: a, closeIconColorHoverWarning: m, closeIconColorPressedWarning: h, borderError: `1px solid ${C(z, { alpha: 0.35 })}`, colorError: C(z, { alpha: 0.25 }), titleTextColorError: l, iconColorError: z, contentTextColorError: c, closeColorHoverError: n, closeColorPressedError: i, closeIconColorError: a, closeIconColorHoverError: m, closeIconColorPressedError: h });
} }, Ht = { name: "Anchor", common: u, self: kA };
function Qt(e) {
  const { textColor2: o, textColor3: A, textColorDisabled: r, primaryColor: t, primaryColorHover: s, inputColor: l, inputColorDisabled: c, warningColor: n, warningColorHover: i, errorColor: a, errorColorHover: m, borderRadius: h, lineHeight: f, fontSizeTiny: x, fontSizeSmall: w, fontSizeMedium: z, fontSizeLarge: M, heightTiny: W, heightSmall: j, heightMedium: Z, heightLarge: J, clearColor: Y, clearColorHover: Q, clearColorPressed: X, placeholderColor: U, placeholderColorDisabled: ee, iconColor: _, iconColorDisabled: re, iconColorHover: ae, iconColorPressed: te, fontWeight: Ce } = e;
  return Object.assign(Object.assign({}, EA), { fontWeight: Ce, countTextColorDisabled: r, countTextColor: A, heightTiny: W, heightSmall: j, heightMedium: Z, heightLarge: J, fontSizeTiny: x, fontSizeSmall: w, fontSizeMedium: z, fontSizeLarge: M, lineHeight: f, lineHeightTextarea: f, borderRadius: h, iconSize: "16px", groupLabelColor: l, textColor: o, textColorDisabled: r, textDecorationColor: o, groupLabelTextColor: o, caretColor: t, placeholderColor: U, placeholderColorDisabled: ee, color: l, colorDisabled: c, colorFocus: C(t, { alpha: 0.1 }), groupLabelBorder: "1px solid #0000", border: "1px solid #0000", borderHover: `1px solid ${s}`, borderDisabled: "1px solid #0000", borderFocus: `1px solid ${s}`, boxShadowFocus: `0 0 8px 0 ${C(t, { alpha: 0.3 })}`, loadingColor: t, loadingColorWarning: n, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${i}`, colorFocusWarning: C(n, { alpha: 0.1 }), borderFocusWarning: `1px solid ${i}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.3 })}`, caretColorWarning: n, loadingColorError: a, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${m}`, colorFocusError: C(a, { alpha: 0.1 }), borderFocusError: `1px solid ${m}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.3 })}`, caretColorError: a, clearColor: Y, clearColorHover: Q, clearColorPressed: X, iconColor: _, iconColorDisabled: re, iconColorHover: ae, iconColorPressed: te, suffixTextColor: o });
}
const $ = yA({ name: "Input", common: u, peers: { Scrollbar: V }, self: Qt }), Ot = { name: "AutoComplete", common: u, peers: { InternalSelectMenu: Ie, Input: $ }, self: wA }, Qo = { name: "Avatar", common: u, self: DA }, Tt = { name: "AvatarGroup", common: u, peers: { Avatar: Qo }, self: zA }, Ft = { name: "BackTop", common: u, self(e) {
  const { popoverColor: o, textColor2: A, primaryColorHover: r, primaryColorPressed: t } = e;
  return Object.assign(Object.assign({}, RA), { color: o, textColor: A, iconColor: A, iconColorHover: r, iconColorPressed: t, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
} }, Lt = { name: "Badge", common: u, self(e) {
  const { errorColorSuppl: o, infoColorSuppl: A, successColorSuppl: r, warningColorSuppl: t, fontFamily: s } = e;
  return { color: o, colorInfo: A, colorSuccess: r, colorError: o, colorWarning: t, fontSize: "12px", fontFamily: s };
} }, Vt = { name: "Breadcrumb", common: u, self: PA }, G = { name: "Button", common: u, self(e) {
  const o = MA(e);
  return o.waveOpacity = "0.8", o.colorOpacitySecondary = "0.16", o.colorOpacitySecondaryHover = "0.2", o.colorOpacitySecondaryPressed = "0.12", o;
} }, jt = { name: "Calendar", common: u, peers: { Button: G }, self: HA }, Oo = { name: "Card", common: u, self(e) {
  const o = QA(e), { cardColor: A, modalColor: r, popoverColor: t } = e;
  return o.colorEmbedded = A, o.colorEmbeddedModal = r, o.colorEmbeddedPopover = t, o;
} }, Nt = { name: "Carousel", common: u, self: OA }, ve = { name: "Checkbox", common: u, self(e) {
  const { cardColor: o } = e, A = TA(e);
  return A.color = "#0000", A.checkMarkColor = o, A;
} }, Wt = { name: "Cascader", common: u, peers: { InternalSelectMenu: Ie, InternalSelection: qe, Scrollbar: V, Checkbox: ve, Empty: LA }, self: FA }, To = { name: "Code", common: u, self(e) {
  const { textColor2: o, fontSize: A, fontWeightStrong: r, textColor3: t } = e;
  return { textColor: o, fontSize: A, fontWeightStrong: r, "mono-3": "#5c6370", "hue-1": "#56b6c2", "hue-2": "#61aeee", "hue-3": "#c678dd", "hue-4": "#98c379", "hue-5": "#e06c75", "hue-5-2": "#be5046", "hue-6": "#d19a66", "hue-6-2": "#e6c07b", lineNumberTextColor: t };
} }, Zt = { name: "Collapse", common: u, self: VA }, Gt = { name: "CollapseTransition", common: u, self: jA }, $t = { name: "ColorPicker", common: u, peers: { Input: $, Button: G }, self: NA }, Fo = { name: "Popselect", common: u, peers: { Popover: he, InternalSelectMenu: Ie } }, Lo = { name: "Select", common: u, peers: { InternalSelection: qe, InternalSelectMenu: Ie }, self: WA }, Vo = { name: "Pagination", common: u, peers: { Select: Lo, Input: $, Popselect: Fo }, self(e) {
  const { primaryColor: o, opacity3: A } = e, r = C(o, { alpha: Number(A) }), t = ZA(e);
  return t.itemBorderActive = `1px solid ${r}`, t.itemBorderDisabled = "1px solid #0000", t;
} }, Ue = { name: "Dropdown", common: u, peers: { Popover: he }, self(e) {
  const { primaryColorSuppl: o, primaryColor: A, popoverColor: r } = e, t = GA(e);
  return t.colorInverted = r, t.optionColorActive = C(A, { alpha: 0.15 }), t.optionColorActiveInverted = o, t.optionColorHoverInverted = o, t;
} }, Pe = { name: "Tooltip", common: u, peers: { Popover: he }, self(e) {
  const { borderRadius: o, boxShadow2: A, popoverColor: r, textColor2: t } = e;
  return Object.assign(Object.assign({}, $A), { borderRadius: o, boxShadow: A, color: r, textColor: t });
} }, jo = { name: "Ellipsis", common: u, peers: { Tooltip: Pe } }, No = { name: "Radio", common: u, self(e) {
  const { borderColor: o, primaryColor: A, baseColor: r, textColorDisabled: t, inputColorDisabled: s, textColor2: l, opacityDisabled: c, borderRadius: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: m, heightSmall: h, heightMedium: f, heightLarge: x, lineHeight: w } = e;
  return Object.assign(Object.assign({}, YA), { labelLineHeight: w, buttonHeightSmall: h, buttonHeightMedium: f, buttonHeightLarge: x, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: m, boxShadow: `inset 0 0 0 1px ${o}`, boxShadowActive: `inset 0 0 0 1px ${A}`, boxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, boxShadowHover: `inset 0 0 0 1px ${A}`, boxShadowDisabled: `inset 0 0 0 1px ${o}`, color: "#0000", colorDisabled: s, colorActive: "#0000", textColor: l, textColorDisabled: t, dotColorActive: A, dotColorDisabled: o, buttonBorderColor: o, buttonBorderColorActive: A, buttonBorderColorHover: A, buttonColor: "#0000", buttonColorActive: A, buttonTextColor: l, buttonTextColorActive: r, buttonTextColorHover: A, opacityDisabled: c, buttonBoxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px ${A}`, buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: n });
} }, Yt = { name: "DataTable", common: u, peers: { Button: G, Checkbox: ve, Radio: No, Pagination: Vo, Scrollbar: V, Empty: me, Popover: he, Ellipsis: jo, Dropdown: Ue }, self(e) {
  const o = KA(e);
  return o.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", o.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", o;
} }, Kt = { name: "Icon", common: u, self: JA }, Wo = { name: "TimePicker", common: u, peers: { Scrollbar: V, Button: G, Input: $ }, self: XA }, Jt = { name: "DatePicker", common: u, peers: { Input: $, Button: G, TimePicker: Wo, Scrollbar: V }, self(e) {
  const { popoverColor: o, hoverColor: A, primaryColor: r } = e, t = qA(e);
  return t.itemColorDisabled = be(o, A), t.itemColorIncluded = C(r, { alpha: 0.15 }), t.itemColorHover = be(o, A), t;
} }, Xt = { name: "Descriptions", common: u, self: UA }, Zo = { name: "Dialog", common: u, peers: { Button: G }, self: _A }, qt = { name: "Modal", common: u, peers: { Scrollbar: V, Dialog: Zo, Card: Oo }, self: er }, Ut = ge("n-modal-provider"), _t = ge("n-modal-api"), en = ge("n-modal-reactive-list"), on = Object.assign(Object.assign({}, rr), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, internalStyle: [String, Object], maskClosable: { type: Boolean, default: true }, zIndex: Number, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function, draggable: [Boolean, Object] }), An = T({ name: "DialogEnvironment", props: Object.assign(Object.assign({}, on), { internalKey: { type: String, required: true }, to: [String, Object], onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = N(true);
  function A() {
    const { onInternalAfterLeave: a, internalKey: m, onAfterLeave: h } = e;
    a && a(m), h && h();
  }
  function r(a) {
    const { onPositiveClick: m } = e;
    m ? Promise.resolve(m(a)).then((h) => {
      h !== false && n();
    }) : n();
  }
  function t(a) {
    const { onNegativeClick: m } = e;
    m ? Promise.resolve(m(a)).then((h) => {
      h !== false && n();
    }) : n();
  }
  function s() {
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
  function i(a) {
    o.value = a;
  }
  return { show: o, hide: n, handleUpdateShow: i, handleAfterLeave: A, handleCloseClick: s, handleNegativeClick: t, handlePositiveClick: r, handleMaskClick: l, handleEsc: c };
}, render() {
  const { handlePositiveClick: e, handleUpdateShow: o, handleNegativeClick: A, handleCloseClick: r, handleAfterLeave: t, handleMaskClick: s, handleEsc: l, to: c, zIndex: n, maskClosable: i, show: a } = this;
  return v(Io, { show: a, onUpdateShow: o, onMaskClick: s, onEsc: l, to: c, zIndex: n, maskClosable: i, onAfterEnter: this.onAfterEnter, onAfterLeave: t, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, draggable: this.draggable, internalAppear: true, internalDialog: true }, { default: ({ draggableClass: m }) => v(or, Object.assign({}, Ee(this.$props, Ar), { titleClass: vo([this.titleClass, m]), style: this.internalStyle, onClose: r, onNegativeClick: A, onPositiveClick: e })) });
} }), rn = { injectionKey: String, to: [String, Object] }, tn = T({ name: "DialogProvider", props: rn, setup() {
  const e = N([]), o = {};
  function A(c = {}) {
    const n = ze(), i = Ye(Object.assign(Object.assign({}, c), { key: n, destroy: () => {
      var a;
      (a = o[`n-dialog-${n}`]) === null || a === void 0 || a.hide();
    } }));
    return e.value.push(i), i;
  }
  const r = ["info", "success", "warning", "error"].map((c) => (n) => A(Object.assign(Object.assign({}, n), { type: c })));
  function t(c) {
    const { value: n } = e;
    n.splice(n.findIndex((i) => i.key === c), 1);
  }
  function s() {
    Object.values(o).forEach((c) => {
      c == null ? void 0 : c.hide();
    });
  }
  const l = { create: A, destroyAll: s, info: r[0], success: r[1], warning: r[2], error: r[3] };
  return L(nr, l), L(tr, { clickedRef: Bo(64), clickedPositionRef: So() }), L(lr, e), Object.assign(Object.assign({}, l), { dialogList: e, dialogInstRefs: o, handleAfterLeave: t });
}, render() {
  var e, o;
  return v(xe, null, [this.dialogList.map((A) => v(An, Ke(A, ["destroy", "style"], { internalStyle: A.style, to: this.to, ref: (r) => {
    r === null ? delete this.dialogInstRefs[`n-dialog-${A.key}`] : this.dialogInstRefs[`n-dialog-${A.key}`] = r;
  }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }))), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), nn = { name: "LoadingBar", common: u, self(e) {
  const { primaryColor: o } = e;
  return { colorError: "red", colorLoading: o, height: "2px" };
} }, ln = { name: "Message", common: u, self: ar }, Go = { icon: Function, type: { type: String, default: "info" }, content: [String, Number, Function], showIcon: { type: Boolean, default: true }, closable: Boolean, keepAliveOnHover: Boolean, onClose: Function, onMouseenter: Function, onMouseleave: Function }, an = D([E("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [ko({ overflow: "visible", originalTransition: "transform .3s var(--n-bezier)", enterToProps: { transform: "scale(1)" }, leaveToProps: { transform: "scale(0.85)" } })]), E("message", `
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
 `, [S("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), S("icon", `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => P(`${e}-type`, [D("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), D("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [ir()])]), S("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [D("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), D("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), E("message-container", `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [P("top", `
 top: 12px;
 left: 0;
 right: 0;
 `), P("top-left", `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), P("top-right", `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), P("bottom", `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), P("bottom-left", `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), P("bottom-right", `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]), sn = { info: () => v(vr, null), success: () => v(gr, null), warning: () => v(pr, null), error: () => v(hr, null), default: () => null }, cn = T({ name: "Message", props: Object.assign(Object.assign({}, Go), { render: Function }), setup(e) {
  const { inlineThemeDisabled: o, mergedRtlRef: A } = Je(e), { props: r, mergedClsPrefixRef: t } = Ae(yo), s = dr("Message", A, t), l = Re("Message", "-message", an, mr, r, t), c = k(() => {
    const { type: i } = e, { common: { cubicBezierEaseInOut: a }, self: { padding: m, margin: h, maxWidth: f, iconMargin: x, closeMargin: w, closeSize: z, iconSize: M, fontSize: W, lineHeight: j, borderRadius: Z, border: J, iconColorInfo: Y, iconColorSuccess: Q, iconColorWarning: X, iconColorError: U, iconColorLoading: ee, closeIconSize: _, closeBorderRadius: re, [ne("textColor", i)]: ae, [ne("boxShadow", i)]: te, [ne("color", i)]: Ce, [ne("closeColorHover", i)]: Me, [ne("closeColorPressed", i)]: He, [ne("closeIconColor", i)]: Qe, [ne("closeIconColorPressed", i)]: Oe, [ne("closeIconColorHover", i)]: Te } } = l.value;
    return { "--n-bezier": a, "--n-margin": h, "--n-padding": m, "--n-max-width": f, "--n-font-size": W, "--n-icon-margin": x, "--n-icon-size": M, "--n-close-icon-size": _, "--n-close-border-radius": re, "--n-close-size": z, "--n-close-margin": w, "--n-text-color": ae, "--n-color": Ce, "--n-box-shadow": te, "--n-icon-color-info": Y, "--n-icon-color-success": Q, "--n-icon-color-warning": X, "--n-icon-color-error": U, "--n-icon-color-loading": ee, "--n-close-color-hover": Me, "--n-close-color-pressed": He, "--n-close-icon-color": Qe, "--n-close-icon-color-pressed": Oe, "--n-close-icon-color-hover": Te, "--n-line-height": j, "--n-border-radius": Z, "--n-border": J };
  }), n = o ? Eo("message", k(() => e.type[0]), c, {}) : void 0;
  return { mergedClsPrefix: t, rtlEnabled: s, messageProviderProps: r, handleClose() {
    var i;
    (i = e.onClose) === null || i === void 0 || i.call(e);
  }, cssVars: o ? void 0 : c, themeClass: n == null ? void 0 : n.themeClass, onRender: n == null ? void 0 : n.onRender, placement: r.placement };
}, render() {
  const { render: e, type: o, closable: A, content: r, mergedClsPrefix: t, cssVars: s, themeClass: l, onRender: c, icon: n, handleClose: i, showIcon: a } = this;
  c == null ? void 0 : c();
  let m;
  return v("div", { class: [`${t}-message-wrapper`, l], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [{ alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end" }, s] }, e ? e(this.$props) : v("div", { class: [`${t}-message ${t}-message--${o}-type`, this.rtlEnabled && `${t}-message--rtl`] }, (m = dn(n, o, t)) && a ? v("div", { class: `${t}-message__icon ${t}-message__icon--${o}-type` }, v(sr, null, { default: () => m })) : null, v("div", { class: `${t}-message__content` }, de(r)), A ? v(cr, { clsPrefix: t, class: `${t}-message__close`, onClick: i, absolute: true }) : null));
} });
function dn(e, o, A) {
  if (typeof e == "function") return e();
  {
    const r = o === "loading" ? v(ur, { clsPrefix: A, strokeWidth: 24, scale: 0.85 }) : sn[o]();
    return r ? v(wo, { clsPrefix: A, key: o }, { default: () => r }) : null;
  }
}
const un = T({ name: "MessageEnvironment", props: Object.assign(Object.assign({}, Go), { duration: { type: Number, default: 3e3 }, onAfterLeave: Function, onLeave: Function, internalKey: { type: String, required: true }, onInternalAfterLeave: Function, onHide: Function, onAfterHide: Function }), setup(e) {
  let o = null;
  const A = N(true);
  Co(() => {
    r();
  });
  function r() {
    const { duration: a } = e;
    a && (o = window.setTimeout(l, a));
  }
  function t(a) {
    a.currentTarget === a.target && o !== null && (window.clearTimeout(o), o = null);
  }
  function s(a) {
    a.currentTarget === a.target && r();
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
    const { onAfterLeave: a, onInternalAfterLeave: m, onAfterHide: h, internalKey: f } = e;
    a && a(), m && m(f), h && h();
  }
  function i() {
    l();
  }
  return { show: A, hide: l, handleClose: c, handleAfterLeave: n, handleMouseleave: s, handleMouseenter: t, deactivate: i };
}, render() {
  return v(Do, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, { default: () => [this.show ? v(cn, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null] });
} }), mn = Object.assign(Object.assign({}, Re.props), { to: [String, Object], duration: { type: Number, default: 3e3 }, keepAliveOnHover: Boolean, max: Number, placement: { type: String, default: "top" }, closable: Boolean, containerClass: String, containerStyle: [String, Object] }), hn = T({ name: "MessageProvider", props: mn, setup(e) {
  const { mergedClsPrefixRef: o } = Je(e), A = N([]), r = N({}), t = { create(n, i) {
    return s(n, Object.assign({ type: "default" }, i));
  }, info(n, i) {
    return s(n, Object.assign(Object.assign({}, i), { type: "info" }));
  }, success(n, i) {
    return s(n, Object.assign(Object.assign({}, i), { type: "success" }));
  }, warning(n, i) {
    return s(n, Object.assign(Object.assign({}, i), { type: "warning" }));
  }, error(n, i) {
    return s(n, Object.assign(Object.assign({}, i), { type: "error" }));
  }, loading(n, i) {
    return s(n, Object.assign(Object.assign({}, i), { type: "loading" }));
  }, destroyAll: c };
  L(yo, { props: e, mergedClsPrefixRef: o }), L(Cr, t);
  function s(n, i) {
    const a = ze(), m = Ye(Object.assign(Object.assign({}, i), { content: n, key: a, destroy: () => {
      var f;
      (f = r.value[a]) === null || f === void 0 || f.hide();
    } })), { max: h } = e;
    return h && A.value.length >= h && A.value.shift(), A.value.push(m), m;
  }
  function l(n) {
    A.value.splice(A.value.findIndex((i) => i.key === n), 1), delete r.value[n];
  }
  function c() {
    Object.values(r.value).forEach((n) => {
      n.hide();
    });
  }
  return Object.assign({ mergedClsPrefix: o, messageRefs: r, messageList: A, handleAfterLeave: l }, t);
}, render() {
  var e, o, A;
  return v(xe, null, (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e), this.messageList.length ? v(tA, { to: (A = this.to) !== null && A !== void 0 ? A : "body" }, v("div", { class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass], key: "message-container", style: this.containerStyle }, this.messageList.map((r) => v(un, Object.assign({ ref: (t) => {
    t && (this.messageRefs[r.key] = t);
  }, internalKey: r.key, onInternalAfterLeave: this.handleAfterLeave }, Ke(r, ["destroy"], void 0), { duration: r.duration === void 0 ? this.duration : r.duration, keepAliveOnHover: r.keepAliveOnHover === void 0 ? this.keepAliveOnHover : r.keepAliveOnHover, closable: r.closable === void 0 ? this.closable : r.closable }))))) : null);
} }), pn = T({ name: "ModalEnvironment", props: Object.assign(Object.assign({}, fr), { internalKey: { type: String, required: true }, onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = N(true);
  function A() {
    const { onInternalAfterLeave: a, internalKey: m, onAfterLeave: h } = e;
    a && a(m), h && h();
  }
  function r() {
    const { onPositiveClick: a } = e;
    a ? Promise.resolve(a()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function t() {
    const { onNegativeClick: a } = e;
    a ? Promise.resolve(a()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function s() {
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
  function i(a) {
    o.value = a;
  }
  return { show: o, hide: n, handleUpdateShow: i, handleAfterLeave: A, handleCloseClick: s, handleNegativeClick: t, handlePositiveClick: r, handleMaskClick: l, handleEsc: c };
}, render() {
  const { handleUpdateShow: e, handleAfterLeave: o, handleMaskClick: A, handleEsc: r, show: t } = this;
  return v(Io, Object.assign({}, this.$props, { show: t, onUpdateShow: e, onMaskClick: A, onEsc: r, onAfterLeave: o, internalAppear: true, internalModal: true }), this.$slots);
} }), gn = { to: [String, Object] }, vn = T({ name: "ModalProvider", props: gn, setup() {
  const e = N([]), o = {};
  function A(l = {}) {
    const c = ze(), n = Ye(Object.assign(Object.assign({}, l), { key: c, destroy: () => {
      var i;
      (i = o[`n-modal-${c}`]) === null || i === void 0 || i.hide();
    } }));
    return e.value.push(n), n;
  }
  function r(l) {
    const { value: c } = e;
    c.splice(c.findIndex((n) => n.key === l), 1);
  }
  function t() {
    Object.values(o).forEach((l) => {
      l == null ? void 0 : l.hide();
    });
  }
  const s = { create: A, destroyAll: t };
  return L(_t, s), L(Ut, { clickedRef: Bo(64), clickedPositionRef: So() }), L(en, e), Object.assign(Object.assign({}, s), { modalList: e, modalInstRefs: o, handleAfterLeave: r });
}, render() {
  var e, o;
  return v(xe, null, [this.modalList.map((A) => {
    var r;
    return v(pn, Ke(A, ["destroy", "render"], { to: (r = A.to) !== null && r !== void 0 ? r : this.to, ref: (t) => {
      t === null ? delete this.modalInstRefs[`n-modal-${A.key}`] : this.modalInstRefs[`n-modal-${A.key}`] = t;
    }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }), { default: A.render });
  }), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), Cn = { name: "Notification", common: u, peers: { Scrollbar: V }, self: br }, fn = { name: "Divider", common: u, self: xr }, bn = { name: "Drawer", common: u, peers: { Scrollbar: V }, self: Ir }, xn = { name: "DynamicInput", common: u, peers: { Input: $, Button: G }, self() {
  return Sr;
} }, $o = { name: "Space", self() {
  return Br;
} }, In = { name: "DynamicTags", common: u, peers: { Input: $, Button: G, Tag: Ho, Space: $o }, self() {
  return { inputWidth: "64px" };
} }, Sn = { name: "Element", common: u }, Bn = { name: "Flex", self() {
  return kr;
} }, kn = { name: "ButtonGroup", common: u }, yn = { name: "Form", common: u, self: yr }, En = { name: "GradientText", common: u, self(e) {
  const { primaryColor: o, successColor: A, warningColor: r, errorColor: t, infoColor: s, primaryColorSuppl: l, successColorSuppl: c, warningColorSuppl: n, errorColorSuppl: i, infoColorSuppl: a, fontWeightStrong: m } = e;
  return { fontWeight: m, rotate: "252deg", colorStartPrimary: o, colorEndPrimary: l, colorStartInfo: s, colorEndInfo: a, colorStartWarning: r, colorEndWarning: n, colorStartError: t, colorEndError: i, colorStartSuccess: A, colorEndSuccess: c };
} }, wn = { name: "InputNumber", common: u, peers: { Button: G, Input: $ }, self(e) {
  const { textColorDisabled: o } = e;
  return { iconColorDisabled: o };
} }, Dn = { name: "InputOtp", common: u, peers: { Input: $ }, self: Er }, zn = { name: "Layout", common: u, peers: { Scrollbar: V }, self(e) {
  const { textColor2: o, bodyColor: A, popoverColor: r, cardColor: t, dividerColor: s, scrollbarColor: l, scrollbarColorHover: c } = e;
  return { textColor: o, textColorInverted: o, color: A, colorEmbedded: A, headerColor: t, headerColorInverted: t, footerColor: t, footerColorInverted: t, headerBorderColor: s, headerBorderColorInverted: s, footerBorderColor: s, footerBorderColorInverted: s, siderBorderColor: s, siderBorderColorInverted: s, siderColor: t, siderColorInverted: t, siderToggleButtonBorder: "1px solid transparent", siderToggleButtonColor: r, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: be(A, l), siderToggleBarColorHover: be(A, c), __invertScrollbar: "false" };
} }, Rn = { name: "Row", common: u }, Pn = { name: "List", common: u, self: wr }, Mn = { name: "Log", common: u, peers: { Scrollbar: V, Code: To }, self(e) {
  const { textColor2: o, inputColor: A, fontSize: r, primaryColor: t } = e;
  return { loaderFontSize: r, loaderTextColor: o, loaderColor: A, loaderBorder: "1px solid #0000", loadingColor: t };
} }, Hn = { name: "Mention", common: u, peers: { InternalSelectMenu: Ie, Input: $ }, self(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
} }, Qn = { name: "Menu", common: u, peers: { Tooltip: Pe, Dropdown: Ue }, self(e) {
  const { primaryColor: o, primaryColorSuppl: A } = e, r = Dr(e);
  return r.itemColorActive = C(o, { alpha: 0.15 }), r.itemColorActiveHover = C(o, { alpha: 0.15 }), r.itemColorActiveCollapsed = C(o, { alpha: 0.15 }), r.itemColorActiveInverted = A, r.itemColorActiveHoverInverted = A, r.itemColorActiveCollapsedInverted = A, r;
} }, On = { name: "PageHeader", common: u, self: zr }, Tn = { name: "Popconfirm", common: u, peers: { Button: G, Popover: he }, self: Rr }, Yo = { name: "Progress", common: u, self(e) {
  const o = Pr(e);
  return o.textColorLineInner = "rgb(0, 0, 0)", o.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", o;
} }, Fn = { name: "Rate", common: u, self(e) {
  const { railColor: o } = e;
  return { itemColor: o, itemColorActive: "#CCAA33", itemSize: "20px", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
} }, Ln = { name: "Result", common: u, self: Mr }, Vn = { name: "Slider", common: u, self(e) {
  const o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: A, modalColor: r, primaryColorSuppl: t, popoverColor: s, textColor2: l, cardColor: c, borderRadius: n, fontSize: i, opacityDisabled: a } = e;
  return Object.assign(Object.assign({}, Hr), { fontSize: i, markFontSize: i, railColor: A, railColorHover: A, fillColor: t, fillColorHover: t, opacityDisabled: a, handleColor: "#FFF", dotColor: c, dotColorModal: r, dotColorPopover: s, handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", indicatorColor: s, indicatorBoxShadow: o, indicatorTextColor: l, indicatorBorderRadius: n, dotBorder: `2px solid ${A}`, dotBorderActive: `2px solid ${t}`, dotBoxShadow: "" });
} }, jn = { name: "Spin", common: u, self: Qr }, Nn = { name: "Statistic", common: u, self: Or }, Wn = { name: "Steps", common: u, self: Tr }, Zn = { name: "Switch", common: u, self(e) {
  const { primaryColorSuppl: o, opacityDisabled: A, borderRadius: r, primaryColor: t, textColor2: s, baseColor: l } = e;
  return Object.assign(Object.assign({}, Fr), { iconColor: l, textColor: s, loadingColor: o, opacityDisabled: A, railColor: "rgba(255, 255, 255, .20)", railColorActive: o, buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 8px 0 ${C(t, { alpha: 0.3 })}` });
} }, Gn = { name: "Table", common: u, self: Lr }, $n = { name: "Tabs", common: u, self(e) {
  const o = Vr(e), { inputColor: A } = e;
  return o.colorSegment = A, o.tabColorSegment = A, o;
} }, Yn = { name: "Thing", common: u, self: jr }, Kn = { name: "Timeline", common: u, self(e) {
  const { textColor3: o, infoColorSuppl: A, errorColorSuppl: r, successColorSuppl: t, warningColorSuppl: s, textColor1: l, textColor2: c, railColor: n, fontWeightStrong: i, fontSize: a } = e;
  return Object.assign(Object.assign({}, Nr), { contentFontSize: a, titleFontWeight: i, circleBorder: `2px solid ${o}`, circleBorderInfo: `2px solid ${A}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${t}`, circleBorderWarning: `2px solid ${s}`, iconColor: o, iconColorInfo: A, iconColorError: r, iconColorSuccess: t, iconColorWarning: s, titleTextColor: l, contentTextColor: c, metaTextColor: o, lineColor: n });
} }, Jn = { name: "Transfer", common: u, peers: { Checkbox: ve, Scrollbar: V, Input: $, Empty: me, Button: G }, self(e) {
  const { fontWeight: o, fontSizeLarge: A, fontSizeMedium: r, fontSizeSmall: t, heightLarge: s, heightMedium: l, borderRadius: c, inputColor: n, tableHeaderColor: i, textColor1: a, textColorDisabled: m, textColor2: h, textColor3: f, hoverColor: x, closeColorHover: w, closeColorPressed: z, closeIconColor: M, closeIconColorHover: W, closeIconColorPressed: j, dividerColor: Z } = e;
  return Object.assign(Object.assign({}, Wr), { itemHeightSmall: l, itemHeightMedium: l, itemHeightLarge: s, fontSizeSmall: t, fontSizeMedium: r, fontSizeLarge: A, borderRadius: c, dividerColor: Z, borderColor: "#0000", listColor: n, headerColor: i, titleTextColor: a, titleTextColorDisabled: m, extraTextColor: f, extraTextColorDisabled: m, itemTextColor: h, itemTextColorDisabled: m, itemColorPending: x, titleFontWeight: o, closeColorHover: w, closeColorPressed: z, closeIconColor: M, closeIconColorHover: W, closeIconColorPressed: j });
} }, Ko = { name: "Tree", common: u, peers: { Checkbox: ve, Scrollbar: V, Empty: me }, self(e) {
  const { primaryColor: o } = e, A = Zr(e);
  return A.nodeColorActive = C(o, { alpha: 0.15 }), A;
} }, Xn = { name: "TreeSelect", common: u, peers: { Tree: Ko, Empty: me, InternalSelection: qe } }, qn = { name: "Typography", common: u, self: Gr }, Un = { name: "Upload", common: u, peers: { Button: G, Progress: Yo }, self(e) {
  const { errorColor: o } = e, A = $r(e);
  return A.itemColorHoverError = C(o, { alpha: 0.09 }), A;
} }, _n = { name: "Watermark", common: u, self(e) {
  const { fontFamily: o } = e;
  return { fontFamily: o };
} }, el = { name: "FloatButton", common: u, self(e) {
  const { popoverColor: o, textColor2: A, buttonColor2Hover: r, buttonColor2Pressed: t, primaryColor: s, primaryColorHover: l, primaryColorPressed: c, baseColor: n, borderRadius: i } = e;
  return { color: o, textColor: A, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)", colorHover: r, colorPressed: t, colorPrimary: s, colorPrimaryHover: l, colorPrimaryPressed: c, textColorPrimary: n, borderRadiusSquare: i };
} }, ol = T({ name: "GlobalStyle", setup() {
  if (typeof document > "u") return;
  const e = Ae(Yr, null), { body: o } = document, { style: A } = o;
  let r = false, t = true;
  go(() => {
    Ne(() => {
      var s, l;
      const { textColor2: c, fontSize: n, fontFamily: i, bodyColor: a, cubicBezierEaseInOut: m, lineHeight: h } = e ? Kr({}, ((s = e.mergedThemeRef.value) === null || s === void 0 ? void 0 : s.common) || no, (l = e.mergedThemeOverridesRef.value) === null || l === void 0 ? void 0 : l.common) : no;
      if (r || !o.hasAttribute("n-styled")) {
        A.setProperty("-webkit-text-size-adjust", "100%"), A.setProperty("-webkit-tap-highlight-color", "transparent"), A.padding = "0", A.margin = "0", A.backgroundColor = a, A.color = c, A.fontSize = n, A.fontFamily = i, A.lineHeight = h;
        const f = `color .3s ${m}, background-color .3s ${m}`;
        t ? setTimeout(() => {
          A.transition = f;
        }, 0) : A.transition = f, o.setAttribute("n-styled", ""), r = true, t = false;
      }
    });
  }), nA(() => {
    r && o.removeAttribute("n-styled");
  });
}, render() {
  return null;
} }), Al = { name: "Heatmap", common: u, self(e) {
  const o = Jr(e);
  return Object.assign(Object.assign({}, o), { activeColors: ["#0d4429", "#006d32", "#26a641", "#39d353"], mininumColor: "rgba(255, 255, 255, 0.1)", loadingColorStart: "rgba(255, 255, 255, 0.12)", loadingColorEnd: "rgba(255, 255, 255, 0.18)" });
} }, rl = { name: "IconWrapper", common: u, self: Xr }, tl = { name: "Image", common: u, peers: { Tooltip: Pe }, self: (e) => {
  const { textColor2: o } = e;
  return { toolbarIconColor: o, toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
} }, nl = { name: "Transfer", common: u, peers: { Checkbox: ve, Scrollbar: V, Input: $, Empty: me, Button: G }, self(e) {
  const { iconColorDisabled: o, iconColor: A, fontWeight: r, fontSizeLarge: t, fontSizeMedium: s, fontSizeSmall: l, heightLarge: c, heightMedium: n, heightSmall: i, borderRadius: a, inputColor: m, tableHeaderColor: h, textColor1: f, textColorDisabled: x, textColor2: w, hoverColor: z } = e;
  return Object.assign(Object.assign({}, qr), { itemHeightSmall: i, itemHeightMedium: n, itemHeightLarge: c, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: t, borderRadius: a, borderColor: "#0000", listColor: m, headerColor: h, titleTextColor: f, titleTextColorDisabled: x, extraTextColor: w, filterDividerColor: "#0000", itemTextColor: w, itemTextColorDisabled: x, itemColorPending: z, titleFontWeight: r, iconColor: A, iconColorDisabled: o });
} }, ll = { name: "Marquee", common: u, self: Ur }, Se = ge("n-menu"), Jo = ge("n-submenu"), _e = ge("n-menu-item-group"), co = [D("&::before", "background-color: var(--n-item-color-hover);"), S("arrow", `
 color: var(--n-arrow-color-hover);
 `), S("icon", `
 color: var(--n-item-icon-color-hover);
 `), E("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [D("a", `
 color: var(--n-item-text-color-hover);
 `), S("extra", `
 color: var(--n-item-text-color-hover);
 `)])], uo = [S("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), E("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [D("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), S("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])], al = D([E("menu", `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [P("horizontal", `
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `, [E("submenu", "margin: 0;"), E("menu-item", "margin: 0;"), E("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [D("&::before", "display: none;"), P("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), E("menu-item-content", [P("selected", [S("icon", "color: var(--n-item-icon-color-active-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [D("a", "color: var(--n-item-text-color-active-horizontal);"), S("extra", "color: var(--n-item-text-color-active-horizontal);")])]), P("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [D("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), S("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), S("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), fe("disabled", [fe("selected, child-active", [D("&:focus-within", uo)]), P("selected", [se(null, [S("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [D("a", "color: var(--n-item-text-color-active-hover-horizontal);"), S("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), P("child-active", [se(null, [S("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [D("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), S("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), se("border-bottom: 2px solid var(--n-border-color-horizontal);", uo)]), E("menu-item-content-header", [D("a", "color: var(--n-item-text-color-horizontal);")])])]), fe("responsive", [E("menu-item-content-header", `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), P("collapsed", [E("menu-item-content", [P("selected", [D("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), E("menu-item-content-header", "opacity: 0;"), S("arrow", "opacity: 0;"), S("icon", "color: var(--n-item-icon-color-collapsed);")])]), E("menu-item", `
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
 `, [D("> *", "z-index: 1;"), D("&::before", `
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
 `), P("disabled", `
 opacity: .45;
 cursor: not-allowed;
 `), P("collapsed", [S("arrow", "transform: rotate(0);")]), P("selected", [D("&::before", "background-color: var(--n-item-color-active);"), S("arrow", "color: var(--n-arrow-color-active);"), S("icon", "color: var(--n-item-icon-color-active);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [D("a", "color: var(--n-item-text-color-active);"), S("extra", "color: var(--n-item-text-color-active);")])]), P("child-active", [E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [D("a", `
 color: var(--n-item-text-color-child-active);
 `), S("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), S("arrow", `
 color: var(--n-arrow-color-child-active);
 `), S("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), fe("disabled", [fe("selected, child-active", [D("&:focus-within", co)]), P("selected", [se(null, [S("arrow", "color: var(--n-arrow-color-active-hover);"), S("icon", "color: var(--n-item-icon-color-active-hover);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [D("a", "color: var(--n-item-text-color-active-hover);"), S("extra", "color: var(--n-item-text-color-active-hover);")])])]), P("child-active", [se(null, [S("arrow", "color: var(--n-arrow-color-child-active-hover);"), S("icon", "color: var(--n-item-icon-color-child-active-hover);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [D("a", "color: var(--n-item-text-color-child-active-hover);"), S("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), P("selected", [se(null, [D("&::before", "background-color: var(--n-item-color-active-hover);")])]), se(null, co)]), S("icon", `
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
 `), S("arrow", `
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
 `, [D("a", `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [D("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), S("extra", `
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
 `, [ko({ duration: ".2s" })])]), E("menu-item-group", [E("menu-item-group-title", `
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
 `)])]), E("menu-tooltip", [D("a", `
 color: inherit;
 text-decoration: none;
 `)]), E("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function se(e, o) {
  return [P("hover", e, o), D("&:hover", e, o)];
}
const Xo = T({ name: "MenuOptionContent", props: { collapsed: Boolean, disabled: Boolean, title: [String, Function], icon: Function, extra: [String, Function], showArrow: Boolean, childActive: Boolean, hover: Boolean, paddingLeft: Number, selected: Boolean, maxIconSize: { type: Number, required: true }, activeIconSize: { type: Number, required: true }, iconMarginRight: { type: Number, required: true }, clsPrefix: { type: String, required: true }, onClick: Function, tmNode: { type: Object, required: true }, isEllipsisPlaceholder: Boolean }, setup(e) {
  const { props: o } = Ae(Se);
  return { menuProps: o, style: k(() => {
    const { paddingLeft: A } = e;
    return { paddingLeft: A && `${A}px` };
  }), iconStyle: k(() => {
    const { maxIconSize: A, activeIconSize: r, iconMarginRight: t } = e;
    return { width: `${A}px`, height: `${A}px`, fontSize: `${r}px`, marginRight: `${t}px` };
  }) };
}, render() {
  const { clsPrefix: e, tmNode: o, menuProps: { renderIcon: A, renderLabel: r, renderExtra: t, expandIcon: s } } = this, l = A ? A(o.rawNode) : de(this.icon);
  return v("div", { onClick: (c) => {
    var n;
    (n = this.onClick) === null || n === void 0 || n.call(this, c);
  }, role: "none", class: [`${e}-menu-item-content`, { [`${e}-menu-item-content--selected`]: this.selected, [`${e}-menu-item-content--collapsed`]: this.collapsed, [`${e}-menu-item-content--child-active`]: this.childActive, [`${e}-menu-item-content--disabled`]: this.disabled, [`${e}-menu-item-content--hover`]: this.hover }], style: this.style }, l && v("div", { class: `${e}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [l]), v("div", { class: `${e}-menu-item-content-header`, role: "none" }, this.isEllipsisPlaceholder ? this.title : r ? r(o.rawNode) : de(this.title), this.extra || t ? v("span", { class: `${e}-menu-item-content-header__extra` }, " ", t ? t(o.rawNode) : de(this.extra)) : null), this.showArrow ? v(wo, { ariaHidden: true, class: `${e}-menu-item-content__arrow`, clsPrefix: e }, { default: () => s ? s(o.rawNode) : v(Dt, null) }) : null);
} }), ye = 8;
function eo(e) {
  const o = Ae(Se), { props: A, mergedCollapsedRef: r } = o, t = Ae(Jo, null), s = Ae(_e, null), l = k(() => A.mode === "horizontal"), c = k(() => l.value ? A.dropdownPlacement : "tmNodes" in e ? "right-start" : "right"), n = k(() => {
    var h;
    return Math.max((h = A.collapsedIconSize) !== null && h !== void 0 ? h : A.iconSize, A.iconSize);
  }), i = k(() => {
    var h;
    return !l.value && e.root && r.value && (h = A.collapsedIconSize) !== null && h !== void 0 ? h : A.iconSize;
  }), a = k(() => {
    if (l.value) return;
    const { collapsedWidth: h, indent: f, rootIndent: x } = A, { root: w, isGroup: z } = e, M = x === void 0 ? f : x;
    return w ? r.value ? h / 2 - n.value / 2 : M : s && typeof s.paddingLeftRef.value == "number" ? f / 2 + s.paddingLeftRef.value : t && typeof t.paddingLeftRef.value == "number" ? (z ? f / 2 : f) + t.paddingLeftRef.value : 0;
  }), m = k(() => {
    const { collapsedWidth: h, indent: f, rootIndent: x } = A, { value: w } = n, { root: z } = e;
    return l.value || !z || !r.value ? ye : (x === void 0 ? f : x) + w + ye - (h + w) / 2;
  });
  return { dropdownPlacement: c, activeIconSize: i, maxIconSize: n, paddingLeft: a, iconMarginRight: m, NMenu: o, NSubmenu: t, NMenuOptionGroup: s };
}
const oo = { internalKey: { type: [String, Number], required: true }, root: Boolean, isGroup: Boolean, level: { type: Number, required: true }, title: [String, Function], extra: [String, Function] }, il = T({ name: "MenuDivider", setup() {
  const e = Ae(Se), { mergedClsPrefixRef: o, isHorizontalRef: A } = e;
  return () => A.value ? null : v("div", { class: `${o.value}-menu-divider` });
} }), qo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function }), sl = Xe(qo), cl = T({ name: "MenuOption", props: qo, setup(e) {
  const o = eo(e), { NSubmenu: A, NMenu: r, NMenuOptionGroup: t } = o, { props: s, mergedClsPrefixRef: l, mergedCollapsedRef: c } = r, n = A ? A.mergedDisabledRef : t ? t.mergedDisabledRef : { value: false }, i = k(() => n.value || e.disabled);
  function a(h) {
    const { onClick: f } = e;
    f && f(h);
  }
  function m(h) {
    i.value || (r.doSelect(e.internalKey, e.tmNode.rawNode), a(h));
  }
  return { mergedClsPrefix: l, dropdownPlacement: o.dropdownPlacement, paddingLeft: o.paddingLeft, iconMarginRight: o.iconMarginRight, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, mergedTheme: r.mergedThemeRef, menuProps: s, dropdownEnabled: Ze(() => e.root && c.value && s.mode !== "horizontal" && !i.value), selected: Ze(() => r.mergedValueRef.value === e.internalKey), mergedDisabled: i, handleClick: m };
}, render() {
  const { mergedClsPrefix: e, mergedTheme: o, tmNode: A, menuProps: { renderLabel: r, nodeProps: t } } = this, s = t == null ? void 0 : t(A.rawNode);
  return v("div", Object.assign({}, s, { role: "menuitem", class: [`${e}-menu-item`, s == null ? void 0 : s.class] }), v(_r, { theme: o.peers.Tooltip, themeOverrides: o.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: ["menu-tooltip"] }, { default: () => r ? r(A.rawNode) : de(this.title), trigger: () => v(Xo, { tmNode: A, clsPrefix: e, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }) }));
} }), Uo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, tmNodes: { type: Array, required: true } }), dl = Xe(Uo), ul = T({ name: "MenuOptionGroup", props: Uo, setup(e) {
  const o = eo(e), { NSubmenu: A } = o, r = k(() => (A == null ? void 0 : A.mergedDisabledRef.value) ? true : e.tmNode.disabled);
  L(_e, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: r });
  const { mergedClsPrefixRef: t, props: s } = Ae(Se);
  return function() {
    const { value: l } = t, c = o.paddingLeft.value, { nodeProps: n } = s, i = n == null ? void 0 : n(e.tmNode.rawNode);
    return v("div", { class: `${l}-menu-item-group`, role: "group" }, v("div", Object.assign({}, i, { class: [`${l}-menu-item-group-title`, i == null ? void 0 : i.class], style: [(i == null ? void 0 : i.style) || "", c !== void 0 ? `padding-left: ${c}px;` : ""] }), de(e.title), e.extra ? v(xe, null, " ", de(e.extra)) : null), v("div", null, e.tmNodes.map((a) => Ao(a, s))));
  };
} });
function Ge(e) {
  return e.type === "divider" || e.type === "render";
}
function ml(e) {
  return e.type === "divider";
}
function Ao(e, o) {
  const { rawNode: A } = e, { show: r } = A;
  if (r === false) return null;
  if (Ge(A)) return ml(A) ? v(il, Object.assign({ key: e.key }, A.props)) : null;
  const { labelField: t } = o, { key: s, level: l, isGroup: c } = e, n = Object.assign(Object.assign({}, A), { title: A.title || A[t], extra: A.titleExtra || A.extra, key: s, internalKey: s, level: l, root: l === 0, isGroup: c });
  return e.children ? e.isGroup ? v(ul, Ee(n, dl, { tmNode: e, tmNodes: e.children, key: s })) : v($e, Ee(n, hl, { key: s, rawNodes: A[o.childrenField], tmNodes: e.children, tmNode: e })) : v(cl, Ee(n, sl, { key: s, tmNode: e }));
}
const _o = Object.assign(Object.assign({}, oo), { rawNodes: { type: Array, default: () => [] }, tmNodes: { type: Array, default: () => [] }, tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function, domId: String, virtualChildActive: { type: Boolean, default: void 0 }, isEllipsisPlaceholder: Boolean }), hl = Xe(_o), $e = T({ name: "Submenu", props: _o, setup(e) {
  const o = eo(e), { NMenu: A, NSubmenu: r } = o, { props: t, mergedCollapsedRef: s, mergedThemeRef: l } = A, c = k(() => {
    const { disabled: h } = e;
    return (r == null ? void 0 : r.mergedDisabledRef.value) || t.disabled ? true : h;
  }), n = N(false);
  L(Jo, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: c }), L(_e, null);
  function i() {
    const { onClick: h } = e;
    h && h();
  }
  function a() {
    c.value || (s.value || A.toggleExpand(e.internalKey), i());
  }
  function m(h) {
    n.value = h;
  }
  return { menuProps: t, mergedTheme: l, doSelect: A.doSelect, inverted: A.invertedRef, isHorizontal: A.isHorizontalRef, mergedClsPrefix: A.mergedClsPrefixRef, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, iconMarginRight: o.iconMarginRight, dropdownPlacement: o.dropdownPlacement, dropdownShow: n, paddingLeft: o.paddingLeft, mergedDisabled: c, mergedValue: A.mergedValueRef, childActive: Ze(() => {
    var h;
    return (h = e.virtualChildActive) !== null && h !== void 0 ? h : A.activePathRef.value.includes(e.internalKey);
  }), collapsed: k(() => t.mode === "horizontal" ? false : s.value ? true : !A.mergedExpandedKeysRef.value.includes(e.internalKey)), dropdownEnabled: k(() => !c.value && (t.mode === "horizontal" || s.value)), handlePopoverShowChange: m, handleClick: a };
}, render() {
  var e;
  const { mergedClsPrefix: o, menuProps: { renderIcon: A, renderLabel: r } } = this, t = () => {
    const { isHorizontal: l, paddingLeft: c, collapsed: n, mergedDisabled: i, maxIconSize: a, activeIconSize: m, title: h, childActive: f, icon: x, handleClick: w, menuProps: { nodeProps: z }, dropdownShow: M, iconMarginRight: W, tmNode: j, mergedClsPrefix: Z, isEllipsisPlaceholder: J, extra: Y } = this, Q = z == null ? void 0 : z(j.rawNode);
    return v("div", Object.assign({}, Q, { class: [`${Z}-menu-item`, Q == null ? void 0 : Q.class], role: "menuitem" }), v(Xo, { tmNode: j, paddingLeft: c, collapsed: n, disabled: i, iconMarginRight: W, maxIconSize: a, activeIconSize: m, title: h, extra: Y, showArrow: !l, childActive: f, clsPrefix: Z, icon: x, hover: M, onClick: w, isEllipsisPlaceholder: J }));
  }, s = () => v(Do, null, { default: () => {
    const { tmNodes: l, collapsed: c } = this;
    return c ? null : v("div", { class: `${o}-submenu-children`, role: "menu" }, l.map((n) => Ao(n, this.menuProps)));
  } });
  return this.root ? v(et, Object.assign({ size: "large", trigger: "hover" }, (e = this.menuProps) === null || e === void 0 ? void 0 : e.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: { fontSizeLarge: "14px", optionIconSizeLarge: "18px" }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: A, renderLabel: r }), { default: () => v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, t(), this.isHorizontal ? null : s()) }) : v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, t(), s());
} }), pl = Object.assign(Object.assign({}, Re.props), { options: { type: Array, default: () => [] }, collapsed: { type: Boolean, default: void 0 }, collapsedWidth: { type: Number, default: 48 }, iconSize: { type: Number, default: 20 }, collapsedIconSize: { type: Number, default: 24 }, rootIndent: Number, indent: { type: Number, default: 32 }, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, disabledField: { type: String, default: "disabled" }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: { type: [String, Number], default: null }, mode: { type: String, default: "vertical" }, watchProps: { type: Array, default: void 0 }, disabled: Boolean, show: { type: Boolean, default: true }, inverted: Boolean, "onUpdate:expandedKeys": [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], "onUpdate:value": [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, dropdownProps: Object, accordion: Boolean, nodeProps: Function, dropdownPlacement: { type: String, default: "bottom" }, responsive: Boolean, items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array }), Le = T({ name: "Menu", inheritAttrs: false, props: pl, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: A } = Je(e), r = Re("Menu", "-menu", al, nt, e, o), t = Ae(At, null), s = k(() => {
    var b;
    const { collapsed: y } = e;
    if (y !== void 0) return y;
    if (t) {
      const { collapseModeRef: d, collapsedRef: I } = t;
      if (d.value === "width") return (b = I.value) !== null && b !== void 0 ? b : false;
    }
    return false;
  }), l = k(() => {
    const { keyField: b, childrenField: y, disabledField: d } = e;
    return Fe(e.items || e.options, { getIgnored(I) {
      return Ge(I);
    }, getChildren(I) {
      return I[y];
    }, getDisabled(I) {
      return I[d];
    }, getKey(I) {
      var R;
      return (R = I[b]) !== null && R !== void 0 ? R : I.name;
    } });
  }), c = k(() => new Set(l.value.treeNodes.map((b) => b.key))), { watchProps: n } = e, i = N(null);
  (n == null ? void 0 : n.includes("defaultValue")) ? Ne(() => {
    i.value = e.defaultValue;
  }) : i.value = e.defaultValue;
  const a = to(e, "value"), m = lo(a, i), h = N([]), f = () => {
    h.value = e.defaultExpandAll ? l.value.getNonLeafKeys() : e.defaultExpandedNames || e.defaultExpandedKeys || l.value.getPath(m.value, { includeSelf: false }).keyPath;
  };
  (n == null ? void 0 : n.includes("defaultExpandedKeys")) ? Ne(f) : f();
  const x = rt(e, ["expandedNames", "expandedKeys"]), w = lo(x, h), z = k(() => l.value.treeNodes), M = k(() => l.value.getPath(m.value).keyPath);
  L(Se, { props: e, mergedCollapsedRef: s, mergedThemeRef: r, mergedValueRef: m, mergedExpandedKeysRef: w, activePathRef: M, mergedClsPrefixRef: o, isHorizontalRef: k(() => e.mode === "horizontal"), invertedRef: to(e, "inverted"), doSelect: W, toggleExpand: Z });
  function W(b, y) {
    const { "onUpdate:value": d, onUpdateValue: I, onSelect: R } = e;
    I && ie(I, b, y), d && ie(d, b, y), R && ie(R, b, y), i.value = b;
  }
  function j(b) {
    const { "onUpdate:expandedKeys": y, onUpdateExpandedKeys: d, onExpandedNamesChange: I, onOpenNamesChange: R } = e;
    y && ie(y, b), d && ie(d, b), I && ie(I, b), R && ie(R, b), h.value = b;
  }
  function Z(b) {
    const y = Array.from(w.value), d = y.findIndex((I) => I === b);
    if (~d) y.splice(d, 1);
    else {
      if (e.accordion && c.value.has(b)) {
        const I = y.findIndex((R) => c.value.has(R));
        I > -1 && y.splice(I, 1);
      }
      y.push(b);
    }
    j(y);
  }
  const J = (b) => {
    const y = l.value.getPath(b ?? m.value, { includeSelf: false }).keyPath;
    if (!y.length) return;
    const d = Array.from(w.value), I = /* @__PURE__ */ new Set([...d, ...y]);
    e.accordion && c.value.forEach((R) => {
      I.has(R) && !y.includes(R) && I.delete(R);
    }), j(Array.from(I));
  }, Y = k(() => {
    const { inverted: b } = e, { common: { cubicBezierEaseInOut: y }, self: d } = r.value, { borderRadius: I, borderColorHorizontal: R, fontSize: eA, itemHeight: oA, dividerColor: AA } = d, p = { "--n-divider-color": AA, "--n-bezier": y, "--n-font-size": eA, "--n-border-color-horizontal": R, "--n-border-radius": I, "--n-item-height": oA };
    return b ? (p["--n-group-text-color"] = d.groupTextColorInverted, p["--n-color"] = d.colorInverted, p["--n-item-text-color"] = d.itemTextColorInverted, p["--n-item-text-color-hover"] = d.itemTextColorHoverInverted, p["--n-item-text-color-active"] = d.itemTextColorActiveInverted, p["--n-item-text-color-child-active"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHoverInverted, p["--n-item-icon-color"] = d.itemIconColorInverted, p["--n-item-icon-color-hover"] = d.itemIconColorHoverInverted, p["--n-item-icon-color-active"] = d.itemIconColorActiveInverted, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHoverInverted, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActiveInverted, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHoverInverted, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsedInverted, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontalInverted, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontalInverted, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontalInverted, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontalInverted, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontalInverted, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontalInverted, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontalInverted, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontalInverted, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontalInverted, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontalInverted, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontalInverted, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontalInverted, p["--n-arrow-color"] = d.arrowColorInverted, p["--n-arrow-color-hover"] = d.arrowColorHoverInverted, p["--n-arrow-color-active"] = d.arrowColorActiveInverted, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHoverInverted, p["--n-arrow-color-child-active"] = d.arrowColorChildActiveInverted, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHoverInverted, p["--n-item-color-hover"] = d.itemColorHoverInverted, p["--n-item-color-active"] = d.itemColorActiveInverted, p["--n-item-color-active-hover"] = d.itemColorActiveHoverInverted, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsedInverted) : (p["--n-group-text-color"] = d.groupTextColor, p["--n-color"] = d.color, p["--n-item-text-color"] = d.itemTextColor, p["--n-item-text-color-hover"] = d.itemTextColorHover, p["--n-item-text-color-active"] = d.itemTextColorActive, p["--n-item-text-color-child-active"] = d.itemTextColorChildActive, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveHover, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHover, p["--n-item-icon-color"] = d.itemIconColor, p["--n-item-icon-color-hover"] = d.itemIconColorHover, p["--n-item-icon-color-active"] = d.itemIconColorActive, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHover, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActive, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHover, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsed, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontal, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontal, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontal, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontal, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontal, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontal, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontal, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontal, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontal, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontal, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontal, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontal, p["--n-arrow-color"] = d.arrowColor, p["--n-arrow-color-hover"] = d.arrowColorHover, p["--n-arrow-color-active"] = d.arrowColorActive, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHover, p["--n-arrow-color-child-active"] = d.arrowColorChildActive, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHover, p["--n-item-color-hover"] = d.itemColorHover, p["--n-item-color-active"] = d.itemColorActive, p["--n-item-color-active-hover"] = d.itemColorActiveHover, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsed), p;
  }), Q = A ? Eo("menu", k(() => e.inverted ? "a" : "b"), Y, e) : void 0, X = ze(), U = N(null), ee = N(null);
  let _ = true;
  const re = () => {
    var b;
    _ ? _ = false : (b = U.value) === null || b === void 0 || b.sync({ showAllItemsBeforeCalculate: true });
  };
  function ae() {
    return document.getElementById(X);
  }
  const te = N(-1);
  function Ce(b) {
    te.value = e.options.length - b;
  }
  function Me(b) {
    b || (te.value = -1);
  }
  const He = k(() => {
    const b = te.value;
    return { children: b === -1 ? [] : e.options.slice(b) };
  }), Qe = k(() => {
    const { childrenField: b, disabledField: y, keyField: d } = e;
    return Fe([He.value], { getIgnored(I) {
      return Ge(I);
    }, getChildren(I) {
      return I[b];
    }, getDisabled(I) {
      return I[y];
    }, getKey(I) {
      var R;
      return (R = I[d]) !== null && R !== void 0 ? R : I.name;
    } });
  }), Oe = k(() => Fe([{}]).treeNodes[0]);
  function Te() {
    var b;
    if (te.value === -1) return v($e, { root: true, level: 0, key: "__ellpisisGroupPlaceholder__", internalKey: "__ellpisisGroupPlaceholder__", title: "\xB7\xB7\xB7", tmNode: Oe.value, domId: X, isEllipsisPlaceholder: true });
    const y = Qe.value.treeNodes[0], d = M.value, I = !!(!((b = y.children) === null || b === void 0) && b.some((R) => d.includes(R.key)));
    return v($e, { level: 0, root: true, key: "__ellpisisGroup__", internalKey: "__ellpisisGroup__", title: "\xB7\xB7\xB7", virtualChildActive: I, tmNode: y, domId: X, rawNodes: y.rawNode.children || [], tmNodes: y.children || [], isEllipsisPlaceholder: true });
  }
  return { mergedClsPrefix: o, controlledExpandedKeys: x, uncontrolledExpanededKeys: h, mergedExpandedKeys: w, uncontrolledValue: i, mergedValue: m, activePath: M, tmNodes: z, mergedTheme: r, mergedCollapsed: s, cssVars: A ? void 0 : Y, themeClass: Q == null ? void 0 : Q.themeClass, overflowRef: U, counterRef: ee, updateCounter: () => {
  }, onResize: re, onUpdateOverflow: Me, onUpdateCount: Ce, renderCounter: Te, getCounter: ae, onRender: Q == null ? void 0 : Q.onRender, showOption: J, deriveResponsiveState: re };
}, render() {
  const { mergedClsPrefix: e, mode: o, themeClass: A, onRender: r } = this;
  r == null ? void 0 : r();
  const t = () => this.tmNodes.map((n) => Ao(n, this.$props)), l = o === "horizontal" && this.responsive, c = () => v("div", lA(this.$attrs, { role: o === "horizontal" ? "menubar" : "menu", class: [`${e}-menu`, A, `${e}-menu--${o}`, l && `${e}-menu--responsive`, this.mergedCollapsed && `${e}-menu--collapsed`], style: this.cssVars }), l ? v(tt, { ref: "overflowRef", onUpdateOverflow: this.onUpdateOverflow, getCounter: this.getCounter, onUpdateCount: this.onUpdateCount, updateCounter: this.updateCounter, style: { width: "100%", display: "flex", overflow: "hidden" } }, { default: t, counter: this.renderCounter }) : t());
  return l ? v(ot, { onResize: this.onResize }, { default: c }) : c();
} }), gl = { name: "QrCode", common: u, self: (e) => ({ borderRadius: e.borderRadius }) }, vl = { name: "Skeleton", common: u, self(e) {
  const { heightSmall: o, heightMedium: A, heightLarge: r, borderRadius: t } = e;
  return { color: "rgba(255, 255, 255, 0.12)", colorEnd: "rgba(255, 255, 255, 0.18)", borderRadius: t, heightSmall: o, heightMedium: A, heightLarge: r };
} }, Cl = { name: "Split", common: u }, fl = { name: "Equation", common: u, self: lt }, bl = { name: "FloatButtonGroup", common: u, self(e) {
  const { popoverColor: o, dividerColor: A, borderRadius: r } = e;
  return { color: o, buttonBorderColor: A, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
} }, xl = { name: "dark", common: u, Alert: Mt, Anchor: Ht, AutoComplete: Ot, Avatar: Qo, AvatarGroup: Tt, BackTop: Ft, Badge: Lt, Breadcrumb: Vt, Button: G, ButtonGroup: kn, Calendar: jt, Card: Oo, Carousel: Nt, Cascader: Wt, Checkbox: ve, Code: To, Collapse: Zt, CollapseTransition: Gt, ColorPicker: $t, DataTable: Yt, DatePicker: Jt, Descriptions: Xt, Dialog: Zo, Divider: fn, Drawer: bn, Dropdown: Ue, DynamicInput: xn, DynamicTags: In, Element: Sn, Empty: me, Ellipsis: jo, Equation: fl, Flex: Bn, Form: yn, GradientText: En, Heatmap: Al, Icon: Kt, IconWrapper: rl, Image: tl, Input: $, InputNumber: wn, InputOtp: Dn, LegacyTransfer: nl, Layout: zn, List: Pn, LoadingBar: nn, Log: Mn, Menu: Qn, Mention: Hn, Message: ln, Modal: qt, Notification: Cn, PageHeader: On, Pagination: Vo, Popconfirm: Tn, Popover: he, Popselect: Fo, Progress: Yo, QrCode: gl, Radio: No, Rate: Fn, Result: Ln, Row: Rn, Scrollbar: V, Select: Lo, Skeleton: vl, Slider: Vn, Space: $o, Spin: jn, Statistic: Nn, Steps: Wn, Switch: Zn, Table: Gn, Tabs: $n, Tag: Ho, Thing: Yn, TimePicker: Wo, Timeline: Kn, Tooltip: Pe, Transfer: Jn, Tree: Ko, TreeSelect: Xn, Typography: qn, Upload: Un, Watermark: _n, Split: Cl, FloatButton: el, FloatButtonGroup: bl, Marquee: ll }, Il = aA("titleBar", () => {
  const e = zo();
  return { text: k(() => {
    var _a;
    return e.currentSketchId && ((_a = e.sketches.find((r) => r.id === e.currentSketchId)) == null ? void 0 : _a.meta.name) || null;
  }) };
}), Sl = T({ __name: "TitleBar", setup(e) {
  fo((i) => ({ v4cb26022: H(o).cubicBezierEaseInOut, v72bb88fb: H(o).borderRadius, v4a2be838: H(o).hoverColor }));
  const o = at(), A = Il(), r = zo(), t = k(() => A.text || ""), s = N(false), l = k(() => r.sketches.map((i) => ({ name: i.meta.name, id: i.id, tags: i.meta.tags }))), c = (i) => {
    r.sketches.find((a) => a.id === i), r.setCurrentSketchId(i), s.value = false;
  }, n = async (i) => {
    await r.deleteSketch(i);
  };
  return (i, a) => (oe(), pe(xe, null, [t.value ? (oe(), pe("div", { key: 0, class: "title-bar", onClick: a[0] || (a[0] = (m) => s.value = true) }, [O(H(it), null, { default: K(() => [O(H(st), { depth: 3, style: { display: "block", padding: "4px 8px", "min-width": "48px" } }, { default: K(() => [sA(cA(t.value), 1)]), _: 1 })]), _: 1 })])) : iA("", true), O(ct, { active: s.value, "onUpdate:active": a[1] || (a[1] = (m) => s.value = m), list: l.value, "active-id": H(r).currentSketchId || "", onSelect: c, onRemove: n }, null, 8, ["active", "list", "active-id"])], 64));
} }), mo = bo(Sl, [["__scopeId", "data-v-4aa68e10"]]), Bl = { key: 0, class: "nav-bar" }, kl = { class: "software-info-menu" }, yl = { style: { width: "100%" } }, El = { style: { "max-width": "8em" } }, wl = { key: 1, class: "nav-bar" }, Dl = { style: { "max-width": "50vw" } }, zl = { class: "main-layout" }, Rl = T({ __name: "AppLayout", setup(e) {
  fo((x) => ({ v15d5fada: f.value ? "column" : "row" }));
  const o = dt(), A = Ro(), r = new Po(), { t, locale: s } = It();
  function l(x) {
    return () => v(ao, null, { default: () => v(x) });
  }
  function c(x) {
    return x === "system" ? io() : x || io();
  }
  A.settings.interfaceLanguage = A.settings.interfaceLanguage ?? "system", s.value = c(A.settings.interfaceLanguage), dA(() => A.settings.interfaceLanguage, (x) => {
    x && (s.value = c(x));
  });
  const n = [{ label: () => v(Be, { to: "/tracker" }, { default: () => t("router.tracker") }), key: "tracker", icon: l(gt) }, { label: () => v(Be, { to: "/sketch-centre" }, { default: () => t("router.sketchCentre") }), key: "sketch-centre", icon: l(vt) }], i = [{ label: () => v(Be, { to: "/settings" }, { default: () => t("router.settings") }), key: "settings", icon: l(Ct) }, { label: () => v(Be, { to: "/about" }, { default: () => t("router.about") }), key: "about", icon: l(ft) }], a = k(() => o.path.slice(1)), { width: m, height: h } = ut(), f = k(() => m.value > h.value);
  return (x, w) => (oe(), pe("div", { class: vo(["app-layout", f.value ? "app-layout-horizontal" : "app-layout-vertical"]) }, [f.value ? (oe(), pe("div", Bl, [O(H(Le), { options: n, "default-value": "tracker", value: a.value, mode: f.value ? "vertical" : "horizontal" }, null, 8, ["value", "mode"]), le("div", kl, [le("div", yl, [O(H(Le), { options: i, mode: f.value ? "vertical" : "horizontal", value: a.value }, null, 8, ["mode", "value"])]), le("div", El, [O(mo)])])])) : (oe(), pe("div", wl, [O(H(ht), { trigger: H(r).isMobile ? "click" : "hover", style: { padding: "2px 0", transform: "translateX(2px)" }, placement: "bottom-start" }, { trigger: K(() => [O(H(mt), { style: { width: "48px" } }, { icon: K(() => [O(H(ao), null, { default: K(() => [O(H(Bt))]), _: 1 })]), _: 1 })]), default: K(() => [O(H(Le), { options: n.concat(i), "default-value": "tracker", value: a.value, "dropdown-placement": "top-start", mode: "vertical" }, null, 8, ["options", "value"])]), _: 1 }, 8, ["trigger"]), le("div", Dl, [O(mo)])])), le("div", zl, [O(H(pt), null, { default: K(({ Component: z }) => [O(uA, { name: "slide-fade", mode: "out-in" }, { default: K(() => [(oe(), We(mA, null, [(oe(), We(hA(z), { key: a.value }))], 1024))]), _: 2 }, 1024)]), _: 1 })])], 2));
} }), Pl = bo(Rl, [["__scopeId", "data-v-031e5f3d"]]);
var Ve, ho;
function Ml() {
  return ho || (ho = 1, Ve = { webm: "data:video/webm;base64,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", mp4: "data:video/mp4;base64,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" }), Ve;
}
var je, po;
function Hl() {
  if (po) return je;
  po = 1;
  const { webm: e, mp4: o } = Ml(), A = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, r = () => "wakeLock" in navigator;
  class t {
    constructor() {
      if (this.enabled = false, r()) {
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
      var i = document.createElement("source");
      i.src = n, i.type = `video/${c}`, l.appendChild(i);
    }
    get isEnabled() {
      return this.enabled;
    }
    enable() {
      return r() ? navigator.wakeLock.request("screen").then((l) => {
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
      r() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : A() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = false;
    }
  }
  return je = t, je;
}
var Ql = Hl();
const Ol = pA(Ql), jl = T({ __name: "App", setup(e) {
  const o = Ro(), A = window.GeolocationManager, r = wt(), t = k(() => o.settings.theme === "system" ? r.value : o.settings.theme), s = k(() => t.value === "dark" ? xl : bt), l = { common: { fontFamily: 'Barlow, "Maple Mono", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: '"Maple Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' } };
  return L("applicationDarkThemeEnabled", t), L("platformInfo", new Po()), L("settings", o), L("noSleep", new Ol()), L("geolocation", A), Co(() => o.init()), (c, n) => (oe(), We(H(xt), { theme: s.value, abstract: true, "inline-theme-disabled": true, "theme-overrides": l }, { default: K(() => [O(H(tn), null, { default: K(() => [O(H(vn), null, { default: K(() => [O(H(hn), { placement: "bottom-right" }, { default: K(() => [O(Pl), O(H(ol))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["theme"]));
} });
export {
  jl as default
};
