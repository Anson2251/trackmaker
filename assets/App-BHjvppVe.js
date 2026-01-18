import { d as Q, c as fe, o as ne, a as le, r as ro, b as Z, e as go, f as oA, h as v, n as vo, F as De, p as F, g as Ye, i as oe, j as E, k as Co, T as AA, w as Ne, l as rA, t as to, m as tA, q as nA, s as lA, u as O, v as L, x as K, y as aA, z as iA, _ as fo, A as sA, B as cA, C as dA, D as We, K as uA, E as mA, G as hA } from "./index-BFKcpPr2.js";
import { h as pA, c as gA, s as T, r as bo, a as be, b as vA, d as CA, e as fA, f as bA, g as xA, i as C, j as IA, k as SA, l as BA, m as yA, n as kA, o as EA, p as wA, q as DA, t as zA, u as PA, v as RA, w as MA, x as HA, y as QA, z as OA, A as TA, B as FA, C as LA, D as VA, E as jA, F as NA, G as WA, H as ZA, I as GA, J as $A, K as YA, L as KA, M as JA, N as XA, O as qA, P as UA, Q as _A, R as pe, S as er, T as ke, U as xo, V as or, W as Ar, X as Ke, Y as Io, Z as So, _ as rr, $ as ze, a0 as tr, a1 as nr, a2 as lr, a3 as D, a4 as k, a5 as Bo, a6 as S, a7 as R, a8 as ar, a9 as ir, aa as de, ab as sr, ac as Je, ad as yo, ae as cr, af as Pe, ag as te, ah as ko, ai as dr, aj as Eo, ak as ur, al as mr, am as hr, an as pr, ao as gr, ap as wo, aq as vr, ar as Cr, as as fr, at as br, au as xr, av as Ir, aw as Sr, ax as Br, ay as yr, az as kr, aA as Er, aB as wr, aC as Dr, aD as zr, aE as Pr, aF as Rr, aG as Mr, aH as Hr, aI as Qr, aJ as Or, aK as Tr, aL as Fr, aM as Lr, aN as Vr, aO as jr, aP as Nr, aQ as Wr, aR as Zr, aS as Gr, aT as $r, aU as Yr, aV as no, aW as Kr, aX as Jr, aY as Xr, aZ as qr, a_ as Ce, a$ as Ur, b0 as Ze, b1 as Xe, b2 as _r, b3 as et, b4 as ot, b5 as Fe, b6 as lo, b7 as At, b8 as rt, b9 as tt, ba as ie, bb as nt, bc as lt, bd as at, be as it, bf as st, bg as Do, bh as zo, bi as ct, bj as dt, bk as ao, bl as ut, bm as mt, bn as ht, bo as Se, bp as pt, bq as gt, br as vt, bs as Ct, bt as ft } from "./sketch-store-CXPLZH9N.js";
import { u as bt } from "./vue-i18n-CWar1LpX.js";
import { getSystemLocale as io } from "./index-C0bOdCRP.js";
const xt = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, It = Q({ name: "Menu", render: function(o, A) {
  return ne(), fe("svg", xt, A[0] || (A[0] = [le("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [le("path", { d: "M4 8h16" }), le("path", { d: "M4 16h16" })], -1)]));
} });
let Be = 0;
const St = typeof window < "u" && window.matchMedia !== void 0, ue = Z(null);
let q, ce;
function Ee(e) {
  e.matches && (ue.value = "dark");
}
function we(e) {
  e.matches && (ue.value = "light");
}
function Bt() {
  q = window.matchMedia("(prefers-color-scheme: dark)"), ce = window.matchMedia("(prefers-color-scheme: light)"), q.matches ? ue.value = "dark" : ce.matches ? ue.value = "light" : ue.value = null, q.addEventListener ? (q.addEventListener("change", Ee), ce.addEventListener("change", we)) : q.addListener && (q.addListener(Ee), ce.addListener(we));
}
function yt() {
  "removeEventListener" in q ? (q.removeEventListener("change", Ee), ce.removeEventListener("change", we)) : "removeListener" in q && (q.removeListener(Ee), ce.removeListener(we)), q = void 0, ce = void 0;
}
let so = true;
function kt() {
  return St ? (Be === 0 && Bt(), so && (so = pA()) && (go(() => {
    Be += 1;
  }), oA(() => {
    Be -= 1, Be === 0 && yt();
  })), ro(ue)) : ro(ue);
}
const Et = Q({ name: "ChevronDownFilled", render() {
  return v("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, v("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" }));
} }), g = { neutralBase: "#000", neutralInvertBase: "#fff", neutralTextBase: "#fff", neutralPopover: "rgb(72, 72, 78)", neutralCard: "rgb(24, 24, 28)", neutralModal: "rgb(44, 44, 50)", neutralBody: "rgb(16, 16, 20)", alpha1: "0.9", alpha2: "0.82", alpha3: "0.52", alpha4: "0.38", alpha5: "0.28", alphaClose: "0.52", alphaDisabled: "0.38", alphaDisabledInput: "0.06", alphaPending: "0.09", alphaTablePending: "0.06", alphaTableStriped: "0.05", alphaPressed: "0.05", alphaAvatar: "0.18", alphaRail: "0.2", alphaProgressRail: "0.12", alphaBorder: "0.24", alphaDivider: "0.09", alphaInput: "0.1", alphaAction: "0.06", alphaTab: "0.04", alphaScrollbar: "0.2", alphaScrollbarHover: "0.3", alphaCode: "0.12", alphaTag: "0.2", primaryHover: "#7fe7c4", primaryDefault: "#63e2b7", primaryActive: "#5acea7", primarySuppl: "rgb(42, 148, 125)", infoHover: "#8acbec", infoDefault: "#70c0e8", infoActive: "#66afd3", infoSuppl: "rgb(56, 137, 197)", errorHover: "#e98b8b", errorDefault: "#e88080", errorActive: "#e57272", errorSuppl: "rgb(208, 58, 82)", warningHover: "#f5d599", warningDefault: "#f2c97d", warningActive: "#e6c260", warningSuppl: "rgb(240, 138, 0)", successHover: "#7fe7c4", successDefault: "#63e2b7", successActive: "#5acea7", successSuppl: "rgb(42, 148, 125)" }, wt = bo(g.neutralBase), Po = bo(g.neutralInvertBase), Dt = `rgba(${Po.slice(0, 3).join(", ")}, `;
function B(e) {
  return `${Dt + String(e)})`;
}
function zt(e) {
  const o = Array.from(Po);
  return o[3] = Number(e), be(wt, o);
}
const u = Object.assign(Object.assign({ name: "common" }, gA), { baseColor: g.neutralBase, primaryColor: g.primaryDefault, primaryColorHover: g.primaryHover, primaryColorPressed: g.primaryActive, primaryColorSuppl: g.primarySuppl, infoColor: g.infoDefault, infoColorHover: g.infoHover, infoColorPressed: g.infoActive, infoColorSuppl: g.infoSuppl, successColor: g.successDefault, successColorHover: g.successHover, successColorPressed: g.successActive, successColorSuppl: g.successSuppl, warningColor: g.warningDefault, warningColorHover: g.warningHover, warningColorPressed: g.warningActive, warningColorSuppl: g.warningSuppl, errorColor: g.errorDefault, errorColorHover: g.errorHover, errorColorPressed: g.errorActive, errorColorSuppl: g.errorSuppl, textColorBase: g.neutralTextBase, textColor1: B(g.alpha1), textColor2: B(g.alpha2), textColor3: B(g.alpha3), textColorDisabled: B(g.alpha4), placeholderColor: B(g.alpha4), placeholderColorDisabled: B(g.alpha5), iconColor: B(g.alpha4), iconColorDisabled: B(g.alpha5), iconColorHover: B(Number(g.alpha4) * 1.25), iconColorPressed: B(Number(g.alpha4) * 0.8), opacity1: g.alpha1, opacity2: g.alpha2, opacity3: g.alpha3, opacity4: g.alpha4, opacity5: g.alpha5, dividerColor: B(g.alphaDivider), borderColor: B(g.alphaBorder), closeIconColorHover: B(Number(g.alphaClose)), closeIconColor: B(Number(g.alphaClose)), closeIconColorPressed: B(Number(g.alphaClose)), closeColorHover: "rgba(255, 255, 255, .12)", closeColorPressed: "rgba(255, 255, 255, .08)", clearColor: B(g.alpha4), clearColorHover: T(B(g.alpha4), { alpha: 1.25 }), clearColorPressed: T(B(g.alpha4), { alpha: 0.8 }), scrollbarColor: B(g.alphaScrollbar), scrollbarColorHover: B(g.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: B(g.alphaProgressRail), railColor: B(g.alphaRail), popoverColor: g.neutralPopover, tableColor: g.neutralCard, cardColor: g.neutralCard, modalColor: g.neutralModal, bodyColor: g.neutralBody, tagColor: zt(g.alphaTag), avatarColor: B(g.alphaAvatar), invertedColor: g.neutralBase, inputColor: B(g.alphaInput), codeColor: B(g.alphaCode), tabColor: B(g.alphaTab), actionColor: B(g.alphaAction), tableHeaderColor: B(g.alphaAction), hoverColor: B(g.alphaPending), tableColorHover: B(g.alphaTablePending), tableColorStriped: B(g.alphaTableStriped), pressedColor: B(g.alphaPressed), opacityDisabled: g.alphaDisabled, inputColorDisabled: B(g.alphaDisabledInput), buttonColor2: "rgba(255, 255, 255, .08)", buttonColor2Hover: "rgba(255, 255, 255, .12)", buttonColor2Pressed: "rgba(255, 255, 255, .08)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), V = { name: "Scrollbar", common: u, self: vA }, me = { name: "Empty", common: u, self: CA }, xe = { name: "InternalSelectMenu", common: u, peers: { Scrollbar: V, Empty: me }, self: fA }, he = { name: "Popover", common: u, peers: { Scrollbar: V }, self: bA }, Ro = { name: "Tag", common: u, self(e) {
  const { textColor2: o, primaryColorHover: A, primaryColorPressed: r, primaryColor: t, infoColor: i, successColor: l, warningColor: s, errorColor: n, baseColor: c, borderColor: a, tagColor: m, opacityDisabled: h, closeIconColor: f, closeIconColorHover: x, closeIconColorPressed: w, closeColorHover: z, closeColorPressed: M, borderRadiusSmall: N, fontSizeMini: j, fontSizeTiny: W, fontSizeSmall: J, fontSizeMedium: Y, heightMini: H, heightTiny: X, heightSmall: U, heightMedium: ee, buttonColor2Hover: _, buttonColor2Pressed: Ae, fontWeightStrong: ae } = e;
  return Object.assign(Object.assign({}, xA), { closeBorderRadius: N, heightTiny: H, heightSmall: X, heightMedium: U, heightLarge: ee, borderRadius: N, opacityDisabled: h, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, fontWeightStrong: ae, textColorCheckable: o, textColorHoverCheckable: o, textColorPressedCheckable: o, textColorChecked: c, colorCheckable: "#0000", colorHoverCheckable: _, colorPressedCheckable: Ae, colorChecked: t, colorCheckedHover: A, colorCheckedPressed: r, border: `1px solid ${a}`, textColor: o, color: m, colorBordered: "#0000", closeIconColor: f, closeIconColorHover: x, closeIconColorPressed: w, closeColorHover: z, closeColorPressed: M, borderPrimary: `1px solid ${C(t, { alpha: 0.3 })}`, textColorPrimary: t, colorPrimary: C(t, { alpha: 0.16 }), colorBorderedPrimary: "#0000", closeIconColorPrimary: T(t, { lightness: 0.7 }), closeIconColorHoverPrimary: T(t, { lightness: 0.7 }), closeIconColorPressedPrimary: T(t, { lightness: 0.7 }), closeColorHoverPrimary: C(t, { alpha: 0.16 }), closeColorPressedPrimary: C(t, { alpha: 0.12 }), borderInfo: `1px solid ${C(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: C(i, { alpha: 0.16 }), colorBorderedInfo: "#0000", closeIconColorInfo: T(i, { alpha: 0.7 }), closeIconColorHoverInfo: T(i, { alpha: 0.7 }), closeIconColorPressedInfo: T(i, { alpha: 0.7 }), closeColorHoverInfo: C(i, { alpha: 0.16 }), closeColorPressedInfo: C(i, { alpha: 0.12 }), borderSuccess: `1px solid ${C(l, { alpha: 0.3 })}`, textColorSuccess: l, colorSuccess: C(l, { alpha: 0.16 }), colorBorderedSuccess: "#0000", closeIconColorSuccess: T(l, { alpha: 0.7 }), closeIconColorHoverSuccess: T(l, { alpha: 0.7 }), closeIconColorPressedSuccess: T(l, { alpha: 0.7 }), closeColorHoverSuccess: C(l, { alpha: 0.16 }), closeColorPressedSuccess: C(l, { alpha: 0.12 }), borderWarning: `1px solid ${C(s, { alpha: 0.3 })}`, textColorWarning: s, colorWarning: C(s, { alpha: 0.16 }), colorBorderedWarning: "#0000", closeIconColorWarning: T(s, { alpha: 0.7 }), closeIconColorHoverWarning: T(s, { alpha: 0.7 }), closeIconColorPressedWarning: T(s, { alpha: 0.7 }), closeColorHoverWarning: C(s, { alpha: 0.16 }), closeColorPressedWarning: C(s, { alpha: 0.11 }), borderError: `1px solid ${C(n, { alpha: 0.3 })}`, textColorError: n, colorError: C(n, { alpha: 0.16 }), colorBorderedError: "#0000", closeIconColorError: T(n, { alpha: 0.7 }), closeIconColorHoverError: T(n, { alpha: 0.7 }), closeIconColorPressedError: T(n, { alpha: 0.7 }), closeColorHoverError: C(n, { alpha: 0.16 }), closeColorPressedError: C(n, { alpha: 0.12 }) });
} }, qe = { name: "InternalSelection", common: u, peers: { Popover: he }, self(e) {
  const { borderRadius: o, textColor2: A, textColorDisabled: r, inputColor: t, inputColorDisabled: i, primaryColor: l, primaryColorHover: s, warningColor: n, warningColorHover: c, errorColor: a, errorColorHover: m, iconColor: h, iconColorDisabled: f, clearColor: x, clearColorHover: w, clearColorPressed: z, placeholderColor: M, placeholderColorDisabled: N, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: H, heightSmall: X, heightMedium: U, heightLarge: ee, fontWeight: _ } = e;
  return Object.assign(Object.assign({}, IA), { fontWeight: _, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: H, heightSmall: X, heightMedium: U, heightLarge: ee, borderRadius: o, textColor: A, textColorDisabled: r, placeholderColor: M, placeholderColorDisabled: N, color: t, colorDisabled: i, colorActive: C(l, { alpha: 0.1 }), border: "1px solid #0000", borderHover: `1px solid ${s}`, borderActive: `1px solid ${l}`, borderFocus: `1px solid ${s}`, boxShadowHover: "none", boxShadowActive: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, boxShadowFocus: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, caretColor: l, arrowColor: h, arrowColorDisabled: f, loadingColor: l, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${c}`, borderActiveWarning: `1px solid ${n}`, borderFocusWarning: `1px solid ${c}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, colorActiveWarning: C(n, { alpha: 0.1 }), caretColorWarning: n, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${m}`, borderActiveError: `1px solid ${a}`, borderFocusError: `1px solid ${m}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, colorActiveError: C(a, { alpha: 0.1 }), caretColorError: a, clearColor: x, clearColorHover: w, clearColorPressed: z });
} }, Pt = { name: "Alert", common: u, self(e) {
  const { lineHeight: o, borderRadius: A, fontWeightStrong: r, dividerColor: t, inputColor: i, textColor1: l, textColor2: s, closeColorHover: n, closeColorPressed: c, closeIconColor: a, closeIconColorHover: m, closeIconColorPressed: h, infoColorSuppl: f, successColorSuppl: x, warningColorSuppl: w, errorColorSuppl: z, fontSize: M } = e;
  return Object.assign(Object.assign({}, SA), { fontSize: M, lineHeight: o, titleFontWeight: r, borderRadius: A, border: `1px solid ${t}`, color: i, titleTextColor: l, iconColor: s, contentTextColor: s, closeBorderRadius: A, closeColorHover: n, closeColorPressed: c, closeIconColor: a, closeIconColorHover: m, closeIconColorPressed: h, borderInfo: `1px solid ${C(f, { alpha: 0.35 })}`, colorInfo: C(f, { alpha: 0.25 }), titleTextColorInfo: l, iconColorInfo: f, contentTextColorInfo: s, closeColorHoverInfo: n, closeColorPressedInfo: c, closeIconColorInfo: a, closeIconColorHoverInfo: m, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${C(x, { alpha: 0.35 })}`, colorSuccess: C(x, { alpha: 0.25 }), titleTextColorSuccess: l, iconColorSuccess: x, contentTextColorSuccess: s, closeColorHoverSuccess: n, closeColorPressedSuccess: c, closeIconColorSuccess: a, closeIconColorHoverSuccess: m, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${C(w, { alpha: 0.35 })}`, colorWarning: C(w, { alpha: 0.25 }), titleTextColorWarning: l, iconColorWarning: w, contentTextColorWarning: s, closeColorHoverWarning: n, closeColorPressedWarning: c, closeIconColorWarning: a, closeIconColorHoverWarning: m, closeIconColorPressedWarning: h, borderError: `1px solid ${C(z, { alpha: 0.35 })}`, colorError: C(z, { alpha: 0.25 }), titleTextColorError: l, iconColorError: z, contentTextColorError: s, closeColorHoverError: n, closeColorPressedError: c, closeIconColorError: a, closeIconColorHoverError: m, closeIconColorPressedError: h });
} }, Rt = { name: "Anchor", common: u, self: BA };
function Mt(e) {
  const { textColor2: o, textColor3: A, textColorDisabled: r, primaryColor: t, primaryColorHover: i, inputColor: l, inputColorDisabled: s, warningColor: n, warningColorHover: c, errorColor: a, errorColorHover: m, borderRadius: h, lineHeight: f, fontSizeTiny: x, fontSizeSmall: w, fontSizeMedium: z, fontSizeLarge: M, heightTiny: N, heightSmall: j, heightMedium: W, heightLarge: J, clearColor: Y, clearColorHover: H, clearColorPressed: X, placeholderColor: U, placeholderColorDisabled: ee, iconColor: _, iconColorDisabled: Ae, iconColorHover: ae, iconColorPressed: re, fontWeight: ve } = e;
  return Object.assign(Object.assign({}, kA), { fontWeight: ve, countTextColorDisabled: r, countTextColor: A, heightTiny: N, heightSmall: j, heightMedium: W, heightLarge: J, fontSizeTiny: x, fontSizeSmall: w, fontSizeMedium: z, fontSizeLarge: M, lineHeight: f, lineHeightTextarea: f, borderRadius: h, iconSize: "16px", groupLabelColor: l, textColor: o, textColorDisabled: r, textDecorationColor: o, groupLabelTextColor: o, caretColor: t, placeholderColor: U, placeholderColorDisabled: ee, color: l, colorDisabled: s, colorFocus: C(t, { alpha: 0.1 }), groupLabelBorder: "1px solid #0000", border: "1px solid #0000", borderHover: `1px solid ${i}`, borderDisabled: "1px solid #0000", borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 8px 0 ${C(t, { alpha: 0.3 })}`, loadingColor: t, loadingColorWarning: n, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${c}`, colorFocusWarning: C(n, { alpha: 0.1 }), borderFocusWarning: `1px solid ${c}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.3 })}`, caretColorWarning: n, loadingColorError: a, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${m}`, colorFocusError: C(a, { alpha: 0.1 }), borderFocusError: `1px solid ${m}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.3 })}`, caretColorError: a, clearColor: Y, clearColorHover: H, clearColorPressed: X, iconColor: _, iconColorDisabled: Ae, iconColorHover: ae, iconColorPressed: re, suffixTextColor: o });
}
const $ = yA({ name: "Input", common: u, peers: { Scrollbar: V }, self: Mt }), Ht = { name: "AutoComplete", common: u, peers: { InternalSelectMenu: xe, Input: $ }, self: EA }, Mo = { name: "Avatar", common: u, self: wA }, Qt = { name: "AvatarGroup", common: u, peers: { Avatar: Mo }, self: DA }, Ot = { name: "BackTop", common: u, self(e) {
  const { popoverColor: o, textColor2: A, primaryColorHover: r, primaryColorPressed: t } = e;
  return Object.assign(Object.assign({}, zA), { color: o, textColor: A, iconColor: A, iconColorHover: r, iconColorPressed: t, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
} }, Tt = { name: "Badge", common: u, self(e) {
  const { errorColorSuppl: o, infoColorSuppl: A, successColorSuppl: r, warningColorSuppl: t, fontFamily: i } = e;
  return { color: o, colorInfo: A, colorSuccess: r, colorError: o, colorWarning: t, fontSize: "12px", fontFamily: i };
} }, Ft = { name: "Breadcrumb", common: u, self: PA }, G = { name: "Button", common: u, self(e) {
  const o = RA(e);
  return o.waveOpacity = "0.8", o.colorOpacitySecondary = "0.16", o.colorOpacitySecondaryHover = "0.2", o.colorOpacitySecondaryPressed = "0.12", o;
} }, Lt = { name: "Calendar", common: u, peers: { Button: G }, self: MA }, Ho = { name: "Card", common: u, self(e) {
  const o = HA(e), { cardColor: A, modalColor: r, popoverColor: t } = e;
  return o.colorEmbedded = A, o.colorEmbeddedModal = r, o.colorEmbeddedPopover = t, o;
} }, Vt = { name: "Carousel", common: u, self: QA }, ge = { name: "Checkbox", common: u, self(e) {
  const { cardColor: o } = e, A = OA(e);
  return A.color = "#0000", A.checkMarkColor = o, A;
} }, jt = { name: "Cascader", common: u, peers: { InternalSelectMenu: xe, InternalSelection: qe, Scrollbar: V, Checkbox: ge, Empty: FA }, self: TA }, Qo = { name: "Code", common: u, self(e) {
  const { textColor2: o, fontSize: A, fontWeightStrong: r, textColor3: t } = e;
  return { textColor: o, fontSize: A, fontWeightStrong: r, "mono-3": "#5c6370", "hue-1": "#56b6c2", "hue-2": "#61aeee", "hue-3": "#c678dd", "hue-4": "#98c379", "hue-5": "#e06c75", "hue-5-2": "#be5046", "hue-6": "#d19a66", "hue-6-2": "#e6c07b", lineNumberTextColor: t };
} }, Nt = { name: "Collapse", common: u, self: LA }, Wt = { name: "CollapseTransition", common: u, self: VA }, Zt = { name: "ColorPicker", common: u, peers: { Input: $, Button: G }, self: jA }, Oo = { name: "Popselect", common: u, peers: { Popover: he, InternalSelectMenu: xe } }, To = { name: "Select", common: u, peers: { InternalSelection: qe, InternalSelectMenu: xe }, self: NA }, Fo = { name: "Pagination", common: u, peers: { Select: To, Input: $, Popselect: Oo }, self(e) {
  const { primaryColor: o, opacity3: A } = e, r = C(o, { alpha: Number(A) }), t = WA(e);
  return t.itemBorderActive = `1px solid ${r}`, t.itemBorderDisabled = "1px solid #0000", t;
} }, Ue = { name: "Dropdown", common: u, peers: { Popover: he }, self(e) {
  const { primaryColorSuppl: o, primaryColor: A, popoverColor: r } = e, t = ZA(e);
  return t.colorInverted = r, t.optionColorActive = C(A, { alpha: 0.15 }), t.optionColorActiveInverted = o, t.optionColorHoverInverted = o, t;
} }, Re = { name: "Tooltip", common: u, peers: { Popover: he }, self(e) {
  const { borderRadius: o, boxShadow2: A, popoverColor: r, textColor2: t } = e;
  return Object.assign(Object.assign({}, GA), { borderRadius: o, boxShadow: A, color: r, textColor: t });
} }, Lo = { name: "Ellipsis", common: u, peers: { Tooltip: Re } }, Vo = { name: "Radio", common: u, self(e) {
  const { borderColor: o, primaryColor: A, baseColor: r, textColorDisabled: t, inputColorDisabled: i, textColor2: l, opacityDisabled: s, borderRadius: n, fontSizeSmall: c, fontSizeMedium: a, fontSizeLarge: m, heightSmall: h, heightMedium: f, heightLarge: x, lineHeight: w } = e;
  return Object.assign(Object.assign({}, $A), { labelLineHeight: w, buttonHeightSmall: h, buttonHeightMedium: f, buttonHeightLarge: x, fontSizeSmall: c, fontSizeMedium: a, fontSizeLarge: m, boxShadow: `inset 0 0 0 1px ${o}`, boxShadowActive: `inset 0 0 0 1px ${A}`, boxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, boxShadowHover: `inset 0 0 0 1px ${A}`, boxShadowDisabled: `inset 0 0 0 1px ${o}`, color: "#0000", colorDisabled: i, colorActive: "#0000", textColor: l, textColorDisabled: t, dotColorActive: A, dotColorDisabled: o, buttonBorderColor: o, buttonBorderColorActive: A, buttonBorderColorHover: A, buttonColor: "#0000", buttonColorActive: A, buttonTextColor: l, buttonTextColorActive: r, buttonTextColorHover: A, opacityDisabled: s, buttonBoxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px ${A}`, buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: n });
} }, Gt = { name: "DataTable", common: u, peers: { Button: G, Checkbox: ge, Radio: Vo, Pagination: Fo, Scrollbar: V, Empty: me, Popover: he, Ellipsis: Lo, Dropdown: Ue }, self(e) {
  const o = YA(e);
  return o.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", o.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", o;
} }, $t = { name: "Icon", common: u, self: KA }, jo = { name: "TimePicker", common: u, peers: { Scrollbar: V, Button: G, Input: $ }, self: JA }, Yt = { name: "DatePicker", common: u, peers: { Input: $, Button: G, TimePicker: jo, Scrollbar: V }, self(e) {
  const { popoverColor: o, hoverColor: A, primaryColor: r } = e, t = XA(e);
  return t.itemColorDisabled = be(o, A), t.itemColorIncluded = C(r, { alpha: 0.15 }), t.itemColorHover = be(o, A), t;
} }, Kt = { name: "Descriptions", common: u, self: qA }, No = { name: "Dialog", common: u, peers: { Button: G }, self: UA }, Jt = { name: "Modal", common: u, peers: { Scrollbar: V, Dialog: No, Card: Ho }, self: _A }, Xt = pe("n-modal-provider"), qt = pe("n-modal-api"), Ut = pe("n-modal-reactive-list"), _t = Object.assign(Object.assign({}, or), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, internalStyle: [String, Object], maskClosable: { type: Boolean, default: true }, zIndex: Number, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function, draggable: [Boolean, Object] }), en = Q({ name: "DialogEnvironment", props: Object.assign(Object.assign({}, _t), { internalKey: { type: String, required: true }, to: [String, Object], onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = Z(true);
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
  function s() {
    const { onEsc: a } = e;
    a && a();
  }
  function n() {
    o.value = false;
  }
  function c(a) {
    o.value = a;
  }
  return { show: o, hide: n, handleUpdateShow: c, handleAfterLeave: A, handleCloseClick: i, handleNegativeClick: t, handlePositiveClick: r, handleMaskClick: l, handleEsc: s };
}, render() {
  const { handlePositiveClick: e, handleUpdateShow: o, handleNegativeClick: A, handleCloseClick: r, handleAfterLeave: t, handleMaskClick: i, handleEsc: l, to: s, zIndex: n, maskClosable: c, show: a } = this;
  return v(xo, { show: a, onUpdateShow: o, onMaskClick: i, onEsc: l, to: s, zIndex: n, maskClosable: c, onAfterEnter: this.onAfterEnter, onAfterLeave: t, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, draggable: this.draggable, internalAppear: true, internalDialog: true }, { default: ({ draggableClass: m }) => v(er, Object.assign({}, ke(this.$props, Ar), { titleClass: vo([this.titleClass, m]), style: this.internalStyle, onClose: r, onNegativeClick: A, onPositiveClick: e })) });
} }), on = { injectionKey: String, to: [String, Object] }, An = Q({ name: "DialogProvider", props: on, setup() {
  const e = Z([]), o = {};
  function A(s = {}) {
    const n = ze(), c = Ye(Object.assign(Object.assign({}, s), { key: n, destroy: () => {
      var a;
      (a = o[`n-dialog-${n}`]) === null || a === void 0 || a.hide();
    } }));
    return e.value.push(c), c;
  }
  const r = ["info", "success", "warning", "error"].map((s) => (n) => A(Object.assign(Object.assign({}, n), { type: s })));
  function t(s) {
    const { value: n } = e;
    n.splice(n.findIndex((c) => c.key === s), 1);
  }
  function i() {
    Object.values(o).forEach((s) => {
      s == null ? void 0 : s.hide();
    });
  }
  const l = { create: A, destroyAll: i, info: r[0], success: r[1], warning: r[2], error: r[3] };
  return F(tr, l), F(rr, { clickedRef: So(64), clickedPositionRef: Io() }), F(nr, e), Object.assign(Object.assign({}, l), { dialogList: e, dialogInstRefs: o, handleAfterLeave: t });
}, render() {
  var e, o;
  return v(De, null, [this.dialogList.map((A) => v(en, Ke(A, ["destroy", "style"], { internalStyle: A.style, to: this.to, ref: (r) => {
    r === null ? delete this.dialogInstRefs[`n-dialog-${A.key}`] : this.dialogInstRefs[`n-dialog-${A.key}`] = r;
  }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }))), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), rn = { name: "LoadingBar", common: u, self(e) {
  const { primaryColor: o } = e;
  return { colorError: "red", colorLoading: o, height: "2px" };
} }, tn = { name: "Message", common: u, self: lr }, Wo = { icon: Function, type: { type: String, default: "info" }, content: [String, Number, Function], showIcon: { type: Boolean, default: true }, closable: Boolean, keepAliveOnHover: Boolean, onClose: Function, onMouseenter: Function, onMouseleave: Function }, nn = D([k("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [Bo({ overflow: "visible", originalTransition: "transform .3s var(--n-bezier)", enterToProps: { transform: "scale(1)" }, leaveToProps: { transform: "scale(0.85)" } })]), k("message", `
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
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => R(`${e}-type`, [D("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), D("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [ar()])]), S("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [D("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), D("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), k("message-container", `
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
 `)])]), ln = { info: () => v(gr, null), success: () => v(pr, null), warning: () => v(hr, null), error: () => v(mr, null), default: () => null }, an = Q({ name: "Message", props: Object.assign(Object.assign({}, Wo), { render: Function }), setup(e) {
  const { inlineThemeDisabled: o, mergedRtlRef: A } = Je(e), { props: r, mergedClsPrefixRef: t } = oe(yo), i = cr("Message", A, t), l = Pe("Message", "-message", nn, ur, r, t), s = E(() => {
    const { type: c } = e, { common: { cubicBezierEaseInOut: a }, self: { padding: m, margin: h, maxWidth: f, iconMargin: x, closeMargin: w, closeSize: z, iconSize: M, fontSize: N, lineHeight: j, borderRadius: W, border: J, iconColorInfo: Y, iconColorSuccess: H, iconColorWarning: X, iconColorError: U, iconColorLoading: ee, closeIconSize: _, closeBorderRadius: Ae, [te("textColor", c)]: ae, [te("boxShadow", c)]: re, [te("color", c)]: ve, [te("closeColorHover", c)]: Me, [te("closeColorPressed", c)]: He, [te("closeIconColor", c)]: Qe, [te("closeIconColorPressed", c)]: Oe, [te("closeIconColorHover", c)]: Te } } = l.value;
    return { "--n-bezier": a, "--n-margin": h, "--n-padding": m, "--n-max-width": f, "--n-font-size": N, "--n-icon-margin": x, "--n-icon-size": M, "--n-close-icon-size": _, "--n-close-border-radius": Ae, "--n-close-size": z, "--n-close-margin": w, "--n-text-color": ae, "--n-color": ve, "--n-box-shadow": re, "--n-icon-color-info": Y, "--n-icon-color-success": H, "--n-icon-color-warning": X, "--n-icon-color-error": U, "--n-icon-color-loading": ee, "--n-close-color-hover": Me, "--n-close-color-pressed": He, "--n-close-icon-color": Qe, "--n-close-icon-color-pressed": Oe, "--n-close-icon-color-hover": Te, "--n-line-height": j, "--n-border-radius": W, "--n-border": J };
  }), n = o ? ko("message", E(() => e.type[0]), s, {}) : void 0;
  return { mergedClsPrefix: t, rtlEnabled: i, messageProviderProps: r, handleClose() {
    var c;
    (c = e.onClose) === null || c === void 0 || c.call(e);
  }, cssVars: o ? void 0 : s, themeClass: n == null ? void 0 : n.themeClass, onRender: n == null ? void 0 : n.onRender, placement: r.placement };
}, render() {
  const { render: e, type: o, closable: A, content: r, mergedClsPrefix: t, cssVars: i, themeClass: l, onRender: s, icon: n, handleClose: c, showIcon: a } = this;
  s == null ? void 0 : s();
  let m;
  return v("div", { class: [`${t}-message-wrapper`, l], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [{ alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end" }, i] }, e ? e(this.$props) : v("div", { class: [`${t}-message ${t}-message--${o}-type`, this.rtlEnabled && `${t}-message--rtl`] }, (m = sn(n, o, t)) && a ? v("div", { class: `${t}-message__icon ${t}-message__icon--${o}-type` }, v(ir, null, { default: () => m })) : null, v("div", { class: `${t}-message__content` }, de(r)), A ? v(sr, { clsPrefix: t, class: `${t}-message__close`, onClick: c, absolute: true }) : null));
} });
function sn(e, o, A) {
  if (typeof e == "function") return e();
  {
    const r = o === "loading" ? v(dr, { clsPrefix: A, strokeWidth: 24, scale: 0.85 }) : ln[o]();
    return r ? v(Eo, { clsPrefix: A, key: o }, { default: () => r }) : null;
  }
}
const cn = Q({ name: "MessageEnvironment", props: Object.assign(Object.assign({}, Wo), { duration: { type: Number, default: 3e3 }, onAfterLeave: Function, onLeave: Function, internalKey: { type: String, required: true }, onInternalAfterLeave: Function, onHide: Function, onAfterHide: Function }), setup(e) {
  let o = null;
  const A = Z(true);
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
  function i(a) {
    a.currentTarget === a.target && r();
  }
  function l() {
    const { onHide: a } = e;
    A.value = false, o && (window.clearTimeout(o), o = null), a && a();
  }
  function s() {
    const { onClose: a } = e;
    a && a(), l();
  }
  function n() {
    const { onAfterLeave: a, onInternalAfterLeave: m, onAfterHide: h, internalKey: f } = e;
    a && a(), m && m(f), h && h();
  }
  function c() {
    l();
  }
  return { show: A, hide: l, handleClose: s, handleAfterLeave: n, handleMouseleave: i, handleMouseenter: t, deactivate: c };
}, render() {
  return v(wo, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, { default: () => [this.show ? v(an, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null] });
} }), dn = Object.assign(Object.assign({}, Pe.props), { to: [String, Object], duration: { type: Number, default: 3e3 }, keepAliveOnHover: Boolean, max: Number, placement: { type: String, default: "top" }, closable: Boolean, containerClass: String, containerStyle: [String, Object] }), un = Q({ name: "MessageProvider", props: dn, setup(e) {
  const { mergedClsPrefixRef: o } = Je(e), A = Z([]), r = Z({}), t = { create(n, c) {
    return i(n, Object.assign({ type: "default" }, c));
  }, info(n, c) {
    return i(n, Object.assign(Object.assign({}, c), { type: "info" }));
  }, success(n, c) {
    return i(n, Object.assign(Object.assign({}, c), { type: "success" }));
  }, warning(n, c) {
    return i(n, Object.assign(Object.assign({}, c), { type: "warning" }));
  }, error(n, c) {
    return i(n, Object.assign(Object.assign({}, c), { type: "error" }));
  }, loading(n, c) {
    return i(n, Object.assign(Object.assign({}, c), { type: "loading" }));
  }, destroyAll: s };
  F(yo, { props: e, mergedClsPrefixRef: o }), F(vr, t);
  function i(n, c) {
    const a = ze(), m = Ye(Object.assign(Object.assign({}, c), { content: n, key: a, destroy: () => {
      var f;
      (f = r.value[a]) === null || f === void 0 || f.hide();
    } })), { max: h } = e;
    return h && A.value.length >= h && A.value.shift(), A.value.push(m), m;
  }
  function l(n) {
    A.value.splice(A.value.findIndex((c) => c.key === n), 1), delete r.value[n];
  }
  function s() {
    Object.values(r.value).forEach((n) => {
      n.hide();
    });
  }
  return Object.assign({ mergedClsPrefix: o, messageRefs: r, messageList: A, handleAfterLeave: l }, t);
}, render() {
  var e, o, A;
  return v(De, null, (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e), this.messageList.length ? v(AA, { to: (A = this.to) !== null && A !== void 0 ? A : "body" }, v("div", { class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass], key: "message-container", style: this.containerStyle }, this.messageList.map((r) => v(cn, Object.assign({ ref: (t) => {
    t && (this.messageRefs[r.key] = t);
  }, internalKey: r.key, onInternalAfterLeave: this.handleAfterLeave }, Ke(r, ["destroy"], void 0), { duration: r.duration === void 0 ? this.duration : r.duration, keepAliveOnHover: r.keepAliveOnHover === void 0 ? this.keepAliveOnHover : r.keepAliveOnHover, closable: r.closable === void 0 ? this.closable : r.closable }))))) : null);
} }), mn = Q({ name: "ModalEnvironment", props: Object.assign(Object.assign({}, Cr), { internalKey: { type: String, required: true }, onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = Z(true);
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
  function s() {
    const { onEsc: a } = e;
    a && a();
  }
  function n() {
    o.value = false;
  }
  function c(a) {
    o.value = a;
  }
  return { show: o, hide: n, handleUpdateShow: c, handleAfterLeave: A, handleCloseClick: i, handleNegativeClick: t, handlePositiveClick: r, handleMaskClick: l, handleEsc: s };
}, render() {
  const { handleUpdateShow: e, handleAfterLeave: o, handleMaskClick: A, handleEsc: r, show: t } = this;
  return v(xo, Object.assign({}, this.$props, { show: t, onUpdateShow: e, onMaskClick: A, onEsc: r, onAfterLeave: o, internalAppear: true, internalModal: true }), this.$slots);
} }), hn = { to: [String, Object] }, pn = Q({ name: "ModalProvider", props: hn, setup() {
  const e = Z([]), o = {};
  function A(l = {}) {
    const s = ze(), n = Ye(Object.assign(Object.assign({}, l), { key: s, destroy: () => {
      var c;
      (c = o[`n-modal-${s}`]) === null || c === void 0 || c.hide();
    } }));
    return e.value.push(n), n;
  }
  function r(l) {
    const { value: s } = e;
    s.splice(s.findIndex((n) => n.key === l), 1);
  }
  function t() {
    Object.values(o).forEach((l) => {
      l == null ? void 0 : l.hide();
    });
  }
  const i = { create: A, destroyAll: t };
  return F(qt, i), F(Xt, { clickedRef: So(64), clickedPositionRef: Io() }), F(Ut, e), Object.assign(Object.assign({}, i), { modalList: e, modalInstRefs: o, handleAfterLeave: r });
}, render() {
  var e, o;
  return v(De, null, [this.modalList.map((A) => {
    var r;
    return v(mn, Ke(A, ["destroy", "render"], { to: (r = A.to) !== null && r !== void 0 ? r : this.to, ref: (t) => {
      t === null ? delete this.modalInstRefs[`n-modal-${A.key}`] : this.modalInstRefs[`n-modal-${A.key}`] = t;
    }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }), { default: A.render });
  }), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), gn = { name: "Notification", common: u, peers: { Scrollbar: V }, self: fr }, vn = { name: "Divider", common: u, self: br }, Cn = { name: "Drawer", common: u, peers: { Scrollbar: V }, self: xr }, fn = { name: "DynamicInput", common: u, peers: { Input: $, Button: G }, self() {
  return Ir;
} }, Zo = { name: "Space", self() {
  return Sr;
} }, bn = { name: "DynamicTags", common: u, peers: { Input: $, Button: G, Tag: Ro, Space: Zo }, self() {
  return { inputWidth: "64px" };
} }, xn = { name: "Element", common: u }, In = { name: "Flex", self() {
  return Br;
} }, Sn = { name: "ButtonGroup", common: u }, Bn = { name: "Form", common: u, self: yr }, yn = { name: "GradientText", common: u, self(e) {
  const { primaryColor: o, successColor: A, warningColor: r, errorColor: t, infoColor: i, primaryColorSuppl: l, successColorSuppl: s, warningColorSuppl: n, errorColorSuppl: c, infoColorSuppl: a, fontWeightStrong: m } = e;
  return { fontWeight: m, rotate: "252deg", colorStartPrimary: o, colorEndPrimary: l, colorStartInfo: i, colorEndInfo: a, colorStartWarning: r, colorEndWarning: n, colorStartError: t, colorEndError: c, colorStartSuccess: A, colorEndSuccess: s };
} }, kn = { name: "InputNumber", common: u, peers: { Button: G, Input: $ }, self(e) {
  const { textColorDisabled: o } = e;
  return { iconColorDisabled: o };
} }, En = { name: "InputOtp", common: u, peers: { Input: $ }, self: kr }, wn = { name: "Layout", common: u, peers: { Scrollbar: V }, self(e) {
  const { textColor2: o, bodyColor: A, popoverColor: r, cardColor: t, dividerColor: i, scrollbarColor: l, scrollbarColorHover: s } = e;
  return { textColor: o, textColorInverted: o, color: A, colorEmbedded: A, headerColor: t, headerColorInverted: t, footerColor: t, footerColorInverted: t, headerBorderColor: i, headerBorderColorInverted: i, footerBorderColor: i, footerBorderColorInverted: i, siderBorderColor: i, siderBorderColorInverted: i, siderColor: t, siderColorInverted: t, siderToggleButtonBorder: "1px solid transparent", siderToggleButtonColor: r, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: be(A, l), siderToggleBarColorHover: be(A, s), __invertScrollbar: "false" };
} }, Dn = { name: "Row", common: u }, zn = { name: "List", common: u, self: Er }, Pn = { name: "Log", common: u, peers: { Scrollbar: V, Code: Qo }, self(e) {
  const { textColor2: o, inputColor: A, fontSize: r, primaryColor: t } = e;
  return { loaderFontSize: r, loaderTextColor: o, loaderColor: A, loaderBorder: "1px solid #0000", loadingColor: t };
} }, Rn = { name: "Mention", common: u, peers: { InternalSelectMenu: xe, Input: $ }, self(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
} }, Mn = { name: "Menu", common: u, peers: { Tooltip: Re, Dropdown: Ue }, self(e) {
  const { primaryColor: o, primaryColorSuppl: A } = e, r = wr(e);
  return r.itemColorActive = C(o, { alpha: 0.15 }), r.itemColorActiveHover = C(o, { alpha: 0.15 }), r.itemColorActiveCollapsed = C(o, { alpha: 0.15 }), r.itemColorActiveInverted = A, r.itemColorActiveHoverInverted = A, r.itemColorActiveCollapsedInverted = A, r;
} }, Hn = { name: "PageHeader", common: u, self: Dr }, Qn = { name: "Popconfirm", common: u, peers: { Button: G, Popover: he }, self: zr }, Go = { name: "Progress", common: u, self(e) {
  const o = Pr(e);
  return o.textColorLineInner = "rgb(0, 0, 0)", o.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", o;
} }, On = { name: "Rate", common: u, self(e) {
  const { railColor: o } = e;
  return { itemColor: o, itemColorActive: "#CCAA33", itemSize: "20px", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
} }, Tn = { name: "Result", common: u, self: Rr }, Fn = { name: "Slider", common: u, self(e) {
  const o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: A, modalColor: r, primaryColorSuppl: t, popoverColor: i, textColor2: l, cardColor: s, borderRadius: n, fontSize: c, opacityDisabled: a } = e;
  return Object.assign(Object.assign({}, Mr), { fontSize: c, markFontSize: c, railColor: A, railColorHover: A, fillColor: t, fillColorHover: t, opacityDisabled: a, handleColor: "#FFF", dotColor: s, dotColorModal: r, dotColorPopover: i, handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", indicatorColor: i, indicatorBoxShadow: o, indicatorTextColor: l, indicatorBorderRadius: n, dotBorder: `2px solid ${A}`, dotBorderActive: `2px solid ${t}`, dotBoxShadow: "" });
} }, Ln = { name: "Spin", common: u, self: Hr }, Vn = { name: "Statistic", common: u, self: Qr }, jn = { name: "Steps", common: u, self: Or }, Nn = { name: "Switch", common: u, self(e) {
  const { primaryColorSuppl: o, opacityDisabled: A, borderRadius: r, primaryColor: t, textColor2: i, baseColor: l } = e;
  return Object.assign(Object.assign({}, Tr), { iconColor: l, textColor: i, loadingColor: o, opacityDisabled: A, railColor: "rgba(255, 255, 255, .20)", railColorActive: o, buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 8px 0 ${C(t, { alpha: 0.3 })}` });
} }, Wn = { name: "Table", common: u, self: Fr }, Zn = { name: "Tabs", common: u, self(e) {
  const o = Lr(e), { inputColor: A } = e;
  return o.colorSegment = A, o.tabColorSegment = A, o;
} }, Gn = { name: "Thing", common: u, self: Vr }, $n = { name: "Timeline", common: u, self(e) {
  const { textColor3: o, infoColorSuppl: A, errorColorSuppl: r, successColorSuppl: t, warningColorSuppl: i, textColor1: l, textColor2: s, railColor: n, fontWeightStrong: c, fontSize: a } = e;
  return Object.assign(Object.assign({}, jr), { contentFontSize: a, titleFontWeight: c, circleBorder: `2px solid ${o}`, circleBorderInfo: `2px solid ${A}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${t}`, circleBorderWarning: `2px solid ${i}`, iconColor: o, iconColorInfo: A, iconColorError: r, iconColorSuccess: t, iconColorWarning: i, titleTextColor: l, contentTextColor: s, metaTextColor: o, lineColor: n });
} }, Yn = { name: "Transfer", common: u, peers: { Checkbox: ge, Scrollbar: V, Input: $, Empty: me, Button: G }, self(e) {
  const { fontWeight: o, fontSizeLarge: A, fontSizeMedium: r, fontSizeSmall: t, heightLarge: i, heightMedium: l, borderRadius: s, inputColor: n, tableHeaderColor: c, textColor1: a, textColorDisabled: m, textColor2: h, textColor3: f, hoverColor: x, closeColorHover: w, closeColorPressed: z, closeIconColor: M, closeIconColorHover: N, closeIconColorPressed: j, dividerColor: W } = e;
  return Object.assign(Object.assign({}, Nr), { itemHeightSmall: l, itemHeightMedium: l, itemHeightLarge: i, fontSizeSmall: t, fontSizeMedium: r, fontSizeLarge: A, borderRadius: s, dividerColor: W, borderColor: "#0000", listColor: n, headerColor: c, titleTextColor: a, titleTextColorDisabled: m, extraTextColor: f, extraTextColorDisabled: m, itemTextColor: h, itemTextColorDisabled: m, itemColorPending: x, titleFontWeight: o, closeColorHover: w, closeColorPressed: z, closeIconColor: M, closeIconColorHover: N, closeIconColorPressed: j });
} }, $o = { name: "Tree", common: u, peers: { Checkbox: ge, Scrollbar: V, Empty: me }, self(e) {
  const { primaryColor: o } = e, A = Wr(e);
  return A.nodeColorActive = C(o, { alpha: 0.15 }), A;
} }, Kn = { name: "TreeSelect", common: u, peers: { Tree: $o, Empty: me, InternalSelection: qe } }, Jn = { name: "Typography", common: u, self: Zr }, Xn = { name: "Upload", common: u, peers: { Button: G, Progress: Go }, self(e) {
  const { errorColor: o } = e, A = Gr(e);
  return A.itemColorHoverError = C(o, { alpha: 0.09 }), A;
} }, qn = { name: "Watermark", common: u, self(e) {
  const { fontFamily: o } = e;
  return { fontFamily: o };
} }, Un = { name: "FloatButton", common: u, self(e) {
  const { popoverColor: o, textColor2: A, buttonColor2Hover: r, buttonColor2Pressed: t, primaryColor: i, primaryColorHover: l, primaryColorPressed: s, baseColor: n, borderRadius: c } = e;
  return { color: o, textColor: A, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)", colorHover: r, colorPressed: t, colorPrimary: i, colorPrimaryHover: l, colorPrimaryPressed: s, textColorPrimary: n, borderRadiusSquare: c };
} }, _n = Q({ name: "GlobalStyle", setup() {
  if (typeof document > "u") return;
  const e = oe($r, null), { body: o } = document, { style: A } = o;
  let r = false, t = true;
  go(() => {
    Ne(() => {
      var i, l;
      const { textColor2: s, fontSize: n, fontFamily: c, bodyColor: a, cubicBezierEaseInOut: m, lineHeight: h } = e ? Yr({}, ((i = e.mergedThemeRef.value) === null || i === void 0 ? void 0 : i.common) || no, (l = e.mergedThemeOverridesRef.value) === null || l === void 0 ? void 0 : l.common) : no;
      if (r || !o.hasAttribute("n-styled")) {
        A.setProperty("-webkit-text-size-adjust", "100%"), A.setProperty("-webkit-tap-highlight-color", "transparent"), A.padding = "0", A.margin = "0", A.backgroundColor = a, A.color = s, A.fontSize = n, A.fontFamily = c, A.lineHeight = h;
        const f = `color .3s ${m}, background-color .3s ${m}`;
        t ? setTimeout(() => {
          A.transition = f;
        }, 0) : A.transition = f, o.setAttribute("n-styled", ""), r = true, t = false;
      }
    });
  }), rA(() => {
    r && o.removeAttribute("n-styled");
  });
}, render() {
  return null;
} }), el = { name: "Heatmap", common: u, self(e) {
  const o = Kr(e);
  return Object.assign(Object.assign({}, o), { activeColors: ["#0d4429", "#006d32", "#26a641", "#39d353"], mininumColor: "rgba(255, 255, 255, 0.1)", loadingColorStart: "rgba(255, 255, 255, 0.12)", loadingColorEnd: "rgba(255, 255, 255, 0.18)" });
} }, ol = { name: "IconWrapper", common: u, self: Jr }, Al = { name: "Image", common: u, peers: { Tooltip: Re }, self: (e) => {
  const { textColor2: o } = e;
  return { toolbarIconColor: o, toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
} }, rl = { name: "Transfer", common: u, peers: { Checkbox: ge, Scrollbar: V, Input: $, Empty: me, Button: G }, self(e) {
  const { iconColorDisabled: o, iconColor: A, fontWeight: r, fontSizeLarge: t, fontSizeMedium: i, fontSizeSmall: l, heightLarge: s, heightMedium: n, heightSmall: c, borderRadius: a, inputColor: m, tableHeaderColor: h, textColor1: f, textColorDisabled: x, textColor2: w, hoverColor: z } = e;
  return Object.assign(Object.assign({}, Xr), { itemHeightSmall: c, itemHeightMedium: n, itemHeightLarge: s, fontSizeSmall: l, fontSizeMedium: i, fontSizeLarge: t, borderRadius: a, borderColor: "#0000", listColor: m, headerColor: h, titleTextColor: f, titleTextColorDisabled: x, extraTextColor: w, filterDividerColor: "#0000", itemTextColor: w, itemTextColorDisabled: x, itemColorPending: z, titleFontWeight: r, iconColor: A, iconColorDisabled: o });
} }, tl = { name: "Marquee", common: u, self: qr }, Ie = pe("n-menu"), Yo = pe("n-submenu"), _e = pe("n-menu-item-group"), co = [D("&::before", "background-color: var(--n-item-color-hover);"), S("arrow", `
 color: var(--n-arrow-color-hover);
 `), S("icon", `
 color: var(--n-item-icon-color-hover);
 `), k("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [D("a", `
 color: var(--n-item-text-color-hover);
 `), S("extra", `
 color: var(--n-item-text-color-hover);
 `)])], uo = [S("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), k("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [D("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), S("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])], nl = D([k("menu", `
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
 `, [k("submenu", "margin: 0;"), k("menu-item", "margin: 0;"), k("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [D("&::before", "display: none;"), R("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), k("menu-item-content", [R("selected", [S("icon", "color: var(--n-item-icon-color-active-horizontal);"), k("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [D("a", "color: var(--n-item-text-color-active-horizontal);"), S("extra", "color: var(--n-item-text-color-active-horizontal);")])]), R("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [k("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [D("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), S("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), S("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), Ce("disabled", [Ce("selected, child-active", [D("&:focus-within", uo)]), R("selected", [se(null, [S("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), k("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [D("a", "color: var(--n-item-text-color-active-hover-horizontal);"), S("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), R("child-active", [se(null, [S("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), k("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [D("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), S("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), se("border-bottom: 2px solid var(--n-border-color-horizontal);", uo)]), k("menu-item-content-header", [D("a", "color: var(--n-item-text-color-horizontal);")])])]), Ce("responsive", [k("menu-item-content-header", `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), R("collapsed", [k("menu-item-content", [R("selected", [D("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), k("menu-item-content-header", "opacity: 0;"), S("arrow", "opacity: 0;"), S("icon", "color: var(--n-item-icon-color-collapsed);")])]), k("menu-item", `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), k("menu-item-content", `
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
 `), R("disabled", `
 opacity: .45;
 cursor: not-allowed;
 `), R("collapsed", [S("arrow", "transform: rotate(0);")]), R("selected", [D("&::before", "background-color: var(--n-item-color-active);"), S("arrow", "color: var(--n-arrow-color-active);"), S("icon", "color: var(--n-item-icon-color-active);"), k("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [D("a", "color: var(--n-item-text-color-active);"), S("extra", "color: var(--n-item-text-color-active);")])]), R("child-active", [k("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [D("a", `
 color: var(--n-item-text-color-child-active);
 `), S("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), S("arrow", `
 color: var(--n-arrow-color-child-active);
 `), S("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), Ce("disabled", [Ce("selected, child-active", [D("&:focus-within", co)]), R("selected", [se(null, [S("arrow", "color: var(--n-arrow-color-active-hover);"), S("icon", "color: var(--n-item-icon-color-active-hover);"), k("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [D("a", "color: var(--n-item-text-color-active-hover);"), S("extra", "color: var(--n-item-text-color-active-hover);")])])]), R("child-active", [se(null, [S("arrow", "color: var(--n-arrow-color-child-active-hover);"), S("icon", "color: var(--n-item-icon-color-child-active-hover);"), k("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [D("a", "color: var(--n-item-text-color-child-active-hover);"), S("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), R("selected", [se(null, [D("&::before", "background-color: var(--n-item-color-active-hover);")])]), se(null, co)]), S("icon", `
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
 `), k("menu-item-content-header", `
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
 `)])]), k("submenu", `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [k("menu-item-content", `
 height: var(--n-item-height);
 `), k("submenu-children", `
 overflow: hidden;
 padding: 0;
 `, [Bo({ duration: ".2s" })])]), k("menu-item-group", [k("menu-item-group-title", `
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
 `)])]), k("menu-tooltip", [D("a", `
 color: inherit;
 text-decoration: none;
 `)]), k("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function se(e, o) {
  return [R("hover", e, o), D("&:hover", e, o)];
}
const Ko = Q({ name: "MenuOptionContent", props: { collapsed: Boolean, disabled: Boolean, title: [String, Function], icon: Function, extra: [String, Function], showArrow: Boolean, childActive: Boolean, hover: Boolean, paddingLeft: Number, selected: Boolean, maxIconSize: { type: Number, required: true }, activeIconSize: { type: Number, required: true }, iconMarginRight: { type: Number, required: true }, clsPrefix: { type: String, required: true }, onClick: Function, tmNode: { type: Object, required: true }, isEllipsisPlaceholder: Boolean }, setup(e) {
  const { props: o } = oe(Ie);
  return { menuProps: o, style: E(() => {
    const { paddingLeft: A } = e;
    return { paddingLeft: A && `${A}px` };
  }), iconStyle: E(() => {
    const { maxIconSize: A, activeIconSize: r, iconMarginRight: t } = e;
    return { width: `${A}px`, height: `${A}px`, fontSize: `${r}px`, marginRight: `${t}px` };
  }) };
}, render() {
  const { clsPrefix: e, tmNode: o, menuProps: { renderIcon: A, renderLabel: r, renderExtra: t, expandIcon: i } } = this, l = A ? A(o.rawNode) : de(this.icon);
  return v("div", { onClick: (s) => {
    var n;
    (n = this.onClick) === null || n === void 0 || n.call(this, s);
  }, role: "none", class: [`${e}-menu-item-content`, { [`${e}-menu-item-content--selected`]: this.selected, [`${e}-menu-item-content--collapsed`]: this.collapsed, [`${e}-menu-item-content--child-active`]: this.childActive, [`${e}-menu-item-content--disabled`]: this.disabled, [`${e}-menu-item-content--hover`]: this.hover }], style: this.style }, l && v("div", { class: `${e}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [l]), v("div", { class: `${e}-menu-item-content-header`, role: "none" }, this.isEllipsisPlaceholder ? this.title : r ? r(o.rawNode) : de(this.title), this.extra || t ? v("span", { class: `${e}-menu-item-content-header__extra` }, " ", t ? t(o.rawNode) : de(this.extra)) : null), this.showArrow ? v(Eo, { ariaHidden: true, class: `${e}-menu-item-content__arrow`, clsPrefix: e }, { default: () => i ? i(o.rawNode) : v(Et, null) }) : null);
} }), ye = 8;
function eo(e) {
  const o = oe(Ie), { props: A, mergedCollapsedRef: r } = o, t = oe(Yo, null), i = oe(_e, null), l = E(() => A.mode === "horizontal"), s = E(() => l.value ? A.dropdownPlacement : "tmNodes" in e ? "right-start" : "right"), n = E(() => {
    var h;
    return Math.max((h = A.collapsedIconSize) !== null && h !== void 0 ? h : A.iconSize, A.iconSize);
  }), c = E(() => {
    var h;
    return !l.value && e.root && r.value && (h = A.collapsedIconSize) !== null && h !== void 0 ? h : A.iconSize;
  }), a = E(() => {
    if (l.value) return;
    const { collapsedWidth: h, indent: f, rootIndent: x } = A, { root: w, isGroup: z } = e, M = x === void 0 ? f : x;
    return w ? r.value ? h / 2 - n.value / 2 : M : i && typeof i.paddingLeftRef.value == "number" ? f / 2 + i.paddingLeftRef.value : t && typeof t.paddingLeftRef.value == "number" ? (z ? f / 2 : f) + t.paddingLeftRef.value : 0;
  }), m = E(() => {
    const { collapsedWidth: h, indent: f, rootIndent: x } = A, { value: w } = n, { root: z } = e;
    return l.value || !z || !r.value ? ye : (x === void 0 ? f : x) + w + ye - (h + w) / 2;
  });
  return { dropdownPlacement: s, activeIconSize: c, maxIconSize: n, paddingLeft: a, iconMarginRight: m, NMenu: o, NSubmenu: t, NMenuOptionGroup: i };
}
const oo = { internalKey: { type: [String, Number], required: true }, root: Boolean, isGroup: Boolean, level: { type: Number, required: true }, title: [String, Function], extra: [String, Function] }, ll = Q({ name: "MenuDivider", setup() {
  const e = oe(Ie), { mergedClsPrefixRef: o, isHorizontalRef: A } = e;
  return () => A.value ? null : v("div", { class: `${o.value}-menu-divider` });
} }), Jo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function }), al = Xe(Jo), il = Q({ name: "MenuOption", props: Jo, setup(e) {
  const o = eo(e), { NSubmenu: A, NMenu: r, NMenuOptionGroup: t } = o, { props: i, mergedClsPrefixRef: l, mergedCollapsedRef: s } = r, n = A ? A.mergedDisabledRef : t ? t.mergedDisabledRef : { value: false }, c = E(() => n.value || e.disabled);
  function a(h) {
    const { onClick: f } = e;
    f && f(h);
  }
  function m(h) {
    c.value || (r.doSelect(e.internalKey, e.tmNode.rawNode), a(h));
  }
  return { mergedClsPrefix: l, dropdownPlacement: o.dropdownPlacement, paddingLeft: o.paddingLeft, iconMarginRight: o.iconMarginRight, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, mergedTheme: r.mergedThemeRef, menuProps: i, dropdownEnabled: Ze(() => e.root && s.value && i.mode !== "horizontal" && !c.value), selected: Ze(() => r.mergedValueRef.value === e.internalKey), mergedDisabled: c, handleClick: m };
}, render() {
  const { mergedClsPrefix: e, mergedTheme: o, tmNode: A, menuProps: { renderLabel: r, nodeProps: t } } = this, i = t == null ? void 0 : t(A.rawNode);
  return v("div", Object.assign({}, i, { role: "menuitem", class: [`${e}-menu-item`, i == null ? void 0 : i.class] }), v(Ur, { theme: o.peers.Tooltip, themeOverrides: o.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: ["menu-tooltip"] }, { default: () => r ? r(A.rawNode) : de(this.title), trigger: () => v(Ko, { tmNode: A, clsPrefix: e, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }) }));
} }), Xo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, tmNodes: { type: Array, required: true } }), sl = Xe(Xo), cl = Q({ name: "MenuOptionGroup", props: Xo, setup(e) {
  const o = eo(e), { NSubmenu: A } = o, r = E(() => (A == null ? void 0 : A.mergedDisabledRef.value) ? true : e.tmNode.disabled);
  F(_e, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: r });
  const { mergedClsPrefixRef: t, props: i } = oe(Ie);
  return function() {
    const { value: l } = t, s = o.paddingLeft.value, { nodeProps: n } = i, c = n == null ? void 0 : n(e.tmNode.rawNode);
    return v("div", { class: `${l}-menu-item-group`, role: "group" }, v("div", Object.assign({}, c, { class: [`${l}-menu-item-group-title`, c == null ? void 0 : c.class], style: [(c == null ? void 0 : c.style) || "", s !== void 0 ? `padding-left: ${s}px;` : ""] }), de(e.title), e.extra ? v(De, null, " ", de(e.extra)) : null), v("div", null, e.tmNodes.map((a) => Ao(a, i))));
  };
} });
function Ge(e) {
  return e.type === "divider" || e.type === "render";
}
function dl(e) {
  return e.type === "divider";
}
function Ao(e, o) {
  const { rawNode: A } = e, { show: r } = A;
  if (r === false) return null;
  if (Ge(A)) return dl(A) ? v(ll, Object.assign({ key: e.key }, A.props)) : null;
  const { labelField: t } = o, { key: i, level: l, isGroup: s } = e, n = Object.assign(Object.assign({}, A), { title: A.title || A[t], extra: A.titleExtra || A.extra, key: i, internalKey: i, level: l, root: l === 0, isGroup: s });
  return e.children ? e.isGroup ? v(cl, ke(n, sl, { tmNode: e, tmNodes: e.children, key: i })) : v($e, ke(n, ul, { key: i, rawNodes: A[o.childrenField], tmNodes: e.children, tmNode: e })) : v(il, ke(n, al, { key: i, tmNode: e }));
}
const qo = Object.assign(Object.assign({}, oo), { rawNodes: { type: Array, default: () => [] }, tmNodes: { type: Array, default: () => [] }, tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function, domId: String, virtualChildActive: { type: Boolean, default: void 0 }, isEllipsisPlaceholder: Boolean }), ul = Xe(qo), $e = Q({ name: "Submenu", props: qo, setup(e) {
  const o = eo(e), { NMenu: A, NSubmenu: r } = o, { props: t, mergedCollapsedRef: i, mergedThemeRef: l } = A, s = E(() => {
    const { disabled: h } = e;
    return (r == null ? void 0 : r.mergedDisabledRef.value) || t.disabled ? true : h;
  }), n = Z(false);
  F(Yo, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: s }), F(_e, null);
  function c() {
    const { onClick: h } = e;
    h && h();
  }
  function a() {
    s.value || (i.value || A.toggleExpand(e.internalKey), c());
  }
  function m(h) {
    n.value = h;
  }
  return { menuProps: t, mergedTheme: l, doSelect: A.doSelect, inverted: A.invertedRef, isHorizontal: A.isHorizontalRef, mergedClsPrefix: A.mergedClsPrefixRef, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, iconMarginRight: o.iconMarginRight, dropdownPlacement: o.dropdownPlacement, dropdownShow: n, paddingLeft: o.paddingLeft, mergedDisabled: s, mergedValue: A.mergedValueRef, childActive: Ze(() => {
    var h;
    return (h = e.virtualChildActive) !== null && h !== void 0 ? h : A.activePathRef.value.includes(e.internalKey);
  }), collapsed: E(() => t.mode === "horizontal" ? false : i.value ? true : !A.mergedExpandedKeysRef.value.includes(e.internalKey)), dropdownEnabled: E(() => !s.value && (t.mode === "horizontal" || i.value)), handlePopoverShowChange: m, handleClick: a };
}, render() {
  var e;
  const { mergedClsPrefix: o, menuProps: { renderIcon: A, renderLabel: r } } = this, t = () => {
    const { isHorizontal: l, paddingLeft: s, collapsed: n, mergedDisabled: c, maxIconSize: a, activeIconSize: m, title: h, childActive: f, icon: x, handleClick: w, menuProps: { nodeProps: z }, dropdownShow: M, iconMarginRight: N, tmNode: j, mergedClsPrefix: W, isEllipsisPlaceholder: J, extra: Y } = this, H = z == null ? void 0 : z(j.rawNode);
    return v("div", Object.assign({}, H, { class: [`${W}-menu-item`, H == null ? void 0 : H.class], role: "menuitem" }), v(Ko, { tmNode: j, paddingLeft: s, collapsed: n, disabled: c, iconMarginRight: N, maxIconSize: a, activeIconSize: m, title: h, extra: Y, showArrow: !l, childActive: f, clsPrefix: W, icon: x, hover: M, onClick: w, isEllipsisPlaceholder: J }));
  }, i = () => v(wo, null, { default: () => {
    const { tmNodes: l, collapsed: s } = this;
    return s ? null : v("div", { class: `${o}-submenu-children`, role: "menu" }, l.map((n) => Ao(n, this.menuProps)));
  } });
  return this.root ? v(_r, Object.assign({ size: "large", trigger: "hover" }, (e = this.menuProps) === null || e === void 0 ? void 0 : e.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: { fontSizeLarge: "14px", optionIconSizeLarge: "18px" }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: A, renderLabel: r }), { default: () => v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, t(), this.isHorizontal ? null : i()) }) : v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, t(), i());
} }), ml = Object.assign(Object.assign({}, Pe.props), { options: { type: Array, default: () => [] }, collapsed: { type: Boolean, default: void 0 }, collapsedWidth: { type: Number, default: 48 }, iconSize: { type: Number, default: 20 }, collapsedIconSize: { type: Number, default: 24 }, rootIndent: Number, indent: { type: Number, default: 32 }, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, disabledField: { type: String, default: "disabled" }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: { type: [String, Number], default: null }, mode: { type: String, default: "vertical" }, watchProps: { type: Array, default: void 0 }, disabled: Boolean, show: { type: Boolean, default: true }, inverted: Boolean, "onUpdate:expandedKeys": [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], "onUpdate:value": [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, dropdownProps: Object, accordion: Boolean, nodeProps: Function, dropdownPlacement: { type: String, default: "bottom" }, responsive: Boolean, items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array }), Le = Q({ name: "Menu", inheritAttrs: false, props: ml, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: A } = Je(e), r = Pe("Menu", "-menu", nl, tt, e, o), t = oe(ot, null), i = E(() => {
    var b;
    const { collapsed: y } = e;
    if (y !== void 0) return y;
    if (t) {
      const { collapseModeRef: d, collapsedRef: I } = t;
      if (d.value === "width") return (b = I.value) !== null && b !== void 0 ? b : false;
    }
    return false;
  }), l = E(() => {
    const { keyField: b, childrenField: y, disabledField: d } = e;
    return Fe(e.items || e.options, { getIgnored(I) {
      return Ge(I);
    }, getChildren(I) {
      return I[y];
    }, getDisabled(I) {
      return I[d];
    }, getKey(I) {
      var P;
      return (P = I[b]) !== null && P !== void 0 ? P : I.name;
    } });
  }), s = E(() => new Set(l.value.treeNodes.map((b) => b.key))), { watchProps: n } = e, c = Z(null);
  (n == null ? void 0 : n.includes("defaultValue")) ? Ne(() => {
    c.value = e.defaultValue;
  }) : c.value = e.defaultValue;
  const a = to(e, "value"), m = lo(a, c), h = Z([]), f = () => {
    h.value = e.defaultExpandAll ? l.value.getNonLeafKeys() : e.defaultExpandedNames || e.defaultExpandedKeys || l.value.getPath(m.value, { includeSelf: false }).keyPath;
  };
  (n == null ? void 0 : n.includes("defaultExpandedKeys")) ? Ne(f) : f();
  const x = At(e, ["expandedNames", "expandedKeys"]), w = lo(x, h), z = E(() => l.value.treeNodes), M = E(() => l.value.getPath(m.value).keyPath);
  F(Ie, { props: e, mergedCollapsedRef: i, mergedThemeRef: r, mergedValueRef: m, mergedExpandedKeysRef: w, activePathRef: M, mergedClsPrefixRef: o, isHorizontalRef: E(() => e.mode === "horizontal"), invertedRef: to(e, "inverted"), doSelect: N, toggleExpand: W });
  function N(b, y) {
    const { "onUpdate:value": d, onUpdateValue: I, onSelect: P } = e;
    I && ie(I, b, y), d && ie(d, b, y), P && ie(P, b, y), c.value = b;
  }
  function j(b) {
    const { "onUpdate:expandedKeys": y, onUpdateExpandedKeys: d, onExpandedNamesChange: I, onOpenNamesChange: P } = e;
    y && ie(y, b), d && ie(d, b), I && ie(I, b), P && ie(P, b), h.value = b;
  }
  function W(b) {
    const y = Array.from(w.value), d = y.findIndex((I) => I === b);
    if (~d) y.splice(d, 1);
    else {
      if (e.accordion && s.value.has(b)) {
        const I = y.findIndex((P) => s.value.has(P));
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
    e.accordion && s.value.forEach((P) => {
      I.has(P) && !y.includes(P) && I.delete(P);
    }), j(Array.from(I));
  }, Y = E(() => {
    const { inverted: b } = e, { common: { cubicBezierEaseInOut: y }, self: d } = r.value, { borderRadius: I, borderColorHorizontal: P, fontSize: Uo, itemHeight: _o, dividerColor: eA } = d, p = { "--n-divider-color": eA, "--n-bezier": y, "--n-font-size": Uo, "--n-border-color-horizontal": P, "--n-border-radius": I, "--n-item-height": _o };
    return b ? (p["--n-group-text-color"] = d.groupTextColorInverted, p["--n-color"] = d.colorInverted, p["--n-item-text-color"] = d.itemTextColorInverted, p["--n-item-text-color-hover"] = d.itemTextColorHoverInverted, p["--n-item-text-color-active"] = d.itemTextColorActiveInverted, p["--n-item-text-color-child-active"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHoverInverted, p["--n-item-icon-color"] = d.itemIconColorInverted, p["--n-item-icon-color-hover"] = d.itemIconColorHoverInverted, p["--n-item-icon-color-active"] = d.itemIconColorActiveInverted, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHoverInverted, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActiveInverted, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHoverInverted, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsedInverted, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontalInverted, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontalInverted, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontalInverted, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontalInverted, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontalInverted, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontalInverted, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontalInverted, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontalInverted, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontalInverted, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontalInverted, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontalInverted, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontalInverted, p["--n-arrow-color"] = d.arrowColorInverted, p["--n-arrow-color-hover"] = d.arrowColorHoverInverted, p["--n-arrow-color-active"] = d.arrowColorActiveInverted, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHoverInverted, p["--n-arrow-color-child-active"] = d.arrowColorChildActiveInverted, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHoverInverted, p["--n-item-color-hover"] = d.itemColorHoverInverted, p["--n-item-color-active"] = d.itemColorActiveInverted, p["--n-item-color-active-hover"] = d.itemColorActiveHoverInverted, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsedInverted) : (p["--n-group-text-color"] = d.groupTextColor, p["--n-color"] = d.color, p["--n-item-text-color"] = d.itemTextColor, p["--n-item-text-color-hover"] = d.itemTextColorHover, p["--n-item-text-color-active"] = d.itemTextColorActive, p["--n-item-text-color-child-active"] = d.itemTextColorChildActive, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveHover, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHover, p["--n-item-icon-color"] = d.itemIconColor, p["--n-item-icon-color-hover"] = d.itemIconColorHover, p["--n-item-icon-color-active"] = d.itemIconColorActive, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHover, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActive, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHover, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsed, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontal, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontal, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontal, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontal, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontal, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontal, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontal, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontal, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontal, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontal, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontal, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontal, p["--n-arrow-color"] = d.arrowColor, p["--n-arrow-color-hover"] = d.arrowColorHover, p["--n-arrow-color-active"] = d.arrowColorActive, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHover, p["--n-arrow-color-child-active"] = d.arrowColorChildActive, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHover, p["--n-item-color-hover"] = d.itemColorHover, p["--n-item-color-active"] = d.itemColorActive, p["--n-item-color-active-hover"] = d.itemColorActiveHover, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsed), p;
  }), H = A ? ko("menu", E(() => e.inverted ? "a" : "b"), Y, e) : void 0, X = ze(), U = Z(null), ee = Z(null);
  let _ = true;
  const Ae = () => {
    var b;
    _ ? _ = false : (b = U.value) === null || b === void 0 || b.sync({ showAllItemsBeforeCalculate: true });
  };
  function ae() {
    return document.getElementById(X);
  }
  const re = Z(-1);
  function ve(b) {
    re.value = e.options.length - b;
  }
  function Me(b) {
    b || (re.value = -1);
  }
  const He = E(() => {
    const b = re.value;
    return { children: b === -1 ? [] : e.options.slice(b) };
  }), Qe = E(() => {
    const { childrenField: b, disabledField: y, keyField: d } = e;
    return Fe([He.value], { getIgnored(I) {
      return Ge(I);
    }, getChildren(I) {
      return I[b];
    }, getDisabled(I) {
      return I[y];
    }, getKey(I) {
      var P;
      return (P = I[d]) !== null && P !== void 0 ? P : I.name;
    } });
  }), Oe = E(() => Fe([{}]).treeNodes[0]);
  function Te() {
    var b;
    if (re.value === -1) return v($e, { root: true, level: 0, key: "__ellpisisGroupPlaceholder__", internalKey: "__ellpisisGroupPlaceholder__", title: "\xB7\xB7\xB7", tmNode: Oe.value, domId: X, isEllipsisPlaceholder: true });
    const y = Qe.value.treeNodes[0], d = M.value, I = !!(!((b = y.children) === null || b === void 0) && b.some((P) => d.includes(P.key)));
    return v($e, { level: 0, root: true, key: "__ellpisisGroup__", internalKey: "__ellpisisGroup__", title: "\xB7\xB7\xB7", virtualChildActive: I, tmNode: y, domId: X, rawNodes: y.rawNode.children || [], tmNodes: y.children || [], isEllipsisPlaceholder: true });
  }
  return { mergedClsPrefix: o, controlledExpandedKeys: x, uncontrolledExpanededKeys: h, mergedExpandedKeys: w, uncontrolledValue: c, mergedValue: m, activePath: M, tmNodes: z, mergedTheme: r, mergedCollapsed: i, cssVars: A ? void 0 : Y, themeClass: H == null ? void 0 : H.themeClass, overflowRef: U, counterRef: ee, updateCounter: () => {
  }, onResize: Ae, onUpdateOverflow: Me, onUpdateCount: ve, renderCounter: Te, getCounter: ae, onRender: H == null ? void 0 : H.onRender, showOption: J, deriveResponsiveState: Ae };
}, render() {
  const { mergedClsPrefix: e, mode: o, themeClass: A, onRender: r } = this;
  r == null ? void 0 : r();
  const t = () => this.tmNodes.map((n) => Ao(n, this.$props)), l = o === "horizontal" && this.responsive, s = () => v("div", tA(this.$attrs, { role: o === "horizontal" ? "menubar" : "menu", class: [`${e}-menu`, A, `${e}-menu--${o}`, l && `${e}-menu--responsive`, this.mergedCollapsed && `${e}-menu--collapsed`], style: this.cssVars }), l ? v(rt, { ref: "overflowRef", onUpdateOverflow: this.onUpdateOverflow, getCounter: this.getCounter, onUpdateCount: this.onUpdateCount, updateCounter: this.updateCounter, style: { width: "100%", display: "flex", overflow: "hidden" } }, { default: t, counter: this.renderCounter }) : t());
  return l ? v(et, { onResize: this.onResize }, { default: s }) : s();
} }), hl = { name: "QrCode", common: u, self: (e) => ({ borderRadius: e.borderRadius }) }, pl = { name: "Skeleton", common: u, self(e) {
  const { heightSmall: o, heightMedium: A, heightLarge: r, borderRadius: t } = e;
  return { color: "rgba(255, 255, 255, 0.12)", colorEnd: "rgba(255, 255, 255, 0.18)", borderRadius: t, heightSmall: o, heightMedium: A, heightLarge: r };
} }, gl = { name: "Split", common: u }, vl = { name: "Equation", common: u, self: nt }, Cl = { name: "FloatButtonGroup", common: u, self(e) {
  const { popoverColor: o, dividerColor: A, borderRadius: r } = e;
  return { color: o, buttonBorderColor: A, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
} }, fl = { name: "dark", common: u, Alert: Pt, Anchor: Rt, AutoComplete: Ht, Avatar: Mo, AvatarGroup: Qt, BackTop: Ot, Badge: Tt, Breadcrumb: Ft, Button: G, ButtonGroup: Sn, Calendar: Lt, Card: Ho, Carousel: Vt, Cascader: jt, Checkbox: ge, Code: Qo, Collapse: Nt, CollapseTransition: Wt, ColorPicker: Zt, DataTable: Gt, DatePicker: Yt, Descriptions: Kt, Dialog: No, Divider: vn, Drawer: Cn, Dropdown: Ue, DynamicInput: fn, DynamicTags: bn, Element: xn, Empty: me, Ellipsis: Lo, Equation: vl, Flex: In, Form: Bn, GradientText: yn, Heatmap: el, Icon: $t, IconWrapper: ol, Image: Al, Input: $, InputNumber: kn, InputOtp: En, LegacyTransfer: rl, Layout: wn, List: zn, LoadingBar: rn, Log: Pn, Menu: Mn, Mention: Rn, Message: tn, Modal: Jt, Notification: gn, PageHeader: Hn, Pagination: Fo, Popconfirm: Qn, Popover: he, Popselect: Oo, Progress: Go, QrCode: hl, Radio: Vo, Rate: On, Result: Tn, Row: Dn, Scrollbar: V, Select: To, Skeleton: pl, Slider: Fn, Space: Zo, Spin: Ln, Statistic: Vn, Steps: jn, Switch: Nn, Table: Wn, Tabs: Zn, Tag: Ro, Thing: Gn, TimePicker: jo, Timeline: $n, Tooltip: Re, Transfer: Yn, Tree: $o, TreeSelect: Kn, Typography: Jn, Upload: Xn, Watermark: qn, Split: gl, FloatButton: Un, FloatButtonGroup: Cl, Marquee: tl }, bl = nA("titleBar", () => {
  const e = lt();
  return { text: E(() => {
    var _a;
    return e.currentSketchId && ((_a = e.sketches.find((r) => r.id === e.currentSketchId)) == null ? void 0 : _a.meta.name) || null;
  }) };
}), xl = { key: 0, class: "title-bar" }, Il = Q({ __name: "TitleBar", setup(e) {
  const o = bl(), A = E(() => o.text || "");
  return (r, t) => A.value ? (ne(), fe("div", xl, [O(L(at), null, { default: K(() => [O(L(it), { depth: 3 }, { default: K(() => [aA(iA(A.value), 1)]), _: 1 })]), _: 1 })])) : lA("", true);
} }), mo = fo(Il, [["__scopeId", "data-v-36e35087"]]), Sl = { key: 0, class: "nav-bar" }, Bl = { class: "software-info-menu" }, yl = { style: { width: "100%" } }, kl = { style: { "max-width": "8em" } }, El = { key: 1, class: "nav-bar" }, wl = { style: { "max-width": "50vw" } }, Dl = { class: "main-layout" }, zl = Q({ __name: "AppLayout", setup(e) {
  sA((x) => ({ d7aa5346: f.value ? "column" : "row" }));
  const o = st(), A = Do(), r = new zo(), { t, locale: i } = bt();
  function l(x) {
    return () => v(ao, null, { default: () => v(x) });
  }
  function s(x) {
    return x === "system" ? io() : x || io();
  }
  A.settings.interfaceLanguage = A.settings.interfaceLanguage ?? "system", i.value = s(A.settings.interfaceLanguage), cA(() => A.settings.interfaceLanguage, (x) => {
    x && (i.value = s(x));
  });
  const n = [{ label: () => v(Se, { to: "/tracker" }, { default: () => t("router.tracker") }), key: "tracker", icon: l(ht) }, { label: () => v(Se, { to: "/sketch-centre" }, { default: () => t("router.sketchCentre") }), key: "sketch-centre", icon: l(pt) }], c = [{ label: () => v(Se, { to: "/settings" }, { default: () => t("router.settings") }), key: "settings", icon: l(gt) }, { label: () => v(Se, { to: "/about" }, { default: () => t("router.about") }), key: "about", icon: l(vt) }], a = E(() => o.path.slice(1)), { width: m, height: h } = ct(), f = E(() => m.value > h.value);
  return (x, w) => (ne(), fe("div", { class: vo(["app-layout", f.value ? "app-layout-horizontal" : "app-layout-vertical"]) }, [f.value ? (ne(), fe("div", Sl, [O(L(Le), { options: n, "default-value": "tracker", value: a.value, mode: f.value ? "vertical" : "horizontal" }, null, 8, ["value", "mode"]), le("div", Bl, [le("div", yl, [O(L(Le), { options: c, mode: f.value ? "vertical" : "horizontal", value: a.value }, null, 8, ["mode", "value"])]), le("div", kl, [O(mo)])])])) : (ne(), fe("div", El, [O(L(ut), { trigger: L(r).isMobile ? "click" : "hover", style: { padding: "2px 0", transform: "translateX(2px)" }, placement: "bottom-start" }, { trigger: K(() => [O(L(dt), { style: { width: "48px" } }, { icon: K(() => [O(L(ao), null, { default: K(() => [O(L(It))]), _: 1 })]), _: 1 })]), default: K(() => [O(L(Le), { options: n.concat(c), "default-value": "tracker", value: a.value, "dropdown-placement": "top-start", mode: "vertical" }, null, 8, ["options", "value"])]), _: 1 }, 8, ["trigger"]), le("div", wl, [O(mo)])])), le("div", Dl, [O(L(mt), null, { default: K(({ Component: z }) => [O(dA, { name: "slide-fade", mode: "out-in" }, { default: K(() => [(ne(), We(uA, null, [(ne(), We(mA(z), { key: a.value }))], 1024))]), _: 2 }, 1024)]), _: 1 })])], 2));
} }), Pl = fo(zl, [["__scopeId", "data-v-f537cb26"]]);
var Ve, ho;
function Rl() {
  return ho || (ho = 1, Ve = { webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK", mp4: "data:video/mp4;base64,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" }), Ve;
}
var je, po;
function Ml() {
  if (po) return je;
  po = 1;
  const { webm: e, mp4: o } = Rl(), A = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, r = () => "wakeLock" in navigator;
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
    _addSourceToVideo(l, s, n) {
      var c = document.createElement("source");
      c.src = n, c.type = `video/${s}`, l.appendChild(c);
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
      }, 15e3), this.enabled = true, Promise.resolve()) : this.noSleepVideo.play().then((s) => (this.enabled = true, s)).catch((s) => {
        throw this.enabled = false, s;
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
var Hl = Ml();
const Ql = hA(Hl), Vl = Q({ __name: "App", setup(e) {
  const o = Do(), A = window.GeolocationManager, r = kt(), t = E(() => o.settings.theme === "system" ? r.value : o.settings.theme), i = E(() => t.value === "dark" ? fl : Ct), l = { common: { fontFamily: 'Barlow, "Maple Mono", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: '"Maple Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' } };
  return F("applicationDarkThemeEnabled", t), F("platformInfo", new zo()), F("settings", o), F("noSleep", new Ql()), F("geolocation", A), Co(() => o.init()), (s, n) => (ne(), We(L(ft), { theme: i.value, abstract: true, "inline-theme-disabled": true, "theme-overrides": l }, { default: K(() => [O(L(An), null, { default: K(() => [O(L(pn), null, { default: K(() => [O(L(un), { placement: "bottom-right" }, { default: K(() => [O(Pl), O(L(_n))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["theme"]));
} });
export {
  Vl as default
};
