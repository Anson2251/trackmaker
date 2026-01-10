import { D as e, E as t, L as n, M as r, N as i, P as a, R as o, a as s, at as c, b as l, c as u, ct as d, d as f, dt as p, f as m, g as h, gt as g, h as _, lt as v, m as y, o as b, ot as x, s as S, u as C, ut as w, v as T } from "./Card-BhZanKs1.js";
import { J as E, K as ee, Q as D, T as O, X as k, a as te, c as ne, f as re, g as ie, n as ae, nt as oe, r as se, s as ce, y as le } from "./light-12JaccNJ.js";
import { At as A, Dt as ue, J as de, Jt as j, Kt as fe, Lt as pe, Nt as me, Ot as he, Rt as ge, Tt as _e, X as ve, Zt as ye, a as be, ct as xe, en as M, ft as Se, gt as N, in as Ce, kt as P, lt as we, mt as F, nt as Te, on as Ee, ot as I, pt as L, qt as De, rn as Oe, rt as ke, st as R, t as Ae, tn as je, tt as Me, ut as Ne, vt as z, wt as Pe, xt as Fe, zt as B } from "./index-CkQURd6u.js";
import { a as Ie, n as Le, t as Re } from "./vue-router-DTH91L82.js";
import { a as ze, i as Be, o as Ve, r as He, t as Ue } from "./interface-BYu-giUL.js";
import { A as We, B as Ge, C as Ke, D as qe, E as Je, F as Ye, H as Xe, L as Ze, M as Qe, N as $e, O as et, S as tt, T as nt, V as rt, _ as it, a as at, b as ot, d as st, g as ct, j as lt, n as ut, p as dt, s as ft, t as pt, v as mt, x as ht, y as gt } from "./sketch-store-Bha6CkhO.js";
import { n as _t } from "./vue-i18n-BYbps15T.js";
import { A as vt, B as yt, C as bt, D as xt, E as St, F as Ct, G as wt, H as Tt, I as Et, K as Dt, L as Ot, M as kt, N as At, O as jt, P as Mt, R as Nt, S as Pt, T as Ft, U as It, V as Lt, W as Rt, _ as zt, a as Bt, b as Vt, c as Ht, d as Ut, f as Wt, g as Gt, i as Kt, j as qt, k as Jt, l as Yt, m as Xt, n as Zt, o as Qt, p as $t, q as en, r as tn, t as nn, u as rn, v as an, w as on, x as sn } from "./light-CFDlTceh.js";
import { t as cn } from "./src-C9-jK4YE.js";
import { C as ln, O as V, T as un, b as dn, c as fn, f as pn, g as mn, l as hn, o as gn, t as _n, v as vn, w as yn, x as bn, y as xn } from "./core-BTtElCLw.js";
import { r as Sn } from "./light-BtIaxdiU.js";
import { i as Cn, n as wn, r as Tn, t as En } from "./Warning-tkiNib90.js";
import { n as Dn } from "./light-SBaRhhSy.js";
import { t as On } from "./fade-in-height-expand.cssr-r0MAyqsD.js";
import { n as kn } from "./light-D0CHWkZT.js";
import { i as An, n as jn, t as Mn } from "./platform-IOVQPiPE.js";
import { t as Nn } from "./PerformantEllipsis-Bo2d63qA.js";
import { a as Pn, n as Fn, r as In } from "./light-DZth_yTO.js";
import { n as Ln } from "./light-CzAhMXMy.js";
import { n as Rn } from "./light-BROUb78j.js";
import { n as zn } from "./light-DdJfGkwG.js";
var Bn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Vn = F({ name: `Menu`, render: function(e2, t2) {
  return P(), Ne(`svg`, Bn, t2[0] || (t2[0] = [R(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [R(`path`, { d: `M4 8h16` }), R(`path`, { d: `M4 16h16` })], -1)]));
} }), Hn = 0, Un = typeof window < `u` && window.matchMedia !== void 0, H = j(null), U, W;
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
  return Un ? (Hn === 0 && Kn(), Jn && (Jn = k()) && (Pe(() => {
    Hn += 1;
  }), _e(() => {
    --Hn, Hn === 0 && qn();
  })), De(H)) : De(H);
}
var Xn = F({ name: `ChevronDownFilled`, render() {
  return N(`svg`, { viewBox: `0 0 16 16`, fill: `none`, xmlns: `http://www.w3.org/2000/svg` }, N(`path`, { d: `M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`, fill: `currentColor` }));
} }), G = { neutralBase: `#000`, neutralInvertBase: `#fff`, neutralTextBase: `#fff`, neutralPopover: `rgb(72, 72, 78)`, neutralCard: `rgb(24, 24, 28)`, neutralModal: `rgb(44, 44, 50)`, neutralBody: `rgb(16, 16, 20)`, alpha1: `0.9`, alpha2: `0.82`, alpha3: `0.52`, alpha4: `0.38`, alpha5: `0.28`, alphaClose: `0.52`, alphaDisabled: `0.38`, alphaDisabledInput: `0.06`, alphaPending: `0.09`, alphaTablePending: `0.06`, alphaTableStriped: `0.05`, alphaPressed: `0.05`, alphaAvatar: `0.18`, alphaRail: `0.2`, alphaProgressRail: `0.12`, alphaBorder: `0.24`, alphaDivider: `0.09`, alphaInput: `0.1`, alphaAction: `0.06`, alphaTab: `0.04`, alphaScrollbar: `0.2`, alphaScrollbarHover: `0.3`, alphaCode: `0.12`, alphaTag: `0.2`, primaryHover: `#7fe7c4`, primaryDefault: `#63e2b7`, primaryActive: `#5acea7`, primarySuppl: `rgb(42, 148, 125)`, infoHover: `#8acbec`, infoDefault: `#70c0e8`, infoActive: `#66afd3`, infoSuppl: `rgb(56, 137, 197)`, errorHover: `#e98b8b`, errorDefault: `#e88080`, errorActive: `#e57272`, errorSuppl: `rgb(208, 58, 82)`, warningHover: `#f5d599`, warningDefault: `#f2c97d`, warningActive: `#e6c260`, warningSuppl: `rgb(240, 138, 0)`, successHover: `#7fe7c4`, successDefault: `#63e2b7`, successActive: `#5acea7`, successSuppl: `rgb(42, 148, 125)` }, Zn = n(G.neutralBase), Qn = n(G.neutralInvertBase), $n = `rgba(${Qn.slice(0, 3).join(`, `)}, `;
function K(e2) {
  return `${$n + String(e2)})`;
}
function er(e2) {
  let t2 = Array.from(Qn);
  return t2[3] = Number(e2), a(Zn, t2);
}
var q = Object.assign(Object.assign({ name: `common` }, y), { baseColor: G.neutralBase, primaryColor: G.primaryDefault, primaryColorHover: G.primaryHover, primaryColorPressed: G.primaryActive, primaryColorSuppl: G.primarySuppl, infoColor: G.infoDefault, infoColorHover: G.infoHover, infoColorPressed: G.infoActive, infoColorSuppl: G.infoSuppl, successColor: G.successDefault, successColorHover: G.successHover, successColorPressed: G.successActive, successColorSuppl: G.successSuppl, warningColor: G.warningDefault, warningColorHover: G.warningHover, warningColorPressed: G.warningActive, warningColorSuppl: G.warningSuppl, errorColor: G.errorDefault, errorColorHover: G.errorHover, errorColorPressed: G.errorActive, errorColorSuppl: G.errorSuppl, textColorBase: G.neutralTextBase, textColor1: K(G.alpha1), textColor2: K(G.alpha2), textColor3: K(G.alpha3), textColorDisabled: K(G.alpha4), placeholderColor: K(G.alpha4), placeholderColorDisabled: K(G.alpha5), iconColor: K(G.alpha4), iconColorDisabled: K(G.alpha5), iconColorHover: K(Number(G.alpha4) * 1.25), iconColorPressed: K(Number(G.alpha4) * 0.8), opacity1: G.alpha1, opacity2: G.alpha2, opacity3: G.alpha3, opacity4: G.alpha4, opacity5: G.alpha5, dividerColor: K(G.alphaDivider), borderColor: K(G.alphaBorder), closeIconColorHover: K(Number(G.alphaClose)), closeIconColor: K(Number(G.alphaClose)), closeIconColorPressed: K(Number(G.alphaClose)), closeColorHover: `rgba(255, 255, 255, .12)`, closeColorPressed: `rgba(255, 255, 255, .08)`, clearColor: K(G.alpha4), clearColorHover: o(K(G.alpha4), { alpha: 1.25 }), clearColorPressed: o(K(G.alpha4), { alpha: 0.8 }), scrollbarColor: K(G.alphaScrollbar), scrollbarColorHover: K(G.alphaScrollbarHover), scrollbarWidth: `5px`, scrollbarHeight: `5px`, scrollbarBorderRadius: `5px`, progressRailColor: K(G.alphaProgressRail), railColor: K(G.alphaRail), popoverColor: G.neutralPopover, tableColor: G.neutralCard, cardColor: G.neutralCard, modalColor: G.neutralModal, bodyColor: G.neutralBody, tagColor: er(G.alphaTag), avatarColor: K(G.alphaAvatar), invertedColor: G.neutralBase, inputColor: K(G.alphaInput), codeColor: K(G.alphaCode), tabColor: K(G.alphaTab), actionColor: K(G.alphaAction), tableHeaderColor: K(G.alphaAction), hoverColor: K(G.alphaPending), tableColorHover: K(G.alphaTablePending), tableColorStriped: K(G.alphaTableStriped), pressedColor: K(G.alphaPressed), opacityDisabled: G.alphaDisabled, inputColorDisabled: K(G.alphaDisabledInput), buttonColor2: `rgba(255, 255, 255, .08)`, buttonColor2Hover: `rgba(255, 255, 255, .12)`, buttonColor2Pressed: `rgba(255, 255, 255, .08)`, boxShadow1: `0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)`, boxShadow2: `0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)`, boxShadow3: `0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)` }), J = { name: `Scrollbar`, common: q, self: ie }, Y = { name: `Empty`, common: q, self: dn }, tr = { name: `InternalSelectMenu`, common: q, peers: { Scrollbar: J, Empty: Y }, self: vn }, X = { name: `Popover`, common: q, peers: { Scrollbar: J }, self: re }, nr = { name: `Tag`, common: q, self(e2) {
  let { textColor2: t2, primaryColorHover: n2, primaryColorPressed: r2, primaryColor: a2, infoColor: s2, successColor: c2, warningColor: l2, errorColor: u2, baseColor: d2, borderColor: f2, tagColor: p2, opacityDisabled: m2, closeIconColor: h2, closeIconColorHover: g2, closeIconColorPressed: _2, closeColorHover: v2, closeColorPressed: y2, borderRadiusSmall: b2, fontSizeMini: x2, fontSizeTiny: S2, fontSizeSmall: C2, fontSizeMedium: w2, heightMini: T2, heightTiny: E2, heightSmall: ee2, heightMedium: D2, buttonColor2Hover: O2, buttonColor2Pressed: k2, fontWeightStrong: te2 } = e2;
  return Object.assign(Object.assign({}, ce), { closeBorderRadius: b2, heightTiny: T2, heightSmall: E2, heightMedium: ee2, heightLarge: D2, borderRadius: b2, opacityDisabled: m2, fontSizeTiny: x2, fontSizeSmall: S2, fontSizeMedium: C2, fontSizeLarge: w2, fontWeightStrong: te2, textColorCheckable: t2, textColorHoverCheckable: t2, textColorPressedCheckable: t2, textColorChecked: d2, colorCheckable: `#0000`, colorHoverCheckable: O2, colorPressedCheckable: k2, colorChecked: a2, colorCheckedHover: n2, colorCheckedPressed: r2, border: `1px solid ${f2}`, textColor: t2, color: p2, colorBordered: `#0000`, closeIconColor: h2, closeIconColorHover: g2, closeIconColorPressed: _2, closeColorHover: v2, closeColorPressed: y2, borderPrimary: `1px solid ${i(a2, { alpha: 0.3 })}`, textColorPrimary: a2, colorPrimary: i(a2, { alpha: 0.16 }), colorBorderedPrimary: `#0000`, closeIconColorPrimary: o(a2, { lightness: 0.7 }), closeIconColorHoverPrimary: o(a2, { lightness: 0.7 }), closeIconColorPressedPrimary: o(a2, { lightness: 0.7 }), closeColorHoverPrimary: i(a2, { alpha: 0.16 }), closeColorPressedPrimary: i(a2, { alpha: 0.12 }), borderInfo: `1px solid ${i(s2, { alpha: 0.3 })}`, textColorInfo: s2, colorInfo: i(s2, { alpha: 0.16 }), colorBorderedInfo: `#0000`, closeIconColorInfo: o(s2, { alpha: 0.7 }), closeIconColorHoverInfo: o(s2, { alpha: 0.7 }), closeIconColorPressedInfo: o(s2, { alpha: 0.7 }), closeColorHoverInfo: i(s2, { alpha: 0.16 }), closeColorPressedInfo: i(s2, { alpha: 0.12 }), borderSuccess: `1px solid ${i(c2, { alpha: 0.3 })}`, textColorSuccess: c2, colorSuccess: i(c2, { alpha: 0.16 }), colorBorderedSuccess: `#0000`, closeIconColorSuccess: o(c2, { alpha: 0.7 }), closeIconColorHoverSuccess: o(c2, { alpha: 0.7 }), closeIconColorPressedSuccess: o(c2, { alpha: 0.7 }), closeColorHoverSuccess: i(c2, { alpha: 0.16 }), closeColorPressedSuccess: i(c2, { alpha: 0.12 }), borderWarning: `1px solid ${i(l2, { alpha: 0.3 })}`, textColorWarning: l2, colorWarning: i(l2, { alpha: 0.16 }), colorBorderedWarning: `#0000`, closeIconColorWarning: o(l2, { alpha: 0.7 }), closeIconColorHoverWarning: o(l2, { alpha: 0.7 }), closeIconColorPressedWarning: o(l2, { alpha: 0.7 }), closeColorHoverWarning: i(l2, { alpha: 0.16 }), closeColorPressedWarning: i(l2, { alpha: 0.11 }), borderError: `1px solid ${i(u2, { alpha: 0.3 })}`, textColorError: u2, colorError: i(u2, { alpha: 0.16 }), colorBorderedError: `#0000`, closeIconColorError: o(u2, { alpha: 0.7 }), closeIconColorHoverError: o(u2, { alpha: 0.7 }), closeIconColorPressedError: o(u2, { alpha: 0.7 }), closeColorHoverError: i(u2, { alpha: 0.16 }), closeColorPressedError: i(u2, { alpha: 0.12 }) });
} }, rr = { name: `InternalSelection`, common: q, peers: { Popover: X }, self(e2) {
  let { borderRadius: t2, textColor2: n2, textColorDisabled: r2, inputColor: a2, inputColorDisabled: o2, primaryColor: s2, primaryColorHover: c2, warningColor: l2, warningColorHover: u2, errorColor: d2, errorColorHover: f2, iconColor: p2, iconColorDisabled: m2, clearColor: h2, clearColorHover: g2, clearColorPressed: _2, placeholderColor: v2, placeholderColorDisabled: y2, fontSizeTiny: b2, fontSizeSmall: x2, fontSizeMedium: S2, fontSizeLarge: C2, heightTiny: w2, heightSmall: T2, heightMedium: E2, heightLarge: ee2, fontWeight: D2 } = e2;
  return Object.assign(Object.assign({}, mn), { fontWeight: D2, fontSizeTiny: b2, fontSizeSmall: x2, fontSizeMedium: S2, fontSizeLarge: C2, heightTiny: w2, heightSmall: T2, heightMedium: E2, heightLarge: ee2, borderRadius: t2, textColor: n2, textColorDisabled: r2, placeholderColor: v2, placeholderColorDisabled: y2, color: a2, colorDisabled: o2, colorActive: i(s2, { alpha: 0.1 }), border: `1px solid #0000`, borderHover: `1px solid ${c2}`, borderActive: `1px solid ${s2}`, borderFocus: `1px solid ${c2}`, boxShadowHover: `none`, boxShadowActive: `0 0 8px 0 ${i(s2, { alpha: 0.4 })}`, boxShadowFocus: `0 0 8px 0 ${i(s2, { alpha: 0.4 })}`, caretColor: s2, arrowColor: p2, arrowColorDisabled: m2, loadingColor: s2, borderWarning: `1px solid ${l2}`, borderHoverWarning: `1px solid ${u2}`, borderActiveWarning: `1px solid ${l2}`, borderFocusWarning: `1px solid ${u2}`, boxShadowHoverWarning: `none`, boxShadowActiveWarning: `0 0 8px 0 ${i(l2, { alpha: 0.4 })}`, boxShadowFocusWarning: `0 0 8px 0 ${i(l2, { alpha: 0.4 })}`, colorActiveWarning: i(l2, { alpha: 0.1 }), caretColorWarning: l2, borderError: `1px solid ${d2}`, borderHoverError: `1px solid ${f2}`, borderActiveError: `1px solid ${d2}`, borderFocusError: `1px solid ${f2}`, boxShadowHoverError: `none`, boxShadowActiveError: `0 0 8px 0 ${i(d2, { alpha: 0.4 })}`, boxShadowFocusError: `0 0 8px 0 ${i(d2, { alpha: 0.4 })}`, colorActiveError: i(d2, { alpha: 0.1 }), caretColorError: d2, clearColor: h2, clearColorHover: g2, clearColorPressed: _2 });
} }, ir = { name: `Alert`, common: q, self(e2) {
  let { lineHeight: t2, borderRadius: n2, fontWeightStrong: r2, dividerColor: a2, inputColor: o2, textColor1: s2, textColor2: c2, closeColorHover: l2, closeColorPressed: u2, closeIconColor: d2, closeIconColorHover: f2, closeIconColorPressed: p2, infoColorSuppl: m2, successColorSuppl: h2, warningColorSuppl: g2, errorColorSuppl: _2, fontSize: v2 } = e2;
  return Object.assign(Object.assign({}, Dn), { fontSize: v2, lineHeight: t2, titleFontWeight: r2, borderRadius: n2, border: `1px solid ${a2}`, color: o2, titleTextColor: s2, iconColor: c2, contentTextColor: c2, closeBorderRadius: n2, closeColorHover: l2, closeColorPressed: u2, closeIconColor: d2, closeIconColorHover: f2, closeIconColorPressed: p2, borderInfo: `1px solid ${i(m2, { alpha: 0.35 })}`, colorInfo: i(m2, { alpha: 0.25 }), titleTextColorInfo: s2, iconColorInfo: m2, contentTextColorInfo: c2, closeColorHoverInfo: l2, closeColorPressedInfo: u2, closeIconColorInfo: d2, closeIconColorHoverInfo: f2, closeIconColorPressedInfo: p2, borderSuccess: `1px solid ${i(h2, { alpha: 0.35 })}`, colorSuccess: i(h2, { alpha: 0.25 }), titleTextColorSuccess: s2, iconColorSuccess: h2, contentTextColorSuccess: c2, closeColorHoverSuccess: l2, closeColorPressedSuccess: u2, closeIconColorSuccess: d2, closeIconColorHoverSuccess: f2, closeIconColorPressedSuccess: p2, borderWarning: `1px solid ${i(g2, { alpha: 0.35 })}`, colorWarning: i(g2, { alpha: 0.25 }), titleTextColorWarning: s2, iconColorWarning: g2, contentTextColorWarning: c2, closeColorHoverWarning: l2, closeColorPressedWarning: u2, closeIconColorWarning: d2, closeIconColorHoverWarning: f2, closeIconColorPressedWarning: p2, borderError: `1px solid ${i(_2, { alpha: 0.35 })}`, colorError: i(_2, { alpha: 0.25 }), titleTextColorError: s2, iconColorError: _2, contentTextColorError: c2, closeColorHoverError: l2, closeColorPressedError: u2, closeIconColorError: d2, closeIconColorHoverError: f2, closeIconColorPressedError: p2 });
} }, ar = { name: `Anchor`, common: q, self: kn };
function or(e2) {
  let { textColor2: t2, textColor3: n2, textColorDisabled: r2, primaryColor: a2, primaryColorHover: o2, inputColor: s2, inputColorDisabled: c2, warningColor: l2, warningColorHover: u2, errorColor: d2, errorColorHover: f2, borderRadius: p2, lineHeight: m2, fontSizeTiny: h2, fontSizeSmall: g2, fontSizeMedium: _2, fontSizeLarge: v2, heightTiny: y2, heightSmall: b2, heightMedium: x2, heightLarge: S2, clearColor: C2, clearColorHover: w2, clearColorPressed: T2, placeholderColor: E2, placeholderColorDisabled: ee2, iconColor: D2, iconColorDisabled: O2, iconColorHover: k2, iconColorPressed: te2, fontWeight: ne2 } = e2;
  return Object.assign(Object.assign({}, Ze), { fontWeight: ne2, countTextColorDisabled: r2, countTextColor: n2, heightTiny: y2, heightSmall: b2, heightMedium: x2, heightLarge: S2, fontSizeTiny: h2, fontSizeSmall: g2, fontSizeMedium: _2, fontSizeLarge: v2, lineHeight: m2, lineHeightTextarea: m2, borderRadius: p2, iconSize: `16px`, groupLabelColor: s2, textColor: t2, textColorDisabled: r2, textDecorationColor: t2, groupLabelTextColor: t2, caretColor: a2, placeholderColor: E2, placeholderColorDisabled: ee2, color: s2, colorDisabled: c2, colorFocus: i(a2, { alpha: 0.1 }), groupLabelBorder: `1px solid #0000`, border: `1px solid #0000`, borderHover: `1px solid ${o2}`, borderDisabled: `1px solid #0000`, borderFocus: `1px solid ${o2}`, boxShadowFocus: `0 0 8px 0 ${i(a2, { alpha: 0.3 })}`, loadingColor: a2, loadingColorWarning: l2, borderWarning: `1px solid ${l2}`, borderHoverWarning: `1px solid ${u2}`, colorFocusWarning: i(l2, { alpha: 0.1 }), borderFocusWarning: `1px solid ${u2}`, boxShadowFocusWarning: `0 0 8px 0 ${i(l2, { alpha: 0.3 })}`, caretColorWarning: l2, loadingColorError: d2, borderError: `1px solid ${d2}`, borderHoverError: `1px solid ${f2}`, colorFocusError: i(d2, { alpha: 0.1 }), borderFocusError: `1px solid ${f2}`, boxShadowFocusError: `0 0 8px 0 ${i(d2, { alpha: 0.3 })}`, caretColorError: d2, clearColor: C2, clearColorHover: w2, clearColorPressed: T2, iconColor: D2, iconColorDisabled: O2, iconColorHover: k2, iconColorPressed: te2, suffixTextColor: t2 });
}
var Z = f({ name: `Input`, common: q, peers: { Scrollbar: J }, self: or }), sr = { name: `AutoComplete`, common: q, peers: { InternalSelectMenu: tr, Input: Z }, self: en }, cr = { name: `Avatar`, common: q, self: Dt }, lr = { name: `AvatarGroup`, common: q, peers: { Avatar: cr }, self: wt }, ur = { name: `BackTop`, common: q, self(e2) {
  let { popoverColor: t2, textColor2: n2, primaryColorHover: r2, primaryColorPressed: i2 } = e2;
  return Object.assign(Object.assign({}, Rt), { color: t2, textColor: n2, iconColor: n2, iconColorHover: r2, iconColorPressed: i2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .12)`, boxShadowHover: `0 2px 12px 0px rgba(0, 0, 0, .18)`, boxShadowPressed: `0 2px 12px 0px rgba(0, 0, 0, .18)` });
} }, dr = { name: `Badge`, common: q, self(e2) {
  let { errorColorSuppl: t2, infoColorSuppl: n2, successColorSuppl: r2, warningColorSuppl: i2, fontFamily: a2 } = e2;
  return { color: t2, colorInfo: n2, colorSuccess: r2, colorError: t2, colorWarning: i2, fontSize: `12px`, fontFamily: a2 };
} }, fr = { name: `Breadcrumb`, common: q, self: It }, Q = { name: `Button`, common: q, self(e2) {
  let t2 = pn(e2);
  return t2.waveOpacity = `0.8`, t2.colorOpacitySecondary = `0.16`, t2.colorOpacitySecondaryHover = `0.2`, t2.colorOpacitySecondaryPressed = `0.12`, t2;
} }, pr = { name: `Calendar`, common: q, peers: { Button: Q }, self: Tt }, mr = { name: `Card`, common: q, self(e2) {
  let t2 = s(e2), { cardColor: n2, modalColor: r2, popoverColor: i2 } = e2;
  return t2.colorEmbedded = n2, t2.colorEmbeddedModal = r2, t2.colorEmbeddedPopover = i2, t2;
} }, hr = { name: `Carousel`, common: q, self: Lt }, gr = { name: `Checkbox`, common: q, self(e2) {
  let { cardColor: t2 } = e2, n2 = yt(e2);
  return n2.color = `#0000`, n2.checkMarkColor = t2, n2;
} }, _r = { name: `Cascader`, common: q, peers: { InternalSelectMenu: tr, InternalSelection: rr, Scrollbar: J, Checkbox: gr, Empty: xn }, self: Nt }, vr = { name: `Code`, common: q, self(e2) {
  let { textColor2: t2, fontSize: n2, fontWeightStrong: r2, textColor3: i2 } = e2;
  return { textColor: t2, fontSize: n2, fontWeightStrong: r2, "mono-3": `#5c6370`, "hue-1": `#56b6c2`, "hue-2": `#61aeee`, "hue-3": `#c678dd`, "hue-4": `#98c379`, "hue-5": `#e06c75`, "hue-5-2": `#be5046`, "hue-6": `#d19a66`, "hue-6-2": `#e6c07b`, lineNumberTextColor: i2 };
} }, yr = { name: `Collapse`, common: q, self: Sn }, br = { name: `CollapseTransition`, common: q, self: Ot }, xr = { name: `ColorPicker`, common: q, peers: { Input: Z, Button: Q }, self: Ye }, Sr = { name: `Popselect`, common: q, peers: { Popover: X, InternalSelectMenu: tr } }, Cr = { name: `Select`, common: q, peers: { InternalSelection: rr, InternalSelectMenu: tr }, self: fn }, wr = { name: `Pagination`, common: q, peers: { Select: Cr, Input: Z, Popselect: Sr }, self(e2) {
  let { primaryColor: t2, opacity3: n2 } = e2, r2 = i(t2, { alpha: Number(n2) }), a2 = Ct(e2);
  return a2.itemBorderActive = `1px solid ${r2}`, a2.itemBorderDisabled = `1px solid #0000`, a2;
} }, Tr = { name: `Dropdown`, common: q, peers: { Popover: X }, self(e2) {
  let { primaryColorSuppl: t2, primaryColor: n2, popoverColor: r2 } = e2, a2 = Mt(e2);
  return a2.colorInverted = r2, a2.optionColorActive = i(n2, { alpha: 0.15 }), a2.optionColorActiveInverted = t2, a2.optionColorHoverInverted = t2, a2;
} }, Er = { name: `Tooltip`, common: q, peers: { Popover: X }, self(e2) {
  let { borderRadius: t2, boxShadow2: n2, popoverColor: r2, textColor2: i2 } = e2;
  return Object.assign(Object.assign({}, te), { borderRadius: t2, boxShadow: n2, color: r2, textColor: i2 });
} }, Dr = { name: `Ellipsis`, common: q, peers: { Tooltip: Er } }, Or = { name: `Radio`, common: q, self(e2) {
  let { borderColor: t2, primaryColor: n2, baseColor: r2, textColorDisabled: a2, inputColorDisabled: o2, textColor2: s2, opacityDisabled: c2, borderRadius: l2, fontSizeSmall: u2, fontSizeMedium: d2, fontSizeLarge: f2, heightSmall: p2, heightMedium: m2, heightLarge: h2, lineHeight: g2 } = e2;
  return Object.assign(Object.assign({}, An), { labelLineHeight: g2, buttonHeightSmall: p2, buttonHeightMedium: m2, buttonHeightLarge: h2, fontSizeSmall: u2, fontSizeMedium: d2, fontSizeLarge: f2, boxShadow: `inset 0 0 0 1px ${t2}`, boxShadowActive: `inset 0 0 0 1px ${n2}`, boxShadowFocus: `inset 0 0 0 1px ${n2}, 0 0 0 2px ${i(n2, { alpha: 0.3 })}`, boxShadowHover: `inset 0 0 0 1px ${n2}`, boxShadowDisabled: `inset 0 0 0 1px ${t2}`, color: `#0000`, colorDisabled: o2, colorActive: `#0000`, textColor: s2, textColorDisabled: a2, dotColorActive: n2, dotColorDisabled: t2, buttonBorderColor: t2, buttonBorderColorActive: n2, buttonBorderColorHover: n2, buttonColor: `#0000`, buttonColorActive: n2, buttonTextColor: s2, buttonTextColorActive: r2, buttonTextColorHover: n2, opacityDisabled: c2, buttonBoxShadowFocus: `inset 0 0 0 1px ${n2}, 0 0 0 2px ${i(n2, { alpha: 0.3 })}`, buttonBoxShadowHover: `inset 0 0 0 1px ${n2}`, buttonBoxShadow: `inset 0 0 0 1px #0000`, buttonBorderRadius: l2 });
} }, kr = { name: `DataTable`, common: q, peers: { Button: Q, Checkbox: gr, Radio: Or, Pagination: wr, Scrollbar: J, Empty: Y, Popover: X, Ellipsis: Dr, Dropdown: Tr }, self(e2) {
  let t2 = At(e2);
  return t2.boxShadowAfter = `inset 12px 0 8px -12px rgba(0, 0, 0, .36)`, t2.boxShadowBefore = `inset -12px 0 8px -12px rgba(0, 0, 0, .36)`, t2;
} }, Ar = { name: `Icon`, common: q, self: Pn }, jr = { name: `TimePicker`, common: q, peers: { Scrollbar: J, Button: Q, Input: Z }, self: qt }, Mr = { name: `DatePicker`, common: q, peers: { Input: Z, Button: Q, TimePicker: jr, Scrollbar: J }, self(e2) {
  let { popoverColor: t2, hoverColor: n2, primaryColor: r2 } = e2, o2 = vt(e2);
  return o2.itemColorDisabled = a(t2, n2), o2.itemColorIncluded = i(r2, { alpha: 0.15 }), o2.itemColorHover = a(t2, n2), o2;
} }, Nr = { name: `Descriptions`, common: q, self: Jt }, Pr = { name: `Dialog`, common: q, peers: { Button: Q }, self: We }, Fr = { name: `Modal`, common: q, peers: { Scrollbar: J, Dialog: Pr, Card: mr }, self: nt };
const Ir = Object.assign(Object.assign({}, et), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, internalStyle: [String, Object], maskClosable: { type: Boolean, default: true }, zIndex: Number, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function, draggable: [Boolean, Object] }), Lr = F({ name: `DialogEnvironment`, props: Object.assign(Object.assign({}, Ir), { internalKey: { type: String, required: true }, to: [String, Object], onInternalAfterLeave: { type: Function, required: true } }), setup(e2) {
  let t2 = j(true);
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
  return N(gt, { show: u2, onUpdateShow: t2, onMaskClick: a2, onEsc: o2, to: s2, zIndex: c2, maskClosable: l2, onAfterEnter: this.onAfterEnter, onAfterLeave: i2, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, draggable: this.draggable, internalAppear: true, internalDialog: true }, { default: ({ draggableClass: t3 }) => N(Je, Object.assign({}, le(this.$props, qe), { titleClass: je([this.titleClass, t3]), style: this.internalStyle, onClose: r2, onNegativeClick: n2, onPositiveClick: e2 })) });
} }), Rr = F({ name: `DialogProvider`, props: { injectionKey: String, to: [String, Object] }, setup() {
  let e2 = j([]), t2 = {};
  function n2(n3 = {}) {
    let r3 = oe(), i3 = fe(Object.assign(Object.assign({}, n3), { key: r3, destroy: () => {
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
  return A(lt, o2), A(Qe, { clickedRef: Ge(64), clickedPositionRef: rt() }), A($e, e2), Object.assign(Object.assign({}, o2), { dialogList: e2, dialogInstRefs: t2, handleAfterLeave: i2 });
}, render() {
  var _a2;
  var e2;
  return N(Me, null, [this.dialogList.map((e3) => N(Lr, He(e3, [`destroy`, `style`], { internalStyle: e3.style, to: this.to, ref: (t2) => {
    t2 === null ? delete this.dialogInstRefs[`n-dialog-${e3.key}`] : this.dialogInstRefs[`n-dialog-${e3.key}`] = t2;
  }, internalKey: e3.key, onInternalAfterLeave: this.handleAfterLeave }))), (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2)]);
} });
var zr = { name: `LoadingBar`, common: q, self(e2) {
  let { primaryColor: t2 } = e2;
  return { colorError: `red`, colorLoading: t2, height: `2px` };
} }, Br = { name: `Message`, common: q, self: jt };
const Vr = { icon: Function, type: { type: String, default: `info` }, content: [String, Number, Function], showIcon: { type: Boolean, default: true }, closable: Boolean, keepAliveOnHover: Boolean, onClose: Function, onMouseenter: Function, onMouseleave: Function };
var Hr = c([x(`message-wrapper`, `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [On({ overflow: `visible`, originalTransition: `transform .3s var(--n-bezier)`, enterToProps: { transform: `scale(1)` }, leaveToProps: { transform: `scale(0.85)` } })]), x(`message`, `
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
 `, [d(`content`, `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), d(`icon`, `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [[`default`, `info`, `success`, `warning`, `error`, `loading`].map((e2) => v(`${e2}-type`, [c(`> *`, `
 color: var(--n-icon-color-${e2});
 transition: color .3s var(--n-bezier);
 `)])), c(`> *`, `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [yn()])]), d(`close`, `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [c(`&:hover`, `
 color: var(--n-close-icon-color-hover);
 `), c(`&:active`, `
 color: var(--n-close-icon-color-pressed);
 `)])]), x(`message-container`, `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [v(`top`, `
 top: 12px;
 left: 0;
 right: 0;
 `), v(`top-left`, `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), v(`top-right`, `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), v(`bottom`, `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), v(`bottom-left`, `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), v(`bottom-right`, `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]), Ur = { info: () => N(Tn, null), success: () => N(wn, null), warning: () => N(En, null), error: () => N(Cn, null), default: () => null }, Wr = F({ name: `Message`, props: Object.assign(Object.assign({}, Vr), { render: Function }), setup(e2) {
  let { inlineThemeDisabled: t2, mergedRtlRef: n2 } = T(e2), { props: r2, mergedClsPrefixRef: i2 } = z(mt), a2 = _(`Message`, n2, i2), o2 = m(`Message`, `-message`, Hr, xt, r2, i2), s2 = I(() => {
    let { type: t3 } = e2, { common: { cubicBezierEaseInOut: n3 }, self: { padding: r3, margin: i3, maxWidth: a3, iconMargin: s3, closeMargin: c3, closeSize: l2, iconSize: u2, fontSize: d2, lineHeight: f2, borderRadius: m2, border: h2, iconColorInfo: g2, iconColorSuccess: _2, iconColorWarning: v2, iconColorError: y2, iconColorLoading: b2, closeIconSize: x2, closeBorderRadius: S2, [p(`textColor`, t3)]: C2, [p(`boxShadow`, t3)]: w2, [p(`color`, t3)]: T2, [p(`closeColorHover`, t3)]: E2, [p(`closeColorPressed`, t3)]: ee2, [p(`closeIconColor`, t3)]: D2, [p(`closeIconColorPressed`, t3)]: O2, [p(`closeIconColorHover`, t3)]: k2 } } = o2.value;
    return { "--n-bezier": n3, "--n-margin": i3, "--n-padding": r3, "--n-max-width": a3, "--n-font-size": d2, "--n-icon-margin": s3, "--n-icon-size": u2, "--n-close-icon-size": x2, "--n-close-border-radius": S2, "--n-close-size": l2, "--n-close-margin": c3, "--n-text-color": C2, "--n-color": T2, "--n-box-shadow": w2, "--n-icon-color-info": g2, "--n-icon-color-success": _2, "--n-icon-color-warning": v2, "--n-icon-color-error": y2, "--n-icon-color-loading": b2, "--n-close-color-hover": E2, "--n-close-color-pressed": ee2, "--n-close-icon-color": D2, "--n-close-icon-color-pressed": O2, "--n-close-icon-color-hover": k2, "--n-line-height": f2, "--n-border-radius": m2, "--n-border": h2 };
  }), c2 = t2 ? h(`message`, I(() => e2.type[0]), s2, {}) : void 0;
  return { mergedClsPrefix: i2, rtlEnabled: a2, messageProviderProps: r2, handleClose() {
    var t3;
    (t3 = e2.onClose) == null || t3.call(e2);
  }, cssVars: t2 ? void 0 : s2, themeClass: c2 == null ? void 0 : c2.themeClass, onRender: c2 == null ? void 0 : c2.onRender, placement: r2.placement };
}, render() {
  let { render: e2, type: t2, closable: n2, content: r2, mergedClsPrefix: i2, cssVars: a2, themeClass: o2, onRender: s2, icon: c2, handleClose: l2, showIcon: d2 } = this;
  s2 == null ? void 0 : s2();
  let f2;
  return N(`div`, { class: [`${i2}-message-wrapper`, o2], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [{ alignItems: this.placement.startsWith(`top`) ? `flex-start` : `flex-end` }, a2] }, e2 ? e2(this.$props) : N(`div`, { class: [`${i2}-message ${i2}-message--${t2}-type`, this.rtlEnabled && `${i2}-message--rtl`] }, (f2 = Gr(c2, t2, i2)) && d2 ? N(`div`, { class: `${i2}-message__icon ${i2}-message__icon--${t2}-type` }, N(un, null, { default: () => f2 })) : null, N(`div`, { class: `${i2}-message__content` }, V(r2)), n2 ? N(u, { clsPrefix: i2, class: `${i2}-message__close`, onClick: l2, absolute: true }) : null));
} });
function Gr(e2, t2, n2) {
  if (typeof e2 == `function`) return e2();
  {
    let e3 = t2 === `loading` ? N(ln, { clsPrefix: n2, strokeWidth: 24, scale: 0.85 }) : Ur[t2]();
    return e3 ? N(C, { clsPrefix: n2, key: t2 }, { default: () => e3 }) : null;
  }
}
var Kr = F({ name: `MessageEnvironment`, props: Object.assign(Object.assign({}, Vr), { duration: { type: Number, default: 3e3 }, onAfterLeave: Function, onLeave: Function, internalKey: { type: String, required: true }, onInternalAfterLeave: Function, onHide: Function, onAfterHide: Function }), setup(e2) {
  let t2 = null, n2 = j(true);
  ue(() => {
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
  return N(S, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, { default: () => [this.show ? N(Wr, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null] });
} }), qr = F({ name: `MessageProvider`, props: Object.assign(Object.assign({}, m.props), { to: [String, Object], duration: { type: Number, default: 3e3 }, keepAliveOnHover: Boolean, max: Number, placement: { type: String, default: `top` }, closable: Boolean, containerClass: String, containerStyle: [String, Object] }), setup(e2) {
  let { mergedClsPrefixRef: t2 } = T(e2), n2 = j([]), r2 = j({}), i2 = { create(e3, t3) {
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
  A(mt, { props: e2, mergedClsPrefixRef: t2 }), A(it, i2);
  function a2(t3, i3) {
    let a3 = oe(), o3 = fe(Object.assign(Object.assign({}, i3), { content: t3, key: a3, destroy: () => {
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
  return N(Me, null, (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2), this.messageList.length ? N(ke, { to: this.to ?? `body` }, N(`div`, { class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass], key: `message-container`, style: this.containerStyle }, this.messageList.map((e3) => N(Kr, Object.assign({ ref: (t2) => {
    t2 && (this.messageRefs[e3.key] = t2);
  }, internalKey: e3.key, onInternalAfterLeave: this.handleAfterLeave }, He(e3, [`destroy`], void 0), { duration: e3.duration === void 0 ? this.duration : e3.duration, keepAliveOnHover: e3.keepAliveOnHover === void 0 ? this.keepAliveOnHover : e3.keepAliveOnHover, closable: e3.closable === void 0 ? this.closable : e3.closable }))))) : null);
} });
const Jr = F({ name: `ModalEnvironment`, props: Object.assign(Object.assign({}, ot), { internalKey: { type: String, required: true }, onInternalAfterLeave: { type: Function, required: true } }), setup(e2) {
  let t2 = j(true);
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
  return N(gt, Object.assign({}, this.$props, { show: i2, onUpdateShow: e2, onMaskClick: n2, onEsc: r2, onAfterLeave: t2, internalAppear: true, internalModal: true }), this.$slots);
} }), Yr = F({ name: `ModalProvider`, props: { to: [String, Object] }, setup() {
  let e2 = j([]), t2 = {};
  function n2(n3 = {}) {
    let r3 = oe(), i3 = fe(Object.assign(Object.assign({}, n3), { key: r3, destroy: () => {
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
  return A(ht, a2), A(tt, { clickedRef: Ge(64), clickedPositionRef: rt() }), A(Ke, e2), Object.assign(Object.assign({}, a2), { modalList: e2, modalInstRefs: t2, handleAfterLeave: r2 });
}, render() {
  var _a2;
  var e2;
  return N(Me, null, [this.modalList.map((e3) => N(Jr, He(e3, [`destroy`, `render`], { to: e3.to ?? this.to, ref: (t2) => {
    t2 === null ? delete this.modalInstRefs[`n-modal-${e3.key}`] : this.modalInstRefs[`n-modal-${e3.key}`] = t2;
  }, internalKey: e3.key, onInternalAfterLeave: this.handleAfterLeave }), { default: e3.render })), (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2)]);
} });
var Xr = { name: `Notification`, common: q, peers: { Scrollbar: J }, self: St }, Zr = { name: `Divider`, common: q, self: Ln }, Qr = { name: `Drawer`, common: q, peers: { Scrollbar: J }, self: ct }, $r = { name: `DynamicInput`, common: q, peers: { Input: Z, Button: Q }, self() {
  return Ft;
} }, ei = { name: `Space`, self() {
  return Rn;
} }, ti = { name: `DynamicTags`, common: q, peers: { Input: Z, Button: Q, Tag: nr, Space: ei }, self() {
  return { inputWidth: `64px` };
} }, ni = { name: `Element`, common: q }, ri = { name: `Flex`, self() {
  return dt;
} }, ii = { name: `ButtonGroup`, common: q }, ai = { name: `Form`, common: q, self: st }, oi = { name: `GradientText`, common: q, self(e2) {
  let { primaryColor: t2, successColor: n2, warningColor: r2, errorColor: i2, infoColor: a2, primaryColorSuppl: o2, successColorSuppl: s2, warningColorSuppl: c2, errorColorSuppl: l2, infoColorSuppl: u2, fontWeightStrong: d2 } = e2;
  return { fontWeight: d2, rotate: `252deg`, colorStartPrimary: t2, colorEndPrimary: o2, colorStartInfo: a2, colorEndInfo: u2, colorStartWarning: r2, colorEndWarning: c2, colorStartError: i2, colorEndError: l2, colorStartSuccess: n2, colorEndSuccess: s2 };
} }, si = { name: `InputNumber`, common: q, peers: { Button: Q, Input: Z }, self(e2) {
  let { textColorDisabled: t2 } = e2;
  return { iconColorDisabled: t2 };
} }, ci = { name: `InputOtp`, common: q, peers: { Input: Z }, self: on }, li = { name: `Layout`, common: q, peers: { Scrollbar: J }, self(e2) {
  let { textColor2: t2, bodyColor: n2, popoverColor: r2, cardColor: i2, dividerColor: o2, scrollbarColor: s2, scrollbarColorHover: c2 } = e2;
  return { textColor: t2, textColorInverted: t2, color: n2, colorEmbedded: n2, headerColor: i2, headerColorInverted: i2, footerColor: i2, footerColorInverted: i2, headerBorderColor: o2, headerBorderColorInverted: o2, footerBorderColor: o2, footerBorderColorInverted: o2, siderBorderColor: o2, siderBorderColorInverted: o2, siderColor: i2, siderColorInverted: i2, siderToggleButtonBorder: `1px solid transparent`, siderToggleButtonColor: r2, siderToggleButtonIconColor: t2, siderToggleButtonIconColorInverted: t2, siderToggleBarColor: a(n2, s2), siderToggleBarColorHover: a(n2, c2), __invertScrollbar: `false` };
} }, ui = { name: `Row`, common: q }, di = { name: `List`, common: q, self: ae }, fi = { name: `Log`, common: q, peers: { Scrollbar: J, Code: vr }, self(e2) {
  let { textColor2: t2, inputColor: n2, fontSize: r2, primaryColor: i2 } = e2;
  return { loaderFontSize: r2, loaderTextColor: t2, loaderColor: n2, loaderBorder: `1px solid #0000`, loadingColor: i2 };
} }, pi = { name: `Mention`, common: q, peers: { InternalSelectMenu: tr, Input: Z }, self(e2) {
  let { boxShadow2: t2 } = e2;
  return { menuBoxShadow: t2 };
} }, mi = { name: `Menu`, common: q, peers: { Tooltip: Er, Dropdown: Tr }, self(e2) {
  let { primaryColor: t2, primaryColorSuppl: n2 } = e2, r2 = bt(e2);
  return r2.itemColorActive = i(t2, { alpha: 0.15 }), r2.itemColorActiveHover = i(t2, { alpha: 0.15 }), r2.itemColorActiveCollapsed = i(t2, { alpha: 0.15 }), r2.itemColorActiveInverted = n2, r2.itemColorActiveHoverInverted = n2, r2.itemColorActiveCollapsedInverted = n2, r2;
} };
const hi = { name: `PageHeader`, common: q, self: sn };
var gi = { name: `Popconfirm`, common: q, peers: { Button: Q, Popover: X }, self: ft }, _i = { name: `Progress`, common: q, self(e2) {
  let t2 = Vt(e2);
  return t2.textColorLineInner = `rgb(0, 0, 0)`, t2.lineBgProcessing = `linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)`, t2;
} }, vi = { name: `Rate`, common: q, self(e2) {
  let { railColor: t2 } = e2;
  return { itemColor: t2, itemColorActive: `#CCAA33`, itemSize: `20px`, sizeSmall: `16px`, sizeMedium: `20px`, sizeLarge: `24px` };
} }, yi = { name: `Result`, common: q, self: an }, bi = { name: `Slider`, common: q, self(e2) {
  let { railColor: t2, modalColor: n2, primaryColorSuppl: r2, popoverColor: i2, textColor2: a2, cardColor: o2, borderRadius: s2, fontSize: c2, opacityDisabled: l2 } = e2;
  return Object.assign(Object.assign({}, zt), { fontSize: c2, markFontSize: c2, railColor: t2, railColorHover: t2, fillColor: r2, fillColorHover: r2, opacityDisabled: l2, handleColor: `#FFF`, dotColor: o2, dotColorModal: n2, dotColorPopover: i2, handleBoxShadow: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, handleBoxShadowHover: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, handleBoxShadowActive: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, handleBoxShadowFocus: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, indicatorColor: i2, indicatorBoxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.12)`, indicatorTextColor: a2, indicatorBorderRadius: s2, dotBorder: `2px solid ${t2}`, dotBorderActive: `2px solid ${r2}`, dotBoxShadow: `` });
} }, xi = { name: `Spin`, common: q, self: Gt }, Si = { name: `Statistic`, common: q, self: zn }, Ci = { name: `Steps`, common: q, self: Xt }, wi = { name: `Switch`, common: q, self(e2) {
  let { primaryColorSuppl: t2, opacityDisabled: n2, borderRadius: r2, primaryColor: a2, textColor2: o2, baseColor: s2 } = e2;
  return Object.assign(Object.assign({}, gn), { iconColor: s2, textColor: o2, loadingColor: t2, opacityDisabled: n2, railColor: `rgba(255, 255, 255, .20)`, railColorActive: t2, buttonBoxShadow: `0px 2px 4px 0 rgba(0, 0, 0, 0.4)`, buttonColor: `#FFF`, railBorderRadiusSmall: r2, railBorderRadiusMedium: r2, railBorderRadiusLarge: r2, buttonBorderRadiusSmall: r2, buttonBorderRadiusMedium: r2, buttonBorderRadiusLarge: r2, boxShadowFocus: `0 0 8px 0 ${i(a2, { alpha: 0.3 })}` });
} }, Ti = { name: `Table`, common: q, self: $t }, Ei = { name: `Tabs`, common: q, self(e2) {
  let t2 = at(e2), { inputColor: n2 } = e2;
  return t2.colorSegment = n2, t2.tabColorSegment = n2, t2;
} }, Di = { name: `Thing`, common: q, self: Wt }, Oi = { name: `Timeline`, common: q, self(e2) {
  let { textColor3: t2, infoColorSuppl: n2, errorColorSuppl: r2, successColorSuppl: i2, warningColorSuppl: a2, textColor1: o2, textColor2: s2, railColor: c2, fontWeightStrong: l2, fontSize: u2 } = e2;
  return Object.assign(Object.assign({}, Ut), { contentFontSize: u2, titleFontWeight: l2, circleBorder: `2px solid ${t2}`, circleBorderInfo: `2px solid ${n2}`, circleBorderError: `2px solid ${r2}`, circleBorderSuccess: `2px solid ${i2}`, circleBorderWarning: `2px solid ${a2}`, iconColor: t2, iconColorInfo: n2, iconColorError: r2, iconColorSuccess: i2, iconColorWarning: a2, titleTextColor: o2, contentTextColor: s2, metaTextColor: t2, lineColor: c2 });
} }, ki = { name: `Transfer`, common: q, peers: { Checkbox: gr, Scrollbar: J, Input: Z, Empty: Y, Button: Q }, self(e2) {
  let { fontWeight: t2, fontSizeLarge: n2, fontSizeMedium: r2, fontSizeSmall: i2, heightLarge: a2, heightMedium: o2, borderRadius: s2, inputColor: c2, tableHeaderColor: l2, textColor1: u2, textColorDisabled: d2, textColor2: f2, textColor3: p2, hoverColor: m2, closeColorHover: h2, closeColorPressed: g2, closeIconColor: _2, closeIconColorHover: v2, closeIconColorPressed: y2, dividerColor: b2 } = e2;
  return Object.assign(Object.assign({}, rn), { itemHeightSmall: o2, itemHeightMedium: o2, itemHeightLarge: a2, fontSizeSmall: i2, fontSizeMedium: r2, fontSizeLarge: n2, borderRadius: s2, dividerColor: b2, borderColor: `#0000`, listColor: c2, headerColor: l2, titleTextColor: u2, titleTextColorDisabled: d2, extraTextColor: p2, extraTextColorDisabled: d2, itemTextColor: f2, itemTextColorDisabled: d2, itemColorPending: m2, titleFontWeight: t2, closeColorHover: h2, closeColorPressed: g2, closeIconColor: _2, closeIconColorHover: v2, closeIconColorPressed: y2 });
} }, Ai = { name: `Tree`, common: q, peers: { Checkbox: gr, Scrollbar: J, Empty: Y }, self(e2) {
  let { primaryColor: t2 } = e2, n2 = Yt(e2);
  return n2.nodeColorActive = i(t2, { alpha: 0.15 }), n2;
} }, ji = { name: `TreeSelect`, common: q, peers: { Tree: Ai, Empty: Y, InternalSelection: rr } }, Mi = { name: `Typography`, common: q, self: Fn }, Ni = { name: `Upload`, common: q, peers: { Button: Q, Progress: _i }, self(e2) {
  let { errorColor: t2 } = e2, n2 = Ht(e2);
  return n2.itemColorHoverError = i(t2, { alpha: 0.09 }), n2;
} }, Pi = { name: `Watermark`, common: q, self(e2) {
  let { fontFamily: t2 } = e2;
  return { fontFamily: t2 };
} }, Fi = { name: `FloatButton`, common: q, self(e2) {
  let { popoverColor: t2, textColor2: n2, buttonColor2Hover: r2, buttonColor2Pressed: i2, primaryColor: a2, primaryColorHover: o2, primaryColorPressed: s2, baseColor: c2, borderRadius: l2 } = e2;
  return { color: t2, textColor: n2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .12)`, boxShadowHover: `0 2px 12px 0px rgba(0, 0, 0, .18)`, boxShadowPressed: `0 2px 12px 0px rgba(0, 0, 0, .18)`, colorHover: r2, colorPressed: i2, colorPrimary: a2, colorPrimaryHover: o2, colorPrimaryPressed: s2, textColorPrimary: c2, borderRadiusSquare: l2 };
} }, Ii = F({ name: `GlobalStyle`, setup() {
  if (typeof document > `u`) return;
  let e2 = z(l, null), { body: t2 } = document, { style: n2 } = t2, r2 = false, i2 = true;
  Pe(() => {
    ge(() => {
      var _a2, _b;
      let { textColor2: a2, fontSize: o2, fontFamily: s2, bodyColor: c2, cubicBezierEaseInOut: l2, lineHeight: u2 } = e2 ? g({}, ((_a2 = e2.mergedThemeRef.value) == null ? void 0 : _a2.common) || b, (_b = e2.mergedThemeOverridesRef.value) == null ? void 0 : _b.common) : b;
      if (r2 || !t2.hasAttribute(`n-styled`)) {
        n2.setProperty(`-webkit-text-size-adjust`, `100%`), n2.setProperty(`-webkit-tap-highlight-color`, `transparent`), n2.padding = `0`, n2.margin = `0`, n2.backgroundColor = c2, n2.color = a2, n2.fontSize = o2, n2.fontFamily = s2, n2.lineHeight = u2;
        let e3 = `color .3s ${l2}, background-color .3s ${l2}`;
        i2 ? setTimeout(() => {
          n2.transition = e3;
        }, 0) : n2.transition = e3, t2.setAttribute(`n-styled`, ``), r2 = true, i2 = false;
      }
    });
  }), he(() => {
    r2 && t2.removeAttribute(`n-styled`);
  });
}, render() {
  return null;
} }), Li = { name: `Heatmap`, common: q, self(e2) {
  let t2 = Qt(e2);
  return Object.assign(Object.assign({}, t2), { activeColors: [`#0d4429`, `#006d32`, `#26a641`, `#39d353`], mininumColor: `rgba(255, 255, 255, 0.1)`, loadingColorStart: `rgba(255, 255, 255, 0.12)`, loadingColorEnd: `rgba(255, 255, 255, 0.18)` });
} }, Ri = { name: `IconWrapper`, common: q, self: Bt };
const zi = { name: `Image`, common: q, peers: { Tooltip: Er }, self: (e2) => {
  let { textColor2: t2 } = e2;
  return { toolbarIconColor: t2, toolbarColor: `rgba(0, 0, 0, .35)`, toolbarBoxShadow: `none`, toolbarBorderRadius: `24px` };
} };
var Bi = { name: `Transfer`, common: q, peers: { Checkbox: gr, Scrollbar: J, Input: Z, Empty: Y, Button: Q }, self(e2) {
  let { iconColorDisabled: t2, iconColor: n2, fontWeight: r2, fontSizeLarge: i2, fontSizeMedium: a2, fontSizeSmall: o2, heightLarge: s2, heightMedium: c2, heightSmall: l2, borderRadius: u2, inputColor: d2, tableHeaderColor: f2, textColor1: p2, textColorDisabled: m2, textColor2: h2, hoverColor: g2 } = e2;
  return Object.assign(Object.assign({}, Kt), { itemHeightSmall: l2, itemHeightMedium: c2, itemHeightLarge: s2, fontSizeSmall: o2, fontSizeMedium: a2, fontSizeLarge: i2, borderRadius: u2, borderColor: `#0000`, listColor: d2, headerColor: f2, titleTextColor: p2, titleTextColorDisabled: m2, extraTextColor: h2, filterDividerColor: `#0000`, itemTextColor: h2, itemTextColorDisabled: m2, itemColorPending: g2, titleFontWeight: r2, iconColor: n2, iconColorDisabled: t2 });
} }, Vi = { name: `Marquee`, common: q, self: tn };
const Hi = r(`n-menu`), Ui = r(`n-submenu`), Wi = r(`n-menu-item-group`);
var Gi = [c(`&::before`, `background-color: var(--n-item-color-hover);`), d(`arrow`, `
 color: var(--n-arrow-color-hover);
 `), d(`icon`, `
 color: var(--n-item-icon-color-hover);
 `), x(`menu-item-content-header`, `
 color: var(--n-item-text-color-hover);
 `, [c(`a`, `
 color: var(--n-item-text-color-hover);
 `), d(`extra`, `
 color: var(--n-item-text-color-hover);
 `)])], Ki = [d(`icon`, `
 color: var(--n-item-icon-color-hover-horizontal);
 `), x(`menu-item-content-header`, `
 color: var(--n-item-text-color-hover-horizontal);
 `, [c(`a`, `
 color: var(--n-item-text-color-hover-horizontal);
 `), d(`extra`, `
 color: var(--n-item-text-color-hover-horizontal);
 `)])], qi = c([x(`menu`, `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [v(`horizontal`, `
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `, [x(`submenu`, `margin: 0;`), x(`menu-item`, `margin: 0;`), x(`menu-item-content`, `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [c(`&::before`, `display: none;`), v(`selected`, `border-bottom: 2px solid var(--n-border-color-horizontal)`)]), x(`menu-item-content`, [v(`selected`, [d(`icon`, `color: var(--n-item-icon-color-active-horizontal);`), x(`menu-item-content-header`, `
 color: var(--n-item-text-color-active-horizontal);
 `, [c(`a`, `color: var(--n-item-text-color-active-horizontal);`), d(`extra`, `color: var(--n-item-text-color-active-horizontal);`)])]), v(`child-active`, `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [x(`menu-item-content-header`, `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [c(`a`, `
 color: var(--n-item-text-color-child-active-horizontal);
 `), d(`extra`, `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), d(`icon`, `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), w(`disabled`, [w(`selected, child-active`, [c(`&:focus-within`, Ki)]), v(`selected`, [$(null, [d(`icon`, `color: var(--n-item-icon-color-active-hover-horizontal);`), x(`menu-item-content-header`, `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [c(`a`, `color: var(--n-item-text-color-active-hover-horizontal);`), d(`extra`, `color: var(--n-item-text-color-active-hover-horizontal);`)])])]), v(`child-active`, [$(null, [d(`icon`, `color: var(--n-item-icon-color-child-active-hover-horizontal);`), x(`menu-item-content-header`, `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [c(`a`, `color: var(--n-item-text-color-child-active-hover-horizontal);`), d(`extra`, `color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]), $(`border-bottom: 2px solid var(--n-border-color-horizontal);`, Ki)]), x(`menu-item-content-header`, [c(`a`, `color: var(--n-item-text-color-horizontal);`)])])]), w(`responsive`, [x(`menu-item-content-header`, `
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), v(`collapsed`, [x(`menu-item-content`, [v(`selected`, [c(`&::before`, `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), x(`menu-item-content-header`, `opacity: 0;`), d(`arrow`, `opacity: 0;`), d(`icon`, `color: var(--n-item-icon-color-collapsed);`)])]), x(`menu-item`, `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), x(`menu-item-content`, `
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
 `, [c(`> *`, `z-index: 1;`), c(`&::before`, `
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
 `), v(`disabled`, `
 opacity: .45;
 cursor: not-allowed;
 `), v(`collapsed`, [d(`arrow`, `transform: rotate(0);`)]), v(`selected`, [c(`&::before`, `background-color: var(--n-item-color-active);`), d(`arrow`, `color: var(--n-arrow-color-active);`), d(`icon`, `color: var(--n-item-icon-color-active);`), x(`menu-item-content-header`, `
 color: var(--n-item-text-color-active);
 `, [c(`a`, `color: var(--n-item-text-color-active);`), d(`extra`, `color: var(--n-item-text-color-active);`)])]), v(`child-active`, [x(`menu-item-content-header`, `
 color: var(--n-item-text-color-child-active);
 `, [c(`a`, `
 color: var(--n-item-text-color-child-active);
 `), d(`extra`, `
 color: var(--n-item-text-color-child-active);
 `)]), d(`arrow`, `
 color: var(--n-arrow-color-child-active);
 `), d(`icon`, `
 color: var(--n-item-icon-color-child-active);
 `)]), w(`disabled`, [w(`selected, child-active`, [c(`&:focus-within`, Gi)]), v(`selected`, [$(null, [d(`arrow`, `color: var(--n-arrow-color-active-hover);`), d(`icon`, `color: var(--n-item-icon-color-active-hover);`), x(`menu-item-content-header`, `
 color: var(--n-item-text-color-active-hover);
 `, [c(`a`, `color: var(--n-item-text-color-active-hover);`), d(`extra`, `color: var(--n-item-text-color-active-hover);`)])])]), v(`child-active`, [$(null, [d(`arrow`, `color: var(--n-arrow-color-child-active-hover);`), d(`icon`, `color: var(--n-item-icon-color-child-active-hover);`), x(`menu-item-content-header`, `
 color: var(--n-item-text-color-child-active-hover);
 `, [c(`a`, `color: var(--n-item-text-color-child-active-hover);`), d(`extra`, `color: var(--n-item-text-color-child-active-hover);`)])])]), v(`selected`, [$(null, [c(`&::before`, `background-color: var(--n-item-color-active-hover);`)])]), $(null, Gi)]), d(`icon`, `
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
 `), d(`arrow`, `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), x(`menu-item-content-header`, `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `, [c(`a`, `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [c(`&::before`, `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), d(`extra`, `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), x(`submenu`, `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [x(`menu-item-content`, `
 height: var(--n-item-height);
 `), x(`submenu-children`, `
 overflow: hidden;
 padding: 0;
 `, [On({ duration: `.2s` })])]), x(`menu-item-group`, [x(`menu-item-group-title`, `
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
 `)])]), x(`menu-tooltip`, [c(`a`, `
 color: inherit;
 text-decoration: none;
 `)]), x(`menu-divider`, `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function $(e2, t2) {
  return [v(`hover`, e2, t2), c(`&:hover`, e2, t2)];
}
var Ji = F({ name: `MenuOptionContent`, props: { collapsed: Boolean, disabled: Boolean, title: [String, Function], icon: Function, extra: [String, Function], showArrow: Boolean, childActive: Boolean, hover: Boolean, paddingLeft: Number, selected: Boolean, maxIconSize: { type: Number, required: true }, activeIconSize: { type: Number, required: true }, iconMarginRight: { type: Number, required: true }, clsPrefix: { type: String, required: true }, onClick: Function, tmNode: { type: Object, required: true }, isEllipsisPlaceholder: Boolean }, setup(e2) {
  let { props: t2 } = z(Hi);
  return { menuProps: t2, style: I(() => {
    let { paddingLeft: t3 } = e2;
    return { paddingLeft: t3 && `${t3}px` };
  }), iconStyle: I(() => {
    let { maxIconSize: t3, activeIconSize: n2, iconMarginRight: r2 } = e2;
    return { width: `${t3}px`, height: `${t3}px`, fontSize: `${n2}px`, marginRight: `${r2}px` };
  }) };
}, render() {
  let { clsPrefix: e2, tmNode: t2, menuProps: { renderIcon: n2, renderLabel: r2, renderExtra: i2, expandIcon: a2 } } = this, o2 = n2 ? n2(t2.rawNode) : V(this.icon);
  return N(`div`, { onClick: (e3) => {
    var t3;
    (t3 = this.onClick) == null || t3.call(this, e3);
  }, role: `none`, class: [`${e2}-menu-item-content`, { [`${e2}-menu-item-content--selected`]: this.selected, [`${e2}-menu-item-content--collapsed`]: this.collapsed, [`${e2}-menu-item-content--child-active`]: this.childActive, [`${e2}-menu-item-content--disabled`]: this.disabled, [`${e2}-menu-item-content--hover`]: this.hover }], style: this.style }, o2 && N(`div`, { class: `${e2}-menu-item-content__icon`, style: this.iconStyle, role: `none` }, [o2]), N(`div`, { class: `${e2}-menu-item-content-header`, role: `none` }, this.isEllipsisPlaceholder ? this.title : r2 ? r2(t2.rawNode) : V(this.title), this.extra || i2 ? N(`span`, { class: `${e2}-menu-item-content-header__extra` }, ` `, i2 ? i2(t2.rawNode) : V(this.extra)) : null), this.showArrow ? N(C, { ariaHidden: true, class: `${e2}-menu-item-content__arrow`, clsPrefix: e2 }, { default: () => a2 ? a2(t2.rawNode) : N(Xn, null) }) : null);
} }), Yi = 8;
function Xi(e2) {
  let t2 = z(Hi), { props: n2, mergedCollapsedRef: r2 } = t2, i2 = z(Ui, null), a2 = z(Wi, null), o2 = I(() => n2.mode === `horizontal`), s2 = I(() => o2.value ? n2.dropdownPlacement : `tmNodes` in e2 ? `right-start` : `right`), c2 = I(() => Math.max(n2.collapsedIconSize ?? n2.iconSize, n2.iconSize));
  return { dropdownPlacement: s2, activeIconSize: I(() => !o2.value && e2.root && r2.value ? n2.collapsedIconSize ?? n2.iconSize : n2.iconSize), maxIconSize: c2, paddingLeft: I(() => {
    if (o2.value) return;
    let { collapsedWidth: t3, indent: s3, rootIndent: l2 } = n2, { root: u2, isGroup: d2 } = e2, f2 = l2 === void 0 ? s3 : l2;
    return u2 ? r2.value ? t3 / 2 - c2.value / 2 : f2 : a2 && typeof a2.paddingLeftRef.value == `number` ? s3 / 2 + a2.paddingLeftRef.value : i2 && typeof i2.paddingLeftRef.value == `number` ? (d2 ? s3 / 2 : s3) + i2.paddingLeftRef.value : 0;
  }), iconMarginRight: I(() => {
    let { collapsedWidth: t3, indent: i3, rootIndent: a3 } = n2, { value: s3 } = c2, { root: l2 } = e2;
    return o2.value || !l2 || !r2.value ? Yi : (a3 === void 0 ? i3 : a3) + s3 + Yi - (t3 + s3) / 2;
  }), NMenu: t2, NSubmenu: i2, NMenuOptionGroup: a2 };
}
const Zi = { internalKey: { type: [String, Number], required: true }, root: Boolean, isGroup: Boolean, level: { type: Number, required: true }, title: [String, Function], extra: [String, Function] };
var Qi = F({ name: `MenuDivider`, setup() {
  let { mergedClsPrefixRef: e2, isHorizontalRef: t2 } = z(Hi);
  return () => t2.value ? null : N(`div`, { class: `${e2.value}-menu-divider` });
} });
const $i = Object.assign(Object.assign({}, Zi), { tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function }), ea = t($i), ta = F({ name: `MenuOption`, props: $i, setup(e2) {
  let t2 = Xi(e2), { NSubmenu: n2, NMenu: r2, NMenuOptionGroup: i2 } = t2, { props: a2, mergedClsPrefixRef: o2, mergedCollapsedRef: s2 } = r2, c2 = n2 ? n2.mergedDisabledRef : i2 ? i2.mergedDisabledRef : { value: false }, l2 = I(() => c2.value || e2.disabled);
  function u2(t3) {
    let { onClick: n3 } = e2;
    n3 && n3(t3);
  }
  function d2(t3) {
    l2.value || (r2.doSelect(e2.internalKey, e2.tmNode.rawNode), u2(t3));
  }
  return { mergedClsPrefix: o2, dropdownPlacement: t2.dropdownPlacement, paddingLeft: t2.paddingLeft, iconMarginRight: t2.iconMarginRight, maxIconSize: t2.maxIconSize, activeIconSize: t2.activeIconSize, mergedTheme: r2.mergedThemeRef, menuProps: a2, dropdownEnabled: D(() => e2.root && s2.value && a2.mode !== `horizontal` && !l2.value), selected: D(() => r2.mergedValueRef.value === e2.internalKey), mergedDisabled: l2, handleClick: d2 };
}, render() {
  let { mergedClsPrefix: e2, mergedTheme: t2, tmNode: n2, menuProps: { renderLabel: r2, nodeProps: i2 } } = this, a2 = i2 == null ? void 0 : i2(n2.rawNode);
  return N(`div`, Object.assign({}, a2, { role: `menuitem`, class: [`${e2}-menu-item`, a2 == null ? void 0 : a2.class] }), N(se, { theme: t2.peers.Tooltip, themeOverrides: t2.peerOverrides.Tooltip, trigger: `hover`, placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: [`menu-tooltip`] }, { default: () => r2 ? r2(n2.rawNode) : V(this.title), trigger: () => N(Ji, { tmNode: n2, clsPrefix: e2, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick }) }));
} }), na = Object.assign(Object.assign({}, Zi), { tmNode: { type: Object, required: true }, tmNodes: { type: Array, required: true } }), ra = t(na), ia = F({ name: `MenuOptionGroup`, props: na, setup(e2) {
  let t2 = Xi(e2), { NSubmenu: n2 } = t2, r2 = I(() => (n2 == null ? void 0 : n2.mergedDisabledRef.value) ? true : e2.tmNode.disabled);
  A(Wi, { paddingLeftRef: t2.paddingLeft, mergedDisabledRef: r2 });
  let { mergedClsPrefixRef: i2, props: a2 } = z(Hi);
  return function() {
    let { value: n3 } = i2, r3 = t2.paddingLeft.value, { nodeProps: o2 } = a2, s2 = o2 == null ? void 0 : o2(e2.tmNode.rawNode);
    return N(`div`, { class: `${n3}-menu-item-group`, role: `group` }, N(`div`, Object.assign({}, s2, { class: [`${n3}-menu-item-group-title`, s2 == null ? void 0 : s2.class], style: [(s2 == null ? void 0 : s2.style) || ``, r3 === void 0 ? `` : `padding-left: ${r3}px;`] }), V(e2.title), e2.extra ? N(Me, null, ` `, V(e2.extra)) : null), N(`div`, null, e2.tmNodes.map((e3) => sa(e3, a2))));
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
  if (aa(n2)) return oa(n2) ? N(Qi, Object.assign({ key: e2.key }, n2.props)) : null;
  let { labelField: i2 } = t2, { key: a2, level: o2, isGroup: s2 } = e2, c2 = Object.assign(Object.assign({}, n2), { title: n2.title || n2[i2], extra: n2.titleExtra || n2.extra, key: a2, internalKey: a2, level: o2, root: o2 === 0, isGroup: s2 });
  return e2.children ? e2.isGroup ? N(ia, le(c2, ra, { tmNode: e2, tmNodes: e2.children, key: a2 })) : N(ua, le(c2, la, { key: a2, rawNodes: n2[t2.childrenField], tmNodes: e2.children, tmNode: e2 })) : N(ta, le(c2, ea, { key: a2, tmNode: e2 }));
}
const ca = Object.assign(Object.assign({}, Zi), { rawNodes: { type: Array, default: () => [] }, tmNodes: { type: Array, default: () => [] }, tmNode: { type: Object, required: true }, disabled: Boolean, icon: Function, onClick: Function, domId: String, virtualChildActive: { type: Boolean, default: void 0 }, isEllipsisPlaceholder: Boolean }), la = t(ca), ua = F({ name: `Submenu`, props: ca, setup(e2) {
  let t2 = Xi(e2), { NMenu: n2, NSubmenu: r2 } = t2, { props: i2, mergedCollapsedRef: a2, mergedThemeRef: o2 } = n2, s2 = I(() => {
    let { disabled: t3 } = e2;
    return (r2 == null ? void 0 : r2.mergedDisabledRef.value) || i2.disabled ? true : t3;
  }), c2 = j(false);
  A(Ui, { paddingLeftRef: t2.paddingLeft, mergedDisabledRef: s2 }), A(Wi, null);
  function l2() {
    let { onClick: t3 } = e2;
    t3 && t3();
  }
  function u2() {
    s2.value || (a2.value || n2.toggleExpand(e2.internalKey), l2());
  }
  function d2(e3) {
    c2.value = e3;
  }
  return { menuProps: i2, mergedTheme: o2, doSelect: n2.doSelect, inverted: n2.invertedRef, isHorizontal: n2.isHorizontalRef, mergedClsPrefix: n2.mergedClsPrefixRef, maxIconSize: t2.maxIconSize, activeIconSize: t2.activeIconSize, iconMarginRight: t2.iconMarginRight, dropdownPlacement: t2.dropdownPlacement, dropdownShow: c2, paddingLeft: t2.paddingLeft, mergedDisabled: s2, mergedValue: n2.mergedValueRef, childActive: D(() => e2.virtualChildActive ?? n2.activePathRef.value.includes(e2.internalKey)), collapsed: I(() => i2.mode === `horizontal` ? false : a2.value ? true : !n2.mergedExpandedKeysRef.value.includes(e2.internalKey)), dropdownEnabled: I(() => !s2.value && (i2.mode === `horizontal` || a2.value)), handlePopoverShowChange: d2, handleClick: u2 };
}, render() {
  var _a2;
  let { mergedClsPrefix: e2, menuProps: { renderIcon: t2, renderLabel: n2 } } = this, r2 = () => {
    let { isHorizontal: e3, paddingLeft: t3, collapsed: n3, mergedDisabled: r3, maxIconSize: i3, activeIconSize: a2, title: o2, childActive: s2, icon: c2, handleClick: l2, menuProps: { nodeProps: u2 }, dropdownShow: d2, iconMarginRight: f2, tmNode: p2, mergedClsPrefix: m2, isEllipsisPlaceholder: h2, extra: g2 } = this, _2 = u2 == null ? void 0 : u2(p2.rawNode);
    return N(`div`, Object.assign({}, _2, { class: [`${m2}-menu-item`, _2 == null ? void 0 : _2.class], role: `menuitem` }), N(Ji, { tmNode: p2, paddingLeft: t3, collapsed: n3, disabled: r3, iconMarginRight: f2, maxIconSize: i3, activeIconSize: a2, title: o2, extra: g2, showArrow: !e3, childActive: s2, clsPrefix: m2, icon: c2, hover: d2, onClick: l2, isEllipsisPlaceholder: h2 }));
  }, i2 = () => N(S, null, { default: () => {
    let { tmNodes: t3, collapsed: n3 } = this;
    return n3 ? null : N(`div`, { class: `${e2}-submenu-children`, role: `menu` }, t3.map((e3) => sa(e3, this.menuProps)));
  } });
  return this.root ? N(kt, Object.assign({ size: `large`, trigger: `hover` }, (_a2 = this.menuProps) == null ? void 0 : _a2.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: { fontSizeLarge: `14px`, optionIconSizeLarge: `18px` }, value: this.mergedValue, disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: t2, renderLabel: n2 }), { default: () => N(`div`, { class: `${e2}-submenu`, role: `menu`, "aria-expanded": !this.collapsed, id: this.domId }, r2(), this.isHorizontal ? null : i2()) }) : N(`div`, { class: `${e2}-submenu`, role: `menu`, "aria-expanded": !this.collapsed, id: this.domId }, r2(), i2());
} });
var da = F({ name: `Menu`, inheritAttrs: false, props: Object.assign(Object.assign({}, m.props), { options: { type: Array, default: () => [] }, collapsed: { type: Boolean, default: void 0 }, collapsedWidth: { type: Number, default: 48 }, iconSize: { type: Number, default: 20 }, collapsedIconSize: { type: Number, default: 24 }, rootIndent: Number, indent: { type: Number, default: 32 }, labelField: { type: String, default: `label` }, keyField: { type: String, default: `key` }, childrenField: { type: String, default: `children` }, disabledField: { type: String, default: `disabled` }, defaultExpandAll: Boolean, defaultExpandedKeys: Array, expandedKeys: Array, value: [String, Number], defaultValue: { type: [String, Number], default: null }, mode: { type: String, default: `vertical` }, watchProps: { type: Array, default: void 0 }, disabled: Boolean, show: { type: Boolean, default: true }, inverted: Boolean, "onUpdate:expandedKeys": [Function, Array], onUpdateExpandedKeys: [Function, Array], onUpdateValue: [Function, Array], "onUpdate:value": [Function, Array], expandIcon: Function, renderIcon: Function, renderLabel: Function, renderExtra: Function, dropdownProps: Object, accordion: Boolean, nodeProps: Function, dropdownPlacement: { type: String, default: `bottom` }, responsive: Boolean, items: Array, onOpenNamesChange: [Function, Array], onSelect: [Function, Array], onExpandedNamesChange: [Function, Array], expandedNames: Array, defaultExpandedNames: Array }), setup(t2) {
  let { mergedClsPrefixRef: n2, inlineThemeDisabled: r2 } = T(t2), i2 = m(`Menu`, `-menu`, qi, Pt, t2, n2), a2 = z(Ue, null), o2 = I(() => {
    let { collapsed: e2 } = t2;
    if (e2 !== void 0) return e2;
    if (a2) {
      let { collapseModeRef: e3, collapsedRef: t3 } = a2;
      if (e3.value === `width`) return t3.value ?? false;
    }
    return false;
  }), s2 = I(() => {
    let { keyField: e2, childrenField: n3, disabledField: r3 } = t2;
    return bn(t2.items || t2.options, { getIgnored(e3) {
      return aa(e3);
    }, getChildren(e3) {
      return e3[n3];
    }, getDisabled(e3) {
      return e3[r3];
    }, getKey(t3) {
      return t3[e2] ?? t3.name;
    } });
  }), c2 = I(() => new Set(s2.value.treeNodes.map((e2) => e2.key))), { watchProps: l2 } = t2, u2 = j(null);
  (l2 == null ? void 0 : l2.includes(`defaultValue`)) ? ge(() => {
    u2.value = t2.defaultValue;
  }) : u2.value = t2.defaultValue;
  let d2 = E(ye(t2, `value`), u2), f2 = j([]), p2 = () => {
    f2.value = t2.defaultExpandAll ? s2.value.getNonLeafKeys() : t2.defaultExpandedNames || t2.defaultExpandedKeys || s2.value.getPath(d2.value, { includeSelf: false }).keyPath;
  };
  (l2 == null ? void 0 : l2.includes(`defaultExpandedKeys`)) ? ge(p2) : p2();
  let g2 = ee(t2, [`expandedNames`, `expandedKeys`]), _2 = E(g2, f2), v2 = I(() => s2.value.treeNodes), y2 = I(() => s2.value.getPath(d2.value).keyPath);
  A(Hi, { props: t2, mergedCollapsedRef: o2, mergedThemeRef: i2, mergedValueRef: d2, mergedExpandedKeysRef: _2, activePathRef: y2, mergedClsPrefixRef: n2, isHorizontalRef: I(() => t2.mode === `horizontal`), invertedRef: ye(t2, `inverted`), doSelect: b2, toggleExpand: S2 });
  function b2(n3, r3) {
    let { "onUpdate:value": i3, onUpdateValue: a3, onSelect: o3 } = t2;
    a3 && e(a3, n3, r3), i3 && e(i3, n3, r3), o3 && e(o3, n3, r3), u2.value = n3;
  }
  function x2(n3) {
    let { "onUpdate:expandedKeys": r3, onUpdateExpandedKeys: i3, onExpandedNamesChange: a3, onOpenNamesChange: o3 } = t2;
    r3 && e(r3, n3), i3 && e(i3, n3), a3 && e(a3, n3), o3 && e(o3, n3), f2.value = n3;
  }
  function S2(e2) {
    let n3 = Array.from(_2.value), r3 = n3.findIndex((t3) => t3 === e2);
    if (~r3) n3.splice(r3, 1);
    else {
      if (t2.accordion && c2.value.has(e2)) {
        let e3 = n3.findIndex((e4) => c2.value.has(e4));
        e3 > -1 && n3.splice(e3, 1);
      }
      n3.push(e2);
    }
    x2(n3);
  }
  let C2 = (e2) => {
    let n3 = s2.value.getPath(e2 ?? d2.value, { includeSelf: false }).keyPath;
    if (!n3.length) return;
    let r3 = Array.from(_2.value), i3 = /* @__PURE__ */ new Set([...r3, ...n3]);
    t2.accordion && c2.value.forEach((e3) => {
      i3.has(e3) && !n3.includes(e3) && i3.delete(e3);
    }), x2(Array.from(i3));
  }, w2 = I(() => {
    let { inverted: e2 } = t2, { common: { cubicBezierEaseInOut: n3 }, self: r3 } = i2.value, { borderRadius: a3, borderColorHorizontal: o3, fontSize: s3, itemHeight: c3, dividerColor: l3 } = r3, u3 = { "--n-divider-color": l3, "--n-bezier": n3, "--n-font-size": s3, "--n-border-color-horizontal": o3, "--n-border-radius": a3, "--n-item-height": c3 };
    return e2 ? (u3[`--n-group-text-color`] = r3.groupTextColorInverted, u3[`--n-color`] = r3.colorInverted, u3[`--n-item-text-color`] = r3.itemTextColorInverted, u3[`--n-item-text-color-hover`] = r3.itemTextColorHoverInverted, u3[`--n-item-text-color-active`] = r3.itemTextColorActiveInverted, u3[`--n-item-text-color-child-active`] = r3.itemTextColorChildActiveInverted, u3[`--n-item-text-color-child-active-hover`] = r3.itemTextColorChildActiveInverted, u3[`--n-item-text-color-active-hover`] = r3.itemTextColorActiveHoverInverted, u3[`--n-item-icon-color`] = r3.itemIconColorInverted, u3[`--n-item-icon-color-hover`] = r3.itemIconColorHoverInverted, u3[`--n-item-icon-color-active`] = r3.itemIconColorActiveInverted, u3[`--n-item-icon-color-active-hover`] = r3.itemIconColorActiveHoverInverted, u3[`--n-item-icon-color-child-active`] = r3.itemIconColorChildActiveInverted, u3[`--n-item-icon-color-child-active-hover`] = r3.itemIconColorChildActiveHoverInverted, u3[`--n-item-icon-color-collapsed`] = r3.itemIconColorCollapsedInverted, u3[`--n-item-text-color-horizontal`] = r3.itemTextColorHorizontalInverted, u3[`--n-item-text-color-hover-horizontal`] = r3.itemTextColorHoverHorizontalInverted, u3[`--n-item-text-color-active-horizontal`] = r3.itemTextColorActiveHorizontalInverted, u3[`--n-item-text-color-child-active-horizontal`] = r3.itemTextColorChildActiveHorizontalInverted, u3[`--n-item-text-color-child-active-hover-horizontal`] = r3.itemTextColorChildActiveHoverHorizontalInverted, u3[`--n-item-text-color-active-hover-horizontal`] = r3.itemTextColorActiveHoverHorizontalInverted, u3[`--n-item-icon-color-horizontal`] = r3.itemIconColorHorizontalInverted, u3[`--n-item-icon-color-hover-horizontal`] = r3.itemIconColorHoverHorizontalInverted, u3[`--n-item-icon-color-active-horizontal`] = r3.itemIconColorActiveHorizontalInverted, u3[`--n-item-icon-color-active-hover-horizontal`] = r3.itemIconColorActiveHoverHorizontalInverted, u3[`--n-item-icon-color-child-active-horizontal`] = r3.itemIconColorChildActiveHorizontalInverted, u3[`--n-item-icon-color-child-active-hover-horizontal`] = r3.itemIconColorChildActiveHoverHorizontalInverted, u3[`--n-arrow-color`] = r3.arrowColorInverted, u3[`--n-arrow-color-hover`] = r3.arrowColorHoverInverted, u3[`--n-arrow-color-active`] = r3.arrowColorActiveInverted, u3[`--n-arrow-color-active-hover`] = r3.arrowColorActiveHoverInverted, u3[`--n-arrow-color-child-active`] = r3.arrowColorChildActiveInverted, u3[`--n-arrow-color-child-active-hover`] = r3.arrowColorChildActiveHoverInverted, u3[`--n-item-color-hover`] = r3.itemColorHoverInverted, u3[`--n-item-color-active`] = r3.itemColorActiveInverted, u3[`--n-item-color-active-hover`] = r3.itemColorActiveHoverInverted, u3[`--n-item-color-active-collapsed`] = r3.itemColorActiveCollapsedInverted) : (u3[`--n-group-text-color`] = r3.groupTextColor, u3[`--n-color`] = r3.color, u3[`--n-item-text-color`] = r3.itemTextColor, u3[`--n-item-text-color-hover`] = r3.itemTextColorHover, u3[`--n-item-text-color-active`] = r3.itemTextColorActive, u3[`--n-item-text-color-child-active`] = r3.itemTextColorChildActive, u3[`--n-item-text-color-child-active-hover`] = r3.itemTextColorChildActiveHover, u3[`--n-item-text-color-active-hover`] = r3.itemTextColorActiveHover, u3[`--n-item-icon-color`] = r3.itemIconColor, u3[`--n-item-icon-color-hover`] = r3.itemIconColorHover, u3[`--n-item-icon-color-active`] = r3.itemIconColorActive, u3[`--n-item-icon-color-active-hover`] = r3.itemIconColorActiveHover, u3[`--n-item-icon-color-child-active`] = r3.itemIconColorChildActive, u3[`--n-item-icon-color-child-active-hover`] = r3.itemIconColorChildActiveHover, u3[`--n-item-icon-color-collapsed`] = r3.itemIconColorCollapsed, u3[`--n-item-text-color-horizontal`] = r3.itemTextColorHorizontal, u3[`--n-item-text-color-hover-horizontal`] = r3.itemTextColorHoverHorizontal, u3[`--n-item-text-color-active-horizontal`] = r3.itemTextColorActiveHorizontal, u3[`--n-item-text-color-child-active-horizontal`] = r3.itemTextColorChildActiveHorizontal, u3[`--n-item-text-color-child-active-hover-horizontal`] = r3.itemTextColorChildActiveHoverHorizontal, u3[`--n-item-text-color-active-hover-horizontal`] = r3.itemTextColorActiveHoverHorizontal, u3[`--n-item-icon-color-horizontal`] = r3.itemIconColorHorizontal, u3[`--n-item-icon-color-hover-horizontal`] = r3.itemIconColorHoverHorizontal, u3[`--n-item-icon-color-active-horizontal`] = r3.itemIconColorActiveHorizontal, u3[`--n-item-icon-color-active-hover-horizontal`] = r3.itemIconColorActiveHoverHorizontal, u3[`--n-item-icon-color-child-active-horizontal`] = r3.itemIconColorChildActiveHorizontal, u3[`--n-item-icon-color-child-active-hover-horizontal`] = r3.itemIconColorChildActiveHoverHorizontal, u3[`--n-arrow-color`] = r3.arrowColor, u3[`--n-arrow-color-hover`] = r3.arrowColorHover, u3[`--n-arrow-color-active`] = r3.arrowColorActive, u3[`--n-arrow-color-active-hover`] = r3.arrowColorActiveHover, u3[`--n-arrow-color-child-active`] = r3.arrowColorChildActive, u3[`--n-arrow-color-child-active-hover`] = r3.arrowColorChildActiveHover, u3[`--n-item-color-hover`] = r3.itemColorHover, u3[`--n-item-color-active`] = r3.itemColorActive, u3[`--n-item-color-active-hover`] = r3.itemColorActiveHover, u3[`--n-item-color-active-collapsed`] = r3.itemColorActiveCollapsed), u3;
  }), D2 = r2 ? h(`menu`, I(() => t2.inverted ? `a` : `b`), w2, t2) : void 0, O2 = oe(), k2 = j(null), te2 = j(null), ne2 = true, re2 = () => {
    var e2;
    ne2 ? ne2 = false : (e2 = k2.value) == null || e2.sync({ showAllItemsBeforeCalculate: true });
  };
  function ie2() {
    return document.getElementById(O2);
  }
  let ae2 = j(-1);
  function se2(e2) {
    ae2.value = t2.options.length - e2;
  }
  function ce2(e2) {
    e2 || (ae2.value = -1);
  }
  let le2 = I(() => {
    let e2 = ae2.value;
    return { children: e2 === -1 ? [] : t2.options.slice(e2) };
  }), ue2 = I(() => {
    let { childrenField: e2, disabledField: n3, keyField: r3 } = t2;
    return bn([le2.value], { getIgnored(e3) {
      return aa(e3);
    }, getChildren(t3) {
      return t3[e2];
    }, getDisabled(e3) {
      return e3[n3];
    }, getKey(e3) {
      return e3[r3] ?? e3.name;
    } });
  }), de2 = I(() => bn([{}]).treeNodes[0]);
  function fe2() {
    var _a2;
    if (ae2.value === -1) return N(ua, { root: true, level: 0, key: `__ellpisisGroupPlaceholder__`, internalKey: `__ellpisisGroupPlaceholder__`, title: `\xB7\xB7\xB7`, tmNode: de2.value, domId: O2, isEllipsisPlaceholder: true });
    let e2 = ue2.value.treeNodes[0], t3 = y2.value;
    return N(ua, { level: 0, root: true, key: `__ellpisisGroup__`, internalKey: `__ellpisisGroup__`, title: `\xB7\xB7\xB7`, virtualChildActive: !!((_a2 = e2.children) == null ? void 0 : _a2.some((e3) => t3.includes(e3.key))), tmNode: e2, domId: O2, rawNodes: e2.rawNode.children || [], tmNodes: e2.children || [], isEllipsisPlaceholder: true });
  }
  return { mergedClsPrefix: n2, controlledExpandedKeys: g2, uncontrolledExpanededKeys: f2, mergedExpandedKeys: _2, uncontrolledValue: u2, mergedValue: d2, activePath: y2, tmNodes: v2, mergedTheme: i2, mergedCollapsed: o2, cssVars: r2 ? void 0 : w2, themeClass: D2 == null ? void 0 : D2.themeClass, overflowRef: k2, counterRef: te2, updateCounter: () => {
  }, onResize: re2, onUpdateOverflow: ce2, onUpdateCount: se2, renderCounter: fe2, getCounter: ie2, onRender: D2 == null ? void 0 : D2.onRender, showOption: C2, deriveResponsiveState: re2 };
}, render() {
  let { mergedClsPrefix: e2, mode: t2, themeClass: n2, onRender: r2 } = this;
  r2 == null ? void 0 : r2();
  let i2 = () => this.tmNodes.map((e3) => sa(e3, this.$props)), a2 = t2 === `horizontal` && this.responsive, o2 = () => N(`div`, Fe(this.$attrs, { role: t2 === `horizontal` ? `menubar` : `menu`, class: [`${e2}-menu`, n2, `${e2}-menu--${t2}`, a2 && `${e2}-menu--responsive`, this.mergedCollapsed && `${e2}-menu--collapsed`], style: this.cssVars }), a2 ? N(cn, { ref: `overflowRef`, onUpdateOverflow: this.onUpdateOverflow, getCounter: this.getCounter, onUpdateCount: this.onUpdateCount, updateCounter: this.updateCounter, style: { width: `100%`, display: `flex`, overflow: `hidden` } }, { default: i2, counter: this.renderCounter }) : i2());
  return a2 ? N(O, { onResize: this.onResize }, { default: o2 }) : o2();
} });
const fa = { name: `dark`, common: q, Alert: ir, Anchor: ar, AutoComplete: sr, Avatar: cr, AvatarGroup: lr, BackTop: ur, Badge: dr, Breadcrumb: fr, Button: Q, ButtonGroup: ii, Calendar: pr, Card: mr, Carousel: hr, Cascader: _r, Checkbox: gr, Code: vr, Collapse: yr, CollapseTransition: br, ColorPicker: xr, DataTable: kr, DatePicker: Mr, Descriptions: Nr, Dialog: Pr, Divider: Zr, Drawer: Qr, Dropdown: Tr, DynamicInput: $r, DynamicTags: ti, Element: ni, Empty: Y, Ellipsis: Dr, Equation: { name: `Equation`, common: q, self: Zt }, Flex: ri, Form: ai, GradientText: oi, Heatmap: Li, Icon: Ar, IconWrapper: Ri, Image: zi, Input: Z, InputNumber: si, InputOtp: ci, LegacyTransfer: Bi, Layout: li, List: di, LoadingBar: zr, Log: fi, Menu: mi, Mention: pi, Message: Br, Modal: Fr, Notification: Xr, PageHeader: hi, Pagination: wr, Popconfirm: gi, Popover: X, Popselect: Sr, Progress: _i, QrCode: { name: `QrCode`, common: q, self: (e2) => ({ borderRadius: e2.borderRadius }) }, Radio: Or, Rate: vi, Result: yi, Row: ui, Scrollbar: J, Select: Cr, Skeleton: { name: `Skeleton`, common: q, self(e2) {
  let { heightSmall: t2, heightMedium: n2, heightLarge: r2, borderRadius: i2 } = e2;
  return { color: `rgba(255, 255, 255, 0.12)`, colorEnd: `rgba(255, 255, 255, 0.18)`, borderRadius: i2, heightSmall: t2, heightMedium: n2, heightLarge: r2 };
} }, Slider: bi, Space: ei, Spin: xi, Statistic: Si, Steps: Ci, Switch: wi, Table: Ti, Tabs: Ei, Tag: nr, Thing: Di, TimePicker: jr, Timeline: Oi, Tooltip: Er, Transfer: ki, Tree: Ai, TreeSelect: ji, Typography: Mi, Upload: Ni, Watermark: Pi, Split: { name: `Split`, common: q }, FloatButton: Fi, FloatButtonGroup: { name: `FloatButtonGroup`, common: q, self(e2) {
  let { popoverColor: t2, dividerColor: n2, borderRadius: r2 } = e2;
  return { color: t2, buttonBorderColor: n2, borderRadiusSquare: r2, boxShadow: `0 2px 8px 0px rgba(0, 0, 0, .12)` };
} }, Marquee: Vi }, pa = be(`titleBar`, () => {
  let e2 = pt();
  return { text: I(() => {
    var _a2;
    return e2.currentSketchId && ((_a2 = e2.sketches.find((t2) => t2.id === e2.currentSketchId)) == null ? void 0 : _a2.meta.name) || null;
  }) };
});
var ma = { key: 0, class: `title-bar` }, ha = Ae(F({ __name: `TitleBar`, setup(e2) {
  let t2 = pa(), n2 = I(() => t2.text || ``);
  return (e3, t3) => n2.value ? (P(), Ne(`div`, ma, [L(M(Nn), null, { default: B(() => [L(M(ut), { depth: 3 }, { default: B(() => [Se(Oe(n2.value), 1)]), _: 1 })]), _: 1 })])) : we(``, true);
} }), [[`__scopeId`, `data-v-36e35087`]]), ga = { key: 0, class: `nav-bar` }, _a = { class: `software-info-menu` }, va = { style: { width: `100%` } }, ya = { style: { "max-width": `8em` } }, ba = { key: 1, class: `nav-bar` }, xa = { style: { "max-width": `50vw` } }, Sa = { class: `main-layout` }, Ca = Ae(F({ __name: `AppLayout`, setup(e2) {
  ve((e3) => ({ v7525ec9e: f2.value ? `column` : `row` }));
  let t2 = Ie(), n2 = jn(), r2 = new Mn(), { t: i2, locale: a2 } = _t();
  function o2(e3) {
    return () => N(In, null, { default: () => N(e3) });
  }
  n2.settings.interfaceLanguage = n2.settings.interfaceLanguage ?? a2.value, a2.value = n2.settings.interfaceLanguage, pe(() => n2.settings.interfaceLanguage, (e3) => {
    e3 && (a2.value = e3);
  });
  let s2 = [{ label: () => N(Re, { to: `/tracker` }, { default: () => i2(`router.tracker`) }), key: `tracker`, icon: o2(ze) }, { label: () => N(Re, { to: `/sketch-centre` }, { default: () => i2(`router.sketchCentre`) }), key: `sketch-centre`, icon: o2(Xe) }], c2 = [{ label: () => N(Re, { to: `/settings` }, { default: () => i2(`router.settings`) }), key: `settings`, icon: o2(Be) }, { label: () => N(Re, { to: `/about` }, { default: () => i2(`router.about`) }), key: `about`, icon: o2(Ve) }], l2 = I(() => t2.path.slice(1)), { width: u2, height: d2 } = _n(), f2 = I(() => u2.value > d2.value);
  return (e3, t3) => (P(), Ne(`div`, { class: je([`app-layout`, f2.value ? `app-layout-horizontal` : `app-layout-vertical`]) }, [f2.value ? (P(), Ne(`div`, ga, [L(M(da), { options: s2, "default-value": `tracker`, value: l2.value, mode: f2.value ? `vertical` : `horizontal` }, null, 8, [`value`, `mode`]), R(`div`, _a, [R(`div`, va, [L(M(da), { options: c2, mode: f2.value ? `vertical` : `horizontal`, value: l2.value }, null, 8, [`mode`, `value`])]), R(`div`, ya, [L(ha)])])])) : (P(), Ne(`div`, ba, [L(M(ne), { trigger: M(r2).isMobile ? `click` : `hover`, style: { padding: `2px 0`, transform: `translateX(2px)` }, placement: `bottom-start` }, { trigger: B(() => [L(M(hn), { style: { width: `48px` } }, { icon: B(() => [L(M(In), null, { default: B(() => [L(M(Vn))]), _: 1 })]), _: 1 })]), default: B(() => [L(M(da), { options: s2.concat(c2), "default-value": `tracker`, value: l2.value, "dropdown-placement": `top-start`, mode: `vertical` }, null, 8, [`options`, `value`])]), _: 1 }, 8, [`trigger`]), R(`div`, xa, [L(ha)])])), R(`div`, Sa, [L(M(Le), null, { default: B(({ Component: e4 }) => [L(de, { name: `slide-fade`, mode: `out-in` }, { default: B(() => [(P(), xe(Te, null, [(P(), xe(me(e4), { key: l2.value }))], 1024))]), _: 2 }, 1024)]), _: 1 })])], 2));
} }), [[`__scopeId`, `data-v-00577205`]]), wa = Ce(((e2, t2) => {
  t2.exports = { webm: `data:video/webm;base64,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`, mp4: `data:video/mp4;base64,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` };
})), Ta = Ee(Ce(((e2, t2) => {
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
}))(), 1), Ea = F({ __name: `App`, setup(e2) {
  let t2 = jn(), n2 = window.GeolocationManager, r2 = Yn(), i2 = I(() => (t2.settings.theme === `system` ? r2.value : t2.settings.theme) === `dark` ? fa : nn), a2 = { common: { fontFamily: `Barlow, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` } };
  return A(`platformInfo`, new Mn()), A(`settings`, t2), A(`noSleep`, new Ta.default()), A(`geolocation`, n2), ue(() => t2.init()), (e3, t3) => (P(), xe(M(Et), { theme: i2.value, abstract: true, "inline-theme-disabled": true, "theme-overrides": a2 }, { default: B(() => [L(M(Rr), null, { default: B(() => [L(M(Yr), null, { default: B(() => [L(M(qr), { placement: `bottom-right` }, { default: B(() => [L(Ca), L(M(Ii))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }, 8, [`theme`]));
} });
export {
  Ea as default
};
