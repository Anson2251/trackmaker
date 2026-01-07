import { $ as e, A as t, B as n, D as r, E as i, F as a, G as o, H as s, I as c, J as l, K as u, L as d, M as f, Q as p, S as m, U as h, V as g, W as _, X as v, Y as y, Z as b, at as x, c as S, ct as C, dt as w, et as T, f as E, g as D, h as ee, j as te, k as ne, lt as O, m as k, nt as re, ot as A, p as ie, q as ae, rt as j, t as oe, tt as se, u as ce, ut as le, v as ue, w as M, z as de } from "./Card-CfqFSU60.js";
import { _ as fe, a as N, d as P, f as pe, g as me, h as he, i as ge, l as _e, n as ve, p as F, t as ye, v as be, y as xe } from "./sketch-store-D1H4eMIG.js";
import { $ as Se, A as Ce, D as we, E as Te, F as Ee, G as De, H as Oe, J as I, M as ke, N as Ae, O as je, P as Me, Q as Ne, R as Pe, S as Fe, T as Ie, U as Le, W as Re, X as ze, Z as Be, a as Ve, et as He, g as Ue, j as We, k as Ge, m as Ke, o as qe, q as Je, tt as Ye, u as Xe, v as Ze, w as Qe, x as $e, y as et, z as tt } from "./light-D7l_EYRp.js";
import { $ as nt, At as rt, Bt as it, Dt as at, H as ot, J as st, Jt as L, Lt as ct, Nt as lt, Q as ut, Rt as dt, St as ft, Tt as pt, X as mt, Xt as ht, Y as gt, Z as _t, Zt as R, at as vt, ct as yt, dt as bt, en as z, ft as B, gt as V, ht as xt, jt as St, kt as H, lt as Ct, mt as U, nn as wt, ot as W, pt as G, q as Tt, rn as K, st as q, t as Et, tn as Dt, tt as Ot, ut as J, vt as kt, xt as At, zt as Y } from "./index-BS29D1DG.js";
import { t as jt } from "./FileText-R3wir4Qy.js";
import { n as Mt, r as Nt, t as Pt } from "./omit-Bi1z4VdF.js";
import { B as Ft, I as It, L as Lt, M as Rt, _ as zt, a as Bt, c as Vt, f as Ht, n as Ut, p as Wt, r as Gt, s as Kt, t as qt, u as Jt } from "./text-_nbSDoT0.js";
import { n as Yt } from "./vue-i18n-BNUrasmw.js";
import { t as Xt } from "./fade-in-scale-up.cssr-Dj5hCC64.js";
import { i as Zt } from "./attribute-WIWhL5KW.js";
import { n as Qt, r as $t, t as en } from "./Switch--r7fCO5n.js";
import { t as tn } from "./core-CjRjcW9P.js";
import { D as nn, E as rn, O as an, T as on, c as X, f as sn, l as cn } from "./storage-DOGmZhnH.js";
import { t as ln } from "./get-slot-DtyO76SV.js";
import { t as un } from "./use-locale-jwlfXO6E.js";
import { t as dn } from "./Warning-DSXDuHq5.js";
import { i as fn, n as pn, r as mn, t as hn } from "./ListItem-CRqp1C3j.js";
import { r as gn } from "./light-BDYeDyNz.js";
import { t as _n } from "./Space-9zLD1yWW.js";
import { t as vn } from "./use-theme-vars-B8ixSXGm.js";
var yn = function() {
  return Tt.Date.now();
}, bn = `Expected a function`, xn = Math.max, Sn = Math.min;
function Cn(e2, t2, n2) {
  var r2, i2, a2, o2, s2, c2, l2 = 0, u2 = false, d2 = false, f2 = true;
  if (typeof e2 != `function`) throw TypeError(bn);
  t2 = xe(t2) || 0, ot(n2) && (u2 = !!n2.leading, d2 = `maxWait` in n2, a2 = d2 ? xn(xe(n2.maxWait) || 0, t2) : a2, f2 = `trailing` in n2 ? !!n2.trailing : f2);
  function p2(t3) {
    var n3 = r2, a3 = i2;
    return r2 = i2 = void 0, l2 = t3, o2 = e2.apply(a3, n3), o2;
  }
  function m2(e3) {
    return l2 = e3, s2 = setTimeout(_2, t2), u2 ? p2(e3) : o2;
  }
  function h2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2, i3 = t2 - n3;
    return d2 ? Sn(i3, a2 - r3) : i3;
  }
  function g2(e3) {
    var n3 = e3 - c2, r3 = e3 - l2;
    return c2 === void 0 || n3 >= t2 || n3 < 0 || d2 && r3 >= a2;
  }
  function _2() {
    var e3 = yn();
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
    return s2 === void 0 ? o2 : v2(yn());
  }
  function x2() {
    var e3 = yn(), n3 = g2(e3);
    if (r2 = arguments, i2 = this, c2 = e3, n3) {
      if (s2 === void 0) return m2(c2);
      if (d2) return clearTimeout(s2), s2 = setTimeout(_2, t2), p2(c2);
    }
    return s2 === void 0 && (s2 = setTimeout(_2, t2)), o2;
  }
  return x2.cancel = y2, x2.flush = b2, x2;
}
var wn = Cn, Tn = `Expected a function`;
function En(e2, t2, n2) {
  var r2 = true, i2 = true;
  if (typeof e2 != `function`) throw TypeError(Tn);
  return ot(n2) && (r2 = `leading` in n2 ? !!n2.leading : r2, i2 = `trailing` in n2 ? !!n2.trailing : i2), wn(e2, t2, { leading: r2, maxWait: t2, trailing: i2 });
}
var Dn = En, On = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, kn = U({ name: `Calendar`, render: function(e2, t2) {
  return H(), J(`svg`, On, t2[0] || (t2[0] = [bt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h16"></path><path d="M11 15h1"></path><path d="M12 15v3"></path></g>`, 1)]));
} }), An = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, jn = U({ name: `DeviceFloppy`, render: function(e2, t2) {
  return H(), J(`svg`, An, t2[0] || (t2[0] = [q(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [q(`path`, { d: `M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2` }), q(`circle`, { cx: `12`, cy: `14`, r: `2` }), q(`path`, { d: `M14 4v4H8V4` })], -1)]));
} }), Mn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Nn = U({ name: `Edit`, render: function(e2, t2) {
  return H(), J(`svg`, Mn, t2[0] || (t2[0] = [q(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [q(`path`, { d: `M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3` }), q(`path`, { d: `M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3` }), q(`path`, { d: `M16 5l3 3` })], -1)]));
} }), Pn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Fn = U({ name: `Folder`, render: function(e2, t2) {
  return H(), J(`svg`, Pn, t2[0] || (t2[0] = [q(`path`, { d: `M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2`, fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, null, -1)]));
} }), In = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Ln = U({ name: `Minus`, render: function(e2, t2) {
  return H(), J(`svg`, In, t2[0] || (t2[0] = [q(`path`, { d: `M5 12h14`, fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, null, -1)]));
} }), Rn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, zn = U({ name: `Plus`, render: function(e2, t2) {
  return H(), J(`svg`, Rn, t2[0] || (t2[0] = [q(`g`, { fill: `none`, stroke: `currentColor`, "stroke-width": `2`, "stroke-linecap": `round`, "stroke-linejoin": `round` }, [q(`path`, { d: `M12 5v14` }), q(`path`, { d: `M5 12h14` })], -1)]));
} }), Bn = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, viewBox: `0 0 24 24` }, Vn = U({ name: `Shape`, render: function(e2, t2) {
  return H(), J(`svg`, Bn, t2[0] || (t2[0] = [bt(`<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="5" r="2"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle><circle cx="19" cy="19" r="2"></circle><path d="M5 7v10"></path><path d="M7 5h10"></path><path d="M7 19h10"></path><path d="M19 7v10"></path></g>`, 1)]));
} });
const Hn = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, "2xl": 1920 };
function Un(e2) {
  return `(min-width: ${e2}px)`;
}
var Wn = {};
function Gn(e2 = Hn) {
  if (!Je || typeof window.matchMedia != `function`) return W(() => []);
  let t2 = L({}), n2 = Object.keys(e2), r2 = (e3, n3) => {
    e3.matches ? t2.value[n3] = true : t2.value[n3] = false;
  };
  return n2.forEach((t3) => {
    let n3 = e2[t3], i2, a2;
    Wn[n3] === void 0 ? (i2 = window.matchMedia(Un(n3)), i2.addEventListener ? i2.addEventListener(`change`, (e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }) : i2.addListener && i2.addListener((e3) => {
      a2.forEach((n4) => {
        n4(e3, t3);
      });
    }), a2 = /* @__PURE__ */ new Set(), Wn[n3] = { mql: i2, cbs: a2 }) : (i2 = Wn[n3].mql, a2 = Wn[n3].cbs), a2.add(r2), i2.matches && a2.forEach((e3) => {
      e3(i2, t3);
    });
  }), pt(() => {
    n2.forEach((t3) => {
      let { cbs: n3 } = Wn[e2[t3]];
      n3.has(r2) && n3.delete(r2);
    });
  }), W(() => {
    let { value: e3 } = t2;
    return n2.filter((t3) => e3[t3]);
  });
}
var Kn = Gn, qn = Te(`.v-x-scroll`, { overflow: `auto`, scrollbarWidth: `none` }, [Te(`&::-webkit-scrollbar`, { width: 0, height: 0 })]), Jn = U({ name: `XScroll`, props: { disabled: Boolean, onScroll: Function }, setup() {
  let e2 = L(null);
  function t2(e3) {
    !(e3.currentTarget.offsetWidth < e3.currentTarget.scrollWidth) || e3.deltaY === 0 || (e3.currentTarget.scrollLeft += e3.deltaY + e3.deltaX, e3.preventDefault());
  }
  let n2 = te();
  return qn.mount({ id: `vueuc/x-scroll`, head: true, anchorMetaName: we, ssr: n2 }), Object.assign({ selfRef: e2, handleWheel: t2 }, { scrollTo(...t3) {
    var n3;
    (n3 = e2.value) == null || n3.scrollTo(...t3);
  } });
}, render() {
  return V(`div`, { ref: `selfRef`, onScroll: this.onScroll, onWheel: this.disabled ? void 0 : this.handleWheel, class: `v-x-scroll` }, this.$slots);
} }), Yn = { tiny: `mini`, small: `tiny`, medium: `small`, large: `medium`, huge: `large` };
function Xn(e2) {
  let t2 = Yn[e2];
  if (t2 === void 0) throw Error(`${e2} has no smaller size.`);
  return t2;
}
function Zn(e2) {
  var _a2;
  let t2 = (_a2 = e2.dirs) == null ? void 0 : _a2.find(({ dir: e3 }) => e3 === _t);
  return !!(t2 && t2.value === false);
}
var Qn = U({ name: `Remove`, render() {
  return V(`svg`, { xmlns: `http://www.w3.org/2000/svg`, viewBox: `0 0 512 512` }, V(`line`, { x1: `400`, y1: `256`, x2: `112`, y2: `256`, style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      ` }));
} }), $n = A(`input-group`, `
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
 `)])])])])])]), er = U({ name: `InputGroup`, props: {}, setup(e2) {
  let { mergedClsPrefixRef: t2 } = ue(e2);
  return ie(`-input-group`, $n, t2), { mergedClsPrefix: t2 };
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-input-group` }, this.$slots);
} });
const Z = `0!important`, tr = `-1px!important`;
function nr(e2) {
  return O(`${e2}-type`, [x(`& +`, [A(`button`, {}, [O(`${e2}-type`, [C(`border`, { borderLeftWidth: Z }), C(`state-border`, { left: tr })])])])]);
}
function rr(e2) {
  return O(`${e2}-type`, [x(`& +`, [A(`button`, [O(`${e2}-type`, [C(`border`, { borderTopWidth: Z }), C(`state-border`, { top: tr })])])])]);
}
var ir = A(`button-group`, `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`, [le(`vertical`, { flexDirection: `row` }, [le(`rtl`, [A(`button`, [x(`&:first-child:not(:last-child)`, `
 margin-right: ${Z};
 border-top-right-radius: ${Z};
 border-bottom-right-radius: ${Z};
 `), x(`&:last-child:not(:first-child)`, `
 margin-left: ${Z};
 border-top-left-radius: ${Z};
 border-bottom-left-radius: ${Z};
 `), x(`&:not(:first-child):not(:last-child)`, `
 margin-left: ${Z};
 margin-right: ${Z};
 border-radius: ${Z};
 `), nr(`default`), O(`ghost`, [nr(`primary`), nr(`info`), nr(`success`), nr(`warning`), nr(`error`)])])])]), O(`vertical`, { flexDirection: `column` }, [A(`button`, [x(`&:first-child:not(:last-child)`, `
 margin-bottom: ${Z};
 margin-left: ${Z};
 margin-right: ${Z};
 border-bottom-left-radius: ${Z};
 border-bottom-right-radius: ${Z};
 `), x(`&:last-child:not(:first-child)`, `
 margin-top: ${Z};
 margin-left: ${Z};
 margin-right: ${Z};
 border-top-left-radius: ${Z};
 border-top-right-radius: ${Z};
 `), x(`&:not(:first-child):not(:last-child)`, `
 margin: ${Z};
 border-radius: ${Z};
 `), rr(`default`), O(`ghost`, [rr(`primary`), rr(`info`), rr(`success`), rr(`warning`), rr(`error`)])])])]), ar = U({ name: `ButtonGroup`, props: { size: { type: String, default: void 0 }, vertical: Boolean }, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedRtlRef: n2 } = ue(e2);
  return ie(`-button-group`, ir, t2), rt(sn, e2), { rtlEnabled: ee(`ButtonGroup`, n2, t2), mergedClsPrefix: t2 };
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return V(`div`, { class: [`${e2}-button-group`, this.rtlEnabled && `${e2}-button-group--rtl`, this.vertical && `${e2}-button-group--vertical`], role: `group` }, this.$slots);
} });
function or(e2, t2) {
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
function sr(e2) {
  return e2 === null ? null : /^ *#/.test(e2) ? `hex` : e2.includes(`rgb`) ? `rgb` : e2.includes(`hsl`) ? `hsl` : e2.includes(`hsv`) ? `hsv` : null;
}
function cr(e2, t2 = [255, 255, 255], n2 = `AA`) {
  let [r2, i2, a2, o2] = d(s(e2));
  if (o2 === 1) {
    let e3 = lr([r2, i2, a2]), o3 = lr(t2);
    return (Math.max(e3, o3) + 0.05) / (Math.min(e3, o3) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
  }
  let c2 = lr([Math.round(r2 * o2 + t2[0] * (1 - o2)), Math.round(i2 * o2 + t2[1] * (1 - o2)), Math.round(a2 * o2 + t2[2] * (1 - o2))]), l2 = lr(t2);
  return (Math.max(c2, l2) + 0.05) / (Math.min(c2, l2) + 0.05) >= (n2 === `AA` ? 4.5 : 7);
}
function lr(e2) {
  let [t2, n2, r2] = e2.map((e3) => (e3 /= 255, e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4));
  return 0.2126 * t2 + 0.7152 * n2 + 0.0722 * r2;
}
function ur(e2) {
  return e2 = Math.round(e2), e2 >= 360 ? 359 : e2 < 0 ? 0 : e2;
}
function dr(e2) {
  return e2 = Math.round(e2 * 100) / 100, e2 > 1 ? 1 : e2 < 0 ? 0 : e2;
}
var fr = { rgb: { hex(e2) {
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
  return _([...ae(t2, n2, r2), i2]);
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
function pr(e2, t2, n2) {
  return n2 || (n2 = sr(e2)), n2 ? n2 === t2 ? e2 : fr[n2][t2](e2) : null;
}
var mr = `12px`, hr = 12, gr = `6px`, _r = U({ name: `AlphaSlider`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, alpha: { type: Number, default: 0 }, onUpdateAlpha: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = L(null);
  function n2(n3) {
    !t2.value || !e2.rgba || (Be(`mousemove`, document, r2), Be(`mouseup`, document, i2), r2(n3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = (n3.clientX - a2) / (i3 - hr);
    e2.onUpdateAlpha(dr(o2));
  }
  function i2() {
    var t3;
    ze(`mousemove`, document, r2), ze(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, railBackgroundImage: W(() => {
    let { rgba: t3 } = e2;
    return t3 ? `linear-gradient(to right, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 0) 0%, rgba(${t3[0]}, ${t3[1]}, ${t3[2]}, 1) 100%)` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-color-picker-slider`, ref: `railRef`, style: { height: mr, borderRadius: gr }, onMousedown: this.handleMouseDown }, V(`div`, { style: { borderRadius: gr, position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, overflow: `hidden` } }, V(`div`, { class: `${e2}-color-picker-checkboard` }), V(`div`, { class: `${e2}-color-picker-slider__image`, style: { backgroundImage: this.railBackgroundImage } })), this.rgba && V(`div`, { style: { position: `absolute`, left: gr, right: gr, top: 0, bottom: 0 } }, V(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc(${this.alpha * 100}% - ${gr})`, borderRadius: gr, width: mr, height: mr } }, V(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: u(this.rgba), borderRadius: gr, width: mr, height: mr } }))));
} });
const vr = f(`n-color-picker`);
function yr(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 255)) : false;
}
function br(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 360)) : false;
}
function xr(e2) {
  return /^\d{1,3}\.?\d*$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2), 100)) : false;
}
function Sr(e2) {
  let t2 = e2.trim();
  return /^#[0-9a-fA-F]+$/.test(t2) ? [4, 5, 7, 9].includes(t2.length) : false;
}
function Cr(e2) {
  return /^\d{1,3}\.?\d*%$/.test(e2.trim()) ? Math.max(0, Math.min(Number.parseInt(e2) / 100, 100)) : false;
}
var wr = { paddingSmall: `0 4px` }, Tr = U({ name: `ColorInputUnit`, props: { label: { type: String, required: true }, value: { type: [Number, String], default: null }, showAlpha: Boolean, onUpdateValue: { type: Function, required: true } }, setup(e2) {
  let t2 = L(``), { themeRef: n2 } = kt(vr, null);
  dt(() => {
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
        a3 = Sr(n3), a3 && e2.onUpdateValue(n3), t2.value = r2();
        break;
      case `H`:
        i3 = br(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `S`:
      case `L`:
      case `V`:
        i3 = xr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `A`:
        i3 = Cr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
      case `R`:
      case `G`:
      case `B`:
        i3 = yr(n3), i3 === false ? t2.value = r2() : e2.onUpdateValue(i3);
        break;
    }
  }
  return { mergedTheme: n2, inputValue: t2, handleInputChange: a2, handleInputUpdateValue: i2 };
}, render() {
  let { mergedTheme: e2 } = this;
  return V(F, { size: `small`, placeholder: this.label, theme: e2.peers.Input, themeOverrides: e2.peerOverrides.Input, builtinThemeOverrides: wr, value: this.inputValue, onUpdateValue: this.handleInputUpdateValue, onChange: this.handleInputChange, style: this.label === `A` ? `flex-grow: 1.25;` : `` });
} }), Er = U({ name: `ColorInput`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, modes: { type: Array, required: true }, showAlpha: { type: Boolean, required: true }, value: { type: String, default: null }, valueArr: { type: Array, default: null }, onUpdateValue: { type: Function, required: true }, onUpdateMode: { type: Function, required: true } }, setup(e2) {
  return { handleUnitUpdateValue(t2, r2) {
    let { showAlpha: i2 } = e2;
    if (e2.mode === `hex`) {
      e2.onUpdateValue((i2 ? n : de)(r2));
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
  return V(`div`, { class: `${e2}-color-picker-input` }, V(`div`, { class: `${e2}-color-picker-input__mode`, onClick: this.onUpdateMode, style: { cursor: t2.length === 1 ? `` : `pointer` } }, this.mode.toUpperCase() + (this.showAlpha ? `A` : ``)), V(er, null, { default: () => {
    let { mode: e3, valueArr: t3, showAlpha: r2 } = this;
    if (e3 === `hex`) {
      let e4 = null;
      try {
        e4 = t3 === null ? null : (r2 ? n : de)(t3);
      } catch {
      }
      return V(Tr, { label: `HEX`, showAlpha: r2, value: e4, onUpdateValue: (e5) => {
        this.handleUnitUpdateValue(0, e5);
      } });
    }
    return (e3 + (r2 ? `a` : ``)).split(``).map((e4, n2) => V(Tr, { label: e4.toUpperCase(), value: t3 === null ? null : t3[n2], onUpdateValue: (e5) => {
      this.handleUnitUpdateValue(n2, e5);
    } }));
  } }));
} });
function Dr(e2, t2) {
  if (t2 === `hsv`) {
    let [t3, n2, r2, i2] = c(e2);
    return u([...v(t3, n2, r2), i2]);
  }
  return e2;
}
function Or(e2) {
  let t2 = document.createElement(`canvas`).getContext(`2d`);
  return t2 ? (t2.fillStyle = e2, t2.fillStyle) : `#000000`;
}
var kr = U({ name: `ColorPickerSwatches`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, swatches: { type: Array, required: true }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  let n2 = W(() => e2.swatches.map((e3) => {
    let t2 = sr(e3);
    return { value: e3, mode: t2, legalValue: Dr(e3, t2) };
  }));
  function r2(n3) {
    let { mode: r3 } = e2, { value: i3, mode: a3 } = n3;
    return a3 || (a3 = `hex`, /^[a-zA-Z]+$/.test(i3) ? i3 = Or(i3) : (t(`color-picker`, `color ${i3} in swatches is invalid.`), i3 = `#000000`)), a3 === r3 ? i3 : pr(i3, r3, a3);
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
} }), Ar = U({ name: `ColorPickerTrigger`, slots: Object, props: { clsPrefix: { type: String, required: true }, value: { type: String, default: null }, hsla: { type: Array, default: null }, disabled: Boolean, onClick: Function }, setup(e2) {
  let { colorPickerSlots: t2, renderLabelRef: n2 } = kt(vr, null);
  return () => {
    let { hsla: r2, value: i2, clsPrefix: a2, onClick: o2, disabled: c2 } = e2, l2 = t2.label || n2.value;
    return V(`div`, { class: [`${a2}-color-picker-trigger`, c2 && `${a2}-color-picker-trigger--disabled`], onClick: c2 ? void 0 : o2 }, V(`div`, { class: `${a2}-color-picker-trigger__fill` }, V(`div`, { class: `${a2}-color-picker-checkboard` }), V(`div`, { style: { position: `absolute`, left: 0, right: 0, top: 0, bottom: 0, backgroundColor: r2 ? s(r2) : `` } }), i2 && r2 ? V(`div`, { class: `${a2}-color-picker-trigger__value`, style: { color: cr(r2) ? `white` : `black` } }, l2 ? l2(i2) : i2) : null));
  };
} }), jr = U({ name: `ColorPreview`, props: { clsPrefix: { type: String, required: true }, mode: { type: String, required: true }, color: { type: String, default: null, validator: (e2) => {
  let t2 = sr(e2);
  return !!(!e2 || t2 && t2 !== `hsv`);
} }, onUpdateColor: { type: Function, required: true } }, setup(e2) {
  function t2(t3) {
    var n2;
    let r2 = t3.target.value;
    (n2 = e2.onUpdateColor) == null || n2.call(e2, pr(r2.toUpperCase(), e2.mode, `hex`)), t3.stopPropagation();
  }
  return { handleChange: t2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-color-picker-preview__preview` }, V(`span`, { class: `${e2}-color-picker-preview__fill`, style: { background: this.color || `#000000` } }), V(`input`, { class: `${e2}-color-picker-preview__input`, type: `color`, value: this.color, onChange: this.handleChange }));
} }), Mr = `12px`, Nr = 12, Pr = `6px`, Fr = 6, Ir = `linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`, Lr = U({ name: `HueSlider`, props: { clsPrefix: { type: String, required: true }, hue: { type: Number, required: true }, onUpdateHue: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = L(null);
  function n2(e3) {
    t2.value && (Be(`mousemove`, document, r2), Be(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, left: a2 } = r3.getBoundingClientRect(), o2 = ur((n3.clientX - a2 - Fr) / (i3 - Nr) * 360);
    e2.onUpdateHue(o2);
  }
  function i2() {
    var t3;
    ze(`mousemove`, document, r2), ze(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { railRef: t2, handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-color-picker-slider`, style: { height: Mr, borderRadius: Pr } }, V(`div`, { ref: `railRef`, style: { boxShadow: `inset 0 0 2px 0 rgba(0, 0, 0, .24)`, boxSizing: `border-box`, backgroundImage: Ir, height: Mr, borderRadius: Pr, position: `relative` }, onMousedown: this.handleMouseDown }, V(`div`, { style: { position: `absolute`, left: Pr, right: Pr, top: 0, bottom: 0 } }, V(`div`, { class: `${e2}-color-picker-handle`, style: { left: `calc((${this.hue}%) / 359 * 100 - ${Pr})`, borderRadius: Pr, width: Mr, height: Mr } }, V(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: `hsl(${this.hue}, 100%, 50%)`, borderRadius: Pr, width: Mr, height: Mr } })))));
} }), Rr = `12px`, zr = `6px`, Br = U({ name: `Pallete`, props: { clsPrefix: { type: String, required: true }, rgba: { type: Array, default: null }, displayedHue: { type: Number, required: true }, displayedSv: { type: Array, required: true }, onUpdateSV: { type: Function, required: true }, onComplete: Function }, setup(e2) {
  let t2 = L(null);
  function n2(e3) {
    t2.value && (Be(`mousemove`, document, r2), Be(`mouseup`, document, i2), r2(e3));
  }
  function r2(n3) {
    let { value: r3 } = t2;
    if (!r3) return;
    let { width: i3, height: a2, left: o2, bottom: s2 } = r3.getBoundingClientRect(), c2 = (s2 - n3.clientY) / a2, l2 = (n3.clientX - o2) / i3, u2 = 100 * (l2 > 1 ? 1 : l2 < 0 ? 0 : l2), d2 = 100 * (c2 > 1 ? 1 : c2 < 0 ? 0 : c2);
    e2.onUpdateSV(u2, d2);
  }
  function i2() {
    var t3;
    ze(`mousemove`, document, r2), ze(`mouseup`, document, i2), (t3 = e2.onComplete) == null || t3.call(e2);
  }
  return { palleteRef: t2, handleColor: W(() => {
    let { rgba: t3 } = e2;
    return t3 ? `rgb(${t3[0]}, ${t3[1]}, ${t3[2]})` : ``;
  }), handleMouseDown: n2 };
}, render() {
  let { clsPrefix: e2 } = this;
  return V(`div`, { class: `${e2}-color-picker-pallete`, onMousedown: this.handleMouseDown, ref: `palleteRef` }, V(`div`, { class: `${e2}-color-picker-pallete__layer`, style: { backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))` } }), V(`div`, { class: `${e2}-color-picker-pallete__layer ${e2}-color-picker-pallete__layer--shadowed`, style: { backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))` } }), this.rgba && V(`div`, { class: `${e2}-color-picker-handle`, style: { width: Rr, height: Rr, borderRadius: zr, left: `calc(${this.displayedSv[0]}% - ${zr})`, bottom: `calc(${this.displayedSv[1]}% - ${zr})` } }, V(`div`, { class: `${e2}-color-picker-handle__fill`, style: { backgroundColor: this.handleColor, borderRadius: zr, width: Rr, height: Rr } })));
} }), Vr = x([A(`color-picker`, `
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
 `, [Xt(), A(`input`, `
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
 `)])])])])]), Hr = U({ name: `ColorPicker`, props: Object.assign(Object.assign({}, E.props), { value: String, show: { type: Boolean, default: void 0 }, defaultShow: Boolean, defaultValue: String, modes: { type: Array, default: () => [`rgb`, `hex`, `hsl`] }, placement: { type: String, default: `bottom-start` }, to: Ae.propTo, showAlpha: { type: Boolean, default: true }, showPreview: Boolean, swatches: Array, disabled: { type: Boolean, default: void 0 }, actions: { type: Array, default: null }, internalActions: Array, size: String, renderLabel: Function, onComplete: Function, onConfirm: Function, onClear: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array] }), slots: Object, setup(e2, { slots: t2 }) {
  let i2 = L(null), f2 = null, m2 = rn(e2), { mergedSizeRef: x2, mergedDisabledRef: S2 } = m2, { localeRef: C2 } = un(`global`), { mergedClsPrefixRef: T2, namespaceRef: ee2, inlineThemeDisabled: te2 } = ue(e2), ne2 = E(`ColorPicker`, `-color-picker`, Vr, Rt, e2, T2);
  rt(vr, { themeRef: ne2, renderLabelRef: R(e2, `renderLabel`), colorPickerSlots: t2 });
  let O2 = L(e2.defaultShow), k2 = Re(R(e2, `show`), O2);
  function re2(t3) {
    let { onUpdateShow: n2, "onUpdate:show": i3 } = e2;
    n2 && r(n2, t3), i3 && r(i3, t3), O2.value = t3;
  }
  let { defaultValue: A2 } = e2, ie2 = L(A2 === void 0 ? or(e2.modes, e2.showAlpha) : A2), j2 = Re(R(e2, `value`), ie2), oe2 = L([j2.value]), se2 = L(0), ce2 = W(() => sr(j2.value)), { modes: le2 } = e2, M2 = L(sr(j2.value) || le2[0] || `rgb`);
  function fe2() {
    let { modes: t3 } = e2, { value: n2 } = M2, r2 = t3.findIndex((e3) => e3 === n2);
    ~r2 ? M2.value = t3[(r2 + 1) % t3.length] : M2.value = `rgb`;
  }
  let N2, P2, pe2, me2, he2, ge2, _e2, ve2, F2 = W(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (ce2.value) {
      case `hsv`:
        return c(e3);
      case `hsl`:
        return [N2, P2, pe2, ve2] = a(e3), [...ae(N2, P2, pe2), ve2];
      case `rgb`:
      case `hex`:
        return [he2, ge2, _e2, ve2] = d(e3), [...p(he2, ge2, _e2), ve2];
    }
  }), ye2 = W(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (ce2.value) {
      case `rgb`:
      case `hex`:
        return d(e3);
      case `hsv`:
        return [N2, P2, me2, ve2] = c(e3), [...v(N2, P2, me2), ve2];
      case `hsl`:
        return [N2, P2, pe2, ve2] = a(e3), [...l(N2, P2, pe2), ve2];
    }
  }), be2 = W(() => {
    let { value: e3 } = j2;
    if (!e3) return null;
    switch (ce2.value) {
      case `hsl`:
        return a(e3);
      case `hsv`:
        return [N2, P2, me2, ve2] = c(e3), [...y(N2, P2, me2), ve2];
      case `rgb`:
      case `hex`:
        return [he2, ge2, _e2, ve2] = d(e3), [...b(he2, ge2, _e2), ve2];
    }
  }), xe2 = W(() => {
    switch (M2.value) {
      case `rgb`:
      case `hex`:
        return ye2.value;
      case `hsv`:
        return F2.value;
      case `hsl`:
        return be2.value;
    }
  }), Ce2 = L(0), we2 = L(1), Te2 = L([0, 0]);
  function Ee2(t3, r2) {
    let { value: i3 } = F2, a2 = Ce2.value, c2 = i3 ? i3[3] : 1;
    Te2.value = [t3, r2];
    let { showAlpha: l2 } = e2;
    switch (M2.value) {
      case `hsv`:
        I2((l2 ? _ : h)([a2, t3, r2, c2]), `cursor`);
        break;
      case `hsl`:
        I2((l2 ? s : g)([...y(a2, t3, r2), c2]), `cursor`);
        break;
      case `rgb`:
        I2((l2 ? u : o)([...v(a2, t3, r2), c2]), `cursor`);
        break;
      case `hex`:
        I2((l2 ? n : de)([...v(a2, t3, r2), c2]), `cursor`);
        break;
    }
  }
  function De2(t3) {
    Ce2.value = t3;
    let { value: r2 } = F2;
    if (!r2) return;
    let [, i3, a2, c2] = r2, { showAlpha: l2 } = e2;
    switch (M2.value) {
      case `hsv`:
        I2((l2 ? _ : h)([t3, i3, a2, c2]), `cursor`);
        break;
      case `rgb`:
        I2((l2 ? u : o)([...v(t3, i3, a2), c2]), `cursor`);
        break;
      case `hex`:
        I2((l2 ? n : de)([...v(t3, i3, a2), c2]), `cursor`);
        break;
      case `hsl`:
        I2((l2 ? s : g)([...y(t3, i3, a2), c2]), `cursor`);
        break;
    }
  }
  function Oe2(e3) {
    switch (M2.value) {
      case `hsv`:
        [N2, P2, me2] = F2.value, I2(_([N2, P2, me2, e3]), `cursor`);
        break;
      case `rgb`:
        [he2, ge2, _e2] = ye2.value, I2(u([he2, ge2, _e2, e3]), `cursor`);
        break;
      case `hex`:
        [he2, ge2, _e2] = ye2.value, I2(n([he2, ge2, _e2, e3]), `cursor`);
        break;
      case `hsl`:
        [N2, P2, pe2] = be2.value, I2(s([N2, P2, pe2, e3]), `cursor`);
        break;
    }
    we2.value = e3;
  }
  function I2(t3, n2) {
    f2 = n2 === `cursor` ? t3 : null;
    let { nTriggerFormChange: i3, nTriggerFormInput: a2 } = m2, { onUpdateValue: o2, "onUpdate:value": s2 } = e2;
    o2 && r(o2, t3), s2 && r(s2, t3), i3(), a2(), ie2.value = t3;
  }
  function ke2(e3) {
    I2(e3, `input`), ft(je2);
  }
  function je2(t3 = true) {
    let { value: n2 } = j2;
    if (n2) {
      let { nTriggerFormChange: r2, nTriggerFormInput: i3 } = m2, { onComplete: a2 } = e2;
      a2 && a2(n2);
      let { value: o2 } = oe2, { value: s2 } = se2;
      t3 && (o2.splice(s2 + 1, o2.length, n2), se2.value = s2 + 1), r2(), i3();
    }
  }
  function Me2() {
    let { value: e3 } = se2;
    e3 - 1 < 0 || (I2(oe2.value[e3 - 1], `input`), je2(false), se2.value = e3 - 1);
  }
  function Ne2() {
    let { value: e3 } = se2;
    e3 < 0 || e3 + 1 >= oe2.value.length || (I2(oe2.value[e3 + 1], `input`), je2(false), se2.value = e3 + 1);
  }
  function Pe2() {
    I2(null, `input`);
    let { onClear: t3 } = e2;
    t3 && t3(), re2(false);
  }
  function Fe2() {
    let { value: t3 } = j2, { onConfirm: n2 } = e2;
    n2 && n2(t3), re2(false);
  }
  let Ie2 = W(() => se2.value >= 1), ze2 = W(() => {
    let { value: e3 } = oe2;
    return e3.length > 1 && se2.value < e3.length - 1;
  });
  ct(k2, (e3) => {
    e3 || (oe2.value = [j2.value], se2.value = 0);
  }), dt(() => {
    if (!(f2 && f2 === j2.value)) {
      let { value: e3 } = F2;
      e3 && (Ce2.value = e3[0], we2.value = e3[3], Te2.value = [e3[1], e3[2]]);
    }
    f2 = null;
  });
  let Be2 = W(() => {
    let { value: e3 } = x2, { common: { cubicBezierEaseInOut: t3 }, self: { textColor: n2, color: r2, panelFontSize: i3, boxShadow: a2, border: o2, borderRadius: s2, dividerColor: c2, [w(`height`, e3)]: l2, [w(`fontSize`, e3)]: u2 } } = ne2.value;
    return { "--n-bezier": t3, "--n-text-color": n2, "--n-color": r2, "--n-panel-font-size": i3, "--n-font-size": u2, "--n-box-shadow": a2, "--n-border": o2, "--n-border-radius": s2, "--n-height": l2, "--n-divider-color": c2 };
  }), Ve2 = te2 ? D(`color-picker`, W(() => x2.value[0]), Be2, e2) : void 0;
  function He2() {
    var _a2;
    let { value: n2 } = ye2, { value: r2 } = Ce2, { internalActions: i3, modes: a2, actions: o2 } = e2, { value: s2 } = ne2, { value: c2 } = T2;
    return V(`div`, { class: [`${c2}-color-picker-panel`, Ve2 == null ? void 0 : Ve2.themeClass.value], onDragstart: (e3) => {
      e3.preventDefault();
    }, style: te2 ? void 0 : Be2.value }, V(`div`, { class: `${c2}-color-picker-control` }, V(Br, { clsPrefix: c2, rgba: n2, displayedHue: r2, displayedSv: Te2.value, onUpdateSV: Ee2, onComplete: je2 }), V(`div`, { class: `${c2}-color-picker-preview` }, V(`div`, { class: `${c2}-color-picker-preview__sliders` }, V(Lr, { clsPrefix: c2, hue: r2, onUpdateHue: De2, onComplete: je2 }), e2.showAlpha ? V(_r, { clsPrefix: c2, rgba: n2, alpha: we2.value, onUpdateAlpha: Oe2, onComplete: je2 }) : null), e2.showPreview ? V(jr, { clsPrefix: c2, mode: M2.value, color: ye2.value && de(ye2.value), onUpdateColor: (e3) => {
      I2(e3, `input`);
    } }) : null), V(Er, { clsPrefix: c2, showAlpha: e2.showAlpha, mode: M2.value, modes: a2, onUpdateMode: fe2, value: j2.value, valueArr: xe2.value, onUpdateValue: ke2 }), ((_a2 = e2.swatches) == null ? void 0 : _a2.length) && V(kr, { clsPrefix: c2, mode: M2.value, swatches: e2.swatches, onUpdateColor: (e3) => {
      I2(e3, `input`);
    } })), (o2 == null ? void 0 : o2.length) ? V(`div`, { class: `${c2}-color-picker-action` }, o2.includes(`confirm`) && V(X, { size: `small`, onClick: Fe2, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.confirm }), o2.includes(`clear`) && V(X, { size: `small`, onClick: Pe2, disabled: !j2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.clear })) : null, t2.action ? V(`div`, { class: `${c2}-color-picker-action` }, { default: t2.action }) : i3 ? V(`div`, { class: `${c2}-color-picker-action` }, i3.includes(`undo`) && V(X, { size: `small`, onClick: Me2, disabled: !Ie2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.undo }), i3.includes(`redo`) && V(X, { size: `small`, onClick: Ne2, disabled: !ze2.value, theme: s2.peers.Button, themeOverrides: s2.peerOverrides.Button }, { default: () => C2.value.redo })) : null);
  }
  return { mergedClsPrefix: T2, namespace: ee2, selfRef: i2, hsla: be2, rgba: ye2, mergedShow: k2, mergedDisabled: S2, isMounted: Le(), adjustedTo: Ae(e2), mergedValue: j2, handleTriggerClick() {
    re2(true);
  }, handleClickOutside(e3) {
    var _a2;
    ((_a2 = i2.value) == null ? void 0 : _a2.contains(Se(e3))) || re2(false);
  }, renderPanel: He2, cssVars: te2 ? void 0 : Be2, themeClass: Ve2 == null ? void 0 : Ve2.themeClass, onRender: Ve2 == null ? void 0 : Ve2.onRender };
}, render() {
  let { mergedClsPrefix: e2, onRender: t2 } = this;
  return t2 == null ? void 0 : t2(), V(`div`, { class: [this.themeClass, `${e2}-color-picker`], ref: `selfRef`, style: this.cssVars }, V(We, null, { default: () => [V(Ce, null, { default: () => V(Ar, { clsPrefix: e2, value: this.mergedValue, hsla: this.hsla, disabled: this.mergedDisabled, onClick: this.handleTriggerClick }) }), V(Qe, { placement: this.placement, show: this.mergedShow, containerClass: this.namespace, teleportDisabled: this.adjustedTo === Ae.tdkey, to: this.adjustedTo }, { default: () => V(st, { name: `fade-in-scale-up-transition`, appear: this.isMounted }, { default: () => this.mergedShow ? it(this.renderPanel(), [[Ge, this.handleClickOutside, void 0, { capture: true }]]) : null }) })] }));
} }), Ur = U({ name: `NDrawerContent`, inheritAttrs: false, props: { blockScroll: Boolean, show: { type: Boolean, default: void 0 }, displayDirective: { type: String, required: true }, placement: { type: String, required: true }, contentClass: String, contentStyle: [Object, String], nativeScrollbar: { type: Boolean, required: true }, scrollbarProps: Object, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, showMask: { type: [Boolean, String], required: true }, maxWidth: Number, maxHeight: Number, minWidth: Number, minHeight: Number, resizable: Boolean, onClickoutside: Function, onAfterLeave: Function, onAfterEnter: Function, onEsc: Function }, setup(e2) {
  let t2 = L(!!e2.show), n2 = L(null), r2 = kt(tt), i2 = 0, a2 = ``, o2 = null, s2 = L(false), c2 = L(false), l2 = W(() => e2.placement === `top` || e2.placement === `bottom`), { mergedClsPrefixRef: u2, mergedRtlRef: d2 } = ue(e2), f2 = ee(`Drawer`, d2, u2), p2 = S2, m2 = (e3) => {
    c2.value = true, i2 = l2.value ? e3.clientY : e3.clientX, a2 = document.body.style.cursor, document.body.style.cursor = l2.value ? `ns-resize` : `ew-resize`, document.body.addEventListener(`mousemove`, x2), document.body.addEventListener(`mouseleave`, p2), document.body.addEventListener(`mouseup`, S2);
  }, h2 = () => {
    o2 !== null && (window.clearTimeout(o2), o2 = null), c2.value ? s2.value = true : o2 = window.setTimeout(() => {
      s2.value = true;
    }, 300);
  }, g2 = () => {
    o2 !== null && (window.clearTimeout(o2), o2 = null), s2.value = false;
  }, { doUpdateHeight: _2, doUpdateWidth: v2 } = r2, y2 = (t3) => {
    let { maxWidth: n3 } = e2;
    if (n3 && t3 > n3) return n3;
    let { minWidth: r3 } = e2;
    return r3 && t3 < r3 ? r3 : t3;
  }, b2 = (t3) => {
    let { maxHeight: n3 } = e2;
    if (n3 && t3 > n3) return n3;
    let { minHeight: r3 } = e2;
    return r3 && t3 < r3 ? r3 : t3;
  };
  function x2(t3) {
    var _a2, _b;
    if (c2.value) if (l2.value) {
      let r3 = ((_a2 = n2.value) == null ? void 0 : _a2.offsetHeight) || 0, a3 = i2 - t3.clientY;
      r3 += e2.placement === `bottom` ? a3 : -a3, r3 = b2(r3), _2(r3), i2 = t3.clientY;
    } else {
      let r3 = ((_b = n2.value) == null ? void 0 : _b.offsetWidth) || 0, a3 = i2 - t3.clientX;
      r3 += e2.placement === `right` ? a3 : -a3, r3 = y2(r3), v2(r3), i2 = t3.clientX;
    }
  }
  function S2() {
    c2.value && (i2 = 0, c2.value = false, document.body.style.cursor = a2, document.body.removeEventListener(`mousemove`, x2), document.body.removeEventListener(`mouseup`, S2), document.body.removeEventListener(`mouseleave`, p2));
  }
  dt(() => {
    e2.show && (t2.value = true);
  }), ct(() => e2.show, (e3) => {
    e3 || S2();
  }), pt(() => {
    S2();
  });
  let C2 = W(() => {
    let { show: t3 } = e2, n3 = [[_t, t3]];
    return e2.showMask || n3.push([Ge, e2.onClickoutside, void 0, { capture: true }]), n3;
  });
  function w2() {
    var n3;
    t2.value = false, (n3 = e2.onAfterLeave) == null || n3.call(e2);
  }
  return It(W(() => e2.blockScroll && t2.value)), rt(Pe, n2), rt(Me, null), rt(Ee, null), { bodyRef: n2, rtlEnabled: f2, mergedClsPrefix: r2.mergedClsPrefixRef, isMounted: r2.isMountedRef, mergedTheme: r2.mergedThemeRef, displayed: t2, transitionName: W(() => ({ right: `slide-in-from-right-transition`, left: `slide-in-from-left-transition`, top: `slide-in-from-top-transition`, bottom: `slide-in-from-bottom-transition` })[e2.placement]), handleAfterLeave: w2, bodyDirectives: C2, handleMousedownResizeTrigger: m2, handleMouseenterResizeTrigger: h2, handleMouseleaveResizeTrigger: g2, isDragging: c2, isHoverOnResizeTrigger: s2 };
}, render() {
  let { $slots: e2, mergedClsPrefix: t2 } = this;
  return this.displayDirective === `show` || this.displayed || this.show ? it(V(`div`, { role: `none` }, V($e, { disabled: !this.showMask || !this.trapFocus, active: this.show, autoFocus: this.autoFocus, onEsc: this.onEsc }, { default: () => V(st, { name: this.transitionName, appear: this.isMounted, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave }, { default: () => it(V(`div`, At(this.$attrs, { role: `dialog`, ref: `bodyRef`, "aria-modal": `true`, class: [`${t2}-drawer`, this.rtlEnabled && `${t2}-drawer--rtl`, `${t2}-drawer--${this.placement}-placement`, this.isDragging && `${t2}-drawer--unselectable`, this.nativeScrollbar && `${t2}-drawer--native-scrollbar`] }), [this.resizable ? V(`div`, { class: [`${t2}-drawer__resize-trigger`, (this.isDragging || this.isHoverOnResizeTrigger) && `${t2}-drawer__resize-trigger--hover`], onMouseenter: this.handleMouseenterResizeTrigger, onMouseleave: this.handleMouseleaveResizeTrigger, onMousedown: this.handleMousedownResizeTrigger }) : null, this.nativeScrollbar ? V(`div`, { class: [`${t2}-drawer-content-wrapper`, this.contentClass], style: this.contentStyle, role: `none` }, e2) : V(Xe, Object.assign({}, this.scrollbarProps, { contentStyle: this.contentStyle, contentClass: [`${t2}-drawer-content-wrapper`, this.contentClass], theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar }), e2)]), this.bodyDirectives) }) })), [[_t, this.displayDirective === `if` || this.displayed || this.show]]) : null;
} }), { cubicBezierEaseIn: Wr, cubicBezierEaseOut: Gr } = k;
function Kr({ duration: e2 = `0.3s`, leaveDuration: t2 = `0.2s`, name: n2 = `slide-in-from-bottom` } = {}) {
  return [x(`&.${n2}-transition-leave-active`, { transition: `transform ${t2} ${Wr}` }), x(`&.${n2}-transition-enter-active`, { transition: `transform ${e2} ${Gr}` }), x(`&.${n2}-transition-enter-to`, { transform: `translateY(0)` }), x(`&.${n2}-transition-enter-from`, { transform: `translateY(100%)` }), x(`&.${n2}-transition-leave-from`, { transform: `translateY(0)` }), x(`&.${n2}-transition-leave-to`, { transform: `translateY(100%)` })];
}
var { cubicBezierEaseIn: qr, cubicBezierEaseOut: Jr } = k;
function Yr({ duration: e2 = `0.3s`, leaveDuration: t2 = `0.2s`, name: n2 = `slide-in-from-left` } = {}) {
  return [x(`&.${n2}-transition-leave-active`, { transition: `transform ${t2} ${qr}` }), x(`&.${n2}-transition-enter-active`, { transition: `transform ${e2} ${Jr}` }), x(`&.${n2}-transition-enter-to`, { transform: `translateX(0)` }), x(`&.${n2}-transition-enter-from`, { transform: `translateX(-100%)` }), x(`&.${n2}-transition-leave-from`, { transform: `translateX(0)` }), x(`&.${n2}-transition-leave-to`, { transform: `translateX(-100%)` })];
}
var { cubicBezierEaseIn: Xr, cubicBezierEaseOut: Zr } = k;
function Qr({ duration: e2 = `0.3s`, leaveDuration: t2 = `0.2s`, name: n2 = `slide-in-from-right` } = {}) {
  return [x(`&.${n2}-transition-leave-active`, { transition: `transform ${t2} ${Xr}` }), x(`&.${n2}-transition-enter-active`, { transition: `transform ${e2} ${Zr}` }), x(`&.${n2}-transition-enter-to`, { transform: `translateX(0)` }), x(`&.${n2}-transition-enter-from`, { transform: `translateX(100%)` }), x(`&.${n2}-transition-leave-from`, { transform: `translateX(0)` }), x(`&.${n2}-transition-leave-to`, { transform: `translateX(100%)` })];
}
var { cubicBezierEaseIn: $r, cubicBezierEaseOut: ei } = k;
function ti({ duration: e2 = `0.3s`, leaveDuration: t2 = `0.2s`, name: n2 = `slide-in-from-top` } = {}) {
  return [x(`&.${n2}-transition-leave-active`, { transition: `transform ${t2} ${$r}` }), x(`&.${n2}-transition-enter-active`, { transition: `transform ${e2} ${ei}` }), x(`&.${n2}-transition-enter-to`, { transform: `translateY(0)` }), x(`&.${n2}-transition-enter-from`, { transform: `translateY(-100%)` }), x(`&.${n2}-transition-leave-from`, { transform: `translateY(0)` }), x(`&.${n2}-transition-leave-to`, { transform: `translateY(-100%)` })];
}
var ni = x([A(`drawer`, `
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `, [Qr(), Yr(), ti(), Kr(), O(`unselectable`, `
 user-select: none; 
 -webkit-user-select: none;
 `), O(`native-scrollbar`, [A(`drawer-content-wrapper`, `
 overflow: auto;
 height: 100%;
 `)]), C(`resize-trigger`, `
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `, [O(`hover`, `
 background-color: var(--n-resize-trigger-color-hover);
 `)]), A(`drawer-content-wrapper`, `
 box-sizing: border-box;
 `), A(`drawer-content`, `
 height: 100%;
 display: flex;
 flex-direction: column;
 `, [O(`native-scrollbar`, [A(`drawer-body-content-wrapper`, `
 height: 100%;
 overflow: auto;
 `)]), A(`drawer-body`, `
 flex: 1 0 0;
 overflow: hidden;
 `), A(`drawer-body-content-wrapper`, `
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `), A(`drawer-header`, `
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `, [C(`main`, `
 flex: 1;
 `), C(`close`, `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), A(`drawer-footer`, `
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]), O(`right-placement`, `
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `, [C(`resize-trigger`, `
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]), O(`left-placement`, `
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [C(`resize-trigger`, `
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]), O(`top-placement`, `
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [C(`resize-trigger`, `
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]), O(`bottom-placement`, `
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `, [C(`resize-trigger`, `
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]), x(`body`, [x(`>`, [A(`drawer-container`, `
 position: fixed;
 `)])]), A(`drawer-container`, `
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `, [x(`> *`, `
 pointer-events: all;
 `)]), A(`drawer-mask`, `
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [O(`invisible`, `
 background-color: rgba(0, 0, 0, 0)
 `), Ke({ enterDuration: `0.2s`, leaveDuration: `0.2s`, enterCubicBezier: `var(--n-bezier-in)`, leaveCubicBezier: `var(--n-bezier-out)` })])]), ri = U({ name: `Drawer`, inheritAttrs: false, props: Object.assign(Object.assign({}, E.props), { show: Boolean, width: [Number, String], height: [Number, String], placement: { type: String, default: `right` }, maskClosable: { type: Boolean, default: true }, showMask: { type: [Boolean, String], default: true }, to: [String, Object], displayDirective: { type: String, default: `if` }, nativeScrollbar: { type: Boolean, default: true }, zIndex: Number, onMaskClick: Function, scrollbarProps: Object, contentClass: String, contentStyle: [Object, String], trapFocus: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true }, maxWidth: Number, maxHeight: Number, minWidth: Number, minHeight: Number, resizable: Boolean, defaultWidth: { type: [Number, String], default: 251 }, defaultHeight: { type: [Number, String], default: 251 }, onUpdateWidth: [Function, Array], onUpdateHeight: [Function, Array], "onUpdate:width": [Function, Array], "onUpdate:height": [Function, Array], "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onAfterLeave: Function, drawerStyle: [String, Object], drawerClass: String, target: null, onShow: Function, onHide: Function }), setup(e2) {
  let { mergedClsPrefixRef: t2, namespaceRef: n2, inlineThemeDisabled: i2 } = ue(e2), a2 = Le(), o2 = E(`Drawer`, `-drawer`, ni, Wt, e2, t2), s2 = L(e2.defaultWidth), c2 = L(e2.defaultHeight), l2 = Re(R(e2, `width`), s2), u2 = Re(R(e2, `height`), c2), d2 = W(() => {
    let { placement: t3 } = e2;
    return t3 === `top` || t3 === `bottom` ? `` : et(l2.value);
  }), f2 = W(() => {
    let { placement: t3 } = e2;
    return t3 === `left` || t3 === `right` ? `` : et(u2.value);
  }), p2 = (t3) => {
    let { onUpdateWidth: n3, "onUpdate:width": i3 } = e2;
    n3 && r(n3, t3), i3 && r(i3, t3), s2.value = t3;
  }, m2 = (t3) => {
    let { onUpdateHeight: n3, "onUpdate:width": i3 } = e2;
    n3 && r(n3, t3), i3 && r(i3, t3), c2.value = t3;
  }, h2 = W(() => [{ width: d2.value, height: f2.value }, e2.drawerStyle || ``]);
  function g2(t3) {
    let { onMaskClick: n3, maskClosable: r2 } = e2;
    r2 && b2(false), n3 && n3(t3);
  }
  function _2(e3) {
    g2(e3);
  }
  let v2 = Lt();
  function y2(t3) {
    var n3;
    (n3 = e2.onEsc) == null || n3.call(e2), e2.show && e2.closeOnEsc && an(t3) && (v2.value || b2(false));
  }
  function b2(t3) {
    let { onHide: n3, onUpdateShow: i3, "onUpdate:show": a3 } = e2;
    i3 && r(i3, t3), a3 && r(a3, t3), n3 && !t3 && r(n3, t3);
  }
  rt(tt, { isMountedRef: a2, mergedThemeRef: o2, mergedClsPrefixRef: t2, doUpdateShow: b2, doUpdateHeight: m2, doUpdateWidth: p2 });
  let x2 = W(() => {
    let { common: { cubicBezierEaseInOut: e3, cubicBezierEaseIn: t3, cubicBezierEaseOut: n3 }, self: { color: r2, textColor: i3, boxShadow: a3, lineHeight: s3, headerPadding: c3, footerPadding: l3, borderRadius: u3, bodyPadding: d3, titleFontSize: f3, titleTextColor: p3, titleFontWeight: m3, headerBorderBottom: h3, footerBorderTop: g3, closeIconColor: _3, closeIconColorHover: v3, closeIconColorPressed: y3, closeColorHover: b3, closeColorPressed: x3, closeIconSize: S3, closeSize: C2, closeBorderRadius: w2, resizableTriggerColorHover: T2 } } = o2.value;
    return { "--n-line-height": s3, "--n-color": r2, "--n-border-radius": u3, "--n-text-color": i3, "--n-box-shadow": a3, "--n-bezier": e3, "--n-bezier-out": n3, "--n-bezier-in": t3, "--n-header-padding": c3, "--n-body-padding": d3, "--n-footer-padding": l3, "--n-title-text-color": p3, "--n-title-font-size": f3, "--n-title-font-weight": m3, "--n-header-border-bottom": h3, "--n-footer-border-top": g3, "--n-close-icon-color": _3, "--n-close-icon-color-hover": v3, "--n-close-icon-color-pressed": y3, "--n-close-size": C2, "--n-close-color-hover": b3, "--n-close-color-pressed": x3, "--n-close-icon-size": S3, "--n-close-border-radius": w2, "--n-resize-trigger-color-hover": T2 };
  }), S2 = i2 ? D(`drawer`, void 0, x2, e2) : void 0;
  return { mergedClsPrefix: t2, namespace: n2, mergedBodyStyle: h2, handleOutsideClick: _2, handleMaskClick: g2, handleEsc: y2, mergedTheme: o2, cssVars: i2 ? void 0 : x2, themeClass: S2 == null ? void 0 : S2.themeClass, onRender: S2 == null ? void 0 : S2.onRender, isMounted: a2 };
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return V(Ie, { to: this.to, show: this.show }, { default: () => {
    var t2;
    return (t2 = this.onRender) == null || t2.call(this), it(V(`div`, { class: [`${e2}-drawer-container`, this.namespace, this.themeClass], style: this.cssVars, role: `none` }, this.showMask ? V(st, { name: `fade-in-transition`, appear: this.isMounted }, { default: () => this.show ? V(`div`, { "aria-hidden": true, class: [`${e2}-drawer-mask`, this.showMask === `transparent` && `${e2}-drawer-mask--invisible`], onClick: this.handleMaskClick }) : null }) : null, V(Ur, Object.assign({}, this.$attrs, { class: [this.drawerClass, this.$attrs.class], style: [this.mergedBodyStyle, this.$attrs.style], blockScroll: this.blockScroll, contentStyle: this.contentStyle, contentClass: this.contentClass, placement: this.placement, scrollbarProps: this.scrollbarProps, show: this.show, displayDirective: this.displayDirective, nativeScrollbar: this.nativeScrollbar, onAfterEnter: this.onAfterEnter, onAfterLeave: this.onAfterLeave, trapFocus: this.trapFocus, autoFocus: this.autoFocus, resizable: this.resizable, maxHeight: this.maxHeight, minHeight: this.minHeight, maxWidth: this.maxWidth, minWidth: this.minWidth, showMask: this.showMask, onEsc: this.handleEsc, onClickoutside: this.handleOutsideClick }), this.$slots)), [[je, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} }), ii = U({ name: `DrawerContent`, props: { title: String, headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], bodyClass: String, bodyStyle: [Object, String], bodyContentClass: String, bodyContentStyle: [Object, String], nativeScrollbar: { type: Boolean, default: true }, scrollbarProps: Object, closable: Boolean }, slots: Object, setup() {
  let e2 = kt(tt, null);
  e2 || ne(`drawer-content`, "`n-drawer-content` must be placed inside `n-drawer`.");
  let { doUpdateShow: t2 } = e2;
  function n2() {
    t2(false);
  }
  return { handleCloseClick: n2, mergedTheme: e2.mergedThemeRef, mergedClsPrefix: e2.mergedClsPrefixRef };
}, render() {
  let { title: e2, mergedClsPrefix: t2, nativeScrollbar: n2, mergedTheme: r2, bodyClass: i2, bodyStyle: a2, bodyContentClass: o2, bodyContentStyle: s2, headerClass: c2, headerStyle: l2, footerClass: u2, footerStyle: d2, scrollbarProps: f2, closable: p2, $slots: m2 } = this;
  return V(`div`, { role: `none`, class: [`${t2}-drawer-content`, n2 && `${t2}-drawer-content--native-scrollbar`] }, m2.header || e2 || p2 ? V(`div`, { class: [`${t2}-drawer-header`, c2], style: l2, role: `none` }, V(`div`, { class: `${t2}-drawer-header__main`, role: `heading`, "aria-level": `1` }, m2.header === void 0 ? e2 : m2.header()), p2 && V(S, { onClick: this.handleCloseClick, clsPrefix: t2, class: `${t2}-drawer-header__close`, absolute: true })) : null, n2 ? V(`div`, { class: [`${t2}-drawer-body`, i2], style: a2, role: `none` }, V(`div`, { class: [`${t2}-drawer-body-content-wrapper`, o2], style: s2, role: `none` }, m2)) : V(Xe, Object.assign({ themeOverrides: r2.peerOverrides.Scrollbar, theme: r2.peers.Scrollbar }, f2, { class: `${t2}-drawer-body`, contentClass: [`${t2}-drawer-body-content-wrapper`, o2], contentStyle: s2 }), m2), m2.footer ? V(`div`, { class: [`${t2}-drawer-footer`, u2], style: d2, role: `none` }, m2.footer()) : null);
} }), ai = A(`dynamic-tags`, [A(`input`, { minWidth: `var(--n-input-width)` })]), oi = U({ name: `DynamicTags`, props: Object.assign(Object.assign(Object.assign({}, E.props), fn), { size: { type: String, default: `medium` }, closable: { type: Boolean, default: true }, defaultValue: { type: Array, default: () => [] }, value: Array, inputClass: String, inputStyle: [String, Object], inputProps: Object, max: Number, tagClass: String, tagStyle: [String, Object], renderTag: Function, onCreate: { type: Function, default: (e2) => e2 }, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = ue(e2), { localeRef: i2 } = un(`DynamicTags`), a2 = rn(e2), { mergedDisabledRef: o2 } = a2, s2 = L(``), c2 = L(false), l2 = L(true), u2 = L(null), d2 = E(`DynamicTags`, `-dynamic-tags`, ai, Ht, e2, t2), f2 = L(e2.defaultValue), p2 = Re(R(e2, `value`), f2), m2 = W(() => i2.value.add), h2 = W(() => Xn(e2.size)), g2 = W(() => o2.value || !!e2.max && p2.value.length >= e2.max);
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
    c2.value = true, ft(() => {
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
  return r2 == null ? void 0 : r2(), V(_n, { class: [`${n2}-dynamic-tags`, this.themeClass], size: `small`, style: t2, theme: e2.peers.Space, themeOverrides: e2.peerOverrides.Space, itemStyle: `display: flex;` }, { default: () => {
    let { mergedTheme: e3, tagClass: t3, tagStyle: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, mergedDisabled: u2, showInput: d2, inputValue: f2, inputClass: p2, inputStyle: m2, inputSize: h2, inputForceFocused: g2, triggerDisabled: _2, handleInputKeyDown: v2, handleInputBlur: y2, handleAddClick: b2, handleCloseClick: x2, handleInputConfirm: S2, $slots: C2 } = this;
    return this.mergedValue.map((n3, d3) => i2 ? i2(n3, d3) : V(mn, { key: d3, theme: e3.peers.Tag, themeOverrides: e3.peerOverrides.Tag, class: t3, style: r3, type: a2, round: o2, size: s2, color: c2, closable: l2, disabled: u2, onClose: () => {
      x2(d3);
    } }, { default: () => typeof n3 == `string` ? n3 : n3.label })).concat(d2 ? C2.input ? C2.input({ submit: S2, deactivate: y2 }) : V(F, Object.assign({ placeholder: ``, size: h2, style: m2, class: p2, autosize: true }, this.inputProps, { ref: `inputInstRef`, value: f2, onUpdateValue: (e4) => {
      this.inputValue = e4;
    }, theme: e3.peers.Input, themeOverrides: e3.peerOverrides.Input, onKeydown: v2, onBlur: y2, internalForceFocus: g2 })) : C2.trigger ? C2.trigger({ activate: b2, disabled: _2 }) : V(X, { dashed: true, disabled: _2, theme: e3.peers.Button, themeOverrides: e3.peerOverrides.Button, size: h2, onClick: b2 }, { icon: () => V(ce, { clsPrefix: n2 }, { default: () => V(he, null) }) }));
  } });
} }), si = U({ name: `Flex`, props: Object.assign(Object.assign({}, E.props), { align: String, justify: { type: String, default: `start` }, inline: Boolean, vertical: Boolean, reverse: Boolean, size: { type: [String, Number, Array], default: `medium` }, wrap: { type: Boolean, default: true } }), setup(t2) {
  let { mergedClsPrefixRef: n2, mergedRtlRef: r2 } = ue(t2), i2 = E(`Flex`, `-flex`, void 0, Jt, t2, n2);
  return { rtlEnabled: ee(`Flex`, r2, n2), mergedClsPrefix: n2, margin: W(() => {
    let { size: n3 } = t2;
    if (Array.isArray(n3)) return { horizontal: n3[0], vertical: n3[1] };
    if (typeof n3 == `number`) return { horizontal: n3, vertical: n3 };
    let { self: { [w(`gap`, n3)]: r3 } } = i2.value, { row: a2, col: o2 } = T(r3);
    return { horizontal: e(o2), vertical: e(a2) };
  }) };
}, render() {
  let { vertical: e2, reverse: t2, align: n2, inline: r2, justify: i2, margin: a2, wrap: o2, mergedClsPrefix: s2, rtlEnabled: c2 } = this, l2 = Ze(ln(this), false);
  return l2.length ? V(`div`, { role: `none`, class: [`${s2}-flex`, c2 && `${s2}-flex--rtl`], style: { display: r2 ? `inline-flex` : `flex`, flexDirection: /* @__PURE__ */ (() => e2 && !t2 ? `column` : e2 && t2 ? `column-reverse` : !e2 && t2 ? `row-reverse` : `row`)(), justifyContent: i2, flexWrap: !o2 || e2 ? `nowrap` : `wrap`, alignItems: n2, gap: `${a2.vertical}px ${a2.horizontal}px` } }, l2) : null;
} });
const ci = f(`n-form`), li = f(`n-form-item-insts`);
var ui = A(`form`, [O(`inline`, `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [A(`form-item`, { width: `auto`, marginRight: `18px` }, [x(`&:last-child`, { marginRight: 0 })])])]), di = function(e2, t2, n2, r2) {
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
}, fi = U({ name: `Form`, props: Object.assign(Object.assign({}, E.props), { inline: Boolean, labelWidth: [Number, String], labelAlign: String, labelPlacement: { type: String, default: `top` }, model: { type: Object, default: () => {
} }, rules: Object, disabled: Boolean, size: String, showRequireMark: { type: Boolean, default: void 0 }, requireMarkPlacement: String, showFeedback: { type: Boolean, default: true }, onSubmit: { type: Function, default: (e2) => {
  e2.preventDefault();
} }, showLabel: { type: Boolean, default: void 0 }, validateMessages: Object }), setup(e2) {
  let { mergedClsPrefixRef: t2 } = ue(e2);
  E(`Form`, `-form`, ui, Vt, e2, t2);
  let n2 = {}, r2 = L(void 0), a2 = (e3) => {
    let t3 = r2.value;
    (t3 === void 0 || e3 >= t3) && (r2.value = e3);
  };
  function o2(e3) {
    return di(this, arguments, void 0, function* (e4, t3 = () => true) {
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
  rt(ci, { props: e2, maxChildLabelWidthRef: r2, deriveMaxChildLabelWidth: a2 }), rt(li, { formItems: n2 });
  let c2 = { validate: o2, restoreValidation: s2 };
  return Object.assign(c2, { mergedClsPrefix: t2 });
}, render() {
  let { mergedClsPrefix: e2 } = this;
  return V(`form`, { class: [`${e2}-form`, this.inline && `${e2}-form--inline`], onSubmit: this.onSubmit }, this.$slots);
} });
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, pi.apply(this, arguments);
}
function mi(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, gi(e2, t2);
}
function hi(e2) {
  return hi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
    return e3.__proto__ || Object.getPrototypeOf(e3);
  }, hi(e2);
}
function gi(e2, t2) {
  return gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
    return e3.__proto__ = t3, e3;
  }, gi(e2, t2);
}
function _i() {
  if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == `function`) return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function vi(e2, t2, n2) {
  return vi = _i() ? Reflect.construct.bind() : function(e3, t3, n3) {
    var r2 = [null];
    r2.push.apply(r2, t3);
    var i2 = new (Function.bind.apply(e3, r2))();
    return n3 && gi(i2, n3.prototype), i2;
  }, vi.apply(null, arguments);
}
function yi(e2) {
  return Function.toString.call(e2).indexOf(`[native code]`) !== -1;
}
function bi(e2) {
  var t2 = typeof Map == `function` ? /* @__PURE__ */ new Map() : void 0;
  return bi = function(e3) {
    if (e3 === null || !yi(e3)) return e3;
    if (typeof e3 != `function`) throw TypeError(`Super expression must either be null or a function`);
    if (t2 !== void 0) {
      if (t2.has(e3)) return t2.get(e3);
      t2.set(e3, n2);
    }
    function n2() {
      return vi(e3, arguments, hi(this).constructor);
    }
    return n2.prototype = Object.create(e3.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), gi(n2, e3);
  }, bi(e2);
}
var xi = /%[sdj%]/g, Si = function() {
};
function Ci(e2) {
  if (!e2 || !e2.length) return null;
  var t2 = {};
  return e2.forEach(function(e3) {
    var n2 = e3.field;
    t2[n2] = t2[n2] || [], t2[n2].push(e3);
  }), t2;
}
function wi(e2) {
  var t2 = [...arguments].slice(1), n2 = 0, r2 = t2.length;
  return typeof e2 == `function` ? e2.apply(null, t2) : typeof e2 == `string` ? e2.replace(xi, function(e3) {
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
function Ti(e2) {
  return e2 === `string` || e2 === `url` || e2 === `hex` || e2 === `email` || e2 === `date` || e2 === `pattern`;
}
function Q(e2, t2) {
  return !!(e2 == null || t2 === `array` && Array.isArray(e2) && !e2.length || Ti(t2) && typeof e2 == `string` && !e2);
}
function Ei(e2, t2, n2) {
  var r2 = [], i2 = 0, a2 = e2.length;
  function o2(e3) {
    r2.push.apply(r2, e3 || []), i2++, i2 === a2 && n2(r2);
  }
  e2.forEach(function(e3) {
    t2(e3, o2);
  });
}
function Di(e2, t2, n2) {
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
function Oi(e2) {
  var t2 = [];
  return Object.keys(e2).forEach(function(n2) {
    t2.push.apply(t2, e2[n2] || []);
  }), t2;
}
var ki = (function(e2) {
  mi(t2, e2);
  function t2(t3, n2) {
    var r2 = e2.call(this, `Async Validation Error`) || this;
    return r2.errors = t3, r2.fields = n2, r2;
  }
  return t2;
})(bi(Error));
function Ai(e2, t2, n2, r2, i2) {
  if (t2.first) {
    var a2 = new Promise(function(t3, a3) {
      Di(Oi(e2), n2, function(e3) {
        return r2(e3), e3.length ? a3(new ki(e3, Ci(e3))) : t3(i2);
      });
    });
    return a2.catch(function(e3) {
      return e3;
    }), a2;
  }
  var o2 = t2.firstFields === true ? Object.keys(e2) : t2.firstFields || [], s2 = Object.keys(e2), c2 = s2.length, l2 = 0, u2 = [], d2 = new Promise(function(t3, a3) {
    var d3 = function(e3) {
      if (u2.push.apply(u2, e3), l2++, l2 === c2) return r2(u2), u2.length ? a3(new ki(u2, Ci(u2))) : t3(i2);
    };
    s2.length || (r2(u2), t3(i2)), s2.forEach(function(t4) {
      var r3 = e2[t4];
      o2.indexOf(t4) === -1 ? Ei(r3, n2, d3) : Di(r3, n2, d3);
    });
  });
  return d2.catch(function(e3) {
    return e3;
  }), d2;
}
function ji(e2) {
  return !!(e2 && e2.message !== void 0);
}
function Mi(e2, t2) {
  for (var n2 = e2, r2 = 0; r2 < t2.length; r2++) {
    if (n2 == null) return n2;
    n2 = n2[t2[r2]];
  }
  return n2;
}
function Ni(e2, t2) {
  return function(n2) {
    var r2 = e2.fullFields ? Mi(t2, e2.fullFields) : t2[n2.field || e2.fullField];
    return ji(n2) ? (n2.field = n2.field || e2.fullField, n2.fieldValue = r2, n2) : { message: typeof n2 == `function` ? n2() : n2, fieldValue: r2, field: n2.field || e2.fullField };
  };
}
function Pi(e2, t2) {
  if (t2) {
    for (var n2 in t2) if (t2.hasOwnProperty(n2)) {
      var r2 = t2[n2];
      typeof r2 == `object` && typeof e2[n2] == `object` ? e2[n2] = pi({}, e2[n2], r2) : e2[n2] = r2;
    }
  }
  return e2;
}
var Fi = function(e2, t2, n2, r2, i2, a2) {
  e2.required && (!n2.hasOwnProperty(e2.field) || Q(t2, a2 || e2.type)) && r2.push(wi(i2.messages.required, e2.fullField));
}, Ii = function(e2, t2, n2, r2, i2) {
  (/^\s+$/.test(t2) || t2 === ``) && r2.push(wi(i2.messages.whitespace, e2.fullField));
}, Li, Ri = (function() {
  if (Li) return Li;
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
  return Li = RegExp(`(?:^` + p2 + `$)`, `i`), Li;
}), zi = { email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/, hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i }, Bi = { integer: function(e2) {
  return Bi.number(e2) && parseInt(e2, 10) === e2;
}, float: function(e2) {
  return Bi.number(e2) && !Bi.integer(e2);
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
  return typeof e2 == `object` && !Bi.array(e2);
}, method: function(e2) {
  return typeof e2 == `function`;
}, email: function(e2) {
  return typeof e2 == `string` && e2.length <= 320 && !!e2.match(zi.email);
}, url: function(e2) {
  return typeof e2 == `string` && e2.length <= 2048 && !!e2.match(Ri());
}, hex: function(e2) {
  return typeof e2 == `string` && !!e2.match(zi.hex);
} }, Vi = function(e2, t2, n2, r2, i2) {
  if (e2.required && t2 === void 0) {
    Fi(e2, t2, n2, r2, i2);
    return;
  }
  var a2 = [`integer`, `float`, `array`, `regexp`, `object`, `method`, `email`, `number`, `date`, `url`, `hex`], o2 = e2.type;
  a2.indexOf(o2) > -1 ? Bi[o2](t2) || r2.push(wi(i2.messages.types[o2], e2.fullField, e2.type)) : o2 && typeof t2 !== e2.type && r2.push(wi(i2.messages.types[o2], e2.fullField, e2.type));
}, Hi = function(e2, t2, n2, r2, i2) {
  var a2 = typeof e2.len == `number`, o2 = typeof e2.min == `number`, s2 = typeof e2.max == `number`, c2 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l2 = t2, u2 = null, d2 = typeof t2 == `number`, f2 = typeof t2 == `string`, p2 = Array.isArray(t2);
  if (d2 ? u2 = `number` : f2 ? u2 = `string` : p2 && (u2 = `array`), !u2) return false;
  p2 && (l2 = t2.length), f2 && (l2 = t2.replace(c2, `_`).length), a2 ? l2 !== e2.len && r2.push(wi(i2.messages[u2].len, e2.fullField, e2.len)) : o2 && !s2 && l2 < e2.min ? r2.push(wi(i2.messages[u2].min, e2.fullField, e2.min)) : s2 && !o2 && l2 > e2.max ? r2.push(wi(i2.messages[u2].max, e2.fullField, e2.max)) : o2 && s2 && (l2 < e2.min || l2 > e2.max) && r2.push(wi(i2.messages[u2].range, e2.fullField, e2.min, e2.max));
}, Ui = `enum`, $ = { required: Fi, whitespace: Ii, type: Vi, range: Hi, enum: function(e2, t2, n2, r2, i2) {
  e2[Ui] = Array.isArray(e2[Ui]) ? e2[Ui] : [], e2[Ui].indexOf(t2) === -1 && r2.push(wi(i2.messages[Ui], e2.fullField, e2[Ui].join(`, `)));
}, pattern: function(e2, t2, n2, r2, i2) {
  e2.pattern && (e2.pattern instanceof RegExp ? (e2.pattern.lastIndex = 0, e2.pattern.test(t2) || r2.push(wi(i2.messages.pattern.mismatch, e2.fullField, t2, e2.pattern))) : typeof e2.pattern == `string` && (new RegExp(e2.pattern).test(t2) || r2.push(wi(i2.messages.pattern.mismatch, e2.fullField, t2, e2.pattern))));
} }, Wi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2, `string`) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2, `string`), Q(t2, `string`) || ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2), $.pattern(e2, t2, r2, a2, i2), e2.whitespace === true && $.whitespace(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, Gi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && $.type(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, Ki = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (t2 === `` && (t2 = void 0), Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, qi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && $.type(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, Ji = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), Q(t2) || $.type(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, Yi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, Xi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, Zi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (t2 == null && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2, `array`), t2 != null && ($.type(e2, t2, r2, a2, i2), $.range(e2, t2, r2, a2, i2));
  }
  n2(a2);
}, Qi = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && $.type(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, $i = `enum`, ea = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), t2 !== void 0 && $[$i](e2, t2, r2, a2, i2);
  }
  n2(a2);
}, ta = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2, `string`) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2), Q(t2, `string`) || $.pattern(e2, t2, r2, a2, i2);
  }
  n2(a2);
}, na = function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2, `date`) && !e2.required) return n2();
    if ($.required(e2, t2, r2, a2, i2), !Q(t2, `date`)) {
      var o2 = t2 instanceof Date ? t2 : new Date(t2);
      $.type(e2, o2, r2, a2, i2), o2 && $.range(e2, o2.getTime(), r2, a2, i2);
    }
  }
  n2(a2);
}, ra = function(e2, t2, n2, r2, i2) {
  var a2 = [], o2 = Array.isArray(t2) ? `array` : typeof t2;
  $.required(e2, t2, r2, a2, i2, o2), n2(a2);
}, ia = function(e2, t2, n2, r2, i2) {
  var a2 = e2.type, o2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2, a2) && !e2.required) return n2();
    $.required(e2, t2, r2, o2, i2, a2), Q(t2, a2) || $.type(e2, t2, r2, o2, i2);
  }
  n2(o2);
}, aa = { string: Wi, method: Gi, number: Ki, boolean: qi, regexp: Ji, integer: Yi, float: Xi, array: Zi, object: Qi, enum: ea, pattern: ta, date: na, url: ia, hex: ia, email: ia, required: ra, any: function(e2, t2, n2, r2, i2) {
  var a2 = [];
  if (e2.required || !e2.required && r2.hasOwnProperty(e2.field)) {
    if (Q(t2) && !e2.required) return n2();
    $.required(e2, t2, r2, a2, i2);
  }
  n2(a2);
} };
function oa() {
  return { default: `Validation error on field %s`, required: `%s is required`, enum: `%s must be one of %s`, whitespace: `%s cannot be empty`, date: { format: `%s date %s is invalid for format %s`, parse: `%s date could not be parsed, %s is invalid `, invalid: `%s date %s is invalid` }, types: { string: `%s is not a %s`, method: `%s is not a %s (function)`, array: `%s is not an %s`, object: `%s is not an %s`, number: `%s is not a %s`, date: `%s is not a %s`, boolean: `%s is not a %s`, integer: `%s is not an %s`, float: `%s is not a %s`, regexp: `%s is not a valid %s`, email: `%s is not a valid %s`, url: `%s is not a valid %s`, hex: `%s is not a valid %s` }, string: { len: `%s must be exactly %s characters`, min: `%s must be at least %s characters`, max: `%s cannot be longer than %s characters`, range: `%s must be between %s and %s characters` }, number: { len: `%s must equal %s`, min: `%s cannot be less than %s`, max: `%s cannot be greater than %s`, range: `%s must be between %s and %s` }, array: { len: `%s must be exactly %s in length`, min: `%s cannot be less than %s in length`, max: `%s cannot be greater than %s in length`, range: `%s must be between %s and %s in length` }, pattern: { mismatch: `%s value %s does not match pattern %s` }, clone: function() {
    var e2 = JSON.parse(JSON.stringify(this));
    return e2.clone = this.clone, e2;
  } };
}
var sa = oa(), ca = (function() {
  function e2(e3) {
    this.rules = null, this._messages = sa, this.define(e3);
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
    return e3 && (this._messages = Pi(oa(), e3)), this._messages;
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
      t4.length ? (n3 = Ci(t4), s2(t4, n3)) : s2(null, a2);
    }
    if (o2.messages) {
      var l2 = this.messages();
      l2 === sa && (l2 = oa()), Pi(l2, o2.messages), o2.messages = l2;
    } else o2.messages = this.messages();
    var u2 = {};
    (o2.keys || Object.keys(this.rules)).forEach(function(e3) {
      var n3 = i2.rules[e3], r3 = a2[e3];
      n3.forEach(function(n4) {
        var o3 = n4;
        typeof o3.transform == `function` && (a2 === t3 && (a2 = pi({}, a2)), r3 = a2[e3] = o3.transform(r3)), o3 = typeof o3 == `function` ? { validator: o3 } : pi({}, o3), o3.validator = i2.getValidationMethod(o3), o3.validator && (o3.field = e3, o3.fullField = o3.fullField || e3, o3.type = i2.getType(o3), u2[e3] = u2[e3] || [], u2[e3].push({ rule: o3, value: r3, source: a2, field: e3 }));
      });
    });
    var d2 = {};
    return Ai(u2, o2, function(t4, n3) {
      var r3 = t4.rule, i3 = (r3.type === `object` || r3.type === `array`) && (typeof r3.fields == `object` || typeof r3.defaultField == `object`);
      i3 && (i3 = r3.required || !r3.required && t4.value), r3.field = t4.field;
      function s3(e3, t5) {
        return pi({}, t5, { fullField: r3.fullField + `.` + e3, fullFields: r3.fullFields ? [].concat(r3.fullFields, [e3]) : [e3] });
      }
      function c3(c4) {
        c4 === void 0 && (c4 = []);
        var l4 = Array.isArray(c4) ? c4 : [c4];
        !o2.suppressWarning && l4.length && e2.warning(`async-validator:`, l4), l4.length && r3.message !== void 0 && (l4 = [].concat(r3.message));
        var u3 = l4.map(Ni(r3, a2));
        if (o2.first && u3.length) return d2[r3.field] = 1, n3(u3);
        if (!i3) n3(u3);
        else {
          if (r3.required && !t4.value) return r3.message === void 0 ? o2.error && (u3 = [o2.error(r3, wi(o2.messages.required, r3.field))]) : u3 = [].concat(r3.message).map(Ni(r3, a2)), n3(u3);
          var f2 = {};
          r3.defaultField && Object.keys(t4.value).map(function(e3) {
            f2[e3] = r3.defaultField;
          }), f2 = pi({}, f2, t4.rule.fields);
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
    if (e3.type === void 0 && e3.pattern instanceof RegExp && (e3.type = `pattern`), typeof e3.validator != `function` && e3.type && !aa.hasOwnProperty(e3.type)) throw Error(wi(`Unknown rule type %s`, e3.type));
    return e3.type || `string`;
  }, t2.getValidationMethod = function(e3) {
    if (typeof e3.validator == `function`) return e3.validator;
    var t3 = Object.keys(e3), n2 = t3.indexOf(`message`);
    return n2 !== -1 && t3.splice(n2, 1), t3.length === 1 && t3[0] === `required` ? aa.required : aa[this.getType(e3)] || void 0;
  }, e2;
})();
ca.register = function(e2, t2) {
  if (typeof t2 != `function`) throw Error(`Cannot register a validator by type, validator is not a function`);
  aa[e2] = t2;
}, ca.warning = Si, ca.messages = sa, ca.validators = aa;
var { cubicBezierEaseInOut: la } = k;
function ua({ name: e2 = `fade-down`, fromOffset: t2 = `-4px`, enterDuration: n2 = `.3s`, leaveDuration: r2 = `.3s`, enterCubicBezier: i2 = la, leaveCubicBezier: a2 = la } = {}) {
  return [x(`&.${e2}-transition-enter-from, &.${e2}-transition-leave-to`, { opacity: 0, transform: `translateY(${t2})` }), x(`&.${e2}-transition-enter-to, &.${e2}-transition-leave-from`, { opacity: 1, transform: `translateY(0)` }), x(`&.${e2}-transition-leave-active`, { transition: `opacity ${r2} ${a2}, transform ${r2} ${a2}` }), x(`&.${e2}-transition-enter-active`, { transition: `opacity ${n2} ${i2}, transform ${n2} ${i2}` })];
}
var da = A(`form-item`, `
 display: grid;
 line-height: var(--n-line-height);
`, [A(`form-item-label`, `
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
 `)]), A(`form-item-blank`, `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), O(`auto-label-width`, [A(`form-item-label`, `white-space: nowrap;`)]), O(`left-labelled`, `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [A(`form-item-label`, `
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
 `), A(`form-item-label`, `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), A(`form-item-blank`, `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), A(`form-item-feedback-wrapper`, `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [x(`&:not(:empty)`, `
 padding: var(--n-feedback-padding);
 `), A(`form-item-feedback`, { transition: `color .3s var(--n-bezier)`, color: `var(--n-feedback-text-color)` }, [O(`warning`, { color: `var(--n-feedback-text-color-warning)` }), O(`error`, { color: `var(--n-feedback-text-color-error)` }), ua({ fromOffset: `-3px`, enterDuration: `.3s`, leaveDuration: `.2s` })])])]);
function fa(e2) {
  let t2 = kt(ci, null);
  return { mergedSize: W(() => e2.size === void 0 ? (t2 == null ? void 0 : t2.props.size) === void 0 ? `medium` : t2.props.size : e2.size) };
}
function pa(e2) {
  let t2 = kt(ci, null), n2 = W(() => {
    let { labelPlacement: n3 } = e2;
    return n3 === void 0 ? (t2 == null ? void 0 : t2.props.labelPlacement) ? t2.props.labelPlacement : `top` : n3;
  }), r2 = W(() => n2.value === `left` && (e2.labelWidth === `auto` || (t2 == null ? void 0 : t2.props.labelWidth) === `auto`)), i2 = W(() => {
    if (n2.value === `top`) return;
    let { labelWidth: i3 } = e2;
    if (i3 !== void 0 && i3 !== `auto`) return et(i3);
    if (r2.value) {
      let e3 = t2 == null ? void 0 : t2.maxChildLabelWidthRef.value;
      return e3 === void 0 ? void 0 : et(e3);
    }
    if ((t2 == null ? void 0 : t2.props.labelWidth) !== void 0) return et(t2.props.labelWidth);
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
  }), l2 = L(false), u2 = L(false);
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
function ma(e2) {
  let t2 = kt(ci, null), n2 = W(() => {
    let { rulePath: t3 } = e2;
    if (t3 !== void 0) return t3;
    let { path: n3 } = e2;
    if (n3 !== void 0) return n3;
  }), r2 = W(() => {
    let r3 = [], { rule: i3 } = e2;
    if (i3 !== void 0 && (Array.isArray(i3) ? r3.push(...i3) : r3.push(i3)), t2) {
      let { rules: e3 } = t2.props, { value: i4 } = n2;
      if (e3 !== void 0 && i4 !== void 0) {
        let t3 = Ye(e3, i4);
        t3 !== void 0 && (Array.isArray(t3) ? r3.push(...t3) : r3.push(t3));
      }
    }
    return r3;
  }), i2 = W(() => r2.value.some((e3) => e3.required));
  return { mergedRules: r2, mergedRequired: W(() => i2.value || e2.required) };
}
var ha = function(e2, t2, n2, r2) {
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
const ga = Object.assign(Object.assign({}, E.props), { label: String, labelWidth: [Number, String], labelStyle: [String, Object], labelAlign: String, labelPlacement: String, path: String, first: Boolean, rulePath: String, required: Boolean, showRequireMark: { type: Boolean, default: void 0 }, requireMarkPlacement: String, showFeedback: { type: Boolean, default: void 0 }, rule: [Object, Array], size: String, ignorePathChange: Boolean, validationStatus: String, feedback: String, feedbackClass: String, feedbackStyle: [String, Object], showLabel: { type: Boolean, default: void 0 }, labelProps: Object, contentClass: String, contentStyle: [String, Object] });
i(ga);
function _a(e2, n2) {
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
var va = U({ name: `FormItem`, props: ga, setup(e2) {
  Zt(li, `formItems`, R(e2, `path`));
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2 } = ue(e2), r2 = kt(ci, null), i2 = fa(e2), a2 = pa(e2), { validationErrored: o2, validationWarned: s2 } = a2, { mergedRequired: c2, mergedRules: l2 } = ma(e2), { mergedSize: u2 } = i2, { mergedLabelPlacement: d2, mergedLabelAlign: f2, mergedRequireMarkPlacement: p2 } = a2, m2 = L([]), h2 = L(Ne()), g2 = r2 ? R(r2.props, `disabled`) : L(false), _2 = E(`Form`, `-form-item`, da, Vt, e2, t2);
  ct(R(e2, `path`), () => {
    e2.ignorePathChange || v2();
  });
  function v2() {
    m2.value = [], o2.value = false, s2.value = false, e2.feedback && (h2.value = Ne());
  }
  let y2 = (...t3) => ha(this, [...t3], void 0, function* (t4 = null, n3 = () => true, i3 = { suppressWarning: true }) {
    let { path: a3 } = e2;
    i3 ? i3.first || (i3.first = e2.first) : i3 = {};
    let { value: c3 } = l2, u3 = r2 ? Ye(r2.props.model, a3 || ``) : void 0, d3 = {}, f3 = {}, p3 = (t4 ? c3.filter((e3) => Array.isArray(e3.trigger) ? e3.trigger.includes(t4) : e3.trigger === t4) : c3).filter(n3).map((e3, t5) => {
      let n4 = Object.assign({}, e3);
      if (n4.validator && (n4.validator = _a(n4.validator, false)), n4.asyncValidator && (n4.asyncValidator = _a(n4.asyncValidator, true)), n4.renderMessage) {
        let e4 = `__renderMessage__${t5}`;
        f3[e4] = n4.message, n4.message = e4, d3[e4] = n4.renderMessage;
      }
      return n4;
    }), h3 = p3.filter((e3) => e3.level !== `warning`), g3 = p3.filter((e3) => e3.level === `warning`), _3 = { valid: true, errors: void 0, warnings: void 0 };
    if (!p3.length) return _3;
    let y3 = a3 ?? `__n_no_path__`, b3 = new ca({ [y3]: h3 }), x3 = new ca({ [y3]: g3 }), { validateMessages: S3 } = (r2 == null ? void 0 : r2.props) || {};
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
    return ha(this, void 0, void 0, function* () {
      let n3, r3, i3, a3;
      return typeof e3 == `string` ? (n3 = e3, r3 = t3) : typeof e3 == `object` && e3 && (n3 = e3.trigger, r3 = e3.callback, i3 = e3.shouldRuleBeApplied, a3 = e3.options), yield new Promise((e4, t4) => {
        y2(n3, i3, a3).then(({ valid: n4, errors: i4, warnings: a4 }) => {
          n4 ? (r3 && r3(void 0, { warnings: a4 }), e4({ warnings: a4 })) : (r3 && r3(i4, { warnings: a4 }), t4(i4));
        });
      });
    });
  }
  rt(on, { path: R(e2, `path`), disabled: g2, mergedSize: i2.mergedSize, mergedValidationStatus: a2.mergedValidationStatus, restoreValidation: v2, handleContentBlur: b2, handleContentChange: x2, handleContentFocus: S2, handleContentInput: C2 });
  let ee2 = { validate: T2, restoreValidation: v2, internalValidate: y2 }, te2 = L(null);
  at(() => {
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
  }), ne2, e2) : void 0, k2 = W(() => d2.value === `left` && p2.value === `left` && f2.value === `left`);
  return Object.assign(Object.assign(Object.assign(Object.assign({ labelElementRef: te2, mergedClsPrefix: t2, mergedRequired: c2, feedbackId: h2, renderExplains: m2, reverseColSpace: k2 }, a2), i2), ee2), { cssVars: n2 ? void 0 : ne2, themeClass: O2 == null ? void 0 : O2.themeClass, onRender: O2 == null ? void 0 : O2.onRender });
}, render() {
  let { $slots: e2, mergedClsPrefix: t2, mergedShowLabel: n2, mergedShowRequireMark: r2, mergedRequireMarkPlacement: i2, onRender: a2 } = this, o2 = r2 === void 0 ? this.mergedRequired : r2;
  return a2 == null ? void 0 : a2(), V(`div`, { class: [`${t2}-form-item`, this.themeClass, `${t2}-form-item--${this.mergedSize}-size`, `${t2}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${t2}-form-item--auto-label-width`, !n2 && `${t2}-form-item--no-label`], style: this.cssVars }, n2 && (() => {
    let e3 = this.$slots.label ? this.$slots.label() : this.label;
    if (!e3) return null;
    let n3 = V(`span`, { class: `${t2}-form-item-label__text` }, e3), r3 = o2 ? V(`span`, { class: `${t2}-form-item-label__asterisk` }, i2 === `left` ? `*\xA0` : `\xA0*`) : i2 === `right-hanging` && V(`span`, { class: `${t2}-form-item-label__asterisk-placeholder` }, `\xA0*`), { labelProps: a3 } = this;
    return V(`label`, Object.assign({}, a3, { class: [a3 == null ? void 0 : a3.class, `${t2}-form-item-label`, `${t2}-form-item-label--${i2}-mark`, this.reverseColSpace && `${t2}-form-item-label--reverse-columns-space`], style: this.mergedLabelStyle, ref: `labelElementRef` }), i2 === `left` ? [r3, n3] : [n3, r3]);
  })(), V(`div`, { class: [`${t2}-form-item-blank`, this.contentClass, this.mergedValidationStatus && `${t2}-form-item-blank--${this.mergedValidationStatus}`], style: this.contentStyle }, e2), this.mergedShowFeedback ? V(`div`, { key: this.feedbackId, style: this.feedbackStyle, class: [`${t2}-form-item-feedback-wrapper`, this.feedbackClass] }, V(st, { name: `fade-down-transition`, mode: `out-in` }, { default: () => {
    let { mergedValidationStatus: n3 } = this;
    return M(e2.feedback, (e3) => {
      var _a2;
      let { feedback: r3 } = this, i3 = e3 || r3 ? V(`div`, { key: `__feedback__`, class: `${t2}-form-item-feedback__line` }, e3 || r3) : this.renderExplains.length ? (_a2 = this.renderExplains) == null ? void 0 : _a2.map(({ key: e4, render: n4 }) => V(`div`, { key: e4, class: `${t2}-form-item-feedback__line` }, n4())) : null;
      return i3 ? n3 === `warning` ? V(`div`, { key: `controlled-warning`, class: `${t2}-form-item-feedback ${t2}-form-item-feedback--warning` }, i3) : n3 === `error` ? V(`div`, { key: `controlled-error`, class: `${t2}-form-item-feedback ${t2}-form-item-feedback--error` }, i3) : n3 === `success` ? V(`div`, { key: `controlled-success`, class: `${t2}-form-item-feedback ${t2}-form-item-feedback--success` }, i3) : V(`div`, { key: `controlled-default`, class: `${t2}-form-item-feedback` }, i3) : null;
    });
  } })) : null);
} });
const ya = f(`n-grid`), ba = { span: { type: [Number, String], default: 1 }, offset: { type: [Number, String], default: 0 }, suffix: Boolean, privateOffset: Number, privateSpan: Number, privateColStart: Number, privateShow: { type: Boolean, default: true } };
i(ba);
var xa = U({ __GRID_ITEM__: true, name: `GridItem`, alias: [`Gi`], props: ba, setup() {
  let { isSsrRef: e2, xGapRef: t2, itemStyleRef: n2, overflowRef: r2, layoutShiftDisabledRef: i2 } = kt(ya), a2 = xt();
  return { overflow: r2, itemStyle: n2, layoutShiftDisabled: i2, mergedXGap: W(() => re(t2.value || 0)), deriveStyle: () => {
    e2.value;
    let { privateSpan: n3 = 1, privateShow: r3 = true, privateColStart: i3 = void 0, privateOffset: o2 = 0 } = a2.vnode.props, { value: s2 } = t2, c2 = re(s2 || 0);
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
const Sa = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 };
var Ca = 24, wa = `__ssr__`, Ta = U({ name: `Grid`, inheritAttrs: false, props: { layoutShiftDisabled: Boolean, responsive: { type: [String, Boolean], default: `self` }, cols: { type: [Number, String], default: Ca }, itemResponsive: Boolean, collapsed: Boolean, collapsedRows: { type: Number, default: 1 }, itemStyle: [Object, String], xGap: { type: [Number, String], default: 0 }, yGap: { type: [Number, String], default: 0 } }, setup(e2) {
  let { mergedClsPrefixRef: t2, mergedBreakpointsRef: n2 } = ue(e2), r2 = /^\d+$/, i2 = L(void 0), a2 = Kn((n2 == null ? void 0 : n2.value) || Sa), o2 = I(() => !!(e2.itemResponsive || !r2.test(e2.cols.toString()) || !r2.test(e2.xGap.toString()) || !r2.test(e2.yGap.toString()))), s2 = W(() => {
    if (o2.value) return e2.responsive === `self` ? i2.value : a2.value;
  }), c2 = I(() => Number(j(e2.cols.toString(), s2.value)) ?? Ca), l2 = I(() => j(e2.xGap.toString(), s2.value)), u2 = I(() => j(e2.yGap.toString(), s2.value)), d2 = (e3) => {
    i2.value = e3.contentRect.width;
  }, f2 = (e3) => {
    He(d2, e3);
  }, p2 = L(false), m2 = W(() => {
    if (e2.responsive === `self`) return f2;
  }), h2 = L(false), g2 = L();
  return at(() => {
    let { value: e3 } = g2;
    e3 && e3.hasAttribute(wa) && (e3.removeAttribute(wa), h2.value = true);
  }), rt(ya, { layoutShiftDisabledRef: R(e2, `layoutShiftDisabled`), isSsrRef: h2, itemStyleRef: R(e2, `itemStyle`), xGapRef: l2, overflowRef: p2 }), { isSsr: !ke, contentEl: g2, mergedClsPrefix: t2, style: W(() => e2.layoutShiftDisabled ? { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${e2.cols}, minmax(0, 1fr))`, columnGap: re(e2.xGap), rowGap: re(e2.yGap) } : { width: `100%`, display: `grid`, gridTemplateColumns: `repeat(${c2.value}, minmax(0, 1fr))`, columnGap: re(l2.value), rowGap: re(u2.value) }), isResponsive: o2, responsiveQuery: s2, responsiveCols: c2, handleResize: m2, overflow: p2 };
}, render() {
  if (this.layoutShiftDisabled) return V(`div`, At({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style }, this.$attrs), this.$slots);
  let e2 = () => {
    var _a2, _b, _c, _d;
    this.overflow = false;
    let e3 = Ze(ln(this)), t2 = [], { collapsed: n2, collapsedRows: r2, responsiveCols: i2, responsiveQuery: a2 } = this;
    e3.forEach((e4) => {
      var _a3, _b2, _c2, _d2;
      if (((_a3 = e4 == null ? void 0 : e4.type) == null ? void 0 : _a3.__GRID_ITEM__) !== true) return;
      if (Zn(e4)) {
        let n4 = vt(e4);
        n4.props ? n4.props.privateShow = false : n4.props = { privateShow: false }, t2.push({ child: n4, rawChildSpan: 0 });
        return;
      }
      e4.dirs = ((_b2 = e4.dirs) == null ? void 0 : _b2.filter(({ dir: e5 }) => e5 !== _t)) || null, ((_c2 = e4.dirs) == null ? void 0 : _c2.length) === 0 && (e4.dirs = null);
      let n3 = vt(e4), r3 = Number(j((_d2 = n3.props) == null ? void 0 : _d2.span, a2) ?? 1);
      r3 !== 0 && t2.push({ child: n3, rawChildSpan: r3 });
    });
    let o2 = 0, s2 = (_a2 = t2[t2.length - 1]) == null ? void 0 : _a2.child;
    if (s2 == null ? void 0 : s2.props) {
      let e4 = (_b = s2.props) == null ? void 0 : _b.suffix;
      e4 !== void 0 && e4 !== false && (o2 = Number(j((_c = s2.props) == null ? void 0 : _c.span, a2) ?? 1), s2.props.privateSpan = o2, s2.props.privateColStart = i2 + 1 - o2, s2.props.privateShow = s2.props.privateShow ?? true);
    }
    let c2 = 0, l2 = false;
    for (let { child: e4, rawChildSpan: s3 } of t2) {
      if (l2 && (this.overflow = true), !l2) {
        let t3 = Number(j((_d = e4.props) == null ? void 0 : _d.offset, a2) ?? 0), u2 = Math.min(s3 + t3, i2);
        if (e4.props ? (e4.props.privateSpan = u2, e4.props.privateOffset = t3) : e4.props = { privateSpan: u2, privateOffset: t3 }, n2) {
          let e5 = c2 % i2;
          u2 + e5 > i2 && (c2 += i2 - e5), u2 + c2 + o2 > r2 * i2 ? l2 = true : c2 += u2;
        }
      }
      l2 && (e4.props ? e4.props.privateShow !== true && (e4.props.privateShow = false) : e4.props = { privateShow: false });
    }
    return V(`div`, At({ ref: `contentEl`, class: `${this.mergedClsPrefix}-grid`, style: this.style, [wa]: this.isSsr || void 0 }, this.$attrs), t2.map(({ child: e4 }) => e4));
  };
  return this.isResponsive && this.responsive === `self` ? V(Fe, { onResize: this.handleResize }, { default: e2 }) : e2();
} }), Ea = x([A(`input-number-suffix`, `
 display: inline-block;
 margin-right: 10px;
 `), A(`input-number-prefix`, `
 display: inline-block;
 margin-left: 10px;
 `)]);
function Da(e2) {
  return e2 == null || typeof e2 == `string` && e2.trim() === `` ? null : Number(e2);
}
function Oa(e2) {
  return e2.includes(`.`) && (/^(-)?\d+.*(\.|0)$/.test(e2) || /^-?\d*$/.test(e2)) || e2 === `-` || e2 === `-0`;
}
function ka(e2) {
  return e2 == null ? true : !Number.isNaN(e2);
}
function Aa(e2, t2) {
  return typeof e2 == `number` ? t2 === void 0 ? String(e2) : e2.toFixed(t2) : ``;
}
function ja(e2) {
  if (e2 === null) return null;
  if (typeof e2 == `number`) return e2;
  {
    let t2 = Number(e2);
    return Number.isNaN(t2) ? null : t2;
  }
}
var Ma = 800, Na = 100, Pa = U({ name: `InputNumber`, props: Object.assign(Object.assign({}, E.props), { autofocus: Boolean, loading: { type: Boolean, default: void 0 }, placeholder: String, defaultValue: { type: Number, default: null }, value: Number, step: { type: [Number, String], default: 1 }, min: [Number, String], max: [Number, String], size: String, disabled: { type: Boolean, default: void 0 }, validator: Function, bordered: { type: Boolean, default: void 0 }, showButton: { type: Boolean, default: true }, buttonPlacement: { type: String, default: `right` }, inputProps: Object, readonly: Boolean, clearable: Boolean, keyboard: { type: Object, default: {} }, updateValueOnInput: { type: Boolean, default: true }, round: { type: Boolean, default: void 0 }, parse: Function, format: Function, precision: Number, status: String, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClear: [Function, Array], onChange: [Function, Array] }), slots: Object, setup(e2) {
  let { mergedBorderedRef: t2, mergedClsPrefixRef: n2, mergedRtlRef: i2 } = ue(e2), a2 = E(`InputNumber`, `-input-number`, Ea, Kt, e2, n2), { localeRef: o2 } = un(`InputNumber`), s2 = rn(e2), { mergedSizeRef: c2, mergedDisabledRef: l2, mergedStatusRef: u2 } = s2, f2 = L(null), p2 = L(null), m2 = L(null), h2 = L(e2.defaultValue), g2 = Re(R(e2, `value`), h2), _2 = L(``), v2 = (e3) => {
    let t3 = String(e3).split(`.`)[1];
    return t3 ? t3.length : 0;
  }, y2 = (t3) => {
    let n3 = [e2.min, e2.max, e2.step, t3].map((e3) => e3 === void 0 ? 0 : v2(e3));
    return Math.max(...n3);
  }, b2 = I(() => {
    let { placeholder: t3 } = e2;
    return t3 === void 0 ? o2.value.placeholder : t3;
  }), x2 = I(() => {
    let t3 = ja(e2.step);
    return t3 === null || t3 === 0 ? 1 : Math.abs(t3);
  }), S2 = I(() => {
    let t3 = ja(e2.min);
    return t3 === null ? null : t3;
  }), C2 = I(() => {
    let t3 = ja(e2.max);
    return t3 === null ? null : t3;
  }), w2 = () => {
    let { value: t3 } = g2;
    if (ka(t3)) {
      let { format: n3, precision: r2 } = e2;
      n3 ? _2.value = n3(t3) : t3 === null || r2 === void 0 || v2(t3) > r2 ? _2.value = Aa(t3, void 0) : _2.value = Aa(t3, r2);
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
    if (i3 && Oa(a3)) return false;
    let o3 = (e2.parse || Da)(a3);
    if (o3 === null) return n3 && T2(null), null;
    if (ka(o3)) {
      let a4 = v2(o3), { precision: s3 } = e2;
      if (s3 !== void 0 && s3 < a4 && !r2) return false;
      let c3 = Number.parseFloat((o3 + t3).toFixed(s3 ?? y2(o3)));
      if (ka(c3)) {
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
  }, te2 = I(() => D2({ offset: 0, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) === false), ne2 = I(() => {
    let { value: t3 } = g2;
    if (e2.validator && t3 === null) return false;
    let { value: n3 } = x2;
    return D2({ offset: -n3, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  }), O2 = I(() => {
    let { value: t3 } = g2;
    if (e2.validator && t3 === null) return false;
    let { value: n3 } = x2;
    return D2({ offset: +n3, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  });
  function k2(t3) {
    let { onFocus: n3 } = e2, { nTriggerFormFocus: i3 } = s2;
    n3 && r(n3, t3), i3();
  }
  function re2(t3) {
    var _a2, _b;
    if (t3.target === ((_a2 = f2.value) == null ? void 0 : _a2.wrapperElRef)) return;
    let n3 = D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    if (n3 !== false) {
      let e3 = (_b = f2.value) == null ? void 0 : _b.inputElRef;
      e3 && (e3.value = String(n3 || ``)), g2.value === n3 && w2();
    } else w2();
    let { onBlur: i3 } = e2, { nTriggerFormBlur: a3 } = s2;
    i3 && r(i3, t3), a3(), ft(() => {
      w2();
    });
  }
  function A2(t3) {
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
    if (n3 === null) e2.validator || T2(se2());
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
    if (n3 === null) e2.validator || T2(se2());
    else {
      let { value: e3 } = x2;
      D2({ offset: -e3, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  let j2 = k2, oe2 = re2;
  function se2() {
    if (e2.validator) return null;
    let { value: t3 } = S2, { value: n3 } = C2;
    return t3 === null ? n3 === null ? 0 : Math.min(0, n3) : Math.max(0, t3);
  }
  function ce2(e3) {
    A2(e3), T2(null);
  }
  function le2(e3) {
    var _a2, _b;
    var t3;
    ((_a2 = m2.value) == null ? void 0 : _a2.$el.contains(e3.target)) && e3.preventDefault(), ((_b = p2.value) == null ? void 0 : _b.$el.contains(e3.target)) && e3.preventDefault(), (t3 = f2.value) == null || t3.activate();
  }
  let M2 = null, de2 = null, fe2 = null;
  function N2() {
    fe2 && (fe2 = (window.clearTimeout(fe2), null)), M2 && (M2 = (window.clearInterval(M2), null));
  }
  let P2 = null;
  function pe2() {
    P2 && (P2 = (window.clearTimeout(P2), null)), de2 && (de2 = (window.clearInterval(de2), null));
  }
  function me2() {
    N2(), fe2 = window.setTimeout(() => {
      M2 = window.setInterval(() => {
        ae2();
      }, Na);
    }, Ma), Be(`mouseup`, document, N2, { once: true });
  }
  function he2() {
    pe2(), P2 = window.setTimeout(() => {
      de2 = window.setInterval(() => {
        ie2();
      }, Na);
    }, Ma), Be(`mouseup`, document, pe2, { once: true });
  }
  let ge2 = () => {
    de2 || ie2();
  }, _e2 = () => {
    M2 || ae2();
  };
  function ve2(t3) {
    var _a2;
    var n3;
    if (t3.key === `Enter`) {
      if (t3.target === ((_a2 = f2.value) == null ? void 0 : _a2.wrapperElRef)) return;
      D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ((n3 = f2.value) == null || n3.deactivate());
    } else if (t3.key === `ArrowUp`) {
      if (!O2.value || e2.keyboard.ArrowUp === false) return;
      t3.preventDefault(), D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ie2();
    } else if (t3.key === `ArrowDown`) {
      if (!ne2.value || e2.keyboard.ArrowDown === false) return;
      t3.preventDefault(), D2({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ae2();
    }
  }
  function F2(t3) {
    _2.value = t3, e2.updateValueOnInput && !e2.format && !e2.parse && e2.precision === void 0 && D2({ offset: 0, doUpdateIfValid: true, isInputing: true, fixPrecision: false });
  }
  ct(g2, () => {
    w2();
  });
  let ye2 = { focus: () => {
    var _a2;
    return (_a2 = f2.value) == null ? void 0 : _a2.focus();
  }, blur: () => {
    var _a2;
    return (_a2 = f2.value) == null ? void 0 : _a2.blur();
  }, select: () => {
    var _a2;
    return (_a2 = f2.value) == null ? void 0 : _a2.select();
  } }, be2 = ee(`InputNumber`, i2, n2);
  return Object.assign(Object.assign({}, ye2), { rtlEnabled: be2, inputInstRef: f2, minusButtonInstRef: p2, addButtonInstRef: m2, mergedClsPrefix: n2, mergedBordered: t2, uncontrolledValue: h2, mergedValue: g2, mergedPlaceholder: b2, displayedValueInvalid: te2, mergedSize: c2, mergedDisabled: l2, displayedValue: _2, addable: O2, minusable: ne2, mergedStatus: u2, handleFocus: j2, handleBlur: oe2, handleClear: ce2, handleMouseDown: le2, handleAddClick: ge2, handleMinusClick: _e2, handleAddMousedown: he2, handleMinusMousedown: me2, handleKeyDown: ve2, handleUpdateDisplayedValue: F2, mergedTheme: a2, inputThemeOverrides: { paddingSmall: `0 8px 0 10px`, paddingMedium: `0 8px 0 12px`, paddingLarge: `0 8px 0 14px` }, buttonThemeOverrides: W(() => {
    let { self: { iconColorDisabled: e3 } } = a2.value, [t3, n3, r2, i3] = d(e3);
    return { textColorTextDisabled: `rgb(${t3}, ${n3}, ${r2})`, opacityDisabled: `${i3}` };
  }) });
}, render() {
  let { mergedClsPrefix: e2, $slots: t2 } = this, n2 = () => V(cn, { text: true, disabled: !this.minusable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleMinusClick, onMousedown: this.handleMinusMousedown, ref: `minusButtonInstRef` }, { icon: () => m(t2[`minus-icon`], () => [V(ce, { clsPrefix: e2 }, { default: () => V(Qn, null) })]) }), r2 = () => V(cn, { text: true, disabled: !this.addable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleAddClick, onMousedown: this.handleAddMousedown, ref: `addButtonInstRef` }, { icon: () => m(t2[`add-icon`], () => [V(ce, { clsPrefix: e2 }, { default: () => V(he, null) })]) });
  return V(`div`, { class: [`${e2}-input-number`, this.rtlEnabled && `${e2}-input-number--rtl`] }, V(F, { ref: `inputInstRef`, autofocus: this.autofocus, status: this.mergedStatus, bordered: this.mergedBordered, loading: this.loading, value: this.displayedValue, onUpdateValue: this.handleUpdateDisplayedValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, builtinThemeOverrides: this.inputThemeOverrides, size: this.mergedSize, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, readonly: this.readonly, round: this.round, textDecoration: this.displayedValueInvalid ? `line-through` : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onClear: this.handleClear, clearable: this.clearable, inputProps: this.inputProps, internalLoadingBeforeSuffix: true }, { prefix: () => {
    var _a2;
    return this.showButton && this.buttonPlacement === `both` ? [n2(), M(t2.prefix, (t3) => t3 ? V(`span`, { class: `${e2}-input-number-prefix` }, t3) : null)] : (_a2 = t2.prefix) == null ? void 0 : _a2.call(t2);
  }, suffix: () => {
    var _a2;
    return this.showButton ? [M(t2.suffix, (t3) => t3 ? V(`span`, { class: `${e2}-input-number-suffix` }, t3) : null), this.buttonPlacement === `right` ? n2() : null, r2()] : (_a2 = t2.suffix) == null ? void 0 : _a2.call(t2);
  } }));
} });
const Fa = f(`n-popconfirm`), Ia = { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true } }, La = i(Ia);
var Ra = U({ name: `NPopconfirmPanel`, props: Ia, setup(e2) {
  let { localeRef: t2 } = un(`Popconfirm`), { inlineThemeDisabled: n2 } = ue(), { mergedClsPrefixRef: r2, mergedThemeRef: i2, props: a2 } = kt(Fa), o2 = W(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { fontSize: t3, iconSize: n3, iconColor: r3 } } = i2.value;
    return { "--n-bezier": e3, "--n-font-size": t3, "--n-icon-size": n3, "--n-icon-color": r3 };
  }), s2 = n2 ? D(`popconfirm-panel`, void 0, o2, a2) : void 0;
  return Object.assign(Object.assign({}, un(`Popconfirm`)), { mergedClsPrefix: r2, cssVars: n2 ? void 0 : o2, localizedPositiveText: W(() => e2.positiveText || t2.value.positiveText), localizedNegativeText: W(() => e2.negativeText || t2.value.negativeText), positiveButtonProps: R(a2, `positiveButtonProps`), negativeButtonProps: R(a2, `negativeButtonProps`), handlePositiveClick(t3) {
    e2.onPositiveClick(t3);
  }, handleNegativeClick(t3) {
    e2.onNegativeClick(t3);
  }, themeClass: s2 == null ? void 0 : s2.themeClass, onRender: s2 == null ? void 0 : s2.onRender });
}, render() {
  var e2;
  let { mergedClsPrefix: t2, showIcon: n2, $slots: r2 } = this, i2 = m(r2.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && V(X, Object.assign({ size: `small`, onClick: this.handleNegativeClick }, this.negativeButtonProps), { default: () => this.localizedNegativeText }), this.positiveText !== null && V(X, Object.assign({ size: `small`, type: `primary`, onClick: this.handlePositiveClick }, this.positiveButtonProps), { default: () => this.localizedPositiveText })]);
  return (e2 = this.onRender) == null || e2.call(this), V(`div`, { class: [`${t2}-popconfirm__panel`, this.themeClass], style: this.cssVars }, M(r2.default, (e3) => n2 || e3 ? V(`div`, { class: `${t2}-popconfirm__body` }, n2 ? V(`div`, { class: `${t2}-popconfirm__icon` }, m(r2.icon, () => [V(ce, { clsPrefix: t2 }, { default: () => V(dn, null) })])) : null, e3) : null), i2 ? V(`div`, { class: [`${t2}-popconfirm__action`] }, i2) : null);
} }), za = A(`popconfirm`, [C(`body`, `
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
 `, [x(`&:not(:first-child)`, `margin-top: 8px`), A(`button`, [x(`&:not(:last-child)`, `margin-right: 8px;`)])])]), Ba = U({ name: `Popconfirm`, props: Object.assign(Object.assign(Object.assign({}, E.props), qe), { positiveText: String, negativeText: String, showIcon: { type: Boolean, default: true }, trigger: { type: String, default: `click` }, positiveButtonProps: Object, negativeButtonProps: Object, onPositiveClick: Function, onNegativeClick: Function }), slots: Object, __popover__: true, setup(e2) {
  let { mergedClsPrefixRef: t2 } = ue(), n2 = E(`Popconfirm`, `-popconfirm`, za, Bt, e2, t2), i2 = L(null);
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
  return rt(Fa, { mergedThemeRef: n2, mergedClsPrefixRef: t2, props: e2 }), { setShow(e3) {
    var t3;
    (t3 = i2.value) == null || t3.setShow(e3);
  }, syncPosition() {
    var e3;
    (e3 = i2.value) == null || e3.syncPosition();
  }, mergedTheme: n2, popoverInstRef: i2, handlePositiveClick: a2, handleNegativeClick: o2 };
}, render() {
  let { $slots: e2, $props: t2, mergedTheme: n2 } = this;
  return V(Ve, Object.assign({}, Pt(t2, La), { theme: n2.peers.Popover, themeOverrides: n2.peerOverrides.Popover, internalExtraClass: [`popconfirm`], ref: `popoverInstRef` }), { trigger: e2.trigger, default: () => {
    let n3 = Ue(t2, La);
    return V(Ra, Object.assign({}, n3, { onPositiveClick: this.handlePositiveClick, onNegativeClick: this.handleNegativeClick }), e2);
  } });
} }), Va = A(`split`, `
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
 `)])]), Ha = U({ name: `Split`, props: Object.assign(Object.assign({}, E.props), { direction: { type: String, default: `horizontal` }, resizeTriggerSize: { type: Number, default: 3 }, disabled: Boolean, defaultSize: { type: [String, Number], default: 0.5 }, "onUpdate:size": [Function, Array], onUpdateSize: [Function, Array], size: [String, Number], min: { type: [String, Number], default: 0 }, max: { type: [String, Number], default: 1 }, pane1Class: String, pane1Style: [Object, String], pane2Class: String, pane2Style: [Object, String], onDragStart: Function, onDragMove: Function, onDragEnd: Function, watchProps: Array }), slots: Object, setup(t2) {
  var _a2;
  let { mergedClsPrefixRef: n2, inlineThemeDisabled: i2 } = ue(t2), a2 = E(`Split`, `-split`, Va, Ut, t2, n2), o2 = W(() => {
    let { common: { cubicBezierEaseInOut: e2 }, self: { resizableTriggerColor: t3, resizableTriggerColorHover: n3 } } = a2.value;
    return { "--n-bezier": e2, "--n-resize-trigger-color": t3, "--n-resize-trigger-color-hover": n3 };
  }), s2 = L(null), c2 = L(false), l2 = R(t2, `size`), u2 = L(t2.defaultSize);
  ((_a2 = t2.watchProps) == null ? void 0 : _a2.includes(`defaultSize`)) && dt(() => u2.value = t2.defaultSize);
  let d2 = (e2) => {
    let n3 = t2[`onUpdate:size`];
    t2.onUpdateSize && r(t2.onUpdateSize, e2), n3 && r(n3, e2), u2.value = e2;
  }, f2 = Re(l2, u2), p2 = W(() => {
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
      ze(n3, document, i3), ze(r2, document, a3), c2.value = false, t2.onDragEnd && t2.onDragEnd(e2), document.body.style.cursor = ``;
    };
    document.body.style.cursor = h2.value.cursor, Be(n3, document, i3), Be(r2, document, a3);
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
const Ua = f(`n-tabs`), Wa = { tab: [String, Number, Object, Function], name: { type: [String, Number], required: true }, disabled: Boolean, displayDirective: { type: String, default: `if` }, closable: { type: Boolean, default: void 0 }, tabProps: Object, label: [String, Number, Object, Function] };
var Ga = U({ __TAB_PANE__: true, name: `TabPane`, alias: [`TabPanel`], props: Wa, slots: Object, setup(e2) {
  let t2 = kt(Ua, null);
  return t2 || ne(`tab-pane`, "`n-tab-pane` must be placed inside `n-tabs`."), { style: t2.paneStyleRef, class: t2.paneClassRef, mergedClsPrefix: t2.mergedClsPrefixRef };
}, render() {
  return V(`div`, { class: [`${this.mergedClsPrefix}-tab-pane`, this.class], style: this.style }, this.$slots);
} }), Ka = U({ __TAB__: true, inheritAttrs: false, name: `Tab`, props: Object.assign({ internalLeftPadded: Boolean, internalAddable: Boolean, internalCreatedByPane: Boolean }, Pt(Wa, [`displayDirective`])), setup(e2) {
  let { mergedClsPrefixRef: t2, valueRef: n2, typeRef: r2, closableRef: i2, tabStyleRef: a2, addTabStyleRef: o2, tabClassRef: s2, addTabClassRef: c2, tabChangeIdRef: l2, onBeforeLeaveRef: u2, triggerRef: d2, handleAdd: f2, activateTab: p2, handleClose: m2 } = kt(Ua);
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
  return V(`div`, { class: `${t2}-tabs-tab-wrapper` }, this.internalLeftPadded ? V(`div`, { class: `${t2}-tabs-tab-pad` }) : null, V(`div`, Object.assign({ key: n2, "data-name": n2, "data-disabled": r2 ? true : void 0 }, At({ class: [`${t2}-tabs-tab`, o2 === n2 && `${t2}-tabs-tab--active`, r2 && `${t2}-tabs-tab--disabled`, s2 && `${t2}-tabs-tab--closable`, e2 && `${t2}-tabs-tab--addable`, e2 ? this.addTabClass : this.tabClass], onClick: c2 === `click` ? this.activateTab : void 0, onMouseenter: c2 === `hover` ? this.activateTab : void 0, style: e2 ? this.addStyle : this.style }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), V(`span`, { class: `${t2}-tabs-tab__label` }, e2 ? V(Ot, null, V(`div`, { class: `${t2}-tabs-tab__height-placeholder` }, `\xA0`), V(ce, { clsPrefix: t2 }, { default: () => V(he, null) })) : l2 ? l2() : typeof u2 == `object` ? u2 : nn(u2 ?? n2)), s2 && this.type === `card` ? V(S, { clsPrefix: t2, class: `${t2}-tabs-tab__close`, onClick: this.handleClose, disabled: r2 }) : null));
} }), qa = A(`tabs`, `
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
 `), le(`disabled`, [x(`&:hover`, `
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
 `)])])])]), Ja = Dn, Ya = U({ name: `Tabs`, props: Object.assign(Object.assign({}, E.props), { value: [String, Number], defaultValue: [String, Number], trigger: { type: String, default: `click` }, type: { type: String, default: `bar` }, closable: Boolean, justifyContent: String, size: { type: String, default: `medium` }, placement: { type: String, default: `top` }, tabStyle: [String, Object], tabClass: String, addTabStyle: [String, Object], addTabClass: String, barWidth: Number, paneClass: String, paneStyle: [String, Object], paneWrapperClass: String, paneWrapperStyle: [String, Object], addable: [Boolean, Object], tabsPadding: { type: Number, default: 0 }, animated: Boolean, onBeforeLeave: Function, onAdd: Function, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onClose: [Function, Array], labelSize: String, activeName: [String, Number], onActiveNameChange: [Function, Array] }), slots: Object, setup(t2, { slots: n2 }) {
  var _a2, _b;
  let { mergedClsPrefixRef: i2, inlineThemeDisabled: a2 } = ue(t2), o2 = E(`Tabs`, `-tabs`, qa, Gt, t2, i2), s2 = L(null), c2 = L(null), l2 = L(null), u2 = L(null), d2 = L(null), f2 = L(null), p2 = L(true), m2 = L(true), h2 = Oe(t2, [`labelSize`, `size`]), g2 = Oe(t2, [`activeName`, `value`]), _2 = L(g2.value ?? t2.defaultValue ?? (n2.default ? (_b = (_a2 = Ze(n2.default())[0]) == null ? void 0 : _a2.props) == null ? void 0 : _b.name : null)), v2 = Re(g2, _2), y2 = { id: 0 }, b2 = W(() => {
    if (!(!t2.justifyContent || t2.type === `card`)) return { display: `flex`, justifyContent: t2.justifyContent };
  });
  ct(v2, () => {
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
  let ne2 = L(null), O2 = 0, k2 = null;
  function re2(e2) {
    let t3 = ne2.value;
    if (t3) {
      O2 = e2.getBoundingClientRect().height;
      let n3 = `${O2}px`, r2 = () => {
        t3.style.height = n3, t3.style.maxHeight = n3;
      };
      k2 ? (r2(), k2(), k2 = null) : k2 = r2;
    }
  }
  function A2(e2) {
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
  let ae2 = { value: [] }, j2 = L(`next`);
  function oe2(e2) {
    let t3 = v2.value, n3 = `next`;
    for (let r2 of ae2.value) {
      if (r2 === t3) break;
      if (r2 === e2) {
        n3 = `prev`;
        break;
      }
    }
    j2.value = n3, ce2(e2);
  }
  function ce2(e2) {
    let { onActiveNameChange: n3, onUpdateValue: i3, "onUpdate:value": a3 } = t2;
    n3 && r(n3, e2), i3 && r(i3, e2), a3 && r(a3, e2), _2.value = e2;
  }
  function le2(e2) {
    let { onClose: n3 } = t2;
    n3 && r(n3, e2);
  }
  let M2 = true;
  function de2() {
    let { value: e2 } = c2;
    if (!e2) return;
    M2 || (M2 = false);
    let t3 = `transition-disabled`;
    e2.classList.add(t3), ee2(), e2.classList.remove(t3);
  }
  let fe2 = L(null);
  function N2({ transitionDisabled: t3 }) {
    let n3 = s2.value;
    if (!n3) return;
    t3 && n3.classList.add(`transition-disabled`);
    let r2 = x2();
    r2 && fe2.value && (fe2.value.style.width = `${r2.offsetWidth}px`, fe2.value.style.height = `${r2.offsetHeight}px`, fe2.value.style.transform = `translateX(${r2.offsetLeft - e(getComputedStyle(n3).paddingLeft)}px)`, t3 && fe2.value.offsetWidth), t3 && n3.classList.remove(`transition-disabled`);
  }
  ct([v2], () => {
    t2.type === `segment` && ft(() => {
      N2({ transitionDisabled: false });
    });
  }), at(() => {
    t2.type === `segment` && N2({ transitionDisabled: true });
  });
  let P2 = 0;
  function pe2(e2) {
    var _a3, _b2;
    if (e2.contentRect.width === 0 && e2.contentRect.height === 0 || P2 === e2.contentRect.width) return;
    P2 = e2.contentRect.width;
    let { type: n3 } = t2;
    if ((n3 === `line` || n3 === `bar`) && (M2 || ((_a3 = t2.justifyContent) == null ? void 0 : _a3.startsWith(`space`))) && de2(), n3 !== `segment`) {
      let { placement: e3 } = t2;
      F2((e3 === `top` || e3 === `bottom` ? (_b2 = d2.value) == null ? void 0 : _b2.$el : f2.value) || null);
    }
  }
  let me2 = Ja(pe2, 64);
  ct([() => t2.justifyContent, () => t2.size], () => {
    ft(() => {
      let { type: e2 } = t2;
      (e2 === `line` || e2 === `bar`) && de2();
    });
  });
  let he2 = L(false);
  function ge2(e2) {
    var _a3;
    let { target: n3, contentRect: { width: r2, height: i3 } } = e2, a3 = n3.parentElement.parentElement.offsetWidth, o3 = n3.parentElement.parentElement.offsetHeight, { placement: s3 } = t2;
    if (!he2.value) s3 === `top` || s3 === `bottom` ? a3 < r2 && (he2.value = true) : o3 < i3 && (he2.value = true);
    else {
      let { value: e3 } = u2;
      if (!e3) return;
      s3 === `top` || s3 === `bottom` ? a3 - r2 > e3.$el.offsetWidth && (he2.value = false) : o3 - i3 > e3.$el.offsetHeight && (he2.value = false);
    }
    F2(((_a3 = d2.value) == null ? void 0 : _a3.$el) || null);
  }
  let _e2 = Ja(ge2, 64);
  function ve2() {
    let { onAdd: e2 } = t2;
    e2 && e2(), ft(() => {
      let e3 = x2(), { value: t3 } = d2;
      !e3 || !t3 || t3.scrollTo({ left: e3.offsetLeft, top: 0, behavior: `smooth` });
    });
  }
  function F2(e2) {
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
  let ye2 = Ja((e2) => {
    F2(e2.target);
  }, 64);
  rt(Ua, { triggerRef: R(t2, `trigger`), tabStyleRef: R(t2, `tabStyle`), tabClassRef: R(t2, `tabClass`), addTabStyleRef: R(t2, `addTabStyle`), addTabClassRef: R(t2, `addTabClass`), paneClassRef: R(t2, `paneClass`), paneStyleRef: R(t2, `paneStyle`), mergedClsPrefixRef: i2, typeRef: R(t2, `type`), closableRef: R(t2, `closable`), valueRef: v2, tabChangeIdRef: y2, onBeforeLeaveRef: R(t2, `onBeforeLeave`), activateTab: oe2, handleClose: le2, handleAdd: ve2 }), De(() => {
    ee2(), te2();
  }), dt(() => {
    let { value: e2 } = l2;
    if (!e2) return;
    let { value: t3 } = i2, n3 = `${t3}-tabs-nav-scroll-wrapper--shadow-start`, r2 = `${t3}-tabs-nav-scroll-wrapper--shadow-end`;
    p2.value ? e2.classList.remove(n3) : e2.classList.add(n3), m2.value ? e2.classList.remove(r2) : e2.classList.add(r2);
  });
  let be2 = { syncBarPosition: () => {
    ee2();
  } }, xe2 = () => {
    N2({ transitionDisabled: true });
  }, Se2 = W(() => {
    let { value: e2 } = h2, { type: n3 } = t2, r2 = `${e2}${{ card: `Card`, bar: `Bar`, line: `Line`, segment: `Segment` }[n3]}`, { self: { barColor: i3, closeIconColor: a3, closeIconColorHover: s3, closeIconColorPressed: c3, tabColor: l3, tabBorderColor: u3, paneTextColor: d3, tabFontWeight: f3, tabBorderRadius: p3, tabFontWeightActive: m3, colorSegment: g3, fontWeightStrong: _3, tabColorSegment: v3, closeSize: y3, closeIconSize: b3, closeColorHover: x3, closeColorPressed: S3, closeBorderRadius: C3, [w(`panePadding`, e2)]: T3, [w(`tabPadding`, r2)]: E2, [w(`tabPaddingVertical`, r2)]: D2, [w(`tabGap`, r2)]: ee3, [w(`tabGap`, `${r2}Vertical`)]: te3, [w(`tabTextColor`, n3)]: ne3, [w(`tabTextColorActive`, n3)]: O3, [w(`tabTextColorHover`, n3)]: k3, [w(`tabTextColorDisabled`, n3)]: re3, [w(`tabFontSize`, e2)]: A3 }, common: { cubicBezierEaseInOut: ie3 } } = o2.value;
    return { "--n-bezier": ie3, "--n-color-segment": g3, "--n-bar-color": i3, "--n-tab-font-size": A3, "--n-tab-text-color": ne3, "--n-tab-text-color-active": O3, "--n-tab-text-color-disabled": re3, "--n-tab-text-color-hover": k3, "--n-pane-text-color": d3, "--n-tab-border-color": u3, "--n-tab-border-radius": p3, "--n-close-size": y3, "--n-close-icon-size": b3, "--n-close-color-hover": x3, "--n-close-color-pressed": S3, "--n-close-border-radius": C3, "--n-close-icon-color": a3, "--n-close-icon-color-hover": s3, "--n-close-icon-color-pressed": c3, "--n-tab-color": l3, "--n-tab-font-weight": f3, "--n-tab-font-weight-active": m3, "--n-tab-padding": E2, "--n-tab-padding-vertical": D2, "--n-tab-gap": ee3, "--n-tab-gap-vertical": te3, "--n-pane-padding-left": se(T3, `left`), "--n-pane-padding-right": se(T3, `right`), "--n-pane-padding-top": se(T3, `top`), "--n-pane-padding-bottom": se(T3, `bottom`), "--n-font-weight-strong": _3, "--n-tab-color-segment": v3 };
  }), Ce2 = a2 ? D(`tabs`, W(() => `${h2.value[0]}${t2.type[0]}`), Se2, t2) : void 0;
  return Object.assign({ mergedClsPrefix: i2, mergedValue: v2, renderedNames: /* @__PURE__ */ new Set(), segmentCapsuleElRef: fe2, tabsPaneWrapperRef: ne2, tabsElRef: s2, barElRef: c2, addTabInstRef: u2, xScrollInstRef: d2, scrollWrapperElRef: l2, addTabFixed: he2, tabWrapperStyle: b2, handleNavResize: me2, mergedSize: h2, handleScroll: ye2, handleTabsResize: _e2, cssVars: a2 ? void 0 : Se2, themeClass: Ce2 == null ? void 0 : Ce2.themeClass, animationDirection: j2, renderNameListRef: ae2, yScrollElRef: f2, handleSegmentResize: xe2, onAnimationBeforeLeave: re2, onAnimationEnter: A2, onAnimationAfterEnter: ie2, onRender: Ce2 == null ? void 0 : Ce2.onRender }, be2);
}, render() {
  let { mergedClsPrefix: e2, type: t2, placement: n2, addTabFixed: r2, addable: i2, mergedSize: a2, renderNameListRef: o2, onRender: s2, paneWrapperClass: c2, paneWrapperStyle: l2, $slots: { default: u2, prefix: d2, suffix: f2 } } = this;
  s2 == null ? void 0 : s2();
  let p2 = u2 ? Ze(u2()).filter((e3) => e3.type.__TAB_PANE__ === true) : [], m2 = u2 ? Ze(u2()).filter((e3) => e3.type.__TAB__ === true) : [], h2 = !m2.length, g2 = t2 === `card`, _2 = t2 === `segment`, v2 = !g2 && !_2 && this.justifyContent;
  o2.value = [];
  let y2 = () => {
    let t3 = V(`div`, { style: this.tabWrapperStyle, class: `${e2}-tabs-wrapper` }, v2 ? null : V(`div`, { class: `${e2}-tabs-scroll-padding`, style: n2 === `top` || n2 === `bottom` ? { width: `${this.tabsPadding}px` } : { height: `${this.tabsPadding}px` } }), h2 ? p2.map((e3, t4) => (o2.value.push(e3.props.name), $a(V(Ka, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t4 !== 0 && (!v2 || v2 === `center` || v2 === `start` || v2 === `end`) }), e3.children ? { default: e3.children.tab } : void 0)))) : m2.map((e3, t4) => (o2.value.push(e3.props.name), $a(t4 !== 0 && !v2 ? Qa(e3) : e3))), !r2 && i2 && g2 ? Za(i2, (h2 ? p2.length : m2.length) !== 0) : null, v2 ? null : V(`div`, { class: `${e2}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } }));
    return V(`div`, { ref: `tabsElRef`, class: `${e2}-tabs-nav-scroll-content` }, g2 && i2 ? V(Fe, { onResize: this.handleTabsResize }, { default: () => t3 }) : t3, g2 ? V(`div`, { class: `${e2}-tabs-pad` }) : null, g2 ? null : V(`div`, { ref: `barElRef`, class: `${e2}-tabs-bar` }));
  }, b2 = _2 ? `top` : n2;
  return V(`div`, { class: [`${e2}-tabs`, this.themeClass, `${e2}-tabs--${t2}-type`, `${e2}-tabs--${a2}-size`, v2 && `${e2}-tabs--flex`, `${e2}-tabs--${b2}`], style: this.cssVars }, V(`div`, { class: [`${e2}-tabs-nav--${t2}-type`, `${e2}-tabs-nav--${b2}`, `${e2}-tabs-nav`] }, M(d2, (t3) => t3 && V(`div`, { class: `${e2}-tabs-nav__prefix` }, t3)), _2 ? V(Fe, { onResize: this.handleSegmentResize }, { default: () => V(`div`, { class: `${e2}-tabs-rail`, ref: `tabsElRef` }, V(`div`, { class: `${e2}-tabs-capsule`, ref: `segmentCapsuleElRef` }, V(`div`, { class: `${e2}-tabs-wrapper` }, V(`div`, { class: `${e2}-tabs-tab` }))), h2 ? p2.map((e3, t3) => (o2.value.push(e3.props.name), V(Ka, Object.assign({}, e3.props, { internalCreatedByPane: true, internalLeftPadded: t3 !== 0 }), e3.children ? { default: e3.children.tab } : void 0))) : m2.map((e3, t3) => (o2.value.push(e3.props.name), t3 === 0 ? e3 : Qa(e3)))) }) : V(Fe, { onResize: this.handleNavResize }, { default: () => V(`div`, { class: `${e2}-tabs-nav-scroll-wrapper`, ref: `scrollWrapperElRef` }, [`top`, `bottom`].includes(b2) ? V(Jn, { ref: `xScrollInstRef`, onScroll: this.handleScroll }, { default: y2 }) : V(`div`, { class: `${e2}-tabs-nav-y-scroll`, onScroll: this.handleScroll, ref: `yScrollElRef` }, y2())) }), r2 && i2 && g2 ? Za(i2, true) : null, M(f2, (t3) => t3 && V(`div`, { class: `${e2}-tabs-nav__suffix` }, t3))), h2 && (this.animated && (b2 === `top` || b2 === `bottom`) ? V(`div`, { ref: `tabsPaneWrapperRef`, style: l2, class: [`${e2}-tabs-pane-wrapper`, c2] }, Xa(p2, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : Xa(p2, this.mergedValue, this.renderedNames)));
} });
function Xa(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = [];
  return e2.forEach((e3) => {
    let { name: r3, displayDirective: i3, "display-directive": a3 } = e3.props, o3 = (e4) => i3 === e4 || a3 === e4, c2 = t2 === r3;
    if (e3.key !== void 0 && (e3.key = r3), c2 || o3(`show`) || o3(`show:lazy`) && n2.has(r3)) {
      n2.has(r3) || n2.add(r3);
      let t3 = !o3(`if`);
      s2.push(t3 ? it(e3, [[_t, c2]]) : e3);
    }
  }), o2 ? V(gt, { name: `${o2}-transition`, onBeforeLeave: r2, onEnter: i2, onAfterEnter: a2 }, { default: () => s2 }) : s2;
}
function Za(e2, t2) {
  return V(Ka, { ref: `addTabInstRef`, key: `__addable`, name: `__addable`, internalCreatedByPane: true, internalAddable: true, internalLeftPadded: t2, disabled: typeof e2 == `object` && e2.disabled });
}
function Qa(e2) {
  let t2 = vt(e2);
  return t2.props ? t2.props.internalLeftPadded = true : t2.props = { internalLeftPadded: true }, t2;
}
function $a(e2) {
  return Array.isArray(e2.dynamicProps) ? e2.dynamicProps.includes(`internalLeftPadded`) || e2.dynamicProps.push(`internalLeftPadded`) : e2.dynamicProps = [`internalLeftPadded`], e2;
}
var eo = { class: `container` }, to = { style: { height: `100%`, width: `100%`, display: `flex`, "justify-items": `center` } }, no = { style: { display: `flex`, "flex-direction": `row`, "flex-grow": `1` } }, ro = { style: { "font-weight": `500` } }, io = { style: { display: `flex`, "flex-wrap": `wrap`, gap: `4px`, "margin-left": `24px` } }, ao = Et(U({ __name: `SketchSelector`, props: { list: { type: Array, default: () => [] } }, emits: [`select`, `remove`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Yt(), r2 = e2, i2 = t2;
  function a2(e3) {
    i2(`select`, e3);
  }
  function o2(e3) {
    confirm(n2(`sketchEdit.deleteSketchConfirmation`)) && i2(`remove`, e3);
  }
  return (e3, t3) => (H(), J(`div`, eo, [G(z(pn), { class: `select-listview`, hoverable: `` }, { default: Y(() => [(H(true), J(Ot, null, St(r2.list, (e4) => (H(), yt(z(hn), { key: e4.id, title: e4.name, onClick: (t4) => a2(e4.id) }, { prefix: Y(() => [q(`div`, to, [G(z(gn), { size: `20` }, { default: Y(() => [G(z(Vn))]), _: 1 })])]), suffix: Y(() => [G(z(X), { quaternary: ``, circle: ``, onClick: nt((t4) => o2(e4.id), [`stop`]) }, { icon: Y(() => [G(z(gn), null, { default: Y(() => [G(z(fe))]), _: 1 })]), _: 1 }, 8, [`onClick`])]), default: Y(() => [q(`div`, no, [q(`div`, ro, K(e4.name), 1), q(`div`, io, [(H(true), J(Ot, null, St(e4.tags, (e5) => (H(), yt(z(mn), { key: e5, size: `small`, type: `info` }, { default: Y(() => [B(K(e5.toLocaleUpperCase()), 1)]), _: 2 }, 1024))), 128))])])]), _: 2 }, 1032, [`title`, `onClick`]))), 128))]), _: 1 })]));
} }), [[`__scopeId`, `data-v-dc2c6049`]]), oo = U({ __name: `SelectorDrawer`, props: { active: { type: Boolean, default: () => false }, placement: { type: String, default: () => `right` }, list: { type: Array, default: () => [] } }, emits: [`new`, `update:active`, `remove`, `select`, `import`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Yt(), r2 = e2, i2 = [{ title: n2(`sketchEdit.import`), icon: me, callback: () => {
    s2(`import`);
  }, secondary: true, iconSize: 17, type: `default` }, { title: n2(`sketchEdit.new`), icon: zn, callback: () => s2(`new`), secondary: true, iconSize: 20, type: `default` }, { title: n2(`sketchEdit.close`), icon: Ln, callback: () => {
    a2.value = false;
  }, secondary: true, iconSize: 20, type: `error` }], a2 = L(false), o2 = L(r2.placement);
  ct(r2, () => {
    a2.value = r2.active, o2.value = r2.placement;
  }, { deep: true }), ct(a2, () => {
    s2(`update:active`, a2.value);
  });
  let s2 = t2;
  return (t3, r3) => (H(), yt(z(ri), { show: a2.value, "onUpdate:show": r3[2] || (r3[2] = (e3) => a2.value = e3), width: 502, placement: o2.value, "auto-focus": false }, { default: Y(() => [G(z(ii), { title: z(n2)(`sketchEdit.cartoSketchLibrary`) }, { footer: Y(() => [G(z(ar), null, { default: Y(() => [(H(), J(Ot, null, St(i2, (e3) => G(z(X), { key: e3.title, secondary: e3.secondary, type: e3.type, title: e3.title, onClick: e3.callback }, { icon: Y(() => [G(z(gn), { size: e3.iconSize }, { default: Y(() => [(H(), yt(lt(e3.icon)))]), _: 2 }, 1032, [`size`])]), _: 2 }, 1032, [`secondary`, `type`, `title`, `onClick`])), 64))]), _: 1 })]), default: Y(() => [G(ao, { list: e2.list, onRemove: r3[0] || (r3[0] = (e3) => s2(`remove`, e3)), onSelect: r3[1] || (r3[1] = (e3) => s2(`select`, e3)) }, null, 8, [`list`])]), _: 1 }, 8, [`title`])]), _: 1 }, 8, [`show`, `placement`]));
} }), so = [`title`, `onClick`], co = 20, lo = Et(U({ __name: `SketchToolbar`, props: { sketchName: {}, draftCount: {}, routeCount: {} }, emits: [`save`, `open`, `create`, `edit-meta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Yt(), r2 = t2, i2 = [{ title: n2(`sketchEdit.save`), icon: jn, iconSize: co, callback: () => r2(`save`) }, { title: n2(`sketchEdit.open`), icon: Fn, iconSize: co, callback: () => r2(`open`) }, { title: n2(`sketchEdit.newComponent`), icon: zn, iconSize: co, callback: () => r2(`create`) }, { title: n2(`sketchEdit.editMetadata`), icon: Mt, iconSize: co, callback: () => r2(`edit-meta`) }];
  return (t3, r3) => (H(), yt(z(si), { justify: `space-between`, align: `center` }, { default: Y(() => [G(z(qt), { strong: `` }, { default: Y(() => [B(K(e2.sketchName || z(n2)(`sketchEdit.noSketchSelectedToolbar`)), 1)]), _: 1 }), G(z(si), { align: `center` }, { default: Y(() => [e2.sketchName === void 0 ? Ct(``, true) : (H(), yt(z(mn), { key: 0, type: `info`, size: `small` }, { default: Y(() => [B(K(e2.draftCount || 0) + ` ` + K(z(n2)(`sketchEdit.drafts`)) + `, ` + K(e2.routeCount || 0) + ` ` + K(z(n2)(`sketchEdit.routes`)), 1)]), _: 1 })), (H(), J(Ot, null, St(i2, (e3, t4) => q(`div`, { key: t4, title: e3.title, class: `tool-tip-item`, onClick: e3.callback }, [G(z(gn), { size: e3.iconSize }, { default: Y(() => [(H(), yt(lt(e3.icon)))]), _: 2 }, 1032, [`size`])], 8, so)), 64))]), _: 1 })]), _: 1 }));
} }), [[`__scopeId`, `data-v-5b012717`]]), uo = { key: 0, class: `empty-state` }, fo = Et(U({ __name: `ComponentList`, props: { components: {}, selectedId: {} }, emits: [`select`, `delete`, `create`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Yt(), r2 = t2;
  return (t3, i2) => (H(), J(Ot, null, [G(z(pn), { hoverable: `` }, { default: Y(() => [(H(true), J(Ot, null, St(e2.components, (t4) => (H(), yt(z(hn), { key: t4.value, class: Dt({ "selected-component": e2.selectedId === t4.value }), onClick: () => r2(`select`, t4.value, t4.type) }, { prefix: Y(() => [G(z(gn), { color: t4.type === `draft` ? `#007bff` : `#28a745` }, { default: Y(() => [(H(), yt(lt(t4.type === `draft` ? z(Vn) : z(be))))]), _: 2 }, 1032, [`color`])]), suffix: Y(() => [G(z(Ba), { onPositiveClick: (e3) => r2(`delete`, t4.value, t4.type) }, { trigger: Y(() => [G(z(X), { quaternary: ``, circle: ``, size: `small` }, { default: Y(() => [G(z(gn), null, { default: Y(() => [G(z(fe))]), _: 1 })]), _: 1 })]), default: Y(() => [B(` ` + K(z(n2)(`sketchEdit.deleteComponent`)), 1)]), _: 1 }, 8, [`onPositiveClick`])]), default: Y(() => [B(` ` + K(t4.label) + ` `, 1)]), _: 2 }, 1032, [`class`, `onClick`]))), 128))]), _: 1 }), e2.components.length === 0 ? (H(), J(`div`, uo, [G(z($t), { description: z(n2)(`sketchEdit.noComponentsYet`) }, { extra: Y(() => [G(z(X), { size: `small`, onClick: i2[0] || (i2[0] = (e3) => r2(`create`)) }, { default: Y(() => [B(K(z(n2)(`sketchEdit.createComponent`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`])])) : Ct(``, true)], 64));
} }), [[`__scopeId`, `data-v-3addb8a0`]]), po = { key: 0, class: `properties-panel` }, mo = { key: 1, style: { height: `100%`, width: `100%`, display: `flex`, "justify-content": `center`, "align-items": `center` } }, ho = Et(U({ __name: `PropertiesPanel`, props: { component: {}, type: {} }, emits: [`updateProperties`, `updateMeta`], setup(e2, { emit: t2 }) {
  let { t: n2 } = Yt(), r2 = t2;
  return (t3, i2) => e2.component ? (H(), J(`div`, po, [G(z(Ya), { type: `line`, animated: ``, "default-value": `properties` }, { default: Y(() => [G(z(Ga), { name: `properties`, tab: z(n2)(`sketchEdit.properties`) }, { default: Y(() => [G(z(fi), null, { default: Y(() => [G(z(va), { label: z(n2)(`sketchEdit.visible`) }, { default: Y(() => [G(z(en), { value: e2.component.properties.visible !== false, "onUpdate:value": i2[0] || (i2[0] = (e3) => r2(`updateProperties`, { visible: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), e2.type === `draft` ? (H(), J(Ot, { key: 0 }, [G(z(va), { label: z(n2)(`sketchEdit.fillColor`) }, { default: Y(() => [G(z(Hr), { value: e2.component.properties.fillColor || `#007bff`, "show-alpha": false, "onUpdate:value": i2[1] || (i2[1] = (e3) => r2(`updateProperties`, { fillColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(n2)(`sketchEdit.strokeColor`) }, { default: Y(() => [G(z(Hr), { value: e2.component.properties.strokeColor || `#0056b3`, "show-alpha": false, "onUpdate:value": i2[2] || (i2[2] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(n2)(`sketchEdit.strokeThickness`) }, { default: Y(() => [G(z(Pa), { value: e2.component.properties.strokeThickness || 2, min: 1, max: 10, "onUpdate:value": i2[3] || (i2[3] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : Ct(``, true), e2.type === `route` ? (H(), J(Ot, { key: 1 }, [G(z(va), { label: z(n2)(`sketchEdit.strokeColor`) }, { default: Y(() => [G(z(Hr), { value: e2.component.properties.strokeColor || `#28a745`, "show-alpha": false, "onUpdate:value": i2[4] || (i2[4] = (e3) => r2(`updateProperties`, { strokeColor: e3 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(n2)(`sketchEdit.strokeThickness`) }, { default: Y(() => [G(z(Pa), { value: e2.component.properties.strokeThickness || 3, min: 1, max: 10, "onUpdate:value": i2[5] || (i2[5] = (e3) => r2(`updateProperties`, { strokeThickness: e3 ?? void 0 })) }, null, 8, [`value`])]), _: 1 }, 8, [`label`])], 64)) : Ct(``, true)]), _: 1 })]), _: 1 }, 8, [`tab`]), G(z(Ga), { name: `metadata`, tab: z(n2)(`sketchEdit.metadata`) }, { default: Y(() => [G(z(fi), null, { default: Y(() => [G(z(va), { label: z(n2)(`sketchEdit.name`) }, { default: Y(() => [G(z(F), { value: e2.component.meta.name, "onUpdate:value": i2[6] || (i2[6] = (t4) => {
    var _a2, _b;
    return r2(`updateMeta`, { name: t4, description: ((_a2 = e2.component) == null ? void 0 : _a2.meta.description) ?? ``, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(n2)(`sketchEdit.description`) }, { default: Y(() => [G(z(F), { value: e2.component.meta.description, type: `textarea`, rows: 3, "onUpdate:value": i2[7] || (i2[7] = (t4) => {
    var _a2, _b;
    return r2(`updateMeta`, { name: ((_a2 = e2.component) == null ? void 0 : _a2.meta.name) ?? ``, description: t4, tags: ((_b = e2.component) == null ? void 0 : _b.meta.tags) ?? [] });
  }) }, null, 8, [`value`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(n2)(`sketchEdit.tags`) }, { default: Y(() => [G(z(oi), { value: e2.component.meta.tags || [], placeholder: z(n2)(`sketchEdit.addTagPlaceholder`), "onUpdate:value": i2[8] || (i2[8] = (t4) => {
    var _a2, _b;
    return r2(`updateMeta`, { name: ((_a2 = e2.component) == null ? void 0 : _a2.meta.name) ?? ``, description: ((_b = e2.component) == null ? void 0 : _b.meta.description) ?? ``, tags: t4 });
  }) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(va), { label: `UUID` }, { default: Y(() => [G(z(F), { value: e2.component.id, style: { "font-family": `monospace` }, readonly: `` }, null, 8, [`value`])]), _: 1 })]), _: 1 })]), _: 1 }, 8, [`tab`])]), _: 1 })])) : (H(), J(`div`, mo, [G(z($t), { description: z(n2)(`sketchEdit.selectComponentToEdit`) }, null, 8, [`description`])]));
} }), [[`__scopeId`, `data-v-f700b4bc`]]), go = `https://api.maptiler.com/maps/basic-v2/style.json?key=dCeXFrS9lgSF8hm5C6nm`;
function _o() {
  let e2 = L(7), t2 = ht(null), n2 = L([0, 0]);
  function r2(e3) {
    t2.value = e3.map;
  }
  function i2(e3) {
    n2.value = e3, t2.value && t2.value.setCenter(e3);
  }
  function a2(n3) {
    e2.value = n3, t2.value && t2.value.setZoom(n3);
  }
  return { zoom: e2, map: t2, center: n2, styleUrl: go, initMap: r2, setCenter: i2, setZoom: a2 };
}
function vo(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `draft` });
  }), t2.forEach((e3) => {
    n2.push({ label: e3.meta.name, value: e3.id, type: `route` });
  }), n2;
}
function yo() {
  return { type: `Polygon`, coordinates: [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]] };
}
function bo() {
  return { fillColor: `#007bff`, strokeColor: `#0056b3`, strokeThickness: 2 };
}
function xo() {
  return { strokeColor: `#28a745`, strokeThickness: 3 };
}
var So = { style: { display: `flex`, "flex-direction": `row`, gap: `8px` } }, Co = { style: { display: `flex`, gap: `8px`, "margin-bottom": `8px` } }, wo = { class: `sketch-edit-container` }, To = { class: `grid-layout` }, Eo = { class: `meta-info-section` }, Do = { class: `metadata-item` }, Oo = { class: `metadata-item` }, ko = Et(U({ __name: `SketchEdit`, props: { liteMode: { type: Boolean }, forceHighDpi: { type: Boolean }, mapType: {}, sketchId: {} }, setup(e2) {
  let t2 = e2, { t: n2 } = Yt(), r2 = P(), i2 = ye(), { zoom: a2, styleUrl: o2, initMap: s2 } = _o(), c2 = L(false), l2 = L(null), u2 = L(null), d2 = L(false), f2 = L(``), p2 = L(`draft`), m2 = L(false), h2 = L({ name: ``, description: ``, tags: [], created_by: ``, modified_by: `` }), g2 = L(``), _2 = W(() => i2.currentSketch), v2 = W(() => i2.currentDrafts), y2 = W(() => {
    var _a2;
    return ((_a2 = _2.value) == null ? void 0 : _a2.routes.routes) || [];
  }), b2 = W(() => !!_2.value), x2 = W(() => !l2.value || !u2.value ? null : u2.value === `draft` ? i2.getDraftById(l2.value) : i2.getRouteById(l2.value)), S2 = W(() => vo(v2.value, y2.value));
  async function C2() {
    if (_2.value) try {
      await i2.updateSketch(_2.value.id, { name: _2.value.meta.name, description: _2.value.meta.description, tags: _2.value.meta.tags }), r2.success(n2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      r2.error(n2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  async function w2() {
    let e3 = prompt(n2(`sketchEdit.enterSketchName`));
    e3 && (await i2.createSketch(e3), c2.value = false);
  }
  async function T2() {
    if (!(!f2.value.trim() || !_2.value)) try {
      p2.value === `draft` ? (l2.value = (await i2.addDraft(yo(), bo(), { name: f2.value })).id, u2.value = `draft`) : (l2.value = (await i2.addRoute(f2.value, xo())).id, u2.value = `route`), d2.value = false, f2.value = ``, r2.success(n2(`sketchEdit.componentCreated`));
    } catch (e3) {
      r2.error(n2(`sketchEdit.componentCreateError`)), console.error(e3);
    }
  }
  async function E2(e3, t3) {
    try {
      t3 === `draft` ? await i2.deleteDraft(e3) : await i2.deleteRoute(e3), l2.value === e3 && (l2.value = null, u2.value = null), r2.success(n2(`sketchEdit.componentDeleted`));
    } catch (e4) {
      r2.error(n2(`sketchEdit.componentDeleteError`)), console.error(e4);
    }
  }
  async function D2(e3) {
    if (!(!x2.value || !u2.value)) try {
      u2.value === `draft` ? await i2.updateDraft(l2.value, { properties: e3 }) : await i2.updateRoute(l2.value, { properties: e3 }), r2.success(n2(`sketchEdit.propertiesUpdated`));
    } catch (e4) {
      r2.error(n2(`sketchEdit.propertiesUpdateError`)), console.error(e4);
    }
  }
  async function ee2(e3) {
    if (!(!x2.value || !u2.value)) try {
      u2.value === `draft` ? await i2.updateDraft(l2.value, { meta: e3 }) : await i2.updateRoute(l2.value, { name: e3.name }), r2.success(n2(`sketchEdit.propertiesUpdated`));
    } catch (e4) {
      r2.error(n2(`sketchEdit.propertiesUpdateError`)), console.error(e4);
    }
  }
  function te2() {
    _2.value && (h2.value = { name: _2.value.meta.name, description: _2.value.meta.description, tags: [..._2.value.meta.tags], created_by: _2.value.meta.created_by, modified_by: _2.value.meta.modified_by }, m2.value = true);
  }
  function ne2() {
    g2.value.trim() && !h2.value.tags.includes(g2.value.trim()) && (h2.value.tags.push(g2.value.trim()), g2.value = ``);
  }
  function O2(e3) {
    h2.value.tags = h2.value.tags.filter((t3) => t3 !== e3);
  }
  async function k2() {
    if (_2.value) try {
      await i2.updateSketch(_2.value.id, { name: h2.value.name, description: h2.value.description, tags: h2.value.tags }), m2.value = false, r2.success(n2(`sketchEdit.saveSuccess`));
    } catch (e3) {
      r2.error(n2(`sketchEdit.saveError`)), console.error(e3);
    }
  }
  at(() => {
    t2.sketchId && i2.setCurrentSketchId(t2.sketchId);
  }), ct(() => i2.currentSketchId, (e3) => {
    e3 && (l2.value = null, u2.value = null);
  });
  let re2 = (e3) => new Date(e3).toLocaleString();
  return (e3, t3) => (H(), J(Ot, null, [G(oo, { active: c2.value, "onUpdate:active": t3[0] || (t3[0] = (e4) => c2.value = e4), list: z(i2).sketches.map((e4) => ({ id: e4.id, name: e4.meta.name, tags: e4.meta.tags })), placement: `right`, onNew: w2, onRemove: t3[1] || (t3[1] = (e4) => z(i2).deleteSketch(e4)), onSelect: t3[2] || (t3[2] = (e4) => z(i2).setCurrentSketchId(e4)) }, null, 8, [`active`, `list`]), G(z(zt), { show: d2.value, "onUpdate:show": t3[6] || (t3[6] = (e4) => d2.value = e4), preset: `dialog`, title: z(n2)(`sketchEdit.createNewComponent`) }, { action: Y(() => [G(z(X), { onClick: t3[5] || (t3[5] = (e4) => d2.value = false) }, { default: Y(() => [B(K(z(n2)(`sketchEdit.cancel`)), 1)]), _: 1 }), G(z(X), { type: `primary`, disabled: !f2.value.trim(), onClick: T2 }, { default: Y(() => [B(K(z(n2)(`sketchEdit.create`)), 1)]), _: 1 }, 8, [`disabled`])]), default: Y(() => [G(z(fi), null, { default: Y(() => [q(`div`, So, [G(z(va), { label: z(n2)(`sketchEdit.name`), style: { "flex-grow": `1` } }, { default: Y(() => [G(z(F), { value: f2.value, "onUpdate:value": t3[3] || (t3[3] = (e4) => f2.value = e4), placeholder: z(n2)(`sketchEdit.enterComponentName`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(n2)(`sketchEdit.type`) }, { default: Y(() => [G(z(Qt), { value: p2.value, "onUpdate:value": t3[4] || (t3[4] = (e4) => p2.value = e4), "consistent-menu-width": false, options: [{ label: z(n2)(`sketchEdit.draftShape`), value: `draft` }, { label: z(n2)(`sketchEdit.routePath`), value: `route` }] }, null, 8, [`value`, `options`])]), _: 1 }, 8, [`label`])])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), G(z(zt), { show: m2.value, "onUpdate:show": t3[11] || (t3[11] = (e4) => m2.value = e4), preset: `dialog`, title: z(n2)(`sketchEdit.editMetadata`), style: { "max-width": `600px` } }, { action: Y(() => [G(z(X), { onClick: t3[10] || (t3[10] = (e4) => m2.value = false) }, { default: Y(() => [B(K(z(n2)(`sketchEdit.cancel`)), 1)]), _: 1 }), G(z(X), { type: `primary`, disabled: !h2.value.name.trim(), onClick: k2 }, { default: Y(() => [B(K(z(n2)(`sketchEdit.save`)), 1)]), _: 1 }, 8, [`disabled`])]), default: Y(() => [G(z(fi), null, { default: Y(() => [G(z(va), { label: z(n2)(`sketchEdit.name`) }, { default: Y(() => [G(z(F), { value: h2.value.name, "onUpdate:value": t3[7] || (t3[7] = (e4) => h2.value.name = e4), placeholder: z(n2)(`sketchEdit.sketchNamePlaceholder`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(n2)(`sketchEdit.description`) }, { default: Y(() => [G(z(F), { value: h2.value.description, "onUpdate:value": t3[8] || (t3[8] = (e4) => h2.value.description = e4), type: `textarea`, placeholder: z(n2)(`sketchEdit.sketchDescriptionPlaceholder`), rows: 3 }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(n2)(`sketchEdit.tags`) }, { default: Y(() => [q(`div`, Co, [G(z(F), { value: g2.value, "onUpdate:value": t3[9] || (t3[9] = (e4) => g2.value = e4), placeholder: z(n2)(`sketchEdit.addTagPlaceholder`), onKeydown: ut(nt(ne2, [`prevent`]), [`enter`]) }, null, 8, [`value`, `placeholder`, `onKeydown`]), G(z(X), { onClick: ne2 }, { default: Y(() => [B(K(z(n2)(`sketchEdit.add`)), 1)]), _: 1 })]), (H(true), J(Ot, null, St(h2.value.tags, (e4) => (H(), yt(z(mn), { key: e4, closable: ``, style: { "margin-right": `8px`, "margin-bottom": `8px` }, onClose: (t4) => O2(e4) }, { default: Y(() => [B(K(e4), 1)]), _: 2 }, 1032, [`onClose`]))), 128)), h2.value.tags.length === 0 ? (H(), yt(z($t), { key: 0, description: z(n2)(`sketchEdit.noTags`), size: `small` }, null, 8, [`description`])) : Ct(``, true)]), _: 1 }, 8, [`label`])]), _: 1 })]), _: 1 }, 8, [`show`, `title`]), q(`div`, wo, [q(`div`, To, [q(`div`, Eo, [G(z(oe), null, { default: Y(() => {
    var _a2;
    return [G(lo, { "sketch-name": (_a2 = _2.value) == null ? void 0 : _a2.meta.name, "draft-count": v2.value.length, "route-count": y2.value.length, onSave: C2, onOpen: t3[12] || (t3[12] = (e4) => c2.value = true), onCreate: t3[13] || (t3[13] = (e4) => d2.value = true), onEditMeta: te2 }, null, 8, [`sketch-name`, `draft-count`, `route-count`])];
  }), _: 1 })]), G(z(Ha), { direction: `horizontal`, max: 0.8, min: 0.2, "default-size": 0.5, class: `bottom-row-split` }, { 1: Y(() => [G(z(Ha), { style: { height: `100%` }, direction: `vertical` }, { 1: Y(() => [G(z(oe), { style: { height: `100%` }, title: z(n2)(`sketchEdit.components`), "content-style": `min-height: 0; overflow-y: auto;` }, { "header-extra": Y(() => [G(z(X), { quaternary: ``, circle: ``, onClick: t3[16] || (t3[16] = (e4) => d2.value = true) }, { icon: Y(() => [G(z(zn))]), _: 1 })]), default: Y(() => [G(fo, { components: S2.value, "selected-id": l2.value, onSelect: t3[14] || (t3[14] = (e4, t4) => {
    l2.value = e4, u2.value = t4;
  }), onDelete: E2, onCreate: t3[15] || (t3[15] = (e4) => d2.value = true) }, null, 8, [`components`, `selected-id`])]), _: 1 }, 8, [`title`])]), 2: Y(() => [G(z(oe), { class: `map-container`, "content-style": `padding: 0;` }, { default: Y(() => [G(z(_e), { "map-style": z(o2), center: [0, 0], zoom: z(a2), height: `100%`, "onMap:load": z(s2) }, { default: Y(() => [G(z(ge), { position: `top-left` }), G(z(ve), { position: `bottom-left` }), G(z(N), { position: `top-left` })]), _: 1 }, 8, [`map-style`, `zoom`, `onMap:load`])]), _: 1 })]), _: 1 }), b2.value ? Ct(``, true) : (H(), yt(z($t), { key: 0, description: z(n2)(`sketchEdit.noSketchSelected`), size: `huge`, style: { height: `100%`, "justify-content": `center` } }, { icon: Y(() => [G(z(gn), null, { default: Y(() => [G(z(Nt))]), _: 1 })]), extra: Y(() => [G(z(X), { size: `small`, onClick: t3[17] || (t3[17] = (e4) => c2.value = true) }, { default: Y(() => [B(K(z(n2)(`sketchEdit.selectSketch`)), 1)]), _: 1 })]), _: 1 }, 8, [`description`]))]), 2: Y(() => [G(z(oe), { class: `component-info-container`, "content-style": `min-height: 0; overflow: auto;` }, { footer: Y(() => [x2.value ? (H(), yt(z(qt), { key: 0, depth: `3`, class: `metadata` }, { default: Y(() => [q(`div`, Do, K(z(n2)(`sketchEdit.createdTimeBy`, { user: x2.value.meta.created_by, time: re2(x2.value.meta.creation_timestamp) })), 1), q(`div`, Oo, K(z(n2)(`sketchEdit.modifiedTimeBy`, { user: x2.value.meta.modified_by, time: re2(x2.value.meta.modification_timestamp) })), 1)]), _: 1 })) : Ct(``, true)]), default: Y(() => [G(ho, { component: x2.value, type: u2.value, onUpdateProperties: D2, onUpdateMeta: t3[18] || (t3[18] = (e4) => ee2(e4)) }, null, 8, [`component`, `type`])]), _: 1 })]), _: 1 })])])], 64));
} }), [[`__scopeId`, `data-v-b8cdd1f5`]]), Ao = { class: `sketch-centre-view` }, jo = { class: `header` }, Mo = { class: `title` }, No = { class: `card-header` }, Po = { key: 0, class: `tags` }, Fo = { class: `card-content` }, Io = { class: `meta-info` }, Lo = { class: `meta-item` }, Ro = { class: `meta-item` }, zo = { class: `meta-item` }, Bo = { key: 0, class: `empty-state` }, Vo = Et(U({ __name: `SketchCentreView`, setup(e2) {
  mt((e3) => ({ v460cb2d9: z(w2).bodyColor }));
  let { t: t2 } = Yt(), n2 = pe(), r2 = P(), i2 = vn(), a2 = ye(), o2 = W(() => a2.sketches), s2 = W({ get: () => a2.currentSketchId, set: (e3) => a2.setCurrentSketchId(e3) }), c2 = (e3) => {
    let t3 = s2.value === e3;
    return { borderColor: t3 ? i2.value.primaryColor : ``, borderWidth: t3 ? `2px` : `1px`, padding: t3 ? `0px` : `1px`, zIndex: t3 ? 0 : 1 };
  }, l2 = L(false), u2 = L(``), d2 = L(``), f2 = L(false), p2 = L(``), m2 = async () => {
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
  at(() => {
    m2();
  });
  let w2 = vn();
  return (e3, n3) => (H(), J(`div`, Ao, [q(`div`, jo, [q(`h1`, Mo, K(z(t2)(`sketchCentreView.title`)), 1), G(z(X), { type: `primary`, secondary: ``, circle: ``, onClick: n3[0] || (n3[0] = (e4) => l2.value = true) }, { icon: Y(() => [G(z(gn), null, { default: Y(() => [G(z(zn))]), _: 1 })]), _: 1 })]), G(z(Ta), { cols: C2.value, "x-gap": 16, "y-gap": 16, responsive: `screen` }, { default: Y(() => [(H(true), J(Ot, null, St(o2.value, (e4) => (H(), yt(z(xa), { key: e4.id }, { default: Y(() => [G(z(oe), { class: Dt([`sketch-card`, { selected: s2.value === e4.id }]), style: wt(c2(e4.id)), hoverable: ``, bordered: ``, clickable: ``, onClick: (t3) => v2(e4.id) }, { header: Y(() => [q(`div`, No, [G(z(qt), { class: `sketch-name` }, { default: Y(() => [B(K(e4.meta.name), 1)]), _: 2 }, 1024), e4.meta.tags.length > 0 ? (H(), J(`div`, Po, [(H(true), J(Ot, null, St(e4.meta.tags.slice(0, 3), (e5) => (H(), yt(z(mn), { key: e5, size: `small`, round: ``, type: `info` }, { default: Y(() => [B(K(e5.toLocaleUpperCase()), 1)]), _: 2 }, 1024))), 128)), e4.meta.tags.length > 3 ? (H(), yt(z(mn), { key: 0, size: `small`, round: ``, type: `info` }, { default: Y(() => [B(` +` + K(e4.meta.tags.length - 3), 1)]), _: 2 }, 1024)) : Ct(``, true)])) : Ct(``, true)])]), "header-extra": Y(() => [G(z(_n), null, { default: Y(() => [G(z(X), { quaternary: ``, circle: ``, size: `small`, onClick: nt((t3) => y2(e4.id), [`stop`]) }, { icon: Y(() => [G(z(gn), null, { default: Y(() => [G(z(Nn))]), _: 1 })]), _: 1 }, 8, [`onClick`]), G(z(X), { quaternary: ``, circle: ``, size: `small`, onClick: nt((t3) => x2(e4.id), [`stop`]) }, { icon: Y(() => [G(z(gn), null, { default: Y(() => [G(z(fe))]), _: 1 })]), _: 1 }, 8, [`onClick`])]), _: 2 }, 1024)]), default: Y(() => [q(`div`, Fo, [G(z(qt), { depth: `3`, class: `description` }, { default: Y(() => [B(K(e4.meta.description || z(t2)(`sketchCentreView.noDescription`)), 1)]), _: 2 }, 1024), q(`div`, Io, [q(`div`, Lo, [G(z(gn), { size: 16 }, { default: Y(() => [G(z(kn))]), _: 1 }), G(z(qt), { depth: `3`, style: { "font-size": `12px` } }, { default: Y(() => [B(K(h2(e4.meta.creation_timestamp)), 1)]), _: 2 }, 1024)]), q(`div`, Ro, [G(z(gn), { size: 16 }, { default: Y(() => [G(z(be))]), _: 1 }), G(z(qt), { depth: `3`, style: { "font-size": `12px` } }, { default: Y(() => [B(K(g2(e4)) + ` ` + K(z(t2)(`sketchCentreView.routes`)), 1)]), _: 2 }, 1024)]), q(`div`, zo, [G(z(gn), { size: 16 }, { default: Y(() => [G(z(jt))]), _: 1 }), G(z(qt), { depth: `3`, style: { "font-size": `12px` } }, { default: Y(() => [B(K(_2(e4)) + ` ` + K(z(t2)(`sketchCentreView.drafts`)), 1)]), _: 2 }, 1024)])])])]), _: 2 }, 1032, [`class`, `style`, `onClick`])]), _: 2 }, 1024))), 128))]), _: 1 }, 8, [`cols`]), o2.value.length === 0 ? (H(), J(`div`, Bo, [G(z(gn), { size: `48`, depth: `3` }, { default: Y(() => [G(z(Ft))]), _: 1 }), G(z(qt), { depth: `3` }, { default: Y(() => [B(K(z(t2)(`sketchCentreView.emptyState`)), 1)]), _: 1 }), G(z(X), { type: `primary`, onClick: n3[1] || (n3[1] = (e4) => l2.value = true) }, { icon: Y(() => [G(z(gn), null, { default: Y(() => [G(z(zn))]), _: 1 })]), default: Y(() => [B(` ` + K(z(t2)(`sketchCentreView.createFirstSketch`)), 1)]), _: 1 })])) : Ct(``, true), G(z(zt), { show: l2.value, "onUpdate:show": n3[5] || (n3[5] = (e4) => l2.value = e4), "mask-closable": true, preset: `card`, style: { "max-width": `500px` }, title: z(t2)(`sketchCentreView.newSketch`) }, { footer: Y(() => [G(z(_n), { justify: `end` }, { default: Y(() => [G(z(X), { onClick: n3[4] || (n3[4] = (e4) => l2.value = false) }, { default: Y(() => [B(K(z(t2)(`sketchCentreView.cancel`)), 1)]), _: 1 }), G(z(X), { type: `primary`, onClick: b2 }, { default: Y(() => [B(K(z(t2)(`sketchCentreView.create`)), 1)]), _: 1 })]), _: 1 })]), default: Y(() => [G(z(fi), { model: { name: u2.value, description: d2.value }, "label-placement": `top`, "require-mark-placement": `right-hanging` }, { default: Y(() => [G(z(va), { label: z(t2)(`sketchCentreView.sketchName`), required: `` }, { default: Y(() => [G(z(F), { value: u2.value, "onUpdate:value": n3[2] || (n3[2] = (e4) => u2.value = e4), placeholder: z(t2)(`sketchCentreView.sketchNamePlaceholder`) }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`]), G(z(va), { label: z(t2)(`sketchCentreView.description`) }, { default: Y(() => [G(z(F), { value: d2.value, "onUpdate:value": n3[3] || (n3[3] = (e4) => d2.value = e4), type: `textarea`, placeholder: z(t2)(`sketchCentreView.sketchDescriptionPlaceholder`), autosize: { minRows: 3, maxRows: 5 } }, null, 8, [`value`, `placeholder`])]), _: 1 }, 8, [`label`])]), _: 1 }, 8, [`model`])]), _: 1 }, 8, [`show`, `title`]), G(z(ri), { show: f2.value, "onUpdate:show": n3[6] || (n3[6] = (e4) => f2.value = e4), width: 800, placement: `right`, "display-directive": `show`, height: `100%` }, { default: Y(() => [G(z(ii), { title: z(t2)(`sketchCentreView.editSketch`), closable: ``, "body-content-style": { padding: 0, height: `100%` } }, { default: Y(() => [p2.value ? (H(), yt(ko, { key: 0, "sketch-id": p2.value }, null, 8, [`sketch-id`])) : Ct(``, true)]), _: 1 }, 8, [`title`])]), _: 1 }, 8, [`show`])]));
} }), [[`__scopeId`, `data-v-00cdfd4b`]]);
export {
  Vo as default
};
