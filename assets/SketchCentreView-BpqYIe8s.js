import { $ as e, A as t, B as n, D as r, E as i, F as a, G as o, H as s, I as c, J as l, K as u, L as d, M as f, Q as p, S as m, U as h, V as g, W as _, X as v, Y as y, Z as b, at as x, c as S, ct as C, dt as w, et as T, f as E, g as D, h as ee, j as te, k as ne, lt as O, nt as k, ot as A, p as re, q as ie, rt as ae, t as j, tt as oe, u as M, ut as se, v as ce, w as le, z as ue } from "./Card-CWMqfBGT.js";
import { C as de, E as fe, S as N, T as P, _ as pe, a as me, b as F, f as I, g as he, h as ge, m as _e, n as ve, o as ye, p as be, r as xe, t as Se, u as Ce, v as we, w as Te } from "./SelectorDrawer-DE8Fw0ad.js";
import { A as Ee, D as L, F as De, I as Oe, J as ke, K as Ae, L as je, M as Me, N as Ne, P as Pe, Q as Fe, T as Ie, Y as Le, Z as Re, c as ze, et as Be, it as Ve, k as He, l as Ue, p as We, q as Ge, rt as Ke, tt as qe, x as Je, y as Ye } from "./light-ByoFy5cz.js";
import { $ as Xe, At as Ze, Bt as R, Dt as Qe, H as $e, J as et, Nt as tt, Pt as nt, Q as rt, Qt as z, Rt as it, St as at, Tt as ot, Vt as st, X as ct, Y as lt, Yt as B, Z as ut, Zt as dt, at as ft, ct as V, dt as pt, ft as H, gt as U, ht as mt, in as W, jt as ht, kt as G, lt as gt, mt as K, nn as _t, ot as q, pt as J, q as vt, rn as yt, st as Y, t as bt, tn as X, tt as xt, ut as Z, vt as St, xt as Ct, zt as wt } from "./index-C57mZnh3.js";
import { t as Tt } from "./FileText-Bls7ktxD.js";
import { a as Et, i as Dt, n as Ot, o as kt, r as At } from "./interface-Dl9Gxh0y.js";
import { H as jt, P as Mt, c as Nt, f as Pt, i as Ft, l as It, m as Lt, n as Rt, o as zt, r as Bt, t as Vt, y as Ht } from "./sketch-store-DSDq88LI.js";
import { n as Ut } from "./vue-i18n-Bm-kk62j.js";
import { t as Wt } from "./fade-in-scale-up.cssr-Bbn30dlN.js";
import { t as Gt } from "./use-locale-UJF4kyxA.js";
import { n as Kt, r as qt, t as Jt } from "./Switch-B1TpCUbE.js";
import { D as Yt, O as Xt, l as Q, t as Zt, u as Qt } from "./core-DZnL_1Th.js";
import { a as $t, i as en, n as tn, r as nn, t as rn } from "./ListItem-0_uyJSD1.js";
import { t as an } from "./Warning-CRcobcpO.js";
import { t as on } from "./PerformantEllipsis-Cc4dP-g0.js";
import { r as $ } from "./light-D1X0x42x.js";
import { t as sn } from "./Space-DZu9_qcN.js";
import { t as cn } from "./use-theme-vars-DLk79qG5.js";
var ln = function() {
  return vt.Date.now();
}, un = `Expected a function`, dn = Math.max, fn = Math.min;
function pn(e2, t2, n2) {
  var r2, i2, a2, o2, s2, c2, l2 = 0, u2 = false, d2 = false, f2 = true;
  if (typeof e2 != `function`) throw TypeError(un);
  t2 = fe(t2) || 0, $e(n2) && (u2 = !!n2.leading, d2 = `maxWait` in n2, a2 = d2 ? dn(fe(n2.maxWait) || 0, t2) : a2, f2 = `trailing` in n2 ? !!n2.trailing : f2);
  function p2(t3) {
    var n3 = r2, a3 = i2;
    return r2 = i2 = void 0, l2 = t3, o2 = e2.apply(a3, n3), o2;
  }
  function m2(e3) {
    return l2 = e3, s2 = setTimeout(_2, t2), u2 ? p2(e3) : o2;
  }
  function h2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2, i3 = t2 - n3;
    return d2 ? fn(i3, a2 - r3) : i3;
  }
  function g2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2;
    return c2 === void 0 || n3 >= t2 || n3 < 0 || d2 && r3 >= a2;
  }
  function _2() {
    var e3 = ln();
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
    return s2 === void 0 ? o2 : v2(ln());
  }
  function x2() {
    var e3 = ln(), n3 = g2(e3);
    if (r2 = arguments, i2 = this, c2 = e3, n3) {
      if (s2 === void 0) return m2(c2);
      if (d2) return clearTimeout(s2), s2 = setTimeout(_2, t2), p2(c2);
    }
    return s2 === void 0 && (s2 = setTimeout(_2, t2)), o2;
  }
  return x2.cancel = y2, x2.flush = b2, x2;
}
var mn = pn, hn = `Expected a function`;
function gn(e2, t2, n2) {
  var r2 = true, i2 = true;
  if (typeof e2 != `function`) throw TypeError(hn);
  return $e(n2) && (r2 = `leading` in n2 ? !!n2.leading : r2, i2 = `trailing` in n2 ? !!n2.trailing : i2), mn(e2, t2, { leading: r2, maxWait: t2, trailing: i2 });
}
var _n = gn, vn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, yn = K({ name: `Calendar`, render: function(e2, t2) {
  return G(), Z(`svg`, vn, t2[0] || (t2[0] = [pt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path></g>`, 1)]));
} }), bn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, xn = K({ name: `DeviceFloppy`, render: function(e2, t2) {
  return G(), Z(`svg`, bn, t2[0] || (t2[0] = [Y(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [Y(`path`, { d: `M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2` }), Y(`circle`, { cx: `12`, cy: `14`, r: `2` }), Y(`path`, { d: `M14 4v4H8V4` })], -1)]));
} }), Sn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Cn = K({ name: `Edit`, render: function(e2, t2) {
  return G(), Z(`svg`, Sn, t2[0] || (t2[0] = [Y(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [Y(`path`, { d: `M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3` }), Y(`path`, { d: `M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3` }), Y(`path`, { d: `M16 5l3 3` })], -1)]));
} }), wn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Tn = K({ name: `Folder`, render: function(e2, t2) {
  return G(), Z(`svg`, wn, t2[0] || (t2[0] = [Y(`path`, { d: `M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2`, fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, null, -1)]));
} }), En = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Dn = K({ name: `List`, render: function(e2, t2) {
  return G(), Z(`svg`, En, t2[0] || (t2[0] = [pt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11"></path><path d="M9 12h11"></path><path d="M9 18h11"></path><path d="M5 6v.01"></path><path d="M5 12v.01"></path><path d="M5 18v.01"></path></g>`, 1)]));
} });
const On = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, "2xl": 1920 };
function kn(e2) {
  return `(min-width: ${e2}px)`;
}
var An = {};
function jn(e2 = On) {
  if (!Re || typeof window.matchMedia != `function`) return q(() => []);
  let t2 = B({}), n2 = Object.keys(e2), r2 = (e3, n3) => {
    e3.matches ? t2.value[n3] = true : t2.value[n3] = false;
  };
  return n2.forEach((t3) => {
    let n3 = e2[t3], i2, a2;
    An[n3] === void 0 ? (i2 = window.matchMedia(kn(n3)), i2.addEventListener ? i2.addEventListener(`change`, (e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }) : i2.addListener && i2.addListener((e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }), a2 = /* @__PURE__ */ new Set(), An[n3] = { mql: i2, cbs: a2 }) : (i2 = An[n3].mql, a2 = An[n3].cbs), a2.add(r2), i2.matches && a2.forEach((e3) => {
      e3(i2, t3);
    });
  }), ot(() => {
    n2.forEach((t3) => {
      let { cbs: n3 } = An[e2[t3]];
      n3.has(r2) && n3.delete(r2);
    });
  }), q(() => {
    let { value: e3 } = t2;
    return n2.filter((t3) => e3[t3]);
  });
}
var Mn = jn, Nn = He(`.v-x-scroll`, { overflow: `auto`, scrollbarWidth: `none` }, [He(`&::-webkit-scrollbar`, { width: 0, height: 0 })]), Pn = K({ name: `XScroll`, props: { disabled: Boolean, onScroll: Function }, setup() {
  let e2 = B(null);
  function t2(e3) {
    !(e3.currentTarget.offsetWidth < e3.currentTarget.scrollWidth) || e3.deltaY === 0 || (e3.currentTarget.scrollLeft += e3.deltaY + e3.deltaX, e3.preventDefault());
  }
  let n2 = te();
  return Nn.mount({ id: `vueuc/x-scroll`, head: true, anchorMetaName: Ee, ssr: n2 }), Object.assign({ selfRef: e2, handleWheel: t2 }, { scrollTo(...t3) {
    var n3;
    (n3 = e2.value) == null || n3.scrollTo(...t3);
  } });
}, render() {
  return U(`div`, { ref: `selfRef`, onScroll: this.onScroll, onWheel: this.disabled ? void 0 : this.handleWheel, class: `v-x-scroll` }, this.$slots);
} }), Fn = { tiny: `mini`, small: `tiny`, medium: `small`, large: `medium`, huge: `large` };
function In(e2) {
  let t2 = Fn[e2];
  if (t2 === void 0) throw Error(`${e2} has no smaller size.`);
  return t2;
}
function Ln(e2) {
  var _a;
  let t2 = (_a = e2.dirs) == null ? void 0 : _a.find(({ dir: e3 }) => e3 === ut);
  return !!(t2 && t2.value === false);
}
var Rn = K({ name: `Remove`, render() {
  return U(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 512 512` }, U(`line`, { x1: `400`, y1: `256`, x2: `112`, y2: `256`, style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      ` }));
} }), zn = A(`input-group`, `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [x(`>`, [A(`input`, [x(`&:not(:last-child)`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), x(`&:not(:first-child)`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), A(`button`, [x(`&:not(:last-child)`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [C(`state-border, border`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), x(`&:not(:first-child)`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [C(`state-border, border`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), x(`*`, [x(`&:not(:last-child)`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [x(`>`, [A(`input`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), A(`base-selection`, [A(`base-selection-label`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), A(`base-selection-tags`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), C(`box-shadow, border, state-border`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), x(`&:not(:first-child)`, `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [x(`>`, [A(`input`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), A(`base-selection`, [A(`base-selection-label`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), A(`base-selection-tags`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), C(`box-shadow, border, state-border`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), Bn = K({ name: `InputGroup`, props: {}, setup(e2) {
  let { mergedClsPrefixRef: t2 } = ce(e2);
  return re(`-input-group`, zn, t2), { mergedClsPrefix: t2 };
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return U(`div`, { class: `${e2}-input-group` }, this.$slots);
} });
function Vn(e2, t2) {
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
function Hn(e2) {
  return e2 === null ? null : /^ *#/.test(e2) ? `hex` : e2.includes(`rgb`) ? `rgb` : e2.includes(`hsl`) ? `hsl` : e2.includes(`hsv`) ? `hsv` : null;
}
function Un(e2, t2 = [255, 255, 255], n2 = `AA`) {
  let [r2, i2, a2, o2] = d(s(e2));
  if (o2 === 1) {
    let e3 = Wn([r2, i2, a2]), o3 = Wn(t2);
    return (Math.max(e3, o3) + 0.05) / (Math.min(e3, o3) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
  }
  let c2 = Wn([Math.round(r2 * o2 + t2[0] * (1 - o2)), Math.round(i2 * o2 + t2[1] * (1 - o2)), Math.round(a2 * o2 + t2[2] * (1 - o2))]), l2 = Wn(t2);
  return (Math.max(c2, l2) + 0.05) / (Math.min(c2, l2) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
}
function Wn(e2) {
  let [t2, n2, r2] = e2.map((e3) => (e3 /= 255, e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4));
  return 0.2126 * t2 + 0.7152 * n2 + 0.0722 * r2;
}
function Gn(e2) {
  return e2 = Math.round(e2), e2 >= 360 ? 359 : e2 < 0 ? 0 : e2;
}
function Kn(e2) {
  return e2 = Math.round(e2 * 100) / 100, e2 > 1 ? 1 : e2 < 0 ? 0 : e2;
}
var qn = { rgb: { hex(e2) {
  return n(d(e2));
}, hsl(e2) {
  let [t2, n2, r2, i2] = d(e2);
  return s([...b(t2, n2, r2), i2]);
}, hsv(e2) {
  let [t2, n2, r2, i2] = d(e2);
  return _([...p(t2, n2, r2), i2]);
} }, hex: { rgb(e2) {
  return u(d(e2));
}, hsl(e2) {
  let [t2, n2, r2, i2] = d(e2);
  return s([...b(t2, n2, r2), i2]);
}, hsv(e2) {
  let [t2, n2, r2, i2] = d(e2);
  return _([...p(t2, n2, r2), i2]);
} }, hsl: { hex(e2) {
  let [t2, r2, i2, o2] = a(e2);
  return n([...l(t2, r2, i2), o2]);
}, rgb(e2) {
  let [t2, n2, r2, i2] = a(e2);
  return u([...l(t2, n2, r2), i2]);
}, hsv(e2) {
  let [t2, n2, r2, i2] = a(e2);
  return _([...ie(t2, n2, r2), i2]);
} }, hsv: { hex(e2) {
  let [t2, r2, i2, a2] = c(e2);
  return n([...v(t2, r2, i2), a2]);
}, rgb(e2) {
  let [t2, n2, r2, i2] = c(e2);
  return u([...v(t2, n2, r2), i2]);
}, hsl(e2) {
  let [t2, n2, r2, i2] = c(e2);
  return s([...y(t2, n2, r2), i2]);
} } };
function Jn(e2, t2, n2) {
  return n2 || (n2 = Hn(e2)), n2 ? n2 === t2 ? e2 : qn[n2][t2](e2) : null;
}
var Yn = `12px`, Xn = 12, Zn = `6px`, Qn = K({ name: `AlphaSlider`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, alpha: { type: Number, default: 0 }, onUpdateAlpha: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = B(null);
  function n2(n3) {
    !t2.value || !e2.rgba || (qe(`mousemove`, document, r2), qe(`mouseup`, document, i2), r2(n3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = (n3.clientX - a2) / (i3 - Xn);
    e2.onUpdateAlpha(Kn(o2));
  }
  function i2() {
    var t3;
    Be(`mousemove`, document, r2), Be(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, railBackgroundImage: q(() => {
    let { rgba: t3 } = e2;
    return t3 ? `linear-gradient(to right, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 0) 0%, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 1) 100%)` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return U(`div`, { class: `${e2}-color-picker-slider`, ref: `railRef`, style: { height: Yn, borderRadius: Zn }, onMousedown: this.handleMouseDown }, U(`div`, { style: { borderRadius: Zn, position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, overflow: `hidden` } }, U(`div`, { class: `${e2}-color-picker-checkboard` }), U(`div`, { class: `${e2}-color-picker-slider__image`, style: { backgroundImage: this.railBackgroundImage } })), this.rgba && U(`div`, { style: { position: `absolute`, left: Zn, right: Zn, top: 0, bottom: 0 } }, U(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc(${this.alpha * 100}% - ${Zn})`, borderRadius: Zn, width: Yn, height: Yn } }, U(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: u(this.rgba), borderRadius: Zn, width: Yn, height: Yn } }))));
} });
const $n = f(`n-color-picker`);
function er(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 255)) : false;
}
function tr(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 360)) : false;
}
function nr(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 100)) : false;
}
function rr(e2) {
  let t2 = e2.trim();
  return /^#[0-9a-fA-F]+$/.test(t2) ? [4, 5, 7, 9].includes(t2.length) : false;
}
function ir(e2) {
  return /^\d{1,3}\.?\d*%$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2) / 100, 100)) : false;
}
var ar = { paddingSmall: `0 4px` }, or = K({ name: `ColorInputUnit`, props: { label: { type: String, required: true }, value: { type: [Number, String], default: null }, showAlpha: Boolean, onUpdateValue: { type: Function, required: true } }, setup(e2) {
  let t2 = B(``), { themeRef: n2 } = St($n, null);
  wt(() => {
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
        a3 = rr(n3), a3 && e2.onUpdateValue(n3), t2.value = r2();
        break;
      case `H`:
        i3 = tr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `S`:
      case `L`:
      case `V`:
        i3 = nr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `A`:
        i3 = ir(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `R`:
      case `G`:
      case `B`:
        i3 = er(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
    }
  }
  return { mergedTheme: n2, inputValue: t2, handleInputChange: a2, handleInputUpdateValue: i2 };
}, render() {
  let { mergedTheme: e2 } = this;
  return U(we, { size: `small`, placeholder: this.label, theme: e2.peers.Input, themeOverrides: e2.peerOverrides.Input, builtinThemeOverrides: ar, value: this.inputValue, onUpdateValue: this.handleInputUpdateValue, onChange: this.handleInputChange, style: this.label === `A` ? `flex-grow: 1.25;` : `` });
} }), sr = K({ name: `ColorInput`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, modes: { type: Array, required: true }, showAlpha: { type: Boolean, required: true }, value: { type: String, default: null }, valueArr: { type: Array, default: null }, onUpdateValue: { type: Function, required: true }, onUpdateMode: { type: Function, required: true } }, setup(e2) {
  return { handleUnitUpdateValue(t2, r2) {
    let { showAlpha: i2 } = e2;
    if (e2.mode === `hex`) {
      e2.onUpdateValue((i2 ? n : ue)(r2));
      return;
    }
    let a2;
    switch (a2 = e2.valueArr === null ? [0, 0, 0, 0] : Array.from(e2.valueArr), e2.mode) {
      case `hsv`:
        a2[t2] = r2, e2.onUpdateValue((i2 ? _ : h)(a2));
        break;
      case `rgb`:
        a2[t2] = r2, e2.onUpdateValue((i2 ? u : o)(a2));
        break;
      case `hsl`:
        a2[t2] = r2, e2.onUpdateValue((i2 ? s : g)(a2));
        break;
    }
  } };
}, render() {
  let { clsPrefix: e2, modes: t2 } = this;
  return U(`div`, { class: `${e2}-color-picker-input` }, U(`div`, { class: `${e2}-color-picker-input__mode`, onClick: this.onUpdateMode, style: { cursor: t2.length === 1 ? `` : `pointer` } }, this.mode.toUpperCase() + (this.showAlpha ? `A` : ``)), U(Bn, null, { default: () => {
    let { mode: e3, valueArr: t3, showAlpha: r2 } = this;
    if (e3 === `hex`) {
      let e4 = null;
      try {
        e4 = t3 === null ? null : (r2 ? n : ue)(t3);
      } catch {
      }
      return U(or, { label: `HEX`, showAlpha: r2, value: e4, onUpdateValue: (e5) => {
        this.handleUnitUpdateValue(0, e5);
      } });
    }
    return (e3 + (r2 ? `a` : ``)).split(``).map((e4, n2) => U(or, { label: e4.toUpperCase(), value: t3 === null ? null : t3[n2], onUpdateValue: (e5) => {
      this.handleUnitUpdateValue(n2, e5);
    } }));
  } }));
} });
function cr(e2, t2) {
  if (t2 === `hsv`) {
    let [t3, n2, r2, i2] = c(e2);
    return u([...v(t3, n2, r2), i2]);
  }
  return e2;
}
function lr(e2) {
  let t2 = document.createElement(`canvas`).getContext(`2d`);
  return t2 ? (t2.fillStyle = e2, t2.fillStyle) : `#000000`;
}
var ur = K({ name: `ColorPickerSwatches`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, swatches: { type: Array, required: true }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  let n2 = q(() => e2.swatches.map((e3) => {
    let t2 = Hn(e3);
    return { value: e3, mode: t2, legalValue: cr(e3, t2) };
  }));
  function r2(n3) {
    let { mode: r3 } = e2, { value: i3, mode: a3 } = n3;
    return a3 || (a3 = `hex`, /^[a-zA-Z]+$/.test(i3) ? i3 = lr(i3) : (t(`color-picker`, `color ${i3} in swatches is invalid.`), i3 = `#000000`)), a3 === r3 ? i3 : Jn(i3, r3, a3);
  }
  function i2(t2) {
    e2.onUpdateColor(r2(t2));
  }
  function a2(e3, t2) {
    e3.key === `Enter` && i2(t2);
  }
  return { parsedSwatchesRef: n2, handleSwatchSelect: i2, handleSwatchKeyDown: a2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return U(`div`, { class: `${e2}-color-picker-swatches` }, this.parsedSwatchesRef.map((t2) => U(`div`, { class: `${e2}-color-picker-swatch`, tabindex: 0, onClick: () => {
    this.handleSwatchSelect(t2);
  }, onKeydown: (e3) => {
    this.handleSwatchKeyDown(e3, t2);
  } }, U(`div`, { class: `${e2}-color-picker-swatch__fill`, style: { background: t2.legalValue } }))));
} }), dr = K({ name: `ColorPickerTrigger`, slots: Object, props: { clsPrefix: { type: String, required: true }, value: { type: String, default: null }, hsla: { type: Array, default: null }, disabled: Boolean, onClick: Function }, setup(e2) {
  let { colorPickerSlots: t2, renderLabelRef: n2 } = St($n, null);
  return () => {
    let { hsla: r2, value: i2, clsPrefix: a2, onClick: o2, disabled: c2 } = e2, l2 = t2.label || n2.value;
    return U(`div`, { class: [`${a2}-color-picker-trigger`, c2 && `${a2}-color-picker-trigger--disabled`], onClick: c2 ? void 0 : o2 }, U(`div`, { class: `${a2}-color-picker-trigger__fill` }, U(`div`, { class: `${a2}-color-picker-checkboard` }), U(`div`, { style: { position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: r2 ? s(r2) : `` } }), i2 && r2 ? U(`div`, { class: `${a2}-color-picker-trigger__value`, style: { color: Un(r2) ? `white` : `black` } }, l2 ? l2(i2) : i2) : null));
  };
} }), fr = K({ name: `ColorPreview`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, color: { type: String, default: null, validator: (e2) => {
  let t2 = Hn(e2);
  return !!(!e2 || t2 && t2 !== `hsv`);
} }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  function t2(t3) {
    var n2;
    let r2 = t3.target.value;
    (n2 = e2.onUpdateColor) == null || n2.call(e2, Jn(r2.toUpperCase(), e2.mode, `hex`)), t3.stopPropagation();
  }
  return { handleChange: t2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return U(`div`, { class: `${e2}-color-picker-preview__preview` }, U(`span`, { class: `${e2}-color-picker-preview__fill`, style: { background: this.color || `#000000` } }), U(`input`, { class: `${e2}-color-picker-preview__input`, type: `color`, value: this.color, onChange: this.handleChange }));
} }), pr = `12px`, mr = 12, hr = `6px`, gr = 6, _r = `linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`, vr = K({ name: `HueSlider`, props: { clsPrefix: { type: String, required: true }, hue: { type: Number, required: true }, onUpdateHue: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = B(null);
  function n2(e3) {
    t2.value && (qe(`mousemove`, document, r2), qe(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = Gn((n3.clientX - a2 - gr) / (i3 - mr) * 360);
    e2.onUpdateHue(o2);
  }
  function i2() {
    var t3;
    Be(`mousemove`, document, r2), Be(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return U(`div`, { class: `${e2}-color-picker-slider`, style: { height: pr, borderRadius: hr } }, U(`div`, { ref: `railRef`, style: { boxShadow: `inset 0 0 2px 0 rgba(0, 0, 0, .24)`, boxSizing: `border-box`, backgroundImage: _r, height: pr, borderRadius: hr, position: `relative` }, onMousedown: this.handleMouseDown }, U(`div`, { style: { position: `absolute`, left: hr, right: hr, top: 0, bottom: 0 } }, U(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc((${this.hue}%) / 359 * 100 - ${hr})`, borderRadius: hr, width: pr, height: pr } }, U(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: `hsl(${this.hue}, 100%, 50%)`, borderRadius: hr, width: pr, height: pr } })))));
} }), yr = `12px`, br = `6px`, xr = K({ name: `Pallete`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, displayedHue: { type: Number, required: true }, displayedSv: { type: Array, required: true }, onUpdateSV: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = B(null);
  function n2(e3) {
    t2.value && (qe(`mousemove`, document, r2), qe(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, height: a2, left: o2, bottom: s2 } = r3.getBoundingClientRect(), c2 = (s2 - n3.clientY) / a2, l2 = (n3.clientX - o2) / i3, u2 = 100 * (l2 > 1 ? 1 : l2 < 0 ? 0 : l2), d2 = 100 * (c2 > 1 ? 1 : c2 < 0 ? 0 : c2);
    e2.onUpdateSV(u2, d2);
  }
  function i2() {
    var t3;
    Be(`mousemove`, document, r2), Be(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { palleteRef: t2, handleColor: q(() => {
    let { rgba: t3 } = e2;
    return t3 ? `rgb(${t3[0]}, ${t3[1]}, ${t3[2]})` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return U(`div`, { class: `${e2}-color-picker-pallete`, onMousedown: this.handleMouseDown, ref: `palleteRef` }, U(`div`, { class: `${e2}-color-picker-pallete__layer`, style: { backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))` } }), U(`div`, { class: `${e2}-color-picker-pallete__layer ${e2}-color-picker-pallete__layer--shadowed`, style: { backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))` } }), this.rgba && U(`div`, { class: `${e2}-color-picker-handle`, style: { width: yr, height: yr, borderRadius: br, left: `calc(${this.displayedSv[0]}% - ${br})`, bottom: `calc(${this.displayedSv[1]}% - ${br})` } }, U(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: this.handleColor, borderRadius: br, width: yr, height: yr } })));
} }), Sr = x([A(`color-picker`, `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), A(`color-picker-panel`, `
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
 `, [Wt(), A(`input`, `
 text-align: center;
 `)]), A(`color-picker-checkboard`, `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [x(`&::after`, `
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
 `)]), A(`color-picker-slider`, `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [C(`image`, `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), x(`&::after`, `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), A(`color-picker-handle`, `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [C(`fill`, `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), A(`color-picker-pallete`, `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [C(`layer`, `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [O(`shadowed`, `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), A(`color-picker-preview`, `
 display: flex;
 `, [C(`sliders`, `
 flex: 1 0 auto;
 `), C(`preview`, `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), C(`fill`, `
 display: block;
 width: 30px;
 height: 30px;
 `), C(`input`, `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), A(`color-picker-input`, `
 display: flex;
 align-items: center;
 `, [A(`input`, `
 flex-grow: 1;
 flex-basis: 0;
 `), C(`mode`, `
 width: 72px;
 text-align: center;
 `)]), A(`color-picker-control`, `
 padding: 12px;
 `), A(`color-picker-action`, `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [A(`button`, `margin-left: 8px;`)]), A(`color-picker-trigger`, `
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `, [C(`value`, `
 white-space: nowrap;
 position: relative;
 `), C(`fill`, `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), O(`disabled`, `cursor: not-allowed`), A(`color-picker-checkboard`, `
 border-radius: var(--n-border-radius);
 `, [x(`&::after`, `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), A(`color-picker-swatches`, `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [A(`color-picker-swatch`, `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [C(`fill`, `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), x(`&:focus`, `
 outline: none;
 `, [C(`fill`, [x(`&::after`, `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]), Cr = K({ name: `ColorPicker`, props: Object.assign(Object.assign({}, E.props), { value: String, show: { type: Boolean, default: void 0 }, defaultShow: Boolean, defaultValue: String, modes: { type: Array, default: () => [`rgb`, `hex`, `hsl`] }, placement: { type: String, default: `bottom-start` }, to: je.propTo, showAlpha: { type: Boolean, default: true }, showPreview: Boolean, swatches: Array, disabled: { type: Boolean, default: void 0 }, actions: { type: Array, default: null }, internalActions: Array, size: String, renderLabel: Function, onComplete: Function, onConfirm: Function, onClear: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), slots: Object, setup(e2, { slots: t2 }) {
  let i2 = B(null), f2 = null, m2 = Yt(e2), { mergedSizeRef: x2, mergedDisabledRef: S2 } = m2, { localeRef: C2 } = Gt(`global`), { mergedClsPrefixRef: T2, namespaceRef: ee2, inlineThemeDisabled: te2 } = ce(e2), ne2 = E(`ColorPicker`, `-color-picker`, Sr, Mt, e2, T2);
  Ze($n, { themeRef: ne2, renderLabelRef: z(e2, `renderLabel`), colorPickerSlots: t2 });
  let O2 = B(e2.defaultShow), k2 = ke(z(e2, `show`), O2);
  function A2(t3) {
    let { onUpdateShow: n2, "onUpdate:show": i3 } = e2;
    n2 && r(n2, t3), i3 && r(i3, t3), O2.value = t3;
  }
  let { defaultValue: re2 } = e2, ae2 = B(re2 === void 0 ? Vn(e2.modes, e2.showAlpha) : re2), j2 = ke(z(e2, `value`), ae2), oe2 = B([j2.value]), M2 = B(0), se2 = q(() => Hn(j2.value)), { modes: le2 } = e2, de2 = B(Hn(j2.value) || le2[0] || `rgb`);
  function fe2() {
    let { modes: t3 } = e2, { value: n2 } = de2, r2 = t3.findIndex((e3) => e3 === n2);
    ~r2 ? de2.value = t3[(r2 + 1) % t3.length] : de2.value = `rgb`;
  }
  let N2, P2, pe2, me2, F2, I2, he2, ge2, _e2 = q(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (se2.value) {
      case `hsv`:
        return c(e3);
      case `hsl`:
        return [N2, P2, pe2, ge2] = a(e3), [...ie(N2, P2, pe2), ge2];
      case `rgb`:
      case `hex`:
        return [F2, I2, he2, ge2] = d(e3), [...p(F2, I2, he2), ge2];
    }
  }), ve2 = q(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (se2.value) {
      case `rgb`:
      case `hex`:
        return d(e3);
      case `hsv`:
        return [N2, P2, me2, ge2] = c(e3), [...v(N2, P2, me2), ge2];
      case `hsl`:
        return [N2, P2, pe2, ge2] = a(e3), [...l(N2, P2, pe2), ge2];
    }
  }), ye2 = q(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (se2.value) {
      case `hsl`:
        return a(e3);
      case `hsv`:
        return [N2, P2, me2, ge2] = c(e3), [...y(N2, P2, me2), ge2];
      case `rgb`:
      case `hex`:
        return [F2, I2, he2, ge2] = d(e3), [...b(F2, I2, he2), ge2];
    }
  }), be2 = q(() => {
    switch (de2.value) {
      case `rgb`:
      case `hex`:
        return ve2.value;
      case `hsv`:
        return _e2.value;
      case `hsl`:
        return ye2.value;
    }
  }), xe2 = B(0), Se2 = B(1), Ce2 = B([0, 0]);
  function we2(t3, r2) {
    let { value: i3 } = _e2, a2 = xe2.value, c2 = i3 ? i3[3] : 1;
    Ce2.value = [t3, r2];
    let { showAlpha: l2 } = e2;
    switch (de2.value) {
      case `hsv`:
        L2((l2 ? _ : h)([a2, t3, r2, c2]), `cursor`);
        break;
      case `hsl`:
        L2((l2 ? s : g)([...y(a2, t3, r2), c2]), `cursor`);
        break;
      case `rgb`:
        L2((l2 ? u : o)([...v(a2, t3, r2), c2]), `cursor`);
        break;
      case `hex`:
        L2((l2 ? n : ue)([...v(a2, t3, r2), c2]), `cursor`);
        break;
    }
  }
  function Te2(t3) {
    xe2.value = t3;
    let { value: r2 } = _e2;
    if (!r2) return;
    let [, i3, a2, c2] = r2, { showAlpha: l2 } = e2;
    switch (de2.value) {
      case `hsv`:
        L2((l2 ? _ : h)([t3, i3, a2, c2]), `cursor`);
        break;
      case `rgb`:
        L2((l2 ? u : o)([...v(t3, i3, a2), c2]), `cursor`);
        break;
      case `hex`:
        L2((l2 ? n : ue)([...v(t3, i3, a2), c2]), `cursor`);
        break;
      case `hsl`:
        L2((l2 ? s : g)([...y(t3, i3, a2), c2]), `cursor`);
        break;
    }
  }
  function Ee2(e3) {
    switch (de2.value) {
      case `hsv`:
        [N2, P2, me2] = _e2.value, L2(_([N2, P2, me2, e3]), `cursor`);
        break;
      case `rgb`:
        [F2, I2, he2] = ve2.value, L2(u([F2, I2, he2, e3]), `cursor`);
        break;
      case `hex`:
        [F2, I2, he2] = ve2.value, L2(n([F2, I2, he2, e3]), `cursor`);
        break;
      case `hsl`:
        [N2, P2, pe2] = ye2.value, L2(s([N2, P2, pe2, e3]), `cursor`);
        break;
    }
    Se2.value = e3;
  }
  function L2(t3, n2) {
    f2 = n2 === `cursor` ? t3 : null;
    let { nTriggerFormChange: i3, nTriggerFormInput: a2 } = m2, { onUpdateValue: o2, "onUpdate:value": s2 } = e2;
    o2 && r(o2, t3), s2 && r(s2, t3), i3(), a2(), ae2.value = t3;
  }
  function De2(e3) {
    L2(e3, `input`), at(Oe2);
  }
  function Oe2(t3 = true) {
    let { value: n2 } = j2;
    if (n2) {
      let { nTriggerFormChange: r2, nTriggerFormInput: i3 } = m2, { onComplete: a2 } = e2;
      a2 && a2(n2);
      let { value: o2 } = oe2, { value: s2 } = M2;
      t3 && (o2.splice(s2 + 1, o2.length, n2), M2.value = s2 + 1), r2(), i3();
    }
  }
  function Ae2() {
    let { value: e3 } = M2;
    e3 - 1 < 0 || (L2(oe2.value[e3 - 1], `input`), Oe2(false), M2.value = e3 - 1);
  }
  function Me2() {
    let { value: e3 } = M2;
    e3 < 0 || e3 + 1 >= oe2.value.length || (L2(oe2.value[e3 + 1], `input`), Oe2(false), M2.value = e3 + 1);
  }
  function Ne2() {
    L2(null, `input`);
    let { onClear: t3 } = e2;
    t3 && t3(), A2(false);
  }
  function Pe2() {
    let { value: t3 } = j2, { onConfirm: n2 } = e2;
    n2 && n2(t3), A2(false);
  }
  let Fe2 = q(() => M2.value >= 1), Ie2 = q(() => {
    let { value: e3 } = oe2;
    return e3.length > 1 && M2.value < e3.length - 1;
  });
  it(k2, (e3) => {
    e3 || (oe2.value = [j2.value], M2.value = 0);
  }), wt(() => {
    if (!(f2 && f2 === j2.value)) {
      let { value: e3 } = _e2;
      e3 && (xe2.value = e3[0], Se2.value = e3[3], Ce2.value = [e3[1], e3[2]]);
    }
    f2 = null;
  });
  let Le2 = q(() => {
    let { value: e3 } = x2, { common: { cubicBezierEaseInOut: t3 }, self: { textColor: n2, color: r2, panelFontSize: i3, boxShadow: a2, border: o2, borderRadius: s2, dividerColor: c2, [w(`height`, e3)]: l2, [w(`fontSize`, e3)]: u2 } } = ne2.value;
    return { "--n-bezier": t3, "--n-text-color": n2, "--n-color": r2, "--n-panel-font-size": i3, "--n-font-size": u2, "--n-box-shadow": a2, "--n-border": o2, "--n-border-radius": s2, "--n-height": l2, "--n-divider-color": c2 };
  }), Re2 = te2 ? D(`color-picker`, q(() => x2.value[0]), Le2, e2) : void 0;
  function ze2() {
    var _a;
    let { value: n2 } = ve2, { value: r2 } = xe2, { internalActions: i3, modes: a2, actions: o2 } = e2, { value: s2 } = ne2, { value: c2 } = T2;
    return U(`div`, { class: [`${c2}-color-picker-panel`, Re2 == null ? void 0 : Re2.themeClass.value], onDragstart: (e3) => {
      e3.preventDefault();
    }, style: te2 ? void 0 : Le2.value }, U(`div`, { class: `${c2}-color-picker-control` }, U(xr, { clsPrefix: c2, rgba: n2, displayedHue: r2, displayedSv: Ce2.value, onUpdateSV: we2, onComplete: Oe2 }), U(`div`, { class: `${c2}-color-picker-preview` }, U(`div`, { class: `${c2}-color-picker-preview__sliders` }, U(vr, { clsPrefix: c2, hue: r2, onUpdateHue: Te2, onComplete: Oe2 }), e2.showAlpha ? U(Qn, { clsPrefix: c2, rgba: n2, alpha: Se2.value, onUpdateAlpha: Ee2, onComplete: Oe2 }) : null), e2.showPreview ? U(fr, { clsPrefix: c2, mode: de2.value, color: ve2.value && ue(ve2.value), onUpdateColor: (e3) => {
      L2(e3, `input`);
    } }) : null), U(sr, { clsPrefix: c2, showAlpha: e2.showAlpha, mode: de2.value, modes: a2, onUpdateMode: fe2, value: j2.value, valueArr: be2.value, onUpdateValue: De2 }), ((_a = e2.swatches) == null ? void 0 : _a.length) && U(ur, { clsPrefix: c2, mode: de2.value, swatches: e2.swatches, onUpdateColor: (e3) => {
      L2(e3, `input`);
    } })), (o2 == null ? void 0 : o2.length) ? U(`div`, { class: `${c2}-color-picker-action` }, o2.includes(`confirm`) && U(Q, { size: `small`, onClick: Pe2, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.confirm }), o2.includes(`clear`) && U(Q, { size: `small`, onClick: Ne2, disabled: !j2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.clear })) : null, t2.action ? U(`div`, { class: `${c2}-color-picker-action` }, { default: t2.action }) : i3 ? U(`div`, { class: `${c2}-color-picker-action` }, i3.includes(`undo`) && U(Q, { size: `small`, onClick: Ae2, disabled: !Fe2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.undo }), i3.includes(`redo`) && U(Q, { size: `small`, onClick: Me2, disabled: !Ie2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.redo })) : null);
  }
  return { mergedClsPrefix: T2, namespace: ee2, selfRef: i2, hsla: ye2, rgba: ve2, mergedShow: k2, mergedDisabled: S2, isMounted: Ge(), adjustedTo: je(e2), mergedValue: j2, handleTriggerClick() {
    A2(true);
  }, handleClickOutside(e3) {
    var _a;
    ((_a = i2.value) == null ? void 0 : _a.contains(Ke(e3))) || A2(false);
  }, renderPanel: ze2, cssVars: te2 ? void 0 : Le2, themeClass: Re2 == null ? void 0 : Re2.themeClass, onRender: Re2 == null ? void 0 : Re2.onRender };
}, render() {
  let { mergedClsPrefix: e2, onRender: t2 } = this;
  return t2 == null ? void 0 : t2(), U(`div`, { class: [this.themeClass, `${e2}-color-picker`], ref: `selfRef`, style: this.cssVars }, U(Pe, null, { default: () => [U(Ne, null, { default: () => U(dr, { clsPrefix: e2, value: this.mergedValue, hsla: this.hsla, disabled: this.mergedDisabled, onClick: this.handleTriggerClick }) }), U(L, { placement: this.placement, show: this.mergedShow, containerClass: this.namespace, teleportDisabled: this.adjustedTo === je.tdkey, to: this.adjustedTo }, { default: () => U(et, { name: `fade-in-scale-up-transition`, appear: this.isMounted }, { default: () => this.mergedShow ? st(this.renderPanel(), [[Me, this.handleClickOutside, void 0, { capture: true }]]) : null }) })] }));
} }), wr = A(`dynamic-tags`, [A(`input`, { minWidth: `var(--n-input-width)` })]), Tr = K({ name: `DynamicTags`, props: Object.assign(Object.assign(Object.assign({}, E.props), en), { size: { type: String, default: `medium` }, closable: { type: Boolean, default: true }, defaultValue: { type: Array, default: () => [] }, value: Array, inputClass: String, inputStyle: [String, Object], inputProps: Object, max: Number, tagClass: String, tagStyle: [String, Object], renderTag: Function, onCreate: { type: Function, default: (e2) => e2 }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = ce(e2), { localeRef: i2 } = Gt(`DynamicTags`), a2 = Yt(e2), { mergedDisabledRef: o2 } = a2, s2 = B(``), c2 = B(false), l2 = B(true), u2 = B(null), d2 = E(`DynamicTags`, `-dynamic-tags`, wr, Lt, e2, t2), f2 = B(e2.defaultValue), p2 = ke(z(e2, `value`), f2), m2 = q(() => i2.value.add), h2 = q(() => In(e2.size)), g2 = q(() => o2.value || !!e2.max && p2.value.length >= e2.max);
  function _2(t3) {
    let { onChange: n3, "onUpdate:value": i3, onUpdateValue: o3 } = e2, { nTriggerFormInput: s3, nTriggerFormChange: c3 } = a2;
    n3 && r(n3, t3), o3 && r(o3, t3), i3 && r(i3, t3), f2.value = t3, s3(), c3();
  }
  function v2(e3) {
    let t3 = p2.value.slice(0);
    t3.splice(e3, 1), _2(t3);
  }
  function y2(e3) {
    switch (e3.key) {
      case `Enter`:
        b2();
    }
  }
  function b2(t3) {
    let n3 = t3 ?? s2.value;
    if (n3) {
      let t4 = p2.value.slice(0);
      t4.push(e2.onCreate(n3)), _2(t4);
    }
    c2.value = false, l2.value = true, s2.value = ``;
  }
  function x2() {
    b2();
  }
  function S2() {
    c2.value = true, at(() => {
      var e3;
      (e3 = u2.value) == null || e3.focus(), l2.value = false;
    });
  }
  let C2 = q(() => {
    let { self: { inputWidth: e3 } } = d2.value;
    return { "--n-input-width": e3 };
  }), w2 = n2 ? D(`dynamic-tags`, void 0, C2, e2) : void 0;
  return { mergedClsPrefix: t2, inputInstRef: u2, localizedAdd: m2, inputSize: h2, inputValue: s2, showInput: c2, inputForceFocused: l2, mergedValue: p2, mergedDisabled: o2, triggerDisabled: g2, handleInputKeyDown: y2, handleAddClick: S2, handleInputBlur: x2, handleCloseClick: v2, handleInputConfirm: b2, mergedTheme: d2, cssVars: n2 ? void 0 : C2, themeClass: w2 == null ? void 0 : w2.themeClass, onRender: w2 == null ? void 0 : w2.onRender };
}, render() {
  let { mergedTheme: e2, cssVars: t2, mergedClsPrefix: n2, onRender: r2, renderTag: i2 } = this;
  return r2 == null ? void 0 : r2(), U(sn, { class: [`${n2}-dynamic-tags`, this.themeClass], size: `small`, style: t2, theme: e2.peers.Space, themeOverrides: e2.peerOverrides.Space, itemStyle: `display: flex;` }, { default: () => {
    let { mergedTheme: e3, tagClass: t3, tagStyle: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, mergedDisabled: u2, showInput: d2, inputValue: f2, inputClass: p2, inputStyle: m2, inputSize: h2, inputForceFocused: g2, triggerDisabled: _2, handleInputKeyDown: v2, handleInputBlur: y2, handleAddClick: b2, handleCloseClick: x2, handleInputConfirm: S2, $slots: C2 } = this;
    return this.mergedValue.map((n3, d3) => i2 ? i2(n3, d3) : U(nn, { key: d3, theme: e3.peers.Tag, themeOverrides: e3.peerOverrides.Tag, class: t3, style: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, disabled: u2, onClose: () => {
      x2(d3);
    } }, { default: () => typeof n3 == `string` ? n3 : n3.label })).concat(d2 ? C2.input ? C2.input({ submit: S2, deactivate: y2 }) : U(we, Object.assign({ placeholder: ``, size: h2, style: m2, class: p2, autosize: true }, this.inputProps, { ref: `inputInstRef`, value: f2, onUpdateValue: (e4) => {
      this.inputValue = e4;
    }, theme: e3.peers.Input, themeOverrides: e3.peerOverrides.Input, onKeydown: v2, onBlur: y2, internalForceFocus: g2 })) : C2.trigger ? C2.trigger({ activate: b2, disabled: _2 }) : U(Q, { dashed: true, disabled: _2, theme: e3.peers.Button, themeOverrides: e3.peerOverrides.Button, size: h2, onClick: b2 }, { icon: () => U(M, { clsPrefix: n2 }, { default: () => U(F, null) }) }));
  } });
} }), Er = K({ name: `Flex`, props: Object.assign(Object.assign({}, E.props), { align: String, justify: { type: String, default: `start` }, inline: Boolean, vertical: Boolean, reverse: Boolean, size: { type: [String, Number, Array], default: `medium` }, wrap: { type: Boolean, default: true } }), setup(t2) {
  let { mergedClsPrefixRef: n2, mergedRtlRef: r2 } = ce(t2), i2 = E(`Flex`, `-flex`, void 0, Pt, t2, n2);
  return { rtlEnabled: ee(`Flex`, r2, n2), mergedClsPrefix: n2, margin: q(() => {
    let { size: n3 } = t2;
    if (Array.isArray(n3)) return { horizontal: n3[0], vertical: n3[1] };
    if (typeof n3 == `number`) return { horizontal: n3, vertical: n3 };
    let { self: { [w(`gap`, n3)]: r3 } } = i2.value, { row: a2, col: o2 } = T(r3);
    return { horizontal: e(o2), vertical: e(a2) };
  }) };
}, render() {
  let { vertical: e2, reverse: t2, align: n2, inline: r2, justify: i2, margin: a2, wrap: o2, mergedClsPrefix: s2, rtlEnabled: c2 } = this, l2 = Je($t(this), false);
  return l2.length ? U(`div`, { role: `none`, class: [`${s2}-flex`, c2 && `${s2}-flex--rtl`], style: { display: r2 ? `inline-flex` : `flex`, flexDirection: /* @__PURE__ */ (() => e2 && !t2 ? `column` : e2 && t2 ? `column-reverse` : !e2 && t2 ? `row-reverse` : `row`)(), justifyContent: i2, flexWrap: !o2 || e2 ? `nowrap` : `wrap`, alignItems: n2, gap: `${a2.vertical}px ${a2.horizontal}px` } }, l2) : null;
} });
const Dr = f(`n-grid`), Or = { span: { type: [Number, String], default: 1 }, offset: { type: [Number, String], default: 0 }, suffix: Boolean, privateOffset: Number, privateSpan: Number, privateColStart: Number, privateShow: { type: Boolean, default: true } };
i(Or);
var kr = K({ __GRID_ITEM__: true, name: `GridItem`, alias: [`Gi`], props: Or, setup() {
  let { isSsrRef: e2, xGapRef: t2, itemStyleRef: n2, overflowRef: r2, layoutShiftDisabledRef: i2 } = St(Dr), a2 = mt();
  return { overflow: r2, itemStyle: n2, layoutShiftDisabled: i2, mergedXGap: q(() => k(t2.value || 0)), deriveStyle: () => {
    e2.value;
    let { privateSpan: n3 = 1, privateShow: r3 = true, privateColStart: i3 = void 0, privateOffset: o2 = 0 } = a2.vnode.props, { value: s2 } = t2, c2 = k(s2 || 0);
    return { display: r3 ? `` : `none`, gridColumn: `${i3 ?? `span ${n3}`} / span ${n3}`, marginLeft: o2 ? `calc((100% - (${n3} - 1) * ${c2}) / ${n3} * ${o2} + ${c2} * ${o2})` : `` };
  } };
}, render() {
  var _a;
  var e2;
  if (this.layoutShiftDisabled) {
    let { span: e3, offset: t2, mergedXGap: n2 } = this;
    return U(`div`, { style: { gridColumn: `span ${e3} / span ${e3}`, marginLeft: t2 ? `calc((100% - (${e3} - 1) * ${n2}) / ${e3} * ${t2} + ${n2} * ${t2})` : `` } }, this.$slots);
  }
  return U(`div`, { style: [this.itemStyle, this.deriveStyle()] }, (_a = (e2 = this.$slots).default) == null ? void 0 : _a.call(e2, { overflow: this.overflow }));
} });
const Ar = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 };
var jr = 24, Mr = `__ssr__`, Nr = K({ name: `Grid`, inheritAttrs: false, props: { layoutShiftDisabled: Boolean, responsive: { type: [String, Boolean], default: `self` }, cols: { type: [Number, String], default: jr }, itemResponsive: Boolean, collapsed: Boolean, collapsedRows: { type: Number, default: 1 }, itemStyle: [Object, String], xGap: { type: [Number, String], default: 0 }, yGap: { type: [Number, String], default: 0 } }, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedBreakpointsRef: n2 } = ce(e2), r2 = /^\d+$/, i2 = B(void 0), a2 = Mn((n2 == null ? void 0 : n2.value) || Ar), o2 = Fe(() => !!(e2.itemResponsive || !r2.test(e2.cols.toString()) || !r2.test(e2.xGap.toString()) || !r2.test(e2.yGap.toString()))), s2 = q(() => {
    if (o2.value) return e2.responsive === `self` ? i2.value : a2.value;
  }), c2 = Fe(() => Number(ae(e2.cols.toString(), s2.value)) ?? jr), l2 = Fe(() => ae(e2.xGap.toString(), s2.value)), u2 = Fe(() => ae(e2.yGap.toString(), s2.value)), d2 = (e3) => {
    i2.value = e3.contentRect.width;
  }, f2 = (e3) => {
    Ve(d2, e3);
  }, p2 = B(false), m2 = q(() => {
    if (e2.responsive === `self`) return f2;
  }), h2 = B(false), g2 = B();
  return Qe(() => {
    let { value: e3 } = g2;
    e3 && e3.hasAttribute(Mr) && (e3.removeAttribute(Mr), h2.value = true);
  }), Ze(Dr, { layoutShiftDisabledRef: z(e2, `layoutShiftDisabled`), isSsrRef: h2, itemStyleRef: z(e2, `itemStyle`), xGapRef: l2, overflowRef: p2 }), { isSsr: !Oe, contentEl: g2, mergedClsPrefix: t2, style: q(() => e2.layoutShiftDisabled ? { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${e2.cols}, minmax(0, 1fr))`, columnGap: k(e2.xGap), rowGap: k(e2.yGap) } : { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${c2.value}, minmax(0, 1fr))`, columnGap: k(l2.value), rowGap: k(u2.value) }), isResponsive: o2, responsiveQuery: s2, responsiveCols: c2, handleResize: m2, overflow: p2 };
}, render() {
  if (this.layoutShiftDisabled) return U(`div`, Ct({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style }, this.$attrs), this.$slots);
  let e2 = () => {
    var _a, _b, _c, _d;
    this.overflow = false;
    let e3 = Je($t(this)), t2 = [], { collapsed: n2, collapsedRows: r2, responsiveCols: i2, responsiveQuery: a2 } = this;
    e3.forEach((e4) => {
      var _a2, _b2, _c2, _d2;
      if (((_a2 = e4 == null ? void 0 : e4.type) == null ? void 0 : _a2.__GRID_ITEM__) !== true) return;
      if (Ln(e4)) {
        let n4 = ft(e4);
        n4.props ? n4.props.privateShow = false : n4.props = { privateShow: false }, t2.push({ child: n4, rawChildSpan: 0 });
        return;
      }
      e4.dirs = ((_b2 = e4.dirs) == null ? void 0 : _b2.filter(({ dir: e5 }) => e5 !== ut)) || null, ((_c2 = e4.dirs) == null ? void 0 : _c2.length) === 0 && (e4.dirs = null);
      let n3 = ft(e4), r3 = Number(ae((_d2 = n3.props) == null ? void 0 : _d2.span, a2) ?? 1);
      r3 !== 0 && t2.push({ child: n3, rawChildSpan: r3 });
    });
    let o2 = 0, s2 = (_a = t2[t2.length - 1]) == null ? void 0 : _a.child;
    if (s2 == null ? void 0 : s2.props) {
      let e4 = (_b = s2.props) == null ? void 0 : _b.suffix;
      e4 !== void 0 && e4 !== false && (o2 = Number(ae((_c = s2.props) == null ? void 0 : _c.span, a2) ?? 1), s2.props.privateSpan = o2, s2.props.privateColStart = i2 + 1 - o2, s2.props.privateShow = s2.props.privateShow ?? true);
    }
    let c2 = 0, l2 = false;
    for (let { child: e4, rawChildSpan: s3 } of t2) {
      if (l2 && (this.overflow = true), !l2) {
        let t3 = Number(ae((_d = e4.props) == null ? void 0 : _d.offset, a2) ?? 0), u2 = Math.min(s3 + t3, i2);
        if (e4.props ? (e4.props.privateSpan = u2, e4.props.privateOffset = t3) : e4.props = { privateSpan: u2, privateOffset: t3 }, n2) {
          let e5 = c2 % i2;
          u2 + e5 > i2 && (c2 += i2 - e5), u2 + c2 + o2 > r2 * i2 ? l2 = true : c2 += u2;
        }
      }
      l2 && (e4.props ? e4.props.privateShow !== true && (e4.props.privateShow = false) : e4.props = { privateShow: false });
    }
    return U(`div`, Ct({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style, [Mr]: this.isSsr || void 0 }, this.$attrs), t2.map(({ child: e4 }) => e4));
  };
  return this.isResponsive && this.responsive === `self` ? U(Ie, { onResize: this.handleResize }, { default: e2 }) : e2();
} }), Pr = x([A(`input-number-suffix`, `
 display: inline-block;
 margin-right: 10px;
 `), A(`input-number-prefix`, `
 display: inline-block;
 margin-left: 10px;
 `)]);
function Fr(e2) {
  return e2 == null || typeof e2 == `string` && e2.trim() === `` ? null : Number(e2);
}
function Ir(e2) {
  return e2.includes(`.`) && (/^(-)?\d+.*(\.|0)$/.test(e2) || /^-?\d*$/.test(e2)) || e2 === `-` || e2 === `-0`;
}
function Lr(e2) {
  return e2 == null ? true : !Number.isNaN(e2);
}
function Rr(e2, t2) {
  return typeof e2 == `number` ? t2 === void 0 ? String(e2) : e2.toFixed(t2) : ``;
}
function zr(e2) {
  if (e2 === null) return null;
  if (typeof e2 == `number`) return e2;
  {
    let t2 = Number(e2);
    return Number.isNaN(t2) ? null : t2;
  }
}
var Br = 800, Vr = 100, Hr = K({ name: `InputNumber`, props: Object.assign(Object.assign({}, E.props), { autofocus: Boolean, loading: { type: Boolean, default: void 0 }, placeholder: String, defaultValue: { type: Number, default: null }, value: Number, step: { type: [Number, String], default: 1 }, min: [Number, String], max: [Number, String], size: String, disabled: { type: Boolean, default: void 0 }, validator: Function, bordered: { type: Boolean, default: void 0 }, showButton: { type: Boolean, default: true }, buttonPlacement: { type: String, default: `right` }, inputProps: Object, readonly: Boolean, clearable: Boolean, keyboard: { type: Object, default: {} }, updateValueOnInput: { type: Boolean, default: true }, round: { type: Boolean, default: void 0 }, parse: Function, format: Function, precision: Number, status: String, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClear: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedBorderedRef: t2, mergedClsPrefixRef: n2, mergedRtlRef: i2 } = ce(e2), a2 = E(`InputNumber`, `-input-number`, Pr, It, e2, n2), { localeRef: o2 } = Gt(`InputNumber`), s2 = Yt(e2), { mergedSizeRef: c2, mergedDisabledRef: l2, mergedStatusRef: u2 } = s2, f2 = B(null), p2 = B(null), m2 = B(null), h2 = B(e2.defaultValue), g2 = ke(z(e2, `value`), h2), _2 = B(``), v2 = (e3) => {
    let t3 = String(e3).split(`.`)[1];
    return t3 ? t3.length : 0;
  }, y2 = (t3) => {
    let n3 = [e2.min, e2.max, e2.step, t3].map((e3) => e3 === void 0 ? 0 : v2(e3));
    return Math.max(...n3);
  }, b2 = Fe(() => {
    let { placeholder: t3 } = e2;
    return t3 === void 0 ? o2.value.placeholder : t3;
  }), x2 = Fe(() => {
    let t3 = zr(e2.step);
    return t3 === null || t3 === 0 ? 1 : Math.abs(t3);
  }), S2 = Fe(() => {
    let t3 = zr(e2.min);
    return t3 === null ? null : t3;
  }), C2 = Fe(() => {
    let t3 = zr(e2.max);
    return t3 === null ? null : t3;
  }), w2 = () => {
    let { value: t3 } = g2;
    if (Lr(t3)) {
      let { format: n3, precision: r2 } = e2;
      n3 ? _2.value = n3(t3) : t3 === null || r2 === void 0 || v2(t3) > r2 ? _2.value = Rr(t3, void 0) : _2.value = Rr(t3, r2);
    } else _2.value = String(t3);
  };
  w2();
  let T2 = (t3) => {
    let { value: n3 } = g2;
    if (t3 === n3) {
      w2();
      return;
    }
    let { "onUpdate:value": i3, onUpdateValue: a3, onChange: o3 } = e2, { nTriggerFormInput: c3, nTriggerFormChange: l3 } = s2;
    o3 && r(o3, t3), a3 && r(a3, t3), i3 && r(i3, t3), h2.value = t3, c3(), l3();
  }, D2 = ({ offset: t3, doUpdateIfValid: n3, fixPrecision: r2, isInputing: i3 }) => {
    let { value: a3 } = _2;
    if (i3 && Ir(a3)) return false;
    let o3 = (e2.parse || Fr)(a3);
    if (o3 === null) return n3 && T2(null), null;
    if (Lr(o3)) {
      let a4 = v2(o3), { precision: s3 } = e2;
      if (s3 !== void 0 && s3 < a4 && !r2) return false;
      let c3 = Number.parseFloat((o3 + t3).toFixed(s3 ?? y2(o3)));
      if (Lr(c3)) {
        let { value: t4 } = C2, { value: r3 } = S2;
        if (t4 !== null && c3 > t4) {
          if (!n3 || i3) return false;
          c3 = t4;
        }
        if (r3 !== null && c3 < r3) {
          if (!n3 || i3) return false;
          c3 = r3;
        }
        return e2.validator && !e2.validator(c3) ? false : (n3 && T2(c3), c3);
      }
    }
    return false;
  }, te2 = Fe(() => D2({ offset: 0, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) === false), ne2 = Fe(() => {
    let { value: t3 } = g2;
    if (e2.validator && t3 === null) return false;
    let { value: n3 } = x2;
    return D2({ offset: -n3, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  }), O2 = Fe(() => {
    let { value: t3 } = g2;
    if (e2.validator && t3 === null) return false;
    let { value: n3 } = x2;
    return D2({ offset: +n3, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  });
  function k2(t3) {
    let { onFocus: n3 } = e2, { nTriggerFormFocus: i3 } = s2;
    n3 && r(n3, t3), i3();
  }
  function A2(t3) {
    var _a, _b;
    if (t3.target === ((_a = f2.value) == null ? void 0 : _a.wrapperElRef)) return;
    let n3 = D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    if (n3 !== false) {
      let e3 = (_b = f2.value) == null ? void 0 : _b.inputElRef;
      e3 && (e3.value = String(n3 || ``)), g2.value === n3 && w2();
    } else w2();
    let { onBlur: i3 } = e2, { nTriggerFormBlur: a3 } = s2;
    i3 && r(i3, t3), a3(), at(() => {
      w2();
    });
  }
  function re2(t3) {
    let { onClear: n3 } = e2;
    n3 && r(n3, t3);
  }
  function ie2() {
    let { value: t3 } = O2;
    if (!t3) {
      pe2();
      return;
    }
    let { value: n3 } = g2;
    if (n3 === null) e2.validator || T2(M2());
    else {
      let { value: e3 } = x2;
      D2({ offset: e3, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  function ae2() {
    let { value: t3 } = ne2;
    if (!t3) {
      N2();
      return;
    }
    let { value: n3 } = g2;
    if (n3 === null) e2.validator || T2(M2());
    else {
      let { value: e3 } = x2;
      D2({ offset: -e3, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  let j2 = k2, oe2 = A2;
  function M2() {
    if (e2.validator) return null;
    let { value: t3 } = S2, { value: n3 } = C2;
    return t3 === null ? n3 === null ? 0 : Math.min(0, n3) : Math.max(0, t3);
  }
  function se2(e3) {
    re2(e3), T2(null);
  }
  function le2(e3) {
    var _a, _b;
    var t3;
    ((_a = m2.value) == null ? void 0 : _a.$el.contains(e3.target)) && e3.preventDefault(), ((_b = p2.value) == null ? void 0 : _b.$el.contains(e3.target)) && e3.preventDefault(), (t3 = f2.value) == null || t3.activate();
  }
  let ue2 = null, de2 = null, fe2 = null;
  function N2() {
    fe2 && (fe2 = (window.clearTimeout(fe2), null)), ue2 && (ue2 = (window.clearInterval(ue2), null));
  }
  let P2 = null;
  function pe2() {
    P2 && (P2 = (window.clearTimeout(P2), null)), de2 && (de2 = (window.clearInterval(de2), null));
  }
  function me2() {
    N2(), fe2 = window.setTimeout(() => {
      ue2 = window.setInterval(() => {
        ae2();
      }, Vr);
    }, Br), qe(`mouseup`, document, N2, { once: true });
  }
  function F2() {
    pe2(), P2 = window.setTimeout(() => {
      de2 = window.setInterval(() => {
        ie2();
      }, Vr);
    }, Br), qe(`mouseup`, document, pe2, { once: true });
  }
  let I2 = () => {
    de2 || ie2();
  }, he2 = () => {
    ue2 || ae2();
  };
  function ge2(t3) {
    var _a;
    var n3;
    if (t3.key === `Enter`) {
      if (t3.target === ((_a = f2.value) == null ? void 0 : _a.wrapperElRef)) return;
      D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ((n3 = f2.value) == null || n3.deactivate());
    } else if (t3.key === `ArrowUp`) {
      if (!O2.value || e2.keyboard.ArrowUp === false) return;
      t3.preventDefault(), D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ie2();
    } else if (t3.key === `ArrowDown`) {
      if (!ne2.value || e2.keyboard.ArrowDown === false) return;
      t3.preventDefault(), D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ae2();
    }
  }
  function _e2(t3) {
    _2.value = t3, e2.updateValueOnInput && !e2.format && !e2.parse && e2.precision === void 0 && D2({ offset: 0, doUpdateIfValid: true, isInputing: true, fixPrecision: false });
  }
  it(g2, () => {
    w2();
  });
  let ve2 = { focus: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.focus();
  }, blur: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.blur();
  }, select: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.select();
  } }, ye2 = ee(`InputNumber`, i2, n2);
  return Object.assign(Object.assign({}, ve2), { rtlEnabled: ye2, inputInstRef: f2, minusButtonInstRef: p2, addButtonInstRef: m2, mergedClsPrefix: n2, mergedBordered: t2, uncontrolledValue: h2, mergedValue: g2, mergedPlaceholder: b2, displayedValueInvalid: te2, mergedSize: c2, mergedDisabled: l2, displayedValue: _2, addable: O2, minusable: ne2, mergedStatus: u2, handleFocus: j2, handleBlur: oe2, handleClear: se2, handleMouseDown: le2, handleAddClick: I2, handleMinusClick: he2, handleAddMousedown: F2, handleMinusMousedown: me2, handleKeyDown: ge2, handleUpdateDisplayedValue: _e2, mergedTheme: a2, inputThemeOverrides: { paddingSmall: `0 8px 0 10px`, paddingMedium: `0 8px 0 12px`, paddingLarge: `0 8px 0 14px` }, buttonThemeOverrides: q(() => {
    let { self: { iconColorDisabled: e3 } } = a2.value, [t3, n3, r2, i3] = d(e3);
    return { textColorTextDisabled: `rgb(${t3}, ${n3}, ${r2})`, opacityDisabled: `${i3}` };
  }) });
}, render() {
  let { mergedClsPrefix: e2, $slots: t2 } = this, n2 = () => U(Qt, { text: true, disabled: !this.minusable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleMinusClick, onMousedown: this.handleMinusMousedown, ref: `minusButtonInstRef` }, { icon: () => m(t2[`minus-icon`], () => [U(M, { clsPrefix: e2 }, { default: () => U(Rn, null) })]) }), r2 = () => U(Qt, { text: true, disabled: !this.addable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleAddClick, onMousedown: this.handleAddMousedown, ref: `addButtonInstRef` }, { icon: () => m(t2[`add-icon`], () => [U(M, { clsPrefix: e2 }, { default: () => U(F, null) })]) });
  return U(`div`, { class: [`${e2}-input-number`, this.rtlEnabled && `${e2}-input-number--rtl`] }, U(we, { ref: `inputInstRef`, autofocus: this.autofocus, status: this.mergedStatus, bordered: this.mergedBordered, loading: this.loading, value: this.displayedValue, onUpdateValue: this.handleUpdateDisplayedValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, builtinThemeOverrides: this.inputThemeOverrides, size: this.mergedSize, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, readonly: this.readonly, round: this.round, textDecoration: this.displayedValueInvalid ? `line-through` : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onClear: this.handleClear, clearable: this.clearable, inputProps: this.inputProps, internalLoadingBeforeSuffix: true }, { prefix: () => {
    var _a;
    return this.showButton && this.buttonPlacement === `both` ? [n2(), le(t2.prefix, (t3) => t3 ? U(`span`, { class: `${e2}-input-number-prefix` }, t3) : null)] : (_a = t2.prefix) == null ? void 0 : _a.call(t2);
  }, suffix: () => {
    var _a;
    return this.showButton ? [le(t2.suffix, (t3) => t3 ? U(`span`, { class: `${e2}-input-number-suffix` }, t3) : null), this.buttonPlacement === `right` ? n2() : null, r2()] : (_a = t2.suffix) == null ? void 0 : _a.call(t2);
  } }));
} }), Ur = A(`layout`, `
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
`, [A(`layout-scroll-container`, `
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
const Wr = { embedded: Boolean, position: Ot, nativeScrollbar: { type: Boolean, default: true }, scrollbarProps: Object, onScroll: Function, contentClass: String, contentStyle: { type: [String, Object], default: `` }, hasSider: Boolean, siderPlacement: { type: String, default: `left` } }, Gr = f(`n-layout`);
function Kr(e2) {
  return K({ name: e2 ? `LayoutContent` : `Layout`, props: Object.assign(Object.assign({}, E.props), Wr), setup(e3) {
    let t2 = B(null), n2 = B(null), { mergedClsPrefixRef: r2, inlineThemeDisabled: i2 } = ce(e3), a2 = E(`Layout`, `-layout`, Ur, Nt, e3, r2);
    function o2(r3, i3) {
      if (e3.nativeScrollbar) {
        let { value: e4 } = t2;
        e4 && (i3 === void 0 ? e4.scrollTo(r3) : e4.scrollTo(r3, i3));
      } else {
        let { value: e4 } = n2;
        e4 && e4.scrollTo(r3, i3);
      }
    }
    Ze(Gr, e3);
    let s2 = 0, c2 = 0, l2 = (t3) => {
      var n3;
      let r3 = t3.target;
      s2 = r3.scrollLeft, c2 = r3.scrollTop, (n3 = e3.onScroll) == null || n3.call(e3, t3);
    };
    De(() => {
      if (e3.nativeScrollbar) {
        let e4 = t2.value;
        e4 && (e4.scrollTop = c2, e4.scrollLeft = s2);
      }
    });
    let u2 = { display: `flex`, flexWrap: `nowrap`, width: `100%`, flexDirection: `row` }, d2 = { scrollTo: o2 }, f2 = q(() => {
      let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = a2.value;
      return { "--n-bezier": t3, "--n-color": e3.embedded ? n3.colorEmbedded : n3.color, "--n-text-color": n3.textColor };
    }), p2 = i2 ? D(`layout`, q(() => e3.embedded ? `e` : ``), f2, e3) : void 0;
    return Object.assign({ mergedClsPrefix: r2, scrollableElRef: t2, scrollbarInstRef: n2, hasSiderStyle: u2, mergedTheme: a2, handleNativeElScroll: l2, cssVars: i2 ? void 0 : f2, themeClass: p2 == null ? void 0 : p2.themeClass, onRender: p2 == null ? void 0 : p2.onRender }, d2);
  }, render() {
    var t2;
    let { mergedClsPrefix: n2, hasSider: r2 } = this;
    (t2 = this.onRender) == null || t2.call(this);
    let i2 = r2 ? this.hasSiderStyle : void 0;
    return U(`div`, { class: [this.themeClass, e2 && `${n2}-layout-content`, `${n2}-layout`, `${n2}-layout--${this.position}-positioned`], style: this.cssVars }, this.nativeScrollbar ? U(`div`, { ref: `scrollableElRef`, class: [`${n2}-layout-scroll-container`, this.contentClass], style: [this.contentStyle, i2], onScroll: this.handleNativeElScroll }, this.$slots) : U(We, Object.assign({}, this.scrollbarProps, { onScroll: this.onScroll, ref: `scrollbarInstRef`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: this.contentClass, contentStyle: [this.contentStyle, i2] }), this.$slots));
  } });
}
Kr(false);
var qr = Kr(true), Jr = A(`layout-footer`, `
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
 `)]), Yr = K({ name: `LayoutFooter`, props: Object.assign(Object.assign({}, E.props), { inverted: Boolean, position: Ot, bordered: Boolean }), setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = ce(e2), r2 = E(`Layout`, `-layout-footer`, Jr, Nt, e2, t2), i2 = q(() => {
    let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = r2.value, i3 = { "--n-bezier": t3 };
    return e2.inverted ? (i3[`--n-color`] = n3.footerColorInverted, i3[`--n-text-color`] = n3.textColorInverted, i3[`--n-border-color`] = n3.footerBorderColorInverted) : (i3[`--n-color`] = n3.footerColor, i3[`--n-text-color`] = n3.textColor, i3[`--n-border-color`] = n3.footerBorderColor), i3;
  }), a2 = n2 ? D(`layout-footer`, q(() => e2.inverted ? `a` : `b`), i2, e2) : void 0;
  return { mergedClsPrefix: t2, cssVars: n2 ? void 0 : i2, themeClass: a2 == null ? void 0 : a2.themeClass, onRender: a2 == null ? void 0 : a2.onRender };
}, render() {
  var e2;
  let { mergedClsPrefix: t2 } = this;
  return (e2 = this.onRender) == null || e2.call(this), U(`div`, { class: [`${t2}-layout-footer`, this.themeClass, this.position && `${t2}-layout-footer--${this.position}-positioned`, this.bordered && `${t2}-layout-footer--bordered`], style: this.cssVars }, this.$slots);
} });
const Xr = f(`n-popconfirm`), Zr = { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true } }, Qr = i(Zr);
var $r = K({ name: `NPopconfirmPanel`, props: Zr, setup(e2) {
  let { localeRef: t2 } = Gt(`Popconfirm`), { inlineThemeDisabled: n2 } = ce(), { mergedClsPrefixRef: r2, mergedThemeRef: i2, props: a2 } = St(Xr), o2 = q(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { fontSize: t3, iconSize: n3, iconColor: r3 } } = i2.value;
    return { "--n-bezier": e3, "--n-font-size": t3, "--n-icon-size": n3, "--n-icon-color": r3 };
  }), s2 = n2 ? D(`popconfirm-panel`, void 0, o2, a2) : void 0;
  return Object.assign(Object.assign({}, Gt(`Popconfirm`)), { mergedClsPrefix: r2, cssVars: n2 ? void 0 : o2, localizedPositiveText: q(() => e2.positiveText || t2.value.positiveText), localizedNegativeText: q(() => e2.negativeText || t2.value.negativeText), positiveButtonProps: z(a2, `positiveButtonProps`), negativeButtonProps: z(a2, `negativeButtonProps`), handlePositiveClick(t3) {
    e2.onPositiveClick(t3);
  }, handleNegativeClick(t3) {
    e2.onNegativeClick(t3);
  }, themeClass: s2 == null ? void 0 : s2.themeClass, onRender: s2 == null ? void 0 : s2.onRender });
}, render() {
  var e2;
  let { mergedClsPrefix: t2, showIcon: n2, $slots: r2 } = this, i2 = m(r2.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && U(Q, Object.assign({ size: `small`, onClick: this.handleNegativeClick }, this.negativeButtonProps), { default: () => this.localizedNegativeText }), this.positiveText !== null && U(Q, Object.assign({ size: `small`, type: `primary`, onClick: this.handlePositiveClick }, this.positiveButtonProps), { default: () => this.localizedPositiveText })]);
  return (e2 = this.onRender) == null || e2.call(this), U(`div`, { class: [`${t2}-popconfirm__panel`, this.themeClass], style: this.cssVars }, le(r2.default, (e3) => n2 || e3 ? U(`div`, { class: `${t2}-popconfirm__body` }, n2 ? U(`div`, { class: `${t2}-popconfirm__icon` }, m(r2.icon, () => [U(M, { clsPrefix: t2 }, { default: () => U(an, null) })])) : null, e3) : null), i2 ? U(`div`, { class: [`${t2}-popconfirm__action`] }, i2) : null);
} }), ei = A(`popconfirm`, [C(`body`, `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [C(`icon`, `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), C(`action`, `
 display: flex;
 justify-content: flex-end;
 `, [x(`&:not(:first-child)`, `margin-top: 8px`), A(`button`, [x(`&:not(:last-child)`, `margin-right: 8px;`)])])]), ti = K({ name: `Popconfirm`, props: Object.assign(Object.assign(Object.assign({}, E.props), Ue), { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, trigger: { type: String, default: `click` }, positiveButtonProps: Object, negativeButtonProps: Object, onPositiveClick: Function, onNegativeClick: Function }), slots: Object, __popover__: true, setup(e2) {
  let { mergedClsPrefixRef: t2 } = ce(), n2 = E(`Popconfirm`, `-popconfirm`, ei, zt, e2, t2), i2 = B(null);
  function a2(t3) {
    var _a;
    if (!((_a = i2.value) == null ? void 0 : _a.getMergedShow())) return;
    let { onPositiveClick: n3, "onUpdate:show": a3 } = e2;
    Promise.resolve(n3 ? n3(t3) : true).then((e3) => {
      var t4;
      e3 !== false && ((t4 = i2.value) == null || t4.setShow(false), a3 && r(a3, false));
    });
  }
  function o2(t3) {
    var _a;
    if (!((_a = i2.value) == null ? void 0 : _a.getMergedShow())) return;
    let { onNegativeClick: n3, "onUpdate:show": a3 } = e2;
    Promise.resolve(n3 ? n3(t3) : true).then((e3) => {
      var t4;
      e3 !== false && ((t4 = i2.value) == null || t4.setShow(false), a3 && r(a3, false));
    });
  }
  return Ze(Xr, { mergedThemeRef: n2, mergedClsPrefixRef: t2, props: e2 }), { setShow(e3) {
    var t3;
    (t3 = i2.value) == null || t3.setShow(e3);
  }, syncPosition() {
    var e3;
    (e3 = i2.value) == null || e3.syncPosition();
  }, mergedTheme: n2, popoverInstRef: i2, handlePositiveClick: a2, handleNegativeClick: o2 };
}, render() {
  let { $slots: e2, $props: t2, mergedTheme: n2 } = this;
  return U(ze, Object.assign({}, At(t2, Qr), { theme: n2.peers.Popover, themeOverrides: n2.peerOverrides.Popover, internalExtraClass: [`popconfirm`], ref: `popoverInstRef` }), { trigger: e2.trigger, default: () => {
    let n3 = Ye(t2, Qr);
    return U($r, Object.assign({}, n3, { onPositiveClick: this.handlePositiveClick, onNegativeClick: this.handleNegativeClick }), e2);
  } });
} }), ni = A(`split`, `
 display: flex;
 width: 100%;
 height: 100%;
`, [O(`horizontal`, `
 flex-direction: row;
 `), O(`vertical`, `
 flex-direction: column;
 `), A(`split-pane-1`, `
 overflow: hidden;
 `), A(`split-pane-2`, `
 overflow: hidden;
 flex: 1;
 `), C(`resize-trigger`, `
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `, [O(`hover`, `
 background-color: var(--n-resize-trigger-color-hover);
 `), x(`&:hover`, `
 background-color: var(--n-resize-trigger-color-hover);
 `)])]), ri = K({ name: `Split`, props: Object.assign(Object.assign({}, E.props), { direction: { type: String, default: `horizontal` }, resizeTriggerSize: { type: Number, default: 3 }, disabled: Boolean, defaultSize: { type: [String, Number], default: 0.5 }, "onUpdate:size": [Function, Array], onUpdateSize: [Function, Array], size: [String, Number], min: { type: [String, Number], default: 0 }, max: { type: [String, Number], default: 1 }, pane1Class: String, pane1Style: [Object, String], pane2Class: String, pane2Style: [Object, String], onDragStart: Function, onDragMove: Function, onDragEnd: Function, watchProps: Array }), slots: Object, setup(t2) {
  var _a;
  let { mergedClsPrefixRef: n2, inlineThemeDisabled: i2 } = ce(t2), a2 = E(`Split`, `-split`, ni, Bt, t2, n2), o2 = q(() => {
    let { common: { cubicBezierEaseInOut: e2 }, self: { resizableTriggerColor: t3, resizableTriggerColorHover: n3 } } = a2.value;
    return { "--n-bezier": e2, "--n-resize-trigger-color": t3, "--n-resize-trigger-color-hover": n3 };
  }), s2 = B(null), c2 = B(false), l2 = z(t2, `size`), u2 = B(t2.defaultSize);
  ((_a = t2.watchProps) == null ? void 0 : _a.includes(`defaultSize`)) && wt(() => u2.value = t2.defaultSize);
  let d2 = (e2) => {
    let n3 = t2[`onUpdate:size`];
    t2.onUpdateSize && r(t2.onUpdateSize, e2), n3 && r(n3, e2), u2.value = e2;
  }, f2 = ke(l2, u2), p2 = q(() => {
    let e2 = f2.value;
    if (typeof e2 == `string`) return { flex: `0 0 ${e2}` };
    if (typeof e2 == `number`) {
      let n3 = e2 * 100;
      return { flex: `0 0 calc(${n3}% - ${t2.resizeTriggerSize * n3 / 100}px)` };
    }
  }), m2 = q(() => t2.direction === `horizontal` ? { width: `${t2.resizeTriggerSize}px`, height: `100%` } : { width: `100%`, height: `${t2.resizeTriggerSize}px` }), h2 = q(() => {
    let e2 = t2.direction === `horizontal`;
    return { width: e2 ? `${t2.resizeTriggerSize}px` : ``, height: e2 ? `` : `${t2.resizeTriggerSize}px`, cursor: t2.direction === `horizontal` ? `col-resize` : `row-resize` };
  }), g2 = 0, _2 = (e2) => {
    e2.preventDefault(), c2.value = true, t2.onDragStart && t2.onDragStart(e2);
    let n3 = `mousemove`, r2 = `mouseup`, i3 = (e3) => {
      v2(e3), t2.onDragMove && t2.onDragMove(e3);
    }, a3 = () => {
      Be(n3, document, i3), Be(r2, document, a3), c2.value = false, t2.onDragEnd && t2.onDragEnd(e2), document.body.style.cursor = ``;
    };
    document.body.style.cursor = h2.value.cursor, qe(n3, document, i3), qe(r2, document, a3);
    let o3 = s2.value;
    if (o3) {
      let n4 = o3.getBoundingClientRect();
      g2 = t2.direction === `horizontal` ? e2.clientX - n4.left : n4.top - e2.clientY;
    }
    v2(e2);
  };
  function v2(n3) {
    var _a2, _b;
    let r2 = (_b = (_a2 = s2.value) == null ? void 0 : _a2.parentElement) == null ? void 0 : _b.getBoundingClientRect();
    if (!r2) return;
    let { direction: i3 } = t2, a3 = r2.width - t2.resizeTriggerSize, o3 = r2.height - t2.resizeTriggerSize, c3 = i3 === `horizontal` ? a3 : o3, l3 = i3 === `horizontal` ? n3.clientX - r2.left - g2 : n3.clientY - r2.top + g2, { min: u3, max: p3 } = t2, m3 = typeof u3 == `string` ? e(u3) : u3 * c3, h3 = typeof p3 == `string` ? e(p3) : p3 * c3, _3 = l3;
    _3 = Math.max(_3, m3), _3 = Math.min(_3, h3, c3), typeof f2.value == `string` ? d2(`${_3}px`) : d2(_3 / c3);
  }
  let y2 = i2 ? D(`split`, void 0, o2, t2) : void 0;
  return { themeClass: y2 == null ? void 0 : y2.themeClass, onRender: y2 == null ? void 0 : y2.onRender, cssVars: i2 ? void 0 : o2, resizeTriggerElRef: s2, isDragging: c2, mergedClsPrefix: n2, resizeTriggerWrapperStyle: h2, resizeTriggerStyle: m2, handleMouseDown: _2, firstPaneStyle: p2 };
}, render() {
  var _a, _b;
  var e2, t2, n2;
  return (e2 = this.onRender) == null || e2.call(this), U(`div`, { class: [`${this.mergedClsPrefix}-split`, `${this.mergedClsPrefix}-split--${this.direction}`, this.themeClass], style: this.cssVars }, U(`div`, { class: [`${this.mergedClsPrefix}-split-pane-1`, this.pane1Class], style: [this.firstPaneStyle, this.pane1Style] }, (_a = (t2 = this.$slots)[1]) == null ? void 0 : _a.call(t2)), !this.disabled && U(`div`, { ref: `resizeTriggerElRef`, class: `${this.mergedClsPrefix}-split__resize-trigger-wrapper`, style: this.resizeTriggerWrapperStyle, onMousedown: this.handleMouseDown }, m(this.$slots[`resize-trigger`], () => [U(`div`, { style: this.resizeTriggerStyle, class: [`${this.mergedClsPrefix}-split__resize-trigger`, this.isDragging && `${this.mergedClsPrefix}-split__resize-trigger--hover`] })])), U(`div`, { class: [`${this.mergedClsPrefix}-split-pane-2`, this.pane2Class], style: this.pane2Style }, (_b = (n2 = this.$slots)[2]) == null ? void 0 : _b.call(n2)));
} });
const ii = f(`n-tabs`), ai = { tab: [String, Number, Object, Function], name: { type: [String, Number], required: true }, disabled: Boolean, displayDirective: { type: String, default: `if` }, closable: { type: Boolean, default: void 0 }, tabProps: Object, label: [String, Number, Object, Function] };
var oi = K({ __TAB_PANE__: true, name: `TabPane`, alias: [`TabPanel`], props: ai, slots: Object, setup(e2) {
  let t2 = St(ii, null);
  return t2 || ne(`tab-pane`, "`n-tab-pane` must be placed inside `n-tabs`."), { style: t2.paneStyleRef, class: t2.paneClassRef, mergedClsPrefix: t2.mergedClsPrefixRef };
}, render() {
  return U(`div`, { class: [`${this.mergedClsPrefix}-tab-pane`, this.class], style: this.style }, this.$slots);
} }), si = K({ __TAB__: true, inheritAttrs: false, name: `Tab`, props: Object.assign({ internalLeftPadded: Boolean, internalAddable: Boolean, internalCreatedByPane: Boolean }, At(ai, [`displayDirective`])), setup(e2) {
  let { mergedClsPrefixRef: t2, valueRef: n2, typeRef: r2, closableRef: i2, tabStyleRef: a2, addTabStyleRef: o2, tabClassRef: s2, addTabClassRef: c2, tabChangeIdRef: l2, onBeforeLeaveRef: u2, triggerRef: d2, handleAdd: f2, activateTab: p2, handleClose: m2 } = St(ii);
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
  return U(`div`, { class: `${t2}-tabs-tab-wrapper` }, this.internalLeftPadded ? U(`div`, { class: `${t2}-tabs-tab-pad` }) : null, U(`div`, Object.assign({ key: n2, "data-name": n2, "data-disabled": r2 ? true : void 0 }, Ct({ class: [`${t2}-tabs-tab`, o2 === n2 && `${t2}-tabs-tab--active`, r2 && `${t2}-tabs-tab--disabled`, s2 && `${t2}-tabs-tab--closable`, e2 && `${t2}-tabs-tab--addable`, e2 ? this.addTabClass : this.tabClass], onClick: c2 === `click` ? this.activateTab : void 0, onMouseenter: c2 === `hover` ? this.activateTab : void 0, style: e2 ? this.addStyle : this.style }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), U(`span`, { class: `${t2}-tabs-tab__label` }, e2 ? U(xt, null, U(`div`, { class: `${t2}-tabs-tab__height-placeholder` }, `\xA0`), U(M, { clsPrefix: t2 }, { default: () => U(F, null) })) : l2 ? l2() : typeof u2 == `object` ? u2 : Xt(u2 ?? n2)), s2 && this.type === `card` ? U(S, { clsPrefix: t2, class: `${t2}-tabs-tab__close`, onClick: this.handleClose, disabled: r2 }) : null));
} }), ci = A(`tabs`, `
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [O(`segment-type`, [A(`tabs-rail`, [x(`&.transition-disabled`, [A(`tabs-capsule`, `
 transition: none;
 `)])])]), O(`top`, [A(`tab-pane`, `
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]), O(`left`, [A(`tab-pane`, `
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]), O(`left, right`, `
 flex-direction: row;
 `, [A(`tabs-bar`, `
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), A(`tabs-tab`, `
 padding: var(--n-tab-padding-vertical); 
 `)]), O(`right`, `
 flex-direction: row-reverse;
 `, [A(`tab-pane`, `
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `), A(`tabs-bar`, `
 left: 0;
 `)]), O(`bottom`, `
 flex-direction: column-reverse;
 justify-content: flex-end;
 `, [A(`tab-pane`, `
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `), A(`tabs-bar`, `
 top: 0;
 `)]), A(`tabs-rail`, `
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [A(`tabs-capsule`, `
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `), A(`tabs-tab-wrapper`, `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [A(`tabs-tab`, `
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [O(`active`, `
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `), x(`&:hover`, `
 color: var(--n-tab-text-color-hover);
 `)])])]), O(`flex`, [A(`tabs-nav`, `
 width: 100%;
 position: relative;
 `, [A(`tabs-wrapper`, `
 width: 100%;
 `, [A(`tabs-tab`, `
 margin-right: 0;
 `)])])]), A(`tabs-nav`, `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [C(`prefix, suffix`, `
 display: flex;
 align-items: center;
 `), C(`prefix`, `padding-right: 16px;`), C(`suffix`, `padding-left: 16px;`)]), O(`top, bottom`, [x(`>`, [A(`tabs-nav`, [A(`tabs-nav-scroll-wrapper`, [x(`&::before`, `
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `), x(`&::after`, `
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `), O(`shadow-start`, [x(`&::before`, `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), O(`shadow-end`, [x(`&::after`, `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]), O(`left, right`, [A(`tabs-nav-scroll-content`, `
 flex-direction: column;
 `), x(`>`, [A(`tabs-nav`, [A(`tabs-nav-scroll-wrapper`, [x(`&::before`, `
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), x(`&::after`, `
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `), O(`shadow-start`, [x(`&::before`, `
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]), O(`shadow-end`, [x(`&::after`, `
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]), A(`tabs-nav-scroll-wrapper`, `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [A(`tabs-nav-y-scroll`, `
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `, [x(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`, `
 width: 0;
 height: 0;
 display: none;
 `)]), x(`&::before, &::after`, `
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]), A(`tabs-nav-scroll-content`, `
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `), A(`tabs-wrapper`, `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), A(`tabs-tab-wrapper`, `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), A(`tabs-tab`, `
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
 `, [O(`disabled`, { cursor: `not-allowed` }), C(`close`, `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), C(`label`, `
 display: flex;
 align-items: center;
 z-index: 1;
 `)]), A(`tabs-bar`, `
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
 `, [x(`&.transition-disabled`, `
 transition: none;
 `), O(`disabled`, `
 background-color: var(--n-tab-text-color-disabled)
 `)]), A(`tabs-pane-wrapper`, `
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `), A(`tab-pane`, `
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `, [x(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`, `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `), x(`&.next-transition-leave-active, &.prev-transition-leave-active`, `
 position: absolute;
 `), x(`&.next-transition-enter-from, &.prev-transition-leave-to`, `
 transform: translateX(32px);
 opacity: 0;
 `), x(`&.next-transition-leave-to, &.prev-transition-enter-from`, `
 transform: translateX(-32px);
 opacity: 0;
 `), x(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`, `
 transform: translateX(0);
 opacity: 1;
 `)]), A(`tabs-tab-pad`, `
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), O(`line-type, bar-type`, [A(`tabs-tab`, `
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [x(`&:hover`, { color: `var(--n-tab-text-color-hover)` }), O(`active`, `
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `), O(`disabled`, { color: `var(--n-tab-text-color-disabled)` })])]), A(`tabs-nav`, [O(`line-type`, [O(`top`, [C(`prefix, suffix`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), A(`tabs-nav-scroll-content`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), A(`tabs-bar`, `
 bottom: -1px;
 `)]), O(`left`, [C(`prefix, suffix`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), A(`tabs-nav-scroll-content`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), A(`tabs-bar`, `
 right: -1px;
 `)]), O(`right`, [C(`prefix, suffix`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), A(`tabs-nav-scroll-content`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), A(`tabs-bar`, `
 left: -1px;
 `)]), O(`bottom`, [C(`prefix, suffix`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), A(`tabs-nav-scroll-content`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), A(`tabs-bar`, `
 top: -1px;
 `)]), C(`prefix, suffix`, `
 transition: border-color .3s var(--n-bezier);
 `), A(`tabs-nav-scroll-content`, `
 transition: border-color .3s var(--n-bezier);
 `), A(`tabs-bar`, `
 border-radius: 0;
 `)]), O(`card-type`, [C(`prefix, suffix`, `
 transition: border-color .3s var(--n-bezier);
 `), A(`tabs-pad`, `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `), A(`tabs-tab-pad`, `
 transition: border-color .3s var(--n-bezier);
 `), A(`tabs-tab`, `
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
 `, [C(`height-placeholder`, `
 width: 0;
 font-size: var(--n-tab-font-size);
 `), se(`disabled`, [x(`&:hover`, `
 color: var(--n-tab-text-color-hover);
 `)])]), O(`closable`, `padding-right: 8px;`), O(`active`, `
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), O(`disabled`, `color: var(--n-tab-text-color-disabled);`)])]), O(`left, right`, `
 flex-direction: column; 
 `, [C(`prefix, suffix`, `
 padding: var(--n-tab-padding-vertical);
 `), A(`tabs-wrapper`, `
 flex-direction: column;
 `), A(`tabs-tab-wrapper`, `
 flex-direction: column;
 `, [A(`tabs-tab-pad`, `
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]), O(`top`, [O(`card-type`, [A(`tabs-scroll-padding`, `border-bottom: 1px solid var(--n-tab-border-color);`), C(`prefix, suffix`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), A(`tabs-tab`, `
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-bottom: 1px solid #0000;
 `)]), A(`tabs-tab-pad`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), A(`tabs-pad`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]), O(`left`, [O(`card-type`, [A(`tabs-scroll-padding`, `border-right: 1px solid var(--n-tab-border-color);`), C(`prefix, suffix`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), A(`tabs-tab`, `
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-right: 1px solid #0000;
 `)]), A(`tabs-tab-pad`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), A(`tabs-pad`, `
 border-right: 1px solid var(--n-tab-border-color);
 `)])]), O(`right`, [O(`card-type`, [A(`tabs-scroll-padding`, `border-left: 1px solid var(--n-tab-border-color);`), C(`prefix, suffix`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), A(`tabs-tab`, `
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-left: 1px solid #0000;
 `)]), A(`tabs-tab-pad`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), A(`tabs-pad`, `
 border-left: 1px solid var(--n-tab-border-color);
 `)])]), O(`bottom`, [O(`card-type`, [A(`tabs-scroll-padding`, `border-top: 1px solid var(--n-tab-border-color);`), C(`prefix, suffix`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), A(`tabs-tab`, `
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-top: 1px solid #0000;
 `)]), A(`tabs-tab-pad`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), A(`tabs-pad`, `
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]), li = _n, ui = K({ name: `Tabs`, props: Object.assign(Object.assign({}, E.props), { value: [String, Number], defaultValue: [String, Number], trigger: { type: String, default: `click` }, type: { type: String, default: `bar` }, closable: Boolean, justifyContent: String, size: { type: String, default: `medium` }, placement: { type: String, default: `top` }, tabStyle: [String, Object], tabClass: String, addTabStyle: [String, Object], addTabClass: String, barWidth: Number, paneClass: String, paneStyle: [String, Object], paneWrapperClass: String, paneWrapperStyle: [String, Object], addable: [Boolean, Object], tabsPadding: { type: Number, default: 0 }, animated: Boolean, onBeforeLeave: Function, onAdd: Function, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onClose: [Function, Array], labelSize: String, activeName: [String, Number], onActiveNameChange: [Function, Array] }), slots: Object, setup(t2, { slots: n2 }) {
  var _a, _b;
  let { mergedClsPrefixRef: i2, inlineThemeDisabled: a2 } = ce(t2), o2 = E(`Tabs`, `-tabs`, ci, Ft, t2, i2), s2 = B(null), c2 = B(null), l2 = B(null), u2 = B(null), d2 = B(null), f2 = B(null), p2 = B(true), m2 = B(true), h2 = Ae(t2, [`labelSize`, `size`]), g2 = Ae(t2, [`activeName`, `value`]), _2 = B(g2.value ?? t2.defaultValue ?? (n2.default ? (_b = (_a = Je(n2.default())[0]) == null ? void 0 : _a.props) == null ? void 0 : _b.name : null)), v2 = ke(g2, _2), y2 = { id: 0 }, b2 = q(() => {
    if (!(!t2.justifyContent || t2.type === `card`)) return { display: `flex`, justifyContent: t2.justifyContent };
  });
  it(v2, () => {
    y2.id = 0, ee2(), te2();
  });
  function x2() {
    var _a2;
    let { value: e2 } = v2;
    return e2 === null ? null : (_a2 = s2.value) == null ? void 0 : _a2.querySelector(`[data-name="${e2}"]`);
  }
  function S2(e2) {
    if (t2.type === `card`) return;
    let { value: n3 } = c2;
    if (!n3) return;
    let r2 = n3.style.opacity === `0`;
    if (e2) {
      let a3 = `${i2.value}-tabs-bar--disabled`, { barWidth: o3, placement: s3 } = t2;
      if (e2.dataset.disabled === `true` ? n3.classList.add(a3) : n3.classList.remove(a3), [`top`, `bottom`].includes(s3)) {
        if (T2([`top`, `maxHeight`, `height`]), typeof o3 == `number` && e2.offsetWidth >= o3) {
          let t3 = Math.floor((e2.offsetWidth - o3) / 2) + e2.offsetLeft;
          n3.style.left = `${t3}px`, n3.style.maxWidth = `${o3}px`;
        } else n3.style.left = `${e2.offsetLeft}px`, n3.style.maxWidth = `${e2.offsetWidth}px`;
        n3.style.width = `8192px`, r2 && (n3.style.transition = `none`), n3.offsetWidth, r2 && (n3.style.transition = ``, n3.style.opacity = `1`);
      } else {
        if (T2([`left`, `maxWidth`, `width`]), typeof o3 == `number` && e2.offsetHeight >= o3) {
          let t3 = Math.floor((e2.offsetHeight - o3) / 2) + e2.offsetTop;
          n3.style.top = `${t3}px`, n3.style.maxHeight = `${o3}px`;
        } else n3.style.top = `${e2.offsetTop}px`, n3.style.maxHeight = `${e2.offsetHeight}px`;
        n3.style.height = `8192px`, r2 && (n3.style.transition = `none`), n3.offsetHeight, r2 && (n3.style.transition = ``, n3.style.opacity = `1`);
      }
    }
  }
  function C2() {
    if (t2.type === `card`) return;
    let { value: e2 } = c2;
    e2 && (e2.style.opacity = `0`);
  }
  function T2(e2) {
    let { value: t3 } = c2;
    if (t3) for (let n3 of e2) t3.style[n3] = ``;
  }
  function ee2() {
    if (t2.type === `card`) return;
    let e2 = x2();
    e2 ? S2(e2) : C2();
  }
  function te2() {
    var _a2;
    let e2 = (_a2 = d2.value) == null ? void 0 : _a2.$el;
    if (!e2) return;
    let t3 = x2();
    if (!t3) return;
    let { scrollLeft: n3, offsetWidth: r2 } = e2, { offsetLeft: i3, offsetWidth: a3 } = t3;
    n3 > i3 ? e2.scrollTo({ top: 0, left: i3, behavior: `smooth` }) : i3 + a3 > n3 + r2 && e2.scrollTo({ top: 0, left: i3 + a3 - r2, behavior: `smooth` });
  }
  let ne2 = B(null), O2 = 0, k2 = null;
  function A2(e2) {
    let t3 = ne2.value;
    if (t3) {
      O2 = e2.getBoundingClientRect().height;
      let n3 = `${O2}px`, r2 = () => {
        t3.style.height = n3, t3.style.maxHeight = n3;
      };
      k2 ? (r2(), k2(), k2 = null) : k2 = r2;
    }
  }
  function re2(e2) {
    let t3 = ne2.value;
    if (t3) {
      let n3 = e2.getBoundingClientRect().height, r2 = () => {
        document.body.offsetHeight, t3.style.maxHeight = `${n3}px`, t3.style.height = `${Math.max(O2, n3)}px`;
      };
      k2 ? (k2(), k2 = null, r2()) : k2 = r2;
    }
  }
  function ie2() {
    let e2 = ne2.value;
    if (e2) {
      e2.style.maxHeight = ``, e2.style.height = ``;
      let { paneWrapperStyle: n3 } = t2;
      if (typeof n3 == `string`) e2.style.cssText = n3;
      else if (n3) {
        let { maxHeight: t3, height: r2 } = n3;
        t3 !== void 0 && (e2.style.maxHeight = t3), r2 !== void 0 && (e2.style.height = r2);
      }
    }
  }
  let ae2 = { value: [] }, j2 = B(`next`);
  function M2(e2) {
    let t3 = v2.value, n3 = `next`;
    for (let r2 of ae2.value) {
      if (r2 === t3) break;
      if (r2 === e2) {
        n3 = `prev`;
        break;
      }
    }
    j2.value = n3, se2(e2);
  }
  function se2(e2) {
    let { onActiveNameChange: n3, onUpdateValue: i3, "onUpdate:value": a3 } = t2;
    n3 && r(n3, e2), i3 && r(i3, e2), a3 && r(a3, e2), _2.value = e2;
  }
  function le2(e2) {
    let { onClose: n3 } = t2;
    n3 && r(n3, e2);
  }
  let ue2 = true;
  function de2() {
    let { value: e2 } = c2;
    if (!e2) return;
    ue2 || (ue2 = false);
    let t3 = `transition-disabled`;
    e2.classList.add(t3), ee2(), e2.classList.remove(t3);
  }
  let fe2 = B(null);
  function N2({ transitionDisabled: t3 }) {
    let n3 = s2.value;
    if (!n3) return;
    t3 && n3.classList.add(`transition-disabled`);
    let r2 = x2();
    r2 && fe2.value && (fe2.value.style.width = `${r2.offsetWidth}px`, fe2.value.style.height = `${r2.offsetHeight}px`, fe2.value.style.transform = `translateX(${r2.offsetLeft - e(getComputedStyle(n3).paddingLeft)}px)`, t3 && fe2.value.offsetWidth), t3 && n3.classList.remove(`transition-disabled`);
  }
  it([v2], () => {
    t2.type === `segment` && at(() => {
      N2({ transitionDisabled: false });
    });
  }), Qe(() => {
    t2.type === `segment` && N2({ transitionDisabled: true });
  });
  let P2 = 0;
  function pe2(e2) {
    var _a2, _b2;
    if (e2.contentRect.width === 0 && e2.contentRect.height === 0 || P2 === e2.contentRect.width) return;
    P2 = e2.contentRect.width;
    let { type: n3 } = t2;
    if ((n3 === `line` || n3 === `bar`) && (ue2 || ((_a2 = t2.justifyContent) == null ? void 0 : _a2.startsWith(`space`))) && de2(), n3 !== `segment`) {
      let { placement: e3 } = t2;
      _e2((e3 === `top` || e3 === `bottom` ? (_b2 = d2.value) == null ? void 0 : _b2.$el : f2.value) || null);
    }
  }
  let me2 = li(pe2, 64);
  it([() => t2.justifyContent, () => t2.size], () => {
    at(() => {
      let { type: e2 } = t2;
      (e2 === `line` || e2 === `bar`) && de2();
    });
  });
  let F2 = B(false);
  function I2(e2) {
    var _a2;
    let { target: n3, contentRect: { width: r2, height: i3 } } = e2, a3 = n3.parentElement.parentElement.offsetWidth, o3 = n3.parentElement.parentElement.offsetHeight, { placement: s3 } = t2;
    if (!F2.value) s3 === `top` || s3 === `bottom` ? a3 < r2 && (F2.value = true) : o3 < i3 && (F2.value = true);
    else {
      let { value: e3 } = u2;
      if (!e3) return;
      s3 === `top` || s3 === `bottom` ? a3 - r2 > e3.$el.offsetWidth && (F2.value = false) : o3 - i3 > e3.$el.offsetHeight && (F2.value = false);
    }
    _e2(((_a2 = d2.value) == null ? void 0 : _a2.$el) || null);
  }
  let he2 = li(I2, 64);
  function ge2() {
    let { onAdd: e2 } = t2;
    e2 && e2(), at(() => {
      let e3 = x2(), { value: t3 } = d2;
      !e3 || !t3 || t3.scrollTo({ left: e3.offsetLeft, top: 0, behavior: `smooth` });
    });
  }
  function _e2(e2) {
    if (!e2) return;
    let { placement: n3 } = t2;
    if (n3 === `top` || n3 === `bottom`) {
      let { scrollLeft: t3, scrollWidth: n4, offsetWidth: r2 } = e2;
      p2.value = t3 <= 0, m2.value = t3 + r2 >= n4;
    } else {
      let { scrollTop: t3, scrollHeight: n4, offsetHeight: r2 } = e2;
      p2.value = t3 <= 0, m2.value = t3 + r2 >= n4;
    }
  }
  let ve2 = li((e2) => {
    _e2(e2.target);
  }, 64);
  Ze(ii, { triggerRef: z(t2, `trigger`), tabStyleRef: z(t2, `tabStyle`), tabClassRef: z(t2, `tabClass`), addTabStyleRef: z(t2, `addTabStyle`), addTabClassRef: z(t2, `addTabClass`), paneClassRef: z(t2, `paneClass`), paneStyleRef: z(t2, `paneStyle`), mergedClsPrefixRef: i2, typeRef: z(t2, `type`), closableRef: z(t2, `closable`), valueRef: v2, tabChangeIdRef: y2, onBeforeLeaveRef: z(t2, `onBeforeLeave`), activateTab: M2, handleClose: le2, handleAdd: ge2 }), Le(() => {
    ee2(), te2();
  }), wt(() => {
    let { value: e2 } = l2;
    if (!e2) return;
    let { value: t3 } = i2, n3 = `${t3}-tabs-nav-scroll-wrapper--shadow-start`, r2 = `${t3}-tabs-nav-scroll-wrapper--shadow-end`;
    p2.value ? e2.classList.remove(n3) : e2.classList.add(n3), m2.value ? e2.classList.remove(r2) : e2.classList.add(r2);
  });
  let ye2 = { syncBarPosition: () => {
    ee2();
  } }, be2 = () => {
    N2({ transitionDisabled: true });
  }, xe2 = q(() => {
    let { value: e2 } = h2, { type: n3 } = t2, r2 = `${e2}${{ card: `Card`, bar: `Bar`, line: `Line`, segment: `Segment` }[n3]}`, { self: { barColor: i3, closeIconColor: a3, closeIconColorHover: s3, closeIconColorPressed: c3, tabColor: l3, tabBorderColor: u3, paneTextColor: d3, tabFontWeight: f3, tabBorderRadius: p3, tabFontWeightActive: m3, colorSegment: g3, fontWeightStrong: _3, tabColorSegment: v3, closeSize: y3, closeIconSize: b3, closeColorHover: x3, closeColorPressed: S3, closeBorderRadius: C3, [w(`panePadding`, e2)]: T3, [w(`tabPadding`, r2)]: E2, [w(`tabPaddingVertical`, r2)]: D2, [w(`tabGap`, r2)]: ee3, [w(`tabGap`, `${r2}Vertical`)]: te3, [w(`tabTextColor`, n3)]: ne3, [w(`tabTextColorActive`, n3)]: O3, [w(`tabTextColorHover`, n3)]: k3, [w(`tabTextColorDisabled`, n3)]: A3, [w(`tabFontSize`, e2)]: re3 }, common: { cubicBezierEaseInOut: ie3 } } = o2.value;
    return { "--n-bezier": ie3, "--n-color-segment": g3, "--n-bar-color": i3, "--n-tab-font-size": re3, "--n-tab-text-color": ne3, "--n-tab-text-color-active": O3, "--n-tab-text-color-disabled": A3, "--n-tab-text-color-hover": k3, "--n-pane-text-color": d3, "--n-tab-border-color": u3, "--n-tab-border-radius": p3, "--n-close-size": y3, "--n-close-icon-size": b3, "--n-close-color-hover": x3, "--n-close-color-pressed": S3, "--n-close-border-radius": C3, "--n-close-icon-color": a3, "--n-close-icon-color-hover": s3, "--n-close-icon-color-pressed": c3, "--n-tab-color": l3, "--n-tab-font-weight": f3, "--n-tab-font-weight-active": m3, "--n-tab-padding": E2, "--n-tab-padding-vertical": D2, "--n-tab-gap": ee3, "--n-tab-gap-vertical": te3, "--n-pane-padding-left": oe(T3, `left`), "--n-pane-padding-right": oe(T3, `right`), "--n-pane-padding-top": oe(T3, `top`), "--n-pane-padding-bottom": oe(T3, `bottom`), "--n-font-weight-strong": _3, "--n-tab-color-segment": v3 };
  }), Se2 = a2 ? D(`tabs`, q(() => `${h2.value[0]}${t2.type[0]}`), xe2, t2) : void 0;
  return Object.assign({ mergedClsPrefix: i2, mergedValue: v2, renderedNames: /* @__PURE__ */ new Set(), segmentCapsuleElRef: fe2, tabsPaneWrapperRef: ne2, tabsElRef: s2, barElRef: c2, addTabInstRef: u2, xScrollInstRef: d2, scrollWrapperElRef: l2, addTabFixed: F2, tabWrapperStyle: b2, handleNavResize: me2, mergedSize: h2, handleScroll: ve2, handleTabsResize: he2, cssVars: a2 ? void 0 : xe2, themeClass: Se2 == null ? void 0 : Se2.themeClass, animationDirection: j2, renderNameListRef: ae2, yScrollElRef: f2, handleSegmentResize: be2, onAnimationBeforeLeave: A2, onAnimationEnter: re2, onAnimationAfterEnter: ie2, onRender: Se2 == null ? void 0 : Se2.onRender }, ye2);
}, render() {
  let { mergedClsPrefix: e2, type: t2, placement: n2, addTabFixed: r2, addable: i2, mergedSize: a2, renderNameListRef: o2, onRender: s2, paneWrapperClass: c2, paneWrapperStyle: l2, $slots: { default: u2, prefix: d2, suffix: f2 } } = this;
  s2 == null ? void 0 : s2();
  let p2 = u2 ? Je(u2()).filter((e3) => e3.type.__TAB_PANE__ === true) : [], m2 = u2 ? Je(u2()).filter((e3) => e3.type.__TAB__ === true) : [], h2 = !m2.length, g2 = t2 === `card`, _2 = t2 === `segment`, v2 = !g2 && !_2 && this.justifyContent;
  o2.value = [];
  let y2 = () => {
    let t3 = U(`div`, { style: this.tabWrapperStyle, class: `${e2}-tabs-wrapper` }, v2 ? null : U(`div`, { class: `${e2}-tabs-scroll-padding`, style: n2 === `top` || n2 === `bottom` ? { width: `${this.tabsPadding}px` } : { height: `${this.tabsPadding}px` } }), h2 ? p2.map((e3, t4) => (o2.value.push(e3.props.name), mi(U(si, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t4 !== 0 && (!v2 || v2 === `center` || v2 === `start` || v2 === `end`) }), e3.children ? { default: e3.children.tab } : void 0)))) : m2.map((e3, t4) => (o2.value.push(e3.props.name), mi(t4 !== 0 && !v2 ? pi(e3) : e3))), !r2 && i2 && g2 ? fi(i2, (h2 ? p2.length : m2.length) !== 0) : null, v2 ? null : U(`div`, { class: `${e2}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } }));
    return U(`div`, { ref: `tabsElRef`, class: `${e2}-tabs-nav-scroll-content` }, g2 && i2 ? U(Ie, { onResize: this.handleTabsResize }, { default: () => t3 }) : t3, g2 ? U(`div`, { class: `${e2}-tabs-pad` }) : null, g2 ? null : U(`div`, { ref: `barElRef`, class: `${e2}-tabs-bar` }));
  }, b2 = _2 ? `top` : n2;
  return U(`div`, { class: [`${e2}-tabs`, this.themeClass, `${e2}-tabs--${t2}-type`, `${e2}-tabs--${a2}-size`, v2 && `${e2}-tabs--flex`, `${e2}-tabs--${b2}`], style: this.cssVars }, U(`div`, { class: [`${e2}-tabs-nav--${t2}-type`, `${e2}-tabs-nav--${b2}`, `${e2}-tabs-nav`] }, le(d2, (t3) => t3 && U(`div`, { class: `${e2}-tabs-nav__prefix` }, t3)), _2 ? U(Ie, { onResize: this.handleSegmentResize }, { default: () => U(`div`, { class: `${e2}-tabs-rail`, ref: `tabsElRef` }, U(`div`, { class: `${e2}-tabs-capsule`, ref: `segmentCapsuleElRef` }, U(`div`, { class: `${e2}-tabs-wrapper` }, U(`div`, { class: `${e2}-tabs-tab` }))), h2 ? p2.map((e3, t3) => (o2.value.push(e3.props.name), U(si, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t3 !== 0 }), e3.children ? { default: e3.children.tab } : void 0))) : m2.map((e3, t3) => (o2.value.push(e3.props.name), t3 === 0 ? e3 : pi(e3)))) }) : U(Ie, { onResize: this.handleNavResize }, { default: () => U(`div`, { class: `${e2}-tabs-nav-scroll-wrapper`, ref: `scrollWrapperElRef` }, [`top`, `bottom`].includes(b2) ? U(Pn, { ref: `xScrollInstRef`, onScroll: this.handleScroll }, { default: y2 }) : U(`div`, { class: `${e2}-tabs-nav-y-scroll`, onScroll: this.handleScroll, ref: `yScrollElRef` }, y2())) }), r2 && i2 && g2 ? fi(i2, true) : null, le(f2, (t3) => t3 && U(`div`, { class: `${e2}-tabs-nav__suffix` }, t3))), h2 && (this.animated && (b2 === `top` || b2 === `bottom`) ? U(`div`, { ref: `tabsPaneWrapperRef`, style: l2, class: [`${e2}-tabs-pane-wrapper`, c2] }, di(p2, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : di(p2, this.mergedValue, this.renderedNames)));
} });
function di(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = [];
  return e2.forEach((e3) => {
    let { name: r3, displayDirective: i3, "display-directive": a3 } = e3.props, o3 = (e4) => i3 === e4 || a3 === e4, c2 = t2 === r3;
    if (e3.key !== void 0 && (e3.key = r3), c2 || o3(`show`) || o3(`show:lazy`) && n2.has(r3)) {
      n2.has(r3) || n2.add(r3);
      let t3 = !o3(`if`);
      s2.push(t3 ? st(e3, [[ut, c2]]) : e3);
    }
  }), o2 ? U(lt, { name: `${o2}-transition`, onBeforeLeave: r2, onEnter: i2, onAfterEnter: a2 }, { default: () => s2 }) : s2;
}
function fi(e2, t2) {
  return U(si, { ref: `addTabInstRef`, key: `__addable`, name: `__addable`, internalCreatedByPane: true, internalAddable: true, internalLeftPadded: t2, disabled: typeof e2 == `object` && e2.disabled });
}
function pi(e2) {
  let t2 = ft(e2);
  return t2.props ? t2.props.internalLeftPadded = true : t2.props = { internalLeftPadded: true }, t2;
}
function mi(e2) {
  return Array.isArray(e2.dynamicProps) ? e2.dynamicProps.includes(`internalLeftPadded`) || e2.dynamicProps.push(`internalLeftPadded`) : e2.dynamicProps = [`internalLeftPadded`], e2;
}
var hi = [`title`, `onClick`], gi = 20, _i = bt(K({ __name: `SketchToolbar`, props: { sketchName: {}, draftCount: {}, routeCount: {} }, emits: [`save`, `open`, `create`, `edit-meta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Ut(), r2 = t2, i2 = [{ title: n2(`sketchEdit.save`), icon: xn, iconSize: gi, callback: () => r2(`save`) }, { title: n2(`sketchEdit.open`), icon: Tn, iconSize: gi, callback: () => r2(`open`) }, { title: n2(`sketchEdit.newComponent`), icon: P, iconSize: gi, callback: () => r2(`create`) }, { title: n2(`sketchEdit.editMetadata`), icon: Dt, iconSize: gi, callback: () => r2(`edit-meta`) }];
  return (t3, r3) => (G(), V(X(Er), { justify: `space-between`, align: `center` }, { default: R(() => [J(X(Rt), { strong: `` }, { default: R(() => [H(W(e2.sketchName || X(n2)(`sketchEdit.noSketchSelectedToolbar`)), 1)]), _: 1 }), J(X(Er), { align: `center` }, { default: R(() => [e2.sketchName === void 0 ? gt(``, true) : (G(), V(X(nn), { key: 0, type: `info`, size: `small` }, { default: R(() => [H(W(e2.draftCount || 0) + ` ` + W(X(n2)(`sketchEdit.drafts`)) + `, ` + W(e2.routeCount || 0) + ` ` + W(X(n2)(`sketchEdit.routes`)), 1)]), _: 1 })), (G(), Z(xt, null, ht(i2, (e3, t4) => Y(`div`, { key: t4, title: e3.title, class: `tool-tip-item`, onClick: e3.callback }, [J(X($), { size: e3.iconSize }, { default: R(() => [(G(), V(nt(e3.icon)))]), _: 2 }, 1032, [`size`])], 8, hi)), 64))]), _: 1 })]), _: 1 }));
} }), [[`__scopeId`, `data-v-5b012717`]]), vi = { key: 0, class: `empty-state` }, yi = bt(K({ __name: `ComponentList`, props: { components: {}, selectedId: {} }, emits: [`select`, `delete`, `create`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Ut(), r2 = t2;
  return (t3, i2) => (G(), Z(xt, null, [J(X(tn), { hoverable: `` }, { default: R(() => [(G(true), Z(xt, null, ht(e2.components, (t4) => (G(), V(X(rn), { key: t4.value, class: _t({ "selected-component": e2.selectedId === t4.value }), onClick: () => r2(`select`, t4.value, t4.type) }, { prefix: R(() => [J(X($), { color: t4.type === `draft` ? `#007bff` : `#28a745` }, { default: R(() => [(G(), V(nt(t4.type === `draft` ? X(de) : X(Te))))]), _: 2 }, 1032, [`color`])]), suffix: R(() => [J(X(ti), { onPositiveClick: (e3) => r2(`delete`, t4.value, t4.type) }, { trigger: R(() => [J(X(Q), { quaternary: ``, circle: ``, size: `small` }, { default: R(() => [J(X($), null, { default: R(() => [J(X(N))]), _: 1 })]), _: 1 })]), default: R(() => [H(` ` + W(X(n2)(`sketchEdit.deleteComponent`)), 1)]), _: 1 }, 8, [`onPositiveClick`])]), default: R(() => [H(` ` + W(t4.label) + ` `, 1)]), _: 2 }, 1032, [`class`, `onClick`]))), 128))]), _: 1 }), e2.components.length === 0 ? (G(), Z(`div`, vi, [J(X(qt), { description: X(n2)(`sketchEdit.noComponentsYet`) }, { extra: R(() => [J(X(Q), { size: `small`, onClick: i2[0] || (i2[0] = (e3) => r2(`create`)) }, { default: R(() => [H(W(X(n2)(`sketchEdit.createComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`])])) : gt(``, true)], 64));
} }), [[`__scopeId`, `data-v-3addb8a0`]]), bi = { key: 0, class: `properties-panel` }, xi = { key: 1, style: { height: `100%`, width: `100%`, display: `flex`, "justify-content": `center`, "align-items": `center` } }, Si = bt(K({ __name: `PropertiesPanel`, props: { component: {}, type: {} }, emits: [`updateProperties`, `updateMeta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Ut(), r2 = t2;
  return (t3, i2) => e2.component ? (G(), Z(`div`, bi, [J(X(ui), { type: `line`, animated: ``, "default-value": `properties` }, { default: R(() => [J(X(oi), { name: `properties`, tab: X(n2)(`sketchEdit.properties`) }, { default: R(() => [J(X(be), null, { default: R(() => [J(X(I), { label: X(n2)(`sketchEdit.visible`) }, { default: R(() => [J(X(Jt), { value: e2.component.properties.visible !== false, "onUpdate:value": i2[0] || (i2[0] = (e3) => r2(`updateProperties`, { visible: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), e2.type === `draft` ? (G(), Z(xt, { key: 0 }, [J(X(I), { label: X(n2)(`sketchEdit.fillColor`) }, { default: R(() => [J(X(Cr), { value: e2.component.properties.fillColor || `#007bff`, "show-alpha": false, "onUpdate:value": i2[1] || (i2[1] = (e3) => r2(`updateProperties`, { fillColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(X(I), { label: X(n2)(`sketchEdit.strokeColor`) }, { default: R(() => [J(X(Cr), { value: e2.component.properties.strokeColor || `#0056b3`, "show-alpha": false, "onUpdate:value": i2[2] || (i2[2] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(X(I), { label: X(n2)(`sketchEdit.strokeThickness`) }, { default: R(() => [J(X(Hr), { value: e2.component.properties.strokeThickness || 2, min: 1, max: 10, "onUpdate:value": i2[3] || (i2[3] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : gt(``, true), e2.type === `route` ? (G(), Z(xt, { key: 1 }, [J(X(I), { label: X(n2)(`sketchEdit.strokeColor`) }, { default: R(() => [J(X(Cr), { value: e2.component.properties.strokeColor || `#28a745`, "show-alpha": false, "onUpdate:value": i2[4] || (i2[4] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(X(I), { label: X(n2)(`sketchEdit.strokeThickness`) }, { default: R(() => [J(X(Hr), { value: e2.component.properties.strokeThickness || 3, min: 1, max: 10, "onUpdate:value": i2[5] || (i2[5] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : gt(``, true)]), _: 1 })]), _: 1 }, 8, [`tab`]), J(X(oi), { name: `metadata`, tab: X(n2)(`sketchEdit.metadata`) }, { default: R(() => [J(X(be), null, { default: R(() => [J(X(I), { label: X(n2)(`sketchEdit.name`) }, { default: R(() => [J(X(we), { value: e2.component.meta.name, "onUpdate:value": i2[6] || (i2[6] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: t4, description: ((_a = e2.component) == null ? void 0 : _a.meta.description) ?? ``, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(X(I), { label: X(n2)(`sketchEdit.description`) }, { default: R(() => [J(X(we), { value: e2.component.meta.description, type: `textarea`, rows: 3, "onUpdate:value": i2[7] || (i2[7] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: ((_a = e2.component) == null ? void 0 : _a.meta.name) ?? ``, description: t4, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(X(I), { label: X(n2)(`sketchEdit.tags`) }, { default: R(() => [J(X(Tr), { value: e2.component.meta.tags || [], placeholder: X(n2)(`sketchEdit.addTagPlaceholder`), "onUpdate:value": i2[8] || (i2[8] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: ((_a = e2.component) == null ? void 0 : _a.meta.name) ?? ``, description: ((_b = e2.component) == null ? void 0 : _b.meta.description) ?? ``, tags: t4 });
  }) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), J(X(I), { label: `UUID` }, { default: R(() => [J(X(we), { value: e2.component.id, style: { "font-family": `monospace` }, readonly: `` }, null, 8, [`value`])]), _: 1 })]), _: 1 })]), _: 1 }, 8, [`tab`])]), _: 1 })])) : (G(), Z(`div`, xi, [J(X(qt), { description: X(n2)(`sketchEdit.selectComponentToEdit`) }, null, 8, [`description`])]));
} }), [[`__scopeId`, `data-v-f700b4bc`]]), Ci = `https://api.maptiler.com/maps/basic-v2/style.json?key=dCeXFrS9lgSF8hm5C6nm`;
function wi() {
  let e2 = B(7), t2 = dt(null), n2 = B([0, 0]);
  function r2(e3) {
    t2.value = e3.map;
  }
  function i2(e3) {
    n2.value = e3, t2.value && t2.value.setCenter(e3);
  }
  function a2(n3) {
    e2.value = n3, t2.value && t2.value.setZoom(n3);
  }
  return { zoom: e2, map: t2, center: n2, styleUrl: Ci, initMap: r2, setCenter: i2, setZoom: a2 };
}
function Ti(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `draft` });
  }), t2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `route` });
  }), n2;
}
function Ei() {
  return { type: `Polygon`, coordinates: [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]] };
}
function Di() {
  return { fillColor: `#007bff`, strokeColor: `#0056b3`, strokeThickness: 2 };
}
function Oi() {
  return { strokeColor: `#28a745`, strokeThickness: 3 };
}
var ki = { style: { display: `flex`, "flex-direction": `row`, gap: `8px` } }, Ai = { style: { display: `flex`, gap: `8px`, "margin-bottom": `8px` } }, ji = { key: 0, class: `sketch-edit-container desktop-layout` }, Mi = { class: `grid-layout` }, Ni = { class: `meta-info-section` }, Pi = { class: `metadata-item` }, Fi = { class: `metadata-item` }, Ii = { key: 1, class: `sketch-edit-container mobile-layout` }, Li = { class: `mobile-header` }, Ri = { class: `mobile-content` }, zi = { key: 0, class: `mobile-tab-content` }, Bi = { key: 1, class: `mobile-tab-content mobile-map-content` }, Vi = { key: 2, class: `mobile-tab-content` }, Hi = { class: `metadata-item` }, Ui = { class: `metadata-item` }, Wi = { class: `mobile-tab-bar` }, Gi = bt(K({ __name: `SketchEdit`, props: { liteMode: { type: Boolean }, forceHighDpi: { type: Boolean }, mapType: {}, sketchId: {} }, setup(e2) {
  let t2 = e2, n2 = B(St(`geolocation`).getLastKnownLocation().toLngLatLike()), { t: r2 } = Ut(), i2 = he(), a2 = Vt(), { zoom: o2, styleUrl: s2, initMap: c2 } = wi(), { width: l2, height: u2 } = Zt(), d2 = q(() => l2.value < 768), f2 = B(`components`), p2 = B(false), m2 = B(null), h2 = B(null), g2 = B(false), _2 = B(``), v2 = B(`draft`), y2 = B(false), b2 = B({ name: ``, description: ``, tags: [], created_by: ``, modified_by: `` }), x2 = B(``), S2 = q(() => a2.currentSketch), C2 = q(() => a2.currentDrafts), w2 = q(() => {
    var _a;
    return ((_a = S2.value) == null ? void 0 : _a.routes.routes) || [];
  }), T2 = q(() => !!S2.value), E2 = q(() => !m2.value || !h2.value ? null : h2.value === `draft` ? a2.getDraftById(m2.value) : a2.getRouteById(m2.value)), D2 = mn(() => i2.success(r2(`sketchEdit.propertiesUpdated`)), 1e3), ee2 = q(() => Ti(C2.value, w2.value));
  async function te2() {
    if (S2.value) try {
      await a2.updateSketch(S2.value.id, { name: S2.value.meta.name, description: S2.value.meta.description, tags: S2.value.meta.tags }), i2.success(r2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  async function ne2() {
    if (!(!_2.value.trim() || !S2.value)) try {
      v2.value === `draft` ? (m2.value = (await a2.addDraft(Ei(), Di(), { name: _2.value })).id, h2.value = `draft`) : (m2.value = (await a2.addRoute(_2.value, Oi())).id, h2.value = `route`), g2.value = false, _2.value = ``, i2.success(r2(`sketchEdit.componentCreated`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.componentCreateError`)), console.error(e3);
    }
  }
  async function O2(e3, t3) {
    try {
      t3 === `draft` ? await a2.deleteDraft(e3) : await a2.deleteRoute(e3), m2.value === e3 && (m2.value = null, h2.value = null), i2.success(r2(`sketchEdit.componentDeleted`));
    } catch (e4) {
      i2.error(r2(`sketchEdit.componentDeleteError`)), console.error(e4);
    }
  }
  let k2 = async (e3) => {
    if (!(!E2.value || !h2.value)) try {
      h2.value === `draft` ? await a2.updateDraft(m2.value, { properties: e3 }) : await a2.updateRoute(m2.value, { properties: e3 }), D2();
    } catch (e4) {
      i2.error(r2(`sketchEdit.propertiesUpdateError`)), console.error(e4);
    }
  }, A2 = async (e3) => {
    if (!(!E2.value || !h2.value)) try {
      h2.value === `draft` ? await a2.updateDraft(m2.value, { meta: e3 }) : await a2.updateRoute(m2.value, { meta: e3 }), D2();
    } catch (e4) {
      i2.error(r2(`sketchEdit.propertiesUpdateError`)), console.error(e4);
    }
  };
  function re2() {
    S2.value && (b2.value = { name: S2.value.meta.name, description: S2.value.meta.description, tags: [...S2.value.meta.tags], created_by: S2.value.meta.created_by, modified_by: S2.value.meta.modified_by }, y2.value = true);
  }
  function ie2() {
    x2.value.trim() && !b2.value.tags.includes(x2.value.trim()) && (b2.value.tags.push(x2.value.trim()), x2.value = ``);
  }
  function ae2(e3) {
    b2.value.tags = b2.value.tags.filter((t3) => t3 !== e3);
  }
  async function oe2() {
    if (S2.value) try {
      await a2.updateSketch(S2.value.id, { name: b2.value.name, description: b2.value.description, tags: b2.value.tags }), y2.value = false, i2.success(r2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  Qe(() => {
    t2.sketchId && a2.setCurrentSketchId(t2.sketchId);
  }), it(() => a2.currentSketchId, (e3) => {
    e3 && (m2.value = null, h2.value = null);
  });
  let M2 = (e3) => new Date(e3).toLocaleString();
  return (e3, t3) => {
    var _a;
    return G(), Z(xt, null, [J(Se, { active: p2.value, "onUpdate:active": t3[0] || (t3[0] = (e4) => p2.value = e4), list: X(a2).sketches.map((e4) => ({ id: e4.id, name: e4.meta.name, tags: e4.meta.tags })), "active-id": X(a2).currentSketchId || ``, placement: `right`, onRemove: t3[1] || (t3[1] = (e4) => X(a2).deleteSketch(e4)), onSelect: t3[2] || (t3[2] = (e4) => X(a2).setCurrentSketchId(e4)) }, null, 8, [`active`, `list`, `active-id`]), J(X(Ht), { show: g2.value, "onUpdate:show": t3[6] || (t3[6] = (e4) => g2.value = e4), preset: `dialog`, title: X(r2)(`sketchEdit.createNewComponent`) }, { action: R(() => [J(X(Q), { onClick: t3[5] || (t3[5] = (e4) => g2.value = false) }, { default: R(() => [H(W(X(r2)(`sketchEdit.cancel`)), 1)]), _: 1 }), J(X(Q), { type: `primary`, disabled: !_2.value.trim(), onClick: ne2 }, { default: R(() => [H(W(X(r2)(`sketchEdit.create`)), 1)]), _: 1 }, 8, [`disabled`])]), default: R(() => [J(X(be), null, { default: R(() => [Y(`div`, ki, [J(X(I), { label: X(r2)(`sketchEdit.name`), style: { "flex-grow": `1` } }, { default: R(() => [J(X(we), { value: _2.value, "onUpdate:value": t3[3] || (t3[3] = (e4) => _2.value = e4), placeholder: X(r2)(`sketchEdit.enterComponentName`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), J(X(I), { label: X(r2)(`sketchEdit.type`) }, { default: R(() => [J(X(Kt), { value: v2.value, "onUpdate:value": t3[4] || (t3[4] = (e4) => v2.value = e4), "consistent-menu-width": false, options: [{ label: X(r2)(`sketchEdit.draftShape`), value: `draft` }, { label: X(r2)(`sketchEdit.routePath`), value: `route` }] }, null, 8, [`value`, `options`])]), _: 1 }, 8, [`label`])])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), J(X(Ht), { show: y2.value, "onUpdate:show": t3[11] || (t3[11] = (e4) => y2.value = e4), preset: `dialog`, title: X(r2)(`sketchEdit.editMetadata`), style: { "max-width": `600px` } }, { action: R(() => [J(X(Q), { onClick: t3[10] || (t3[10] = (e4) => y2.value = false) }, { default: R(() => [H(W(X(r2)(`sketchEdit.cancel`)), 1)]), _: 1 }), J(X(Q), { type: `primary`, disabled: !b2.value.name.trim(), onClick: oe2 }, { default: R(() => [H(W(X(r2)(`sketchEdit.save`)), 1)]), _: 1 }, 8, [`disabled`])]), default: R(() => [J(X(be), null, { default: R(() => [J(X(I), { label: X(r2)(`sketchEdit.name`) }, { default: R(() => [J(X(we), { value: b2.value.name, "onUpdate:value": t3[7] || (t3[7] = (e4) => b2.value.name = e4), placeholder: X(r2)(`sketchEdit.sketchNamePlaceholder`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), J(X(I), { label: X(r2)(`sketchEdit.description`) }, { default: R(() => [J(X(we), { value: b2.value.description, "onUpdate:value": t3[8] || (t3[8] = (e4) => b2.value.description = e4), type: `textarea`, placeholder: X(r2)(`sketchEdit.sketchDescriptionPlaceholder`), rows: 3 }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), J(X(I), { label: X(r2)(`sketchEdit.tags`) }, { default: R(() => [Y(`div`, Ai, [J(X(we), { value: x2.value, "onUpdate:value": t3[9] || (t3[9] = (e4) => x2.value = e4), placeholder: X(r2)(`sketchEdit.addTagPlaceholder`), onKeydown: rt(Xe(ie2, [`prevent`]), [`enter`]) }, null, 8, [`value`, `placeholder`, `onKeydown`]), J(X(Q), { onClick: ie2 }, { default: R(() => [H(W(X(r2)(`sketchEdit.add`)), 1)]), _: 1 })]), (G(true), Z(xt, null, ht(b2.value.tags, (e4) => (G(), V(X(nn), { key: e4, closable: ``, style: { "margin-right": `8px`, "margin-bottom": `8px` }, onClose: (t4) => ae2(e4) }, { default: R(() => [H(W(e4), 1)]), _: 2 }, 1032, [`onClose`]))), 128)), b2.value.tags.length === 0 ? (G(), V(X(qt), { key: 0, description: X(r2)(`sketchEdit.noTags`), size: `small` }, null, 8, [`description`])) : gt(``, true)]), _: 1 }, 8, [`label`])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), d2.value ? (G(), Z(`div`, Ii, [Y(`div`, Li, [J(_i, { "sketch-name": (_a = S2.value) == null ? void 0 : _a.meta.name, "draft-count": C2.value.length, "route-count": w2.value.length, onSave: te2, onOpen: t3[18] || (t3[18] = (e4) => p2.value = true), onCreate: t3[19] || (t3[19] = (e4) => g2.value = true), onEditMeta: re2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])]), Y(`div`, Ri, [J(X(qr), null, { default: R(() => [f2.value === `components` ? (G(), Z(`div`, zi, [T2.value ? (G(), V(X(j), { key: 0, title: X(r2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;`, style: { height: `100%` } }, { "header-extra": R(() => [J(X(Q), { quaternary: ``, circle: ``, size: `small`, onClick: t3[22] || (t3[22] = (e4) => g2.value = true) }, { icon: R(() => [J(X(P))]), _: 1 })]), default: R(() => [J(yi, { components: ee2.value, "selected-id": m2.value, onSelect: t3[20] || (t3[20] = (e4, t4) => {
      m2.value = e4, h2.value = t4, f2.value = `properties`;
    }), onDelete: O2, onCreate: t3[21] || (t3[21] = (e4) => g2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])) : (G(), V(X(qt), { key: 1, description: X(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(Et))]), _: 1 })]), extra: R(() => [J(X(Q), { size: `small`, onClick: t3[23] || (t3[23] = (e4) => p2.value = true) }, { default: R(() => [H(W(X(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : gt(``, true), f2.value === `map` ? (G(), Z(`div`, Bi, [T2.value ? (G(), V(X(j), { key: 0, class: `map-container`, "content-style": `padding: 0;` }, { default: R(() => [J(X(Ce), { "map-style": X(s2), center: n2.value, zoom: X(o2), height: `100%`, "onMap:load": X(c2) }, { default: R(() => [J(X(me), { position: `top-left` }), J(X(xe), { position: `bottom-left` }), J(X(ye), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `center`, `zoom`, `onMap:load`])]), _: 1 })) : (G(), V(X(qt), { key: 1, description: X(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(Et))]), _: 1 })]), extra: R(() => [J(X(Q), { size: `small`, onClick: t3[24] || (t3[24] = (e4) => p2.value = true) }, { default: R(() => [H(W(X(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : gt(``, true), f2.value === `properties` ? (G(), Z(`div`, Vi, [E2.value ? (G(), V(X(j), { key: 0, class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: R(() => [J(X(Rt), { depth: `3`, class: `metadata` }, { default: R(() => [Y(`div`, Hi, W(X(r2)(`sketchEdit.createdTimeBy`, { user: E2.value.meta.created_by, time: M2(E2.value.meta.creation_timestamp) })), 1), Y(`div`, Ui, W(X(r2)(`sketchEdit.modifiedTimeBy`, { user: E2.value.meta.modified_by, time: M2(E2.value.meta.modification_timestamp) })), 1)]), _: 1 })]), default: R(() => [J(Si, { component: E2.value, type: h2.value, onUpdateProperties: k2, onUpdateMeta: A2 }, null, 8, [`component`, `type`])]), _: 1 })) : (G(), V(X(qt), { key: 1, description: X(r2)(`sketchEdit.noComponentSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(kt))]), _: 1 })]), extra: R(() => [J(X(Q), { size: `small`, onClick: t3[25] || (t3[25] = (e4) => f2.value = `components`) }, { default: R(() => [H(W(X(r2)(`sketchEdit.selectComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : gt(``, true)]), _: 1 })]), T2.value ? (G(), V(X(Yr), { key: 0, class: `mobile-footer` }, { default: R(() => [Y(`div`, Wi, [J(X(Q), { type: f2.value === `components` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[26] || (t3[26] = (e4) => f2.value = `components`) }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(Dn))]), _: 1 })]), default: R(() => [H(` ` + W(X(r2)(`sketchEdit.components`)), 1)]), _: 1 }, 8, [`type`]), J(X(Q), { type: f2.value === `map` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[27] || (t3[27] = (e4) => f2.value = `map`) }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(Et))]), _: 1 })]), default: R(() => [H(` ` + W(X(r2)(`sketchEdit.map`)), 1)]), _: 1 }, 8, [`type`]), J(X(Q), { type: f2.value === `properties` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[28] || (t3[28] = (e4) => f2.value = `properties`) }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(Dt))]), _: 1 })]), default: R(() => [H(` ` + W(X(r2)(`sketchEdit.properties`)), 1)]), _: 1 }, 8, [`type`])])]), _: 1 })) : gt(``, true)])) : (G(), Z(`div`, ji, [Y(`div`, Mi, [Y(`div`, Ni, [J(X(j), null, { default: R(() => {
      var _a2;
      return [J(_i, { "sketch-name": (_a2 = S2.value) == null ? void 0 : _a2.meta.name, "draft-count": C2.value.length, "route-count": w2.value.length, onSave: te2, onOpen: t3[12] || (t3[12] = (e4) => p2.value = true), onCreate: t3[13] || (t3[13] = (e4) => g2.value = true), onEditMeta: re2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])];
    }), _: 1 })]), J(X(ri), { direction: `horizontal`, max: 0.8, min: 0.2, "default-size": 0.5, class: `bottom-row-split` }, { 1: R(() => [J(X(ri), { style: { height: `100%` }, direction: `vertical` }, { 1: R(() => [J(X(j), { style: { height: `100%` }, title: X(r2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;` }, { "header-extra": R(() => [J(X(Q), { quaternary: ``, circle: ``, onClick: t3[16] || (t3[16] = (e4) => g2.value = true) }, { icon: R(() => [J(X(P))]), _: 1 })]), default: R(() => [J(yi, { components: ee2.value, "selected-id": m2.value, onSelect: t3[14] || (t3[14] = (e4, t4) => {
      m2.value = e4, h2.value = t4;
    }), onDelete: O2, onCreate: t3[15] || (t3[15] = (e4) => g2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])]), 2: R(() => [J(X(j), { class: `map-container`, "content-style": `padding: 0;` }, { default: R(() => [J(X(Ce), { "map-style": X(s2), center: n2.value, zoom: X(o2), height: `100%`, "onMap:load": X(c2) }, { default: R(() => [J(X(me), { position: `top-left` }), J(X(xe), { position: `bottom-left` }), J(X(ye), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `center`, `zoom`, `onMap:load`])]), _: 1 })]), _: 1 }), T2.value ? gt(``, true) : (G(), V(X(qt), { key: 0, description: X(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(Et))]), _: 1 })]), extra: R(() => [J(X(Q), { size: `small`, onClick: t3[17] || (t3[17] = (e4) => p2.value = true) }, { default: R(() => [H(W(X(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))]), 2: R(() => [J(X(j), { class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: R(() => [E2.value ? (G(), V(X(Rt), { key: 0, depth: `3`, class: `metadata` }, { default: R(() => [Y(`div`, Pi, W(X(r2)(`sketchEdit.createdTimeBy`, { user: E2.value.meta.created_by, time: M2(E2.value.meta.creation_timestamp) })), 1), Y(`div`, Fi, W(X(r2)(`sketchEdit.modifiedTimeBy`, { user: E2.value.meta.modified_by, time: M2(E2.value.meta.modification_timestamp) })), 1)]), _: 1 })) : gt(``, true)]), default: R(() => [J(Si, { component: E2.value, type: h2.value, onUpdateProperties: k2, onUpdateMeta: A2 }, null, 8, [`component`, `type`])]), _: 1 })]), _: 1 })])]))], 64);
  };
} }), [[`__scopeId`, `data-v-5ea7b823`]]), Ki = { class: `sketch-centre-view` }, qi = { class: `header` }, Ji = { class: `title` }, Yi = { class: `card-header` }, Xi = { key: 0, class: `tags` }, Zi = { class: `card-content` }, Qi = { class: `meta-info` }, $i = { class: `meta-item` }, ea = { class: `meta-item` }, ta = { class: `meta-item` }, na = { key: 0, class: `empty-state` }, ra = bt(K({ __name: `SketchCentreView`, setup(e2) {
  ct((e3) => ({ v0c417b7c: X(x2).bodyColor }));
  let { t: t2 } = Ut(), n2 = pe(), r2 = he(), i2 = cn(), a2 = Vt(), o2 = q(() => a2.sketches), s2 = q({ get: () => a2.currentSketchId, set: (e3) => a2.setCurrentSketchId(e3) }), c2 = (e3) => {
    let t3 = s2.value === e3;
    return { borderColor: t3 ? i2.value.primaryColor : ``, borderWidth: t3 ? `2px` : `1px`, padding: t3 ? `0px` : `1px`, zIndex: t3 ? 0 : 1 };
  }, l2 = B(false), u2 = B(false), d2 = B(``), f2 = async () => {
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
  }, { width: y2 } = Zt(), b2 = q(() => Math.floor(y2.value / 360));
  Qe(() => {
    f2();
  });
  let x2 = cn();
  return (e3, n3) => {
    let i3 = tt(`n-space`);
    return G(), Z(`div`, Ki, [Y(`div`, qi, [Y(`h1`, Ji, W(X(t2)(`sketchCentreView.title`)), 1), J(X(Q), { type: `primary`, secondary: ``, circle: ``, onClick: n3[0] || (n3[0] = (e4) => l2.value = true) }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(P))]), _: 1 })]), _: 1 })]), J(X(Nr), { cols: b2.value, "x-gap": 16, "y-gap": 16, responsive: `screen` }, { default: R(() => [(G(true), Z(xt, null, ht(o2.value, (e4) => (G(), V(X(kr), { key: e4.id }, { default: R(() => [J(X(j), { class: _t([`sketch-card`, { selected: s2.value === e4.id }]), style: yt(c2(e4.id)), hoverable: ``, bordered: ``, clickable: ``, onClick: (t3) => g2(e4.id) }, { header: R(() => [Y(`div`, Yi, [J(X(on), null, { default: R(() => [J(X(Rt), { class: `sketch-name` }, { default: R(() => [H(W(e4.meta.name), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), e4.meta.tags.length > 0 ? (G(), Z(`div`, Xi, [(G(true), Z(xt, null, ht(e4.meta.tags.slice(0, 3), (e5) => (G(), V(X(nn), { key: e5, size: `small`, round: ``, type: `info` }, { default: R(() => [H(W(e5.toLocaleUpperCase()), 1)]), _: 2 }, 1024))), 128)), e4.meta.tags.length > 3 ? (G(), V(X(nn), { key: 0, size: `small`, round: ``, type: `info` }, { default: R(() => [H(` +` + W(e4.meta.tags.length - 3), 1)]), _: 2 }, 1024)) : gt(``, true)])) : gt(``, true)])]), "header-extra": R(() => [J(i3, null, { default: R(() => [J(X(Q), { quaternary: ``, circle: ``, size: `small`, onClick: Xe((t3) => _2(e4.id), [`stop`]) }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(Cn))]), _: 1 })]), _: 1 }, 8, [`onClick`]), J(X(Q), { quaternary: ``, circle: ``, size: `small`, onClick: Xe((t3) => v2(e4.id), [`stop`]) }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(N))]), _: 1 })]), _: 1 }, 8, [`onClick`])]), _: 2 }, 1024)]), default: R(() => [Y(`div`, Zi, [J(X(Rt), { depth: `3`, class: `description` }, { default: R(() => [H(W(e4.meta.description || X(t2)(`sketchCentreView.noDescription`)), 1)]), _: 2 }, 1024), Y(`div`, Qi, [Y(`div`, $i, [J(X($), { size: 16 }, { default: R(() => [J(X(yn))]), _: 1 }), J(X(Rt), { depth: `3`, style: { "font-size": `12px` } }, { default: R(() => [H(W(p2(e4.meta.creation_timestamp)), 1)]), _: 2 }, 1024)]), Y(`div`, ea, [J(X($), { size: 16 }, { default: R(() => [J(X(Te))]), _: 1 }), J(X(Rt), { depth: `3`, style: { "font-size": `12px` } }, { default: R(() => [H(W(m2(e4)) + ` ` + W(X(t2)(`sketchCentreView.routes`)), 1)]), _: 2 }, 1024)]), Y(`div`, ta, [J(X($), { size: 16 }, { default: R(() => [J(X(Tt))]), _: 1 }), J(X(Rt), { depth: `3`, style: { "font-size": `12px` } }, { default: R(() => [H(W(h2(e4)) + ` ` + W(X(t2)(`sketchCentreView.drafts`)), 1)]), _: 2 }, 1024)])])])]), _: 2 }, 1032, [`class`, `style`, `onClick`])]), _: 2 }, 1024))), 128))]), _: 1 }, 8, [`cols`]), o2.value.length === 0 ? (G(), Z(`div`, na, [J(X($), { size: `48`, depth: `3` }, { default: R(() => [J(X(jt))]), _: 1 }), J(X(Rt), { depth: `3` }, { default: R(() => [H(W(X(t2)(`sketchCentreView.emptyState`)), 1)]), _: 1 }), J(X(Q), { type: `primary`, onClick: n3[1] || (n3[1] = (e4) => l2.value = true) }, { icon: R(() => [J(X($), null, { default: R(() => [J(X(P))]), _: 1 })]), default: R(() => [H(` ` + W(X(t2)(`sketchCentreView.createFirstSketch`)), 1)]), _: 1 })])) : gt(``, true), J(ve, { show: l2.value, "onUpdate:show": n3[2] || (n3[2] = (e4) => l2.value = e4), onCreated: n3[3] || (n3[3] = (e4) => X(r2).success(X(t2)(`sketchCentreView.sketchCreated`))) }, null, 8, [`show`]), J(X(ge), { show: u2.value, "onUpdate:show": n3[4] || (n3[4] = (e4) => u2.value = e4), width: X(y2) > 1e3 ? 800 : Math.min(X(y2) - 32, 600), placement: `right`, "display-directive": `show`, height: `100%` }, { default: R(() => [J(X(_e), { title: X(t2)(`sketchCentreView.editSketch`), closable: ``, "body-content-style": { padding: 0, height: `100%` } }, { default: R(() => [d2.value ? (G(), V(Gi, { key: 0, "sketch-id": d2.value }, null, 8, [`sketch-id`])) : gt(``, true)]), _: 1 }, 8, [`title`])]), _: 1 }, 8, [`show`, `width`])]);
  };
} }), [[`__scopeId`, `data-v-76d7f767`]]);
export {
  ra as default
};
