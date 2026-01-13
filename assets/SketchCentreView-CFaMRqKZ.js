import { $ as e, A as t, B as n, D as r, E as i, F as a, G as o, H as s, I as c, J as l, K as u, L as d, M as f, Q as p, S as m, U as h, V as g, W as _, X as v, Y as y, Z as b, at as x, c as S, ct as C, dt as w, et as T, f as E, g as D, h as ee, j as te, k as ne, lt as O, nt as k, ot as A, p as re, q as ie, rt as ae, t as j, tt as oe, u as M, ut as se, v as ce, w as le, z as ue } from "./Card-wTK5VWgg.js";
import { C as N, D as de, E as P, O as F, T as fe, _ as pe, d as me, g as he, h as ge, i as _e, m as ve, n as ye, o as be, p as I, r as xe, s as Se, t as Ce, v as we, w as Te, x as Ee, y as L } from "./MarkdownEditor-DbfqqTot.js";
import { A as De, D as Oe, F as ke, I as Ae, J as je, K as Me, L as Ne, M as Pe, N as Fe, P as Ie, Q as Le, T as Re, Y as ze, Z as Be, c as Ve, et as He, it as Ue, k as We, l as Ge, p as Ke, q as qe, rt as Je, tt as Ye, x as Xe, y as Ze } from "./light-DcazuQOY.js";
import { $ as Qe, $t as R, At as z, Bt as $e, Ct as et, Et as tt, H as nt, Ht as rt, J as it, Mt as at, Ot as ot, Pt as st, Q as ct, Qt as lt, St as ut, Vt as B, Xt as V, Y as dt, Z as ft, _t as H, an as U, ct as W, dt as G, et as pt, ft as mt, gt as ht, ht as K, in as gt, jt as _t, lt as q, mt as J, nn as Y, nt as vt, ot as yt, pt as X, q as bt, rn as xt, st as Z, t as St, ut as Ct, yt as wt, zt as Tt } from "./index-C4uc8sCV.js";
import "./dist-CQp5Y4zm.js";
import "./dist-DYp_OIFV.js";
import "./dist-CjAScDBv.js";
import "./dist-Doi9LDAp.js";
import "./dist-B0pdZx0k.js";
import { t as Et } from "./FileText-CXxTpjkd.js";
import { a as Dt, i as Ot, n as kt, o as At, r as jt } from "./interface-Xd0kpMGt.js";
import { H as Mt, P as Nt, c as Pt, f as Ft, i as It, l as Lt, m as Rt, n as zt, o as Bt, r as Vt, t as Ht, y as Ut } from "./sketch-store-9vGlGD5C.js";
import { n as Wt } from "./vue-i18n-BmCNrBEx.js";
import { t as Gt } from "./fade-in-scale-up.cssr-DAO-aMlH.js";
import { t as Kt } from "./use-locale-DV3hbGtr.js";
import { n as qt, r as Jt, t as Yt } from "./Switch-BoZbFVoQ.js";
import { D as Xt, O as Zt, l as Q, t as Qt, u as $t } from "./core-CbJDfFWz.js";
import { a as en, i as tn, n as nn, r as rn, t as an } from "./ListItem-CojxfxaX.js";
import { t as on } from "./Warning-K65bQFBL.js";
import { t as sn } from "./PerformantEllipsis-Du1-qbTc.js";
import { r as $ } from "./light-DB6RNQmt.js";
import { t as cn } from "./Space-B096YzDs.js";
import { r as ln } from "./VueMarkdown-B8IRt7Xj.js";
var un = function() {
  return bt.Date.now();
}, dn = `Expected a function`, fn = Math.max, pn = Math.min;
function mn(e2, t2, n2) {
  var r2, i2, a2, o2, s2, c2, l2 = 0, u2 = false, d2 = false, f2 = true;
  if (typeof e2 != `function`) throw TypeError(dn);
  t2 = F(t2) || 0, nt(n2) && (u2 = !!n2.leading, d2 = `maxWait` in n2, a2 = d2 ? fn(F(n2.maxWait) || 0, t2) : a2, f2 = `trailing` in n2 ? !!n2.trailing : f2);
  function p2(t3) {
    var n3 = r2, a3 = i2;
    return r2 = i2 = void 0, l2 = t3, o2 = e2.apply(a3, n3), o2;
  }
  function m2(e3) {
    return l2 = e3, s2 = setTimeout(_2, t2), u2 ? p2(e3) : o2;
  }
  function h2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2, i3 = t2 - n3;
    return d2 ? pn(i3, a2 - r3) : i3;
  }
  function g2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2;
    return c2 === void 0 || n3 >= t2 || n3 < 0 || d2 && r3 >= a2;
  }
  function _2() {
    var e3 = un();
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
    return s2 === void 0 ? o2 : v2(un());
  }
  function x2() {
    var e3 = un(), n3 = g2(e3);
    if (r2 = arguments, i2 = this, c2 = e3, n3) {
      if (s2 === void 0) return m2(c2);
      if (d2) return clearTimeout(s2), s2 = setTimeout(_2, t2), p2(c2);
    }
    return s2 === void 0 && (s2 = setTimeout(_2, t2)), o2;
  }
  return x2.cancel = y2, x2.flush = b2, x2;
}
var hn = mn, gn = `Expected a function`;
function _n(e2, t2, n2) {
  var r2 = true, i2 = true;
  if (typeof e2 != `function`) throw TypeError(gn);
  return nt(n2) && (r2 = `leading` in n2 ? !!n2.leading : r2, i2 = `trailing` in n2 ? !!n2.trailing : i2), hn(e2, t2, { leading: r2, maxWait: t2, trailing: i2 });
}
var vn = _n, yn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, bn = K({ name: `Calendar`, render: function(e2, t2) {
  return z(), G(`svg`, yn, t2[0] || (t2[0] = [mt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path></g>`, 1)]));
} }), xn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Sn = K({ name: `DeviceFloppy`, render: function(e2, t2) {
  return z(), G(`svg`, xn, t2[0] || (t2[0] = [W(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [W(`path`, { d: `M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2` }), W(`circle`, { cx: `12`, cy: `14`, r: `2` }), W(`path`, { d: `M14 4v4H8V4` })], -1)]));
} }), Cn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, wn = K({ name: `Folder`, render: function(e2, t2) {
  return z(), G(`svg`, Cn, t2[0] || (t2[0] = [W(`path`, { d: `M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2`, fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, null, -1)]));
} }), Tn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, En = K({ name: `List`, render: function(e2, t2) {
  return z(), G(`svg`, Tn, t2[0] || (t2[0] = [mt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11"></path><path d="M9 12h11"></path><path d="M9 18h11"></path><path d="M5 6v.01"></path><path d="M5 12v.01"></path><path d="M5 18v.01"></path></g>`, 1)]));
} });
const Dn = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, "2xl": 1920 };
function On(e2) {
  return `(min-width: ${e2}px)`;
}
var kn = {};
function An(e2 = Dn) {
  if (!Be || typeof window.matchMedia != `function`) return Z(() => []);
  let t2 = V({}), n2 = Object.keys(e2), r2 = (e3, n3) => {
    e3.matches ? t2.value[n3] = true : t2.value[n3] = false;
  };
  return n2.forEach((t3) => {
    let n3 = e2[t3], i2, a2;
    kn[n3] === void 0 ? (i2 = window.matchMedia(On(n3)), i2.addEventListener ? i2.addEventListener(`change`, (e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }) : i2.addListener && i2.addListener((e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }), a2 = /* @__PURE__ */ new Set(), kn[n3] = { mql: i2, cbs: a2 }) : (i2 = kn[n3].mql, a2 = kn[n3].cbs), a2.add(r2), i2.matches && a2.forEach((e3) => {
      e3(i2, t3);
    });
  }), tt(() => {
    n2.forEach((t3) => {
      let { cbs: n3 } = kn[e2[t3]];
      n3.has(r2) && n3.delete(r2);
    });
  }), Z(() => {
    let { value: e3 } = t2;
    return n2.filter((t3) => e3[t3]);
  });
}
var jn = An, Mn = We(`.v-x-scroll`, { overflow: `auto`, scrollbarWidth: `none` }, [We(`&::-webkit-scrollbar`, { width: 0, height: 0 })]), Nn = K({ name: `XScroll`, props: { disabled: Boolean, onScroll: Function }, setup() {
  let e2 = V(null);
  function t2(e3) {
    !(e3.currentTarget.offsetWidth < e3.currentTarget.scrollWidth) || e3.deltaY === 0 || (e3.currentTarget.scrollLeft += e3.deltaY + e3.deltaX, e3.preventDefault());
  }
  let n2 = te();
  return Mn.mount({ id: `vueuc/x-scroll`, head: true, anchorMetaName: De, ssr: n2 }), Object.assign({ selfRef: e2, handleWheel: t2 }, { scrollTo(...t3) {
    var n3;
    (n3 = e2.value) == null || n3.scrollTo(...t3);
  } });
}, render() {
  return H(`div`, { ref: `selfRef`, onScroll: this.onScroll, onWheel: this.disabled ? void 0 : this.handleWheel, class: `v-x-scroll` }, this.$slots);
} }), Pn = { tiny: `mini`, small: `tiny`, medium: `small`, large: `medium`, huge: `large` };
function Fn(e2) {
  let t2 = Pn[e2];
  if (t2 === void 0) throw Error(`${e2} has no smaller size.`);
  return t2;
}
function In(e2) {
  var _a;
  let t2 = (_a = e2.dirs) == null ? void 0 : _a.find(({ dir: e3 }) => e3 === ct);
  return !!(t2 && t2.value === false);
}
var Ln = K({ name: `Remove`, render() {
  return H(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 512 512` }, H(`line`, { x1: `400`, y1: `256`, x2: `112`, y2: `256`, style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      ` }));
} }), Rn = A(`input-group`, `
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
 `)])])])])])]), zn = K({ name: `InputGroup`, props: {}, setup(e2) {
  let { mergedClsPrefixRef: t2 } = ce(e2);
  return re(`-input-group`, Rn, t2), { mergedClsPrefix: t2 };
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return H(`div`, { class: `${e2}-input-group` }, this.$slots);
} });
function Bn(e2, t2) {
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
function Vn(e2) {
  return e2 === null ? null : /^ *#/.test(e2) ? `hex` : e2.includes(`rgb`) ? `rgb` : e2.includes(`hsl`) ? `hsl` : e2.includes(`hsv`) ? `hsv` : null;
}
function Hn(e2, t2 = [255, 255, 255], n2 = `AA`) {
  let [r2, i2, a2, o2] = d(s(e2));
  if (o2 === 1) {
    let e3 = Un([r2, i2, a2]), o3 = Un(t2);
    return (Math.max(e3, o3) + 0.05) / (Math.min(e3, o3) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
  }
  let c2 = Un([Math.round(r2 * o2 + t2[0] * (1 - o2)), Math.round(i2 * o2 + t2[1] * (1 - o2)), Math.round(a2 * o2 + t2[2] * (1 - o2))]), l2 = Un(t2);
  return (Math.max(c2, l2) + 0.05) / (Math.min(c2, l2) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
}
function Un(e2) {
  let [t2, n2, r2] = e2.map((e3) => (e3 /= 255, e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4));
  return 0.2126 * t2 + 0.7152 * n2 + 0.0722 * r2;
}
function Wn(e2) {
  return e2 = Math.round(e2), e2 >= 360 ? 359 : e2 < 0 ? 0 : e2;
}
function Gn(e2) {
  return e2 = Math.round(e2 * 100) / 100, e2 > 1 ? 1 : e2 < 0 ? 0 : e2;
}
var Kn = { rgb: { hex(e2) {
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
function qn(e2, t2, n2) {
  return n2 || (n2 = Vn(e2)), n2 ? n2 === t2 ? e2 : Kn[n2][t2](e2) : null;
}
var Jn = `12px`, Yn = 12, Xn = `6px`, Zn = K({ name: `AlphaSlider`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, alpha: { type: Number, default: 0 }, onUpdateAlpha: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = V(null);
  function n2(n3) {
    !t2.value || !e2.rgba || (Ye(`mousemove`, document, r2), Ye(`mouseup`, document, i2), r2(n3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = (n3.clientX - a2) / (i3 - Yn);
    e2.onUpdateAlpha(Gn(o2));
  }
  function i2() {
    var t3;
    He(`mousemove`, document, r2), He(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, railBackgroundImage: Z(() => {
    let { rgba: t3 } = e2;
    return t3 ? `linear-gradient(to right, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 0) 0%, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 1) 100%)` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return H(`div`, { class: `${e2}-color-picker-slider`, ref: `railRef`, style: { height: Jn, borderRadius: Xn }, onMousedown: this.handleMouseDown }, H(`div`, { style: { borderRadius: Xn, position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, overflow: `hidden` } }, H(`div`, { class: `${e2}-color-picker-checkboard` }), H(`div`, { class: `${e2}-color-picker-slider__image`, style: { backgroundImage: this.railBackgroundImage } })), this.rgba && H(`div`, { style: { position: `absolute`, left: Xn, right: Xn, top: 0, bottom: 0 } }, H(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc(${this.alpha * 100}% - ${Xn})`, borderRadius: Xn, width: Jn, height: Jn } }, H(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: u(this.rgba), borderRadius: Xn, width: Jn, height: Jn } }))));
} });
const Qn = f(`n-color-picker`);
function $n(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 255)) : false;
}
function er(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 360)) : false;
}
function tr(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 100)) : false;
}
function nr(e2) {
  let t2 = e2.trim();
  return /^#[0-9a-fA-F]+$/.test(t2) ? [4, 5, 7, 9].includes(t2.length) : false;
}
function rr(e2) {
  return /^\d{1,3}\.?\d*%$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2) / 100, 100)) : false;
}
var ir = { paddingSmall: `0 4px` }, ar = K({ name: `ColorInputUnit`, props: { label: { type: String, required: true }, value: { type: [Number, String], default: null }, showAlpha: Boolean, onUpdateValue: { type: Function, required: true } }, setup(e2) {
  let t2 = V(``), { themeRef: n2 } = wt(Qn, null);
  $e(() => {
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
        a3 = nr(n3), a3 && e2.onUpdateValue(n3), t2.value = r2();
        break;
      case `H`:
        i3 = er(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `S`:
      case `L`:
      case `V`:
        i3 = tr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `A`:
        i3 = rr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `R`:
      case `G`:
      case `B`:
        i3 = $n(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
    }
  }
  return { mergedTheme: n2, inputValue: t2, handleInputChange: a2, handleInputUpdateValue: i2 };
}, render() {
  let { mergedTheme: e2 } = this;
  return H(L, { size: `small`, placeholder: this.label, theme: e2.peers.Input, themeOverrides: e2.peerOverrides.Input, builtinThemeOverrides: ir, value: this.inputValue, onUpdateValue: this.handleInputUpdateValue, onChange: this.handleInputChange, style: this.label === `A` ? `flex-grow: 1.25;` : `` });
} }), or = K({ name: `ColorInput`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, modes: { type: Array, required: true }, showAlpha: { type: Boolean, required: true }, value: { type: String, default: null }, valueArr: { type: Array, default: null }, onUpdateValue: { type: Function, required: true }, onUpdateMode: { type: Function, required: true } }, setup(e2) {
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
  return H(`div`, { class: `${e2}-color-picker-input` }, H(`div`, { class: `${e2}-color-picker-input__mode`, onClick: this.onUpdateMode, style: { cursor: t2.length === 1 ? `` : `pointer` } }, this.mode.toUpperCase() + (this.showAlpha ? `A` : ``)), H(zn, null, { default: () => {
    let { mode: e3, valueArr: t3, showAlpha: r2 } = this;
    if (e3 === `hex`) {
      let e4 = null;
      try {
        e4 = t3 === null ? null : (r2 ? n : ue)(t3);
      } catch {
      }
      return H(ar, { label: `HEX`, showAlpha: r2, value: e4, onUpdateValue: (e5) => {
        this.handleUnitUpdateValue(0, e5);
      } });
    }
    return (e3 + (r2 ? `a` : ``)).split(``).map((e4, n2) => H(ar, { label: e4.toUpperCase(), value: t3 === null ? null : t3[n2], onUpdateValue: (e5) => {
      this.handleUnitUpdateValue(n2, e5);
    } }));
  } }));
} });
function sr(e2, t2) {
  if (t2 === `hsv`) {
    let [t3, n2, r2, i2] = c(e2);
    return u([...v(t3, n2, r2), i2]);
  }
  return e2;
}
function cr(e2) {
  let t2 = document.createElement(`canvas`).getContext(`2d`);
  return t2 ? (t2.fillStyle = e2, t2.fillStyle) : `#000000`;
}
var lr = K({ name: `ColorPickerSwatches`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, swatches: { type: Array, required: true }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  let n2 = Z(() => e2.swatches.map((e3) => {
    let t2 = Vn(e3);
    return { value: e3, mode: t2, legalValue: sr(e3, t2) };
  }));
  function r2(n3) {
    let { mode: r3 } = e2, { value: i3, mode: a3 } = n3;
    return a3 || (a3 = `hex`, /^[a-zA-Z]+$/.test(i3) ? i3 = cr(i3) : (t(`color-picker`, `color ${i3} in swatches is invalid.`), i3 = `#000000`)), a3 === r3 ? i3 : qn(i3, r3, a3);
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
  return H(`div`, { class: `${e2}-color-picker-swatches` }, this.parsedSwatchesRef.map((t2) => H(`div`, { class: `${e2}-color-picker-swatch`, tabindex: 0, onClick: () => {
    this.handleSwatchSelect(t2);
  }, onKeydown: (e3) => {
    this.handleSwatchKeyDown(e3, t2);
  } }, H(`div`, { class: `${e2}-color-picker-swatch__fill`, style: { background: t2.legalValue } }))));
} }), ur = K({ name: `ColorPickerTrigger`, slots: Object, props: { clsPrefix: { type: String, required: true }, value: { type: String, default: null }, hsla: { type: Array, default: null }, disabled: Boolean, onClick: Function }, setup(e2) {
  let { colorPickerSlots: t2, renderLabelRef: n2 } = wt(Qn, null);
  return () => {
    let { hsla: r2, value: i2, clsPrefix: a2, onClick: o2, disabled: c2 } = e2, l2 = t2.label || n2.value;
    return H(`div`, { class: [`${a2}-color-picker-trigger`, c2 && `${a2}-color-picker-trigger--disabled`], onClick: c2 ? void 0 : o2 }, H(`div`, { class: `${a2}-color-picker-trigger__fill` }, H(`div`, { class: `${a2}-color-picker-checkboard` }), H(`div`, { style: { position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: r2 ? s(r2) : `` } }), i2 && r2 ? H(`div`, { class: `${a2}-color-picker-trigger__value`, style: { color: Hn(r2) ? `white` : `black` } }, l2 ? l2(i2) : i2) : null));
  };
} }), dr = K({ name: `ColorPreview`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, color: { type: String, default: null, validator: (e2) => {
  let t2 = Vn(e2);
  return !!(!e2 || t2 && t2 !== `hsv`);
} }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  function t2(t3) {
    var n2;
    let r2 = t3.target.value;
    (n2 = e2.onUpdateColor) == null || n2.call(e2, qn(r2.toUpperCase(), e2.mode, `hex`)), t3.stopPropagation();
  }
  return { handleChange: t2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return H(`div`, { class: `${e2}-color-picker-preview__preview` }, H(`span`, { class: `${e2}-color-picker-preview__fill`, style: { background: this.color || `#000000` } }), H(`input`, { class: `${e2}-color-picker-preview__input`, type: `color`, value: this.color, onChange: this.handleChange }));
} }), fr = `12px`, pr = 12, mr = `6px`, hr = 6, gr = `linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`, _r = K({ name: `HueSlider`, props: { clsPrefix: { type: String, required: true }, hue: { type: Number, required: true }, onUpdateHue: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = V(null);
  function n2(e3) {
    t2.value && (Ye(`mousemove`, document, r2), Ye(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = Wn((n3.clientX - a2 - hr) / (i3 - pr) * 360);
    e2.onUpdateHue(o2);
  }
  function i2() {
    var t3;
    He(`mousemove`, document, r2), He(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return H(`div`, { class: `${e2}-color-picker-slider`, style: { height: fr, borderRadius: mr } }, H(`div`, { ref: `railRef`, style: { boxShadow: `inset 0 0 2px 0 rgba(0, 0, 0, .24)`, boxSizing: `border-box`, backgroundImage: gr, height: fr, borderRadius: mr, position: `relative` }, onMousedown: this.handleMouseDown }, H(`div`, { style: { position: `absolute`, left: mr, right: mr, top: 0, bottom: 0 } }, H(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc((${this.hue}%) / 359 * 100 - ${mr})`, borderRadius: mr, width: fr, height: fr } }, H(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: `hsl(${this.hue}, 100%, 50%)`, borderRadius: mr, width: fr, height: fr } })))));
} }), vr = `12px`, yr = `6px`, br = K({ name: `Pallete`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, displayedHue: { type: Number, required: true }, displayedSv: { type: Array, required: true }, onUpdateSV: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = V(null);
  function n2(e3) {
    t2.value && (Ye(`mousemove`, document, r2), Ye(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, height: a2, left: o2, bottom: s2 } = r3.getBoundingClientRect(), c2 = (s2 - n3.clientY) / a2, l2 = (n3.clientX - o2) / i3, u2 = 100 * (l2 > 1 ? 1 : l2 < 0 ? 0 : l2), d2 = 100 * (c2 > 1 ? 1 : c2 < 0 ? 0 : c2);
    e2.onUpdateSV(u2, d2);
  }
  function i2() {
    var t3;
    He(`mousemove`, document, r2), He(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { palleteRef: t2, handleColor: Z(() => {
    let { rgba: t3 } = e2;
    return t3 ? `rgb(${t3[0]}, ${t3[1]}, ${t3[2]})` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return H(`div`, { class: `${e2}-color-picker-pallete`, onMousedown: this.handleMouseDown, ref: `palleteRef` }, H(`div`, { class: `${e2}-color-picker-pallete__layer`, style: { backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))` } }), H(`div`, { class: `${e2}-color-picker-pallete__layer ${e2}-color-picker-pallete__layer--shadowed`, style: { backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))` } }), this.rgba && H(`div`, { class: `${e2}-color-picker-handle`, style: { width: vr, height: vr, borderRadius: yr, left: `calc(${this.displayedSv[0]}% - ${yr})`, bottom: `calc(${this.displayedSv[1]}% - ${yr})` } }, H(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: this.handleColor, borderRadius: yr, width: vr, height: vr } })));
} }), xr = x([A(`color-picker`, `
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
 `, [Gt(), A(`input`, `
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
 `)])])])])]), Sr = K({ name: `ColorPicker`, props: Object.assign(Object.assign({}, E.props), { value: String, show: { type: Boolean, default: void 0 }, defaultShow: Boolean, defaultValue: String, modes: { type: Array, default: () => [`rgb`, `hex`, `hsl`] }, placement: { type: String, default: `bottom-start` }, to: Ne.propTo, showAlpha: { type: Boolean, default: true }, showPreview: Boolean, swatches: Array, disabled: { type: Boolean, default: void 0 }, actions: { type: Array, default: null }, internalActions: Array, size: String, renderLabel: Function, onComplete: Function, onConfirm: Function, onClear: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), slots: Object, setup(e2, { slots: t2 }) {
  let i2 = V(null), f2 = null, m2 = Xt(e2), { mergedSizeRef: x2, mergedDisabledRef: S2 } = m2, { localeRef: C2 } = Kt(`global`), { mergedClsPrefixRef: T2, namespaceRef: ee2, inlineThemeDisabled: te2 } = ce(e2), ne2 = E(`ColorPicker`, `-color-picker`, xr, Nt, e2, T2);
  _t(Qn, { themeRef: ne2, renderLabelRef: R(e2, `renderLabel`), colorPickerSlots: t2 });
  let O2 = V(e2.defaultShow), k2 = je(R(e2, `show`), O2);
  function A2(t3) {
    let { onUpdateShow: n2, "onUpdate:show": i3 } = e2;
    n2 && r(n2, t3), i3 && r(i3, t3), O2.value = t3;
  }
  let { defaultValue: re2 } = e2, ae2 = V(re2 === void 0 ? Bn(e2.modes, e2.showAlpha) : re2), j2 = je(R(e2, `value`), ae2), oe2 = V([j2.value]), M2 = V(0), se2 = Z(() => Vn(j2.value)), { modes: le2 } = e2, N2 = V(Vn(j2.value) || le2[0] || `rgb`);
  function de2() {
    let { modes: t3 } = e2, { value: n2 } = N2, r2 = t3.findIndex((e3) => e3 === n2);
    ~r2 ? N2.value = t3[(r2 + 1) % t3.length] : N2.value = `rgb`;
  }
  let P2, F2, fe2, pe2, me2, he2, ge2, _e2, ve2 = Z(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (se2.value) {
      case `hsv`:
        return c(e3);
      case `hsl`:
        return [P2, F2, fe2, _e2] = a(e3), [...ie(P2, F2, fe2), _e2];
      case `rgb`:
      case `hex`:
        return [me2, he2, ge2, _e2] = d(e3), [...p(me2, he2, ge2), _e2];
    }
  }), ye2 = Z(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (se2.value) {
      case `rgb`:
      case `hex`:
        return d(e3);
      case `hsv`:
        return [P2, F2, pe2, _e2] = c(e3), [...v(P2, F2, pe2), _e2];
      case `hsl`:
        return [P2, F2, fe2, _e2] = a(e3), [...l(P2, F2, fe2), _e2];
    }
  }), be2 = Z(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (se2.value) {
      case `hsl`:
        return a(e3);
      case `hsv`:
        return [P2, F2, pe2, _e2] = c(e3), [...y(P2, F2, pe2), _e2];
      case `rgb`:
      case `hex`:
        return [me2, he2, ge2, _e2] = d(e3), [...b(me2, he2, ge2), _e2];
    }
  }), I2 = Z(() => {
    switch (N2.value) {
      case `rgb`:
      case `hex`:
        return ye2.value;
      case `hsv`:
        return ve2.value;
      case `hsl`:
        return be2.value;
    }
  }), xe2 = V(0), Se2 = V(1), Ce2 = V([0, 0]);
  function we2(t3, r2) {
    let { value: i3 } = ve2, a2 = xe2.value, c2 = i3 ? i3[3] : 1;
    Ce2.value = [t3, r2];
    let { showAlpha: l2 } = e2;
    switch (N2.value) {
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
    let { value: r2 } = ve2;
    if (!r2) return;
    let [, i3, a2, c2] = r2, { showAlpha: l2 } = e2;
    switch (N2.value) {
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
    switch (N2.value) {
      case `hsv`:
        [P2, F2, pe2] = ve2.value, L2(_([P2, F2, pe2, e3]), `cursor`);
        break;
      case `rgb`:
        [me2, he2, ge2] = ye2.value, L2(u([me2, he2, ge2, e3]), `cursor`);
        break;
      case `hex`:
        [me2, he2, ge2] = ye2.value, L2(n([me2, he2, ge2, e3]), `cursor`);
        break;
      case `hsl`:
        [P2, F2, fe2] = be2.value, L2(s([P2, F2, fe2, e3]), `cursor`);
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
    L2(e3, `input`), et(Oe2);
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
  function ke2() {
    let { value: e3 } = M2;
    e3 - 1 < 0 || (L2(oe2.value[e3 - 1], `input`), Oe2(false), M2.value = e3 - 1);
  }
  function Ae2() {
    let { value: e3 } = M2;
    e3 < 0 || e3 + 1 >= oe2.value.length || (L2(oe2.value[e3 + 1], `input`), Oe2(false), M2.value = e3 + 1);
  }
  function Me2() {
    L2(null, `input`);
    let { onClear: t3 } = e2;
    t3 && t3(), A2(false);
  }
  function Pe2() {
    let { value: t3 } = j2, { onConfirm: n2 } = e2;
    n2 && n2(t3), A2(false);
  }
  let Fe2 = Z(() => M2.value >= 1), Ie2 = Z(() => {
    let { value: e3 } = oe2;
    return e3.length > 1 && M2.value < e3.length - 1;
  });
  Tt(k2, (e3) => {
    e3 || (oe2.value = [j2.value], M2.value = 0);
  }), $e(() => {
    if (!(f2 && f2 === j2.value)) {
      let { value: e3 } = ve2;
      e3 && (xe2.value = e3[0], Se2.value = e3[3], Ce2.value = [e3[1], e3[2]]);
    }
    f2 = null;
  });
  let Le2 = Z(() => {
    let { value: e3 } = x2, { common: { cubicBezierEaseInOut: t3 }, self: { textColor: n2, color: r2, panelFontSize: i3, boxShadow: a2, border: o2, borderRadius: s2, dividerColor: c2, [w(`height`, e3)]: l2, [w(`fontSize`, e3)]: u2 } } = ne2.value;
    return { "--n-bezier": t3, "--n-text-color": n2, "--n-color": r2, "--n-panel-font-size": i3, "--n-font-size": u2, "--n-box-shadow": a2, "--n-border": o2, "--n-border-radius": s2, "--n-height": l2, "--n-divider-color": c2 };
  }), Re2 = te2 ? D(`color-picker`, Z(() => x2.value[0]), Le2, e2) : void 0;
  function ze2() {
    var _a;
    let { value: n2 } = ye2, { value: r2 } = xe2, { internalActions: i3, modes: a2, actions: o2 } = e2, { value: s2 } = ne2, { value: c2 } = T2;
    return H(`div`, { class: [`${c2}-color-picker-panel`, Re2 == null ? void 0 : Re2.themeClass.value], onDragstart: (e3) => {
      e3.preventDefault();
    }, style: te2 ? void 0 : Le2.value }, H(`div`, { class: `${c2}-color-picker-control` }, H(br, { clsPrefix: c2, rgba: n2, displayedHue: r2, displayedSv: Ce2.value, onUpdateSV: we2, onComplete: Oe2 }), H(`div`, { class: `${c2}-color-picker-preview` }, H(`div`, { class: `${c2}-color-picker-preview__sliders` }, H(_r, { clsPrefix: c2, hue: r2, onUpdateHue: Te2, onComplete: Oe2 }), e2.showAlpha ? H(Zn, { clsPrefix: c2, rgba: n2, alpha: Se2.value, onUpdateAlpha: Ee2, onComplete: Oe2 }) : null), e2.showPreview ? H(dr, { clsPrefix: c2, mode: N2.value, color: ye2.value && ue(ye2.value), onUpdateColor: (e3) => {
      L2(e3, `input`);
    } }) : null), H(or, { clsPrefix: c2, showAlpha: e2.showAlpha, mode: N2.value, modes: a2, onUpdateMode: de2, value: j2.value, valueArr: I2.value, onUpdateValue: De2 }), ((_a = e2.swatches) == null ? void 0 : _a.length) && H(lr, { clsPrefix: c2, mode: N2.value, swatches: e2.swatches, onUpdateColor: (e3) => {
      L2(e3, `input`);
    } })), (o2 == null ? void 0 : o2.length) ? H(`div`, { class: `${c2}-color-picker-action` }, o2.includes(`confirm`) && H(Q, { size: `small`, onClick: Pe2, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.confirm }), o2.includes(`clear`) && H(Q, { size: `small`, onClick: Me2, disabled: !j2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.clear })) : null, t2.action ? H(`div`, { class: `${c2}-color-picker-action` }, { default: t2.action }) : i3 ? H(`div`, { class: `${c2}-color-picker-action` }, i3.includes(`undo`) && H(Q, { size: `small`, onClick: ke2, disabled: !Fe2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.undo }), i3.includes(`redo`) && H(Q, { size: `small`, onClick: Ae2, disabled: !Ie2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.redo })) : null);
  }
  return { mergedClsPrefix: T2, namespace: ee2, selfRef: i2, hsla: be2, rgba: ye2, mergedShow: k2, mergedDisabled: S2, isMounted: qe(), adjustedTo: Ne(e2), mergedValue: j2, handleTriggerClick() {
    A2(true);
  }, handleClickOutside(e3) {
    var _a;
    ((_a = i2.value) == null ? void 0 : _a.contains(Je(e3))) || A2(false);
  }, renderPanel: ze2, cssVars: te2 ? void 0 : Le2, themeClass: Re2 == null ? void 0 : Re2.themeClass, onRender: Re2 == null ? void 0 : Re2.onRender };
}, render() {
  let { mergedClsPrefix: e2, onRender: t2 } = this;
  return t2 == null ? void 0 : t2(), H(`div`, { class: [this.themeClass, `${e2}-color-picker`], ref: `selfRef`, style: this.cssVars }, H(Ie, null, { default: () => [H(Fe, null, { default: () => H(ur, { clsPrefix: e2, value: this.mergedValue, hsla: this.hsla, disabled: this.mergedDisabled, onClick: this.handleTriggerClick }) }), H(Oe, { placement: this.placement, show: this.mergedShow, containerClass: this.namespace, teleportDisabled: this.adjustedTo === Ne.tdkey, to: this.adjustedTo }, { default: () => H(it, { name: `fade-in-scale-up-transition`, appear: this.isMounted }, { default: () => this.mergedShow ? rt(this.renderPanel(), [[Pe, this.handleClickOutside, void 0, { capture: true }]]) : null }) })] }));
} }), Cr = A(`dynamic-tags`, [A(`input`, { minWidth: `var(--n-input-width)` })]), wr = K({ name: `DynamicTags`, props: Object.assign(Object.assign(Object.assign({}, E.props), tn), { size: { type: String, default: `medium` }, closable: { type: Boolean, default: true }, defaultValue: { type: Array, default: () => [] }, value: Array, inputClass: String, inputStyle: [String, Object], inputProps: Object, max: Number, tagClass: String, tagStyle: [String, Object], renderTag: Function, onCreate: { type: Function, default: (e2) => e2 }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = ce(e2), { localeRef: i2 } = Kt(`DynamicTags`), a2 = Xt(e2), { mergedDisabledRef: o2 } = a2, s2 = V(``), c2 = V(false), l2 = V(true), u2 = V(null), d2 = E(`DynamicTags`, `-dynamic-tags`, Cr, Rt, e2, t2), f2 = V(e2.defaultValue), p2 = je(R(e2, `value`), f2), m2 = Z(() => i2.value.add), h2 = Z(() => Fn(e2.size)), g2 = Z(() => o2.value || !!e2.max && p2.value.length >= e2.max);
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
    c2.value = true, et(() => {
      var e3;
      (e3 = u2.value) == null || e3.focus(), l2.value = false;
    });
  }
  let C2 = Z(() => {
    let { self: { inputWidth: e3 } } = d2.value;
    return { "--n-input-width": e3 };
  }), w2 = n2 ? D(`dynamic-tags`, void 0, C2, e2) : void 0;
  return { mergedClsPrefix: t2, inputInstRef: u2, localizedAdd: m2, inputSize: h2, inputValue: s2, showInput: c2, inputForceFocused: l2, mergedValue: p2, mergedDisabled: o2, triggerDisabled: g2, handleInputKeyDown: y2, handleAddClick: S2, handleInputBlur: x2, handleCloseClick: v2, handleInputConfirm: b2, mergedTheme: d2, cssVars: n2 ? void 0 : C2, themeClass: w2 == null ? void 0 : w2.themeClass, onRender: w2 == null ? void 0 : w2.onRender };
}, render() {
  let { mergedTheme: e2, cssVars: t2, mergedClsPrefix: n2, onRender: r2, renderTag: i2 } = this;
  return r2 == null ? void 0 : r2(), H(cn, { class: [`${n2}-dynamic-tags`, this.themeClass], size: `small`, style: t2, theme: e2.peers.Space, themeOverrides: e2.peerOverrides.Space, itemStyle: `display: flex;` }, { default: () => {
    let { mergedTheme: e3, tagClass: t3, tagStyle: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, mergedDisabled: u2, showInput: d2, inputValue: f2, inputClass: p2, inputStyle: m2, inputSize: h2, inputForceFocused: g2, triggerDisabled: _2, handleInputKeyDown: v2, handleInputBlur: y2, handleAddClick: b2, handleCloseClick: x2, handleInputConfirm: S2, $slots: C2 } = this;
    return this.mergedValue.map((n3, d3) => i2 ? i2(n3, d3) : H(rn, { key: d3, theme: e3.peers.Tag, themeOverrides: e3.peerOverrides.Tag, class: t3, style: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, disabled: u2, onClose: () => {
      x2(d3);
    } }, { default: () => typeof n3 == `string` ? n3 : n3.label })).concat(d2 ? C2.input ? C2.input({ submit: S2, deactivate: y2 }) : H(L, Object.assign({ placeholder: ``, size: h2, style: m2, class: p2, autosize: true }, this.inputProps, { ref: `inputInstRef`, value: f2, onUpdateValue: (e4) => {
      this.inputValue = e4;
    }, theme: e3.peers.Input, themeOverrides: e3.peerOverrides.Input, onKeydown: v2, onBlur: y2, internalForceFocus: g2 })) : C2.trigger ? C2.trigger({ activate: b2, disabled: _2 }) : H(Q, { dashed: true, disabled: _2, theme: e3.peers.Button, themeOverrides: e3.peerOverrides.Button, size: h2, onClick: b2 }, { icon: () => H(M, { clsPrefix: n2 }, { default: () => H(Ee, null) }) }));
  } });
} }), Tr = K({ name: `Flex`, props: Object.assign(Object.assign({}, E.props), { align: String, justify: { type: String, default: `start` }, inline: Boolean, vertical: Boolean, reverse: Boolean, size: { type: [String, Number, Array], default: `medium` }, wrap: { type: Boolean, default: true } }), setup(t2) {
  let { mergedClsPrefixRef: n2, mergedRtlRef: r2 } = ce(t2), i2 = E(`Flex`, `-flex`, void 0, Ft, t2, n2);
  return { rtlEnabled: ee(`Flex`, r2, n2), mergedClsPrefix: n2, margin: Z(() => {
    let { size: n3 } = t2;
    if (Array.isArray(n3)) return { horizontal: n3[0], vertical: n3[1] };
    if (typeof n3 == `number`) return { horizontal: n3, vertical: n3 };
    let { self: { [w(`gap`, n3)]: r3 } } = i2.value, { row: a2, col: o2 } = T(r3);
    return { horizontal: e(o2), vertical: e(a2) };
  }) };
}, render() {
  let { vertical: e2, reverse: t2, align: n2, inline: r2, justify: i2, margin: a2, wrap: o2, mergedClsPrefix: s2, rtlEnabled: c2 } = this, l2 = Xe(en(this), false);
  return l2.length ? H(`div`, { role: `none`, class: [`${s2}-flex`, c2 && `${s2}-flex--rtl`], style: { display: r2 ? `inline-flex` : `flex`, flexDirection: /* @__PURE__ */ (() => e2 && !t2 ? `column` : e2 && t2 ? `column-reverse` : !e2 && t2 ? `row-reverse` : `row`)(), justifyContent: i2, flexWrap: !o2 || e2 ? `nowrap` : `wrap`, alignItems: n2, gap: `${a2.vertical}px ${a2.horizontal}px` } }, l2) : null;
} });
const Er = f(`n-grid`), Dr = { span: { type: [Number, String], default: 1 }, offset: { type: [Number, String], default: 0 }, suffix: Boolean, privateOffset: Number, privateSpan: Number, privateColStart: Number, privateShow: { type: Boolean, default: true } };
i(Dr);
var Or = K({ __GRID_ITEM__: true, name: `GridItem`, alias: [`Gi`], props: Dr, setup() {
  let { isSsrRef: e2, xGapRef: t2, itemStyleRef: n2, overflowRef: r2, layoutShiftDisabledRef: i2 } = wt(Er), a2 = ht();
  return { overflow: r2, itemStyle: n2, layoutShiftDisabled: i2, mergedXGap: Z(() => k(t2.value || 0)), deriveStyle: () => {
    e2.value;
    let { privateSpan: n3 = 1, privateShow: r3 = true, privateColStart: i3 = void 0, privateOffset: o2 = 0 } = a2.vnode.props, { value: s2 } = t2, c2 = k(s2 || 0);
    return { display: r3 ? `` : `none`, gridColumn: `${i3 ?? `span ${n3}`} / span ${n3}`, marginLeft: o2 ? `calc((100% - (${n3} - 1) * ${c2}) / ${n3} * ${o2} + ${c2} * ${o2})` : `` };
  } };
}, render() {
  var _a;
  var e2;
  if (this.layoutShiftDisabled) {
    let { span: e3, offset: t2, mergedXGap: n2 } = this;
    return H(`div`, { style: { gridColumn: `span ${e3} / span ${e3}`, marginLeft: t2 ? `calc((100% - (${e3} - 1) * ${n2}) / ${e3} * ${t2} + ${n2} * ${t2})` : `` } }, this.$slots);
  }
  return H(`div`, { style: [this.itemStyle, this.deriveStyle()] }, (_a = (e2 = this.$slots).default) == null ? void 0 : _a.call(e2, { overflow: this.overflow }));
} });
const kr = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 };
var Ar = 24, jr = `__ssr__`, Mr = K({ name: `Grid`, inheritAttrs: false, props: { layoutShiftDisabled: Boolean, responsive: { type: [String, Boolean], default: `self` }, cols: { type: [Number, String], default: Ar }, itemResponsive: Boolean, collapsed: Boolean, collapsedRows: { type: Number, default: 1 }, itemStyle: [Object, String], xGap: { type: [Number, String], default: 0 }, yGap: { type: [Number, String], default: 0 } }, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedBreakpointsRef: n2 } = ce(e2), r2 = /^\d+$/, i2 = V(void 0), a2 = jn((n2 == null ? void 0 : n2.value) || kr), o2 = Le(() => !!(e2.itemResponsive || !r2.test(e2.cols.toString()) || !r2.test(e2.xGap.toString()) || !r2.test(e2.yGap.toString()))), s2 = Z(() => {
    if (o2.value) return e2.responsive === `self` ? i2.value : a2.value;
  }), c2 = Le(() => Number(ae(e2.cols.toString(), s2.value)) ?? Ar), l2 = Le(() => ae(e2.xGap.toString(), s2.value)), u2 = Le(() => ae(e2.yGap.toString(), s2.value)), d2 = (e3) => {
    i2.value = e3.contentRect.width;
  }, f2 = (e3) => {
    Ue(d2, e3);
  }, p2 = V(false), m2 = Z(() => {
    if (e2.responsive === `self`) return f2;
  }), h2 = V(false), g2 = V();
  return ot(() => {
    let { value: e3 } = g2;
    e3 && e3.hasAttribute(jr) && (e3.removeAttribute(jr), h2.value = true);
  }), _t(Er, { layoutShiftDisabledRef: R(e2, `layoutShiftDisabled`), isSsrRef: h2, itemStyleRef: R(e2, `itemStyle`), xGapRef: l2, overflowRef: p2 }), { isSsr: !Ae, contentEl: g2, mergedClsPrefix: t2, style: Z(() => e2.layoutShiftDisabled ? { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${e2.cols}, minmax(0, 1fr))`, columnGap: k(e2.xGap), rowGap: k(e2.yGap) } : { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${c2.value}, minmax(0, 1fr))`, columnGap: k(l2.value), rowGap: k(u2.value) }), isResponsive: o2, responsiveQuery: s2, responsiveCols: c2, handleResize: m2, overflow: p2 };
}, render() {
  if (this.layoutShiftDisabled) return H(`div`, ut({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style }, this.$attrs), this.$slots);
  let e2 = () => {
    var _a, _b, _c, _d;
    this.overflow = false;
    let e3 = Xe(en(this)), t2 = [], { collapsed: n2, collapsedRows: r2, responsiveCols: i2, responsiveQuery: a2 } = this;
    e3.forEach((e4) => {
      var _a2, _b2, _c2, _d2;
      if (((_a2 = e4 == null ? void 0 : e4.type) == null ? void 0 : _a2.__GRID_ITEM__) !== true) return;
      if (In(e4)) {
        let n4 = yt(e4);
        n4.props ? n4.props.privateShow = false : n4.props = { privateShow: false }, t2.push({ child: n4, rawChildSpan: 0 });
        return;
      }
      e4.dirs = ((_b2 = e4.dirs) == null ? void 0 : _b2.filter(({ dir: e5 }) => e5 !== ct)) || null, ((_c2 = e4.dirs) == null ? void 0 : _c2.length) === 0 && (e4.dirs = null);
      let n3 = yt(e4), r3 = Number(ae((_d2 = n3.props) == null ? void 0 : _d2.span, a2) ?? 1);
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
    return H(`div`, ut({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style, [jr]: this.isSsr || void 0 }, this.$attrs), t2.map(({ child: e4 }) => e4));
  };
  return this.isResponsive && this.responsive === `self` ? H(Re, { onResize: this.handleResize }, { default: e2 }) : e2();
} }), Nr = x([A(`input-number-suffix`, `
 display: inline-block;
 margin-right: 10px;
 `), A(`input-number-prefix`, `
 display: inline-block;
 margin-left: 10px;
 `)]);
function Pr(e2) {
  return e2 == null || typeof e2 == `string` && e2.trim() === `` ? null : Number(e2);
}
function Fr(e2) {
  return e2.includes(`.`) && (/^(-)?\d+.*(\.|0)$/.test(e2) || /^-?\d*$/.test(e2)) || e2 === `-` || e2 === `-0`;
}
function Ir(e2) {
  return e2 == null ? true : !Number.isNaN(e2);
}
function Lr(e2, t2) {
  return typeof e2 == `number` ? t2 === void 0 ? String(e2) : e2.toFixed(t2) : ``;
}
function Rr(e2) {
  if (e2 === null) return null;
  if (typeof e2 == `number`) return e2;
  {
    let t2 = Number(e2);
    return Number.isNaN(t2) ? null : t2;
  }
}
var zr = 800, Br = 100, Vr = K({ name: `InputNumber`, props: Object.assign(Object.assign({}, E.props), { autofocus: Boolean, loading: { type: Boolean, default: void 0 }, placeholder: String, defaultValue: { type: Number, default: null }, value: Number, step: { type: [Number, String], default: 1 }, min: [Number, String], max: [Number, String], size: String, disabled: { type: Boolean, default: void 0 }, validator: Function, bordered: { type: Boolean, default: void 0 }, showButton: { type: Boolean, default: true }, buttonPlacement: { type: String, default: `right` }, inputProps: Object, readonly: Boolean, clearable: Boolean, keyboard: { type: Object, default: {} }, updateValueOnInput: { type: Boolean, default: true }, round: { type: Boolean, default: void 0 }, parse: Function, format: Function, precision: Number, status: String, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClear: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedBorderedRef: t2, mergedClsPrefixRef: n2, mergedRtlRef: i2 } = ce(e2), a2 = E(`InputNumber`, `-input-number`, Nr, Lt, e2, n2), { localeRef: o2 } = Kt(`InputNumber`), s2 = Xt(e2), { mergedSizeRef: c2, mergedDisabledRef: l2, mergedStatusRef: u2 } = s2, f2 = V(null), p2 = V(null), m2 = V(null), h2 = V(e2.defaultValue), g2 = je(R(e2, `value`), h2), _2 = V(``), v2 = (e3) => {
    let t3 = String(e3).split(`.`)[1];
    return t3 ? t3.length : 0;
  }, y2 = (t3) => {
    let n3 = [e2.min, e2.max, e2.step, t3].map((e3) => e3 === void 0 ? 0 : v2(e3));
    return Math.max(...n3);
  }, b2 = Le(() => {
    let { placeholder: t3 } = e2;
    return t3 === void 0 ? o2.value.placeholder : t3;
  }), x2 = Le(() => {
    let t3 = Rr(e2.step);
    return t3 === null || t3 === 0 ? 1 : Math.abs(t3);
  }), S2 = Le(() => {
    let t3 = Rr(e2.min);
    return t3 === null ? null : t3;
  }), C2 = Le(() => {
    let t3 = Rr(e2.max);
    return t3 === null ? null : t3;
  }), w2 = () => {
    let { value: t3 } = g2;
    if (Ir(t3)) {
      let { format: n3, precision: r2 } = e2;
      n3 ? _2.value = n3(t3) : t3 === null || r2 === void 0 || v2(t3) > r2 ? _2.value = Lr(t3, void 0) : _2.value = Lr(t3, r2);
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
    if (i3 && Fr(a3)) return false;
    let o3 = (e2.parse || Pr)(a3);
    if (o3 === null) return n3 && T2(null), null;
    if (Ir(o3)) {
      let a4 = v2(o3), { precision: s3 } = e2;
      if (s3 !== void 0 && s3 < a4 && !r2) return false;
      let c3 = Number.parseFloat((o3 + t3).toFixed(s3 ?? y2(o3)));
      if (Ir(c3)) {
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
  }, te2 = Le(() => D2({ offset: 0, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) === false), ne2 = Le(() => {
    let { value: t3 } = g2;
    if (e2.validator && t3 === null) return false;
    let { value: n3 } = x2;
    return D2({ offset: -n3, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  }), O2 = Le(() => {
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
    i3 && r(i3, t3), a3(), et(() => {
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
      fe2();
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
      P2();
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
  let ue2 = null, N2 = null, de2 = null;
  function P2() {
    de2 && (de2 = (window.clearTimeout(de2), null)), ue2 && (ue2 = (window.clearInterval(ue2), null));
  }
  let F2 = null;
  function fe2() {
    F2 && (F2 = (window.clearTimeout(F2), null)), N2 && (N2 = (window.clearInterval(N2), null));
  }
  function pe2() {
    P2(), de2 = window.setTimeout(() => {
      ue2 = window.setInterval(() => {
        ae2();
      }, Br);
    }, zr), Ye(`mouseup`, document, P2, { once: true });
  }
  function me2() {
    fe2(), F2 = window.setTimeout(() => {
      N2 = window.setInterval(() => {
        ie2();
      }, Br);
    }, zr), Ye(`mouseup`, document, fe2, { once: true });
  }
  let he2 = () => {
    N2 || ie2();
  }, ge2 = () => {
    ue2 || ae2();
  };
  function _e2(t3) {
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
  function ve2(t3) {
    _2.value = t3, e2.updateValueOnInput && !e2.format && !e2.parse && e2.precision === void 0 && D2({ offset: 0, doUpdateIfValid: true, isInputing: true, fixPrecision: false });
  }
  Tt(g2, () => {
    w2();
  });
  let ye2 = { focus: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.focus();
  }, blur: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.blur();
  }, select: () => {
    var _a;
    return (_a = f2.value) == null ? void 0 : _a.select();
  } }, be2 = ee(`InputNumber`, i2, n2);
  return Object.assign(Object.assign({}, ye2), { rtlEnabled: be2, inputInstRef: f2, minusButtonInstRef: p2, addButtonInstRef: m2, mergedClsPrefix: n2, mergedBordered: t2, uncontrolledValue: h2, mergedValue: g2, mergedPlaceholder: b2, displayedValueInvalid: te2, mergedSize: c2, mergedDisabled: l2, displayedValue: _2, addable: O2, minusable: ne2, mergedStatus: u2, handleFocus: j2, handleBlur: oe2, handleClear: se2, handleMouseDown: le2, handleAddClick: he2, handleMinusClick: ge2, handleAddMousedown: me2, handleMinusMousedown: pe2, handleKeyDown: _e2, handleUpdateDisplayedValue: ve2, mergedTheme: a2, inputThemeOverrides: { paddingSmall: `0 8px 0 10px`, paddingMedium: `0 8px 0 12px`, paddingLarge: `0 8px 0 14px` }, buttonThemeOverrides: Z(() => {
    let { self: { iconColorDisabled: e3 } } = a2.value, [t3, n3, r2, i3] = d(e3);
    return { textColorTextDisabled: `rgb(${t3}, ${n3}, ${r2})`, opacityDisabled: `${i3}` };
  }) });
}, render() {
  let { mergedClsPrefix: e2, $slots: t2 } = this, n2 = () => H($t, { text: true, disabled: !this.minusable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleMinusClick, onMousedown: this.handleMinusMousedown, ref: `minusButtonInstRef` }, { icon: () => m(t2[`minus-icon`], () => [H(M, { clsPrefix: e2 }, { default: () => H(Ln, null) })]) }), r2 = () => H($t, { text: true, disabled: !this.addable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleAddClick, onMousedown: this.handleAddMousedown, ref: `addButtonInstRef` }, { icon: () => m(t2[`add-icon`], () => [H(M, { clsPrefix: e2 }, { default: () => H(Ee, null) })]) });
  return H(`div`, { class: [`${e2}-input-number`, this.rtlEnabled && `${e2}-input-number--rtl`] }, H(L, { ref: `inputInstRef`, autofocus: this.autofocus, status: this.mergedStatus, bordered: this.mergedBordered, loading: this.loading, value: this.displayedValue, onUpdateValue: this.handleUpdateDisplayedValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, builtinThemeOverrides: this.inputThemeOverrides, size: this.mergedSize, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, readonly: this.readonly, round: this.round, textDecoration: this.displayedValueInvalid ? `line-through` : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onClear: this.handleClear, clearable: this.clearable, inputProps: this.inputProps, internalLoadingBeforeSuffix: true }, { prefix: () => {
    var _a;
    return this.showButton && this.buttonPlacement === `both` ? [n2(), le(t2.prefix, (t3) => t3 ? H(`span`, { class: `${e2}-input-number-prefix` }, t3) : null)] : (_a = t2.prefix) == null ? void 0 : _a.call(t2);
  }, suffix: () => {
    var _a;
    return this.showButton ? [le(t2.suffix, (t3) => t3 ? H(`span`, { class: `${e2}-input-number-suffix` }, t3) : null), this.buttonPlacement === `right` ? n2() : null, r2()] : (_a = t2.suffix) == null ? void 0 : _a.call(t2);
  } }));
} }), Hr = A(`layout`, `
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
const Ur = { embedded: Boolean, position: kt, nativeScrollbar: { type: Boolean, default: true }, scrollbarProps: Object, onScroll: Function, contentClass: String, contentStyle: { type: [String, Object], default: `` }, hasSider: Boolean, siderPlacement: { type: String, default: `left` } }, Wr = f(`n-layout`);
function Gr(e2) {
  return K({ name: e2 ? `LayoutContent` : `Layout`, props: Object.assign(Object.assign({}, E.props), Ur), setup(e3) {
    let t2 = V(null), n2 = V(null), { mergedClsPrefixRef: r2, inlineThemeDisabled: i2 } = ce(e3), a2 = E(`Layout`, `-layout`, Hr, Pt, e3, r2);
    function o2(r3, i3) {
      if (e3.nativeScrollbar) {
        let { value: e4 } = t2;
        e4 && (i3 === void 0 ? e4.scrollTo(r3) : e4.scrollTo(r3, i3));
      } else {
        let { value: e4 } = n2;
        e4 && e4.scrollTo(r3, i3);
      }
    }
    _t(Wr, e3);
    let s2 = 0, c2 = 0, l2 = (t3) => {
      var n3;
      let r3 = t3.target;
      s2 = r3.scrollLeft, c2 = r3.scrollTop, (n3 = e3.onScroll) == null || n3.call(e3, t3);
    };
    ke(() => {
      if (e3.nativeScrollbar) {
        let e4 = t2.value;
        e4 && (e4.scrollTop = c2, e4.scrollLeft = s2);
      }
    });
    let u2 = { display: `flex`, flexWrap: `nowrap`, width: `100%`, flexDirection: `row` }, d2 = { scrollTo: o2 }, f2 = Z(() => {
      let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = a2.value;
      return { "--n-bezier": t3, "--n-color": e3.embedded ? n3.colorEmbedded : n3.color, "--n-text-color": n3.textColor };
    }), p2 = i2 ? D(`layout`, Z(() => e3.embedded ? `e` : ``), f2, e3) : void 0;
    return Object.assign({ mergedClsPrefix: r2, scrollableElRef: t2, scrollbarInstRef: n2, hasSiderStyle: u2, mergedTheme: a2, handleNativeElScroll: l2, cssVars: i2 ? void 0 : f2, themeClass: p2 == null ? void 0 : p2.themeClass, onRender: p2 == null ? void 0 : p2.onRender }, d2);
  }, render() {
    var t2;
    let { mergedClsPrefix: n2, hasSider: r2 } = this;
    (t2 = this.onRender) == null || t2.call(this);
    let i2 = r2 ? this.hasSiderStyle : void 0;
    return H(`div`, { class: [this.themeClass, e2 && `${n2}-layout-content`, `${n2}-layout`, `${n2}-layout--${this.position}-positioned`], style: this.cssVars }, this.nativeScrollbar ? H(`div`, { ref: `scrollableElRef`, class: [`${n2}-layout-scroll-container`, this.contentClass], style: [this.contentStyle, i2], onScroll: this.handleNativeElScroll }, this.$slots) : H(Ke, Object.assign({}, this.scrollbarProps, { onScroll: this.onScroll, ref: `scrollbarInstRef`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: this.contentClass, contentStyle: [this.contentStyle, i2] }), this.$slots));
  } });
}
Gr(false);
var Kr = Gr(true), qr = A(`layout-footer`, `
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
 `)]), Jr = K({ name: `LayoutFooter`, props: Object.assign(Object.assign({}, E.props), { inverted: Boolean, position: kt, bordered: Boolean }), setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = ce(e2), r2 = E(`Layout`, `-layout-footer`, qr, Pt, e2, t2), i2 = Z(() => {
    let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = r2.value, i3 = { "--n-bezier": t3 };
    return e2.inverted ? (i3[`--n-color`] = n3.footerColorInverted, i3[`--n-text-color`] = n3.textColorInverted, i3[`--n-border-color`] = n3.footerBorderColorInverted) : (i3[`--n-color`] = n3.footerColor, i3[`--n-text-color`] = n3.textColor, i3[`--n-border-color`] = n3.footerBorderColor), i3;
  }), a2 = n2 ? D(`layout-footer`, Z(() => e2.inverted ? `a` : `b`), i2, e2) : void 0;
  return { mergedClsPrefix: t2, cssVars: n2 ? void 0 : i2, themeClass: a2 == null ? void 0 : a2.themeClass, onRender: a2 == null ? void 0 : a2.onRender };
}, render() {
  var e2;
  let { mergedClsPrefix: t2 } = this;
  return (e2 = this.onRender) == null || e2.call(this), H(`div`, { class: [`${t2}-layout-footer`, this.themeClass, this.position && `${t2}-layout-footer--${this.position}-positioned`, this.bordered && `${t2}-layout-footer--bordered`], style: this.cssVars }, this.$slots);
} });
const Yr = f(`n-popconfirm`), Xr = { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true } }, Zr = i(Xr);
var Qr = K({ name: `NPopconfirmPanel`, props: Xr, setup(e2) {
  let { localeRef: t2 } = Kt(`Popconfirm`), { inlineThemeDisabled: n2 } = ce(), { mergedClsPrefixRef: r2, mergedThemeRef: i2, props: a2 } = wt(Yr), o2 = Z(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { fontSize: t3, iconSize: n3, iconColor: r3 } } = i2.value;
    return { "--n-bezier": e3, "--n-font-size": t3, "--n-icon-size": n3, "--n-icon-color": r3 };
  }), s2 = n2 ? D(`popconfirm-panel`, void 0, o2, a2) : void 0;
  return Object.assign(Object.assign({}, Kt(`Popconfirm`)), { mergedClsPrefix: r2, cssVars: n2 ? void 0 : o2, localizedPositiveText: Z(() => e2.positiveText || t2.value.positiveText), localizedNegativeText: Z(() => e2.negativeText || t2.value.negativeText), positiveButtonProps: R(a2, `positiveButtonProps`), negativeButtonProps: R(a2, `negativeButtonProps`), handlePositiveClick(t3) {
    e2.onPositiveClick(t3);
  }, handleNegativeClick(t3) {
    e2.onNegativeClick(t3);
  }, themeClass: s2 == null ? void 0 : s2.themeClass, onRender: s2 == null ? void 0 : s2.onRender });
}, render() {
  var e2;
  let { mergedClsPrefix: t2, showIcon: n2, $slots: r2 } = this, i2 = m(r2.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && H(Q, Object.assign({ size: `small`, onClick: this.handleNegativeClick }, this.negativeButtonProps), { default: () => this.localizedNegativeText }), this.positiveText !== null && H(Q, Object.assign({ size: `small`, type: `primary`, onClick: this.handlePositiveClick }, this.positiveButtonProps), { default: () => this.localizedPositiveText })]);
  return (e2 = this.onRender) == null || e2.call(this), H(`div`, { class: [`${t2}-popconfirm__panel`, this.themeClass], style: this.cssVars }, le(r2.default, (e3) => n2 || e3 ? H(`div`, { class: `${t2}-popconfirm__body` }, n2 ? H(`div`, { class: `${t2}-popconfirm__icon` }, m(r2.icon, () => [H(M, { clsPrefix: t2 }, { default: () => H(on, null) })])) : null, e3) : null), i2 ? H(`div`, { class: [`${t2}-popconfirm__action`] }, i2) : null);
} }), $r = A(`popconfirm`, [C(`body`, `
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
 `, [x(`&:not(:first-child)`, `margin-top: 8px`), A(`button`, [x(`&:not(:last-child)`, `margin-right: 8px;`)])])]), ei = K({ name: `Popconfirm`, props: Object.assign(Object.assign(Object.assign({}, E.props), Ge), { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, trigger: { type: String, default: `click` }, positiveButtonProps: Object, negativeButtonProps: Object, onPositiveClick: Function, onNegativeClick: Function }), slots: Object, __popover__: true, setup(e2) {
  let { mergedClsPrefixRef: t2 } = ce(), n2 = E(`Popconfirm`, `-popconfirm`, $r, Bt, e2, t2), i2 = V(null);
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
  return _t(Yr, { mergedThemeRef: n2, mergedClsPrefixRef: t2, props: e2 }), { setShow(e3) {
    var t3;
    (t3 = i2.value) == null || t3.setShow(e3);
  }, syncPosition() {
    var e3;
    (e3 = i2.value) == null || e3.syncPosition();
  }, mergedTheme: n2, popoverInstRef: i2, handlePositiveClick: a2, handleNegativeClick: o2 };
}, render() {
  let { $slots: e2, $props: t2, mergedTheme: n2 } = this;
  return H(Ve, Object.assign({}, jt(t2, Zr), { theme: n2.peers.Popover, themeOverrides: n2.peerOverrides.Popover, internalExtraClass: [`popconfirm`], ref: `popoverInstRef` }), { trigger: e2.trigger, default: () => {
    let n3 = Ze(t2, Zr);
    return H(Qr, Object.assign({}, n3, { onPositiveClick: this.handlePositiveClick, onNegativeClick: this.handleNegativeClick }), e2);
  } });
} }), ti = A(`split`, `
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
 `)])]), ni = K({ name: `Split`, props: Object.assign(Object.assign({}, E.props), { direction: { type: String, default: `horizontal` }, resizeTriggerSize: { type: Number, default: 3 }, disabled: Boolean, defaultSize: { type: [String, Number], default: 0.5 }, "onUpdate:size": [Function, Array], onUpdateSize: [Function, Array], size: [String, Number], min: { type: [String, Number], default: 0 }, max: { type: [String, Number], default: 1 }, pane1Class: String, pane1Style: [Object, String], pane2Class: String, pane2Style: [Object, String], onDragStart: Function, onDragMove: Function, onDragEnd: Function, watchProps: Array }), slots: Object, setup(t2) {
  var _a;
  let { mergedClsPrefixRef: n2, inlineThemeDisabled: i2 } = ce(t2), a2 = E(`Split`, `-split`, ti, Vt, t2, n2), o2 = Z(() => {
    let { common: { cubicBezierEaseInOut: e2 }, self: { resizableTriggerColor: t3, resizableTriggerColorHover: n3 } } = a2.value;
    return { "--n-bezier": e2, "--n-resize-trigger-color": t3, "--n-resize-trigger-color-hover": n3 };
  }), s2 = V(null), c2 = V(false), l2 = R(t2, `size`), u2 = V(t2.defaultSize);
  ((_a = t2.watchProps) == null ? void 0 : _a.includes(`defaultSize`)) && $e(() => u2.value = t2.defaultSize);
  let d2 = (e2) => {
    let n3 = t2[`onUpdate:size`];
    t2.onUpdateSize && r(t2.onUpdateSize, e2), n3 && r(n3, e2), u2.value = e2;
  }, f2 = je(l2, u2), p2 = Z(() => {
    let e2 = f2.value;
    if (typeof e2 == `string`) return { flex: `0 0 ${e2}` };
    if (typeof e2 == `number`) {
      let n3 = e2 * 100;
      return { flex: `0 0 calc(${n3}% - ${t2.resizeTriggerSize * n3 / 100}px)` };
    }
  }), m2 = Z(() => t2.direction === `horizontal` ? { width: `${t2.resizeTriggerSize}px`, height: `100%` } : { width: `100%`, height: `${t2.resizeTriggerSize}px` }), h2 = Z(() => {
    let e2 = t2.direction === `horizontal`;
    return { width: e2 ? `${t2.resizeTriggerSize}px` : ``, height: e2 ? `` : `${t2.resizeTriggerSize}px`, cursor: t2.direction === `horizontal` ? `col-resize` : `row-resize` };
  }), g2 = 0, _2 = (e2) => {
    e2.preventDefault(), c2.value = true, t2.onDragStart && t2.onDragStart(e2);
    let n3 = `mousemove`, r2 = `mouseup`, i3 = (e3) => {
      v2(e3), t2.onDragMove && t2.onDragMove(e3);
    }, a3 = () => {
      He(n3, document, i3), He(r2, document, a3), c2.value = false, t2.onDragEnd && t2.onDragEnd(e2), document.body.style.cursor = ``;
    };
    document.body.style.cursor = h2.value.cursor, Ye(n3, document, i3), Ye(r2, document, a3);
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
  return (e2 = this.onRender) == null || e2.call(this), H(`div`, { class: [`${this.mergedClsPrefix}-split`, `${this.mergedClsPrefix}-split--${this.direction}`, this.themeClass], style: this.cssVars }, H(`div`, { class: [`${this.mergedClsPrefix}-split-pane-1`, this.pane1Class], style: [this.firstPaneStyle, this.pane1Style] }, (_a = (t2 = this.$slots)[1]) == null ? void 0 : _a.call(t2)), !this.disabled && H(`div`, { ref: `resizeTriggerElRef`, class: `${this.mergedClsPrefix}-split__resize-trigger-wrapper`, style: this.resizeTriggerWrapperStyle, onMousedown: this.handleMouseDown }, m(this.$slots[`resize-trigger`], () => [H(`div`, { style: this.resizeTriggerStyle, class: [`${this.mergedClsPrefix}-split__resize-trigger`, this.isDragging && `${this.mergedClsPrefix}-split__resize-trigger--hover`] })])), H(`div`, { class: [`${this.mergedClsPrefix}-split-pane-2`, this.pane2Class], style: this.pane2Style }, (_b = (n2 = this.$slots)[2]) == null ? void 0 : _b.call(n2)));
} });
const ri = f(`n-tabs`), ii = { tab: [String, Number, Object, Function], name: { type: [String, Number], required: true }, disabled: Boolean, displayDirective: { type: String, default: `if` }, closable: { type: Boolean, default: void 0 }, tabProps: Object, label: [String, Number, Object, Function] };
var ai = K({ __TAB_PANE__: true, name: `TabPane`, alias: [`TabPanel`], props: ii, slots: Object, setup(e2) {
  let t2 = wt(ri, null);
  return t2 || ne(`tab-pane`, "`n-tab-pane` must be placed inside `n-tabs`."), { style: t2.paneStyleRef, class: t2.paneClassRef, mergedClsPrefix: t2.mergedClsPrefixRef };
}, render() {
  return H(`div`, { class: [`${this.mergedClsPrefix}-tab-pane`, this.class], style: this.style }, this.$slots);
} }), oi = K({ __TAB__: true, inheritAttrs: false, name: `Tab`, props: Object.assign({ internalLeftPadded: Boolean, internalAddable: Boolean, internalCreatedByPane: Boolean }, jt(ii, [`displayDirective`])), setup(e2) {
  let { mergedClsPrefixRef: t2, valueRef: n2, typeRef: r2, closableRef: i2, tabStyleRef: a2, addTabStyleRef: o2, tabClassRef: s2, addTabClassRef: c2, tabChangeIdRef: l2, onBeforeLeaveRef: u2, triggerRef: d2, handleAdd: f2, activateTab: p2, handleClose: m2 } = wt(ri);
  return { trigger: d2, mergedClosable: Z(() => {
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
  return H(`div`, { class: `${t2}-tabs-tab-wrapper` }, this.internalLeftPadded ? H(`div`, { class: `${t2}-tabs-tab-pad` }) : null, H(`div`, Object.assign({ key: n2, "data-name": n2, "data-disabled": r2 ? true : void 0 }, ut({ class: [`${t2}-tabs-tab`, o2 === n2 && `${t2}-tabs-tab--active`, r2 && `${t2}-tabs-tab--disabled`, s2 && `${t2}-tabs-tab--closable`, e2 && `${t2}-tabs-tab--addable`, e2 ? this.addTabClass : this.tabClass], onClick: c2 === `click` ? this.activateTab : void 0, onMouseenter: c2 === `hover` ? this.activateTab : void 0, style: e2 ? this.addStyle : this.style }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), H(`span`, { class: `${t2}-tabs-tab__label` }, e2 ? H(vt, null, H(`div`, { class: `${t2}-tabs-tab__height-placeholder` }, `\xA0`), H(M, { clsPrefix: t2 }, { default: () => H(Ee, null) })) : l2 ? l2() : typeof u2 == `object` ? u2 : Zt(u2 ?? n2)), s2 && this.type === `card` ? H(S, { clsPrefix: t2, class: `${t2}-tabs-tab__close`, onClick: this.handleClose, disabled: r2 }) : null));
} }), si = A(`tabs`, `
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
 `)])])])]), ci = vn, li = K({ name: `Tabs`, props: Object.assign(Object.assign({}, E.props), { value: [String, Number], defaultValue: [String, Number], trigger: { type: String, default: `click` }, type: { type: String, default: `bar` }, closable: Boolean, justifyContent: String, size: { type: String, default: `medium` }, placement: { type: String, default: `top` }, tabStyle: [String, Object], tabClass: String, addTabStyle: [String, Object], addTabClass: String, barWidth: Number, paneClass: String, paneStyle: [String, Object], paneWrapperClass: String, paneWrapperStyle: [String, Object], addable: [Boolean, Object], tabsPadding: { type: Number, default: 0 }, animated: Boolean, onBeforeLeave: Function, onAdd: Function, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onClose: [Function, Array], labelSize: String, activeName: [String, Number], onActiveNameChange: [Function, Array] }), slots: Object, setup(t2, { slots: n2 }) {
  var _a, _b;
  let { mergedClsPrefixRef: i2, inlineThemeDisabled: a2 } = ce(t2), o2 = E(`Tabs`, `-tabs`, si, It, t2, i2), s2 = V(null), c2 = V(null), l2 = V(null), u2 = V(null), d2 = V(null), f2 = V(null), p2 = V(true), m2 = V(true), h2 = Me(t2, [`labelSize`, `size`]), g2 = Me(t2, [`activeName`, `value`]), _2 = V(g2.value ?? t2.defaultValue ?? (n2.default ? (_b = (_a = Xe(n2.default())[0]) == null ? void 0 : _a.props) == null ? void 0 : _b.name : null)), v2 = je(g2, _2), y2 = { id: 0 }, b2 = Z(() => {
    if (!(!t2.justifyContent || t2.type === `card`)) return { display: `flex`, justifyContent: t2.justifyContent };
  });
  Tt(v2, () => {
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
  let ne2 = V(null), O2 = 0, k2 = null;
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
  let ae2 = { value: [] }, j2 = V(`next`);
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
  function N2() {
    let { value: e2 } = c2;
    if (!e2) return;
    ue2 || (ue2 = false);
    let t3 = `transition-disabled`;
    e2.classList.add(t3), ee2(), e2.classList.remove(t3);
  }
  let de2 = V(null);
  function P2({ transitionDisabled: t3 }) {
    let n3 = s2.value;
    if (!n3) return;
    t3 && n3.classList.add(`transition-disabled`);
    let r2 = x2();
    r2 && de2.value && (de2.value.style.width = `${r2.offsetWidth}px`, de2.value.style.height = `${r2.offsetHeight}px`, de2.value.style.transform = `translateX(${r2.offsetLeft - e(getComputedStyle(n3).paddingLeft)}px)`, t3 && de2.value.offsetWidth), t3 && n3.classList.remove(`transition-disabled`);
  }
  Tt([v2], () => {
    t2.type === `segment` && et(() => {
      P2({ transitionDisabled: false });
    });
  }), ot(() => {
    t2.type === `segment` && P2({ transitionDisabled: true });
  });
  let F2 = 0;
  function fe2(e2) {
    var _a2, _b2;
    if (e2.contentRect.width === 0 && e2.contentRect.height === 0 || F2 === e2.contentRect.width) return;
    F2 = e2.contentRect.width;
    let { type: n3 } = t2;
    if ((n3 === `line` || n3 === `bar`) && (ue2 || ((_a2 = t2.justifyContent) == null ? void 0 : _a2.startsWith(`space`))) && N2(), n3 !== `segment`) {
      let { placement: e3 } = t2;
      ve2((e3 === `top` || e3 === `bottom` ? (_b2 = d2.value) == null ? void 0 : _b2.$el : f2.value) || null);
    }
  }
  let pe2 = ci(fe2, 64);
  Tt([() => t2.justifyContent, () => t2.size], () => {
    et(() => {
      let { type: e2 } = t2;
      (e2 === `line` || e2 === `bar`) && N2();
    });
  });
  let me2 = V(false);
  function he2(e2) {
    var _a2;
    let { target: n3, contentRect: { width: r2, height: i3 } } = e2, a3 = n3.parentElement.parentElement.offsetWidth, o3 = n3.parentElement.parentElement.offsetHeight, { placement: s3 } = t2;
    if (!me2.value) s3 === `top` || s3 === `bottom` ? a3 < r2 && (me2.value = true) : o3 < i3 && (me2.value = true);
    else {
      let { value: e3 } = u2;
      if (!e3) return;
      s3 === `top` || s3 === `bottom` ? a3 - r2 > e3.$el.offsetWidth && (me2.value = false) : o3 - i3 > e3.$el.offsetHeight && (me2.value = false);
    }
    ve2(((_a2 = d2.value) == null ? void 0 : _a2.$el) || null);
  }
  let ge2 = ci(he2, 64);
  function _e2() {
    let { onAdd: e2 } = t2;
    e2 && e2(), et(() => {
      let e3 = x2(), { value: t3 } = d2;
      !e3 || !t3 || t3.scrollTo({ left: e3.offsetLeft, top: 0, behavior: `smooth` });
    });
  }
  function ve2(e2) {
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
  let ye2 = ci((e2) => {
    ve2(e2.target);
  }, 64);
  _t(ri, { triggerRef: R(t2, `trigger`), tabStyleRef: R(t2, `tabStyle`), tabClassRef: R(t2, `tabClass`), addTabStyleRef: R(t2, `addTabStyle`), addTabClassRef: R(t2, `addTabClass`), paneClassRef: R(t2, `paneClass`), paneStyleRef: R(t2, `paneStyle`), mergedClsPrefixRef: i2, typeRef: R(t2, `type`), closableRef: R(t2, `closable`), valueRef: v2, tabChangeIdRef: y2, onBeforeLeaveRef: R(t2, `onBeforeLeave`), activateTab: M2, handleClose: le2, handleAdd: _e2 }), ze(() => {
    ee2(), te2();
  }), $e(() => {
    let { value: e2 } = l2;
    if (!e2) return;
    let { value: t3 } = i2, n3 = `${t3}-tabs-nav-scroll-wrapper--shadow-start`, r2 = `${t3}-tabs-nav-scroll-wrapper--shadow-end`;
    p2.value ? e2.classList.remove(n3) : e2.classList.add(n3), m2.value ? e2.classList.remove(r2) : e2.classList.add(r2);
  });
  let be2 = { syncBarPosition: () => {
    ee2();
  } }, I2 = () => {
    P2({ transitionDisabled: true });
  }, xe2 = Z(() => {
    let { value: e2 } = h2, { type: n3 } = t2, r2 = `${e2}${{ card: `Card`, bar: `Bar`, line: `Line`, segment: `Segment` }[n3]}`, { self: { barColor: i3, closeIconColor: a3, closeIconColorHover: s3, closeIconColorPressed: c3, tabColor: l3, tabBorderColor: u3, paneTextColor: d3, tabFontWeight: f3, tabBorderRadius: p3, tabFontWeightActive: m3, colorSegment: g3, fontWeightStrong: _3, tabColorSegment: v3, closeSize: y3, closeIconSize: b3, closeColorHover: x3, closeColorPressed: S3, closeBorderRadius: C3, [w(`panePadding`, e2)]: T3, [w(`tabPadding`, r2)]: E2, [w(`tabPaddingVertical`, r2)]: D2, [w(`tabGap`, r2)]: ee3, [w(`tabGap`, `${r2}Vertical`)]: te3, [w(`tabTextColor`, n3)]: ne3, [w(`tabTextColorActive`, n3)]: O3, [w(`tabTextColorHover`, n3)]: k3, [w(`tabTextColorDisabled`, n3)]: A3, [w(`tabFontSize`, e2)]: re3 }, common: { cubicBezierEaseInOut: ie3 } } = o2.value;
    return { "--n-bezier": ie3, "--n-color-segment": g3, "--n-bar-color": i3, "--n-tab-font-size": re3, "--n-tab-text-color": ne3, "--n-tab-text-color-active": O3, "--n-tab-text-color-disabled": A3, "--n-tab-text-color-hover": k3, "--n-pane-text-color": d3, "--n-tab-border-color": u3, "--n-tab-border-radius": p3, "--n-close-size": y3, "--n-close-icon-size": b3, "--n-close-color-hover": x3, "--n-close-color-pressed": S3, "--n-close-border-radius": C3, "--n-close-icon-color": a3, "--n-close-icon-color-hover": s3, "--n-close-icon-color-pressed": c3, "--n-tab-color": l3, "--n-tab-font-weight": f3, "--n-tab-font-weight-active": m3, "--n-tab-padding": E2, "--n-tab-padding-vertical": D2, "--n-tab-gap": ee3, "--n-tab-gap-vertical": te3, "--n-pane-padding-left": oe(T3, `left`), "--n-pane-padding-right": oe(T3, `right`), "--n-pane-padding-top": oe(T3, `top`), "--n-pane-padding-bottom": oe(T3, `bottom`), "--n-font-weight-strong": _3, "--n-tab-color-segment": v3 };
  }), Se2 = a2 ? D(`tabs`, Z(() => `${h2.value[0]}${t2.type[0]}`), xe2, t2) : void 0;
  return Object.assign({ mergedClsPrefix: i2, mergedValue: v2, renderedNames: /* @__PURE__ */ new Set(), segmentCapsuleElRef: de2, tabsPaneWrapperRef: ne2, tabsElRef: s2, barElRef: c2, addTabInstRef: u2, xScrollInstRef: d2, scrollWrapperElRef: l2, addTabFixed: me2, tabWrapperStyle: b2, handleNavResize: pe2, mergedSize: h2, handleScroll: ye2, handleTabsResize: ge2, cssVars: a2 ? void 0 : xe2, themeClass: Se2 == null ? void 0 : Se2.themeClass, animationDirection: j2, renderNameListRef: ae2, yScrollElRef: f2, handleSegmentResize: I2, onAnimationBeforeLeave: A2, onAnimationEnter: re2, onAnimationAfterEnter: ie2, onRender: Se2 == null ? void 0 : Se2.onRender }, be2);
}, render() {
  let { mergedClsPrefix: e2, type: t2, placement: n2, addTabFixed: r2, addable: i2, mergedSize: a2, renderNameListRef: o2, onRender: s2, paneWrapperClass: c2, paneWrapperStyle: l2, $slots: { default: u2, prefix: d2, suffix: f2 } } = this;
  s2 == null ? void 0 : s2();
  let p2 = u2 ? Xe(u2()).filter((e3) => e3.type.__TAB_PANE__ === true) : [], m2 = u2 ? Xe(u2()).filter((e3) => e3.type.__TAB__ === true) : [], h2 = !m2.length, g2 = t2 === `card`, _2 = t2 === `segment`, v2 = !g2 && !_2 && this.justifyContent;
  o2.value = [];
  let y2 = () => {
    let t3 = H(`div`, { style: this.tabWrapperStyle, class: `${e2}-tabs-wrapper` }, v2 ? null : H(`div`, { class: `${e2}-tabs-scroll-padding`, style: n2 === `top` || n2 === `bottom` ? { width: `${this.tabsPadding}px` } : { height: `${this.tabsPadding}px` } }), h2 ? p2.map((e3, t4) => (o2.value.push(e3.props.name), pi(H(oi, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t4 !== 0 && (!v2 || v2 === `center` || v2 === `start` || v2 === `end`) }), e3.children ? { default: e3.children.tab } : void 0)))) : m2.map((e3, t4) => (o2.value.push(e3.props.name), pi(t4 !== 0 && !v2 ? fi(e3) : e3))), !r2 && i2 && g2 ? di(i2, (h2 ? p2.length : m2.length) !== 0) : null, v2 ? null : H(`div`, { class: `${e2}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } }));
    return H(`div`, { ref: `tabsElRef`, class: `${e2}-tabs-nav-scroll-content` }, g2 && i2 ? H(Re, { onResize: this.handleTabsResize }, { default: () => t3 }) : t3, g2 ? H(`div`, { class: `${e2}-tabs-pad` }) : null, g2 ? null : H(`div`, { ref: `barElRef`, class: `${e2}-tabs-bar` }));
  }, b2 = _2 ? `top` : n2;
  return H(`div`, { class: [`${e2}-tabs`, this.themeClass, `${e2}-tabs--${t2}-type`, `${e2}-tabs--${a2}-size`, v2 && `${e2}-tabs--flex`, `${e2}-tabs--${b2}`], style: this.cssVars }, H(`div`, { class: [`${e2}-tabs-nav--${t2}-type`, `${e2}-tabs-nav--${b2}`, `${e2}-tabs-nav`] }, le(d2, (t3) => t3 && H(`div`, { class: `${e2}-tabs-nav__prefix` }, t3)), _2 ? H(Re, { onResize: this.handleSegmentResize }, { default: () => H(`div`, { class: `${e2}-tabs-rail`, ref: `tabsElRef` }, H(`div`, { class: `${e2}-tabs-capsule`, ref: `segmentCapsuleElRef` }, H(`div`, { class: `${e2}-tabs-wrapper` }, H(`div`, { class: `${e2}-tabs-tab` }))), h2 ? p2.map((e3, t3) => (o2.value.push(e3.props.name), H(oi, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t3 !== 0 }), e3.children ? { default: e3.children.tab } : void 0))) : m2.map((e3, t3) => (o2.value.push(e3.props.name), t3 === 0 ? e3 : fi(e3)))) }) : H(Re, { onResize: this.handleNavResize }, { default: () => H(`div`, { class: `${e2}-tabs-nav-scroll-wrapper`, ref: `scrollWrapperElRef` }, [`top`, `bottom`].includes(b2) ? H(Nn, { ref: `xScrollInstRef`, onScroll: this.handleScroll }, { default: y2 }) : H(`div`, { class: `${e2}-tabs-nav-y-scroll`, onScroll: this.handleScroll, ref: `yScrollElRef` }, y2())) }), r2 && i2 && g2 ? di(i2, true) : null, le(f2, (t3) => t3 && H(`div`, { class: `${e2}-tabs-nav__suffix` }, t3))), h2 && (this.animated && (b2 === `top` || b2 === `bottom`) ? H(`div`, { ref: `tabsPaneWrapperRef`, style: l2, class: [`${e2}-tabs-pane-wrapper`, c2] }, ui(p2, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : ui(p2, this.mergedValue, this.renderedNames)));
} });
function ui(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = [];
  return e2.forEach((e3) => {
    let { name: r3, displayDirective: i3, "display-directive": a3 } = e3.props, o3 = (e4) => i3 === e4 || a3 === e4, c2 = t2 === r3;
    if (e3.key !== void 0 && (e3.key = r3), c2 || o3(`show`) || o3(`show:lazy`) && n2.has(r3)) {
      n2.has(r3) || n2.add(r3);
      let t3 = !o3(`if`);
      s2.push(t3 ? rt(e3, [[ct, c2]]) : e3);
    }
  }), o2 ? H(dt, { name: `${o2}-transition`, onBeforeLeave: r2, onEnter: i2, onAfterEnter: a2 }, { default: () => s2 }) : s2;
}
function di(e2, t2) {
  return H(oi, { ref: `addTabInstRef`, key: `__addable`, name: `__addable`, internalCreatedByPane: true, internalAddable: true, internalLeftPadded: t2, disabled: typeof e2 == `object` && e2.disabled });
}
function fi(e2) {
  let t2 = yt(e2);
  return t2.props ? t2.props.internalLeftPadded = true : t2.props = { internalLeftPadded: true }, t2;
}
function pi(e2) {
  return Array.isArray(e2.dynamicProps) ? e2.dynamicProps.includes(`internalLeftPadded`) || e2.dynamicProps.push(`internalLeftPadded`) : e2.dynamicProps = [`internalLeftPadded`], e2;
}
var mi = [`title`, `onClick`], hi = 20, gi = St(K({ __name: `SketchToolbar`, props: { sketchName: {}, draftCount: {}, routeCount: {} }, emits: [`save`, `open`, `create`, `edit-meta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Wt(), r2 = t2, i2 = [{ title: n2(`sketchEdit.save`), icon: Sn, iconSize: hi, callback: () => r2(`save`) }, { title: n2(`sketchEdit.open`), icon: wn, iconSize: hi, callback: () => r2(`open`) }, { title: n2(`sketchEdit.newComponent`), icon: P, iconSize: hi, callback: () => r2(`create`) }, { title: n2(`sketchEdit.editMetadata`), icon: Ot, iconSize: hi, callback: () => r2(`edit-meta`) }];
  return (t3, r3) => (z(), q(Y(Tr), { justify: `space-between`, align: `center` }, { default: B(() => [J(Y(zt), { strong: `` }, { default: B(() => [X(U(e2.sketchName || Y(n2)(`sketchEdit.noSketchSelectedToolbar`)), 1)]), _: 1 }), J(Y(Tr), { align: `center` }, { default: B(() => [e2.sketchName === void 0 ? Ct(``, true) : (z(), q(Y(rn), { key: 0, type: `info`, size: `small` }, { default: B(() => [X(U(e2.draftCount || 0) + ` ` + U(Y(n2)(`sketchEdit.drafts`)) + `, ` + U(e2.routeCount || 0) + ` ` + U(Y(n2)(`sketchEdit.routes`)), 1)]), _: 1 })), (z(), G(vt, null, at(i2, (e3, t4) => W(`div`, { key: t4, title: e3.title, class: `tool-tip-item`, onClick: e3.callback }, [J(Y($), { size: e3.iconSize }, { default: B(() => [(z(), q(st(e3.icon)))]), _: 2 }, 1032, [`size`])], 8, mi)), 64))]), _: 1 })]), _: 1 }));
} }), [[`__scopeId`, `data-v-5b012717`]]), _i = { key: 0, class: `empty-state` }, vi = St(K({ __name: `ComponentList`, props: { components: {}, selectedId: {} }, emits: [`select`, `delete`, `create`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Wt(), r2 = t2;
  return (t3, i2) => (z(), G(vt, null, [J(Y(nn), { hoverable: `` }, { default: B(() => [(z(true), G(vt, null, at(e2.components, (t4) => (z(), q(Y(an), { key: t4.value, class: xt({ "selected-component": e2.selectedId === t4.value }), onClick: () => r2(`select`, t4.value, t4.type) }, { prefix: B(() => [J(Y($), { color: t4.type === `draft` ? `#007bff` : `#28a745` }, { default: B(() => [(z(), q(st(t4.type === `draft` ? Y(Te) : Y(fe))))]), _: 2 }, 1032, [`color`])]), suffix: B(() => [J(Y(ei), { onPositiveClick: (e3) => r2(`delete`, t4.value, t4.type) }, { trigger: B(() => [J(Y(Q), { quaternary: ``, circle: ``, size: `small` }, { default: B(() => [J(Y($), null, { default: B(() => [J(Y(N))]), _: 1 })]), _: 1 })]), default: B(() => [X(` ` + U(Y(n2)(`sketchEdit.deleteComponent`)), 1)]), _: 1 }, 8, [`onPositiveClick`])]), default: B(() => [X(` ` + U(t4.label) + ` `, 1)]), _: 2 }, 1032, [`class`, `onClick`]))), 128))]), _: 1 }), e2.components.length === 0 ? (z(), G(`div`, _i, [J(Y(Jt), { description: Y(n2)(`sketchEdit.noComponentsYet`) }, { extra: B(() => [J(Y(Q), { size: `small`, onClick: i2[0] || (i2[0] = (e3) => r2(`create`)) }, { default: B(() => [X(U(Y(n2)(`sketchEdit.createComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`])])) : Ct(``, true)], 64));
} }), [[`__scopeId`, `data-v-3addb8a0`]]), yi = { key: 0, class: `properties-panel` }, bi = { key: 1, style: { height: `100%`, width: `100%`, display: `flex`, "justify-content": `center`, "align-items": `center` } }, xi = St(K({ __name: `PropertiesPanel`, props: { component: {}, type: {} }, emits: [`updateProperties`, `updateMeta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Wt(), r2 = t2;
  return (t3, i2) => e2.component ? (z(), G(`div`, yi, [J(Y(li), { type: `line`, animated: ``, "default-value": `properties` }, { default: B(() => [J(Y(ai), { name: `properties`, tab: Y(n2)(`sketchEdit.properties`) }, { default: B(() => [J(Y(ve), null, { default: B(() => [J(Y(I), { label: Y(n2)(`sketchEdit.visible`) }, { default: B(() => [J(Y(Yt), { value: e2.component.properties.visible !== false, "onUpdate:value": i2[0] || (i2[0] = (e3) => r2(`updateProperties`, { visible: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), e2.type === `draft` ? (z(), G(vt, { key: 0 }, [J(Y(I), { label: Y(n2)(`sketchEdit.fillColor`) }, { default: B(() => [J(Y(Sr), { value: e2.component.properties.fillColor || `#007bff`, "show-alpha": false, "onUpdate:value": i2[1] || (i2[1] = (e3) => r2(`updateProperties`, { fillColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: Y(n2)(`sketchEdit.strokeColor`) }, { default: B(() => [J(Y(Sr), { value: e2.component.properties.strokeColor || `#0056b3`, "show-alpha": false, "onUpdate:value": i2[2] || (i2[2] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: Y(n2)(`sketchEdit.strokeThickness`) }, { default: B(() => [J(Y(Vr), { value: e2.component.properties.strokeThickness || 2, min: 1, max: 10, "onUpdate:value": i2[3] || (i2[3] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : Ct(``, true), e2.type === `route` ? (z(), G(vt, { key: 1 }, [J(Y(I), { label: Y(n2)(`sketchEdit.strokeColor`) }, { default: B(() => [J(Y(Sr), { value: e2.component.properties.strokeColor || `#28a745`, "show-alpha": false, "onUpdate:value": i2[4] || (i2[4] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: Y(n2)(`sketchEdit.strokeThickness`) }, { default: B(() => [J(Y(Vr), { value: e2.component.properties.strokeThickness || 3, min: 1, max: 10, "onUpdate:value": i2[5] || (i2[5] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : Ct(``, true)]), _: 1 })]), _: 1 }, 8, [`tab`]), J(Y(ai), { name: `metadata`, tab: Y(n2)(`sketchEdit.metadata`) }, { default: B(() => [J(Y(ve), null, { default: B(() => [J(Y(I), { label: Y(n2)(`sketchEdit.name`) }, { default: B(() => [J(Y(L), { value: e2.component.meta.name, "onUpdate:value": i2[6] || (i2[6] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: t4, description: ((_a = e2.component) == null ? void 0 : _a.meta.description) ?? ``, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: Y(n2)(`sketchEdit.description`) }, { default: B(() => [J(Ce, { "model-value": e2.component.meta.description, "min-height": `80px`, "max-height": `200px`, "onUpdate:modelValue": i2[7] || (i2[7] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: ((_a = e2.component) == null ? void 0 : _a.meta.name) ?? ``, description: t4, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`model-value`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: Y(n2)(`sketchEdit.tags`) }, { default: B(() => [J(Y(wr), { value: e2.component.meta.tags || [], placeholder: Y(n2)(`sketchEdit.addTagPlaceholder`), "onUpdate:value": i2[8] || (i2[8] = (t4) => {
    var _a, _b;
    return r2(`updateMeta`, { name: ((_a = e2.component) == null ? void 0 : _a.meta.name) ?? ``, description: ((_b = e2.component) == null ? void 0 : _b.meta.description) ?? ``, tags: t4 });
  }) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: `UUID` }, { default: B(() => [J(Y(L), { value: e2.component.id, style: { "font-family": `monospace` }, readonly: `` }, null, 8, [`value`])]), _: 1 })]), _: 1 })]), _: 1 }, 8, [`tab`])]), _: 1 })])) : (z(), G(`div`, bi, [J(Y(Jt), { description: Y(n2)(`sketchEdit.selectComponentToEdit`) }, null, 8, [`description`])]));
} }), [[`__scopeId`, `data-v-38c2b865`]]), Si = `https://api.maptiler.com/maps/basic-v2/style.json?key=dCeXFrS9lgSF8hm5C6nm`;
function Ci() {
  let e2 = V(7), t2 = lt(null), n2 = V([0, 0]);
  function r2(e3) {
    t2.value = e3.map;
  }
  function i2(e3) {
    n2.value = e3, t2.value && t2.value.setCenter(e3);
  }
  function a2(n3) {
    e2.value = n3, t2.value && t2.value.setZoom(n3);
  }
  return { zoom: e2, map: t2, center: n2, styleUrl: Si, initMap: r2, setCenter: i2, setZoom: a2 };
}
function wi(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `draft` });
  }), t2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `route` });
  }), n2;
}
function Ti() {
  return { type: `Polygon`, coordinates: [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]] };
}
function Ei() {
  return { fillColor: `#007bff`, strokeColor: `#0056b3`, strokeThickness: 2 };
}
function Di() {
  return { strokeColor: `#28a745`, strokeThickness: 3 };
}
var Oi = { style: { display: `flex`, "flex-direction": `row`, gap: `8px` } }, ki = { style: { display: `flex`, gap: `8px`, "margin-bottom": `8px` } }, Ai = { key: 0, class: `sketch-edit-container desktop-layout` }, ji = { class: `grid-layout` }, Mi = { class: `meta-info-section` }, Ni = { class: `metadata-item` }, Pi = { class: `metadata-item` }, Fi = { key: 1, class: `sketch-edit-container mobile-layout` }, Ii = { class: `mobile-header` }, Li = { class: `mobile-content` }, Ri = { key: 0, class: `mobile-tab-content` }, zi = { key: 1, class: `mobile-tab-content mobile-map-content` }, Bi = { key: 2, class: `mobile-tab-content` }, Vi = { class: `metadata-item` }, Hi = { class: `metadata-item` }, Ui = { class: `mobile-tab-bar` }, Wi = St(K({ __name: `SketchEdit`, props: { liteMode: { type: Boolean }, forceHighDpi: { type: Boolean }, mapType: {}, sketchId: {} }, setup(e2) {
  let t2 = e2, n2 = V(wt(`geolocation`).getLastKnownLocation().toLngLatLike()), { t: r2 } = Wt(), i2 = pe(), a2 = Ht(), { zoom: o2, styleUrl: s2, initMap: c2 } = Ci(), { width: l2, height: u2 } = Qt(), d2 = Z(() => l2.value < 768), f2 = V(`components`), p2 = V(false), m2 = V(null), h2 = V(null), g2 = V(false), _2 = V(``), v2 = V(`draft`), y2 = V(false), b2 = V({ name: ``, description: ``, tags: [], created_by: ``, modified_by: `` }), x2 = V(``), S2 = Z(() => a2.currentSketch), C2 = Z(() => a2.currentDrafts), w2 = Z(() => {
    var _a;
    return ((_a = S2.value) == null ? void 0 : _a.routes.routes) || [];
  }), T2 = Z(() => !!S2.value), E2 = Z(() => !m2.value || !h2.value ? null : h2.value === `draft` ? a2.getDraftById(m2.value) : a2.getRouteById(m2.value)), D2 = hn(() => i2.success(r2(`sketchEdit.propertiesUpdated`)), 1e3), ee2 = Z(() => wi(C2.value, w2.value));
  async function te2() {
    if (S2.value) try {
      await a2.updateSketch(S2.value.id, { name: S2.value.meta.name, description: S2.value.meta.description, tags: S2.value.meta.tags }), i2.success(r2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  async function ne2() {
    if (!(!_2.value.trim() || !S2.value)) try {
      v2.value === `draft` ? (m2.value = (await a2.addDraft(Ti(), Ei(), { name: _2.value })).id, h2.value = `draft`) : (m2.value = (await a2.addRoute(_2.value, Di())).id, h2.value = `route`), g2.value = false, _2.value = ``, i2.success(r2(`sketchEdit.componentCreated`));
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
  ot(() => {
    t2.sketchId && a2.setCurrentSketchId(t2.sketchId);
  }), Tt(() => a2.currentSketchId, (e3) => {
    e3 && (m2.value = null, h2.value = null);
  });
  let M2 = (e3) => new Date(e3).toLocaleString();
  return (e3, t3) => {
    var _a;
    return z(), G(vt, null, [J(ye, { active: p2.value, "onUpdate:active": t3[0] || (t3[0] = (e4) => p2.value = e4), list: Y(a2).sketches.map((e4) => ({ id: e4.id, name: e4.meta.name, tags: e4.meta.tags })), "active-id": Y(a2).currentSketchId || ``, placement: `right`, onRemove: t3[1] || (t3[1] = (e4) => Y(a2).deleteSketch(e4)), onSelect: t3[2] || (t3[2] = (e4) => Y(a2).setCurrentSketchId(e4)) }, null, 8, [`active`, `list`, `active-id`]), J(Y(Ut), { show: g2.value, "onUpdate:show": t3[6] || (t3[6] = (e4) => g2.value = e4), preset: `dialog`, title: Y(r2)(`sketchEdit.createNewComponent`) }, { action: B(() => [J(Y(Q), { onClick: t3[5] || (t3[5] = (e4) => g2.value = false) }, { default: B(() => [X(U(Y(r2)(`sketchEdit.cancel`)), 1)]), _: 1 }), J(Y(Q), { type: `primary`, disabled: !_2.value.trim(), onClick: ne2 }, { default: B(() => [X(U(Y(r2)(`sketchEdit.create`)), 1)]), _: 1 }, 8, [`disabled`])]), default: B(() => [J(Y(ve), null, { default: B(() => [W(`div`, Oi, [J(Y(I), { label: Y(r2)(`sketchEdit.name`), style: { "flex-grow": `1` } }, { default: B(() => [J(Y(L), { value: _2.value, "onUpdate:value": t3[3] || (t3[3] = (e4) => _2.value = e4), placeholder: Y(r2)(`sketchEdit.enterComponentName`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: Y(r2)(`sketchEdit.type`) }, { default: B(() => [J(Y(qt), { value: v2.value, "onUpdate:value": t3[4] || (t3[4] = (e4) => v2.value = e4), "consistent-menu-width": false, options: [{ label: Y(r2)(`sketchEdit.draftShape`), value: `draft` }, { label: Y(r2)(`sketchEdit.routePath`), value: `route` }] }, null, 8, [`value`, `options`])]), _: 1 }, 8, [`label`])])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), J(Y(Ut), { show: y2.value, "onUpdate:show": t3[11] || (t3[11] = (e4) => y2.value = e4), preset: `dialog`, title: Y(r2)(`sketchEdit.editMetadata`), style: { "max-width": `600px` } }, { action: B(() => [J(Y(Q), { onClick: t3[10] || (t3[10] = (e4) => y2.value = false) }, { default: B(() => [X(U(Y(r2)(`sketchEdit.cancel`)), 1)]), _: 1 }), J(Y(Q), { type: `primary`, disabled: !b2.value.name.trim(), onClick: oe2 }, { default: B(() => [X(U(Y(r2)(`sketchEdit.save`)), 1)]), _: 1 }, 8, [`disabled`])]), default: B(() => [J(Y(ve), null, { default: B(() => [J(Y(I), { label: Y(r2)(`sketchEdit.name`) }, { default: B(() => [J(Y(L), { value: b2.value.name, "onUpdate:value": t3[7] || (t3[7] = (e4) => b2.value.name = e4), placeholder: Y(r2)(`sketchEdit.sketchNamePlaceholder`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: Y(r2)(`sketchEdit.description`) }, { default: B(() => [J(Ce, { modelValue: b2.value.description, "onUpdate:modelValue": t3[8] || (t3[8] = (e4) => b2.value.description = e4), placeholder: Y(r2)(`sketchEdit.sketchDescriptionPlaceholder`), "min-height": `120px`, "max-height": `300px` }, null, 8, [`modelValue`, `placeholder`])]), _: 1 }, 8, [`label`]), J(Y(I), { label: Y(r2)(`sketchEdit.tags`) }, { default: B(() => [W(`div`, ki, [J(Y(L), { value: x2.value, "onUpdate:value": t3[9] || (t3[9] = (e4) => x2.value = e4), placeholder: Y(r2)(`sketchEdit.addTagPlaceholder`), onKeydown: Qe(pt(ie2, [`prevent`]), [`enter`]) }, null, 8, [`value`, `placeholder`, `onKeydown`]), J(Y(Q), { onClick: ie2 }, { default: B(() => [X(U(Y(r2)(`sketchEdit.add`)), 1)]), _: 1 })]), (z(true), G(vt, null, at(b2.value.tags, (e4) => (z(), q(Y(rn), { key: e4, closable: ``, style: { "margin-right": `8px`, "margin-bottom": `8px` }, onClose: (t4) => ae2(e4) }, { default: B(() => [X(U(e4), 1)]), _: 2 }, 1032, [`onClose`]))), 128)), b2.value.tags.length === 0 ? (z(), q(Y(Jt), { key: 0, description: Y(r2)(`sketchEdit.noTags`), size: `small` }, null, 8, [`description`])) : Ct(``, true)]), _: 1 }, 8, [`label`])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), d2.value ? (z(), G(`div`, Fi, [W(`div`, Ii, [J(gi, { "sketch-name": (_a = S2.value) == null ? void 0 : _a.meta.name, "draft-count": C2.value.length, "route-count": w2.value.length, onSave: te2, onOpen: t3[18] || (t3[18] = (e4) => p2.value = true), onCreate: t3[19] || (t3[19] = (e4) => g2.value = true), onEditMeta: re2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])]), W(`div`, Li, [J(Y(Kr), null, { default: B(() => [f2.value === `components` ? (z(), G(`div`, Ri, [T2.value ? (z(), q(Y(j), { key: 0, title: Y(r2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;`, style: { height: `100%` } }, { "header-extra": B(() => [J(Y(Q), { quaternary: ``, circle: ``, size: `small`, onClick: t3[22] || (t3[22] = (e4) => g2.value = true) }, { icon: B(() => [J(Y(P))]), _: 1 })]), default: B(() => [J(vi, { components: ee2.value, "selected-id": m2.value, onSelect: t3[20] || (t3[20] = (e4, t4) => {
      m2.value = e4, h2.value = t4, f2.value = `properties`;
    }), onDelete: O2, onCreate: t3[21] || (t3[21] = (e4) => g2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])) : (z(), q(Y(Jt), { key: 1, description: Y(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(Dt))]), _: 1 })]), extra: B(() => [J(Y(Q), { size: `small`, onClick: t3[23] || (t3[23] = (e4) => p2.value = true) }, { default: B(() => [X(U(Y(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : Ct(``, true), f2.value === `map` ? (z(), G(`div`, zi, [T2.value ? (z(), q(Y(j), { key: 0, class: `map-container`, "content-style": `padding: 0;` }, { default: B(() => [J(Y(me), { "map-style": Y(s2), center: n2.value, zoom: Y(o2), height: `100%`, "onMap:load": Y(c2) }, { default: B(() => [J(Y(be), { position: `top-left` }), J(Y(_e), { position: `bottom-left` }), J(Y(Se), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `center`, `zoom`, `onMap:load`])]), _: 1 })) : (z(), q(Y(Jt), { key: 1, description: Y(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(Dt))]), _: 1 })]), extra: B(() => [J(Y(Q), { size: `small`, onClick: t3[24] || (t3[24] = (e4) => p2.value = true) }, { default: B(() => [X(U(Y(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : Ct(``, true), f2.value === `properties` ? (z(), G(`div`, Bi, [E2.value ? (z(), q(Y(j), { key: 0, class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: B(() => [J(Y(zt), { depth: `3`, class: `metadata` }, { default: B(() => [W(`div`, Vi, U(Y(r2)(`sketchEdit.createdTimeBy`, { user: E2.value.meta.created_by, time: M2(E2.value.meta.creation_timestamp) })), 1), W(`div`, Hi, U(Y(r2)(`sketchEdit.modifiedTimeBy`, { user: E2.value.meta.modified_by, time: M2(E2.value.meta.modification_timestamp) })), 1)]), _: 1 })]), default: B(() => [J(xi, { component: E2.value, type: h2.value, onUpdateProperties: k2, onUpdateMeta: A2 }, null, 8, [`component`, `type`])]), _: 1 })) : (z(), q(Y(Jt), { key: 1, description: Y(r2)(`sketchEdit.noComponentSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(At))]), _: 1 })]), extra: B(() => [J(Y(Q), { size: `small`, onClick: t3[25] || (t3[25] = (e4) => f2.value = `components`) }, { default: B(() => [X(U(Y(r2)(`sketchEdit.selectComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : Ct(``, true)]), _: 1 })]), T2.value ? (z(), q(Y(Jr), { key: 0, class: `mobile-footer` }, { default: B(() => [W(`div`, Ui, [J(Y(Q), { type: f2.value === `components` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[26] || (t3[26] = (e4) => f2.value = `components`) }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(En))]), _: 1 })]), default: B(() => [X(` ` + U(Y(r2)(`sketchEdit.components`)), 1)]), _: 1 }, 8, [`type`]), J(Y(Q), { type: f2.value === `map` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[27] || (t3[27] = (e4) => f2.value = `map`) }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(Dt))]), _: 1 })]), default: B(() => [X(` ` + U(Y(r2)(`sketchEdit.map`)), 1)]), _: 1 }, 8, [`type`]), J(Y(Q), { type: f2.value === `properties` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[28] || (t3[28] = (e4) => f2.value = `properties`) }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(Ot))]), _: 1 })]), default: B(() => [X(` ` + U(Y(r2)(`sketchEdit.properties`)), 1)]), _: 1 }, 8, [`type`])])]), _: 1 })) : Ct(``, true)])) : (z(), G(`div`, Ai, [W(`div`, ji, [W(`div`, Mi, [J(Y(j), null, { default: B(() => {
      var _a2;
      return [J(gi, { "sketch-name": (_a2 = S2.value) == null ? void 0 : _a2.meta.name, "draft-count": C2.value.length, "route-count": w2.value.length, onSave: te2, onOpen: t3[12] || (t3[12] = (e4) => p2.value = true), onCreate: t3[13] || (t3[13] = (e4) => g2.value = true), onEditMeta: re2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])];
    }), _: 1 })]), J(Y(ni), { direction: `horizontal`, max: 0.8, min: 0.2, "default-size": 0.5, class: `bottom-row-split` }, { 1: B(() => [J(Y(ni), { style: { height: `100%` }, direction: `vertical` }, { 1: B(() => [J(Y(j), { style: { height: `100%` }, title: Y(r2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;` }, { "header-extra": B(() => [J(Y(Q), { quaternary: ``, circle: ``, onClick: t3[16] || (t3[16] = (e4) => g2.value = true) }, { icon: B(() => [J(Y(P))]), _: 1 })]), default: B(() => [J(vi, { components: ee2.value, "selected-id": m2.value, onSelect: t3[14] || (t3[14] = (e4, t4) => {
      m2.value = e4, h2.value = t4;
    }), onDelete: O2, onCreate: t3[15] || (t3[15] = (e4) => g2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])]), 2: B(() => [J(Y(j), { class: `map-container`, "content-style": `padding: 0;` }, { default: B(() => [J(Y(me), { "map-style": Y(s2), center: n2.value, zoom: Y(o2), height: `100%`, "onMap:load": Y(c2) }, { default: B(() => [J(Y(be), { position: `top-left` }), J(Y(_e), { position: `bottom-left` }), J(Y(Se), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `center`, `zoom`, `onMap:load`])]), _: 1 })]), _: 1 }), T2.value ? Ct(``, true) : (z(), q(Y(Jt), { key: 0, description: Y(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(Dt))]), _: 1 })]), extra: B(() => [J(Y(Q), { size: `small`, onClick: t3[17] || (t3[17] = (e4) => p2.value = true) }, { default: B(() => [X(U(Y(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))]), 2: B(() => [J(Y(j), { class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: B(() => [E2.value ? (z(), q(Y(zt), { key: 0, depth: `3`, class: `metadata` }, { default: B(() => [W(`div`, Ni, U(Y(r2)(`sketchEdit.createdTimeBy`, { user: E2.value.meta.created_by, time: M2(E2.value.meta.creation_timestamp) })), 1), W(`div`, Pi, U(Y(r2)(`sketchEdit.modifiedTimeBy`, { user: E2.value.meta.modified_by, time: M2(E2.value.meta.modification_timestamp) })), 1)]), _: 1 })) : Ct(``, true)]), default: B(() => [J(xi, { component: E2.value, type: h2.value, onUpdateProperties: k2, onUpdateMeta: A2 }, null, 8, [`component`, `type`])]), _: 1 })]), _: 1 })])]))], 64);
  };
} }), [[`__scopeId`, `data-v-3e525b9b`]]), Gi = { class: `sketch-centre-view` }, Ki = { class: `header` }, qi = { class: `title` }, Ji = { class: `card-header` }, Yi = { key: 0, class: `tags` }, Xi = { class: `card-content` }, Zi = { class: `meta-info` }, Qi = { class: `meta-item` }, $i = { class: `meta-item` }, ea = { class: `meta-item` }, ta = { key: 0, class: `empty-state` }, na = St(K({ __name: `SketchCentreView`, setup(e2) {
  ft((e3) => ({ bb05dda0: Y(x2).bodyColor }));
  let { t: t2 } = Wt(), n2 = we(), r2 = pe(), i2 = ln(), a2 = Ht(), o2 = Z(() => a2.sketches), s2 = Z({ get: () => a2.currentSketchId, set: (e3) => a2.setCurrentSketchId(e3) }), c2 = (e3) => {
    let t3 = s2.value === e3;
    return { borderColor: t3 ? i2.value.primaryColor : ``, borderWidth: t3 ? `2px` : `1px`, padding: t3 ? `0px` : `1px`, zIndex: t3 ? 0 : 1 };
  }, l2 = V(false), u2 = V(false), d2 = V(``), f2 = async () => {
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
  }, { width: y2 } = Qt(), b2 = Z(() => Math.floor(y2.value / 360));
  ot(() => {
    f2();
  });
  let x2 = ln();
  return (e3, n3) => (z(), G(`div`, Gi, [W(`div`, Ki, [W(`h1`, qi, U(Y(t2)(`sketchCentreView.title`)), 1), J(Y(Q), { type: `primary`, secondary: ``, circle: ``, onClick: n3[0] || (n3[0] = (e4) => l2.value = true) }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(P))]), _: 1 })]), _: 1 })]), J(Y(Mr), { cols: b2.value, "x-gap": 16, "y-gap": 16, responsive: `screen` }, { default: B(() => [(z(true), G(vt, null, at(o2.value, (e4) => (z(), q(Y(Or), { key: e4.id }, { default: B(() => [J(Y(j), { class: xt([`sketch-card`, { selected: s2.value === e4.id }]), style: gt(c2(e4.id)), hoverable: ``, bordered: ``, clickable: ``, onClick: (t3) => g2(e4.id) }, { header: B(() => [W(`div`, Ji, [J(Y(sn), null, { default: B(() => [J(Y(zt), { class: `sketch-name` }, { default: B(() => [X(U(e4.meta.name), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), e4.meta.tags.length > 0 ? (z(), G(`div`, Yi, [(z(true), G(vt, null, at(e4.meta.tags.slice(0, 3), (e5) => (z(), q(Y(rn), { key: e5, size: `small`, round: ``, type: `info` }, { default: B(() => [X(U(e5.toLocaleUpperCase()), 1)]), _: 2 }, 1024))), 128)), e4.meta.tags.length > 3 ? (z(), q(Y(rn), { key: 0, size: `small`, round: ``, type: `info` }, { default: B(() => [X(` +` + U(e4.meta.tags.length - 3), 1)]), _: 2 }, 1024)) : Ct(``, true)])) : Ct(``, true)])]), "header-extra": B(() => [J(Y(cn), null, { default: B(() => [J(Y(Q), { quaternary: ``, circle: ``, size: `small`, onClick: pt((t3) => _2(e4.id), [`stop`]) }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(de))]), _: 1 })]), _: 1 }, 8, [`onClick`]), J(Y(Q), { quaternary: ``, circle: ``, size: `small`, onClick: pt((t3) => v2(e4.id), [`stop`]) }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(N))]), _: 1 })]), _: 1 }, 8, [`onClick`])]), _: 2 }, 1024)]), default: B(() => [W(`div`, Xi, [J(Y(zt), { depth: `3`, class: `description` }, { default: B(() => [X(U(e4.meta.description || Y(t2)(`sketchCentreView.noDescription`)), 1)]), _: 2 }, 1024), W(`div`, Zi, [W(`div`, Qi, [J(Y($), { size: 16 }, { default: B(() => [J(Y(bn))]), _: 1 }), J(Y(zt), { depth: `3`, style: { "font-size": `12px` } }, { default: B(() => [X(U(p2(e4.meta.creation_timestamp)), 1)]), _: 2 }, 1024)]), W(`div`, $i, [J(Y($), { size: 16 }, { default: B(() => [J(Y(fe))]), _: 1 }), J(Y(zt), { depth: `3`, style: { "font-size": `12px` } }, { default: B(() => [X(U(m2(e4)) + ` ` + U(Y(t2)(`sketchCentreView.routes`)), 1)]), _: 2 }, 1024)]), W(`div`, ea, [J(Y($), { size: 16 }, { default: B(() => [J(Y(Et))]), _: 1 }), J(Y(zt), { depth: `3`, style: { "font-size": `12px` } }, { default: B(() => [X(U(h2(e4)) + ` ` + U(Y(t2)(`sketchCentreView.drafts`)), 1)]), _: 2 }, 1024)])])])]), _: 2 }, 1032, [`class`, `style`, `onClick`])]), _: 2 }, 1024))), 128))]), _: 1 }, 8, [`cols`]), o2.value.length === 0 ? (z(), G(`div`, ta, [J(Y($), { size: `48`, depth: `3` }, { default: B(() => [J(Y(Mt))]), _: 1 }), J(Y(zt), { depth: `3` }, { default: B(() => [X(U(Y(t2)(`sketchCentreView.emptyState`)), 1)]), _: 1 }), J(Y(Q), { type: `primary`, onClick: n3[1] || (n3[1] = (e4) => l2.value = true) }, { icon: B(() => [J(Y($), null, { default: B(() => [J(Y(P))]), _: 1 })]), default: B(() => [X(` ` + U(Y(t2)(`sketchCentreView.createFirstSketch`)), 1)]), _: 1 })])) : Ct(``, true), J(xe, { show: l2.value, "onUpdate:show": n3[2] || (n3[2] = (e4) => l2.value = e4), onCreated: n3[3] || (n3[3] = (e4) => Y(r2).success(Y(t2)(`sketchCentreView.sketchCreated`))) }, null, 8, [`show`]), J(Y(he), { show: u2.value, "onUpdate:show": n3[4] || (n3[4] = (e4) => u2.value = e4), width: Y(y2) > 1e3 ? 800 : Math.min(Y(y2) - 32, 600), placement: `right`, "display-directive": `show`, height: `100%` }, { default: B(() => [J(Y(ge), { title: Y(t2)(`sketchCentreView.editSketch`), closable: ``, "body-content-style": { padding: 0, height: `100%` } }, { default: B(() => [d2.value ? (z(), q(Wi, { key: 0, "sketch-id": d2.value }, null, 8, [`sketch-id`])) : Ct(``, true)]), _: 1 }, 8, [`title`])]), _: 1 }, 8, [`show`, `width`])]));
} }), [[`__scopeId`, `data-v-acdf12d5`]]);
export {
  na as default
};
