var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { av as mn, aw as cu, af as Ft, ax as vn, ay as Ba, az as hs, aA as du, H as Hr, aB as _r, aC as ps, aD as Ui, aE as uu, aF as fu, aG as Ki, aH as Oa, aI as Fa, aJ as La, aK as pi, aL as yr, aM as gs, aN as ms, aO as hu, aP as gi, aQ as pu, aR as gu, aS as mu, aT as vu, aU as bu, i as de, l as vs, M as Yi, L as bs, d as J, j as B, x as pe, p as Se, b as W, B as Te, h as b, Y as Rt, g as xs, aV as xu, O as oo, c as dt, o as Xe, a as De, J as Cs, r as ho, Q as mo, k as pt, f as ot, e as Ao, z as zo, F as $t, aW as kn, P as Lt, T as Cu, t as be, a5 as ys, aX as yu, w as Dt, C as Et, V as wu, m as Ht, N as Rr, R as ws, aY as Su, X as Da, n as mi, q as Ss, aa as Vn, ab as ct, ac as Ae, ad as wt, aZ as $u, a_ as Pu, a$ as $s, b0 as Go, W as Ru, b1 as Eu, b2 as ku, au as Ha, b3 as Ps, b4 as fo, ae as Zt, b5 as Tu, b6 as zu, b7 as qe, b8 as ve, b9 as wo, ba as Iu, bb as jo, bc as _a, bd as Au, be as qn, u as Mu, v as Ye, y as We, a6 as vi, D as Er, s as Bu, A as bn, a7 as Ou, _ as Fu, a9 as Lu, E as Du } from "./index-CuN5gxcs.js";
import { z as Xi } from "./index-DIBhUufX.js";
var Hu = "[object Symbol]";
function Zi(e) {
  return typeof e == "symbol" || mn(e) && cu(e) == Hu;
}
function Rs(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length, n = Array(r); ++o < r; ) n[o] = t(e[o], o, e);
  return n;
}
var Na = vn ? vn.prototype : void 0, Wa = Na ? Na.toString : void 0;
function Es(e) {
  if (typeof e == "string") return e;
  if (Ft(e)) return Rs(e, Es) + "";
  if (Zi(e)) return Wa ? Wa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ji(e) {
  return e;
}
function _u(e, t, o) {
  switch (o.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, o[0]);
    case 2:
      return e.call(t, o[0], o[1]);
    case 3:
      return e.call(t, o[0], o[1], o[2]);
  }
  return e.apply(t, o);
}
function Nu(e, t) {
  var o = -1, r = e.length;
  for (t || (t = Array(r)); ++o < r; ) t[o] = e[o];
  return t;
}
var Wu = 800, ju = 16, Vu = Date.now;
function qu(e) {
  var t = 0, o = 0;
  return function() {
    var r = Vu(), n = ju - (r - o);
    if (o = r, n > 0) {
      if (++t >= Wu) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function Gu(e) {
  return function() {
    return e;
  };
}
var Uu = Ba ? function(e, t) {
  return Ba(e, "toString", { configurable: true, enumerable: false, value: Gu(t), writable: true });
} : Ji, Ku = qu(Uu);
function Yu(e, t, o, r) {
  var n = !o;
  o || (o = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var l = t[i], s = void 0;
    s === void 0 && (s = e[l]), n ? hs(o, l, s) : du(o, l, s);
  }
  return o;
}
var ja = Math.max;
function Xu(e, t, o) {
  return t = ja(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, n = -1, i = ja(r.length - t, 0), a = Array(i); ++n < i; ) a[n] = r[t + n];
    n = -1;
    for (var l = Array(t + 1); ++n < t; ) l[n] = r[n];
    return l[t] = o(a), _u(e, this, l);
  };
}
function Zu(e, t) {
  return Ku(Xu(e, t, Ji), e + "");
}
function Ju(e, t, o) {
  if (!Hr(o)) return false;
  var r = typeof t;
  return (r == "number" ? _r(o) && ps(t, o.length) : r == "string" && t in o) ? Ui(o[t], e) : false;
}
function Qu(e) {
  return Zu(function(t, o) {
    var r = -1, n = o.length, i = n > 1 ? o[n - 1] : void 0, a = n > 2 ? o[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (n--, i) : void 0, a && Ju(o[0], o[1], a) && (i = n < 3 ? void 0 : i, n = 1), t = Object(t); ++r < n; ) {
      var l = o[r];
      l && e(t, l, r, i);
    }
    return t;
  });
}
function ef(e) {
  var t = [];
  if (e != null) for (var o in Object(e)) t.push(o);
  return t;
}
var tf = Object.prototype, of = tf.hasOwnProperty;
function rf(e) {
  if (!Hr(e)) return ef(e);
  var t = uu(e), o = [];
  for (var r in e) r == "constructor" && (t || !of.call(e, r)) || o.push(r);
  return o;
}
function ks(e) {
  return _r(e) ? fu(e, true) : rf(e);
}
var nf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, af = /^\w*$/;
function Qi(e, t) {
  if (Ft(e)) return false;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || Zi(e) ? true : af.test(e) || !nf.test(e) || t != null && e in Object(t);
}
var lf = "Expected a function";
function ea(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(lf);
  var o = function() {
    var r = arguments, n = t ? t.apply(this, r) : r[0], i = o.cache;
    if (i.has(n)) return i.get(n);
    var a = e.apply(this, r);
    return o.cache = i.set(n, a) || i, a;
  };
  return o.cache = new (ea.Cache || Ki)(), o;
}
ea.Cache = Ki;
var sf = 500;
function cf(e) {
  var t = ea(e, function(r) {
    return o.size === sf && o.clear(), r;
  }), o = t.cache;
  return t;
}
var df = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uf = /\\(\\)?/g, ff = cf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(df, function(o, r, n, i) {
    t.push(n ? i.replace(uf, "$1") : r || o);
  }), t;
});
function Ts(e) {
  return e == null ? "" : Es(e);
}
function zs(e, t) {
  return Ft(e) ? e : Qi(e, t) ? [e] : ff(Ts(e));
}
function Tn(e) {
  if (typeof e == "string" || Zi(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Is(e, t) {
  t = zs(t, e);
  for (var o = 0, r = t.length; e != null && o < r; ) e = e[Tn(t[o++])];
  return o && o == r ? e : void 0;
}
function ta(e, t, o) {
  var r = e == null ? void 0 : Is(e, t);
  return r === void 0 ? o : r;
}
function hf(e, t, o) {
  var r = -1, n = e.length;
  t < 0 && (t = -t > n ? 0 : n + t), o = o > n ? n : o, o < 0 && (o += n), n = t > o ? 0 : o - t >>> 0, t >>>= 0;
  for (var i = Array(n); ++r < n; ) i[r] = e[r + t];
  return i;
}
function pf(e, t, o) {
  var r = e.length;
  return o = o === void 0 ? r : o, !t && o >= r ? e : hf(e, t, o);
}
var gf = "\\ud800-\\udfff", mf = "\\u0300-\\u036f", vf = "\\ufe20-\\ufe2f", bf = "\\u20d0-\\u20ff", xf = mf + vf + bf, Cf = "\\ufe0e\\ufe0f", yf = "\\u200d", wf = RegExp("[" + yf + gf + xf + Cf + "]");
function As(e) {
  return wf.test(e);
}
function Sf(e) {
  return e.split("");
}
var Ms = "\\ud800-\\udfff", $f = "\\u0300-\\u036f", Pf = "\\ufe20-\\ufe2f", Rf = "\\u20d0-\\u20ff", Ef = $f + Pf + Rf, kf = "\\ufe0e\\ufe0f", Tf = "[" + Ms + "]", bi = "[" + Ef + "]", xi = "\\ud83c[\\udffb-\\udfff]", zf = "(?:" + bi + "|" + xi + ")", Bs = "[^" + Ms + "]", Os = "(?:\\ud83c[\\udde6-\\uddff]){2}", Fs = "[\\ud800-\\udbff][\\udc00-\\udfff]", If = "\\u200d", Ls = zf + "?", Ds = "[" + kf + "]?", Af = "(?:" + If + "(?:" + [Bs, Os, Fs].join("|") + ")" + Ds + Ls + ")*", Mf = Ds + Ls + Af, Bf = "(?:" + [Bs + bi + "?", bi, Os, Fs, Tf].join("|") + ")", Of = RegExp(xi + "(?=" + xi + ")|" + Bf + Mf, "g");
function Ff(e) {
  return e.match(Of) || [];
}
function Lf(e) {
  return As(e) ? Ff(e) : Sf(e);
}
function Df(e) {
  return function(t) {
    t = Ts(t);
    var o = As(t) ? Lf(t) : void 0, r = o ? o[0] : t.charAt(0), n = o ? pf(o, 1).join("") : t.slice(1);
    return r[e]() + n;
  };
}
var Hf = Df("toUpperCase"), _f = "__lodash_hash_undefined__";
function Nf(e) {
  return this.__data__.set(e, _f), this;
}
function Wf(e) {
  return this.__data__.has(e);
}
function xn(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.__data__ = new Ki(); ++t < o; ) this.add(e[t]);
}
xn.prototype.add = xn.prototype.push = Nf;
xn.prototype.has = Wf;
function jf(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length; ++o < r; ) if (t(e[o], o, e)) return true;
  return false;
}
function Vf(e, t) {
  return e.has(t);
}
var qf = 1, Gf = 2;
function Hs(e, t, o, r, n, i) {
  var a = o & qf, l = e.length, s = t.length;
  if (l != s && !(a && s > l)) return false;
  var d = i.get(e), c = i.get(t);
  if (d && c) return d == t && c == e;
  var u = -1, p = true, h = o & Gf ? new xn() : void 0;
  for (i.set(e, t), i.set(t, e); ++u < l; ) {
    var f = e[u], g = t[u];
    if (r) var v = a ? r(g, f, u, t, e, i) : r(f, g, u, e, t, i);
    if (v !== void 0) {
      if (v) continue;
      p = false;
      break;
    }
    if (h) {
      if (!jf(t, function(m, C) {
        if (!Vf(h, C) && (f === m || n(f, m, o, r, i))) return h.push(C);
      })) {
        p = false;
        break;
      }
    } else if (!(f === g || n(f, g, o, r, i))) {
      p = false;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
function Uf(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r, n) {
    o[++t] = [n, r];
  }), o;
}
function Kf(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r) {
    o[++t] = r;
  }), o;
}
var Yf = 1, Xf = 2, Zf = "[object Boolean]", Jf = "[object Date]", Qf = "[object Error]", eh = "[object Map]", th = "[object Number]", oh = "[object RegExp]", rh = "[object Set]", nh = "[object String]", ih = "[object Symbol]", ah = "[object ArrayBuffer]", lh = "[object DataView]", Va = vn ? vn.prototype : void 0, Gn = Va ? Va.valueOf : void 0;
function sh(e, t, o, r, n, i, a) {
  switch (o) {
    case lh:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
      e = e.buffer, t = t.buffer;
    case ah:
      return !(e.byteLength != t.byteLength || !i(new Oa(e), new Oa(t)));
    case Zf:
    case Jf:
    case th:
      return Ui(+e, +t);
    case Qf:
      return e.name == t.name && e.message == t.message;
    case oh:
    case nh:
      return e == t + "";
    case eh:
      var l = Uf;
    case rh:
      var s = r & Yf;
      if (l || (l = Kf), e.size != t.size && !s) return false;
      var d = a.get(e);
      if (d) return d == t;
      r |= Xf, a.set(e, t);
      var c = Hs(l(e), l(t), r, n, i, a);
      return a.delete(e), c;
    case ih:
      if (Gn) return Gn.call(e) == Gn.call(t);
  }
  return false;
}
var ch = 1, dh = Object.prototype, uh = dh.hasOwnProperty;
function fh(e, t, o, r, n, i) {
  var a = o & ch, l = Fa(e), s = l.length, d = Fa(t), c = d.length;
  if (s != c && !a) return false;
  for (var u = s; u--; ) {
    var p = l[u];
    if (!(a ? p in t : uh.call(t, p))) return false;
  }
  var h = i.get(e), f = i.get(t);
  if (h && f) return h == t && f == e;
  var g = true;
  i.set(e, t), i.set(t, e);
  for (var v = a; ++u < s; ) {
    p = l[u];
    var m = e[p], C = t[p];
    if (r) var S = a ? r(C, m, p, t, e, i) : r(m, C, p, e, t, i);
    if (!(S === void 0 ? m === C || n(m, C, o, r, i) : S)) {
      g = false;
      break;
    }
    v || (v = p == "constructor");
  }
  if (g && !v) {
    var w = e.constructor, E = t.constructor;
    w != E && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof E == "function" && E instanceof E) && (g = false);
  }
  return i.delete(e), i.delete(t), g;
}
var hh = 1, qa = "[object Arguments]", Ga = "[object Array]", Qr = "[object Object]", ph = Object.prototype, Ua = ph.hasOwnProperty;
function gh(e, t, o, r, n, i) {
  var a = Ft(e), l = Ft(t), s = a ? Ga : La(e), d = l ? Ga : La(t);
  s = s == qa ? Qr : s, d = d == qa ? Qr : d;
  var c = s == Qr, u = d == Qr, p = s == d;
  if (p && pi(e)) {
    if (!pi(t)) return false;
    a = true, c = false;
  }
  if (p && !c) return i || (i = new yr()), a || gs(e) ? Hs(e, t, o, r, n, i) : sh(e, t, s, o, r, n, i);
  if (!(o & hh)) {
    var h = c && Ua.call(e, "__wrapped__"), f = u && Ua.call(t, "__wrapped__");
    if (h || f) {
      var g = h ? e.value() : e, v = f ? t.value() : t;
      return i || (i = new yr()), n(g, v, o, r, i);
    }
  }
  return p ? (i || (i = new yr()), fh(e, t, o, r, n, i)) : false;
}
function oa(e, t, o, r, n) {
  return e === t ? true : e == null || t == null || !mn(e) && !mn(t) ? e !== e && t !== t : gh(e, t, o, r, oa, n);
}
var mh = 1, vh = 2;
function bh(e, t, o, r) {
  var n = o.length, i = n;
  if (e == null) return !i;
  for (e = Object(e); n--; ) {
    var a = o[n];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return false;
  }
  for (; ++n < i; ) {
    a = o[n];
    var l = a[0], s = e[l], d = a[1];
    if (a[2]) {
      if (s === void 0 && !(l in e)) return false;
    } else {
      var c = new yr(), u;
      if (!(u === void 0 ? oa(d, s, mh | vh, r, c) : u)) return false;
    }
  }
  return true;
}
function _s(e) {
  return e === e && !Hr(e);
}
function xh(e) {
  for (var t = ms(e), o = t.length; o--; ) {
    var r = t[o], n = e[r];
    t[o] = [r, n, _s(n)];
  }
  return t;
}
function Ns(e, t) {
  return function(o) {
    return o == null ? false : o[e] === t && (t !== void 0 || e in Object(o));
  };
}
function Ch(e) {
  var t = xh(e);
  return t.length == 1 && t[0][2] ? Ns(t[0][0], t[0][1]) : function(o) {
    return o === e || bh(o, e, t);
  };
}
function yh(e, t) {
  return e != null && t in Object(e);
}
function wh(e, t, o) {
  t = zs(t, e);
  for (var r = -1, n = t.length, i = false; ++r < n; ) {
    var a = Tn(t[r]);
    if (!(i = e != null && o(e, a))) break;
    e = e[a];
  }
  return i || ++r != n ? i : (n = e == null ? 0 : e.length, !!n && hu(n) && ps(a, n) && (Ft(e) || gi(e)));
}
function Sh(e, t) {
  return e != null && wh(e, t, yh);
}
var $h = 1, Ph = 2;
function Rh(e, t) {
  return Qi(e) && _s(t) ? Ns(Tn(e), t) : function(o) {
    var r = ta(o, e);
    return r === void 0 && r === t ? Sh(o, e) : oa(t, r, $h | Ph);
  };
}
function Eh(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function kh(e) {
  return function(t) {
    return Is(t, e);
  };
}
function Th(e) {
  return Qi(e) ? Eh(Tn(e)) : kh(e);
}
function zh(e) {
  return typeof e == "function" ? e : e == null ? Ji : typeof e == "object" ? Ft(e) ? Rh(e[0], e[1]) : Ch(e) : Th(e);
}
function Ih(e) {
  return function(t, o, r) {
    for (var n = -1, i = Object(t), a = r(t), l = a.length; l--; ) {
      var s = a[++n];
      if (o(i[s], s, i) === false) break;
    }
    return t;
  };
}
var Ws = Ih();
function Ah(e, t) {
  return e && Ws(e, t, ms);
}
function Mh(e, t) {
  return function(o, r) {
    if (o == null) return o;
    if (!_r(o)) return e(o, r);
    for (var n = o.length, i = -1, a = Object(o); ++i < n && r(a[i], i, a) !== false; ) ;
    return o;
  };
}
var Bh = Mh(Ah);
function Ci(e, t, o) {
  (o !== void 0 && !Ui(e[t], o) || o === void 0 && !(t in e)) && hs(e, t, o);
}
function Oh(e) {
  return mn(e) && _r(e);
}
function yi(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
}
function Fh(e) {
  return Yu(e, ks(e));
}
function Lh(e, t, o, r, n, i, a) {
  var l = yi(e, o), s = yi(t, o), d = a.get(s);
  if (d) {
    Ci(e, o, d);
    return;
  }
  var c = i ? i(l, s, o + "", e, t, a) : void 0, u = c === void 0;
  if (u) {
    var p = Ft(s), h = !p && pi(s), f = !p && !h && gs(s);
    c = s, p || h || f ? Ft(l) ? c = l : Oh(l) ? c = Nu(l) : h ? (u = false, c = pu(s, true)) : f ? (u = false, c = gu(s, true)) : c = [] : mu(s) || gi(s) ? (c = l, gi(l) ? c = Fh(l) : (!Hr(l) || vu(l)) && (c = bu(s))) : u = false;
  }
  u && (a.set(s, c), n(c, s, r, i, a), a.delete(s)), Ci(e, o, c);
}
function js(e, t, o, r, n) {
  e !== t && Ws(t, function(i, a) {
    if (n || (n = new yr()), Hr(i)) Lh(e, t, a, o, js, r, n);
    else {
      var l = r ? r(yi(e, a), i, a + "", e, t, n) : void 0;
      l === void 0 && (l = i), Ci(e, a, l);
    }
  }, ks);
}
function Dh(e, t) {
  var o = -1, r = _r(e) ? Array(e.length) : [];
  return Bh(e, function(n, i, a) {
    r[++o] = t(n, i, a);
  }), r;
}
function Hh(e, t) {
  var o = Ft(e) ? Rs : Dh;
  return o(e, zh(t));
}
var vr = Qu(function(e, t, o) {
  js(e, t, o);
});
const Wo = typeof document < "u";
function Vs(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function _h(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Vs(e.default);
}
const Le = Object.assign;
function Un(e, t) {
  const o = {};
  for (const r in t) {
    const n = t[r];
    o[r] = kt(n) ? n.map(e) : e(n);
  }
  return o;
}
const wr = () => {
}, kt = Array.isArray;
function Ka(e, t) {
  const o = {};
  for (const r in e) o[r] = r in t ? t[r] : e[r];
  return o;
}
const qs = /#/g, Nh = /&/g, Wh = /\//g, jh = /=/g, Vh = /\?/g, Gs = /\+/g, qh = /%5B/g, Gh = /%5D/g, Us = /%5E/g, Uh = /%60/g, Ks = /%7B/g, Kh = /%7C/g, Ys = /%7D/g, Yh = /%20/g;
function ra(e) {
  return e == null ? "" : encodeURI("" + e).replace(Kh, "|").replace(qh, "[").replace(Gh, "]");
}
function Xh(e) {
  return ra(e).replace(Ks, "{").replace(Ys, "}").replace(Us, "^");
}
function wi(e) {
  return ra(e).replace(Gs, "%2B").replace(Yh, "+").replace(qs, "%23").replace(Nh, "%26").replace(Uh, "`").replace(Ks, "{").replace(Ys, "}").replace(Us, "^");
}
function Zh(e) {
  return wi(e).replace(jh, "%3D");
}
function Jh(e) {
  return ra(e).replace(qs, "%23").replace(Vh, "%3F");
}
function Qh(e) {
  return Jh(e).replace(Wh, "%2F");
}
function kr(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const ep = /\/$/, tp = (e) => e.replace(ep, "");
function Kn(e, t, o = "/") {
  let r, n = {}, i = "", a = "";
  const l = t.indexOf("#");
  let s = t.indexOf("?");
  return s = l >= 0 && s > l ? -1 : s, s >= 0 && (r = t.slice(0, s), i = t.slice(s, l > 0 ? l : t.length), n = e(i.slice(1))), l >= 0 && (r = r || t.slice(0, l), a = t.slice(l, t.length)), r = ip(r ?? t, o), { fullPath: r + i + a, path: r, query: n, hash: kr(a) };
}
function op(e, t) {
  const o = t.query ? e(t.query) : "";
  return t.path + (o && "?") + o + (t.hash || "");
}
function rp(e, t, o) {
  const r = t.matched.length - 1, n = o.matched.length - 1;
  return r > -1 && r === n && Yo(t.matched[r], o.matched[n]) && Xs(t.params, o.params) && e(t.query) === e(o.query) && t.hash === o.hash;
}
function Yo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Xs(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var o in e) if (!np(e[o], t[o])) return false;
  return true;
}
function np(e, t) {
  return kt(e) ? Ya(e, t) : kt(t) ? Ya(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function Ya(e, t) {
  return kt(t) ? e.length === t.length && e.every((o, r) => o === t[r]) : e.length === 1 && e[0] === t;
}
function ip(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const o = t.split("/"), r = e.split("/"), n = r[r.length - 1];
  (n === ".." || n === ".") && r.push("");
  let i = o.length - 1, a, l;
  for (a = 0; a < r.length; a++) if (l = r[a], l !== ".") if (l === "..") i > 1 && i--;
  else break;
  return o.slice(0, i).join("/") + "/" + r.slice(a).join("/");
}
const lo = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let Si = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), Xa = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
const Yn = "";
function ap(e) {
  if (!e) if (Wo) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), tp(e);
}
const lp = /^[^#]+#/;
function sp(e, t) {
  return e.replace(lp, "#") + t;
}
function cp(e, t) {
  const o = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - o.left - (t.left || 0), top: r.top - o.top - (t.top || 0) };
}
const dp = () => ({ left: window.scrollX, top: window.scrollY });
function up(e) {
  let t;
  if ("el" in e) {
    const o = e.el, r = typeof o == "string" && o.startsWith("#"), n = typeof o == "string" ? r ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!n) return;
    t = cp(n, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Za(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const $i = /* @__PURE__ */ new Map();
function fp(e, t) {
  $i.set(e, t);
}
function hp(e) {
  const t = $i.get(e);
  return $i.delete(e), t;
}
function pp(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Zs(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Ne = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const Js = /* @__PURE__ */ Symbol("");
Ne.MATCHER_NOT_FOUND + "", Ne.NAVIGATION_GUARD_REDIRECT + "", Ne.NAVIGATION_ABORTED + "", Ne.NAVIGATION_CANCELLED + "", Ne.NAVIGATION_DUPLICATED + "";
function Xo(e, t) {
  return Le(new Error(), { type: e, [Js]: true }, t);
}
function Kt(e, t) {
  return e instanceof Error && Js in e && (t == null || !!(e.type & t));
}
const gp = ["params", "query", "hash"];
function mp(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const o of gp) o in e && (t[o] = e[o]);
  return JSON.stringify(t, null, 2);
}
function vp(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const n = o[r].replace(Gs, " "), i = n.indexOf("="), a = kr(i < 0 ? n : n.slice(0, i)), l = i < 0 ? null : kr(n.slice(i + 1));
    if (a in t) {
      let s = t[a];
      kt(s) || (s = t[a] = [s]), s.push(l);
    } else t[a] = l;
  }
  return t;
}
function Ja(e) {
  let t = "";
  for (let o in e) {
    const r = e[o];
    if (o = Zh(o), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + o);
      continue;
    }
    (kt(r) ? r.map((n) => n && wi(n)) : [r && wi(r)]).forEach((n) => {
      n !== void 0 && (t += (t.length ? "&" : "") + o, n != null && (t += "=" + n));
    });
  }
  return t;
}
function bp(e) {
  const t = {};
  for (const o in e) {
    const r = e[o];
    r !== void 0 && (t[o] = kt(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
  }
  return t;
}
const Qs = /* @__PURE__ */ Symbol(""), Qa = /* @__PURE__ */ Symbol(""), zn = /* @__PURE__ */ Symbol(""), na = /* @__PURE__ */ Symbol(""), Pi = /* @__PURE__ */ Symbol("");
function ur() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const n = e.indexOf(r);
      n > -1 && e.splice(n, 1);
    };
  }
  function o() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: o };
}
function xp(e, t, o) {
  const r = () => {
    e[t].delete(o);
  };
  vs(r), Yi(r), bs(() => {
    e[t].add(o);
  }), e[t].add(o);
}
function J1(e) {
  const t = de(Qs, {}).value;
  t && xp(t, "leaveGuards", e);
}
function uo(e, t, o, r, n, i = (a) => a()) {
  const a = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
  return () => new Promise((l, s) => {
    const d = (p) => {
      p === false ? s(Xo(Ne.NAVIGATION_ABORTED, { from: o, to: t })) : p instanceof Error ? s(p) : pp(p) ? s(Xo(Ne.NAVIGATION_GUARD_REDIRECT, { from: t, to: p })) : (a && r.enterCallbacks[n] === a && typeof p == "function" && a.push(p), l());
    }, c = i(() => e.call(r && r.instances[n], t, o, d));
    let u = Promise.resolve(c);
    e.length < 3 && (u = u.then(d)), u.catch((p) => s(p));
  });
}
function Xn(e, t, o, r, n = (i) => i()) {
  const i = [];
  for (const a of e) for (const l in a.components) {
    let s = a.components[l];
    if (!(t !== "beforeRouteEnter" && !a.instances[l])) if (Vs(s)) {
      const d = (s.__vccOpts || s)[t];
      d && i.push(uo(d, o, r, a, l, n));
    } else {
      let d = s();
      i.push(() => d.then((c) => {
        if (!c) throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);
        const u = _h(c) ? c.default : c;
        a.mods[l] = c, a.components[l] = u;
        const p = (u.__vccOpts || u)[t];
        return p && uo(p, o, r, a, l, n)();
      }));
    }
  }
  return i;
}
function Cp(e, t) {
  const o = [], r = [], n = [], i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const l = t.matched[a];
    l && (e.matched.find((d) => Yo(d, l)) ? r.push(l) : o.push(l));
    const s = e.matched[a];
    s && (t.matched.find((d) => Yo(d, s)) || n.push(s));
  }
  return [o, r, n];
}
function Q1(e = "") {
  let t = [], o = [[Yn, {}]], r = 0;
  e = ap(e);
  function n(l, s = {}) {
    r++, r !== o.length && o.splice(r), o.push([l, s]);
  }
  function i(l, s, { direction: d, delta: c }) {
    const u = { direction: d, delta: c, type: Si.pop };
    for (const p of t) p(l, s, u);
  }
  const a = { location: Yn, state: {}, base: e, createHref: sp.bind(null, e), replace(l, s) {
    o.splice(r--, 1), n(l, s);
  }, push(l, s) {
    n(l, s);
  }, listen(l) {
    return t.push(l), () => {
      const s = t.indexOf(l);
      s > -1 && t.splice(s, 1);
    };
  }, destroy() {
    t = [], o = [[Yn, {}]], r = 0;
  }, go(l, s = true) {
    const d = this.location, c = l < 0 ? Xa.back : Xa.forward;
    r = Math.max(0, Math.min(r + l, o.length - 1)), s && i(this.location, d, { direction: c, delta: l });
  } };
  return Object.defineProperty(a, "location", { enumerable: true, get: () => o[r][0] }), Object.defineProperty(a, "state", { enumerable: true, get: () => o[r][1] }), a;
}
let So = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var et = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(et || {});
const yp = { type: So.Static, value: "" }, wp = /[a-zA-Z0-9_]/;
function Sp(e) {
  if (!e) return [[]];
  if (e === "/") return [[yp]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${o})/"${d}": ${h}`);
  }
  let o = et.Static, r = o;
  const n = [];
  let i;
  function a() {
    i && n.push(i), i = [];
  }
  let l = 0, s, d = "", c = "";
  function u() {
    d && (o === et.Static ? i.push({ type: So.Static, value: d }) : o === et.Param || o === et.ParamRegExp || o === et.ParamRegExpEnd ? (i.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: So.Param, value: d, regexp: c, repeatable: s === "*" || s === "+", optional: s === "*" || s === "?" })) : t("Invalid state to consume buffer"), d = "");
  }
  function p() {
    d += s;
  }
  for (; l < e.length; ) {
    if (s = e[l++], s === "\\" && o !== et.ParamRegExp) {
      r = o, o = et.EscapeNext;
      continue;
    }
    switch (o) {
      case et.Static:
        s === "/" ? (d && u(), a()) : s === ":" ? (u(), o = et.Param) : p();
        break;
      case et.EscapeNext:
        p(), o = r;
        break;
      case et.Param:
        s === "(" ? o = et.ParamRegExp : wp.test(s) ? p() : (u(), o = et.Static, s !== "*" && s !== "?" && s !== "+" && l--);
        break;
      case et.ParamRegExp:
        s === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + s : o = et.ParamRegExpEnd : c += s;
        break;
      case et.ParamRegExpEnd:
        u(), o = et.Static, s !== "*" && s !== "?" && s !== "+" && l--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return o === et.ParamRegExp && t(`Unfinished custom RegExp for param "${d}"`), u(), a(), n;
}
const el = "[^/]+?", $p = { sensitive: false, strict: false, start: true, end: true };
var st = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(st || {});
const Pp = /[.+*?^${}()[\]/\\]/g;
function Rp(e, t) {
  const o = Le({}, $p, t), r = [];
  let n = o.start ? "^" : "";
  const i = [];
  for (const d of e) {
    const c = d.length ? [] : [st.Root];
    o.strict && !d.length && (n += "/");
    for (let u = 0; u < d.length; u++) {
      const p = d[u];
      let h = st.Segment + (o.sensitive ? st.BonusCaseSensitive : 0);
      if (p.type === So.Static) u || (n += "/"), n += p.value.replace(Pp, "\\$&"), h += st.Static;
      else if (p.type === So.Param) {
        const { value: f, repeatable: g, optional: v, regexp: m } = p;
        i.push({ name: f, repeatable: g, optional: v });
        const C = m || el;
        if (C !== el) {
          h += st.BonusCustomRegExp;
          try {
            `${C}`;
          } catch (w) {
            throw new Error(`Invalid custom RegExp for param "${f}" (${C}): ` + w.message);
          }
        }
        let S = g ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
        u || (S = v && d.length < 2 ? `(?:/${S})` : "/" + S), v && (S += "?"), n += S, h += st.Dynamic, v && (h += st.BonusOptional), g && (h += st.BonusRepeatable), C === ".*" && (h += st.BonusWildcard);
      }
      c.push(h);
    }
    r.push(c);
  }
  if (o.strict && o.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += st.BonusStrict;
  }
  o.strict || (n += "/?"), o.end ? n += "$" : o.strict && !n.endsWith("/") && (n += "(?:/|$)");
  const a = new RegExp(n, o.sensitive ? "" : "i");
  function l(d) {
    const c = d.match(a), u = {};
    if (!c) return null;
    for (let p = 1; p < c.length; p++) {
      const h = c[p] || "", f = i[p - 1];
      u[f.name] = h && f.repeatable ? h.split("/") : h;
    }
    return u;
  }
  function s(d) {
    let c = "", u = false;
    for (const p of e) {
      (!u || !c.endsWith("/")) && (c += "/"), u = false;
      for (const h of p) if (h.type === So.Static) c += h.value;
      else if (h.type === So.Param) {
        const { value: f, repeatable: g, optional: v } = h, m = f in d ? d[f] : "";
        if (kt(m) && !g) throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);
        const C = kt(m) ? m.join("/") : m;
        if (!C) if (v) p.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : u = true);
        else throw new Error(`Missing required param "${f}"`);
        c += C;
      }
    }
    return c || "/";
  }
  return { re: a, score: r, keys: i, parse: l, stringify: s };
}
function Ep(e, t) {
  let o = 0;
  for (; o < e.length && o < t.length; ) {
    const r = t[o] - e[o];
    if (r) return r;
    o++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === st.Static + st.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === st.Static + st.Segment ? 1 : -1 : 0;
}
function ec(e, t) {
  let o = 0;
  const r = e.score, n = t.score;
  for (; o < r.length && o < n.length; ) {
    const i = Ep(r[o], n[o]);
    if (i) return i;
    o++;
  }
  if (Math.abs(n.length - r.length) === 1) {
    if (tl(r)) return 1;
    if (tl(n)) return -1;
  }
  return n.length - r.length;
}
function tl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const kp = { strict: false, end: true, sensitive: false };
function Tp(e, t, o) {
  const r = Rp(Sp(e.path), o), n = Le(r, { record: e, parent: t, children: [], alias: [] });
  return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
}
function zp(e, t) {
  const o = [], r = /* @__PURE__ */ new Map();
  t = Ka(kp, t);
  function n(u) {
    return r.get(u);
  }
  function i(u, p, h) {
    const f = !h, g = rl(u);
    g.aliasOf = h && h.record;
    const v = Ka(t, u), m = [g];
    if ("alias" in u) {
      const w = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const E of w) m.push(rl(Le({}, g, { components: h ? h.record.components : g.components, path: E, aliasOf: h ? h.record : g })));
    }
    let C, S;
    for (const w of m) {
      const { path: E } = w;
      if (p && E[0] !== "/") {
        const P = p.record.path, x = P[P.length - 1] === "/" ? "" : "/";
        w.path = p.record.path + (E && x + E);
      }
      if (C = Tp(w, p, v), h ? h.alias.push(C) : (S = S || C, S !== C && S.alias.push(C), f && u.name && !nl(C) && a(u.name)), tc(C) && s(C), g.children) {
        const P = g.children;
        for (let x = 0; x < P.length; x++) i(P[x], C, h && h.children[x]);
      }
      h = h || C;
    }
    return S ? () => {
      a(S);
    } : wr;
  }
  function a(u) {
    if (Zs(u)) {
      const p = r.get(u);
      p && (r.delete(u), o.splice(o.indexOf(p), 1), p.children.forEach(a), p.alias.forEach(a));
    } else {
      const p = o.indexOf(u);
      p > -1 && (o.splice(p, 1), u.record.name && r.delete(u.record.name), u.children.forEach(a), u.alias.forEach(a));
    }
  }
  function l() {
    return o;
  }
  function s(u) {
    const p = Mp(u, o);
    o.splice(p, 0, u), u.record.name && !nl(u) && r.set(u.record.name, u);
  }
  function d(u, p) {
    let h, f = {}, g, v;
    if ("name" in u && u.name) {
      if (h = r.get(u.name), !h) throw Xo(Ne.MATCHER_NOT_FOUND, { location: u });
      v = h.record.name, f = Le(ol(p.params, h.keys.filter((S) => !S.optional).concat(h.parent ? h.parent.keys.filter((S) => S.optional) : []).map((S) => S.name)), u.params && ol(u.params, h.keys.map((S) => S.name))), g = h.stringify(f);
    } else if (u.path != null) g = u.path, h = o.find((S) => S.re.test(g)), h && (f = h.parse(g), v = h.record.name);
    else {
      if (h = p.name ? r.get(p.name) : o.find((S) => S.re.test(p.path)), !h) throw Xo(Ne.MATCHER_NOT_FOUND, { location: u, currentLocation: p });
      v = h.record.name, f = Le({}, p.params, u.params), g = h.stringify(f);
    }
    const m = [];
    let C = h;
    for (; C; ) m.unshift(C.record), C = C.parent;
    return { name: v, path: g, params: f, matched: m, meta: Ap(m) };
  }
  e.forEach((u) => i(u));
  function c() {
    o.length = 0, r.clear();
  }
  return { addRoute: i, resolve: d, removeRoute: a, clearRoutes: c, getRoutes: l, getRecordMatcher: n };
}
function ol(e, t) {
  const o = {};
  for (const r of t) r in e && (o[r] = e[r]);
  return o;
}
function rl(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Ip(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Ip(e) {
  const t = {}, o = e.props || false;
  if ("component" in e) t.default = o;
  else for (const r in e.components) t[r] = typeof o == "object" ? o[r] : o;
  return t;
}
function nl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Ap(e) {
  return e.reduce((t, o) => Le(t, o.meta), {});
}
function Mp(e, t) {
  let o = 0, r = t.length;
  for (; o !== r; ) {
    const i = o + r >> 1;
    ec(e, t[i]) < 0 ? r = i : o = i + 1;
  }
  const n = Bp(e);
  return n && (r = t.lastIndexOf(n, r - 1)), r;
}
function Bp(e) {
  let t = e;
  for (; t = t.parent; ) if (tc(t) && ec(e, t) === 0) return t;
}
function tc({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function il(e) {
  const t = de(zn), o = de(na), r = B(() => {
    const s = pe(e.to);
    return t.resolve(s);
  }), n = B(() => {
    const { matched: s } = r.value, { length: d } = s, c = s[d - 1], u = o.matched;
    if (!c || !u.length) return -1;
    const p = u.findIndex(Yo.bind(null, c));
    if (p > -1) return p;
    const h = al(s[d - 2]);
    return d > 1 && al(c) === h && u[u.length - 1].path !== h ? u.findIndex(Yo.bind(null, s[d - 2])) : p;
  }), i = B(() => n.value > -1 && Hp(o.params, r.value.params)), a = B(() => n.value > -1 && n.value === o.matched.length - 1 && Xs(o.params, r.value.params));
  function l(s = {}) {
    if (Dp(s)) {
      const d = t[pe(e.replace) ? "replace" : "push"](pe(e.to)).catch(wr);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  return { route: r, href: B(() => r.value.href), isActive: i, isExactActive: a, navigate: l };
}
function Op(e) {
  return e.length === 1 ? e[0] : e;
}
const Fp = J({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: il, setup(e, { slots: t }) {
  const o = xs(il(e)), { options: r } = de(zn), n = B(() => ({ [ll(e.activeClass, r.linkActiveClass, "router-link-active")]: o.isActive, [ll(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive }));
  return () => {
    const i = t.default && Op(t.default(o));
    return e.custom ? i : b("a", { "aria-current": o.isExactActive ? e.ariaCurrentValue : null, href: o.href, onClick: o.navigate, class: n.value }, i);
  };
} }), Lp = Fp;
function Dp(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function Hp(e, t) {
  for (const o in t) {
    const r = t[o], n = e[o];
    if (typeof r == "string") {
      if (r !== n) return false;
    } else if (!kt(n) || n.length !== r.length || r.some((i, a) => i.valueOf() !== n[a].valueOf())) return false;
  }
  return true;
}
function al(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ll = (e, t, o) => e ?? t ?? o, _p = J({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: o }) {
  const r = de(Pi), n = B(() => e.route || r.value), i = de(Qa, 0), a = B(() => {
    let d = pe(i);
    const { matched: c } = n.value;
    let u;
    for (; (u = c[d]) && !u.components; ) d++;
    return d;
  }), l = B(() => n.value.matched[a.value]);
  Se(Qa, B(() => a.value + 1)), Se(Qs, l), Se(Pi, n);
  const s = W();
  return Te(() => [s.value, l.value, e.name], ([d, c, u], [p, h, f]) => {
    c && (c.instances[u] = d, h && h !== c && d && d === p && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), d && c && (!h || !Yo(c, h) || !p) && (c.enterCallbacks[u] || []).forEach((g) => g(d));
  }, { flush: "post" }), () => {
    const d = n.value, c = e.name, u = l.value, p = u && u.components[c];
    if (!p) return sl(o.default, { Component: p, route: d });
    const h = u.props[c], f = h ? h === true ? d.params : typeof h == "function" ? h(d) : h : null, v = b(p, Le({}, f, t, { onVnodeUnmounted: (m) => {
      m.component.isUnmounted && (u.instances[c] = null);
    }, ref: s }));
    return sl(o.default, { Component: v, route: d }) || v;
  };
} });
function sl(e, t) {
  if (!e) return null;
  const o = e(t);
  return o.length === 1 ? o[0] : o;
}
const Np = _p;
function eS(e) {
  const t = zp(e.routes, e), o = e.parseQuery || vp, r = e.stringifyQuery || Ja, n = e.history, i = ur(), a = ur(), l = ur(), s = Rt(lo);
  let d = lo;
  Wo && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Un.bind(null, (M) => "" + M), u = Un.bind(null, Qh), p = Un.bind(null, kr);
  function h(M, K) {
    let D, Q;
    return Zs(M) ? (D = t.getRecordMatcher(M), Q = K) : Q = M, t.addRoute(Q, D);
  }
  function f(M) {
    const K = t.getRecordMatcher(M);
    K && t.removeRoute(K);
  }
  function g() {
    return t.getRoutes().map((M) => M.record);
  }
  function v(M) {
    return !!t.getRecordMatcher(M);
  }
  function m(M, K) {
    if (K = Le({}, K || s.value), typeof M == "string") {
      const Z = Kn(o, M, K.path), $e = t.resolve({ path: Z.path }, K), vt = n.createHref(Z.fullPath);
      return Le(Z, $e, { params: p($e.params), hash: kr(Z.hash), redirectedFrom: void 0, href: vt });
    }
    let D;
    if (M.path != null) D = Le({}, M, { path: Kn(o, M.path, K.path).path });
    else {
      const Z = Le({}, M.params);
      for (const $e in Z) Z[$e] == null && delete Z[$e];
      D = Le({}, M, { params: u(Z) }), K.params = u(K.params);
    }
    const Q = t.resolve(D, K), ce = M.hash || "";
    Q.params = c(p(Q.params));
    const ie = op(r, Le({}, M, { hash: Xh(ce), path: Q.path })), te = n.createHref(ie);
    return Le({ fullPath: ie, hash: ce, query: r === Ja ? bp(M.query) : M.query || {} }, Q, { redirectedFrom: void 0, href: te });
  }
  function C(M) {
    return typeof M == "string" ? Kn(o, M, s.value.path) : Le({}, M);
  }
  function S(M, K) {
    if (d !== M) return Xo(Ne.NAVIGATION_CANCELLED, { from: K, to: M });
  }
  function w(M) {
    return x(M);
  }
  function E(M) {
    return w(Le(C(M), { replace: true }));
  }
  function P(M, K) {
    const D = M.matched[M.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: Q } = D;
      let ce = typeof Q == "function" ? Q(M, K) : Q;
      return typeof ce == "string" && (ce = ce.includes("?") || ce.includes("#") ? ce = C(ce) : { path: ce }, ce.params = {}), Le({ query: M.query, hash: M.hash, params: ce.path != null ? {} : M.params }, ce);
    }
  }
  function x(M, K) {
    const D = d = m(M), Q = s.value, ce = M.state, ie = M.force, te = M.replace === true, Z = P(D, Q);
    if (Z) return x(Le(C(Z), { state: typeof Z == "object" ? Le({}, ce, Z.state) : ce, force: ie, replace: te }), K || D);
    const $e = D;
    $e.redirectedFrom = K;
    let vt;
    return !ie && rp(r, Q, D) && (vt = Xo(Ne.NAVIGATION_DUPLICATED, { to: $e, from: Q }), he(Q, Q, true, false)), (vt ? Promise.resolve(vt) : O($e, Q)).catch((Ue) => Kt(Ue) ? Kt(Ue, Ne.NAVIGATION_GUARD_REDIRECT) ? Ue : se(Ue) : U(Ue, $e, Q)).then((Ue) => {
      if (Ue) {
        if (Kt(Ue, Ne.NAVIGATION_GUARD_REDIRECT)) return x(Le({ replace: te }, C(Ue.to), { state: typeof Ue.to == "object" ? Le({}, ce, Ue.to.state) : ce, force: ie }), K || $e);
      } else Ue = y($e, Q, true, te, ce);
      return _($e, Q, Ue), Ue;
    });
  }
  function $(M, K) {
    const D = S(M, K);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function R(M) {
    const K = Ce.values().next().value;
    return K && typeof K.runWithContext == "function" ? K.runWithContext(M) : M();
  }
  function O(M, K) {
    let D;
    const [Q, ce, ie] = Cp(M, K);
    D = Xn(Q.reverse(), "beforeRouteLeave", M, K);
    for (const Z of Q) Z.leaveGuards.forEach(($e) => {
      D.push(uo($e, M, K));
    });
    const te = $.bind(null, M, K);
    return D.push(te), re(D).then(() => {
      D = [];
      for (const Z of i.list()) D.push(uo(Z, M, K));
      return D.push(te), re(D);
    }).then(() => {
      D = Xn(ce, "beforeRouteUpdate", M, K);
      for (const Z of ce) Z.updateGuards.forEach(($e) => {
        D.push(uo($e, M, K));
      });
      return D.push(te), re(D);
    }).then(() => {
      D = [];
      for (const Z of ie) if (Z.beforeEnter) if (kt(Z.beforeEnter)) for (const $e of Z.beforeEnter) D.push(uo($e, M, K));
      else D.push(uo(Z.beforeEnter, M, K));
      return D.push(te), re(D);
    }).then(() => (M.matched.forEach((Z) => Z.enterCallbacks = {}), D = Xn(ie, "beforeRouteEnter", M, K, R), D.push(te), re(D))).then(() => {
      D = [];
      for (const Z of a.list()) D.push(uo(Z, M, K));
      return D.push(te), re(D);
    }).catch((Z) => Kt(Z, Ne.NAVIGATION_CANCELLED) ? Z : Promise.reject(Z));
  }
  function _(M, K, D) {
    l.list().forEach((Q) => R(() => Q(M, K, D)));
  }
  function y(M, K, D, Q, ce) {
    const ie = S(M, K);
    if (ie) return ie;
    const te = K === lo, Z = Wo ? history.state : {};
    D && (Q || te ? n.replace(M.fullPath, Le({ scroll: te && Z && Z.scroll }, ce)) : n.push(M.fullPath, ce)), s.value = M, he(M, K, D, te), se();
  }
  let A;
  function T() {
    A || (A = n.listen((M, K, D) => {
      if (!Be.listening) return;
      const Q = m(M), ce = P(Q, Be.currentRoute.value);
      if (ce) {
        x(Le(ce, { replace: true, force: true }), Q).catch(wr);
        return;
      }
      d = Q;
      const ie = s.value;
      Wo && fp(Za(ie.fullPath, D.delta), dp()), O(Q, ie).catch((te) => Kt(te, Ne.NAVIGATION_ABORTED | Ne.NAVIGATION_CANCELLED) ? te : Kt(te, Ne.NAVIGATION_GUARD_REDIRECT) ? (x(Le(C(te.to), { force: true }), Q).then((Z) => {
        Kt(Z, Ne.NAVIGATION_ABORTED | Ne.NAVIGATION_DUPLICATED) && !D.delta && D.type === Si.pop && n.go(-1, false);
      }).catch(wr), Promise.reject()) : (D.delta && n.go(-D.delta, false), U(te, Q, ie))).then((te) => {
        te = te || y(Q, ie, false), te && (D.delta && !Kt(te, Ne.NAVIGATION_CANCELLED) ? n.go(-D.delta, false) : D.type === Si.pop && Kt(te, Ne.NAVIGATION_ABORTED | Ne.NAVIGATION_DUPLICATED) && n.go(-1, false)), _(Q, ie, te);
      }).catch(wr);
    }));
  }
  let z = ur(), j = ur(), F;
  function U(M, K, D) {
    se(M);
    const Q = j.list();
    return Q.length ? Q.forEach((ce) => ce(M, K, D)) : console.error(M), Promise.reject(M);
  }
  function ne() {
    return F && s.value !== lo ? Promise.resolve() : new Promise((M, K) => {
      z.add([M, K]);
    });
  }
  function se(M) {
    return F || (F = !M, T(), z.list().forEach(([K, D]) => M ? D(M) : K()), z.reset()), M;
  }
  function he(M, K, D, Q) {
    const { scrollBehavior: ce } = e;
    if (!Wo || !ce) return Promise.resolve();
    const ie = !D && hp(Za(M.fullPath, 0)) || (Q || !D) && history.state && history.state.scroll || null;
    return oo().then(() => ce(M, K, ie)).then((te) => te && up(te)).catch((te) => U(te, M, K));
  }
  const ue = (M) => n.go(M);
  let we;
  const Ce = /* @__PURE__ */ new Set(), Be = { currentRoute: s, listening: true, addRoute: h, removeRoute: f, clearRoutes: t.clearRoutes, hasRoute: v, getRoutes: g, resolve: m, options: e, push: w, replace: E, go: ue, back: () => ue(-1), forward: () => ue(1), beforeEach: i.add, beforeResolve: a.add, afterEach: l.add, onError: j.add, isReady: ne, install(M) {
    M.component("RouterLink", Lp), M.component("RouterView", Np), M.config.globalProperties.$router = Be, Object.defineProperty(M.config.globalProperties, "$route", { enumerable: true, get: () => pe(s) }), Wo && !we && s.value === lo && (we = true, w(n.location).catch((Q) => {
    }));
    const K = {};
    for (const Q in lo) Object.defineProperty(K, Q, { get: () => s.value[Q], enumerable: true });
    M.provide(zn, Be), M.provide(na, xu(K)), M.provide(Pi, s);
    const D = M.unmount;
    Ce.add(M), M.unmount = function() {
      Ce.delete(M), Ce.size < 1 && (d = lo, A && A(), A = null, s.value = lo, we = false, F = false), D();
    };
  } };
  function re(M) {
    return M.reduce((K, D) => K.then(() => R(D)), Promise.resolve());
  }
  return Be;
}
function tS() {
  return de(zn);
}
function oS(e) {
  return de(na);
}
const Wp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, rS = J({ name: "InfoCircle", render: function(t, o) {
  return Xe(), dt("svg", Wp, o[0] || (o[0] = [De("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [De("circle", { cx: "12", cy: "12", r: "9" }), De("path", { d: "M12 8h.01" }), De("path", { d: "M11 12h1v4h1" })], -1)]));
} }), jp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, nS = J({ name: "Map", render: function(t, o) {
  return Xe(), dt("svg", jp, o[0] || (o[0] = [De("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [De("path", { d: "M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3V7" }), De("path", { d: "M9 4v13" }), De("path", { d: "M15 7v13" })], -1)]));
} }), Vp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, iS = J({ name: "MapPin", render: function(t, o) {
  return Xe(), dt("svg", Vp, o[0] || (o[0] = [De("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [De("circle", { cx: "12", cy: "11", r: "3" }), De("path", { d: "M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" })], -1)]));
} }), qp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Gp = J({ name: "Minus", render: function(t, o) {
  return Xe(), dt("svg", qp, o[0] || (o[0] = [De("path", { d: "M5 12h14", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)]));
} }), Up = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Kp = J({ name: "Plus", render: function(t, o) {
  return Xe(), dt("svg", Up, o[0] || (o[0] = [De("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [De("path", { d: "M12 5v14" }), De("path", { d: "M5 12h14" })], -1)]));
} }), Yp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, aS = J({ name: "Settings", render: function(t, o) {
  return Xe(), dt("svg", Yp, o[0] || (o[0] = [De("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [De("path", { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z" }), De("circle", { cx: "12", cy: "12", r: "3" })], -1)]));
} }), Xp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Zp = J({ name: "Shape", render: function(t, o) {
  return Xe(), dt("svg", Xp, o[0] || (o[0] = [Cs('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="5" r="2"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle><circle cx="19" cy="19" r="2"></circle><path d="M5 7v10"></path><path d="M7 5h10"></path><path d="M7 19h10"></path><path d="M19 7v10"></path></g>', 1)]));
} }), Jp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Qp = J({ name: "Trash", render: function(t, o) {
  return Xe(), dt("svg", Jp, o[0] || (o[0] = [Cs('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g>', 1)]));
} }), eg = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, tg = J({ name: "Upload", render: function(t, o) {
  return Xe(), dt("svg", eg, o[0] || (o[0] = [De("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [De("path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }), De("path", { d: "M7 9l5-5l5 5" }), De("path", { d: "M12 4v12" })], -1)]));
} });
function og(e) {
  let t = ".", o = "__", r = "--", n;
  if (e) {
    let f = e.blockPrefix;
    f && (t = f), f = e.elementPrefix, f && (o = f), f = e.modifierPrefix, f && (r = f);
  }
  const i = { install(f) {
    n = f.c;
    const g = f.context;
    g.bem = {}, g.bem.b = null, g.bem.els = null;
  } };
  function a(f) {
    let g, v;
    return { before(m) {
      g = m.bem.b, v = m.bem.els, m.bem.els = null;
    }, after(m) {
      m.bem.b = g, m.bem.els = v;
    }, $({ context: m, props: C }) {
      return f = typeof f == "string" ? f : f({ context: m, props: C }), m.bem.b = f, `${(C == null ? void 0 : C.bPrefix) || t}${m.bem.b}`;
    } };
  }
  function l(f) {
    let g;
    return { before(v) {
      g = v.bem.els;
    }, after(v) {
      v.bem.els = g;
    }, $({ context: v, props: m }) {
      return f = typeof f == "string" ? f : f({ context: v, props: m }), v.bem.els = f.split(",").map((C) => C.trim()), v.bem.els.map((C) => `${(m == null ? void 0 : m.bPrefix) || t}${v.bem.b}${o}${C}`).join(", ");
    } };
  }
  function s(f) {
    return { $({ context: g, props: v }) {
      f = typeof f == "string" ? f : f({ context: g, props: v });
      const m = f.split(",").map((w) => w.trim());
      function C(w) {
        return m.map((E) => `&${(v == null ? void 0 : v.bPrefix) || t}${g.bem.b}${w !== void 0 ? `${o}${w}` : ""}${r}${E}`).join(", ");
      }
      const S = g.bem.els;
      return S !== null ? C(S[0]) : C();
    } };
  }
  function d(f) {
    return { $({ context: g, props: v }) {
      f = typeof f == "string" ? f : f({ context: g, props: v });
      const m = g.bem.els;
      return `&:not(${(v == null ? void 0 : v.bPrefix) || t}${g.bem.b}${m !== null && m.length > 0 ? `${o}${m[0]}` : ""}${r}${f})`;
    } };
  }
  return Object.assign(i, { cB: ((...f) => n(a(f[0]), f[1], f[2])), cE: ((...f) => n(l(f[0]), f[1], f[2])), cM: ((...f) => n(s(f[0]), f[1], f[2])), cNotM: ((...f) => n(d(f[0]), f[1], f[2])) }), i;
}
function rg(e) {
  let t = 0;
  for (let o = 0; o < e.length; ++o) e[o] === "&" && ++t;
  return t;
}
const oc = /\s*,(?![^(]*\))\s*/g, ng = /\s+/g;
function ig(e, t) {
  const o = [];
  return t.split(oc).forEach((r) => {
    let n = rg(r);
    if (n) {
      if (n === 1) {
        e.forEach((a) => {
          o.push(r.replace("&", a));
        });
        return;
      }
    } else {
      e.forEach((a) => {
        o.push((a && a + " ") + r);
      });
      return;
    }
    let i = [r];
    for (; n--; ) {
      const a = [];
      i.forEach((l) => {
        e.forEach((s) => {
          a.push(l.replace("&", s));
        });
      }), i = a;
    }
    i.forEach((a) => o.push(a));
  }), o;
}
function ag(e, t) {
  const o = [];
  return t.split(oc).forEach((r) => {
    e.forEach((n) => {
      o.push((n && n + " ") + r);
    });
  }), o;
}
function lg(e) {
  let t = [""];
  return e.forEach((o) => {
    o = o && o.trim(), o && (o.includes("&") ? t = ig(t, o) : t = ag(t, o));
  }), t.join(", ").replace(ng, " ");
}
function cl(e) {
  if (!e) return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function In(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function sg(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function en(e) {
  return e ? /^\s*@(s|m)/.test(e) : false;
}
const cg = /[A-Z]/g;
function rc(e) {
  return e.replace(cg, (t) => "-" + t.toLowerCase());
}
function dg(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((o) => t + `  ${rc(o[0])}: ${o[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function ug(e, t, o) {
  return typeof e == "function" ? e({ context: t.context, props: o }) : e;
}
function dl(e, t, o, r) {
  if (!t) return "";
  const n = ug(t, o, r);
  if (!n) return "";
  if (typeof n == "string") return `${e} {
${n}
}`;
  const i = Object.keys(n);
  if (i.length === 0) return o.config.keepEmptyBlock ? e + ` {
}` : "";
  const a = e ? [e + " {"] : [];
  return i.forEach((l) => {
    const s = n[l];
    if (l === "raw") {
      a.push(`
` + s + `
`);
      return;
    }
    l = rc(l), s != null && a.push(`  ${l}${dg(s)}`);
  }), e && a.push("}"), a.join(`
`);
}
function Ri(e, t, o) {
  e && e.forEach((r) => {
    if (Array.isArray(r)) Ri(r, t, o);
    else if (typeof r == "function") {
      const n = r(t);
      Array.isArray(n) ? Ri(n, t, o) : n && o(n);
    } else r && o(r);
  });
}
function nc(e, t, o, r, n) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string") en(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const d = i({ context: r.context, props: n });
    en(d) ? a = d : t.push(d);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string") en(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const d = i.$({ context: r.context, props: n });
    en(d) ? a = d : t.push(d);
  }
  const l = lg(t), s = dl(l, e.props, r, n);
  a ? o.push(`${a} {`) : s.length && o.push(s), e.children && Ri(e.children, { context: r.context, props: n }, (d) => {
    if (typeof d == "string") {
      const c = dl(l, { raw: d }, r, n);
      o.push(c);
    } else nc(d, t, o, r, n);
  }), t.pop(), a && o.push("}"), i && i.after && i.after(r.context);
}
function fg(e, t, o) {
  const r = [];
  return nc(e, [], r, t, o), r.join(`

`);
}
function Tr(e) {
  for (var t = 0, o, r = 0, n = e.length; n >= 4; ++r, n -= 4) o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= o >>> 24, t = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function hg(e, t, o, r) {
  const { els: n } = t;
  if (o === void 0) n.forEach(cl), t.els = [];
  else {
    const i = In(o, r);
    i && n.includes(i) && (cl(i), t.els = n.filter((a) => a !== i));
  }
}
function ul(e, t) {
  e.push(t);
}
function pg(e, t, o, r, n, i, a, l, s) {
  let d;
  if (o === void 0 && (d = t.render(r), o = Tr(d)), s) {
    s.adapter(o, d ?? t.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const c = In(o, l);
  if (c !== null && !i) return c;
  const u = c ?? sg(o);
  if (d === void 0 && (d = t.render(r)), u.textContent = d, c !== null) return c;
  if (a) {
    const p = l.querySelector(`meta[name="${a}"]`);
    if (p) return l.insertBefore(u, p), ul(t.els, u), u;
  }
  return n ? l.insertBefore(u, l.querySelector("style, link")) : l.appendChild(u), ul(t.els, u), u;
}
function gg(e) {
  return fg(this, this.instance, e);
}
function mg(e = {}) {
  const { id: t, ssr: o, props: r, head: n = false, force: i = false, anchorMetaName: a, parent: l } = e;
  return pg(this.instance, this, t, r, n, i, a, l, o);
}
function vg(e = {}) {
  const { id: t, parent: o } = e;
  hg(this.instance, this, t, o);
}
const tn = function(e, t, o, r) {
  return { instance: e, $: t, props: o, children: r, els: [], render: gg, mount: mg, unmount: vg };
}, bg = function(e, t, o, r) {
  return Array.isArray(t) ? tn(e, { $: null }, null, t) : Array.isArray(o) ? tn(e, t, null, o) : Array.isArray(r) ? tn(e, t, o, r) : tn(e, t, o, null);
};
function ic(e = {}) {
  const t = { c: ((...o) => bg(t, ...o)), use: (o, ...r) => o.install(t, ...r), find: In, context: {}, config: e };
  return t;
}
function xg(e, t) {
  if (e === void 0) return false;
  if (t) {
    const { context: { ids: o } } = t;
    return o.has(e);
  }
  return In(e) !== null;
}
const Cg = "n", zr = `.${Cg}-`, yg = "__", wg = "--", ac = ic(), lc = og({ blockPrefix: zr, elementPrefix: yg, modifierPrefix: wg });
ac.use(lc);
const { c: I, find: lS } = ac, { cB: V, cE: L, cM: H, cNotM: Ze } = lc;
function ia(e) {
  return I(({ props: { bPrefix: t } }) => `${t || zr}modal, ${t || zr}drawer`, [e]);
}
function sc(e) {
  return I(({ props: { bPrefix: t } }) => `${t || zr}popover`, [e]);
}
function cc(e) {
  return I(({ props: { bPrefix: t } }) => `&${t || zr}modal`, e);
}
const Sg = (...e) => I(">", [V(...e)]);
function Y(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (o) => o.toUpperCase()));
}
let Cn = [];
const dc = /* @__PURE__ */ new WeakMap();
function $g() {
  Cn.forEach((e) => e(...dc.get(e))), Cn = [];
}
function Pg(e, ...t) {
  dc.set(e, t), !Cn.includes(e) && Cn.push(e) === 1 && requestAnimationFrame($g);
}
function fl(e, t) {
  let { target: o } = e;
  for (; o; ) {
    if (o.dataset && o.dataset[t] !== void 0) return true;
    o = o.parentElement;
  }
  return false;
}
function Ir(e) {
  return e.composedPath()[0] || null;
}
function yn(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function sS(e) {
  if (e != null) return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Jt(e, t) {
  const o = e.trim().split(/\s+/g), r = { top: o[0] };
  switch (o.length) {
    case 1:
      r.right = o[0], r.bottom = o[0], r.left = o[0];
      break;
    case 2:
      r.right = o[1], r.left = o[1], r.bottom = o[0];
      break;
    case 3:
      r.right = o[1], r.bottom = o[2], r.left = o[1];
      break;
    case 4:
      r.right = o[1], r.bottom = o[2], r.left = o[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return t === void 0 ? r : r[t];
}
function Rg(e, t) {
  const [o, r] = e.split(" ");
  return { row: o, col: r || o };
}
const hl = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32", transparent: "#0000" };
function cS(e, t, o) {
  t /= 100, o /= 100;
  const r = t * Math.min(o, 1 - o) + o;
  return [e, r ? (2 - 2 * o / r) * 100 : 0, r * 100];
}
function dS(e, t, o) {
  t /= 100, o /= 100;
  const r = o - o * t / 2, n = Math.min(r, 1 - r);
  return [e, n ? (o - r) / n * 100 : 0, r * 100];
}
function Eg(e, t, o) {
  t /= 100, o /= 100;
  let r = (n, i = (n + e / 60) % 6) => o - o * t * Math.max(Math.min(i, 4 - i, 1), 0);
  return [r(5) * 255, r(3) * 255, r(1) * 255];
}
function uS(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (i < 0 ? i + 6 : i), r && n / r * 100, r * 100];
}
function fS(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = 1 - Math.abs(r + r - n - 1), a = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (a < 0 ? a + 6 : a), i ? n / i * 100 : 0, (r + r - n) * 50];
}
function kg(e, t, o) {
  t /= 100, o /= 100;
  let r = t * Math.min(o, 1 - o), n = (i, a = (i + e / 30) % 12) => o - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [n(0) * 255, n(8) * 255, n(4) * 255];
}
const Nt = "^\\s*", Wt = "\\s*$", po = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", xt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", $o = "([0-9A-Fa-f])", Po = "([0-9A-Fa-f]{2})", uc = new RegExp(`${Nt}hsl\\s*\\(${xt},${po},${po}\\)${Wt}`), fc = new RegExp(`${Nt}hsv\\s*\\(${xt},${po},${po}\\)${Wt}`), hc = new RegExp(`${Nt}hsla\\s*\\(${xt},${po},${po},${xt}\\)${Wt}`), pc = new RegExp(`${Nt}hsva\\s*\\(${xt},${po},${po},${xt}\\)${Wt}`), Tg = new RegExp(`${Nt}rgb\\s*\\(${xt},${xt},${xt}\\)${Wt}`), zg = new RegExp(`${Nt}rgba\\s*\\(${xt},${xt},${xt},${xt}\\)${Wt}`), aa = new RegExp(`${Nt}#${$o}${$o}${$o}${Wt}`), la = new RegExp(`${Nt}#${Po}${Po}${Po}${Wt}`), sa = new RegExp(`${Nt}#${$o}${$o}${$o}${$o}${Wt}`), ca = new RegExp(`${Nt}#${Po}${Po}${Po}${Po}${Wt}`);
function ft(e) {
  return parseInt(e, 16);
}
function Ig(e) {
  try {
    let t;
    if (t = hc.exec(e)) return [_t(t[1]), Je(t[5]), Je(t[9]), eo(t[13])];
    if (t = uc.exec(e)) return [_t(t[1]), Je(t[5]), Je(t[9]), 1];
    throw new Error(`[seemly/hsla]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Ag(e) {
  try {
    let t;
    if (t = pc.exec(e)) return [_t(t[1]), Je(t[5]), Je(t[9]), eo(t[13])];
    if (t = fc.exec(e)) return [_t(t[1]), Je(t[5]), Je(t[9]), 1];
    throw new Error(`[seemly/hsva]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function go(e) {
  try {
    let t;
    if (t = la.exec(e)) return [ft(t[1]), ft(t[2]), ft(t[3]), 1];
    if (t = Tg.exec(e)) return [je(t[1]), je(t[5]), je(t[9]), 1];
    if (t = zg.exec(e)) return [je(t[1]), je(t[5]), je(t[9]), eo(t[13])];
    if (t = aa.exec(e)) return [ft(t[1] + t[1]), ft(t[2] + t[2]), ft(t[3] + t[3]), 1];
    if (t = ca.exec(e)) return [ft(t[1]), ft(t[2]), ft(t[3]), eo(ft(t[4]) / 255)];
    if (t = sa.exec(e)) return [ft(t[1] + t[1]), ft(t[2] + t[2]), ft(t[3] + t[3]), eo(ft(t[4] + t[4]) / 255)];
    if (e in hl) return go(hl[e]);
    if (uc.test(e) || hc.test(e)) {
      const [o, r, n, i] = Ig(e);
      return [...kg(o, r, n), i];
    } else if (fc.test(e) || pc.test(e)) {
      const [o, r, n, i] = Ag(e);
      return [...Eg(o, r, n), i];
    }
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Mg(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Bg(e, t, o) {
  return `rgb(${je(e)}, ${je(t)}, ${je(o)})`;
}
function Ei(e, t, o, r) {
  return `rgba(${je(e)}, ${je(t)}, ${je(o)}, ${Mg(r)})`;
}
function Zn(e, t, o, r, n) {
  return je((e * t * (1 - r) + o * r) / n);
}
function X(e, t) {
  Array.isArray(e) || (e = go(e)), Array.isArray(t) || (t = go(t));
  const o = e[3], r = t[3], n = eo(o + r - o * r);
  return Ei(Zn(e[0], o, t[0], r, n), Zn(e[1], o, t[1], r, n), Zn(e[2], o, t[2], r, n), n);
}
function ee(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : go(e);
  return typeof t.alpha == "number" ? Ei(o, r, n, t.alpha) : Ei(o, r, n, i);
}
function on(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : go(e), { lightness: a = 1, alpha: l = 1 } = t;
  return Og([o * a, r * a, n * a, i * l]);
}
function eo(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function _t(e) {
  const t = Math.round(Number(e));
  return t >= 360 || t < 0 ? 0 : t;
}
function je(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Je(e) {
  const t = Math.round(Number(e));
  return t > 100 ? 100 : t < 0 ? 0 : t;
}
function hS(e) {
  const [t, o, r] = Array.isArray(e) ? e : go(e);
  return Bg(t, o, r);
}
function Og(e) {
  const [t, o, r] = e;
  return 3 in e ? `rgba(${je(t)}, ${je(o)}, ${je(r)}, ${eo(e[3])})` : `rgba(${je(t)}, ${je(o)}, ${je(r)}, 1)`;
}
function pS(e) {
  return `hsv(${_t(e[0])}, ${Je(e[1])}%, ${Je(e[2])}%)`;
}
function gS(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsva(${_t(t)}, ${Je(o)}%, ${Je(r)}%, ${eo(e[3])})` : `hsva(${_t(t)}, ${Je(o)}%, ${Je(r)}%, 1)`;
}
function mS(e) {
  return `hsl(${_t(e[0])}, ${Je(e[1])}%, ${Je(e[2])}%)`;
}
function vS(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsla(${_t(t)}, ${Je(o)}%, ${Je(r)}%, ${eo(e[3])})` : `hsla(${_t(t)}, ${Je(o)}%, ${Je(r)}%, 1)`;
}
function bS(e) {
  if (typeof e == "string") {
    let r;
    if (r = la.exec(e)) return `${r[0]}FF`;
    if (r = ca.exec(e)) return r[0];
    if (r = aa.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}FF`;
    if (r = sa.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}${r[4]}${r[4]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  const t = `#${e.slice(0, 3).map((r) => je(r).toString(16).toUpperCase().padStart(2, "0")).join("")}`, o = e.length === 3 ? "FF" : je(e[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return t + o;
}
function xS(e) {
  if (typeof e == "string") {
    let t;
    if (t = la.exec(e)) return t[0];
    if (t = ca.exec(e)) return t[0].slice(0, 7);
    if (t = aa.exec(e) || sa.exec(e)) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  return `#${e.slice(0, 3).map((t) => je(t).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function ki(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function CS(e, t) {
  const o = [];
  for (let r = 0; r < e; ++r) o.push(t);
  return o;
}
function hn(e) {
  return e.composedPath()[0];
}
const Fg = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function Lg(e, t, o) {
  if (e === "mousemoveoutside") {
    const r = (n) => {
      t.contains(hn(n)) || o(n);
    };
    return { mousemove: r, touchstart: r };
  } else if (e === "clickoutside") {
    let r = false;
    const n = (a) => {
      r = !t.contains(hn(a));
    }, i = (a) => {
      r && (t.contains(hn(a)) || o(a));
    };
    return { mousedown: n, mouseup: i, touchstart: n, touchend: i };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {};
}
function gc(e, t, o) {
  const r = Fg[e];
  let n = r.get(t);
  n === void 0 && r.set(t, n = /* @__PURE__ */ new WeakMap());
  let i = n.get(o);
  return i === void 0 && n.set(o, i = Lg(e, t, o)), i;
}
function Dg(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = gc(e, t, o);
    return Object.keys(n).forEach((i) => {
      ke(i, document, n[i], r);
    }), true;
  }
  return false;
}
function Hg(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = gc(e, t, o);
    return Object.keys(n).forEach((i) => {
      Ee(i, document, n[i], r);
    }), true;
  }
  return false;
}
function _g() {
  if (typeof window > "u") return { on: () => {
  }, off: () => {
  } };
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  function o() {
    e.set(this, true);
  }
  function r() {
    e.set(this, true), t.set(this, true);
  }
  function n(x, $, R) {
    const O = x[$];
    return x[$] = function() {
      return R.apply(x, arguments), O.apply(x, arguments);
    }, x;
  }
  function i(x, $) {
    x[$] = Event.prototype[$];
  }
  const a = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var x;
    return (x = a.get(this)) !== null && x !== void 0 ? x : null;
  }
  function d(x, $) {
    l !== void 0 && Object.defineProperty(x, "currentTarget", { configurable: true, enumerable: true, get: $ ?? l.get });
  }
  const c = { bubble: {}, capture: {} }, u = {};
  function p() {
    const x = function($) {
      const { type: R, eventPhase: O, bubbles: _ } = $, y = hn($);
      if (O === 2) return;
      const A = O === 1 ? "capture" : "bubble";
      let T = y;
      const z = [];
      for (; T === null && (T = window), z.push(T), T !== window; ) T = T.parentNode || null;
      const j = c.capture[R], F = c.bubble[R];
      if (n($, "stopPropagation", o), n($, "stopImmediatePropagation", r), d($, s), A === "capture") {
        if (j === void 0) return;
        for (let U = z.length - 1; U >= 0 && !e.has($); --U) {
          const ne = z[U], se = j.get(ne);
          if (se !== void 0) {
            a.set($, ne);
            for (const he of se) {
              if (t.has($)) break;
              he($);
            }
          }
          if (U === 0 && !_ && F !== void 0) {
            const he = F.get(ne);
            if (he !== void 0) for (const ue of he) {
              if (t.has($)) break;
              ue($);
            }
          }
        }
      } else if (A === "bubble") {
        if (F === void 0) return;
        for (let U = 0; U < z.length && !e.has($); ++U) {
          const ne = z[U], se = F.get(ne);
          if (se !== void 0) {
            a.set($, ne);
            for (const he of se) {
              if (t.has($)) break;
              he($);
            }
          }
        }
      }
      i($, "stopPropagation"), i($, "stopImmediatePropagation"), d($);
    };
    return x.displayName = "evtdUnifiedHandler", x;
  }
  function h() {
    const x = function($) {
      const { type: R, eventPhase: O } = $;
      if (O !== 2) return;
      const _ = u[R];
      _ !== void 0 && _.forEach((y) => y($));
    };
    return x.displayName = "evtdUnifiedWindowEventHandler", x;
  }
  const f = p(), g = h();
  function v(x, $) {
    const R = c[x];
    return R[$] === void 0 && (R[$] = /* @__PURE__ */ new Map(), window.addEventListener($, f, x === "capture")), R[$];
  }
  function m(x) {
    return u[x] === void 0 && (u[x] = /* @__PURE__ */ new Set(), window.addEventListener(x, g)), u[x];
  }
  function C(x, $) {
    let R = x.get($);
    return R === void 0 && x.set($, R = /* @__PURE__ */ new Set()), R;
  }
  function S(x, $, R, O) {
    const _ = c[$][R];
    if (_ !== void 0) {
      const y = _.get(x);
      if (y !== void 0 && y.has(O)) return true;
    }
    return false;
  }
  function w(x, $) {
    const R = u[x];
    return !!(R !== void 0 && R.has($));
  }
  function E(x, $, R, O) {
    let _;
    if (typeof O == "object" && O.once === true ? _ = (j) => {
      P(x, $, _, O), R(j);
    } : _ = R, Dg(x, $, _, O)) return;
    const A = O === true || typeof O == "object" && O.capture === true ? "capture" : "bubble", T = v(A, x), z = C(T, $);
    if (z.has(_) || z.add(_), $ === window) {
      const j = m(x);
      j.has(_) || j.add(_);
    }
  }
  function P(x, $, R, O) {
    if (Hg(x, $, R, O)) return;
    const y = O === true || typeof O == "object" && O.capture === true, A = y ? "capture" : "bubble", T = v(A, x), z = C(T, $);
    if ($ === window && !S($, y ? "bubble" : "capture", x, R) && w(x, R)) {
      const F = u[x];
      F.delete(R), F.size === 0 && (window.removeEventListener(x, g), u[x] = void 0);
    }
    z.has(R) && z.delete(R), z.size === 0 && T.delete($), T.size === 0 && (window.removeEventListener(x, f, A === "capture"), c[A][x] = void 0);
  }
  return { on: E, off: P };
}
const { on: ke, off: Ee } = _g();
function Ng(e) {
  const t = W(!!e.value);
  if (t.value) return ho(t);
  const o = Te(e, (r) => {
    r && (t.value = true, o());
  });
  return ho(t);
}
function ht(e) {
  const t = B(e), o = W(t.value);
  return Te(t, (r) => {
    o.value = r;
  }), typeof e == "function" ? o : { __v_isRef: true, get value() {
    return o.value;
  }, set value(r) {
    e.set(r);
  } };
}
function da() {
  return mo() !== null;
}
const ua = typeof window < "u";
let Uo, Sr;
const Wg = () => {
  var e, t;
  Uo = ua ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, Sr = false, Uo !== void 0 ? Uo.then(() => {
    Sr = true;
  }) : Sr = true;
};
Wg();
function jg(e) {
  if (Sr) return;
  let t = false;
  pt(() => {
    Sr || (Uo == null ? void 0 : Uo.then(() => {
      t || e();
    }));
  }), ot(() => {
    t = true;
  });
}
const br = W(null);
function pl(e) {
  if (e.clientX > 0 || e.clientY > 0) br.value = { x: e.clientX, y: e.clientY };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: o, top: r, width: n, height: i } = t.getBoundingClientRect();
      o > 0 || r > 0 ? br.value = { x: o + n / 2, y: r + i / 2 } : br.value = { x: 0, y: 0 };
    } else br.value = null;
  }
}
let rn = 0, gl = true;
function Vg() {
  if (!ua) return ho(W(null));
  rn === 0 && ke("click", document, pl, true);
  const e = () => {
    rn += 1;
  };
  return gl && (gl = da()) ? (Ao(e), ot(() => {
    rn -= 1, rn === 0 && Ee("click", document, pl, true);
  })) : e(), ho(br);
}
const qg = W(void 0);
let nn = 0;
function ml() {
  qg.value = Date.now();
}
let vl = true;
function Gg(e) {
  if (!ua) return ho(W(false));
  const t = W(false);
  let o = null;
  function r() {
    o !== null && window.clearTimeout(o);
  }
  function n() {
    r(), t.value = true, o = window.setTimeout(() => {
      t.value = false;
    }, e);
  }
  nn === 0 && ke("click", window, ml, true);
  const i = () => {
    nn += 1, ke("click", window, n, true);
  };
  return vl && (vl = da()) ? (Ao(i), ot(() => {
    nn -= 1, nn === 0 && Ee("click", window, ml, true), Ee("click", window, n, true), r();
  })) : i(), ho(t);
}
function Ar(e, t) {
  return Te(e, (o) => {
    o !== void 0 && (t.value = o);
  }), B(() => e.value === void 0 ? t.value : e.value);
}
function Nr() {
  const e = W(false);
  return pt(() => {
    e.value = true;
  }), ho(e);
}
function mc(e, t) {
  return B(() => {
    for (const o of t) if (e[o] !== void 0) return e[o];
    return e[t[t.length - 1]];
  });
}
const Ug = (typeof window > "u" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function Kg() {
  return Ug;
}
function Yg(e = {}, t) {
  const o = xs({ ctrl: false, command: false, win: false, shift: false, tab: false }), { keydown: r, keyup: n } = e, i = (s) => {
    switch (s.key) {
      case "Control":
        o.ctrl = true;
        break;
      case "Meta":
        o.command = true, o.win = true;
        break;
      case "Shift":
        o.shift = true;
        break;
      case "Tab":
        o.tab = true;
        break;
    }
    r !== void 0 && Object.keys(r).forEach((d) => {
      if (d !== s.key) return;
      const c = r[d];
      if (typeof c == "function") c(s);
      else {
        const { stop: u = false, prevent: p = false } = c;
        u && s.stopPropagation(), p && s.preventDefault(), c.handler(s);
      }
    });
  }, a = (s) => {
    switch (s.key) {
      case "Control":
        o.ctrl = false;
        break;
      case "Meta":
        o.command = false, o.win = false;
        break;
      case "Shift":
        o.shift = false;
        break;
      case "Tab":
        o.tab = false;
        break;
    }
    n !== void 0 && Object.keys(n).forEach((d) => {
      if (d !== s.key) return;
      const c = n[d];
      if (typeof c == "function") c(s);
      else {
        const { stop: u = false, prevent: p = false } = c;
        u && s.stopPropagation(), p && s.preventDefault(), c.handler(s);
      }
    });
  }, l = () => {
    (t === void 0 || t.value) && (ke("keydown", document, i), ke("keyup", document, a)), t !== void 0 && Te(t, (s) => {
      s ? (ke("keydown", document, i), ke("keyup", document, a)) : (Ee("keydown", document, i), Ee("keyup", document, a));
    });
  };
  return da() ? (Ao(l), ot(() => {
    (t === void 0 || t.value) && (Ee("keydown", document, i), Ee("keyup", document, a));
  })) : l(), ho(o);
}
function yS(e) {
  return e;
}
const wS = "n-internal-select-menu", Xg = "n-internal-select-menu-body", Wr = "n-drawer-body", fa = "n-drawer", jr = "n-modal-body", Zg = "n-modal-provider", vc = "n-modal", er = "n-popover-body", bc = "__disabled__";
function Zo(e) {
  const t = de(jr, null), o = de(Wr, null), r = de(er, null), n = de(Xg, null), i = W();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    pt(() => {
      ke("fullscreenchange", document, a);
    }), ot(() => {
      Ee("fullscreenchange", document, a);
    });
  }
  return ht(() => {
    var a;
    const { to: l } = e;
    return l !== void 0 ? l === false ? bc : l === true ? i.value || "body" : l : (t == null ? void 0 : t.value) ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : (o == null ? void 0 : o.value) ? o.value : (r == null ? void 0 : r.value) ? r.value : (n == null ? void 0 : n.value) ? n.value : l ?? (i.value || "body");
  });
}
Zo.tdkey = bc;
Zo.propTo = { type: [String, Object, Boolean], default: void 0 };
function Jg(e, t, o) {
  var r;
  const n = de(e, null);
  if (n === null) return;
  const i = (r = mo()) === null || r === void 0 ? void 0 : r.proxy;
  Te(o, a), a(o.value), ot(() => {
    a(void 0, o.value);
  });
  function a(d, c) {
    if (!n) return;
    const u = n[t];
    c !== void 0 && l(u, c), d !== void 0 && s(u, d);
  }
  function l(d, c) {
    d[c] || (d[c] = []), d[c].splice(d[c].findIndex((u) => u === i), 1);
  }
  function s(d, c) {
    d[c] || (d[c] = []), ~d[c].findIndex((u) => u === i) || d[c].push(i);
  }
}
function SS(e, t, o) {
  const r = de(e, null);
  r !== null && (t in r || (r[t] = []), r[t].push(o.value), Te(o, (n, i) => {
    const a = r[t], l = a.findIndex((s) => s === i);
    ~l && a.splice(l, 1), a.push(n);
  }), ot(() => {
    const n = r[t], i = n.findIndex((a) => a === o.value);
    ~i && n.splice(i, 1);
  }));
}
function $S(e, t, o) {
  const r = de(e, null);
  r !== null && (t in r || (r[t] = []), pt(() => {
    const n = o();
    n && r[t].push(n);
  }), ot(() => {
    const n = r[t], i = o(), a = n.findIndex((l) => l === i);
    ~a && n.splice(a, 1);
  }));
}
function Qg(e, t, o) {
  const r = W(e.value);
  let n = null;
  return Te(e, (i) => {
    n !== null && window.clearTimeout(n), i === true ? o && !o.value ? r.value = true : n = window.setTimeout(() => {
      r.value = true;
    }, t) : r.value = false;
  }), r;
}
const tr = typeof document < "u" && typeof window < "u", ha = W(false);
function bl() {
  ha.value = true;
}
function xl() {
  ha.value = false;
}
let fr = 0;
function xc() {
  return tr && (Ao(() => {
    fr || (window.addEventListener("compositionstart", bl), window.addEventListener("compositionend", xl)), fr++;
  }), ot(() => {
    fr <= 1 ? (window.removeEventListener("compositionstart", bl), window.removeEventListener("compositionend", xl), fr = 0) : fr--;
  })), ha;
}
let Oo = 0, Cl = "", yl = "", wl = "", Sl = "";
const $l = W("0px");
function Cc(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let o, r = false;
  const n = () => {
    t.style.marginRight = Cl, t.style.overflow = yl, t.style.overflowX = wl, t.style.overflowY = Sl, $l.value = "0px";
  };
  pt(() => {
    o = Te(e, (i) => {
      if (i) {
        if (!Oo) {
          const a = window.innerWidth - t.offsetWidth;
          a > 0 && (Cl = t.style.marginRight, t.style.marginRight = `${a}px`, $l.value = `${a}px`), yl = t.style.overflow, wl = t.style.overflowX, Sl = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        r = true, Oo++;
      } else Oo--, Oo || n(), r = false;
    }, { immediate: true });
  }), ot(() => {
    o == null ? void 0 : o(), r && (Oo--, Oo || n(), r = false);
  });
}
function em(e) {
  const t = { isDeactivated: false };
  let o = false;
  return bs(() => {
    if (t.isDeactivated = false, !o) {
      o = true;
      return;
    }
    e();
  }), Yi(() => {
    t.isDeactivated = true, o || (o = true);
  }), t;
}
function Ti(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  return r();
}
function zi(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(zo(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        zi(r, t, o);
        return;
      }
      if (r.type === $t) {
        if (r.children === null) return;
        Array.isArray(r.children) && zi(r.children, t, o);
      } else r.type !== kn && o.push(r);
    }
  }), o;
}
function Pl(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  const n = zi(r());
  if (n.length === 1) return n[0];
  throw new Error(`[vueuc/${e}]: slot[${o}] should have exactly one child.`);
}
let so = null;
function yc() {
  if (so === null && (so = document.getElementById("v-binder-view-measurer"), so === null)) {
    so = document.createElement("div"), so.id = "v-binder-view-measurer";
    const { style: e } = so;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(so);
  }
  return so.getBoundingClientRect();
}
function tm(e, t) {
  const o = yc();
  return { top: t, left: e, height: 0, width: 0, right: o.width - e, bottom: o.height - t };
}
function Jn(e) {
  const t = e.getBoundingClientRect(), o = yc();
  return { left: t.left - o.left, top: t.top - o.top, bottom: o.height + o.top - t.bottom, right: o.width + o.left - t.right, width: t.width, height: t.height };
}
function om(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function wc(e) {
  if (e === null) return null;
  const t = om(e);
  if (t === null) return null;
  if (t.nodeType === 9) return document;
  if (t.nodeType === 1) {
    const { overflow: o, overflowX: r, overflowY: n } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(o + n + r)) return t;
  }
  return wc(t);
}
const Sc = J({ name: "Binder", props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(e) {
  var t;
  Se("VBinder", (t = mo()) === null || t === void 0 ? void 0 : t.proxy);
  const o = de("VBinder", null), r = W(null), n = (m) => {
    r.value = m, o && e.syncTargetWithParent && o.setTargetRef(m);
  };
  let i = [];
  const a = () => {
    let m = r.value;
    for (; m = wc(m), m !== null; ) i.push(m);
    for (const C of i) ke("scroll", C, u, true);
  }, l = () => {
    for (const m of i) Ee("scroll", m, u, true);
    i = [];
  }, s = /* @__PURE__ */ new Set(), d = (m) => {
    s.size === 0 && a(), s.has(m) || s.add(m);
  }, c = (m) => {
    s.has(m) && s.delete(m), s.size === 0 && l();
  }, u = () => {
    Pg(p);
  }, p = () => {
    s.forEach((m) => m());
  }, h = /* @__PURE__ */ new Set(), f = (m) => {
    h.size === 0 && ke("resize", window, v), h.has(m) || h.add(m);
  }, g = (m) => {
    h.has(m) && h.delete(m), h.size === 0 && Ee("resize", window, v);
  }, v = () => {
    h.forEach((m) => m());
  };
  return ot(() => {
    Ee("resize", window, v), l();
  }), { targetRef: r, setTargetRef: n, addScrollListener: d, removeScrollListener: c, addResizeListener: f, removeResizeListener: g };
}, render() {
  return Ti("binder", this.$slots);
} }), $c = J({ name: "Target", setup() {
  const { setTargetRef: e, syncTarget: t } = de("VBinder");
  return { syncTarget: t, setTargetDirective: { mounted: e, updated: e } };
}, render() {
  const { syncTarget: e, setTargetDirective: t } = this;
  return e ? Lt(Pl("follower", this.$slots), [[t]]) : Pl("follower", this.$slots);
} }), Fo = "@@mmoContext", rm = { mounted(e, { value: t }) {
  e[Fo] = { handler: void 0 }, typeof t == "function" && (e[Fo].handler = t, ke("mousemoveoutside", e, t));
}, updated(e, { value: t }) {
  const o = e[Fo];
  typeof t == "function" ? o.handler ? o.handler !== t && (Ee("mousemoveoutside", e, o.handler), o.handler = t, ke("mousemoveoutside", e, t)) : (e[Fo].handler = t, ke("mousemoveoutside", e, t)) : o.handler && (Ee("mousemoveoutside", e, o.handler), o.handler = void 0);
}, unmounted(e) {
  const { handler: t } = e[Fo];
  t && Ee("mousemoveoutside", e, t), e[Fo].handler = void 0;
} }, Lo = "@@coContext", wn = { mounted(e, { value: t, modifiers: o }) {
  e[Lo] = { handler: void 0 }, typeof t == "function" && (e[Lo].handler = t, ke("clickoutside", e, t, { capture: o.capture }));
}, updated(e, { value: t, modifiers: o }) {
  const r = e[Lo];
  typeof t == "function" ? r.handler ? r.handler !== t && (Ee("clickoutside", e, r.handler, { capture: o.capture }), r.handler = t, ke("clickoutside", e, t, { capture: o.capture })) : (e[Lo].handler = t, ke("clickoutside", e, t, { capture: o.capture })) : r.handler && (Ee("clickoutside", e, r.handler, { capture: o.capture }), r.handler = void 0);
}, unmounted(e, { modifiers: t }) {
  const { handler: o } = e[Lo];
  o && Ee("clickoutside", e, o, { capture: t.capture }), e[Lo].handler = void 0;
} };
function nm(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class im {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(t, o) {
    const { elementZIndex: r } = this;
    if (o !== void 0) {
      t.style.zIndex = `${o}`, r.delete(t);
      return;
    }
    const { nextZIndex: n } = this;
    r.has(t) && r.get(t) + 1 === this.nextZIndex || (t.style.zIndex = `${n}`, r.set(t, n), this.nextZIndex = n + 1, this.squashState());
  }
  unregister(t, o) {
    const { elementZIndex: r } = this;
    r.has(t) ? r.delete(t) : o === void 0 && nm("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: t } = this;
    t || (this.nextZIndex = 2e3), this.nextZIndex - t > 2500 && this.rearrange();
  }
  rearrange() {
    const t = Array.from(this.elementZIndex.entries());
    t.sort((o, r) => o[1] - r[1]), this.nextZIndex = 2e3, t.forEach((o) => {
      const r = o[0], n = this.nextZIndex++;
      `${n}` !== r.style.zIndex && (r.style.zIndex = `${n}`);
    });
  }
}
const Qn = new im(), Do = "@@ziContext", An = { mounted(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o;
  e[Do] = { enabled: !!n, initialized: false }, n && (Qn.ensureZIndex(e, r), e[Do].initialized = true);
}, updated(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o, i = e[Do].enabled;
  n && !i && (Qn.ensureZIndex(e, r), e[Do].initialized = true), e[Do].enabled = !!n;
}, unmounted(e, t) {
  if (!e[Do].initialized) return;
  const { value: o = {} } = t, { zIndex: r } = o;
  Qn.unregister(e, r);
} }, am = "@css-render/vue3-ssr";
function lm(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function sm(e, t, o) {
  const { styles: r, ids: n } = o;
  n.has(e) || r !== null && (n.add(e), r.push(lm(e, t)));
}
const cm = typeof document < "u";
function or() {
  if (cm) return;
  const e = de(am, null);
  if (e !== null) return { adapter: (t, o) => sm(t, o, e), context: e };
}
function Rl(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: xr } = ic(), Pc = "vueuc-style";
function El(e) {
  return typeof e == "string" ? document.querySelector(e) : e() || null;
}
const pa = J({ name: "LazyTeleport", props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(e) {
  return { showTeleport: Ng(be(e, "show")), mergedTo: B(() => {
    const { to: t } = e;
    return t ?? "body";
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? Ti("lazy-teleport", this.$slots) : b(Cu, { disabled: this.disabled, to: this.mergedTo }, Ti("lazy-teleport", this.$slots)) : null;
} }), an = { top: "bottom", bottom: "top", left: "right", right: "left" }, kl = { start: "end", center: "center", end: "start" }, ei = { top: "height", bottom: "height", left: "width", right: "width" }, dm = { "bottom-start": "top left", bottom: "top center", "bottom-end": "top right", "top-start": "bottom left", top: "bottom center", "top-end": "bottom right", "right-start": "top left", right: "center left", "right-end": "bottom left", "left-start": "top right", left: "center right", "left-end": "bottom right" }, um = { "bottom-start": "bottom left", bottom: "bottom center", "bottom-end": "bottom right", "top-start": "top left", top: "top center", "top-end": "top right", "right-start": "top right", right: "center right", "right-end": "bottom right", "left-start": "top left", left: "center left", "left-end": "bottom left" }, fm = { "bottom-start": "right", "bottom-end": "left", "top-start": "right", "top-end": "left", "right-start": "bottom", "right-end": "top", "left-start": "bottom", "left-end": "top" }, Tl = { top: true, bottom: false, left: true, right: false }, zl = { top: "end", bottom: "start", left: "end", right: "start" };
function hm(e, t, o, r, n, i) {
  if (!n || i) return { placement: e, top: 0, left: 0 };
  const [a, l] = e.split("-");
  let s = l ?? "center", d = { top: 0, left: 0 };
  const c = (h, f, g) => {
    let v = 0, m = 0;
    const C = o[h] - t[f] - t[h];
    return C > 0 && r && (g ? m = Tl[f] ? C : -C : v = Tl[f] ? C : -C), { left: v, top: m };
  }, u = a === "left" || a === "right";
  if (s !== "center") {
    const h = fm[e], f = an[h], g = ei[h];
    if (o[g] > t[g]) {
      if (t[h] + t[g] < o[g]) {
        const v = (o[g] - t[g]) / 2;
        t[h] < v || t[f] < v ? t[h] < t[f] ? (s = kl[l], d = c(g, f, u)) : d = c(g, h, u) : s = "center";
      }
    } else o[g] < t[g] && t[f] < 0 && t[h] > t[f] && (s = kl[l]);
  } else {
    const h = a === "bottom" || a === "top" ? "left" : "top", f = an[h], g = ei[h], v = (o[g] - t[g]) / 2;
    (t[h] < v || t[f] < v) && (t[h] > t[f] ? (s = zl[h], d = c(g, h, u)) : (s = zl[f], d = c(g, f, u)));
  }
  let p = a;
  return t[a] < o[ei[a]] && t[a] < t[an[a]] && (p = an[a]), { placement: s !== "center" ? `${p}-${s}` : p, left: d.left, top: d.top };
}
function pm(e, t) {
  return t ? um[e] : dm[e];
}
function gm(e, t, o, r, n, i) {
  if (i) switch (e) {
    case "bottom-start":
      return { top: `${Math.round(o.top - t.top + o.height)}px`, left: `${Math.round(o.left - t.left)}px`, transform: "translateY(-100%)" };
    case "bottom-end":
      return { top: `${Math.round(o.top - t.top + o.height)}px`, left: `${Math.round(o.left - t.left + o.width)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "top-start":
      return { top: `${Math.round(o.top - t.top)}px`, left: `${Math.round(o.left - t.left)}px`, transform: "" };
    case "top-end":
      return { top: `${Math.round(o.top - t.top)}px`, left: `${Math.round(o.left - t.left + o.width)}px`, transform: "translateX(-100%)" };
    case "right-start":
      return { top: `${Math.round(o.top - t.top)}px`, left: `${Math.round(o.left - t.left + o.width)}px`, transform: "translateX(-100%)" };
    case "right-end":
      return { top: `${Math.round(o.top - t.top + o.height)}px`, left: `${Math.round(o.left - t.left + o.width)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "left-start":
      return { top: `${Math.round(o.top - t.top)}px`, left: `${Math.round(o.left - t.left)}px`, transform: "" };
    case "left-end":
      return { top: `${Math.round(o.top - t.top + o.height)}px`, left: `${Math.round(o.left - t.left)}px`, transform: "translateY(-100%)" };
    case "top":
      return { top: `${Math.round(o.top - t.top)}px`, left: `${Math.round(o.left - t.left + o.width / 2)}px`, transform: "translateX(-50%)" };
    case "right":
      return { top: `${Math.round(o.top - t.top + o.height / 2)}px`, left: `${Math.round(o.left - t.left + o.width)}px`, transform: "translateX(-100%) translateY(-50%)" };
    case "left":
      return { top: `${Math.round(o.top - t.top + o.height / 2)}px`, left: `${Math.round(o.left - t.left)}px`, transform: "translateY(-50%)" };
    default:
      return { top: `${Math.round(o.top - t.top + o.height)}px`, left: `${Math.round(o.left - t.left + o.width / 2)}px`, transform: "translateX(-50%) translateY(-100%)" };
  }
  switch (e) {
    case "bottom-start":
      return { top: `${Math.round(o.top - t.top + o.height + r)}px`, left: `${Math.round(o.left - t.left + n)}px`, transform: "" };
    case "bottom-end":
      return { top: `${Math.round(o.top - t.top + o.height + r)}px`, left: `${Math.round(o.left - t.left + o.width + n)}px`, transform: "translateX(-100%)" };
    case "top-start":
      return { top: `${Math.round(o.top - t.top + r)}px`, left: `${Math.round(o.left - t.left + n)}px`, transform: "translateY(-100%)" };
    case "top-end":
      return { top: `${Math.round(o.top - t.top + r)}px`, left: `${Math.round(o.left - t.left + o.width + n)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "right-start":
      return { top: `${Math.round(o.top - t.top + r)}px`, left: `${Math.round(o.left - t.left + o.width + n)}px`, transform: "" };
    case "right-end":
      return { top: `${Math.round(o.top - t.top + o.height + r)}px`, left: `${Math.round(o.left - t.left + o.width + n)}px`, transform: "translateY(-100%)" };
    case "left-start":
      return { top: `${Math.round(o.top - t.top + r)}px`, left: `${Math.round(o.left - t.left + n)}px`, transform: "translateX(-100%)" };
    case "left-end":
      return { top: `${Math.round(o.top - t.top + o.height + r)}px`, left: `${Math.round(o.left - t.left + n)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "top":
      return { top: `${Math.round(o.top - t.top + r)}px`, left: `${Math.round(o.left - t.left + o.width / 2 + n)}px`, transform: "translateY(-100%) translateX(-50%)" };
    case "right":
      return { top: `${Math.round(o.top - t.top + o.height / 2 + r)}px`, left: `${Math.round(o.left - t.left + o.width + n)}px`, transform: "translateY(-50%)" };
    case "left":
      return { top: `${Math.round(o.top - t.top + o.height / 2 + r)}px`, left: `${Math.round(o.left - t.left + n)}px`, transform: "translateY(-50%) translateX(-100%)" };
    default:
      return { top: `${Math.round(o.top - t.top + o.height + r)}px`, left: `${Math.round(o.left - t.left + o.width / 2 + n)}px`, transform: "translateX(-50%)" };
  }
}
const mm = xr([xr(".v-binder-follower-container", { position: "absolute", left: "0", right: "0", top: "0", height: "0", pointerEvents: "none", zIndex: "auto" }), xr(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [xr("> *", { pointerEvents: "all" })])]), Rc = J({ name: "Follower", inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: "bottom" }, syncTrigger: { type: Array, default: ["resize", "scroll"] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(e) {
  const t = de("VBinder"), o = ht(() => e.enabled !== void 0 ? e.enabled : e.show), r = W(null), n = W(null), i = () => {
    const { syncTrigger: p } = e;
    p.includes("scroll") && t.addScrollListener(s), p.includes("resize") && t.addResizeListener(s);
  }, a = () => {
    t.removeScrollListener(s), t.removeResizeListener(s);
  };
  pt(() => {
    o.value && (s(), i());
  });
  const l = or();
  mm.mount({ id: "vueuc/binder", head: true, anchorMetaName: Pc, ssr: l }), ot(() => {
    a();
  }), jg(() => {
    o.value && s();
  });
  const s = () => {
    if (!o.value) return;
    const p = r.value;
    if (p === null) return;
    const h = t.targetRef, { x: f, y: g, overlap: v } = e, m = f !== void 0 && g !== void 0 ? tm(f, g) : Jn(h);
    p.style.setProperty("--v-target-width", `${Math.round(m.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(m.height)}px`);
    const { width: C, minWidth: S, placement: w, internalShift: E, flip: P } = e;
    p.setAttribute("v-placement", w), v ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
    const { style: x } = p;
    C === "target" ? x.width = `${m.width}px` : C !== void 0 ? x.width = C : x.width = "", S === "target" ? x.minWidth = `${m.width}px` : S !== void 0 ? x.minWidth = S : x.minWidth = "";
    const $ = Jn(p), R = Jn(n.value), { left: O, top: _, placement: y } = hm(w, m, $, E, P, v), A = pm(y, v), { left: T, top: z, transform: j } = gm(y, R, m, _, O, v);
    p.setAttribute("v-placement", y), p.style.setProperty("--v-offset-left", `${Math.round(O)}px`), p.style.setProperty("--v-offset-top", `${Math.round(_)}px`), p.style.transform = `translateX(${T}) translateY(${z}) ${j}`, p.style.setProperty("--v-transform-origin", A), p.style.transformOrigin = A;
  };
  Te(o, (p) => {
    p ? (i(), d()) : a();
  });
  const d = () => {
    oo().then(s).catch((p) => console.error(p));
  };
  ["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach((p) => {
    Te(be(e, p), s);
  }), ["teleportDisabled"].forEach((p) => {
    Te(be(e, p), d);
  }), Te(be(e, "syncTrigger"), (p) => {
    p.includes("resize") ? t.addResizeListener(s) : t.removeResizeListener(s), p.includes("scroll") ? t.addScrollListener(s) : t.removeScrollListener(s);
  });
  const c = Nr(), u = ht(() => {
    const { to: p } = e;
    if (p !== void 0) return p;
    c.value;
  });
  return { VBinder: t, mergedEnabled: o, offsetContainerRef: n, followerRef: r, mergedTo: u, syncPosition: s };
}, render() {
  return b(pa, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var e, t;
    const o = b("div", { class: ["v-binder-follower-container", this.containerClass], ref: "offsetContainerRef" }, [b("div", { class: "v-binder-follower-content", ref: "followerRef" }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))]);
    return this.zindexable ? Lt(o, [[An, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : o;
  } });
} });
var Eo = [], vm = function() {
  return Eo.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, bm = function() {
  return Eo.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Il = "ResizeObserver loop completed with undelivered notifications.", xm = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: Il }) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = Il), window.dispatchEvent(e);
}, Mr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Mr || (Mr = {}));
var ko = function(e) {
  return Object.freeze(e);
}, Cm = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.inlineSize = t, this.blockSize = o, ko(this);
  }
  return e;
})(), Ec = (function() {
  function e(t, o, r, n) {
    return this.x = t, this.y = o, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, ko(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, o = t.x, r = t.y, n = t.top, i = t.right, a = t.bottom, l = t.left, s = t.width, d = t.height;
    return { x: o, y: r, top: n, right: i, bottom: a, left: l, width: s, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
})(), ga = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, kc = function(e) {
  if (ga(e)) {
    var t = e.getBBox(), o = t.width, r = t.height;
    return !o && !r;
  }
  var n = e, i = n.offsetWidth, a = n.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, Al = function(e) {
  var t;
  if (e instanceof Element) return true;
  var o = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(o && e instanceof o.Element);
}, ym = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image") break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
}, $r = typeof window < "u" ? window : {}, ln = /* @__PURE__ */ new WeakMap(), Ml = /auto|scroll/, wm = /^tb|vertical/, Sm = /msie|trident/i.test($r.navigator && $r.navigator.userAgent), At = function(e) {
  return parseFloat(e || "0");
}, Ko = function(e, t, o) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), o === void 0 && (o = false), new Cm((o ? t : e) || 0, (o ? e : t) || 0);
}, Bl = ko({ devicePixelContentBoxSize: Ko(), borderBoxSize: Ko(), contentBoxSize: Ko(), contentRect: new Ec(0, 0, 0, 0) }), Tc = function(e, t) {
  if (t === void 0 && (t = false), ln.has(e) && !t) return ln.get(e);
  if (kc(e)) return ln.set(e, Bl), Bl;
  var o = getComputedStyle(e), r = ga(e) && e.ownerSVGElement && e.getBBox(), n = !Sm && o.boxSizing === "border-box", i = wm.test(o.writingMode || ""), a = !r && Ml.test(o.overflowY || ""), l = !r && Ml.test(o.overflowX || ""), s = r ? 0 : At(o.paddingTop), d = r ? 0 : At(o.paddingRight), c = r ? 0 : At(o.paddingBottom), u = r ? 0 : At(o.paddingLeft), p = r ? 0 : At(o.borderTopWidth), h = r ? 0 : At(o.borderRightWidth), f = r ? 0 : At(o.borderBottomWidth), g = r ? 0 : At(o.borderLeftWidth), v = u + d, m = s + c, C = g + h, S = p + f, w = l ? e.offsetHeight - S - e.clientHeight : 0, E = a ? e.offsetWidth - C - e.clientWidth : 0, P = n ? v + C : 0, x = n ? m + S : 0, $ = r ? r.width : At(o.width) - P - E, R = r ? r.height : At(o.height) - x - w, O = $ + v + E + C, _ = R + m + w + S, y = ko({ devicePixelContentBoxSize: Ko(Math.round($ * devicePixelRatio), Math.round(R * devicePixelRatio), i), borderBoxSize: Ko(O, _, i), contentBoxSize: Ko($, R, i), contentRect: new Ec(u, s, $, R) });
  return ln.set(e, y), y;
}, zc = function(e, t, o) {
  var r = Tc(e, o), n = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case Mr.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case Mr.BORDER_BOX:
      return n;
    default:
      return i;
  }
}, $m = /* @__PURE__ */ (function() {
  function e(t) {
    var o = Tc(t);
    this.target = t, this.contentRect = o.contentRect, this.borderBoxSize = ko([o.borderBoxSize]), this.contentBoxSize = ko([o.contentBoxSize]), this.devicePixelContentBoxSize = ko([o.devicePixelContentBoxSize]);
  }
  return e;
})(), Ic = function(e) {
  if (kc(e)) return 1 / 0;
  for (var t = 0, o = e.parentNode; o; ) t += 1, o = o.parentNode;
  return t;
}, Pm = function() {
  var e = 1 / 0, t = [];
  Eo.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var l = [];
      a.activeTargets.forEach(function(d) {
        var c = new $m(d.target), u = Ic(d.target);
        l.push(c), d.lastReportedSize = zc(d.target, d.observedBox), u < e && (e = u);
      }), t.push(function() {
        a.callback.call(a.observer, l, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var o = 0, r = t; o < r.length; o++) {
    var n = r[o];
    n();
  }
  return e;
}, Ol = function(e) {
  Eo.forEach(function(o) {
    o.activeTargets.splice(0, o.activeTargets.length), o.skippedTargets.splice(0, o.skippedTargets.length), o.observationTargets.forEach(function(n) {
      n.isActive() && (Ic(n.target) > e ? o.activeTargets.push(n) : o.skippedTargets.push(n));
    });
  });
}, Rm = function() {
  var e = 0;
  for (Ol(e); vm(); ) e = Pm(), Ol(e);
  return bm() && xm(), e > 0;
}, ti, Ac = [], Em = function() {
  return Ac.splice(0).forEach(function(e) {
    return e();
  });
}, km = function(e) {
  if (!ti) {
    var t = 0, o = document.createTextNode(""), r = { characterData: true };
    new MutationObserver(function() {
      return Em();
    }).observe(o, r), ti = function() {
      o.textContent = "".concat(t ? t-- : t++);
    };
  }
  Ac.push(e), ti();
}, Tm = function(e) {
  km(function() {
    requestAnimationFrame(e);
  });
}, pn = 0, zm = function() {
  return !!pn;
}, Im = 250, Am = { attributes: true, characterData: true, childList: true, subtree: true }, Fl = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], Ll = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, oi = false, Mm = (function() {
  function e() {
    var t = this;
    this.stopped = true, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var o = this;
    if (t === void 0 && (t = Im), !oi) {
      oi = true;
      var r = Ll(t);
      Tm(function() {
        var n = false;
        try {
          n = Rm();
        } finally {
          if (oi = false, t = r - Ll(), !zm()) return;
          n ? o.run(1e3) : t > 0 ? o.run(t) : o.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, o = function() {
      return t.observer && t.observer.observe(document.body, Am);
    };
    document.body ? o() : $r.addEventListener("DOMContentLoaded", o);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), Fl.forEach(function(o) {
      return $r.addEventListener(o, t.listener, true);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Fl.forEach(function(o) {
      return $r.removeEventListener(o, t.listener, true);
    }), this.stopped = true);
  }, e;
})(), Ii = new Mm(), Dl = function(e) {
  !pn && e > 0 && Ii.start(), pn += e, !pn && Ii.stop();
}, Bm = function(e) {
  return !ga(e) && !ym(e) && getComputedStyle(e).display === "inline";
}, Om = (function() {
  function e(t, o) {
    this.target = t, this.observedBox = o || Mr.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e.prototype.isActive = function() {
    var t = zc(this.target, this.observedBox, true);
    return Bm(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
})(), Fm = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = o;
  }
  return e;
})(), sn = /* @__PURE__ */ new WeakMap(), Hl = function(e, t) {
  for (var o = 0; o < e.length; o += 1) if (e[o].target === t) return o;
  return -1;
}, cn = (function() {
  function e() {
  }
  return e.connect = function(t, o) {
    var r = new Fm(t, o);
    sn.set(t, r);
  }, e.observe = function(t, o, r) {
    var n = sn.get(t), i = n.observationTargets.length === 0;
    Hl(n.observationTargets, o) < 0 && (i && Eo.push(n), n.observationTargets.push(new Om(o, r && r.box)), Dl(1), Ii.schedule());
  }, e.unobserve = function(t, o) {
    var r = sn.get(t), n = Hl(r.observationTargets, o), i = r.observationTargets.length === 1;
    n >= 0 && (i && Eo.splice(Eo.indexOf(r), 1), r.observationTargets.splice(n, 1), Dl(-1));
  }, e.disconnect = function(t) {
    var o = this, r = sn.get(t);
    r.observationTargets.slice().forEach(function(n) {
      return o.unobserve(t, n.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
})(), Lm = (function() {
  function e(t) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    cn.connect(this, t);
  }
  return e.prototype.observe = function(t, o) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Al(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    cn.observe(this, t, o);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Al(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    cn.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    cn.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
})();
class Dm {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Lm)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(t) {
    for (const o of t) {
      const r = this.elHandlersMap.get(o.target);
      r !== void 0 && r(o);
    }
  }
  registerHandler(t, o) {
    this.elHandlersMap.set(t, o), this.observer.observe(t);
  }
  unregisterHandler(t) {
    this.elHandlersMap.has(t) && (this.elHandlersMap.delete(t), this.observer.unobserve(t));
  }
}
const _l = new Dm(), Ai = J({ name: "ResizeObserver", props: { onResize: Function }, setup(e) {
  let t = false;
  const o = mo().proxy;
  function r(n) {
    const { onResize: i } = e;
    i !== void 0 && i(n);
  }
  pt(() => {
    const n = o.$el;
    if (n === void 0) {
      Rl("resize-observer", "$el does not exist.");
      return;
    }
    if (n.nextElementSibling !== n.nextSibling && n.nodeType === 3 && n.nodeValue !== "") {
      Rl("resize-observer", "$el can not be observed (it may be a text node).");
      return;
    }
    n.nextElementSibling !== null && (_l.registerHandler(n.nextElementSibling, r), t = true);
  }), ot(() => {
    t && _l.unregisterHandler(o.$el.nextElementSibling);
  });
}, render() {
  return ys(this.$slots, "default");
} }), Yt = "v-hidden", Hm = xr("[v-hidden]", { display: "none!important" }), PS = J({ name: "Overflow", props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(e, { slots: t }) {
  const o = W(null), r = W(null);
  function n(a) {
    const { value: l } = o, { getCounter: s, getTail: d } = e;
    let c;
    if (s !== void 0 ? c = s() : c = r.value, !l || !c) return;
    c.hasAttribute(Yt) && c.removeAttribute(Yt);
    const { children: u } = l;
    if (a.showAllItemsBeforeCalculate) for (const S of u) S.hasAttribute(Yt) && S.removeAttribute(Yt);
    const p = l.offsetWidth, h = [], f = t.tail ? d == null ? void 0 : d() : null;
    let g = f ? f.offsetWidth : 0, v = false;
    const m = l.children.length - (t.tail ? 1 : 0);
    for (let S = 0; S < m - 1; ++S) {
      if (S < 0) continue;
      const w = u[S];
      if (v) {
        w.hasAttribute(Yt) || w.setAttribute(Yt, "");
        continue;
      } else w.hasAttribute(Yt) && w.removeAttribute(Yt);
      const E = w.offsetWidth;
      if (g += E, h[S] = E, g > p) {
        const { updateCounter: P } = e;
        for (let x = S; x >= 0; --x) {
          const $ = m - 1 - x;
          P !== void 0 ? P($) : c.textContent = `${$}`;
          const R = c.offsetWidth;
          if (g -= h[x], g + R <= p || x === 0) {
            v = true, S = x - 1, f && (S === -1 ? (f.style.maxWidth = `${p - R}px`, f.style.boxSizing = "border-box") : f.style.maxWidth = "");
            const { onUpdateCount: O } = e;
            O && O($);
            break;
          }
        }
      }
    }
    const { onUpdateOverflow: C } = e;
    v ? C !== void 0 && C(true) : (C !== void 0 && C(false), c.setAttribute(Yt, ""));
  }
  const i = or();
  return Hm.mount({ id: "vueuc/overflow", head: true, anchorMetaName: Pc, ssr: i }), pt(() => n({ showAllItemsBeforeCalculate: false })), { selfRef: o, counterRef: r, sync: n };
}, render() {
  const { $slots: e } = this;
  return oo(() => this.sync({ showAllItemsBeforeCalculate: false })), b("div", { class: "v-overflow", ref: "selfRef" }, [ys(e, "default"), e.counter ? e.counter() : b("span", { style: { display: "inline-block" }, ref: "counterRef" }), e.tail ? e.tail() : null]);
} });
function Mc(e) {
  return e instanceof HTMLElement;
}
function Bc(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const o = e.childNodes[t];
    if (Mc(o) && (Fc(o) || Bc(o))) return true;
  }
  return false;
}
function Oc(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const o = e.childNodes[t];
    if (Mc(o) && (Fc(o) || Oc(o))) return true;
  }
  return false;
}
function Fc(e) {
  if (!_m(e)) return false;
  try {
    e.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === e;
}
function _m(e) {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null) return true;
  if (e.getAttribute("disabled")) return false;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return e.type !== "hidden" && e.type !== "file";
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
}
let hr = [];
const ma = J({ name: "FocusTrap", props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(e) {
  const t = ki(), o = W(null), r = W(null);
  let n = false, i = false;
  const a = typeof document > "u" ? null : document.activeElement;
  function l() {
    return hr[hr.length - 1] === t;
  }
  function s(v) {
    var m;
    v.code === "Escape" && l() && ((m = e.onEsc) === null || m === void 0 || m.call(e, v));
  }
  pt(() => {
    Te(() => e.active, (v) => {
      v ? (u(), ke("keydown", document, s)) : (Ee("keydown", document, s), n && p());
    }, { immediate: true });
  }), ot(() => {
    Ee("keydown", document, s), n && p();
  });
  function d(v) {
    if (!i && l()) {
      const m = c();
      if (m === null || m.contains(Ir(v))) return;
      h("first");
    }
  }
  function c() {
    const v = o.value;
    if (v === null) return null;
    let m = v;
    for (; m = m.nextSibling, !(m === null || m instanceof Element && m.tagName === "DIV"); ) ;
    return m;
  }
  function u() {
    var v;
    if (!e.disabled) {
      if (hr.push(t), e.autoFocus) {
        const { initialFocusTo: m } = e;
        m === void 0 ? h("first") : (v = El(m)) === null || v === void 0 || v.focus({ preventScroll: true });
      }
      n = true, document.addEventListener("focus", d, true);
    }
  }
  function p() {
    var v;
    if (e.disabled || (document.removeEventListener("focus", d, true), hr = hr.filter((C) => C !== t), l())) return;
    const { finalFocusTo: m } = e;
    m !== void 0 ? (v = El(m)) === null || v === void 0 || v.focus({ preventScroll: true }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = true, a.focus({ preventScroll: true }), i = false);
  }
  function h(v) {
    if (l() && e.active) {
      const m = o.value, C = r.value;
      if (m !== null && C !== null) {
        const S = c();
        if (S == null || S === C) {
          i = true, m.focus({ preventScroll: true }), i = false;
          return;
        }
        i = true;
        const w = v === "first" ? Bc(S) : Oc(S);
        i = false, w || (i = true, m.focus({ preventScroll: true }), i = false);
      }
    }
  }
  function f(v) {
    if (i) return;
    const m = c();
    m !== null && (v.relatedTarget !== null && m.contains(v.relatedTarget) ? h("last") : h("first"));
  }
  function g(v) {
    i || (v.relatedTarget !== null && v.relatedTarget === o.value ? h("last") : h("first"));
  }
  return { focusableStartRef: o, focusableEndRef: r, focusableStyle: "position: absolute; height: 0; width: 0;", handleStartFocus: f, handleEndFocus: g };
}, render() {
  const { default: e } = this.$slots;
  if (e === void 0) return null;
  if (this.disabled) return e();
  const { active: t, focusableStyle: o } = this;
  return b($t, null, [b("div", { "aria-hidden": "true", tabindex: t ? "0" : "-1", ref: "focusableStartRef", style: o, onFocus: this.handleStartFocus }), e(), b("div", { "aria-hidden": "true", style: o, ref: "focusableEndRef", tabindex: t ? "0" : "-1", onFocus: this.handleEndFocus })]);
} });
function Sn(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const Nm = /^(\d|\.)+$/, Nl = /(\d|\.)+/;
function to(e, { c: t = 1, offset: o = 0, attachPx: r = true } = {}) {
  if (typeof e == "number") {
    const n = (e + o) * t;
    return n === 0 ? "0" : `${n}px`;
  } else if (typeof e == "string") if (Nm.test(e)) {
    const n = (Number(e) + o) * t;
    return r ? n === 0 ? "0" : `${n}px` : `${n}`;
  } else {
    const n = Nl.exec(e);
    return n ? e.replace(Nl, String((Number(n[0]) + o) * t)) : e;
  }
  return e;
}
function Wl(e) {
  const { left: t, right: o, top: r, bottom: n } = Jt(e);
  return `${r} ${t} ${n} ${o}`;
}
let ri;
function Wm() {
  return ri === void 0 && (ri = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), ri;
}
const Lc = /* @__PURE__ */ new WeakSet();
function RS(e) {
  Lc.add(e);
}
function Dc(e) {
  return !Lc.has(e);
}
function ro(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function ES(e, t, o) {
  console.error(`[naive/${e}]: ${t}`, o);
}
function va(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function ge(e, ...t) {
  if (Array.isArray(e)) e.forEach((o) => ge(o, ...t));
  else return e(...t);
}
function jm(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function Br(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(zo(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Br(r, t, o);
        return;
      }
      if (r.type === $t) {
        if (r.children === null) return;
        Array.isArray(r.children) && Br(r.children, t, o);
      } else {
        if (r.type === kn && t) return;
        o.push(r);
      }
    }
  }), o;
}
function Vm(e, t = "default", o = void 0) {
  const r = e[t];
  if (!r) return ro("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = Br(r(o));
  return n.length === 1 ? n[0] : (ro("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function qm(e, t, o) {
  if (!t) return null;
  const r = Br(t(o));
  return r.length === 1 ? r[0] : (ro("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function Gm(e, t = "default", o = []) {
  const n = e.$slots[t];
  return n === void 0 ? o : n();
}
function Or(e, t = [], o) {
  const r = {};
  return t.forEach((n) => {
    r[n] = e[n];
  }), Object.assign(r, o);
}
function Fr(e) {
  return Object.keys(e);
}
function kS(e, t = [], o) {
  const r = {};
  return Object.getOwnPropertyNames(e).forEach((i) => {
    t.includes(i) || (r[i] = e[i]);
  }), Object.assign(r, o);
}
function Ot(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? zo(e) : typeof e == "number" ? zo(String(e)) : null;
}
function St(e) {
  return e.some((t) => yu(t) ? !(t.type === kn || t.type === $t && !St(t.children)) : true) ? e : null;
}
function To(e, t) {
  return e && St(e()) || t();
}
function Um(e, t, o) {
  return e && St(e(t)) || o(t);
}
function Ge(e, t) {
  const o = e && St(e());
  return t(o || null);
}
function TS(e, t, o) {
  const r = e && St(e(t));
  return o(r || null);
}
function Mi(e) {
  return !(e && St(e()));
}
const jl = J({ render() {
  var e, t;
  return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
} }), Tt = "n-config-provider", $n = "n";
function rt(e = {}, t = { defaultBordered: true }) {
  const o = de(Tt, null);
  return { inlineThemeDisabled: o == null ? void 0 : o.inlineThemeDisabled, mergedRtlRef: o == null ? void 0 : o.mergedRtlRef, mergedComponentPropsRef: o == null ? void 0 : o.mergedComponentPropsRef, mergedBreakpointsRef: o == null ? void 0 : o.mergedBreakpointsRef, mergedBorderedRef: B(() => {
    var r, n;
    const { bordered: i } = e;
    return i !== void 0 ? i : (n = (r = o == null ? void 0 : o.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && n !== void 0 ? n : true;
  }), mergedClsPrefixRef: o ? o.mergedClsPrefixRef : Rt($n), namespaceRef: B(() => o == null ? void 0 : o.mergedNamespaceRef.value) };
}
function Hc() {
  const e = de(Tt, null);
  return e ? e.mergedClsPrefixRef : Rt($n);
}
function gt(e, t, o, r) {
  o || va("useThemeClass", "cssVarsRef is not passed");
  const n = de(Tt, null), i = n == null ? void 0 : n.mergedThemeHashRef, a = n == null ? void 0 : n.styleMountTarget, l = W(""), s = or();
  let d;
  const c = `__${e}`, u = () => {
    let p = c;
    const h = t ? t.value : void 0, f = i == null ? void 0 : i.value;
    f && (p += `-${f}`), h && (p += `-${h}`);
    const { themeOverrides: g, builtinThemeOverrides: v } = r;
    g && (p += `-${Tr(JSON.stringify(g))}`), v && (p += `-${Tr(JSON.stringify(v))}`), l.value = p, d = () => {
      const m = o.value;
      let C = "";
      for (const S in m) C += `${S}: ${m[S]};`;
      I(`.${p}`, C).mount({ id: p, ssr: s, parent: a }), d = void 0;
    };
  };
  return Dt(() => {
    u();
  }), { themeClass: l, onRender: () => {
    d == null ? void 0 : d();
  } };
}
const Bi = "n-form-item";
function _c(e, { defaultSize: t = "medium", mergedSize: o, mergedDisabled: r } = {}) {
  const n = de(Bi, null);
  Se(Bi, null);
  const i = B(o ? () => o(n) : () => {
    const { size: s } = e;
    if (s) return s;
    if (n) {
      const { mergedSize: d } = n;
      if (d.value !== void 0) return d.value;
    }
    return t;
  }), a = B(r ? () => r(n) : () => {
    const { disabled: s } = e;
    return s !== void 0 ? s : n ? n.disabled.value : false;
  }), l = B(() => {
    const { status: s } = e;
    return s || (n == null ? void 0 : n.mergedValidationStatus.value);
  });
  return ot(() => {
    n && n.restoreValidation();
  }), { mergedSizeRef: i, mergedDisabledRef: a, mergedStatusRef: l, nTriggerFormBlur() {
    n && n.handleContentBlur();
  }, nTriggerFormChange() {
    n && n.handleContentChange();
  }, nTriggerFormFocus() {
    n && n.handleContentFocus();
  }, nTriggerFormInput() {
    n && n.handleContentInput();
  } };
}
const Km = { name: "en-US", global: { undo: "Undo", redo: "Redo", confirm: "Confirm", clear: "Clear" }, Popconfirm: { positiveText: "Confirm", negativeText: "Cancel" }, Cascader: { placeholder: "Please Select", loading: "Loading", loadingRequiredMessage: (e) => `Please load all ${e}'s descendants before checking it.` }, Time: { dateFormat: "yyyy-MM-dd", dateTimeFormat: "yyyy-MM-dd HH:mm:ss" }, DatePicker: { yearFormat: "yyyy", monthFormat: "MMM", dayFormat: "eeeeee", yearTypeFormat: "yyyy", monthTypeFormat: "yyyy-MM", dateFormat: "yyyy-MM-dd", dateTimeFormat: "yyyy-MM-dd HH:mm:ss", quarterFormat: "yyyy-qqq", weekFormat: "YYYY-w", clear: "Clear", now: "Now", confirm: "Confirm", selectTime: "Select Time", selectDate: "Select Date", datePlaceholder: "Select Date", datetimePlaceholder: "Select Date and Time", monthPlaceholder: "Select Month", yearPlaceholder: "Select Year", quarterPlaceholder: "Select Quarter", weekPlaceholder: "Select Week", startDatePlaceholder: "Start Date", endDatePlaceholder: "End Date", startDatetimePlaceholder: "Start Date and Time", endDatetimePlaceholder: "End Date and Time", startMonthPlaceholder: "Start Month", endMonthPlaceholder: "End Month", monthBeforeYear: true, firstDayOfWeek: 6, today: "Today" }, DataTable: { checkTableAll: "Select all in the table", uncheckTableAll: "Unselect all in the table", confirm: "Confirm", clear: "Clear" }, LegacyTransfer: { sourceTitle: "Source", targetTitle: "Target" }, Transfer: { selectAll: "Select all", unselectAll: "Unselect all", clearAll: "Clear", total: (e) => `Total ${e} items`, selected: (e) => `${e} items selected` }, Empty: { description: "No Data" }, Select: { placeholder: "Please Select" }, TimePicker: { placeholder: "Select Time", positiveText: "OK", negativeText: "Cancel", now: "Now", clear: "Clear" }, Pagination: { goto: "Goto", selectionSuffix: "page" }, DynamicTags: { add: "Add" }, Log: { loading: "Loading" }, Input: { placeholder: "Please Input" }, InputNumber: { placeholder: "Please Input" }, DynamicInput: { create: "Create" }, ThemeEditor: { title: "Theme Editor", clearAllVars: "Clear All Variables", clearSearch: "Clear Search", filterCompName: "Filter Component Name", filterVarName: "Filter Variable Name", import: "Import", export: "Export", restore: "Reset to Default" }, Image: { tipPrevious: "Previous picture (\u2190)", tipNext: "Next picture (\u2192)", tipCounterclockwise: "Counterclockwise", tipClockwise: "Clockwise", tipZoomOut: "Zoom out", tipZoomIn: "Zoom in", tipDownload: "Download", tipClose: "Close (Esc)", tipOriginalSize: "Zoom to original size" }, Heatmap: { less: "less", more: "more", monthFormat: "MMM", weekdayFormat: "eee" } };
function ni(e) {
  return (t = {}) => {
    const o = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[o] || e.formats[e.defaultWidth];
  };
}
function pr(e) {
  return (t, o) => {
    const r = (o == null ? void 0 : o.context) ? String(o.context) : "standalone";
    let n;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, l = (o == null ? void 0 : o.width) ? String(o.width) : a;
      n = e.formattingValues[l] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, l = (o == null ? void 0 : o.width) ? String(o.width) : e.defaultWidth;
      n = e.values[l] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return n[i];
  };
}
function gr(e) {
  return (t, o = {}) => {
    const r = o.width, n = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(n);
    if (!i) return null;
    const a = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? Xm(l, (u) => u.test(a)) : Ym(l, (u) => u.test(a));
    let d;
    d = e.valueCallback ? e.valueCallback(s) : s, d = o.valueCallback ? o.valueCallback(d) : d;
    const c = t.slice(a.length);
    return { value: d, rest: c };
  };
}
function Ym(e, t) {
  for (const o in e) if (Object.prototype.hasOwnProperty.call(e, o) && t(e[o])) return o;
}
function Xm(e, t) {
  for (let o = 0; o < e.length; o++) if (t(e[o])) return o;
}
function Zm(e) {
  return (t, o = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const n = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = o.valueCallback ? o.valueCallback(a) : a;
    const l = t.slice(n.length);
    return { value: a, rest: l };
  };
}
const Jm = { lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" }, xSeconds: { one: "1 second", other: "{{count}} seconds" }, halfAMinute: "half a minute", lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" }, xHours: { one: "1 hour", other: "{{count}} hours" }, xDays: { one: "1 day", other: "{{count}} days" }, aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" }, xWeeks: { one: "1 week", other: "{{count}} weeks" }, aboutXMonths: { one: "about 1 month", other: "about {{count}} months" }, xMonths: { one: "1 month", other: "{{count}} months" }, aboutXYears: { one: "about 1 year", other: "about {{count}} years" }, xYears: { one: "1 year", other: "{{count}} years" }, overXYears: { one: "over 1 year", other: "over {{count}} years" }, almostXYears: { one: "almost 1 year", other: "almost {{count}} years" } }, Qm = (e, t, o) => {
  let r;
  const n = Jm[e];
  return typeof n == "string" ? r = n : t === 1 ? r = n.one : r = n.other.replace("{{count}}", t.toString()), (o == null ? void 0 : o.addSuffix) ? o.comparison && o.comparison > 0 ? "in " + r : r + " ago" : r;
}, ev = { lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P" }, tv = (e, t, o, r) => ev[e], ov = { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] }, rv = { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"] }, nv = { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, iv = { narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }, av = { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" } }, lv = { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" } }, sv = (e, t) => {
  const o = Number(e), r = o % 100;
  if (r > 20 || r < 10) switch (r % 10) {
    case 1:
      return o + "st";
    case 2:
      return o + "nd";
    case 3:
      return o + "rd";
  }
  return o + "th";
}, cv = { ordinalNumber: sv, era: pr({ values: ov, defaultWidth: "wide" }), quarter: pr({ values: rv, defaultWidth: "wide", argumentCallback: (e) => e - 1 }), month: pr({ values: nv, defaultWidth: "wide" }), day: pr({ values: iv, defaultWidth: "wide" }), dayPeriod: pr({ values: av, defaultWidth: "wide", formattingValues: lv, defaultFormattingWidth: "wide" }) }, dv = /^(\d+)(th|st|nd|rd)?/i, uv = /\d+/i, fv = { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i }, hv = { any: [/^b/i, /^(a|c)/i] }, pv = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i }, gv = { any: [/1/i, /2/i, /3/i, /4/i] }, mv = { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i }, vv = { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] }, bv = { narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i }, xv = { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] }, Cv = { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i }, yv = { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } }, wv = { ordinalNumber: Zm({ matchPattern: dv, parsePattern: uv, valueCallback: (e) => parseInt(e, 10) }), era: gr({ matchPatterns: fv, defaultMatchWidth: "wide", parsePatterns: hv, defaultParseWidth: "any" }), quarter: gr({ matchPatterns: pv, defaultMatchWidth: "wide", parsePatterns: gv, defaultParseWidth: "any", valueCallback: (e) => e + 1 }), month: gr({ matchPatterns: mv, defaultMatchWidth: "wide", parsePatterns: vv, defaultParseWidth: "any" }), day: gr({ matchPatterns: bv, defaultMatchWidth: "wide", parsePatterns: xv, defaultParseWidth: "any" }), dayPeriod: gr({ matchPatterns: Cv, defaultMatchWidth: "any", parsePatterns: yv, defaultParseWidth: "any" }) }, Sv = { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, $v = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, Pv = { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, Rv = { date: ni({ formats: Sv, defaultWidth: "full" }), time: ni({ formats: $v, defaultWidth: "full" }), dateTime: ni({ formats: Pv, defaultWidth: "full" }) }, Ev = { code: "en-US", formatDistance: Qm, formatLong: Rv, formatRelative: tv, localize: cv, match: wv, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } }, kv = { name: "en-US", locale: Ev };
function Tv(e) {
  const { mergedLocaleRef: t, mergedDateLocaleRef: o } = de(Tt, null) || {}, r = B(() => {
    var i, a;
    return (a = (i = t == null ? void 0 : t.value) === null || i === void 0 ? void 0 : i[e]) !== null && a !== void 0 ? a : Km[e];
  });
  return { dateLocaleRef: B(() => {
    var i;
    return (i = o == null ? void 0 : o.value) !== null && i !== void 0 ? i : kv;
  }), localeRef: r };
}
const Lr = "naive-ui-style";
function zt(e, t, o) {
  if (!t) return;
  const r = or(), n = B(() => {
    const { value: l } = t;
    if (!l) return;
    const s = l[e];
    if (s) return s;
  }), i = de(Tt, null), a = () => {
    Dt(() => {
      const { value: l } = o, s = `${l}${e}Rtl`;
      if (xg(s, r)) return;
      const { value: d } = n;
      d && d.style.mount({ id: s, head: true, anchorMetaName: Lr, props: { bPrefix: l ? `.${l}-` : void 0 }, ssr: r, parent: i == null ? void 0 : i.styleMountTarget });
    });
  };
  return r ? a() : Ao(a), n;
}
const Pt = { fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace", fontWeight: "400", fontWeightStrong: "500", cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)", cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)", cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)", borderRadius: "3px", borderRadiusSmall: "2px", fontSize: "14px", fontSizeMini: "12px", fontSizeTiny: "12px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", lineHeight: "1.6", heightMini: "16px", heightTiny: "22px", heightSmall: "28px", heightMedium: "34px", heightLarge: "40px", heightHuge: "46px" }, { fontSize: zv, fontFamily: Iv, lineHeight: Av } = Pt, Nc = I("body", `
 margin: 0;
 font-size: ${zv};
 font-family: ${Iv};
 line-height: ${Av};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [I("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function vo(e, t, o) {
  if (!t) return;
  const r = or(), n = de(Tt, null), i = () => {
    const a = o.value;
    t.mount({ id: a === void 0 ? e : a + e, head: true, anchorMetaName: Lr, props: { bPrefix: a ? `.${a}-` : void 0 }, ssr: r, parent: n == null ? void 0 : n.styleMountTarget }), (n == null ? void 0 : n.preflightStyleDisabled) || Nc.mount({ id: "n-global", head: true, anchorMetaName: Lr, ssr: r, parent: n == null ? void 0 : n.styleMountTarget });
  };
  r ? i() : Ao(i);
}
function zS(e) {
  return e;
}
function me(e, t, o, r, n, i) {
  const a = or(), l = de(Tt, null);
  if (o) {
    const d = () => {
      const c = i == null ? void 0 : i.value;
      o.mount({ id: c === void 0 ? t : c + t, head: true, props: { bPrefix: c ? `.${c}-` : void 0 }, anchorMetaName: Lr, ssr: a, parent: l == null ? void 0 : l.styleMountTarget }), (l == null ? void 0 : l.preflightStyleDisabled) || Nc.mount({ id: "n-global", head: true, anchorMetaName: Lr, ssr: a, parent: l == null ? void 0 : l.styleMountTarget });
    };
    a ? d() : Ao(d);
  }
  return B(() => {
    var d;
    const { theme: { common: c, self: u, peers: p = {} } = {}, themeOverrides: h = {}, builtinThemeOverrides: f = {} } = n, { common: g, peers: v } = h, { common: m = void 0, [e]: { common: C = void 0, self: S = void 0, peers: w = {} } = {} } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, { common: E = void 0, [e]: P = {} } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, { common: x, peers: $ = {} } = P, R = vr({}, c || C || m || r.common, E, x, g), O = vr((d = u || S || r.self) === null || d === void 0 ? void 0 : d(R), f, P, h);
    return { common: R, self: O, peers: vr({}, r.peers, w, p), peerOverrides: vr({}, f.peers, $, v) };
  });
}
me.props = { theme: Object, themeOverrides: Object, builtinThemeOverrides: Object };
const Mv = V("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [I("svg", `
 height: 1em;
 width: 1em;
 `)]), Jo = J({ name: "BaseIcon", props: { role: String, ariaLabel: String, ariaDisabled: { type: Boolean, default: void 0 }, ariaHidden: { type: Boolean, default: void 0 }, clsPrefix: { type: String, required: true }, onClick: Function, onMousedown: Function, onMouseup: Function }, setup(e) {
  vo("-base-icon", Mv, be(e, "clsPrefix"));
}, render() {
  return b("i", { class: `${this.clsPrefix}-base-icon`, onClick: this.onClick, onMousedown: this.onMousedown, onMouseup: this.onMouseup, role: this.role, "aria-label": this.ariaLabel, "aria-hidden": this.ariaHidden, "aria-disabled": this.ariaDisabled }, this.$slots);
} }), ba = J({ name: "BaseIconSwitchTransition", setup(e, { slots: t }) {
  const o = Nr();
  return () => b(Et, { name: "icon-switch-transition", appear: o.value }, t);
} });
function rr(e, t) {
  const o = J({ render() {
    return t();
  } });
  return J({ name: Hf(e), setup() {
    var r;
    const n = (r = de(Tt, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
    return () => {
      var i;
      const a = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e];
      return a ? a() : b(o, null);
    };
  } });
}
const Bv = J({ name: "ChevronDown", render() {
  return b("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, b("path", { d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z", fill: "currentColor" }));
} }), Ov = J({ name: "ChevronRight", render() {
  return b("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, b("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" }));
} }), Fv = rr("clear", () => b("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, b("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, b("g", { fill: "currentColor", "fill-rule": "nonzero" }, b("path", { d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z" }))))), Lv = rr("close", () => b("svg", { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true }, b("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, b("g", { fill: "currentColor", "fill-rule": "nonzero" }, b("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))), Dv = rr("error", () => b("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, b("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, b("g", { "fill-rule": "nonzero" }, b("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" }))))), Hv = J({ name: "Eye", render() {
  return b("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, b("path", { d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z", fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "32" }), b("circle", { cx: "256", cy: "256", r: "80", fill: "none", stroke: "currentColor", "stroke-miterlimit": "10", "stroke-width": "32" }));
} }), _v = J({ name: "EyeOff", render() {
  return b("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, b("path", { d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z", fill: "currentColor" }), b("path", { d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z", fill: "currentColor" }), b("path", { d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z", fill: "currentColor" }), b("path", { d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z", fill: "currentColor" }), b("path", { d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z", fill: "currentColor" }));
} }), Vl = rr("info", () => b("svg", { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, b("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, b("g", { "fill-rule": "nonzero" }, b("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" }))))), Nv = rr("success", () => b("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, b("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, b("g", { "fill-rule": "nonzero" }, b("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" }))))), Wv = rr("warning", () => b("svg", { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, b("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, b("g", { "fill-rule": "nonzero" }, b("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" }))))), { cubicBezierEaseInOut: jv } = Pt;
function Pn({ originalTransform: e = "", left: t = 0, top: o = 0, transition: r = `all .3s ${jv} !important` } = {}) {
  return [I("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", { transform: `${e} scale(0.75)`, left: t, top: o, opacity: 0 }), I("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", { transform: `scale(1) ${e}`, left: t, top: o, opacity: 1 }), I("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", { transformOrigin: "center", position: "absolute", left: t, top: o, transition: r })];
}
const Vv = V("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [I(">", [L("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [I("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), I("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), L("placeholder", `
 display: flex;
 `), L("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Pn({ originalTransform: "translateX(-50%) translateY(-50%)", left: "50%", top: "50%" })])])]), Oi = J({ name: "BaseClear", props: { clsPrefix: { type: String, required: true }, show: Boolean, onClear: Function }, setup(e) {
  return vo("-base-clear", Vv, be(e, "clsPrefix")), { handleMouseDown(t) {
    t.preventDefault();
  } };
}, render() {
  const { clsPrefix: e } = this;
  return b("div", { class: `${e}-base-clear` }, b(ba, null, { default: () => {
    var t, o;
    return this.show ? b("div", { key: "dismiss", class: `${e}-base-clear__clear`, onClick: this.onClear, onMousedown: this.handleMouseDown, "data-clear": true }, To(this.$slots.icon, () => [b(Jo, { clsPrefix: e }, { default: () => b(Fv, null) })])) : b("div", { key: "icon", class: `${e}-base-clear__placeholder` }, (o = (t = this.$slots).placeholder) === null || o === void 0 ? void 0 : o.call(t));
  } }));
} }), qv = V("base-close", `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [H("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), I("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), Ze("disabled", [I("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), I("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), I("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), I("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), I("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), H("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), H("round", [I("&::before", `
 border-radius: 50%;
 `)])]), Mn = J({ name: "BaseClose", props: { isButtonTag: { type: Boolean, default: true }, clsPrefix: { type: String, required: true }, disabled: { type: Boolean, default: void 0 }, focusable: { type: Boolean, default: true }, round: Boolean, onClick: Function, absolute: Boolean }, setup(e) {
  return vo("-base-close", qv, be(e, "clsPrefix")), () => {
    const { clsPrefix: t, disabled: o, absolute: r, round: n, isButtonTag: i } = e;
    return b(i ? "button" : "div", { type: i ? "button" : void 0, tabindex: o || !e.focusable ? -1 : 0, "aria-disabled": o, "aria-label": "close", role: i ? void 0 : "button", disabled: o, class: [`${t}-base-close`, r && `${t}-base-close--absolute`, o && `${t}-base-close--disabled`, n && `${t}-base-close--round`], onMousedown: (l) => {
      e.focusable || l.preventDefault();
    }, onClick: e.onClick }, b(Jo, { clsPrefix: t }, { default: () => b(Lv, null) }));
  };
} }), Gv = J({ name: "FadeInExpandTransition", props: { appear: Boolean, group: Boolean, mode: String, onLeave: Function, onAfterLeave: Function, onAfterEnter: Function, width: Boolean, reverse: Boolean }, setup(e, { slots: t }) {
  function o(l) {
    e.width ? l.style.maxWidth = `${l.offsetWidth}px` : l.style.maxHeight = `${l.offsetHeight}px`, l.offsetWidth;
  }
  function r(l) {
    e.width ? l.style.maxWidth = "0" : l.style.maxHeight = "0", l.offsetWidth;
    const { onLeave: s } = e;
    s && s();
  }
  function n(l) {
    e.width ? l.style.maxWidth = "" : l.style.maxHeight = "";
    const { onAfterLeave: s } = e;
    s && s();
  }
  function i(l) {
    if (l.style.transition = "none", e.width) {
      const s = l.offsetWidth;
      l.style.maxWidth = "0", l.offsetWidth, l.style.transition = "", l.style.maxWidth = `${s}px`;
    } else if (e.reverse) l.style.maxHeight = `${l.offsetHeight}px`, l.offsetHeight, l.style.transition = "", l.style.maxHeight = "0";
    else {
      const s = l.offsetHeight;
      l.style.maxHeight = "0", l.offsetWidth, l.style.transition = "", l.style.maxHeight = `${s}px`;
    }
    l.offsetWidth;
  }
  function a(l) {
    var s;
    e.width ? l.style.maxWidth = "" : e.reverse || (l.style.maxHeight = ""), (s = e.onAfterEnter) === null || s === void 0 || s.call(e);
  }
  return () => {
    const { group: l, width: s, appear: d, mode: c } = e, u = l ? wu : Et, p = { name: s ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition", appear: d, onEnter: i, onAfterEnter: a, onBeforeLeave: o, onLeave: r, onAfterLeave: n };
    return l || (p.mode = c), b(u, p, t);
  };
} }), Uv = I([I("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), V("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [L("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Pn()]), L("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Pn({ left: "50%", top: "50%", originalTransform: "translateX(-50%) translateY(-50%)" })]), L("container", `
 animation: rotator 3s linear infinite both;
 `, [L("icon", `
 height: 1em;
 width: 1em;
 `)])])]), ii = "1.6s", Kv = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, Wc = J({ name: "BaseLoading", props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, Kv), setup(e) {
  vo("-base-loading", Uv, be(e, "clsPrefix"));
}, render() {
  const { clsPrefix: e, radius: t, strokeWidth: o, stroke: r, scale: n } = this, i = t / n;
  return b("div", { class: `${e}-base-loading`, role: "img", "aria-label": "loading" }, b(ba, null, { default: () => this.show ? b("div", { key: "icon", class: `${e}-base-loading__transition-wrapper` }, b("div", { class: `${e}-base-loading__container` }, b("svg", { class: `${e}-base-loading__icon`, viewBox: `0 0 ${2 * i} ${2 * i}`, xmlns: "http://www.w3.org/2000/svg", style: { color: r } }, b("g", null, b("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};270 ${i} ${i}`, begin: "0s", dur: ii, fill: "freeze", repeatCount: "indefinite" }), b("circle", { class: `${e}-base-loading__icon`, fill: "none", stroke: "currentColor", "stroke-width": o, "stroke-linecap": "round", cx: i, cy: i, r: t - o / 2, "stroke-dasharray": 5.67 * t, "stroke-dashoffset": 18.48 * t }, b("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`, begin: "0s", dur: ii, fill: "freeze", repeatCount: "indefinite" }), b("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * t};${1.42 * t};${5.67 * t}`, begin: "0s", dur: ii, fill: "freeze", repeatCount: "indefinite" })))))) : b("div", { key: "placeholder", class: `${e}-base-loading__placeholder` }, this.$slots) }));
} }), { cubicBezierEaseInOut: ql } = Pt;
function xa({ name: e = "fade-in", enterDuration: t = "0.2s", leaveDuration: o = "0.2s", enterCubicBezier: r = ql, leaveCubicBezier: n = ql } = {}) {
  return [I(`&.${e}-transition-enter-active`, { transition: `all ${t} ${r}!important` }), I(`&.${e}-transition-leave-active`, { transition: `all ${o} ${n}!important` }), I(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, { opacity: 0 }), I(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, { opacity: 1 })];
}
const le = { neutralBase: "#FFF", neutralInvertBase: "#000", neutralTextBase: "#000", neutralPopover: "#fff", neutralCard: "#fff", neutralModal: "#fff", neutralBody: "#fff", alpha1: "0.82", alpha2: "0.72", alpha3: "0.38", alpha4: "0.24", alpha5: "0.18", alphaClose: "0.6", alphaDisabled: "0.5", alphaAvatar: "0.2", alphaProgressRail: ".08", alphaInput: "0", alphaScrollbar: "0.25", alphaScrollbarHover: "0.4", primaryHover: "#36ad6a", primaryDefault: "#18a058", primaryActive: "#0c7a43", primarySuppl: "#36ad6a", infoHover: "#4098fc", infoDefault: "#2080f0", infoActive: "#1060c9", infoSuppl: "#4098fc", errorHover: "#de576d", errorDefault: "#d03050", errorActive: "#ab1f3f", errorSuppl: "#de576d", warningHover: "#fcb040", warningDefault: "#f0a020", warningActive: "#c97c10", warningSuppl: "#fcb040", successHover: "#36ad6a", successDefault: "#18a058", successActive: "#0c7a43", successSuppl: "#36ad6a" }, Yv = go(le.neutralBase), jc = go(le.neutralInvertBase), Xv = `rgba(${jc.slice(0, 3).join(", ")}, `;
function Gl(e) {
  return `${Xv + String(e)})`;
}
function lt(e) {
  const t = Array.from(jc);
  return t[3] = Number(e), X(Yv, t);
}
const q = Object.assign(Object.assign({ name: "common" }, Pt), { baseColor: le.neutralBase, primaryColor: le.primaryDefault, primaryColorHover: le.primaryHover, primaryColorPressed: le.primaryActive, primaryColorSuppl: le.primarySuppl, infoColor: le.infoDefault, infoColorHover: le.infoHover, infoColorPressed: le.infoActive, infoColorSuppl: le.infoSuppl, successColor: le.successDefault, successColorHover: le.successHover, successColorPressed: le.successActive, successColorSuppl: le.successSuppl, warningColor: le.warningDefault, warningColorHover: le.warningHover, warningColorPressed: le.warningActive, warningColorSuppl: le.warningSuppl, errorColor: le.errorDefault, errorColorHover: le.errorHover, errorColorPressed: le.errorActive, errorColorSuppl: le.errorSuppl, textColorBase: le.neutralTextBase, textColor1: "rgb(31, 34, 37)", textColor2: "rgb(51, 54, 57)", textColor3: "rgb(118, 124, 130)", textColorDisabled: lt(le.alpha4), placeholderColor: lt(le.alpha4), placeholderColorDisabled: lt(le.alpha5), iconColor: lt(le.alpha4), iconColorHover: on(lt(le.alpha4), { lightness: 0.75 }), iconColorPressed: on(lt(le.alpha4), { lightness: 0.9 }), iconColorDisabled: lt(le.alpha5), opacity1: le.alpha1, opacity2: le.alpha2, opacity3: le.alpha3, opacity4: le.alpha4, opacity5: le.alpha5, dividerColor: "rgb(239, 239, 245)", borderColor: "rgb(224, 224, 230)", closeIconColor: lt(Number(le.alphaClose)), closeIconColorHover: lt(Number(le.alphaClose)), closeIconColorPressed: lt(Number(le.alphaClose)), closeColorHover: "rgba(0, 0, 0, .09)", closeColorPressed: "rgba(0, 0, 0, .13)", clearColor: lt(le.alpha4), clearColorHover: on(lt(le.alpha4), { lightness: 0.75 }), clearColorPressed: on(lt(le.alpha4), { lightness: 0.9 }), scrollbarColor: Gl(le.alphaScrollbar), scrollbarColorHover: Gl(le.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: lt(le.alphaProgressRail), railColor: "rgb(219, 219, 223)", popoverColor: le.neutralPopover, tableColor: le.neutralCard, cardColor: le.neutralCard, modalColor: le.neutralModal, bodyColor: le.neutralBody, tagColor: "#eee", avatarColor: lt(le.alphaAvatar), invertedColor: "rgb(0, 20, 40)", inputColor: lt(le.alphaInput), codeColor: "rgb(244, 244, 248)", tabColor: "rgb(247, 247, 250)", actionColor: "rgb(250, 250, 252)", tableHeaderColor: "rgb(250, 250, 252)", hoverColor: "rgb(243, 243, 245)", tableColorHover: "rgba(0, 0, 100, 0.03)", tableColorStriped: "rgba(0, 0, 100, 0.02)", pressedColor: "rgb(237, 237, 239)", opacityDisabled: le.alphaDisabled, inputColorDisabled: "rgb(250, 250, 252)", buttonColor2: "rgba(46, 51, 56, .05)", buttonColor2Hover: "rgba(46, 51, 56, .09)", buttonColor2Pressed: "rgba(46, 51, 56, .13)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), Zv = { railInsetHorizontalBottom: "auto 2px 4px 2px", railInsetHorizontalTop: "4px 2px auto 2px", railInsetVerticalRight: "2px 4px 2px auto", railInsetVerticalLeft: "2px auto 2px 4px", railColor: "transparent" };
function Jv(e) {
  const { scrollbarColor: t, scrollbarColorHover: o, scrollbarHeight: r, scrollbarWidth: n, scrollbarBorderRadius: i } = e;
  return Object.assign(Object.assign({}, Zv), { height: r, width: n, borderRadius: i, color: t, colorHover: o });
}
const nt = { name: "Scrollbar", common: q, self: Jv }, Qv = V("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [I(">", [V("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [I("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), I(">", [V("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), I(">, +", [V("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [H("horizontal", `
 height: var(--n-scrollbar-height);
 `, [I(">", [L("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), H("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), H("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), H("vertical", `
 width: var(--n-scrollbar-width);
 `, [I(">", [L("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), H("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), H("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), H("disabled", [I(">", [L("scrollbar", "pointer-events: none;")])]), I(">", [L("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [xa(), I("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), eb = Object.assign(Object.assign({}, me.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: "hover" }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: "right" }, xPlacement: { type: String, default: "bottom" } }), Vr = J({ name: "Scrollbar", props: eb, inheritAttrs: false, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o, mergedRtlRef: r } = rt(e), n = zt("Scrollbar", r, t), i = W(null), a = W(null), l = W(null), s = W(null), d = W(null), c = W(null), u = W(null), p = W(null), h = W(null), f = W(null), g = W(null), v = W(0), m = W(0), C = W(false), S = W(false);
  let w = false, E = false, P, x, $ = 0, R = 0, O = 0, _ = 0;
  const y = Kg(), A = me("Scrollbar", "-scrollbar", Qv, nt, e, t), T = B(() => {
    const { value: G } = p, { value: oe } = c, { value: fe } = f;
    return G === null || oe === null || fe === null ? 0 : Math.min(G, fe * G / oe + yn(A.value.self.width) * 1.5);
  }), z = B(() => `${T.value}px`), j = B(() => {
    const { value: G } = h, { value: oe } = u, { value: fe } = g;
    return G === null || oe === null || fe === null ? 0 : fe * G / oe + yn(A.value.self.height) * 1.5;
  }), F = B(() => `${j.value}px`), U = B(() => {
    const { value: G } = p, { value: oe } = v, { value: fe } = c, { value: Ie } = f;
    if (G === null || fe === null || Ie === null) return 0;
    {
      const Ve = fe - G;
      return Ve ? oe / Ve * (Ie - T.value) : 0;
    }
  }), ne = B(() => `${U.value}px`), se = B(() => {
    const { value: G } = h, { value: oe } = m, { value: fe } = u, { value: Ie } = g;
    if (G === null || fe === null || Ie === null) return 0;
    {
      const Ve = fe - G;
      return Ve ? oe / Ve * (Ie - j.value) : 0;
    }
  }), he = B(() => `${se.value}px`), ue = B(() => {
    const { value: G } = p, { value: oe } = c;
    return G !== null && oe !== null && oe > G;
  }), we = B(() => {
    const { value: G } = h, { value: oe } = u;
    return G !== null && oe !== null && oe > G;
  }), Ce = B(() => {
    const { trigger: G } = e;
    return G === "none" || C.value;
  }), Be = B(() => {
    const { trigger: G } = e;
    return G === "none" || S.value;
  }), re = B(() => {
    const { container: G } = e;
    return G ? G() : a.value;
  }), M = B(() => {
    const { content: G } = e;
    return G ? G() : l.value;
  }), K = (G, oe) => {
    if (!e.scrollable) return;
    if (typeof G == "number") {
      te(G, oe ?? 0, 0, false, "auto");
      return;
    }
    const { left: fe, top: Ie, index: Ve, elSize: it, position: bt, behavior: Fe, el: at, debounce: It = true } = G;
    (fe !== void 0 || Ie !== void 0) && te(fe ?? 0, Ie ?? 0, 0, false, Fe), at !== void 0 ? te(0, at.offsetTop, at.offsetHeight, It, Fe) : Ve !== void 0 && it !== void 0 ? te(0, Ve * it, it, It, Fe) : bt === "bottom" ? te(0, Number.MAX_SAFE_INTEGER, 0, false, Fe) : bt === "top" && te(0, 0, 0, false, Fe);
  }, D = em(() => {
    e.container || K({ top: v.value, left: m.value });
  }), Q = () => {
    D.isDeactivated || Vt();
  }, ce = (G) => {
    if (D.isDeactivated) return;
    const { onResize: oe } = e;
    oe && oe(G), Vt();
  }, ie = (G, oe) => {
    if (!e.scrollable) return;
    const { value: fe } = re;
    fe && (typeof G == "object" ? fe.scrollBy(G) : fe.scrollBy(G, oe || 0));
  };
  function te(G, oe, fe, Ie, Ve) {
    const { value: it } = re;
    if (it) {
      if (Ie) {
        const { scrollTop: bt, offsetHeight: Fe } = it;
        if (oe > bt) {
          oe + fe <= bt + Fe || it.scrollTo({ left: G, top: oe + fe - Fe, behavior: Ve });
          return;
        }
      }
      it.scrollTo({ left: G, top: oe, behavior: Ve });
    }
  }
  function Z() {
    ir(), Oe(), Vt();
  }
  function $e() {
    vt();
  }
  function vt() {
    Ue(), no();
  }
  function Ue() {
    x !== void 0 && window.clearTimeout(x), x = window.setTimeout(() => {
      S.value = false;
    }, e.duration);
  }
  function no() {
    P !== void 0 && window.clearTimeout(P), P = window.setTimeout(() => {
      C.value = false;
    }, e.duration);
  }
  function ir() {
    P !== void 0 && window.clearTimeout(P), C.value = true;
  }
  function Oe() {
    x !== void 0 && window.clearTimeout(x), S.value = true;
  }
  function Ke(G) {
    const { onScroll: oe } = e;
    oe && oe(G), jt();
  }
  function jt() {
    const { value: G } = re;
    G && (v.value = G.scrollTop, m.value = G.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1));
  }
  function Ln() {
    const { value: G } = M;
    G && (c.value = G.offsetHeight, u.value = G.offsetWidth);
    const { value: oe } = re;
    oe && (p.value = oe.offsetHeight, h.value = oe.offsetWidth);
    const { value: fe } = d, { value: Ie } = s;
    fe && (g.value = fe.offsetWidth), Ie && (f.value = Ie.offsetHeight);
  }
  function Co() {
    const { value: G } = re;
    G && (v.value = G.scrollTop, m.value = G.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1), p.value = G.offsetHeight, h.value = G.offsetWidth, c.value = G.scrollHeight, u.value = G.scrollWidth);
    const { value: oe } = d, { value: fe } = s;
    oe && (g.value = oe.offsetWidth), fe && (f.value = fe.offsetHeight);
  }
  function Vt() {
    e.scrollable && (e.useUnifiedContainer ? Co() : (Ln(), jt()));
  }
  function Kr(G) {
    var oe;
    return !(!((oe = i.value) === null || oe === void 0) && oe.contains(Ir(G)));
  }
  function Dn(G) {
    G.preventDefault(), G.stopPropagation(), E = true, ke("mousemove", window, ar, true), ke("mouseup", window, Yr, true), R = m.value, O = (n == null ? void 0 : n.value) ? window.innerWidth - G.clientX : G.clientX;
  }
  function ar(G) {
    if (!E) return;
    P !== void 0 && window.clearTimeout(P), x !== void 0 && window.clearTimeout(x);
    const { value: oe } = h, { value: fe } = u, { value: Ie } = j;
    if (oe === null || fe === null) return;
    const it = ((n == null ? void 0 : n.value) ? window.innerWidth - G.clientX - O : G.clientX - O) * (fe - oe) / (oe - Ie), bt = fe - oe;
    let Fe = R + it;
    Fe = Math.min(bt, Fe), Fe = Math.max(Fe, 0);
    const { value: at } = re;
    if (at) {
      at.scrollLeft = Fe * ((n == null ? void 0 : n.value) ? -1 : 1);
      const { internalOnUpdateScrollLeft: It } = e;
      It && It(Fe);
    }
  }
  function Yr(G) {
    G.preventDefault(), G.stopPropagation(), Ee("mousemove", window, ar, true), Ee("mouseup", window, Yr, true), E = false, Vt(), Kr(G) && vt();
  }
  function Hn(G) {
    G.preventDefault(), G.stopPropagation(), w = true, ke("mousemove", window, lr, true), ke("mouseup", window, sr, true), $ = v.value, _ = G.clientY;
  }
  function lr(G) {
    if (!w) return;
    P !== void 0 && window.clearTimeout(P), x !== void 0 && window.clearTimeout(x);
    const { value: oe } = p, { value: fe } = c, { value: Ie } = T;
    if (oe === null || fe === null) return;
    const it = (G.clientY - _) * (fe - oe) / (oe - Ie), bt = fe - oe;
    let Fe = $ + it;
    Fe = Math.min(bt, Fe), Fe = Math.max(Fe, 0);
    const { value: at } = re;
    at && (at.scrollTop = Fe);
  }
  function sr(G) {
    G.preventDefault(), G.stopPropagation(), Ee("mousemove", window, lr, true), Ee("mouseup", window, sr, true), w = false, Vt(), Kr(G) && vt();
  }
  Dt(() => {
    const { value: G } = we, { value: oe } = ue, { value: fe } = t, { value: Ie } = d, { value: Ve } = s;
    Ie && (G ? Ie.classList.remove(`${fe}-scrollbar-rail--disabled`) : Ie.classList.add(`${fe}-scrollbar-rail--disabled`)), Ve && (oe ? Ve.classList.remove(`${fe}-scrollbar-rail--disabled`) : Ve.classList.add(`${fe}-scrollbar-rail--disabled`));
  }), pt(() => {
    e.container || Vt();
  }), ot(() => {
    P !== void 0 && window.clearTimeout(P), x !== void 0 && window.clearTimeout(x), Ee("mousemove", window, lr, true), Ee("mouseup", window, sr, true);
  });
  const Xr = B(() => {
    const { common: { cubicBezierEaseInOut: G }, self: { color: oe, colorHover: fe, height: Ie, width: Ve, borderRadius: it, railInsetHorizontalTop: bt, railInsetHorizontalBottom: Fe, railInsetVerticalRight: at, railInsetVerticalLeft: It, railColor: Zr } } = A.value, { top: _n, right: Mo, bottom: Bo, left: Nn } = Jt(bt), { top: Wn, right: Jr, bottom: ao, left: k } = Jt(Fe), { top: N, right: ae, bottom: ze, left: He } = Jt((n == null ? void 0 : n.value) ? Wl(at) : at), { top: Pe, right: qt, bottom: Gt, left: Ut } = Jt((n == null ? void 0 : n.value) ? Wl(It) : It);
    return { "--n-scrollbar-bezier": G, "--n-scrollbar-color": oe, "--n-scrollbar-color-hover": fe, "--n-scrollbar-border-radius": it, "--n-scrollbar-width": Ve, "--n-scrollbar-height": Ie, "--n-scrollbar-rail-top-horizontal-top": _n, "--n-scrollbar-rail-right-horizontal-top": Mo, "--n-scrollbar-rail-bottom-horizontal-top": Bo, "--n-scrollbar-rail-left-horizontal-top": Nn, "--n-scrollbar-rail-top-horizontal-bottom": Wn, "--n-scrollbar-rail-right-horizontal-bottom": Jr, "--n-scrollbar-rail-bottom-horizontal-bottom": ao, "--n-scrollbar-rail-left-horizontal-bottom": k, "--n-scrollbar-rail-top-vertical-right": N, "--n-scrollbar-rail-right-vertical-right": ae, "--n-scrollbar-rail-bottom-vertical-right": ze, "--n-scrollbar-rail-left-vertical-right": He, "--n-scrollbar-rail-top-vertical-left": Pe, "--n-scrollbar-rail-right-vertical-left": qt, "--n-scrollbar-rail-bottom-vertical-left": Gt, "--n-scrollbar-rail-left-vertical-left": Ut, "--n-scrollbar-rail-color": Zr };
  }), io = o ? gt("scrollbar", void 0, Xr, e) : void 0;
  return Object.assign(Object.assign({}, { scrollTo: K, scrollBy: ie, sync: Vt, syncUnifiedContainer: Co, handleMouseEnterWrapper: Z, handleMouseLeaveWrapper: $e }), { mergedClsPrefix: t, rtlEnabled: n, containerScrollTop: v, wrapperRef: i, containerRef: a, contentRef: l, yRailRef: s, xRailRef: d, needYBar: ue, needXBar: we, yBarSizePx: z, xBarSizePx: F, yBarTopPx: ne, xBarLeftPx: he, isShowXBar: Ce, isShowYBar: Be, isIos: y, handleScroll: Ke, handleContentResize: Q, handleContainerResize: ce, handleYScrollMouseDown: Hn, handleXScrollMouseDown: Dn, cssVars: o ? void 0 : Xr, themeClass: io == null ? void 0 : io.themeClass, onRender: io == null ? void 0 : io.onRender });
}, render() {
  var e;
  const { $slots: t, mergedClsPrefix: o, triggerDisplayManually: r, rtlEnabled: n, internalHoistYRail: i, yPlacement: a, xPlacement: l, xScrollable: s } = this;
  if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
  const d = this.trigger === "none", c = (h, f) => b("div", { ref: "yRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--vertical`, `${o}-scrollbar-rail--vertical--${a}`, h], "data-scrollbar-rail": true, style: [f || "", this.verticalRailStyle], "aria-hidden": true }, b(d ? jl : Et, d ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? b("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), u = () => {
    var h, f;
    return (h = this.onRender) === null || h === void 0 || h.call(this), b("div", Ht(this.$attrs, { role: "none", ref: "wrapperRef", class: [`${o}-scrollbar`, this.themeClass, n && `${o}-scrollbar--rtl`], style: this.cssVars, onMouseenter: r ? void 0 : this.handleMouseEnterWrapper, onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (f = t.default) === null || f === void 0 ? void 0 : f.call(t) : b("div", { role: "none", ref: "containerRef", class: [`${o}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, b(Ai, { onResize: this.handleContentResize }, { default: () => b("div", { ref: "contentRef", role: "none", style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle], class: [`${o}-scrollbar-content`, this.contentClass] }, t) })), i ? null : c(void 0, void 0), s && b("div", { ref: "xRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--horizontal`, `${o}-scrollbar-rail--horizontal--${l}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, b(d ? jl : Et, d ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? b("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: n ? this.xBarLeftPx : void 0, left: n ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, p = this.container ? u() : b(Ai, { onResize: this.handleContainerResize }, { default: u });
  return i ? b($t, null, p, c(this.themeClass, this.cssVars)) : p;
} }), Vc = Vr;
function Ul(e) {
  return Array.isArray(e) ? e : [e];
}
const Fi = { STOP: "STOP" };
function qc(e, t) {
  const o = t(e);
  e.children !== void 0 && o !== Fi.STOP && e.children.forEach((r) => qc(r, t));
}
function tb(e, t = {}) {
  const { preserveGroup: o = false } = t, r = [], n = o ? (a) => {
    a.isLeaf || (r.push(a.key), i(a.children));
  } : (a) => {
    a.isLeaf || (a.isGroup || r.push(a.key), i(a.children));
  };
  function i(a) {
    a.forEach(n);
  }
  return i(e), r;
}
function ob(e, t) {
  const { isLeaf: o } = e;
  return o !== void 0 ? o : !t(e);
}
function rb(e) {
  return e.children;
}
function nb(e) {
  return e.key;
}
function ib() {
  return false;
}
function ab(e, t) {
  const { isLeaf: o } = e;
  return !(o === false && !Array.isArray(t(e)));
}
function lb(e) {
  return e.disabled === true;
}
function sb(e, t) {
  return e.isLeaf === false && !Array.isArray(t(e));
}
function ai(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function li(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function cb(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) || o.add(r);
  }), Array.from(o);
}
function db(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) && o.delete(r);
  }), Array.from(o);
}
function ub(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function IS(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((o, r) => {
    t.set(o.key, r);
  }), (o) => {
    var r;
    return (r = t.get(o)) !== null && r !== void 0 ? r : null;
  };
}
class fb extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function hb(e, t, o, r) {
  return Rn(t.concat(e), o, r, false);
}
function pb(e, t) {
  const o = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const n = t.treeNodeMap.get(r);
    if (n !== void 0) {
      let i = n.parent;
      for (; i !== null && !(i.disabled || o.has(i.key)); ) o.add(i.key), i = i.parent;
    }
  }), o;
}
function gb(e, t, o, r) {
  const n = Rn(t, o, r, false), i = Rn(e, o, r, true), a = pb(e, o), l = [];
  return n.forEach((s) => {
    (i.has(s) || a.has(s)) && l.push(s);
  }), l.forEach((s) => n.delete(s)), n;
}
function si(e, t) {
  const { checkedKeys: o, keysToCheck: r, keysToUncheck: n, indeterminateKeys: i, cascade: a, leafOnly: l, checkStrategy: s, allowNotLoaded: d } = e;
  if (!a) return r !== void 0 ? { checkedKeys: cb(o, r), indeterminateKeys: Array.from(i) } : n !== void 0 ? { checkedKeys: db(o, n), indeterminateKeys: Array.from(i) } : { checkedKeys: Array.from(o), indeterminateKeys: Array.from(i) };
  const { levelTreeNodeMap: c } = t;
  let u;
  n !== void 0 ? u = gb(n, o, t, d) : r !== void 0 ? u = hb(r, o, t, d) : u = Rn(o, t, d, false);
  const p = s === "parent", h = s === "child" || l, f = u, g = /* @__PURE__ */ new Set(), v = Math.max.apply(null, Array.from(c.keys()));
  for (let m = v; m >= 0; m -= 1) {
    const C = m === 0, S = c.get(m);
    for (const w of S) {
      if (w.isLeaf) continue;
      const { key: E, shallowLoaded: P } = w;
      if (h && P && w.children.forEach((O) => {
        !O.disabled && !O.isLeaf && O.shallowLoaded && f.has(O.key) && f.delete(O.key);
      }), w.disabled || !P) continue;
      let x = true, $ = false, R = true;
      for (const O of w.children) {
        const _ = O.key;
        if (!O.disabled) {
          if (R && (R = false), f.has(_)) $ = true;
          else if (g.has(_)) {
            $ = true, x = false;
            break;
          } else if (x = false, $) break;
        }
      }
      x && !R ? (p && w.children.forEach((O) => {
        !O.disabled && f.has(O.key) && f.delete(O.key);
      }), f.add(E)) : $ && g.add(E), C && h && f.has(E) && f.delete(E);
    }
  }
  return { checkedKeys: Array.from(f), indeterminateKeys: Array.from(g) };
}
function Rn(e, t, o, r) {
  const { treeNodeMap: n, getChildren: i } = t, a = /* @__PURE__ */ new Set(), l = new Set(e);
  return e.forEach((s) => {
    const d = n.get(s);
    d !== void 0 && qc(d, (c) => {
      if (c.disabled) return Fi.STOP;
      const { key: u } = c;
      if (!a.has(u) && (a.add(u), l.add(u), sb(c.rawNode, i))) {
        if (r) return Fi.STOP;
        if (!o) throw new fb();
      }
    });
  }), l;
}
function mb(e, { includeGroup: t = false, includeSelf: o = true }, r) {
  var n;
  const i = r.treeNodeMap;
  let a = e == null ? null : (n = i.get(e)) !== null && n !== void 0 ? n : null;
  const l = { keyPath: [], treeNodePath: [], treeNode: a };
  if (a == null ? void 0 : a.ignored) return l.treeNode = null, l;
  for (; a; ) !a.ignored && (t || !a.isGroup) && l.treeNodePath.push(a), a = a.parent;
  return l.treeNodePath.reverse(), o || l.treeNodePath.pop(), l.keyPath = l.treeNodePath.map((s) => s.key), l;
}
function vb(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function bb(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n + 1) % r] : n === o.length - 1 ? null : o[n + 1];
}
function Kl(e, t, { loop: o = false, includeDisabled: r = false } = {}) {
  const n = t === "prev" ? xb : bb, i = { reverse: t === "prev" };
  let a = false, l = null;
  function s(d) {
    if (d !== null) {
      if (d === e) {
        if (!a) a = true;
        else if (!e.disabled && !e.isGroup) {
          l = e;
          return;
        }
      } else if ((!d.disabled || r) && !d.ignored && !d.isGroup) {
        l = d;
        return;
      }
      if (d.isGroup) {
        const c = Ca(d, i);
        c !== null ? l = c : s(n(d, o));
      } else {
        const c = n(d, false);
        if (c !== null) s(c);
        else {
          const u = Cb(d);
          (u == null ? void 0 : u.isGroup) ? s(n(u, o)) : o && s(n(d, true));
        }
      }
    }
  }
  return s(e), l;
}
function xb(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n - 1 + r) % r] : n === 0 ? null : o[n - 1];
}
function Cb(e) {
  return e.parent;
}
function Ca(e, t = {}) {
  const { reverse: o = false } = t, { children: r } = e;
  if (r) {
    const { length: n } = r, i = o ? n - 1 : 0, a = o ? -1 : n, l = o ? -1 : 1;
    for (let s = i; s !== a; s += l) {
      const d = r[s];
      if (!d.disabled && !d.ignored) if (d.isGroup) {
        const c = Ca(d, t);
        if (c !== null) return c;
      } else return d;
    }
  }
  return null;
}
const yb = { getChild() {
  return this.ignored ? null : Ca(this);
}, getParent() {
  const { parent: e } = this;
  return (e == null ? void 0 : e.isGroup) ? e.getParent() : e;
}, getNext(e = {}) {
  return Kl(this, "next", e);
}, getPrev(e = {}) {
  return Kl(this, "prev", e);
} };
function wb(e, t) {
  const o = t ? new Set(t) : void 0, r = [];
  function n(i) {
    i.forEach((a) => {
      r.push(a), !(a.isLeaf || !a.children || a.ignored) && (a.isGroup || o === void 0 || o.has(a.key)) && n(a.children);
    });
  }
  return n(e), r;
}
function Sb(e, t) {
  const o = e.key;
  for (; t; ) {
    if (t.key === o) return true;
    t = t.parent;
  }
  return false;
}
function Gc(e, t, o, r, n, i = null, a = 0) {
  const l = [];
  return e.forEach((s, d) => {
    var c;
    const u = Object.create(r);
    if (u.rawNode = s, u.siblings = l, u.level = a, u.index = d, u.isFirstChild = d === 0, u.isLastChild = d + 1 === e.length, u.parent = i, !u.ignored) {
      const p = n(s);
      Array.isArray(p) && (u.children = Gc(p, t, o, r, n, u, a + 1));
    }
    l.push(u), t.set(u.key, u), o.has(a) || o.set(a, []), (c = o.get(a)) === null || c === void 0 || c.push(u);
  }), l;
}
function $b(e, t = {}) {
  var o;
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), { getDisabled: i = lb, getIgnored: a = ib, getIsGroup: l = ub, getKey: s = nb } = t, d = (o = t.getChildren) !== null && o !== void 0 ? o : rb, c = t.ignoreEmptyChildren ? (w) => {
    const E = d(w);
    return Array.isArray(E) ? E.length ? E : null : E;
  } : d, u = Object.assign({ get key() {
    return s(this.rawNode);
  }, get disabled() {
    return i(this.rawNode);
  }, get isGroup() {
    return l(this.rawNode);
  }, get isLeaf() {
    return ob(this.rawNode, c);
  }, get shallowLoaded() {
    return ab(this.rawNode, c);
  }, get ignored() {
    return a(this.rawNode);
  }, contains(w) {
    return Sb(this, w);
  } }, yb), p = Gc(e, r, n, u, c);
  function h(w) {
    if (w == null) return null;
    const E = r.get(w);
    return E && !E.isGroup && !E.ignored ? E : null;
  }
  function f(w) {
    if (w == null) return null;
    const E = r.get(w);
    return E && !E.ignored ? E : null;
  }
  function g(w, E) {
    const P = f(w);
    return P ? P.getPrev(E) : null;
  }
  function v(w, E) {
    const P = f(w);
    return P ? P.getNext(E) : null;
  }
  function m(w) {
    const E = f(w);
    return E ? E.getParent() : null;
  }
  function C(w) {
    const E = f(w);
    return E ? E.getChild() : null;
  }
  const S = { treeNodes: p, treeNodeMap: r, levelTreeNodeMap: n, maxLevel: Math.max(...n.keys()), getChildren: c, getFlattenedNodes(w) {
    return wb(p, w);
  }, getNode: h, getPrev: g, getNext: v, getParent: m, getChild: C, getFirstAvailableNode() {
    return vb(p);
  }, getPath(w, E = {}) {
    return mb(w, E, S);
  }, getCheckedKeys(w, E = {}) {
    const { cascade: P = true, leafOnly: x = false, checkStrategy: $ = "all", allowNotLoaded: R = false } = E;
    return si({ checkedKeys: ai(w), indeterminateKeys: li(w), cascade: P, leafOnly: x, checkStrategy: $, allowNotLoaded: R }, S);
  }, check(w, E, P = {}) {
    const { cascade: x = true, leafOnly: $ = false, checkStrategy: R = "all", allowNotLoaded: O = false } = P;
    return si({ checkedKeys: ai(E), indeterminateKeys: li(E), keysToCheck: w == null ? [] : Ul(w), cascade: x, leafOnly: $, checkStrategy: R, allowNotLoaded: O }, S);
  }, uncheck(w, E, P = {}) {
    const { cascade: x = true, leafOnly: $ = false, checkStrategy: R = "all", allowNotLoaded: O = false } = P;
    return si({ checkedKeys: ai(E), indeterminateKeys: li(E), keysToUncheck: w == null ? [] : Ul(w), cascade: x, leafOnly: $, checkStrategy: R, allowNotLoaded: O }, S);
  }, getNonLeafKeys(w = {}) {
    return tb(p, w);
  } };
  return S;
}
const Pb = { iconSizeTiny: "28px", iconSizeSmall: "34px", iconSizeMedium: "40px", iconSizeLarge: "46px", iconSizeHuge: "52px" };
function Rb(e) {
  const { textColorDisabled: t, iconColor: o, textColor2: r, fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: l, fontSizeHuge: s } = e;
  return Object.assign(Object.assign({}, Pb), { fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: l, fontSizeHuge: s, textColor: t, iconColor: o, extraTextColor: r });
}
const bo = { name: "Empty", common: q, self: Rb }, Eb = { height: "calc(var(--n-option-height) * 7.6)", paddingTiny: "4px 0", paddingSmall: "4px 0", paddingMedium: "4px 0", paddingLarge: "4px 0", paddingHuge: "4px 0", optionPaddingTiny: "0 12px", optionPaddingSmall: "0 12px", optionPaddingMedium: "0 12px", optionPaddingLarge: "0 12px", optionPaddingHuge: "0 12px", loadingSize: "18px" };
function kb(e) {
  const { borderRadius: t, popoverColor: o, textColor3: r, dividerColor: n, textColor2: i, primaryColorPressed: a, textColorDisabled: l, primaryColor: s, opacityDisabled: d, hoverColor: c, fontSizeTiny: u, fontSizeSmall: p, fontSizeMedium: h, fontSizeLarge: f, fontSizeHuge: g, heightTiny: v, heightSmall: m, heightMedium: C, heightLarge: S, heightHuge: w } = e;
  return Object.assign(Object.assign({}, Eb), { optionFontSizeTiny: u, optionFontSizeSmall: p, optionFontSizeMedium: h, optionFontSizeLarge: f, optionFontSizeHuge: g, optionHeightTiny: v, optionHeightSmall: m, optionHeightMedium: C, optionHeightLarge: S, optionHeightHuge: w, borderRadius: t, color: o, groupHeaderTextColor: r, actionDividerColor: n, optionTextColor: i, optionTextColorPressed: a, optionTextColorDisabled: l, optionTextColorActive: s, optionOpacityDisabled: d, optionCheckColor: s, optionColorPending: c, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: c, actionTextColor: i, loadingColor: s });
}
const qr = { name: "InternalSelectMenu", common: q, peers: { Scrollbar: nt, Empty: bo }, self: kb }, { cubicBezierEaseIn: Yl, cubicBezierEaseOut: Xl } = Pt;
function Uc({ transformOrigin: e = "inherit", duration: t = ".2s", enterScale: o = ".9", originalTransform: r = "", originalTransition: n = "" } = {}) {
  return [I("&.fade-in-scale-up-transition-leave-active", { transformOrigin: e, transition: `opacity ${t} ${Yl}, transform ${t} ${Yl} ${n && `,${n}`}` }), I("&.fade-in-scale-up-transition-enter-active", { transformOrigin: e, transition: `opacity ${t} ${Xl}, transform ${t} ${Xl} ${n && `,${n}`}` }), I("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", { opacity: 0, transform: `${r} scale(${o})` }), I("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", { opacity: 1, transform: `${r} scale(1)` })];
}
const Tb = { space: "6px", spaceArrow: "10px", arrowOffset: "10px", arrowOffsetVertical: "10px", arrowHeight: "6px", padding: "8px 14px" };
function zb(e) {
  const { boxShadow2: t, popoverColor: o, textColor2: r, borderRadius: n, fontSize: i, dividerColor: a } = e;
  return Object.assign(Object.assign({}, Tb), { fontSize: i, borderRadius: n, color: o, dividerColor: a, textColor: r, boxShadow: t });
}
const xo = { name: "Popover", common: q, peers: { Scrollbar: nt }, self: zb }, ci = { top: "bottom", bottom: "top", left: "right", right: "left" }, Qe = "var(--n-arrow-height) * 1.414", Ib = I([V("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [I(">", [V("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ze("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Ze("scrollable", [Ze("show-header-or-footer", "padding: var(--n-padding);")])]), L("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), L("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), H("scrollable, show-header-or-footer", [L("content", `
 padding: var(--n-padding);
 `)])]), V("popover-shared", `
 transform-origin: inherit;
 `, [V("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [V("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Qe});
 height: calc(${Qe});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), I("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `), I("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `), I("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), I("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), yt("top-start", `
 top: calc(${Qe} / -2);
 left: calc(${Xt("top-start")} - var(--v-offset-left));
 `), yt("top", `
 top: calc(${Qe} / -2);
 transform: translateX(calc(${Qe} / -2)) rotate(45deg);
 left: 50%;
 `), yt("top-end", `
 top: calc(${Qe} / -2);
 right: calc(${Xt("top-end")} + var(--v-offset-left));
 `), yt("bottom-start", `
 bottom: calc(${Qe} / -2);
 left: calc(${Xt("bottom-start")} - var(--v-offset-left));
 `), yt("bottom", `
 bottom: calc(${Qe} / -2);
 transform: translateX(calc(${Qe} / -2)) rotate(45deg);
 left: 50%;
 `), yt("bottom-end", `
 bottom: calc(${Qe} / -2);
 right: calc(${Xt("bottom-end")} + var(--v-offset-left));
 `), yt("left-start", `
 left: calc(${Qe} / -2);
 top: calc(${Xt("left-start")} - var(--v-offset-top));
 `), yt("left", `
 left: calc(${Qe} / -2);
 transform: translateY(calc(${Qe} / -2)) rotate(45deg);
 top: 50%;
 `), yt("left-end", `
 left: calc(${Qe} / -2);
 bottom: calc(${Xt("left-end")} + var(--v-offset-top));
 `), yt("right-start", `
 right: calc(${Qe} / -2);
 top: calc(${Xt("right-start")} - var(--v-offset-top));
 `), yt("right", `
 right: calc(${Qe} / -2);
 transform: translateY(calc(${Qe} / -2)) rotate(45deg);
 top: 50%;
 `), yt("right-end", `
 right: calc(${Qe} / -2);
 bottom: calc(${Xt("right-end")} + var(--v-offset-top));
 `), ...Hh({ top: ["right-start", "left-start"], right: ["top-end", "bottom-end"], bottom: ["right-end", "left-end"], left: ["top-start", "bottom-start"] }, (e, t) => {
  const o = ["right", "left"].includes(t), r = o ? "width" : "height";
  return e.map((n) => {
    const i = n.split("-")[1] === "end", l = `calc((${`var(--v-target-${r}, 0px)`} - ${Qe}) / 2)`, s = Xt(n);
    return I(`[v-placement="${n}"] >`, [V("popover-shared", [H("center-arrow", [V("popover-arrow", `${t}: calc(max(${l}, ${s}) ${i ? "+" : "-"} var(--v-offset-${o ? "left" : "top"}));`)])])]);
  });
})]);
function Xt(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function yt(e, t) {
  const o = e.split("-")[0], r = ["top", "bottom"].includes(o) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return I(`[v-placement="${e}"] >`, [V("popover-shared", `
 margin-${ci[o]}: var(--n-space);
 `, [H("show-arrow", `
 margin-${ci[o]}: var(--n-space-arrow);
 `), H("overlap", `
 margin: 0;
 `), Sg("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${ci[o]}: auto;
 ${r}
 `, [V("popover-arrow", t)])])]);
}
const Kc = Object.assign(Object.assign({}, me.props), { to: Zo.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function Yc({ arrowClass: e, arrowStyle: t, arrowWrapperClass: o, arrowWrapperStyle: r, clsPrefix: n }) {
  return b("div", { key: "__popover-arrow__", style: r, class: [`${n}-popover-arrow-wrapper`, o] }, b("div", { class: [`${n}-popover-arrow`, e], style: t }));
}
const Ab = J({ name: "PopoverBody", inheritAttrs: false, props: Kc, setup(e, { slots: t, attrs: o }) {
  const { namespaceRef: r, mergedClsPrefixRef: n, inlineThemeDisabled: i, mergedRtlRef: a } = rt(e), l = me("Popover", "-popover", Ib, xo, e, n), s = zt("Popover", a, n), d = W(null), c = de("NPopover"), u = W(null), p = W(e.show), h = W(false);
  Dt(() => {
    const { show: R } = e;
    R && !Wm() && !e.internalDeactivateImmediately && (h.value = true);
  });
  const f = B(() => {
    const { trigger: R, onClickoutside: O } = e, _ = [], { positionManuallyRef: { value: y } } = c;
    return y || (R === "click" && !O && _.push([wn, P, void 0, { capture: true }]), R === "hover" && _.push([rm, E])), O && _.push([wn, P, void 0, { capture: true }]), (e.displayDirective === "show" || e.animated && h.value) && _.push([Rr, e.show]), _;
  }), g = B(() => {
    const { common: { cubicBezierEaseInOut: R, cubicBezierEaseIn: O, cubicBezierEaseOut: _ }, self: { space: y, spaceArrow: A, padding: T, fontSize: z, textColor: j, dividerColor: F, color: U, boxShadow: ne, borderRadius: se, arrowHeight: he, arrowOffset: ue, arrowOffsetVertical: we } } = l.value;
    return { "--n-box-shadow": ne, "--n-bezier": R, "--n-bezier-ease-in": O, "--n-bezier-ease-out": _, "--n-font-size": z, "--n-text-color": j, "--n-color": U, "--n-divider-color": F, "--n-border-radius": se, "--n-arrow-height": he, "--n-arrow-offset": ue, "--n-arrow-offset-vertical": we, "--n-padding": T, "--n-space": y, "--n-space-arrow": A };
  }), v = B(() => {
    const R = e.width === "trigger" ? void 0 : to(e.width), O = [];
    R && O.push({ width: R });
    const { maxWidth: _, minWidth: y } = e;
    return _ && O.push({ maxWidth: to(_) }), y && O.push({ maxWidth: to(y) }), i || O.push(g.value), O;
  }), m = i ? gt("popover", void 0, g, e) : void 0;
  c.setBodyInstance({ syncPosition: C }), ot(() => {
    c.setBodyInstance(null);
  }), Te(be(e, "show"), (R) => {
    e.animated || (R ? p.value = true : p.value = false);
  });
  function C() {
    var R;
    (R = d.value) === null || R === void 0 || R.syncPosition();
  }
  function S(R) {
    e.trigger === "hover" && e.keepAliveOnHover && e.show && c.handleMouseEnter(R);
  }
  function w(R) {
    e.trigger === "hover" && e.keepAliveOnHover && c.handleMouseLeave(R);
  }
  function E(R) {
    e.trigger === "hover" && !x().contains(Ir(R)) && c.handleMouseMoveOutside(R);
  }
  function P(R) {
    (e.trigger === "click" && !x().contains(Ir(R)) || e.onClickoutside) && c.handleClickOutside(R);
  }
  function x() {
    return c.getTriggerElement();
  }
  Se(er, u), Se(Wr, null), Se(jr, null);
  function $() {
    if (m == null ? void 0 : m.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value)) return null;
    let O;
    const _ = c.internalRenderBodyRef.value, { value: y } = n;
    if (_) O = _([`${y}-popover-shared`, (s == null ? void 0 : s.value) && `${y}-popover--rtl`, m == null ? void 0 : m.themeClass.value, e.overlap && `${y}-popover-shared--overlap`, e.showArrow && `${y}-popover-shared--show-arrow`, e.arrowPointToCenter && `${y}-popover-shared--center-arrow`], u, v.value, S, w);
    else {
      const { value: A } = c.extraClassRef, { internalTrapFocus: T } = e, z = !Mi(t.header) || !Mi(t.footer), j = () => {
        var F, U;
        const ne = z ? b($t, null, Ge(t.header, (ue) => ue ? b("div", { class: [`${y}-popover__header`, e.headerClass], style: e.headerStyle }, ue) : null), Ge(t.default, (ue) => ue ? b("div", { class: [`${y}-popover__content`, e.contentClass], style: e.contentStyle }, t) : null), Ge(t.footer, (ue) => ue ? b("div", { class: [`${y}-popover__footer`, e.footerClass], style: e.footerStyle }, ue) : null)) : e.scrollable ? (F = t.default) === null || F === void 0 ? void 0 : F.call(t) : b("div", { class: [`${y}-popover__content`, e.contentClass], style: e.contentStyle }, t), se = e.scrollable ? b(Vc, { themeOverrides: l.value.peerOverrides.Scrollbar, theme: l.value.peers.Scrollbar, contentClass: z ? void 0 : `${y}-popover__content ${(U = e.contentClass) !== null && U !== void 0 ? U : ""}`, contentStyle: z ? void 0 : e.contentStyle }, { default: () => ne }) : ne, he = e.showArrow ? Yc({ arrowClass: e.arrowClass, arrowStyle: e.arrowStyle, arrowWrapperClass: e.arrowWrapperClass, arrowWrapperStyle: e.arrowWrapperStyle, clsPrefix: y }) : null;
        return [se, he];
      };
      O = b("div", Ht({ class: [`${y}-popover`, `${y}-popover-shared`, (s == null ? void 0 : s.value) && `${y}-popover--rtl`, m == null ? void 0 : m.themeClass.value, A.map((F) => `${y}-${F}`), { [`${y}-popover--scrollable`]: e.scrollable, [`${y}-popover--show-header-or-footer`]: z, [`${y}-popover--raw`]: e.raw, [`${y}-popover-shared--overlap`]: e.overlap, [`${y}-popover-shared--show-arrow`]: e.showArrow, [`${y}-popover-shared--center-arrow`]: e.arrowPointToCenter }], ref: u, style: v.value, onKeydown: c.handleKeydown, onMouseenter: S, onMouseleave: w }, o), T ? b(ma, { active: e.show, autoFocus: true }, { default: j }) : j());
    }
    return Lt(O, f.value);
  }
  return { displayed: h, namespace: r, isMounted: c.isMountedRef, zIndex: c.zIndexRef, followerRef: d, adjustedTo: Zo(e), followerEnabled: p, renderContentNode: $ };
}, render() {
  return b(Rc, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === Zo.tdkey }, { default: () => this.animated ? b(Et, { name: "popover-transition", appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var e;
    (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), Mb = Object.keys(Kc), Bb = { focus: ["onFocus", "onBlur"], click: ["onClick"], hover: ["onMouseenter", "onMouseleave"], manual: [], nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"] };
function Ob(e, t, o) {
  Bb[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const n = e.props[r], i = o[r];
    n ? e.props[r] = (...a) => {
      n(...a), i(...a);
    } : e.props[r] = i;
  });
}
const Bn = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: "hover" }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: "top" }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: "if" }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: Zo.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number }, Fb = Object.assign(Object.assign(Object.assign({}, me.props), Bn), { internalOnAfterLeave: Function, internalRenderBody: Function }), Xc = J({ name: "Popover", inheritAttrs: false, props: Fb, slots: Object, __popover__: true, setup(e) {
  const t = Nr(), o = W(null), r = B(() => e.show), n = W(e.defaultShow), i = Ar(r, n), a = ht(() => e.disabled ? false : i.value), l = () => {
    if (e.disabled) return true;
    const { getDisabled: z } = e;
    return !!(z == null ? void 0 : z());
  }, s = () => l() ? false : i.value, d = mc(e, ["arrow", "showArrow"]), c = B(() => e.overlap ? false : d.value);
  let u = null;
  const p = W(null), h = W(null), f = ht(() => e.x !== void 0 && e.y !== void 0);
  function g(z) {
    const { "onUpdate:show": j, onUpdateShow: F, onShow: U, onHide: ne } = e;
    n.value = z, j && ge(j, z), F && ge(F, z), z && U && ge(U, true), z && ne && ge(ne, false);
  }
  function v() {
    u && u.syncPosition();
  }
  function m() {
    const { value: z } = p;
    z && (window.clearTimeout(z), p.value = null);
  }
  function C() {
    const { value: z } = h;
    z && (window.clearTimeout(z), h.value = null);
  }
  function S() {
    const z = l();
    if (e.trigger === "focus" && !z) {
      if (s()) return;
      g(true);
    }
  }
  function w() {
    const z = l();
    if (e.trigger === "focus" && !z) {
      if (!s()) return;
      g(false);
    }
  }
  function E() {
    const z = l();
    if (e.trigger === "hover" && !z) {
      if (C(), p.value !== null || s()) return;
      const j = () => {
        g(true), p.value = null;
      }, { delay: F } = e;
      F === 0 ? j() : p.value = window.setTimeout(j, F);
    }
  }
  function P() {
    const z = l();
    if (e.trigger === "hover" && !z) {
      if (m(), h.value !== null || !s()) return;
      const j = () => {
        g(false), h.value = null;
      }, { duration: F } = e;
      F === 0 ? j() : h.value = window.setTimeout(j, F);
    }
  }
  function x() {
    P();
  }
  function $(z) {
    var j;
    s() && (e.trigger === "click" && (m(), C(), g(false)), (j = e.onClickoutside) === null || j === void 0 || j.call(e, z));
  }
  function R() {
    if (e.trigger === "click" && !l()) {
      m(), C();
      const z = !s();
      g(z);
    }
  }
  function O(z) {
    e.internalTrapFocus && z.key === "Escape" && (m(), C(), g(false));
  }
  function _(z) {
    n.value = z;
  }
  function y() {
    var z;
    return (z = o.value) === null || z === void 0 ? void 0 : z.targetRef;
  }
  function A(z) {
    u = z;
  }
  return Se("NPopover", { getTriggerElement: y, handleKeydown: O, handleMouseEnter: E, handleMouseLeave: P, handleClickOutside: $, handleMouseMoveOutside: x, setBodyInstance: A, positionManuallyRef: f, isMountedRef: t, zIndexRef: be(e, "zIndex"), extraClassRef: be(e, "internalExtraClass"), internalRenderBodyRef: be(e, "internalRenderBody") }), Dt(() => {
    i.value && l() && g(false);
  }), { binderInstRef: o, positionManually: f, mergedShowConsideringDisabledProp: a, uncontrolledShow: n, mergedShowArrow: c, getMergedShow: s, setShow: _, handleClick: R, handleMouseEnter: E, handleMouseLeave: P, handleFocus: S, handleBlur: w, syncPosition: v };
}, render() {
  var e;
  const { positionManually: t, $slots: o } = this;
  let r, n = false;
  if (!t && (r = Vm(o, "trigger"), r)) {
    r = ws(r), r = r.type === Su ? b("span", [r]) : r;
    const i = { onClick: this.handleClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur };
    if (!((e = r.type) === null || e === void 0) && e.__popover__) n = true, r.props || (r.props = { internalSyncTargetWithParent: true, internalInheritedEventHandlers: [] }), r.props.internalSyncTargetWithParent = true, r.props.internalInheritedEventHandlers ? r.props.internalInheritedEventHandlers = [i, ...r.props.internalInheritedEventHandlers] : r.props.internalInheritedEventHandlers = [i];
    else {
      const { internalInheritedEventHandlers: a } = this, l = [i, ...a], s = { onBlur: (d) => {
        l.forEach((c) => {
          c.onBlur(d);
        });
      }, onFocus: (d) => {
        l.forEach((c) => {
          c.onFocus(d);
        });
      }, onClick: (d) => {
        l.forEach((c) => {
          c.onClick(d);
        });
      }, onMouseenter: (d) => {
        l.forEach((c) => {
          c.onMouseenter(d);
        });
      }, onMouseleave: (d) => {
        l.forEach((c) => {
          c.onMouseleave(d);
        });
      } };
      Ob(r, a ? "nested" : t ? "manual" : this.trigger, s);
    }
  }
  return b(Sc, { ref: "binderInstRef", syncTarget: !n, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    const i = this.getMergedShow();
    return [this.internalTrapFocus && i ? Lt(b("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 } }), [[An, { enabled: i, zIndex: this.zIndex }]]) : null, t ? null : b($c, null, { default: () => r }), b(Ab, Or(this.$props, Mb, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: i })), { default: () => {
      var a, l;
      return (l = (a = this.$slots).default) === null || l === void 0 ? void 0 : l.call(a);
    }, header: () => {
      var a, l;
      return (l = (a = this.$slots).header) === null || l === void 0 ? void 0 : l.call(a);
    }, footer: () => {
      var a, l;
      return (l = (a = this.$slots).footer) === null || l === void 0 ? void 0 : l.call(a);
    } })];
  } });
} }), Lb = { closeIconSizeTiny: "12px", closeIconSizeSmall: "12px", closeIconSizeMedium: "14px", closeIconSizeLarge: "14px", closeSizeTiny: "16px", closeSizeSmall: "16px", closeSizeMedium: "18px", closeSizeLarge: "18px", padding: "0 7px", closeMargin: "0 0 0 4px" };
function Db(e) {
  const { textColor2: t, primaryColorHover: o, primaryColorPressed: r, primaryColor: n, infoColor: i, successColor: a, warningColor: l, errorColor: s, baseColor: d, borderColor: c, opacityDisabled: u, tagColor: p, closeIconColor: h, closeIconColorHover: f, closeIconColorPressed: g, borderRadiusSmall: v, fontSizeMini: m, fontSizeTiny: C, fontSizeSmall: S, fontSizeMedium: w, heightMini: E, heightTiny: P, heightSmall: x, heightMedium: $, closeColorHover: R, closeColorPressed: O, buttonColor2Hover: _, buttonColor2Pressed: y, fontWeightStrong: A } = e;
  return Object.assign(Object.assign({}, Lb), { closeBorderRadius: v, heightTiny: E, heightSmall: P, heightMedium: x, heightLarge: $, borderRadius: v, opacityDisabled: u, fontSizeTiny: m, fontSizeSmall: C, fontSizeMedium: S, fontSizeLarge: w, fontWeightStrong: A, textColorCheckable: t, textColorHoverCheckable: t, textColorPressedCheckable: t, textColorChecked: d, colorCheckable: "#0000", colorHoverCheckable: _, colorPressedCheckable: y, colorChecked: n, colorCheckedHover: o, colorCheckedPressed: r, border: `1px solid ${c}`, textColor: t, color: p, colorBordered: "rgb(250, 250, 252)", closeIconColor: h, closeIconColorHover: f, closeIconColorPressed: g, closeColorHover: R, closeColorPressed: O, borderPrimary: `1px solid ${ee(n, { alpha: 0.3 })}`, textColorPrimary: n, colorPrimary: ee(n, { alpha: 0.12 }), colorBorderedPrimary: ee(n, { alpha: 0.1 }), closeIconColorPrimary: n, closeIconColorHoverPrimary: n, closeIconColorPressedPrimary: n, closeColorHoverPrimary: ee(n, { alpha: 0.12 }), closeColorPressedPrimary: ee(n, { alpha: 0.18 }), borderInfo: `1px solid ${ee(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: ee(i, { alpha: 0.12 }), colorBorderedInfo: ee(i, { alpha: 0.1 }), closeIconColorInfo: i, closeIconColorHoverInfo: i, closeIconColorPressedInfo: i, closeColorHoverInfo: ee(i, { alpha: 0.12 }), closeColorPressedInfo: ee(i, { alpha: 0.18 }), borderSuccess: `1px solid ${ee(a, { alpha: 0.3 })}`, textColorSuccess: a, colorSuccess: ee(a, { alpha: 0.12 }), colorBorderedSuccess: ee(a, { alpha: 0.1 }), closeIconColorSuccess: a, closeIconColorHoverSuccess: a, closeIconColorPressedSuccess: a, closeColorHoverSuccess: ee(a, { alpha: 0.12 }), closeColorPressedSuccess: ee(a, { alpha: 0.18 }), borderWarning: `1px solid ${ee(l, { alpha: 0.35 })}`, textColorWarning: l, colorWarning: ee(l, { alpha: 0.15 }), colorBorderedWarning: ee(l, { alpha: 0.12 }), closeIconColorWarning: l, closeIconColorHoverWarning: l, closeIconColorPressedWarning: l, closeColorHoverWarning: ee(l, { alpha: 0.12 }), closeColorPressedWarning: ee(l, { alpha: 0.18 }), borderError: `1px solid ${ee(s, { alpha: 0.23 })}`, textColorError: s, colorError: ee(s, { alpha: 0.1 }), colorBorderedError: ee(s, { alpha: 0.08 }), closeIconColorError: s, closeIconColorHoverError: s, closeIconColorPressedError: s, closeColorHoverError: ee(s, { alpha: 0.12 }), closeColorPressedError: ee(s, { alpha: 0.18 }) });
}
const ya = { name: "Tag", common: q, self: Db }, Hb = { color: Object, type: { type: String, default: "default" }, round: Boolean, size: { type: String, default: "medium" }, closable: Boolean, disabled: { type: Boolean, default: void 0 } }, _b = V("tag", `
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [H("strong", `
 font-weight: var(--n-font-weight-strong);
 `), L("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), L("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), L("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), L("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), H("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [L("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), L("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), H("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), H("icon, avatar", [H("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), H("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), H("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [Ze("disabled", [I("&:hover", "background-color: var(--n-color-hover-checkable);", [Ze("checked", "color: var(--n-text-color-hover-checkable);")]), I("&:active", "background-color: var(--n-color-pressed-checkable);", [Ze("checked", "color: var(--n-text-color-pressed-checkable);")])]), H("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [Ze("disabled", [I("&:hover", "background-color: var(--n-color-checked-hover);"), I("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), Nb = Object.assign(Object.assign(Object.assign({}, me.props), Hb), { bordered: { type: Boolean, default: void 0 }, checked: Boolean, checkable: Boolean, strong: Boolean, triggerClickOnClose: Boolean, onClose: [Array, Function], onMouseenter: Function, onMouseleave: Function, "onUpdate:checked": Function, onUpdateChecked: Function, internalCloseFocusable: { type: Boolean, default: true }, internalCloseIsButtonTag: { type: Boolean, default: true }, onCheckedChange: Function }), Wb = "n-tag", jb = J({ name: "Tag", props: Nb, slots: Object, setup(e) {
  const t = W(null), { mergedBorderedRef: o, mergedClsPrefixRef: r, inlineThemeDisabled: n, mergedRtlRef: i } = rt(e), a = me("Tag", "-tag", _b, ya, e, r);
  Se(Wb, { roundRef: be(e, "round") });
  function l() {
    if (!e.disabled && e.checkable) {
      const { checked: h, onCheckedChange: f, onUpdateChecked: g, "onUpdate:checked": v } = e;
      g && g(!h), v && v(!h), f && f(!h);
    }
  }
  function s(h) {
    if (e.triggerClickOnClose || h.stopPropagation(), !e.disabled) {
      const { onClose: f } = e;
      f && ge(f, h);
    }
  }
  const d = { setTextContent(h) {
    const { value: f } = t;
    f && (f.textContent = h);
  } }, c = zt("Tag", i, r), u = B(() => {
    const { type: h, size: f, color: { color: g, textColor: v } = {} } = e, { common: { cubicBezierEaseInOut: m }, self: { padding: C, closeMargin: S, borderRadius: w, opacityDisabled: E, textColorCheckable: P, textColorHoverCheckable: x, textColorPressedCheckable: $, textColorChecked: R, colorCheckable: O, colorHoverCheckable: _, colorPressedCheckable: y, colorChecked: A, colorCheckedHover: T, colorCheckedPressed: z, closeBorderRadius: j, fontWeightStrong: F, [Y("colorBordered", h)]: U, [Y("closeSize", f)]: ne, [Y("closeIconSize", f)]: se, [Y("fontSize", f)]: he, [Y("height", f)]: ue, [Y("color", h)]: we, [Y("textColor", h)]: Ce, [Y("border", h)]: Be, [Y("closeIconColor", h)]: re, [Y("closeIconColorHover", h)]: M, [Y("closeIconColorPressed", h)]: K, [Y("closeColorHover", h)]: D, [Y("closeColorPressed", h)]: Q } } = a.value, ce = Jt(S);
    return { "--n-font-weight-strong": F, "--n-avatar-size-override": `calc(${ue} - 8px)`, "--n-bezier": m, "--n-border-radius": w, "--n-border": Be, "--n-close-icon-size": se, "--n-close-color-pressed": Q, "--n-close-color-hover": D, "--n-close-border-radius": j, "--n-close-icon-color": re, "--n-close-icon-color-hover": M, "--n-close-icon-color-pressed": K, "--n-close-icon-color-disabled": re, "--n-close-margin-top": ce.top, "--n-close-margin-right": ce.right, "--n-close-margin-bottom": ce.bottom, "--n-close-margin-left": ce.left, "--n-close-size": ne, "--n-color": g || (o.value ? U : we), "--n-color-checkable": O, "--n-color-checked": A, "--n-color-checked-hover": T, "--n-color-checked-pressed": z, "--n-color-hover-checkable": _, "--n-color-pressed-checkable": y, "--n-font-size": he, "--n-height": ue, "--n-opacity-disabled": E, "--n-padding": C, "--n-text-color": v || Ce, "--n-text-color-checkable": P, "--n-text-color-checked": R, "--n-text-color-hover-checkable": x, "--n-text-color-pressed-checkable": $ };
  }), p = n ? gt("tag", B(() => {
    let h = "";
    const { type: f, size: g, color: { color: v, textColor: m } = {} } = e;
    return h += f[0], h += g[0], v && (h += `a${Sn(v)}`), m && (h += `b${Sn(m)}`), o.value && (h += "c"), h;
  }), u, e) : void 0;
  return Object.assign(Object.assign({}, d), { rtlEnabled: c, mergedClsPrefix: r, contentRef: t, mergedBordered: o, handleClick: l, handleCloseClick: s, cssVars: n ? void 0 : u, themeClass: p == null ? void 0 : p.themeClass, onRender: p == null ? void 0 : p.onRender });
}, render() {
  var e, t;
  const { mergedClsPrefix: o, rtlEnabled: r, closable: n, color: { borderColor: i } = {}, round: a, onRender: l, $slots: s } = this;
  l == null ? void 0 : l();
  const d = Ge(s.avatar, (u) => u && b("div", { class: `${o}-tag__avatar` }, u)), c = Ge(s.icon, (u) => u && b("div", { class: `${o}-tag__icon` }, u));
  return b("div", { class: [`${o}-tag`, this.themeClass, { [`${o}-tag--rtl`]: r, [`${o}-tag--strong`]: this.strong, [`${o}-tag--disabled`]: this.disabled, [`${o}-tag--checkable`]: this.checkable, [`${o}-tag--checked`]: this.checkable && this.checked, [`${o}-tag--round`]: a, [`${o}-tag--avatar`]: d, [`${o}-tag--icon`]: c, [`${o}-tag--closable`]: n }], style: this.cssVars, onClick: this.handleClick, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave }, c || d, b("span", { class: `${o}-tag__content`, ref: "contentRef" }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this.checkable && n ? b(Mn, { clsPrefix: o, class: `${o}-tag__close`, disabled: this.disabled, onClick: this.handleCloseClick, focusable: this.internalCloseFocusable, round: a, isButtonTag: this.internalCloseIsButtonTag, absolute: true }) : null, !this.checkable && this.mergedBordered ? b("div", { class: `${o}-tag__border`, style: { borderColor: i } }) : null);
} }), Vb = J({ name: "InternalSelectionSuffix", props: { clsPrefix: { type: String, required: true }, showArrow: { type: Boolean, default: void 0 }, showClear: { type: Boolean, default: void 0 }, loading: { type: Boolean, default: false }, onClear: Function }, setup(e, { slots: t }) {
  return () => {
    const { clsPrefix: o } = e;
    return b(Wc, { clsPrefix: o, class: `${o}-base-suffix`, strokeWidth: 24, scale: 0.85, show: e.loading }, { default: () => e.showArrow ? b(Oi, { clsPrefix: o, show: e.showClear, onClear: e.onClear }, { placeholder: () => b(Jo, { clsPrefix: o, class: `${o}-base-suffix__arrow` }, { default: () => To(t.default, () => [b(Bv, null)]) }) }) : null });
  };
} }), qb = { paddingSingle: "0 26px 0 12px", paddingMultiple: "3px 26px 0 12px", clearSize: "16px", arrowSize: "16px" };
function Gb(e) {
  const { borderRadius: t, textColor2: o, textColorDisabled: r, inputColor: n, inputColorDisabled: i, primaryColor: a, primaryColorHover: l, warningColor: s, warningColorHover: d, errorColor: c, errorColorHover: u, borderColor: p, iconColor: h, iconColorDisabled: f, clearColor: g, clearColorHover: v, clearColorPressed: m, placeholderColor: C, placeholderColorDisabled: S, fontSizeTiny: w, fontSizeSmall: E, fontSizeMedium: P, fontSizeLarge: x, heightTiny: $, heightSmall: R, heightMedium: O, heightLarge: _, fontWeight: y } = e;
  return Object.assign(Object.assign({}, qb), { fontSizeTiny: w, fontSizeSmall: E, fontSizeMedium: P, fontSizeLarge: x, heightTiny: $, heightSmall: R, heightMedium: O, heightLarge: _, borderRadius: t, fontWeight: y, textColor: o, textColorDisabled: r, placeholderColor: C, placeholderColorDisabled: S, color: n, colorDisabled: i, colorActive: n, border: `1px solid ${p}`, borderHover: `1px solid ${l}`, borderActive: `1px solid ${a}`, borderFocus: `1px solid ${l}`, boxShadowHover: "none", boxShadowActive: `0 0 0 2px ${ee(a, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${ee(a, { alpha: 0.2 })}`, caretColor: a, arrowColor: h, arrowColorDisabled: f, loadingColor: a, borderWarning: `1px solid ${s}`, borderHoverWarning: `1px solid ${d}`, borderActiveWarning: `1px solid ${s}`, borderFocusWarning: `1px solid ${d}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 0 2px ${ee(s, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${ee(s, { alpha: 0.2 })}`, colorActiveWarning: n, caretColorWarning: s, borderError: `1px solid ${c}`, borderHoverError: `1px solid ${u}`, borderActiveError: `1px solid ${c}`, borderFocusError: `1px solid ${u}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 0 2px ${ee(c, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${ee(c, { alpha: 0.2 })}`, colorActiveError: n, caretColorError: c, clearColor: g, clearColorHover: v, clearColorPressed: m });
}
const wa = { name: "InternalSelection", common: q, peers: { Popover: xo }, self: Gb }, { cubicBezierEaseInOut: co } = Pt;
function Ub({ duration: e = ".2s", delay: t = ".1s" } = {}) {
  return [I("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }), I("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), I("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${co},
 max-width ${e} ${co} ${t},
 margin-left ${e} ${co} ${t},
 margin-right ${e} ${co} ${t};
 `), I("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${co} ${t},
 max-width ${e} ${co},
 margin-left ${e} ${co},
 margin-right ${e} ${co};
 `)];
}
const Kb = V("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Yb = J({ name: "BaseWave", props: { clsPrefix: { type: String, required: true } }, setup(e) {
  vo("-base-wave", Kb, be(e, "clsPrefix"));
  const t = W(null), o = W(false);
  let r = null;
  return ot(() => {
    r !== null && window.clearTimeout(r);
  }), { active: o, selfRef: t, play() {
    r !== null && (window.clearTimeout(r), o.value = false, r = null), oo(() => {
      var n;
      (n = t.value) === null || n === void 0 || n.offsetHeight, o.value = true, r = window.setTimeout(() => {
        o.value = false, r = null;
      }, 1e3);
    });
  } };
}, render() {
  const { clsPrefix: e } = this;
  return b("div", { ref: "selfRef", "aria-hidden": true, class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`] });
} }), Xb = { iconMargin: "11px 8px 0 12px", iconMarginRtl: "11px 12px 0 8px", iconSize: "24px", closeIconSize: "16px", closeSize: "20px", closeMargin: "13px 14px 0 0", closeMarginRtl: "13px 0 0 14px", padding: "13px" };
function Zb(e) {
  const { lineHeight: t, borderRadius: o, fontWeightStrong: r, baseColor: n, dividerColor: i, actionColor: a, textColor1: l, textColor2: s, closeColorHover: d, closeColorPressed: c, closeIconColor: u, closeIconColorHover: p, closeIconColorPressed: h, infoColor: f, successColor: g, warningColor: v, errorColor: m, fontSize: C } = e;
  return Object.assign(Object.assign({}, Xb), { fontSize: C, lineHeight: t, titleFontWeight: r, borderRadius: o, border: `1px solid ${i}`, color: a, titleTextColor: l, iconColor: s, contentTextColor: s, closeBorderRadius: o, closeColorHover: d, closeColorPressed: c, closeIconColor: u, closeIconColorHover: p, closeIconColorPressed: h, borderInfo: `1px solid ${X(n, ee(f, { alpha: 0.25 }))}`, colorInfo: X(n, ee(f, { alpha: 0.08 })), titleTextColorInfo: l, iconColorInfo: f, contentTextColorInfo: s, closeColorHoverInfo: d, closeColorPressedInfo: c, closeIconColorInfo: u, closeIconColorHoverInfo: p, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${X(n, ee(g, { alpha: 0.25 }))}`, colorSuccess: X(n, ee(g, { alpha: 0.08 })), titleTextColorSuccess: l, iconColorSuccess: g, contentTextColorSuccess: s, closeColorHoverSuccess: d, closeColorPressedSuccess: c, closeIconColorSuccess: u, closeIconColorHoverSuccess: p, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${X(n, ee(v, { alpha: 0.33 }))}`, colorWarning: X(n, ee(v, { alpha: 0.08 })), titleTextColorWarning: l, iconColorWarning: v, contentTextColorWarning: s, closeColorHoverWarning: d, closeColorPressedWarning: c, closeIconColorWarning: u, closeIconColorHoverWarning: p, closeIconColorPressedWarning: h, borderError: `1px solid ${X(n, ee(m, { alpha: 0.25 }))}`, colorError: X(n, ee(m, { alpha: 0.08 })), titleTextColorError: l, iconColorError: m, contentTextColorError: s, closeColorHoverError: d, closeColorPressedError: c, closeIconColorError: u, closeIconColorHoverError: p, closeIconColorPressedError: h });
}
const Jb = { name: "Alert", common: q, self: Zb }, { cubicBezierEaseInOut: Mt, cubicBezierEaseOut: Qb, cubicBezierEaseIn: e0 } = Pt;
function AS({ overflow: e = "hidden", duration: t = ".3s", originalTransition: o = "", leavingDelay: r = "0s", foldPadding: n = false, enterToProps: i = void 0, leaveToProps: a = void 0, reverse: l = false } = {}) {
  const s = l ? "leave" : "enter", d = l ? "enter" : "leave";
  return [I(`&.fade-in-height-expand-transition-${d}-from,
 &.fade-in-height-expand-transition-${s}-to`, Object.assign(Object.assign({}, i), { opacity: 1 })), I(`&.fade-in-height-expand-transition-${d}-to,
 &.fade-in-height-expand-transition-${s}-from`, Object.assign(Object.assign({}, a), { opacity: 0, marginTop: "0 !important", marginBottom: "0 !important", paddingTop: n ? "0 !important" : void 0, paddingBottom: n ? "0 !important" : void 0 })), I(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${Mt} ${r},
 opacity ${t} ${Qb} ${r},
 margin-top ${t} ${Mt} ${r},
 margin-bottom ${t} ${Mt} ${r},
 padding-top ${t} ${Mt} ${r},
 padding-bottom ${t} ${Mt} ${r}
 ${o ? `,${o}` : ""}
 `), I(`&.fade-in-height-expand-transition-${s}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${Mt},
 opacity ${t} ${e0},
 margin-top ${t} ${Mt},
 margin-bottom ${t} ${Mt},
 padding-top ${t} ${Mt},
 padding-bottom ${t} ${Mt}
 ${o ? `,${o}` : ""}
 `)];
}
const t0 = { linkFontSize: "13px", linkPadding: "0 0 0 16px", railWidth: "4px" };
function o0(e) {
  const { borderRadius: t, railColor: o, primaryColor: r, primaryColorHover: n, primaryColorPressed: i, textColor2: a } = e;
  return Object.assign(Object.assign({}, t0), { borderRadius: t, railColor: o, railColorActive: r, linkColor: ee(r, { alpha: 0.15 }), linkTextColor: a, linkTextColorHover: n, linkTextColorPressed: i, linkTextColorActive: r });
}
const r0 = { name: "Anchor", common: q, self: o0 }, n0 = tr && "chrome" in window;
tr && navigator.userAgent.includes("Firefox");
const Zc = tr && navigator.userAgent.includes("Safari") && !n0, i0 = { paddingTiny: "0 8px", paddingSmall: "0 10px", paddingMedium: "0 12px", paddingLarge: "0 14px", clearSize: "16px" };
function a0(e) {
  const { textColor2: t, textColor3: o, textColorDisabled: r, primaryColor: n, primaryColorHover: i, inputColor: a, inputColorDisabled: l, borderColor: s, warningColor: d, warningColorHover: c, errorColor: u, errorColorHover: p, borderRadius: h, lineHeight: f, fontSizeTiny: g, fontSizeSmall: v, fontSizeMedium: m, fontSizeLarge: C, heightTiny: S, heightSmall: w, heightMedium: E, heightLarge: P, actionColor: x, clearColor: $, clearColorHover: R, clearColorPressed: O, placeholderColor: _, placeholderColorDisabled: y, iconColor: A, iconColorDisabled: T, iconColorHover: z, iconColorPressed: j, fontWeight: F } = e;
  return Object.assign(Object.assign({}, i0), { fontWeight: F, countTextColorDisabled: r, countTextColor: o, heightTiny: S, heightSmall: w, heightMedium: E, heightLarge: P, fontSizeTiny: g, fontSizeSmall: v, fontSizeMedium: m, fontSizeLarge: C, lineHeight: f, lineHeightTextarea: f, borderRadius: h, iconSize: "16px", groupLabelColor: x, groupLabelTextColor: t, textColor: t, textColorDisabled: r, textDecorationColor: t, caretColor: n, placeholderColor: _, placeholderColorDisabled: y, color: a, colorDisabled: l, colorFocus: a, groupLabelBorder: `1px solid ${s}`, border: `1px solid ${s}`, borderHover: `1px solid ${i}`, borderDisabled: `1px solid ${s}`, borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 0 2px ${ee(n, { alpha: 0.2 })}`, loadingColor: n, loadingColorWarning: d, borderWarning: `1px solid ${d}`, borderHoverWarning: `1px solid ${c}`, colorFocusWarning: a, borderFocusWarning: `1px solid ${c}`, boxShadowFocusWarning: `0 0 0 2px ${ee(d, { alpha: 0.2 })}`, caretColorWarning: d, loadingColorError: u, borderError: `1px solid ${u}`, borderHoverError: `1px solid ${p}`, colorFocusError: a, borderFocusError: `1px solid ${p}`, boxShadowFocusError: `0 0 0 2px ${ee(u, { alpha: 0.2 })}`, caretColorError: u, clearColor: $, clearColorHover: R, clearColorPressed: O, iconColor: A, iconColorDisabled: T, iconColorHover: z, iconColorPressed: j, suffixTextColor: t });
}
const mt = { name: "Input", common: q, peers: { Scrollbar: nt }, self: a0 }, Jc = "n-input", l0 = V("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [L("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `), L("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `), L("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [I("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), I("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), I("&:-webkit-autofill ~", [L("placeholder", "display: none;")])]), H("round", [Ze("textarea", "border-radius: calc(var(--n-height) / 2);")]), L("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [I("span", `
 width: 100%;
 display: inline-block;
 `)]), H("textarea", [L("placeholder", "overflow: visible;")]), Ze("autosize", "width: 100%;"), H("autosize", [L("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]), V("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `), L("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `), L("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [I("&[type=password]::-ms-reveal", "display: none;"), I("+", [L("placeholder", `
 display: flex;
 align-items: center; 
 `)])]), Ze("textarea", [L("placeholder", "white-space: nowrap;")]), L("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `), H("textarea", "width: 100%;", [V("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), H("resizable", [V("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), L("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), L("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]), H("pair", [L("input-el, placeholder", "text-align: center;"), L("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [V("icon", `
 color: var(--n-icon-color);
 `), V("base-icon", `
 color: var(--n-icon-color);
 `)])]), H("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [L("border", "border: var(--n-border-disabled);"), L("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), L("placeholder", "color: var(--n-placeholder-color-disabled);"), L("separator", "color: var(--n-text-color-disabled);", [V("icon", `
 color: var(--n-icon-color-disabled);
 `), V("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), V("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), L("suffix, prefix", "color: var(--n-text-color-disabled);", [V("icon", `
 color: var(--n-icon-color-disabled);
 `), V("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]), Ze("disabled", [L("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [I("&:hover", `
 color: var(--n-icon-color-hover);
 `), I("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), I("&:hover", [L("state-border", "border: var(--n-border-hover);")]), H("focus", "background-color: var(--n-color-focus);", [L("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), L("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), L("state-border", `
 border-color: #0000;
 z-index: 1;
 `), L("prefix", "margin-right: 4px;"), L("suffix", `
 margin-left: 4px;
 `), L("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [V("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), V("base-clear", `
 font-size: var(--n-icon-size);
 `, [L("placeholder", [V("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), I(">", [V("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), V("base-icon", `
 font-size: var(--n-icon-size);
 `)]), V("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `), ["warning", "error"].map((e) => H(`${e}-status`, [Ze("disabled", [V("base-loading", `
 color: var(--n-loading-color-${e})
 `), L("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), L("state-border", `
 border: var(--n-border-${e});
 `), I("&:hover", [L("state-border", `
 border: var(--n-border-hover-${e});
 `)]), I("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [L("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), H("focus", `
 background-color: var(--n-color-focus-${e});
 `, [L("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), s0 = V("input", [H("disabled", [L("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function c0(e) {
  let t = 0;
  for (const o of e) t++;
  return t;
}
function dn(e) {
  return e === "" || e == null;
}
function d0(e) {
  const t = W(null);
  function o() {
    const { value: i } = e;
    if (!(i == null ? void 0 : i.focus)) {
      n();
      return;
    }
    const { selectionStart: a, selectionEnd: l, value: s } = i;
    if (a == null || l == null) {
      n();
      return;
    }
    t.value = { start: a, end: l, beforeText: s.slice(0, a), afterText: s.slice(l) };
  }
  function r() {
    var i;
    const { value: a } = t, { value: l } = e;
    if (!a || !l) return;
    const { value: s } = l, { start: d, beforeText: c, afterText: u } = a;
    let p = s.length;
    if (s.endsWith(u)) p = s.length - u.length;
    else if (s.startsWith(c)) p = c.length;
    else {
      const h = c[d - 1], f = s.indexOf(h, d - 1);
      f !== -1 && (p = f + 1);
    }
    (i = l.setSelectionRange) === null || i === void 0 || i.call(l, p, p);
  }
  function n() {
    t.value = null;
  }
  return Te(e, n), { recordCursor: o, restoreCursor: r };
}
const Zl = J({ name: "InputWordCount", setup(e, { slots: t }) {
  const { mergedValueRef: o, maxlengthRef: r, mergedClsPrefixRef: n, countGraphemesRef: i } = de(Jc), a = B(() => {
    const { value: l } = o;
    return l === null || Array.isArray(l) ? 0 : (i.value || c0)(l);
  });
  return () => {
    const { value: l } = r, { value: s } = o;
    return b("span", { class: `${n.value}-input-word-count` }, Um(t.default, { value: s === null || Array.isArray(s) ? "" : s }, () => [l === void 0 ? a.value : `${a.value} / ${l}`]));
  };
} }), u0 = Object.assign(Object.assign({}, me.props), { bordered: { type: Boolean, default: void 0 }, type: { type: String, default: "text" }, placeholder: [Array, String], defaultValue: { type: [String, Array], default: null }, value: [String, Array], disabled: { type: Boolean, default: void 0 }, size: String, rows: { type: [Number, String], default: 3 }, round: Boolean, minlength: [String, Number], maxlength: [String, Number], clearable: Boolean, autosize: { type: [Boolean, Object], default: false }, pair: Boolean, separator: String, readonly: { type: [String, Boolean], default: false }, passivelyActivated: Boolean, showPasswordOn: String, stateful: { type: Boolean, default: true }, autofocus: Boolean, inputProps: Object, resizable: { type: Boolean, default: true }, showCount: Boolean, loading: { type: Boolean, default: void 0 }, allowInput: Function, renderCount: Function, onMousedown: Function, onKeydown: Function, onKeyup: [Function, Array], onInput: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClick: [Function, Array], onChange: [Function, Array], onClear: [Function, Array], countGraphemes: Function, status: String, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], textDecoration: [String, Array], attrSize: { type: Number, default: 20 }, onInputBlur: [Function, Array], onInputFocus: [Function, Array], onDeactivate: [Function, Array], onActivate: [Function, Array], onWrapperFocus: [Function, Array], onWrapperBlur: [Function, Array], internalDeactivateOnEnter: Boolean, internalForceFocus: Boolean, internalLoadingBeforeSuffix: { type: Boolean, default: true }, showPasswordToggle: Boolean }), Jl = J({ name: "Input", props: u0, slots: Object, setup(e) {
  const { mergedClsPrefixRef: t, mergedBorderedRef: o, inlineThemeDisabled: r, mergedRtlRef: n } = rt(e), i = me("Input", "-input", l0, mt, e, t);
  Zc && vo("-input-safari", s0, t);
  const a = W(null), l = W(null), s = W(null), d = W(null), c = W(null), u = W(null), p = W(null), h = d0(p), f = W(null), { localeRef: g } = Tv("Input"), v = W(e.defaultValue), m = be(e, "value"), C = Ar(m, v), S = _c(e), { mergedSizeRef: w, mergedDisabledRef: E, mergedStatusRef: P } = S, x = W(false), $ = W(false), R = W(false), O = W(false);
  let _ = null;
  const y = B(() => {
    const { placeholder: k, pair: N } = e;
    return N ? Array.isArray(k) ? k : k === void 0 ? ["", ""] : [k, k] : k === void 0 ? [g.value.placeholder] : [k];
  }), A = B(() => {
    const { value: k } = R, { value: N } = C, { value: ae } = y;
    return !k && (dn(N) || Array.isArray(N) && dn(N[0])) && ae[0];
  }), T = B(() => {
    const { value: k } = R, { value: N } = C, { value: ae } = y;
    return !k && ae[1] && (dn(N) || Array.isArray(N) && dn(N[1]));
  }), z = ht(() => e.internalForceFocus || x.value), j = ht(() => {
    if (E.value || e.readonly || !e.clearable || !z.value && !$.value) return false;
    const { value: k } = C, { value: N } = z;
    return e.pair ? !!(Array.isArray(k) && (k[0] || k[1])) && ($.value || N) : !!k && ($.value || N);
  }), F = B(() => {
    const { showPasswordOn: k } = e;
    if (k) return k;
    if (e.showPasswordToggle) return "click";
  }), U = W(false), ne = B(() => {
    const { textDecoration: k } = e;
    return k ? Array.isArray(k) ? k.map((N) => ({ textDecoration: N })) : [{ textDecoration: k }] : ["", ""];
  }), se = W(void 0), he = () => {
    var k, N;
    if (e.type === "textarea") {
      const { autosize: ae } = e;
      if (ae && (se.value = (N = (k = f.value) === null || k === void 0 ? void 0 : k.$el) === null || N === void 0 ? void 0 : N.offsetWidth), !l.value || typeof ae == "boolean") return;
      const { paddingTop: ze, paddingBottom: He, lineHeight: Pe } = window.getComputedStyle(l.value), qt = Number(ze.slice(0, -2)), Gt = Number(He.slice(0, -2)), Ut = Number(Pe.slice(0, -2)), { value: cr } = s;
      if (!cr) return;
      if (ae.minRows) {
        const dr = Math.max(ae.minRows, 1), jn = `${qt + Gt + Ut * dr}px`;
        cr.style.minHeight = jn;
      }
      if (ae.maxRows) {
        const dr = `${qt + Gt + Ut * ae.maxRows}px`;
        cr.style.maxHeight = dr;
      }
    }
  }, ue = B(() => {
    const { maxlength: k } = e;
    return k === void 0 ? void 0 : Number(k);
  });
  pt(() => {
    const { value: k } = C;
    Array.isArray(k) || at(k);
  });
  const we = mo().proxy;
  function Ce(k, N) {
    const { onUpdateValue: ae, "onUpdate:value": ze, onInput: He } = e, { nTriggerFormInput: Pe } = S;
    ae && ge(ae, k, N), ze && ge(ze, k, N), He && ge(He, k, N), v.value = k, Pe();
  }
  function Be(k, N) {
    const { onChange: ae } = e, { nTriggerFormChange: ze } = S;
    ae && ge(ae, k, N), v.value = k, ze();
  }
  function re(k) {
    const { onBlur: N } = e, { nTriggerFormBlur: ae } = S;
    N && ge(N, k), ae();
  }
  function M(k) {
    const { onFocus: N } = e, { nTriggerFormFocus: ae } = S;
    N && ge(N, k), ae();
  }
  function K(k) {
    const { onClear: N } = e;
    N && ge(N, k);
  }
  function D(k) {
    const { onInputBlur: N } = e;
    N && ge(N, k);
  }
  function Q(k) {
    const { onInputFocus: N } = e;
    N && ge(N, k);
  }
  function ce() {
    const { onDeactivate: k } = e;
    k && ge(k);
  }
  function ie() {
    const { onActivate: k } = e;
    k && ge(k);
  }
  function te(k) {
    const { onClick: N } = e;
    N && ge(N, k);
  }
  function Z(k) {
    const { onWrapperFocus: N } = e;
    N && ge(N, k);
  }
  function $e(k) {
    const { onWrapperBlur: N } = e;
    N && ge(N, k);
  }
  function vt() {
    R.value = true;
  }
  function Ue(k) {
    R.value = false, k.target === u.value ? no(k, 1) : no(k, 0);
  }
  function no(k, N = 0, ae = "input") {
    const ze = k.target.value;
    if (at(ze), k instanceof InputEvent && !k.isComposing && (R.value = false), e.type === "textarea") {
      const { value: Pe } = f;
      Pe && Pe.syncUnifiedContainer();
    }
    if (_ = ze, R.value) return;
    h.recordCursor();
    const He = ir(ze);
    if (He) if (!e.pair) ae === "input" ? Ce(ze, { source: N }) : Be(ze, { source: N });
    else {
      let { value: Pe } = C;
      Array.isArray(Pe) ? Pe = [Pe[0], Pe[1]] : Pe = ["", ""], Pe[N] = ze, ae === "input" ? Ce(Pe, { source: N }) : Be(Pe, { source: N });
    }
    we.$forceUpdate(), He || oo(h.restoreCursor);
  }
  function ir(k) {
    const { countGraphemes: N, maxlength: ae, minlength: ze } = e;
    if (N) {
      let Pe;
      if (ae !== void 0 && (Pe === void 0 && (Pe = N(k)), Pe > Number(ae)) || ze !== void 0 && (Pe === void 0 && (Pe = N(k)), Pe < Number(ae))) return false;
    }
    const { allowInput: He } = e;
    return typeof He == "function" ? He(k) : true;
  }
  function Oe(k) {
    D(k), k.relatedTarget === a.value && ce(), k.relatedTarget !== null && (k.relatedTarget === c.value || k.relatedTarget === u.value || k.relatedTarget === l.value) || (O.value = false), Co(k, "blur"), p.value = null;
  }
  function Ke(k, N) {
    Q(k), x.value = true, O.value = true, ie(), Co(k, "focus"), N === 0 ? p.value = c.value : N === 1 ? p.value = u.value : N === 2 && (p.value = l.value);
  }
  function jt(k) {
    e.passivelyActivated && ($e(k), Co(k, "blur"));
  }
  function Ln(k) {
    e.passivelyActivated && (x.value = true, Z(k), Co(k, "focus"));
  }
  function Co(k, N) {
    k.relatedTarget !== null && (k.relatedTarget === c.value || k.relatedTarget === u.value || k.relatedTarget === l.value || k.relatedTarget === a.value) || (N === "focus" ? (M(k), x.value = true) : N === "blur" && (re(k), x.value = false));
  }
  function Vt(k, N) {
    no(k, N, "change");
  }
  function Kr(k) {
    te(k);
  }
  function Dn(k) {
    K(k), ar();
  }
  function ar() {
    e.pair ? (Ce(["", ""], { source: "clear" }), Be(["", ""], { source: "clear" })) : (Ce("", { source: "clear" }), Be("", { source: "clear" }));
  }
  function Yr(k) {
    const { onMousedown: N } = e;
    N && N(k);
    const { tagName: ae } = k.target;
    if (ae !== "INPUT" && ae !== "TEXTAREA") {
      if (e.resizable) {
        const { value: ze } = a;
        if (ze) {
          const { left: He, top: Pe, width: qt, height: Gt } = ze.getBoundingClientRect(), Ut = 14;
          if (He + qt - Ut < k.clientX && k.clientX < He + qt && Pe + Gt - Ut < k.clientY && k.clientY < Pe + Gt) return;
        }
      }
      k.preventDefault(), x.value || fe();
    }
  }
  function Hn() {
    var k;
    $.value = true, e.type === "textarea" && ((k = f.value) === null || k === void 0 || k.handleMouseEnterWrapper());
  }
  function lr() {
    var k;
    $.value = false, e.type === "textarea" && ((k = f.value) === null || k === void 0 || k.handleMouseLeaveWrapper());
  }
  function sr() {
    E.value || F.value === "click" && (U.value = !U.value);
  }
  function Xr(k) {
    if (E.value) return;
    k.preventDefault();
    const N = (ze) => {
      ze.preventDefault(), Ee("mouseup", document, N);
    };
    if (ke("mouseup", document, N), F.value !== "mousedown") return;
    U.value = true;
    const ae = () => {
      U.value = false, Ee("mouseup", document, ae);
    };
    ke("mouseup", document, ae);
  }
  function io(k) {
    e.onKeyup && ge(e.onKeyup, k);
  }
  function Ma(k) {
    switch (e.onKeydown && ge(e.onKeydown, k), k.key) {
      case "Escape":
        oe();
        break;
      case "Enter":
        G(k);
        break;
    }
  }
  function G(k) {
    var N, ae;
    if (e.passivelyActivated) {
      const { value: ze } = O;
      if (ze) {
        e.internalDeactivateOnEnter && oe();
        return;
      }
      k.preventDefault(), e.type === "textarea" ? (N = l.value) === null || N === void 0 || N.focus() : (ae = c.value) === null || ae === void 0 || ae.focus();
    }
  }
  function oe() {
    e.passivelyActivated && (O.value = false, oo(() => {
      var k;
      (k = a.value) === null || k === void 0 || k.focus();
    }));
  }
  function fe() {
    var k, N, ae;
    E.value || (e.passivelyActivated ? (k = a.value) === null || k === void 0 || k.focus() : ((N = l.value) === null || N === void 0 || N.focus(), (ae = c.value) === null || ae === void 0 || ae.focus()));
  }
  function Ie() {
    var k;
    !((k = a.value) === null || k === void 0) && k.contains(document.activeElement) && document.activeElement.blur();
  }
  function Ve() {
    var k, N;
    (k = l.value) === null || k === void 0 || k.select(), (N = c.value) === null || N === void 0 || N.select();
  }
  function it() {
    E.value || (l.value ? l.value.focus() : c.value && c.value.focus());
  }
  function bt() {
    const { value: k } = a;
    (k == null ? void 0 : k.contains(document.activeElement)) && k !== document.activeElement && oe();
  }
  function Fe(k) {
    if (e.type === "textarea") {
      const { value: N } = l;
      N == null ? void 0 : N.scrollTo(k);
    } else {
      const { value: N } = c;
      N == null ? void 0 : N.scrollTo(k);
    }
  }
  function at(k) {
    const { type: N, pair: ae, autosize: ze } = e;
    if (!ae && ze) if (N === "textarea") {
      const { value: He } = s;
      He && (He.textContent = `${k ?? ""}\r
`);
    } else {
      const { value: He } = d;
      He && (k ? He.textContent = k : He.innerHTML = "&nbsp;");
    }
  }
  function It() {
    he();
  }
  const Zr = W({ top: "0" });
  function _n(k) {
    var N;
    const { scrollTop: ae } = k.target;
    Zr.value.top = `${-ae}px`, (N = f.value) === null || N === void 0 || N.syncUnifiedContainer();
  }
  let Mo = null;
  Dt(() => {
    const { autosize: k, type: N } = e;
    k && N === "textarea" ? Mo = Te(C, (ae) => {
      !Array.isArray(ae) && ae !== _ && at(ae);
    }) : Mo == null ? void 0 : Mo();
  });
  let Bo = null;
  Dt(() => {
    e.type === "textarea" ? Bo = Te(C, (k) => {
      var N;
      !Array.isArray(k) && k !== _ && ((N = f.value) === null || N === void 0 || N.syncUnifiedContainer());
    }) : Bo == null ? void 0 : Bo();
  }), Se(Jc, { mergedValueRef: C, maxlengthRef: ue, mergedClsPrefixRef: t, countGraphemesRef: be(e, "countGraphemes") });
  const Nn = { wrapperElRef: a, inputElRef: c, textareaElRef: l, isCompositing: R, clear: ar, focus: fe, blur: Ie, select: Ve, deactivate: bt, activate: it, scrollTo: Fe }, Wn = zt("Input", n, t), Jr = B(() => {
    const { value: k } = w, { common: { cubicBezierEaseInOut: N }, self: { color: ae, borderRadius: ze, textColor: He, caretColor: Pe, caretColorError: qt, caretColorWarning: Gt, textDecorationColor: Ut, border: cr, borderDisabled: dr, borderHover: jn, borderFocus: $d, placeholderColor: Pd, placeholderColorDisabled: Rd, lineHeightTextarea: Ed, colorDisabled: kd, colorFocus: Td, textColorDisabled: zd, boxShadowFocus: Id, iconSize: Ad, colorFocusWarning: Md, boxShadowFocusWarning: Bd, borderWarning: Od, borderFocusWarning: Fd, borderHoverWarning: Ld, colorFocusError: Dd, boxShadowFocusError: Hd, borderError: _d, borderFocusError: Nd, borderHoverError: Wd, clearSize: jd, clearColor: Vd, clearColorHover: qd, clearColorPressed: Gd, iconColor: Ud, iconColorDisabled: Kd, suffixTextColor: Yd, countTextColor: Xd, countTextColorDisabled: Zd, iconColorHover: Jd, iconColorPressed: Qd, loadingColor: eu, loadingColorError: tu, loadingColorWarning: ou, fontWeight: ru, [Y("padding", k)]: nu, [Y("fontSize", k)]: iu, [Y("height", k)]: au } } = i.value, { left: lu, right: su } = Jt(nu);
    return { "--n-bezier": N, "--n-count-text-color": Xd, "--n-count-text-color-disabled": Zd, "--n-color": ae, "--n-font-size": iu, "--n-font-weight": ru, "--n-border-radius": ze, "--n-height": au, "--n-padding-left": lu, "--n-padding-right": su, "--n-text-color": He, "--n-caret-color": Pe, "--n-text-decoration-color": Ut, "--n-border": cr, "--n-border-disabled": dr, "--n-border-hover": jn, "--n-border-focus": $d, "--n-placeholder-color": Pd, "--n-placeholder-color-disabled": Rd, "--n-icon-size": Ad, "--n-line-height-textarea": Ed, "--n-color-disabled": kd, "--n-color-focus": Td, "--n-text-color-disabled": zd, "--n-box-shadow-focus": Id, "--n-loading-color": eu, "--n-caret-color-warning": Gt, "--n-color-focus-warning": Md, "--n-box-shadow-focus-warning": Bd, "--n-border-warning": Od, "--n-border-focus-warning": Fd, "--n-border-hover-warning": Ld, "--n-loading-color-warning": ou, "--n-caret-color-error": qt, "--n-color-focus-error": Dd, "--n-box-shadow-focus-error": Hd, "--n-border-error": _d, "--n-border-focus-error": Nd, "--n-border-hover-error": Wd, "--n-loading-color-error": tu, "--n-clear-color": Vd, "--n-clear-size": jd, "--n-clear-color-hover": qd, "--n-clear-color-pressed": Gd, "--n-icon-color": Ud, "--n-icon-color-hover": Jd, "--n-icon-color-pressed": Qd, "--n-icon-color-disabled": Kd, "--n-suffix-text-color": Yd };
  }), ao = r ? gt("input", B(() => {
    const { value: k } = w;
    return k[0];
  }), Jr, e) : void 0;
  return Object.assign(Object.assign({}, Nn), { wrapperElRef: a, inputElRef: c, inputMirrorElRef: d, inputEl2Ref: u, textareaElRef: l, textareaMirrorElRef: s, textareaScrollbarInstRef: f, rtlEnabled: Wn, uncontrolledValue: v, mergedValue: C, passwordVisible: U, mergedPlaceholder: y, showPlaceholder1: A, showPlaceholder2: T, mergedFocus: z, isComposing: R, activated: O, showClearButton: j, mergedSize: w, mergedDisabled: E, textDecorationStyle: ne, mergedClsPrefix: t, mergedBordered: o, mergedShowPasswordOn: F, placeholderStyle: Zr, mergedStatus: P, textAreaScrollContainerWidth: se, handleTextAreaScroll: _n, handleCompositionStart: vt, handleCompositionEnd: Ue, handleInput: no, handleInputBlur: Oe, handleInputFocus: Ke, handleWrapperBlur: jt, handleWrapperFocus: Ln, handleMouseEnter: Hn, handleMouseLeave: lr, handleMouseDown: Yr, handleChange: Vt, handleClick: Kr, handleClear: Dn, handlePasswordToggleClick: sr, handlePasswordToggleMousedown: Xr, handleWrapperKeydown: Ma, handleWrapperKeyup: io, handleTextAreaMirrorResize: It, getTextareaScrollContainer: () => l.value, mergedTheme: i, cssVars: r ? void 0 : Jr, themeClass: ao == null ? void 0 : ao.themeClass, onRender: ao == null ? void 0 : ao.onRender });
}, render() {
  var e, t, o, r, n, i, a;
  const { mergedClsPrefix: l, mergedStatus: s, themeClass: d, type: c, countGraphemes: u, onRender: p } = this, h = this.$slots;
  return p == null ? void 0 : p(), b("div", { ref: "wrapperElRef", class: [`${l}-input`, d, s && `${l}-input--${s}-status`, { [`${l}-input--rtl`]: this.rtlEnabled, [`${l}-input--disabled`]: this.mergedDisabled, [`${l}-input--textarea`]: c === "textarea", [`${l}-input--resizable`]: this.resizable && !this.autosize, [`${l}-input--autosize`]: this.autosize, [`${l}-input--round`]: this.round && c !== "textarea", [`${l}-input--pair`]: this.pair, [`${l}-input--focus`]: this.mergedFocus, [`${l}-input--stateful`]: this.stateful }], style: this.cssVars, tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0, onFocus: this.handleWrapperFocus, onBlur: this.handleWrapperBlur, onClick: this.handleClick, onMousedown: this.handleMouseDown, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd, onKeyup: this.handleWrapperKeyup, onKeydown: this.handleWrapperKeydown }, b("div", { class: `${l}-input-wrapper` }, Ge(h.prefix, (f) => f && b("div", { class: `${l}-input__prefix` }, f)), c === "textarea" ? b(Vr, { ref: "textareaScrollbarInstRef", class: `${l}-input__textarea`, container: this.getTextareaScrollContainer, theme: (t = (e = this.theme) === null || e === void 0 ? void 0 : e.peers) === null || t === void 0 ? void 0 : t.Scrollbar, themeOverrides: (r = (o = this.themeOverrides) === null || o === void 0 ? void 0 : o.peers) === null || r === void 0 ? void 0 : r.Scrollbar, triggerDisplayManually: true, useUnifiedContainer: true, internalHoistYRail: true }, { default: () => {
    var f, g;
    const { textAreaScrollContainerWidth: v } = this, m = { width: this.autosize && v && `${v}px` };
    return b($t, null, b("textarea", Object.assign({}, this.inputProps, { ref: "textareaElRef", class: [`${l}-input__textarea-el`, (f = this.inputProps) === null || f === void 0 ? void 0 : f.class], autofocus: this.autofocus, rows: Number(this.rows), placeholder: this.placeholder, value: this.mergedValue, disabled: this.mergedDisabled, maxlength: u ? void 0 : this.maxlength, minlength: u ? void 0 : this.minlength, readonly: this.readonly, tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, style: [this.textDecorationStyle[0], (g = this.inputProps) === null || g === void 0 ? void 0 : g.style, m], onBlur: this.handleInputBlur, onFocus: (C) => {
      this.handleInputFocus(C, 2);
    }, onInput: this.handleInput, onChange: this.handleChange, onScroll: this.handleTextAreaScroll })), this.showPlaceholder1 ? b("div", { class: `${l}-input__placeholder`, style: [this.placeholderStyle, m], key: "placeholder" }, this.mergedPlaceholder[0]) : null, this.autosize ? b(Ai, { onResize: this.handleTextAreaMirrorResize }, { default: () => b("div", { ref: "textareaMirrorElRef", class: `${l}-input__textarea-mirror`, key: "mirror" }) }) : null);
  } }) : b("div", { class: `${l}-input__input` }, b("input", Object.assign({ type: c === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : c }, this.inputProps, { ref: "inputElRef", class: [`${l}-input__input-el`, (n = this.inputProps) === null || n === void 0 ? void 0 : n.class], style: [this.textDecorationStyle[0], (i = this.inputProps) === null || i === void 0 ? void 0 : i.style], tabindex: this.passivelyActivated && !this.activated ? -1 : (a = this.inputProps) === null || a === void 0 ? void 0 : a.tabindex, placeholder: this.mergedPlaceholder[0], disabled: this.mergedDisabled, maxlength: u ? void 0 : this.maxlength, minlength: u ? void 0 : this.minlength, value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue, readonly: this.readonly, autofocus: this.autofocus, size: this.attrSize, onBlur: this.handleInputBlur, onFocus: (f) => {
    this.handleInputFocus(f, 0);
  }, onInput: (f) => {
    this.handleInput(f, 0);
  }, onChange: (f) => {
    this.handleChange(f, 0);
  } })), this.showPlaceholder1 ? b("div", { class: `${l}-input__placeholder` }, b("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? b("div", { class: `${l}-input__input-mirror`, key: "mirror", ref: "inputMirrorElRef" }, "\xA0") : null), !this.pair && Ge(h.suffix, (f) => f || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? b("div", { class: `${l}-input__suffix` }, [Ge(h["clear-icon-placeholder"], (g) => (this.clearable || g) && b(Oi, { clsPrefix: l, show: this.showClearButton, onClear: this.handleClear }, { placeholder: () => g, icon: () => {
    var v, m;
    return (m = (v = this.$slots)["clear-icon"]) === null || m === void 0 ? void 0 : m.call(v);
  } })), this.internalLoadingBeforeSuffix ? null : f, this.loading !== void 0 ? b(Vb, { clsPrefix: l, loading: this.loading, showArrow: false, showClear: false, style: this.cssVars }) : null, this.internalLoadingBeforeSuffix ? f : null, this.showCount && this.type !== "textarea" ? b(Zl, null, { default: (g) => {
    var v;
    const { renderCount: m } = this;
    return m ? m(g) : (v = h.count) === null || v === void 0 ? void 0 : v.call(h, g);
  } }) : null, this.mergedShowPasswordOn && this.type === "password" ? b("div", { class: `${l}-input__eye`, onMousedown: this.handlePasswordToggleMousedown, onClick: this.handlePasswordToggleClick }, this.passwordVisible ? To(h["password-visible-icon"], () => [b(Jo, { clsPrefix: l }, { default: () => b(Hv, null) })]) : To(h["password-invisible-icon"], () => [b(Jo, { clsPrefix: l }, { default: () => b(_v, null) })])) : null]) : null)), this.pair ? b("span", { class: `${l}-input__separator` }, To(h.separator, () => [this.separator])) : null, this.pair ? b("div", { class: `${l}-input-wrapper` }, b("div", { class: `${l}-input__input` }, b("input", { ref: "inputEl2Ref", type: this.type, class: `${l}-input__input-el`, tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, placeholder: this.mergedPlaceholder[1], disabled: this.mergedDisabled, maxlength: u ? void 0 : this.maxlength, minlength: u ? void 0 : this.minlength, value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0, readonly: this.readonly, style: this.textDecorationStyle[1], onBlur: this.handleInputBlur, onFocus: (f) => {
    this.handleInputFocus(f, 1);
  }, onInput: (f) => {
    this.handleInput(f, 1);
  }, onChange: (f) => {
    this.handleChange(f, 1);
  } }), this.showPlaceholder2 ? b("div", { class: `${l}-input__placeholder` }, b("span", null, this.mergedPlaceholder[1])) : null), Ge(h.suffix, (f) => (this.clearable || f) && b("div", { class: `${l}-input__suffix` }, [this.clearable && b(Oi, { clsPrefix: l, show: this.showClearButton, onClear: this.handleClear }, { icon: () => {
    var g;
    return (g = h["clear-icon"]) === null || g === void 0 ? void 0 : g.call(h);
  }, placeholder: () => {
    var g;
    return (g = h["clear-icon-placeholder"]) === null || g === void 0 ? void 0 : g.call(h);
  } }), f]))) : null, this.mergedBordered ? b("div", { class: `${l}-input__border` }) : null, this.mergedBordered ? b("div", { class: `${l}-input__state-border` }) : null, this.showCount && c === "textarea" ? b(Zl, null, { default: (f) => {
    var g;
    const { renderCount: v } = this;
    return v ? v(f) : (g = h.count) === null || g === void 0 ? void 0 : g.call(h, f);
  } }) : null);
} });
function f0(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const h0 = { name: "AutoComplete", common: q, peers: { InternalSelectMenu: qr, Input: mt }, self: f0 };
function p0(e) {
  const { borderRadius: t, avatarColor: o, cardColor: r, fontSize: n, heightTiny: i, heightSmall: a, heightMedium: l, heightLarge: s, heightHuge: d, modalColor: c, popoverColor: u } = e;
  return { borderRadius: t, fontSize: n, border: `2px solid ${r}`, heightTiny: i, heightSmall: a, heightMedium: l, heightLarge: s, heightHuge: d, color: X(r, o), colorModal: X(c, o), colorPopover: X(u, o) };
}
const Qc = { name: "Avatar", common: q, self: p0 };
function g0() {
  return { gap: "-12px" };
}
const m0 = { name: "AvatarGroup", common: q, peers: { Avatar: Qc }, self: g0 }, v0 = { width: "44px", height: "44px", borderRadius: "22px", iconSize: "26px" };
function b0(e) {
  const { popoverColor: t, textColor2: o, primaryColorHover: r, primaryColorPressed: n } = e;
  return Object.assign(Object.assign({}, v0), { color: t, textColor: o, iconColor: o, iconColorHover: r, iconColorPressed: n, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
}
const x0 = { name: "BackTop", common: q, self: b0 };
function C0(e) {
  const { errorColor: t, infoColor: o, successColor: r, warningColor: n, fontFamily: i } = e;
  return { color: t, colorInfo: o, colorSuccess: r, colorError: t, colorWarning: n, fontSize: "12px", fontFamily: i };
}
const y0 = { name: "Badge", common: q, self: C0 }, w0 = { fontWeightActive: "400" };
function S0(e) {
  const { fontSize: t, textColor3: o, textColor2: r, borderRadius: n, buttonColor2Hover: i, buttonColor2Pressed: a } = e;
  return Object.assign(Object.assign({}, w0), { fontSize: t, itemLineHeight: "1.25", itemTextColor: o, itemTextColorHover: r, itemTextColorPressed: r, itemTextColorActive: r, itemBorderRadius: n, itemColorHover: i, itemColorPressed: a, separatorColor: o });
}
const $0 = { name: "Breadcrumb", common: q, self: S0 };
function yo(e) {
  return X(e, [255, 255, 255, 0.16]);
}
function un(e) {
  return X(e, [0, 0, 0, 0.12]);
}
const ed = "n-button-group", P0 = { paddingTiny: "0 6px", paddingSmall: "0 10px", paddingMedium: "0 14px", paddingLarge: "0 18px", paddingRoundTiny: "0 10px", paddingRoundSmall: "0 14px", paddingRoundMedium: "0 18px", paddingRoundLarge: "0 22px", iconMarginTiny: "6px", iconMarginSmall: "6px", iconMarginMedium: "6px", iconMarginLarge: "6px", iconSizeTiny: "14px", iconSizeSmall: "18px", iconSizeMedium: "18px", iconSizeLarge: "20px", rippleDuration: ".6s" };
function R0(e) {
  const { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadius: i, fontSizeTiny: a, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: d, opacityDisabled: c, textColor2: u, textColor3: p, primaryColorHover: h, primaryColorPressed: f, borderColor: g, primaryColor: v, baseColor: m, infoColor: C, infoColorHover: S, infoColorPressed: w, successColor: E, successColorHover: P, successColorPressed: x, warningColor: $, warningColorHover: R, warningColorPressed: O, errorColor: _, errorColorHover: y, errorColorPressed: A, fontWeight: T, buttonColor2: z, buttonColor2Hover: j, buttonColor2Pressed: F, fontWeightStrong: U } = e;
  return Object.assign(Object.assign({}, P0), { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadiusTiny: i, borderRadiusSmall: i, borderRadiusMedium: i, borderRadiusLarge: i, fontSizeTiny: a, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: d, opacityDisabled: c, colorOpacitySecondary: "0.16", colorOpacitySecondaryHover: "0.22", colorOpacitySecondaryPressed: "0.28", colorSecondary: z, colorSecondaryHover: j, colorSecondaryPressed: F, colorTertiary: z, colorTertiaryHover: j, colorTertiaryPressed: F, colorQuaternary: "#0000", colorQuaternaryHover: j, colorQuaternaryPressed: F, color: "#0000", colorHover: "#0000", colorPressed: "#0000", colorFocus: "#0000", colorDisabled: "#0000", textColor: u, textColorTertiary: p, textColorHover: h, textColorPressed: f, textColorFocus: h, textColorDisabled: u, textColorText: u, textColorTextHover: h, textColorTextPressed: f, textColorTextFocus: h, textColorTextDisabled: u, textColorGhost: u, textColorGhostHover: h, textColorGhostPressed: f, textColorGhostFocus: h, textColorGhostDisabled: u, border: `1px solid ${g}`, borderHover: `1px solid ${h}`, borderPressed: `1px solid ${f}`, borderFocus: `1px solid ${h}`, borderDisabled: `1px solid ${g}`, rippleColor: v, colorPrimary: v, colorHoverPrimary: h, colorPressedPrimary: f, colorFocusPrimary: h, colorDisabledPrimary: v, textColorPrimary: m, textColorHoverPrimary: m, textColorPressedPrimary: m, textColorFocusPrimary: m, textColorDisabledPrimary: m, textColorTextPrimary: v, textColorTextHoverPrimary: h, textColorTextPressedPrimary: f, textColorTextFocusPrimary: h, textColorTextDisabledPrimary: u, textColorGhostPrimary: v, textColorGhostHoverPrimary: h, textColorGhostPressedPrimary: f, textColorGhostFocusPrimary: h, textColorGhostDisabledPrimary: v, borderPrimary: `1px solid ${v}`, borderHoverPrimary: `1px solid ${h}`, borderPressedPrimary: `1px solid ${f}`, borderFocusPrimary: `1px solid ${h}`, borderDisabledPrimary: `1px solid ${v}`, rippleColorPrimary: v, colorInfo: C, colorHoverInfo: S, colorPressedInfo: w, colorFocusInfo: S, colorDisabledInfo: C, textColorInfo: m, textColorHoverInfo: m, textColorPressedInfo: m, textColorFocusInfo: m, textColorDisabledInfo: m, textColorTextInfo: C, textColorTextHoverInfo: S, textColorTextPressedInfo: w, textColorTextFocusInfo: S, textColorTextDisabledInfo: u, textColorGhostInfo: C, textColorGhostHoverInfo: S, textColorGhostPressedInfo: w, textColorGhostFocusInfo: S, textColorGhostDisabledInfo: C, borderInfo: `1px solid ${C}`, borderHoverInfo: `1px solid ${S}`, borderPressedInfo: `1px solid ${w}`, borderFocusInfo: `1px solid ${S}`, borderDisabledInfo: `1px solid ${C}`, rippleColorInfo: C, colorSuccess: E, colorHoverSuccess: P, colorPressedSuccess: x, colorFocusSuccess: P, colorDisabledSuccess: E, textColorSuccess: m, textColorHoverSuccess: m, textColorPressedSuccess: m, textColorFocusSuccess: m, textColorDisabledSuccess: m, textColorTextSuccess: E, textColorTextHoverSuccess: P, textColorTextPressedSuccess: x, textColorTextFocusSuccess: P, textColorTextDisabledSuccess: u, textColorGhostSuccess: E, textColorGhostHoverSuccess: P, textColorGhostPressedSuccess: x, textColorGhostFocusSuccess: P, textColorGhostDisabledSuccess: E, borderSuccess: `1px solid ${E}`, borderHoverSuccess: `1px solid ${P}`, borderPressedSuccess: `1px solid ${x}`, borderFocusSuccess: `1px solid ${P}`, borderDisabledSuccess: `1px solid ${E}`, rippleColorSuccess: E, colorWarning: $, colorHoverWarning: R, colorPressedWarning: O, colorFocusWarning: R, colorDisabledWarning: $, textColorWarning: m, textColorHoverWarning: m, textColorPressedWarning: m, textColorFocusWarning: m, textColorDisabledWarning: m, textColorTextWarning: $, textColorTextHoverWarning: R, textColorTextPressedWarning: O, textColorTextFocusWarning: R, textColorTextDisabledWarning: u, textColorGhostWarning: $, textColorGhostHoverWarning: R, textColorGhostPressedWarning: O, textColorGhostFocusWarning: R, textColorGhostDisabledWarning: $, borderWarning: `1px solid ${$}`, borderHoverWarning: `1px solid ${R}`, borderPressedWarning: `1px solid ${O}`, borderFocusWarning: `1px solid ${R}`, borderDisabledWarning: `1px solid ${$}`, rippleColorWarning: $, colorError: _, colorHoverError: y, colorPressedError: A, colorFocusError: y, colorDisabledError: _, textColorError: m, textColorHoverError: m, textColorPressedError: m, textColorFocusError: m, textColorDisabledError: m, textColorTextError: _, textColorTextHoverError: y, textColorTextPressedError: A, textColorTextFocusError: y, textColorTextDisabledError: u, textColorGhostError: _, textColorGhostHoverError: y, textColorGhostPressedError: A, textColorGhostFocusError: y, textColorGhostDisabledError: _, borderError: `1px solid ${_}`, borderHoverError: `1px solid ${y}`, borderPressedError: `1px solid ${A}`, borderFocusError: `1px solid ${y}`, borderDisabledError: `1px solid ${_}`, rippleColorError: _, waveOpacity: "0.6", fontWeight: T, fontWeightStrong: U });
}
const ut = { name: "Button", common: q, self: R0 }, E0 = I([V("button", `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [H("color", [L("border", { borderColor: "var(--n-border-color)" }), H("disabled", [L("border", { borderColor: "var(--n-border-color-disabled)" })]), Ze("disabled", [I("&:focus", [L("state-border", { borderColor: "var(--n-border-color-focus)" })]), I("&:hover", [L("state-border", { borderColor: "var(--n-border-color-hover)" })]), I("&:active", [L("state-border", { borderColor: "var(--n-border-color-pressed)" })]), H("pressed", [L("state-border", { borderColor: "var(--n-border-color-pressed)" })])])]), H("disabled", { backgroundColor: "var(--n-color-disabled)", color: "var(--n-text-color-disabled)" }, [L("border", { border: "var(--n-border-disabled)" })]), Ze("disabled", [I("&:focus", { backgroundColor: "var(--n-color-focus)", color: "var(--n-text-color-focus)" }, [L("state-border", { border: "var(--n-border-focus)" })]), I("&:hover", { backgroundColor: "var(--n-color-hover)", color: "var(--n-text-color-hover)" }, [L("state-border", { border: "var(--n-border-hover)" })]), I("&:active", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [L("state-border", { border: "var(--n-border-pressed)" })]), H("pressed", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [L("state-border", { border: "var(--n-border-pressed)" })])]), H("loading", "cursor: wait;"), V("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [H("active", { zIndex: 1, animationName: "button-wave-spread, button-wave-opacity" })]), tr && "MozBoxSizing" in document.createElement("div").style ? I("&::moz-focus-inner", { border: 0 }) : null, L("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), L("border", `
 border: var(--n-border);
 `), L("state-border", `
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `), L("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [V("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [Pn({ top: "50%", originalTransform: "translateY(-50%)" })]), Ub()]), L("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [I("~", [L("icon", { margin: "var(--n-icon-margin)", marginRight: 0 })])]), H("block", `
 display: flex;
 width: 100%;
 `), H("dashed", [L("border, state-border", { borderStyle: "dashed !important" })]), H("disabled", { cursor: "not-allowed", opacity: "var(--n-opacity-disabled)" })]), I("@keyframes button-wave-spread", { from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" }, to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" } }), I("@keyframes button-wave-opacity", { from: { opacity: "var(--n-wave-opacity)" }, to: { opacity: 0 } })]), k0 = Object.assign(Object.assign({}, me.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: "button" }, type: { type: String, default: "default" }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: "left" }, attrType: { type: String, default: "button" }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !Zc } }), Io = J({ name: "Button", props: k0, slots: Object, setup(e) {
  const t = W(null), o = W(null), r = W(false), n = ht(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), i = de(ed, {}), { mergedSizeRef: a } = _c({}, { defaultSize: "medium", mergedSize: (w) => {
    const { size: E } = e;
    if (E) return E;
    const { size: P } = i;
    if (P) return P;
    const { mergedSize: x } = w || {};
    return x ? x.value : "medium";
  } }), l = B(() => e.focusable && !e.disabled), s = (w) => {
    var E;
    l.value || w.preventDefault(), !e.nativeFocusBehavior && (w.preventDefault(), !e.disabled && l.value && ((E = t.value) === null || E === void 0 || E.focus({ preventScroll: true })));
  }, d = (w) => {
    var E;
    if (!e.disabled && !e.loading) {
      const { onClick: P } = e;
      P && ge(P, w), e.text || (E = o.value) === null || E === void 0 || E.play();
    }
  }, c = (w) => {
    switch (w.key) {
      case "Enter":
        if (!e.keyboard) return;
        r.value = false;
    }
  }, u = (w) => {
    switch (w.key) {
      case "Enter":
        if (!e.keyboard || e.loading) {
          w.preventDefault();
          return;
        }
        r.value = true;
    }
  }, p = () => {
    r.value = false;
  }, { inlineThemeDisabled: h, mergedClsPrefixRef: f, mergedRtlRef: g } = rt(e), v = me("Button", "-button", E0, ut, e, f), m = zt("Button", g, f), C = B(() => {
    const w = v.value, { common: { cubicBezierEaseInOut: E, cubicBezierEaseOut: P }, self: x } = w, { rippleDuration: $, opacityDisabled: R, fontWeight: O, fontWeightStrong: _ } = x, y = a.value, { dashed: A, type: T, ghost: z, text: j, color: F, round: U, circle: ne, textColor: se, secondary: he, tertiary: ue, quaternary: we, strong: Ce } = e, Be = { "--n-font-weight": Ce ? _ : O };
    let re = { "--n-color": "initial", "--n-color-hover": "initial", "--n-color-pressed": "initial", "--n-color-focus": "initial", "--n-color-disabled": "initial", "--n-ripple-color": "initial", "--n-text-color": "initial", "--n-text-color-hover": "initial", "--n-text-color-pressed": "initial", "--n-text-color-focus": "initial", "--n-text-color-disabled": "initial" };
    const M = T === "tertiary", K = T === "default", D = M ? "default" : T;
    if (j) {
      const Oe = se || F;
      re = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": "#0000", "--n-text-color": Oe || x[Y("textColorText", D)], "--n-text-color-hover": Oe ? yo(Oe) : x[Y("textColorTextHover", D)], "--n-text-color-pressed": Oe ? un(Oe) : x[Y("textColorTextPressed", D)], "--n-text-color-focus": Oe ? yo(Oe) : x[Y("textColorTextHover", D)], "--n-text-color-disabled": Oe || x[Y("textColorTextDisabled", D)] };
    } else if (z || A) {
      const Oe = se || F;
      re = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": F || x[Y("rippleColor", D)], "--n-text-color": Oe || x[Y("textColorGhost", D)], "--n-text-color-hover": Oe ? yo(Oe) : x[Y("textColorGhostHover", D)], "--n-text-color-pressed": Oe ? un(Oe) : x[Y("textColorGhostPressed", D)], "--n-text-color-focus": Oe ? yo(Oe) : x[Y("textColorGhostHover", D)], "--n-text-color-disabled": Oe || x[Y("textColorGhostDisabled", D)] };
    } else if (he) {
      const Oe = K ? x.textColor : M ? x.textColorTertiary : x[Y("color", D)], Ke = F || Oe, jt = T !== "default" && T !== "tertiary";
      re = { "--n-color": jt ? ee(Ke, { alpha: Number(x.colorOpacitySecondary) }) : x.colorSecondary, "--n-color-hover": jt ? ee(Ke, { alpha: Number(x.colorOpacitySecondaryHover) }) : x.colorSecondaryHover, "--n-color-pressed": jt ? ee(Ke, { alpha: Number(x.colorOpacitySecondaryPressed) }) : x.colorSecondaryPressed, "--n-color-focus": jt ? ee(Ke, { alpha: Number(x.colorOpacitySecondaryHover) }) : x.colorSecondaryHover, "--n-color-disabled": x.colorSecondary, "--n-ripple-color": "#0000", "--n-text-color": Ke, "--n-text-color-hover": Ke, "--n-text-color-pressed": Ke, "--n-text-color-focus": Ke, "--n-text-color-disabled": Ke };
    } else if (ue || we) {
      const Oe = K ? x.textColor : M ? x.textColorTertiary : x[Y("color", D)], Ke = F || Oe;
      ue ? (re["--n-color"] = x.colorTertiary, re["--n-color-hover"] = x.colorTertiaryHover, re["--n-color-pressed"] = x.colorTertiaryPressed, re["--n-color-focus"] = x.colorSecondaryHover, re["--n-color-disabled"] = x.colorTertiary) : (re["--n-color"] = x.colorQuaternary, re["--n-color-hover"] = x.colorQuaternaryHover, re["--n-color-pressed"] = x.colorQuaternaryPressed, re["--n-color-focus"] = x.colorQuaternaryHover, re["--n-color-disabled"] = x.colorQuaternary), re["--n-ripple-color"] = "#0000", re["--n-text-color"] = Ke, re["--n-text-color-hover"] = Ke, re["--n-text-color-pressed"] = Ke, re["--n-text-color-focus"] = Ke, re["--n-text-color-disabled"] = Ke;
    } else re = { "--n-color": F || x[Y("color", D)], "--n-color-hover": F ? yo(F) : x[Y("colorHover", D)], "--n-color-pressed": F ? un(F) : x[Y("colorPressed", D)], "--n-color-focus": F ? yo(F) : x[Y("colorFocus", D)], "--n-color-disabled": F || x[Y("colorDisabled", D)], "--n-ripple-color": F || x[Y("rippleColor", D)], "--n-text-color": se || (F ? x.textColorPrimary : M ? x.textColorTertiary : x[Y("textColor", D)]), "--n-text-color-hover": se || (F ? x.textColorHoverPrimary : x[Y("textColorHover", D)]), "--n-text-color-pressed": se || (F ? x.textColorPressedPrimary : x[Y("textColorPressed", D)]), "--n-text-color-focus": se || (F ? x.textColorFocusPrimary : x[Y("textColorFocus", D)]), "--n-text-color-disabled": se || (F ? x.textColorDisabledPrimary : x[Y("textColorDisabled", D)]) };
    let Q = { "--n-border": "initial", "--n-border-hover": "initial", "--n-border-pressed": "initial", "--n-border-focus": "initial", "--n-border-disabled": "initial" };
    j ? Q = { "--n-border": "none", "--n-border-hover": "none", "--n-border-pressed": "none", "--n-border-focus": "none", "--n-border-disabled": "none" } : Q = { "--n-border": x[Y("border", D)], "--n-border-hover": x[Y("borderHover", D)], "--n-border-pressed": x[Y("borderPressed", D)], "--n-border-focus": x[Y("borderFocus", D)], "--n-border-disabled": x[Y("borderDisabled", D)] };
    const { [Y("height", y)]: ce, [Y("fontSize", y)]: ie, [Y("padding", y)]: te, [Y("paddingRound", y)]: Z, [Y("iconSize", y)]: $e, [Y("borderRadius", y)]: vt, [Y("iconMargin", y)]: Ue, waveOpacity: no } = x, ir = { "--n-width": ne && !j ? ce : "initial", "--n-height": j ? "initial" : ce, "--n-font-size": ie, "--n-padding": ne || j ? "initial" : U ? Z : te, "--n-icon-size": $e, "--n-icon-margin": Ue, "--n-border-radius": j ? "initial" : ne || U ? ce : vt };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": E, "--n-bezier-ease-out": P, "--n-ripple-duration": $, "--n-opacity-disabled": R, "--n-wave-opacity": no }, Be), re), Q), ir);
  }), S = h ? gt("button", B(() => {
    let w = "";
    const { dashed: E, type: P, ghost: x, text: $, color: R, round: O, circle: _, textColor: y, secondary: A, tertiary: T, quaternary: z, strong: j } = e;
    E && (w += "a"), x && (w += "b"), $ && (w += "c"), O && (w += "d"), _ && (w += "e"), A && (w += "f"), T && (w += "g"), z && (w += "h"), j && (w += "i"), R && (w += `j${Sn(R)}`), y && (w += `k${Sn(y)}`);
    const { value: F } = a;
    return w += `l${F[0]}`, w += `m${P[0]}`, w;
  }), C, e) : void 0;
  return { selfElRef: t, waveElRef: o, mergedClsPrefix: f, mergedFocusable: l, mergedSize: a, showBorder: n, enterPressed: r, rtlEnabled: m, handleMousedown: s, handleKeydown: u, handleBlur: p, handleKeyup: c, handleClick: d, customColorCssVars: B(() => {
    const { color: w } = e;
    if (!w) return null;
    const E = yo(w);
    return { "--n-border-color": w, "--n-border-color-hover": E, "--n-border-color-pressed": un(w), "--n-border-color-focus": E, "--n-border-color-disabled": w };
  }), cssVars: h ? void 0 : C, themeClass: S == null ? void 0 : S.themeClass, onRender: S == null ? void 0 : S.onRender };
}, render() {
  const { mergedClsPrefix: e, tag: t, onRender: o } = this;
  o == null ? void 0 : o();
  const r = Ge(this.$slots.default, (n) => n && b("span", { class: `${e}-button__content` }, n));
  return b(t, { ref: "selfElRef", class: [this.themeClass, `${e}-button`, `${e}-button--${this.type}-type`, `${e}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e}-button--rtl`, this.disabled && `${e}-button--disabled`, this.block && `${e}-button--block`, this.enterPressed && `${e}-button--pressed`, !this.text && this.dashed && `${e}-button--dashed`, this.color && `${e}-button--color`, this.secondary && `${e}-button--secondary`, this.loading && `${e}-button--loading`, this.ghost && `${e}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === "right" && r, b(Gv, { width: true }, { default: () => Ge(this.$slots.icon, (n) => (this.loading || this.renderIcon || n) && b("span", { class: `${e}-button__icon`, style: { margin: Mi(this.$slots.default) ? "0" : "" } }, b(ba, null, { default: () => this.loading ? b(Wc, { clsPrefix: e, key: "loading", class: `${e}-icon-slot`, strokeWidth: 20 }) : b("div", { key: "icon", class: `${e}-icon-slot`, role: "none" }, this.renderIcon ? this.renderIcon() : n) }))) }), this.iconPlacement === "left" && r, this.text ? null : b(Yb, { ref: "waveElRef", clsPrefix: e }), this.showBorder ? b("div", { "aria-hidden": true, class: `${e}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? b("div", { "aria-hidden": true, class: `${e}-button__state-border`, style: this.customColorCssVars }) : null);
} }), MS = Io, _e = "0!important", td = "-1px!important";
function Ho(e) {
  return H(`${e}-type`, [I("& +", [V("button", {}, [H(`${e}-type`, [L("border", { borderLeftWidth: _e }), L("state-border", { left: td })])])])]);
}
function _o(e) {
  return H(`${e}-type`, [I("& +", [V("button", [H(`${e}-type`, [L("border", { borderTopWidth: _e }), L("state-border", { top: td })])])])]);
}
const T0 = V("button-group", `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`, [Ze("vertical", { flexDirection: "row" }, [Ze("rtl", [V("button", [I("&:first-child:not(:last-child)", `
 margin-right: ${_e};
 border-top-right-radius: ${_e};
 border-bottom-right-radius: ${_e};
 `), I("&:last-child:not(:first-child)", `
 margin-left: ${_e};
 border-top-left-radius: ${_e};
 border-bottom-left-radius: ${_e};
 `), I("&:not(:first-child):not(:last-child)", `
 margin-left: ${_e};
 margin-right: ${_e};
 border-radius: ${_e};
 `), Ho("default"), H("ghost", [Ho("primary"), Ho("info"), Ho("success"), Ho("warning"), Ho("error")])])])]), H("vertical", { flexDirection: "column" }, [V("button", [I("&:first-child:not(:last-child)", `
 margin-bottom: ${_e};
 margin-left: ${_e};
 margin-right: ${_e};
 border-bottom-left-radius: ${_e};
 border-bottom-right-radius: ${_e};
 `), I("&:last-child:not(:first-child)", `
 margin-top: ${_e};
 margin-left: ${_e};
 margin-right: ${_e};
 border-top-left-radius: ${_e};
 border-top-right-radius: ${_e};
 `), I("&:not(:first-child):not(:last-child)", `
 margin: ${_e};
 border-radius: ${_e};
 `), _o("default"), H("ghost", [_o("primary"), _o("info"), _o("success"), _o("warning"), _o("error")])])])]), z0 = { size: { type: String, default: void 0 }, vertical: Boolean }, I0 = J({ name: "ButtonGroup", props: z0, setup(e) {
  const { mergedClsPrefixRef: t, mergedRtlRef: o } = rt(e);
  return vo("-button-group", T0, t), Se(ed, e), { rtlEnabled: zt("ButtonGroup", o, t), mergedClsPrefix: t };
}, render() {
  const { mergedClsPrefix: e } = this;
  return b("div", { class: [`${e}-button-group`, this.rtlEnabled && `${e}-button-group--rtl`, this.vertical && `${e}-button-group--vertical`], role: "group" }, this.$slots);
} }), A0 = { titleFontSize: "22px" };
function M0(e) {
  const { borderRadius: t, fontSize: o, lineHeight: r, textColor2: n, textColor1: i, textColorDisabled: a, dividerColor: l, fontWeightStrong: s, primaryColor: d, baseColor: c, hoverColor: u, cardColor: p, modalColor: h, popoverColor: f } = e;
  return Object.assign(Object.assign({}, A0), { borderRadius: t, borderColor: X(p, l), borderColorModal: X(h, l), borderColorPopover: X(f, l), textColor: n, titleFontWeight: s, titleTextColor: i, dayTextColor: a, fontSize: o, lineHeight: r, dateColorCurrent: d, dateTextColorCurrent: c, cellColorHover: X(p, u), cellColorHoverModal: X(h, u), cellColorHoverPopover: X(f, u), cellColor: p, cellColorModal: h, cellColorPopover: f, barColor: d });
}
const B0 = { name: "Calendar", common: q, peers: { Button: ut }, self: M0 }, O0 = { paddingSmall: "12px 16px 12px", paddingMedium: "19px 24px 20px", paddingLarge: "23px 32px 24px", paddingHuge: "27px 40px 28px", titleFontSizeSmall: "16px", titleFontSizeMedium: "18px", titleFontSizeLarge: "18px", titleFontSizeHuge: "18px", closeIconSize: "18px", closeSize: "22px" };
function F0(e) {
  const { primaryColor: t, borderRadius: o, lineHeight: r, fontSize: n, cardColor: i, textColor2: a, textColor1: l, dividerColor: s, fontWeightStrong: d, closeIconColor: c, closeIconColorHover: u, closeIconColorPressed: p, closeColorHover: h, closeColorPressed: f, modalColor: g, boxShadow1: v, popoverColor: m, actionColor: C } = e;
  return Object.assign(Object.assign({}, O0), { lineHeight: r, color: i, colorModal: g, colorPopover: m, colorTarget: t, colorEmbedded: C, colorEmbeddedModal: C, colorEmbeddedPopover: C, textColor: a, titleTextColor: l, borderColor: s, actionColor: C, titleFontWeight: d, closeColorHover: h, closeColorPressed: f, closeBorderRadius: o, closeIconColor: c, closeIconColorHover: u, closeIconColorPressed: p, fontSizeSmall: n, fontSizeMedium: n, fontSizeLarge: n, fontSizeHuge: n, boxShadow: v, borderRadius: o });
}
const Sa = { name: "Card", common: q, self: F0 }, L0 = I([V("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cc({ background: "var(--n-color-modal)" }), H("hoverable", [I("&:hover", "box-shadow: var(--n-box-shadow);")]), H("content-segmented", [I(">", [L("content", { paddingTop: "var(--n-padding-bottom)" })])]), H("content-soft-segmented", [I(">", [L("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), H("footer-segmented", [I(">", [L("footer", { paddingTop: "var(--n-padding-bottom)" })])]), H("footer-soft-segmented", [I(">", [L("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), I(">", [V("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [L("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), L("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), L("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), L("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), L("content", "flex: 1; min-width: 0;"), L("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [I("&:first-child", { paddingTop: "var(--n-padding-bottom)" })]), L("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), V("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [I("img", `
 display: block;
 width: 100%;
 `)]), H("bordered", `
 border: 1px solid var(--n-border-color);
 `, [I("&:target", "border-color: var(--n-color-target);")]), H("action-segmented", [I(">", [L("action", [I("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), H("content-segmented, content-soft-segmented", [I(">", [L("content", { transition: "border-color 0.3s var(--n-bezier)" }, [I("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), H("footer-segmented, footer-soft-segmented", [I(">", [L("footer", { transition: "border-color 0.3s var(--n-bezier)" }, [I("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), H("embedded", `
 background-color: var(--n-color-embedded);
 `)]), ia(V("card", `
 background: var(--n-color-modal);
 `, [H("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), sc(V("card", `
 background: var(--n-color-popover);
 `, [H("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), $a = { title: [String, Function], contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], headerExtraClass: String, headerExtraStyle: [Object, String], footerClass: String, footerStyle: [Object, String], embedded: Boolean, segmented: { type: [Boolean, Object], default: false }, size: { type: String, default: "medium" }, bordered: { type: Boolean, default: true }, closable: Boolean, hoverable: Boolean, role: String, onClose: [Function, Array], tag: { type: String, default: "div" }, cover: Function, content: [String, Function], footer: Function, action: Function, headerExtra: Function, closeFocusable: Boolean }, D0 = Fr($a), H0 = Object.assign(Object.assign({}, me.props), $a), _0 = J({ name: "Card", props: H0, slots: Object, setup(e) {
  const t = () => {
    const { onClose: d } = e;
    d && ge(d);
  }, { inlineThemeDisabled: o, mergedClsPrefixRef: r, mergedRtlRef: n } = rt(e), i = me("Card", "-card", L0, Sa, e, r), a = zt("Card", n, r), l = B(() => {
    const { size: d } = e, { self: { color: c, colorModal: u, colorTarget: p, textColor: h, titleTextColor: f, titleFontWeight: g, borderColor: v, actionColor: m, borderRadius: C, lineHeight: S, closeIconColor: w, closeIconColorHover: E, closeIconColorPressed: P, closeColorHover: x, closeColorPressed: $, closeBorderRadius: R, closeIconSize: O, closeSize: _, boxShadow: y, colorPopover: A, colorEmbedded: T, colorEmbeddedModal: z, colorEmbeddedPopover: j, [Y("padding", d)]: F, [Y("fontSize", d)]: U, [Y("titleFontSize", d)]: ne }, common: { cubicBezierEaseInOut: se } } = i.value, { top: he, left: ue, bottom: we } = Jt(F);
    return { "--n-bezier": se, "--n-border-radius": C, "--n-color": c, "--n-color-modal": u, "--n-color-popover": A, "--n-color-embedded": T, "--n-color-embedded-modal": z, "--n-color-embedded-popover": j, "--n-color-target": p, "--n-text-color": h, "--n-line-height": S, "--n-action-color": m, "--n-title-text-color": f, "--n-title-font-weight": g, "--n-close-icon-color": w, "--n-close-icon-color-hover": E, "--n-close-icon-color-pressed": P, "--n-close-color-hover": x, "--n-close-color-pressed": $, "--n-border-color": v, "--n-box-shadow": y, "--n-padding-top": he, "--n-padding-bottom": we, "--n-padding-left": ue, "--n-font-size": U, "--n-title-font-size": ne, "--n-close-size": _, "--n-close-icon-size": O, "--n-close-border-radius": R };
  }), s = o ? gt("card", B(() => e.size[0]), l, e) : void 0;
  return { rtlEnabled: a, mergedClsPrefix: r, mergedTheme: i, handleCloseClick: t, cssVars: o ? void 0 : l, themeClass: s == null ? void 0 : s.themeClass, onRender: s == null ? void 0 : s.onRender };
}, render() {
  const { segmented: e, bordered: t, hoverable: o, mergedClsPrefix: r, rtlEnabled: n, onRender: i, embedded: a, tag: l, $slots: s } = this;
  return i == null ? void 0 : i(), b(l, { class: [`${r}-card`, this.themeClass, a && `${r}-card--embedded`, { [`${r}-card--rtl`]: n, [`${r}-card--content${typeof e != "boolean" && e.content === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.content, [`${r}-card--footer${typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.footer, [`${r}-card--action-segmented`]: e === true || e !== false && e.action, [`${r}-card--bordered`]: t, [`${r}-card--hoverable`]: o }], style: this.cssVars, role: this.role }, Ge(s.cover, (d) => {
    const c = this.cover ? St([this.cover()]) : d;
    return c && b("div", { class: `${r}-card-cover`, role: "none" }, c);
  }), Ge(s.header, (d) => {
    const { title: c } = this, u = c ? St(typeof c == "function" ? [c()] : [c]) : d;
    return u || this.closable ? b("div", { class: [`${r}-card-header`, this.headerClass], style: this.headerStyle, role: "heading" }, b("div", { class: `${r}-card-header__main`, role: "heading" }, u), Ge(s["header-extra"], (p) => {
      const h = this.headerExtra ? St([this.headerExtra()]) : p;
      return h && b("div", { class: [`${r}-card-header__extra`, this.headerExtraClass], style: this.headerExtraStyle }, h);
    }), this.closable && b(Mn, { clsPrefix: r, class: `${r}-card-header__close`, onClick: this.handleCloseClick, focusable: this.closeFocusable, absolute: true })) : null;
  }), Ge(s.default, (d) => {
    const { content: c } = this, u = c ? St(typeof c == "function" ? [c()] : [c]) : d;
    return u && b("div", { class: [`${r}-card__content`, this.contentClass], style: this.contentStyle, role: "none" }, u);
  }), Ge(s.footer, (d) => {
    const c = this.footer ? St([this.footer()]) : d;
    return c && b("div", { class: [`${r}-card__footer`, this.footerClass], style: this.footerStyle, role: "none" }, c);
  }), Ge(s.action, (d) => {
    const c = this.action ? St([this.action()]) : d;
    return c && b("div", { class: `${r}-card__action`, role: "none" }, c);
  }));
} });
function N0() {
  return { dotSize: "8px", dotColor: "rgba(255, 255, 255, .3)", dotColorActive: "rgba(255, 255, 255, 1)", dotColorFocus: "rgba(255, 255, 255, .5)", dotLineWidth: "16px", dotLineWidthActive: "24px", arrowColor: "#eee" };
}
const W0 = { name: "Carousel", common: q, self: N0 }, j0 = { sizeSmall: "14px", sizeMedium: "16px", sizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function V0(e) {
  const { baseColor: t, inputColorDisabled: o, cardColor: r, modalColor: n, popoverColor: i, textColorDisabled: a, borderColor: l, primaryColor: s, textColor2: d, fontSizeSmall: c, fontSizeMedium: u, fontSizeLarge: p, borderRadiusSmall: h, lineHeight: f } = e;
  return Object.assign(Object.assign({}, j0), { labelLineHeight: f, fontSizeSmall: c, fontSizeMedium: u, fontSizeLarge: p, borderRadius: h, color: t, colorChecked: s, colorDisabled: o, colorDisabledChecked: o, colorTableHeader: r, colorTableHeaderModal: n, colorTableHeaderPopover: i, checkMarkColor: t, checkMarkColorDisabled: a, checkMarkColorDisabledChecked: a, border: `1px solid ${l}`, borderDisabled: `1px solid ${l}`, borderDisabledChecked: `1px solid ${l}`, borderChecked: `1px solid ${s}`, borderFocus: `1px solid ${s}`, boxShadowFocus: `0 0 0 2px ${ee(s, { alpha: 0.3 })}`, textColor: d, textColorDisabled: a });
}
const nr = { name: "Checkbox", common: q, self: V0 };
function q0(e) {
  const { borderRadius: t, boxShadow2: o, popoverColor: r, textColor2: n, textColor3: i, primaryColor: a, textColorDisabled: l, dividerColor: s, hoverColor: d, fontSizeMedium: c, heightMedium: u } = e;
  return { menuBorderRadius: t, menuColor: r, menuBoxShadow: o, menuDividerColor: s, menuHeight: "calc(var(--n-option-height) * 6.6)", optionArrowColor: i, optionHeight: u, optionFontSize: c, optionColorHover: d, optionTextColor: n, optionTextColorActive: a, optionTextColorDisabled: l, optionCheckMarkColor: a, loadingColor: a, columnWidth: "180px" };
}
const G0 = { name: "Cascader", common: q, peers: { InternalSelectMenu: qr, InternalSelection: wa, Scrollbar: nt, Checkbox: nr, Empty: bo }, self: q0 };
function U0(e) {
  const { textColor2: t, fontSize: o, fontWeightStrong: r, textColor3: n } = e;
  return { textColor: t, fontSize: o, fontWeightStrong: r, "mono-3": "#a0a1a7", "hue-1": "#0184bb", "hue-2": "#4078f2", "hue-3": "#a626a4", "hue-4": "#50a14f", "hue-5": "#e45649", "hue-5-2": "#c91243", "hue-6": "#986801", "hue-6-2": "#c18401", lineNumberTextColor: n };
}
const od = { name: "Code", common: q, self: U0 };
function K0(e) {
  const { fontWeight: t, textColor1: o, textColor2: r, textColorDisabled: n, dividerColor: i, fontSize: a } = e;
  return { titleFontSize: a, titleFontWeight: t, dividerColor: i, titleTextColor: o, titleTextColorDisabled: n, fontSize: a, textColor: r, arrowColor: r, arrowColorDisabled: n, itemMargin: "16px 0 0 0", titlePadding: "16px 0 0 0" };
}
const Y0 = { name: "Collapse", common: q, self: K0 };
function X0(e) {
  const { cubicBezierEaseInOut: t } = e;
  return { bezier: t };
}
const Z0 = { name: "CollapseTransition", common: q, self: X0 };
function J0(e) {
  const { fontSize: t, boxShadow2: o, popoverColor: r, textColor2: n, borderRadius: i, borderColor: a, heightSmall: l, heightMedium: s, heightLarge: d, fontSizeSmall: c, fontSizeMedium: u, fontSizeLarge: p, dividerColor: h } = e;
  return { panelFontSize: t, boxShadow: o, color: r, textColor: n, borderRadius: i, border: `1px solid ${a}`, heightSmall: l, heightMedium: s, heightLarge: d, fontSizeSmall: c, fontSizeMedium: u, fontSizeLarge: p, dividerColor: h };
}
const Q0 = { name: "ColorPicker", common: q, peers: { Input: mt, Button: ut }, self: J0 }, ex = { abstract: Boolean, bordered: { type: Boolean, default: void 0 }, clsPrefix: String, locale: Object, dateLocale: Object, namespace: String, rtl: Array, tag: { type: String, default: "div" }, hljs: Object, katex: Object, theme: Object, themeOverrides: Object, componentOptions: Object, icons: Object, breakpoints: Object, preflightStyleDisabled: Boolean, styleMountTarget: Object, inlineThemeDisabled: { type: Boolean, default: void 0 }, as: { type: String, validator: () => (ro("config-provider", "`as` is deprecated, please use `tag` instead."), true), default: void 0 } }, BS = J({ name: "ConfigProvider", alias: ["App"], props: ex, setup(e) {
  const t = de(Tt, null), o = B(() => {
    const { theme: g } = e;
    if (g === null) return;
    const v = t == null ? void 0 : t.mergedThemeRef.value;
    return g === void 0 ? v : v === void 0 ? g : Object.assign({}, v, g);
  }), r = B(() => {
    const { themeOverrides: g } = e;
    if (g !== null) {
      if (g === void 0) return t == null ? void 0 : t.mergedThemeOverridesRef.value;
      {
        const v = t == null ? void 0 : t.mergedThemeOverridesRef.value;
        return v === void 0 ? g : vr({}, v, g);
      }
    }
  }), n = ht(() => {
    const { namespace: g } = e;
    return g === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : g;
  }), i = ht(() => {
    const { bordered: g } = e;
    return g === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : g;
  }), a = B(() => {
    const { icons: g } = e;
    return g === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : g;
  }), l = B(() => {
    const { componentOptions: g } = e;
    return g !== void 0 ? g : t == null ? void 0 : t.mergedComponentPropsRef.value;
  }), s = B(() => {
    const { clsPrefix: g } = e;
    return g !== void 0 ? g : t ? t.mergedClsPrefixRef.value : $n;
  }), d = B(() => {
    var g;
    const { rtl: v } = e;
    if (v === void 0) return t == null ? void 0 : t.mergedRtlRef.value;
    const m = {};
    for (const C of v) m[C.name] = Da(C), (g = C.peers) === null || g === void 0 || g.forEach((S) => {
      S.name in m || (m[S.name] = Da(S));
    });
    return m;
  }), c = B(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), u = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), p = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), h = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), f = B(() => {
    const { value: g } = o, { value: v } = r, m = v && Object.keys(v).length !== 0, C = g == null ? void 0 : g.name;
    return C ? m ? `${C}-${Tr(JSON.stringify(r.value))}` : C : m ? Tr(JSON.stringify(r.value)) : "";
  });
  return Se(Tt, { mergedThemeHashRef: f, mergedBreakpointsRef: c, mergedRtlRef: d, mergedIconsRef: a, mergedComponentPropsRef: l, mergedBorderedRef: i, mergedNamespaceRef: n, mergedClsPrefixRef: s, mergedLocaleRef: B(() => {
    const { locale: g } = e;
    if (g !== null) return g === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : g;
  }), mergedDateLocaleRef: B(() => {
    const { dateLocale: g } = e;
    if (g !== null) return g === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : g;
  }), mergedHljsRef: B(() => {
    const { hljs: g } = e;
    return g === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : g;
  }), mergedKatexRef: B(() => {
    const { katex: g } = e;
    return g === void 0 ? t == null ? void 0 : t.mergedKatexRef.value : g;
  }), mergedThemeRef: o, mergedThemeOverridesRef: r, inlineThemeDisabled: u || false, preflightStyleDisabled: p || false, styleMountTarget: h }), { mergedClsPrefix: s, mergedBordered: i, mergedNamespace: n, mergedTheme: o, mergedThemeOverrides: r };
}, render() {
  var e, t, o, r;
  return this.abstract ? (r = (o = this.$slots).default) === null || r === void 0 ? void 0 : r.call(o) : b(this.as || this.tag, { class: `${this.mergedClsPrefix || $n}-config-provider` }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
} });
function tx(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const rd = { name: "Popselect", common: q, peers: { Popover: xo, InternalSelectMenu: qr }, self: tx };
function ox(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const nd = { name: "Select", common: q, peers: { InternalSelection: wa, InternalSelectMenu: qr }, self: ox }, rx = { itemPaddingSmall: "0 4px", itemMarginSmall: "0 0 0 8px", itemMarginSmallRtl: "0 8px 0 0", itemPaddingMedium: "0 4px", itemMarginMedium: "0 0 0 8px", itemMarginMediumRtl: "0 8px 0 0", itemPaddingLarge: "0 4px", itemMarginLarge: "0 0 0 8px", itemMarginLargeRtl: "0 8px 0 0", buttonIconSizeSmall: "14px", buttonIconSizeMedium: "16px", buttonIconSizeLarge: "18px", inputWidthSmall: "60px", selectWidthSmall: "unset", inputMarginSmall: "0 0 0 8px", inputMarginSmallRtl: "0 8px 0 0", selectMarginSmall: "0 0 0 8px", prefixMarginSmall: "0 8px 0 0", suffixMarginSmall: "0 0 0 8px", inputWidthMedium: "60px", selectWidthMedium: "unset", inputMarginMedium: "0 0 0 8px", inputMarginMediumRtl: "0 8px 0 0", selectMarginMedium: "0 0 0 8px", prefixMarginMedium: "0 8px 0 0", suffixMarginMedium: "0 0 0 8px", inputWidthLarge: "60px", selectWidthLarge: "unset", inputMarginLarge: "0 0 0 8px", inputMarginLargeRtl: "0 8px 0 0", selectMarginLarge: "0 0 0 8px", prefixMarginLarge: "0 8px 0 0", suffixMarginLarge: "0 0 0 8px" };
function nx(e) {
  const { textColor2: t, primaryColor: o, primaryColorHover: r, primaryColorPressed: n, inputColorDisabled: i, textColorDisabled: a, borderColor: l, borderRadius: s, fontSizeTiny: d, fontSizeSmall: c, fontSizeMedium: u, heightTiny: p, heightSmall: h, heightMedium: f } = e;
  return Object.assign(Object.assign({}, rx), { buttonColor: "#0000", buttonColorHover: "#0000", buttonColorPressed: "#0000", buttonBorder: `1px solid ${l}`, buttonBorderHover: `1px solid ${l}`, buttonBorderPressed: `1px solid ${l}`, buttonIconColor: t, buttonIconColorHover: t, buttonIconColorPressed: t, itemTextColor: t, itemTextColorHover: r, itemTextColorPressed: n, itemTextColorActive: o, itemTextColorDisabled: a, itemColor: "#0000", itemColorHover: "#0000", itemColorPressed: "#0000", itemColorActive: "#0000", itemColorActiveHover: "#0000", itemColorDisabled: i, itemBorder: "1px solid #0000", itemBorderHover: "1px solid #0000", itemBorderPressed: "1px solid #0000", itemBorderActive: `1px solid ${o}`, itemBorderDisabled: `1px solid ${l}`, itemBorderRadius: s, itemSizeSmall: p, itemSizeMedium: h, itemSizeLarge: f, itemFontSizeSmall: d, itemFontSizeMedium: c, itemFontSizeLarge: u, jumperFontSizeSmall: d, jumperFontSizeMedium: c, jumperFontSizeLarge: u, jumperTextColor: t, jumperTextColorDisabled: a });
}
const id = { name: "Pagination", common: q, peers: { Select: nd, Input: mt, Popselect: rd }, self: nx }, ix = { padding: "4px 0", optionIconSizeSmall: "14px", optionIconSizeMedium: "16px", optionIconSizeLarge: "16px", optionIconSizeHuge: "18px", optionSuffixWidthSmall: "14px", optionSuffixWidthMedium: "14px", optionSuffixWidthLarge: "16px", optionSuffixWidthHuge: "16px", optionIconSuffixWidthSmall: "32px", optionIconSuffixWidthMedium: "32px", optionIconSuffixWidthLarge: "36px", optionIconSuffixWidthHuge: "36px", optionPrefixWidthSmall: "14px", optionPrefixWidthMedium: "14px", optionPrefixWidthLarge: "16px", optionPrefixWidthHuge: "16px", optionIconPrefixWidthSmall: "36px", optionIconPrefixWidthMedium: "36px", optionIconPrefixWidthLarge: "40px", optionIconPrefixWidthHuge: "40px" };
function ax(e) {
  const { primaryColor: t, textColor2: o, dividerColor: r, hoverColor: n, popoverColor: i, invertedColor: a, borderRadius: l, fontSizeSmall: s, fontSizeMedium: d, fontSizeLarge: c, fontSizeHuge: u, heightSmall: p, heightMedium: h, heightLarge: f, heightHuge: g, textColor3: v, opacityDisabled: m } = e;
  return Object.assign(Object.assign({}, ix), { optionHeightSmall: p, optionHeightMedium: h, optionHeightLarge: f, optionHeightHuge: g, borderRadius: l, fontSizeSmall: s, fontSizeMedium: d, fontSizeLarge: c, fontSizeHuge: u, optionTextColor: o, optionTextColorHover: o, optionTextColorActive: t, optionTextColorChildActive: t, color: i, dividerColor: r, suffixColor: o, prefixColor: o, optionColorHover: n, optionColorActive: ee(t, { alpha: 0.1 }), groupHeaderTextColor: v, optionTextColorInverted: "#BBB", optionTextColorHoverInverted: "#FFF", optionTextColorActiveInverted: "#FFF", optionTextColorChildActiveInverted: "#FFF", colorInverted: a, dividerColorInverted: "#BBB", suffixColorInverted: "#BBB", prefixColorInverted: "#BBB", optionColorHoverInverted: t, optionColorActiveInverted: t, groupHeaderTextColorInverted: "#AAA", optionOpacityDisabled: m });
}
const On = { name: "Dropdown", common: q, peers: { Popover: xo }, self: ax }, lx = { padding: "8px 14px" };
function sx(e) {
  const { borderRadius: t, boxShadow2: o, baseColor: r } = e;
  return Object.assign(Object.assign({}, lx), { borderRadius: t, boxShadow: o, color: X(r, "rgba(0, 0, 0, .85)"), textColor: r });
}
const Gr = { name: "Tooltip", common: q, peers: { Popover: xo }, self: sx }, Pa = { name: "Ellipsis", common: q, peers: { Tooltip: Gr } }, cx = { radioSizeSmall: "14px", radioSizeMedium: "16px", radioSizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function dx(e) {
  const { borderColor: t, primaryColor: o, baseColor: r, textColorDisabled: n, inputColorDisabled: i, textColor2: a, opacityDisabled: l, borderRadius: s, fontSizeSmall: d, fontSizeMedium: c, fontSizeLarge: u, heightSmall: p, heightMedium: h, heightLarge: f, lineHeight: g } = e;
  return Object.assign(Object.assign({}, cx), { labelLineHeight: g, buttonHeightSmall: p, buttonHeightMedium: h, buttonHeightLarge: f, fontSizeSmall: d, fontSizeMedium: c, fontSizeLarge: u, boxShadow: `inset 0 0 0 1px ${t}`, boxShadowActive: `inset 0 0 0 1px ${o}`, boxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${ee(o, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${o}`, boxShadowDisabled: `inset 0 0 0 1px ${t}`, color: r, colorDisabled: i, colorActive: "#0000", textColor: a, textColorDisabled: n, dotColorActive: o, dotColorDisabled: t, buttonBorderColor: t, buttonBorderColorActive: o, buttonBorderColorHover: t, buttonColor: r, buttonColorActive: r, buttonTextColor: a, buttonTextColorActive: o, buttonTextColorHover: o, opacityDisabled: l, buttonBoxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${ee(o, { alpha: 0.3 })}`, buttonBoxShadowHover: "inset 0 0 0 1px #0000", buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: s });
}
const ad = { name: "Radio", common: q, self: dx }, ux = { thPaddingSmall: "8px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "8px", tdPaddingMedium: "12px", tdPaddingLarge: "12px", sorterSize: "15px", resizableContainerSize: "8px", resizableSize: "2px", filterSize: "15px", paginationMargin: "12px 0 0 0", emptyPadding: "48px 0", actionPadding: "8px 12px", actionButtonMargin: "0 8px 0 0" };
function fx(e) {
  const { cardColor: t, modalColor: o, popoverColor: r, textColor2: n, textColor1: i, tableHeaderColor: a, tableColorHover: l, iconColor: s, primaryColor: d, fontWeightStrong: c, borderRadius: u, lineHeight: p, fontSizeSmall: h, fontSizeMedium: f, fontSizeLarge: g, dividerColor: v, heightSmall: m, opacityDisabled: C, tableColorStriped: S } = e;
  return Object.assign(Object.assign({}, ux), { actionDividerColor: v, lineHeight: p, borderRadius: u, fontSizeSmall: h, fontSizeMedium: f, fontSizeLarge: g, borderColor: X(t, v), tdColorHover: X(t, l), tdColorSorting: X(t, l), tdColorStriped: X(t, S), thColor: X(t, a), thColorHover: X(X(t, a), l), thColorSorting: X(X(t, a), l), tdColor: t, tdTextColor: n, thTextColor: i, thFontWeight: c, thButtonColorHover: l, thIconColor: s, thIconColorActive: d, borderColorModal: X(o, v), tdColorHoverModal: X(o, l), tdColorSortingModal: X(o, l), tdColorStripedModal: X(o, S), thColorModal: X(o, a), thColorHoverModal: X(X(o, a), l), thColorSortingModal: X(X(o, a), l), tdColorModal: o, borderColorPopover: X(r, v), tdColorHoverPopover: X(r, l), tdColorSortingPopover: X(r, l), tdColorStripedPopover: X(r, S), thColorPopover: X(r, a), thColorHoverPopover: X(X(r, a), l), thColorSortingPopover: X(X(r, a), l), tdColorPopover: r, boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)", boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)", loadingColor: d, loadingSize: m, opacityLoading: C });
}
const hx = { name: "DataTable", common: q, peers: { Button: ut, Checkbox: nr, Radio: ad, Pagination: id, Scrollbar: nt, Empty: bo, Popover: xo, Ellipsis: Pa, Dropdown: On }, self: fx }, px = Object.assign(Object.assign({}, Bn), me.props), gx = J({ name: "Tooltip", props: px, slots: Object, __popover__: true, setup(e) {
  const { mergedClsPrefixRef: t } = rt(e), o = me("Tooltip", "-tooltip", void 0, Gr, e, t), r = W(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    r.value.syncPosition();
  }, setShow(i) {
    r.value.setShow(i);
  } }), { popoverRef: r, mergedTheme: o, popoverThemeOverrides: B(() => o.value.self) });
}, render() {
  const { mergedTheme: e, internalExtraClass: t } = this;
  return b(Xc, Object.assign(Object.assign({}, this.$props), { theme: e.peers.Popover, themeOverrides: e.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: t.concat("tooltip"), ref: "popoverRef" }), this.$slots);
} }), ld = V("ellipsis", { overflow: "hidden" }, [Ze("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), H("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), H("cursor-pointer", `
 cursor: pointer;
 `)]);
function Li(e) {
  return `${e}-ellipsis--line-clamp`;
}
function Di(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const sd = Object.assign(Object.assign({}, me.props), { expandTrigger: String, lineClamp: [Number, String], tooltip: { type: [Boolean, Object], default: true } }), mx = J({ name: "Ellipsis", inheritAttrs: false, props: sd, slots: Object, setup(e, { slots: t, attrs: o }) {
  const r = Hc(), n = me("Ellipsis", "-ellipsis", ld, Pa, e, r), i = W(null), a = W(null), l = W(null), s = W(false), d = B(() => {
    const { lineClamp: v } = e, { value: m } = s;
    return v !== void 0 ? { textOverflow: "", "-webkit-line-clamp": m ? "" : v } : { textOverflow: m ? "" : "ellipsis", "-webkit-line-clamp": "" };
  });
  function c() {
    let v = false;
    const { value: m } = s;
    if (m) return true;
    const { value: C } = i;
    if (C) {
      const { lineClamp: S } = e;
      if (h(C), S !== void 0) v = C.scrollHeight <= C.offsetHeight;
      else {
        const { value: w } = a;
        w && (v = w.getBoundingClientRect().width <= C.getBoundingClientRect().width);
      }
      f(C, v);
    }
    return v;
  }
  const u = B(() => e.expandTrigger === "click" ? () => {
    var v;
    const { value: m } = s;
    m && ((v = l.value) === null || v === void 0 || v.setShow(false)), s.value = !m;
  } : void 0);
  Yi(() => {
    var v;
    e.tooltip && ((v = l.value) === null || v === void 0 || v.setShow(false));
  });
  const p = () => b("span", Object.assign({}, Ht(o, { class: [`${r.value}-ellipsis`, e.lineClamp !== void 0 ? Li(r.value) : void 0, e.expandTrigger === "click" ? Di(r.value, "pointer") : void 0], style: d.value }), { ref: "triggerRef", onClick: u.value, onMouseenter: e.expandTrigger === "click" ? c : void 0 }), e.lineClamp ? t : b("span", { ref: "triggerInnerRef" }, t));
  function h(v) {
    if (!v) return;
    const m = d.value, C = Li(r.value);
    e.lineClamp !== void 0 ? g(v, C, "add") : g(v, C, "remove");
    for (const S in m) v.style[S] !== m[S] && (v.style[S] = m[S]);
  }
  function f(v, m) {
    const C = Di(r.value, "pointer");
    e.expandTrigger === "click" && !m ? g(v, C, "add") : g(v, C, "remove");
  }
  function g(v, m, C) {
    C === "add" ? v.classList.contains(m) || v.classList.add(m) : v.classList.contains(m) && v.classList.remove(m);
  }
  return { mergedTheme: n, triggerRef: i, triggerInnerRef: a, tooltipRef: l, handleClick: u, renderTrigger: p, getTooltipDisabled: c };
}, render() {
  var e;
  const { tooltip: t, renderTrigger: o, $slots: r } = this;
  if (t) {
    const { mergedTheme: n } = this;
    return b(gx, Object.assign({ ref: "tooltipRef", placement: "top" }, t, { getDisabled: this.getTooltipDisabled, theme: n.peers.Tooltip, themeOverrides: n.peerOverrides.Tooltip }), { trigger: o, default: (e = r.tooltip) !== null && e !== void 0 ? e : r.default });
  } else return o();
} }), OS = J({ name: "PerformantEllipsis", props: sd, inheritAttrs: false, setup(e, { attrs: t, slots: o }) {
  const r = W(false), n = Hc();
  return vo("-ellipsis", ld, n), { mouseEntered: r, renderTrigger: () => {
    const { lineClamp: a } = e, l = n.value;
    return b("span", Object.assign({}, Ht(t, { class: [`${l}-ellipsis`, a !== void 0 ? Li(l) : void 0, e.expandTrigger === "click" ? Di(l, "pointer") : void 0], style: a === void 0 ? { textOverflow: "ellipsis" } : { "-webkit-line-clamp": a } }), { onMouseenter: () => {
      r.value = true;
    } }), a ? o : b("span", null, o));
  } };
}, render() {
  return this.mouseEntered ? b(mx, Ht({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
} }), Ra = "n-dropdown-menu", Fn = "n-dropdown", Ql = "n-dropdown-option", cd = J({ name: "DropdownDivider", props: { clsPrefix: { type: String, required: true } }, render() {
  return b("div", { class: `${this.clsPrefix}-dropdown-divider` });
} }), vx = J({ name: "DropdownGroupHeader", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  const { showIconRef: e, hasSubmenuRef: t } = de(Ra), { renderLabelRef: o, labelFieldRef: r, nodePropsRef: n, renderOptionRef: i } = de(Fn);
  return { labelField: r, showIcon: e, hasSubmenu: t, renderLabel: o, nodeProps: n, renderOption: i };
}, render() {
  var e;
  const { clsPrefix: t, hasSubmenu: o, showIcon: r, nodeProps: n, renderLabel: i, renderOption: a } = this, { rawNode: l } = this.tmNode, s = b("div", Object.assign({ class: `${t}-dropdown-option` }, n == null ? void 0 : n(l)), b("div", { class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group` }, b("div", { "data-dropdown-option": true, class: [`${t}-dropdown-option-body__prefix`, r && `${t}-dropdown-option-body__prefix--show-icon`] }, Ot(l.icon)), b("div", { class: `${t}-dropdown-option-body__label`, "data-dropdown-option": true }, i ? i(l) : Ot((e = l.title) !== null && e !== void 0 ? e : l[this.labelField])), b("div", { class: [`${t}-dropdown-option-body__suffix`, o && `${t}-dropdown-option-body__suffix--has-submenu`], "data-dropdown-option": true })));
  return a ? a({ node: s, option: l }) : s;
} });
function bx(e) {
  const { textColorBase: t, opacity1: o, opacity2: r, opacity3: n, opacity4: i, opacity5: a } = e;
  return { color: t, opacity1Depth: o, opacity2Depth: r, opacity3Depth: n, opacity4Depth: i, opacity5Depth: a };
}
const dd = { name: "Icon", common: q, self: bx }, xx = V("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [H("color-transition", { transition: "color .3s var(--n-bezier)" }), H("depth", { color: "var(--n-color)" }, [I("svg", { opacity: "var(--n-opacity)", transition: "opacity .3s var(--n-bezier)" })]), I("svg", { height: "1em", width: "1em" })]), Cx = Object.assign(Object.assign({}, me.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), En = J({ _n_icon__: true, name: "Icon", inheritAttrs: false, props: Cx, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = rt(e), r = me("Icon", "-icon", xx, dd, e, t), n = B(() => {
    const { depth: a } = e, { common: { cubicBezierEaseInOut: l }, self: s } = r.value;
    if (a !== void 0) {
      const { color: d, [`opacity${a}Depth`]: c } = s;
      return { "--n-bezier": l, "--n-color": d, "--n-opacity": c };
    }
    return { "--n-bezier": l, "--n-color": "", "--n-opacity": "" };
  }), i = o ? gt("icon", B(() => `${e.depth || "d"}`), n, e) : void 0;
  return { mergedClsPrefix: t, mergedStyle: B(() => {
    const { size: a, color: l } = e;
    return { fontSize: to(a), color: l };
  }), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e;
  const { $parent: t, depth: o, mergedClsPrefix: r, component: n, onRender: i, themeClass: a } = this;
  return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && ro("icon", "don't wrap `n-icon` inside `n-icon`"), i == null ? void 0 : i(), b("i", Ht(this.$attrs, { role: "img", class: [`${r}-icon`, a, { [`${r}-icon--depth`]: o, [`${r}-icon--color-transition`]: o !== void 0 }], style: [this.cssVars, this.mergedStyle] }), n ? b(n) : this.$slots);
} });
function Hi(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function yx(e) {
  return e.type === "group";
}
function ud(e) {
  return e.type === "divider";
}
function wx(e) {
  return e.type === "render";
}
const fd = J({ name: "DropdownOption", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null }, placement: { type: String, default: "right-start" }, props: Object, scrollable: Boolean }, setup(e) {
  const t = de(Fn), { hoverKeyRef: o, keyboardKeyRef: r, lastToggledSubmenuKeyRef: n, pendingKeyPathRef: i, activeKeyPathRef: a, animatedRef: l, mergedShowRef: s, renderLabelRef: d, renderIconRef: c, labelFieldRef: u, childrenFieldRef: p, renderOptionRef: h, nodePropsRef: f, menuPropsRef: g } = t, v = de(Ql, null), m = de(Ra), C = de(er), S = B(() => e.tmNode.rawNode), w = B(() => {
    const { value: F } = p;
    return Hi(e.tmNode.rawNode, F);
  }), E = B(() => {
    const { disabled: F } = e.tmNode;
    return F;
  }), P = B(() => {
    if (!w.value) return false;
    const { key: F, disabled: U } = e.tmNode;
    if (U) return false;
    const { value: ne } = o, { value: se } = r, { value: he } = n, { value: ue } = i;
    return ne !== null ? ue.includes(F) : se !== null ? ue.includes(F) && ue[ue.length - 1] !== F : he !== null ? ue.includes(F) : false;
  }), x = B(() => r.value === null && !l.value), $ = Qg(P, 300, x), R = B(() => !!(v == null ? void 0 : v.enteringSubmenuRef.value)), O = W(false);
  Se(Ql, { enteringSubmenuRef: O });
  function _() {
    O.value = true;
  }
  function y() {
    O.value = false;
  }
  function A() {
    const { parentKey: F, tmNode: U } = e;
    U.disabled || s.value && (n.value = F, r.value = null, o.value = U.key);
  }
  function T() {
    const { tmNode: F } = e;
    F.disabled || s.value && o.value !== F.key && A();
  }
  function z(F) {
    if (e.tmNode.disabled || !s.value) return;
    const { relatedTarget: U } = F;
    U && !fl({ target: U }, "dropdownOption") && !fl({ target: U }, "scrollbarRail") && (o.value = null);
  }
  function j() {
    const { value: F } = w, { tmNode: U } = e;
    s.value && !F && !U.disabled && (t.doSelect(U.key, U.rawNode), t.doUpdateShow(false));
  }
  return { labelField: u, renderLabel: d, renderIcon: c, siblingHasIcon: m.showIconRef, siblingHasSubmenu: m.hasSubmenuRef, menuProps: g, popoverBody: C, animated: l, mergedShowSubmenu: B(() => $.value && !R.value), rawNode: S, hasSubmenu: w, pending: ht(() => {
    const { value: F } = i, { key: U } = e.tmNode;
    return F.includes(U);
  }), childActive: ht(() => {
    const { value: F } = a, { key: U } = e.tmNode, ne = F.findIndex((se) => U === se);
    return ne === -1 ? false : ne < F.length - 1;
  }), active: ht(() => {
    const { value: F } = a, { key: U } = e.tmNode, ne = F.findIndex((se) => U === se);
    return ne === -1 ? false : ne === F.length - 1;
  }), mergedDisabled: E, renderOption: h, nodeProps: f, handleClick: j, handleMouseMove: T, handleMouseEnter: A, handleMouseLeave: z, handleSubmenuBeforeEnter: _, handleSubmenuAfterEnter: y };
}, render() {
  var e, t;
  const { animated: o, rawNode: r, mergedShowSubmenu: n, clsPrefix: i, siblingHasIcon: a, siblingHasSubmenu: l, renderLabel: s, renderIcon: d, renderOption: c, nodeProps: u, props: p, scrollable: h } = this;
  let f = null;
  if (n) {
    const C = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, r, r.children);
    f = b(hd, Object.assign({}, C, { clsPrefix: i, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
  }
  const g = { class: [`${i}-dropdown-option-body`, this.pending && `${i}-dropdown-option-body--pending`, this.active && `${i}-dropdown-option-body--active`, this.childActive && `${i}-dropdown-option-body--child-active`, this.mergedDisabled && `${i}-dropdown-option-body--disabled`], onMousemove: this.handleMouseMove, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onClick: this.handleClick }, v = u == null ? void 0 : u(r), m = b("div", Object.assign({ class: [`${i}-dropdown-option`, v == null ? void 0 : v.class], "data-dropdown-option": true }, v), b("div", Ht(g, p), [b("div", { class: [`${i}-dropdown-option-body__prefix`, a && `${i}-dropdown-option-body__prefix--show-icon`] }, [d ? d(r) : Ot(r.icon)]), b("div", { "data-dropdown-option": true, class: `${i}-dropdown-option-body__label` }, s ? s(r) : Ot((t = r[this.labelField]) !== null && t !== void 0 ? t : r.title)), b("div", { "data-dropdown-option": true, class: [`${i}-dropdown-option-body__suffix`, l && `${i}-dropdown-option-body__suffix--has-submenu`] }, this.hasSubmenu ? b(En, null, { default: () => b(Ov, null) }) : null)]), this.hasSubmenu ? b(Sc, null, { default: () => [b($c, null, { default: () => b("div", { class: `${i}-dropdown-offset-container` }, b(Rc, { show: this.mergedShowSubmenu, placement: this.placement, to: h && this.popoverBody || void 0, teleportDisabled: !h }, { default: () => b("div", { class: `${i}-dropdown-menu-wrapper` }, o ? b(Et, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, { default: () => f }) : f) })) })] }) : null);
  return c ? c({ node: m, option: r }) : m;
} }), Sx = J({ name: "NDropdownGroup", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null } }, render() {
  const { tmNode: e, parentKey: t, clsPrefix: o } = this, { children: r } = e;
  return b($t, null, b(vx, { clsPrefix: o, tmNode: e, key: e.key }), r == null ? void 0 : r.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : ud(i) ? b(cd, { clsPrefix: o, key: n.key }) : n.isGroup ? (ro("dropdown", "`group` node is not allowed to be put in `group` node."), null) : b(fd, { clsPrefix: o, tmNode: n, parentKey: t, key: n.key });
  }));
} }), $x = J({ name: "DropdownRenderOption", props: { tmNode: { type: Object, required: true } }, render() {
  const { rawNode: { render: e, props: t } } = this.tmNode;
  return b("div", t, [e == null ? void 0 : e()]);
} }), hd = J({ name: "DropdownMenu", props: { scrollable: Boolean, showArrow: Boolean, arrowStyle: [String, Object], clsPrefix: { type: String, required: true }, tmNodes: { type: Array, default: () => [] }, parentKey: { type: [String, Number], default: null } }, setup(e) {
  const { renderIconRef: t, childrenFieldRef: o } = de(Fn);
  Se(Ra, { showIconRef: B(() => {
    const n = t.value;
    return e.tmNodes.some((i) => {
      var a;
      if (i.isGroup) return (a = i.children) === null || a === void 0 ? void 0 : a.some(({ rawNode: s }) => n ? n(s) : s.icon);
      const { rawNode: l } = i;
      return n ? n(l) : l.icon;
    });
  }), hasSubmenuRef: B(() => {
    const { value: n } = o;
    return e.tmNodes.some((i) => {
      var a;
      if (i.isGroup) return (a = i.children) === null || a === void 0 ? void 0 : a.some(({ rawNode: s }) => Hi(s, n));
      const { rawNode: l } = i;
      return Hi(l, n);
    });
  }) });
  const r = W(null);
  return Se(jr, null), Se(Wr, null), Se(er, r), { bodyRef: r };
}, render() {
  const { parentKey: e, clsPrefix: t, scrollable: o } = this, r = this.tmNodes.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : wx(i) ? b($x, { tmNode: n, key: n.key }) : ud(i) ? b(cd, { clsPrefix: t, key: n.key }) : yx(i) ? b(Sx, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key }) : b(fd, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key, props: i.props, scrollable: o });
  });
  return b("div", { class: [`${t}-dropdown-menu`, o && `${t}-dropdown-menu--scrollable`], ref: "bodyRef" }, o ? b(Vc, { contentClass: `${t}-dropdown-menu__content` }, { default: () => r }) : r, this.showArrow ? Yc({ clsPrefix: t, arrowStyle: this.arrowStyle, arrowClass: void 0, arrowWrapperClass: void 0, arrowWrapperStyle: void 0 }) : null);
} }), Px = V("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Uc(), V("dropdown-option", `
 position: relative;
 `, [I("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [I("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), V("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [I("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), Ze("disabled", [H("pending", `
 color: var(--n-option-text-color-hover);
 `, [L("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), I("&::before", "background-color: var(--n-option-color-hover);")]), H("active", `
 color: var(--n-option-text-color-active);
 `, [L("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), I("&::before", "background-color: var(--n-option-color-active);")]), H("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [L("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), H("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), H("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [L("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [H("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), L("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [H("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), V("icon", `
 font-size: var(--n-option-icon-size);
 `)]), L("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), L("suffix", `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `, [H("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), V("icon", `
 font-size: var(--n-option-icon-size);
 `)]), V("dropdown-menu", "pointer-events: all;")]), V("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), V("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), V("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), I(">", [V("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ze("scrollable", `
 padding: var(--n-padding);
 `), H("scrollable", [L("content", `
 padding: var(--n-padding);
 `)])]), Rx = { animated: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, size: { type: String, default: "medium" }, inverted: Boolean, placement: { type: String, default: "bottom" }, onSelect: [Function, Array], options: { type: Array, default: () => [] }, menuProps: Function, showArrow: Boolean, renderLabel: Function, renderIcon: Function, renderOption: Function, nodeProps: Function, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, value: [String, Number] }, Ex = Object.keys(Bn), kx = Object.assign(Object.assign(Object.assign({}, Bn), Rx), me.props), FS = J({ name: "Dropdown", inheritAttrs: false, props: kx, setup(e) {
  const t = W(false), o = Ar(be(e, "show"), t), r = B(() => {
    const { keyField: y, childrenField: A } = e;
    return $b(e.options, { getKey(T) {
      return T[y];
    }, getDisabled(T) {
      return T.disabled === true;
    }, getIgnored(T) {
      return T.type === "divider" || T.type === "render";
    }, getChildren(T) {
      return T[A];
    } });
  }), n = B(() => r.value.treeNodes), i = W(null), a = W(null), l = W(null), s = B(() => {
    var y, A, T;
    return (T = (A = (y = i.value) !== null && y !== void 0 ? y : a.value) !== null && A !== void 0 ? A : l.value) !== null && T !== void 0 ? T : null;
  }), d = B(() => r.value.getPath(s.value).keyPath), c = B(() => r.value.getPath(e.value).keyPath), u = ht(() => e.keyboard && o.value);
  Yg({ keydown: { ArrowUp: { prevent: true, handler: E }, ArrowRight: { prevent: true, handler: w }, ArrowDown: { prevent: true, handler: P }, ArrowLeft: { prevent: true, handler: S }, Enter: { prevent: true, handler: x }, Escape: C } }, u);
  const { mergedClsPrefixRef: p, inlineThemeDisabled: h } = rt(e), f = me("Dropdown", "-dropdown", Px, On, e, p);
  Se(Fn, { labelFieldRef: be(e, "labelField"), childrenFieldRef: be(e, "childrenField"), renderLabelRef: be(e, "renderLabel"), renderIconRef: be(e, "renderIcon"), hoverKeyRef: i, keyboardKeyRef: a, lastToggledSubmenuKeyRef: l, pendingKeyPathRef: d, activeKeyPathRef: c, animatedRef: be(e, "animated"), mergedShowRef: o, nodePropsRef: be(e, "nodeProps"), renderOptionRef: be(e, "renderOption"), menuPropsRef: be(e, "menuProps"), doSelect: g, doUpdateShow: v }), Te(o, (y) => {
    !e.animated && !y && m();
  });
  function g(y, A) {
    const { onSelect: T } = e;
    T && ge(T, y, A);
  }
  function v(y) {
    const { "onUpdate:show": A, onUpdateShow: T } = e;
    A && ge(A, y), T && ge(T, y), t.value = y;
  }
  function m() {
    i.value = null, a.value = null, l.value = null;
  }
  function C() {
    v(false);
  }
  function S() {
    R("left");
  }
  function w() {
    R("right");
  }
  function E() {
    R("up");
  }
  function P() {
    R("down");
  }
  function x() {
    const y = $();
    (y == null ? void 0 : y.isLeaf) && o.value && (g(y.key, y.rawNode), v(false));
  }
  function $() {
    var y;
    const { value: A } = r, { value: T } = s;
    return !A || T === null ? null : (y = A.getNode(T)) !== null && y !== void 0 ? y : null;
  }
  function R(y) {
    const { value: A } = s, { value: { getFirstAvailableNode: T } } = r;
    let z = null;
    if (A === null) {
      const j = T();
      j !== null && (z = j.key);
    } else {
      const j = $();
      if (j) {
        let F;
        switch (y) {
          case "down":
            F = j.getNext();
            break;
          case "up":
            F = j.getPrev();
            break;
          case "right":
            F = j.getChild();
            break;
          case "left":
            F = j.getParent();
            break;
        }
        F && (z = F.key);
      }
    }
    z !== null && (i.value = null, a.value = z);
  }
  const O = B(() => {
    const { size: y, inverted: A } = e, { common: { cubicBezierEaseInOut: T }, self: z } = f.value, { padding: j, dividerColor: F, borderRadius: U, optionOpacityDisabled: ne, [Y("optionIconSuffixWidth", y)]: se, [Y("optionSuffixWidth", y)]: he, [Y("optionIconPrefixWidth", y)]: ue, [Y("optionPrefixWidth", y)]: we, [Y("fontSize", y)]: Ce, [Y("optionHeight", y)]: Be, [Y("optionIconSize", y)]: re } = z, M = { "--n-bezier": T, "--n-font-size": Ce, "--n-padding": j, "--n-border-radius": U, "--n-option-height": Be, "--n-option-prefix-width": we, "--n-option-icon-prefix-width": ue, "--n-option-suffix-width": he, "--n-option-icon-suffix-width": se, "--n-option-icon-size": re, "--n-divider-color": F, "--n-option-opacity-disabled": ne };
    return A ? (M["--n-color"] = z.colorInverted, M["--n-option-color-hover"] = z.optionColorHoverInverted, M["--n-option-color-active"] = z.optionColorActiveInverted, M["--n-option-text-color"] = z.optionTextColorInverted, M["--n-option-text-color-hover"] = z.optionTextColorHoverInverted, M["--n-option-text-color-active"] = z.optionTextColorActiveInverted, M["--n-option-text-color-child-active"] = z.optionTextColorChildActiveInverted, M["--n-prefix-color"] = z.prefixColorInverted, M["--n-suffix-color"] = z.suffixColorInverted, M["--n-group-header-text-color"] = z.groupHeaderTextColorInverted) : (M["--n-color"] = z.color, M["--n-option-color-hover"] = z.optionColorHover, M["--n-option-color-active"] = z.optionColorActive, M["--n-option-text-color"] = z.optionTextColor, M["--n-option-text-color-hover"] = z.optionTextColorHover, M["--n-option-text-color-active"] = z.optionTextColorActive, M["--n-option-text-color-child-active"] = z.optionTextColorChildActive, M["--n-prefix-color"] = z.prefixColor, M["--n-suffix-color"] = z.suffixColor, M["--n-group-header-text-color"] = z.groupHeaderTextColor), M;
  }), _ = h ? gt("dropdown", B(() => `${e.size[0]}${e.inverted ? "i" : ""}`), O, e) : void 0;
  return { mergedClsPrefix: p, mergedTheme: f, tmNodes: n, mergedShow: o, handleAfterLeave: () => {
    e.animated && m();
  }, doUpdateShow: v, cssVars: h ? void 0 : O, themeClass: _ == null ? void 0 : _.themeClass, onRender: _ == null ? void 0 : _.onRender };
}, render() {
  const e = (r, n, i, a, l) => {
    var s;
    const { mergedClsPrefix: d, menuProps: c } = this;
    (s = this.onRender) === null || s === void 0 || s.call(this);
    const u = (c == null ? void 0 : c(void 0, this.tmNodes.map((h) => h.rawNode))) || {}, p = { ref: jm(n), class: [r, `${d}-dropdown`, this.themeClass], clsPrefix: d, tmNodes: this.tmNodes, style: [...i, this.cssVars], showArrow: this.showArrow, arrowStyle: this.arrowStyle, scrollable: this.scrollable, onMouseenter: a, onMouseleave: l };
    return b(hd, Ht(this.$attrs, p, u));
  }, { mergedTheme: t } = this, o = { show: this.mergedShow, theme: t.peers.Popover, themeOverrides: t.peerOverrides.Popover, internalOnAfterLeave: this.handleAfterLeave, internalRenderBody: e, onUpdateShow: this.doUpdateShow, "onUpdate:show": void 0 };
  return b(Xc, Object.assign({}, Or(this.$props, Ex), o), { trigger: () => {
    var r, n;
    return (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r);
  } });
} }), Tx = { itemFontSize: "12px", itemHeight: "36px", itemWidth: "52px", panelActionPadding: "8px 0" };
function zx(e) {
  const { popoverColor: t, textColor2: o, primaryColor: r, hoverColor: n, dividerColor: i, opacityDisabled: a, boxShadow2: l, borderRadius: s, iconColor: d, iconColorDisabled: c } = e;
  return Object.assign(Object.assign({}, Tx), { panelColor: t, panelBoxShadow: l, panelDividerColor: i, itemTextColor: o, itemTextColorActive: r, itemColorHover: n, itemOpacityDisabled: a, itemBorderRadius: s, borderRadius: s, iconColor: d, iconColorDisabled: c });
}
const pd = { name: "TimePicker", common: q, peers: { Scrollbar: nt, Button: ut, Input: mt }, self: zx }, Ix = { itemSize: "24px", itemCellWidth: "38px", itemCellHeight: "32px", scrollItemWidth: "80px", scrollItemHeight: "40px", panelExtraFooterPadding: "8px 12px", panelActionPadding: "8px 12px", calendarTitlePadding: "0", calendarTitleHeight: "28px", arrowSize: "14px", panelHeaderPadding: "8px 12px", calendarDaysHeight: "32px", calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px", calendarLeftPaddingDate: "6px 12px 4px 12px", calendarLeftPaddingDatetime: "4px 12px", calendarLeftPaddingDaterange: "6px 12px 4px 12px", calendarLeftPaddingDatetimerange: "4px 12px", calendarLeftPaddingMonth: "0", calendarLeftPaddingYear: "0", calendarLeftPaddingQuarter: "0", calendarLeftPaddingMonthrange: "0", calendarLeftPaddingQuarterrange: "0", calendarLeftPaddingYearrange: "0", calendarLeftPaddingWeek: "6px 12px 4px 12px", calendarRightPaddingDate: "6px 12px 4px 12px", calendarRightPaddingDatetime: "4px 12px", calendarRightPaddingDaterange: "6px 12px 4px 12px", calendarRightPaddingDatetimerange: "4px 12px", calendarRightPaddingMonth: "0", calendarRightPaddingYear: "0", calendarRightPaddingQuarter: "0", calendarRightPaddingMonthrange: "0", calendarRightPaddingQuarterrange: "0", calendarRightPaddingYearrange: "0", calendarRightPaddingWeek: "0" };
function Ax(e) {
  const { hoverColor: t, fontSize: o, textColor2: r, textColorDisabled: n, popoverColor: i, primaryColor: a, borderRadiusSmall: l, iconColor: s, iconColorDisabled: d, textColor1: c, dividerColor: u, boxShadow2: p, borderRadius: h, fontWeightStrong: f } = e;
  return Object.assign(Object.assign({}, Ix), { itemFontSize: o, calendarDaysFontSize: o, calendarTitleFontSize: o, itemTextColor: r, itemTextColorDisabled: n, itemTextColorActive: i, itemTextColorCurrent: a, itemColorIncluded: ee(a, { alpha: 0.1 }), itemColorHover: t, itemColorDisabled: t, itemColorActive: a, itemBorderRadius: l, panelColor: i, panelTextColor: r, arrowColor: s, calendarTitleTextColor: c, calendarTitleColorHover: t, calendarDaysTextColor: r, panelHeaderDividerColor: u, calendarDaysDividerColor: u, calendarDividerColor: u, panelActionDividerColor: u, panelBoxShadow: p, panelBorderRadius: h, calendarTitleFontWeight: f, scrollItemBorderRadius: h, iconColor: s, iconColorDisabled: d });
}
const Mx = { name: "DatePicker", common: q, peers: { Input: mt, Button: ut, TimePicker: pd, Scrollbar: nt }, self: Ax }, Bx = { thPaddingBorderedSmall: "8px 12px", thPaddingBorderedMedium: "12px 16px", thPaddingBorderedLarge: "16px 24px", thPaddingSmall: "0", thPaddingMedium: "0", thPaddingLarge: "0", tdPaddingBorderedSmall: "8px 12px", tdPaddingBorderedMedium: "12px 16px", tdPaddingBorderedLarge: "16px 24px", tdPaddingSmall: "0 0 8px 0", tdPaddingMedium: "0 0 12px 0", tdPaddingLarge: "0 0 16px 0" };
function Ox(e) {
  const { tableHeaderColor: t, textColor2: o, textColor1: r, cardColor: n, modalColor: i, popoverColor: a, dividerColor: l, borderRadius: s, fontWeightStrong: d, lineHeight: c, fontSizeSmall: u, fontSizeMedium: p, fontSizeLarge: h } = e;
  return Object.assign(Object.assign({}, Bx), { lineHeight: c, fontSizeSmall: u, fontSizeMedium: p, fontSizeLarge: h, titleTextColor: r, thColor: X(n, t), thColorModal: X(i, t), thColorPopover: X(a, t), thTextColor: r, thFontWeight: d, tdTextColor: o, tdColor: n, tdColorModal: i, tdColorPopover: a, borderColor: X(n, l), borderColorModal: X(i, l), borderColorPopover: X(a, l), borderRadius: s });
}
const Fx = { name: "Descriptions", common: q, self: Ox }, Lx = "n-dialog-provider", LS = "n-dialog-api", DS = "n-dialog-reactive-list", Dx = { titleFontSize: "18px", padding: "16px 28px 20px 28px", iconSize: "28px", actionSpace: "12px", contentMargin: "8px 0 16px 0", iconMargin: "0 4px 0 0", iconMarginIconTop: "4px 0 8px 0", closeSize: "22px", closeIconSize: "18px", closeMargin: "20px 26px 0 0", closeMarginIconTop: "10px 16px 0 0" };
function Hx(e) {
  const { textColor1: t, textColor2: o, modalColor: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, infoColor: d, successColor: c, warningColor: u, errorColor: p, primaryColor: h, dividerColor: f, borderRadius: g, fontWeightStrong: v, lineHeight: m, fontSize: C } = e;
  return Object.assign(Object.assign({}, Dx), { fontSize: C, lineHeight: m, border: `1px solid ${f}`, titleTextColor: t, textColor: o, color: r, closeColorHover: l, closeColorPressed: s, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeBorderRadius: g, iconColor: h, iconColorInfo: d, iconColorSuccess: c, iconColorWarning: u, iconColorError: p, borderRadius: g, titleFontWeight: v });
}
const Ea = { name: "Dialog", common: q, peers: { Button: ut }, self: Hx }, ka = { icon: Function, type: { type: String, default: "default" }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean }, _x = Fr(ka), Nx = I([V("dialog", `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [L("icon", `
 color: var(--n-icon-color);
 `), H("bordered", `
 border: var(--n-border);
 `), H("icon-top", [L("close", `
 margin: var(--n-close-margin);
 `), L("icon", `
 margin: var(--n-icon-margin);
 `), L("content", `
 text-align: center;
 `), L("title", `
 justify-content: center;
 `), L("action", `
 justify-content: center;
 `)]), H("icon-left", [L("icon", `
 margin: var(--n-icon-margin);
 `), H("closable", [L("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), L("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), L("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [H("last", "margin-bottom: 0;")]), L("action", `
 display: flex;
 justify-content: flex-end;
 `, [I("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), L("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), L("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), V("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), ia(V("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), V("dialog", [cc(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), Wx = { default: () => b(Vl, null), info: () => b(Vl, null), success: () => b(Nv, null), warning: () => b(Wv, null), error: () => b(Dv, null) }, jx = J({ name: "Dialog", alias: ["NimbusConfirmCard", "Confirm"], props: Object.assign(Object.assign({}, me.props), ka), slots: Object, setup(e) {
  const { mergedComponentPropsRef: t, mergedClsPrefixRef: o, inlineThemeDisabled: r, mergedRtlRef: n } = rt(e), i = zt("Dialog", n, o), a = B(() => {
    var h, f;
    const { iconPlacement: g } = e;
    return g || ((f = (h = t == null ? void 0 : t.value) === null || h === void 0 ? void 0 : h.Dialog) === null || f === void 0 ? void 0 : f.iconPlacement) || "left";
  });
  function l(h) {
    const { onPositiveClick: f } = e;
    f && f(h);
  }
  function s(h) {
    const { onNegativeClick: f } = e;
    f && f(h);
  }
  function d() {
    const { onClose: h } = e;
    h && h();
  }
  const c = me("Dialog", "-dialog", Nx, Ea, e, o), u = B(() => {
    const { type: h } = e, f = a.value, { common: { cubicBezierEaseInOut: g }, self: { fontSize: v, lineHeight: m, border: C, titleTextColor: S, textColor: w, color: E, closeBorderRadius: P, closeColorHover: x, closeColorPressed: $, closeIconColor: R, closeIconColorHover: O, closeIconColorPressed: _, closeIconSize: y, borderRadius: A, titleFontWeight: T, titleFontSize: z, padding: j, iconSize: F, actionSpace: U, contentMargin: ne, closeSize: se, [f === "top" ? "iconMarginIconTop" : "iconMargin"]: he, [f === "top" ? "closeMarginIconTop" : "closeMargin"]: ue, [Y("iconColor", h)]: we } } = c.value, Ce = Jt(he);
    return { "--n-font-size": v, "--n-icon-color": we, "--n-bezier": g, "--n-close-margin": ue, "--n-icon-margin-top": Ce.top, "--n-icon-margin-right": Ce.right, "--n-icon-margin-bottom": Ce.bottom, "--n-icon-margin-left": Ce.left, "--n-icon-size": F, "--n-close-size": se, "--n-close-icon-size": y, "--n-close-border-radius": P, "--n-close-color-hover": x, "--n-close-color-pressed": $, "--n-close-icon-color": R, "--n-close-icon-color-hover": O, "--n-close-icon-color-pressed": _, "--n-color": E, "--n-text-color": w, "--n-border-radius": A, "--n-padding": j, "--n-line-height": m, "--n-border": C, "--n-content-margin": ne, "--n-title-font-size": z, "--n-title-font-weight": T, "--n-title-text-color": S, "--n-action-space": U };
  }), p = r ? gt("dialog", B(() => `${e.type[0]}${a.value[0]}`), u, e) : void 0;
  return { mergedClsPrefix: o, rtlEnabled: i, mergedIconPlacement: a, mergedTheme: c, handlePositiveClick: l, handleNegativeClick: s, handleCloseClick: d, cssVars: r ? void 0 : u, themeClass: p == null ? void 0 : p.themeClass, onRender: p == null ? void 0 : p.onRender };
}, render() {
  var e;
  const { bordered: t, mergedIconPlacement: o, cssVars: r, closable: n, showIcon: i, title: a, content: l, action: s, negativeText: d, positiveText: c, positiveButtonProps: u, negativeButtonProps: p, handlePositiveClick: h, handleNegativeClick: f, mergedTheme: g, loading: v, type: m, mergedClsPrefix: C } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const S = i ? b(Jo, { clsPrefix: C, class: `${C}-dialog__icon` }, { default: () => Ge(this.$slots.icon, (E) => E || (this.icon ? Ot(this.icon) : Wx[this.type]())) }) : null, w = Ge(this.$slots.action, (E) => E || c || d || s ? b("div", { class: [`${C}-dialog__action`, this.actionClass], style: this.actionStyle }, E || (s ? [Ot(s)] : [this.negativeText && b(Io, Object.assign({ theme: g.peers.Button, themeOverrides: g.peerOverrides.Button, ghost: true, size: "small", onClick: f }, p), { default: () => Ot(this.negativeText) }), this.positiveText && b(Io, Object.assign({ theme: g.peers.Button, themeOverrides: g.peerOverrides.Button, size: "small", type: m === "default" ? "primary" : m, disabled: v, loading: v, onClick: h }, u), { default: () => Ot(this.positiveText) })])) : null);
  return b("div", { class: [`${C}-dialog`, this.themeClass, this.closable && `${C}-dialog--closable`, `${C}-dialog--icon-${o}`, t && `${C}-dialog--bordered`, this.rtlEnabled && `${C}-dialog--rtl`], style: r, role: "dialog" }, n ? Ge(this.$slots.close, (E) => {
    const P = [`${C}-dialog__close`, this.rtlEnabled && `${C}-dialog--rtl`];
    return E ? b("div", { class: P }, E) : b(Mn, { focusable: this.closeFocusable, clsPrefix: C, class: P, onClick: this.handleCloseClick });
  }) : null, i && o === "top" ? b("div", { class: `${C}-dialog-icon-container` }, S) : null, b("div", { class: [`${C}-dialog__title`, this.titleClass], style: this.titleStyle }, i && o === "left" ? S : null, To(this.$slots.header, () => [Ot(a)])), b("div", { class: [`${C}-dialog__content`, w ? "" : `${C}-dialog__content--last`, this.contentClass], style: this.contentStyle }, To(this.$slots.default, () => [Ot(l)])), w);
} });
function Vx(e) {
  const { modalColor: t, textColor2: o, boxShadow3: r } = e;
  return { color: t, textColor: o, boxShadow: r };
}
const gd = { name: "Modal", common: q, peers: { Scrollbar: nt, Dialog: Ea, Card: Sa }, self: Vx }, _i = "n-draggable";
function qx(e, t) {
  let o;
  const r = B(() => e.value !== false), n = B(() => r.value ? _i : ""), i = B(() => {
    const s = e.value;
    return s === true || s === false ? true : s ? s.bounds !== "none" : true;
  });
  function a(s) {
    const d = s.querySelector(`.${_i}`);
    if (!d || !n.value) return;
    let c = 0, u = 0, p = 0, h = 0, f = 0, g = 0, v;
    function m(w) {
      w.preventDefault(), v = w;
      const { x: E, y: P, right: x, bottom: $ } = s.getBoundingClientRect();
      u = E, h = P, c = window.innerWidth - x, p = window.innerHeight - $;
      const { left: R, top: O } = s.style;
      f = +O.slice(0, -2), g = +R.slice(0, -2);
    }
    function C(w) {
      if (!v) return;
      const { clientX: E, clientY: P } = v;
      let x = w.clientX - E, $ = w.clientY - P;
      i.value && (x > c ? x = c : -x > u && (x = -u), $ > p ? $ = p : -$ > h && ($ = -h));
      const R = x + g, O = $ + f;
      s.style.top = `${O}px`, s.style.left = `${R}px`;
    }
    function S() {
      v = void 0, t.onEnd(s);
    }
    ke("mousedown", d, m), ke("mousemove", window, C), ke("mouseup", window, S), o = () => {
      Ee("mousedown", d, m), ke("mousemove", window, C), ke("mouseup", window, S);
    };
  }
  function l() {
    o && (o(), o = void 0);
  }
  return vs(l), { stopDrag: l, startDrag: a, draggableRef: r, draggableClassRef: n };
}
const Ta = Object.assign(Object.assign({}, $a), ka), Gx = Fr(Ta), Ux = J({ name: "ModalBody", inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, Ta), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(e) {
  const t = W(null), o = W(null), r = W(e.show), n = W(null), i = W(null), a = de(vc);
  let l = null;
  Te(be(e, "show"), ($) => {
    $ && (l = a.getMousePosition());
  }, { immediate: true });
  const { stopDrag: s, startDrag: d, draggableRef: c, draggableClassRef: u } = qx(be(e, "draggable"), { onEnd: ($) => {
    g($);
  } }), p = B(() => mi([e.titleClass, u.value])), h = B(() => mi([e.headerClass, u.value]));
  Te(be(e, "show"), ($) => {
    $ && (r.value = true);
  }), Cc(B(() => e.blockScroll && r.value));
  function f() {
    if (a.transformOriginRef.value === "center") return "";
    const { value: $ } = n, { value: R } = i;
    if ($ === null || R === null) return "";
    if (o.value) {
      const O = o.value.containerScrollTop;
      return `${$}px ${R + O}px`;
    }
    return "";
  }
  function g($) {
    if (a.transformOriginRef.value === "center" || !l || !o.value) return;
    const R = o.value.containerScrollTop, { offsetLeft: O, offsetTop: _ } = $, y = l.y, A = l.x;
    n.value = -(O - A), i.value = -(_ - y - R), $.style.transformOrigin = f();
  }
  function v($) {
    oo(() => {
      g($);
    });
  }
  function m($) {
    $.style.transformOrigin = f(), e.onBeforeLeave();
  }
  function C($) {
    const R = $;
    c.value && d(R), e.onAfterEnter && e.onAfterEnter(R);
  }
  function S() {
    r.value = false, n.value = null, i.value = null, s(), e.onAfterLeave();
  }
  function w() {
    const { onClose: $ } = e;
    $ && $();
  }
  function E() {
    e.onNegativeClick();
  }
  function P() {
    e.onPositiveClick();
  }
  const x = W(null);
  return Te(x, ($) => {
    $ && oo(() => {
      const R = $.el;
      R && t.value !== R && (t.value = R);
    });
  }), Se(jr, t), Se(Wr, null), Se(er, null), { mergedTheme: a.mergedThemeRef, appear: a.appearRef, isMounted: a.isMountedRef, mergedClsPrefix: a.mergedClsPrefixRef, bodyRef: t, scrollbarRef: o, draggableClass: u, displayed: r, childNodeRef: x, cardHeaderClass: h, dialogTitleClass: p, handlePositiveClick: P, handleNegativeClick: E, handleCloseClick: w, handleAfterEnter: C, handleAfterLeave: S, handleBeforeLeave: m, handleEnter: v };
}, render() {
  const { $slots: e, $attrs: t, handleEnter: o, handleAfterEnter: r, handleAfterLeave: n, handleBeforeLeave: i, preset: a, mergedClsPrefix: l } = this;
  let s = null;
  if (!a) {
    if (s = qm("default", e.default, { draggableClass: this.draggableClass }), !s) {
      ro("modal", "default slot is empty");
      return;
    }
    s = ws(s), s.props = Ht({ class: `${l}-modal` }, t, s.props || {});
  }
  return this.displayDirective === "show" || this.displayed || this.show ? Lt(b("div", { role: "none", class: [`${l}-modal-body-wrapper`, this.maskHidden && `${l}-modal-body-wrapper--mask-hidden`] }, b(Vr, { ref: "scrollbarRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${l}-modal-scroll-content` }, { default: () => {
    var d;
    return [(d = this.renderMask) === null || d === void 0 ? void 0 : d.call(this), b(ma, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => {
      var c;
      return b(Et, { name: "fade-in-scale-up-transition", appear: (c = this.appear) !== null && c !== void 0 ? c : this.isMounted, onEnter: o, onAfterEnter: r, onAfterLeave: n, onBeforeLeave: i }, { default: () => {
        const u = [[Rr, this.show]], { onClickoutside: p } = this;
        return p && u.push([wn, this.onClickoutside, void 0, { capture: true }]), Lt(this.preset === "confirm" || this.preset === "dialog" ? b(jx, Object.assign({}, this.$attrs, { class: [`${l}-modal`, this.$attrs.class], ref: "bodyRef", theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, Or(this.$props, _x), { titleClass: this.dialogTitleClass, "aria-modal": "true" }), e) : this.preset === "card" ? b(_0, Object.assign({}, this.$attrs, { ref: "bodyRef", class: [`${l}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, Or(this.$props, D0), { headerClass: this.cardHeaderClass, "aria-modal": "true", role: "dialog" }), e) : this.childNodeRef = s, u);
      } });
    } })];
  } })), [[Rr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
} }), Kx = I([V("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), V("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [xa({ enterDuration: ".25s", leaveDuration: ".25s", enterCubicBezier: "var(--n-bezier-ease-out)", leaveCubicBezier: "var(--n-bezier-ease-out)" })]), V("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [V("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `), H("mask-hidden", "pointer-events: none;", [V("modal-scroll-content", [I("> *", `
 pointer-events: all;
 `)])])]), V("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [Uc({ duration: ".25s", enterScale: ".5" }), I(`.${_i}`, `
 cursor: move;
 user-select: none;
 `)])]), Yx = Object.assign(Object.assign(Object.assign(Object.assign({}, me.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: "if" }, transformOrigin: { type: String, default: "mouse" }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), Ta), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } }), Xx = J({ name: "Modal", inheritAttrs: false, props: Yx, slots: Object, setup(e) {
  const t = W(null), { mergedClsPrefixRef: o, namespaceRef: r, inlineThemeDisabled: n } = rt(e), i = me("Modal", "-modal", Kx, gd, e, o), a = Gg(64), l = Vg(), s = Nr(), d = e.internalDialog ? de(Lx, null) : null, c = e.internalModal ? de(Zg, null) : null, u = xc();
  function p(P) {
    const { onUpdateShow: x, "onUpdate:show": $, onHide: R } = e;
    x && ge(x, P), $ && ge($, P), R && !P && R(P);
  }
  function h() {
    const { onClose: P } = e;
    P ? Promise.resolve(P()).then((x) => {
      x !== false && p(false);
    }) : p(false);
  }
  function f() {
    const { onPositiveClick: P } = e;
    P ? Promise.resolve(P()).then((x) => {
      x !== false && p(false);
    }) : p(false);
  }
  function g() {
    const { onNegativeClick: P } = e;
    P ? Promise.resolve(P()).then((x) => {
      x !== false && p(false);
    }) : p(false);
  }
  function v() {
    const { onBeforeLeave: P, onBeforeHide: x } = e;
    P && ge(P), x && x();
  }
  function m() {
    const { onAfterLeave: P, onAfterHide: x } = e;
    P && ge(P), x && x();
  }
  function C(P) {
    var x;
    const { onMaskClick: $ } = e;
    $ && $(P), e.maskClosable && !((x = t.value) === null || x === void 0) && x.contains(Ir(P)) && p(false);
  }
  function S(P) {
    var x;
    (x = e.onEsc) === null || x === void 0 || x.call(e), e.show && e.closeOnEsc && Dc(P) && (u.value || p(false));
  }
  Se(vc, { getMousePosition: () => {
    const P = d || c;
    if (P) {
      const { clickedRef: x, clickedPositionRef: $ } = P;
      if (x.value && $.value) return $.value;
    }
    return a.value ? l.value : null;
  }, mergedClsPrefixRef: o, mergedThemeRef: i, isMountedRef: s, appearRef: be(e, "internalAppear"), transformOriginRef: be(e, "transformOrigin") });
  const w = B(() => {
    const { common: { cubicBezierEaseOut: P }, self: { boxShadow: x, color: $, textColor: R } } = i.value;
    return { "--n-bezier-ease-out": P, "--n-box-shadow": x, "--n-color": $, "--n-text-color": R };
  }), E = n ? gt("theme-class", void 0, w, e) : void 0;
  return { mergedClsPrefix: o, namespace: r, isMounted: s, containerRef: t, presetProps: B(() => Or(e, Gx)), handleEsc: S, handleAfterLeave: m, handleClickoutside: C, handleBeforeLeave: v, doUpdateShow: p, handleNegativeClick: g, handlePositiveClick: f, handleCloseClick: h, cssVars: n ? void 0 : w, themeClass: E == null ? void 0 : E.themeClass, onRender: E == null ? void 0 : E.onRender };
}, render() {
  const { mergedClsPrefix: e } = this;
  return b(pa, { to: this.to, show: this.show }, { default: () => {
    var t;
    (t = this.onRender) === null || t === void 0 || t.call(this);
    const { showMask: o } = this;
    return Lt(b("div", { role: "none", ref: "containerRef", class: [`${e}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, b(Ux, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: "bodyWrapper", displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !o }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: o ? void 0 : this.handleClickoutside, renderMask: o ? () => {
      var r;
      return b(Et, { name: "fade-in-transition", key: "mask", appear: (r = this.internalAppear) !== null && r !== void 0 ? r : this.isMounted }, { default: () => this.show ? b("div", { "aria-hidden": true, ref: "containerRef", class: `${e}-modal-mask`, onClick: this.handleClickoutside }) : null });
    } : void 0 }), this.$slots)), [[An, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
function Zx(e) {
  const { primaryColor: t, errorColor: o } = e;
  return { colorError: o, colorLoading: t, height: "2px" };
}
const Jx = { name: "LoadingBar", common: q, self: Zx }, HS = "n-message-api", _S = "n-message-provider", Qx = { margin: "0 0 8px 0", padding: "10px 20px", maxWidth: "720px", minWidth: "420px", iconMargin: "0 10px 0 0", closeMargin: "0 0 0 10px", closeSize: "20px", closeIconSize: "16px", iconSize: "20px", fontSize: "14px" };
function eC(e) {
  const { textColor2: t, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, infoColor: i, successColor: a, errorColor: l, warningColor: s, popoverColor: d, boxShadow2: c, primaryColor: u, lineHeight: p, borderRadius: h, closeColorHover: f, closeColorPressed: g } = e;
  return Object.assign(Object.assign({}, Qx), { closeBorderRadius: h, textColor: t, textColorInfo: t, textColorSuccess: t, textColorError: t, textColorWarning: t, textColorLoading: t, color: d, colorInfo: d, colorSuccess: d, colorError: d, colorWarning: d, colorLoading: d, boxShadow: c, boxShadowInfo: c, boxShadowSuccess: c, boxShadowError: c, boxShadowWarning: c, boxShadowLoading: c, iconColor: t, iconColorInfo: i, iconColorSuccess: a, iconColorWarning: s, iconColorError: l, iconColorLoading: u, closeColorHover: f, closeColorPressed: g, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, closeColorHoverInfo: f, closeColorPressedInfo: g, closeIconColorInfo: o, closeIconColorHoverInfo: r, closeIconColorPressedInfo: n, closeColorHoverSuccess: f, closeColorPressedSuccess: g, closeIconColorSuccess: o, closeIconColorHoverSuccess: r, closeIconColorPressedSuccess: n, closeColorHoverError: f, closeColorPressedError: g, closeIconColorError: o, closeIconColorHoverError: r, closeIconColorPressedError: n, closeColorHoverWarning: f, closeColorPressedWarning: g, closeIconColorWarning: o, closeIconColorHoverWarning: r, closeIconColorPressedWarning: n, closeColorHoverLoading: f, closeColorPressedLoading: g, closeIconColorLoading: o, closeIconColorHoverLoading: r, closeIconColorPressedLoading: n, loadingColor: u, lineHeight: p, borderRadius: h, border: "0" });
}
const tC = { name: "Message", common: q, self: eC }, oC = { closeMargin: "16px 12px", closeSize: "20px", closeIconSize: "16px", width: "365px", padding: "16px", titleFontSize: "16px", metaFontSize: "12px", descriptionFontSize: "12px" };
function rC(e) {
  const { textColor2: t, successColor: o, infoColor: r, warningColor: n, errorColor: i, popoverColor: a, closeIconColor: l, closeIconColorHover: s, closeIconColorPressed: d, closeColorHover: c, closeColorPressed: u, textColor1: p, textColor3: h, borderRadius: f, fontWeightStrong: g, boxShadow2: v, lineHeight: m, fontSize: C } = e;
  return Object.assign(Object.assign({}, oC), { borderRadius: f, lineHeight: m, fontSize: C, headerFontWeight: g, iconColor: t, iconColorSuccess: o, iconColorInfo: r, iconColorWarning: n, iconColorError: i, color: a, textColor: t, closeIconColor: l, closeIconColorHover: s, closeIconColorPressed: d, closeBorderRadius: f, closeColorHover: c, closeColorPressed: u, headerTextColor: p, descriptionTextColor: h, actionTextColor: t, boxShadow: v });
}
const nC = { name: "Notification", common: q, peers: { Scrollbar: nt }, self: rC };
function iC(e) {
  const { textColor1: t, dividerColor: o, fontWeightStrong: r } = e;
  return { textColor: t, color: o, fontWeight: r };
}
const aC = { name: "Divider", common: q, self: iC };
function lC(e) {
  const { modalColor: t, textColor1: o, textColor2: r, boxShadow3: n, lineHeight: i, fontWeightStrong: a, dividerColor: l, closeColorHover: s, closeColorPressed: d, closeIconColor: c, closeIconColorHover: u, closeIconColorPressed: p, borderRadius: h, primaryColorHover: f } = e;
  return { bodyPadding: "16px 24px", borderRadius: h, headerPadding: "16px 24px", footerPadding: "16px 24px", color: t, textColor: r, titleTextColor: o, titleFontSize: "18px", titleFontWeight: a, boxShadow: n, lineHeight: i, headerBorderBottom: `1px solid ${l}`, footerBorderTop: `1px solid ${l}`, closeIconColor: c, closeIconColorHover: u, closeIconColorPressed: p, closeSize: "22px", closeIconSize: "18px", closeColorHover: s, closeColorPressed: d, closeBorderRadius: h, resizableTriggerColorHover: f };
}
const md = { name: "Drawer", common: q, peers: { Scrollbar: nt }, self: lC }, sC = J({ name: "NDrawerContent", inheritAttrs: false, props: { blockScroll: Boolean, show: { type: Boolean, default: void 0 }, displayDirective: { type: String, required: true }, placement: { type: String, required: true }, contentClass: String, contentStyle: [Object, String], nativeScrollbar: { type: Boolean, required: true }, scrollbarProps: Object, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, showMask: { type: [Boolean, String], required: true }, maxWidth: Number, maxHeight: Number, minWidth: Number, minHeight: Number, resizable: Boolean, onClickoutside: Function, onAfterLeave: Function, onAfterEnter: Function, onEsc: Function }, setup(e) {
  const t = W(!!e.show), o = W(null), r = de(fa);
  let n = 0, i = "", a = null;
  const l = W(false), s = W(false), d = B(() => e.placement === "top" || e.placement === "bottom"), { mergedClsPrefixRef: c, mergedRtlRef: u } = rt(e), p = zt("Drawer", u, c), h = P, f = (R) => {
    s.value = true, n = d.value ? R.clientY : R.clientX, i = document.body.style.cursor, document.body.style.cursor = d.value ? "ns-resize" : "ew-resize", document.body.addEventListener("mousemove", E), document.body.addEventListener("mouseleave", h), document.body.addEventListener("mouseup", P);
  }, g = () => {
    a !== null && (window.clearTimeout(a), a = null), s.value ? l.value = true : a = window.setTimeout(() => {
      l.value = true;
    }, 300);
  }, v = () => {
    a !== null && (window.clearTimeout(a), a = null), l.value = false;
  }, { doUpdateHeight: m, doUpdateWidth: C } = r, S = (R) => {
    const { maxWidth: O } = e;
    if (O && R > O) return O;
    const { minWidth: _ } = e;
    return _ && R < _ ? _ : R;
  }, w = (R) => {
    const { maxHeight: O } = e;
    if (O && R > O) return O;
    const { minHeight: _ } = e;
    return _ && R < _ ? _ : R;
  };
  function E(R) {
    var O, _;
    if (s.value) if (d.value) {
      let y = ((O = o.value) === null || O === void 0 ? void 0 : O.offsetHeight) || 0;
      const A = n - R.clientY;
      y += e.placement === "bottom" ? A : -A, y = w(y), m(y), n = R.clientY;
    } else {
      let y = ((_ = o.value) === null || _ === void 0 ? void 0 : _.offsetWidth) || 0;
      const A = n - R.clientX;
      y += e.placement === "right" ? A : -A, y = S(y), C(y), n = R.clientX;
    }
  }
  function P() {
    s.value && (n = 0, s.value = false, document.body.style.cursor = i, document.body.removeEventListener("mousemove", E), document.body.removeEventListener("mouseup", P), document.body.removeEventListener("mouseleave", h));
  }
  Dt(() => {
    e.show && (t.value = true);
  }), Te(() => e.show, (R) => {
    R || P();
  }), ot(() => {
    P();
  });
  const x = B(() => {
    const { show: R } = e, O = [[Rr, R]];
    return e.showMask || O.push([wn, e.onClickoutside, void 0, { capture: true }]), O;
  });
  function $() {
    var R;
    t.value = false, (R = e.onAfterLeave) === null || R === void 0 || R.call(e);
  }
  return Cc(B(() => e.blockScroll && t.value)), Se(Wr, o), Se(er, null), Se(jr, null), { bodyRef: o, rtlEnabled: p, mergedClsPrefix: r.mergedClsPrefixRef, isMounted: r.isMountedRef, mergedTheme: r.mergedThemeRef, displayed: t, transitionName: B(() => ({ right: "slide-in-from-right-transition", left: "slide-in-from-left-transition", top: "slide-in-from-top-transition", bottom: "slide-in-from-bottom-transition" })[e.placement]), handleAfterLeave: $, bodyDirectives: x, handleMousedownResizeTrigger: f, handleMouseenterResizeTrigger: g, handleMouseleaveResizeTrigger: v, isDragging: s, isHoverOnResizeTrigger: l };
}, render() {
  const { $slots: e, mergedClsPrefix: t } = this;
  return this.displayDirective === "show" || this.displayed || this.show ? Lt(b("div", { role: "none" }, b(ma, { disabled: !this.showMask || !this.trapFocus, active: this.show, autoFocus: this.autoFocus, onEsc: this.onEsc }, { default: () => b(Et, { name: this.transitionName, appear: this.isMounted, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave }, { default: () => Lt(b("div", Ht(this.$attrs, { role: "dialog", ref: "bodyRef", "aria-modal": "true", class: [`${t}-drawer`, this.rtlEnabled && `${t}-drawer--rtl`, `${t}-drawer--${this.placement}-placement`, this.isDragging && `${t}-drawer--unselectable`, this.nativeScrollbar && `${t}-drawer--native-scrollbar`] }), [this.resizable ? b("div", { class: [`${t}-drawer__resize-trigger`, (this.isDragging || this.isHoverOnResizeTrigger) && `${t}-drawer__resize-trigger--hover`], onMouseenter: this.handleMouseenterResizeTrigger, onMouseleave: this.handleMouseleaveResizeTrigger, onMousedown: this.handleMousedownResizeTrigger }) : null, this.nativeScrollbar ? b("div", { class: [`${t}-drawer-content-wrapper`, this.contentClass], style: this.contentStyle, role: "none" }, e) : b(Vr, Object.assign({}, this.scrollbarProps, { contentStyle: this.contentStyle, contentClass: [`${t}-drawer-content-wrapper`, this.contentClass], theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar }), e)]), this.bodyDirectives) }) })), [[Rr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
} }), { cubicBezierEaseIn: cC, cubicBezierEaseOut: dC } = Pt;
function uC({ duration: e = "0.3s", leaveDuration: t = "0.2s", name: o = "slide-in-from-bottom" } = {}) {
  return [I(`&.${o}-transition-leave-active`, { transition: `transform ${t} ${cC}` }), I(`&.${o}-transition-enter-active`, { transition: `transform ${e} ${dC}` }), I(`&.${o}-transition-enter-to`, { transform: "translateY(0)" }), I(`&.${o}-transition-enter-from`, { transform: "translateY(100%)" }), I(`&.${o}-transition-leave-from`, { transform: "translateY(0)" }), I(`&.${o}-transition-leave-to`, { transform: "translateY(100%)" })];
}
const { cubicBezierEaseIn: fC, cubicBezierEaseOut: hC } = Pt;
function pC({ duration: e = "0.3s", leaveDuration: t = "0.2s", name: o = "slide-in-from-left" } = {}) {
  return [I(`&.${o}-transition-leave-active`, { transition: `transform ${t} ${fC}` }), I(`&.${o}-transition-enter-active`, { transition: `transform ${e} ${hC}` }), I(`&.${o}-transition-enter-to`, { transform: "translateX(0)" }), I(`&.${o}-transition-enter-from`, { transform: "translateX(-100%)" }), I(`&.${o}-transition-leave-from`, { transform: "translateX(0)" }), I(`&.${o}-transition-leave-to`, { transform: "translateX(-100%)" })];
}
const { cubicBezierEaseIn: gC, cubicBezierEaseOut: mC } = Pt;
function vC({ duration: e = "0.3s", leaveDuration: t = "0.2s", name: o = "slide-in-from-right" } = {}) {
  return [I(`&.${o}-transition-leave-active`, { transition: `transform ${t} ${gC}` }), I(`&.${o}-transition-enter-active`, { transition: `transform ${e} ${mC}` }), I(`&.${o}-transition-enter-to`, { transform: "translateX(0)" }), I(`&.${o}-transition-enter-from`, { transform: "translateX(100%)" }), I(`&.${o}-transition-leave-from`, { transform: "translateX(0)" }), I(`&.${o}-transition-leave-to`, { transform: "translateX(100%)" })];
}
const { cubicBezierEaseIn: bC, cubicBezierEaseOut: xC } = Pt;
function CC({ duration: e = "0.3s", leaveDuration: t = "0.2s", name: o = "slide-in-from-top" } = {}) {
  return [I(`&.${o}-transition-leave-active`, { transition: `transform ${t} ${bC}` }), I(`&.${o}-transition-enter-active`, { transition: `transform ${e} ${xC}` }), I(`&.${o}-transition-enter-to`, { transform: "translateY(0)" }), I(`&.${o}-transition-enter-from`, { transform: "translateY(-100%)" }), I(`&.${o}-transition-leave-from`, { transform: "translateY(0)" }), I(`&.${o}-transition-leave-to`, { transform: "translateY(-100%)" })];
}
const yC = I([V("drawer", `
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
 `, [vC(), pC(), CC(), uC(), H("unselectable", `
 user-select: none; 
 -webkit-user-select: none;
 `), H("native-scrollbar", [V("drawer-content-wrapper", `
 overflow: auto;
 height: 100%;
 `)]), L("resize-trigger", `
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `, [H("hover", `
 background-color: var(--n-resize-trigger-color-hover);
 `)]), V("drawer-content-wrapper", `
 box-sizing: border-box;
 `), V("drawer-content", `
 height: 100%;
 display: flex;
 flex-direction: column;
 `, [H("native-scrollbar", [V("drawer-body-content-wrapper", `
 height: 100%;
 overflow: auto;
 `)]), V("drawer-body", `
 flex: 1 0 0;
 overflow: hidden;
 `), V("drawer-body-content-wrapper", `
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `), V("drawer-header", `
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
 `, [L("main", `
 flex: 1;
 `), L("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), V("drawer-footer", `
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]), H("right-placement", `
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `, [L("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]), H("left-placement", `
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [L("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]), H("top-placement", `
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [L("resize-trigger", `
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]), H("bottom-placement", `
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `, [L("resize-trigger", `
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]), I("body", [I(">", [V("drawer-container", `
 position: fixed;
 `)])]), V("drawer-container", `
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `, [I("> *", `
 pointer-events: all;
 `)]), V("drawer-mask", `
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [H("invisible", `
 background-color: rgba(0, 0, 0, 0)
 `), xa({ enterDuration: "0.2s", leaveDuration: "0.2s", enterCubicBezier: "var(--n-bezier-in)", leaveCubicBezier: "var(--n-bezier-out)" })])]), wC = Object.assign(Object.assign({}, me.props), { show: Boolean, width: [Number, String], height: [Number, String], placement: { type: String, default: "right" }, maskClosable: { type: Boolean, default: true }, showMask: { type: [Boolean, String], default: true }, to: [String, Object], displayDirective: { type: String, default: "if" }, nativeScrollbar: { type: Boolean, default: true }, zIndex: Number, onMaskClick: Function, scrollbarProps: Object, contentClass: String, contentStyle: [Object, String], trapFocus: { type: Boolean, default: true }, onEsc: Function, autoFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true }, maxWidth: Number, maxHeight: Number, minWidth: Number, minHeight: Number, resizable: Boolean, defaultWidth: { type: [Number, String], default: 251 }, defaultHeight: { type: [Number, String], default: 251 }, onUpdateWidth: [Function, Array], onUpdateHeight: [Function, Array], "onUpdate:width": [Function, Array], "onUpdate:height": [Function, Array], "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onAfterLeave: Function, drawerStyle: [String, Object], drawerClass: String, target: null, onShow: Function, onHide: Function }), SC = J({ name: "Drawer", inheritAttrs: false, props: wC, setup(e) {
  const { mergedClsPrefixRef: t, namespaceRef: o, inlineThemeDisabled: r } = rt(e), n = Nr(), i = me("Drawer", "-drawer", yC, md, e, t), a = W(e.defaultWidth), l = W(e.defaultHeight), s = Ar(be(e, "width"), a), d = Ar(be(e, "height"), l), c = B(() => {
    const { placement: P } = e;
    return P === "top" || P === "bottom" ? "" : to(s.value);
  }), u = B(() => {
    const { placement: P } = e;
    return P === "left" || P === "right" ? "" : to(d.value);
  }), p = (P) => {
    const { onUpdateWidth: x, "onUpdate:width": $ } = e;
    x && ge(x, P), $ && ge($, P), a.value = P;
  }, h = (P) => {
    const { onUpdateHeight: x, "onUpdate:width": $ } = e;
    x && ge(x, P), $ && ge($, P), l.value = P;
  }, f = B(() => [{ width: c.value, height: u.value }, e.drawerStyle || ""]);
  function g(P) {
    const { onMaskClick: x, maskClosable: $ } = e;
    $ && S(false), x && x(P);
  }
  function v(P) {
    g(P);
  }
  const m = xc();
  function C(P) {
    var x;
    (x = e.onEsc) === null || x === void 0 || x.call(e), e.show && e.closeOnEsc && Dc(P) && (m.value || S(false));
  }
  function S(P) {
    const { onHide: x, onUpdateShow: $, "onUpdate:show": R } = e;
    $ && ge($, P), R && ge(R, P), x && !P && ge(x, P);
  }
  Se(fa, { isMountedRef: n, mergedThemeRef: i, mergedClsPrefixRef: t, doUpdateShow: S, doUpdateHeight: h, doUpdateWidth: p });
  const w = B(() => {
    const { common: { cubicBezierEaseInOut: P, cubicBezierEaseIn: x, cubicBezierEaseOut: $ }, self: { color: R, textColor: O, boxShadow: _, lineHeight: y, headerPadding: A, footerPadding: T, borderRadius: z, bodyPadding: j, titleFontSize: F, titleTextColor: U, titleFontWeight: ne, headerBorderBottom: se, footerBorderTop: he, closeIconColor: ue, closeIconColorHover: we, closeIconColorPressed: Ce, closeColorHover: Be, closeColorPressed: re, closeIconSize: M, closeSize: K, closeBorderRadius: D, resizableTriggerColorHover: Q } } = i.value;
    return { "--n-line-height": y, "--n-color": R, "--n-border-radius": z, "--n-text-color": O, "--n-box-shadow": _, "--n-bezier": P, "--n-bezier-out": $, "--n-bezier-in": x, "--n-header-padding": A, "--n-body-padding": j, "--n-footer-padding": T, "--n-title-text-color": U, "--n-title-font-size": F, "--n-title-font-weight": ne, "--n-header-border-bottom": se, "--n-footer-border-top": he, "--n-close-icon-color": ue, "--n-close-icon-color-hover": we, "--n-close-icon-color-pressed": Ce, "--n-close-size": K, "--n-close-color-hover": Be, "--n-close-color-pressed": re, "--n-close-icon-size": M, "--n-close-border-radius": D, "--n-resize-trigger-color-hover": Q };
  }), E = r ? gt("drawer", void 0, w, e) : void 0;
  return { mergedClsPrefix: t, namespace: o, mergedBodyStyle: f, handleOutsideClick: v, handleMaskClick: g, handleEsc: C, mergedTheme: i, cssVars: r ? void 0 : w, themeClass: E == null ? void 0 : E.themeClass, onRender: E == null ? void 0 : E.onRender, isMounted: n };
}, render() {
  const { mergedClsPrefix: e } = this;
  return b(pa, { to: this.to, show: this.show }, { default: () => {
    var t;
    return (t = this.onRender) === null || t === void 0 || t.call(this), Lt(b("div", { class: [`${e}-drawer-container`, this.namespace, this.themeClass], style: this.cssVars, role: "none" }, this.showMask ? b(Et, { name: "fade-in-transition", appear: this.isMounted }, { default: () => this.show ? b("div", { "aria-hidden": true, class: [`${e}-drawer-mask`, this.showMask === "transparent" && `${e}-drawer-mask--invisible`], onClick: this.handleMaskClick }) : null }) : null, b(sC, Object.assign({}, this.$attrs, { class: [this.drawerClass, this.$attrs.class], style: [this.mergedBodyStyle, this.$attrs.style], blockScroll: this.blockScroll, contentStyle: this.contentStyle, contentClass: this.contentClass, placement: this.placement, scrollbarProps: this.scrollbarProps, show: this.show, displayDirective: this.displayDirective, nativeScrollbar: this.nativeScrollbar, onAfterEnter: this.onAfterEnter, onAfterLeave: this.onAfterLeave, trapFocus: this.trapFocus, autoFocus: this.autoFocus, resizable: this.resizable, maxHeight: this.maxHeight, minHeight: this.minHeight, maxWidth: this.maxWidth, minWidth: this.minWidth, showMask: this.showMask, onEsc: this.handleEsc, onClickoutside: this.handleOutsideClick }), this.$slots)), [[An, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} }), $C = { title: String, headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], bodyClass: String, bodyStyle: [Object, String], bodyContentClass: String, bodyContentStyle: [Object, String], nativeScrollbar: { type: Boolean, default: true }, scrollbarProps: Object, closable: Boolean }, PC = J({ name: "DrawerContent", props: $C, slots: Object, setup() {
  const e = de(fa, null);
  e || va("drawer-content", "`n-drawer-content` must be placed inside `n-drawer`.");
  const { doUpdateShow: t } = e;
  function o() {
    t(false);
  }
  return { handleCloseClick: o, mergedTheme: e.mergedThemeRef, mergedClsPrefix: e.mergedClsPrefixRef };
}, render() {
  const { title: e, mergedClsPrefix: t, nativeScrollbar: o, mergedTheme: r, bodyClass: n, bodyStyle: i, bodyContentClass: a, bodyContentStyle: l, headerClass: s, headerStyle: d, footerClass: c, footerStyle: u, scrollbarProps: p, closable: h, $slots: f } = this;
  return b("div", { role: "none", class: [`${t}-drawer-content`, o && `${t}-drawer-content--native-scrollbar`] }, f.header || e || h ? b("div", { class: [`${t}-drawer-header`, s], style: d, role: "none" }, b("div", { class: `${t}-drawer-header__main`, role: "heading", "aria-level": "1" }, f.header !== void 0 ? f.header() : e), h && b(Mn, { onClick: this.handleCloseClick, clsPrefix: t, class: `${t}-drawer-header__close`, absolute: true })) : null, o ? b("div", { class: [`${t}-drawer-body`, n], style: i, role: "none" }, b("div", { class: [`${t}-drawer-body-content-wrapper`, a], style: l, role: "none" }, f)) : b(Vr, Object.assign({ themeOverrides: r.peerOverrides.Scrollbar, theme: r.peers.Scrollbar }, p, { class: `${t}-drawer-body`, contentClass: [`${t}-drawer-body-content-wrapper`, a], contentStyle: l }), f), f.footer ? b("div", { class: [`${t}-drawer-footer`, c], style: u, role: "none" }, f.footer()) : null);
} }), RC = { actionMargin: "0 0 0 20px", actionMarginRtl: "0 20px 0 0" };
function EC() {
  return RC;
}
const kC = { name: "DynamicInput", common: q, peers: { Input: mt, Button: ut }, self: EC }, TC = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function zC() {
  return TC;
}
const za = { name: "Space", self: zC };
let di;
function IC() {
  if (!tr) return true;
  if (di === void 0) {
    const e = document.createElement("div");
    e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e);
    const t = e.scrollHeight === 1;
    return document.body.removeChild(e), di = t;
  }
  return di;
}
const AC = Object.assign(Object.assign({}, me.props), { align: String, justify: { type: String, default: "start" }, inline: Boolean, vertical: Boolean, reverse: Boolean, size: { type: [String, Number, Array], default: "medium" }, wrapItem: { type: Boolean, default: true }, itemClass: String, itemStyle: [String, Object], wrap: { type: Boolean, default: true }, internalUseGap: { type: Boolean, default: void 0 } }), MC = J({ name: "Space", props: AC, setup(e) {
  const { mergedClsPrefixRef: t, mergedRtlRef: o } = rt(e), r = me("Space", "-space", void 0, za, e, t), n = zt("Space", o, t);
  return { useGap: IC(), rtlEnabled: n, mergedClsPrefix: t, margin: B(() => {
    const { size: i } = e;
    if (Array.isArray(i)) return { horizontal: i[0], vertical: i[1] };
    if (typeof i == "number") return { horizontal: i, vertical: i };
    const { self: { [Y("gap", i)]: a } } = r.value, { row: l, col: s } = Rg(a);
    return { horizontal: yn(s), vertical: yn(l) };
  }) };
}, render() {
  const { vertical: e, reverse: t, align: o, inline: r, justify: n, itemClass: i, itemStyle: a, margin: l, wrap: s, mergedClsPrefix: d, rtlEnabled: c, useGap: u, wrapItem: p, internalUseGap: h } = this, f = Br(Gm(this), false);
  if (!f.length) return null;
  const g = `${l.horizontal}px`, v = `${l.horizontal / 2}px`, m = `${l.vertical}px`, C = `${l.vertical / 2}px`, S = f.length - 1, w = n.startsWith("space-");
  return b("div", { role: "none", class: [`${d}-space`, c && `${d}-space--rtl`], style: { display: r ? "inline-flex" : "flex", flexDirection: e && !t ? "column" : e && t ? "column-reverse" : !e && t ? "row-reverse" : "row", justifyContent: ["start", "end"].includes(n) ? `flex-${n}` : n, flexWrap: !s || e ? "nowrap" : "wrap", marginTop: u || e ? "" : `-${C}`, marginBottom: u || e ? "" : `-${C}`, alignItems: o, gap: u ? `${l.vertical}px ${l.horizontal}px` : "" } }, !p && (u || h) ? f : f.map((E, P) => E.type === kn ? E : b("div", { role: "none", class: i, style: [a, { maxWidth: "100%" }, u ? "" : e ? { marginBottom: P !== S ? m : "" } : c ? { marginLeft: w ? n === "space-between" && P === S ? "" : v : P !== S ? g : "", marginRight: w ? n === "space-between" && P === 0 ? "" : v : "", paddingTop: C, paddingBottom: C } : { marginRight: w ? n === "space-between" && P === S ? "" : v : P !== S ? g : "", marginLeft: w ? n === "space-between" && P === 0 ? "" : v : "", paddingTop: C, paddingBottom: C }] }, E)));
} }), BC = { name: "DynamicTags", common: q, peers: { Input: mt, Button: ut, Tag: ya, Space: za }, self() {
  return { inputWidth: "64px" };
} }, OC = { name: "Element", common: q }, FC = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function LC() {
  return FC;
}
const DC = { name: "Flex", self: LC }, HC = { name: "ButtonGroup", common: q }, _C = { feedbackPadding: "4px 0 0 2px", feedbackHeightSmall: "24px", feedbackHeightMedium: "24px", feedbackHeightLarge: "26px", feedbackFontSizeSmall: "13px", feedbackFontSizeMedium: "14px", feedbackFontSizeLarge: "14px", labelFontSizeLeftSmall: "14px", labelFontSizeLeftMedium: "14px", labelFontSizeLeftLarge: "15px", labelFontSizeTopSmall: "13px", labelFontSizeTopMedium: "14px", labelFontSizeTopLarge: "14px", labelHeightSmall: "24px", labelHeightMedium: "26px", labelHeightLarge: "28px", labelPaddingVertical: "0 0 6px 2px", labelPaddingHorizontal: "0 12px 0 0", labelTextAlignVertical: "left", labelTextAlignHorizontal: "right", labelFontWeight: "400" };
function NC(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, textColor1: n, errorColor: i, warningColor: a, lineHeight: l, textColor3: s } = e;
  return Object.assign(Object.assign({}, _C), { blankHeightSmall: t, blankHeightMedium: o, blankHeightLarge: r, lineHeight: l, labelTextColor: n, asteriskColor: i, feedbackTextColorError: i, feedbackTextColorWarning: a, feedbackTextColor: s });
}
const Ia = { name: "Form", common: q, self: NC };
function WC(e) {
  const { primaryColor: t, successColor: o, warningColor: r, errorColor: n, infoColor: i, fontWeightStrong: a } = e;
  return { fontWeight: a, rotate: "252deg", colorStartPrimary: ee(t, { alpha: 0.6 }), colorEndPrimary: t, colorStartInfo: ee(i, { alpha: 0.6 }), colorEndInfo: i, colorStartWarning: ee(r, { alpha: 0.6 }), colorEndWarning: r, colorStartError: ee(n, { alpha: 0.6 }), colorEndError: n, colorStartSuccess: ee(o, { alpha: 0.6 }), colorEndSuccess: o };
}
const jC = { name: "GradientText", common: q, self: WC };
function VC(e) {
  const { textColorDisabled: t } = e;
  return { iconColorDisabled: t };
}
const qC = { name: "InputNumber", common: q, peers: { Button: ut, Input: mt }, self: VC };
function GC() {
  return { inputWidthSmall: "24px", inputWidthMedium: "30px", inputWidthLarge: "36px", gapSmall: "8px", gapMedium: "8px", gapLarge: "8px" };
}
const UC = { name: "InputOtp", common: q, peers: { Input: mt }, self: GC };
function KC(e) {
  const { baseColor: t, textColor2: o, bodyColor: r, cardColor: n, dividerColor: i, actionColor: a, scrollbarColor: l, scrollbarColorHover: s, invertedColor: d } = e;
  return { textColor: o, textColorInverted: "#FFF", color: r, colorEmbedded: a, headerColor: n, headerColorInverted: d, footerColor: a, footerColorInverted: d, headerBorderColor: i, headerBorderColorInverted: d, footerBorderColor: i, footerBorderColorInverted: d, siderBorderColor: i, siderBorderColorInverted: d, siderColor: n, siderColorInverted: d, siderToggleButtonBorder: `1px solid ${i}`, siderToggleButtonColor: t, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: X(r, l), siderToggleBarColorHover: X(r, s), __invertScrollbar: "true" };
}
const YC = { name: "Layout", common: q, peers: { Scrollbar: nt }, self: KC }, XC = { name: "Row", common: q };
function ZC(e) {
  const { textColor2: t, cardColor: o, modalColor: r, popoverColor: n, dividerColor: i, borderRadius: a, fontSize: l, hoverColor: s } = e;
  return { textColor: t, color: o, colorHover: s, colorModal: r, colorHoverModal: X(r, s), colorPopover: n, colorHoverPopover: X(n, s), borderColor: i, borderColorModal: X(r, i), borderColorPopover: X(n, i), borderRadius: a, fontSize: l };
}
const vd = { name: "List", common: q, self: ZC };
function JC(e) {
  const { textColor2: t, modalColor: o, borderColor: r, fontSize: n, primaryColor: i } = e;
  return { loaderFontSize: n, loaderTextColor: t, loaderColor: o, loaderBorder: `1px solid ${r}`, loadingColor: i };
}
const QC = { name: "Log", common: q, peers: { Scrollbar: nt, Code: od }, self: JC };
function ey(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const ty = { name: "Mention", common: q, peers: { InternalSelectMenu: qr, Input: mt }, self: ey };
function oy(e, t, o, r) {
  return { itemColorHoverInverted: "#0000", itemColorActiveInverted: t, itemColorActiveHoverInverted: t, itemColorActiveCollapsedInverted: t, itemTextColorInverted: e, itemTextColorHoverInverted: o, itemTextColorChildActiveInverted: o, itemTextColorChildActiveHoverInverted: o, itemTextColorActiveInverted: o, itemTextColorActiveHoverInverted: o, itemTextColorHorizontalInverted: e, itemTextColorHoverHorizontalInverted: o, itemTextColorChildActiveHorizontalInverted: o, itemTextColorChildActiveHoverHorizontalInverted: o, itemTextColorActiveHorizontalInverted: o, itemTextColorActiveHoverHorizontalInverted: o, itemIconColorInverted: e, itemIconColorHoverInverted: o, itemIconColorActiveInverted: o, itemIconColorActiveHoverInverted: o, itemIconColorChildActiveInverted: o, itemIconColorChildActiveHoverInverted: o, itemIconColorCollapsedInverted: e, itemIconColorHorizontalInverted: e, itemIconColorHoverHorizontalInverted: o, itemIconColorActiveHorizontalInverted: o, itemIconColorActiveHoverHorizontalInverted: o, itemIconColorChildActiveHorizontalInverted: o, itemIconColorChildActiveHoverHorizontalInverted: o, arrowColorInverted: e, arrowColorHoverInverted: o, arrowColorActiveInverted: o, arrowColorActiveHoverInverted: o, arrowColorChildActiveInverted: o, arrowColorChildActiveHoverInverted: o, groupTextColorInverted: r };
}
function ry(e) {
  const { borderRadius: t, textColor3: o, primaryColor: r, textColor2: n, textColor1: i, fontSize: a, dividerColor: l, hoverColor: s, primaryColorHover: d } = e;
  return Object.assign({ borderRadius: t, color: "#0000", groupTextColor: o, itemColorHover: s, itemColorActive: ee(r, { alpha: 0.1 }), itemColorActiveHover: ee(r, { alpha: 0.1 }), itemColorActiveCollapsed: ee(r, { alpha: 0.1 }), itemTextColor: n, itemTextColorHover: n, itemTextColorActive: r, itemTextColorActiveHover: r, itemTextColorChildActive: r, itemTextColorChildActiveHover: r, itemTextColorHorizontal: n, itemTextColorHoverHorizontal: d, itemTextColorActiveHorizontal: r, itemTextColorActiveHoverHorizontal: r, itemTextColorChildActiveHorizontal: r, itemTextColorChildActiveHoverHorizontal: r, itemIconColor: i, itemIconColorHover: i, itemIconColorActive: r, itemIconColorActiveHover: r, itemIconColorChildActive: r, itemIconColorChildActiveHover: r, itemIconColorCollapsed: i, itemIconColorHorizontal: i, itemIconColorHoverHorizontal: d, itemIconColorActiveHorizontal: r, itemIconColorActiveHoverHorizontal: r, itemIconColorChildActiveHorizontal: r, itemIconColorChildActiveHoverHorizontal: r, itemHeight: "42px", arrowColor: n, arrowColorHover: n, arrowColorActive: r, arrowColorActiveHover: r, arrowColorChildActive: r, arrowColorChildActiveHover: r, colorInverted: "#0000", borderColorHorizontal: "#0000", fontSize: a, dividerColor: l }, oy("#BBB", r, "#FFF", "#AAA"));
}
const ny = { name: "Menu", common: q, peers: { Tooltip: Gr, Dropdown: On }, self: ry }, iy = { titleFontSize: "18px", backSize: "22px" };
function ay(e) {
  const { textColor1: t, textColor2: o, textColor3: r, fontSize: n, fontWeightStrong: i, primaryColorHover: a, primaryColorPressed: l } = e;
  return Object.assign(Object.assign({}, iy), { titleFontWeight: i, fontSize: n, titleTextColor: t, backColor: o, backColorHover: a, backColorPressed: l, subtitleTextColor: r });
}
const ly = { name: "PageHeader", common: q, self: ay }, sy = { iconSize: "22px" };
function cy(e) {
  const { fontSize: t, warningColor: o } = e;
  return Object.assign(Object.assign({}, sy), { fontSize: t, iconColor: o });
}
const dy = { name: "Popconfirm", common: q, peers: { Button: ut, Popover: xo }, self: cy };
function uy(e) {
  const { infoColor: t, successColor: o, warningColor: r, errorColor: n, textColor2: i, progressRailColor: a, fontSize: l, fontWeight: s } = e;
  return { fontSize: l, fontSizeCircle: "28px", fontWeightCircle: s, railColor: a, railHeight: "8px", iconSizeCircle: "36px", iconSizeLine: "18px", iconColor: t, iconColorInfo: t, iconColorSuccess: o, iconColorWarning: r, iconColorError: n, textColorCircle: i, textColorLineInner: "rgb(255, 255, 255)", textColorLineOuter: i, fillColor: t, fillColorInfo: t, fillColorSuccess: o, fillColorWarning: r, fillColorError: n, lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)" };
}
const bd = { name: "Progress", common: q, self: uy };
function fy(e) {
  const { railColor: t } = e;
  return { itemColor: t, itemColorActive: "#FFCC33", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
}
const hy = { name: "Rate", common: q, self: fy }, py = { titleFontSizeSmall: "26px", titleFontSizeMedium: "32px", titleFontSizeLarge: "40px", titleFontSizeHuge: "48px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", iconSizeSmall: "64px", iconSizeMedium: "80px", iconSizeLarge: "100px", iconSizeHuge: "125px", iconColor418: void 0, iconColor404: void 0, iconColor403: void 0, iconColor500: void 0 };
function gy(e) {
  const { textColor2: t, textColor1: o, errorColor: r, successColor: n, infoColor: i, warningColor: a, lineHeight: l, fontWeightStrong: s } = e;
  return Object.assign(Object.assign({}, py), { lineHeight: l, titleFontWeight: s, titleTextColor: o, textColor: t, iconColorError: r, iconColorSuccess: n, iconColorInfo: i, iconColorWarning: a });
}
const my = { name: "Result", common: q, self: gy }, vy = { railHeight: "4px", railWidthVertical: "4px", handleSize: "18px", dotHeight: "8px", dotWidth: "8px", dotBorderRadius: "4px" };
function by(e) {
  const t = "rgba(0, 0, 0, .85)", o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: r, primaryColor: n, baseColor: i, cardColor: a, modalColor: l, popoverColor: s, borderRadius: d, fontSize: c, opacityDisabled: u } = e;
  return Object.assign(Object.assign({}, vy), { fontSize: c, markFontSize: c, railColor: r, railColorHover: r, fillColor: n, fillColorHover: n, opacityDisabled: u, handleColor: "#FFF", dotColor: a, dotColorModal: l, dotColorPopover: s, handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", indicatorColor: t, indicatorBoxShadow: o, indicatorTextColor: i, indicatorBorderRadius: d, dotBorder: `2px solid ${r}`, dotBorderActive: `2px solid ${n}`, dotBoxShadow: "" });
}
const xy = { name: "Slider", common: q, self: by };
function Cy(e) {
  const { opacityDisabled: t, heightTiny: o, heightSmall: r, heightMedium: n, heightLarge: i, heightHuge: a, primaryColor: l, fontSize: s } = e;
  return { fontSize: s, textColor: l, sizeTiny: o, sizeSmall: r, sizeMedium: n, sizeLarge: i, sizeHuge: a, color: l, opacitySpinning: t };
}
const yy = { name: "Spin", common: q, self: Cy };
function wy(e) {
  const { textColor2: t, textColor3: o, fontSize: r, fontWeight: n } = e;
  return { labelFontSize: r, labelFontWeight: n, valueFontWeight: n, valueFontSize: "24px", labelTextColor: o, valuePrefixTextColor: t, valueSuffixTextColor: t, valueTextColor: t };
}
const Sy = { name: "Statistic", common: q, self: wy }, $y = { stepHeaderFontSizeSmall: "14px", stepHeaderFontSizeMedium: "16px", indicatorIndexFontSizeSmall: "14px", indicatorIndexFontSizeMedium: "16px", indicatorSizeSmall: "22px", indicatorSizeMedium: "28px", indicatorIconSizeSmall: "14px", indicatorIconSizeMedium: "18px" };
function Py(e) {
  const { fontWeightStrong: t, baseColor: o, textColorDisabled: r, primaryColor: n, errorColor: i, textColor1: a, textColor2: l } = e;
  return Object.assign(Object.assign({}, $y), { stepHeaderFontWeight: t, indicatorTextColorProcess: o, indicatorTextColorWait: r, indicatorTextColorFinish: n, indicatorTextColorError: i, indicatorBorderColorProcess: n, indicatorBorderColorWait: r, indicatorBorderColorFinish: n, indicatorBorderColorError: i, indicatorColorProcess: n, indicatorColorWait: "#0000", indicatorColorFinish: "#0000", indicatorColorError: "#0000", splitorColorProcess: r, splitorColorWait: r, splitorColorFinish: n, splitorColorError: r, headerTextColorProcess: a, headerTextColorWait: r, headerTextColorFinish: r, headerTextColorError: i, descriptionTextColorProcess: l, descriptionTextColorWait: r, descriptionTextColorFinish: r, descriptionTextColorError: i });
}
const Ry = { name: "Steps", common: q, self: Py }, Ey = { buttonHeightSmall: "14px", buttonHeightMedium: "18px", buttonHeightLarge: "22px", buttonWidthSmall: "14px", buttonWidthMedium: "18px", buttonWidthLarge: "22px", buttonWidthPressedSmall: "20px", buttonWidthPressedMedium: "24px", buttonWidthPressedLarge: "28px", railHeightSmall: "18px", railHeightMedium: "22px", railHeightLarge: "26px", railWidthSmall: "32px", railWidthMedium: "40px", railWidthLarge: "48px" };
function ky(e) {
  const { primaryColor: t, opacityDisabled: o, borderRadius: r, textColor3: n } = e;
  return Object.assign(Object.assign({}, Ey), { iconColor: n, textColor: "white", loadingColor: t, opacityDisabled: o, railColor: "rgba(0, 0, 0, .14)", railColorActive: t, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 0 2px ${ee(t, { alpha: 0.2 })}` });
}
const Ty = { name: "Switch", common: q, self: ky }, zy = { thPaddingSmall: "6px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "6px", tdPaddingMedium: "12px", tdPaddingLarge: "12px" };
function Iy(e) {
  const { dividerColor: t, cardColor: o, modalColor: r, popoverColor: n, tableHeaderColor: i, tableColorStriped: a, textColor1: l, textColor2: s, borderRadius: d, fontWeightStrong: c, lineHeight: u, fontSizeSmall: p, fontSizeMedium: h, fontSizeLarge: f } = e;
  return Object.assign(Object.assign({}, zy), { fontSizeSmall: p, fontSizeMedium: h, fontSizeLarge: f, lineHeight: u, borderRadius: d, borderColor: X(o, t), borderColorModal: X(r, t), borderColorPopover: X(n, t), tdColor: o, tdColorModal: r, tdColorPopover: n, tdColorStriped: X(o, a), tdColorStripedModal: X(r, a), tdColorStripedPopover: X(n, a), thColor: X(o, i), thColorModal: X(r, i), thColorPopover: X(n, i), thTextColor: l, tdTextColor: s, thFontWeight: c });
}
const Ay = { name: "Table", common: q, self: Iy }, My = { tabFontSizeSmall: "14px", tabFontSizeMedium: "14px", tabFontSizeLarge: "16px", tabGapSmallLine: "36px", tabGapMediumLine: "36px", tabGapLargeLine: "36px", tabGapSmallLineVertical: "8px", tabGapMediumLineVertical: "8px", tabGapLargeLineVertical: "8px", tabPaddingSmallLine: "6px 0", tabPaddingMediumLine: "10px 0", tabPaddingLargeLine: "14px 0", tabPaddingVerticalSmallLine: "6px 12px", tabPaddingVerticalMediumLine: "8px 16px", tabPaddingVerticalLargeLine: "10px 20px", tabGapSmallBar: "36px", tabGapMediumBar: "36px", tabGapLargeBar: "36px", tabGapSmallBarVertical: "8px", tabGapMediumBarVertical: "8px", tabGapLargeBarVertical: "8px", tabPaddingSmallBar: "4px 0", tabPaddingMediumBar: "6px 0", tabPaddingLargeBar: "10px 0", tabPaddingVerticalSmallBar: "6px 12px", tabPaddingVerticalMediumBar: "8px 16px", tabPaddingVerticalLargeBar: "10px 20px", tabGapSmallCard: "4px", tabGapMediumCard: "4px", tabGapLargeCard: "4px", tabGapSmallCardVertical: "4px", tabGapMediumCardVertical: "4px", tabGapLargeCardVertical: "4px", tabPaddingSmallCard: "8px 16px", tabPaddingMediumCard: "10px 20px", tabPaddingLargeCard: "12px 24px", tabPaddingSmallSegment: "4px 0", tabPaddingMediumSegment: "6px 0", tabPaddingLargeSegment: "8px 0", tabPaddingVerticalLargeSegment: "0 8px", tabPaddingVerticalSmallCard: "8px 12px", tabPaddingVerticalMediumCard: "10px 16px", tabPaddingVerticalLargeCard: "12px 20px", tabPaddingVerticalSmallSegment: "0 4px", tabPaddingVerticalMediumSegment: "0 6px", tabGapSmallSegment: "0", tabGapMediumSegment: "0", tabGapLargeSegment: "0", tabGapSmallSegmentVertical: "0", tabGapMediumSegmentVertical: "0", tabGapLargeSegmentVertical: "0", panePaddingSmall: "8px 0 0 0", panePaddingMedium: "12px 0 0 0", panePaddingLarge: "16px 0 0 0", closeSize: "18px", closeIconSize: "14px" };
function By(e) {
  const { textColor2: t, primaryColor: o, textColorDisabled: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, tabColor: d, baseColor: c, dividerColor: u, fontWeight: p, textColor1: h, borderRadius: f, fontSize: g, fontWeightStrong: v } = e;
  return Object.assign(Object.assign({}, My), { colorSegment: d, tabFontSizeCard: g, tabTextColorLine: h, tabTextColorActiveLine: o, tabTextColorHoverLine: o, tabTextColorDisabledLine: r, tabTextColorSegment: h, tabTextColorActiveSegment: t, tabTextColorHoverSegment: t, tabTextColorDisabledSegment: r, tabTextColorBar: h, tabTextColorActiveBar: o, tabTextColorHoverBar: o, tabTextColorDisabledBar: r, tabTextColorCard: h, tabTextColorHoverCard: h, tabTextColorActiveCard: o, tabTextColorDisabledCard: r, barColor: o, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, closeBorderRadius: f, tabColor: d, tabColorSegment: c, tabBorderColor: u, tabFontWeightActive: p, tabFontWeight: p, tabBorderRadius: f, paneTextColor: t, fontWeightStrong: v });
}
const Oy = { name: "Tabs", common: q, self: By };
function Fy(e) {
  const { textColor1: t, textColor2: o, fontWeightStrong: r, fontSize: n } = e;
  return { fontSize: n, titleTextColor: t, textColor: o, titleFontWeight: r };
}
const Ly = { name: "Thing", common: q, self: Fy }, Dy = { titleMarginMedium: "0 0 6px 0", titleMarginLarge: "-2px 0 6px 0", titleFontSizeMedium: "14px", titleFontSizeLarge: "16px", iconSizeMedium: "14px", iconSizeLarge: "14px" };
function Hy(e) {
  const { textColor3: t, infoColor: o, errorColor: r, successColor: n, warningColor: i, textColor1: a, textColor2: l, railColor: s, fontWeightStrong: d, fontSize: c } = e;
  return Object.assign(Object.assign({}, Dy), { contentFontSize: c, titleFontWeight: d, circleBorder: `2px solid ${t}`, circleBorderInfo: `2px solid ${o}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${n}`, circleBorderWarning: `2px solid ${i}`, iconColor: t, iconColorInfo: o, iconColorError: r, iconColorSuccess: n, iconColorWarning: i, titleTextColor: a, contentTextColor: l, metaTextColor: t, lineColor: s });
}
const _y = { name: "Timeline", common: q, self: Hy }, Ny = { extraFontSizeSmall: "12px", extraFontSizeMedium: "12px", extraFontSizeLarge: "14px", titleFontSizeSmall: "14px", titleFontSizeMedium: "16px", titleFontSizeLarge: "16px", closeSize: "20px", closeIconSize: "16px", headerHeightSmall: "44px", headerHeightMedium: "44px", headerHeightLarge: "50px" };
function Wy(e) {
  const { fontWeight: t, fontSizeLarge: o, fontSizeMedium: r, fontSizeSmall: n, heightLarge: i, heightMedium: a, borderRadius: l, cardColor: s, tableHeaderColor: d, textColor1: c, textColorDisabled: u, textColor2: p, textColor3: h, borderColor: f, hoverColor: g, closeColorHover: v, closeColorPressed: m, closeIconColor: C, closeIconColorHover: S, closeIconColorPressed: w } = e;
  return Object.assign(Object.assign({}, Ny), { itemHeightSmall: a, itemHeightMedium: a, itemHeightLarge: i, fontSizeSmall: n, fontSizeMedium: r, fontSizeLarge: o, borderRadius: l, dividerColor: f, borderColor: f, listColor: s, headerColor: X(s, d), titleTextColor: c, titleTextColorDisabled: u, extraTextColor: h, extraTextColorDisabled: u, itemTextColor: p, itemTextColorDisabled: u, itemColorPending: g, titleFontWeight: t, closeColorHover: v, closeColorPressed: m, closeIconColor: C, closeIconColorHover: S, closeIconColorPressed: w });
}
const jy = { name: "Transfer", common: q, peers: { Checkbox: nr, Scrollbar: nt, Input: mt, Empty: bo, Button: ut }, self: Wy };
function Vy(e) {
  const { borderRadiusSmall: t, dividerColor: o, hoverColor: r, pressedColor: n, primaryColor: i, textColor3: a, textColor2: l, textColorDisabled: s, fontSize: d } = e;
  return { fontSize: d, lineHeight: "1.5", nodeHeight: "30px", nodeWrapperPadding: "3px 0", nodeBorderRadius: t, nodeColorHover: r, nodeColorPressed: n, nodeColorActive: ee(i, { alpha: 0.1 }), arrowColor: a, nodeTextColor: l, nodeTextColorDisabled: s, loadingColor: i, dropMarkColor: i, lineColor: o };
}
const xd = { name: "Tree", common: q, peers: { Checkbox: nr, Scrollbar: nt, Empty: bo }, self: Vy };
function qy(e) {
  const { popoverColor: t, boxShadow2: o, borderRadius: r, heightMedium: n, dividerColor: i, textColor2: a } = e;
  return { menuPadding: "4px", menuColor: t, menuBoxShadow: o, menuBorderRadius: r, menuHeight: `calc(${n} * 7.6)`, actionDividerColor: i, actionTextColor: a, actionPadding: "8px 12px", headerDividerColor: i, headerTextColor: a, headerPadding: "8px 12px" };
}
const Gy = { name: "TreeSelect", common: q, peers: { Tree: xd, Empty: bo, InternalSelection: wa }, self: qy }, Uy = { headerFontSize1: "30px", headerFontSize2: "22px", headerFontSize3: "18px", headerFontSize4: "16px", headerFontSize5: "16px", headerFontSize6: "16px", headerMargin1: "28px 0 20px 0", headerMargin2: "28px 0 20px 0", headerMargin3: "28px 0 20px 0", headerMargin4: "28px 0 18px 0", headerMargin5: "28px 0 18px 0", headerMargin6: "28px 0 18px 0", headerPrefixWidth1: "16px", headerPrefixWidth2: "16px", headerPrefixWidth3: "12px", headerPrefixWidth4: "12px", headerPrefixWidth5: "12px", headerPrefixWidth6: "12px", headerBarWidth1: "4px", headerBarWidth2: "4px", headerBarWidth3: "3px", headerBarWidth4: "3px", headerBarWidth5: "3px", headerBarWidth6: "3px", pMargin: "16px 0 16px 0", liMargin: ".25em 0 0 0", olPadding: "0 0 0 2em", ulPadding: "0 0 0 2em" };
function Ky(e) {
  const { primaryColor: t, textColor2: o, borderColor: r, lineHeight: n, fontSize: i, borderRadiusSmall: a, dividerColor: l, fontWeightStrong: s, textColor1: d, textColor3: c, infoColor: u, warningColor: p, errorColor: h, successColor: f, codeColor: g } = e;
  return Object.assign(Object.assign({}, Uy), { aTextColor: t, blockquoteTextColor: o, blockquotePrefixColor: r, blockquoteLineHeight: n, blockquoteFontSize: i, codeBorderRadius: a, liTextColor: o, liLineHeight: n, liFontSize: i, hrColor: l, headerFontWeight: s, headerTextColor: d, pTextColor: o, pTextColor1Depth: d, pTextColor2Depth: o, pTextColor3Depth: c, pLineHeight: n, pFontSize: i, headerBarColor: t, headerBarColorPrimary: t, headerBarColorInfo: u, headerBarColorError: h, headerBarColorWarning: p, headerBarColorSuccess: f, textColor: o, textColor1Depth: d, textColor2Depth: o, textColor3Depth: c, textColorPrimary: t, textColorInfo: u, textColorSuccess: f, textColorWarning: p, textColorError: h, codeTextColor: o, codeColor: g, codeBorder: "1px solid #0000" });
}
const Cd = { name: "Typography", common: q, self: Ky };
function Yy(e) {
  const { iconColor: t, primaryColor: o, errorColor: r, textColor2: n, successColor: i, opacityDisabled: a, actionColor: l, borderColor: s, hoverColor: d, lineHeight: c, borderRadius: u, fontSize: p } = e;
  return { fontSize: p, lineHeight: c, borderRadius: u, draggerColor: l, draggerBorder: `1px dashed ${s}`, draggerBorderHover: `1px dashed ${o}`, itemColorHover: d, itemColorHoverError: ee(r, { alpha: 0.06 }), itemTextColor: n, itemTextColorError: r, itemTextColorSuccess: i, itemIconColor: t, itemDisabledOpacity: a, itemBorderImageCardError: `1px solid ${r}`, itemBorderImageCard: `1px solid ${s}` };
}
const Xy = { name: "Upload", common: q, peers: { Button: ut, Progress: bd }, self: Yy }, Zy = { name: "Watermark", common: q, self(e) {
  const { fontFamily: t } = e;
  return { fontFamily: t };
} };
function Jy(e) {
  const { popoverColor: t, dividerColor: o, borderRadius: r } = e;
  return { color: t, buttonBorderColor: o, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
}
const Qy = { name: "FloatButtonGroup", common: q, self: Jy };
function ew(e) {
  const { popoverColor: t, textColor2: o, buttonColor2Hover: r, buttonColor2Pressed: n, primaryColor: i, primaryColorHover: a, primaryColorPressed: l, borderRadius: s } = e;
  return { color: t, colorHover: r, colorPressed: n, colorPrimary: i, colorPrimaryHover: a, colorPrimaryPressed: l, textColor: o, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)", textColorPrimary: "#fff", borderRadiusSquare: s };
}
const tw = { name: "FloatButton", common: q, self: ew }, Ur = "n-form", yd = "n-form-item-insts", ow = V("form", [H("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [V("form-item", { width: "auto", marginRight: "18px" }, [I("&:last-child", { marginRight: 0 })])])]);
var rw = function(e, t, o, r) {
  function n(i) {
    return i instanceof o ? i : new o(function(a) {
      a(i);
    });
  }
  return new (o || (o = Promise))(function(i, a) {
    function l(c) {
      try {
        d(r.next(c));
      } catch (u) {
        a(u);
      }
    }
    function s(c) {
      try {
        d(r.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function d(c) {
      c.done ? i(c.value) : n(c.value).then(l, s);
    }
    d((r = r.apply(e, t || [])).next());
  });
};
const nw = Object.assign(Object.assign({}, me.props), { inline: Boolean, labelWidth: [Number, String], labelAlign: String, labelPlacement: { type: String, default: "top" }, model: { type: Object, default: () => {
} }, rules: Object, disabled: Boolean, size: String, showRequireMark: { type: Boolean, default: void 0 }, requireMarkPlacement: String, showFeedback: { type: Boolean, default: true }, onSubmit: { type: Function, default: (e) => {
  e.preventDefault();
} }, showLabel: { type: Boolean, default: void 0 }, validateMessages: Object }), iw = J({ name: "Form", props: nw, setup(e) {
  const { mergedClsPrefixRef: t } = rt(e);
  me("Form", "-form", ow, Ia, e, t);
  const o = {}, r = W(void 0), n = (s) => {
    const d = r.value;
    (d === void 0 || s >= d) && (r.value = s);
  };
  function i(s) {
    return rw(this, arguments, void 0, function* (d, c = () => true) {
      return yield new Promise((u, p) => {
        const h = [];
        for (const f of Fr(o)) {
          const g = o[f];
          for (const v of g) v.path && h.push(v.internalValidate(null, c));
        }
        Promise.all(h).then((f) => {
          const g = f.some((C) => !C.valid), v = [], m = [];
          f.forEach((C) => {
            var S, w;
            !((S = C.errors) === null || S === void 0) && S.length && v.push(C.errors), !((w = C.warnings) === null || w === void 0) && w.length && m.push(C.warnings);
          }), d && d(v.length ? v : void 0, { warnings: m.length ? m : void 0 }), g ? p(v.length ? v : void 0) : u({ warnings: m.length ? m : void 0 });
        });
      });
    });
  }
  function a() {
    for (const s of Fr(o)) {
      const d = o[s];
      for (const c of d) c.restoreValidation();
    }
  }
  return Se(Ur, { props: e, maxChildLabelWidthRef: r, deriveMaxChildLabelWidth: n }), Se(yd, { formItems: o }), Object.assign({ validate: i, restoreValidation: a }, { mergedClsPrefix: t });
}, render() {
  const { mergedClsPrefix: e } = this;
  return b("form", { class: [`${e}-form`, this.inline && `${e}-form--inline`], onSubmit: this.onSubmit }, this.$slots);
} });
function Ro() {
  return Ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, Ro.apply(this, arguments);
}
function aw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Dr(e, t);
}
function Ni(e) {
  return Ni = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, Ni(e);
}
function Dr(e, t) {
  return Dr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Dr(e, t);
}
function lw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function gn(e, t, o) {
  return lw() ? gn = Reflect.construct.bind() : gn = function(n, i, a) {
    var l = [null];
    l.push.apply(l, i);
    var s = Function.bind.apply(n, l), d = new s();
    return a && Dr(d, a.prototype), d;
  }, gn.apply(null, arguments);
}
function sw(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Wi(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Wi = function(r) {
    if (r === null || !sw(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, n);
    }
    function n() {
      return gn(r, arguments, Ni(this).constructor);
    }
    return n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: false, writable: true, configurable: true } }), Dr(n, r);
  }, Wi(e);
}
var cw = /%[sdj%]/g, dw = function() {
};
function ji(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(o) {
    var r = o.field;
    t[r] = t[r] || [], t[r].push(o);
  }), t;
}
function Ct(e) {
  for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) o[r - 1] = arguments[r];
  var n = 0, i = o.length;
  if (typeof e == "function") return e.apply(null, o);
  if (typeof e == "string") {
    var a = e.replace(cw, function(l) {
      if (l === "%%") return "%";
      if (n >= i) return l;
      switch (l) {
        case "%s":
          return String(o[n++]);
        case "%d":
          return Number(o[n++]);
        case "%j":
          try {
            return JSON.stringify(o[n++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return a;
  }
  return e;
}
function uw(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function tt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || uw(t) && typeof e == "string" && !e);
}
function fw(e, t, o) {
  var r = [], n = 0, i = e.length;
  function a(l) {
    r.push.apply(r, l || []), n++, n === i && o(r);
  }
  e.forEach(function(l) {
    t(l, a);
  });
}
function es(e, t, o) {
  var r = 0, n = e.length;
  function i(a) {
    if (a && a.length) {
      o(a);
      return;
    }
    var l = r;
    r = r + 1, l < n ? t(e[l], i) : o([]);
  }
  i([]);
}
function hw(e) {
  var t = [];
  return Object.keys(e).forEach(function(o) {
    t.push.apply(t, e[o] || []);
  }), t;
}
var ts = (function(e) {
  aw(t, e);
  function t(o, r) {
    var n;
    return n = e.call(this, "Async Validation Error") || this, n.errors = o, n.fields = r, n;
  }
  return t;
})(Wi(Error));
function pw(e, t, o, r, n) {
  if (t.first) {
    var i = new Promise(function(p, h) {
      var f = function(m) {
        return r(m), m.length ? h(new ts(m, ji(m))) : p(n);
      }, g = hw(e);
      es(g, o, f);
    });
    return i.catch(function(p) {
      return p;
    }), i;
  }
  var a = t.firstFields === true ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, d = 0, c = [], u = new Promise(function(p, h) {
    var f = function(v) {
      if (c.push.apply(c, v), d++, d === s) return r(c), c.length ? h(new ts(c, ji(c))) : p(n);
    };
    l.length || (r(c), p(n)), l.forEach(function(g) {
      var v = e[g];
      a.indexOf(g) !== -1 ? es(v, o, f) : fw(v, o, f);
    });
  });
  return u.catch(function(p) {
    return p;
  }), u;
}
function gw(e) {
  return !!(e && e.message !== void 0);
}
function mw(e, t) {
  for (var o = e, r = 0; r < t.length; r++) {
    if (o == null) return o;
    o = o[t[r]];
  }
  return o;
}
function os(e, t) {
  return function(o) {
    var r;
    return e.fullFields ? r = mw(t, e.fullFields) : r = t[o.field || e.fullField], gw(o) ? (o.field = o.field || e.fullField, o.fieldValue = r, o) : { message: typeof o == "function" ? o() : o, fieldValue: r, field: o.field || e.fullField };
  };
}
function rs(e, t) {
  if (t) {
    for (var o in t) if (t.hasOwnProperty(o)) {
      var r = t[o];
      typeof r == "object" && typeof e[o] == "object" ? e[o] = Ro({}, e[o], r) : e[o] = r;
    }
  }
  return e;
}
var wd = function(t, o, r, n, i, a) {
  t.required && (!r.hasOwnProperty(t.field) || tt(o, a || t.type)) && n.push(Ct(i.messages.required, t.fullField));
}, vw = function(t, o, r, n, i) {
  (/^\s+$/.test(o) || o === "") && n.push(Ct(i.messages.whitespace, t.fullField));
}, fn, bw = (function() {
  if (fn) return fn;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, o = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", n = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + o + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + o + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + o + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + o + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + o + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + o + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + o + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + o + "$)|(?:^" + n + "$)"), a = new RegExp("^" + o + "$"), l = new RegExp("^" + n + "$"), s = function(w) {
    return w && w.exact ? i : new RegExp("(?:" + t(w) + o + t(w) + ")|(?:" + t(w) + n + t(w) + ")", "g");
  };
  s.v4 = function(S) {
    return S && S.exact ? a : new RegExp("" + t(S) + o + t(S), "g");
  }, s.v6 = function(S) {
    return S && S.exact ? l : new RegExp("" + t(S) + n + t(S), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, p = s.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", f = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', C = "(?:" + d + "|www\\.)" + c + "(?:localhost|" + u + "|" + p + "|" + h + f + g + ")" + v + m;
  return fn = new RegExp("(?:^" + C + "$)", "i"), fn;
}), ns = { email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/, hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i }, Cr = { integer: function(t) {
  return Cr.number(t) && parseInt(t, 10) === t;
}, float: function(t) {
  return Cr.number(t) && !Cr.integer(t);
}, array: function(t) {
  return Array.isArray(t);
}, regexp: function(t) {
  if (t instanceof RegExp) return true;
  try {
    return !!new RegExp(t);
  } catch {
    return false;
  }
}, date: function(t) {
  return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
}, number: function(t) {
  return isNaN(t) ? false : typeof t == "number";
}, object: function(t) {
  return typeof t == "object" && !Cr.array(t);
}, method: function(t) {
  return typeof t == "function";
}, email: function(t) {
  return typeof t == "string" && t.length <= 320 && !!t.match(ns.email);
}, url: function(t) {
  return typeof t == "string" && t.length <= 2048 && !!t.match(bw());
}, hex: function(t) {
  return typeof t == "string" && !!t.match(ns.hex);
} }, xw = function(t, o, r, n, i) {
  if (t.required && o === void 0) {
    wd(t, o, r, n, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  a.indexOf(l) > -1 ? Cr[l](o) || n.push(Ct(i.messages.types[l], t.fullField, t.type)) : l && typeof o !== t.type && n.push(Ct(i.messages.types[l], t.fullField, t.type));
}, Cw = function(t, o, r, n, i) {
  var a = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = o, u = null, p = typeof o == "number", h = typeof o == "string", f = Array.isArray(o);
  if (p ? u = "number" : h ? u = "string" : f && (u = "array"), !u) return false;
  f && (c = o.length), h && (c = o.replace(d, "_").length), a ? c !== t.len && n.push(Ct(i.messages[u].len, t.fullField, t.len)) : l && !s && c < t.min ? n.push(Ct(i.messages[u].min, t.fullField, t.min)) : s && !l && c > t.max ? n.push(Ct(i.messages[u].max, t.fullField, t.max)) : l && s && (c < t.min || c > t.max) && n.push(Ct(i.messages[u].range, t.fullField, t.min, t.max));
}, No = "enum", yw = function(t, o, r, n, i) {
  t[No] = Array.isArray(t[No]) ? t[No] : [], t[No].indexOf(o) === -1 && n.push(Ct(i.messages[No], t.fullField, t[No].join(", ")));
}, ww = function(t, o, r, n, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp) t.pattern.lastIndex = 0, t.pattern.test(o) || n.push(Ct(i.messages.pattern.mismatch, t.fullField, o, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(o) || n.push(Ct(i.messages.pattern.mismatch, t.fullField, o, t.pattern));
    }
  }
}, xe = { required: wd, whitespace: vw, type: xw, range: Cw, enum: yw, pattern: ww }, Sw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o, "string") && !t.required) return r();
    xe.required(t, o, n, a, i, "string"), tt(o, "string") || (xe.type(t, o, n, a, i), xe.range(t, o, n, a, i), xe.pattern(t, o, n, a, i), t.whitespace === true && xe.whitespace(t, o, n, a, i));
  }
  r(a);
}, $w = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i), o !== void 0 && xe.type(t, o, n, a, i);
  }
  r(a);
}, Pw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (o === "" && (o = void 0), tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i), o !== void 0 && (xe.type(t, o, n, a, i), xe.range(t, o, n, a, i));
  }
  r(a);
}, Rw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i), o !== void 0 && xe.type(t, o, n, a, i);
  }
  r(a);
}, Ew = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i), tt(o) || xe.type(t, o, n, a, i);
  }
  r(a);
}, kw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i), o !== void 0 && (xe.type(t, o, n, a, i), xe.range(t, o, n, a, i));
  }
  r(a);
}, Tw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i), o !== void 0 && (xe.type(t, o, n, a, i), xe.range(t, o, n, a, i));
  }
  r(a);
}, zw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (o == null && !t.required) return r();
    xe.required(t, o, n, a, i, "array"), o != null && (xe.type(t, o, n, a, i), xe.range(t, o, n, a, i));
  }
  r(a);
}, Iw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i), o !== void 0 && xe.type(t, o, n, a, i);
  }
  r(a);
}, Aw = "enum", Mw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i), o !== void 0 && xe[Aw](t, o, n, a, i);
  }
  r(a);
}, Bw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o, "string") && !t.required) return r();
    xe.required(t, o, n, a, i), tt(o, "string") || xe.pattern(t, o, n, a, i);
  }
  r(a);
}, Ow = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o, "date") && !t.required) return r();
    if (xe.required(t, o, n, a, i), !tt(o, "date")) {
      var s;
      o instanceof Date ? s = o : s = new Date(o), xe.type(t, s, n, a, i), s && xe.range(t, s.getTime(), n, a, i);
    }
  }
  r(a);
}, Fw = function(t, o, r, n, i) {
  var a = [], l = Array.isArray(o) ? "array" : typeof o;
  xe.required(t, o, n, a, i, l), r(a);
}, ui = function(t, o, r, n, i) {
  var a = t.type, l = [], s = t.required || !t.required && n.hasOwnProperty(t.field);
  if (s) {
    if (tt(o, a) && !t.required) return r();
    xe.required(t, o, n, l, i, a), tt(o, a) || xe.type(t, o, n, l, i);
  }
  r(l);
}, Lw = function(t, o, r, n, i) {
  var a = [], l = t.required || !t.required && n.hasOwnProperty(t.field);
  if (l) {
    if (tt(o) && !t.required) return r();
    xe.required(t, o, n, a, i);
  }
  r(a);
}, Pr = { string: Sw, method: $w, number: Pw, boolean: Rw, regexp: Ew, integer: kw, float: Tw, array: zw, object: Iw, enum: Mw, pattern: Bw, date: Ow, url: ui, hex: ui, email: ui, required: Fw, any: Lw };
function Vi() {
  return { default: "Validation error on field %s", required: "%s is required", enum: "%s must be one of %s", whitespace: "%s cannot be empty", date: { format: "%s date %s is invalid for format %s", parse: "%s date could not be parsed, %s is invalid ", invalid: "%s date %s is invalid" }, types: { string: "%s is not a %s", method: "%s is not a %s (function)", array: "%s is not an %s", object: "%s is not an %s", number: "%s is not a %s", date: "%s is not a %s", boolean: "%s is not a %s", integer: "%s is not an %s", float: "%s is not a %s", regexp: "%s is not a valid %s", email: "%s is not a valid %s", url: "%s is not a valid %s", hex: "%s is not a valid %s" }, string: { len: "%s must be exactly %s characters", min: "%s must be at least %s characters", max: "%s cannot be longer than %s characters", range: "%s must be between %s and %s characters" }, number: { len: "%s must equal %s", min: "%s cannot be less than %s", max: "%s cannot be greater than %s", range: "%s must be between %s and %s" }, array: { len: "%s must be exactly %s in length", min: "%s cannot be less than %s in length", max: "%s cannot be greater than %s in length", range: "%s must be between %s and %s in length" }, pattern: { mismatch: "%s value %s does not match pattern %s" }, clone: function() {
    var t = JSON.parse(JSON.stringify(this));
    return t.clone = this.clone, t;
  } };
}
var qi = Vi(), Qo = (function() {
  function e(o) {
    this.rules = null, this._messages = qi, this.define(o);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var n = this;
    if (!r) throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r)) throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(i) {
      var a = r[i];
      n.rules[i] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(r) {
    return r && (this._messages = rs(Vi(), r)), this._messages;
  }, t.validate = function(r, n, i) {
    var a = this;
    n === void 0 && (n = {}), i === void 0 && (i = function() {
    });
    var l = r, s = n, d = i;
    if (typeof s == "function" && (d = s, s = {}), !this.rules || Object.keys(this.rules).length === 0) return d && d(null, l), Promise.resolve(l);
    function c(g) {
      var v = [], m = {};
      function C(w) {
        if (Array.isArray(w)) {
          var E;
          v = (E = v).concat.apply(E, w);
        } else v.push(w);
      }
      for (var S = 0; S < g.length; S++) C(g[S]);
      v.length ? (m = ji(v), d(v, m)) : d(null, l);
    }
    if (s.messages) {
      var u = this.messages();
      u === qi && (u = Vi()), rs(u, s.messages), s.messages = u;
    } else s.messages = this.messages();
    var p = {}, h = s.keys || Object.keys(this.rules);
    h.forEach(function(g) {
      var v = a.rules[g], m = l[g];
      v.forEach(function(C) {
        var S = C;
        typeof S.transform == "function" && (l === r && (l = Ro({}, l)), m = l[g] = S.transform(m)), typeof S == "function" ? S = { validator: S } : S = Ro({}, S), S.validator = a.getValidationMethod(S), S.validator && (S.field = g, S.fullField = S.fullField || g, S.type = a.getType(S), p[g] = p[g] || [], p[g].push({ rule: S, value: m, source: l, field: g }));
      });
    });
    var f = {};
    return pw(p, s, function(g, v) {
      var _a2;
      var m = g.rule, C = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      C = C && (m.required || !m.required && g.value), m.field = g.field;
      function S(P, x) {
        return Ro({}, x, { fullField: m.fullField + "." + P, fullFields: m.fullFields ? [].concat(m.fullFields, [P]) : [P] });
      }
      function w(P) {
        P === void 0 && (P = []);
        var x = Array.isArray(P) ? P : [P];
        !s.suppressWarning && x.length && e.warning("async-validator:", x), x.length && m.message !== void 0 && (x = [].concat(m.message));
        var $ = x.map(os(m, l));
        if (s.first && $.length) return f[m.field] = 1, v($);
        if (!C) v($);
        else {
          if (m.required && !g.value) return m.message !== void 0 ? $ = [].concat(m.message).map(os(m, l)) : s.error && ($ = [s.error(m, Ct(s.messages.required, m.field))]), v($);
          var R = {};
          m.defaultField && Object.keys(g.value).map(function(y) {
            R[y] = m.defaultField;
          }), R = Ro({}, R, g.rule.fields);
          var O = {};
          Object.keys(R).forEach(function(y) {
            var A = R[y], T = Array.isArray(A) ? A : [A];
            O[y] = T.map(S.bind(null, y));
          });
          var _ = new e(O);
          _.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), _.validate(g.value, g.rule.options || s, function(y) {
            var A = [];
            $ && $.length && A.push.apply(A, $), y && y.length && A.push.apply(A, y), v(A.length ? A : null);
          });
        }
      }
      var E;
      if (m.asyncValidator) E = m.asyncValidator(m, g.value, w, g.source, s);
      else if (m.validator) {
        try {
          E = m.validator(m, g.value, w, g.source, s);
        } catch (P) {
          (_a2 = console.error) == null ? void 0 : _a2.call(console, P), s.suppressValidatorError || setTimeout(function() {
            throw P;
          }, 0), w(P.message);
        }
        E === true ? w() : E === false ? w(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : E instanceof Array ? w(E) : E instanceof Error && w(E.message);
      }
      E && E.then && E.then(function() {
        return w();
      }, function(P) {
        return w(P);
      });
    }, function(g) {
      c(g);
    }, l);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Pr.hasOwnProperty(r.type)) throw new Error(Ct("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function") return r.validator;
    var n = Object.keys(r), i = n.indexOf("message");
    return i !== -1 && n.splice(i, 1), n.length === 1 && n[0] === "required" ? Pr.required : Pr[this.getType(r)] || void 0;
  }, e;
})();
Qo.register = function(t, o) {
  if (typeof o != "function") throw new Error("Cannot register a validator by type, validator is not a function");
  Pr[t] = o;
};
Qo.warning = dw;
Qo.messages = qi;
Qo.validators = Pr;
const { cubicBezierEaseInOut: is } = Pt;
function Dw({ name: e = "fade-down", fromOffset: t = "-4px", enterDuration: o = ".3s", leaveDuration: r = ".3s", enterCubicBezier: n = is, leaveCubicBezier: i = is } = {}) {
  return [I(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, { opacity: 0, transform: `translateY(${t})` }), I(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`, { opacity: 1, transform: "translateY(0)" }), I(`&.${e}-transition-leave-active`, { transition: `opacity ${r} ${i}, transform ${r} ${i}` }), I(`&.${e}-transition-enter-active`, { transition: `opacity ${o} ${n}, transform ${o} ${n}` })];
}
const Hw = V("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [V("form-item-label", `
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
 `, [L("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), L("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), V("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), H("auto-label-width", [V("form-item-label", "white-space: nowrap;")]), H("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [V("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [H("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), H("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), H("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), H("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), L("text", `
 grid-area: text; 
 `), L("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), H("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [H("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), V("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), V("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), V("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [I("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), V("form-item-feedback", { transition: "color .3s var(--n-bezier)", color: "var(--n-feedback-text-color)" }, [H("warning", { color: "var(--n-feedback-text-color-warning)" }), H("error", { color: "var(--n-feedback-text-color-error)" }), Dw({ fromOffset: "-3px", enterDuration: ".3s", leaveDuration: ".2s" })])])]);
function _w(e) {
  const t = de(Ur, null);
  return { mergedSize: B(() => e.size !== void 0 ? e.size : (t == null ? void 0 : t.props.size) !== void 0 ? t.props.size : "medium") };
}
function Nw(e) {
  const t = de(Ur, null), o = B(() => {
    const { labelPlacement: f } = e;
    return f !== void 0 ? f : (t == null ? void 0 : t.props.labelPlacement) ? t.props.labelPlacement : "top";
  }), r = B(() => o.value === "left" && (e.labelWidth === "auto" || (t == null ? void 0 : t.props.labelWidth) === "auto")), n = B(() => {
    if (o.value === "top") return;
    const { labelWidth: f } = e;
    if (f !== void 0 && f !== "auto") return to(f);
    if (r.value) {
      const g = t == null ? void 0 : t.maxChildLabelWidthRef.value;
      return g !== void 0 ? to(g) : void 0;
    }
    if ((t == null ? void 0 : t.props.labelWidth) !== void 0) return to(t.props.labelWidth);
  }), i = B(() => {
    const { labelAlign: f } = e;
    if (f) return f;
    if (t == null ? void 0 : t.props.labelAlign) return t.props.labelAlign;
  }), a = B(() => {
    var f;
    return [(f = e.labelProps) === null || f === void 0 ? void 0 : f.style, e.labelStyle, { width: n.value }];
  }), l = B(() => {
    const { showRequireMark: f } = e;
    return f !== void 0 ? f : t == null ? void 0 : t.props.showRequireMark;
  }), s = B(() => {
    const { requireMarkPlacement: f } = e;
    return f !== void 0 ? f : (t == null ? void 0 : t.props.requireMarkPlacement) || "right";
  }), d = W(false), c = W(false), u = B(() => {
    const { validationStatus: f } = e;
    if (f !== void 0) return f;
    if (d.value) return "error";
    if (c.value) return "warning";
  }), p = B(() => {
    const { showFeedback: f } = e;
    return f !== void 0 ? f : (t == null ? void 0 : t.props.showFeedback) !== void 0 ? t.props.showFeedback : true;
  }), h = B(() => {
    const { showLabel: f } = e;
    return f !== void 0 ? f : (t == null ? void 0 : t.props.showLabel) !== void 0 ? t.props.showLabel : true;
  });
  return { validationErrored: d, validationWarned: c, mergedLabelStyle: a, mergedLabelPlacement: o, mergedLabelAlign: i, mergedShowRequireMark: l, mergedRequireMarkPlacement: s, mergedValidationStatus: u, mergedShowFeedback: p, mergedShowLabel: h, isAutoLabelWidth: r };
}
function Ww(e) {
  const t = de(Ur, null), o = B(() => {
    const { rulePath: a } = e;
    if (a !== void 0) return a;
    const { path: l } = e;
    if (l !== void 0) return l;
  }), r = B(() => {
    const a = [], { rule: l } = e;
    if (l !== void 0 && (Array.isArray(l) ? a.push(...l) : a.push(l)), t) {
      const { rules: s } = t.props, { value: d } = o;
      if (s !== void 0 && d !== void 0) {
        const c = ta(s, d);
        c !== void 0 && (Array.isArray(c) ? a.push(...c) : a.push(c));
      }
    }
    return a;
  }), n = B(() => r.value.some((a) => a.required)), i = B(() => n.value || e.required);
  return { mergedRules: r, mergedRequired: i };
}
var as = function(e, t, o, r) {
  function n(i) {
    return i instanceof o ? i : new o(function(a) {
      a(i);
    });
  }
  return new (o || (o = Promise))(function(i, a) {
    function l(c) {
      try {
        d(r.next(c));
      } catch (u) {
        a(u);
      }
    }
    function s(c) {
      try {
        d(r.throw(c));
      } catch (u) {
        a(u);
      }
    }
    function d(c) {
      c.done ? i(c.value) : n(c.value).then(l, s);
    }
    d((r = r.apply(e, t || [])).next());
  });
};
const jw = Object.assign(Object.assign({}, me.props), { label: String, labelWidth: [Number, String], labelStyle: [String, Object], labelAlign: String, labelPlacement: String, path: String, first: Boolean, rulePath: String, required: Boolean, showRequireMark: { type: Boolean, default: void 0 }, requireMarkPlacement: String, showFeedback: { type: Boolean, default: void 0 }, rule: [Object, Array], size: String, ignorePathChange: Boolean, validationStatus: String, feedback: String, feedbackClass: String, feedbackStyle: [String, Object], showLabel: { type: Boolean, default: void 0 }, labelProps: Object, contentClass: String, contentStyle: [String, Object] });
function ls(e, t) {
  return (...o) => {
    try {
      const r = e(...o);
      return !t && (typeof r == "boolean" || r instanceof Error || Array.isArray(r)) || (r == null ? void 0 : r.then) ? r : (r === void 0 || ro("form-item/validate", `You return a ${typeof r} typed value in the validator method, which is not recommended. Please use ${t ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), true);
    } catch (r) {
      ro("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(r);
      return;
    }
  };
}
const ss = J({ name: "FormItem", props: jw, setup(e) {
  Jg(yd, "formItems", be(e, "path"));
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = rt(e), r = de(Ur, null), n = _w(e), i = Nw(e), { validationErrored: a, validationWarned: l } = i, { mergedRequired: s, mergedRules: d } = Ww(e), { mergedSize: c } = n, { mergedLabelPlacement: u, mergedLabelAlign: p, mergedRequireMarkPlacement: h } = i, f = W([]), g = W(ki()), v = r ? be(r.props, "disabled") : W(false), m = me("Form", "-form-item", Hw, Ia, e, t);
  Te(be(e, "path"), () => {
    e.ignorePathChange || C();
  });
  function C() {
    f.value = [], a.value = false, l.value = false, e.feedback && (g.value = ki());
  }
  const S = (...T) => as(this, [...T], void 0, function* (z = null, j = () => true, F = { suppressWarning: true }) {
    const { path: U } = e;
    F ? F.first || (F.first = e.first) : F = {};
    const { value: ne } = d, se = r ? ta(r.props.model, U || "") : void 0, he = {}, ue = {}, we = (z ? ne.filter((ie) => Array.isArray(ie.trigger) ? ie.trigger.includes(z) : ie.trigger === z) : ne).filter(j).map((ie, te) => {
      const Z = Object.assign({}, ie);
      if (Z.validator && (Z.validator = ls(Z.validator, false)), Z.asyncValidator && (Z.asyncValidator = ls(Z.asyncValidator, true)), Z.renderMessage) {
        const $e = `__renderMessage__${te}`;
        ue[$e] = Z.message, Z.message = $e, he[$e] = Z.renderMessage;
      }
      return Z;
    }), Ce = we.filter((ie) => ie.level !== "warning"), Be = we.filter((ie) => ie.level === "warning"), re = { valid: true, errors: void 0, warnings: void 0 };
    if (!we.length) return re;
    const M = U ?? "__n_no_path__", K = new Qo({ [M]: Ce }), D = new Qo({ [M]: Be }), { validateMessages: Q } = (r == null ? void 0 : r.props) || {};
    Q && (K.messages(Q), D.messages(Q));
    const ce = (ie) => {
      f.value = ie.map((te) => {
        const Z = (te == null ? void 0 : te.message) || "";
        return { key: Z, render: () => Z.startsWith("__renderMessage__") ? he[Z]() : Z };
      }), ie.forEach((te) => {
        var Z;
        !((Z = te.message) === null || Z === void 0) && Z.startsWith("__renderMessage__") && (te.message = ue[te.message]);
      });
    };
    if (Ce.length) {
      const ie = yield new Promise((te) => {
        K.validate({ [M]: se }, F, te);
      });
      (ie == null ? void 0 : ie.length) && (re.valid = false, re.errors = ie, ce(ie));
    }
    if (Be.length && !re.errors) {
      const ie = yield new Promise((te) => {
        D.validate({ [M]: se }, F, te);
      });
      (ie == null ? void 0 : ie.length) && (ce(ie), re.warnings = ie);
    }
    return !re.errors && !re.warnings ? C() : (a.value = !!re.errors, l.value = !!re.warnings), re;
  });
  function w() {
    S("blur");
  }
  function E() {
    S("change");
  }
  function P() {
    S("focus");
  }
  function x() {
    S("input");
  }
  function $(T, z) {
    return as(this, void 0, void 0, function* () {
      let j, F, U, ne;
      return typeof T == "string" ? (j = T, F = z) : T !== null && typeof T == "object" && (j = T.trigger, F = T.callback, U = T.shouldRuleBeApplied, ne = T.options), yield new Promise((se, he) => {
        S(j, U, ne).then(({ valid: ue, errors: we, warnings: Ce }) => {
          ue ? (F && F(void 0, { warnings: Ce }), se({ warnings: Ce })) : (F && F(we, { warnings: Ce }), he(we));
        });
      });
    });
  }
  Se(Bi, { path: be(e, "path"), disabled: v, mergedSize: n.mergedSize, mergedValidationStatus: i.mergedValidationStatus, restoreValidation: C, handleContentBlur: w, handleContentChange: E, handleContentFocus: P, handleContentInput: x });
  const R = { validate: $, restoreValidation: C, internalValidate: S }, O = W(null);
  pt(() => {
    if (!i.isAutoLabelWidth.value) return;
    const T = O.value;
    if (T !== null) {
      const z = T.style.whiteSpace;
      T.style.whiteSpace = "nowrap", T.style.width = "", r == null ? void 0 : r.deriveMaxChildLabelWidth(Number(getComputedStyle(T).width.slice(0, -2))), T.style.whiteSpace = z;
    }
  });
  const _ = B(() => {
    var T;
    const { value: z } = c, { value: j } = u, F = j === "top" ? "vertical" : "horizontal", { common: { cubicBezierEaseInOut: U }, self: { labelTextColor: ne, asteriskColor: se, lineHeight: he, feedbackTextColor: ue, feedbackTextColorWarning: we, feedbackTextColorError: Ce, feedbackPadding: Be, labelFontWeight: re, [Y("labelHeight", z)]: M, [Y("blankHeight", z)]: K, [Y("feedbackFontSize", z)]: D, [Y("feedbackHeight", z)]: Q, [Y("labelPadding", F)]: ce, [Y("labelTextAlign", F)]: ie, [Y(Y("labelFontSize", j), z)]: te } } = m.value;
    let Z = (T = p.value) !== null && T !== void 0 ? T : ie;
    return j === "top" && (Z = Z === "right" ? "flex-end" : "flex-start"), { "--n-bezier": U, "--n-line-height": he, "--n-blank-height": K, "--n-label-font-size": te, "--n-label-text-align": Z, "--n-label-height": M, "--n-label-padding": ce, "--n-label-font-weight": re, "--n-asterisk-color": se, "--n-label-text-color": ne, "--n-feedback-padding": Be, "--n-feedback-font-size": D, "--n-feedback-height": Q, "--n-feedback-text-color": ue, "--n-feedback-text-color-warning": we, "--n-feedback-text-color-error": Ce };
  }), y = o ? gt("form-item", B(() => {
    var T;
    return `${c.value[0]}${u.value[0]}${((T = p.value) === null || T === void 0 ? void 0 : T[0]) || ""}`;
  }), _, e) : void 0, A = B(() => u.value === "left" && h.value === "left" && p.value === "left");
  return Object.assign(Object.assign(Object.assign(Object.assign({ labelElementRef: O, mergedClsPrefix: t, mergedRequired: s, feedbackId: g, renderExplains: f, reverseColSpace: A }, i), n), R), { cssVars: o ? void 0 : _, themeClass: y == null ? void 0 : y.themeClass, onRender: y == null ? void 0 : y.onRender });
}, render() {
  const { $slots: e, mergedClsPrefix: t, mergedShowLabel: o, mergedShowRequireMark: r, mergedRequireMarkPlacement: n, onRender: i } = this, a = r !== void 0 ? r : this.mergedRequired;
  i == null ? void 0 : i();
  const l = () => {
    const s = this.$slots.label ? this.$slots.label() : this.label;
    if (!s) return null;
    const d = b("span", { class: `${t}-form-item-label__text` }, s), c = a ? b("span", { class: `${t}-form-item-label__asterisk` }, n !== "left" ? "\xA0*" : "*\xA0") : n === "right-hanging" && b("span", { class: `${t}-form-item-label__asterisk-placeholder` }, "\xA0*"), { labelProps: u } = this;
    return b("label", Object.assign({}, u, { class: [u == null ? void 0 : u.class, `${t}-form-item-label`, `${t}-form-item-label--${n}-mark`, this.reverseColSpace && `${t}-form-item-label--reverse-columns-space`], style: this.mergedLabelStyle, ref: "labelElementRef" }), n === "left" ? [c, d] : [d, c]);
  };
  return b("div", { class: [`${t}-form-item`, this.themeClass, `${t}-form-item--${this.mergedSize}-size`, `${t}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${t}-form-item--auto-label-width`, !o && `${t}-form-item--no-label`], style: this.cssVars }, o && l(), b("div", { class: [`${t}-form-item-blank`, this.contentClass, this.mergedValidationStatus && `${t}-form-item-blank--${this.mergedValidationStatus}`], style: this.contentStyle }, e), this.mergedShowFeedback ? b("div", { key: this.feedbackId, style: this.feedbackStyle, class: [`${t}-form-item-feedback-wrapper`, this.feedbackClass] }, b(Et, { name: "fade-down-transition", mode: "out-in" }, { default: () => {
    const { mergedValidationStatus: s } = this;
    return Ge(e.feedback, (d) => {
      var c;
      const { feedback: u } = this, p = d || u ? b("div", { key: "__feedback__", class: `${t}-form-item-feedback__line` }, d || u) : this.renderExplains.length ? (c = this.renderExplains) === null || c === void 0 ? void 0 : c.map(({ key: h, render: f }) => b("div", { key: h, class: `${t}-form-item-feedback__line` }, f())) : null;
      return p ? s === "warning" ? b("div", { key: "controlled-warning", class: `${t}-form-item-feedback ${t}-form-item-feedback--warning` }, p) : s === "error" ? b("div", { key: "controlled-error", class: `${t}-form-item-feedback ${t}-form-item-feedback--error` }, p) : s === "success" ? b("div", { key: "controlled-success", class: `${t}-form-item-feedback ${t}-form-item-feedback--success` }, p) : b("div", { key: "controlled-default", class: `${t}-form-item-feedback` }, p) : null;
    });
  } })) : null);
} });
function Vw(e) {
  const { borderRadius: t, fontSizeMini: o, fontSizeTiny: r, fontSizeSmall: n, fontWeight: i, textColor2: a, cardColor: l, buttonColor2Hover: s } = e;
  return { activeColors: ["#9be9a8", "#40c463", "#30a14e", "#216e39"], borderRadius: t, borderColor: l, textColor: a, mininumColor: s, fontWeight: i, loadingColorStart: "rgba(0, 0, 0, 0.06)", loadingColorEnd: "rgba(0, 0, 0, 0.12)", rectSizeSmall: "10px", rectSizeMedium: "11px", rectSizeLarge: "12px", borderRadiusSmall: "2px", borderRadiusMedium: "2px", borderRadiusLarge: "2px", xGapSmall: "2px", xGapMedium: "3px", xGapLarge: "3px", yGapSmall: "2px", yGapMedium: "3px", yGapLarge: "3px", fontSizeSmall: r, fontSizeMedium: o, fontSizeLarge: n };
}
const qw = { name: "Heatmap", common: q, self: Vw };
function Gw(e) {
  const { primaryColor: t, baseColor: o } = e;
  return { color: t, iconColor: o };
}
const Uw = { name: "IconWrapper", common: q, self: Gw };
function Kw() {
  return { toolbarIconColor: "rgba(255, 255, 255, .9)", toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
}
const Yw = { name: "Image", common: q, peers: { Tooltip: Gr }, self: Kw }, NS = "n-layout-sider", WS = { type: String, default: "static" }, Xw = { extraFontSize: "12px", width: "440px" };
function Zw(e) {
  const { fontWeight: t, iconColorDisabled: o, iconColor: r, fontSizeLarge: n, fontSizeMedium: i, fontSizeSmall: a, heightLarge: l, heightMedium: s, heightSmall: d, borderRadius: c, cardColor: u, tableHeaderColor: p, textColor1: h, textColorDisabled: f, textColor2: g, borderColor: v, hoverColor: m } = e;
  return Object.assign(Object.assign({}, Xw), { itemHeightSmall: d, itemHeightMedium: s, itemHeightLarge: l, fontSizeSmall: a, fontSizeMedium: i, fontSizeLarge: n, borderRadius: c, borderColor: v, listColor: u, headerColor: X(u, p), titleTextColor: h, titleTextColorDisabled: f, extraTextColor: g, filterDividerColor: v, itemTextColor: g, itemTextColorDisabled: f, itemColorPending: m, titleFontWeight: t, iconColor: r, iconColorDisabled: o });
}
const Jw = { name: "Transfer", common: q, peers: { Checkbox: nr, Scrollbar: nt, Input: mt, Empty: bo, Button: ut }, self: Zw }, Qw = I([V("list", `
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `, [H("show-divider", [V("list-item", [I("&:not(:last-child)", [L("divider", `
 background-color: var(--n-merged-border-color);
 `)])])]), H("clickable", [V("list-item", `
 cursor: pointer;
 `)]), H("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), H("hoverable", [V("list-item", `
 border-radius: var(--n-border-radius);
 `, [I("&:hover", `
 background-color: var(--n-merged-color-hover);
 `, [L("divider", `
 background-color: transparent;
 `)])])]), H("bordered, hoverable", [V("list-item", `
 padding: 12px 20px;
 `), L("header, footer", `
 padding: 12px 20px;
 `)]), L("header, footer", `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [I("&:not(:last-child)", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), V("list-item", `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [L("prefix", `
 margin-right: 20px;
 flex: 0;
 `), L("suffix", `
 margin-left: 20px;
 flex: 0;
 `), L("main", `
 flex: 1;
 `), L("divider", `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), ia(V("list", `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), sc(V("list", `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]), e1 = Object.assign(Object.assign({}, me.props), { size: { type: String, default: "medium" }, bordered: Boolean, clickable: Boolean, hoverable: Boolean, showDivider: { type: Boolean, default: true } }), Sd = "n-list", t1 = J({ name: "List", props: e1, slots: Object, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o, mergedRtlRef: r } = rt(e), n = zt("List", r, t), i = me("List", "-list", Qw, vd, e, t);
  Se(Sd, { showDividerRef: be(e, "showDivider"), mergedClsPrefixRef: t });
  const a = B(() => {
    const { common: { cubicBezierEaseInOut: s }, self: { fontSize: d, textColor: c, color: u, colorModal: p, colorPopover: h, borderColor: f, borderColorModal: g, borderColorPopover: v, borderRadius: m, colorHover: C, colorHoverModal: S, colorHoverPopover: w } } = i.value;
    return { "--n-font-size": d, "--n-bezier": s, "--n-text-color": c, "--n-color": u, "--n-border-radius": m, "--n-border-color": f, "--n-border-color-modal": g, "--n-border-color-popover": v, "--n-color-modal": p, "--n-color-popover": h, "--n-color-hover": C, "--n-color-hover-modal": S, "--n-color-hover-popover": w };
  }), l = o ? gt("list", void 0, a, e) : void 0;
  return { mergedClsPrefix: t, rtlEnabled: n, cssVars: o ? void 0 : a, themeClass: l == null ? void 0 : l.themeClass, onRender: l == null ? void 0 : l.onRender };
}, render() {
  var e;
  const { $slots: t, mergedClsPrefix: o, onRender: r } = this;
  return r == null ? void 0 : r(), b("ul", { class: [`${o}-list`, this.rtlEnabled && `${o}-list--rtl`, this.bordered && `${o}-list--bordered`, this.showDivider && `${o}-list--show-divider`, this.hoverable && `${o}-list--hoverable`, this.clickable && `${o}-list--clickable`, this.themeClass], style: this.cssVars }, t.header ? b("div", { class: `${o}-list__header` }, t.header()) : null, (e = t.default) === null || e === void 0 ? void 0 : e.call(t), t.footer ? b("div", { class: `${o}-list__footer` }, t.footer()) : null);
} }), o1 = J({ name: "ListItem", slots: Object, setup() {
  const e = de(Sd, null);
  return e || va("list-item", "`n-list-item` must be placed in `n-list`."), { showDivider: e.showDividerRef, mergedClsPrefix: e.mergedClsPrefixRef };
}, render() {
  const { $slots: e, mergedClsPrefix: t } = this;
  return b("li", { class: `${t}-list-item` }, e.prefix ? b("div", { class: `${t}-list-item__prefix` }, e.prefix()) : null, e.default ? b("div", { class: `${t}-list-item__main` }, e) : null, e.suffix ? b("div", { class: `${t}-list-item__suffix` }, e.suffix()) : null, this.showDivider && b("div", { class: `${t}-list-item__divider` }));
} });
function r1() {
  return {};
}
const n1 = { name: "Marquee", common: q, self: r1 };
function i1(e) {
  return { borderRadius: e.borderRadius };
}
const a1 = { name: "QrCode", common: q, self: i1 };
function l1(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, borderRadius: n } = e;
  return { color: "#eee", colorEnd: "#ddd", borderRadius: n, heightSmall: t, heightMedium: o, heightLarge: r };
}
const s1 = { name: "Skeleton", common: q, self: l1 };
function c1(e) {
  const { primaryColorHover: t, borderColor: o } = e;
  return { resizableTriggerColorHover: t, resizableTriggerColor: o };
}
const d1 = { name: "Split", common: q, self: c1 }, u1 = V("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [H("strong", `
 font-weight: var(--n-font-weight-strong);
 `), H("italic", { fontStyle: "italic" }), H("underline", { textDecoration: "underline" }), H("code", `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]), f1 = Object.assign(Object.assign({}, me.props), { code: Boolean, type: { type: String, default: "default" }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), jS = J({ name: "Text", props: f1, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = rt(e), r = me("Typography", "-text", u1, Cd, e, t), n = B(() => {
    const { depth: a, type: l } = e, s = l === "default" ? a === void 0 ? "textColor" : `textColor${a}Depth` : Y("textColor", l), { common: { fontWeightStrong: d, fontFamilyMono: c, cubicBezierEaseInOut: u }, self: { codeTextColor: p, codeBorderRadius: h, codeColor: f, codeBorder: g, [s]: v } } = r.value;
    return { "--n-bezier": u, "--n-text-color": v, "--n-font-weight-strong": d, "--n-font-famliy-mono": c, "--n-code-border-radius": h, "--n-code-text-color": p, "--n-code-color": f, "--n-code-border": g };
  }), i = o ? gt("text", B(() => `${e.type[0]}${e.depth || ""}`), n, e) : void 0;
  return { mergedClsPrefix: t, compitableTag: mc(e, ["as", "tag"]), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e, t, o;
  const { mergedClsPrefix: r } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const n = [`${r}-text`, this.themeClass, { [`${r}-text--code`]: this.code, [`${r}-text--delete`]: this.delete, [`${r}-text--strong`]: this.strong, [`${r}-text--italic`]: this.italic, [`${r}-text--underline`]: this.underline }], i = (o = (t = this.$slots).default) === null || o === void 0 ? void 0 : o.call(t);
  return this.code ? b("code", { class: n, style: this.cssVars }, this.delete ? b("del", null, i) : i) : this.delete ? b("del", { class: n, style: this.cssVars }, i) : b(this.compitableTag || "span", { class: n, style: this.cssVars }, i);
} });
function h1() {
  const e = de(Tt, null);
  return B(() => {
    if (e === null) return q;
    const { mergedThemeRef: { value: t }, mergedThemeOverridesRef: { value: o } } = e, r = (t == null ? void 0 : t.common) || q;
    return (o == null ? void 0 : o.common) ? Object.assign({}, r, o.common) : r;
  });
}
const p1 = () => ({}), g1 = { name: "Equation", common: q, self: p1 }, VS = { name: "light", common: q, Alert: Jb, Anchor: r0, AutoComplete: h0, Avatar: Qc, AvatarGroup: m0, BackTop: x0, Badge: y0, Breadcrumb: $0, Button: ut, ButtonGroup: HC, Calendar: B0, Card: Sa, Carousel: W0, Cascader: G0, Checkbox: nr, Code: od, Collapse: Y0, CollapseTransition: Z0, ColorPicker: Q0, DataTable: hx, DatePicker: Mx, Descriptions: Fx, Dialog: Ea, Divider: aC, Drawer: md, Dropdown: On, DynamicInput: kC, DynamicTags: BC, Element: OC, Empty: bo, Equation: g1, Ellipsis: Pa, Flex: DC, Form: Ia, GradientText: jC, Heatmap: qw, Icon: dd, IconWrapper: Uw, Image: Yw, Input: mt, InputNumber: qC, InputOtp: UC, Layout: YC, LegacyTransfer: Jw, List: vd, LoadingBar: Jx, Log: QC, Menu: ny, Mention: ty, Message: tC, Modal: gd, Notification: nC, PageHeader: ly, Pagination: id, Popconfirm: dy, Popover: xo, Popselect: rd, Progress: bd, QrCode: a1, Radio: ad, Rate: hy, Row: XC, Result: my, Scrollbar: nt, Skeleton: s1, Select: nd, Slider: xy, Space: za, Spin: yy, Statistic: Sy, Steps: Ry, Switch: Ty, Table: Ay, Tabs: Oy, Tag: ya, Thing: Ly, TimePicker: pd, Timeline: _y, Tooltip: Gr, Transfer: jy, Tree: xd, TreeSelect: Gy, Typography: Cd, Upload: Xy, Watermark: Zy, Split: d1, FloatButton: tw, FloatButtonGroup: Qy, Marquee: n1 }, m1 = "trackmaker_settings", qS = Ss("settings", () => {
  const e = W({ ...Vn });
  async function t() {
    const a = await ct("settings");
    a && (e.value = { ...e.value, ...a }), r();
  }
  async function o() {
    await Ae("settings", JSON.parse(JSON.stringify(e.value))), await wt(), r();
  }
  function r() {
    try {
      localStorage.setItem(m1, JSON.stringify(e.value));
    } catch {
    }
  }
  function n() {
    const a = { theme: e.value.theme, interfaceLanguage: e.value.interfaceLanguage, mapLanguage: e.value.mapLanguage, watchCompatibilityMode: e.value.watchCompatibilityMode, geolocationCorrection: e.value.geolocationCorrection, geolocationBackend: e.value.geolocationBackend };
    e.value = { ...Vn, ...a };
  }
  function i(a) {
    const l = Vn, s = e.value;
    s[a] = l[a], e.value = { ...s };
  }
  return Te(e, () => {
    r(), o();
  }, { deep: true }), { settings: e, init: t, resetAdvancedSettings: n, resetSetting: i };
});
function v1(e) {
  return $u() ? (Pu(e), true) : false;
}
const fi = /* @__PURE__ */ new WeakMap(), b1 = (...e) => {
  var t;
  const o = e[0], r = (t = mo()) == null ? void 0 : t.proxy;
  if (r == null && !$s()) throw new Error("injectLocal must be called in setup");
  return r && fi.has(r) && o in fi.get(r) ? fi.get(r)[o] : de(...e);
}, x1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const C1 = Object.prototype.toString, y1 = (e) => C1.call(e) === "[object Object]", w1 = () => {
};
function cs(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function hi(e) {
  return Array.isArray(e) ? e : [e];
}
function S1(e) {
  return mo();
}
function $1(e, t = true, o) {
  S1() ? pt(e, o) : t ? e() : oo(e);
}
function P1(e, t, o) {
  return Te(e, t, { ...o, immediate: true });
}
function GS(e, t, o) {
  var r;
  let n;
  Ru(o) ? n = { evaluating: o } : n = {};
  const { lazy: i = false, flush: a = "pre", evaluating: l = void 0, shallow: s = true, onError: d = (r = globalThis.reportError) != null ? r : w1 } = n, c = Rt(!i), u = s ? Rt(t) : W(t);
  let p = 0;
  return Dt(async (h) => {
    if (!c.value) return;
    p++;
    const f = p;
    let g = false;
    l && Promise.resolve().then(() => {
      l.value = true;
    });
    try {
      const v = await e((m) => {
        h(() => {
          l && (l.value = false), g || m();
        });
      });
      f === p && (u.value = v);
    } catch (v) {
      d(v);
    } finally {
      l && f === p && (l.value = false), g = true;
    }
  }, { flush: a }), i ? B(() => (c.value = true, u.value)) : u;
}
const Aa = x1 ? window : void 0;
function R1(e) {
  var t;
  const o = Go(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function Gi(...e) {
  const t = [], o = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, s, d, c) => (l.addEventListener(s, d, c), () => l.removeEventListener(s, d, c)), n = B(() => {
    const l = hi(Go(e[0])).filter((s) => s != null);
    return l.every((s) => typeof s != "string") ? l : void 0;
  }), i = P1(() => {
    var l, s;
    return [(s = (l = n.value) == null ? void 0 : l.map((d) => R1(d))) != null ? s : [Aa].filter((d) => d != null), hi(Go(n.value ? e[1] : e[0])), hi(pe(n.value ? e[2] : e[1])), Go(n.value ? e[3] : e[2])];
  }, ([l, s, d, c]) => {
    if (o(), !(l == null ? void 0 : l.length) || !(s == null ? void 0 : s.length) || !(d == null ? void 0 : d.length)) return;
    const u = y1(c) ? { ...c } : c;
    t.push(...l.flatMap((p) => s.flatMap((h) => d.map((f) => r(p, h, f, u)))));
  }, { flush: "post" }), a = () => {
    i(), o();
  };
  return v1(o), a;
}
function E1() {
  const e = Rt(false), t = mo();
  return t && pt(() => {
    e.value = true;
  }, t), e;
}
function k1(e) {
  const t = E1();
  return B(() => (t.value, !!e()));
}
const T1 = /* @__PURE__ */ Symbol("vueuse-ssr-width");
function z1() {
  const e = $s() ? b1(T1, null) : null;
  return typeof e == "number" ? e : void 0;
}
function I1(e, t = {}) {
  const { window: o = Aa, ssrWidth: r = z1() } = t, n = k1(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), i = Rt(typeof r == "number"), a = Rt(), l = Rt(false), s = (d) => {
    l.value = d.matches;
  };
  return Dt(() => {
    if (i.value) {
      i.value = !n.value;
      const d = Go(e).split(",");
      l.value = d.some((c) => {
        const u = c.includes("not all"), p = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let f = !!(p || h);
        return p && f && (f = r >= cs(p[1])), h && f && (f = r <= cs(h[1])), u ? !f : f;
      });
      return;
    }
    n.value && (a.value = o.matchMedia(Go(e)), l.value = a.value.matches);
  }), Gi(a, "change", s, { passive: true }), B(() => l.value);
}
function A1(e = {}) {
  const { window: t = Aa, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: n = true, includeScrollbar: i = true, type: a = "inner" } = e, l = Rt(o), s = Rt(r), d = () => {
    if (t) if (a === "outer") l.value = t.outerWidth, s.value = t.outerHeight;
    else if (a === "visual" && t.visualViewport) {
      const { width: u, height: p, scale: h } = t.visualViewport;
      l.value = Math.round(u * h), s.value = Math.round(p * h);
    } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  d(), $1(d);
  const c = { passive: true };
  if (Gi("resize", d, c), t && a === "visual" && t.visualViewport && Gi(t.visualViewport, "resize", d, c), n) {
    const u = I1("(orientation: portrait)");
    Te(u, () => d());
  }
  return { width: l, height: s };
}
class US {
  constructor() {
    __publicField(this, "parser");
    __publicField(this, "platformContext");
    this.parser = new Eu(navigator.userAgent), this.platformContext = ku();
  }
  get isMobile() {
    return this.platformContext.isMobile;
  }
  get isTablet() {
    return this.platformContext.isTablet;
  }
  get isUnknown() {
    return typeof this.parser.getDevice().type > "u";
  }
  get browser() {
    return Ha() ? "Tauri" : this.platformContext.browser || "";
  }
  get engine() {
    return this.parser.getEngine().name || "";
  }
  get os() {
    return this.platformContext.os || "";
  }
  get context() {
    return this.platformContext;
  }
  get isTauri() {
    return Ha();
  }
  get isWeb() {
    const t = this.platformContext.environment;
    return t === "web" || t === "mobile_web";
  }
}
class M1 {
  constructor(t = [], o = Ps(), r = fo()) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routesInternal");
    this.id = o, this.meta = r ?? fo(), this.routesInternal = t;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = fo()), this.meta.name;
  }
  set name(t) {
    (this.meta === null || this.meta === void 0) && (this.meta = fo()), this.meta.name = t;
  }
  get routes() {
    return Zt(this.routesInternal);
  }
  set routes(t) {
    this.routesInternal = Zt(t);
  }
  findRoute(t) {
    return this.routesInternal.find((o) => o.id === t);
  }
  existRoute(t) {
    return this.routesInternal.some((o) => o.id === t);
  }
  addRoute(t) {
    if (this.existRoute(t.id)) throw new Error(`[CartoSketch.Route] Route ${t.id} already exist`);
    this.routesInternal.push(Zt(t)), this.updateModificationTime();
  }
  updateRoute(t) {
    const o = this.routesInternal.findIndex((r) => r.id === t.id);
    if (o === -1) throw new Error(`[CartoSketch.Route] Route ${t.id} not found`);
    this.routesInternal[o] = Zt(t), this.updateModificationTime();
  }
  removeRoute(t) {
    const o = this.routesInternal.findIndex((r) => r.id === t);
    o !== -1 && (this.routesInternal.splice(o, 1), this.updateModificationTime());
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: "FeatureCollection", features: this.routesInternal.map((t) => t.exportAsGeoJSON()), properties: this.meta };
  }
  exportToStorage() {
    return Object.freeze({ id: this.id, meta: this.meta, routes: this.routesInternal.map((t) => t.exportToStorage()) });
  }
}
class ds {
  constructor(t = Ps(), o = [], r = {}, n) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "properties");
    __publicField(this, "points");
    this.id = t, this.meta = { ...fo(), record_timespan: 0, ...n }, this.properties = r, this.points = o;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = fo()), this.meta.name;
  }
  set name(t) {
    (this.meta === null || this.meta === void 0) && (this.meta = fo()), this.meta.name = t;
  }
  get distance() {
    return this.meta.distance ?? 0;
  }
  set distance(t) {
    this.meta.distance = t;
  }
  get recordTimespan() {
    return this.meta.record_timespan ?? 0;
  }
  set recordTimespan(t) {
    this.meta.record_timespan = t;
  }
  setPoints(t) {
    this.points = Zt(t), this.updateModificationTime();
  }
  appendPoint(t) {
    this.points.push(Zt(t)), this.updateModificationTime();
  }
  getPoints() {
    return Zt(this.points);
  }
  setProperties(t) {
    const o = Zt(t);
    Object.assign(this.properties, o), this.updateModificationTime();
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: "Feature", properties: { ...this.properties, ...this.meta, description: JSON.stringify({ name: this.meta.name, id: this.id }) }, geometry: { type: "LineString", coordinates: this.points.map((t) => [t.longitude, t.latitude]) } };
  }
  exportToStorage() {
    return Zt({ id: this.id, meta: this.meta, properties: this.properties, points: this.points });
  }
}
var Re = ((e) => (e.MIGRATION_FAILED = "MIGRATION_FAILED", e.INVALID_VERSION = "INVALID_VERSION", e.UNSUPPORTED_VERSION = "UNSUPPORTED_VERSION", e.ROLLBACK_FAILED = "ROLLBACK_FAILED", e.VALIDATION_FAILED = "VALIDATION_FAILED", e.STRATEGY_NOT_FOUND = "STRATEGY_NOT_FOUND", e.DATA_CORRUPTION = "DATA_CORRUPTION", e))(Re || {});
class Me extends Tu {
  constructor(t, o = "MIGRATION_FAILED", r) {
    super(t, r);
    __publicField(this, "code");
    __publicField(this, "domain", zu.GENERIC);
    this.code = o;
  }
}
class Bt extends Me {
  constructor(t, o = "INVALID_VERSION", r, n, i) {
    super(t, o, i), this.currentVersion = r, this.targetVersion = n;
  }
}
class ye extends Me {
  constructor(t, o, r, n) {
    super(t, "VALIDATION_FAILED", n), this.field = o, this.value = r;
  }
}
class us extends Me {
  constructor(t, o, r) {
    super(t, "DATA_CORRUPTION", r), this.corruptedData = o;
  }
}
class B1 extends Me {
  constructor(t, o, r, n) {
    super(t, "ROLLBACK_FAILED", n), this.originalError = o, this.rollbackError = r;
  }
}
class mr {
  static getCurrentVersion() {
    return this.CURRENT_VERSION;
  }
  static getMinimumSupportedVersion() {
    return this.MIN_SUPPORTED_VERSION;
  }
  static extractVersion(t) {
    try {
      if (typeof t == "object" && t !== null && "version" in t) {
        const o = t.version;
        if (typeof o == "number" && o >= 0) return qe(o);
      }
      if (this.isRouteCollectionFormat(t)) return qe(0);
      if (this.isSketchArrayFormat(t)) return qe(1);
      throw new Error("Unable to determine data version");
    } catch (o) {
      const r = o instanceof Bt ? o : new Bt(`Failed to extract version from data: ${String(o)}`, Re.INVALID_VERSION, void 0, void 0, o instanceof Error ? o : new Error(String(o)));
      return ve(r);
    }
  }
  static isRouteCollectionFormat(t) {
    return typeof t == "object" && t !== null && "routes" in t && !("sketches" in t) && Array.isArray(t.routes);
  }
  static isSketchArrayFormat(t) {
    return Array.isArray(t) && t.length > 0 && this.isSketchObject(t[0]);
  }
  static isSketchObject(t) {
    return typeof t == "object" && t !== null && "id" in t && "meta" in t && "routes" in t && "drafts" in t;
  }
  static validateVersion(t) {
    try {
      if (t < this.MIN_SUPPORTED_VERSION) throw new Bt(`Version ${t} is below minimum supported version ${this.MIN_SUPPORTED_VERSION}`, Re.UNSUPPORTED_VERSION, t);
      if (t > this.CURRENT_VERSION) throw new Bt(`Version ${t} is above current version ${this.CURRENT_VERSION}`, Re.UNSUPPORTED_VERSION, t, this.CURRENT_VERSION);
      return qe(void 0);
    } catch (o) {
      const r = o instanceof Bt ? o : new Bt(`Version validation failed: ${String(o)}`, Re.INVALID_VERSION, t, void 0, o instanceof Error ? o : new Error(String(o)));
      return ve(r);
    }
  }
  static addVersionMetadata(t, o = this.CURRENT_VERSION) {
    return { ...t, [this.VERSION_KEY]: { version: o, timestamp: Date.now(), description: `Version ${o} data format` } };
  }
  static extractVersionMetadata(t) {
    try {
      if (typeof t == "object" && t !== null && this.VERSION_KEY in t) {
        const o = t[this.VERSION_KEY];
        if (this.isValidVersionInfo(o)) return qe(o);
      }
      return qe(null);
    } catch (o) {
      const r = o instanceof Bt ? o : new Bt(`Failed to extract version metadata: ${String(o)}`, Re.INVALID_VERSION, void 0, void 0, o instanceof Error ? o : new Error(String(o)));
      return ve(r);
    }
  }
  static isValidVersionInfo(t) {
    return typeof t == "object" && t !== null && "version" in t && "timestamp" in t && typeof t.version == "number" && typeof t.timestamp == "number";
  }
  static determineMigrationPath(t, o) {
    try {
      const r = this.validateVersion(t);
      if (r.isErr()) throw r.error;
      const n = this.validateVersion(o);
      if (n.isErr()) throw n.error;
      if (t === o) return qe([]);
      const i = [], a = t < o ? 1 : -1;
      for (let l = t; l !== o; l += a) i.push(l + a);
      return qe(i);
    } catch (r) {
      const n = r instanceof Bt ? r : new Bt(`Failed to determine migration path: ${String(r)}`, Re.INVALID_VERSION, t, o, r instanceof Error ? r : new Error(String(r)));
      return ve(n);
    }
  }
  static isMigrationNeeded(t) {
    return this.extractVersion(t).map((o) => o !== this.CURRENT_VERSION);
  }
}
__publicField(mr, "CURRENT_VERSION", 1);
__publicField(mr, "VERSION_KEY", "_data_version");
__publicField(mr, "MIN_SUPPORTED_VERSION", 0);
class Qt {
  static validateSketchData(t) {
    try {
      if (!t || typeof t != "object") throw new ye("Sketch data must be an object", "data", t);
      const o = t, r = ["id", "meta", "routes", "drafts"];
      for (const i of r) if (!(i in o)) throw new ye(`Missing required field: ${i}`, i, o[i]);
      if (typeof o.id != "string" || !o.id) throw new ye("Sketch ID must be a non-empty string", "id", o.id);
      if (!o.meta || typeof o.meta != "object") throw new ye("Sketch meta must be an object", "meta", o.meta);
      const n = this.validateRouteCollectionData(o.routes);
      if (n.isErr()) throw n.error;
      if (!o.drafts || typeof o.drafts != "object") throw new ye("Sketch drafts must be an object", "drafts", o.drafts);
      return qe(o);
    } catch (o) {
      if (o instanceof ye) return ve(o);
      const r = new ye(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return ve(r);
    }
  }
  static validateRouteCollectionData(t) {
    try {
      if (!t || typeof t != "object") throw new ye("Route collection data must be an object", "data", t);
      const o = t, r = ["id", "meta", "routes"];
      for (const n of r) if (!(n in o)) throw new ye(`Missing required field: ${n}`, n, o[n]);
      if (typeof o.id != "string" || !o.id) throw new ye("Route collection ID must be a non-empty string", "id", o.id);
      if (!o.meta || typeof o.meta != "object") throw new ye("Route collection meta must be an object", "meta", o.meta);
      if (!Array.isArray(o.routes)) throw new ye("Routes must be an array", "routes", o.routes);
      for (let n = 0; n < o.routes.length; n++) {
        const i = o.routes[n], a = this.validateRouteItem(i);
        if (a.isErr()) throw new ye(`Invalid route at index ${n}: ${a.error.message}`, `routes[${n}]`, i, a.error);
      }
      return qe(o);
    } catch (o) {
      if (o instanceof ye) return ve(o);
      const r = new ye(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return ve(r);
    }
  }
  static validateRouteItem(t) {
    try {
      if (!t || typeof t != "object") throw new ye("Route item must be an object", "data", t);
      const o = t, r = ["id", "meta", "properties", "points"];
      for (const n of r) if (!(n in o)) throw new ye(`Missing required field: ${n}`, n, o[n]);
      if (typeof o.id != "string" || !o.id) throw new ye("Route item ID must be a non-empty string", "id", o.id);
      if (!Array.isArray(o.points)) throw new ye("Route points must be an array", "points", o.points);
      for (let n = 0; n < o.points.length; n++) {
        const i = o.points[n];
        if (!i || typeof i != "object") throw new ye(`Route point at index ${n} must be an object`, `points[${n}]`, i);
        const a = i;
        if (typeof a.latitude != "number" || typeof a.longitude != "number") throw new ye(`Route point at index ${n} must have numeric latitude and longitude`, `points[${n}]`, i);
      }
      return qe(o);
    } catch (o) {
      if (o instanceof ye) return ve(o);
      const r = new ye(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return ve(r);
    }
  }
  static validateSketchArray(t) {
    try {
      if (!Array.isArray(t)) throw new ye("Sketch array must be an array", "data", t);
      if (t.length === 0) throw new ye("Sketch array cannot be empty", "data.length", t.length);
      for (let o = 0; o < t.length; o++) {
        const r = t[o], n = this.validateSketchData(r);
        if (n.isErr()) throw new ye(`Invalid sketch at index ${o}: ${n.error.message}`, `[${o}]`, r, n.error);
      }
      return qe(t);
    } catch (o) {
      if (o instanceof ye) return ve(o);
      const r = new ye(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return ve(r);
    }
  }
  static validateData(t, o) {
    switch (o) {
      case "sketch":
        return this.validateSketchData(t);
      case "route-collection":
        return this.validateRouteCollectionData(t);
      case "sketch-array":
        return this.validateSketchArray(t);
      default:
        return ve(new ye(`Unknown expected format: ${String(o)}`, "expectedFormat", o));
    }
  }
  static checkDataIntegrity(t, o) {
    try {
      const r = this.validateData(t, o);
      return r.isErr() ? ve(new us(`Data validation failed: ${r.error.message}`, t, r.error)) : qe({ isValid: true, errors: [], warnings: [] });
    } catch (r) {
      return ve(new us(`Data integrity check failed: ${String(r)}`, t, r instanceof Error ? r : new Error(String(r))));
    }
  }
}
class O1 {
  constructor() {
    __publicField(this, "fromVersion", 0);
    __publicField(this, "toVersion", 1);
    __publicField(this, "name", "route-collection-to-sketch");
  }
  migrate(t) {
    try {
      const o = Qt.validateRouteCollectionData(t);
      if (o.isErr()) return ve(new Me(`Invalid route collection data: ${o.error.message}`, Re.VALIDATION_FAILED, o.error));
      const r = o.value, n = new wo();
      n.meta.name = r.meta.name || "Migrated Routes", n.meta.description = r.meta.description || "Migrated from route collection", n.meta.creation_timestamp = r.meta.creation_timestamp, n.meta.modification_timestamp = Date.now(), n.routes = r;
      const i = [n.toStorage()];
      return qe(i);
    } catch (o) {
      return ve(new Me(`Route collection to sketch migration failed: ${String(o)}`, Re.MIGRATION_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  rollback(t) {
    try {
      const o = Qt.validateSketchArray(t);
      if (o.isErr()) return ve(new Me(`Invalid sketch array data for rollback: ${o.error.message}`, Re.VALIDATION_FAILED, o.error));
      const r = o.value;
      if (r.length === 0) return ve(new Me("Cannot rollback: empty sketch array", Re.MIGRATION_FAILED));
      const n = r[0];
      return qe(n.routes);
    } catch (o) {
      return ve(new Me(`Route collection to sketch rollback failed: ${String(o)}`, Re.ROLLBACK_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  validateBefore(t) {
    return Qt.validateRouteCollectionData(t).map(() => {
    }).mapErr((o) => new ye(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return Qt.validateSketchArray(t).map(() => {
    }).mapErr((o) => new ye(`Post-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
}
class F1 {
  constructor() {
    __publicField(this, "fromVersion", 1);
    __publicField(this, "toVersion", 2);
    __publicField(this, "name", "sketch-v1-to-v2");
  }
  migrate() {
    return ve(new Me("Sketch V1 to V2 migration not yet implemented", Re.STRATEGY_NOT_FOUND));
  }
  validateBefore(t) {
    return Qt.validateSketchArray(t).map(() => {
    }).mapErr((o) => new ye(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return ve(new ye("Sketch V2 validation not yet implemented", void 0, t));
  }
}
const _L1 = class _L1 {
  static register(t) {
    const o = this.getStrategyKey(t.fromVersion, t.toVersion);
    this.strategies.set(o, t);
  }
  static getStrategy(t, o) {
    const r = this.getStrategyKey(t, o), n = this.strategies.get(r);
    return n ? qe(n) : ve(new Me(`No migration strategy found for version ${t} to ${o}`, Re.STRATEGY_NOT_FOUND));
  }
  static getAllStrategies() {
    return Array.from(this.strategies.values());
  }
  static hasStrategy(t, o) {
    const r = this.getStrategyKey(t, o);
    return this.strategies.has(r);
  }
  static getStrategyKey(t, o) {
    return `${t}->${o}`;
  }
};
__publicField(_L1, "strategies", /* @__PURE__ */ new Map());
_L1.register(new O1()), _L1.register(new F1());
let L1 = _L1;
class D1 {
  static createStrategy(t, o) {
    return L1.getStrategy(t, o);
  }
  static createStrategiesForPath(t) {
    try {
      const o = [];
      for (let r = 0; r < t.length; r++) {
        const n = r === 0 ? t[0] - 1 : t[r - 1], i = t[r], a = this.createStrategy(n, i);
        if (a.isErr()) return ve(a.error);
        o.push(a.value);
      }
      return qe(o);
    } catch (o) {
      return ve(new Me(`Failed to create strategies for migration path: ${String(o)}`, Re.MIGRATION_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
}
class H1 {
  static isMigrationNeeded(t) {
    return mr.isMigrationNeeded(t);
  }
  static getDataVersion(t) {
    return mr.extractVersion(t);
  }
  static migrateToCurrent(t, o = {}) {
    return this.migrateToVersion(t, mr.getCurrentVersion(), o);
  }
  static migrateToVersion(t, o, r = {}) {
    try {
      const n = { ...this.DEFAULT_OPTIONS, ...r }, i = mr.extractVersion(t);
      if (i.isErr()) return ve(new Me(`Failed to extract current version: ${i.error.message}`, Re.INVALID_VERSION, i.error));
      const a = i.value;
      if (a === o) return qe({ data: t, fromVersion: a, toVersion: o, migratedVersions: [] });
      const l = mr.determineMigrationPath(a, o);
      if (l.isErr()) return ve(new Me(`Failed to determine migration path: ${l.error.message}`, Re.INVALID_VERSION, l.error));
      const s = l.value, d = D1.createStrategiesForPath(s);
      if (d.isErr()) return ve(d.error);
      const c = d.value;
      if (n.validateBefore) {
        const f = this.validateDataBeforeMigration(t, a);
        if (f.isErr()) return ve(new Me(`Pre-migration validation failed: ${f.error.message}`, Re.VALIDATION_FAILED, f.error));
      }
      const u = n.enableRollback ? t : void 0;
      let p = t;
      const h = [];
      for (const f of c) {
        const g = this.executeMigrationWithRetry(f, p, n);
        if (g.isErr()) {
          if (n.enableRollback && u) {
            const v = this.rollbackToVersion(u);
            if (v.isErr()) return ve(new B1(`Migration failed and rollback also failed: ${v.error.message}`, g.error, v.error));
          }
          return ve(g.error);
        }
        p = g.value, h.push(f.toVersion);
      }
      if (n.validateAfter) {
        const f = this.validateDataAfterMigration(p, o);
        if (f.isErr()) return ve(new Me(`Post-migration validation failed: ${f.error.message}`, Re.VALIDATION_FAILED, f.error));
      }
      return qe({ data: p, fromVersion: a, toVersion: o, migratedVersions: h, rollbackData: n.enableRollback ? u : void 0 });
    } catch (n) {
      return ve(new Me(`Migration service error: ${String(n)}`, Re.MIGRATION_FAILED, n instanceof Error ? n : new Error(String(n))));
    }
  }
  static executeMigrationWithRetry(t, o, r) {
    let n = null;
    for (let i = 0; i <= (r.maxRetries || 0); i++) {
      try {
        const a = t.migrate(o);
        if (a.isErr()) {
          n = a.error;
          continue;
        }
        if (t.validateAfter) {
          const l = t.validateAfter(a.value);
          if (l.isErr()) {
            n = new Me(`Post-migration validation failed: ${l.error.message}`, Re.VALIDATION_FAILED, l.error);
            continue;
          }
        }
        return qe(a.value);
      } catch (a) {
        n = new Me(`Migration attempt ${i + 1} failed: ${String(a)}`, Re.MIGRATION_FAILED, a instanceof Error ? a : new Error(String(a)));
      }
      i < (r.maxRetries || 0) && r.retryDelay && console.warn(`Migration failed, retrying in ${r.retryDelay}ms...`);
    }
    return ve(n || new Me("Migration failed after all retry attempts", Re.MIGRATION_FAILED));
  }
  static rollbackToVersion(t) {
    try {
      return qe(t);
    } catch (o) {
      return ve(new Me(`Rollback failed: ${String(o)}`, Re.ROLLBACK_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  static validateDataBeforeMigration(t, o) {
    switch (o) {
      case 0:
        return Qt.validateRouteCollectionData(t).map(() => {
        }).mapErr((r) => new Me(`Route collection validation failed: ${r.message}`, Re.VALIDATION_FAILED, r));
      case 1:
        return Qt.validateSketchArray(t).map(() => {
        }).mapErr((r) => new Me(`Sketch array validation failed: ${r.message}`, Re.VALIDATION_FAILED, r));
      default:
        return ve(new Me(`Unknown version for pre-migration validation: ${o}`, Re.VALIDATION_FAILED));
    }
  }
  static validateDataAfterMigration(t, o) {
    return o === 1 ? Qt.validateSketchArray(t).map(() => {
    }).mapErr((r) => new Me(`Sketch array validation failed: ${r.message}`, Re.VALIDATION_FAILED, r)) : ve(new Me(`Unknown version for post-migration validation: ${o}`, Re.VALIDATION_FAILED));
  }
  static checkDataIntegrity(t, o) {
    return Qt.checkDataIntegrity(t, o);
  }
}
__publicField(H1, "DEFAULT_OPTIONS", { validateBefore: true, validateAfter: true, enableRollback: true, maxRetries: 3, retryDelay: 1e3 });
const _Vo = class _Vo {
  constructor() {
    __publicField(this, "routeCache", /* @__PURE__ */ new Map());
    __publicField(this, "cacheTimeout", 5e3);
    __publicField(this, "maxCacheSize", Iu.MAX_CACHE_SIZE);
    __publicField(this, "evictionInProgress", false);
  }
  static getInstance() {
    return _Vo.instance || (_Vo.instance = new _Vo()), _Vo.instance;
  }
  async getRoute(t) {
    const o = this.routeCache.get(t);
    if (o && Date.now() - o.timestamp < this.cacheTimeout) return o.accessCount++, o.isEvictionCandidate = false, o.route;
    const r = await this.getMainRoute(t);
    if (!r) return null;
    const i = await jo.getUnmergedEntries(t) ?? [];
    if (i.length === 0) return this.addToCache(t, r), r;
    const a = await this.combineRouteWithLog(r, i);
    return this.addToCache(t, a), a;
  }
  addToCache(t, o) {
    this.routeCache.size >= this.maxCacheSize && (this.evictionInProgress || this.evictOldestEntry()), this.routeCache.set(t, { route: o, timestamp: Date.now(), accessCount: 1, isEvictionCandidate: false });
  }
  evictOldestEntry() {
    if (!this.evictionInProgress) {
      this.evictionInProgress = true;
      try {
        let t = null, o = 1 / 0, r = 1 / 0;
        for (const [n, i] of this.routeCache.entries()) i.isEvictionCandidate !== false && (i.accessCount < o || i.accessCount === o && i.timestamp < r) && (t = n, o = i.accessCount, r = i.timestamp);
        t && this.routeCache.delete(t);
      } finally {
        this.evictionInProgress = false;
      }
    }
  }
  async getMainRoute(t) {
    const o = await ct("sketches");
    if (!o) return null;
    const r = o.map((n) => wo.fromStorage(n));
    for (const n of r) {
      const i = n.routes.routes.find((a) => a.id === t);
      if (i) return i;
    }
    return null;
  }
  async combineRouteWithLog(t, o) {
    var _a2;
    const r = o.map((s) => s.point), n = [...t.points, ...r];
    let i = 0;
    for (let s = 1; s < o.length; s++) {
      const d = o[s - 1].point, c = o[s].point;
      i += _a({ longitude: d.longitude, latitude: d.latitude }, { longitude: c.longitude, latitude: c.latitude });
    }
    o.length > 0 && t.points.length > 0 && (i += _a({ longitude: t.points[t.points.length - 1].longitude, latitude: t.points[t.points.length - 1].latitude }, { longitude: o[0].point.longitude, latitude: o[0].point.latitude }));
    const l = (t.meta.distance || 0) + i;
    return { ...t, points: n, meta: { ...t.meta, distance: l, modification_timestamp: Math.max(t.meta.modification_timestamp, ((_a2 = o[o.length - 1]) == null ? void 0 : _a2.timestamp) || 0) } };
  }
  invalidateCache(t) {
    this.routeCache.delete(t);
  }
  clearCache() {
    this.routeCache.clear();
  }
  getCachedRoute(t) {
    const o = this.routeCache.get(t);
    return o && Date.now() - o.timestamp < this.cacheTimeout ? o.route : null;
  }
};
__publicField(_Vo, "instance");
let Vo = _Vo;
const fs = Vo.getInstance();
const _qo = class _qo {
  constructor() {
  }
  static getInstance() {
    return _qo.instance || (_qo.instance = new _qo()), _qo.instance;
  }
  async recover() {
    console.info("[CrashRecovery] Starting recovery process...");
    const t = [];
    let o = 0, r = 0;
    try {
      const n = await this.findPendingBatches();
      for (const a of n) try {
        await this.recoverMerge(a.routeId, a.id), o++, t.push(`Route ${a.routeId}: recovered merge ${a.id}`);
      } catch (l) {
        r++;
        const s = l instanceof Error ? l.message : "Unknown error";
        t.push(`Route ${a.routeId}: failed to recover merge - ${s}`), console.error(`[CrashRecovery] Failed to recover merge for route ${a.routeId}:`, l);
      }
      const i = await ct("wal:activeRoutes") || [];
      for (const a of i) try {
        await this.validateRouteLog(a);
      } catch (l) {
        r++;
        const s = l instanceof Error ? l.message : "Unknown error";
        t.push(`Route ${a}: validation failed - ${s}`), console.error(`[CrashRecovery] Failed to validate route ${a}:`, l);
      }
      await this.rebuildStatistics(), console.info(`[CrashRecovery] Recovery complete: ${o} recovered, ${r} failed`);
    } catch (n) {
      console.error("[CrashRecovery] Fatal error during recovery:", n), t.push(`Fatal error: ${String(n)}`);
    }
    return { recoveredRoutes: o, failedRoutes: r, details: t };
  }
  async findPendingBatches() {
    const t = await ct("wal:activeRoutes") || [], o = [];
    for (const r of t) {
      const n = await jo.getMetadata(r);
      if (n && n.unmergedCount > 0) {
        const i = await this.findBatchesForRoute(r);
        for (const a of i) {
          const l = await ct(`route:${r}:batches:${a}`);
          l && l.status === "pending" && o.push(l);
        }
      }
    }
    return o;
  }
  async findBatchesForRoute(t) {
    const o = [], r = `route:${t}:batches:`, n = 1e3;
    let i = 0;
    const a = 10;
    for (let l = 0; l < n && i < a; l++) await ct(`${r}${l}`) ? (o.push(`${l}`), i = 0) : i++;
    return o.length > 0 && console.debug(`[CrashRecovery] Found ${o.length} batch(es) for route ${t}`), o;
  }
  async recoverMerge(t, o) {
    console.info(`[CrashRecovery] Recovering merge for route ${t}, batch ${o}`);
    const r = await ct(`route:${t}:batches:${o}`);
    if (!r || r.status !== "pending") return;
    if (!await jo.getMetadata(t)) throw r.status = "failed", r.error = `No metadata found for route ${t}`, await Ae(`route:${t}:batches:${r.id}`, r), new Error(r.error);
    const a = (await ct(`route:${t}:log`) || []).filter((l) => !l.merged);
    if (a.length === 0) {
      r.status = "completed", await Ae(`route:${t}:batches:${r.id}`, r);
      return;
    }
    try {
      console.info(`[CrashRecovery] Re-executing merge for ${a.length} entries`), await Au.mergeRoute(t), r.status = "completed", await Ae(`route:${t}:batches:${r.id}`, r);
    } catch (l) {
      throw r.status = "failed", r.error = l instanceof Error ? l.message : "Unknown error during merge recovery", await Ae(`route:${t}:batches:${r.id}`, r), l;
    }
  }
  async validateRouteLog(t) {
    const [o, r] = await Promise.all([ct(`route:${t}:log`), jo.getMetadata(t)]);
    if (!o || !r || !Array.isArray(o)) {
      console.warn(`[CrashRecovery] Corrupted or missing data for route ${t}, attempting rebuild`), await this.rebuildRouteLog(t);
      return;
    }
    const n = o.filter((a) => !a.merged).length;
    n !== r.unmergedCount && (console.warn(`[CrashRecovery] Count mismatch for route ${t}: expected ${r.unmergedCount}, found ${n}`), r.unmergedCount = n, await Ae(`route:${t}:metadata`, r));
    const i = [...o].sort((a, l) => a.sequence - l.sequence);
    this.validateSequenceContinuity(i);
  }
  validateSequenceContinuity(t) {
    if (t.length === 0) return;
    const o = /* @__PURE__ */ new Map();
    for (const n of t) o.has(n.sequence) || o.set(n.sequence, []), o.get(n.sequence).push(n);
    const r = [];
    for (let n = 1; n < t.length; n++) {
      const i = t[n].sequence, a = t[n - 1].sequence;
      i !== a + 1 && (console.warn(`[CrashRecovery] Sequence issue at index ${n}: ${a} -> ${i}`), r.push(n));
    }
    for (let n = r.length - 1; n >= 0; n--) {
      const i = r[n];
      this.fixSequenceGap(t, i, o);
    }
  }
  fixSequenceGap(t, o, r) {
    const n = t[o - 1].sequence + 1, i = r.get(n);
    if (i && i.length > 1) {
      console.info(`[CrashRecovery] Found ${i.length} entries with sequence ${n}, keeping first`);
      const a = i.slice(1);
      for (const l of a) {
        const s = t.indexOf(l);
        s !== -1 && t.splice(s, 1);
      }
    } else if (!i || i.length === 0) {
      console.info(`[CrashRecovery] Inserting placeholder entry for missing sequence ${n}`);
      const a = { id: crypto.randomUUID(), routeId: t[0].routeId, point: t[o - 1].point, timestamp: Date.now(), sequence: n, merged: false };
      t.splice(o, 0, a), r.set(n, [a]);
    }
  }
  async rebuildRouteLog(t) {
    console.info(`[CrashRecovery] Rebuilding route log for ${t}`);
    const o = await jo.getMetadata(t);
    o && (o.unmergedCount = 0, o.lastSequence = 0, await Ae(`route:${t}:metadata`, o)), await Ae(`route:${t}:log`, []);
  }
  async rebuildStatistics() {
    const t = await ct("wal:activeRoutes") || [];
    let o = 0;
    for (const r of t) {
      const n = await ct(`route:${r}:log`) || [];
      o += n.length;
    }
    await Ae("wal:lastMergeTime", Date.now()), await Ae("wal:statistics", { writesPerSecond: 0, averageLogSize: t.length > 0 ? o / t.length : 0, mergeDuration: 0 });
  }
};
__publicField(_qo, "instance");
let qo = _qo;
const _1 = qo.getInstance(), N1 = Ss("sketches", () => {
  const e = W([]), t = W(null), o = W(null), r = B(() => {
    if (!t.value) return null;
    const y = e.value.find((A) => A.id === t.value);
    return y ? new M1(y.routes.routes.map((A) => new ds(A.id, A.points, A.properties, A.meta)), y.routes.id, y.routes.meta) : null;
  }), n = B(() => r.value ? r.value.routes.map((y) => ({ id: y.id, name: y.name, points: y.getPoints(), meta: y.meta })) : []), i = B(() => t.value && e.value.find((y) => y.id === t.value) || null), a = B(() => i.value ? i.value.drafts.drafts : []);
  async function l() {
    const y = await ct("sketches");
    if (y) {
      const A = H1.migrateToCurrent(y, { validateBefore: true, validateAfter: true, enableRollback: true });
      if (A.isErr()) {
        console.error("[SketchStore] Data migration failed:", A.error), await c();
        return;
      }
      const T = A.value;
      if (T.migratedVersions.length > 0 && console.info(`[SketchStore] Successfully migrated data from version ${T.fromVersion} to ${T.toVersion}`), Array.isArray(T.data)) {
        e.value = T.data.map((j) => wo.fromStorage(j));
        const z = [];
        e.value.forEach((j) => {
          j.routes.routes.forEach((F) => {
            F.points.length > 1 && !F.meta.distance && z.push((async () => {
              try {
                F.meta.distance = await qn(F.points);
              } catch (U) {
                console.warn("Failed to calculate route distance:", U), F.meta.distance = 0;
              }
            })());
          });
        }), await Promise.all(z), !t.value && e.value.length > 0 && (t.value = e.value[0].id);
      } else await c();
    } else await c();
    await s();
  }
  async function s() {
    try {
      await ct("wal:initialized") || (console.info("[SketchStore] Initializing WAL system..."), await d(), await Ae("wal:initialized", true), await Ae("wal:version", 1), console.info("[SketchStore] WAL system initialized")), console.info("[SketchStore] Running crash recovery...");
      const A = await _1.recover();
      A.failedRoutes > 0 ? console.warn("[SketchStore] Crash recovery completed with failures:", A.details) : console.info("[SketchStore] Crash recovery completed successfully");
    } catch (y) {
      console.error("[SketchStore] Failed to initialize WAL:", y);
    }
  }
  async function d() {
    const y = await ct("sketches");
    y && await Ae("sketches:backup:pre-wal", y);
    const A = await ct("sketches");
    if (!A) return;
    const T = A.map((j) => wo.fromStorage(j)), z = [];
    for (const j of T) for (const F of j.routes.routes) await Ae(`route:${F.id}:metadata`, F.meta), z.push(F.id);
    await Ae("wal:activeRoutes", z);
  }
  async function c() {
    const y = new wo();
    y.meta.name = "Default Sketch", e.value = [y], t.value = y.id, await Ae("sketches", e.value.map((A) => A.toStorage())), await wt();
  }
  async function u(y = "New Sketch") {
    const A = new wo();
    return A.meta.name = y, e.value.push(A), await Ae("sketches", e.value.map((T) => T.toStorage())), await wt(), A;
  }
  async function p(y, A) {
    const T = e.value.find((z) => z.id === y);
    T && (A.name !== void 0 && T.updateName(A.name), A.description !== void 0 && T.updateDescription(A.description), A.tags !== void 0 && (T.meta.tags.forEach((z) => {
      T.removeTag(z);
    }), A.tags.forEach((z) => {
      T.addTag(z);
    })), await Ae("sketches", e.value.map((z) => z.toStorage())), await wt());
  }
  async function h(y) {
    const A = e.value.findIndex((T) => T.id === y);
    A !== -1 && (e.value.splice(A, 1), t.value === y && (t.value = e.value.length > 0 ? e.value[0].id : null), await Ae("sketches", e.value.map((T) => T.toStorage())), await wt());
  }
  function f(y) {
    t.value = y, o.value = null;
  }
  async function g(y, A = {}, T = {}) {
    i.value || await c();
    const z = new ds(void 0, [], A, T);
    return z.meta.name = y, i.value && i.value.routes.routes.push(z.exportToStorage()), await Ae("sketches", e.value.map((j) => j.toStorage())), await wt(), z;
  }
  async function v(y) {
    if (!i.value) return;
    const A = i.value.routes.routes.findIndex((T) => T.id === y);
    A !== -1 && (i.value.routes.routes.splice(A, 1), o.value === y && (o.value = null), await Ae("sketches", e.value.map((T) => T.toStorage())), await wt());
  }
  async function m(y, A) {
    if (!i.value) return;
    const T = i.value.routes.routes.find((j) => j.id === y);
    if (!T) return;
    if (T.points.push(A), T.meta.modification_timestamp = Date.now(), T.points.length > 1) try {
      if (T.meta.distance === void 0) {
        const j = await qn(T.points);
        T.meta.distance = j;
      } else {
        const j = await qn([T.points[T.points.length - 2], A]);
        T.meta.distance += j;
      }
    } catch (j) {
      console.warn("Failed to calculate route distance:", j), T.meta.distance === void 0 && (T.meta.distance = 0);
    }
    const z = e.value.map((j) => j.toStorage());
    try {
      await jo.appendPoint(y, A), fs.invalidateCache(y);
    } catch (j) {
      console.error("[SketchStore] WAL append failed, rolling back in-memory state:", j);
      const F = z.map((ne) => wo.fromStorage(ne)), U = F.find((ne) => {
        var _a2;
        return ne.id === ((_a2 = i.value) == null ? void 0 : _a2.id);
      });
      throw U && U.routes.routes.findIndex((se) => se.id === y) !== -1 && (e.value = F, t.value = U.id), j;
    }
  }
  async function C(y, A) {
    if (!i.value) return;
    const T = i.value.routes.routes.find((z) => z.id === y);
    T && (A.meta !== void 0 && (T.meta = { ...T.meta, ...A.meta }), A.properties !== void 0 && (T.properties = { ...T.properties, ...A.properties }), T.meta.modification_timestamp = Date.now(), await Ae("sketches", e.value.map((z) => z.toStorage())), await wt());
  }
  async function S(y) {
    if (!i.value) return;
    const A = i.value.routes.routes.find((T) => T.id === y);
    A && (A.points = [], A.meta.modification_timestamp = Date.now(), await Ae("sketches", e.value.map((T) => T.toStorage())), await wt());
  }
  async function w(y) {
    return fs.getRoute(y);
  }
  function E(y) {
    o.value = y;
  }
  async function P(y, A = {}, T = {}) {
    i.value || await c();
    const z = { id: crypto.randomUUID(), meta: { ...fo(), ...T }, shape: y, properties: A };
    return i.value && i.value.drafts.drafts.push(z), await Ae("sketches", e.value.map((j) => j.toStorage())), await wt(), z;
  }
  async function x(y, A) {
    if (!i.value) return;
    const T = i.value.drafts.drafts.find((z) => z.id === y);
    T && (A.shape !== void 0 && (T.shape = A.shape), A.properties !== void 0 && (T.properties = { ...T.properties, ...A.properties }), A.meta !== void 0 && (T.meta = { ...T.meta, ...A.meta }, T.meta.modification_timestamp = Date.now()), await Ae("sketches", e.value.map((z) => z.toStorage())), await wt());
  }
  async function $(y) {
    if (!i.value) return;
    const A = i.value.drafts.drafts.findIndex((T) => T.id === y);
    A !== -1 && (i.value.drafts.drafts.splice(A, 1), await Ae("sketches", e.value.map((T) => T.toStorage())), await wt());
  }
  function R(y) {
    return i.value && i.value.drafts.drafts.find((A) => A.id === y) || null;
  }
  function O() {
    return i.value ? i.value.routes.routes.map((y) => y.id) : [];
  }
  function _() {
    return i.value ? i.value.drafts.drafts.map((y) => y.id) : [];
  }
  return { sketches: e, currentSketchId: t, currentRouteId: o, routeCollection: r, routes: n, currentSketch: i, currentDrafts: a, init: l, createSketch: u, updateSketch: p, deleteSketch: h, setCurrentSketchId: f, addRoute: g, deleteRoute: v, addPointToRoute: m, updateRoute: C, clearRoutePoints: S, getRouteById: w, setCurrentRouteId: E, listRouteIDs: O, addDraft: P, updateDraft: x, deleteDraft: $, getDraftById: R, listDraftIDs: _ };
}), W1 = { class: "container" }, j1 = { class: "prefix-icon" }, V1 = { class: "sketch-content" }, q1 = { class: "sketch-name" }, G1 = { key: 0, class: "tags" }, U1 = J({ __name: "SketchSelector", props: { list: { type: Array, default: () => [] }, activeId: { type: String, default: "" } }, emits: ["select", "remove"], setup(e, { emit: t }) {
  Mu((s) => ({ v34f1d56d: pe(r).primaryColorSuppl, f4fbc26a: pe(r).textColorBase }));
  const { t: o } = Xi(), r = h1(), n = e, i = t;
  function a(s) {
    i("select", s);
  }
  function l(s) {
    confirm(o("sketchEdit.deleteSketchConfirmation")) && i("remove", s);
  }
  return (s, d) => (Xe(), dt("div", W1, [Ye(pe(t1), { class: "select-listview", hoverable: "" }, { default: We(() => [(Xe(true), dt($t, null, vi(n.list, (c) => (Xe(), Er(pe(o1), { key: c.id, title: c.name, class: mi({ "active-item": c.id === n.activeId }), onClick: (u) => a(c.id) }, { prefix: We(() => [De("div", j1, [Ye(pe(En), { size: "20" }, { default: We(() => [Ye(pe(Zp))]), _: 1 })])]), suffix: We(() => [Ye(pe(Io), { quaternary: "", circle: "", size: "small", onClick: Ou((u) => l(c.id), ["stop"]) }, { icon: We(() => [Ye(pe(En), null, { default: We(() => [Ye(pe(Qp))]), _: 1 })]), _: 1 }, 8, ["onClick"])]), default: We(() => [De("div", V1, [De("div", q1, bn(c.name), 1), c.tags.length > 0 ? (Xe(), dt("div", G1, [(Xe(true), dt($t, null, vi(c.tags, (u) => (Xe(), Er(pe(jb), { key: u, size: "small", type: "info" }, { default: We(() => [zo(bn(u.toLocaleUpperCase()), 1)]), _: 2 }, 1024))), 128))])) : Bu("", true)])]), _: 2 }, 1032, ["title", "class", "onClick"]))), 128))]), _: 1 })]));
} }), K1 = Fu(U1, [["__scopeId", "data-v-13acc2e3"]]), Y1 = J({ __name: "SketchCreateModal", props: { show: { type: Boolean } }, emits: ["update:show", "created"], setup(e, { emit: t }) {
  const { t: o } = Xi(), r = N1(), n = e, i = t, a = W(""), l = W(""), s = () => {
    i("update:show", false), a.value = "", l.value = "";
  }, d = async () => {
    if (!a.value.trim()) return;
    const c = await r.createSketch(a.value);
    await r.updateSketch(c.id, { description: l.value }), r.setCurrentSketchId(c.id), i("created", c.id), s();
  };
  return (c, u) => (Xe(), Er(pe(Xx), { show: n.show, "mask-closable": true, preset: "card", style: { "max-width": "500px" }, title: pe(o)("sketchCentreView.newSketch"), onClose: s, onMaskClick: s }, { footer: We(() => [Ye(pe(MC), { justify: "end" }, { default: We(() => [Ye(pe(Io), { onClick: s }, { default: We(() => [zo(bn(pe(o)("sketchCentreView.cancel")), 1)]), _: 1 }), Ye(pe(Io), { type: "primary", onClick: d }, { default: We(() => [zo(bn(pe(o)("sketchCentreView.create")), 1)]), _: 1 })]), _: 1 })]), default: We(() => [Ye(pe(iw), { model: { name: a.value, description: l.value }, "label-placement": "top", "require-mark-placement": "right-hanging" }, { default: We(() => [Ye(pe(ss), { label: pe(o)("sketchCentreView.sketchName"), required: "" }, { default: We(() => [Ye(pe(Jl), { value: a.value, "onUpdate:value": u[0] || (u[0] = (p) => a.value = p), placeholder: pe(o)("sketchCentreView.sketchNamePlaceholder"), onKeyup: Lu(d, ["enter"]) }, null, 8, ["value", "placeholder"])]), _: 1 }, 8, ["label"]), Ye(pe(ss), { label: pe(o)("sketchCentreView.sketchDescription") }, { default: We(() => [Ye(pe(Jl), { value: l.value, "onUpdate:value": u[1] || (u[1] = (p) => l.value = p), type: "textarea", placeholder: pe(o)("sketchCentreView.sketchDescriptionPlaceholder"), autosize: { minRows: 3, maxRows: 5 } }, null, 8, ["value", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["show", "title"]));
} }), KS = J({ __name: "SelectorDrawer", props: { active: { type: Boolean, default: () => false }, placement: { type: String, default: () => "right" }, list: { type: Array, default: () => [] }, activeId: { type: String, default: () => "" } }, emits: ["update:active", "remove", "select", "import"], setup(e, { emit: t }) {
  const { t: o } = Xi(), { width: r } = A1(), n = e, i = B(() => [{ title: o("sketchEdit.import"), icon: tg, callback: () => {
    c("import");
  }, secondary: true, iconSize: 17, type: "default" }, { title: o("sketchEdit.new"), icon: Kp, callback: () => {
    l.value = true;
  }, secondary: true, iconSize: 20, type: "default" }, { title: o("sketchEdit.close"), icon: Gp, callback: () => {
    a.value = false;
  }, secondary: true, iconSize: 20, type: "error" }]), a = W(false), l = W(false), s = W(n.placement), d = B(() => r.value < 640 ? Math.min(r.value - 32, 400) : 502);
  Te(n, () => {
    a.value = n.active, s.value = n.placement;
  }, { deep: true }), Te(a, () => {
    c("update:active", a.value);
  });
  const c = t;
  return (u, p) => (Xe(), dt($t, null, [Ye(pe(SC), { show: a.value, "onUpdate:show": p[2] || (p[2] = (h) => a.value = h), width: d.value, placement: s.value, "auto-focus": false }, { default: We(() => [Ye(pe(PC), { title: pe(o)("sketchEdit.cartoSketchLibrary") }, { footer: We(() => [Ye(pe(I0), null, { default: We(() => [(Xe(true), dt($t, null, vi(i.value, (h) => (Xe(), Er(pe(Io), { key: h.title, secondary: h.secondary, type: h.type, title: h.title, onClick: h.callback }, { icon: We(() => [Ye(pe(En), { size: h.iconSize }, { default: We(() => [(Xe(), Er(Du(h.icon)))]), _: 2 }, 1032, ["size"])]), _: 2 }, 1032, ["secondary", "type", "title", "onClick"]))), 128))]), _: 1 })]), default: We(() => [Ye(K1, { list: e.list, "active-id": e.activeId, onRemove: p[0] || (p[0] = (h) => c("remove", h)), onSelect: p[1] || (p[1] = (h) => c("select", h)) }, null, 8, ["list", "active-id"])]), _: 1 }, 8, ["title"])]), _: 1 }, 8, ["show", "width", "placement"]), Ye(Y1, { show: l.value, "onUpdate:show": p[3] || (p[3] = (h) => l.value = h), onCreated: p[4] || (p[4] = (h) => c("select", h)) }, null, 8, ["show"])], 64));
} });
export {
  ki as $,
  q0 as A,
  bo as B,
  K0 as C,
  X0 as D,
  J0 as E,
  ox as F,
  nx as G,
  ax as H,
  lx as I,
  cx as J,
  fx as K,
  bx as L,
  zx as M,
  Ax as N,
  Ox as O,
  Hx as P,
  Vx as Q,
  yS as R,
  jx as S,
  Or as T,
  _x as U,
  Xx as V,
  ka as W,
  kS as X,
  Vg as Y,
  Gg as Z,
  Lx as _,
  X as a,
  Fr as a$,
  LS as a0,
  DS as a1,
  eC as a2,
  I as a3,
  V as a4,
  AS as a5,
  L as a6,
  H as a7,
  Pn as a8,
  ba as a9,
  ZC as aA,
  ry as aB,
  ay as aC,
  cy as aD,
  uy as aE,
  gy as aF,
  vy as aG,
  Cy as aH,
  wy as aI,
  Py as aJ,
  Ey as aK,
  Iy as aL,
  By as aM,
  Fy as aN,
  Dy as aO,
  Ny as aP,
  Vy as aQ,
  Ky as aR,
  Yy as aS,
  Tt as aT,
  vr as aU,
  q as aV,
  Vw as aW,
  Gw as aX,
  Xw as aY,
  r1 as aZ,
  Ze as a_,
  Ot as aa,
  Mn as ab,
  rt as ac,
  _S as ad,
  zt as ae,
  me as af,
  Y as ag,
  gt as ah,
  Wc as ai,
  Jo as aj,
  tC as ak,
  Dv as al,
  Wv as am,
  Nv as an,
  Vl as ao,
  Gv as ap,
  HS as aq,
  Yx as ar,
  rC as as,
  iC as at,
  lC as au,
  RC as av,
  TC as aw,
  FC as ax,
  NC as ay,
  GC as az,
  Jv as b,
  r0 as b$,
  gx as b0,
  ht as b1,
  FS as b2,
  Ai as b3,
  NS as b4,
  $b as b5,
  Ar as b6,
  mc as b7,
  PS as b8,
  ny as b9,
  xr as bA,
  Pc as bB,
  yn as bC,
  sS as bD,
  Pg as bE,
  _l as bF,
  vo as bG,
  rr as bH,
  Tv as bI,
  wS as bJ,
  Uc as bK,
  Ge as bL,
  Vr as bM,
  To as bN,
  qr as bO,
  IS as bP,
  Jt as bQ,
  fl as bR,
  Xg as bS,
  jl as bT,
  Vb as bU,
  jb as bV,
  wa as bW,
  Jb as bX,
  SS as bY,
  $S as bZ,
  jg as b_,
  ge as ba,
  p1 as bb,
  N1 as bc,
  h1 as bd,
  OS as be,
  jS as bf,
  KS as bg,
  oS as bh,
  qS as bi,
  US as bj,
  A1 as bk,
  Io as bl,
  En as bm,
  Xc as bn,
  Np as bo,
  nS as bp,
  Lp as bq,
  iS as br,
  aS as bs,
  rS as bt,
  VS as bu,
  BS as bv,
  Zi as bw,
  Ts as bx,
  ua as by,
  or as bz,
  Pt as c,
  pa as c$,
  tr as c0,
  _c as c1,
  ia as c2,
  sc as c3,
  ke as c4,
  nr as c5,
  od as c6,
  Y0 as c7,
  Ng as c8,
  Um as c9,
  wn as cA,
  Q0 as cB,
  Nr as cC,
  Ir as cD,
  rd as cE,
  jm as cF,
  Bn as cG,
  nd as cH,
  RS as cI,
  id as cJ,
  to as cK,
  ad as cL,
  Br as cM,
  Gm as cN,
  ta as cO,
  mx as cP,
  Bv as cQ,
  Lr as cR,
  CS as cS,
  hx as cT,
  aC as cU,
  MC as cV,
  BC as cW,
  Hb as cX,
  DC as cY,
  Rg as cZ,
  xa as c_,
  Ov as ca,
  TS as cb,
  va as cc,
  vS as cd,
  Ag as ce,
  dS as cf,
  Og as cg,
  Eg as ch,
  bS as ci,
  Ig as cj,
  gS as ck,
  cS as cl,
  kg as cm,
  uS as cn,
  fS as co,
  Ee as cp,
  Jl as cq,
  xS as cr,
  mS as cs,
  hS as ct,
  pS as cu,
  ro as cv,
  Sc as cw,
  $c as cx,
  Rc as cy,
  Zo as cz,
  Rb as d,
  An as d0,
  Yw as d1,
  qC as d2,
  MS as d3,
  YC as d4,
  em as d5,
  WS as d6,
  dy as d7,
  Tr as d8,
  bd as d9,
  eS as dA,
  Q1 as dB,
  yy as da,
  d1 as db,
  Sy as dc,
  Mi as dd,
  Ty as de,
  Oy as df,
  Cd as dg,
  ES as dh,
  Hv as di,
  Xy as dj,
  tg as dk,
  Qp as dl,
  SC as dm,
  PC as dn,
  _0 as dp,
  J1 as dq,
  Kp as dr,
  t1 as ds,
  Zp as dt,
  o1 as du,
  iw as dv,
  ss as dw,
  GS as dx,
  Y1 as dy,
  tS as dz,
  kb as e,
  zb as f,
  Lb as g,
  da as h,
  ee as i,
  qb as j,
  Xb as k,
  o0 as l,
  zS as m,
  i0 as n,
  f0 as o,
  p0 as p,
  g0 as q,
  go as r,
  on as s,
  v0 as t,
  S0 as u,
  R0 as v,
  M0 as w,
  F0 as x,
  N0 as y,
  V0 as z
};
