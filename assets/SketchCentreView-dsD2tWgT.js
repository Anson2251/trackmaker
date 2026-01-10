import { $ as e, A as t, B as n, D as r, E as i, F as a, G as o, H as s, I as c, J as l, K as u, L as d, M as f, Q as p, S as m, U as h, V as g, W as _, X as v, Y as y, Z as b, at as x, c as S, ct as C, dt as w, et as T, f as E, g as D, h as ee, j as te, k as ne, lt as O, m as re, nt as ie, ot as k, p as ae, q as oe, rt as A, t as se, tt as ce, u as le, ut as ue, v as de, w as j, z as fe } from "./Card-D_DaNXyK.js";
import { C as pe, S as M, _ as N, a as me, b as he, d as ge, f as _e, h as P, i as ve, l as ye, m as be, n as xe, p as Se, t as Ce, x as we, y as Te } from "./SelectorDrawer-BD1VErIm.js";
import { A as Ee, D as De, F as Oe, I as F, J as ke, K as Ae, L as je, M as Me, N as Ne, P as Pe, Q as Fe, S as Ie, T as Le, Y as Re, Z as ze, at as Be, c as Ve, et as He, it as Ue, k as We, l as Ge, nt as Ke, p as qe, q as Je, rt as Ye, tt as Xe, x as Ze, y as Qe } from "./light-DStk_u6n.js";
import { $ as $e, At as et, Bt as tt, Dt as nt, H as rt, J as it, Jt as I, Lt as at, Nt as ot, Q as st, Rt as ct, St as lt, Tt as ut, X as dt, Xt as ft, Y as pt, Z as mt, Zt as L, at as ht, ct as R, dt as gt, en as z, ft as B, gt as V, ht as _t, jt as vt, kt as H, lt as yt, mt as U, nn as bt, ot as W, pt as G, q as xt, rn as K, st as q, t as St, tn as Ct, tt as wt, ut as J, vt as Tt, xt as Et, zt as Y } from "./index-lIAgGLuV.js";
import { t as Dt } from "./FileText-Dxk7UWFJ.js";
import { a as Ot, i as kt, n as At, o as jt, r as Mt } from "./interface-CmukCGeL.js";
import { H as Nt, P as Pt, c as Ft, f as It, i as Lt, l as Rt, m as zt, n as Bt, o as Vt, r as Ht, t as Ut, u as Wt, y as Gt } from "./sketch-store-CvJqFvPU.js";
import { n as Kt } from "./vue-i18n-DzCIHuIs.js";
import { t as qt } from "./fade-in-scale-up.cssr-Cs4gy4Y4.js";
import { i as Jt } from "./attribute-Dtv4f1Yd.js";
import { n as Yt, r as Xt, t as Zt } from "./Switch-DIsYg-Ts.js";
import { D as Qt, E as $t, O as en, l as X, t as tn, u as nn } from "./core-B0GgJVIi.js";
import { a as rn, i as an, n as on, r as sn, t as cn } from "./ListItem-DARmD-J-.js";
import { t as ln } from "./use-locale-Ce8mSbNB.js";
import { t as un } from "./Warning-BT_cbo8R.js";
import { t as dn } from "./PerformantEllipsis-ChHd4Jr0.js";
import { r as Z } from "./light-DgETFGvr.js";
import { t as fn } from "./Space-BFhK259j.js";
import { t as pn } from "./use-theme-vars-BphERCET.js";
var mn = function() {
  return xt.Date.now();
}, hn = `Expected a function`, gn = Math.max, _n = Math.min;
function vn(e2, t2, n2) {
  var r2, i2, a2, o2, s2, c2, l2 = 0, u2 = false, d2 = false, f2 = true;
  if (typeof e2 != `function`) throw TypeError(hn);
  t2 = pe(t2) || 0, rt(n2) && (u2 = !!n2.leading, d2 = `maxWait` in n2, a2 = d2 ? gn(pe(n2.maxWait) || 0, t2) : a2, f2 = `trailing` in n2 ? !!n2.trailing : f2);
  function p2(t3) {
    var n3 = r2, a3 = i2;
    return r2 = i2 = void 0, l2 = t3, o2 = e2.apply(a3, n3), o2;
  }
  function m2(e3) {
    return l2 = e3, s2 = setTimeout(_2, t2), u2 ? p2(e3) : o2;
  }
  function h2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2, i3 = t2 - n3;
    return d2 ? _n(i3, a2 - r3) : i3;
  }
  function g2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2;
    return c2 === void 0 || n3 >= t2 || n3 < 0 || d2 && r3 >= a2;
  }
  function _2() {
    var e3 = mn();
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
    return s2 === void 0 ? o2 : v2(mn());
  }
  function x2() {
    var e3 = mn(), n3 = g2(e3);
    if (r2 = arguments, i2 = this, c2 = e3, n3) {
      if (s2 === void 0) return m2(c2);
      if (d2) return clearTimeout(s2), s2 = setTimeout(_2, t2), p2(c2);
    }
    return s2 === void 0 && (s2 = setTimeout(_2, t2)), o2;
  }
  return x2.cancel = y2, x2.flush = b2, x2;
}
var yn = vn, bn = `Expected a function`;
function xn(e2, t2, n2) {
  var r2 = true, i2 = true;
  if (typeof e2 != `function`) throw TypeError(bn);
  return rt(n2) && (r2 = `leading` in n2 ? !!n2.leading : r2, i2 = `trailing` in n2 ? !!n2.trailing : i2), yn(e2, t2, { leading: r2, maxWait: t2, trailing: i2 });
}
var Sn = xn, Cn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, wn = U({ name: `Calendar`, render: function(e2, t2) {
  return H(), J(`svg`, Cn, t2[0] || (t2[0] = [gt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path></g>`, 1)]));
} }), Tn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, En = U({ name: `DeviceFloppy`, render: function(e2, t2) {
  return H(), J(`svg`, Tn, t2[0] || (t2[0] = [q(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [q(`path`, { d: `M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2` }), q(`circle`, { cx: `12`, cy: `14`, r: `2` }), q(`path`, { d: `M14 4v4H8V4` })], -1)]));
} }), Dn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, On = U({ name: `Edit`, render: function(e2, t2) {
  return H(), J(`svg`, Dn, t2[0] || (t2[0] = [q(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [q(`path`, { d: `M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3` }), q(`path`, { d: `M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3` }), q(`path`, { d: `M16 5l3 3` })], -1)]));
} }), kn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, An = U({ name: `Folder`, render: function(e2, t2) {
  return H(), J(`svg`, kn, t2[0] || (t2[0] = [q(`path`, { d: `M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2`, fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, null, -1)]));
} }), jn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Mn = U({ name: `List`, render: function(e2, t2) {
  return H(), J(`svg`, jn, t2[0] || (t2[0] = [gt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11"></path><path d="M9 12h11"></path><path d="M9 18h11"></path><path d="M5 6v.01"></path><path d="M5 12v.01"></path><path d="M5 18v.01"></path></g>`, 1)]));
} });
const Nn = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, "2xl": 1920 };
function Pn(e2) {
  return `(min-width: ${e2}px)`;
}
var Fn = {};
function In(e2 = Nn) {
  if (!ze || typeof window.matchMedia != `function`) return W(() => []);
  let t2 = I({}), n2 = Object.keys(e2), r2 = (e3, n3) => {
    e3.matches ? t2.value[n3] = true : t2.value[n3] = false;
  };
  return n2.forEach((t3) => {
    let n3 = e2[t3], i2, a2;
    Fn[n3] === void 0 ? (i2 = window.matchMedia(Pn(n3)), i2.addEventListener ? i2.addEventListener(`change`, (e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }) : i2.addListener && i2.addListener((e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }), a2 = /* @__PURE__ */ new Set(), Fn[n3] = { mql: i2, cbs: a2 }) : (i2 = Fn[n3].mql, a2 = Fn[n3].cbs), a2.add(r2), i2.matches && a2.forEach((e3) => {
      e3(i2, t3);
    });
  }), ut(() => {
    n2.forEach((t3) => {
      let { cbs: n3 } = Fn[e2[t3]];
      n3.has(r2) && n3.delete(r2);
    });
  }), W(() => {
    let { value: e3 } = t2;
    return n2.filter((t3) => e3[t3]);
  });
}
var Ln = In, Rn = We(`.v-x-scroll`, { overflow: `auto`, scrollbarWidth: `none` }, [We(`&::-webkit-scrollbar`, { width: 0, height: 0 })]), zn = U({ name: `XScroll`, props: { disabled: Boolean, onScroll: Function }, setup() {
  let e2 = I(null);
  function t2(e3) {
    !(e3.currentTarget.offsetWidth < e3.currentTarget.scrollWidth) || e3.deltaY === 0 || (e3.currentTarget.scrollLeft += e3.deltaY + e3.deltaX, e3.preventDefault());
  }
  let n2 = te();
  return Rn.mount({ id: `vueuc/x-scroll`, head: true, anchorMetaName: Ee, ssr: n2 }), Object.assign({ selfRef: e2, handleWheel: t2 }, { scrollTo(...t3) {
    var n3;
    (n3 = e2.value) == null || n3.scrollTo(...t3);
  } });
}, render() {
  return V(`div`, { ref: `selfRef`, onScroll: this.onScroll, onWheel: this.disabled ? void 0 : this.handleWheel, class: `v-x-scroll` }, this.$slots);
} }), Bn = { tiny: `mini`, small: `tiny`, medium: `small`, large: `medium`, huge: `large` };
function Vn(e2) {
  let t2 = Bn[e2];
  if (t2 === void 0) throw Error(`${e2} has no smaller size.`);
  return t2;
}
function Hn(e2) {
  var _a2;
  let t2 = (_a2 = e2.dirs) == null ? void 0 : _a2.find(({ dir: e3 }) => e3 === mt);
  return !!(t2 && t2.value === false);
}
var Un = U({ name: `Remove`, render() {
  return V(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 512 512` }, V(`line`, { x1: `400`, y1: `256`, x2: `112`, y2: `256`, style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      ` }));
} }), Wn = k(`input-group`, `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [x(`>`, [k(`input`, [x(`&:not(:last-child)`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), x(`&:not(:first-child)`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), k(`button`, [x(`&:not(:last-child)`, `
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
 `, [x(`>`, [k(`input`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), k(`base-selection`, [k(`base-selection-label`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), k(`base-selection-tags`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), C(`box-shadow, border, state-border`, `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), x(`&:not(:first-child)`, `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [x(`>`, [k(`input`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), k(`base-selection`, [k(`base-selection-label`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), k(`base-selection-tags`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), C(`box-shadow, border, state-border`, `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), Gn = U({ name: `InputGroup`, props: {}, setup(e2) {
  let { mergedClsPrefixRef: t2 } = de(e2);
  return ae(`-input-group`, Wn, t2), { mergedClsPrefix: t2 };
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-input-group` }, this.$slots);
} });
function Kn(e2, t2) {
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
function qn(e2) {
  return e2 === null ? null : /^ *#/.test(e2) ? `hex` : e2.includes(`rgb`) ? `rgb` : e2.includes(`hsl`) ? `hsl` : e2.includes(`hsv`) ? `hsv` : null;
}
function Jn(e2, t2 = [255, 255, 255], n2 = `AA`) {
  let [r2, i2, a2, o2] = d(s(e2));
  if (o2 === 1) {
    let e3 = Yn([r2, i2, a2]), o3 = Yn(t2);
    return (Math.max(e3, o3) + 0.05) / (Math.min(e3, o3) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
  }
  let c2 = Yn([Math.round(r2 * o2 + t2[0] * (1 - o2)), Math.round(i2 * o2 + t2[1] * (1 - o2)), Math.round(a2 * o2 + t2[2] * (1 - o2))]), l2 = Yn(t2);
  return (Math.max(c2, l2) + 0.05) / (Math.min(c2, l2) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
}
function Yn(e2) {
  let [t2, n2, r2] = e2.map((e3) => (e3 /= 255, e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4));
  return 0.2126 * t2 + 0.7152 * n2 + 0.0722 * r2;
}
function Xn(e2) {
  return e2 = Math.round(e2), e2 >= 360 ? 359 : e2 < 0 ? 0 : e2;
}
function Zn(e2) {
  return e2 = Math.round(e2 * 100) / 100, e2 > 1 ? 1 : e2 < 0 ? 0 : e2;
}
var Qn = { rgb: { hex(e2) {
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
  return _([...oe(t2, n2, r2), i2]);
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
function $n(e2, t2, n2) {
  return n2 || (n2 = qn(e2)), n2 ? n2 === t2 ? e2 : Qn[n2][t2](e2) : null;
}
var er = `12px`, tr = 12, nr = `6px`, rr = U({ name: `AlphaSlider`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, alpha: { type: Number, default: 0 }, onUpdateAlpha: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = I(null);
  function n2(n3) {
    !t2.value || !e2.rgba || (Xe(`mousemove`, document, r2), Xe(`mouseup`, document, i2), r2(n3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = (n3.clientX - a2) / (i3 - tr);
    e2.onUpdateAlpha(Zn(o2));
  }
  function i2() {
    var t3;
    He(`mousemove`, document, r2), He(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, railBackgroundImage: W(() => {
    let { rgba: t3 } = e2;
    return t3 ? `linear-gradient(to right, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 0) 0%, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 1) 100%)` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-color-picker-slider`, ref: `railRef`, style: { height: er, borderRadius: nr }, onMousedown: this.handleMouseDown }, V(`div`, { style: { borderRadius: nr, position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, overflow: `hidden` } }, V(`div`, { class: `${e2}-color-picker-checkboard` }), V(`div`, { class: `${e2}-color-picker-slider__image`, style: { backgroundImage: this.railBackgroundImage } })), this.rgba && V(`div`, { style: { position: `absolute`, left: nr, right: nr, top: 0, bottom: 0 } }, V(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc(${this.alpha * 100}% - ${nr})`, borderRadius: nr, width: er, height: er } }, V(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: u(this.rgba), borderRadius: nr, width: er, height: er } }))));
} });
const ir = f(`n-color-picker`);
function ar(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 255)) : false;
}
function or(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 360)) : false;
}
function sr(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 100)) : false;
}
function cr(e2) {
  let t2 = e2.trim();
  return /^#[0-9a-fA-F]+$/.test(t2) ? [4, 5, 7, 9].includes(t2.length) : false;
}
function lr(e2) {
  return /^\d{1,3}\.?\d*%$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2) / 100, 100)) : false;
}
var ur = { paddingSmall: `0 4px` }, dr = U({ name: `ColorInputUnit`, props: { label: { type: String, required: true }, value: { type: [Number, String], default: null }, showAlpha: Boolean, onUpdateValue: { type: Function, required: true } }, setup(e2) {
  let t2 = I(``), { themeRef: n2 } = Tt(ir, null);
  ct(() => {
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
        a3 = cr(n3), a3 && e2.onUpdateValue(n3), t2.value = r2();
        break;
      case `H`:
        i3 = or(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `S`:
      case `L`:
      case `V`:
        i3 = sr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `A`:
        i3 = lr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `R`:
      case `G`:
      case `B`:
        i3 = ar(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
    }
  }
  return { mergedTheme: n2, inputValue: t2, handleInputChange: a2, handleInputUpdateValue: i2 };
}, render() {
  let { mergedTheme: e2 } = this;
  return V(P, { size: `small`, placeholder: this.label, theme: e2.peers.Input, themeOverrides: e2.peerOverrides.Input, builtinThemeOverrides: ur, value: this.inputValue, onUpdateValue: this.handleInputUpdateValue, onChange: this.handleInputChange, style: this.label === `A` ? `flex-grow: 1.25;` : `` });
} }), fr = U({ name: `ColorInput`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, modes: { type: Array, required: true }, showAlpha: { type: Boolean, required: true }, value: { type: String, default: null }, valueArr: { type: Array, default: null }, onUpdateValue: { type: Function, required: true }, onUpdateMode: { type: Function, required: true } }, setup(e2) {
  return { handleUnitUpdateValue(t2, r2) {
    let { showAlpha: i2 } = e2;
    if (e2.mode === `hex`) {
      e2.onUpdateValue((i2 ? n : fe)(r2));
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
  return V(`div`, { class: `${e2}-color-picker-input` }, V(`div`, { class: `${e2}-color-picker-input__mode`, onClick: this.onUpdateMode, style: { cursor: t2.length === 1 ? `` : `pointer` } }, this.mode.toUpperCase() + (this.showAlpha ? `A` : ``)), V(Gn, null, { default: () => {
    let { mode: e3, valueArr: t3, showAlpha: r2 } = this;
    if (e3 === `hex`) {
      let e4 = null;
      try {
        e4 = t3 === null ? null : (r2 ? n : fe)(t3);
      } catch {
      }
      return V(dr, { label: `HEX`, showAlpha: r2, value: e4, onUpdateValue: (e5) => {
        this.handleUnitUpdateValue(0, e5);
      } });
    }
    return (e3 + (r2 ? `a` : ``)).split(``).map((e4, n2) => V(dr, { label: e4.toUpperCase(), value: t3 === null ? null : t3[n2], onUpdateValue: (e5) => {
      this.handleUnitUpdateValue(n2, e5);
    } }));
  } }));
} });
function pr(e2, t2) {
  if (t2 === `hsv`) {
    let [t3, n2, r2, i2] = c(e2);
    return u([...v(t3, n2, r2), i2]);
  }
  return e2;
}
function mr(e2) {
  let t2 = document.createElement(`canvas`).getContext(`2d`);
  return t2 ? (t2.fillStyle = e2, t2.fillStyle) : `#000000`;
}
var hr = U({ name: `ColorPickerSwatches`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, swatches: { type: Array, required: true }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  let n2 = W(() => e2.swatches.map((e3) => {
    let t2 = qn(e3);
    return { value: e3, mode: t2, legalValue: pr(e3, t2) };
  }));
  function r2(n3) {
    let { mode: r3 } = e2, { value: i3, mode: a3 } = n3;
    return a3 || (a3 = `hex`, /^[a-zA-Z]+$/.test(i3) ? i3 = mr(i3) : (t(`color-picker`, `color ${i3} in swatches is invalid.`), i3 = `#000000`)), a3 === r3 ? i3 : $n(i3, r3, a3);
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
  return V(`div`, { class: `${e2}-color-picker-swatches` }, this.parsedSwatchesRef.map((t2) => V(`div`, { class: `${e2}-color-picker-swatch`, tabindex: 0, onClick: () => {
    this.handleSwatchSelect(t2);
  }, onKeydown: (e3) => {
    this.handleSwatchKeyDown(e3, t2);
  } }, V(`div`, { class: `${e2}-color-picker-swatch__fill`, style: { background: t2.legalValue } }))));
} }), gr = U({ name: `ColorPickerTrigger`, slots: Object, props: { clsPrefix: { type: String, required: true }, value: { type: String, default: null }, hsla: { type: Array, default: null }, disabled: Boolean, onClick: Function }, setup(e2) {
  let { colorPickerSlots: t2, renderLabelRef: n2 } = Tt(ir, null);
  return () => {
    let { hsla: r2, value: i2, clsPrefix: a2, onClick: o2, disabled: c2 } = e2, l2 = t2.label || n2.value;
    return V(`div`, { class: [`${a2}-color-picker-trigger`, c2 && `${a2}-color-picker-trigger--disabled`], onClick: c2 ? void 0 : o2 }, V(`div`, { class: `${a2}-color-picker-trigger__fill` }, V(`div`, { class: `${a2}-color-picker-checkboard` }), V(`div`, { style: { position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: r2 ? s(r2) : `` } }), i2 && r2 ? V(`div`, { class: `${a2}-color-picker-trigger__value`, style: { color: Jn(r2) ? `white` : `black` } }, l2 ? l2(i2) : i2) : null));
  };
} }), _r = U({ name: `ColorPreview`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, color: { type: String, default: null, validator: (e2) => {
  let t2 = qn(e2);
  return !!(!e2 || t2 && t2 !== `hsv`);
} }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  function t2(t3) {
    var n2;
    let r2 = t3.target.value;
    (n2 = e2.onUpdateColor) == null || n2.call(e2, $n(r2.toUpperCase(), e2.mode, `hex`)), t3.stopPropagation();
  }
  return { handleChange: t2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-color-picker-preview__preview` }, V(`span`, { class: `${e2}-color-picker-preview__fill`, style: { background: this.color || `#000000` } }), V(`input`, { class: `${e2}-color-picker-preview__input`, type: `color`, value: this.color, onChange: this.handleChange }));
} }), vr = `12px`, yr = 12, br = `6px`, xr = 6, Sr = `linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`, Cr = U({ name: `HueSlider`, props: { clsPrefix: { type: String, required: true }, hue: { type: Number, required: true }, onUpdateHue: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = I(null);
  function n2(e3) {
    t2.value && (Xe(`mousemove`, document, r2), Xe(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = Xn((n3.clientX - a2 - xr) / (i3 - yr) * 360);
    e2.onUpdateHue(o2);
  }
  function i2() {
    var t3;
    He(`mousemove`, document, r2), He(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-color-picker-slider`, style: { height: vr, borderRadius: br } }, V(`div`, { ref: `railRef`, style: { boxShadow: `inset 0 0 2px 0 rgba(0, 0, 0, .24)`, boxSizing: `border-box`, backgroundImage: Sr, height: vr, borderRadius: br, position: `relative` }, onMousedown: this.handleMouseDown }, V(`div`, { style: { position: `absolute`, left: br, right: br, top: 0, bottom: 0 } }, V(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc((${this.hue}%) / 359 * 100 - ${br})`, borderRadius: br, width: vr, height: vr } }, V(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: `hsl(${this.hue}, 100%, 50%)`, borderRadius: br, width: vr, height: vr } })))));
} }), wr = `12px`, Tr = `6px`, Er = U({ name: `Pallete`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, displayedHue: { type: Number, required: true }, displayedSv: { type: Array, required: true }, onUpdateSV: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = I(null);
  function n2(e3) {
    t2.value && (Xe(`mousemove`, document, r2), Xe(`mouseup`, document, i2), r2(e3));
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
  return { palleteRef: t2, handleColor: W(() => {
    let { rgba: t3 } = e2;
    return t3 ? `rgb(${t3[0]}, ${t3[1]}, ${t3[2]})` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-color-picker-pallete`, onMousedown: this.handleMouseDown, ref: `palleteRef` }, V(`div`, { class: `${e2}-color-picker-pallete__layer`, style: { backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))` } }), V(`div`, { class: `${e2}-color-picker-pallete__layer ${e2}-color-picker-pallete__layer--shadowed`, style: { backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))` } }), this.rgba && V(`div`, { class: `${e2}-color-picker-handle`, style: { width: wr, height: wr, borderRadius: Tr, left: `calc(${this.displayedSv[0]}% - ${Tr})`, bottom: `calc(${this.displayedSv[1]}% - ${Tr})` } }, V(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: this.handleColor, borderRadius: Tr, width: wr, height: wr } })));
} }), Dr = x([k(`color-picker`, `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), k(`color-picker-panel`, `
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
 `, [qt(), k(`input`, `
 text-align: center;
 `)]), k(`color-picker-checkboard`, `
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
 `)]), k(`color-picker-slider`, `
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
 `)]), k(`color-picker-handle`, `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [C(`fill`, `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), k(`color-picker-pallete`, `
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
 `)])]), k(`color-picker-preview`, `
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
 `)]), k(`color-picker-input`, `
 display: flex;
 align-items: center;
 `, [k(`input`, `
 flex-grow: 1;
 flex-basis: 0;
 `), C(`mode`, `
 width: 72px;
 text-align: center;
 `)]), k(`color-picker-control`, `
 padding: 12px;
 `), k(`color-picker-action`, `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [k(`button`, `margin-left: 8px;`)]), k(`color-picker-trigger`, `
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
 `), O(`disabled`, `cursor: not-allowed`), k(`color-picker-checkboard`, `
 border-radius: var(--n-border-radius);
 `, [x(`&::after`, `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), k(`color-picker-swatches`, `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [k(`color-picker-swatch`, `
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
 `)])])])])]), Or = U({ name: `ColorPicker`, props: Object.assign(Object.assign({}, E.props), { value: String, show: { type: Boolean, default: void 0 }, defaultShow: Boolean, defaultValue: String, modes: { type: Array, default: () => [`rgb`, `hex`, `hsl`] }, placement: { type: String, default: `bottom-start` }, to: je.propTo, showAlpha: { type: Boolean, default: true }, showPreview: Boolean, swatches: Array, disabled: { type: Boolean, default: void 0 }, actions: { type: Array, default: null }, internalActions: Array, size: String, renderLabel: Function, onComplete: Function, onConfirm: Function, onClear: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), slots: Object, setup(e2, { slots: t2 }) {
  let i2 = I(null), f2 = null, m2 = Qt(e2), { mergedSizeRef: x2, mergedDisabledRef: S2 } = m2, { localeRef: C2 } = ln(`global`), { mergedClsPrefixRef: T2, namespaceRef: ee2, inlineThemeDisabled: te2 } = de(e2), ne2 = E(`ColorPicker`, `-color-picker`, Dr, Pt, e2, T2);
  et(ir, { themeRef: ne2, renderLabelRef: L(e2, `renderLabel`), colorPickerSlots: t2 });
  let O2 = I(e2.defaultShow), re2 = ke(L(e2, `show`), O2);
  function ie2(t3) {
    let { onUpdateShow: n2, "onUpdate:show": i3 } = e2;
    n2 && r(n2, t3), i3 && r(i3, t3), O2.value = t3;
  }
  let { defaultValue: k2 } = e2, ae2 = I(k2 === void 0 ? Kn(e2.modes, e2.showAlpha) : k2), A2 = ke(L(e2, `value`), ae2), se2 = I([A2.value]), ce2 = I(0), le2 = W(() => qn(A2.value)), { modes: ue2 } = e2, j2 = I(qn(A2.value) || ue2[0] || `rgb`);
  function pe2() {
    let { modes: t3 } = e2, { value: n2 } = j2, r2 = t3.findIndex((e3) => e3 === n2);
    ~r2 ? j2.value = t3[(r2 + 1) % t3.length] : j2.value = `rgb`;
  }
  let M2, N2, me2, he2, ge2, _e2, P2, ve2, ye2 = W(() => {
    let { value: e3 } = A2;
    if (!e3) return null;
    switch (le2.value) {
      case `hsv`:
        return c(e3);
      case `hsl`:
        return [M2, N2, me2, ve2] = a(e3), [...oe(M2, N2, me2), ve2];
      case `rgb`:
      case `hex`:
        return [ge2, _e2, P2, ve2] = d(e3), [...p(ge2, _e2, P2), ve2];
    }
  }), be2 = W(() => {
    let { value: e3 } = A2;
    if (!e3) return null;
    switch (le2.value) {
      case `rgb`:
      case `hex`:
        return d(e3);
      case `hsv`:
        return [M2, N2, he2, ve2] = c(e3), [...v(M2, N2, he2), ve2];
      case `hsl`:
        return [M2, N2, me2, ve2] = a(e3), [...l(M2, N2, me2), ve2];
    }
  }), xe2 = W(() => {
    let { value: e3 } = A2;
    if (!e3) return null;
    switch (le2.value) {
      case `hsl`:
        return a(e3);
      case `hsv`:
        return [M2, N2, he2, ve2] = c(e3), [...y(M2, N2, he2), ve2];
      case `rgb`:
      case `hex`:
        return [ge2, _e2, P2, ve2] = d(e3), [...b(ge2, _e2, P2), ve2];
    }
  }), Se2 = W(() => {
    switch (j2.value) {
      case `rgb`:
      case `hex`:
        return be2.value;
      case `hsv`:
        return ye2.value;
      case `hsl`:
        return xe2.value;
    }
  }), Ce2 = I(0), we2 = I(1), Te2 = I([0, 0]);
  function Ee2(t3, r2) {
    let { value: i3 } = ye2, a2 = Ce2.value, c2 = i3 ? i3[3] : 1;
    Te2.value = [t3, r2];
    let { showAlpha: l2 } = e2;
    switch (j2.value) {
      case `hsv`:
        F2((l2 ? _ : h)([a2, t3, r2, c2]), `cursor`);
        break;
      case `hsl`:
        F2((l2 ? s : g)([...y(a2, t3, r2), c2]), `cursor`);
        break;
      case `rgb`:
        F2((l2 ? u : o)([...v(a2, t3, r2), c2]), `cursor`);
        break;
      case `hex`:
        F2((l2 ? n : fe)([...v(a2, t3, r2), c2]), `cursor`);
        break;
    }
  }
  function De2(t3) {
    Ce2.value = t3;
    let { value: r2 } = ye2;
    if (!r2) return;
    let [, i3, a2, c2] = r2, { showAlpha: l2 } = e2;
    switch (j2.value) {
      case `hsv`:
        F2((l2 ? _ : h)([t3, i3, a2, c2]), `cursor`);
        break;
      case `rgb`:
        F2((l2 ? u : o)([...v(t3, i3, a2), c2]), `cursor`);
        break;
      case `hex`:
        F2((l2 ? n : fe)([...v(t3, i3, a2), c2]), `cursor`);
        break;
      case `hsl`:
        F2((l2 ? s : g)([...y(t3, i3, a2), c2]), `cursor`);
        break;
    }
  }
  function Oe2(e3) {
    switch (j2.value) {
      case `hsv`:
        [M2, N2, he2] = ye2.value, F2(_([M2, N2, he2, e3]), `cursor`);
        break;
      case `rgb`:
        [ge2, _e2, P2] = be2.value, F2(u([ge2, _e2, P2, e3]), `cursor`);
        break;
      case `hex`:
        [ge2, _e2, P2] = be2.value, F2(n([ge2, _e2, P2, e3]), `cursor`);
        break;
      case `hsl`:
        [M2, N2, me2] = xe2.value, F2(s([M2, N2, me2, e3]), `cursor`);
        break;
    }
    we2.value = e3;
  }
  function F2(t3, n2) {
    f2 = n2 === `cursor` ? t3 : null;
    let { nTriggerFormChange: i3, nTriggerFormInput: a2 } = m2, { onUpdateValue: o2, "onUpdate:value": s2 } = e2;
    o2 && r(o2, t3), s2 && r(s2, t3), i3(), a2(), ae2.value = t3;
  }
  function Ae2(e3) {
    F2(e3, `input`), lt(Me2);
  }
  function Me2(t3 = true) {
    let { value: n2 } = A2;
    if (n2) {
      let { nTriggerFormChange: r2, nTriggerFormInput: i3 } = m2, { onComplete: a2 } = e2;
      a2 && a2(n2);
      let { value: o2 } = se2, { value: s2 } = ce2;
      t3 && (o2.splice(s2 + 1, o2.length, n2), ce2.value = s2 + 1), r2(), i3();
    }
  }
  function Ne2() {
    let { value: e3 } = ce2;
    e3 - 1 < 0 || (F2(se2.value[e3 - 1], `input`), Me2(false), ce2.value = e3 - 1);
  }
  function Pe2() {
    let { value: e3 } = ce2;
    e3 < 0 || e3 + 1 >= se2.value.length || (F2(se2.value[e3 + 1], `input`), Me2(false), ce2.value = e3 + 1);
  }
  function Fe2() {
    F2(null, `input`);
    let { onClear: t3 } = e2;
    t3 && t3(), ie2(false);
  }
  function Ie2() {
    let { value: t3 } = A2, { onConfirm: n2 } = e2;
    n2 && n2(t3), ie2(false);
  }
  let Le2 = W(() => ce2.value >= 1), Re2 = W(() => {
    let { value: e3 } = se2;
    return e3.length > 1 && ce2.value < e3.length - 1;
  });
  at(re2, (e3) => {
    e3 || (se2.value = [A2.value], ce2.value = 0);
  }), ct(() => {
    if (!(f2 && f2 === A2.value)) {
      let { value: e3 } = ye2;
      e3 && (Ce2.value = e3[0], we2.value = e3[3], Te2.value = [e3[1], e3[2]]);
    }
    f2 = null;
  });
  let ze2 = W(() => {
    let { value: e3 } = x2, { common: { cubicBezierEaseInOut: t3 }, self: { textColor: n2, color: r2, panelFontSize: i3, boxShadow: a2, border: o2, borderRadius: s2, dividerColor: c2, [w(`height`, e3)]: l2, [w(`fontSize`, e3)]: u2 } } = ne2.value;
    return { "--n-bezier": t3, "--n-text-color": n2, "--n-color": r2, "--n-panel-font-size": i3, "--n-font-size": u2, "--n-box-shadow": a2, "--n-border": o2, "--n-border-radius": s2, "--n-height": l2, "--n-divider-color": c2 };
  }), Be2 = te2 ? D(`color-picker`, W(() => x2.value[0]), ze2, e2) : void 0;
  function Ve2() {
    var _a2;
    let { value: n2 } = be2, { value: r2 } = Ce2, { internalActions: i3, modes: a2, actions: o2 } = e2, { value: s2 } = ne2, { value: c2 } = T2;
    return V(`div`, { class: [`${c2}-color-picker-panel`, Be2 == null ? void 0 : Be2.themeClass.value], onDragstart: (e3) => {
      e3.preventDefault();
    }, style: te2 ? void 0 : ze2.value }, V(`div`, { class: `${c2}-color-picker-control` }, V(Er, { clsPrefix: c2, rgba: n2, displayedHue: r2, displayedSv: Te2.value, onUpdateSV: Ee2, onComplete: Me2 }), V(`div`, { class: `${c2}-color-picker-preview` }, V(`div`, { class: `${c2}-color-picker-preview__sliders` }, V(Cr, { clsPrefix: c2, hue: r2, onUpdateHue: De2, onComplete: Me2 }), e2.showAlpha ? V(rr, { clsPrefix: c2, rgba: n2, alpha: we2.value, onUpdateAlpha: Oe2, onComplete: Me2 }) : null), e2.showPreview ? V(_r, { clsPrefix: c2, mode: j2.value, color: be2.value && fe(be2.value), onUpdateColor: (e3) => {
      F2(e3, `input`);
    } }) : null), V(fr, { clsPrefix: c2, showAlpha: e2.showAlpha, mode: j2.value, modes: a2, onUpdateMode: pe2, value: A2.value, valueArr: Se2.value, onUpdateValue: Ae2 }), ((_a2 = e2.swatches) == null ? void 0 : _a2.length) && V(hr, { clsPrefix: c2, mode: j2.value, swatches: e2.swatches, onUpdateColor: (e3) => {
      F2(e3, `input`);
    } })), (o2 == null ? void 0 : o2.length) ? V(`div`, { class: `${c2}-color-picker-action` }, o2.includes(`confirm`) && V(X, { size: `small`, onClick: Ie2, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.confirm }), o2.includes(`clear`) && V(X, { size: `small`, onClick: Fe2, disabled: !A2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.clear })) : null, t2.action ? V(`div`, { class: `${c2}-color-picker-action` }, { default: t2.action }) : i3 ? V(`div`, { class: `${c2}-color-picker-action` }, i3.includes(`undo`) && V(X, { size: `small`, onClick: Ne2, disabled: !Le2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.undo }), i3.includes(`redo`) && V(X, { size: `small`, onClick: Pe2, disabled: !Re2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.redo })) : null);
  }
  return { mergedClsPrefix: T2, namespace: ee2, selfRef: i2, hsla: xe2, rgba: be2, mergedShow: re2, mergedDisabled: S2, isMounted: Je(), adjustedTo: je(e2), mergedValue: A2, handleTriggerClick() {
    ie2(true);
  }, handleClickOutside(e3) {
    var _a2;
    ((_a2 = i2.value) == null ? void 0 : _a2.contains(Ye(e3))) || ie2(false);
  }, renderPanel: Ve2, cssVars: te2 ? void 0 : ze2, themeClass: Be2 == null ? void 0 : Be2.themeClass, onRender: Be2 == null ? void 0 : Be2.onRender };
}, render() {
  let { mergedClsPrefix: e2, onRender: t2 } = this;
  return t2 == null ? void 0 : t2(), V(`div`, { class: [this.themeClass, `${e2}-color-picker`], ref: `selfRef`, style: this.cssVars }, V(Pe, null, { default: () => [V(Ne, null, { default: () => V(gr, { clsPrefix: e2, value: this.mergedValue, hsla: this.hsla, disabled: this.mergedDisabled, onClick: this.handleTriggerClick }) }), V(De, { placement: this.placement, show: this.mergedShow, containerClass: this.namespace, teleportDisabled: this.adjustedTo === je.tdkey, to: this.adjustedTo }, { default: () => V(it, { name: `fade-in-scale-up-transition`, appear: this.isMounted }, { default: () => this.mergedShow ? tt(this.renderPanel(), [[Me, this.handleClickOutside, void 0, { capture: true }]]) : null }) })] }));
} }), kr = k(`dynamic-tags`, [k(`input`, { minWidth: `var(--n-input-width)` })]), Ar = U({ name: `DynamicTags`, props: Object.assign(Object.assign(Object.assign({}, E.props), an), { size: { type: String, default: `medium` }, closable: { type: Boolean, default: true }, defaultValue: { type: Array, default: () => [] }, value: Array, inputClass: String, inputStyle: [String, Object], inputProps: Object, max: Number, tagClass: String, tagStyle: [String, Object], renderTag: Function, onCreate: { type: Function, default: (e2) => e2 }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = de(e2), { localeRef: i2 } = ln(`DynamicTags`), a2 = Qt(e2), { mergedDisabledRef: o2 } = a2, s2 = I(``), c2 = I(false), l2 = I(true), u2 = I(null), d2 = E(`DynamicTags`, `-dynamic-tags`, kr, zt, e2, t2), f2 = I(e2.defaultValue), p2 = ke(L(e2, `value`), f2), m2 = W(() => i2.value.add), h2 = W(() => Vn(e2.size)), g2 = W(() => o2.value || !!e2.max && p2.value.length >= e2.max);
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
    c2.value = true, lt(() => {
      var e3;
      (e3 = u2.value) == null || e3.focus(), l2.value = false;
    });
  }
  let C2 = W(() => {
    let { self: { inputWidth: e3 } } = d2.value;
    return { "--n-input-width": e3 };
  }), w2 = n2 ? D(`dynamic-tags`, void 0, C2, e2) : void 0;
  return { mergedClsPrefix: t2, inputInstRef: u2, localizedAdd: m2, inputSize: h2, inputValue: s2, showInput: c2, inputForceFocused: l2, mergedValue: p2, mergedDisabled: o2, triggerDisabled: g2, handleInputKeyDown: y2, handleAddClick: S2, handleInputBlur: x2, handleCloseClick: v2, handleInputConfirm: b2, mergedTheme: d2, cssVars: n2 ? void 0 : C2, themeClass: w2 == null ? void 0 : w2.themeClass, onRender: w2 == null ? void 0 : w2.onRender };
}, render() {
  let { mergedTheme: e2, cssVars: t2, mergedClsPrefix: n2, onRender: r2, renderTag: i2 } = this;
  return r2 == null ? void 0 : r2(), V(fn, { class: [`${n2}-dynamic-tags`, this.themeClass], size: `small`, style: t2, theme: e2.peers.Space, themeOverrides: e2.peerOverrides.Space, itemStyle: `display: flex;` }, { default: () => {
    let { mergedTheme: e3, tagClass: t3, tagStyle: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, mergedDisabled: u2, showInput: d2, inputValue: f2, inputClass: p2, inputStyle: m2, inputSize: h2, inputForceFocused: g2, triggerDisabled: _2, handleInputKeyDown: v2, handleInputBlur: y2, handleAddClick: b2, handleCloseClick: x2, handleInputConfirm: S2, $slots: C2 } = this;
    return this.mergedValue.map((n3, d3) => i2 ? i2(n3, d3) : V(sn, { key: d3, theme: e3.peers.Tag, themeOverrides: e3.peerOverrides.Tag, class: t3, style: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, disabled: u2, onClose: () => {
      x2(d3);
    } }, { default: () => typeof n3 == `string` ? n3 : n3.label })).concat(d2 ? C2.input ? C2.input({ submit: S2, deactivate: y2 }) : V(P, Object.assign({ placeholder: ``, size: h2, style: m2, class: p2, autosize: true }, this.inputProps, { ref: `inputInstRef`, value: f2, onUpdateValue: (e4) => {
      this.inputValue = e4;
    }, theme: e3.peers.Input, themeOverrides: e3.peerOverrides.Input, onKeydown: v2, onBlur: y2, internalForceFocus: g2 })) : C2.trigger ? C2.trigger({ activate: b2, disabled: _2 }) : V(X, { dashed: true, disabled: _2, theme: e3.peers.Button, themeOverrides: e3.peerOverrides.Button, size: h2, onClick: b2 }, { icon: () => V(le, { clsPrefix: n2 }, { default: () => V(N, null) }) }));
  } });
} }), jr = U({ name: `Flex`, props: Object.assign(Object.assign({}, E.props), { align: String, justify: { type: String, default: `start` }, inline: Boolean, vertical: Boolean, reverse: Boolean, size: { type: [String, Number, Array], default: `medium` }, wrap: { type: Boolean, default: true } }), setup(t2) {
  let { mergedClsPrefixRef: n2, mergedRtlRef: r2 } = de(t2), i2 = E(`Flex`, `-flex`, void 0, It, t2, n2);
  return { rtlEnabled: ee(`Flex`, r2, n2), mergedClsPrefix: n2, margin: W(() => {
    let { size: n3 } = t2;
    if (Array.isArray(n3)) return { horizontal: n3[0], vertical: n3[1] };
    if (typeof n3 == `number`) return { horizontal: n3, vertical: n3 };
    let { self: { [w(`gap`, n3)]: r3 } } = i2.value, { row: a2, col: o2 } = T(r3);
    return { horizontal: e(o2), vertical: e(a2) };
  }) };
}, render() {
  let { vertical: e2, reverse: t2, align: n2, inline: r2, justify: i2, margin: a2, wrap: o2, mergedClsPrefix: s2, rtlEnabled: c2 } = this, l2 = Ze(rn(this), false);
  return l2.length ? V(`div`, { role: `none`, class: [`${s2}-flex`, c2 && `${s2}-flex--rtl`], style: { display: r2 ? `inline-flex` : `flex`, flexDirection: /* @__PURE__ */ (() => e2 && !t2 ? `column` : e2 && t2 ? `column-reverse` : !e2 && t2 ? `row-reverse` : `row`)(), justifyContent: i2, flexWrap: !o2 || e2 ? `nowrap` : `wrap`, alignItems: n2, gap: `${a2.vertical}px ${a2.horizontal}px` } }, l2) : null;
} });
const Mr = f(`n-form`), Nr = f(`n-form-item-insts`);
var Pr = k(`form`, [O(`inline`, `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [k(`form-item`, { width: `auto`, marginRight: `18px` }, [x(`&:last-child`, { marginRight: 0 })])])]), Fr = function(e2, t2, n2, r2) {
  function i2(e3) {
    return e3 instanceof n2 ? e3 : new n2(function(t3) {
      t3(e3);
    });
  }
  return new (n2 || (n2 = Promise))(function(n3, a2) {
    function o2(e3) {
      try {
        c2(r2.next(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function s2(e3) {
      try {
        c2(r2.throw(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function c2(e3) {
      e3.done ? n3(e3.value) : i2(e3.value).then(o2, s2);
    }
    c2((r2 = r2.apply(e2, t2 || [])).next());
  });
}, Ir = U({ name: `Form`, props: Object.assign(Object.assign({}, E.props), { inline: Boolean, labelWidth: [Number, String], labelAlign: String, labelPlacement: { type: String, default: `top` }, model: { type: Object, default: () => {
} }, rules: Object, disabled: Boolean, size: String, showRequireMark: { type: Boolean, default: void 0 }, requireMarkPlacement: String, showFeedback: { type: Boolean, default: true }, onSubmit: { type: Function, default: (e2) => {
  e2.preventDefault();
} }, showLabel: { type: Boolean, default: void 0 }, validateMessages: Object }), setup(e2) {
  let { mergedClsPrefixRef: t2 } = de(e2);
  E(`Form`, `-form`, Pr, Wt, e2, t2);
  let n2 = {}, r2 = I(void 0), a2 = (e3) => {
    let t3 = r2.value;
    (t3 === void 0 || e3 >= t3) && (r2.value = e3);
  };
  function o2(e3) {
    return Fr(this, arguments, void 0, function* (e4, t3 = () => true) {
      return yield new Promise((r3, a3) => {
        let o3 = [];
        for (let e5 of i(n2)) {
          let r4 = n2[e5];
          for (let e6 of r4) e6.path && o3.push(e6.internalValidate(null, t3));
        }
        Promise.all(o3).then((t4) => {
          let n3 = t4.some((e5) => !e5.valid), i2 = [], o4 = [];
          t4.forEach((e5) => {
            var _a2, _b;
            ((_a2 = e5.errors) == null ? void 0 : _a2.length) && i2.push(e5.errors), ((_b = e5.warnings) == null ? void 0 : _b.length) && o4.push(e5.warnings);
          }), e4 && e4(i2.length ? i2 : void 0, { warnings: o4.length ? o4 : void 0 }), n3 ? a3(i2.length ? i2 : void 0) : r3({ warnings: o4.length ? o4 : void 0 });
        });
      });
    });
  }
  function s2() {
    for (let e3 of i(n2)) {
      let t3 = n2[e3];
      for (let e4 of t3) e4.restoreValidation();
    }
  }
  et(Mr, { props: e2, maxChildLabelWidthRef: r2, deriveMaxChildLabelWidth: a2 }), et(Nr, { formItems: n2 });
  let c2 = { validate: o2, restoreValidation: s2 };
  return Object.assign(c2, { mergedClsPrefix: t2 });
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return V(`form`, { class: [`${e2}-form`, this.inline && `${e2}-form--inline`], onSubmit: this.onSubmit }, this.$slots);
} });
function Lr() {
  return Lr = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, Lr.apply(this, arguments);
}
function Rr(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, Br(e2, t2);
}
function zr(e2) {
  return zr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
    return e3.__proto__ || Object.getPrototypeOf(e3);
  }, zr(e2);
}
function Br(e2, t2) {
  return Br = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
    return e3.__proto__ = t3, e3;
  }, Br(e2, t2);
}
function Vr() {
  if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == `function`) return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Hr(e2, t2, n2) {
  return Hr = Vr() ? Reflect.construct.bind() : function(e3, t3, n3) {
    var r2 = [null];
    r2.push.apply(r2, t3);
    var i2 = new (Function.bind.apply(e3, r2))();
    return n3 && Br(i2, n3.prototype), i2;
  }, Hr.apply(null, arguments);
}
function Ur(e2) {
  return Function.toString.call(e2).indexOf(`[native code]`) !== -1;
}
function Wr(e2) {
  var t2 = typeof Map == `function` ? /* @__PURE__ */ new Map() : void 0;
  return Wr = function(e3) {
    if (e3 === null || !Ur(e3)) return e3;
    if (typeof e3 != `function`) throw TypeError(`Super expression must either be null or a function`);
    if (t2 !== void 0) {
      if (t2.has(e3)) return t2.get(e3);
      t2.set(e3, n2);
    }
    function n2() {
      return Hr(e3, arguments, zr(this).constructor);
    }
    return n2.prototype = Object.create(e3.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), Br(n2, e3);
  }, Wr(e2);
}
var Gr = /%[sdj%]/g, Kr = function() {
};
function qr(e2) {
  if (!e2 || !e2.length) return null;
  var t2 = {};
  return e2.forEach(function(e3) {
    var n2 = e3.field;
    t2[n2] = t2[n2] || [], t2[n2].push(e3);
  }), t2;
}
function Jr(e2) {
  var t2 = [...arguments].slice(1), n2 = 0, r2 = t2.length;
  return typeof e2 == `function` ? e2.apply(null, t2) : typeof e2 == `string` ? e2.replace(Gr, function(e3) {
    if (e3 === `%%`) return `%`;
    if (n2 >= r2) return e3;
    switch (e3) {
      case `%s`:
        return String(t2[n2++]);
      case `%d`:
        return Number(t2[n2++]);
      case `%j`:
        try {
          return JSON.stringify(t2[n2++]);
        } catch {
          return `[Circular]`;
        }
        break;
      default:
        return e3;
    }
  }) : e2;
}
function Yr(e2) {
  return e2 === `string` || e2 === `url` || e2 === `hex` || e2 === `email` || e2 === `date` || e2 === `pattern`;
}
function Q(e2, t2) {
  return !!(e2 == null || t2 === `array` && Array.isArray(e2) && !e2.length || Yr(t2) && typeof e2 == `string` && !e2);
}
function Xr(e2, t2, n2) {
  var r2 = [], i2 = 0, a2 = e2.length;
  function o2(e3) {
    r2.push.apply(r2, e3 || []), i2++, i2 === a2 && n2(r2);
  }
  e2.forEach(function(e3) {
    t2(e3, o2);
  });
}
function Zr(e2, t2, n2) {
  var r2 = 0, i2 = e2.length;
  function a2(o2) {
    if (o2 && o2.length) {
      n2(o2);
      return;
    }
    var s2 = r2;
    r2 += 1, s2 < i2 ? t2(e2[s2], a2) : n2([]);
  }
  a2([]);
}
function Qr(e2) {
  var t2 = [];
  return Object.keys(e2).forEach(function(n2) {
    t2.push.apply(t2, e2[n2] || []);
  }), t2;
}
var $r = (function(e2) {
  Rr(t2, e2);
  function t2(t3, n2) {
    var r2 = e2.call(this, `Async Validation Error`) || this;
    return r2.errors = t3, r2.fields = n2, r2;
  }
  return t2;
})(Wr(Error));
function ei(e2, t2, n2, r2, i2) {
  if (t2.first) {
    var a2 = new Promise(function(t3, a3) {
      Zr(Qr(e2), n2, function(e3) {
        return r2(e3), e3.length ? a3(new $r(e3, qr(e3))) : t3(i2);
      });
    });
    return a2.catch(function(e3) {
      return e3;
    }), a2;
  }
  var o2 = t2.firstFields === true ? Object.keys(e2) : t2.firstFields || [], s2 = Object.keys(e2), c2 = s2.length, l2 = 0, u2 = [], d2 = new Promise(function(t3, a3) {
    var d3 = function(e3) {
      if (u2.push.apply(u2, e3), l2++, l2 === c2) return r2(u2), u2.length ? a3(new $r(u2, qr(u2))) : t3(i2);
    };
    s2.length || (r2(u2), t3(i2)), s2.forEach(function(t4) {
      var r3 = e2[t4];
      o2.indexOf(t4) === -1 ? Xr(r3, n2, d3) : Zr(r3, n2, d3);
    });
  });
  return d2.catch(function(e3) {
    return e3;
  }), d2;
}
function ti(e2) {
  return !!(e2 && e2.message !== void 0);
}
function ni(e2, t2) {
  for (var n2 = e2, r2 = 0; r2 < t2.length; r2++) {
    if (n2 == null) return n2;
    n2 = n2[t2[r2]];
  }
  return n2;
}
function ri(e2, t2) {
  return function(n2) {
    var r2 = e2.fullFields ? ni(t2, e2.fullFields) : t2[n2.field || e2.fullField];
    return ti(n2) ? (n2.field = n2.field || e2.fullField, n2.fieldValue = r2, n2) : { message: typeof n2 == `function` ? n2() : n2, fieldValue: r2, field: n2.field || e2.fullField };
  };
}
function ii(e2, t2) {
  if (t2) {
    for (var n2 in t2) if (t2.hasOwnProperty(n2)) {
      var r2 = t2[n2];
      typeof r2 == `object` && typeof e2[n2] == `object` ? e2[n2] = Lr({}, e2[n2], r2) : e2[n2] = r2;
    }
  }
  return e2;
}
var ai = function(e2, t2, n2, r2, i2, a2) {
  e2.required && (!n2.hasOwnProperty(e2.field) || Q(t2, a2 || e2.type)) && r2.push(Jr(i2.messages.required, e2.fullField));
}, oi = function(e2, t2, n2, r2, i2) {
  (/^\s+$/.test(t2) || t2 === ``) && r2.push(Jr(i2.messages.whitespace, e2.fullField));
}, si, ci = (function() {
  if (si) return si;
  var e2 = `[a-fA-F\\d:]`, t2 = function(t3) {
    return t3 && t3.includeBoundaries ? `(?:(?<=\\s|^)(?=` + e2 + `)|(?<=` + e2 + `)(?=\\s|$))` : ``;
  }, n2 = `(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}`, r2 = `[a-fA-F\\d]{1,4}`, i2 = (`
(?:
(?:` + r2 + `:){7}(?:` + r2 + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r2 + `:){6}(?:` + n2 + `|:` + r2 + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r2 + `:){5}(?::` + n2 + `|(?::` + r2 + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r2 + `:){4}(?:(?::` + r2 + `){0,1}:` + n2 + `|(?::` + r2 + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r2 + `:){3}(?:(?::` + r2 + `){0,2}:` + n2 + `|(?::` + r2 + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r2 + `:){2}(?:(?::` + r2 + `){0,3}:` + n2 + `|(?::` + r2 + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r2 + `:){1}(?:(?::` + r2 + `){0,4}:` + n2 + `|(?::` + r2 + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r2 + `){0,5}:` + n2 + `|(?::` + r2 + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, ``).replace(/\n/g, ``).trim(), a2 = RegExp(`(?:^` + n2 + `$)|(?:^` + i2 + `$)`), o2 = RegExp(`^` + n2 + `$`), s2 = RegExp(`^` + i2 + `$`), c2 = function(e3) {
    return e3 && e3.exact ? a2 : RegExp(`(?:` + t2(e3) + n2 + t2(e3) + `)|(?:` + t2(e3) + i2 + t2(e3) + `)`, `g`);
  };
  c2.v4 = function(e3) {
    return e3 && e3.exact ? o2 : RegExp(`` + t2(e3) + n2 + t2(e3), `g`);
  }, c2.v6 = function(e3) {
    return e3 && e3.exact ? s2 : RegExp(`` + t2(e3) + i2 + t2(e3), `g`);
  };
  var l2 = `(?:(?:[a-z]+:)?//)`, u2 = `(?:\\S+(?::\\S*)?@)?`, d2 = c2.v4().source, f2 = c2.v6().source, p2 = `(?:` + l2 + `|www\\.)` + u2 + `(?:localhost|` + d2 + `|` + f2 + `|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?`;
  return si = RegExp(`(?:^` + p2 + `$)`, `i`), si;
}), li = { email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/, hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i }, ui = { integer: function(e2) {
  return ui.number(e2) && parseInt(e2, 10) === e2;
}, float: function(e2) {
  return ui.number(e2) && !ui.integer(e2);
}, array: function(e2) {
  return Array.isArray(e2);
}, regexp: function(e2) {
  if (e2 instanceof RegExp) return true;
  try {
    return true;
  } catch {
    return false;
  }
}, date: function(e2) {
  return typeof e2.getTime == `function` && typeof e2.getMonth == `function` && typeof e2.getYear == `function` && !isNaN(e2.getTime());
}, number: function(e2) {
  return isNaN(e2) ? false : typeof e2 == `number`;
}, object: function(e2) {
  return typeof e2 == `object` && !ui.array(e2);
}, method: function(e2) {
  return typeof e2 == `function`;
}, email: function(e2) {
  return typeof e2 == `string` && e2.length <= 320 && !!e2.match(li.email);
}, url: function(e2) {
  return typeof e2 == `string` && e2.length <= 2048 && !!e2.match(ci());
}, hex: function(e2) {
  return typeof e2 == `string` && !!e2.match(li.hex);
} }, di = function(e2, t2, n2, r2, i2) {
  if (e2.required && t2 === void 0) {
    ai(e2, t2, n2, r2, i2);
    return;
  }
  var a2 = [`integer`, `float`, `array`, `regexp`, `object`, `method`, `email`, `number`, `date`, `url`, `hex`], o2 = e2.type;
  a2.indexOf(o2) > -1 ? ui[o2](t2) || r2.push(Jr(i2.messages.types[o2], e2.fullField, e2.type)) : o2 && typeof t2 !== e2.type && r2.push(Jr(i2.messages.types[o2], e2.fullField, e2.type));
}, fi = function(e2, t2, n2, r2, i2) {
  var a2 = typeof e2.len == `number`, o2 = typeof e2.min == `number`, s2 = typeof e2.max == `number`, c2 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l2 = t2, u2 = null, d2 = typeof t2 == `number`, f2 = typeof t2 == `string`, p2 = Array.isArray(t2);
  if (d2 ? u2 = `number` : f2 ? u2 = `string` : p2 && (u2 = `array`), !u2) return false;
  p2 && (l2 = t2.length), f2 && (l2 = t2.replace(c2, `_`).length), a2 ? l2 !== e2.len && r2.push(Jr(i2.messages[u2].len, e2.fullField, e2.len)) : o2 && !s2 && l2 < e2.min ? r2.push(Jr(i2.messages[u2].min, e2.fullField, e2.min)) : s2 && !o2 && l2 > e2.max ? r2.push(Jr(i2.messages[u2].max, e2.fullField, e2.max)) : o2 && s2 && (l2 < e2.min || l2 > e2.max) && r2.push(Jr(i2.messages[u2].range, e2.fullField, e2.min, e2.max));
}, pi = `enum`, $ = { required: ai, whitespace: oi, type: di, range: fi, enum: function(e2, t2, n2, r2, i2) {
  e2[pi] = Array.isArray(e2[pi]) ? e2[pi] : [], e2[pi].indexOf(t2) === -1 && r2.push(Jr(i2.messages[pi], e2.fullField, e2[pi].join(`, `)));
}, pattern: function(e2, t2, n2, r2, i2) {
  e2.pattern && (e2.pattern instanceof RegExp ? (e2.pattern.lastIndex = 0, e2.pattern.test(t2) || r2.push(Jr(i2.messages.pattern.mismatch, e2.fullField, t2, e2.pattern))) : typeof e2.pattern == `string` && (new RegExp(e2.pattern).test(t2) || r2.push(Jr(i2.messages.pattern.mismatch, e2.fullField, t2, e2.pattern))));
} }, mi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2, `string`) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2, `string`), Q(t2, `string`) || ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2), $.pattern(e2, t2, r2, a2, i2), e2.whitespace === true && $.whitespace(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, hi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && $.type(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, gi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (t2 === `` && (t2 = void 0), Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, _i = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && $.type(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, vi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), Q(t2) || $.type(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, yi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, bi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, xi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (t2 == null && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2, `array`), t2 != null && ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, Si = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && $.type(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, Ci = `enum`, wi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && $[Ci](e2, t2, r2, a2, i2);
  }
  n2(a2);
}, Ti = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2, `string`) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), Q(t2, `string`) || $.pattern(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, Ei = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2, `date`) && !e2.required) return n2();
    if ($.required(e2, t2, r2, a2, i2), !Q(t2, `date`)) {
      var o2 = t2 instanceof Date ? t2 : new Date(t2);
      $.type(e2, o2, r2, a2, i2), o2 && $.range(e2, o2.getTime(), r2, a2, i2);
    }
  }
  n2(a2);
}, Di = function(e2, t2, n2, r2, i2) {
  var a2 = [], o2 = Array.isArray(t2) ? `array` : typeof t2;
  $.required(e2, t2, r2, a2, i2, o2), n2(a2);
}, Oi = function(e2, t2, n2, r2, i2) {
  var a2 = e2.type, o2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2, a2) && !e2.required) return n2();
    $.required(e2, t2, r2, o2, i2, a2), Q(t2, a2) || $.type(e2, t2, r2, o2, i2);
  }
  n2(o2);
}, ki = { string: mi, method: hi, number: gi, boolean: _i, regexp: vi, integer: yi, float: bi, array: xi, object: Si, enum: wi, pattern: Ti, date: Ei, url: Oi, hex: Oi, email: Oi, required: Di, any: function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2);
  }
  n2(a2);
} };
function Ai() {
  return { default: `Validation error on field %s`, required: `%s is required`, enum: `%s must be one of %s`, whitespace: `%s cannot be empty`, date: { format: `%s date %s is invalid for format %s`, parse: `%s date could not be parsed, %s is invalid `, invalid: `%s date %s is invalid` }, types: { string: `%s is not a %s`, method: `%s is not a %s (function)`, array: `%s is not an %s`, object: `%s is not an %s`, number: `%s is not a %s`, date: `%s is not a %s`, boolean: `%s is not a %s`, integer: `%s is not an %s`, float: `%s is not a %s`, regexp: `%s is not a valid %s`, email: `%s is not a valid %s`, url: `%s is not a valid %s`, hex: `%s is not a valid %s` }, string: { len: `%s must be exactly %s characters`, min: `%s must be at least %s characters`, max: `%s cannot be longer than %s characters`, range: `%s must be between %s and %s characters` }, number: { len: `%s must equal %s`, min: `%s cannot be less than %s`, max: `%s cannot be greater than %s`, range: `%s must be between %s and %s` }, array: { len: `%s must be exactly %s in length`, min: `%s cannot be less than %s in length`, max: `%s cannot be greater than %s in length`, range: `%s must be between %s and %s in length` }, pattern: { mismatch: `%s value %s does not match pattern %s` }, clone: function() {
    var e2 = JSON.parse(JSON.stringify(this));
    return e2.clone = this.clone, e2;
  } };
}
var ji = Ai(), Mi = (function() {
  function e2(e3) {
    this.rules = null, this._messages = ji, this.define(e3);
  }
  var t2 = e2.prototype;
  return t2.define = function(e3) {
    var t3 = this;
    if (!e3) throw Error(`Cannot configure a schema with no rules`);
    if (typeof e3 != `object` || Array.isArray(e3)) throw Error(`Rules must be an object`);
    this.rules = {}, Object.keys(e3).forEach(function(n2) {
      var r2 = e3[n2];
      t3.rules[n2] = Array.isArray(r2) ? r2 : [r2];
    });
  }, t2.messages = function(e3) {
    return e3 && (this._messages = ii(Ai(), e3)), this._messages;
  }, t2.validate = function(t3, n2, r2) {
    var i2 = this;
    n2 === void 0 && (n2 = {}), r2 === void 0 && (r2 = function() {
    });
    var a2 = t3, o2 = n2, s2 = r2;
    if (typeof o2 == `function` && (s2 = o2, o2 = {}), !this.rules || Object.keys(this.rules).length === 0) return s2 && s2(null, a2), Promise.resolve(a2);
    function c2(e3) {
      var t4 = [], n3 = {};
      function r3(e4) {
        if (Array.isArray(e4)) {
          var n4;
          t4 = (n4 = t4).concat.apply(n4, e4);
        } else t4.push(e4);
      }
      for (var i3 = 0; i3 < e3.length; i3++) r3(e3[i3]);
      t4.length ? (n3 = qr(t4), s2(t4, n3)) : s2(null, a2);
    }
    if (o2.messages) {
      var l2 = this.messages();
      l2 === ji && (l2 = Ai()), ii(l2, o2.messages), o2.messages = l2;
    } else o2.messages = this.messages();
    var u2 = {};
    (o2.keys || Object.keys(this.rules)).forEach(function(e3) {
      var n3 = i2.rules[e3], r3 = a2[e3];
      n3.forEach(function(n4) {
        var o3 = n4;
        typeof o3.transform == `function` && (a2 === t3 && (a2 = Lr({}, a2)), r3 = a2[e3] = o3.transform(r3)), o3 = typeof o3 == `function` ? { validator: o3 } : Lr({}, o3), o3.validator = i2.getValidationMethod(o3), o3.validator && (o3.field = e3, o3.fullField = o3.fullField || e3, o3.type = i2.getType(o3), u2[e3] = u2[e3] || [], u2[e3].push({ rule: o3, value: r3, source: a2, field: e3 }));
      });
    });
    var d2 = {};
    return ei(u2, o2, function(t4, n3) {
      var r3 = t4.rule, i3 = (r3.type === `object` || r3.type === `array`) && (typeof r3.fields == `object` || typeof r3.defaultField == `object`);
      i3 && (i3 = r3.required || !r3.required && t4.value), r3.field = t4.field;
      function s3(e3, t5) {
        return Lr({}, t5, { fullField: r3.fullField + `.` + e3, fullFields: r3.fullFields ? [].concat(r3.fullFields, [e3]) : [e3] });
      }
      function c3(c4) {
        c4 === void 0 && (c4 = []);
        var l4 = Array.isArray(c4) ? c4 : [c4];
        !o2.suppressWarning && l4.length && e2.warning(`async-validator:`, l4), l4.length && r3.message !== void 0 && (l4 = [].concat(r3.message));
        var u3 = l4.map(ri(r3, a2));
        if (o2.first && u3.length) return d2[r3.field] = 1, n3(u3);
        if (!i3) n3(u3);
        else {
          if (r3.required && !t4.value) return r3.message === void 0 ? o2.error && (u3 = [o2.error(r3, Jr(o2.messages.required, r3.field))]) : u3 = [].concat(r3.message).map(ri(r3, a2)), n3(u3);
          var f2 = {};
          r3.defaultField && Object.keys(t4.value).map(function(e3) {
            f2[e3] = r3.defaultField;
          }), f2 = Lr({}, f2, t4.rule.fields);
          var p2 = {};
          Object.keys(f2).forEach(function(e3) {
            var t5 = f2[e3];
            p2[e3] = (Array.isArray(t5) ? t5 : [t5]).map(s3.bind(null, e3));
          });
          var m2 = new e2(p2);
          m2.messages(o2.messages), t4.rule.options && (t4.rule.options.messages = o2.messages, t4.rule.options.error = o2.error), m2.validate(t4.value, t4.rule.options || o2, function(e3) {
            var t5 = [];
            u3 && u3.length && t5.push.apply(t5, u3), e3 && e3.length && t5.push.apply(t5, e3), n3(t5.length ? t5 : null);
          });
        }
      }
      var l3;
      if (r3.asyncValidator) l3 = r3.asyncValidator(r3, t4.value, c3, t4.source, o2);
      else if (r3.validator) {
        try {
          l3 = r3.validator(r3, t4.value, c3, t4.source, o2);
        } catch (e3) {
          console.error == null || console.error(e3), o2.suppressValidatorError || setTimeout(function() {
            throw e3;
          }, 0), c3(e3.message);
        }
        l3 === true ? c3() : l3 === false ? c3(typeof r3.message == `function` ? r3.message(r3.fullField || r3.field) : r3.message || (r3.fullField || r3.field) + ` fails`) : l3 instanceof Array ? c3(l3) : l3 instanceof Error && c3(l3.message);
      }
      l3 && l3.then && l3.then(function() {
        return c3();
      }, function(e3) {
        return c3(e3);
      });
    }, function(e3) {
      c2(e3);
    }, a2);
  }, t2.getType = function(e3) {
    if (e3.type === void 0 && e3.pattern instanceof RegExp && (e3.type = `pattern`), typeof e3.validator != `function` && e3.type && !ki.hasOwnProperty(e3.type)) throw Error(Jr(`Unknown rule type %s`, e3.type));
    return e3.type || `string`;
  }, t2.getValidationMethod = function(e3) {
    if (typeof e3.validator == `function`) return e3.validator;
    var t3 = Object.keys(e3), n2 = t3.indexOf(`message`);
    return n2 !== -1 && t3.splice(n2, 1), t3.length === 1 && t3[0] === `required` ? ki.required : ki[this.getType(e3)] || void 0;
  }, e2;
})();
Mi.register = function(e2, t2) {
  if (typeof t2 != `function`) throw Error(`Cannot register a validator by type, validator is not a function`);
  ki[e2] = t2;
}, Mi.warning = Kr, Mi.messages = ji, Mi.validators = ki;
var { cubicBezierEaseInOut: Ni } = re;
function Pi({ name: e2 = `fade-down`, fromOffset: t2 = `-4px`, enterDuration: n2 = `.3s`, leaveDuration: r2 = `.3s`, enterCubicBezier: i2 = Ni, leaveCubicBezier: a2 = Ni } = {}) {
  return [x(`&.${e2}-transition-enter-from, &.${e2}-transition-leave-to`, { opacity: 0, transform: `translateY(${t2})` }), x(`&.${e2}-transition-enter-to, &.${e2}-transition-leave-from`, { opacity: 1, transform: `translateY(0)` }), x(`&.${e2}-transition-leave-active`, { transition: `opacity ${r2} ${a2}, transform ${r2} ${a2}` }), x(`&.${e2}-transition-enter-active`, { transition: `opacity ${n2} ${i2}, transform ${n2} ${i2}` })];
}
var Fi = k(`form-item`, `
 display: grid;
 line-height: var(--n-line-height);
`, [k(`form-item-label`, `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `, [C(`asterisk`, `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), C(`asterisk-placeholder`, `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), k(`form-item-blank`, `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), O(`auto-label-width`, [k(`form-item-label`, `white-space: nowrap;`)]), O(`left-labelled`, `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [k(`form-item-label`, `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [O(`reverse-columns-space`, `
 grid-template-columns: auto 1fr;
 `), O(`left-mark`, `
 grid-template-areas:
 "mark text"
 ". text";
 `), O(`right-mark`, `
 grid-template-areas: 
 "text mark"
 "text .";
 `), O(`right-hanging-mark`, `
 grid-template-areas: 
 "text mark"
 "text .";
 `), C(`text`, `
 grid-area: text; 
 `), C(`asterisk`, `
 grid-area: mark; 
 align-self: end;
 `)])]), O(`top-labelled`, `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [O(`no-label`, `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), k(`form-item-label`, `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), k(`form-item-blank`, `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), k(`form-item-feedback-wrapper`, `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [x(`&:not(:empty)`, `
 padding: var(--n-feedback-padding);
 `), k(`form-item-feedback`, { transition: `color .3s var(--n-bezier)`, color: `var(--n-feedback-text-color)` }, [O(`warning`, { color: `var(--n-feedback-text-color-warning)` }), O(`error`, { color: `var(--n-feedback-text-color-error)` }), Pi({ fromOffset: `-3px`, enterDuration: `.3s`, leaveDuration: `.2s` })])])]);
function Ii(e2) {
  let t2 = Tt(Mr, null);
  return { mergedSize: W(() => e2.size === void 0 ? (t2 == null ? void 0 : t2.props.size) === void 0 ? `medium` : t2.props.size : e2.size) };
}
function Li(e2) {
  let t2 = Tt(Mr, null), n2 = W(() => {
    let { labelPlacement: n3 } = e2;
    return n3 === void 0 ? (t2 == null ? void 0 : t2.props.labelPlacement) ? t2.props.labelPlacement : `top` : n3;
  }), r2 = W(() => n2.value === `left` && (e2.labelWidth === `auto` || (t2 == null ? void 0 : t2.props.labelWidth) === `auto`)), i2 = W(() => {
    if (n2.value === `top`) return;
    let { labelWidth: i3 } = e2;
    if (i3 !== void 0 && i3 !== `auto`) return Ie(i3);
    if (r2.value) {
      let e3 = t2 == null ? void 0 : t2.maxChildLabelWidthRef.value;
      return e3 === void 0 ? void 0 : Ie(e3);
    }
    if ((t2 == null ? void 0 : t2.props.labelWidth) !== void 0) return Ie(t2.props.labelWidth);
  }), a2 = W(() => {
    let { labelAlign: n3 } = e2;
    if (n3) return n3;
    if (t2 == null ? void 0 : t2.props.labelAlign) return t2.props.labelAlign;
  }), o2 = W(() => {
    var _a2;
    return [(_a2 = e2.labelProps) == null ? void 0 : _a2.style, e2.labelStyle, { width: i2.value }];
  }), s2 = W(() => {
    let { showRequireMark: n3 } = e2;
    return n3 === void 0 ? t2 == null ? void 0 : t2.props.showRequireMark : n3;
  }), c2 = W(() => {
    let { requireMarkPlacement: n3 } = e2;
    return n3 === void 0 ? (t2 == null ? void 0 : t2.props.requireMarkPlacement) || `right` : n3;
  }), l2 = I(false), u2 = I(false);
  return { validationErrored: l2, validationWarned: u2, mergedLabelStyle: o2, mergedLabelPlacement: n2, mergedLabelAlign: a2, mergedShowRequireMark: s2, mergedRequireMarkPlacement: c2, mergedValidationStatus: W(() => {
    let { validationStatus: t3 } = e2;
    if (t3 !== void 0) return t3;
    if (l2.value) return `error`;
    if (u2.value) return `warning`;
  }), mergedShowFeedback: W(() => {
    let { showFeedback: n3 } = e2;
    return n3 === void 0 ? (t2 == null ? void 0 : t2.props.showFeedback) === void 0 ? true : t2.props.showFeedback : n3;
  }), mergedShowLabel: W(() => {
    let { showLabel: n3 } = e2;
    return n3 === void 0 ? (t2 == null ? void 0 : t2.props.showLabel) === void 0 ? true : t2.props.showLabel : n3;
  }), isAutoLabelWidth: r2 };
}
function Ri(e2) {
  let t2 = Tt(Mr, null), n2 = W(() => {
    let { rulePath: t3 } = e2;
    if (t3 !== void 0) return t3;
    let { path: n3 } = e2;
    if (n3 !== void 0) return n3;
  }), r2 = W(() => {
    let r3 = [], { rule: i3 } = e2;
    if (i3 !== void 0 && (Array.isArray(i3) ? r3.push(...i3) : r3.push(i3)), t2) {
      let { rules: e3 } = t2.props, { value: i4 } = n2;
      if (e3 !== void 0 && i4 !== void 0) {
        let t3 = Be(e3, i4);
        t3 !== void 0 && (Array.isArray(t3) ? r3.push(...t3) : r3.push(t3));
      }
    }
    return r3;
  }), i2 = W(() => r2.value.some((e3) => e3.required));
  return { mergedRules: r2, mergedRequired: W(() => i2.value || e2.required) };
}
var zi = function(e2, t2, n2, r2) {
  function i2(e3) {
    return e3 instanceof n2 ? e3 : new n2(function(t3) {
      t3(e3);
    });
  }
  return new (n2 || (n2 = Promise))(function(n3, a2) {
    function o2(e3) {
      try {
        c2(r2.next(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function s2(e3) {
      try {
        c2(r2.throw(e3));
      } catch (e4) {
        a2(e4);
      }
    }
    function c2(e3) {
      e3.done ? n3(e3.value) : i2(e3.value).then(o2, s2);
    }
    c2((r2 = r2.apply(e2, t2 || [])).next());
  });
};
const Bi = Object.assign(Object.assign({}, E.props), { label: String, labelWidth: [Number, String], labelStyle: [String, Object], labelAlign: String, labelPlacement: String, path: String, first: Boolean, rulePath: String, required: Boolean, showRequireMark: { type: Boolean, default: void 0 }, requireMarkPlacement: String, showFeedback: { type: Boolean, default: void 0 }, rule: [Object, Array], size: String, ignorePathChange: Boolean, validationStatus: String, feedback: String, feedbackClass: String, feedbackStyle: [String, Object], showLabel: { type: Boolean, default: void 0 }, labelProps: Object, contentClass: String, contentStyle: [String, Object] });
i(Bi);
function Vi(e2, n2) {
  return (...r2) => {
    try {
      let i2 = e2(...r2);
      return !n2 && (typeof i2 == `boolean` || i2 instanceof Error || Array.isArray(i2)) || (i2 == null ? void 0 : i2.then) ? i2 : (i2 === void 0 || t(`form-item/validate`, `You return a ${typeof i2} typed value in the validator method, which is not recommended. Please use ${n2 ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), true);
    } catch (e3) {
      t(`form-item/validate`, "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(e3);
      return;
    }
  };
}
var Hi = U({ name: `FormItem`, props: Bi, setup(e2) {
  Jt(Nr, `formItems`, L(e2, `path`));
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = de(e2), r2 = Tt(Mr, null), i2 = Ii(e2), a2 = Li(e2), { validationErrored: o2, validationWarned: s2 } = a2, { mergedRequired: c2, mergedRules: l2 } = Ri(e2), { mergedSize: u2 } = i2, { mergedLabelPlacement: d2, mergedLabelAlign: f2, mergedRequireMarkPlacement: p2 } = a2, m2 = I([]), h2 = I(Ke()), g2 = r2 ? L(r2.props, `disabled`) : I(false), _2 = E(`Form`, `-form-item`, Fi, Wt, e2, t2);
  at(L(e2, `path`), () => {
    e2.ignorePathChange || v2();
  });
  function v2() {
    m2.value = [], o2.value = false, s2.value = false, e2.feedback && (h2.value = Ke());
  }
  let y2 = (...t3) => zi(this, [...t3], void 0, function* (t4 = null, n3 = () => true, i3 = { suppressWarning: true }) {
    let { path: a3 } = e2;
    i3 ? i3.first || (i3.first = e2.first) : i3 = {};
    let { value: c3 } = l2, u3 = r2 ? Be(r2.props.model, a3 || ``) : void 0, d3 = {}, f3 = {}, p3 = (t4 ? c3.filter((e3) => Array.isArray(e3.trigger) ? e3.trigger.includes(t4) : e3.trigger === t4) : c3).filter(n3).map((e3, t5) => {
      let n4 = Object.assign({}, e3);
      if (n4.validator && (n4.validator = Vi(n4.validator, false)), n4.asyncValidator && (n4.asyncValidator = Vi(n4.asyncValidator, true)), n4.renderMessage) {
        let e4 = `__renderMessage__${t5}`;
        f3[e4] = n4.message, n4.message = e4, d3[e4] = n4.renderMessage;
      }
      return n4;
    }), h3 = p3.filter((e3) => e3.level !== `warning`), g3 = p3.filter((e3) => e3.level === `warning`), _3 = { valid: true, errors: void 0, warnings: void 0 };
    if (!p3.length) return _3;
    let y3 = a3 ?? `__n_no_path__`, b3 = new Mi({ [y3]: h3 }), x3 = new Mi({ [y3]: g3 }), { validateMessages: S3 } = (r2 == null ? void 0 : r2.props) || {};
    S3 && (b3.messages(S3), x3.messages(S3));
    let C3 = (e3) => {
      m2.value = e3.map((e4) => {
        let t5 = (e4 == null ? void 0 : e4.message) || ``;
        return { key: t5, render: () => t5.startsWith(`__renderMessage__`) ? d3[t5]() : t5 };
      }), e3.forEach((e4) => {
        var _a2;
        ((_a2 = e4.message) == null ? void 0 : _a2.startsWith(`__renderMessage__`)) && (e4.message = f3[e4.message]);
      });
    };
    if (h3.length) {
      let e3 = yield new Promise((e4) => {
        b3.validate({ [y3]: u3 }, i3, e4);
      });
      (e3 == null ? void 0 : e3.length) && (_3.valid = false, _3.errors = e3, C3(e3));
    }
    if (g3.length && !_3.errors) {
      let e3 = yield new Promise((e4) => {
        x3.validate({ [y3]: u3 }, i3, e4);
      });
      (e3 == null ? void 0 : e3.length) && (C3(e3), _3.warnings = e3);
    }
    return !_3.errors && !_3.warnings ? v2() : (o2.value = !!_3.errors, s2.value = !!_3.warnings), _3;
  });
  function b2() {
    y2(`blur`);
  }
  function x2() {
    y2(`change`);
  }
  function S2() {
    y2(`focus`);
  }
  function C2() {
    y2(`input`);
  }
  function T2(e3, t3) {
    return zi(this, void 0, void 0, function* () {
      let n3, r3, i3, a3;
      return typeof e3 == `string` ? (n3 = e3, r3 = t3) : typeof e3 == `object` && e3 && (n3 = e3.trigger, r3 = e3.callback, i3 = e3.shouldRuleBeApplied, a3 = e3.options), yield new Promise((e4, t4) => {
        y2(n3, i3, a3).then(({ valid: n4, errors: i4, warnings: a4 }) => {
          n4 ? (r3 && r3(void 0, { warnings: a4 }), e4({ warnings: a4 })) : (r3 && r3(i4, { warnings: a4 }), t4(i4));
        });
      });
    });
  }
  et($t, { path: L(e2, `path`), disabled: g2, mergedSize: i2.mergedSize, mergedValidationStatus: a2.mergedValidationStatus, restoreValidation: v2, handleContentBlur: b2, handleContentChange: x2, handleContentFocus: S2, handleContentInput: C2 });
  let ee2 = { validate: T2, restoreValidation: v2, internalValidate: y2 }, te2 = I(null);
  nt(() => {
    if (!a2.isAutoLabelWidth.value) return;
    let e3 = te2.value;
    if (e3 !== null) {
      let t3 = e3.style.whiteSpace;
      e3.style.whiteSpace = `nowrap`, e3.style.width = ``, r2 == null ? void 0 : r2.deriveMaxChildLabelWidth(Number(getComputedStyle(e3).width.slice(0, -2))), e3.style.whiteSpace = t3;
    }
  });
  let ne2 = W(() => {
    let { value: e3 } = u2, { value: t3 } = d2, n3 = t3 === `top` ? `vertical` : `horizontal`, { common: { cubicBezierEaseInOut: r3 }, self: { labelTextColor: i3, asteriskColor: a3, lineHeight: o3, feedbackTextColor: s3, feedbackTextColorWarning: c3, feedbackTextColorError: l3, feedbackPadding: p3, labelFontWeight: m3, [w(`labelHeight`, e3)]: h3, [w(`blankHeight`, e3)]: g3, [w(`feedbackFontSize`, e3)]: v3, [w(`feedbackHeight`, e3)]: y3, [w(`labelPadding`, n3)]: b3, [w(`labelTextAlign`, n3)]: x3, [w(w(`labelFontSize`, t3), e3)]: S3 } } = _2.value, C3 = f2.value ?? x3;
    return t3 === `top` && (C3 = C3 === `right` ? `flex-end` : `flex-start`), { "--n-bezier": r3, "--n-line-height": o3, "--n-blank-height": g3, "--n-label-font-size": S3, "--n-label-text-align": C3, "--n-label-height": h3, "--n-label-padding": b3, "--n-label-font-weight": m3, "--n-asterisk-color": a3, "--n-label-text-color": i3, "--n-feedback-padding": p3, "--n-feedback-font-size": v3, "--n-feedback-height": y3, "--n-feedback-text-color": s3, "--n-feedback-text-color-warning": c3, "--n-feedback-text-color-error": l3 };
  }), O2 = n2 ? D(`form-item`, W(() => {
    var _a2;
    return `${u2.value[0]}${d2.value[0]}${((_a2 = f2.value) == null ? void 0 : _a2[0]) || ``}`;
  }), ne2, e2) : void 0, re2 = W(() => d2.value === `left` && p2.value === `left` && f2.value === `left`);
  return Object.assign(Object.assign(Object.assign(Object.assign({ labelElementRef: te2, mergedClsPrefix: t2, mergedRequired: c2, feedbackId: h2, renderExplains: m2, reverseColSpace: re2 }, a2), i2), ee2), { cssVars: n2 ? void 0 : ne2, themeClass: O2 == null ? void 0 : O2.themeClass, onRender: O2 == null ? void 0 : O2.onRender });
}, render() {
  let { $slots: e2, mergedClsPrefix: t2, mergedShowLabel: n2, mergedShowRequireMark: r2, mergedRequireMarkPlacement: i2, onRender: a2 } = this, o2 = r2 === void 0 ? this.mergedRequired : r2;
  return a2 == null ? void 0 : a2(), V(`div`, { class: [`${t2}-form-item`, this.themeClass, `${t2}-form-item--${this.mergedSize}-size`, `${t2}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${t2}-form-item--auto-label-width`, !n2 && `${t2}-form-item--no-label`], style: this.cssVars }, n2 && (() => {
    let e3 = this.$slots.label ? this.$slots.label() : this.label;
    if (!e3) return null;
    let n3 = V(`span`, { class: `${t2}-form-item-label__text` }, e3), r3 = o2 ? V(`span`, { class: `${t2}-form-item-label__asterisk` }, i2 === `left` ? `*\xA0` : `\xA0*`) : i2 === `right-hanging` && V(`span`, { class: `${t2}-form-item-label__asterisk-placeholder` }, `\xA0*`), { labelProps: a3 } = this;
    return V(`label`, Object.assign({}, a3, { class: [a3 == null ? void 0 : a3.class, `${t2}-form-item-label`, `${t2}-form-item-label--${i2}-mark`, this.reverseColSpace && `${t2}-form-item-label--reverse-columns-space`], style: this.mergedLabelStyle, ref: `labelElementRef` }), i2 === `left` ? [r3, n3] : [n3, r3]);
  })(), V(`div`, { class: [`${t2}-form-item-blank`, this.contentClass, this.mergedValidationStatus && `${t2}-form-item-blank--${this.mergedValidationStatus}`], style: this.contentStyle }, e2), this.mergedShowFeedback ? V(`div`, { key: this.feedbackId, style: this.feedbackStyle, class: [`${t2}-form-item-feedback-wrapper`, this.feedbackClass] }, V(it, { name: `fade-down-transition`, mode: `out-in` }, { default: () => {
    let { mergedValidationStatus: n3 } = this;
    return j(e2.feedback, (e3) => {
      var _a2;
      let { feedback: r3 } = this, i3 = e3 || r3 ? V(`div`, { key: `__feedback__`, class: `${t2}-form-item-feedback__line` }, e3 || r3) : this.renderExplains.length ? (_a2 = this.renderExplains) == null ? void 0 : _a2.map(({ key: e4, render: n4 }) => V(`div`, { key: e4, class: `${t2}-form-item-feedback__line` }, n4())) : null;
      return i3 ? n3 === `warning` ? V(`div`, { key: `controlled-warning`, class: `${t2}-form-item-feedback ${t2}-form-item-feedback--warning` }, i3) : n3 === `error` ? V(`div`, { key: `controlled-error`, class: `${t2}-form-item-feedback ${t2}-form-item-feedback--error` }, i3) : n3 === `success` ? V(`div`, { key: `controlled-success`, class: `${t2}-form-item-feedback ${t2}-form-item-feedback--success` }, i3) : V(`div`, { key: `controlled-default`, class: `${t2}-form-item-feedback` }, i3) : null;
    });
  } })) : null);
} });
const Ui = f(`n-grid`), Wi = { span: { type: [Number, String], default: 1 }, offset: { type: [Number, String], default: 0 }, suffix: Boolean, privateOffset: Number, privateSpan: Number, privateColStart: Number, privateShow: { type: Boolean, default: true } };
i(Wi);
var Gi = U({ __GRID_ITEM__: true, name: `GridItem`, alias: [`Gi`], props: Wi, setup() {
  let { isSsrRef: e2, xGapRef: t2, itemStyleRef: n2, overflowRef: r2, layoutShiftDisabledRef: i2 } = Tt(Ui), a2 = _t();
  return { overflow: r2, itemStyle: n2, layoutShiftDisabled: i2, mergedXGap: W(() => ie(t2.value || 0)), deriveStyle: () => {
    e2.value;
    let { privateSpan: n3 = 1, privateShow: r3 = true, privateColStart: i3 = void 0, privateOffset: o2 = 0 } = a2.vnode.props, { value: s2 } = t2, c2 = ie(s2 || 0);
    return { display: r3 ? `` : `none`, gridColumn: `${i3 ?? `span ${n3}`} / span ${n3}`, marginLeft: o2 ? `calc((100% - (${n3} - 1) * ${c2}) / ${n3} * ${o2} + ${c2} * ${o2})` : `` };
  } };
}, render() {
  var _a2;
  var e2;
  if (this.layoutShiftDisabled) {
    let { span: e3, offset: t2, mergedXGap: n2 } = this;
    return V(`div`, { style: { gridColumn: `span ${e3} / span ${e3}`, marginLeft: t2 ? `calc((100% - (${e3} - 1) * ${n2}) / ${e3} * ${t2} + ${n2} * ${t2})` : `` } }, this.$slots);
  }
  return V(`div`, { style: [this.itemStyle, this.deriveStyle()] }, (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2, { overflow: this.overflow }));
} });
const Ki = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 };
var qi = 24, Ji = `__ssr__`, Yi = U({ name: `Grid`, inheritAttrs: false, props: { layoutShiftDisabled: Boolean, responsive: { type: [String, Boolean], default: `self` }, cols: { type: [Number, String], default: qi }, itemResponsive: Boolean, collapsed: Boolean, collapsedRows: { type: Number, default: 1 }, itemStyle: [Object, String], xGap: { type: [Number, String], default: 0 }, yGap: { type: [Number, String], default: 0 } }, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedBreakpointsRef: n2 } = de(e2), r2 = /^\d+$/, i2 = I(void 0), a2 = Ln((n2 == null ? void 0 : n2.value) || Ki), o2 = Fe(() => !!(e2.itemResponsive || !r2.test(e2.cols.toString()) || !r2.test(e2.xGap.toString()) || !r2.test(e2.yGap.toString()))), s2 = W(() => {
    if (o2.value) return e2.responsive === `self` ? i2.value : a2.value;
  }), c2 = Fe(() => Number(A(e2.cols.toString(), s2.value)) ?? qi), l2 = Fe(() => A(e2.xGap.toString(), s2.value)), u2 = Fe(() => A(e2.yGap.toString(), s2.value)), d2 = (e3) => {
    i2.value = e3.contentRect.width;
  }, f2 = (e3) => {
    Ue(d2, e3);
  }, p2 = I(false), m2 = W(() => {
    if (e2.responsive === `self`) return f2;
  }), h2 = I(false), g2 = I();
  return nt(() => {
    let { value: e3 } = g2;
    e3 && e3.hasAttribute(Ji) && (e3.removeAttribute(Ji), h2.value = true);
  }), et(Ui, { layoutShiftDisabledRef: L(e2, `layoutShiftDisabled`), isSsrRef: h2, itemStyleRef: L(e2, `itemStyle`), xGapRef: l2, overflowRef: p2 }), { isSsr: !F, contentEl: g2, mergedClsPrefix: t2, style: W(() => e2.layoutShiftDisabled ? { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${e2.cols}, minmax(0, 1fr))`, columnGap: ie(e2.xGap), rowGap: ie(e2.yGap) } : { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${c2.value}, minmax(0, 1fr))`, columnGap: ie(l2.value), rowGap: ie(u2.value) }), isResponsive: o2, responsiveQuery: s2, responsiveCols: c2, handleResize: m2, overflow: p2 };
}, render() {
  if (this.layoutShiftDisabled) return V(`div`, Et({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style }, this.$attrs), this.$slots);
  let e2 = () => {
    var _a2, _b, _c, _d;
    this.overflow = false;
    let e3 = Ze(rn(this)), t2 = [], { collapsed: n2, collapsedRows: r2, responsiveCols: i2, responsiveQuery: a2 } = this;
    e3.forEach((e4) => {
      var _a3, _b2, _c2, _d2;
      if (((_a3 = e4 == null ? void 0 : e4.type) == null ? void 0 : _a3.__GRID_ITEM__) !== true) return;
      if (Hn(e4)) {
        let n4 = ht(e4);
        n4.props ? n4.props.privateShow = false : n4.props = { privateShow: false }, t2.push({ child: n4, rawChildSpan: 0 });
        return;
      }
      e4.dirs = ((_b2 = e4.dirs) == null ? void 0 : _b2.filter(({ dir: e5 }) => e5 !== mt)) || null, ((_c2 = e4.dirs) == null ? void 0 : _c2.length) === 0 && (e4.dirs = null);
      let n3 = ht(e4), r3 = Number(A((_d2 = n3.props) == null ? void 0 : _d2.span, a2) ?? 1);
      r3 !== 0 && t2.push({ child: n3, rawChildSpan: r3 });
    });
    let o2 = 0, s2 = (_a2 = t2[t2.length - 1]) == null ? void 0 : _a2.child;
    if (s2 == null ? void 0 : s2.props) {
      let e4 = (_b = s2.props) == null ? void 0 : _b.suffix;
      e4 !== void 0 && e4 !== false && (o2 = Number(A((_c = s2.props) == null ? void 0 : _c.span, a2) ?? 1), s2.props.privateSpan = o2, s2.props.privateColStart = i2 + 1 - o2, s2.props.privateShow = s2.props.privateShow ?? true);
    }
    let c2 = 0, l2 = false;
    for (let { child: e4, rawChildSpan: s3 } of t2) {
      if (l2 && (this.overflow = true), !l2) {
        let t3 = Number(A((_d = e4.props) == null ? void 0 : _d.offset, a2) ?? 0), u2 = Math.min(s3 + t3, i2);
        if (e4.props ? (e4.props.privateSpan = u2, e4.props.privateOffset = t3) : e4.props = { privateSpan: u2, privateOffset: t3 }, n2) {
          let e5 = c2 % i2;
          u2 + e5 > i2 && (c2 += i2 - e5), u2 + c2 + o2 > r2 * i2 ? l2 = true : c2 += u2;
        }
      }
      l2 && (e4.props ? e4.props.privateShow !== true && (e4.props.privateShow = false) : e4.props = { privateShow: false });
    }
    return V(`div`, Et({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style, [Ji]: this.isSsr || void 0 }, this.$attrs), t2.map(({ child: e4 }) => e4));
  };
  return this.isResponsive && this.responsive === `self` ? V(Le, { onResize: this.handleResize }, { default: e2 }) : e2();
} }), Xi = x([k(`input-number-suffix`, `
 display: inline-block;
 margin-right: 10px;
 `), k(`input-number-prefix`, `
 display: inline-block;
 margin-left: 10px;
 `)]);
function Zi(e2) {
  return e2 == null || typeof e2 == `string` && e2.trim() === `` ? null : Number(e2);
}
function Qi(e2) {
  return e2.includes(`.`) && (/^(-)?\d+.*(\.|0)$/.test(e2) || /^-?\d*$/.test(e2)) || e2 === `-` || e2 === `-0`;
}
function $i(e2) {
  return e2 == null ? true : !Number.isNaN(e2);
}
function ea(e2, t2) {
  return typeof e2 == `number` ? t2 === void 0 ? String(e2) : e2.toFixed(t2) : ``;
}
function ta(e2) {
  if (e2 === null) return null;
  if (typeof e2 == `number`) return e2;
  {
    let t2 = Number(e2);
    return Number.isNaN(t2) ? null : t2;
  }
}
var na = 800, ra = 100, ia = U({ name: `InputNumber`, props: Object.assign(Object.assign({}, E.props), { autofocus: Boolean, loading: { type: Boolean, default: void 0 }, placeholder: String, defaultValue: { type: Number, default: null }, value: Number, step: { type: [Number, String], default: 1 }, min: [Number, String], max: [Number, String], size: String, disabled: { type: Boolean, default: void 0 }, validator: Function, bordered: { type: Boolean, default: void 0 }, showButton: { type: Boolean, default: true }, buttonPlacement: { type: String, default: `right` }, inputProps: Object, readonly: Boolean, clearable: Boolean, keyboard: { type: Object, default: {} }, updateValueOnInput: { type: Boolean, default: true }, round: { type: Boolean, default: void 0 }, parse: Function, format: Function, precision: Number, status: String, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClear: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedBorderedRef: t2, mergedClsPrefixRef: n2, mergedRtlRef: i2 } = de(e2), a2 = E(`InputNumber`, `-input-number`, Xi, Rt, e2, n2), { localeRef: o2 } = ln(`InputNumber`), s2 = Qt(e2), { mergedSizeRef: c2, mergedDisabledRef: l2, mergedStatusRef: u2 } = s2, f2 = I(null), p2 = I(null), m2 = I(null), h2 = I(e2.defaultValue), g2 = ke(L(e2, `value`), h2), _2 = I(``), v2 = (e3) => {
    let t3 = String(e3).split(`.`)[1];
    return t3 ? t3.length : 0;
  }, y2 = (t3) => {
    let n3 = [e2.min, e2.max, e2.step, t3].map((e3) => e3 === void 0 ? 0 : v2(e3));
    return Math.max(...n3);
  }, b2 = Fe(() => {
    let { placeholder: t3 } = e2;
    return t3 === void 0 ? o2.value.placeholder : t3;
  }), x2 = Fe(() => {
    let t3 = ta(e2.step);
    return t3 === null || t3 === 0 ? 1 : Math.abs(t3);
  }), S2 = Fe(() => {
    let t3 = ta(e2.min);
    return t3 === null ? null : t3;
  }), C2 = Fe(() => {
    let t3 = ta(e2.max);
    return t3 === null ? null : t3;
  }), w2 = () => {
    let { value: t3 } = g2;
    if ($i(t3)) {
      let { format: n3, precision: r2 } = e2;
      n3 ? _2.value = n3(t3) : t3 === null || r2 === void 0 || v2(t3) > r2 ? _2.value = ea(t3, void 0) : _2.value = ea(t3, r2);
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
    if (i3 && Qi(a3)) return false;
    let o3 = (e2.parse || Zi)(a3);
    if (o3 === null) return n3 && T2(null), null;
    if ($i(o3)) {
      let a4 = v2(o3), { precision: s3 } = e2;
      if (s3 !== void 0 && s3 < a4 && !r2) return false;
      let c3 = Number.parseFloat((o3 + t3).toFixed(s3 ?? y2(o3)));
      if ($i(c3)) {
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
  function re2(t3) {
    let { onFocus: n3 } = e2, { nTriggerFormFocus: i3 } = s2;
    n3 && r(n3, t3), i3();
  }
  function ie2(t3) {
    var _a2, _b;
    if (t3.target === ((_a2 = f2.value) == null ? void 0 : _a2.wrapperElRef)) return;
    let n3 = D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    if (n3 !== false) {
      let e3 = (_b = f2.value) == null ? void 0 : _b.inputElRef;
      e3 && (e3.value = String(n3 || ``)), g2.value === n3 && w2();
    } else w2();
    let { onBlur: i3 } = e2, { nTriggerFormBlur: a3 } = s2;
    i3 && r(i3, t3), a3(), lt(() => {
      w2();
    });
  }
  function k2(t3) {
    let { onClear: n3 } = e2;
    n3 && r(n3, t3);
  }
  function ae2() {
    let { value: t3 } = O2;
    if (!t3) {
      me2();
      return;
    }
    let { value: n3 } = g2;
    if (n3 === null) e2.validator || T2(ce2());
    else {
      let { value: e3 } = x2;
      D2({ offset: e3, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  function oe2() {
    let { value: t3 } = ne2;
    if (!t3) {
      M2();
      return;
    }
    let { value: n3 } = g2;
    if (n3 === null) e2.validator || T2(ce2());
    else {
      let { value: e3 } = x2;
      D2({ offset: -e3, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  let A2 = re2, se2 = ie2;
  function ce2() {
    if (e2.validator) return null;
    let { value: t3 } = S2, { value: n3 } = C2;
    return t3 === null ? n3 === null ? 0 : Math.min(0, n3) : Math.max(0, t3);
  }
  function le2(e3) {
    k2(e3), T2(null);
  }
  function ue2(e3) {
    var _a2, _b;
    var t3;
    ((_a2 = m2.value) == null ? void 0 : _a2.$el.contains(e3.target)) && e3.preventDefault(), ((_b = p2.value) == null ? void 0 : _b.$el.contains(e3.target)) && e3.preventDefault(), (t3 = f2.value) == null || t3.activate();
  }
  let j2 = null, fe2 = null, pe2 = null;
  function M2() {
    pe2 && (pe2 = (window.clearTimeout(pe2), null)), j2 && (j2 = (window.clearInterval(j2), null));
  }
  let N2 = null;
  function me2() {
    N2 && (N2 = (window.clearTimeout(N2), null)), fe2 && (fe2 = (window.clearInterval(fe2), null));
  }
  function he2() {
    M2(), pe2 = window.setTimeout(() => {
      j2 = window.setInterval(() => {
        oe2();
      }, ra);
    }, na), Xe(`mouseup`, document, M2, { once: true });
  }
  function ge2() {
    me2(), N2 = window.setTimeout(() => {
      fe2 = window.setInterval(() => {
        ae2();
      }, ra);
    }, na), Xe(`mouseup`, document, me2, { once: true });
  }
  let _e2 = () => {
    fe2 || ae2();
  }, P2 = () => {
    j2 || oe2();
  };
  function ve2(t3) {
    var _a2;
    var n3;
    if (t3.key === `Enter`) {
      if (t3.target === ((_a2 = f2.value) == null ? void 0 : _a2.wrapperElRef)) return;
      D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ((n3 = f2.value) == null || n3.deactivate());
    } else if (t3.key === `ArrowUp`) {
      if (!O2.value || e2.keyboard.ArrowUp === false) return;
      t3.preventDefault(), D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ae2();
    } else if (t3.key === `ArrowDown`) {
      if (!ne2.value || e2.keyboard.ArrowDown === false) return;
      t3.preventDefault(), D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && oe2();
    }
  }
  function ye2(t3) {
    _2.value = t3, e2.updateValueOnInput && !e2.format && !e2.parse && e2.precision === void 0 && D2({ offset: 0, doUpdateIfValid: true, isInputing: true, fixPrecision: false });
  }
  at(g2, () => {
    w2();
  });
  let be2 = { focus: () => {
    var _a2;
    return (_a2 = f2.value) == null ? void 0 : _a2.focus();
  }, blur: () => {
    var _a2;
    return (_a2 = f2.value) == null ? void 0 : _a2.blur();
  }, select: () => {
    var _a2;
    return (_a2 = f2.value) == null ? void 0 : _a2.select();
  } }, xe2 = ee(`InputNumber`, i2, n2);
  return Object.assign(Object.assign({}, be2), { rtlEnabled: xe2, inputInstRef: f2, minusButtonInstRef: p2, addButtonInstRef: m2, mergedClsPrefix: n2, mergedBordered: t2, uncontrolledValue: h2, mergedValue: g2, mergedPlaceholder: b2, displayedValueInvalid: te2, mergedSize: c2, mergedDisabled: l2, displayedValue: _2, addable: O2, minusable: ne2, mergedStatus: u2, handleFocus: A2, handleBlur: se2, handleClear: le2, handleMouseDown: ue2, handleAddClick: _e2, handleMinusClick: P2, handleAddMousedown: ge2, handleMinusMousedown: he2, handleKeyDown: ve2, handleUpdateDisplayedValue: ye2, mergedTheme: a2, inputThemeOverrides: { paddingSmall: `0 8px 0 10px`, paddingMedium: `0 8px 0 12px`, paddingLarge: `0 8px 0 14px` }, buttonThemeOverrides: W(() => {
    let { self: { iconColorDisabled: e3 } } = a2.value, [t3, n3, r2, i3] = d(e3);
    return { textColorTextDisabled: `rgb(${t3}, ${n3}, ${r2})`, opacityDisabled: `${i3}` };
  }) });
}, render() {
  let { mergedClsPrefix: e2, $slots: t2 } = this, n2 = () => V(nn, { text: true, disabled: !this.minusable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleMinusClick, onMousedown: this.handleMinusMousedown, ref: `minusButtonInstRef` }, { icon: () => m(t2[`minus-icon`], () => [V(le, { clsPrefix: e2 }, { default: () => V(Un, null) })]) }), r2 = () => V(nn, { text: true, disabled: !this.addable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleAddClick, onMousedown: this.handleAddMousedown, ref: `addButtonInstRef` }, { icon: () => m(t2[`add-icon`], () => [V(le, { clsPrefix: e2 }, { default: () => V(N, null) })]) });
  return V(`div`, { class: [`${e2}-input-number`, this.rtlEnabled && `${e2}-input-number--rtl`] }, V(P, { ref: `inputInstRef`, autofocus: this.autofocus, status: this.mergedStatus, bordered: this.mergedBordered, loading: this.loading, value: this.displayedValue, onUpdateValue: this.handleUpdateDisplayedValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, builtinThemeOverrides: this.inputThemeOverrides, size: this.mergedSize, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, readonly: this.readonly, round: this.round, textDecoration: this.displayedValueInvalid ? `line-through` : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onClear: this.handleClear, clearable: this.clearable, inputProps: this.inputProps, internalLoadingBeforeSuffix: true }, { prefix: () => {
    var _a2;
    return this.showButton && this.buttonPlacement === `both` ? [n2(), j(t2.prefix, (t3) => t3 ? V(`span`, { class: `${e2}-input-number-prefix` }, t3) : null)] : (_a2 = t2.prefix) == null ? void 0 : _a2.call(t2);
  }, suffix: () => {
    var _a2;
    return this.showButton ? [j(t2.suffix, (t3) => t3 ? V(`span`, { class: `${e2}-input-number-suffix` }, t3) : null), this.buttonPlacement === `right` ? n2() : null, r2()] : (_a2 = t2.suffix) == null ? void 0 : _a2.call(t2);
  } }));
} }), aa = k(`layout`, `
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
`, [k(`layout-scroll-container`, `
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
const oa = { embedded: Boolean, position: At, nativeScrollbar: { type: Boolean, default: true }, scrollbarProps: Object, onScroll: Function, contentClass: String, contentStyle: { type: [String, Object], default: `` }, hasSider: Boolean, siderPlacement: { type: String, default: `left` } }, sa = f(`n-layout`);
function ca(e2) {
  return U({ name: e2 ? `LayoutContent` : `Layout`, props: Object.assign(Object.assign({}, E.props), oa), setup(e3) {
    let t2 = I(null), n2 = I(null), { mergedClsPrefixRef: r2, inlineThemeDisabled: i2 } = de(e3), a2 = E(`Layout`, `-layout`, aa, Ft, e3, r2);
    function o2(r3, i3) {
      if (e3.nativeScrollbar) {
        let { value: e4 } = t2;
        e4 && (i3 === void 0 ? e4.scrollTo(r3) : e4.scrollTo(r3, i3));
      } else {
        let { value: e4 } = n2;
        e4 && e4.scrollTo(r3, i3);
      }
    }
    et(sa, e3);
    let s2 = 0, c2 = 0, l2 = (t3) => {
      var n3;
      let r3 = t3.target;
      s2 = r3.scrollLeft, c2 = r3.scrollTop, (n3 = e3.onScroll) == null || n3.call(e3, t3);
    };
    Oe(() => {
      if (e3.nativeScrollbar) {
        let e4 = t2.value;
        e4 && (e4.scrollTop = c2, e4.scrollLeft = s2);
      }
    });
    let u2 = { display: `flex`, flexWrap: `nowrap`, width: `100%`, flexDirection: `row` }, d2 = { scrollTo: o2 }, f2 = W(() => {
      let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = a2.value;
      return { "--n-bezier": t3, "--n-color": e3.embedded ? n3.colorEmbedded : n3.color, "--n-text-color": n3.textColor };
    }), p2 = i2 ? D(`layout`, W(() => e3.embedded ? `e` : ``), f2, e3) : void 0;
    return Object.assign({ mergedClsPrefix: r2, scrollableElRef: t2, scrollbarInstRef: n2, hasSiderStyle: u2, mergedTheme: a2, handleNativeElScroll: l2, cssVars: i2 ? void 0 : f2, themeClass: p2 == null ? void 0 : p2.themeClass, onRender: p2 == null ? void 0 : p2.onRender }, d2);
  }, render() {
    var t2;
    let { mergedClsPrefix: n2, hasSider: r2 } = this;
    (t2 = this.onRender) == null || t2.call(this);
    let i2 = r2 ? this.hasSiderStyle : void 0;
    return V(`div`, { class: [this.themeClass, e2 && `${n2}-layout-content`, `${n2}-layout`, `${n2}-layout--${this.position}-positioned`], style: this.cssVars }, this.nativeScrollbar ? V(`div`, { ref: `scrollableElRef`, class: [`${n2}-layout-scroll-container`, this.contentClass], style: [this.contentStyle, i2], onScroll: this.handleNativeElScroll }, this.$slots) : V(qe, Object.assign({}, this.scrollbarProps, { onScroll: this.onScroll, ref: `scrollbarInstRef`, theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: this.contentClass, contentStyle: [this.contentStyle, i2] }), this.$slots));
  } });
}
ca(false);
var la = ca(true), ua = k(`layout-footer`, `
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
 `)]), da = U({ name: `LayoutFooter`, props: Object.assign(Object.assign({}, E.props), { inverted: Boolean, position: At, bordered: Boolean }), setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = de(e2), r2 = E(`Layout`, `-layout-footer`, ua, Ft, e2, t2), i2 = W(() => {
    let { common: { cubicBezierEaseInOut: t3 }, self: n3 } = r2.value, i3 = { "--n-bezier": t3 };
    return e2.inverted ? (i3[`--n-color`] = n3.footerColorInverted, i3[`--n-text-color`] = n3.textColorInverted, i3[`--n-border-color`] = n3.footerBorderColorInverted) : (i3[`--n-color`] = n3.footerColor, i3[`--n-text-color`] = n3.textColor, i3[`--n-border-color`] = n3.footerBorderColor), i3;
  }), a2 = n2 ? D(`layout-footer`, W(() => e2.inverted ? `a` : `b`), i2, e2) : void 0;
  return { mergedClsPrefix: t2, cssVars: n2 ? void 0 : i2, themeClass: a2 == null ? void 0 : a2.themeClass, onRender: a2 == null ? void 0 : a2.onRender };
}, render() {
  var e2;
  let { mergedClsPrefix: t2 } = this;
  return (e2 = this.onRender) == null || e2.call(this), V(`div`, { class: [`${t2}-layout-footer`, this.themeClass, this.position && `${t2}-layout-footer--${this.position}-positioned`, this.bordered && `${t2}-layout-footer--bordered`], style: this.cssVars }, this.$slots);
} });
const fa = f(`n-popconfirm`), pa = { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true } }, ma = i(pa);
var ha = U({ name: `NPopconfirmPanel`, props: pa, setup(e2) {
  let { localeRef: t2 } = ln(`Popconfirm`), { inlineThemeDisabled: n2 } = de(), { mergedClsPrefixRef: r2, mergedThemeRef: i2, props: a2 } = Tt(fa), o2 = W(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { fontSize: t3, iconSize: n3, iconColor: r3 } } = i2.value;
    return { "--n-bezier": e3, "--n-font-size": t3, "--n-icon-size": n3, "--n-icon-color": r3 };
  }), s2 = n2 ? D(`popconfirm-panel`, void 0, o2, a2) : void 0;
  return Object.assign(Object.assign({}, ln(`Popconfirm`)), { mergedClsPrefix: r2, cssVars: n2 ? void 0 : o2, localizedPositiveText: W(() => e2.positiveText || t2.value.positiveText), localizedNegativeText: W(() => e2.negativeText || t2.value.negativeText), positiveButtonProps: L(a2, `positiveButtonProps`), negativeButtonProps: L(a2, `negativeButtonProps`), handlePositiveClick(t3) {
    e2.onPositiveClick(t3);
  }, handleNegativeClick(t3) {
    e2.onNegativeClick(t3);
  }, themeClass: s2 == null ? void 0 : s2.themeClass, onRender: s2 == null ? void 0 : s2.onRender });
}, render() {
  var e2;
  let { mergedClsPrefix: t2, showIcon: n2, $slots: r2 } = this, i2 = m(r2.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && V(X, Object.assign({ size: `small`, onClick: this.handleNegativeClick }, this.negativeButtonProps), { default: () => this.localizedNegativeText }), this.positiveText !== null && V(X, Object.assign({ size: `small`, type: `primary`, onClick: this.handlePositiveClick }, this.positiveButtonProps), { default: () => this.localizedPositiveText })]);
  return (e2 = this.onRender) == null || e2.call(this), V(`div`, { class: [`${t2}-popconfirm__panel`, this.themeClass], style: this.cssVars }, j(r2.default, (e3) => n2 || e3 ? V(`div`, { class: `${t2}-popconfirm__body` }, n2 ? V(`div`, { class: `${t2}-popconfirm__icon` }, m(r2.icon, () => [V(le, { clsPrefix: t2 }, { default: () => V(un, null) })])) : null, e3) : null), i2 ? V(`div`, { class: [`${t2}-popconfirm__action`] }, i2) : null);
} }), ga = k(`popconfirm`, [C(`body`, `
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
 `, [x(`&:not(:first-child)`, `margin-top: 8px`), k(`button`, [x(`&:not(:last-child)`, `margin-right: 8px;`)])])]), _a = U({ name: `Popconfirm`, props: Object.assign(Object.assign(Object.assign({}, E.props), Ge), { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, trigger: { type: String, default: `click` }, positiveButtonProps: Object, negativeButtonProps: Object, onPositiveClick: Function, onNegativeClick: Function }), slots: Object, __popover__: true, setup(e2) {
  let { mergedClsPrefixRef: t2 } = de(), n2 = E(`Popconfirm`, `-popconfirm`, ga, Vt, e2, t2), i2 = I(null);
  function a2(t3) {
    var _a2;
    if (!((_a2 = i2.value) == null ? void 0 : _a2.getMergedShow())) return;
    let { onPositiveClick: n3, "onUpdate:show": a3 } = e2;
    Promise.resolve(n3 ? n3(t3) : true).then((e3) => {
      var t4;
      e3 !== false && ((t4 = i2.value) == null || t4.setShow(false), a3 && r(a3, false));
    });
  }
  function o2(t3) {
    var _a2;
    if (!((_a2 = i2.value) == null ? void 0 : _a2.getMergedShow())) return;
    let { onNegativeClick: n3, "onUpdate:show": a3 } = e2;
    Promise.resolve(n3 ? n3(t3) : true).then((e3) => {
      var t4;
      e3 !== false && ((t4 = i2.value) == null || t4.setShow(false), a3 && r(a3, false));
    });
  }
  return et(fa, { mergedThemeRef: n2, mergedClsPrefixRef: t2, props: e2 }), { setShow(e3) {
    var t3;
    (t3 = i2.value) == null || t3.setShow(e3);
  }, syncPosition() {
    var e3;
    (e3 = i2.value) == null || e3.syncPosition();
  }, mergedTheme: n2, popoverInstRef: i2, handlePositiveClick: a2, handleNegativeClick: o2 };
}, render() {
  let { $slots: e2, $props: t2, mergedTheme: n2 } = this;
  return V(Ve, Object.assign({}, Mt(t2, ma), { theme: n2.peers.Popover, themeOverrides: n2.peerOverrides.Popover, internalExtraClass: [`popconfirm`], ref: `popoverInstRef` }), { trigger: e2.trigger, default: () => {
    let n3 = Qe(t2, ma);
    return V(ha, Object.assign({}, n3, { onPositiveClick: this.handlePositiveClick, onNegativeClick: this.handleNegativeClick }), e2);
  } });
} }), va = k(`split`, `
 display: flex;
 width: 100%;
 height: 100%;
`, [O(`horizontal`, `
 flex-direction: row;
 `), O(`vertical`, `
 flex-direction: column;
 `), k(`split-pane-1`, `
 overflow: hidden;
 `), k(`split-pane-2`, `
 overflow: hidden;
 flex: 1;
 `), C(`resize-trigger`, `
 background-color: var(--n-resize-trigger-color);
 transition: background-color .3s var(--n-bezier);
 `, [O(`hover`, `
 background-color: var(--n-resize-trigger-color-hover);
 `), x(`&:hover`, `
 background-color: var(--n-resize-trigger-color-hover);
 `)])]), ya = U({ name: `Split`, props: Object.assign(Object.assign({}, E.props), { direction: { type: String, default: `horizontal` }, resizeTriggerSize: { type: Number, default: 3 }, disabled: Boolean, defaultSize: { type: [String, Number], default: 0.5 }, "onUpdate:size": [Function, Array], onUpdateSize: [Function, Array], size: [String, Number], min: { type: [String, Number], default: 0 }, max: { type: [String, Number], default: 1 }, pane1Class: String, pane1Style: [Object, String], pane2Class: String, pane2Style: [Object, String], onDragStart: Function, onDragMove: Function, onDragEnd: Function, watchProps: Array }), slots: Object, setup(t2) {
  var _a2;
  let { mergedClsPrefixRef: n2, inlineThemeDisabled: i2 } = de(t2), a2 = E(`Split`, `-split`, va, Ht, t2, n2), o2 = W(() => {
    let { common: { cubicBezierEaseInOut: e2 }, self: { resizableTriggerColor: t3, resizableTriggerColorHover: n3 } } = a2.value;
    return { "--n-bezier": e2, "--n-resize-trigger-color": t3, "--n-resize-trigger-color-hover": n3 };
  }), s2 = I(null), c2 = I(false), l2 = L(t2, `size`), u2 = I(t2.defaultSize);
  ((_a2 = t2.watchProps) == null ? void 0 : _a2.includes(`defaultSize`)) && ct(() => u2.value = t2.defaultSize);
  let d2 = (e2) => {
    let n3 = t2[`onUpdate:size`];
    t2.onUpdateSize && r(t2.onUpdateSize, e2), n3 && r(n3, e2), u2.value = e2;
  }, f2 = ke(l2, u2), p2 = W(() => {
    let e2 = f2.value;
    if (typeof e2 == `string`) return { flex: `0 0 ${e2}` };
    if (typeof e2 == `number`) {
      let n3 = e2 * 100;
      return { flex: `0 0 calc(${n3}% - ${t2.resizeTriggerSize * n3 / 100}px)` };
    }
  }), m2 = W(() => t2.direction === `horizontal` ? { width: `${t2.resizeTriggerSize}px`, height: `100%` } : { width: `100%`, height: `${t2.resizeTriggerSize}px` }), h2 = W(() => {
    let e2 = t2.direction === `horizontal`;
    return { width: e2 ? `${t2.resizeTriggerSize}px` : ``, height: e2 ? `` : `${t2.resizeTriggerSize}px`, cursor: t2.direction === `horizontal` ? `col-resize` : `row-resize` };
  }), g2 = 0, _2 = (e2) => {
    e2.preventDefault(), c2.value = true, t2.onDragStart && t2.onDragStart(e2);
    let n3 = `mousemove`, r2 = `mouseup`, i3 = (e3) => {
      v2(e3), t2.onDragMove && t2.onDragMove(e3);
    }, a3 = () => {
      He(n3, document, i3), He(r2, document, a3), c2.value = false, t2.onDragEnd && t2.onDragEnd(e2), document.body.style.cursor = ``;
    };
    document.body.style.cursor = h2.value.cursor, Xe(n3, document, i3), Xe(r2, document, a3);
    let o3 = s2.value;
    if (o3) {
      let n4 = o3.getBoundingClientRect();
      g2 = t2.direction === `horizontal` ? e2.clientX - n4.left : n4.top - e2.clientY;
    }
    v2(e2);
  };
  function v2(n3) {
    var _a3, _b;
    let r2 = (_b = (_a3 = s2.value) == null ? void 0 : _a3.parentElement) == null ? void 0 : _b.getBoundingClientRect();
    if (!r2) return;
    let { direction: i3 } = t2, a3 = r2.width - t2.resizeTriggerSize, o3 = r2.height - t2.resizeTriggerSize, c3 = i3 === `horizontal` ? a3 : o3, l3 = i3 === `horizontal` ? n3.clientX - r2.left - g2 : n3.clientY - r2.top + g2, { min: u3, max: p3 } = t2, m3 = typeof u3 == `string` ? e(u3) : u3 * c3, h3 = typeof p3 == `string` ? e(p3) : p3 * c3, _3 = l3;
    _3 = Math.max(_3, m3), _3 = Math.min(_3, h3, c3), typeof f2.value == `string` ? d2(`${_3}px`) : d2(_3 / c3);
  }
  let y2 = i2 ? D(`split`, void 0, o2, t2) : void 0;
  return { themeClass: y2 == null ? void 0 : y2.themeClass, onRender: y2 == null ? void 0 : y2.onRender, cssVars: i2 ? void 0 : o2, resizeTriggerElRef: s2, isDragging: c2, mergedClsPrefix: n2, resizeTriggerWrapperStyle: h2, resizeTriggerStyle: m2, handleMouseDown: _2, firstPaneStyle: p2 };
}, render() {
  var _a2, _b;
  var e2, t2, n2;
  return (e2 = this.onRender) == null || e2.call(this), V(`div`, { class: [`${this.mergedClsPrefix}-split`, `${this.mergedClsPrefix}-split--${this.direction}`, this.themeClass], style: this.cssVars }, V(`div`, { class: [`${this.mergedClsPrefix}-split-pane-1`, this.pane1Class], style: [this.firstPaneStyle, this.pane1Style] }, (_a2 = (t2 = this.$slots)[1]) == null ? void 0 : _a2.call(t2)), !this.disabled && V(`div`, { ref: `resizeTriggerElRef`, class: `${this.mergedClsPrefix}-split__resize-trigger-wrapper`, style: this.resizeTriggerWrapperStyle, onMousedown: this.handleMouseDown }, m(this.$slots[`resize-trigger`], () => [V(`div`, { style: this.resizeTriggerStyle, class: [`${this.mergedClsPrefix}-split__resize-trigger`, this.isDragging && `${this.mergedClsPrefix}-split__resize-trigger--hover`] })])), V(`div`, { class: [`${this.mergedClsPrefix}-split-pane-2`, this.pane2Class], style: this.pane2Style }, (_b = (n2 = this.$slots)[2]) == null ? void 0 : _b.call(n2)));
} });
const ba = f(`n-tabs`), xa = { tab: [String, Number, Object, Function], name: { type: [String, Number], required: true }, disabled: Boolean, displayDirective: { type: String, default: `if` }, closable: { type: Boolean, default: void 0 }, tabProps: Object, label: [String, Number, Object, Function] };
var Sa = U({ __TAB_PANE__: true, name: `TabPane`, alias: [`TabPanel`], props: xa, slots: Object, setup(e2) {
  let t2 = Tt(ba, null);
  return t2 || ne(`tab-pane`, "`n-tab-pane` must be placed inside `n-tabs`."), { style: t2.paneStyleRef, class: t2.paneClassRef, mergedClsPrefix: t2.mergedClsPrefixRef };
}, render() {
  return V(`div`, { class: [`${this.mergedClsPrefix}-tab-pane`, this.class], style: this.style }, this.$slots);
} }), Ca = U({ __TAB__: true, inheritAttrs: false, name: `Tab`, props: Object.assign({ internalLeftPadded: Boolean, internalAddable: Boolean, internalCreatedByPane: Boolean }, Mt(xa, [`displayDirective`])), setup(e2) {
  let { mergedClsPrefixRef: t2, valueRef: n2, typeRef: r2, closableRef: i2, tabStyleRef: a2, addTabStyleRef: o2, tabClassRef: s2, addTabClassRef: c2, tabChangeIdRef: l2, onBeforeLeaveRef: u2, triggerRef: d2, handleAdd: f2, activateTab: p2, handleClose: m2 } = Tt(ba);
  return { trigger: d2, mergedClosable: W(() => {
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
  return V(`div`, { class: `${t2}-tabs-tab-wrapper` }, this.internalLeftPadded ? V(`div`, { class: `${t2}-tabs-tab-pad` }) : null, V(`div`, Object.assign({ key: n2, "data-name": n2, "data-disabled": r2 ? true : void 0 }, Et({ class: [`${t2}-tabs-tab`, o2 === n2 && `${t2}-tabs-tab--active`, r2 && `${t2}-tabs-tab--disabled`, s2 && `${t2}-tabs-tab--closable`, e2 && `${t2}-tabs-tab--addable`, e2 ? this.addTabClass : this.tabClass], onClick: c2 === `click` ? this.activateTab : void 0, onMouseenter: c2 === `hover` ? this.activateTab : void 0, style: e2 ? this.addStyle : this.style }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), V(`span`, { class: `${t2}-tabs-tab__label` }, e2 ? V(wt, null, V(`div`, { class: `${t2}-tabs-tab__height-placeholder` }, `\xA0`), V(le, { clsPrefix: t2 }, { default: () => V(N, null) })) : l2 ? l2() : typeof u2 == `object` ? u2 : en(u2 ?? n2)), s2 && this.type === `card` ? V(S, { clsPrefix: t2, class: `${t2}-tabs-tab__close`, onClick: this.handleClose, disabled: r2 }) : null));
} }), wa = k(`tabs`, `
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [O(`segment-type`, [k(`tabs-rail`, [x(`&.transition-disabled`, [k(`tabs-capsule`, `
 transition: none;
 `)])])]), O(`top`, [k(`tab-pane`, `
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]), O(`left`, [k(`tab-pane`, `
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]), O(`left, right`, `
 flex-direction: row;
 `, [k(`tabs-bar`, `
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), k(`tabs-tab`, `
 padding: var(--n-tab-padding-vertical); 
 `)]), O(`right`, `
 flex-direction: row-reverse;
 `, [k(`tab-pane`, `
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `), k(`tabs-bar`, `
 left: 0;
 `)]), O(`bottom`, `
 flex-direction: column-reverse;
 justify-content: flex-end;
 `, [k(`tab-pane`, `
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `), k(`tabs-bar`, `
 top: 0;
 `)]), k(`tabs-rail`, `
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [k(`tabs-capsule`, `
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `), k(`tabs-tab-wrapper`, `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [k(`tabs-tab`, `
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
 `)])])]), O(`flex`, [k(`tabs-nav`, `
 width: 100%;
 position: relative;
 `, [k(`tabs-wrapper`, `
 width: 100%;
 `, [k(`tabs-tab`, `
 margin-right: 0;
 `)])])]), k(`tabs-nav`, `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [C(`prefix, suffix`, `
 display: flex;
 align-items: center;
 `), C(`prefix`, `padding-right: 16px;`), C(`suffix`, `padding-left: 16px;`)]), O(`top, bottom`, [x(`>`, [k(`tabs-nav`, [k(`tabs-nav-scroll-wrapper`, [x(`&::before`, `
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
 `)])])])])]), O(`left, right`, [k(`tabs-nav-scroll-content`, `
 flex-direction: column;
 `), x(`>`, [k(`tabs-nav`, [k(`tabs-nav-scroll-wrapper`, [x(`&::before`, `
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
 `)])])])])]), k(`tabs-nav-scroll-wrapper`, `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [k(`tabs-nav-y-scroll`, `
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
 `)]), k(`tabs-nav-scroll-content`, `
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `), k(`tabs-wrapper`, `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), k(`tabs-tab-wrapper`, `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), k(`tabs-tab`, `
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
 `)]), k(`tabs-bar`, `
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
 `)]), k(`tabs-pane-wrapper`, `
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `), k(`tab-pane`, `
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
 `)]), k(`tabs-tab-pad`, `
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), O(`line-type, bar-type`, [k(`tabs-tab`, `
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [x(`&:hover`, { color: `var(--n-tab-text-color-hover)` }), O(`active`, `
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `), O(`disabled`, { color: `var(--n-tab-text-color-disabled)` })])]), k(`tabs-nav`, [O(`line-type`, [O(`top`, [C(`prefix, suffix`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), k(`tabs-nav-scroll-content`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), k(`tabs-bar`, `
 bottom: -1px;
 `)]), O(`left`, [C(`prefix, suffix`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), k(`tabs-nav-scroll-content`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), k(`tabs-bar`, `
 right: -1px;
 `)]), O(`right`, [C(`prefix, suffix`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), k(`tabs-nav-scroll-content`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), k(`tabs-bar`, `
 left: -1px;
 `)]), O(`bottom`, [C(`prefix, suffix`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), k(`tabs-nav-scroll-content`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), k(`tabs-bar`, `
 top: -1px;
 `)]), C(`prefix, suffix`, `
 transition: border-color .3s var(--n-bezier);
 `), k(`tabs-nav-scroll-content`, `
 transition: border-color .3s var(--n-bezier);
 `), k(`tabs-bar`, `
 border-radius: 0;
 `)]), O(`card-type`, [C(`prefix, suffix`, `
 transition: border-color .3s var(--n-bezier);
 `), k(`tabs-pad`, `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `), k(`tabs-tab-pad`, `
 transition: border-color .3s var(--n-bezier);
 `), k(`tabs-tab`, `
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
 `), ue(`disabled`, [x(`&:hover`, `
 color: var(--n-tab-text-color-hover);
 `)])]), O(`closable`, `padding-right: 8px;`), O(`active`, `
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), O(`disabled`, `color: var(--n-tab-text-color-disabled);`)])]), O(`left, right`, `
 flex-direction: column; 
 `, [C(`prefix, suffix`, `
 padding: var(--n-tab-padding-vertical);
 `), k(`tabs-wrapper`, `
 flex-direction: column;
 `), k(`tabs-tab-wrapper`, `
 flex-direction: column;
 `, [k(`tabs-tab-pad`, `
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]), O(`top`, [O(`card-type`, [k(`tabs-scroll-padding`, `border-bottom: 1px solid var(--n-tab-border-color);`), C(`prefix, suffix`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), k(`tabs-tab`, `
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-bottom: 1px solid #0000;
 `)]), k(`tabs-tab-pad`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `), k(`tabs-pad`, `
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]), O(`left`, [O(`card-type`, [k(`tabs-scroll-padding`, `border-right: 1px solid var(--n-tab-border-color);`), C(`prefix, suffix`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), k(`tabs-tab`, `
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-right: 1px solid #0000;
 `)]), k(`tabs-tab-pad`, `
 border-right: 1px solid var(--n-tab-border-color);
 `), k(`tabs-pad`, `
 border-right: 1px solid var(--n-tab-border-color);
 `)])]), O(`right`, [O(`card-type`, [k(`tabs-scroll-padding`, `border-left: 1px solid var(--n-tab-border-color);`), C(`prefix, suffix`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), k(`tabs-tab`, `
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-left: 1px solid #0000;
 `)]), k(`tabs-tab-pad`, `
 border-left: 1px solid var(--n-tab-border-color);
 `), k(`tabs-pad`, `
 border-left: 1px solid var(--n-tab-border-color);
 `)])]), O(`bottom`, [O(`card-type`, [k(`tabs-scroll-padding`, `border-top: 1px solid var(--n-tab-border-color);`), C(`prefix, suffix`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), k(`tabs-tab`, `
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `, [O(`active`, `
 border-top: 1px solid #0000;
 `)]), k(`tabs-tab-pad`, `
 border-top: 1px solid var(--n-tab-border-color);
 `), k(`tabs-pad`, `
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]), Ta = Sn, Ea = U({ name: `Tabs`, props: Object.assign(Object.assign({}, E.props), { value: [String, Number], defaultValue: [String, Number], trigger: { type: String, default: `click` }, type: { type: String, default: `bar` }, closable: Boolean, justifyContent: String, size: { type: String, default: `medium` }, placement: { type: String, default: `top` }, tabStyle: [String, Object], tabClass: String, addTabStyle: [String, Object], addTabClass: String, barWidth: Number, paneClass: String, paneStyle: [String, Object], paneWrapperClass: String, paneWrapperStyle: [String, Object], addable: [Boolean, Object], tabsPadding: { type: Number, default: 0 }, animated: Boolean, onBeforeLeave: Function, onAdd: Function, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onClose: [Function, Array], labelSize: String, activeName: [String, Number], onActiveNameChange: [Function, Array] }), slots: Object, setup(t2, { slots: n2 }) {
  var _a2, _b;
  let { mergedClsPrefixRef: i2, inlineThemeDisabled: a2 } = de(t2), o2 = E(`Tabs`, `-tabs`, wa, Lt, t2, i2), s2 = I(null), c2 = I(null), l2 = I(null), u2 = I(null), d2 = I(null), f2 = I(null), p2 = I(true), m2 = I(true), h2 = Ae(t2, [`labelSize`, `size`]), g2 = Ae(t2, [`activeName`, `value`]), _2 = I(g2.value ?? t2.defaultValue ?? (n2.default ? (_b = (_a2 = Ze(n2.default())[0]) == null ? void 0 : _a2.props) == null ? void 0 : _b.name : null)), v2 = ke(g2, _2), y2 = { id: 0 }, b2 = W(() => {
    if (!(!t2.justifyContent || t2.type === `card`)) return { display: `flex`, justifyContent: t2.justifyContent };
  });
  at(v2, () => {
    y2.id = 0, ee2(), te2();
  });
  function x2() {
    var _a3;
    let { value: e2 } = v2;
    return e2 === null ? null : (_a3 = s2.value) == null ? void 0 : _a3.querySelector(`[data-name="${e2}"]`);
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
    var _a3;
    let e2 = (_a3 = d2.value) == null ? void 0 : _a3.$el;
    if (!e2) return;
    let t3 = x2();
    if (!t3) return;
    let { scrollLeft: n3, offsetWidth: r2 } = e2, { offsetLeft: i3, offsetWidth: a3 } = t3;
    n3 > i3 ? e2.scrollTo({ top: 0, left: i3, behavior: `smooth` }) : i3 + a3 > n3 + r2 && e2.scrollTo({ top: 0, left: i3 + a3 - r2, behavior: `smooth` });
  }
  let ne2 = I(null), O2 = 0, re2 = null;
  function ie2(e2) {
    let t3 = ne2.value;
    if (t3) {
      O2 = e2.getBoundingClientRect().height;
      let n3 = `${O2}px`, r2 = () => {
        t3.style.height = n3, t3.style.maxHeight = n3;
      };
      re2 ? (r2(), re2(), re2 = null) : re2 = r2;
    }
  }
  function k2(e2) {
    let t3 = ne2.value;
    if (t3) {
      let n3 = e2.getBoundingClientRect().height, r2 = () => {
        document.body.offsetHeight, t3.style.maxHeight = `${n3}px`, t3.style.height = `${Math.max(O2, n3)}px`;
      };
      re2 ? (re2(), re2 = null, r2()) : re2 = r2;
    }
  }
  function ae2() {
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
  let oe2 = { value: [] }, A2 = I(`next`);
  function se2(e2) {
    let t3 = v2.value, n3 = `next`;
    for (let r2 of oe2.value) {
      if (r2 === t3) break;
      if (r2 === e2) {
        n3 = `prev`;
        break;
      }
    }
    A2.value = n3, le2(e2);
  }
  function le2(e2) {
    let { onActiveNameChange: n3, onUpdateValue: i3, "onUpdate:value": a3 } = t2;
    n3 && r(n3, e2), i3 && r(i3, e2), a3 && r(a3, e2), _2.value = e2;
  }
  function ue2(e2) {
    let { onClose: n3 } = t2;
    n3 && r(n3, e2);
  }
  let j2 = true;
  function fe2() {
    let { value: e2 } = c2;
    if (!e2) return;
    j2 || (j2 = false);
    let t3 = `transition-disabled`;
    e2.classList.add(t3), ee2(), e2.classList.remove(t3);
  }
  let pe2 = I(null);
  function M2({ transitionDisabled: t3 }) {
    let n3 = s2.value;
    if (!n3) return;
    t3 && n3.classList.add(`transition-disabled`);
    let r2 = x2();
    r2 && pe2.value && (pe2.value.style.width = `${r2.offsetWidth}px`, pe2.value.style.height = `${r2.offsetHeight}px`, pe2.value.style.transform = `translateX(${r2.offsetLeft - e(getComputedStyle(n3).paddingLeft)}px)`, t3 && pe2.value.offsetWidth), t3 && n3.classList.remove(`transition-disabled`);
  }
  at([v2], () => {
    t2.type === `segment` && lt(() => {
      M2({ transitionDisabled: false });
    });
  }), nt(() => {
    t2.type === `segment` && M2({ transitionDisabled: true });
  });
  let N2 = 0;
  function me2(e2) {
    var _a3, _b2;
    if (e2.contentRect.width === 0 && e2.contentRect.height === 0 || N2 === e2.contentRect.width) return;
    N2 = e2.contentRect.width;
    let { type: n3 } = t2;
    if ((n3 === `line` || n3 === `bar`) && (j2 || ((_a3 = t2.justifyContent) == null ? void 0 : _a3.startsWith(`space`))) && fe2(), n3 !== `segment`) {
      let { placement: e3 } = t2;
      ye2((e3 === `top` || e3 === `bottom` ? (_b2 = d2.value) == null ? void 0 : _b2.$el : f2.value) || null);
    }
  }
  let he2 = Ta(me2, 64);
  at([() => t2.justifyContent, () => t2.size], () => {
    lt(() => {
      let { type: e2 } = t2;
      (e2 === `line` || e2 === `bar`) && fe2();
    });
  });
  let ge2 = I(false);
  function _e2(e2) {
    var _a3;
    let { target: n3, contentRect: { width: r2, height: i3 } } = e2, a3 = n3.parentElement.parentElement.offsetWidth, o3 = n3.parentElement.parentElement.offsetHeight, { placement: s3 } = t2;
    if (!ge2.value) s3 === `top` || s3 === `bottom` ? a3 < r2 && (ge2.value = true) : o3 < i3 && (ge2.value = true);
    else {
      let { value: e3 } = u2;
      if (!e3) return;
      s3 === `top` || s3 === `bottom` ? a3 - r2 > e3.$el.offsetWidth && (ge2.value = false) : o3 - i3 > e3.$el.offsetHeight && (ge2.value = false);
    }
    ye2(((_a3 = d2.value) == null ? void 0 : _a3.$el) || null);
  }
  let P2 = Ta(_e2, 64);
  function ve2() {
    let { onAdd: e2 } = t2;
    e2 && e2(), lt(() => {
      let e3 = x2(), { value: t3 } = d2;
      !e3 || !t3 || t3.scrollTo({ left: e3.offsetLeft, top: 0, behavior: `smooth` });
    });
  }
  function ye2(e2) {
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
  let be2 = Ta((e2) => {
    ye2(e2.target);
  }, 64);
  et(ba, { triggerRef: L(t2, `trigger`), tabStyleRef: L(t2, `tabStyle`), tabClassRef: L(t2, `tabClass`), addTabStyleRef: L(t2, `addTabStyle`), addTabClassRef: L(t2, `addTabClass`), paneClassRef: L(t2, `paneClass`), paneStyleRef: L(t2, `paneStyle`), mergedClsPrefixRef: i2, typeRef: L(t2, `type`), closableRef: L(t2, `closable`), valueRef: v2, tabChangeIdRef: y2, onBeforeLeaveRef: L(t2, `onBeforeLeave`), activateTab: se2, handleClose: ue2, handleAdd: ve2 }), Re(() => {
    ee2(), te2();
  }), ct(() => {
    let { value: e2 } = l2;
    if (!e2) return;
    let { value: t3 } = i2, n3 = `${t3}-tabs-nav-scroll-wrapper--shadow-start`, r2 = `${t3}-tabs-nav-scroll-wrapper--shadow-end`;
    p2.value ? e2.classList.remove(n3) : e2.classList.add(n3), m2.value ? e2.classList.remove(r2) : e2.classList.add(r2);
  });
  let xe2 = { syncBarPosition: () => {
    ee2();
  } }, Se2 = () => {
    M2({ transitionDisabled: true });
  }, Ce2 = W(() => {
    let { value: e2 } = h2, { type: n3 } = t2, r2 = `${e2}${{ card: `Card`, bar: `Bar`, line: `Line`, segment: `Segment` }[n3]}`, { self: { barColor: i3, closeIconColor: a3, closeIconColorHover: s3, closeIconColorPressed: c3, tabColor: l3, tabBorderColor: u3, paneTextColor: d3, tabFontWeight: f3, tabBorderRadius: p3, tabFontWeightActive: m3, colorSegment: g3, fontWeightStrong: _3, tabColorSegment: v3, closeSize: y3, closeIconSize: b3, closeColorHover: x3, closeColorPressed: S3, closeBorderRadius: C3, [w(`panePadding`, e2)]: T3, [w(`tabPadding`, r2)]: E2, [w(`tabPaddingVertical`, r2)]: D2, [w(`tabGap`, r2)]: ee3, [w(`tabGap`, `${r2}Vertical`)]: te3, [w(`tabTextColor`, n3)]: ne3, [w(`tabTextColorActive`, n3)]: O3, [w(`tabTextColorHover`, n3)]: re3, [w(`tabTextColorDisabled`, n3)]: ie3, [w(`tabFontSize`, e2)]: k3 }, common: { cubicBezierEaseInOut: ae3 } } = o2.value;
    return { "--n-bezier": ae3, "--n-color-segment": g3, "--n-bar-color": i3, "--n-tab-font-size": k3, "--n-tab-text-color": ne3, "--n-tab-text-color-active": O3, "--n-tab-text-color-disabled": ie3, "--n-tab-text-color-hover": re3, "--n-pane-text-color": d3, "--n-tab-border-color": u3, "--n-tab-border-radius": p3, "--n-close-size": y3, "--n-close-icon-size": b3, "--n-close-color-hover": x3, "--n-close-color-pressed": S3, "--n-close-border-radius": C3, "--n-close-icon-color": a3, "--n-close-icon-color-hover": s3, "--n-close-icon-color-pressed": c3, "--n-tab-color": l3, "--n-tab-font-weight": f3, "--n-tab-font-weight-active": m3, "--n-tab-padding": E2, "--n-tab-padding-vertical": D2, "--n-tab-gap": ee3, "--n-tab-gap-vertical": te3, "--n-pane-padding-left": ce(T3, `left`), "--n-pane-padding-right": ce(T3, `right`), "--n-pane-padding-top": ce(T3, `top`), "--n-pane-padding-bottom": ce(T3, `bottom`), "--n-font-weight-strong": _3, "--n-tab-color-segment": v3 };
  }), we2 = a2 ? D(`tabs`, W(() => `${h2.value[0]}${t2.type[0]}`), Ce2, t2) : void 0;
  return Object.assign({ mergedClsPrefix: i2, mergedValue: v2, renderedNames: /* @__PURE__ */ new Set(), segmentCapsuleElRef: pe2, tabsPaneWrapperRef: ne2, tabsElRef: s2, barElRef: c2, addTabInstRef: u2, xScrollInstRef: d2, scrollWrapperElRef: l2, addTabFixed: ge2, tabWrapperStyle: b2, handleNavResize: he2, mergedSize: h2, handleScroll: be2, handleTabsResize: P2, cssVars: a2 ? void 0 : Ce2, themeClass: we2 == null ? void 0 : we2.themeClass, animationDirection: A2, renderNameListRef: oe2, yScrollElRef: f2, handleSegmentResize: Se2, onAnimationBeforeLeave: ie2, onAnimationEnter: k2, onAnimationAfterEnter: ae2, onRender: we2 == null ? void 0 : we2.onRender }, xe2);
}, render() {
  let { mergedClsPrefix: e2, type: t2, placement: n2, addTabFixed: r2, addable: i2, mergedSize: a2, renderNameListRef: o2, onRender: s2, paneWrapperClass: c2, paneWrapperStyle: l2, $slots: { default: u2, prefix: d2, suffix: f2 } } = this;
  s2 == null ? void 0 : s2();
  let p2 = u2 ? Ze(u2()).filter((e3) => e3.type.__TAB_PANE__ === true) : [], m2 = u2 ? Ze(u2()).filter((e3) => e3.type.__TAB__ === true) : [], h2 = !m2.length, g2 = t2 === `card`, _2 = t2 === `segment`, v2 = !g2 && !_2 && this.justifyContent;
  o2.value = [];
  let y2 = () => {
    let t3 = V(`div`, { style: this.tabWrapperStyle, class: `${e2}-tabs-wrapper` }, v2 ? null : V(`div`, { class: `${e2}-tabs-scroll-padding`, style: n2 === `top` || n2 === `bottom` ? { width: `${this.tabsPadding}px` } : { height: `${this.tabsPadding}px` } }), h2 ? p2.map((e3, t4) => (o2.value.push(e3.props.name), Aa(V(Ca, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t4 !== 0 && (!v2 || v2 === `center` || v2 === `start` || v2 === `end`) }), e3.children ? { default: e3.children.tab } : void 0)))) : m2.map((e3, t4) => (o2.value.push(e3.props.name), Aa(t4 !== 0 && !v2 ? ka(e3) : e3))), !r2 && i2 && g2 ? Oa(i2, (h2 ? p2.length : m2.length) !== 0) : null, v2 ? null : V(`div`, { class: `${e2}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } }));
    return V(`div`, { ref: `tabsElRef`, class: `${e2}-tabs-nav-scroll-content` }, g2 && i2 ? V(Le, { onResize: this.handleTabsResize }, { default: () => t3 }) : t3, g2 ? V(`div`, { class: `${e2}-tabs-pad` }) : null, g2 ? null : V(`div`, { ref: `barElRef`, class: `${e2}-tabs-bar` }));
  }, b2 = _2 ? `top` : n2;
  return V(`div`, { class: [`${e2}-tabs`, this.themeClass, `${e2}-tabs--${t2}-type`, `${e2}-tabs--${a2}-size`, v2 && `${e2}-tabs--flex`, `${e2}-tabs--${b2}`], style: this.cssVars }, V(`div`, { class: [`${e2}-tabs-nav--${t2}-type`, `${e2}-tabs-nav--${b2}`, `${e2}-tabs-nav`] }, j(d2, (t3) => t3 && V(`div`, { class: `${e2}-tabs-nav__prefix` }, t3)), _2 ? V(Le, { onResize: this.handleSegmentResize }, { default: () => V(`div`, { class: `${e2}-tabs-rail`, ref: `tabsElRef` }, V(`div`, { class: `${e2}-tabs-capsule`, ref: `segmentCapsuleElRef` }, V(`div`, { class: `${e2}-tabs-wrapper` }, V(`div`, { class: `${e2}-tabs-tab` }))), h2 ? p2.map((e3, t3) => (o2.value.push(e3.props.name), V(Ca, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t3 !== 0 }), e3.children ? { default: e3.children.tab } : void 0))) : m2.map((e3, t3) => (o2.value.push(e3.props.name), t3 === 0 ? e3 : ka(e3)))) }) : V(Le, { onResize: this.handleNavResize }, { default: () => V(`div`, { class: `${e2}-tabs-nav-scroll-wrapper`, ref: `scrollWrapperElRef` }, [`top`, `bottom`].includes(b2) ? V(zn, { ref: `xScrollInstRef`, onScroll: this.handleScroll }, { default: y2 }) : V(`div`, { class: `${e2}-tabs-nav-y-scroll`, onScroll: this.handleScroll, ref: `yScrollElRef` }, y2())) }), r2 && i2 && g2 ? Oa(i2, true) : null, j(f2, (t3) => t3 && V(`div`, { class: `${e2}-tabs-nav__suffix` }, t3))), h2 && (this.animated && (b2 === `top` || b2 === `bottom`) ? V(`div`, { ref: `tabsPaneWrapperRef`, style: l2, class: [`${e2}-tabs-pane-wrapper`, c2] }, Da(p2, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : Da(p2, this.mergedValue, this.renderedNames)));
} });
function Da(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = [];
  return e2.forEach((e3) => {
    let { name: r3, displayDirective: i3, "display-directive": a3 } = e3.props, o3 = (e4) => i3 === e4 || a3 === e4, c2 = t2 === r3;
    if (e3.key !== void 0 && (e3.key = r3), c2 || o3(`show`) || o3(`show:lazy`) && n2.has(r3)) {
      n2.has(r3) || n2.add(r3);
      let t3 = !o3(`if`);
      s2.push(t3 ? tt(e3, [[mt, c2]]) : e3);
    }
  }), o2 ? V(pt, { name: `${o2}-transition`, onBeforeLeave: r2, onEnter: i2, onAfterEnter: a2 }, { default: () => s2 }) : s2;
}
function Oa(e2, t2) {
  return V(Ca, { ref: `addTabInstRef`, key: `__addable`, name: `__addable`, internalCreatedByPane: true, internalAddable: true, internalLeftPadded: t2, disabled: typeof e2 == `object` && e2.disabled });
}
function ka(e2) {
  let t2 = ht(e2);
  return t2.props ? t2.props.internalLeftPadded = true : t2.props = { internalLeftPadded: true }, t2;
}
function Aa(e2) {
  return Array.isArray(e2.dynamicProps) ? e2.dynamicProps.includes(`internalLeftPadded`) || e2.dynamicProps.push(`internalLeftPadded`) : e2.dynamicProps = [`internalLeftPadded`], e2;
}
var ja = [`title`, `onClick`], Ma = 20, Na = St(U({ __name: `SketchToolbar`, props: { sketchName: {}, draftCount: {}, routeCount: {} }, emits: [`save`, `open`, `create`, `edit-meta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Kt(), r2 = t2, i2 = [{ title: n2(`sketchEdit.save`), icon: En, iconSize: Ma, callback: () => r2(`save`) }, { title: n2(`sketchEdit.open`), icon: An, iconSize: Ma, callback: () => r2(`open`) }, { title: n2(`sketchEdit.newComponent`), icon: M, iconSize: Ma, callback: () => r2(`create`) }, { title: n2(`sketchEdit.editMetadata`), icon: kt, iconSize: Ma, callback: () => r2(`edit-meta`) }];
  return (t3, r3) => (H(), R(z(jr), { justify: `space-between`, align: `center` }, { default: Y(() => [G(z(Bt), { strong: `` }, { default: Y(() => [B(K(e2.sketchName || z(n2)(`sketchEdit.noSketchSelectedToolbar`)), 1)]), _: 1 }), G(z(jr), { align: `center` }, { default: Y(() => [e2.sketchName === void 0 ? yt(``, true) : (H(), R(z(sn), { key: 0, type: `info`, size: `small` }, { default: Y(() => [B(K(e2.draftCount || 0) + ` ` + K(z(n2)(`sketchEdit.drafts`)) + `, ` + K(e2.routeCount || 0) + ` ` + K(z(n2)(`sketchEdit.routes`)), 1)]), _: 1 })), (H(), J(wt, null, vt(i2, (e3, t4) => q(`div`, { key: t4, title: e3.title, class: `tool-tip-item`, onClick: e3.callback }, [G(z(Z), { size: e3.iconSize }, { default: Y(() => [(H(), R(ot(e3.icon)))]), _: 2 }, 1032, [`size`])], 8, ja)), 64))]), _: 1 })]), _: 1 }));
} }), [[`__scopeId`, `data-v-5b012717`]]), Pa = { key: 0, class: `empty-state` }, Fa = St(U({ __name: `ComponentList`, props: { components: {}, selectedId: {} }, emits: [`select`, `delete`, `create`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Kt(), r2 = t2;
  return (t3, i2) => (H(), J(wt, null, [G(z(on), { hoverable: `` }, { default: Y(() => [(H(true), J(wt, null, vt(e2.components, (t4) => (H(), R(z(cn), { key: t4.value, class: Ct({ "selected-component": e2.selectedId === t4.value }), onClick: () => r2(`select`, t4.value, t4.type) }, { prefix: Y(() => [G(z(Z), { color: t4.type === `draft` ? `#007bff` : `#28a745` }, { default: Y(() => [(H(), R(ot(t4.type === `draft` ? z(he) : z(we))))]), _: 2 }, 1032, [`color`])]), suffix: Y(() => [G(z(_a), { onPositiveClick: (e3) => r2(`delete`, t4.value, t4.type) }, { trigger: Y(() => [G(z(X), { quaternary: ``, circle: ``, size: `small` }, { default: Y(() => [G(z(Z), null, { default: Y(() => [G(z(Te))]), _: 1 })]), _: 1 })]), default: Y(() => [B(` ` + K(z(n2)(`sketchEdit.deleteComponent`)), 1)]), _: 1 }, 8, [`onPositiveClick`])]), default: Y(() => [B(` ` + K(t4.label) + ` `, 1)]), _: 2 }, 1032, [`class`, `onClick`]))), 128))]), _: 1 }), e2.components.length === 0 ? (H(), J(`div`, Pa, [G(z(Xt), { description: z(n2)(`sketchEdit.noComponentsYet`) }, { extra: Y(() => [G(z(X), { size: `small`, onClick: i2[0] || (i2[0] = (e3) => r2(`create`)) }, { default: Y(() => [B(K(z(n2)(`sketchEdit.createComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`])])) : yt(``, true)], 64));
} }), [[`__scopeId`, `data-v-3addb8a0`]]), Ia = { key: 0, class: `properties-panel` }, La = { key: 1, style: { height: `100%`, width: `100%`, display: `flex`, "justify-content": `center`, "align-items": `center` } }, Ra = St(U({ __name: `PropertiesPanel`, props: { component: {}, type: {} }, emits: [`updateProperties`, `updateMeta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Kt(), r2 = t2;
  return (t3, i2) => e2.component ? (H(), J(`div`, Ia, [G(z(Ea), { type: `line`, animated: ``, "default-value": `properties` }, { default: Y(() => [G(z(Sa), { name: `properties`, tab: z(n2)(`sketchEdit.properties`) }, { default: Y(() => [G(z(Ir), null, { default: Y(() => [G(z(Hi), { label: z(n2)(`sketchEdit.visible`) }, { default: Y(() => [G(z(Zt), { value: e2.component.properties.visible !== false, "onUpdate:value": i2[0] || (i2[0] = (e3) => r2(`updateProperties`, { visible: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), e2.type === `draft` ? (H(), J(wt, { key: 0 }, [G(z(Hi), { label: z(n2)(`sketchEdit.fillColor`) }, { default: Y(() => [G(z(Or), { value: e2.component.properties.fillColor || `#007bff`, "show-alpha": false, "onUpdate:value": i2[1] || (i2[1] = (e3) => r2(`updateProperties`, { fillColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(n2)(`sketchEdit.strokeColor`) }, { default: Y(() => [G(z(Or), { value: e2.component.properties.strokeColor || `#0056b3`, "show-alpha": false, "onUpdate:value": i2[2] || (i2[2] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(n2)(`sketchEdit.strokeThickness`) }, { default: Y(() => [G(z(ia), { value: e2.component.properties.strokeThickness || 2, min: 1, max: 10, "onUpdate:value": i2[3] || (i2[3] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : yt(``, true), e2.type === `route` ? (H(), J(wt, { key: 1 }, [G(z(Hi), { label: z(n2)(`sketchEdit.strokeColor`) }, { default: Y(() => [G(z(Or), { value: e2.component.properties.strokeColor || `#28a745`, "show-alpha": false, "onUpdate:value": i2[4] || (i2[4] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(n2)(`sketchEdit.strokeThickness`) }, { default: Y(() => [G(z(ia), { value: e2.component.properties.strokeThickness || 3, min: 1, max: 10, "onUpdate:value": i2[5] || (i2[5] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : yt(``, true)]), _: 1 })]), _: 1 }, 8, [`tab`]), G(z(Sa), { name: `metadata`, tab: z(n2)(`sketchEdit.metadata`) }, { default: Y(() => [G(z(Ir), null, { default: Y(() => [G(z(Hi), { label: z(n2)(`sketchEdit.name`) }, { default: Y(() => [G(z(P), { value: e2.component.meta.name, "onUpdate:value": i2[6] || (i2[6] = (t4) => {
    var _a2, _b;
    return r2(`updateMeta`, { name: t4, description: ((_a2 = e2.component) == null ? void 0 : _a2.meta.description) ?? ``, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(n2)(`sketchEdit.description`) }, { default: Y(() => [G(z(P), { value: e2.component.meta.description, type: `textarea`, rows: 3, "onUpdate:value": i2[7] || (i2[7] = (t4) => {
    var _a2, _b;
    return r2(`updateMeta`, { name: ((_a2 = e2.component) == null ? void 0 : _a2.meta.name) ?? ``, description: t4, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(n2)(`sketchEdit.tags`) }, { default: Y(() => [G(z(Ar), { value: e2.component.meta.tags || [], placeholder: z(n2)(`sketchEdit.addTagPlaceholder`), "onUpdate:value": i2[8] || (i2[8] = (t4) => {
    var _a2, _b;
    return r2(`updateMeta`, { name: ((_a2 = e2.component) == null ? void 0 : _a2.meta.name) ?? ``, description: ((_b = e2.component) == null ? void 0 : _b.meta.description) ?? ``, tags: t4 });
  }) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: `UUID` }, { default: Y(() => [G(z(P), { value: e2.component.id, style: { "font-family": `monospace` }, readonly: `` }, null, 8, [`value`])]), _: 1 })]), _: 1 })]), _: 1 }, 8, [`tab`])]), _: 1 })])) : (H(), J(`div`, La, [G(z(Xt), { description: z(n2)(`sketchEdit.selectComponentToEdit`) }, null, 8, [`description`])]));
} }), [[`__scopeId`, `data-v-f700b4bc`]]), za = `https://api.maptiler.com/maps/basic-v2/style.json?key=dCeXFrS9lgSF8hm5C6nm`;
function Ba() {
  let e2 = I(7), t2 = ft(null), n2 = I([0, 0]);
  function r2(e3) {
    t2.value = e3.map;
  }
  function i2(e3) {
    n2.value = e3, t2.value && t2.value.setCenter(e3);
  }
  function a2(n3) {
    e2.value = n3, t2.value && t2.value.setZoom(n3);
  }
  return { zoom: e2, map: t2, center: n2, styleUrl: za, initMap: r2, setCenter: i2, setZoom: a2 };
}
function Va(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `draft` });
  }), t2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `route` });
  }), n2;
}
function Ha() {
  return { type: `Polygon`, coordinates: [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]] };
}
function Ua() {
  return { fillColor: `#007bff`, strokeColor: `#0056b3`, strokeThickness: 2 };
}
function Wa() {
  return { strokeColor: `#28a745`, strokeThickness: 3 };
}
var Ga = { style: { display: `flex`, "flex-direction": `row`, gap: `8px` } }, Ka = { style: { display: `flex`, gap: `8px`, "margin-bottom": `8px` } }, qa = { key: 0, class: `sketch-edit-container desktop-layout` }, Ja = { class: `grid-layout` }, Ya = { class: `meta-info-section` }, Xa = { class: `metadata-item` }, Za = { class: `metadata-item` }, Qa = { key: 1, class: `sketch-edit-container mobile-layout` }, $a = { class: `mobile-header` }, eo = { class: `mobile-content` }, to = { key: 0, class: `mobile-tab-content` }, no = { key: 1, class: `mobile-tab-content mobile-map-content` }, ro = { key: 2, class: `mobile-tab-content` }, io = { class: `metadata-item` }, ao = { class: `metadata-item` }, oo = { class: `mobile-tab-bar` }, so = St(U({ __name: `SketchEdit`, props: { liteMode: { type: Boolean }, forceHighDpi: { type: Boolean }, mapType: {}, sketchId: {} }, setup(e2) {
  let t2 = e2, n2 = I(Tt(`geolocation`).getLastKnownLocation().toLngLatLike()), { t: r2 } = Kt(), i2 = Se(), a2 = Ut(), { zoom: o2, styleUrl: s2, initMap: c2 } = Ba(), { width: l2, height: u2 } = tn(), d2 = W(() => l2.value < 768), f2 = I(`components`), p2 = I(false), m2 = I(null), h2 = I(null), g2 = I(false), _2 = I(``), v2 = I(`draft`), y2 = I(false), b2 = I({ name: ``, description: ``, tags: [], created_by: ``, modified_by: `` }), x2 = I(``), S2 = W(() => a2.currentSketch), C2 = W(() => a2.currentDrafts), w2 = W(() => {
    var _a2;
    return ((_a2 = S2.value) == null ? void 0 : _a2.routes.routes) || [];
  }), T2 = W(() => !!S2.value), E2 = W(() => !m2.value || !h2.value ? null : h2.value === `draft` ? a2.getDraftById(m2.value) : a2.getRouteById(m2.value)), D2 = yn(() => i2.success(r2(`sketchEdit.propertiesUpdated`)), 1e3), ee2 = W(() => Va(C2.value, w2.value));
  async function te2() {
    if (S2.value) try {
      await a2.updateSketch(S2.value.id, { name: S2.value.meta.name, description: S2.value.meta.description, tags: S2.value.meta.tags }), i2.success(r2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  async function ne2() {
    let e3 = prompt(r2(`sketchEdit.enterSketchName`));
    e3 && (await a2.createSketch(e3), p2.value = false);
  }
  async function O2() {
    if (!(!_2.value.trim() || !S2.value)) try {
      v2.value === `draft` ? (m2.value = (await a2.addDraft(Ha(), Ua(), { name: _2.value })).id, h2.value = `draft`) : (m2.value = (await a2.addRoute(_2.value, Wa())).id, h2.value = `route`), g2.value = false, _2.value = ``, i2.success(r2(`sketchEdit.componentCreated`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.componentCreateError`)), console.error(e3);
    }
  }
  async function re2(e3, t3) {
    try {
      t3 === `draft` ? await a2.deleteDraft(e3) : await a2.deleteRoute(e3), m2.value === e3 && (m2.value = null, h2.value = null), i2.success(r2(`sketchEdit.componentDeleted`));
    } catch (e4) {
      i2.error(r2(`sketchEdit.componentDeleteError`)), console.error(e4);
    }
  }
  let ie2 = async (e3) => {
    if (!(!E2.value || !h2.value)) try {
      h2.value === `draft` ? await a2.updateDraft(m2.value, { properties: e3 }) : await a2.updateRoute(m2.value, { properties: e3 }), D2();
    } catch (e4) {
      i2.error(r2(`sketchEdit.propertiesUpdateError`)), console.error(e4);
    }
  }, k2 = async (e3) => {
    if (!(!E2.value || !h2.value)) try {
      h2.value === `draft` ? await a2.updateDraft(m2.value, { meta: e3 }) : await a2.updateRoute(m2.value, { meta: e3 }), D2();
    } catch (e4) {
      i2.error(r2(`sketchEdit.propertiesUpdateError`)), console.error(e4);
    }
  };
  function ae2() {
    S2.value && (b2.value = { name: S2.value.meta.name, description: S2.value.meta.description, tags: [...S2.value.meta.tags], created_by: S2.value.meta.created_by, modified_by: S2.value.meta.modified_by }, y2.value = true);
  }
  function oe2() {
    x2.value.trim() && !b2.value.tags.includes(x2.value.trim()) && (b2.value.tags.push(x2.value.trim()), x2.value = ``);
  }
  function A2(e3) {
    b2.value.tags = b2.value.tags.filter((t3) => t3 !== e3);
  }
  async function ce2() {
    if (S2.value) try {
      await a2.updateSketch(S2.value.id, { name: b2.value.name, description: b2.value.description, tags: b2.value.tags }), y2.value = false, i2.success(r2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      i2.error(r2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  nt(() => {
    t2.sketchId && a2.setCurrentSketchId(t2.sketchId);
  }), at(() => a2.currentSketchId, (e3) => {
    e3 && (m2.value = null, h2.value = null);
  });
  let le2 = (e3) => new Date(e3).toLocaleString();
  return (e3, t3) => {
    var _a2;
    return H(), J(wt, null, [G(Ce, { active: p2.value, "onUpdate:active": t3[0] || (t3[0] = (e4) => p2.value = e4), list: z(a2).sketches.map((e4) => ({ id: e4.id, name: e4.meta.name, tags: e4.meta.tags })), placement: `right`, onNew: ne2, onRemove: t3[1] || (t3[1] = (e4) => z(a2).deleteSketch(e4)), onSelect: t3[2] || (t3[2] = (e4) => z(a2).setCurrentSketchId(e4)) }, null, 8, [`active`, `list`]), G(z(Gt), { show: g2.value, "onUpdate:show": t3[6] || (t3[6] = (e4) => g2.value = e4), preset: `dialog`, title: z(r2)(`sketchEdit.createNewComponent`) }, { action: Y(() => [G(z(X), { onClick: t3[5] || (t3[5] = (e4) => g2.value = false) }, { default: Y(() => [B(K(z(r2)(`sketchEdit.cancel`)), 1)]), _: 1 }), G(z(X), { type: `primary`, disabled: !_2.value.trim(), onClick: O2 }, { default: Y(() => [B(K(z(r2)(`sketchEdit.create`)), 1)]), _: 1 }, 8, [`disabled`])]), default: Y(() => [G(z(Ir), null, { default: Y(() => [q(`div`, Ga, [G(z(Hi), { label: z(r2)(`sketchEdit.name`), style: { "flex-grow": `1` } }, { default: Y(() => [G(z(P), { value: _2.value, "onUpdate:value": t3[3] || (t3[3] = (e4) => _2.value = e4), placeholder: z(r2)(`sketchEdit.enterComponentName`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(r2)(`sketchEdit.type`) }, { default: Y(() => [G(z(Yt), { value: v2.value, "onUpdate:value": t3[4] || (t3[4] = (e4) => v2.value = e4), "consistent-menu-width": false, options: [{ label: z(r2)(`sketchEdit.draftShape`), value: `draft` }, { label: z(r2)(`sketchEdit.routePath`), value: `route` }] }, null, 8, [`value`, `options`])]), _: 1 }, 8, [`label`])])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), G(z(Gt), { show: y2.value, "onUpdate:show": t3[11] || (t3[11] = (e4) => y2.value = e4), preset: `dialog`, title: z(r2)(`sketchEdit.editMetadata`), style: { "max-width": `600px` } }, { action: Y(() => [G(z(X), { onClick: t3[10] || (t3[10] = (e4) => y2.value = false) }, { default: Y(() => [B(K(z(r2)(`sketchEdit.cancel`)), 1)]), _: 1 }), G(z(X), { type: `primary`, disabled: !b2.value.name.trim(), onClick: ce2 }, { default: Y(() => [B(K(z(r2)(`sketchEdit.save`)), 1)]), _: 1 }, 8, [`disabled`])]), default: Y(() => [G(z(Ir), null, { default: Y(() => [G(z(Hi), { label: z(r2)(`sketchEdit.name`) }, { default: Y(() => [G(z(P), { value: b2.value.name, "onUpdate:value": t3[7] || (t3[7] = (e4) => b2.value.name = e4), placeholder: z(r2)(`sketchEdit.sketchNamePlaceholder`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(r2)(`sketchEdit.description`) }, { default: Y(() => [G(z(P), { value: b2.value.description, "onUpdate:value": t3[8] || (t3[8] = (e4) => b2.value.description = e4), type: `textarea`, placeholder: z(r2)(`sketchEdit.sketchDescriptionPlaceholder`), rows: 3 }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(r2)(`sketchEdit.tags`) }, { default: Y(() => [q(`div`, Ka, [G(z(P), { value: x2.value, "onUpdate:value": t3[9] || (t3[9] = (e4) => x2.value = e4), placeholder: z(r2)(`sketchEdit.addTagPlaceholder`), onKeydown: st($e(oe2, [`prevent`]), [`enter`]) }, null, 8, [`value`, `placeholder`, `onKeydown`]), G(z(X), { onClick: oe2 }, { default: Y(() => [B(K(z(r2)(`sketchEdit.add`)), 1)]), _: 1 })]), (H(true), J(wt, null, vt(b2.value.tags, (e4) => (H(), R(z(sn), { key: e4, closable: ``, style: { "margin-right": `8px`, "margin-bottom": `8px` }, onClose: (t4) => A2(e4) }, { default: Y(() => [B(K(e4), 1)]), _: 2 }, 1032, [`onClose`]))), 128)), b2.value.tags.length === 0 ? (H(), R(z(Xt), { key: 0, description: z(r2)(`sketchEdit.noTags`), size: `small` }, null, 8, [`description`])) : yt(``, true)]), _: 1 }, 8, [`label`])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), d2.value ? (H(), J(`div`, Qa, [q(`div`, $a, [G(Na, { "sketch-name": (_a2 = S2.value) == null ? void 0 : _a2.meta.name, "draft-count": C2.value.length, "route-count": w2.value.length, onSave: te2, onOpen: t3[18] || (t3[18] = (e4) => p2.value = true), onCreate: t3[19] || (t3[19] = (e4) => g2.value = true), onEditMeta: ae2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])]), q(`div`, eo, [G(z(la), null, { default: Y(() => [f2.value === `components` ? (H(), J(`div`, to, [T2.value ? (H(), R(z(se), { key: 0, title: z(r2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;`, style: { height: `100%` } }, { "header-extra": Y(() => [G(z(X), { quaternary: ``, circle: ``, size: `small`, onClick: t3[22] || (t3[22] = (e4) => g2.value = true) }, { icon: Y(() => [G(z(M))]), _: 1 })]), default: Y(() => [G(Fa, { components: ee2.value, "selected-id": m2.value, onSelect: t3[20] || (t3[20] = (e4, t4) => {
      m2.value = e4, h2.value = t4, f2.value = `properties`;
    }), onDelete: re2, onCreate: t3[21] || (t3[21] = (e4) => g2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])) : (H(), R(z(Xt), { key: 1, description: z(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(Ot))]), _: 1 })]), extra: Y(() => [G(z(X), { size: `small`, onClick: t3[23] || (t3[23] = (e4) => p2.value = true) }, { default: Y(() => [B(K(z(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : yt(``, true), f2.value === `map` ? (H(), J(`div`, no, [T2.value ? (H(), R(z(se), { key: 0, class: `map-container`, "content-style": `padding: 0;` }, { default: Y(() => [G(z(ye), { "map-style": z(s2), center: n2.value, zoom: z(o2), height: `100%`, "onMap:load": z(c2) }, { default: Y(() => [G(z(ve), { position: `top-left` }), G(z(xe), { position: `bottom-left` }), G(z(me), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `center`, `zoom`, `onMap:load`])]), _: 1 })) : (H(), R(z(Xt), { key: 1, description: z(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(Ot))]), _: 1 })]), extra: Y(() => [G(z(X), { size: `small`, onClick: t3[24] || (t3[24] = (e4) => p2.value = true) }, { default: Y(() => [B(K(z(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : yt(``, true), f2.value === `properties` ? (H(), J(`div`, ro, [E2.value ? (H(), R(z(se), { key: 0, class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: Y(() => [G(z(Bt), { depth: `3`, class: `metadata` }, { default: Y(() => [q(`div`, io, K(z(r2)(`sketchEdit.createdTimeBy`, { user: E2.value.meta.created_by, time: le2(E2.value.meta.creation_timestamp) })), 1), q(`div`, ao, K(z(r2)(`sketchEdit.modifiedTimeBy`, { user: E2.value.meta.modified_by, time: le2(E2.value.meta.modification_timestamp) })), 1)]), _: 1 })]), default: Y(() => [G(Ra, { component: E2.value, type: h2.value, onUpdateProperties: ie2, onUpdateMeta: k2 }, null, 8, [`component`, `type`])]), _: 1 })) : (H(), R(z(Xt), { key: 1, description: z(r2)(`sketchEdit.noComponentSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(jt))]), _: 1 })]), extra: Y(() => [G(z(X), { size: `small`, onClick: t3[25] || (t3[25] = (e4) => f2.value = `components`) }, { default: Y(() => [B(K(z(r2)(`sketchEdit.selectComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))])) : yt(``, true)]), _: 1 })]), T2.value ? (H(), R(z(da), { key: 0, class: `mobile-footer` }, { default: Y(() => [q(`div`, oo, [G(z(X), { type: f2.value === `components` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[26] || (t3[26] = (e4) => f2.value = `components`) }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(Mn))]), _: 1 })]), default: Y(() => [B(` ` + K(z(r2)(`sketchEdit.components`)), 1)]), _: 1 }, 8, [`type`]), G(z(X), { type: f2.value === `map` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[27] || (t3[27] = (e4) => f2.value = `map`) }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(Ot))]), _: 1 })]), default: Y(() => [B(` ` + K(z(r2)(`sketchEdit.map`)), 1)]), _: 1 }, 8, [`type`]), G(z(X), { type: f2.value === `properties` ? `primary` : `default`, quaternary: ``, size: `large`, onClick: t3[28] || (t3[28] = (e4) => f2.value = `properties`) }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(kt))]), _: 1 })]), default: Y(() => [B(` ` + K(z(r2)(`sketchEdit.properties`)), 1)]), _: 1 }, 8, [`type`])])]), _: 1 })) : yt(``, true)])) : (H(), J(`div`, qa, [q(`div`, Ja, [q(`div`, Ya, [G(z(se), null, { default: Y(() => {
      var _a3;
      return [G(Na, { "sketch-name": (_a3 = S2.value) == null ? void 0 : _a3.meta.name, "draft-count": C2.value.length, "route-count": w2.value.length, onSave: te2, onOpen: t3[12] || (t3[12] = (e4) => p2.value = true), onCreate: t3[13] || (t3[13] = (e4) => g2.value = true), onEditMeta: ae2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])];
    }), _: 1 })]), G(z(ya), { direction: `horizontal`, max: 0.8, min: 0.2, "default-size": 0.5, class: `bottom-row-split` }, { 1: Y(() => [G(z(ya), { style: { height: `100%` }, direction: `vertical` }, { 1: Y(() => [G(z(se), { style: { height: `100%` }, title: z(r2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;` }, { "header-extra": Y(() => [G(z(X), { quaternary: ``, circle: ``, onClick: t3[16] || (t3[16] = (e4) => g2.value = true) }, { icon: Y(() => [G(z(M))]), _: 1 })]), default: Y(() => [G(Fa, { components: ee2.value, "selected-id": m2.value, onSelect: t3[14] || (t3[14] = (e4, t4) => {
      m2.value = e4, h2.value = t4;
    }), onDelete: re2, onCreate: t3[15] || (t3[15] = (e4) => g2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])]), 2: Y(() => [G(z(se), { class: `map-container`, "content-style": `padding: 0;` }, { default: Y(() => [G(z(ye), { "map-style": z(s2), center: n2.value, zoom: z(o2), height: `100%`, "onMap:load": z(c2) }, { default: Y(() => [G(z(ve), { position: `top-left` }), G(z(xe), { position: `bottom-left` }), G(z(me), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `center`, `zoom`, `onMap:load`])]), _: 1 })]), _: 1 }), T2.value ? yt(``, true) : (H(), R(z(Xt), { key: 0, description: z(r2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(Ot))]), _: 1 })]), extra: Y(() => [G(z(X), { size: `small`, onClick: t3[17] || (t3[17] = (e4) => p2.value = true) }, { default: Y(() => [B(K(z(r2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))]), 2: Y(() => [G(z(se), { class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: Y(() => [E2.value ? (H(), R(z(Bt), { key: 0, depth: `3`, class: `metadata` }, { default: Y(() => [q(`div`, Xa, K(z(r2)(`sketchEdit.createdTimeBy`, { user: E2.value.meta.created_by, time: le2(E2.value.meta.creation_timestamp) })), 1), q(`div`, Za, K(z(r2)(`sketchEdit.modifiedTimeBy`, { user: E2.value.meta.modified_by, time: le2(E2.value.meta.modification_timestamp) })), 1)]), _: 1 })) : yt(``, true)]), default: Y(() => [G(Ra, { component: E2.value, type: h2.value, onUpdateProperties: ie2, onUpdateMeta: k2 }, null, 8, [`component`, `type`])]), _: 1 })]), _: 1 })])]))], 64);
  };
} }), [[`__scopeId`, `data-v-60a61de9`]]), co = { class: `sketch-centre-view` }, lo = { class: `header` }, uo = { class: `title` }, fo = { class: `card-header` }, po = { key: 0, class: `tags` }, mo = { class: `card-content` }, ho = { class: `meta-info` }, go = { class: `meta-item` }, _o = { class: `meta-item` }, vo = { class: `meta-item` }, yo = { key: 0, class: `empty-state` }, bo = St(U({ __name: `SketchCentreView`, setup(e2) {
  dt((e3) => ({ b9b94bc6: z(w2).bodyColor }));
  let { t: t2 } = Kt(), n2 = be(), r2 = Se(), i2 = pn(), a2 = Ut(), o2 = W(() => a2.sketches), s2 = W({ get: () => a2.currentSketchId, set: (e3) => a2.setCurrentSketchId(e3) }), c2 = (e3) => {
    let t3 = s2.value === e3;
    return { borderColor: t3 ? i2.value.primaryColor : ``, borderWidth: t3 ? `2px` : `1px`, padding: t3 ? `0px` : `1px`, zIndex: t3 ? 0 : 1 };
  }, l2 = I(false), u2 = I(``), d2 = I(``), f2 = I(false), p2 = I(``), m2 = async () => {
    await a2.init();
  }, h2 = (e3) => new Date(e3).toLocaleDateString(), g2 = (e3) => e3.routes.routes.length, _2 = (e3) => e3.drafts.drafts.length, v2 = (e3) => {
    a2.setCurrentSketchId(e3);
  }, y2 = (e3) => {
    p2.value = e3, f2.value = true;
  }, b2 = async () => {
    if (!u2.value.trim()) {
      r2.error(t2(`sketchCentreView.nameRequired`));
      return;
    }
    let e3 = await a2.createSketch(u2.value);
    await a2.updateSketch(e3.id, { description: d2.value }), a2.setCurrentSketchId(e3.id), l2.value = false, u2.value = ``, d2.value = ``, r2.success(t2(`sketchCentreView.sketchCreated`));
  }, x2 = (e3) => {
    let i3 = o2.value.find((t3) => t3.id === e3);
    i3 && n2.warning({ title: t2(`sketchCentreView.deleteConfirmation.title`), content: t2(`sketchCentreView.deleteConfirmation.prompt`, { name: i3.meta.name }), positiveText: t2(`sketchCentreView.deleteConfirmation.yes`), negativeText: t2(`sketchCentreView.deleteConfirmation.no`), onPositiveClick: async () => {
      await a2.deleteSketch(e3), r2.success(t2(`sketchCentreView.sketchDeleted`));
    } });
  }, { width: S2 } = tn(), C2 = W(() => Math.floor(S2.value / 360));
  nt(() => {
    m2();
  });
  let w2 = pn();
  return (e3, n3) => (H(), J(`div`, co, [q(`div`, lo, [q(`h1`, uo, K(z(t2)(`sketchCentreView.title`)), 1), G(z(X), { type: `primary`, secondary: ``, circle: ``, onClick: n3[0] || (n3[0] = (e4) => l2.value = true) }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(M))]), _: 1 })]), _: 1 })]), G(z(Yi), { cols: C2.value, "x-gap": 16, "y-gap": 16, responsive: `screen` }, { default: Y(() => [(H(true), J(wt, null, vt(o2.value, (e4) => (H(), R(z(Gi), { key: e4.id }, { default: Y(() => [G(z(se), { class: Ct([`sketch-card`, { selected: s2.value === e4.id }]), style: bt(c2(e4.id)), hoverable: ``, bordered: ``, clickable: ``, onClick: (t3) => v2(e4.id) }, { header: Y(() => [q(`div`, fo, [G(z(dn), null, { default: Y(() => [G(z(Bt), { class: `sketch-name` }, { default: Y(() => [B(K(e4.meta.name), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), e4.meta.tags.length > 0 ? (H(), J(`div`, po, [(H(true), J(wt, null, vt(e4.meta.tags.slice(0, 3), (e5) => (H(), R(z(sn), { key: e5, size: `small`, round: ``, type: `info` }, { default: Y(() => [B(K(e5.toLocaleUpperCase()), 1)]), _: 2 }, 1024))), 128)), e4.meta.tags.length > 3 ? (H(), R(z(sn), { key: 0, size: `small`, round: ``, type: `info` }, { default: Y(() => [B(` +` + K(e4.meta.tags.length - 3), 1)]), _: 2 }, 1024)) : yt(``, true)])) : yt(``, true)])]), "header-extra": Y(() => [G(z(fn), null, { default: Y(() => [G(z(X), { quaternary: ``, circle: ``, size: `small`, onClick: $e((t3) => y2(e4.id), [`stop`]) }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(On))]), _: 1 })]), _: 1 }, 8, [`onClick`]), G(z(X), { quaternary: ``, circle: ``, size: `small`, onClick: $e((t3) => x2(e4.id), [`stop`]) }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(Te))]), _: 1 })]), _: 1 }, 8, [`onClick`])]), _: 2 }, 1024)]), default: Y(() => [q(`div`, mo, [G(z(Bt), { depth: `3`, class: `description` }, { default: Y(() => [B(K(e4.meta.description || z(t2)(`sketchCentreView.noDescription`)), 1)]), _: 2 }, 1024), q(`div`, ho, [q(`div`, go, [G(z(Z), { size: 16 }, { default: Y(() => [G(z(wn))]), _: 1 }), G(z(Bt), { depth: `3`, style: { "font-size": `12px` } }, { default: Y(() => [B(K(h2(e4.meta.creation_timestamp)), 1)]), _: 2 }, 1024)]), q(`div`, _o, [G(z(Z), { size: 16 }, { default: Y(() => [G(z(we))]), _: 1 }), G(z(Bt), { depth: `3`, style: { "font-size": `12px` } }, { default: Y(() => [B(K(g2(e4)) + ` ` + K(z(t2)(`sketchCentreView.routes`)), 1)]), _: 2 }, 1024)]), q(`div`, vo, [G(z(Z), { size: 16 }, { default: Y(() => [G(z(Dt))]), _: 1 }), G(z(Bt), { depth: `3`, style: { "font-size": `12px` } }, { default: Y(() => [B(K(_2(e4)) + ` ` + K(z(t2)(`sketchCentreView.drafts`)), 1)]), _: 2 }, 1024)])])])]), _: 2 }, 1032, [`class`, `style`, `onClick`])]), _: 2 }, 1024))), 128))]), _: 1 }, 8, [`cols`]), o2.value.length === 0 ? (H(), J(`div`, yo, [G(z(Z), { size: `48`, depth: `3` }, { default: Y(() => [G(z(Nt))]), _: 1 }), G(z(Bt), { depth: `3` }, { default: Y(() => [B(K(z(t2)(`sketchCentreView.emptyState`)), 1)]), _: 1 }), G(z(X), { type: `primary`, onClick: n3[1] || (n3[1] = (e4) => l2.value = true) }, { icon: Y(() => [G(z(Z), null, { default: Y(() => [G(z(M))]), _: 1 })]), default: Y(() => [B(` ` + K(z(t2)(`sketchCentreView.createFirstSketch`)), 1)]), _: 1 })])) : yt(``, true), G(z(Gt), { show: l2.value, "onUpdate:show": n3[5] || (n3[5] = (e4) => l2.value = e4), "mask-closable": true, preset: `card`, style: { "max-width": `500px` }, title: z(t2)(`sketchCentreView.newSketch`) }, { footer: Y(() => [G(z(fn), { justify: `end` }, { default: Y(() => [G(z(X), { onClick: n3[4] || (n3[4] = (e4) => l2.value = false) }, { default: Y(() => [B(K(z(t2)(`sketchCentreView.cancel`)), 1)]), _: 1 }), G(z(X), { type: `primary`, onClick: b2 }, { default: Y(() => [B(K(z(t2)(`sketchCentreView.create`)), 1)]), _: 1 })]), _: 1 })]), default: Y(() => [G(z(Ir), { model: { name: u2.value, description: d2.value }, "label-placement": `top`, "require-mark-placement": `right-hanging` }, { default: Y(() => [G(z(Hi), { label: z(t2)(`sketchCentreView.sketchName`), required: `` }, { default: Y(() => [G(z(P), { value: u2.value, "onUpdate:value": n3[2] || (n3[2] = (e4) => u2.value = e4), placeholder: z(t2)(`sketchCentreView.sketchNamePlaceholder`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(Hi), { label: z(t2)(`sketchCentreView.sketchDescription`) }, { default: Y(() => [G(z(P), { value: d2.value, "onUpdate:value": n3[3] || (n3[3] = (e4) => d2.value = e4), type: `textarea`, placeholder: z(t2)(`sketchCentreView.sketchDescriptionPlaceholder`), autosize: { minRows: 3, maxRows: 5 } }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`])]), _: 1 }, 8, [`model`])]), _: 1 }, 8, [`show`, `title`]), G(z(_e), { show: f2.value, "onUpdate:show": n3[6] || (n3[6] = (e4) => f2.value = e4), width: z(S2) > 1e3 ? 800 : Math.min(z(S2) - 32, 600), placement: `right`, "display-directive": `show`, height: `100%` }, { default: Y(() => [G(z(ge), { title: z(t2)(`sketchCentreView.editSketch`), closable: ``, "body-content-style": { padding: 0, height: `100%` } }, { default: Y(() => [p2.value ? (H(), R(so, { key: 0, "sketch-id": p2.value }, null, 8, [`sketch-id`])) : yt(``, true)]), _: 1 }, 8, [`title`])]), _: 1 }, 8, [`show`, `width`])]));
} }), [[`__scopeId`, `data-v-c9c96b0a`]]);
export {
  bo as default
};
