import { D as e, F as t, H as n, L as r, O as i, R as a, U as o, _ as s, a as c, c as l, d as u, dt as d, f, gt as p, h as m, ht as h, m as g, mt as _, o as v, pt as y, s as b, u as x, ut as S, x as C, xt as w, y as T, z as E } from "./Card-nhqq8IKa.js";
import { G as D, H as ee, S as O, U as te, X as k, _ as ne, a as re, m as ie, o as ae, r as oe, t as se, u as ce } from "./Tooltip-DGge0ha1.js";
import { Bt as A, Ct as j, Et as M, Ft as le, Jt as ue, Lt as de, Ot as N, Pt as fe, Rt as pe, St as me, Ut as he, Xt as P, Yt as ge, _n as _e, _t as F, a as ve, an as I, bt as ye, cn as be, dn as L, dt as xe, fn as Se, ft as Ce, gt as R, hn as we, in as Te, jt as Ee, mn as De, ot as Oe, pt as ke, rn as Ae, rt as je, t as Me, vt as Ne, wt as z, yt as Pe, zt as B } from "./index-DTVnoW_1.js";
import { a as Fe, n as Ie, t as Le } from "./vue-router-Bobm8XWN.js";
import { a as Re, i as ze, r as Be, t as Ve } from "./interface-COpDF2_U.js";
import { A as He, C as Ue, E as We, I as Ge, L as Ke, N as qe, O as Je, R as Ye, T as Xe, _ as Ze, a as Qe, b as $e, d as et, g as tt, h as nt, j as rt, k as it, l as at, m as ot, n as st, t as ct, v as lt, w as ut, x as dt, y as ft } from "./sketch-store-CoKve6q-.js";
import { n as pt } from "./vue-i18n-BAINxUFe.js";
import { a as mt, r as ht, s as gt, t as _t, u as vt } from "./Dropdown-dlLCnzPd.js";
import { t as yt } from "./src-A1zXJc7F.js";
import { a as bt, d as xt, f as St, g as V, l as Ct, m as wt, p as Tt, s as Et } from "./storage-DsEl3RSe.js";
import { t as Dt } from "./omit-DTu60rkx.js";
import { c as Ot, i as kt, l as At, s as jt, t as Mt } from "./Button-o58fM-RZ.js";
import { n as Nt, r as Pt, t as Ft } from "./Success-SBPGeO_s.js";
import { t as It } from "./Warning-DtnUwqHe.js";
import { i as Lt, n as Rt } from "./light-DZsVD2j_.js";
import { t as zt } from "./fade-in-height-expand.cssr-Cu-aN91s.js";
import { n as Bt } from "./light-BmapGxr9.js";
import { i as Vt, n as Ht } from "./light-CQB9eEMb.js";
import { A as Ut, B as Wt, C as Gt, D as Kt, E as qt, F as Jt, I as Yt, L as Xt, M as Zt, N as Qt, O as $t, P as en, R as tn, S as nn, T as rn, V as an, _ as on, a as sn, b as cn, c as ln, d as un, f as dn, g as fn, i as pn, j as mn, k as hn, l as gn, m as _n, n as vn, o as yn, p as bn, r as xn, t as Sn, u as Cn, v as wn, w as Tn, x as En, z as Dn } from "./light-DZTiUHEd.js";
import { a as On, r as kn } from "./light-Ru6mz35d.js";
import { r as An, t as jn } from "./settings-store-NEXTm_Ep.js";
import { t as Mn } from "./PerformantEllipsis-DJXJ4P1h.js";
import { r as Nn, t as Pn } from "./Icon-y0y4QmKo.js";
import { n as Fn } from "./light-ByENEBpl.js";
import { n as In } from "./light-ClCXo0GD.js";
import { n as Ln } from "./light-DVAUVx3a.js";
import { t as Rn } from "./core-C47BeAL_.js";
import { t as zn } from "./platform-1yaQGydT.js";
var Bn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Vn = z({ name: `Menu`, render: function(e2, t2) {
  return B(), ye(`svg`, Bn, t2[0] || (t2[0] = [F(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [F(`path`, { d: `M4 8h16` }), F(`path`, { d: `M4 16h16` })], -1)]));
} }), Hn = 0, Un = typeof window < `u` && window.matchMedia !== void 0, H = I(null), U, W;
function Wn(e2) {
  e2.matches && (H.value = `dark`);
}
function Gn(e2) {
  e2.matches && (H.value = `light`);
}
function Kn() {
  U = window.matchMedia(`(prefers-color-scheme: dark)`), W = window.matchMedia(`(prefers-color-scheme: light)`), U.matches ? H.value = `dark` : W.matches ? H.value = `light` : H.value = null, U.addEventListener ? (U.addEventListener(`change`, Wn), W.addEventListener(`change`, Gn)) : U.addListener && (U.addListener(Wn), W.addListener(Gn));
}
function qn() {
  `removeEventListener` in U ? (U.removeEventListener(`change`, Wn), W.removeEventListener(`change`, Gn)) : `removeListener` in U && (U.removeListener(Wn), W.removeListener(Gn)), U = void 0, W = void 0;
}
var Jn = true;
function Yn() {
  return Un ? (Hn === 0 && Kn(), Jn && (Jn = D()) && (fe(() => {
    Hn += 1;
  }), le(() => {
    --Hn, Hn === 0 && qn();
  })), Te(H)) : Te(H);
}
var Xn = z({ name: `ChevronDownFilled`, render() {
  return M(`svg`, { viewBox: `0 0 16 16`, fill: `none`, xmlns: `http://www.w3.org/2000/svg` }, M(`path`, { d: `M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`, fill: `currentColor` }));
} }), G = { neutralBase: `#000`, neutralInvertBase: `#fff`, neutralTextBase: `#fff`, neutralPopover: `rgb(72, 72, 78)`, neutralCard: `rgb(24, 24, 28)`, neutralModal: `rgb(44, 44, 50)`, neutralBody: `rgb(16, 16, 20)`, alpha1: `0.9`, alpha2: `0.82`, alpha3: `0.52`, alpha4: `0.38`, alpha5: `0.28`, alphaClose: `0.52`, alphaDisabled: `0.38`, alphaDisabledInput: `0.06`, alphaPending: `0.09`, alphaTablePending: `0.06`, alphaTableStriped: `0.05`, alphaPressed: `0.05`, alphaAvatar: `0.18`, alphaRail: `0.2`, alphaProgressRail: `0.12`, alphaBorder: `0.24`, alphaDivider: `0.09`, alphaInput: `0.1`, alphaAction: `0.06`, alphaTab: `0.04`, alphaScrollbar: `0.2`, alphaScrollbarHover: `0.3`, alphaCode: `0.12`, alphaTag: `0.2`, primaryHover: `#7fe7c4`, primaryDefault: `#63e2b7`, primaryActive: `#5acea7`, primarySuppl: `rgb(42, 148, 125)`, infoHover: `#8acbec`, infoDefault: `#70c0e8`, infoActive: `#66afd3`, infoSuppl: `rgb(56, 137, 197)`, errorHover: `#e98b8b`, errorDefault: `#e88080`, errorActive: `#e57272`, errorSuppl: `rgb(208, 58, 82)`, warningHover: `#f5d599`, warningDefault: `#f2c97d`, warningActive: `#e6c260`, warningSuppl: `rgb(240, 138, 0)`, successHover: `#7fe7c4`, successDefault: `#63e2b7`, successActive: `#5acea7`, successSuppl: `rgb(42, 148, 125)` }, Zn = n(G.neutralBase), Qn = n(G.neutralInvertBase), $n = `rgba(${Qn.slice(0, 3).join(`, `)}, `;
function K(e2) {
  return `${$n + String(e2)})`;
}
function er(e2) {
  let t2 = Array.from(Qn);
  return t2[3] = Number(e2), E(Zn, t2);
}
var q = Object.assign(Object.assign({ name: `common` }, g), { baseColor: G.neutralBase, primaryColor: G.primaryDefault, primaryColorHover: G.primaryHover, primaryColorPressed: G.primaryActive, primaryColorSuppl: G.primarySuppl, infoColor: G.infoDefault, infoColorHover: G.infoHover, infoColorPressed: G.infoActive, infoColorSuppl: G.infoSuppl, successColor: G.successDefault, successColorHover: G.successHover, successColorPressed: G.successActive, successColorSuppl: G.successSuppl, warningColor: G.warningDefault, warningColorHover: G.warningHover, warningColorPressed: G.warningActive, warningColorSuppl: G.warningSuppl, errorColor: G.errorDefault, errorColorHover: G.errorHover, errorColorPressed: G.errorActive, errorColorSuppl: G.errorSuppl, textColorBase: G.neutralTextBase, textColor1: K(G.alpha1), textColor2: K(G.alpha2), textColor3: K(G.alpha3), textColorDisabled: K(G.alpha4), placeholderColor: K(G.alpha4), placeholderColorDisabled: K(G.alpha5), iconColor: K(G.alpha4), iconColorDisabled: K(G.alpha5), iconColorHover: K(Number(G.alpha4) * 1.25), iconColorPressed: K(Number(G.alpha4) * 0.8), opacity1: G.alpha1, opacity2: G.alpha2, opacity3: G.alpha3, opacity4: G.alpha4, opacity5: G.alpha5, dividerColor: K(G.alphaDivider), borderColor: K(G.alphaBorder), closeIconColorHover: K(Number(G.alphaClose)), closeIconColor: K(Number(G.alphaClose)), closeIconColorPressed: K(Number(G.alphaClose)), closeColorHover: `rgba(255, 255, 255, .12)`, closeColorPressed: `rgba(255, 255, 255, .08)`, clearColor: K(G.alpha4), clearColorHover: o(K(G.alpha4), { alpha: 1.25 }), clearColorPressed: o(K(G.alpha4), { alpha: 0.8 }), scrollbarColor: K(G.alphaScrollbar), scrollbarColorHover: K(G.alphaScrollbarHover), scrollbarWidth: `5px`, scrollbarHeight: `5px`, scrollbarBorderRadius: `5px`, progressRailColor: K(G.alphaProgressRail), railColor: K(G.alphaRail), popoverColor: G.neutralPopover, tableColor: G.neutralCard, cardColor: G.neutralCard, modalColor: G.neutralModal, bodyColor: G.neutralBody, tagColor: er(G.alphaTag), avatarColor: K(G.alphaAvatar), invertedColor: G.neutralBase, inputColor: K(G.alphaInput), codeColor: K(G.alphaCode), tabColor: K(G.alphaTab), actionColor: K(G.alphaAction), tableHeaderColor: K(G.alphaAction), hoverColor: K(G.alphaPending), tableColorHover: K(G.alphaTablePending), tableColorStriped: K(G.alphaTableStriped), pressedColor: K(G.alphaPressed), opacityDisabled: G.alphaDisabled, inputColorDisabled: K(G.alphaDisabledInput), buttonColor2: `rgba(255, 255, 255, .08)`, buttonColor2Hover: `rgba(255, 255, 255, .12)`, buttonColor2Pressed: `rgba(255, 255, 255, .08)`, boxShadow1: `0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)`, boxShadow2: `0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)`, boxShadow3: `0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)` }), J = { name: `Scrollbar`, common: q, self: ie }, Y = { name: `Empty`, common: q, self: Tt }, tr = { name: `InternalSelectMenu`, common: q, peers: { Scrollbar: J, Empty: Y }, self: xt }, X = { name: `Popover`, common: q, peers: { Scrollbar: J }, self: ce }, nr = { name: `Tag`, common: q, self(e2) {
  let { textColor2: t2, primaryColorHover: n2, primaryColorPressed: r2, primaryColor: i2, infoColor: s2, successColor: c2, warningColor: l2, errorColor: u2, baseColor: d2, borderColor: f2, tagColor: p2, opacityDisabled: m2, closeIconColor: h2, closeIconColorHover: g2, closeIconColorPressed: _2, closeColorHover: v2, closeColorPressed: y2, borderRadiusSmall: b2, fontSizeMini: x2, fontSizeTiny: S2, fontSizeSmall: C2, fontSizeMedium: w2, heightMini: T2, heightTiny: E2, heightSmall: D2, heightMedium: ee2, buttonColor2Hover: O2, buttonColor2Pressed: te2, fontWeightStrong: k2 } = e2;
  return Object.assign(Object.assign({}, re), { closeBorderRadius: b2, heightTiny: T2, heightSmall: E2, heightMedium: D2, heightLarge: ee2, borderRadius: b2, opacityDisabled: m2, fontSizeTiny: x2, fontSizeSmall: S2, fontSizeMedium: C2, fontSizeLarge: w2, fontWeightStrong: k2, textColorCheckable: t2, textColorHoverCheckable: t2, textColorPressedCheckable: t2, textColorChecked: d2, colorCheckable: `#0000`, colorHoverCheckable: O2, colorPressedCheckable: te2, colorChecked: i2, colorCheckedHover: n2, colorCheckedPressed: r2, border: `1px solid ${f2}`, textColor: t2, color: p2, colorBordered: `#0000`, closeIconColor: h2, closeIconColorHover: g2, closeIconColorPressed: _2, closeColorHover: v2, closeColorPressed: y2, borderPrimary: `1px solid ${a(i2, { alpha: 0.3 })}`, textColorPrimary: i2, colorPrimary: a(i2, { alpha: 0.16 }), colorBorderedPrimary: `#0000`, closeIconColorPrimary: o(i2, { lightness: 0.7 }), closeIconColorHoverPrimary: o(i2, { lightness: 0.7 }), closeIconColorPressedPrimary: o(i2, { lightness: 0.7 }), closeColorHoverPrimary: a(i2, { alpha: 0.16 }), closeColorPressedPrimary: a(i2, { alpha: 0.12 }), borderInfo: `1px solid ${a(s2, { alpha: 0.3 })}`, textColorInfo: s2, colorInfo: a(s2, { alpha: 0.16 }), colorBorderedInfo: `#0000`, closeIconColorInfo: o(s2, { alpha: 0.7 }), closeIconColorHoverInfo: o(s2, { alpha: 0.7 }), closeIconColorPressedInfo: o(s2, { alpha: 0.7 }), closeColorHoverInfo: a(s2, { alpha: 0.16 }), closeColorPressedInfo: a(s2, { alpha: 0.12 }), borderSuccess: `1px solid ${a(c2, { alpha: 0.3 })}`, textColorSuccess: c2, colorSuccess: a(c2, { alpha: 0.16 }), colorBorderedSuccess: `#0000`, closeIconColorSuccess: o(c2, { alpha: 0.7 }), closeIconColorHoverSuccess: o(c2, { alpha: 0.7 }), closeIconColorPressedSuccess: o(c2, { alpha: 0.7 }), closeColorHoverSuccess: a(c2, { alpha: 0.16 }), closeColorPressedSuccess: a(c2, { alpha: 0.12 }), borderWarning: `1px solid ${a(l2, { alpha: 0.3 })}`, textColorWarning: l2, colorWarning: a(l2, { alpha: 0.16 }), colorBorderedWarning: `#0000`, closeIconColorWarning: o(l2, { alpha: 0.7 }), closeIconColorHoverWarning: o(l2, { alpha: 0.7 }), closeIconColorPressedWarning: o(l2, { alpha: 0.7 }), closeColorHoverWarning: a(l2, { alpha: 0.16 }), closeColorPressedWarning: a(l2, { alpha: 0.11 }), borderError: `1px solid ${a(u2, { alpha: 0.3 })}`, textColorError: u2, colorError: a(u2, { alpha: 0.16 }), colorBorderedError: `#0000`, closeIconColorError: o(u2, { alpha: 0.7 }), closeIconColorHoverError: o(u2, { alpha: 0.7 }), closeIconColorPressedError: o(u2, { alpha: 0.7 }), closeColorHoverError: a(u2, { alpha: 0.16 }), closeColorPressedError: a(u2, { alpha: 0.12 }) });
} }, rr = { name: `InternalSelection`, common: q, peers: { Popover: X }, self(e2) {
  let { borderRadius: t2, textColor2: n2, textColorDisabled: r2, inputColor: i2, inputColorDisabled: o2, primaryColor: s2, primaryColorHover: c2, warningColor: l2, warningColorHover: u2, errorColor: d2, errorColorHover: f2, iconColor: p2, iconColorDisabled: m2, clearColor: h2, clearColorHover: g2, clearColorPressed: _2, placeholderColor: v2, placeholderColorDisabled: y2, fontSizeTiny: b2, fontSizeSmall: x2, fontSizeMedium: S2, fontSizeLarge: C2, heightTiny: w2, heightSmall: T2, heightMedium: E2, heightLarge: D2, fontWeight: ee2 } = e2;
  return Object.assign(Object.assign({}, Ct), { fontWeight: ee2, fontSizeTiny: b2, fontSizeSmall: x2, fontSizeMedium: S2, fontSizeLarge: C2, heightTiny: w2, heightSmall: T2, heightMedium: E2, heightLarge: D2, borderRadius: t2, textColor: n2, textColorDisabled: r2, placeholderColor: v2, placeholderColorDisabled: y2, color: i2, colorDisabled: o2, colorActive: a(s2, { alpha: 0.1 }), border: `1px solid #0000`, borderHover: `1px solid ${c2}`, borderActive: `1px solid ${s2}`, borderFocus: `1px solid ${c2}`, boxShadowHover: `none`, boxShadowActive: `0 0 8px 0 ${a(s2, { alpha: 0.4 })}`, boxShadowFocus: `0 0 8px 0 ${a(s2, { alpha: 0.4 })}`, caretColor: s2, arrowColor: p2, arrowColorDisabled: m2, loadingColor: s2, borderWarning: `1px solid ${l2}`, borderHoverWarning: `1px solid ${u2}`, borderActiveWarning: `1px solid ${l2}`, borderFocusWarning: `1px solid ${u2}`, boxShadowHoverWarning: `none`, boxShadowActiveWarning: `0 0 8px 0 ${a(l2, { alpha: 0.4 })}`, boxShadowFocusWarning: `0 0 8px 0 ${a(l2, { alpha: 0.4 })}`, colorActiveWarning: a(l2, { alpha: 0.1 }), caretColorWarning: l2, borderError: `1px solid ${d2}`, borderHoverError: `1px solid ${f2}`, borderActiveError: `1px solid ${d2}`, borderFocusError: `1px solid ${f2}`, boxShadowHoverError: `none`, boxShadowActiveError: `0 0 8px 0 ${a(d2, { alpha: 0.4 })}`, boxShadowFocusError: `0 0 8px 0 ${a(d2, { alpha: 0.4 })}`, colorActiveError: a(d2, { alpha: 0.1 }), caretColorError: d2, clearColor: h2, clearColorHover: g2, clearColorPressed: _2 });
} }, ir = { name: `Alert`, common: q, self(e2) {
  let { lineHeight: t2, borderRadius: n2, fontWeightStrong: r2, dividerColor: i2, inputColor: o2, textColor1: s2, textColor2: c2, closeColorHover: l2, closeColorPressed: u2, closeIconColor: d2, closeIconColorHover: f2, closeIconColorPressed: p2, infoColorSuppl: m2, successColorSuppl: h2, warningColorSuppl: g2, errorColorSuppl: _2, fontSize: v2 } = e2;
  return Object.assign(Object.assign({}, Lt), { fontSize: v2, lineHeight: t2, titleFontWeight: r2, borderRadius: n2, border: `1px solid ${i2}`, color: o2, titleTextColor: s2, iconColor: c2, contentTextColor: c2, closeBorderRadius: n2, closeColorHover: l2, closeColorPressed: u2, closeIconColor: d2, closeIconColorHover: f2, closeIconColorPressed: p2, borderInfo: `1px solid ${a(m2, { alpha: 0.35 })}`, colorInfo: a(m2, { alpha: 0.25 }), titleTextColorInfo: s2, iconColorInfo: m2, contentTextColorInfo: c2, closeColorHoverInfo: l2, closeColorPressedInfo: u2, closeIconColorInfo: d2, closeIconColorHoverInfo: f2, closeIconColorPressedInfo: p2, borderSuccess: `1px solid ${a(h2, { alpha: 0.35 })}`, colorSuccess: a(h2, { alpha: 0.25 }), titleTextColorSuccess: s2, iconColorSuccess: h2, contentTextColorSuccess: c2, closeColorHoverSuccess: l2, closeColorPressedSuccess: u2, closeIconColorSuccess: d2, closeIconColorHoverSuccess: f2, closeIconColorPressedSuccess: p2, borderWarning: `1px solid ${a(g2, { alpha: 0.35 })}`, colorWarning: a(g2, { alpha: 0.25 }), titleTextColorWarning: s2, iconColorWarning: g2, contentTextColorWarning: c2, closeColorHoverWarning: l2, closeColorPressedWarning: u2, closeIconColorWarning: d2, closeIconColorHoverWarning: f2, closeIconColorPressedWarning: p2, borderError: `1px solid ${a(_2, { alpha: 0.35 })}`, colorError: a(_2, { alpha: 0.25 }), titleTextColorError: s2, iconColorError: _2, contentTextColorError: c2, closeColorHoverError: l2, closeColorPressedError: u2, closeIconColorError: d2, closeIconColorHoverError: f2, closeIconColorPressedError: p2 });
} }, ar = { name: `Anchor`, common: q, self: Bt };
function or(e2) {
  let { textColor2: t2, textColor3: n2, textColorDisabled: r2, primaryColor: i2, primaryColorHover: o2, inputColor: s2, inputColorDisabled: c2, warningColor: l2, warningColorHover: u2, errorColor: d2, errorColorHover: f2, borderRadius: p2, lineHeight: m2, fontSizeTiny: h2, fontSizeSmall: g2, fontSizeMedium: _2, fontSizeLarge: v2, heightTiny: y2, heightSmall: b2, heightMedium: x2, heightLarge: S2, clearColor: C2, clearColorHover: w2, clearColorPressed: T2, placeholderColor: E2, placeholderColorDisabled: D2, iconColor: ee2, iconColorDisabled: O2, iconColorHover: te2, iconColorPressed: k2, fontWeight: ne2 } = e2;
  return Object.assign(Object.assign({}, Vt), { fontWeight: ne2, countTextColorDisabled: r2, countTextColor: n2, heightTiny: y2, heightSmall: b2, heightMedium: x2, heightLarge: S2, fontSizeTiny: h2, fontSizeSmall: g2, fontSizeMedium: _2, fontSizeLarge: v2, lineHeight: m2, lineHeightTextarea: m2, borderRadius: p2, iconSize: `16px`, groupLabelColor: s2, textColor: t2, textColorDisabled: r2, textDecorationColor: t2, groupLabelTextColor: t2, caretColor: i2, placeholderColor: E2, placeholderColorDisabled: D2, color: s2, colorDisabled: c2, colorFocus: a(i2, { alpha: 0.1 }), groupLabelBorder: `1px solid #0000`, border: `1px solid #0000`, borderHover: `1px solid ${o2}`, borderDisabled: `1px solid #0000`, borderFocus: `1px solid ${o2}`, boxShadowFocus: `0 0 8px 0 ${a(i2, { alpha: 0.3 })}`, loadingColor: i2, loadingColorWarning: l2, borderWarning: `1px solid ${l2}`, borderHoverWarning: `1px solid ${u2}`, colorFocusWarning: a(l2, { alpha: 0.1 }), borderFocusWarning: `1px solid ${u2}`, boxShadowFocusWarning: `0 0 8px 0 ${a(l2, { alpha: 0.3 })}`, caretColorWarning: l2, loadingColorError: d2, borderError: `1px solid ${d2}`, borderHoverError: `1px solid ${f2}`, colorFocusError: a(d2, { alpha: 0.1 }), borderFocusError: `1px solid ${f2}`, boxShadowFocusError: `0 0 8px 0 ${a(d2, { alpha: 0.3 })}`, caretColorError: d2, clearColor: C2, clearColorHover: w2, clearColorPressed: T2, iconColor: ee2, iconColorDisabled: O2, iconColorHover: te2, iconColorPressed: k2, suffixTextColor: t2 });
}
var Z = u({ name: `Input`, common: q, peers: { Scrollbar: J }, self: or }), sr = { name: `AutoComplete`, common: q, peers: { InternalSelectMenu: tr, Input: Z }, self: an }, cr = { name: `Avatar`, common: q, self: Wt }, lr = { name: `AvatarGroup`, common: q, peers: { Avatar: cr }, self: Dn }, ur = { name: `BackTop`, common: q, self(e2) {
  let { popoverColor: t2, textColor2: n2, primaryColorHover: r2, primaryColorPressed: i2 } = e2;
  return Object.assign(Object.assign({}, tn), { color: t2, textColor: n2, iconColor: n2, iconColorHover: r2, iconColorPressed: i2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .12)`, boxShadowHover: `0 2px 12px 0px rgba(0, 0, 0, .18)`, boxShadowPressed: `0 2px 12px 0px rgba(0, 0, 0, .18)` });
} }, dr = { name: `Badge`, common: q, self(e2) {
  let { errorColorSuppl: t2, infoColorSuppl: n2, successColorSuppl: r2, warningColorSuppl: i2, fontFamily: a2 } = e2;
  return { color: t2, colorInfo: n2, colorSuccess: r2, colorError: t2, colorWarning: i2, fontSize: `12px`, fontFamily: a2 };
} }, fr = { name: `Breadcrumb`, common: q, self: Xt }, Q = { name: `Button`, common: q, self(e2) {
  let t2 = kt(e2);
  return t2.waveOpacity = `0.8`, t2.colorOpacitySecondary = `0.16`, t2.colorOpacitySecondaryHover = `0.2`, t2.colorOpacitySecondaryPressed = `0.12`, t2;
} }, pr = { name: `Calendar`, common: q, peers: { Button: Q }, self: Yt }, mr = { name: `Card`, common: q, self(e2) {
  let t2 = c(e2), { cardColor: n2, modalColor: r2, popoverColor: i2 } = e2;
  return t2.colorEmbedded = n2, t2.colorEmbeddedModal = r2, t2.colorEmbeddedPopover = i2, t2;
} }, hr = { name: `Carousel`, common: q, self: Jt }, gr = { name: `Checkbox`, common: q, self(e2) {
  let { cardColor: t2 } = e2, n2 = vt(e2);
  return n2.color = `#0000`, n2.checkMarkColor = t2, n2;
} }, _r = { name: `Cascader`, common: q, peers: { InternalSelectMenu: tr, InternalSelection: rr, Scrollbar: J, Checkbox: gr, Empty: St }, self: en }, vr = { name: `Code`, common: q, self(e2) {
  let { textColor2: t2, fontSize: n2, fontWeightStrong: r2, textColor3: i2 } = e2;
  return { textColor: t2, fontSize: n2, fontWeightStrong: r2, "mono-3": `#5c6370`, "hue-1": `#56b6c2`, "hue-2": `#61aeee`, "hue-3": `#c678dd`, "hue-4": `#98c379`, "hue-5": `#e06c75`, "hue-5-2": `#be5046`, "hue-6": `#d19a66`, "hue-6-2": `#e6c07b`, lineNumberTextColor: i2 };
} }, yr = { name: `Collapse`, common: q, self: On }, br = { name: `CollapseTransition`, common: q, self: Qt }, xr = { name: `ColorPicker`, common: q, peers: { Input: Z, Button: Q }, self: qe }, Sr = { name: `Popselect`, common: q, peers: { Popover: X, InternalSelectMenu: tr } }, Cr = { name: `Select`, common: q, peers: { InternalSelection: rr, InternalSelectMenu: tr }, self: Et }, wr = { name: `Pagination`, common: q, peers: { Select: Cr, Input: Z, Popselect: Sr }, self(e2) {
  let { primaryColor: t2, opacity3: n2 } = e2, r2 = a(t2, { alpha: Number(n2) }), i2 = gt(e2);
  return i2.itemBorderActive = `1px solid ${r2}`, i2.itemBorderDisabled = `1px solid #0000`, i2;
} }, Tr = { name: `Dropdown`, common: q, peers: { Popover: X }, self(e2) {
  let { primaryColorSuppl: t2, primaryColor: n2, popoverColor: r2 } = e2, i2 = mt(e2);
  return i2.colorInverted = r2, i2.optionColorActive = a(n2, { alpha: 0.15 }), i2.optionColorActiveInverted = t2, i2.optionColorHoverInverted = t2, i2;
} }, Er = { name: `Tooltip`, common: q, peers: { Popover: X }, self(e2) {
  let { borderRadius: t2, boxShadow2: n2, popoverColor: r2, textColor2: i2 } = e2;
  return Object.assign(Object.assign({}, oe), { borderRadius: t2, boxShadow: n2, color: r2, textColor: i2 });
} }, Dr = { name: `Ellipsis`, common: q, peers: { Tooltip: Er } }, Or = { name: `Radio`, common: q, self(e2) {
  let { borderColor: t2, primaryColor: n2, baseColor: r2, textColorDisabled: i2, inputColorDisabled: o2, textColor2: s2, opacityDisabled: c2, borderRadius: l2, fontSizeSmall: u2, fontSizeMedium: d2, fontSizeLarge: f2, heightSmall: p2, heightMedium: m2, heightLarge: h2, lineHeight: g2 } = e2;
  return Object.assign(Object.assign({}, An), { labelLineHeight: g2, buttonHeightSmall: p2, buttonHeightMedium: m2, buttonHeightLarge: h2, fontSizeSmall: u2, fontSizeMedium: d2, fontSizeLarge: f2, boxShadow: `inset 0 0 0 1px ${t2}`, boxShadowActive: `inset 0 0 0 1px ${n2}`, boxShadowFocus: `inset 0 0 0 1px ${n2}, 0 0 0 2px ${a(n2, { alpha: 0.3 })}`, boxShadowHover: `inset 0 0 0 1px ${n2}`, boxShadowDisabled: `inset 0 0 0 1px ${t2}`, color: `#0000`, colorDisabled: o2, colorActive: `#0000`, textColor: s2, textColorDisabled: i2, dotColorActive: n2, dotColorDisabled: t2, buttonBorderColor: t2, buttonBorderColorActive: n2, buttonBorderColorHover: n2, buttonColor: `#0000`, buttonColorActive: n2, buttonTextColor: s2, buttonTextColorActive: r2, buttonTextColorHover: n2, opacityDisabled: c2, buttonBoxShadowFocus: `inset 0 0 0 1px ${n2}, 0 0 0 2px ${a(n2, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px ${n2}`, buttonBoxShadow: `inset 0 0 0 1px #0000`, buttonBorderRadius: l2 });
} }, kr = { name: `DataTable`, common: q, peers: { Button: Q, Checkbox: gr, Radio: Or, Pagination: wr, Scrollbar: J, Empty: Y, Popover: X, Ellipsis: Dr, Dropdown: Tr }, self(e2) {
  let t2 = ht(e2);
  return t2.boxShadowAfter = `inset 12px 0 8px -12px rgba(0, 0, 0, .36)`, t2.boxShadowBefore = `inset -12px 0 8px -12px rgba(0, 0, 0, .36)`, t2;
} }, Ar = { name: `Icon`, common: q, self: Nn }, jr = { name: `TimePicker`, common: q, peers: { Scrollbar: J, Button: Q, Input: Z }, self: mn }, Mr = { name: `DatePicker`, common: q, peers: { Input: Z, Button: Q, TimePicker: jr, Scrollbar: J }, self(e2) {
  let { popoverColor: t2, hoverColor: n2, primaryColor: r2 } = e2, i2 = Ut(e2);
  return i2.itemColorDisabled = E(t2, n2), i2.itemColorIncluded = a(r2, { alpha: 0.15 }), i2.itemColorHover = E(t2, n2), i2;
} }, Nr = { name: `Descriptions`, common: q, self: hn }, Pr = { name: `Dialog`, common: q, peers: { Button: Q }, self: Je }, Fr = { name: `Modal`, common: q, peers: { Scrollbar: J, Dialog: Pr, Card: mr }, self: Ue };
const Ir = Object.assign(Object.assign({}, We), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, internalStyle: [String, Object], maskClosable: { type: Boolean, default: true }, zIndex: Number, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function, draggable: [Boolean, Object] }), Lr = z({ name: `DialogEnvironment`, props: Object.assign(Object.assign({}, Ir), { internalKey: { type: String, required: true }, to: [String, Object], onInternalAfterLeave: { type: Function, required: true } }), setup(e2) {
  let t2 = I(true);
  function n2() {
    let { onInternalAfterLeave: t3, internalKey: n3, onAfterLeave: r3 } = e2;
    t3 && t3(n3), r3 && r3();
  }
  function r2(t3) {
    let { onPositiveClick: n3 } = e2;
    n3 ? Promise.resolve(n3(t3)).then((e3) => {
      e3 !== false && c2();
    }) : c2();
  }
  function i2(t3) {
    let { onNegativeClick: n3 } = e2;
    n3 ? Promise.resolve(n3(t3)).then((e3) => {
      e3 !== false && c2();
    }) : c2();
  }
  function a2() {
    let { onClose: t3 } = e2;
    t3 ? Promise.resolve(t3()).then((e3) => {
      e3 !== false && c2();
    }) : c2();
  }
  function o2(t3) {
    let { onMaskClick: n3, maskClosable: r3 } = e2;
    n3 && (n3(t3), r3 && c2());
  }
  function s2() {
    let { onEsc: t3 } = e2;
    t3 && t3();
  }
  function c2() {
    t2.value = false;
  }
  function l2(e3) {
    t2.value = e3;
  }
  return { show: t2, hide: c2, handleUpdateShow: l2, handleAfterLeave: n2, handleCloseClick: a2, handleNegativeClick: i2, handlePositiveClick: r2, handleMaskClick: o2, handleEsc: s2 };
}, render() {
  let { handlePositiveClick: e2, handleUpdateShow: t2, handleNegativeClick: n2, handleCloseClick: r2, handleAfterLeave: i2, handleMaskClick: a2, handleEsc: o2, to: s2, zIndex: c2, maskClosable: l2, show: u2 } = this;
  return M(Ze, { show: u2, onUpdateShow: t2, onMaskClick: a2, onEsc: o2, to: s2, zIndex: c2, maskClosable: l2, onAfterEnter: this.onAfterEnter, onAfterLeave: i2, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, draggable: this.draggable, internalAppear: true, internalDialog: true }, { default: ({ draggableClass: t3 }) => M(ut, Object.assign({}, ne(this.$props, Xe), { titleClass: Se([this.titleClass, t3]), style: this.internalStyle, onClose: r2, onNegativeClick: n2, onPositiveClick: e2 })) });
} }), Rr = z({ name: `DialogProvider`, props: { injectionKey: String, to: [String, Object] }, setup() {
  let e2 = I([]), t2 = {};
  function n2(n3 = {}) {
    let r3 = k(), i3 = Ae(Object.assign(Object.assign({}, n3), { key: r3, destroy: () => {
      var e3;
      (e3 = t2[`n-dialog-${r3}`]) == null || e3.hide();
    } }));
    return e2.value.push(i3), i3;
  }
  let r2 = [`info`, `success`, `warning`, `error`].map((e3) => (t3) => n2(Object.assign(Object.assign({}, t3), { type: e3 })));
  function i2(t3) {
    let { value: n3 } = e2;
    n3.splice(n3.findIndex((e3) => e3.key === t3), 1);
  }
  function a2() {
    Object.values(t2).forEach((e3) => {
      e3 == null ? void 0 : e3.hide();
    });
  }
  let o2 = { create: n2, destroyAll: a2, info: r2[0], success: r2[1], warning: r2[2], error: r2[3] };
  return A(it, o2), A(He, { clickedRef: Ge(64), clickedPositionRef: Ke() }), A(rt, e2), Object.assign(Object.assign({}, o2), { dialogList: e2, dialogInstRefs: t2, handleAfterLeave: i2 });
}, render() {
  var _a2;
  var e2;
  return M(xe, null, [this.dialogList.map((e3) => M(Lr, Dt(e3, [`destroy`, `style`], { internalStyle: e3.style, to: this.to, ref: (t2) => {
    t2 === null ? delete this.dialogInstRefs[`n-dialog-${e3.key}`] : this.dialogInstRefs[`n-dialog-${e3.key}`] = t2;
  }, internalKey: e3.key, onInternalAfterLeave: this.handleAfterLeave }))), (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2)]);
} });
var zr = { name: `LoadingBar`, common: q, self(e2) {
  let { primaryColor: t2 } = e2;
  return { colorError: `red`, colorLoading: t2, height: `2px` };
} }, Br = { name: `Message`, common: q, self: $t };
const Vr = { icon: Function, type: { type: String, default: `info` }, content: [String, Number, Function], showIcon: { type: Boolean, default: true }, closable: Boolean, keepAliveOnHover: Boolean, onClose: Function, onMouseenter: Function, onMouseleave: Function };
var Hr = S([d(`message-wrapper`, `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [zt({ overflow: `visible`, originalTransition: `transform .3s var(--n-bezier)`, enterToProps: { transform: `scale(1)` }, leaveToProps: { transform: `scale(0.85)` } })]), d(`message`, `
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
 `, [y(`content`, `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), y(`icon`, `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [[`default`, `info`, `success`, `warning`, `error`, `loading`].map((e2) => _(`${e2}-type`, [S(`> *`, `
 color: var(--n-icon-color-${e2});
 transition: color .3s var(--n-bezier);
 `)])), S(`> *`, `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [Ot()])]), y(`close`, `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [S(`&:hover`, `
 color: var(--n-close-icon-color-hover);
 `), S(`&:active`, `
 color: var(--n-close-icon-color-pressed);
 `)])]), d(`message-container`, `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [_(`top`, `
 top: 12px;
 left: 0;
 right: 0;
 `), _(`top-left`, `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), _(`top-right`, `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), _(`bottom`, `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), _(`bottom-left`, `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), _(`bottom-right`, `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]), Ur = { info: () => M(Nt, null), success: () => M(Ft, null), warning: () => M(It, null), error: () => M(Pt, null), default: () => null }, Wr = z({ name: `Message`, props: Object.assign(Object.assign({}, Vr), { render: Function }), setup(e2) {
  let { inlineThemeDisabled: t2, mergedRtlRef: n2 } = T(e2), { props: r2, mergedClsPrefixRef: i2 } = N(tt), a2 = m(`Message`, n2, i2), o2 = f(`Message`, `-message`, Hr, Kt, r2, i2), c2 = R(() => {
    let { type: t3 } = e2, { common: { cubicBezierEaseInOut: n3 }, self: { padding: r3, margin: i3, maxWidth: a3, iconMargin: s2, closeMargin: c3, closeSize: l3, iconSize: u2, fontSize: d2, lineHeight: f2, borderRadius: m2, border: h2, iconColorInfo: g2, iconColorSuccess: _2, iconColorWarning: v2, iconColorError: y2, iconColorLoading: b2, closeIconSize: x2, closeBorderRadius: S2, [p(`textColor`, t3)]: C2, [p(`boxShadow`, t3)]: w2, [p(`color`, t3)]: T2, [p(`closeColorHover`, t3)]: E2, [p(`closeColorPressed`, t3)]: D2, [p(`closeIconColor`, t3)]: ee2, [p(`closeIconColorPressed`, t3)]: O2, [p(`closeIconColorHover`, t3)]: te2 } } = o2.value;
    return { "--n-bezier": n3, "--n-margin": i3, "--n-padding": r3, "--n-max-width": a3, "--n-font-size": d2, "--n-icon-margin": s2, "--n-icon-size": u2, "--n-close-icon-size": x2, "--n-close-border-radius": S2, "--n-close-size": l3, "--n-close-margin": c3, "--n-text-color": C2, "--n-color": T2, "--n-box-shadow": w2, "--n-icon-color-info": g2, "--n-icon-color-success": _2, "--n-icon-color-warning": v2, "--n-icon-color-error": y2, "--n-icon-color-loading": b2, "--n-close-color-hover": E2, "--n-close-color-pressed": D2, "--n-close-icon-color": ee2, "--n-close-icon-color-pressed": O2, "--n-close-icon-color-hover": te2, "--n-line-height": f2, "--n-border-radius": m2, "--n-border": h2 };
  }), l2 = t2 ? s(`message`, R(() => e2.type[0]), c2, {}) : void 0;
  return { mergedClsPrefix: i2, rtlEnabled: a2, messageProviderProps: r2, handleClose() {
    var t3;
    (t3 = e2.onClose) == null || t3.call(e2);
  }, cssVars: t2 ? void 0 : c2, themeClass: l2 == null ? void 0 : l2.themeClass, onRender: l2 == null ? void 0 : l2.onRender, placement: r2.placement };
}, render() {
  let { render: e2, type: t2, closable: n2, content: r2, mergedClsPrefix: i2, cssVars: a2, themeClass: o2, onRender: s2, icon: c2, handleClose: u2, showIcon: d2 } = this;
  s2 == null ? void 0 : s2();
  let f2;
  return M(`div`, { class: [`${i2}-message-wrapper`, o2], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [{ alignItems: this.placement.startsWith(`top`) ? `flex-start` : `flex-end` }, a2] }, e2 ? e2(this.$props) : M(`div`, { class: [`${i2}-message ${i2}-message--${t2}-type`, this.rtlEnabled && `${i2}-message--rtl`] }, (f2 = Gr(c2, t2, i2)) && d2 ? M(`div`, { class: `${i2}-message__icon ${i2}-message__icon--${t2}-type` }, M(At, null, { default: () => f2 })) : null, M(`div`, { class: `${i2}-message__content` }, V(r2)), n2 ? M(l, { clsPrefix: i2, class: `${i2}-message__close`, onClick: u2, absolute: true }) : null));
} });
function Gr(e2, t2, n2) {
  if (typeof e2 == `function`) return e2();
  {
    let e3 = t2 === `loading` ? M(jt, { clsPrefix: n2, strokeWidth: 24, scale: 0.85 }) : Ur[t2]();
    return e3 ? M(x, { clsPrefix: n2, key: t2 }, { default: () => e3 }) : null;
  }
}
var Kr = z({ name: `MessageEnvironment`, props: Object.assign(Object.assign({}, Vr), { duration: { type: Number, default: 3e3 }, onAfterLeave: Function, onLeave: Function, internalKey: { type: String, required: true }, onInternalAfterLeave: Function, onHide: Function, onAfterHide: Function }), setup(e2) {
  let t2 = null, n2 = I(true);
  de(() => {
    r2();
  });
  function r2() {
    let { duration: n3 } = e2;
    n3 && (t2 = window.setTimeout(o2, n3));
  }
  function i2(e3) {
    e3.currentTarget === e3.target && t2 !== null && (window.clearTimeout(t2), t2 = null);
  }
  function a2(e3) {
    e3.currentTarget === e3.target && r2();
  }
  function o2() {
    let { onHide: r3 } = e2;
    n2.value = false, t2 && (t2 = (window.clearTimeout(t2), null)), r3 && r3();
  }
  function s2() {
    let { onClose: t3 } = e2;
    t3 && t3(), o2();
  }
  function c2() {
    let { onAfterLeave: t3, onInternalAfterLeave: n3, onAfterHide: r3, internalKey: i3 } = e2;
    t3 && t3(), n3 && n3(i3), r3 && r3();
  }
  function l2() {
    o2();
  }
  return { show: n2, hide: o2, handleClose: s2, handleAfterLeave: c2, handleMouseleave: a2, handleMouseenter: i2, deactivate: l2 };
}, render() {
  return M(b, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, { default: () => [this.show ? M(Wr, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null] });
} }), qr = z({ name: `MessageProvider`, props: Object.assign(Object.assign({}, f.props), { to: [String, Object], duration: { type: Number, default: 3e3 }, keepAliveOnHover: Boolean, max: Number, placement: { type: String, default: `top` }, closable: Boolean, containerClass: String, containerStyle: [String, Object] }), setup(e2) {
  let { mergedClsPrefixRef: t2 } = T(e2), n2 = I([]), r2 = I({}), i2 = { create(e3, t3) {
    return a2(e3, Object.assign({ type: `default` }, t3));
  }, info(e3, t3) {
    return a2(e3, Object.assign(Object.assign({}, t3), { type: `info` }));
  }, success(e3, t3) {
    return a2(e3, Object.assign(Object.assign({}, t3), { type: `success` }));
  }, warning(e3, t3) {
    return a2(e3, Object.assign(Object.assign({}, t3), { type: `warning` }));
  }, error(e3, t3) {
    return a2(e3, Object.assign(Object.assign({}, t3), { type: `error` }));
  }, loading(e3, t3) {
    return a2(e3, Object.assign(Object.assign({}, t3), { type: `loading` }));
  }, destroyAll: s2 };
  A(tt, { props: e2, mergedClsPrefixRef: t2 }), A(nt, i2);
  function a2(t3, i3) {
    let a3 = k(), o3 = Ae(Object.assign(Object.assign({}, i3), { content: t3, key: a3, destroy: () => {
      var e3;
      (e3 = r2.value[a3]) == null || e3.hide();
    } })), { max: s3 } = e2;
    return s3 && n2.value.length >= s3 && n2.value.shift(), n2.value.push(o3), o3;
  }
  function o2(e3) {
    n2.value.splice(n2.value.findIndex((t3) => t3.key === e3), 1), delete r2.value[e3];
  }
  function s2() {
    Object.values(r2.value).forEach((e3) => {
      e3.hide();
    });
  }
  return Object.assign({ mergedClsPrefix: t2, messageRefs: r2, messageList: n2, handleAfterLeave: o2 }, i2);
}, render() {
  var _a2;
  var e2;
  return M(xe, null, (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2), this.messageList.length ? M(ke, { to: this.to ?? `body` }, M(`div`, { class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass], key: `message-container`, style: this.containerStyle }, this.messageList.map((e3) => M(Kr, Object.assign({ ref: (t2) => {
    t2 && (this.messageRefs[e3.key] = t2);
  }, internalKey: e3.key, onInternalAfterLeave: this.handleAfterLeave }, Dt(e3, [`destroy`], void 0), { duration: e3.duration === void 0 ? this.duration : e3.duration, keepAliveOnHover: e3.keepAliveOnHover === void 0 ? this.keepAliveOnHover : e3.keepAliveOnHover, closable: e3.closable === void 0 ? this.closable : e3.closable }))))) : null);
} });
const Jr = z({ name: `ModalEnvironment`, props: Object.assign(Object.assign({}, lt), { internalKey: { type: String, required: true }, onInternalAfterLeave: { type: Function, required: true } }), setup(e2) {
  let t2 = I(true);
  function n2() {
    let { onInternalAfterLeave: t3, internalKey: n3, onAfterLeave: r3 } = e2;
    t3 && t3(n3), r3 && r3();
  }
  function r2() {
    let { onPositiveClick: t3 } = e2;
    t3 ? Promise.resolve(t3()).then((e3) => {
      e3 !== false && c2();
    }) : c2();
  }
  function i2() {
    let { onNegativeClick: t3 } = e2;
    t3 ? Promise.resolve(t3()).then((e3) => {
      e3 !== false && c2();
    }) : c2();
  }
  function a2() {
    let { onClose: t3 } = e2;
    t3 ? Promise.resolve(t3()).then((e3) => {
      e3 !== false && c2();
    }) : c2();
  }
  function o2(t3) {
    let { onMaskClick: n3, maskClosable: r3 } = e2;
    n3 && (n3(t3), r3 && c2());
  }
  function s2() {
    let { onEsc: t3 } = e2;
    t3 && t3();
  }
  function c2() {
    t2.value = false;
  }
  function l2(e3) {
    t2.value = e3;
  }
  return { show: t2, hide: c2, handleUpdateShow: l2, handleAfterLeave: n2, handleCloseClick: a2, handleNegativeClick: i2, handlePositiveClick: r2, handleMaskClick: o2, handleEsc: s2 };
}, render() {
  let { handleUpdateShow: e2, handleAfterLeave: t2, handleMaskClick: n2, handleEsc: r2, show: i2 } = this;
  return M(Ze, Object.assign({}, this.$props, { show: i2, onUpdateShow: e2, onMaskClick: n2, onEsc: r2, onAfterLeave: t2, internalAppear: true, internalModal: true }), this.$slots);
} }), Yr = z({ name: `ModalProvider`, props: { to: [String, Object] }, setup() {
  let e2 = I([]), t2 = {};
  function n2(n3 = {}) {
    let r3 = k(), i3 = Ae(Object.assign(Object.assign({}, n3), { key: r3, destroy: () => {
      var e3;
      (e3 = t2[`n-modal-${r3}`]) == null || e3.hide();
    } }));
    return e2.value.push(i3), i3;
  }
  function r2(t3) {
    let { value: n3 } = e2;
    n3.splice(n3.findIndex((e3) => e3.key === t3), 1);
  }
  function i2() {
    Object.values(t2).forEach((e3) => {
      e3 == null ? void 0 : e3.hide();
    });
  }
  let a2 = { create: n2, destroyAll: i2 };
  return A(ft, a2), A($e, { clickedRef: Ge(64), clickedPositionRef: Ke() }), A(dt, e2), Object.assign(Object.assign({}, a2), { modalList: e2, modalInstRefs: t2, handleAfterLeave: r2 });
}, render() {
  var _a2;
  var e2;
  return M(xe, null, [this.modalList.map((e3) => M(Jr, Dt(e3, [`destroy`, `render`], { to: e3.to ?? this.to, ref: (t2) => {
    t2 === null ? delete this.modalInstRefs[`n-modal-${e3.key}`] : this.modalInstRefs[`n-modal-${e3.key}`] = t2;
  }, internalKey: e3.key, onInternalAfterLeave: this.handleAfterLeave }), { default: e3.render })), (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2)]);
} });
var Xr = { name: `Notification`, common: q, peers: { Scrollbar: J }, self: qt }, Zr = { name: `Divider`, common: q, self: kn }, Qr = { name: `Drawer`, common: q, peers: { Scrollbar: J }, self: ot }, $r = { name: `DynamicInput`, common: q, peers: { Input: Z, Button: Q }, self() {
  return rn;
} }, ei = { name: `Space`, self() {
  return Fn;
} }, ti = { name: `DynamicTags`, common: q, peers: { Input: Z, Button: Q, Tag: nr, Space: ei }, self() {
  return { inputWidth: `64px` };
} }, ni = { name: `Element`, common: q }, ri = { name: `Flex`, self() {
  return et;
} }, ii = { name: `ButtonGroup`, common: q }, ai = { name: `Form`, common: q, self: at }, oi = { name: `GradientText`, common: q, self(e2) {
  let { primaryColor: t2, successColor: n2, warningColor: r2, errorColor: i2, infoColor: a2, primaryColorSuppl: o2, successColorSuppl: s2, warningColorSuppl: c2, errorColorSuppl: l2, infoColorSuppl: u2, fontWeightStrong: d2 } = e2;
  return { fontWeight: d2, rotate: `252deg`, colorStartPrimary: t2, colorEndPrimary: o2, colorStartInfo: a2, colorEndInfo: u2, colorStartWarning: r2, colorEndWarning: c2, colorStartError: i2, colorEndError: l2, colorStartSuccess: n2, colorEndSuccess: s2 };
} }, si = { name: `InputNumber`, common: q, peers: { Button: Q, Input: Z }, self(e2) {
  let { textColorDisabled: t2 } = e2;
  return { iconColorDisabled: t2 };
} }, ci = { name: `InputOtp`, common: q, peers: { Input: Z }, self: Tn }, li = { name: `Layout`, common: q, peers: { Scrollbar: J }, self(e2) {
  let { textColor2: t2, bodyColor: n2, popoverColor: r2, cardColor: i2, dividerColor: a2, scrollbarColor: o2, scrollbarColorHover: s2 } = e2;
  return { textColor: t2, textColorInverted: t2, color: n2, colorEmbedded: n2, headerColor: i2, headerColorInverted: i2, footerColor: i2, footerColorInverted: i2, headerBorderColor: a2, headerBorderColorInverted: a2, footerBorderColor: a2, footerBorderColorInverted: a2, siderBorderColor: a2, siderBorderColorInverted: a2, siderColor: i2, siderColorInverted: i2, siderToggleButtonBorder: `1px solid transparent`, siderToggleButtonColor: r2, siderToggleButtonIconColor: t2, siderToggleButtonIconColorInverted: t2, siderToggleBarColor: E(n2, o2), siderToggleBarColorHover: E(n2, s2), __invertScrollbar: `false` };
} }, ui = { name: `Row`, common: q }, di = { name: `List`, common: q, self: In }, fi = { name: `Log`, common: q, peers: { Scrollbar: J, Code: vr }, self(e2) {
  let { textColor2: t2, inputColor: n2, fontSize: r2, primaryColor: i2 } = e2;
  return { loaderFontSize: r2, loaderTextColor: t2, loaderColor: n2, loaderBorder: `1px solid #0000`, loadingColor: i2 };
} }, pi = { name: `Mention`, common: q, peers: { InternalSelectMenu: tr, Input: Z }, self(e2) {
  let { boxShadow2: t2 } = e2;
  return { menuBoxShadow: t2 };
} }, mi = { name: `Menu`, common: q, peers: { Tooltip: Er, Dropdown: Tr }, self(e2) {
  let { primaryColor: t2, primaryColorSuppl: n2 } = e2, r2 = Gt(e2);
  return r2.itemColorActive = a(t2, { alpha: 0.15 }), r2.itemColorActiveHover = a(t2, { alpha: 0.15 }), r2.itemColorActiveCollapsed = a(t2, { alpha: 0.15 }), r2.itemColorActiveInverted = n2, r2.itemColorActiveHoverInverted = n2, r2.itemColorActiveCollapsedInverted = n2, r2;
} };
const hi = { name: `PageHeader`, common: q, self: En };
var gi = { name: `Popconfirm`, common: q, peers: { Button: Q, Popover: X }, self: Ht }, _i = { name: `Progress`, common: q, self(e2) {
  let t2 = cn(e2);
  return t2.textColorLineInner = `rgb(0, 0, 0)`, t2.lineBgProcessing = `linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)`, t2;
} }, vi = { name: `Rate`, common: q, self(e2) {
  let { railColor: t2 } = e2;
  return { itemColor: t2, itemColorActive: `#CCAA33`, itemSize: `20px`, sizeSmall: `16px`, sizeMedium: `20px`, sizeLarge: `24px` };
} }, yi = { name: `Result`, common: q, self: wn }, bi = { name: `Slider`, common: q, self(e2) {
  let { railColor: t2, modalColor: n2, primaryColorSuppl: r2, popoverColor: i2, textColor2: a2, cardColor: o2, borderRadius: s2, fontSize: c2, opacityDisabled: l2 } = e2;
  return Object.assign(Object.assign({}, on), { fontSize: c2, markFontSize: c2, railColor: t2, railColorHover: t2, fillColor: r2, fillColorHover: r2, opacityDisabled: l2, handleColor: `#FFF`, dotColor: o2, dotColorModal: n2, dotColorPopover: i2, handleBoxShadow: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, handleBoxShadowHover: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, handleBoxShadowActive: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, handleBoxShadowFocus: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, indicatorColor: i2, indicatorBoxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.12)`, indicatorTextColor: a2, indicatorBorderRadius: s2, dotBorder: `2px solid ${t2}`, dotBorderActive: `2px solid ${r2}`, dotBoxShadow: `` });
} }, xi = { name: `Spin`, common: q, self: fn }, Si = { name: `Statistic`, common: q, self: Rt }, Ci = { name: `Steps`, common: q, self: _n }, wi = { name: `Switch`, common: q, self(e2) {
  let { primaryColorSuppl: t2, opacityDisabled: n2, borderRadius: r2, primaryColor: i2, textColor2: o2, baseColor: s2 } = e2;
  return Object.assign(Object.assign({}, bt), { iconColor: s2, textColor: o2, loadingColor: t2, opacityDisabled: n2, railColor: `rgba(255, 255, 255, .20)`, railColorActive: t2, buttonBoxShadow: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, buttonColor: `#FFF`, railBorderRadiusSmall: r2, railBorderRadiusMedium: r2, railBorderRadiusLarge: r2, buttonBorderRadiusSmall: r2, buttonBorderRadiusMedium: r2, buttonBorderRadiusLarge: r2, boxShadowFocus: `0 0 8px 0 ${a(i2, { alpha: 0.3 })}` });
} }, Ti = { name: `Table`, common: q, self: bn }, Ei = { name: `Tabs`, common: q, self(e2) {
  let t2 = Qe(e2), { inputColor: n2 } = e2;
  return t2.colorSegment = n2, t2.tabColorSegment = n2, t2;
} }, Di = { name: `Thing`, common: q, self: dn }, Oi = { name: `Timeline`, common: q, self(e2) {
  let { textColor3: t2, infoColorSuppl: n2, errorColorSuppl: r2, successColorSuppl: i2, warningColorSuppl: a2, textColor1: o2, textColor2: s2, railColor: c2, fontWeightStrong: l2, fontSize: u2 } = e2;
  return Object.assign(Object.assign({}, un), { contentFontSize: u2, titleFontWeight: l2, circleBorder: `2px solid ${t2}`, circleBorderInfo: `2px solid ${n2}`, circleBorderError: `2px solid ${r2}`, circleBorderSuccess: `2px solid ${i2}`, circleBorderWarning: `2px solid ${a2}`, iconColor: t2, iconColorInfo: n2, iconColorError: r2, iconColorSuccess: i2, iconColorWarning: a2, titleTextColor: o2, contentTextColor: s2, metaTextColor: t2, lineColor: c2 });
} }, ki = { name: `Transfer`, common: q, peers: { Checkbox: gr, Scrollbar: J, Input: Z, Empty: Y, Button: Q }, self(e2) {
  let { fontWeight: t2, fontSizeLarge: n2, fontSizeMedium: r2, fontSizeSmall: i2, heightLarge: a2, heightMedium: o2, borderRadius: s2, inputColor: c2, tableHeaderColor: l2, textColor1: u2, textColorDisabled: d2, textColor2: f2, textColor3: p2, hoverColor: m2, closeColorHover: h2, closeColorPressed: g2, closeIconColor: _2, closeIconColorHover: v2, closeIconColorPressed: y2, dividerColor: b2 } = e2;
  return Object.assign(Object.assign({}, Cn), { itemHeightSmall: o2, itemHeightMedium: o2, itemHeightLarge: a2, fontSizeSmall: i2, fontSizeMedium: r2, fontSizeLarge: n2, borderRadius: s2, dividerColor: b2, borderColor: `#0000`, listColor: c2, headerColor: l2, titleTextColor: u2, titleTextColorDisabled: d2, extraTextColor: p2, extraTextColorDisabled: d2, itemTextColor: f2, itemTextColorDisabled: d2, itemColorPending: m2, titleFontWeight: t2, closeColorHover: h2, closeColorPressed: g2, closeIconColor: _2, closeIconColorHover: v2, closeIconColorPressed: y2 });
} }, Ai = { name: `Tree`, common: q, peers: { Checkbox: gr, Scrollbar: J, Empty: Y }, self(e2) {
  let { primaryColor: t2 } = e2, n2 = gn(e2);
  return n2.nodeColorActive = a(t2, { alpha: 0.15 }), n2;
} }, ji = { name: `TreeSelect`, common: q, peers: { Tree: Ai, Empty: Y, InternalSelection: rr } }, Mi = { name: `Typography`, common: q, self: Ln }, Ni = { name: `Upload`, common: q, peers: { Button: Q, Progress: _i }, self(e2) {
  let { errorColor: t2 } = e2, n2 = ln(e2);
  return n2.itemColorHoverError = a(t2, { alpha: 0.09 }), n2;
} }, Pi = { name: `Watermark`, common: q, self(e2) {
  let { fontFamily: t2 } = e2;
  return { fontFamily: t2 };
} }, Fi = { name: `FloatButton`, common: q, self(e2) {
  let { popoverColor: t2, textColor2: n2, buttonColor2Hover: r2, buttonColor2Pressed: i2, primaryColor: a2, primaryColorHover: o2, primaryColorPressed: s2, baseColor: c2, borderRadius: l2 } = e2;
  return { color: t2, textColor: n2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .12)`, boxShadowHover: `0 2px 12px 0px rgba(0, 0, 0, .18)`, boxShadowPressed: `0 2px 12px 0px rgba(0, 0, 0, .18)`, colorHover: r2, colorPressed: i2, colorPrimary: a2, colorPrimaryHover: o2, colorPrimaryPressed: s2, textColorPrimary: c2, borderRadiusSquare: l2 };
} }, Ii = z({ name: `GlobalStyle`, setup() {
  if (typeof document > `u`) return;
  let e2 = N(C, null), { body: t2 } = document, { style: n2 } = t2, r2 = false, i2 = true;
  fe(() => {
    ge(() => {
      var _a2, _b;
      let { textColor2: a2, fontSize: o2, fontFamily: s2, bodyColor: c2, cubicBezierEaseInOut: l2, lineHeight: u2 } = e2 ? w({}, ((_a2 = e2.mergedThemeRef.value) == null ? void 0 : _a2.common) || v, (_b = e2.mergedThemeOverridesRef.value) == null ? void 0 : _b.common) : v;
      if (r2 || !t2.hasAttribute(`n-styled`)) {
        n2.setProperty(`-webkit-text-size-adjust`, `100%`), n2.setProperty(`-webkit-tap-highlight-color`, `transparent`), n2.padding = `0`, n2.margin = `0`, n2.backgroundColor = c2, n2.color = a2, n2.fontSize = o2, n2.fontFamily = s2, n2.lineHeight = u2;
        let e3 = `color .3s ${l2}, background-color .3s ${l2}`;
        i2 ? setTimeout(() => {
          n2.transition = e3;
        }, 0) : n2.transition = e3, t2.setAttribute(`n-styled`, ``), r2 = true, i2 = false;
      }
    });
  }), pe(() => {
    r2 && t2.removeAttribute(`n-styled`);
  });
}, render() {
  return null;
} }), Li = { name: `Heatmap`, common: q, self(e2) {
  let t2 = yn(e2);
  return Object.assign(Object.assign({}, t2), { activeColors: [`#0d4429`, `#006d32`, `#26a641`, `#39d353`], mininumColor: `rgba(255, 255, 255, 0.1)`, loadingColorStart: `rgba(255, 255, 255, 0.12)`, loadingColorEnd: `rgba(255, 255, 255, 0.18)` });
} }, Ri = { name: `IconWrapper`, common: q, self: sn };
const zi = { name: `Image`, common: q, peers: { Tooltip: Er }, self: (e2) => {
  let { textColor2: t2 } = e2;
  return { toolbarIconColor: t2, toolbarColor: `rgba(0, 0, 0, .35)`, toolbarBoxShadow: `none`, toolbarBorderRadius: `24px` };
} };
var Bi = { name: `Transfer`, common: q, peers: { Checkbox: gr, Scrollbar: J, Input: Z, Empty: Y, Button: Q }, self(e2) {
  let { iconColorDisabled: t2, iconColor: n2, fontWeight: r2, fontSizeLarge: i2, fontSizeMedium: a2, fontSizeSmall: o2, heightLarge: s2, heightMedium: c2, heightSmall: l2, borderRadius: u2, inputColor: d2, tableHeaderColor: f2, textColor1: p2, textColorDisabled: m2, textColor2: h2, hoverColor: g2 } = e2;
  return Object.assign(Object.assign({}, pn), { itemHeightSmall: l2, itemHeightMedium: c2, itemHeightLarge: s2, fontSizeSmall: o2, fontSizeMedium: a2, fontSizeLarge: i2, borderRadius: u2, borderColor: `#0000`, listColor: d2, headerColor: f2, titleTextColor: p2, titleTextColorDisabled: m2, extraTextColor: h2, filterDividerColor: `#0000`, itemTextColor: h2, itemTextColorDisabled: m2, itemColorPending: g2, titleFontWeight: r2, iconColor: n2, iconColorDisabled: t2 });
} }, Vi = { name: `Marquee`, common: q, self: xn };
const Hi = t(`n-menu`), Ui = t(`n-submenu`), Wi = t(`n-menu-item-group`);
var Gi = [S(`&::before`, `background-color: var(--n-item-color-hover);`), y(`arrow`, `
 color: var(--n-arrow-color-hover);
 `), y(`icon`, `
 color: var(--n-item-icon-color-hover);
 `), d(`menu-item-content-header`, `
 color: var(--n-item-text-color-hover);
 `, [S(`a`, `
 color: var(--n-item-text-color-hover);
 `), y(`extra`, `
 color: var(--n-item-text-color-hover);
 `)])], Ki = [y(`icon`, `
 color: var(--n-item-icon-color-hover-horizontal);
 `), d(`menu-item-content-header`, `
 color: var(--n-item-text-color-hover-horizontal);
 `, [S(`a`, `
 color: var(--n-item-text-color-hover-horizontal);
 `), y(`extra`, `
 color: var(--n-item-text-color-hover-horizontal);
 `)])], qi = S([d(`menu`, `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [_(`horizontal`, `
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `, [d(`submenu`, `margin: 0;`), d(`menu-item`, `margin: 0;`), d(`menu-item-content`, `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [S(`&::before`, `display: none;`), _(`selected`, `border-bottom: 2px solid var(--n-border-color-horizontal)`)]), d(`menu-item-content`, [_(`selected`, [y(`icon`, `color: var(--n-item-icon-color-active-horizontal);`), d(`menu-item-content-header`, `
 color: var(--n-item-text-color-active-horizontal);
 `, [S(`a`, `color: var(--n-item-text-color-active-horizontal);`), y(`extra`, `color: var(--n-item-text-color-active-horizontal);`)])]), _(`child-active`, `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [d(`menu-item-content-header`, `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [S(`a`, `
 color: var(--n-item-text-color-child-active-horizontal);
 `), y(`extra`, `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), y(`icon`, `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), h(`disabled`, [h(`selected, child-active`, [S(`&:focus-within`, Ki)]), _(`selected`, [$(null, [y(`icon`, `color: var(--n-item-icon-color-active-hover-horizontal);`), d(`menu-item-content-header`, `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [S(`a`, `color: var(--n-item-text-color-active-hover-horizontal);`), y(`extra`, `color: var(--n-item-text-color-active-hover-horizontal);`)])])]), _(`child-active`, [$(null, [y(`icon`, `color: var(--n-item-icon-color-child-active-hover-horizontal);`), d(`menu-item-content-header`, `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [S(`a`, `color: var(--n-item-text-color-child-active-hover-horizontal);`), y(`extra`, `color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]), $(`border-bottom: 2px solid var(--n-border-color-horizontal);`, Ki)]), d(`menu-item-content-header`, [S(`a`, `color: var(--n-item-text-color-horizontal);`)])])]), h(`responsive`, [d(`menu-item-content-header`, `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), _(`collapsed`, [d(`menu-item-content`, [_(`selected`, [S(`&::before`, `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), d(`menu-item-content-header`, `opacity: 0;`), y(`arrow`, `opacity: 0;`), y(`icon`, `color: var(--n-item-icon-color-collapsed);`)])]), d(`menu-item`, `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), d(`menu-item-content`, `
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
 `, [S(`> *`, `z-index: 1;`), S(`&::before`, `
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
 `), _(`disabled`, `
 opacity: .45;
 cursor: not-allowed;
 `), _(`collapsed`, [y(`arrow`, `transform: rotate(0);`)]), _(`selected`, [S(`&::before`, `background-color: var(--n-item-color-active);`), y(`arrow`, `color: var(--n-arrow-color-active);`), y(`icon`, `color: var(--n-item-icon-color-active);`), d(`menu-item-content-header`, `
 color: var(--n-item-text-color-active);
 `, [S(`a`, `color: var(--n-item-text-color-active);`), y(`extra`, `color: var(--n-item-text-color-active);`)])]), _(`child-active`, [d(`menu-item-content-header`, `
 color: var(--n-item-text-color-child-active);
 `, [S(`a`, `
 color: var(--n-item-text-color-child-active);
 `), y(`extra`, `
 color: var(--n-item-text-color-child-active);
 `)]), y(`arrow`, `
 color: var(--n-arrow-color-child-active);
 `), y(`icon`, `
 color: var(--n-item-icon-color-child-active);
 `)]), h(`disabled`, [h(`selected, child-active`, [S(`&:focus-within`, Gi)]), _(`selected`, [$(null, [y(`arrow`, `color: var(--n-arrow-color-active-hover);`), y(`icon`, `color: var(--n-item-icon-color-active-hover);`), d(`menu-item-content-header`, `
 color: var(--n-item-text-color-active-hover);
 `, [S(`a`, `color: var(--n-item-text-color-active-hover);`), y(`extra`, `color: var(--n-item-text-color-active-hover);`)])])]), _(`child-active`, [$(null, [y(`arrow`, `color: var(--n-arrow-color-child-active-hover);`), y(`icon`, `color: var(--n-item-icon-color-child-active-hover);`), d(`menu-item-content-header`, `
 color: var(--n-item-text-color-child-active-hover);
 `, [S(`a`, `color: var(--n-item-text-color-child-active-hover);`), y(`extra`, `color: var(--n-item-text-color-child-active-hover);`)])])]), _(`selected`, [$(null, [S(`&::before`, `background-color: var(--n-item-color-active-hover);`)])]), $(null, Gi)]), y(`icon`, `
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
 `), y(`arrow`, `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), d(`menu-item-content-header`, `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `, [S(`a`, `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [S(`&::before`, `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), y(`extra`, `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), d(`submenu`, `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [d(`menu-item-content`, `
 height: var(--n-item-height);
 `), d(`submenu-children`, `
 overflow: hidden;
 padding: 0;
 `, [zt({ duration: `.2s` })])]), d(`menu-item-group`, [d(`menu-item-group-title`, `
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
 `)])]), d(`menu-tooltip`, [S(`a`, `
 color: inherit;
 text-decoration: none;
 `)]), d(`menu-divider`, `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function $(e2, t2) {
  return [_(`hover`, e2, t2), S(`&:hover`, e2, t2)];
}
var Ji = z({ name: `MenuOptionContent`, props: { collapsed: Boolean, disabled: Boolean, title: [String, Function], icon: Function, extra: [String, Function], showArrow: Boolean, childActive: Boolean, hover: Boolean, paddingLeft: Number, selected: Boolean, maxIconSize: { type: Number, required: true }, activeIconSize: { type: Number, required: true }, iconMarginRight: { type: Number, required: true }, clsPrefix: { type: String, required: true }, onClick: Function, tmNode: { type: Object, required: true }, isEllipsisPlaceholder: Boolean }, setup(e2) {
  let { props: t2 } = N(Hi);
  return { menuProps: t2, style: R(() => {
    let { paddingLeft: t3 } = e2;
    return { paddingLeft: t3 && `${t3}px` };
  }), iconStyle: R(() => {
    let { maxIconSize: t3, activeIconSize: n2, iconMarginRight: r2 } = e2;
    return { width: `${t3}px`, height: `${t3}px`, fontSize: `${n2}px`, marginRight: `${r2}px` };
  }) };
}, render() {
  let { clsPrefix: e2, tmNode: t2, menuProps: { renderIcon: n2, renderLabel: r2, renderExtra: i2, expandIcon: a2 } } = this, o2 = n2 ? n2(t2.rawNode) : V(this.icon);
  return M(`div`, { onClick: (e3) => {
    var t3;
    (t3 = this.onClick) == null || t3.call(this, e3);
  }, role: `none`, class: [`${e2}-menu-item-content`, { [`${e2}-menu-item-content--selected`]: this.selected, [`${e2}-menu-item-content--collapsed`]: this.collapsed, [`${e2}-menu-item-content--child-active`]: this.childActive, [`${e2}-menu-item-content--disabled`]: this.disabled, [`${e2}-menu-item-content--hover`]: this.hover }], style: this.style }, o2 && M(`div`, { class: `${e2}-menu-item-content__icon`, style: this.iconStyle, role: `none` }, [o2]), M(`div`, { class: `${e2}-menu-item-content-header`, role: `none` }, this.isEllipsisPlaceholder ? this.title : r2 ? r2(t2.rawNode) : V(this.title), this.extra || i2 ? M(`span`, { class: `${e2}-menu-item-content-header__extra` }, ` `, i2 ? i2(t2.rawNode) : V(this.extra)) : null), this.showArrow ? M(x, { ariaHidden: true, class: `${e2}-menu-item-content__arrow`, clsPrefix: e2 }, { default: () => a2 ? a2(t2.rawNode) : M(Xn, null) }) : null);
} }), Yi = 8;
function Xi(e2) {
  let t2 = N(Hi), { props: n2, mergedCollapsedRef: r2 } = t2, i2 = N(Ui, null), a2 = N(Wi, null), o2 = R(() => n2.mode === `horizontal`), s2 = R(() => o2.value ? n2.dropdownPlacement : `tmNodes` in e2 ? `right-start` : `right`), c2 = R(() => Math.max(n2.collapsedIconSize ?? n2.iconSize, n2.iconSize));
  return { dropdownPlacement: s2, activeIconSize: R(() => !o2.value && e2.root && r2.value ? n2.collapsedIconSize ?? n2.iconSize : n2.iconSize), maxIconSize: c2, paddingLeft: R(() => {
    if (o2.value) return;
    let { collapsedWidth: t3, indent: s3, rootIndent: l2 } = n2, { root: u2, isGroup: d2 } = e2, f2 = l2 === void 0 ? s3 : l2;
    return u2 ? r2.value ? t3 / 2 - c2.value / 2 : f2 : a2 && typeof a2.paddingLeftRef.value == `number` ? s3 / 2 + a2.paddingLeftRef.value : i2 && typeof i2.paddingLeftRef.value == `number` ? (d2 ? s3 / 2 : s3) + i2.paddingLeftRef.value : 0;
  }), iconMarginRight: R(() => {
    let { collapsedWidth: t3, indent: i3, rootIndent: a3 } = n2, { value: s3 } = c2, { root: l2 } = e2;
    return o2.value || !l2 || !r2.value ? Yi : (a3 === void 0 ? i3 : a3) + s3 + Yi - (t3 + s3) / 2;
  }), NMenu: t2, NSubmenu: i2, NMenuOptionGroup: a2 };
}
const Zi = { internalKey: { type: [String, Number], required: true }, root: Boolean, isGroup: Boolean, level: { type: Number, required: true }, title: [String, Function], extra: [String, Function] };
var Qi = z({ name: `MenuDivider`, setup() {
  let { mergedClsPrefixRef: e2, isHorizontalRef: t2 } = N(Hi);
  return () => t2.value ? null : M(`div`, { class: `${e2.value}-menu-divider` });
} });
const $i = Object.assign(Object.assign({}, Zi), { tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function }), ea = e($i), ta = z({ name: `MenuOption`, props: $i, setup(e2) {
  let t2 = Xi(e2), { NSubmenu: n2, NMenu: i2, NMenuOptionGroup: a2 } = t2, { props: o2, mergedClsPrefixRef: s2, mergedCollapsedRef: c2 } = i2, l2 = n2 ? n2.mergedDisabledRef : a2 ? a2.mergedDisabledRef : { value: false }, u2 = R(() => l2.value || e2.disabled);
  function d2(t3) {
    let { onClick: n3 } = e2;
    n3 && n3(t3);
  }
  function f2(t3) {
    u2.value || (i2.doSelect(e2.internalKey, e2.tmNode.rawNode), d2(t3));
  }
  return { mergedClsPrefix: s2, dropdownPlacement: t2.dropdownPlacement, paddingLeft: t2.paddingLeft, iconMarginRight: t2.iconMarginRight, maxIconSize: t2.maxIconSize, activeIconSize: t2.activeIconSize, mergedTheme: i2.mergedThemeRef, menuProps: o2, dropdownEnabled: r(() => e2.root && c2.value && o2.mode !== `horizontal` && !u2.value), selected: r(() => i2.mergedValueRef.value === e2.internalKey), mergedDisabled: u2, handleClick: f2 };
}, render() {
  let { mergedClsPrefix: e2, mergedTheme: t2, tmNode: n2, menuProps: { renderLabel: r2, nodeProps: i2 } } = this, a2 = i2 == null ? void 0 : i2(n2.rawNode);
  return M(`div`, Object.assign({}, a2, { role: `menuitem`, class: [`${e2}-menu-item`, a2 == null ? void 0 : a2.class] }), M(se, { theme: t2.peers.Tooltip, themeOverrides: t2.peerOverrides.Tooltip, trigger: `hover`, placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: [`menu-tooltip`] }, { default: () => r2 ? r2(n2.rawNode) : V(this.title), trigger: () => M(Ji, { tmNode: n2, clsPrefix: e2, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }) }));
} }), na = Object.assign(Object.assign({}, Zi), { tmNode: { type: Object, required: true }, tmNodes: { type: Array, required: true } }), ra = e(na), ia = z({ name: `MenuOptionGroup`, props: na, setup(e2) {
  let t2 = Xi(e2), { NSubmenu: n2 } = t2, r2 = R(() => (n2 == null ? void 0 : n2.mergedDisabledRef.value) ? true : e2.tmNode.disabled);
  A(Wi, { paddingLeftRef: t2.paddingLeft, mergedDisabledRef: r2 });
  let { mergedClsPrefixRef: i2, props: a2 } = N(Hi);
  return function() {
    let { value: n3 } = i2, r3 = t2.paddingLeft.value, { nodeProps: o2 } = a2, s2 = o2 == null ? void 0 : o2(e2.tmNode.rawNode);
    return M(`div`, { class: `${n3}-menu-item-group`, role: `group` }, M(`div`, Object.assign({}, s2, { class: [`${n3}-menu-item-group-title`, s2 == null ? void 0 : s2.class], style: [(s2 == null ? void 0 : s2.style) || ``, r3 === void 0 ? `` : `padding-left: ${r3}px;`] }), V(e2.title), e2.extra ? M(xe, null, ` `, V(e2.extra)) : null), M(`div`, null, e2.tmNodes.map((e3) => sa(e3, a2))));
  };
} });
function aa(e2) {
  return e2.type === `divider` || e2.type === `render`;
}
function oa(e2) {
  return e2.type === `divider`;
}
function sa(e2, t2) {
  let { rawNode: n2 } = e2, { show: r2 } = n2;
  if (r2 === false) return null;
  if (aa(n2)) return oa(n2) ? M(Qi, Object.assign({ key: e2.key }, n2.props)) : null;
  let { labelField: i2 } = t2, { key: a2, level: o2, isGroup: s2 } = e2, c2 = Object.assign(Object.assign({}, n2), { title: n2.title || n2[i2], extra: n2.titleExtra || n2.extra, key: a2, internalKey: a2, level: o2, root: o2 === 0, isGroup: s2 });
  return e2.children ? e2.isGroup ? M(ia, ne(c2, ra, { tmNode: e2, tmNodes: e2.children, key: a2 })) : M(ua, ne(c2, la, { key: a2, rawNodes: n2[t2.childrenField], tmNodes: e2.children, tmNode: e2 })) : M(ta, ne(c2, ea, { key: a2, tmNode: e2 }));
}
const ca = Object.assign(Object.assign({}, Zi), { rawNodes: { type: Array, default: () => [] }, tmNodes: { type: Array, default: () => [] }, tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function, domId: String, virtualChildActive: { type: Boolean, default: void 0 }, isEllipsisPlaceholder: Boolean }), la = e(ca), ua = z({ name: `Submenu`, props: ca, setup(e2) {
  let t2 = Xi(e2), { NMenu: n2, NSubmenu: i2 } = t2, { props: a2, mergedCollapsedRef: o2, mergedThemeRef: s2 } = n2, c2 = R(() => {
    let { disabled: t3 } = e2;
    return (i2 == null ? void 0 : i2.mergedDisabledRef.value) || a2.disabled ? true : t3;
  }), l2 = I(false);
  A(Ui, { paddingLeftRef: t2.paddingLeft, mergedDisabledRef: c2 }), A(Wi, null);
  function u2() {
    let { onClick: t3 } = e2;
    t3 && t3();
  }
  function d2() {
    c2.value || (o2.value || n2.toggleExpand(e2.internalKey), u2());
  }
  function f2(e3) {
    l2.value = e3;
  }
  return { menuProps: a2, mergedTheme: s2, doSelect: n2.doSelect, inverted: n2.invertedRef, isHorizontal: n2.isHorizontalRef, mergedClsPrefix: n2.mergedClsPrefixRef, maxIconSize: t2.maxIconSize, activeIconSize: t2.activeIconSize, iconMarginRight: t2.iconMarginRight, dropdownPlacement: t2.dropdownPlacement, dropdownShow: l2, paddingLeft: t2.paddingLeft, mergedDisabled: c2, mergedValue: n2.mergedValueRef, childActive: r(() => e2.virtualChildActive ?? n2.activePathRef.value.includes(e2.internalKey)), collapsed: R(() => a2.mode === `horizontal` ? false : o2.value ? true : !n2.mergedExpandedKeysRef.value.includes(e2.internalKey)), dropdownEnabled: R(() => !c2.value && (a2.mode === `horizontal` || o2.value)), handlePopoverShowChange: f2, handleClick: d2 };
}, render() {
  var _a2;
  let { mergedClsPrefix: e2, menuProps: { renderIcon: t2, renderLabel: n2 } } = this, r2 = () => {
    let { isHorizontal: e3, paddingLeft: t3, collapsed: n3, mergedDisabled: r3, maxIconSize: i3, activeIconSize: a2, title: o2, childActive: s2, icon: c2, handleClick: l2, menuProps: { nodeProps: u2 }, dropdownShow: d2, iconMarginRight: f2, tmNode: p2, mergedClsPrefix: m2, isEllipsisPlaceholder: h2, extra: g2 } = this, _2 = u2 == null ? void 0 : u2(p2.rawNode);
    return M(`div`, Object.assign({}, _2, { class: [`${m2}-menu-item`, _2 == null ? void 0 : _2.class], role: `menuitem` }), M(Ji, { tmNode: p2, paddingLeft: t3, collapsed: n3, disabled: r3, iconMarginRight: f2, maxIconSize: i3, activeIconSize: a2, title: o2, extra: g2, showArrow: !e3, childActive: s2, clsPrefix: m2, icon: c2, hover: d2, onClick: l2, isEllipsisPlaceholder: h2 }));
  }, i2 = () => M(b, null, { default: () => {
    let { tmNodes: t3, collapsed: n3 } = this;
    return n3 ? null : M(`div`, { class: `${e2}-submenu-children`, role: `menu` }, t3.map((e3) => sa(e3, this.menuProps)));
  } });
  return this.root ? M(_t, Object.assign({ size: `large`, trigger: `hover` }, (_a2 = this.menuProps) == null ? void 0 : _a2.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: { fontSizeLarge: `14px`, optionIconSizeLarge: `18px` }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: t2, renderLabel: n2 }), { default: () => M(`div`, { class: `${e2}-submenu`, role: `menu`, "aria-expanded": !this.collapsed, id: this.domId }, r2(), this.isHorizontal ? null : i2()) }) : M(`div`, { class: `${e2}-submenu`, role: `menu`, "aria-expanded": !this.collapsed, id: this.domId }, r2(), i2());
} });
var da = z({ name: `Menu`, inheritAttrs: false, props: Object.assign(Object.assign({}, f.props), { options: { type: Array, default: () => [] }, collapsed: { type: Boolean, default: void 0 }, collapsedWidth: { type: Number, default: 48 }, iconSize: { type: Number, default: 20 }, collapsedIconSize: { type: Number, default: 24 }, rootIndent: Number, indent: { type: Number, default: 32 }, labelField: { type: String, default: `label` }, keyField: { type: String, default: `key` }, childrenField: { type: String, default: `children` }, disabledField: { type: String, default: `disabled` }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: { type: [String, Number], default: null }, mode: { type: String, default: `vertical` }, watchProps: { type: Array, default: void 0 }, disabled: Boolean, show: { type: Boolean, default: true }, inverted: Boolean, "onUpdate:expandedKeys": [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], "onUpdate:value": [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, dropdownProps: Object, accordion: Boolean, nodeProps: Function, dropdownPlacement: { type: String, default: `bottom` }, responsive: Boolean, items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array }), setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = T(e2), r2 = f(`Menu`, `-menu`, qi, nn, e2, t2), a2 = N(Ve, null), o2 = R(() => {
    let { collapsed: t3 } = e2;
    if (t3 !== void 0) return t3;
    if (a2) {
      let { collapseModeRef: e3, collapsedRef: t4 } = a2;
      if (e3.value === `width`) return t4.value ?? false;
    }
    return false;
  }), c2 = R(() => {
    let { keyField: t3, childrenField: n3, disabledField: r3 } = e2;
    return wt(e2.items || e2.options, { getIgnored(e3) {
      return aa(e3);
    }, getChildren(e3) {
      return e3[n3];
    }, getDisabled(e3) {
      return e3[r3];
    }, getKey(e3) {
      return e3[t3] ?? e3.name;
    } });
  }), l2 = R(() => new Set(c2.value.treeNodes.map((e3) => e3.key))), { watchProps: u2 } = e2, d2 = I(null);
  (u2 == null ? void 0 : u2.includes(`defaultValue`)) ? ge(() => {
    d2.value = e2.defaultValue;
  }) : d2.value = e2.defaultValue;
  let p2 = te(be(e2, `value`), d2), m2 = I([]), h2 = () => {
    m2.value = e2.defaultExpandAll ? c2.value.getNonLeafKeys() : e2.defaultExpandedNames || e2.defaultExpandedKeys || c2.value.getPath(p2.value, { includeSelf: false }).keyPath;
  };
  (u2 == null ? void 0 : u2.includes(`defaultExpandedKeys`)) ? ge(h2) : h2();
  let g2 = ee(e2, [`expandedNames`, `expandedKeys`]), _2 = te(g2, m2), v2 = R(() => c2.value.treeNodes), y2 = R(() => c2.value.getPath(p2.value).keyPath);
  A(Hi, { props: e2, mergedCollapsedRef: o2, mergedThemeRef: r2, mergedValueRef: p2, mergedExpandedKeysRef: _2, activePathRef: y2, mergedClsPrefixRef: t2, isHorizontalRef: R(() => e2.mode === `horizontal`), invertedRef: be(e2, `inverted`), doSelect: b2, toggleExpand: S2 });
  function b2(t3, n3) {
    let { "onUpdate:value": r3, onUpdateValue: a3, onSelect: o3 } = e2;
    a3 && i(a3, t3, n3), r3 && i(r3, t3, n3), o3 && i(o3, t3, n3), d2.value = t3;
  }
  function x2(t3) {
    let { "onUpdate:expandedKeys": n3, onUpdateExpandedKeys: r3, onExpandedNamesChange: a3, onOpenNamesChange: o3 } = e2;
    n3 && i(n3, t3), r3 && i(r3, t3), a3 && i(a3, t3), o3 && i(o3, t3), m2.value = t3;
  }
  function S2(t3) {
    let n3 = Array.from(_2.value), r3 = n3.findIndex((e3) => e3 === t3);
    if (~r3) n3.splice(r3, 1);
    else {
      if (e2.accordion && l2.value.has(t3)) {
        let e3 = n3.findIndex((e4) => l2.value.has(e4));
        e3 > -1 && n3.splice(e3, 1);
      }
      n3.push(t3);
    }
    x2(n3);
  }
  let C2 = (t3) => {
    let n3 = c2.value.getPath(t3 ?? p2.value, { includeSelf: false }).keyPath;
    if (!n3.length) return;
    let r3 = Array.from(_2.value), i2 = /* @__PURE__ */ new Set([...r3, ...n3]);
    e2.accordion && l2.value.forEach((e3) => {
      i2.has(e3) && !n3.includes(e3) && i2.delete(e3);
    }), x2(Array.from(i2));
  }, w2 = R(() => {
    let { inverted: t3 } = e2, { common: { cubicBezierEaseInOut: n3 }, self: i2 } = r2.value, { borderRadius: a3, borderColorHorizontal: o3, fontSize: s2, itemHeight: c3, dividerColor: l3 } = i2, u3 = { "--n-divider-color": l3, "--n-bezier": n3, "--n-font-size": s2, "--n-border-color-horizontal": o3, "--n-border-radius": a3, "--n-item-height": c3 };
    return t3 ? (u3[`--n-group-text-color`] = i2.groupTextColorInverted, u3[`--n-color`] = i2.colorInverted, u3[`--n-item-text-color`] = i2.itemTextColorInverted, u3[`--n-item-text-color-hover`] = i2.itemTextColorHoverInverted, u3[`--n-item-text-color-active`] = i2.itemTextColorActiveInverted, u3[`--n-item-text-color-child-active`] = i2.itemTextColorChildActiveInverted, u3[`--n-item-text-color-child-active-hover`] = i2.itemTextColorChildActiveInverted, u3[`--n-item-text-color-active-hover`] = i2.itemTextColorActiveHoverInverted, u3[`--n-item-icon-color`] = i2.itemIconColorInverted, u3[`--n-item-icon-color-hover`] = i2.itemIconColorHoverInverted, u3[`--n-item-icon-color-active`] = i2.itemIconColorActiveInverted, u3[`--n-item-icon-color-active-hover`] = i2.itemIconColorActiveHoverInverted, u3[`--n-item-icon-color-child-active`] = i2.itemIconColorChildActiveInverted, u3[`--n-item-icon-color-child-active-hover`] = i2.itemIconColorChildActiveHoverInverted, u3[`--n-item-icon-color-collapsed`] = i2.itemIconColorCollapsedInverted, u3[`--n-item-text-color-horizontal`] = i2.itemTextColorHorizontalInverted, u3[`--n-item-text-color-hover-horizontal`] = i2.itemTextColorHoverHorizontalInverted, u3[`--n-item-text-color-active-horizontal`] = i2.itemTextColorActiveHorizontalInverted, u3[`--n-item-text-color-child-active-horizontal`] = i2.itemTextColorChildActiveHorizontalInverted, u3[`--n-item-text-color-child-active-hover-horizontal`] = i2.itemTextColorChildActiveHoverHorizontalInverted, u3[`--n-item-text-color-active-hover-horizontal`] = i2.itemTextColorActiveHoverHorizontalInverted, u3[`--n-item-icon-color-horizontal`] = i2.itemIconColorHorizontalInverted, u3[`--n-item-icon-color-hover-horizontal`] = i2.itemIconColorHoverHorizontalInverted, u3[`--n-item-icon-color-active-horizontal`] = i2.itemIconColorActiveHorizontalInverted, u3[`--n-item-icon-color-active-hover-horizontal`] = i2.itemIconColorActiveHoverHorizontalInverted, u3[`--n-item-icon-color-child-active-horizontal`] = i2.itemIconColorChildActiveHorizontalInverted, u3[`--n-item-icon-color-child-active-hover-horizontal`] = i2.itemIconColorChildActiveHoverHorizontalInverted, u3[`--n-arrow-color`] = i2.arrowColorInverted, u3[`--n-arrow-color-hover`] = i2.arrowColorHoverInverted, u3[`--n-arrow-color-active`] = i2.arrowColorActiveInverted, u3[`--n-arrow-color-active-hover`] = i2.arrowColorActiveHoverInverted, u3[`--n-arrow-color-child-active`] = i2.arrowColorChildActiveInverted, u3[`--n-arrow-color-child-active-hover`] = i2.arrowColorChildActiveHoverInverted, u3[`--n-item-color-hover`] = i2.itemColorHoverInverted, u3[`--n-item-color-active`] = i2.itemColorActiveInverted, u3[`--n-item-color-active-hover`] = i2.itemColorActiveHoverInverted, u3[`--n-item-color-active-collapsed`] = i2.itemColorActiveCollapsedInverted) : (u3[`--n-group-text-color`] = i2.groupTextColor, u3[`--n-color`] = i2.color, u3[`--n-item-text-color`] = i2.itemTextColor, u3[`--n-item-text-color-hover`] = i2.itemTextColorHover, u3[`--n-item-text-color-active`] = i2.itemTextColorActive, u3[`--n-item-text-color-child-active`] = i2.itemTextColorChildActive, u3[`--n-item-text-color-child-active-hover`] = i2.itemTextColorChildActiveHover, u3[`--n-item-text-color-active-hover`] = i2.itemTextColorActiveHover, u3[`--n-item-icon-color`] = i2.itemIconColor, u3[`--n-item-icon-color-hover`] = i2.itemIconColorHover, u3[`--n-item-icon-color-active`] = i2.itemIconColorActive, u3[`--n-item-icon-color-active-hover`] = i2.itemIconColorActiveHover, u3[`--n-item-icon-color-child-active`] = i2.itemIconColorChildActive, u3[`--n-item-icon-color-child-active-hover`] = i2.itemIconColorChildActiveHover, u3[`--n-item-icon-color-collapsed`] = i2.itemIconColorCollapsed, u3[`--n-item-text-color-horizontal`] = i2.itemTextColorHorizontal, u3[`--n-item-text-color-hover-horizontal`] = i2.itemTextColorHoverHorizontal, u3[`--n-item-text-color-active-horizontal`] = i2.itemTextColorActiveHorizontal, u3[`--n-item-text-color-child-active-horizontal`] = i2.itemTextColorChildActiveHorizontal, u3[`--n-item-text-color-child-active-hover-horizontal`] = i2.itemTextColorChildActiveHoverHorizontal, u3[`--n-item-text-color-active-hover-horizontal`] = i2.itemTextColorActiveHoverHorizontal, u3[`--n-item-icon-color-horizontal`] = i2.itemIconColorHorizontal, u3[`--n-item-icon-color-hover-horizontal`] = i2.itemIconColorHoverHorizontal, u3[`--n-item-icon-color-active-horizontal`] = i2.itemIconColorActiveHorizontal, u3[`--n-item-icon-color-active-hover-horizontal`] = i2.itemIconColorActiveHoverHorizontal, u3[`--n-item-icon-color-child-active-horizontal`] = i2.itemIconColorChildActiveHorizontal, u3[`--n-item-icon-color-child-active-hover-horizontal`] = i2.itemIconColorChildActiveHoverHorizontal, u3[`--n-arrow-color`] = i2.arrowColor, u3[`--n-arrow-color-hover`] = i2.arrowColorHover, u3[`--n-arrow-color-active`] = i2.arrowColorActive, u3[`--n-arrow-color-active-hover`] = i2.arrowColorActiveHover, u3[`--n-arrow-color-child-active`] = i2.arrowColorChildActive, u3[`--n-arrow-color-child-active-hover`] = i2.arrowColorChildActiveHover, u3[`--n-item-color-hover`] = i2.itemColorHover, u3[`--n-item-color-active`] = i2.itemColorActive, u3[`--n-item-color-active-hover`] = i2.itemColorActiveHover, u3[`--n-item-color-active-collapsed`] = i2.itemColorActiveCollapsed), u3;
  }), E2 = n2 ? s(`menu`, R(() => e2.inverted ? `a` : `b`), w2, e2) : void 0, D2 = k(), O2 = I(null), ne2 = I(null), re2 = true, ie2 = () => {
    var e3;
    re2 ? re2 = false : (e3 = O2.value) == null || e3.sync({ showAllItemsBeforeCalculate: true });
  };
  function ae2() {
    return document.getElementById(D2);
  }
  let oe2 = I(-1);
  function se2(t3) {
    oe2.value = e2.options.length - t3;
  }
  function ce2(e3) {
    e3 || (oe2.value = -1);
  }
  let j2 = R(() => {
    let t3 = oe2.value;
    return { children: t3 === -1 ? [] : e2.options.slice(t3) };
  }), le2 = R(() => {
    let { childrenField: t3, disabledField: n3, keyField: r3 } = e2;
    return wt([j2.value], { getIgnored(e3) {
      return aa(e3);
    }, getChildren(e3) {
      return e3[t3];
    }, getDisabled(e3) {
      return e3[n3];
    }, getKey(e3) {
      return e3[r3] ?? e3.name;
    } });
  }), ue2 = R(() => wt([{}]).treeNodes[0]);
  function de2() {
    var _a2;
    if (oe2.value === -1) return M(ua, { root: true, level: 0, key: `__ellpisisGroupPlaceholder__`, internalKey: `__ellpisisGroupPlaceholder__`, title: `\xB7\xB7\xB7`, tmNode: ue2.value, domId: D2, isEllipsisPlaceholder: true });
    let e3 = le2.value.treeNodes[0], t3 = y2.value;
    return M(ua, { level: 0, root: true, key: `__ellpisisGroup__`, internalKey: `__ellpisisGroup__`, title: `\xB7\xB7\xB7`, virtualChildActive: !!((_a2 = e3.children) == null ? void 0 : _a2.some((e4) => t3.includes(e4.key))), tmNode: e3, domId: D2, rawNodes: e3.rawNode.children || [], tmNodes: e3.children || [], isEllipsisPlaceholder: true });
  }
  return { mergedClsPrefix: t2, controlledExpandedKeys: g2, uncontrolledExpanededKeys: m2, mergedExpandedKeys: _2, uncontrolledValue: d2, mergedValue: p2, activePath: y2, tmNodes: v2, mergedTheme: r2, mergedCollapsed: o2, cssVars: n2 ? void 0 : w2, themeClass: E2 == null ? void 0 : E2.themeClass, overflowRef: O2, counterRef: ne2, updateCounter: () => {
  }, onResize: ie2, onUpdateOverflow: ce2, onUpdateCount: se2, renderCounter: de2, getCounter: ae2, onRender: E2 == null ? void 0 : E2.onRender, showOption: C2, deriveResponsiveState: ie2 };
}, render() {
  let { mergedClsPrefix: e2, mode: t2, themeClass: n2, onRender: r2 } = this;
  r2 == null ? void 0 : r2();
  let i2 = () => this.tmNodes.map((e3) => sa(e3, this.$props)), a2 = t2 === `horizontal` && this.responsive, o2 = () => M(`div`, Ee(this.$attrs, { role: t2 === `horizontal` ? `menubar` : `menu`, class: [`${e2}-menu`, n2, `${e2}-menu--${t2}`, a2 && `${e2}-menu--responsive`, this.mergedCollapsed && `${e2}-menu--collapsed`], style: this.cssVars }), a2 ? M(yt, { ref: `overflowRef`, onUpdateOverflow: this.onUpdateOverflow, getCounter: this.getCounter, onUpdateCount: this.onUpdateCount, updateCounter: this.updateCounter, style: { width: `100%`, display: `flex`, overflow: `hidden` } }, { default: i2, counter: this.renderCounter }) : i2());
  return a2 ? M(O, { onResize: this.onResize }, { default: o2 }) : o2();
} });
const fa = { name: `dark`, common: q, Alert: ir, Anchor: ar, AutoComplete: sr, Avatar: cr, AvatarGroup: lr, BackTop: ur, Badge: dr, Breadcrumb: fr, Button: Q, ButtonGroup: ii, Calendar: pr, Card: mr, Carousel: hr, Cascader: _r, Checkbox: gr, Code: vr, Collapse: yr, CollapseTransition: br, ColorPicker: xr, DataTable: kr, DatePicker: Mr, Descriptions: Nr, Dialog: Pr, Divider: Zr, Drawer: Qr, Dropdown: Tr, DynamicInput: $r, DynamicTags: ti, Element: ni, Empty: Y, Ellipsis: Dr, Equation: { name: `Equation`, common: q, self: vn }, Flex: ri, Form: ai, GradientText: oi, Heatmap: Li, Icon: Ar, IconWrapper: Ri, Image: zi, Input: Z, InputNumber: si, InputOtp: ci, LegacyTransfer: Bi, Layout: li, List: di, LoadingBar: zr, Log: fi, Menu: mi, Mention: pi, Message: Br, Modal: Fr, Notification: Xr, PageHeader: hi, Pagination: wr, Popconfirm: gi, Popover: X, Popselect: Sr, Progress: _i, QrCode: { name: `QrCode`, common: q, self: (e2) => ({ borderRadius: e2.borderRadius }) }, Radio: Or, Rate: vi, Result: yi, Row: ui, Scrollbar: J, Select: Cr, Skeleton: { name: `Skeleton`, common: q, self(e2) {
  let { heightSmall: t2, heightMedium: n2, heightLarge: r2, borderRadius: i2 } = e2;
  return { color: `rgba(255, 255, 255, 0.12)`, colorEnd: `rgba(255, 255, 255, 0.18)`, borderRadius: i2, heightSmall: t2, heightMedium: n2, heightLarge: r2 };
} }, Slider: bi, Space: ei, Spin: xi, Statistic: Si, Steps: Ci, Switch: wi, Table: Ti, Tabs: Ei, Tag: nr, Thing: Di, TimePicker: jr, Timeline: Oi, Tooltip: Er, Transfer: ki, Tree: Ai, TreeSelect: ji, Typography: Mi, Upload: Ni, Watermark: Pi, Split: { name: `Split`, common: q }, FloatButton: Fi, FloatButtonGroup: { name: `FloatButtonGroup`, common: q, self(e2) {
  let { popoverColor: t2, dividerColor: n2, borderRadius: r2 } = e2;
  return { color: t2, buttonBorderColor: n2, borderRadiusSquare: r2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .12)` };
} }, Marquee: Vi }, pa = ve(`titleBar`, () => {
  let e2 = ct();
  return { text: R(() => {
    var _a2;
    return e2.currentSketchId && ((_a2 = e2.sketches.find((t2) => t2.id === e2.currentSketchId)) == null ? void 0 : _a2.meta.name) || null;
  }) };
});
var ma = { key: 0, class: `title-bar` }, ha = Me(z({ __name: `TitleBar`, setup(e2) {
  let t2 = pa(), n2 = R(() => t2.text || ``);
  return (e3, t3) => n2.value ? (B(), ye(`div`, ma, [j(L(Mn), null, { default: P(() => [j(L(st), { depth: 3 }, { default: P(() => [me(De(n2.value), 1)]), _: 1 })]), _: 1 })])) : Pe(``, true);
} }), [[`__scopeId`, `data-v-36e35087`]]), ga = { key: 0, class: `nav-bar` }, _a = { class: `software-info-menu` }, va = { style: { width: `100%` } }, ya = { style: { "max-width": `8em` } }, ba = { key: 1, class: `nav-bar` }, xa = { style: { "max-width": `50vw` } }, Sa = { class: `main-layout` }, Ca = Me(z({ __name: `AppLayout`, setup(e2) {
  Oe((e3) => ({ v7525ec9e: f2.value ? `column` : `row` }));
  let t2 = Fe(), n2 = jn(), r2 = new zn(), { t: i2, locale: a2 } = pt();
  function o2(e3) {
    return () => M(Pn, null, { default: () => M(e3) });
  }
  n2.settings.interfaceLanguage = n2.settings.interfaceLanguage ?? a2.value, a2.value = n2.settings.interfaceLanguage, ue(() => n2.settings.interfaceLanguage, (e3) => {
    e3 && (a2.value = e3);
  });
  let s2 = [{ label: () => M(Le, { to: `/tracker` }, { default: () => i2(`router.tracker`) }), key: `tracker`, icon: o2(ze) }, { label: () => M(Le, { to: `/sketch-centre` }, { default: () => i2(`router.sketchCentre`) }), key: `sketch-centre`, icon: o2(Ye) }], c2 = [{ label: () => M(Le, { to: `/settings` }, { default: () => i2(`router.settings`) }), key: `settings`, icon: o2(Be) }, { label: () => M(Le, { to: `/about` }, { default: () => i2(`router.about`) }), key: `about`, icon: o2(Re) }], l2 = R(() => t2.path.slice(1)), { width: u2, height: d2 } = Rn(), f2 = R(() => u2.value > d2.value);
  return (e3, t3) => (B(), ye(`div`, { class: Se([`app-layout`, f2.value ? `app-layout-horizontal` : `app-layout-vertical`]) }, [f2.value ? (B(), ye(`div`, ga, [j(L(da), { options: s2, "default-value": `tracker`, value: l2.value, mode: f2.value ? `vertical` : `horizontal` }, null, 8, [`value`, `mode`]), F(`div`, _a, [F(`div`, va, [j(L(da), { options: c2, mode: f2.value ? `vertical` : `horizontal`, value: l2.value }, null, 8, [`mode`, `value`])]), F(`div`, ya, [j(ha)])])])) : (B(), ye(`div`, ba, [j(L(ae), { trigger: L(r2).isMobile ? `click` : `hover`, style: { padding: `2px 0`, transform: `translateX(2px)` }, placement: `bottom-start` }, { trigger: P(() => [j(L(Mt), { style: { width: `48px` } }, { icon: P(() => [j(L(Pn), null, { default: P(() => [j(L(Vn))]), _: 1 })]), _: 1 })]), default: P(() => [j(L(da), { options: s2.concat(c2), "default-value": `tracker`, value: l2.value, "dropdown-placement": `top-start`, mode: `vertical` }, null, 8, [`options`, `value`])]), _: 1 }, 8, [`trigger`]), F(`div`, xa, [j(ha)])])), F(`div`, Sa, [j(L(Ie), null, { default: P(({ Component: e4 }) => [j(je, { name: `slide-fade`, mode: `out-in` }, { default: P(() => [(B(), Ne(Ce, null, [(B(), Ne(he(e4), { key: l2.value }))], 1024))]), _: 2 }, 1024)]), _: 1 })])], 2));
} }), [[`__scopeId`, `data-v-00577205`]]), wa = we(((e2, t2) => {
  t2.exports = { webm: `data:video/webm;base64,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`, mp4: `data:video/mp4;base64,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` };
})), Ta = _e(we(((e2, t2) => {
  var { webm: n2, mp4: r2 } = wa(), i2 = () => typeof navigator < `u` && parseFloat((`` + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ``])[1]).replace(`undefined`, `3_2`).replace(`_`, `.`).replace(`_`, ``)) < 10 && !window.MSStream, a2 = () => `wakeLock` in navigator;
  t2.exports = class {
    constructor() {
      if (this.enabled = false, a2()) {
        this._wakeLock = null;
        let e3 = () => {
          this._wakeLock !== null && document.visibilityState === `visible` && this.enable();
        };
        document.addEventListener(`visibilitychange`, e3), document.addEventListener(`fullscreenchange`, e3);
      } else i2() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement(`video`), this.noSleepVideo.setAttribute(`title`, `No Sleep`), this.noSleepVideo.setAttribute(`playsinline`, ``), this._addSourceToVideo(this.noSleepVideo, `webm`, n2), this._addSourceToVideo(this.noSleepVideo, `mp4`, r2), this.noSleepVideo.addEventListener(`loadedmetadata`, () => {
        this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute(`loop`, ``) : this.noSleepVideo.addEventListener(`timeupdate`, () => {
          this.noSleepVideo.currentTime > 0.5 && (this.noSleepVideo.currentTime = Math.random());
        });
      }));
    }
    _addSourceToVideo(e3, t3, n3) {
      var r3 = document.createElement(`source`);
      r3.src = n3, r3.type = `video/${t3}`, e3.appendChild(r3);
    }
    get isEnabled() {
      return this.enabled;
    }
    enable() {
      return a2() ? navigator.wakeLock.request(`screen`).then((e3) => {
        this._wakeLock = e3, this.enabled = true, console.log(`Wake Lock active.`), this._wakeLock.addEventListener(`release`, () => {
          console.log(`Wake Lock released.`);
        });
      }).catch((e3) => {
        throw this.enabled = false, console.error(`${e3.name}, ${e3.message}`), e3;
      }) : i2() ? (this.disable(), console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `), this.noSleepTimer = window.setInterval(() => {
        document.hidden || (window.location.href = window.location.href.split(`#`)[0], window.setTimeout(window.stop, 0));
      }, 15e3), this.enabled = true, Promise.resolve()) : this.noSleepVideo.play().then((e3) => (this.enabled = true, e3)).catch((e3) => {
        throw this.enabled = false, e3;
      });
    }
    disable() {
      a2() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : i2() ? this.noSleepTimer && (this.noSleepTimer = (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), null)) : this.noSleepVideo.pause(), this.enabled = false;
    }
  };
}))(), 1), Ea = z({ __name: `App`, setup(e2) {
  let t2 = jn(), n2 = window.GeolocationManager, r2 = Yn(), i2 = R(() => t2.settings.theme === `system` ? r2.value : t2.settings.theme), a2 = R(() => i2.value === `dark` ? fa : Sn), o2 = { common: { fontFamily: `Barlow, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` } };
  return A(`applicationDarkThemeEnabled`, i2), A(`platformInfo`, new zn()), A(`settings`, t2), A(`noSleep`, new Ta.default()), A(`geolocation`, n2), de(() => t2.init()), (e3, t3) => (B(), Ne(L(Zt), { theme: a2.value, abstract: true, "inline-theme-disabled": true, "theme-overrides": o2 }, { default: P(() => [j(L(Rr), null, { default: P(() => [j(L(Yr), null, { default: P(() => [j(L(qr), { placement: `bottom-right` }, { default: P(() => [j(Ca), j(L(Ii))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, [`theme`]));
} });
export {
  Ea as default
};
