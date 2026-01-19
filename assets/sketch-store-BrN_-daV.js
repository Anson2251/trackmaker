var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { as as jr, at as hd, ac as Tt, au as Vr, av as da, aw as sl, ax as pd, H as vr, ay as br, az as ll, aA as wi, aB as md, aC as gd, aD as Si, aE as fa, aF as ha, aG as pa, aH as Un, aI as nr, aJ as cl, aK as ul, aL as vd, aM as Gn, aN as bd, aO as xd, aP as Cd, aQ as yd, aR as wd, i as ce, l as dl, N as $i, M as fl, d as oe, j as D, v as Mo, p as Be, b as W, B as Le, h as w, Z as Ft, g as hl, aS as Sd, P as bo, c as on, o as rn, a as nt, r as Xt, L as Zo, k as wt, f as Qe, e as yo, y as Zr, F as wo, R as Ei, Q as xo, T as $d, t as xe, a5 as pl, aT as Ed, w as Uo, C as Jt, W as zd, m as jt, O as Kn, S as ml, aU as Pd, Y as ma, n as ga, $ as Td, q as gl, aa as wn, aV as _d, aW as Rd, aX as vl, aY as Do, aZ as kd, a_ as Id, ar as va, ab as Bt, a$ as Ad, b0 as Od, b1 as De, b2 as de, aq as Md, b3 as qn, b4 as Sn } from "./index-BFGgKaH2.js";
var Dd = "[object Symbol]";
function zi(e) {
  return typeof e == "symbol" || jr(e) && hd(e) == Dd;
}
function bl(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length, n = Array(r); ++o < r; ) n[o] = t(e[o], o, e);
  return n;
}
var ba = Vr ? Vr.prototype : void 0, xa = ba ? ba.toString : void 0;
function xl(e) {
  if (typeof e == "string") return e;
  if (Tt(e)) return bl(e, xl) + "";
  if (zi(e)) return xa ? xa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Pi(e) {
  return e;
}
function Bd(e, t, o) {
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
function Ld(e, t) {
  var o = -1, r = e.length;
  for (t || (t = Array(r)); ++o < r; ) t[o] = e[o];
  return t;
}
var Fd = 800, Hd = 16, Nd = Date.now;
function Wd(e) {
  var t = 0, o = 0;
  return function() {
    var r = Nd(), n = Hd - (r - o);
    if (o = r, n > 0) {
      if (++t >= Fd) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function jd(e) {
  return function() {
    return e;
  };
}
var Vd = da ? function(e, t) {
  return da(e, "toString", { configurable: true, enumerable: false, value: jd(t), writable: true });
} : Pi, Zd = Wd(Vd);
function Ud(e, t, o, r) {
  var n = !o;
  o || (o = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], l = void 0;
    l === void 0 && (l = e[s]), n ? sl(o, s, l) : pd(o, s, l);
  }
  return o;
}
var Ca = Math.max;
function Gd(e, t, o) {
  return t = Ca(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, n = -1, i = Ca(r.length - t, 0), a = Array(i); ++n < i; ) a[n] = r[t + n];
    n = -1;
    for (var s = Array(t + 1); ++n < t; ) s[n] = r[n];
    return s[t] = o(a), Bd(e, this, s);
  };
}
function Kd(e, t) {
  return Zd(Gd(e, t, Pi), e + "");
}
function qd(e, t, o) {
  if (!vr(o)) return false;
  var r = typeof t;
  return (r == "number" ? br(o) && ll(t, o.length) : r == "string" && t in o) ? wi(o[t], e) : false;
}
function Yd(e) {
  return Kd(function(t, o) {
    var r = -1, n = o.length, i = n > 1 ? o[n - 1] : void 0, a = n > 2 ? o[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (n--, i) : void 0, a && qd(o[0], o[1], a) && (i = n < 3 ? void 0 : i, n = 1), t = Object(t); ++r < n; ) {
      var s = o[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
function Xd(e) {
  var t = [];
  if (e != null) for (var o in Object(e)) t.push(o);
  return t;
}
var Jd = Object.prototype, Qd = Jd.hasOwnProperty;
function ef(e) {
  if (!vr(e)) return Xd(e);
  var t = md(e), o = [];
  for (var r in e) r == "constructor" && (t || !Qd.call(e, r)) || o.push(r);
  return o;
}
function Cl(e) {
  return br(e) ? gd(e, true) : ef(e);
}
var tf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, of = /^\w*$/;
function Ti(e, t) {
  if (Tt(e)) return false;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || zi(e) ? true : of.test(e) || !tf.test(e) || t != null && e in Object(t);
}
var rf = "Expected a function";
function _i(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(rf);
  var o = function() {
    var r = arguments, n = t ? t.apply(this, r) : r[0], i = o.cache;
    if (i.has(n)) return i.get(n);
    var a = e.apply(this, r);
    return o.cache = i.set(n, a) || i, a;
  };
  return o.cache = new (_i.Cache || Si)(), o;
}
_i.Cache = Si;
var nf = 500;
function af(e) {
  var t = _i(e, function(r) {
    return o.size === nf && o.clear(), r;
  }), o = t.cache;
  return t;
}
var sf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lf = /\\(\\)?/g, cf = af(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sf, function(o, r, n, i) {
    t.push(n ? i.replace(lf, "$1") : r || o);
  }), t;
});
function yl(e) {
  return e == null ? "" : xl(e);
}
function wl(e, t) {
  return Tt(e) ? e : Ti(e, t) ? [e] : cf(yl(e));
}
function nn(e) {
  if (typeof e == "string" || zi(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Sl(e, t) {
  t = wl(t, e);
  for (var o = 0, r = t.length; e != null && o < r; ) e = e[nn(t[o++])];
  return o && o == r ? e : void 0;
}
function uf(e, t, o) {
  var r = e == null ? void 0 : Sl(e, t);
  return r === void 0 ? o : r;
}
function df(e, t, o) {
  var r = -1, n = e.length;
  t < 0 && (t = -t > n ? 0 : n + t), o = o > n ? n : o, o < 0 && (o += n), n = t > o ? 0 : o - t >>> 0, t >>>= 0;
  for (var i = Array(n); ++r < n; ) i[r] = e[r + t];
  return i;
}
function ff(e, t, o) {
  var r = e.length;
  return o = o === void 0 ? r : o, !t && o >= r ? e : df(e, t, o);
}
var hf = "\\ud800-\\udfff", pf = "\\u0300-\\u036f", mf = "\\ufe20-\\ufe2f", gf = "\\u20d0-\\u20ff", vf = pf + mf + gf, bf = "\\ufe0e\\ufe0f", xf = "\\u200d", Cf = RegExp("[" + xf + hf + vf + bf + "]");
function $l(e) {
  return Cf.test(e);
}
function yf(e) {
  return e.split("");
}
var El = "\\ud800-\\udfff", wf = "\\u0300-\\u036f", Sf = "\\ufe20-\\ufe2f", $f = "\\u20d0-\\u20ff", Ef = wf + Sf + $f, zf = "\\ufe0e\\ufe0f", Pf = "[" + El + "]", Yn = "[" + Ef + "]", Xn = "\\ud83c[\\udffb-\\udfff]", Tf = "(?:" + Yn + "|" + Xn + ")", zl = "[^" + El + "]", Pl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Tl = "[\\ud800-\\udbff][\\udc00-\\udfff]", _f = "\\u200d", _l = Tf + "?", Rl = "[" + zf + "]?", Rf = "(?:" + _f + "(?:" + [zl, Pl, Tl].join("|") + ")" + Rl + _l + ")*", kf = Rl + _l + Rf, If = "(?:" + [zl + Yn + "?", Yn, Pl, Tl, Pf].join("|") + ")", Af = RegExp(Xn + "(?=" + Xn + ")|" + If + kf, "g");
function Of(e) {
  return e.match(Af) || [];
}
function Mf(e) {
  return $l(e) ? Of(e) : yf(e);
}
function Df(e) {
  return function(t) {
    t = yl(t);
    var o = $l(t) ? Mf(t) : void 0, r = o ? o[0] : t.charAt(0), n = o ? ff(o, 1).join("") : t.slice(1);
    return r[e]() + n;
  };
}
var Bf = Df("toUpperCase"), Lf = "__lodash_hash_undefined__";
function Ff(e) {
  return this.__data__.set(e, Lf), this;
}
function Hf(e) {
  return this.__data__.has(e);
}
function Ur(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.__data__ = new Si(); ++t < o; ) this.add(e[t]);
}
Ur.prototype.add = Ur.prototype.push = Ff;
Ur.prototype.has = Hf;
function Nf(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length; ++o < r; ) if (t(e[o], o, e)) return true;
  return false;
}
function Wf(e, t) {
  return e.has(t);
}
var jf = 1, Vf = 2;
function kl(e, t, o, r, n, i) {
  var a = o & jf, s = e.length, l = t.length;
  if (s != l && !(a && l > s)) return false;
  var c = i.get(e), u = i.get(t);
  if (c && u) return c == t && u == e;
  var d = -1, f = true, h = o & Vf ? new Ur() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < s; ) {
    var p = e[d], m = t[d];
    if (r) var g = a ? r(m, p, d, t, e, i) : r(p, m, d, e, t, i);
    if (g !== void 0) {
      if (g) continue;
      f = false;
      break;
    }
    if (h) {
      if (!Nf(t, function(v, x) {
        if (!Wf(h, x) && (p === v || n(p, v, o, r, i))) return h.push(x);
      })) {
        f = false;
        break;
      }
    } else if (!(p === m || n(p, m, o, r, i))) {
      f = false;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
function Zf(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r, n) {
    o[++t] = [n, r];
  }), o;
}
function Uf(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r) {
    o[++t] = r;
  }), o;
}
var Gf = 1, Kf = 2, qf = "[object Boolean]", Yf = "[object Date]", Xf = "[object Error]", Jf = "[object Map]", Qf = "[object Number]", eh = "[object RegExp]", th = "[object Set]", oh = "[object String]", rh = "[object Symbol]", nh = "[object ArrayBuffer]", ih = "[object DataView]", ya = Vr ? Vr.prototype : void 0, $n = ya ? ya.valueOf : void 0;
function ah(e, t, o, r, n, i, a) {
  switch (o) {
    case ih:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
      e = e.buffer, t = t.buffer;
    case nh:
      return !(e.byteLength != t.byteLength || !i(new fa(e), new fa(t)));
    case qf:
    case Yf:
    case Qf:
      return wi(+e, +t);
    case Xf:
      return e.name == t.name && e.message == t.message;
    case eh:
    case oh:
      return e == t + "";
    case Jf:
      var s = Zf;
    case th:
      var l = r & Gf;
      if (s || (s = Uf), e.size != t.size && !l) return false;
      var c = a.get(e);
      if (c) return c == t;
      r |= Kf, a.set(e, t);
      var u = kl(s(e), s(t), r, n, i, a);
      return a.delete(e), u;
    case rh:
      if ($n) return $n.call(e) == $n.call(t);
  }
  return false;
}
var sh = 1, lh = Object.prototype, ch = lh.hasOwnProperty;
function uh(e, t, o, r, n, i) {
  var a = o & sh, s = ha(e), l = s.length, c = ha(t), u = c.length;
  if (l != u && !a) return false;
  for (var d = l; d--; ) {
    var f = s[d];
    if (!(a ? f in t : ch.call(t, f))) return false;
  }
  var h = i.get(e), p = i.get(t);
  if (h && p) return h == t && p == e;
  var m = true;
  i.set(e, t), i.set(t, e);
  for (var g = a; ++d < l; ) {
    f = s[d];
    var v = e[f], x = t[f];
    if (r) var $ = a ? r(x, v, f, t, e, i) : r(v, x, f, e, t, i);
    if (!($ === void 0 ? v === x || n(v, x, o, r, i) : $)) {
      m = false;
      break;
    }
    g || (g = f == "constructor");
  }
  if (m && !g) {
    var C = e.constructor, E = t.constructor;
    C != E && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof E == "function" && E instanceof E) && (m = false);
  }
  return i.delete(e), i.delete(t), m;
}
var dh = 1, wa = "[object Arguments]", Sa = "[object Array]", zr = "[object Object]", fh = Object.prototype, $a = fh.hasOwnProperty;
function hh(e, t, o, r, n, i) {
  var a = Tt(e), s = Tt(t), l = a ? Sa : pa(e), c = s ? Sa : pa(t);
  l = l == wa ? zr : l, c = c == wa ? zr : c;
  var u = l == zr, d = c == zr, f = l == c;
  if (f && Un(e)) {
    if (!Un(t)) return false;
    a = true, u = false;
  }
  if (f && !u) return i || (i = new nr()), a || cl(e) ? kl(e, t, o, r, n, i) : ah(e, t, l, o, r, n, i);
  if (!(o & dh)) {
    var h = u && $a.call(e, "__wrapped__"), p = d && $a.call(t, "__wrapped__");
    if (h || p) {
      var m = h ? e.value() : e, g = p ? t.value() : t;
      return i || (i = new nr()), n(m, g, o, r, i);
    }
  }
  return f ? (i || (i = new nr()), uh(e, t, o, r, n, i)) : false;
}
function Ri(e, t, o, r, n) {
  return e === t ? true : e == null || t == null || !jr(e) && !jr(t) ? e !== e && t !== t : hh(e, t, o, r, Ri, n);
}
var ph = 1, mh = 2;
function gh(e, t, o, r) {
  var n = o.length, i = n;
  if (e == null) return !i;
  for (e = Object(e); n--; ) {
    var a = o[n];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return false;
  }
  for (; ++n < i; ) {
    a = o[n];
    var s = a[0], l = e[s], c = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in e)) return false;
    } else {
      var u = new nr(), d;
      if (!(d === void 0 ? Ri(c, l, ph | mh, r, u) : d)) return false;
    }
  }
  return true;
}
function Il(e) {
  return e === e && !vr(e);
}
function vh(e) {
  for (var t = ul(e), o = t.length; o--; ) {
    var r = t[o], n = e[r];
    t[o] = [r, n, Il(n)];
  }
  return t;
}
function Al(e, t) {
  return function(o) {
    return o == null ? false : o[e] === t && (t !== void 0 || e in Object(o));
  };
}
function bh(e) {
  var t = vh(e);
  return t.length == 1 && t[0][2] ? Al(t[0][0], t[0][1]) : function(o) {
    return o === e || gh(o, e, t);
  };
}
function xh(e, t) {
  return e != null && t in Object(e);
}
function Ch(e, t, o) {
  t = wl(t, e);
  for (var r = -1, n = t.length, i = false; ++r < n; ) {
    var a = nn(t[r]);
    if (!(i = e != null && o(e, a))) break;
    e = e[a];
  }
  return i || ++r != n ? i : (n = e == null ? 0 : e.length, !!n && vd(n) && ll(a, n) && (Tt(e) || Gn(e)));
}
function yh(e, t) {
  return e != null && Ch(e, t, xh);
}
var wh = 1, Sh = 2;
function $h(e, t) {
  return Ti(e) && Il(t) ? Al(nn(e), t) : function(o) {
    var r = uf(o, e);
    return r === void 0 && r === t ? yh(o, e) : Ri(t, r, wh | Sh);
  };
}
function Eh(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function zh(e) {
  return function(t) {
    return Sl(t, e);
  };
}
function Ph(e) {
  return Ti(e) ? Eh(nn(e)) : zh(e);
}
function Th(e) {
  return typeof e == "function" ? e : e == null ? Pi : typeof e == "object" ? Tt(e) ? $h(e[0], e[1]) : bh(e) : Ph(e);
}
function _h(e) {
  return function(t, o, r) {
    for (var n = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var l = a[++n];
      if (o(i[l], l, i) === false) break;
    }
    return t;
  };
}
var Ol = _h();
function Rh(e, t) {
  return e && Ol(e, t, ul);
}
function kh(e, t) {
  return function(o, r) {
    if (o == null) return o;
    if (!br(o)) return e(o, r);
    for (var n = o.length, i = -1, a = Object(o); ++i < n && r(a[i], i, a) !== false; ) ;
    return o;
  };
}
var Ih = kh(Rh);
function Jn(e, t, o) {
  (o !== void 0 && !wi(e[t], o) || o === void 0 && !(t in e)) && sl(e, t, o);
}
function Ah(e) {
  return jr(e) && br(e);
}
function Qn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
}
function Oh(e) {
  return Ud(e, Cl(e));
}
function Mh(e, t, o, r, n, i, a) {
  var s = Qn(e, o), l = Qn(t, o), c = a.get(l);
  if (c) {
    Jn(e, o, c);
    return;
  }
  var u = i ? i(s, l, o + "", e, t, a) : void 0, d = u === void 0;
  if (d) {
    var f = Tt(l), h = !f && Un(l), p = !f && !h && cl(l);
    u = l, f || h || p ? Tt(s) ? u = s : Ah(s) ? u = Ld(s) : h ? (d = false, u = bd(l, true)) : p ? (d = false, u = xd(l, true)) : u = [] : Cd(l) || Gn(l) ? (u = s, Gn(s) ? u = Oh(s) : (!vr(s) || yd(s)) && (u = wd(l))) : d = false;
  }
  d && (a.set(l, u), n(u, l, r, i, a), a.delete(l)), Jn(e, o, u);
}
function Ml(e, t, o, r, n) {
  e !== t && Ol(t, function(i, a) {
    if (n || (n = new nr()), vr(i)) Mh(e, t, a, o, Ml, r, n);
    else {
      var s = r ? r(Qn(e, a), i, a + "", e, t, n) : void 0;
      s === void 0 && (s = i), Jn(e, a, s);
    }
  }, Cl);
}
function Dh(e, t) {
  var o = -1, r = br(e) ? Array(e.length) : [];
  return Ih(e, function(n, i, a) {
    r[++o] = t(n, i, a);
  }), r;
}
function Bh(e, t) {
  var o = Tt(e) ? bl : Dh;
  return o(e, Th(t));
}
var er = Yd(function(e, t, o) {
  Ml(e, t, o);
});
const Ro = typeof document < "u";
function Dl(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Lh(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Dl(e.default);
}
const Se = Object.assign;
function En(e, t) {
  const o = {};
  for (const r in t) {
    const n = t[r];
    o[r] = yt(n) ? n.map(e) : e(n);
  }
  return o;
}
const ir = () => {
}, yt = Array.isArray;
function Ea(e, t) {
  const o = {};
  for (const r in e) o[r] = r in t ? t[r] : e[r];
  return o;
}
const Bl = /#/g, Fh = /&/g, Hh = /\//g, Nh = /=/g, Wh = /\?/g, Ll = /\+/g, jh = /%5B/g, Vh = /%5D/g, Fl = /%5E/g, Zh = /%60/g, Hl = /%7B/g, Uh = /%7C/g, Nl = /%7D/g, Gh = /%20/g;
function ki(e) {
  return e == null ? "" : encodeURI("" + e).replace(Uh, "|").replace(jh, "[").replace(Vh, "]");
}
function Kh(e) {
  return ki(e).replace(Hl, "{").replace(Nl, "}").replace(Fl, "^");
}
function ei(e) {
  return ki(e).replace(Ll, "%2B").replace(Gh, "+").replace(Bl, "%23").replace(Fh, "%26").replace(Zh, "`").replace(Hl, "{").replace(Nl, "}").replace(Fl, "^");
}
function qh(e) {
  return ei(e).replace(Nh, "%3D");
}
function Yh(e) {
  return ki(e).replace(Bl, "%23").replace(Wh, "%3F");
}
function Xh(e) {
  return Yh(e).replace(Hh, "%2F");
}
function cr(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const Jh = /\/$/, Qh = (e) => e.replace(Jh, "");
function zn(e, t, o = "/") {
  let r, n = {}, i = "", a = "";
  const s = t.indexOf("#");
  let l = t.indexOf("?");
  return l = s >= 0 && l > s ? -1 : l, l >= 0 && (r = t.slice(0, l), i = t.slice(l, s > 0 ? s : t.length), n = e(i.slice(1))), s >= 0 && (r = r || t.slice(0, s), a = t.slice(s, t.length)), r = rp(r ?? t, o), { fullPath: r + i + a, path: r, query: n, hash: cr(a) };
}
function ep(e, t) {
  const o = t.query ? e(t.query) : "";
  return t.path + (o && "?") + o + (t.hash || "");
}
function tp(e, t, o) {
  const r = t.matched.length - 1, n = o.matched.length - 1;
  return r > -1 && r === n && Ho(t.matched[r], o.matched[n]) && Wl(t.params, o.params) && e(t.query) === e(o.query) && t.hash === o.hash;
}
function Ho(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Wl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var o in e) if (!op(e[o], t[o])) return false;
  return true;
}
function op(e, t) {
  return yt(e) ? za(e, t) : yt(t) ? za(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function za(e, t) {
  return yt(t) ? e.length === t.length && e.every((o, r) => o === t[r]) : e.length === 1 && e[0] === t;
}
function rp(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const o = t.split("/"), r = e.split("/"), n = r[r.length - 1];
  (n === ".." || n === ".") && r.push("");
  let i = o.length - 1, a, s;
  for (a = 0; a < r.length; a++) if (s = r[a], s !== ".") if (s === "..") i > 1 && i--;
  else break;
  return o.slice(0, i).join("/") + "/" + r.slice(a).join("/");
}
const Gt = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let ti = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), Pa = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
const Pn = "";
function np(e) {
  if (!e) if (Ro) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Qh(e);
}
const ip = /^[^#]+#/;
function ap(e, t) {
  return e.replace(ip, "#") + t;
}
function sp(e, t) {
  const o = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - o.left - (t.left || 0), top: r.top - o.top - (t.top || 0) };
}
const lp = () => ({ left: window.scrollX, top: window.scrollY });
function cp(e) {
  let t;
  if ("el" in e) {
    const o = e.el, r = typeof o == "string" && o.startsWith("#"), n = typeof o == "string" ? r ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!n) return;
    t = sp(n, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Ta(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const oi = /* @__PURE__ */ new Map();
function up(e, t) {
  oi.set(e, t);
}
function dp(e) {
  const t = oi.get(e);
  return oi.delete(e), t;
}
function fp(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function jl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Ie = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const Vl = /* @__PURE__ */ Symbol("");
Ie.MATCHER_NOT_FOUND + "", Ie.NAVIGATION_GUARD_REDIRECT + "", Ie.NAVIGATION_ABORTED + "", Ie.NAVIGATION_CANCELLED + "", Ie.NAVIGATION_DUPLICATED + "";
function No(e, t) {
  return Se(new Error(), { type: e, [Vl]: true }, t);
}
function At(e, t) {
  return e instanceof Error && Vl in e && (t == null || !!(e.type & t));
}
const hp = ["params", "query", "hash"];
function pp(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const o of hp) o in e && (t[o] = e[o]);
  return JSON.stringify(t, null, 2);
}
function mp(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const n = o[r].replace(Ll, " "), i = n.indexOf("="), a = cr(i < 0 ? n : n.slice(0, i)), s = i < 0 ? null : cr(n.slice(i + 1));
    if (a in t) {
      let l = t[a];
      yt(l) || (l = t[a] = [l]), l.push(s);
    } else t[a] = s;
  }
  return t;
}
function _a(e) {
  let t = "";
  for (let o in e) {
    const r = e[o];
    if (o = qh(o), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + o);
      continue;
    }
    (yt(r) ? r.map((n) => n && ei(n)) : [r && ei(r)]).forEach((n) => {
      n !== void 0 && (t += (t.length ? "&" : "") + o, n != null && (t += "=" + n));
    });
  }
  return t;
}
function gp(e) {
  const t = {};
  for (const o in e) {
    const r = e[o];
    r !== void 0 && (t[o] = yt(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
  }
  return t;
}
const Zl = /* @__PURE__ */ Symbol(""), Ra = /* @__PURE__ */ Symbol(""), an = /* @__PURE__ */ Symbol(""), Ii = /* @__PURE__ */ Symbol(""), ri = /* @__PURE__ */ Symbol("");
function Yo() {
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
function vp(e, t, o) {
  const r = () => {
    e[t].delete(o);
  };
  dl(r), $i(r), fl(() => {
    e[t].add(o);
  }), e[t].add(o);
}
function f2(e) {
  const t = ce(Zl, {}).value;
  t && vp(t, "leaveGuards", e);
}
function Yt(e, t, o, r, n, i = (a) => a()) {
  const a = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
  return () => new Promise((s, l) => {
    const c = (f) => {
      f === false ? l(No(Ie.NAVIGATION_ABORTED, { from: o, to: t })) : f instanceof Error ? l(f) : fp(f) ? l(No(Ie.NAVIGATION_GUARD_REDIRECT, { from: t, to: f })) : (a && r.enterCallbacks[n] === a && typeof f == "function" && a.push(f), s());
    }, u = i(() => e.call(r && r.instances[n], t, o, c));
    let d = Promise.resolve(u);
    e.length < 3 && (d = d.then(c)), d.catch((f) => l(f));
  });
}
function Tn(e, t, o, r, n = (i) => i()) {
  const i = [];
  for (const a of e) for (const s in a.components) {
    let l = a.components[s];
    if (!(t !== "beforeRouteEnter" && !a.instances[s])) if (Dl(l)) {
      const c = (l.__vccOpts || l)[t];
      c && i.push(Yt(c, o, r, a, s, n));
    } else {
      let c = l();
      i.push(() => c.then((u) => {
        if (!u) throw new Error(`Couldn't resolve component "${s}" at "${a.path}"`);
        const d = Lh(u) ? u.default : u;
        a.mods[s] = u, a.components[s] = d;
        const f = (d.__vccOpts || d)[t];
        return f && Yt(f, o, r, a, s, n)();
      }));
    }
  }
  return i;
}
function bp(e, t) {
  const o = [], r = [], n = [], i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const s = t.matched[a];
    s && (e.matched.find((c) => Ho(c, s)) ? r.push(s) : o.push(s));
    const l = e.matched[a];
    l && (t.matched.find((c) => Ho(c, l)) || n.push(l));
  }
  return [o, r, n];
}
function h2(e = "") {
  let t = [], o = [[Pn, {}]], r = 0;
  e = np(e);
  function n(s, l = {}) {
    r++, r !== o.length && o.splice(r), o.push([s, l]);
  }
  function i(s, l, { direction: c, delta: u }) {
    const d = { direction: c, delta: u, type: ti.pop };
    for (const f of t) f(s, l, d);
  }
  const a = { location: Pn, state: {}, base: e, createHref: ap.bind(null, e), replace(s, l) {
    o.splice(r--, 1), n(s, l);
  }, push(s, l) {
    n(s, l);
  }, listen(s) {
    return t.push(s), () => {
      const l = t.indexOf(s);
      l > -1 && t.splice(l, 1);
    };
  }, destroy() {
    t = [], o = [[Pn, {}]], r = 0;
  }, go(s, l = true) {
    const c = this.location, u = s < 0 ? Pa.back : Pa.forward;
    r = Math.max(0, Math.min(r + s, o.length - 1)), l && i(this.location, c, { direction: u, delta: s });
  } };
  return Object.defineProperty(a, "location", { enumerable: true, get: () => o[r][0] }), Object.defineProperty(a, "state", { enumerable: true, get: () => o[r][1] }), a;
}
let uo = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var je = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(je || {});
const xp = { type: uo.Static, value: "" }, Cp = /[a-zA-Z0-9_]/;
function yp(e) {
  if (!e) return [[]];
  if (e === "/") return [[xp]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${o})/"${c}": ${h}`);
  }
  let o = je.Static, r = o;
  const n = [];
  let i;
  function a() {
    i && n.push(i), i = [];
  }
  let s = 0, l, c = "", u = "";
  function d() {
    c && (o === je.Static ? i.push({ type: uo.Static, value: c }) : o === je.Param || o === je.ParamRegExp || o === je.ParamRegExpEnd ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: uo.Param, value: c, regexp: u, repeatable: l === "*" || l === "+", optional: l === "*" || l === "?" })) : t("Invalid state to consume buffer"), c = "");
  }
  function f() {
    c += l;
  }
  for (; s < e.length; ) {
    if (l = e[s++], l === "\\" && o !== je.ParamRegExp) {
      r = o, o = je.EscapeNext;
      continue;
    }
    switch (o) {
      case je.Static:
        l === "/" ? (c && d(), a()) : l === ":" ? (d(), o = je.Param) : f();
        break;
      case je.EscapeNext:
        f(), o = r;
        break;
      case je.Param:
        l === "(" ? o = je.ParamRegExp : Cp.test(l) ? f() : (d(), o = je.Static, l !== "*" && l !== "?" && l !== "+" && s--);
        break;
      case je.ParamRegExp:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : o = je.ParamRegExpEnd : u += l;
        break;
      case je.ParamRegExpEnd:
        d(), o = je.Static, l !== "*" && l !== "?" && l !== "+" && s--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return o === je.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`), d(), a(), n;
}
const ka = "[^/]+?", wp = { sensitive: false, strict: false, start: true, end: true };
var Je = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(Je || {});
const Sp = /[.+*?^${}()[\]/\\]/g;
function $p(e, t) {
  const o = Se({}, wp, t), r = [];
  let n = o.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [Je.Root];
    o.strict && !c.length && (n += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let h = Je.Segment + (o.sensitive ? Je.BonusCaseSensitive : 0);
      if (f.type === uo.Static) d || (n += "/"), n += f.value.replace(Sp, "\\$&"), h += Je.Static;
      else if (f.type === uo.Param) {
        const { value: p, repeatable: m, optional: g, regexp: v } = f;
        i.push({ name: p, repeatable: m, optional: g });
        const x = v || ka;
        if (x !== ka) {
          h += Je.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (C) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${x}): ` + C.message);
          }
        }
        let $ = m ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        d || ($ = g && c.length < 2 ? `(?:/${$})` : "/" + $), g && ($ += "?"), n += $, h += Je.Dynamic, g && (h += Je.BonusOptional), m && (h += Je.BonusRepeatable), x === ".*" && (h += Je.BonusWildcard);
      }
      u.push(h);
    }
    r.push(u);
  }
  if (o.strict && o.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += Je.BonusStrict;
  }
  o.strict || (n += "/?"), o.end ? n += "$" : o.strict && !n.endsWith("/") && (n += "(?:/|$)");
  const a = new RegExp(n, o.sensitive ? "" : "i");
  function s(c) {
    const u = c.match(a), d = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const h = u[f] || "", p = i[f - 1];
      d[p.name] = h && p.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function l(c) {
    let u = "", d = false;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = false;
      for (const h of f) if (h.type === uo.Static) u += h.value;
      else if (h.type === uo.Param) {
        const { value: p, repeatable: m, optional: g } = h, v = p in c ? c[p] : "";
        if (yt(v) && !m) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const x = yt(v) ? v.join("/") : v;
        if (!x) if (g) f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = true);
        else throw new Error(`Missing required param "${p}"`);
        u += x;
      }
    }
    return u || "/";
  }
  return { re: a, score: r, keys: i, parse: s, stringify: l };
}
function Ep(e, t) {
  let o = 0;
  for (; o < e.length && o < t.length; ) {
    const r = t[o] - e[o];
    if (r) return r;
    o++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === Je.Static + Je.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Je.Static + Je.Segment ? 1 : -1 : 0;
}
function Ul(e, t) {
  let o = 0;
  const r = e.score, n = t.score;
  for (; o < r.length && o < n.length; ) {
    const i = Ep(r[o], n[o]);
    if (i) return i;
    o++;
  }
  if (Math.abs(n.length - r.length) === 1) {
    if (Ia(r)) return 1;
    if (Ia(n)) return -1;
  }
  return n.length - r.length;
}
function Ia(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const zp = { strict: false, end: true, sensitive: false };
function Pp(e, t, o) {
  const r = $p(yp(e.path), o), n = Se(r, { record: e, parent: t, children: [], alias: [] });
  return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
}
function Tp(e, t) {
  const o = [], r = /* @__PURE__ */ new Map();
  t = Ea(zp, t);
  function n(d) {
    return r.get(d);
  }
  function i(d, f, h) {
    const p = !h, m = Oa(d);
    m.aliasOf = h && h.record;
    const g = Ea(t, d), v = [m];
    if ("alias" in d) {
      const C = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const E of C) v.push(Oa(Se({}, m, { components: h ? h.record.components : m.components, path: E, aliasOf: h ? h.record : m })));
    }
    let x, $;
    for (const C of v) {
      const { path: E } = C;
      if (f && E[0] !== "/") {
        const k = f.record.path, b = k[k.length - 1] === "/" ? "" : "/";
        C.path = f.record.path + (E && b + E);
      }
      if (x = Pp(C, f, g), h ? h.alias.push(x) : ($ = $ || x, $ !== x && $.alias.push(x), p && d.name && !Ma(x) && a(d.name)), Gl(x) && l(x), m.children) {
        const k = m.children;
        for (let b = 0; b < k.length; b++) i(k[b], x, h && h.children[b]);
      }
      h = h || x;
    }
    return $ ? () => {
      a($);
    } : ir;
  }
  function a(d) {
    if (jl(d)) {
      const f = r.get(d);
      f && (r.delete(d), o.splice(o.indexOf(f), 1), f.children.forEach(a), f.alias.forEach(a));
    } else {
      const f = o.indexOf(d);
      f > -1 && (o.splice(f, 1), d.record.name && r.delete(d.record.name), d.children.forEach(a), d.alias.forEach(a));
    }
  }
  function s() {
    return o;
  }
  function l(d) {
    const f = kp(d, o);
    o.splice(f, 0, d), d.record.name && !Ma(d) && r.set(d.record.name, d);
  }
  function c(d, f) {
    let h, p = {}, m, g;
    if ("name" in d && d.name) {
      if (h = r.get(d.name), !h) throw No(Ie.MATCHER_NOT_FOUND, { location: d });
      g = h.record.name, p = Se(Aa(f.params, h.keys.filter(($) => !$.optional).concat(h.parent ? h.parent.keys.filter(($) => $.optional) : []).map(($) => $.name)), d.params && Aa(d.params, h.keys.map(($) => $.name))), m = h.stringify(p);
    } else if (d.path != null) m = d.path, h = o.find(($) => $.re.test(m)), h && (p = h.parse(m), g = h.record.name);
    else {
      if (h = f.name ? r.get(f.name) : o.find(($) => $.re.test(f.path)), !h) throw No(Ie.MATCHER_NOT_FOUND, { location: d, currentLocation: f });
      g = h.record.name, p = Se({}, f.params, d.params), m = h.stringify(p);
    }
    const v = [];
    let x = h;
    for (; x; ) v.unshift(x.record), x = x.parent;
    return { name: g, path: m, params: p, matched: v, meta: Rp(v) };
  }
  e.forEach((d) => i(d));
  function u() {
    o.length = 0, r.clear();
  }
  return { addRoute: i, resolve: c, removeRoute: a, clearRoutes: u, getRoutes: s, getRecordMatcher: n };
}
function Aa(e, t) {
  const o = {};
  for (const r of t) r in e && (o[r] = e[r]);
  return o;
}
function Oa(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: _p(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function _p(e) {
  const t = {}, o = e.props || false;
  if ("component" in e) t.default = o;
  else for (const r in e.components) t[r] = typeof o == "object" ? o[r] : o;
  return t;
}
function Ma(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Rp(e) {
  return e.reduce((t, o) => Se(t, o.meta), {});
}
function kp(e, t) {
  let o = 0, r = t.length;
  for (; o !== r; ) {
    const i = o + r >> 1;
    Ul(e, t[i]) < 0 ? r = i : o = i + 1;
  }
  const n = Ip(e);
  return n && (r = t.lastIndexOf(n, r - 1)), r;
}
function Ip(e) {
  let t = e;
  for (; t = t.parent; ) if (Gl(t) && Ul(e, t) === 0) return t;
}
function Gl({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Da(e) {
  const t = ce(an), o = ce(Ii), r = D(() => {
    const l = Mo(e.to);
    return t.resolve(l);
  }), n = D(() => {
    const { matched: l } = r.value, { length: c } = l, u = l[c - 1], d = o.matched;
    if (!u || !d.length) return -1;
    const f = d.findIndex(Ho.bind(null, u));
    if (f > -1) return f;
    const h = Ba(l[c - 2]);
    return c > 1 && Ba(u) === h && d[d.length - 1].path !== h ? d.findIndex(Ho.bind(null, l[c - 2])) : f;
  }), i = D(() => n.value > -1 && Bp(o.params, r.value.params)), a = D(() => n.value > -1 && n.value === o.matched.length - 1 && Wl(o.params, r.value.params));
  function s(l = {}) {
    if (Dp(l)) {
      const c = t[Mo(e.replace) ? "replace" : "push"](Mo(e.to)).catch(ir);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: r, href: D(() => r.value.href), isActive: i, isExactActive: a, navigate: s };
}
function Ap(e) {
  return e.length === 1 ? e[0] : e;
}
const Op = oe({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: Da, setup(e, { slots: t }) {
  const o = hl(Da(e)), { options: r } = ce(an), n = D(() => ({ [La(e.activeClass, r.linkActiveClass, "router-link-active")]: o.isActive, [La(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive }));
  return () => {
    const i = t.default && Ap(t.default(o));
    return e.custom ? i : w("a", { "aria-current": o.isExactActive ? e.ariaCurrentValue : null, href: o.href, onClick: o.navigate, class: n.value }, i);
  };
} }), Mp = Op;
function Dp(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function Bp(e, t) {
  for (const o in t) {
    const r = t[o], n = e[o];
    if (typeof r == "string") {
      if (r !== n) return false;
    } else if (!yt(n) || n.length !== r.length || r.some((i, a) => i.valueOf() !== n[a].valueOf())) return false;
  }
  return true;
}
function Ba(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const La = (e, t, o) => e ?? t ?? o, Lp = oe({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: o }) {
  const r = ce(ri), n = D(() => e.route || r.value), i = ce(Ra, 0), a = D(() => {
    let c = Mo(i);
    const { matched: u } = n.value;
    let d;
    for (; (d = u[c]) && !d.components; ) c++;
    return c;
  }), s = D(() => n.value.matched[a.value]);
  Be(Ra, D(() => a.value + 1)), Be(Zl, s), Be(ri, n);
  const l = W();
  return Le(() => [l.value, s.value, e.name], ([c, u, d], [f, h, p]) => {
    u && (u.instances[d] = c, h && h !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), c && u && (!h || !Ho(u, h) || !f) && (u.enterCallbacks[d] || []).forEach((m) => m(c));
  }, { flush: "post" }), () => {
    const c = n.value, u = e.name, d = s.value, f = d && d.components[u];
    if (!f) return Fa(o.default, { Component: f, route: c });
    const h = d.props[u], p = h ? h === true ? c.params : typeof h == "function" ? h(c) : h : null, g = w(f, Se({}, p, t, { onVnodeUnmounted: (v) => {
      v.component.isUnmounted && (d.instances[u] = null);
    }, ref: l }));
    return Fa(o.default, { Component: g, route: c }) || g;
  };
} });
function Fa(e, t) {
  if (!e) return null;
  const o = e(t);
  return o.length === 1 ? o[0] : o;
}
const Fp = Lp;
function p2(e) {
  const t = Tp(e.routes, e), o = e.parseQuery || mp, r = e.stringifyQuery || _a, n = e.history, i = Yo(), a = Yo(), s = Yo(), l = Ft(Gt);
  let c = Gt;
  Ro && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = En.bind(null, (T) => "" + T), d = En.bind(null, Xh), f = En.bind(null, cr);
  function h(T, V) {
    let M, X;
    return jl(T) ? (M = t.getRecordMatcher(T), X = V) : X = T, t.addRoute(X, M);
  }
  function p(T) {
    const V = t.getRecordMatcher(T);
    V && t.removeRoute(V);
  }
  function m() {
    return t.getRoutes().map((T) => T.record);
  }
  function g(T) {
    return !!t.getRecordMatcher(T);
  }
  function v(T, V) {
    if (V = Se({}, V || l.value), typeof T == "string") {
      const ne = zn(o, T, V.path), Pe = t.resolve({ path: ne.path }, V), vt = n.createHref(ne.fullPath);
      return Se(ne, Pe, { params: f(Pe.params), hash: cr(ne.hash), redirectedFrom: void 0, href: vt });
    }
    let M;
    if (T.path != null) M = Se({}, T, { path: zn(o, T.path, V.path).path });
    else {
      const ne = Se({}, T.params);
      for (const Pe in ne) ne[Pe] == null && delete ne[Pe];
      M = Se({}, T, { params: d(ne) }), V.params = d(V.params);
    }
    const X = t.resolve(M, V), ae = T.hash || "";
    X.params = u(f(X.params));
    const $e = ep(r, Se({}, T, { hash: Kh(ae), path: X.path })), re = n.createHref($e);
    return Se({ fullPath: $e, hash: ae, query: r === _a ? gp(T.query) : T.query || {} }, X, { redirectedFrom: void 0, href: re });
  }
  function x(T) {
    return typeof T == "string" ? zn(o, T, l.value.path) : Se({}, T);
  }
  function $(T, V) {
    if (c !== T) return No(Ie.NAVIGATION_CANCELLED, { from: V, to: T });
  }
  function C(T) {
    return b(T);
  }
  function E(T) {
    return C(Se(x(T), { replace: true }));
  }
  function k(T, V) {
    const M = T.matched[T.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: X } = M;
      let ae = typeof X == "function" ? X(T, V) : X;
      return typeof ae == "string" && (ae = ae.includes("?") || ae.includes("#") ? ae = x(ae) : { path: ae }, ae.params = {}), Se({ query: T.query, hash: T.hash, params: ae.path != null ? {} : T.params }, ae);
    }
  }
  function b(T, V) {
    const M = c = v(T), X = l.value, ae = T.state, $e = T.force, re = T.replace === true, ne = k(M, X);
    if (ne) return b(Se(x(ne), { state: typeof ne == "object" ? Se({}, ae, ne.state) : ae, force: $e, replace: re }), V || M);
    const Pe = M;
    Pe.redirectedFrom = V;
    let vt;
    return !$e && tp(r, X, M) && (vt = No(Ie.NAVIGATION_DUPLICATED, { to: Pe, from: X }), ye(X, X, true, false)), (vt ? Promise.resolve(vt) : O(Pe, X)).catch((Ve) => At(Ve) ? At(Ve, Ie.NAVIGATION_GUARD_REDIRECT) ? Ve : ue(Ve) : G(Ve, Pe, X)).then((Ve) => {
      if (Ve) {
        if (At(Ve, Ie.NAVIGATION_GUARD_REDIRECT)) return b(Se({ replace: re }, x(Ve.to), { state: typeof Ve.to == "object" ? Se({}, ae, Ve.to.state) : ae, force: $e }), V || Pe);
      } else Ve = y(Pe, X, true, re, ae);
      return N(Pe, X, Ve), Ve;
    });
  }
  function S(T, V) {
    const M = $(T, V);
    return M ? Promise.reject(M) : Promise.resolve();
  }
  function z(T) {
    const V = Ye.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(T) : T();
  }
  function O(T, V) {
    let M;
    const [X, ae, $e] = bp(T, V);
    M = Tn(X.reverse(), "beforeRouteLeave", T, V);
    for (const ne of X) ne.leaveGuards.forEach((Pe) => {
      M.push(Yt(Pe, T, V));
    });
    const re = S.bind(null, T, V);
    return M.push(re), le(M).then(() => {
      M = [];
      for (const ne of i.list()) M.push(Yt(ne, T, V));
      return M.push(re), le(M);
    }).then(() => {
      M = Tn(ae, "beforeRouteUpdate", T, V);
      for (const ne of ae) ne.updateGuards.forEach((Pe) => {
        M.push(Yt(Pe, T, V));
      });
      return M.push(re), le(M);
    }).then(() => {
      M = [];
      for (const ne of $e) if (ne.beforeEnter) if (yt(ne.beforeEnter)) for (const Pe of ne.beforeEnter) M.push(Yt(Pe, T, V));
      else M.push(Yt(ne.beforeEnter, T, V));
      return M.push(re), le(M);
    }).then(() => (T.matched.forEach((ne) => ne.enterCallbacks = {}), M = Tn($e, "beforeRouteEnter", T, V, z), M.push(re), le(M))).then(() => {
      M = [];
      for (const ne of a.list()) M.push(Yt(ne, T, V));
      return M.push(re), le(M);
    }).catch((ne) => At(ne, Ie.NAVIGATION_CANCELLED) ? ne : Promise.reject(ne));
  }
  function N(T, V, M) {
    s.list().forEach((X) => z(() => X(T, V, M)));
  }
  function y(T, V, M, X, ae) {
    const $e = $(T, V);
    if ($e) return $e;
    const re = V === Gt, ne = Ro ? history.state : {};
    M && (X || re ? n.replace(T.fullPath, Se({ scroll: re && ne && ne.scroll }, ae)) : n.push(T.fullPath, ae)), l.value = T, ye(T, V, M, re), ue();
  }
  let R;
  function _() {
    R || (R = n.listen((T, V, M) => {
      if (!gt.listening) return;
      const X = v(T), ae = k(X, gt.currentRoute.value);
      if (ae) {
        b(Se(ae, { replace: true, force: true }), X).catch(ir);
        return;
      }
      c = X;
      const $e = l.value;
      Ro && up(Ta($e.fullPath, M.delta), lp()), O(X, $e).catch((re) => At(re, Ie.NAVIGATION_ABORTED | Ie.NAVIGATION_CANCELLED) ? re : At(re, Ie.NAVIGATION_GUARD_REDIRECT) ? (b(Se(x(re.to), { force: true }), X).then((ne) => {
        At(ne, Ie.NAVIGATION_ABORTED | Ie.NAVIGATION_DUPLICATED) && !M.delta && M.type === ti.pop && n.go(-1, false);
      }).catch(ir), Promise.reject()) : (M.delta && n.go(-M.delta, false), G(re, X, $e))).then((re) => {
        re = re || y(X, $e, false), re && (M.delta && !At(re, Ie.NAVIGATION_CANCELLED) ? n.go(-M.delta, false) : M.type === ti.pop && At(re, Ie.NAVIGATION_ABORTED | Ie.NAVIGATION_DUPLICATED) && n.go(-1, false)), N(X, $e, re);
      }).catch(ir);
    }));
  }
  let P = Yo(), L = Yo(), A;
  function G(T, V, M) {
    ue(T);
    const X = L.list();
    return X.length ? X.forEach((ae) => ae(T, V, M)) : console.error(T), Promise.reject(T);
  }
  function ie() {
    return A && l.value !== Gt ? Promise.resolve() : new Promise((T, V) => {
      P.add([T, V]);
    });
  }
  function ue(T) {
    return A || (A = !T, _(), P.list().forEach(([V, M]) => T ? M(T) : V()), P.reset()), T;
  }
  function ye(T, V, M, X) {
    const { scrollBehavior: ae } = e;
    if (!Ro || !ae) return Promise.resolve();
    const $e = !M && dp(Ta(T.fullPath, 0)) || (X || !M) && history.state && history.state.scroll || null;
    return bo().then(() => ae(T, V, $e)).then((re) => re && cp(re)).catch((re) => G(re, T, V));
  }
  const fe = (T) => n.go(T);
  let Ke;
  const Ye = /* @__PURE__ */ new Set(), gt = { currentRoute: l, listening: true, addRoute: h, removeRoute: p, clearRoutes: t.clearRoutes, hasRoute: g, getRoutes: m, resolve: v, options: e, push: C, replace: E, go: fe, back: () => fe(-1), forward: () => fe(1), beforeEach: i.add, beforeResolve: a.add, afterEach: s.add, onError: L.add, isReady: ie, install(T) {
    T.component("RouterLink", Mp), T.component("RouterView", Fp), T.config.globalProperties.$router = gt, Object.defineProperty(T.config.globalProperties, "$route", { enumerable: true, get: () => Mo(l) }), Ro && !Ke && l.value === Gt && (Ke = true, C(n.location).catch((X) => {
    }));
    const V = {};
    for (const X in Gt) Object.defineProperty(V, X, { get: () => l.value[X], enumerable: true });
    T.provide(an, gt), T.provide(Ii, Sd(V)), T.provide(ri, l);
    const M = T.unmount;
    Ye.add(T), T.unmount = function() {
      Ye.delete(T), Ye.size < 1 && (c = Gt, R && R(), R = null, l.value = Gt, Ke = false, A = false), M();
    };
  } };
  function le(T) {
    return T.reduce((V, M) => V.then(() => z(M)), Promise.resolve());
  }
  return gt;
}
function m2() {
  return ce(an);
}
function g2(e) {
  return ce(Ii);
}
const Hp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, v2 = oe({ name: "InfoCircle", render: function(t, o) {
  return rn(), on("svg", Hp, o[0] || (o[0] = [nt("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [nt("circle", { cx: "12", cy: "12", r: "9" }), nt("path", { d: "M12 8h.01" }), nt("path", { d: "M11 12h1v4h1" })], -1)]));
} }), Np = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, b2 = oe({ name: "Map", render: function(t, o) {
  return rn(), on("svg", Np, o[0] || (o[0] = [nt("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [nt("path", { d: "M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3V7" }), nt("path", { d: "M9 4v13" }), nt("path", { d: "M15 7v13" })], -1)]));
} }), Wp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, x2 = oe({ name: "MapPin", render: function(t, o) {
  return rn(), on("svg", Wp, o[0] || (o[0] = [nt("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [nt("circle", { cx: "12", cy: "11", r: "3" }), nt("path", { d: "M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" })], -1)]));
} }), jp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, C2 = oe({ name: "Settings", render: function(t, o) {
  return rn(), on("svg", jp, o[0] || (o[0] = [nt("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [nt("path", { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z" }), nt("circle", { cx: "12", cy: "12", r: "3" })], -1)]));
} });
function Vp(e) {
  let t = ".", o = "__", r = "--", n;
  if (e) {
    let p = e.blockPrefix;
    p && (t = p), p = e.elementPrefix, p && (o = p), p = e.modifierPrefix, p && (r = p);
  }
  const i = { install(p) {
    n = p.c;
    const m = p.context;
    m.bem = {}, m.bem.b = null, m.bem.els = null;
  } };
  function a(p) {
    let m, g;
    return { before(v) {
      m = v.bem.b, g = v.bem.els, v.bem.els = null;
    }, after(v) {
      v.bem.b = m, v.bem.els = g;
    }, $({ context: v, props: x }) {
      return p = typeof p == "string" ? p : p({ context: v, props: x }), v.bem.b = p, `${(x == null ? void 0 : x.bPrefix) || t}${v.bem.b}`;
    } };
  }
  function s(p) {
    let m;
    return { before(g) {
      m = g.bem.els;
    }, after(g) {
      g.bem.els = m;
    }, $({ context: g, props: v }) {
      return p = typeof p == "string" ? p : p({ context: g, props: v }), g.bem.els = p.split(",").map((x) => x.trim()), g.bem.els.map((x) => `${(v == null ? void 0 : v.bPrefix) || t}${g.bem.b}${o}${x}`).join(", ");
    } };
  }
  function l(p) {
    return { $({ context: m, props: g }) {
      p = typeof p == "string" ? p : p({ context: m, props: g });
      const v = p.split(",").map((C) => C.trim());
      function x(C) {
        return v.map((E) => `&${(g == null ? void 0 : g.bPrefix) || t}${m.bem.b}${C !== void 0 ? `${o}${C}` : ""}${r}${E}`).join(", ");
      }
      const $ = m.bem.els;
      return $ !== null ? x($[0]) : x();
    } };
  }
  function c(p) {
    return { $({ context: m, props: g }) {
      p = typeof p == "string" ? p : p({ context: m, props: g });
      const v = m.bem.els;
      return `&:not(${(g == null ? void 0 : g.bPrefix) || t}${m.bem.b}${v !== null && v.length > 0 ? `${o}${v[0]}` : ""}${r}${p})`;
    } };
  }
  return Object.assign(i, { cB: ((...p) => n(a(p[0]), p[1], p[2])), cE: ((...p) => n(s(p[0]), p[1], p[2])), cM: ((...p) => n(l(p[0]), p[1], p[2])), cNotM: ((...p) => n(c(p[0]), p[1], p[2])) }), i;
}
function Zp(e) {
  let t = 0;
  for (let o = 0; o < e.length; ++o) e[o] === "&" && ++t;
  return t;
}
const Kl = /\s*,(?![^(]*\))\s*/g, Up = /\s+/g;
function Gp(e, t) {
  const o = [];
  return t.split(Kl).forEach((r) => {
    let n = Zp(r);
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
      i.forEach((s) => {
        e.forEach((l) => {
          a.push(s.replace("&", l));
        });
      }), i = a;
    }
    i.forEach((a) => o.push(a));
  }), o;
}
function Kp(e, t) {
  const o = [];
  return t.split(Kl).forEach((r) => {
    e.forEach((n) => {
      o.push((n && n + " ") + r);
    });
  }), o;
}
function qp(e) {
  let t = [""];
  return e.forEach((o) => {
    o = o && o.trim(), o && (o.includes("&") ? t = Gp(t, o) : t = Kp(t, o));
  }), t.join(", ").replace(Up, " ");
}
function Ha(e) {
  if (!e) return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function sn(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Yp(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Pr(e) {
  return e ? /^\s*@(s|m)/.test(e) : false;
}
const Xp = /[A-Z]/g;
function ql(e) {
  return e.replace(Xp, (t) => "-" + t.toLowerCase());
}
function Jp(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((o) => t + `  ${ql(o[0])}: ${o[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Qp(e, t, o) {
  return typeof e == "function" ? e({ context: t.context, props: o }) : e;
}
function Na(e, t, o, r) {
  if (!t) return "";
  const n = Qp(t, o, r);
  if (!n) return "";
  if (typeof n == "string") return `${e} {
${n}
}`;
  const i = Object.keys(n);
  if (i.length === 0) return o.config.keepEmptyBlock ? e + ` {
}` : "";
  const a = e ? [e + " {"] : [];
  return i.forEach((s) => {
    const l = n[s];
    if (s === "raw") {
      a.push(`
` + l + `
`);
      return;
    }
    s = ql(s), l != null && a.push(`  ${s}${Jp(l)}`);
  }), e && a.push("}"), a.join(`
`);
}
function ni(e, t, o) {
  e && e.forEach((r) => {
    if (Array.isArray(r)) ni(r, t, o);
    else if (typeof r == "function") {
      const n = r(t);
      Array.isArray(n) ? ni(n, t, o) : n && o(n);
    } else r && o(r);
  });
}
function Yl(e, t, o, r, n) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string") Pr(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const c = i({ context: r.context, props: n });
    Pr(c) ? a = c : t.push(c);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string") Pr(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const c = i.$({ context: r.context, props: n });
    Pr(c) ? a = c : t.push(c);
  }
  const s = qp(t), l = Na(s, e.props, r, n);
  a ? o.push(`${a} {`) : l.length && o.push(l), e.children && ni(e.children, { context: r.context, props: n }, (c) => {
    if (typeof c == "string") {
      const u = Na(s, { raw: c }, r, n);
      o.push(u);
    } else Yl(c, t, o, r, n);
  }), t.pop(), a && o.push("}"), i && i.after && i.after(r.context);
}
function em(e, t, o) {
  const r = [];
  return Yl(e, [], r, t, o), r.join(`

`);
}
function ur(e) {
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
function tm(e, t, o, r) {
  const { els: n } = t;
  if (o === void 0) n.forEach(Ha), t.els = [];
  else {
    const i = sn(o, r);
    i && n.includes(i) && (Ha(i), t.els = n.filter((a) => a !== i));
  }
}
function Wa(e, t) {
  e.push(t);
}
function om(e, t, o, r, n, i, a, s, l) {
  let c;
  if (o === void 0 && (c = t.render(r), o = ur(c)), l) {
    l.adapter(o, c ?? t.render(r));
    return;
  }
  s === void 0 && (s = document.head);
  const u = sn(o, s);
  if (u !== null && !i) return u;
  const d = u ?? Yp(o);
  if (c === void 0 && (c = t.render(r)), d.textContent = c, u !== null) return u;
  if (a) {
    const f = s.querySelector(`meta[name="${a}"]`);
    if (f) return s.insertBefore(d, f), Wa(t.els, d), d;
  }
  return n ? s.insertBefore(d, s.querySelector("style, link")) : s.appendChild(d), Wa(t.els, d), d;
}
function rm(e) {
  return em(this, this.instance, e);
}
function nm(e = {}) {
  const { id: t, ssr: o, props: r, head: n = false, force: i = false, anchorMetaName: a, parent: s } = e;
  return om(this.instance, this, t, r, n, i, a, s, o);
}
function im(e = {}) {
  const { id: t, parent: o } = e;
  tm(this.instance, this, t, o);
}
const Tr = function(e, t, o, r) {
  return { instance: e, $: t, props: o, children: r, els: [], render: rm, mount: nm, unmount: im };
}, am = function(e, t, o, r) {
  return Array.isArray(t) ? Tr(e, { $: null }, null, t) : Array.isArray(o) ? Tr(e, t, null, o) : Array.isArray(r) ? Tr(e, t, o, r) : Tr(e, t, o, null);
};
function Xl(e = {}) {
  const t = { c: ((...o) => am(t, ...o)), use: (o, ...r) => o.install(t, ...r), find: sn, context: {}, config: e };
  return t;
}
function sm(e, t) {
  if (e === void 0) return false;
  if (t) {
    const { context: { ids: o } } = t;
    return o.has(e);
  }
  return sn(e) !== null;
}
const lm = "n", dr = `.${lm}-`, cm = "__", um = "--", Jl = Xl(), Ql = Vp({ blockPrefix: dr, elementPrefix: cm, modifierPrefix: um });
Jl.use(Ql);
const { c: B, find: y2 } = Jl, { cB: Q, cE: Z, cM: K, cNotM: Ht } = Ql;
function ec(e) {
  return B(({ props: { bPrefix: t } }) => `${t || dr}modal, ${t || dr}drawer`, [e]);
}
function dm(e) {
  return B(({ props: { bPrefix: t } }) => `${t || dr}popover`, [e]);
}
function tc(e) {
  return B(({ props: { bPrefix: t } }) => `&${t || dr}modal`, e);
}
const fm = (...e) => B(">", [Q(...e)]);
function ee(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (o) => o.toUpperCase()));
}
let Gr = [];
const oc = /* @__PURE__ */ new WeakMap();
function hm() {
  Gr.forEach((e) => e(...oc.get(e))), Gr = [];
}
function pm(e, ...t) {
  oc.set(e, t), !Gr.includes(e) && Gr.push(e) === 1 && requestAnimationFrame(hm);
}
function ja(e, t) {
  let { target: o } = e;
  for (; o; ) {
    if (o.dataset && o.dataset[t] !== void 0) return true;
    o = o.parentElement;
  }
  return false;
}
function fr(e) {
  return e.composedPath()[0] || null;
}
function Va(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function w2(e) {
  if (e != null) return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function fo(e, t) {
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
function S2(e, t) {
  const [o, r] = e.split(" ");
  return { row: o, col: r || o };
}
const Za = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32", transparent: "#0000" };
function $2(e, t, o) {
  t /= 100, o /= 100;
  const r = t * Math.min(o, 1 - o) + o;
  return [e, r ? (2 - 2 * o / r) * 100 : 0, r * 100];
}
function E2(e, t, o) {
  t /= 100, o /= 100;
  const r = o - o * t / 2, n = Math.min(r, 1 - r);
  return [e, n ? (o - r) / n * 100 : 0, r * 100];
}
function mm(e, t, o) {
  t /= 100, o /= 100;
  let r = (n, i = (n + e / 60) % 6) => o - o * t * Math.max(Math.min(i, 4 - i, 1), 0);
  return [r(5) * 255, r(3) * 255, r(1) * 255];
}
function z2(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (i < 0 ? i + 6 : i), r && n / r * 100, r * 100];
}
function P2(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = 1 - Math.abs(r + r - n - 1), a = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (a < 0 ? a + 6 : a), i ? n / i * 100 : 0, (r + r - n) * 50];
}
function gm(e, t, o) {
  t /= 100, o /= 100;
  let r = t * Math.min(o, 1 - o), n = (i, a = (i + e / 30) % 12) => o - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [n(0) * 255, n(8) * 255, n(4) * 255];
}
const Rt = "^\\s*", kt = "\\s*$", Qt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", lt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", ho = "([0-9A-Fa-f])", po = "([0-9A-Fa-f]{2})", rc = new RegExp(`${Rt}hsl\\s*\\(${lt},${Qt},${Qt}\\)${kt}`), nc = new RegExp(`${Rt}hsv\\s*\\(${lt},${Qt},${Qt}\\)${kt}`), ic = new RegExp(`${Rt}hsla\\s*\\(${lt},${Qt},${Qt},${lt}\\)${kt}`), ac = new RegExp(`${Rt}hsva\\s*\\(${lt},${Qt},${Qt},${lt}\\)${kt}`), vm = new RegExp(`${Rt}rgb\\s*\\(${lt},${lt},${lt}\\)${kt}`), bm = new RegExp(`${Rt}rgba\\s*\\(${lt},${lt},${lt},${lt}\\)${kt}`), Ai = new RegExp(`${Rt}#${ho}${ho}${ho}${kt}`), Oi = new RegExp(`${Rt}#${po}${po}${po}${kt}`), Mi = new RegExp(`${Rt}#${ho}${ho}${ho}${ho}${kt}`), Di = new RegExp(`${Rt}#${po}${po}${po}${po}${kt}`);
function ot(e) {
  return parseInt(e, 16);
}
function xm(e) {
  try {
    let t;
    if (t = ic.exec(e)) return [_t(t[1]), Fe(t[5]), Fe(t[9]), Nt(t[13])];
    if (t = rc.exec(e)) return [_t(t[1]), Fe(t[5]), Fe(t[9]), 1];
    throw new Error(`[seemly/hsla]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Cm(e) {
  try {
    let t;
    if (t = ac.exec(e)) return [_t(t[1]), Fe(t[5]), Fe(t[9]), Nt(t[13])];
    if (t = nc.exec(e)) return [_t(t[1]), Fe(t[5]), Fe(t[9]), 1];
    throw new Error(`[seemly/hsva]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function eo(e) {
  try {
    let t;
    if (t = Oi.exec(e)) return [ot(t[1]), ot(t[2]), ot(t[3]), 1];
    if (t = vm.exec(e)) return [Ae(t[1]), Ae(t[5]), Ae(t[9]), 1];
    if (t = bm.exec(e)) return [Ae(t[1]), Ae(t[5]), Ae(t[9]), Nt(t[13])];
    if (t = Ai.exec(e)) return [ot(t[1] + t[1]), ot(t[2] + t[2]), ot(t[3] + t[3]), 1];
    if (t = Di.exec(e)) return [ot(t[1]), ot(t[2]), ot(t[3]), Nt(ot(t[4]) / 255)];
    if (t = Mi.exec(e)) return [ot(t[1] + t[1]), ot(t[2] + t[2]), ot(t[3] + t[3]), Nt(ot(t[4] + t[4]) / 255)];
    if (e in Za) return eo(Za[e]);
    if (rc.test(e) || ic.test(e)) {
      const [o, r, n, i] = xm(e);
      return [...gm(o, r, n), i];
    } else if (nc.test(e) || ac.test(e)) {
      const [o, r, n, i] = Cm(e);
      return [...mm(o, r, n), i];
    }
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ym(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function wm(e, t, o) {
  return `rgb(${Ae(e)}, ${Ae(t)}, ${Ae(o)})`;
}
function ii(e, t, o, r) {
  return `rgba(${Ae(e)}, ${Ae(t)}, ${Ae(o)}, ${ym(r)})`;
}
function _n(e, t, o, r, n) {
  return Ae((e * t * (1 - r) + o * r) / n);
}
function j(e, t) {
  Array.isArray(e) || (e = eo(e)), Array.isArray(t) || (t = eo(t));
  const o = e[3], r = t[3], n = Nt(o + r - o * r);
  return ii(_n(e[0], o, t[0], r, n), _n(e[1], o, t[1], r, n), _n(e[2], o, t[2], r, n), n);
}
function U(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : eo(e);
  return typeof t.alpha == "number" ? ii(o, r, n, t.alpha) : ii(o, r, n, i);
}
function _r(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : eo(e), { lightness: a = 1, alpha: s = 1 } = t;
  return Sm([o * a, r * a, n * a, i * s]);
}
function Nt(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function _t(e) {
  const t = Math.round(Number(e));
  return t >= 360 || t < 0 ? 0 : t;
}
function Ae(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Fe(e) {
  const t = Math.round(Number(e));
  return t > 100 ? 100 : t < 0 ? 0 : t;
}
function T2(e) {
  const [t, o, r] = Array.isArray(e) ? e : eo(e);
  return wm(t, o, r);
}
function Sm(e) {
  const [t, o, r] = e;
  return 3 in e ? `rgba(${Ae(t)}, ${Ae(o)}, ${Ae(r)}, ${Nt(e[3])})` : `rgba(${Ae(t)}, ${Ae(o)}, ${Ae(r)}, 1)`;
}
function _2(e) {
  return `hsv(${_t(e[0])}, ${Fe(e[1])}%, ${Fe(e[2])}%)`;
}
function R2(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsva(${_t(t)}, ${Fe(o)}%, ${Fe(r)}%, ${Nt(e[3])})` : `hsva(${_t(t)}, ${Fe(o)}%, ${Fe(r)}%, 1)`;
}
function k2(e) {
  return `hsl(${_t(e[0])}, ${Fe(e[1])}%, ${Fe(e[2])}%)`;
}
function I2(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsla(${_t(t)}, ${Fe(o)}%, ${Fe(r)}%, ${Nt(e[3])})` : `hsla(${_t(t)}, ${Fe(o)}%, ${Fe(r)}%, 1)`;
}
function A2(e) {
  if (typeof e == "string") {
    let r;
    if (r = Oi.exec(e)) return `${r[0]}FF`;
    if (r = Di.exec(e)) return r[0];
    if (r = Ai.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}FF`;
    if (r = Mi.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}${r[4]}${r[4]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  const t = `#${e.slice(0, 3).map((r) => Ae(r).toString(16).toUpperCase().padStart(2, "0")).join("")}`, o = e.length === 3 ? "FF" : Ae(e[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return t + o;
}
function O2(e) {
  if (typeof e == "string") {
    let t;
    if (t = Oi.exec(e)) return t[0];
    if (t = Di.exec(e)) return t[0].slice(0, 7);
    if (t = Ai.exec(e) || Mi.exec(e)) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  return `#${e.slice(0, 3).map((t) => Ae(t).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function $m(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function M2(e, t) {
  const o = [];
  for (let r = 0; r < e; ++r) o.push(t);
  return o;
}
function Hr(e) {
  return e.composedPath()[0];
}
const Em = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function zm(e, t, o) {
  if (e === "mousemoveoutside") {
    const r = (n) => {
      t.contains(Hr(n)) || o(n);
    };
    return { mousemove: r, touchstart: r };
  } else if (e === "clickoutside") {
    let r = false;
    const n = (a) => {
      r = !t.contains(Hr(a));
    }, i = (a) => {
      r && (t.contains(Hr(a)) || o(a));
    };
    return { mousedown: n, mouseup: i, touchstart: n, touchend: i };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {};
}
function sc(e, t, o) {
  const r = Em[e];
  let n = r.get(t);
  n === void 0 && r.set(t, n = /* @__PURE__ */ new WeakMap());
  let i = n.get(o);
  return i === void 0 && n.set(o, i = zm(e, t, o)), i;
}
function Pm(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = sc(e, t, o);
    return Object.keys(n).forEach((i) => {
      ve(i, document, n[i], r);
    }), true;
  }
  return false;
}
function Tm(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = sc(e, t, o);
    return Object.keys(n).forEach((i) => {
      ge(i, document, n[i], r);
    }), true;
  }
  return false;
}
function _m() {
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
  function n(b, S, z) {
    const O = b[S];
    return b[S] = function() {
      return z.apply(b, arguments), O.apply(b, arguments);
    }, b;
  }
  function i(b, S) {
    b[S] = Event.prototype[S];
  }
  const a = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function l() {
    var b;
    return (b = a.get(this)) !== null && b !== void 0 ? b : null;
  }
  function c(b, S) {
    s !== void 0 && Object.defineProperty(b, "currentTarget", { configurable: true, enumerable: true, get: S ?? s.get });
  }
  const u = { bubble: {}, capture: {} }, d = {};
  function f() {
    const b = function(S) {
      const { type: z, eventPhase: O, bubbles: N } = S, y = Hr(S);
      if (O === 2) return;
      const R = O === 1 ? "capture" : "bubble";
      let _ = y;
      const P = [];
      for (; _ === null && (_ = window), P.push(_), _ !== window; ) _ = _.parentNode || null;
      const L = u.capture[z], A = u.bubble[z];
      if (n(S, "stopPropagation", o), n(S, "stopImmediatePropagation", r), c(S, l), R === "capture") {
        if (L === void 0) return;
        for (let G = P.length - 1; G >= 0 && !e.has(S); --G) {
          const ie = P[G], ue = L.get(ie);
          if (ue !== void 0) {
            a.set(S, ie);
            for (const ye of ue) {
              if (t.has(S)) break;
              ye(S);
            }
          }
          if (G === 0 && !N && A !== void 0) {
            const ye = A.get(ie);
            if (ye !== void 0) for (const fe of ye) {
              if (t.has(S)) break;
              fe(S);
            }
          }
        }
      } else if (R === "bubble") {
        if (A === void 0) return;
        for (let G = 0; G < P.length && !e.has(S); ++G) {
          const ie = P[G], ue = A.get(ie);
          if (ue !== void 0) {
            a.set(S, ie);
            for (const ye of ue) {
              if (t.has(S)) break;
              ye(S);
            }
          }
        }
      }
      i(S, "stopPropagation"), i(S, "stopImmediatePropagation"), c(S);
    };
    return b.displayName = "evtdUnifiedHandler", b;
  }
  function h() {
    const b = function(S) {
      const { type: z, eventPhase: O } = S;
      if (O !== 2) return;
      const N = d[z];
      N !== void 0 && N.forEach((y) => y(S));
    };
    return b.displayName = "evtdUnifiedWindowEventHandler", b;
  }
  const p = f(), m = h();
  function g(b, S) {
    const z = u[b];
    return z[S] === void 0 && (z[S] = /* @__PURE__ */ new Map(), window.addEventListener(S, p, b === "capture")), z[S];
  }
  function v(b) {
    return d[b] === void 0 && (d[b] = /* @__PURE__ */ new Set(), window.addEventListener(b, m)), d[b];
  }
  function x(b, S) {
    let z = b.get(S);
    return z === void 0 && b.set(S, z = /* @__PURE__ */ new Set()), z;
  }
  function $(b, S, z, O) {
    const N = u[S][z];
    if (N !== void 0) {
      const y = N.get(b);
      if (y !== void 0 && y.has(O)) return true;
    }
    return false;
  }
  function C(b, S) {
    const z = d[b];
    return !!(z !== void 0 && z.has(S));
  }
  function E(b, S, z, O) {
    let N;
    if (typeof O == "object" && O.once === true ? N = (L) => {
      k(b, S, N, O), z(L);
    } : N = z, Pm(b, S, N, O)) return;
    const R = O === true || typeof O == "object" && O.capture === true ? "capture" : "bubble", _ = g(R, b), P = x(_, S);
    if (P.has(N) || P.add(N), S === window) {
      const L = v(b);
      L.has(N) || L.add(N);
    }
  }
  function k(b, S, z, O) {
    if (Tm(b, S, z, O)) return;
    const y = O === true || typeof O == "object" && O.capture === true, R = y ? "capture" : "bubble", _ = g(R, b), P = x(_, S);
    if (S === window && !$(S, y ? "bubble" : "capture", b, z) && C(b, z)) {
      const A = d[b];
      A.delete(z), A.size === 0 && (window.removeEventListener(b, m), d[b] = void 0);
    }
    P.has(z) && P.delete(z), P.size === 0 && _.delete(S), _.size === 0 && (window.removeEventListener(b, p, R === "capture"), u[R][b] = void 0);
  }
  return { on: E, off: k };
}
const { on: ve, off: ge } = _m();
function Rm(e) {
  const t = W(!!e.value);
  if (t.value) return Xt(t);
  const o = Le(e, (r) => {
    r && (t.value = true, o());
  });
  return Xt(t);
}
function pt(e) {
  const t = D(e), o = W(t.value);
  return Le(t, (r) => {
    o.value = r;
  }), typeof e == "function" ? o : { __v_isRef: true, get value() {
    return o.value;
  }, set value(r) {
    e.set(r);
  } };
}
function Bi() {
  return Zo() !== null;
}
const Li = typeof window < "u";
let Bo, ar;
const km = () => {
  var e, t;
  Bo = Li ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, ar = false, Bo !== void 0 ? Bo.then(() => {
    ar = true;
  }) : ar = true;
};
km();
function Im(e) {
  if (ar) return;
  let t = false;
  wt(() => {
    ar || (Bo == null ? void 0 : Bo.then(() => {
      t || e();
    }));
  }), Qe(() => {
    t = true;
  });
}
const tr = W(null);
function Ua(e) {
  if (e.clientX > 0 || e.clientY > 0) tr.value = { x: e.clientX, y: e.clientY };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: o, top: r, width: n, height: i } = t.getBoundingClientRect();
      o > 0 || r > 0 ? tr.value = { x: o + n / 2, y: r + i / 2 } : tr.value = { x: 0, y: 0 };
    } else tr.value = null;
  }
}
let Rr = 0, Ga = true;
function Am() {
  if (!Li) return Xt(W(null));
  Rr === 0 && ve("click", document, Ua, true);
  const e = () => {
    Rr += 1;
  };
  return Ga && (Ga = Bi()) ? (yo(e), Qe(() => {
    Rr -= 1, Rr === 0 && ge("click", document, Ua, true);
  })) : e(), Xt(tr);
}
const Om = W(void 0);
let kr = 0;
function Ka() {
  Om.value = Date.now();
}
let qa = true;
function Mm(e) {
  if (!Li) return Xt(W(false));
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
  kr === 0 && ve("click", window, Ka, true);
  const i = () => {
    kr += 1, ve("click", window, n, true);
  };
  return qa && (qa = Bi()) ? (yo(i), Qe(() => {
    kr -= 1, kr === 0 && ge("click", window, Ka, true), ge("click", window, n, true), r();
  })) : i(), Xt(t);
}
function lc(e, t) {
  return Le(e, (o) => {
    o !== void 0 && (t.value = o);
  }), D(() => e.value === void 0 ? t.value : e.value);
}
function ln() {
  const e = W(false);
  return wt(() => {
    e.value = true;
  }), Xt(e);
}
function cc(e, t) {
  return D(() => {
    for (const o of t) if (e[o] !== void 0) return e[o];
    return e[t[t.length - 1]];
  });
}
const Dm = (typeof window > "u" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function Bm() {
  return Dm;
}
function Lm(e = {}, t) {
  const o = hl({ ctrl: false, command: false, win: false, shift: false, tab: false }), { keydown: r, keyup: n } = e, i = (l) => {
    switch (l.key) {
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
    r !== void 0 && Object.keys(r).forEach((c) => {
      if (c !== l.key) return;
      const u = r[c];
      if (typeof u == "function") u(l);
      else {
        const { stop: d = false, prevent: f = false } = u;
        d && l.stopPropagation(), f && l.preventDefault(), u.handler(l);
      }
    });
  }, a = (l) => {
    switch (l.key) {
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
    n !== void 0 && Object.keys(n).forEach((c) => {
      if (c !== l.key) return;
      const u = n[c];
      if (typeof u == "function") u(l);
      else {
        const { stop: d = false, prevent: f = false } = u;
        d && l.stopPropagation(), f && l.preventDefault(), u.handler(l);
      }
    });
  }, s = () => {
    (t === void 0 || t.value) && (ve("keydown", document, i), ve("keyup", document, a)), t !== void 0 && Le(t, (l) => {
      l ? (ve("keydown", document, i), ve("keyup", document, a)) : (ge("keydown", document, i), ge("keyup", document, a));
    });
  };
  return Bi() ? (yo(s), Qe(() => {
    (t === void 0 || t.value) && (ge("keydown", document, i), ge("keyup", document, a));
  })) : s(), Xt(o);
}
function D2(e) {
  return e;
}
const B2 = "n-internal-select-menu", Fm = "n-internal-select-menu-body", cn = "n-drawer-body", L2 = "n-drawer", un = "n-modal-body", Hm = "n-modal-provider", uc = "n-modal", xr = "n-popover-body", dc = "__disabled__";
function Wo(e) {
  const t = ce(un, null), o = ce(cn, null), r = ce(xr, null), n = ce(Fm, null), i = W();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    wt(() => {
      ve("fullscreenchange", document, a);
    }), Qe(() => {
      ge("fullscreenchange", document, a);
    });
  }
  return pt(() => {
    var a;
    const { to: s } = e;
    return s !== void 0 ? s === false ? dc : s === true ? i.value || "body" : s : (t == null ? void 0 : t.value) ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : (o == null ? void 0 : o.value) ? o.value : (r == null ? void 0 : r.value) ? r.value : (n == null ? void 0 : n.value) ? n.value : s ?? (i.value || "body");
  });
}
Wo.tdkey = dc;
Wo.propTo = { type: [String, Object, Boolean], default: void 0 };
function Nm(e, t, o) {
  const r = W(e.value);
  let n = null;
  return Le(e, (i) => {
    n !== null && window.clearTimeout(n), i === true ? o && !o.value ? r.value = true : n = window.setTimeout(() => {
      r.value = true;
    }, t) : r.value = false;
  }), r;
}
const Cr = typeof document < "u" && typeof window < "u", Fi = W(false);
function Ya() {
  Fi.value = true;
}
function Xa() {
  Fi.value = false;
}
let Xo = 0;
function Wm() {
  return Cr && (yo(() => {
    Xo || (window.addEventListener("compositionstart", Ya), window.addEventListener("compositionend", Xa)), Xo++;
  }), Qe(() => {
    Xo <= 1 ? (window.removeEventListener("compositionstart", Ya), window.removeEventListener("compositionend", Xa), Xo = 0) : Xo--;
  })), Fi;
}
let zo = 0, Ja = "", Qa = "", es = "", ts = "";
const os = W("0px");
function jm(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let o, r = false;
  const n = () => {
    t.style.marginRight = Ja, t.style.overflow = Qa, t.style.overflowX = es, t.style.overflowY = ts, os.value = "0px";
  };
  wt(() => {
    o = Le(e, (i) => {
      if (i) {
        if (!zo) {
          const a = window.innerWidth - t.offsetWidth;
          a > 0 && (Ja = t.style.marginRight, t.style.marginRight = `${a}px`, os.value = `${a}px`), Qa = t.style.overflow, es = t.style.overflowX, ts = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        r = true, zo++;
      } else zo--, zo || n(), r = false;
    }, { immediate: true });
  }), Qe(() => {
    o == null ? void 0 : o(), r && (zo--, zo || n(), r = false);
  });
}
function Vm(e) {
  const t = { isDeactivated: false };
  let o = false;
  return fl(() => {
    if (t.isDeactivated = false, !o) {
      o = true;
      return;
    }
    e();
  }), $i(() => {
    t.isDeactivated = true, o || (o = true);
  }), t;
}
function ai(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  return r();
}
function si(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(Zr(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        si(r, t, o);
        return;
      }
      if (r.type === wo) {
        if (r.children === null) return;
        Array.isArray(r.children) && si(r.children, t, o);
      } else r.type !== Ei && o.push(r);
    }
  }), o;
}
function rs(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  const n = si(r());
  if (n.length === 1) return n[0];
  throw new Error(`[vueuc/${e}]: slot[${o}] should have exactly one child.`);
}
let Kt = null;
function fc() {
  if (Kt === null && (Kt = document.getElementById("v-binder-view-measurer"), Kt === null)) {
    Kt = document.createElement("div"), Kt.id = "v-binder-view-measurer";
    const { style: e } = Kt;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Kt);
  }
  return Kt.getBoundingClientRect();
}
function Zm(e, t) {
  const o = fc();
  return { top: t, left: e, height: 0, width: 0, right: o.width - e, bottom: o.height - t };
}
function Rn(e) {
  const t = e.getBoundingClientRect(), o = fc();
  return { left: t.left - o.left, top: t.top - o.top, bottom: o.height + o.top - t.bottom, right: o.width + o.left - t.right, width: t.width, height: t.height };
}
function Um(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function hc(e) {
  if (e === null) return null;
  const t = Um(e);
  if (t === null) return null;
  if (t.nodeType === 9) return document;
  if (t.nodeType === 1) {
    const { overflow: o, overflowX: r, overflowY: n } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(o + n + r)) return t;
  }
  return hc(t);
}
const pc = oe({ name: "Binder", props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(e) {
  var t;
  Be("VBinder", (t = Zo()) === null || t === void 0 ? void 0 : t.proxy);
  const o = ce("VBinder", null), r = W(null), n = (v) => {
    r.value = v, o && e.syncTargetWithParent && o.setTargetRef(v);
  };
  let i = [];
  const a = () => {
    let v = r.value;
    for (; v = hc(v), v !== null; ) i.push(v);
    for (const x of i) ve("scroll", x, d, true);
  }, s = () => {
    for (const v of i) ge("scroll", v, d, true);
    i = [];
  }, l = /* @__PURE__ */ new Set(), c = (v) => {
    l.size === 0 && a(), l.has(v) || l.add(v);
  }, u = (v) => {
    l.has(v) && l.delete(v), l.size === 0 && s();
  }, d = () => {
    pm(f);
  }, f = () => {
    l.forEach((v) => v());
  }, h = /* @__PURE__ */ new Set(), p = (v) => {
    h.size === 0 && ve("resize", window, g), h.has(v) || h.add(v);
  }, m = (v) => {
    h.has(v) && h.delete(v), h.size === 0 && ge("resize", window, g);
  }, g = () => {
    h.forEach((v) => v());
  };
  return Qe(() => {
    ge("resize", window, g), s();
  }), { targetRef: r, setTargetRef: n, addScrollListener: c, removeScrollListener: u, addResizeListener: p, removeResizeListener: m };
}, render() {
  return ai("binder", this.$slots);
} }), mc = oe({ name: "Target", setup() {
  const { setTargetRef: e, syncTarget: t } = ce("VBinder");
  return { syncTarget: t, setTargetDirective: { mounted: e, updated: e } };
}, render() {
  const { syncTarget: e, setTargetDirective: t } = this;
  return e ? xo(rs("follower", this.$slots), [[t]]) : rs("follower", this.$slots);
} }), Po = "@@mmoContext", Gm = { mounted(e, { value: t }) {
  e[Po] = { handler: void 0 }, typeof t == "function" && (e[Po].handler = t, ve("mousemoveoutside", e, t));
}, updated(e, { value: t }) {
  const o = e[Po];
  typeof t == "function" ? o.handler ? o.handler !== t && (ge("mousemoveoutside", e, o.handler), o.handler = t, ve("mousemoveoutside", e, t)) : (e[Po].handler = t, ve("mousemoveoutside", e, t)) : o.handler && (ge("mousemoveoutside", e, o.handler), o.handler = void 0);
}, unmounted(e) {
  const { handler: t } = e[Po];
  t && ge("mousemoveoutside", e, t), e[Po].handler = void 0;
} }, To = "@@coContext", li = { mounted(e, { value: t, modifiers: o }) {
  e[To] = { handler: void 0 }, typeof t == "function" && (e[To].handler = t, ve("clickoutside", e, t, { capture: o.capture }));
}, updated(e, { value: t, modifiers: o }) {
  const r = e[To];
  typeof t == "function" ? r.handler ? r.handler !== t && (ge("clickoutside", e, r.handler, { capture: o.capture }), r.handler = t, ve("clickoutside", e, t, { capture: o.capture })) : (e[To].handler = t, ve("clickoutside", e, t, { capture: o.capture })) : r.handler && (ge("clickoutside", e, r.handler, { capture: o.capture }), r.handler = void 0);
}, unmounted(e, { modifiers: t }) {
  const { handler: o } = e[To];
  o && ge("clickoutside", e, o, { capture: t.capture }), e[To].handler = void 0;
} };
function Km(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class qm {
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
    r.has(t) ? r.delete(t) : o === void 0 && Km("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const kn = new qm(), _o = "@@ziContext", Hi = { mounted(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o;
  e[_o] = { enabled: !!n, initialized: false }, n && (kn.ensureZIndex(e, r), e[_o].initialized = true);
}, updated(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o, i = e[_o].enabled;
  n && !i && (kn.ensureZIndex(e, r), e[_o].initialized = true), e[_o].enabled = !!n;
}, unmounted(e, t) {
  if (!e[_o].initialized) return;
  const { value: o = {} } = t, { zIndex: r } = o;
  kn.unregister(e, r);
} }, Ym = "@css-render/vue3-ssr";
function Xm(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Jm(e, t, o) {
  const { styles: r, ids: n } = o;
  n.has(e) || r !== null && (n.add(e), r.push(Xm(e, t)));
}
const Qm = typeof document < "u";
function Go() {
  if (Qm) return;
  const e = ce(Ym, null);
  if (e !== null) return { adapter: (t, o) => Jm(t, o, e), context: e };
}
function ns(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: or } = Xl(), gc = "vueuc-style";
function is(e) {
  return typeof e == "string" ? document.querySelector(e) : e() || null;
}
const vc = oe({ name: "LazyTeleport", props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(e) {
  return { showTeleport: Rm(xe(e, "show")), mergedTo: D(() => {
    const { to: t } = e;
    return t ?? "body";
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? ai("lazy-teleport", this.$slots) : w($d, { disabled: this.disabled, to: this.mergedTo }, ai("lazy-teleport", this.$slots)) : null;
} }), Ir = { top: "bottom", bottom: "top", left: "right", right: "left" }, as = { start: "end", center: "center", end: "start" }, In = { top: "height", bottom: "height", left: "width", right: "width" }, eg = { "bottom-start": "top left", bottom: "top center", "bottom-end": "top right", "top-start": "bottom left", top: "bottom center", "top-end": "bottom right", "right-start": "top left", right: "center left", "right-end": "bottom left", "left-start": "top right", left: "center right", "left-end": "bottom right" }, tg = { "bottom-start": "bottom left", bottom: "bottom center", "bottom-end": "bottom right", "top-start": "top left", top: "top center", "top-end": "top right", "right-start": "top right", right: "center right", "right-end": "bottom right", "left-start": "top left", left: "center left", "left-end": "bottom left" }, og = { "bottom-start": "right", "bottom-end": "left", "top-start": "right", "top-end": "left", "right-start": "bottom", "right-end": "top", "left-start": "bottom", "left-end": "top" }, ss = { top: true, bottom: false, left: true, right: false }, ls = { top: "end", bottom: "start", left: "end", right: "start" };
function rg(e, t, o, r, n, i) {
  if (!n || i) return { placement: e, top: 0, left: 0 };
  const [a, s] = e.split("-");
  let l = s ?? "center", c = { top: 0, left: 0 };
  const u = (h, p, m) => {
    let g = 0, v = 0;
    const x = o[h] - t[p] - t[h];
    return x > 0 && r && (m ? v = ss[p] ? x : -x : g = ss[p] ? x : -x), { left: g, top: v };
  }, d = a === "left" || a === "right";
  if (l !== "center") {
    const h = og[e], p = Ir[h], m = In[h];
    if (o[m] > t[m]) {
      if (t[h] + t[m] < o[m]) {
        const g = (o[m] - t[m]) / 2;
        t[h] < g || t[p] < g ? t[h] < t[p] ? (l = as[s], c = u(m, p, d)) : c = u(m, h, d) : l = "center";
      }
    } else o[m] < t[m] && t[p] < 0 && t[h] > t[p] && (l = as[s]);
  } else {
    const h = a === "bottom" || a === "top" ? "left" : "top", p = Ir[h], m = In[h], g = (o[m] - t[m]) / 2;
    (t[h] < g || t[p] < g) && (t[h] > t[p] ? (l = ls[h], c = u(m, h, d)) : (l = ls[p], c = u(m, p, d)));
  }
  let f = a;
  return t[a] < o[In[a]] && t[a] < t[Ir[a]] && (f = Ir[a]), { placement: l !== "center" ? `${f}-${l}` : f, left: c.left, top: c.top };
}
function ng(e, t) {
  return t ? tg[e] : eg[e];
}
function ig(e, t, o, r, n, i) {
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
const ag = or([or(".v-binder-follower-container", { position: "absolute", left: "0", right: "0", top: "0", height: "0", pointerEvents: "none", zIndex: "auto" }), or(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [or("> *", { pointerEvents: "all" })])]), bc = oe({ name: "Follower", inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: "bottom" }, syncTrigger: { type: Array, default: ["resize", "scroll"] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(e) {
  const t = ce("VBinder"), o = pt(() => e.enabled !== void 0 ? e.enabled : e.show), r = W(null), n = W(null), i = () => {
    const { syncTrigger: f } = e;
    f.includes("scroll") && t.addScrollListener(l), f.includes("resize") && t.addResizeListener(l);
  }, a = () => {
    t.removeScrollListener(l), t.removeResizeListener(l);
  };
  wt(() => {
    o.value && (l(), i());
  });
  const s = Go();
  ag.mount({ id: "vueuc/binder", head: true, anchorMetaName: gc, ssr: s }), Qe(() => {
    a();
  }), Im(() => {
    o.value && l();
  });
  const l = () => {
    if (!o.value) return;
    const f = r.value;
    if (f === null) return;
    const h = t.targetRef, { x: p, y: m, overlap: g } = e, v = p !== void 0 && m !== void 0 ? Zm(p, m) : Rn(h);
    f.style.setProperty("--v-target-width", `${Math.round(v.width)}px`), f.style.setProperty("--v-target-height", `${Math.round(v.height)}px`);
    const { width: x, minWidth: $, placement: C, internalShift: E, flip: k } = e;
    f.setAttribute("v-placement", C), g ? f.setAttribute("v-overlap", "") : f.removeAttribute("v-overlap");
    const { style: b } = f;
    x === "target" ? b.width = `${v.width}px` : x !== void 0 ? b.width = x : b.width = "", $ === "target" ? b.minWidth = `${v.width}px` : $ !== void 0 ? b.minWidth = $ : b.minWidth = "";
    const S = Rn(f), z = Rn(n.value), { left: O, top: N, placement: y } = rg(C, v, S, E, k, g), R = ng(y, g), { left: _, top: P, transform: L } = ig(y, z, v, N, O, g);
    f.setAttribute("v-placement", y), f.style.setProperty("--v-offset-left", `${Math.round(O)}px`), f.style.setProperty("--v-offset-top", `${Math.round(N)}px`), f.style.transform = `translateX(${_}) translateY(${P}) ${L}`, f.style.setProperty("--v-transform-origin", R), f.style.transformOrigin = R;
  };
  Le(o, (f) => {
    f ? (i(), c()) : a();
  });
  const c = () => {
    bo().then(l).catch((f) => console.error(f));
  };
  ["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach((f) => {
    Le(xe(e, f), l);
  }), ["teleportDisabled"].forEach((f) => {
    Le(xe(e, f), c);
  }), Le(xe(e, "syncTrigger"), (f) => {
    f.includes("resize") ? t.addResizeListener(l) : t.removeResizeListener(l), f.includes("scroll") ? t.addScrollListener(l) : t.removeScrollListener(l);
  });
  const u = ln(), d = pt(() => {
    const { to: f } = e;
    if (f !== void 0) return f;
    u.value;
  });
  return { VBinder: t, mergedEnabled: o, offsetContainerRef: n, followerRef: r, mergedTo: d, syncPosition: l };
}, render() {
  return w(vc, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var e, t;
    const o = w("div", { class: ["v-binder-follower-container", this.containerClass], ref: "offsetContainerRef" }, [w("div", { class: "v-binder-follower-content", ref: "followerRef" }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))]);
    return this.zindexable ? xo(o, [[Hi, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : o;
  } });
} });
var go = [], sg = function() {
  return go.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, lg = function() {
  return go.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, cs = "ResizeObserver loop completed with undelivered notifications.", cg = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: cs }) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = cs), window.dispatchEvent(e);
}, hr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(hr || (hr = {}));
var vo = function(e) {
  return Object.freeze(e);
}, ug = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.inlineSize = t, this.blockSize = o, vo(this);
  }
  return e;
})(), xc = (function() {
  function e(t, o, r, n) {
    return this.x = t, this.y = o, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, vo(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, o = t.x, r = t.y, n = t.top, i = t.right, a = t.bottom, s = t.left, l = t.width, c = t.height;
    return { x: o, y: r, top: n, right: i, bottom: a, left: s, width: l, height: c };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
})(), Ni = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Cc = function(e) {
  if (Ni(e)) {
    var t = e.getBBox(), o = t.width, r = t.height;
    return !o && !r;
  }
  var n = e, i = n.offsetWidth, a = n.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, us = function(e) {
  var t;
  if (e instanceof Element) return true;
  var o = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(o && e instanceof o.Element);
}, dg = function(e) {
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
}, sr = typeof window < "u" ? window : {}, Ar = /* @__PURE__ */ new WeakMap(), ds = /auto|scroll/, fg = /^tb|vertical/, hg = /msie|trident/i.test(sr.navigator && sr.navigator.userAgent), St = function(e) {
  return parseFloat(e || "0");
}, Lo = function(e, t, o) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), o === void 0 && (o = false), new ug((o ? t : e) || 0, (o ? e : t) || 0);
}, fs = vo({ devicePixelContentBoxSize: Lo(), borderBoxSize: Lo(), contentBoxSize: Lo(), contentRect: new xc(0, 0, 0, 0) }), yc = function(e, t) {
  if (t === void 0 && (t = false), Ar.has(e) && !t) return Ar.get(e);
  if (Cc(e)) return Ar.set(e, fs), fs;
  var o = getComputedStyle(e), r = Ni(e) && e.ownerSVGElement && e.getBBox(), n = !hg && o.boxSizing === "border-box", i = fg.test(o.writingMode || ""), a = !r && ds.test(o.overflowY || ""), s = !r && ds.test(o.overflowX || ""), l = r ? 0 : St(o.paddingTop), c = r ? 0 : St(o.paddingRight), u = r ? 0 : St(o.paddingBottom), d = r ? 0 : St(o.paddingLeft), f = r ? 0 : St(o.borderTopWidth), h = r ? 0 : St(o.borderRightWidth), p = r ? 0 : St(o.borderBottomWidth), m = r ? 0 : St(o.borderLeftWidth), g = d + c, v = l + u, x = m + h, $ = f + p, C = s ? e.offsetHeight - $ - e.clientHeight : 0, E = a ? e.offsetWidth - x - e.clientWidth : 0, k = n ? g + x : 0, b = n ? v + $ : 0, S = r ? r.width : St(o.width) - k - E, z = r ? r.height : St(o.height) - b - C, O = S + g + E + x, N = z + v + C + $, y = vo({ devicePixelContentBoxSize: Lo(Math.round(S * devicePixelRatio), Math.round(z * devicePixelRatio), i), borderBoxSize: Lo(O, N, i), contentBoxSize: Lo(S, z, i), contentRect: new xc(d, l, S, z) });
  return Ar.set(e, y), y;
}, wc = function(e, t, o) {
  var r = yc(e, o), n = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case hr.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case hr.BORDER_BOX:
      return n;
    default:
      return i;
  }
}, pg = /* @__PURE__ */ (function() {
  function e(t) {
    var o = yc(t);
    this.target = t, this.contentRect = o.contentRect, this.borderBoxSize = vo([o.borderBoxSize]), this.contentBoxSize = vo([o.contentBoxSize]), this.devicePixelContentBoxSize = vo([o.devicePixelContentBoxSize]);
  }
  return e;
})(), Sc = function(e) {
  if (Cc(e)) return 1 / 0;
  for (var t = 0, o = e.parentNode; o; ) t += 1, o = o.parentNode;
  return t;
}, mg = function() {
  var e = 1 / 0, t = [];
  go.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var s = [];
      a.activeTargets.forEach(function(c) {
        var u = new pg(c.target), d = Sc(c.target);
        s.push(u), c.lastReportedSize = wc(c.target, c.observedBox), d < e && (e = d);
      }), t.push(function() {
        a.callback.call(a.observer, s, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var o = 0, r = t; o < r.length; o++) {
    var n = r[o];
    n();
  }
  return e;
}, hs = function(e) {
  go.forEach(function(o) {
    o.activeTargets.splice(0, o.activeTargets.length), o.skippedTargets.splice(0, o.skippedTargets.length), o.observationTargets.forEach(function(n) {
      n.isActive() && (Sc(n.target) > e ? o.activeTargets.push(n) : o.skippedTargets.push(n));
    });
  });
}, gg = function() {
  var e = 0;
  for (hs(e); sg(); ) e = mg(), hs(e);
  return lg() && cg(), e > 0;
}, An, $c = [], vg = function() {
  return $c.splice(0).forEach(function(e) {
    return e();
  });
}, bg = function(e) {
  if (!An) {
    var t = 0, o = document.createTextNode(""), r = { characterData: true };
    new MutationObserver(function() {
      return vg();
    }).observe(o, r), An = function() {
      o.textContent = "".concat(t ? t-- : t++);
    };
  }
  $c.push(e), An();
}, xg = function(e) {
  bg(function() {
    requestAnimationFrame(e);
  });
}, Nr = 0, Cg = function() {
  return !!Nr;
}, yg = 250, wg = { attributes: true, characterData: true, childList: true, subtree: true }, ps = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], ms = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, On = false, Sg = (function() {
  function e() {
    var t = this;
    this.stopped = true, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var o = this;
    if (t === void 0 && (t = yg), !On) {
      On = true;
      var r = ms(t);
      xg(function() {
        var n = false;
        try {
          n = gg();
        } finally {
          if (On = false, t = r - ms(), !Cg()) return;
          n ? o.run(1e3) : t > 0 ? o.run(t) : o.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, o = function() {
      return t.observer && t.observer.observe(document.body, wg);
    };
    document.body ? o() : sr.addEventListener("DOMContentLoaded", o);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), ps.forEach(function(o) {
      return sr.addEventListener(o, t.listener, true);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), ps.forEach(function(o) {
      return sr.removeEventListener(o, t.listener, true);
    }), this.stopped = true);
  }, e;
})(), ci = new Sg(), gs = function(e) {
  !Nr && e > 0 && ci.start(), Nr += e, !Nr && ci.stop();
}, $g = function(e) {
  return !Ni(e) && !dg(e) && getComputedStyle(e).display === "inline";
}, Eg = (function() {
  function e(t, o) {
    this.target = t, this.observedBox = o || hr.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e.prototype.isActive = function() {
    var t = wc(this.target, this.observedBox, true);
    return $g(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
})(), zg = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = o;
  }
  return e;
})(), Or = /* @__PURE__ */ new WeakMap(), vs = function(e, t) {
  for (var o = 0; o < e.length; o += 1) if (e[o].target === t) return o;
  return -1;
}, Mr = (function() {
  function e() {
  }
  return e.connect = function(t, o) {
    var r = new zg(t, o);
    Or.set(t, r);
  }, e.observe = function(t, o, r) {
    var n = Or.get(t), i = n.observationTargets.length === 0;
    vs(n.observationTargets, o) < 0 && (i && go.push(n), n.observationTargets.push(new Eg(o, r && r.box)), gs(1), ci.schedule());
  }, e.unobserve = function(t, o) {
    var r = Or.get(t), n = vs(r.observationTargets, o), i = r.observationTargets.length === 1;
    n >= 0 && (i && go.splice(go.indexOf(r), 1), r.observationTargets.splice(n, 1), gs(-1));
  }, e.disconnect = function(t) {
    var o = this, r = Or.get(t);
    r.observationTargets.slice().forEach(function(n) {
      return o.unobserve(t, n.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
})(), Pg = (function() {
  function e(t) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Mr.connect(this, t);
  }
  return e.prototype.observe = function(t, o) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!us(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Mr.observe(this, t, o);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!us(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Mr.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Mr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
})();
class Tg {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Pg)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const bs = new Tg(), xs = oe({ name: "ResizeObserver", props: { onResize: Function }, setup(e) {
  let t = false;
  const o = Zo().proxy;
  function r(n) {
    const { onResize: i } = e;
    i !== void 0 && i(n);
  }
  wt(() => {
    const n = o.$el;
    if (n === void 0) {
      ns("resize-observer", "$el does not exist.");
      return;
    }
    if (n.nextElementSibling !== n.nextSibling && n.nodeType === 3 && n.nodeValue !== "") {
      ns("resize-observer", "$el can not be observed (it may be a text node).");
      return;
    }
    n.nextElementSibling !== null && (bs.registerHandler(n.nextElementSibling, r), t = true);
  }), Qe(() => {
    t && bs.unregisterHandler(o.$el.nextElementSibling);
  });
}, render() {
  return pl(this.$slots, "default");
} }), Ot = "v-hidden", _g = or("[v-hidden]", { display: "none!important" }), F2 = oe({ name: "Overflow", props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(e, { slots: t }) {
  const o = W(null), r = W(null);
  function n(a) {
    const { value: s } = o, { getCounter: l, getTail: c } = e;
    let u;
    if (l !== void 0 ? u = l() : u = r.value, !s || !u) return;
    u.hasAttribute(Ot) && u.removeAttribute(Ot);
    const { children: d } = s;
    if (a.showAllItemsBeforeCalculate) for (const $ of d) $.hasAttribute(Ot) && $.removeAttribute(Ot);
    const f = s.offsetWidth, h = [], p = t.tail ? c == null ? void 0 : c() : null;
    let m = p ? p.offsetWidth : 0, g = false;
    const v = s.children.length - (t.tail ? 1 : 0);
    for (let $ = 0; $ < v - 1; ++$) {
      if ($ < 0) continue;
      const C = d[$];
      if (g) {
        C.hasAttribute(Ot) || C.setAttribute(Ot, "");
        continue;
      } else C.hasAttribute(Ot) && C.removeAttribute(Ot);
      const E = C.offsetWidth;
      if (m += E, h[$] = E, m > f) {
        const { updateCounter: k } = e;
        for (let b = $; b >= 0; --b) {
          const S = v - 1 - b;
          k !== void 0 ? k(S) : u.textContent = `${S}`;
          const z = u.offsetWidth;
          if (m -= h[b], m + z <= f || b === 0) {
            g = true, $ = b - 1, p && ($ === -1 ? (p.style.maxWidth = `${f - z}px`, p.style.boxSizing = "border-box") : p.style.maxWidth = "");
            const { onUpdateCount: O } = e;
            O && O(S);
            break;
          }
        }
      }
    }
    const { onUpdateOverflow: x } = e;
    g ? x !== void 0 && x(true) : (x !== void 0 && x(false), u.setAttribute(Ot, ""));
  }
  const i = Go();
  return _g.mount({ id: "vueuc/overflow", head: true, anchorMetaName: gc, ssr: i }), wt(() => n({ showAllItemsBeforeCalculate: false })), { selfRef: o, counterRef: r, sync: n };
}, render() {
  const { $slots: e } = this;
  return bo(() => this.sync({ showAllItemsBeforeCalculate: false })), w("div", { class: "v-overflow", ref: "selfRef" }, [pl(e, "default"), e.counter ? e.counter() : w("span", { style: { display: "inline-block" }, ref: "counterRef" }), e.tail ? e.tail() : null]);
} });
function Ec(e) {
  return e instanceof HTMLElement;
}
function zc(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const o = e.childNodes[t];
    if (Ec(o) && (Tc(o) || zc(o))) return true;
  }
  return false;
}
function Pc(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const o = e.childNodes[t];
    if (Ec(o) && (Tc(o) || Pc(o))) return true;
  }
  return false;
}
function Tc(e) {
  if (!Rg(e)) return false;
  try {
    e.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === e;
}
function Rg(e) {
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
let Jo = [];
const _c = oe({ name: "FocusTrap", props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(e) {
  const t = $m(), o = W(null), r = W(null);
  let n = false, i = false;
  const a = typeof document > "u" ? null : document.activeElement;
  function s() {
    return Jo[Jo.length - 1] === t;
  }
  function l(g) {
    var v;
    g.code === "Escape" && s() && ((v = e.onEsc) === null || v === void 0 || v.call(e, g));
  }
  wt(() => {
    Le(() => e.active, (g) => {
      g ? (d(), ve("keydown", document, l)) : (ge("keydown", document, l), n && f());
    }, { immediate: true });
  }), Qe(() => {
    ge("keydown", document, l), n && f();
  });
  function c(g) {
    if (!i && s()) {
      const v = u();
      if (v === null || v.contains(fr(g))) return;
      h("first");
    }
  }
  function u() {
    const g = o.value;
    if (g === null) return null;
    let v = g;
    for (; v = v.nextSibling, !(v === null || v instanceof Element && v.tagName === "DIV"); ) ;
    return v;
  }
  function d() {
    var g;
    if (!e.disabled) {
      if (Jo.push(t), e.autoFocus) {
        const { initialFocusTo: v } = e;
        v === void 0 ? h("first") : (g = is(v)) === null || g === void 0 || g.focus({ preventScroll: true });
      }
      n = true, document.addEventListener("focus", c, true);
    }
  }
  function f() {
    var g;
    if (e.disabled || (document.removeEventListener("focus", c, true), Jo = Jo.filter((x) => x !== t), s())) return;
    const { finalFocusTo: v } = e;
    v !== void 0 ? (g = is(v)) === null || g === void 0 || g.focus({ preventScroll: true }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = true, a.focus({ preventScroll: true }), i = false);
  }
  function h(g) {
    if (s() && e.active) {
      const v = o.value, x = r.value;
      if (v !== null && x !== null) {
        const $ = u();
        if ($ == null || $ === x) {
          i = true, v.focus({ preventScroll: true }), i = false;
          return;
        }
        i = true;
        const C = g === "first" ? zc($) : Pc($);
        i = false, C || (i = true, v.focus({ preventScroll: true }), i = false);
      }
    }
  }
  function p(g) {
    if (i) return;
    const v = u();
    v !== null && (g.relatedTarget !== null && v.contains(g.relatedTarget) ? h("last") : h("first"));
  }
  function m(g) {
    i || (g.relatedTarget !== null && g.relatedTarget === o.value ? h("last") : h("first"));
  }
  return { focusableStartRef: o, focusableEndRef: r, focusableStyle: "position: absolute; height: 0; width: 0;", handleStartFocus: p, handleEndFocus: m };
}, render() {
  const { default: e } = this.$slots;
  if (e === void 0) return null;
  if (this.disabled) return e();
  const { active: t, focusableStyle: o } = this;
  return w(wo, null, [w("div", { "aria-hidden": "true", tabindex: t ? "0" : "-1", ref: "focusableStartRef", style: o, onFocus: this.handleStartFocus }), e(), w("div", { "aria-hidden": "true", style: o, ref: "focusableEndRef", tabindex: t ? "0" : "-1", onFocus: this.handleEndFocus })]);
} });
function Cs(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const kg = /^(\d|\.)+$/, ys = /(\d|\.)+/;
function Wr(e, { c: t = 1, offset: o = 0, attachPx: r = true } = {}) {
  if (typeof e == "number") {
    const n = (e + o) * t;
    return n === 0 ? "0" : `${n}px`;
  } else if (typeof e == "string") if (kg.test(e)) {
    const n = (Number(e) + o) * t;
    return r ? n === 0 ? "0" : `${n}px` : `${n}`;
  } else {
    const n = ys.exec(e);
    return n ? e.replace(ys, String((Number(n[0]) + o) * t)) : e;
  }
  return e;
}
function ws(e) {
  const { left: t, right: o, top: r, bottom: n } = fo(e);
  return `${r} ${t} ${n} ${o}`;
}
let Mn;
function Ig() {
  return Mn === void 0 && (Mn = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Mn;
}
const Rc = /* @__PURE__ */ new WeakSet();
function H2(e) {
  Rc.add(e);
}
function Ag(e) {
  return !Rc.has(e);
}
function Co(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function N2(e, t, o) {
  console.error(`[naive/${e}]: ${t}`, o);
}
function Og(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function it(e, ...t) {
  if (Array.isArray(e)) e.forEach((o) => it(o, ...t));
  else return e(...t);
}
function Mg(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function Kr(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(Zr(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Kr(r, t, o);
        return;
      }
      if (r.type === wo) {
        if (r.children === null) return;
        Array.isArray(r.children) && Kr(r.children, t, o);
      } else {
        if (r.type === Ei && t) return;
        o.push(r);
      }
    }
  }), o;
}
function Dg(e, t = "default", o = void 0) {
  const r = e[t];
  if (!r) return Co("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = Kr(r(o));
  return n.length === 1 ? n[0] : (Co("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function Bg(e, t, o) {
  if (!t) return null;
  const r = Kr(t(o));
  return r.length === 1 ? r[0] : (Co("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function pr(e, t = [], o) {
  const r = {};
  return t.forEach((n) => {
    r[n] = e[n];
  }), Object.assign(r, o);
}
function Wi(e) {
  return Object.keys(e);
}
function W2(e, t = [], o) {
  const r = {};
  return Object.getOwnPropertyNames(e).forEach((i) => {
    t.includes(i) || (r[i] = e[i]);
  }), Object.assign(r, o);
}
function zt(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? Zr(e) : typeof e == "number" ? Zr(String(e)) : null;
}
function ht(e) {
  return e.some((t) => Ed(t) ? !(t.type === Ei || t.type === wo && !ht(t.children)) : true) ? e : null;
}
function Ss(e, t) {
  return e && ht(e()) || t();
}
function j2(e, t, o) {
  return e && ht(e(t)) || o(t);
}
function rt(e, t) {
  const o = e && ht(e());
  return t(o || null);
}
function V2(e, t, o) {
  const r = e && ht(e(t));
  return o(r || null);
}
function ui(e) {
  return !(e && ht(e()));
}
const $s = oe({ render() {
  var e, t;
  return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
} }), Vt = "n-config-provider", qr = "n";
function It(e = {}, t = { defaultBordered: true }) {
  const o = ce(Vt, null);
  return { inlineThemeDisabled: o == null ? void 0 : o.inlineThemeDisabled, mergedRtlRef: o == null ? void 0 : o.mergedRtlRef, mergedComponentPropsRef: o == null ? void 0 : o.mergedComponentPropsRef, mergedBreakpointsRef: o == null ? void 0 : o.mergedBreakpointsRef, mergedBorderedRef: D(() => {
    var r, n;
    const { bordered: i } = e;
    return i !== void 0 ? i : (n = (r = o == null ? void 0 : o.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && n !== void 0 ? n : true;
  }), mergedClsPrefixRef: o ? o.mergedClsPrefixRef : Ft(qr), namespaceRef: D(() => o == null ? void 0 : o.mergedNamespaceRef.value) };
}
function kc() {
  const e = ce(Vt, null);
  return e ? e.mergedClsPrefixRef : Ft(qr);
}
function Zt(e, t, o, r) {
  o || Og("useThemeClass", "cssVarsRef is not passed");
  const n = ce(Vt, null), i = n == null ? void 0 : n.mergedThemeHashRef, a = n == null ? void 0 : n.styleMountTarget, s = W(""), l = Go();
  let c;
  const u = `__${e}`, d = () => {
    let f = u;
    const h = t ? t.value : void 0, p = i == null ? void 0 : i.value;
    p && (f += `-${p}`), h && (f += `-${h}`);
    const { themeOverrides: m, builtinThemeOverrides: g } = r;
    m && (f += `-${ur(JSON.stringify(m))}`), g && (f += `-${ur(JSON.stringify(g))}`), s.value = f, c = () => {
      const v = o.value;
      let x = "";
      for (const $ in v) x += `${$}: ${v[$]};`;
      B(`.${f}`, x).mount({ id: f, ssr: l, parent: a }), c = void 0;
    };
  };
  return Uo(() => {
    d();
  }), { themeClass: s, onRender: () => {
    c == null ? void 0 : c();
  } };
}
const Es = "n-form-item";
function Lg(e, { defaultSize: t = "medium", mergedSize: o, mergedDisabled: r } = {}) {
  const n = ce(Es, null);
  Be(Es, null);
  const i = D(o ? () => o(n) : () => {
    const { size: l } = e;
    if (l) return l;
    if (n) {
      const { mergedSize: c } = n;
      if (c.value !== void 0) return c.value;
    }
    return t;
  }), a = D(r ? () => r(n) : () => {
    const { disabled: l } = e;
    return l !== void 0 ? l : n ? n.disabled.value : false;
  }), s = D(() => {
    const { status: l } = e;
    return l || (n == null ? void 0 : n.mergedValidationStatus.value);
  });
  return Qe(() => {
    n && n.restoreValidation();
  }), { mergedSizeRef: i, mergedDisabledRef: a, mergedStatusRef: s, nTriggerFormBlur() {
    n && n.handleContentBlur();
  }, nTriggerFormChange() {
    n && n.handleContentChange();
  }, nTriggerFormFocus() {
    n && n.handleContentFocus();
  }, nTriggerFormInput() {
    n && n.handleContentInput();
  } };
}
const mr = "naive-ui-style";
function yr(e, t, o) {
  if (!t) return;
  const r = Go(), n = D(() => {
    const { value: s } = t;
    if (!s) return;
    const l = s[e];
    if (l) return l;
  }), i = ce(Vt, null), a = () => {
    Uo(() => {
      const { value: s } = o, l = `${s}${e}Rtl`;
      if (sm(l, r)) return;
      const { value: c } = n;
      c && c.style.mount({ id: l, head: true, anchorMetaName: mr, props: { bPrefix: s ? `.${s}-` : void 0 }, ssr: r, parent: i == null ? void 0 : i.styleMountTarget });
    });
  };
  return r ? a() : yo(a), n;
}
const So = { fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace", fontWeight: "400", fontWeightStrong: "500", cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)", cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)", cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)", borderRadius: "3px", borderRadiusSmall: "2px", fontSize: "14px", fontSizeMini: "12px", fontSizeTiny: "12px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", lineHeight: "1.6", heightMini: "16px", heightTiny: "22px", heightSmall: "28px", heightMedium: "34px", heightLarge: "40px", heightHuge: "46px" }, { fontSize: Fg, fontFamily: Hg, lineHeight: Ng } = So, Ic = B("body", `
 margin: 0;
 font-size: ${Fg};
 font-family: ${Hg};
 line-height: ${Ng};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [B("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function wr(e, t, o) {
  if (!t) return;
  const r = Go(), n = ce(Vt, null), i = () => {
    const a = o.value;
    t.mount({ id: a === void 0 ? e : a + e, head: true, anchorMetaName: mr, props: { bPrefix: a ? `.${a}-` : void 0 }, ssr: r, parent: n == null ? void 0 : n.styleMountTarget }), (n == null ? void 0 : n.preflightStyleDisabled) || Ic.mount({ id: "n-global", head: true, anchorMetaName: mr, ssr: r, parent: n == null ? void 0 : n.styleMountTarget });
  };
  r ? i() : yo(i);
}
function Z2(e) {
  return e;
}
function Ee(e, t, o, r, n, i) {
  const a = Go(), s = ce(Vt, null);
  if (o) {
    const c = () => {
      const u = i == null ? void 0 : i.value;
      o.mount({ id: u === void 0 ? t : u + t, head: true, props: { bPrefix: u ? `.${u}-` : void 0 }, anchorMetaName: mr, ssr: a, parent: s == null ? void 0 : s.styleMountTarget }), (s == null ? void 0 : s.preflightStyleDisabled) || Ic.mount({ id: "n-global", head: true, anchorMetaName: mr, ssr: a, parent: s == null ? void 0 : s.styleMountTarget });
    };
    a ? c() : yo(c);
  }
  return D(() => {
    var c;
    const { theme: { common: u, self: d, peers: f = {} } = {}, themeOverrides: h = {}, builtinThemeOverrides: p = {} } = n, { common: m, peers: g } = h, { common: v = void 0, [e]: { common: x = void 0, self: $ = void 0, peers: C = {} } = {} } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, { common: E = void 0, [e]: k = {} } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, { common: b, peers: S = {} } = k, z = er({}, u || x || v || r.common, E, b, m), O = er((c = d || $ || r.self) === null || c === void 0 ? void 0 : c(z), p, k, h);
    return { common: z, self: O, peers: er({}, r.peers, C, f), peerOverrides: er({}, p.peers, S, g) };
  });
}
Ee.props = { theme: Object, themeOverrides: Object, builtinThemeOverrides: Object };
const Wg = Q("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [B("svg", `
 height: 1em;
 width: 1em;
 `)]), Ac = oe({ name: "BaseIcon", props: { role: String, ariaLabel: String, ariaDisabled: { type: Boolean, default: void 0 }, ariaHidden: { type: Boolean, default: void 0 }, clsPrefix: { type: String, required: true }, onClick: Function, onMousedown: Function, onMouseup: Function }, setup(e) {
  wr("-base-icon", Wg, xe(e, "clsPrefix"));
}, render() {
  return w("i", { class: `${this.clsPrefix}-base-icon`, onClick: this.onClick, onMousedown: this.onMousedown, onMouseup: this.onMouseup, role: this.role, "aria-label": this.ariaLabel, "aria-hidden": this.ariaHidden, "aria-disabled": this.ariaDisabled }, this.$slots);
} }), Oc = oe({ name: "BaseIconSwitchTransition", setup(e, { slots: t }) {
  const o = ln();
  return () => w(Jt, { name: "icon-switch-transition", appear: o.value }, t);
} });
function Sr(e, t) {
  const o = oe({ render() {
    return t();
  } });
  return oe({ name: Bf(e), setup() {
    var r;
    const n = (r = ce(Vt, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
    return () => {
      var i;
      const a = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e];
      return a ? a() : w(o, null);
    };
  } });
}
const jg = oe({ name: "ChevronRight", render() {
  return w("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, w("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" }));
} }), Vg = Sr("close", () => w("svg", { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true }, w("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, w("g", { fill: "currentColor", "fill-rule": "nonzero" }, w("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))), Zg = Sr("error", () => w("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, w("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, w("g", { "fill-rule": "nonzero" }, w("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" }))))), zs = Sr("info", () => w("svg", { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, w("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, w("g", { "fill-rule": "nonzero" }, w("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" }))))), Ug = Sr("success", () => w("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, w("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, w("g", { "fill-rule": "nonzero" }, w("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" }))))), Gg = Sr("warning", () => w("svg", { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, w("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, w("g", { "fill-rule": "nonzero" }, w("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" }))))), { cubicBezierEaseInOut: Kg } = So;
function di({ originalTransform: e = "", left: t = 0, top: o = 0, transition: r = `all .3s ${Kg} !important` } = {}) {
  return [B("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", { transform: `${e} scale(0.75)`, left: t, top: o, opacity: 0 }), B("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", { transform: `scale(1) ${e}`, left: t, top: o, opacity: 1 }), B("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", { transformOrigin: "center", position: "absolute", left: t, top: o, transition: r })];
}
const qg = Q("base-close", `
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
`, [K("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), B("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), Ht("disabled", [B("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), B("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), B("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), B("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), B("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), K("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), K("round", [B("&::before", `
 border-radius: 50%;
 `)])]), Mc = oe({ name: "BaseClose", props: { isButtonTag: { type: Boolean, default: true }, clsPrefix: { type: String, required: true }, disabled: { type: Boolean, default: void 0 }, focusable: { type: Boolean, default: true }, round: Boolean, onClick: Function, absolute: Boolean }, setup(e) {
  return wr("-base-close", qg, xe(e, "clsPrefix")), () => {
    const { clsPrefix: t, disabled: o, absolute: r, round: n, isButtonTag: i } = e;
    return w(i ? "button" : "div", { type: i ? "button" : void 0, tabindex: o || !e.focusable ? -1 : 0, "aria-disabled": o, "aria-label": "close", role: i ? void 0 : "button", disabled: o, class: [`${t}-base-close`, r && `${t}-base-close--absolute`, o && `${t}-base-close--disabled`, n && `${t}-base-close--round`], onMousedown: (s) => {
      e.focusable || s.preventDefault();
    }, onClick: e.onClick }, w(Ac, { clsPrefix: t }, { default: () => w(Vg, null) }));
  };
} }), Yg = oe({ name: "FadeInExpandTransition", props: { appear: Boolean, group: Boolean, mode: String, onLeave: Function, onAfterLeave: Function, onAfterEnter: Function, width: Boolean, reverse: Boolean }, setup(e, { slots: t }) {
  function o(s) {
    e.width ? s.style.maxWidth = `${s.offsetWidth}px` : s.style.maxHeight = `${s.offsetHeight}px`, s.offsetWidth;
  }
  function r(s) {
    e.width ? s.style.maxWidth = "0" : s.style.maxHeight = "0", s.offsetWidth;
    const { onLeave: l } = e;
    l && l();
  }
  function n(s) {
    e.width ? s.style.maxWidth = "" : s.style.maxHeight = "";
    const { onAfterLeave: l } = e;
    l && l();
  }
  function i(s) {
    if (s.style.transition = "none", e.width) {
      const l = s.offsetWidth;
      s.style.maxWidth = "0", s.offsetWidth, s.style.transition = "", s.style.maxWidth = `${l}px`;
    } else if (e.reverse) s.style.maxHeight = `${s.offsetHeight}px`, s.offsetHeight, s.style.transition = "", s.style.maxHeight = "0";
    else {
      const l = s.offsetHeight;
      s.style.maxHeight = "0", s.offsetWidth, s.style.transition = "", s.style.maxHeight = `${l}px`;
    }
    s.offsetWidth;
  }
  function a(s) {
    var l;
    e.width ? s.style.maxWidth = "" : e.reverse || (s.style.maxHeight = ""), (l = e.onAfterEnter) === null || l === void 0 || l.call(e);
  }
  return () => {
    const { group: s, width: l, appear: c, mode: u } = e, d = s ? zd : Jt, f = { name: l ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition", appear: c, onEnter: i, onAfterEnter: a, onBeforeLeave: o, onLeave: r, onAfterLeave: n };
    return s || (f.mode = u), w(d, f, t);
  };
} }), Xg = B([B("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), Q("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [Z("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [di()]), Z("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [di({ left: "50%", top: "50%", originalTransform: "translateX(-50%) translateY(-50%)" })]), Z("container", `
 animation: rotator 3s linear infinite both;
 `, [Z("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Dn = "1.6s", Jg = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, Qg = oe({ name: "BaseLoading", props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, Jg), setup(e) {
  wr("-base-loading", Xg, xe(e, "clsPrefix"));
}, render() {
  const { clsPrefix: e, radius: t, strokeWidth: o, stroke: r, scale: n } = this, i = t / n;
  return w("div", { class: `${e}-base-loading`, role: "img", "aria-label": "loading" }, w(Oc, null, { default: () => this.show ? w("div", { key: "icon", class: `${e}-base-loading__transition-wrapper` }, w("div", { class: `${e}-base-loading__container` }, w("svg", { class: `${e}-base-loading__icon`, viewBox: `0 0 ${2 * i} ${2 * i}`, xmlns: "http://www.w3.org/2000/svg", style: { color: r } }, w("g", null, w("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};270 ${i} ${i}`, begin: "0s", dur: Dn, fill: "freeze", repeatCount: "indefinite" }), w("circle", { class: `${e}-base-loading__icon`, fill: "none", stroke: "currentColor", "stroke-width": o, "stroke-linecap": "round", cx: i, cy: i, r: t - o / 2, "stroke-dasharray": 5.67 * t, "stroke-dashoffset": 18.48 * t }, w("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`, begin: "0s", dur: Dn, fill: "freeze", repeatCount: "indefinite" }), w("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * t};${1.42 * t};${5.67 * t}`, begin: "0s", dur: Dn, fill: "freeze", repeatCount: "indefinite" })))))) : w("div", { key: "placeholder", class: `${e}-base-loading__placeholder` }, this.$slots) }));
} }), { cubicBezierEaseInOut: Ps } = So;
function Dc({ name: e = "fade-in", enterDuration: t = "0.2s", leaveDuration: o = "0.2s", enterCubicBezier: r = Ps, leaveCubicBezier: n = Ps } = {}) {
  return [B(`&.${e}-transition-enter-active`, { transition: `all ${t} ${r}!important` }), B(`&.${e}-transition-leave-active`, { transition: `all ${o} ${n}!important` }), B(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, { opacity: 0 }), B(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, { opacity: 1 })];
}
const J = { neutralBase: "#FFF", neutralInvertBase: "#000", neutralTextBase: "#000", neutralPopover: "#fff", neutralCard: "#fff", neutralModal: "#fff", neutralBody: "#fff", alpha1: "0.82", alpha2: "0.72", alpha3: "0.38", alpha4: "0.24", alpha5: "0.18", alphaClose: "0.6", alphaDisabled: "0.5", alphaAvatar: "0.2", alphaProgressRail: ".08", alphaInput: "0", alphaScrollbar: "0.25", alphaScrollbarHover: "0.4", primaryHover: "#36ad6a", primaryDefault: "#18a058", primaryActive: "#0c7a43", primarySuppl: "#36ad6a", infoHover: "#4098fc", infoDefault: "#2080f0", infoActive: "#1060c9", infoSuppl: "#4098fc", errorHover: "#de576d", errorDefault: "#d03050", errorActive: "#ab1f3f", errorSuppl: "#de576d", warningHover: "#fcb040", warningDefault: "#f0a020", warningActive: "#c97c10", warningSuppl: "#fcb040", successHover: "#36ad6a", successDefault: "#18a058", successActive: "#0c7a43", successSuppl: "#36ad6a" }, ev = eo(J.neutralBase), Bc = eo(J.neutralInvertBase), tv = `rgba(${Bc.slice(0, 3).join(", ")}, `;
function Ts(e) {
  return `${tv + String(e)})`;
}
function qe(e) {
  const t = Array.from(Bc);
  return t[3] = Number(e), j(ev, t);
}
const F = Object.assign(Object.assign({ name: "common" }, So), { baseColor: J.neutralBase, primaryColor: J.primaryDefault, primaryColorHover: J.primaryHover, primaryColorPressed: J.primaryActive, primaryColorSuppl: J.primarySuppl, infoColor: J.infoDefault, infoColorHover: J.infoHover, infoColorPressed: J.infoActive, infoColorSuppl: J.infoSuppl, successColor: J.successDefault, successColorHover: J.successHover, successColorPressed: J.successActive, successColorSuppl: J.successSuppl, warningColor: J.warningDefault, warningColorHover: J.warningHover, warningColorPressed: J.warningActive, warningColorSuppl: J.warningSuppl, errorColor: J.errorDefault, errorColorHover: J.errorHover, errorColorPressed: J.errorActive, errorColorSuppl: J.errorSuppl, textColorBase: J.neutralTextBase, textColor1: "rgb(31, 34, 37)", textColor2: "rgb(51, 54, 57)", textColor3: "rgb(118, 124, 130)", textColorDisabled: qe(J.alpha4), placeholderColor: qe(J.alpha4), placeholderColorDisabled: qe(J.alpha5), iconColor: qe(J.alpha4), iconColorHover: _r(qe(J.alpha4), { lightness: 0.75 }), iconColorPressed: _r(qe(J.alpha4), { lightness: 0.9 }), iconColorDisabled: qe(J.alpha5), opacity1: J.alpha1, opacity2: J.alpha2, opacity3: J.alpha3, opacity4: J.alpha4, opacity5: J.alpha5, dividerColor: "rgb(239, 239, 245)", borderColor: "rgb(224, 224, 230)", closeIconColor: qe(Number(J.alphaClose)), closeIconColorHover: qe(Number(J.alphaClose)), closeIconColorPressed: qe(Number(J.alphaClose)), closeColorHover: "rgba(0, 0, 0, .09)", closeColorPressed: "rgba(0, 0, 0, .13)", clearColor: qe(J.alpha4), clearColorHover: _r(qe(J.alpha4), { lightness: 0.75 }), clearColorPressed: _r(qe(J.alpha4), { lightness: 0.9 }), scrollbarColor: Ts(J.alphaScrollbar), scrollbarColorHover: Ts(J.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: qe(J.alphaProgressRail), railColor: "rgb(219, 219, 223)", popoverColor: J.neutralPopover, tableColor: J.neutralCard, cardColor: J.neutralCard, modalColor: J.neutralModal, bodyColor: J.neutralBody, tagColor: "#eee", avatarColor: qe(J.alphaAvatar), invertedColor: "rgb(0, 20, 40)", inputColor: qe(J.alphaInput), codeColor: "rgb(244, 244, 248)", tabColor: "rgb(247, 247, 250)", actionColor: "rgb(250, 250, 252)", tableHeaderColor: "rgb(250, 250, 252)", hoverColor: "rgb(243, 243, 245)", tableColorHover: "rgba(0, 0, 100, 0.03)", tableColorStriped: "rgba(0, 0, 100, 0.02)", pressedColor: "rgb(237, 237, 239)", opacityDisabled: J.alphaDisabled, inputColorDisabled: "rgb(250, 250, 252)", buttonColor2: "rgba(46, 51, 56, .05)", buttonColor2Hover: "rgba(46, 51, 56, .09)", buttonColor2Pressed: "rgba(46, 51, 56, .13)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), ov = { railInsetHorizontalBottom: "auto 2px 4px 2px", railInsetHorizontalTop: "4px 2px auto 2px", railInsetVerticalRight: "2px 4px 2px auto", railInsetVerticalLeft: "2px auto 2px 4px", railColor: "transparent" };
function rv(e) {
  const { scrollbarColor: t, scrollbarColorHover: o, scrollbarHeight: r, scrollbarWidth: n, scrollbarBorderRadius: i } = e;
  return Object.assign(Object.assign({}, ov), { height: r, width: n, borderRadius: i, color: t, colorHover: o });
}
const Ge = { name: "Scrollbar", common: F, self: rv }, nv = Q("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [B(">", [Q("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [B("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), B(">", [Q("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), B(">, +", [Q("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [K("horizontal", `
 height: var(--n-scrollbar-height);
 `, [B(">", [Z("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), K("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), K("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), K("vertical", `
 width: var(--n-scrollbar-width);
 `, [B(">", [Z("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), K("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), K("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), K("disabled", [B(">", [Z("scrollbar", "pointer-events: none;")])]), B(">", [Z("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Dc(), B("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), iv = Object.assign(Object.assign({}, Ee.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: "hover" }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: "right" }, xPlacement: { type: String, default: "bottom" } }), Lc = oe({ name: "Scrollbar", props: iv, inheritAttrs: false, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o, mergedRtlRef: r } = It(e), n = yr("Scrollbar", r, t), i = W(null), a = W(null), s = W(null), l = W(null), c = W(null), u = W(null), d = W(null), f = W(null), h = W(null), p = W(null), m = W(null), g = W(0), v = W(0), x = W(false), $ = W(false);
  let C = false, E = false, k, b, S = 0, z = 0, O = 0, N = 0;
  const y = Bm(), R = Ee("Scrollbar", "-scrollbar", nv, Ge, e, t), _ = D(() => {
    const { value: H } = f, { value: q } = u, { value: te } = p;
    return H === null || q === null || te === null ? 0 : Math.min(H, te * H / q + Va(R.value.self.width) * 1.5);
  }), P = D(() => `${_.value}px`), L = D(() => {
    const { value: H } = h, { value: q } = d, { value: te } = m;
    return H === null || q === null || te === null ? 0 : te * H / q + Va(R.value.self.height) * 1.5;
  }), A = D(() => `${L.value}px`), G = D(() => {
    const { value: H } = f, { value: q } = g, { value: te } = u, { value: we } = p;
    if (H === null || te === null || we === null) return 0;
    {
      const Ne = te - H;
      return Ne ? q / Ne * (we - _.value) : 0;
    }
  }), ie = D(() => `${G.value}px`), ue = D(() => {
    const { value: H } = h, { value: q } = v, { value: te } = d, { value: we } = m;
    if (H === null || te === null || we === null) return 0;
    {
      const Ne = te - H;
      return Ne ? q / Ne * (we - L.value) : 0;
    }
  }), ye = D(() => `${ue.value}px`), fe = D(() => {
    const { value: H } = f, { value: q } = u;
    return H !== null && q !== null && q > H;
  }), Ke = D(() => {
    const { value: H } = h, { value: q } = d;
    return H !== null && q !== null && q > H;
  }), Ye = D(() => {
    const { trigger: H } = e;
    return H === "none" || x.value;
  }), gt = D(() => {
    const { trigger: H } = e;
    return H === "none" || $.value;
  }), le = D(() => {
    const { container: H } = e;
    return H ? H() : a.value;
  }), T = D(() => {
    const { content: H } = e;
    return H ? H() : s.value;
  }), V = (H, q) => {
    if (!e.scrollable) return;
    if (typeof H == "number") {
      re(H, q ?? 0, 0, false, "auto");
      return;
    }
    const { left: te, top: we, index: Ne, elSize: tt, position: bt, behavior: _e, el: ut, debounce: Ut = true } = H;
    (te !== void 0 || we !== void 0) && re(te ?? 0, we ?? 0, 0, false, _e), ut !== void 0 ? re(0, ut.offsetTop, ut.offsetHeight, Ut, _e) : Ne !== void 0 && tt !== void 0 ? re(0, Ne * tt, tt, Ut, _e) : bt === "bottom" ? re(0, Number.MAX_SAFE_INTEGER, 0, false, _e) : bt === "top" && re(0, 0, 0, false, _e);
  }, M = Vm(() => {
    e.container || V({ top: g.value, left: v.value });
  }), X = () => {
    M.isDeactivated || lo();
  }, ae = (H) => {
    if (M.isDeactivated) return;
    const { onResize: q } = e;
    q && q(H), lo();
  }, $e = (H, q) => {
    if (!e.scrollable) return;
    const { value: te } = le;
    te && (typeof H == "object" ? te.scrollBy(H) : te.scrollBy(H, q || 0));
  };
  function re(H, q, te, we, Ne) {
    const { value: tt } = le;
    if (tt) {
      if (we) {
        const { scrollTop: bt, offsetHeight: _e } = tt;
        if (q > bt) {
          q + te <= bt + _e || tt.scrollTo({ left: H, top: q + te - _e, behavior: Ne });
          return;
        }
      }
      tt.scrollTo({ left: H, top: q, behavior: Ne });
    }
  }
  function ne() {
    xn(), Te(), lo();
  }
  function Pe() {
    vt();
  }
  function vt() {
    Ve(), bn();
  }
  function Ve() {
    b !== void 0 && window.clearTimeout(b), b = window.setTimeout(() => {
      $.value = false;
    }, e.duration);
  }
  function bn() {
    k !== void 0 && window.clearTimeout(k), k = window.setTimeout(() => {
      x.value = false;
    }, e.duration);
  }
  function xn() {
    k !== void 0 && window.clearTimeout(k), x.value = true;
  }
  function Te() {
    b !== void 0 && window.clearTimeout(b), $.value = true;
  }
  function Ze(H) {
    const { onScroll: q } = e;
    q && q(H), so();
  }
  function so() {
    const { value: H } = le;
    H && (g.value = H.scrollTop, v.value = H.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1));
  }
  function Gu() {
    const { value: H } = T;
    H && (u.value = H.offsetHeight, d.value = H.offsetWidth);
    const { value: q } = le;
    q && (f.value = q.offsetHeight, h.value = q.offsetWidth);
    const { value: te } = c, { value: we } = l;
    te && (m.value = te.offsetWidth), we && (p.value = we.offsetHeight);
  }
  function aa() {
    const { value: H } = le;
    H && (g.value = H.scrollTop, v.value = H.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1), f.value = H.offsetHeight, h.value = H.offsetWidth, u.value = H.scrollHeight, d.value = H.scrollWidth);
    const { value: q } = c, { value: te } = l;
    q && (m.value = q.offsetWidth), te && (p.value = te.offsetHeight);
  }
  function lo() {
    e.scrollable && (e.useUnifiedContainer ? aa() : (Gu(), so()));
  }
  function sa(H) {
    var q;
    return !(!((q = i.value) === null || q === void 0) && q.contains(fr(H)));
  }
  function Ku(H) {
    H.preventDefault(), H.stopPropagation(), E = true, ve("mousemove", window, la, true), ve("mouseup", window, ca, true), z = v.value, O = (n == null ? void 0 : n.value) ? window.innerWidth - H.clientX : H.clientX;
  }
  function la(H) {
    if (!E) return;
    k !== void 0 && window.clearTimeout(k), b !== void 0 && window.clearTimeout(b);
    const { value: q } = h, { value: te } = d, { value: we } = L;
    if (q === null || te === null) return;
    const tt = ((n == null ? void 0 : n.value) ? window.innerWidth - H.clientX - O : H.clientX - O) * (te - q) / (q - we), bt = te - q;
    let _e = z + tt;
    _e = Math.min(bt, _e), _e = Math.max(_e, 0);
    const { value: ut } = le;
    if (ut) {
      ut.scrollLeft = _e * ((n == null ? void 0 : n.value) ? -1 : 1);
      const { internalOnUpdateScrollLeft: Ut } = e;
      Ut && Ut(_e);
    }
  }
  function ca(H) {
    H.preventDefault(), H.stopPropagation(), ge("mousemove", window, la, true), ge("mouseup", window, ca, true), E = false, lo(), sa(H) && vt();
  }
  function qu(H) {
    H.preventDefault(), H.stopPropagation(), C = true, ve("mousemove", window, Cn, true), ve("mouseup", window, yn, true), S = g.value, N = H.clientY;
  }
  function Cn(H) {
    if (!C) return;
    k !== void 0 && window.clearTimeout(k), b !== void 0 && window.clearTimeout(b);
    const { value: q } = f, { value: te } = u, { value: we } = _;
    if (q === null || te === null) return;
    const tt = (H.clientY - N) * (te - q) / (q - we), bt = te - q;
    let _e = S + tt;
    _e = Math.min(bt, _e), _e = Math.max(_e, 0);
    const { value: ut } = le;
    ut && (ut.scrollTop = _e);
  }
  function yn(H) {
    H.preventDefault(), H.stopPropagation(), ge("mousemove", window, Cn, true), ge("mouseup", window, yn, true), C = false, lo(), sa(H) && vt();
  }
  Uo(() => {
    const { value: H } = Ke, { value: q } = fe, { value: te } = t, { value: we } = c, { value: Ne } = l;
    we && (H ? we.classList.remove(`${te}-scrollbar-rail--disabled`) : we.classList.add(`${te}-scrollbar-rail--disabled`)), Ne && (q ? Ne.classList.remove(`${te}-scrollbar-rail--disabled`) : Ne.classList.add(`${te}-scrollbar-rail--disabled`));
  }), wt(() => {
    e.container || lo();
  }), Qe(() => {
    k !== void 0 && window.clearTimeout(k), b !== void 0 && window.clearTimeout(b), ge("mousemove", window, Cn, true), ge("mouseup", window, yn, true);
  });
  const ua = D(() => {
    const { common: { cubicBezierEaseInOut: H }, self: { color: q, colorHover: te, height: we, width: Ne, borderRadius: tt, railInsetHorizontalTop: bt, railInsetHorizontalBottom: _e, railInsetVerticalRight: ut, railInsetVerticalLeft: Ut, railColor: Yu } } = R.value, { top: Xu, right: Ju, bottom: Qu, left: ed } = fo(bt), { top: td, right: od, bottom: rd, left: nd } = fo(_e), { top: id, right: ad, bottom: sd, left: ld } = fo((n == null ? void 0 : n.value) ? ws(ut) : ut), { top: cd, right: ud, bottom: dd, left: fd } = fo((n == null ? void 0 : n.value) ? ws(Ut) : Ut);
    return { "--n-scrollbar-bezier": H, "--n-scrollbar-color": q, "--n-scrollbar-color-hover": te, "--n-scrollbar-border-radius": tt, "--n-scrollbar-width": Ne, "--n-scrollbar-height": we, "--n-scrollbar-rail-top-horizontal-top": Xu, "--n-scrollbar-rail-right-horizontal-top": Ju, "--n-scrollbar-rail-bottom-horizontal-top": Qu, "--n-scrollbar-rail-left-horizontal-top": ed, "--n-scrollbar-rail-top-horizontal-bottom": td, "--n-scrollbar-rail-right-horizontal-bottom": od, "--n-scrollbar-rail-bottom-horizontal-bottom": rd, "--n-scrollbar-rail-left-horizontal-bottom": nd, "--n-scrollbar-rail-top-vertical-right": id, "--n-scrollbar-rail-right-vertical-right": ad, "--n-scrollbar-rail-bottom-vertical-right": sd, "--n-scrollbar-rail-left-vertical-right": ld, "--n-scrollbar-rail-top-vertical-left": cd, "--n-scrollbar-rail-right-vertical-left": ud, "--n-scrollbar-rail-bottom-vertical-left": dd, "--n-scrollbar-rail-left-vertical-left": fd, "--n-scrollbar-rail-color": Yu };
  }), Eo = o ? Zt("scrollbar", void 0, ua, e) : void 0;
  return Object.assign(Object.assign({}, { scrollTo: V, scrollBy: $e, sync: lo, syncUnifiedContainer: aa, handleMouseEnterWrapper: ne, handleMouseLeaveWrapper: Pe }), { mergedClsPrefix: t, rtlEnabled: n, containerScrollTop: g, wrapperRef: i, containerRef: a, contentRef: s, yRailRef: l, xRailRef: c, needYBar: fe, needXBar: Ke, yBarSizePx: P, xBarSizePx: A, yBarTopPx: ie, xBarLeftPx: ye, isShowXBar: Ye, isShowYBar: gt, isIos: y, handleScroll: Ze, handleContentResize: X, handleContainerResize: ae, handleYScrollMouseDown: qu, handleXScrollMouseDown: Ku, cssVars: o ? void 0 : ua, themeClass: Eo == null ? void 0 : Eo.themeClass, onRender: Eo == null ? void 0 : Eo.onRender });
}, render() {
  var e;
  const { $slots: t, mergedClsPrefix: o, triggerDisplayManually: r, rtlEnabled: n, internalHoistYRail: i, yPlacement: a, xPlacement: s, xScrollable: l } = this;
  if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
  const c = this.trigger === "none", u = (h, p) => w("div", { ref: "yRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--vertical`, `${o}-scrollbar-rail--vertical--${a}`, h], "data-scrollbar-rail": true, style: [p || "", this.verticalRailStyle], "aria-hidden": true }, w(c ? $s : Jt, c ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? w("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), d = () => {
    var h, p;
    return (h = this.onRender) === null || h === void 0 || h.call(this), w("div", jt(this.$attrs, { role: "none", ref: "wrapperRef", class: [`${o}-scrollbar`, this.themeClass, n && `${o}-scrollbar--rtl`], style: this.cssVars, onMouseenter: r ? void 0 : this.handleMouseEnterWrapper, onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (p = t.default) === null || p === void 0 ? void 0 : p.call(t) : w("div", { role: "none", ref: "containerRef", class: [`${o}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, w(xs, { onResize: this.handleContentResize }, { default: () => w("div", { ref: "contentRef", role: "none", style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle], class: [`${o}-scrollbar-content`, this.contentClass] }, t) })), i ? null : u(void 0, void 0), l && w("div", { ref: "xRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--horizontal`, `${o}-scrollbar-rail--horizontal--${s}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, w(c ? $s : Jt, c ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? w("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: n ? this.xBarLeftPx : void 0, left: n ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, f = this.container ? d() : w(xs, { onResize: this.handleContainerResize }, { default: d });
  return i ? w(wo, null, f, u(this.themeClass, this.cssVars)) : f;
} }), Fc = Lc;
function _s(e) {
  return Array.isArray(e) ? e : [e];
}
const fi = { STOP: "STOP" };
function Hc(e, t) {
  const o = t(e);
  e.children !== void 0 && o !== fi.STOP && e.children.forEach((r) => Hc(r, t));
}
function av(e, t = {}) {
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
function sv(e, t) {
  const { isLeaf: o } = e;
  return o !== void 0 ? o : !t(e);
}
function lv(e) {
  return e.children;
}
function cv(e) {
  return e.key;
}
function uv() {
  return false;
}
function dv(e, t) {
  const { isLeaf: o } = e;
  return !(o === false && !Array.isArray(t(e)));
}
function fv(e) {
  return e.disabled === true;
}
function hv(e, t) {
  return e.isLeaf === false && !Array.isArray(t(e));
}
function Bn(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function Ln(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function pv(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) || o.add(r);
  }), Array.from(o);
}
function mv(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) && o.delete(r);
  }), Array.from(o);
}
function gv(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function U2(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((o, r) => {
    t.set(o.key, r);
  }), (o) => {
    var r;
    return (r = t.get(o)) !== null && r !== void 0 ? r : null;
  };
}
class vv extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function bv(e, t, o, r) {
  return Yr(t.concat(e), o, r, false);
}
function xv(e, t) {
  const o = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const n = t.treeNodeMap.get(r);
    if (n !== void 0) {
      let i = n.parent;
      for (; i !== null && !(i.disabled || o.has(i.key)); ) o.add(i.key), i = i.parent;
    }
  }), o;
}
function Cv(e, t, o, r) {
  const n = Yr(t, o, r, false), i = Yr(e, o, r, true), a = xv(e, o), s = [];
  return n.forEach((l) => {
    (i.has(l) || a.has(l)) && s.push(l);
  }), s.forEach((l) => n.delete(l)), n;
}
function Fn(e, t) {
  const { checkedKeys: o, keysToCheck: r, keysToUncheck: n, indeterminateKeys: i, cascade: a, leafOnly: s, checkStrategy: l, allowNotLoaded: c } = e;
  if (!a) return r !== void 0 ? { checkedKeys: pv(o, r), indeterminateKeys: Array.from(i) } : n !== void 0 ? { checkedKeys: mv(o, n), indeterminateKeys: Array.from(i) } : { checkedKeys: Array.from(o), indeterminateKeys: Array.from(i) };
  const { levelTreeNodeMap: u } = t;
  let d;
  n !== void 0 ? d = Cv(n, o, t, c) : r !== void 0 ? d = bv(r, o, t, c) : d = Yr(o, t, c, false);
  const f = l === "parent", h = l === "child" || s, p = d, m = /* @__PURE__ */ new Set(), g = Math.max.apply(null, Array.from(u.keys()));
  for (let v = g; v >= 0; v -= 1) {
    const x = v === 0, $ = u.get(v);
    for (const C of $) {
      if (C.isLeaf) continue;
      const { key: E, shallowLoaded: k } = C;
      if (h && k && C.children.forEach((O) => {
        !O.disabled && !O.isLeaf && O.shallowLoaded && p.has(O.key) && p.delete(O.key);
      }), C.disabled || !k) continue;
      let b = true, S = false, z = true;
      for (const O of C.children) {
        const N = O.key;
        if (!O.disabled) {
          if (z && (z = false), p.has(N)) S = true;
          else if (m.has(N)) {
            S = true, b = false;
            break;
          } else if (b = false, S) break;
        }
      }
      b && !z ? (f && C.children.forEach((O) => {
        !O.disabled && p.has(O.key) && p.delete(O.key);
      }), p.add(E)) : S && m.add(E), x && h && p.has(E) && p.delete(E);
    }
  }
  return { checkedKeys: Array.from(p), indeterminateKeys: Array.from(m) };
}
function Yr(e, t, o, r) {
  const { treeNodeMap: n, getChildren: i } = t, a = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((l) => {
    const c = n.get(l);
    c !== void 0 && Hc(c, (u) => {
      if (u.disabled) return fi.STOP;
      const { key: d } = u;
      if (!a.has(d) && (a.add(d), s.add(d), hv(u.rawNode, i))) {
        if (r) return fi.STOP;
        if (!o) throw new vv();
      }
    });
  }), s;
}
function yv(e, { includeGroup: t = false, includeSelf: o = true }, r) {
  var n;
  const i = r.treeNodeMap;
  let a = e == null ? null : (n = i.get(e)) !== null && n !== void 0 ? n : null;
  const s = { keyPath: [], treeNodePath: [], treeNode: a };
  if (a == null ? void 0 : a.ignored) return s.treeNode = null, s;
  for (; a; ) !a.ignored && (t || !a.isGroup) && s.treeNodePath.push(a), a = a.parent;
  return s.treeNodePath.reverse(), o || s.treeNodePath.pop(), s.keyPath = s.treeNodePath.map((l) => l.key), s;
}
function wv(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Sv(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n + 1) % r] : n === o.length - 1 ? null : o[n + 1];
}
function Rs(e, t, { loop: o = false, includeDisabled: r = false } = {}) {
  const n = t === "prev" ? $v : Sv, i = { reverse: t === "prev" };
  let a = false, s = null;
  function l(c) {
    if (c !== null) {
      if (c === e) {
        if (!a) a = true;
        else if (!e.disabled && !e.isGroup) {
          s = e;
          return;
        }
      } else if ((!c.disabled || r) && !c.ignored && !c.isGroup) {
        s = c;
        return;
      }
      if (c.isGroup) {
        const u = ji(c, i);
        u !== null ? s = u : l(n(c, o));
      } else {
        const u = n(c, false);
        if (u !== null) l(u);
        else {
          const d = Ev(c);
          (d == null ? void 0 : d.isGroup) ? l(n(d, o)) : o && l(n(c, true));
        }
      }
    }
  }
  return l(e), s;
}
function $v(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n - 1 + r) % r] : n === 0 ? null : o[n - 1];
}
function Ev(e) {
  return e.parent;
}
function ji(e, t = {}) {
  const { reverse: o = false } = t, { children: r } = e;
  if (r) {
    const { length: n } = r, i = o ? n - 1 : 0, a = o ? -1 : n, s = o ? -1 : 1;
    for (let l = i; l !== a; l += s) {
      const c = r[l];
      if (!c.disabled && !c.ignored) if (c.isGroup) {
        const u = ji(c, t);
        if (u !== null) return u;
      } else return c;
    }
  }
  return null;
}
const zv = { getChild() {
  return this.ignored ? null : ji(this);
}, getParent() {
  const { parent: e } = this;
  return (e == null ? void 0 : e.isGroup) ? e.getParent() : e;
}, getNext(e = {}) {
  return Rs(this, "next", e);
}, getPrev(e = {}) {
  return Rs(this, "prev", e);
} };
function Pv(e, t) {
  const o = t ? new Set(t) : void 0, r = [];
  function n(i) {
    i.forEach((a) => {
      r.push(a), !(a.isLeaf || !a.children || a.ignored) && (a.isGroup || o === void 0 || o.has(a.key)) && n(a.children);
    });
  }
  return n(e), r;
}
function Tv(e, t) {
  const o = e.key;
  for (; t; ) {
    if (t.key === o) return true;
    t = t.parent;
  }
  return false;
}
function Nc(e, t, o, r, n, i = null, a = 0) {
  const s = [];
  return e.forEach((l, c) => {
    var u;
    const d = Object.create(r);
    if (d.rawNode = l, d.siblings = s, d.level = a, d.index = c, d.isFirstChild = c === 0, d.isLastChild = c + 1 === e.length, d.parent = i, !d.ignored) {
      const f = n(l);
      Array.isArray(f) && (d.children = Nc(f, t, o, r, n, d, a + 1));
    }
    s.push(d), t.set(d.key, d), o.has(a) || o.set(a, []), (u = o.get(a)) === null || u === void 0 || u.push(d);
  }), s;
}
function _v(e, t = {}) {
  var o;
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), { getDisabled: i = fv, getIgnored: a = uv, getIsGroup: s = gv, getKey: l = cv } = t, c = (o = t.getChildren) !== null && o !== void 0 ? o : lv, u = t.ignoreEmptyChildren ? (C) => {
    const E = c(C);
    return Array.isArray(E) ? E.length ? E : null : E;
  } : c, d = Object.assign({ get key() {
    return l(this.rawNode);
  }, get disabled() {
    return i(this.rawNode);
  }, get isGroup() {
    return s(this.rawNode);
  }, get isLeaf() {
    return sv(this.rawNode, u);
  }, get shallowLoaded() {
    return dv(this.rawNode, u);
  }, get ignored() {
    return a(this.rawNode);
  }, contains(C) {
    return Tv(this, C);
  } }, zv), f = Nc(e, r, n, d, u);
  function h(C) {
    if (C == null) return null;
    const E = r.get(C);
    return E && !E.isGroup && !E.ignored ? E : null;
  }
  function p(C) {
    if (C == null) return null;
    const E = r.get(C);
    return E && !E.ignored ? E : null;
  }
  function m(C, E) {
    const k = p(C);
    return k ? k.getPrev(E) : null;
  }
  function g(C, E) {
    const k = p(C);
    return k ? k.getNext(E) : null;
  }
  function v(C) {
    const E = p(C);
    return E ? E.getParent() : null;
  }
  function x(C) {
    const E = p(C);
    return E ? E.getChild() : null;
  }
  const $ = { treeNodes: f, treeNodeMap: r, levelTreeNodeMap: n, maxLevel: Math.max(...n.keys()), getChildren: u, getFlattenedNodes(C) {
    return Pv(f, C);
  }, getNode: h, getPrev: m, getNext: g, getParent: v, getChild: x, getFirstAvailableNode() {
    return wv(f);
  }, getPath(C, E = {}) {
    return yv(C, E, $);
  }, getCheckedKeys(C, E = {}) {
    const { cascade: k = true, leafOnly: b = false, checkStrategy: S = "all", allowNotLoaded: z = false } = E;
    return Fn({ checkedKeys: Bn(C), indeterminateKeys: Ln(C), cascade: k, leafOnly: b, checkStrategy: S, allowNotLoaded: z }, $);
  }, check(C, E, k = {}) {
    const { cascade: b = true, leafOnly: S = false, checkStrategy: z = "all", allowNotLoaded: O = false } = k;
    return Fn({ checkedKeys: Bn(E), indeterminateKeys: Ln(E), keysToCheck: C == null ? [] : _s(C), cascade: b, leafOnly: S, checkStrategy: z, allowNotLoaded: O }, $);
  }, uncheck(C, E, k = {}) {
    const { cascade: b = true, leafOnly: S = false, checkStrategy: z = "all", allowNotLoaded: O = false } = k;
    return Fn({ checkedKeys: Bn(E), indeterminateKeys: Ln(E), keysToUncheck: C == null ? [] : _s(C), cascade: b, leafOnly: S, checkStrategy: z, allowNotLoaded: O }, $);
  }, getNonLeafKeys(C = {}) {
    return av(f, C);
  } };
  return $;
}
const Rv = { iconSizeTiny: "28px", iconSizeSmall: "34px", iconSizeMedium: "40px", iconSizeLarge: "46px", iconSizeHuge: "52px" };
function kv(e) {
  const { textColorDisabled: t, iconColor: o, textColor2: r, fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: s, fontSizeHuge: l } = e;
  return Object.assign(Object.assign({}, Rv), { fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: s, fontSizeHuge: l, textColor: t, iconColor: o, extraTextColor: r });
}
const ro = { name: "Empty", common: F, self: kv }, Iv = { height: "calc(var(--n-option-height) * 7.6)", paddingTiny: "4px 0", paddingSmall: "4px 0", paddingMedium: "4px 0", paddingLarge: "4px 0", paddingHuge: "4px 0", optionPaddingTiny: "0 12px", optionPaddingSmall: "0 12px", optionPaddingMedium: "0 12px", optionPaddingLarge: "0 12px", optionPaddingHuge: "0 12px", loadingSize: "18px" };
function Av(e) {
  const { borderRadius: t, popoverColor: o, textColor3: r, dividerColor: n, textColor2: i, primaryColorPressed: a, textColorDisabled: s, primaryColor: l, opacityDisabled: c, hoverColor: u, fontSizeTiny: d, fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p, fontSizeHuge: m, heightTiny: g, heightSmall: v, heightMedium: x, heightLarge: $, heightHuge: C } = e;
  return Object.assign(Object.assign({}, Iv), { optionFontSizeTiny: d, optionFontSizeSmall: f, optionFontSizeMedium: h, optionFontSizeLarge: p, optionFontSizeHuge: m, optionHeightTiny: g, optionHeightSmall: v, optionHeightMedium: x, optionHeightLarge: $, optionHeightHuge: C, borderRadius: t, color: o, groupHeaderTextColor: r, actionDividerColor: n, optionTextColor: i, optionTextColorPressed: a, optionTextColorDisabled: s, optionTextColorActive: l, optionOpacityDisabled: c, optionCheckColor: l, optionColorPending: u, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: u, actionTextColor: i, loadingColor: l });
}
const $r = { name: "InternalSelectMenu", common: F, peers: { Scrollbar: Ge, Empty: ro }, self: Av }, { cubicBezierEaseIn: ks, cubicBezierEaseOut: Is } = So;
function Wc({ transformOrigin: e = "inherit", duration: t = ".2s", enterScale: o = ".9", originalTransform: r = "", originalTransition: n = "" } = {}) {
  return [B("&.fade-in-scale-up-transition-leave-active", { transformOrigin: e, transition: `opacity ${t} ${ks}, transform ${t} ${ks} ${n && `,${n}`}` }), B("&.fade-in-scale-up-transition-enter-active", { transformOrigin: e, transition: `opacity ${t} ${Is}, transform ${t} ${Is} ${n && `,${n}`}` }), B("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", { opacity: 0, transform: `${r} scale(${o})` }), B("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", { opacity: 1, transform: `${r} scale(1)` })];
}
const Ov = { space: "6px", spaceArrow: "10px", arrowOffset: "10px", arrowOffsetVertical: "10px", arrowHeight: "6px", padding: "8px 14px" };
function Mv(e) {
  const { boxShadow2: t, popoverColor: o, textColor2: r, borderRadius: n, fontSize: i, dividerColor: a } = e;
  return Object.assign(Object.assign({}, Ov), { fontSize: i, borderRadius: n, color: o, dividerColor: a, textColor: r, boxShadow: t });
}
const no = { name: "Popover", common: F, peers: { Scrollbar: Ge }, self: Mv }, Hn = { top: "bottom", bottom: "top", left: "right", right: "left" }, We = "var(--n-arrow-height) * 1.414", Dv = B([Q("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [B(">", [Q("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ht("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Ht("scrollable", [Ht("show-header-or-footer", "padding: var(--n-padding);")])]), Z("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), Z("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), K("scrollable, show-header-or-footer", [Z("content", `
 padding: var(--n-padding);
 `)])]), Q("popover-shared", `
 transform-origin: inherit;
 `, [Q("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [Q("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${We});
 height: calc(${We});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), B("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `), B("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `), B("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), B("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), dt("top-start", `
 top: calc(${We} / -2);
 left: calc(${Mt("top-start")} - var(--v-offset-left));
 `), dt("top", `
 top: calc(${We} / -2);
 transform: translateX(calc(${We} / -2)) rotate(45deg);
 left: 50%;
 `), dt("top-end", `
 top: calc(${We} / -2);
 right: calc(${Mt("top-end")} + var(--v-offset-left));
 `), dt("bottom-start", `
 bottom: calc(${We} / -2);
 left: calc(${Mt("bottom-start")} - var(--v-offset-left));
 `), dt("bottom", `
 bottom: calc(${We} / -2);
 transform: translateX(calc(${We} / -2)) rotate(45deg);
 left: 50%;
 `), dt("bottom-end", `
 bottom: calc(${We} / -2);
 right: calc(${Mt("bottom-end")} + var(--v-offset-left));
 `), dt("left-start", `
 left: calc(${We} / -2);
 top: calc(${Mt("left-start")} - var(--v-offset-top));
 `), dt("left", `
 left: calc(${We} / -2);
 transform: translateY(calc(${We} / -2)) rotate(45deg);
 top: 50%;
 `), dt("left-end", `
 left: calc(${We} / -2);
 bottom: calc(${Mt("left-end")} + var(--v-offset-top));
 `), dt("right-start", `
 right: calc(${We} / -2);
 top: calc(${Mt("right-start")} - var(--v-offset-top));
 `), dt("right", `
 right: calc(${We} / -2);
 transform: translateY(calc(${We} / -2)) rotate(45deg);
 top: 50%;
 `), dt("right-end", `
 right: calc(${We} / -2);
 bottom: calc(${Mt("right-end")} + var(--v-offset-top));
 `), ...Bh({ top: ["right-start", "left-start"], right: ["top-end", "bottom-end"], bottom: ["right-end", "left-end"], left: ["top-start", "bottom-start"] }, (e, t) => {
  const o = ["right", "left"].includes(t), r = o ? "width" : "height";
  return e.map((n) => {
    const i = n.split("-")[1] === "end", s = `calc((${`var(--v-target-${r}, 0px)`} - ${We}) / 2)`, l = Mt(n);
    return B(`[v-placement="${n}"] >`, [Q("popover-shared", [K("center-arrow", [Q("popover-arrow", `${t}: calc(max(${s}, ${l}) ${i ? "+" : "-"} var(--v-offset-${o ? "left" : "top"}));`)])])]);
  });
})]);
function Mt(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function dt(e, t) {
  const o = e.split("-")[0], r = ["top", "bottom"].includes(o) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return B(`[v-placement="${e}"] >`, [Q("popover-shared", `
 margin-${Hn[o]}: var(--n-space);
 `, [K("show-arrow", `
 margin-${Hn[o]}: var(--n-space-arrow);
 `), K("overlap", `
 margin: 0;
 `), fm("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${Hn[o]}: auto;
 ${r}
 `, [Q("popover-arrow", t)])])]);
}
const jc = Object.assign(Object.assign({}, Ee.props), { to: Wo.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function Vc({ arrowClass: e, arrowStyle: t, arrowWrapperClass: o, arrowWrapperStyle: r, clsPrefix: n }) {
  return w("div", { key: "__popover-arrow__", style: r, class: [`${n}-popover-arrow-wrapper`, o] }, w("div", { class: [`${n}-popover-arrow`, e], style: t }));
}
const Bv = oe({ name: "PopoverBody", inheritAttrs: false, props: jc, setup(e, { slots: t, attrs: o }) {
  const { namespaceRef: r, mergedClsPrefixRef: n, inlineThemeDisabled: i, mergedRtlRef: a } = It(e), s = Ee("Popover", "-popover", Dv, no, e, n), l = yr("Popover", a, n), c = W(null), u = ce("NPopover"), d = W(null), f = W(e.show), h = W(false);
  Uo(() => {
    const { show: z } = e;
    z && !Ig() && !e.internalDeactivateImmediately && (h.value = true);
  });
  const p = D(() => {
    const { trigger: z, onClickoutside: O } = e, N = [], { positionManuallyRef: { value: y } } = u;
    return y || (z === "click" && !O && N.push([li, k, void 0, { capture: true }]), z === "hover" && N.push([Gm, E])), O && N.push([li, k, void 0, { capture: true }]), (e.displayDirective === "show" || e.animated && h.value) && N.push([Kn, e.show]), N;
  }), m = D(() => {
    const { common: { cubicBezierEaseInOut: z, cubicBezierEaseIn: O, cubicBezierEaseOut: N }, self: { space: y, spaceArrow: R, padding: _, fontSize: P, textColor: L, dividerColor: A, color: G, boxShadow: ie, borderRadius: ue, arrowHeight: ye, arrowOffset: fe, arrowOffsetVertical: Ke } } = s.value;
    return { "--n-box-shadow": ie, "--n-bezier": z, "--n-bezier-ease-in": O, "--n-bezier-ease-out": N, "--n-font-size": P, "--n-text-color": L, "--n-color": G, "--n-divider-color": A, "--n-border-radius": ue, "--n-arrow-height": ye, "--n-arrow-offset": fe, "--n-arrow-offset-vertical": Ke, "--n-padding": _, "--n-space": y, "--n-space-arrow": R };
  }), g = D(() => {
    const z = e.width === "trigger" ? void 0 : Wr(e.width), O = [];
    z && O.push({ width: z });
    const { maxWidth: N, minWidth: y } = e;
    return N && O.push({ maxWidth: Wr(N) }), y && O.push({ maxWidth: Wr(y) }), i || O.push(m.value), O;
  }), v = i ? Zt("popover", void 0, m, e) : void 0;
  u.setBodyInstance({ syncPosition: x }), Qe(() => {
    u.setBodyInstance(null);
  }), Le(xe(e, "show"), (z) => {
    e.animated || (z ? f.value = true : f.value = false);
  });
  function x() {
    var z;
    (z = c.value) === null || z === void 0 || z.syncPosition();
  }
  function $(z) {
    e.trigger === "hover" && e.keepAliveOnHover && e.show && u.handleMouseEnter(z);
  }
  function C(z) {
    e.trigger === "hover" && e.keepAliveOnHover && u.handleMouseLeave(z);
  }
  function E(z) {
    e.trigger === "hover" && !b().contains(fr(z)) && u.handleMouseMoveOutside(z);
  }
  function k(z) {
    (e.trigger === "click" && !b().contains(fr(z)) || e.onClickoutside) && u.handleClickOutside(z);
  }
  function b() {
    return u.getTriggerElement();
  }
  Be(xr, d), Be(cn, null), Be(un, null);
  function S() {
    if (v == null ? void 0 : v.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value)) return null;
    let O;
    const N = u.internalRenderBodyRef.value, { value: y } = n;
    if (N) O = N([`${y}-popover-shared`, (l == null ? void 0 : l.value) && `${y}-popover--rtl`, v == null ? void 0 : v.themeClass.value, e.overlap && `${y}-popover-shared--overlap`, e.showArrow && `${y}-popover-shared--show-arrow`, e.arrowPointToCenter && `${y}-popover-shared--center-arrow`], d, g.value, $, C);
    else {
      const { value: R } = u.extraClassRef, { internalTrapFocus: _ } = e, P = !ui(t.header) || !ui(t.footer), L = () => {
        var A, G;
        const ie = P ? w(wo, null, rt(t.header, (fe) => fe ? w("div", { class: [`${y}-popover__header`, e.headerClass], style: e.headerStyle }, fe) : null), rt(t.default, (fe) => fe ? w("div", { class: [`${y}-popover__content`, e.contentClass], style: e.contentStyle }, t) : null), rt(t.footer, (fe) => fe ? w("div", { class: [`${y}-popover__footer`, e.footerClass], style: e.footerStyle }, fe) : null)) : e.scrollable ? (A = t.default) === null || A === void 0 ? void 0 : A.call(t) : w("div", { class: [`${y}-popover__content`, e.contentClass], style: e.contentStyle }, t), ue = e.scrollable ? w(Fc, { themeOverrides: s.value.peerOverrides.Scrollbar, theme: s.value.peers.Scrollbar, contentClass: P ? void 0 : `${y}-popover__content ${(G = e.contentClass) !== null && G !== void 0 ? G : ""}`, contentStyle: P ? void 0 : e.contentStyle }, { default: () => ie }) : ie, ye = e.showArrow ? Vc({ arrowClass: e.arrowClass, arrowStyle: e.arrowStyle, arrowWrapperClass: e.arrowWrapperClass, arrowWrapperStyle: e.arrowWrapperStyle, clsPrefix: y }) : null;
        return [ue, ye];
      };
      O = w("div", jt({ class: [`${y}-popover`, `${y}-popover-shared`, (l == null ? void 0 : l.value) && `${y}-popover--rtl`, v == null ? void 0 : v.themeClass.value, R.map((A) => `${y}-${A}`), { [`${y}-popover--scrollable`]: e.scrollable, [`${y}-popover--show-header-or-footer`]: P, [`${y}-popover--raw`]: e.raw, [`${y}-popover-shared--overlap`]: e.overlap, [`${y}-popover-shared--show-arrow`]: e.showArrow, [`${y}-popover-shared--center-arrow`]: e.arrowPointToCenter }], ref: d, style: g.value, onKeydown: u.handleKeydown, onMouseenter: $, onMouseleave: C }, o), _ ? w(_c, { active: e.show, autoFocus: true }, { default: L }) : L());
    }
    return xo(O, p.value);
  }
  return { displayed: h, namespace: r, isMounted: u.isMountedRef, zIndex: u.zIndexRef, followerRef: c, adjustedTo: Wo(e), followerEnabled: f, renderContentNode: S };
}, render() {
  return w(bc, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === Wo.tdkey }, { default: () => this.animated ? w(Jt, { name: "popover-transition", appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var e;
    (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), Lv = Object.keys(jc), Fv = { focus: ["onFocus", "onBlur"], click: ["onClick"], hover: ["onMouseenter", "onMouseleave"], manual: [], nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"] };
function Hv(e, t, o) {
  Fv[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const n = e.props[r], i = o[r];
    n ? e.props[r] = (...a) => {
      n(...a), i(...a);
    } : e.props[r] = i;
  });
}
const dn = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: "hover" }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: "top" }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: "if" }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: Wo.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number }, Nv = Object.assign(Object.assign(Object.assign({}, Ee.props), dn), { internalOnAfterLeave: Function, internalRenderBody: Function }), Zc = oe({ name: "Popover", inheritAttrs: false, props: Nv, slots: Object, __popover__: true, setup(e) {
  const t = ln(), o = W(null), r = D(() => e.show), n = W(e.defaultShow), i = lc(r, n), a = pt(() => e.disabled ? false : i.value), s = () => {
    if (e.disabled) return true;
    const { getDisabled: P } = e;
    return !!(P == null ? void 0 : P());
  }, l = () => s() ? false : i.value, c = cc(e, ["arrow", "showArrow"]), u = D(() => e.overlap ? false : c.value);
  let d = null;
  const f = W(null), h = W(null), p = pt(() => e.x !== void 0 && e.y !== void 0);
  function m(P) {
    const { "onUpdate:show": L, onUpdateShow: A, onShow: G, onHide: ie } = e;
    n.value = P, L && it(L, P), A && it(A, P), P && G && it(G, true), P && ie && it(ie, false);
  }
  function g() {
    d && d.syncPosition();
  }
  function v() {
    const { value: P } = f;
    P && (window.clearTimeout(P), f.value = null);
  }
  function x() {
    const { value: P } = h;
    P && (window.clearTimeout(P), h.value = null);
  }
  function $() {
    const P = s();
    if (e.trigger === "focus" && !P) {
      if (l()) return;
      m(true);
    }
  }
  function C() {
    const P = s();
    if (e.trigger === "focus" && !P) {
      if (!l()) return;
      m(false);
    }
  }
  function E() {
    const P = s();
    if (e.trigger === "hover" && !P) {
      if (x(), f.value !== null || l()) return;
      const L = () => {
        m(true), f.value = null;
      }, { delay: A } = e;
      A === 0 ? L() : f.value = window.setTimeout(L, A);
    }
  }
  function k() {
    const P = s();
    if (e.trigger === "hover" && !P) {
      if (v(), h.value !== null || !l()) return;
      const L = () => {
        m(false), h.value = null;
      }, { duration: A } = e;
      A === 0 ? L() : h.value = window.setTimeout(L, A);
    }
  }
  function b() {
    k();
  }
  function S(P) {
    var L;
    l() && (e.trigger === "click" && (v(), x(), m(false)), (L = e.onClickoutside) === null || L === void 0 || L.call(e, P));
  }
  function z() {
    if (e.trigger === "click" && !s()) {
      v(), x();
      const P = !l();
      m(P);
    }
  }
  function O(P) {
    e.internalTrapFocus && P.key === "Escape" && (v(), x(), m(false));
  }
  function N(P) {
    n.value = P;
  }
  function y() {
    var P;
    return (P = o.value) === null || P === void 0 ? void 0 : P.targetRef;
  }
  function R(P) {
    d = P;
  }
  return Be("NPopover", { getTriggerElement: y, handleKeydown: O, handleMouseEnter: E, handleMouseLeave: k, handleClickOutside: S, handleMouseMoveOutside: b, setBodyInstance: R, positionManuallyRef: p, isMountedRef: t, zIndexRef: xe(e, "zIndex"), extraClassRef: xe(e, "internalExtraClass"), internalRenderBodyRef: xe(e, "internalRenderBody") }), Uo(() => {
    i.value && s() && m(false);
  }), { binderInstRef: o, positionManually: p, mergedShowConsideringDisabledProp: a, uncontrolledShow: n, mergedShowArrow: u, getMergedShow: l, setShow: N, handleClick: z, handleMouseEnter: E, handleMouseLeave: k, handleFocus: $, handleBlur: C, syncPosition: g };
}, render() {
  var e;
  const { positionManually: t, $slots: o } = this;
  let r, n = false;
  if (!t && (r = Dg(o, "trigger"), r)) {
    r = ml(r), r = r.type === Pd ? w("span", [r]) : r;
    const i = { onClick: this.handleClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur };
    if (!((e = r.type) === null || e === void 0) && e.__popover__) n = true, r.props || (r.props = { internalSyncTargetWithParent: true, internalInheritedEventHandlers: [] }), r.props.internalSyncTargetWithParent = true, r.props.internalInheritedEventHandlers ? r.props.internalInheritedEventHandlers = [i, ...r.props.internalInheritedEventHandlers] : r.props.internalInheritedEventHandlers = [i];
    else {
      const { internalInheritedEventHandlers: a } = this, s = [i, ...a], l = { onBlur: (c) => {
        s.forEach((u) => {
          u.onBlur(c);
        });
      }, onFocus: (c) => {
        s.forEach((u) => {
          u.onFocus(c);
        });
      }, onClick: (c) => {
        s.forEach((u) => {
          u.onClick(c);
        });
      }, onMouseenter: (c) => {
        s.forEach((u) => {
          u.onMouseenter(c);
        });
      }, onMouseleave: (c) => {
        s.forEach((u) => {
          u.onMouseleave(c);
        });
      } };
      Hv(r, a ? "nested" : t ? "manual" : this.trigger, l);
    }
  }
  return w(pc, { ref: "binderInstRef", syncTarget: !n, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    const i = this.getMergedShow();
    return [this.internalTrapFocus && i ? xo(w("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 } }), [[Hi, { enabled: i, zIndex: this.zIndex }]]) : null, t ? null : w(mc, null, { default: () => r }), w(Bv, pr(this.$props, Lv, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: i })), { default: () => {
      var a, s;
      return (s = (a = this.$slots).default) === null || s === void 0 ? void 0 : s.call(a);
    }, header: () => {
      var a, s;
      return (s = (a = this.$slots).header) === null || s === void 0 ? void 0 : s.call(a);
    }, footer: () => {
      var a, s;
      return (s = (a = this.$slots).footer) === null || s === void 0 ? void 0 : s.call(a);
    } })];
  } });
} }), Wv = { closeIconSizeTiny: "12px", closeIconSizeSmall: "12px", closeIconSizeMedium: "14px", closeIconSizeLarge: "14px", closeSizeTiny: "16px", closeSizeSmall: "16px", closeSizeMedium: "18px", closeSizeLarge: "18px", padding: "0 7px", closeMargin: "0 0 0 4px" };
function jv(e) {
  const { textColor2: t, primaryColorHover: o, primaryColorPressed: r, primaryColor: n, infoColor: i, successColor: a, warningColor: s, errorColor: l, baseColor: c, borderColor: u, opacityDisabled: d, tagColor: f, closeIconColor: h, closeIconColorHover: p, closeIconColorPressed: m, borderRadiusSmall: g, fontSizeMini: v, fontSizeTiny: x, fontSizeSmall: $, fontSizeMedium: C, heightMini: E, heightTiny: k, heightSmall: b, heightMedium: S, closeColorHover: z, closeColorPressed: O, buttonColor2Hover: N, buttonColor2Pressed: y, fontWeightStrong: R } = e;
  return Object.assign(Object.assign({}, Wv), { closeBorderRadius: g, heightTiny: E, heightSmall: k, heightMedium: b, heightLarge: S, borderRadius: g, opacityDisabled: d, fontSizeTiny: v, fontSizeSmall: x, fontSizeMedium: $, fontSizeLarge: C, fontWeightStrong: R, textColorCheckable: t, textColorHoverCheckable: t, textColorPressedCheckable: t, textColorChecked: c, colorCheckable: "#0000", colorHoverCheckable: N, colorPressedCheckable: y, colorChecked: n, colorCheckedHover: o, colorCheckedPressed: r, border: `1px solid ${u}`, textColor: t, color: f, colorBordered: "rgb(250, 250, 252)", closeIconColor: h, closeIconColorHover: p, closeIconColorPressed: m, closeColorHover: z, closeColorPressed: O, borderPrimary: `1px solid ${U(n, { alpha: 0.3 })}`, textColorPrimary: n, colorPrimary: U(n, { alpha: 0.12 }), colorBorderedPrimary: U(n, { alpha: 0.1 }), closeIconColorPrimary: n, closeIconColorHoverPrimary: n, closeIconColorPressedPrimary: n, closeColorHoverPrimary: U(n, { alpha: 0.12 }), closeColorPressedPrimary: U(n, { alpha: 0.18 }), borderInfo: `1px solid ${U(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: U(i, { alpha: 0.12 }), colorBorderedInfo: U(i, { alpha: 0.1 }), closeIconColorInfo: i, closeIconColorHoverInfo: i, closeIconColorPressedInfo: i, closeColorHoverInfo: U(i, { alpha: 0.12 }), closeColorPressedInfo: U(i, { alpha: 0.18 }), borderSuccess: `1px solid ${U(a, { alpha: 0.3 })}`, textColorSuccess: a, colorSuccess: U(a, { alpha: 0.12 }), colorBorderedSuccess: U(a, { alpha: 0.1 }), closeIconColorSuccess: a, closeIconColorHoverSuccess: a, closeIconColorPressedSuccess: a, closeColorHoverSuccess: U(a, { alpha: 0.12 }), closeColorPressedSuccess: U(a, { alpha: 0.18 }), borderWarning: `1px solid ${U(s, { alpha: 0.35 })}`, textColorWarning: s, colorWarning: U(s, { alpha: 0.15 }), colorBorderedWarning: U(s, { alpha: 0.12 }), closeIconColorWarning: s, closeIconColorHoverWarning: s, closeIconColorPressedWarning: s, closeColorHoverWarning: U(s, { alpha: 0.12 }), closeColorPressedWarning: U(s, { alpha: 0.18 }), borderError: `1px solid ${U(l, { alpha: 0.23 })}`, textColorError: l, colorError: U(l, { alpha: 0.1 }), colorBorderedError: U(l, { alpha: 0.08 }), closeIconColorError: l, closeIconColorHoverError: l, closeIconColorPressedError: l, closeColorHoverError: U(l, { alpha: 0.12 }), closeColorPressedError: U(l, { alpha: 0.18 }) });
}
const Uc = { name: "Tag", common: F, self: jv }, Vv = { paddingSingle: "0 26px 0 12px", paddingMultiple: "3px 26px 0 12px", clearSize: "16px", arrowSize: "16px" };
function Zv(e) {
  const { borderRadius: t, textColor2: o, textColorDisabled: r, inputColor: n, inputColorDisabled: i, primaryColor: a, primaryColorHover: s, warningColor: l, warningColorHover: c, errorColor: u, errorColorHover: d, borderColor: f, iconColor: h, iconColorDisabled: p, clearColor: m, clearColorHover: g, clearColorPressed: v, placeholderColor: x, placeholderColorDisabled: $, fontSizeTiny: C, fontSizeSmall: E, fontSizeMedium: k, fontSizeLarge: b, heightTiny: S, heightSmall: z, heightMedium: O, heightLarge: N, fontWeight: y } = e;
  return Object.assign(Object.assign({}, Vv), { fontSizeTiny: C, fontSizeSmall: E, fontSizeMedium: k, fontSizeLarge: b, heightTiny: S, heightSmall: z, heightMedium: O, heightLarge: N, borderRadius: t, fontWeight: y, textColor: o, textColorDisabled: r, placeholderColor: x, placeholderColorDisabled: $, color: n, colorDisabled: i, colorActive: n, border: `1px solid ${f}`, borderHover: `1px solid ${s}`, borderActive: `1px solid ${a}`, borderFocus: `1px solid ${s}`, boxShadowHover: "none", boxShadowActive: `0 0 0 2px ${U(a, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${U(a, { alpha: 0.2 })}`, caretColor: a, arrowColor: h, arrowColorDisabled: p, loadingColor: a, borderWarning: `1px solid ${l}`, borderHoverWarning: `1px solid ${c}`, borderActiveWarning: `1px solid ${l}`, borderFocusWarning: `1px solid ${c}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 0 2px ${U(l, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${U(l, { alpha: 0.2 })}`, colorActiveWarning: n, caretColorWarning: l, borderError: `1px solid ${u}`, borderHoverError: `1px solid ${d}`, borderActiveError: `1px solid ${u}`, borderFocusError: `1px solid ${d}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 0 2px ${U(u, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${U(u, { alpha: 0.2 })}`, colorActiveError: n, caretColorError: u, clearColor: m, clearColorHover: g, clearColorPressed: v });
}
const Vi = { name: "InternalSelection", common: F, peers: { Popover: no }, self: Zv }, { cubicBezierEaseInOut: qt } = So;
function Uv({ duration: e = ".2s", delay: t = ".1s" } = {}) {
  return [B("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }), B("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), B("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${qt},
 max-width ${e} ${qt} ${t},
 margin-left ${e} ${qt} ${t},
 margin-right ${e} ${qt} ${t};
 `), B("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${qt} ${t},
 max-width ${e} ${qt},
 margin-left ${e} ${qt},
 margin-right ${e} ${qt};
 `)];
}
const Gv = Q("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Kv = oe({ name: "BaseWave", props: { clsPrefix: { type: String, required: true } }, setup(e) {
  wr("-base-wave", Gv, xe(e, "clsPrefix"));
  const t = W(null), o = W(false);
  let r = null;
  return Qe(() => {
    r !== null && window.clearTimeout(r);
  }), { active: o, selfRef: t, play() {
    r !== null && (window.clearTimeout(r), o.value = false, r = null), bo(() => {
      var n;
      (n = t.value) === null || n === void 0 || n.offsetHeight, o.value = true, r = window.setTimeout(() => {
        o.value = false, r = null;
      }, 1e3);
    });
  } };
}, render() {
  const { clsPrefix: e } = this;
  return w("div", { ref: "selfRef", "aria-hidden": true, class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`] });
} }), qv = { iconMargin: "11px 8px 0 12px", iconMarginRtl: "11px 12px 0 8px", iconSize: "24px", closeIconSize: "16px", closeSize: "20px", closeMargin: "13px 14px 0 0", closeMarginRtl: "13px 0 0 14px", padding: "13px" };
function Yv(e) {
  const { lineHeight: t, borderRadius: o, fontWeightStrong: r, baseColor: n, dividerColor: i, actionColor: a, textColor1: s, textColor2: l, closeColorHover: c, closeColorPressed: u, closeIconColor: d, closeIconColorHover: f, closeIconColorPressed: h, infoColor: p, successColor: m, warningColor: g, errorColor: v, fontSize: x } = e;
  return Object.assign(Object.assign({}, qv), { fontSize: x, lineHeight: t, titleFontWeight: r, borderRadius: o, border: `1px solid ${i}`, color: a, titleTextColor: s, iconColor: l, contentTextColor: l, closeBorderRadius: o, closeColorHover: c, closeColorPressed: u, closeIconColor: d, closeIconColorHover: f, closeIconColorPressed: h, borderInfo: `1px solid ${j(n, U(p, { alpha: 0.25 }))}`, colorInfo: j(n, U(p, { alpha: 0.08 })), titleTextColorInfo: s, iconColorInfo: p, contentTextColorInfo: l, closeColorHoverInfo: c, closeColorPressedInfo: u, closeIconColorInfo: d, closeIconColorHoverInfo: f, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${j(n, U(m, { alpha: 0.25 }))}`, colorSuccess: j(n, U(m, { alpha: 0.08 })), titleTextColorSuccess: s, iconColorSuccess: m, contentTextColorSuccess: l, closeColorHoverSuccess: c, closeColorPressedSuccess: u, closeIconColorSuccess: d, closeIconColorHoverSuccess: f, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${j(n, U(g, { alpha: 0.33 }))}`, colorWarning: j(n, U(g, { alpha: 0.08 })), titleTextColorWarning: s, iconColorWarning: g, contentTextColorWarning: l, closeColorHoverWarning: c, closeColorPressedWarning: u, closeIconColorWarning: d, closeIconColorHoverWarning: f, closeIconColorPressedWarning: h, borderError: `1px solid ${j(n, U(v, { alpha: 0.25 }))}`, colorError: j(n, U(v, { alpha: 0.08 })), titleTextColorError: s, iconColorError: v, contentTextColorError: l, closeColorHoverError: c, closeColorPressedError: u, closeIconColorError: d, closeIconColorHoverError: f, closeIconColorPressedError: h });
}
const Xv = { name: "Alert", common: F, self: Yv }, { cubicBezierEaseInOut: $t, cubicBezierEaseOut: Jv, cubicBezierEaseIn: Qv } = So;
function G2({ overflow: e = "hidden", duration: t = ".3s", originalTransition: o = "", leavingDelay: r = "0s", foldPadding: n = false, enterToProps: i = void 0, leaveToProps: a = void 0, reverse: s = false } = {}) {
  const l = s ? "leave" : "enter", c = s ? "enter" : "leave";
  return [B(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`, Object.assign(Object.assign({}, i), { opacity: 1 })), B(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`, Object.assign(Object.assign({}, a), { opacity: 0, marginTop: "0 !important", marginBottom: "0 !important", paddingTop: n ? "0 !important" : void 0, paddingBottom: n ? "0 !important" : void 0 })), B(`&.fade-in-height-expand-transition-${c}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${$t} ${r},
 opacity ${t} ${Jv} ${r},
 margin-top ${t} ${$t} ${r},
 margin-bottom ${t} ${$t} ${r},
 padding-top ${t} ${$t} ${r},
 padding-bottom ${t} ${$t} ${r}
 ${o ? `,${o}` : ""}
 `), B(`&.fade-in-height-expand-transition-${l}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${$t},
 opacity ${t} ${Qv},
 margin-top ${t} ${$t},
 margin-bottom ${t} ${$t},
 padding-top ${t} ${$t},
 padding-bottom ${t} ${$t}
 ${o ? `,${o}` : ""}
 `)];
}
const eb = { linkFontSize: "13px", linkPadding: "0 0 0 16px", railWidth: "4px" };
function tb(e) {
  const { borderRadius: t, railColor: o, primaryColor: r, primaryColorHover: n, primaryColorPressed: i, textColor2: a } = e;
  return Object.assign(Object.assign({}, eb), { borderRadius: t, railColor: o, railColorActive: r, linkColor: U(r, { alpha: 0.15 }), linkTextColor: a, linkTextColorHover: n, linkTextColorPressed: i, linkTextColorActive: r });
}
const ob = { name: "Anchor", common: F, self: tb }, rb = Cr && "chrome" in window;
Cr && navigator.userAgent.includes("Firefox");
const nb = Cr && navigator.userAgent.includes("Safari") && !rb, ib = { paddingTiny: "0 8px", paddingSmall: "0 10px", paddingMedium: "0 12px", paddingLarge: "0 14px", clearSize: "16px" };
function ab(e) {
  const { textColor2: t, textColor3: o, textColorDisabled: r, primaryColor: n, primaryColorHover: i, inputColor: a, inputColorDisabled: s, borderColor: l, warningColor: c, warningColorHover: u, errorColor: d, errorColorHover: f, borderRadius: h, lineHeight: p, fontSizeTiny: m, fontSizeSmall: g, fontSizeMedium: v, fontSizeLarge: x, heightTiny: $, heightSmall: C, heightMedium: E, heightLarge: k, actionColor: b, clearColor: S, clearColorHover: z, clearColorPressed: O, placeholderColor: N, placeholderColorDisabled: y, iconColor: R, iconColorDisabled: _, iconColorHover: P, iconColorPressed: L, fontWeight: A } = e;
  return Object.assign(Object.assign({}, ib), { fontWeight: A, countTextColorDisabled: r, countTextColor: o, heightTiny: $, heightSmall: C, heightMedium: E, heightLarge: k, fontSizeTiny: m, fontSizeSmall: g, fontSizeMedium: v, fontSizeLarge: x, lineHeight: p, lineHeightTextarea: p, borderRadius: h, iconSize: "16px", groupLabelColor: b, groupLabelTextColor: t, textColor: t, textColorDisabled: r, textDecorationColor: t, caretColor: n, placeholderColor: N, placeholderColorDisabled: y, color: a, colorDisabled: s, colorFocus: a, groupLabelBorder: `1px solid ${l}`, border: `1px solid ${l}`, borderHover: `1px solid ${i}`, borderDisabled: `1px solid ${l}`, borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 0 2px ${U(n, { alpha: 0.2 })}`, loadingColor: n, loadingColorWarning: c, borderWarning: `1px solid ${c}`, borderHoverWarning: `1px solid ${u}`, colorFocusWarning: a, borderFocusWarning: `1px solid ${u}`, boxShadowFocusWarning: `0 0 0 2px ${U(c, { alpha: 0.2 })}`, caretColorWarning: c, loadingColorError: d, borderError: `1px solid ${d}`, borderHoverError: `1px solid ${f}`, colorFocusError: a, borderFocusError: `1px solid ${f}`, boxShadowFocusError: `0 0 0 2px ${U(d, { alpha: 0.2 })}`, caretColorError: d, clearColor: S, clearColorHover: z, clearColorPressed: O, iconColor: R, iconColorDisabled: _, iconColorHover: P, iconColorPressed: L, suffixTextColor: t });
}
const ct = { name: "Input", common: F, peers: { Scrollbar: Ge }, self: ab };
function sb(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const lb = { name: "AutoComplete", common: F, peers: { InternalSelectMenu: $r, Input: ct }, self: sb };
function cb(e) {
  const { borderRadius: t, avatarColor: o, cardColor: r, fontSize: n, heightTiny: i, heightSmall: a, heightMedium: s, heightLarge: l, heightHuge: c, modalColor: u, popoverColor: d } = e;
  return { borderRadius: t, fontSize: n, border: `2px solid ${r}`, heightTiny: i, heightSmall: a, heightMedium: s, heightLarge: l, heightHuge: c, color: j(r, o), colorModal: j(u, o), colorPopover: j(d, o) };
}
const Gc = { name: "Avatar", common: F, self: cb };
function ub() {
  return { gap: "-12px" };
}
const db = { name: "AvatarGroup", common: F, peers: { Avatar: Gc }, self: ub }, fb = { width: "44px", height: "44px", borderRadius: "22px", iconSize: "26px" };
function hb(e) {
  const { popoverColor: t, textColor2: o, primaryColorHover: r, primaryColorPressed: n } = e;
  return Object.assign(Object.assign({}, fb), { color: t, textColor: o, iconColor: o, iconColorHover: r, iconColorPressed: n, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
}
const pb = { name: "BackTop", common: F, self: hb };
function mb(e) {
  const { errorColor: t, infoColor: o, successColor: r, warningColor: n, fontFamily: i } = e;
  return { color: t, colorInfo: o, colorSuccess: r, colorError: t, colorWarning: n, fontSize: "12px", fontFamily: i };
}
const gb = { name: "Badge", common: F, self: mb }, vb = { fontWeightActive: "400" };
function bb(e) {
  const { fontSize: t, textColor3: o, textColor2: r, borderRadius: n, buttonColor2Hover: i, buttonColor2Pressed: a } = e;
  return Object.assign(Object.assign({}, vb), { fontSize: t, itemLineHeight: "1.25", itemTextColor: o, itemTextColorHover: r, itemTextColorPressed: r, itemTextColorActive: r, itemBorderRadius: n, itemColorHover: i, itemColorPressed: a, separatorColor: o });
}
const xb = { name: "Breadcrumb", common: F, self: bb };
function co(e) {
  return j(e, [255, 255, 255, 0.16]);
}
function Dr(e) {
  return j(e, [0, 0, 0, 0.12]);
}
const Cb = "n-button-group", yb = { paddingTiny: "0 6px", paddingSmall: "0 10px", paddingMedium: "0 14px", paddingLarge: "0 18px", paddingRoundTiny: "0 10px", paddingRoundSmall: "0 14px", paddingRoundMedium: "0 18px", paddingRoundLarge: "0 22px", iconMarginTiny: "6px", iconMarginSmall: "6px", iconMarginMedium: "6px", iconMarginLarge: "6px", iconSizeTiny: "14px", iconSizeSmall: "18px", iconSizeMedium: "18px", iconSizeLarge: "20px", rippleDuration: ".6s" };
function wb(e) {
  const { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadius: i, fontSizeTiny: a, fontSizeSmall: s, fontSizeMedium: l, fontSizeLarge: c, opacityDisabled: u, textColor2: d, textColor3: f, primaryColorHover: h, primaryColorPressed: p, borderColor: m, primaryColor: g, baseColor: v, infoColor: x, infoColorHover: $, infoColorPressed: C, successColor: E, successColorHover: k, successColorPressed: b, warningColor: S, warningColorHover: z, warningColorPressed: O, errorColor: N, errorColorHover: y, errorColorPressed: R, fontWeight: _, buttonColor2: P, buttonColor2Hover: L, buttonColor2Pressed: A, fontWeightStrong: G } = e;
  return Object.assign(Object.assign({}, yb), { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadiusTiny: i, borderRadiusSmall: i, borderRadiusMedium: i, borderRadiusLarge: i, fontSizeTiny: a, fontSizeSmall: s, fontSizeMedium: l, fontSizeLarge: c, opacityDisabled: u, colorOpacitySecondary: "0.16", colorOpacitySecondaryHover: "0.22", colorOpacitySecondaryPressed: "0.28", colorSecondary: P, colorSecondaryHover: L, colorSecondaryPressed: A, colorTertiary: P, colorTertiaryHover: L, colorTertiaryPressed: A, colorQuaternary: "#0000", colorQuaternaryHover: L, colorQuaternaryPressed: A, color: "#0000", colorHover: "#0000", colorPressed: "#0000", colorFocus: "#0000", colorDisabled: "#0000", textColor: d, textColorTertiary: f, textColorHover: h, textColorPressed: p, textColorFocus: h, textColorDisabled: d, textColorText: d, textColorTextHover: h, textColorTextPressed: p, textColorTextFocus: h, textColorTextDisabled: d, textColorGhost: d, textColorGhostHover: h, textColorGhostPressed: p, textColorGhostFocus: h, textColorGhostDisabled: d, border: `1px solid ${m}`, borderHover: `1px solid ${h}`, borderPressed: `1px solid ${p}`, borderFocus: `1px solid ${h}`, borderDisabled: `1px solid ${m}`, rippleColor: g, colorPrimary: g, colorHoverPrimary: h, colorPressedPrimary: p, colorFocusPrimary: h, colorDisabledPrimary: g, textColorPrimary: v, textColorHoverPrimary: v, textColorPressedPrimary: v, textColorFocusPrimary: v, textColorDisabledPrimary: v, textColorTextPrimary: g, textColorTextHoverPrimary: h, textColorTextPressedPrimary: p, textColorTextFocusPrimary: h, textColorTextDisabledPrimary: d, textColorGhostPrimary: g, textColorGhostHoverPrimary: h, textColorGhostPressedPrimary: p, textColorGhostFocusPrimary: h, textColorGhostDisabledPrimary: g, borderPrimary: `1px solid ${g}`, borderHoverPrimary: `1px solid ${h}`, borderPressedPrimary: `1px solid ${p}`, borderFocusPrimary: `1px solid ${h}`, borderDisabledPrimary: `1px solid ${g}`, rippleColorPrimary: g, colorInfo: x, colorHoverInfo: $, colorPressedInfo: C, colorFocusInfo: $, colorDisabledInfo: x, textColorInfo: v, textColorHoverInfo: v, textColorPressedInfo: v, textColorFocusInfo: v, textColorDisabledInfo: v, textColorTextInfo: x, textColorTextHoverInfo: $, textColorTextPressedInfo: C, textColorTextFocusInfo: $, textColorTextDisabledInfo: d, textColorGhostInfo: x, textColorGhostHoverInfo: $, textColorGhostPressedInfo: C, textColorGhostFocusInfo: $, textColorGhostDisabledInfo: x, borderInfo: `1px solid ${x}`, borderHoverInfo: `1px solid ${$}`, borderPressedInfo: `1px solid ${C}`, borderFocusInfo: `1px solid ${$}`, borderDisabledInfo: `1px solid ${x}`, rippleColorInfo: x, colorSuccess: E, colorHoverSuccess: k, colorPressedSuccess: b, colorFocusSuccess: k, colorDisabledSuccess: E, textColorSuccess: v, textColorHoverSuccess: v, textColorPressedSuccess: v, textColorFocusSuccess: v, textColorDisabledSuccess: v, textColorTextSuccess: E, textColorTextHoverSuccess: k, textColorTextPressedSuccess: b, textColorTextFocusSuccess: k, textColorTextDisabledSuccess: d, textColorGhostSuccess: E, textColorGhostHoverSuccess: k, textColorGhostPressedSuccess: b, textColorGhostFocusSuccess: k, textColorGhostDisabledSuccess: E, borderSuccess: `1px solid ${E}`, borderHoverSuccess: `1px solid ${k}`, borderPressedSuccess: `1px solid ${b}`, borderFocusSuccess: `1px solid ${k}`, borderDisabledSuccess: `1px solid ${E}`, rippleColorSuccess: E, colorWarning: S, colorHoverWarning: z, colorPressedWarning: O, colorFocusWarning: z, colorDisabledWarning: S, textColorWarning: v, textColorHoverWarning: v, textColorPressedWarning: v, textColorFocusWarning: v, textColorDisabledWarning: v, textColorTextWarning: S, textColorTextHoverWarning: z, textColorTextPressedWarning: O, textColorTextFocusWarning: z, textColorTextDisabledWarning: d, textColorGhostWarning: S, textColorGhostHoverWarning: z, textColorGhostPressedWarning: O, textColorGhostFocusWarning: z, textColorGhostDisabledWarning: S, borderWarning: `1px solid ${S}`, borderHoverWarning: `1px solid ${z}`, borderPressedWarning: `1px solid ${O}`, borderFocusWarning: `1px solid ${z}`, borderDisabledWarning: `1px solid ${S}`, rippleColorWarning: S, colorError: N, colorHoverError: y, colorPressedError: R, colorFocusError: y, colorDisabledError: N, textColorError: v, textColorHoverError: v, textColorPressedError: v, textColorFocusError: v, textColorDisabledError: v, textColorTextError: N, textColorTextHoverError: y, textColorTextPressedError: R, textColorTextFocusError: y, textColorTextDisabledError: d, textColorGhostError: N, textColorGhostHoverError: y, textColorGhostPressedError: R, textColorGhostFocusError: y, textColorGhostDisabledError: N, borderError: `1px solid ${N}`, borderHoverError: `1px solid ${y}`, borderPressedError: `1px solid ${R}`, borderFocusError: `1px solid ${y}`, borderDisabledError: `1px solid ${N}`, rippleColorError: N, waveOpacity: "0.6", fontWeight: _, fontWeightStrong: G });
}
const et = { name: "Button", common: F, self: wb }, Sb = B([Q("button", `
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
 `, [K("color", [Z("border", { borderColor: "var(--n-border-color)" }), K("disabled", [Z("border", { borderColor: "var(--n-border-color-disabled)" })]), Ht("disabled", [B("&:focus", [Z("state-border", { borderColor: "var(--n-border-color-focus)" })]), B("&:hover", [Z("state-border", { borderColor: "var(--n-border-color-hover)" })]), B("&:active", [Z("state-border", { borderColor: "var(--n-border-color-pressed)" })]), K("pressed", [Z("state-border", { borderColor: "var(--n-border-color-pressed)" })])])]), K("disabled", { backgroundColor: "var(--n-color-disabled)", color: "var(--n-text-color-disabled)" }, [Z("border", { border: "var(--n-border-disabled)" })]), Ht("disabled", [B("&:focus", { backgroundColor: "var(--n-color-focus)", color: "var(--n-text-color-focus)" }, [Z("state-border", { border: "var(--n-border-focus)" })]), B("&:hover", { backgroundColor: "var(--n-color-hover)", color: "var(--n-text-color-hover)" }, [Z("state-border", { border: "var(--n-border-hover)" })]), B("&:active", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [Z("state-border", { border: "var(--n-border-pressed)" })]), K("pressed", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [Z("state-border", { border: "var(--n-border-pressed)" })])]), K("loading", "cursor: wait;"), Q("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [K("active", { zIndex: 1, animationName: "button-wave-spread, button-wave-opacity" })]), Cr && "MozBoxSizing" in document.createElement("div").style ? B("&::moz-focus-inner", { border: 0 }) : null, Z("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), Z("border", `
 border: var(--n-border);
 `), Z("state-border", `
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `), Z("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [Q("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [di({ top: "50%", originalTransform: "translateY(-50%)" })]), Uv()]), Z("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [B("~", [Z("icon", { margin: "var(--n-icon-margin)", marginRight: 0 })])]), K("block", `
 display: flex;
 width: 100%;
 `), K("dashed", [Z("border, state-border", { borderStyle: "dashed !important" })]), K("disabled", { cursor: "not-allowed", opacity: "var(--n-opacity-disabled)" })]), B("@keyframes button-wave-spread", { from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" }, to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" } }), B("@keyframes button-wave-opacity", { from: { opacity: "var(--n-wave-opacity)" }, to: { opacity: 0 } })]), $b = Object.assign(Object.assign({}, Ee.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: "button" }, type: { type: String, default: "default" }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: "left" }, attrType: { type: String, default: "button" }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !nb } }), hi = oe({ name: "Button", props: $b, slots: Object, setup(e) {
  const t = W(null), o = W(null), r = W(false), n = pt(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), i = ce(Cb, {}), { mergedSizeRef: a } = Lg({}, { defaultSize: "medium", mergedSize: (C) => {
    const { size: E } = e;
    if (E) return E;
    const { size: k } = i;
    if (k) return k;
    const { mergedSize: b } = C || {};
    return b ? b.value : "medium";
  } }), s = D(() => e.focusable && !e.disabled), l = (C) => {
    var E;
    s.value || C.preventDefault(), !e.nativeFocusBehavior && (C.preventDefault(), !e.disabled && s.value && ((E = t.value) === null || E === void 0 || E.focus({ preventScroll: true })));
  }, c = (C) => {
    var E;
    if (!e.disabled && !e.loading) {
      const { onClick: k } = e;
      k && it(k, C), e.text || (E = o.value) === null || E === void 0 || E.play();
    }
  }, u = (C) => {
    switch (C.key) {
      case "Enter":
        if (!e.keyboard) return;
        r.value = false;
    }
  }, d = (C) => {
    switch (C.key) {
      case "Enter":
        if (!e.keyboard || e.loading) {
          C.preventDefault();
          return;
        }
        r.value = true;
    }
  }, f = () => {
    r.value = false;
  }, { inlineThemeDisabled: h, mergedClsPrefixRef: p, mergedRtlRef: m } = It(e), g = Ee("Button", "-button", Sb, et, e, p), v = yr("Button", m, p), x = D(() => {
    const C = g.value, { common: { cubicBezierEaseInOut: E, cubicBezierEaseOut: k }, self: b } = C, { rippleDuration: S, opacityDisabled: z, fontWeight: O, fontWeightStrong: N } = b, y = a.value, { dashed: R, type: _, ghost: P, text: L, color: A, round: G, circle: ie, textColor: ue, secondary: ye, tertiary: fe, quaternary: Ke, strong: Ye } = e, gt = { "--n-font-weight": Ye ? N : O };
    let le = { "--n-color": "initial", "--n-color-hover": "initial", "--n-color-pressed": "initial", "--n-color-focus": "initial", "--n-color-disabled": "initial", "--n-ripple-color": "initial", "--n-text-color": "initial", "--n-text-color-hover": "initial", "--n-text-color-pressed": "initial", "--n-text-color-focus": "initial", "--n-text-color-disabled": "initial" };
    const T = _ === "tertiary", V = _ === "default", M = T ? "default" : _;
    if (L) {
      const Te = ue || A;
      le = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": "#0000", "--n-text-color": Te || b[ee("textColorText", M)], "--n-text-color-hover": Te ? co(Te) : b[ee("textColorTextHover", M)], "--n-text-color-pressed": Te ? Dr(Te) : b[ee("textColorTextPressed", M)], "--n-text-color-focus": Te ? co(Te) : b[ee("textColorTextHover", M)], "--n-text-color-disabled": Te || b[ee("textColorTextDisabled", M)] };
    } else if (P || R) {
      const Te = ue || A;
      le = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": A || b[ee("rippleColor", M)], "--n-text-color": Te || b[ee("textColorGhost", M)], "--n-text-color-hover": Te ? co(Te) : b[ee("textColorGhostHover", M)], "--n-text-color-pressed": Te ? Dr(Te) : b[ee("textColorGhostPressed", M)], "--n-text-color-focus": Te ? co(Te) : b[ee("textColorGhostHover", M)], "--n-text-color-disabled": Te || b[ee("textColorGhostDisabled", M)] };
    } else if (ye) {
      const Te = V ? b.textColor : T ? b.textColorTertiary : b[ee("color", M)], Ze = A || Te, so = _ !== "default" && _ !== "tertiary";
      le = { "--n-color": so ? U(Ze, { alpha: Number(b.colorOpacitySecondary) }) : b.colorSecondary, "--n-color-hover": so ? U(Ze, { alpha: Number(b.colorOpacitySecondaryHover) }) : b.colorSecondaryHover, "--n-color-pressed": so ? U(Ze, { alpha: Number(b.colorOpacitySecondaryPressed) }) : b.colorSecondaryPressed, "--n-color-focus": so ? U(Ze, { alpha: Number(b.colorOpacitySecondaryHover) }) : b.colorSecondaryHover, "--n-color-disabled": b.colorSecondary, "--n-ripple-color": "#0000", "--n-text-color": Ze, "--n-text-color-hover": Ze, "--n-text-color-pressed": Ze, "--n-text-color-focus": Ze, "--n-text-color-disabled": Ze };
    } else if (fe || Ke) {
      const Te = V ? b.textColor : T ? b.textColorTertiary : b[ee("color", M)], Ze = A || Te;
      fe ? (le["--n-color"] = b.colorTertiary, le["--n-color-hover"] = b.colorTertiaryHover, le["--n-color-pressed"] = b.colorTertiaryPressed, le["--n-color-focus"] = b.colorSecondaryHover, le["--n-color-disabled"] = b.colorTertiary) : (le["--n-color"] = b.colorQuaternary, le["--n-color-hover"] = b.colorQuaternaryHover, le["--n-color-pressed"] = b.colorQuaternaryPressed, le["--n-color-focus"] = b.colorQuaternaryHover, le["--n-color-disabled"] = b.colorQuaternary), le["--n-ripple-color"] = "#0000", le["--n-text-color"] = Ze, le["--n-text-color-hover"] = Ze, le["--n-text-color-pressed"] = Ze, le["--n-text-color-focus"] = Ze, le["--n-text-color-disabled"] = Ze;
    } else le = { "--n-color": A || b[ee("color", M)], "--n-color-hover": A ? co(A) : b[ee("colorHover", M)], "--n-color-pressed": A ? Dr(A) : b[ee("colorPressed", M)], "--n-color-focus": A ? co(A) : b[ee("colorFocus", M)], "--n-color-disabled": A || b[ee("colorDisabled", M)], "--n-ripple-color": A || b[ee("rippleColor", M)], "--n-text-color": ue || (A ? b.textColorPrimary : T ? b.textColorTertiary : b[ee("textColor", M)]), "--n-text-color-hover": ue || (A ? b.textColorHoverPrimary : b[ee("textColorHover", M)]), "--n-text-color-pressed": ue || (A ? b.textColorPressedPrimary : b[ee("textColorPressed", M)]), "--n-text-color-focus": ue || (A ? b.textColorFocusPrimary : b[ee("textColorFocus", M)]), "--n-text-color-disabled": ue || (A ? b.textColorDisabledPrimary : b[ee("textColorDisabled", M)]) };
    let X = { "--n-border": "initial", "--n-border-hover": "initial", "--n-border-pressed": "initial", "--n-border-focus": "initial", "--n-border-disabled": "initial" };
    L ? X = { "--n-border": "none", "--n-border-hover": "none", "--n-border-pressed": "none", "--n-border-focus": "none", "--n-border-disabled": "none" } : X = { "--n-border": b[ee("border", M)], "--n-border-hover": b[ee("borderHover", M)], "--n-border-pressed": b[ee("borderPressed", M)], "--n-border-focus": b[ee("borderFocus", M)], "--n-border-disabled": b[ee("borderDisabled", M)] };
    const { [ee("height", y)]: ae, [ee("fontSize", y)]: $e, [ee("padding", y)]: re, [ee("paddingRound", y)]: ne, [ee("iconSize", y)]: Pe, [ee("borderRadius", y)]: vt, [ee("iconMargin", y)]: Ve, waveOpacity: bn } = b, xn = { "--n-width": ie && !L ? ae : "initial", "--n-height": L ? "initial" : ae, "--n-font-size": $e, "--n-padding": ie || L ? "initial" : G ? ne : re, "--n-icon-size": Pe, "--n-icon-margin": Ve, "--n-border-radius": L ? "initial" : ie || G ? ae : vt };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": E, "--n-bezier-ease-out": k, "--n-ripple-duration": S, "--n-opacity-disabled": z, "--n-wave-opacity": bn }, gt), le), X), xn);
  }), $ = h ? Zt("button", D(() => {
    let C = "";
    const { dashed: E, type: k, ghost: b, text: S, color: z, round: O, circle: N, textColor: y, secondary: R, tertiary: _, quaternary: P, strong: L } = e;
    E && (C += "a"), b && (C += "b"), S && (C += "c"), O && (C += "d"), N && (C += "e"), R && (C += "f"), _ && (C += "g"), P && (C += "h"), L && (C += "i"), z && (C += `j${Cs(z)}`), y && (C += `k${Cs(y)}`);
    const { value: A } = a;
    return C += `l${A[0]}`, C += `m${k[0]}`, C;
  }), x, e) : void 0;
  return { selfElRef: t, waveElRef: o, mergedClsPrefix: p, mergedFocusable: s, mergedSize: a, showBorder: n, enterPressed: r, rtlEnabled: v, handleMousedown: l, handleKeydown: d, handleBlur: f, handleKeyup: u, handleClick: c, customColorCssVars: D(() => {
    const { color: C } = e;
    if (!C) return null;
    const E = co(C);
    return { "--n-border-color": C, "--n-border-color-hover": E, "--n-border-color-pressed": Dr(C), "--n-border-color-focus": E, "--n-border-color-disabled": C };
  }), cssVars: h ? void 0 : x, themeClass: $ == null ? void 0 : $.themeClass, onRender: $ == null ? void 0 : $.onRender };
}, render() {
  const { mergedClsPrefix: e, tag: t, onRender: o } = this;
  o == null ? void 0 : o();
  const r = rt(this.$slots.default, (n) => n && w("span", { class: `${e}-button__content` }, n));
  return w(t, { ref: "selfElRef", class: [this.themeClass, `${e}-button`, `${e}-button--${this.type}-type`, `${e}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e}-button--rtl`, this.disabled && `${e}-button--disabled`, this.block && `${e}-button--block`, this.enterPressed && `${e}-button--pressed`, !this.text && this.dashed && `${e}-button--dashed`, this.color && `${e}-button--color`, this.secondary && `${e}-button--secondary`, this.loading && `${e}-button--loading`, this.ghost && `${e}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === "right" && r, w(Yg, { width: true }, { default: () => rt(this.$slots.icon, (n) => (this.loading || this.renderIcon || n) && w("span", { class: `${e}-button__icon`, style: { margin: ui(this.$slots.default) ? "0" : "" } }, w(Oc, null, { default: () => this.loading ? w(Qg, { clsPrefix: e, key: "loading", class: `${e}-icon-slot`, strokeWidth: 20 }) : w("div", { key: "icon", class: `${e}-icon-slot`, role: "none" }, this.renderIcon ? this.renderIcon() : n) }))) }), this.iconPlacement === "left" && r, this.text ? null : w(Kv, { ref: "waveElRef", clsPrefix: e }), this.showBorder ? w("div", { "aria-hidden": true, class: `${e}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? w("div", { "aria-hidden": true, class: `${e}-button__state-border`, style: this.customColorCssVars }) : null);
} }), K2 = hi, Eb = { titleFontSize: "22px" };
function zb(e) {
  const { borderRadius: t, fontSize: o, lineHeight: r, textColor2: n, textColor1: i, textColorDisabled: a, dividerColor: s, fontWeightStrong: l, primaryColor: c, baseColor: u, hoverColor: d, cardColor: f, modalColor: h, popoverColor: p } = e;
  return Object.assign(Object.assign({}, Eb), { borderRadius: t, borderColor: j(f, s), borderColorModal: j(h, s), borderColorPopover: j(p, s), textColor: n, titleFontWeight: l, titleTextColor: i, dayTextColor: a, fontSize: o, lineHeight: r, dateColorCurrent: c, dateTextColorCurrent: u, cellColorHover: j(f, d), cellColorHoverModal: j(h, d), cellColorHoverPopover: j(p, d), cellColor: f, cellColorModal: h, cellColorPopover: p, barColor: c });
}
const Pb = { name: "Calendar", common: F, peers: { Button: et }, self: zb }, Tb = { paddingSmall: "12px 16px 12px", paddingMedium: "19px 24px 20px", paddingLarge: "23px 32px 24px", paddingHuge: "27px 40px 28px", titleFontSizeSmall: "16px", titleFontSizeMedium: "18px", titleFontSizeLarge: "18px", titleFontSizeHuge: "18px", closeIconSize: "18px", closeSize: "22px" };
function _b(e) {
  const { primaryColor: t, borderRadius: o, lineHeight: r, fontSize: n, cardColor: i, textColor2: a, textColor1: s, dividerColor: l, fontWeightStrong: c, closeIconColor: u, closeIconColorHover: d, closeIconColorPressed: f, closeColorHover: h, closeColorPressed: p, modalColor: m, boxShadow1: g, popoverColor: v, actionColor: x } = e;
  return Object.assign(Object.assign({}, Tb), { lineHeight: r, color: i, colorModal: m, colorPopover: v, colorTarget: t, colorEmbedded: x, colorEmbeddedModal: x, colorEmbeddedPopover: x, textColor: a, titleTextColor: s, borderColor: l, actionColor: x, titleFontWeight: c, closeColorHover: h, closeColorPressed: p, closeBorderRadius: o, closeIconColor: u, closeIconColorHover: d, closeIconColorPressed: f, fontSizeSmall: n, fontSizeMedium: n, fontSizeLarge: n, fontSizeHuge: n, boxShadow: g, borderRadius: o });
}
const Zi = { name: "Card", common: F, self: _b }, Rb = B([Q("card", `
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
 `, [tc({ background: "var(--n-color-modal)" }), K("hoverable", [B("&:hover", "box-shadow: var(--n-box-shadow);")]), K("content-segmented", [B(">", [Z("content", { paddingTop: "var(--n-padding-bottom)" })])]), K("content-soft-segmented", [B(">", [Z("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), K("footer-segmented", [B(">", [Z("footer", { paddingTop: "var(--n-padding-bottom)" })])]), K("footer-soft-segmented", [B(">", [Z("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), B(">", [Q("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [Z("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), Z("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), Z("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), Z("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), Z("content", "flex: 1; min-width: 0;"), Z("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [B("&:first-child", { paddingTop: "var(--n-padding-bottom)" })]), Z("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), Q("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [B("img", `
 display: block;
 width: 100%;
 `)]), K("bordered", `
 border: 1px solid var(--n-border-color);
 `, [B("&:target", "border-color: var(--n-color-target);")]), K("action-segmented", [B(">", [Z("action", [B("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), K("content-segmented, content-soft-segmented", [B(">", [Z("content", { transition: "border-color 0.3s var(--n-bezier)" }, [B("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), K("footer-segmented, footer-soft-segmented", [B(">", [Z("footer", { transition: "border-color 0.3s var(--n-bezier)" }, [B("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), K("embedded", `
 background-color: var(--n-color-embedded);
 `)]), ec(Q("card", `
 background: var(--n-color-modal);
 `, [K("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), dm(Q("card", `
 background: var(--n-color-popover);
 `, [K("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), Ui = { title: [String, Function], contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], headerExtraClass: String, headerExtraStyle: [Object, String], footerClass: String, footerStyle: [Object, String], embedded: Boolean, segmented: { type: [Boolean, Object], default: false }, size: { type: String, default: "medium" }, bordered: { type: Boolean, default: true }, closable: Boolean, hoverable: Boolean, role: String, onClose: [Function, Array], tag: { type: String, default: "div" }, cover: Function, content: [String, Function], footer: Function, action: Function, headerExtra: Function, closeFocusable: Boolean }, kb = Wi(Ui), Ib = Object.assign(Object.assign({}, Ee.props), Ui), Ab = oe({ name: "Card", props: Ib, slots: Object, setup(e) {
  const t = () => {
    const { onClose: c } = e;
    c && it(c);
  }, { inlineThemeDisabled: o, mergedClsPrefixRef: r, mergedRtlRef: n } = It(e), i = Ee("Card", "-card", Rb, Zi, e, r), a = yr("Card", n, r), s = D(() => {
    const { size: c } = e, { self: { color: u, colorModal: d, colorTarget: f, textColor: h, titleTextColor: p, titleFontWeight: m, borderColor: g, actionColor: v, borderRadius: x, lineHeight: $, closeIconColor: C, closeIconColorHover: E, closeIconColorPressed: k, closeColorHover: b, closeColorPressed: S, closeBorderRadius: z, closeIconSize: O, closeSize: N, boxShadow: y, colorPopover: R, colorEmbedded: _, colorEmbeddedModal: P, colorEmbeddedPopover: L, [ee("padding", c)]: A, [ee("fontSize", c)]: G, [ee("titleFontSize", c)]: ie }, common: { cubicBezierEaseInOut: ue } } = i.value, { top: ye, left: fe, bottom: Ke } = fo(A);
    return { "--n-bezier": ue, "--n-border-radius": x, "--n-color": u, "--n-color-modal": d, "--n-color-popover": R, "--n-color-embedded": _, "--n-color-embedded-modal": P, "--n-color-embedded-popover": L, "--n-color-target": f, "--n-text-color": h, "--n-line-height": $, "--n-action-color": v, "--n-title-text-color": p, "--n-title-font-weight": m, "--n-close-icon-color": C, "--n-close-icon-color-hover": E, "--n-close-icon-color-pressed": k, "--n-close-color-hover": b, "--n-close-color-pressed": S, "--n-border-color": g, "--n-box-shadow": y, "--n-padding-top": ye, "--n-padding-bottom": Ke, "--n-padding-left": fe, "--n-font-size": G, "--n-title-font-size": ie, "--n-close-size": N, "--n-close-icon-size": O, "--n-close-border-radius": z };
  }), l = o ? Zt("card", D(() => e.size[0]), s, e) : void 0;
  return { rtlEnabled: a, mergedClsPrefix: r, mergedTheme: i, handleCloseClick: t, cssVars: o ? void 0 : s, themeClass: l == null ? void 0 : l.themeClass, onRender: l == null ? void 0 : l.onRender };
}, render() {
  const { segmented: e, bordered: t, hoverable: o, mergedClsPrefix: r, rtlEnabled: n, onRender: i, embedded: a, tag: s, $slots: l } = this;
  return i == null ? void 0 : i(), w(s, { class: [`${r}-card`, this.themeClass, a && `${r}-card--embedded`, { [`${r}-card--rtl`]: n, [`${r}-card--content${typeof e != "boolean" && e.content === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.content, [`${r}-card--footer${typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.footer, [`${r}-card--action-segmented`]: e === true || e !== false && e.action, [`${r}-card--bordered`]: t, [`${r}-card--hoverable`]: o }], style: this.cssVars, role: this.role }, rt(l.cover, (c) => {
    const u = this.cover ? ht([this.cover()]) : c;
    return u && w("div", { class: `${r}-card-cover`, role: "none" }, u);
  }), rt(l.header, (c) => {
    const { title: u } = this, d = u ? ht(typeof u == "function" ? [u()] : [u]) : c;
    return d || this.closable ? w("div", { class: [`${r}-card-header`, this.headerClass], style: this.headerStyle, role: "heading" }, w("div", { class: `${r}-card-header__main`, role: "heading" }, d), rt(l["header-extra"], (f) => {
      const h = this.headerExtra ? ht([this.headerExtra()]) : f;
      return h && w("div", { class: [`${r}-card-header__extra`, this.headerExtraClass], style: this.headerExtraStyle }, h);
    }), this.closable && w(Mc, { clsPrefix: r, class: `${r}-card-header__close`, onClick: this.handleCloseClick, focusable: this.closeFocusable, absolute: true })) : null;
  }), rt(l.default, (c) => {
    const { content: u } = this, d = u ? ht(typeof u == "function" ? [u()] : [u]) : c;
    return d && w("div", { class: [`${r}-card__content`, this.contentClass], style: this.contentStyle, role: "none" }, d);
  }), rt(l.footer, (c) => {
    const u = this.footer ? ht([this.footer()]) : c;
    return u && w("div", { class: [`${r}-card__footer`, this.footerClass], style: this.footerStyle, role: "none" }, u);
  }), rt(l.action, (c) => {
    const u = this.action ? ht([this.action()]) : c;
    return u && w("div", { class: `${r}-card__action`, role: "none" }, u);
  }));
} });
function Ob() {
  return { dotSize: "8px", dotColor: "rgba(255, 255, 255, .3)", dotColorActive: "rgba(255, 255, 255, 1)", dotColorFocus: "rgba(255, 255, 255, .5)", dotLineWidth: "16px", dotLineWidthActive: "24px", arrowColor: "#eee" };
}
const Mb = { name: "Carousel", common: F, self: Ob }, Db = { sizeSmall: "14px", sizeMedium: "16px", sizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function Bb(e) {
  const { baseColor: t, inputColorDisabled: o, cardColor: r, modalColor: n, popoverColor: i, textColorDisabled: a, borderColor: s, primaryColor: l, textColor2: c, fontSizeSmall: u, fontSizeMedium: d, fontSizeLarge: f, borderRadiusSmall: h, lineHeight: p } = e;
  return Object.assign(Object.assign({}, Db), { labelLineHeight: p, fontSizeSmall: u, fontSizeMedium: d, fontSizeLarge: f, borderRadius: h, color: t, colorChecked: l, colorDisabled: o, colorDisabledChecked: o, colorTableHeader: r, colorTableHeaderModal: n, colorTableHeaderPopover: i, checkMarkColor: t, checkMarkColorDisabled: a, checkMarkColorDisabledChecked: a, border: `1px solid ${s}`, borderDisabled: `1px solid ${s}`, borderDisabledChecked: `1px solid ${s}`, borderChecked: `1px solid ${l}`, borderFocus: `1px solid ${l}`, boxShadowFocus: `0 0 0 2px ${U(l, { alpha: 0.3 })}`, textColor: c, textColorDisabled: a });
}
const Ko = { name: "Checkbox", common: F, self: Bb };
function Lb(e) {
  const { borderRadius: t, boxShadow2: o, popoverColor: r, textColor2: n, textColor3: i, primaryColor: a, textColorDisabled: s, dividerColor: l, hoverColor: c, fontSizeMedium: u, heightMedium: d } = e;
  return { menuBorderRadius: t, menuColor: r, menuBoxShadow: o, menuDividerColor: l, menuHeight: "calc(var(--n-option-height) * 6.6)", optionArrowColor: i, optionHeight: d, optionFontSize: u, optionColorHover: c, optionTextColor: n, optionTextColorActive: a, optionTextColorDisabled: s, optionCheckMarkColor: a, loadingColor: a, columnWidth: "180px" };
}
const Fb = { name: "Cascader", common: F, peers: { InternalSelectMenu: $r, InternalSelection: Vi, Scrollbar: Ge, Checkbox: Ko, Empty: ro }, self: Lb };
function Hb(e) {
  const { textColor2: t, fontSize: o, fontWeightStrong: r, textColor3: n } = e;
  return { textColor: t, fontSize: o, fontWeightStrong: r, "mono-3": "#a0a1a7", "hue-1": "#0184bb", "hue-2": "#4078f2", "hue-3": "#a626a4", "hue-4": "#50a14f", "hue-5": "#e45649", "hue-5-2": "#c91243", "hue-6": "#986801", "hue-6-2": "#c18401", lineNumberTextColor: n };
}
const Kc = { name: "Code", common: F, self: Hb };
function Nb(e) {
  const { fontWeight: t, textColor1: o, textColor2: r, textColorDisabled: n, dividerColor: i, fontSize: a } = e;
  return { titleFontSize: a, titleFontWeight: t, dividerColor: i, titleTextColor: o, titleTextColorDisabled: n, fontSize: a, textColor: r, arrowColor: r, arrowColorDisabled: n, itemMargin: "16px 0 0 0", titlePadding: "16px 0 0 0" };
}
const Wb = { name: "Collapse", common: F, self: Nb };
function jb(e) {
  const { cubicBezierEaseInOut: t } = e;
  return { bezier: t };
}
const Vb = { name: "CollapseTransition", common: F, self: jb };
function Zb(e) {
  const { fontSize: t, boxShadow2: o, popoverColor: r, textColor2: n, borderRadius: i, borderColor: a, heightSmall: s, heightMedium: l, heightLarge: c, fontSizeSmall: u, fontSizeMedium: d, fontSizeLarge: f, dividerColor: h } = e;
  return { panelFontSize: t, boxShadow: o, color: r, textColor: n, borderRadius: i, border: `1px solid ${a}`, heightSmall: s, heightMedium: l, heightLarge: c, fontSizeSmall: u, fontSizeMedium: d, fontSizeLarge: f, dividerColor: h };
}
const Ub = { name: "ColorPicker", common: F, peers: { Input: ct, Button: et }, self: Zb }, Gb = { abstract: Boolean, bordered: { type: Boolean, default: void 0 }, clsPrefix: String, locale: Object, dateLocale: Object, namespace: String, rtl: Array, tag: { type: String, default: "div" }, hljs: Object, katex: Object, theme: Object, themeOverrides: Object, componentOptions: Object, icons: Object, breakpoints: Object, preflightStyleDisabled: Boolean, styleMountTarget: Object, inlineThemeDisabled: { type: Boolean, default: void 0 }, as: { type: String, validator: () => (Co("config-provider", "`as` is deprecated, please use `tag` instead."), true), default: void 0 } }, q2 = oe({ name: "ConfigProvider", alias: ["App"], props: Gb, setup(e) {
  const t = ce(Vt, null), o = D(() => {
    const { theme: m } = e;
    if (m === null) return;
    const g = t == null ? void 0 : t.mergedThemeRef.value;
    return m === void 0 ? g : g === void 0 ? m : Object.assign({}, g, m);
  }), r = D(() => {
    const { themeOverrides: m } = e;
    if (m !== null) {
      if (m === void 0) return t == null ? void 0 : t.mergedThemeOverridesRef.value;
      {
        const g = t == null ? void 0 : t.mergedThemeOverridesRef.value;
        return g === void 0 ? m : er({}, g, m);
      }
    }
  }), n = pt(() => {
    const { namespace: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : m;
  }), i = pt(() => {
    const { bordered: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : m;
  }), a = D(() => {
    const { icons: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : m;
  }), s = D(() => {
    const { componentOptions: m } = e;
    return m !== void 0 ? m : t == null ? void 0 : t.mergedComponentPropsRef.value;
  }), l = D(() => {
    const { clsPrefix: m } = e;
    return m !== void 0 ? m : t ? t.mergedClsPrefixRef.value : qr;
  }), c = D(() => {
    var m;
    const { rtl: g } = e;
    if (g === void 0) return t == null ? void 0 : t.mergedRtlRef.value;
    const v = {};
    for (const x of g) v[x.name] = ma(x), (m = x.peers) === null || m === void 0 || m.forEach(($) => {
      $.name in v || (v[$.name] = ma($));
    });
    return v;
  }), u = D(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), d = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), f = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), h = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), p = D(() => {
    const { value: m } = o, { value: g } = r, v = g && Object.keys(g).length !== 0, x = m == null ? void 0 : m.name;
    return x ? v ? `${x}-${ur(JSON.stringify(r.value))}` : x : v ? ur(JSON.stringify(r.value)) : "";
  });
  return Be(Vt, { mergedThemeHashRef: p, mergedBreakpointsRef: u, mergedRtlRef: c, mergedIconsRef: a, mergedComponentPropsRef: s, mergedBorderedRef: i, mergedNamespaceRef: n, mergedClsPrefixRef: l, mergedLocaleRef: D(() => {
    const { locale: m } = e;
    if (m !== null) return m === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : m;
  }), mergedDateLocaleRef: D(() => {
    const { dateLocale: m } = e;
    if (m !== null) return m === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : m;
  }), mergedHljsRef: D(() => {
    const { hljs: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : m;
  }), mergedKatexRef: D(() => {
    const { katex: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedKatexRef.value : m;
  }), mergedThemeRef: o, mergedThemeOverridesRef: r, inlineThemeDisabled: d || false, preflightStyleDisabled: f || false, styleMountTarget: h }), { mergedClsPrefix: l, mergedBordered: i, mergedNamespace: n, mergedTheme: o, mergedThemeOverrides: r };
}, render() {
  var e, t, o, r;
  return this.abstract ? (r = (o = this.$slots).default) === null || r === void 0 ? void 0 : r.call(o) : w(this.as || this.tag, { class: `${this.mergedClsPrefix || qr}-config-provider` }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
} });
function Kb(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const qc = { name: "Popselect", common: F, peers: { Popover: no, InternalSelectMenu: $r }, self: Kb };
function qb(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const Yc = { name: "Select", common: F, peers: { InternalSelection: Vi, InternalSelectMenu: $r }, self: qb }, Yb = { itemPaddingSmall: "0 4px", itemMarginSmall: "0 0 0 8px", itemMarginSmallRtl: "0 8px 0 0", itemPaddingMedium: "0 4px", itemMarginMedium: "0 0 0 8px", itemMarginMediumRtl: "0 8px 0 0", itemPaddingLarge: "0 4px", itemMarginLarge: "0 0 0 8px", itemMarginLargeRtl: "0 8px 0 0", buttonIconSizeSmall: "14px", buttonIconSizeMedium: "16px", buttonIconSizeLarge: "18px", inputWidthSmall: "60px", selectWidthSmall: "unset", inputMarginSmall: "0 0 0 8px", inputMarginSmallRtl: "0 8px 0 0", selectMarginSmall: "0 0 0 8px", prefixMarginSmall: "0 8px 0 0", suffixMarginSmall: "0 0 0 8px", inputWidthMedium: "60px", selectWidthMedium: "unset", inputMarginMedium: "0 0 0 8px", inputMarginMediumRtl: "0 8px 0 0", selectMarginMedium: "0 0 0 8px", prefixMarginMedium: "0 8px 0 0", suffixMarginMedium: "0 0 0 8px", inputWidthLarge: "60px", selectWidthLarge: "unset", inputMarginLarge: "0 0 0 8px", inputMarginLargeRtl: "0 8px 0 0", selectMarginLarge: "0 0 0 8px", prefixMarginLarge: "0 8px 0 0", suffixMarginLarge: "0 0 0 8px" };
function Xb(e) {
  const { textColor2: t, primaryColor: o, primaryColorHover: r, primaryColorPressed: n, inputColorDisabled: i, textColorDisabled: a, borderColor: s, borderRadius: l, fontSizeTiny: c, fontSizeSmall: u, fontSizeMedium: d, heightTiny: f, heightSmall: h, heightMedium: p } = e;
  return Object.assign(Object.assign({}, Yb), { buttonColor: "#0000", buttonColorHover: "#0000", buttonColorPressed: "#0000", buttonBorder: `1px solid ${s}`, buttonBorderHover: `1px solid ${s}`, buttonBorderPressed: `1px solid ${s}`, buttonIconColor: t, buttonIconColorHover: t, buttonIconColorPressed: t, itemTextColor: t, itemTextColorHover: r, itemTextColorPressed: n, itemTextColorActive: o, itemTextColorDisabled: a, itemColor: "#0000", itemColorHover: "#0000", itemColorPressed: "#0000", itemColorActive: "#0000", itemColorActiveHover: "#0000", itemColorDisabled: i, itemBorder: "1px solid #0000", itemBorderHover: "1px solid #0000", itemBorderPressed: "1px solid #0000", itemBorderActive: `1px solid ${o}`, itemBorderDisabled: `1px solid ${s}`, itemBorderRadius: l, itemSizeSmall: f, itemSizeMedium: h, itemSizeLarge: p, itemFontSizeSmall: c, itemFontSizeMedium: u, itemFontSizeLarge: d, jumperFontSizeSmall: c, jumperFontSizeMedium: u, jumperFontSizeLarge: d, jumperTextColor: t, jumperTextColorDisabled: a });
}
const Xc = { name: "Pagination", common: F, peers: { Select: Yc, Input: ct, Popselect: qc }, self: Xb }, Jb = { padding: "4px 0", optionIconSizeSmall: "14px", optionIconSizeMedium: "16px", optionIconSizeLarge: "16px", optionIconSizeHuge: "18px", optionSuffixWidthSmall: "14px", optionSuffixWidthMedium: "14px", optionSuffixWidthLarge: "16px", optionSuffixWidthHuge: "16px", optionIconSuffixWidthSmall: "32px", optionIconSuffixWidthMedium: "32px", optionIconSuffixWidthLarge: "36px", optionIconSuffixWidthHuge: "36px", optionPrefixWidthSmall: "14px", optionPrefixWidthMedium: "14px", optionPrefixWidthLarge: "16px", optionPrefixWidthHuge: "16px", optionIconPrefixWidthSmall: "36px", optionIconPrefixWidthMedium: "36px", optionIconPrefixWidthLarge: "40px", optionIconPrefixWidthHuge: "40px" };
function Qb(e) {
  const { primaryColor: t, textColor2: o, dividerColor: r, hoverColor: n, popoverColor: i, invertedColor: a, borderRadius: s, fontSizeSmall: l, fontSizeMedium: c, fontSizeLarge: u, fontSizeHuge: d, heightSmall: f, heightMedium: h, heightLarge: p, heightHuge: m, textColor3: g, opacityDisabled: v } = e;
  return Object.assign(Object.assign({}, Jb), { optionHeightSmall: f, optionHeightMedium: h, optionHeightLarge: p, optionHeightHuge: m, borderRadius: s, fontSizeSmall: l, fontSizeMedium: c, fontSizeLarge: u, fontSizeHuge: d, optionTextColor: o, optionTextColorHover: o, optionTextColorActive: t, optionTextColorChildActive: t, color: i, dividerColor: r, suffixColor: o, prefixColor: o, optionColorHover: n, optionColorActive: U(t, { alpha: 0.1 }), groupHeaderTextColor: g, optionTextColorInverted: "#BBB", optionTextColorHoverInverted: "#FFF", optionTextColorActiveInverted: "#FFF", optionTextColorChildActiveInverted: "#FFF", colorInverted: a, dividerColorInverted: "#BBB", suffixColorInverted: "#BBB", prefixColorInverted: "#BBB", optionColorHoverInverted: t, optionColorActiveInverted: t, groupHeaderTextColorInverted: "#AAA", optionOpacityDisabled: v });
}
const fn = { name: "Dropdown", common: F, peers: { Popover: no }, self: Qb }, e0 = { padding: "8px 14px" };
function t0(e) {
  const { borderRadius: t, boxShadow2: o, baseColor: r } = e;
  return Object.assign(Object.assign({}, e0), { borderRadius: t, boxShadow: o, color: j(r, "rgba(0, 0, 0, .85)"), textColor: r });
}
const Er = { name: "Tooltip", common: F, peers: { Popover: no }, self: t0 }, Gi = { name: "Ellipsis", common: F, peers: { Tooltip: Er } }, o0 = { radioSizeSmall: "14px", radioSizeMedium: "16px", radioSizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function r0(e) {
  const { borderColor: t, primaryColor: o, baseColor: r, textColorDisabled: n, inputColorDisabled: i, textColor2: a, opacityDisabled: s, borderRadius: l, fontSizeSmall: c, fontSizeMedium: u, fontSizeLarge: d, heightSmall: f, heightMedium: h, heightLarge: p, lineHeight: m } = e;
  return Object.assign(Object.assign({}, o0), { labelLineHeight: m, buttonHeightSmall: f, buttonHeightMedium: h, buttonHeightLarge: p, fontSizeSmall: c, fontSizeMedium: u, fontSizeLarge: d, boxShadow: `inset 0 0 0 1px ${t}`, boxShadowActive: `inset 0 0 0 1px ${o}`, boxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${U(o, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${o}`, boxShadowDisabled: `inset 0 0 0 1px ${t}`, color: r, colorDisabled: i, colorActive: "#0000", textColor: a, textColorDisabled: n, dotColorActive: o, dotColorDisabled: t, buttonBorderColor: t, buttonBorderColorActive: o, buttonBorderColorHover: t, buttonColor: r, buttonColorActive: r, buttonTextColor: a, buttonTextColorActive: o, buttonTextColorHover: o, opacityDisabled: s, buttonBoxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${U(o, { alpha: 0.3 })}`, buttonBoxShadowHover: "inset 0 0 0 1px #0000", buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: l });
}
const Jc = { name: "Radio", common: F, self: r0 }, n0 = { thPaddingSmall: "8px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "8px", tdPaddingMedium: "12px", tdPaddingLarge: "12px", sorterSize: "15px", resizableContainerSize: "8px", resizableSize: "2px", filterSize: "15px", paginationMargin: "12px 0 0 0", emptyPadding: "48px 0", actionPadding: "8px 12px", actionButtonMargin: "0 8px 0 0" };
function i0(e) {
  const { cardColor: t, modalColor: o, popoverColor: r, textColor2: n, textColor1: i, tableHeaderColor: a, tableColorHover: s, iconColor: l, primaryColor: c, fontWeightStrong: u, borderRadius: d, lineHeight: f, fontSizeSmall: h, fontSizeMedium: p, fontSizeLarge: m, dividerColor: g, heightSmall: v, opacityDisabled: x, tableColorStriped: $ } = e;
  return Object.assign(Object.assign({}, n0), { actionDividerColor: g, lineHeight: f, borderRadius: d, fontSizeSmall: h, fontSizeMedium: p, fontSizeLarge: m, borderColor: j(t, g), tdColorHover: j(t, s), tdColorSorting: j(t, s), tdColorStriped: j(t, $), thColor: j(t, a), thColorHover: j(j(t, a), s), thColorSorting: j(j(t, a), s), tdColor: t, tdTextColor: n, thTextColor: i, thFontWeight: u, thButtonColorHover: s, thIconColor: l, thIconColorActive: c, borderColorModal: j(o, g), tdColorHoverModal: j(o, s), tdColorSortingModal: j(o, s), tdColorStripedModal: j(o, $), thColorModal: j(o, a), thColorHoverModal: j(j(o, a), s), thColorSortingModal: j(j(o, a), s), tdColorModal: o, borderColorPopover: j(r, g), tdColorHoverPopover: j(r, s), tdColorSortingPopover: j(r, s), tdColorStripedPopover: j(r, $), thColorPopover: j(r, a), thColorHoverPopover: j(j(r, a), s), thColorSortingPopover: j(j(r, a), s), tdColorPopover: r, boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)", boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)", loadingColor: c, loadingSize: v, opacityLoading: x });
}
const a0 = { name: "DataTable", common: F, peers: { Button: et, Checkbox: Ko, Radio: Jc, Pagination: Xc, Scrollbar: Ge, Empty: ro, Popover: no, Ellipsis: Gi, Dropdown: fn }, self: i0 }, s0 = Object.assign(Object.assign({}, dn), Ee.props), l0 = oe({ name: "Tooltip", props: s0, slots: Object, __popover__: true, setup(e) {
  const { mergedClsPrefixRef: t } = It(e), o = Ee("Tooltip", "-tooltip", void 0, Er, e, t), r = W(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    r.value.syncPosition();
  }, setShow(i) {
    r.value.setShow(i);
  } }), { popoverRef: r, mergedTheme: o, popoverThemeOverrides: D(() => o.value.self) });
}, render() {
  const { mergedTheme: e, internalExtraClass: t } = this;
  return w(Zc, Object.assign(Object.assign({}, this.$props), { theme: e.peers.Popover, themeOverrides: e.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: t.concat("tooltip"), ref: "popoverRef" }), this.$slots);
} }), Qc = Q("ellipsis", { overflow: "hidden" }, [Ht("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), K("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), K("cursor-pointer", `
 cursor: pointer;
 `)]);
function pi(e) {
  return `${e}-ellipsis--line-clamp`;
}
function mi(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const eu = Object.assign(Object.assign({}, Ee.props), { expandTrigger: String, lineClamp: [Number, String], tooltip: { type: [Boolean, Object], default: true } }), c0 = oe({ name: "Ellipsis", inheritAttrs: false, props: eu, slots: Object, setup(e, { slots: t, attrs: o }) {
  const r = kc(), n = Ee("Ellipsis", "-ellipsis", Qc, Gi, e, r), i = W(null), a = W(null), s = W(null), l = W(false), c = D(() => {
    const { lineClamp: g } = e, { value: v } = l;
    return g !== void 0 ? { textOverflow: "", "-webkit-line-clamp": v ? "" : g } : { textOverflow: v ? "" : "ellipsis", "-webkit-line-clamp": "" };
  });
  function u() {
    let g = false;
    const { value: v } = l;
    if (v) return true;
    const { value: x } = i;
    if (x) {
      const { lineClamp: $ } = e;
      if (h(x), $ !== void 0) g = x.scrollHeight <= x.offsetHeight;
      else {
        const { value: C } = a;
        C && (g = C.getBoundingClientRect().width <= x.getBoundingClientRect().width);
      }
      p(x, g);
    }
    return g;
  }
  const d = D(() => e.expandTrigger === "click" ? () => {
    var g;
    const { value: v } = l;
    v && ((g = s.value) === null || g === void 0 || g.setShow(false)), l.value = !v;
  } : void 0);
  $i(() => {
    var g;
    e.tooltip && ((g = s.value) === null || g === void 0 || g.setShow(false));
  });
  const f = () => w("span", Object.assign({}, jt(o, { class: [`${r.value}-ellipsis`, e.lineClamp !== void 0 ? pi(r.value) : void 0, e.expandTrigger === "click" ? mi(r.value, "pointer") : void 0], style: c.value }), { ref: "triggerRef", onClick: d.value, onMouseenter: e.expandTrigger === "click" ? u : void 0 }), e.lineClamp ? t : w("span", { ref: "triggerInnerRef" }, t));
  function h(g) {
    if (!g) return;
    const v = c.value, x = pi(r.value);
    e.lineClamp !== void 0 ? m(g, x, "add") : m(g, x, "remove");
    for (const $ in v) g.style[$] !== v[$] && (g.style[$] = v[$]);
  }
  function p(g, v) {
    const x = mi(r.value, "pointer");
    e.expandTrigger === "click" && !v ? m(g, x, "add") : m(g, x, "remove");
  }
  function m(g, v, x) {
    x === "add" ? g.classList.contains(v) || g.classList.add(v) : g.classList.contains(v) && g.classList.remove(v);
  }
  return { mergedTheme: n, triggerRef: i, triggerInnerRef: a, tooltipRef: s, handleClick: d, renderTrigger: f, getTooltipDisabled: u };
}, render() {
  var e;
  const { tooltip: t, renderTrigger: o, $slots: r } = this;
  if (t) {
    const { mergedTheme: n } = this;
    return w(l0, Object.assign({ ref: "tooltipRef", placement: "top" }, t, { getDisabled: this.getTooltipDisabled, theme: n.peers.Tooltip, themeOverrides: n.peerOverrides.Tooltip }), { trigger: o, default: (e = r.tooltip) !== null && e !== void 0 ? e : r.default });
  } else return o();
} }), Y2 = oe({ name: "PerformantEllipsis", props: eu, inheritAttrs: false, setup(e, { attrs: t, slots: o }) {
  const r = W(false), n = kc();
  return wr("-ellipsis", Qc, n), { mouseEntered: r, renderTrigger: () => {
    const { lineClamp: a } = e, s = n.value;
    return w("span", Object.assign({}, jt(t, { class: [`${s}-ellipsis`, a !== void 0 ? pi(s) : void 0, e.expandTrigger === "click" ? mi(s, "pointer") : void 0], style: a === void 0 ? { textOverflow: "ellipsis" } : { "-webkit-line-clamp": a } }), { onMouseenter: () => {
      r.value = true;
    } }), a ? o : w("span", null, o));
  } };
}, render() {
  return this.mouseEntered ? w(c0, jt({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
} }), Ki = "n-dropdown-menu", hn = "n-dropdown", As = "n-dropdown-option", tu = oe({ name: "DropdownDivider", props: { clsPrefix: { type: String, required: true } }, render() {
  return w("div", { class: `${this.clsPrefix}-dropdown-divider` });
} }), u0 = oe({ name: "DropdownGroupHeader", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  const { showIconRef: e, hasSubmenuRef: t } = ce(Ki), { renderLabelRef: o, labelFieldRef: r, nodePropsRef: n, renderOptionRef: i } = ce(hn);
  return { labelField: r, showIcon: e, hasSubmenu: t, renderLabel: o, nodeProps: n, renderOption: i };
}, render() {
  var e;
  const { clsPrefix: t, hasSubmenu: o, showIcon: r, nodeProps: n, renderLabel: i, renderOption: a } = this, { rawNode: s } = this.tmNode, l = w("div", Object.assign({ class: `${t}-dropdown-option` }, n == null ? void 0 : n(s)), w("div", { class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group` }, w("div", { "data-dropdown-option": true, class: [`${t}-dropdown-option-body__prefix`, r && `${t}-dropdown-option-body__prefix--show-icon`] }, zt(s.icon)), w("div", { class: `${t}-dropdown-option-body__label`, "data-dropdown-option": true }, i ? i(s) : zt((e = s.title) !== null && e !== void 0 ? e : s[this.labelField])), w("div", { class: [`${t}-dropdown-option-body__suffix`, o && `${t}-dropdown-option-body__suffix--has-submenu`], "data-dropdown-option": true })));
  return a ? a({ node: l, option: s }) : l;
} });
function d0(e) {
  const { textColorBase: t, opacity1: o, opacity2: r, opacity3: n, opacity4: i, opacity5: a } = e;
  return { color: t, opacity1Depth: o, opacity2Depth: r, opacity3Depth: n, opacity4Depth: i, opacity5Depth: a };
}
const ou = { name: "Icon", common: F, self: d0 }, f0 = Q("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [K("color-transition", { transition: "color .3s var(--n-bezier)" }), K("depth", { color: "var(--n-color)" }, [B("svg", { opacity: "var(--n-opacity)", transition: "opacity .3s var(--n-bezier)" })]), B("svg", { height: "1em", width: "1em" })]), h0 = Object.assign(Object.assign({}, Ee.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), p0 = oe({ _n_icon__: true, name: "Icon", inheritAttrs: false, props: h0, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = It(e), r = Ee("Icon", "-icon", f0, ou, e, t), n = D(() => {
    const { depth: a } = e, { common: { cubicBezierEaseInOut: s }, self: l } = r.value;
    if (a !== void 0) {
      const { color: c, [`opacity${a}Depth`]: u } = l;
      return { "--n-bezier": s, "--n-color": c, "--n-opacity": u };
    }
    return { "--n-bezier": s, "--n-color": "", "--n-opacity": "" };
  }), i = o ? Zt("icon", D(() => `${e.depth || "d"}`), n, e) : void 0;
  return { mergedClsPrefix: t, mergedStyle: D(() => {
    const { size: a, color: s } = e;
    return { fontSize: Wr(a), color: s };
  }), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e;
  const { $parent: t, depth: o, mergedClsPrefix: r, component: n, onRender: i, themeClass: a } = this;
  return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Co("icon", "don't wrap `n-icon` inside `n-icon`"), i == null ? void 0 : i(), w("i", jt(this.$attrs, { role: "img", class: [`${r}-icon`, a, { [`${r}-icon--depth`]: o, [`${r}-icon--color-transition`]: o !== void 0 }], style: [this.cssVars, this.mergedStyle] }), n ? w(n) : this.$slots);
} });
function gi(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function m0(e) {
  return e.type === "group";
}
function ru(e) {
  return e.type === "divider";
}
function g0(e) {
  return e.type === "render";
}
const nu = oe({ name: "DropdownOption", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null }, placement: { type: String, default: "right-start" }, props: Object, scrollable: Boolean }, setup(e) {
  const t = ce(hn), { hoverKeyRef: o, keyboardKeyRef: r, lastToggledSubmenuKeyRef: n, pendingKeyPathRef: i, activeKeyPathRef: a, animatedRef: s, mergedShowRef: l, renderLabelRef: c, renderIconRef: u, labelFieldRef: d, childrenFieldRef: f, renderOptionRef: h, nodePropsRef: p, menuPropsRef: m } = t, g = ce(As, null), v = ce(Ki), x = ce(xr), $ = D(() => e.tmNode.rawNode), C = D(() => {
    const { value: A } = f;
    return gi(e.tmNode.rawNode, A);
  }), E = D(() => {
    const { disabled: A } = e.tmNode;
    return A;
  }), k = D(() => {
    if (!C.value) return false;
    const { key: A, disabled: G } = e.tmNode;
    if (G) return false;
    const { value: ie } = o, { value: ue } = r, { value: ye } = n, { value: fe } = i;
    return ie !== null ? fe.includes(A) : ue !== null ? fe.includes(A) && fe[fe.length - 1] !== A : ye !== null ? fe.includes(A) : false;
  }), b = D(() => r.value === null && !s.value), S = Nm(k, 300, b), z = D(() => !!(g == null ? void 0 : g.enteringSubmenuRef.value)), O = W(false);
  Be(As, { enteringSubmenuRef: O });
  function N() {
    O.value = true;
  }
  function y() {
    O.value = false;
  }
  function R() {
    const { parentKey: A, tmNode: G } = e;
    G.disabled || l.value && (n.value = A, r.value = null, o.value = G.key);
  }
  function _() {
    const { tmNode: A } = e;
    A.disabled || l.value && o.value !== A.key && R();
  }
  function P(A) {
    if (e.tmNode.disabled || !l.value) return;
    const { relatedTarget: G } = A;
    G && !ja({ target: G }, "dropdownOption") && !ja({ target: G }, "scrollbarRail") && (o.value = null);
  }
  function L() {
    const { value: A } = C, { tmNode: G } = e;
    l.value && !A && !G.disabled && (t.doSelect(G.key, G.rawNode), t.doUpdateShow(false));
  }
  return { labelField: d, renderLabel: c, renderIcon: u, siblingHasIcon: v.showIconRef, siblingHasSubmenu: v.hasSubmenuRef, menuProps: m, popoverBody: x, animated: s, mergedShowSubmenu: D(() => S.value && !z.value), rawNode: $, hasSubmenu: C, pending: pt(() => {
    const { value: A } = i, { key: G } = e.tmNode;
    return A.includes(G);
  }), childActive: pt(() => {
    const { value: A } = a, { key: G } = e.tmNode, ie = A.findIndex((ue) => G === ue);
    return ie === -1 ? false : ie < A.length - 1;
  }), active: pt(() => {
    const { value: A } = a, { key: G } = e.tmNode, ie = A.findIndex((ue) => G === ue);
    return ie === -1 ? false : ie === A.length - 1;
  }), mergedDisabled: E, renderOption: h, nodeProps: p, handleClick: L, handleMouseMove: _, handleMouseEnter: R, handleMouseLeave: P, handleSubmenuBeforeEnter: N, handleSubmenuAfterEnter: y };
}, render() {
  var e, t;
  const { animated: o, rawNode: r, mergedShowSubmenu: n, clsPrefix: i, siblingHasIcon: a, siblingHasSubmenu: s, renderLabel: l, renderIcon: c, renderOption: u, nodeProps: d, props: f, scrollable: h } = this;
  let p = null;
  if (n) {
    const x = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, r, r.children);
    p = w(iu, Object.assign({}, x, { clsPrefix: i, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
  }
  const m = { class: [`${i}-dropdown-option-body`, this.pending && `${i}-dropdown-option-body--pending`, this.active && `${i}-dropdown-option-body--active`, this.childActive && `${i}-dropdown-option-body--child-active`, this.mergedDisabled && `${i}-dropdown-option-body--disabled`], onMousemove: this.handleMouseMove, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onClick: this.handleClick }, g = d == null ? void 0 : d(r), v = w("div", Object.assign({ class: [`${i}-dropdown-option`, g == null ? void 0 : g.class], "data-dropdown-option": true }, g), w("div", jt(m, f), [w("div", { class: [`${i}-dropdown-option-body__prefix`, a && `${i}-dropdown-option-body__prefix--show-icon`] }, [c ? c(r) : zt(r.icon)]), w("div", { "data-dropdown-option": true, class: `${i}-dropdown-option-body__label` }, l ? l(r) : zt((t = r[this.labelField]) !== null && t !== void 0 ? t : r.title)), w("div", { "data-dropdown-option": true, class: [`${i}-dropdown-option-body__suffix`, s && `${i}-dropdown-option-body__suffix--has-submenu`] }, this.hasSubmenu ? w(p0, null, { default: () => w(jg, null) }) : null)]), this.hasSubmenu ? w(pc, null, { default: () => [w(mc, null, { default: () => w("div", { class: `${i}-dropdown-offset-container` }, w(bc, { show: this.mergedShowSubmenu, placement: this.placement, to: h && this.popoverBody || void 0, teleportDisabled: !h }, { default: () => w("div", { class: `${i}-dropdown-menu-wrapper` }, o ? w(Jt, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, { default: () => p }) : p) })) })] }) : null);
  return u ? u({ node: v, option: r }) : v;
} }), v0 = oe({ name: "NDropdownGroup", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null } }, render() {
  const { tmNode: e, parentKey: t, clsPrefix: o } = this, { children: r } = e;
  return w(wo, null, w(u0, { clsPrefix: o, tmNode: e, key: e.key }), r == null ? void 0 : r.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : ru(i) ? w(tu, { clsPrefix: o, key: n.key }) : n.isGroup ? (Co("dropdown", "`group` node is not allowed to be put in `group` node."), null) : w(nu, { clsPrefix: o, tmNode: n, parentKey: t, key: n.key });
  }));
} }), b0 = oe({ name: "DropdownRenderOption", props: { tmNode: { type: Object, required: true } }, render() {
  const { rawNode: { render: e, props: t } } = this.tmNode;
  return w("div", t, [e == null ? void 0 : e()]);
} }), iu = oe({ name: "DropdownMenu", props: { scrollable: Boolean, showArrow: Boolean, arrowStyle: [String, Object], clsPrefix: { type: String, required: true }, tmNodes: { type: Array, default: () => [] }, parentKey: { type: [String, Number], default: null } }, setup(e) {
  const { renderIconRef: t, childrenFieldRef: o } = ce(hn);
  Be(Ki, { showIconRef: D(() => {
    const n = t.value;
    return e.tmNodes.some((i) => {
      var a;
      if (i.isGroup) return (a = i.children) === null || a === void 0 ? void 0 : a.some(({ rawNode: l }) => n ? n(l) : l.icon);
      const { rawNode: s } = i;
      return n ? n(s) : s.icon;
    });
  }), hasSubmenuRef: D(() => {
    const { value: n } = o;
    return e.tmNodes.some((i) => {
      var a;
      if (i.isGroup) return (a = i.children) === null || a === void 0 ? void 0 : a.some(({ rawNode: l }) => gi(l, n));
      const { rawNode: s } = i;
      return gi(s, n);
    });
  }) });
  const r = W(null);
  return Be(un, null), Be(cn, null), Be(xr, r), { bodyRef: r };
}, render() {
  const { parentKey: e, clsPrefix: t, scrollable: o } = this, r = this.tmNodes.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : g0(i) ? w(b0, { tmNode: n, key: n.key }) : ru(i) ? w(tu, { clsPrefix: t, key: n.key }) : m0(i) ? w(v0, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key }) : w(nu, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key, props: i.props, scrollable: o });
  });
  return w("div", { class: [`${t}-dropdown-menu`, o && `${t}-dropdown-menu--scrollable`], ref: "bodyRef" }, o ? w(Fc, { contentClass: `${t}-dropdown-menu__content` }, { default: () => r }) : r, this.showArrow ? Vc({ clsPrefix: t, arrowStyle: this.arrowStyle, arrowClass: void 0, arrowWrapperClass: void 0, arrowWrapperStyle: void 0 }) : null);
} }), x0 = Q("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Wc(), Q("dropdown-option", `
 position: relative;
 `, [B("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [B("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), Q("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [B("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), Ht("disabled", [K("pending", `
 color: var(--n-option-text-color-hover);
 `, [Z("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), B("&::before", "background-color: var(--n-option-color-hover);")]), K("active", `
 color: var(--n-option-text-color-active);
 `, [Z("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), B("&::before", "background-color: var(--n-option-color-active);")]), K("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [Z("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), K("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), K("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [Z("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [K("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), Z("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [K("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), Q("icon", `
 font-size: var(--n-option-icon-size);
 `)]), Z("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), Z("suffix", `
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
 `, [K("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), Q("icon", `
 font-size: var(--n-option-icon-size);
 `)]), Q("dropdown-menu", "pointer-events: all;")]), Q("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), Q("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), Q("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), B(">", [Q("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ht("scrollable", `
 padding: var(--n-padding);
 `), K("scrollable", [Z("content", `
 padding: var(--n-padding);
 `)])]), C0 = { animated: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, size: { type: String, default: "medium" }, inverted: Boolean, placement: { type: String, default: "bottom" }, onSelect: [Function, Array], options: { type: Array, default: () => [] }, menuProps: Function, showArrow: Boolean, renderLabel: Function, renderIcon: Function, renderOption: Function, nodeProps: Function, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, value: [String, Number] }, y0 = Object.keys(dn), w0 = Object.assign(Object.assign(Object.assign({}, dn), C0), Ee.props), X2 = oe({ name: "Dropdown", inheritAttrs: false, props: w0, setup(e) {
  const t = W(false), o = lc(xe(e, "show"), t), r = D(() => {
    const { keyField: y, childrenField: R } = e;
    return _v(e.options, { getKey(_) {
      return _[y];
    }, getDisabled(_) {
      return _.disabled === true;
    }, getIgnored(_) {
      return _.type === "divider" || _.type === "render";
    }, getChildren(_) {
      return _[R];
    } });
  }), n = D(() => r.value.treeNodes), i = W(null), a = W(null), s = W(null), l = D(() => {
    var y, R, _;
    return (_ = (R = (y = i.value) !== null && y !== void 0 ? y : a.value) !== null && R !== void 0 ? R : s.value) !== null && _ !== void 0 ? _ : null;
  }), c = D(() => r.value.getPath(l.value).keyPath), u = D(() => r.value.getPath(e.value).keyPath), d = pt(() => e.keyboard && o.value);
  Lm({ keydown: { ArrowUp: { prevent: true, handler: E }, ArrowRight: { prevent: true, handler: C }, ArrowDown: { prevent: true, handler: k }, ArrowLeft: { prevent: true, handler: $ }, Enter: { prevent: true, handler: b }, Escape: x } }, d);
  const { mergedClsPrefixRef: f, inlineThemeDisabled: h } = It(e), p = Ee("Dropdown", "-dropdown", x0, fn, e, f);
  Be(hn, { labelFieldRef: xe(e, "labelField"), childrenFieldRef: xe(e, "childrenField"), renderLabelRef: xe(e, "renderLabel"), renderIconRef: xe(e, "renderIcon"), hoverKeyRef: i, keyboardKeyRef: a, lastToggledSubmenuKeyRef: s, pendingKeyPathRef: c, activeKeyPathRef: u, animatedRef: xe(e, "animated"), mergedShowRef: o, nodePropsRef: xe(e, "nodeProps"), renderOptionRef: xe(e, "renderOption"), menuPropsRef: xe(e, "menuProps"), doSelect: m, doUpdateShow: g }), Le(o, (y) => {
    !e.animated && !y && v();
  });
  function m(y, R) {
    const { onSelect: _ } = e;
    _ && it(_, y, R);
  }
  function g(y) {
    const { "onUpdate:show": R, onUpdateShow: _ } = e;
    R && it(R, y), _ && it(_, y), t.value = y;
  }
  function v() {
    i.value = null, a.value = null, s.value = null;
  }
  function x() {
    g(false);
  }
  function $() {
    z("left");
  }
  function C() {
    z("right");
  }
  function E() {
    z("up");
  }
  function k() {
    z("down");
  }
  function b() {
    const y = S();
    (y == null ? void 0 : y.isLeaf) && o.value && (m(y.key, y.rawNode), g(false));
  }
  function S() {
    var y;
    const { value: R } = r, { value: _ } = l;
    return !R || _ === null ? null : (y = R.getNode(_)) !== null && y !== void 0 ? y : null;
  }
  function z(y) {
    const { value: R } = l, { value: { getFirstAvailableNode: _ } } = r;
    let P = null;
    if (R === null) {
      const L = _();
      L !== null && (P = L.key);
    } else {
      const L = S();
      if (L) {
        let A;
        switch (y) {
          case "down":
            A = L.getNext();
            break;
          case "up":
            A = L.getPrev();
            break;
          case "right":
            A = L.getChild();
            break;
          case "left":
            A = L.getParent();
            break;
        }
        A && (P = A.key);
      }
    }
    P !== null && (i.value = null, a.value = P);
  }
  const O = D(() => {
    const { size: y, inverted: R } = e, { common: { cubicBezierEaseInOut: _ }, self: P } = p.value, { padding: L, dividerColor: A, borderRadius: G, optionOpacityDisabled: ie, [ee("optionIconSuffixWidth", y)]: ue, [ee("optionSuffixWidth", y)]: ye, [ee("optionIconPrefixWidth", y)]: fe, [ee("optionPrefixWidth", y)]: Ke, [ee("fontSize", y)]: Ye, [ee("optionHeight", y)]: gt, [ee("optionIconSize", y)]: le } = P, T = { "--n-bezier": _, "--n-font-size": Ye, "--n-padding": L, "--n-border-radius": G, "--n-option-height": gt, "--n-option-prefix-width": Ke, "--n-option-icon-prefix-width": fe, "--n-option-suffix-width": ye, "--n-option-icon-suffix-width": ue, "--n-option-icon-size": le, "--n-divider-color": A, "--n-option-opacity-disabled": ie };
    return R ? (T["--n-color"] = P.colorInverted, T["--n-option-color-hover"] = P.optionColorHoverInverted, T["--n-option-color-active"] = P.optionColorActiveInverted, T["--n-option-text-color"] = P.optionTextColorInverted, T["--n-option-text-color-hover"] = P.optionTextColorHoverInverted, T["--n-option-text-color-active"] = P.optionTextColorActiveInverted, T["--n-option-text-color-child-active"] = P.optionTextColorChildActiveInverted, T["--n-prefix-color"] = P.prefixColorInverted, T["--n-suffix-color"] = P.suffixColorInverted, T["--n-group-header-text-color"] = P.groupHeaderTextColorInverted) : (T["--n-color"] = P.color, T["--n-option-color-hover"] = P.optionColorHover, T["--n-option-color-active"] = P.optionColorActive, T["--n-option-text-color"] = P.optionTextColor, T["--n-option-text-color-hover"] = P.optionTextColorHover, T["--n-option-text-color-active"] = P.optionTextColorActive, T["--n-option-text-color-child-active"] = P.optionTextColorChildActive, T["--n-prefix-color"] = P.prefixColor, T["--n-suffix-color"] = P.suffixColor, T["--n-group-header-text-color"] = P.groupHeaderTextColor), T;
  }), N = h ? Zt("dropdown", D(() => `${e.size[0]}${e.inverted ? "i" : ""}`), O, e) : void 0;
  return { mergedClsPrefix: f, mergedTheme: p, tmNodes: n, mergedShow: o, handleAfterLeave: () => {
    e.animated && v();
  }, doUpdateShow: g, cssVars: h ? void 0 : O, themeClass: N == null ? void 0 : N.themeClass, onRender: N == null ? void 0 : N.onRender };
}, render() {
  const e = (r, n, i, a, s) => {
    var l;
    const { mergedClsPrefix: c, menuProps: u } = this;
    (l = this.onRender) === null || l === void 0 || l.call(this);
    const d = (u == null ? void 0 : u(void 0, this.tmNodes.map((h) => h.rawNode))) || {}, f = { ref: Mg(n), class: [r, `${c}-dropdown`, this.themeClass], clsPrefix: c, tmNodes: this.tmNodes, style: [...i, this.cssVars], showArrow: this.showArrow, arrowStyle: this.arrowStyle, scrollable: this.scrollable, onMouseenter: a, onMouseleave: s };
    return w(iu, jt(this.$attrs, f, d));
  }, { mergedTheme: t } = this, o = { show: this.mergedShow, theme: t.peers.Popover, themeOverrides: t.peerOverrides.Popover, internalOnAfterLeave: this.handleAfterLeave, internalRenderBody: e, onUpdateShow: this.doUpdateShow, "onUpdate:show": void 0 };
  return w(Zc, Object.assign({}, pr(this.$props, y0), o), { trigger: () => {
    var r, n;
    return (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r);
  } });
} }), S0 = { itemFontSize: "12px", itemHeight: "36px", itemWidth: "52px", panelActionPadding: "8px 0" };
function $0(e) {
  const { popoverColor: t, textColor2: o, primaryColor: r, hoverColor: n, dividerColor: i, opacityDisabled: a, boxShadow2: s, borderRadius: l, iconColor: c, iconColorDisabled: u } = e;
  return Object.assign(Object.assign({}, S0), { panelColor: t, panelBoxShadow: s, panelDividerColor: i, itemTextColor: o, itemTextColorActive: r, itemColorHover: n, itemOpacityDisabled: a, itemBorderRadius: l, borderRadius: l, iconColor: c, iconColorDisabled: u });
}
const au = { name: "TimePicker", common: F, peers: { Scrollbar: Ge, Button: et, Input: ct }, self: $0 }, E0 = { itemSize: "24px", itemCellWidth: "38px", itemCellHeight: "32px", scrollItemWidth: "80px", scrollItemHeight: "40px", panelExtraFooterPadding: "8px 12px", panelActionPadding: "8px 12px", calendarTitlePadding: "0", calendarTitleHeight: "28px", arrowSize: "14px", panelHeaderPadding: "8px 12px", calendarDaysHeight: "32px", calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px", calendarLeftPaddingDate: "6px 12px 4px 12px", calendarLeftPaddingDatetime: "4px 12px", calendarLeftPaddingDaterange: "6px 12px 4px 12px", calendarLeftPaddingDatetimerange: "4px 12px", calendarLeftPaddingMonth: "0", calendarLeftPaddingYear: "0", calendarLeftPaddingQuarter: "0", calendarLeftPaddingMonthrange: "0", calendarLeftPaddingQuarterrange: "0", calendarLeftPaddingYearrange: "0", calendarLeftPaddingWeek: "6px 12px 4px 12px", calendarRightPaddingDate: "6px 12px 4px 12px", calendarRightPaddingDatetime: "4px 12px", calendarRightPaddingDaterange: "6px 12px 4px 12px", calendarRightPaddingDatetimerange: "4px 12px", calendarRightPaddingMonth: "0", calendarRightPaddingYear: "0", calendarRightPaddingQuarter: "0", calendarRightPaddingMonthrange: "0", calendarRightPaddingQuarterrange: "0", calendarRightPaddingYearrange: "0", calendarRightPaddingWeek: "0" };
function z0(e) {
  const { hoverColor: t, fontSize: o, textColor2: r, textColorDisabled: n, popoverColor: i, primaryColor: a, borderRadiusSmall: s, iconColor: l, iconColorDisabled: c, textColor1: u, dividerColor: d, boxShadow2: f, borderRadius: h, fontWeightStrong: p } = e;
  return Object.assign(Object.assign({}, E0), { itemFontSize: o, calendarDaysFontSize: o, calendarTitleFontSize: o, itemTextColor: r, itemTextColorDisabled: n, itemTextColorActive: i, itemTextColorCurrent: a, itemColorIncluded: U(a, { alpha: 0.1 }), itemColorHover: t, itemColorDisabled: t, itemColorActive: a, itemBorderRadius: s, panelColor: i, panelTextColor: r, arrowColor: l, calendarTitleTextColor: u, calendarTitleColorHover: t, calendarDaysTextColor: r, panelHeaderDividerColor: d, calendarDaysDividerColor: d, calendarDividerColor: d, panelActionDividerColor: d, panelBoxShadow: f, panelBorderRadius: h, calendarTitleFontWeight: p, scrollItemBorderRadius: h, iconColor: l, iconColorDisabled: c });
}
const P0 = { name: "DatePicker", common: F, peers: { Input: ct, Button: et, TimePicker: au, Scrollbar: Ge }, self: z0 }, T0 = { thPaddingBorderedSmall: "8px 12px", thPaddingBorderedMedium: "12px 16px", thPaddingBorderedLarge: "16px 24px", thPaddingSmall: "0", thPaddingMedium: "0", thPaddingLarge: "0", tdPaddingBorderedSmall: "8px 12px", tdPaddingBorderedMedium: "12px 16px", tdPaddingBorderedLarge: "16px 24px", tdPaddingSmall: "0 0 8px 0", tdPaddingMedium: "0 0 12px 0", tdPaddingLarge: "0 0 16px 0" };
function _0(e) {
  const { tableHeaderColor: t, textColor2: o, textColor1: r, cardColor: n, modalColor: i, popoverColor: a, dividerColor: s, borderRadius: l, fontWeightStrong: c, lineHeight: u, fontSizeSmall: d, fontSizeMedium: f, fontSizeLarge: h } = e;
  return Object.assign(Object.assign({}, T0), { lineHeight: u, fontSizeSmall: d, fontSizeMedium: f, fontSizeLarge: h, titleTextColor: r, thColor: j(n, t), thColorModal: j(i, t), thColorPopover: j(a, t), thTextColor: r, thFontWeight: c, tdTextColor: o, tdColor: n, tdColorModal: i, tdColorPopover: a, borderColor: j(n, s), borderColorModal: j(i, s), borderColorPopover: j(a, s), borderRadius: l });
}
const R0 = { name: "Descriptions", common: F, self: _0 }, k0 = "n-dialog-provider", J2 = "n-dialog-api", Q2 = "n-dialog-reactive-list", I0 = { titleFontSize: "18px", padding: "16px 28px 20px 28px", iconSize: "28px", actionSpace: "12px", contentMargin: "8px 0 16px 0", iconMargin: "0 4px 0 0", iconMarginIconTop: "4px 0 8px 0", closeSize: "22px", closeIconSize: "18px", closeMargin: "20px 26px 0 0", closeMarginIconTop: "10px 16px 0 0" };
function A0(e) {
  const { textColor1: t, textColor2: o, modalColor: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: s, closeColorPressed: l, infoColor: c, successColor: u, warningColor: d, errorColor: f, primaryColor: h, dividerColor: p, borderRadius: m, fontWeightStrong: g, lineHeight: v, fontSize: x } = e;
  return Object.assign(Object.assign({}, I0), { fontSize: x, lineHeight: v, border: `1px solid ${p}`, titleTextColor: t, textColor: o, color: r, closeColorHover: s, closeColorPressed: l, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeBorderRadius: m, iconColor: h, iconColorInfo: c, iconColorSuccess: u, iconColorWarning: d, iconColorError: f, borderRadius: m, titleFontWeight: g });
}
const qi = { name: "Dialog", common: F, peers: { Button: et }, self: A0 }, Yi = { icon: Function, type: { type: String, default: "default" }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean }, O0 = Wi(Yi), M0 = B([Q("dialog", `
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
 `, [Z("icon", `
 color: var(--n-icon-color);
 `), K("bordered", `
 border: var(--n-border);
 `), K("icon-top", [Z("close", `
 margin: var(--n-close-margin);
 `), Z("icon", `
 margin: var(--n-icon-margin);
 `), Z("content", `
 text-align: center;
 `), Z("title", `
 justify-content: center;
 `), Z("action", `
 justify-content: center;
 `)]), K("icon-left", [Z("icon", `
 margin: var(--n-icon-margin);
 `), K("closable", [Z("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), Z("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), Z("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [K("last", "margin-bottom: 0;")]), Z("action", `
 display: flex;
 justify-content: flex-end;
 `, [B("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), Z("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), Z("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), Q("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), ec(Q("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), Q("dialog", [tc(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), D0 = { default: () => w(zs, null), info: () => w(zs, null), success: () => w(Ug, null), warning: () => w(Gg, null), error: () => w(Zg, null) }, B0 = oe({ name: "Dialog", alias: ["NimbusConfirmCard", "Confirm"], props: Object.assign(Object.assign({}, Ee.props), Yi), slots: Object, setup(e) {
  const { mergedComponentPropsRef: t, mergedClsPrefixRef: o, inlineThemeDisabled: r, mergedRtlRef: n } = It(e), i = yr("Dialog", n, o), a = D(() => {
    var h, p;
    const { iconPlacement: m } = e;
    return m || ((p = (h = t == null ? void 0 : t.value) === null || h === void 0 ? void 0 : h.Dialog) === null || p === void 0 ? void 0 : p.iconPlacement) || "left";
  });
  function s(h) {
    const { onPositiveClick: p } = e;
    p && p(h);
  }
  function l(h) {
    const { onNegativeClick: p } = e;
    p && p(h);
  }
  function c() {
    const { onClose: h } = e;
    h && h();
  }
  const u = Ee("Dialog", "-dialog", M0, qi, e, o), d = D(() => {
    const { type: h } = e, p = a.value, { common: { cubicBezierEaseInOut: m }, self: { fontSize: g, lineHeight: v, border: x, titleTextColor: $, textColor: C, color: E, closeBorderRadius: k, closeColorHover: b, closeColorPressed: S, closeIconColor: z, closeIconColorHover: O, closeIconColorPressed: N, closeIconSize: y, borderRadius: R, titleFontWeight: _, titleFontSize: P, padding: L, iconSize: A, actionSpace: G, contentMargin: ie, closeSize: ue, [p === "top" ? "iconMarginIconTop" : "iconMargin"]: ye, [p === "top" ? "closeMarginIconTop" : "closeMargin"]: fe, [ee("iconColor", h)]: Ke } } = u.value, Ye = fo(ye);
    return { "--n-font-size": g, "--n-icon-color": Ke, "--n-bezier": m, "--n-close-margin": fe, "--n-icon-margin-top": Ye.top, "--n-icon-margin-right": Ye.right, "--n-icon-margin-bottom": Ye.bottom, "--n-icon-margin-left": Ye.left, "--n-icon-size": A, "--n-close-size": ue, "--n-close-icon-size": y, "--n-close-border-radius": k, "--n-close-color-hover": b, "--n-close-color-pressed": S, "--n-close-icon-color": z, "--n-close-icon-color-hover": O, "--n-close-icon-color-pressed": N, "--n-color": E, "--n-text-color": C, "--n-border-radius": R, "--n-padding": L, "--n-line-height": v, "--n-border": x, "--n-content-margin": ie, "--n-title-font-size": P, "--n-title-font-weight": _, "--n-title-text-color": $, "--n-action-space": G };
  }), f = r ? Zt("dialog", D(() => `${e.type[0]}${a.value[0]}`), d, e) : void 0;
  return { mergedClsPrefix: o, rtlEnabled: i, mergedIconPlacement: a, mergedTheme: u, handlePositiveClick: s, handleNegativeClick: l, handleCloseClick: c, cssVars: r ? void 0 : d, themeClass: f == null ? void 0 : f.themeClass, onRender: f == null ? void 0 : f.onRender };
}, render() {
  var e;
  const { bordered: t, mergedIconPlacement: o, cssVars: r, closable: n, showIcon: i, title: a, content: s, action: l, negativeText: c, positiveText: u, positiveButtonProps: d, negativeButtonProps: f, handlePositiveClick: h, handleNegativeClick: p, mergedTheme: m, loading: g, type: v, mergedClsPrefix: x } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const $ = i ? w(Ac, { clsPrefix: x, class: `${x}-dialog__icon` }, { default: () => rt(this.$slots.icon, (E) => E || (this.icon ? zt(this.icon) : D0[this.type]())) }) : null, C = rt(this.$slots.action, (E) => E || u || c || l ? w("div", { class: [`${x}-dialog__action`, this.actionClass], style: this.actionStyle }, E || (l ? [zt(l)] : [this.negativeText && w(hi, Object.assign({ theme: m.peers.Button, themeOverrides: m.peerOverrides.Button, ghost: true, size: "small", onClick: p }, f), { default: () => zt(this.negativeText) }), this.positiveText && w(hi, Object.assign({ theme: m.peers.Button, themeOverrides: m.peerOverrides.Button, size: "small", type: v === "default" ? "primary" : v, disabled: g, loading: g, onClick: h }, d), { default: () => zt(this.positiveText) })])) : null);
  return w("div", { class: [`${x}-dialog`, this.themeClass, this.closable && `${x}-dialog--closable`, `${x}-dialog--icon-${o}`, t && `${x}-dialog--bordered`, this.rtlEnabled && `${x}-dialog--rtl`], style: r, role: "dialog" }, n ? rt(this.$slots.close, (E) => {
    const k = [`${x}-dialog__close`, this.rtlEnabled && `${x}-dialog--rtl`];
    return E ? w("div", { class: k }, E) : w(Mc, { focusable: this.closeFocusable, clsPrefix: x, class: k, onClick: this.handleCloseClick });
  }) : null, i && o === "top" ? w("div", { class: `${x}-dialog-icon-container` }, $) : null, w("div", { class: [`${x}-dialog__title`, this.titleClass], style: this.titleStyle }, i && o === "left" ? $ : null, Ss(this.$slots.header, () => [zt(a)])), w("div", { class: [`${x}-dialog__content`, C ? "" : `${x}-dialog__content--last`, this.contentClass], style: this.contentStyle }, Ss(this.$slots.default, () => [zt(s)])), C);
} });
function L0(e) {
  const { modalColor: t, textColor2: o, boxShadow3: r } = e;
  return { color: t, textColor: o, boxShadow: r };
}
const su = { name: "Modal", common: F, peers: { Scrollbar: Ge, Dialog: qi, Card: Zi }, self: L0 }, vi = "n-draggable";
function F0(e, t) {
  let o;
  const r = D(() => e.value !== false), n = D(() => r.value ? vi : ""), i = D(() => {
    const l = e.value;
    return l === true || l === false ? true : l ? l.bounds !== "none" : true;
  });
  function a(l) {
    const c = l.querySelector(`.${vi}`);
    if (!c || !n.value) return;
    let u = 0, d = 0, f = 0, h = 0, p = 0, m = 0, g;
    function v(C) {
      C.preventDefault(), g = C;
      const { x: E, y: k, right: b, bottom: S } = l.getBoundingClientRect();
      d = E, h = k, u = window.innerWidth - b, f = window.innerHeight - S;
      const { left: z, top: O } = l.style;
      p = +O.slice(0, -2), m = +z.slice(0, -2);
    }
    function x(C) {
      if (!g) return;
      const { clientX: E, clientY: k } = g;
      let b = C.clientX - E, S = C.clientY - k;
      i.value && (b > u ? b = u : -b > d && (b = -d), S > f ? S = f : -S > h && (S = -h));
      const z = b + m, O = S + p;
      l.style.top = `${O}px`, l.style.left = `${z}px`;
    }
    function $() {
      g = void 0, t.onEnd(l);
    }
    ve("mousedown", c, v), ve("mousemove", window, x), ve("mouseup", window, $), o = () => {
      ge("mousedown", c, v), ve("mousemove", window, x), ve("mouseup", window, $);
    };
  }
  function s() {
    o && (o(), o = void 0);
  }
  return dl(s), { stopDrag: s, startDrag: a, draggableRef: r, draggableClassRef: n };
}
const Xi = Object.assign(Object.assign({}, Ui), Yi), H0 = Wi(Xi), N0 = oe({ name: "ModalBody", inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, Xi), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(e) {
  const t = W(null), o = W(null), r = W(e.show), n = W(null), i = W(null), a = ce(uc);
  let s = null;
  Le(xe(e, "show"), (S) => {
    S && (s = a.getMousePosition());
  }, { immediate: true });
  const { stopDrag: l, startDrag: c, draggableRef: u, draggableClassRef: d } = F0(xe(e, "draggable"), { onEnd: (S) => {
    m(S);
  } }), f = D(() => ga([e.titleClass, d.value])), h = D(() => ga([e.headerClass, d.value]));
  Le(xe(e, "show"), (S) => {
    S && (r.value = true);
  }), jm(D(() => e.blockScroll && r.value));
  function p() {
    if (a.transformOriginRef.value === "center") return "";
    const { value: S } = n, { value: z } = i;
    if (S === null || z === null) return "";
    if (o.value) {
      const O = o.value.containerScrollTop;
      return `${S}px ${z + O}px`;
    }
    return "";
  }
  function m(S) {
    if (a.transformOriginRef.value === "center" || !s || !o.value) return;
    const z = o.value.containerScrollTop, { offsetLeft: O, offsetTop: N } = S, y = s.y, R = s.x;
    n.value = -(O - R), i.value = -(N - y - z), S.style.transformOrigin = p();
  }
  function g(S) {
    bo(() => {
      m(S);
    });
  }
  function v(S) {
    S.style.transformOrigin = p(), e.onBeforeLeave();
  }
  function x(S) {
    const z = S;
    u.value && c(z), e.onAfterEnter && e.onAfterEnter(z);
  }
  function $() {
    r.value = false, n.value = null, i.value = null, l(), e.onAfterLeave();
  }
  function C() {
    const { onClose: S } = e;
    S && S();
  }
  function E() {
    e.onNegativeClick();
  }
  function k() {
    e.onPositiveClick();
  }
  const b = W(null);
  return Le(b, (S) => {
    S && bo(() => {
      const z = S.el;
      z && t.value !== z && (t.value = z);
    });
  }), Be(un, t), Be(cn, null), Be(xr, null), { mergedTheme: a.mergedThemeRef, appear: a.appearRef, isMounted: a.isMountedRef, mergedClsPrefix: a.mergedClsPrefixRef, bodyRef: t, scrollbarRef: o, draggableClass: d, displayed: r, childNodeRef: b, cardHeaderClass: h, dialogTitleClass: f, handlePositiveClick: k, handleNegativeClick: E, handleCloseClick: C, handleAfterEnter: x, handleAfterLeave: $, handleBeforeLeave: v, handleEnter: g };
}, render() {
  const { $slots: e, $attrs: t, handleEnter: o, handleAfterEnter: r, handleAfterLeave: n, handleBeforeLeave: i, preset: a, mergedClsPrefix: s } = this;
  let l = null;
  if (!a) {
    if (l = Bg("default", e.default, { draggableClass: this.draggableClass }), !l) {
      Co("modal", "default slot is empty");
      return;
    }
    l = ml(l), l.props = jt({ class: `${s}-modal` }, t, l.props || {});
  }
  return this.displayDirective === "show" || this.displayed || this.show ? xo(w("div", { role: "none", class: [`${s}-modal-body-wrapper`, this.maskHidden && `${s}-modal-body-wrapper--mask-hidden`] }, w(Lc, { ref: "scrollbarRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${s}-modal-scroll-content` }, { default: () => {
    var c;
    return [(c = this.renderMask) === null || c === void 0 ? void 0 : c.call(this), w(_c, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => {
      var u;
      return w(Jt, { name: "fade-in-scale-up-transition", appear: (u = this.appear) !== null && u !== void 0 ? u : this.isMounted, onEnter: o, onAfterEnter: r, onAfterLeave: n, onBeforeLeave: i }, { default: () => {
        const d = [[Kn, this.show]], { onClickoutside: f } = this;
        return f && d.push([li, this.onClickoutside, void 0, { capture: true }]), xo(this.preset === "confirm" || this.preset === "dialog" ? w(B0, Object.assign({}, this.$attrs, { class: [`${s}-modal`, this.$attrs.class], ref: "bodyRef", theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, pr(this.$props, O0), { titleClass: this.dialogTitleClass, "aria-modal": "true" }), e) : this.preset === "card" ? w(Ab, Object.assign({}, this.$attrs, { ref: "bodyRef", class: [`${s}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, pr(this.$props, kb), { headerClass: this.cardHeaderClass, "aria-modal": "true", role: "dialog" }), e) : this.childNodeRef = l, d);
      } });
    } })];
  } })), [[Kn, this.displayDirective === "if" || this.displayed || this.show]]) : null;
} }), W0 = B([Q("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), Q("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [Dc({ enterDuration: ".25s", leaveDuration: ".25s", enterCubicBezier: "var(--n-bezier-ease-out)", leaveCubicBezier: "var(--n-bezier-ease-out)" })]), Q("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [Q("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `), K("mask-hidden", "pointer-events: none;", [Q("modal-scroll-content", [B("> *", `
 pointer-events: all;
 `)])])]), Q("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [Wc({ duration: ".25s", enterScale: ".5" }), B(`.${vi}`, `
 cursor: move;
 user-select: none;
 `)])]), j0 = Object.assign(Object.assign(Object.assign(Object.assign({}, Ee.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: "if" }, transformOrigin: { type: String, default: "mouse" }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), Xi), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } }), eE = oe({ name: "Modal", inheritAttrs: false, props: j0, slots: Object, setup(e) {
  const t = W(null), { mergedClsPrefixRef: o, namespaceRef: r, inlineThemeDisabled: n } = It(e), i = Ee("Modal", "-modal", W0, su, e, o), a = Mm(64), s = Am(), l = ln(), c = e.internalDialog ? ce(k0, null) : null, u = e.internalModal ? ce(Hm, null) : null, d = Wm();
  function f(k) {
    const { onUpdateShow: b, "onUpdate:show": S, onHide: z } = e;
    b && it(b, k), S && it(S, k), z && !k && z(k);
  }
  function h() {
    const { onClose: k } = e;
    k ? Promise.resolve(k()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function p() {
    const { onPositiveClick: k } = e;
    k ? Promise.resolve(k()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function m() {
    const { onNegativeClick: k } = e;
    k ? Promise.resolve(k()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function g() {
    const { onBeforeLeave: k, onBeforeHide: b } = e;
    k && it(k), b && b();
  }
  function v() {
    const { onAfterLeave: k, onAfterHide: b } = e;
    k && it(k), b && b();
  }
  function x(k) {
    var b;
    const { onMaskClick: S } = e;
    S && S(k), e.maskClosable && !((b = t.value) === null || b === void 0) && b.contains(fr(k)) && f(false);
  }
  function $(k) {
    var b;
    (b = e.onEsc) === null || b === void 0 || b.call(e), e.show && e.closeOnEsc && Ag(k) && (d.value || f(false));
  }
  Be(uc, { getMousePosition: () => {
    const k = c || u;
    if (k) {
      const { clickedRef: b, clickedPositionRef: S } = k;
      if (b.value && S.value) return S.value;
    }
    return a.value ? s.value : null;
  }, mergedClsPrefixRef: o, mergedThemeRef: i, isMountedRef: l, appearRef: xe(e, "internalAppear"), transformOriginRef: xe(e, "transformOrigin") });
  const C = D(() => {
    const { common: { cubicBezierEaseOut: k }, self: { boxShadow: b, color: S, textColor: z } } = i.value;
    return { "--n-bezier-ease-out": k, "--n-box-shadow": b, "--n-color": S, "--n-text-color": z };
  }), E = n ? Zt("theme-class", void 0, C, e) : void 0;
  return { mergedClsPrefix: o, namespace: r, isMounted: l, containerRef: t, presetProps: D(() => pr(e, H0)), handleEsc: $, handleAfterLeave: v, handleClickoutside: x, handleBeforeLeave: g, doUpdateShow: f, handleNegativeClick: m, handlePositiveClick: p, handleCloseClick: h, cssVars: n ? void 0 : C, themeClass: E == null ? void 0 : E.themeClass, onRender: E == null ? void 0 : E.onRender };
}, render() {
  const { mergedClsPrefix: e } = this;
  return w(vc, { to: this.to, show: this.show }, { default: () => {
    var t;
    (t = this.onRender) === null || t === void 0 || t.call(this);
    const { showMask: o } = this;
    return xo(w("div", { role: "none", ref: "containerRef", class: [`${e}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, w(N0, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: "bodyWrapper", displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !o }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: o ? void 0 : this.handleClickoutside, renderMask: o ? () => {
      var r;
      return w(Jt, { name: "fade-in-transition", key: "mask", appear: (r = this.internalAppear) !== null && r !== void 0 ? r : this.isMounted }, { default: () => this.show ? w("div", { "aria-hidden": true, ref: "containerRef", class: `${e}-modal-mask`, onClick: this.handleClickoutside }) : null });
    } : void 0 }), this.$slots)), [[Hi, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
function V0(e) {
  const { primaryColor: t, errorColor: o } = e;
  return { colorError: o, colorLoading: t, height: "2px" };
}
const Z0 = { name: "LoadingBar", common: F, self: V0 }, tE = "n-message-api", oE = "n-message-provider", U0 = { margin: "0 0 8px 0", padding: "10px 20px", maxWidth: "720px", minWidth: "420px", iconMargin: "0 10px 0 0", closeMargin: "0 0 0 10px", closeSize: "20px", closeIconSize: "16px", iconSize: "20px", fontSize: "14px" };
function G0(e) {
  const { textColor2: t, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, infoColor: i, successColor: a, errorColor: s, warningColor: l, popoverColor: c, boxShadow2: u, primaryColor: d, lineHeight: f, borderRadius: h, closeColorHover: p, closeColorPressed: m } = e;
  return Object.assign(Object.assign({}, U0), { closeBorderRadius: h, textColor: t, textColorInfo: t, textColorSuccess: t, textColorError: t, textColorWarning: t, textColorLoading: t, color: c, colorInfo: c, colorSuccess: c, colorError: c, colorWarning: c, colorLoading: c, boxShadow: u, boxShadowInfo: u, boxShadowSuccess: u, boxShadowError: u, boxShadowWarning: u, boxShadowLoading: u, iconColor: t, iconColorInfo: i, iconColorSuccess: a, iconColorWarning: l, iconColorError: s, iconColorLoading: d, closeColorHover: p, closeColorPressed: m, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, closeColorHoverInfo: p, closeColorPressedInfo: m, closeIconColorInfo: o, closeIconColorHoverInfo: r, closeIconColorPressedInfo: n, closeColorHoverSuccess: p, closeColorPressedSuccess: m, closeIconColorSuccess: o, closeIconColorHoverSuccess: r, closeIconColorPressedSuccess: n, closeColorHoverError: p, closeColorPressedError: m, closeIconColorError: o, closeIconColorHoverError: r, closeIconColorPressedError: n, closeColorHoverWarning: p, closeColorPressedWarning: m, closeIconColorWarning: o, closeIconColorHoverWarning: r, closeIconColorPressedWarning: n, closeColorHoverLoading: p, closeColorPressedLoading: m, closeIconColorLoading: o, closeIconColorHoverLoading: r, closeIconColorPressedLoading: n, loadingColor: d, lineHeight: f, borderRadius: h, border: "0" });
}
const K0 = { name: "Message", common: F, self: G0 }, q0 = { closeMargin: "16px 12px", closeSize: "20px", closeIconSize: "16px", width: "365px", padding: "16px", titleFontSize: "16px", metaFontSize: "12px", descriptionFontSize: "12px" };
function Y0(e) {
  const { textColor2: t, successColor: o, infoColor: r, warningColor: n, errorColor: i, popoverColor: a, closeIconColor: s, closeIconColorHover: l, closeIconColorPressed: c, closeColorHover: u, closeColorPressed: d, textColor1: f, textColor3: h, borderRadius: p, fontWeightStrong: m, boxShadow2: g, lineHeight: v, fontSize: x } = e;
  return Object.assign(Object.assign({}, q0), { borderRadius: p, lineHeight: v, fontSize: x, headerFontWeight: m, iconColor: t, iconColorSuccess: o, iconColorInfo: r, iconColorWarning: n, iconColorError: i, color: a, textColor: t, closeIconColor: s, closeIconColorHover: l, closeIconColorPressed: c, closeBorderRadius: p, closeColorHover: u, closeColorPressed: d, headerTextColor: f, descriptionTextColor: h, actionTextColor: t, boxShadow: g });
}
const X0 = { name: "Notification", common: F, peers: { Scrollbar: Ge }, self: Y0 };
function J0(e) {
  const { textColor1: t, dividerColor: o, fontWeightStrong: r } = e;
  return { textColor: t, color: o, fontWeight: r };
}
const Q0 = { name: "Divider", common: F, self: J0 };
function ex(e) {
  const { modalColor: t, textColor1: o, textColor2: r, boxShadow3: n, lineHeight: i, fontWeightStrong: a, dividerColor: s, closeColorHover: l, closeColorPressed: c, closeIconColor: u, closeIconColorHover: d, closeIconColorPressed: f, borderRadius: h, primaryColorHover: p } = e;
  return { bodyPadding: "16px 24px", borderRadius: h, headerPadding: "16px 24px", footerPadding: "16px 24px", color: t, textColor: r, titleTextColor: o, titleFontSize: "18px", titleFontWeight: a, boxShadow: n, lineHeight: i, headerBorderBottom: `1px solid ${s}`, footerBorderTop: `1px solid ${s}`, closeIconColor: u, closeIconColorHover: d, closeIconColorPressed: f, closeSize: "22px", closeIconSize: "18px", closeColorHover: l, closeColorPressed: c, closeBorderRadius: h, resizableTriggerColorHover: p };
}
const tx = { name: "Drawer", common: F, peers: { Scrollbar: Ge }, self: ex }, ox = { actionMargin: "0 0 0 20px", actionMarginRtl: "0 20px 0 0" };
function rx() {
  return ox;
}
const nx = { name: "DynamicInput", common: F, peers: { Input: ct, Button: et }, self: rx }, ix = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function ax() {
  return ix;
}
const lu = { name: "Space", self: ax }, sx = { name: "DynamicTags", common: F, peers: { Input: ct, Button: et, Tag: Uc, Space: lu }, self() {
  return { inputWidth: "64px" };
} }, lx = { name: "Element", common: F }, cx = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function ux() {
  return cx;
}
const dx = { name: "Flex", self: ux }, fx = { name: "ButtonGroup", common: F }, hx = { feedbackPadding: "4px 0 0 2px", feedbackHeightSmall: "24px", feedbackHeightMedium: "24px", feedbackHeightLarge: "26px", feedbackFontSizeSmall: "13px", feedbackFontSizeMedium: "14px", feedbackFontSizeLarge: "14px", labelFontSizeLeftSmall: "14px", labelFontSizeLeftMedium: "14px", labelFontSizeLeftLarge: "15px", labelFontSizeTopSmall: "13px", labelFontSizeTopMedium: "14px", labelFontSizeTopLarge: "14px", labelHeightSmall: "24px", labelHeightMedium: "26px", labelHeightLarge: "28px", labelPaddingVertical: "0 0 6px 2px", labelPaddingHorizontal: "0 12px 0 0", labelTextAlignVertical: "left", labelTextAlignHorizontal: "right", labelFontWeight: "400" };
function px(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, textColor1: n, errorColor: i, warningColor: a, lineHeight: s, textColor3: l } = e;
  return Object.assign(Object.assign({}, hx), { blankHeightSmall: t, blankHeightMedium: o, blankHeightLarge: r, lineHeight: s, labelTextColor: n, asteriskColor: i, feedbackTextColorError: i, feedbackTextColorWarning: a, feedbackTextColor: l });
}
const mx = { name: "Form", common: F, self: px };
function gx(e) {
  const { primaryColor: t, successColor: o, warningColor: r, errorColor: n, infoColor: i, fontWeightStrong: a } = e;
  return { fontWeight: a, rotate: "252deg", colorStartPrimary: U(t, { alpha: 0.6 }), colorEndPrimary: t, colorStartInfo: U(i, { alpha: 0.6 }), colorEndInfo: i, colorStartWarning: U(r, { alpha: 0.6 }), colorEndWarning: r, colorStartError: U(n, { alpha: 0.6 }), colorEndError: n, colorStartSuccess: U(o, { alpha: 0.6 }), colorEndSuccess: o };
}
const vx = { name: "GradientText", common: F, self: gx };
function bx(e) {
  const { textColorDisabled: t } = e;
  return { iconColorDisabled: t };
}
const xx = { name: "InputNumber", common: F, peers: { Button: et, Input: ct }, self: bx };
function Cx() {
  return { inputWidthSmall: "24px", inputWidthMedium: "30px", inputWidthLarge: "36px", gapSmall: "8px", gapMedium: "8px", gapLarge: "8px" };
}
const yx = { name: "InputOtp", common: F, peers: { Input: ct }, self: Cx };
function wx(e) {
  const { baseColor: t, textColor2: o, bodyColor: r, cardColor: n, dividerColor: i, actionColor: a, scrollbarColor: s, scrollbarColorHover: l, invertedColor: c } = e;
  return { textColor: o, textColorInverted: "#FFF", color: r, colorEmbedded: a, headerColor: n, headerColorInverted: c, footerColor: a, footerColorInverted: c, headerBorderColor: i, headerBorderColorInverted: c, footerBorderColor: i, footerBorderColorInverted: c, siderBorderColor: i, siderBorderColorInverted: c, siderColor: n, siderColorInverted: c, siderToggleButtonBorder: `1px solid ${i}`, siderToggleButtonColor: t, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: j(r, s), siderToggleBarColorHover: j(r, l), __invertScrollbar: "true" };
}
const Sx = { name: "Layout", common: F, peers: { Scrollbar: Ge }, self: wx }, $x = { name: "Row", common: F };
function Ex(e) {
  const { textColor2: t, cardColor: o, modalColor: r, popoverColor: n, dividerColor: i, borderRadius: a, fontSize: s, hoverColor: l } = e;
  return { textColor: t, color: o, colorHover: l, colorModal: r, colorHoverModal: j(r, l), colorPopover: n, colorHoverPopover: j(n, l), borderColor: i, borderColorModal: j(r, i), borderColorPopover: j(n, i), borderRadius: a, fontSize: s };
}
const zx = { name: "List", common: F, self: Ex };
function Px(e) {
  const { textColor2: t, modalColor: o, borderColor: r, fontSize: n, primaryColor: i } = e;
  return { loaderFontSize: n, loaderTextColor: t, loaderColor: o, loaderBorder: `1px solid ${r}`, loadingColor: i };
}
const Tx = { name: "Log", common: F, peers: { Scrollbar: Ge, Code: Kc }, self: Px };
function _x(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const Rx = { name: "Mention", common: F, peers: { InternalSelectMenu: $r, Input: ct }, self: _x };
function kx(e, t, o, r) {
  return { itemColorHoverInverted: "#0000", itemColorActiveInverted: t, itemColorActiveHoverInverted: t, itemColorActiveCollapsedInverted: t, itemTextColorInverted: e, itemTextColorHoverInverted: o, itemTextColorChildActiveInverted: o, itemTextColorChildActiveHoverInverted: o, itemTextColorActiveInverted: o, itemTextColorActiveHoverInverted: o, itemTextColorHorizontalInverted: e, itemTextColorHoverHorizontalInverted: o, itemTextColorChildActiveHorizontalInverted: o, itemTextColorChildActiveHoverHorizontalInverted: o, itemTextColorActiveHorizontalInverted: o, itemTextColorActiveHoverHorizontalInverted: o, itemIconColorInverted: e, itemIconColorHoverInverted: o, itemIconColorActiveInverted: o, itemIconColorActiveHoverInverted: o, itemIconColorChildActiveInverted: o, itemIconColorChildActiveHoverInverted: o, itemIconColorCollapsedInverted: e, itemIconColorHorizontalInverted: e, itemIconColorHoverHorizontalInverted: o, itemIconColorActiveHorizontalInverted: o, itemIconColorActiveHoverHorizontalInverted: o, itemIconColorChildActiveHorizontalInverted: o, itemIconColorChildActiveHoverHorizontalInverted: o, arrowColorInverted: e, arrowColorHoverInverted: o, arrowColorActiveInverted: o, arrowColorActiveHoverInverted: o, arrowColorChildActiveInverted: o, arrowColorChildActiveHoverInverted: o, groupTextColorInverted: r };
}
function Ix(e) {
  const { borderRadius: t, textColor3: o, primaryColor: r, textColor2: n, textColor1: i, fontSize: a, dividerColor: s, hoverColor: l, primaryColorHover: c } = e;
  return Object.assign({ borderRadius: t, color: "#0000", groupTextColor: o, itemColorHover: l, itemColorActive: U(r, { alpha: 0.1 }), itemColorActiveHover: U(r, { alpha: 0.1 }), itemColorActiveCollapsed: U(r, { alpha: 0.1 }), itemTextColor: n, itemTextColorHover: n, itemTextColorActive: r, itemTextColorActiveHover: r, itemTextColorChildActive: r, itemTextColorChildActiveHover: r, itemTextColorHorizontal: n, itemTextColorHoverHorizontal: c, itemTextColorActiveHorizontal: r, itemTextColorActiveHoverHorizontal: r, itemTextColorChildActiveHorizontal: r, itemTextColorChildActiveHoverHorizontal: r, itemIconColor: i, itemIconColorHover: i, itemIconColorActive: r, itemIconColorActiveHover: r, itemIconColorChildActive: r, itemIconColorChildActiveHover: r, itemIconColorCollapsed: i, itemIconColorHorizontal: i, itemIconColorHoverHorizontal: c, itemIconColorActiveHorizontal: r, itemIconColorActiveHoverHorizontal: r, itemIconColorChildActiveHorizontal: r, itemIconColorChildActiveHoverHorizontal: r, itemHeight: "42px", arrowColor: n, arrowColorHover: n, arrowColorActive: r, arrowColorActiveHover: r, arrowColorChildActive: r, arrowColorChildActiveHover: r, colorInverted: "#0000", borderColorHorizontal: "#0000", fontSize: a, dividerColor: s }, kx("#BBB", r, "#FFF", "#AAA"));
}
const Ax = { name: "Menu", common: F, peers: { Tooltip: Er, Dropdown: fn }, self: Ix }, Ox = { titleFontSize: "18px", backSize: "22px" };
function Mx(e) {
  const { textColor1: t, textColor2: o, textColor3: r, fontSize: n, fontWeightStrong: i, primaryColorHover: a, primaryColorPressed: s } = e;
  return Object.assign(Object.assign({}, Ox), { titleFontWeight: i, fontSize: n, titleTextColor: t, backColor: o, backColorHover: a, backColorPressed: s, subtitleTextColor: r });
}
const Dx = { name: "PageHeader", common: F, self: Mx }, Bx = { iconSize: "22px" };
function Lx(e) {
  const { fontSize: t, warningColor: o } = e;
  return Object.assign(Object.assign({}, Bx), { fontSize: t, iconColor: o });
}
const Fx = { name: "Popconfirm", common: F, peers: { Button: et, Popover: no }, self: Lx };
function Hx(e) {
  const { infoColor: t, successColor: o, warningColor: r, errorColor: n, textColor2: i, progressRailColor: a, fontSize: s, fontWeight: l } = e;
  return { fontSize: s, fontSizeCircle: "28px", fontWeightCircle: l, railColor: a, railHeight: "8px", iconSizeCircle: "36px", iconSizeLine: "18px", iconColor: t, iconColorInfo: t, iconColorSuccess: o, iconColorWarning: r, iconColorError: n, textColorCircle: i, textColorLineInner: "rgb(255, 255, 255)", textColorLineOuter: i, fillColor: t, fillColorInfo: t, fillColorSuccess: o, fillColorWarning: r, fillColorError: n, lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)" };
}
const cu = { name: "Progress", common: F, self: Hx };
function Nx(e) {
  const { railColor: t } = e;
  return { itemColor: t, itemColorActive: "#FFCC33", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
}
const Wx = { name: "Rate", common: F, self: Nx }, jx = { titleFontSizeSmall: "26px", titleFontSizeMedium: "32px", titleFontSizeLarge: "40px", titleFontSizeHuge: "48px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", iconSizeSmall: "64px", iconSizeMedium: "80px", iconSizeLarge: "100px", iconSizeHuge: "125px", iconColor418: void 0, iconColor404: void 0, iconColor403: void 0, iconColor500: void 0 };
function Vx(e) {
  const { textColor2: t, textColor1: o, errorColor: r, successColor: n, infoColor: i, warningColor: a, lineHeight: s, fontWeightStrong: l } = e;
  return Object.assign(Object.assign({}, jx), { lineHeight: s, titleFontWeight: l, titleTextColor: o, textColor: t, iconColorError: r, iconColorSuccess: n, iconColorInfo: i, iconColorWarning: a });
}
const Zx = { name: "Result", common: F, self: Vx }, Ux = { railHeight: "4px", railWidthVertical: "4px", handleSize: "18px", dotHeight: "8px", dotWidth: "8px", dotBorderRadius: "4px" };
function Gx(e) {
  const t = "rgba(0, 0, 0, .85)", o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: r, primaryColor: n, baseColor: i, cardColor: a, modalColor: s, popoverColor: l, borderRadius: c, fontSize: u, opacityDisabled: d } = e;
  return Object.assign(Object.assign({}, Ux), { fontSize: u, markFontSize: u, railColor: r, railColorHover: r, fillColor: n, fillColorHover: n, opacityDisabled: d, handleColor: "#FFF", dotColor: a, dotColorModal: s, dotColorPopover: l, handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", indicatorColor: t, indicatorBoxShadow: o, indicatorTextColor: i, indicatorBorderRadius: c, dotBorder: `2px solid ${r}`, dotBorderActive: `2px solid ${n}`, dotBoxShadow: "" });
}
const Kx = { name: "Slider", common: F, self: Gx };
function qx(e) {
  const { opacityDisabled: t, heightTiny: o, heightSmall: r, heightMedium: n, heightLarge: i, heightHuge: a, primaryColor: s, fontSize: l } = e;
  return { fontSize: l, textColor: s, sizeTiny: o, sizeSmall: r, sizeMedium: n, sizeLarge: i, sizeHuge: a, color: s, opacitySpinning: t };
}
const Yx = { name: "Spin", common: F, self: qx };
function Xx(e) {
  const { textColor2: t, textColor3: o, fontSize: r, fontWeight: n } = e;
  return { labelFontSize: r, labelFontWeight: n, valueFontWeight: n, valueFontSize: "24px", labelTextColor: o, valuePrefixTextColor: t, valueSuffixTextColor: t, valueTextColor: t };
}
const Jx = { name: "Statistic", common: F, self: Xx }, Qx = { stepHeaderFontSizeSmall: "14px", stepHeaderFontSizeMedium: "16px", indicatorIndexFontSizeSmall: "14px", indicatorIndexFontSizeMedium: "16px", indicatorSizeSmall: "22px", indicatorSizeMedium: "28px", indicatorIconSizeSmall: "14px", indicatorIconSizeMedium: "18px" };
function eC(e) {
  const { fontWeightStrong: t, baseColor: o, textColorDisabled: r, primaryColor: n, errorColor: i, textColor1: a, textColor2: s } = e;
  return Object.assign(Object.assign({}, Qx), { stepHeaderFontWeight: t, indicatorTextColorProcess: o, indicatorTextColorWait: r, indicatorTextColorFinish: n, indicatorTextColorError: i, indicatorBorderColorProcess: n, indicatorBorderColorWait: r, indicatorBorderColorFinish: n, indicatorBorderColorError: i, indicatorColorProcess: n, indicatorColorWait: "#0000", indicatorColorFinish: "#0000", indicatorColorError: "#0000", splitorColorProcess: r, splitorColorWait: r, splitorColorFinish: n, splitorColorError: r, headerTextColorProcess: a, headerTextColorWait: r, headerTextColorFinish: r, headerTextColorError: i, descriptionTextColorProcess: s, descriptionTextColorWait: r, descriptionTextColorFinish: r, descriptionTextColorError: i });
}
const tC = { name: "Steps", common: F, self: eC }, oC = { buttonHeightSmall: "14px", buttonHeightMedium: "18px", buttonHeightLarge: "22px", buttonWidthSmall: "14px", buttonWidthMedium: "18px", buttonWidthLarge: "22px", buttonWidthPressedSmall: "20px", buttonWidthPressedMedium: "24px", buttonWidthPressedLarge: "28px", railHeightSmall: "18px", railHeightMedium: "22px", railHeightLarge: "26px", railWidthSmall: "32px", railWidthMedium: "40px", railWidthLarge: "48px" };
function rC(e) {
  const { primaryColor: t, opacityDisabled: o, borderRadius: r, textColor3: n } = e;
  return Object.assign(Object.assign({}, oC), { iconColor: n, textColor: "white", loadingColor: t, opacityDisabled: o, railColor: "rgba(0, 0, 0, .14)", railColorActive: t, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 0 2px ${U(t, { alpha: 0.2 })}` });
}
const nC = { name: "Switch", common: F, self: rC }, iC = { thPaddingSmall: "6px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "6px", tdPaddingMedium: "12px", tdPaddingLarge: "12px" };
function aC(e) {
  const { dividerColor: t, cardColor: o, modalColor: r, popoverColor: n, tableHeaderColor: i, tableColorStriped: a, textColor1: s, textColor2: l, borderRadius: c, fontWeightStrong: u, lineHeight: d, fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p } = e;
  return Object.assign(Object.assign({}, iC), { fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p, lineHeight: d, borderRadius: c, borderColor: j(o, t), borderColorModal: j(r, t), borderColorPopover: j(n, t), tdColor: o, tdColorModal: r, tdColorPopover: n, tdColorStriped: j(o, a), tdColorStripedModal: j(r, a), tdColorStripedPopover: j(n, a), thColor: j(o, i), thColorModal: j(r, i), thColorPopover: j(n, i), thTextColor: s, tdTextColor: l, thFontWeight: u });
}
const sC = { name: "Table", common: F, self: aC }, lC = { tabFontSizeSmall: "14px", tabFontSizeMedium: "14px", tabFontSizeLarge: "16px", tabGapSmallLine: "36px", tabGapMediumLine: "36px", tabGapLargeLine: "36px", tabGapSmallLineVertical: "8px", tabGapMediumLineVertical: "8px", tabGapLargeLineVertical: "8px", tabPaddingSmallLine: "6px 0", tabPaddingMediumLine: "10px 0", tabPaddingLargeLine: "14px 0", tabPaddingVerticalSmallLine: "6px 12px", tabPaddingVerticalMediumLine: "8px 16px", tabPaddingVerticalLargeLine: "10px 20px", tabGapSmallBar: "36px", tabGapMediumBar: "36px", tabGapLargeBar: "36px", tabGapSmallBarVertical: "8px", tabGapMediumBarVertical: "8px", tabGapLargeBarVertical: "8px", tabPaddingSmallBar: "4px 0", tabPaddingMediumBar: "6px 0", tabPaddingLargeBar: "10px 0", tabPaddingVerticalSmallBar: "6px 12px", tabPaddingVerticalMediumBar: "8px 16px", tabPaddingVerticalLargeBar: "10px 20px", tabGapSmallCard: "4px", tabGapMediumCard: "4px", tabGapLargeCard: "4px", tabGapSmallCardVertical: "4px", tabGapMediumCardVertical: "4px", tabGapLargeCardVertical: "4px", tabPaddingSmallCard: "8px 16px", tabPaddingMediumCard: "10px 20px", tabPaddingLargeCard: "12px 24px", tabPaddingSmallSegment: "4px 0", tabPaddingMediumSegment: "6px 0", tabPaddingLargeSegment: "8px 0", tabPaddingVerticalLargeSegment: "0 8px", tabPaddingVerticalSmallCard: "8px 12px", tabPaddingVerticalMediumCard: "10px 16px", tabPaddingVerticalLargeCard: "12px 20px", tabPaddingVerticalSmallSegment: "0 4px", tabPaddingVerticalMediumSegment: "0 6px", tabGapSmallSegment: "0", tabGapMediumSegment: "0", tabGapLargeSegment: "0", tabGapSmallSegmentVertical: "0", tabGapMediumSegmentVertical: "0", tabGapLargeSegmentVertical: "0", panePaddingSmall: "8px 0 0 0", panePaddingMedium: "12px 0 0 0", panePaddingLarge: "16px 0 0 0", closeSize: "18px", closeIconSize: "14px" };
function cC(e) {
  const { textColor2: t, primaryColor: o, textColorDisabled: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: s, closeColorPressed: l, tabColor: c, baseColor: u, dividerColor: d, fontWeight: f, textColor1: h, borderRadius: p, fontSize: m, fontWeightStrong: g } = e;
  return Object.assign(Object.assign({}, lC), { colorSegment: c, tabFontSizeCard: m, tabTextColorLine: h, tabTextColorActiveLine: o, tabTextColorHoverLine: o, tabTextColorDisabledLine: r, tabTextColorSegment: h, tabTextColorActiveSegment: t, tabTextColorHoverSegment: t, tabTextColorDisabledSegment: r, tabTextColorBar: h, tabTextColorActiveBar: o, tabTextColorHoverBar: o, tabTextColorDisabledBar: r, tabTextColorCard: h, tabTextColorHoverCard: h, tabTextColorActiveCard: o, tabTextColorDisabledCard: r, barColor: o, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: s, closeColorPressed: l, closeBorderRadius: p, tabColor: c, tabColorSegment: u, tabBorderColor: d, tabFontWeightActive: f, tabFontWeight: f, tabBorderRadius: p, paneTextColor: t, fontWeightStrong: g });
}
const uC = { name: "Tabs", common: F, self: cC };
function dC(e) {
  const { textColor1: t, textColor2: o, fontWeightStrong: r, fontSize: n } = e;
  return { fontSize: n, titleTextColor: t, textColor: o, titleFontWeight: r };
}
const fC = { name: "Thing", common: F, self: dC }, hC = { titleMarginMedium: "0 0 6px 0", titleMarginLarge: "-2px 0 6px 0", titleFontSizeMedium: "14px", titleFontSizeLarge: "16px", iconSizeMedium: "14px", iconSizeLarge: "14px" };
function pC(e) {
  const { textColor3: t, infoColor: o, errorColor: r, successColor: n, warningColor: i, textColor1: a, textColor2: s, railColor: l, fontWeightStrong: c, fontSize: u } = e;
  return Object.assign(Object.assign({}, hC), { contentFontSize: u, titleFontWeight: c, circleBorder: `2px solid ${t}`, circleBorderInfo: `2px solid ${o}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${n}`, circleBorderWarning: `2px solid ${i}`, iconColor: t, iconColorInfo: o, iconColorError: r, iconColorSuccess: n, iconColorWarning: i, titleTextColor: a, contentTextColor: s, metaTextColor: t, lineColor: l });
}
const mC = { name: "Timeline", common: F, self: pC }, gC = { extraFontSizeSmall: "12px", extraFontSizeMedium: "12px", extraFontSizeLarge: "14px", titleFontSizeSmall: "14px", titleFontSizeMedium: "16px", titleFontSizeLarge: "16px", closeSize: "20px", closeIconSize: "16px", headerHeightSmall: "44px", headerHeightMedium: "44px", headerHeightLarge: "50px" };
function vC(e) {
  const { fontWeight: t, fontSizeLarge: o, fontSizeMedium: r, fontSizeSmall: n, heightLarge: i, heightMedium: a, borderRadius: s, cardColor: l, tableHeaderColor: c, textColor1: u, textColorDisabled: d, textColor2: f, textColor3: h, borderColor: p, hoverColor: m, closeColorHover: g, closeColorPressed: v, closeIconColor: x, closeIconColorHover: $, closeIconColorPressed: C } = e;
  return Object.assign(Object.assign({}, gC), { itemHeightSmall: a, itemHeightMedium: a, itemHeightLarge: i, fontSizeSmall: n, fontSizeMedium: r, fontSizeLarge: o, borderRadius: s, dividerColor: p, borderColor: p, listColor: l, headerColor: j(l, c), titleTextColor: u, titleTextColorDisabled: d, extraTextColor: h, extraTextColorDisabled: d, itemTextColor: f, itemTextColorDisabled: d, itemColorPending: m, titleFontWeight: t, closeColorHover: g, closeColorPressed: v, closeIconColor: x, closeIconColorHover: $, closeIconColorPressed: C });
}
const bC = { name: "Transfer", common: F, peers: { Checkbox: Ko, Scrollbar: Ge, Input: ct, Empty: ro, Button: et }, self: vC };
function xC(e) {
  const { borderRadiusSmall: t, dividerColor: o, hoverColor: r, pressedColor: n, primaryColor: i, textColor3: a, textColor2: s, textColorDisabled: l, fontSize: c } = e;
  return { fontSize: c, lineHeight: "1.5", nodeHeight: "30px", nodeWrapperPadding: "3px 0", nodeBorderRadius: t, nodeColorHover: r, nodeColorPressed: n, nodeColorActive: U(i, { alpha: 0.1 }), arrowColor: a, nodeTextColor: s, nodeTextColorDisabled: l, loadingColor: i, dropMarkColor: i, lineColor: o };
}
const uu = { name: "Tree", common: F, peers: { Checkbox: Ko, Scrollbar: Ge, Empty: ro }, self: xC };
function CC(e) {
  const { popoverColor: t, boxShadow2: o, borderRadius: r, heightMedium: n, dividerColor: i, textColor2: a } = e;
  return { menuPadding: "4px", menuColor: t, menuBoxShadow: o, menuBorderRadius: r, menuHeight: `calc(${n} * 7.6)`, actionDividerColor: i, actionTextColor: a, actionPadding: "8px 12px", headerDividerColor: i, headerTextColor: a, headerPadding: "8px 12px" };
}
const yC = { name: "TreeSelect", common: F, peers: { Tree: uu, Empty: ro, InternalSelection: Vi }, self: CC }, wC = { headerFontSize1: "30px", headerFontSize2: "22px", headerFontSize3: "18px", headerFontSize4: "16px", headerFontSize5: "16px", headerFontSize6: "16px", headerMargin1: "28px 0 20px 0", headerMargin2: "28px 0 20px 0", headerMargin3: "28px 0 20px 0", headerMargin4: "28px 0 18px 0", headerMargin5: "28px 0 18px 0", headerMargin6: "28px 0 18px 0", headerPrefixWidth1: "16px", headerPrefixWidth2: "16px", headerPrefixWidth3: "12px", headerPrefixWidth4: "12px", headerPrefixWidth5: "12px", headerPrefixWidth6: "12px", headerBarWidth1: "4px", headerBarWidth2: "4px", headerBarWidth3: "3px", headerBarWidth4: "3px", headerBarWidth5: "3px", headerBarWidth6: "3px", pMargin: "16px 0 16px 0", liMargin: ".25em 0 0 0", olPadding: "0 0 0 2em", ulPadding: "0 0 0 2em" };
function SC(e) {
  const { primaryColor: t, textColor2: o, borderColor: r, lineHeight: n, fontSize: i, borderRadiusSmall: a, dividerColor: s, fontWeightStrong: l, textColor1: c, textColor3: u, infoColor: d, warningColor: f, errorColor: h, successColor: p, codeColor: m } = e;
  return Object.assign(Object.assign({}, wC), { aTextColor: t, blockquoteTextColor: o, blockquotePrefixColor: r, blockquoteLineHeight: n, blockquoteFontSize: i, codeBorderRadius: a, liTextColor: o, liLineHeight: n, liFontSize: i, hrColor: s, headerFontWeight: l, headerTextColor: c, pTextColor: o, pTextColor1Depth: c, pTextColor2Depth: o, pTextColor3Depth: u, pLineHeight: n, pFontSize: i, headerBarColor: t, headerBarColorPrimary: t, headerBarColorInfo: d, headerBarColorError: h, headerBarColorWarning: f, headerBarColorSuccess: p, textColor: o, textColor1Depth: c, textColor2Depth: o, textColor3Depth: u, textColorPrimary: t, textColorInfo: d, textColorSuccess: p, textColorWarning: f, textColorError: h, codeTextColor: o, codeColor: m, codeBorder: "1px solid #0000" });
}
const du = { name: "Typography", common: F, self: SC };
function $C(e) {
  const { iconColor: t, primaryColor: o, errorColor: r, textColor2: n, successColor: i, opacityDisabled: a, actionColor: s, borderColor: l, hoverColor: c, lineHeight: u, borderRadius: d, fontSize: f } = e;
  return { fontSize: f, lineHeight: u, borderRadius: d, draggerColor: s, draggerBorder: `1px dashed ${l}`, draggerBorderHover: `1px dashed ${o}`, itemColorHover: c, itemColorHoverError: U(r, { alpha: 0.06 }), itemTextColor: n, itemTextColorError: r, itemTextColorSuccess: i, itemIconColor: t, itemDisabledOpacity: a, itemBorderImageCardError: `1px solid ${r}`, itemBorderImageCard: `1px solid ${l}` };
}
const EC = { name: "Upload", common: F, peers: { Button: et, Progress: cu }, self: $C }, zC = { name: "Watermark", common: F, self(e) {
  const { fontFamily: t } = e;
  return { fontFamily: t };
} };
function PC(e) {
  const { popoverColor: t, dividerColor: o, borderRadius: r } = e;
  return { color: t, buttonBorderColor: o, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
}
const TC = { name: "FloatButtonGroup", common: F, self: PC };
function _C(e) {
  const { popoverColor: t, textColor2: o, buttonColor2Hover: r, buttonColor2Pressed: n, primaryColor: i, primaryColorHover: a, primaryColorPressed: s, borderRadius: l } = e;
  return { color: t, colorHover: r, colorPressed: n, colorPrimary: i, colorPrimaryHover: a, colorPrimaryPressed: s, textColor: o, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)", textColorPrimary: "#fff", borderRadiusSquare: l };
}
const RC = { name: "FloatButton", common: F, self: _C };
function kC(e) {
  const { borderRadius: t, fontSizeMini: o, fontSizeTiny: r, fontSizeSmall: n, fontWeight: i, textColor2: a, cardColor: s, buttonColor2Hover: l } = e;
  return { activeColors: ["#9be9a8", "#40c463", "#30a14e", "#216e39"], borderRadius: t, borderColor: s, textColor: a, mininumColor: l, fontWeight: i, loadingColorStart: "rgba(0, 0, 0, 0.06)", loadingColorEnd: "rgba(0, 0, 0, 0.12)", rectSizeSmall: "10px", rectSizeMedium: "11px", rectSizeLarge: "12px", borderRadiusSmall: "2px", borderRadiusMedium: "2px", borderRadiusLarge: "2px", xGapSmall: "2px", xGapMedium: "3px", xGapLarge: "3px", yGapSmall: "2px", yGapMedium: "3px", yGapLarge: "3px", fontSizeSmall: r, fontSizeMedium: o, fontSizeLarge: n };
}
const IC = { name: "Heatmap", common: F, self: kC };
function AC(e) {
  const { primaryColor: t, baseColor: o } = e;
  return { color: t, iconColor: o };
}
const OC = { name: "IconWrapper", common: F, self: AC };
function MC() {
  return { toolbarIconColor: "rgba(255, 255, 255, .9)", toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
}
const DC = { name: "Image", common: F, peers: { Tooltip: Er }, self: MC }, rE = "n-layout-sider", nE = { type: String, default: "static" }, BC = { extraFontSize: "12px", width: "440px" };
function LC(e) {
  const { fontWeight: t, iconColorDisabled: o, iconColor: r, fontSizeLarge: n, fontSizeMedium: i, fontSizeSmall: a, heightLarge: s, heightMedium: l, heightSmall: c, borderRadius: u, cardColor: d, tableHeaderColor: f, textColor1: h, textColorDisabled: p, textColor2: m, borderColor: g, hoverColor: v } = e;
  return Object.assign(Object.assign({}, BC), { itemHeightSmall: c, itemHeightMedium: l, itemHeightLarge: s, fontSizeSmall: a, fontSizeMedium: i, fontSizeLarge: n, borderRadius: u, borderColor: g, listColor: d, headerColor: j(d, f), titleTextColor: h, titleTextColorDisabled: p, extraTextColor: m, filterDividerColor: g, itemTextColor: m, itemTextColorDisabled: p, itemColorPending: v, titleFontWeight: t, iconColor: r, iconColorDisabled: o });
}
const FC = { name: "Transfer", common: F, peers: { Checkbox: Ko, Scrollbar: Ge, Input: ct, Empty: ro, Button: et }, self: LC };
function HC() {
  return {};
}
const NC = { name: "Marquee", common: F, self: HC };
function WC(e) {
  return { borderRadius: e.borderRadius };
}
const jC = { name: "QrCode", common: F, self: WC };
function VC(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, borderRadius: n } = e;
  return { color: "#eee", colorEnd: "#ddd", borderRadius: n, heightSmall: t, heightMedium: o, heightLarge: r };
}
const ZC = { name: "Skeleton", common: F, self: VC };
function UC(e) {
  const { primaryColorHover: t, borderColor: o } = e;
  return { resizableTriggerColorHover: t, resizableTriggerColor: o };
}
const GC = { name: "Split", common: F, self: UC }, KC = Q("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [K("strong", `
 font-weight: var(--n-font-weight-strong);
 `), K("italic", { fontStyle: "italic" }), K("underline", { textDecoration: "underline" }), K("code", `
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
 `)]), qC = Object.assign(Object.assign({}, Ee.props), { code: Boolean, type: { type: String, default: "default" }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), iE = oe({ name: "Text", props: qC, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = It(e), r = Ee("Typography", "-text", KC, du, e, t), n = D(() => {
    const { depth: a, type: s } = e, l = s === "default" ? a === void 0 ? "textColor" : `textColor${a}Depth` : ee("textColor", s), { common: { fontWeightStrong: c, fontFamilyMono: u, cubicBezierEaseInOut: d }, self: { codeTextColor: f, codeBorderRadius: h, codeColor: p, codeBorder: m, [l]: g } } = r.value;
    return { "--n-bezier": d, "--n-text-color": g, "--n-font-weight-strong": c, "--n-font-famliy-mono": u, "--n-code-border-radius": h, "--n-code-text-color": f, "--n-code-color": p, "--n-code-border": m };
  }), i = o ? Zt("text", D(() => `${e.type[0]}${e.depth || ""}`), n, e) : void 0;
  return { mergedClsPrefix: t, compitableTag: cc(e, ["as", "tag"]), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e, t, o;
  const { mergedClsPrefix: r } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const n = [`${r}-text`, this.themeClass, { [`${r}-text--code`]: this.code, [`${r}-text--delete`]: this.delete, [`${r}-text--strong`]: this.strong, [`${r}-text--italic`]: this.italic, [`${r}-text--underline`]: this.underline }], i = (o = (t = this.$slots).default) === null || o === void 0 ? void 0 : o.call(t);
  return this.code ? w("code", { class: n, style: this.cssVars }, this.delete ? w("del", null, i) : i) : this.delete ? w("del", { class: n, style: this.cssVars }, i) : w(this.compitableTag || "span", { class: n, style: this.cssVars }, i);
} }), YC = () => ({}), XC = { name: "Equation", common: F, self: YC }, aE = { name: "light", common: F, Alert: Xv, Anchor: ob, AutoComplete: lb, Avatar: Gc, AvatarGroup: db, BackTop: pb, Badge: gb, Breadcrumb: xb, Button: et, ButtonGroup: fx, Calendar: Pb, Card: Zi, Carousel: Mb, Cascader: Fb, Checkbox: Ko, Code: Kc, Collapse: Wb, CollapseTransition: Vb, ColorPicker: Ub, DataTable: a0, DatePicker: P0, Descriptions: R0, Dialog: qi, Divider: Q0, Drawer: tx, Dropdown: fn, DynamicInput: nx, DynamicTags: sx, Element: lx, Empty: ro, Equation: XC, Ellipsis: Gi, Flex: dx, Form: mx, GradientText: vx, Heatmap: IC, Icon: ou, IconWrapper: OC, Image: DC, Input: ct, InputNumber: xx, InputOtp: yx, Layout: Sx, LegacyTransfer: FC, List: zx, LoadingBar: Z0, Log: Tx, Menu: Ax, Mention: Rx, Message: K0, Modal: su, Notification: X0, PageHeader: Dx, Pagination: Xc, Popconfirm: Fx, Popover: no, Popselect: qc, Progress: cu, QrCode: jC, Radio: Jc, Rate: Wx, Row: $x, Result: Zx, Scrollbar: Ge, Skeleton: ZC, Select: Yc, Slider: Kx, Space: lu, Spin: Yx, Statistic: Jx, Steps: tC, Switch: nC, Table: sC, Tabs: uC, Tag: Uc, Thing: fC, TimePicker: au, Timeline: mC, Tooltip: Er, Transfer: bC, Tree: uu, TreeSelect: yC, Typography: du, Upload: EC, Watermark: zC, Split: GC, FloatButton: RC, FloatButtonGroup: TC, Marquee: NC };
class JC {
  constructor() {
    __publicField(this, "storageProvider", null);
    __publicField(this, "initialized", false);
  }
  async init() {
    if (this.initialized) return;
    const t = Td();
    if (t.isErr()) throw t.error;
    const o = t.value.getStorage();
    if (o.isErr()) throw o.error;
    this.storageProvider = o.value;
    const r = await this.storageProvider.init();
    if (r.isErr()) throw r.error;
    this.initialized = true;
  }
  async set(t, o) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const r = await this.storageProvider.set(t, o);
    if (r.isErr()) throw r.error;
  }
  async get(t) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const o = await this.storageProvider.get(t);
    if (o.isErr()) throw o.error;
    return o.value;
  }
  async save() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const t = await this.storageProvider.save();
    if (t.isErr()) throw t.error;
  }
  async exportToJson() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const t = await this.storageProvider.exportToJson();
    if (t.isErr()) throw t.error;
    return t.value;
  }
  async clear() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const t = await this.storageProvider.clear();
    if (t.isErr()) throw t.error;
  }
  async remove(t) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const o = await this.storageProvider.remove(t);
    if (o.isErr()) throw o.error;
  }
}
const at = new JC(), se = at.set.bind(at), Re = at.get.bind(at), ft = at.save.bind(at);
at.init.bind(at);
at.exportToJson.bind(at);
at.clear.bind(at);
at.remove.bind(at);
const QC = "trackmaker_settings", sE = gl("settings", () => {
  const e = W({ ...wn });
  async function t() {
    const a = await Re("settings");
    a && (e.value = { ...e.value, ...a }), r();
  }
  async function o() {
    await se("settings", JSON.parse(JSON.stringify(e.value))), await ft(), r();
  }
  function r() {
    try {
      localStorage.setItem(QC, JSON.stringify(e.value));
    } catch {
    }
  }
  function n() {
    const a = { theme: e.value.theme, interfaceLanguage: e.value.interfaceLanguage, mapLanguage: e.value.mapLanguage, watchCompatibilityMode: e.value.watchCompatibilityMode, geolocationCorrection: e.value.geolocationCorrection };
    e.value = { ...wn, ...a };
  }
  function i(a) {
    const s = wn, l = e.value;
    l[a] = s[a], e.value = { ...l };
  }
  return Le(e, () => {
    r(), o();
  }, { deep: true }), { settings: e, init: t, resetAdvancedSettings: n, resetSetting: i };
});
function ey(e) {
  return _d() ? (Rd(e), true) : false;
}
const Nn = /* @__PURE__ */ new WeakMap(), ty = (...e) => {
  var t;
  const o = e[0], r = (t = Zo()) == null ? void 0 : t.proxy;
  if (r == null && !vl()) throw new Error("injectLocal must be called in setup");
  return r && Nn.has(r) && o in Nn.get(r) ? Nn.get(r)[o] : ce(...e);
}, oy = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ry = Object.prototype.toString, ny = (e) => ry.call(e) === "[object Object]";
function Os(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Wn(e) {
  return Array.isArray(e) ? e : [e];
}
function iy(e) {
  return Zo();
}
function ay(e, t = true, o) {
  iy() ? wt(e, o) : t ? e() : bo(e);
}
function sy(e, t, o) {
  return Le(e, t, { ...o, immediate: true });
}
const Ji = oy ? window : void 0;
function ly(e) {
  var t;
  const o = Do(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function bi(...e) {
  const t = [], o = () => {
    t.forEach((s) => s()), t.length = 0;
  }, r = (s, l, c, u) => (s.addEventListener(l, c, u), () => s.removeEventListener(l, c, u)), n = D(() => {
    const s = Wn(Do(e[0])).filter((l) => l != null);
    return s.every((l) => typeof l != "string") ? s : void 0;
  }), i = sy(() => {
    var s, l;
    return [(l = (s = n.value) == null ? void 0 : s.map((c) => ly(c))) != null ? l : [Ji].filter((c) => c != null), Wn(Do(n.value ? e[1] : e[0])), Wn(Mo(n.value ? e[2] : e[1])), Do(n.value ? e[3] : e[2])];
  }, ([s, l, c, u]) => {
    if (o(), !(s == null ? void 0 : s.length) || !(l == null ? void 0 : l.length) || !(c == null ? void 0 : c.length)) return;
    const d = ny(u) ? { ...u } : u;
    t.push(...s.flatMap((f) => l.flatMap((h) => c.map((p) => r(f, h, p, d)))));
  }, { flush: "post" }), a = () => {
    i(), o();
  };
  return ey(o), a;
}
function cy() {
  const e = Ft(false), t = Zo();
  return t && wt(() => {
    e.value = true;
  }, t), e;
}
function uy(e) {
  const t = cy();
  return D(() => (t.value, !!e()));
}
const dy = /* @__PURE__ */ Symbol("vueuse-ssr-width");
function fy() {
  const e = vl() ? ty(dy, null) : null;
  return typeof e == "number" ? e : void 0;
}
function hy(e, t = {}) {
  const { window: o = Ji, ssrWidth: r = fy() } = t, n = uy(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), i = Ft(typeof r == "number"), a = Ft(), s = Ft(false), l = (c) => {
    s.value = c.matches;
  };
  return Uo(() => {
    if (i.value) {
      i.value = !n.value;
      const c = Do(e).split(",");
      s.value = c.some((u) => {
        const d = u.includes("not all"), f = u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || h);
        return f && p && (p = r >= Os(f[1])), h && p && (p = r <= Os(h[1])), d ? !p : p;
      });
      return;
    }
    n.value && (a.value = o.matchMedia(Do(e)), s.value = a.value.matches);
  }), bi(a, "change", l, { passive: true }), D(() => s.value);
}
function lE(e = {}) {
  const { window: t = Ji, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: n = true, includeScrollbar: i = true, type: a = "inner" } = e, s = Ft(o), l = Ft(r), c = () => {
    if (t) if (a === "outer") s.value = t.outerWidth, l.value = t.outerHeight;
    else if (a === "visual" && t.visualViewport) {
      const { width: d, height: f, scale: h } = t.visualViewport;
      s.value = Math.round(d * h), l.value = Math.round(f * h);
    } else i ? (s.value = t.innerWidth, l.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight);
  };
  c(), ay(c);
  const u = { passive: true };
  if (bi("resize", c, u), t && a === "visual" && t.visualViewport && bi(t.visualViewport, "resize", c, u), n) {
    const d = hy("(orientation: portrait)");
    Le(d, () => c());
  }
  return { width: s, height: l };
}
class cE {
  constructor() {
    __publicField(this, "parser");
    __publicField(this, "platformContext");
    this.parser = new kd(navigator.userAgent), this.platformContext = Id();
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
    return va() ? "Tauri" : this.platformContext.browser || "";
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
    return va();
  }
  get isWeb() {
    const t = this.platformContext.environment;
    return t === "web" || t === "mobile_web";
  }
}
const Ue = [];
for (let e = 0; e < 256; ++e) Ue.push((e + 256).toString(16).slice(1));
function py(e, t = 0) {
  return (Ue[e[t + 0]] + Ue[e[t + 1]] + Ue[e[t + 2]] + Ue[e[t + 3]] + "-" + Ue[e[t + 4]] + Ue[e[t + 5]] + "-" + Ue[e[t + 6]] + Ue[e[t + 7]] + "-" + Ue[e[t + 8]] + Ue[e[t + 9]] + "-" + Ue[e[t + 10]] + Ue[e[t + 11]] + Ue[e[t + 12]] + Ue[e[t + 13]] + Ue[e[t + 14]] + Ue[e[t + 15]]).toLowerCase();
}
let jn;
const my = new Uint8Array(16);
function gy() {
  if (!jn) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    jn = crypto.getRandomValues.bind(crypto);
  }
  return jn(my);
}
const vy = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ms = { randomUUID: vy };
function lr(e, t, o) {
  var _a2;
  if (Ms.randomUUID && !e) return Ms.randomUUID();
  e = e || {};
  const r = e.random ?? ((_a2 = e.rng) == null ? void 0 : _a2.call(e)) ?? gy();
  if (r.length < 16) throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, py(r);
}
function Ct() {
  return { name: "Untitled", description: "A new geographic item", creation_timestamp: Date.now(), modification_timestamp: Date.now(), created_by: "anonymous", modified_by: "anonymous", tags: [] };
}
function by() {
  return { ...Ct(), version: 1, signature: void 0 };
}
class xt {
  constructor(t = lr(), o, r, n) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routes");
    __publicField(this, "drafts");
    this.id = t, this.routes = o || { id: lr(), meta: Ct(), routes: [] }, this.drafts = r || { id: lr(), meta: Ct(), drafts: [] }, this.meta = { ...by(), ...n };
  }
  toStorage() {
    return { id: this.id, meta: this.meta, routes: this.routes, drafts: this.drafts };
  }
  static fromStorage(t) {
    return new xt(t.id, t.routes, t.drafts, t.meta);
  }
  clone() {
    return xt.fromStorage(this.toStorage());
  }
  updateName(t) {
    this.meta.name = t, this.meta.modification_timestamp = Date.now();
  }
  updateDescription(t) {
    this.meta.description = t, this.meta.modification_timestamp = Date.now();
  }
  addTag(t) {
    this.meta.tags.includes(t) || (this.meta.tags.push(t), this.meta.modification_timestamp = Date.now());
  }
  removeTag(t) {
    const o = this.meta.tags.indexOf(t);
    o > -1 && (this.meta.tags.splice(o, 1), this.meta.modification_timestamp = Date.now());
  }
}
class xy {
  constructor(t = [], o = lr(), r = Ct()) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routesInternal");
    this.id = o, this.meta = r ?? Ct(), this.routesInternal = t;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = Ct()), this.meta.name;
  }
  set name(t) {
    (this.meta === null || this.meta === void 0) && (this.meta = Ct()), this.meta.name = t;
  }
  get routes() {
    return Bt(this.routesInternal);
  }
  set routes(t) {
    this.routesInternal = Bt(t);
  }
  findRoute(t) {
    return this.routesInternal.find((o) => o.id === t);
  }
  existRoute(t) {
    return this.routesInternal.some((o) => o.id === t);
  }
  addRoute(t) {
    if (this.existRoute(t.id)) throw new Error(`[CartoSketch.Route] Route ${t.id} already exist`);
    this.routesInternal.push(Bt(t)), this.updateModificationTime();
  }
  updateRoute(t) {
    const o = this.routesInternal.findIndex((r) => r.id === t.id);
    if (o === -1) throw new Error(`[CartoSketch.Route] Route ${t.id} not found`);
    this.routesInternal[o] = Bt(t), this.updateModificationTime();
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
class Ds {
  constructor(t = lr(), o = [], r = {}, n) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "properties");
    __publicField(this, "points");
    this.id = t, this.meta = { ...Ct(), record_timespan: 0, ...n }, this.properties = r, this.points = o;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = Ct()), this.meta.name;
  }
  set name(t) {
    (this.meta === null || this.meta === void 0) && (this.meta = Ct()), this.meta.name = t;
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
    this.points = Bt(t), this.updateModificationTime();
  }
  appendPoint(t) {
    this.points.push(Bt(t)), this.updateModificationTime();
  }
  getPoints() {
    return Bt(this.points);
  }
  setProperties(t) {
    const o = Bt(t);
    Object.assign(this.properties, o), this.updateModificationTime();
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: "Feature", properties: { ...this.properties, ...this.meta, description: JSON.stringify({ name: this.meta.name, id: this.id }) }, geometry: { type: "LineString", coordinates: this.points.map((t) => [t.longitude, t.latitude]) } };
  }
  exportToStorage() {
    return Bt({ id: this.id, meta: this.meta, properties: this.properties, points: this.points });
  }
}
var pe = ((e) => (e.MIGRATION_FAILED = "MIGRATION_FAILED", e.INVALID_VERSION = "INVALID_VERSION", e.UNSUPPORTED_VERSION = "UNSUPPORTED_VERSION", e.ROLLBACK_FAILED = "ROLLBACK_FAILED", e.VALIDATION_FAILED = "VALIDATION_FAILED", e.STRATEGY_NOT_FOUND = "STRATEGY_NOT_FOUND", e.DATA_CORRUPTION = "DATA_CORRUPTION", e))(pe || {});
class be extends Ad {
  constructor(t, o = "MIGRATION_FAILED", r) {
    super(t, r);
    __publicField(this, "code");
    __publicField(this, "domain", Od.GENERIC);
    this.code = o;
  }
}
class Et extends be {
  constructor(t, o = "INVALID_VERSION", r, n, i) {
    super(t, o, i), this.currentVersion = r, this.targetVersion = n;
  }
}
class he extends be {
  constructor(t, o, r, n) {
    super(t, "VALIDATION_FAILED", n), this.field = o, this.value = r;
  }
}
class Bs extends be {
  constructor(t, o, r) {
    super(t, "DATA_CORRUPTION", r), this.corruptedData = o;
  }
}
class Cy extends be {
  constructor(t, o, r, n) {
    super(t, "ROLLBACK_FAILED", n), this.originalError = o, this.rollbackError = r;
  }
}
class Qo {
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
        if (typeof o == "number" && o >= 0) return De(o);
      }
      if (this.isRouteCollectionFormat(t)) return De(0);
      if (this.isSketchArrayFormat(t)) return De(1);
      throw new Error("Unable to determine data version");
    } catch (o) {
      const r = o instanceof Et ? o : new Et(`Failed to extract version from data: ${String(o)}`, pe.INVALID_VERSION, void 0, void 0, o instanceof Error ? o : new Error(String(o)));
      return de(r);
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
      if (t < this.MIN_SUPPORTED_VERSION) throw new Et(`Version ${t} is below minimum supported version ${this.MIN_SUPPORTED_VERSION}`, pe.UNSUPPORTED_VERSION, t);
      if (t > this.CURRENT_VERSION) throw new Et(`Version ${t} is above current version ${this.CURRENT_VERSION}`, pe.UNSUPPORTED_VERSION, t, this.CURRENT_VERSION);
      return De(void 0);
    } catch (o) {
      const r = o instanceof Et ? o : new Et(`Version validation failed: ${String(o)}`, pe.INVALID_VERSION, t, void 0, o instanceof Error ? o : new Error(String(o)));
      return de(r);
    }
  }
  static addVersionMetadata(t, o = this.CURRENT_VERSION) {
    return { ...t, [this.VERSION_KEY]: { version: o, timestamp: Date.now(), description: `Version ${o} data format` } };
  }
  static extractVersionMetadata(t) {
    try {
      if (typeof t == "object" && t !== null && this.VERSION_KEY in t) {
        const o = t[this.VERSION_KEY];
        if (this.isValidVersionInfo(o)) return De(o);
      }
      return De(null);
    } catch (o) {
      const r = o instanceof Et ? o : new Et(`Failed to extract version metadata: ${String(o)}`, pe.INVALID_VERSION, void 0, void 0, o instanceof Error ? o : new Error(String(o)));
      return de(r);
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
      if (t === o) return De([]);
      const i = [], a = t < o ? 1 : -1;
      for (let s = t; s !== o; s += a) i.push(s + a);
      return De(i);
    } catch (r) {
      const n = r instanceof Et ? r : new Et(`Failed to determine migration path: ${String(r)}`, pe.INVALID_VERSION, t, o, r instanceof Error ? r : new Error(String(r)));
      return de(n);
    }
  }
  static isMigrationNeeded(t) {
    return this.extractVersion(t).map((o) => o !== this.CURRENT_VERSION);
  }
}
__publicField(Qo, "CURRENT_VERSION", 1);
__publicField(Qo, "VERSION_KEY", "_data_version");
__publicField(Qo, "MIN_SUPPORTED_VERSION", 0);
class Lt {
  static validateSketchData(t) {
    try {
      if (!t || typeof t != "object") throw new he("Sketch data must be an object", "data", t);
      const o = t, r = ["id", "meta", "routes", "drafts"];
      for (const i of r) if (!(i in o)) throw new he(`Missing required field: ${i}`, i, o[i]);
      if (typeof o.id != "string" || !o.id) throw new he("Sketch ID must be a non-empty string", "id", o.id);
      if (!o.meta || typeof o.meta != "object") throw new he("Sketch meta must be an object", "meta", o.meta);
      const n = this.validateRouteCollectionData(o.routes);
      if (n.isErr()) throw n.error;
      if (!o.drafts || typeof o.drafts != "object") throw new he("Sketch drafts must be an object", "drafts", o.drafts);
      return De(o);
    } catch (o) {
      if (o instanceof he) return de(o);
      const r = new he(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return de(r);
    }
  }
  static validateRouteCollectionData(t) {
    try {
      if (!t || typeof t != "object") throw new he("Route collection data must be an object", "data", t);
      const o = t, r = ["id", "meta", "routes"];
      for (const n of r) if (!(n in o)) throw new he(`Missing required field: ${n}`, n, o[n]);
      if (typeof o.id != "string" || !o.id) throw new he("Route collection ID must be a non-empty string", "id", o.id);
      if (!o.meta || typeof o.meta != "object") throw new he("Route collection meta must be an object", "meta", o.meta);
      if (!Array.isArray(o.routes)) throw new he("Routes must be an array", "routes", o.routes);
      for (let n = 0; n < o.routes.length; n++) {
        const i = o.routes[n], a = this.validateRouteItem(i);
        if (a.isErr()) throw new he(`Invalid route at index ${n}: ${a.error.message}`, `routes[${n}]`, i, a.error);
      }
      return De(o);
    } catch (o) {
      if (o instanceof he) return de(o);
      const r = new he(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return de(r);
    }
  }
  static validateRouteItem(t) {
    try {
      if (!t || typeof t != "object") throw new he("Route item must be an object", "data", t);
      const o = t, r = ["id", "meta", "properties", "points"];
      for (const n of r) if (!(n in o)) throw new he(`Missing required field: ${n}`, n, o[n]);
      if (typeof o.id != "string" || !o.id) throw new he("Route item ID must be a non-empty string", "id", o.id);
      if (!Array.isArray(o.points)) throw new he("Route points must be an array", "points", o.points);
      for (let n = 0; n < o.points.length; n++) {
        const i = o.points[n];
        if (!i || typeof i != "object") throw new he(`Route point at index ${n} must be an object`, `points[${n}]`, i);
        const a = i;
        if (typeof a.latitude != "number" || typeof a.longitude != "number") throw new he(`Route point at index ${n} must have numeric latitude and longitude`, `points[${n}]`, i);
      }
      return De(o);
    } catch (o) {
      if (o instanceof he) return de(o);
      const r = new he(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return de(r);
    }
  }
  static validateSketchArray(t) {
    try {
      if (!Array.isArray(t)) throw new he("Sketch array must be an array", "data", t);
      if (t.length === 0) throw new he("Sketch array cannot be empty", "data.length", t.length);
      for (let o = 0; o < t.length; o++) {
        const r = t[o], n = this.validateSketchData(r);
        if (n.isErr()) throw new he(`Invalid sketch at index ${o}: ${n.error.message}`, `[${o}]`, r, n.error);
      }
      return De(t);
    } catch (o) {
      if (o instanceof he) return de(o);
      const r = new he(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return de(r);
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
        return de(new he(`Unknown expected format: ${String(o)}`, "expectedFormat", o));
    }
  }
  static checkDataIntegrity(t, o) {
    try {
      const r = this.validateData(t, o);
      return r.isErr() ? de(new Bs(`Data validation failed: ${r.error.message}`, t, r.error)) : De({ isValid: true, errors: [], warnings: [] });
    } catch (r) {
      return de(new Bs(`Data integrity check failed: ${String(r)}`, t, r instanceof Error ? r : new Error(String(r))));
    }
  }
}
class yy {
  constructor() {
    __publicField(this, "fromVersion", 0);
    __publicField(this, "toVersion", 1);
    __publicField(this, "name", "route-collection-to-sketch");
  }
  migrate(t) {
    try {
      const o = Lt.validateRouteCollectionData(t);
      if (o.isErr()) return de(new be(`Invalid route collection data: ${o.error.message}`, pe.VALIDATION_FAILED, o.error));
      const r = o.value, n = new xt();
      n.meta.name = r.meta.name || "Migrated Routes", n.meta.description = r.meta.description || "Migrated from route collection", n.meta.creation_timestamp = r.meta.creation_timestamp, n.meta.modification_timestamp = Date.now(), n.routes = r;
      const i = [n.toStorage()];
      return De(i);
    } catch (o) {
      return de(new be(`Route collection to sketch migration failed: ${String(o)}`, pe.MIGRATION_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  rollback(t) {
    try {
      const o = Lt.validateSketchArray(t);
      if (o.isErr()) return de(new be(`Invalid sketch array data for rollback: ${o.error.message}`, pe.VALIDATION_FAILED, o.error));
      const r = o.value;
      if (r.length === 0) return de(new be("Cannot rollback: empty sketch array", pe.MIGRATION_FAILED));
      const n = r[0];
      return De(n.routes);
    } catch (o) {
      return de(new be(`Route collection to sketch rollback failed: ${String(o)}`, pe.ROLLBACK_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  validateBefore(t) {
    return Lt.validateRouteCollectionData(t).map(() => {
    }).mapErr((o) => new he(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return Lt.validateSketchArray(t).map(() => {
    }).mapErr((o) => new he(`Post-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
}
class wy {
  constructor() {
    __publicField(this, "fromVersion", 1);
    __publicField(this, "toVersion", 2);
    __publicField(this, "name", "sketch-v1-to-v2");
  }
  migrate() {
    return de(new be("Sketch V1 to V2 migration not yet implemented", pe.STRATEGY_NOT_FOUND));
  }
  validateBefore(t) {
    return Lt.validateSketchArray(t).map(() => {
    }).mapErr((o) => new he(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return de(new he("Sketch V2 validation not yet implemented", void 0, t));
  }
}
const _Sy = class _Sy {
  static register(t) {
    const o = this.getStrategyKey(t.fromVersion, t.toVersion);
    this.strategies.set(o, t);
  }
  static getStrategy(t, o) {
    const r = this.getStrategyKey(t, o), n = this.strategies.get(r);
    return n ? De(n) : de(new be(`No migration strategy found for version ${t} to ${o}`, pe.STRATEGY_NOT_FOUND));
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
__publicField(_Sy, "strategies", /* @__PURE__ */ new Map());
_Sy.register(new yy()), _Sy.register(new wy());
let Sy = _Sy;
class $y {
  static createStrategy(t, o) {
    return Sy.getStrategy(t, o);
  }
  static createStrategiesForPath(t) {
    try {
      const o = [];
      for (let r = 0; r < t.length; r++) {
        const n = r === 0 ? t[0] - 1 : t[r - 1], i = t[r], a = this.createStrategy(n, i);
        if (a.isErr()) return de(a.error);
        o.push(a.value);
      }
      return De(o);
    } catch (o) {
      return de(new be(`Failed to create strategies for migration path: ${String(o)}`, pe.MIGRATION_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
}
class Ey {
  static isMigrationNeeded(t) {
    return Qo.isMigrationNeeded(t);
  }
  static getDataVersion(t) {
    return Qo.extractVersion(t);
  }
  static migrateToCurrent(t, o = {}) {
    return this.migrateToVersion(t, Qo.getCurrentVersion(), o);
  }
  static migrateToVersion(t, o, r = {}) {
    try {
      const n = { ...this.DEFAULT_OPTIONS, ...r }, i = Qo.extractVersion(t);
      if (i.isErr()) return de(new be(`Failed to extract current version: ${i.error.message}`, pe.INVALID_VERSION, i.error));
      const a = i.value;
      if (a === o) return De({ data: t, fromVersion: a, toVersion: o, migratedVersions: [] });
      const s = Qo.determineMigrationPath(a, o);
      if (s.isErr()) return de(new be(`Failed to determine migration path: ${s.error.message}`, pe.INVALID_VERSION, s.error));
      const l = s.value, c = $y.createStrategiesForPath(l);
      if (c.isErr()) return de(c.error);
      const u = c.value;
      if (n.validateBefore) {
        const p = this.validateDataBeforeMigration(t, a);
        if (p.isErr()) return de(new be(`Pre-migration validation failed: ${p.error.message}`, pe.VALIDATION_FAILED, p.error));
      }
      const d = n.enableRollback ? t : void 0;
      let f = t;
      const h = [];
      for (const p of u) {
        const m = this.executeMigrationWithRetry(p, f, n);
        if (m.isErr()) {
          if (n.enableRollback && d) {
            const g = this.rollbackToVersion(d);
            if (g.isErr()) return de(new Cy(`Migration failed and rollback also failed: ${g.error.message}`, m.error, g.error));
          }
          return de(m.error);
        }
        f = m.value, h.push(p.toVersion);
      }
      if (n.validateAfter) {
        const p = this.validateDataAfterMigration(f, o);
        if (p.isErr()) return de(new be(`Post-migration validation failed: ${p.error.message}`, pe.VALIDATION_FAILED, p.error));
      }
      return De({ data: f, fromVersion: a, toVersion: o, migratedVersions: h, rollbackData: n.enableRollback ? d : void 0 });
    } catch (n) {
      return de(new be(`Migration service error: ${String(n)}`, pe.MIGRATION_FAILED, n instanceof Error ? n : new Error(String(n))));
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
          const s = t.validateAfter(a.value);
          if (s.isErr()) {
            n = new be(`Post-migration validation failed: ${s.error.message}`, pe.VALIDATION_FAILED, s.error);
            continue;
          }
        }
        return De(a.value);
      } catch (a) {
        n = new be(`Migration attempt ${i + 1} failed: ${String(a)}`, pe.MIGRATION_FAILED, a instanceof Error ? a : new Error(String(a)));
      }
      i < (r.maxRetries || 0) && r.retryDelay && console.warn(`Migration failed, retrying in ${r.retryDelay}ms...`);
    }
    return de(n || new be("Migration failed after all retry attempts", pe.MIGRATION_FAILED));
  }
  static rollbackToVersion(t) {
    try {
      return De(t);
    } catch (o) {
      return de(new be(`Rollback failed: ${String(o)}`, pe.ROLLBACK_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  static validateDataBeforeMigration(t, o) {
    switch (o) {
      case 0:
        return Lt.validateRouteCollectionData(t).map(() => {
        }).mapErr((r) => new be(`Route collection validation failed: ${r.message}`, pe.VALIDATION_FAILED, r));
      case 1:
        return Lt.validateSketchArray(t).map(() => {
        }).mapErr((r) => new be(`Sketch array validation failed: ${r.message}`, pe.VALIDATION_FAILED, r));
      default:
        return de(new be(`Unknown version for pre-migration validation: ${o}`, pe.VALIDATION_FAILED));
    }
  }
  static validateDataAfterMigration(t, o) {
    return o === 1 ? Lt.validateSketchArray(t).map(() => {
    }).mapErr((r) => new be(`Sketch array validation failed: ${r.message}`, pe.VALIDATION_FAILED, r)) : de(new be(`Unknown version for post-migration validation: ${o}`, pe.VALIDATION_FAILED));
  }
  static checkDataIntegrity(t, o) {
    return Lt.checkDataIntegrity(t, o);
  }
}
__publicField(Ey, "DEFAULT_OPTIONS", { validateBefore: true, validateAfter: true, enableRollback: true, maxRetries: 3, retryDelay: 1e3 });
function I(e, t, o) {
  function r(s, l) {
    if (s._zod || Object.defineProperty(s, "_zod", { value: { def: l, constr: a, traits: /* @__PURE__ */ new Set() }, enumerable: false }), s._zod.traits.has(e)) return;
    s._zod.traits.add(e), t(s, l);
    const c = a.prototype, u = Object.keys(c);
    for (let d = 0; d < u.length; d++) {
      const f = u[d];
      f in s || (s[f] = c[f].bind(s));
    }
  }
  const n = (o == null ? void 0 : o.Parent) ?? Object;
  class i extends n {
  }
  Object.defineProperty(i, "name", { value: e });
  function a(s) {
    var l;
    const c = (o == null ? void 0 : o.Parent) ? new i() : this;
    r(c, s), (l = c._zod).deferred ?? (l.deferred = []);
    for (const u of c._zod.deferred) u();
    return c;
  }
  return Object.defineProperty(a, "init", { value: r }), Object.defineProperty(a, Symbol.hasInstance, { value: (s) => {
    var _a2, _b2;
    return (o == null ? void 0 : o.Parent) && s instanceof o.Parent ? true : (_b2 = (_a2 = s == null ? void 0 : s._zod) == null ? void 0 : _a2.traits) == null ? void 0 : _b2.has(e);
  } }), Object.defineProperty(a, "name", { value: e }), a;
}
class Fo extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class fu extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const hu = {};
function to(e) {
  return hu;
}
function pu(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, n]) => t.indexOf(+r) === -1).map(([r, n]) => n);
}
function xi(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Qi(e) {
  return { get value() {
    {
      const t = e();
      return Object.defineProperty(this, "value", { value: t }), t;
    }
  } };
}
function ea(e) {
  return e == null;
}
function ta(e) {
  const t = e.startsWith("^") ? 1 : 0, o = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, o);
}
function zy(e, t) {
  const o = (e.toString().split(".")[1] || "").length, r = t.toString();
  let n = (r.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(r)) {
    const l = r.match(/\d?e-(\d?)/);
    (l == null ? void 0 : l[1]) && (n = Number.parseInt(l[1]));
  }
  const i = o > n ? o : n, a = Number.parseInt(e.toFixed(i).replace(".", "")), s = Number.parseInt(t.toFixed(i).replace(".", ""));
  return a % s / 10 ** i;
}
const Ls = /* @__PURE__ */ Symbol("evaluating");
function me(e, t, o) {
  let r;
  Object.defineProperty(e, t, { get() {
    if (r !== Ls) return r === void 0 && (r = Ls, r = o()), r;
  }, set(n) {
    Object.defineProperty(e, t, { value: n });
  }, configurable: true });
}
function $o(e, t, o) {
  Object.defineProperty(e, t, { value: o, writable: true, enumerable: true, configurable: true });
}
function io(...e) {
  const t = {};
  for (const o of e) {
    const r = Object.getOwnPropertyDescriptors(o);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function Fs(e) {
  return JSON.stringify(e);
}
function Py(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const mu = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Xr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ty = Qi(() => {
  var _a2;
  if (typeof navigator < "u" && ((_a2 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a2.includes("Cloudflare"))) return false;
  try {
    const e = Function;
    return new e(""), true;
  } catch {
    return false;
  }
});
function jo(e) {
  if (Xr(e) === false) return false;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function") return true;
  const o = t.prototype;
  return !(Xr(o) === false || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === false);
}
function gu(e) {
  return jo(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const _y = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function pn(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ao(e, t, o) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || (o == null ? void 0 : o.parent)) && (r._zod.parent = e), r;
}
function Y(e) {
  const t = e;
  if (!t) return {};
  if (typeof t == "string") return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Ry(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const ky = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] };
function Iy(e, t) {
  const o = e._zod.def, r = o.checks;
  if (r && r.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = io(e._zod.def, { get shape() {
    const a = {};
    for (const s in t) {
      if (!(s in o.shape)) throw new Error(`Unrecognized key: "${s}"`);
      t[s] && (a[s] = o.shape[s]);
    }
    return $o(this, "shape", a), a;
  }, checks: [] });
  return ao(e, i);
}
function Ay(e, t) {
  const o = e._zod.def, r = o.checks;
  if (r && r.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = io(e._zod.def, { get shape() {
    const a = { ...e._zod.def.shape };
    for (const s in t) {
      if (!(s in o.shape)) throw new Error(`Unrecognized key: "${s}"`);
      t[s] && delete a[s];
    }
    return $o(this, "shape", a), a;
  }, checks: [] });
  return ao(e, i);
}
function Oy(e, t) {
  if (!jo(t)) throw new Error("Invalid input to extend: expected a plain object");
  const o = e._zod.def.checks;
  if (o && o.length > 0) {
    const i = e._zod.def.shape;
    for (const a in t) if (Object.getOwnPropertyDescriptor(i, a) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const n = io(e._zod.def, { get shape() {
    const i = { ...e._zod.def.shape, ...t };
    return $o(this, "shape", i), i;
  } });
  return ao(e, n);
}
function My(e, t) {
  if (!jo(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = io(e._zod.def, { get shape() {
    const r = { ...e._zod.def.shape, ...t };
    return $o(this, "shape", r), r;
  } });
  return ao(e, o);
}
function Dy(e, t) {
  const o = io(e._zod.def, { get shape() {
    const r = { ...e._zod.def.shape, ...t._zod.def.shape };
    return $o(this, "shape", r), r;
  }, get catchall() {
    return t._zod.def.catchall;
  }, checks: [] });
  return ao(e, o);
}
function By(e, t, o) {
  const n = t._zod.def.checks;
  if (n && n.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
  const a = io(t._zod.def, { get shape() {
    const s = t._zod.def.shape, l = { ...s };
    if (o) for (const c in o) {
      if (!(c in s)) throw new Error(`Unrecognized key: "${c}"`);
      o[c] && (l[c] = e ? new e({ type: "optional", innerType: s[c] }) : s[c]);
    }
    else for (const c in s) l[c] = e ? new e({ type: "optional", innerType: s[c] }) : s[c];
    return $o(this, "shape", l), l;
  }, checks: [] });
  return ao(t, a);
}
function Ly(e, t, o) {
  const r = io(t._zod.def, { get shape() {
    const n = t._zod.def.shape, i = { ...n };
    if (o) for (const a in o) {
      if (!(a in i)) throw new Error(`Unrecognized key: "${a}"`);
      o[a] && (i[a] = new e({ type: "nonoptional", innerType: n[a] }));
    }
    else for (const a in n) i[a] = new e({ type: "nonoptional", innerType: n[a] });
    return $o(this, "shape", i), i;
  } });
  return ao(t, r);
}
function ko(e, t = 0) {
  var _a2;
  if (e.aborted === true) return true;
  for (let o = t; o < e.issues.length; o++) if (((_a2 = e.issues[o]) == null ? void 0 : _a2.continue) !== true) return true;
  return false;
}
function Io(e, t) {
  return t.map((o) => {
    var r;
    return (r = o).path ?? (r.path = []), o.path.unshift(e), o;
  });
}
function Br(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function oo(e, t, o) {
  var _a2, _b2, _c2, _d2, _e, _f2;
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = Br((_c2 = (_b2 = (_a2 = e.inst) == null ? void 0 : _a2._zod.def) == null ? void 0 : _b2.error) == null ? void 0 : _c2.call(_b2, e)) ?? Br((_d2 = t == null ? void 0 : t.error) == null ? void 0 : _d2.call(t, e)) ?? Br((_e = o.customError) == null ? void 0 : _e.call(o, e)) ?? Br((_f2 = o.localeError) == null ? void 0 : _f2.call(o, e)) ?? "Invalid input";
    r.message = n;
  }
  return delete r.inst, delete r.continue, (t == null ? void 0 : t.reportInput) || delete r.input, r;
}
function oa(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function gr(...e) {
  const [t, o, r] = e;
  return typeof t == "string" ? { message: t, code: "custom", input: o, inst: r } : { ...t };
}
const vu = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", { value: e._zod, enumerable: false }), Object.defineProperty(e, "issues", { value: t, enumerable: false }), e.message = JSON.stringify(t, xi, 2), Object.defineProperty(e, "toString", { value: () => e.message, enumerable: false });
}, bu = I("$ZodError", vu), xu = I("$ZodError", vu, { Parent: Error });
function Fy(e, t = (o) => o.message) {
  const o = {}, r = [];
  for (const n of e.issues) n.path.length > 0 ? (o[n.path[0]] = o[n.path[0]] || [], o[n.path[0]].push(t(n))) : r.push(t(n));
  return { formErrors: r, fieldErrors: o };
}
function Hy(e, t = (o) => o.message) {
  const o = { _errors: [] }, r = (n) => {
    for (const i of n.issues) if (i.code === "invalid_union" && i.errors.length) i.errors.map((a) => r({ issues: a }));
    else if (i.code === "invalid_key") r({ issues: i.issues });
    else if (i.code === "invalid_element") r({ issues: i.issues });
    else if (i.path.length === 0) o._errors.push(t(i));
    else {
      let a = o, s = 0;
      for (; s < i.path.length; ) {
        const l = i.path[s];
        s === i.path.length - 1 ? (a[l] = a[l] || { _errors: [] }, a[l]._errors.push(t(i))) : a[l] = a[l] || { _errors: [] }, a = a[l], s++;
      }
    }
  };
  return r(e), o;
}
const ra = (e) => (t, o, r, n) => {
  const i = r ? Object.assign(r, { async: false }) : { async: false }, a = t._zod.run({ value: o, issues: [] }, i);
  if (a instanceof Promise) throw new Fo();
  if (a.issues.length) {
    const s = new ((n == null ? void 0 : n.Err) ?? e)(a.issues.map((l) => oo(l, i, to())));
    throw mu(s, n == null ? void 0 : n.callee), s;
  }
  return a.value;
}, na = (e) => async (t, o, r, n) => {
  const i = r ? Object.assign(r, { async: true }) : { async: true };
  let a = t._zod.run({ value: o, issues: [] }, i);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const s = new ((n == null ? void 0 : n.Err) ?? e)(a.issues.map((l) => oo(l, i, to())));
    throw mu(s, n == null ? void 0 : n.callee), s;
  }
  return a.value;
}, mn = (e) => (t, o, r) => {
  const n = r ? { ...r, async: false } : { async: false }, i = t._zod.run({ value: o, issues: [] }, n);
  if (i instanceof Promise) throw new Fo();
  return i.issues.length ? { success: false, error: new (e ?? bu)(i.issues.map((a) => oo(a, n, to()))) } : { success: true, data: i.value };
}, Ny = mn(xu), gn = (e) => async (t, o, r) => {
  const n = r ? Object.assign(r, { async: true }) : { async: true };
  let i = t._zod.run({ value: o, issues: [] }, n);
  return i instanceof Promise && (i = await i), i.issues.length ? { success: false, error: new e(i.issues.map((a) => oo(a, n, to()))) } : { success: true, data: i.value };
}, Wy = gn(xu), jy = (e) => (t, o, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return ra(e)(t, o, n);
}, Vy = (e) => (t, o, r) => ra(e)(t, o, r), Zy = (e) => async (t, o, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return na(e)(t, o, n);
}, Uy = (e) => async (t, o, r) => na(e)(t, o, r), Gy = (e) => (t, o, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return mn(e)(t, o, n);
}, Ky = (e) => (t, o, r) => mn(e)(t, o, r), qy = (e) => async (t, o, r) => {
  const n = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return gn(e)(t, o, n);
}, Yy = (e) => async (t, o, r) => gn(e)(t, o, r), Xy = /^[cC][^\s-]{8,}$/, Jy = /^[0-9a-z]+$/, Qy = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, ew = /^[0-9a-vA-V]{20}$/, tw = /^[A-Za-z0-9]{27}$/, ow = /^[a-zA-Z0-9_-]{21}$/, rw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Hs = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, iw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, aw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function sw() {
  return new RegExp(aw, "u");
}
const lw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, cw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, uw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, dw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, fw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Cu = /^[A-Za-z0-9_-]*$/, hw = /^\+[1-9]\d{6,14}$/, yu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", pw = new RegExp(`^${yu}$`);
function wu(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function mw(e) {
  return new RegExp(`^${wu(e)}$`);
}
function gw(e) {
  const t = wu({ precision: e.precision }), o = ["Z"];
  e.local && o.push(""), e.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${o.join("|")})`;
  return new RegExp(`^${yu}T(?:${r})$`);
}
const vw = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, bw = /^-?\d+$/, Su = /^-?\d+(?:\.\d+)?$/, xw = /^(?:true|false)$/i, Cw = /^[^A-Z]*$/, yw = /^[^a-z]*$/, st = I("$ZodCheck", (e, t) => {
  var o;
  e._zod ?? (e._zod = {}), e._zod.def = t, (o = e._zod).onattach ?? (o.onattach = []);
}), $u = { number: "number", bigint: "bigint", object: "date" }, Eu = I("$ZodCheckLessThan", (e, t) => {
  st.init(e, t);
  const o = $u[typeof t.value];
  e._zod.onattach.push((r) => {
    const n = r._zod.bag, i = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < i && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({ origin: o, code: "too_big", maximum: typeof t.value == "object" ? t.value.getTime() : t.value, input: r.value, inclusive: t.inclusive, inst: e, continue: !t.abort });
  };
}), zu = I("$ZodCheckGreaterThan", (e, t) => {
  st.init(e, t);
  const o = $u[typeof t.value];
  e._zod.onattach.push((r) => {
    const n = r._zod.bag, i = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > i && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({ origin: o, code: "too_small", minimum: typeof t.value == "object" ? t.value.getTime() : t.value, input: r.value, inclusive: t.inclusive, inst: e, continue: !t.abort });
  };
}), ww = I("$ZodCheckMultipleOf", (e, t) => {
  st.init(e, t), e._zod.onattach.push((o) => {
    var r;
    (r = o._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (o) => {
    if (typeof o.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % t.value === BigInt(0) : zy(o.value, t.value) === 0) || o.issues.push({ origin: typeof o.value, code: "not_multiple_of", divisor: t.value, input: o.value, inst: e, continue: !t.abort });
  };
}), Sw = I("$ZodCheckNumberFormat", (e, t) => {
  var _a2;
  st.init(e, t), t.format = t.format || "float64";
  const o = (_a2 = t.format) == null ? void 0 : _a2.includes("int"), r = o ? "int" : "number", [n, i] = ky[t.format];
  e._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = t.format, s.minimum = n, s.maximum = i, o && (s.pattern = bw);
  }), e._zod.check = (a) => {
    const s = a.value;
    if (o) {
      if (!Number.isInteger(s)) {
        a.issues.push({ expected: r, format: t.format, code: "invalid_type", continue: false, input: s, inst: e });
        return;
      }
      if (!Number.isSafeInteger(s)) {
        s > 0 ? a.issues.push({ input: s, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e, origin: r, inclusive: true, continue: !t.abort }) : a.issues.push({ input: s, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e, origin: r, inclusive: true, continue: !t.abort });
        return;
      }
    }
    s < n && a.issues.push({ origin: "number", input: s, code: "too_small", minimum: n, inclusive: true, inst: e, continue: !t.abort }), s > i && a.issues.push({ origin: "number", input: s, code: "too_big", maximum: i, inclusive: true, inst: e, continue: !t.abort });
  };
}), $w = I("$ZodCheckMaxLength", (e, t) => {
  var o;
  st.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ea(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length <= t.maximum) return;
    const a = oa(n);
    r.issues.push({ origin: a, code: "too_big", maximum: t.maximum, inclusive: true, input: n, inst: e, continue: !t.abort });
  };
}), Ew = I("$ZodCheckMinLength", (e, t) => {
  var o;
  st.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ea(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const n = r.value;
    if (n.length >= t.minimum) return;
    const a = oa(n);
    r.issues.push({ origin: a, code: "too_small", minimum: t.minimum, inclusive: true, input: n, inst: e, continue: !t.abort });
  };
}), zw = I("$ZodCheckLengthEquals", (e, t) => {
  var o;
  st.init(e, t), (o = e._zod.def).when ?? (o.when = (r) => {
    const n = r.value;
    return !ea(n) && n.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (r) => {
    const n = r.value, i = n.length;
    if (i === t.length) return;
    const a = oa(n), s = i > t.length;
    r.issues.push({ origin: a, ...s ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }, inclusive: true, exact: true, input: r.value, inst: e, continue: !t.abort });
  };
}), vn = I("$ZodCheckStringFormat", (e, t) => {
  var o, r;
  st.init(e, t), e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (o = e._zod).check ?? (o.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({ origin: "string", code: "invalid_format", format: t.format, input: n.value, ...t.pattern ? { pattern: t.pattern.toString() } : {}, inst: e, continue: !t.abort });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Pw = I("$ZodCheckRegex", (e, t) => {
  vn.init(e, t), e._zod.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: o.value, pattern: t.pattern.toString(), inst: e, continue: !t.abort });
  };
}), Tw = I("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Cw), vn.init(e, t);
}), _w = I("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = yw), vn.init(e, t);
}), Rw = I("$ZodCheckIncludes", (e, t) => {
  st.init(e, t);
  const o = pn(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${o}` : o);
  t.pattern = r, e._zod.onattach.push((n) => {
    const i = n._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t.includes, input: n.value, inst: e, continue: !t.abort });
  };
}), kw = I("$ZodCheckStartsWith", (e, t) => {
  st.init(e, t);
  const o = new RegExp(`^${pn(t.prefix)}.*`);
  t.pattern ?? (t.pattern = o), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(o);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t.prefix, input: r.value, inst: e, continue: !t.abort });
  };
}), Iw = I("$ZodCheckEndsWith", (e, t) => {
  st.init(e, t);
  const o = new RegExp(`.*${pn(t.suffix)}$`);
  t.pattern ?? (t.pattern = o), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(o);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t.suffix, input: r.value, inst: e, continue: !t.abort });
  };
}), Aw = I("$ZodCheckOverwrite", (e, t) => {
  st.init(e, t), e._zod.check = (o) => {
    o.value = t.tx(o.value);
  };
});
class Ow {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const r = t.split(`
`).filter((a) => a), n = Math.min(...r.map((a) => a.length - a.trimStart().length)), i = r.map((a) => a.slice(n)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of i) this.content.push(a);
  }
  compile() {
    const t = Function, o = this == null ? void 0 : this.args, n = [...((this == null ? void 0 : this.content) ?? [""]).map((i) => `  ${i}`)];
    return new t(...o, n.join(`
`));
  }
}
const Mw = { major: 4, minor: 3, patch: 5 }, Oe = I("$ZodType", (e, t) => {
  var _a2;
  var o;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Mw;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const n of r) for (const i of n._zod.onattach) i(e);
  if (r.length === 0) (o = e._zod).deferred ?? (o.deferred = []), (_a2 = e._zod.deferred) == null ? void 0 : _a2.push(() => {
    e._zod.run = e._zod.parse;
  });
  else {
    const n = (a, s, l) => {
      let c = ko(a), u;
      for (const d of s) {
        if (d._zod.def.when) {
          if (!d._zod.def.when(a)) continue;
        } else if (c) continue;
        const f = a.issues.length, h = d._zod.check(a);
        if (h instanceof Promise && (l == null ? void 0 : l.async) === false) throw new Fo();
        if (u || h instanceof Promise) u = (u ?? Promise.resolve()).then(async () => {
          await h, a.issues.length !== f && (c || (c = ko(a, f)));
        });
        else {
          if (a.issues.length === f) continue;
          c || (c = ko(a, f));
        }
      }
      return u ? u.then(() => a) : a;
    }, i = (a, s, l) => {
      if (ko(a)) return a.aborted = true, a;
      const c = n(s, r, l);
      if (c instanceof Promise) {
        if (l.async === false) throw new Fo();
        return c.then((u) => e._zod.parse(u, l));
      }
      return e._zod.parse(c, l);
    };
    e._zod.run = (a, s) => {
      if (s.skipChecks) return e._zod.parse(a, s);
      if (s.direction === "backward") {
        const c = e._zod.parse({ value: a.value, issues: [] }, { ...s, skipChecks: true });
        return c instanceof Promise ? c.then((u) => i(u, a, s)) : i(c, a, s);
      }
      const l = e._zod.parse(a, s);
      if (l instanceof Promise) {
        if (s.async === false) throw new Fo();
        return l.then((c) => n(c, r, s));
      }
      return n(l, r, s);
    };
  }
  me(e, "~standard", () => ({ validate: (n) => {
    var _a3;
    try {
      const i = Ny(e, n);
      return i.success ? { value: i.data } : { issues: (_a3 = i.error) == null ? void 0 : _a3.issues };
    } catch {
      return Wy(e, n).then((a) => {
        var _a4;
        return a.success ? { value: a.data } : { issues: (_a4 = a.error) == null ? void 0 : _a4.issues };
      });
    }
  }, vendor: "zod", version: 1 }));
}), ia = I("$ZodString", (e, t) => {
  var _a2;
  Oe.init(e, t), e._zod.pattern = [...((_a2 = e == null ? void 0 : e._zod.bag) == null ? void 0 : _a2.patterns) ?? []].pop() ?? vw(e._zod.bag), e._zod.parse = (o, r) => {
    if (t.coerce) try {
      o.value = String(o.value);
    } catch {
    }
    return typeof o.value == "string" || o.issues.push({ expected: "string", code: "invalid_type", input: o.value, inst: e }), o;
  };
}), ze = I("$ZodStringFormat", (e, t) => {
  vn.init(e, t), ia.init(e, t);
}), Dw = I("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = nw), ze.init(e, t);
}), Bw = I("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
    if (r === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Hs(r));
  } else t.pattern ?? (t.pattern = Hs());
  ze.init(e, t);
}), Lw = I("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = iw), ze.init(e, t);
}), Fw = I("$ZodURL", (e, t) => {
  ze.init(e, t), e._zod.check = (o) => {
    try {
      const r = o.value.trim(), n = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || o.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: t.hostname.source, input: o.value, inst: e, continue: !t.abort })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || o.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t.protocol.source, input: o.value, inst: e, continue: !t.abort })), t.normalize ? o.value = n.href : o.value = r;
      return;
    } catch {
      o.issues.push({ code: "invalid_format", format: "url", input: o.value, inst: e, continue: !t.abort });
    }
  };
}), Hw = I("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = sw()), ze.init(e, t);
}), Nw = I("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = ow), ze.init(e, t);
}), Ww = I("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Xy), ze.init(e, t);
}), jw = I("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Jy), ze.init(e, t);
}), Vw = I("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Qy), ze.init(e, t);
}), Zw = I("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = ew), ze.init(e, t);
}), Uw = I("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = tw), ze.init(e, t);
}), Gw = I("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = gw(t)), ze.init(e, t);
}), Kw = I("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = pw), ze.init(e, t);
}), qw = I("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = mw(t)), ze.init(e, t);
}), Yw = I("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = rw), ze.init(e, t);
}), Xw = I("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = lw), ze.init(e, t), e._zod.bag.format = "ipv4";
}), Jw = I("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = cw), ze.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({ code: "invalid_format", format: "ipv6", input: o.value, inst: e, continue: !t.abort });
    }
  };
}), Qw = I("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = uw), ze.init(e, t);
}), eS = I("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = dw), ze.init(e, t), e._zod.check = (o) => {
    const r = o.value.split("/");
    try {
      if (r.length !== 2) throw new Error();
      const [n, i] = r;
      if (!i) throw new Error();
      const a = Number(i);
      if (`${a}` !== i) throw new Error();
      if (a < 0 || a > 128) throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      o.issues.push({ code: "invalid_format", format: "cidrv6", input: o.value, inst: e, continue: !t.abort });
    }
  };
});
function Pu(e) {
  if (e === "") return true;
  if (e.length % 4 !== 0) return false;
  try {
    return atob(e), true;
  } catch {
    return false;
  }
}
const tS = I("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = fw), ze.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (o) => {
    Pu(o.value) || o.issues.push({ code: "invalid_format", format: "base64", input: o.value, inst: e, continue: !t.abort });
  };
});
function oS(e) {
  if (!Cu.test(e)) return false;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), o = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Pu(o);
}
const rS = I("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Cu), ze.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (o) => {
    oS(o.value) || o.issues.push({ code: "invalid_format", format: "base64url", input: o.value, inst: e, continue: !t.abort });
  };
}), nS = I("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = hw), ze.init(e, t);
});
function iS(e, t = null) {
  try {
    const o = e.split(".");
    if (o.length !== 3) return false;
    const [r] = o;
    if (!r) return false;
    const n = JSON.parse(atob(r));
    return !("typ" in n && (n == null ? void 0 : n.typ) !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return false;
  }
}
const aS = I("$ZodJWT", (e, t) => {
  ze.init(e, t), e._zod.check = (o) => {
    iS(o.value, t.alg) || o.issues.push({ code: "invalid_format", format: "jwt", input: o.value, inst: e, continue: !t.abort });
  };
}), Tu = I("$ZodNumber", (e, t) => {
  Oe.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Su, e._zod.parse = (o, r) => {
    if (t.coerce) try {
      o.value = Number(o.value);
    } catch {
    }
    const n = o.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n)) return o;
    const i = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return o.issues.push({ expected: "number", code: "invalid_type", input: n, inst: e, ...i ? { received: i } : {} }), o;
  };
}), sS = I("$ZodNumberFormat", (e, t) => {
  Sw.init(e, t), Tu.init(e, t);
}), lS = I("$ZodBoolean", (e, t) => {
  Oe.init(e, t), e._zod.pattern = xw, e._zod.parse = (o, r) => {
    if (t.coerce) try {
      o.value = !!o.value;
    } catch {
    }
    const n = o.value;
    return typeof n == "boolean" || o.issues.push({ expected: "boolean", code: "invalid_type", input: n, inst: e }), o;
  };
}), cS = I("$ZodUnknown", (e, t) => {
  Oe.init(e, t), e._zod.parse = (o) => o;
}), uS = I("$ZodNever", (e, t) => {
  Oe.init(e, t), e._zod.parse = (o, r) => (o.issues.push({ expected: "never", code: "invalid_type", input: o.value, inst: e }), o);
});
function Ns(e, t, o) {
  e.issues.length && t.issues.push(...Io(o, e.issues)), t.value[o] = e.value;
}
const dS = I("$ZodArray", (e, t) => {
  Oe.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    if (!Array.isArray(n)) return o.issues.push({ expected: "array", code: "invalid_type", input: n, inst: e }), o;
    o.value = Array(n.length);
    const i = [];
    for (let a = 0; a < n.length; a++) {
      const s = n[a], l = t.element._zod.run({ value: s, issues: [] }, r);
      l instanceof Promise ? i.push(l.then((c) => Ns(c, o, a))) : Ns(l, o, a);
    }
    return i.length ? Promise.all(i).then(() => o) : o;
  };
});
function Jr(e, t, o, r, n) {
  if (e.issues.length) {
    if (n && !(o in r)) return;
    t.issues.push(...Io(o, e.issues));
  }
  e.value === void 0 ? o in r && (t.value[o] = void 0) : t.value[o] = e.value;
}
function _u(e) {
  var _a2, _b2, _c2, _d2;
  const t = Object.keys(e.shape);
  for (const r of t) if (!((_d2 = (_c2 = (_b2 = (_a2 = e.shape) == null ? void 0 : _a2[r]) == null ? void 0 : _b2._zod) == null ? void 0 : _c2.traits) == null ? void 0 : _d2.has("$ZodType"))) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const o = Ry(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(o) };
}
function Ru(e, t, o, r, n, i) {
  const a = [], s = n.keySet, l = n.catchall._zod, c = l.def.type, u = l.optout === "optional";
  for (const d in t) {
    if (s.has(d)) continue;
    if (c === "never") {
      a.push(d);
      continue;
    }
    const f = l.run({ value: t[d], issues: [] }, r);
    f instanceof Promise ? e.push(f.then((h) => Jr(h, o, d, t, u))) : Jr(f, o, d, t, u);
  }
  return a.length && o.issues.push({ code: "unrecognized_keys", keys: a, input: t, inst: i }), e.length ? Promise.all(e).then(() => o) : o;
}
const fS = I("$ZodObject", (e, t) => {
  var _a2;
  if (Oe.init(e, t), !((_a2 = Object.getOwnPropertyDescriptor(t, "shape")) == null ? void 0 : _a2.get)) {
    const s = t.shape;
    Object.defineProperty(t, "shape", { get: () => {
      const l = { ...s };
      return Object.defineProperty(t, "shape", { value: l }), l;
    } });
  }
  const r = Qi(() => _u(t));
  me(e._zod, "propValues", () => {
    const s = t.shape, l = {};
    for (const c in s) {
      const u = s[c]._zod;
      if (u.values) {
        l[c] ?? (l[c] = /* @__PURE__ */ new Set());
        for (const d of u.values) l[c].add(d);
      }
    }
    return l;
  });
  const n = Xr, i = t.catchall;
  let a;
  e._zod.parse = (s, l) => {
    a ?? (a = r.value);
    const c = s.value;
    if (!n(c)) return s.issues.push({ expected: "object", code: "invalid_type", input: c, inst: e }), s;
    s.value = {};
    const u = [], d = a.shape;
    for (const f of a.keys) {
      const h = d[f], p = h._zod.optout === "optional", m = h._zod.run({ value: c[f], issues: [] }, l);
      m instanceof Promise ? u.push(m.then((g) => Jr(g, s, f, c, p))) : Jr(m, s, f, c, p);
    }
    return i ? Ru(u, c, s, l, r.value, e) : u.length ? Promise.all(u).then(() => s) : s;
  };
}), hS = I("$ZodObjectJIT", (e, t) => {
  fS.init(e, t);
  const o = e._zod.parse, r = Qi(() => _u(t)), n = (f) => {
    var _a2, _b2;
    const h = new Ow(["shape", "payload", "ctx"]), p = r.value, m = ($) => {
      const C = Fs($);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    h.write("const input = payload.value;");
    const g = /* @__PURE__ */ Object.create(null);
    let v = 0;
    for (const $ of p.keys) g[$] = `key_${v++}`;
    h.write("const newResult = {};");
    for (const $ of p.keys) {
      const C = g[$], E = Fs($), b = ((_b2 = (_a2 = f[$]) == null ? void 0 : _a2._zod) == null ? void 0 : _b2.optout) === "optional";
      h.write(`const ${C} = ${m($)};`), b ? h.write(`
        if (${C}.issues.length) {
          if (${E} in input) {
            payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${E}, ...iss.path] : [${E}]
            })));
          }
        }
        
        if (${C}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${C}.value;
        }
        
      `) : h.write(`
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${E}, ...iss.path] : [${E}]
          })));
        }
        
        if (${C}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${C}.value;
        }
        
      `);
    }
    h.write("payload.value = newResult;"), h.write("return payload;");
    const x = h.compile();
    return ($, C) => x(f, $, C);
  };
  let i;
  const a = Xr, s = !hu.jitless, c = s && Ty.value, u = t.catchall;
  let d;
  e._zod.parse = (f, h) => {
    d ?? (d = r.value);
    const p = f.value;
    return a(p) ? s && c && (h == null ? void 0 : h.async) === false && h.jitless !== true ? (i || (i = n(t.shape)), f = i(f, h), u ? Ru([], p, f, h, d, e) : f) : o(f, h) : (f.issues.push({ expected: "object", code: "invalid_type", input: p, inst: e }), f);
  };
});
function Ws(e, t, o, r) {
  for (const i of e) if (i.issues.length === 0) return t.value = i.value, t;
  const n = e.filter((i) => !ko(i));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({ code: "invalid_union", input: t.value, inst: o, errors: e.map((i) => i.issues.map((a) => oo(a, r, to()))) }), t);
}
const pS = I("$ZodUnion", (e, t) => {
  Oe.init(e, t), me(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), me(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), me(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values)) return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), me(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${n.map((i) => ta(i.source)).join("|")})$`);
    }
  });
  const o = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (n, i) => {
    if (o) return r(n, i);
    let a = false;
    const s = [];
    for (const l of t.options) {
      const c = l._zod.run({ value: n.value, issues: [] }, i);
      if (c instanceof Promise) s.push(c), a = true;
      else {
        if (c.issues.length === 0) return c;
        s.push(c);
      }
    }
    return a ? Promise.all(s).then((l) => Ws(l, n, e, i)) : Ws(s, n, e, i);
  };
}), mS = I("$ZodIntersection", (e, t) => {
  Oe.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value, i = t.left._zod.run({ value: n, issues: [] }, r), a = t.right._zod.run({ value: n, issues: [] }, r);
    return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([l, c]) => js(o, l, c)) : js(o, i, a);
  };
});
function Ci(e, t) {
  if (e === t) return { valid: true, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t) return { valid: true, data: e };
  if (jo(e) && jo(t)) {
    const o = Object.keys(t), r = Object.keys(e).filter((i) => o.indexOf(i) !== -1), n = { ...e, ...t };
    for (const i of r) {
      const a = Ci(e[i], t[i]);
      if (!a.valid) return { valid: false, mergeErrorPath: [i, ...a.mergeErrorPath] };
      n[i] = a.data;
    }
    return { valid: true, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: false, mergeErrorPath: [] };
    const o = [];
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = t[r], a = Ci(n, i);
      if (!a.valid) return { valid: false, mergeErrorPath: [r, ...a.mergeErrorPath] };
      o.push(a.data);
    }
    return { valid: true, data: o };
  }
  return { valid: false, mergeErrorPath: [] };
}
function js(e, t, o) {
  const r = /* @__PURE__ */ new Map();
  let n;
  for (const s of t.issues) if (s.code === "unrecognized_keys") {
    n ?? (n = s);
    for (const l of s.keys) r.has(l) || r.set(l, {}), r.get(l).l = true;
  } else e.issues.push(s);
  for (const s of o.issues) if (s.code === "unrecognized_keys") for (const l of s.keys) r.has(l) || r.set(l, {}), r.get(l).r = true;
  else e.issues.push(s);
  const i = [...r].filter(([, s]) => s.l && s.r).map(([s]) => s);
  if (i.length && n && e.issues.push({ ...n, keys: i }), ko(e)) return e;
  const a = Ci(t.value, o.value);
  if (!a.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const gS = I("$ZodRecord", (e, t) => {
  Oe.init(e, t), e._zod.parse = (o, r) => {
    const n = o.value;
    if (!jo(n)) return o.issues.push({ expected: "record", code: "invalid_type", input: n, inst: e }), o;
    const i = [], a = t.keyType._zod.values;
    if (a) {
      o.value = {};
      const s = /* @__PURE__ */ new Set();
      for (const c of a) if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
        s.add(typeof c == "number" ? c.toString() : c);
        const u = t.valueType._zod.run({ value: n[c], issues: [] }, r);
        u instanceof Promise ? i.push(u.then((d) => {
          d.issues.length && o.issues.push(...Io(c, d.issues)), o.value[c] = d.value;
        })) : (u.issues.length && o.issues.push(...Io(c, u.issues)), o.value[c] = u.value);
      }
      let l;
      for (const c in n) s.has(c) || (l = l ?? [], l.push(c));
      l && l.length > 0 && o.issues.push({ code: "unrecognized_keys", input: n, inst: e, keys: l });
    } else {
      o.value = {};
      for (const s of Reflect.ownKeys(n)) {
        if (s === "__proto__") continue;
        let l = t.keyType._zod.run({ value: s, issues: [] }, r);
        if (l instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
        if (typeof s == "string" && Su.test(s) && l.issues.length && l.issues.some((d) => d.code === "invalid_type" && d.expected === "number")) {
          const d = t.keyType._zod.run({ value: Number(s), issues: [] }, r);
          if (d instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          d.issues.length === 0 && (l = d);
        }
        if (l.issues.length) {
          t.mode === "loose" ? o.value[s] = n[s] : o.issues.push({ code: "invalid_key", origin: "record", issues: l.issues.map((d) => oo(d, r, to())), input: s, path: [s], inst: e });
          continue;
        }
        const u = t.valueType._zod.run({ value: n[s], issues: [] }, r);
        u instanceof Promise ? i.push(u.then((d) => {
          d.issues.length && o.issues.push(...Io(s, d.issues)), o.value[l.value] = d.value;
        })) : (u.issues.length && o.issues.push(...Io(s, u.issues)), o.value[l.value] = u.value);
      }
    }
    return i.length ? Promise.all(i).then(() => o) : o;
  };
}), vS = I("$ZodEnum", (e, t) => {
  Oe.init(e, t);
  const o = pu(t.entries), r = new Set(o);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${o.filter((n) => _y.has(typeof n)).map((n) => typeof n == "string" ? pn(n) : n.toString()).join("|")})$`), e._zod.parse = (n, i) => {
    const a = n.value;
    return r.has(a) || n.issues.push({ code: "invalid_value", values: o, input: a, inst: e }), n;
  };
}), bS = I("$ZodTransform", (e, t) => {
  Oe.init(e, t), e._zod.parse = (o, r) => {
    if (r.direction === "backward") throw new fu(e.constructor.name);
    const n = t.transform(o.value, o);
    if (r.async) return (n instanceof Promise ? n : Promise.resolve(n)).then((a) => (o.value = a, o));
    if (n instanceof Promise) throw new Fo();
    return o.value = n, o;
  };
});
function Vs(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const ku = I("$ZodOptional", (e, t) => {
  Oe.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", me(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), me(e._zod, "pattern", () => {
    const o = t.innerType._zod.pattern;
    return o ? new RegExp(`^(${ta(o.source)})?$`) : void 0;
  }), e._zod.parse = (o, r) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(o, r);
      return n instanceof Promise ? n.then((i) => Vs(i, o.value)) : Vs(n, o.value);
    }
    return o.value === void 0 ? o : t.innerType._zod.run(o, r);
  };
}), xS = I("$ZodExactOptional", (e, t) => {
  ku.init(e, t), me(e._zod, "values", () => t.innerType._zod.values), me(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (o, r) => t.innerType._zod.run(o, r);
}), CS = I("$ZodNullable", (e, t) => {
  Oe.init(e, t), me(e._zod, "optin", () => t.innerType._zod.optin), me(e._zod, "optout", () => t.innerType._zod.optout), me(e._zod, "pattern", () => {
    const o = t.innerType._zod.pattern;
    return o ? new RegExp(`^(${ta(o.source)}|null)$`) : void 0;
  }), me(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (o, r) => o.value === null ? o : t.innerType._zod.run(o, r);
}), yS = I("$ZodDefault", (e, t) => {
  Oe.init(e, t), e._zod.optin = "optional", me(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(o, r);
    if (o.value === void 0) return o.value = t.defaultValue, o;
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => Zs(i, t)) : Zs(n, t);
  };
});
function Zs(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const wS = I("$ZodPrefault", (e, t) => {
  Oe.init(e, t), e._zod.optin = "optional", me(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, r) => (r.direction === "backward" || o.value === void 0 && (o.value = t.defaultValue), t.innerType._zod.run(o, r));
}), SS = I("$ZodNonOptional", (e, t) => {
  Oe.init(e, t), me(e._zod, "values", () => {
    const o = t.innerType._zod.values;
    return o ? new Set([...o].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (o, r) => {
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => Us(i, e)) : Us(n, e);
  };
});
function Us(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }), e;
}
const $S = I("$ZodCatch", (e, t) => {
  Oe.init(e, t), me(e._zod, "optin", () => t.innerType._zod.optin), me(e._zod, "optout", () => t.innerType._zod.optout), me(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(o, r);
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => (o.value = i.value, i.issues.length && (o.value = t.catchValue({ ...o, error: { issues: i.issues.map((a) => oo(a, r, to())) }, input: o.value }), o.issues = []), o)) : (o.value = n.value, n.issues.length && (o.value = t.catchValue({ ...o, error: { issues: n.issues.map((i) => oo(i, r, to())) }, input: o.value }), o.issues = []), o);
  };
}), ES = I("$ZodPipe", (e, t) => {
  Oe.init(e, t), me(e._zod, "values", () => t.in._zod.values), me(e._zod, "optin", () => t.in._zod.optin), me(e._zod, "optout", () => t.out._zod.optout), me(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (o, r) => {
    if (r.direction === "backward") {
      const i = t.out._zod.run(o, r);
      return i instanceof Promise ? i.then((a) => Lr(a, t.in, r)) : Lr(i, t.in, r);
    }
    const n = t.in._zod.run(o, r);
    return n instanceof Promise ? n.then((i) => Lr(i, t.out, r)) : Lr(n, t.out, r);
  };
});
function Lr(e, t, o) {
  return e.issues.length ? (e.aborted = true, e) : t._zod.run({ value: e.value, issues: e.issues }, o);
}
const zS = I("$ZodReadonly", (e, t) => {
  Oe.init(e, t), me(e._zod, "propValues", () => t.innerType._zod.propValues), me(e._zod, "values", () => t.innerType._zod.values), me(e._zod, "optin", () => {
    var _a2, _b2;
    return (_b2 = (_a2 = t.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b2.optin;
  }), me(e._zod, "optout", () => {
    var _a2, _b2;
    return (_b2 = (_a2 = t.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b2.optout;
  }), e._zod.parse = (o, r) => {
    if (r.direction === "backward") return t.innerType._zod.run(o, r);
    const n = t.innerType._zod.run(o, r);
    return n instanceof Promise ? n.then(Gs) : Gs(n);
  };
});
function Gs(e) {
  return e.value = Object.freeze(e.value), e;
}
const PS = I("$ZodCustom", (e, t) => {
  st.init(e, t), Oe.init(e, t), e._zod.parse = (o, r) => o, e._zod.check = (o) => {
    const r = o.value, n = t.fn(r);
    if (n instanceof Promise) return n.then((i) => Ks(i, o, r, e));
    Ks(n, o, r, e);
  };
});
function Ks(e, t, o, r) {
  if (!e) {
    const n = { code: "custom", input: o, inst: r, path: [...r._zod.def.path ?? []], continue: !r._zod.def.abort };
    r._zod.def.params && (n.params = r._zod.def.params), t.issues.push(gr(n));
  }
}
var qs;
class TS {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...o) {
    const r = o[0];
    return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const o = this._map.get(t);
    return o && typeof o == "object" && "id" in o && this._idmap.delete(o.id), this._map.delete(t), this;
  }
  get(t) {
    const o = t._zod.parent;
    if (o) {
      const r = { ...this.get(o) ?? {} };
      delete r.id;
      const n = { ...r, ...this._map.get(t) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function _S() {
  return new TS();
}
(qs = globalThis).__zod_globalRegistry ?? (qs.__zod_globalRegistry = _S());
const rr = globalThis.__zod_globalRegistry;
function RS(e, t) {
  return new e({ type: "string", ...Y(t) });
}
function kS(e, t) {
  return new e({ type: "string", format: "email", check: "string_format", abort: false, ...Y(t) });
}
function Ys(e, t) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: false, ...Y(t) });
}
function IS(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, ...Y(t) });
}
function AS(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...Y(t) });
}
function OS(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...Y(t) });
}
function MS(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...Y(t) });
}
function DS(e, t) {
  return new e({ type: "string", format: "url", check: "string_format", abort: false, ...Y(t) });
}
function BS(e, t) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: false, ...Y(t) });
}
function LS(e, t) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: false, ...Y(t) });
}
function FS(e, t) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: false, ...Y(t) });
}
function HS(e, t) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: false, ...Y(t) });
}
function NS(e, t) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: false, ...Y(t) });
}
function WS(e, t) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: false, ...Y(t) });
}
function jS(e, t) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: false, ...Y(t) });
}
function VS(e, t) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: false, ...Y(t) });
}
function ZS(e, t) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: false, ...Y(t) });
}
function US(e, t) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...Y(t) });
}
function GS(e, t) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...Y(t) });
}
function KS(e, t) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: false, ...Y(t) });
}
function qS(e, t) {
  return new e({ type: "string", format: "base64url", check: "string_format", abort: false, ...Y(t) });
}
function YS(e, t) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: false, ...Y(t) });
}
function XS(e, t) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: false, ...Y(t) });
}
function JS(e, t) {
  return new e({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...Y(t) });
}
function QS(e, t) {
  return new e({ type: "string", format: "date", check: "string_format", ...Y(t) });
}
function e1(e, t) {
  return new e({ type: "string", format: "time", check: "string_format", precision: null, ...Y(t) });
}
function t1(e, t) {
  return new e({ type: "string", format: "duration", check: "string_format", ...Y(t) });
}
function o1(e, t) {
  return new e({ type: "number", checks: [], ...Y(t) });
}
function r1(e, t) {
  return new e({ type: "number", check: "number_format", abort: false, format: "safeint", ...Y(t) });
}
function n1(e, t) {
  return new e({ type: "boolean", ...Y(t) });
}
function i1(e) {
  return new e({ type: "unknown" });
}
function a1(e, t) {
  return new e({ type: "never", ...Y(t) });
}
function Xs(e, t) {
  return new Eu({ check: "less_than", ...Y(t), value: e, inclusive: false });
}
function Vn(e, t) {
  return new Eu({ check: "less_than", ...Y(t), value: e, inclusive: true });
}
function Js(e, t) {
  return new zu({ check: "greater_than", ...Y(t), value: e, inclusive: false });
}
function Zn(e, t) {
  return new zu({ check: "greater_than", ...Y(t), value: e, inclusive: true });
}
function Qs(e, t) {
  return new ww({ check: "multiple_of", ...Y(t), value: e });
}
function Iu(e, t) {
  return new $w({ check: "max_length", ...Y(t), maximum: e });
}
function Qr(e, t) {
  return new Ew({ check: "min_length", ...Y(t), minimum: e });
}
function Au(e, t) {
  return new zw({ check: "length_equals", ...Y(t), length: e });
}
function s1(e, t) {
  return new Pw({ check: "string_format", format: "regex", ...Y(t), pattern: e });
}
function l1(e) {
  return new Tw({ check: "string_format", format: "lowercase", ...Y(e) });
}
function c1(e) {
  return new _w({ check: "string_format", format: "uppercase", ...Y(e) });
}
function u1(e, t) {
  return new Rw({ check: "string_format", format: "includes", ...Y(t), includes: e });
}
function d1(e, t) {
  return new kw({ check: "string_format", format: "starts_with", ...Y(t), prefix: e });
}
function f1(e, t) {
  return new Iw({ check: "string_format", format: "ends_with", ...Y(t), suffix: e });
}
function qo(e) {
  return new Aw({ check: "overwrite", tx: e });
}
function h1(e) {
  return qo((t) => t.normalize(e));
}
function p1() {
  return qo((e) => e.trim());
}
function m1() {
  return qo((e) => e.toLowerCase());
}
function g1() {
  return qo((e) => e.toUpperCase());
}
function v1() {
  return qo((e) => Py(e));
}
function b1(e, t, o) {
  return new e({ type: "array", element: t, ...Y(o) });
}
function x1(e, t, o) {
  const r = Y(o);
  return r.abort ?? (r.abort = true), new e({ type: "custom", check: "custom", fn: t, ...r });
}
function C1(e, t, o) {
  return new e({ type: "custom", check: "custom", fn: t, ...Y(o) });
}
function y1(e) {
  const t = w1((o) => (o.addIssue = (r) => {
    if (typeof r == "string") o.issues.push(gr(r, o.value, t._zod.def));
    else {
      const n = r;
      n.fatal && (n.continue = false), n.code ?? (n.code = "custom"), n.input ?? (n.input = o.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), o.issues.push(gr(n));
    }
  }, e(o.value, o)));
  return t;
}
function w1(e, t) {
  const o = new st({ check: "custom", ...Y(t) });
  return o._zod.check = e, o;
}
function Ou(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), { processors: e.processors ?? {}, metadataRegistry: (e == null ? void 0 : e.metadata) ?? rr, target: t, unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw", override: (e == null ? void 0 : e.override) ?? (() => {
  }), io: (e == null ? void 0 : e.io) ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: (e == null ? void 0 : e.cycles) ?? "ref", reused: (e == null ? void 0 : e.reused) ?? "inline", external: (e == null ? void 0 : e.external) ?? void 0 };
}
function He(e, t, o = { path: [], schemaPath: [] }) {
  var _a2, _b2;
  var r;
  const n = e._zod.def, i = t.seen.get(e);
  if (i) return i.count++, o.schemaPath.includes(e) && (i.cycle = o.path), i.schema;
  const a = { schema: {}, count: 1, cycle: void 0, path: o.path };
  t.seen.set(e, a);
  const s = (_b2 = (_a2 = e._zod).toJSONSchema) == null ? void 0 : _b2.call(_a2);
  if (s) a.schema = s;
  else {
    const u = { ...o, schemaPath: [...o.schemaPath, e], path: o.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, a.schema, u);
    else {
      const f = a.schema, h = t.processors[n.type];
      if (!h) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);
      h(e, t, f, u);
    }
    const d = e._zod.parent;
    d && (a.ref || (a.ref = d), He(d, t, u), t.seen.get(d).isParent = true);
  }
  const l = t.metadataRegistry.get(e);
  return l && Object.assign(a.schema, l), t.io === "input" && Xe(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((r = a.schema).default ?? (r.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function Mu(e, t) {
  var _a2, _b2, _c2, _d2;
  const o = e.seen.get(t);
  if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const a of e.seen.entries()) {
    const s = (_a2 = e.metadataRegistry.get(a[0])) == null ? void 0 : _a2.id;
    if (s) {
      const l = r.get(s);
      if (l && l !== a[0]) throw new Error(`Duplicate schema id "${s}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(s, a[0]);
    }
  }
  const n = (a) => {
    var _a3;
    const s = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const d = (_a3 = e.external.registry.get(a[0])) == null ? void 0 : _a3.id, f = e.external.uri ?? ((p) => p);
      if (d) return { ref: f(d) };
      const h = a[1].defId ?? a[1].schema.id ?? `schema${e.counter++}`;
      return a[1].defId = h, { defId: h, ref: `${f("__shared")}#/${s}/${h}` };
    }
    if (a[1] === o) return { ref: "#" };
    const c = `#/${s}/`, u = a[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: u, ref: c + u };
  }, i = (a) => {
    if (a[1].schema.$ref) return;
    const s = a[1], { ref: l, defId: c } = n(a);
    s.def = { ...s.schema }, c && (s.defId = c);
    const u = s.schema;
    for (const d in u) delete u[d];
    u.$ref = l;
  };
  if (e.cycles === "throw") for (const a of e.seen.entries()) {
    const s = a[1];
    if (s.cycle) throw new Error(`Cycle detected: #/${(_b2 = s.cycle) == null ? void 0 : _b2.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (const a of e.seen.entries()) {
    const s = a[1];
    if (t === a[0]) {
      i(a);
      continue;
    }
    if (e.external) {
      const c = (_c2 = e.external.registry.get(a[0])) == null ? void 0 : _c2.id;
      if (t !== a[0] && c) {
        i(a);
        continue;
      }
    }
    if ((_d2 = e.metadataRegistry.get(a[0])) == null ? void 0 : _d2.id) {
      i(a);
      continue;
    }
    if (s.cycle) {
      i(a);
      continue;
    }
    if (s.count > 1 && e.reused === "ref") {
      i(a);
      continue;
    }
  }
}
function Du(e, t) {
  var _a2, _b2, _c2;
  const o = e.seen.get(t);
  if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (a) => {
    const s = e.seen.get(a);
    if (s.ref === null) return;
    const l = s.def ?? s.schema, c = { ...l }, u = s.ref;
    if (s.ref = null, u) {
      r(u);
      const f = e.seen.get(u), h = f.schema;
      if (h.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (l.allOf = l.allOf ?? [], l.allOf.push(h)) : Object.assign(l, h), Object.assign(l, c), a._zod.parent === u) for (const m in l) m === "$ref" || m === "allOf" || m in c || delete l[m];
      if (h.$ref) for (const m in l) m === "$ref" || m === "allOf" || m in f.def && JSON.stringify(l[m]) === JSON.stringify(f.def[m]) && delete l[m];
    }
    const d = a._zod.parent;
    if (d && d !== u) {
      r(d);
      const f = e.seen.get(d);
      if ((f == null ? void 0 : f.schema.$ref) && (l.$ref = f.schema.$ref, f.def)) for (const h in l) h === "$ref" || h === "allOf" || h in f.def && JSON.stringify(l[h]) === JSON.stringify(f.def[h]) && delete l[h];
    }
    e.override({ zodSchema: a, jsonSchema: l, path: s.path ?? [] });
  };
  for (const a of [...e.seen.entries()].reverse()) r(a[0]);
  const n = {};
  if (e.target === "draft-2020-12" ? n.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? n.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? n.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (_a2 = e.external) == null ? void 0 : _a2.uri) {
    const a = (_b2 = e.external.registry.get(t)) == null ? void 0 : _b2.id;
    if (!a) throw new Error("Schema is missing an `id` property");
    n.$id = e.external.uri(a);
  }
  Object.assign(n, o.def ?? o.schema);
  const i = ((_c2 = e.external) == null ? void 0 : _c2.defs) ?? {};
  for (const a of e.seen.entries()) {
    const s = a[1];
    s.def && s.defId && (i[s.defId] = s.def);
  }
  e.external || Object.keys(i).length > 0 && (e.target === "draft-2020-12" ? n.$defs = i : n.definitions = i);
  try {
    const a = JSON.parse(JSON.stringify(n));
    return Object.defineProperty(a, "~standard", { value: { ...t["~standard"], jsonSchema: { input: en(t, "input", e.processors), output: en(t, "output", e.processors) } }, enumerable: false, writable: false }), a;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Xe(e, t) {
  const o = t ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(e)) return false;
  o.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform") return true;
  if (r.type === "array") return Xe(r.element, o);
  if (r.type === "set") return Xe(r.valueType, o);
  if (r.type === "lazy") return Xe(r.getter(), o);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return Xe(r.innerType, o);
  if (r.type === "intersection") return Xe(r.left, o) || Xe(r.right, o);
  if (r.type === "record" || r.type === "map") return Xe(r.keyType, o) || Xe(r.valueType, o);
  if (r.type === "pipe") return Xe(r.in, o) || Xe(r.out, o);
  if (r.type === "object") {
    for (const n in r.shape) if (Xe(r.shape[n], o)) return true;
    return false;
  }
  if (r.type === "union") {
    for (const n of r.options) if (Xe(n, o)) return true;
    return false;
  }
  if (r.type === "tuple") {
    for (const n of r.items) if (Xe(n, o)) return true;
    return !!(r.rest && Xe(r.rest, o));
  }
  return false;
}
const S1 = (e, t = {}) => (o) => {
  const r = Ou({ ...o, processors: t });
  return He(e, r), Mu(r, e), Du(r, e);
}, en = (e, t, o = {}) => (r) => {
  const { libraryOptions: n, target: i } = r ?? {}, a = Ou({ ...n ?? {}, target: i, io: t, processors: o });
  return He(e, a), Mu(a, e), Du(a, e);
}, $1 = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, E1 = (e, t, o, r) => {
  const n = o;
  n.type = "string";
  const { minimum: i, maximum: a, format: s, patterns: l, contentEncoding: c } = e._zod.bag;
  if (typeof i == "number" && (n.minLength = i), typeof a == "number" && (n.maxLength = a), s && (n.format = $1[s] ?? s, n.format === "" && delete n.format, s === "time" && delete n.format), c && (n.contentEncoding = c), l && l.size > 0) {
    const u = [...l];
    u.length === 1 ? n.pattern = u[0].source : u.length > 1 && (n.allOf = [...u.map((d) => ({ ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {}, pattern: d.source }))]);
  }
}, z1 = (e, t, o, r) => {
  const n = o, { minimum: i, maximum: a, format: s, multipleOf: l, exclusiveMaximum: c, exclusiveMinimum: u } = e._zod.bag;
  typeof s == "string" && s.includes("int") ? n.type = "integer" : n.type = "number", typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.minimum = u, n.exclusiveMinimum = true) : n.exclusiveMinimum = u), typeof i == "number" && (n.minimum = i, typeof u == "number" && t.target !== "draft-04" && (u >= i ? delete n.minimum : delete n.exclusiveMinimum)), typeof c == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.maximum = c, n.exclusiveMaximum = true) : n.exclusiveMaximum = c), typeof a == "number" && (n.maximum = a, typeof c == "number" && t.target !== "draft-04" && (c <= a ? delete n.maximum : delete n.exclusiveMaximum)), typeof l == "number" && (n.multipleOf = l);
}, P1 = (e, t, o, r) => {
  o.type = "boolean";
}, T1 = (e, t, o, r) => {
  o.not = {};
}, _1 = (e, t, o, r) => {
}, R1 = (e, t, o, r) => {
  const n = e._zod.def, i = pu(n.entries);
  i.every((a) => typeof a == "number") && (o.type = "number"), i.every((a) => typeof a == "string") && (o.type = "string"), o.enum = i;
}, k1 = (e, t, o, r) => {
  if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
}, I1 = (e, t, o, r) => {
  if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
}, A1 = (e, t, o, r) => {
  const n = o, i = e._zod.def, { minimum: a, maximum: s } = e._zod.bag;
  typeof a == "number" && (n.minItems = a), typeof s == "number" && (n.maxItems = s), n.type = "array", n.items = He(i.element, t, { ...r, path: [...r.path, "items"] });
}, O1 = (e, t, o, r) => {
  var _a2;
  const n = o, i = e._zod.def;
  n.type = "object", n.properties = {};
  const a = i.shape;
  for (const c in a) n.properties[c] = He(a[c], t, { ...r, path: [...r.path, "properties", c] });
  const s = new Set(Object.keys(a)), l = new Set([...s].filter((c) => {
    const u = i.shape[c]._zod;
    return t.io === "input" ? u.optin === void 0 : u.optout === void 0;
  }));
  l.size > 0 && (n.required = Array.from(l)), ((_a2 = i.catchall) == null ? void 0 : _a2._zod.def.type) === "never" ? n.additionalProperties = false : i.catchall ? i.catchall && (n.additionalProperties = He(i.catchall, t, { ...r, path: [...r.path, "additionalProperties"] })) : t.io === "output" && (n.additionalProperties = false);
}, M1 = (e, t, o, r) => {
  const n = e._zod.def, i = n.inclusive === false, a = n.options.map((s, l) => He(s, t, { ...r, path: [...r.path, i ? "oneOf" : "anyOf", l] }));
  i ? o.oneOf = a : o.anyOf = a;
}, D1 = (e, t, o, r) => {
  const n = e._zod.def, i = He(n.left, t, { ...r, path: [...r.path, "allOf", 0] }), a = He(n.right, t, { ...r, path: [...r.path, "allOf", 1] }), s = (c) => "allOf" in c && Object.keys(c).length === 1, l = [...s(i) ? i.allOf : [i], ...s(a) ? a.allOf : [a]];
  o.allOf = l;
}, B1 = (e, t, o, r) => {
  var _a2;
  const n = o, i = e._zod.def;
  n.type = "object";
  const a = i.keyType, l = (_a2 = a._zod.bag) == null ? void 0 : _a2.patterns;
  if (i.mode === "loose" && l && l.size > 0) {
    const u = He(i.valueType, t, { ...r, path: [...r.path, "patternProperties", "*"] });
    n.patternProperties = {};
    for (const d of l) n.patternProperties[d.source] = u;
  } else (t.target === "draft-07" || t.target === "draft-2020-12") && (n.propertyNames = He(i.keyType, t, { ...r, path: [...r.path, "propertyNames"] })), n.additionalProperties = He(i.valueType, t, { ...r, path: [...r.path, "additionalProperties"] });
  const c = a._zod.values;
  if (c) {
    const u = [...c].filter((d) => typeof d == "string" || typeof d == "number");
    u.length > 0 && (n.required = u);
  }
}, L1 = (e, t, o, r) => {
  const n = e._zod.def, i = He(n.innerType, t, r), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = n.innerType, o.nullable = true) : o.anyOf = [i, { type: "null" }];
}, F1 = (e, t, o, r) => {
  const n = e._zod.def;
  He(n.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = n.innerType;
}, H1 = (e, t, o, r) => {
  const n = e._zod.def;
  He(n.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = n.innerType, o.default = JSON.parse(JSON.stringify(n.defaultValue));
}, N1 = (e, t, o, r) => {
  const n = e._zod.def;
  He(n.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = n.innerType, t.io === "input" && (o._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
}, W1 = (e, t, o, r) => {
  const n = e._zod.def;
  He(n.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = n.innerType;
  let a;
  try {
    a = n.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = a;
}, j1 = (e, t, o, r) => {
  const n = e._zod.def, i = t.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
  He(i, t, r);
  const a = t.seen.get(e);
  a.ref = i;
}, V1 = (e, t, o, r) => {
  const n = e._zod.def;
  He(n.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = n.innerType, o.readOnly = true;
}, Bu = (e, t, o, r) => {
  const n = e._zod.def;
  He(n.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = n.innerType;
}, Z1 = I("ZodISODateTime", (e, t) => {
  Gw.init(e, t), ke.init(e, t);
});
function U1(e) {
  return JS(Z1, e);
}
const G1 = I("ZodISODate", (e, t) => {
  Kw.init(e, t), ke.init(e, t);
});
function K1(e) {
  return QS(G1, e);
}
const q1 = I("ZodISOTime", (e, t) => {
  qw.init(e, t), ke.init(e, t);
});
function Y1(e) {
  return e1(q1, e);
}
const X1 = I("ZodISODuration", (e, t) => {
  Yw.init(e, t), ke.init(e, t);
});
function J1(e) {
  return t1(X1, e);
}
const Q1 = (e, t) => {
  bu.init(e, t), e.name = "ZodError", Object.defineProperties(e, { format: { value: (o) => Hy(e, o) }, flatten: { value: (o) => Fy(e, o) }, addIssue: { value: (o) => {
    e.issues.push(o), e.message = JSON.stringify(e.issues, xi, 2);
  } }, addIssues: { value: (o) => {
    e.issues.push(...o), e.message = JSON.stringify(e.issues, xi, 2);
  } }, isEmpty: { get() {
    return e.issues.length === 0;
  } } });
}, mt = I("ZodError", Q1, { Parent: Error }), e$ = ra(mt), t$ = na(mt), o$ = mn(mt), r$ = gn(mt), n$ = jy(mt), i$ = Vy(mt), a$ = Zy(mt), s$ = Uy(mt), l$ = Gy(mt), c$ = Ky(mt), u$ = qy(mt), d$ = Yy(mt), Me = I("ZodType", (e, t) => (Oe.init(e, t), Object.assign(e["~standard"], { jsonSchema: { input: en(e, "input"), output: en(e, "output") } }), e.toJSONSchema = S1(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...o) => e.clone(io(t, { checks: [...t.checks ?? [], ...o.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)] }), { parent: true }), e.with = e.check, e.clone = (o, r) => ao(e, o, r), e.brand = () => e, e.register = ((o, r) => (o.add(e, r), e)), e.parse = (o, r) => e$(e, o, r, { callee: e.parse }), e.safeParse = (o, r) => o$(e, o, r), e.parseAsync = async (o, r) => t$(e, o, r, { callee: e.parseAsync }), e.safeParseAsync = async (o, r) => r$(e, o, r), e.spa = e.safeParseAsync, e.encode = (o, r) => n$(e, o, r), e.decode = (o, r) => i$(e, o, r), e.encodeAsync = async (o, r) => a$(e, o, r), e.decodeAsync = async (o, r) => s$(e, o, r), e.safeEncode = (o, r) => l$(e, o, r), e.safeDecode = (o, r) => c$(e, o, r), e.safeEncodeAsync = async (o, r) => u$(e, o, r), e.safeDecodeAsync = async (o, r) => d$(e, o, r), e.refine = (o, r) => e.check(i2(o, r)), e.superRefine = (o) => e.check(a2(o)), e.overwrite = (o) => e.check(qo(o)), e.optional = () => rl(e), e.exactOptional = () => U$(e), e.nullable = () => nl(e), e.nullish = () => rl(nl(e)), e.nonoptional = (o) => J$(e, o), e.array = () => tn(e), e.or = (o) => L$([e, o]), e.and = (o) => H$(e, o), e.transform = (o) => il(e, V$(o)), e.default = (o) => q$(e, o), e.prefault = (o) => X$(e, o), e.catch = (o) => e2(e, o), e.pipe = (o) => il(e, o), e.readonly = () => r2(e), e.describe = (o) => {
  const r = e.clone();
  return rr.add(r, { description: o }), r;
}, Object.defineProperty(e, "description", { get() {
  var _a2;
  return (_a2 = rr.get(e)) == null ? void 0 : _a2.description;
}, configurable: true }), e.meta = (...o) => {
  if (o.length === 0) return rr.get(e);
  const r = e.clone();
  return rr.add(r, o[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (o) => o(e), e)), Lu = I("_ZodString", (e, t) => {
  ia.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (r, n, i) => E1(e, r, n);
  const o = e._zod.bag;
  e.format = o.format ?? null, e.minLength = o.minimum ?? null, e.maxLength = o.maximum ?? null, e.regex = (...r) => e.check(s1(...r)), e.includes = (...r) => e.check(u1(...r)), e.startsWith = (...r) => e.check(d1(...r)), e.endsWith = (...r) => e.check(f1(...r)), e.min = (...r) => e.check(Qr(...r)), e.max = (...r) => e.check(Iu(...r)), e.length = (...r) => e.check(Au(...r)), e.nonempty = (...r) => e.check(Qr(1, ...r)), e.lowercase = (r) => e.check(l1(r)), e.uppercase = (r) => e.check(c1(r)), e.trim = () => e.check(p1()), e.normalize = (...r) => e.check(h1(...r)), e.toLowerCase = () => e.check(m1()), e.toUpperCase = () => e.check(g1()), e.slugify = () => e.check(v1());
}), f$ = I("ZodString", (e, t) => {
  ia.init(e, t), Lu.init(e, t), e.email = (o) => e.check(kS(h$, o)), e.url = (o) => e.check(DS(p$, o)), e.jwt = (o) => e.check(XS(_$, o)), e.emoji = (o) => e.check(BS(m$, o)), e.guid = (o) => e.check(Ys(el, o)), e.uuid = (o) => e.check(IS(Fr, o)), e.uuidv4 = (o) => e.check(AS(Fr, o)), e.uuidv6 = (o) => e.check(OS(Fr, o)), e.uuidv7 = (o) => e.check(MS(Fr, o)), e.nanoid = (o) => e.check(LS(g$, o)), e.guid = (o) => e.check(Ys(el, o)), e.cuid = (o) => e.check(FS(v$, o)), e.cuid2 = (o) => e.check(HS(b$, o)), e.ulid = (o) => e.check(NS(x$, o)), e.base64 = (o) => e.check(KS(z$, o)), e.base64url = (o) => e.check(qS(P$, o)), e.xid = (o) => e.check(WS(C$, o)), e.ksuid = (o) => e.check(jS(y$, o)), e.ipv4 = (o) => e.check(VS(w$, o)), e.ipv6 = (o) => e.check(ZS(S$, o)), e.cidrv4 = (o) => e.check(US($$, o)), e.cidrv6 = (o) => e.check(GS(E$, o)), e.e164 = (o) => e.check(YS(T$, o)), e.datetime = (o) => e.check(U1(o)), e.date = (o) => e.check(K1(o)), e.time = (o) => e.check(Y1(o)), e.duration = (o) => e.check(J1(o));
});
function Wt(e) {
  return RS(f$, e);
}
const ke = I("ZodStringFormat", (e, t) => {
  ze.init(e, t), Lu.init(e, t);
}), h$ = I("ZodEmail", (e, t) => {
  Lw.init(e, t), ke.init(e, t);
}), el = I("ZodGUID", (e, t) => {
  Dw.init(e, t), ke.init(e, t);
}), Fr = I("ZodUUID", (e, t) => {
  Bw.init(e, t), ke.init(e, t);
}), p$ = I("ZodURL", (e, t) => {
  Fw.init(e, t), ke.init(e, t);
}), m$ = I("ZodEmoji", (e, t) => {
  Hw.init(e, t), ke.init(e, t);
}), g$ = I("ZodNanoID", (e, t) => {
  Nw.init(e, t), ke.init(e, t);
}), v$ = I("ZodCUID", (e, t) => {
  Ww.init(e, t), ke.init(e, t);
}), b$ = I("ZodCUID2", (e, t) => {
  jw.init(e, t), ke.init(e, t);
}), x$ = I("ZodULID", (e, t) => {
  Vw.init(e, t), ke.init(e, t);
}), C$ = I("ZodXID", (e, t) => {
  Zw.init(e, t), ke.init(e, t);
}), y$ = I("ZodKSUID", (e, t) => {
  Uw.init(e, t), ke.init(e, t);
}), w$ = I("ZodIPv4", (e, t) => {
  Xw.init(e, t), ke.init(e, t);
}), S$ = I("ZodIPv6", (e, t) => {
  Jw.init(e, t), ke.init(e, t);
}), $$ = I("ZodCIDRv4", (e, t) => {
  Qw.init(e, t), ke.init(e, t);
}), E$ = I("ZodCIDRv6", (e, t) => {
  eS.init(e, t), ke.init(e, t);
}), z$ = I("ZodBase64", (e, t) => {
  tS.init(e, t), ke.init(e, t);
}), P$ = I("ZodBase64URL", (e, t) => {
  rS.init(e, t), ke.init(e, t);
}), T$ = I("ZodE164", (e, t) => {
  nS.init(e, t), ke.init(e, t);
}), _$ = I("ZodJWT", (e, t) => {
  aS.init(e, t), ke.init(e, t);
}), Fu = I("ZodNumber", (e, t) => {
  Tu.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (r, n, i) => z1(e, r, n), e.gt = (r, n) => e.check(Js(r, n)), e.gte = (r, n) => e.check(Zn(r, n)), e.min = (r, n) => e.check(Zn(r, n)), e.lt = (r, n) => e.check(Xs(r, n)), e.lte = (r, n) => e.check(Vn(r, n)), e.max = (r, n) => e.check(Vn(r, n)), e.int = (r) => e.check(tl(r)), e.safe = (r) => e.check(tl(r)), e.positive = (r) => e.check(Js(0, r)), e.nonnegative = (r) => e.check(Zn(0, r)), e.negative = (r) => e.check(Xs(0, r)), e.nonpositive = (r) => e.check(Vn(0, r)), e.multipleOf = (r, n) => e.check(Qs(r, n)), e.step = (r, n) => e.check(Qs(r, n)), e.finite = () => e;
  const o = e._zod.bag;
  e.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), e.isFinite = true, e.format = o.format ?? null;
});
function Ce(e) {
  return o1(Fu, e);
}
const R$ = I("ZodNumberFormat", (e, t) => {
  sS.init(e, t), Fu.init(e, t);
});
function tl(e) {
  return r1(R$, e);
}
const k$ = I("ZodBoolean", (e, t) => {
  lS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => P1(e, o, r);
});
function Hu(e) {
  return n1(k$, e);
}
const I$ = I("ZodUnknown", (e, t) => {
  cS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => _1();
});
function ol() {
  return i1(I$);
}
const A$ = I("ZodNever", (e, t) => {
  uS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => T1(e, o, r);
});
function O$(e) {
  return a1(A$, e);
}
const M$ = I("ZodArray", (e, t) => {
  dS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => A1(e, o, r, n), e.element = t.element, e.min = (o, r) => e.check(Qr(o, r)), e.nonempty = (o) => e.check(Qr(1, o)), e.max = (o, r) => e.check(Iu(o, r)), e.length = (o, r) => e.check(Au(o, r)), e.unwrap = () => e.element;
});
function tn(e, t) {
  return b1(M$, e, t);
}
const D$ = I("ZodObject", (e, t) => {
  hS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => O1(e, o, r, n), me(e, "shape", () => t.shape), e.keyof = () => Nu(Object.keys(e._zod.def.shape)), e.catchall = (o) => e.clone({ ...e._zod.def, catchall: o }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ol() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ol() }), e.strict = () => e.clone({ ...e._zod.def, catchall: O$() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (o) => Oy(e, o), e.safeExtend = (o) => My(e, o), e.merge = (o) => Dy(e, o), e.pick = (o) => Iy(e, o), e.omit = (o) => Ay(e, o), e.partial = (...o) => By(Wu, e, o[0]), e.required = (...o) => Ly(ju, e, o[0]);
});
function Vo(e, t) {
  const o = { type: "object", shape: e ?? {}, ...Y(t) };
  return new D$(o);
}
const B$ = I("ZodUnion", (e, t) => {
  pS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => M1(e, o, r, n), e.options = t.options;
});
function L$(e, t) {
  return new B$({ type: "union", options: e, ...Y(t) });
}
const F$ = I("ZodIntersection", (e, t) => {
  mS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => D1(e, o, r, n);
});
function H$(e, t) {
  return new F$({ type: "intersection", left: e, right: t });
}
const N$ = I("ZodRecord", (e, t) => {
  gS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => B1(e, o, r, n), e.keyType = t.keyType, e.valueType = t.valueType;
});
function W$(e, t, o) {
  return new N$({ type: "record", keyType: e, valueType: t, ...Y(o) });
}
const yi = I("ZodEnum", (e, t) => {
  vS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (r, n, i) => R1(e, r, n), e.enum = t.entries, e.options = Object.values(t.entries);
  const o = new Set(Object.keys(t.entries));
  e.extract = (r, n) => {
    const i = {};
    for (const a of r) if (o.has(a)) i[a] = t.entries[a];
    else throw new Error(`Key ${a} not found in enum`);
    return new yi({ ...t, checks: [], ...Y(n), entries: i });
  }, e.exclude = (r, n) => {
    const i = { ...t.entries };
    for (const a of r) if (o.has(a)) delete i[a];
    else throw new Error(`Key ${a} not found in enum`);
    return new yi({ ...t, checks: [], ...Y(n), entries: i });
  };
});
function Nu(e, t) {
  const o = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new yi({ type: "enum", entries: o, ...Y(t) });
}
const j$ = I("ZodTransform", (e, t) => {
  bS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => I1(e, o), e._zod.parse = (o, r) => {
    if (r.direction === "backward") throw new fu(e.constructor.name);
    o.addIssue = (i) => {
      if (typeof i == "string") o.issues.push(gr(i, o.value, t));
      else {
        const a = i;
        a.fatal && (a.continue = false), a.code ?? (a.code = "custom"), a.input ?? (a.input = o.value), a.inst ?? (a.inst = e), o.issues.push(gr(a));
      }
    };
    const n = t.transform(o.value, o);
    return n instanceof Promise ? n.then((i) => (o.value = i, o)) : (o.value = n, o);
  };
});
function V$(e) {
  return new j$({ type: "transform", transform: e });
}
const Wu = I("ZodOptional", (e, t) => {
  ku.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => Bu(e, o, r, n), e.unwrap = () => e._zod.def.innerType;
});
function rl(e) {
  return new Wu({ type: "optional", innerType: e });
}
const Z$ = I("ZodExactOptional", (e, t) => {
  xS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => Bu(e, o, r, n), e.unwrap = () => e._zod.def.innerType;
});
function U$(e) {
  return new Z$({ type: "optional", innerType: e });
}
const G$ = I("ZodNullable", (e, t) => {
  CS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => L1(e, o, r, n), e.unwrap = () => e._zod.def.innerType;
});
function nl(e) {
  return new G$({ type: "nullable", innerType: e });
}
const K$ = I("ZodDefault", (e, t) => {
  yS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => H1(e, o, r, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function q$(e, t) {
  return new K$({ type: "default", innerType: e, get defaultValue() {
    return typeof t == "function" ? t() : gu(t);
  } });
}
const Y$ = I("ZodPrefault", (e, t) => {
  wS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => N1(e, o, r, n), e.unwrap = () => e._zod.def.innerType;
});
function X$(e, t) {
  return new Y$({ type: "prefault", innerType: e, get defaultValue() {
    return typeof t == "function" ? t() : gu(t);
  } });
}
const ju = I("ZodNonOptional", (e, t) => {
  SS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => F1(e, o, r, n), e.unwrap = () => e._zod.def.innerType;
});
function J$(e, t) {
  return new ju({ type: "nonoptional", innerType: e, ...Y(t) });
}
const Q$ = I("ZodCatch", (e, t) => {
  $S.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => W1(e, o, r, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function e2(e, t) {
  return new Q$({ type: "catch", innerType: e, catchValue: typeof t == "function" ? t : () => t });
}
const t2 = I("ZodPipe", (e, t) => {
  ES.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => j1(e, o, r, n), e.in = t.in, e.out = t.out;
});
function il(e, t) {
  return new t2({ type: "pipe", in: e, out: t });
}
const o2 = I("ZodReadonly", (e, t) => {
  zS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => V1(e, o, r, n), e.unwrap = () => e._zod.def.innerType;
});
function r2(e) {
  return new o2({ type: "readonly", innerType: e });
}
const Vu = I("ZodCustom", (e, t) => {
  PS.init(e, t), Me.init(e, t), e._zod.processJSONSchema = (o, r, n) => k1(e, o);
});
function n2(e, t) {
  return x1(Vu, e ?? (() => true), t);
}
function i2(e, t = {}) {
  return C1(Vu, e, t);
}
function a2(e) {
  return y1(e);
}
const Zu = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
Vo({ id: Wt().regex(Zu), routeId: Wt(), point: n2((e) => {
  const t = e;
  return typeof t.latitude == "number" && typeof t.longitude == "number";
}), timestamp: Ce().positive(), sequence: Ce().int().nonnegative(), merged: Hu(), distanceIncrement: Ce().nonnegative().optional() });
Vo({ routeId: Wt(), lastMergeTime: Ce().positive(), unmergedCount: Ce().int().nonnegative(), lastSequence: Ce().int().nonnegative(), totalPoints: Ce().int().nonnegative(), checksum: Wt().optional() });
Vo({ id: Wt().regex(Zu), routeId: Wt(), startSequence: Ce().int().nonnegative(), endSequence: Ce().int().nonnegative(), pointCount: Ce().int().positive(), distanceAdded: Ce().nonnegative(), mergeTime: Ce().positive(), status: Nu(["pending", "completed", "failed"]), error: Wt().optional() });
Vo({ appendLatency: tn(Ce().positive()), mergeDuration: tn(Ce().positive()), logSizePerRoute: W$(Wt(), Ce().int().nonnegative()), failedAppends: Ce().int().nonnegative(), failedMerges: Ce().int().nonnegative(), recoveryEvents: Ce().int().nonnegative(), mergeFrequency: Ce(), compressionRatio: Ce(), memoryUsage: Ce() });
Vo({ initialized: Hu(), version: Ce().int().positive(), lastMergeTime: Ce().positive(), activeRoutes: tn(Wt()), statistics: Vo({ writesPerSecond: Ce(), averageLogSize: Ce(), mergeDuration: Ce() }) });
const Dt = { FLUSH_THRESHOLD: 10, FLUSH_DELAY_MS: 100, MERGE_TIME_INTERVAL_MS: 3e4, MERGE_SIZE_THRESHOLD: 100, MAX_RETRIES: 3, RETRY_BASE_DELAY_MS: 1e3, MAX_LATENCY_SAMPLES: 100, MAX_CACHE_SIZE: 100 };
class s2 {
  constructor() {
    __publicField(this, "writeBuffer", /* @__PURE__ */ new Map());
    __publicField(this, "flushTimeouts", /* @__PURE__ */ new Map());
    __publicField(this, "sequenceCache", /* @__PURE__ */ new Map());
    __publicField(this, "flushingRoutes", /* @__PURE__ */ new Set());
    __publicField(this, "metrics", { appendLatency: [], mergeDuration: [], logSizePerRoute: {}, failedAppends: 0, failedMerges: 0, recoveryEvents: 0, mergeFrequency: 0, compressionRatio: 1, memoryUsage: 0 });
  }
  async appendPoint(t, o) {
    const r = performance.now();
    try {
      const n = await this.createLogEntry(t, o);
      this.addToBuffer(t, n), this.writeBuffer.get(t).length >= Dt.FLUSH_THRESHOLD ? await this.flushBuffer(t) : this.scheduleFlush(t), this.scheduleMerge(t);
    } catch (n) {
      throw this.metrics.failedAppends++, console.error(`[WAL] Failed to append point to route ${t}:`, n), n;
    } finally {
      const n = performance.now() - r;
      this.recordAppendLatency(n);
    }
  }
  async createLogEntry(t, o) {
    const r = await this.getNextSequence(t);
    return { id: crypto.randomUUID(), routeId: t, point: o, timestamp: Date.now(), sequence: r, merged: false };
  }
  async getNextSequence(t) {
    if (this.sequenceCache.has(t)) {
      const n = this.sequenceCache.get(t) + 1;
      return this.sequenceCache.set(t, n), n;
    }
    const r = (await this.getOrCreateMetadata(t)).lastSequence + 1;
    return this.sequenceCache.set(t, r), r;
  }
  addToBuffer(t, o) {
    this.writeBuffer.has(t) || this.writeBuffer.set(t, []), this.writeBuffer.get(t).push(o);
  }
  scheduleFlush(t) {
    if (this.flushTimeouts.has(t)) {
      const r = this.flushTimeouts.get(t);
      clearTimeout(r);
    }
    if (this.flushTimeouts.has(t)) return;
    const o = setTimeout(async () => {
      await this.flushBuffer(t);
    }, Dt.FLUSH_DELAY_MS);
    this.flushTimeouts.set(t, o);
  }
  async flushBuffer(t) {
    const o = this.writeBuffer.get(t);
    if (!o || o.length === 0) return;
    if (this.writeBuffer.delete(t), this.flushTimeouts.has(t)) {
      const a = this.flushTimeouts.get(t);
      clearTimeout(a), this.flushTimeouts.delete(t);
    }
    const n = [...await Re(`route:${t}:log`) || [], ...o];
    await se(`route:${t}:log`, n);
    const i = await this.getOrCreateMetadata(t);
    i.unmergedCount += o.length, i.totalPoints += o.length, i.lastSequence = o[o.length - 1].sequence, await se(`route:${t}:metadata`, i), await this.markRouteActive(t), this.updateLogSize(t, n.length);
  }
  async getOrCreateMetadata(t) {
    const o = await Re(`route:${t}:metadata`);
    if (o) return o;
    const r = { routeId: t, lastMergeTime: Date.now(), unmergedCount: 0, lastSequence: 0, totalPoints: 0 };
    return await se(`route:${t}:metadata`, r), r;
  }
  async markRouteActive(t) {
    const o = await Re("wal:activeRoutes") || [];
    o.includes(t) || (o.push(t), await se("wal:activeRoutes", o));
  }
  scheduleMerge(t) {
    typeof window < "u" && typeof document < "u" && this.scheduleMergeWithRetry(t, 0);
  }
  scheduleMergeWithRetry(t, o) {
    Md(async () => {
      const { MergeProcessor: r } = await Promise.resolve().then(() => l2);
      return { MergeProcessor: r };
    }, void 0, import.meta.url).then(({ MergeProcessor: r }) => {
      r.getInstance().scheduleMerge(t);
    }).catch((r) => {
      console.warn(`[WAL] Could not schedule merge for route ${t} (attempt ${o + 1}):`, r), o < Dt.MAX_RETRIES ? setTimeout(() => {
        this.scheduleMergeWithRetry(t, o + 1);
      }, Dt.RETRY_BASE_DELAY_MS * Math.pow(2, o)) : (console.error(`[WAL] Failed to schedule merge for route ${t} after ${Dt.MAX_RETRIES} attempts`), this.metrics.failedMerges++);
    });
  }
  async getUnmergedEntries(t) {
    return (await Re(`route:${t}:log`) || []).filter((r) => !r.merged);
  }
  async markEntriesAsMerged(t, o) {
    const r = await Re(`route:${t}:log`) || [], n = new Set(o.map((i) => i.id));
    for (const i of r) n.has(i.id) && (i.merged = true);
    await se(`route:${t}:log`, r);
  }
  async cleanupMergedEntries(t) {
    const o = await Re(`route:${t}:log`) || [], r = o.filter((n) => !n.merged);
    r.length < o.length && (await se(`route:${t}:log`, r), this.updateLogSize(t, r.length));
  }
  updateLogSize(t, o) {
    this.metrics.logSizePerRoute[t] = o;
  }
  recordAppendLatency(t) {
    this.metrics.appendLatency.push(t), this.metrics.appendLatency.length > Dt.MAX_LATENCY_SAMPLES && (this.metrics.appendLatency = this.metrics.appendLatency.slice(-100));
  }
  getMetrics() {
    return { ...this.metrics };
  }
  getBufferSize(t) {
    var _a2;
    return ((_a2 = this.writeBuffer.get(t)) == null ? void 0 : _a2.length) || 0;
  }
  async getMetadata(t) {
    return Re(`route:${t}:metadata`);
  }
}
const Pt = new s2();
const _mo = class _mo {
  constructor() {
    __publicField(this, "mergeQueue", []);
    __publicField(this, "isProcessing", false);
    __publicField(this, "lastMergeTime", 0);
    __publicField(this, "mergeCount", 0);
  }
  static getInstance() {
    return _mo.instance || (_mo.instance = new _mo()), _mo.instance;
  }
  scheduleMerge(t, o = "normal") {
    const r = this.mergeQueue.find((i) => i.routeId === t);
    if (r) {
      o === "high" && (r.priority = "high", r.scheduledTime = Date.now());
      return;
    }
    const n = { routeId: t, priority: o, scheduledTime: Date.now(), attempts: 0 };
    this.mergeQueue.push(n), this.processQueue();
  }
  async processQueue() {
    if (!(this.isProcessing || this.mergeQueue.length === 0)) {
      this.isProcessing = true;
      try {
        for (this.mergeQueue.sort((t, o) => {
          const r = { high: 0, normal: 1, low: 2 };
          return r[t.priority] !== r[o.priority] ? r[t.priority] - r[o.priority] : t.scheduledTime - o.scheduledTime;
        }); this.mergeQueue.length > 0; ) {
          const t = this.mergeQueue.shift();
          try {
            await this.mergeRoute(t.routeId), t.attempts = 0;
          } catch (o) {
            console.error(`[MergeProcessor] Merge failed for route ${t.routeId}:`, o), t.attempts++, t.attempts < Dt.MAX_RETRIES ? (t.scheduledTime = Date.now() + Dt.RETRY_BASE_DELAY_MS * Math.pow(2, t.attempts), this.mergeQueue.push(t)) : await this.recordMergeFailure(t.routeId, o);
          }
        }
      } finally {
        this.isProcessing = false;
      }
    }
  }
  async mergeRoute(t) {
    const o = performance.now(), r = crypto.randomUUID(), n = { id: r, routeId: t, startSequence: 0, endSequence: 0, pointCount: 0, distanceAdded: 0, mergeTime: Date.now(), status: "pending" }, [i, a, s] = await Promise.all([Re("sketches"), Pt.getUnmergedEntries(t), Pt.getMetadata(t)]);
    if (!i || !s) throw new Error(`Missing data for route ${t}`);
    if (a.length === 0) {
      n.status = "completed", await se(`route:${t}:batches:${r}`, n);
      return;
    }
    const l = i.map((g) => xt.fromStorage(g)), c = l.findIndex((g) => g.routes.routes.some((v) => v.id === t));
    if (c === -1) throw new Error(`Route ${t} not found in sketches`);
    const u = l[c].routes.routes.findIndex((g) => g.id === t), d = l[c].routes.routes[u], f = d.points.length > 0 ? d.points[d.points.length - 1] : null;
    let h = 0;
    const p = [];
    for (let g = 0; g < a.length; g++) {
      const v = a[g], x = g === 0 && f ? f : a[g - 1].point, $ = qn({ longitude: x.longitude, latitude: x.latitude }, { longitude: v.point.longitude, latitude: v.point.latitude });
      h += $, v.distanceIncrement = $, p.push(v.point);
    }
    d.points.push(...p), d.meta.distance = (d.meta.distance || 0) + h, d.meta.modification_timestamp = Date.now(), a.forEach((g) => g.merged = true), n.startSequence = a[0].sequence, n.endSequence = a[a.length - 1].sequence, n.pointCount = a.length, n.distanceAdded = h, await this.saveMergeTransaction(l, t, a, s, n), await Pt.cleanupMergedEntries(t), this.mergeCount++, this.lastMergeTime = Date.now();
    const m = performance.now() - o;
    console.info(`[MergeProcessor] Merged ${a.length} points into route ${t} in ${m.toFixed(2)}ms`);
  }
  async saveMergeTransaction(t, o, r, n, i) {
    const a = { sketches: JSON.parse(JSON.stringify(t.map((s) => s.toStorage()))), logEntries: JSON.parse(JSON.stringify(r)), metadata: JSON.parse(JSON.stringify(n)) };
    try {
      n.unmergedCount -= r.length, n.lastMergeTime = Date.now();
      const s = [se("sketches", t.map((l) => l.toStorage())), se(`route:${o}:log`, r), se(`route:${o}:metadata`, n), se(`route:${o}:batches:${i.id}`, i)];
      await Promise.all(s), i.status = "completed", await se(`route:${o}:batches:${i.id}`, i);
    } catch (s) {
      throw await Promise.all([se("sketches", a.sketches), se(`route:${o}:log`, a.logEntries), se(`route:${o}:metadata`, a.metadata)]), i.status = "failed", i.error = s instanceof Error ? s.message : "Unknown error", await se(`route:${o}:batches:${i.id}`, i), s;
    }
  }
  async recordMergeFailure(t, o) {
    console.error(`[MergeProcessor] Recording merge failure for route ${t}:`, o);
  }
  async forceMerge(t) {
    (await Pt.getUnmergedEntries(t)).length > 0 && await this.mergeRoute(t);
  }
  getQueueLength() {
    return this.mergeQueue.length;
  }
  getMergeCount() {
    return this.mergeCount;
  }
  getLastMergeTime() {
    return this.lastMergeTime;
  }
};
__publicField(_mo, "instance");
let mo = _mo;
const Uu = mo.getInstance(), l2 = Object.freeze(Object.defineProperty({ __proto__: null, MergeProcessor: mo, MergeProcessorInstance: Uu }, Symbol.toStringTag, { value: "Module" }));
const _Ao = class _Ao {
  constructor() {
    __publicField(this, "routeCache", /* @__PURE__ */ new Map());
    __publicField(this, "cacheTimeout", 5e3);
    __publicField(this, "maxCacheSize", Dt.MAX_CACHE_SIZE);
  }
  static getInstance() {
    return _Ao.instance || (_Ao.instance = new _Ao()), _Ao.instance;
  }
  async getRoute(t) {
    const o = this.routeCache.get(t);
    if (o && Date.now() - o.timestamp < this.cacheTimeout) return o.accessCount++, o.route;
    const r = await this.getMainRoute(t);
    if (!r) return null;
    const i = await Pt.getUnmergedEntries(t) ?? [];
    if (i.length === 0) return this.addToCache(t, r), r;
    const a = await this.combineRouteWithLog(r, i);
    return this.addToCache(t, a), a;
  }
  addToCache(t, o) {
    this.routeCache.size >= this.maxCacheSize && this.evictOldestEntry(), this.routeCache.set(t, { route: o, timestamp: Date.now(), accessCount: 1 });
  }
  evictOldestEntry() {
    let t = null, o = 1 / 0, r = 1 / 0;
    for (const [n, i] of this.routeCache.entries()) (i.accessCount < o || i.accessCount === o && i.timestamp < r) && (t = n, o = i.accessCount, r = i.timestamp);
    t && this.routeCache.delete(t);
  }
  async getMainRoute(t) {
    const o = await Re("sketches");
    if (!o) return null;
    const r = o.map((n) => xt.fromStorage(n));
    for (const n of r) {
      const i = n.routes.routes.find((a) => a.id === t);
      if (i) return i;
    }
    return null;
  }
  async combineRouteWithLog(t, o) {
    var _a2;
    const r = o.map((l) => l.point), n = [...t.points, ...r];
    let i = 0;
    for (let l = 1; l < o.length; l++) {
      const c = o[l - 1].point, u = o[l].point;
      i += qn({ longitude: c.longitude, latitude: c.latitude }, { longitude: u.longitude, latitude: u.latitude });
    }
    o.length > 0 && t.points.length > 0 && (i += qn({ longitude: t.points[t.points.length - 1].longitude, latitude: t.points[t.points.length - 1].latitude }, { longitude: o[0].point.longitude, latitude: o[0].point.latitude }));
    const s = (t.meta.distance || 0) + i;
    return { ...t, points: n, meta: { ...t.meta, distance: s, modification_timestamp: Math.max(t.meta.modification_timestamp, ((_a2 = o[o.length - 1]) == null ? void 0 : _a2.timestamp) || 0) } };
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
__publicField(_Ao, "instance");
let Ao = _Ao;
const al = Ao.getInstance();
const _Oo = class _Oo {
  constructor() {
  }
  static getInstance() {
    return _Oo.instance || (_Oo.instance = new _Oo()), _Oo.instance;
  }
  async recover() {
    console.info("[CrashRecovery] Starting recovery process...");
    const t = [];
    let o = 0, r = 0;
    try {
      const n = await this.findPendingBatches();
      for (const a of n) try {
        await this.recoverMerge(a.routeId, a.id), o++, t.push(`Route ${a.routeId}: recovered merge ${a.id}`);
      } catch (s) {
        r++;
        const l = s instanceof Error ? s.message : "Unknown error";
        t.push(`Route ${a.routeId}: failed to recover merge - ${l}`), console.error(`[CrashRecovery] Failed to recover merge for route ${a.routeId}:`, s);
      }
      const i = await Re("wal:activeRoutes") || [];
      for (const a of i) try {
        await this.validateRouteLog(a);
      } catch (s) {
        r++;
        const l = s instanceof Error ? s.message : "Unknown error";
        t.push(`Route ${a}: validation failed - ${l}`), console.error(`[CrashRecovery] Failed to validate route ${a}:`, s);
      }
      await this.rebuildStatistics(), console.info(`[CrashRecovery] Recovery complete: ${o} recovered, ${r} failed`);
    } catch (n) {
      console.error("[CrashRecovery] Fatal error during recovery:", n), t.push(`Fatal error: ${String(n)}`);
    }
    return { recoveredRoutes: o, failedRoutes: r, details: t };
  }
  async findPendingBatches() {
    const t = await Re("wal:activeRoutes") || [], o = [];
    for (const r of t) {
      const n = await Pt.getMetadata(r);
      if (n && n.unmergedCount > 0) {
        const i = await this.findBatchesForRoute(r);
        for (const a of i) {
          const s = await Re(`route:${r}:batches:${a}`);
          s && s.status === "pending" && o.push(s);
        }
      }
    }
    return o;
  }
  async findBatchesForRoute(t) {
    const o = [], r = `route:${t}:batches:`;
    for (let n = 0; n < 100 && await Re(`${r}${n}`); n++) o.push(`${n}`);
    return o;
  }
  async recoverMerge(t, o) {
    console.info(`[CrashRecovery] Recovering merge for route ${t}, batch ${o}`);
    const r = await Re(`route:${t}:batches:${o}`);
    if (!r || r.status !== "pending") return;
    if (!await Pt.getMetadata(t)) throw new Error(`No metadata found for route ${t}`);
    const a = (await Re(`route:${t}:log`) || []).filter((s) => !s.merged);
    if (a.length === 0) {
      r.status = "completed", await se(`route:${t}:batches:${r.id}`, r);
      return;
    }
    console.info(`[CrashRecovery] Re-executing merge for ${a.length} entries`), await Uu.mergeRoute(t);
  }
  async validateRouteLog(t) {
    const [o, r] = await Promise.all([Re(`route:${t}:log`), Pt.getMetadata(t)]);
    if (!o || !r) {
      console.warn(`[CrashRecovery] Corrupted or missing data for route ${t}, attempting rebuild`), await this.rebuildRouteLog(t);
      return;
    }
    const n = o.filter((a) => !a.merged).length;
    n !== r.unmergedCount && (console.warn(`[CrashRecovery] Count mismatch for route ${t}: expected ${r.unmergedCount}, found ${n}`), r.unmergedCount = n, await se(`route:${t}:metadata`, r));
    const i = [...o].sort((a, s) => a.sequence - s.sequence);
    this.validateSequenceContinuity(i);
  }
  validateSequenceContinuity(t) {
    for (let o = 1; o < t.length; o++) t[o].sequence !== t[o - 1].sequence + 1 && (console.warn(`[CrashRecovery] Sequence gap detected at index ${o}: ${t[o - 1].sequence} -> ${t[o].sequence}`), this.fixSequenceGap(t, o), o = 0);
  }
  fixSequenceGap(t, o) {
    const r = t[o - 1].sequence + 1;
    if (t.find((i) => i.sequence === r)) {
      console.info(`[CrashRecovery] Found duplicate entry at sequence ${r}, removing duplicate`);
      const i = [];
      let a = false;
      for (let s = o; s < t.length; s++) t[s].sequence === r && (a ? i.push(t[s]) : a = true);
      for (const s of i) {
        const l = t.indexOf(s);
        l !== -1 && t.splice(l, 1);
      }
    } else {
      console.info(`[CrashRecovery] Inserting placeholder entry for missing sequence ${r}`);
      const i = { id: crypto.randomUUID(), routeId: t[0].routeId, point: t[o - 1].point, timestamp: Date.now(), sequence: r, merged: false };
      t.splice(o, 0, i);
    }
  }
  async rebuildRouteLog(t) {
    console.info(`[CrashRecovery] Rebuilding route log for ${t}`);
    const o = await Pt.getMetadata(t);
    o && (o.unmergedCount = 0, o.lastSequence = 0, await se(`route:${t}:metadata`, o)), await se(`route:${t}:log`, []);
  }
  async rebuildStatistics() {
    const t = await Re("wal:activeRoutes") || [];
    let o = 0;
    for (const r of t) {
      const n = await Re(`route:${r}:log`) || [];
      o += n.length;
    }
    await se("wal:lastMergeTime", Date.now()), await se("wal:statistics", { writesPerSecond: 0, averageLogSize: t.length > 0 ? o / t.length : 0, mergeDuration: 0 });
  }
};
__publicField(_Oo, "instance");
let Oo = _Oo;
const c2 = Oo.getInstance(), uE = gl("sketches", () => {
  const e = W([]), t = W(null), o = W(null), r = D(() => {
    if (!t.value) return null;
    const y = e.value.find((R) => R.id === t.value);
    return y ? new xy(y.routes.routes.map((R) => new Ds(R.id, R.points, R.properties, R.meta)), y.routes.id, y.routes.meta) : null;
  }), n = D(() => r.value ? r.value.routes.map((y) => ({ id: y.id, name: y.name, points: y.getPoints(), meta: y.meta })) : []), i = D(() => t.value && e.value.find((y) => y.id === t.value) || null), a = D(() => i.value ? i.value.drafts.drafts : []);
  async function s() {
    const y = await Re("sketches");
    if (y) {
      const R = Ey.migrateToCurrent(y, { validateBefore: true, validateAfter: true, enableRollback: true });
      if (R.isErr()) {
        console.error("[SketchStore] Data migration failed:", R.error), await u();
        return;
      }
      const _ = R.value;
      if (_.migratedVersions.length > 0 && console.info(`[SketchStore] Successfully migrated data from version ${_.fromVersion} to ${_.toVersion}`), Array.isArray(_.data)) {
        e.value = _.data.map((L) => xt.fromStorage(L));
        const P = [];
        e.value.forEach((L) => {
          L.routes.routes.forEach((A) => {
            A.points.length > 1 && !A.meta.distance && P.push((async () => {
              try {
                A.meta.distance = await Sn(A.points);
              } catch (G) {
                console.warn("Failed to calculate route distance:", G), A.meta.distance = 0;
              }
            })());
          });
        }), await Promise.all(P), !t.value && e.value.length > 0 && (t.value = e.value[0].id);
      } else await u();
    } else await u();
    await l();
  }
  async function l() {
    try {
      await Re("wal:initialized") || (console.info("[SketchStore] Initializing WAL system..."), await c(), await se("wal:initialized", true), await se("wal:version", 1), console.info("[SketchStore] WAL system initialized")), console.info("[SketchStore] Running crash recovery...");
      const R = await c2.recover();
      R.failedRoutes > 0 ? console.warn("[SketchStore] Crash recovery completed with failures:", R.details) : console.info("[SketchStore] Crash recovery completed successfully");
    } catch (y) {
      console.error("[SketchStore] Failed to initialize WAL:", y);
    }
  }
  async function c() {
    const y = await Re("sketches");
    y && await se("sketches:backup:pre-wal", y);
    const R = await Re("sketches");
    if (!R) return;
    const _ = R.map((L) => xt.fromStorage(L)), P = [];
    for (const L of _) for (const A of L.routes.routes) await se(`route:${A.id}:metadata`, A.meta), P.push(A.id);
    await se("wal:activeRoutes", P);
  }
  async function u() {
    const y = new xt();
    y.meta.name = "Default Sketch", e.value = [y], t.value = y.id, await se("sketches", e.value.map((R) => R.toStorage())), await ft();
  }
  async function d(y = "New Sketch") {
    const R = new xt();
    return R.meta.name = y, e.value.push(R), await se("sketches", e.value.map((_) => _.toStorage())), await ft(), R;
  }
  async function f(y, R) {
    const _ = e.value.find((P) => P.id === y);
    _ && (R.name !== void 0 && _.updateName(R.name), R.description !== void 0 && _.updateDescription(R.description), R.tags !== void 0 && (_.meta.tags.forEach((P) => {
      _.removeTag(P);
    }), R.tags.forEach((P) => {
      _.addTag(P);
    })), await se("sketches", e.value.map((P) => P.toStorage())), await ft());
  }
  async function h(y) {
    const R = e.value.findIndex((_) => _.id === y);
    R !== -1 && (e.value.splice(R, 1), t.value === y && (t.value = e.value.length > 0 ? e.value[0].id : null), await se("sketches", e.value.map((_) => _.toStorage())), await ft());
  }
  function p(y) {
    t.value = y, o.value = null;
  }
  async function m(y, R = {}, _ = {}) {
    i.value || await u();
    const P = new Ds(void 0, [], R, _);
    return P.meta.name = y, i.value && i.value.routes.routes.push(P.exportToStorage()), await se("sketches", e.value.map((L) => L.toStorage())), await ft(), P;
  }
  async function g(y) {
    if (!i.value) return;
    const R = i.value.routes.routes.findIndex((_) => _.id === y);
    R !== -1 && (i.value.routes.routes.splice(R, 1), o.value === y && (o.value = null), await se("sketches", e.value.map((_) => _.toStorage())), await ft());
  }
  async function v(y, R) {
    if (!i.value) return;
    const _ = i.value.routes.routes.find((L) => L.id === y);
    if (!_) return;
    if (_.points.push(R), _.meta.modification_timestamp = Date.now(), _.points.length > 1) try {
      if (_.meta.distance === void 0) {
        const L = await Sn(_.points);
        _.meta.distance = L;
      } else {
        const L = await Sn([_.points[_.points.length - 2], R]);
        _.meta.distance += L;
      }
    } catch (L) {
      console.warn("Failed to calculate route distance:", L), _.meta.distance === void 0 && (_.meta.distance = 0);
    }
    const P = e.value.map((L) => L.toStorage());
    try {
      await Pt.appendPoint(y, R), al.invalidateCache(y);
    } catch (L) {
      console.error("[SketchStore] WAL append failed, rolling back in-memory state:", L);
      const A = P.map((ie) => xt.fromStorage(ie)), G = A.find((ie) => {
        var _a2;
        return ie.id === ((_a2 = i.value) == null ? void 0 : _a2.id);
      });
      throw G && G.routes.routes.findIndex((ue) => ue.id === y) !== -1 && (e.value = A, t.value = G.id), L;
    }
  }
  async function x(y, R) {
    if (!i.value) return;
    const _ = i.value.routes.routes.find((P) => P.id === y);
    _ && (R.meta !== void 0 && (_.meta = { ..._.meta, ...R.meta }), R.properties !== void 0 && (_.properties = { ..._.properties, ...R.properties }), _.meta.modification_timestamp = Date.now(), await se("sketches", e.value.map((P) => P.toStorage())), await ft());
  }
  async function $(y) {
    if (!i.value) return;
    const R = i.value.routes.routes.find((_) => _.id === y);
    R && (R.points = [], R.meta.modification_timestamp = Date.now(), await se("sketches", e.value.map((_) => _.toStorage())), await ft());
  }
  async function C(y) {
    return al.getRoute(y);
  }
  function E(y) {
    o.value = y;
  }
  async function k(y, R = {}, _ = {}) {
    i.value || await u();
    const P = { id: crypto.randomUUID(), meta: { ...Ct(), ..._ }, shape: y, properties: R };
    return i.value && i.value.drafts.drafts.push(P), await se("sketches", e.value.map((L) => L.toStorage())), await ft(), P;
  }
  async function b(y, R) {
    if (!i.value) return;
    const _ = i.value.drafts.drafts.find((P) => P.id === y);
    _ && (R.shape !== void 0 && (_.shape = R.shape), R.properties !== void 0 && (_.properties = { ..._.properties, ...R.properties }), R.meta !== void 0 && (_.meta = { ..._.meta, ...R.meta }, _.meta.modification_timestamp = Date.now()), await se("sketches", e.value.map((P) => P.toStorage())), await ft());
  }
  async function S(y) {
    if (!i.value) return;
    const R = i.value.drafts.drafts.findIndex((_) => _.id === y);
    R !== -1 && (i.value.drafts.drafts.splice(R, 1), await se("sketches", e.value.map((_) => _.toStorage())), await ft());
  }
  function z(y) {
    return i.value && i.value.drafts.drafts.find((R) => R.id === y) || null;
  }
  function O() {
    return i.value ? i.value.routes.routes.map((y) => y.id) : [];
  }
  function N() {
    return i.value ? i.value.drafts.drafts.map((y) => y.id) : [];
  }
  return { sketches: e, currentSketchId: t, currentRouteId: o, routeCollection: r, routes: n, currentSketch: i, currentDrafts: a, init: s, createSketch: d, updateSketch: f, deleteSketch: h, setCurrentSketchId: p, addRoute: m, deleteRoute: g, addPointToRoute: v, updateRoute: x, clearRoutePoints: $, getRouteById: C, setCurrentRouteId: E, listRouteIDs: O, addDraft: k, updateDraft: b, deleteDraft: S, getDraftById: z, listDraftIDs: N };
});
export {
  $m as $,
  Lb as A,
  ro as B,
  Nb as C,
  jb as D,
  Zb as E,
  qb as F,
  Xb as G,
  Qb as H,
  e0 as I,
  o0 as J,
  i0 as K,
  d0 as L,
  $0 as M,
  z0 as N,
  _0 as O,
  A0 as P,
  L0 as Q,
  D2 as R,
  B0 as S,
  pr as T,
  eE as U,
  Yi as V,
  O0 as W,
  W2 as X,
  Am as Y,
  Mm as Z,
  k0 as _,
  j as a,
  l0 as a$,
  J2 as a0,
  Q2 as a1,
  G0 as a2,
  B as a3,
  Q as a4,
  G2 as a5,
  Z as a6,
  K as a7,
  di as a8,
  Oc as a9,
  Ex as aA,
  Ix as aB,
  Mx as aC,
  Lx as aD,
  Hx as aE,
  Vx as aF,
  Ux as aG,
  qx as aH,
  Xx as aI,
  eC as aJ,
  oC as aK,
  aC as aL,
  cC as aM,
  dC as aN,
  hC as aO,
  gC as aP,
  xC as aQ,
  SC as aR,
  $C as aS,
  Vt as aT,
  er as aU,
  F as aV,
  kC as aW,
  AC as aX,
  BC as aY,
  HC as aZ,
  Ht as a_,
  zt as aa,
  Mc as ab,
  It as ac,
  oE as ad,
  yr as ae,
  Ee as af,
  ee as ag,
  Zt as ah,
  Qg as ai,
  Ac as aj,
  K0 as ak,
  Zg as al,
  Gg as am,
  Ug as an,
  zs as ao,
  Yg as ap,
  tE as aq,
  j0 as ar,
  Y0 as as,
  J0 as at,
  ex as au,
  ox as av,
  ix as aw,
  cx as ax,
  px as ay,
  Cx as az,
  rv as b,
  ve as b$,
  pt as b0,
  Wi as b1,
  X2 as b2,
  xs as b3,
  rE as b4,
  _v as b5,
  lc as b6,
  cc as b7,
  F2 as b8,
  Ax as b9,
  Va as bA,
  w2 as bB,
  pm as bC,
  bs as bD,
  wr as bE,
  Sr as bF,
  Ss as bG,
  B2 as bH,
  Wc as bI,
  rt as bJ,
  Lc as bK,
  $r as bL,
  U2 as bM,
  fo as bN,
  ja as bO,
  Fm as bP,
  Uc as bQ,
  Cs as bR,
  $s as bS,
  Vi as bT,
  Xv as bU,
  Im as bV,
  ob as bW,
  j2 as bX,
  ct as bY,
  nb as bZ,
  Lg as b_,
  it as ba,
  YC as bb,
  uE as bc,
  Y2 as bd,
  iE as be,
  g2 as bf,
  sE as bg,
  cE as bh,
  lE as bi,
  hi as bj,
  p0 as bk,
  Zc as bl,
  Fp as bm,
  b2 as bn,
  Mp as bo,
  x2 as bp,
  C2 as bq,
  v2 as br,
  aE as bs,
  q2 as bt,
  zi as bu,
  yl as bv,
  Li as bw,
  Go as bx,
  or as by,
  gc as bz,
  So as c,
  Ag as c$,
  ge as c0,
  Cr as c1,
  Cb as c2,
  ec as c3,
  dm as c4,
  Ko as c5,
  Kc as c6,
  Wb as c7,
  Rm as c8,
  jg as c9,
  fr as cA,
  qc as cB,
  Mg as cC,
  dn as cD,
  Yc as cE,
  H2 as cF,
  Xc as cG,
  Wr as cH,
  Jc as cI,
  Kr as cJ,
  uf as cK,
  c0 as cL,
  mr as cM,
  M2 as cN,
  a0 as cO,
  Q0 as cP,
  _c as cQ,
  L2 as cR,
  jm as cS,
  cn as cT,
  xr as cU,
  un as cV,
  Dc as cW,
  Hi as cX,
  vc as cY,
  tx as cZ,
  Wm as c_,
  V2 as ca,
  Og as cb,
  I2 as cc,
  Cm as cd,
  E2 as ce,
  Sm as cf,
  mm as cg,
  A2 as ch,
  xm as ci,
  R2 as cj,
  $2 as ck,
  gm as cl,
  z2 as cm,
  P2 as cn,
  O2 as co,
  k2 as cp,
  T2 as cq,
  _2 as cr,
  Co as cs,
  pc as ct,
  mc as cu,
  bc as cv,
  Wo as cw,
  li as cx,
  Ub as cy,
  ln as cz,
  kv as d,
  lu as d0,
  S2 as d1,
  sx as d2,
  dx as d3,
  mx as d4,
  Es as d5,
  DC as d6,
  xx as d7,
  K2 as d8,
  Sx as d9,
  Vm as da,
  nE as db,
  zx as dc,
  Fx as dd,
  ur as de,
  cu as df,
  Yx as dg,
  GC as dh,
  Jx as di,
  ui as dj,
  nC as dk,
  uC as dl,
  du as dm,
  N2 as dn,
  EC as dp,
  mo as dq,
  Re as dr,
  se as ds,
  ft as dt,
  Ab as du,
  f2 as dv,
  m2 as dw,
  p2 as dx,
  h2 as dy,
  Av as e,
  Mv as f,
  Wv as g,
  Bi as h,
  U as i,
  Vv as j,
  qv as k,
  tb as l,
  Z2 as m,
  ib as n,
  sb as o,
  cb as p,
  ub as q,
  eo as r,
  _r as s,
  fb as t,
  bb as u,
  wb as v,
  zb as w,
  _b as x,
  Ob as y,
  Bb as z
};
