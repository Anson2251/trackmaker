import { d as L, o as re, c as ve, a as ae, r as so, b as Io, e as cr, f as Q, h as g, n as So, F as Ce, p as N, g as qe, T as Bo, w as dr, v as ur, i as ee, j as S, k as ge, l as yo, m as _e, q as Ge, s as mr, t as hr, u as co, x as pr, y as ko, z as j, A as F, B as J, C as vr, D as gr, E as Cr, _ as Eo, G as wo, H as Ye, K as fr, I as br, J as xr } from "./index-Bz2manPu.js";
import { h as Ir, c as Sr, s as Z, a as Se, r as Do, b as Br, d as yr, e as kr, f as Er, g as wr, i as C, j as Dr, k as Rr, l as zr, m as Pr, n as Mr, o as Hr, p as Or, q as Qr, t as Tr, u as Fr, v as Lr, w as jr, x as Vr, y as Nr, z as Wr, A as Zr, B as $r, C as Gr, D as Yr, E as Kr, F as Jr, G as Xr, H as qr, I as _r, J as Ur, K as eA, L as oA, M as rA, N as AA, O as tA, P as nA, Q as aA, R as le, S as lA, T as Pe, U as iA, V as Ro, W as sA, X as Ue, Y as zo, Z as Po, _ as cA, $ as Oe, a0 as dA, a1 as uA, a2 as B, a3 as mA, a4 as P, a5 as Be, a6 as fe, a7 as eo, a8 as hA, a9 as pA, aa as vA, ab as R, ac as Mo, ad as y, ae as gA, af as CA, ag as ue, ah as fA, ai as Ho, aj as bA, ak as ne, al as xA, am as Oo, an as IA, ao as SA, ap as BA, aq as yA, ar as kA, as as Qo, at as EA, au as wA, av as DA, aw as RA, ax as zA, ay as PA, az as MA, aA as HA, aB as OA, aC as QA, aD as TA, aE as FA, aF as LA, aG as jA, aH as VA, aI as NA, aJ as WA, aK as ZA, aL as $A, aM as GA, aN as YA, aO as KA, aP as JA, aQ as XA, aR as qA, aS as _A, aT as UA, aU as et, aV as ot, aW as rt, aX as At, aY as uo, aZ as tt, a_ as nt, a$ as at, b0 as lt, b1 as Ie, b2 as oo, b3 as it, b4 as Ke, b5 as st, b6 as ct, b7 as dt, b8 as mo, b9 as ut, ba as mt, bb as Ne, bc as se, bd as ht, be as pt, bf as To, bg as vt, bh as gt, bi as Ct, bj as ft, bk as bt, bl as ro, bm as Fo, bn as xt, bo as ho, bp as It, bq as St, br as Ee, bs as Bt, bt as yt, bu as kt, bv as Et, bw as wt, bx as Dt, by as Rt } from "./SelectorDrawer.vue_vue_type_script_setup_true_lang-C4AnwEu8.js";
import { z as zt } from "./index-hnTOpNy3.js";
import { getSystemLocale as po } from "./index-YdNeglYH.js";
const Pt = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Mt = L({ name: "Menu", render: function(o, r) {
  return re(), ve("svg", Pt, r[0] || (r[0] = [ae("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [ae("path", { d: "M4 8h16" }), ae("path", { d: "M4 16h16" })], -1)]));
} });
let we = 0;
const Ht = typeof window < "u" && window.matchMedia !== void 0, me = Q(null);
let q, de;
function Me(e) {
  e.matches && (me.value = "dark");
}
function He(e) {
  e.matches && (me.value = "light");
}
function Ot() {
  q = window.matchMedia("(prefers-color-scheme: dark)"), de = window.matchMedia("(prefers-color-scheme: light)"), q.matches ? me.value = "dark" : de.matches ? me.value = "light" : me.value = null, q.addEventListener ? (q.addEventListener("change", Me), de.addEventListener("change", He)) : q.addListener && (q.addListener(Me), de.addListener(He));
}
function Qt() {
  "removeEventListener" in q ? (q.removeEventListener("change", Me), de.removeEventListener("change", He)) : "removeListener" in q && (q.removeListener(Me), de.removeListener(He)), q = void 0, de = void 0;
}
let vo = true;
function Tt() {
  return Ht ? (we === 0 && Ot(), vo && (vo = Ir()) && (Io(() => {
    we += 1;
  }), cr(() => {
    we -= 1, we === 0 && Qt();
  })), so(me)) : so(me);
}
const Ft = L({ name: "ChevronDownFilled", render() {
  return g("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, g("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" }));
} }), v = { neutralBase: "#000", neutralInvertBase: "#fff", neutralTextBase: "#fff", neutralPopover: "rgb(72, 72, 78)", neutralCard: "rgb(24, 24, 28)", neutralModal: "rgb(44, 44, 50)", neutralBody: "rgb(16, 16, 20)", alpha1: "0.9", alpha2: "0.82", alpha3: "0.52", alpha4: "0.38", alpha5: "0.28", alphaClose: "0.52", alphaDisabled: "0.38", alphaDisabledInput: "0.06", alphaPending: "0.09", alphaTablePending: "0.06", alphaTableStriped: "0.05", alphaPressed: "0.05", alphaAvatar: "0.18", alphaRail: "0.2", alphaProgressRail: "0.12", alphaBorder: "0.24", alphaDivider: "0.09", alphaInput: "0.1", alphaAction: "0.06", alphaTab: "0.04", alphaScrollbar: "0.2", alphaScrollbarHover: "0.3", alphaCode: "0.12", alphaTag: "0.2", primaryHover: "#7fe7c4", primaryDefault: "#63e2b7", primaryActive: "#5acea7", primarySuppl: "rgb(42, 148, 125)", infoHover: "#8acbec", infoDefault: "#70c0e8", infoActive: "#66afd3", infoSuppl: "rgb(56, 137, 197)", errorHover: "#e98b8b", errorDefault: "#e88080", errorActive: "#e57272", errorSuppl: "rgb(208, 58, 82)", warningHover: "#f5d599", warningDefault: "#f2c97d", warningActive: "#e6c260", warningSuppl: "rgb(240, 138, 0)", successHover: "#7fe7c4", successDefault: "#63e2b7", successActive: "#5acea7", successSuppl: "rgb(42, 148, 125)" }, Lt = Do(v.neutralBase), Lo = Do(v.neutralInvertBase), jt = `rgba(${Lo.slice(0, 3).join(", ")}, `;
function E(e) {
  return `${jt + String(e)})`;
}
function Vt(e) {
  const o = Array.from(Lo);
  return o[3] = Number(e), Se(Lt, o);
}
const u = Object.assign(Object.assign({ name: "common" }, Sr), { baseColor: v.neutralBase, primaryColor: v.primaryDefault, primaryColorHover: v.primaryHover, primaryColorPressed: v.primaryActive, primaryColorSuppl: v.primarySuppl, infoColor: v.infoDefault, infoColorHover: v.infoHover, infoColorPressed: v.infoActive, infoColorSuppl: v.infoSuppl, successColor: v.successDefault, successColorHover: v.successHover, successColorPressed: v.successActive, successColorSuppl: v.successSuppl, warningColor: v.warningDefault, warningColorHover: v.warningHover, warningColorPressed: v.warningActive, warningColorSuppl: v.warningSuppl, errorColor: v.errorDefault, errorColorHover: v.errorHover, errorColorPressed: v.errorActive, errorColorSuppl: v.errorSuppl, textColorBase: v.neutralTextBase, textColor1: E(v.alpha1), textColor2: E(v.alpha2), textColor3: E(v.alpha3), textColorDisabled: E(v.alpha4), placeholderColor: E(v.alpha4), placeholderColorDisabled: E(v.alpha5), iconColor: E(v.alpha4), iconColorDisabled: E(v.alpha5), iconColorHover: E(Number(v.alpha4) * 1.25), iconColorPressed: E(Number(v.alpha4) * 0.8), opacity1: v.alpha1, opacity2: v.alpha2, opacity3: v.alpha3, opacity4: v.alpha4, opacity5: v.alpha5, dividerColor: E(v.alphaDivider), borderColor: E(v.alphaBorder), closeIconColorHover: E(Number(v.alphaClose)), closeIconColor: E(Number(v.alphaClose)), closeIconColorPressed: E(Number(v.alphaClose)), closeColorHover: "rgba(255, 255, 255, .12)", closeColorPressed: "rgba(255, 255, 255, .08)", clearColor: E(v.alpha4), clearColorHover: Z(E(v.alpha4), { alpha: 1.25 }), clearColorPressed: Z(E(v.alpha4), { alpha: 0.8 }), scrollbarColor: E(v.alphaScrollbar), scrollbarColorHover: E(v.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: E(v.alphaProgressRail), railColor: E(v.alphaRail), popoverColor: v.neutralPopover, tableColor: v.neutralCard, cardColor: v.neutralCard, modalColor: v.neutralModal, bodyColor: v.neutralBody, tagColor: Vt(v.alphaTag), avatarColor: E(v.alphaAvatar), invertedColor: v.neutralBase, inputColor: E(v.alphaInput), codeColor: E(v.alphaCode), tabColor: E(v.alphaTab), actionColor: E(v.alphaAction), tableHeaderColor: E(v.alphaAction), hoverColor: E(v.alphaPending), tableColorHover: E(v.alphaTablePending), tableColorStriped: E(v.alphaTableStriped), pressedColor: E(v.alphaPressed), opacityDisabled: v.alphaDisabled, inputColorDisabled: E(v.alphaDisabledInput), buttonColor2: "rgba(255, 255, 255, .08)", buttonColor2Hover: "rgba(255, 255, 255, .12)", buttonColor2Pressed: "rgba(255, 255, 255, .08)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), Y = { name: "Scrollbar", common: u, self: Br }, he = { name: "Empty", common: u, self: yr }, ye = { name: "InternalSelectMenu", common: u, peers: { Scrollbar: Y, Empty: he }, self: kr }, pe = { name: "Popover", common: u, peers: { Scrollbar: Y }, self: Er }, jo = { name: "Tag", common: u, self(e) {
  const { textColor2: o, primaryColorHover: r, primaryColorPressed: A, primaryColor: t, infoColor: l, successColor: a, warningColor: c, errorColor: n, baseColor: s, borderColor: i, tagColor: m, opacityDisabled: h, closeIconColor: f, closeIconColorHover: x, closeIconColorPressed: k, closeColorHover: z, closeColorPressed: O, borderRadiusSmall: $, fontSizeMini: W, fontSizeTiny: T, fontSizeSmall: w, fontSizeMedium: G, heightMini: M, heightTiny: V, heightSmall: _, heightMedium: oe, buttonColor2Hover: U, buttonColor2Pressed: Ae, fontWeightStrong: ie } = e;
  return Object.assign(Object.assign({}, wr), { closeBorderRadius: $, heightTiny: M, heightSmall: V, heightMedium: _, heightLarge: oe, borderRadius: $, opacityDisabled: h, fontSizeTiny: W, fontSizeSmall: T, fontSizeMedium: w, fontSizeLarge: G, fontWeightStrong: ie, textColorCheckable: o, textColorHoverCheckable: o, textColorPressedCheckable: o, textColorChecked: s, colorCheckable: "#0000", colorHoverCheckable: U, colorPressedCheckable: Ae, colorChecked: t, colorCheckedHover: r, colorCheckedPressed: A, border: `1px solid ${i}`, textColor: o, color: m, colorBordered: "#0000", closeIconColor: f, closeIconColorHover: x, closeIconColorPressed: k, closeColorHover: z, closeColorPressed: O, borderPrimary: `1px solid ${C(t, { alpha: 0.3 })}`, textColorPrimary: t, colorPrimary: C(t, { alpha: 0.16 }), colorBorderedPrimary: "#0000", closeIconColorPrimary: Z(t, { lightness: 0.7 }), closeIconColorHoverPrimary: Z(t, { lightness: 0.7 }), closeIconColorPressedPrimary: Z(t, { lightness: 0.7 }), closeColorHoverPrimary: C(t, { alpha: 0.16 }), closeColorPressedPrimary: C(t, { alpha: 0.12 }), borderInfo: `1px solid ${C(l, { alpha: 0.3 })}`, textColorInfo: l, colorInfo: C(l, { alpha: 0.16 }), colorBorderedInfo: "#0000", closeIconColorInfo: Z(l, { alpha: 0.7 }), closeIconColorHoverInfo: Z(l, { alpha: 0.7 }), closeIconColorPressedInfo: Z(l, { alpha: 0.7 }), closeColorHoverInfo: C(l, { alpha: 0.16 }), closeColorPressedInfo: C(l, { alpha: 0.12 }), borderSuccess: `1px solid ${C(a, { alpha: 0.3 })}`, textColorSuccess: a, colorSuccess: C(a, { alpha: 0.16 }), colorBorderedSuccess: "#0000", closeIconColorSuccess: Z(a, { alpha: 0.7 }), closeIconColorHoverSuccess: Z(a, { alpha: 0.7 }), closeIconColorPressedSuccess: Z(a, { alpha: 0.7 }), closeColorHoverSuccess: C(a, { alpha: 0.16 }), closeColorPressedSuccess: C(a, { alpha: 0.12 }), borderWarning: `1px solid ${C(c, { alpha: 0.3 })}`, textColorWarning: c, colorWarning: C(c, { alpha: 0.16 }), colorBorderedWarning: "#0000", closeIconColorWarning: Z(c, { alpha: 0.7 }), closeIconColorHoverWarning: Z(c, { alpha: 0.7 }), closeIconColorPressedWarning: Z(c, { alpha: 0.7 }), closeColorHoverWarning: C(c, { alpha: 0.16 }), closeColorPressedWarning: C(c, { alpha: 0.11 }), borderError: `1px solid ${C(n, { alpha: 0.3 })}`, textColorError: n, colorError: C(n, { alpha: 0.16 }), colorBorderedError: "#0000", closeIconColorError: Z(n, { alpha: 0.7 }), closeIconColorHoverError: Z(n, { alpha: 0.7 }), closeIconColorPressedError: Z(n, { alpha: 0.7 }), closeColorHoverError: C(n, { alpha: 0.16 }), closeColorPressedError: C(n, { alpha: 0.12 }) });
} }, Ao = { name: "InternalSelection", common: u, peers: { Popover: pe }, self(e) {
  const { borderRadius: o, textColor2: r, textColorDisabled: A, inputColor: t, inputColorDisabled: l, primaryColor: a, primaryColorHover: c, warningColor: n, warningColorHover: s, errorColor: i, errorColorHover: m, iconColor: h, iconColorDisabled: f, clearColor: x, clearColorHover: k, clearColorPressed: z, placeholderColor: O, placeholderColorDisabled: $, fontSizeTiny: W, fontSizeSmall: T, fontSizeMedium: w, fontSizeLarge: G, heightTiny: M, heightSmall: V, heightMedium: _, heightLarge: oe, fontWeight: U } = e;
  return Object.assign(Object.assign({}, Dr), { fontWeight: U, fontSizeTiny: W, fontSizeSmall: T, fontSizeMedium: w, fontSizeLarge: G, heightTiny: M, heightSmall: V, heightMedium: _, heightLarge: oe, borderRadius: o, textColor: r, textColorDisabled: A, placeholderColor: O, placeholderColorDisabled: $, color: t, colorDisabled: l, colorActive: C(a, { alpha: 0.1 }), border: "1px solid #0000", borderHover: `1px solid ${c}`, borderActive: `1px solid ${a}`, borderFocus: `1px solid ${c}`, boxShadowHover: "none", boxShadowActive: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, boxShadowFocus: `0 0 8px 0 ${C(a, { alpha: 0.4 })}`, caretColor: a, arrowColor: h, arrowColorDisabled: f, loadingColor: a, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${s}`, borderActiveWarning: `1px solid ${n}`, borderFocusWarning: `1px solid ${s}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.4 })}`, colorActiveWarning: C(n, { alpha: 0.1 }), caretColorWarning: n, borderError: `1px solid ${i}`, borderHoverError: `1px solid ${m}`, borderActiveError: `1px solid ${i}`, borderFocusError: `1px solid ${m}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 8px 0 ${C(i, { alpha: 0.4 })}`, boxShadowFocusError: `0 0 8px 0 ${C(i, { alpha: 0.4 })}`, colorActiveError: C(i, { alpha: 0.1 }), caretColorError: i, clearColor: x, clearColorHover: k, clearColorPressed: z });
} }, Nt = { name: "Alert", common: u, self(e) {
  const { lineHeight: o, borderRadius: r, fontWeightStrong: A, dividerColor: t, inputColor: l, textColor1: a, textColor2: c, closeColorHover: n, closeColorPressed: s, closeIconColor: i, closeIconColorHover: m, closeIconColorPressed: h, infoColorSuppl: f, successColorSuppl: x, warningColorSuppl: k, errorColorSuppl: z, fontSize: O } = e;
  return Object.assign(Object.assign({}, Rr), { fontSize: O, lineHeight: o, titleFontWeight: A, borderRadius: r, border: `1px solid ${t}`, color: l, titleTextColor: a, iconColor: c, contentTextColor: c, closeBorderRadius: r, closeColorHover: n, closeColorPressed: s, closeIconColor: i, closeIconColorHover: m, closeIconColorPressed: h, borderInfo: `1px solid ${C(f, { alpha: 0.35 })}`, colorInfo: C(f, { alpha: 0.25 }), titleTextColorInfo: a, iconColorInfo: f, contentTextColorInfo: c, closeColorHoverInfo: n, closeColorPressedInfo: s, closeIconColorInfo: i, closeIconColorHoverInfo: m, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${C(x, { alpha: 0.35 })}`, colorSuccess: C(x, { alpha: 0.25 }), titleTextColorSuccess: a, iconColorSuccess: x, contentTextColorSuccess: c, closeColorHoverSuccess: n, closeColorPressedSuccess: s, closeIconColorSuccess: i, closeIconColorHoverSuccess: m, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${C(k, { alpha: 0.35 })}`, colorWarning: C(k, { alpha: 0.25 }), titleTextColorWarning: a, iconColorWarning: k, contentTextColorWarning: c, closeColorHoverWarning: n, closeColorPressedWarning: s, closeIconColorWarning: i, closeIconColorHoverWarning: m, closeIconColorPressedWarning: h, borderError: `1px solid ${C(z, { alpha: 0.35 })}`, colorError: C(z, { alpha: 0.25 }), titleTextColorError: a, iconColorError: z, contentTextColorError: c, closeColorHoverError: n, closeColorPressedError: s, closeIconColorError: i, closeIconColorHoverError: m, closeIconColorPressedError: h });
} }, Wt = { name: "Anchor", common: u, self: zr };
function Zt(e) {
  const { textColor2: o, textColor3: r, textColorDisabled: A, primaryColor: t, primaryColorHover: l, inputColor: a, inputColorDisabled: c, warningColor: n, warningColorHover: s, errorColor: i, errorColorHover: m, borderRadius: h, lineHeight: f, fontSizeTiny: x, fontSizeSmall: k, fontSizeMedium: z, fontSizeLarge: O, heightTiny: $, heightSmall: W, heightMedium: T, heightLarge: w, clearColor: G, clearColorHover: M, clearColorPressed: V, placeholderColor: _, placeholderColorDisabled: oe, iconColor: U, iconColorDisabled: Ae, iconColorHover: ie, iconColorPressed: te, fontWeight: xe } = e;
  return Object.assign(Object.assign({}, Mr), { fontWeight: xe, countTextColorDisabled: A, countTextColor: r, heightTiny: $, heightSmall: W, heightMedium: T, heightLarge: w, fontSizeTiny: x, fontSizeSmall: k, fontSizeMedium: z, fontSizeLarge: O, lineHeight: f, lineHeightTextarea: f, borderRadius: h, iconSize: "16px", groupLabelColor: a, textColor: o, textColorDisabled: A, textDecorationColor: o, groupLabelTextColor: o, caretColor: t, placeholderColor: _, placeholderColorDisabled: oe, color: a, colorDisabled: c, colorFocus: C(t, { alpha: 0.1 }), groupLabelBorder: "1px solid #0000", border: "1px solid #0000", borderHover: `1px solid ${l}`, borderDisabled: "1px solid #0000", borderFocus: `1px solid ${l}`, boxShadowFocus: `0 0 8px 0 ${C(t, { alpha: 0.3 })}`, loadingColor: t, loadingColorWarning: n, borderWarning: `1px solid ${n}`, borderHoverWarning: `1px solid ${s}`, colorFocusWarning: C(n, { alpha: 0.1 }), borderFocusWarning: `1px solid ${s}`, boxShadowFocusWarning: `0 0 8px 0 ${C(n, { alpha: 0.3 })}`, caretColorWarning: n, loadingColorError: i, borderError: `1px solid ${i}`, borderHoverError: `1px solid ${m}`, colorFocusError: C(i, { alpha: 0.1 }), borderFocusError: `1px solid ${m}`, boxShadowFocusError: `0 0 8px 0 ${C(i, { alpha: 0.3 })}`, caretColorError: i, clearColor: G, clearColorHover: M, clearColorPressed: V, iconColor: U, iconColorDisabled: Ae, iconColorHover: ie, iconColorPressed: te, suffixTextColor: o });
}
const X = Pr({ name: "Input", common: u, peers: { Scrollbar: Y }, self: Zt }), $t = { name: "AutoComplete", common: u, peers: { InternalSelectMenu: ye, Input: X }, self: Hr }, Vo = { name: "Avatar", common: u, self: Or }, Gt = { name: "AvatarGroup", common: u, peers: { Avatar: Vo }, self: Qr }, Yt = { name: "BackTop", common: u, self(e) {
  const { popoverColor: o, textColor2: r, primaryColorHover: A, primaryColorPressed: t } = e;
  return Object.assign(Object.assign({}, Tr), { color: o, textColor: r, iconColor: r, iconColorHover: A, iconColorPressed: t, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
} }, Kt = { name: "Badge", common: u, self(e) {
  const { errorColorSuppl: o, infoColorSuppl: r, successColorSuppl: A, warningColorSuppl: t, fontFamily: l } = e;
  return { color: o, colorInfo: r, colorSuccess: A, colorError: o, colorWarning: t, fontSize: "12px", fontFamily: l };
} }, Jt = { name: "Breadcrumb", common: u, self: Fr }, K = { name: "Button", common: u, self(e) {
  const o = Lr(e);
  return o.waveOpacity = "0.8", o.colorOpacitySecondary = "0.16", o.colorOpacitySecondaryHover = "0.2", o.colorOpacitySecondaryPressed = "0.12", o;
} }, Xt = { name: "Calendar", common: u, peers: { Button: K }, self: jr }, No = { name: "Card", common: u, self(e) {
  const o = Vr(e), { cardColor: r, modalColor: A, popoverColor: t } = e;
  return o.colorEmbedded = r, o.colorEmbeddedModal = A, o.colorEmbeddedPopover = t, o;
} }, qt = { name: "Carousel", common: u, self: Nr }, be = { name: "Checkbox", common: u, self(e) {
  const { cardColor: o } = e, r = Wr(e);
  return r.color = "#0000", r.checkMarkColor = o, r;
} }, _t = { name: "Cascader", common: u, peers: { InternalSelectMenu: ye, InternalSelection: Ao, Scrollbar: Y, Checkbox: be, Empty: $r }, self: Zr }, Wo = { name: "Code", common: u, self(e) {
  const { textColor2: o, fontSize: r, fontWeightStrong: A, textColor3: t } = e;
  return { textColor: o, fontSize: r, fontWeightStrong: A, "mono-3": "#5c6370", "hue-1": "#56b6c2", "hue-2": "#61aeee", "hue-3": "#c678dd", "hue-4": "#98c379", "hue-5": "#e06c75", "hue-5-2": "#be5046", "hue-6": "#d19a66", "hue-6-2": "#e6c07b", lineNumberTextColor: t };
} }, Ut = { name: "Collapse", common: u, self: Gr }, en = { name: "CollapseTransition", common: u, self: Yr }, on = { name: "ColorPicker", common: u, peers: { Input: X, Button: K }, self: Kr }, Zo = { name: "Popselect", common: u, peers: { Popover: pe, InternalSelectMenu: ye } }, $o = { name: "Select", common: u, peers: { InternalSelection: Ao, InternalSelectMenu: ye }, self: Jr }, Go = { name: "Pagination", common: u, peers: { Select: $o, Input: X, Popselect: Zo }, self(e) {
  const { primaryColor: o, opacity3: r } = e, A = C(o, { alpha: Number(r) }), t = Xr(e);
  return t.itemBorderActive = `1px solid ${A}`, t.itemBorderDisabled = "1px solid #0000", t;
} }, to = { name: "Dropdown", common: u, peers: { Popover: pe }, self(e) {
  const { primaryColorSuppl: o, primaryColor: r, popoverColor: A } = e, t = qr(e);
  return t.colorInverted = A, t.optionColorActive = C(r, { alpha: 0.15 }), t.optionColorActiveInverted = o, t.optionColorHoverInverted = o, t;
} }, Qe = { name: "Tooltip", common: u, peers: { Popover: pe }, self(e) {
  const { borderRadius: o, boxShadow2: r, popoverColor: A, textColor2: t } = e;
  return Object.assign(Object.assign({}, _r), { borderRadius: o, boxShadow: r, color: A, textColor: t });
} }, Yo = { name: "Ellipsis", common: u, peers: { Tooltip: Qe } }, Ko = { name: "Radio", common: u, self(e) {
  const { borderColor: o, primaryColor: r, baseColor: A, textColorDisabled: t, inputColorDisabled: l, textColor2: a, opacityDisabled: c, borderRadius: n, fontSizeSmall: s, fontSizeMedium: i, fontSizeLarge: m, heightSmall: h, heightMedium: f, heightLarge: x, lineHeight: k } = e;
  return Object.assign(Object.assign({}, Ur), { labelLineHeight: k, buttonHeightSmall: h, buttonHeightMedium: f, buttonHeightLarge: x, fontSizeSmall: s, fontSizeMedium: i, fontSizeLarge: m, boxShadow: `inset 0 0 0 1px ${o}`, boxShadowActive: `inset 0 0 0 1px ${r}`, boxShadowFocus: `inset 0 0 0 1px ${r}, 0 0 0 2px ${C(r, { alpha: 0.3 })}`, boxShadowHover: `inset 0 0 0 1px ${r}`, boxShadowDisabled: `inset 0 0 0 1px ${o}`, color: "#0000", colorDisabled: l, colorActive: "#0000", textColor: a, textColorDisabled: t, dotColorActive: r, dotColorDisabled: o, buttonBorderColor: o, buttonBorderColorActive: r, buttonBorderColorHover: r, buttonColor: "#0000", buttonColorActive: r, buttonTextColor: a, buttonTextColorActive: A, buttonTextColorHover: r, opacityDisabled: c, buttonBoxShadowFocus: `inset 0 0 0 1px ${r}, 0 0 0 2px ${C(r, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px ${r}`, buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: n });
} }, rn = { name: "DataTable", common: u, peers: { Button: K, Checkbox: be, Radio: Ko, Pagination: Go, Scrollbar: Y, Empty: he, Popover: pe, Ellipsis: Yo, Dropdown: to }, self(e) {
  const o = eA(e);
  return o.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)", o.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)", o;
} }, An = { name: "Icon", common: u, self: oA }, Jo = { name: "TimePicker", common: u, peers: { Scrollbar: Y, Button: K, Input: X }, self: rA }, tn = { name: "DatePicker", common: u, peers: { Input: X, Button: K, TimePicker: Jo, Scrollbar: Y }, self(e) {
  const { popoverColor: o, hoverColor: r, primaryColor: A } = e, t = AA(e);
  return t.itemColorDisabled = Se(o, r), t.itemColorIncluded = C(A, { alpha: 0.15 }), t.itemColorHover = Se(o, r), t;
} }, nn = { name: "Descriptions", common: u, self: tA }, Xo = { name: "Dialog", common: u, peers: { Button: K }, self: nA }, an = { name: "Modal", common: u, peers: { Scrollbar: Y, Dialog: Xo, Card: No }, self: aA }, ln = le("n-modal-provider"), sn = le("n-modal-api"), cn = le("n-modal-reactive-list"), dn = Object.assign(Object.assign({}, sA), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, internalStyle: [String, Object], maskClosable: { type: Boolean, default: true }, zIndex: Number, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function, draggable: [Boolean, Object] }), un = L({ name: "DialogEnvironment", props: Object.assign(Object.assign({}, dn), { internalKey: { type: String, required: true }, to: [String, Object], onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = Q(true);
  function r() {
    const { onInternalAfterLeave: i, internalKey: m, onAfterLeave: h } = e;
    i && i(m), h && h();
  }
  function A(i) {
    const { onPositiveClick: m } = e;
    m ? Promise.resolve(m(i)).then((h) => {
      h !== false && n();
    }) : n();
  }
  function t(i) {
    const { onNegativeClick: m } = e;
    m ? Promise.resolve(m(i)).then((h) => {
      h !== false && n();
    }) : n();
  }
  function l() {
    const { onClose: i } = e;
    i ? Promise.resolve(i()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function a(i) {
    const { onMaskClick: m, maskClosable: h } = e;
    m && (m(i), h && n());
  }
  function c() {
    const { onEsc: i } = e;
    i && i();
  }
  function n() {
    o.value = false;
  }
  function s(i) {
    o.value = i;
  }
  return { show: o, hide: n, handleUpdateShow: s, handleAfterLeave: r, handleCloseClick: l, handleNegativeClick: t, handlePositiveClick: A, handleMaskClick: a, handleEsc: c };
}, render() {
  const { handlePositiveClick: e, handleUpdateShow: o, handleNegativeClick: r, handleCloseClick: A, handleAfterLeave: t, handleMaskClick: l, handleEsc: a, to: c, zIndex: n, maskClosable: s, show: i } = this;
  return g(Ro, { show: i, onUpdateShow: o, onMaskClick: l, onEsc: a, to: c, zIndex: n, maskClosable: s, onAfterEnter: this.onAfterEnter, onAfterLeave: t, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, draggable: this.draggable, internalAppear: true, internalDialog: true }, { default: ({ draggableClass: m }) => g(lA, Object.assign({}, Pe(this.$props, iA), { titleClass: So([this.titleClass, m]), style: this.internalStyle, onClose: A, onNegativeClick: r, onPositiveClick: e })) });
} }), mn = { injectionKey: String, to: [String, Object] }, hn = L({ name: "DialogProvider", props: mn, setup() {
  const e = Q([]), o = {};
  function r(c = {}) {
    const n = Oe(), s = qe(Object.assign(Object.assign({}, c), { key: n, destroy: () => {
      var i;
      (i = o[`n-dialog-${n}`]) === null || i === void 0 || i.hide();
    } }));
    return e.value.push(s), s;
  }
  const A = ["info", "success", "warning", "error"].map((c) => (n) => r(Object.assign(Object.assign({}, n), { type: c })));
  function t(c) {
    const { value: n } = e;
    n.splice(n.findIndex((s) => s.key === c), 1);
  }
  function l() {
    Object.values(o).forEach((c) => {
      c == null ? void 0 : c.hide();
    });
  }
  const a = { create: r, destroyAll: l, info: A[0], success: A[1], warning: A[2], error: A[3] };
  return N(dA, a), N(cA, { clickedRef: Po(64), clickedPositionRef: zo() }), N(uA, e), Object.assign(Object.assign({}, a), { dialogList: e, dialogInstRefs: o, handleAfterLeave: t });
}, render() {
  var e, o;
  return g(Ce, null, [this.dialogList.map((r) => g(un, Ue(r, ["destroy", "style"], { internalStyle: r.style, to: this.to, ref: (A) => {
    A === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = A;
  }, internalKey: r.key, onInternalAfterLeave: this.handleAfterLeave }))), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), qo = le("n-loading-bar"), pn = le("n-loading-bar-api"), vn = { name: "LoadingBar", common: u, self(e) {
  const { primaryColor: o } = e;
  return { colorError: "red", colorLoading: o, height: "2px" };
} }, gn = B("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [mA({ enterDuration: "0.3s", leaveDuration: "0.8s" }), B("loading-bar", `
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `, [P("starting", `
 background: var(--n-color-loading);
 `), P("finishing", `
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `), P("error", `
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);
var De = function(e, o, r, A) {
  function t(l) {
    return l instanceof r ? l : new r(function(a) {
      a(l);
    });
  }
  return new (r || (r = Promise))(function(l, a) {
    function c(i) {
      try {
        s(A.next(i));
      } catch (m) {
        a(m);
      }
    }
    function n(i) {
      try {
        s(A.throw(i));
      } catch (m) {
        a(m);
      }
    }
    function s(i) {
      i.done ? l(i.value) : t(i.value).then(c, n);
    }
    s((A = A.apply(e, o || [])).next());
  });
};
function Re(e, o) {
  return `${o}-loading-bar ${o}-loading-bar--${e}`;
}
const Cn = L({ name: "LoadingBar", props: { containerClass: String, containerStyle: [String, Object] }, setup() {
  const { inlineThemeDisabled: e } = Be(), { props: o, mergedClsPrefixRef: r } = ee(qo), A = Q(null), t = Q(false), l = Q(false), a = Q(false), c = Q(false);
  let n = false;
  const s = Q(false), i = S(() => {
    const { loadingBarStyle: w } = o;
    return w ? w[s.value ? "error" : "loading"] : "";
  });
  function m() {
    return De(this, void 0, void 0, function* () {
      t.value = false, a.value = false, n = false, s.value = false, c.value = true, yield ge(), c.value = false;
    });
  }
  function h() {
    return De(this, arguments, void 0, function* (w = 0, G = 80, M = "starting") {
      if (l.value = true, yield m(), n) return;
      a.value = true, yield ge();
      const V = A.value;
      V && (V.style.maxWidth = `${w}%`, V.style.transition = "none", V.offsetWidth, V.className = Re(M, r.value), V.style.transition = "", V.style.maxWidth = `${G}%`);
    });
  }
  function f() {
    return De(this, void 0, void 0, function* () {
      if (n || s.value) return;
      l.value && (yield ge()), n = true;
      const w = A.value;
      w && (w.className = Re("finishing", r.value), w.style.maxWidth = "100%", w.offsetWidth, a.value = false);
    });
  }
  function x() {
    if (!(n || s.value)) if (!a.value) h(100, 100, "error").then(() => {
      s.value = true;
      const w = A.value;
      w && (w.className = Re("error", r.value), w.offsetWidth, a.value = false);
    });
    else {
      s.value = true;
      const w = A.value;
      if (!w) return;
      w.className = Re("error", r.value), w.style.maxWidth = "100%", w.offsetWidth, a.value = false;
    }
  }
  function k() {
    t.value = true;
  }
  function z() {
    t.value = false;
  }
  function O() {
    return De(this, void 0, void 0, function* () {
      yield m();
    });
  }
  const $ = fe("LoadingBar", "-loading-bar", gn, hA, o, r), W = S(() => {
    const { self: { height: w, colorError: G, colorLoading: M } } = $.value;
    return { "--n-height": w, "--n-color-loading": M, "--n-color-error": G };
  }), T = e ? eo("loading-bar", void 0, W, o) : void 0;
  return { mergedClsPrefix: r, loadingBarRef: A, started: l, loading: a, entering: t, transitionDisabled: c, start: h, error: x, finish: f, handleEnter: k, handleAfterEnter: z, handleAfterLeave: O, mergedLoadingBarStyle: i, cssVars: e ? void 0 : W, themeClass: T == null ? void 0 : T.themeClass, onRender: T == null ? void 0 : T.onRender };
}, render() {
  if (!this.started) return null;
  const { mergedClsPrefix: e } = this;
  return g(Bo, { name: "fade-in-transition", appear: true, onEnter: this.handleEnter, onAfterEnter: this.handleAfterEnter, onAfterLeave: this.handleAfterLeave, css: !this.transitionDisabled }, { default: () => {
    var o;
    return (o = this.onRender) === null || o === void 0 || o.call(this), dr(g("div", { class: [`${e}-loading-bar-container`, this.themeClass, this.containerClass], style: this.containerStyle }, g("div", { ref: "loadingBarRef", class: [`${e}-loading-bar`], style: [this.cssVars, this.mergedLoadingBarStyle] })), [[ur, this.loading || !this.loading && this.entering]]);
  } });
} }), fn = Object.assign(Object.assign({}, fe.props), { to: { type: [String, Object, Boolean], default: void 0 }, containerClass: String, containerStyle: [String, Object], loadingBarStyle: { type: Object } }), bn = L({ name: "LoadingBarProvider", props: fn, setup(e) {
  const o = pA(), r = Q(null), A = { start() {
    var l;
    o.value ? (l = r.value) === null || l === void 0 || l.start() : ge(() => {
      var a;
      (a = r.value) === null || a === void 0 || a.start();
    });
  }, error() {
    var l;
    o.value ? (l = r.value) === null || l === void 0 || l.error() : ge(() => {
      var a;
      (a = r.value) === null || a === void 0 || a.error();
    });
  }, finish() {
    var l;
    o.value ? (l = r.value) === null || l === void 0 || l.finish() : ge(() => {
      var a;
      (a = r.value) === null || a === void 0 || a.finish();
    });
  } }, { mergedClsPrefixRef: t } = Be(e);
  return N(pn, A), N(qo, { props: e, mergedClsPrefixRef: t }), Object.assign(A, { loadingBarRef: r });
}, render() {
  var e, o;
  return g(Ce, null, g(yo, { disabled: this.to === false, to: this.to || "body" }, g(Cn, { ref: "loadingBarRef", containerStyle: this.containerStyle, containerClass: this.containerClass })), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e));
} }), xn = { name: "Message", common: u, self: vA }, _o = { icon: Function, type: { type: String, default: "info" }, content: [String, Number, Function], showIcon: { type: Boolean, default: true }, closable: Boolean, keepAliveOnHover: Boolean, onClose: Function, onMouseenter: Function, onMouseleave: Function }, In = R([B("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [Mo({ overflow: "visible", originalTransition: "transform .3s var(--n-bezier)", enterToProps: { transform: "scale(1)" }, leaveToProps: { transform: "scale(0.85)" } })]), B("message", `
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
 `, [y("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), y("icon", `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => P(`${e}-type`, [R("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), R("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [gA()])]), y("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [R("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), R("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), B("message-container", `
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
 `)])]), Sn = { info: () => g(kA, null), success: () => g(yA, null), warning: () => g(BA, null), error: () => g(SA, null), default: () => null }, Bn = L({ name: "Message", props: Object.assign(Object.assign({}, _o), { render: Function }), setup(e) {
  const { inlineThemeDisabled: o, mergedRtlRef: r } = Be(e), { props: A, mergedClsPrefixRef: t } = ee(Ho), l = bA("Message", r, t), a = fe("Message", "-message", In, IA, A, t), c = S(() => {
    const { type: s } = e, { common: { cubicBezierEaseInOut: i }, self: { padding: m, margin: h, maxWidth: f, iconMargin: x, closeMargin: k, closeSize: z, iconSize: O, fontSize: $, lineHeight: W, borderRadius: T, border: w, iconColorInfo: G, iconColorSuccess: M, iconColorWarning: V, iconColorError: _, iconColorLoading: oe, closeIconSize: U, closeBorderRadius: Ae, [ne("textColor", s)]: ie, [ne("boxShadow", s)]: te, [ne("color", s)]: xe, [ne("closeColorHover", s)]: Te, [ne("closeColorPressed", s)]: Fe, [ne("closeIconColor", s)]: Le, [ne("closeIconColorPressed", s)]: je, [ne("closeIconColorHover", s)]: Ve } } = a.value;
    return { "--n-bezier": i, "--n-margin": h, "--n-padding": m, "--n-max-width": f, "--n-font-size": $, "--n-icon-margin": x, "--n-icon-size": O, "--n-close-icon-size": U, "--n-close-border-radius": Ae, "--n-close-size": z, "--n-close-margin": k, "--n-text-color": ie, "--n-color": xe, "--n-box-shadow": te, "--n-icon-color-info": G, "--n-icon-color-success": M, "--n-icon-color-warning": V, "--n-icon-color-error": _, "--n-icon-color-loading": oe, "--n-close-color-hover": Te, "--n-close-color-pressed": Fe, "--n-close-icon-color": Le, "--n-close-icon-color-pressed": je, "--n-close-icon-color-hover": Ve, "--n-line-height": W, "--n-border-radius": T, "--n-border": w };
  }), n = o ? eo("message", S(() => e.type[0]), c, {}) : void 0;
  return { mergedClsPrefix: t, rtlEnabled: l, messageProviderProps: A, handleClose() {
    var s;
    (s = e.onClose) === null || s === void 0 || s.call(e);
  }, cssVars: o ? void 0 : c, themeClass: n == null ? void 0 : n.themeClass, onRender: n == null ? void 0 : n.onRender, placement: A.placement };
}, render() {
  const { render: e, type: o, closable: r, content: A, mergedClsPrefix: t, cssVars: l, themeClass: a, onRender: c, icon: n, handleClose: s, showIcon: i } = this;
  c == null ? void 0 : c();
  let m;
  return g("div", { class: [`${t}-message-wrapper`, a], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [{ alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end" }, l] }, e ? e(this.$props) : g("div", { class: [`${t}-message ${t}-message--${o}-type`, this.rtlEnabled && `${t}-message--rtl`] }, (m = yn(n, o, t)) && i ? g("div", { class: `${t}-message__icon ${t}-message__icon--${o}-type` }, g(CA, null, { default: () => m })) : null, g("div", { class: `${t}-message__content` }, ue(A)), r ? g(fA, { clsPrefix: t, class: `${t}-message__close`, onClick: s, absolute: true }) : null));
} });
function yn(e, o, r) {
  if (typeof e == "function") return e();
  {
    const A = o === "loading" ? g(xA, { clsPrefix: r, strokeWidth: 24, scale: 0.85 }) : Sn[o]();
    return A ? g(Oo, { clsPrefix: r, key: o }, { default: () => A }) : null;
  }
}
const kn = L({ name: "MessageEnvironment", props: Object.assign(Object.assign({}, _o), { duration: { type: Number, default: 3e3 }, onAfterLeave: Function, onLeave: Function, internalKey: { type: String, required: true }, onInternalAfterLeave: Function, onHide: Function, onAfterHide: Function }), setup(e) {
  let o = null;
  const r = Q(true);
  _e(() => {
    A();
  });
  function A() {
    const { duration: i } = e;
    i && (o = window.setTimeout(a, i));
  }
  function t(i) {
    i.currentTarget === i.target && o !== null && (window.clearTimeout(o), o = null);
  }
  function l(i) {
    i.currentTarget === i.target && A();
  }
  function a() {
    const { onHide: i } = e;
    r.value = false, o && (window.clearTimeout(o), o = null), i && i();
  }
  function c() {
    const { onClose: i } = e;
    i && i(), a();
  }
  function n() {
    const { onAfterLeave: i, onInternalAfterLeave: m, onAfterHide: h, internalKey: f } = e;
    i && i(), m && m(f), h && h();
  }
  function s() {
    a();
  }
  return { show: r, hide: a, handleClose: c, handleAfterLeave: n, handleMouseleave: l, handleMouseenter: t, deactivate: s };
}, render() {
  return g(Qo, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, { default: () => [this.show ? g(Bn, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null] });
} }), En = Object.assign(Object.assign({}, fe.props), { to: [String, Object], duration: { type: Number, default: 3e3 }, keepAliveOnHover: Boolean, max: Number, placement: { type: String, default: "top" }, closable: Boolean, containerClass: String, containerStyle: [String, Object] }), wn = L({ name: "MessageProvider", props: En, setup(e) {
  const { mergedClsPrefixRef: o } = Be(e), r = Q([]), A = Q({}), t = { create(n, s) {
    return l(n, Object.assign({ type: "default" }, s));
  }, info(n, s) {
    return l(n, Object.assign(Object.assign({}, s), { type: "info" }));
  }, success(n, s) {
    return l(n, Object.assign(Object.assign({}, s), { type: "success" }));
  }, warning(n, s) {
    return l(n, Object.assign(Object.assign({}, s), { type: "warning" }));
  }, error(n, s) {
    return l(n, Object.assign(Object.assign({}, s), { type: "error" }));
  }, loading(n, s) {
    return l(n, Object.assign(Object.assign({}, s), { type: "loading" }));
  }, destroyAll: c };
  N(Ho, { props: e, mergedClsPrefixRef: o }), N(EA, t);
  function l(n, s) {
    const i = Oe(), m = qe(Object.assign(Object.assign({}, s), { content: n, key: i, destroy: () => {
      var f;
      (f = A.value[i]) === null || f === void 0 || f.hide();
    } })), { max: h } = e;
    return h && r.value.length >= h && r.value.shift(), r.value.push(m), m;
  }
  function a(n) {
    r.value.splice(r.value.findIndex((s) => s.key === n), 1), delete A.value[n];
  }
  function c() {
    Object.values(A.value).forEach((n) => {
      n.hide();
    });
  }
  return Object.assign({ mergedClsPrefix: o, messageRefs: A, messageList: r, handleAfterLeave: a }, t);
}, render() {
  var e, o, r;
  return g(Ce, null, (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e), this.messageList.length ? g(yo, { to: (r = this.to) !== null && r !== void 0 ? r : "body" }, g("div", { class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass], key: "message-container", style: this.containerStyle }, this.messageList.map((A) => g(kn, Object.assign({ ref: (t) => {
    t && (this.messageRefs[A.key] = t);
  }, internalKey: A.key, onInternalAfterLeave: this.handleAfterLeave }, Ue(A, ["destroy"], void 0), { duration: A.duration === void 0 ? this.duration : A.duration, keepAliveOnHover: A.keepAliveOnHover === void 0 ? this.keepAliveOnHover : A.keepAliveOnHover, closable: A.closable === void 0 ? this.closable : A.closable }))))) : null);
} }), Dn = L({ name: "ModalEnvironment", props: Object.assign(Object.assign({}, wA), { internalKey: { type: String, required: true }, onInternalAfterLeave: { type: Function, required: true } }), setup(e) {
  const o = Q(true);
  function r() {
    const { onInternalAfterLeave: i, internalKey: m, onAfterLeave: h } = e;
    i && i(m), h && h();
  }
  function A() {
    const { onPositiveClick: i } = e;
    i ? Promise.resolve(i()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function t() {
    const { onNegativeClick: i } = e;
    i ? Promise.resolve(i()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function l() {
    const { onClose: i } = e;
    i ? Promise.resolve(i()).then((m) => {
      m !== false && n();
    }) : n();
  }
  function a(i) {
    const { onMaskClick: m, maskClosable: h } = e;
    m && (m(i), h && n());
  }
  function c() {
    const { onEsc: i } = e;
    i && i();
  }
  function n() {
    o.value = false;
  }
  function s(i) {
    o.value = i;
  }
  return { show: o, hide: n, handleUpdateShow: s, handleAfterLeave: r, handleCloseClick: l, handleNegativeClick: t, handlePositiveClick: A, handleMaskClick: a, handleEsc: c };
}, render() {
  const { handleUpdateShow: e, handleAfterLeave: o, handleMaskClick: r, handleEsc: A, show: t } = this;
  return g(Ro, Object.assign({}, this.$props, { show: t, onUpdateShow: e, onMaskClick: r, onEsc: A, onAfterLeave: o, internalAppear: true, internalModal: true }), this.$slots);
} }), Rn = { to: [String, Object] }, zn = L({ name: "ModalProvider", props: Rn, setup() {
  const e = Q([]), o = {};
  function r(a = {}) {
    const c = Oe(), n = qe(Object.assign(Object.assign({}, a), { key: c, destroy: () => {
      var s;
      (s = o[`n-modal-${c}`]) === null || s === void 0 || s.hide();
    } }));
    return e.value.push(n), n;
  }
  function A(a) {
    const { value: c } = e;
    c.splice(c.findIndex((n) => n.key === a), 1);
  }
  function t() {
    Object.values(o).forEach((a) => {
      a == null ? void 0 : a.hide();
    });
  }
  const l = { create: r, destroyAll: t };
  return N(sn, l), N(ln, { clickedRef: Po(64), clickedPositionRef: zo() }), N(cn, e), Object.assign(Object.assign({}, l), { modalList: e, modalInstRefs: o, handleAfterLeave: A });
}, render() {
  var e, o;
  return g(Ce, null, [this.modalList.map((r) => {
    var A;
    return g(Dn, Ue(r, ["destroy", "render"], { to: (A = r.to) !== null && A !== void 0 ? A : this.to, ref: (t) => {
      t === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = t;
    }, internalKey: r.key, onInternalAfterLeave: this.handleAfterLeave }), { default: r.render });
  }), (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e)]);
} }), Pn = { name: "Notification", common: u, peers: { Scrollbar: Y }, self: DA }, Mn = { name: "Divider", common: u, self: RA }, Hn = { name: "Drawer", common: u, peers: { Scrollbar: Y }, self: zA }, On = { name: "DynamicInput", common: u, peers: { Input: X, Button: K }, self() {
  return PA;
} }, Uo = { name: "Space", self() {
  return MA;
} }, Qn = { name: "DynamicTags", common: u, peers: { Input: X, Button: K, Tag: jo, Space: Uo }, self() {
  return { inputWidth: "64px" };
} }, Tn = { name: "Element", common: u }, Fn = { name: "Flex", self() {
  return HA;
} }, Ln = { name: "ButtonGroup", common: u }, jn = { name: "Form", common: u, self: OA }, Vn = { name: "GradientText", common: u, self(e) {
  const { primaryColor: o, successColor: r, warningColor: A, errorColor: t, infoColor: l, primaryColorSuppl: a, successColorSuppl: c, warningColorSuppl: n, errorColorSuppl: s, infoColorSuppl: i, fontWeightStrong: m } = e;
  return { fontWeight: m, rotate: "252deg", colorStartPrimary: o, colorEndPrimary: a, colorStartInfo: l, colorEndInfo: i, colorStartWarning: A, colorEndWarning: n, colorStartError: t, colorEndError: s, colorStartSuccess: r, colorEndSuccess: c };
} }, Nn = { name: "InputNumber", common: u, peers: { Button: K, Input: X }, self(e) {
  const { textColorDisabled: o } = e;
  return { iconColorDisabled: o };
} }, Wn = { name: "InputOtp", common: u, peers: { Input: X }, self: QA }, Zn = { name: "Layout", common: u, peers: { Scrollbar: Y }, self(e) {
  const { textColor2: o, bodyColor: r, popoverColor: A, cardColor: t, dividerColor: l, scrollbarColor: a, scrollbarColorHover: c } = e;
  return { textColor: o, textColorInverted: o, color: r, colorEmbedded: r, headerColor: t, headerColorInverted: t, footerColor: t, footerColorInverted: t, headerBorderColor: l, headerBorderColorInverted: l, footerBorderColor: l, footerBorderColorInverted: l, siderBorderColor: l, siderBorderColorInverted: l, siderColor: t, siderColorInverted: t, siderToggleButtonBorder: "1px solid transparent", siderToggleButtonColor: A, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: Se(r, a), siderToggleBarColorHover: Se(r, c), __invertScrollbar: "false" };
} }, $n = { name: "Row", common: u }, Gn = { name: "List", common: u, self: TA }, Yn = { name: "Log", common: u, peers: { Scrollbar: Y, Code: Wo }, self(e) {
  const { textColor2: o, inputColor: r, fontSize: A, primaryColor: t } = e;
  return { loaderFontSize: A, loaderTextColor: o, loaderColor: r, loaderBorder: "1px solid #0000", loadingColor: t };
} }, Kn = { name: "Mention", common: u, peers: { InternalSelectMenu: ye, Input: X }, self(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
} }, Jn = { name: "Menu", common: u, peers: { Tooltip: Qe, Dropdown: to }, self(e) {
  const { primaryColor: o, primaryColorSuppl: r } = e, A = FA(e);
  return A.itemColorActive = C(o, { alpha: 0.15 }), A.itemColorActiveHover = C(o, { alpha: 0.15 }), A.itemColorActiveCollapsed = C(o, { alpha: 0.15 }), A.itemColorActiveInverted = r, A.itemColorActiveHoverInverted = r, A.itemColorActiveCollapsedInverted = r, A;
} }, Xn = { name: "PageHeader", common: u, self: LA }, qn = { name: "Popconfirm", common: u, peers: { Button: K, Popover: pe }, self: jA }, er = { name: "Progress", common: u, self(e) {
  const o = VA(e);
  return o.textColorLineInner = "rgb(0, 0, 0)", o.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)", o;
} }, _n = { name: "Rate", common: u, self(e) {
  const { railColor: o } = e;
  return { itemColor: o, itemColorActive: "#CCAA33", itemSize: "20px", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
} }, Un = { name: "Result", common: u, self: NA }, ea = { name: "Slider", common: u, self(e) {
  const o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: r, modalColor: A, primaryColorSuppl: t, popoverColor: l, textColor2: a, cardColor: c, borderRadius: n, fontSize: s, opacityDisabled: i } = e;
  return Object.assign(Object.assign({}, WA), { fontSize: s, markFontSize: s, railColor: r, railColorHover: r, fillColor: t, fillColorHover: t, opacityDisabled: i, handleColor: "#FFF", dotColor: c, dotColorModal: A, dotColorPopover: l, handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", indicatorColor: l, indicatorBoxShadow: o, indicatorTextColor: a, indicatorBorderRadius: n, dotBorder: `2px solid ${r}`, dotBorderActive: `2px solid ${t}`, dotBoxShadow: "" });
} }, oa = { name: "Spin", common: u, self: ZA }, ra = { name: "Statistic", common: u, self: $A }, Aa = { name: "Steps", common: u, self: GA }, ta = { name: "Switch", common: u, self(e) {
  const { primaryColorSuppl: o, opacityDisabled: r, borderRadius: A, primaryColor: t, textColor2: l, baseColor: a } = e;
  return Object.assign(Object.assign({}, YA), { iconColor: a, textColor: l, loadingColor: o, opacityDisabled: r, railColor: "rgba(255, 255, 255, .20)", railColorActive: o, buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)", buttonColor: "#FFF", railBorderRadiusSmall: A, railBorderRadiusMedium: A, railBorderRadiusLarge: A, buttonBorderRadiusSmall: A, buttonBorderRadiusMedium: A, buttonBorderRadiusLarge: A, boxShadowFocus: `0 0 8px 0 ${C(t, { alpha: 0.3 })}` });
} }, na = { name: "Table", common: u, self: KA }, aa = { name: "Tabs", common: u, self(e) {
  const o = JA(e), { inputColor: r } = e;
  return o.colorSegment = r, o.tabColorSegment = r, o;
} }, la = { name: "Thing", common: u, self: XA }, ia = { name: "Timeline", common: u, self(e) {
  const { textColor3: o, infoColorSuppl: r, errorColorSuppl: A, successColorSuppl: t, warningColorSuppl: l, textColor1: a, textColor2: c, railColor: n, fontWeightStrong: s, fontSize: i } = e;
  return Object.assign(Object.assign({}, qA), { contentFontSize: i, titleFontWeight: s, circleBorder: `2px solid ${o}`, circleBorderInfo: `2px solid ${r}`, circleBorderError: `2px solid ${A}`, circleBorderSuccess: `2px solid ${t}`, circleBorderWarning: `2px solid ${l}`, iconColor: o, iconColorInfo: r, iconColorError: A, iconColorSuccess: t, iconColorWarning: l, titleTextColor: a, contentTextColor: c, metaTextColor: o, lineColor: n });
} }, sa = { name: "Transfer", common: u, peers: { Checkbox: be, Scrollbar: Y, Input: X, Empty: he, Button: K }, self(e) {
  const { fontWeight: o, fontSizeLarge: r, fontSizeMedium: A, fontSizeSmall: t, heightLarge: l, heightMedium: a, borderRadius: c, inputColor: n, tableHeaderColor: s, textColor1: i, textColorDisabled: m, textColor2: h, textColor3: f, hoverColor: x, closeColorHover: k, closeColorPressed: z, closeIconColor: O, closeIconColorHover: $, closeIconColorPressed: W, dividerColor: T } = e;
  return Object.assign(Object.assign({}, _A), { itemHeightSmall: a, itemHeightMedium: a, itemHeightLarge: l, fontSizeSmall: t, fontSizeMedium: A, fontSizeLarge: r, borderRadius: c, dividerColor: T, borderColor: "#0000", listColor: n, headerColor: s, titleTextColor: i, titleTextColorDisabled: m, extraTextColor: f, extraTextColorDisabled: m, itemTextColor: h, itemTextColorDisabled: m, itemColorPending: x, titleFontWeight: o, closeColorHover: k, closeColorPressed: z, closeIconColor: O, closeIconColorHover: $, closeIconColorPressed: W });
} }, or = { name: "Tree", common: u, peers: { Checkbox: be, Scrollbar: Y, Empty: he }, self(e) {
  const { primaryColor: o } = e, r = UA(e);
  return r.nodeColorActive = C(o, { alpha: 0.15 }), r;
} }, ca = { name: "TreeSelect", common: u, peers: { Tree: or, Empty: he, InternalSelection: Ao } }, da = { name: "Typography", common: u, self: et }, ua = { name: "Upload", common: u, peers: { Button: K, Progress: er }, self(e) {
  const { errorColor: o } = e, r = ot(e);
  return r.itemColorHoverError = C(o, { alpha: 0.09 }), r;
} }, ma = { name: "Watermark", common: u, self(e) {
  const { fontFamily: o } = e;
  return { fontFamily: o };
} }, ha = { name: "FloatButton", common: u, self(e) {
  const { popoverColor: o, textColor2: r, buttonColor2Hover: A, buttonColor2Pressed: t, primaryColor: l, primaryColorHover: a, primaryColorPressed: c, baseColor: n, borderRadius: s } = e;
  return { color: o, textColor: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)", colorHover: A, colorPressed: t, colorPrimary: l, colorPrimaryHover: a, colorPrimaryPressed: c, textColorPrimary: n, borderRadiusSquare: s };
} }, pa = L({ name: "GlobalStyle", setup() {
  if (typeof document > "u") return;
  const e = ee(rt, null), { body: o } = document, { style: r } = o;
  let A = false, t = true;
  Io(() => {
    Ge(() => {
      var l, a;
      const { textColor2: c, fontSize: n, fontFamily: s, bodyColor: i, cubicBezierEaseInOut: m, lineHeight: h } = e ? At({}, ((l = e.mergedThemeRef.value) === null || l === void 0 ? void 0 : l.common) || uo, (a = e.mergedThemeOverridesRef.value) === null || a === void 0 ? void 0 : a.common) : uo;
      if (A || !o.hasAttribute("n-styled")) {
        r.setProperty("-webkit-text-size-adjust", "100%"), r.setProperty("-webkit-tap-highlight-color", "transparent"), r.padding = "0", r.margin = "0", r.backgroundColor = i, r.color = c, r.fontSize = n, r.fontFamily = s, r.lineHeight = h;
        const f = `color .3s ${m}, background-color .3s ${m}`;
        t ? setTimeout(() => {
          r.transition = f;
        }, 0) : r.transition = f, o.setAttribute("n-styled", ""), A = true, t = false;
      }
    });
  }), mr(() => {
    A && o.removeAttribute("n-styled");
  });
}, render() {
  return null;
} }), va = { name: "Heatmap", common: u, self(e) {
  const o = tt(e);
  return Object.assign(Object.assign({}, o), { activeColors: ["#0d4429", "#006d32", "#26a641", "#39d353"], mininumColor: "rgba(255, 255, 255, 0.1)", loadingColorStart: "rgba(255, 255, 255, 0.12)", loadingColorEnd: "rgba(255, 255, 255, 0.18)" });
} }, ga = { name: "IconWrapper", common: u, self: nt }, Ca = { name: "Image", common: u, peers: { Tooltip: Qe }, self: (e) => {
  const { textColor2: o } = e;
  return { toolbarIconColor: o, toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
} }, fa = { name: "Transfer", common: u, peers: { Checkbox: be, Scrollbar: Y, Input: X, Empty: he, Button: K }, self(e) {
  const { iconColorDisabled: o, iconColor: r, fontWeight: A, fontSizeLarge: t, fontSizeMedium: l, fontSizeSmall: a, heightLarge: c, heightMedium: n, heightSmall: s, borderRadius: i, inputColor: m, tableHeaderColor: h, textColor1: f, textColorDisabled: x, textColor2: k, hoverColor: z } = e;
  return Object.assign(Object.assign({}, at), { itemHeightSmall: s, itemHeightMedium: n, itemHeightLarge: c, fontSizeSmall: a, fontSizeMedium: l, fontSizeLarge: t, borderRadius: i, borderColor: "#0000", listColor: m, headerColor: h, titleTextColor: f, titleTextColorDisabled: x, extraTextColor: k, filterDividerColor: "#0000", itemTextColor: k, itemTextColorDisabled: x, itemColorPending: z, titleFontWeight: A, iconColor: r, iconColorDisabled: o });
} }, ba = { name: "Marquee", common: u, self: lt }, ke = le("n-menu"), rr = le("n-submenu"), no = le("n-menu-item-group"), go = [R("&::before", "background-color: var(--n-item-color-hover);"), y("arrow", `
 color: var(--n-arrow-color-hover);
 `), y("icon", `
 color: var(--n-item-icon-color-hover);
 `), B("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [R("a", `
 color: var(--n-item-text-color-hover);
 `), y("extra", `
 color: var(--n-item-text-color-hover);
 `)])], Co = [y("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), B("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [R("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), y("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])], xa = R([B("menu", `
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
 `, [B("submenu", "margin: 0;"), B("menu-item", "margin: 0;"), B("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [R("&::before", "display: none;"), P("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), B("menu-item-content", [P("selected", [y("icon", "color: var(--n-item-icon-color-active-horizontal);"), B("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [R("a", "color: var(--n-item-text-color-active-horizontal);"), y("extra", "color: var(--n-item-text-color-active-horizontal);")])]), P("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [B("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [R("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), y("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), y("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), Ie("disabled", [Ie("selected, child-active", [R("&:focus-within", Co)]), P("selected", [ce(null, [y("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), B("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [R("a", "color: var(--n-item-text-color-active-hover-horizontal);"), y("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), P("child-active", [ce(null, [y("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), B("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [R("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), y("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), ce("border-bottom: 2px solid var(--n-border-color-horizontal);", Co)]), B("menu-item-content-header", [R("a", "color: var(--n-item-text-color-horizontal);")])])]), Ie("responsive", [B("menu-item-content-header", `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), P("collapsed", [B("menu-item-content", [P("selected", [R("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), B("menu-item-content-header", "opacity: 0;"), y("arrow", "opacity: 0;"), y("icon", "color: var(--n-item-icon-color-collapsed);")])]), B("menu-item", `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), B("menu-item-content", `
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
 `, [R("> *", "z-index: 1;"), R("&::before", `
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
 `), P("collapsed", [y("arrow", "transform: rotate(0);")]), P("selected", [R("&::before", "background-color: var(--n-item-color-active);"), y("arrow", "color: var(--n-arrow-color-active);"), y("icon", "color: var(--n-item-icon-color-active);"), B("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [R("a", "color: var(--n-item-text-color-active);"), y("extra", "color: var(--n-item-text-color-active);")])]), P("child-active", [B("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [R("a", `
 color: var(--n-item-text-color-child-active);
 `), y("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), y("arrow", `
 color: var(--n-arrow-color-child-active);
 `), y("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), Ie("disabled", [Ie("selected, child-active", [R("&:focus-within", go)]), P("selected", [ce(null, [y("arrow", "color: var(--n-arrow-color-active-hover);"), y("icon", "color: var(--n-item-icon-color-active-hover);"), B("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [R("a", "color: var(--n-item-text-color-active-hover);"), y("extra", "color: var(--n-item-text-color-active-hover);")])])]), P("child-active", [ce(null, [y("arrow", "color: var(--n-arrow-color-child-active-hover);"), y("icon", "color: var(--n-item-icon-color-child-active-hover);"), B("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [R("a", "color: var(--n-item-text-color-child-active-hover);"), y("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), P("selected", [ce(null, [R("&::before", "background-color: var(--n-item-color-active-hover);")])]), ce(null, go)]), y("icon", `
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
 `), y("arrow", `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), B("menu-item-content-header", `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `, [R("a", `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [R("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), y("extra", `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), B("submenu", `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [B("menu-item-content", `
 height: var(--n-item-height);
 `), B("submenu-children", `
 overflow: hidden;
 padding: 0;
 `, [Mo({ duration: ".2s" })])]), B("menu-item-group", [B("menu-item-group-title", `
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
 `)])]), B("menu-tooltip", [R("a", `
 color: inherit;
 text-decoration: none;
 `)]), B("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function ce(e, o) {
  return [P("hover", e, o), R("&:hover", e, o)];
}
const Ar = L({ name: "MenuOptionContent", props: { collapsed: Boolean, disabled: Boolean, title: [String, Function], icon: Function, extra: [String, Function], showArrow: Boolean, childActive: Boolean, hover: Boolean, paddingLeft: Number, selected: Boolean, maxIconSize: { type: Number, required: true }, activeIconSize: { type: Number, required: true }, iconMarginRight: { type: Number, required: true }, clsPrefix: { type: String, required: true }, onClick: Function, tmNode: { type: Object, required: true }, isEllipsisPlaceholder: Boolean }, setup(e) {
  const { props: o } = ee(ke);
  return { menuProps: o, style: S(() => {
    const { paddingLeft: r } = e;
    return { paddingLeft: r && `${r}px` };
  }), iconStyle: S(() => {
    const { maxIconSize: r, activeIconSize: A, iconMarginRight: t } = e;
    return { width: `${r}px`, height: `${r}px`, fontSize: `${A}px`, marginRight: `${t}px` };
  }) };
}, render() {
  const { clsPrefix: e, tmNode: o, menuProps: { renderIcon: r, renderLabel: A, renderExtra: t, expandIcon: l } } = this, a = r ? r(o.rawNode) : ue(this.icon);
  return g("div", { onClick: (c) => {
    var n;
    (n = this.onClick) === null || n === void 0 || n.call(this, c);
  }, role: "none", class: [`${e}-menu-item-content`, { [`${e}-menu-item-content--selected`]: this.selected, [`${e}-menu-item-content--collapsed`]: this.collapsed, [`${e}-menu-item-content--child-active`]: this.childActive, [`${e}-menu-item-content--disabled`]: this.disabled, [`${e}-menu-item-content--hover`]: this.hover }], style: this.style }, a && g("div", { class: `${e}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [a]), g("div", { class: `${e}-menu-item-content-header`, role: "none" }, this.isEllipsisPlaceholder ? this.title : A ? A(o.rawNode) : ue(this.title), this.extra || t ? g("span", { class: `${e}-menu-item-content-header__extra` }, " ", t ? t(o.rawNode) : ue(this.extra)) : null), this.showArrow ? g(Oo, { ariaHidden: true, class: `${e}-menu-item-content__arrow`, clsPrefix: e }, { default: () => l ? l(o.rawNode) : g(Ft, null) }) : null);
} }), ze = 8;
function ao(e) {
  const o = ee(ke), { props: r, mergedCollapsedRef: A } = o, t = ee(rr, null), l = ee(no, null), a = S(() => r.mode === "horizontal"), c = S(() => a.value ? r.dropdownPlacement : "tmNodes" in e ? "right-start" : "right"), n = S(() => {
    var h;
    return Math.max((h = r.collapsedIconSize) !== null && h !== void 0 ? h : r.iconSize, r.iconSize);
  }), s = S(() => {
    var h;
    return !a.value && e.root && A.value && (h = r.collapsedIconSize) !== null && h !== void 0 ? h : r.iconSize;
  }), i = S(() => {
    if (a.value) return;
    const { collapsedWidth: h, indent: f, rootIndent: x } = r, { root: k, isGroup: z } = e, O = x === void 0 ? f : x;
    return k ? A.value ? h / 2 - n.value / 2 : O : l && typeof l.paddingLeftRef.value == "number" ? f / 2 + l.paddingLeftRef.value : t && typeof t.paddingLeftRef.value == "number" ? (z ? f / 2 : f) + t.paddingLeftRef.value : 0;
  }), m = S(() => {
    const { collapsedWidth: h, indent: f, rootIndent: x } = r, { value: k } = n, { root: z } = e;
    return a.value || !z || !A.value ? ze : (x === void 0 ? f : x) + k + ze - (h + k) / 2;
  });
  return { dropdownPlacement: c, activeIconSize: s, maxIconSize: n, paddingLeft: i, iconMarginRight: m, NMenu: o, NSubmenu: t, NMenuOptionGroup: l };
}
const lo = { internalKey: { type: [String, Number], required: true }, root: Boolean, isGroup: Boolean, level: { type: Number, required: true }, title: [String, Function], extra: [String, Function] }, Ia = L({ name: "MenuDivider", setup() {
  const e = ee(ke), { mergedClsPrefixRef: o, isHorizontalRef: r } = e;
  return () => r.value ? null : g("div", { class: `${o.value}-menu-divider` });
} }), tr = Object.assign(Object.assign({}, lo), { tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function }), Sa = oo(tr), Ba = L({ name: "MenuOption", props: tr, setup(e) {
  const o = ao(e), { NSubmenu: r, NMenu: A, NMenuOptionGroup: t } = o, { props: l, mergedClsPrefixRef: a, mergedCollapsedRef: c } = A, n = r ? r.mergedDisabledRef : t ? t.mergedDisabledRef : { value: false }, s = S(() => n.value || e.disabled);
  function i(h) {
    const { onClick: f } = e;
    f && f(h);
  }
  function m(h) {
    s.value || (A.doSelect(e.internalKey, e.tmNode.rawNode), i(h));
  }
  return { mergedClsPrefix: a, dropdownPlacement: o.dropdownPlacement, paddingLeft: o.paddingLeft, iconMarginRight: o.iconMarginRight, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, mergedTheme: A.mergedThemeRef, menuProps: l, dropdownEnabled: Ke(() => e.root && c.value && l.mode !== "horizontal" && !s.value), selected: Ke(() => A.mergedValueRef.value === e.internalKey), mergedDisabled: s, handleClick: m };
}, render() {
  const { mergedClsPrefix: e, mergedTheme: o, tmNode: r, menuProps: { renderLabel: A, nodeProps: t } } = this, l = t == null ? void 0 : t(r.rawNode);
  return g("div", Object.assign({}, l, { role: "menuitem", class: [`${e}-menu-item`, l == null ? void 0 : l.class] }), g(it, { theme: o.peers.Tooltip, themeOverrides: o.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: ["menu-tooltip"] }, { default: () => A ? A(r.rawNode) : ue(this.title), trigger: () => g(Ar, { tmNode: r, clsPrefix: e, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }) }));
} }), nr = Object.assign(Object.assign({}, lo), { tmNode: { type: Object, required: true }, tmNodes: { type: Array, required: true } }), ya = oo(nr), ka = L({ name: "MenuOptionGroup", props: nr, setup(e) {
  const o = ao(e), { NSubmenu: r } = o, A = S(() => (r == null ? void 0 : r.mergedDisabledRef.value) ? true : e.tmNode.disabled);
  N(no, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: A });
  const { mergedClsPrefixRef: t, props: l } = ee(ke);
  return function() {
    const { value: a } = t, c = o.paddingLeft.value, { nodeProps: n } = l, s = n == null ? void 0 : n(e.tmNode.rawNode);
    return g("div", { class: `${a}-menu-item-group`, role: "group" }, g("div", Object.assign({}, s, { class: [`${a}-menu-item-group-title`, s == null ? void 0 : s.class], style: [(s == null ? void 0 : s.style) || "", c !== void 0 ? `padding-left: ${c}px;` : ""] }), ue(e.title), e.extra ? g(Ce, null, " ", ue(e.extra)) : null), g("div", null, e.tmNodes.map((i) => io(i, l))));
  };
} });
function Je(e) {
  return e.type === "divider" || e.type === "render";
}
function Ea(e) {
  return e.type === "divider";
}
function io(e, o) {
  const { rawNode: r } = e, { show: A } = r;
  if (A === false) return null;
  if (Je(r)) return Ea(r) ? g(Ia, Object.assign({ key: e.key }, r.props)) : null;
  const { labelField: t } = o, { key: l, level: a, isGroup: c } = e, n = Object.assign(Object.assign({}, r), { title: r.title || r[t], extra: r.titleExtra || r.extra, key: l, internalKey: l, level: a, root: a === 0, isGroup: c });
  return e.children ? e.isGroup ? g(ka, Pe(n, ya, { tmNode: e, tmNodes: e.children, key: l })) : g(Xe, Pe(n, wa, { key: l, rawNodes: r[o.childrenField], tmNodes: e.children, tmNode: e })) : g(Ba, Pe(n, Sa, { key: l, tmNode: e }));
}
const ar = Object.assign(Object.assign({}, lo), { rawNodes: { type: Array, default: () => [] }, tmNodes: { type: Array, default: () => [] }, tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function, domId: String, virtualChildActive: { type: Boolean, default: void 0 }, isEllipsisPlaceholder: Boolean }), wa = oo(ar), Xe = L({ name: "Submenu", props: ar, setup(e) {
  const o = ao(e), { NMenu: r, NSubmenu: A } = o, { props: t, mergedCollapsedRef: l, mergedThemeRef: a } = r, c = S(() => {
    const { disabled: h } = e;
    return (A == null ? void 0 : A.mergedDisabledRef.value) || t.disabled ? true : h;
  }), n = Q(false);
  N(rr, { paddingLeftRef: o.paddingLeft, mergedDisabledRef: c }), N(no, null);
  function s() {
    const { onClick: h } = e;
    h && h();
  }
  function i() {
    c.value || (l.value || r.toggleExpand(e.internalKey), s());
  }
  function m(h) {
    n.value = h;
  }
  return { menuProps: t, mergedTheme: a, doSelect: r.doSelect, inverted: r.invertedRef, isHorizontal: r.isHorizontalRef, mergedClsPrefix: r.mergedClsPrefixRef, maxIconSize: o.maxIconSize, activeIconSize: o.activeIconSize, iconMarginRight: o.iconMarginRight, dropdownPlacement: o.dropdownPlacement, dropdownShow: n, paddingLeft: o.paddingLeft, mergedDisabled: c, mergedValue: r.mergedValueRef, childActive: Ke(() => {
    var h;
    return (h = e.virtualChildActive) !== null && h !== void 0 ? h : r.activePathRef.value.includes(e.internalKey);
  }), collapsed: S(() => t.mode === "horizontal" ? false : l.value ? true : !r.mergedExpandedKeysRef.value.includes(e.internalKey)), dropdownEnabled: S(() => !c.value && (t.mode === "horizontal" || l.value)), handlePopoverShowChange: m, handleClick: i };
}, render() {
  var e;
  const { mergedClsPrefix: o, menuProps: { renderIcon: r, renderLabel: A } } = this, t = () => {
    const { isHorizontal: a, paddingLeft: c, collapsed: n, mergedDisabled: s, maxIconSize: i, activeIconSize: m, title: h, childActive: f, icon: x, handleClick: k, menuProps: { nodeProps: z }, dropdownShow: O, iconMarginRight: $, tmNode: W, mergedClsPrefix: T, isEllipsisPlaceholder: w, extra: G } = this, M = z == null ? void 0 : z(W.rawNode);
    return g("div", Object.assign({}, M, { class: [`${T}-menu-item`, M == null ? void 0 : M.class], role: "menuitem" }), g(Ar, { tmNode: W, paddingLeft: c, collapsed: n, disabled: s, iconMarginRight: $, maxIconSize: i, activeIconSize: m, title: h, extra: G, showArrow: !a, childActive: f, clsPrefix: T, icon: x, hover: O, onClick: k, isEllipsisPlaceholder: w }));
  }, l = () => g(Qo, null, { default: () => {
    const { tmNodes: a, collapsed: c } = this;
    return c ? null : g("div", { class: `${o}-submenu-children`, role: "menu" }, a.map((n) => io(n, this.menuProps)));
  } });
  return this.root ? g(st, Object.assign({ size: "large", trigger: "hover" }, (e = this.menuProps) === null || e === void 0 ? void 0 : e.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: { fontSizeLarge: "14px", optionIconSizeLarge: "18px" }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: r, renderLabel: A }), { default: () => g("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, t(), this.isHorizontal ? null : l()) }) : g("div", { class: `${o}-submenu`, role: "menu", "aria-expanded": !this.collapsed, id: this.domId }, t(), l());
} }), Da = Object.assign(Object.assign({}, fe.props), { options: { type: Array, default: () => [] }, collapsed: { type: Boolean, default: void 0 }, collapsedWidth: { type: Number, default: 48 }, iconSize: { type: Number, default: 20 }, collapsedIconSize: { type: Number, default: 24 }, rootIndent: Number, indent: { type: Number, default: 32 }, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, disabledField: { type: String, default: "disabled" }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: { type: [String, Number], default: null }, mode: { type: String, default: "vertical" }, watchProps: { type: Array, default: void 0 }, disabled: Boolean, show: { type: Boolean, default: true }, inverted: Boolean, "onUpdate:expandedKeys": [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], "onUpdate:value": [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, dropdownProps: Object, accordion: Boolean, nodeProps: Function, dropdownPlacement: { type: String, default: "bottom" }, responsive: Boolean, items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array }), We = L({ name: "Menu", inheritAttrs: false, props: Da, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: r } = Be(e), A = fe("Menu", "-menu", xa, ht, e, o), t = ee(dt, null), l = S(() => {
    var b;
    const { collapsed: D } = e;
    if (D !== void 0) return D;
    if (t) {
      const { collapseModeRef: d, collapsedRef: I } = t;
      if (d.value === "width") return (b = I.value) !== null && b !== void 0 ? b : false;
    }
    return false;
  }), a = S(() => {
    const { keyField: b, childrenField: D, disabledField: d } = e;
    return Ne(e.items || e.options, { getIgnored(I) {
      return Je(I);
    }, getChildren(I) {
      return I[D];
    }, getDisabled(I) {
      return I[d];
    }, getKey(I) {
      var H;
      return (H = I[b]) !== null && H !== void 0 ? H : I.name;
    } });
  }), c = S(() => new Set(a.value.treeNodes.map((b) => b.key))), { watchProps: n } = e, s = Q(null);
  (n == null ? void 0 : n.includes("defaultValue")) ? Ge(() => {
    s.value = e.defaultValue;
  }) : s.value = e.defaultValue;
  const i = co(e, "value"), m = mo(i, s), h = Q([]), f = () => {
    h.value = e.defaultExpandAll ? a.value.getNonLeafKeys() : e.defaultExpandedNames || e.defaultExpandedKeys || a.value.getPath(m.value, { includeSelf: false }).keyPath;
  };
  (n == null ? void 0 : n.includes("defaultExpandedKeys")) ? Ge(f) : f();
  const x = mt(e, ["expandedNames", "expandedKeys"]), k = mo(x, h), z = S(() => a.value.treeNodes), O = S(() => a.value.getPath(m.value).keyPath);
  N(ke, { props: e, mergedCollapsedRef: l, mergedThemeRef: A, mergedValueRef: m, mergedExpandedKeysRef: k, activePathRef: O, mergedClsPrefixRef: o, isHorizontalRef: S(() => e.mode === "horizontal"), invertedRef: co(e, "inverted"), doSelect: $, toggleExpand: T });
  function $(b, D) {
    const { "onUpdate:value": d, onUpdateValue: I, onSelect: H } = e;
    I && se(I, b, D), d && se(d, b, D), H && se(H, b, D), s.value = b;
  }
  function W(b) {
    const { "onUpdate:expandedKeys": D, onUpdateExpandedKeys: d, onExpandedNamesChange: I, onOpenNamesChange: H } = e;
    D && se(D, b), d && se(d, b), I && se(I, b), H && se(H, b), h.value = b;
  }
  function T(b) {
    const D = Array.from(k.value), d = D.findIndex((I) => I === b);
    if (~d) D.splice(d, 1);
    else {
      if (e.accordion && c.value.has(b)) {
        const I = D.findIndex((H) => c.value.has(H));
        I > -1 && D.splice(I, 1);
      }
      D.push(b);
    }
    W(D);
  }
  const w = (b) => {
    const D = a.value.getPath(b ?? m.value, { includeSelf: false }).keyPath;
    if (!D.length) return;
    const d = Array.from(k.value), I = /* @__PURE__ */ new Set([...d, ...D]);
    e.accordion && c.value.forEach((H) => {
      I.has(H) && !D.includes(H) && I.delete(H);
    }), W(Array.from(I));
  }, G = S(() => {
    const { inverted: b } = e, { common: { cubicBezierEaseInOut: D }, self: d } = A.value, { borderRadius: I, borderColorHorizontal: H, fontSize: lr, itemHeight: ir, dividerColor: sr } = d, p = { "--n-divider-color": sr, "--n-bezier": D, "--n-font-size": lr, "--n-border-color-horizontal": H, "--n-border-radius": I, "--n-item-height": ir };
    return b ? (p["--n-group-text-color"] = d.groupTextColorInverted, p["--n-color"] = d.colorInverted, p["--n-item-text-color"] = d.itemTextColorInverted, p["--n-item-text-color-hover"] = d.itemTextColorHoverInverted, p["--n-item-text-color-active"] = d.itemTextColorActiveInverted, p["--n-item-text-color-child-active"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveInverted, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHoverInverted, p["--n-item-icon-color"] = d.itemIconColorInverted, p["--n-item-icon-color-hover"] = d.itemIconColorHoverInverted, p["--n-item-icon-color-active"] = d.itemIconColorActiveInverted, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHoverInverted, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActiveInverted, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHoverInverted, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsedInverted, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontalInverted, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontalInverted, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontalInverted, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontalInverted, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontalInverted, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontalInverted, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontalInverted, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontalInverted, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontalInverted, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontalInverted, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontalInverted, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontalInverted, p["--n-arrow-color"] = d.arrowColorInverted, p["--n-arrow-color-hover"] = d.arrowColorHoverInverted, p["--n-arrow-color-active"] = d.arrowColorActiveInverted, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHoverInverted, p["--n-arrow-color-child-active"] = d.arrowColorChildActiveInverted, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHoverInverted, p["--n-item-color-hover"] = d.itemColorHoverInverted, p["--n-item-color-active"] = d.itemColorActiveInverted, p["--n-item-color-active-hover"] = d.itemColorActiveHoverInverted, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsedInverted) : (p["--n-group-text-color"] = d.groupTextColor, p["--n-color"] = d.color, p["--n-item-text-color"] = d.itemTextColor, p["--n-item-text-color-hover"] = d.itemTextColorHover, p["--n-item-text-color-active"] = d.itemTextColorActive, p["--n-item-text-color-child-active"] = d.itemTextColorChildActive, p["--n-item-text-color-child-active-hover"] = d.itemTextColorChildActiveHover, p["--n-item-text-color-active-hover"] = d.itemTextColorActiveHover, p["--n-item-icon-color"] = d.itemIconColor, p["--n-item-icon-color-hover"] = d.itemIconColorHover, p["--n-item-icon-color-active"] = d.itemIconColorActive, p["--n-item-icon-color-active-hover"] = d.itemIconColorActiveHover, p["--n-item-icon-color-child-active"] = d.itemIconColorChildActive, p["--n-item-icon-color-child-active-hover"] = d.itemIconColorChildActiveHover, p["--n-item-icon-color-collapsed"] = d.itemIconColorCollapsed, p["--n-item-text-color-horizontal"] = d.itemTextColorHorizontal, p["--n-item-text-color-hover-horizontal"] = d.itemTextColorHoverHorizontal, p["--n-item-text-color-active-horizontal"] = d.itemTextColorActiveHorizontal, p["--n-item-text-color-child-active-horizontal"] = d.itemTextColorChildActiveHorizontal, p["--n-item-text-color-child-active-hover-horizontal"] = d.itemTextColorChildActiveHoverHorizontal, p["--n-item-text-color-active-hover-horizontal"] = d.itemTextColorActiveHoverHorizontal, p["--n-item-icon-color-horizontal"] = d.itemIconColorHorizontal, p["--n-item-icon-color-hover-horizontal"] = d.itemIconColorHoverHorizontal, p["--n-item-icon-color-active-horizontal"] = d.itemIconColorActiveHorizontal, p["--n-item-icon-color-active-hover-horizontal"] = d.itemIconColorActiveHoverHorizontal, p["--n-item-icon-color-child-active-horizontal"] = d.itemIconColorChildActiveHorizontal, p["--n-item-icon-color-child-active-hover-horizontal"] = d.itemIconColorChildActiveHoverHorizontal, p["--n-arrow-color"] = d.arrowColor, p["--n-arrow-color-hover"] = d.arrowColorHover, p["--n-arrow-color-active"] = d.arrowColorActive, p["--n-arrow-color-active-hover"] = d.arrowColorActiveHover, p["--n-arrow-color-child-active"] = d.arrowColorChildActive, p["--n-arrow-color-child-active-hover"] = d.arrowColorChildActiveHover, p["--n-item-color-hover"] = d.itemColorHover, p["--n-item-color-active"] = d.itemColorActive, p["--n-item-color-active-hover"] = d.itemColorActiveHover, p["--n-item-color-active-collapsed"] = d.itemColorActiveCollapsed), p;
  }), M = r ? eo("menu", S(() => e.inverted ? "a" : "b"), G, e) : void 0, V = Oe(), _ = Q(null), oe = Q(null);
  let U = true;
  const Ae = () => {
    var b;
    U ? U = false : (b = _.value) === null || b === void 0 || b.sync({ showAllItemsBeforeCalculate: true });
  };
  function ie() {
    return document.getElementById(V);
  }
  const te = Q(-1);
  function xe(b) {
    te.value = e.options.length - b;
  }
  function Te(b) {
    b || (te.value = -1);
  }
  const Fe = S(() => {
    const b = te.value;
    return { children: b === -1 ? [] : e.options.slice(b) };
  }), Le = S(() => {
    const { childrenField: b, disabledField: D, keyField: d } = e;
    return Ne([Fe.value], { getIgnored(I) {
      return Je(I);
    }, getChildren(I) {
      return I[b];
    }, getDisabled(I) {
      return I[D];
    }, getKey(I) {
      var H;
      return (H = I[d]) !== null && H !== void 0 ? H : I.name;
    } });
  }), je = S(() => Ne([{}]).treeNodes[0]);
  function Ve() {
    var b;
    if (te.value === -1) return g(Xe, { root: true, level: 0, key: "__ellpisisGroupPlaceholder__", internalKey: "__ellpisisGroupPlaceholder__", title: "\xB7\xB7\xB7", tmNode: je.value, domId: V, isEllipsisPlaceholder: true });
    const D = Le.value.treeNodes[0], d = O.value, I = !!(!((b = D.children) === null || b === void 0) && b.some((H) => d.includes(H.key)));
    return g(Xe, { level: 0, root: true, key: "__ellpisisGroup__", internalKey: "__ellpisisGroup__", title: "\xB7\xB7\xB7", virtualChildActive: I, tmNode: D, domId: V, rawNodes: D.rawNode.children || [], tmNodes: D.children || [], isEllipsisPlaceholder: true });
  }
  return { mergedClsPrefix: o, controlledExpandedKeys: x, uncontrolledExpanededKeys: h, mergedExpandedKeys: k, uncontrolledValue: s, mergedValue: m, activePath: O, tmNodes: z, mergedTheme: A, mergedCollapsed: l, cssVars: r ? void 0 : G, themeClass: M == null ? void 0 : M.themeClass, overflowRef: _, counterRef: oe, updateCounter: () => {
  }, onResize: Ae, onUpdateOverflow: Te, onUpdateCount: xe, renderCounter: Ve, getCounter: ie, onRender: M == null ? void 0 : M.onRender, showOption: w, deriveResponsiveState: Ae };
}, render() {
  const { mergedClsPrefix: e, mode: o, themeClass: r, onRender: A } = this;
  A == null ? void 0 : A();
  const t = () => this.tmNodes.map((n) => io(n, this.$props)), a = o === "horizontal" && this.responsive, c = () => g("div", hr(this.$attrs, { role: o === "horizontal" ? "menubar" : "menu", class: [`${e}-menu`, r, `${e}-menu--${o}`, a && `${e}-menu--responsive`, this.mergedCollapsed && `${e}-menu--collapsed`], style: this.cssVars }), a ? g(ut, { ref: "overflowRef", onUpdateOverflow: this.onUpdateOverflow, getCounter: this.getCounter, onUpdateCount: this.onUpdateCount, updateCounter: this.updateCounter, style: { width: "100%", display: "flex", overflow: "hidden" } }, { default: t, counter: this.renderCounter }) : t());
  return a ? g(ct, { onResize: this.onResize }, { default: c }) : c();
} }), Ra = { name: "QrCode", common: u, self: (e) => ({ borderRadius: e.borderRadius }) }, za = { name: "Skeleton", common: u, self(e) {
  const { heightSmall: o, heightMedium: r, heightLarge: A, borderRadius: t } = e;
  return { color: "rgba(255, 255, 255, 0.12)", colorEnd: "rgba(255, 255, 255, 0.18)", borderRadius: t, heightSmall: o, heightMedium: r, heightLarge: A };
} }, Pa = { name: "Split", common: u }, Ma = { name: "Equation", common: u, self: pt }, Ha = { name: "FloatButtonGroup", common: u, self(e) {
  const { popoverColor: o, dividerColor: r, borderRadius: A } = e;
  return { color: o, buttonBorderColor: r, borderRadiusSquare: A, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
} }, Oa = { name: "dark", common: u, Alert: Nt, Anchor: Wt, AutoComplete: $t, Avatar: Vo, AvatarGroup: Gt, BackTop: Yt, Badge: Kt, Breadcrumb: Jt, Button: K, ButtonGroup: Ln, Calendar: Xt, Card: No, Carousel: qt, Cascader: _t, Checkbox: be, Code: Wo, Collapse: Ut, CollapseTransition: en, ColorPicker: on, DataTable: rn, DatePicker: tn, Descriptions: nn, Dialog: Xo, Divider: Mn, Drawer: Hn, Dropdown: to, DynamicInput: On, DynamicTags: Qn, Element: Tn, Empty: he, Ellipsis: Yo, Equation: Ma, Flex: Fn, Form: jn, GradientText: Vn, Heatmap: va, Icon: An, IconWrapper: ga, Image: Ca, Input: X, InputNumber: Nn, InputOtp: Wn, LegacyTransfer: fa, Layout: Zn, List: Gn, LoadingBar: vn, Log: Yn, Menu: Jn, Mention: Kn, Message: xn, Modal: an, Notification: Pn, PageHeader: Xn, Pagination: Go, Popconfirm: qn, Popover: pe, Popselect: Zo, Progress: er, QrCode: Ra, Radio: Ko, Rate: _n, Result: Un, Row: $n, Scrollbar: Y, Select: $o, Skeleton: za, Slider: ea, Space: Uo, Spin: oa, Statistic: ra, Steps: Aa, Switch: ta, Table: na, Tabs: aa, Tag: jo, Thing: la, TimePicker: Jo, Timeline: ia, Tooltip: Qe, Transfer: sa, Tree: or, TreeSelect: ca, Typography: da, Upload: ua, Watermark: ma, Split: Pa, FloatButton: ha, FloatButtonGroup: Ha, Marquee: ba }, Qa = pr("titleBar", () => {
  const e = To();
  return { text: S(() => {
    var _a2;
    return e.currentSketchId && ((_a2 = e.sketches.find((A) => A.id === e.currentSketchId)) == null ? void 0 : _a2.meta.name) || null;
  }) };
}), Ta = L({ __name: "TitleBar", setup(e) {
  ko((s) => ({ v4cb26022: F(o).cubicBezierEaseInOut, v72bb88fb: F(o).borderRadius, v4a2be838: F(o).hoverColor }));
  const o = vt(), r = Qa(), A = To(), t = S(() => r.text || ""), l = Q(false), a = S(() => A.sketches.map((s) => ({ name: s.meta.name, id: s.id, tags: s.meta.tags }))), c = (s) => {
    A.sketches.find((i) => i.id === s), A.setCurrentSketchId(s), l.value = false;
  }, n = async (s) => {
    await A.deleteSketch(s);
  };
  return (s, i) => (re(), ve(Ce, null, [t.value ? (re(), ve("div", { key: 0, class: "title-bar", onClick: i[0] || (i[0] = (m) => l.value = true) }, [j(F(gt), null, { default: J(() => [j(F(Ct), { depth: 3, style: { display: "block", padding: "4px 8px", "min-width": "48px" } }, { default: J(() => [vr(gr(t.value), 1)]), _: 1 })]), _: 1 })])) : Cr("", true), j(ft, { active: l.value, "onUpdate:active": i[1] || (i[1] = (m) => l.value = m), list: a.value, "active-id": F(A).currentSketchId || "", onSelect: c, onRemove: n }, null, 8, ["active", "list", "active-id"])], 64));
} }), fo = Eo(Ta, [["__scopeId", "data-v-4aa68e10"]]), Fa = { key: 0, class: "nav-bar" }, La = { class: "software-info-menu" }, ja = { style: { width: "100%" } }, Va = { style: { "max-width": "8em" } }, Na = { key: 1, class: "nav-bar" }, Wa = { style: { "max-width": "50vw" } }, Za = { class: "main-layout" }, $a = L({ __name: "AppLayout", setup(e) {
  ko((x) => ({ v15d5fada: f.value ? "column" : "row" }));
  const o = bt(), r = ro(), A = new Fo(), { t, locale: l } = zt();
  function a(x) {
    return () => g(ho, null, { default: () => g(x) });
  }
  function c(x) {
    return x === "system" ? po() : x || po();
  }
  r.settings.interfaceLanguage = r.settings.interfaceLanguage ?? "system", l.value = c(r.settings.interfaceLanguage), wo(() => r.settings.interfaceLanguage, (x) => {
    x && (l.value = c(x));
  });
  const n = [{ label: () => g(Ee, { to: "/tracker" }, { default: () => t("router.tracker") }), key: "tracker", icon: a(Bt) }, { label: () => g(Ee, { to: "/sketch-centre" }, { default: () => t("router.sketchCentre") }), key: "sketch-centre", icon: a(yt) }], s = [{ label: () => g(Ee, { to: "/settings" }, { default: () => t("router.settings") }), key: "settings", icon: a(kt) }, { label: () => g(Ee, { to: "/about" }, { default: () => t("router.about") }), key: "about", icon: a(Et) }], i = S(() => o.path.slice(1)), { width: m, height: h } = wt(), f = S(() => m.value > h.value);
  return (x, k) => (re(), ve("div", { class: So(["app-layout", f.value ? "app-layout-horizontal" : "app-layout-vertical"]) }, [f.value ? (re(), ve("div", Fa, [j(F(We), { options: n, "default-value": "tracker", value: i.value, mode: f.value ? "vertical" : "horizontal" }, null, 8, ["value", "mode"]), ae("div", La, [ae("div", ja, [j(F(We), { options: s, mode: f.value ? "vertical" : "horizontal", value: i.value }, null, 8, ["mode", "value"])]), ae("div", Va, [j(fo)])])])) : (re(), ve("div", Na, [j(F(It), { trigger: F(A).isMobile ? "click" : "hover", style: { padding: "2px 0", transform: "translateX(2px)" }, placement: "bottom-start" }, { trigger: J(() => [j(F(xt), { style: { width: "48px" } }, { icon: J(() => [j(F(ho), null, { default: J(() => [j(F(Mt))]), _: 1 })]), _: 1 })]), default: J(() => [j(F(We), { options: n.concat(s), "default-value": "tracker", value: i.value, "dropdown-placement": "top-start", mode: "vertical" }, null, 8, ["options", "value"])]), _: 1 }, 8, ["trigger"]), ae("div", Wa, [j(fo)])])), ae("div", Za, [j(F(St), null, { default: J(({ Component: z }) => [j(Bo, { name: "slide-fade", mode: "out-in" }, { default: J(() => [(re(), Ye(fr, null, [(re(), Ye(br(z), { key: i.value }))], 1024))]), _: 2 }, 1024)]), _: 1 })])], 2));
} }), Ga = Eo($a, [["__scopeId", "data-v-031e5f3d"]]), Ya = "sepia(1) hue-rotate(-40deg) brightness(0.8) contrast(1.2) saturate(3)";
function Ka() {
  const e = ro(), o = (r) => {
    const A = document.documentElement;
    r ? A.style.filter = Ya : A.style.filter = "";
  };
  return _e(() => {
    o(e.settings.nightMode);
  }), wo(() => e.settings.nightMode, (r) => {
    o(r);
  }), { isNightMode: () => e.settings.nightMode };
}
var Ze, bo;
function Ja() {
  return bo || (bo = 1, Ze = { webm: "data:video/webm;base64,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", mp4: "data:video/mp4;base64,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" }), Ze;
}
var $e, xo;
function Xa() {
  if (xo) return $e;
  xo = 1;
  const { webm: e, mp4: o } = Ja(), r = () => typeof navigator < "u" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream, A = () => "wakeLock" in navigator;
  class t {
    constructor() {
      if (this.enabled = false, A()) {
        this._wakeLock = null;
        const a = () => {
          this._wakeLock !== null && document.visibilityState === "visible" && this.enable();
        };
        document.addEventListener("visibilitychange", a), document.addEventListener("fullscreenchange", a);
      } else r() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", e), this._addSourceToVideo(this.noSleepVideo, "mp4", o), this.noSleepVideo.addEventListener("loadedmetadata", () => {
        this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
          this.noSleepVideo.currentTime > 0.5 && (this.noSleepVideo.currentTime = Math.random());
        });
      }));
    }
    _addSourceToVideo(a, c, n) {
      var s = document.createElement("source");
      s.src = n, s.type = `video/${c}`, a.appendChild(s);
    }
    get isEnabled() {
      return this.enabled;
    }
    enable() {
      return A() ? navigator.wakeLock.request("screen").then((a) => {
        this._wakeLock = a, this.enabled = true, console.log("Wake Lock active."), this._wakeLock.addEventListener("release", () => {
          console.log("Wake Lock released.");
        });
      }).catch((a) => {
        throw this.enabled = false, console.error(`${a.name}, ${a.message}`), a;
      }) : r() ? (this.disable(), console.warn(`
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
      A() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : r() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = false;
    }
  }
  return $e = t, $e;
}
var qa = Xa();
const _a = xr(qa), Al = L({ __name: "App", setup(e) {
  const o = ro(), r = window.GeolocationManager, A = Tt(), t = S(() => o.settings.nightMode ? "dark" : o.settings.theme === "system" ? A.value : o.settings.theme), l = S(() => t.value === "dark" ? Oa : Rt), a = { common: { fontFamily: 'Barlow, "Maple Mono", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: '"Maple Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' } };
  return N("applicationDarkThemeEnabled", t), N("platformInfo", new Fo()), N("settings", o), N("noSleep", new _a()), N("geolocation", r), Ka(), _e(() => o.init()), (c, n) => (re(), Ye(F(Dt), { theme: l.value, abstract: true, "inline-theme-disabled": true, "theme-overrides": a }, { default: J(() => [j(F(hn), null, { default: J(() => [j(F(zn), null, { default: J(() => [j(F(bn), null, { default: J(() => [j(F(wn), { placement: "bottom-right" }, { default: J(() => [j(Ga), j(F(pa))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["theme"]));
} });
export {
  Al as default
};
