import { $ as e, A as t, B as n, C as r, D as i, F as a, G as o, H as s, I as c, J as l, K as u, L as d, N as f, O as p, P as m, Q as h, T as g, V as _, W as v, X as y, Y as b, Z as x, _ as S, at as ee, c as te, ct as C, dt as w, et as T, f as E, gt as ne, h as re, ht as D, it as ie, j as ae, mt as O, nt as oe, ot as k, p as se, pt as A, q as ce, rt as le, st as ue, t as de, tt as fe, u as j, ut as M, y as pe } from "./Card-nhqq8IKa.js";
import { C as N, E as P, S as me, T as he, _ as ge, d as _e, g as ve, h as F, i as ye, m as be, n as xe, o as Se, p as I, r as Ce, s as we, t as Te, v as Ee, w as De, x as L, y as Oe } from "./MarkdownEditor-BHI9ypp6.js";
import { $ as ke, A as Ae, D as je, E as Me, H as Ne, J as Pe, K as Fe, M as Ie, N as Le, Q as Re, S as ze, U as Be, W as Ve, Y as He, d as Ue, j as We, k as Ge, w as Ke, y as qe } from "./Tooltip-DGge0ha1.js";
import { Bt as Je, Ct as R, Et as z, Ft as Ye, Jt as Xe, Lt as Ze, Mt as Qe, Ot as $e, St as B, Tt as et, Ut as tt, Vt as nt, Xt as V, Yt as rt, Z as it, Zt as at, _t as H, an as U, bt as W, cn as G, ct as ot, dn as K, dt as st, fn as ct, gt as q, ht as lt, it as ut, jt as dt, lt as ft, mn as J, nt as pt, ot as mt, pn as ht, rt as gt, sn as _t, st as vt, t as yt, vt as Y, wt as X, xt as bt, yt as xt, zt as Z } from "./index-DTVnoW_1.js";
import "./dist-CQp5Y4zm.js";
import "./dist-DYp_OIFV.js";
import "./dist-CjAScDBv.js";
import "./dist-Doi9LDAp.js";
import "./dist-B0pdZx0k.js";
import { t as St } from "./FileText-De73kcR5.js";
import { a as Ct, i as wt, n as Tt, r as Et } from "./interface-COpDF2_U.js";
import { M as Dt, R as Ot, _ as kt, f as At, i as jt, n as Mt, o as Nt, r as Pt, s as Ft, t as It, u as Lt } from "./sketch-store-CoKve6q-.js";
import { n as Rt } from "./vue-i18n-BAINxUFe.js";
import { t as zt } from "./fade-in-scale-up.cssr-DGTJWPO8.js";
import { a as Bt, n as Vt, t as Ht } from "./Switch-Cn3xt9L6.js";
import { g as Ut } from "./storage-DsEl3RSe.js";
import { n as Wt, t as Gt } from "./Popconfirm-B-0pB6X9.js";
import { n as Kt, r as qt, t as Jt } from "./Tag-BCblq9DP.js";
import { t as Yt } from "./omit-DTu60rkx.js";
import { d as Xt, n as Zt, t as Q } from "./Button-o58fM-RZ.js";
import { t as Qt } from "./use-locale-C5hleQcp.js";
import { t as $t } from "./Input-DXEph42L.js";
import { t as en } from "./PerformantEllipsis-DJXJ4P1h.js";
import { t as $ } from "./Icon-y0y4QmKo.js";
import { t as tn } from "./Space-DRVg8nuM.js";
import { n as nn, t as rn } from "./ListItem-DOTKksGl.js";
import { r as an } from "./VueMarkdown-CcehgDyL.js";
import { t as on } from "./core-C47BeAL_.js";
var sn = function() {
  return pt.Date.now();
}, cn = `Expected a function`, ln = Math.max, un = Math.min;
function dn(e2, t2, n2) {
  var r2, i2, a2, o2, s2, c2, l2 = 0, u2 = false, d2 = false, f2 = true;
  if (typeof e2 != `function`) throw TypeError(cn);
  t2 = P(t2) || 0, it(n2) && (u2 = !!n2.leading, d2 = `maxWait` in n2, a2 = d2 ? ln(P(n2.maxWait) || 0, t2) : a2, f2 = `trailing` in n2 ? !!n2.trailing : f2);
  function p2(t3) {
    var n3 = r2, a3 = i2;
    return r2 = i2 = void 0, l2 = t3, o2 = e2.apply(a3, n3), o2;
  }
  function m2(e3) {
    return l2 = e3, s2 = setTimeout(_2, t2), u2 ? p2(e3) : o2;
  }
  function h2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2, i3 = t2 - n3;
    return d2 ? un(i3, a2 - r3) : i3;
  }
  function g2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2;
    return c2 === void 0 || n3 >= t2 || n3 < 0 || d2 && r3 >= a2;
  }
  function _2() {
    var e3 = sn();
    if (g2(e3)) return v2(e3);
    s2 = setTimeout(_2, h2(e3));
  }
  function v2(e3) {
    return s2 = void 0, f2 && r2 ? p2(e3) : (r2 = i2 = void 0, o2);
  }
  function y2() {
    s2 !== void 0 && clearTimeout(s2), l2 = 0, r2 = c2 = i2 = s2 = void 0;
  }
  function b2() {
    return s2 === void 0 ? o2 : v2(sn());
  }
  function x2() {
    var e3 = sn(), n3 = g2(e3);
    if (r2 = arguments, i2 = this, c2 = e3, n3) {
      if (s2 === void 0) return m2(c2);
      if (d2) return clearTimeout(s2), s2 = setTimeout(_2, t2), p2(c2);
    }
    return s2 === void 0 && (s2 = setTimeout(_2, t2)), o2;
  }
  return x2.cancel = y2, x2.flush = b2, x2;
}
var fn = dn, pn = `Expected a function`;
function mn(e2, t2, n2) {
  var r2 = true, i2 = true;
  if (typeof e2 != `function`) throw TypeError(pn);
  return it(n2) && (r2 = `leading` in n2 ? !!n2.leading : r2, i2 = `trailing` in n2 ? !!n2.trailing : i2), fn(e2, t2, { leading: r2, maxWait: t2, trailing: i2 });
}
var hn = mn, gn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, _n = X({ name: `Calendar`, render: function(e2, t2) {
  return Z(), W(`svg`, gn, t2[0] || (t2[0] = [bt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path></g>`, 1)]));
} }), vn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, yn = X({ name: `DeviceFloppy`, render: function(e2, t2) {
  return Z(), W(`svg`, vn, t2[0] || (t2[0] = [H(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [H(`path`, { d: `M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2` }), H(`circle`, { cx: `12`, cy: `14`, r: `2` }), H(`path`, { d: `M14 4v4H8V4` })], -1)]));
} }), bn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, xn = X({ name: `Folder`, render: function(e2, t2) {
  return Z(), W(`svg`, bn, t2[0] || (t2[0] = [H(`path`, { d: `M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2`, fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, null, -1)]));
} }), Sn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Cn = X({ name: `List`, render: function(e2, t2) {
  return Z(), W(`svg`, Sn, t2[0] || (t2[0] = [bt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11"></path><path d="M9 12h11"></path><path d="M9 18h11"></path><path d="M5 6v.01"></path><path d="M5 12v.01"></path><path d="M5 18v.01"></path></g>`, 1)]));
} });
const wn = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, "2xl": 1920 };
function Tn(e2) {
  return `(min-width: ${e2}px)`;
}
var En = {};
function Dn(e2 = wn) {
  if (!Fe || typeof window.matchMedia != `function`) return q(() => []);
  let t2 = U({}), n2 = Object.keys(e2), r2 = (e3, n3) => {
    e3.matches ? t2.value[n3] = true : t2.value[n3] = false;
  };
  return n2.forEach((t3) => {
    let n3 = e2[t3], i2, a2;
    En[n3] === void 0 ? (i2 = window.matchMedia(Tn(n3)), i2.addEventListener ? i2.addEventListener(`change`, (e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }) : i2.addListener && i2.addListener((e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }), a2 = /* @__PURE__ */ new Set(), En[n3] = { mql: i2, cbs: a2 }) : (i2 = En[n3].mql, a2 = En[n3].cbs), a2.add(r2), i2.matches && a2.forEach((e3) => {
      e3(i2, t3);
    });
  }), Ye(() => {
    n2.forEach((t3) => {
      let { cbs: n3 } = En[e2[t3]];
      n3.has(r2) && n3.delete(r2);
    });
  }), q(() => {
    let { value: e3 } = t2;
    return n2.filter((t3) => e3[t3]);
  });
}
var On = Dn, kn = Me(`.v-x-scroll`, { overflow: `auto`, scrollbarWidth: `none` }, [Me(`&::-webkit-scrollbar`, { width: 0, height: 0 })]), An = X({ name: `XScroll`, props: { disabled: Boolean, onScroll: Function }, setup() {
  let e2 = U(null);
  function t2(e3) {
    !(e3.currentTarget.offsetWidth < e3.currentTarget.scrollWidth) || e3.deltaY === 0 || (e3.currentTarget.scrollLeft += e3.deltaY + e3.deltaX, e3.preventDefault());
  }
  let n2 = f();
  return kn.mount({ id: `vueuc/x-scroll`, head: true, anchorMetaName: je, ssr: n2 }), Object.assign({ selfRef: e2, handleWheel: t2 }, { scrollTo(...t3) {
    var n3;
    (n3 = e2.value) == null || n3.scrollTo(...t3);
  } });
}, render() {
  return z(`div`, { ref: `selfRef`, onScroll: this.onScroll, onWheel: this.disabled ? void 0 : this.handleWheel, class: `v-x-scroll` }, this.$slots);
} });
function jn(e2) {
  var _a;
  let t2 = (_a = e2.dirs) == null ? void 0 : _a.find(({ dir: e3 }) => e3 === vt);
  return !!(t2 && t2.value === false);
}
var Mn = X({ name: `Remove`, render() {
  return z(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 512 512` }, z(`line`, { x1: `400`, y1: `256`, x2: `112`, y2: `256`, style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      ` }));
} }), Nn = w(`input-group`, `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [M(`>`, [w(`input`, [M(`&:not(:last-child)`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), M(`&:not(:first-child)`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), w(`button`, [M(`&:not(:last-child)`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [A(`state-border, border`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), M(`&:not(:first-child)`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [A(`state-border, border`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), M(`*`, [M(`&:not(:last-child)`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [M(`>`, [w(`input`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), w(`base-selection`, [w(`base-selection-label`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), w(`base-selection-tags`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), A(`box-shadow, border, state-border`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), M(`&:not(:first-child)`, `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [M(`>`, [w(`input`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), w(`base-selection`, [w(`base-selection-label`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), w(`base-selection-tags`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), A(`box-shadow, border, state-border`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), Pn = X({ name: `InputGroup`, props: {}, setup(e2) {
  let { mergedClsPrefixRef: t2 } = pe(e2);
  return se(`-input-group`, Nn, t2), { mergedClsPrefix: t2 };
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return z(`div`, { class: `${e2}-input-group` }, this.$slots);
} });
function Fn(e2, t2) {
  switch (e2[0]) {
    case `hex`:
      return t2 ? `#000000FF` : `#000000`;
    case `rgb`:
      return t2 ? `rgba(0, 0, 0, 1)` : `rgb(0, 0, 0)`;
    case `hsl`:
      return t2 ? `hsla(0, 0%, 0%, 1)` : `hsl(0, 0%, 0%)`;
    case `hsv`:
      return t2 ? `hsva(0, 0%, 0%, 1)` : `hsv(0, 0%, 0%)`;
  }
  return `#000000`;
}
function In(e2) {
  return e2 === null ? null : /^ *#/.test(e2) ? `hex` : e2.includes(`rgb`) ? `rgb` : e2.includes(`hsl`) ? `hsl` : e2.includes(`hsv`) ? `hsv` : null;
}
function Ln(e2, t2 = [255, 255, 255], n2 = `AA`) {
  let [r2, i2, a2, o2] = s(ce(e2));
  if (o2 === 1) {
    let e3 = Rn([r2, i2, a2]), o3 = Rn(t2);
    return (Math.max(e3, o3) + 0.05) / (Math.min(e3, o3) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
  }
  let c2 = Rn([Math.round(r2 * o2 + t2[0] * (1 - o2)), Math.round(i2 * o2 + t2[1] * (1 - o2)), Math.round(a2 * o2 + t2[2] * (1 - o2))]), l2 = Rn(t2);
  return (Math.max(c2, l2) + 0.05) / (Math.min(c2, l2) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
}
function Rn(e2) {
  let [t2, n2, r2] = e2.map((e3) => (e3 /= 255, e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4));
  return 0.2126 * t2 + 0.7152 * n2 + 0.0722 * r2;
}
function zn(e2) {
  return e2 = Math.round(e2), e2 >= 360 ? 359 : e2 < 0 ? 0 : e2;
}
function Bn(e2) {
  return e2 = Math.round(e2 * 100) / 100, e2 > 1 ? 1 : e2 < 0 ? 0 : e2;
}
var Vn = { rgb: { hex(e2) {
  return o(s(e2));
}, hsl(e2) {
  let [t2, n2, r2, i2] = s(e2);
  return ce([...oe(t2, n2, r2), i2]);
}, hsv(e2) {
  let [t2, n2, r2, i2] = s(e2);
  return b([...le(t2, n2, r2), i2]);
} }, hex: { rgb(e2) {
  return x(s(e2));
}, hsl(e2) {
  let [t2, n2, r2, i2] = s(e2);
  return ce([...oe(t2, n2, r2), i2]);
}, hsv(e2) {
  let [t2, n2, r2, i2] = s(e2);
  return b([...le(t2, n2, r2), i2]);
} }, hsl: { hex(t2) {
  let [r2, i2, a2, s2] = n(t2);
  return o([...e(r2, i2, a2), s2]);
}, rgb(t2) {
  let [r2, i2, a2, o2] = n(t2);
  return x([...e(r2, i2, a2), o2]);
}, hsv(e2) {
  let [t2, r2, i2, a2] = n(e2);
  return b([...h(t2, r2, i2), a2]);
} }, hsv: { hex(e2) {
  let [t2, n2, r2, i2] = _(e2);
  return o([...fe(t2, n2, r2), i2]);
}, rgb(e2) {
  let [t2, n2, r2, i2] = _(e2);
  return x([...fe(t2, n2, r2), i2]);
}, hsl(e2) {
  let [t2, n2, r2, i2] = _(e2);
  return ce([...T(t2, n2, r2), i2]);
} } };
function Hn(e2, t2, n2) {
  return n2 || (n2 = In(e2)), n2 ? n2 === t2 ? e2 : Vn[n2][t2](e2) : null;
}
var Un = `12px`, Wn = 12, Gn = `6px`, Kn = X({ name: `AlphaSlider`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, alpha: { type: Number, default: 0 }, onUpdateAlpha: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = U(null);
  function n2(n3) {
    !t2.value || !e2.rgba || (He(`mousemove`, document, r2), He(`mouseup`, document, i2), r2(n3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = (n3.clientX - a2) / (i3 - Wn);
    e2.onUpdateAlpha(Bn(o2));
  }
  function i2() {
    var t3;
    Pe(`mousemove`, document, r2), Pe(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, railBackgroundImage: q(() => {
    let { rgba: t3 } = e2;
    return t3 ? `linear-gradient(to right, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 0) 0%, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 1) 100%)` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return z(`div`, { class: `${e2}-color-picker-slider`, ref: `railRef`, style: { height: Un, borderRadius: Gn }, onMousedown: this.handleMouseDown }, z(`div`, { style: { borderRadius: Gn, position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, overflow: `hidden` } }, z(`div`, { class: `${e2}-color-picker-checkboard` }), z(`div`, { class: `${e2}-color-picker-slider__image`, style: { backgroundImage: this.railBackgroundImage } })), this.rgba && z(`div`, { style: { position: `absolute`, left: Gn, right: Gn, top: 0, bottom: 0 } }, z(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc(${this.alpha * 100}% - ${Gn})`, borderRadius: Gn, width: Un, height: Un } }, z(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: x(this.rgba), borderRadius: Gn, width: Un, height: Un } }))));
} });
const qn = a(`n-color-picker`);
function Jn(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 255)) : false;
}
function Yn(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 360)) : false;
}
function Xn(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 100)) : false;
}
function Zn(e2) {
  let t2 = e2.trim();
  return /^#[0-9a-fA-F]+$/.test(t2) ? [4, 5, 7, 9].includes(t2.length) : false;
}
function Qn(e2) {
  return /^\d{1,3}\.?\d*%$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2) / 100, 100)) : false;
}
var $n = { paddingSmall: `0 4px` }, er = X({ name: `ColorInputUnit`, props: { label: { type: String, required: true }, value: { type: [Number, String], default: null }, showAlpha: Boolean, onUpdateValue: { type: Function, required: true } }, setup(e2) {
  let t2 = U(``), { themeRef: n2 } = $e(qn, null);
  rt(() => {
    t2.value = r2();
  });
  function r2() {
    let { value: t3 } = e2;
    if (t3 === null) return ``;
    let { label: n3 } = e2;
    return n3 === `HEX` ? t3 : n3 === `A` ? `${Math.floor(t3 * 100)}%` : String(Math.floor(t3));
  }
  function i2(e3) {
    t2.value = e3;
  }
  function a2(n3) {
    let i3, a3;
    switch (e2.label) {
      case `HEX`:
        a3 = Zn(n3), a3 && e2.onUpdateValue(n3), t2.value = r2();
        break;
      case `H`:
        i3 = Yn(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `S`:
      case `L`:
      case `V`:
        i3 = Xn(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `A`:
        i3 = Qn(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `R`:
      case `G`:
      case `B`:
        i3 = Jn(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
    }
  }
  return { mergedTheme: n2, inputValue: t2, handleInputChange: a2, handleInputUpdateValue: i2 };
}, render() {
  let { mergedTheme: e2 } = this;
  return z($t, { size: `small`, placeholder: this.label, theme: e2.peers.Input, themeOverrides: e2.peerOverrides.Input, builtinThemeOverrides: $n, value: this.inputValue, onUpdateValue: this.handleInputUpdateValue, onChange: this.handleInputChange, style: this.label === `A` ? `flex-grow: 1.25;` : `` });
} }), tr = X({ name: `ColorInput`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, modes: { type: Array, required: true }, showAlpha: { type: Boolean, required: true }, value: { type: String, default: null }, valueArr: { type: Array, default: null }, onUpdateValue: { type: Function, required: true }, onUpdateMode: { type: Function, required: true } }, setup(e2) {
  return { handleUnitUpdateValue(t2, n2) {
    let { showAlpha: r2 } = e2;
    if (e2.mode === `hex`) {
      e2.onUpdateValue((r2 ? o : v)(n2));
      return;
    }
    let i2;
    switch (i2 = e2.valueArr === null ? [0, 0, 0, 0] : Array.from(e2.valueArr), e2.mode) {
      case `hsv`:
        i2[t2] = n2, e2.onUpdateValue((r2 ? b : l)(i2));
        break;
      case `rgb`:
        i2[t2] = n2, e2.onUpdateValue((r2 ? x : y)(i2));
        break;
      case `hsl`:
        i2[t2] = n2, e2.onUpdateValue((r2 ? ce : u)(i2));
        break;
    }
  } };
}, render() {
  let { clsPrefix: e2, modes: t2 } = this;
  return z(`div`, { class: `${e2}-color-picker-input` }, z(`div`, { class: `${e2}-color-picker-input__mode`, onClick: this.onUpdateMode, style: { cursor: t2.length === 1 ? `` : `pointer` } }, this.mode.toUpperCase() + (this.showAlpha ? `A` : ``)), z(Pn, null, { default: () => {
    let { mode: e3, valueArr: t3, showAlpha: n2 } = this;
    if (e3 === `hex`) {
      let e4 = null;
      try {
        e4 = t3 === null ? null : (n2 ? o : v)(t3);
      } catch {
      }
      return z(er, { label: `HEX`, showAlpha: n2, value: e4, onUpdateValue: (e5) => {
        this.handleUnitUpdateValue(0, e5);
      } });
    }
    return (e3 + (n2 ? `a` : ``)).split(``).map((e4, n3) => z(er, { label: e4.toUpperCase(), value: t3 === null ? null : t3[n3], onUpdateValue: (e5) => {
      this.handleUnitUpdateValue(n3, e5);
    } }));
  } }));
} });
function nr(e2, t2) {
  if (t2 === `hsv`) {
    let [t3, n2, r2, i2] = _(e2);
    return x([...fe(t3, n2, r2), i2]);
  }
  return e2;
}
function rr(e2) {
  let t2 = document.createElement(`canvas`).getContext(`2d`);
  return t2 ? (t2.fillStyle = e2, t2.fillStyle) : `#000000`;
}
var ir = X({ name: `ColorPickerSwatches`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, swatches: { type: Array, required: true }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  let t2 = q(() => e2.swatches.map((e3) => {
    let t3 = In(e3);
    return { value: e3, mode: t3, legalValue: nr(e3, t3) };
  }));
  function n2(t3) {
    let { mode: n3 } = e2, { value: r3, mode: i3 } = t3;
    return i3 || (i3 = `hex`, /^[a-zA-Z]+$/.test(r3) ? r3 = rr(r3) : (ae(`color-picker`, `color ${r3} in swatches is invalid.`), r3 = `#000000`)), i3 === n3 ? r3 : Hn(r3, n3, i3);
  }
  function r2(t3) {
    e2.onUpdateColor(n2(t3));
  }
  function i2(e3, t3) {
    e3.key === `Enter` && r2(t3);
  }
  return { parsedSwatchesRef: t2, handleSwatchSelect: r2, handleSwatchKeyDown: i2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return z(`div`, { class: `${e2}-color-picker-swatches` }, this.parsedSwatchesRef.map((t2) => z(`div`, { class: `${e2}-color-picker-swatch`, tabindex: 0, onClick: () => {
    this.handleSwatchSelect(t2);
  }, onKeydown: (e3) => {
    this.handleSwatchKeyDown(e3, t2);
  } }, z(`div`, { class: `${e2}-color-picker-swatch__fill`, style: { background: t2.legalValue } }))));
} }), ar = X({ name: `ColorPickerTrigger`, slots: Object, props: { clsPrefix: { type: String, required: true }, value: { type: String, default: null }, hsla: { type: Array, default: null }, disabled: Boolean, onClick: Function }, setup(e2) {
  let { colorPickerSlots: t2, renderLabelRef: n2 } = $e(qn, null);
  return () => {
    let { hsla: r2, value: i2, clsPrefix: a2, onClick: o2, disabled: s2 } = e2, c2 = t2.label || n2.value;
    return z(`div`, { class: [`${a2}-color-picker-trigger`, s2 && `${a2}-color-picker-trigger--disabled`], onClick: s2 ? void 0 : o2 }, z(`div`, { class: `${a2}-color-picker-trigger__fill` }, z(`div`, { class: `${a2}-color-picker-checkboard` }), z(`div`, { style: { position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: r2 ? ce(r2) : `` } }), i2 && r2 ? z(`div`, { class: `${a2}-color-picker-trigger__value`, style: { color: Ln(r2) ? `white` : `black` } }, c2 ? c2(i2) : i2) : null));
  };
} }), or = X({ name: `ColorPreview`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, color: { type: String, default: null, validator: (e2) => {
  let t2 = In(e2);
  return !!(!e2 || t2 && t2 !== `hsv`);
} }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  function t2(t3) {
    var n2;
    let r2 = t3.target.value;
    (n2 = e2.onUpdateColor) == null || n2.call(e2, Hn(r2.toUpperCase(), e2.mode, `hex`)), t3.stopPropagation();
  }
  return { handleChange: t2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return z(`div`, { class: `${e2}-color-picker-preview__preview` }, z(`span`, { class: `${e2}-color-picker-preview__fill`, style: { background: this.color || `#000000` } }), z(`input`, { class: `${e2}-color-picker-preview__input`, type: `color`, value: this.color, onChange: this.handleChange }));
} }), sr = `12px`, cr = 12, lr = `6px`, ur = 6, dr = `linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`, fr = X({ name: `HueSlider`, props: { clsPrefix: { type: String, required: true }, hue: { type: Number, required: true }, onUpdateHue: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = U(null);
  function n2(e3) {
    t2.value && (He(`mousemove`, document, r2), He(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = zn((n3.clientX - a2 - ur) / (i3 - cr) * 360);
    e2.onUpdateHue(o2);
  }
  function i2() {
    var t3;
    Pe(`mousemove`, document, r2), Pe(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return z(`div`, { class: `${e2}-color-picker-slider`, style: { height: sr, borderRadius: lr } }, z(`div`, { ref: `railRef`, style: { boxShadow: `inset 0 0 2px 0 rgba(0, 0, 0, .24)`, boxSizing: `border-box`, backgroundImage: dr, height: sr, borderRadius: lr, position: `relative` }, onMousedown: this.handleMouseDown }, z(`div`, { style: { position: `absolute`, left: lr, right: lr, top: 0, bottom: 0 } }, z(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc((${this.hue}%) / 359 * 100 - ${lr})`, borderRadius: lr, width: sr, height: sr } }, z(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: `hsl(${this.hue}, 100%, 50%)`, borderRadius: lr, width: sr, height: sr } })))));
} }), pr = `12px`, mr = `6px`, hr = X({ name: `Pallete`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, displayedHue: { type: Number, required: true }, displayedSv: { type: Array, required: true }, onUpdateSV: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = U(null);
  function n2(e3) {
    t2.value && (He(`mousemove`, document, r2), He(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, height: a2, left: o2, bottom: s2 } = r3.getBoundingClientRect(), c2 = (s2 - n3.clientY) / a2, l2 = (n3.clientX - o2) / i3, u2 = 100 * (l2 > 1 ? 1 : l2 < 0 ? 0 : l2), d2 = 100 * (c2 > 1 ? 1 : c2 < 0 ? 0 : c2);
    e2.onUpdateSV(u2, d2);
  }
  function i2() {
    var t3;
    Pe(`mousemove`, document, r2), Pe(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { palleteRef: t2, handleColor: q(() => {
    let { rgba: t3 } = e2;
    return t3 ? `rgb(${t3[0]}, ${t3[1]}, ${t3[2]})` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return z(`div`, { class: `${e2}-color-picker-pallete`, onMousedown: this.handleMouseDown, ref: `palleteRef` }, z(`div`, { class: `${e2}-color-picker-pallete__layer`, style: { backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))` } }), z(`div`, { class: `${e2}-color-picker-pallete__layer ${e2}-color-picker-pallete__layer--shadowed`, style: { backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))` } }), this.rgba && z(`div`, { class: `${e2}-color-picker-handle`, style: { width: pr, height: pr, borderRadius: mr, left: `calc(${this.displayedSv[0]}% - ${mr})`, bottom: `calc(${this.displayedSv[1]}% - ${mr})` } }, z(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: this.handleColor, borderRadius: mr, width: pr, height: pr } })));
} }), gr = M([w(`color-picker`, `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), w(`color-picker-panel`, `
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `, [zt(), w(`input`, `
 text-align: center;
 `)]), w(`color-picker-checkboard`, `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [M(`&::after`, `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), w(`color-picker-slider`, `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [A(`image`, `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), M(`&::after`, `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), w(`color-picker-handle`, `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [A(`fill`, `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), w(`color-picker-pallete`, `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [A(`layer`, `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [O(`shadowed`, `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), w(`color-picker-preview`, `
 display: flex;
 `, [A(`sliders`, `
 flex: 1 0 auto;
 `), A(`preview`, `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), A(`fill`, `
 display: block;
 width: 30px;
 height: 30px;
 `), A(`input`, `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), w(`color-picker-input`, `
 display: flex;
 align-items: center;
 `, [w(`input`, `
 flex-grow: 1;
 flex-basis: 0;
 `), A(`mode`, `
 width: 72px;
 text-align: center;
 `)]), w(`color-picker-control`, `
 padding: 12px;
 `), w(`color-picker-action`, `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [w(`button`, `margin-left: 8px;`)]), w(`color-picker-trigger`, `
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `, [A(`value`, `
 white-space: nowrap;
 position: relative;
 `), A(`fill`, `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), O(`disabled`, `cursor: not-allowed`), w(`color-picker-checkboard`, `
 border-radius: var(--n-border-radius);
 `, [M(`&::after`, `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), w(`color-picker-swatches`, `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [w(`color-picker-swatch`, `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [A(`fill`, `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), M(`&:focus`, `
 outline: none;
 `, [A(`fill`, [M(`&::after`, `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]), _r = X({ name: `ColorPicker`, props: Object.assign(Object.assign({}, E.props), { value: String, show: { type: Boolean, default: void 0 }, defaultShow: Boolean, defaultValue: String, modes: { type: Array, default: () => [`rgb`, `hex`, `hsl`] }, placement: { type: String, default: `bottom-start` }, to: Le.propTo, showAlpha: { type: Boolean, default: true }, showPreview: Boolean, swatches: Array, disabled: { type: Boolean, default: void 0 }, actions: { type: Array, default: null }, internalActions: Array, size: String, renderLabel: Function, onComplete: Function, onConfirm: Function, onClear: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), slots: Object, setup(t2, { slots: r2 }) {
  let i2 = U(null), a2 = null, d2 = Xt(t2), { mergedSizeRef: f2, mergedDisabledRef: m2 } = d2, { localeRef: g2 } = Qt(`global`), { mergedClsPrefixRef: ee2, namespaceRef: te2, inlineThemeDisabled: C2 } = pe(t2), w2 = E(`ColorPicker`, `-color-picker`, gr, Dt, t2, ee2);
  Je(qn, { themeRef: w2, renderLabelRef: G(t2, `renderLabel`), colorPickerSlots: r2 });
  let re2 = U(t2.defaultShow), D2 = Be(G(t2, `show`), re2);
  function ie2(e2) {
    let { onUpdateShow: n2, "onUpdate:show": r3 } = t2;
    n2 && p(n2, e2), r3 && p(r3, e2), re2.value = e2;
  }
  let { defaultValue: ae2 } = t2, O2 = U(ae2 === void 0 ? Fn(t2.modes, t2.showAlpha) : ae2), k2 = Be(G(t2, `value`), O2), se2 = U([k2.value]), A2 = U(0), ue2 = q(() => In(k2.value)), { modes: de2 } = t2, j2 = U(In(k2.value) || de2[0] || `rgb`);
  function M2() {
    let { modes: e2 } = t2, { value: n2 } = j2, r3 = e2.findIndex((e3) => e3 === n2);
    ~r3 ? j2.value = e2[(r3 + 1) % e2.length] : j2.value = `rgb`;
  }
  let N2, P2, me2, he2, ge2, _e2, ve2, F2, ye2 = q(() => {
    let { value: e2 } = k2;
    if (!e2) return null;
    switch (ue2.value) {
      case `hsv`:
        return _(e2);
      case `hsl`:
        return [N2, P2, me2, F2] = n(e2), [...h(N2, P2, me2), F2];
      case `rgb`:
      case `hex`:
        return [ge2, _e2, ve2, F2] = s(e2), [...le(ge2, _e2, ve2), F2];
    }
  }), be2 = q(() => {
    let { value: t3 } = k2;
    if (!t3) return null;
    switch (ue2.value) {
      case `rgb`:
      case `hex`:
        return s(t3);
      case `hsv`:
        return [N2, P2, he2, F2] = _(t3), [...fe(N2, P2, he2), F2];
      case `hsl`:
        return [N2, P2, me2, F2] = n(t3), [...e(N2, P2, me2), F2];
    }
  }), xe2 = q(() => {
    let { value: e2 } = k2;
    if (!e2) return null;
    switch (ue2.value) {
      case `hsl`:
        return n(e2);
      case `hsv`:
        return [N2, P2, he2, F2] = _(e2), [...T(N2, P2, he2), F2];
      case `rgb`:
      case `hex`:
        return [ge2, _e2, ve2, F2] = s(e2), [...oe(ge2, _e2, ve2), F2];
    }
  }), Se2 = q(() => {
    switch (j2.value) {
      case `rgb`:
      case `hex`:
        return be2.value;
      case `hsv`:
        return ye2.value;
      case `hsl`:
        return xe2.value;
    }
  }), I2 = U(0), Ce2 = U(1), we2 = U([0, 0]);
  function Te2(e2, n2) {
    let { value: r3 } = ye2, i3 = I2.value, a3 = r3 ? r3[3] : 1;
    we2.value = [e2, n2];
    let { showAlpha: s2 } = t2;
    switch (j2.value) {
      case `hsv`:
        L2((s2 ? b : l)([i3, e2, n2, a3]), `cursor`);
        break;
      case `hsl`:
        L2((s2 ? ce : u)([...T(i3, e2, n2), a3]), `cursor`);
        break;
      case `rgb`:
        L2((s2 ? x : y)([...fe(i3, e2, n2), a3]), `cursor`);
        break;
      case `hex`:
        L2((s2 ? o : v)([...fe(i3, e2, n2), a3]), `cursor`);
        break;
    }
  }
  function Ee2(e2) {
    I2.value = e2;
    let { value: n2 } = ye2;
    if (!n2) return;
    let [, r3, i3, a3] = n2, { showAlpha: s2 } = t2;
    switch (j2.value) {
      case `hsv`:
        L2((s2 ? b : l)([e2, r3, i3, a3]), `cursor`);
        break;
      case `rgb`:
        L2((s2 ? x : y)([...fe(e2, r3, i3), a3]), `cursor`);
        break;
      case `hex`:
        L2((s2 ? o : v)([...fe(e2, r3, i3), a3]), `cursor`);
        break;
      case `hsl`:
        L2((s2 ? ce : u)([...T(e2, r3, i3), a3]), `cursor`);
        break;
    }
  }
  function De2(e2) {
    switch (j2.value) {
      case `hsv`:
        [N2, P2, he2] = ye2.value, L2(b([N2, P2, he2, e2]), `cursor`);
        break;
      case `rgb`:
        [ge2, _e2, ve2] = be2.value, L2(x([ge2, _e2, ve2, e2]), `cursor`);
        break;
      case `hex`:
        [ge2, _e2, ve2] = be2.value, L2(o([ge2, _e2, ve2, e2]), `cursor`);
        break;
      case `hsl`:
        [N2, P2, me2] = xe2.value, L2(ce([N2, P2, me2, e2]), `cursor`);
        break;
    }
    Ce2.value = e2;
  }
  function L2(e2, n2) {
    a2 = n2 === `cursor` ? e2 : null;
    let { nTriggerFormChange: r3, nTriggerFormInput: i3 } = d2, { onUpdateValue: o2, "onUpdate:value": s2 } = t2;
    o2 && p(o2, e2), s2 && p(s2, e2), r3(), i3(), O2.value = e2;
  }
  function Oe2(e2) {
    L2(e2, `input`), Qe(ke2);
  }
  function ke2(e2 = true) {
    let { value: n2 } = k2;
    if (n2) {
      let { nTriggerFormChange: r3, nTriggerFormInput: i3 } = d2, { onComplete: a3 } = t2;
      a3 && a3(n2);
      let { value: o2 } = se2, { value: s2 } = A2;
      e2 && (o2.splice(s2 + 1, o2.length, n2), A2.value = s2 + 1), r3(), i3();
    }
  }
  function Ae2() {
    let { value: e2 } = A2;
    e2 - 1 < 0 || (L2(se2.value[e2 - 1], `input`), ke2(false), A2.value = e2 - 1);
  }
  function je2() {
    let { value: e2 } = A2;
    e2 < 0 || e2 + 1 >= se2.value.length || (L2(se2.value[e2 + 1], `input`), ke2(false), A2.value = e2 + 1);
  }
  function Me2() {
    L2(null, `input`);
    let { onClear: e2 } = t2;
    e2 && e2(), ie2(false);
  }
  function Ne2() {
    let { value: e2 } = k2, { onConfirm: n2 } = t2;
    n2 && n2(e2), ie2(false);
  }
  let Pe2 = q(() => A2.value >= 1), Fe2 = q(() => {
    let { value: e2 } = se2;
    return e2.length > 1 && A2.value < e2.length - 1;
  });
  Xe(D2, (e2) => {
    e2 || (se2.value = [k2.value], A2.value = 0);
  }), rt(() => {
    if (!(a2 && a2 === k2.value)) {
      let { value: e2 } = ye2;
      e2 && (I2.value = e2[0], Ce2.value = e2[3], we2.value = [e2[1], e2[2]]);
    }
    a2 = null;
  });
  let Ie2 = q(() => {
    let { value: e2 } = f2, { common: { cubicBezierEaseInOut: t3 }, self: { textColor: n2, color: r3, panelFontSize: i3, boxShadow: a3, border: o2, borderRadius: s2, dividerColor: c2, [ne(`height`, e2)]: l2, [ne(`fontSize`, e2)]: u2 } } = w2.value;
    return { "--n-bezier": t3, "--n-text-color": n2, "--n-color": r3, "--n-panel-font-size": i3, "--n-font-size": u2, "--n-box-shadow": a3, "--n-border": o2, "--n-border-radius": s2, "--n-height": l2, "--n-divider-color": c2 };
  }), ze2 = C2 ? S(`color-picker`, q(() => f2.value[0]), Ie2, t2) : void 0;
  function Ve2() {
    var _a;
    let { value: e2 } = be2, { value: n2 } = I2, { internalActions: i3, modes: a3, actions: o2 } = t2, { value: s2 } = w2, { value: c2 } = ee2;
    return z(`div`, { class: [`${c2}-color-picker-panel`, ze2 == null ? void 0 : ze2.themeClass.value], onDragstart: (e3) => {
      e3.preventDefault();
    }, style: C2 ? void 0 : Ie2.value }, z(`div`, { class: `${c2}-color-picker-control` }, z(hr, { clsPrefix: c2, rgba: e2, displayedHue: n2, displayedSv: we2.value, onUpdateSV: Te2, onComplete: ke2 }), z(`div`, { class: `${c2}-color-picker-preview` }, z(`div`, { class: `${c2}-color-picker-preview__sliders` }, z(fr, { clsPrefix: c2, hue: n2, onUpdateHue: Ee2, onComplete: ke2 }), t2.showAlpha ? z(Kn, { clsPrefix: c2, rgba: e2, alpha: Ce2.value, onUpdateAlpha: De2, onComplete: ke2 }) : null), t2.showPreview ? z(or, { clsPrefix: c2, mode: j2.value, color: be2.value && v(be2.value), onUpdateColor: (e3) => {
      L2(e3, `input`);
    } }) : null), z(tr, { clsPrefix: c2, showAlpha: t2.showAlpha, mode: j2.value, modes: a3, onUpdateMode: M2, value: k2.value, valueArr: Se2.value, onUpdateValue: Oe2 }), ((_a = t2.swatches) == null ? void 0 : _a.length) && z(ir, { clsPrefix: c2, mode: j2.value, swatches: t2.swatches, onUpdateColor: (e3) => {
      L2(e3, `input`);
    } })), (o2 == null ? void 0 : o2.length) ? z(`div`, { class: `${c2}-color-picker-action` }, o2.includes(`confirm`) && z(Q, { size: `small`, onClick: Ne2, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => g2.value.confirm }), o2.includes(`clear`) && z(Q, { size: `small`, onClick: Me2, disabled: !k2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => g2.value.clear })) : null, r2.action ? z(`div`, { class: `${c2}-color-picker-action` }, { default: r2.action }) : i3 ? z(`div`, { class: `${c2}-color-picker-action` }, i3.includes(`undo`) && z(Q, { size: `small`, onClick: Ae2, disabled: !Pe2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => g2.value.undo }), i3.includes(`redo`) && z(Q, { size: `small`, onClick: je2, disabled: !Fe2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => g2.value.redo })) : null);
  }
  return { mergedClsPrefix: ee2, namespace: te2, selfRef: i2, hsla: xe2, rgba: be2, mergedShow: D2, mergedDisabled: m2, isMounted: c(), adjustedTo: Le(t2), mergedValue: k2, handleTriggerClick() {
    ie2(true);
  }, handleClickOutside(e2) {
    var _a;
    ((_a = i2.value) == null ? void 0 : _a.contains(Re(e2))) || ie2(false);
  }, renderPanel: Ve2, cssVars: C2 ? void 0 : Ie2, themeClass: ze2 == null ? void 0 : ze2.themeClass, onRender: ze2 == null ? void 0 : ze2.onRender };
}, render() {
  let { mergedClsPrefix: e2, onRender: t2 } = this;
  return t2 == null ? void 0 : t2(), z(`div`, { class: [this.themeClass, `${e2}-color-picker`], ref: `selfRef`, style: this.cssVars }, z(We, null, { default: () => [z(Ae, null, { default: () => z(ar, { clsPrefix: e2, value: this.mergedValue, hsla: this.hsla, disabled: this.mergedDisabled, onClick: this.handleTriggerClick }) }), z(Ke, { placement: this.placement, show: this.mergedShow, containerClass: this.namespace, teleportDisabled: this.adjustedTo === Le.tdkey, to: this.adjustedTo }, { default: () => z(gt, { name: `fade-in-scale-up-transition`, appear: this.isMounted }, { default: () => this.mergedShow ? at(this.renderPanel(), [[Ge, this.handleClickOutside, void 0, { capture: true }]]) : null }) })] }));
} }), vr = w(`dynamic-tags`, [w(`input`, { minWidth: `var(--n-input-width)` })]), yr = X({ name: `DynamicTags`, props: Object.assign(Object.assign(Object.assign({}, E.props), Kt), { size: { type: String, default: `medium` }, closable: { type: Boolean, default: true }, defaultValue: { type: Array, default: () => [] }, value: Array, inputClass: String, inputStyle: [String, Object], inputProps: Object, max: Number, tagClass: String, tagStyle: [String, Object], renderTag: Function, onCreate: { type: Function, default: (e2) => e2 }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = pe(e2), { localeRef: r2 } = Qt(`DynamicTags`), i2 = Xt(e2), { mergedDisabledRef: a2 } = i2, o2 = U(``), s2 = U(false), c2 = U(true), l2 = U(null), u2 = E(`DynamicTags`, `-dynamic-tags`, vr, At, e2, t2), d2 = U(e2.defaultValue), f2 = Be(G(e2, `value`), d2), m2 = q(() => r2.value.add), h2 = q(() => Wt(e2.size)), g2 = q(() => a2.value || !!e2.max && f2.value.length >= e2.max);
  function _2(t3) {
    let { onChange: n3, "onUpdate:value": r3, onUpdateValue: a3 } = e2, { nTriggerFormInput: o3, nTriggerFormChange: s3 } = i2;
    n3 && p(n3, t3), a3 && p(a3, t3), r3 && p(r3, t3), d2.value = t3, o3(), s3();
  }
  function v2(e3) {
    let t3 = f2.value.slice(0);
    t3.splice(e3, 1), _2(t3);
  }
  function y2(e3) {
    switch (e3.key) {
      case `Enter`:
        b2();
    }
  }
  function b2(t3) {
    let n3 = t3 ?? o2.value;
    if (n3) {
      let t4 = f2.value.slice(0);
      t4.push(e2.onCreate(n3)), _2(t4);
    }
    s2.value = false, c2.value = true, o2.value = ``;
  }
  function x2() {
    b2();
  }
  function ee2() {
    s2.value = true, Qe(() => {
      var e3;
      (e3 = l2.value) == null || e3.focus(), c2.value = false;
    });
  }
  let te2 = q(() => {
    let { self: { inputWidth: e3 } } = u2.value;
    return { "--n-input-width": e3 };
  }), C2 = n2 ? S(`dynamic-tags`, void 0, te2, e2) : void 0;
  return { mergedClsPrefix: t2, inputInstRef: l2, localizedAdd: m2, inputSize: h2, inputValue: o2, showInput: s2, inputForceFocused: c2, mergedValue: f2, mergedDisabled: a2, triggerDisabled: g2, handleInputKeyDown: y2, handleAddClick: ee2, handleInputBlur: x2, handleCloseClick: v2, handleInputConfirm: b2, mergedTheme: u2, cssVars: n2 ? void 0 : te2, themeClass: C2 == null ? void 0 : C2.themeClass, onRender: C2 == null ? void 0 : C2.onRender };
}, render() {
  let { mergedTheme: e2, cssVars: t2, mergedClsPrefix: n2, onRender: r2, renderTag: i2 } = this;
  return r2 == null ? void 0 : r2(), z(tn, { class: [`${n2}-dynamic-tags`, this.themeClass], size: `small`, style: t2, theme: e2.peers.Space, themeOverrides: e2.peerOverrides.Space, itemStyle: `display: flex;` }, { default: () => {
    let { mergedTheme: e3, tagClass: t3, tagStyle: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, mergedDisabled: u2, showInput: d2, inputValue: f2, inputClass: p2, inputStyle: m2, inputSize: h2, inputForceFocused: g2, triggerDisabled: _2, handleInputKeyDown: v2, handleInputBlur: y2, handleAddClick: b2, handleCloseClick: x2, handleInputConfirm: S2, $slots: ee2 } = this;
    return this.mergedValue.map((n3, d3) => i2 ? i2(n3, d3) : z(Jt, { key: d3, theme: e3.peers.Tag, themeOverrides: e3.peerOverrides.Tag, class: t3, style: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, disabled: u2, onClose: () => {
      x2(d3);
    } }, { default: () => typeof n3 == `string` ? n3 : n3.label })).concat(d2 ? ee2.input ? ee2.input({ submit: S2, deactivate: y2 }) : z($t, Object.assign({ placeholder: ``, size: h2, style: m2, class: p2, autosize: true }, this.inputProps, { ref: `inputInstRef`, value: f2, onUpdateValue: (e4) => {
      this.inputValue = e4;
    }, theme: e3.peers.Input, themeOverrides: e3.peerOverrides.Input, onKeydown: v2, onBlur: y2, internalForceFocus: g2 })) : ee2.trigger ? ee2.trigger({ activate: b2, disabled: _2 }) : z(Q, { dashed: true, disabled: _2, theme: e3.peers.Button, themeOverrides: e3.peerOverrides.Button, size: h2, onClick: b2 }, { icon: () => z(j, { clsPrefix: n2 }, { default: () => z(Oe, null) }) }));
  } });
} }), br = X({ name: `Flex`, props: Object.assign(Object.assign({}, E.props), { align: String, justify: { type: String, default: `start` }, inline: Boolean, vertical: Boolean, reverse: Boolean, size: { type: [String, Number, Array], default: `medium` }, wrap: { type: Boolean, default: true } }), setup(e2) {
  let { mergedClsPrefixRef: t2, mergedRtlRef: n2 } = pe(e2), r2 = E(`Flex`, `-flex`, void 0, Lt, e2, t2);
  return { rtlEnabled: re(`Flex`, n2, t2), mergedClsPrefix: t2, margin: q(() => {
    let { size: t3 } = e2;
    if (Array.isArray(t3)) return { horizontal: t3[0], vertical: t3[1] };
    if (typeof t3 == `number`) return { horizontal: t3, vertical: t3 };
    let { self: { [ne(`gap`, t3)]: n3 } } = r2.value, { row: i2, col: a2 } = ee(n3);
    return { horizontal: ie(a2), vertical: ie(i2) };
  }) };
}, render() {
  let { vertical: e2, reverse: t2, align: n2, inline: r2, justify: i2, margin: a2, wrap: o2, mergedClsPrefix: s2, rtlEnabled: c2 } = this, l2 = qe(qt(this), false);
  return l2.length ? z(`div`, { role: `none`, class: [`${s2}-flex`, c2 && `${s2}-flex--rtl`], style: { display: r2 ? `inline-flex` : `flex`, flexDirection: /* @__PURE__ */ (() => e2 && !t2 ? `column` : e2 && t2 ? `column-reverse` : !e2 && t2 ? `row-reverse` : `row`)(), justifyContent: i2, flexWrap: !o2 || e2 ? `nowrap` : `wrap`, alignItems: n2, gap: `${a2.vertical}px ${a2.horizontal}px` } }, l2) : null;
} });
const xr = a(`n-grid`), Sr = { span: { type: [Number, String], default: 1 }, offset: { type: [Number, String], default: 0 }, suffix: Boolean, privateOffset: Number, privateSpan: Number, privateColStart: Number, privateShow: { type: Boolean, default: true } };
i(Sr);
var Cr = X({ __GRID_ITEM__: true, name: `GridItem`, alias: [`Gi`], props: Sr, setup() {
  let { isSsrRef: e2, xGapRef: t2, itemStyleRef: n2, overflowRef: r2, layoutShiftDisabledRef: i2 } = $e(xr), a2 = et();
  return { overflow: r2, itemStyle: n2, layoutShiftDisabled: i2, mergedXGap: q(() => ue(t2.value || 0)), deriveStyle: () => {
    e2.value;
    let { privateSpan: n3 = 1, privateShow: r3 = true, privateColStart: i3 = void 0, privateOffset: o2 = 0 } = a2.vnode.props, { value: s2 } = t2, c2 = ue(s2 || 0);
    return { display: r3 ? `` : `none`, gridColumn: `${i3 ?? `span ${n3}`} / span ${n3}`, marginLeft: o2 ? `calc((100% - (${n3} - 1) * ${c2}) / ${n3} * ${o2} + ${c2} * ${o2})` : `` };
  } };
}, render() {
  var _a;
  var e2;
  if (this.layoutShiftDisabled) {
    let { span: e3, offset: t2, mergedXGap: n2 } = this;
    return z(`div`, { style: { gridColumn: `span ${e3} / span ${e3}`, marginLeft: t2 ? `calc((100% - (${e3} - 1) * ${n2}) / ${e3} * ${t2} + ${n2} * ${t2})` : `` } }, this.$slots);
  }
  return z(`div`, { style: [this.itemStyle, this.deriveStyle()] }, (_a = (e2 = this.$slots).default) == null ? void 0 : _a.call(e2, { overflow: this.overflow }));
} });
const wr = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 };
var Tr = 24, Er = `__ssr__`, Dr = X({ name: `Grid`, inheritAttrs: false, props: { layoutShiftDisabled: Boolean, responsive: { type: [String, Boolean], default: `self` }, cols: { type: [Number, String], default: Tr }, itemResponsive: Boolean, collapsed: Boolean, collapsedRows: { type: Number, default: 1 }, itemStyle: [Object, String], xGap: { type: [Number, String], default: 0 }, yGap: { type: [Number, String], default: 0 } }, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedBreakpointsRef: n2 } = pe(e2), r2 = /^\d+$/, i2 = U(void 0), a2 = On((n2 == null ? void 0 : n2.value) || wr), o2 = d(() => !!(e2.itemResponsive || !r2.test(e2.cols.toString()) || !r2.test(e2.xGap.toString()) || !r2.test(e2.yGap.toString()))), s2 = q(() => {
    if (o2.value) return e2.responsive === `self` ? i2.value : a2.value;
  }), c2 = d(() => Number(C(e2.cols.toString(), s2.value)) ?? Tr), l2 = d(() => C(e2.xGap.toString(), s2.value)), u2 = d(() => C(e2.yGap.toString(), s2.value)), f2 = (e3) => {
    i2.value = e3.contentRect.width;
  }, p2 = (e3) => {
    ke(f2, e3);
  }, h2 = U(false), g2 = q(() => {
    if (e2.responsive === `self`) return p2;
  }), _2 = U(false), v2 = U();
  return Ze(() => {
    let { value: e3 } = v2;
    e3 && e3.hasAttribute(Er) && (e3.removeAttribute(Er), _2.value = true);
  }), Je(xr, { layoutShiftDisabledRef: G(e2, `layoutShiftDisabled`), isSsrRef: _2, itemStyleRef: G(e2, `itemStyle`), xGapRef: l2, overflowRef: h2 }), { isSsr: !m, contentEl: v2, mergedClsPrefix: t2, style: q(() => e2.layoutShiftDisabled ? { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${e2.cols}, minmax(0, 1fr))`, columnGap: ue(e2.xGap), rowGap: ue(e2.yGap) } : { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${c2.value}, minmax(0, 1fr))`, columnGap: ue(l2.value), rowGap: ue(u2.value) }), isResponsive: o2, responsiveQuery: s2, responsiveCols: c2, handleResize: g2, overflow: h2 };
}, render() {
  if (this.layoutShiftDisabled) return z(`div`, dt({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style }, this.$attrs), this.$slots);
  let e2 = () => {
    var _a, _b, _c, _d;
    this.overflow = false;
    let e3 = qe(qt(this)), t2 = [], { collapsed: n2, collapsedRows: r2, responsiveCols: i2, responsiveQuery: a2 } = this;
    e3.forEach((e4) => {
      var _a2, _b2, _c2, _d2;
      if (((_a2 = e4 == null ? void 0 : e4.type) == null ? void 0 : _a2.__GRID_ITEM__) !== true) return;
      if (jn(e4)) {
        let n4 = lt(e4);
        n4.props ? n4.props.privateShow = false : n4.props = { privateShow: false }, t2.push({ child: n4, rawChildSpan: 0 });
        return;
      }
      e4.dirs = ((_b2 = e4.dirs) == null ? void 0 : _b2.filter(({ dir: e5 }) => e5 !== vt)) || null, ((_c2 = e4.dirs) == null ? void 0 : _c2.length) === 0 && (e4.dirs = null);
      let n3 = lt(e4), r3 = Number(C((_d2 = n3.props) == null ? void 0 : _d2.span, a2) ?? 1);
      r3 !== 0 && t2.push({ child: n3, rawChildSpan: r3 });
    });
    let o2 = 0, s2 = (_a = t2[t2.length - 1]) == null ? void 0 : _a.child;
    if (s2 == null ? void 0 : s2.props) {
      let e4 = (_b = s2.props) == null ? void 0 : _b.suffix;
      e4 !== void 0 && e4 !== false && (o2 = Number(C((_c = s2.props) == null ? void 0 : _c.span, a2) ?? 1), s2.props.privateSpan = o2, s2.props.privateColStart = i2 + 1 - o2, s2.props.privateShow = s2.props.privateShow ?? true);
    }
    let c2 = 0, l2 = false;
    for (let { child: e4, rawChildSpan: s3 } of t2) {
      if (l2 && (this.overflow = true), !l2) {
        let t3 = Number(C((_d = e4.props) == null ? void 0 : _d.offset, a2) ?? 0), u2 = Math.min(s3 + t3, i2);
        if (e4.props ? (e4.props.privateSpan = u2, e4.props.privateOffset = t3) : e4.props = { privateSpan: u2, privateOffset: t3 }, n2) {
          let e5 = c2 % i2;
          u2 + e5 > i2 && (c2 += i2 - e5), u2 + c2 + o2 > r2 * i2 ? l2 = true : c2 += u2;
        }
      }
      l2 && (e4.props ? e4.props.privateShow !== true && (e4.props.privateShow = false) : e4.props = { privateShow: false });
    }
    return z(`div`, dt({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style, [Er]: this.isSsr || void 0 }, this.$attrs), t2.map(({ child: e4 }) => e4));
  };
  return this.isResponsive && this.responsive === `self` ? z(ze, { onResize: this.handleResize }, { default: e2 }) : e2();
} }), Or = M([w(`input-number-suffix`, `
 display: inline-block;
 margin-right: 10px;
 `), w(`input-number-prefix`, `
 display: inline-block;
 margin-left: 10px;
 `)]);
function kr(e2) {
  return e2 == null || typeof e2 == `string` && e2.trim() === `` ? null : Number(e2);
}
function Ar(e2) {
  return e2.includes(`.`) && (/^(-)?\d+.*(\.|0)$/.test(e2) || /^-?\d*$/.test(e2)) || e2 === `-` || e2 === `-0`;
}
function jr(e2) {
  return e2 == null ? true : !Number.isNaN(e2);
}
function Mr(e2, t2) {
  return typeof e2 == `number` ? t2 === void 0 ? String(e2) : e2.toFixed(t2) : ``;
}
function Nr(e2) {
  if (e2 === null) return null;
  if (typeof e2 == `number`) return e2;
  {
    let t2 = Number(e2);
    return Number.isNaN(t2) ? null : t2;
  }
}
var Pr = 800, Fr = 100, Ir = X({ name: `InputNumber`, props: Object.assign(Object.assign({}, E.props), { autofocus: Boolean, loading: { type: Boolean, default: void 0 }, placeholder: String, defaultValue: { type: Number, default: null }, value: Number, step: { type: [Number, String], default: 1 }, min: [Number, String], max: [Number, String], size: String, disabled: { type: Boolean, default: void 0 }, validator: Function, bordered: { type: Boolean, default: void 0 }, showButton: { type: Boolean, default: true }, buttonPlacement: { type: String, default: `right` }, inputProps: Object, readonly: Boolean, clearable: Boolean, keyboard: { type: Object, default: {} }, updateValueOnInput: { type: Boolean, default: true }, round: { type: Boolean, default: void 0 }, parse: Function, format: Function, precision: Number, status: String, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClear: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedBorderedRef: t2, mergedClsPrefixRef: n2, mergedRtlRef: r2 } = pe(e2), i2 = E(`InputNumber`, `-input-number`, Or, Ft, e2, n2), { localeRef: a2 } = Qt(`InputNumber`), o2 = Xt(e2), { mergedSizeRef: c2, mergedDisabledRef: l2, mergedStatusRef: u2 } = o2, f2 = U(null), m2 = U(null), h2 = U(null), g2 = U(e2.defaultValue), _2 = Be(G(e2, `value`), g2), v2 = U(``), y2 = (e3) => {
    let t3 = String(e3).split(`.`)[1];
    return t3 ? t3.length : 0;
  }, b2 = (t3) => {
    let n3 = [e2.min, e2.max, e2.step, t3].map((e3) => e3 === void 0 ? 0 : y2(e3));
    return Math.max(...n3);
  }, x2 = d(() => {
    let { placeholder: t3 } = e2;
    return t3 === void 0 ? a2.value.placeholder : t3;
  }), S2 = d(() => {
    let t3 = Nr(e2.step);
    return t3 === null || t3 === 0 ? 1 : Math.abs(t3);
  }), ee2 = d(() => {
    let t3 = Nr(e2.min);
    return t3 === null ? null : t3;
  }), te2 = d(() => {
    let t3 = Nr(e2.max);
    return t3 === null ? null : t3;
  }), C2 = () => {
    let { value: t3 } = _2;
    if (jr(t3)) {
      let { format: n3, precision: r3 } = e2;
      n3 ? v2.value = n3(t3) : t3 === null || r3 === void 0 || y2(t3) > r3 ? v2.value = Mr(t3, void 0) : v2.value = Mr(t3, r3);
    } else v2.value = String(t3);
  };
  C2();
  let w2 = (t3) => {
    let { value: n3 } = _2;
    if (t3 === n3) {
      C2();
      return;
    }
    let { "onUpdate:value": r3, onUpdateValue: i3, onChange: a3 } = e2, { nTriggerFormInput: s2, nTriggerFormChange: c3 } = o2;
    a3 && p(a3, t3), i3 && p(i3, t3), r3 && p(r3, t3), g2.value = t3, s2(), c3();
  }, T2 = ({ offset: t3, doUpdateIfValid: n3, fixPrecision: r3, isInputing: i3 }) => {
    let { value: a3 } = v2;
    if (i3 && Ar(a3)) return false;
    let o3 = (e2.parse || kr)(a3);
    if (o3 === null) return n3 && w2(null), null;
    if (jr(o3)) {
      let a4 = y2(o3), { precision: s2 } = e2;
      if (s2 !== void 0 && s2 < a4 && !r3) return false;
      let c3 = Number.parseFloat((o3 + t3).toFixed(s2 ?? b2(o3)));
      if (jr(c3)) {
        let { value: t4 } = te2, { value: r4 } = ee2;
        if (t4 !== null && c3 > t4) {
          if (!n3 || i3) return false;
          c3 = t4;
        }
        if (r4 !== null && c3 < r4) {
          if (!n3 || i3) return false;
          c3 = r4;
        }
        return e2.validator && !e2.validator(c3) ? false : (n3 && w2(c3), c3);
      }
    }
    return false;
  }, ne2 = d(() => T2({ offset: 0, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) === false), D2 = d(() => {
    let { value: t3 } = _2;
    if (e2.validator && t3 === null) return false;
    let { value: n3 } = S2;
    return T2({ offset: -n3, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  }), ie2 = d(() => {
    let { value: t3 } = _2;
    if (e2.validator && t3 === null) return false;
    let { value: n3 } = S2;
    return T2({ offset: +n3, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  });
  function ae2(t3) {
    let { onFocus: n3 } = e2, { nTriggerFormFocus: r3 } = o2;
    n3 && p(n3, t3), r3();
  }
  function O2(t3) {
    var _a, _b;
    if (t3.target === ((_a = f2.value) == null ? void 0 : _a.wrapperElRef)) return;
    let n3 = T2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    if (n3 !== false) {
      let e3 = (_b = f2.value) == null ? void 0 : _b.inputElRef;
      e3 && (e3.value = String(n3 || ``)), _2.value === n3 && C2();
    } else C2();
    let { onBlur: r3 } = e2, { nTriggerFormBlur: i3 } = o2;
    r3 && p(r3, t3), i3(), Qe(() => {
      C2();
    });
  }
  function oe2(t3) {
    let { onClear: n3 } = e2;
    n3 && p(n3, t3);
  }
  function k2() {
    let { value: t3 } = ie2;
    if (!t3) {
      me2();
      return;
    }
    let { value: n3 } = _2;
    if (n3 === null) e2.validator || w2(le2());
    else {
      let { value: e3 } = S2;
      T2({ offset: e3, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  function se2() {
    let { value: t3 } = D2;
    if (!t3) {
      N2();
      return;
    }
    let { value: n3 } = _2;
    if (n3 === null) e2.validator || w2(le2());
    else {
      let { value: e3 } = S2;
      T2({ offset: -e3, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  let A2 = ae2, ce2 = O2;
  function le2() {
    if (e2.validator) return null;
    let { value: t3 } = ee2, { value: n3 } = te2;
    return t3 === null ? n3 === null ? 0 : Math.min(0, n3) : Math.max(0, t3);
  }
  function ue2(e3) {
    oe2(e3), w2(null);
  }
  function de2(e3) {
    var _a, _b;
    var t3;
    ((_a = h2.value) == null ? void 0 : _a.$el.contains(e3.target)) && e3.preventDefault(), ((_b = m2.value) == null ? void 0 : _b.$el.contains(e3.target)) && e3.preventDefault(), (t3 = f2.value) == null || t3.activate();
  }
  let fe2 = null, j2 = null, M2 = null;
  function N2() {
    M2 && (M2 = (window.clearTimeout(M2), null)), fe2 && (fe2 = (window.clearInterval(fe2), null));
  }
  let P2 = null;
  function me2() {
    P2 && (P2 = (window.clearTimeout(P2), null)), j2 && (j2 = (window.clearInterval(j2), null));
  }
  function he2() {
    N2(), M2 = window.setTimeout(() => {
      fe2 = window.setInterval(() => {
        se2();
      }, Fr);
    }, Pr), He(`mouseup`, document, N2, { once: true });
  }
  function ge2() {
    me2(), P2 = window.setTimeout(() => {
      j2 = window.setInterval(() => {
        k2();
      }, Fr);
    }, Pr), He(`mouseup`, document, me2, { once: true });
  }
  let _e2 = () => {
    j2 || k2();
  }, ve2 = () => {
    fe2 || se2();
  };
  function F2(t3) {
    var _a;
    var n3;
    if (t3.key === `Enter`) {
      if (t3.target === ((_a = f2.value) == null ? void 0 : _a.wrapperElRef)) return;
      T2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ((n3 = f2.value) == null || n3.deactivate());
    } else if (t3.key === `ArrowUp`) {
      if (!ie2.value || e2.keyboard.ArrowUp === false) return;
      t3.preventDefault(), T2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && k2();
    } else if (t3.key === `ArrowDown`) {
      if (!D2.value || e2.keyboard.ArrowDown === false) return;
      t3.preventDefault(), T2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && se2();
    }
  }
  function ye2(t3) {
    v2.value = t3, e2.updateValueOnInput && !e2.format && !e2.parse && e2.precision === void 0 && T2({ offset: 0, doUpdateIfValid: true, isInputing: true, fixPrecision: false });
  }
  Xe(_2, () => {
    C2();
  });
  let be2 = { focus: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.focus();
  }, blur: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.blur();
  }, select: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.select();
  } }, xe2 = re(`InputNumber`, r2, n2);
  return Object.assign(Object.assign({}, be2), { rtlEnabled: xe2, inputInstRef: f2, minusButtonInstRef: m2, addButtonInstRef: h2, mergedClsPrefix: n2, mergedBordered: t2, uncontrolledValue: g2, mergedValue: _2, mergedPlaceholder: x2, displayedValueInvalid: ne2, mergedSize: c2, mergedDisabled: l2, displayedValue: v2, addable: ie2, minusable: D2, mergedStatus: u2, handleFocus: A2, handleBlur: ce2, handleClear: ue2, handleMouseDown: de2, handleAddClick: _e2, handleMinusClick: ve2, handleAddMousedown: ge2, handleMinusMousedown: he2, handleKeyDown: F2, handleUpdateDisplayedValue: ye2, mergedTheme: i2, inputThemeOverrides: { paddingSmall: `0 8px 0 10px`, paddingMedium: `0 8px 0 12px`, paddingLarge: `0 8px 0 14px` }, buttonThemeOverrides: q(() => {
    let { self: { iconColorDisabled: e3 } } = i2.value, [t3, n3, r3, a3] = s(e3);
    return { textColorTextDisabled: `rgb(${t3}, ${n3}, ${r3})`, opacityDisabled: `${a3}` };
  }) });
}, render() {
  let { mergedClsPrefix: e2, $slots: t2 } = this, n2 = () => z(Zt, { text: true, disabled: !this.minusable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleMinusClick, onMousedown: this.handleMinusMousedown, ref: `minusButtonInstRef` }, { icon: () => r(t2[`minus-icon`], () => [z(j, { clsPrefix: e2 }, { default: () => z(Mn, null) })]) }), i2 = () => z(Zt, { text: true, disabled: !this.addable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleAddClick, onMousedown: this.handleAddMousedown, ref: `addButtonInstRef` }, { icon: () => r(t2[`add-icon`], () => [z(j, { clsPrefix: e2 }, { default: () => z(Oe, null) })]) });
  return z(`div`, { class: [`${e2}-input-number`, this.rtlEnabled && `${e2}-input-number--rtl`] }, z($t, { ref: `inputInstRef`, autofocus: this.autofocus, status: this.mergedStatus, bordered: this.mergedBordered, loading: this.loading, value: this.displayedValue, onUpdateValue: this.handleUpdateDisplayedValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, builtinThemeOverrides: this.inputThemeOverrides, size: this.mergedSize, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, readonly: this.readonly, round: this.round, textDecoration: this.displayedValueInvalid ? `line-through` : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onClear: this.handleClear, clearable: this.clearable, inputProps: this.inputProps, internalLoadingBeforeSuffix: true }, { prefix: () => {
    var _a;
    return this.showButton && this.buttonPlacement === `both` ? [n2(), g(t2.prefix, (t3) => t3 ? z(`span`, { class: `${e2}-input-number-prefix` }, t3) : null)] : (_a = t2.prefix) == null ? void 0 : _a.call(t2);
  }, suffix: () => {
    var _a;
    return this.showButton ? [g(t2.suffix, (t3) => t3 ? z(`span`, { class: `${e2}-input-number-suffix` }, t3) : null), this.buttonPlacement === `right` ? n2() : null, i2()] : (_a = t2.suffix) == null ? void 0 : _a.call(t2);
  } }));
} }), Lr = w(`layout`, `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [w(`layout-scroll-container`, `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `), O(`absolute-positioned`, `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);
const Rr = { embedded: Boolean, position: Tt, nativeScrollbar: { type: Boolean, default: true }, scrollbarProps: Object, onScroll: Function, contentClass: String, contentStyle: { type: [String, Object], default: `` }, hasSider: Boolean, siderPlacement: { type: String, default: `left` } }, zr = a(`n-layout`);
function Br(e2) {
  return X({ name: e2 ? `LayoutContent` : `Layout`, props: Object.assign(Object.assign({}, E.props), Rr), setup(e3) {
    let t2 = U(null), n2 = U(null), { mergedClsPrefixRef: r2, inlineThemeDisabled: i2 } = pe(e3), a2 = E(`Layout`, `-layout`, Lr, Nt, e3, r2);
    function o2(r3, i3) {
      if (e3.nativeScrollbar) {
        let { value: e4 } = t2;
        e4 && (i3 === void 0 ? e4.scrollTo(r3) : e4.scrollTo(r3, i3));
      } else {
        let { value: e4 } = n2;
        e4 && e4.scrollTo(r3, i3);
      }
    }
    Je(zr, e3);
    let s2 = 0, c2 = 0, l2 = (t3) => {
      var n3;
      let r3 = t3.target;
      s2 = r3.scrollLeft, c2 = r3.scrollTop, (n3 = e3.onScroll) == null || n3.call(e3, t3);
    };
    Ie(() => {
      if (e3.nativeScrollbar) {
        let e4 = t2.value;
        e4 && (e4.scrollTop = c2, e4.scrollLeft = s2);
      }
    });
    let u2 = { display: `flex`, flexWrap: `nowrap`, width: `100%`, flexDirection: `row` }, d2 = { scrollTo: o2 }, f2 = q(() => {
      let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = a2.value;
      return { "--n-bezier": t3, "--n-color": e3.embedded ? n3.colorEmbedded : n3.color, "--n-text-color": n3.textColor };
    }), p2 = i2 ? S(`layout`, q(() => e3.embedded ? `e` : ``), f2, e3) : void 0;
    return Object.assign({ mergedClsPrefix: r2, scrollableElRef: t2, scrollbarInstRef: n2, hasSiderStyle: u2, mergedTheme: a2, handleNativeElScroll: l2, cssVars: i2 ? void 0 : f2, themeClass: p2 == null ? void 0 : p2.themeClass, onRender: p2 == null ? void 0 : p2.onRender }, d2);
  }, render() {
    var t2;
    let { mergedClsPrefix: n2, hasSider: r2 } = this;
    (t2 = this.onRender) == null || t2.call(this);
    let i2 = r2 ? this.hasSiderStyle : void 0;
    return z(`div`, { class: [this.themeClass, e2 && `${n2}-layout-content`, `${n2}-layout`, `${n2}-layout--${this.position}-positioned`], style: this.cssVars }, this.nativeScrollbar ? z(`div`, { ref: `scrollableElRef`, class: [`${n2}-layout-scroll-container`, this.contentClass], style: [this.contentStyle, i2], onScroll: this.handleNativeElScroll }, this.$slots) : z(Ue, Object.assign({}, this.scrollbarProps, { onScroll: this.onScroll, ref: `scrollbarInstRef`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: this.contentClass, contentStyle: [this.contentStyle, i2] }), this.$slots));
  } });
}
Br(false);
var Vr = Br(true), Hr = w(`layout-footer`, `
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`, [O(`absolute-positioned`, `
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `), O(`bordered`, `
 border-top: solid 1px var(--n-border-color);
 `)]), Ur = X({ name: `LayoutFooter`, props: Object.assign(Object.assign({}, E.props), { inverted: Boolean, position: Tt, bordered: Boolean }), setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = pe(e2), r2 = E(`Layout`, `-layout-footer`, Hr, Nt, e2, t2), i2 = q(() => {
    let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = r2.value, i3 = { "--n-bezier": t3 };
    return e2.inverted ? (i3[`--n-color`] = n3.footerColorInverted, i3[`--n-text-color`] = n3.textColorInverted, i3[`--n-border-color`] = n3.footerBorderColorInverted) : (i3[`--n-color`] = n3.footerColor, i3[`--n-text-color`] = n3.textColor, i3[`--n-border-color`] = n3.footerBorderColor), i3;
  }), a2 = n2 ? S(`layout-footer`, q(() => e2.inverted ? `a` : `b`), i2, e2) : void 0;
  return { mergedClsPrefix: t2, cssVars: n2 ? void 0 : i2, themeClass: a2 == null ? void 0 : a2.themeClass, onRender: a2 == null ? void 0 : a2.onRender };
}, render() {
  var e2;
  let { mergedClsPrefix: t2 } = this;
  return (e2 = this.onRender) == null || e2.call(this), z(`div`, { class: [`${t2}-layout-footer`, this.themeClass, this.position && `${t2}-layout-footer--${this.position}-positioned`, this.bordered && `${t2}-layout-footer--bordered`], style: this.cssVars }, this.$slots);
} }), Wr = w(`split`, `
 display: flex;
 width: 100%;
 height: 100%;
`, [O(`horizontal`, `
 flex-direction: row;
 `), O(`vertical`, `
 flex-direction: column;
 `), w(`split-pane-1`, `
 overflow: hidden;
 `), w(`split-pane-2`, `
 overflow: hidden;
 flex: 1;
 `), A(`resize-trigger`, `
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `, [O(`hover`, `
 background-color: var(--n-resize-trigger-color-hover);
 `), M(`&:hover`, `
 background-color: var(--n-resize-trigger-color-hover);
 `)])]), Gr = X({ name: `Split`, props: Object.assign(Object.assign({}, E.props), { direction: { type: String, default: `horizontal` }, resizeTriggerSize: { type: Number, default: 3 }, disabled: Boolean, defaultSize: { type: [String, Number], default: 0.5 }, "onUpdate:size": [Function, Array], onUpdateSize: [Function, Array], size: [String, Number], min: { type: [String, Number], default: 0 }, max: { type: [String, Number], default: 1 }, pane1Class: String, pane1Style: [Object, String], pane2Class: String, pane2Style: [Object, String], onDragStart: Function, onDragMove: Function, onDragEnd: Function, watchProps: Array }), slots: Object, setup(e2) {
  var _a;
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = pe(e2), r2 = E(`Split`, `-split`, Wr, Pt, e2, t2), i2 = q(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { resizableTriggerColor: t3, resizableTriggerColorHover: n3 } } = r2.value;
    return { "--n-bezier": e3, "--n-resize-trigger-color": t3, "--n-resize-trigger-color-hover": n3 };
  }), a2 = U(null), o2 = U(false), s2 = G(e2, `size`), c2 = U(e2.defaultSize);
  ((_a = e2.watchProps) == null ? void 0 : _a.includes(`defaultSize`)) && rt(() => c2.value = e2.defaultSize);
  let l2 = (t3) => {
    let n3 = e2[`onUpdate:size`];
    e2.onUpdateSize && p(e2.onUpdateSize, t3), n3 && p(n3, t3), c2.value = t3;
  }, u2 = Be(s2, c2), d2 = q(() => {
    let t3 = u2.value;
    if (typeof t3 == `string`) return { flex: `0 0 ${t3}` };
    if (typeof t3 == `number`) {
      let n3 = t3 * 100;
      return { flex: `0 0 calc(${n3}% - ${e2.resizeTriggerSize * n3 / 100}px)` };
    }
  }), f2 = q(() => e2.direction === `horizontal` ? { width: `${e2.resizeTriggerSize}px`, height: `100%` } : { width: `100%`, height: `${e2.resizeTriggerSize}px` }), m2 = q(() => {
    let t3 = e2.direction === `horizontal`;
    return { width: t3 ? `${e2.resizeTriggerSize}px` : ``, height: t3 ? `` : `${e2.resizeTriggerSize}px`, cursor: e2.direction === `horizontal` ? `col-resize` : `row-resize` };
  }), h2 = 0, g2 = (t3) => {
    t3.preventDefault(), o2.value = true, e2.onDragStart && e2.onDragStart(t3);
    let n3 = `mousemove`, r3 = `mouseup`, i3 = (t4) => {
      _2(t4), e2.onDragMove && e2.onDragMove(t4);
    }, s3 = () => {
      Pe(n3, document, i3), Pe(r3, document, s3), o2.value = false, e2.onDragEnd && e2.onDragEnd(t3), document.body.style.cursor = ``;
    };
    document.body.style.cursor = m2.value.cursor, He(n3, document, i3), He(r3, document, s3);
    let c3 = a2.value;
    if (c3) {
      let n4 = c3.getBoundingClientRect();
      h2 = e2.direction === `horizontal` ? t3.clientX - n4.left : n4.top - t3.clientY;
    }
    _2(t3);
  };
  function _2(t3) {
    var _a2, _b;
    let n3 = (_b = (_a2 = a2.value) == null ? void 0 : _a2.parentElement) == null ? void 0 : _b.getBoundingClientRect();
    if (!n3) return;
    let { direction: r3 } = e2, i3 = n3.width - e2.resizeTriggerSize, o3 = n3.height - e2.resizeTriggerSize, s3 = r3 === `horizontal` ? i3 : o3, c3 = r3 === `horizontal` ? t3.clientX - n3.left - h2 : t3.clientY - n3.top + h2, { min: d3, max: f3 } = e2, p2 = typeof d3 == `string` ? ie(d3) : d3 * s3, m3 = typeof f3 == `string` ? ie(f3) : f3 * s3, g3 = c3;
    g3 = Math.max(g3, p2), g3 = Math.min(g3, m3, s3), typeof u2.value == `string` ? l2(`${g3}px`) : l2(g3 / s3);
  }
  let v2 = n2 ? S(`split`, void 0, i2, e2) : void 0;
  return { themeClass: v2 == null ? void 0 : v2.themeClass, onRender: v2 == null ? void 0 : v2.onRender, cssVars: n2 ? void 0 : i2, resizeTriggerElRef: a2, isDragging: o2, mergedClsPrefix: t2, resizeTriggerWrapperStyle: m2, resizeTriggerStyle: f2, handleMouseDown: g2, firstPaneStyle: d2 };
}, render() {
  var _a, _b;
  var e2, t2, n2;
  return (e2 = this.onRender) == null || e2.call(this), z(`div`, { class: [`${this.mergedClsPrefix}-split`, `${this.mergedClsPrefix}-split--${this.direction}`, this.themeClass], style: this.cssVars }, z(`div`, { class: [`${this.mergedClsPrefix}-split-pane-1`, this.pane1Class], style: [this.firstPaneStyle, this.pane1Style] }, (_a = (t2 = this.$slots)[1]) == null ? void 0 : _a.call(t2)), !this.disabled && z(`div`, { ref: `resizeTriggerElRef`, class: `${this.mergedClsPrefix}-split__resize-trigger-wrapper`, style: this.resizeTriggerWrapperStyle, onMousedown: this.handleMouseDown }, r(this.$slots[`resize-trigger`], () => [z(`div`, { style: this.resizeTriggerStyle, class: [`${this.mergedClsPrefix}-split__resize-trigger`, this.isDragging && `${this.mergedClsPrefix}-split__resize-trigger--hover`] })])), z(`div`, { class: [`${this.mergedClsPrefix}-split-pane-2`, this.pane2Class], style: this.pane2Style }, (_b = (n2 = this.$slots)[2]) == null ? void 0 : _b.call(n2)));
} });
const Kr = a(`n-tabs`), qr = { tab: [String, Number, Object, Function], name: { type: [String, Number], required: true }, disabled: Boolean, displayDirective: { type: String, default: `if` }, closable: { type: Boolean, default: void 0 }, tabProps: Object, label: [String, Number, Object, Function] };
var Jr = X({ __TAB_PANE__: true, name: `TabPane`, alias: [`TabPanel`], props: qr, slots: Object, setup(e2) {
  let n2 = $e(Kr, null);
  return n2 || t(`tab-pane`, "`n-tab-pane` must be placed inside `n-tabs`."), { style: n2.paneStyleRef, class: n2.paneClassRef, mergedClsPrefix: n2.mergedClsPrefixRef };
}, render() {
  return z(`div`, { class: [`${this.mergedClsPrefix}-tab-pane`, this.class], style: this.style }, this.$slots);
} }), Yr = X({ __TAB__: true, inheritAttrs: false, name: `Tab`, props: Object.assign({ internalLeftPadded: Boolean, internalAddable: Boolean, internalCreatedByPane: Boolean }, Yt(qr, [`displayDirective`])), setup(e2) {
  let { mergedClsPrefixRef: t2, valueRef: n2, typeRef: r2, closableRef: i2, tabStyleRef: a2, addTabStyleRef: o2, tabClassRef: s2, addTabClassRef: c2, tabChangeIdRef: l2, onBeforeLeaveRef: u2, triggerRef: d2, handleAdd: f2, activateTab: p2, handleClose: m2 } = $e(Kr);
  return { trigger: d2, mergedClosable: q(() => {
    if (e2.internalAddable) return false;
    let { closable: t3 } = e2;
    return t3 === void 0 ? i2.value : t3;
  }), style: a2, addStyle: o2, tabClass: s2, addTabClass: c2, clsPrefix: t2, value: n2, type: r2, handleClose(t3) {
    t3.stopPropagation(), !e2.disabled && m2(e2.name);
  }, activateTab() {
    if (e2.disabled) return;
    if (e2.internalAddable) {
      f2();
      return;
    }
    let { name: t3 } = e2, r3 = ++l2.id;
    if (t3 !== n2.value) {
      let { value: i3 } = u2;
      i3 ? Promise.resolve(i3(e2.name, n2.value)).then((e3) => {
        e3 && l2.id === r3 && p2(t3);
      }) : p2(t3);
    }
  } };
}, render() {
  let { internalAddable: e2, clsPrefix: t2, name: n2, disabled: r2, label: i2, tab: a2, value: o2, mergedClosable: s2, trigger: c2, $slots: { default: l2 } } = this, u2 = i2 ?? a2;
  return z(`div`, { class: `${t2}-tabs-tab-wrapper` }, this.internalLeftPadded ? z(`div`, { class: `${t2}-tabs-tab-pad` }) : null, z(`div`, Object.assign({ key: n2, "data-name": n2, "data-disabled": r2 ? true : void 0 }, dt({ class: [`${t2}-tabs-tab`, o2 === n2 && `${t2}-tabs-tab--active`, r2 && `${t2}-tabs-tab--disabled`, s2 && `${t2}-tabs-tab--closable`, e2 && `${t2}-tabs-tab--addable`, e2 ? this.addTabClass : this.tabClass], onClick: c2 === `click` ? this.activateTab : void 0, onMouseenter: c2 === `hover` ? this.activateTab : void 0, style: e2 ? this.addStyle : this.style }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), z(`span`, { class: `${t2}-tabs-tab__label` }, e2 ? z(st, null, z(`div`, { class: `${t2}-tabs-tab__height-placeholder` }, `\xA0`), z(j, { clsPrefix: t2 }, { default: () => z(Oe, null) })) : l2 ? l2() : typeof u2 == `object` ? u2 : Ut(u2 ?? n2)), s2 && this.type === `card` ? z(te, { clsPrefix: t2, class: `${t2}-tabs-tab__close`, onClick: this.handleClose, disabled: r2 }) : null));
} }), Xr = w(`tabs`, `
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [O(`segment-type`, [w(`tabs-rail`, [M(`&.transition-disabled`, [w(`tabs-capsule`, `
 transition: none;
 `)])])]), O(`top`, [w(`tab-pane`, `
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]), O(`left`, [w(`tab-pane`, `
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]), O(`left, right`, `
 flex-direction: row;
 `, [w(`tabs-bar`, `
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), w(`tabs-tab`, `
 padding: var(--n-tab-padding-vertical); 
 `)]), O(`right`, `
 flex-direction: row-reverse;
 `, [w(`tab-pane`, `
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `), w(`tabs-bar`, `
 left: 0;
 `)]), O(`bottom`, `
 flex-direction: column-reverse;
 justify-content: flex-end;
 `, [w(`tab-pane`, `
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `), w(`tabs-bar`, `
 top: 0;
 `)]), w(`tabs-rail`, `
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [w(`tabs-capsule`, `
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `), w(`tabs-tab-wrapper`, `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [w(`tabs-tab`, `
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [O(`active`, `
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `), M(`&:hover`, `
 color: var(--n-tab-text-color-hover);
 `)])])]), O(`flex`, [w(`tabs-nav`, `
 width: 100%;
 position: relative;
 `, [w(`tabs-wrapper`, `
 width: 100%;
 `, [w(`tabs-tab`, `
 margin-right: 0;
 `)])])]), w(`tabs-nav`, `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [A(`prefix, suffix`, `
 display: flex;
 align-items: center;
 `), A(`prefix`, `padding-right: 16px;`), A(`suffix`, `padding-left: 16px;`)]), O(`top, bottom`, [M(`>`, [w(`tabs-nav`, [w(`tabs-nav-scroll-wrapper`, [M(`&::before`, `
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `), M(`&::after`, `
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `), O(`shadow-start`, [M(`&::before`, `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), O(`shadow-end`, [M(`&::after`, `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]), O(`left, right`, [w(`tabs-nav-scroll-content`, `
 flex-direction: column;
 `), M(`>`, [w(`tabs-nav`, [w(`tabs-nav-scroll-wrapper`, [M(`&::before`, `
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), M(`&::after`, `
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), O(`shadow-start`, [M(`&::before`, `
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]), O(`shadow-end`, [M(`&::after`, `
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]), w(`tabs-nav-scroll-wrapper`, `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [w(`tabs-nav-y-scroll`, `
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `, [M(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`, `
 width: 0;
 height: 0;
 display: none;
 `)]), M(`&::before, &::after`, `
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]), w(`tabs-nav-scroll-content`, `
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `), w(`tabs-wrapper`, `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), w(`tabs-tab-wrapper`, `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), w(`tabs-tab`, `
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [O(`disabled`, { cursor: `not-allowed` }), A(`close`, `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), A(`label`, `
 display: flex;
 align-items: center;
 z-index: 1;
 `)]), w(`tabs-bar`, `
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [M(`&.transition-disabled`, `
 transition: none;
 `), O(`disabled`, `
 background-color: var(--n-tab-text-color-disabled)
 `)]), w(`tabs-pane-wrapper`, `
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `), w(`tab-pane`, `
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `, [M(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`, `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `), M(`&.next-transition-leave-active, &.prev-transition-leave-active`, `
 position: absolute;
 `), M(`&.next-transition-enter-from, &.prev-transition-leave-to`, `
 transform: translateX(32px);
 opacity: 0;
 `), M(`&.next-transition-leave-to, &.prev-transition-enter-from`, `
 transform: translateX(-32px);
 opacity: 0;
 `), M(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`, `
 transform: translateX(0);
 opacity: 1;
 `)]), w(`tabs-tab-pad`, `
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), O(`line-type, bar-type`, [w(`tabs-tab`, `
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [M(`&:hover`, { color: `var(--n-tab-text-color-hover)` }), O(`active`, `
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `), O(`disabled`, { color: `var(--n-tab-text-color-disabled)` })])]), w(`tabs-nav`, [O(`line-type`, [O(`top`, [A(`prefix, suffix`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), w(`tabs-nav-scroll-content`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), w(`tabs-bar`, `
 bottom: -1px;
 `)]), O(`left`, [A(`prefix, suffix`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), w(`tabs-nav-scroll-content`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), w(`tabs-bar`, `
 right: -1px;
 `)]), O(`right`, [A(`prefix, suffix`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), w(`tabs-nav-scroll-content`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), w(`tabs-bar`, `
 left: -1px;
 `)]), O(`bottom`, [A(`prefix, suffix`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), w(`tabs-nav-scroll-content`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), w(`tabs-bar`, `
 top: -1px;
 `)]), A(`prefix, suffix`, `
 transition: border-color .3s var(--n-bezier);
 `), w(`tabs-nav-scroll-content`, `
 transition: border-color .3s var(--n-bezier);
 `), w(`tabs-bar`, `
 border-radius: 0;
 `)]), O(`card-type`, [A(`prefix, suffix`, `
 transition: border-color .3s var(--n-bezier);
 `), w(`tabs-pad`, `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `), w(`tabs-tab-pad`, `
 transition: border-color .3s var(--n-bezier);
 `), w(`tabs-tab`, `
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `, [O(`addable`, `
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `, [A(`height-placeholder`, `
 width: 0;
 font-size: var(--n-tab-font-size);
 `), D(`disabled`, [M(`&:hover`, `
 color: var(--n-tab-text-color-hover);
 `)])]), O(`closable`, `padding-right: 8px;`), O(`active`, `
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), O(`disabled`, `color: var(--n-tab-text-color-disabled);`)])]), O(`left, right`, `
 flex-direction: column; 
 `, [A(`prefix, suffix`, `
 padding: var(--n-tab-padding-vertical);
 `), w(`tabs-wrapper`, `
 flex-direction: column;
 `), w(`tabs-tab-wrapper`, `
 flex-direction: column;
 `, [w(`tabs-tab-pad`, `
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]), O(`top`, [O(`card-type`, [w(`tabs-scroll-padding`, `border-bottom: 1px solid var(--n-tab-border-color);`), A(`prefix, suffix`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), w(`tabs-tab`, `
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-bottom: 1px solid #0000;
 `)]), w(`tabs-tab-pad`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), w(`tabs-pad`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]), O(`left`, [O(`card-type`, [w(`tabs-scroll-padding`, `border-right: 1px solid var(--n-tab-border-color);`), A(`prefix, suffix`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), w(`tabs-tab`, `
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-right: 1px solid #0000;
 `)]), w(`tabs-tab-pad`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), w(`tabs-pad`, `
 border-right: 1px solid var(--n-tab-border-color);
 `)])]), O(`right`, [O(`card-type`, [w(`tabs-scroll-padding`, `border-left: 1px solid var(--n-tab-border-color);`), A(`prefix, suffix`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), w(`tabs-tab`, `
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-left: 1px solid #0000;
 `)]), w(`tabs-tab-pad`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), w(`tabs-pad`, `
 border-left: 1px solid var(--n-tab-border-color);
 `)])]), O(`bottom`, [O(`card-type`, [w(`tabs-scroll-padding`, `border-top: 1px solid var(--n-tab-border-color);`), A(`prefix, suffix`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), w(`tabs-tab`, `
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-top: 1px solid #0000;
 `)]), w(`tabs-tab-pad`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), w(`tabs-pad`, `
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]), Zr = hn, Qr = X({ name: `Tabs`, props: Object.assign(Object.assign({}, E.props), { value: [String, Number], defaultValue: [String, Number], trigger: { type: String, default: `click` }, type: { type: String, default: `bar` }, closable: Boolean, justifyContent: String, size: { type: String, default: `medium` }, placement: { type: String, default: `top` }, tabStyle: [String, Object], tabClass: String, addTabStyle: [String, Object], addTabClass: String, barWidth: Number, paneClass: String, paneStyle: [String, Object], paneWrapperClass: String, paneWrapperStyle: [String, Object], addable: [Boolean, Object], tabsPadding: { type: Number, default: 0 }, animated: Boolean, onBeforeLeave: Function, onAdd: Function, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onClose: [Function, Array], labelSize: String, activeName: [String, Number], onActiveNameChange: [Function, Array] }), slots: Object, setup(e2, { slots: t2 }) {
  var _a, _b;
  let { mergedClsPrefixRef: n2, inlineThemeDisabled: r2 } = pe(e2), i2 = E(`Tabs`, `-tabs`, Xr, jt, e2, n2), a2 = U(null), o2 = U(null), s2 = U(null), c2 = U(null), l2 = U(null), u2 = U(null), d2 = U(true), f2 = U(true), m2 = Ne(e2, [`labelSize`, `size`]), h2 = Ne(e2, [`activeName`, `value`]), g2 = U(h2.value ?? e2.defaultValue ?? (t2.default ? (_b = (_a = qe(t2.default())[0]) == null ? void 0 : _a.props) == null ? void 0 : _b.name : null)), _2 = Be(h2, g2), v2 = { id: 0 }, y2 = q(() => {
    if (!(!e2.justifyContent || e2.type === `card`)) return { display: `flex`, justifyContent: e2.justifyContent };
  });
  Xe(_2, () => {
    v2.id = 0, C2(), w2();
  });
  function b2() {
    var _a2;
    let { value: e3 } = _2;
    return e3 === null ? null : (_a2 = a2.value) == null ? void 0 : _a2.querySelector(`[data-name="${e3}"]`);
  }
  function x2(t3) {
    if (e2.type === `card`) return;
    let { value: r3 } = o2;
    if (!r3) return;
    let i3 = r3.style.opacity === `0`;
    if (t3) {
      let a3 = `${n2.value}-tabs-bar--disabled`, { barWidth: o3, placement: s3 } = e2;
      if (t3.dataset.disabled === `true` ? r3.classList.add(a3) : r3.classList.remove(a3), [`top`, `bottom`].includes(s3)) {
        if (te2([`top`, `maxHeight`, `height`]), typeof o3 == `number` && t3.offsetWidth >= o3) {
          let e3 = Math.floor((t3.offsetWidth - o3) / 2) + t3.offsetLeft;
          r3.style.left = `${e3}px`, r3.style.maxWidth = `${o3}px`;
        } else r3.style.left = `${t3.offsetLeft}px`, r3.style.maxWidth = `${t3.offsetWidth}px`;
        r3.style.width = `8192px`, i3 && (r3.style.transition = `none`), r3.offsetWidth, i3 && (r3.style.transition = ``, r3.style.opacity = `1`);
      } else {
        if (te2([`left`, `maxWidth`, `width`]), typeof o3 == `number` && t3.offsetHeight >= o3) {
          let e3 = Math.floor((t3.offsetHeight - o3) / 2) + t3.offsetTop;
          r3.style.top = `${e3}px`, r3.style.maxHeight = `${o3}px`;
        } else r3.style.top = `${t3.offsetTop}px`, r3.style.maxHeight = `${t3.offsetHeight}px`;
        r3.style.height = `8192px`, i3 && (r3.style.transition = `none`), r3.offsetHeight, i3 && (r3.style.transition = ``, r3.style.opacity = `1`);
      }
    }
  }
  function ee2() {
    if (e2.type === `card`) return;
    let { value: t3 } = o2;
    t3 && (t3.style.opacity = `0`);
  }
  function te2(e3) {
    let { value: t3 } = o2;
    if (t3) for (let n3 of e3) t3.style[n3] = ``;
  }
  function C2() {
    if (e2.type === `card`) return;
    let t3 = b2();
    t3 ? x2(t3) : ee2();
  }
  function w2() {
    var _a2;
    let e3 = (_a2 = l2.value) == null ? void 0 : _a2.$el;
    if (!e3) return;
    let t3 = b2();
    if (!t3) return;
    let { scrollLeft: n3, offsetWidth: r3 } = e3, { offsetLeft: i3, offsetWidth: a3 } = t3;
    n3 > i3 ? e3.scrollTo({ top: 0, left: i3, behavior: `smooth` }) : i3 + a3 > n3 + r3 && e3.scrollTo({ top: 0, left: i3 + a3 - r3, behavior: `smooth` });
  }
  let T2 = U(null), re2 = 0, D2 = null;
  function ae2(e3) {
    let t3 = T2.value;
    if (t3) {
      re2 = e3.getBoundingClientRect().height;
      let n3 = `${re2}px`, r3 = () => {
        t3.style.height = n3, t3.style.maxHeight = n3;
      };
      D2 ? (r3(), D2(), D2 = null) : D2 = r3;
    }
  }
  function O2(e3) {
    let t3 = T2.value;
    if (t3) {
      let n3 = e3.getBoundingClientRect().height, r3 = () => {
        document.body.offsetHeight, t3.style.maxHeight = `${n3}px`, t3.style.height = `${Math.max(re2, n3)}px`;
      };
      D2 ? (D2(), D2 = null, r3()) : D2 = r3;
    }
  }
  function oe2() {
    let t3 = T2.value;
    if (t3) {
      t3.style.maxHeight = ``, t3.style.height = ``;
      let { paneWrapperStyle: n3 } = e2;
      if (typeof n3 == `string`) t3.style.cssText = n3;
      else if (n3) {
        let { maxHeight: e3, height: r3 } = n3;
        e3 !== void 0 && (t3.style.maxHeight = e3), r3 !== void 0 && (t3.style.height = r3);
      }
    }
  }
  let se2 = { value: [] }, A2 = U(`next`);
  function ce2(e3) {
    let t3 = _2.value, n3 = `next`;
    for (let r3 of se2.value) {
      if (r3 === t3) break;
      if (r3 === e3) {
        n3 = `prev`;
        break;
      }
    }
    A2.value = n3, le2(e3);
  }
  function le2(t3) {
    let { onActiveNameChange: n3, onUpdateValue: r3, "onUpdate:value": i3 } = e2;
    n3 && p(n3, t3), r3 && p(r3, t3), i3 && p(i3, t3), g2.value = t3;
  }
  function ue2(t3) {
    let { onClose: n3 } = e2;
    n3 && p(n3, t3);
  }
  let de2 = true;
  function fe2() {
    let { value: e3 } = o2;
    if (!e3) return;
    de2 || (de2 = false);
    let t3 = `transition-disabled`;
    e3.classList.add(t3), C2(), e3.classList.remove(t3);
  }
  let j2 = U(null);
  function M2({ transitionDisabled: e3 }) {
    let t3 = a2.value;
    if (!t3) return;
    e3 && t3.classList.add(`transition-disabled`);
    let n3 = b2();
    n3 && j2.value && (j2.value.style.width = `${n3.offsetWidth}px`, j2.value.style.height = `${n3.offsetHeight}px`, j2.value.style.transform = `translateX(${n3.offsetLeft - ie(getComputedStyle(t3).paddingLeft)}px)`, e3 && j2.value.offsetWidth), e3 && t3.classList.remove(`transition-disabled`);
  }
  Xe([_2], () => {
    e2.type === `segment` && Qe(() => {
      M2({ transitionDisabled: false });
    });
  }), Ze(() => {
    e2.type === `segment` && M2({ transitionDisabled: true });
  });
  let N2 = 0;
  function P2(t3) {
    var _a2, _b2;
    if (t3.contentRect.width === 0 && t3.contentRect.height === 0 || N2 === t3.contentRect.width) return;
    N2 = t3.contentRect.width;
    let { type: n3 } = e2;
    if ((n3 === `line` || n3 === `bar`) && (de2 || ((_a2 = e2.justifyContent) == null ? void 0 : _a2.startsWith(`space`))) && fe2(), n3 !== `segment`) {
      let { placement: t4 } = e2;
      F2((t4 === `top` || t4 === `bottom` ? (_b2 = l2.value) == null ? void 0 : _b2.$el : u2.value) || null);
    }
  }
  let me2 = Zr(P2, 64);
  Xe([() => e2.justifyContent, () => e2.size], () => {
    Qe(() => {
      let { type: t3 } = e2;
      (t3 === `line` || t3 === `bar`) && fe2();
    });
  });
  let he2 = U(false);
  function ge2(t3) {
    var _a2;
    let { target: n3, contentRect: { width: r3, height: i3 } } = t3, a3 = n3.parentElement.parentElement.offsetWidth, o3 = n3.parentElement.parentElement.offsetHeight, { placement: s3 } = e2;
    if (!he2.value) s3 === `top` || s3 === `bottom` ? a3 < r3 && (he2.value = true) : o3 < i3 && (he2.value = true);
    else {
      let { value: e3 } = c2;
      if (!e3) return;
      s3 === `top` || s3 === `bottom` ? a3 - r3 > e3.$el.offsetWidth && (he2.value = false) : o3 - i3 > e3.$el.offsetHeight && (he2.value = false);
    }
    F2(((_a2 = l2.value) == null ? void 0 : _a2.$el) || null);
  }
  let _e2 = Zr(ge2, 64);
  function ve2() {
    let { onAdd: t3 } = e2;
    t3 && t3(), Qe(() => {
      let e3 = b2(), { value: t4 } = l2;
      !e3 || !t4 || t4.scrollTo({ left: e3.offsetLeft, top: 0, behavior: `smooth` });
    });
  }
  function F2(t3) {
    if (!t3) return;
    let { placement: n3 } = e2;
    if (n3 === `top` || n3 === `bottom`) {
      let { scrollLeft: e3, scrollWidth: n4, offsetWidth: r3 } = t3;
      d2.value = e3 <= 0, f2.value = e3 + r3 >= n4;
    } else {
      let { scrollTop: e3, scrollHeight: n4, offsetHeight: r3 } = t3;
      d2.value = e3 <= 0, f2.value = e3 + r3 >= n4;
    }
  }
  let ye2 = Zr((e3) => {
    F2(e3.target);
  }, 64);
  Je(Kr, { triggerRef: G(e2, `trigger`), tabStyleRef: G(e2, `tabStyle`), tabClassRef: G(e2, `tabClass`), addTabStyleRef: G(e2, `addTabStyle`), addTabClassRef: G(e2, `addTabClass`), paneClassRef: G(e2, `paneClass`), paneStyleRef: G(e2, `paneStyle`), mergedClsPrefixRef: n2, typeRef: G(e2, `type`), closableRef: G(e2, `closable`), valueRef: _2, tabChangeIdRef: v2, onBeforeLeaveRef: G(e2, `onBeforeLeave`), activateTab: ce2, handleClose: ue2, handleAdd: ve2 }), Ve(() => {
    C2(), w2();
  }), rt(() => {
    let { value: e3 } = s2;
    if (!e3) return;
    let { value: t3 } = n2, r3 = `${t3}-tabs-nav-scroll-wrapper--shadow-start`, i3 = `${t3}-tabs-nav-scroll-wrapper--shadow-end`;
    d2.value ? e3.classList.remove(r3) : e3.classList.add(r3), f2.value ? e3.classList.remove(i3) : e3.classList.add(i3);
  });
  let be2 = { syncBarPosition: () => {
    C2();
  } }, xe2 = () => {
    M2({ transitionDisabled: true });
  }, Se2 = q(() => {
    let { value: t3 } = m2, { type: n3 } = e2, r3 = `${t3}${{ card: `Card`, bar: `Bar`, line: `Line`, segment: `Segment` }[n3]}`, { self: { barColor: a3, closeIconColor: o3, closeIconColorHover: s3, closeIconColorPressed: c3, tabColor: l3, tabBorderColor: u3, paneTextColor: d3, tabFontWeight: f3, tabBorderRadius: p2, tabFontWeightActive: h3, colorSegment: g3, fontWeightStrong: _3, tabColorSegment: v3, closeSize: y3, closeIconSize: b3, closeColorHover: x3, closeColorPressed: S2, closeBorderRadius: ee3, [ne(`panePadding`, t3)]: te3, [ne(`tabPadding`, r3)]: C3, [ne(`tabPaddingVertical`, r3)]: w3, [ne(`tabGap`, r3)]: T3, [ne(`tabGap`, `${r3}Vertical`)]: E2, [ne(`tabTextColor`, n3)]: re3, [ne(`tabTextColorActive`, n3)]: D3, [ne(`tabTextColorHover`, n3)]: ie2, [ne(`tabTextColorDisabled`, n3)]: ae3, [ne(`tabFontSize`, t3)]: O3 }, common: { cubicBezierEaseInOut: oe3 } } = i2.value;
    return { "--n-bezier": oe3, "--n-color-segment": g3, "--n-bar-color": a3, "--n-tab-font-size": O3, "--n-tab-text-color": re3, "--n-tab-text-color-active": D3, "--n-tab-text-color-disabled": ae3, "--n-tab-text-color-hover": ie2, "--n-pane-text-color": d3, "--n-tab-border-color": u3, "--n-tab-border-radius": p2, "--n-close-size": y3, "--n-close-icon-size": b3, "--n-close-color-hover": x3, "--n-close-color-pressed": S2, "--n-close-border-radius": ee3, "--n-close-icon-color": o3, "--n-close-icon-color-hover": s3, "--n-close-icon-color-pressed": c3, "--n-tab-color": l3, "--n-tab-font-weight": f3, "--n-tab-font-weight-active": h3, "--n-tab-padding": C3, "--n-tab-padding-vertical": w3, "--n-tab-gap": T3, "--n-tab-gap-vertical": E2, "--n-pane-padding-left": k(te3, `left`), "--n-pane-padding-right": k(te3, `right`), "--n-pane-padding-top": k(te3, `top`), "--n-pane-padding-bottom": k(te3, `bottom`), "--n-font-weight-strong": _3, "--n-tab-color-segment": v3 };
  }), I2 = r2 ? S(`tabs`, q(() => `${m2.value[0]}${e2.type[0]}`), Se2, e2) : void 0;
  return Object.assign({ mergedClsPrefix: n2, mergedValue: _2, renderedNames: /* @__PURE__ */ new Set(), segmentCapsuleElRef: j2, tabsPaneWrapperRef: T2, tabsElRef: a2, barElRef: o2, addTabInstRef: c2, xScrollInstRef: l2, scrollWrapperElRef: s2, addTabFixed: he2, tabWrapperStyle: y2, handleNavResize: me2, mergedSize: m2, handleScroll: ye2, handleTabsResize: _e2, cssVars: r2 ? void 0 : Se2, themeClass: I2 == null ? void 0 : I2.themeClass, animationDirection: A2, renderNameListRef: se2, yScrollElRef: u2, handleSegmentResize: xe2, onAnimationBeforeLeave: ae2, onAnimationEnter: O2, onAnimationAfterEnter: oe2, onRender: I2 == null ? void 0 : I2.onRender }, be2);
}, render() {
  let { mergedClsPrefix: e2, type: t2, placement: n2, addTabFixed: r2, addable: i2, mergedSize: a2, renderNameListRef: o2, onRender: s2, paneWrapperClass: c2, paneWrapperStyle: l2, $slots: { default: u2, prefix: d2, suffix: f2 } } = this;
  s2 == null ? void 0 : s2();
  let p2 = u2 ? qe(u2()).filter((e3) => e3.type.__TAB_PANE__ === true) : [], m2 = u2 ? qe(u2()).filter((e3) => e3.type.__TAB__ === true) : [], h2 = !m2.length, _2 = t2 === `card`, v2 = t2 === `segment`, y2 = !_2 && !v2 && this.justifyContent;
  o2.value = [];
  let b2 = () => {
    let t3 = z(`div`, { style: this.tabWrapperStyle, class: `${e2}-tabs-wrapper` }, y2 ? null : z(`div`, { class: `${e2}-tabs-scroll-padding`, style: n2 === `top` || n2 === `bottom` ? { width: `${this.tabsPadding}px` } : { height: `${this.tabsPadding}px` } }), h2 ? p2.map((e3, t4) => (o2.value.push(e3.props.name), ni(z(Yr, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t4 !== 0 && (!y2 || y2 === `center` || y2 === `start` || y2 === `end`) }), e3.children ? { default: e3.children.tab } : void 0)))) : m2.map((e3, t4) => (o2.value.push(e3.props.name), ni(t4 !== 0 && !y2 ? ti(e3) : e3))), !r2 && i2 && _2 ? ei(i2, (h2 ? p2.length : m2.length) !== 0) : null, y2 ? null : z(`div`, { class: `${e2}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } }));
    return z(`div`, { ref: `tabsElRef`, class: `${e2}-tabs-nav-scroll-content` }, _2 && i2 ? z(ze, { onResize: this.handleTabsResize }, { default: () => t3 }) : t3, _2 ? z(`div`, { class: `${e2}-tabs-pad` }) : null, _2 ? null : z(`div`, { ref: `barElRef`, class: `${e2}-tabs-bar` }));
  }, x2 = v2 ? `top` : n2;
  return z(`div`, { class: [`${e2}-tabs`, this.themeClass, `${e2}-tabs--${t2}-type`, `${e2}-tabs--${a2}-size`, y2 && `${e2}-tabs--flex`, `${e2}-tabs--${x2}`], style: this.cssVars }, z(`div`, { class: [`${e2}-tabs-nav--${t2}-type`, `${e2}-tabs-nav--${x2}`, `${e2}-tabs-nav`] }, g(d2, (t3) => t3 && z(`div`, { class: `${e2}-tabs-nav__prefix` }, t3)), v2 ? z(ze, { onResize: this.handleSegmentResize }, { default: () => z(`div`, { class: `${e2}-tabs-rail`, ref: `tabsElRef` }, z(`div`, { class: `${e2}-tabs-capsule`, ref: `segmentCapsuleElRef` }, z(`div`, { class: `${e2}-tabs-wrapper` }, z(`div`, { class: `${e2}-tabs-tab` }))), h2 ? p2.map((e3, t3) => (o2.value.push(e3.props.name), z(Yr, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t3 !== 0 }), e3.children ? { default: e3.children.tab } : void 0))) : m2.map((e3, t3) => (o2.value.push(e3.props.name), t3 === 0 ? e3 : ti(e3)))) }) : z(ze, { onResize: this.handleNavResize }, { default: () => z(`div`, { class: `${e2}-tabs-nav-scroll-wrapper`, ref: `scrollWrapperElRef` }, [`top`, `bottom`].includes(x2) ? z(An, { ref: `xScrollInstRef`, onScroll: this.handleScroll }, { default: b2 }) : z(`div`, { class: `${e2}-tabs-nav-y-scroll`, onScroll: this.handleScroll, ref: `yScrollElRef` }, b2())) }), r2 && i2 && _2 ? ei(i2, true) : null, g(f2, (t3) => t3 && z(`div`, { class: `${e2}-tabs-nav__suffix` }, t3))), h2 && (this.animated && (x2 === `top` || x2 === `bottom`) ? z(`div`, { ref: `tabsPaneWrapperRef`, style: l2, class: [`${e2}-tabs-pane-wrapper`, c2] }, $r(p2, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : $r(p2, this.mergedValue, this.renderedNames)));
} });
function $r(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = [];
  return e2.forEach((e3) => {
    let { name: r3, displayDirective: i3, "display-directive": a3 } = e3.props, o3 = (e4) => i3 === e4 || a3 === e4, c2 = t2 === r3;
    if (e3.key !== void 0 && (e3.key = r3), c2 || o3(`show`) || o3(`show:lazy`) && n2.has(r3)) {
      n2.has(r3) || n2.add(r3);
      let t3 = !o3(`if`);
      s2.push(t3 ? at(e3, [[vt, c2]]) : e3);
    }
  }), o2 ? z(ut, { name: `${o2}-transition`, onBeforeLeave: r2, onEnter: i2, onAfterEnter: a2 }, { default: () => s2 }) : s2;
}
function ei(e2, t2) {
  return z(Yr, { ref: `addTabInstRef`, key: `__addable`, name: `__addable`, internalCreatedByPane: true, internalAddable: true, internalLeftPadded: t2, disabled: typeof e2 == `object` && e2.disabled });
}
function ti(e2) {
  let t2 = lt(e2);
  return t2.props ? t2.props.internalLeftPadded = true : t2.props = { internalLeftPadded: true }, t2;
}
function ni(e2) {
  return Array.isArray(e2.dynamicProps) ? e2.dynamicProps.includes(`internalLeftPadded`) || e2.dynamicProps.push(`internalLeftPadded`) : e2.dynamicProps = [`internalLeftPadded`], e2;
}
var ri = [`title`, `onClick`], ii = 20, ai = yt(X({ __name: `SketchToolbar`, props: { sketchName: {}, draftCount: {}, routeCount: {} }, emits: [`save`, `open`, `create`, `edit-meta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Rt(), r2 = t2, i2 = [{ title: n2(`sketchEdit.save`), icon: yn, iconSize: ii, callback: () => r2(`save`) }, { title: n2(`sketchEdit.open`), icon: xn, iconSize: ii, callback: () => r2(`open`) }, { title: n2(`sketchEdit.newComponent`), icon: De, iconSize: ii, callback: () => r2(`create`) }, { title: n2(`sketchEdit.editMetadata`), icon: Et, iconSize: ii, callback: () => r2(`edit-meta`) }];
  return (t3, r3) => (Z(), Y(K(br), { justify: `space-between`, align: `center` }, { default: V(() => [R(K(Mt), { strong: `` }, { default: V(() => [B(J(e2.sketchName || K(n2)(`sketchEdit.noSketchSelectedToolbar`)), 1)]), _: 1 }), R(K(br), { align: `center` }, { default: V(() => [e2.sketchName === void 0 ? xt(``, true) : (Z(), Y(K(Jt), { key: 0, type: `info`, size: `small` }, { default: V(() => [B(J(e2.draftCount || 0) + ` ` + J(K(n2)(`sketchEdit.drafts`)) + `, ` + J(e2.routeCount || 0) + ` ` + J(K(n2)(`sketchEdit.routes`)), 1)]), _: 1 })), (Z(), W(st, null, nt(i2, (e3, t4) => H(`div`, { key: t4, title: e3.title, class: `tool-tip-item`, onClick: e3.callback }, [R(K($), { size: e3.iconSize }, { default: V(() => [(Z(), Y(tt(e3.icon)))]), _: 2 }, 1032, [`size`])], 8, ri)), 64))]), _: 1 })]), _: 1 }));
} }), [[`__scopeId`, `data-v-5b012717`]]), oi = { key: 0, class: `empty-state` }, si = yt(X({ __name: `ComponentList`, props: { components: {}, selectedId: {} }, emits: [`select`, `delete`, `create`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Rt(), r2 = t2;
  return (t3, i2) => (Z(), W(st, null, [R(K(nn), { hoverable: `` }, { default: V(() => [(Z(true), W(st, null, nt(e2.components, (t4) => (Z(), Y(K(rn), { key: t4.value, class: ct({ "selected-component": e2.selectedId === t4.value }), onClick: () => r2(`select`, t4.value, t4.type) }, { prefix: V(() => [R(K($), { color: t4.type === `draft` ? `#007bff` : `#28a745` }, { default: V(() => [(Z(), Y(tt(t4.type === `draft` ? K(me) : K(N))))]), _: 2 }, 1032, [`color`])]), suffix: V(() => [R(K(Gt), { onPositiveClick: (e3) => r2(`delete`, t4.value, t4.type) }, { trigger: V(() => [R(K(Q), { quaternary: ``, circle: ``, size: `small` }, { default: V(() => [R(K($), null, { default: V(() => [R(K(L))]), _: 1 })]), _: 1 })]), default: V(() => [B(` ` + J(K(n2)(`sketchEdit.deleteComponent`)), 1)]), _: 1 }, 8, [`onPositiveClick`])]), default: V(() => [B(` ` + J(t4.label) + ` `, 1)]), _: 2 }, 1032, [`class`, `onClick`]))), 128))]), _: 1 }), e2.components.length === 0 ? (Z(), W(`div`, oi, [R(K(Bt), { description: K(n2)(`sketchEdit.noComponentsYet`) }, { extra: V(() => [R(K(Q), { size: `small`, onClick: i2[0] || (i2[0] = (e3) => r2(`create`)) }, { default: V(() => [B(J(K(n2)(`sketchEdit.createComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`])])) : xt(``, true)], 64));
} }), [[`__scopeId`, `data-v-3addb8a0`]]), ci = { key: 0, class: `properties-panel` }, li = { key: 1, style: { height: `100%`, width: `100%`, display: `flex`, "justify-content": `center`, "align-items": `center` } }, ui = yt(X({ __name: `PropertiesPanel`, props: { component: {}, type: {} }, emits: [`updateProperties`, `updateMeta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Rt(), r2 = t2;
  return (t3, i2) => e2.component ? (Z(), W(`div`, ci, [R(K(Qr), { type: `line`, animated: ``, "default-value": `properties` }, { default: V(() => [R(K(Jr), { name: `properties`, tab: K(n2)(`sketchEdit.properties`) }, { default: V(() => [R(K(be), null, { default: V(() => [R(K(I), { label: K(n2)(`sketchEdit.visible`) }, { default: V(() => [R(K(Ht), { value: e2.component.properties.visible !== false, "onUpdate:value": i2[0] || (i2[0] = (e3) => r2(`updateProperties`, { visible: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), e2.type === `draft` ? (Z(), W(st, { key: 0 }, [R(K(I), { label: K(n2)(`sketchEdit.fillColor`) }, { default: V(() => [R(K(_r), { value: e2.component.properties.fillColor || `#007bff`, "show-alpha": false, "onUpdate:value": i2[1] || (i2[1] = (e3) => r2(`updateProperties`, { fillColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), R(K(I), { label: K(n2)(`sketchEdit.strokeColor`) }, { default: V(() => [R(K(_r), { value: e2.component.properties.strokeColor || `#0056b3`, "show-alpha": false, "onUpdate:value": i2[2] || (i2[2] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), R(K(I), { label: K(n2)(`sketchEdit.strokeThickness`) }, { default: V(() => [R(K(Ir), { value: e2.component.properties.strokeThickness || 2, min: 1, max: 10, "onUpdate:value": i2[3] || (i2[3] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : xt(``, true), e2.type === `route` ? (Z(), W(st, { key: 1 }, [R(K(I), { label: K(n2)(`sketchEdit.strokeColor`) }, { default: V(() => [R(K(_r), { value: e2.component.properties.strokeColor || `#28a745`, "show-alpha": false, "onUpdate:value": i2[4] || (i2[4] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), R(K(I), { label: K(n2)(`sketchEdit.strokeThickness`) }, { default: V(() => [R(K(Ir), { value: e2.component.properties.strokeThickness || 3, min: 1, max: 10, "onUpdate:value": i2[5] || (i2[5] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : xt(``, true)]), _: 1 })]), _: 1 }, 8, [`tab`]), R(K(Jr), { name: `metadata`, tab: K(n2)(`sketchEdit.metadata`) }, { default: V(() => [R(K(be), null, { default: V(() => [R(K(I), { label: K(n2)(`sketchEdit.name`) }, { default: V(() => [R(K($t), { value: e2.component.meta.name, "onUpdate:value": i2[6] || (i2[6] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: t4, description: ((_a = e2.component) == null ? void 0 : _a.meta.description) ?? ``, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), R(K(I), { label: K(n2)(`sketchEdit.description`) }, { default: V(() => [R(Te, { "model-value": e2.component.meta.description, "min-height": `80px`, "max-height": `200px`, "onUpdate:modelValue": i2[7] || (i2[7] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: ((_a = e2.component) == null ? void 0 : _a.meta.name) ?? ``, description: t4, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`model-value`])]), _: 1 }, 8, [`label`]), R(K(I), { label: K(n2)(`sketchEdit.tags`) }, { default: V(() => [R(K(yr), { value: e2.component.meta.tags || [], placeholder: K(n2)(`sketchEdit.addTagPlaceholder`), "onUpdate:value": i2[8] || (i2[8] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: ((_a = e2.component) == null ? void 0 : _a.meta.name) ?? ``, description: ((_b = e2.component) == null ? void 0 : _b.meta.description) ?? ``, tags: t4 });
  }) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), R(K(I), { label: `UUID` }, { default: V(() => [R(K($t), { value: e2.component.id, style: { "font-family": `monospace` }, readonly: `` }, null, 8, [`value`])]), _: 1 })]), _: 1 })]), _: 1 }, 8, [`tab`])]), _: 1 })])) : (Z(), W(`div`, li, [R(K(Bt), { description: K(n2)(`sketchEdit.selectComponentToEdit`) }, null, 8, [`description`])]));
} }), [[`__scopeId`, `data-v-38c2b865`]]), di = `https://api.maptiler.com/maps/basic-v2/style.json?key=dCeXFrS9lgSF8hm5C6nm`;
function fi() {
  let e2 = U(7), t2 = _t(null), n2 = U([0, 0]);
  function r2(e3) {
    t2.value = e3.map;
  }
  function i2(e3) {
    n2.value = e3, t2.value && t2.value.setCenter(e3);
  }
  function a2(n3) {
    e2.value = n3, t2.value && t2.value.setZoom(n3);
  }
  return { zoom: e2, map: t2, center: n2, styleUrl: di, initMap: r2, setCenter: i2, setZoom: a2 };
}
function pi(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `draft` });
  }), t2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `route` });
  }), n2;
}
function mi() {
  return { type: `Polygon`, coordinates: [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]] };
}
function hi() {
  return { fillColor: `#007bff`, strokeColor: `#0056b3`, strokeThickness: 2 };
}
function gi() {
  return { strokeColor: `#28a745`, strokeThickness: 3 };
}
var _i = { style: { display: `flex`, "flex-direction": `row`, gap: `8px` } }, vi = { style: { display: `flex`, gap: `8px`, "margin-bottom": `8px` } }, yi = { key: 0, class: `sketch-edit-container desktop-layout` }, bi = { class: `grid-layout` }, xi = { class: `meta-info-section` }, Si = { class: `metadata-item` }, Ci = { class: `metadata-item` }, wi = { key: 1, class: `sketch-edit-container mobile-layout` }, Ti = { class: `mobile-header` }, Ei = { class: `mobile-content` }, Di = { key: 0, class: `mobile-tab-content` }, Oi = { key: 1, class: `mobile-tab-content mobile-map-content` }, ki = { key: 2, class: `mobile-tab-content` }, Ai = { class: `metadata-item` }, ji = { class: `metadata-item` }, Mi = { class: `mobile-tab-bar` }, Ni = yt(X({ __name: `SketchEdit`, props: { liteMode: { type: Boolean }, forceHighDpi: { type: Boolean }, mapType: {}, sketchId: {} }, setup(e2) {
  let t2 = e2, n2 = U($e(`geolocation`).getLastKnownLocation().toLngLatLike()), { t: r2 } = Rt(), i2 = ge(), a2 = It(), { zoom: o2, styleUrl: s2, initMap: c2 } = fi(), { width: l2, height: u2 } = on(), d2 = q(() => l2.value < 768), f2 = U(`components`), p2 = U(false), m2 = U(null), h2 = U(null), g2 = U(false), _2 = U(``), v2 = U(`draft`), y2 = U(false), b2 = U({ name: ``, description: ``, tags: [], created_by: ``, modified_by: `` }), x2 = U(``), S2 = q(() => a2.currentSketch), ee2 = q(() => a2.currentDrafts), te2 = q(() => {
    var _a;
    return ((_a = S2.value) == null ? void 0 : _a.routes.routes) || [];
  }), C2 = q(() => !!S2.value), w2 = q(() => !m2.value || !h2.value ? null : h2.value === `draft` ? a2.getDraftById(m2.value) : a2.getRouteById(m2.value)), T2 = fn(() => i2.success(r2(`sketchEdit.propertiesUpdated`)), 1e3), E2 = q(() => pi(ee2.value, te2.value));
  async function ne2() {
    if (S2.value) try {
      await a2.updateSketch(S2.value.id, { name: S2.value.meta.name, description: S2.value.meta.description, tags: S2.value.meta.tags }), i2.success(r2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  async function re2() {
    if (!(!_2.value.trim() || !S2.value)) try {
      v2.value === `draft` ? (m2.value = (await a2.addDraft(mi(), hi(), { name: _2.value })).id, h2.value = `draft`) : (m2.value = (await a2.addRoute(_2.value, gi())).id, h2.value = `route`), g2.value = false, _2.value = ``, i2.success(r2(`sketchEdit.componentCreated`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.componentCreateError`)), console.error(e3);
    }
  }
  async function D2(e3, t3) {
    try {
      t3 === `draft` ? await a2.deleteDraft(e3) : await a2.deleteRoute(e3), m2.value === e3 && (m2.value = null, h2.value = null), i2.success(r2(`sketchEdit.componentDeleted`));
    } catch (e4) {
      i2.error(r2(`sketchEdit.componentDeleteError`)), console.error(e4);
    }
  }
  let ie2 = async (e3) => {
    if (!(!w2.value || !h2.value)) try {
      h2.value === `draft` ? await a2.updateDraft(m2.value, { properties: e3 }) : await a2.updateRoute(m2.value, { properties: e3 }), T2();
    } catch (e4) {
      i2.error(r2(`sketchEdit.propertiesUpdateError`)), console.error(e4);
    }
  }, ae2 = async (e3) => {
    if (!(!w2.value || !h2.value)) try {
      h2.value === `draft` ? await a2.updateDraft(m2.value, { meta: e3 }) : await a2.updateRoute(m2.value, { meta: e3 }), T2();
    } catch (e4) {
      i2.error(r2(`sketchEdit.propertiesUpdateError`)), console.error(e4);
    }
  };
  function O2() {
    S2.value && (b2.value = { name: S2.value.meta.name, description: S2.value.meta.description, tags: [...S2.value.meta.tags], created_by: S2.value.meta.created_by, modified_by: S2.value.meta.modified_by }, y2.value = true);
  }
  function oe2() {
    x2.value.trim() && !b2.value.tags.includes(x2.value.trim()) && (b2.value.tags.push(x2.value.trim()), x2.value = ``);
  }
  function k2(e3) {
    b2.value.tags = b2.value.tags.filter((t3) => t3 !== e3);
  }
  async function se2() {
    if (S2.value) try {
      await a2.updateSketch(S2.value.id, { name: b2.value.name, description: b2.value.description, tags: b2.value.tags }), y2.value = false, i2.success(r2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  Ze(() => {
    t2.sketchId && a2.setCurrentSketchId(t2.sketchId);
  }), Xe(() => a2.currentSketchId, (e3) => {
    e3 && (m2.value = null, h2.value = null);
  });
  let A2 = (e3) => new Date(e3).toLocaleString();
  return (e3, t3) => {
    var _a;
    return Z(), W(st, null, [R(xe, { active: p2.value, "onUpdate:active": t3[0] || (t3[0] = (e4) => p2.value = e4), list: K(a2).sketches.map((e4) => ({ id: e4.id, name: e4.meta.name, tags: e4.meta.tags })), "active-id": K(a2).currentSketchId || ``, placement: `right`, onRemove: t3[1] || (t3[1] = (e4) => K(a2).deleteSketch(e4)), onSelect: t3[2] || (t3[2] = (e4) => K(a2).setCurrentSketchId(e4)) }, null, 8, [`active`, `list`, `active-id`]), R(K(kt), { show: g2.value, "onUpdate:show": t3[6] || (t3[6] = (e4) => g2.value = e4), preset: `dialog`, title: K(r2)(`sketchEdit.createNewComponent`) }, { action: V(() => [R(K(Q), { onClick: t3[5] || (t3[5] = (e4) => g2.value = false) }, { default: V(() => [B(J(K(r2)(`sketchEdit.cancel`)), 1)]), _: 1 }), R(K(Q), { type: `primary`, disabled: !_2.value.trim(), onClick: re2 }, { default: V(() => [B(J(K(r2)(`sketchEdit.create`)), 1)]), _: 1 }, 8, [`disabled`])]), default: V(() => [R(K(be), null, { default: V(() => [H(`div`, _i, [R(K(I), { label: K(r2)(`sketchEdit.name`), style: { "flex-grow": `1` } }, { default: V(() => [R(K($t), { value: _2.value, "onUpdate:value": t3[3] || (t3[3] = (e4) => _2.value = e4), placeholder: K(r2)(`sketchEdit.enterComponentName`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), R(K(I), { label: K(r2)(`sketchEdit.type`) }, { default: V(() => [R(K(Vt), { value: v2.value, "onUpdate:value": t3[4] || (t3[4] = (e4) => v2.value = e4), "consistent-menu-width": false, options: [{ label: K(r2)(`sketchEdit.draftShape`), value: `draft` }, { label: K(r2)(`sketchEdit.routePath`), value: `route` }] }, null, 8, [`value`, `options`])]), _: 1 }, 8, [`label`])])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), R(K(kt), { show: y2.value, "onUpdate:show": t3[11] || (t3[11] = (e4) => y2.value = e4), preset: `dialog`, title: K(r2)(`sketchEdit.editMetadata`), style: { "max-width": `600px` } }, { action: V(() => [R(K(Q), { onClick: t3[10] || (t3[10] = (e4) => y2.value = false) }, { default: V(() => [B(J(K(r2)(`sketchEdit.cancel`)), 1)]), _: 1 }), R(K(Q), { type: `primary`, disabled: !b2.value.name.trim(), onClick: se2 }, { default: V(() => [B(J(K(r2)(`sketchEdit.save`)), 1)]), _: 1 }, 8, [`disabled`])]), default: V(() => [R(K(be), null, { default: V(() => [R(K(I), { label: K(r2)(`sketchEdit.name`) }, { default: V(() => [R(K($t), { value: b2.value.name, "onUpdate:value": t3[7] || (t3[7] = (e4) => b2.value.name = e4), placeholder: K(r2)(`sketchEdit.sketchNamePlaceholder`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), R(K(I), { label: K(r2)(`sketchEdit.description`) }, { default: V(() => [R(Te, { modelValue: b2.value.description, "onUpdate:modelValue": t3[8] || (t3[8] = (e4) => b2.value.description = e4), placeholder: K(r2)(`sketchEdit.sketchDescriptionPlaceholder`), "min-height": `120px`, "max-height": `300px` }, null, 8, [`modelValue`, `placeholder`])]), _: 1 }, 8, [`label`]), R(K(I), { label: K(r2)(`sketchEdit.tags`) }, { default: V(() => [H(`div`, vi, [R(K($t), { value: x2.value, "onUpdate:value": t3[9] || (t3[9] = (e4) => x2.value = e4), placeholder: K(r2)(`sketchEdit.addTagPlaceholder`), onKeydown: ot(ft(oe2, [`prevent`]), [`enter`]) }, null, 8, [`value`, `placeholder`, `onKeydown`]), R(K(Q), { onClick: oe2 }, { default: V(() => [B(J(K(r2)(`sketchEdit.add`)), 1)]), _: 1 })]), (Z(true), W(st, null, nt(b2.value.tags, (e4) => (Z(), Y(K(Jt), { key: e4, closable: ``, style: { "margin-right": `8px`, "margin-bottom": `8px` }, onClose: (t4) => k2(e4) }, { default: V(() => [B(J(e4), 1)]), _: 2 }, 1032, [`onClose`]))), 128)), b2.value.tags.length === 0 ? (Z(), Y(K(Bt), { key: 0, description: K(r2)(`sketchEdit.noTags`), size: `small` }, null, 8, [`description`])) : xt(``, true)]), _: 1 }, 8, [`label`])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), d2.value ? (Z(), W(`div`, wi, [H(`div`, Ti, [R(ai, { "sketch-name": (_a = S2.value) == null ? void 0 : _a.meta.name, "draft-count": ee2.value.length, "route-count": te2.value.length, onSave: ne2, onOpen: t3[18] || (t3[18] = (e4) => p2.value = true), onCreate: t3[19] || (t3[19] = (e4) => g2.value = true), onEditMeta: O2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])]), H(`div`, Ei, [R(K(Vr), null, { default: V(() => [f2.value === `components` ? (Z(), W(`div`, Di, [C2.value ? (Z(), Y(K(de), { key: 0, title: K(r2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;`, style: { height: `100%` } }, { "header-extra": V(() => [R(K(Q), { quaternary: ``, circle: ``, size: `small`, onClick: t3[22] || (t3[22] = (e4) => g2.value = true) }, { icon: V(() => [R(K(De))]), _: 1 })]), default: V(() => [R(si, { components: E2.value, "selected-id": m2.value, onSelect: t3[20] || (t3[20] = (e4, t4) => {
      m2.value = e4, h2.value = t4, f2.value = `properties`;
    }), onDelete: D2, onCreate: t3[21] || (t3[21] = (e4) => g2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])) : (Z(), Y(K(Bt), { key: 1, description: K(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(wt))]), _: 1 })]), extra: V(() => [R(K(Q), { size: `small`, onClick: t3[23] || (t3[23] = (e4) => p2.value = true) }, { default: V(() => [B(J(K(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : xt(``, true), f2.value === `map` ? (Z(), W(`div`, Oi, [C2.value ? (Z(), Y(K(de), { key: 0, class: `map-container`, "content-style": `padding: 0;` }, { default: V(() => [R(K(_e), { "map-style": K(s2), center: n2.value, zoom: K(o2), height: `100%`, "onMap:load": K(c2) }, { default: V(() => [R(K(Se), { position: `top-left` }), R(K(ye), { position: `bottom-left` }), R(K(we), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `center`, `zoom`, `onMap:load`])]), _: 1 })) : (Z(), Y(K(Bt), { key: 1, description: K(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(wt))]), _: 1 })]), extra: V(() => [R(K(Q), { size: `small`, onClick: t3[24] || (t3[24] = (e4) => p2.value = true) }, { default: V(() => [B(J(K(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : xt(``, true), f2.value === `properties` ? (Z(), W(`div`, ki, [w2.value ? (Z(), Y(K(de), { key: 0, class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: V(() => [R(K(Mt), { depth: `3`, class: `metadata` }, { default: V(() => [H(`div`, Ai, J(K(r2)(`sketchEdit.createdTimeBy`, { user: w2.value.meta.created_by, time: A2(w2.value.meta.creation_timestamp) })), 1), H(`div`, ji, J(K(r2)(`sketchEdit.modifiedTimeBy`, { user: w2.value.meta.modified_by, time: A2(w2.value.meta.modification_timestamp) })), 1)]), _: 1 })]), default: V(() => [R(ui, { component: w2.value, type: h2.value, onUpdateProperties: ie2, onUpdateMeta: ae2 }, null, 8, [`component`, `type`])]), _: 1 })) : (Z(), Y(K(Bt), { key: 1, description: K(r2)(`sketchEdit.noComponentSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(Ct))]), _: 1 })]), extra: V(() => [R(K(Q), { size: `small`, onClick: t3[25] || (t3[25] = (e4) => f2.value = `components`) }, { default: V(() => [B(J(K(r2)(`sketchEdit.selectComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : xt(``, true)]), _: 1 })]), C2.value ? (Z(), Y(K(Ur), { key: 0, class: `mobile-footer` }, { default: V(() => [H(`div`, Mi, [R(K(Q), { type: f2.value === `components` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[26] || (t3[26] = (e4) => f2.value = `components`) }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(Cn))]), _: 1 })]), default: V(() => [B(` ` + J(K(r2)(`sketchEdit.components`)), 1)]), _: 1 }, 8, [`type`]), R(K(Q), { type: f2.value === `map` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[27] || (t3[27] = (e4) => f2.value = `map`) }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(wt))]), _: 1 })]), default: V(() => [B(` ` + J(K(r2)(`sketchEdit.map`)), 1)]), _: 1 }, 8, [`type`]), R(K(Q), { type: f2.value === `properties` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[28] || (t3[28] = (e4) => f2.value = `properties`) }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(Et))]), _: 1 })]), default: V(() => [B(` ` + J(K(r2)(`sketchEdit.properties`)), 1)]), _: 1 }, 8, [`type`])])]), _: 1 })) : xt(``, true)])) : (Z(), W(`div`, yi, [H(`div`, bi, [H(`div`, xi, [R(K(de), null, { default: V(() => {
      var _a2;
      return [R(ai, { "sketch-name": (_a2 = S2.value) == null ? void 0 : _a2.meta.name, "draft-count": ee2.value.length, "route-count": te2.value.length, onSave: ne2, onOpen: t3[12] || (t3[12] = (e4) => p2.value = true), onCreate: t3[13] || (t3[13] = (e4) => g2.value = true), onEditMeta: O2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])];
    }), _: 1 })]), R(K(Gr), { direction: `horizontal`, max: 0.8, min: 0.2, "default-size": 0.5, class: `bottom-row-split` }, { 1: V(() => [R(K(Gr), { style: { height: `100%` }, direction: `vertical` }, { 1: V(() => [R(K(de), { style: { height: `100%` }, title: K(r2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;` }, { "header-extra": V(() => [R(K(Q), { quaternary: ``, circle: ``, onClick: t3[16] || (t3[16] = (e4) => g2.value = true) }, { icon: V(() => [R(K(De))]), _: 1 })]), default: V(() => [R(si, { components: E2.value, "selected-id": m2.value, onSelect: t3[14] || (t3[14] = (e4, t4) => {
      m2.value = e4, h2.value = t4;
    }), onDelete: D2, onCreate: t3[15] || (t3[15] = (e4) => g2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])]), 2: V(() => [R(K(de), { class: `map-container`, "content-style": `padding: 0;` }, { default: V(() => [R(K(_e), { "map-style": K(s2), center: n2.value, zoom: K(o2), height: `100%`, "onMap:load": K(c2) }, { default: V(() => [R(K(Se), { position: `top-left` }), R(K(ye), { position: `bottom-left` }), R(K(we), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `center`, `zoom`, `onMap:load`])]), _: 1 })]), _: 1 }), C2.value ? xt(``, true) : (Z(), Y(K(Bt), { key: 0, description: K(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(wt))]), _: 1 })]), extra: V(() => [R(K(Q), { size: `small`, onClick: t3[17] || (t3[17] = (e4) => p2.value = true) }, { default: V(() => [B(J(K(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))]), 2: V(() => [R(K(de), { class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: V(() => [w2.value ? (Z(), Y(K(Mt), { key: 0, depth: `3`, class: `metadata` }, { default: V(() => [H(`div`, Si, J(K(r2)(`sketchEdit.createdTimeBy`, { user: w2.value.meta.created_by, time: A2(w2.value.meta.creation_timestamp) })), 1), H(`div`, Ci, J(K(r2)(`sketchEdit.modifiedTimeBy`, { user: w2.value.meta.modified_by, time: A2(w2.value.meta.modification_timestamp) })), 1)]), _: 1 })) : xt(``, true)]), default: V(() => [R(ui, { component: w2.value, type: h2.value, onUpdateProperties: ie2, onUpdateMeta: ae2 }, null, 8, [`component`, `type`])]), _: 1 })]), _: 1 })])]))], 64);
  };
} }), [[`__scopeId`, `data-v-3e525b9b`]]), Pi = { class: `sketch-centre-view` }, Fi = { class: `header` }, Ii = { class: `title` }, Li = { class: `card-header` }, Ri = { key: 0, class: `tags` }, zi = { class: `card-content` }, Bi = { class: `meta-info` }, Vi = { class: `meta-item` }, Hi = { class: `meta-item` }, Ui = { class: `meta-item` }, Wi = { key: 0, class: `empty-state` }, Gi = yt(X({ __name: `SketchCentreView`, setup(e2) {
  mt((e3) => ({ bb05dda0: K(x2).bodyColor }));
  let { t: t2 } = Rt(), n2 = Ee(), r2 = ge(), i2 = an(), a2 = It(), o2 = q(() => a2.sketches), s2 = q({ get: () => a2.currentSketchId, set: (e3) => a2.setCurrentSketchId(e3) }), c2 = (e3) => {
    let t3 = s2.value === e3;
    return { borderColor: t3 ? i2.value.primaryColor : ``, borderWidth: t3 ? `2px` : `1px`, padding: t3 ? `0px` : `1px`, zIndex: t3 ? 0 : 1 };
  }, l2 = U(false), u2 = U(false), d2 = U(``), f2 = async () => {
    await a2.init();
  }, p2 = (e3) => new Date(e3).toLocaleDateString(), m2 = (e3) => e3.routes.routes.length, h2 = (e3) => e3.drafts.drafts.length, g2 = (e3) => {
    a2.setCurrentSketchId(e3);
  }, _2 = (e3) => {
    d2.value = e3, u2.value = true;
  }, v2 = (e3) => {
    let i3 = o2.value.find((t3) => t3.id === e3);
    i3 && n2.warning({ title: t2(`sketchCentreView.deleteConfirmation.title`), content: t2(`sketchCentreView.deleteConfirmation.prompt`, { name: i3.meta.name }), positiveText: t2(`sketchCentreView.deleteConfirmation.yes`), negativeText: t2(`sketchCentreView.deleteConfirmation.no`), onPositiveClick: async () => {
      await a2.deleteSketch(e3), r2.success(t2(`sketchCentreView.sketchDeleted`));
    } });
  }, { width: y2 } = on(), b2 = q(() => Math.floor(y2.value / 360));
  Ze(() => {
    f2();
  });
  let x2 = an();
  return (e3, n3) => (Z(), W(`div`, Pi, [H(`div`, Fi, [H(`h1`, Ii, J(K(t2)(`sketchCentreView.title`)), 1), R(K(Q), { type: `primary`, secondary: ``, circle: ``, onClick: n3[0] || (n3[0] = (e4) => l2.value = true) }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(De))]), _: 1 })]), _: 1 })]), R(K(Dr), { cols: b2.value, "x-gap": 16, "y-gap": 16, responsive: `screen` }, { default: V(() => [(Z(true), W(st, null, nt(o2.value, (e4) => (Z(), Y(K(Cr), { key: e4.id }, { default: V(() => [R(K(de), { class: ct([`sketch-card`, { selected: s2.value === e4.id }]), style: ht(c2(e4.id)), hoverable: ``, bordered: ``, clickable: ``, onClick: (t3) => g2(e4.id) }, { header: V(() => [H(`div`, Li, [R(K(en), null, { default: V(() => [R(K(Mt), { class: `sketch-name` }, { default: V(() => [B(J(e4.meta.name), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), e4.meta.tags.length > 0 ? (Z(), W(`div`, Ri, [(Z(true), W(st, null, nt(e4.meta.tags.slice(0, 3), (e5) => (Z(), Y(K(Jt), { key: e5, size: `small`, round: ``, type: `info` }, { default: V(() => [B(J(e5.toLocaleUpperCase()), 1)]), _: 2 }, 1024))), 128)), e4.meta.tags.length > 3 ? (Z(), Y(K(Jt), { key: 0, size: `small`, round: ``, type: `info` }, { default: V(() => [B(` +` + J(e4.meta.tags.length - 3), 1)]), _: 2 }, 1024)) : xt(``, true)])) : xt(``, true)])]), "header-extra": V(() => [R(K(tn), null, { default: V(() => [R(K(Q), { quaternary: ``, circle: ``, size: `small`, onClick: ft((t3) => _2(e4.id), [`stop`]) }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(he))]), _: 1 })]), _: 1 }, 8, [`onClick`]), R(K(Q), { quaternary: ``, circle: ``, size: `small`, onClick: ft((t3) => v2(e4.id), [`stop`]) }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(L))]), _: 1 })]), _: 1 }, 8, [`onClick`])]), _: 2 }, 1024)]), default: V(() => [H(`div`, zi, [R(K(Mt), { depth: `3`, class: `description` }, { default: V(() => [B(J(e4.meta.description || K(t2)(`sketchCentreView.noDescription`)), 1)]), _: 2 }, 1024), H(`div`, Bi, [H(`div`, Vi, [R(K($), { size: 16 }, { default: V(() => [R(K(_n))]), _: 1 }), R(K(Mt), { depth: `3`, style: { "font-size": `12px` } }, { default: V(() => [B(J(p2(e4.meta.creation_timestamp)), 1)]), _: 2 }, 1024)]), H(`div`, Hi, [R(K($), { size: 16 }, { default: V(() => [R(K(N))]), _: 1 }), R(K(Mt), { depth: `3`, style: { "font-size": `12px` } }, { default: V(() => [B(J(m2(e4)) + ` ` + J(K(t2)(`sketchCentreView.routes`)), 1)]), _: 2 }, 1024)]), H(`div`, Ui, [R(K($), { size: 16 }, { default: V(() => [R(K(St))]), _: 1 }), R(K(Mt), { depth: `3`, style: { "font-size": `12px` } }, { default: V(() => [B(J(h2(e4)) + ` ` + J(K(t2)(`sketchCentreView.drafts`)), 1)]), _: 2 }, 1024)])])])]), _: 2 }, 1032, [`class`, `style`, `onClick`])]), _: 2 }, 1024))), 128))]), _: 1 }, 8, [`cols`]), o2.value.length === 0 ? (Z(), W(`div`, Wi, [R(K($), { size: `48`, depth: `3` }, { default: V(() => [R(K(Ot))]), _: 1 }), R(K(Mt), { depth: `3` }, { default: V(() => [B(J(K(t2)(`sketchCentreView.emptyState`)), 1)]), _: 1 }), R(K(Q), { type: `primary`, onClick: n3[1] || (n3[1] = (e4) => l2.value = true) }, { icon: V(() => [R(K($), null, { default: V(() => [R(K(De))]), _: 1 })]), default: V(() => [B(` ` + J(K(t2)(`sketchCentreView.createFirstSketch`)), 1)]), _: 1 })])) : xt(``, true), R(Ce, { show: l2.value, "onUpdate:show": n3[2] || (n3[2] = (e4) => l2.value = e4), onCreated: n3[3] || (n3[3] = (e4) => K(r2).success(K(t2)(`sketchCentreView.sketchCreated`))) }, null, 8, [`show`]), R(K(ve), { show: u2.value, "onUpdate:show": n3[4] || (n3[4] = (e4) => u2.value = e4), width: K(y2) > 1e3 ? 800 : Math.min(K(y2) - 32, 600), placement: `right`, "display-directive": `show`, height: `100%` }, { default: V(() => [R(K(F), { title: K(t2)(`sketchCentreView.editSketch`), closable: ``, "body-content-style": { padding: 0, height: `100%` } }, { default: V(() => [d2.value ? (Z(), Y(Ni, { key: 0, "sketch-id": d2.value }, null, 8, [`sketch-id`])) : xt(``, true)]), _: 1 }, 8, [`title`])]), _: 1 }, 8, [`show`, `width`])]));
} }), [[`__scopeId`, `data-v-acdf12d5`]]);
export {
  Gi as default
};
