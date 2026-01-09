var _a;
import { $ as e, A as t, D as n, M as r, N as i, P as a, _t as o, at as s, bt as c, ct as l, d as u, f as d, g as f, h as p, j as m, lt as h, m as g, mt as _, o as v, ot as y, st as b, tt as x, ut as S, v as C, vt as w, w as T, x as E, xt as D, yt as O } from "./Card-Dr9B_uZL.js";
import { At as k, Bt as A, Ct as ee, D as te, Dt as j, Et as ne, H as re, J as ie, Jt as M, Lt as N, M as ae, Mt as oe, N as se, P as ce, R as le, Rt as ue, St as de, T as fe, Tt as P, U as F, Z as pe, Zt as I, at as me, b as L, et as he, ft as ge, gt as R, ht as _e, it as ve, k as ye, mt as z, ot as B, qt as be, rt as xe, tt as V, vt as H, xt as Se } from "./index-O8NpUPpF.js";
var Ce = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, we = /^\w*$/;
function Te(e2, t2) {
  if (F(e2)) return false;
  var n2 = typeof e2;
  return n2 == `number` || n2 == `symbol` || n2 == `boolean` || e2 == null || D(e2) ? true : we.test(e2) || !Ce.test(e2) || t2 != null && e2 in Object(t2);
}
var Ee = Te, De = `Expected a function`;
function Oe(e2, t2) {
  if (typeof e2 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(De);
  var n2 = function() {
    var r2 = arguments, i2 = t2 ? t2.apply(this, r2) : r2[0], a2 = n2.cache;
    if (a2.has(i2)) return a2.get(i2);
    var o2 = e2.apply(this, r2);
    return n2.cache = a2.set(i2, o2) || a2, o2;
  };
  return n2.cache = new (Oe.Cache || te)(), n2;
}
Oe.Cache = te;
var U = Oe, ke = 500;
function Ae(e2) {
  var t2 = U(e2, function(e3) {
    return n2.size === ke && n2.clear(), e3;
  }), n2 = t2.cache;
  return t2;
}
var je = Ae, Me = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ne = /\\(\\)?/g, Pe = je(function(e2) {
  var t2 = [];
  return e2.charCodeAt(0) === 46 && t2.push(``), e2.replace(Me, function(e3, n2, r2, i2) {
    t2.push(r2 ? i2.replace(Ne, `$1`) : n2 || e3);
  }), t2;
});
function Fe(e2, t2) {
  return F(e2) ? e2 : Ee(e2, t2) ? [e2] : Pe(w(e2));
}
var Ie = Fe, Le = 1 / 0;
function Re(e2) {
  if (typeof e2 == `string` || D(e2)) return e2;
  var t2 = e2 + ``;
  return t2 == `0` && 1 / e2 == -Le ? `-0` : t2;
}
var ze = Re;
function Be(e2, t2) {
  t2 = Ie(t2, e2);
  for (var n2 = 0, r2 = t2.length; e2 != null && n2 < r2; ) e2 = e2[ze(t2[n2++])];
  return n2 && n2 == r2 ? e2 : void 0;
}
var Ve = Be;
function He(e2, t2, n2) {
  var r2 = e2 == null ? void 0 : Ve(e2, t2);
  return r2 === void 0 ? n2 : r2;
}
var Ue = He, We = 1, Ge = 2;
function Ke(e2, t2, n2, r2) {
  var i2 = n2.length, a2 = i2, o2 = !r2;
  if (e2 == null) return !a2;
  for (e2 = Object(e2); i2--; ) {
    var s2 = n2[i2];
    if (o2 && s2[2] ? s2[1] !== e2[s2[0]] : !(s2[0] in e2)) return false;
  }
  for (; ++i2 < a2; ) {
    s2 = n2[i2];
    var c2 = s2[0], l2 = e2[c2], u2 = s2[1];
    if (o2 && s2[2]) {
      if (l2 === void 0 && !(c2 in e2)) return false;
    } else {
      var d2 = new fe();
      if (r2) var f2 = r2(l2, u2, c2, e2, t2, d2);
      if (!(f2 === void 0 ? L(u2, l2, We | Ge, r2, d2) : f2)) return false;
    }
  }
  return true;
}
var qe = Ke;
function Je(e2) {
  return e2 === e2 && !re(e2);
}
var Ye = Je;
function Xe(e2) {
  for (var t2 = ye(e2), n2 = t2.length; n2--; ) {
    var r2 = t2[n2], i2 = e2[r2];
    t2[n2] = [r2, i2, Ye(i2)];
  }
  return t2;
}
var Ze = Xe;
function Qe(e2, t2) {
  return function(n2) {
    return n2 == null ? false : n2[e2] === t2 && (t2 !== void 0 || e2 in Object(n2));
  };
}
var $e = Qe;
function et(e2) {
  var t2 = Ze(e2);
  return t2.length == 1 && t2[0][2] ? $e(t2[0][0], t2[0][1]) : function(n2) {
    return n2 === e2 || qe(n2, e2, t2);
  };
}
var tt = et;
function nt(e2, t2) {
  return e2 != null && t2 in Object(e2);
}
var rt = nt;
function it(e2, t2, n2) {
  t2 = Ie(t2, e2);
  for (var r2 = -1, i2 = t2.length, a2 = false; ++r2 < i2; ) {
    var o2 = ze(t2[r2]);
    if (!(a2 = e2 != null && n2(e2, o2))) break;
    e2 = e2[o2];
  }
  return a2 || ++r2 != i2 ? a2 : (i2 = e2 == null ? 0 : e2.length, !!i2 && ce(i2) && le(o2, i2) && (F(e2) || ae(e2)));
}
var at = it;
function ot(e2, t2) {
  return e2 != null && at(e2, t2, rt);
}
var st = ot, ct = 1, lt = 2;
function ut(e2, t2) {
  return Ee(e2) && Ye(t2) ? $e(ze(e2), t2) : function(n2) {
    var r2 = Ue(n2, e2);
    return r2 === void 0 && r2 === t2 ? st(n2, e2) : L(t2, r2, ct | lt);
  };
}
var dt = ut;
function ft(e2) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e2];
  };
}
var pt = ft;
function mt(e2) {
  return function(t2) {
    return Ve(t2, e2);
  };
}
var ht = mt;
function gt(e2) {
  return Ee(e2) ? pt(ze(e2)) : ht(e2);
}
var _t = gt;
function vt(e2) {
  return typeof e2 == `function` ? e2 : e2 == null ? O : typeof e2 == `object` ? F(e2) ? dt(e2[0], e2[1]) : tt(e2) : _t(e2);
}
var yt = vt;
function bt(e2, t2) {
  return e2 && o(e2, t2, ye);
}
var xt = bt;
function St(e2, t2) {
  return function(n2, r2) {
    if (n2 == null) return n2;
    if (!se(n2)) return e2(n2, r2);
    for (var i2 = n2.length, a2 = t2 ? i2 : -1, o2 = Object(n2); (t2 ? a2-- : ++a2 < i2) && r2(o2[a2], a2, o2) !== false; ) ;
    return n2;
  };
}
var Ct = St(xt);
function wt(e2, t2) {
  var n2 = -1, r2 = se(e2) ? Array(e2.length) : [];
  return Ct(e2, function(e3, i2, a2) {
    r2[++n2] = t2(e3, i2, a2);
  }), r2;
}
var Tt = wt;
function Et(e2, t2) {
  return (F(e2) ? c : Tt)(e2, yt(t2, 3));
}
var Dt = Et, Ot = [], kt = /* @__PURE__ */ new WeakMap();
function At() {
  Ot.forEach((e2) => e2(...kt.get(e2))), Ot = [];
}
function jt(e2, ...t2) {
  kt.set(e2, t2), !Ot.includes(e2) && Ot.push(e2) === 1 && requestAnimationFrame(At);
}
function Mt(e2) {
  return e2.composedPath()[0] || null;
}
function Nt(e2 = 8) {
  return Math.random().toString(16).slice(2, 2 + e2);
}
function Pt(e2) {
  return e2.composedPath()[0];
}
var Ft = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function It(e2, t2, n2) {
  if (e2 === `mousemoveoutside`) {
    let e3 = (e4) => {
      t2.contains(Pt(e4)) || n2(e4);
    };
    return { mousemove: e3, touchstart: e3 };
  } else if (e2 === `clickoutside`) {
    let e3 = false, r2 = (n3) => {
      e3 = !t2.contains(Pt(n3));
    }, i2 = (r3) => {
      e3 && (t2.contains(Pt(r3)) || n2(r3));
    };
    return { mousedown: r2, mouseup: i2, touchstart: r2, touchend: i2 };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${e2}\` is invalid. This could be a bug of evtd.`), {};
}
function Lt(e2, t2, n2) {
  let r2 = Ft[e2], i2 = r2.get(t2);
  i2 === void 0 && r2.set(t2, i2 = /* @__PURE__ */ new WeakMap());
  let a2 = i2.get(n2);
  return a2 === void 0 && i2.set(n2, a2 = It(e2, t2, n2)), a2;
}
function Rt(e2, t2, n2, r2) {
  if (e2 === `mousemoveoutside` || e2 === `clickoutside`) {
    let i2 = Lt(e2, t2, n2);
    return Object.keys(i2).forEach((e3) => {
      W(e3, document, i2[e3], r2);
    }), true;
  }
  return false;
}
function zt(e2, t2, n2, r2) {
  if (e2 === `mousemoveoutside` || e2 === `clickoutside`) {
    let i2 = Lt(e2, t2, n2);
    return Object.keys(i2).forEach((e3) => {
      G(e3, document, i2[e3], r2);
    }), true;
  }
  return false;
}
function Bt() {
  if (typeof window > `u`) return { on: () => {
  }, off: () => {
  } };
  let e2 = /* @__PURE__ */ new WeakMap(), t2 = /* @__PURE__ */ new WeakMap();
  function n2() {
    e2.set(this, true);
  }
  function r2() {
    e2.set(this, true), t2.set(this, true);
  }
  function i2(e3, t3, n3) {
    let r3 = e3[t3];
    return e3[t3] = function() {
      return n3.apply(e3, arguments), r3.apply(e3, arguments);
    }, e3;
  }
  function a2(e3, t3) {
    e3[t3] = Event.prototype[t3];
  }
  let o2 = /* @__PURE__ */ new WeakMap(), s2 = Object.getOwnPropertyDescriptor(Event.prototype, `currentTarget`);
  function c2() {
    return o2.get(this) ?? null;
  }
  function l2(e3, t3) {
    s2 !== void 0 && Object.defineProperty(e3, `currentTarget`, { configurable: true, enumerable: true, get: t3 ?? s2.get });
  }
  let u2 = { bubble: {}, capture: {} }, d2 = {};
  function f2() {
    let s3 = function(s4) {
      let { type: d3, eventPhase: f3, bubbles: p3 } = s4, m3 = Pt(s4);
      if (f3 === 2) return;
      let h3 = f3 === 1 ? `capture` : `bubble`, g3 = m3, _3 = [];
      for (; g3 === null && (g3 = window), _3.push(g3), g3 !== window; ) g3 = g3.parentNode || null;
      let v3 = u2.capture[d3], y3 = u2.bubble[d3];
      if (i2(s4, `stopPropagation`, n2), i2(s4, `stopImmediatePropagation`, r2), l2(s4, c2), h3 === `capture`) {
        if (v3 === void 0) return;
        for (let n3 = _3.length - 1; n3 >= 0 && !e2.has(s4); --n3) {
          let e3 = _3[n3], r3 = v3.get(e3);
          if (r3 !== void 0) {
            o2.set(s4, e3);
            for (let e4 of r3) {
              if (t2.has(s4)) break;
              e4(s4);
            }
          }
          if (n3 === 0 && !p3 && y3 !== void 0) {
            let n4 = y3.get(e3);
            if (n4 !== void 0) for (let e4 of n4) {
              if (t2.has(s4)) break;
              e4(s4);
            }
          }
        }
      } else if (h3 === `bubble`) {
        if (y3 === void 0) return;
        for (let n3 = 0; n3 < _3.length && !e2.has(s4); ++n3) {
          let e3 = _3[n3], r3 = y3.get(e3);
          if (r3 !== void 0) {
            o2.set(s4, e3);
            for (let e4 of r3) {
              if (t2.has(s4)) break;
              e4(s4);
            }
          }
        }
      }
      a2(s4, `stopPropagation`), a2(s4, `stopImmediatePropagation`), l2(s4);
    };
    return s3.displayName = `evtdUnifiedHandler`, s3;
  }
  function p2() {
    let e3 = function(e4) {
      let { type: t3, eventPhase: n3 } = e4;
      if (n3 !== 2) return;
      let r3 = d2[t3];
      r3 !== void 0 && r3.forEach((t4) => t4(e4));
    };
    return e3.displayName = `evtdUnifiedWindowEventHandler`, e3;
  }
  let m2 = f2(), h2 = p2();
  function g2(e3, t3) {
    let n3 = u2[e3];
    return n3[t3] === void 0 && (n3[t3] = /* @__PURE__ */ new Map(), window.addEventListener(t3, m2, e3 === `capture`)), n3[t3];
  }
  function _2(e3) {
    return d2[e3] === void 0 && (d2[e3] = /* @__PURE__ */ new Set(), window.addEventListener(e3, h2)), d2[e3];
  }
  function v2(e3, t3) {
    let n3 = e3.get(t3);
    return n3 === void 0 && e3.set(t3, n3 = /* @__PURE__ */ new Set()), n3;
  }
  function y2(e3, t3, n3, r3) {
    let i3 = u2[t3][n3];
    if (i3 !== void 0) {
      let t4 = i3.get(e3);
      if (t4 !== void 0 && t4.has(r3)) return true;
    }
    return false;
  }
  function b2(e3, t3) {
    let n3 = d2[e3];
    return !!(n3 !== void 0 && n3.has(t3));
  }
  function x2(e3, t3, n3, r3) {
    let i3;
    if (i3 = typeof r3 == `object` && r3.once === true ? (a4) => {
      S2(e3, t3, i3, r3), n3(a4);
    } : n3, Rt(e3, t3, i3, r3)) return;
    let a3 = v2(g2(r3 === true || typeof r3 == `object` && r3.capture === true ? `capture` : `bubble`, e3), t3);
    if (a3.has(i3) || a3.add(i3), t3 === window) {
      let t4 = _2(e3);
      t4.has(i3) || t4.add(i3);
    }
  }
  function S2(e3, t3, n3, r3) {
    if (zt(e3, t3, n3, r3)) return;
    let i3 = r3 === true || typeof r3 == `object` && r3.capture === true, a3 = i3 ? `capture` : `bubble`, o3 = g2(a3, e3), s3 = v2(o3, t3);
    if (t3 === window && !y2(t3, i3 ? `bubble` : `capture`, e3, n3) && b2(e3, n3)) {
      let t4 = d2[e3];
      t4.delete(n3), t4.size === 0 && (window.removeEventListener(e3, h2), d2[e3] = void 0);
    }
    s3.has(n3) && s3.delete(n3), s3.size === 0 && o3.delete(t3), o3.size === 0 && (window.removeEventListener(e3, m2, a3 === `capture`), u2[a3][e3] = void 0);
  }
  return { on: x2, off: S2 };
}
var { on: W, off: G } = Bt();
function Vt(e2) {
  let t2 = M(!!e2.value);
  if (t2.value) return be(t2);
  let n2 = N(e2, (e3) => {
    e3 && (t2.value = true, n2());
  });
  return be(t2);
}
function Ht(e2) {
  let t2 = B(e2), n2 = M(t2.value);
  return N(t2, (e3) => {
    n2.value = e3;
  }), typeof e2 == `function` ? n2 : { __v_isRef: true, get value() {
    return n2.value;
  }, set value(t3) {
    e2.set(t3);
  } };
}
var Ut = Ht;
function Wt() {
  return _e() !== null;
}
const Gt = typeof window < `u`;
var Kt = Gt ? (_a = document == null ? void 0 : document.fonts) == null ? void 0 : _a.ready : void 0, qt = false;
Kt === void 0 ? qt = true : Kt.then(() => {
  qt = true;
});
function Jt(e2) {
  if (qt) return;
  let t2 = false;
  j(() => {
    qt || (Kt == null ? void 0 : Kt.then(() => {
      t2 || e2();
    }));
  }), P(() => {
    t2 = true;
  });
}
function Yt(e2, t2) {
  return N(e2, (e3) => {
    e3 !== void 0 && (t2.value = e3);
  }), B(() => e2.value === void 0 ? t2.value : e2.value);
}
function Xt() {
  let e2 = M(false);
  return j(() => {
    e2.value = true;
  }), be(e2);
}
function Zt(e2, t2) {
  return B(() => {
    for (let n2 of t2) if (e2[n2] !== void 0) return e2[n2];
    return e2[t2[t2.length - 1]];
  });
}
const Qt = (typeof window > `u` ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === `MacIntel` && navigator.maxTouchPoints > 1) && !window.MSStream;
function $t() {
  return Qt;
}
const en = r(`n-internal-select-menu`), tn = r(`n-internal-select-menu-body`), nn = r(`n-drawer-body`), rn = r(`n-drawer`), an = r(`n-modal-body`), on = r(`n-modal-provider`), sn = r(`n-modal`), cn = r(`n-popover-body`);
var ln = `__disabled__`;
function K(e2) {
  let t2 = H(an, null), n2 = H(nn, null), r2 = H(cn, null), i2 = H(tn, null), a2 = M();
  if (typeof document < `u`) {
    a2.value = document.fullscreenElement;
    let e3 = () => {
      a2.value = document.fullscreenElement;
    };
    j(() => {
      W(`fullscreenchange`, document, e3);
    }), P(() => {
      G(`fullscreenchange`, document, e3);
    });
  }
  return Ut(() => {
    let { to: o2 } = e2;
    return o2 === void 0 ? (t2 == null ? void 0 : t2.value) ? t2.value.$el ?? t2.value : (n2 == null ? void 0 : n2.value) ? n2.value : (r2 == null ? void 0 : r2.value) ? r2.value : (i2 == null ? void 0 : i2.value) ? i2.value : o2 ?? (a2.value || `body`) : o2 === false ? ln : o2 === true ? a2.value || `body` : o2;
  });
}
K.tdkey = ln, K.propTo = { type: [String, Object, Boolean], default: void 0 };
const un = typeof document < `u` && typeof window < `u`;
function dn(e2) {
  let t2 = { isDeactivated: false }, n2 = false;
  return ee(() => {
    if (t2.isDeactivated = false, !n2) {
      n2 = true;
      return;
    }
    e2();
  }), ne(() => {
    t2.isDeactivated = true, n2 || (n2 = true);
  }), t2;
}
function fn(e2, t2, n2 = `default`) {
  let r2 = t2[n2];
  if (r2 === void 0) throw Error(`[vueuc/${e2}]: slot[${n2}] is empty.`);
  return r2();
}
function pn(e2, t2 = true, n2 = []) {
  return e2.forEach((e3) => {
    if (e3 !== null) {
      if (typeof e3 != `object`) {
        (typeof e3 == `string` || typeof e3 == `number`) && n2.push(ge(String(e3)));
        return;
      }
      if (Array.isArray(e3)) {
        pn(e3, t2, n2);
        return;
      }
      if (e3.type === V) {
        if (e3.children === null) return;
        Array.isArray(e3.children) && pn(e3.children, t2, n2);
      } else e3.type !== he && n2.push(e3);
    }
  }), n2;
}
function mn(e2, t2, n2 = `default`) {
  let r2 = t2[n2];
  if (r2 === void 0) throw Error(`[vueuc/${e2}]: slot[${n2}] is empty.`);
  let i2 = pn(r2());
  if (i2.length === 1) return i2[0];
  throw Error(`[vueuc/${e2}]: slot[${n2}] should have exactly one child.`);
}
var q = null;
function hn() {
  if (q === null && (q = document.getElementById(`v-binder-view-measurer`), q === null)) {
    q = document.createElement(`div`), q.id = `v-binder-view-measurer`;
    let { style: e2 } = q;
    e2.position = `fixed`, e2.left = `0`, e2.right = `0`, e2.top = `0`, e2.bottom = `0`, e2.pointerEvents = `none`, e2.visibility = `hidden`, document.body.appendChild(q);
  }
  return q.getBoundingClientRect();
}
function gn(e2, t2) {
  let n2 = hn();
  return { top: t2, left: e2, height: 0, width: 0, right: n2.width - e2, bottom: n2.height - t2 };
}
function _n(e2) {
  let t2 = e2.getBoundingClientRect(), n2 = hn();
  return { left: t2.left - n2.left, top: t2.top - n2.top, bottom: n2.height + n2.top - t2.bottom, right: n2.width + n2.left - t2.right, width: t2.width, height: t2.height };
}
function vn(e2) {
  return e2.nodeType === 9 ? null : e2.parentNode;
}
function yn(e2) {
  if (e2 === null) return null;
  let t2 = vn(e2);
  if (t2 === null) return null;
  if (t2.nodeType === 9) return document;
  if (t2.nodeType === 1) {
    let { overflow: e3, overflowX: n2, overflowY: r2 } = getComputedStyle(t2);
    if (/(auto|scroll|overlay)/.test(e3 + r2 + n2)) return t2;
  }
  return yn(t2);
}
var bn = z({ name: `Binder`, props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(e2) {
  var _a2;
  k(`VBinder`, (_a2 = _e()) == null ? void 0 : _a2.proxy);
  let t2 = H(`VBinder`, null), n2 = M(null), r2 = (r3) => {
    n2.value = r3, t2 && e2.syncTargetWithParent && t2.setTargetRef(r3);
  }, i2 = [], a2 = () => {
    let e3 = n2.value;
    for (; e3 = yn(e3), e3 !== null; ) i2.push(e3);
    for (let e4 of i2) W(`scroll`, e4, u2, true);
  }, o2 = () => {
    for (let e3 of i2) G(`scroll`, e3, u2, true);
    i2 = [];
  }, s2 = /* @__PURE__ */ new Set(), c2 = (e3) => {
    s2.size === 0 && a2(), s2.has(e3) || s2.add(e3);
  }, l2 = (e3) => {
    s2.has(e3) && s2.delete(e3), s2.size === 0 && o2();
  }, u2 = () => {
    jt(d2);
  }, d2 = () => {
    s2.forEach((e3) => e3());
  }, f2 = /* @__PURE__ */ new Set(), p2 = (e3) => {
    f2.size === 0 && W(`resize`, window, h2), f2.has(e3) || f2.add(e3);
  }, m2 = (e3) => {
    f2.has(e3) && f2.delete(e3), f2.size === 0 && G(`resize`, window, h2);
  }, h2 = () => {
    f2.forEach((e3) => e3());
  };
  return P(() => {
    G(`resize`, window, h2), o2();
  }), { targetRef: n2, setTargetRef: r2, addScrollListener: c2, removeScrollListener: l2, addResizeListener: p2, removeResizeListener: m2 };
}, render() {
  return fn(`binder`, this.$slots);
} }), xn = z({ name: `Target`, setup() {
  let { setTargetRef: e2, syncTarget: t2 } = H(`VBinder`);
  return { syncTarget: t2, setTargetDirective: { mounted: e2, updated: e2 } };
}, render() {
  let { syncTarget: e2, setTargetDirective: t2 } = this;
  return e2 ? A(mn(`follower`, this.$slots), [[t2]]) : mn(`follower`, this.$slots);
} }), Sn = `@@mmoContext`, Cn = { mounted(e2, { value: t2 }) {
  e2[Sn] = { handler: void 0 }, typeof t2 == `function` && (e2[Sn].handler = t2, W(`mousemoveoutside`, e2, t2));
}, updated(e2, { value: t2 }) {
  let n2 = e2[Sn];
  typeof t2 == `function` ? n2.handler ? n2.handler !== t2 && (G(`mousemoveoutside`, e2, n2.handler), n2.handler = t2, W(`mousemoveoutside`, e2, t2)) : (e2[Sn].handler = t2, W(`mousemoveoutside`, e2, t2)) : n2.handler && (n2.handler = (G(`mousemoveoutside`, e2, n2.handler), void 0));
}, unmounted(e2) {
  let { handler: t2 } = e2[Sn];
  t2 && G(`mousemoveoutside`, e2, t2), e2[Sn].handler = void 0;
} }, wn = `@@coContext`, Tn = { mounted(e2, { value: t2, modifiers: n2 }) {
  e2[wn] = { handler: void 0 }, typeof t2 == `function` && (e2[wn].handler = t2, W(`clickoutside`, e2, t2, { capture: n2.capture }));
}, updated(e2, { value: t2, modifiers: n2 }) {
  let r2 = e2[wn];
  typeof t2 == `function` ? r2.handler ? r2.handler !== t2 && (G(`clickoutside`, e2, r2.handler, { capture: n2.capture }), r2.handler = t2, W(`clickoutside`, e2, t2, { capture: n2.capture })) : (e2[wn].handler = t2, W(`clickoutside`, e2, t2, { capture: n2.capture })) : r2.handler && (r2.handler = (G(`clickoutside`, e2, r2.handler, { capture: n2.capture }), void 0));
}, unmounted(e2, { modifiers: t2 }) {
  let { handler: n2 } = e2[wn];
  n2 && G(`clickoutside`, e2, n2, { capture: t2.capture }), e2[wn].handler = void 0;
} };
function En(e2, t2) {
  console.error(`[vdirs/${e2}]: ${t2}`);
}
var Dn = new class {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(e2, t2) {
    let { elementZIndex: n2 } = this;
    if (t2 !== void 0) {
      e2.style.zIndex = `${t2}`, n2.delete(e2);
      return;
    }
    let { nextZIndex: r2 } = this;
    n2.has(e2) && n2.get(e2) + 1 === this.nextZIndex || (e2.style.zIndex = `${r2}`, n2.set(e2, r2), this.nextZIndex = r2 + 1, this.squashState());
  }
  unregister(e2, t2) {
    let { elementZIndex: n2 } = this;
    n2.has(e2) ? n2.delete(e2) : t2 === void 0 && En(`z-index-manager/unregister-element`, `Element not found when unregistering.`), this.squashState();
  }
  squashState() {
    let { elementCount: e2 } = this;
    e2 || (this.nextZIndex = 2e3), this.nextZIndex - e2 > 2500 && this.rearrange();
  }
  rearrange() {
    let e2 = Array.from(this.elementZIndex.entries());
    e2.sort((e3, t2) => e3[1] - t2[1]), this.nextZIndex = 2e3, e2.forEach((e3) => {
      let t2 = e3[0], n2 = this.nextZIndex++;
      `${n2}` !== t2.style.zIndex && (t2.style.zIndex = `${n2}`);
    });
  }
}(), On = `@@ziContext`, kn = { mounted(e2, t2) {
  let { value: n2 = {} } = t2, { zIndex: r2, enabled: i2 } = n2;
  e2[On] = { enabled: !!i2, initialized: false }, i2 && (Dn.ensureZIndex(e2, r2), e2[On].initialized = true);
}, updated(e2, t2) {
  let { value: n2 = {} } = t2, { zIndex: r2, enabled: i2 } = n2, a2 = e2[On].enabled;
  i2 && !a2 && (Dn.ensureZIndex(e2, r2), e2[On].initialized = true), e2[On].enabled = !!i2;
}, unmounted(e2, t2) {
  if (!e2[On].initialized) return;
  let { value: n2 = {} } = t2, { zIndex: r2 } = n2;
  Dn.unregister(e2, r2);
} };
function An(e2, t2) {
  console.error(`[vueuc/${e2}]: ${t2}`);
}
var { c: jn } = _();
const Mn = `vueuc-style`;
function Nn(e2) {
  return typeof e2 == `string` ? document.querySelector(e2) : e2() || null;
}
var Pn = z({ name: `LazyTeleport`, props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(e2) {
  return { showTeleport: Vt(I(e2, `show`)), mergedTo: B(() => {
    let { to: t2 } = e2;
    return t2 ?? `body`;
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? fn(`lazy-teleport`, this.$slots) : R(xe, { disabled: this.disabled, to: this.mergedTo }, fn(`lazy-teleport`, this.$slots)) : null;
} }), Fn = { top: `bottom`, bottom: `top`, left: `right`, right: `left` }, In = { start: `end`, center: `center`, end: `start` }, Ln = { top: `height`, bottom: `height`, left: `width`, right: `width` }, Rn = { "bottom-start": `top left`, bottom: `top center`, "bottom-end": `top right`, "top-start": `bottom left`, top: `bottom center`, "top-end": `bottom right`, "right-start": `top left`, right: `center left`, "right-end": `bottom left`, "left-start": `top right`, left: `center right`, "left-end": `bottom right` }, zn = { "bottom-start": `bottom left`, bottom: `bottom center`, "bottom-end": `bottom right`, "top-start": `top left`, top: `top center`, "top-end": `top right`, "right-start": `top right`, right: `center right`, "right-end": `bottom right`, "left-start": `top left`, left: `center left`, "left-end": `bottom left` }, Bn = { "bottom-start": `right`, "bottom-end": `left`, "top-start": `right`, "top-end": `left`, "right-start": `bottom`, "right-end": `top`, "left-start": `bottom`, "left-end": `top` }, Vn = { top: true, bottom: false, left: true, right: false }, Hn = { top: `end`, bottom: `start`, left: `end`, right: `start` };
function Un(e2, t2, n2, r2, i2, a2) {
  if (!i2 || a2) return { placement: e2, top: 0, left: 0 };
  let [o2, s2] = e2.split(`-`), c2 = s2 ?? `center`, l2 = { top: 0, left: 0 }, u2 = (e3, i3, a3) => {
    let o3 = 0, s3 = 0, c3 = n2[e3] - t2[i3] - t2[e3];
    return c3 > 0 && r2 && (a3 ? s3 = Vn[i3] ? c3 : -c3 : o3 = Vn[i3] ? c3 : -c3), { left: o3, top: s3 };
  }, d2 = o2 === `left` || o2 === `right`;
  if (c2 !== `center`) {
    let r3 = Bn[e2], i3 = Fn[r3], a3 = Ln[r3];
    if (n2[a3] > t2[a3]) {
      if (t2[r3] + t2[a3] < n2[a3]) {
        let e3 = (n2[a3] - t2[a3]) / 2;
        t2[r3] < e3 || t2[i3] < e3 ? t2[r3] < t2[i3] ? (c2 = In[s2], l2 = u2(a3, i3, d2)) : l2 = u2(a3, r3, d2) : c2 = `center`;
      }
    } else n2[a3] < t2[a3] && t2[i3] < 0 && t2[r3] > t2[i3] && (c2 = In[s2]);
  } else {
    let e3 = o2 === `bottom` || o2 === `top` ? `left` : `top`, r3 = Fn[e3], i3 = Ln[e3], a3 = (n2[i3] - t2[i3]) / 2;
    (t2[e3] < a3 || t2[r3] < a3) && (t2[e3] > t2[r3] ? (c2 = Hn[e3], l2 = u2(i3, e3, d2)) : (c2 = Hn[r3], l2 = u2(i3, r3, d2)));
  }
  let f2 = o2;
  return t2[o2] < n2[Ln[o2]] && t2[o2] < t2[Fn[o2]] && (f2 = Fn[o2]), { placement: c2 === `center` ? f2 : `${f2}-${c2}`, left: l2.left, top: l2.top };
}
function Wn(e2, t2) {
  return t2 ? zn[e2] : Rn[e2];
}
function Gn(e2, t2, n2, r2, i2, a2) {
  if (a2) switch (e2) {
    case `bottom-start`:
      return { top: `${Math.round(n2.top - t2.top + n2.height)}px`, left: `${Math.round(n2.left - t2.left)}px`, transform: `translateY(-100%)` };
    case `bottom-end`:
      return { top: `${Math.round(n2.top - t2.top + n2.height)}px`, left: `${Math.round(n2.left - t2.left + n2.width)}px`, transform: `translateX(-100%) translateY(-100%)` };
    case `top-start`:
      return { top: `${Math.round(n2.top - t2.top)}px`, left: `${Math.round(n2.left - t2.left)}px`, transform: `` };
    case `top-end`:
      return { top: `${Math.round(n2.top - t2.top)}px`, left: `${Math.round(n2.left - t2.left + n2.width)}px`, transform: `translateX(-100%)` };
    case `right-start`:
      return { top: `${Math.round(n2.top - t2.top)}px`, left: `${Math.round(n2.left - t2.left + n2.width)}px`, transform: `translateX(-100%)` };
    case `right-end`:
      return { top: `${Math.round(n2.top - t2.top + n2.height)}px`, left: `${Math.round(n2.left - t2.left + n2.width)}px`, transform: `translateX(-100%) translateY(-100%)` };
    case `left-start`:
      return { top: `${Math.round(n2.top - t2.top)}px`, left: `${Math.round(n2.left - t2.left)}px`, transform: `` };
    case `left-end`:
      return { top: `${Math.round(n2.top - t2.top + n2.height)}px`, left: `${Math.round(n2.left - t2.left)}px`, transform: `translateY(-100%)` };
    case `top`:
      return { top: `${Math.round(n2.top - t2.top)}px`, left: `${Math.round(n2.left - t2.left + n2.width / 2)}px`, transform: `translateX(-50%)` };
    case `right`:
      return { top: `${Math.round(n2.top - t2.top + n2.height / 2)}px`, left: `${Math.round(n2.left - t2.left + n2.width)}px`, transform: `translateX(-100%) translateY(-50%)` };
    case `left`:
      return { top: `${Math.round(n2.top - t2.top + n2.height / 2)}px`, left: `${Math.round(n2.left - t2.left)}px`, transform: `translateY(-50%)` };
    case `bottom`:
    default:
      return { top: `${Math.round(n2.top - t2.top + n2.height)}px`, left: `${Math.round(n2.left - t2.left + n2.width / 2)}px`, transform: `translateX(-50%) translateY(-100%)` };
  }
  switch (e2) {
    case `bottom-start`:
      return { top: `${Math.round(n2.top - t2.top + n2.height + r2)}px`, left: `${Math.round(n2.left - t2.left + i2)}px`, transform: `` };
    case `bottom-end`:
      return { top: `${Math.round(n2.top - t2.top + n2.height + r2)}px`, left: `${Math.round(n2.left - t2.left + n2.width + i2)}px`, transform: `translateX(-100%)` };
    case `top-start`:
      return { top: `${Math.round(n2.top - t2.top + r2)}px`, left: `${Math.round(n2.left - t2.left + i2)}px`, transform: `translateY(-100%)` };
    case `top-end`:
      return { top: `${Math.round(n2.top - t2.top + r2)}px`, left: `${Math.round(n2.left - t2.left + n2.width + i2)}px`, transform: `translateX(-100%) translateY(-100%)` };
    case `right-start`:
      return { top: `${Math.round(n2.top - t2.top + r2)}px`, left: `${Math.round(n2.left - t2.left + n2.width + i2)}px`, transform: `` };
    case `right-end`:
      return { top: `${Math.round(n2.top - t2.top + n2.height + r2)}px`, left: `${Math.round(n2.left - t2.left + n2.width + i2)}px`, transform: `translateY(-100%)` };
    case `left-start`:
      return { top: `${Math.round(n2.top - t2.top + r2)}px`, left: `${Math.round(n2.left - t2.left + i2)}px`, transform: `translateX(-100%)` };
    case `left-end`:
      return { top: `${Math.round(n2.top - t2.top + n2.height + r2)}px`, left: `${Math.round(n2.left - t2.left + i2)}px`, transform: `translateX(-100%) translateY(-100%)` };
    case `top`:
      return { top: `${Math.round(n2.top - t2.top + r2)}px`, left: `${Math.round(n2.left - t2.left + n2.width / 2 + i2)}px`, transform: `translateY(-100%) translateX(-50%)` };
    case `right`:
      return { top: `${Math.round(n2.top - t2.top + n2.height / 2 + r2)}px`, left: `${Math.round(n2.left - t2.left + n2.width + i2)}px`, transform: `translateY(-50%)` };
    case `left`:
      return { top: `${Math.round(n2.top - t2.top + n2.height / 2 + r2)}px`, left: `${Math.round(n2.left - t2.left + i2)}px`, transform: `translateY(-50%) translateX(-100%)` };
    case `bottom`:
    default:
      return { top: `${Math.round(n2.top - t2.top + n2.height + r2)}px`, left: `${Math.round(n2.left - t2.left + n2.width / 2 + i2)}px`, transform: `translateX(-50%)` };
  }
}
var Kn = jn([jn(`.v-binder-follower-container`, { position: `absolute`, left: `0`, right: `0`, top: `0`, height: `0`, pointerEvents: `none`, zIndex: `auto` }), jn(`.v-binder-follower-content`, { position: `absolute`, zIndex: `auto` }, [jn(`> *`, { pointerEvents: `all` })])]), qn = z({ name: `Follower`, inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: `bottom` }, syncTrigger: { type: Array, default: [`resize`, `scroll`] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(e2) {
  let t2 = H(`VBinder`), n2 = Ut(() => e2.enabled === void 0 ? e2.show : e2.enabled), r2 = M(null), i2 = M(null), a2 = () => {
    let { syncTrigger: n3 } = e2;
    n3.includes(`scroll`) && t2.addScrollListener(c2), n3.includes(`resize`) && t2.addResizeListener(c2);
  }, o2 = () => {
    t2.removeScrollListener(c2), t2.removeResizeListener(c2);
  };
  j(() => {
    n2.value && (c2(), a2());
  });
  let s2 = m();
  Kn.mount({ id: `vueuc/binder`, head: true, anchorMetaName: Mn, ssr: s2 }), P(() => {
    o2();
  }), Jt(() => {
    n2.value && c2();
  });
  let c2 = () => {
    if (!n2.value) return;
    let a3 = r2.value;
    if (a3 === null) return;
    let o3 = t2.targetRef, { x: s3, y: c3, overlap: l3 } = e2, u3 = s3 !== void 0 && c3 !== void 0 ? gn(s3, c3) : _n(o3);
    a3.style.setProperty(`--v-target-width`, `${Math.round(u3.width)}px`), a3.style.setProperty(`--v-target-height`, `${Math.round(u3.height)}px`);
    let { width: d2, minWidth: f2, placement: p2, internalShift: m2, flip: h2 } = e2;
    a3.setAttribute(`v-placement`, p2), l3 ? a3.setAttribute(`v-overlap`, ``) : a3.removeAttribute(`v-overlap`);
    let { style: g2 } = a3;
    d2 === `target` ? g2.width = `${u3.width}px` : d2 === void 0 ? g2.width = `` : g2.width = d2, f2 === `target` ? g2.minWidth = `${u3.width}px` : f2 === void 0 ? g2.minWidth = `` : g2.minWidth = f2;
    let _2 = _n(a3), v2 = _n(i2.value), { left: y2, top: b2, placement: x2 } = Un(p2, u3, _2, m2, h2, l3), S2 = Wn(x2, l3), { left: C2, top: w2, transform: T2 } = Gn(x2, v2, u3, b2, y2, l3);
    a3.setAttribute(`v-placement`, x2), a3.style.setProperty(`--v-offset-left`, `${Math.round(y2)}px`), a3.style.setProperty(`--v-offset-top`, `${Math.round(b2)}px`), a3.style.transform = `translateX(${C2}) translateY(${w2}) ${T2}`, a3.style.setProperty(`--v-transform-origin`, S2), a3.style.transformOrigin = S2;
  };
  N(n2, (e3) => {
    e3 ? (a2(), l2()) : o2();
  });
  let l2 = () => {
    de().then(c2).catch((e3) => console.error(e3));
  };
  [`placement`, `x`, `y`, `internalShift`, `flip`, `width`, `overlap`, `minWidth`].forEach((t3) => {
    N(I(e2, t3), c2);
  }), [`teleportDisabled`].forEach((t3) => {
    N(I(e2, t3), l2);
  }), N(I(e2, `syncTrigger`), (e3) => {
    e3.includes(`resize`) ? t2.addResizeListener(c2) : t2.removeResizeListener(c2), e3.includes(`scroll`) ? t2.addScrollListener(c2) : t2.removeScrollListener(c2);
  });
  let u2 = Xt();
  return { VBinder: t2, mergedEnabled: n2, offsetContainerRef: i2, followerRef: r2, mergedTo: Ut(() => {
    let { to: t3 } = e2;
    if (t3 !== void 0) return t3;
    u2.value;
  }), syncPosition: c2 };
}, render() {
  return R(Pn, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var _a2;
    var e2;
    let t2 = R(`div`, { class: [`v-binder-follower-container`, this.containerClass], ref: `offsetContainerRef` }, [R(`div`, { class: `v-binder-follower-content`, ref: `followerRef` }, (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2))]);
    return this.zindexable ? A(t2, [[kn, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : t2;
  } });
} }), J = [], Jn = function() {
  return J.some(function(e2) {
    return e2.activeTargets.length > 0;
  });
}, Yn = function() {
  return J.some(function(e2) {
    return e2.skippedTargets.length > 0;
  });
}, Xn = `ResizeObserver loop completed with undelivered notifications.`, Zn = function() {
  var e2;
  typeof ErrorEvent == `function` ? e2 = new ErrorEvent(`error`, { message: Xn }) : (e2 = document.createEvent(`Event`), e2.initEvent(`error`, false, false), e2.message = Xn), window.dispatchEvent(e2);
}, Qn;
(function(e2) {
  e2.BORDER_BOX = `border-box`, e2.CONTENT_BOX = `content-box`, e2.DEVICE_PIXEL_CONTENT_BOX = `device-pixel-content-box`;
})(Qn || (Qn = {}));
var Y = function(e2) {
  return Object.freeze(e2);
}, $n = /* @__PURE__ */ (function() {
  function e2(e3, t2) {
    this.inlineSize = e3, this.blockSize = t2, Y(this);
  }
  return e2;
})(), er = (function() {
  function e2(e3, t2, n2, r2) {
    return this.x = e3, this.y = t2, this.width = n2, this.height = r2, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Y(this);
  }
  return e2.prototype.toJSON = function() {
    var e3 = this;
    return { x: e3.x, y: e3.y, top: e3.top, right: e3.right, bottom: e3.bottom, left: e3.left, width: e3.width, height: e3.height };
  }, e2.fromRect = function(t2) {
    return new e2(t2.x, t2.y, t2.width, t2.height);
  }, e2;
})(), tr = function(e2) {
  return e2 instanceof SVGElement && `getBBox` in e2;
}, nr = function(e2) {
  if (tr(e2)) {
    var t2 = e2.getBBox(), n2 = t2.width, r2 = t2.height;
    return !n2 && !r2;
  }
  var i2 = e2, a2 = i2.offsetWidth, o2 = i2.offsetHeight;
  return !(a2 || o2 || e2.getClientRects().length);
}, rr = function(e2) {
  var _a2;
  if (e2 instanceof Element) return true;
  var t2 = (_a2 = e2 == null ? void 0 : e2.ownerDocument) == null ? void 0 : _a2.defaultView;
  return !!(t2 && e2 instanceof t2.Element);
}, ir = function(e2) {
  switch (e2.tagName) {
    case `INPUT`:
      if (e2.type !== `image`) break;
    case `VIDEO`:
    case `AUDIO`:
    case `EMBED`:
    case `OBJECT`:
    case `CANVAS`:
    case `IFRAME`:
    case `IMG`:
      return true;
  }
  return false;
}, ar = typeof window < `u` ? window : {}, or = /* @__PURE__ */ new WeakMap(), sr = /auto|scroll/, cr = /^tb|vertical/, lr = /msie|trident/i.test(ar.navigator && ar.navigator.userAgent), X = function(e2) {
  return parseFloat(e2 || `0`);
}, ur = function(e2, t2, n2) {
  return e2 === void 0 && (e2 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = false), new $n((n2 ? t2 : e2) || 0, (n2 ? e2 : t2) || 0);
}, dr = Y({ devicePixelContentBoxSize: ur(), borderBoxSize: ur(), contentBoxSize: ur(), contentRect: new er(0, 0, 0, 0) }), fr = function(e2, t2) {
  if (t2 === void 0 && (t2 = false), or.has(e2) && !t2) return or.get(e2);
  if (nr(e2)) return or.set(e2, dr), dr;
  var n2 = getComputedStyle(e2), r2 = tr(e2) && e2.ownerSVGElement && e2.getBBox(), i2 = !lr && n2.boxSizing === `border-box`, a2 = cr.test(n2.writingMode || ``), o2 = !r2 && sr.test(n2.overflowY || ``), s2 = !r2 && sr.test(n2.overflowX || ``), c2 = r2 ? 0 : X(n2.paddingTop), l2 = r2 ? 0 : X(n2.paddingRight), u2 = r2 ? 0 : X(n2.paddingBottom), d2 = r2 ? 0 : X(n2.paddingLeft), f2 = r2 ? 0 : X(n2.borderTopWidth), p2 = r2 ? 0 : X(n2.borderRightWidth), m2 = r2 ? 0 : X(n2.borderBottomWidth), h2 = r2 ? 0 : X(n2.borderLeftWidth), g2 = d2 + l2, _2 = c2 + u2, v2 = h2 + p2, y2 = f2 + m2, b2 = s2 ? e2.offsetHeight - y2 - e2.clientHeight : 0, x2 = o2 ? e2.offsetWidth - v2 - e2.clientWidth : 0, S2 = i2 ? g2 + v2 : 0, C2 = i2 ? _2 + y2 : 0, w2 = r2 ? r2.width : X(n2.width) - S2 - x2, T2 = r2 ? r2.height : X(n2.height) - C2 - b2, E2 = w2 + g2 + x2 + v2, D2 = T2 + _2 + b2 + y2, O2 = Y({ devicePixelContentBoxSize: ur(Math.round(w2 * devicePixelRatio), Math.round(T2 * devicePixelRatio), a2), borderBoxSize: ur(E2, D2, a2), contentBoxSize: ur(w2, T2, a2), contentRect: new er(d2, c2, w2, T2) });
  return or.set(e2, O2), O2;
}, pr = function(e2, t2, n2) {
  var r2 = fr(e2, n2), i2 = r2.borderBoxSize, a2 = r2.contentBoxSize, o2 = r2.devicePixelContentBoxSize;
  switch (t2) {
    case Qn.DEVICE_PIXEL_CONTENT_BOX:
      return o2;
    case Qn.BORDER_BOX:
      return i2;
    default:
      return a2;
  }
}, mr = /* @__PURE__ */ (function() {
  function e2(e3) {
    var t2 = fr(e3);
    this.target = e3, this.contentRect = t2.contentRect, this.borderBoxSize = Y([t2.borderBoxSize]), this.contentBoxSize = Y([t2.contentBoxSize]), this.devicePixelContentBoxSize = Y([t2.devicePixelContentBoxSize]);
  }
  return e2;
})(), hr = function(e2) {
  if (nr(e2)) return 1 / 0;
  for (var t2 = 0, n2 = e2.parentNode; n2; ) t2 += 1, n2 = n2.parentNode;
  return t2;
}, gr = function() {
  var e2 = 1 / 0, t2 = [];
  J.forEach(function(n3) {
    if (n3.activeTargets.length !== 0) {
      var r3 = [];
      n3.activeTargets.forEach(function(t3) {
        var n4 = new mr(t3.target), i3 = hr(t3.target);
        r3.push(n4), t3.lastReportedSize = pr(t3.target, t3.observedBox), i3 < e2 && (e2 = i3);
      }), t2.push(function() {
        n3.callback.call(n3.observer, r3, n3.observer);
      }), n3.activeTargets.splice(0, n3.activeTargets.length);
    }
  });
  for (var n2 = 0, r2 = t2; n2 < r2.length; n2++) {
    var i2 = r2[n2];
    i2();
  }
  return e2;
}, _r = function(e2) {
  J.forEach(function(t2) {
    t2.activeTargets.splice(0, t2.activeTargets.length), t2.skippedTargets.splice(0, t2.skippedTargets.length), t2.observationTargets.forEach(function(n2) {
      n2.isActive() && (hr(n2.target) > e2 ? t2.activeTargets.push(n2) : t2.skippedTargets.push(n2));
    });
  });
}, vr = function() {
  var e2 = 0;
  for (_r(e2); Jn(); ) e2 = gr(), _r(e2);
  return Yn() && Zn(), e2 > 0;
}, yr, br = [], xr = function() {
  return br.splice(0).forEach(function(e2) {
    return e2();
  });
}, Sr = function(e2) {
  if (!yr) {
    var t2 = 0, n2 = document.createTextNode(``);
    new MutationObserver(function() {
      return xr();
    }).observe(n2, { characterData: true }), yr = function() {
      n2.textContent = `${t2 ? t2-- : t2++}`;
    };
  }
  br.push(e2), yr();
}, Cr = function(e2) {
  Sr(function() {
    requestAnimationFrame(e2);
  });
}, wr = 0, Tr = function() {
  return !!wr;
}, Er = 250, Dr = { attributes: true, characterData: true, childList: true, subtree: true }, Or = [`resize`, `load`, `transitionend`, `animationend`, `animationstart`, `animationiteration`, `keyup`, `keydown`, `mouseup`, `mousedown`, `mouseover`, `mouseout`, `blur`, `focus`], kr = function(e2) {
  return e2 === void 0 && (e2 = 0), Date.now() + e2;
}, Ar = false, jr = new ((function() {
  function e2() {
    var e3 = this;
    this.stopped = true, this.listener = function() {
      return e3.schedule();
    };
  }
  return e2.prototype.run = function(e3) {
    var t2 = this;
    if (e3 === void 0 && (e3 = Er), !Ar) {
      Ar = true;
      var n2 = kr(e3);
      Cr(function() {
        var r2 = false;
        try {
          r2 = vr();
        } finally {
          if (Ar = false, e3 = n2 - kr(), !Tr()) return;
          r2 ? t2.run(1e3) : e3 > 0 ? t2.run(e3) : t2.start();
        }
      });
    }
  }, e2.prototype.schedule = function() {
    this.stop(), this.run();
  }, e2.prototype.observe = function() {
    var e3 = this, t2 = function() {
      return e3.observer && e3.observer.observe(document.body, Dr);
    };
    document.body ? t2() : ar.addEventListener(`DOMContentLoaded`, t2);
  }, e2.prototype.start = function() {
    var e3 = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), Or.forEach(function(t2) {
      return ar.addEventListener(t2, e3.listener, true);
    }));
  }, e2.prototype.stop = function() {
    var e3 = this;
    this.stopped || (this.stopped = (this.observer && this.observer.disconnect(), Or.forEach(function(t2) {
      return ar.removeEventListener(t2, e3.listener, true);
    }), true));
  }, e2;
})())(), Mr = function(e2) {
  !wr && e2 > 0 && jr.start(), wr += e2, !wr && jr.stop();
}, Nr = function(e2) {
  return !tr(e2) && !ir(e2) && getComputedStyle(e2).display === `inline`;
}, Pr = (function() {
  function e2(e3, t2) {
    this.target = e3, this.observedBox = t2 || Qn.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e2.prototype.isActive = function() {
    var e3 = pr(this.target, this.observedBox, true);
    return Nr(this.target) && (this.lastReportedSize = e3), this.lastReportedSize.inlineSize !== e3.inlineSize || this.lastReportedSize.blockSize !== e3.blockSize;
  }, e2;
})(), Fr = /* @__PURE__ */ (function() {
  function e2(e3, t2) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e3, this.callback = t2;
  }
  return e2;
})(), Ir = /* @__PURE__ */ new WeakMap(), Lr = function(e2, t2) {
  for (var n2 = 0; n2 < e2.length; n2 += 1) if (e2[n2].target === t2) return n2;
  return -1;
}, Rr = (function() {
  function e2() {
  }
  return e2.connect = function(e3, t2) {
    var n2 = new Fr(e3, t2);
    Ir.set(e3, n2);
  }, e2.observe = function(e3, t2, n2) {
    var r2 = Ir.get(e3), i2 = r2.observationTargets.length === 0;
    Lr(r2.observationTargets, t2) < 0 && (i2 && J.push(r2), r2.observationTargets.push(new Pr(t2, n2 && n2.box)), Mr(1), jr.schedule());
  }, e2.unobserve = function(e3, t2) {
    var n2 = Ir.get(e3), r2 = Lr(n2.observationTargets, t2), i2 = n2.observationTargets.length === 1;
    r2 >= 0 && (i2 && J.splice(J.indexOf(n2), 1), n2.observationTargets.splice(r2, 1), Mr(-1));
  }, e2.disconnect = function(e3) {
    var t2 = this, n2 = Ir.get(e3);
    n2.observationTargets.slice().forEach(function(n3) {
      return t2.unobserve(e3, n3.target);
    }), n2.activeTargets.splice(0, n2.activeTargets.length);
  }, e2;
})(), zr = (function() {
  function e2(e3) {
    if (arguments.length === 0) throw TypeError(`Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.`);
    if (typeof e3 != `function`) throw TypeError(`Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.`);
    Rr.connect(this, e3);
  }
  return e2.prototype.observe = function(e3, t2) {
    if (arguments.length === 0) throw TypeError(`Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.`);
    if (!rr(e3)) throw TypeError(`Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element`);
    Rr.observe(this, e3, t2);
  }, e2.prototype.unobserve = function(e3) {
    if (arguments.length === 0) throw TypeError(`Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.`);
    if (!rr(e3)) throw TypeError(`Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element`);
    Rr.unobserve(this, e3);
  }, e2.prototype.disconnect = function() {
    Rr.disconnect(this);
  }, e2.toString = function() {
    return `function ResizeObserver () { [polyfill code] }`;
  }, e2;
})(), Br = new class {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < `u` && window.ResizeObserver || zr)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(e2) {
    for (let t2 of e2) {
      let e3 = this.elHandlersMap.get(t2.target);
      e3 !== void 0 && e3(t2);
    }
  }
  registerHandler(e2, t2) {
    this.elHandlersMap.set(e2, t2), this.observer.observe(e2);
  }
  unregisterHandler(e2) {
    this.elHandlersMap.has(e2) && (this.elHandlersMap.delete(e2), this.observer.unobserve(e2));
  }
}(), Vr = z({ name: `ResizeObserver`, props: { onResize: Function }, setup(e2) {
  let t2 = false, n2 = _e().proxy;
  function r2(t3) {
    let { onResize: n3 } = e2;
    n3 !== void 0 && n3(t3);
  }
  j(() => {
    let e3 = n2.$el;
    if (e3 === void 0) {
      An(`resize-observer`, `$el does not exist.`);
      return;
    }
    if (e3.nextElementSibling !== e3.nextSibling && e3.nodeType === 3 && e3.nodeValue !== ``) {
      An(`resize-observer`, `$el can not be observed (it may be a text node).`);
      return;
    }
    e3.nextElementSibling !== null && (Br.registerHandler(e3.nextElementSibling, r2), t2 = true);
  }), P(() => {
    t2 && Br.unregisterHandler(n2.$el.nextElementSibling);
  });
}, render() {
  return oe(this.$slots, `default`);
} });
function Hr(e2) {
  return e2 instanceof HTMLElement;
}
function Ur(e2) {
  for (let t2 = 0; t2 < e2.childNodes.length; t2++) {
    let n2 = e2.childNodes[t2];
    if (Hr(n2) && (Gr(n2) || Ur(n2))) return true;
  }
  return false;
}
function Wr(e2) {
  for (let t2 = e2.childNodes.length - 1; t2 >= 0; t2--) {
    let n2 = e2.childNodes[t2];
    if (Hr(n2) && (Gr(n2) || Wr(n2))) return true;
  }
  return false;
}
function Gr(e2) {
  if (!Kr(e2)) return false;
  try {
    e2.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === e2;
}
function Kr(e2) {
  if (e2.tabIndex > 0 || e2.tabIndex === 0 && e2.getAttribute(`tabIndex`) !== null) return true;
  if (e2.getAttribute(`disabled`)) return false;
  switch (e2.nodeName) {
    case `A`:
      return !!e2.href && e2.rel !== `ignore`;
    case `INPUT`:
      return e2.type !== `hidden` && e2.type !== `file`;
    case `SELECT`:
    case `TEXTAREA`:
      return true;
    default:
      return false;
  }
}
var qr = [];
const Jr = z({ name: `FocusTrap`, props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(e2) {
  let t2 = Nt(), n2 = M(null), r2 = M(null), i2 = false, a2 = false, o2 = typeof document > `u` ? null : document.activeElement;
  function s2() {
    return qr[qr.length - 1] === t2;
  }
  function c2(t3) {
    var n3;
    t3.code === `Escape` && s2() && ((n3 = e2.onEsc) == null || n3.call(e2, t3));
  }
  j(() => {
    N(() => e2.active, (e3) => {
      e3 ? (d2(), W(`keydown`, document, c2)) : (G(`keydown`, document, c2), i2 && f2());
    }, { immediate: true });
  }), P(() => {
    G(`keydown`, document, c2), i2 && f2();
  });
  function l2(e3) {
    if (!a2 && s2()) {
      let t3 = u2();
      if (t3 === null || t3.contains(Mt(e3))) return;
      p2(`first`);
    }
  }
  function u2() {
    let e3 = n2.value;
    if (e3 === null) return null;
    let t3 = e3;
    for (; t3 = t3.nextSibling, !(t3 === null || t3 instanceof Element && t3.tagName === `DIV`); ) ;
    return t3;
  }
  function d2() {
    var n3;
    if (!e2.disabled) {
      if (qr.push(t2), e2.autoFocus) {
        let { initialFocusTo: t3 } = e2;
        t3 === void 0 ? p2(`first`) : (n3 = Nn(t3)) == null || n3.focus({ preventScroll: true });
      }
      i2 = true, document.addEventListener(`focus`, l2, true);
    }
  }
  function f2() {
    var n3;
    if (e2.disabled || (document.removeEventListener(`focus`, l2, true), qr = qr.filter((e3) => e3 !== t2), s2())) return;
    let { finalFocusTo: r3 } = e2;
    r3 === void 0 ? e2.returnFocusOnDeactivated && o2 instanceof HTMLElement && (a2 = true, o2.focus({ preventScroll: true }), a2 = false) : (n3 = Nn(r3)) == null || n3.focus({ preventScroll: true });
  }
  function p2(t3) {
    if (s2() && e2.active) {
      let e3 = n2.value, i3 = r2.value;
      if (e3 !== null && i3 !== null) {
        let n3 = u2();
        if (n3 == null || n3 === i3) {
          a2 = true, e3.focus({ preventScroll: true }), a2 = false;
          return;
        }
        a2 = true;
        let r3 = t3 === `first` ? Ur(n3) : Wr(n3);
        a2 = false, r3 || (a2 = true, e3.focus({ preventScroll: true }), a2 = false);
      }
    }
  }
  function m2(e3) {
    if (a2) return;
    let t3 = u2();
    t3 !== null && (e3.relatedTarget !== null && t3.contains(e3.relatedTarget) ? p2(`last`) : p2(`first`));
  }
  function h2(e3) {
    a2 || (e3.relatedTarget !== null && e3.relatedTarget === n2.value ? p2(`last`) : p2(`first`));
  }
  return { focusableStartRef: n2, focusableEndRef: r2, focusableStyle: `position: absolute; height: 0; width: 0;`, handleStartFocus: m2, handleEndFocus: h2 };
}, render() {
  let { default: e2 } = this.$slots;
  if (e2 === void 0) return null;
  if (this.disabled) return e2();
  let { active: t2, focusableStyle: n2 } = this;
  return R(V, null, [R(`div`, { "aria-hidden": `true`, tabindex: t2 ? `0` : `-1`, ref: `focusableStartRef`, style: n2, onFocus: this.handleStartFocus }), e2(), R(`div`, { "aria-hidden": `true`, style: n2, ref: `focusableEndRef`, tabindex: t2 ? `0` : `-1`, onFocus: this.handleEndFocus })]);
} });
function Yr(e2) {
  return e2.replace(/#|\(|\)|,|\s|\./g, `_`);
}
var Xr = /^(\d|\.)+$/, Zr = /(\d|\.)+/;
function Qr(e2, { c: t2 = 1, offset: n2 = 0, attachPx: r2 = true } = {}) {
  if (typeof e2 == `number`) {
    let r3 = (e2 + n2) * t2;
    return r3 === 0 ? `0` : `${r3}px`;
  } else if (typeof e2 == `string`) if (Xr.test(e2)) {
    let i2 = (Number(e2) + n2) * t2;
    return r2 ? i2 === 0 ? `0` : `${i2}px` : `${i2}`;
  } else {
    let r3 = Zr.exec(e2);
    return r3 ? e2.replace(Zr, String((Number(r3[0]) + n2) * t2)) : e2;
  }
  return e2;
}
function $r(e2) {
  let { left: t2, right: n2, top: r2, bottom: i2 } = x(e2);
  return `${r2} ${t2} ${i2} ${n2}`;
}
var ei;
function ti() {
  return ei === void 0 && (ei = navigator.userAgent.includes(`Node.js`) || navigator.userAgent.includes(`jsdom`)), ei;
}
function ni(e2, t2 = true, n2 = []) {
  return e2.forEach((e3) => {
    if (e3 !== null) {
      if (typeof e3 != `object`) {
        (typeof e3 == `string` || typeof e3 == `number`) && n2.push(ge(String(e3)));
        return;
      }
      if (Array.isArray(e3)) {
        ni(e3, t2, n2);
        return;
      }
      if (e3.type === V) {
        if (e3.children === null) return;
        Array.isArray(e3.children) && ni(e3.children, t2, n2);
      } else {
        if (e3.type === he && t2) return;
        n2.push(e3);
      }
    }
  }), n2;
}
function ri(e2, n2 = `default`, r2 = void 0) {
  let i2 = e2[n2];
  if (!i2) return t(`getFirstSlotVNode`, `slot[${n2}] is empty`), null;
  let a2 = ni(i2(r2));
  return a2.length === 1 ? a2[0] : (t(`getFirstSlotVNode`, `slot[${n2}] should have exactly one child`), null);
}
function ii(e2, n2, r2) {
  if (!n2) return null;
  let i2 = ni(n2(r2));
  return i2.length === 1 ? i2[0] : (t(`getFirstSlotVNode`, `slot[${e2}] should have exactly one child`), null);
}
function ai(e2, t2 = [], n2) {
  let r2 = {};
  return t2.forEach((t3) => {
    r2[t3] = e2[t3];
  }), Object.assign(r2, n2);
}
const oi = z({ render() {
  var _a2;
  var e2;
  return (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2);
} });
var { cubicBezierEaseInOut: si } = g;
function ci({ name: e2 = `fade-in`, enterDuration: t2 = `0.2s`, leaveDuration: n2 = `0.2s`, enterCubicBezier: r2 = si, leaveCubicBezier: i2 = si } = {}) {
  return [s(`&.${e2}-transition-enter-active`, { transition: `all ${t2} ${r2}!important` }), s(`&.${e2}-transition-leave-active`, { transition: `all ${n2} ${i2}!important` }), s(`&.${e2}-transition-enter-from, &.${e2}-transition-leave-to`, { opacity: 0 }), s(`&.${e2}-transition-leave-from, &.${e2}-transition-enter-to`, { opacity: 1 })];
}
const li = { railInsetHorizontalBottom: `auto 2px 4px 2px`, railInsetHorizontalTop: `4px 2px auto 2px`, railInsetVerticalRight: `2px 4px 2px auto`, railInsetVerticalLeft: `2px auto 2px 4px`, railColor: `transparent` };
function ui(e2) {
  let { scrollbarColor: t2, scrollbarColorHover: n2, scrollbarHeight: r2, scrollbarWidth: i2, scrollbarBorderRadius: a2 } = e2;
  return Object.assign(Object.assign({}, li), { height: r2, width: i2, borderRadius: a2, color: t2, colorHover: n2 });
}
var di = { name: `Scrollbar`, common: v, self: ui }, fi = y(`scrollbar`, `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [s(`>`, [y(`scrollbar-container`, `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [s(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`, `
 width: 0;
 height: 0;
 display: none;
 `), s(`>`, [y(`scrollbar-content`, `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), s(`>, +`, [y(`scrollbar-rail`, `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [h(`horizontal`, `
 height: var(--n-scrollbar-height);
 `, [s(`>`, [l(`scrollbar`, `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), h(`horizontal--top`, `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), h(`horizontal--bottom`, `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), h(`vertical`, `
 width: var(--n-scrollbar-width);
 `, [s(`>`, [l(`scrollbar`, `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), h(`vertical--left`, `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), h(`vertical--right`, `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), h(`disabled`, [s(`>`, [l(`scrollbar`, `pointer-events: none;`)])]), s(`>`, [l(`scrollbar`, `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [ci(), s(`&:hover`, `background-color: var(--n-scrollbar-color-hover);`)])])])])]), pi = z({ name: `Scrollbar`, props: Object.assign(Object.assign({}, d.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: `hover` }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: `right` }, xPlacement: { type: String, default: `bottom` } }), inheritAttrs: false, setup(t2) {
  let { mergedClsPrefixRef: n2, inlineThemeDisabled: r2, mergedRtlRef: i2 } = C(t2), a2 = p(`Scrollbar`, i2, n2), o2 = M(null), s2 = M(null), c2 = M(null), l2 = M(null), u2 = M(null), m2 = M(null), h2 = M(null), g2 = M(null), _2 = M(null), v2 = M(null), y2 = M(null), b2 = M(0), S2 = M(0), w2 = M(false), T2 = M(false), E2 = false, D2 = false, O2, k2, A2 = 0, ee2 = 0, te2 = 0, ne2 = 0, re2 = $t(), ie2 = d(`Scrollbar`, `-scrollbar`, fi, di, t2, n2), N2 = B(() => {
    let { value: t3 } = g2, { value: n3 } = m2, { value: r3 } = v2;
    return t3 === null || n3 === null || r3 === null ? 0 : Math.min(t3, r3 * t3 / n3 + e(ie2.value.self.width) * 1.5);
  }), ae2 = B(() => `${N2.value}px`), oe2 = B(() => {
    let { value: t3 } = _2, { value: n3 } = h2, { value: r3 } = y2;
    return t3 === null || n3 === null || r3 === null ? 0 : r3 * t3 / n3 + e(ie2.value.self.height) * 1.5;
  }), se2 = B(() => `${oe2.value}px`), ce2 = B(() => {
    let { value: e2 } = g2, { value: t3 } = b2, { value: n3 } = m2, { value: r3 } = v2;
    if (e2 === null || n3 === null || r3 === null) return 0;
    {
      let i3 = n3 - e2;
      return i3 ? t3 / i3 * (r3 - N2.value) : 0;
    }
  }), le2 = B(() => `${ce2.value}px`), de2 = B(() => {
    let { value: e2 } = _2, { value: t3 } = S2, { value: n3 } = h2, { value: r3 } = y2;
    if (e2 === null || n3 === null || r3 === null) return 0;
    {
      let i3 = n3 - e2;
      return i3 ? t3 / i3 * (r3 - oe2.value) : 0;
    }
  }), fe2 = B(() => `${de2.value}px`), F2 = B(() => {
    let { value: e2 } = g2, { value: t3 } = m2;
    return e2 !== null && t3 !== null && t3 > e2;
  }), pe2 = B(() => {
    let { value: e2 } = _2, { value: t3 } = h2;
    return e2 !== null && t3 !== null && t3 > e2;
  }), I2 = B(() => {
    let { trigger: e2 } = t2;
    return e2 === `none` || w2.value;
  }), me2 = B(() => {
    let { trigger: e2 } = t2;
    return e2 === `none` || T2.value;
  }), L2 = B(() => {
    let { container: e2 } = t2;
    return e2 ? e2() : s2.value;
  }), he2 = B(() => {
    let { content: e2 } = t2;
    return e2 ? e2() : c2.value;
  }), ge2 = (e2, n3) => {
    if (!t2.scrollable) return;
    if (typeof e2 == `number`) {
      z2(e2, n3 ?? 0, 0, false, `auto`);
      return;
    }
    let { left: r3, top: i3, index: a3, elSize: o3, position: s3, behavior: c3, el: l3, debounce: u3 = true } = e2;
    (r3 !== void 0 || i3 !== void 0) && z2(r3 ?? 0, i3 ?? 0, 0, false, c3), l3 === void 0 ? a3 !== void 0 && o3 !== void 0 ? z2(0, a3 * o3, o3, u3, c3) : s3 === `bottom` ? z2(0, 2 ** 53 - 1, 0, false, c3) : s3 === `top` && z2(0, 0, 0, false, c3) : z2(0, l3.offsetTop, l3.offsetHeight, u3, c3);
  }, R2 = dn(() => {
    t2.container || ge2({ top: b2.value, left: S2.value });
  }), _e2 = () => {
    R2.isDeactivated || U2();
  }, ve2 = (e2) => {
    if (R2.isDeactivated) return;
    let { onResize: n3 } = t2;
    n3 && n3(e2), U2();
  }, ye2 = (e2, n3) => {
    if (!t2.scrollable) return;
    let { value: r3 } = L2;
    r3 && (typeof e2 == `object` ? r3.scrollBy(e2) : r3.scrollBy(e2, n3 || 0));
  };
  function z2(e2, t3, n3, r3, i3) {
    let { value: a3 } = L2;
    if (a3) {
      if (r3) {
        let { scrollTop: r4, offsetHeight: o3 } = a3;
        if (t3 > r4) {
          t3 + n3 <= r4 + o3 || a3.scrollTo({ left: e2, top: t3 + n3 - o3, behavior: i3 });
          return;
        }
      }
      a3.scrollTo({ left: e2, top: t3, behavior: i3 });
    }
  }
  function be2() {
    Ce2(), we2(), U2();
  }
  function xe2() {
    V2();
  }
  function V2() {
    H2(), Se2();
  }
  function H2() {
    k2 !== void 0 && window.clearTimeout(k2), k2 = window.setTimeout(() => {
      T2.value = false;
    }, t2.duration);
  }
  function Se2() {
    O2 !== void 0 && window.clearTimeout(O2), O2 = window.setTimeout(() => {
      w2.value = false;
    }, t2.duration);
  }
  function Ce2() {
    O2 !== void 0 && window.clearTimeout(O2), w2.value = true;
  }
  function we2() {
    k2 !== void 0 && window.clearTimeout(k2), T2.value = true;
  }
  function Te2(e2) {
    let { onScroll: n3 } = t2;
    n3 && n3(e2), Ee2();
  }
  function Ee2() {
    let { value: e2 } = L2;
    e2 && (b2.value = e2.scrollTop, S2.value = e2.scrollLeft * ((a2 == null ? void 0 : a2.value) ? -1 : 1));
  }
  function De2() {
    let { value: e2 } = he2;
    e2 && (m2.value = e2.offsetHeight, h2.value = e2.offsetWidth);
    let { value: t3 } = L2;
    t3 && (g2.value = t3.offsetHeight, _2.value = t3.offsetWidth);
    let { value: n3 } = u2, { value: r3 } = l2;
    n3 && (y2.value = n3.offsetWidth), r3 && (v2.value = r3.offsetHeight);
  }
  function Oe2() {
    let { value: e2 } = L2;
    e2 && (b2.value = e2.scrollTop, S2.value = e2.scrollLeft * ((a2 == null ? void 0 : a2.value) ? -1 : 1), g2.value = e2.offsetHeight, _2.value = e2.offsetWidth, m2.value = e2.scrollHeight, h2.value = e2.scrollWidth);
    let { value: t3 } = u2, { value: n3 } = l2;
    t3 && (y2.value = t3.offsetWidth), n3 && (v2.value = n3.offsetHeight);
  }
  function U2() {
    t2.scrollable && (t2.useUnifiedContainer ? Oe2() : (De2(), Ee2()));
  }
  function ke2(e2) {
    var _a2;
    return !((_a2 = o2.value) == null ? void 0 : _a2.contains(Mt(e2)));
  }
  function Ae2(e2) {
    e2.preventDefault(), e2.stopPropagation(), D2 = true, W(`mousemove`, window, je2, true), W(`mouseup`, window, Me2, true), ee2 = S2.value, te2 = (a2 == null ? void 0 : a2.value) ? window.innerWidth - e2.clientX : e2.clientX;
  }
  function je2(e2) {
    if (!D2) return;
    O2 !== void 0 && window.clearTimeout(O2), k2 !== void 0 && window.clearTimeout(k2);
    let { value: n3 } = _2, { value: r3 } = h2, { value: i3 } = oe2;
    if (n3 === null || r3 === null) return;
    let o3 = ((a2 == null ? void 0 : a2.value) ? window.innerWidth - e2.clientX - te2 : e2.clientX - te2) * (r3 - n3) / (n3 - i3), s3 = r3 - n3, c3 = ee2 + o3;
    c3 = Math.min(s3, c3), c3 = Math.max(c3, 0);
    let { value: l3 } = L2;
    if (l3) {
      l3.scrollLeft = c3 * ((a2 == null ? void 0 : a2.value) ? -1 : 1);
      let { internalOnUpdateScrollLeft: e3 } = t2;
      e3 && e3(c3);
    }
  }
  function Me2(e2) {
    e2.preventDefault(), e2.stopPropagation(), G(`mousemove`, window, je2, true), G(`mouseup`, window, Me2, true), D2 = false, U2(), ke2(e2) && V2();
  }
  function Ne2(e2) {
    e2.preventDefault(), e2.stopPropagation(), E2 = true, W(`mousemove`, window, Pe2, true), W(`mouseup`, window, Fe2, true), A2 = b2.value, ne2 = e2.clientY;
  }
  function Pe2(e2) {
    if (!E2) return;
    O2 !== void 0 && window.clearTimeout(O2), k2 !== void 0 && window.clearTimeout(k2);
    let { value: t3 } = g2, { value: n3 } = m2, { value: r3 } = N2;
    if (t3 === null || n3 === null) return;
    let i3 = (e2.clientY - ne2) * (n3 - t3) / (t3 - r3), a3 = n3 - t3, o3 = A2 + i3;
    o3 = Math.min(a3, o3), o3 = Math.max(o3, 0);
    let { value: s3 } = L2;
    s3 && (s3.scrollTop = o3);
  }
  function Fe2(e2) {
    e2.preventDefault(), e2.stopPropagation(), G(`mousemove`, window, Pe2, true), G(`mouseup`, window, Fe2, true), E2 = false, U2(), ke2(e2) && V2();
  }
  ue(() => {
    let { value: e2 } = pe2, { value: t3 } = F2, { value: r3 } = n2, { value: i3 } = u2, { value: a3 } = l2;
    i3 && (e2 ? i3.classList.remove(`${r3}-scrollbar-rail--disabled`) : i3.classList.add(`${r3}-scrollbar-rail--disabled`)), a3 && (t3 ? a3.classList.remove(`${r3}-scrollbar-rail--disabled`) : a3.classList.add(`${r3}-scrollbar-rail--disabled`));
  }), j(() => {
    t2.container || U2();
  }), P(() => {
    O2 !== void 0 && window.clearTimeout(O2), k2 !== void 0 && window.clearTimeout(k2), G(`mousemove`, window, Pe2, true), G(`mouseup`, window, Fe2, true);
  });
  let Ie2 = B(() => {
    let { common: { cubicBezierEaseInOut: e2 }, self: { color: t3, colorHover: n3, height: r3, width: i3, borderRadius: o3, railInsetHorizontalTop: s3, railInsetHorizontalBottom: c3, railInsetVerticalRight: l3, railInsetVerticalLeft: u3, railColor: d2 } } = ie2.value, { top: f2, right: p2, bottom: m3, left: h3 } = x(s3), { top: g3, right: _3, bottom: v3, left: y3 } = x(c3), { top: b3, right: S3, bottom: C2, left: w3 } = x((a2 == null ? void 0 : a2.value) ? $r(l3) : l3), { top: T3, right: E3, bottom: D3, left: O3 } = x((a2 == null ? void 0 : a2.value) ? $r(u3) : u3);
    return { "--n-scrollbar-bezier": e2, "--n-scrollbar-color": t3, "--n-scrollbar-color-hover": n3, "--n-scrollbar-border-radius": o3, "--n-scrollbar-width": i3, "--n-scrollbar-height": r3, "--n-scrollbar-rail-top-horizontal-top": f2, "--n-scrollbar-rail-right-horizontal-top": p2, "--n-scrollbar-rail-bottom-horizontal-top": m3, "--n-scrollbar-rail-left-horizontal-top": h3, "--n-scrollbar-rail-top-horizontal-bottom": g3, "--n-scrollbar-rail-right-horizontal-bottom": _3, "--n-scrollbar-rail-bottom-horizontal-bottom": v3, "--n-scrollbar-rail-left-horizontal-bottom": y3, "--n-scrollbar-rail-top-vertical-right": b3, "--n-scrollbar-rail-right-vertical-right": S3, "--n-scrollbar-rail-bottom-vertical-right": C2, "--n-scrollbar-rail-left-vertical-right": w3, "--n-scrollbar-rail-top-vertical-left": T3, "--n-scrollbar-rail-right-vertical-left": E3, "--n-scrollbar-rail-bottom-vertical-left": D3, "--n-scrollbar-rail-left-vertical-left": O3, "--n-scrollbar-rail-color": d2 };
  }), Le2 = r2 ? f(`scrollbar`, void 0, Ie2, t2) : void 0, Re2 = { scrollTo: ge2, scrollBy: ye2, sync: U2, syncUnifiedContainer: Oe2, handleMouseEnterWrapper: be2, handleMouseLeaveWrapper: xe2 };
  return Object.assign(Object.assign({}, Re2), { mergedClsPrefix: n2, rtlEnabled: a2, containerScrollTop: b2, wrapperRef: o2, containerRef: s2, contentRef: c2, yRailRef: l2, xRailRef: u2, needYBar: F2, needXBar: pe2, yBarSizePx: ae2, xBarSizePx: se2, yBarTopPx: le2, xBarLeftPx: fe2, isShowXBar: I2, isShowYBar: me2, isIos: re2, handleScroll: Te2, handleContentResize: _e2, handleContainerResize: ve2, handleYScrollMouseDown: Ne2, handleXScrollMouseDown: Ae2, cssVars: r2 ? void 0 : Ie2, themeClass: Le2 == null ? void 0 : Le2.themeClass, onRender: Le2 == null ? void 0 : Le2.onRender });
}, render() {
  var _a2;
  let { $slots: e2, mergedClsPrefix: t2, triggerDisplayManually: n2, rtlEnabled: r2, internalHoistYRail: i2, yPlacement: a2, xPlacement: o2, xScrollable: s2 } = this;
  if (!this.scrollable) return (_a2 = e2.default) == null ? void 0 : _a2.call(e2);
  let c2 = this.trigger === `none`, l2 = (e3, n3) => R(`div`, { ref: `yRailRef`, class: [`${t2}-scrollbar-rail`, `${t2}-scrollbar-rail--vertical`, `${t2}-scrollbar-rail--vertical--${a2}`, e3], "data-scrollbar-rail": true, style: [n3 || ``, this.verticalRailStyle], "aria-hidden": true }, R(c2 ? oi : ie, c2 ? null : { name: `fade-in-transition` }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? R(`div`, { class: `${t2}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), u2 = () => {
    var _a3;
    var a3;
    return (a3 = this.onRender) == null || a3.call(this), R(`div`, Se(this.$attrs, { role: `none`, ref: `wrapperRef`, class: [`${t2}-scrollbar`, this.themeClass, r2 && `${t2}-scrollbar--rtl`], style: this.cssVars, onMouseenter: n2 ? void 0 : this.handleMouseEnterWrapper, onMouseleave: n2 ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (_a3 = e2.default) == null ? void 0 : _a3.call(e2) : R(`div`, { role: `none`, ref: `containerRef`, class: [`${t2}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, R(Vr, { onResize: this.handleContentResize }, { default: () => R(`div`, { ref: `contentRef`, role: `none`, style: [{ width: this.xScrollable ? `fit-content` : null }, this.contentStyle], class: [`${t2}-scrollbar-content`, this.contentClass] }, e2) })), i2 ? null : l2(void 0, void 0), s2 && R(`div`, { ref: `xRailRef`, class: [`${t2}-scrollbar-rail`, `${t2}-scrollbar-rail--horizontal`, `${t2}-scrollbar-rail--horizontal--${o2}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, R(c2 ? oi : ie, c2 ? null : { name: `fade-in-transition` }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? R(`div`, { class: `${t2}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: r2 ? this.xBarLeftPx : void 0, left: r2 ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, d2 = this.container ? u2() : R(Vr, { onResize: this.handleContainerResize }, { default: u2 });
  return i2 ? R(V, null, d2, l2(this.themeClass, this.cssVars)) : d2;
} }), mi = pi;
const hi = pi;
var gi = { space: `6px`, spaceArrow: `10px`, arrowOffset: `10px`, arrowOffsetVertical: `10px`, arrowHeight: `6px`, padding: `8px 14px` };
function _i(e2) {
  let { boxShadow2: t2, popoverColor: n2, textColor2: r2, borderRadius: i2, fontSize: a2, dividerColor: o2 } = e2;
  return Object.assign(Object.assign({}, gi), { fontSize: a2, borderRadius: i2, color: n2, dividerColor: o2, textColor: r2, boxShadow: t2 });
}
var vi = u({ name: `Popover`, common: v, peers: { Scrollbar: di }, self: _i }), yi = { top: `bottom`, bottom: `top`, left: `right`, right: `left` }, Z = `var(--n-arrow-height) * 1.414`, bi = s([y(`popover`, `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [s(`>`, [y(`scrollbar`, `
 height: inherit;
 max-height: inherit;
 `)]), S(`raw`, `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [S(`scrollable`, [S(`show-header-or-footer`, `padding: var(--n-padding);`)])]), l(`header`, `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), l(`footer`, `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), h(`scrollable, show-header-or-footer`, [l(`content`, `
 padding: var(--n-padding);
 `)])]), y(`popover-shared`, `
 transform-origin: inherit;
 `, [y(`popover-arrow-wrapper`, `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [y(`popover-arrow`, `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Z});
 height: calc(${Z});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), s(`&.popover-transition-enter-from, &.popover-transition-leave-to`, `
 opacity: 0;
 transform: scale(.85);
 `), s(`&.popover-transition-enter-to, &.popover-transition-leave-from`, `
 transform: scale(1);
 opacity: 1;
 `), s(`&.popover-transition-enter-active`, `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), s(`&.popover-transition-leave-active`, `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), $(`top-start`, `
 top: calc(${Z} / -2);
 left: calc(${Q(`top-start`)} - var(--v-offset-left));
 `), $(`top`, `
 top: calc(${Z} / -2);
 transform: translateX(calc(${Z} / -2)) rotate(45deg);
 left: 50%;
 `), $(`top-end`, `
 top: calc(${Z} / -2);
 right: calc(${Q(`top-end`)} + var(--v-offset-left));
 `), $(`bottom-start`, `
 bottom: calc(${Z} / -2);
 left: calc(${Q(`bottom-start`)} - var(--v-offset-left));
 `), $(`bottom`, `
 bottom: calc(${Z} / -2);
 transform: translateX(calc(${Z} / -2)) rotate(45deg);
 left: 50%;
 `), $(`bottom-end`, `
 bottom: calc(${Z} / -2);
 right: calc(${Q(`bottom-end`)} + var(--v-offset-left));
 `), $(`left-start`, `
 left: calc(${Z} / -2);
 top: calc(${Q(`left-start`)} - var(--v-offset-top));
 `), $(`left`, `
 left: calc(${Z} / -2);
 transform: translateY(calc(${Z} / -2)) rotate(45deg);
 top: 50%;
 `), $(`left-end`, `
 left: calc(${Z} / -2);
 bottom: calc(${Q(`left-end`)} + var(--v-offset-top));
 `), $(`right-start`, `
 right: calc(${Z} / -2);
 top: calc(${Q(`right-start`)} - var(--v-offset-top));
 `), $(`right`, `
 right: calc(${Z} / -2);
 transform: translateY(calc(${Z} / -2)) rotate(45deg);
 top: 50%;
 `), $(`right-end`, `
 right: calc(${Z} / -2);
 bottom: calc(${Q(`right-end`)} + var(--v-offset-top));
 `), ...Dt({ top: [`right-start`, `left-start`], right: [`top-end`, `bottom-end`], bottom: [`right-end`, `left-end`], left: [`top-start`, `bottom-start`] }, (e2, t2) => {
  let n2 = [`right`, `left`].includes(t2), r2 = n2 ? `width` : `height`;
  return e2.map((e3) => {
    let i2 = e3.split(`-`)[1] === `end`, a2 = `calc((${`var(--v-target-${r2}, 0px)`} - ${Z}) / 2)`, o2 = Q(e3);
    return s(`[v-placement="${e3}"] >`, [y(`popover-shared`, [h(`center-arrow`, [y(`popover-arrow`, `${t2}: calc(max(${a2}, ${o2}) ${i2 ? `+` : `-`} var(--v-offset-${n2 ? `left` : `top`}));`)])])]);
  });
})]);
function Q(e2) {
  return [`top`, `bottom`].includes(e2.split(`-`)[0]) ? `var(--n-arrow-offset)` : `var(--n-arrow-offset-vertical)`;
}
function $(e2, t2) {
  let n2 = e2.split(`-`)[0], r2 = [`top`, `bottom`].includes(n2) ? `height: var(--n-space-arrow);` : `width: var(--n-space-arrow);`;
  return s(`[v-placement="${e2}"] >`, [y(`popover-shared`, `
 margin-${yi[n2]}: var(--n-space);
 `, [h(`show-arrow`, `
 margin-${yi[n2]}: var(--n-space-arrow);
 `), h(`overlap`, `
 margin: 0;
 `), b(`popover-arrow-wrapper`, `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n2}: 100%;
 ${yi[n2]}: auto;
 ${r2}
 `, [y(`popover-arrow`, t2)])])]);
}
const xi = Object.assign(Object.assign({}, d.props), { to: K.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function Si({ arrowClass: e2, arrowStyle: t2, arrowWrapperClass: n2, arrowWrapperStyle: r2, clsPrefix: i2 }) {
  return R(`div`, { key: `__popover-arrow__`, style: r2, class: [`${i2}-popover-arrow-wrapper`, n2] }, R(`div`, { class: [`${i2}-popover-arrow`, e2], style: t2 }));
}
var Ci = z({ name: `PopoverBody`, inheritAttrs: false, props: xi, setup(e2, { slots: t2, attrs: n2 }) {
  let { namespaceRef: r2, mergedClsPrefixRef: i2, inlineThemeDisabled: a2, mergedRtlRef: o2 } = C(e2), s2 = d(`Popover`, `-popover`, bi, vi, e2, i2), c2 = p(`Popover`, o2, i2), l2 = M(null), u2 = H(`NPopover`), m2 = M(null), h2 = M(e2.show), g2 = M(false);
  ue(() => {
    let { show: t3 } = e2;
    t3 && !ti() && !e2.internalDeactivateImmediately && (g2.value = true);
  });
  let _2 = B(() => {
    let { trigger: t3, onClickoutside: n3 } = e2, r3 = [], { positionManuallyRef: { value: i3 } } = u2;
    return i3 || (t3 === `click` && !n3 && r3.push([Tn, O2, void 0, { capture: true }]), t3 === `hover` && r3.push([Cn, D2])), n3 && r3.push([Tn, O2, void 0, { capture: true }]), (e2.displayDirective === `show` || e2.animated && g2.value) && r3.push([pe, e2.show]), r3;
  }), v2 = B(() => {
    let { common: { cubicBezierEaseInOut: e3, cubicBezierEaseIn: t3, cubicBezierEaseOut: n3 }, self: { space: r3, spaceArrow: i3, padding: a3, fontSize: o3, textColor: c3, dividerColor: l3, color: u3, boxShadow: d2, borderRadius: f2, arrowHeight: p2, arrowOffset: m3, arrowOffsetVertical: h3 } } = s2.value;
    return { "--n-box-shadow": d2, "--n-bezier": e3, "--n-bezier-ease-in": t3, "--n-bezier-ease-out": n3, "--n-font-size": o3, "--n-text-color": c3, "--n-color": u3, "--n-divider-color": l3, "--n-border-radius": f2, "--n-arrow-height": p2, "--n-arrow-offset": m3, "--n-arrow-offset-vertical": h3, "--n-padding": a3, "--n-space": r3, "--n-space-arrow": i3 };
  }), y2 = B(() => {
    let t3 = e2.width === `trigger` ? void 0 : Qr(e2.width), n3 = [];
    t3 && n3.push({ width: t3 });
    let { maxWidth: r3, minWidth: i3 } = e2;
    return r3 && n3.push({ maxWidth: Qr(r3) }), i3 && n3.push({ maxWidth: Qr(i3) }), a2 || n3.push(v2.value), n3;
  }), b2 = a2 ? f(`popover`, void 0, v2, e2) : void 0;
  u2.setBodyInstance({ syncPosition: x2 }), P(() => {
    u2.setBodyInstance(null);
  }), N(I(e2, `show`), (t3) => {
    e2.animated || (t3 ? h2.value = true : h2.value = false);
  });
  function x2() {
    var e3;
    (e3 = l2.value) == null || e3.syncPosition();
  }
  function S2(t3) {
    e2.trigger === `hover` && e2.keepAliveOnHover && e2.show && u2.handleMouseEnter(t3);
  }
  function w2(t3) {
    e2.trigger === `hover` && e2.keepAliveOnHover && u2.handleMouseLeave(t3);
  }
  function D2(t3) {
    e2.trigger === `hover` && !ee2().contains(Mt(t3)) && u2.handleMouseMoveOutside(t3);
  }
  function O2(t3) {
    (e2.trigger === `click` && !ee2().contains(Mt(t3)) || e2.onClickoutside) && u2.handleClickOutside(t3);
  }
  function ee2() {
    return u2.getTriggerElement();
  }
  k(cn, m2), k(nn, null), k(an, null);
  function te2() {
    if (b2 == null ? void 0 : b2.onRender(), !(e2.displayDirective === `show` || e2.show || e2.animated && g2.value)) return null;
    let r3, a3 = u2.internalRenderBodyRef.value, { value: o3 } = i2;
    if (a3) r3 = a3([`${o3}-popover-shared`, (c2 == null ? void 0 : c2.value) && `${o3}-popover--rtl`, b2 == null ? void 0 : b2.themeClass.value, e2.overlap && `${o3}-popover-shared--overlap`, e2.showArrow && `${o3}-popover-shared--show-arrow`, e2.arrowPointToCenter && `${o3}-popover-shared--center-arrow`], m2, y2.value, S2, w2);
    else {
      let { value: i3 } = u2.extraClassRef, { internalTrapFocus: a4 } = e2, l3 = !E(t2.header) || !E(t2.footer), d2 = () => {
        var _a2;
        let n3 = l3 ? R(V, null, T(t2.header, (t3) => t3 ? R(`div`, { class: [`${o3}-popover__header`, e2.headerClass], style: e2.headerStyle }, t3) : null), T(t2.default, (n4) => n4 ? R(`div`, { class: [`${o3}-popover__content`, e2.contentClass], style: e2.contentStyle }, t2) : null), T(t2.footer, (t3) => t3 ? R(`div`, { class: [`${o3}-popover__footer`, e2.footerClass], style: e2.footerStyle }, t3) : null)) : e2.scrollable ? (_a2 = t2.default) == null ? void 0 : _a2.call(t2) : R(`div`, { class: [`${o3}-popover__content`, e2.contentClass], style: e2.contentStyle }, t2);
        return [e2.scrollable ? R(hi, { themeOverrides: s2.value.peerOverrides.Scrollbar, theme: s2.value.peers.Scrollbar, contentClass: l3 ? void 0 : `${o3}-popover__content ${e2.contentClass ?? ``}`, contentStyle: l3 ? void 0 : e2.contentStyle }, { default: () => n3 }) : n3, e2.showArrow ? Si({ arrowClass: e2.arrowClass, arrowStyle: e2.arrowStyle, arrowWrapperClass: e2.arrowWrapperClass, arrowWrapperStyle: e2.arrowWrapperStyle, clsPrefix: o3 }) : null];
      };
      r3 = R(`div`, Se({ class: [`${o3}-popover`, `${o3}-popover-shared`, (c2 == null ? void 0 : c2.value) && `${o3}-popover--rtl`, b2 == null ? void 0 : b2.themeClass.value, i3.map((e3) => `${o3}-${e3}`), { [`${o3}-popover--scrollable`]: e2.scrollable, [`${o3}-popover--show-header-or-footer`]: l3, [`${o3}-popover--raw`]: e2.raw, [`${o3}-popover-shared--overlap`]: e2.overlap, [`${o3}-popover-shared--show-arrow`]: e2.showArrow, [`${o3}-popover-shared--center-arrow`]: e2.arrowPointToCenter }], ref: m2, style: y2.value, onKeydown: u2.handleKeydown, onMouseenter: S2, onMouseleave: w2 }, n2), a4 ? R(Jr, { active: e2.show, autoFocus: true }, { default: d2 }) : d2());
    }
    return A(r3, _2.value);
  }
  return { displayed: g2, namespace: r2, isMounted: u2.isMountedRef, zIndex: u2.zIndexRef, followerRef: l2, adjustedTo: K(e2), followerEnabled: h2, renderContentNode: te2 };
}, render() {
  return R(qn, { ref: `followerRef`, zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === `trigger` ? `target` : void 0, teleportDisabled: this.adjustedTo === K.tdkey }, { default: () => this.animated ? R(ie, { name: `popover-transition`, appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var e2;
    (e2 = this.internalOnAfterLeave) == null || e2.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), wi = Object.keys(xi), Ti = { focus: [`onFocus`, `onBlur`], click: [`onClick`], hover: [`onMouseenter`, `onMouseleave`], manual: [], nested: [`onFocus`, `onBlur`, `onMouseenter`, `onMouseleave`, `onClick`] };
function Ei(e2, t2, n2) {
  Ti[t2].forEach((t3) => {
    e2.props ? e2.props = Object.assign({}, e2.props) : e2.props = {};
    let r2 = e2.props[t3], i2 = n2[t3];
    r2 ? e2.props[t3] = (...e3) => {
      r2(...e3), i2(...e3);
    } : e2.props[t3] = i2;
  });
}
const Di = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: `hover` }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: `top` }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: `if` }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: K.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number };
var Oi = z({ name: `Popover`, inheritAttrs: false, props: Object.assign(Object.assign(Object.assign({}, d.props), Di), { internalOnAfterLeave: Function, internalRenderBody: Function }), slots: Object, __popover__: true, setup(e2) {
  let t2 = Xt(), r2 = M(null), i2 = B(() => e2.show), a2 = M(e2.defaultShow), o2 = Yt(i2, a2), s2 = Ut(() => e2.disabled ? false : o2.value), c2 = () => {
    if (e2.disabled) return true;
    let { getDisabled: t3 } = e2;
    return !!(t3 == null ? void 0 : t3());
  }, l2 = () => c2() ? false : o2.value, u2 = Zt(e2, [`arrow`, `showArrow`]), d2 = B(() => e2.overlap ? false : u2.value), f2 = null, p2 = M(null), m2 = M(null), h2 = Ut(() => e2.x !== void 0 && e2.y !== void 0);
  function g2(t3) {
    let { "onUpdate:show": r3, onUpdateShow: i3, onShow: o3, onHide: s3 } = e2;
    a2.value = t3, r3 && n(r3, t3), i3 && n(i3, t3), t3 && o3 && n(o3, true), t3 && s3 && n(s3, false);
  }
  function _2() {
    f2 && f2.syncPosition();
  }
  function v2() {
    let { value: e3 } = p2;
    e3 && (window.clearTimeout(e3), p2.value = null);
  }
  function y2() {
    let { value: e3 } = m2;
    e3 && (window.clearTimeout(e3), m2.value = null);
  }
  function b2() {
    let t3 = c2();
    if (e2.trigger === `focus` && !t3) {
      if (l2()) return;
      g2(true);
    }
  }
  function x2() {
    let t3 = c2();
    if (e2.trigger === `focus` && !t3) {
      if (!l2()) return;
      g2(false);
    }
  }
  function S2() {
    let t3 = c2();
    if (e2.trigger === `hover` && !t3) {
      if (y2(), p2.value !== null || l2()) return;
      let t4 = () => {
        g2(true), p2.value = null;
      }, { delay: n2 } = e2;
      n2 === 0 ? t4() : p2.value = window.setTimeout(t4, n2);
    }
  }
  function C2() {
    let t3 = c2();
    if (e2.trigger === `hover` && !t3) {
      if (v2(), m2.value !== null || !l2()) return;
      let t4 = () => {
        g2(false), m2.value = null;
      }, { duration: n2 } = e2;
      n2 === 0 ? t4() : m2.value = window.setTimeout(t4, n2);
    }
  }
  function w2() {
    C2();
  }
  function T2(t3) {
    var n2;
    l2() && (e2.trigger === `click` && (v2(), y2(), g2(false)), (n2 = e2.onClickoutside) == null || n2.call(e2, t3));
  }
  function E2() {
    e2.trigger === `click` && !c2() && (v2(), y2(), g2(!l2()));
  }
  function D2(t3) {
    e2.internalTrapFocus && t3.key === `Escape` && (v2(), y2(), g2(false));
  }
  function O2(e3) {
    a2.value = e3;
  }
  function A2() {
    var _a2;
    return (_a2 = r2.value) == null ? void 0 : _a2.targetRef;
  }
  function ee2(e3) {
    f2 = e3;
  }
  return k(`NPopover`, { getTriggerElement: A2, handleKeydown: D2, handleMouseEnter: S2, handleMouseLeave: C2, handleClickOutside: T2, handleMouseMoveOutside: w2, setBodyInstance: ee2, positionManuallyRef: h2, isMountedRef: t2, zIndexRef: I(e2, `zIndex`), extraClassRef: I(e2, `internalExtraClass`), internalRenderBodyRef: I(e2, `internalRenderBody`) }), ue(() => {
    o2.value && c2() && g2(false);
  }), { binderInstRef: r2, positionManually: h2, mergedShowConsideringDisabledProp: s2, uncontrolledShow: a2, mergedShowArrow: d2, getMergedShow: l2, setShow: O2, handleClick: E2, handleMouseEnter: S2, handleMouseLeave: C2, handleFocus: b2, handleBlur: x2, syncPosition: _2 };
}, render() {
  var _a2;
  let { positionManually: e2, $slots: t2 } = this, n2, r2 = false;
  if (!e2 && (n2 = ri(t2, `trigger`), n2)) {
    n2 = me(n2), n2 = n2.type === ve ? R(`span`, [n2]) : n2;
    let t3 = { onClick: this.handleClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur };
    if ((_a2 = n2.type) == null ? void 0 : _a2.__popover__) r2 = true, n2.props || (n2.props = { internalSyncTargetWithParent: true, internalInheritedEventHandlers: [] }), n2.props.internalSyncTargetWithParent = true, n2.props.internalInheritedEventHandlers ? n2.props.internalInheritedEventHandlers = [t3, ...n2.props.internalInheritedEventHandlers] : n2.props.internalInheritedEventHandlers = [t3];
    else {
      let { internalInheritedEventHandlers: r3 } = this, i2 = [t3, ...r3];
      Ei(n2, r3 ? `nested` : e2 ? `manual` : this.trigger, { onBlur: (e3) => {
        i2.forEach((t4) => {
          t4.onBlur(e3);
        });
      }, onFocus: (e3) => {
        i2.forEach((t4) => {
          t4.onFocus(e3);
        });
      }, onClick: (e3) => {
        i2.forEach((t4) => {
          t4.onClick(e3);
        });
      }, onMouseenter: (e3) => {
        i2.forEach((t4) => {
          t4.onMouseenter(e3);
        });
      }, onMouseleave: (e3) => {
        i2.forEach((t4) => {
          t4.onMouseleave(e3);
        });
      } });
    }
  }
  return R(bn, { ref: `binderInstRef`, syncTarget: !r2, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    let t3 = this.getMergedShow();
    return [this.internalTrapFocus && t3 ? A(R(`div`, { style: { position: `fixed`, top: 0, right: 0, bottom: 0, left: 0 } }), [[kn, { enabled: t3, zIndex: this.zIndex }]]) : null, e2 ? null : R(xn, null, { default: () => n2 }), R(Ci, ai(this.$props, wi, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: t3 })), { default: () => {
      var _a3;
      var e3;
      return (_a3 = (e3 = this.$slots).default) == null ? void 0 : _a3.call(e3);
    }, header: () => {
      var _a3;
      var e3;
      return (_a3 = (e3 = this.$slots).header) == null ? void 0 : _a3.call(e3);
    }, footer: () => {
      var _a3;
      var e3;
      return (_a3 = (e3 = this.$slots).footer) == null ? void 0 : _a3.call(e3);
    } })];
  } });
} }), ki = { closeIconSizeTiny: `12px`, closeIconSizeSmall: `12px`, closeIconSizeMedium: `14px`, closeIconSizeLarge: `14px`, closeSizeTiny: `16px`, closeSizeSmall: `16px`, closeSizeMedium: `18px`, closeSizeLarge: `18px`, padding: `0 7px`, closeMargin: `0 0 0 4px` };
function Ai(e2) {
  let { textColor2: t2, primaryColorHover: n2, primaryColorPressed: r2, primaryColor: a2, infoColor: o2, successColor: s2, warningColor: c2, errorColor: l2, baseColor: u2, borderColor: d2, opacityDisabled: f2, tagColor: p2, closeIconColor: m2, closeIconColorHover: h2, closeIconColorPressed: g2, borderRadiusSmall: _2, fontSizeMini: v2, fontSizeTiny: y2, fontSizeSmall: b2, fontSizeMedium: x2, heightMini: S2, heightTiny: C2, heightSmall: w2, heightMedium: T2, closeColorHover: E2, closeColorPressed: D2, buttonColor2Hover: O2, buttonColor2Pressed: k2, fontWeightStrong: A2 } = e2;
  return Object.assign(Object.assign({}, ki), { closeBorderRadius: _2, heightTiny: S2, heightSmall: C2, heightMedium: w2, heightLarge: T2, borderRadius: _2, opacityDisabled: f2, fontSizeTiny: v2, fontSizeSmall: y2, fontSizeMedium: b2, fontSizeLarge: x2, fontWeightStrong: A2, textColorCheckable: t2, textColorHoverCheckable: t2, textColorPressedCheckable: t2, textColorChecked: u2, colorCheckable: `#0000`, colorHoverCheckable: O2, colorPressedCheckable: k2, colorChecked: a2, colorCheckedHover: n2, colorCheckedPressed: r2, border: `1px solid ${d2}`, textColor: t2, color: p2, colorBordered: `rgb(250, 250, 252)`, closeIconColor: m2, closeIconColorHover: h2, closeIconColorPressed: g2, closeColorHover: E2, closeColorPressed: D2, borderPrimary: `1px solid ${i(a2, { alpha: 0.3 })}`, textColorPrimary: a2, colorPrimary: i(a2, { alpha: 0.12 }), colorBorderedPrimary: i(a2, { alpha: 0.1 }), closeIconColorPrimary: a2, closeIconColorHoverPrimary: a2, closeIconColorPressedPrimary: a2, closeColorHoverPrimary: i(a2, { alpha: 0.12 }), closeColorPressedPrimary: i(a2, { alpha: 0.18 }), borderInfo: `1px solid ${i(o2, { alpha: 0.3 })}`, textColorInfo: o2, colorInfo: i(o2, { alpha: 0.12 }), colorBorderedInfo: i(o2, { alpha: 0.1 }), closeIconColorInfo: o2, closeIconColorHoverInfo: o2, closeIconColorPressedInfo: o2, closeColorHoverInfo: i(o2, { alpha: 0.12 }), closeColorPressedInfo: i(o2, { alpha: 0.18 }), borderSuccess: `1px solid ${i(s2, { alpha: 0.3 })}`, textColorSuccess: s2, colorSuccess: i(s2, { alpha: 0.12 }), colorBorderedSuccess: i(s2, { alpha: 0.1 }), closeIconColorSuccess: s2, closeIconColorHoverSuccess: s2, closeIconColorPressedSuccess: s2, closeColorHoverSuccess: i(s2, { alpha: 0.12 }), closeColorPressedSuccess: i(s2, { alpha: 0.18 }), borderWarning: `1px solid ${i(c2, { alpha: 0.35 })}`, textColorWarning: c2, colorWarning: i(c2, { alpha: 0.15 }), colorBorderedWarning: i(c2, { alpha: 0.12 }), closeIconColorWarning: c2, closeIconColorHoverWarning: c2, closeIconColorPressedWarning: c2, closeColorHoverWarning: i(c2, { alpha: 0.12 }), closeColorPressedWarning: i(c2, { alpha: 0.18 }), borderError: `1px solid ${i(l2, { alpha: 0.23 })}`, textColorError: l2, colorError: i(l2, { alpha: 0.1 }), colorBorderedError: i(l2, { alpha: 0.08 }), closeIconColorError: l2, closeIconColorHoverError: l2, closeIconColorPressedError: l2, closeColorHoverError: i(l2, { alpha: 0.12 }), closeColorPressedError: i(l2, { alpha: 0.18 }) });
}
var ji = { name: `Tag`, common: v, self: Ai };
function Mi(e2) {
  let { textColor2: t2, cardColor: n2, modalColor: r2, popoverColor: i2, dividerColor: o2, borderRadius: s2, fontSize: c2, hoverColor: l2 } = e2;
  return { textColor: t2, color: n2, colorHover: l2, colorModal: r2, colorHoverModal: a(r2, l2), colorPopover: i2, colorHoverPopover: a(i2, l2), borderColor: o2, borderColorModal: a(r2, o2), borderColorPopover: a(i2, o2), borderRadius: s2, fontSize: c2 };
}
var Ni = { name: `List`, common: v, self: Mi };
export {
  Nt as $,
  xn as A,
  rn as B,
  Br as C,
  Mn as D,
  jn as E,
  cn as F,
  Yt as G,
  en as H,
  an as I,
  Gt as J,
  Jt as K,
  sn as L,
  dn as M,
  un as N,
  kn as O,
  K as P,
  W as Q,
  on as R,
  Vr as S,
  Pn as T,
  Zt as U,
  tn as V,
  Xt as W,
  Vt as X,
  Ut as Y,
  G as Z,
  ii as _,
  Oi as a,
  Yr as b,
  vi as c,
  hi as d,
  Mt as et,
  di as f,
  ai as g,
  oi as h,
  ki as i,
  bn as j,
  Tn as k,
  _i as l,
  ci as m,
  Mi as n,
  Ue as nt,
  Di as o,
  ui as p,
  Wt as q,
  ji as r,
  Si as s,
  Ni as t,
  jt as tt,
  mi as u,
  ni as v,
  qn as w,
  Jr as x,
  Qr as y,
  nn as z
};
