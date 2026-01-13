var _a;
import { Ct as e, Et as t, F as n, I as r, L as i, N as a, O as o, R as s, S as c, St as l, T as u, Tt as d, _ as f, d as p, dt as m, f as h, ft as g, h as _, ht as v, it as y, j as b, m as x, mt as S, o as C, ot as w, pt as T, ut as E, wt as D, y as O, yt as k, z as A } from "./Card-nhqq8IKa.js";
import { Bt as j, Et as M, Ft as N, H as ee, Ht as te, I as ne, It as re, Jt as P, Lt as ie, Mt as ae, Nt as oe, Ot as F, P as se, Q as ce, R as le, St as ue, Tt as de, U as fe, V as pe, Yt as me, Z as I, Zt as he, an as L, cn as R, dt as z, gt as B, ht as ge, in as _e, jt as ve, k as V, mt as ye, pt as be, q as xe, rt as Se, st as Ce, ut as we, wt as H } from "./index-DTVnoW_1.js";
var Te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ee = /^\w*$/;
function De(e2, n2) {
  if (ce(e2)) return false;
  var r2 = typeof e2;
  return r2 == `number` || r2 == `symbol` || r2 == `boolean` || e2 == null || t(e2) ? true : Ee.test(e2) || !Te.test(e2) || n2 != null && e2 in Object(n2);
}
var Oe = De, U = `Expected a function`;
function ke(e2, t2) {
  if (typeof e2 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(U);
  var n2 = function() {
    var r2 = arguments, i2 = t2 ? t2.apply(this, r2) : r2[0], a2 = n2.cache;
    if (a2.has(i2)) return a2.get(i2);
    var o2 = e2.apply(this, r2);
    return n2.cache = a2.set(i2, o2) || a2, o2;
  };
  return n2.cache = new (ke.Cache || ne)(), n2;
}
ke.Cache = ne;
var Ae = ke, je = 500;
function Me(e2) {
  var t2 = Ae(e2, function(e3) {
    return n2.size === je && n2.clear(), e3;
  }), n2 = t2.cache;
  return t2;
}
var Ne = Me, Pe = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fe = /\\(\\)?/g, Ie = Ne(function(e2) {
  var t2 = [];
  return e2.charCodeAt(0) === 46 && t2.push(``), e2.replace(Pe, function(e3, n2, r2, i2) {
    t2.push(r2 ? i2.replace(Fe, `$1`) : n2 || e3);
  }), t2;
});
function Le(t2, n2) {
  return ce(t2) ? t2 : Oe(t2, n2) ? [t2] : Ie(e(t2));
}
var Re = Le, ze = 1 / 0;
function Be(e2) {
  if (typeof e2 == `string` || t(e2)) return e2;
  var n2 = e2 + ``;
  return n2 == `0` && 1 / e2 == -ze ? `-0` : n2;
}
var Ve = Be;
function He(e2, t2) {
  t2 = Re(t2, e2);
  for (var n2 = 0, r2 = t2.length; e2 != null && n2 < r2; ) e2 = e2[Ve(t2[n2++])];
  return n2 && n2 == r2 ? e2 : void 0;
}
var Ue = He;
function We(e2, t2, n2) {
  var r2 = e2 == null ? void 0 : Ue(e2, t2);
  return r2 === void 0 ? n2 : r2;
}
var Ge = We, Ke = 1, qe = 2;
function Je(e2, t2, n2, r2) {
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
      var d2 = new se();
      if (r2) var f2 = r2(l2, u2, c2, e2, t2, d2);
      if (!(f2 === void 0 ? V(u2, l2, Ke | qe, r2, d2) : f2)) return false;
    }
  }
  return true;
}
var Ye = Je;
function Xe(e2) {
  return e2 === e2 && !I(e2);
}
var Ze = Xe;
function Qe(e2) {
  for (var t2 = le(e2), n2 = t2.length; n2--; ) {
    var r2 = t2[n2], i2 = e2[r2];
    t2[n2] = [r2, i2, Ze(i2)];
  }
  return t2;
}
var $e = Qe;
function et(e2, t2) {
  return function(n2) {
    return n2 == null ? false : n2[e2] === t2 && (t2 !== void 0 || e2 in Object(n2));
  };
}
var tt = et;
function nt(e2) {
  var t2 = $e(e2);
  return t2.length == 1 && t2[0][2] ? tt(t2[0][0], t2[0][1]) : function(n2) {
    return n2 === e2 || Ye(n2, e2, t2);
  };
}
var rt = nt;
function it(e2, t2) {
  return e2 != null && t2 in Object(e2);
}
var at = it;
function ot(e2, t2, n2) {
  t2 = Re(t2, e2);
  for (var r2 = -1, i2 = t2.length, a2 = false; ++r2 < i2; ) {
    var o2 = Ve(t2[r2]);
    if (!(a2 = e2 != null && n2(e2, o2))) break;
    e2 = e2[o2];
  }
  return a2 || ++r2 != i2 ? a2 : (i2 = e2 == null ? 0 : e2.length, !!i2 && fe(i2) && xe(o2, i2) && (ce(e2) || pe(e2)));
}
var st = ot;
function ct(e2, t2) {
  return e2 != null && st(e2, t2, at);
}
var lt = ct, ut = 1, dt = 2;
function ft(e2, t2) {
  return Oe(e2) && Ze(t2) ? tt(Ve(e2), t2) : function(n2) {
    var r2 = Ge(n2, e2);
    return r2 === void 0 && r2 === t2 ? lt(n2, e2) : V(t2, r2, ut | dt);
  };
}
var pt = ft;
function mt(e2) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e2];
  };
}
var ht = mt;
function gt(e2) {
  return function(t2) {
    return Ue(t2, e2);
  };
}
var _t = gt;
function vt(e2) {
  return Oe(e2) ? ht(Ve(e2)) : _t(e2);
}
var yt = vt;
function bt(e2) {
  return typeof e2 == `function` ? e2 : e2 == null ? D : typeof e2 == `object` ? ce(e2) ? pt(e2[0], e2[1]) : rt(e2) : yt(e2);
}
var xt = bt;
function St(e2, t2) {
  return e2 && l(e2, t2, le);
}
var Ct = St;
function wt(e2, t2) {
  return function(n2, r2) {
    if (n2 == null) return n2;
    if (!ee(n2)) return e2(n2, r2);
    for (var i2 = n2.length, a2 = t2 ? i2 : -1, o2 = Object(n2); (t2 ? a2-- : ++a2 < i2) && r2(o2[a2], a2, o2) !== false; ) ;
    return n2;
  };
}
var Tt = wt(Ct);
function Et(e2, t2) {
  var n2 = -1, r2 = ee(e2) ? Array(e2.length) : [];
  return Tt(e2, function(e3, i2, a2) {
    r2[++n2] = t2(e3, i2, a2);
  }), r2;
}
var Dt = Et;
function Ot(e2, t2) {
  return (ce(e2) ? d : Dt)(e2, xt(t2, 3));
}
var kt = Ot, At = [], jt = /* @__PURE__ */ new WeakMap();
function Mt() {
  At.forEach((e2) => e2(...jt.get(e2))), At = [];
}
function Nt(e2, ...t2) {
  jt.set(e2, t2), !At.includes(e2) && At.push(e2) === 1 && requestAnimationFrame(Mt);
}
function Pt(e2) {
  return e2.composedPath()[0] || null;
}
function Ft(e2 = 8) {
  return Math.random().toString(16).slice(2, 2 + e2);
}
function It(e2, t2) {
  let n2 = [];
  for (let r2 = 0; r2 < e2; ++r2) n2.push(t2);
  return n2;
}
function Lt(e2) {
  return e2.composedPath()[0];
}
var Rt = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function zt(e2, t2, n2) {
  if (e2 === `mousemoveoutside`) {
    let e3 = (e4) => {
      t2.contains(Lt(e4)) || n2(e4);
    };
    return { mousemove: e3, touchstart: e3 };
  } else if (e2 === `clickoutside`) {
    let e3 = false, r2 = (n3) => {
      e3 = !t2.contains(Lt(n3));
    }, i2 = (r3) => {
      e3 && (t2.contains(Lt(r3)) || n2(r3));
    };
    return { mousedown: r2, mouseup: i2, touchstart: r2, touchend: i2 };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${e2}\` is invalid. This could be a bug of evtd.`), {};
}
function Bt(e2, t2, n2) {
  let r2 = Rt[e2], i2 = r2.get(t2);
  i2 === void 0 && r2.set(t2, i2 = /* @__PURE__ */ new WeakMap());
  let a2 = i2.get(n2);
  return a2 === void 0 && i2.set(n2, a2 = zt(e2, t2, n2)), a2;
}
function Vt(e2, t2, n2, r2) {
  if (e2 === `mousemoveoutside` || e2 === `clickoutside`) {
    let i2 = Bt(e2, t2, n2);
    return Object.keys(i2).forEach((e3) => {
      W(e3, document, i2[e3], r2);
    }), true;
  }
  return false;
}
function Ht(e2, t2, n2, r2) {
  if (e2 === `mousemoveoutside` || e2 === `clickoutside`) {
    let i2 = Bt(e2, t2, n2);
    return Object.keys(i2).forEach((e3) => {
      G(e3, document, i2[e3], r2);
    }), true;
  }
  return false;
}
function Ut() {
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
      let { type: d3, eventPhase: f3, bubbles: p3 } = s4, m3 = Lt(s4);
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
    } : n3, Vt(e3, t3, i3, r3)) return;
    let a3 = v2(g2(r3 === true || typeof r3 == `object` && r3.capture === true ? `capture` : `bubble`, e3), t3);
    if (a3.has(i3) || a3.add(i3), t3 === window) {
      let t4 = _2(e3);
      t4.has(i3) || t4.add(i3);
    }
  }
  function S2(e3, t3, n3, r3) {
    if (Ht(e3, t3, n3, r3)) return;
    let i3 = r3 === true || typeof r3 == `object` && r3.capture === true, a3 = i3 ? `capture` : `bubble`, o3 = g2(a3, e3), s3 = v2(o3, t3);
    if (t3 === window && !y2(t3, i3 ? `bubble` : `capture`, e3, n3) && b2(e3, n3)) {
      let t4 = d2[e3];
      t4.delete(n3), t4.size === 0 && (window.removeEventListener(e3, h2), d2[e3] = void 0);
    }
    s3.has(n3) && s3.delete(n3), s3.size === 0 && o3.delete(t3), o3.size === 0 && (window.removeEventListener(e3, m2, a3 === `capture`), u2[a3][e3] = void 0);
  }
  return { on: x2, off: S2 };
}
var { on: W, off: G } = Ut();
function Wt(e2) {
  let t2 = L(!!e2.value);
  if (t2.value) return _e(t2);
  let n2 = P(e2, (e3) => {
    e3 && (t2.value = true, n2());
  });
  return _e(t2);
}
function Gt() {
  return de() !== null;
}
const Kt = typeof window < `u`;
var qt = Kt ? (_a = document == null ? void 0 : document.fonts) == null ? void 0 : _a.ready : void 0, Jt = false;
qt === void 0 ? Jt = true : qt.then(() => {
  Jt = true;
});
function Yt(e2) {
  if (Jt) return;
  let t2 = false;
  ie(() => {
    Jt || (qt == null ? void 0 : qt.then(() => {
      t2 || e2();
    }));
  }), N(() => {
    t2 = true;
  });
}
function Xt(e2, t2) {
  return P(e2, (e3) => {
    e3 !== void 0 && (t2.value = e3);
  }), B(() => e2.value === void 0 ? t2.value : e2.value);
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
const en = n(`n-internal-select-menu`), tn = n(`n-internal-select-menu-body`), nn = n(`n-drawer-body`), rn = n(`n-drawer`), an = n(`n-modal-body`), on = n(`n-modal-provider`), sn = n(`n-modal`), cn = n(`n-popover-body`);
var ln = `__disabled__`;
function K(e2) {
  let t2 = F(an, null), n2 = F(nn, null), r2 = F(cn, null), a2 = F(tn, null), o2 = L();
  if (typeof document < `u`) {
    o2.value = document.fullscreenElement;
    let e3 = () => {
      o2.value = document.fullscreenElement;
    };
    ie(() => {
      W(`fullscreenchange`, document, e3);
    }), N(() => {
      G(`fullscreenchange`, document, e3);
    });
  }
  return i(() => {
    let { to: i2 } = e2;
    return i2 === void 0 ? (t2 == null ? void 0 : t2.value) ? t2.value.$el ?? t2.value : (n2 == null ? void 0 : n2.value) ? n2.value : (r2 == null ? void 0 : r2.value) ? r2.value : (a2 == null ? void 0 : a2.value) ? a2.value : i2 ?? (o2.value || `body`) : i2 === false ? ln : i2 === true ? o2.value || `body` : i2;
  });
}
K.tdkey = ln, K.propTo = { type: [String, Object, Boolean], default: void 0 };
function un(e2) {
  let t2 = { isDeactivated: false }, n2 = false;
  return oe(() => {
    if (t2.isDeactivated = false, !n2) {
      n2 = true;
      return;
    }
    e2();
  }), re(() => {
    t2.isDeactivated = true, n2 || (n2 = true);
  }), t2;
}
function dn(e2, t2, n2 = `default`) {
  let r2 = t2[n2];
  if (r2 === void 0) throw Error(`[vueuc/${e2}]: slot[${n2}] is empty.`);
  return r2();
}
function fn(e2, t2 = true, n2 = []) {
  return e2.forEach((e3) => {
    if (e3 !== null) {
      if (typeof e3 != `object`) {
        (typeof e3 == `string` || typeof e3 == `number`) && n2.push(ue(String(e3)));
        return;
      }
      if (Array.isArray(e3)) {
        fn(e3, t2, n2);
        return;
      }
      if (e3.type === z) {
        if (e3.children === null) return;
        Array.isArray(e3.children) && fn(e3.children, t2, n2);
      } else e3.type !== we && n2.push(e3);
    }
  }), n2;
}
function pn(e2, t2, n2 = `default`) {
  let r2 = t2[n2];
  if (r2 === void 0) throw Error(`[vueuc/${e2}]: slot[${n2}] is empty.`);
  let i2 = fn(r2());
  if (i2.length === 1) return i2[0];
  throw Error(`[vueuc/${e2}]: slot[${n2}] should have exactly one child.`);
}
var q = null;
function mn() {
  if (q === null && (q = document.getElementById(`v-binder-view-measurer`), q === null)) {
    q = document.createElement(`div`), q.id = `v-binder-view-measurer`;
    let { style: e2 } = q;
    e2.position = `fixed`, e2.left = `0`, e2.right = `0`, e2.top = `0`, e2.bottom = `0`, e2.pointerEvents = `none`, e2.visibility = `hidden`, document.body.appendChild(q);
  }
  return q.getBoundingClientRect();
}
function hn(e2, t2) {
  let n2 = mn();
  return { top: t2, left: e2, height: 0, width: 0, right: n2.width - e2, bottom: n2.height - t2 };
}
function gn(e2) {
  let t2 = e2.getBoundingClientRect(), n2 = mn();
  return { left: t2.left - n2.left, top: t2.top - n2.top, bottom: n2.height + n2.top - t2.bottom, right: n2.width + n2.left - t2.right, width: t2.width, height: t2.height };
}
function _n(e2) {
  return e2.nodeType === 9 ? null : e2.parentNode;
}
function vn(e2) {
  if (e2 === null) return null;
  let t2 = _n(e2);
  if (t2 === null) return null;
  if (t2.nodeType === 9) return document;
  if (t2.nodeType === 1) {
    let { overflow: e3, overflowX: n2, overflowY: r2 } = getComputedStyle(t2);
    if (/(auto|scroll|overlay)/.test(e3 + r2 + n2)) return t2;
  }
  return vn(t2);
}
var yn = H({ name: `Binder`, props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(e2) {
  var _a2;
  j(`VBinder`, (_a2 = de()) == null ? void 0 : _a2.proxy);
  let t2 = F(`VBinder`, null), n2 = L(null), r2 = (r3) => {
    n2.value = r3, t2 && e2.syncTargetWithParent && t2.setTargetRef(r3);
  }, i2 = [], a2 = () => {
    let e3 = n2.value;
    for (; e3 = vn(e3), e3 !== null; ) i2.push(e3);
    for (let e4 of i2) W(`scroll`, e4, u2, true);
  }, o2 = () => {
    for (let e3 of i2) G(`scroll`, e3, u2, true);
    i2 = [];
  }, s2 = /* @__PURE__ */ new Set(), c2 = (e3) => {
    s2.size === 0 && a2(), s2.has(e3) || s2.add(e3);
  }, l2 = (e3) => {
    s2.has(e3) && s2.delete(e3), s2.size === 0 && o2();
  }, u2 = () => {
    Nt(d2);
  }, d2 = () => {
    s2.forEach((e3) => e3());
  }, f2 = /* @__PURE__ */ new Set(), p2 = (e3) => {
    f2.size === 0 && W(`resize`, window, h2), f2.has(e3) || f2.add(e3);
  }, m2 = (e3) => {
    f2.has(e3) && f2.delete(e3), f2.size === 0 && G(`resize`, window, h2);
  }, h2 = () => {
    f2.forEach((e3) => e3());
  };
  return N(() => {
    G(`resize`, window, h2), o2();
  }), { targetRef: n2, setTargetRef: r2, addScrollListener: c2, removeScrollListener: l2, addResizeListener: p2, removeResizeListener: m2 };
}, render() {
  return dn(`binder`, this.$slots);
} }), bn = H({ name: `Target`, setup() {
  let { setTargetRef: e2, syncTarget: t2 } = F(`VBinder`);
  return { syncTarget: t2, setTargetDirective: { mounted: e2, updated: e2 } };
}, render() {
  let { syncTarget: e2, setTargetDirective: t2 } = this;
  return e2 ? he(pn(`follower`, this.$slots), [[t2]]) : pn(`follower`, this.$slots);
} }), xn = `@@mmoContext`, Sn = { mounted(e2, { value: t2 }) {
  e2[xn] = { handler: void 0 }, typeof t2 == `function` && (e2[xn].handler = t2, W(`mousemoveoutside`, e2, t2));
}, updated(e2, { value: t2 }) {
  let n2 = e2[xn];
  typeof t2 == `function` ? n2.handler ? n2.handler !== t2 && (G(`mousemoveoutside`, e2, n2.handler), n2.handler = t2, W(`mousemoveoutside`, e2, t2)) : (e2[xn].handler = t2, W(`mousemoveoutside`, e2, t2)) : n2.handler && (n2.handler = (G(`mousemoveoutside`, e2, n2.handler), void 0));
}, unmounted(e2) {
  let { handler: t2 } = e2[xn];
  t2 && G(`mousemoveoutside`, e2, t2), e2[xn].handler = void 0;
} }, Cn = `@@coContext`, wn = { mounted(e2, { value: t2, modifiers: n2 }) {
  e2[Cn] = { handler: void 0 }, typeof t2 == `function` && (e2[Cn].handler = t2, W(`clickoutside`, e2, t2, { capture: n2.capture }));
}, updated(e2, { value: t2, modifiers: n2 }) {
  let r2 = e2[Cn];
  typeof t2 == `function` ? r2.handler ? r2.handler !== t2 && (G(`clickoutside`, e2, r2.handler, { capture: n2.capture }), r2.handler = t2, W(`clickoutside`, e2, t2, { capture: n2.capture })) : (e2[Cn].handler = t2, W(`clickoutside`, e2, t2, { capture: n2.capture })) : r2.handler && (r2.handler = (G(`clickoutside`, e2, r2.handler, { capture: n2.capture }), void 0));
}, unmounted(e2, { modifiers: t2 }) {
  let { handler: n2 } = e2[Cn];
  n2 && G(`clickoutside`, e2, n2, { capture: t2.capture }), e2[Cn].handler = void 0;
} };
function Tn(e2, t2) {
  console.error(`[vdirs/${e2}]: ${t2}`);
}
var En = new class {
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
    n2.has(e2) ? n2.delete(e2) : t2 === void 0 && Tn(`z-index-manager/unregister-element`, `Element not found when unregistering.`), this.squashState();
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
}(), Dn = `@@ziContext`, On = { mounted(e2, t2) {
  let { value: n2 = {} } = t2, { zIndex: r2, enabled: i2 } = n2;
  e2[Dn] = { enabled: !!i2, initialized: false }, i2 && (En.ensureZIndex(e2, r2), e2[Dn].initialized = true);
}, updated(e2, t2) {
  let { value: n2 = {} } = t2, { zIndex: r2, enabled: i2 } = n2, a2 = e2[Dn].enabled;
  i2 && !a2 && (En.ensureZIndex(e2, r2), e2[Dn].initialized = true), e2[Dn].enabled = !!i2;
}, unmounted(e2, t2) {
  if (!e2[Dn].initialized) return;
  let { value: n2 = {} } = t2, { zIndex: r2 } = n2;
  En.unregister(e2, r2);
} };
function kn(e2, t2) {
  console.error(`[vueuc/${e2}]: ${t2}`);
}
var { c: An } = k();
const jn = `vueuc-style`;
function Mn(e2) {
  return typeof e2 == `string` ? document.querySelector(e2) : e2() || null;
}
var Nn = H({ name: `LazyTeleport`, props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(e2) {
  return { showTeleport: Wt(R(e2, `show`)), mergedTo: B(() => {
    let { to: t2 } = e2;
    return t2 ?? `body`;
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? dn(`lazy-teleport`, this.$slots) : M(be, { disabled: this.disabled, to: this.mergedTo }, dn(`lazy-teleport`, this.$slots)) : null;
} }), Pn = { top: `bottom`, bottom: `top`, left: `right`, right: `left` }, Fn = { start: `end`, center: `center`, end: `start` }, In = { top: `height`, bottom: `height`, left: `width`, right: `width` }, Ln = { "bottom-start": `top left`, bottom: `top center`, "bottom-end": `top right`, "top-start": `bottom left`, top: `bottom center`, "top-end": `bottom right`, "right-start": `top left`, right: `center left`, "right-end": `bottom left`, "left-start": `top right`, left: `center right`, "left-end": `bottom right` }, Rn = { "bottom-start": `bottom left`, bottom: `bottom center`, "bottom-end": `bottom right`, "top-start": `top left`, top: `top center`, "top-end": `top right`, "right-start": `top right`, right: `center right`, "right-end": `bottom right`, "left-start": `top left`, left: `center left`, "left-end": `bottom left` }, zn = { "bottom-start": `right`, "bottom-end": `left`, "top-start": `right`, "top-end": `left`, "right-start": `bottom`, "right-end": `top`, "left-start": `bottom`, "left-end": `top` }, Bn = { top: true, bottom: false, left: true, right: false }, Vn = { top: `end`, bottom: `start`, left: `end`, right: `start` };
function Hn(e2, t2, n2, r2, i2, a2) {
  if (!i2 || a2) return { placement: e2, top: 0, left: 0 };
  let [o2, s2] = e2.split(`-`), c2 = s2 ?? `center`, l2 = { top: 0, left: 0 }, u2 = (e3, i3, a3) => {
    let o3 = 0, s3 = 0, c3 = n2[e3] - t2[i3] - t2[e3];
    return c3 > 0 && r2 && (a3 ? s3 = Bn[i3] ? c3 : -c3 : o3 = Bn[i3] ? c3 : -c3), { left: o3, top: s3 };
  }, d2 = o2 === `left` || o2 === `right`;
  if (c2 !== `center`) {
    let r3 = zn[e2], i3 = Pn[r3], a3 = In[r3];
    if (n2[a3] > t2[a3]) {
      if (t2[r3] + t2[a3] < n2[a3]) {
        let e3 = (n2[a3] - t2[a3]) / 2;
        t2[r3] < e3 || t2[i3] < e3 ? t2[r3] < t2[i3] ? (c2 = Fn[s2], l2 = u2(a3, i3, d2)) : l2 = u2(a3, r3, d2) : c2 = `center`;
      }
    } else n2[a3] < t2[a3] && t2[i3] < 0 && t2[r3] > t2[i3] && (c2 = Fn[s2]);
  } else {
    let e3 = o2 === `bottom` || o2 === `top` ? `left` : `top`, r3 = Pn[e3], i3 = In[e3], a3 = (n2[i3] - t2[i3]) / 2;
    (t2[e3] < a3 || t2[r3] < a3) && (t2[e3] > t2[r3] ? (c2 = Vn[e3], l2 = u2(i3, e3, d2)) : (c2 = Vn[r3], l2 = u2(i3, r3, d2)));
  }
  let f2 = o2;
  return t2[o2] < n2[In[o2]] && t2[o2] < t2[Pn[o2]] && (f2 = Pn[o2]), { placement: c2 === `center` ? f2 : `${f2}-${c2}`, left: l2.left, top: l2.top };
}
function Un(e2, t2) {
  return t2 ? Rn[e2] : Ln[e2];
}
function Wn(e2, t2, n2, r2, i2, a2) {
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
var Gn = An([An(`.v-binder-follower-container`, { position: `absolute`, left: `0`, right: `0`, top: `0`, height: `0`, pointerEvents: `none`, zIndex: `auto` }), An(`.v-binder-follower-content`, { position: `absolute`, zIndex: `auto` }, [An(`> *`, { pointerEvents: `all` })])]), Kn = H({ name: `Follower`, inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: `bottom` }, syncTrigger: { type: Array, default: [`resize`, `scroll`] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(e2) {
  let t2 = F(`VBinder`), n2 = i(() => e2.enabled === void 0 ? e2.show : e2.enabled), o2 = L(null), s2 = L(null), c2 = () => {
    let { syncTrigger: n3 } = e2;
    n3.includes(`scroll`) && t2.addScrollListener(d2), n3.includes(`resize`) && t2.addResizeListener(d2);
  }, l2 = () => {
    t2.removeScrollListener(d2), t2.removeResizeListener(d2);
  };
  ie(() => {
    n2.value && (d2(), c2());
  });
  let u2 = a();
  Gn.mount({ id: `vueuc/binder`, head: true, anchorMetaName: jn, ssr: u2 }), N(() => {
    l2();
  }), Yt(() => {
    n2.value && d2();
  });
  let d2 = () => {
    if (!n2.value) return;
    let r2 = o2.value;
    if (r2 === null) return;
    let i2 = t2.targetRef, { x: a2, y: c3, overlap: l3 } = e2, u3 = a2 !== void 0 && c3 !== void 0 ? hn(a2, c3) : gn(i2);
    r2.style.setProperty(`--v-target-width`, `${Math.round(u3.width)}px`), r2.style.setProperty(`--v-target-height`, `${Math.round(u3.height)}px`);
    let { width: d3, minWidth: f3, placement: p3, internalShift: m2, flip: h2 } = e2;
    r2.setAttribute(`v-placement`, p3), l3 ? r2.setAttribute(`v-overlap`, ``) : r2.removeAttribute(`v-overlap`);
    let { style: g2 } = r2;
    d3 === `target` ? g2.width = `${u3.width}px` : d3 === void 0 ? g2.width = `` : g2.width = d3, f3 === `target` ? g2.minWidth = `${u3.width}px` : f3 === void 0 ? g2.minWidth = `` : g2.minWidth = f3;
    let _2 = gn(r2), v2 = gn(s2.value), { left: y2, top: b2, placement: x2 } = Hn(p3, u3, _2, m2, h2, l3), S2 = Un(x2, l3), { left: C2, top: w2, transform: T2 } = Wn(x2, v2, u3, b2, y2, l3);
    r2.setAttribute(`v-placement`, x2), r2.style.setProperty(`--v-offset-left`, `${Math.round(y2)}px`), r2.style.setProperty(`--v-offset-top`, `${Math.round(b2)}px`), r2.style.transform = `translateX(${C2}) translateY(${w2}) ${T2}`, r2.style.setProperty(`--v-transform-origin`, S2), r2.style.transformOrigin = S2;
  };
  P(n2, (e3) => {
    e3 ? (c2(), f2()) : l2();
  });
  let f2 = () => {
    ae().then(d2).catch((e3) => console.error(e3));
  };
  [`placement`, `x`, `y`, `internalShift`, `flip`, `width`, `overlap`, `minWidth`].forEach((t3) => {
    P(R(e2, t3), d2);
  }), [`teleportDisabled`].forEach((t3) => {
    P(R(e2, t3), f2);
  }), P(R(e2, `syncTrigger`), (e3) => {
    e3.includes(`resize`) ? t2.addResizeListener(d2) : t2.removeResizeListener(d2), e3.includes(`scroll`) ? t2.addScrollListener(d2) : t2.removeScrollListener(d2);
  });
  let p2 = r();
  return { VBinder: t2, mergedEnabled: n2, offsetContainerRef: s2, followerRef: o2, mergedTo: i(() => {
    let { to: t3 } = e2;
    if (t3 !== void 0) return t3;
    p2.value;
  }), syncPosition: d2 };
}, render() {
  return M(Nn, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var _a2;
    var e2;
    let t2 = M(`div`, { class: [`v-binder-follower-container`, this.containerClass], ref: `offsetContainerRef` }, [M(`div`, { class: `v-binder-follower-content`, ref: `followerRef` }, (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2))]);
    return this.zindexable ? he(t2, [[On, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : t2;
  } });
} }), J = [], qn = function() {
  return J.some(function(e2) {
    return e2.activeTargets.length > 0;
  });
}, Jn = function() {
  return J.some(function(e2) {
    return e2.skippedTargets.length > 0;
  });
}, Yn = `ResizeObserver loop completed with undelivered notifications.`, Xn = function() {
  var e2;
  typeof ErrorEvent == `function` ? e2 = new ErrorEvent(`error`, { message: Yn }) : (e2 = document.createEvent(`Event`), e2.initEvent(`error`, false, false), e2.message = Yn), window.dispatchEvent(e2);
}, Zn;
(function(e2) {
  e2.BORDER_BOX = `border-box`, e2.CONTENT_BOX = `content-box`, e2.DEVICE_PIXEL_CONTENT_BOX = `device-pixel-content-box`;
})(Zn || (Zn = {}));
var Y = function(e2) {
  return Object.freeze(e2);
}, Qn = /* @__PURE__ */ (function() {
  function e2(e3, t2) {
    this.inlineSize = e3, this.blockSize = t2, Y(this);
  }
  return e2;
})(), $n = (function() {
  function e2(e3, t2, n2, r2) {
    return this.x = e3, this.y = t2, this.width = n2, this.height = r2, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Y(this);
  }
  return e2.prototype.toJSON = function() {
    var e3 = this;
    return { x: e3.x, y: e3.y, top: e3.top, right: e3.right, bottom: e3.bottom, left: e3.left, width: e3.width, height: e3.height };
  }, e2.fromRect = function(t2) {
    return new e2(t2.x, t2.y, t2.width, t2.height);
  }, e2;
})(), er = function(e2) {
  return e2 instanceof SVGElement && `getBBox` in e2;
}, tr = function(e2) {
  if (er(e2)) {
    var t2 = e2.getBBox(), n2 = t2.width, r2 = t2.height;
    return !n2 && !r2;
  }
  var i2 = e2, a2 = i2.offsetWidth, o2 = i2.offsetHeight;
  return !(a2 || o2 || e2.getClientRects().length);
}, nr = function(e2) {
  var _a2;
  if (e2 instanceof Element) return true;
  var t2 = (_a2 = e2 == null ? void 0 : e2.ownerDocument) == null ? void 0 : _a2.defaultView;
  return !!(t2 && e2 instanceof t2.Element);
}, rr = function(e2) {
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
}, ir = typeof window < `u` ? window : {}, ar = /* @__PURE__ */ new WeakMap(), or = /auto|scroll/, sr = /^tb|vertical/, cr = /msie|trident/i.test(ir.navigator && ir.navigator.userAgent), X = function(e2) {
  return parseFloat(e2 || `0`);
}, lr = function(e2, t2, n2) {
  return e2 === void 0 && (e2 = 0), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = false), new Qn((n2 ? t2 : e2) || 0, (n2 ? e2 : t2) || 0);
}, ur = Y({ devicePixelContentBoxSize: lr(), borderBoxSize: lr(), contentBoxSize: lr(), contentRect: new $n(0, 0, 0, 0) }), dr = function(e2, t2) {
  if (t2 === void 0 && (t2 = false), ar.has(e2) && !t2) return ar.get(e2);
  if (tr(e2)) return ar.set(e2, ur), ur;
  var n2 = getComputedStyle(e2), r2 = er(e2) && e2.ownerSVGElement && e2.getBBox(), i2 = !cr && n2.boxSizing === `border-box`, a2 = sr.test(n2.writingMode || ``), o2 = !r2 && or.test(n2.overflowY || ``), s2 = !r2 && or.test(n2.overflowX || ``), c2 = r2 ? 0 : X(n2.paddingTop), l2 = r2 ? 0 : X(n2.paddingRight), u2 = r2 ? 0 : X(n2.paddingBottom), d2 = r2 ? 0 : X(n2.paddingLeft), f2 = r2 ? 0 : X(n2.borderTopWidth), p2 = r2 ? 0 : X(n2.borderRightWidth), m2 = r2 ? 0 : X(n2.borderBottomWidth), h2 = r2 ? 0 : X(n2.borderLeftWidth), g2 = d2 + l2, _2 = c2 + u2, v2 = h2 + p2, y2 = f2 + m2, b2 = s2 ? e2.offsetHeight - y2 - e2.clientHeight : 0, x2 = o2 ? e2.offsetWidth - v2 - e2.clientWidth : 0, S2 = i2 ? g2 + v2 : 0, C2 = i2 ? _2 + y2 : 0, w2 = r2 ? r2.width : X(n2.width) - S2 - x2, T2 = r2 ? r2.height : X(n2.height) - C2 - b2, E2 = w2 + g2 + x2 + v2, D2 = T2 + _2 + b2 + y2, O2 = Y({ devicePixelContentBoxSize: lr(Math.round(w2 * devicePixelRatio), Math.round(T2 * devicePixelRatio), a2), borderBoxSize: lr(E2, D2, a2), contentBoxSize: lr(w2, T2, a2), contentRect: new $n(d2, c2, w2, T2) });
  return ar.set(e2, O2), O2;
}, fr = function(e2, t2, n2) {
  var r2 = dr(e2, n2), i2 = r2.borderBoxSize, a2 = r2.contentBoxSize, o2 = r2.devicePixelContentBoxSize;
  switch (t2) {
    case Zn.DEVICE_PIXEL_CONTENT_BOX:
      return o2;
    case Zn.BORDER_BOX:
      return i2;
    default:
      return a2;
  }
}, pr = /* @__PURE__ */ (function() {
  function e2(e3) {
    var t2 = dr(e3);
    this.target = e3, this.contentRect = t2.contentRect, this.borderBoxSize = Y([t2.borderBoxSize]), this.contentBoxSize = Y([t2.contentBoxSize]), this.devicePixelContentBoxSize = Y([t2.devicePixelContentBoxSize]);
  }
  return e2;
})(), mr = function(e2) {
  if (tr(e2)) return 1 / 0;
  for (var t2 = 0, n2 = e2.parentNode; n2; ) t2 += 1, n2 = n2.parentNode;
  return t2;
}, hr = function() {
  var e2 = 1 / 0, t2 = [];
  J.forEach(function(n3) {
    if (n3.activeTargets.length !== 0) {
      var r3 = [];
      n3.activeTargets.forEach(function(t3) {
        var n4 = new pr(t3.target), i3 = mr(t3.target);
        r3.push(n4), t3.lastReportedSize = fr(t3.target, t3.observedBox), i3 < e2 && (e2 = i3);
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
}, gr = function(e2) {
  J.forEach(function(t2) {
    t2.activeTargets.splice(0, t2.activeTargets.length), t2.skippedTargets.splice(0, t2.skippedTargets.length), t2.observationTargets.forEach(function(n2) {
      n2.isActive() && (mr(n2.target) > e2 ? t2.activeTargets.push(n2) : t2.skippedTargets.push(n2));
    });
  });
}, _r = function() {
  var e2 = 0;
  for (gr(e2); qn(); ) e2 = hr(), gr(e2);
  return Jn() && Xn(), e2 > 0;
}, vr, yr = [], br = function() {
  return yr.splice(0).forEach(function(e2) {
    return e2();
  });
}, xr = function(e2) {
  if (!vr) {
    var t2 = 0, n2 = document.createTextNode(``);
    new MutationObserver(function() {
      return br();
    }).observe(n2, { characterData: true }), vr = function() {
      n2.textContent = `${t2 ? t2-- : t2++}`;
    };
  }
  yr.push(e2), vr();
}, Sr = function(e2) {
  xr(function() {
    requestAnimationFrame(e2);
  });
}, Cr = 0, wr = function() {
  return !!Cr;
}, Tr = 250, Er = { attributes: true, characterData: true, childList: true, subtree: true }, Dr = [`resize`, `load`, `transitionend`, `animationend`, `animationstart`, `animationiteration`, `keyup`, `keydown`, `mouseup`, `mousedown`, `mouseover`, `mouseout`, `blur`, `focus`], Or = function(e2) {
  return e2 === void 0 && (e2 = 0), Date.now() + e2;
}, kr = false, Ar = new ((function() {
  function e2() {
    var e3 = this;
    this.stopped = true, this.listener = function() {
      return e3.schedule();
    };
  }
  return e2.prototype.run = function(e3) {
    var t2 = this;
    if (e3 === void 0 && (e3 = Tr), !kr) {
      kr = true;
      var n2 = Or(e3);
      Sr(function() {
        var r2 = false;
        try {
          r2 = _r();
        } finally {
          if (kr = false, e3 = n2 - Or(), !wr()) return;
          r2 ? t2.run(1e3) : e3 > 0 ? t2.run(e3) : t2.start();
        }
      });
    }
  }, e2.prototype.schedule = function() {
    this.stop(), this.run();
  }, e2.prototype.observe = function() {
    var e3 = this, t2 = function() {
      return e3.observer && e3.observer.observe(document.body, Er);
    };
    document.body ? t2() : ir.addEventListener(`DOMContentLoaded`, t2);
  }, e2.prototype.start = function() {
    var e3 = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), Dr.forEach(function(t2) {
      return ir.addEventListener(t2, e3.listener, true);
    }));
  }, e2.prototype.stop = function() {
    var e3 = this;
    this.stopped || (this.stopped = (this.observer && this.observer.disconnect(), Dr.forEach(function(t2) {
      return ir.removeEventListener(t2, e3.listener, true);
    }), true));
  }, e2;
})())(), jr = function(e2) {
  !Cr && e2 > 0 && Ar.start(), Cr += e2, !Cr && Ar.stop();
}, Mr = function(e2) {
  return !er(e2) && !rr(e2) && getComputedStyle(e2).display === `inline`;
}, Nr = (function() {
  function e2(e3, t2) {
    this.target = e3, this.observedBox = t2 || Zn.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e2.prototype.isActive = function() {
    var e3 = fr(this.target, this.observedBox, true);
    return Mr(this.target) && (this.lastReportedSize = e3), this.lastReportedSize.inlineSize !== e3.inlineSize || this.lastReportedSize.blockSize !== e3.blockSize;
  }, e2;
})(), Pr = /* @__PURE__ */ (function() {
  function e2(e3, t2) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e3, this.callback = t2;
  }
  return e2;
})(), Fr = /* @__PURE__ */ new WeakMap(), Ir = function(e2, t2) {
  for (var n2 = 0; n2 < e2.length; n2 += 1) if (e2[n2].target === t2) return n2;
  return -1;
}, Lr = (function() {
  function e2() {
  }
  return e2.connect = function(e3, t2) {
    var n2 = new Pr(e3, t2);
    Fr.set(e3, n2);
  }, e2.observe = function(e3, t2, n2) {
    var r2 = Fr.get(e3), i2 = r2.observationTargets.length === 0;
    Ir(r2.observationTargets, t2) < 0 && (i2 && J.push(r2), r2.observationTargets.push(new Nr(t2, n2 && n2.box)), jr(1), Ar.schedule());
  }, e2.unobserve = function(e3, t2) {
    var n2 = Fr.get(e3), r2 = Ir(n2.observationTargets, t2), i2 = n2.observationTargets.length === 1;
    r2 >= 0 && (i2 && J.splice(J.indexOf(n2), 1), n2.observationTargets.splice(r2, 1), jr(-1));
  }, e2.disconnect = function(e3) {
    var t2 = this, n2 = Fr.get(e3);
    n2.observationTargets.slice().forEach(function(n3) {
      return t2.unobserve(e3, n3.target);
    }), n2.activeTargets.splice(0, n2.activeTargets.length);
  }, e2;
})(), Rr = (function() {
  function e2(e3) {
    if (arguments.length === 0) throw TypeError(`Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.`);
    if (typeof e3 != `function`) throw TypeError(`Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.`);
    Lr.connect(this, e3);
  }
  return e2.prototype.observe = function(e3, t2) {
    if (arguments.length === 0) throw TypeError(`Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.`);
    if (!nr(e3)) throw TypeError(`Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element`);
    Lr.observe(this, e3, t2);
  }, e2.prototype.unobserve = function(e3) {
    if (arguments.length === 0) throw TypeError(`Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.`);
    if (!nr(e3)) throw TypeError(`Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element`);
    Lr.unobserve(this, e3);
  }, e2.prototype.disconnect = function() {
    Lr.disconnect(this);
  }, e2.toString = function() {
    return `function ResizeObserver () { [polyfill code] }`;
  }, e2;
})(), zr = new class {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < `u` && window.ResizeObserver || Rr)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
}(), Br = H({ name: `ResizeObserver`, props: { onResize: Function }, setup(e2) {
  let t2 = false, n2 = de().proxy;
  function r2(t3) {
    let { onResize: n3 } = e2;
    n3 !== void 0 && n3(t3);
  }
  ie(() => {
    let e3 = n2.$el;
    if (e3 === void 0) {
      kn(`resize-observer`, `$el does not exist.`);
      return;
    }
    if (e3.nextElementSibling !== e3.nextSibling && e3.nodeType === 3 && e3.nodeValue !== ``) {
      kn(`resize-observer`, `$el can not be observed (it may be a text node).`);
      return;
    }
    e3.nextElementSibling !== null && (zr.registerHandler(e3.nextElementSibling, r2), t2 = true);
  }), N(() => {
    t2 && zr.unregisterHandler(n2.$el.nextElementSibling);
  });
}, render() {
  return te(this.$slots, `default`);
} });
function Vr(e2) {
  return e2 instanceof HTMLElement;
}
function Hr(e2) {
  for (let t2 = 0; t2 < e2.childNodes.length; t2++) {
    let n2 = e2.childNodes[t2];
    if (Vr(n2) && (Wr(n2) || Hr(n2))) return true;
  }
  return false;
}
function Ur(e2) {
  for (let t2 = e2.childNodes.length - 1; t2 >= 0; t2--) {
    let n2 = e2.childNodes[t2];
    if (Vr(n2) && (Wr(n2) || Ur(n2))) return true;
  }
  return false;
}
function Wr(e2) {
  if (!Gr(e2)) return false;
  try {
    e2.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === e2;
}
function Gr(e2) {
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
var Kr = [];
const qr = H({ name: `FocusTrap`, props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(e2) {
  let t2 = Ft(), n2 = L(null), r2 = L(null), i2 = false, a2 = false, o2 = typeof document > `u` ? null : document.activeElement;
  function s2() {
    return Kr[Kr.length - 1] === t2;
  }
  function c2(t3) {
    var n3;
    t3.code === `Escape` && s2() && ((n3 = e2.onEsc) == null || n3.call(e2, t3));
  }
  ie(() => {
    P(() => e2.active, (e3) => {
      e3 ? (d2(), W(`keydown`, document, c2)) : (G(`keydown`, document, c2), i2 && f2());
    }, { immediate: true });
  }), N(() => {
    G(`keydown`, document, c2), i2 && f2();
  });
  function l2(e3) {
    if (!a2 && s2()) {
      let t3 = u2();
      if (t3 === null || t3.contains(Pt(e3))) return;
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
      if (Kr.push(t2), e2.autoFocus) {
        let { initialFocusTo: t3 } = e2;
        t3 === void 0 ? p2(`first`) : (n3 = Mn(t3)) == null || n3.focus({ preventScroll: true });
      }
      i2 = true, document.addEventListener(`focus`, l2, true);
    }
  }
  function f2() {
    var n3;
    if (e2.disabled || (document.removeEventListener(`focus`, l2, true), Kr = Kr.filter((e3) => e3 !== t2), s2())) return;
    let { finalFocusTo: r3 } = e2;
    r3 === void 0 ? e2.returnFocusOnDeactivated && o2 instanceof HTMLElement && (a2 = true, o2.focus({ preventScroll: true }), a2 = false) : (n3 = Mn(r3)) == null || n3.focus({ preventScroll: true });
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
        let r3 = t3 === `first` ? Hr(n3) : Ur(n3);
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
  return M(z, null, [M(`div`, { "aria-hidden": `true`, tabindex: t2 ? `0` : `-1`, ref: `focusableStartRef`, style: n2, onFocus: this.handleStartFocus }), e2(), M(`div`, { "aria-hidden": `true`, style: n2, ref: `focusableEndRef`, tabindex: t2 ? `0` : `-1`, onFocus: this.handleEndFocus })]);
} });
var Jr = /^(\d|\.)+$/, Yr = /(\d|\.)+/;
function Xr(e2, { c: t2 = 1, offset: n2 = 0, attachPx: r2 = true } = {}) {
  if (typeof e2 == `number`) {
    let r3 = (e2 + n2) * t2;
    return r3 === 0 ? `0` : `${r3}px`;
  } else if (typeof e2 == `string`) if (Jr.test(e2)) {
    let i2 = (Number(e2) + n2) * t2;
    return r2 ? i2 === 0 ? `0` : `${i2}px` : `${i2}`;
  } else {
    let r3 = Yr.exec(e2);
    return r3 ? e2.replace(Yr, String((Number(r3[0]) + n2) * t2)) : e2;
  }
  return e2;
}
function Zr(e2) {
  let { left: t2, right: n2, top: r2, bottom: i2 } = w(e2);
  return `${r2} ${t2} ${i2} ${n2}`;
}
var Qr;
function $r() {
  return Qr === void 0 && (Qr = navigator.userAgent.includes(`Node.js`) || navigator.userAgent.includes(`jsdom`)), Qr;
}
function ei(e2, t2 = true, n2 = []) {
  return e2.forEach((e3) => {
    if (e3 !== null) {
      if (typeof e3 != `object`) {
        (typeof e3 == `string` || typeof e3 == `number`) && n2.push(ue(String(e3)));
        return;
      }
      if (Array.isArray(e3)) {
        ei(e3, t2, n2);
        return;
      }
      if (e3.type === z) {
        if (e3.children === null) return;
        Array.isArray(e3.children) && ei(e3.children, t2, n2);
      } else {
        if (e3.type === we && t2) return;
        n2.push(e3);
      }
    }
  }), n2;
}
function ti(e2, t2 = `default`, n2 = void 0) {
  let r2 = e2[t2];
  if (!r2) return b(`getFirstSlotVNode`, `slot[${t2}] is empty`), null;
  let i2 = ei(r2(n2));
  return i2.length === 1 ? i2[0] : (b(`getFirstSlotVNode`, `slot[${t2}] should have exactly one child`), null);
}
function ni(e2, t2, n2) {
  if (!t2) return null;
  let r2 = ei(t2(n2));
  return r2.length === 1 ? r2[0] : (b(`getFirstSlotVNode`, `slot[${e2}] should have exactly one child`), null);
}
function ri(e2, t2 = [], n2) {
  let r2 = {};
  return t2.forEach((t3) => {
    r2[t3] = e2[t3];
  }), Object.assign(r2, n2);
}
const ii = H({ render() {
  var _a2;
  var e2;
  return (_a2 = (e2 = this.$slots).default) == null ? void 0 : _a2.call(e2);
} });
var { cubicBezierEaseInOut: ai } = x;
function oi({ name: e2 = `fade-in`, enterDuration: t2 = `0.2s`, leaveDuration: n2 = `0.2s`, enterCubicBezier: r2 = ai, leaveCubicBezier: i2 = ai } = {}) {
  return [E(`&.${e2}-transition-enter-active`, { transition: `all ${t2} ${r2}!important` }), E(`&.${e2}-transition-leave-active`, { transition: `all ${n2} ${i2}!important` }), E(`&.${e2}-transition-enter-from, &.${e2}-transition-leave-to`, { opacity: 0 }), E(`&.${e2}-transition-leave-from, &.${e2}-transition-enter-to`, { opacity: 1 })];
}
const si = { railInsetHorizontalBottom: `auto 2px 4px 2px`, railInsetHorizontalTop: `4px 2px auto 2px`, railInsetVerticalRight: `2px 4px 2px auto`, railInsetVerticalLeft: `2px auto 2px 4px`, railColor: `transparent` };
function ci(e2) {
  let { scrollbarColor: t2, scrollbarColorHover: n2, scrollbarHeight: r2, scrollbarWidth: i2, scrollbarBorderRadius: a2 } = e2;
  return Object.assign(Object.assign({}, si), { height: r2, width: i2, borderRadius: a2, color: t2, colorHover: n2 });
}
var li = { name: `Scrollbar`, common: C, self: ci }, ui = m(`scrollbar`, `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [E(`>`, [m(`scrollbar-container`, `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [E(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`, `
 width: 0;
 height: 0;
 display: none;
 `), E(`>`, [m(`scrollbar-content`, `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), E(`>, +`, [m(`scrollbar-rail`, `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [S(`horizontal`, `
 height: var(--n-scrollbar-height);
 `, [E(`>`, [T(`scrollbar`, `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), S(`horizontal--top`, `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), S(`horizontal--bottom`, `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), S(`vertical`, `
 width: var(--n-scrollbar-width);
 `, [E(`>`, [T(`scrollbar`, `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), S(`vertical--left`, `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), S(`vertical--right`, `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), S(`disabled`, [E(`>`, [T(`scrollbar`, `pointer-events: none;`)])]), E(`>`, [T(`scrollbar`, `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [oi(), E(`&:hover`, `background-color: var(--n-scrollbar-color-hover);`)])])])])]), di = H({ name: `Scrollbar`, props: Object.assign(Object.assign({}, h.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: `hover` }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: `right` }, xPlacement: { type: String, default: `bottom` } }), inheritAttrs: false, setup(e2) {
  let { mergedClsPrefixRef: t2, inlineThemeDisabled: n2, mergedRtlRef: r2 } = O(e2), i2 = _(`Scrollbar`, r2, t2), a2 = L(null), o2 = L(null), s2 = L(null), c2 = L(null), l2 = L(null), u2 = L(null), d2 = L(null), p2 = L(null), m2 = L(null), g2 = L(null), v2 = L(null), b2 = L(0), x2 = L(0), S2 = L(false), C2 = L(false), T2 = false, E2 = false, D2, k2, A2 = 0, j2 = 0, M2 = 0, ee2 = 0, te2 = $t(), ne2 = h(`Scrollbar`, `-scrollbar`, ui, li, e2, t2), re2 = B(() => {
    let { value: e3 } = p2, { value: t3 } = u2, { value: n3 } = g2;
    return e3 === null || t3 === null || n3 === null ? 0 : Math.min(e3, n3 * e3 / t3 + y(ne2.value.self.width) * 1.5);
  }), P2 = B(() => `${re2.value}px`), ae2 = B(() => {
    let { value: e3 } = m2, { value: t3 } = d2, { value: n3 } = v2;
    return e3 === null || t3 === null || n3 === null ? 0 : n3 * e3 / t3 + y(ne2.value.self.height) * 1.5;
  }), oe2 = B(() => `${ae2.value}px`), F2 = B(() => {
    let { value: e3 } = p2, { value: t3 } = b2, { value: n3 } = u2, { value: r3 } = g2;
    if (e3 === null || n3 === null || r3 === null) return 0;
    {
      let i3 = n3 - e3;
      return i3 ? t3 / i3 * (r3 - re2.value) : 0;
    }
  }), se2 = B(() => `${F2.value}px`), ce2 = B(() => {
    let { value: e3 } = m2, { value: t3 } = x2, { value: n3 } = d2, { value: r3 } = v2;
    if (e3 === null || n3 === null || r3 === null) return 0;
    {
      let i3 = n3 - e3;
      return i3 ? t3 / i3 * (r3 - ae2.value) : 0;
    }
  }), le2 = B(() => `${ce2.value}px`), ue2 = B(() => {
    let { value: e3 } = p2, { value: t3 } = u2;
    return e3 !== null && t3 !== null && t3 > e3;
  }), de2 = B(() => {
    let { value: e3 } = m2, { value: t3 } = d2;
    return e3 !== null && t3 !== null && t3 > e3;
  }), fe2 = B(() => {
    let { trigger: t3 } = e2;
    return t3 === `none` || S2.value;
  }), pe2 = B(() => {
    let { trigger: t3 } = e2;
    return t3 === `none` || C2.value;
  }), I2 = B(() => {
    let { container: t3 } = e2;
    return t3 ? t3() : o2.value;
  }), he2 = B(() => {
    let { content: t3 } = e2;
    return t3 ? t3() : s2.value;
  }), R2 = (t3, n3) => {
    if (!e2.scrollable) return;
    if (typeof t3 == `number`) {
      V2(t3, n3 ?? 0, 0, false, `auto`);
      return;
    }
    let { left: r3, top: i3, index: a3, elSize: o3, position: s3, behavior: c3, el: l3, debounce: u3 = true } = t3;
    (r3 !== void 0 || i3 !== void 0) && V2(r3 ?? 0, i3 ?? 0, 0, false, c3), l3 === void 0 ? a3 !== void 0 && o3 !== void 0 ? V2(0, a3 * o3, o3, u3, c3) : s3 === `bottom` ? V2(0, 2 ** 53 - 1, 0, false, c3) : s3 === `top` && V2(0, 0, 0, false, c3) : V2(0, l3.offsetTop, l3.offsetHeight, u3, c3);
  }, z2 = un(() => {
    e2.container || R2({ top: b2.value, left: x2.value });
  }), ge2 = () => {
    z2.isDeactivated || U2();
  }, _e2 = (t3) => {
    if (z2.isDeactivated) return;
    let { onResize: n3 } = e2;
    n3 && n3(t3), U2();
  }, ve2 = (t3, n3) => {
    if (!e2.scrollable) return;
    let { value: r3 } = I2;
    r3 && (typeof t3 == `object` ? r3.scrollBy(t3) : r3.scrollBy(t3, n3 || 0));
  };
  function V2(e3, t3, n3, r3, i3) {
    let { value: a3 } = I2;
    if (a3) {
      if (r3) {
        let { scrollTop: r4, offsetHeight: o3 } = a3;
        if (t3 > r4) {
          t3 + n3 <= r4 + o3 || a3.scrollTo({ left: e3, top: t3 + n3 - o3, behavior: i3 });
          return;
        }
      }
      a3.scrollTo({ left: e3, top: t3, behavior: i3 });
    }
  }
  function ye2() {
    we2(), H2(), U2();
  }
  function be2() {
    xe2();
  }
  function xe2() {
    Se2(), Ce2();
  }
  function Se2() {
    k2 !== void 0 && window.clearTimeout(k2), k2 = window.setTimeout(() => {
      C2.value = false;
    }, e2.duration);
  }
  function Ce2() {
    D2 !== void 0 && window.clearTimeout(D2), D2 = window.setTimeout(() => {
      S2.value = false;
    }, e2.duration);
  }
  function we2() {
    D2 !== void 0 && window.clearTimeout(D2), S2.value = true;
  }
  function H2() {
    k2 !== void 0 && window.clearTimeout(k2), C2.value = true;
  }
  function Te2(t3) {
    let { onScroll: n3 } = e2;
    n3 && n3(t3), Ee2();
  }
  function Ee2() {
    let { value: e3 } = I2;
    e3 && (b2.value = e3.scrollTop, x2.value = e3.scrollLeft * ((i2 == null ? void 0 : i2.value) ? -1 : 1));
  }
  function De2() {
    let { value: e3 } = he2;
    e3 && (u2.value = e3.offsetHeight, d2.value = e3.offsetWidth);
    let { value: t3 } = I2;
    t3 && (p2.value = t3.offsetHeight, m2.value = t3.offsetWidth);
    let { value: n3 } = l2, { value: r3 } = c2;
    n3 && (v2.value = n3.offsetWidth), r3 && (g2.value = r3.offsetHeight);
  }
  function Oe2() {
    let { value: e3 } = I2;
    e3 && (b2.value = e3.scrollTop, x2.value = e3.scrollLeft * ((i2 == null ? void 0 : i2.value) ? -1 : 1), p2.value = e3.offsetHeight, m2.value = e3.offsetWidth, u2.value = e3.scrollHeight, d2.value = e3.scrollWidth);
    let { value: t3 } = l2, { value: n3 } = c2;
    t3 && (v2.value = t3.offsetWidth), n3 && (g2.value = n3.offsetHeight);
  }
  function U2() {
    e2.scrollable && (e2.useUnifiedContainer ? Oe2() : (De2(), Ee2()));
  }
  function ke2(e3) {
    var _a2;
    return !((_a2 = a2.value) == null ? void 0 : _a2.contains(Pt(e3)));
  }
  function Ae2(e3) {
    e3.preventDefault(), e3.stopPropagation(), E2 = true, W(`mousemove`, window, je2, true), W(`mouseup`, window, Me2, true), j2 = x2.value, M2 = (i2 == null ? void 0 : i2.value) ? window.innerWidth - e3.clientX : e3.clientX;
  }
  function je2(t3) {
    if (!E2) return;
    D2 !== void 0 && window.clearTimeout(D2), k2 !== void 0 && window.clearTimeout(k2);
    let { value: n3 } = m2, { value: r3 } = d2, { value: a3 } = ae2;
    if (n3 === null || r3 === null) return;
    let o3 = ((i2 == null ? void 0 : i2.value) ? window.innerWidth - t3.clientX - M2 : t3.clientX - M2) * (r3 - n3) / (n3 - a3), s3 = r3 - n3, c3 = j2 + o3;
    c3 = Math.min(s3, c3), c3 = Math.max(c3, 0);
    let { value: l3 } = I2;
    if (l3) {
      l3.scrollLeft = c3 * ((i2 == null ? void 0 : i2.value) ? -1 : 1);
      let { internalOnUpdateScrollLeft: t4 } = e2;
      t4 && t4(c3);
    }
  }
  function Me2(e3) {
    e3.preventDefault(), e3.stopPropagation(), G(`mousemove`, window, je2, true), G(`mouseup`, window, Me2, true), E2 = false, U2(), ke2(e3) && xe2();
  }
  function Ne2(e3) {
    e3.preventDefault(), e3.stopPropagation(), T2 = true, W(`mousemove`, window, Pe2, true), W(`mouseup`, window, Fe2, true), A2 = b2.value, ee2 = e3.clientY;
  }
  function Pe2(e3) {
    if (!T2) return;
    D2 !== void 0 && window.clearTimeout(D2), k2 !== void 0 && window.clearTimeout(k2);
    let { value: t3 } = p2, { value: n3 } = u2, { value: r3 } = re2;
    if (t3 === null || n3 === null) return;
    let i3 = (e3.clientY - ee2) * (n3 - t3) / (t3 - r3), a3 = n3 - t3, o3 = A2 + i3;
    o3 = Math.min(a3, o3), o3 = Math.max(o3, 0);
    let { value: s3 } = I2;
    s3 && (s3.scrollTop = o3);
  }
  function Fe2(e3) {
    e3.preventDefault(), e3.stopPropagation(), G(`mousemove`, window, Pe2, true), G(`mouseup`, window, Fe2, true), T2 = false, U2(), ke2(e3) && xe2();
  }
  me(() => {
    let { value: e3 } = de2, { value: n3 } = ue2, { value: r3 } = t2, { value: i3 } = l2, { value: a3 } = c2;
    i3 && (e3 ? i3.classList.remove(`${r3}-scrollbar-rail--disabled`) : i3.classList.add(`${r3}-scrollbar-rail--disabled`)), a3 && (n3 ? a3.classList.remove(`${r3}-scrollbar-rail--disabled`) : a3.classList.add(`${r3}-scrollbar-rail--disabled`));
  }), ie(() => {
    e2.container || U2();
  }), N(() => {
    D2 !== void 0 && window.clearTimeout(D2), k2 !== void 0 && window.clearTimeout(k2), G(`mousemove`, window, Pe2, true), G(`mouseup`, window, Fe2, true);
  });
  let Ie2 = B(() => {
    let { common: { cubicBezierEaseInOut: e3 }, self: { color: t3, colorHover: n3, height: r3, width: a3, borderRadius: o3, railInsetHorizontalTop: s3, railInsetHorizontalBottom: c3, railInsetVerticalRight: l3, railInsetVerticalLeft: u3, railColor: d3 } } = ne2.value, { top: f2, right: p3, bottom: m3, left: h2 } = w(s3), { top: g3, right: _2, bottom: v3, left: y2 } = w(c3), { top: b3, right: x3, bottom: S3, left: C3 } = w((i2 == null ? void 0 : i2.value) ? Zr(l3) : l3), { top: T3, right: E3, bottom: D3, left: O2 } = w((i2 == null ? void 0 : i2.value) ? Zr(u3) : u3);
    return { "--n-scrollbar-bezier": e3, "--n-scrollbar-color": t3, "--n-scrollbar-color-hover": n3, "--n-scrollbar-border-radius": o3, "--n-scrollbar-width": a3, "--n-scrollbar-height": r3, "--n-scrollbar-rail-top-horizontal-top": f2, "--n-scrollbar-rail-right-horizontal-top": p3, "--n-scrollbar-rail-bottom-horizontal-top": m3, "--n-scrollbar-rail-left-horizontal-top": h2, "--n-scrollbar-rail-top-horizontal-bottom": g3, "--n-scrollbar-rail-right-horizontal-bottom": _2, "--n-scrollbar-rail-bottom-horizontal-bottom": v3, "--n-scrollbar-rail-left-horizontal-bottom": y2, "--n-scrollbar-rail-top-vertical-right": b3, "--n-scrollbar-rail-right-vertical-right": x3, "--n-scrollbar-rail-bottom-vertical-right": S3, "--n-scrollbar-rail-left-vertical-right": C3, "--n-scrollbar-rail-top-vertical-left": T3, "--n-scrollbar-rail-right-vertical-left": E3, "--n-scrollbar-rail-bottom-vertical-left": D3, "--n-scrollbar-rail-left-vertical-left": O2, "--n-scrollbar-rail-color": d3 };
  }), Le2 = n2 ? f(`scrollbar`, void 0, Ie2, e2) : void 0, Re2 = { scrollTo: R2, scrollBy: ve2, sync: U2, syncUnifiedContainer: Oe2, handleMouseEnterWrapper: ye2, handleMouseLeaveWrapper: be2 };
  return Object.assign(Object.assign({}, Re2), { mergedClsPrefix: t2, rtlEnabled: i2, containerScrollTop: b2, wrapperRef: a2, containerRef: o2, contentRef: s2, yRailRef: c2, xRailRef: l2, needYBar: ue2, needXBar: de2, yBarSizePx: P2, xBarSizePx: oe2, yBarTopPx: se2, xBarLeftPx: le2, isShowXBar: fe2, isShowYBar: pe2, isIos: te2, handleScroll: Te2, handleContentResize: ge2, handleContainerResize: _e2, handleYScrollMouseDown: Ne2, handleXScrollMouseDown: Ae2, cssVars: n2 ? void 0 : Ie2, themeClass: Le2 == null ? void 0 : Le2.themeClass, onRender: Le2 == null ? void 0 : Le2.onRender });
}, render() {
  var _a2;
  let { $slots: e2, mergedClsPrefix: t2, triggerDisplayManually: n2, rtlEnabled: r2, internalHoistYRail: i2, yPlacement: a2, xPlacement: o2, xScrollable: s2 } = this;
  if (!this.scrollable) return (_a2 = e2.default) == null ? void 0 : _a2.call(e2);
  let c2 = this.trigger === `none`, l2 = (e3, n3) => M(`div`, { ref: `yRailRef`, class: [`${t2}-scrollbar-rail`, `${t2}-scrollbar-rail--vertical`, `${t2}-scrollbar-rail--vertical--${a2}`, e3], "data-scrollbar-rail": true, style: [n3 || ``, this.verticalRailStyle], "aria-hidden": true }, M(c2 ? ii : Se, c2 ? null : { name: `fade-in-transition` }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? M(`div`, { class: `${t2}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), u2 = () => {
    var _a3;
    var a3;
    return (a3 = this.onRender) == null || a3.call(this), M(`div`, ve(this.$attrs, { role: `none`, ref: `wrapperRef`, class: [`${t2}-scrollbar`, this.themeClass, r2 && `${t2}-scrollbar--rtl`], style: this.cssVars, onMouseenter: n2 ? void 0 : this.handleMouseEnterWrapper, onMouseleave: n2 ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (_a3 = e2.default) == null ? void 0 : _a3.call(e2) : M(`div`, { role: `none`, ref: `containerRef`, class: [`${t2}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, M(Br, { onResize: this.handleContentResize }, { default: () => M(`div`, { ref: `contentRef`, role: `none`, style: [{ width: this.xScrollable ? `fit-content` : null }, this.contentStyle], class: [`${t2}-scrollbar-content`, this.contentClass] }, e2) })), i2 ? null : l2(void 0, void 0), s2 && M(`div`, { ref: `xRailRef`, class: [`${t2}-scrollbar-rail`, `${t2}-scrollbar-rail--horizontal`, `${t2}-scrollbar-rail--horizontal--${o2}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, M(c2 ? ii : Se, c2 ? null : { name: `fade-in-transition` }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? M(`div`, { class: `${t2}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: r2 ? this.xBarLeftPx : void 0, left: r2 ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, d2 = this.container ? u2() : M(Br, { onResize: this.handleContainerResize }, { default: u2 });
  return i2 ? M(z, null, d2, l2(this.themeClass, this.cssVars)) : d2;
} }), fi = di;
const pi = di;
var mi = { space: `6px`, spaceArrow: `10px`, arrowOffset: `10px`, arrowOffsetVertical: `10px`, arrowHeight: `6px`, padding: `8px 14px` };
function hi(e2) {
  let { boxShadow2: t2, popoverColor: n2, textColor2: r2, borderRadius: i2, fontSize: a2, dividerColor: o2 } = e2;
  return Object.assign(Object.assign({}, mi), { fontSize: a2, borderRadius: i2, color: n2, dividerColor: o2, textColor: r2, boxShadow: t2 });
}
var gi = p({ name: `Popover`, common: C, peers: { Scrollbar: li }, self: hi }), _i = { top: `bottom`, bottom: `top`, left: `right`, right: `left` }, Z = `var(--n-arrow-height) * 1.414`, vi = E([m(`popover`, `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [E(`>`, [m(`scrollbar`, `
 height: inherit;
 max-height: inherit;
 `)]), v(`raw`, `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [v(`scrollable`, [v(`show-header-or-footer`, `padding: var(--n-padding);`)])]), T(`header`, `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), T(`footer`, `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), S(`scrollable, show-header-or-footer`, [T(`content`, `
 padding: var(--n-padding);
 `)])]), m(`popover-shared`, `
 transform-origin: inherit;
 `, [m(`popover-arrow-wrapper`, `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [m(`popover-arrow`, `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Z});
 height: calc(${Z});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), E(`&.popover-transition-enter-from, &.popover-transition-leave-to`, `
 opacity: 0;
 transform: scale(.85);
 `), E(`&.popover-transition-enter-to, &.popover-transition-leave-from`, `
 transform: scale(1);
 opacity: 1;
 `), E(`&.popover-transition-enter-active`, `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), E(`&.popover-transition-leave-active`, `
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
 `), ...kt({ top: [`right-start`, `left-start`], right: [`top-end`, `bottom-end`], bottom: [`right-end`, `left-end`], left: [`top-start`, `bottom-start`] }, (e2, t2) => {
  let n2 = [`right`, `left`].includes(t2), r2 = n2 ? `width` : `height`;
  return e2.map((e3) => {
    let i2 = e3.split(`-`)[1] === `end`, a2 = `calc((${`var(--v-target-${r2}, 0px)`} - ${Z}) / 2)`, o2 = Q(e3);
    return E(`[v-placement="${e3}"] >`, [m(`popover-shared`, [S(`center-arrow`, [m(`popover-arrow`, `${t2}: calc(max(${a2}, ${o2}) ${i2 ? `+` : `-`} var(--v-offset-${n2 ? `left` : `top`}));`)])])]);
  });
})]);
function Q(e2) {
  return [`top`, `bottom`].includes(e2.split(`-`)[0]) ? `var(--n-arrow-offset)` : `var(--n-arrow-offset-vertical)`;
}
function $(e2, t2) {
  let n2 = e2.split(`-`)[0], r2 = [`top`, `bottom`].includes(n2) ? `height: var(--n-space-arrow);` : `width: var(--n-space-arrow);`;
  return E(`[v-placement="${e2}"] >`, [m(`popover-shared`, `
 margin-${_i[n2]}: var(--n-space);
 `, [S(`show-arrow`, `
 margin-${_i[n2]}: var(--n-space-arrow);
 `), S(`overlap`, `
 margin: 0;
 `), g(`popover-arrow-wrapper`, `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n2}: 100%;
 ${_i[n2]}: auto;
 ${r2}
 `, [m(`popover-arrow`, t2)])])]);
}
const yi = Object.assign(Object.assign({}, h.props), { to: K.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function bi({ arrowClass: e2, arrowStyle: t2, arrowWrapperClass: n2, arrowWrapperStyle: r2, clsPrefix: i2 }) {
  return M(`div`, { key: `__popover-arrow__`, style: r2, class: [`${i2}-popover-arrow-wrapper`, n2] }, M(`div`, { class: [`${i2}-popover-arrow`, e2], style: t2 }));
}
var xi = H({ name: `PopoverBody`, inheritAttrs: false, props: yi, setup(e2, { slots: t2, attrs: n2 }) {
  let { namespaceRef: r2, mergedClsPrefixRef: i2, inlineThemeDisabled: a2, mergedRtlRef: o2 } = O(e2), s2 = h(`Popover`, `-popover`, vi, gi, e2, i2), l2 = _(`Popover`, o2, i2), d2 = L(null), p2 = F(`NPopover`), m2 = L(null), g2 = L(e2.show), v2 = L(false);
  me(() => {
    let { show: t3 } = e2;
    t3 && !$r() && !e2.internalDeactivateImmediately && (v2.value = true);
  });
  let y2 = B(() => {
    let { trigger: t3, onClickoutside: n3 } = e2, r3 = [], { positionManuallyRef: { value: i3 } } = p2;
    return i3 || (t3 === `click` && !n3 && r3.push([wn, D2, void 0, { capture: true }]), t3 === `hover` && r3.push([Sn, E2])), n3 && r3.push([wn, D2, void 0, { capture: true }]), (e2.displayDirective === `show` || e2.animated && v2.value) && r3.push([Ce, e2.show]), r3;
  }), b2 = B(() => {
    let { common: { cubicBezierEaseInOut: e3, cubicBezierEaseIn: t3, cubicBezierEaseOut: n3 }, self: { space: r3, spaceArrow: i3, padding: a3, fontSize: o3, textColor: c2, dividerColor: l3, color: u2, boxShadow: d3, borderRadius: f2, arrowHeight: p3, arrowOffset: m3, arrowOffsetVertical: h2 } } = s2.value;
    return { "--n-box-shadow": d3, "--n-bezier": e3, "--n-bezier-ease-in": t3, "--n-bezier-ease-out": n3, "--n-font-size": o3, "--n-text-color": c2, "--n-color": u2, "--n-divider-color": l3, "--n-border-radius": f2, "--n-arrow-height": p3, "--n-arrow-offset": m3, "--n-arrow-offset-vertical": h2, "--n-padding": a3, "--n-space": r3, "--n-space-arrow": i3 };
  }), x2 = B(() => {
    let t3 = e2.width === `trigger` ? void 0 : Xr(e2.width), n3 = [];
    t3 && n3.push({ width: t3 });
    let { maxWidth: r3, minWidth: i3 } = e2;
    return r3 && n3.push({ maxWidth: Xr(r3) }), i3 && n3.push({ maxWidth: Xr(i3) }), a2 || n3.push(b2.value), n3;
  }), S2 = a2 ? f(`popover`, void 0, b2, e2) : void 0;
  p2.setBodyInstance({ syncPosition: C2 }), N(() => {
    p2.setBodyInstance(null);
  }), P(R(e2, `show`), (t3) => {
    e2.animated || (t3 ? g2.value = true : g2.value = false);
  });
  function C2() {
    var e3;
    (e3 = d2.value) == null || e3.syncPosition();
  }
  function w2(t3) {
    e2.trigger === `hover` && e2.keepAliveOnHover && e2.show && p2.handleMouseEnter(t3);
  }
  function T2(t3) {
    e2.trigger === `hover` && e2.keepAliveOnHover && p2.handleMouseLeave(t3);
  }
  function E2(t3) {
    e2.trigger === `hover` && !k2().contains(Pt(t3)) && p2.handleMouseMoveOutside(t3);
  }
  function D2(t3) {
    (e2.trigger === `click` && !k2().contains(Pt(t3)) || e2.onClickoutside) && p2.handleClickOutside(t3);
  }
  function k2() {
    return p2.getTriggerElement();
  }
  j(cn, m2), j(nn, null), j(an, null);
  function A2() {
    if (S2 == null ? void 0 : S2.onRender(), !(e2.displayDirective === `show` || e2.show || e2.animated && v2.value)) return null;
    let r3, a3 = p2.internalRenderBodyRef.value, { value: o3 } = i2;
    if (a3) r3 = a3([`${o3}-popover-shared`, (l2 == null ? void 0 : l2.value) && `${o3}-popover--rtl`, S2 == null ? void 0 : S2.themeClass.value, e2.overlap && `${o3}-popover-shared--overlap`, e2.showArrow && `${o3}-popover-shared--show-arrow`, e2.arrowPointToCenter && `${o3}-popover-shared--center-arrow`], m2, x2.value, w2, T2);
    else {
      let { value: i3 } = p2.extraClassRef, { internalTrapFocus: a4 } = e2, d3 = !c(t2.header) || !c(t2.footer), f2 = () => {
        var _a2;
        let n3 = d3 ? M(z, null, u(t2.header, (t3) => t3 ? M(`div`, { class: [`${o3}-popover__header`, e2.headerClass], style: e2.headerStyle }, t3) : null), u(t2.default, (n4) => n4 ? M(`div`, { class: [`${o3}-popover__content`, e2.contentClass], style: e2.contentStyle }, t2) : null), u(t2.footer, (t3) => t3 ? M(`div`, { class: [`${o3}-popover__footer`, e2.footerClass], style: e2.footerStyle }, t3) : null)) : e2.scrollable ? (_a2 = t2.default) == null ? void 0 : _a2.call(t2) : M(`div`, { class: [`${o3}-popover__content`, e2.contentClass], style: e2.contentStyle }, t2);
        return [e2.scrollable ? M(pi, { themeOverrides: s2.value.peerOverrides.Scrollbar, theme: s2.value.peers.Scrollbar, contentClass: d3 ? void 0 : `${o3}-popover__content ${e2.contentClass ?? ``}`, contentStyle: d3 ? void 0 : e2.contentStyle }, { default: () => n3 }) : n3, e2.showArrow ? bi({ arrowClass: e2.arrowClass, arrowStyle: e2.arrowStyle, arrowWrapperClass: e2.arrowWrapperClass, arrowWrapperStyle: e2.arrowWrapperStyle, clsPrefix: o3 }) : null];
      };
      r3 = M(`div`, ve({ class: [`${o3}-popover`, `${o3}-popover-shared`, (l2 == null ? void 0 : l2.value) && `${o3}-popover--rtl`, S2 == null ? void 0 : S2.themeClass.value, i3.map((e3) => `${o3}-${e3}`), { [`${o3}-popover--scrollable`]: e2.scrollable, [`${o3}-popover--show-header-or-footer`]: d3, [`${o3}-popover--raw`]: e2.raw, [`${o3}-popover-shared--overlap`]: e2.overlap, [`${o3}-popover-shared--show-arrow`]: e2.showArrow, [`${o3}-popover-shared--center-arrow`]: e2.arrowPointToCenter }], ref: m2, style: x2.value, onKeydown: p2.handleKeydown, onMouseenter: w2, onMouseleave: T2 }, n2), a4 ? M(qr, { active: e2.show, autoFocus: true }, { default: f2 }) : f2());
    }
    return he(r3, y2.value);
  }
  return { displayed: v2, namespace: r2, isMounted: p2.isMountedRef, zIndex: p2.zIndexRef, followerRef: d2, adjustedTo: K(e2), followerEnabled: g2, renderContentNode: A2 };
}, render() {
  return M(Kn, { ref: `followerRef`, zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === `trigger` ? `target` : void 0, teleportDisabled: this.adjustedTo === K.tdkey }, { default: () => this.animated ? M(Se, { name: `popover-transition`, appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var e2;
    (e2 = this.internalOnAfterLeave) == null || e2.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), Si = Object.keys(yi), Ci = { focus: [`onFocus`, `onBlur`], click: [`onClick`], hover: [`onMouseenter`, `onMouseleave`], manual: [], nested: [`onFocus`, `onBlur`, `onMouseenter`, `onMouseleave`, `onClick`] };
function wi(e2, t2, n2) {
  Ci[t2].forEach((t3) => {
    e2.props ? e2.props = Object.assign({}, e2.props) : e2.props = {};
    let r2 = e2.props[t3], i2 = n2[t3];
    r2 ? e2.props[t3] = (...e3) => {
      r2(...e3), i2(...e3);
    } : e2.props[t3] = i2;
  });
}
const Ti = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: `hover` }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: `top` }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: `if` }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: K.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number };
var Ei = H({ name: `Popover`, inheritAttrs: false, props: Object.assign(Object.assign(Object.assign({}, h.props), Ti), { internalOnAfterLeave: Function, internalRenderBody: Function }), slots: Object, __popover__: true, setup(e2) {
  let t2 = r(), n2 = L(null), a2 = B(() => e2.show), s2 = L(e2.defaultShow), c2 = Xt(a2, s2), l2 = i(() => e2.disabled ? false : c2.value), u2 = () => {
    if (e2.disabled) return true;
    let { getDisabled: t3 } = e2;
    return !!(t3 == null ? void 0 : t3());
  }, d2 = () => u2() ? false : c2.value, f2 = Zt(e2, [`arrow`, `showArrow`]), p2 = B(() => e2.overlap ? false : f2.value), m2 = null, h2 = L(null), g2 = L(null), _2 = i(() => e2.x !== void 0 && e2.y !== void 0);
  function v2(t3) {
    let { "onUpdate:show": n3, onUpdateShow: r2, onShow: i2, onHide: a3 } = e2;
    s2.value = t3, n3 && o(n3, t3), r2 && o(r2, t3), t3 && i2 && o(i2, true), t3 && a3 && o(a3, false);
  }
  function y2() {
    m2 && m2.syncPosition();
  }
  function b2() {
    let { value: e3 } = h2;
    e3 && (window.clearTimeout(e3), h2.value = null);
  }
  function x2() {
    let { value: e3 } = g2;
    e3 && (window.clearTimeout(e3), g2.value = null);
  }
  function S2() {
    let t3 = u2();
    if (e2.trigger === `focus` && !t3) {
      if (d2()) return;
      v2(true);
    }
  }
  function C2() {
    let t3 = u2();
    if (e2.trigger === `focus` && !t3) {
      if (!d2()) return;
      v2(false);
    }
  }
  function w2() {
    let t3 = u2();
    if (e2.trigger === `hover` && !t3) {
      if (x2(), h2.value !== null || d2()) return;
      let t4 = () => {
        v2(true), h2.value = null;
      }, { delay: n3 } = e2;
      n3 === 0 ? t4() : h2.value = window.setTimeout(t4, n3);
    }
  }
  function T2() {
    let t3 = u2();
    if (e2.trigger === `hover` && !t3) {
      if (b2(), g2.value !== null || !d2()) return;
      let t4 = () => {
        v2(false), g2.value = null;
      }, { duration: n3 } = e2;
      n3 === 0 ? t4() : g2.value = window.setTimeout(t4, n3);
    }
  }
  function E2() {
    T2();
  }
  function D2(t3) {
    var n3;
    d2() && (e2.trigger === `click` && (b2(), x2(), v2(false)), (n3 = e2.onClickoutside) == null || n3.call(e2, t3));
  }
  function O2() {
    e2.trigger === `click` && !u2() && (b2(), x2(), v2(!d2()));
  }
  function k2(t3) {
    e2.internalTrapFocus && t3.key === `Escape` && (b2(), x2(), v2(false));
  }
  function A2(e3) {
    s2.value = e3;
  }
  function M2() {
    var _a2;
    return (_a2 = n2.value) == null ? void 0 : _a2.targetRef;
  }
  function N2(e3) {
    m2 = e3;
  }
  return j(`NPopover`, { getTriggerElement: M2, handleKeydown: k2, handleMouseEnter: w2, handleMouseLeave: T2, handleClickOutside: D2, handleMouseMoveOutside: E2, setBodyInstance: N2, positionManuallyRef: _2, isMountedRef: t2, zIndexRef: R(e2, `zIndex`), extraClassRef: R(e2, `internalExtraClass`), internalRenderBodyRef: R(e2, `internalRenderBody`) }), me(() => {
    c2.value && u2() && v2(false);
  }), { binderInstRef: n2, positionManually: _2, mergedShowConsideringDisabledProp: l2, uncontrolledShow: s2, mergedShowArrow: p2, getMergedShow: d2, setShow: A2, handleClick: O2, handleMouseEnter: w2, handleMouseLeave: T2, handleFocus: S2, handleBlur: C2, syncPosition: y2 };
}, render() {
  var _a2;
  let { positionManually: e2, $slots: t2 } = this, n2, r2 = false;
  if (!e2 && (n2 = ti(t2, `trigger`), n2)) {
    n2 = ge(n2), n2 = n2.type === ye ? M(`span`, [n2]) : n2;
    let t3 = { onClick: this.handleClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur };
    if ((_a2 = n2.type) == null ? void 0 : _a2.__popover__) r2 = true, n2.props || (n2.props = { internalSyncTargetWithParent: true, internalInheritedEventHandlers: [] }), n2.props.internalSyncTargetWithParent = true, n2.props.internalInheritedEventHandlers ? n2.props.internalInheritedEventHandlers = [t3, ...n2.props.internalInheritedEventHandlers] : n2.props.internalInheritedEventHandlers = [t3];
    else {
      let { internalInheritedEventHandlers: r3 } = this, i2 = [t3, ...r3];
      wi(n2, r3 ? `nested` : e2 ? `manual` : this.trigger, { onBlur: (e3) => {
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
  return M(yn, { ref: `binderInstRef`, syncTarget: !r2, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    let t3 = this.getMergedShow();
    return [this.internalTrapFocus && t3 ? he(M(`div`, { style: { position: `fixed`, top: 0, right: 0, bottom: 0, left: 0 } }), [[On, { enabled: t3, zIndex: this.zIndex }]]) : null, e2 ? null : M(bn, null, { default: () => n2 }), M(xi, ri(this.$props, Si, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: t3 })), { default: () => {
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
} }), Di = { closeIconSizeTiny: `12px`, closeIconSizeSmall: `12px`, closeIconSizeMedium: `14px`, closeIconSizeLarge: `14px`, closeSizeTiny: `16px`, closeSizeSmall: `16px`, closeSizeMedium: `18px`, closeSizeLarge: `18px`, padding: `0 7px`, closeMargin: `0 0 0 4px` };
function Oi(e2) {
  let { textColor2: t2, primaryColorHover: n2, primaryColorPressed: r2, primaryColor: i2, infoColor: a2, successColor: o2, warningColor: c2, errorColor: l2, baseColor: u2, borderColor: d2, opacityDisabled: f2, tagColor: p2, closeIconColor: m2, closeIconColorHover: h2, closeIconColorPressed: g2, borderRadiusSmall: _2, fontSizeMini: v2, fontSizeTiny: y2, fontSizeSmall: b2, fontSizeMedium: x2, heightMini: S2, heightTiny: C2, heightSmall: w2, heightMedium: T2, closeColorHover: E2, closeColorPressed: D2, buttonColor2Hover: O2, buttonColor2Pressed: k2, fontWeightStrong: A2 } = e2;
  return Object.assign(Object.assign({}, Di), { closeBorderRadius: _2, heightTiny: S2, heightSmall: C2, heightMedium: w2, heightLarge: T2, borderRadius: _2, opacityDisabled: f2, fontSizeTiny: v2, fontSizeSmall: y2, fontSizeMedium: b2, fontSizeLarge: x2, fontWeightStrong: A2, textColorCheckable: t2, textColorHoverCheckable: t2, textColorPressedCheckable: t2, textColorChecked: u2, colorCheckable: `#0000`, colorHoverCheckable: O2, colorPressedCheckable: k2, colorChecked: i2, colorCheckedHover: n2, colorCheckedPressed: r2, border: `1px solid ${d2}`, textColor: t2, color: p2, colorBordered: `rgb(250, 250, 252)`, closeIconColor: m2, closeIconColorHover: h2, closeIconColorPressed: g2, closeColorHover: E2, closeColorPressed: D2, borderPrimary: `1px solid ${s(i2, { alpha: 0.3 })}`, textColorPrimary: i2, colorPrimary: s(i2, { alpha: 0.12 }), colorBorderedPrimary: s(i2, { alpha: 0.1 }), closeIconColorPrimary: i2, closeIconColorHoverPrimary: i2, closeIconColorPressedPrimary: i2, closeColorHoverPrimary: s(i2, { alpha: 0.12 }), closeColorPressedPrimary: s(i2, { alpha: 0.18 }), borderInfo: `1px solid ${s(a2, { alpha: 0.3 })}`, textColorInfo: a2, colorInfo: s(a2, { alpha: 0.12 }), colorBorderedInfo: s(a2, { alpha: 0.1 }), closeIconColorInfo: a2, closeIconColorHoverInfo: a2, closeIconColorPressedInfo: a2, closeColorHoverInfo: s(a2, { alpha: 0.12 }), closeColorPressedInfo: s(a2, { alpha: 0.18 }), borderSuccess: `1px solid ${s(o2, { alpha: 0.3 })}`, textColorSuccess: o2, colorSuccess: s(o2, { alpha: 0.12 }), colorBorderedSuccess: s(o2, { alpha: 0.1 }), closeIconColorSuccess: o2, closeIconColorHoverSuccess: o2, closeIconColorPressedSuccess: o2, closeColorHoverSuccess: s(o2, { alpha: 0.12 }), closeColorPressedSuccess: s(o2, { alpha: 0.18 }), borderWarning: `1px solid ${s(c2, { alpha: 0.35 })}`, textColorWarning: c2, colorWarning: s(c2, { alpha: 0.15 }), colorBorderedWarning: s(c2, { alpha: 0.12 }), closeIconColorWarning: c2, closeIconColorHoverWarning: c2, closeIconColorPressedWarning: c2, closeColorHoverWarning: s(c2, { alpha: 0.12 }), closeColorPressedWarning: s(c2, { alpha: 0.18 }), borderError: `1px solid ${s(l2, { alpha: 0.23 })}`, textColorError: l2, colorError: s(l2, { alpha: 0.1 }), colorBorderedError: s(l2, { alpha: 0.08 }), closeIconColorError: l2, closeIconColorHoverError: l2, closeIconColorPressedError: l2, closeColorHoverError: s(l2, { alpha: 0.12 }), closeColorPressedError: s(l2, { alpha: 0.18 }) });
}
var ki = { name: `Tag`, common: C, self: Oi }, Ai = { padding: `8px 14px` };
function ji(e2) {
  let { borderRadius: t2, boxShadow2: n2, baseColor: r2 } = e2;
  return Object.assign(Object.assign({}, Ai), { borderRadius: t2, boxShadow: n2, color: A(r2, `rgba(0, 0, 0, .85)`), textColor: r2 });
}
var Mi = p({ name: `Tooltip`, common: C, peers: { Popover: gi }, self: ji }), Ni = H({ name: `Tooltip`, props: Object.assign(Object.assign({}, Ti), h.props), slots: Object, __popover__: true, setup(e2) {
  let { mergedClsPrefixRef: t2 } = O(e2), n2 = h(`Tooltip`, `-tooltip`, void 0, Mi, e2, t2), r2 = L(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    r2.value.syncPosition();
  }, setShow(e3) {
    r2.value.setShow(e3);
  } }), { popoverRef: r2, mergedTheme: n2, popoverThemeOverrides: B(() => n2.value.self) });
}, render() {
  let { mergedTheme: e2, internalExtraClass: t2 } = this;
  return M(Ei, Object.assign(Object.assign({}, this.$props), { theme: e2.peers.Popover, themeOverrides: e2.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: t2.concat(`tooltip`), ref: `popoverRef` }), this.$slots);
} });
export {
  Nt as $,
  bn as A,
  tn as B,
  zr as C,
  jn as D,
  An as E,
  an as F,
  Gt as G,
  Zt as H,
  sn as I,
  G as J,
  Kt as K,
  on as L,
  un as M,
  K as N,
  On as O,
  cn as P,
  Pt as Q,
  nn as R,
  Br as S,
  Nn as T,
  Xt as U,
  en as V,
  Yt as W,
  Ft as X,
  W as Y,
  It as Z,
  ri as _,
  Di as a,
  Xr as b,
  bi as c,
  fi as d,
  Ge as et,
  pi as f,
  ii as g,
  oi as h,
  ki as i,
  yn as j,
  wn as k,
  gi as l,
  ci as m,
  Mi as n,
  Ei as o,
  li as p,
  Wt as q,
  Ai as r,
  Ti as s,
  Ni as t,
  hi as u,
  ni as v,
  Kn as w,
  qr as x,
  ei as y,
  rn as z
};
