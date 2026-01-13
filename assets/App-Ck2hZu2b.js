import { d as Q, c as fe, o as ne, a as le, r as ro, b as Z, e as po, f as eA, h as v, n as go, F as De, p as F, g as Ye, i as oe, j as E, k as vo, T as oA, w as Ne, l as AA, t as to, m as rA, q as tA, s as nA, u as O, v as L, x as K, y as lA, z as aA, _ as Co, A as iA, B as sA, C as cA, D as We, K as dA, E as uA, G as mA } from "./index-CSMujPUQ.js";
import { h as hA, c as pA, s as T, r as fo, a as be, b as gA, d as vA, e as CA, f as fA, g as bA, i as C, j as xA, k as IA, l as SA, m as BA, n as kA, o as yA, p as EA, q as wA, t as DA, u as zA, v as PA, w as RA, x as MA, y as HA, z as QA, A as OA, B as TA, C as FA, D as LA, E as VA, F as jA, G as NA, H as WA, I as ZA, J as GA, K as $A, L as YA, M as KA, N as JA, O as XA, P as qA, Q as UA, R as pe, S as _A, T as ye, U as bo, V as er, W as or, X as Ke, Y as xo, Z as Io, _ as Ar, $ as ze, a0 as rr, a1 as tr, a2 as nr, a3 as D, a4 as y, a5 as So, a6 as I, a7 as R, a8 as lr, a9 as ar, aa as de, ab as ir, ac as Je, ad as Bo, ae as sr, af as Pe, ag as te, ah as ko, ai as cr, aj as yo, ak as dr, al as ur, am as mr, an as hr, ao as pr, ap as Eo, aq as gr, ar as vr, as as Cr, at as fr, au as br, av as xr, aw as Ir, ax as Sr, ay as Br, az as kr, aA as yr, aB as Er, aC as wr, aD as Dr, aE as zr, aF as Pr, aG as Rr, aH as Mr, aI as Hr, aJ as Qr, aK as Or, aL as Tr, aM as Fr, aN as Lr, aO as Vr, aP as jr, aQ as Nr, aR as Wr, aS as Zr, aT as Gr, aU as $r, aV as no, aW as Yr, aX as Kr, aY as Jr, aZ as Xr, a_ as Ce, a$ as qr, b0 as Ze, b1 as Xe, b2 as Ur, b3 as _r, b4 as et, b5 as Fe, b6 as lo, b7 as ot, b8 as At, b9 as rt, ba as ie, bb as tt, bc as nt, bd as lt, be as at, bf as it, bg as wo, bh as Do, bi as st, bj as ct, bk as ao, bl as dt, bm as ut, bn as mt, bo as Se, bp as ht, bq as pt, br as gt, bs as vt, bt as Ct } from "./sketch-store-BlfIdRPj.js";
import { u as ft } from "./vue-i18n-mSDb8VBS.js";
const bt = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, xt = Q({ name: "Menu", render: function(o, A) {
  return ne(), fe("svg", bt, A[0] || (A[0] = [le("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [le("path", { d: "M4 8h16" }), le("path", { d: "M4 16h16" })], -1)]));
} });
let Be = 0;
const It = typeof window < "u" && window.matchMedia !== void 0, ue = Z(null);
let q, ce;
function Ee(e) {
  e.matches && (ue.value = "dark");
}
function we(e) {
  e.matches && (ue.value = "light");
}
function St() {
  q = window.matchMedia("(prefers-color-scheme: dark)"), ce = window.matchMedia("(prefers-color-scheme: light)"), q.matches ? ue.value = "dark" : ce.matches ? ue.value = "light" : ue.value = null, q.addEventListener ? (q.addEventListener("change", Ee), ce.addEventListener("change", we)) : q.addListener && (q.addListener(Ee), ce.addListener(we));
}
function Bt() {
  "removeEventListener" in q ? (q.removeEventListener("change", Ee), ce.removeEventListener("change", we)) : "removeListener" in q && (q.removeListener(Ee), ce.removeListener(we)), q = void 0, ce = void 0;
}
let io = true;
function kt() {
  return It ? (Be === 0 && St(), io && (io = hA()) && (po(() => {
    Be += 1;
  }), eA(() => {
    Be -= 1, Be === 0 && Bt();
  })), ro(ue)) : ro(ue);
}
const yt = Q({ name: "ChevronDownFilled", render() {
  return v("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, v("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" }));
} }), g = { neutralBase: "#000", neutralInvertBase: "#fff", neutralTextBase: "#fff", neutralPopover: "rgb(72, 72, 78)", neutralCard: "rgb(24, 24, 28)", neutralModal: "rgb(44, 44, 50)", neutralBody: "rgb(16, 16, 20)", alpha1: "0.9", alpha2: "0.82", alpha3: "0.52", alpha4: "0.38", alpha5: "0.28", alphaClose: "0.52", alphaDisabled: "0.38", alphaDisabledInput: "0.06", alphaPending: "0.09", alphaTablePending: "0.06", alphaTableStriped: "0.05", alphaPressed: "0.05", alphaAvatar: "0.18", alphaRail: "0.2", alphaProgressRail: "0.12", alphaBorder: "0.24", alphaDivider: "0.09", alphaInput: "0.1", alphaAction: "0.06", alphaTab: "0.04", alphaScrollbar: "0.2", alphaScrollbarHover: "0.3", alphaCode: "0.12", alphaTag: "0.2", primaryHover: "#7fe7c4", primaryDefault: "#63e2b7", primaryActive: "#5acea7", primarySuppl: "rgb(42, 148, 125)", infoHover: "#8acbec", infoDefault: "#70c0e8", infoActive: "#66afd3", infoSuppl: "rgb(56, 137, 197)", errorHover: "#e98b8b", errorDefault: "#e88080", errorActive: "#e57272", errorSuppl: "rgb(208, 58, 82)", warningHover: "#f5d599", warningDefault: "#f2c97d", warningActive: "#e6c260", warningSuppl: "rgb(240, 138, 0)", successHover: "#7fe7c4", successDefault: "#63e2b7", successActive: "#5acea7", successSuppl: "rgb(42, 148, 125)" }, Et = fo(g.neutralBase), zo = fo(g.neutralInvertBase), wt = `rgba(${zo.slice(0, 3).join(", ")}, `;
function S(e) {
  return `${wt + String(e)})`;
}
function Dt(e) {
  const o = Array.from(zo);
  return o[3] = Number(e), be(Et, o);
}
const u = Object.assign(Object.assign({ name: "common" }, pA), { baseColor: g.neutralBase, primaryColor: g.primaryDefault, primaryColorHover: g.primaryHover, primaryColorPressed: g.primaryActive, primaryColorSuppl: g.primarySuppl, infoColor: g.infoDefault, infoColorHover: g.infoHover, infoColorPressed: g.infoActive, infoColorSuppl: g.infoSuppl, successColor: g.successDefault, successColorHover: g.successHover, successColorPressed: g.successActive, successColorSuppl: g.successSuppl, warningColor: g.warningDefault, warningColorHover: g.warningHover, warningColorPressed: g.warningActive, warningColorSuppl: g.warningSuppl, errorColor: g.errorDefault, errorColorHover: g.errorHover, errorColorPressed: g.errorActive, errorColorSuppl: g.errorSuppl, textColorBase: g.neutralTextBase, textColor1: S(g.alpha1), textColor2: S(g.alpha2), textColor3: S(g.alpha3), textColorDisabled: S(g.alpha4), placeholderColor: S(g.alpha4), placeholderColorDisabled: S(g.alpha5), iconColor: S(g.alpha4), iconColorDisabled: S(g.alpha5), iconColorHover: S(Number(g.alpha4) * 1.25), iconColorPressed: S(Number(g.alpha4) * 0.8), opacity1: g.alpha1, opacity2: g.alpha2, opacity3: g.alpha3, opacity4: g.alpha4, opacity5: g.alpha5, dividerColor: S(g.alphaDivider), borderColor: S(g.alphaBorder), closeIconColorHover: S(Number(g.alphaClose)), closeIconColor: S(Number(g.alphaClose)), closeIconColorPressed: S(Number(g.alphaClose)), closeColorHover: "rgba(255, 255, 255, .12)", closeColorPressed: "rgba(255, 255, 255, .08)", clearColor: S(g.alpha4), clearColorHover: T(S(g.alpha4), { alpha: 1.25 }), clearColorPressed: T(S(g.alpha4), { alpha: 0.8 }), scrollbarColor: S(g.alphaScrollbar), scrollbarColorHover: S(g.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: S(g.alphaProgressRail), railColor: S(g.alphaRail), popoverColor: g.neutralPopover, tableColor: g.neutralCard, cardColor: g.neutralCard, modalColor: g.neutralModal, bodyColor: g.neutralBody, tagColor: Dt(g.alphaTag), avatarColor: S(g.alphaAvatar), invertedColor: g.neutralBase, inputColor: S(g.alphaInput), codeColor: S(g.alphaCode), tabColor: S(g.alphaTab), actionColor: S(g.alphaAction), tableHeaderColor: S(g.alphaAction), hoverColor: S(g.alphaPending), tableColorHover: S(g.alphaTablePending), tableColorStriped: S(g.alphaTableStriped), pressedColor: S(g.alphaPressed), opacityDisabled: g.alphaDisabled, inputColorDisabled: S(g.alphaDisabledInput), buttonColor2: "rgba(255, 255, 255, .08)", buttonColor2Hover: "rgba(255, 255, 255, .12)", buttonColor2Pressed: "rgba(255, 255, 255, .08)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), V = { name: "Scrollbar", common: u, self: gA }, me = { name: "Empty", common: u, self: vA }, xe = { name: "InternalSelectMenu", common: u, peers: { Scrollbar: V, Empty: me }, self: CA }, he = { name: "Popover", common: u, peers: { Scrollbar: V }, self: fA }, Po = { name: "Tag", common: u, self(e) {
  const { textColor2: o, primaryColorHover: A, primaryColorPressed: r, primaryColor: t, infoColor: i, successColor: l, warningColor: c, errorColor: n, baseColor: s, borderColor: a, tagColor: h, opacityDisabled: m, closeIconColor: f, closeIconColorHover: w, closeIconColorPressed: B, closeColorHover: z, closeColorPressed: M, borderRadiusSmall: N, fontSizeMini: j, fontSizeTiny: W, fontSizeSmall: J, fontSizeMedium: Y, heightMini: H, heightTiny: X, heightSmall: U, heightMedium: ee, buttonColor2Hover: _, buttonColor2Pressed: Ae, fontWeightStrong: ae } = e;
  return Object.assign(Object.assign({}, bA), { closeBorderRadius: N, heightTiny: H, heightSmall: X, heightMedium: U, heightLarge: ee, borderRadius: N, opacityDisabled: m, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, fontWeightStrong: ae, textColorCheckable: o, textColorHoverCheckable: o, textColorPressedCheckable: o, textColorChecked: s, colorCheckable: "#0000", colorHoverCheckable: _, colorPressedCheckable: Ae, colorChecked: t, colorCheckedHover: A, colorCheckedPressed: r, border: `1px solid ${a}`, textColor: o, color: h, colorBordered: "#0000", closeIconColor: f, closeIconColorHover: w, closeIconColorPressed: B, closeColorHover: z, closeColorPressed: M, borderPrimary: `1px solid ${C(t, { alpha: 0.3 })}`, textColorPrimary: t, colorPrimary: C(t, { alpha: 0.16 }), colorBorderedPrimary: "#0000", closeIconColorPrimary: T(t, { lightness: 0.7 }), closeIconColorHoverPrimary: T(t, { lightness: 0.7 }), closeIconColorPressedPrimary: T(t, { lightness: 0.7 }), closeColorHoverPrimary: C(t, { alpha: 0.16 }), closeColorPressedPrimary: C(t, { alpha: 0.12 }), borderInfo: `1px solid ${C(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: C(i, { alpha: 0.16 }), colorBorderedInfo: "#0000", closeIconColorInfo: T(i, { alpha: 0.7 }), closeIconColorHoverInfo: T(i, { alpha: 0.7 }), closeIconColorPressedInfo: T(i, { alpha: 0.7 }), closeColorHoverInfo: C(i, { alpha: 0.16 }), closeColorPressedInfo: C(i, { alpha: 0.12 }), borderSuccess: `1px solid ${C(l, { alpha: 0.3 })}`, textColorSuccess: l, colorSuccess: C(l, { alpha: 0.16 }), colorBorderedSuccess: "#0000", closeIconColorSuccess: T(l, { alpha: 0.7 }), closeIconColorHoverSuccess: T(l, { alpha: 0.7 }), closeIconColorPressedSuccess: T(l, { alpha: 0.7 }), closeColorHoverSuccess: C(l, { alpha: 0.16 }), closeColorPressedSuccess: C(l, { alpha: 0.12 }), borderWarning: `1px solid ${C(c, { alpha: 0.3 })}`, textColorWarning: c, colorWarning: C(c, { alpha: 0.16 }), colorBorderedWarning: "#0000", closeIconColorWarning: T(c, { alpha: 0.7 }), closeIconColorHoverWarning: T(c, { alpha: 0.7 }), closeIconColorPressedWarning: T(c, { alpha: 0.7 }), closeColorHoverWarning: C(c, { alpha: 0.16 }), closeColorPressedWarning: C(c, { alpha: 0.11 }), borderError: `1px solid ${C(n, { alpha: 0.3 })}`, textColorError: n, colorError: C(n, { alpha: 0.16 }), colorBorderedError: "#0000", closeIconColorError: T(n, { alpha: 0.7 }), closeIconColorHoverError: T(n, { alpha: 0.7 }), closeIconColorPressedError: T(n, { alpha: 0.7 }), closeColorHoverError: C(n, { alpha: 0.16 }), closeColorPressedError: C(n, { alpha: 0.12 }) });
} }, qe = { name: "InternalSelection", common: u, peers: { Popover: he }, self(e) {
  const { borderRadius: o, textColor2: A, textColorDisabled: r, inputColor: t, inputColorDisabled: i, primaryColor: l, primaryColorHover: c, warningColor: n, warningColorHover: s, errorColor: a, errorColorHover: h, iconColor: m, iconColorDisabled: f, clearColor: w, clearColorHover: B, clearColorPressed: z, placeholderColor: M, placeholderColorDisabled: N, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: H, heightSmall: X, heightMedium: U, heightLarge: ee, fontWeight: _ } = e;
  return Object.assign(Object.assign({}, xA), { fontWeight: _, fontSizeTiny: j, fontSizeSmall: W, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: H, heightSmall: X, heightMedium: U, heightLarge: ee, borderRadius: o, textColor: A, textColorDisabled: r, placeholderColor: M, placeholderColorDisabled: N, color: t, colorDisabled: i, colorActive: C(l, { alpha: 0.1 }), border: "1px solid #0000", borderHover: `1px solid ${c}`, borderActive: `1px solid ${l}`, borderFocus: `1px solid ${c}`, boxShadowHover: "none", boxShadowActive: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, boxShadowFocus: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, caretColor: l, arrowColor: m, arrowColorDisabled: f, loadingColor: l, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${s}`, borderActiveWarning: `1px solid ${n}`, borderFocusWarning: `1px solid ${s}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, colorActiveWarning: C(n, { alpha: 0.1 }), caretColorWarning: n, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${h}`, borderActiveError: `1px solid ${a}`, borderFocusError: `1px solid ${h}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, colorActiveError: C(a, { alpha: 0.1 }), caretColorError: a, clearColor: w, clearColorHover: B, clearColorPressed: z });
} }, zt = { name: "Alert", common: u, self(e) {
  const { lineHeight: o, borderRadius: A, fontWeightStrong: r, dividerColor: t, inputColor: i, textColor1: l, textColor2: c, closeColorHover: n, closeColorPressed: s, closeIconColor: a, closeIconColorHover: h, closeIconColorPressed: m, infoColorSuppl: f, successColorSuppl: w, warningColorSuppl: B, errorColorSuppl: z, fontSize: M } = e;
  return Object.assign(Object.assign({}, IA), { fontSize: M, lineHeight: o, titleFontWeight: r, borderRadius: A, border: `1px solid ${t}`, color: i, titleTextColor: l, iconColor: c, contentTextColor: c, closeBorderRadius: A, closeColorHover: n, closeColorPressed: s, closeIconColor: a, closeIconColorHover: h, closeIconColorPressed: m, borderInfo: `1px solid ${C(f, { alpha: 0.35 })}`, colorInfo: C(f, { alpha: 0.25 }), titleTextColorInfo: l, iconColorInfo: f, contentTextColorInfo: c, closeColorHoverInfo: n, closeColorPressedInfo: s, closeIconColorInfo: a, closeIconColorHoverInfo: h, closeIconColorPressedInfo: m, borderSuccess: `1px solid ${C(w, { alpha: 0.35 })}`, colorSuccess: C(w, { alpha: 0.25 }), titleTextColorSuccess: l, iconColorSuccess: w, contentTextColorSuccess: c, closeColorHoverSuccess: n, closeColorPressedSuccess: s, closeIconColorSuccess: a, closeIconColorHoverSuccess: h, closeIconColorPressedSuccess: m, borderWarning: `1px solid ${C(B, { alpha: 0.35 })}`, colorWarning: C(B, { alpha: 0.25 }), titleTextColorWarning: l, iconColorWarning: B, contentTextColorWarning: c, closeColorHoverWarning: n, closeColorPressedWarning: s, closeIconColorWarning: a, closeIconColorHoverWarning: h, closeIconColorPressedWarning: m, borderError: `1px solid ${C(z, { alpha: 0.35 })}`, colorError: C(z, { alpha: 0.25 }), titleTextColorError: l, iconColorError: z, contentTextColorError: c, closeColorHoverError: n, closeColorPressedError: s, closeIconColorError: a, closeIconColorHoverError: h, closeIconColorPressedError: m });
} }, Pt = { name: "Anchor", common: u, self: SA };
function Rt(e) {
  const { textColor2: o, textColor3: A, textColorDisabled: r, primaryColor: t, primaryColorHover: i, inputColor: l, inputColorDisabled: c, warningColor: n, warningColorHover: s, errorColor: a, errorColorHover: h, borderRadius: m, lineHeight: f, fontSizeTiny: w, fontSizeSmall: B, fontSizeMedium: z, fontSizeLarge: M, heightTiny: N, heightSmall: j, heightMedium: W, heightLarge: J, clearColor: Y, clearColorHover: H, clearColorPressed: X, placeholderColor: U, placeholderColorDisabled: ee, iconColor: _, iconColorDisabled: Ae, iconColorHover: ae, iconColorPressed: re, fontWeight: ve } = e;
  return Object.assign(Object.assign({}, kA), { fontWeight: ve, countTextColorDisabled: r, countTextColor: A, heightTiny: N, heightSmall: j, heightMedium: W, heightLarge: J, fontSizeTiny: w, fontSizeSmall: B, fontSizeMedium: z, fontSizeLarge: M, lineHeight: f, lineHeightTextarea: f, borderRadius: m, iconSize: "16px", groupLabelColor: l, textColor: o, textColorDisabled: r, textDecorationColor: o, groupLabelTextColor: o, caretColor: t, placeholderColor: U, placeholderColorDisabled: ee, color: l, colorDisabled: c, colorFocus: C(t, { alpha: 0.1 }), groupLabelBorder: "1px solid #0000", border: "1px solid #0000", borderHover: `1px solid ${i}`, borderDisabled: "1px solid #0000", borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 8px 0 ${C(t, { alpha: 0.3 })}`, loadingColor: t, loadingColorWarning: n, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${s}`, colorFocusWarning: C(n, { alpha: 0.1 }), borderFocusWarning: `1px solid ${s}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.3 })}`, caretColorWarning: n, loadingColorError: a, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${h}`, colorFocusError: C(a, { alpha: 0.1 }), borderFocusError: `1px solid ${h}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.3 })}`, caretColorError: a, clearColor: Y, clearColorHover: H, clearColorPressed: X, iconColor: _, iconColorDisabled: Ae, iconColorHover: ae, iconColorPressed: re, suffixTextColor: o });
}
const $ = BA({ name: "Input", common: u, peers: { Scrollbar: V }, self: Rt }), Mt = { name: "AutoComplete", common: u, peers: { InternalSelectMenu: xe, Input: $ }, self: yA }, Ro = { name: "Avatar", common: u, self: EA }, Ht = { name: "AvatarGroup", common: u, peers: { Avatar: Ro }, self: wA }, Qt = { name: "BackTop", common: u, self(e) {
  const { popoverColor: o, textColor2: A, primaryColorHover: r, primaryColorPressed: t } = e;
  return Object.assign(Object.assign({}, DA), { color: o, textColor: A, iconColor: A, iconColorHover: r, iconColorPressed: t, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
} }, Ot = { name: "Badge", common: u, self(e) {
  const { errorColorSuppl: o, infoColorSuppl: A, successColorSuppl: r, warningColorSuppl: t, fontFamily: i } = e;
  return { color: o, colorInfo: A, colorSuccess: r, colorError: o, colorWarning: t, fontSize: "12px", fontFamily: i };
} }, Tt = { name: "Breadcrumb", common: u, self: zA }, G = { name: "Button", common: u, self(e) {
  const o = PA(e);
  return o.waveOpacity = "0.8", o.colorOpacitySecondary = "0.16", o.colorOpacitySecondaryHover = "0.2", o.colorOpacitySecondaryPressed = "0.12", o;
} }, Ft = { name: "Calendar", common: u, peers: { Button: G }, self: RA }, Mo = { name: "Card", common: u, self(e) {
  const o = MA(e), { cardColor: A, modalColor: r, popoverColor: t } = e;
  return o.colorEmbedded = A, o.colorEmbeddedModal = r, o.colorEmbeddedPopover = t, o;
} }, Lt = { name: "Carousel", common: u, self: HA }, ge = { name: "Checkbox", common: u, self(e) {
  const { cardColor: o } = e, A = QA(e);
  return A.color = "#0000", A.checkMarkColor = o, A;
} }, Vt = { name: "Cascader", common: u, peers: { InternalSelectMenu: xe, InternalSelection: qe, Scrollbar: V, Checkbox: ge, Empty: TA }, self: OA }, Ho = { name: "Code", common: u, self(e) {
  const { textColor2: o, fontSize: A, fontWeightStrong: r, textColor3: t } = e;
  return { textColor: o, fontSize: A, fontWeightStrong: r, "mono-3": "#5c6370", "hue-1": "#56b6c2", "hue-2": "#61aeee", "hue-3": "#c678dd", "hue-4": "#98c379", "hue-5": "#e06c75", "hue-5-2": "#be5046", "hue-6": "#d19a66", "hue-6-2": "#e6c07b", lineNumberTextColor: t };
} }, jt = { name: "Collapse", common: u, self: FA }, Nt = { name: "CollapseTransition", common: u, self: LA }, Wt = { name: "ColorPicker", common: u, peers: { Input: $, Button: G }, self: VA }, Qo = { name: "Popselect", common: u, peers: { Popover: he, InternalSelectMenu: xe } }, Oo = { name: "Select", common: u, peers: { InternalSelection: qe, InternalSelectMenu: xe }, self: jA }, To = { name: "Pagination", common: u, peers: { Select: Oo, Input: $, Popselect: Qo }, self(e) {
  const { primaryColor: o, opacity3: A } = e, r = C(o, { alpha: Number(A) }), t = NA(e);
  return t.itemBorderActive = `1px solid ${r}`, t.itemBorderDisabled = "1px solid #0000", t;
} }, Ue = { name: "Dropdown", common: u, peers: { Popover: he }, self(e) {
  const { primaryColorSuppl: o, primaryColor: A, popoverColor: r } = e, t = WA(e);
  return t.colorInverted = r, t.optionColorActive = C(A, { alpha: 0.15 }), t.optionColorActiveInverted = o, t.optionColorHoverInverted = o, t;
} }, Re = { name: "Tooltip", common: u, peers: { Popover: he }, self(e) {
  const { borderRadius: o, boxShadow2: A, popoverColor: r, textColor2: t } = e;
  return Object.assign(Object.assign({}, ZA), { borderRadius: o, boxShadow: A, color: r, textColor: t });
} }, Fo = { name: "Ellipsis", common: u, peers: { Tooltip: Re } }, Lo = { name: "Radio", common: u, self(e) {
  const { borderColor: o, primaryColor: A, baseColor: r, textColorDisabled: t, inputColorDisabled: i, textColor2: l, opacityDisabled: c, borderRadius: n, fontSizeSmall: s, fontSizeMedium: a, fontSizeLarge: h, heightSmall: m, heightMedium: f, heightLarge: w, lineHeight: B } = e;
  return Object.assign(Object.assign({}, GA), { labelLineHeight: B, buttonHeightSmall: m, buttonHeightMedium: f, buttonHeightLarge: w, fontSizeSmall: s, fontSizeMedium: a, fontSizeLarge: h, boxShadow: `inset 0 0 0 1px ${o}`, boxShadowActive: `inset 0 0 0 1px ${A}`, boxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, boxShadowHover: `inset 0 0 0 1px ${A}`, boxShadowDisabled: `inset 0 0 0 1px ${o}`, color: "#0000", colorDisabled: i, colorActive: "#0000", textColor: l, textColorDisabled: t, dotColorActive: A, dotColorDisabled: o, buttonBorderColor: o, buttonBorderColorActive: A, buttonBorderColorHover: A, buttonColor: "#0000", buttonColorActive: A, buttonTextColor: l, buttonTextColorActive: r, buttonTextColorHover: A, opacityDisabled: c, buttonBoxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px ${A}`, buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: n });
} }, Zt = { name: "DataTable", common: u, peers: { Button: G, Checkbox: ge, Radio: Lo, Pagination: To, Scrollbar: V, Empty: me, Popover: he, Ellipsis: Fo, Dropdown: Ue }, self(e) {
  const o = $A(e);
  return o.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", o.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", o;
} }, Gt = { name: "Icon", common: u, self: YA }, Vo = { name: "TimePicker", common: u, peers: { Scrollbar: V, Button: G, Input: $ }, self: KA }, $t = { name: "DatePicker", common: u, peers: { Input: $, Button: G, TimePicker: Vo, Scrollbar: V }, self(e) {
  const { popoverColor: o, hoverColor: A, primaryColor: r } = e, t = JA(e);
  return t.itemColorDisabled = be(o, A), t.itemColorIncluded = C(r, { alpha: 0.15 }), t.itemColorHover = be(o, A), t;
} }, Yt = { name: "Descriptions", common: u, self: XA }, jo = { name: "Dialog", common: u, peers: { Button: G }, self: qA }, Kt = { name: "Modal", common: u, peers: { Scrollbar: V, Dialog: jo, Card: Mo }, self: UA }, Jt = pe("n-modal-provider"), Xt = pe("n-modal-api"), qt = pe("n-modal-reactive-list"), Ut = Object.assign(Object.assign({}, er), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, internalStyle: [String, Object], maskClosable: { type: Boolean, default: true }, zIndex: Number, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function, draggable: [Boolean, Object] }), _t = Q({ name: "DialogEnvironment", props: Object.assign(Object.assign({}, Ut), { internalKey: { type: String, required: true }, to: [String, Object], onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = Z(true);
  function A() {
    const { onInternalAfterLeave: a, internalKey: h, onAfterLeave: m } = e;
    a && a(h), m && m();
  }
  function r(a) {
    const { onPositiveClick: h } = e;
    h ? Promise.resolve(h(a)).then((m) => {
      m !== false && n();
    }) : n();
  }
  function t(a) {
    const { onNegativeClick: h } = e;
    h ? Promise.resolve(h(a)).then((m) => {
      m !== false && n();
    }) : n();
  }
  function i() {
    const { onClose: a } = e;
    a ? Promise.resolve(a()).then((h) => {
      h !== false && n();
    }) : n();
  }
  function l(a) {
    const { onMaskClick: h, maskClosable: m } = e;
    h && (h(a), m && n());
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
  return { show: o, hide: n, handleUpdateShow: s, handleAfterLeave: A, handleCloseClick: i, handleNegativeClick: t, handlePositiveClick: r, handleMaskClick: l, handleEsc: c };
}, render() {
  const { handlePositiveClick: e, handleUpdateShow: o, handleNegativeClick: A, handleCloseClick: r, handleAfterLeave: t, handleMaskClick: i, handleEsc: l, to: c, zIndex: n, maskClosable: s, show: a } = this;
  return v(bo, { show: a, onUpdateShow: o, onMaskClick: i, onEsc: l, to: c, zIndex: n, maskClosable: s, onAfterEnter: this.onAfterEnter, onAfterLeave: t, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, draggable: this.draggable, internalAppear: true, internalDialog: true }, { default: ({ draggableClass: h }) => v(_A, Object.assign({}, ye(this.$props, or), { titleClass: go([this.titleClass, h]), style: this.internalStyle, onClose: r, onNegativeClick: A, onPositiveClick: e })) });
} }), en = { injectionKey: String, to: [String, Object] }, on = Q({ name: "DialogProvider", props: en, setup() {
  const e = Z([]), o = {};
  function A(c = {}) {
    const n = ze(), s = Ye(Object.assign(Object.assign({}, c), { key: n, destroy: () => {
      var a;
      (a = o[`n-dialog-${n}`]) === null || a === void 0 || a.hide();
    } }));
    return e.value.push(s), s;
  }
  const r = ["info", "success", "warning", "error"].map((c) => (n) => A(Object.assign(Object.assign({}, n), { type: c })));
  function t(c) {
    const { value: n } = e;
    n.splice(n.findIndex((s) => s.key === c), 1);
  }
  function i() {
    Object.values(o).forEach((c) => {
      c == null ? void 0 : c.hide();
    });
  }
  const l = { create: A, destroyAll: i, info: r[0], success: r[1], warning: r[2], error: r[3] };
  return F(rr, l), F(Ar, { clickedRef: Io(64), clickedPositionRef: xo() }), F(tr, e), Object.assign(Object.assign({}, l), { dialogList: e, dialogInstRefs: o, handleAfterLeave: t });
}, render() {
  var e, o;
  return v(De, null, [this.dialogList.map((A) => v(_t, Ke(A, ["destroy", "style"], { internalStyle: A.style, to: this.to, ref: (r) => {
    r === null ? delete this.dialogInstRefs[`n-dialog-${A.key}`] : this.dialogInstRefs[`n-dialog-${A.key}`] = r;
  }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }))), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), An = { name: "LoadingBar", common: u, self(e) {
  const { primaryColor: o } = e;
  return { colorError: "red", colorLoading: o, height: "2px" };
} }, rn = { name: "Message", common: u, self: nr }, No = { icon: Function, type: { type: String, default: "info" }, content: [String, Number, Function], showIcon: { type: Boolean, default: true }, closable: Boolean, keepAliveOnHover: Boolean, onClose: Function, onMouseenter: Function, onMouseleave: Function }, tn = D([y("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [So({ overflow: "visible", originalTransition: "transform .3s var(--n-bezier)", enterToProps: { transform: "scale(1)" }, leaveToProps: { transform: "scale(0.85)" } })]), y("message", `
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
 `, [I("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), I("icon", `
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
 `, [lr()])]), I("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [D("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), D("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), y("message-container", `
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
 `)])]), nn = { info: () => v(pr, null), success: () => v(hr, null), warning: () => v(mr, null), error: () => v(ur, null), default: () => null }, ln = Q({ name: "Message", props: Object.assign(Object.assign({}, No), { render: Function }), setup(e) {
  const { inlineThemeDisabled: o, mergedRtlRef: A } = Je(e), { props: r, mergedClsPrefixRef: t } = oe(Bo), i = sr("Message", A, t), l = Pe("Message", "-message", tn, dr, r, t), c = E(() => {
    const { type: s } = e, { common: { cubicBezierEaseInOut: a }, self: { padding: h, margin: m, maxWidth: f, iconMargin: w, closeMargin: B, closeSize: z, iconSize: M, fontSize: N, lineHeight: j, borderRadius: W, border: J, iconColorInfo: Y, iconColorSuccess: H, iconColorWarning: X, iconColorError: U, iconColorLoading: ee, closeIconSize: _, closeBorderRadius: Ae, [te("textColor", s)]: ae, [te("boxShadow", s)]: re, [te("color", s)]: ve, [te("closeColorHover", s)]: Me, [te("closeColorPressed", s)]: He, [te("closeIconColor", s)]: Qe, [te("closeIconColorPressed", s)]: Oe, [te("closeIconColorHover", s)]: Te } } = l.value;
    return { "--n-bezier": a, "--n-margin": m, "--n-padding": h, "--n-max-width": f, "--n-font-size": N, "--n-icon-margin": w, "--n-icon-size": M, "--n-close-icon-size": _, "--n-close-border-radius": Ae, "--n-close-size": z, "--n-close-margin": B, "--n-text-color": ae, "--n-color": ve, "--n-box-shadow": re, "--n-icon-color-info": Y, "--n-icon-color-success": H, "--n-icon-color-warning": X, "--n-icon-color-error": U, "--n-icon-color-loading": ee, "--n-close-color-hover": Me, "--n-close-color-pressed": He, "--n-close-icon-color": Qe, "--n-close-icon-color-pressed": Oe, "--n-close-icon-color-hover": Te, "--n-line-height": j, "--n-border-radius": W, "--n-border": J };
  }), n = o ? ko("message", E(() => e.type[0]), c, {}) : void 0;
  return { mergedClsPrefix: t, rtlEnabled: i, messageProviderProps: r, handleClose() {
    var s;
    (s = e.onClose) === null || s === void 0 || s.call(e);
  }, cssVars: o ? void 0 : c, themeClass: n == null ? void 0 : n.themeClass, onRender: n == null ? void 0 : n.onRender, placement: r.placement };
}, render() {
  const { render: e, type: o, closable: A, content: r, mergedClsPrefix: t, cssVars: i, themeClass: l, onRender: c, icon: n, handleClose: s, showIcon: a } = this;
  c == null ? void 0 : c();
  let h;
  return v("div", { class: [`${t}-message-wrapper`, l], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [{ alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end" }, i] }, e ? e(this.$props) : v("div", { class: [`${t}-message ${t}-message--${o}-type`, this.rtlEnabled && `${t}-message--rtl`] }, (h = an(n, o, t)) && a ? v("div", { class: `${t}-message__icon ${t}-message__icon--${o}-type` }, v(ar, null, { default: () => h })) : null, v("div", { class: `${t}-message__content` }, de(r)), A ? v(ir, { clsPrefix: t, class: `${t}-message__close`, onClick: s, absolute: true }) : null));
} });
function an(e, o, A) {
  if (typeof e == "function") return e();
  {
    const r = o === "loading" ? v(cr, { clsPrefix: A, strokeWidth: 24, scale: 0.85 }) : nn[o]();
    return r ? v(yo, { clsPrefix: A, key: o }, { default: () => r }) : null;
  }
}
const sn = Q({ name: "MessageEnvironment", props: Object.assign(Object.assign({}, No), { duration: { type: Number, default: 3e3 }, onAfterLeave: Function, onLeave: Function, internalKey: { type: String, required: true }, onInternalAfterLeave: Function, onHide: Function, onAfterHide: Function }), setup(e) {
  let o = null;
  const A = Z(true);
  vo(() => {
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
  function c() {
    const { onClose: a } = e;
    a && a(), l();
  }
  function n() {
    const { onAfterLeave: a, onInternalAfterLeave: h, onAfterHide: m, internalKey: f } = e;
    a && a(), h && h(f), m && m();
  }
  function s() {
    l();
  }
  return { show: A, hide: l, handleClose: c, handleAfterLeave: n, handleMouseleave: i, handleMouseenter: t, deactivate: s };
}, render() {
  return v(Eo, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, { default: () => [this.show ? v(ln, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null] });
} }), cn = Object.assign(Object.assign({}, Pe.props), { to: [String, Object], duration: { type: Number, default: 3e3 }, keepAliveOnHover: Boolean, max: Number, placement: { type: String, default: "top" }, closable: Boolean, containerClass: String, containerStyle: [String, Object] }), dn = Q({ name: "MessageProvider", props: cn, setup(e) {
  const { mergedClsPrefixRef: o } = Je(e), A = Z([]), r = Z({}), t = { create(n, s) {
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
  F(Bo, { props: e, mergedClsPrefixRef: o }), F(gr, t);
  function i(n, s) {
    const a = ze(), h = Ye(Object.assign(Object.assign({}, s), { content: n, key: a, destroy: () => {
      var f;
      (f = r.value[a]) === null || f === void 0 || f.hide();
    } })), { max: m } = e;
    return m && A.value.length >= m && A.value.shift(), A.value.push(h), h;
  }
  function l(n) {
    A.value.splice(A.value.findIndex((s) => s.key === n), 1), delete r.value[n];
  }
  function c() {
    Object.values(r.value).forEach((n) => {
      n.hide();
    });
  }
  return Object.assign({ mergedClsPrefix: o, messageRefs: r, messageList: A, handleAfterLeave: l }, t);
}, render() {
  var e, o, A;
  return v(De, null, (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e), this.messageList.length ? v(oA, { to: (A = this.to) !== null && A !== void 0 ? A : "body" }, v("div", { class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass], key: "message-container", style: this.containerStyle }, this.messageList.map((r) => v(sn, Object.assign({ ref: (t) => {
    t && (this.messageRefs[r.key] = t);
  }, internalKey: r.key, onInternalAfterLeave: this.handleAfterLeave }, Ke(r, ["destroy"], void 0), { duration: r.duration === void 0 ? this.duration : r.duration, keepAliveOnHover: r.keepAliveOnHover === void 0 ? this.keepAliveOnHover : r.keepAliveOnHover, closable: r.closable === void 0 ? this.closable : r.closable }))))) : null);
} }), un = Q({ name: "ModalEnvironment", props: Object.assign(Object.assign({}, vr), { internalKey: { type: String, required: true }, onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = Z(true);
  function A() {
    const { onInternalAfterLeave: a, internalKey: h, onAfterLeave: m } = e;
    a && a(h), m && m();
  }
  function r() {
    const { onPositiveClick: a } = e;
    a ? Promise.resolve(a()).then((h) => {
      h !== false && n();
    }) : n();
  }
  function t() {
    const { onNegativeClick: a } = e;
    a ? Promise.resolve(a()).then((h) => {
      h !== false && n();
    }) : n();
  }
  function i() {
    const { onClose: a } = e;
    a ? Promise.resolve(a()).then((h) => {
      h !== false && n();
    }) : n();
  }
  function l(a) {
    const { onMaskClick: h, maskClosable: m } = e;
    h && (h(a), m && n());
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
  return { show: o, hide: n, handleUpdateShow: s, handleAfterLeave: A, handleCloseClick: i, handleNegativeClick: t, handlePositiveClick: r, handleMaskClick: l, handleEsc: c };
}, render() {
  const { handleUpdateShow: e, handleAfterLeave: o, handleMaskClick: A, handleEsc: r, show: t } = this;
  return v(bo, Object.assign({}, this.$props, { show: t, onUpdateShow: e, onMaskClick: A, onEsc: r, onAfterLeave: o, internalAppear: true, internalModal: true }), this.$slots);
} }), mn = { to: [String, Object] }, hn = Q({ name: "ModalProvider", props: mn, setup() {
  const e = Z([]), o = {};
  function A(l = {}) {
    const c = ze(), n = Ye(Object.assign(Object.assign({}, l), { key: c, destroy: () => {
      var s;
      (s = o[`n-modal-${c}`]) === null || s === void 0 || s.hide();
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
  const i = { create: A, destroyAll: t };
  return F(Xt, i), F(Jt, { clickedRef: Io(64), clickedPositionRef: xo() }), F(qt, e), Object.assign(Object.assign({}, i), { modalList: e, modalInstRefs: o, handleAfterLeave: r });
}, render() {
  var e, o;
  return v(De, null, [this.modalList.map((A) => {
    var r;
    return v(un, Ke(A, ["destroy", "render"], { to: (r = A.to) !== null && r !== void 0 ? r : this.to, ref: (t) => {
      t === null ? delete this.modalInstRefs[`n-modal-${A.key}`] : this.modalInstRefs[`n-modal-${A.key}`] = t;
    }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }), { default: A.render });
  }), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), pn = { name: "Notification", common: u, peers: { Scrollbar: V }, self: Cr }, gn = { name: "Divider", common: u, self: fr }, vn = { name: "Drawer", common: u, peers: { Scrollbar: V }, self: br }, Cn = { name: "DynamicInput", common: u, peers: { Input: $, Button: G }, self() {
  return xr;
} }, Wo = { name: "Space", self() {
  return Ir;
} }, fn = { name: "DynamicTags", common: u, peers: { Input: $, Button: G, Tag: Po, Space: Wo }, self() {
  return { inputWidth: "64px" };
} }, bn = { name: "Element", common: u }, xn = { name: "Flex", self() {
  return Sr;
} }, In = { name: "ButtonGroup", common: u }, Sn = { name: "Form", common: u, self: Br }, Bn = { name: "GradientText", common: u, self(e) {
  const { primaryColor: o, successColor: A, warningColor: r, errorColor: t, infoColor: i, primaryColorSuppl: l, successColorSuppl: c, warningColorSuppl: n, errorColorSuppl: s, infoColorSuppl: a, fontWeightStrong: h } = e;
  return { fontWeight: h, rotate: "252deg", colorStartPrimary: o, colorEndPrimary: l, colorStartInfo: i, colorEndInfo: a, colorStartWarning: r, colorEndWarning: n, colorStartError: t, colorEndError: s, colorStartSuccess: A, colorEndSuccess: c };
} }, kn = { name: "InputNumber", common: u, peers: { Button: G, Input: $ }, self(e) {
  const { textColorDisabled: o } = e;
  return { iconColorDisabled: o };
} }, yn = { name: "InputOtp", common: u, peers: { Input: $ }, self: kr }, En = { name: "Layout", common: u, peers: { Scrollbar: V }, self(e) {
  const { textColor2: o, bodyColor: A, popoverColor: r, cardColor: t, dividerColor: i, scrollbarColor: l, scrollbarColorHover: c } = e;
  return { textColor: o, textColorInverted: o, color: A, colorEmbedded: A, headerColor: t, headerColorInverted: t, footerColor: t, footerColorInverted: t, headerBorderColor: i, headerBorderColorInverted: i, footerBorderColor: i, footerBorderColorInverted: i, siderBorderColor: i, siderBorderColorInverted: i, siderColor: t, siderColorInverted: t, siderToggleButtonBorder: "1px solid transparent", siderToggleButtonColor: r, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: be(A, l), siderToggleBarColorHover: be(A, c), __invertScrollbar: "false" };
} }, wn = { name: "Row", common: u }, Dn = { name: "List", common: u, self: yr }, zn = { name: "Log", common: u, peers: { Scrollbar: V, Code: Ho }, self(e) {
  const { textColor2: o, inputColor: A, fontSize: r, primaryColor: t } = e;
  return { loaderFontSize: r, loaderTextColor: o, loaderColor: A, loaderBorder: "1px solid #0000", loadingColor: t };
} }, Pn = { name: "Mention", common: u, peers: { InternalSelectMenu: xe, Input: $ }, self(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
} }, Rn = { name: "Menu", common: u, peers: { Tooltip: Re, Dropdown: Ue }, self(e) {
  const { primaryColor: o, primaryColorSuppl: A } = e, r = Er(e);
  return r.itemColorActive = C(o, { alpha: 0.15 }), r.itemColorActiveHover = C(o, { alpha: 0.15 }), r.itemColorActiveCollapsed = C(o, { alpha: 0.15 }), r.itemColorActiveInverted = A, r.itemColorActiveHoverInverted = A, r.itemColorActiveCollapsedInverted = A, r;
} }, Mn = { name: "PageHeader", common: u, self: wr }, Hn = { name: "Popconfirm", common: u, peers: { Button: G, Popover: he }, self: Dr }, Zo = { name: "Progress", common: u, self(e) {
  const o = zr(e);
  return o.textColorLineInner = "rgb(0, 0, 0)", o.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", o;
} }, Qn = { name: "Rate", common: u, self(e) {
  const { railColor: o } = e;
  return { itemColor: o, itemColorActive: "#CCAA33", itemSize: "20px", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
} }, On = { name: "Result", common: u, self: Pr }, Tn = { name: "Slider", common: u, self(e) {
  const o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: A, modalColor: r, primaryColorSuppl: t, popoverColor: i, textColor2: l, cardColor: c, borderRadius: n, fontSize: s, opacityDisabled: a } = e;
  return Object.assign(Object.assign({}, Rr), { fontSize: s, markFontSize: s, railColor: A, railColorHover: A, fillColor: t, fillColorHover: t, opacityDisabled: a, handleColor: "#FFF", dotColor: c, dotColorModal: r, dotColorPopover: i, handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", indicatorColor: i, indicatorBoxShadow: o, indicatorTextColor: l, indicatorBorderRadius: n, dotBorder: `2px solid ${A}`, dotBorderActive: `2px solid ${t}`, dotBoxShadow: "" });
} }, Fn = { name: "Spin", common: u, self: Mr }, Ln = { name: "Statistic", common: u, self: Hr }, Vn = { name: "Steps", common: u, self: Qr }, jn = { name: "Switch", common: u, self(e) {
  const { primaryColorSuppl: o, opacityDisabled: A, borderRadius: r, primaryColor: t, textColor2: i, baseColor: l } = e;
  return Object.assign(Object.assign({}, Or), { iconColor: l, textColor: i, loadingColor: o, opacityDisabled: A, railColor: "rgba(255, 255, 255, .20)", railColorActive: o, buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 8px 0 ${C(t, { alpha: 0.3 })}` });
} }, Nn = { name: "Table", common: u, self: Tr }, Wn = { name: "Tabs", common: u, self(e) {
  const o = Fr(e), { inputColor: A } = e;
  return o.colorSegment = A, o.tabColorSegment = A, o;
} }, Zn = { name: "Thing", common: u, self: Lr }, Gn = { name: "Timeline", common: u, self(e) {
  const { textColor3: o, infoColorSuppl: A, errorColorSuppl: r, successColorSuppl: t, warningColorSuppl: i, textColor1: l, textColor2: c, railColor: n, fontWeightStrong: s, fontSize: a } = e;
  return Object.assign(Object.assign({}, Vr), { contentFontSize: a, titleFontWeight: s, circleBorder: `2px solid ${o}`, circleBorderInfo: `2px solid ${A}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${t}`, circleBorderWarning: `2px solid ${i}`, iconColor: o, iconColorInfo: A, iconColorError: r, iconColorSuccess: t, iconColorWarning: i, titleTextColor: l, contentTextColor: c, metaTextColor: o, lineColor: n });
} }, $n = { name: "Transfer", common: u, peers: { Checkbox: ge, Scrollbar: V, Input: $, Empty: me, Button: G }, self(e) {
  const { fontWeight: o, fontSizeLarge: A, fontSizeMedium: r, fontSizeSmall: t, heightLarge: i, heightMedium: l, borderRadius: c, inputColor: n, tableHeaderColor: s, textColor1: a, textColorDisabled: h, textColor2: m, textColor3: f, hoverColor: w, closeColorHover: B, closeColorPressed: z, closeIconColor: M, closeIconColorHover: N, closeIconColorPressed: j, dividerColor: W } = e;
  return Object.assign(Object.assign({}, jr), { itemHeightSmall: l, itemHeightMedium: l, itemHeightLarge: i, fontSizeSmall: t, fontSizeMedium: r, fontSizeLarge: A, borderRadius: c, dividerColor: W, borderColor: "#0000", listColor: n, headerColor: s, titleTextColor: a, titleTextColorDisabled: h, extraTextColor: f, extraTextColorDisabled: h, itemTextColor: m, itemTextColorDisabled: h, itemColorPending: w, titleFontWeight: o, closeColorHover: B, closeColorPressed: z, closeIconColor: M, closeIconColorHover: N, closeIconColorPressed: j });
} }, Go = { name: "Tree", common: u, peers: { Checkbox: ge, Scrollbar: V, Empty: me }, self(e) {
  const { primaryColor: o } = e, A = Nr(e);
  return A.nodeColorActive = C(o, { alpha: 0.15 }), A;
} }, Yn = { name: "TreeSelect", common: u, peers: { Tree: Go, Empty: me, InternalSelection: qe } }, Kn = { name: "Typography", common: u, self: Wr }, Jn = { name: "Upload", common: u, peers: { Button: G, Progress: Zo }, self(e) {
  const { errorColor: o } = e, A = Zr(e);
  return A.itemColorHoverError = C(o, { alpha: 0.09 }), A;
} }, Xn = { name: "Watermark", common: u, self(e) {
  const { fontFamily: o } = e;
  return { fontFamily: o };
} }, qn = { name: "FloatButton", common: u, self(e) {
  const { popoverColor: o, textColor2: A, buttonColor2Hover: r, buttonColor2Pressed: t, primaryColor: i, primaryColorHover: l, primaryColorPressed: c, baseColor: n, borderRadius: s } = e;
  return { color: o, textColor: A, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)", colorHover: r, colorPressed: t, colorPrimary: i, colorPrimaryHover: l, colorPrimaryPressed: c, textColorPrimary: n, borderRadiusSquare: s };
} }, Un = Q({ name: "GlobalStyle", setup() {
  if (typeof document > "u") return;
  const e = oe(Gr, null), { body: o } = document, { style: A } = o;
  let r = false, t = true;
  po(() => {
    Ne(() => {
      var i, l;
      const { textColor2: c, fontSize: n, fontFamily: s, bodyColor: a, cubicBezierEaseInOut: h, lineHeight: m } = e ? $r({}, ((i = e.mergedThemeRef.value) === null || i === void 0 ? void 0 : i.common) || no, (l = e.mergedThemeOverridesRef.value) === null || l === void 0 ? void 0 : l.common) : no;
      if (r || !o.hasAttribute("n-styled")) {
        A.setProperty("-webkit-text-size-adjust", "100%"), A.setProperty("-webkit-tap-highlight-color", "transparent"), A.padding = "0", A.margin = "0", A.backgroundColor = a, A.color = c, A.fontSize = n, A.fontFamily = s, A.lineHeight = m;
        const f = `color .3s ${h}, background-color .3s ${h}`;
        t ? setTimeout(() => {
          A.transition = f;
        }, 0) : A.transition = f, o.setAttribute("n-styled", ""), r = true, t = false;
      }
    });
  }), AA(() => {
    r && o.removeAttribute("n-styled");
  });
}, render() {
  return null;
} }), _n = { name: "Heatmap", common: u, self(e) {
  const o = Yr(e);
  return Object.assign(Object.assign({}, o), { activeColors: ["#0d4429", "#006d32", "#26a641", "#39d353"], mininumColor: "rgba(255, 255, 255, 0.1)", loadingColorStart: "rgba(255, 255, 255, 0.12)", loadingColorEnd: "rgba(255, 255, 255, 0.18)" });
} }, el = { name: "IconWrapper", common: u, self: Kr }, ol = { name: "Image", common: u, peers: { Tooltip: Re }, self: (e) => {
  const { textColor2: o } = e;
  return { toolbarIconColor: o, toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
} }, Al = { name: "Transfer", common: u, peers: { Checkbox: ge, Scrollbar: V, Input: $, Empty: me, Button: G }, self(e) {
  const { iconColorDisabled: o, iconColor: A, fontWeight: r, fontSizeLarge: t, fontSizeMedium: i, fontSizeSmall: l, heightLarge: c, heightMedium: n, heightSmall: s, borderRadius: a, inputColor: h, tableHeaderColor: m, textColor1: f, textColorDisabled: w, textColor2: B, hoverColor: z } = e;
  return Object.assign(Object.assign({}, Jr), { itemHeightSmall: s, itemHeightMedium: n, itemHeightLarge: c, fontSizeSmall: l, fontSizeMedium: i, fontSizeLarge: t, borderRadius: a, borderColor: "#0000", listColor: h, headerColor: m, titleTextColor: f, titleTextColorDisabled: w, extraTextColor: B, filterDividerColor: "#0000", itemTextColor: B, itemTextColorDisabled: w, itemColorPending: z, titleFontWeight: r, iconColor: A, iconColorDisabled: o });
} }, rl = { name: "Marquee", common: u, self: Xr }, Ie = pe("n-menu"), $o = pe("n-submenu"), _e = pe("n-menu-item-group"), so = [D("&::before", "background-color: var(--n-item-color-hover);"), I("arrow", `
 color: var(--n-arrow-color-hover);
 `), I("icon", `
 color: var(--n-item-icon-color-hover);
 `), y("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [D("a", `
 color: var(--n-item-text-color-hover);
 `), I("extra", `
 color: var(--n-item-text-color-hover);
 `)])], co = [I("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), y("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [D("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), I("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])], tl = D([y("menu", `
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
 `, [y("submenu", "margin: 0;"), y("menu-item", "margin: 0;"), y("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [D("&::before", "display: none;"), R("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), y("menu-item-content", [R("selected", [I("icon", "color: var(--n-item-icon-color-active-horizontal);"), y("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [D("a", "color: var(--n-item-text-color-active-horizontal);"), I("extra", "color: var(--n-item-text-color-active-horizontal);")])]), R("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [y("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [D("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), I("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), I("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), Ce("disabled", [Ce("selected, child-active", [D("&:focus-within", co)]), R("selected", [se(null, [I("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), y("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [D("a", "color: var(--n-item-text-color-active-hover-horizontal);"), I("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), R("child-active", [se(null, [I("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), y("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [D("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), I("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), se("border-bottom: 2px solid var(--n-border-color-horizontal);", co)]), y("menu-item-content-header", [D("a", "color: var(--n-item-text-color-horizontal);")])])]), Ce("responsive", [y("menu-item-content-header", `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), R("collapsed", [y("menu-item-content", [R("selected", [D("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), y("menu-item-content-header", "opacity: 0;"), I("arrow", "opacity: 0;"), I("icon", "color: var(--n-item-icon-color-collapsed);")])]), y("menu-item", `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), y("menu-item-content", `
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
 `), R("collapsed", [I("arrow", "transform: rotate(0);")]), R("selected", [D("&::before", "background-color: var(--n-item-color-active);"), I("arrow", "color: var(--n-arrow-color-active);"), I("icon", "color: var(--n-item-icon-color-active);"), y("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [D("a", "color: var(--n-item-text-color-active);"), I("extra", "color: var(--n-item-text-color-active);")])]), R("child-active", [y("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [D("a", `
 color: var(--n-item-text-color-child-active);
 `), I("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), I("arrow", `
 color: var(--n-arrow-color-child-active);
 `), I("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), Ce("disabled", [Ce("selected, child-active", [D("&:focus-within", so)]), R("selected", [se(null, [I("arrow", "color: var(--n-arrow-color-active-hover);"), I("icon", "color: var(--n-item-icon-color-active-hover);"), y("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [D("a", "color: var(--n-item-text-color-active-hover);"), I("extra", "color: var(--n-item-text-color-active-hover);")])])]), R("child-active", [se(null, [I("arrow", "color: var(--n-arrow-color-child-active-hover);"), I("icon", "color: var(--n-item-icon-color-child-active-hover);"), y("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [D("a", "color: var(--n-item-text-color-child-active-hover);"), I("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), R("selected", [se(null, [D("&::before", "background-color: var(--n-item-color-active-hover);")])]), se(null, so)]), I("icon", `
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
 `), I("arrow", `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), y("menu-item-content-header", `
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
 `)]), I("extra", `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), y("submenu", `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [y("menu-item-content", `
 height: var(--n-item-height);
 `), y("submenu-children", `
 overflow: hidden;
 padding: 0;
 `, [So({ duration: ".2s" })])]), y("menu-item-group", [y("menu-item-group-title", `
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
 `)])]), y("menu-tooltip", [D("a", `
 color: inherit;
 text-decoration: none;
 `)]), y("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function se(e, o) {
  return [R("hover", e, o), D("&:hover", e, o)];
}
const Yo = Q({ name: "MenuOptionContent", props: { collapsed: Boolean, disabled: Boolean, title: [String, Function], icon: Function, extra: [String, Function], showArrow: Boolean, childActive: Boolean, hover: Boolean, paddingLeft: Number, selected: Boolean, maxIconSize: { type: Number, required: true }, activeIconSize: { type: Number, required: true }, iconMarginRight: { type: Number, required: true }, clsPrefix: { type: String, required: true }, onClick: Function, tmNode: { type: Object, required: true }, isEllipsisPlaceholder: Boolean }, setup(e) {
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
  return v("div", { onClick: (c) => {
    var n;
    (n = this.onClick) === null || n === void 0 || n.call(this, c);
  }, role: "none", class: [`${e}-menu-item-content`, { [`${e}-menu-item-content--selected`]: this.selected, [`${e}-menu-item-content--collapsed`]: this.collapsed, [`${e}-menu-item-content--child-active`]: this.childActive, [`${e}-menu-item-content--disabled`]: this.disabled, [`${e}-menu-item-content--hover`]: this.hover }], style: this.style }, l && v("div", { class: `${e}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [l]), v("div", { class: `${e}-menu-item-content-header`, role: "none" }, this.isEllipsisPlaceholder ? this.title : r ? r(o.rawNode) : de(this.title), this.extra || t ? v("span", { class: `${e}-menu-item-content-header__extra` }, " ", t ? t(o.rawNode) : de(this.extra)) : null), this.showArrow ? v(yo, { ariaHidden: true, class: `${e}-menu-item-content__arrow`, clsPrefix: e }, { default: () => i ? i(o.rawNode) : v(yt, null) }) : null);
} }), ke = 8;
function eo(e) {
  const o = oe(Ie), { props: A, mergedCollapsedRef: r } = o, t = oe($o, null), i = oe(_e, null), l = E(() => A.mode === "horizontal"), c = E(() => l.value ? A.dropdownPlacement : "tmNodes" in e ? "right-start" : "right"), n = E(() => {
    var m;
    return Math.max((m = A.collapsedIconSize) !== null && m !== void 0 ? m : A.iconSize, A.iconSize);
  }), s = E(() => {
    var m;
    return !l.value && e.root && r.value && (m = A.collapsedIconSize) !== null && m !== void 0 ? m : A.iconSize;
  }), a = E(() => {
    if (l.value) return;
    const { collapsedWidth: m, indent: f, rootIndent: w } = A, { root: B, isGroup: z } = e, M = w === void 0 ? f : w;
    return B ? r.value ? m / 2 - n.value / 2 : M : i && typeof i.paddingLeftRef.value == "number" ? f / 2 + i.paddingLeftRef.value : t && typeof t.paddingLeftRef.value == "number" ? (z ? f / 2 : f) + t.paddingLeftRef.value : 0;
  }), h = E(() => {
    const { collapsedWidth: m, indent: f, rootIndent: w } = A, { value: B } = n, { root: z } = e;
    return l.value || !z || !r.value ? ke : (w === void 0 ? f : w) + B + ke - (m + B) / 2;
  });
  return { dropdownPlacement: c, activeIconSize: s, maxIconSize: n, paddingLeft: a, iconMarginRight: h, NMenu: o, NSubmenu: t, NMenuOptionGroup: i };
}
const oo = { internalKey: { type: [String, Number], required: true }, root: Boolean, isGroup: Boolean, level: { type: Number, required: true }, title: [String, Function], extra: [String, Function] }, nl = Q({ name: "MenuDivider", setup() {
  const e = oe(Ie), { mergedClsPrefixRef: o, isHorizontalRef: A } = e;
  return () => A.value ? null : v("div", { class: `${o.value}-menu-divider` });
} }), Ko = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function }), ll = Xe(Ko), al = Q({ name: "MenuOption", props: Ko, setup(e) {
  const o = eo(e), { NSubmenu: A, NMenu: r, NMenuOptionGroup: t } = o, { props: i, mergedClsPrefixRef: l, mergedCollapsedRef: c } = r, n = A ? A.mergedDisabledRef : t ? t.mergedDisabledRef : { value: false }, s = E(() => n.value || e.disabled);
  function a(m) {
    const { onClick: f } = e;
    f && f(m);
  }
  function h(m) {
    s.value || (r.doSelect(e.internalKey, e.tmNode.rawNode), a(m));
  }
  return { mergedClsPrefix: l, dropdownPlacement: o.dropdownPlacement, paddingLeft: o.paddingLeft, iconMarginRight: o.iconMarginRight, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, mergedTheme: r.mergedThemeRef, menuProps: i, dropdownEnabled: Ze(() => e.root && c.value && i.mode !== "horizontal" && !s.value), selected: Ze(() => r.mergedValueRef.value === e.internalKey), mergedDisabled: s, handleClick: h };
}, render() {
  const { mergedClsPrefix: e, mergedTheme: o, tmNode: A, menuProps: { renderLabel: r, nodeProps: t } } = this, i = t == null ? void 0 : t(A.rawNode);
  return v("div", Object.assign({}, i, { role: "menuitem", class: [`${e}-menu-item`, i == null ? void 0 : i.class] }), v(qr, { theme: o.peers.Tooltip, themeOverrides: o.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: ["menu-tooltip"] }, { default: () => r ? r(A.rawNode) : de(this.title), trigger: () => v(Yo, { tmNode: A, clsPrefix: e, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }) }));
} }), Jo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, tmNodes: { type: Array, required: true } }), il = Xe(Jo), sl = Q({ name: "MenuOptionGroup", props: Jo, setup(e) {
  const o = eo(e), { NSubmenu: A } = o, r = E(() => (A == null ? void 0 : A.mergedDisabledRef.value) ? true : e.tmNode.disabled);
  F(_e, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: r });
  const { mergedClsPrefixRef: t, props: i } = oe(Ie);
  return function() {
    const { value: l } = t, c = o.paddingLeft.value, { nodeProps: n } = i, s = n == null ? void 0 : n(e.tmNode.rawNode);
    return v("div", { class: `${l}-menu-item-group`, role: "group" }, v("div", Object.assign({}, s, { class: [`${l}-menu-item-group-title`, s == null ? void 0 : s.class], style: [(s == null ? void 0 : s.style) || "", c !== void 0 ? `padding-left: ${c}px;` : ""] }), de(e.title), e.extra ? v(De, null, " ", de(e.extra)) : null), v("div", null, e.tmNodes.map((a) => Ao(a, i))));
  };
} });
function Ge(e) {
  return e.type === "divider" || e.type === "render";
}
function cl(e) {
  return e.type === "divider";
}
function Ao(e, o) {
  const { rawNode: A } = e, { show: r } = A;
  if (r === false) return null;
  if (Ge(A)) return cl(A) ? v(nl, Object.assign({ key: e.key }, A.props)) : null;
  const { labelField: t } = o, { key: i, level: l, isGroup: c } = e, n = Object.assign(Object.assign({}, A), { title: A.title || A[t], extra: A.titleExtra || A.extra, key: i, internalKey: i, level: l, root: l === 0, isGroup: c });
  return e.children ? e.isGroup ? v(sl, ye(n, il, { tmNode: e, tmNodes: e.children, key: i })) : v($e, ye(n, dl, { key: i, rawNodes: A[o.childrenField], tmNodes: e.children, tmNode: e })) : v(al, ye(n, ll, { key: i, tmNode: e }));
}
const Xo = Object.assign(Object.assign({}, oo), { rawNodes: { type: Array, default: () => [] }, tmNodes: { type: Array, default: () => [] }, tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function, domId: String, virtualChildActive: { type: Boolean, default: void 0 }, isEllipsisPlaceholder: Boolean }), dl = Xe(Xo), $e = Q({ name: "Submenu", props: Xo, setup(e) {
  const o = eo(e), { NMenu: A, NSubmenu: r } = o, { props: t, mergedCollapsedRef: i, mergedThemeRef: l } = A, c = E(() => {
    const { disabled: m } = e;
    return (r == null ? void 0 : r.mergedDisabledRef.value) || t.disabled ? true : m;
  }), n = Z(false);
  F($o, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: c }), F(_e, null);
  function s() {
    const { onClick: m } = e;
    m && m();
  }
  function a() {
    c.value || (i.value || A.toggleExpand(e.internalKey), s());
  }
  function h(m) {
    n.value = m;
  }
  return { menuProps: t, mergedTheme: l, doSelect: A.doSelect, inverted: A.invertedRef, isHorizontal: A.isHorizontalRef, mergedClsPrefix: A.mergedClsPrefixRef, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, iconMarginRight: o.iconMarginRight, dropdownPlacement: o.dropdownPlacement, dropdownShow: n, paddingLeft: o.paddingLeft, mergedDisabled: c, mergedValue: A.mergedValueRef, childActive: Ze(() => {
    var m;
    return (m = e.virtualChildActive) !== null && m !== void 0 ? m : A.activePathRef.value.includes(e.internalKey);
  }), collapsed: E(() => t.mode === "horizontal" ? false : i.value ? true : !A.mergedExpandedKeysRef.value.includes(e.internalKey)), dropdownEnabled: E(() => !c.value && (t.mode === "horizontal" || i.value)), handlePopoverShowChange: h, handleClick: a };
}, render() {
  var e;
  const { mergedClsPrefix: o, menuProps: { renderIcon: A, renderLabel: r } } = this, t = () => {
    const { isHorizontal: l, paddingLeft: c, collapsed: n, mergedDisabled: s, maxIconSize: a, activeIconSize: h, title: m, childActive: f, icon: w, handleClick: B, menuProps: { nodeProps: z }, dropdownShow: M, iconMarginRight: N, tmNode: j, mergedClsPrefix: W, isEllipsisPlaceholder: J, extra: Y } = this, H = z == null ? void 0 : z(j.rawNode);
    return v("div", Object.assign({}, H, { class: [`${W}-menu-item`, H == null ? void 0 : H.class], role: "menuitem" }), v(Yo, { tmNode: j, paddingLeft: c, collapsed: n, disabled: s, iconMarginRight: N, maxIconSize: a, activeIconSize: h, title: m, extra: Y, showArrow: !l, childActive: f, clsPrefix: W, icon: w, hover: M, onClick: B, isEllipsisPlaceholder: J }));
  }, i = () => v(Eo, null, { default: () => {
    const { tmNodes: l, collapsed: c } = this;
    return c ? null : v("div", { class: `${o}-submenu-children`, role: "menu" }, l.map((n) => Ao(n, this.menuProps)));
  } });
  return this.root ? v(Ur, Object.assign({ size: "large", trigger: "hover" }, (e = this.menuProps) === null || e === void 0 ? void 0 : e.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: { fontSizeLarge: "14px", optionIconSizeLarge: "18px" }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: A, renderLabel: r }), { default: () => v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, t(), this.isHorizontal ? null : i()) }) : v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, t(), i());
} }), ul = Object.assign(Object.assign({}, Pe.props), { options: { type: Array, default: () => [] }, collapsed: { type: Boolean, default: void 0 }, collapsedWidth: { type: Number, default: 48 }, iconSize: { type: Number, default: 20 }, collapsedIconSize: { type: Number, default: 24 }, rootIndent: Number, indent: { type: Number, default: 32 }, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, disabledField: { type: String, default: "disabled" }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: { type: [String, Number], default: null }, mode: { type: String, default: "vertical" }, watchProps: { type: Array, default: void 0 }, disabled: Boolean, show: { type: Boolean, default: true }, inverted: Boolean, "onUpdate:expandedKeys": [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], "onUpdate:value": [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, dropdownProps: Object, accordion: Boolean, nodeProps: Function, dropdownPlacement: { type: String, default: "bottom" }, responsive: Boolean, items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array }), Le = Q({ name: "Menu", inheritAttrs: false, props: ul, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: A } = Je(e), r = Pe("Menu", "-menu", tl, rt, e, o), t = oe(et, null), i = E(() => {
    var b;
    const { collapsed: k } = e;
    if (k !== void 0) return k;
    if (t) {
      const { collapseModeRef: d, collapsedRef: x } = t;
      if (d.value === "width") return (b = x.value) !== null && b !== void 0 ? b : false;
    }
    return false;
  }), l = E(() => {
    const { keyField: b, childrenField: k, disabledField: d } = e;
    return Fe(e.items || e.options, { getIgnored(x) {
      return Ge(x);
    }, getChildren(x) {
      return x[k];
    }, getDisabled(x) {
      return x[d];
    }, getKey(x) {
      var P;
      return (P = x[b]) !== null && P !== void 0 ? P : x.name;
    } });
  }), c = E(() => new Set(l.value.treeNodes.map((b) => b.key))), { watchProps: n } = e, s = Z(null);
  (n == null ? void 0 : n.includes("defaultValue")) ? Ne(() => {
    s.value = e.defaultValue;
  }) : s.value = e.defaultValue;
  const a = to(e, "value"), h = lo(a, s), m = Z([]), f = () => {
    m.value = e.defaultExpandAll ? l.value.getNonLeafKeys() : e.defaultExpandedNames || e.defaultExpandedKeys || l.value.getPath(h.value, { includeSelf: false }).keyPath;
  };
  (n == null ? void 0 : n.includes("defaultExpandedKeys")) ? Ne(f) : f();
  const w = ot(e, ["expandedNames", "expandedKeys"]), B = lo(w, m), z = E(() => l.value.treeNodes), M = E(() => l.value.getPath(h.value).keyPath);
  F(Ie, { props: e, mergedCollapsedRef: i, mergedThemeRef: r, mergedValueRef: h, mergedExpandedKeysRef: B, activePathRef: M, mergedClsPrefixRef: o, isHorizontalRef: E(() => e.mode === "horizontal"), invertedRef: to(e, "inverted"), doSelect: N, toggleExpand: W });
  function N(b, k) {
    const { "onUpdate:value": d, onUpdateValue: x, onSelect: P } = e;
    x && ie(x, b, k), d && ie(d, b, k), P && ie(P, b, k), s.value = b;
  }
  function j(b) {
    const { "onUpdate:expandedKeys": k, onUpdateExpandedKeys: d, onExpandedNamesChange: x, onOpenNamesChange: P } = e;
    k && ie(k, b), d && ie(d, b), x && ie(x, b), P && ie(P, b), m.value = b;
  }
  function W(b) {
    const k = Array.from(B.value), d = k.findIndex((x) => x === b);
    if (~d) k.splice(d, 1);
    else {
      if (e.accordion && c.value.has(b)) {
        const x = k.findIndex((P) => c.value.has(P));
        x > -1 && k.splice(x, 1);
      }
      k.push(b);
    }
    j(k);
  }
  const J = (b) => {
    const k = l.value.getPath(b ?? h.value, { includeSelf: false }).keyPath;
    if (!k.length) return;
    const d = Array.from(B.value), x = /* @__PURE__ */ new Set([...d, ...k]);
    e.accordion && c.value.forEach((P) => {
      x.has(P) && !k.includes(P) && x.delete(P);
    }), j(Array.from(x));
  }, Y = E(() => {
    const { inverted: b } = e, { common: { cubicBezierEaseInOut: k }, self: d } = r.value, { borderRadius: x, borderColorHorizontal: P, fontSize: qo, itemHeight: Uo, dividerColor: _o } = d, p = { "--n-divider-color": _o, "--n-bezier": k, "--n-font-size": qo, "--n-border-color-horizontal": P, "--n-border-radius": x, "--n-item-height": Uo };
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
    const { childrenField: b, disabledField: k, keyField: d } = e;
    return Fe([He.value], { getIgnored(x) {
      return Ge(x);
    }, getChildren(x) {
      return x[b];
    }, getDisabled(x) {
      return x[k];
    }, getKey(x) {
      var P;
      return (P = x[d]) !== null && P !== void 0 ? P : x.name;
    } });
  }), Oe = E(() => Fe([{}]).treeNodes[0]);
  function Te() {
    var b;
    if (re.value === -1) return v($e, { root: true, level: 0, key: "__ellpisisGroupPlaceholder__", internalKey: "__ellpisisGroupPlaceholder__", title: "\xB7\xB7\xB7", tmNode: Oe.value, domId: X, isEllipsisPlaceholder: true });
    const k = Qe.value.treeNodes[0], d = M.value, x = !!(!((b = k.children) === null || b === void 0) && b.some((P) => d.includes(P.key)));
    return v($e, { level: 0, root: true, key: "__ellpisisGroup__", internalKey: "__ellpisisGroup__", title: "\xB7\xB7\xB7", virtualChildActive: x, tmNode: k, domId: X, rawNodes: k.rawNode.children || [], tmNodes: k.children || [], isEllipsisPlaceholder: true });
  }
  return { mergedClsPrefix: o, controlledExpandedKeys: w, uncontrolledExpanededKeys: m, mergedExpandedKeys: B, uncontrolledValue: s, mergedValue: h, activePath: M, tmNodes: z, mergedTheme: r, mergedCollapsed: i, cssVars: A ? void 0 : Y, themeClass: H == null ? void 0 : H.themeClass, overflowRef: U, counterRef: ee, updateCounter: () => {
  }, onResize: Ae, onUpdateOverflow: Me, onUpdateCount: ve, renderCounter: Te, getCounter: ae, onRender: H == null ? void 0 : H.onRender, showOption: J, deriveResponsiveState: Ae };
}, render() {
  const { mergedClsPrefix: e, mode: o, themeClass: A, onRender: r } = this;
  r == null ? void 0 : r();
  const t = () => this.tmNodes.map((n) => Ao(n, this.$props)), l = o === "horizontal" && this.responsive, c = () => v("div", rA(this.$attrs, { role: o === "horizontal" ? "menubar" : "menu", class: [`${e}-menu`, A, `${e}-menu--${o}`, l && `${e}-menu--responsive`, this.mergedCollapsed && `${e}-menu--collapsed`], style: this.cssVars }), l ? v(At, { ref: "overflowRef", onUpdateOverflow: this.onUpdateOverflow, getCounter: this.getCounter, onUpdateCount: this.onUpdateCount, updateCounter: this.updateCounter, style: { width: "100%", display: "flex", overflow: "hidden" } }, { default: t, counter: this.renderCounter }) : t());
  return l ? v(_r, { onResize: this.onResize }, { default: c }) : c();
} }), ml = { name: "QrCode", common: u, self: (e) => ({ borderRadius: e.borderRadius }) }, hl = { name: "Skeleton", common: u, self(e) {
  const { heightSmall: o, heightMedium: A, heightLarge: r, borderRadius: t } = e;
  return { color: "rgba(255, 255, 255, 0.12)", colorEnd: "rgba(255, 255, 255, 0.18)", borderRadius: t, heightSmall: o, heightMedium: A, heightLarge: r };
} }, pl = { name: "Split", common: u }, gl = { name: "Equation", common: u, self: tt }, vl = { name: "FloatButtonGroup", common: u, self(e) {
  const { popoverColor: o, dividerColor: A, borderRadius: r } = e;
  return { color: o, buttonBorderColor: A, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
} }, Cl = { name: "dark", common: u, Alert: zt, Anchor: Pt, AutoComplete: Mt, Avatar: Ro, AvatarGroup: Ht, BackTop: Qt, Badge: Ot, Breadcrumb: Tt, Button: G, ButtonGroup: In, Calendar: Ft, Card: Mo, Carousel: Lt, Cascader: Vt, Checkbox: ge, Code: Ho, Collapse: jt, CollapseTransition: Nt, ColorPicker: Wt, DataTable: Zt, DatePicker: $t, Descriptions: Yt, Dialog: jo, Divider: gn, Drawer: vn, Dropdown: Ue, DynamicInput: Cn, DynamicTags: fn, Element: bn, Empty: me, Ellipsis: Fo, Equation: gl, Flex: xn, Form: Sn, GradientText: Bn, Heatmap: _n, Icon: Gt, IconWrapper: el, Image: ol, Input: $, InputNumber: kn, InputOtp: yn, LegacyTransfer: Al, Layout: En, List: Dn, LoadingBar: An, Log: zn, Menu: Rn, Mention: Pn, Message: rn, Modal: Kt, Notification: pn, PageHeader: Mn, Pagination: To, Popconfirm: Hn, Popover: he, Popselect: Qo, Progress: Zo, QrCode: ml, Radio: Lo, Rate: Qn, Result: On, Row: wn, Scrollbar: V, Select: Oo, Skeleton: hl, Slider: Tn, Space: Wo, Spin: Fn, Statistic: Ln, Steps: Vn, Switch: jn, Table: Nn, Tabs: Wn, Tag: Po, Thing: Zn, TimePicker: Vo, Timeline: Gn, Tooltip: Re, Transfer: $n, Tree: Go, TreeSelect: Yn, Typography: Kn, Upload: Jn, Watermark: Xn, Split: pl, FloatButton: qn, FloatButtonGroup: vl, Marquee: rl }, fl = tA("titleBar", () => {
  const e = nt();
  return { text: E(() => {
    var _a;
    return e.currentSketchId && ((_a = e.sketches.find((r) => r.id === e.currentSketchId)) == null ? void 0 : _a.meta.name) || null;
  }) };
}), bl = { key: 0, class: "title-bar" }, xl = Q({ __name: "TitleBar", setup(e) {
  const o = fl(), A = E(() => o.text || "");
  return (r, t) => A.value ? (ne(), fe("div", bl, [O(L(lt), null, { default: K(() => [O(L(at), { depth: 3 }, { default: K(() => [lA(aA(A.value), 1)]), _: 1 })]), _: 1 })])) : nA("", true);
} }), uo = Co(xl, [["__scopeId", "data-v-36e35087"]]), Il = { key: 0, class: "nav-bar" }, Sl = { class: "software-info-menu" }, Bl = { style: { width: "100%" } }, kl = { style: { "max-width": "8em" } }, yl = { key: 1, class: "nav-bar" }, El = { style: { "max-width": "50vw" } }, wl = { class: "main-layout" }, Dl = Q({ __name: "AppLayout", setup(e) {
  iA((f) => ({ v7525ec9e: m.value ? "column" : "row" }));
  const o = it(), A = wo(), r = new Do(), { t, locale: i } = ft();
  function l(f) {
    return () => v(ao, null, { default: () => v(f) });
  }
  A.settings.interfaceLanguage = A.settings.interfaceLanguage ?? i.value, i.value = A.settings.interfaceLanguage, sA(() => A.settings.interfaceLanguage, (f) => {
    f && (i.value = f);
  });
  const c = [{ label: () => v(Se, { to: "/tracker" }, { default: () => t("router.tracker") }), key: "tracker", icon: l(mt) }, { label: () => v(Se, { to: "/sketch-centre" }, { default: () => t("router.sketchCentre") }), key: "sketch-centre", icon: l(ht) }], n = [{ label: () => v(Se, { to: "/settings" }, { default: () => t("router.settings") }), key: "settings", icon: l(pt) }, { label: () => v(Se, { to: "/about" }, { default: () => t("router.about") }), key: "about", icon: l(gt) }], s = E(() => o.path.slice(1)), { width: a, height: h } = st(), m = E(() => a.value > h.value);
  return (f, w) => (ne(), fe("div", { class: go(["app-layout", m.value ? "app-layout-horizontal" : "app-layout-vertical"]) }, [m.value ? (ne(), fe("div", Il, [O(L(Le), { options: c, "default-value": "tracker", value: s.value, mode: m.value ? "vertical" : "horizontal" }, null, 8, ["value", "mode"]), le("div", Sl, [le("div", Bl, [O(L(Le), { options: n, mode: m.value ? "vertical" : "horizontal", value: s.value }, null, 8, ["mode", "value"])]), le("div", kl, [O(uo)])])])) : (ne(), fe("div", yl, [O(L(dt), { trigger: L(r).isMobile ? "click" : "hover", style: { padding: "2px 0", transform: "translateX(2px)" }, placement: "bottom-start" }, { trigger: K(() => [O(L(ct), { style: { width: "48px" } }, { icon: K(() => [O(L(ao), null, { default: K(() => [O(L(xt))]), _: 1 })]), _: 1 })]), default: K(() => [O(L(Le), { options: c.concat(n), "default-value": "tracker", value: s.value, "dropdown-placement": "top-start", mode: "vertical" }, null, 8, ["options", "value"])]), _: 1 }, 8, ["trigger"]), le("div", El, [O(uo)])])), le("div", wl, [O(L(ut), null, { default: K(({ Component: B }) => [O(cA, { name: "slide-fade", mode: "out-in" }, { default: K(() => [(ne(), We(dA, null, [(ne(), We(uA(B), { key: s.value }))], 1024))]), _: 2 }, 1024)]), _: 1 })])], 2));
} }), zl = Co(Dl, [["__scopeId", "data-v-00577205"]]);
var Ve, mo;
function Pl() {
  return mo || (mo = 1, Ve = { webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK", mp4: "data:video/mp4;base64,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" }), Ve;
}
var je, ho;
function Rl() {
  if (ho) return je;
  ho = 1;
  const { webm: e, mp4: o } = Pl(), A = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, r = () => "wakeLock" in navigator;
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
      var s = document.createElement("source");
      s.src = n, s.type = `video/${c}`, l.appendChild(s);
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
var Ml = Rl();
const Hl = mA(Ml), Fl = Q({ __name: "App", setup(e) {
  const o = wo(), A = window.GeolocationManager, r = kt(), t = E(() => o.settings.theme === "system" ? r.value : o.settings.theme), i = E(() => t.value === "dark" ? Cl : vt), l = { common: { fontFamily: 'Barlow, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' } };
  return F("applicationDarkThemeEnabled", t), F("platformInfo", new Do()), F("settings", o), F("noSleep", new Hl()), F("geolocation", A), vo(() => o.init()), (c, n) => (ne(), We(L(Ct), { theme: i.value, abstract: true, "inline-theme-disabled": true, "theme-overrides": l }, { default: K(() => [O(L(on), null, { default: K(() => [O(L(hn), null, { default: K(() => [O(L(dn), { placement: "bottom-right" }, { default: K(() => [O(zl), O(L(Un))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["theme"]));
} });
export {
  Fl as default
};
