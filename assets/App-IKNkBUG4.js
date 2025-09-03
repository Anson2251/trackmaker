import { d as O, c as ce, o as ee, a as oe, r as ro, b as W, e as Co, f as AA, h as v, n as fo, F as De, p as F, g as $e, i as re, j as z, k as bo, T as rA, w as je, l as tA, t as to, m as nA, u as lA, P as xo, q as aA, s as V, v as H, x as no, y as K, z as lo, A as ao, B as iA, C as Ne, K as sA, D as cA, _ as dA } from "./index-DSvGlfEm.js";
import { u as mA, R as uA, a as Se } from "./vue-router-D76nXCqn.js";
import { u as hA } from "./vue-i18n-X8X1EhHF.js";
import { c as pA, s as gA, a as vA, b as CA, d as fA, e as bA, f as xA, g as IA, h as SA, i as BA, j as yA, k as kA, l as EA, m as wA, n as DA, o as zA, p as PA, q as RA, r as MA, t as HA, u as QA, v as OA, w as TA, x as FA, y as LA, z as VA, A as jA, B as NA, C as WA, D as ZA, E as GA, F as $A, G as YA, H as KA, I as JA, J as XA, K as qA, L as UA, M as _A, N as er, O as or, P as Ar, Q as Io, R as rr, S as tr } from "./settings-store-CKhvurrf.js";
import { V as nr, u as lr } from "./index-DEGH1C9J.js";
import { h as ar, c as ir, s as T, r as So, a as be, b as sr, d as cr, e as dr, f as C, g as mr, i as he, k as ke, j as ze, l as D, m as E, n as S, o as R, N as ur, u as Ye, p as hr, q as Pe, t as le, v as Bo, w as yo, x as pr, y as gr, z as vr, A as io, B as fe, C as We, D as Ke, V as Cr, E as so, F as fr, G as ie, H as br } from "./light-DfzEfYBd.js";
import { s as xr, f as ko, a as Ir } from "./light-CNVlFFN8.js";
import { s as Sr, a as Br, c as yr, e as kr, b as Er, i as wr, N as Dr, r as me, d as zr, f as Pr, g as Te } from "./light-D7aXBowW.js";
import { s as Rr, c as Mr, N as Hr } from "./Tooltip-DMQY7OZD.js";
import { s as Qr, N as Eo, c as Or, a as Tr, b as co } from "./light-Cy1AeMog.js";
import { c as Fr, s as Lr, a as Vr, b as jr, d as Nr, N as Wr, e as wo, f as Zr, g as Gr, u as Do, h as zo, i as $r, j as Yr, k as Kr, m as Po, E as Jr, W as Xr, S as qr, I as Ur, l as _r, n as et, o as ot, p as At, q as rt, r as tt, t as nt, v as mo, B as lt, M as at } from "./text-VZIHOOUl.js";
import { o as Je, M as it, S as st } from "./omit-j6_xJJGR.js";
import { c as ct } from "./light-5CGb8Hbk.js";
const dt = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, mt = O({ name: "InfoCircle", render: function(o, A) {
  return ee(), ce("svg", dt, A[0] || (A[0] = [oe("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [oe("circle", { cx: "12", cy: "12", r: "9" }), oe("path", { d: "M12 8h.01" }), oe("path", { d: "M11 12h1v4h1" })], -1)]));
} }), ut = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, ht = O({ name: "Menu", render: function(o, A) {
  return ee(), ce("svg", ut, A[0] || (A[0] = [oe("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [oe("path", { d: "M4 8h16" }), oe("path", { d: "M4 16h16" })], -1)]));
} });
let Be = 0;
const pt = typeof window < "u" && window.matchMedia !== void 0, ue = W(null);
let q, de;
function Ee(e) {
  e.matches && (ue.value = "dark");
}
function we(e) {
  e.matches && (ue.value = "light");
}
function gt() {
  q = window.matchMedia("(prefers-color-scheme: dark)"), de = window.matchMedia("(prefers-color-scheme: light)"), q.matches ? ue.value = "dark" : de.matches ? ue.value = "light" : ue.value = null, q.addEventListener ? (q.addEventListener("change", Ee), de.addEventListener("change", we)) : q.addListener && (q.addListener(Ee), de.addListener(we));
}
function vt() {
  "removeEventListener" in q ? (q.removeEventListener("change", Ee), de.removeEventListener("change", we)) : "removeListener" in q && (q.removeListener(Ee), de.removeListener(we)), q = void 0, de = void 0;
}
let uo = true;
function Ct() {
  return pt ? (Be === 0 && gt(), uo && (uo = ar()) && (Co(() => {
    Be += 1;
  }), AA(() => {
    Be -= 1, Be === 0 && vt();
  })), ro(ue)) : ro(ue);
}
const ft = O({ name: "ChevronDownFilled", render() {
  return v("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, v("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" }));
} }), g = { neutralBase: "#000", neutralInvertBase: "#fff", neutralTextBase: "#fff", neutralPopover: "rgb(72, 72, 78)", neutralCard: "rgb(24, 24, 28)", neutralModal: "rgb(44, 44, 50)", neutralBody: "rgb(16, 16, 20)", alpha1: "0.9", alpha2: "0.82", alpha3: "0.52", alpha4: "0.38", alpha5: "0.28", alphaClose: "0.52", alphaDisabled: "0.38", alphaDisabledInput: "0.06", alphaPending: "0.09", alphaTablePending: "0.06", alphaTableStriped: "0.05", alphaPressed: "0.05", alphaAvatar: "0.18", alphaRail: "0.2", alphaProgressRail: "0.12", alphaBorder: "0.24", alphaDivider: "0.09", alphaInput: "0.1", alphaAction: "0.06", alphaTab: "0.04", alphaScrollbar: "0.2", alphaScrollbarHover: "0.3", alphaCode: "0.12", alphaTag: "0.2", primaryHover: "#7fe7c4", primaryDefault: "#63e2b7", primaryActive: "#5acea7", primarySuppl: "rgb(42, 148, 125)", infoHover: "#8acbec", infoDefault: "#70c0e8", infoActive: "#66afd3", infoSuppl: "rgb(56, 137, 197)", errorHover: "#e98b8b", errorDefault: "#e88080", errorActive: "#e57272", errorSuppl: "rgb(208, 58, 82)", warningHover: "#f5d599", warningDefault: "#f2c97d", warningActive: "#e6c260", warningSuppl: "rgb(240, 138, 0)", successHover: "#7fe7c4", successDefault: "#63e2b7", successActive: "#5acea7", successSuppl: "rgb(42, 148, 125)" }, bt = So(g.neutralBase), Ro = So(g.neutralInvertBase), xt = `rgba(${Ro.slice(0, 3).join(", ")}, `;
function B(e) {
  return `${xt + String(e)})`;
}
function It(e) {
  const o = Array.from(Ro);
  return o[3] = Number(e), be(bt, o);
}
const m = Object.assign(Object.assign({ name: "common" }, ir), { baseColor: g.neutralBase, primaryColor: g.primaryDefault, primaryColorHover: g.primaryHover, primaryColorPressed: g.primaryActive, primaryColorSuppl: g.primarySuppl, infoColor: g.infoDefault, infoColorHover: g.infoHover, infoColorPressed: g.infoActive, infoColorSuppl: g.infoSuppl, successColor: g.successDefault, successColorHover: g.successHover, successColorPressed: g.successActive, successColorSuppl: g.successSuppl, warningColor: g.warningDefault, warningColorHover: g.warningHover, warningColorPressed: g.warningActive, warningColorSuppl: g.warningSuppl, errorColor: g.errorDefault, errorColorHover: g.errorHover, errorColorPressed: g.errorActive, errorColorSuppl: g.errorSuppl, textColorBase: g.neutralTextBase, textColor1: B(g.alpha1), textColor2: B(g.alpha2), textColor3: B(g.alpha3), textColorDisabled: B(g.alpha4), placeholderColor: B(g.alpha4), placeholderColorDisabled: B(g.alpha5), iconColor: B(g.alpha4), iconColorDisabled: B(g.alpha5), iconColorHover: B(Number(g.alpha4) * 1.25), iconColorPressed: B(Number(g.alpha4) * 0.8), opacity1: g.alpha1, opacity2: g.alpha2, opacity3: g.alpha3, opacity4: g.alpha4, opacity5: g.alpha5, dividerColor: B(g.alphaDivider), borderColor: B(g.alphaBorder), closeIconColorHover: B(Number(g.alphaClose)), closeIconColor: B(Number(g.alphaClose)), closeIconColorPressed: B(Number(g.alphaClose)), closeColorHover: "rgba(255, 255, 255, .12)", closeColorPressed: "rgba(255, 255, 255, .08)", clearColor: B(g.alpha4), clearColorHover: T(B(g.alpha4), { alpha: 1.25 }), clearColorPressed: T(B(g.alpha4), { alpha: 0.8 }), scrollbarColor: B(g.alphaScrollbar), scrollbarColorHover: B(g.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: B(g.alphaProgressRail), railColor: B(g.alphaRail), popoverColor: g.neutralPopover, tableColor: g.neutralCard, cardColor: g.neutralCard, modalColor: g.neutralModal, bodyColor: g.neutralBody, tagColor: It(g.alphaTag), avatarColor: B(g.alphaAvatar), invertedColor: g.neutralBase, inputColor: B(g.alphaInput), codeColor: B(g.alphaCode), tabColor: B(g.alphaTab), actionColor: B(g.alphaAction), tableHeaderColor: B(g.alphaAction), hoverColor: B(g.alphaPending), tableColorHover: B(g.alphaTablePending), tableColorStriped: B(g.alphaTableStriped), pressedColor: B(g.alphaPressed), opacityDisabled: g.alphaDisabled, inputColorDisabled: B(g.alphaDisabledInput), buttonColor2: "rgba(255, 255, 255, .08)", buttonColor2Hover: "rgba(255, 255, 255, .12)", buttonColor2Pressed: "rgba(255, 255, 255, .08)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), Z = { name: "Scrollbar", common: m, self: sr }, pe = { name: "Empty", common: m, self: Sr }, xe = { name: "InternalSelectMenu", common: m, peers: { Scrollbar: Z, Empty: pe }, self: Br }, ge = { name: "Popover", common: m, self: cr }, Mo = { name: "Tag", common: m, self(e) {
  const { textColor2: o, primaryColorHover: A, primaryColorPressed: t, primaryColor: r, infoColor: s, successColor: l, warningColor: i, errorColor: n, baseColor: c, borderColor: a, tagColor: u, opacityDisabled: h, closeIconColor: b, closeIconColorHover: w, closeIconColorPressed: I, closeColorHover: y, closeColorPressed: M, borderRadiusSmall: L, fontSizeMini: j, fontSizeTiny: N, fontSizeSmall: J, fontSizeMedium: Y, heightMini: Q, heightTiny: X, heightSmall: U, heightMedium: Ae, buttonColor2Hover: _, buttonColor2Pressed: te, fontWeightStrong: ae } = e;
  return Object.assign(Object.assign({}, dr), { closeBorderRadius: L, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: Ae, borderRadius: L, opacityDisabled: h, fontSizeTiny: j, fontSizeSmall: N, fontSizeMedium: J, fontSizeLarge: Y, fontWeightStrong: ae, textColorCheckable: o, textColorHoverCheckable: o, textColorPressedCheckable: o, textColorChecked: c, colorCheckable: "#0000", colorHoverCheckable: _, colorPressedCheckable: te, colorChecked: r, colorCheckedHover: A, colorCheckedPressed: t, border: `1px solid ${a}`, textColor: o, color: u, colorBordered: "#0000", closeIconColor: b, closeIconColorHover: w, closeIconColorPressed: I, closeColorHover: y, closeColorPressed: M, borderPrimary: `1px solid ${C(r, { alpha: 0.3 })}`, textColorPrimary: r, colorPrimary: C(r, { alpha: 0.16 }), colorBorderedPrimary: "#0000", closeIconColorPrimary: T(r, { lightness: 0.7 }), closeIconColorHoverPrimary: T(r, { lightness: 0.7 }), closeIconColorPressedPrimary: T(r, { lightness: 0.7 }), closeColorHoverPrimary: C(r, { alpha: 0.16 }), closeColorPressedPrimary: C(r, { alpha: 0.12 }), borderInfo: `1px solid ${C(s, { alpha: 0.3 })}`, textColorInfo: s, colorInfo: C(s, { alpha: 0.16 }), colorBorderedInfo: "#0000", closeIconColorInfo: T(s, { alpha: 0.7 }), closeIconColorHoverInfo: T(s, { alpha: 0.7 }), closeIconColorPressedInfo: T(s, { alpha: 0.7 }), closeColorHoverInfo: C(s, { alpha: 0.16 }), closeColorPressedInfo: C(s, { alpha: 0.12 }), borderSuccess: `1px solid ${C(l, { alpha: 0.3 })}`, textColorSuccess: l, colorSuccess: C(l, { alpha: 0.16 }), colorBorderedSuccess: "#0000", closeIconColorSuccess: T(l, { alpha: 0.7 }), closeIconColorHoverSuccess: T(l, { alpha: 0.7 }), closeIconColorPressedSuccess: T(l, { alpha: 0.7 }), closeColorHoverSuccess: C(l, { alpha: 0.16 }), closeColorPressedSuccess: C(l, { alpha: 0.12 }), borderWarning: `1px solid ${C(i, { alpha: 0.3 })}`, textColorWarning: i, colorWarning: C(i, { alpha: 0.16 }), colorBorderedWarning: "#0000", closeIconColorWarning: T(i, { alpha: 0.7 }), closeIconColorHoverWarning: T(i, { alpha: 0.7 }), closeIconColorPressedWarning: T(i, { alpha: 0.7 }), closeColorHoverWarning: C(i, { alpha: 0.16 }), closeColorPressedWarning: C(i, { alpha: 0.11 }), borderError: `1px solid ${C(n, { alpha: 0.3 })}`, textColorError: n, colorError: C(n, { alpha: 0.16 }), colorBorderedError: "#0000", closeIconColorError: T(n, { alpha: 0.7 }), closeIconColorHoverError: T(n, { alpha: 0.7 }), closeIconColorPressedError: T(n, { alpha: 0.7 }), closeColorHoverError: C(n, { alpha: 0.16 }), closeColorPressedError: C(n, { alpha: 0.12 }) });
} }, Xe = { name: "InternalSelection", common: m, peers: { Popover: ge }, self(e) {
  const { borderRadius: o, textColor2: A, textColorDisabled: t, inputColor: r, inputColorDisabled: s, primaryColor: l, primaryColorHover: i, warningColor: n, warningColorHover: c, errorColor: a, errorColorHover: u, iconColor: h, iconColorDisabled: b, clearColor: w, clearColorHover: I, clearColorPressed: y, placeholderColor: M, placeholderColorDisabled: L, fontSizeTiny: j, fontSizeSmall: N, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: Ae, fontWeight: _ } = e;
  return Object.assign(Object.assign({}, yr), { fontWeight: _, fontSizeTiny: j, fontSizeSmall: N, fontSizeMedium: J, fontSizeLarge: Y, heightTiny: Q, heightSmall: X, heightMedium: U, heightLarge: Ae, borderRadius: o, textColor: A, textColorDisabled: t, placeholderColor: M, placeholderColorDisabled: L, color: r, colorDisabled: s, colorActive: C(l, { alpha: 0.1 }), border: "1px solid #0000", borderHover: `1px solid ${i}`, borderActive: `1px solid ${l}`, borderFocus: `1px solid ${i}`, boxShadowHover: "none", boxShadowActive: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, boxShadowFocus: `0 0 8px 0 ${C(l, { alpha: 0.4 })}`, caretColor: l, arrowColor: h, arrowColorDisabled: b, loadingColor: l, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${c}`, borderActiveWarning: `1px solid ${n}`, borderFocusWarning: `1px solid ${c}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, colorActiveWarning: C(n, { alpha: 0.1 }), caretColorWarning: n, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${u}`, borderActiveError: `1px solid ${a}`, borderFocusError: `1px solid ${u}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, colorActiveError: C(a, { alpha: 0.1 }), caretColorError: a, clearColor: w, clearColorHover: I, clearColorPressed: y });
} }, St = { name: "Alert", common: m, self(e) {
  const { lineHeight: o, borderRadius: A, fontWeightStrong: t, dividerColor: r, inputColor: s, textColor1: l, textColor2: i, closeColorHover: n, closeColorPressed: c, closeIconColor: a, closeIconColorHover: u, closeIconColorPressed: h, infoColorSuppl: b, successColorSuppl: w, warningColorSuppl: I, errorColorSuppl: y, fontSize: M } = e;
  return Object.assign(Object.assign({}, pA), { fontSize: M, lineHeight: o, titleFontWeight: t, borderRadius: A, border: `1px solid ${r}`, color: s, titleTextColor: l, iconColor: i, contentTextColor: i, closeBorderRadius: A, closeColorHover: n, closeColorPressed: c, closeIconColor: a, closeIconColorHover: u, closeIconColorPressed: h, borderInfo: `1px solid ${C(b, { alpha: 0.35 })}`, colorInfo: C(b, { alpha: 0.25 }), titleTextColorInfo: l, iconColorInfo: b, contentTextColorInfo: i, closeColorHoverInfo: n, closeColorPressedInfo: c, closeIconColorInfo: a, closeIconColorHoverInfo: u, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${C(w, { alpha: 0.35 })}`, colorSuccess: C(w, { alpha: 0.25 }), titleTextColorSuccess: l, iconColorSuccess: w, contentTextColorSuccess: i, closeColorHoverSuccess: n, closeColorPressedSuccess: c, closeIconColorSuccess: a, closeIconColorHoverSuccess: u, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${C(I, { alpha: 0.35 })}`, colorWarning: C(I, { alpha: 0.25 }), titleTextColorWarning: l, iconColorWarning: I, contentTextColorWarning: i, closeColorHoverWarning: n, closeColorPressedWarning: c, closeIconColorWarning: a, closeIconColorHoverWarning: u, closeIconColorPressedWarning: h, borderError: `1px solid ${C(y, { alpha: 0.35 })}`, colorError: C(y, { alpha: 0.25 }), titleTextColorError: l, iconColorError: y, contentTextColorError: i, closeColorHoverError: n, closeColorPressedError: c, closeIconColorError: a, closeIconColorHoverError: u, closeIconColorPressedError: h });
} }, Bt = { name: "Anchor", common: m, self: Rr }, $ = { name: "Input", common: m, self(e) {
  const { textColor2: o, textColor3: A, textColorDisabled: t, primaryColor: r, primaryColorHover: s, inputColor: l, inputColorDisabled: i, warningColor: n, warningColorHover: c, errorColor: a, errorColorHover: u, borderRadius: h, lineHeight: b, fontSizeTiny: w, fontSizeSmall: I, fontSizeMedium: y, fontSizeLarge: M, heightTiny: L, heightSmall: j, heightMedium: N, heightLarge: J, clearColor: Y, clearColorHover: Q, clearColorPressed: X, placeholderColor: U, placeholderColorDisabled: Ae, iconColor: _, iconColorDisabled: te, iconColorHover: ae, iconColorPressed: ne, fontWeight: Ce } = e;
  return Object.assign(Object.assign({}, Fr), { fontWeight: Ce, countTextColorDisabled: t, countTextColor: A, heightTiny: L, heightSmall: j, heightMedium: N, heightLarge: J, fontSizeTiny: w, fontSizeSmall: I, fontSizeMedium: y, fontSizeLarge: M, lineHeight: b, lineHeightTextarea: b, borderRadius: h, iconSize: "16px", groupLabelColor: l, textColor: o, textColorDisabled: t, textDecorationColor: o, groupLabelTextColor: o, caretColor: r, placeholderColor: U, placeholderColorDisabled: Ae, color: l, colorDisabled: i, colorFocus: C(r, { alpha: 0.1 }), groupLabelBorder: "1px solid #0000", border: "1px solid #0000", borderHover: `1px solid ${s}`, borderDisabled: "1px solid #0000", borderFocus: `1px solid ${s}`, boxShadowFocus: `0 0 8px 0 ${C(r, { alpha: 0.3 })}`, loadingColor: r, loadingColorWarning: n, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${c}`, colorFocusWarning: C(n, { alpha: 0.1 }), borderFocusWarning: `1px solid ${c}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.3 })}`, caretColorWarning: n, loadingColorError: a, borderError: `1px solid ${a}`, borderHoverError: `1px solid ${u}`, colorFocusError: C(a, { alpha: 0.1 }), borderFocusError: `1px solid ${u}`, boxShadowFocusError: `0 0 8px 0 ${C(a, { alpha: 0.3 })}`, caretColorError: a, clearColor: Y, clearColorHover: Q, clearColorPressed: X, iconColor: _, iconColorDisabled: te, iconColorHover: ae, iconColorPressed: ne, suffixTextColor: o });
} }, yt = { name: "AutoComplete", common: m, peers: { InternalSelectMenu: xe, Input: $ }, self: gA }, Ho = { name: "Avatar", common: m, self: vA }, kt = { name: "AvatarGroup", common: m, peers: { Avatar: Ho }, self: CA }, Et = { name: "BackTop", common: m, self(e) {
  const { popoverColor: o, textColor2: A, primaryColorHover: t, primaryColorPressed: r } = e;
  return Object.assign(Object.assign({}, fA), { color: o, textColor: A, iconColor: A, iconColorHover: t, iconColorPressed: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
} }, wt = { name: "Badge", common: m, self(e) {
  const { errorColorSuppl: o, infoColorSuppl: A, successColorSuppl: t, warningColorSuppl: r, fontFamily: s } = e;
  return { color: o, colorInfo: A, colorSuccess: t, colorError: o, colorWarning: r, fontSize: "12px", fontFamily: s };
} }, Dt = { name: "Breadcrumb", common: m, self: bA }, G = { name: "Button", common: m, self(e) {
  const o = Lr(e);
  return o.waveOpacity = "0.8", o.colorOpacitySecondary = "0.16", o.colorOpacitySecondaryHover = "0.2", o.colorOpacitySecondaryPressed = "0.12", o;
} }, zt = { name: "Calendar", common: m, peers: { Button: G }, self: xA }, Qo = { name: "Card", common: m, self(e) {
  const o = mr(e), { cardColor: A, modalColor: t, popoverColor: r } = e;
  return o.colorEmbedded = A, o.colorEmbeddedModal = t, o.colorEmbeddedPopover = r, o;
} }, Pt = { name: "Carousel", common: m, self: IA }, ve = { name: "Checkbox", common: m, self(e) {
  const { cardColor: o } = e, A = SA(e);
  return A.color = "#0000", A.checkMarkColor = o, A;
} }, Rt = { name: "Cascader", common: m, peers: { InternalSelectMenu: xe, InternalSelection: Xe, Scrollbar: Z, Checkbox: ve, Empty: kr }, self: BA }, Oo = { name: "Code", common: m, self(e) {
  const { textColor2: o, fontSize: A, fontWeightStrong: t, textColor3: r } = e;
  return { textColor: o, fontSize: A, fontWeightStrong: t, "mono-3": "#5c6370", "hue-1": "#56b6c2", "hue-2": "#61aeee", "hue-3": "#c678dd", "hue-4": "#98c379", "hue-5": "#e06c75", "hue-5-2": "#be5046", "hue-6": "#d19a66", "hue-6-2": "#e6c07b", lineNumberTextColor: r };
} }, Mt = { name: "Collapse", common: m, self: xr }, Ht = { name: "CollapseTransition", common: m, self: yA }, Qt = { name: "ColorPicker", common: m, peers: { Input: $, Button: G }, self: Vr }, To = { name: "Popselect", common: m, peers: { Popover: ge, InternalSelectMenu: xe } }, Fo = { name: "Select", common: m, peers: { InternalSelection: Xe, InternalSelectMenu: xe }, self: Er }, Lo = { name: "Pagination", common: m, peers: { Select: Fo, Input: $, Popselect: To }, self(e) {
  const { primaryColor: o, opacity3: A } = e, t = C(o, { alpha: Number(A) }), r = kA(e);
  return r.itemBorderActive = `1px solid ${t}`, r.itemBorderDisabled = "1px solid #0000", r;
} }, qe = { name: "Dropdown", common: m, peers: { Popover: ge }, self(e) {
  const { primaryColorSuppl: o, primaryColor: A, popoverColor: t } = e, r = EA(e);
  return r.colorInverted = t, r.optionColorActive = C(A, { alpha: 0.15 }), r.optionColorActiveInverted = o, r.optionColorHoverInverted = o, r;
} }, Re = { name: "Tooltip", common: m, peers: { Popover: ge }, self(e) {
  const { borderRadius: o, boxShadow2: A, popoverColor: t, textColor2: r } = e;
  return Object.assign(Object.assign({}, Mr), { borderRadius: o, boxShadow: A, color: t, textColor: r });
} }, Vo = { name: "Ellipsis", common: m, peers: { Tooltip: Re } }, jo = { name: "Radio", common: m, self(e) {
  const { borderColor: o, primaryColor: A, baseColor: t, textColorDisabled: r, inputColorDisabled: s, textColor2: l, opacityDisabled: i, borderRadius: n, fontSizeSmall: c, fontSizeMedium: a, fontSizeLarge: u, heightSmall: h, heightMedium: b, heightLarge: w, lineHeight: I } = e;
  return Object.assign(Object.assign({}, ct), { labelLineHeight: I, buttonHeightSmall: h, buttonHeightMedium: b, buttonHeightLarge: w, fontSizeSmall: c, fontSizeMedium: a, fontSizeLarge: u, boxShadow: `inset 0 0 0 1px ${o}`, boxShadowActive: `inset 0 0 0 1px ${A}`, boxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, boxShadowHover: `inset 0 0 0 1px ${A}`, boxShadowDisabled: `inset 0 0 0 1px ${o}`, color: "#0000", colorDisabled: s, colorActive: "#0000", textColor: l, textColorDisabled: r, dotColorActive: A, dotColorDisabled: o, buttonBorderColor: o, buttonBorderColorActive: A, buttonBorderColorHover: A, buttonColor: "#0000", buttonColorActive: A, buttonTextColor: l, buttonTextColorActive: t, buttonTextColorHover: A, opacityDisabled: i, buttonBoxShadowFocus: `inset 0 0 0 1px ${A}, 0 0 0 2px ${C(A, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px ${A}`, buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: n });
} }, Ot = { name: "DataTable", common: m, peers: { Button: G, Checkbox: ve, Radio: jo, Pagination: Lo, Scrollbar: Z, Empty: pe, Popover: ge, Ellipsis: Vo, Dropdown: qe }, self(e) {
  const o = wA(e);
  return o.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", o.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", o;
} }, Tt = { name: "Icon", common: m, self: Qr }, No = { name: "TimePicker", common: m, peers: { Scrollbar: Z, Button: G, Input: $ }, self: DA }, Ft = { name: "DatePicker", common: m, peers: { Input: $, Button: G, TimePicker: No, Scrollbar: Z }, self(e) {
  const { popoverColor: o, hoverColor: A, primaryColor: t } = e, r = zA(e);
  return r.itemColorDisabled = be(o, A), r.itemColorIncluded = C(t, { alpha: 0.15 }), r.itemColorHover = be(o, A), r;
} }, Lt = { name: "Descriptions", common: m, self: PA }, Wo = { name: "Dialog", common: m, peers: { Button: G }, self: jr }, Vt = { name: "Modal", common: m, peers: { Scrollbar: Z, Dialog: Wo, Card: Qo }, self: Nr }, jt = he("n-modal-provider"), Nt = he("n-modal-api"), Wt = he("n-modal-reactive-list"), Zt = Object.assign(Object.assign({}, Zr), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, internalStyle: [String, Object], maskClosable: { type: Boolean, default: true }, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function, draggable: [Boolean, Object] }), Gt = O({ name: "DialogEnvironment", props: Object.assign(Object.assign({}, Zt), { internalKey: { type: String, required: true }, to: [String, Object], onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = W(true);
  function A() {
    const { onInternalAfterLeave: a, internalKey: u, onAfterLeave: h } = e;
    a && a(u), h && h();
  }
  function t(a) {
    const { onPositiveClick: u } = e;
    u ? Promise.resolve(u(a)).then((h) => {
      h !== false && n();
    }) : n();
  }
  function r(a) {
    const { onNegativeClick: u } = e;
    u ? Promise.resolve(u(a)).then((h) => {
      h !== false && n();
    }) : n();
  }
  function s() {
    const { onClose: a } = e;
    a ? Promise.resolve(a()).then((u) => {
      u !== false && n();
    }) : n();
  }
  function l(a) {
    const { onMaskClick: u, maskClosable: h } = e;
    u && (u(a), h && n());
  }
  function i() {
    const { onEsc: a } = e;
    a && a();
  }
  function n() {
    o.value = false;
  }
  function c(a) {
    o.value = a;
  }
  return { show: o, hide: n, handleUpdateShow: c, handleAfterLeave: A, handleCloseClick: s, handleNegativeClick: r, handlePositiveClick: t, handleMaskClick: l, handleEsc: i };
}, render() {
  const { handlePositiveClick: e, handleUpdateShow: o, handleNegativeClick: A, handleCloseClick: t, handleAfterLeave: r, handleMaskClick: s, handleEsc: l, to: i, maskClosable: n, show: c } = this;
  return v(wo, { show: c, onUpdateShow: o, onMaskClick: s, onEsc: l, to: i, maskClosable: n, onAfterEnter: this.onAfterEnter, onAfterLeave: r, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, draggable: this.draggable, internalAppear: true, internalDialog: true }, { default: ({ draggableClass: a }) => v(Wr, Object.assign({}, ke(this.$props, Gr), { titleClass: fo([this.titleClass, a]), style: this.internalStyle, onClose: t, onNegativeClick: A, onPositiveClick: e })) });
} }), $t = { injectionKey: String, to: [String, Object] }, Yt = O({ name: "DialogProvider", props: $t, setup() {
  const e = W([]), o = {};
  function A(i = {}) {
    const n = ze(), c = $e(Object.assign(Object.assign({}, i), { key: n, destroy: () => {
      var a;
      (a = o[`n-dialog-${n}`]) === null || a === void 0 || a.hide();
    } }));
    return e.value.push(c), c;
  }
  const t = ["info", "success", "warning", "error"].map((i) => (n) => A(Object.assign(Object.assign({}, n), { type: i })));
  function r(i) {
    const { value: n } = e;
    n.splice(n.findIndex((c) => c.key === i), 1);
  }
  function s() {
    Object.values(o).forEach((i) => {
      i == null ? void 0 : i.hide();
    });
  }
  const l = { create: A, destroyAll: s, info: t[0], success: t[1], warning: t[2], error: t[3] };
  return F(Yr, l), F($r, { clickedRef: zo(64), clickedPositionRef: Do() }), F(Kr, e), Object.assign(Object.assign({}, l), { dialogList: e, dialogInstRefs: o, handleAfterLeave: r });
}, render() {
  var e, o;
  return v(De, null, [this.dialogList.map((A) => v(Gt, Je(A, ["destroy", "style"], { internalStyle: A.style, to: this.to, ref: (t) => {
    t === null ? delete this.dialogInstRefs[`n-dialog-${A.key}`] : this.dialogInstRefs[`n-dialog-${A.key}`] = t;
  }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }))), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), Kt = { name: "LoadingBar", common: m, self(e) {
  const { primaryColor: o } = e;
  return { colorError: "red", colorLoading: o, height: "2px" };
} }, Jt = { name: "Message", common: m, self: RA }, Zo = { icon: Function, type: { type: String, default: "info" }, content: [String, Number, Function], showIcon: { type: Boolean, default: true }, closable: Boolean, keepAliveOnHover: Boolean, onClose: Function, onMouseenter: Function, onMouseleave: Function }, Xt = D([E("message-wrapper", `
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
 `, [wr()])]), S("close", `
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
 `)])]), qt = { info: () => v(Ur, null), success: () => v(qr, null), warning: () => v(Xr, null), error: () => v(Jr, null), default: () => null }, Ut = O({ name: "Message", props: Object.assign(Object.assign({}, Zo), { render: Function }), setup(e) {
  const { inlineThemeDisabled: o, mergedRtlRef: A } = Ye(e), { props: t, mergedClsPrefixRef: r } = re(Po), s = hr("Message", A, r), l = Pe("Message", "-message", Xt, MA, t, r), i = z(() => {
    const { type: c } = e, { common: { cubicBezierEaseInOut: a }, self: { padding: u, margin: h, maxWidth: b, iconMargin: w, closeMargin: I, closeSize: y, iconSize: M, fontSize: L, lineHeight: j, borderRadius: N, iconColorInfo: J, iconColorSuccess: Y, iconColorWarning: Q, iconColorError: X, iconColorLoading: U, closeIconSize: Ae, closeBorderRadius: _, [le("textColor", c)]: te, [le("boxShadow", c)]: ae, [le("color", c)]: ne, [le("closeColorHover", c)]: Ce, [le("closeColorPressed", c)]: Me, [le("closeIconColor", c)]: He, [le("closeIconColorPressed", c)]: Qe, [le("closeIconColorHover", c)]: Oe } } = l.value;
    return { "--n-bezier": a, "--n-margin": h, "--n-padding": u, "--n-max-width": b, "--n-font-size": L, "--n-icon-margin": w, "--n-icon-size": M, "--n-close-icon-size": Ae, "--n-close-border-radius": _, "--n-close-size": y, "--n-close-margin": I, "--n-text-color": te, "--n-color": ne, "--n-box-shadow": ae, "--n-icon-color-info": J, "--n-icon-color-success": Y, "--n-icon-color-warning": Q, "--n-icon-color-error": X, "--n-icon-color-loading": U, "--n-close-color-hover": Ce, "--n-close-color-pressed": Me, "--n-close-icon-color": He, "--n-close-icon-color-pressed": Qe, "--n-close-icon-color-hover": Oe, "--n-line-height": j, "--n-border-radius": N };
  }), n = o ? Bo("message", z(() => e.type[0]), i, {}) : void 0;
  return { mergedClsPrefix: r, rtlEnabled: s, messageProviderProps: t, handleClose() {
    var c;
    (c = e.onClose) === null || c === void 0 || c.call(e);
  }, cssVars: o ? void 0 : i, themeClass: n == null ? void 0 : n.themeClass, onRender: n == null ? void 0 : n.onRender, placement: t.placement };
}, render() {
  const { render: e, type: o, closable: A, content: t, mergedClsPrefix: r, cssVars: s, themeClass: l, onRender: i, icon: n, handleClose: c, showIcon: a } = this;
  i == null ? void 0 : i();
  let u;
  return v("div", { class: [`${r}-message-wrapper`, l], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [{ alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end" }, s] }, e ? e(this.$props) : v("div", { class: [`${r}-message ${r}-message--${o}-type`, this.rtlEnabled && `${r}-message--rtl`] }, (u = _t(n, o, r)) && a ? v("div", { class: `${r}-message__icon ${r}-message__icon--${o}-type` }, v(Dr, null, { default: () => u })) : null, v("div", { class: `${r}-message__content` }, me(t)), A ? v(ur, { clsPrefix: r, class: `${r}-message__close`, onClick: c, absolute: true }) : null));
} });
function _t(e, o, A) {
  if (typeof e == "function") return e();
  {
    const t = o === "loading" ? v(zr, { clsPrefix: A, strokeWidth: 24, scale: 0.85 }) : qt[o]();
    return t ? v(yo, { clsPrefix: A, key: o }, { default: () => t }) : null;
  }
}
const en = O({ name: "MessageEnvironment", props: Object.assign(Object.assign({}, Zo), { duration: { type: Number, default: 3e3 }, onAfterLeave: Function, onLeave: Function, internalKey: { type: String, required: true }, onInternalAfterLeave: Function, onHide: Function, onAfterHide: Function }), setup(e) {
  let o = null;
  const A = W(true);
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
  function s(a) {
    a.currentTarget === a.target && t();
  }
  function l() {
    const { onHide: a } = e;
    A.value = false, o && (window.clearTimeout(o), o = null), a && a();
  }
  function i() {
    const { onClose: a } = e;
    a && a(), l();
  }
  function n() {
    const { onAfterLeave: a, onInternalAfterLeave: u, onAfterHide: h, internalKey: b } = e;
    a && a(), u && u(b), h && h();
  }
  function c() {
    l();
  }
  return { show: A, hide: l, handleClose: i, handleAfterLeave: n, handleMouseleave: s, handleMouseenter: r, deactivate: c };
}, render() {
  return v(Eo, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, { default: () => [this.show ? v(Ut, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null] });
} }), on = Object.assign(Object.assign({}, Pe.props), { to: [String, Object], duration: { type: Number, default: 3e3 }, keepAliveOnHover: Boolean, max: Number, placement: { type: String, default: "top" }, closable: Boolean, containerClass: String, containerStyle: [String, Object] }), An = O({ name: "MessageProvider", props: on, setup(e) {
  const { mergedClsPrefixRef: o } = Ye(e), A = W([]), t = W({}), r = { create(n, c) {
    return s(n, Object.assign({ type: "default" }, c));
  }, info(n, c) {
    return s(n, Object.assign(Object.assign({}, c), { type: "info" }));
  }, success(n, c) {
    return s(n, Object.assign(Object.assign({}, c), { type: "success" }));
  }, warning(n, c) {
    return s(n, Object.assign(Object.assign({}, c), { type: "warning" }));
  }, error(n, c) {
    return s(n, Object.assign(Object.assign({}, c), { type: "error" }));
  }, loading(n, c) {
    return s(n, Object.assign(Object.assign({}, c), { type: "loading" }));
  }, destroyAll: i };
  F(Po, { props: e, mergedClsPrefixRef: o }), F(_r, r);
  function s(n, c) {
    const a = ze(), u = $e(Object.assign(Object.assign({}, c), { content: n, key: a, destroy: () => {
      var b;
      (b = t.value[a]) === null || b === void 0 || b.hide();
    } })), { max: h } = e;
    return h && A.value.length >= h && A.value.shift(), A.value.push(u), u;
  }
  function l(n) {
    A.value.splice(A.value.findIndex((c) => c.key === n), 1), delete t.value[n];
  }
  function i() {
    Object.values(t.value).forEach((n) => {
      n.hide();
    });
  }
  return Object.assign({ mergedClsPrefix: o, messageRefs: t, messageList: A, handleAfterLeave: l }, r);
}, render() {
  var e, o, A;
  return v(De, null, (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e), this.messageList.length ? v(rA, { to: (A = this.to) !== null && A !== void 0 ? A : "body" }, v("div", { class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass], key: "message-container", style: this.containerStyle }, this.messageList.map((t) => v(en, Object.assign({ ref: (r) => {
    r && (this.messageRefs[t.key] = r);
  }, internalKey: t.key, onInternalAfterLeave: this.handleAfterLeave }, Je(t, ["destroy"], void 0), { duration: t.duration === void 0 ? this.duration : t.duration, keepAliveOnHover: t.keepAliveOnHover === void 0 ? this.keepAliveOnHover : t.keepAliveOnHover, closable: t.closable === void 0 ? this.closable : t.closable }))))) : null);
} }), rn = O({ name: "ModalEnvironment", props: Object.assign(Object.assign({}, et), { internalKey: { type: String, required: true }, onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = W(true);
  function A() {
    const { onInternalAfterLeave: a, internalKey: u, onAfterLeave: h } = e;
    a && a(u), h && h();
  }
  function t() {
    const { onPositiveClick: a } = e;
    a ? Promise.resolve(a()).then((u) => {
      u !== false && n();
    }) : n();
  }
  function r() {
    const { onNegativeClick: a } = e;
    a ? Promise.resolve(a()).then((u) => {
      u !== false && n();
    }) : n();
  }
  function s() {
    const { onClose: a } = e;
    a ? Promise.resolve(a()).then((u) => {
      u !== false && n();
    }) : n();
  }
  function l(a) {
    const { onMaskClick: u, maskClosable: h } = e;
    u && (u(a), h && n());
  }
  function i() {
    const { onEsc: a } = e;
    a && a();
  }
  function n() {
    o.value = false;
  }
  function c(a) {
    o.value = a;
  }
  return { show: o, hide: n, handleUpdateShow: c, handleAfterLeave: A, handleCloseClick: s, handleNegativeClick: r, handlePositiveClick: t, handleMaskClick: l, handleEsc: i };
}, render() {
  const { handleUpdateShow: e, handleAfterLeave: o, handleMaskClick: A, handleEsc: t, show: r } = this;
  return v(wo, Object.assign({}, this.$props, { show: r, onUpdateShow: e, onMaskClick: A, onEsc: t, onAfterLeave: o, internalAppear: true, internalModal: true }));
} }), tn = { to: [String, Object] }, nn = O({ name: "ModalProvider", props: tn, setup() {
  const e = W([]), o = {};
  function A(l = {}) {
    const i = ze(), n = $e(Object.assign(Object.assign({}, l), { key: i, destroy: () => {
      var c;
      (c = o[`n-modal-${i}`]) === null || c === void 0 || c.hide();
    } }));
    return e.value.push(n), n;
  }
  function t(l) {
    const { value: i } = e;
    i.splice(i.findIndex((n) => n.key === l), 1);
  }
  function r() {
    Object.values(o).forEach((l) => {
      l == null ? void 0 : l.hide();
    });
  }
  const s = { create: A, destroyAll: r };
  return F(Nt, s), F(jt, { clickedRef: zo(64), clickedPositionRef: Do() }), F(Wt, e), Object.assign(Object.assign({}, s), { modalList: e, modalInstRefs: o, handleAfterLeave: t });
}, render() {
  var e, o;
  return v(De, null, [this.modalList.map((A) => {
    var t;
    return v(rn, Je(A, ["destroy"], { to: (t = A.to) !== null && t !== void 0 ? t : this.to, ref: (r) => {
      r === null ? delete this.modalInstRefs[`n-modal-${A.key}`] : this.modalInstRefs[`n-modal-${A.key}`] = r;
    }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }));
  }), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), ln = { name: "Notification", common: m, peers: { Scrollbar: Z }, self: HA }, an = { name: "Divider", common: m, self: Ir }, sn = { name: "Drawer", common: m, peers: { Scrollbar: Z }, self: ot }, cn = { name: "DynamicInput", common: m, peers: { Input: $, Button: G }, self() {
  return QA;
} }, Go = { name: "Space", self() {
  return Or;
} }, dn = { name: "DynamicTags", common: m, peers: { Input: $, Button: G, Tag: Mo, Space: Go }, self() {
  return { inputWidth: "64px" };
} }, mn = { name: "Element", common: m }, un = { name: "Flex", self() {
  return At;
} }, hn = { name: "ButtonGroup", common: m }, pn = { name: "Form", common: m, self: rt }, gn = { name: "GradientText", common: m, self(e) {
  const { primaryColor: o, successColor: A, warningColor: t, errorColor: r, infoColor: s, primaryColorSuppl: l, successColorSuppl: i, warningColorSuppl: n, errorColorSuppl: c, infoColorSuppl: a, fontWeightStrong: u } = e;
  return { fontWeight: u, rotate: "252deg", colorStartPrimary: o, colorEndPrimary: l, colorStartInfo: s, colorEndInfo: a, colorStartWarning: t, colorEndWarning: n, colorStartError: r, colorEndError: c, colorStartSuccess: A, colorEndSuccess: i };
} }, vn = { name: "InputNumber", common: m, peers: { Button: G, Input: $ }, self(e) {
  const { textColorDisabled: o } = e;
  return { iconColorDisabled: o };
} }, Cn = { name: "InputOtp", common: m, peers: { Input: $ }, self: OA }, fn = { name: "Layout", common: m, peers: { Scrollbar: Z }, self(e) {
  const { textColor2: o, bodyColor: A, popoverColor: t, cardColor: r, dividerColor: s, scrollbarColor: l, scrollbarColorHover: i } = e;
  return { textColor: o, textColorInverted: o, color: A, colorEmbedded: A, headerColor: r, headerColorInverted: r, footerColor: r, footerColorInverted: r, headerBorderColor: s, headerBorderColorInverted: s, footerBorderColor: s, footerBorderColorInverted: s, siderBorderColor: s, siderBorderColorInverted: s, siderColor: r, siderColorInverted: r, siderToggleButtonBorder: "1px solid transparent", siderToggleButtonColor: t, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: be(A, l), siderToggleBarColorHover: be(A, i), __invertScrollbar: "false" };
} }, bn = { name: "Row", common: m }, xn = { name: "List", common: m, self: pr }, In = { name: "Log", common: m, peers: { Scrollbar: Z, Code: Oo }, self(e) {
  const { textColor2: o, inputColor: A, fontSize: t, primaryColor: r } = e;
  return { loaderFontSize: t, loaderTextColor: o, loaderColor: A, loaderBorder: "1px solid #0000", loadingColor: r };
} }, Sn = { name: "Mention", common: m, peers: { InternalSelectMenu: xe, Input: $ }, self(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
} }, Bn = { name: "Menu", common: m, peers: { Tooltip: Re, Dropdown: qe }, self(e) {
  const { primaryColor: o, primaryColorSuppl: A } = e, t = TA(e);
  return t.itemColorActive = C(o, { alpha: 0.15 }), t.itemColorActiveHover = C(o, { alpha: 0.15 }), t.itemColorActiveCollapsed = C(o, { alpha: 0.15 }), t.itemColorActiveInverted = A, t.itemColorActiveHoverInverted = A, t.itemColorActiveCollapsedInverted = A, t;
} }, yn = { name: "PageHeader", common: m, self: FA }, kn = { name: "Popconfirm", common: m, peers: { Button: G, Popover: ge }, self: tt }, $o = { name: "Progress", common: m, self(e) {
  const o = LA(e);
  return o.textColorLineInner = "rgb(0, 0, 0)", o.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", o;
} }, En = { name: "Rate", common: m, self(e) {
  const { railColor: o } = e;
  return { itemColor: o, itemColorActive: "#CCAA33", itemSize: "20px", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
} }, wn = { name: "Result", common: m, self: VA }, Dn = { name: "Slider", common: m, self(e) {
  const o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: A, modalColor: t, primaryColorSuppl: r, popoverColor: s, textColor2: l, cardColor: i, borderRadius: n, fontSize: c, opacityDisabled: a } = e;
  return Object.assign(Object.assign({}, jA), { fontSize: c, markFontSize: c, railColor: A, railColorHover: A, fillColor: r, fillColorHover: r, opacityDisabled: a, handleColor: "#FFF", dotColor: i, dotColorModal: t, dotColorPopover: s, handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", indicatorColor: s, indicatorBoxShadow: o, indicatorTextColor: l, indicatorBorderRadius: n, dotBorder: `2px solid ${A}`, dotBorderActive: `2px solid ${r}`, dotBoxShadow: "" });
} }, zn = { name: "Spin", common: m, self: NA }, Pn = { name: "Statistic", common: m, self: WA }, Rn = { name: "Steps", common: m, self: ZA }, Mn = { name: "Switch", common: m, self(e) {
  const { primaryColorSuppl: o, opacityDisabled: A, borderRadius: t, primaryColor: r, textColor2: s, baseColor: l } = e;
  return Object.assign(Object.assign({}, Pr), { iconColor: l, textColor: s, loadingColor: o, opacityDisabled: A, railColor: "rgba(255, 255, 255, .20)", railColorActive: o, buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", buttonColor: "#FFF", railBorderRadiusSmall: t, railBorderRadiusMedium: t, railBorderRadiusLarge: t, buttonBorderRadiusSmall: t, buttonBorderRadiusMedium: t, buttonBorderRadiusLarge: t, boxShadowFocus: `0 0 8px 0 ${C(r, { alpha: 0.3 })}` });
} }, Hn = { name: "Table", common: m, self: GA }, Qn = { name: "Tabs", common: m, self(e) {
  const o = nt(e), { inputColor: A } = e;
  return o.colorSegment = A, o.tabColorSegment = A, o;
} }, On = { name: "Thing", common: m, self: $A }, Tn = { name: "Timeline", common: m, self(e) {
  const { textColor3: o, infoColorSuppl: A, errorColorSuppl: t, successColorSuppl: r, warningColorSuppl: s, textColor1: l, textColor2: i, railColor: n, fontWeightStrong: c, fontSize: a } = e;
  return Object.assign(Object.assign({}, YA), { contentFontSize: a, titleFontWeight: c, circleBorder: `2px solid ${o}`, circleBorderInfo: `2px solid ${A}`, circleBorderError: `2px solid ${t}`, circleBorderSuccess: `2px solid ${r}`, circleBorderWarning: `2px solid ${s}`, iconColor: o, iconColorInfo: A, iconColorError: t, iconColorSuccess: r, iconColorWarning: s, titleTextColor: l, contentTextColor: i, metaTextColor: o, lineColor: n });
} }, Fn = { name: "Transfer", common: m, peers: { Checkbox: ve, Scrollbar: Z, Input: $, Empty: pe, Button: G }, self(e) {
  const { fontWeight: o, fontSizeLarge: A, fontSizeMedium: t, fontSizeSmall: r, heightLarge: s, heightMedium: l, borderRadius: i, inputColor: n, tableHeaderColor: c, textColor1: a, textColorDisabled: u, textColor2: h, textColor3: b, hoverColor: w, closeColorHover: I, closeColorPressed: y, closeIconColor: M, closeIconColorHover: L, closeIconColorPressed: j, dividerColor: N } = e;
  return Object.assign(Object.assign({}, KA), { itemHeightSmall: l, itemHeightMedium: l, itemHeightLarge: s, fontSizeSmall: r, fontSizeMedium: t, fontSizeLarge: A, borderRadius: i, dividerColor: N, borderColor: "#0000", listColor: n, headerColor: c, titleTextColor: a, titleTextColorDisabled: u, extraTextColor: b, extraTextColorDisabled: u, itemTextColor: h, itemTextColorDisabled: u, itemColorPending: w, titleFontWeight: o, closeColorHover: I, closeColorPressed: y, closeIconColor: M, closeIconColorHover: L, closeIconColorPressed: j });
} }, Yo = { name: "Tree", common: m, peers: { Checkbox: ve, Scrollbar: Z, Empty: pe }, self(e) {
  const { primaryColor: o } = e, A = JA(e);
  return A.nodeColorActive = C(o, { alpha: 0.15 }), A;
} }, Ln = { name: "TreeSelect", common: m, peers: { Tree: Yo, Empty: pe, InternalSelection: Xe } }, Vn = { name: "Typography", common: m, self: Tr }, jn = { name: "Upload", common: m, peers: { Button: G, Progress: $o }, self(e) {
  const { errorColor: o } = e, A = XA(e);
  return A.itemColorHoverError = C(o, { alpha: 0.09 }), A;
} }, Nn = { name: "Watermark", common: m, self(e) {
  const { fontFamily: o } = e;
  return { fontFamily: o };
} }, Wn = { name: "FloatButton", common: m, self(e) {
  const { popoverColor: o, textColor2: A, buttonColor2Hover: t, buttonColor2Pressed: r, primaryColor: s, primaryColorHover: l, primaryColorPressed: i, baseColor: n, borderRadius: c } = e;
  return { color: o, textColor: A, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)", colorHover: t, colorPressed: r, colorPrimary: s, colorPrimaryHover: l, colorPrimaryPressed: i, textColorPrimary: n, borderRadiusSquare: c };
} }, Zn = O({ name: "GlobalStyle", setup() {
  if (typeof document > "u") return;
  const e = re(gr, null), { body: o } = document, { style: A } = o;
  let t = false, r = true;
  Co(() => {
    je(() => {
      var s, l;
      const { textColor2: i, fontSize: n, fontFamily: c, bodyColor: a, cubicBezierEaseInOut: u, lineHeight: h } = e ? vr({}, ((s = e.mergedThemeRef.value) === null || s === void 0 ? void 0 : s.common) || io, (l = e.mergedThemeOverridesRef.value) === null || l === void 0 ? void 0 : l.common) : io;
      if (t || !o.hasAttribute("n-styled")) {
        A.setProperty("-webkit-text-size-adjust", "100%"), A.setProperty("-webkit-tap-highlight-color", "transparent"), A.padding = "0", A.margin = "0", A.backgroundColor = a, A.color = i, A.fontSize = n, A.fontFamily = c, A.lineHeight = h;
        const b = `color .3s ${u}, background-color .3s ${u}`;
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
} }), Gn = { name: "IconWrapper", common: m, self: qA }, $n = { name: "Image", common: m, peers: { Tooltip: Re }, self: (e) => {
  const { textColor2: o } = e;
  return { toolbarIconColor: o, toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
} }, Yn = he("n-layout-sider"), Kn = { name: "Transfer", common: m, peers: { Checkbox: ve, Scrollbar: Z, Input: $, Empty: pe, Button: G }, self(e) {
  const { iconColorDisabled: o, iconColor: A, fontWeight: t, fontSizeLarge: r, fontSizeMedium: s, fontSizeSmall: l, heightLarge: i, heightMedium: n, heightSmall: c, borderRadius: a, inputColor: u, tableHeaderColor: h, textColor1: b, textColorDisabled: w, textColor2: I, hoverColor: y } = e;
  return Object.assign(Object.assign({}, UA), { itemHeightSmall: c, itemHeightMedium: n, itemHeightLarge: i, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: r, borderRadius: a, borderColor: "#0000", listColor: u, headerColor: h, titleTextColor: b, titleTextColorDisabled: w, extraTextColor: I, filterDividerColor: "#0000", itemTextColor: I, itemTextColorDisabled: w, itemColorPending: y, titleFontWeight: t, iconColor: A, iconColorDisabled: o });
} }, Jn = { name: "Marquee", common: m, self: _A }, Ie = he("n-menu"), Ue = he("n-submenu"), _e = he("n-menu-item-group"), ho = [D("&::before", "background-color: var(--n-item-color-hover);"), S("arrow", `
 color: var(--n-arrow-color-hover);
 `), S("icon", `
 color: var(--n-item-icon-color-hover);
 `), E("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [D("a", `
 color: var(--n-item-text-color-hover);
 `), S("extra", `
 color: var(--n-item-text-color-hover);
 `)])], po = [S("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), E("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [D("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), S("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])], Xn = D([E("menu", `
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
 `, [D("&::before", "display: none;"), R("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), E("menu-item-content", [R("selected", [S("icon", "color: var(--n-item-icon-color-active-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [D("a", "color: var(--n-item-text-color-active-horizontal);"), S("extra", "color: var(--n-item-text-color-active-horizontal);")])]), R("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [D("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), S("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), S("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), fe("disabled", [fe("selected, child-active", [D("&:focus-within", po)]), R("selected", [se(null, [S("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [D("a", "color: var(--n-item-text-color-active-hover-horizontal);"), S("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), R("child-active", [se(null, [S("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [D("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), S("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), se("border-bottom: 2px solid var(--n-border-color-horizontal);", po)]), E("menu-item-content-header", [D("a", "color: var(--n-item-text-color-horizontal);")])])]), fe("responsive", [E("menu-item-content-header", `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), R("collapsed", [E("menu-item-content", [R("selected", [D("&::before", `
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
 `), R("disabled", `
 opacity: .45;
 cursor: not-allowed;
 `), R("collapsed", [S("arrow", "transform: rotate(0);")]), R("selected", [D("&::before", "background-color: var(--n-item-color-active);"), S("arrow", "color: var(--n-arrow-color-active);"), S("icon", "color: var(--n-item-icon-color-active);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [D("a", "color: var(--n-item-text-color-active);"), S("extra", "color: var(--n-item-text-color-active);")])]), R("child-active", [E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [D("a", `
 color: var(--n-item-text-color-child-active);
 `), S("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), S("arrow", `
 color: var(--n-arrow-color-child-active);
 `), S("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), fe("disabled", [fe("selected, child-active", [D("&:focus-within", ho)]), R("selected", [se(null, [S("arrow", "color: var(--n-arrow-color-active-hover);"), S("icon", "color: var(--n-item-icon-color-active-hover);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [D("a", "color: var(--n-item-text-color-active-hover);"), S("extra", "color: var(--n-item-text-color-active-hover);")])])]), R("child-active", [se(null, [S("arrow", "color: var(--n-arrow-color-child-active-hover);"), S("icon", "color: var(--n-item-icon-color-child-active-hover);"), E("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [D("a", "color: var(--n-item-text-color-child-active-hover);"), S("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), R("selected", [se(null, [D("&::before", "background-color: var(--n-item-color-active-hover);")])]), se(null, ho)]), S("icon", `
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
  return [R("hover", e, o), D("&:hover", e, o)];
}
const Ko = O({ name: "MenuOptionContent", props: { collapsed: Boolean, disabled: Boolean, title: [String, Function], icon: Function, extra: [String, Function], showArrow: Boolean, childActive: Boolean, hover: Boolean, paddingLeft: Number, selected: Boolean, maxIconSize: { type: Number, required: true }, activeIconSize: { type: Number, required: true }, iconMarginRight: { type: Number, required: true }, clsPrefix: { type: String, required: true }, onClick: Function, tmNode: { type: Object, required: true }, isEllipsisPlaceholder: Boolean }, setup(e) {
  const { props: o } = re(Ie);
  return { menuProps: o, style: z(() => {
    const { paddingLeft: A } = e;
    return { paddingLeft: A && `${A}px` };
  }), iconStyle: z(() => {
    const { maxIconSize: A, activeIconSize: t, iconMarginRight: r } = e;
    return { width: `${A}px`, height: `${A}px`, fontSize: `${t}px`, marginRight: `${r}px` };
  }) };
}, render() {
  const { clsPrefix: e, tmNode: o, menuProps: { renderIcon: A, renderLabel: t, renderExtra: r, expandIcon: s } } = this, l = A ? A(o.rawNode) : me(this.icon);
  return v("div", { onClick: (i) => {
    var n;
    (n = this.onClick) === null || n === void 0 || n.call(this, i);
  }, role: "none", class: [`${e}-menu-item-content`, { [`${e}-menu-item-content--selected`]: this.selected, [`${e}-menu-item-content--collapsed`]: this.collapsed, [`${e}-menu-item-content--child-active`]: this.childActive, [`${e}-menu-item-content--disabled`]: this.disabled, [`${e}-menu-item-content--hover`]: this.hover }], style: this.style }, l && v("div", { class: `${e}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [l]), v("div", { class: `${e}-menu-item-content-header`, role: "none" }, this.isEllipsisPlaceholder ? this.title : t ? t(o.rawNode) : me(this.title), this.extra || r ? v("span", { class: `${e}-menu-item-content-header__extra` }, " ", r ? r(o.rawNode) : me(this.extra)) : null), this.showArrow ? v(yo, { ariaHidden: true, class: `${e}-menu-item-content__arrow`, clsPrefix: e }, { default: () => s ? s(o.rawNode) : v(ft, null) }) : null);
} }), ye = 8;
function eo(e) {
  const o = re(Ie), { props: A, mergedCollapsedRef: t } = o, r = re(Ue, null), s = re(_e, null), l = z(() => A.mode === "horizontal"), i = z(() => l.value ? A.dropdownPlacement : "tmNodes" in e ? "right-start" : "right"), n = z(() => {
    var h;
    return Math.max((h = A.collapsedIconSize) !== null && h !== void 0 ? h : A.iconSize, A.iconSize);
  }), c = z(() => {
    var h;
    return !l.value && e.root && t.value && (h = A.collapsedIconSize) !== null && h !== void 0 ? h : A.iconSize;
  }), a = z(() => {
    if (l.value) return;
    const { collapsedWidth: h, indent: b, rootIndent: w } = A, { root: I, isGroup: y } = e, M = w === void 0 ? b : w;
    return I ? t.value ? h / 2 - n.value / 2 : M : s && typeof s.paddingLeftRef.value == "number" ? b / 2 + s.paddingLeftRef.value : r && typeof r.paddingLeftRef.value == "number" ? (y ? b / 2 : b) + r.paddingLeftRef.value : 0;
  }), u = z(() => {
    const { collapsedWidth: h, indent: b, rootIndent: w } = A, { value: I } = n, { root: y } = e;
    return l.value || !y || !t.value ? ye : (w === void 0 ? b : w) + I + ye - (h + I) / 2;
  });
  return { dropdownPlacement: i, activeIconSize: c, maxIconSize: n, paddingLeft: a, iconMarginRight: u, NMenu: o, NSubmenu: r };
}
const oo = { internalKey: { type: [String, Number], required: true }, root: Boolean, isGroup: Boolean, level: { type: Number, required: true }, title: [String, Function], extra: [String, Function] }, qn = O({ name: "MenuDivider", setup() {
  const e = re(Ie), { mergedClsPrefixRef: o, isHorizontalRef: A } = e;
  return () => A.value ? null : v("div", { class: `${o.value}-menu-divider` });
} }), Jo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function }), Un = Ke(Jo), _n = O({ name: "MenuOption", props: Jo, setup(e) {
  const o = eo(e), { NSubmenu: A, NMenu: t } = o, { props: r, mergedClsPrefixRef: s, mergedCollapsedRef: l } = t, i = A ? A.mergedDisabledRef : { value: false }, n = z(() => i.value || e.disabled);
  function c(u) {
    const { onClick: h } = e;
    h && h(u);
  }
  function a(u) {
    n.value || (t.doSelect(e.internalKey, e.tmNode.rawNode), c(u));
  }
  return { mergedClsPrefix: s, dropdownPlacement: o.dropdownPlacement, paddingLeft: o.paddingLeft, iconMarginRight: o.iconMarginRight, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, mergedTheme: t.mergedThemeRef, menuProps: r, dropdownEnabled: We(() => e.root && l.value && r.mode !== "horizontal" && !n.value), selected: We(() => t.mergedValueRef.value === e.internalKey), mergedDisabled: n, handleClick: a };
}, render() {
  const { mergedClsPrefix: e, mergedTheme: o, tmNode: A, menuProps: { renderLabel: t, nodeProps: r } } = this, s = r == null ? void 0 : r(A.rawNode);
  return v("div", Object.assign({}, s, { role: "menuitem", class: [`${e}-menu-item`, s == null ? void 0 : s.class] }), v(Hr, { theme: o.peers.Tooltip, themeOverrides: o.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: ["menu-tooltip"] }, { default: () => t ? t(A.rawNode) : me(this.title), trigger: () => v(Ko, { tmNode: A, clsPrefix: e, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }) }));
} }), Xo = Object.assign(Object.assign({}, oo), { tmNode: { type: Object, required: true }, tmNodes: { type: Array, required: true } }), el = Ke(Xo), ol = O({ name: "MenuOptionGroup", props: Xo, setup(e) {
  F(Ue, null);
  const o = eo(e);
  F(_e, { paddingLeftRef: o.paddingLeft });
  const { mergedClsPrefixRef: A, props: t } = re(Ie);
  return function() {
    const { value: r } = A, s = o.paddingLeft.value, { nodeProps: l } = t, i = l == null ? void 0 : l(e.tmNode.rawNode);
    return v("div", { class: `${r}-menu-item-group`, role: "group" }, v("div", Object.assign({}, i, { class: [`${r}-menu-item-group-title`, i == null ? void 0 : i.class], style: [(i == null ? void 0 : i.style) || "", s !== void 0 ? `padding-left: ${s}px;` : ""] }), me(e.title), e.extra ? v(De, null, " ", me(e.extra)) : null), v("div", null, e.tmNodes.map((n) => Ao(n, t))));
  };
} });
function Ze(e) {
  return e.type === "divider" || e.type === "render";
}
function Al(e) {
  return e.type === "divider";
}
function Ao(e, o) {
  const { rawNode: A } = e, { show: t } = A;
  if (t === false) return null;
  if (Ze(A)) return Al(A) ? v(qn, Object.assign({ key: e.key }, A.props)) : null;
  const { labelField: r } = o, { key: s, level: l, isGroup: i } = e, n = Object.assign(Object.assign({}, A), { title: A.title || A[r], extra: A.titleExtra || A.extra, key: s, internalKey: s, level: l, root: l === 0, isGroup: i });
  return e.children ? e.isGroup ? v(ol, ke(n, el, { tmNode: e, tmNodes: e.children, key: s })) : v(Ge, ke(n, rl, { key: s, rawNodes: A[o.childrenField], tmNodes: e.children, tmNode: e })) : v(_n, ke(n, Un, { key: s, tmNode: e }));
}
const qo = Object.assign(Object.assign({}, oo), { rawNodes: { type: Array, default: () => [] }, tmNodes: { type: Array, default: () => [] }, tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function, domId: String, virtualChildActive: { type: Boolean, default: void 0 }, isEllipsisPlaceholder: Boolean }), rl = Ke(qo), Ge = O({ name: "Submenu", props: qo, setup(e) {
  const o = eo(e), { NMenu: A, NSubmenu: t } = o, { props: r, mergedCollapsedRef: s, mergedThemeRef: l } = A, i = z(() => {
    const { disabled: h } = e;
    return (t == null ? void 0 : t.mergedDisabledRef.value) || r.disabled ? true : h;
  }), n = W(false);
  F(Ue, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: i }), F(_e, null);
  function c() {
    const { onClick: h } = e;
    h && h();
  }
  function a() {
    i.value || (s.value || A.toggleExpand(e.internalKey), c());
  }
  function u(h) {
    n.value = h;
  }
  return { menuProps: r, mergedTheme: l, doSelect: A.doSelect, inverted: A.invertedRef, isHorizontal: A.isHorizontalRef, mergedClsPrefix: A.mergedClsPrefixRef, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, iconMarginRight: o.iconMarginRight, dropdownPlacement: o.dropdownPlacement, dropdownShow: n, paddingLeft: o.paddingLeft, mergedDisabled: i, mergedValue: A.mergedValueRef, childActive: We(() => {
    var h;
    return (h = e.virtualChildActive) !== null && h !== void 0 ? h : A.activePathRef.value.includes(e.internalKey);
  }), collapsed: z(() => r.mode === "horizontal" ? false : s.value ? true : !A.mergedExpandedKeysRef.value.includes(e.internalKey)), dropdownEnabled: z(() => !i.value && (r.mode === "horizontal" || s.value)), handlePopoverShowChange: u, handleClick: a };
}, render() {
  var e;
  const { mergedClsPrefix: o, menuProps: { renderIcon: A, renderLabel: t } } = this, r = () => {
    const { isHorizontal: l, paddingLeft: i, collapsed: n, mergedDisabled: c, maxIconSize: a, activeIconSize: u, title: h, childActive: b, icon: w, handleClick: I, menuProps: { nodeProps: y }, dropdownShow: M, iconMarginRight: L, tmNode: j, mergedClsPrefix: N, isEllipsisPlaceholder: J, extra: Y } = this, Q = y == null ? void 0 : y(j.rawNode);
    return v("div", Object.assign({}, Q, { class: [`${N}-menu-item`, Q == null ? void 0 : Q.class], role: "menuitem" }), v(Ko, { tmNode: j, paddingLeft: i, collapsed: n, disabled: c, iconMarginRight: L, maxIconSize: a, activeIconSize: u, title: h, extra: Y, showArrow: !l, childActive: b, clsPrefix: N, icon: w, hover: M, onClick: I, isEllipsisPlaceholder: J }));
  }, s = () => v(Eo, null, { default: () => {
    const { tmNodes: l, collapsed: i } = this;
    return i ? null : v("div", { class: `${o}-submenu-children`, role: "menu" }, l.map((n) => Ao(n, this.menuProps)));
  } });
  return this.root ? v(er, Object.assign({ size: "large", trigger: "hover" }, (e = this.menuProps) === null || e === void 0 ? void 0 : e.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: { fontSizeLarge: "14px", optionIconSizeLarge: "18px" }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: A, renderLabel: t }), { default: () => v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, r(), this.isHorizontal ? null : s()) }) : v("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, r(), s());
} }), tl = Object.assign(Object.assign({}, Pe.props), { options: { type: Array, default: () => [] }, collapsed: { type: Boolean, default: void 0 }, collapsedWidth: { type: Number, default: 48 }, iconSize: { type: Number, default: 20 }, collapsedIconSize: { type: Number, default: 24 }, rootIndent: Number, indent: { type: Number, default: 32 }, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, disabledField: { type: String, default: "disabled" }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: { type: [String, Number], default: null }, mode: { type: String, default: "vertical" }, watchProps: { type: Array, default: void 0 }, disabled: Boolean, show: { type: Boolean, default: true }, inverted: Boolean, "onUpdate:expandedKeys": [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], "onUpdate:value": [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, dropdownProps: Object, accordion: Boolean, nodeProps: Function, dropdownPlacement: { type: String, default: "bottom" }, responsive: Boolean, items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array }), Fe = O({ name: "Menu", inheritAttrs: false, props: tl, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: A } = Ye(e), t = Pe("Menu", "-menu", Xn, or, e, o), r = re(Yn, null), s = z(() => {
    var f;
    const { collapsed: k } = e;
    if (k !== void 0) return k;
    if (r) {
      const { collapseModeRef: d, collapsedRef: x } = r;
      if (d.value === "width") return (f = x.value) !== null && f !== void 0 ? f : false;
    }
    return false;
  }), l = z(() => {
    const { keyField: f, childrenField: k, disabledField: d } = e;
    return Te(e.items || e.options, { getIgnored(x) {
      return Ze(x);
    }, getChildren(x) {
      return x[k];
    }, getDisabled(x) {
      return x[d];
    }, getKey(x) {
      var P;
      return (P = x[f]) !== null && P !== void 0 ? P : x.name;
    } });
  }), i = z(() => new Set(l.value.treeNodes.map((f) => f.key))), { watchProps: n } = e, c = W(null);
  (n == null ? void 0 : n.includes("defaultValue")) ? je(() => {
    c.value = e.defaultValue;
  }) : c.value = e.defaultValue;
  const a = to(e, "value"), u = so(a, c), h = W([]), b = () => {
    h.value = e.defaultExpandAll ? l.value.getNonLeafKeys() : e.defaultExpandedNames || e.defaultExpandedKeys || l.value.getPath(u.value, { includeSelf: false }).keyPath;
  };
  (n == null ? void 0 : n.includes("defaultExpandedKeys")) ? je(b) : b();
  const w = fr(e, ["expandedNames", "expandedKeys"]), I = so(w, h), y = z(() => l.value.treeNodes), M = z(() => l.value.getPath(u.value).keyPath);
  F(Ie, { props: e, mergedCollapsedRef: s, mergedThemeRef: t, mergedValueRef: u, mergedExpandedKeysRef: I, activePathRef: M, mergedClsPrefixRef: o, isHorizontalRef: z(() => e.mode === "horizontal"), invertedRef: to(e, "inverted"), doSelect: L, toggleExpand: N });
  function L(f, k) {
    const { "onUpdate:value": d, onUpdateValue: x, onSelect: P } = e;
    x && ie(x, f, k), d && ie(d, f, k), P && ie(P, f, k), c.value = f;
  }
  function j(f) {
    const { "onUpdate:expandedKeys": k, onUpdateExpandedKeys: d, onExpandedNamesChange: x, onOpenNamesChange: P } = e;
    k && ie(k, f), d && ie(d, f), x && ie(x, f), P && ie(P, f), h.value = f;
  }
  function N(f) {
    const k = Array.from(I.value), d = k.findIndex((x) => x === f);
    if (~d) k.splice(d, 1);
    else {
      if (e.accordion && i.value.has(f)) {
        const x = k.findIndex((P) => i.value.has(P));
        x > -1 && k.splice(x, 1);
      }
      k.push(f);
    }
    j(k);
  }
  const J = (f) => {
    const k = l.value.getPath(f ?? u.value, { includeSelf: false }).keyPath;
    if (!k.length) return;
    const d = Array.from(I.value), x = /* @__PURE__ */ new Set([...d, ...k]);
    e.accordion && i.value.forEach((P) => {
      x.has(P) && !k.includes(P) && x.delete(P);
    }), j(Array.from(x));
  }, Y = z(() => {
    const { inverted: f } = e, { common: { cubicBezierEaseInOut: k }, self: d } = t.value, { borderRadius: x, borderColorHorizontal: P, fontSize: _o, itemHeight: eA, dividerColor: oA } = d, p = { "--n-divider-color": oA, "--n-bezier": k, "--n-font-size": _o, "--n-border-color-horizontal": P, "--n-border-radius": x, "--n-item-height": eA };
    return f ? (p["--n-group-text-color"] = d.groupTextColorInverted, p["--n-color"] = d.colorInverted, p["--n-item-text-color"] = d.itemTextColorInverted, p["--n-item-text-color-hover"] = d.itemTextColorHoverInverted, p["--n-item-text-color-active"] = d.itemTextColorActiveInverted, p["--n-item-text-color-child-active"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHoverInverted, p["--n-item-icon-color"] = d.itemIconColorInverted, p["--n-item-icon-color-hover"] = d.itemIconColorHoverInverted, p["--n-item-icon-color-active"] = d.itemIconColorActiveInverted, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHoverInverted, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActiveInverted, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHoverInverted, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsedInverted, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontalInverted, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontalInverted, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontalInverted, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontalInverted, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontalInverted, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontalInverted, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontalInverted, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontalInverted, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontalInverted, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontalInverted, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontalInverted, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontalInverted, p["--n-arrow-color"] = d.arrowColorInverted, p["--n-arrow-color-hover"] = d.arrowColorHoverInverted, p["--n-arrow-color-active"] = d.arrowColorActiveInverted, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHoverInverted, p["--n-arrow-color-child-active"] = d.arrowColorChildActiveInverted, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHoverInverted, p["--n-item-color-hover"] = d.itemColorHoverInverted, p["--n-item-color-active"] = d.itemColorActiveInverted, p["--n-item-color-active-hover"] = d.itemColorActiveHoverInverted, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsedInverted) : (p["--n-group-text-color"] = d.groupTextColor, p["--n-color"] = d.color, p["--n-item-text-color"] = d.itemTextColor, p["--n-item-text-color-hover"] = d.itemTextColorHover, p["--n-item-text-color-active"] = d.itemTextColorActive, p["--n-item-text-color-child-active"] = d.itemTextColorChildActive, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveHover, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHover, p["--n-item-icon-color"] = d.itemIconColor, p["--n-item-icon-color-hover"] = d.itemIconColorHover, p["--n-item-icon-color-active"] = d.itemIconColorActive, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHover, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActive, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHover, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsed, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontal, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontal, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontal, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontal, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontal, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontal, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontal, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontal, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontal, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontal, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontal, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontal, p["--n-arrow-color"] = d.arrowColor, p["--n-arrow-color-hover"] = d.arrowColorHover, p["--n-arrow-color-active"] = d.arrowColorActive, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHover, p["--n-arrow-color-child-active"] = d.arrowColorChildActive, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHover, p["--n-item-color-hover"] = d.itemColorHover, p["--n-item-color-active"] = d.itemColorActive, p["--n-item-color-active-hover"] = d.itemColorActiveHover, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsed), p;
  }), Q = A ? Bo("menu", z(() => e.inverted ? "a" : "b"), Y, e) : void 0, X = ze(), U = W(null), Ae = W(null);
  let _ = true;
  const te = () => {
    var f;
    _ ? _ = false : (f = U.value) === null || f === void 0 || f.sync({ showAllItemsBeforeCalculate: true });
  };
  function ae() {
    return document.getElementById(X);
  }
  const ne = W(-1);
  function Ce(f) {
    ne.value = e.options.length - f;
  }
  function Me(f) {
    f || (ne.value = -1);
  }
  const He = z(() => {
    const f = ne.value;
    return { children: f === -1 ? [] : e.options.slice(f) };
  }), Qe = z(() => {
    const { childrenField: f, disabledField: k, keyField: d } = e;
    return Te([He.value], { getIgnored(x) {
      return Ze(x);
    }, getChildren(x) {
      return x[f];
    }, getDisabled(x) {
      return x[k];
    }, getKey(x) {
      var P;
      return (P = x[d]) !== null && P !== void 0 ? P : x.name;
    } });
  }), Oe = z(() => Te([{}]).treeNodes[0]);
  function Uo() {
    var f;
    if (ne.value === -1) return v(Ge, { root: true, level: 0, key: "__ellpisisGroupPlaceholder__", internalKey: "__ellpisisGroupPlaceholder__", title: "\xB7\xB7\xB7", tmNode: Oe.value, domId: X, isEllipsisPlaceholder: true });
    const k = Qe.value.treeNodes[0], d = M.value, x = !!(!((f = k.children) === null || f === void 0) && f.some((P) => d.includes(P.key)));
    return v(Ge, { level: 0, root: true, key: "__ellpisisGroup__", internalKey: "__ellpisisGroup__", title: "\xB7\xB7\xB7", virtualChildActive: x, tmNode: k, domId: X, rawNodes: k.rawNode.children || [], tmNodes: k.children || [], isEllipsisPlaceholder: true });
  }
  return { mergedClsPrefix: o, controlledExpandedKeys: w, uncontrolledExpanededKeys: h, mergedExpandedKeys: I, uncontrolledValue: c, mergedValue: u, activePath: M, tmNodes: y, mergedTheme: t, mergedCollapsed: s, cssVars: A ? void 0 : Y, themeClass: Q == null ? void 0 : Q.themeClass, overflowRef: U, counterRef: Ae, updateCounter: () => {
  }, onResize: te, onUpdateOverflow: Me, onUpdateCount: Ce, renderCounter: Uo, getCounter: ae, onRender: Q == null ? void 0 : Q.onRender, showOption: J, deriveResponsiveState: te };
}, render() {
  const { mergedClsPrefix: e, mode: o, themeClass: A, onRender: t } = this;
  t == null ? void 0 : t();
  const r = () => this.tmNodes.map((n) => Ao(n, this.$props)), l = o === "horizontal" && this.responsive, i = () => v("div", nA(this.$attrs, { role: o === "horizontal" ? "menubar" : "menu", class: [`${e}-menu`, A, `${e}-menu--${o}`, l && `${e}-menu--responsive`, this.mergedCollapsed && `${e}-menu--collapsed`], style: this.cssVars }), l ? v(nr, { ref: "overflowRef", onUpdateOverflow: this.onUpdateOverflow, getCounter: this.getCounter, onUpdateCount: this.onUpdateCount, updateCounter: this.updateCounter, style: { width: "100%", display: "flex", overflow: "hidden" } }, { default: r, counter: this.renderCounter }) : r());
  return l ? v(Cr, { onResize: this.onResize }, { default: i }) : i();
} }), nl = { name: "QrCode", common: m, self: (e) => ({ borderRadius: e.borderRadius }) }, ll = { name: "Skeleton", common: m, self(e) {
  const { heightSmall: o, heightMedium: A, heightLarge: t, borderRadius: r } = e;
  return { color: "rgba(255, 255, 255, 0.12)", colorEnd: "rgba(255, 255, 255, 0.18)", borderRadius: r, heightSmall: o, heightMedium: A, heightLarge: t };
} }, al = { name: "Split", common: m }, il = { name: "Equation", common: m, self: Ar }, sl = { name: "FloatButtonGroup", common: m, self(e) {
  const { popoverColor: o, dividerColor: A, borderRadius: t } = e;
  return { color: o, buttonBorderColor: A, borderRadiusSquare: t, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
} }, cl = { name: "dark", common: m, Alert: St, Anchor: Bt, AutoComplete: yt, Avatar: Ho, AvatarGroup: kt, BackTop: Et, Badge: wt, Breadcrumb: Dt, Button: G, ButtonGroup: hn, Calendar: zt, Card: Qo, Carousel: Pt, Cascader: Rt, Checkbox: ve, Code: Oo, Collapse: Mt, CollapseTransition: Ht, ColorPicker: Qt, DataTable: Ot, DatePicker: Ft, Descriptions: Lt, Dialog: Wo, Divider: an, Drawer: sn, Dropdown: qe, DynamicInput: cn, DynamicTags: dn, Element: mn, Empty: pe, Ellipsis: Vo, Equation: il, Flex: un, Form: pn, GradientText: gn, Icon: Tt, IconWrapper: Gn, Image: $n, Input: $, InputNumber: vn, InputOtp: Cn, LegacyTransfer: Kn, Layout: fn, List: xn, LoadingBar: Kt, Log: In, Menu: Bn, Mention: Sn, Message: Jt, Modal: Vt, Notification: ln, PageHeader: yn, Pagination: Lo, Popconfirm: kn, Popover: ge, Popselect: To, Progress: $o, QrCode: nl, Radio: jo, Rate: En, Result: wn, Row: bn, Scrollbar: Z, Select: Fo, Skeleton: ll, Slider: Dn, Space: Go, Spin: zn, Statistic: Pn, Steps: Rn, Switch: Mn, Table: Hn, Tabs: Qn, Tag: Mo, Thing: On, TimePicker: No, Timeline: Tn, Tooltip: Re, Transfer: Fn, Tree: Yo, TreeSelect: Ln, Typography: Vn, Upload: jn, Watermark: Nn, Split: al, FloatButton: Wn, FloatButtonGroup: sl, Marquee: Jn }, dl = { key: 0, class: "nav-bar" }, ml = { class: "software-info-menu" }, ul = { style: { width: "100%" } }, hl = { key: 0, style: { width: "100%", "text-align": "center", padding: "4px" } }, pl = { key: 1, class: "nav-bar" }, gl = { key: 0, style: { width: "100%", "text-align": "center", padding: "4px" } }, vl = { class: "main-layout" }, Cl = O({ __name: "AppLayout", setup(e) {
  lA((y) => ({ "2e887acd": I.value ? "column" : "row" }));
  const o = mA(), A = Io(), t = new xo(), { t: r, locale: s } = hA();
  function l(y) {
    return () => v(co, null, { default: () => v(y) });
  }
  A.settings.interfaceLanguage = A.settings.interfaceLanguage ?? s.value, s.value = A.settings.interfaceLanguage, aA(() => A.settings.interfaceLanguage, (y) => {
    y && (s.value = y);
  });
  const i = window.UpdateService;
  F("geolocation", i);
  const n = [{ label: () => v(Se, { to: "/tracker" }, { default: () => r("router.tracker") }), key: "tracker", icon: l(it) }, { label: () => v(Se, { to: "/sketch-centre" }, { default: () => r("router.sketchCentre") }), key: "sketch-centre", icon: l(at) }], c = [{ label: () => v(Se, { to: "/settings" }, { default: () => r("router.settings") }), key: "settings", icon: l(st) }, { label: () => v(Se, { to: "/about" }, { default: () => r("router.about") }), key: "about", icon: l(mt) }], a = z(() => o.path.slice(1)), u = `ba39ebf
`, h = false, { width: b, height: w } = lr(), I = z(() => b.value > w.value);
  return (y, M) => (ee(), ce("div", { class: fo(["app-layout", I.value ? "app-layout-horizontal" : "app-layout-vertical"]) }, [I.value ? (ee(), ce("div", dl, [V(H(Fe), { options: n, "default-value": "tracker", value: a.value, mode: I.value ? "vertical" : "horizontal" }, null, 8, ["value", "mode"]), oe("div", ml, [oe("div", ul, [V(H(Fe), { options: c, mode: I.value ? "vertical" : "horizontal", value: a.value }, null, 8, ["mode", "value"])]), H(u) ? (ee(), ce("div", hl, [V(H(mo), { depth: "3" }, { default: K(() => [lo(ao(h ? "DEV MODE" : "Commit:" + H(u).toLocaleUpperCase()), 1)]), _: 1 })])) : no("", true)])])) : (ee(), ce("div", pl, [V(H(br), { trigger: H(t).isMobile ? "click" : "hover", style: { padding: "2px 0", transform: "translateX(2px)" }, placement: "bottom-start" }, { trigger: K(() => [V(H(lt), { style: { width: "48px" } }, { icon: K(() => [V(H(co), null, { default: K(() => [V(H(ht))]), _: 1 })]), _: 1 })]), default: K(() => [V(H(Fe), { options: n.concat(c), "default-value": "tracker", value: a.value, "dropdown-placement": "top-start", mode: "vertical" }, null, 8, ["options", "value"])]), _: 1 }, 8, ["trigger"]), H(u) ? (ee(), ce("div", gl, [V(H(mo), { depth: "3" }, { default: K(() => [lo(ao(h ? "DEV MODE" : "Commit:" + H(u).toLocaleUpperCase()), 1)]), _: 1 })])) : no("", true)])), oe("div", vl, [V(H(uA), null, { default: K(({ Component: L }) => [V(iA, { name: "slide-fade", mode: "out-in" }, { default: K(() => [(ee(), Ne(sA, null, [(ee(), Ne(cA(L), { key: a.value }))], 1024))]), _: 2 }, 1024)]), _: 1 })])], 2));
} }), fl = dA(Cl, [["__scopeId", "data-v-6d9b9e58"]]);
function bl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Le, go;
function xl() {
  return go || (go = 1, Le = { webm: "data:video/webm;base64,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", mp4: "data:video/mp4;base64,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" }), Le;
}
var Ve, vo;
function Il() {
  if (vo) return Ve;
  vo = 1;
  const { webm: e, mp4: o } = xl(), A = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, t = () => "wakeLock" in navigator;
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
    _addSourceToVideo(l, i, n) {
      var c = document.createElement("source");
      c.src = n, c.type = `video/${i}`, l.appendChild(c);
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
      }, 15e3), this.enabled = true, Promise.resolve()) : this.noSleepVideo.play().then((i) => (this.enabled = true, i)).catch((i) => {
        throw this.enabled = false, i;
      });
    }
    disable() {
      t() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : A() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = false;
    }
  }
  return Ve = r, Ve;
}
var Sl = Il();
const Bl = bl(Sl), Fl = O({ __name: "App", setup(e) {
  F("platformInfo", new xo());
  const o = Io();
  bo(() => o.init()), F("settings", o), F("noSleep", new Bl());
  const A = Ct(), t = z(() => (o.settings.theme === "system" ? A.value : o.settings.theme) === "dark" ? cl : rr), r = { common: { fontFamily: 'Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' } };
  return (s, l) => (ee(), Ne(H(tr), { theme: t.value, abstract: true, "inline-theme-disabled": true, "theme-overrides": r }, { default: K(() => [V(H(Yt), null, { default: K(() => [V(H(nn), null, { default: K(() => [V(H(An), { placement: "bottom-right" }, { default: K(() => [V(fl), V(H(Zn))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["theme"]));
} });
export {
  Fl as default
};
