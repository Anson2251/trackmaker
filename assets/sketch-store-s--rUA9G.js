var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { aw as cr, ax as sc, ag as ut, ay as dr, az as si, aA as La, aB as cc, H as No, aC as _o, aD as Fa, aE as En, aF as dc, aG as uc, aH as Rn, aI as ci, aJ as di, aK as ui, aL as Jr, aM as Io, aN as Da, aO as Ha, aP as fc, aQ as en, aR as hc, aS as pc, aT as gc, aU as mc, aV as vc, i as le, l as Na, N as Tn, M as _a, d as te, j as B, v as uo, p as Te, b as _, B as Ie, h as C, Z as yt, g as Wa, aW as bc, P as Yt, c as vr, o as br, a as Ue, r as Ot, L as bo, k as at, f as We, e as Qt, y as ur, F as Jt, R as In, Q as Xt, T as xc, t as me, a6 as Va, aX as Cc, w as xo, C as kt, W as yc, m as $t, O as tn, S as ja, aY as Sc, Y as fi, n as hi, q as Ga, ab as Mr, ac as _e, ad as $e, ae as Je, aZ as wc, a_ as $c, a$ as Ka, b0 as fo, b1 as Pc, b2 as Ec, av as pi, b3 as Ua, b4 as Mt, af as xt, b5 as Rc, b6 as Tc, b7 as Re, b8 as se, b9 as Wt, ba as Ic, bb as lo, bc as gi, bd as Ac, be as Or } from "./index-D_6uXNVY.js";
var zc = "[object Symbol]";
function An(e) {
  return typeof e == "symbol" || cr(e) && sc(e) == zc;
}
function qa(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length, n = Array(r); ++o < r; ) n[o] = t(e[o], o, e);
  return n;
}
var mi = dr ? dr.prototype : void 0, vi = mi ? mi.toString : void 0;
function Ya(e) {
  if (typeof e == "string") return e;
  if (ut(e)) return qa(e, Ya) + "";
  if (An(e)) return vi ? vi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function zn(e) {
  return e;
}
function Mc(e, t, o) {
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
function Oc(e, t) {
  var o = -1, r = e.length;
  for (t || (t = Array(r)); ++o < r; ) t[o] = e[o];
  return t;
}
var kc = 800, Bc = 16, Lc = Date.now;
function Fc(e) {
  var t = 0, o = 0;
  return function() {
    var r = Lc(), n = Bc - (r - o);
    if (o = r, n > 0) {
      if (++t >= kc) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function Dc(e) {
  return function() {
    return e;
  };
}
var Hc = si ? function(e, t) {
  return si(e, "toString", { configurable: true, enumerable: false, value: Dc(t), writable: true });
} : zn, Nc = Fc(Hc);
function _c(e, t, o, r) {
  var n = !o;
  o || (o = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var l = t[i], s = void 0;
    s === void 0 && (s = e[l]), n ? La(o, l, s) : cc(o, l, s);
  }
  return o;
}
var bi = Math.max;
function Wc(e, t, o) {
  return t = bi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, n = -1, i = bi(r.length - t, 0), a = Array(i); ++n < i; ) a[n] = r[t + n];
    n = -1;
    for (var l = Array(t + 1); ++n < t; ) l[n] = r[n];
    return l[t] = o(a), Mc(e, this, l);
  };
}
function Vc(e, t) {
  return Nc(Wc(e, t, zn), e + "");
}
function jc(e, t, o) {
  if (!No(o)) return false;
  var r = typeof t;
  return (r == "number" ? _o(o) && Fa(t, o.length) : r == "string" && t in o) ? En(o[t], e) : false;
}
function Gc(e) {
  return Vc(function(t, o) {
    var r = -1, n = o.length, i = n > 1 ? o[n - 1] : void 0, a = n > 2 ? o[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (n--, i) : void 0, a && jc(o[0], o[1], a) && (i = n < 3 ? void 0 : i, n = 1), t = Object(t); ++r < n; ) {
      var l = o[r];
      l && e(t, l, r, i);
    }
    return t;
  });
}
function Kc(e) {
  var t = [];
  if (e != null) for (var o in Object(e)) t.push(o);
  return t;
}
var Uc = Object.prototype, qc = Uc.hasOwnProperty;
function Yc(e) {
  if (!No(e)) return Kc(e);
  var t = dc(e), o = [];
  for (var r in e) r == "constructor" && (t || !qc.call(e, r)) || o.push(r);
  return o;
}
function Xa(e) {
  return _o(e) ? uc(e, true) : Yc(e);
}
var Xc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zc = /^\w*$/;
function Mn(e, t) {
  if (ut(e)) return false;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || An(e) ? true : Zc.test(e) || !Xc.test(e) || t != null && e in Object(t);
}
var Qc = "Expected a function";
function On(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Qc);
  var o = function() {
    var r = arguments, n = t ? t.apply(this, r) : r[0], i = o.cache;
    if (i.has(n)) return i.get(n);
    var a = e.apply(this, r);
    return o.cache = i.set(n, a) || i, a;
  };
  return o.cache = new (On.Cache || Rn)(), o;
}
On.Cache = Rn;
var Jc = 500;
function ed(e) {
  var t = On(e, function(r) {
    return o.size === Jc && o.clear(), r;
  }), o = t.cache;
  return t;
}
var td = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, od = /\\(\\)?/g, rd = ed(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(td, function(o, r, n, i) {
    t.push(n ? i.replace(od, "$1") : r || o);
  }), t;
});
function Za(e) {
  return e == null ? "" : Ya(e);
}
function Qa(e, t) {
  return ut(e) ? e : Mn(e, t) ? [e] : rd(Za(e));
}
function xr(e) {
  if (typeof e == "string" || An(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ja(e, t) {
  t = Qa(t, e);
  for (var o = 0, r = t.length; e != null && o < r; ) e = e[xr(t[o++])];
  return o && o == r ? e : void 0;
}
function nd(e, t, o) {
  var r = e == null ? void 0 : Ja(e, t);
  return r === void 0 ? o : r;
}
function id(e, t, o) {
  var r = -1, n = e.length;
  t < 0 && (t = -t > n ? 0 : n + t), o = o > n ? n : o, o < 0 && (o += n), n = t > o ? 0 : o - t >>> 0, t >>>= 0;
  for (var i = Array(n); ++r < n; ) i[r] = e[r + t];
  return i;
}
function ad(e, t, o) {
  var r = e.length;
  return o = o === void 0 ? r : o, !t && o >= r ? e : id(e, t, o);
}
var ld = "\\ud800-\\udfff", sd = "\\u0300-\\u036f", cd = "\\ufe20-\\ufe2f", dd = "\\u20d0-\\u20ff", ud = sd + cd + dd, fd = "\\ufe0e\\ufe0f", hd = "\\u200d", pd = RegExp("[" + hd + ld + ud + fd + "]");
function el(e) {
  return pd.test(e);
}
function gd(e) {
  return e.split("");
}
var tl = "\\ud800-\\udfff", md = "\\u0300-\\u036f", vd = "\\ufe20-\\ufe2f", bd = "\\u20d0-\\u20ff", xd = md + vd + bd, Cd = "\\ufe0e\\ufe0f", yd = "[" + tl + "]", on = "[" + xd + "]", rn = "\\ud83c[\\udffb-\\udfff]", Sd = "(?:" + on + "|" + rn + ")", ol = "[^" + tl + "]", rl = "(?:\\ud83c[\\udde6-\\uddff]){2}", nl = "[\\ud800-\\udbff][\\udc00-\\udfff]", wd = "\\u200d", il = Sd + "?", al = "[" + Cd + "]?", $d = "(?:" + wd + "(?:" + [ol, rl, nl].join("|") + ")" + al + il + ")*", Pd = al + il + $d, Ed = "(?:" + [ol + on + "?", on, rl, nl, yd].join("|") + ")", Rd = RegExp(rn + "(?=" + rn + ")|" + Ed + Pd, "g");
function Td(e) {
  return e.match(Rd) || [];
}
function Id(e) {
  return el(e) ? Td(e) : gd(e);
}
function Ad(e) {
  return function(t) {
    t = Za(t);
    var o = el(t) ? Id(t) : void 0, r = o ? o[0] : t.charAt(0), n = o ? ad(o, 1).join("") : t.slice(1);
    return r[e]() + n;
  };
}
var zd = Ad("toUpperCase"), Md = "__lodash_hash_undefined__";
function Od(e) {
  return this.__data__.set(e, Md), this;
}
function kd(e) {
  return this.__data__.has(e);
}
function fr(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.__data__ = new Rn(); ++t < o; ) this.add(e[t]);
}
fr.prototype.add = fr.prototype.push = Od;
fr.prototype.has = kd;
function Bd(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length; ++o < r; ) if (t(e[o], o, e)) return true;
  return false;
}
function Ld(e, t) {
  return e.has(t);
}
var Fd = 1, Dd = 2;
function ll(e, t, o, r, n, i) {
  var a = o & Fd, l = e.length, s = t.length;
  if (l != s && !(a && s > l)) return false;
  var c = i.get(e), d = i.get(t);
  if (c && d) return c == t && d == e;
  var u = -1, f = true, h = o & Dd ? new fr() : void 0;
  for (i.set(e, t), i.set(t, e); ++u < l; ) {
    var p = e[u], m = t[u];
    if (r) var v = a ? r(m, p, u, t, e, i) : r(p, m, u, e, t, i);
    if (v !== void 0) {
      if (v) continue;
      f = false;
      break;
    }
    if (h) {
      if (!Bd(t, function(g, x) {
        if (!Ld(h, x) && (p === g || n(p, g, o, r, i))) return h.push(x);
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
function Hd(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r, n) {
    o[++t] = [n, r];
  }), o;
}
function Nd(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r) {
    o[++t] = r;
  }), o;
}
var _d = 1, Wd = 2, Vd = "[object Boolean]", jd = "[object Date]", Gd = "[object Error]", Kd = "[object Map]", Ud = "[object Number]", qd = "[object RegExp]", Yd = "[object Set]", Xd = "[object String]", Zd = "[object Symbol]", Qd = "[object ArrayBuffer]", Jd = "[object DataView]", xi = dr ? dr.prototype : void 0, kr = xi ? xi.valueOf : void 0;
function eu(e, t, o, r, n, i, a) {
  switch (o) {
    case Jd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
      e = e.buffer, t = t.buffer;
    case Qd:
      return !(e.byteLength != t.byteLength || !i(new ci(e), new ci(t)));
    case Vd:
    case jd:
    case Ud:
      return En(+e, +t);
    case Gd:
      return e.name == t.name && e.message == t.message;
    case qd:
    case Xd:
      return e == t + "";
    case Kd:
      var l = Hd;
    case Yd:
      var s = r & _d;
      if (l || (l = Nd), e.size != t.size && !s) return false;
      var c = a.get(e);
      if (c) return c == t;
      r |= Wd, a.set(e, t);
      var d = ll(l(e), l(t), r, n, i, a);
      return a.delete(e), d;
    case Zd:
      if (kr) return kr.call(e) == kr.call(t);
  }
  return false;
}
var tu = 1, ou = Object.prototype, ru = ou.hasOwnProperty;
function nu(e, t, o, r, n, i) {
  var a = o & tu, l = di(e), s = l.length, c = di(t), d = c.length;
  if (s != d && !a) return false;
  for (var u = s; u--; ) {
    var f = l[u];
    if (!(a ? f in t : ru.call(t, f))) return false;
  }
  var h = i.get(e), p = i.get(t);
  if (h && p) return h == t && p == e;
  var m = true;
  i.set(e, t), i.set(t, e);
  for (var v = a; ++u < s; ) {
    f = l[u];
    var g = e[f], x = t[f];
    if (r) var $ = a ? r(x, g, f, t, e, i) : r(g, x, f, e, t, i);
    if (!($ === void 0 ? g === x || n(g, x, o, r, i) : $)) {
      m = false;
      break;
    }
    v || (v = f == "constructor");
  }
  if (m && !v) {
    var S = e.constructor, E = t.constructor;
    S != E && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof E == "function" && E instanceof E) && (m = false);
  }
  return i.delete(e), i.delete(t), m;
}
var iu = 1, Ci = "[object Arguments]", yi = "[object Array]", Yo = "[object Object]", au = Object.prototype, Si = au.hasOwnProperty;
function lu(e, t, o, r, n, i) {
  var a = ut(e), l = ut(t), s = a ? yi : ui(e), c = l ? yi : ui(t);
  s = s == Ci ? Yo : s, c = c == Ci ? Yo : c;
  var d = s == Yo, u = c == Yo, f = s == c;
  if (f && Jr(e)) {
    if (!Jr(t)) return false;
    a = true, d = false;
  }
  if (f && !d) return i || (i = new Io()), a || Da(e) ? ll(e, t, o, r, n, i) : eu(e, t, s, o, r, n, i);
  if (!(o & iu)) {
    var h = d && Si.call(e, "__wrapped__"), p = u && Si.call(t, "__wrapped__");
    if (h || p) {
      var m = h ? e.value() : e, v = p ? t.value() : t;
      return i || (i = new Io()), n(m, v, o, r, i);
    }
  }
  return f ? (i || (i = new Io()), nu(e, t, o, r, n, i)) : false;
}
function kn(e, t, o, r, n) {
  return e === t ? true : e == null || t == null || !cr(e) && !cr(t) ? e !== e && t !== t : lu(e, t, o, r, kn, n);
}
var su = 1, cu = 2;
function du(e, t, o, r) {
  var n = o.length, i = n;
  if (e == null) return !i;
  for (e = Object(e); n--; ) {
    var a = o[n];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return false;
  }
  for (; ++n < i; ) {
    a = o[n];
    var l = a[0], s = e[l], c = a[1];
    if (a[2]) {
      if (s === void 0 && !(l in e)) return false;
    } else {
      var d = new Io(), u;
      if (!(u === void 0 ? kn(c, s, su | cu, r, d) : u)) return false;
    }
  }
  return true;
}
function sl(e) {
  return e === e && !No(e);
}
function uu(e) {
  for (var t = Ha(e), o = t.length; o--; ) {
    var r = t[o], n = e[r];
    t[o] = [r, n, sl(n)];
  }
  return t;
}
function cl(e, t) {
  return function(o) {
    return o == null ? false : o[e] === t && (t !== void 0 || e in Object(o));
  };
}
function fu(e) {
  var t = uu(e);
  return t.length == 1 && t[0][2] ? cl(t[0][0], t[0][1]) : function(o) {
    return o === e || du(o, e, t);
  };
}
function hu(e, t) {
  return e != null && t in Object(e);
}
function pu(e, t, o) {
  t = Qa(t, e);
  for (var r = -1, n = t.length, i = false; ++r < n; ) {
    var a = xr(t[r]);
    if (!(i = e != null && o(e, a))) break;
    e = e[a];
  }
  return i || ++r != n ? i : (n = e == null ? 0 : e.length, !!n && fc(n) && Fa(a, n) && (ut(e) || en(e)));
}
function gu(e, t) {
  return e != null && pu(e, t, hu);
}
var mu = 1, vu = 2;
function bu(e, t) {
  return Mn(e) && sl(t) ? cl(xr(e), t) : function(o) {
    var r = nd(o, e);
    return r === void 0 && r === t ? gu(o, e) : kn(t, r, mu | vu);
  };
}
function xu(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Cu(e) {
  return function(t) {
    return Ja(t, e);
  };
}
function yu(e) {
  return Mn(e) ? xu(xr(e)) : Cu(e);
}
function Su(e) {
  return typeof e == "function" ? e : e == null ? zn : typeof e == "object" ? ut(e) ? bu(e[0], e[1]) : fu(e) : yu(e);
}
function wu(e) {
  return function(t, o, r) {
    for (var n = -1, i = Object(t), a = r(t), l = a.length; l--; ) {
      var s = a[++n];
      if (o(i[s], s, i) === false) break;
    }
    return t;
  };
}
var dl = wu();
function $u(e, t) {
  return e && dl(e, t, Ha);
}
function Pu(e, t) {
  return function(o, r) {
    if (o == null) return o;
    if (!_o(o)) return e(o, r);
    for (var n = o.length, i = -1, a = Object(o); ++i < n && r(a[i], i, a) !== false; ) ;
    return o;
  };
}
var Eu = Pu($u);
function nn(e, t, o) {
  (o !== void 0 && !En(e[t], o) || o === void 0 && !(t in e)) && La(e, t, o);
}
function Ru(e) {
  return cr(e) && _o(e);
}
function an(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
}
function Tu(e) {
  return _c(e, Xa(e));
}
function Iu(e, t, o, r, n, i, a) {
  var l = an(e, o), s = an(t, o), c = a.get(s);
  if (c) {
    nn(e, o, c);
    return;
  }
  var d = i ? i(l, s, o + "", e, t, a) : void 0, u = d === void 0;
  if (u) {
    var f = ut(s), h = !f && Jr(s), p = !f && !h && Da(s);
    d = s, f || h || p ? ut(l) ? d = l : Ru(l) ? d = Oc(l) : h ? (u = false, d = hc(s, true)) : p ? (u = false, d = pc(s, true)) : d = [] : gc(s) || en(s) ? (d = l, en(l) ? d = Tu(l) : (!No(l) || mc(l)) && (d = vc(s))) : u = false;
  }
  u && (a.set(s, d), n(d, s, r, i, a), a.delete(s)), nn(e, o, d);
}
function ul(e, t, o, r, n) {
  e !== t && dl(t, function(i, a) {
    if (n || (n = new Io()), No(i)) Iu(e, t, a, o, ul, r, n);
    else {
      var l = r ? r(an(e, a), i, a + "", e, t, n) : void 0;
      l === void 0 && (l = i), nn(e, a, l);
    }
  }, Xa);
}
function Au(e, t) {
  var o = -1, r = _o(e) ? Array(e.length) : [];
  return Eu(e, function(n, i, a) {
    r[++o] = t(n, i, a);
  }), r;
}
function zu(e, t) {
  var o = ut(e) ? qa : Au;
  return o(e, Su(t));
}
var Eo = Gc(function(e, t, o) {
  ul(e, t, o);
});
const ao = typeof document < "u";
function fl(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Mu(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && fl(e.default);
}
const be = Object.assign;
function Br(e, t) {
  const o = {};
  for (const r in t) {
    const n = t[r];
    o[r] = it(n) ? n.map(e) : e(n);
  }
  return o;
}
const Ao = () => {
}, it = Array.isArray;
function wi(e, t) {
  const o = {};
  for (const r in e) o[r] = r in t ? t[r] : e[r];
  return o;
}
const hl = /#/g, Ou = /&/g, ku = /\//g, Bu = /=/g, Lu = /\?/g, pl = /\+/g, Fu = /%5B/g, Du = /%5D/g, gl = /%5E/g, Hu = /%60/g, ml = /%7B/g, Nu = /%7C/g, vl = /%7D/g, _u = /%20/g;
function Bn(e) {
  return e == null ? "" : encodeURI("" + e).replace(Nu, "|").replace(Fu, "[").replace(Du, "]");
}
function Wu(e) {
  return Bn(e).replace(ml, "{").replace(vl, "}").replace(gl, "^");
}
function ln(e) {
  return Bn(e).replace(pl, "%2B").replace(_u, "+").replace(hl, "%23").replace(Ou, "%26").replace(Hu, "`").replace(ml, "{").replace(vl, "}").replace(gl, "^");
}
function Vu(e) {
  return ln(e).replace(Bu, "%3D");
}
function ju(e) {
  return Bn(e).replace(hl, "%23").replace(Lu, "%3F");
}
function Gu(e) {
  return ju(e).replace(ku, "%2F");
}
function Oo(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const Ku = /\/$/, Uu = (e) => e.replace(Ku, "");
function Lr(e, t, o = "/") {
  let r, n = {}, i = "", a = "";
  const l = t.indexOf("#");
  let s = t.indexOf("?");
  return s = l >= 0 && s > l ? -1 : s, s >= 0 && (r = t.slice(0, s), i = t.slice(s, l > 0 ? l : t.length), n = e(i.slice(1))), l >= 0 && (r = r || t.slice(0, l), a = t.slice(l, t.length)), r = Zu(r ?? t, o), { fullPath: r + i + a, path: r, query: n, hash: Oo(a) };
}
function qu(e, t) {
  const o = t.query ? e(t.query) : "";
  return t.path + (o && "?") + o + (t.hash || "");
}
function Yu(e, t, o) {
  const r = t.matched.length - 1, n = o.matched.length - 1;
  return r > -1 && r === n && go(t.matched[r], o.matched[n]) && bl(t.params, o.params) && e(t.query) === e(o.query) && t.hash === o.hash;
}
function go(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function bl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var o in e) if (!Xu(e[o], t[o])) return false;
  return true;
}
function Xu(e, t) {
  return it(e) ? $i(e, t) : it(t) ? $i(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function $i(e, t) {
  return it(t) ? e.length === t.length && e.every((o, r) => o === t[r]) : e.length === 1 && e[0] === t;
}
function Zu(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const o = t.split("/"), r = e.split("/"), n = r[r.length - 1];
  (n === ".." || n === ".") && r.push("");
  let i = o.length - 1, a, l;
  for (a = 0; a < r.length; a++) if (l = r[a], l !== ".") if (l === "..") i > 1 && i--;
  else break;
  return o.slice(0, i).join("/") + "/" + r.slice(a).join("/");
}
const Tt = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let sn = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), Pi = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
const Fr = "";
function Qu(e) {
  if (!e) if (ao) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Uu(e);
}
const Ju = /^[^#]+#/;
function ef(e, t) {
  return e.replace(Ju, "#") + t;
}
function tf(e, t) {
  const o = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - o.left - (t.left || 0), top: r.top - o.top - (t.top || 0) };
}
const of = () => ({ left: window.scrollX, top: window.scrollY });
function rf(e) {
  let t;
  if ("el" in e) {
    const o = e.el, r = typeof o == "string" && o.startsWith("#"), n = typeof o == "string" ? r ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!n) return;
    t = tf(n, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Ei(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const cn = /* @__PURE__ */ new Map();
function nf(e, t) {
  cn.set(e, t);
}
function af(e) {
  const t = cn.get(e);
  return cn.delete(e), t;
}
function lf(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function xl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let Pe = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const Cl = /* @__PURE__ */ Symbol("");
Pe.MATCHER_NOT_FOUND + "", Pe.NAVIGATION_GUARD_REDIRECT + "", Pe.NAVIGATION_ABORTED + "", Pe.NAVIGATION_CANCELLED + "", Pe.NAVIGATION_DUPLICATED + "";
function mo(e, t) {
  return be(new Error(), { type: e, [Cl]: true }, t);
}
function mt(e, t) {
  return e instanceof Error && Cl in e && (t == null || !!(e.type & t));
}
const sf = ["params", "query", "hash"];
function cf(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const o of sf) o in e && (t[o] = e[o]);
  return JSON.stringify(t, null, 2);
}
function df(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const n = o[r].replace(pl, " "), i = n.indexOf("="), a = Oo(i < 0 ? n : n.slice(0, i)), l = i < 0 ? null : Oo(n.slice(i + 1));
    if (a in t) {
      let s = t[a];
      it(s) || (s = t[a] = [s]), s.push(l);
    } else t[a] = l;
  }
  return t;
}
function Ri(e) {
  let t = "";
  for (let o in e) {
    const r = e[o];
    if (o = Vu(o), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + o);
      continue;
    }
    (it(r) ? r.map((n) => n && ln(n)) : [r && ln(r)]).forEach((n) => {
      n !== void 0 && (t += (t.length ? "&" : "") + o, n != null && (t += "=" + n));
    });
  }
  return t;
}
function uf(e) {
  const t = {};
  for (const o in e) {
    const r = e[o];
    r !== void 0 && (t[o] = it(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
  }
  return t;
}
const yl = /* @__PURE__ */ Symbol(""), Ti = /* @__PURE__ */ Symbol(""), Cr = /* @__PURE__ */ Symbol(""), Ln = /* @__PURE__ */ Symbol(""), dn = /* @__PURE__ */ Symbol("");
function So() {
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
function ff(e, t, o) {
  const r = () => {
    e[t].delete(o);
  };
  Na(r), Tn(r), _a(() => {
    e[t].add(o);
  }), e[t].add(o);
}
function bx(e) {
  const t = le(yl, {}).value;
  t && ff(t, "leaveGuards", e);
}
function zt(e, t, o, r, n, i = (a) => a()) {
  const a = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
  return () => new Promise((l, s) => {
    const c = (f) => {
      f === false ? s(mo(Pe.NAVIGATION_ABORTED, { from: o, to: t })) : f instanceof Error ? s(f) : lf(f) ? s(mo(Pe.NAVIGATION_GUARD_REDIRECT, { from: t, to: f })) : (a && r.enterCallbacks[n] === a && typeof f == "function" && a.push(f), l());
    }, d = i(() => e.call(r && r.instances[n], t, o, c));
    let u = Promise.resolve(d);
    e.length < 3 && (u = u.then(c)), u.catch((f) => s(f));
  });
}
function Dr(e, t, o, r, n = (i) => i()) {
  const i = [];
  for (const a of e) for (const l in a.components) {
    let s = a.components[l];
    if (!(t !== "beforeRouteEnter" && !a.instances[l])) if (fl(s)) {
      const c = (s.__vccOpts || s)[t];
      c && i.push(zt(c, o, r, a, l, n));
    } else {
      let c = s();
      i.push(() => c.then((d) => {
        if (!d) throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);
        const u = Mu(d) ? d.default : d;
        a.mods[l] = d, a.components[l] = u;
        const f = (u.__vccOpts || u)[t];
        return f && zt(f, o, r, a, l, n)();
      }));
    }
  }
  return i;
}
function hf(e, t) {
  const o = [], r = [], n = [], i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const l = t.matched[a];
    l && (e.matched.find((c) => go(c, l)) ? r.push(l) : o.push(l));
    const s = e.matched[a];
    s && (t.matched.find((c) => go(c, s)) || n.push(s));
  }
  return [o, r, n];
}
function xx(e = "") {
  let t = [], o = [[Fr, {}]], r = 0;
  e = Qu(e);
  function n(l, s = {}) {
    r++, r !== o.length && o.splice(r), o.push([l, s]);
  }
  function i(l, s, { direction: c, delta: d }) {
    const u = { direction: c, delta: d, type: sn.pop };
    for (const f of t) f(l, s, u);
  }
  const a = { location: Fr, state: {}, base: e, createHref: ef.bind(null, e), replace(l, s) {
    o.splice(r--, 1), n(l, s);
  }, push(l, s) {
    n(l, s);
  }, listen(l) {
    return t.push(l), () => {
      const s = t.indexOf(l);
      s > -1 && t.splice(s, 1);
    };
  }, destroy() {
    t = [], o = [[Fr, {}]], r = 0;
  }, go(l, s = true) {
    const c = this.location, d = l < 0 ? Pi.back : Pi.forward;
    r = Math.max(0, Math.min(r + l, o.length - 1)), s && i(this.location, c, { direction: d, delta: l });
  } };
  return Object.defineProperty(a, "location", { enumerable: true, get: () => o[r][0] }), Object.defineProperty(a, "state", { enumerable: true, get: () => o[r][1] }), a;
}
let Vt = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var Oe = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(Oe || {});
const pf = { type: Vt.Static, value: "" }, gf = /[a-zA-Z0-9_]/;
function mf(e) {
  if (!e) return [[]];
  if (e === "/") return [[pf]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${o})/"${c}": ${h}`);
  }
  let o = Oe.Static, r = o;
  const n = [];
  let i;
  function a() {
    i && n.push(i), i = [];
  }
  let l = 0, s, c = "", d = "";
  function u() {
    c && (o === Oe.Static ? i.push({ type: Vt.Static, value: c }) : o === Oe.Param || o === Oe.ParamRegExp || o === Oe.ParamRegExpEnd ? (i.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: Vt.Param, value: c, regexp: d, repeatable: s === "*" || s === "+", optional: s === "*" || s === "?" })) : t("Invalid state to consume buffer"), c = "");
  }
  function f() {
    c += s;
  }
  for (; l < e.length; ) {
    if (s = e[l++], s === "\\" && o !== Oe.ParamRegExp) {
      r = o, o = Oe.EscapeNext;
      continue;
    }
    switch (o) {
      case Oe.Static:
        s === "/" ? (c && u(), a()) : s === ":" ? (u(), o = Oe.Param) : f();
        break;
      case Oe.EscapeNext:
        f(), o = r;
        break;
      case Oe.Param:
        s === "(" ? o = Oe.ParamRegExp : gf.test(s) ? f() : (u(), o = Oe.Static, s !== "*" && s !== "?" && s !== "+" && l--);
        break;
      case Oe.ParamRegExp:
        s === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + s : o = Oe.ParamRegExpEnd : d += s;
        break;
      case Oe.ParamRegExpEnd:
        u(), o = Oe.Static, s !== "*" && s !== "?" && s !== "+" && l--, d = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return o === Oe.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`), u(), a(), n;
}
const Ii = "[^/]+?", vf = { sensitive: false, strict: false, start: true, end: true };
var Ne = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(Ne || {});
const bf = /[.+*?^${}()[\]/\\]/g;
function xf(e, t) {
  const o = be({}, vf, t), r = [];
  let n = o.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const d = c.length ? [] : [Ne.Root];
    o.strict && !c.length && (n += "/");
    for (let u = 0; u < c.length; u++) {
      const f = c[u];
      let h = Ne.Segment + (o.sensitive ? Ne.BonusCaseSensitive : 0);
      if (f.type === Vt.Static) u || (n += "/"), n += f.value.replace(bf, "\\$&"), h += Ne.Static;
      else if (f.type === Vt.Param) {
        const { value: p, repeatable: m, optional: v, regexp: g } = f;
        i.push({ name: p, repeatable: m, optional: v });
        const x = g || Ii;
        if (x !== Ii) {
          h += Ne.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${x}): ` + S.message);
          }
        }
        let $ = m ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        u || ($ = v && c.length < 2 ? `(?:/${$})` : "/" + $), v && ($ += "?"), n += $, h += Ne.Dynamic, v && (h += Ne.BonusOptional), m && (h += Ne.BonusRepeatable), x === ".*" && (h += Ne.BonusWildcard);
      }
      d.push(h);
    }
    r.push(d);
  }
  if (o.strict && o.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += Ne.BonusStrict;
  }
  o.strict || (n += "/?"), o.end ? n += "$" : o.strict && !n.endsWith("/") && (n += "(?:/|$)");
  const a = new RegExp(n, o.sensitive ? "" : "i");
  function l(c) {
    const d = c.match(a), u = {};
    if (!d) return null;
    for (let f = 1; f < d.length; f++) {
      const h = d[f] || "", p = i[f - 1];
      u[p.name] = h && p.repeatable ? h.split("/") : h;
    }
    return u;
  }
  function s(c) {
    let d = "", u = false;
    for (const f of e) {
      (!u || !d.endsWith("/")) && (d += "/"), u = false;
      for (const h of f) if (h.type === Vt.Static) d += h.value;
      else if (h.type === Vt.Param) {
        const { value: p, repeatable: m, optional: v } = h, g = p in c ? c[p] : "";
        if (it(g) && !m) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const x = it(g) ? g.join("/") : g;
        if (!x) if (v) f.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : u = true);
        else throw new Error(`Missing required param "${p}"`);
        d += x;
      }
    }
    return d || "/";
  }
  return { re: a, score: r, keys: i, parse: l, stringify: s };
}
function Cf(e, t) {
  let o = 0;
  for (; o < e.length && o < t.length; ) {
    const r = t[o] - e[o];
    if (r) return r;
    o++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === Ne.Static + Ne.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Ne.Static + Ne.Segment ? 1 : -1 : 0;
}
function Sl(e, t) {
  let o = 0;
  const r = e.score, n = t.score;
  for (; o < r.length && o < n.length; ) {
    const i = Cf(r[o], n[o]);
    if (i) return i;
    o++;
  }
  if (Math.abs(n.length - r.length) === 1) {
    if (Ai(r)) return 1;
    if (Ai(n)) return -1;
  }
  return n.length - r.length;
}
function Ai(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const yf = { strict: false, end: true, sensitive: false };
function Sf(e, t, o) {
  const r = xf(mf(e.path), o), n = be(r, { record: e, parent: t, children: [], alias: [] });
  return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
}
function wf(e, t) {
  const o = [], r = /* @__PURE__ */ new Map();
  t = wi(yf, t);
  function n(u) {
    return r.get(u);
  }
  function i(u, f, h) {
    const p = !h, m = Mi(u);
    m.aliasOf = h && h.record;
    const v = wi(t, u), g = [m];
    if ("alias" in u) {
      const S = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const E of S) g.push(Mi(be({}, m, { components: h ? h.record.components : m.components, path: E, aliasOf: h ? h.record : m })));
    }
    let x, $;
    for (const S of g) {
      const { path: E } = S;
      if (f && E[0] !== "/") {
        const A = f.record.path, b = A[A.length - 1] === "/" ? "" : "/";
        S.path = f.record.path + (E && b + E);
      }
      if (x = Sf(S, f, v), h ? h.alias.push(x) : ($ = $ || x, $ !== x && $.alias.push(x), p && u.name && !Oi(x) && a(u.name)), wl(x) && s(x), m.children) {
        const A = m.children;
        for (let b = 0; b < A.length; b++) i(A[b], x, h && h.children[b]);
      }
      h = h || x;
    }
    return $ ? () => {
      a($);
    } : Ao;
  }
  function a(u) {
    if (xl(u)) {
      const f = r.get(u);
      f && (r.delete(u), o.splice(o.indexOf(f), 1), f.children.forEach(a), f.alias.forEach(a));
    } else {
      const f = o.indexOf(u);
      f > -1 && (o.splice(f, 1), u.record.name && r.delete(u.record.name), u.children.forEach(a), u.alias.forEach(a));
    }
  }
  function l() {
    return o;
  }
  function s(u) {
    const f = Ef(u, o);
    o.splice(f, 0, u), u.record.name && !Oi(u) && r.set(u.record.name, u);
  }
  function c(u, f) {
    let h, p = {}, m, v;
    if ("name" in u && u.name) {
      if (h = r.get(u.name), !h) throw mo(Pe.MATCHER_NOT_FOUND, { location: u });
      v = h.record.name, p = be(zi(f.params, h.keys.filter(($) => !$.optional).concat(h.parent ? h.parent.keys.filter(($) => $.optional) : []).map(($) => $.name)), u.params && zi(u.params, h.keys.map(($) => $.name))), m = h.stringify(p);
    } else if (u.path != null) m = u.path, h = o.find(($) => $.re.test(m)), h && (p = h.parse(m), v = h.record.name);
    else {
      if (h = f.name ? r.get(f.name) : o.find(($) => $.re.test(f.path)), !h) throw mo(Pe.MATCHER_NOT_FOUND, { location: u, currentLocation: f });
      v = h.record.name, p = be({}, f.params, u.params), m = h.stringify(p);
    }
    const g = [];
    let x = h;
    for (; x; ) g.unshift(x.record), x = x.parent;
    return { name: v, path: m, params: p, matched: g, meta: Pf(g) };
  }
  e.forEach((u) => i(u));
  function d() {
    o.length = 0, r.clear();
  }
  return { addRoute: i, resolve: c, removeRoute: a, clearRoutes: d, getRoutes: l, getRecordMatcher: n };
}
function zi(e, t) {
  const o = {};
  for (const r of t) r in e && (o[r] = e[r]);
  return o;
}
function Mi(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: $f(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function $f(e) {
  const t = {}, o = e.props || false;
  if ("component" in e) t.default = o;
  else for (const r in e.components) t[r] = typeof o == "object" ? o[r] : o;
  return t;
}
function Oi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Pf(e) {
  return e.reduce((t, o) => be(t, o.meta), {});
}
function Ef(e, t) {
  let o = 0, r = t.length;
  for (; o !== r; ) {
    const i = o + r >> 1;
    Sl(e, t[i]) < 0 ? r = i : o = i + 1;
  }
  const n = Rf(e);
  return n && (r = t.lastIndexOf(n, r - 1)), r;
}
function Rf(e) {
  let t = e;
  for (; t = t.parent; ) if (wl(t) && Sl(e, t) === 0) return t;
}
function wl({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function ki(e) {
  const t = le(Cr), o = le(Ln), r = B(() => {
    const s = uo(e.to);
    return t.resolve(s);
  }), n = B(() => {
    const { matched: s } = r.value, { length: c } = s, d = s[c - 1], u = o.matched;
    if (!d || !u.length) return -1;
    const f = u.findIndex(go.bind(null, d));
    if (f > -1) return f;
    const h = Bi(s[c - 2]);
    return c > 1 && Bi(d) === h && u[u.length - 1].path !== h ? u.findIndex(go.bind(null, s[c - 2])) : f;
  }), i = B(() => n.value > -1 && Mf(o.params, r.value.params)), a = B(() => n.value > -1 && n.value === o.matched.length - 1 && bl(o.params, r.value.params));
  function l(s = {}) {
    if (zf(s)) {
      const c = t[uo(e.replace) ? "replace" : "push"](uo(e.to)).catch(Ao);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: r, href: B(() => r.value.href), isActive: i, isExactActive: a, navigate: l };
}
function Tf(e) {
  return e.length === 1 ? e[0] : e;
}
const If = te({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: ki, setup(e, { slots: t }) {
  const o = Wa(ki(e)), { options: r } = le(Cr), n = B(() => ({ [Li(e.activeClass, r.linkActiveClass, "router-link-active")]: o.isActive, [Li(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive }));
  return () => {
    const i = t.default && Tf(t.default(o));
    return e.custom ? i : C("a", { "aria-current": o.isExactActive ? e.ariaCurrentValue : null, href: o.href, onClick: o.navigate, class: n.value }, i);
  };
} }), Af = If;
function zf(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function Mf(e, t) {
  for (const o in t) {
    const r = t[o], n = e[o];
    if (typeof r == "string") {
      if (r !== n) return false;
    } else if (!it(n) || n.length !== r.length || r.some((i, a) => i.valueOf() !== n[a].valueOf())) return false;
  }
  return true;
}
function Bi(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Li = (e, t, o) => e ?? t ?? o, Of = te({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: o }) {
  const r = le(dn), n = B(() => e.route || r.value), i = le(Ti, 0), a = B(() => {
    let c = uo(i);
    const { matched: d } = n.value;
    let u;
    for (; (u = d[c]) && !u.components; ) c++;
    return c;
  }), l = B(() => n.value.matched[a.value]);
  Te(Ti, B(() => a.value + 1)), Te(yl, l), Te(dn, n);
  const s = _();
  return Ie(() => [s.value, l.value, e.name], ([c, d, u], [f, h, p]) => {
    d && (d.instances[u] = c, h && h !== d && c && c === f && (d.leaveGuards.size || (d.leaveGuards = h.leaveGuards), d.updateGuards.size || (d.updateGuards = h.updateGuards))), c && d && (!h || !go(d, h) || !f) && (d.enterCallbacks[u] || []).forEach((m) => m(c));
  }, { flush: "post" }), () => {
    const c = n.value, d = e.name, u = l.value, f = u && u.components[d];
    if (!f) return Fi(o.default, { Component: f, route: c });
    const h = u.props[d], p = h ? h === true ? c.params : typeof h == "function" ? h(c) : h : null, v = C(f, be({}, p, t, { onVnodeUnmounted: (g) => {
      g.component.isUnmounted && (u.instances[d] = null);
    }, ref: s }));
    return Fi(o.default, { Component: v, route: c }) || v;
  };
} });
function Fi(e, t) {
  if (!e) return null;
  const o = e(t);
  return o.length === 1 ? o[0] : o;
}
const kf = Of;
function Cx(e) {
  const t = wf(e.routes, e), o = e.parseQuery || df, r = e.stringifyQuery || Ri, n = e.history, i = So(), a = So(), l = So(), s = yt(Tt);
  let c = Tt;
  ao && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = Br.bind(null, (R) => "" + R), u = Br.bind(null, Gu), f = Br.bind(null, Oo);
  function h(R, j) {
    let k, Y;
    return xl(R) ? (k = t.getRecordMatcher(R), Y = j) : Y = R, t.addRoute(Y, k);
  }
  function p(R) {
    const j = t.getRecordMatcher(R);
    j && t.removeRoute(j);
  }
  function m() {
    return t.getRoutes().map((R) => R.record);
  }
  function v(R) {
    return !!t.getRecordMatcher(R);
  }
  function g(R, j) {
    if (j = be({}, j || s.value), typeof R == "string") {
      const re = Lr(o, R, j.path), ye = t.resolve({ path: re.path }, j), rt = n.createHref(re.fullPath);
      return be(re, ye, { params: f(ye.params), hash: Oo(re.hash), redirectedFrom: void 0, href: rt });
    }
    let k;
    if (R.path != null) k = be({}, R, { path: Lr(o, R.path, j.path).path });
    else {
      const re = be({}, R.params);
      for (const ye in re) re[ye] == null && delete re[ye];
      k = be({}, R, { params: u(re) }), j.params = u(j.params);
    }
    const Y = t.resolve(k, j), ie = R.hash || "";
    Y.params = d(f(Y.params));
    const xe = qu(r, be({}, R, { hash: Wu(ie), path: Y.path })), oe = n.createHref(xe);
    return be({ fullPath: xe, hash: ie, query: r === Ri ? uf(R.query) : R.query || {} }, Y, { redirectedFrom: void 0, href: oe });
  }
  function x(R) {
    return typeof R == "string" ? Lr(o, R, s.value.path) : be({}, R);
  }
  function $(R, j) {
    if (c !== R) return mo(Pe.NAVIGATION_CANCELLED, { from: j, to: R });
  }
  function S(R) {
    return b(R);
  }
  function E(R) {
    return S(be(x(R), { replace: true }));
  }
  function A(R, j) {
    const k = R.matched[R.matched.length - 1];
    if (k && k.redirect) {
      const { redirect: Y } = k;
      let ie = typeof Y == "function" ? Y(R, j) : Y;
      return typeof ie == "string" && (ie = ie.includes("?") || ie.includes("#") ? ie = x(ie) : { path: ie }, ie.params = {}), be({ query: R.query, hash: R.hash, params: ie.path != null ? {} : R.params }, ie);
    }
  }
  function b(R, j) {
    const k = c = g(R), Y = s.value, ie = R.state, xe = R.force, oe = R.replace === true, re = A(k, Y);
    if (re) return b(be(x(re), { state: typeof re == "object" ? be({}, ie, re.state) : ie, force: xe, replace: oe }), j || k);
    const ye = k;
    ye.redirectedFrom = j;
    let rt;
    return !xe && Yu(r, Y, k) && (rt = mo(Pe.NAVIGATION_DUPLICATED, { to: ye, from: Y }), ue(Y, Y, true, false)), (rt ? Promise.resolve(rt) : O(ye, Y)).catch((ke) => mt(ke) ? mt(ke, Pe.NAVIGATION_GUARD_REDIRECT) ? ke : ne(ke) : N(ke, ye, Y)).then((ke) => {
      if (ke) {
        if (mt(ke, Pe.NAVIGATION_GUARD_REDIRECT)) return b(be({ replace: oe }, x(ke.to), { state: typeof ke.to == "object" ? be({}, ie, ke.to.state) : ie, force: xe }), j || ye);
      } else ke = M(ye, Y, true, oe, ie);
      return H(ye, Y, ke), ke;
    });
  }
  function w(R, j) {
    const k = $(R, j);
    return k ? Promise.reject(k) : Promise.resolve();
  }
  function P(R) {
    const j = He.values().next().value;
    return j && typeof j.runWithContext == "function" ? j.runWithContext(R) : R();
  }
  function O(R, j) {
    let k;
    const [Y, ie, xe] = hf(R, j);
    k = Dr(Y.reverse(), "beforeRouteLeave", R, j);
    for (const re of Y) re.leaveGuards.forEach((ye) => {
      k.push(zt(ye, R, j));
    });
    const oe = w.bind(null, R, j);
    return k.push(oe), ae(k).then(() => {
      k = [];
      for (const re of i.list()) k.push(zt(re, R, j));
      return k.push(oe), ae(k);
    }).then(() => {
      k = Dr(ie, "beforeRouteUpdate", R, j);
      for (const re of ie) re.updateGuards.forEach((ye) => {
        k.push(zt(ye, R, j));
      });
      return k.push(oe), ae(k);
    }).then(() => {
      k = [];
      for (const re of xe) if (re.beforeEnter) if (it(re.beforeEnter)) for (const ye of re.beforeEnter) k.push(zt(ye, R, j));
      else k.push(zt(re.beforeEnter, R, j));
      return k.push(oe), ae(k);
    }).then(() => (R.matched.forEach((re) => re.enterCallbacks = {}), k = Dr(xe, "beforeRouteEnter", R, j, P), k.push(oe), ae(k))).then(() => {
      k = [];
      for (const re of a.list()) k.push(zt(re, R, j));
      return k.push(oe), ae(k);
    }).catch((re) => mt(re, Pe.NAVIGATION_CANCELLED) ? re : Promise.reject(re));
  }
  function H(R, j, k) {
    l.list().forEach((Y) => P(() => Y(R, j, k)));
  }
  function M(R, j, k, Y, ie) {
    const xe = $(R, j);
    if (xe) return xe;
    const oe = j === Tt, re = ao ? history.state : {};
    k && (Y || oe ? n.replace(R.fullPath, be({ scroll: oe && re && re.scroll }, ie)) : n.push(R.fullPath, ie)), s.value = R, ue(R, j, k, oe), ne();
  }
  let V;
  function T() {
    V || (V = n.listen((R, j, k) => {
      if (!ot.listening) return;
      const Y = g(R), ie = A(Y, ot.currentRoute.value);
      if (ie) {
        b(be(ie, { replace: true, force: true }), Y).catch(Ao);
        return;
      }
      c = Y;
      const xe = s.value;
      ao && nf(Ei(xe.fullPath, k.delta), of()), O(Y, xe).catch((oe) => mt(oe, Pe.NAVIGATION_ABORTED | Pe.NAVIGATION_CANCELLED) ? oe : mt(oe, Pe.NAVIGATION_GUARD_REDIRECT) ? (b(be(x(oe.to), { force: true }), Y).then((re) => {
        mt(re, Pe.NAVIGATION_ABORTED | Pe.NAVIGATION_DUPLICATED) && !k.delta && k.type === sn.pop && n.go(-1, false);
      }).catch(Ao), Promise.reject()) : (k.delta && n.go(-k.delta, false), N(oe, Y, xe))).then((oe) => {
        oe = oe || M(Y, xe, false), oe && (k.delta && !mt(oe, Pe.NAVIGATION_CANCELLED) ? n.go(-k.delta, false) : k.type === sn.pop && mt(oe, Pe.NAVIGATION_ABORTED | Pe.NAVIGATION_DUPLICATED) && n.go(-1, false)), H(Y, xe, oe);
      }).catch(Ao);
    }));
  }
  let y = So(), I = So(), z;
  function N(R, j, k) {
    ne(R);
    const Y = I.list();
    return Y.length ? Y.forEach((ie) => ie(R, j, k)) : console.error(R), Promise.reject(R);
  }
  function Z() {
    return z && s.value !== Tt ? Promise.resolve() : new Promise((R, j) => {
      y.add([R, j]);
    });
  }
  function ne(R) {
    return z || (z = !R, T(), y.list().forEach(([j, k]) => R ? k(R) : j()), y.reset()), R;
  }
  function ue(R, j, k, Y) {
    const { scrollBehavior: ie } = e;
    if (!ao || !ie) return Promise.resolve();
    const xe = !k && af(Ei(R.fullPath, 0)) || (Y || !k) && history.state && history.state.scroll || null;
    return Yt().then(() => ie(R, j, xe)).then((oe) => oe && rf(oe)).catch((oe) => N(oe, R, j));
  }
  const ce = (R) => n.go(R);
  let Fe;
  const He = /* @__PURE__ */ new Set(), ot = { currentRoute: s, listening: true, addRoute: h, removeRoute: p, clearRoutes: t.clearRoutes, hasRoute: v, getRoutes: m, resolve: g, options: e, push: S, replace: E, go: ce, back: () => ce(-1), forward: () => ce(1), beforeEach: i.add, beforeResolve: a.add, afterEach: l.add, onError: I.add, isReady: Z, install(R) {
    R.component("RouterLink", Af), R.component("RouterView", kf), R.config.globalProperties.$router = ot, Object.defineProperty(R.config.globalProperties, "$route", { enumerable: true, get: () => uo(s) }), ao && !Fe && s.value === Tt && (Fe = true, S(n.location).catch((Y) => {
    }));
    const j = {};
    for (const Y in Tt) Object.defineProperty(j, Y, { get: () => s.value[Y], enumerable: true });
    R.provide(Cr, ot), R.provide(Ln, bc(j)), R.provide(dn, s);
    const k = R.unmount;
    He.add(R), R.unmount = function() {
      He.delete(R), He.size < 1 && (c = Tt, V && V(), V = null, s.value = Tt, Fe = false, z = false), k();
    };
  } };
  function ae(R) {
    return R.reduce((j, k) => j.then(() => P(k)), Promise.resolve());
  }
  return ot;
}
function yx() {
  return le(Cr);
}
function Sx(e) {
  return le(Ln);
}
const Bf = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, wx = te({ name: "InfoCircle", render: function(t, o) {
  return br(), vr("svg", Bf, o[0] || (o[0] = [Ue("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ue("circle", { cx: "12", cy: "12", r: "9" }), Ue("path", { d: "M12 8h.01" }), Ue("path", { d: "M11 12h1v4h1" })], -1)]));
} }), Lf = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, $x = te({ name: "Map", render: function(t, o) {
  return br(), vr("svg", Lf, o[0] || (o[0] = [Ue("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ue("path", { d: "M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3V7" }), Ue("path", { d: "M9 4v13" }), Ue("path", { d: "M15 7v13" })], -1)]));
} }), Ff = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Px = te({ name: "MapPin", render: function(t, o) {
  return br(), vr("svg", Ff, o[0] || (o[0] = [Ue("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ue("circle", { cx: "12", cy: "11", r: "3" }), Ue("path", { d: "M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" })], -1)]));
} }), Df = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Ex = te({ name: "Settings", render: function(t, o) {
  return br(), vr("svg", Df, o[0] || (o[0] = [Ue("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ue("path", { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z" }), Ue("circle", { cx: "12", cy: "12", r: "3" })], -1)]));
} });
function Hf(e) {
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
    let m, v;
    return { before(g) {
      m = g.bem.b, v = g.bem.els, g.bem.els = null;
    }, after(g) {
      g.bem.b = m, g.bem.els = v;
    }, $({ context: g, props: x }) {
      return p = typeof p == "string" ? p : p({ context: g, props: x }), g.bem.b = p, `${(x == null ? void 0 : x.bPrefix) || t}${g.bem.b}`;
    } };
  }
  function l(p) {
    let m;
    return { before(v) {
      m = v.bem.els;
    }, after(v) {
      v.bem.els = m;
    }, $({ context: v, props: g }) {
      return p = typeof p == "string" ? p : p({ context: v, props: g }), v.bem.els = p.split(",").map((x) => x.trim()), v.bem.els.map((x) => `${(g == null ? void 0 : g.bPrefix) || t}${v.bem.b}${o}${x}`).join(", ");
    } };
  }
  function s(p) {
    return { $({ context: m, props: v }) {
      p = typeof p == "string" ? p : p({ context: m, props: v });
      const g = p.split(",").map((S) => S.trim());
      function x(S) {
        return g.map((E) => `&${(v == null ? void 0 : v.bPrefix) || t}${m.bem.b}${S !== void 0 ? `${o}${S}` : ""}${r}${E}`).join(", ");
      }
      const $ = m.bem.els;
      return $ !== null ? x($[0]) : x();
    } };
  }
  function c(p) {
    return { $({ context: m, props: v }) {
      p = typeof p == "string" ? p : p({ context: m, props: v });
      const g = m.bem.els;
      return `&:not(${(v == null ? void 0 : v.bPrefix) || t}${m.bem.b}${g !== null && g.length > 0 ? `${o}${g[0]}` : ""}${r}${p})`;
    } };
  }
  return Object.assign(i, { cB: ((...p) => n(a(p[0]), p[1], p[2])), cE: ((...p) => n(l(p[0]), p[1], p[2])), cM: ((...p) => n(s(p[0]), p[1], p[2])), cNotM: ((...p) => n(c(p[0]), p[1], p[2])) }), i;
}
function Nf(e) {
  let t = 0;
  for (let o = 0; o < e.length; ++o) e[o] === "&" && ++t;
  return t;
}
const $l = /\s*,(?![^(]*\))\s*/g, _f = /\s+/g;
function Wf(e, t) {
  const o = [];
  return t.split($l).forEach((r) => {
    let n = Nf(r);
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
function Vf(e, t) {
  const o = [];
  return t.split($l).forEach((r) => {
    e.forEach((n) => {
      o.push((n && n + " ") + r);
    });
  }), o;
}
function jf(e) {
  let t = [""];
  return e.forEach((o) => {
    o = o && o.trim(), o && (o.includes("&") ? t = Wf(t, o) : t = Vf(t, o));
  }), t.join(", ").replace(_f, " ");
}
function Di(e) {
  if (!e) return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function yr(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Gf(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Xo(e) {
  return e ? /^\s*@(s|m)/.test(e) : false;
}
const Kf = /[A-Z]/g;
function Pl(e) {
  return e.replace(Kf, (t) => "-" + t.toLowerCase());
}
function Uf(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((o) => t + `  ${Pl(o[0])}: ${o[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function qf(e, t, o) {
  return typeof e == "function" ? e({ context: t.context, props: o }) : e;
}
function Hi(e, t, o, r) {
  if (!t) return "";
  const n = qf(t, o, r);
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
    l = Pl(l), s != null && a.push(`  ${l}${Uf(s)}`);
  }), e && a.push("}"), a.join(`
`);
}
function un(e, t, o) {
  e && e.forEach((r) => {
    if (Array.isArray(r)) un(r, t, o);
    else if (typeof r == "function") {
      const n = r(t);
      Array.isArray(n) ? un(n, t, o) : n && o(n);
    } else r && o(r);
  });
}
function El(e, t, o, r, n) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string") Xo(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const c = i({ context: r.context, props: n });
    Xo(c) ? a = c : t.push(c);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string") Xo(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const c = i.$({ context: r.context, props: n });
    Xo(c) ? a = c : t.push(c);
  }
  const l = jf(t), s = Hi(l, e.props, r, n);
  a ? o.push(`${a} {`) : s.length && o.push(s), e.children && un(e.children, { context: r.context, props: n }, (c) => {
    if (typeof c == "string") {
      const d = Hi(l, { raw: c }, r, n);
      o.push(d);
    } else El(c, t, o, r, n);
  }), t.pop(), a && o.push("}"), i && i.after && i.after(r.context);
}
function Yf(e, t, o) {
  const r = [];
  return El(e, [], r, t, o), r.join(`

`);
}
function ko(e) {
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
function Xf(e, t, o, r) {
  const { els: n } = t;
  if (o === void 0) n.forEach(Di), t.els = [];
  else {
    const i = yr(o, r);
    i && n.includes(i) && (Di(i), t.els = n.filter((a) => a !== i));
  }
}
function Ni(e, t) {
  e.push(t);
}
function Zf(e, t, o, r, n, i, a, l, s) {
  let c;
  if (o === void 0 && (c = t.render(r), o = ko(c)), s) {
    s.adapter(o, c ?? t.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const d = yr(o, l);
  if (d !== null && !i) return d;
  const u = d ?? Gf(o);
  if (c === void 0 && (c = t.render(r)), u.textContent = c, d !== null) return d;
  if (a) {
    const f = l.querySelector(`meta[name="${a}"]`);
    if (f) return l.insertBefore(u, f), Ni(t.els, u), u;
  }
  return n ? l.insertBefore(u, l.querySelector("style, link")) : l.appendChild(u), Ni(t.els, u), u;
}
function Qf(e) {
  return Yf(this, this.instance, e);
}
function Jf(e = {}) {
  const { id: t, ssr: o, props: r, head: n = false, force: i = false, anchorMetaName: a, parent: l } = e;
  return Zf(this.instance, this, t, r, n, i, a, l, o);
}
function eh(e = {}) {
  const { id: t, parent: o } = e;
  Xf(this.instance, this, t, o);
}
const Zo = function(e, t, o, r) {
  return { instance: e, $: t, props: o, children: r, els: [], render: Qf, mount: Jf, unmount: eh };
}, th = function(e, t, o, r) {
  return Array.isArray(t) ? Zo(e, { $: null }, null, t) : Array.isArray(o) ? Zo(e, t, null, o) : Array.isArray(r) ? Zo(e, t, o, r) : Zo(e, t, o, null);
};
function Rl(e = {}) {
  const t = { c: ((...o) => th(t, ...o)), use: (o, ...r) => o.install(t, ...r), find: yr, context: {}, config: e };
  return t;
}
function oh(e, t) {
  if (e === void 0) return false;
  if (t) {
    const { context: { ids: o } } = t;
    return o.has(e);
  }
  return yr(e) !== null;
}
const rh = "n", Bo = `.${rh}-`, nh = "__", ih = "--", Tl = Rl(), Il = Hf({ blockPrefix: Bo, elementPrefix: nh, modifierPrefix: ih });
Tl.use(Il);
const { c: L, find: Rx } = Tl, { cB: Q, cE: G, cM: U, cNotM: St } = Il;
function Al(e) {
  return L(({ props: { bPrefix: t } }) => `${t || Bo}modal, ${t || Bo}drawer`, [e]);
}
function ah(e) {
  return L(({ props: { bPrefix: t } }) => `${t || Bo}popover`, [e]);
}
function zl(e) {
  return L(({ props: { bPrefix: t } }) => `&${t || Bo}modal`, e);
}
const lh = (...e) => L(">", [Q(...e)]);
function J(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (o) => o.toUpperCase()));
}
let hr = [];
const Ml = /* @__PURE__ */ new WeakMap();
function sh() {
  hr.forEach((e) => e(...Ml.get(e))), hr = [];
}
function ch(e, ...t) {
  Ml.set(e, t), !hr.includes(e) && hr.push(e) === 1 && requestAnimationFrame(sh);
}
function _i(e, t) {
  let { target: o } = e;
  for (; o; ) {
    if (o.dataset && o.dataset[t] !== void 0) return true;
    o = o.parentElement;
  }
  return false;
}
function Lo(e) {
  return e.composedPath()[0] || null;
}
function Wi(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Tx(e) {
  if (e != null) return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function jt(e, t) {
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
function Ix(e, t) {
  const [o, r] = e.split(" ");
  return { row: o, col: r || o };
}
const Vi = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32", transparent: "#0000" };
function Ax(e, t, o) {
  t /= 100, o /= 100;
  const r = t * Math.min(o, 1 - o) + o;
  return [e, r ? (2 - 2 * o / r) * 100 : 0, r * 100];
}
function zx(e, t, o) {
  t /= 100, o /= 100;
  const r = o - o * t / 2, n = Math.min(r, 1 - r);
  return [e, n ? (o - r) / n * 100 : 0, r * 100];
}
function dh(e, t, o) {
  t /= 100, o /= 100;
  let r = (n, i = (n + e / 60) % 6) => o - o * t * Math.max(Math.min(i, 4 - i, 1), 0);
  return [r(5) * 255, r(3) * 255, r(1) * 255];
}
function Mx(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (i < 0 ? i + 6 : i), r && n / r * 100, r * 100];
}
function Ox(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = 1 - Math.abs(r + r - n - 1), a = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (a < 0 ? a + 6 : a), i ? n / i * 100 : 0, (r + r - n) * 50];
}
function uh(e, t, o) {
  t /= 100, o /= 100;
  let r = t * Math.min(o, 1 - o), n = (i, a = (i + e / 30) % 12) => o - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [n(0) * 255, n(8) * 255, n(4) * 255];
}
const ht = "^\\s*", pt = "\\s*$", Bt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", Ye = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Gt = "([0-9A-Fa-f])", Kt = "([0-9A-Fa-f]{2})", Ol = new RegExp(`${ht}hsl\\s*\\(${Ye},${Bt},${Bt}\\)${pt}`), kl = new RegExp(`${ht}hsv\\s*\\(${Ye},${Bt},${Bt}\\)${pt}`), Bl = new RegExp(`${ht}hsla\\s*\\(${Ye},${Bt},${Bt},${Ye}\\)${pt}`), Ll = new RegExp(`${ht}hsva\\s*\\(${Ye},${Bt},${Bt},${Ye}\\)${pt}`), fh = new RegExp(`${ht}rgb\\s*\\(${Ye},${Ye},${Ye}\\)${pt}`), hh = new RegExp(`${ht}rgba\\s*\\(${Ye},${Ye},${Ye},${Ye}\\)${pt}`), Fn = new RegExp(`${ht}#${Gt}${Gt}${Gt}${pt}`), Dn = new RegExp(`${ht}#${Kt}${Kt}${Kt}${pt}`), Hn = new RegExp(`${ht}#${Gt}${Gt}${Gt}${Gt}${pt}`), Nn = new RegExp(`${ht}#${Kt}${Kt}${Kt}${Kt}${pt}`);
function Ge(e) {
  return parseInt(e, 16);
}
function ph(e) {
  try {
    let t;
    if (t = Bl.exec(e)) return [ft(t[1]), Ae(t[5]), Ae(t[9]), wt(t[13])];
    if (t = Ol.exec(e)) return [ft(t[1]), Ae(t[5]), Ae(t[9]), 1];
    throw new Error(`[seemly/hsla]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function gh(e) {
  try {
    let t;
    if (t = Ll.exec(e)) return [ft(t[1]), Ae(t[5]), Ae(t[9]), wt(t[13])];
    if (t = kl.exec(e)) return [ft(t[1]), Ae(t[5]), Ae(t[9]), 1];
    throw new Error(`[seemly/hsva]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Lt(e) {
  try {
    let t;
    if (t = Dn.exec(e)) return [Ge(t[1]), Ge(t[2]), Ge(t[3]), 1];
    if (t = fh.exec(e)) return [Ee(t[1]), Ee(t[5]), Ee(t[9]), 1];
    if (t = hh.exec(e)) return [Ee(t[1]), Ee(t[5]), Ee(t[9]), wt(t[13])];
    if (t = Fn.exec(e)) return [Ge(t[1] + t[1]), Ge(t[2] + t[2]), Ge(t[3] + t[3]), 1];
    if (t = Nn.exec(e)) return [Ge(t[1]), Ge(t[2]), Ge(t[3]), wt(Ge(t[4]) / 255)];
    if (t = Hn.exec(e)) return [Ge(t[1] + t[1]), Ge(t[2] + t[2]), Ge(t[3] + t[3]), wt(Ge(t[4] + t[4]) / 255)];
    if (e in Vi) return Lt(Vi[e]);
    if (Ol.test(e) || Bl.test(e)) {
      const [o, r, n, i] = ph(e);
      return [...uh(o, r, n), i];
    } else if (kl.test(e) || Ll.test(e)) {
      const [o, r, n, i] = gh(e);
      return [...dh(o, r, n), i];
    }
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function mh(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function vh(e, t, o) {
  return `rgb(${Ee(e)}, ${Ee(t)}, ${Ee(o)})`;
}
function fn(e, t, o, r) {
  return `rgba(${Ee(e)}, ${Ee(t)}, ${Ee(o)}, ${mh(r)})`;
}
function Hr(e, t, o, r, n) {
  return Ee((e * t * (1 - r) + o * r) / n);
}
function W(e, t) {
  Array.isArray(e) || (e = Lt(e)), Array.isArray(t) || (t = Lt(t));
  const o = e[3], r = t[3], n = wt(o + r - o * r);
  return fn(Hr(e[0], o, t[0], r, n), Hr(e[1], o, t[1], r, n), Hr(e[2], o, t[2], r, n), n);
}
function K(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : Lt(e);
  return typeof t.alpha == "number" ? fn(o, r, n, t.alpha) : fn(o, r, n, i);
}
function Qo(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : Lt(e), { lightness: a = 1, alpha: l = 1 } = t;
  return bh([o * a, r * a, n * a, i * l]);
}
function wt(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function ft(e) {
  const t = Math.round(Number(e));
  return t >= 360 || t < 0 ? 0 : t;
}
function Ee(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Ae(e) {
  const t = Math.round(Number(e));
  return t > 100 ? 100 : t < 0 ? 0 : t;
}
function kx(e) {
  const [t, o, r] = Array.isArray(e) ? e : Lt(e);
  return vh(t, o, r);
}
function bh(e) {
  const [t, o, r] = e;
  return 3 in e ? `rgba(${Ee(t)}, ${Ee(o)}, ${Ee(r)}, ${wt(e[3])})` : `rgba(${Ee(t)}, ${Ee(o)}, ${Ee(r)}, 1)`;
}
function Bx(e) {
  return `hsv(${ft(e[0])}, ${Ae(e[1])}%, ${Ae(e[2])}%)`;
}
function Lx(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsva(${ft(t)}, ${Ae(o)}%, ${Ae(r)}%, ${wt(e[3])})` : `hsva(${ft(t)}, ${Ae(o)}%, ${Ae(r)}%, 1)`;
}
function Fx(e) {
  return `hsl(${ft(e[0])}, ${Ae(e[1])}%, ${Ae(e[2])}%)`;
}
function Dx(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsla(${ft(t)}, ${Ae(o)}%, ${Ae(r)}%, ${wt(e[3])})` : `hsla(${ft(t)}, ${Ae(o)}%, ${Ae(r)}%, 1)`;
}
function Hx(e) {
  if (typeof e == "string") {
    let r;
    if (r = Dn.exec(e)) return `${r[0]}FF`;
    if (r = Nn.exec(e)) return r[0];
    if (r = Fn.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}FF`;
    if (r = Hn.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}${r[4]}${r[4]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  const t = `#${e.slice(0, 3).map((r) => Ee(r).toString(16).toUpperCase().padStart(2, "0")).join("")}`, o = e.length === 3 ? "FF" : Ee(e[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return t + o;
}
function Nx(e) {
  if (typeof e == "string") {
    let t;
    if (t = Dn.exec(e)) return t[0];
    if (t = Nn.exec(e)) return t[0].slice(0, 7);
    if (t = Fn.exec(e) || Hn.exec(e)) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  return `#${e.slice(0, 3).map((t) => Ee(t).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function xh(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function _x(e, t) {
  const o = [];
  for (let r = 0; r < e; ++r) o.push(t);
  return o;
}
function ar(e) {
  return e.composedPath()[0];
}
const Ch = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function yh(e, t, o) {
  if (e === "mousemoveoutside") {
    const r = (n) => {
      t.contains(ar(n)) || o(n);
    };
    return { mousemove: r, touchstart: r };
  } else if (e === "clickoutside") {
    let r = false;
    const n = (a) => {
      r = !t.contains(ar(a));
    }, i = (a) => {
      r && (t.contains(ar(a)) || o(a));
    };
    return { mousedown: n, mouseup: i, touchstart: n, touchend: i };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {};
}
function Fl(e, t, o) {
  const r = Ch[e];
  let n = r.get(t);
  n === void 0 && r.set(t, n = /* @__PURE__ */ new WeakMap());
  let i = n.get(o);
  return i === void 0 && n.set(o, i = yh(e, t, o)), i;
}
function Sh(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = Fl(e, t, o);
    return Object.keys(n).forEach((i) => {
      pe(i, document, n[i], r);
    }), true;
  }
  return false;
}
function wh(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = Fl(e, t, o);
    return Object.keys(n).forEach((i) => {
      he(i, document, n[i], r);
    }), true;
  }
  return false;
}
function $h() {
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
  function n(b, w, P) {
    const O = b[w];
    return b[w] = function() {
      return P.apply(b, arguments), O.apply(b, arguments);
    }, b;
  }
  function i(b, w) {
    b[w] = Event.prototype[w];
  }
  const a = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var b;
    return (b = a.get(this)) !== null && b !== void 0 ? b : null;
  }
  function c(b, w) {
    l !== void 0 && Object.defineProperty(b, "currentTarget", { configurable: true, enumerable: true, get: w ?? l.get });
  }
  const d = { bubble: {}, capture: {} }, u = {};
  function f() {
    const b = function(w) {
      const { type: P, eventPhase: O, bubbles: H } = w, M = ar(w);
      if (O === 2) return;
      const V = O === 1 ? "capture" : "bubble";
      let T = M;
      const y = [];
      for (; T === null && (T = window), y.push(T), T !== window; ) T = T.parentNode || null;
      const I = d.capture[P], z = d.bubble[P];
      if (n(w, "stopPropagation", o), n(w, "stopImmediatePropagation", r), c(w, s), V === "capture") {
        if (I === void 0) return;
        for (let N = y.length - 1; N >= 0 && !e.has(w); --N) {
          const Z = y[N], ne = I.get(Z);
          if (ne !== void 0) {
            a.set(w, Z);
            for (const ue of ne) {
              if (t.has(w)) break;
              ue(w);
            }
          }
          if (N === 0 && !H && z !== void 0) {
            const ue = z.get(Z);
            if (ue !== void 0) for (const ce of ue) {
              if (t.has(w)) break;
              ce(w);
            }
          }
        }
      } else if (V === "bubble") {
        if (z === void 0) return;
        for (let N = 0; N < y.length && !e.has(w); ++N) {
          const Z = y[N], ne = z.get(Z);
          if (ne !== void 0) {
            a.set(w, Z);
            for (const ue of ne) {
              if (t.has(w)) break;
              ue(w);
            }
          }
        }
      }
      i(w, "stopPropagation"), i(w, "stopImmediatePropagation"), c(w);
    };
    return b.displayName = "evtdUnifiedHandler", b;
  }
  function h() {
    const b = function(w) {
      const { type: P, eventPhase: O } = w;
      if (O !== 2) return;
      const H = u[P];
      H !== void 0 && H.forEach((M) => M(w));
    };
    return b.displayName = "evtdUnifiedWindowEventHandler", b;
  }
  const p = f(), m = h();
  function v(b, w) {
    const P = d[b];
    return P[w] === void 0 && (P[w] = /* @__PURE__ */ new Map(), window.addEventListener(w, p, b === "capture")), P[w];
  }
  function g(b) {
    return u[b] === void 0 && (u[b] = /* @__PURE__ */ new Set(), window.addEventListener(b, m)), u[b];
  }
  function x(b, w) {
    let P = b.get(w);
    return P === void 0 && b.set(w, P = /* @__PURE__ */ new Set()), P;
  }
  function $(b, w, P, O) {
    const H = d[w][P];
    if (H !== void 0) {
      const M = H.get(b);
      if (M !== void 0 && M.has(O)) return true;
    }
    return false;
  }
  function S(b, w) {
    const P = u[b];
    return !!(P !== void 0 && P.has(w));
  }
  function E(b, w, P, O) {
    let H;
    if (typeof O == "object" && O.once === true ? H = (I) => {
      A(b, w, H, O), P(I);
    } : H = P, Sh(b, w, H, O)) return;
    const V = O === true || typeof O == "object" && O.capture === true ? "capture" : "bubble", T = v(V, b), y = x(T, w);
    if (y.has(H) || y.add(H), w === window) {
      const I = g(b);
      I.has(H) || I.add(H);
    }
  }
  function A(b, w, P, O) {
    if (wh(b, w, P, O)) return;
    const M = O === true || typeof O == "object" && O.capture === true, V = M ? "capture" : "bubble", T = v(V, b), y = x(T, w);
    if (w === window && !$(w, M ? "bubble" : "capture", b, P) && S(b, P)) {
      const z = u[b];
      z.delete(P), z.size === 0 && (window.removeEventListener(b, m), u[b] = void 0);
    }
    y.has(P) && y.delete(P), y.size === 0 && T.delete(w), T.size === 0 && (window.removeEventListener(b, p, V === "capture"), d[V][b] = void 0);
  }
  return { on: E, off: A };
}
const { on: pe, off: he } = $h();
function Ph(e) {
  const t = _(!!e.value);
  if (t.value) return Ot(t);
  const o = Ie(e, (r) => {
    r && (t.value = true, o());
  });
  return Ot(t);
}
function tt(e) {
  const t = B(e), o = _(t.value);
  return Ie(t, (r) => {
    o.value = r;
  }), typeof e == "function" ? o : { __v_isRef: true, get value() {
    return o.value;
  }, set value(r) {
    e.set(r);
  } };
}
function _n() {
  return bo() !== null;
}
const Wn = typeof window < "u";
let ho, zo;
const Eh = () => {
  var e, t;
  ho = Wn ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, zo = false, ho !== void 0 ? ho.then(() => {
    zo = true;
  }) : zo = true;
};
Eh();
function Rh(e) {
  if (zo) return;
  let t = false;
  at(() => {
    zo || (ho == null ? void 0 : ho.then(() => {
      t || e();
    }));
  }), We(() => {
    t = true;
  });
}
const Ro = _(null);
function ji(e) {
  if (e.clientX > 0 || e.clientY > 0) Ro.value = { x: e.clientX, y: e.clientY };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: o, top: r, width: n, height: i } = t.getBoundingClientRect();
      o > 0 || r > 0 ? Ro.value = { x: o + n / 2, y: r + i / 2 } : Ro.value = { x: 0, y: 0 };
    } else Ro.value = null;
  }
}
let Jo = 0, Gi = true;
function Th() {
  if (!Wn) return Ot(_(null));
  Jo === 0 && pe("click", document, ji, true);
  const e = () => {
    Jo += 1;
  };
  return Gi && (Gi = _n()) ? (Qt(e), We(() => {
    Jo -= 1, Jo === 0 && he("click", document, ji, true);
  })) : e(), Ot(Ro);
}
const Ih = _(void 0);
let er = 0;
function Ki() {
  Ih.value = Date.now();
}
let Ui = true;
function Ah(e) {
  if (!Wn) return Ot(_(false));
  const t = _(false);
  let o = null;
  function r() {
    o !== null && window.clearTimeout(o);
  }
  function n() {
    r(), t.value = true, o = window.setTimeout(() => {
      t.value = false;
    }, e);
  }
  er === 0 && pe("click", window, Ki, true);
  const i = () => {
    er += 1, pe("click", window, n, true);
  };
  return Ui && (Ui = _n()) ? (Qt(i), We(() => {
    er -= 1, er === 0 && he("click", window, Ki, true), he("click", window, n, true), r();
  })) : i(), Ot(t);
}
function Dl(e, t) {
  return Ie(e, (o) => {
    o !== void 0 && (t.value = o);
  }), B(() => e.value === void 0 ? t.value : e.value);
}
function Sr() {
  const e = _(false);
  return at(() => {
    e.value = true;
  }), Ot(e);
}
function Hl(e, t) {
  return B(() => {
    for (const o of t) if (e[o] !== void 0) return e[o];
    return e[t[t.length - 1]];
  });
}
const zh = (typeof window > "u" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function Mh() {
  return zh;
}
function Oh(e = {}, t) {
  const o = Wa({ ctrl: false, command: false, win: false, shift: false, tab: false }), { keydown: r, keyup: n } = e, i = (s) => {
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
    r !== void 0 && Object.keys(r).forEach((c) => {
      if (c !== s.key) return;
      const d = r[c];
      if (typeof d == "function") d(s);
      else {
        const { stop: u = false, prevent: f = false } = d;
        u && s.stopPropagation(), f && s.preventDefault(), d.handler(s);
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
    n !== void 0 && Object.keys(n).forEach((c) => {
      if (c !== s.key) return;
      const d = n[c];
      if (typeof d == "function") d(s);
      else {
        const { stop: u = false, prevent: f = false } = d;
        u && s.stopPropagation(), f && s.preventDefault(), d.handler(s);
      }
    });
  }, l = () => {
    (t === void 0 || t.value) && (pe("keydown", document, i), pe("keyup", document, a)), t !== void 0 && Ie(t, (s) => {
      s ? (pe("keydown", document, i), pe("keyup", document, a)) : (he("keydown", document, i), he("keyup", document, a));
    });
  };
  return _n() ? (Qt(l), We(() => {
    (t === void 0 || t.value) && (he("keydown", document, i), he("keyup", document, a));
  })) : l(), Ot(o);
}
function Wx(e) {
  return e;
}
const Vx = "n-internal-select-menu", kh = "n-internal-select-menu-body", wr = "n-drawer-body", jx = "n-drawer", $r = "n-modal-body", Bh = "n-modal-provider", Nl = "n-modal", Wo = "n-popover-body", _l = "__disabled__";
function vo(e) {
  const t = le($r, null), o = le(wr, null), r = le(Wo, null), n = le(kh, null), i = _();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    at(() => {
      pe("fullscreenchange", document, a);
    }), We(() => {
      he("fullscreenchange", document, a);
    });
  }
  return tt(() => {
    var a;
    const { to: l } = e;
    return l !== void 0 ? l === false ? _l : l === true ? i.value || "body" : l : (t == null ? void 0 : t.value) ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : (o == null ? void 0 : o.value) ? o.value : (r == null ? void 0 : r.value) ? r.value : (n == null ? void 0 : n.value) ? n.value : l ?? (i.value || "body");
  });
}
vo.tdkey = _l;
vo.propTo = { type: [String, Object, Boolean], default: void 0 };
function Lh(e, t, o) {
  const r = _(e.value);
  let n = null;
  return Ie(e, (i) => {
    n !== null && window.clearTimeout(n), i === true ? o && !o.value ? r.value = true : n = window.setTimeout(() => {
      r.value = true;
    }, t) : r.value = false;
  }), r;
}
const Vo = typeof document < "u" && typeof window < "u", Vn = _(false);
function qi() {
  Vn.value = true;
}
function Yi() {
  Vn.value = false;
}
let wo = 0;
function Fh() {
  return Vo && (Qt(() => {
    wo || (window.addEventListener("compositionstart", qi), window.addEventListener("compositionend", Yi)), wo++;
  }), We(() => {
    wo <= 1 ? (window.removeEventListener("compositionstart", qi), window.removeEventListener("compositionend", Yi), wo = 0) : wo--;
  })), Vn;
}
let oo = 0, Xi = "", Zi = "", Qi = "", Ji = "";
const ea = _("0px");
function Dh(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let o, r = false;
  const n = () => {
    t.style.marginRight = Xi, t.style.overflow = Zi, t.style.overflowX = Qi, t.style.overflowY = Ji, ea.value = "0px";
  };
  at(() => {
    o = Ie(e, (i) => {
      if (i) {
        if (!oo) {
          const a = window.innerWidth - t.offsetWidth;
          a > 0 && (Xi = t.style.marginRight, t.style.marginRight = `${a}px`, ea.value = `${a}px`), Zi = t.style.overflow, Qi = t.style.overflowX, Ji = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        r = true, oo++;
      } else oo--, oo || n(), r = false;
    }, { immediate: true });
  }), We(() => {
    o == null ? void 0 : o(), r && (oo--, oo || n(), r = false);
  });
}
function Hh(e) {
  const t = { isDeactivated: false };
  let o = false;
  return _a(() => {
    if (t.isDeactivated = false, !o) {
      o = true;
      return;
    }
    e();
  }), Tn(() => {
    t.isDeactivated = true, o || (o = true);
  }), t;
}
function hn(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  return r();
}
function pn(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(ur(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        pn(r, t, o);
        return;
      }
      if (r.type === Jt) {
        if (r.children === null) return;
        Array.isArray(r.children) && pn(r.children, t, o);
      } else r.type !== In && o.push(r);
    }
  }), o;
}
function ta(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  const n = pn(r());
  if (n.length === 1) return n[0];
  throw new Error(`[vueuc/${e}]: slot[${o}] should have exactly one child.`);
}
let It = null;
function Wl() {
  if (It === null && (It = document.getElementById("v-binder-view-measurer"), It === null)) {
    It = document.createElement("div"), It.id = "v-binder-view-measurer";
    const { style: e } = It;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(It);
  }
  return It.getBoundingClientRect();
}
function Nh(e, t) {
  const o = Wl();
  return { top: t, left: e, height: 0, width: 0, right: o.width - e, bottom: o.height - t };
}
function Nr(e) {
  const t = e.getBoundingClientRect(), o = Wl();
  return { left: t.left - o.left, top: t.top - o.top, bottom: o.height + o.top - t.bottom, right: o.width + o.left - t.right, width: t.width, height: t.height };
}
function _h(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Vl(e) {
  if (e === null) return null;
  const t = _h(e);
  if (t === null) return null;
  if (t.nodeType === 9) return document;
  if (t.nodeType === 1) {
    const { overflow: o, overflowX: r, overflowY: n } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(o + n + r)) return t;
  }
  return Vl(t);
}
const jl = te({ name: "Binder", props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(e) {
  var t;
  Te("VBinder", (t = bo()) === null || t === void 0 ? void 0 : t.proxy);
  const o = le("VBinder", null), r = _(null), n = (g) => {
    r.value = g, o && e.syncTargetWithParent && o.setTargetRef(g);
  };
  let i = [];
  const a = () => {
    let g = r.value;
    for (; g = Vl(g), g !== null; ) i.push(g);
    for (const x of i) pe("scroll", x, u, true);
  }, l = () => {
    for (const g of i) he("scroll", g, u, true);
    i = [];
  }, s = /* @__PURE__ */ new Set(), c = (g) => {
    s.size === 0 && a(), s.has(g) || s.add(g);
  }, d = (g) => {
    s.has(g) && s.delete(g), s.size === 0 && l();
  }, u = () => {
    ch(f);
  }, f = () => {
    s.forEach((g) => g());
  }, h = /* @__PURE__ */ new Set(), p = (g) => {
    h.size === 0 && pe("resize", window, v), h.has(g) || h.add(g);
  }, m = (g) => {
    h.has(g) && h.delete(g), h.size === 0 && he("resize", window, v);
  }, v = () => {
    h.forEach((g) => g());
  };
  return We(() => {
    he("resize", window, v), l();
  }), { targetRef: r, setTargetRef: n, addScrollListener: c, removeScrollListener: d, addResizeListener: p, removeResizeListener: m };
}, render() {
  return hn("binder", this.$slots);
} }), Gl = te({ name: "Target", setup() {
  const { setTargetRef: e, syncTarget: t } = le("VBinder");
  return { syncTarget: t, setTargetDirective: { mounted: e, updated: e } };
}, render() {
  const { syncTarget: e, setTargetDirective: t } = this;
  return e ? Xt(ta("follower", this.$slots), [[t]]) : ta("follower", this.$slots);
} }), ro = "@@mmoContext", Wh = { mounted(e, { value: t }) {
  e[ro] = { handler: void 0 }, typeof t == "function" && (e[ro].handler = t, pe("mousemoveoutside", e, t));
}, updated(e, { value: t }) {
  const o = e[ro];
  typeof t == "function" ? o.handler ? o.handler !== t && (he("mousemoveoutside", e, o.handler), o.handler = t, pe("mousemoveoutside", e, t)) : (e[ro].handler = t, pe("mousemoveoutside", e, t)) : o.handler && (he("mousemoveoutside", e, o.handler), o.handler = void 0);
}, unmounted(e) {
  const { handler: t } = e[ro];
  t && he("mousemoveoutside", e, t), e[ro].handler = void 0;
} }, no = "@@coContext", gn = { mounted(e, { value: t, modifiers: o }) {
  e[no] = { handler: void 0 }, typeof t == "function" && (e[no].handler = t, pe("clickoutside", e, t, { capture: o.capture }));
}, updated(e, { value: t, modifiers: o }) {
  const r = e[no];
  typeof t == "function" ? r.handler ? r.handler !== t && (he("clickoutside", e, r.handler, { capture: o.capture }), r.handler = t, pe("clickoutside", e, t, { capture: o.capture })) : (e[no].handler = t, pe("clickoutside", e, t, { capture: o.capture })) : r.handler && (he("clickoutside", e, r.handler, { capture: o.capture }), r.handler = void 0);
}, unmounted(e, { modifiers: t }) {
  const { handler: o } = e[no];
  o && he("clickoutside", e, o, { capture: t.capture }), e[no].handler = void 0;
} };
function Vh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class jh {
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
    r.has(t) ? r.delete(t) : o === void 0 && Vh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const _r = new jh(), io = "@@ziContext", jn = { mounted(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o;
  e[io] = { enabled: !!n, initialized: false }, n && (_r.ensureZIndex(e, r), e[io].initialized = true);
}, updated(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o, i = e[io].enabled;
  n && !i && (_r.ensureZIndex(e, r), e[io].initialized = true), e[io].enabled = !!n;
}, unmounted(e, t) {
  if (!e[io].initialized) return;
  const { value: o = {} } = t, { zIndex: r } = o;
  _r.unregister(e, r);
} }, Gh = "@css-render/vue3-ssr";
function Kh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Uh(e, t, o) {
  const { styles: r, ids: n } = o;
  n.has(e) || r !== null && (n.add(e), r.push(Kh(e, t)));
}
const qh = typeof document < "u";
function Co() {
  if (qh) return;
  const e = le(Gh, null);
  if (e !== null) return { adapter: (t, o) => Uh(t, o, e), context: e };
}
function oa(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: To } = Rl(), Kl = "vueuc-style";
function ra(e) {
  return typeof e == "string" ? document.querySelector(e) : e() || null;
}
const Ul = te({ name: "LazyTeleport", props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(e) {
  return { showTeleport: Ph(me(e, "show")), mergedTo: B(() => {
    const { to: t } = e;
    return t ?? "body";
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? hn("lazy-teleport", this.$slots) : C(xc, { disabled: this.disabled, to: this.mergedTo }, hn("lazy-teleport", this.$slots)) : null;
} }), tr = { top: "bottom", bottom: "top", left: "right", right: "left" }, na = { start: "end", center: "center", end: "start" }, Wr = { top: "height", bottom: "height", left: "width", right: "width" }, Yh = { "bottom-start": "top left", bottom: "top center", "bottom-end": "top right", "top-start": "bottom left", top: "bottom center", "top-end": "bottom right", "right-start": "top left", right: "center left", "right-end": "bottom left", "left-start": "top right", left: "center right", "left-end": "bottom right" }, Xh = { "bottom-start": "bottom left", bottom: "bottom center", "bottom-end": "bottom right", "top-start": "top left", top: "top center", "top-end": "top right", "right-start": "top right", right: "center right", "right-end": "bottom right", "left-start": "top left", left: "center left", "left-end": "bottom left" }, Zh = { "bottom-start": "right", "bottom-end": "left", "top-start": "right", "top-end": "left", "right-start": "bottom", "right-end": "top", "left-start": "bottom", "left-end": "top" }, ia = { top: true, bottom: false, left: true, right: false }, aa = { top: "end", bottom: "start", left: "end", right: "start" };
function Qh(e, t, o, r, n, i) {
  if (!n || i) return { placement: e, top: 0, left: 0 };
  const [a, l] = e.split("-");
  let s = l ?? "center", c = { top: 0, left: 0 };
  const d = (h, p, m) => {
    let v = 0, g = 0;
    const x = o[h] - t[p] - t[h];
    return x > 0 && r && (m ? g = ia[p] ? x : -x : v = ia[p] ? x : -x), { left: v, top: g };
  }, u = a === "left" || a === "right";
  if (s !== "center") {
    const h = Zh[e], p = tr[h], m = Wr[h];
    if (o[m] > t[m]) {
      if (t[h] + t[m] < o[m]) {
        const v = (o[m] - t[m]) / 2;
        t[h] < v || t[p] < v ? t[h] < t[p] ? (s = na[l], c = d(m, p, u)) : c = d(m, h, u) : s = "center";
      }
    } else o[m] < t[m] && t[p] < 0 && t[h] > t[p] && (s = na[l]);
  } else {
    const h = a === "bottom" || a === "top" ? "left" : "top", p = tr[h], m = Wr[h], v = (o[m] - t[m]) / 2;
    (t[h] < v || t[p] < v) && (t[h] > t[p] ? (s = aa[h], c = d(m, h, u)) : (s = aa[p], c = d(m, p, u)));
  }
  let f = a;
  return t[a] < o[Wr[a]] && t[a] < t[tr[a]] && (f = tr[a]), { placement: s !== "center" ? `${f}-${s}` : f, left: c.left, top: c.top };
}
function Jh(e, t) {
  return t ? Xh[e] : Yh[e];
}
function ep(e, t, o, r, n, i) {
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
const tp = To([To(".v-binder-follower-container", { position: "absolute", left: "0", right: "0", top: "0", height: "0", pointerEvents: "none", zIndex: "auto" }), To(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [To("> *", { pointerEvents: "all" })])]), ql = te({ name: "Follower", inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: "bottom" }, syncTrigger: { type: Array, default: ["resize", "scroll"] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(e) {
  const t = le("VBinder"), o = tt(() => e.enabled !== void 0 ? e.enabled : e.show), r = _(null), n = _(null), i = () => {
    const { syncTrigger: f } = e;
    f.includes("scroll") && t.addScrollListener(s), f.includes("resize") && t.addResizeListener(s);
  }, a = () => {
    t.removeScrollListener(s), t.removeResizeListener(s);
  };
  at(() => {
    o.value && (s(), i());
  });
  const l = Co();
  tp.mount({ id: "vueuc/binder", head: true, anchorMetaName: Kl, ssr: l }), We(() => {
    a();
  }), Rh(() => {
    o.value && s();
  });
  const s = () => {
    if (!o.value) return;
    const f = r.value;
    if (f === null) return;
    const h = t.targetRef, { x: p, y: m, overlap: v } = e, g = p !== void 0 && m !== void 0 ? Nh(p, m) : Nr(h);
    f.style.setProperty("--v-target-width", `${Math.round(g.width)}px`), f.style.setProperty("--v-target-height", `${Math.round(g.height)}px`);
    const { width: x, minWidth: $, placement: S, internalShift: E, flip: A } = e;
    f.setAttribute("v-placement", S), v ? f.setAttribute("v-overlap", "") : f.removeAttribute("v-overlap");
    const { style: b } = f;
    x === "target" ? b.width = `${g.width}px` : x !== void 0 ? b.width = x : b.width = "", $ === "target" ? b.minWidth = `${g.width}px` : $ !== void 0 ? b.minWidth = $ : b.minWidth = "";
    const w = Nr(f), P = Nr(n.value), { left: O, top: H, placement: M } = Qh(S, g, w, E, A, v), V = Jh(M, v), { left: T, top: y, transform: I } = ep(M, P, g, H, O, v);
    f.setAttribute("v-placement", M), f.style.setProperty("--v-offset-left", `${Math.round(O)}px`), f.style.setProperty("--v-offset-top", `${Math.round(H)}px`), f.style.transform = `translateX(${T}) translateY(${y}) ${I}`, f.style.setProperty("--v-transform-origin", V), f.style.transformOrigin = V;
  };
  Ie(o, (f) => {
    f ? (i(), c()) : a();
  });
  const c = () => {
    Yt().then(s).catch((f) => console.error(f));
  };
  ["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach((f) => {
    Ie(me(e, f), s);
  }), ["teleportDisabled"].forEach((f) => {
    Ie(me(e, f), c);
  }), Ie(me(e, "syncTrigger"), (f) => {
    f.includes("resize") ? t.addResizeListener(s) : t.removeResizeListener(s), f.includes("scroll") ? t.addScrollListener(s) : t.removeScrollListener(s);
  });
  const d = Sr(), u = tt(() => {
    const { to: f } = e;
    if (f !== void 0) return f;
    d.value;
  });
  return { VBinder: t, mergedEnabled: o, offsetContainerRef: n, followerRef: r, mergedTo: u, syncPosition: s };
}, render() {
  return C(Ul, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var e, t;
    const o = C("div", { class: ["v-binder-follower-container", this.containerClass], ref: "offsetContainerRef" }, [C("div", { class: "v-binder-follower-content", ref: "followerRef" }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))]);
    return this.zindexable ? Xt(o, [[jn, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : o;
  } });
} });
var Ut = [], op = function() {
  return Ut.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, rp = function() {
  return Ut.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, la = "ResizeObserver loop completed with undelivered notifications.", np = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: la }) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = la), window.dispatchEvent(e);
}, Fo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Fo || (Fo = {}));
var qt = function(e) {
  return Object.freeze(e);
}, ip = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.inlineSize = t, this.blockSize = o, qt(this);
  }
  return e;
})(), Yl = (function() {
  function e(t, o, r, n) {
    return this.x = t, this.y = o, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, qt(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, o = t.x, r = t.y, n = t.top, i = t.right, a = t.bottom, l = t.left, s = t.width, c = t.height;
    return { x: o, y: r, top: n, right: i, bottom: a, left: l, width: s, height: c };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
})(), Gn = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Xl = function(e) {
  if (Gn(e)) {
    var t = e.getBBox(), o = t.width, r = t.height;
    return !o && !r;
  }
  var n = e, i = n.offsetWidth, a = n.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, sa = function(e) {
  var t;
  if (e instanceof Element) return true;
  var o = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(o && e instanceof o.Element);
}, ap = function(e) {
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
}, Mo = typeof window < "u" ? window : {}, or = /* @__PURE__ */ new WeakMap(), ca = /auto|scroll/, lp = /^tb|vertical/, sp = /msie|trident/i.test(Mo.navigator && Mo.navigator.userAgent), lt = function(e) {
  return parseFloat(e || "0");
}, po = function(e, t, o) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), o === void 0 && (o = false), new ip((o ? t : e) || 0, (o ? e : t) || 0);
}, da = qt({ devicePixelContentBoxSize: po(), borderBoxSize: po(), contentBoxSize: po(), contentRect: new Yl(0, 0, 0, 0) }), Zl = function(e, t) {
  if (t === void 0 && (t = false), or.has(e) && !t) return or.get(e);
  if (Xl(e)) return or.set(e, da), da;
  var o = getComputedStyle(e), r = Gn(e) && e.ownerSVGElement && e.getBBox(), n = !sp && o.boxSizing === "border-box", i = lp.test(o.writingMode || ""), a = !r && ca.test(o.overflowY || ""), l = !r && ca.test(o.overflowX || ""), s = r ? 0 : lt(o.paddingTop), c = r ? 0 : lt(o.paddingRight), d = r ? 0 : lt(o.paddingBottom), u = r ? 0 : lt(o.paddingLeft), f = r ? 0 : lt(o.borderTopWidth), h = r ? 0 : lt(o.borderRightWidth), p = r ? 0 : lt(o.borderBottomWidth), m = r ? 0 : lt(o.borderLeftWidth), v = u + c, g = s + d, x = m + h, $ = f + p, S = l ? e.offsetHeight - $ - e.clientHeight : 0, E = a ? e.offsetWidth - x - e.clientWidth : 0, A = n ? v + x : 0, b = n ? g + $ : 0, w = r ? r.width : lt(o.width) - A - E, P = r ? r.height : lt(o.height) - b - S, O = w + v + E + x, H = P + g + S + $, M = qt({ devicePixelContentBoxSize: po(Math.round(w * devicePixelRatio), Math.round(P * devicePixelRatio), i), borderBoxSize: po(O, H, i), contentBoxSize: po(w, P, i), contentRect: new Yl(u, s, w, P) });
  return or.set(e, M), M;
}, Ql = function(e, t, o) {
  var r = Zl(e, o), n = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case Fo.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case Fo.BORDER_BOX:
      return n;
    default:
      return i;
  }
}, cp = /* @__PURE__ */ (function() {
  function e(t) {
    var o = Zl(t);
    this.target = t, this.contentRect = o.contentRect, this.borderBoxSize = qt([o.borderBoxSize]), this.contentBoxSize = qt([o.contentBoxSize]), this.devicePixelContentBoxSize = qt([o.devicePixelContentBoxSize]);
  }
  return e;
})(), Jl = function(e) {
  if (Xl(e)) return 1 / 0;
  for (var t = 0, o = e.parentNode; o; ) t += 1, o = o.parentNode;
  return t;
}, dp = function() {
  var e = 1 / 0, t = [];
  Ut.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var l = [];
      a.activeTargets.forEach(function(c) {
        var d = new cp(c.target), u = Jl(c.target);
        l.push(d), c.lastReportedSize = Ql(c.target, c.observedBox), u < e && (e = u);
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
}, ua = function(e) {
  Ut.forEach(function(o) {
    o.activeTargets.splice(0, o.activeTargets.length), o.skippedTargets.splice(0, o.skippedTargets.length), o.observationTargets.forEach(function(n) {
      n.isActive() && (Jl(n.target) > e ? o.activeTargets.push(n) : o.skippedTargets.push(n));
    });
  });
}, up = function() {
  var e = 0;
  for (ua(e); op(); ) e = dp(), ua(e);
  return rp() && np(), e > 0;
}, Vr, es = [], fp = function() {
  return es.splice(0).forEach(function(e) {
    return e();
  });
}, hp = function(e) {
  if (!Vr) {
    var t = 0, o = document.createTextNode(""), r = { characterData: true };
    new MutationObserver(function() {
      return fp();
    }).observe(o, r), Vr = function() {
      o.textContent = "".concat(t ? t-- : t++);
    };
  }
  es.push(e), Vr();
}, pp = function(e) {
  hp(function() {
    requestAnimationFrame(e);
  });
}, lr = 0, gp = function() {
  return !!lr;
}, mp = 250, vp = { attributes: true, characterData: true, childList: true, subtree: true }, fa = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], ha = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, jr = false, bp = (function() {
  function e() {
    var t = this;
    this.stopped = true, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var o = this;
    if (t === void 0 && (t = mp), !jr) {
      jr = true;
      var r = ha(t);
      pp(function() {
        var n = false;
        try {
          n = up();
        } finally {
          if (jr = false, t = r - ha(), !gp()) return;
          n ? o.run(1e3) : t > 0 ? o.run(t) : o.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, o = function() {
      return t.observer && t.observer.observe(document.body, vp);
    };
    document.body ? o() : Mo.addEventListener("DOMContentLoaded", o);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), fa.forEach(function(o) {
      return Mo.addEventListener(o, t.listener, true);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), fa.forEach(function(o) {
      return Mo.removeEventListener(o, t.listener, true);
    }), this.stopped = true);
  }, e;
})(), mn = new bp(), pa = function(e) {
  !lr && e > 0 && mn.start(), lr += e, !lr && mn.stop();
}, xp = function(e) {
  return !Gn(e) && !ap(e) && getComputedStyle(e).display === "inline";
}, Cp = (function() {
  function e(t, o) {
    this.target = t, this.observedBox = o || Fo.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e.prototype.isActive = function() {
    var t = Ql(this.target, this.observedBox, true);
    return xp(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
})(), yp = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = o;
  }
  return e;
})(), rr = /* @__PURE__ */ new WeakMap(), ga = function(e, t) {
  for (var o = 0; o < e.length; o += 1) if (e[o].target === t) return o;
  return -1;
}, nr = (function() {
  function e() {
  }
  return e.connect = function(t, o) {
    var r = new yp(t, o);
    rr.set(t, r);
  }, e.observe = function(t, o, r) {
    var n = rr.get(t), i = n.observationTargets.length === 0;
    ga(n.observationTargets, o) < 0 && (i && Ut.push(n), n.observationTargets.push(new Cp(o, r && r.box)), pa(1), mn.schedule());
  }, e.unobserve = function(t, o) {
    var r = rr.get(t), n = ga(r.observationTargets, o), i = r.observationTargets.length === 1;
    n >= 0 && (i && Ut.splice(Ut.indexOf(r), 1), r.observationTargets.splice(n, 1), pa(-1));
  }, e.disconnect = function(t) {
    var o = this, r = rr.get(t);
    r.observationTargets.slice().forEach(function(n) {
      return o.unobserve(t, n.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
})(), Sp = (function() {
  function e(t) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    nr.connect(this, t);
  }
  return e.prototype.observe = function(t, o) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!sa(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    nr.observe(this, t, o);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!sa(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    nr.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    nr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
})();
class wp {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Sp)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const ma = new wp(), va = te({ name: "ResizeObserver", props: { onResize: Function }, setup(e) {
  let t = false;
  const o = bo().proxy;
  function r(n) {
    const { onResize: i } = e;
    i !== void 0 && i(n);
  }
  at(() => {
    const n = o.$el;
    if (n === void 0) {
      oa("resize-observer", "$el does not exist.");
      return;
    }
    if (n.nextElementSibling !== n.nextSibling && n.nodeType === 3 && n.nodeValue !== "") {
      oa("resize-observer", "$el can not be observed (it may be a text node).");
      return;
    }
    n.nextElementSibling !== null && (ma.registerHandler(n.nextElementSibling, r), t = true);
  }), We(() => {
    t && ma.unregisterHandler(o.$el.nextElementSibling);
  });
}, render() {
  return Va(this.$slots, "default");
} }), vt = "v-hidden", $p = To("[v-hidden]", { display: "none!important" }), Gx = te({ name: "Overflow", props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(e, { slots: t }) {
  const o = _(null), r = _(null);
  function n(a) {
    const { value: l } = o, { getCounter: s, getTail: c } = e;
    let d;
    if (s !== void 0 ? d = s() : d = r.value, !l || !d) return;
    d.hasAttribute(vt) && d.removeAttribute(vt);
    const { children: u } = l;
    if (a.showAllItemsBeforeCalculate) for (const $ of u) $.hasAttribute(vt) && $.removeAttribute(vt);
    const f = l.offsetWidth, h = [], p = t.tail ? c == null ? void 0 : c() : null;
    let m = p ? p.offsetWidth : 0, v = false;
    const g = l.children.length - (t.tail ? 1 : 0);
    for (let $ = 0; $ < g - 1; ++$) {
      if ($ < 0) continue;
      const S = u[$];
      if (v) {
        S.hasAttribute(vt) || S.setAttribute(vt, "");
        continue;
      } else S.hasAttribute(vt) && S.removeAttribute(vt);
      const E = S.offsetWidth;
      if (m += E, h[$] = E, m > f) {
        const { updateCounter: A } = e;
        for (let b = $; b >= 0; --b) {
          const w = g - 1 - b;
          A !== void 0 ? A(w) : d.textContent = `${w}`;
          const P = d.offsetWidth;
          if (m -= h[b], m + P <= f || b === 0) {
            v = true, $ = b - 1, p && ($ === -1 ? (p.style.maxWidth = `${f - P}px`, p.style.boxSizing = "border-box") : p.style.maxWidth = "");
            const { onUpdateCount: O } = e;
            O && O(w);
            break;
          }
        }
      }
    }
    const { onUpdateOverflow: x } = e;
    v ? x !== void 0 && x(true) : (x !== void 0 && x(false), d.setAttribute(vt, ""));
  }
  const i = Co();
  return $p.mount({ id: "vueuc/overflow", head: true, anchorMetaName: Kl, ssr: i }), at(() => n({ showAllItemsBeforeCalculate: false })), { selfRef: o, counterRef: r, sync: n };
}, render() {
  const { $slots: e } = this;
  return Yt(() => this.sync({ showAllItemsBeforeCalculate: false })), C("div", { class: "v-overflow", ref: "selfRef" }, [Va(e, "default"), e.counter ? e.counter() : C("span", { style: { display: "inline-block" }, ref: "counterRef" }), e.tail ? e.tail() : null]);
} });
function ts(e) {
  return e instanceof HTMLElement;
}
function os(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const o = e.childNodes[t];
    if (ts(o) && (ns(o) || os(o))) return true;
  }
  return false;
}
function rs(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const o = e.childNodes[t];
    if (ts(o) && (ns(o) || rs(o))) return true;
  }
  return false;
}
function ns(e) {
  if (!Pp(e)) return false;
  try {
    e.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === e;
}
function Pp(e) {
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
let $o = [];
const is = te({ name: "FocusTrap", props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(e) {
  const t = xh(), o = _(null), r = _(null);
  let n = false, i = false;
  const a = typeof document > "u" ? null : document.activeElement;
  function l() {
    return $o[$o.length - 1] === t;
  }
  function s(v) {
    var g;
    v.code === "Escape" && l() && ((g = e.onEsc) === null || g === void 0 || g.call(e, v));
  }
  at(() => {
    Ie(() => e.active, (v) => {
      v ? (u(), pe("keydown", document, s)) : (he("keydown", document, s), n && f());
    }, { immediate: true });
  }), We(() => {
    he("keydown", document, s), n && f();
  });
  function c(v) {
    if (!i && l()) {
      const g = d();
      if (g === null || g.contains(Lo(v))) return;
      h("first");
    }
  }
  function d() {
    const v = o.value;
    if (v === null) return null;
    let g = v;
    for (; g = g.nextSibling, !(g === null || g instanceof Element && g.tagName === "DIV"); ) ;
    return g;
  }
  function u() {
    var v;
    if (!e.disabled) {
      if ($o.push(t), e.autoFocus) {
        const { initialFocusTo: g } = e;
        g === void 0 ? h("first") : (v = ra(g)) === null || v === void 0 || v.focus({ preventScroll: true });
      }
      n = true, document.addEventListener("focus", c, true);
    }
  }
  function f() {
    var v;
    if (e.disabled || (document.removeEventListener("focus", c, true), $o = $o.filter((x) => x !== t), l())) return;
    const { finalFocusTo: g } = e;
    g !== void 0 ? (v = ra(g)) === null || v === void 0 || v.focus({ preventScroll: true }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = true, a.focus({ preventScroll: true }), i = false);
  }
  function h(v) {
    if (l() && e.active) {
      const g = o.value, x = r.value;
      if (g !== null && x !== null) {
        const $ = d();
        if ($ == null || $ === x) {
          i = true, g.focus({ preventScroll: true }), i = false;
          return;
        }
        i = true;
        const S = v === "first" ? os($) : rs($);
        i = false, S || (i = true, g.focus({ preventScroll: true }), i = false);
      }
    }
  }
  function p(v) {
    if (i) return;
    const g = d();
    g !== null && (v.relatedTarget !== null && g.contains(v.relatedTarget) ? h("last") : h("first"));
  }
  function m(v) {
    i || (v.relatedTarget !== null && v.relatedTarget === o.value ? h("last") : h("first"));
  }
  return { focusableStartRef: o, focusableEndRef: r, focusableStyle: "position: absolute; height: 0; width: 0;", handleStartFocus: p, handleEndFocus: m };
}, render() {
  const { default: e } = this.$slots;
  if (e === void 0) return null;
  if (this.disabled) return e();
  const { active: t, focusableStyle: o } = this;
  return C(Jt, null, [C("div", { "aria-hidden": "true", tabindex: t ? "0" : "-1", ref: "focusableStartRef", style: o, onFocus: this.handleStartFocus }), e(), C("div", { "aria-hidden": "true", style: o, ref: "focusableEndRef", tabindex: t ? "0" : "-1", onFocus: this.handleEndFocus })]);
} });
function ba(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const Ep = /^(\d|\.)+$/, xa = /(\d|\.)+/;
function sr(e, { c: t = 1, offset: o = 0, attachPx: r = true } = {}) {
  if (typeof e == "number") {
    const n = (e + o) * t;
    return n === 0 ? "0" : `${n}px`;
  } else if (typeof e == "string") if (Ep.test(e)) {
    const n = (Number(e) + o) * t;
    return r ? n === 0 ? "0" : `${n}px` : `${n}`;
  } else {
    const n = xa.exec(e);
    return n ? e.replace(xa, String((Number(n[0]) + o) * t)) : e;
  }
  return e;
}
function Ca(e) {
  const { left: t, right: o, top: r, bottom: n } = jt(e);
  return `${r} ${t} ${n} ${o}`;
}
let Gr;
function Rp() {
  return Gr === void 0 && (Gr = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Gr;
}
const as = /* @__PURE__ */ new WeakSet();
function Kx(e) {
  as.add(e);
}
function Tp(e) {
  return !as.has(e);
}
function Zt(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function Ux(e, t, o) {
  console.error(`[naive/${e}]: ${t}`, o);
}
function Ip(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function qe(e, ...t) {
  if (Array.isArray(e)) e.forEach((o) => qe(o, ...t));
  else return e(...t);
}
function Ap(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function pr(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(ur(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        pr(r, t, o);
        return;
      }
      if (r.type === Jt) {
        if (r.children === null) return;
        Array.isArray(r.children) && pr(r.children, t, o);
      } else {
        if (r.type === In && t) return;
        o.push(r);
      }
    }
  }), o;
}
function zp(e, t = "default", o = void 0) {
  const r = e[t];
  if (!r) return Zt("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = pr(r(o));
  return n.length === 1 ? n[0] : (Zt("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function Mp(e, t, o) {
  if (!t) return null;
  const r = pr(t(o));
  return r.length === 1 ? r[0] : (Zt("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function Do(e, t = [], o) {
  const r = {};
  return t.forEach((n) => {
    r[n] = e[n];
  }), Object.assign(r, o);
}
function Kn(e) {
  return Object.keys(e);
}
function qx(e, t = [], o) {
  const r = {};
  return Object.getOwnPropertyNames(e).forEach((i) => {
    t.includes(i) || (r[i] = e[i]);
  }), Object.assign(r, o);
}
function dt(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? ur(e) : typeof e == "number" ? ur(String(e)) : null;
}
function et(e) {
  return e.some((t) => Cc(t) ? !(t.type === In || t.type === Jt && !et(t.children)) : true) ? e : null;
}
function ya(e, t) {
  return e && et(e()) || t();
}
function Yx(e, t, o) {
  return e && et(e(t)) || o(t);
}
function Ke(e, t) {
  const o = e && et(e());
  return t(o || null);
}
function Xx(e, t, o) {
  const r = e && et(e(t));
  return o(r || null);
}
function vn(e) {
  return !(e && et(e()));
}
const Sa = te({ render() {
  var e, t;
  return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
} }), Pt = "n-config-provider", gr = "n";
function gt(e = {}, t = { defaultBordered: true }) {
  const o = le(Pt, null);
  return { inlineThemeDisabled: o == null ? void 0 : o.inlineThemeDisabled, mergedRtlRef: o == null ? void 0 : o.mergedRtlRef, mergedComponentPropsRef: o == null ? void 0 : o.mergedComponentPropsRef, mergedBreakpointsRef: o == null ? void 0 : o.mergedBreakpointsRef, mergedBorderedRef: B(() => {
    var r, n;
    const { bordered: i } = e;
    return i !== void 0 ? i : (n = (r = o == null ? void 0 : o.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && n !== void 0 ? n : true;
  }), mergedClsPrefixRef: o ? o.mergedClsPrefixRef : yt(gr), namespaceRef: B(() => o == null ? void 0 : o.mergedNamespaceRef.value) };
}
function ls() {
  const e = le(Pt, null);
  return e ? e.mergedClsPrefixRef : yt(gr);
}
function Et(e, t, o, r) {
  o || Ip("useThemeClass", "cssVarsRef is not passed");
  const n = le(Pt, null), i = n == null ? void 0 : n.mergedThemeHashRef, a = n == null ? void 0 : n.styleMountTarget, l = _(""), s = Co();
  let c;
  const d = `__${e}`, u = () => {
    let f = d;
    const h = t ? t.value : void 0, p = i == null ? void 0 : i.value;
    p && (f += `-${p}`), h && (f += `-${h}`);
    const { themeOverrides: m, builtinThemeOverrides: v } = r;
    m && (f += `-${ko(JSON.stringify(m))}`), v && (f += `-${ko(JSON.stringify(v))}`), l.value = f, c = () => {
      const g = o.value;
      let x = "";
      for (const $ in g) x += `${$}: ${g[$]};`;
      L(`.${f}`, x).mount({ id: f, ssr: s, parent: a }), c = void 0;
    };
  };
  return xo(() => {
    u();
  }), { themeClass: l, onRender: () => {
    c == null ? void 0 : c();
  } };
}
const wa = "n-form-item";
function Op(e, { defaultSize: t = "medium", mergedSize: o, mergedDisabled: r } = {}) {
  const n = le(wa, null);
  Te(wa, null);
  const i = B(o ? () => o(n) : () => {
    const { size: s } = e;
    if (s) return s;
    if (n) {
      const { mergedSize: c } = n;
      if (c.value !== void 0) return c.value;
    }
    return t;
  }), a = B(r ? () => r(n) : () => {
    const { disabled: s } = e;
    return s !== void 0 ? s : n ? n.disabled.value : false;
  }), l = B(() => {
    const { status: s } = e;
    return s || (n == null ? void 0 : n.mergedValidationStatus.value);
  });
  return We(() => {
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
const Ho = "naive-ui-style";
function jo(e, t, o) {
  if (!t) return;
  const r = Co(), n = B(() => {
    const { value: l } = t;
    if (!l) return;
    const s = l[e];
    if (s) return s;
  }), i = le(Pt, null), a = () => {
    xo(() => {
      const { value: l } = o, s = `${l}${e}Rtl`;
      if (oh(s, r)) return;
      const { value: c } = n;
      c && c.style.mount({ id: s, head: true, anchorMetaName: Ho, props: { bPrefix: l ? `.${l}-` : void 0 }, ssr: r, parent: i == null ? void 0 : i.styleMountTarget });
    });
  };
  return r ? a() : Qt(a), n;
}
const eo = { fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace", fontWeight: "400", fontWeightStrong: "500", cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)", cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)", cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)", borderRadius: "3px", borderRadiusSmall: "2px", fontSize: "14px", fontSizeMini: "12px", fontSizeTiny: "12px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", lineHeight: "1.6", heightMini: "16px", heightTiny: "22px", heightSmall: "28px", heightMedium: "34px", heightLarge: "40px", heightHuge: "46px" }, { fontSize: kp, fontFamily: Bp, lineHeight: Lp } = eo, ss = L("body", `
 margin: 0;
 font-size: ${kp};
 font-family: ${Bp};
 line-height: ${Lp};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [L("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Go(e, t, o) {
  if (!t) return;
  const r = Co(), n = le(Pt, null), i = () => {
    const a = o.value;
    t.mount({ id: a === void 0 ? e : a + e, head: true, anchorMetaName: Ho, props: { bPrefix: a ? `.${a}-` : void 0 }, ssr: r, parent: n == null ? void 0 : n.styleMountTarget }), (n == null ? void 0 : n.preflightStyleDisabled) || ss.mount({ id: "n-global", head: true, anchorMetaName: Ho, ssr: r, parent: n == null ? void 0 : n.styleMountTarget });
  };
  r ? i() : Qt(i);
}
function Zx(e) {
  return e;
}
function Ce(e, t, o, r, n, i) {
  const a = Co(), l = le(Pt, null);
  if (o) {
    const c = () => {
      const d = i == null ? void 0 : i.value;
      o.mount({ id: d === void 0 ? t : d + t, head: true, props: { bPrefix: d ? `.${d}-` : void 0 }, anchorMetaName: Ho, ssr: a, parent: l == null ? void 0 : l.styleMountTarget }), (l == null ? void 0 : l.preflightStyleDisabled) || ss.mount({ id: "n-global", head: true, anchorMetaName: Ho, ssr: a, parent: l == null ? void 0 : l.styleMountTarget });
    };
    a ? c() : Qt(c);
  }
  return B(() => {
    var c;
    const { theme: { common: d, self: u, peers: f = {} } = {}, themeOverrides: h = {}, builtinThemeOverrides: p = {} } = n, { common: m, peers: v } = h, { common: g = void 0, [e]: { common: x = void 0, self: $ = void 0, peers: S = {} } = {} } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, { common: E = void 0, [e]: A = {} } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, { common: b, peers: w = {} } = A, P = Eo({}, d || x || g || r.common, E, b, m), O = Eo((c = u || $ || r.self) === null || c === void 0 ? void 0 : c(P), p, A, h);
    return { common: P, self: O, peers: Eo({}, r.peers, S, f), peerOverrides: Eo({}, p.peers, w, v) };
  });
}
Ce.props = { theme: Object, themeOverrides: Object, builtinThemeOverrides: Object };
const Fp = Q("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [L("svg", `
 height: 1em;
 width: 1em;
 `)]), cs = te({ name: "BaseIcon", props: { role: String, ariaLabel: String, ariaDisabled: { type: Boolean, default: void 0 }, ariaHidden: { type: Boolean, default: void 0 }, clsPrefix: { type: String, required: true }, onClick: Function, onMousedown: Function, onMouseup: Function }, setup(e) {
  Go("-base-icon", Fp, me(e, "clsPrefix"));
}, render() {
  return C("i", { class: `${this.clsPrefix}-base-icon`, onClick: this.onClick, onMousedown: this.onMousedown, onMouseup: this.onMouseup, role: this.role, "aria-label": this.ariaLabel, "aria-hidden": this.ariaHidden, "aria-disabled": this.ariaDisabled }, this.$slots);
} }), ds = te({ name: "BaseIconSwitchTransition", setup(e, { slots: t }) {
  const o = Sr();
  return () => C(kt, { name: "icon-switch-transition", appear: o.value }, t);
} });
function Ko(e, t) {
  const o = te({ render() {
    return t();
  } });
  return te({ name: zd(e), setup() {
    var r;
    const n = (r = le(Pt, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
    return () => {
      var i;
      const a = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e];
      return a ? a() : C(o, null);
    };
  } });
}
const Dp = te({ name: "ChevronRight", render() {
  return C("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, C("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" }));
} }), Hp = Ko("close", () => C("svg", { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true }, C("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, C("g", { fill: "currentColor", "fill-rule": "nonzero" }, C("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))), Np = Ko("error", () => C("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, C("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, C("g", { "fill-rule": "nonzero" }, C("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" }))))), $a = Ko("info", () => C("svg", { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, C("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, C("g", { "fill-rule": "nonzero" }, C("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" }))))), _p = Ko("success", () => C("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, C("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, C("g", { "fill-rule": "nonzero" }, C("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" }))))), Wp = Ko("warning", () => C("svg", { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, C("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, C("g", { "fill-rule": "nonzero" }, C("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" }))))), { cubicBezierEaseInOut: Vp } = eo;
function bn({ originalTransform: e = "", left: t = 0, top: o = 0, transition: r = `all .3s ${Vp} !important` } = {}) {
  return [L("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", { transform: `${e} scale(0.75)`, left: t, top: o, opacity: 0 }), L("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", { transform: `scale(1) ${e}`, left: t, top: o, opacity: 1 }), L("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", { transformOrigin: "center", position: "absolute", left: t, top: o, transition: r })];
}
const jp = Q("base-close", `
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
`, [U("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), L("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), St("disabled", [L("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), L("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), L("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), L("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), L("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), U("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), U("round", [L("&::before", `
 border-radius: 50%;
 `)])]), us = te({ name: "BaseClose", props: { isButtonTag: { type: Boolean, default: true }, clsPrefix: { type: String, required: true }, disabled: { type: Boolean, default: void 0 }, focusable: { type: Boolean, default: true }, round: Boolean, onClick: Function, absolute: Boolean }, setup(e) {
  return Go("-base-close", jp, me(e, "clsPrefix")), () => {
    const { clsPrefix: t, disabled: o, absolute: r, round: n, isButtonTag: i } = e;
    return C(i ? "button" : "div", { type: i ? "button" : void 0, tabindex: o || !e.focusable ? -1 : 0, "aria-disabled": o, "aria-label": "close", role: i ? void 0 : "button", disabled: o, class: [`${t}-base-close`, r && `${t}-base-close--absolute`, o && `${t}-base-close--disabled`, n && `${t}-base-close--round`], onMousedown: (l) => {
      e.focusable || l.preventDefault();
    }, onClick: e.onClick }, C(cs, { clsPrefix: t }, { default: () => C(Hp, null) }));
  };
} }), Gp = te({ name: "FadeInExpandTransition", props: { appear: Boolean, group: Boolean, mode: String, onLeave: Function, onAfterLeave: Function, onAfterEnter: Function, width: Boolean, reverse: Boolean }, setup(e, { slots: t }) {
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
    const { group: l, width: s, appear: c, mode: d } = e, u = l ? yc : kt, f = { name: s ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition", appear: c, onEnter: i, onAfterEnter: a, onBeforeLeave: o, onLeave: r, onAfterLeave: n };
    return l || (f.mode = d), C(u, f, t);
  };
} }), Kp = L([L("@keyframes rotator", `
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
 `, [G("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [bn()]), G("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [bn({ left: "50%", top: "50%", originalTransform: "translateX(-50%) translateY(-50%)" })]), G("container", `
 animation: rotator 3s linear infinite both;
 `, [G("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Kr = "1.6s", Up = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, qp = te({ name: "BaseLoading", props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, Up), setup(e) {
  Go("-base-loading", Kp, me(e, "clsPrefix"));
}, render() {
  const { clsPrefix: e, radius: t, strokeWidth: o, stroke: r, scale: n } = this, i = t / n;
  return C("div", { class: `${e}-base-loading`, role: "img", "aria-label": "loading" }, C(ds, null, { default: () => this.show ? C("div", { key: "icon", class: `${e}-base-loading__transition-wrapper` }, C("div", { class: `${e}-base-loading__container` }, C("svg", { class: `${e}-base-loading__icon`, viewBox: `0 0 ${2 * i} ${2 * i}`, xmlns: "http://www.w3.org/2000/svg", style: { color: r } }, C("g", null, C("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};270 ${i} ${i}`, begin: "0s", dur: Kr, fill: "freeze", repeatCount: "indefinite" }), C("circle", { class: `${e}-base-loading__icon`, fill: "none", stroke: "currentColor", "stroke-width": o, "stroke-linecap": "round", cx: i, cy: i, r: t - o / 2, "stroke-dasharray": 5.67 * t, "stroke-dashoffset": 18.48 * t }, C("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`, begin: "0s", dur: Kr, fill: "freeze", repeatCount: "indefinite" }), C("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * t};${1.42 * t};${5.67 * t}`, begin: "0s", dur: Kr, fill: "freeze", repeatCount: "indefinite" })))))) : C("div", { key: "placeholder", class: `${e}-base-loading__placeholder` }, this.$slots) }));
} }), { cubicBezierEaseInOut: Pa } = eo;
function fs({ name: e = "fade-in", enterDuration: t = "0.2s", leaveDuration: o = "0.2s", enterCubicBezier: r = Pa, leaveCubicBezier: n = Pa } = {}) {
  return [L(`&.${e}-transition-enter-active`, { transition: `all ${t} ${r}!important` }), L(`&.${e}-transition-leave-active`, { transition: `all ${o} ${n}!important` }), L(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, { opacity: 0 }), L(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, { opacity: 1 })];
}
const X = { neutralBase: "#FFF", neutralInvertBase: "#000", neutralTextBase: "#000", neutralPopover: "#fff", neutralCard: "#fff", neutralModal: "#fff", neutralBody: "#fff", alpha1: "0.82", alpha2: "0.72", alpha3: "0.38", alpha4: "0.24", alpha5: "0.18", alphaClose: "0.6", alphaDisabled: "0.5", alphaAvatar: "0.2", alphaProgressRail: ".08", alphaInput: "0", alphaScrollbar: "0.25", alphaScrollbarHover: "0.4", primaryHover: "#36ad6a", primaryDefault: "#18a058", primaryActive: "#0c7a43", primarySuppl: "#36ad6a", infoHover: "#4098fc", infoDefault: "#2080f0", infoActive: "#1060c9", infoSuppl: "#4098fc", errorHover: "#de576d", errorDefault: "#d03050", errorActive: "#ab1f3f", errorSuppl: "#de576d", warningHover: "#fcb040", warningDefault: "#f0a020", warningActive: "#c97c10", warningSuppl: "#fcb040", successHover: "#36ad6a", successDefault: "#18a058", successActive: "#0c7a43", successSuppl: "#36ad6a" }, Yp = Lt(X.neutralBase), hs = Lt(X.neutralInvertBase), Xp = `rgba(${hs.slice(0, 3).join(", ")}, `;
function Ea(e) {
  return `${Xp + String(e)})`;
}
function De(e) {
  const t = Array.from(hs);
  return t[3] = Number(e), W(Yp, t);
}
const F = Object.assign(Object.assign({ name: "common" }, eo), { baseColor: X.neutralBase, primaryColor: X.primaryDefault, primaryColorHover: X.primaryHover, primaryColorPressed: X.primaryActive, primaryColorSuppl: X.primarySuppl, infoColor: X.infoDefault, infoColorHover: X.infoHover, infoColorPressed: X.infoActive, infoColorSuppl: X.infoSuppl, successColor: X.successDefault, successColorHover: X.successHover, successColorPressed: X.successActive, successColorSuppl: X.successSuppl, warningColor: X.warningDefault, warningColorHover: X.warningHover, warningColorPressed: X.warningActive, warningColorSuppl: X.warningSuppl, errorColor: X.errorDefault, errorColorHover: X.errorHover, errorColorPressed: X.errorActive, errorColorSuppl: X.errorSuppl, textColorBase: X.neutralTextBase, textColor1: "rgb(31, 34, 37)", textColor2: "rgb(51, 54, 57)", textColor3: "rgb(118, 124, 130)", textColorDisabled: De(X.alpha4), placeholderColor: De(X.alpha4), placeholderColorDisabled: De(X.alpha5), iconColor: De(X.alpha4), iconColorHover: Qo(De(X.alpha4), { lightness: 0.75 }), iconColorPressed: Qo(De(X.alpha4), { lightness: 0.9 }), iconColorDisabled: De(X.alpha5), opacity1: X.alpha1, opacity2: X.alpha2, opacity3: X.alpha3, opacity4: X.alpha4, opacity5: X.alpha5, dividerColor: "rgb(239, 239, 245)", borderColor: "rgb(224, 224, 230)", closeIconColor: De(Number(X.alphaClose)), closeIconColorHover: De(Number(X.alphaClose)), closeIconColorPressed: De(Number(X.alphaClose)), closeColorHover: "rgba(0, 0, 0, .09)", closeColorPressed: "rgba(0, 0, 0, .13)", clearColor: De(X.alpha4), clearColorHover: Qo(De(X.alpha4), { lightness: 0.75 }), clearColorPressed: Qo(De(X.alpha4), { lightness: 0.9 }), scrollbarColor: Ea(X.alphaScrollbar), scrollbarColorHover: Ea(X.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: De(X.alphaProgressRail), railColor: "rgb(219, 219, 223)", popoverColor: X.neutralPopover, tableColor: X.neutralCard, cardColor: X.neutralCard, modalColor: X.neutralModal, bodyColor: X.neutralBody, tagColor: "#eee", avatarColor: De(X.alphaAvatar), invertedColor: "rgb(0, 20, 40)", inputColor: De(X.alphaInput), codeColor: "rgb(244, 244, 248)", tabColor: "rgb(247, 247, 250)", actionColor: "rgb(250, 250, 252)", tableHeaderColor: "rgb(250, 250, 252)", hoverColor: "rgb(243, 243, 245)", tableColorHover: "rgba(0, 0, 100, 0.03)", tableColorStriped: "rgba(0, 0, 100, 0.02)", pressedColor: "rgb(237, 237, 239)", opacityDisabled: X.alphaDisabled, inputColorDisabled: "rgb(250, 250, 252)", buttonColor2: "rgba(46, 51, 56, .05)", buttonColor2Hover: "rgba(46, 51, 56, .09)", buttonColor2Pressed: "rgba(46, 51, 56, .13)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), Zp = { railInsetHorizontalBottom: "auto 2px 4px 2px", railInsetHorizontalTop: "4px 2px auto 2px", railInsetVerticalRight: "2px 4px 2px auto", railInsetVerticalLeft: "2px auto 2px 4px", railColor: "transparent" };
function Qp(e) {
  const { scrollbarColor: t, scrollbarColorHover: o, scrollbarHeight: r, scrollbarWidth: n, scrollbarBorderRadius: i } = e;
  return Object.assign(Object.assign({}, Zp), { height: r, width: n, borderRadius: i, color: t, colorHover: o });
}
const Le = { name: "Scrollbar", common: F, self: Qp }, Jp = Q("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [L(">", [Q("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [L("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), L(">", [Q("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), L(">, +", [Q("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [U("horizontal", `
 height: var(--n-scrollbar-height);
 `, [L(">", [G("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), U("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), U("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), U("vertical", `
 width: var(--n-scrollbar-width);
 `, [L(">", [G("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), U("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), U("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), U("disabled", [L(">", [G("scrollbar", "pointer-events: none;")])]), L(">", [G("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [fs(), L("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), eg = Object.assign(Object.assign({}, Ce.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: "hover" }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: "right" }, xPlacement: { type: String, default: "bottom" } }), ps = te({ name: "Scrollbar", props: eg, inheritAttrs: false, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o, mergedRtlRef: r } = gt(e), n = jo("Scrollbar", r, t), i = _(null), a = _(null), l = _(null), s = _(null), c = _(null), d = _(null), u = _(null), f = _(null), h = _(null), p = _(null), m = _(null), v = _(0), g = _(0), x = _(false), $ = _(false);
  let S = false, E = false, A, b, w = 0, P = 0, O = 0, H = 0;
  const M = Mh(), V = Ce("Scrollbar", "-scrollbar", Jp, Le, e, t), T = B(() => {
    const { value: D } = f, { value: q } = d, { value: ee } = p;
    return D === null || q === null || ee === null ? 0 : Math.min(D, ee * D / q + Wi(V.value.self.width) * 1.5);
  }), y = B(() => `${T.value}px`), I = B(() => {
    const { value: D } = h, { value: q } = u, { value: ee } = m;
    return D === null || q === null || ee === null ? 0 : ee * D / q + Wi(V.value.self.height) * 1.5;
  }), z = B(() => `${I.value}px`), N = B(() => {
    const { value: D } = f, { value: q } = v, { value: ee } = d, { value: ve } = p;
    if (D === null || ee === null || ve === null) return 0;
    {
      const ze = ee - D;
      return ze ? q / ze * (ve - T.value) : 0;
    }
  }), Z = B(() => `${N.value}px`), ne = B(() => {
    const { value: D } = h, { value: q } = g, { value: ee } = u, { value: ve } = m;
    if (D === null || ee === null || ve === null) return 0;
    {
      const ze = ee - D;
      return ze ? q / ze * (ve - I.value) : 0;
    }
  }), ue = B(() => `${ne.value}px`), ce = B(() => {
    const { value: D } = f, { value: q } = d;
    return D !== null && q !== null && q > D;
  }), Fe = B(() => {
    const { value: D } = h, { value: q } = u;
    return D !== null && q !== null && q > D;
  }), He = B(() => {
    const { trigger: D } = e;
    return D === "none" || x.value;
  }), ot = B(() => {
    const { trigger: D } = e;
    return D === "none" || $.value;
  }), ae = B(() => {
    const { container: D } = e;
    return D ? D() : a.value;
  }), R = B(() => {
    const { content: D } = e;
    return D ? D() : l.value;
  }), j = (D, q) => {
    if (!e.scrollable) return;
    if (typeof D == "number") {
      oe(D, q ?? 0, 0, false, "auto");
      return;
    }
    const { left: ee, top: ve, index: ze, elSize: je, position: nt, behavior: we, el: Ze, debounce: Rt = true } = D;
    (ee !== void 0 || ve !== void 0) && oe(ee ?? 0, ve ?? 0, 0, false, we), Ze !== void 0 ? oe(0, Ze.offsetTop, Ze.offsetHeight, Rt, we) : ze !== void 0 && je !== void 0 ? oe(0, ze * je, je, Rt, we) : nt === "bottom" ? oe(0, Number.MAX_SAFE_INTEGER, 0, false, we) : nt === "top" && oe(0, 0, 0, false, we);
  }, k = Hh(() => {
    e.container || j({ top: v.value, left: g.value });
  }), Y = () => {
    k.isDeactivated || Nt();
  }, ie = (D) => {
    if (k.isDeactivated) return;
    const { onResize: q } = e;
    q && q(D), Nt();
  }, xe = (D, q) => {
    if (!e.scrollable) return;
    const { value: ee } = ae;
    ee && (typeof D == "object" ? ee.scrollBy(D) : ee.scrollBy(D, q || 0));
  };
  function oe(D, q, ee, ve, ze) {
    const { value: je } = ae;
    if (je) {
      if (ve) {
        const { scrollTop: nt, offsetHeight: we } = je;
        if (q > nt) {
          q + ee <= nt + we || je.scrollTo({ left: D, top: q + ee - we, behavior: ze });
          return;
        }
      }
      je.scrollTo({ left: D, top: q, behavior: ze });
    }
  }
  function re() {
    Ir(), Se(), Nt();
  }
  function ye() {
    rt();
  }
  function rt() {
    ke(), Tr();
  }
  function ke() {
    b !== void 0 && window.clearTimeout(b), b = window.setTimeout(() => {
      $.value = false;
    }, e.duration);
  }
  function Tr() {
    A !== void 0 && window.clearTimeout(A), A = window.setTimeout(() => {
      x.value = false;
    }, e.duration);
  }
  function Ir() {
    A !== void 0 && window.clearTimeout(A), x.value = true;
  }
  function Se() {
    b !== void 0 && window.clearTimeout(b), $.value = true;
  }
  function Be(D) {
    const { onScroll: q } = e;
    q && q(D), Ht();
  }
  function Ht() {
    const { value: D } = ae;
    D && (v.value = D.scrollTop, g.value = D.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1));
  }
  function Ws() {
    const { value: D } = R;
    D && (d.value = D.offsetHeight, u.value = D.offsetWidth);
    const { value: q } = ae;
    q && (f.value = q.offsetHeight, h.value = q.offsetWidth);
    const { value: ee } = c, { value: ve } = s;
    ee && (m.value = ee.offsetWidth), ve && (p.value = ve.offsetHeight);
  }
  function ri() {
    const { value: D } = ae;
    D && (v.value = D.scrollTop, g.value = D.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1), f.value = D.offsetHeight, h.value = D.offsetWidth, d.value = D.scrollHeight, u.value = D.scrollWidth);
    const { value: q } = c, { value: ee } = s;
    q && (m.value = q.offsetWidth), ee && (p.value = ee.offsetHeight);
  }
  function Nt() {
    e.scrollable && (e.useUnifiedContainer ? ri() : (Ws(), Ht()));
  }
  function ni(D) {
    var q;
    return !(!((q = i.value) === null || q === void 0) && q.contains(Lo(D)));
  }
  function Vs(D) {
    D.preventDefault(), D.stopPropagation(), E = true, pe("mousemove", window, ii, true), pe("mouseup", window, ai, true), P = g.value, O = (n == null ? void 0 : n.value) ? window.innerWidth - D.clientX : D.clientX;
  }
  function ii(D) {
    if (!E) return;
    A !== void 0 && window.clearTimeout(A), b !== void 0 && window.clearTimeout(b);
    const { value: q } = h, { value: ee } = u, { value: ve } = I;
    if (q === null || ee === null) return;
    const je = ((n == null ? void 0 : n.value) ? window.innerWidth - D.clientX - O : D.clientX - O) * (ee - q) / (q - ve), nt = ee - q;
    let we = P + je;
    we = Math.min(nt, we), we = Math.max(we, 0);
    const { value: Ze } = ae;
    if (Ze) {
      Ze.scrollLeft = we * ((n == null ? void 0 : n.value) ? -1 : 1);
      const { internalOnUpdateScrollLeft: Rt } = e;
      Rt && Rt(we);
    }
  }
  function ai(D) {
    D.preventDefault(), D.stopPropagation(), he("mousemove", window, ii, true), he("mouseup", window, ai, true), E = false, Nt(), ni(D) && rt();
  }
  function js(D) {
    D.preventDefault(), D.stopPropagation(), S = true, pe("mousemove", window, Ar, true), pe("mouseup", window, zr, true), w = v.value, H = D.clientY;
  }
  function Ar(D) {
    if (!S) return;
    A !== void 0 && window.clearTimeout(A), b !== void 0 && window.clearTimeout(b);
    const { value: q } = f, { value: ee } = d, { value: ve } = T;
    if (q === null || ee === null) return;
    const je = (D.clientY - H) * (ee - q) / (q - ve), nt = ee - q;
    let we = w + je;
    we = Math.min(nt, we), we = Math.max(we, 0);
    const { value: Ze } = ae;
    Ze && (Ze.scrollTop = we);
  }
  function zr(D) {
    D.preventDefault(), D.stopPropagation(), he("mousemove", window, Ar, true), he("mouseup", window, zr, true), S = false, Nt(), ni(D) && rt();
  }
  xo(() => {
    const { value: D } = Fe, { value: q } = ce, { value: ee } = t, { value: ve } = c, { value: ze } = s;
    ve && (D ? ve.classList.remove(`${ee}-scrollbar-rail--disabled`) : ve.classList.add(`${ee}-scrollbar-rail--disabled`)), ze && (q ? ze.classList.remove(`${ee}-scrollbar-rail--disabled`) : ze.classList.add(`${ee}-scrollbar-rail--disabled`));
  }), at(() => {
    e.container || Nt();
  }), We(() => {
    A !== void 0 && window.clearTimeout(A), b !== void 0 && window.clearTimeout(b), he("mousemove", window, Ar, true), he("mouseup", window, zr, true);
  });
  const li = B(() => {
    const { common: { cubicBezierEaseInOut: D }, self: { color: q, colorHover: ee, height: ve, width: ze, borderRadius: je, railInsetHorizontalTop: nt, railInsetHorizontalBottom: we, railInsetVerticalRight: Ze, railInsetVerticalLeft: Rt, railColor: Gs } } = V.value, { top: Ks, right: Us, bottom: qs, left: Ys } = jt(nt), { top: Xs, right: Zs, bottom: Qs, left: Js } = jt(we), { top: ec, right: tc, bottom: oc, left: rc } = jt((n == null ? void 0 : n.value) ? Ca(Ze) : Ze), { top: nc, right: ic, bottom: ac, left: lc } = jt((n == null ? void 0 : n.value) ? Ca(Rt) : Rt);
    return { "--n-scrollbar-bezier": D, "--n-scrollbar-color": q, "--n-scrollbar-color-hover": ee, "--n-scrollbar-border-radius": je, "--n-scrollbar-width": ze, "--n-scrollbar-height": ve, "--n-scrollbar-rail-top-horizontal-top": Ks, "--n-scrollbar-rail-right-horizontal-top": Us, "--n-scrollbar-rail-bottom-horizontal-top": qs, "--n-scrollbar-rail-left-horizontal-top": Ys, "--n-scrollbar-rail-top-horizontal-bottom": Xs, "--n-scrollbar-rail-right-horizontal-bottom": Zs, "--n-scrollbar-rail-bottom-horizontal-bottom": Qs, "--n-scrollbar-rail-left-horizontal-bottom": Js, "--n-scrollbar-rail-top-vertical-right": ec, "--n-scrollbar-rail-right-vertical-right": tc, "--n-scrollbar-rail-bottom-vertical-right": oc, "--n-scrollbar-rail-left-vertical-right": rc, "--n-scrollbar-rail-top-vertical-left": nc, "--n-scrollbar-rail-right-vertical-left": ic, "--n-scrollbar-rail-bottom-vertical-left": ac, "--n-scrollbar-rail-left-vertical-left": lc, "--n-scrollbar-rail-color": Gs };
  }), to = o ? Et("scrollbar", void 0, li, e) : void 0;
  return Object.assign(Object.assign({}, { scrollTo: j, scrollBy: xe, sync: Nt, syncUnifiedContainer: ri, handleMouseEnterWrapper: re, handleMouseLeaveWrapper: ye }), { mergedClsPrefix: t, rtlEnabled: n, containerScrollTop: v, wrapperRef: i, containerRef: a, contentRef: l, yRailRef: s, xRailRef: c, needYBar: ce, needXBar: Fe, yBarSizePx: y, xBarSizePx: z, yBarTopPx: Z, xBarLeftPx: ue, isShowXBar: He, isShowYBar: ot, isIos: M, handleScroll: Be, handleContentResize: Y, handleContainerResize: ie, handleYScrollMouseDown: js, handleXScrollMouseDown: Vs, cssVars: o ? void 0 : li, themeClass: to == null ? void 0 : to.themeClass, onRender: to == null ? void 0 : to.onRender });
}, render() {
  var e;
  const { $slots: t, mergedClsPrefix: o, triggerDisplayManually: r, rtlEnabled: n, internalHoistYRail: i, yPlacement: a, xPlacement: l, xScrollable: s } = this;
  if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
  const c = this.trigger === "none", d = (h, p) => C("div", { ref: "yRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--vertical`, `${o}-scrollbar-rail--vertical--${a}`, h], "data-scrollbar-rail": true, style: [p || "", this.verticalRailStyle], "aria-hidden": true }, C(c ? Sa : kt, c ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? C("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), u = () => {
    var h, p;
    return (h = this.onRender) === null || h === void 0 || h.call(this), C("div", $t(this.$attrs, { role: "none", ref: "wrapperRef", class: [`${o}-scrollbar`, this.themeClass, n && `${o}-scrollbar--rtl`], style: this.cssVars, onMouseenter: r ? void 0 : this.handleMouseEnterWrapper, onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (p = t.default) === null || p === void 0 ? void 0 : p.call(t) : C("div", { role: "none", ref: "containerRef", class: [`${o}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, C(va, { onResize: this.handleContentResize }, { default: () => C("div", { ref: "contentRef", role: "none", style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle], class: [`${o}-scrollbar-content`, this.contentClass] }, t) })), i ? null : d(void 0, void 0), s && C("div", { ref: "xRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--horizontal`, `${o}-scrollbar-rail--horizontal--${l}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, C(c ? Sa : kt, c ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? C("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: n ? this.xBarLeftPx : void 0, left: n ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, f = this.container ? u() : C(va, { onResize: this.handleContainerResize }, { default: u });
  return i ? C(Jt, null, f, d(this.themeClass, this.cssVars)) : f;
} }), gs = ps;
function Ra(e) {
  return Array.isArray(e) ? e : [e];
}
const xn = { STOP: "STOP" };
function ms(e, t) {
  const o = t(e);
  e.children !== void 0 && o !== xn.STOP && e.children.forEach((r) => ms(r, t));
}
function tg(e, t = {}) {
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
function og(e, t) {
  const { isLeaf: o } = e;
  return o !== void 0 ? o : !t(e);
}
function rg(e) {
  return e.children;
}
function ng(e) {
  return e.key;
}
function ig() {
  return false;
}
function ag(e, t) {
  const { isLeaf: o } = e;
  return !(o === false && !Array.isArray(t(e)));
}
function lg(e) {
  return e.disabled === true;
}
function sg(e, t) {
  return e.isLeaf === false && !Array.isArray(t(e));
}
function Ur(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function qr(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function cg(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) || o.add(r);
  }), Array.from(o);
}
function dg(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) && o.delete(r);
  }), Array.from(o);
}
function ug(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Qx(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((o, r) => {
    t.set(o.key, r);
  }), (o) => {
    var r;
    return (r = t.get(o)) !== null && r !== void 0 ? r : null;
  };
}
class fg extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function hg(e, t, o, r) {
  return mr(t.concat(e), o, r, false);
}
function pg(e, t) {
  const o = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const n = t.treeNodeMap.get(r);
    if (n !== void 0) {
      let i = n.parent;
      for (; i !== null && !(i.disabled || o.has(i.key)); ) o.add(i.key), i = i.parent;
    }
  }), o;
}
function gg(e, t, o, r) {
  const n = mr(t, o, r, false), i = mr(e, o, r, true), a = pg(e, o), l = [];
  return n.forEach((s) => {
    (i.has(s) || a.has(s)) && l.push(s);
  }), l.forEach((s) => n.delete(s)), n;
}
function Yr(e, t) {
  const { checkedKeys: o, keysToCheck: r, keysToUncheck: n, indeterminateKeys: i, cascade: a, leafOnly: l, checkStrategy: s, allowNotLoaded: c } = e;
  if (!a) return r !== void 0 ? { checkedKeys: cg(o, r), indeterminateKeys: Array.from(i) } : n !== void 0 ? { checkedKeys: dg(o, n), indeterminateKeys: Array.from(i) } : { checkedKeys: Array.from(o), indeterminateKeys: Array.from(i) };
  const { levelTreeNodeMap: d } = t;
  let u;
  n !== void 0 ? u = gg(n, o, t, c) : r !== void 0 ? u = hg(r, o, t, c) : u = mr(o, t, c, false);
  const f = s === "parent", h = s === "child" || l, p = u, m = /* @__PURE__ */ new Set(), v = Math.max.apply(null, Array.from(d.keys()));
  for (let g = v; g >= 0; g -= 1) {
    const x = g === 0, $ = d.get(g);
    for (const S of $) {
      if (S.isLeaf) continue;
      const { key: E, shallowLoaded: A } = S;
      if (h && A && S.children.forEach((O) => {
        !O.disabled && !O.isLeaf && O.shallowLoaded && p.has(O.key) && p.delete(O.key);
      }), S.disabled || !A) continue;
      let b = true, w = false, P = true;
      for (const O of S.children) {
        const H = O.key;
        if (!O.disabled) {
          if (P && (P = false), p.has(H)) w = true;
          else if (m.has(H)) {
            w = true, b = false;
            break;
          } else if (b = false, w) break;
        }
      }
      b && !P ? (f && S.children.forEach((O) => {
        !O.disabled && p.has(O.key) && p.delete(O.key);
      }), p.add(E)) : w && m.add(E), x && h && p.has(E) && p.delete(E);
    }
  }
  return { checkedKeys: Array.from(p), indeterminateKeys: Array.from(m) };
}
function mr(e, t, o, r) {
  const { treeNodeMap: n, getChildren: i } = t, a = /* @__PURE__ */ new Set(), l = new Set(e);
  return e.forEach((s) => {
    const c = n.get(s);
    c !== void 0 && ms(c, (d) => {
      if (d.disabled) return xn.STOP;
      const { key: u } = d;
      if (!a.has(u) && (a.add(u), l.add(u), sg(d.rawNode, i))) {
        if (r) return xn.STOP;
        if (!o) throw new fg();
      }
    });
  }), l;
}
function mg(e, { includeGroup: t = false, includeSelf: o = true }, r) {
  var n;
  const i = r.treeNodeMap;
  let a = e == null ? null : (n = i.get(e)) !== null && n !== void 0 ? n : null;
  const l = { keyPath: [], treeNodePath: [], treeNode: a };
  if (a == null ? void 0 : a.ignored) return l.treeNode = null, l;
  for (; a; ) !a.ignored && (t || !a.isGroup) && l.treeNodePath.push(a), a = a.parent;
  return l.treeNodePath.reverse(), o || l.treeNodePath.pop(), l.keyPath = l.treeNodePath.map((s) => s.key), l;
}
function vg(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function bg(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n + 1) % r] : n === o.length - 1 ? null : o[n + 1];
}
function Ta(e, t, { loop: o = false, includeDisabled: r = false } = {}) {
  const n = t === "prev" ? xg : bg, i = { reverse: t === "prev" };
  let a = false, l = null;
  function s(c) {
    if (c !== null) {
      if (c === e) {
        if (!a) a = true;
        else if (!e.disabled && !e.isGroup) {
          l = e;
          return;
        }
      } else if ((!c.disabled || r) && !c.ignored && !c.isGroup) {
        l = c;
        return;
      }
      if (c.isGroup) {
        const d = Un(c, i);
        d !== null ? l = d : s(n(c, o));
      } else {
        const d = n(c, false);
        if (d !== null) s(d);
        else {
          const u = Cg(c);
          (u == null ? void 0 : u.isGroup) ? s(n(u, o)) : o && s(n(c, true));
        }
      }
    }
  }
  return s(e), l;
}
function xg(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n - 1 + r) % r] : n === 0 ? null : o[n - 1];
}
function Cg(e) {
  return e.parent;
}
function Un(e, t = {}) {
  const { reverse: o = false } = t, { children: r } = e;
  if (r) {
    const { length: n } = r, i = o ? n - 1 : 0, a = o ? -1 : n, l = o ? -1 : 1;
    for (let s = i; s !== a; s += l) {
      const c = r[s];
      if (!c.disabled && !c.ignored) if (c.isGroup) {
        const d = Un(c, t);
        if (d !== null) return d;
      } else return c;
    }
  }
  return null;
}
const yg = { getChild() {
  return this.ignored ? null : Un(this);
}, getParent() {
  const { parent: e } = this;
  return (e == null ? void 0 : e.isGroup) ? e.getParent() : e;
}, getNext(e = {}) {
  return Ta(this, "next", e);
}, getPrev(e = {}) {
  return Ta(this, "prev", e);
} };
function Sg(e, t) {
  const o = t ? new Set(t) : void 0, r = [];
  function n(i) {
    i.forEach((a) => {
      r.push(a), !(a.isLeaf || !a.children || a.ignored) && (a.isGroup || o === void 0 || o.has(a.key)) && n(a.children);
    });
  }
  return n(e), r;
}
function wg(e, t) {
  const o = e.key;
  for (; t; ) {
    if (t.key === o) return true;
    t = t.parent;
  }
  return false;
}
function vs(e, t, o, r, n, i = null, a = 0) {
  const l = [];
  return e.forEach((s, c) => {
    var d;
    const u = Object.create(r);
    if (u.rawNode = s, u.siblings = l, u.level = a, u.index = c, u.isFirstChild = c === 0, u.isLastChild = c + 1 === e.length, u.parent = i, !u.ignored) {
      const f = n(s);
      Array.isArray(f) && (u.children = vs(f, t, o, r, n, u, a + 1));
    }
    l.push(u), t.set(u.key, u), o.has(a) || o.set(a, []), (d = o.get(a)) === null || d === void 0 || d.push(u);
  }), l;
}
function $g(e, t = {}) {
  var o;
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), { getDisabled: i = lg, getIgnored: a = ig, getIsGroup: l = ug, getKey: s = ng } = t, c = (o = t.getChildren) !== null && o !== void 0 ? o : rg, d = t.ignoreEmptyChildren ? (S) => {
    const E = c(S);
    return Array.isArray(E) ? E.length ? E : null : E;
  } : c, u = Object.assign({ get key() {
    return s(this.rawNode);
  }, get disabled() {
    return i(this.rawNode);
  }, get isGroup() {
    return l(this.rawNode);
  }, get isLeaf() {
    return og(this.rawNode, d);
  }, get shallowLoaded() {
    return ag(this.rawNode, d);
  }, get ignored() {
    return a(this.rawNode);
  }, contains(S) {
    return wg(this, S);
  } }, yg), f = vs(e, r, n, u, d);
  function h(S) {
    if (S == null) return null;
    const E = r.get(S);
    return E && !E.isGroup && !E.ignored ? E : null;
  }
  function p(S) {
    if (S == null) return null;
    const E = r.get(S);
    return E && !E.ignored ? E : null;
  }
  function m(S, E) {
    const A = p(S);
    return A ? A.getPrev(E) : null;
  }
  function v(S, E) {
    const A = p(S);
    return A ? A.getNext(E) : null;
  }
  function g(S) {
    const E = p(S);
    return E ? E.getParent() : null;
  }
  function x(S) {
    const E = p(S);
    return E ? E.getChild() : null;
  }
  const $ = { treeNodes: f, treeNodeMap: r, levelTreeNodeMap: n, maxLevel: Math.max(...n.keys()), getChildren: d, getFlattenedNodes(S) {
    return Sg(f, S);
  }, getNode: h, getPrev: m, getNext: v, getParent: g, getChild: x, getFirstAvailableNode() {
    return vg(f);
  }, getPath(S, E = {}) {
    return mg(S, E, $);
  }, getCheckedKeys(S, E = {}) {
    const { cascade: A = true, leafOnly: b = false, checkStrategy: w = "all", allowNotLoaded: P = false } = E;
    return Yr({ checkedKeys: Ur(S), indeterminateKeys: qr(S), cascade: A, leafOnly: b, checkStrategy: w, allowNotLoaded: P }, $);
  }, check(S, E, A = {}) {
    const { cascade: b = true, leafOnly: w = false, checkStrategy: P = "all", allowNotLoaded: O = false } = A;
    return Yr({ checkedKeys: Ur(E), indeterminateKeys: qr(E), keysToCheck: S == null ? [] : Ra(S), cascade: b, leafOnly: w, checkStrategy: P, allowNotLoaded: O }, $);
  }, uncheck(S, E, A = {}) {
    const { cascade: b = true, leafOnly: w = false, checkStrategy: P = "all", allowNotLoaded: O = false } = A;
    return Yr({ checkedKeys: Ur(E), indeterminateKeys: qr(E), keysToUncheck: S == null ? [] : Ra(S), cascade: b, leafOnly: w, checkStrategy: P, allowNotLoaded: O }, $);
  }, getNonLeafKeys(S = {}) {
    return tg(f, S);
  } };
  return $;
}
const Pg = { iconSizeTiny: "28px", iconSizeSmall: "34px", iconSizeMedium: "40px", iconSizeLarge: "46px", iconSizeHuge: "52px" };
function Eg(e) {
  const { textColorDisabled: t, iconColor: o, textColor2: r, fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: l, fontSizeHuge: s } = e;
  return Object.assign(Object.assign({}, Pg), { fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: l, fontSizeHuge: s, textColor: t, iconColor: o, extraTextColor: r });
}
const Ft = { name: "Empty", common: F, self: Eg }, Rg = { height: "calc(var(--n-option-height) * 7.6)", paddingTiny: "4px 0", paddingSmall: "4px 0", paddingMedium: "4px 0", paddingLarge: "4px 0", paddingHuge: "4px 0", optionPaddingTiny: "0 12px", optionPaddingSmall: "0 12px", optionPaddingMedium: "0 12px", optionPaddingLarge: "0 12px", optionPaddingHuge: "0 12px", loadingSize: "18px" };
function Tg(e) {
  const { borderRadius: t, popoverColor: o, textColor3: r, dividerColor: n, textColor2: i, primaryColorPressed: a, textColorDisabled: l, primaryColor: s, opacityDisabled: c, hoverColor: d, fontSizeTiny: u, fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p, fontSizeHuge: m, heightTiny: v, heightSmall: g, heightMedium: x, heightLarge: $, heightHuge: S } = e;
  return Object.assign(Object.assign({}, Rg), { optionFontSizeTiny: u, optionFontSizeSmall: f, optionFontSizeMedium: h, optionFontSizeLarge: p, optionFontSizeHuge: m, optionHeightTiny: v, optionHeightSmall: g, optionHeightMedium: x, optionHeightLarge: $, optionHeightHuge: S, borderRadius: t, color: o, groupHeaderTextColor: r, actionDividerColor: n, optionTextColor: i, optionTextColorPressed: a, optionTextColorDisabled: l, optionTextColorActive: s, optionOpacityDisabled: c, optionCheckColor: s, optionColorPending: d, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: d, actionTextColor: i, loadingColor: s });
}
const Uo = { name: "InternalSelectMenu", common: F, peers: { Scrollbar: Le, Empty: Ft }, self: Tg }, { cubicBezierEaseIn: Ia, cubicBezierEaseOut: Aa } = eo;
function bs({ transformOrigin: e = "inherit", duration: t = ".2s", enterScale: o = ".9", originalTransform: r = "", originalTransition: n = "" } = {}) {
  return [L("&.fade-in-scale-up-transition-leave-active", { transformOrigin: e, transition: `opacity ${t} ${Ia}, transform ${t} ${Ia} ${n && `,${n}`}` }), L("&.fade-in-scale-up-transition-enter-active", { transformOrigin: e, transition: `opacity ${t} ${Aa}, transform ${t} ${Aa} ${n && `,${n}`}` }), L("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", { opacity: 0, transform: `${r} scale(${o})` }), L("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", { opacity: 1, transform: `${r} scale(1)` })];
}
const Ig = { space: "6px", spaceArrow: "10px", arrowOffset: "10px", arrowOffsetVertical: "10px", arrowHeight: "6px", padding: "8px 14px" };
function Ag(e) {
  const { boxShadow2: t, popoverColor: o, textColor2: r, borderRadius: n, fontSize: i, dividerColor: a } = e;
  return Object.assign(Object.assign({}, Ig), { fontSize: i, borderRadius: n, color: o, dividerColor: a, textColor: r, boxShadow: t });
}
const Dt = { name: "Popover", common: F, peers: { Scrollbar: Le }, self: Ag }, Xr = { top: "bottom", bottom: "top", left: "right", right: "left" }, Me = "var(--n-arrow-height) * 1.414", zg = L([Q("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [L(">", [Q("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), St("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [St("scrollable", [St("show-header-or-footer", "padding: var(--n-padding);")])]), G("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), G("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), U("scrollable, show-header-or-footer", [G("content", `
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
 width: calc(${Me});
 height: calc(${Me});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), L("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `), L("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `), L("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), L("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), Qe("top-start", `
 top: calc(${Me} / -2);
 left: calc(${bt("top-start")} - var(--v-offset-left));
 `), Qe("top", `
 top: calc(${Me} / -2);
 transform: translateX(calc(${Me} / -2)) rotate(45deg);
 left: 50%;
 `), Qe("top-end", `
 top: calc(${Me} / -2);
 right: calc(${bt("top-end")} + var(--v-offset-left));
 `), Qe("bottom-start", `
 bottom: calc(${Me} / -2);
 left: calc(${bt("bottom-start")} - var(--v-offset-left));
 `), Qe("bottom", `
 bottom: calc(${Me} / -2);
 transform: translateX(calc(${Me} / -2)) rotate(45deg);
 left: 50%;
 `), Qe("bottom-end", `
 bottom: calc(${Me} / -2);
 right: calc(${bt("bottom-end")} + var(--v-offset-left));
 `), Qe("left-start", `
 left: calc(${Me} / -2);
 top: calc(${bt("left-start")} - var(--v-offset-top));
 `), Qe("left", `
 left: calc(${Me} / -2);
 transform: translateY(calc(${Me} / -2)) rotate(45deg);
 top: 50%;
 `), Qe("left-end", `
 left: calc(${Me} / -2);
 bottom: calc(${bt("left-end")} + var(--v-offset-top));
 `), Qe("right-start", `
 right: calc(${Me} / -2);
 top: calc(${bt("right-start")} - var(--v-offset-top));
 `), Qe("right", `
 right: calc(${Me} / -2);
 transform: translateY(calc(${Me} / -2)) rotate(45deg);
 top: 50%;
 `), Qe("right-end", `
 right: calc(${Me} / -2);
 bottom: calc(${bt("right-end")} + var(--v-offset-top));
 `), ...zu({ top: ["right-start", "left-start"], right: ["top-end", "bottom-end"], bottom: ["right-end", "left-end"], left: ["top-start", "bottom-start"] }, (e, t) => {
  const o = ["right", "left"].includes(t), r = o ? "width" : "height";
  return e.map((n) => {
    const i = n.split("-")[1] === "end", l = `calc((${`var(--v-target-${r}, 0px)`} - ${Me}) / 2)`, s = bt(n);
    return L(`[v-placement="${n}"] >`, [Q("popover-shared", [U("center-arrow", [Q("popover-arrow", `${t}: calc(max(${l}, ${s}) ${i ? "+" : "-"} var(--v-offset-${o ? "left" : "top"}));`)])])]);
  });
})]);
function bt(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Qe(e, t) {
  const o = e.split("-")[0], r = ["top", "bottom"].includes(o) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return L(`[v-placement="${e}"] >`, [Q("popover-shared", `
 margin-${Xr[o]}: var(--n-space);
 `, [U("show-arrow", `
 margin-${Xr[o]}: var(--n-space-arrow);
 `), U("overlap", `
 margin: 0;
 `), lh("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${Xr[o]}: auto;
 ${r}
 `, [Q("popover-arrow", t)])])]);
}
const xs = Object.assign(Object.assign({}, Ce.props), { to: vo.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function Cs({ arrowClass: e, arrowStyle: t, arrowWrapperClass: o, arrowWrapperStyle: r, clsPrefix: n }) {
  return C("div", { key: "__popover-arrow__", style: r, class: [`${n}-popover-arrow-wrapper`, o] }, C("div", { class: [`${n}-popover-arrow`, e], style: t }));
}
const Mg = te({ name: "PopoverBody", inheritAttrs: false, props: xs, setup(e, { slots: t, attrs: o }) {
  const { namespaceRef: r, mergedClsPrefixRef: n, inlineThemeDisabled: i, mergedRtlRef: a } = gt(e), l = Ce("Popover", "-popover", zg, Dt, e, n), s = jo("Popover", a, n), c = _(null), d = le("NPopover"), u = _(null), f = _(e.show), h = _(false);
  xo(() => {
    const { show: P } = e;
    P && !Rp() && !e.internalDeactivateImmediately && (h.value = true);
  });
  const p = B(() => {
    const { trigger: P, onClickoutside: O } = e, H = [], { positionManuallyRef: { value: M } } = d;
    return M || (P === "click" && !O && H.push([gn, A, void 0, { capture: true }]), P === "hover" && H.push([Wh, E])), O && H.push([gn, A, void 0, { capture: true }]), (e.displayDirective === "show" || e.animated && h.value) && H.push([tn, e.show]), H;
  }), m = B(() => {
    const { common: { cubicBezierEaseInOut: P, cubicBezierEaseIn: O, cubicBezierEaseOut: H }, self: { space: M, spaceArrow: V, padding: T, fontSize: y, textColor: I, dividerColor: z, color: N, boxShadow: Z, borderRadius: ne, arrowHeight: ue, arrowOffset: ce, arrowOffsetVertical: Fe } } = l.value;
    return { "--n-box-shadow": Z, "--n-bezier": P, "--n-bezier-ease-in": O, "--n-bezier-ease-out": H, "--n-font-size": y, "--n-text-color": I, "--n-color": N, "--n-divider-color": z, "--n-border-radius": ne, "--n-arrow-height": ue, "--n-arrow-offset": ce, "--n-arrow-offset-vertical": Fe, "--n-padding": T, "--n-space": M, "--n-space-arrow": V };
  }), v = B(() => {
    const P = e.width === "trigger" ? void 0 : sr(e.width), O = [];
    P && O.push({ width: P });
    const { maxWidth: H, minWidth: M } = e;
    return H && O.push({ maxWidth: sr(H) }), M && O.push({ maxWidth: sr(M) }), i || O.push(m.value), O;
  }), g = i ? Et("popover", void 0, m, e) : void 0;
  d.setBodyInstance({ syncPosition: x }), We(() => {
    d.setBodyInstance(null);
  }), Ie(me(e, "show"), (P) => {
    e.animated || (P ? f.value = true : f.value = false);
  });
  function x() {
    var P;
    (P = c.value) === null || P === void 0 || P.syncPosition();
  }
  function $(P) {
    e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(P);
  }
  function S(P) {
    e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(P);
  }
  function E(P) {
    e.trigger === "hover" && !b().contains(Lo(P)) && d.handleMouseMoveOutside(P);
  }
  function A(P) {
    (e.trigger === "click" && !b().contains(Lo(P)) || e.onClickoutside) && d.handleClickOutside(P);
  }
  function b() {
    return d.getTriggerElement();
  }
  Te(Wo, u), Te(wr, null), Te($r, null);
  function w() {
    if (g == null ? void 0 : g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value)) return null;
    let O;
    const H = d.internalRenderBodyRef.value, { value: M } = n;
    if (H) O = H([`${M}-popover-shared`, (s == null ? void 0 : s.value) && `${M}-popover--rtl`, g == null ? void 0 : g.themeClass.value, e.overlap && `${M}-popover-shared--overlap`, e.showArrow && `${M}-popover-shared--show-arrow`, e.arrowPointToCenter && `${M}-popover-shared--center-arrow`], u, v.value, $, S);
    else {
      const { value: V } = d.extraClassRef, { internalTrapFocus: T } = e, y = !vn(t.header) || !vn(t.footer), I = () => {
        var z, N;
        const Z = y ? C(Jt, null, Ke(t.header, (ce) => ce ? C("div", { class: [`${M}-popover__header`, e.headerClass], style: e.headerStyle }, ce) : null), Ke(t.default, (ce) => ce ? C("div", { class: [`${M}-popover__content`, e.contentClass], style: e.contentStyle }, t) : null), Ke(t.footer, (ce) => ce ? C("div", { class: [`${M}-popover__footer`, e.footerClass], style: e.footerStyle }, ce) : null)) : e.scrollable ? (z = t.default) === null || z === void 0 ? void 0 : z.call(t) : C("div", { class: [`${M}-popover__content`, e.contentClass], style: e.contentStyle }, t), ne = e.scrollable ? C(gs, { themeOverrides: l.value.peerOverrides.Scrollbar, theme: l.value.peers.Scrollbar, contentClass: y ? void 0 : `${M}-popover__content ${(N = e.contentClass) !== null && N !== void 0 ? N : ""}`, contentStyle: y ? void 0 : e.contentStyle }, { default: () => Z }) : Z, ue = e.showArrow ? Cs({ arrowClass: e.arrowClass, arrowStyle: e.arrowStyle, arrowWrapperClass: e.arrowWrapperClass, arrowWrapperStyle: e.arrowWrapperStyle, clsPrefix: M }) : null;
        return [ne, ue];
      };
      O = C("div", $t({ class: [`${M}-popover`, `${M}-popover-shared`, (s == null ? void 0 : s.value) && `${M}-popover--rtl`, g == null ? void 0 : g.themeClass.value, V.map((z) => `${M}-${z}`), { [`${M}-popover--scrollable`]: e.scrollable, [`${M}-popover--show-header-or-footer`]: y, [`${M}-popover--raw`]: e.raw, [`${M}-popover-shared--overlap`]: e.overlap, [`${M}-popover-shared--show-arrow`]: e.showArrow, [`${M}-popover-shared--center-arrow`]: e.arrowPointToCenter }], ref: u, style: v.value, onKeydown: d.handleKeydown, onMouseenter: $, onMouseleave: S }, o), T ? C(is, { active: e.show, autoFocus: true }, { default: I }) : I());
    }
    return Xt(O, p.value);
  }
  return { displayed: h, namespace: r, isMounted: d.isMountedRef, zIndex: d.zIndexRef, followerRef: c, adjustedTo: vo(e), followerEnabled: f, renderContentNode: w };
}, render() {
  return C(ql, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === vo.tdkey }, { default: () => this.animated ? C(kt, { name: "popover-transition", appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var e;
    (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), Og = Object.keys(xs), kg = { focus: ["onFocus", "onBlur"], click: ["onClick"], hover: ["onMouseenter", "onMouseleave"], manual: [], nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"] };
function Bg(e, t, o) {
  kg[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const n = e.props[r], i = o[r];
    n ? e.props[r] = (...a) => {
      n(...a), i(...a);
    } : e.props[r] = i;
  });
}
const Pr = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: "hover" }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: "top" }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: "if" }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: vo.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number }, Lg = Object.assign(Object.assign(Object.assign({}, Ce.props), Pr), { internalOnAfterLeave: Function, internalRenderBody: Function }), ys = te({ name: "Popover", inheritAttrs: false, props: Lg, slots: Object, __popover__: true, setup(e) {
  const t = Sr(), o = _(null), r = B(() => e.show), n = _(e.defaultShow), i = Dl(r, n), a = tt(() => e.disabled ? false : i.value), l = () => {
    if (e.disabled) return true;
    const { getDisabled: y } = e;
    return !!(y == null ? void 0 : y());
  }, s = () => l() ? false : i.value, c = Hl(e, ["arrow", "showArrow"]), d = B(() => e.overlap ? false : c.value);
  let u = null;
  const f = _(null), h = _(null), p = tt(() => e.x !== void 0 && e.y !== void 0);
  function m(y) {
    const { "onUpdate:show": I, onUpdateShow: z, onShow: N, onHide: Z } = e;
    n.value = y, I && qe(I, y), z && qe(z, y), y && N && qe(N, true), y && Z && qe(Z, false);
  }
  function v() {
    u && u.syncPosition();
  }
  function g() {
    const { value: y } = f;
    y && (window.clearTimeout(y), f.value = null);
  }
  function x() {
    const { value: y } = h;
    y && (window.clearTimeout(y), h.value = null);
  }
  function $() {
    const y = l();
    if (e.trigger === "focus" && !y) {
      if (s()) return;
      m(true);
    }
  }
  function S() {
    const y = l();
    if (e.trigger === "focus" && !y) {
      if (!s()) return;
      m(false);
    }
  }
  function E() {
    const y = l();
    if (e.trigger === "hover" && !y) {
      if (x(), f.value !== null || s()) return;
      const I = () => {
        m(true), f.value = null;
      }, { delay: z } = e;
      z === 0 ? I() : f.value = window.setTimeout(I, z);
    }
  }
  function A() {
    const y = l();
    if (e.trigger === "hover" && !y) {
      if (g(), h.value !== null || !s()) return;
      const I = () => {
        m(false), h.value = null;
      }, { duration: z } = e;
      z === 0 ? I() : h.value = window.setTimeout(I, z);
    }
  }
  function b() {
    A();
  }
  function w(y) {
    var I;
    s() && (e.trigger === "click" && (g(), x(), m(false)), (I = e.onClickoutside) === null || I === void 0 || I.call(e, y));
  }
  function P() {
    if (e.trigger === "click" && !l()) {
      g(), x();
      const y = !s();
      m(y);
    }
  }
  function O(y) {
    e.internalTrapFocus && y.key === "Escape" && (g(), x(), m(false));
  }
  function H(y) {
    n.value = y;
  }
  function M() {
    var y;
    return (y = o.value) === null || y === void 0 ? void 0 : y.targetRef;
  }
  function V(y) {
    u = y;
  }
  return Te("NPopover", { getTriggerElement: M, handleKeydown: O, handleMouseEnter: E, handleMouseLeave: A, handleClickOutside: w, handleMouseMoveOutside: b, setBodyInstance: V, positionManuallyRef: p, isMountedRef: t, zIndexRef: me(e, "zIndex"), extraClassRef: me(e, "internalExtraClass"), internalRenderBodyRef: me(e, "internalRenderBody") }), xo(() => {
    i.value && l() && m(false);
  }), { binderInstRef: o, positionManually: p, mergedShowConsideringDisabledProp: a, uncontrolledShow: n, mergedShowArrow: d, getMergedShow: s, setShow: H, handleClick: P, handleMouseEnter: E, handleMouseLeave: A, handleFocus: $, handleBlur: S, syncPosition: v };
}, render() {
  var e;
  const { positionManually: t, $slots: o } = this;
  let r, n = false;
  if (!t && (r = zp(o, "trigger"), r)) {
    r = ja(r), r = r.type === Sc ? C("span", [r]) : r;
    const i = { onClick: this.handleClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur };
    if (!((e = r.type) === null || e === void 0) && e.__popover__) n = true, r.props || (r.props = { internalSyncTargetWithParent: true, internalInheritedEventHandlers: [] }), r.props.internalSyncTargetWithParent = true, r.props.internalInheritedEventHandlers ? r.props.internalInheritedEventHandlers = [i, ...r.props.internalInheritedEventHandlers] : r.props.internalInheritedEventHandlers = [i];
    else {
      const { internalInheritedEventHandlers: a } = this, l = [i, ...a], s = { onBlur: (c) => {
        l.forEach((d) => {
          d.onBlur(c);
        });
      }, onFocus: (c) => {
        l.forEach((d) => {
          d.onFocus(c);
        });
      }, onClick: (c) => {
        l.forEach((d) => {
          d.onClick(c);
        });
      }, onMouseenter: (c) => {
        l.forEach((d) => {
          d.onMouseenter(c);
        });
      }, onMouseleave: (c) => {
        l.forEach((d) => {
          d.onMouseleave(c);
        });
      } };
      Bg(r, a ? "nested" : t ? "manual" : this.trigger, s);
    }
  }
  return C(jl, { ref: "binderInstRef", syncTarget: !n, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    const i = this.getMergedShow();
    return [this.internalTrapFocus && i ? Xt(C("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 } }), [[jn, { enabled: i, zIndex: this.zIndex }]]) : null, t ? null : C(Gl, null, { default: () => r }), C(Mg, Do(this.$props, Og, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: i })), { default: () => {
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
} }), Fg = { closeIconSizeTiny: "12px", closeIconSizeSmall: "12px", closeIconSizeMedium: "14px", closeIconSizeLarge: "14px", closeSizeTiny: "16px", closeSizeSmall: "16px", closeSizeMedium: "18px", closeSizeLarge: "18px", padding: "0 7px", closeMargin: "0 0 0 4px" };
function Dg(e) {
  const { textColor2: t, primaryColorHover: o, primaryColorPressed: r, primaryColor: n, infoColor: i, successColor: a, warningColor: l, errorColor: s, baseColor: c, borderColor: d, opacityDisabled: u, tagColor: f, closeIconColor: h, closeIconColorHover: p, closeIconColorPressed: m, borderRadiusSmall: v, fontSizeMini: g, fontSizeTiny: x, fontSizeSmall: $, fontSizeMedium: S, heightMini: E, heightTiny: A, heightSmall: b, heightMedium: w, closeColorHover: P, closeColorPressed: O, buttonColor2Hover: H, buttonColor2Pressed: M, fontWeightStrong: V } = e;
  return Object.assign(Object.assign({}, Fg), { closeBorderRadius: v, heightTiny: E, heightSmall: A, heightMedium: b, heightLarge: w, borderRadius: v, opacityDisabled: u, fontSizeTiny: g, fontSizeSmall: x, fontSizeMedium: $, fontSizeLarge: S, fontWeightStrong: V, textColorCheckable: t, textColorHoverCheckable: t, textColorPressedCheckable: t, textColorChecked: c, colorCheckable: "#0000", colorHoverCheckable: H, colorPressedCheckable: M, colorChecked: n, colorCheckedHover: o, colorCheckedPressed: r, border: `1px solid ${d}`, textColor: t, color: f, colorBordered: "rgb(250, 250, 252)", closeIconColor: h, closeIconColorHover: p, closeIconColorPressed: m, closeColorHover: P, closeColorPressed: O, borderPrimary: `1px solid ${K(n, { alpha: 0.3 })}`, textColorPrimary: n, colorPrimary: K(n, { alpha: 0.12 }), colorBorderedPrimary: K(n, { alpha: 0.1 }), closeIconColorPrimary: n, closeIconColorHoverPrimary: n, closeIconColorPressedPrimary: n, closeColorHoverPrimary: K(n, { alpha: 0.12 }), closeColorPressedPrimary: K(n, { alpha: 0.18 }), borderInfo: `1px solid ${K(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: K(i, { alpha: 0.12 }), colorBorderedInfo: K(i, { alpha: 0.1 }), closeIconColorInfo: i, closeIconColorHoverInfo: i, closeIconColorPressedInfo: i, closeColorHoverInfo: K(i, { alpha: 0.12 }), closeColorPressedInfo: K(i, { alpha: 0.18 }), borderSuccess: `1px solid ${K(a, { alpha: 0.3 })}`, textColorSuccess: a, colorSuccess: K(a, { alpha: 0.12 }), colorBorderedSuccess: K(a, { alpha: 0.1 }), closeIconColorSuccess: a, closeIconColorHoverSuccess: a, closeIconColorPressedSuccess: a, closeColorHoverSuccess: K(a, { alpha: 0.12 }), closeColorPressedSuccess: K(a, { alpha: 0.18 }), borderWarning: `1px solid ${K(l, { alpha: 0.35 })}`, textColorWarning: l, colorWarning: K(l, { alpha: 0.15 }), colorBorderedWarning: K(l, { alpha: 0.12 }), closeIconColorWarning: l, closeIconColorHoverWarning: l, closeIconColorPressedWarning: l, closeColorHoverWarning: K(l, { alpha: 0.12 }), closeColorPressedWarning: K(l, { alpha: 0.18 }), borderError: `1px solid ${K(s, { alpha: 0.23 })}`, textColorError: s, colorError: K(s, { alpha: 0.1 }), colorBorderedError: K(s, { alpha: 0.08 }), closeIconColorError: s, closeIconColorHoverError: s, closeIconColorPressedError: s, closeColorHoverError: K(s, { alpha: 0.12 }), closeColorPressedError: K(s, { alpha: 0.18 }) });
}
const Ss = { name: "Tag", common: F, self: Dg }, Hg = { paddingSingle: "0 26px 0 12px", paddingMultiple: "3px 26px 0 12px", clearSize: "16px", arrowSize: "16px" };
function Ng(e) {
  const { borderRadius: t, textColor2: o, textColorDisabled: r, inputColor: n, inputColorDisabled: i, primaryColor: a, primaryColorHover: l, warningColor: s, warningColorHover: c, errorColor: d, errorColorHover: u, borderColor: f, iconColor: h, iconColorDisabled: p, clearColor: m, clearColorHover: v, clearColorPressed: g, placeholderColor: x, placeholderColorDisabled: $, fontSizeTiny: S, fontSizeSmall: E, fontSizeMedium: A, fontSizeLarge: b, heightTiny: w, heightSmall: P, heightMedium: O, heightLarge: H, fontWeight: M } = e;
  return Object.assign(Object.assign({}, Hg), { fontSizeTiny: S, fontSizeSmall: E, fontSizeMedium: A, fontSizeLarge: b, heightTiny: w, heightSmall: P, heightMedium: O, heightLarge: H, borderRadius: t, fontWeight: M, textColor: o, textColorDisabled: r, placeholderColor: x, placeholderColorDisabled: $, color: n, colorDisabled: i, colorActive: n, border: `1px solid ${f}`, borderHover: `1px solid ${l}`, borderActive: `1px solid ${a}`, borderFocus: `1px solid ${l}`, boxShadowHover: "none", boxShadowActive: `0 0 0 2px ${K(a, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${K(a, { alpha: 0.2 })}`, caretColor: a, arrowColor: h, arrowColorDisabled: p, loadingColor: a, borderWarning: `1px solid ${s}`, borderHoverWarning: `1px solid ${c}`, borderActiveWarning: `1px solid ${s}`, borderFocusWarning: `1px solid ${c}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 0 2px ${K(s, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${K(s, { alpha: 0.2 })}`, colorActiveWarning: n, caretColorWarning: s, borderError: `1px solid ${d}`, borderHoverError: `1px solid ${u}`, borderActiveError: `1px solid ${d}`, borderFocusError: `1px solid ${u}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 0 2px ${K(d, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${K(d, { alpha: 0.2 })}`, colorActiveError: n, caretColorError: d, clearColor: m, clearColorHover: v, clearColorPressed: g });
}
const qn = { name: "InternalSelection", common: F, peers: { Popover: Dt }, self: Ng }, { cubicBezierEaseInOut: At } = eo;
function _g({ duration: e = ".2s", delay: t = ".1s" } = {}) {
  return [L("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }), L("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), L("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${At},
 max-width ${e} ${At} ${t},
 margin-left ${e} ${At} ${t},
 margin-right ${e} ${At} ${t};
 `), L("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${At} ${t},
 max-width ${e} ${At},
 margin-left ${e} ${At},
 margin-right ${e} ${At};
 `)];
}
const Wg = Q("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Vg = te({ name: "BaseWave", props: { clsPrefix: { type: String, required: true } }, setup(e) {
  Go("-base-wave", Wg, me(e, "clsPrefix"));
  const t = _(null), o = _(false);
  let r = null;
  return We(() => {
    r !== null && window.clearTimeout(r);
  }), { active: o, selfRef: t, play() {
    r !== null && (window.clearTimeout(r), o.value = false, r = null), Yt(() => {
      var n;
      (n = t.value) === null || n === void 0 || n.offsetHeight, o.value = true, r = window.setTimeout(() => {
        o.value = false, r = null;
      }, 1e3);
    });
  } };
}, render() {
  const { clsPrefix: e } = this;
  return C("div", { ref: "selfRef", "aria-hidden": true, class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`] });
} }), jg = { iconMargin: "11px 8px 0 12px", iconMarginRtl: "11px 12px 0 8px", iconSize: "24px", closeIconSize: "16px", closeSize: "20px", closeMargin: "13px 14px 0 0", closeMarginRtl: "13px 0 0 14px", padding: "13px" };
function Gg(e) {
  const { lineHeight: t, borderRadius: o, fontWeightStrong: r, baseColor: n, dividerColor: i, actionColor: a, textColor1: l, textColor2: s, closeColorHover: c, closeColorPressed: d, closeIconColor: u, closeIconColorHover: f, closeIconColorPressed: h, infoColor: p, successColor: m, warningColor: v, errorColor: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, jg), { fontSize: x, lineHeight: t, titleFontWeight: r, borderRadius: o, border: `1px solid ${i}`, color: a, titleTextColor: l, iconColor: s, contentTextColor: s, closeBorderRadius: o, closeColorHover: c, closeColorPressed: d, closeIconColor: u, closeIconColorHover: f, closeIconColorPressed: h, borderInfo: `1px solid ${W(n, K(p, { alpha: 0.25 }))}`, colorInfo: W(n, K(p, { alpha: 0.08 })), titleTextColorInfo: l, iconColorInfo: p, contentTextColorInfo: s, closeColorHoverInfo: c, closeColorPressedInfo: d, closeIconColorInfo: u, closeIconColorHoverInfo: f, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${W(n, K(m, { alpha: 0.25 }))}`, colorSuccess: W(n, K(m, { alpha: 0.08 })), titleTextColorSuccess: l, iconColorSuccess: m, contentTextColorSuccess: s, closeColorHoverSuccess: c, closeColorPressedSuccess: d, closeIconColorSuccess: u, closeIconColorHoverSuccess: f, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${W(n, K(v, { alpha: 0.33 }))}`, colorWarning: W(n, K(v, { alpha: 0.08 })), titleTextColorWarning: l, iconColorWarning: v, contentTextColorWarning: s, closeColorHoverWarning: c, closeColorPressedWarning: d, closeIconColorWarning: u, closeIconColorHoverWarning: f, closeIconColorPressedWarning: h, borderError: `1px solid ${W(n, K(g, { alpha: 0.25 }))}`, colorError: W(n, K(g, { alpha: 0.08 })), titleTextColorError: l, iconColorError: g, contentTextColorError: s, closeColorHoverError: c, closeColorPressedError: d, closeIconColorError: u, closeIconColorHoverError: f, closeIconColorPressedError: h });
}
const Kg = { name: "Alert", common: F, self: Gg }, { cubicBezierEaseInOut: st, cubicBezierEaseOut: Ug, cubicBezierEaseIn: qg } = eo;
function Jx({ overflow: e = "hidden", duration: t = ".3s", originalTransition: o = "", leavingDelay: r = "0s", foldPadding: n = false, enterToProps: i = void 0, leaveToProps: a = void 0, reverse: l = false } = {}) {
  const s = l ? "leave" : "enter", c = l ? "enter" : "leave";
  return [L(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${s}-to`, Object.assign(Object.assign({}, i), { opacity: 1 })), L(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${s}-from`, Object.assign(Object.assign({}, a), { opacity: 0, marginTop: "0 !important", marginBottom: "0 !important", paddingTop: n ? "0 !important" : void 0, paddingBottom: n ? "0 !important" : void 0 })), L(`&.fade-in-height-expand-transition-${c}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${st} ${r},
 opacity ${t} ${Ug} ${r},
 margin-top ${t} ${st} ${r},
 margin-bottom ${t} ${st} ${r},
 padding-top ${t} ${st} ${r},
 padding-bottom ${t} ${st} ${r}
 ${o ? `,${o}` : ""}
 `), L(`&.fade-in-height-expand-transition-${s}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${st},
 opacity ${t} ${qg},
 margin-top ${t} ${st},
 margin-bottom ${t} ${st},
 padding-top ${t} ${st},
 padding-bottom ${t} ${st}
 ${o ? `,${o}` : ""}
 `)];
}
const Yg = { linkFontSize: "13px", linkPadding: "0 0 0 16px", railWidth: "4px" };
function Xg(e) {
  const { borderRadius: t, railColor: o, primaryColor: r, primaryColorHover: n, primaryColorPressed: i, textColor2: a } = e;
  return Object.assign(Object.assign({}, Yg), { borderRadius: t, railColor: o, railColorActive: r, linkColor: K(r, { alpha: 0.15 }), linkTextColor: a, linkTextColorHover: n, linkTextColorPressed: i, linkTextColorActive: r });
}
const Zg = { name: "Anchor", common: F, self: Xg }, Qg = Vo && "chrome" in window;
Vo && navigator.userAgent.includes("Firefox");
const Jg = Vo && navigator.userAgent.includes("Safari") && !Qg, em = { paddingTiny: "0 8px", paddingSmall: "0 10px", paddingMedium: "0 12px", paddingLarge: "0 14px", clearSize: "16px" };
function tm(e) {
  const { textColor2: t, textColor3: o, textColorDisabled: r, primaryColor: n, primaryColorHover: i, inputColor: a, inputColorDisabled: l, borderColor: s, warningColor: c, warningColorHover: d, errorColor: u, errorColorHover: f, borderRadius: h, lineHeight: p, fontSizeTiny: m, fontSizeSmall: v, fontSizeMedium: g, fontSizeLarge: x, heightTiny: $, heightSmall: S, heightMedium: E, heightLarge: A, actionColor: b, clearColor: w, clearColorHover: P, clearColorPressed: O, placeholderColor: H, placeholderColorDisabled: M, iconColor: V, iconColorDisabled: T, iconColorHover: y, iconColorPressed: I, fontWeight: z } = e;
  return Object.assign(Object.assign({}, em), { fontWeight: z, countTextColorDisabled: r, countTextColor: o, heightTiny: $, heightSmall: S, heightMedium: E, heightLarge: A, fontSizeTiny: m, fontSizeSmall: v, fontSizeMedium: g, fontSizeLarge: x, lineHeight: p, lineHeightTextarea: p, borderRadius: h, iconSize: "16px", groupLabelColor: b, groupLabelTextColor: t, textColor: t, textColorDisabled: r, textDecorationColor: t, caretColor: n, placeholderColor: H, placeholderColorDisabled: M, color: a, colorDisabled: l, colorFocus: a, groupLabelBorder: `1px solid ${s}`, border: `1px solid ${s}`, borderHover: `1px solid ${i}`, borderDisabled: `1px solid ${s}`, borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 0 2px ${K(n, { alpha: 0.2 })}`, loadingColor: n, loadingColorWarning: c, borderWarning: `1px solid ${c}`, borderHoverWarning: `1px solid ${d}`, colorFocusWarning: a, borderFocusWarning: `1px solid ${d}`, boxShadowFocusWarning: `0 0 0 2px ${K(c, { alpha: 0.2 })}`, caretColorWarning: c, loadingColorError: u, borderError: `1px solid ${u}`, borderHoverError: `1px solid ${f}`, colorFocusError: a, borderFocusError: `1px solid ${f}`, boxShadowFocusError: `0 0 0 2px ${K(u, { alpha: 0.2 })}`, caretColorError: u, clearColor: w, clearColorHover: P, clearColorPressed: O, iconColor: V, iconColorDisabled: T, iconColorHover: y, iconColorPressed: I, suffixTextColor: t });
}
const Xe = { name: "Input", common: F, peers: { Scrollbar: Le }, self: tm };
function om(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const rm = { name: "AutoComplete", common: F, peers: { InternalSelectMenu: Uo, Input: Xe }, self: om };
function nm(e) {
  const { borderRadius: t, avatarColor: o, cardColor: r, fontSize: n, heightTiny: i, heightSmall: a, heightMedium: l, heightLarge: s, heightHuge: c, modalColor: d, popoverColor: u } = e;
  return { borderRadius: t, fontSize: n, border: `2px solid ${r}`, heightTiny: i, heightSmall: a, heightMedium: l, heightLarge: s, heightHuge: c, color: W(r, o), colorModal: W(d, o), colorPopover: W(u, o) };
}
const ws = { name: "Avatar", common: F, self: nm };
function im() {
  return { gap: "-12px" };
}
const am = { name: "AvatarGroup", common: F, peers: { Avatar: ws }, self: im }, lm = { width: "44px", height: "44px", borderRadius: "22px", iconSize: "26px" };
function sm(e) {
  const { popoverColor: t, textColor2: o, primaryColorHover: r, primaryColorPressed: n } = e;
  return Object.assign(Object.assign({}, lm), { color: t, textColor: o, iconColor: o, iconColorHover: r, iconColorPressed: n, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
}
const cm = { name: "BackTop", common: F, self: sm };
function dm(e) {
  const { errorColor: t, infoColor: o, successColor: r, warningColor: n, fontFamily: i } = e;
  return { color: t, colorInfo: o, colorSuccess: r, colorError: t, colorWarning: n, fontSize: "12px", fontFamily: i };
}
const um = { name: "Badge", common: F, self: dm }, fm = { fontWeightActive: "400" };
function hm(e) {
  const { fontSize: t, textColor3: o, textColor2: r, borderRadius: n, buttonColor2Hover: i, buttonColor2Pressed: a } = e;
  return Object.assign(Object.assign({}, fm), { fontSize: t, itemLineHeight: "1.25", itemTextColor: o, itemTextColorHover: r, itemTextColorPressed: r, itemTextColorActive: r, itemBorderRadius: n, itemColorHover: i, itemColorPressed: a, separatorColor: o });
}
const pm = { name: "Breadcrumb", common: F, self: hm };
function _t(e) {
  return W(e, [255, 255, 255, 0.16]);
}
function ir(e) {
  return W(e, [0, 0, 0, 0.12]);
}
const gm = "n-button-group", mm = { paddingTiny: "0 6px", paddingSmall: "0 10px", paddingMedium: "0 14px", paddingLarge: "0 18px", paddingRoundTiny: "0 10px", paddingRoundSmall: "0 14px", paddingRoundMedium: "0 18px", paddingRoundLarge: "0 22px", iconMarginTiny: "6px", iconMarginSmall: "6px", iconMarginMedium: "6px", iconMarginLarge: "6px", iconSizeTiny: "14px", iconSizeSmall: "18px", iconSizeMedium: "18px", iconSizeLarge: "20px", rippleDuration: ".6s" };
function vm(e) {
  const { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadius: i, fontSizeTiny: a, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: c, opacityDisabled: d, textColor2: u, textColor3: f, primaryColorHover: h, primaryColorPressed: p, borderColor: m, primaryColor: v, baseColor: g, infoColor: x, infoColorHover: $, infoColorPressed: S, successColor: E, successColorHover: A, successColorPressed: b, warningColor: w, warningColorHover: P, warningColorPressed: O, errorColor: H, errorColorHover: M, errorColorPressed: V, fontWeight: T, buttonColor2: y, buttonColor2Hover: I, buttonColor2Pressed: z, fontWeightStrong: N } = e;
  return Object.assign(Object.assign({}, mm), { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadiusTiny: i, borderRadiusSmall: i, borderRadiusMedium: i, borderRadiusLarge: i, fontSizeTiny: a, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: c, opacityDisabled: d, colorOpacitySecondary: "0.16", colorOpacitySecondaryHover: "0.22", colorOpacitySecondaryPressed: "0.28", colorSecondary: y, colorSecondaryHover: I, colorSecondaryPressed: z, colorTertiary: y, colorTertiaryHover: I, colorTertiaryPressed: z, colorQuaternary: "#0000", colorQuaternaryHover: I, colorQuaternaryPressed: z, color: "#0000", colorHover: "#0000", colorPressed: "#0000", colorFocus: "#0000", colorDisabled: "#0000", textColor: u, textColorTertiary: f, textColorHover: h, textColorPressed: p, textColorFocus: h, textColorDisabled: u, textColorText: u, textColorTextHover: h, textColorTextPressed: p, textColorTextFocus: h, textColorTextDisabled: u, textColorGhost: u, textColorGhostHover: h, textColorGhostPressed: p, textColorGhostFocus: h, textColorGhostDisabled: u, border: `1px solid ${m}`, borderHover: `1px solid ${h}`, borderPressed: `1px solid ${p}`, borderFocus: `1px solid ${h}`, borderDisabled: `1px solid ${m}`, rippleColor: v, colorPrimary: v, colorHoverPrimary: h, colorPressedPrimary: p, colorFocusPrimary: h, colorDisabledPrimary: v, textColorPrimary: g, textColorHoverPrimary: g, textColorPressedPrimary: g, textColorFocusPrimary: g, textColorDisabledPrimary: g, textColorTextPrimary: v, textColorTextHoverPrimary: h, textColorTextPressedPrimary: p, textColorTextFocusPrimary: h, textColorTextDisabledPrimary: u, textColorGhostPrimary: v, textColorGhostHoverPrimary: h, textColorGhostPressedPrimary: p, textColorGhostFocusPrimary: h, textColorGhostDisabledPrimary: v, borderPrimary: `1px solid ${v}`, borderHoverPrimary: `1px solid ${h}`, borderPressedPrimary: `1px solid ${p}`, borderFocusPrimary: `1px solid ${h}`, borderDisabledPrimary: `1px solid ${v}`, rippleColorPrimary: v, colorInfo: x, colorHoverInfo: $, colorPressedInfo: S, colorFocusInfo: $, colorDisabledInfo: x, textColorInfo: g, textColorHoverInfo: g, textColorPressedInfo: g, textColorFocusInfo: g, textColorDisabledInfo: g, textColorTextInfo: x, textColorTextHoverInfo: $, textColorTextPressedInfo: S, textColorTextFocusInfo: $, textColorTextDisabledInfo: u, textColorGhostInfo: x, textColorGhostHoverInfo: $, textColorGhostPressedInfo: S, textColorGhostFocusInfo: $, textColorGhostDisabledInfo: x, borderInfo: `1px solid ${x}`, borderHoverInfo: `1px solid ${$}`, borderPressedInfo: `1px solid ${S}`, borderFocusInfo: `1px solid ${$}`, borderDisabledInfo: `1px solid ${x}`, rippleColorInfo: x, colorSuccess: E, colorHoverSuccess: A, colorPressedSuccess: b, colorFocusSuccess: A, colorDisabledSuccess: E, textColorSuccess: g, textColorHoverSuccess: g, textColorPressedSuccess: g, textColorFocusSuccess: g, textColorDisabledSuccess: g, textColorTextSuccess: E, textColorTextHoverSuccess: A, textColorTextPressedSuccess: b, textColorTextFocusSuccess: A, textColorTextDisabledSuccess: u, textColorGhostSuccess: E, textColorGhostHoverSuccess: A, textColorGhostPressedSuccess: b, textColorGhostFocusSuccess: A, textColorGhostDisabledSuccess: E, borderSuccess: `1px solid ${E}`, borderHoverSuccess: `1px solid ${A}`, borderPressedSuccess: `1px solid ${b}`, borderFocusSuccess: `1px solid ${A}`, borderDisabledSuccess: `1px solid ${E}`, rippleColorSuccess: E, colorWarning: w, colorHoverWarning: P, colorPressedWarning: O, colorFocusWarning: P, colorDisabledWarning: w, textColorWarning: g, textColorHoverWarning: g, textColorPressedWarning: g, textColorFocusWarning: g, textColorDisabledWarning: g, textColorTextWarning: w, textColorTextHoverWarning: P, textColorTextPressedWarning: O, textColorTextFocusWarning: P, textColorTextDisabledWarning: u, textColorGhostWarning: w, textColorGhostHoverWarning: P, textColorGhostPressedWarning: O, textColorGhostFocusWarning: P, textColorGhostDisabledWarning: w, borderWarning: `1px solid ${w}`, borderHoverWarning: `1px solid ${P}`, borderPressedWarning: `1px solid ${O}`, borderFocusWarning: `1px solid ${P}`, borderDisabledWarning: `1px solid ${w}`, rippleColorWarning: w, colorError: H, colorHoverError: M, colorPressedError: V, colorFocusError: M, colorDisabledError: H, textColorError: g, textColorHoverError: g, textColorPressedError: g, textColorFocusError: g, textColorDisabledError: g, textColorTextError: H, textColorTextHoverError: M, textColorTextPressedError: V, textColorTextFocusError: M, textColorTextDisabledError: u, textColorGhostError: H, textColorGhostHoverError: M, textColorGhostPressedError: V, textColorGhostFocusError: M, textColorGhostDisabledError: H, borderError: `1px solid ${H}`, borderHoverError: `1px solid ${M}`, borderPressedError: `1px solid ${V}`, borderFocusError: `1px solid ${M}`, borderDisabledError: `1px solid ${H}`, rippleColorError: H, waveOpacity: "0.6", fontWeight: T, fontWeightStrong: N });
}
const Ve = { name: "Button", common: F, self: vm }, bm = L([Q("button", `
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
 `, [U("color", [G("border", { borderColor: "var(--n-border-color)" }), U("disabled", [G("border", { borderColor: "var(--n-border-color-disabled)" })]), St("disabled", [L("&:focus", [G("state-border", { borderColor: "var(--n-border-color-focus)" })]), L("&:hover", [G("state-border", { borderColor: "var(--n-border-color-hover)" })]), L("&:active", [G("state-border", { borderColor: "var(--n-border-color-pressed)" })]), U("pressed", [G("state-border", { borderColor: "var(--n-border-color-pressed)" })])])]), U("disabled", { backgroundColor: "var(--n-color-disabled)", color: "var(--n-text-color-disabled)" }, [G("border", { border: "var(--n-border-disabled)" })]), St("disabled", [L("&:focus", { backgroundColor: "var(--n-color-focus)", color: "var(--n-text-color-focus)" }, [G("state-border", { border: "var(--n-border-focus)" })]), L("&:hover", { backgroundColor: "var(--n-color-hover)", color: "var(--n-text-color-hover)" }, [G("state-border", { border: "var(--n-border-hover)" })]), L("&:active", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [G("state-border", { border: "var(--n-border-pressed)" })]), U("pressed", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [G("state-border", { border: "var(--n-border-pressed)" })])]), U("loading", "cursor: wait;"), Q("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [U("active", { zIndex: 1, animationName: "button-wave-spread, button-wave-opacity" })]), Vo && "MozBoxSizing" in document.createElement("div").style ? L("&::moz-focus-inner", { border: 0 }) : null, G("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), G("border", `
 border: var(--n-border);
 `), G("state-border", `
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `), G("icon", `
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
 `, [bn({ top: "50%", originalTransform: "translateY(-50%)" })]), _g()]), G("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [L("~", [G("icon", { margin: "var(--n-icon-margin)", marginRight: 0 })])]), U("block", `
 display: flex;
 width: 100%;
 `), U("dashed", [G("border, state-border", { borderStyle: "dashed !important" })]), U("disabled", { cursor: "not-allowed", opacity: "var(--n-opacity-disabled)" })]), L("@keyframes button-wave-spread", { from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" }, to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" } }), L("@keyframes button-wave-opacity", { from: { opacity: "var(--n-wave-opacity)" }, to: { opacity: 0 } })]), xm = Object.assign(Object.assign({}, Ce.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: "button" }, type: { type: String, default: "default" }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: "left" }, attrType: { type: String, default: "button" }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !Jg } }), Cn = te({ name: "Button", props: xm, slots: Object, setup(e) {
  const t = _(null), o = _(null), r = _(false), n = tt(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), i = le(gm, {}), { mergedSizeRef: a } = Op({}, { defaultSize: "medium", mergedSize: (S) => {
    const { size: E } = e;
    if (E) return E;
    const { size: A } = i;
    if (A) return A;
    const { mergedSize: b } = S || {};
    return b ? b.value : "medium";
  } }), l = B(() => e.focusable && !e.disabled), s = (S) => {
    var E;
    l.value || S.preventDefault(), !e.nativeFocusBehavior && (S.preventDefault(), !e.disabled && l.value && ((E = t.value) === null || E === void 0 || E.focus({ preventScroll: true })));
  }, c = (S) => {
    var E;
    if (!e.disabled && !e.loading) {
      const { onClick: A } = e;
      A && qe(A, S), e.text || (E = o.value) === null || E === void 0 || E.play();
    }
  }, d = (S) => {
    switch (S.key) {
      case "Enter":
        if (!e.keyboard) return;
        r.value = false;
    }
  }, u = (S) => {
    switch (S.key) {
      case "Enter":
        if (!e.keyboard || e.loading) {
          S.preventDefault();
          return;
        }
        r.value = true;
    }
  }, f = () => {
    r.value = false;
  }, { inlineThemeDisabled: h, mergedClsPrefixRef: p, mergedRtlRef: m } = gt(e), v = Ce("Button", "-button", bm, Ve, e, p), g = jo("Button", m, p), x = B(() => {
    const S = v.value, { common: { cubicBezierEaseInOut: E, cubicBezierEaseOut: A }, self: b } = S, { rippleDuration: w, opacityDisabled: P, fontWeight: O, fontWeightStrong: H } = b, M = a.value, { dashed: V, type: T, ghost: y, text: I, color: z, round: N, circle: Z, textColor: ne, secondary: ue, tertiary: ce, quaternary: Fe, strong: He } = e, ot = { "--n-font-weight": He ? H : O };
    let ae = { "--n-color": "initial", "--n-color-hover": "initial", "--n-color-pressed": "initial", "--n-color-focus": "initial", "--n-color-disabled": "initial", "--n-ripple-color": "initial", "--n-text-color": "initial", "--n-text-color-hover": "initial", "--n-text-color-pressed": "initial", "--n-text-color-focus": "initial", "--n-text-color-disabled": "initial" };
    const R = T === "tertiary", j = T === "default", k = R ? "default" : T;
    if (I) {
      const Se = ne || z;
      ae = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": "#0000", "--n-text-color": Se || b[J("textColorText", k)], "--n-text-color-hover": Se ? _t(Se) : b[J("textColorTextHover", k)], "--n-text-color-pressed": Se ? ir(Se) : b[J("textColorTextPressed", k)], "--n-text-color-focus": Se ? _t(Se) : b[J("textColorTextHover", k)], "--n-text-color-disabled": Se || b[J("textColorTextDisabled", k)] };
    } else if (y || V) {
      const Se = ne || z;
      ae = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": z || b[J("rippleColor", k)], "--n-text-color": Se || b[J("textColorGhost", k)], "--n-text-color-hover": Se ? _t(Se) : b[J("textColorGhostHover", k)], "--n-text-color-pressed": Se ? ir(Se) : b[J("textColorGhostPressed", k)], "--n-text-color-focus": Se ? _t(Se) : b[J("textColorGhostHover", k)], "--n-text-color-disabled": Se || b[J("textColorGhostDisabled", k)] };
    } else if (ue) {
      const Se = j ? b.textColor : R ? b.textColorTertiary : b[J("color", k)], Be = z || Se, Ht = T !== "default" && T !== "tertiary";
      ae = { "--n-color": Ht ? K(Be, { alpha: Number(b.colorOpacitySecondary) }) : b.colorSecondary, "--n-color-hover": Ht ? K(Be, { alpha: Number(b.colorOpacitySecondaryHover) }) : b.colorSecondaryHover, "--n-color-pressed": Ht ? K(Be, { alpha: Number(b.colorOpacitySecondaryPressed) }) : b.colorSecondaryPressed, "--n-color-focus": Ht ? K(Be, { alpha: Number(b.colorOpacitySecondaryHover) }) : b.colorSecondaryHover, "--n-color-disabled": b.colorSecondary, "--n-ripple-color": "#0000", "--n-text-color": Be, "--n-text-color-hover": Be, "--n-text-color-pressed": Be, "--n-text-color-focus": Be, "--n-text-color-disabled": Be };
    } else if (ce || Fe) {
      const Se = j ? b.textColor : R ? b.textColorTertiary : b[J("color", k)], Be = z || Se;
      ce ? (ae["--n-color"] = b.colorTertiary, ae["--n-color-hover"] = b.colorTertiaryHover, ae["--n-color-pressed"] = b.colorTertiaryPressed, ae["--n-color-focus"] = b.colorSecondaryHover, ae["--n-color-disabled"] = b.colorTertiary) : (ae["--n-color"] = b.colorQuaternary, ae["--n-color-hover"] = b.colorQuaternaryHover, ae["--n-color-pressed"] = b.colorQuaternaryPressed, ae["--n-color-focus"] = b.colorQuaternaryHover, ae["--n-color-disabled"] = b.colorQuaternary), ae["--n-ripple-color"] = "#0000", ae["--n-text-color"] = Be, ae["--n-text-color-hover"] = Be, ae["--n-text-color-pressed"] = Be, ae["--n-text-color-focus"] = Be, ae["--n-text-color-disabled"] = Be;
    } else ae = { "--n-color": z || b[J("color", k)], "--n-color-hover": z ? _t(z) : b[J("colorHover", k)], "--n-color-pressed": z ? ir(z) : b[J("colorPressed", k)], "--n-color-focus": z ? _t(z) : b[J("colorFocus", k)], "--n-color-disabled": z || b[J("colorDisabled", k)], "--n-ripple-color": z || b[J("rippleColor", k)], "--n-text-color": ne || (z ? b.textColorPrimary : R ? b.textColorTertiary : b[J("textColor", k)]), "--n-text-color-hover": ne || (z ? b.textColorHoverPrimary : b[J("textColorHover", k)]), "--n-text-color-pressed": ne || (z ? b.textColorPressedPrimary : b[J("textColorPressed", k)]), "--n-text-color-focus": ne || (z ? b.textColorFocusPrimary : b[J("textColorFocus", k)]), "--n-text-color-disabled": ne || (z ? b.textColorDisabledPrimary : b[J("textColorDisabled", k)]) };
    let Y = { "--n-border": "initial", "--n-border-hover": "initial", "--n-border-pressed": "initial", "--n-border-focus": "initial", "--n-border-disabled": "initial" };
    I ? Y = { "--n-border": "none", "--n-border-hover": "none", "--n-border-pressed": "none", "--n-border-focus": "none", "--n-border-disabled": "none" } : Y = { "--n-border": b[J("border", k)], "--n-border-hover": b[J("borderHover", k)], "--n-border-pressed": b[J("borderPressed", k)], "--n-border-focus": b[J("borderFocus", k)], "--n-border-disabled": b[J("borderDisabled", k)] };
    const { [J("height", M)]: ie, [J("fontSize", M)]: xe, [J("padding", M)]: oe, [J("paddingRound", M)]: re, [J("iconSize", M)]: ye, [J("borderRadius", M)]: rt, [J("iconMargin", M)]: ke, waveOpacity: Tr } = b, Ir = { "--n-width": Z && !I ? ie : "initial", "--n-height": I ? "initial" : ie, "--n-font-size": xe, "--n-padding": Z || I ? "initial" : N ? re : oe, "--n-icon-size": ye, "--n-icon-margin": ke, "--n-border-radius": I ? "initial" : Z || N ? ie : rt };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": E, "--n-bezier-ease-out": A, "--n-ripple-duration": w, "--n-opacity-disabled": P, "--n-wave-opacity": Tr }, ot), ae), Y), Ir);
  }), $ = h ? Et("button", B(() => {
    let S = "";
    const { dashed: E, type: A, ghost: b, text: w, color: P, round: O, circle: H, textColor: M, secondary: V, tertiary: T, quaternary: y, strong: I } = e;
    E && (S += "a"), b && (S += "b"), w && (S += "c"), O && (S += "d"), H && (S += "e"), V && (S += "f"), T && (S += "g"), y && (S += "h"), I && (S += "i"), P && (S += `j${ba(P)}`), M && (S += `k${ba(M)}`);
    const { value: z } = a;
    return S += `l${z[0]}`, S += `m${A[0]}`, S;
  }), x, e) : void 0;
  return { selfElRef: t, waveElRef: o, mergedClsPrefix: p, mergedFocusable: l, mergedSize: a, showBorder: n, enterPressed: r, rtlEnabled: g, handleMousedown: s, handleKeydown: u, handleBlur: f, handleKeyup: d, handleClick: c, customColorCssVars: B(() => {
    const { color: S } = e;
    if (!S) return null;
    const E = _t(S);
    return { "--n-border-color": S, "--n-border-color-hover": E, "--n-border-color-pressed": ir(S), "--n-border-color-focus": E, "--n-border-color-disabled": S };
  }), cssVars: h ? void 0 : x, themeClass: $ == null ? void 0 : $.themeClass, onRender: $ == null ? void 0 : $.onRender };
}, render() {
  const { mergedClsPrefix: e, tag: t, onRender: o } = this;
  o == null ? void 0 : o();
  const r = Ke(this.$slots.default, (n) => n && C("span", { class: `${e}-button__content` }, n));
  return C(t, { ref: "selfElRef", class: [this.themeClass, `${e}-button`, `${e}-button--${this.type}-type`, `${e}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e}-button--rtl`, this.disabled && `${e}-button--disabled`, this.block && `${e}-button--block`, this.enterPressed && `${e}-button--pressed`, !this.text && this.dashed && `${e}-button--dashed`, this.color && `${e}-button--color`, this.secondary && `${e}-button--secondary`, this.loading && `${e}-button--loading`, this.ghost && `${e}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === "right" && r, C(Gp, { width: true }, { default: () => Ke(this.$slots.icon, (n) => (this.loading || this.renderIcon || n) && C("span", { class: `${e}-button__icon`, style: { margin: vn(this.$slots.default) ? "0" : "" } }, C(ds, null, { default: () => this.loading ? C(qp, { clsPrefix: e, key: "loading", class: `${e}-icon-slot`, strokeWidth: 20 }) : C("div", { key: "icon", class: `${e}-icon-slot`, role: "none" }, this.renderIcon ? this.renderIcon() : n) }))) }), this.iconPlacement === "left" && r, this.text ? null : C(Vg, { ref: "waveElRef", clsPrefix: e }), this.showBorder ? C("div", { "aria-hidden": true, class: `${e}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? C("div", { "aria-hidden": true, class: `${e}-button__state-border`, style: this.customColorCssVars }) : null);
} }), eC = Cn, Cm = { titleFontSize: "22px" };
function ym(e) {
  const { borderRadius: t, fontSize: o, lineHeight: r, textColor2: n, textColor1: i, textColorDisabled: a, dividerColor: l, fontWeightStrong: s, primaryColor: c, baseColor: d, hoverColor: u, cardColor: f, modalColor: h, popoverColor: p } = e;
  return Object.assign(Object.assign({}, Cm), { borderRadius: t, borderColor: W(f, l), borderColorModal: W(h, l), borderColorPopover: W(p, l), textColor: n, titleFontWeight: s, titleTextColor: i, dayTextColor: a, fontSize: o, lineHeight: r, dateColorCurrent: c, dateTextColorCurrent: d, cellColorHover: W(f, u), cellColorHoverModal: W(h, u), cellColorHoverPopover: W(p, u), cellColor: f, cellColorModal: h, cellColorPopover: p, barColor: c });
}
const Sm = { name: "Calendar", common: F, peers: { Button: Ve }, self: ym }, wm = { paddingSmall: "12px 16px 12px", paddingMedium: "19px 24px 20px", paddingLarge: "23px 32px 24px", paddingHuge: "27px 40px 28px", titleFontSizeSmall: "16px", titleFontSizeMedium: "18px", titleFontSizeLarge: "18px", titleFontSizeHuge: "18px", closeIconSize: "18px", closeSize: "22px" };
function $m(e) {
  const { primaryColor: t, borderRadius: o, lineHeight: r, fontSize: n, cardColor: i, textColor2: a, textColor1: l, dividerColor: s, fontWeightStrong: c, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, closeColorHover: h, closeColorPressed: p, modalColor: m, boxShadow1: v, popoverColor: g, actionColor: x } = e;
  return Object.assign(Object.assign({}, wm), { lineHeight: r, color: i, colorModal: m, colorPopover: g, colorTarget: t, colorEmbedded: x, colorEmbeddedModal: x, colorEmbeddedPopover: x, textColor: a, titleTextColor: l, borderColor: s, actionColor: x, titleFontWeight: c, closeColorHover: h, closeColorPressed: p, closeBorderRadius: o, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, fontSizeSmall: n, fontSizeMedium: n, fontSizeLarge: n, fontSizeHuge: n, boxShadow: v, borderRadius: o });
}
const Yn = { name: "Card", common: F, self: $m }, Pm = L([Q("card", `
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
 `, [zl({ background: "var(--n-color-modal)" }), U("hoverable", [L("&:hover", "box-shadow: var(--n-box-shadow);")]), U("content-segmented", [L(">", [G("content", { paddingTop: "var(--n-padding-bottom)" })])]), U("content-soft-segmented", [L(">", [G("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), U("footer-segmented", [L(">", [G("footer", { paddingTop: "var(--n-padding-bottom)" })])]), U("footer-soft-segmented", [L(">", [G("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), L(">", [Q("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [G("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), G("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), G("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), G("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), G("content", "flex: 1; min-width: 0;"), G("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [L("&:first-child", { paddingTop: "var(--n-padding-bottom)" })]), G("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), Q("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [L("img", `
 display: block;
 width: 100%;
 `)]), U("bordered", `
 border: 1px solid var(--n-border-color);
 `, [L("&:target", "border-color: var(--n-color-target);")]), U("action-segmented", [L(">", [G("action", [L("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("content-segmented, content-soft-segmented", [L(">", [G("content", { transition: "border-color 0.3s var(--n-bezier)" }, [L("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("footer-segmented, footer-soft-segmented", [L(">", [G("footer", { transition: "border-color 0.3s var(--n-bezier)" }, [L("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("embedded", `
 background-color: var(--n-color-embedded);
 `)]), Al(Q("card", `
 background: var(--n-color-modal);
 `, [U("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), ah(Q("card", `
 background: var(--n-color-popover);
 `, [U("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), Xn = { title: [String, Function], contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], headerExtraClass: String, headerExtraStyle: [Object, String], footerClass: String, footerStyle: [Object, String], embedded: Boolean, segmented: { type: [Boolean, Object], default: false }, size: { type: String, default: "medium" }, bordered: { type: Boolean, default: true }, closable: Boolean, hoverable: Boolean, role: String, onClose: [Function, Array], tag: { type: String, default: "div" }, cover: Function, content: [String, Function], footer: Function, action: Function, headerExtra: Function, closeFocusable: Boolean }, Em = Kn(Xn), Rm = Object.assign(Object.assign({}, Ce.props), Xn), Tm = te({ name: "Card", props: Rm, slots: Object, setup(e) {
  const t = () => {
    const { onClose: c } = e;
    c && qe(c);
  }, { inlineThemeDisabled: o, mergedClsPrefixRef: r, mergedRtlRef: n } = gt(e), i = Ce("Card", "-card", Pm, Yn, e, r), a = jo("Card", n, r), l = B(() => {
    const { size: c } = e, { self: { color: d, colorModal: u, colorTarget: f, textColor: h, titleTextColor: p, titleFontWeight: m, borderColor: v, actionColor: g, borderRadius: x, lineHeight: $, closeIconColor: S, closeIconColorHover: E, closeIconColorPressed: A, closeColorHover: b, closeColorPressed: w, closeBorderRadius: P, closeIconSize: O, closeSize: H, boxShadow: M, colorPopover: V, colorEmbedded: T, colorEmbeddedModal: y, colorEmbeddedPopover: I, [J("padding", c)]: z, [J("fontSize", c)]: N, [J("titleFontSize", c)]: Z }, common: { cubicBezierEaseInOut: ne } } = i.value, { top: ue, left: ce, bottom: Fe } = jt(z);
    return { "--n-bezier": ne, "--n-border-radius": x, "--n-color": d, "--n-color-modal": u, "--n-color-popover": V, "--n-color-embedded": T, "--n-color-embedded-modal": y, "--n-color-embedded-popover": I, "--n-color-target": f, "--n-text-color": h, "--n-line-height": $, "--n-action-color": g, "--n-title-text-color": p, "--n-title-font-weight": m, "--n-close-icon-color": S, "--n-close-icon-color-hover": E, "--n-close-icon-color-pressed": A, "--n-close-color-hover": b, "--n-close-color-pressed": w, "--n-border-color": v, "--n-box-shadow": M, "--n-padding-top": ue, "--n-padding-bottom": Fe, "--n-padding-left": ce, "--n-font-size": N, "--n-title-font-size": Z, "--n-close-size": H, "--n-close-icon-size": O, "--n-close-border-radius": P };
  }), s = o ? Et("card", B(() => e.size[0]), l, e) : void 0;
  return { rtlEnabled: a, mergedClsPrefix: r, mergedTheme: i, handleCloseClick: t, cssVars: o ? void 0 : l, themeClass: s == null ? void 0 : s.themeClass, onRender: s == null ? void 0 : s.onRender };
}, render() {
  const { segmented: e, bordered: t, hoverable: o, mergedClsPrefix: r, rtlEnabled: n, onRender: i, embedded: a, tag: l, $slots: s } = this;
  return i == null ? void 0 : i(), C(l, { class: [`${r}-card`, this.themeClass, a && `${r}-card--embedded`, { [`${r}-card--rtl`]: n, [`${r}-card--content${typeof e != "boolean" && e.content === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.content, [`${r}-card--footer${typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.footer, [`${r}-card--action-segmented`]: e === true || e !== false && e.action, [`${r}-card--bordered`]: t, [`${r}-card--hoverable`]: o }], style: this.cssVars, role: this.role }, Ke(s.cover, (c) => {
    const d = this.cover ? et([this.cover()]) : c;
    return d && C("div", { class: `${r}-card-cover`, role: "none" }, d);
  }), Ke(s.header, (c) => {
    const { title: d } = this, u = d ? et(typeof d == "function" ? [d()] : [d]) : c;
    return u || this.closable ? C("div", { class: [`${r}-card-header`, this.headerClass], style: this.headerStyle, role: "heading" }, C("div", { class: `${r}-card-header__main`, role: "heading" }, u), Ke(s["header-extra"], (f) => {
      const h = this.headerExtra ? et([this.headerExtra()]) : f;
      return h && C("div", { class: [`${r}-card-header__extra`, this.headerExtraClass], style: this.headerExtraStyle }, h);
    }), this.closable && C(us, { clsPrefix: r, class: `${r}-card-header__close`, onClick: this.handleCloseClick, focusable: this.closeFocusable, absolute: true })) : null;
  }), Ke(s.default, (c) => {
    const { content: d } = this, u = d ? et(typeof d == "function" ? [d()] : [d]) : c;
    return u && C("div", { class: [`${r}-card__content`, this.contentClass], style: this.contentStyle, role: "none" }, u);
  }), Ke(s.footer, (c) => {
    const d = this.footer ? et([this.footer()]) : c;
    return d && C("div", { class: [`${r}-card__footer`, this.footerClass], style: this.footerStyle, role: "none" }, d);
  }), Ke(s.action, (c) => {
    const d = this.action ? et([this.action()]) : c;
    return d && C("div", { class: `${r}-card__action`, role: "none" }, d);
  }));
} });
function Im() {
  return { dotSize: "8px", dotColor: "rgba(255, 255, 255, .3)", dotColorActive: "rgba(255, 255, 255, 1)", dotColorFocus: "rgba(255, 255, 255, .5)", dotLineWidth: "16px", dotLineWidthActive: "24px", arrowColor: "#eee" };
}
const Am = { name: "Carousel", common: F, self: Im }, zm = { sizeSmall: "14px", sizeMedium: "16px", sizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function Mm(e) {
  const { baseColor: t, inputColorDisabled: o, cardColor: r, modalColor: n, popoverColor: i, textColorDisabled: a, borderColor: l, primaryColor: s, textColor2: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, borderRadiusSmall: h, lineHeight: p } = e;
  return Object.assign(Object.assign({}, zm), { labelLineHeight: p, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, borderRadius: h, color: t, colorChecked: s, colorDisabled: o, colorDisabledChecked: o, colorTableHeader: r, colorTableHeaderModal: n, colorTableHeaderPopover: i, checkMarkColor: t, checkMarkColorDisabled: a, checkMarkColorDisabledChecked: a, border: `1px solid ${l}`, borderDisabled: `1px solid ${l}`, borderDisabledChecked: `1px solid ${l}`, borderChecked: `1px solid ${s}`, borderFocus: `1px solid ${s}`, boxShadowFocus: `0 0 0 2px ${K(s, { alpha: 0.3 })}`, textColor: c, textColorDisabled: a });
}
const yo = { name: "Checkbox", common: F, self: Mm };
function Om(e) {
  const { borderRadius: t, boxShadow2: o, popoverColor: r, textColor2: n, textColor3: i, primaryColor: a, textColorDisabled: l, dividerColor: s, hoverColor: c, fontSizeMedium: d, heightMedium: u } = e;
  return { menuBorderRadius: t, menuColor: r, menuBoxShadow: o, menuDividerColor: s, menuHeight: "calc(var(--n-option-height) * 6.6)", optionArrowColor: i, optionHeight: u, optionFontSize: d, optionColorHover: c, optionTextColor: n, optionTextColorActive: a, optionTextColorDisabled: l, optionCheckMarkColor: a, loadingColor: a, columnWidth: "180px" };
}
const km = { name: "Cascader", common: F, peers: { InternalSelectMenu: Uo, InternalSelection: qn, Scrollbar: Le, Checkbox: yo, Empty: Ft }, self: Om };
function Bm(e) {
  const { textColor2: t, fontSize: o, fontWeightStrong: r, textColor3: n } = e;
  return { textColor: t, fontSize: o, fontWeightStrong: r, "mono-3": "#a0a1a7", "hue-1": "#0184bb", "hue-2": "#4078f2", "hue-3": "#a626a4", "hue-4": "#50a14f", "hue-5": "#e45649", "hue-5-2": "#c91243", "hue-6": "#986801", "hue-6-2": "#c18401", lineNumberTextColor: n };
}
const $s = { name: "Code", common: F, self: Bm };
function Lm(e) {
  const { fontWeight: t, textColor1: o, textColor2: r, textColorDisabled: n, dividerColor: i, fontSize: a } = e;
  return { titleFontSize: a, titleFontWeight: t, dividerColor: i, titleTextColor: o, titleTextColorDisabled: n, fontSize: a, textColor: r, arrowColor: r, arrowColorDisabled: n, itemMargin: "16px 0 0 0", titlePadding: "16px 0 0 0" };
}
const Fm = { name: "Collapse", common: F, self: Lm };
function Dm(e) {
  const { cubicBezierEaseInOut: t } = e;
  return { bezier: t };
}
const Hm = { name: "CollapseTransition", common: F, self: Dm };
function Nm(e) {
  const { fontSize: t, boxShadow2: o, popoverColor: r, textColor2: n, borderRadius: i, borderColor: a, heightSmall: l, heightMedium: s, heightLarge: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, dividerColor: h } = e;
  return { panelFontSize: t, boxShadow: o, color: r, textColor: n, borderRadius: i, border: `1px solid ${a}`, heightSmall: l, heightMedium: s, heightLarge: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, dividerColor: h };
}
const _m = { name: "ColorPicker", common: F, peers: { Input: Xe, Button: Ve }, self: Nm }, Wm = { abstract: Boolean, bordered: { type: Boolean, default: void 0 }, clsPrefix: String, locale: Object, dateLocale: Object, namespace: String, rtl: Array, tag: { type: String, default: "div" }, hljs: Object, katex: Object, theme: Object, themeOverrides: Object, componentOptions: Object, icons: Object, breakpoints: Object, preflightStyleDisabled: Boolean, styleMountTarget: Object, inlineThemeDisabled: { type: Boolean, default: void 0 }, as: { type: String, validator: () => (Zt("config-provider", "`as` is deprecated, please use `tag` instead."), true), default: void 0 } }, tC = te({ name: "ConfigProvider", alias: ["App"], props: Wm, setup(e) {
  const t = le(Pt, null), o = B(() => {
    const { theme: m } = e;
    if (m === null) return;
    const v = t == null ? void 0 : t.mergedThemeRef.value;
    return m === void 0 ? v : v === void 0 ? m : Object.assign({}, v, m);
  }), r = B(() => {
    const { themeOverrides: m } = e;
    if (m !== null) {
      if (m === void 0) return t == null ? void 0 : t.mergedThemeOverridesRef.value;
      {
        const v = t == null ? void 0 : t.mergedThemeOverridesRef.value;
        return v === void 0 ? m : Eo({}, v, m);
      }
    }
  }), n = tt(() => {
    const { namespace: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : m;
  }), i = tt(() => {
    const { bordered: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : m;
  }), a = B(() => {
    const { icons: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : m;
  }), l = B(() => {
    const { componentOptions: m } = e;
    return m !== void 0 ? m : t == null ? void 0 : t.mergedComponentPropsRef.value;
  }), s = B(() => {
    const { clsPrefix: m } = e;
    return m !== void 0 ? m : t ? t.mergedClsPrefixRef.value : gr;
  }), c = B(() => {
    var m;
    const { rtl: v } = e;
    if (v === void 0) return t == null ? void 0 : t.mergedRtlRef.value;
    const g = {};
    for (const x of v) g[x.name] = fi(x), (m = x.peers) === null || m === void 0 || m.forEach(($) => {
      $.name in g || (g[$.name] = fi($));
    });
    return g;
  }), d = B(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), u = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), f = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), h = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), p = B(() => {
    const { value: m } = o, { value: v } = r, g = v && Object.keys(v).length !== 0, x = m == null ? void 0 : m.name;
    return x ? g ? `${x}-${ko(JSON.stringify(r.value))}` : x : g ? ko(JSON.stringify(r.value)) : "";
  });
  return Te(Pt, { mergedThemeHashRef: p, mergedBreakpointsRef: d, mergedRtlRef: c, mergedIconsRef: a, mergedComponentPropsRef: l, mergedBorderedRef: i, mergedNamespaceRef: n, mergedClsPrefixRef: s, mergedLocaleRef: B(() => {
    const { locale: m } = e;
    if (m !== null) return m === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : m;
  }), mergedDateLocaleRef: B(() => {
    const { dateLocale: m } = e;
    if (m !== null) return m === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : m;
  }), mergedHljsRef: B(() => {
    const { hljs: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : m;
  }), mergedKatexRef: B(() => {
    const { katex: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedKatexRef.value : m;
  }), mergedThemeRef: o, mergedThemeOverridesRef: r, inlineThemeDisabled: u || false, preflightStyleDisabled: f || false, styleMountTarget: h }), { mergedClsPrefix: s, mergedBordered: i, mergedNamespace: n, mergedTheme: o, mergedThemeOverrides: r };
}, render() {
  var e, t, o, r;
  return this.abstract ? (r = (o = this.$slots).default) === null || r === void 0 ? void 0 : r.call(o) : C(this.as || this.tag, { class: `${this.mergedClsPrefix || gr}-config-provider` }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
} });
function Vm(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const Ps = { name: "Popselect", common: F, peers: { Popover: Dt, InternalSelectMenu: Uo }, self: Vm };
function jm(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const Es = { name: "Select", common: F, peers: { InternalSelection: qn, InternalSelectMenu: Uo }, self: jm }, Gm = { itemPaddingSmall: "0 4px", itemMarginSmall: "0 0 0 8px", itemMarginSmallRtl: "0 8px 0 0", itemPaddingMedium: "0 4px", itemMarginMedium: "0 0 0 8px", itemMarginMediumRtl: "0 8px 0 0", itemPaddingLarge: "0 4px", itemMarginLarge: "0 0 0 8px", itemMarginLargeRtl: "0 8px 0 0", buttonIconSizeSmall: "14px", buttonIconSizeMedium: "16px", buttonIconSizeLarge: "18px", inputWidthSmall: "60px", selectWidthSmall: "unset", inputMarginSmall: "0 0 0 8px", inputMarginSmallRtl: "0 8px 0 0", selectMarginSmall: "0 0 0 8px", prefixMarginSmall: "0 8px 0 0", suffixMarginSmall: "0 0 0 8px", inputWidthMedium: "60px", selectWidthMedium: "unset", inputMarginMedium: "0 0 0 8px", inputMarginMediumRtl: "0 8px 0 0", selectMarginMedium: "0 0 0 8px", prefixMarginMedium: "0 8px 0 0", suffixMarginMedium: "0 0 0 8px", inputWidthLarge: "60px", selectWidthLarge: "unset", inputMarginLarge: "0 0 0 8px", inputMarginLargeRtl: "0 8px 0 0", selectMarginLarge: "0 0 0 8px", prefixMarginLarge: "0 8px 0 0", suffixMarginLarge: "0 0 0 8px" };
function Km(e) {
  const { textColor2: t, primaryColor: o, primaryColorHover: r, primaryColorPressed: n, inputColorDisabled: i, textColorDisabled: a, borderColor: l, borderRadius: s, fontSizeTiny: c, fontSizeSmall: d, fontSizeMedium: u, heightTiny: f, heightSmall: h, heightMedium: p } = e;
  return Object.assign(Object.assign({}, Gm), { buttonColor: "#0000", buttonColorHover: "#0000", buttonColorPressed: "#0000", buttonBorder: `1px solid ${l}`, buttonBorderHover: `1px solid ${l}`, buttonBorderPressed: `1px solid ${l}`, buttonIconColor: t, buttonIconColorHover: t, buttonIconColorPressed: t, itemTextColor: t, itemTextColorHover: r, itemTextColorPressed: n, itemTextColorActive: o, itemTextColorDisabled: a, itemColor: "#0000", itemColorHover: "#0000", itemColorPressed: "#0000", itemColorActive: "#0000", itemColorActiveHover: "#0000", itemColorDisabled: i, itemBorder: "1px solid #0000", itemBorderHover: "1px solid #0000", itemBorderPressed: "1px solid #0000", itemBorderActive: `1px solid ${o}`, itemBorderDisabled: `1px solid ${l}`, itemBorderRadius: s, itemSizeSmall: f, itemSizeMedium: h, itemSizeLarge: p, itemFontSizeSmall: c, itemFontSizeMedium: d, itemFontSizeLarge: u, jumperFontSizeSmall: c, jumperFontSizeMedium: d, jumperFontSizeLarge: u, jumperTextColor: t, jumperTextColorDisabled: a });
}
const Rs = { name: "Pagination", common: F, peers: { Select: Es, Input: Xe, Popselect: Ps }, self: Km }, Um = { padding: "4px 0", optionIconSizeSmall: "14px", optionIconSizeMedium: "16px", optionIconSizeLarge: "16px", optionIconSizeHuge: "18px", optionSuffixWidthSmall: "14px", optionSuffixWidthMedium: "14px", optionSuffixWidthLarge: "16px", optionSuffixWidthHuge: "16px", optionIconSuffixWidthSmall: "32px", optionIconSuffixWidthMedium: "32px", optionIconSuffixWidthLarge: "36px", optionIconSuffixWidthHuge: "36px", optionPrefixWidthSmall: "14px", optionPrefixWidthMedium: "14px", optionPrefixWidthLarge: "16px", optionPrefixWidthHuge: "16px", optionIconPrefixWidthSmall: "36px", optionIconPrefixWidthMedium: "36px", optionIconPrefixWidthLarge: "40px", optionIconPrefixWidthHuge: "40px" };
function qm(e) {
  const { primaryColor: t, textColor2: o, dividerColor: r, hoverColor: n, popoverColor: i, invertedColor: a, borderRadius: l, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: d, fontSizeHuge: u, heightSmall: f, heightMedium: h, heightLarge: p, heightHuge: m, textColor3: v, opacityDisabled: g } = e;
  return Object.assign(Object.assign({}, Um), { optionHeightSmall: f, optionHeightMedium: h, optionHeightLarge: p, optionHeightHuge: m, borderRadius: l, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: d, fontSizeHuge: u, optionTextColor: o, optionTextColorHover: o, optionTextColorActive: t, optionTextColorChildActive: t, color: i, dividerColor: r, suffixColor: o, prefixColor: o, optionColorHover: n, optionColorActive: K(t, { alpha: 0.1 }), groupHeaderTextColor: v, optionTextColorInverted: "#BBB", optionTextColorHoverInverted: "#FFF", optionTextColorActiveInverted: "#FFF", optionTextColorChildActiveInverted: "#FFF", colorInverted: a, dividerColorInverted: "#BBB", suffixColorInverted: "#BBB", prefixColorInverted: "#BBB", optionColorHoverInverted: t, optionColorActiveInverted: t, groupHeaderTextColorInverted: "#AAA", optionOpacityDisabled: g });
}
const Er = { name: "Dropdown", common: F, peers: { Popover: Dt }, self: qm }, Ym = { padding: "8px 14px" };
function Xm(e) {
  const { borderRadius: t, boxShadow2: o, baseColor: r } = e;
  return Object.assign(Object.assign({}, Ym), { borderRadius: t, boxShadow: o, color: W(r, "rgba(0, 0, 0, .85)"), textColor: r });
}
const qo = { name: "Tooltip", common: F, peers: { Popover: Dt }, self: Xm }, Zn = { name: "Ellipsis", common: F, peers: { Tooltip: qo } }, Zm = { radioSizeSmall: "14px", radioSizeMedium: "16px", radioSizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function Qm(e) {
  const { borderColor: t, primaryColor: o, baseColor: r, textColorDisabled: n, inputColorDisabled: i, textColor2: a, opacityDisabled: l, borderRadius: s, fontSizeSmall: c, fontSizeMedium: d, fontSizeLarge: u, heightSmall: f, heightMedium: h, heightLarge: p, lineHeight: m } = e;
  return Object.assign(Object.assign({}, Zm), { labelLineHeight: m, buttonHeightSmall: f, buttonHeightMedium: h, buttonHeightLarge: p, fontSizeSmall: c, fontSizeMedium: d, fontSizeLarge: u, boxShadow: `inset 0 0 0 1px ${t}`, boxShadowActive: `inset 0 0 0 1px ${o}`, boxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${K(o, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${o}`, boxShadowDisabled: `inset 0 0 0 1px ${t}`, color: r, colorDisabled: i, colorActive: "#0000", textColor: a, textColorDisabled: n, dotColorActive: o, dotColorDisabled: t, buttonBorderColor: t, buttonBorderColorActive: o, buttonBorderColorHover: t, buttonColor: r, buttonColorActive: r, buttonTextColor: a, buttonTextColorActive: o, buttonTextColorHover: o, opacityDisabled: l, buttonBoxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${K(o, { alpha: 0.3 })}`, buttonBoxShadowHover: "inset 0 0 0 1px #0000", buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: s });
}
const Ts = { name: "Radio", common: F, self: Qm }, Jm = { thPaddingSmall: "8px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "8px", tdPaddingMedium: "12px", tdPaddingLarge: "12px", sorterSize: "15px", resizableContainerSize: "8px", resizableSize: "2px", filterSize: "15px", paginationMargin: "12px 0 0 0", emptyPadding: "48px 0", actionPadding: "8px 12px", actionButtonMargin: "0 8px 0 0" };
function ev(e) {
  const { cardColor: t, modalColor: o, popoverColor: r, textColor2: n, textColor1: i, tableHeaderColor: a, tableColorHover: l, iconColor: s, primaryColor: c, fontWeightStrong: d, borderRadius: u, lineHeight: f, fontSizeSmall: h, fontSizeMedium: p, fontSizeLarge: m, dividerColor: v, heightSmall: g, opacityDisabled: x, tableColorStriped: $ } = e;
  return Object.assign(Object.assign({}, Jm), { actionDividerColor: v, lineHeight: f, borderRadius: u, fontSizeSmall: h, fontSizeMedium: p, fontSizeLarge: m, borderColor: W(t, v), tdColorHover: W(t, l), tdColorSorting: W(t, l), tdColorStriped: W(t, $), thColor: W(t, a), thColorHover: W(W(t, a), l), thColorSorting: W(W(t, a), l), tdColor: t, tdTextColor: n, thTextColor: i, thFontWeight: d, thButtonColorHover: l, thIconColor: s, thIconColorActive: c, borderColorModal: W(o, v), tdColorHoverModal: W(o, l), tdColorSortingModal: W(o, l), tdColorStripedModal: W(o, $), thColorModal: W(o, a), thColorHoverModal: W(W(o, a), l), thColorSortingModal: W(W(o, a), l), tdColorModal: o, borderColorPopover: W(r, v), tdColorHoverPopover: W(r, l), tdColorSortingPopover: W(r, l), tdColorStripedPopover: W(r, $), thColorPopover: W(r, a), thColorHoverPopover: W(W(r, a), l), thColorSortingPopover: W(W(r, a), l), tdColorPopover: r, boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)", boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)", loadingColor: c, loadingSize: g, opacityLoading: x });
}
const tv = { name: "DataTable", common: F, peers: { Button: Ve, Checkbox: yo, Radio: Ts, Pagination: Rs, Scrollbar: Le, Empty: Ft, Popover: Dt, Ellipsis: Zn, Dropdown: Er }, self: ev }, ov = Object.assign(Object.assign({}, Pr), Ce.props), rv = te({ name: "Tooltip", props: ov, slots: Object, __popover__: true, setup(e) {
  const { mergedClsPrefixRef: t } = gt(e), o = Ce("Tooltip", "-tooltip", void 0, qo, e, t), r = _(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    r.value.syncPosition();
  }, setShow(i) {
    r.value.setShow(i);
  } }), { popoverRef: r, mergedTheme: o, popoverThemeOverrides: B(() => o.value.self) });
}, render() {
  const { mergedTheme: e, internalExtraClass: t } = this;
  return C(ys, Object.assign(Object.assign({}, this.$props), { theme: e.peers.Popover, themeOverrides: e.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: t.concat("tooltip"), ref: "popoverRef" }), this.$slots);
} }), Is = Q("ellipsis", { overflow: "hidden" }, [St("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), U("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), U("cursor-pointer", `
 cursor: pointer;
 `)]);
function yn(e) {
  return `${e}-ellipsis--line-clamp`;
}
function Sn(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const As = Object.assign(Object.assign({}, Ce.props), { expandTrigger: String, lineClamp: [Number, String], tooltip: { type: [Boolean, Object], default: true } }), nv = te({ name: "Ellipsis", inheritAttrs: false, props: As, slots: Object, setup(e, { slots: t, attrs: o }) {
  const r = ls(), n = Ce("Ellipsis", "-ellipsis", Is, Zn, e, r), i = _(null), a = _(null), l = _(null), s = _(false), c = B(() => {
    const { lineClamp: v } = e, { value: g } = s;
    return v !== void 0 ? { textOverflow: "", "-webkit-line-clamp": g ? "" : v } : { textOverflow: g ? "" : "ellipsis", "-webkit-line-clamp": "" };
  });
  function d() {
    let v = false;
    const { value: g } = s;
    if (g) return true;
    const { value: x } = i;
    if (x) {
      const { lineClamp: $ } = e;
      if (h(x), $ !== void 0) v = x.scrollHeight <= x.offsetHeight;
      else {
        const { value: S } = a;
        S && (v = S.getBoundingClientRect().width <= x.getBoundingClientRect().width);
      }
      p(x, v);
    }
    return v;
  }
  const u = B(() => e.expandTrigger === "click" ? () => {
    var v;
    const { value: g } = s;
    g && ((v = l.value) === null || v === void 0 || v.setShow(false)), s.value = !g;
  } : void 0);
  Tn(() => {
    var v;
    e.tooltip && ((v = l.value) === null || v === void 0 || v.setShow(false));
  });
  const f = () => C("span", Object.assign({}, $t(o, { class: [`${r.value}-ellipsis`, e.lineClamp !== void 0 ? yn(r.value) : void 0, e.expandTrigger === "click" ? Sn(r.value, "pointer") : void 0], style: c.value }), { ref: "triggerRef", onClick: u.value, onMouseenter: e.expandTrigger === "click" ? d : void 0 }), e.lineClamp ? t : C("span", { ref: "triggerInnerRef" }, t));
  function h(v) {
    if (!v) return;
    const g = c.value, x = yn(r.value);
    e.lineClamp !== void 0 ? m(v, x, "add") : m(v, x, "remove");
    for (const $ in g) v.style[$] !== g[$] && (v.style[$] = g[$]);
  }
  function p(v, g) {
    const x = Sn(r.value, "pointer");
    e.expandTrigger === "click" && !g ? m(v, x, "add") : m(v, x, "remove");
  }
  function m(v, g, x) {
    x === "add" ? v.classList.contains(g) || v.classList.add(g) : v.classList.contains(g) && v.classList.remove(g);
  }
  return { mergedTheme: n, triggerRef: i, triggerInnerRef: a, tooltipRef: l, handleClick: u, renderTrigger: f, getTooltipDisabled: d };
}, render() {
  var e;
  const { tooltip: t, renderTrigger: o, $slots: r } = this;
  if (t) {
    const { mergedTheme: n } = this;
    return C(rv, Object.assign({ ref: "tooltipRef", placement: "top" }, t, { getDisabled: this.getTooltipDisabled, theme: n.peers.Tooltip, themeOverrides: n.peerOverrides.Tooltip }), { trigger: o, default: (e = r.tooltip) !== null && e !== void 0 ? e : r.default });
  } else return o();
} }), oC = te({ name: "PerformantEllipsis", props: As, inheritAttrs: false, setup(e, { attrs: t, slots: o }) {
  const r = _(false), n = ls();
  return Go("-ellipsis", Is, n), { mouseEntered: r, renderTrigger: () => {
    const { lineClamp: a } = e, l = n.value;
    return C("span", Object.assign({}, $t(t, { class: [`${l}-ellipsis`, a !== void 0 ? yn(l) : void 0, e.expandTrigger === "click" ? Sn(l, "pointer") : void 0], style: a === void 0 ? { textOverflow: "ellipsis" } : { "-webkit-line-clamp": a } }), { onMouseenter: () => {
      r.value = true;
    } }), a ? o : C("span", null, o));
  } };
}, render() {
  return this.mouseEntered ? C(nv, $t({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
} }), Qn = "n-dropdown-menu", Rr = "n-dropdown", za = "n-dropdown-option", zs = te({ name: "DropdownDivider", props: { clsPrefix: { type: String, required: true } }, render() {
  return C("div", { class: `${this.clsPrefix}-dropdown-divider` });
} }), iv = te({ name: "DropdownGroupHeader", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  const { showIconRef: e, hasSubmenuRef: t } = le(Qn), { renderLabelRef: o, labelFieldRef: r, nodePropsRef: n, renderOptionRef: i } = le(Rr);
  return { labelField: r, showIcon: e, hasSubmenu: t, renderLabel: o, nodeProps: n, renderOption: i };
}, render() {
  var e;
  const { clsPrefix: t, hasSubmenu: o, showIcon: r, nodeProps: n, renderLabel: i, renderOption: a } = this, { rawNode: l } = this.tmNode, s = C("div", Object.assign({ class: `${t}-dropdown-option` }, n == null ? void 0 : n(l)), C("div", { class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group` }, C("div", { "data-dropdown-option": true, class: [`${t}-dropdown-option-body__prefix`, r && `${t}-dropdown-option-body__prefix--show-icon`] }, dt(l.icon)), C("div", { class: `${t}-dropdown-option-body__label`, "data-dropdown-option": true }, i ? i(l) : dt((e = l.title) !== null && e !== void 0 ? e : l[this.labelField])), C("div", { class: [`${t}-dropdown-option-body__suffix`, o && `${t}-dropdown-option-body__suffix--has-submenu`], "data-dropdown-option": true })));
  return a ? a({ node: s, option: l }) : s;
} });
function av(e) {
  const { textColorBase: t, opacity1: o, opacity2: r, opacity3: n, opacity4: i, opacity5: a } = e;
  return { color: t, opacity1Depth: o, opacity2Depth: r, opacity3Depth: n, opacity4Depth: i, opacity5Depth: a };
}
const Ms = { name: "Icon", common: F, self: av }, lv = Q("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [U("color-transition", { transition: "color .3s var(--n-bezier)" }), U("depth", { color: "var(--n-color)" }, [L("svg", { opacity: "var(--n-opacity)", transition: "opacity .3s var(--n-bezier)" })]), L("svg", { height: "1em", width: "1em" })]), sv = Object.assign(Object.assign({}, Ce.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), cv = te({ _n_icon__: true, name: "Icon", inheritAttrs: false, props: sv, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = gt(e), r = Ce("Icon", "-icon", lv, Ms, e, t), n = B(() => {
    const { depth: a } = e, { common: { cubicBezierEaseInOut: l }, self: s } = r.value;
    if (a !== void 0) {
      const { color: c, [`opacity${a}Depth`]: d } = s;
      return { "--n-bezier": l, "--n-color": c, "--n-opacity": d };
    }
    return { "--n-bezier": l, "--n-color": "", "--n-opacity": "" };
  }), i = o ? Et("icon", B(() => `${e.depth || "d"}`), n, e) : void 0;
  return { mergedClsPrefix: t, mergedStyle: B(() => {
    const { size: a, color: l } = e;
    return { fontSize: sr(a), color: l };
  }), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e;
  const { $parent: t, depth: o, mergedClsPrefix: r, component: n, onRender: i, themeClass: a } = this;
  return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Zt("icon", "don't wrap `n-icon` inside `n-icon`"), i == null ? void 0 : i(), C("i", $t(this.$attrs, { role: "img", class: [`${r}-icon`, a, { [`${r}-icon--depth`]: o, [`${r}-icon--color-transition`]: o !== void 0 }], style: [this.cssVars, this.mergedStyle] }), n ? C(n) : this.$slots);
} });
function wn(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function dv(e) {
  return e.type === "group";
}
function Os(e) {
  return e.type === "divider";
}
function uv(e) {
  return e.type === "render";
}
const ks = te({ name: "DropdownOption", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null }, placement: { type: String, default: "right-start" }, props: Object, scrollable: Boolean }, setup(e) {
  const t = le(Rr), { hoverKeyRef: o, keyboardKeyRef: r, lastToggledSubmenuKeyRef: n, pendingKeyPathRef: i, activeKeyPathRef: a, animatedRef: l, mergedShowRef: s, renderLabelRef: c, renderIconRef: d, labelFieldRef: u, childrenFieldRef: f, renderOptionRef: h, nodePropsRef: p, menuPropsRef: m } = t, v = le(za, null), g = le(Qn), x = le(Wo), $ = B(() => e.tmNode.rawNode), S = B(() => {
    const { value: z } = f;
    return wn(e.tmNode.rawNode, z);
  }), E = B(() => {
    const { disabled: z } = e.tmNode;
    return z;
  }), A = B(() => {
    if (!S.value) return false;
    const { key: z, disabled: N } = e.tmNode;
    if (N) return false;
    const { value: Z } = o, { value: ne } = r, { value: ue } = n, { value: ce } = i;
    return Z !== null ? ce.includes(z) : ne !== null ? ce.includes(z) && ce[ce.length - 1] !== z : ue !== null ? ce.includes(z) : false;
  }), b = B(() => r.value === null && !l.value), w = Lh(A, 300, b), P = B(() => !!(v == null ? void 0 : v.enteringSubmenuRef.value)), O = _(false);
  Te(za, { enteringSubmenuRef: O });
  function H() {
    O.value = true;
  }
  function M() {
    O.value = false;
  }
  function V() {
    const { parentKey: z, tmNode: N } = e;
    N.disabled || s.value && (n.value = z, r.value = null, o.value = N.key);
  }
  function T() {
    const { tmNode: z } = e;
    z.disabled || s.value && o.value !== z.key && V();
  }
  function y(z) {
    if (e.tmNode.disabled || !s.value) return;
    const { relatedTarget: N } = z;
    N && !_i({ target: N }, "dropdownOption") && !_i({ target: N }, "scrollbarRail") && (o.value = null);
  }
  function I() {
    const { value: z } = S, { tmNode: N } = e;
    s.value && !z && !N.disabled && (t.doSelect(N.key, N.rawNode), t.doUpdateShow(false));
  }
  return { labelField: u, renderLabel: c, renderIcon: d, siblingHasIcon: g.showIconRef, siblingHasSubmenu: g.hasSubmenuRef, menuProps: m, popoverBody: x, animated: l, mergedShowSubmenu: B(() => w.value && !P.value), rawNode: $, hasSubmenu: S, pending: tt(() => {
    const { value: z } = i, { key: N } = e.tmNode;
    return z.includes(N);
  }), childActive: tt(() => {
    const { value: z } = a, { key: N } = e.tmNode, Z = z.findIndex((ne) => N === ne);
    return Z === -1 ? false : Z < z.length - 1;
  }), active: tt(() => {
    const { value: z } = a, { key: N } = e.tmNode, Z = z.findIndex((ne) => N === ne);
    return Z === -1 ? false : Z === z.length - 1;
  }), mergedDisabled: E, renderOption: h, nodeProps: p, handleClick: I, handleMouseMove: T, handleMouseEnter: V, handleMouseLeave: y, handleSubmenuBeforeEnter: H, handleSubmenuAfterEnter: M };
}, render() {
  var e, t;
  const { animated: o, rawNode: r, mergedShowSubmenu: n, clsPrefix: i, siblingHasIcon: a, siblingHasSubmenu: l, renderLabel: s, renderIcon: c, renderOption: d, nodeProps: u, props: f, scrollable: h } = this;
  let p = null;
  if (n) {
    const x = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, r, r.children);
    p = C(Bs, Object.assign({}, x, { clsPrefix: i, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
  }
  const m = { class: [`${i}-dropdown-option-body`, this.pending && `${i}-dropdown-option-body--pending`, this.active && `${i}-dropdown-option-body--active`, this.childActive && `${i}-dropdown-option-body--child-active`, this.mergedDisabled && `${i}-dropdown-option-body--disabled`], onMousemove: this.handleMouseMove, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onClick: this.handleClick }, v = u == null ? void 0 : u(r), g = C("div", Object.assign({ class: [`${i}-dropdown-option`, v == null ? void 0 : v.class], "data-dropdown-option": true }, v), C("div", $t(m, f), [C("div", { class: [`${i}-dropdown-option-body__prefix`, a && `${i}-dropdown-option-body__prefix--show-icon`] }, [c ? c(r) : dt(r.icon)]), C("div", { "data-dropdown-option": true, class: `${i}-dropdown-option-body__label` }, s ? s(r) : dt((t = r[this.labelField]) !== null && t !== void 0 ? t : r.title)), C("div", { "data-dropdown-option": true, class: [`${i}-dropdown-option-body__suffix`, l && `${i}-dropdown-option-body__suffix--has-submenu`] }, this.hasSubmenu ? C(cv, null, { default: () => C(Dp, null) }) : null)]), this.hasSubmenu ? C(jl, null, { default: () => [C(Gl, null, { default: () => C("div", { class: `${i}-dropdown-offset-container` }, C(ql, { show: this.mergedShowSubmenu, placement: this.placement, to: h && this.popoverBody || void 0, teleportDisabled: !h }, { default: () => C("div", { class: `${i}-dropdown-menu-wrapper` }, o ? C(kt, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, { default: () => p }) : p) })) })] }) : null);
  return d ? d({ node: g, option: r }) : g;
} }), fv = te({ name: "NDropdownGroup", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null } }, render() {
  const { tmNode: e, parentKey: t, clsPrefix: o } = this, { children: r } = e;
  return C(Jt, null, C(iv, { clsPrefix: o, tmNode: e, key: e.key }), r == null ? void 0 : r.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : Os(i) ? C(zs, { clsPrefix: o, key: n.key }) : n.isGroup ? (Zt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : C(ks, { clsPrefix: o, tmNode: n, parentKey: t, key: n.key });
  }));
} }), hv = te({ name: "DropdownRenderOption", props: { tmNode: { type: Object, required: true } }, render() {
  const { rawNode: { render: e, props: t } } = this.tmNode;
  return C("div", t, [e == null ? void 0 : e()]);
} }), Bs = te({ name: "DropdownMenu", props: { scrollable: Boolean, showArrow: Boolean, arrowStyle: [String, Object], clsPrefix: { type: String, required: true }, tmNodes: { type: Array, default: () => [] }, parentKey: { type: [String, Number], default: null } }, setup(e) {
  const { renderIconRef: t, childrenFieldRef: o } = le(Rr);
  Te(Qn, { showIconRef: B(() => {
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
      if (i.isGroup) return (a = i.children) === null || a === void 0 ? void 0 : a.some(({ rawNode: s }) => wn(s, n));
      const { rawNode: l } = i;
      return wn(l, n);
    });
  }) });
  const r = _(null);
  return Te($r, null), Te(wr, null), Te(Wo, r), { bodyRef: r };
}, render() {
  const { parentKey: e, clsPrefix: t, scrollable: o } = this, r = this.tmNodes.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : uv(i) ? C(hv, { tmNode: n, key: n.key }) : Os(i) ? C(zs, { clsPrefix: t, key: n.key }) : dv(i) ? C(fv, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key }) : C(ks, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key, props: i.props, scrollable: o });
  });
  return C("div", { class: [`${t}-dropdown-menu`, o && `${t}-dropdown-menu--scrollable`], ref: "bodyRef" }, o ? C(gs, { contentClass: `${t}-dropdown-menu__content` }, { default: () => r }) : r, this.showArrow ? Cs({ clsPrefix: t, arrowStyle: this.arrowStyle, arrowClass: void 0, arrowWrapperClass: void 0, arrowWrapperStyle: void 0 }) : null);
} }), pv = Q("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [bs(), Q("dropdown-option", `
 position: relative;
 `, [L("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [L("&::before", `
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
 `, [L("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), St("disabled", [U("pending", `
 color: var(--n-option-text-color-hover);
 `, [G("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), L("&::before", "background-color: var(--n-option-color-hover);")]), U("active", `
 color: var(--n-option-text-color-active);
 `, [G("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), L("&::before", "background-color: var(--n-option-color-active);")]), U("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [G("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), U("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), U("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [G("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [U("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), G("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [U("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), Q("icon", `
 font-size: var(--n-option-icon-size);
 `)]), G("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), G("suffix", `
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
 `, [U("has-submenu", `
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
 `), L(">", [Q("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), St("scrollable", `
 padding: var(--n-padding);
 `), U("scrollable", [G("content", `
 padding: var(--n-padding);
 `)])]), gv = { animated: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, size: { type: String, default: "medium" }, inverted: Boolean, placement: { type: String, default: "bottom" }, onSelect: [Function, Array], options: { type: Array, default: () => [] }, menuProps: Function, showArrow: Boolean, renderLabel: Function, renderIcon: Function, renderOption: Function, nodeProps: Function, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, value: [String, Number] }, mv = Object.keys(Pr), vv = Object.assign(Object.assign(Object.assign({}, Pr), gv), Ce.props), rC = te({ name: "Dropdown", inheritAttrs: false, props: vv, setup(e) {
  const t = _(false), o = Dl(me(e, "show"), t), r = B(() => {
    const { keyField: M, childrenField: V } = e;
    return $g(e.options, { getKey(T) {
      return T[M];
    }, getDisabled(T) {
      return T.disabled === true;
    }, getIgnored(T) {
      return T.type === "divider" || T.type === "render";
    }, getChildren(T) {
      return T[V];
    } });
  }), n = B(() => r.value.treeNodes), i = _(null), a = _(null), l = _(null), s = B(() => {
    var M, V, T;
    return (T = (V = (M = i.value) !== null && M !== void 0 ? M : a.value) !== null && V !== void 0 ? V : l.value) !== null && T !== void 0 ? T : null;
  }), c = B(() => r.value.getPath(s.value).keyPath), d = B(() => r.value.getPath(e.value).keyPath), u = tt(() => e.keyboard && o.value);
  Oh({ keydown: { ArrowUp: { prevent: true, handler: E }, ArrowRight: { prevent: true, handler: S }, ArrowDown: { prevent: true, handler: A }, ArrowLeft: { prevent: true, handler: $ }, Enter: { prevent: true, handler: b }, Escape: x } }, u);
  const { mergedClsPrefixRef: f, inlineThemeDisabled: h } = gt(e), p = Ce("Dropdown", "-dropdown", pv, Er, e, f);
  Te(Rr, { labelFieldRef: me(e, "labelField"), childrenFieldRef: me(e, "childrenField"), renderLabelRef: me(e, "renderLabel"), renderIconRef: me(e, "renderIcon"), hoverKeyRef: i, keyboardKeyRef: a, lastToggledSubmenuKeyRef: l, pendingKeyPathRef: c, activeKeyPathRef: d, animatedRef: me(e, "animated"), mergedShowRef: o, nodePropsRef: me(e, "nodeProps"), renderOptionRef: me(e, "renderOption"), menuPropsRef: me(e, "menuProps"), doSelect: m, doUpdateShow: v }), Ie(o, (M) => {
    !e.animated && !M && g();
  });
  function m(M, V) {
    const { onSelect: T } = e;
    T && qe(T, M, V);
  }
  function v(M) {
    const { "onUpdate:show": V, onUpdateShow: T } = e;
    V && qe(V, M), T && qe(T, M), t.value = M;
  }
  function g() {
    i.value = null, a.value = null, l.value = null;
  }
  function x() {
    v(false);
  }
  function $() {
    P("left");
  }
  function S() {
    P("right");
  }
  function E() {
    P("up");
  }
  function A() {
    P("down");
  }
  function b() {
    const M = w();
    (M == null ? void 0 : M.isLeaf) && o.value && (m(M.key, M.rawNode), v(false));
  }
  function w() {
    var M;
    const { value: V } = r, { value: T } = s;
    return !V || T === null ? null : (M = V.getNode(T)) !== null && M !== void 0 ? M : null;
  }
  function P(M) {
    const { value: V } = s, { value: { getFirstAvailableNode: T } } = r;
    let y = null;
    if (V === null) {
      const I = T();
      I !== null && (y = I.key);
    } else {
      const I = w();
      if (I) {
        let z;
        switch (M) {
          case "down":
            z = I.getNext();
            break;
          case "up":
            z = I.getPrev();
            break;
          case "right":
            z = I.getChild();
            break;
          case "left":
            z = I.getParent();
            break;
        }
        z && (y = z.key);
      }
    }
    y !== null && (i.value = null, a.value = y);
  }
  const O = B(() => {
    const { size: M, inverted: V } = e, { common: { cubicBezierEaseInOut: T }, self: y } = p.value, { padding: I, dividerColor: z, borderRadius: N, optionOpacityDisabled: Z, [J("optionIconSuffixWidth", M)]: ne, [J("optionSuffixWidth", M)]: ue, [J("optionIconPrefixWidth", M)]: ce, [J("optionPrefixWidth", M)]: Fe, [J("fontSize", M)]: He, [J("optionHeight", M)]: ot, [J("optionIconSize", M)]: ae } = y, R = { "--n-bezier": T, "--n-font-size": He, "--n-padding": I, "--n-border-radius": N, "--n-option-height": ot, "--n-option-prefix-width": Fe, "--n-option-icon-prefix-width": ce, "--n-option-suffix-width": ue, "--n-option-icon-suffix-width": ne, "--n-option-icon-size": ae, "--n-divider-color": z, "--n-option-opacity-disabled": Z };
    return V ? (R["--n-color"] = y.colorInverted, R["--n-option-color-hover"] = y.optionColorHoverInverted, R["--n-option-color-active"] = y.optionColorActiveInverted, R["--n-option-text-color"] = y.optionTextColorInverted, R["--n-option-text-color-hover"] = y.optionTextColorHoverInverted, R["--n-option-text-color-active"] = y.optionTextColorActiveInverted, R["--n-option-text-color-child-active"] = y.optionTextColorChildActiveInverted, R["--n-prefix-color"] = y.prefixColorInverted, R["--n-suffix-color"] = y.suffixColorInverted, R["--n-group-header-text-color"] = y.groupHeaderTextColorInverted) : (R["--n-color"] = y.color, R["--n-option-color-hover"] = y.optionColorHover, R["--n-option-color-active"] = y.optionColorActive, R["--n-option-text-color"] = y.optionTextColor, R["--n-option-text-color-hover"] = y.optionTextColorHover, R["--n-option-text-color-active"] = y.optionTextColorActive, R["--n-option-text-color-child-active"] = y.optionTextColorChildActive, R["--n-prefix-color"] = y.prefixColor, R["--n-suffix-color"] = y.suffixColor, R["--n-group-header-text-color"] = y.groupHeaderTextColor), R;
  }), H = h ? Et("dropdown", B(() => `${e.size[0]}${e.inverted ? "i" : ""}`), O, e) : void 0;
  return { mergedClsPrefix: f, mergedTheme: p, tmNodes: n, mergedShow: o, handleAfterLeave: () => {
    e.animated && g();
  }, doUpdateShow: v, cssVars: h ? void 0 : O, themeClass: H == null ? void 0 : H.themeClass, onRender: H == null ? void 0 : H.onRender };
}, render() {
  const e = (r, n, i, a, l) => {
    var s;
    const { mergedClsPrefix: c, menuProps: d } = this;
    (s = this.onRender) === null || s === void 0 || s.call(this);
    const u = (d == null ? void 0 : d(void 0, this.tmNodes.map((h) => h.rawNode))) || {}, f = { ref: Ap(n), class: [r, `${c}-dropdown`, this.themeClass], clsPrefix: c, tmNodes: this.tmNodes, style: [...i, this.cssVars], showArrow: this.showArrow, arrowStyle: this.arrowStyle, scrollable: this.scrollable, onMouseenter: a, onMouseleave: l };
    return C(Bs, $t(this.$attrs, f, u));
  }, { mergedTheme: t } = this, o = { show: this.mergedShow, theme: t.peers.Popover, themeOverrides: t.peerOverrides.Popover, internalOnAfterLeave: this.handleAfterLeave, internalRenderBody: e, onUpdateShow: this.doUpdateShow, "onUpdate:show": void 0 };
  return C(ys, Object.assign({}, Do(this.$props, mv), o), { trigger: () => {
    var r, n;
    return (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r);
  } });
} }), bv = { itemFontSize: "12px", itemHeight: "36px", itemWidth: "52px", panelActionPadding: "8px 0" };
function xv(e) {
  const { popoverColor: t, textColor2: o, primaryColor: r, hoverColor: n, dividerColor: i, opacityDisabled: a, boxShadow2: l, borderRadius: s, iconColor: c, iconColorDisabled: d } = e;
  return Object.assign(Object.assign({}, bv), { panelColor: t, panelBoxShadow: l, panelDividerColor: i, itemTextColor: o, itemTextColorActive: r, itemColorHover: n, itemOpacityDisabled: a, itemBorderRadius: s, borderRadius: s, iconColor: c, iconColorDisabled: d });
}
const Ls = { name: "TimePicker", common: F, peers: { Scrollbar: Le, Button: Ve, Input: Xe }, self: xv }, Cv = { itemSize: "24px", itemCellWidth: "38px", itemCellHeight: "32px", scrollItemWidth: "80px", scrollItemHeight: "40px", panelExtraFooterPadding: "8px 12px", panelActionPadding: "8px 12px", calendarTitlePadding: "0", calendarTitleHeight: "28px", arrowSize: "14px", panelHeaderPadding: "8px 12px", calendarDaysHeight: "32px", calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px", calendarLeftPaddingDate: "6px 12px 4px 12px", calendarLeftPaddingDatetime: "4px 12px", calendarLeftPaddingDaterange: "6px 12px 4px 12px", calendarLeftPaddingDatetimerange: "4px 12px", calendarLeftPaddingMonth: "0", calendarLeftPaddingYear: "0", calendarLeftPaddingQuarter: "0", calendarLeftPaddingMonthrange: "0", calendarLeftPaddingQuarterrange: "0", calendarLeftPaddingYearrange: "0", calendarLeftPaddingWeek: "6px 12px 4px 12px", calendarRightPaddingDate: "6px 12px 4px 12px", calendarRightPaddingDatetime: "4px 12px", calendarRightPaddingDaterange: "6px 12px 4px 12px", calendarRightPaddingDatetimerange: "4px 12px", calendarRightPaddingMonth: "0", calendarRightPaddingYear: "0", calendarRightPaddingQuarter: "0", calendarRightPaddingMonthrange: "0", calendarRightPaddingQuarterrange: "0", calendarRightPaddingYearrange: "0", calendarRightPaddingWeek: "0" };
function yv(e) {
  const { hoverColor: t, fontSize: o, textColor2: r, textColorDisabled: n, popoverColor: i, primaryColor: a, borderRadiusSmall: l, iconColor: s, iconColorDisabled: c, textColor1: d, dividerColor: u, boxShadow2: f, borderRadius: h, fontWeightStrong: p } = e;
  return Object.assign(Object.assign({}, Cv), { itemFontSize: o, calendarDaysFontSize: o, calendarTitleFontSize: o, itemTextColor: r, itemTextColorDisabled: n, itemTextColorActive: i, itemTextColorCurrent: a, itemColorIncluded: K(a, { alpha: 0.1 }), itemColorHover: t, itemColorDisabled: t, itemColorActive: a, itemBorderRadius: l, panelColor: i, panelTextColor: r, arrowColor: s, calendarTitleTextColor: d, calendarTitleColorHover: t, calendarDaysTextColor: r, panelHeaderDividerColor: u, calendarDaysDividerColor: u, calendarDividerColor: u, panelActionDividerColor: u, panelBoxShadow: f, panelBorderRadius: h, calendarTitleFontWeight: p, scrollItemBorderRadius: h, iconColor: s, iconColorDisabled: c });
}
const Sv = { name: "DatePicker", common: F, peers: { Input: Xe, Button: Ve, TimePicker: Ls, Scrollbar: Le }, self: yv }, wv = { thPaddingBorderedSmall: "8px 12px", thPaddingBorderedMedium: "12px 16px", thPaddingBorderedLarge: "16px 24px", thPaddingSmall: "0", thPaddingMedium: "0", thPaddingLarge: "0", tdPaddingBorderedSmall: "8px 12px", tdPaddingBorderedMedium: "12px 16px", tdPaddingBorderedLarge: "16px 24px", tdPaddingSmall: "0 0 8px 0", tdPaddingMedium: "0 0 12px 0", tdPaddingLarge: "0 0 16px 0" };
function $v(e) {
  const { tableHeaderColor: t, textColor2: o, textColor1: r, cardColor: n, modalColor: i, popoverColor: a, dividerColor: l, borderRadius: s, fontWeightStrong: c, lineHeight: d, fontSizeSmall: u, fontSizeMedium: f, fontSizeLarge: h } = e;
  return Object.assign(Object.assign({}, wv), { lineHeight: d, fontSizeSmall: u, fontSizeMedium: f, fontSizeLarge: h, titleTextColor: r, thColor: W(n, t), thColorModal: W(i, t), thColorPopover: W(a, t), thTextColor: r, thFontWeight: c, tdTextColor: o, tdColor: n, tdColorModal: i, tdColorPopover: a, borderColor: W(n, l), borderColorModal: W(i, l), borderColorPopover: W(a, l), borderRadius: s });
}
const Pv = { name: "Descriptions", common: F, self: $v }, Ev = "n-dialog-provider", nC = "n-dialog-api", iC = "n-dialog-reactive-list", Rv = { titleFontSize: "18px", padding: "16px 28px 20px 28px", iconSize: "28px", actionSpace: "12px", contentMargin: "8px 0 16px 0", iconMargin: "0 4px 0 0", iconMarginIconTop: "4px 0 8px 0", closeSize: "22px", closeIconSize: "18px", closeMargin: "20px 26px 0 0", closeMarginIconTop: "10px 16px 0 0" };
function Tv(e) {
  const { textColor1: t, textColor2: o, modalColor: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, infoColor: c, successColor: d, warningColor: u, errorColor: f, primaryColor: h, dividerColor: p, borderRadius: m, fontWeightStrong: v, lineHeight: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, Rv), { fontSize: x, lineHeight: g, border: `1px solid ${p}`, titleTextColor: t, textColor: o, color: r, closeColorHover: l, closeColorPressed: s, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeBorderRadius: m, iconColor: h, iconColorInfo: c, iconColorSuccess: d, iconColorWarning: u, iconColorError: f, borderRadius: m, titleFontWeight: v });
}
const Jn = { name: "Dialog", common: F, peers: { Button: Ve }, self: Tv }, ei = { icon: Function, type: { type: String, default: "default" }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean }, Iv = Kn(ei), Av = L([Q("dialog", `
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
 `, [G("icon", `
 color: var(--n-icon-color);
 `), U("bordered", `
 border: var(--n-border);
 `), U("icon-top", [G("close", `
 margin: var(--n-close-margin);
 `), G("icon", `
 margin: var(--n-icon-margin);
 `), G("content", `
 text-align: center;
 `), G("title", `
 justify-content: center;
 `), G("action", `
 justify-content: center;
 `)]), U("icon-left", [G("icon", `
 margin: var(--n-icon-margin);
 `), U("closable", [G("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), G("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), G("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [U("last", "margin-bottom: 0;")]), G("action", `
 display: flex;
 justify-content: flex-end;
 `, [L("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), G("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), G("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), Q("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), Al(Q("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), Q("dialog", [zl(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), zv = { default: () => C($a, null), info: () => C($a, null), success: () => C(_p, null), warning: () => C(Wp, null), error: () => C(Np, null) }, Mv = te({ name: "Dialog", alias: ["NimbusConfirmCard", "Confirm"], props: Object.assign(Object.assign({}, Ce.props), ei), slots: Object, setup(e) {
  const { mergedComponentPropsRef: t, mergedClsPrefixRef: o, inlineThemeDisabled: r, mergedRtlRef: n } = gt(e), i = jo("Dialog", n, o), a = B(() => {
    var h, p;
    const { iconPlacement: m } = e;
    return m || ((p = (h = t == null ? void 0 : t.value) === null || h === void 0 ? void 0 : h.Dialog) === null || p === void 0 ? void 0 : p.iconPlacement) || "left";
  });
  function l(h) {
    const { onPositiveClick: p } = e;
    p && p(h);
  }
  function s(h) {
    const { onNegativeClick: p } = e;
    p && p(h);
  }
  function c() {
    const { onClose: h } = e;
    h && h();
  }
  const d = Ce("Dialog", "-dialog", Av, Jn, e, o), u = B(() => {
    const { type: h } = e, p = a.value, { common: { cubicBezierEaseInOut: m }, self: { fontSize: v, lineHeight: g, border: x, titleTextColor: $, textColor: S, color: E, closeBorderRadius: A, closeColorHover: b, closeColorPressed: w, closeIconColor: P, closeIconColorHover: O, closeIconColorPressed: H, closeIconSize: M, borderRadius: V, titleFontWeight: T, titleFontSize: y, padding: I, iconSize: z, actionSpace: N, contentMargin: Z, closeSize: ne, [p === "top" ? "iconMarginIconTop" : "iconMargin"]: ue, [p === "top" ? "closeMarginIconTop" : "closeMargin"]: ce, [J("iconColor", h)]: Fe } } = d.value, He = jt(ue);
    return { "--n-font-size": v, "--n-icon-color": Fe, "--n-bezier": m, "--n-close-margin": ce, "--n-icon-margin-top": He.top, "--n-icon-margin-right": He.right, "--n-icon-margin-bottom": He.bottom, "--n-icon-margin-left": He.left, "--n-icon-size": z, "--n-close-size": ne, "--n-close-icon-size": M, "--n-close-border-radius": A, "--n-close-color-hover": b, "--n-close-color-pressed": w, "--n-close-icon-color": P, "--n-close-icon-color-hover": O, "--n-close-icon-color-pressed": H, "--n-color": E, "--n-text-color": S, "--n-border-radius": V, "--n-padding": I, "--n-line-height": g, "--n-border": x, "--n-content-margin": Z, "--n-title-font-size": y, "--n-title-font-weight": T, "--n-title-text-color": $, "--n-action-space": N };
  }), f = r ? Et("dialog", B(() => `${e.type[0]}${a.value[0]}`), u, e) : void 0;
  return { mergedClsPrefix: o, rtlEnabled: i, mergedIconPlacement: a, mergedTheme: d, handlePositiveClick: l, handleNegativeClick: s, handleCloseClick: c, cssVars: r ? void 0 : u, themeClass: f == null ? void 0 : f.themeClass, onRender: f == null ? void 0 : f.onRender };
}, render() {
  var e;
  const { bordered: t, mergedIconPlacement: o, cssVars: r, closable: n, showIcon: i, title: a, content: l, action: s, negativeText: c, positiveText: d, positiveButtonProps: u, negativeButtonProps: f, handlePositiveClick: h, handleNegativeClick: p, mergedTheme: m, loading: v, type: g, mergedClsPrefix: x } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const $ = i ? C(cs, { clsPrefix: x, class: `${x}-dialog__icon` }, { default: () => Ke(this.$slots.icon, (E) => E || (this.icon ? dt(this.icon) : zv[this.type]())) }) : null, S = Ke(this.$slots.action, (E) => E || d || c || s ? C("div", { class: [`${x}-dialog__action`, this.actionClass], style: this.actionStyle }, E || (s ? [dt(s)] : [this.negativeText && C(Cn, Object.assign({ theme: m.peers.Button, themeOverrides: m.peerOverrides.Button, ghost: true, size: "small", onClick: p }, f), { default: () => dt(this.negativeText) }), this.positiveText && C(Cn, Object.assign({ theme: m.peers.Button, themeOverrides: m.peerOverrides.Button, size: "small", type: g === "default" ? "primary" : g, disabled: v, loading: v, onClick: h }, u), { default: () => dt(this.positiveText) })])) : null);
  return C("div", { class: [`${x}-dialog`, this.themeClass, this.closable && `${x}-dialog--closable`, `${x}-dialog--icon-${o}`, t && `${x}-dialog--bordered`, this.rtlEnabled && `${x}-dialog--rtl`], style: r, role: "dialog" }, n ? Ke(this.$slots.close, (E) => {
    const A = [`${x}-dialog__close`, this.rtlEnabled && `${x}-dialog--rtl`];
    return E ? C("div", { class: A }, E) : C(us, { focusable: this.closeFocusable, clsPrefix: x, class: A, onClick: this.handleCloseClick });
  }) : null, i && o === "top" ? C("div", { class: `${x}-dialog-icon-container` }, $) : null, C("div", { class: [`${x}-dialog__title`, this.titleClass], style: this.titleStyle }, i && o === "left" ? $ : null, ya(this.$slots.header, () => [dt(a)])), C("div", { class: [`${x}-dialog__content`, S ? "" : `${x}-dialog__content--last`, this.contentClass], style: this.contentStyle }, ya(this.$slots.default, () => [dt(l)])), S);
} });
function Ov(e) {
  const { modalColor: t, textColor2: o, boxShadow3: r } = e;
  return { color: t, textColor: o, boxShadow: r };
}
const Fs = { name: "Modal", common: F, peers: { Scrollbar: Le, Dialog: Jn, Card: Yn }, self: Ov }, $n = "n-draggable";
function kv(e, t) {
  let o;
  const r = B(() => e.value !== false), n = B(() => r.value ? $n : ""), i = B(() => {
    const s = e.value;
    return s === true || s === false ? true : s ? s.bounds !== "none" : true;
  });
  function a(s) {
    const c = s.querySelector(`.${$n}`);
    if (!c || !n.value) return;
    let d = 0, u = 0, f = 0, h = 0, p = 0, m = 0, v;
    function g(S) {
      S.preventDefault(), v = S;
      const { x: E, y: A, right: b, bottom: w } = s.getBoundingClientRect();
      u = E, h = A, d = window.innerWidth - b, f = window.innerHeight - w;
      const { left: P, top: O } = s.style;
      p = +O.slice(0, -2), m = +P.slice(0, -2);
    }
    function x(S) {
      if (!v) return;
      const { clientX: E, clientY: A } = v;
      let b = S.clientX - E, w = S.clientY - A;
      i.value && (b > d ? b = d : -b > u && (b = -u), w > f ? w = f : -w > h && (w = -h));
      const P = b + m, O = w + p;
      s.style.top = `${O}px`, s.style.left = `${P}px`;
    }
    function $() {
      v = void 0, t.onEnd(s);
    }
    pe("mousedown", c, g), pe("mousemove", window, x), pe("mouseup", window, $), o = () => {
      he("mousedown", c, g), pe("mousemove", window, x), pe("mouseup", window, $);
    };
  }
  function l() {
    o && (o(), o = void 0);
  }
  return Na(l), { stopDrag: l, startDrag: a, draggableRef: r, draggableClassRef: n };
}
const ti = Object.assign(Object.assign({}, Xn), ei), Bv = Kn(ti), Lv = te({ name: "ModalBody", inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, ti), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(e) {
  const t = _(null), o = _(null), r = _(e.show), n = _(null), i = _(null), a = le(Nl);
  let l = null;
  Ie(me(e, "show"), (w) => {
    w && (l = a.getMousePosition());
  }, { immediate: true });
  const { stopDrag: s, startDrag: c, draggableRef: d, draggableClassRef: u } = kv(me(e, "draggable"), { onEnd: (w) => {
    m(w);
  } }), f = B(() => hi([e.titleClass, u.value])), h = B(() => hi([e.headerClass, u.value]));
  Ie(me(e, "show"), (w) => {
    w && (r.value = true);
  }), Dh(B(() => e.blockScroll && r.value));
  function p() {
    if (a.transformOriginRef.value === "center") return "";
    const { value: w } = n, { value: P } = i;
    if (w === null || P === null) return "";
    if (o.value) {
      const O = o.value.containerScrollTop;
      return `${w}px ${P + O}px`;
    }
    return "";
  }
  function m(w) {
    if (a.transformOriginRef.value === "center" || !l || !o.value) return;
    const P = o.value.containerScrollTop, { offsetLeft: O, offsetTop: H } = w, M = l.y, V = l.x;
    n.value = -(O - V), i.value = -(H - M - P), w.style.transformOrigin = p();
  }
  function v(w) {
    Yt(() => {
      m(w);
    });
  }
  function g(w) {
    w.style.transformOrigin = p(), e.onBeforeLeave();
  }
  function x(w) {
    const P = w;
    d.value && c(P), e.onAfterEnter && e.onAfterEnter(P);
  }
  function $() {
    r.value = false, n.value = null, i.value = null, s(), e.onAfterLeave();
  }
  function S() {
    const { onClose: w } = e;
    w && w();
  }
  function E() {
    e.onNegativeClick();
  }
  function A() {
    e.onPositiveClick();
  }
  const b = _(null);
  return Ie(b, (w) => {
    w && Yt(() => {
      const P = w.el;
      P && t.value !== P && (t.value = P);
    });
  }), Te($r, t), Te(wr, null), Te(Wo, null), { mergedTheme: a.mergedThemeRef, appear: a.appearRef, isMounted: a.isMountedRef, mergedClsPrefix: a.mergedClsPrefixRef, bodyRef: t, scrollbarRef: o, draggableClass: u, displayed: r, childNodeRef: b, cardHeaderClass: h, dialogTitleClass: f, handlePositiveClick: A, handleNegativeClick: E, handleCloseClick: S, handleAfterEnter: x, handleAfterLeave: $, handleBeforeLeave: g, handleEnter: v };
}, render() {
  const { $slots: e, $attrs: t, handleEnter: o, handleAfterEnter: r, handleAfterLeave: n, handleBeforeLeave: i, preset: a, mergedClsPrefix: l } = this;
  let s = null;
  if (!a) {
    if (s = Mp("default", e.default, { draggableClass: this.draggableClass }), !s) {
      Zt("modal", "default slot is empty");
      return;
    }
    s = ja(s), s.props = $t({ class: `${l}-modal` }, t, s.props || {});
  }
  return this.displayDirective === "show" || this.displayed || this.show ? Xt(C("div", { role: "none", class: [`${l}-modal-body-wrapper`, this.maskHidden && `${l}-modal-body-wrapper--mask-hidden`] }, C(ps, { ref: "scrollbarRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${l}-modal-scroll-content` }, { default: () => {
    var c;
    return [(c = this.renderMask) === null || c === void 0 ? void 0 : c.call(this), C(is, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => {
      var d;
      return C(kt, { name: "fade-in-scale-up-transition", appear: (d = this.appear) !== null && d !== void 0 ? d : this.isMounted, onEnter: o, onAfterEnter: r, onAfterLeave: n, onBeforeLeave: i }, { default: () => {
        const u = [[tn, this.show]], { onClickoutside: f } = this;
        return f && u.push([gn, this.onClickoutside, void 0, { capture: true }]), Xt(this.preset === "confirm" || this.preset === "dialog" ? C(Mv, Object.assign({}, this.$attrs, { class: [`${l}-modal`, this.$attrs.class], ref: "bodyRef", theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, Do(this.$props, Iv), { titleClass: this.dialogTitleClass, "aria-modal": "true" }), e) : this.preset === "card" ? C(Tm, Object.assign({}, this.$attrs, { ref: "bodyRef", class: [`${l}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, Do(this.$props, Em), { headerClass: this.cardHeaderClass, "aria-modal": "true", role: "dialog" }), e) : this.childNodeRef = s, u);
      } });
    } })];
  } })), [[tn, this.displayDirective === "if" || this.displayed || this.show]]) : null;
} }), Fv = L([Q("modal-container", `
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
 `, [fs({ enterDuration: ".25s", leaveDuration: ".25s", enterCubicBezier: "var(--n-bezier-ease-out)", leaveCubicBezier: "var(--n-bezier-ease-out)" })]), Q("modal-body-wrapper", `
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
 `), U("mask-hidden", "pointer-events: none;", [Q("modal-scroll-content", [L("> *", `
 pointer-events: all;
 `)])])]), Q("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [bs({ duration: ".25s", enterScale: ".5" }), L(`.${$n}`, `
 cursor: move;
 user-select: none;
 `)])]), Dv = Object.assign(Object.assign(Object.assign(Object.assign({}, Ce.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: "if" }, transformOrigin: { type: String, default: "mouse" }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), ti), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } }), aC = te({ name: "Modal", inheritAttrs: false, props: Dv, slots: Object, setup(e) {
  const t = _(null), { mergedClsPrefixRef: o, namespaceRef: r, inlineThemeDisabled: n } = gt(e), i = Ce("Modal", "-modal", Fv, Fs, e, o), a = Ah(64), l = Th(), s = Sr(), c = e.internalDialog ? le(Ev, null) : null, d = e.internalModal ? le(Bh, null) : null, u = Fh();
  function f(A) {
    const { onUpdateShow: b, "onUpdate:show": w, onHide: P } = e;
    b && qe(b, A), w && qe(w, A), P && !A && P(A);
  }
  function h() {
    const { onClose: A } = e;
    A ? Promise.resolve(A()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function p() {
    const { onPositiveClick: A } = e;
    A ? Promise.resolve(A()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function m() {
    const { onNegativeClick: A } = e;
    A ? Promise.resolve(A()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function v() {
    const { onBeforeLeave: A, onBeforeHide: b } = e;
    A && qe(A), b && b();
  }
  function g() {
    const { onAfterLeave: A, onAfterHide: b } = e;
    A && qe(A), b && b();
  }
  function x(A) {
    var b;
    const { onMaskClick: w } = e;
    w && w(A), e.maskClosable && !((b = t.value) === null || b === void 0) && b.contains(Lo(A)) && f(false);
  }
  function $(A) {
    var b;
    (b = e.onEsc) === null || b === void 0 || b.call(e), e.show && e.closeOnEsc && Tp(A) && (u.value || f(false));
  }
  Te(Nl, { getMousePosition: () => {
    const A = c || d;
    if (A) {
      const { clickedRef: b, clickedPositionRef: w } = A;
      if (b.value && w.value) return w.value;
    }
    return a.value ? l.value : null;
  }, mergedClsPrefixRef: o, mergedThemeRef: i, isMountedRef: s, appearRef: me(e, "internalAppear"), transformOriginRef: me(e, "transformOrigin") });
  const S = B(() => {
    const { common: { cubicBezierEaseOut: A }, self: { boxShadow: b, color: w, textColor: P } } = i.value;
    return { "--n-bezier-ease-out": A, "--n-box-shadow": b, "--n-color": w, "--n-text-color": P };
  }), E = n ? Et("theme-class", void 0, S, e) : void 0;
  return { mergedClsPrefix: o, namespace: r, isMounted: s, containerRef: t, presetProps: B(() => Do(e, Bv)), handleEsc: $, handleAfterLeave: g, handleClickoutside: x, handleBeforeLeave: v, doUpdateShow: f, handleNegativeClick: m, handlePositiveClick: p, handleCloseClick: h, cssVars: n ? void 0 : S, themeClass: E == null ? void 0 : E.themeClass, onRender: E == null ? void 0 : E.onRender };
}, render() {
  const { mergedClsPrefix: e } = this;
  return C(Ul, { to: this.to, show: this.show }, { default: () => {
    var t;
    (t = this.onRender) === null || t === void 0 || t.call(this);
    const { showMask: o } = this;
    return Xt(C("div", { role: "none", ref: "containerRef", class: [`${e}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, C(Lv, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: "bodyWrapper", displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !o }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: o ? void 0 : this.handleClickoutside, renderMask: o ? () => {
      var r;
      return C(kt, { name: "fade-in-transition", key: "mask", appear: (r = this.internalAppear) !== null && r !== void 0 ? r : this.isMounted }, { default: () => this.show ? C("div", { "aria-hidden": true, ref: "containerRef", class: `${e}-modal-mask`, onClick: this.handleClickoutside }) : null });
    } : void 0 }), this.$slots)), [[jn, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
function Hv(e) {
  const { primaryColor: t, errorColor: o } = e;
  return { colorError: o, colorLoading: t, height: "2px" };
}
const Nv = { name: "LoadingBar", common: F, self: Hv }, lC = "n-message-api", sC = "n-message-provider", _v = { margin: "0 0 8px 0", padding: "10px 20px", maxWidth: "720px", minWidth: "420px", iconMargin: "0 10px 0 0", closeMargin: "0 0 0 10px", closeSize: "20px", closeIconSize: "16px", iconSize: "20px", fontSize: "14px" };
function Wv(e) {
  const { textColor2: t, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, infoColor: i, successColor: a, errorColor: l, warningColor: s, popoverColor: c, boxShadow2: d, primaryColor: u, lineHeight: f, borderRadius: h, closeColorHover: p, closeColorPressed: m } = e;
  return Object.assign(Object.assign({}, _v), { closeBorderRadius: h, textColor: t, textColorInfo: t, textColorSuccess: t, textColorError: t, textColorWarning: t, textColorLoading: t, color: c, colorInfo: c, colorSuccess: c, colorError: c, colorWarning: c, colorLoading: c, boxShadow: d, boxShadowInfo: d, boxShadowSuccess: d, boxShadowError: d, boxShadowWarning: d, boxShadowLoading: d, iconColor: t, iconColorInfo: i, iconColorSuccess: a, iconColorWarning: s, iconColorError: l, iconColorLoading: u, closeColorHover: p, closeColorPressed: m, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, closeColorHoverInfo: p, closeColorPressedInfo: m, closeIconColorInfo: o, closeIconColorHoverInfo: r, closeIconColorPressedInfo: n, closeColorHoverSuccess: p, closeColorPressedSuccess: m, closeIconColorSuccess: o, closeIconColorHoverSuccess: r, closeIconColorPressedSuccess: n, closeColorHoverError: p, closeColorPressedError: m, closeIconColorError: o, closeIconColorHoverError: r, closeIconColorPressedError: n, closeColorHoverWarning: p, closeColorPressedWarning: m, closeIconColorWarning: o, closeIconColorHoverWarning: r, closeIconColorPressedWarning: n, closeColorHoverLoading: p, closeColorPressedLoading: m, closeIconColorLoading: o, closeIconColorHoverLoading: r, closeIconColorPressedLoading: n, loadingColor: u, lineHeight: f, borderRadius: h, border: "0" });
}
const Vv = { name: "Message", common: F, self: Wv }, jv = { closeMargin: "16px 12px", closeSize: "20px", closeIconSize: "16px", width: "365px", padding: "16px", titleFontSize: "16px", metaFontSize: "12px", descriptionFontSize: "12px" };
function Gv(e) {
  const { textColor2: t, successColor: o, infoColor: r, warningColor: n, errorColor: i, popoverColor: a, closeIconColor: l, closeIconColorHover: s, closeIconColorPressed: c, closeColorHover: d, closeColorPressed: u, textColor1: f, textColor3: h, borderRadius: p, fontWeightStrong: m, boxShadow2: v, lineHeight: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, jv), { borderRadius: p, lineHeight: g, fontSize: x, headerFontWeight: m, iconColor: t, iconColorSuccess: o, iconColorInfo: r, iconColorWarning: n, iconColorError: i, color: a, textColor: t, closeIconColor: l, closeIconColorHover: s, closeIconColorPressed: c, closeBorderRadius: p, closeColorHover: d, closeColorPressed: u, headerTextColor: f, descriptionTextColor: h, actionTextColor: t, boxShadow: v });
}
const Kv = { name: "Notification", common: F, peers: { Scrollbar: Le }, self: Gv };
function Uv(e) {
  const { textColor1: t, dividerColor: o, fontWeightStrong: r } = e;
  return { textColor: t, color: o, fontWeight: r };
}
const qv = { name: "Divider", common: F, self: Uv };
function Yv(e) {
  const { modalColor: t, textColor1: o, textColor2: r, boxShadow3: n, lineHeight: i, fontWeightStrong: a, dividerColor: l, closeColorHover: s, closeColorPressed: c, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, borderRadius: h, primaryColorHover: p } = e;
  return { bodyPadding: "16px 24px", borderRadius: h, headerPadding: "16px 24px", footerPadding: "16px 24px", color: t, textColor: r, titleTextColor: o, titleFontSize: "18px", titleFontWeight: a, boxShadow: n, lineHeight: i, headerBorderBottom: `1px solid ${l}`, footerBorderTop: `1px solid ${l}`, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, closeSize: "22px", closeIconSize: "18px", closeColorHover: s, closeColorPressed: c, closeBorderRadius: h, resizableTriggerColorHover: p };
}
const Xv = { name: "Drawer", common: F, peers: { Scrollbar: Le }, self: Yv }, Zv = { actionMargin: "0 0 0 20px", actionMarginRtl: "0 20px 0 0" };
function Qv() {
  return Zv;
}
const Jv = { name: "DynamicInput", common: F, peers: { Input: Xe, Button: Ve }, self: Qv }, eb = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function tb() {
  return eb;
}
const Ds = { name: "Space", self: tb }, ob = { name: "DynamicTags", common: F, peers: { Input: Xe, Button: Ve, Tag: Ss, Space: Ds }, self() {
  return { inputWidth: "64px" };
} }, rb = { name: "Element", common: F }, nb = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function ib() {
  return nb;
}
const ab = { name: "Flex", self: ib }, lb = { name: "ButtonGroup", common: F }, sb = { feedbackPadding: "4px 0 0 2px", feedbackHeightSmall: "24px", feedbackHeightMedium: "24px", feedbackHeightLarge: "26px", feedbackFontSizeSmall: "13px", feedbackFontSizeMedium: "14px", feedbackFontSizeLarge: "14px", labelFontSizeLeftSmall: "14px", labelFontSizeLeftMedium: "14px", labelFontSizeLeftLarge: "15px", labelFontSizeTopSmall: "13px", labelFontSizeTopMedium: "14px", labelFontSizeTopLarge: "14px", labelHeightSmall: "24px", labelHeightMedium: "26px", labelHeightLarge: "28px", labelPaddingVertical: "0 0 6px 2px", labelPaddingHorizontal: "0 12px 0 0", labelTextAlignVertical: "left", labelTextAlignHorizontal: "right", labelFontWeight: "400" };
function cb(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, textColor1: n, errorColor: i, warningColor: a, lineHeight: l, textColor3: s } = e;
  return Object.assign(Object.assign({}, sb), { blankHeightSmall: t, blankHeightMedium: o, blankHeightLarge: r, lineHeight: l, labelTextColor: n, asteriskColor: i, feedbackTextColorError: i, feedbackTextColorWarning: a, feedbackTextColor: s });
}
const db = { name: "Form", common: F, self: cb };
function ub(e) {
  const { primaryColor: t, successColor: o, warningColor: r, errorColor: n, infoColor: i, fontWeightStrong: a } = e;
  return { fontWeight: a, rotate: "252deg", colorStartPrimary: K(t, { alpha: 0.6 }), colorEndPrimary: t, colorStartInfo: K(i, { alpha: 0.6 }), colorEndInfo: i, colorStartWarning: K(r, { alpha: 0.6 }), colorEndWarning: r, colorStartError: K(n, { alpha: 0.6 }), colorEndError: n, colorStartSuccess: K(o, { alpha: 0.6 }), colorEndSuccess: o };
}
const fb = { name: "GradientText", common: F, self: ub };
function hb(e) {
  const { textColorDisabled: t } = e;
  return { iconColorDisabled: t };
}
const pb = { name: "InputNumber", common: F, peers: { Button: Ve, Input: Xe }, self: hb };
function gb() {
  return { inputWidthSmall: "24px", inputWidthMedium: "30px", inputWidthLarge: "36px", gapSmall: "8px", gapMedium: "8px", gapLarge: "8px" };
}
const mb = { name: "InputOtp", common: F, peers: { Input: Xe }, self: gb };
function vb(e) {
  const { baseColor: t, textColor2: o, bodyColor: r, cardColor: n, dividerColor: i, actionColor: a, scrollbarColor: l, scrollbarColorHover: s, invertedColor: c } = e;
  return { textColor: o, textColorInverted: "#FFF", color: r, colorEmbedded: a, headerColor: n, headerColorInverted: c, footerColor: a, footerColorInverted: c, headerBorderColor: i, headerBorderColorInverted: c, footerBorderColor: i, footerBorderColorInverted: c, siderBorderColor: i, siderBorderColorInverted: c, siderColor: n, siderColorInverted: c, siderToggleButtonBorder: `1px solid ${i}`, siderToggleButtonColor: t, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: W(r, l), siderToggleBarColorHover: W(r, s), __invertScrollbar: "true" };
}
const bb = { name: "Layout", common: F, peers: { Scrollbar: Le }, self: vb }, xb = { name: "Row", common: F };
function Cb(e) {
  const { textColor2: t, cardColor: o, modalColor: r, popoverColor: n, dividerColor: i, borderRadius: a, fontSize: l, hoverColor: s } = e;
  return { textColor: t, color: o, colorHover: s, colorModal: r, colorHoverModal: W(r, s), colorPopover: n, colorHoverPopover: W(n, s), borderColor: i, borderColorModal: W(r, i), borderColorPopover: W(n, i), borderRadius: a, fontSize: l };
}
const yb = { name: "List", common: F, self: Cb };
function Sb(e) {
  const { textColor2: t, modalColor: o, borderColor: r, fontSize: n, primaryColor: i } = e;
  return { loaderFontSize: n, loaderTextColor: t, loaderColor: o, loaderBorder: `1px solid ${r}`, loadingColor: i };
}
const wb = { name: "Log", common: F, peers: { Scrollbar: Le, Code: $s }, self: Sb };
function $b(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const Pb = { name: "Mention", common: F, peers: { InternalSelectMenu: Uo, Input: Xe }, self: $b };
function Eb(e, t, o, r) {
  return { itemColorHoverInverted: "#0000", itemColorActiveInverted: t, itemColorActiveHoverInverted: t, itemColorActiveCollapsedInverted: t, itemTextColorInverted: e, itemTextColorHoverInverted: o, itemTextColorChildActiveInverted: o, itemTextColorChildActiveHoverInverted: o, itemTextColorActiveInverted: o, itemTextColorActiveHoverInverted: o, itemTextColorHorizontalInverted: e, itemTextColorHoverHorizontalInverted: o, itemTextColorChildActiveHorizontalInverted: o, itemTextColorChildActiveHoverHorizontalInverted: o, itemTextColorActiveHorizontalInverted: o, itemTextColorActiveHoverHorizontalInverted: o, itemIconColorInverted: e, itemIconColorHoverInverted: o, itemIconColorActiveInverted: o, itemIconColorActiveHoverInverted: o, itemIconColorChildActiveInverted: o, itemIconColorChildActiveHoverInverted: o, itemIconColorCollapsedInverted: e, itemIconColorHorizontalInverted: e, itemIconColorHoverHorizontalInverted: o, itemIconColorActiveHorizontalInverted: o, itemIconColorActiveHoverHorizontalInverted: o, itemIconColorChildActiveHorizontalInverted: o, itemIconColorChildActiveHoverHorizontalInverted: o, arrowColorInverted: e, arrowColorHoverInverted: o, arrowColorActiveInverted: o, arrowColorActiveHoverInverted: o, arrowColorChildActiveInverted: o, arrowColorChildActiveHoverInverted: o, groupTextColorInverted: r };
}
function Rb(e) {
  const { borderRadius: t, textColor3: o, primaryColor: r, textColor2: n, textColor1: i, fontSize: a, dividerColor: l, hoverColor: s, primaryColorHover: c } = e;
  return Object.assign({ borderRadius: t, color: "#0000", groupTextColor: o, itemColorHover: s, itemColorActive: K(r, { alpha: 0.1 }), itemColorActiveHover: K(r, { alpha: 0.1 }), itemColorActiveCollapsed: K(r, { alpha: 0.1 }), itemTextColor: n, itemTextColorHover: n, itemTextColorActive: r, itemTextColorActiveHover: r, itemTextColorChildActive: r, itemTextColorChildActiveHover: r, itemTextColorHorizontal: n, itemTextColorHoverHorizontal: c, itemTextColorActiveHorizontal: r, itemTextColorActiveHoverHorizontal: r, itemTextColorChildActiveHorizontal: r, itemTextColorChildActiveHoverHorizontal: r, itemIconColor: i, itemIconColorHover: i, itemIconColorActive: r, itemIconColorActiveHover: r, itemIconColorChildActive: r, itemIconColorChildActiveHover: r, itemIconColorCollapsed: i, itemIconColorHorizontal: i, itemIconColorHoverHorizontal: c, itemIconColorActiveHorizontal: r, itemIconColorActiveHoverHorizontal: r, itemIconColorChildActiveHorizontal: r, itemIconColorChildActiveHoverHorizontal: r, itemHeight: "42px", arrowColor: n, arrowColorHover: n, arrowColorActive: r, arrowColorActiveHover: r, arrowColorChildActive: r, arrowColorChildActiveHover: r, colorInverted: "#0000", borderColorHorizontal: "#0000", fontSize: a, dividerColor: l }, Eb("#BBB", r, "#FFF", "#AAA"));
}
const Tb = { name: "Menu", common: F, peers: { Tooltip: qo, Dropdown: Er }, self: Rb }, Ib = { titleFontSize: "18px", backSize: "22px" };
function Ab(e) {
  const { textColor1: t, textColor2: o, textColor3: r, fontSize: n, fontWeightStrong: i, primaryColorHover: a, primaryColorPressed: l } = e;
  return Object.assign(Object.assign({}, Ib), { titleFontWeight: i, fontSize: n, titleTextColor: t, backColor: o, backColorHover: a, backColorPressed: l, subtitleTextColor: r });
}
const zb = { name: "PageHeader", common: F, self: Ab }, Mb = { iconSize: "22px" };
function Ob(e) {
  const { fontSize: t, warningColor: o } = e;
  return Object.assign(Object.assign({}, Mb), { fontSize: t, iconColor: o });
}
const kb = { name: "Popconfirm", common: F, peers: { Button: Ve, Popover: Dt }, self: Ob };
function Bb(e) {
  const { infoColor: t, successColor: o, warningColor: r, errorColor: n, textColor2: i, progressRailColor: a, fontSize: l, fontWeight: s } = e;
  return { fontSize: l, fontSizeCircle: "28px", fontWeightCircle: s, railColor: a, railHeight: "8px", iconSizeCircle: "36px", iconSizeLine: "18px", iconColor: t, iconColorInfo: t, iconColorSuccess: o, iconColorWarning: r, iconColorError: n, textColorCircle: i, textColorLineInner: "rgb(255, 255, 255)", textColorLineOuter: i, fillColor: t, fillColorInfo: t, fillColorSuccess: o, fillColorWarning: r, fillColorError: n, lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)" };
}
const Hs = { name: "Progress", common: F, self: Bb };
function Lb(e) {
  const { railColor: t } = e;
  return { itemColor: t, itemColorActive: "#FFCC33", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
}
const Fb = { name: "Rate", common: F, self: Lb }, Db = { titleFontSizeSmall: "26px", titleFontSizeMedium: "32px", titleFontSizeLarge: "40px", titleFontSizeHuge: "48px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", iconSizeSmall: "64px", iconSizeMedium: "80px", iconSizeLarge: "100px", iconSizeHuge: "125px", iconColor418: void 0, iconColor404: void 0, iconColor403: void 0, iconColor500: void 0 };
function Hb(e) {
  const { textColor2: t, textColor1: o, errorColor: r, successColor: n, infoColor: i, warningColor: a, lineHeight: l, fontWeightStrong: s } = e;
  return Object.assign(Object.assign({}, Db), { lineHeight: l, titleFontWeight: s, titleTextColor: o, textColor: t, iconColorError: r, iconColorSuccess: n, iconColorInfo: i, iconColorWarning: a });
}
const Nb = { name: "Result", common: F, self: Hb }, _b = { railHeight: "4px", railWidthVertical: "4px", handleSize: "18px", dotHeight: "8px", dotWidth: "8px", dotBorderRadius: "4px" };
function Wb(e) {
  const t = "rgba(0, 0, 0, .85)", o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: r, primaryColor: n, baseColor: i, cardColor: a, modalColor: l, popoverColor: s, borderRadius: c, fontSize: d, opacityDisabled: u } = e;
  return Object.assign(Object.assign({}, _b), { fontSize: d, markFontSize: d, railColor: r, railColorHover: r, fillColor: n, fillColorHover: n, opacityDisabled: u, handleColor: "#FFF", dotColor: a, dotColorModal: l, dotColorPopover: s, handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", indicatorColor: t, indicatorBoxShadow: o, indicatorTextColor: i, indicatorBorderRadius: c, dotBorder: `2px solid ${r}`, dotBorderActive: `2px solid ${n}`, dotBoxShadow: "" });
}
const Vb = { name: "Slider", common: F, self: Wb };
function jb(e) {
  const { opacityDisabled: t, heightTiny: o, heightSmall: r, heightMedium: n, heightLarge: i, heightHuge: a, primaryColor: l, fontSize: s } = e;
  return { fontSize: s, textColor: l, sizeTiny: o, sizeSmall: r, sizeMedium: n, sizeLarge: i, sizeHuge: a, color: l, opacitySpinning: t };
}
const Gb = { name: "Spin", common: F, self: jb };
function Kb(e) {
  const { textColor2: t, textColor3: o, fontSize: r, fontWeight: n } = e;
  return { labelFontSize: r, labelFontWeight: n, valueFontWeight: n, valueFontSize: "24px", labelTextColor: o, valuePrefixTextColor: t, valueSuffixTextColor: t, valueTextColor: t };
}
const Ub = { name: "Statistic", common: F, self: Kb }, qb = { stepHeaderFontSizeSmall: "14px", stepHeaderFontSizeMedium: "16px", indicatorIndexFontSizeSmall: "14px", indicatorIndexFontSizeMedium: "16px", indicatorSizeSmall: "22px", indicatorSizeMedium: "28px", indicatorIconSizeSmall: "14px", indicatorIconSizeMedium: "18px" };
function Yb(e) {
  const { fontWeightStrong: t, baseColor: o, textColorDisabled: r, primaryColor: n, errorColor: i, textColor1: a, textColor2: l } = e;
  return Object.assign(Object.assign({}, qb), { stepHeaderFontWeight: t, indicatorTextColorProcess: o, indicatorTextColorWait: r, indicatorTextColorFinish: n, indicatorTextColorError: i, indicatorBorderColorProcess: n, indicatorBorderColorWait: r, indicatorBorderColorFinish: n, indicatorBorderColorError: i, indicatorColorProcess: n, indicatorColorWait: "#0000", indicatorColorFinish: "#0000", indicatorColorError: "#0000", splitorColorProcess: r, splitorColorWait: r, splitorColorFinish: n, splitorColorError: r, headerTextColorProcess: a, headerTextColorWait: r, headerTextColorFinish: r, headerTextColorError: i, descriptionTextColorProcess: l, descriptionTextColorWait: r, descriptionTextColorFinish: r, descriptionTextColorError: i });
}
const Xb = { name: "Steps", common: F, self: Yb }, Zb = { buttonHeightSmall: "14px", buttonHeightMedium: "18px", buttonHeightLarge: "22px", buttonWidthSmall: "14px", buttonWidthMedium: "18px", buttonWidthLarge: "22px", buttonWidthPressedSmall: "20px", buttonWidthPressedMedium: "24px", buttonWidthPressedLarge: "28px", railHeightSmall: "18px", railHeightMedium: "22px", railHeightLarge: "26px", railWidthSmall: "32px", railWidthMedium: "40px", railWidthLarge: "48px" };
function Qb(e) {
  const { primaryColor: t, opacityDisabled: o, borderRadius: r, textColor3: n } = e;
  return Object.assign(Object.assign({}, Zb), { iconColor: n, textColor: "white", loadingColor: t, opacityDisabled: o, railColor: "rgba(0, 0, 0, .14)", railColorActive: t, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 0 2px ${K(t, { alpha: 0.2 })}` });
}
const Jb = { name: "Switch", common: F, self: Qb }, e0 = { thPaddingSmall: "6px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "6px", tdPaddingMedium: "12px", tdPaddingLarge: "12px" };
function t0(e) {
  const { dividerColor: t, cardColor: o, modalColor: r, popoverColor: n, tableHeaderColor: i, tableColorStriped: a, textColor1: l, textColor2: s, borderRadius: c, fontWeightStrong: d, lineHeight: u, fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p } = e;
  return Object.assign(Object.assign({}, e0), { fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p, lineHeight: u, borderRadius: c, borderColor: W(o, t), borderColorModal: W(r, t), borderColorPopover: W(n, t), tdColor: o, tdColorModal: r, tdColorPopover: n, tdColorStriped: W(o, a), tdColorStripedModal: W(r, a), tdColorStripedPopover: W(n, a), thColor: W(o, i), thColorModal: W(r, i), thColorPopover: W(n, i), thTextColor: l, tdTextColor: s, thFontWeight: d });
}
const o0 = { name: "Table", common: F, self: t0 }, r0 = { tabFontSizeSmall: "14px", tabFontSizeMedium: "14px", tabFontSizeLarge: "16px", tabGapSmallLine: "36px", tabGapMediumLine: "36px", tabGapLargeLine: "36px", tabGapSmallLineVertical: "8px", tabGapMediumLineVertical: "8px", tabGapLargeLineVertical: "8px", tabPaddingSmallLine: "6px 0", tabPaddingMediumLine: "10px 0", tabPaddingLargeLine: "14px 0", tabPaddingVerticalSmallLine: "6px 12px", tabPaddingVerticalMediumLine: "8px 16px", tabPaddingVerticalLargeLine: "10px 20px", tabGapSmallBar: "36px", tabGapMediumBar: "36px", tabGapLargeBar: "36px", tabGapSmallBarVertical: "8px", tabGapMediumBarVertical: "8px", tabGapLargeBarVertical: "8px", tabPaddingSmallBar: "4px 0", tabPaddingMediumBar: "6px 0", tabPaddingLargeBar: "10px 0", tabPaddingVerticalSmallBar: "6px 12px", tabPaddingVerticalMediumBar: "8px 16px", tabPaddingVerticalLargeBar: "10px 20px", tabGapSmallCard: "4px", tabGapMediumCard: "4px", tabGapLargeCard: "4px", tabGapSmallCardVertical: "4px", tabGapMediumCardVertical: "4px", tabGapLargeCardVertical: "4px", tabPaddingSmallCard: "8px 16px", tabPaddingMediumCard: "10px 20px", tabPaddingLargeCard: "12px 24px", tabPaddingSmallSegment: "4px 0", tabPaddingMediumSegment: "6px 0", tabPaddingLargeSegment: "8px 0", tabPaddingVerticalLargeSegment: "0 8px", tabPaddingVerticalSmallCard: "8px 12px", tabPaddingVerticalMediumCard: "10px 16px", tabPaddingVerticalLargeCard: "12px 20px", tabPaddingVerticalSmallSegment: "0 4px", tabPaddingVerticalMediumSegment: "0 6px", tabGapSmallSegment: "0", tabGapMediumSegment: "0", tabGapLargeSegment: "0", tabGapSmallSegmentVertical: "0", tabGapMediumSegmentVertical: "0", tabGapLargeSegmentVertical: "0", panePaddingSmall: "8px 0 0 0", panePaddingMedium: "12px 0 0 0", panePaddingLarge: "16px 0 0 0", closeSize: "18px", closeIconSize: "14px" };
function n0(e) {
  const { textColor2: t, primaryColor: o, textColorDisabled: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, tabColor: c, baseColor: d, dividerColor: u, fontWeight: f, textColor1: h, borderRadius: p, fontSize: m, fontWeightStrong: v } = e;
  return Object.assign(Object.assign({}, r0), { colorSegment: c, tabFontSizeCard: m, tabTextColorLine: h, tabTextColorActiveLine: o, tabTextColorHoverLine: o, tabTextColorDisabledLine: r, tabTextColorSegment: h, tabTextColorActiveSegment: t, tabTextColorHoverSegment: t, tabTextColorDisabledSegment: r, tabTextColorBar: h, tabTextColorActiveBar: o, tabTextColorHoverBar: o, tabTextColorDisabledBar: r, tabTextColorCard: h, tabTextColorHoverCard: h, tabTextColorActiveCard: o, tabTextColorDisabledCard: r, barColor: o, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, closeBorderRadius: p, tabColor: c, tabColorSegment: d, tabBorderColor: u, tabFontWeightActive: f, tabFontWeight: f, tabBorderRadius: p, paneTextColor: t, fontWeightStrong: v });
}
const i0 = { name: "Tabs", common: F, self: n0 };
function a0(e) {
  const { textColor1: t, textColor2: o, fontWeightStrong: r, fontSize: n } = e;
  return { fontSize: n, titleTextColor: t, textColor: o, titleFontWeight: r };
}
const l0 = { name: "Thing", common: F, self: a0 }, s0 = { titleMarginMedium: "0 0 6px 0", titleMarginLarge: "-2px 0 6px 0", titleFontSizeMedium: "14px", titleFontSizeLarge: "16px", iconSizeMedium: "14px", iconSizeLarge: "14px" };
function c0(e) {
  const { textColor3: t, infoColor: o, errorColor: r, successColor: n, warningColor: i, textColor1: a, textColor2: l, railColor: s, fontWeightStrong: c, fontSize: d } = e;
  return Object.assign(Object.assign({}, s0), { contentFontSize: d, titleFontWeight: c, circleBorder: `2px solid ${t}`, circleBorderInfo: `2px solid ${o}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${n}`, circleBorderWarning: `2px solid ${i}`, iconColor: t, iconColorInfo: o, iconColorError: r, iconColorSuccess: n, iconColorWarning: i, titleTextColor: a, contentTextColor: l, metaTextColor: t, lineColor: s });
}
const d0 = { name: "Timeline", common: F, self: c0 }, u0 = { extraFontSizeSmall: "12px", extraFontSizeMedium: "12px", extraFontSizeLarge: "14px", titleFontSizeSmall: "14px", titleFontSizeMedium: "16px", titleFontSizeLarge: "16px", closeSize: "20px", closeIconSize: "16px", headerHeightSmall: "44px", headerHeightMedium: "44px", headerHeightLarge: "50px" };
function f0(e) {
  const { fontWeight: t, fontSizeLarge: o, fontSizeMedium: r, fontSizeSmall: n, heightLarge: i, heightMedium: a, borderRadius: l, cardColor: s, tableHeaderColor: c, textColor1: d, textColorDisabled: u, textColor2: f, textColor3: h, borderColor: p, hoverColor: m, closeColorHover: v, closeColorPressed: g, closeIconColor: x, closeIconColorHover: $, closeIconColorPressed: S } = e;
  return Object.assign(Object.assign({}, u0), { itemHeightSmall: a, itemHeightMedium: a, itemHeightLarge: i, fontSizeSmall: n, fontSizeMedium: r, fontSizeLarge: o, borderRadius: l, dividerColor: p, borderColor: p, listColor: s, headerColor: W(s, c), titleTextColor: d, titleTextColorDisabled: u, extraTextColor: h, extraTextColorDisabled: u, itemTextColor: f, itemTextColorDisabled: u, itemColorPending: m, titleFontWeight: t, closeColorHover: v, closeColorPressed: g, closeIconColor: x, closeIconColorHover: $, closeIconColorPressed: S });
}
const h0 = { name: "Transfer", common: F, peers: { Checkbox: yo, Scrollbar: Le, Input: Xe, Empty: Ft, Button: Ve }, self: f0 };
function p0(e) {
  const { borderRadiusSmall: t, dividerColor: o, hoverColor: r, pressedColor: n, primaryColor: i, textColor3: a, textColor2: l, textColorDisabled: s, fontSize: c } = e;
  return { fontSize: c, lineHeight: "1.5", nodeHeight: "30px", nodeWrapperPadding: "3px 0", nodeBorderRadius: t, nodeColorHover: r, nodeColorPressed: n, nodeColorActive: K(i, { alpha: 0.1 }), arrowColor: a, nodeTextColor: l, nodeTextColorDisabled: s, loadingColor: i, dropMarkColor: i, lineColor: o };
}
const Ns = { name: "Tree", common: F, peers: { Checkbox: yo, Scrollbar: Le, Empty: Ft }, self: p0 };
function g0(e) {
  const { popoverColor: t, boxShadow2: o, borderRadius: r, heightMedium: n, dividerColor: i, textColor2: a } = e;
  return { menuPadding: "4px", menuColor: t, menuBoxShadow: o, menuBorderRadius: r, menuHeight: `calc(${n} * 7.6)`, actionDividerColor: i, actionTextColor: a, actionPadding: "8px 12px", headerDividerColor: i, headerTextColor: a, headerPadding: "8px 12px" };
}
const m0 = { name: "TreeSelect", common: F, peers: { Tree: Ns, Empty: Ft, InternalSelection: qn }, self: g0 }, v0 = { headerFontSize1: "30px", headerFontSize2: "22px", headerFontSize3: "18px", headerFontSize4: "16px", headerFontSize5: "16px", headerFontSize6: "16px", headerMargin1: "28px 0 20px 0", headerMargin2: "28px 0 20px 0", headerMargin3: "28px 0 20px 0", headerMargin4: "28px 0 18px 0", headerMargin5: "28px 0 18px 0", headerMargin6: "28px 0 18px 0", headerPrefixWidth1: "16px", headerPrefixWidth2: "16px", headerPrefixWidth3: "12px", headerPrefixWidth4: "12px", headerPrefixWidth5: "12px", headerPrefixWidth6: "12px", headerBarWidth1: "4px", headerBarWidth2: "4px", headerBarWidth3: "3px", headerBarWidth4: "3px", headerBarWidth5: "3px", headerBarWidth6: "3px", pMargin: "16px 0 16px 0", liMargin: ".25em 0 0 0", olPadding: "0 0 0 2em", ulPadding: "0 0 0 2em" };
function b0(e) {
  const { primaryColor: t, textColor2: o, borderColor: r, lineHeight: n, fontSize: i, borderRadiusSmall: a, dividerColor: l, fontWeightStrong: s, textColor1: c, textColor3: d, infoColor: u, warningColor: f, errorColor: h, successColor: p, codeColor: m } = e;
  return Object.assign(Object.assign({}, v0), { aTextColor: t, blockquoteTextColor: o, blockquotePrefixColor: r, blockquoteLineHeight: n, blockquoteFontSize: i, codeBorderRadius: a, liTextColor: o, liLineHeight: n, liFontSize: i, hrColor: l, headerFontWeight: s, headerTextColor: c, pTextColor: o, pTextColor1Depth: c, pTextColor2Depth: o, pTextColor3Depth: d, pLineHeight: n, pFontSize: i, headerBarColor: t, headerBarColorPrimary: t, headerBarColorInfo: u, headerBarColorError: h, headerBarColorWarning: f, headerBarColorSuccess: p, textColor: o, textColor1Depth: c, textColor2Depth: o, textColor3Depth: d, textColorPrimary: t, textColorInfo: u, textColorSuccess: p, textColorWarning: f, textColorError: h, codeTextColor: o, codeColor: m, codeBorder: "1px solid #0000" });
}
const _s = { name: "Typography", common: F, self: b0 };
function x0(e) {
  const { iconColor: t, primaryColor: o, errorColor: r, textColor2: n, successColor: i, opacityDisabled: a, actionColor: l, borderColor: s, hoverColor: c, lineHeight: d, borderRadius: u, fontSize: f } = e;
  return { fontSize: f, lineHeight: d, borderRadius: u, draggerColor: l, draggerBorder: `1px dashed ${s}`, draggerBorderHover: `1px dashed ${o}`, itemColorHover: c, itemColorHoverError: K(r, { alpha: 0.06 }), itemTextColor: n, itemTextColorError: r, itemTextColorSuccess: i, itemIconColor: t, itemDisabledOpacity: a, itemBorderImageCardError: `1px solid ${r}`, itemBorderImageCard: `1px solid ${s}` };
}
const C0 = { name: "Upload", common: F, peers: { Button: Ve, Progress: Hs }, self: x0 }, y0 = { name: "Watermark", common: F, self(e) {
  const { fontFamily: t } = e;
  return { fontFamily: t };
} };
function S0(e) {
  const { popoverColor: t, dividerColor: o, borderRadius: r } = e;
  return { color: t, buttonBorderColor: o, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
}
const w0 = { name: "FloatButtonGroup", common: F, self: S0 };
function $0(e) {
  const { popoverColor: t, textColor2: o, buttonColor2Hover: r, buttonColor2Pressed: n, primaryColor: i, primaryColorHover: a, primaryColorPressed: l, borderRadius: s } = e;
  return { color: t, colorHover: r, colorPressed: n, colorPrimary: i, colorPrimaryHover: a, colorPrimaryPressed: l, textColor: o, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)", textColorPrimary: "#fff", borderRadiusSquare: s };
}
const P0 = { name: "FloatButton", common: F, self: $0 };
function E0(e) {
  const { borderRadius: t, fontSizeMini: o, fontSizeTiny: r, fontSizeSmall: n, fontWeight: i, textColor2: a, cardColor: l, buttonColor2Hover: s } = e;
  return { activeColors: ["#9be9a8", "#40c463", "#30a14e", "#216e39"], borderRadius: t, borderColor: l, textColor: a, mininumColor: s, fontWeight: i, loadingColorStart: "rgba(0, 0, 0, 0.06)", loadingColorEnd: "rgba(0, 0, 0, 0.12)", rectSizeSmall: "10px", rectSizeMedium: "11px", rectSizeLarge: "12px", borderRadiusSmall: "2px", borderRadiusMedium: "2px", borderRadiusLarge: "2px", xGapSmall: "2px", xGapMedium: "3px", xGapLarge: "3px", yGapSmall: "2px", yGapMedium: "3px", yGapLarge: "3px", fontSizeSmall: r, fontSizeMedium: o, fontSizeLarge: n };
}
const R0 = { name: "Heatmap", common: F, self: E0 };
function T0(e) {
  const { primaryColor: t, baseColor: o } = e;
  return { color: t, iconColor: o };
}
const I0 = { name: "IconWrapper", common: F, self: T0 };
function A0() {
  return { toolbarIconColor: "rgba(255, 255, 255, .9)", toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
}
const z0 = { name: "Image", common: F, peers: { Tooltip: qo }, self: A0 }, cC = "n-layout-sider", dC = { type: String, default: "static" }, M0 = { extraFontSize: "12px", width: "440px" };
function O0(e) {
  const { fontWeight: t, iconColorDisabled: o, iconColor: r, fontSizeLarge: n, fontSizeMedium: i, fontSizeSmall: a, heightLarge: l, heightMedium: s, heightSmall: c, borderRadius: d, cardColor: u, tableHeaderColor: f, textColor1: h, textColorDisabled: p, textColor2: m, borderColor: v, hoverColor: g } = e;
  return Object.assign(Object.assign({}, M0), { itemHeightSmall: c, itemHeightMedium: s, itemHeightLarge: l, fontSizeSmall: a, fontSizeMedium: i, fontSizeLarge: n, borderRadius: d, borderColor: v, listColor: u, headerColor: W(u, f), titleTextColor: h, titleTextColorDisabled: p, extraTextColor: m, filterDividerColor: v, itemTextColor: m, itemTextColorDisabled: p, itemColorPending: g, titleFontWeight: t, iconColor: r, iconColorDisabled: o });
}
const k0 = { name: "Transfer", common: F, peers: { Checkbox: yo, Scrollbar: Le, Input: Xe, Empty: Ft, Button: Ve }, self: O0 };
function B0() {
  return {};
}
const L0 = { name: "Marquee", common: F, self: B0 };
function F0(e) {
  return { borderRadius: e.borderRadius };
}
const D0 = { name: "QrCode", common: F, self: F0 };
function H0(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, borderRadius: n } = e;
  return { color: "#eee", colorEnd: "#ddd", borderRadius: n, heightSmall: t, heightMedium: o, heightLarge: r };
}
const N0 = { name: "Skeleton", common: F, self: H0 };
function _0(e) {
  const { primaryColorHover: t, borderColor: o } = e;
  return { resizableTriggerColorHover: t, resizableTriggerColor: o };
}
const W0 = { name: "Split", common: F, self: _0 }, V0 = Q("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [U("strong", `
 font-weight: var(--n-font-weight-strong);
 `), U("italic", { fontStyle: "italic" }), U("underline", { textDecoration: "underline" }), U("code", `
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
 `)]), j0 = Object.assign(Object.assign({}, Ce.props), { code: Boolean, type: { type: String, default: "default" }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), uC = te({ name: "Text", props: j0, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = gt(e), r = Ce("Typography", "-text", V0, _s, e, t), n = B(() => {
    const { depth: a, type: l } = e, s = l === "default" ? a === void 0 ? "textColor" : `textColor${a}Depth` : J("textColor", l), { common: { fontWeightStrong: c, fontFamilyMono: d, cubicBezierEaseInOut: u }, self: { codeTextColor: f, codeBorderRadius: h, codeColor: p, codeBorder: m, [s]: v } } = r.value;
    return { "--n-bezier": u, "--n-text-color": v, "--n-font-weight-strong": c, "--n-font-famliy-mono": d, "--n-code-border-radius": h, "--n-code-text-color": f, "--n-code-color": p, "--n-code-border": m };
  }), i = o ? Et("text", B(() => `${e.type[0]}${e.depth || ""}`), n, e) : void 0;
  return { mergedClsPrefix: t, compitableTag: Hl(e, ["as", "tag"]), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e, t, o;
  const { mergedClsPrefix: r } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const n = [`${r}-text`, this.themeClass, { [`${r}-text--code`]: this.code, [`${r}-text--delete`]: this.delete, [`${r}-text--strong`]: this.strong, [`${r}-text--italic`]: this.italic, [`${r}-text--underline`]: this.underline }], i = (o = (t = this.$slots).default) === null || o === void 0 ? void 0 : o.call(t);
  return this.code ? C("code", { class: n, style: this.cssVars }, this.delete ? C("del", null, i) : i) : this.delete ? C("del", { class: n, style: this.cssVars }, i) : C(this.compitableTag || "span", { class: n, style: this.cssVars }, i);
} }), G0 = () => ({}), K0 = { name: "Equation", common: F, self: G0 }, fC = { name: "light", common: F, Alert: Kg, Anchor: Zg, AutoComplete: rm, Avatar: ws, AvatarGroup: am, BackTop: cm, Badge: um, Breadcrumb: pm, Button: Ve, ButtonGroup: lb, Calendar: Sm, Card: Yn, Carousel: Am, Cascader: km, Checkbox: yo, Code: $s, Collapse: Fm, CollapseTransition: Hm, ColorPicker: _m, DataTable: tv, DatePicker: Sv, Descriptions: Pv, Dialog: Jn, Divider: qv, Drawer: Xv, Dropdown: Er, DynamicInput: Jv, DynamicTags: ob, Element: rb, Empty: Ft, Equation: K0, Ellipsis: Zn, Flex: ab, Form: db, GradientText: fb, Heatmap: R0, Icon: Ms, IconWrapper: I0, Image: z0, Input: Xe, InputNumber: pb, InputOtp: mb, Layout: bb, LegacyTransfer: k0, List: yb, LoadingBar: Nv, Log: wb, Menu: Tb, Mention: Pb, Message: Vv, Modal: Fs, Notification: Kv, PageHeader: zb, Pagination: Rs, Popconfirm: kb, Popover: Dt, Popselect: Ps, Progress: Hs, QrCode: D0, Radio: Ts, Rate: Fb, Row: xb, Result: Nb, Scrollbar: Le, Skeleton: N0, Select: Es, Slider: Vb, Space: Ds, Spin: Gb, Statistic: Ub, Steps: Xb, Switch: Jb, Table: o0, Tabs: i0, Tag: Ss, Thing: l0, TimePicker: Ls, Timeline: d0, Tooltip: qo, Transfer: h0, Tree: Ns, TreeSelect: m0, Typography: _s, Upload: C0, Watermark: y0, Split: W0, FloatButton: P0, FloatButtonGroup: w0, Marquee: L0 }, U0 = "trackmaker_settings", hC = Ga("settings", () => {
  const e = _({ ...Mr });
  async function t() {
    const a = await _e("settings");
    a && (e.value = { ...e.value, ...a }), r();
  }
  async function o() {
    await $e("settings", JSON.parse(JSON.stringify(e.value))), await Je(), r();
  }
  function r() {
    try {
      localStorage.setItem(U0, JSON.stringify(e.value));
    } catch {
    }
  }
  function n() {
    const a = { theme: e.value.theme, interfaceLanguage: e.value.interfaceLanguage, mapLanguage: e.value.mapLanguage, watchCompatibilityMode: e.value.watchCompatibilityMode, geolocationCorrection: e.value.geolocationCorrection, geolocationBackend: e.value.geolocationBackend };
    e.value = { ...Mr, ...a };
  }
  function i(a) {
    const l = Mr, s = e.value;
    s[a] = l[a], e.value = { ...s };
  }
  return Ie(e, () => {
    r(), o();
  }, { deep: true }), { settings: e, init: t, resetAdvancedSettings: n, resetSetting: i };
});
function q0(e) {
  return wc() ? ($c(e), true) : false;
}
const Zr = /* @__PURE__ */ new WeakMap(), Y0 = (...e) => {
  var t;
  const o = e[0], r = (t = bo()) == null ? void 0 : t.proxy;
  if (r == null && !Ka()) throw new Error("injectLocal must be called in setup");
  return r && Zr.has(r) && o in Zr.get(r) ? Zr.get(r)[o] : le(...e);
}, X0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Z0 = Object.prototype.toString, Q0 = (e) => Z0.call(e) === "[object Object]";
function Ma(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Qr(e) {
  return Array.isArray(e) ? e : [e];
}
function J0(e) {
  return bo();
}
function ex(e, t = true, o) {
  J0() ? at(e, o) : t ? e() : Yt(e);
}
function tx(e, t, o) {
  return Ie(e, t, { ...o, immediate: true });
}
const oi = X0 ? window : void 0;
function ox(e) {
  var t;
  const o = fo(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function Pn(...e) {
  const t = [], o = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, s, c, d) => (l.addEventListener(s, c, d), () => l.removeEventListener(s, c, d)), n = B(() => {
    const l = Qr(fo(e[0])).filter((s) => s != null);
    return l.every((s) => typeof s != "string") ? l : void 0;
  }), i = tx(() => {
    var l, s;
    return [(s = (l = n.value) == null ? void 0 : l.map((c) => ox(c))) != null ? s : [oi].filter((c) => c != null), Qr(fo(n.value ? e[1] : e[0])), Qr(uo(n.value ? e[2] : e[1])), fo(n.value ? e[3] : e[2])];
  }, ([l, s, c, d]) => {
    if (o(), !(l == null ? void 0 : l.length) || !(s == null ? void 0 : s.length) || !(c == null ? void 0 : c.length)) return;
    const u = Q0(d) ? { ...d } : d;
    t.push(...l.flatMap((f) => s.flatMap((h) => c.map((p) => r(f, h, p, u)))));
  }, { flush: "post" }), a = () => {
    i(), o();
  };
  return q0(o), a;
}
function rx() {
  const e = yt(false), t = bo();
  return t && at(() => {
    e.value = true;
  }, t), e;
}
function nx(e) {
  const t = rx();
  return B(() => (t.value, !!e()));
}
const ix = /* @__PURE__ */ Symbol("vueuse-ssr-width");
function ax() {
  const e = Ka() ? Y0(ix, null) : null;
  return typeof e == "number" ? e : void 0;
}
function lx(e, t = {}) {
  const { window: o = oi, ssrWidth: r = ax() } = t, n = nx(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), i = yt(typeof r == "number"), a = yt(), l = yt(false), s = (c) => {
    l.value = c.matches;
  };
  return xo(() => {
    if (i.value) {
      i.value = !n.value;
      const c = fo(e).split(",");
      l.value = c.some((d) => {
        const u = d.includes("not all"), f = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || h);
        return f && p && (p = r >= Ma(f[1])), h && p && (p = r <= Ma(h[1])), u ? !p : p;
      });
      return;
    }
    n.value && (a.value = o.matchMedia(fo(e)), l.value = a.value.matches);
  }), Pn(a, "change", s, { passive: true }), B(() => l.value);
}
function pC(e = {}) {
  const { window: t = oi, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: n = true, includeScrollbar: i = true, type: a = "inner" } = e, l = yt(o), s = yt(r), c = () => {
    if (t) if (a === "outer") l.value = t.outerWidth, s.value = t.outerHeight;
    else if (a === "visual" && t.visualViewport) {
      const { width: u, height: f, scale: h } = t.visualViewport;
      l.value = Math.round(u * h), s.value = Math.round(f * h);
    } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  c(), ex(c);
  const d = { passive: true };
  if (Pn("resize", c, d), t && a === "visual" && t.visualViewport && Pn(t.visualViewport, "resize", c, d), n) {
    const u = lx("(orientation: portrait)");
    Ie(u, () => c());
  }
  return { width: l, height: s };
}
class gC {
  constructor() {
    __publicField(this, "parser");
    __publicField(this, "platformContext");
    this.parser = new Pc(navigator.userAgent), this.platformContext = Ec();
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
    return pi() ? "Tauri" : this.platformContext.browser || "";
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
    return pi();
  }
  get isWeb() {
    const t = this.platformContext.environment;
    return t === "web" || t === "mobile_web";
  }
}
class sx {
  constructor(t = [], o = Ua(), r = Mt()) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routesInternal");
    this.id = o, this.meta = r ?? Mt(), this.routesInternal = t;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = Mt()), this.meta.name;
  }
  set name(t) {
    (this.meta === null || this.meta === void 0) && (this.meta = Mt()), this.meta.name = t;
  }
  get routes() {
    return xt(this.routesInternal);
  }
  set routes(t) {
    this.routesInternal = xt(t);
  }
  findRoute(t) {
    return this.routesInternal.find((o) => o.id === t);
  }
  existRoute(t) {
    return this.routesInternal.some((o) => o.id === t);
  }
  addRoute(t) {
    if (this.existRoute(t.id)) throw new Error(`[CartoSketch.Route] Route ${t.id} already exist`);
    this.routesInternal.push(xt(t)), this.updateModificationTime();
  }
  updateRoute(t) {
    const o = this.routesInternal.findIndex((r) => r.id === t.id);
    if (o === -1) throw new Error(`[CartoSketch.Route] Route ${t.id} not found`);
    this.routesInternal[o] = xt(t), this.updateModificationTime();
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
class Oa {
  constructor(t = Ua(), o = [], r = {}, n) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "properties");
    __publicField(this, "points");
    this.id = t, this.meta = { ...Mt(), record_timespan: 0, ...n }, this.properties = r, this.points = o;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = Mt()), this.meta.name;
  }
  set name(t) {
    (this.meta === null || this.meta === void 0) && (this.meta = Mt()), this.meta.name = t;
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
    this.points = xt(t), this.updateModificationTime();
  }
  appendPoint(t) {
    this.points.push(xt(t)), this.updateModificationTime();
  }
  getPoints() {
    return xt(this.points);
  }
  setProperties(t) {
    const o = xt(t);
    Object.assign(this.properties, o), this.updateModificationTime();
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: "Feature", properties: { ...this.properties, ...this.meta, description: JSON.stringify({ name: this.meta.name, id: this.id }) }, geometry: { type: "LineString", coordinates: this.points.map((t) => [t.longitude, t.latitude]) } };
  }
  exportToStorage() {
    return xt({ id: this.id, meta: this.meta, properties: this.properties, points: this.points });
  }
}
var fe = ((e) => (e.MIGRATION_FAILED = "MIGRATION_FAILED", e.INVALID_VERSION = "INVALID_VERSION", e.UNSUPPORTED_VERSION = "UNSUPPORTED_VERSION", e.ROLLBACK_FAILED = "ROLLBACK_FAILED", e.VALIDATION_FAILED = "VALIDATION_FAILED", e.STRATEGY_NOT_FOUND = "STRATEGY_NOT_FOUND", e.DATA_CORRUPTION = "DATA_CORRUPTION", e))(fe || {});
class ge extends Rc {
  constructor(t, o = "MIGRATION_FAILED", r) {
    super(t, r);
    __publicField(this, "code");
    __publicField(this, "domain", Tc.GENERIC);
    this.code = o;
  }
}
class ct extends ge {
  constructor(t, o = "INVALID_VERSION", r, n, i) {
    super(t, o, i), this.currentVersion = r, this.targetVersion = n;
  }
}
class de extends ge {
  constructor(t, o, r, n) {
    super(t, "VALIDATION_FAILED", n), this.field = o, this.value = r;
  }
}
class ka extends ge {
  constructor(t, o, r) {
    super(t, "DATA_CORRUPTION", r), this.corruptedData = o;
  }
}
class cx extends ge {
  constructor(t, o, r, n) {
    super(t, "ROLLBACK_FAILED", n), this.originalError = o, this.rollbackError = r;
  }
}
class Po {
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
        if (typeof o == "number" && o >= 0) return Re(o);
      }
      if (this.isRouteCollectionFormat(t)) return Re(0);
      if (this.isSketchArrayFormat(t)) return Re(1);
      throw new Error("Unable to determine data version");
    } catch (o) {
      const r = o instanceof ct ? o : new ct(`Failed to extract version from data: ${String(o)}`, fe.INVALID_VERSION, void 0, void 0, o instanceof Error ? o : new Error(String(o)));
      return se(r);
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
      if (t < this.MIN_SUPPORTED_VERSION) throw new ct(`Version ${t} is below minimum supported version ${this.MIN_SUPPORTED_VERSION}`, fe.UNSUPPORTED_VERSION, t);
      if (t > this.CURRENT_VERSION) throw new ct(`Version ${t} is above current version ${this.CURRENT_VERSION}`, fe.UNSUPPORTED_VERSION, t, this.CURRENT_VERSION);
      return Re(void 0);
    } catch (o) {
      const r = o instanceof ct ? o : new ct(`Version validation failed: ${String(o)}`, fe.INVALID_VERSION, t, void 0, o instanceof Error ? o : new Error(String(o)));
      return se(r);
    }
  }
  static addVersionMetadata(t, o = this.CURRENT_VERSION) {
    return { ...t, [this.VERSION_KEY]: { version: o, timestamp: Date.now(), description: `Version ${o} data format` } };
  }
  static extractVersionMetadata(t) {
    try {
      if (typeof t == "object" && t !== null && this.VERSION_KEY in t) {
        const o = t[this.VERSION_KEY];
        if (this.isValidVersionInfo(o)) return Re(o);
      }
      return Re(null);
    } catch (o) {
      const r = o instanceof ct ? o : new ct(`Failed to extract version metadata: ${String(o)}`, fe.INVALID_VERSION, void 0, void 0, o instanceof Error ? o : new Error(String(o)));
      return se(r);
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
      if (t === o) return Re([]);
      const i = [], a = t < o ? 1 : -1;
      for (let l = t; l !== o; l += a) i.push(l + a);
      return Re(i);
    } catch (r) {
      const n = r instanceof ct ? r : new ct(`Failed to determine migration path: ${String(r)}`, fe.INVALID_VERSION, t, o, r instanceof Error ? r : new Error(String(r)));
      return se(n);
    }
  }
  static isMigrationNeeded(t) {
    return this.extractVersion(t).map((o) => o !== this.CURRENT_VERSION);
  }
}
__publicField(Po, "CURRENT_VERSION", 1);
__publicField(Po, "VERSION_KEY", "_data_version");
__publicField(Po, "MIN_SUPPORTED_VERSION", 0);
class Ct {
  static validateSketchData(t) {
    try {
      if (!t || typeof t != "object") throw new de("Sketch data must be an object", "data", t);
      const o = t, r = ["id", "meta", "routes", "drafts"];
      for (const i of r) if (!(i in o)) throw new de(`Missing required field: ${i}`, i, o[i]);
      if (typeof o.id != "string" || !o.id) throw new de("Sketch ID must be a non-empty string", "id", o.id);
      if (!o.meta || typeof o.meta != "object") throw new de("Sketch meta must be an object", "meta", o.meta);
      const n = this.validateRouteCollectionData(o.routes);
      if (n.isErr()) throw n.error;
      if (!o.drafts || typeof o.drafts != "object") throw new de("Sketch drafts must be an object", "drafts", o.drafts);
      return Re(o);
    } catch (o) {
      if (o instanceof de) return se(o);
      const r = new de(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return se(r);
    }
  }
  static validateRouteCollectionData(t) {
    try {
      if (!t || typeof t != "object") throw new de("Route collection data must be an object", "data", t);
      const o = t, r = ["id", "meta", "routes"];
      for (const n of r) if (!(n in o)) throw new de(`Missing required field: ${n}`, n, o[n]);
      if (typeof o.id != "string" || !o.id) throw new de("Route collection ID must be a non-empty string", "id", o.id);
      if (!o.meta || typeof o.meta != "object") throw new de("Route collection meta must be an object", "meta", o.meta);
      if (!Array.isArray(o.routes)) throw new de("Routes must be an array", "routes", o.routes);
      for (let n = 0; n < o.routes.length; n++) {
        const i = o.routes[n], a = this.validateRouteItem(i);
        if (a.isErr()) throw new de(`Invalid route at index ${n}: ${a.error.message}`, `routes[${n}]`, i, a.error);
      }
      return Re(o);
    } catch (o) {
      if (o instanceof de) return se(o);
      const r = new de(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return se(r);
    }
  }
  static validateRouteItem(t) {
    try {
      if (!t || typeof t != "object") throw new de("Route item must be an object", "data", t);
      const o = t, r = ["id", "meta", "properties", "points"];
      for (const n of r) if (!(n in o)) throw new de(`Missing required field: ${n}`, n, o[n]);
      if (typeof o.id != "string" || !o.id) throw new de("Route item ID must be a non-empty string", "id", o.id);
      if (!Array.isArray(o.points)) throw new de("Route points must be an array", "points", o.points);
      for (let n = 0; n < o.points.length; n++) {
        const i = o.points[n];
        if (!i || typeof i != "object") throw new de(`Route point at index ${n} must be an object`, `points[${n}]`, i);
        const a = i;
        if (typeof a.latitude != "number" || typeof a.longitude != "number") throw new de(`Route point at index ${n} must have numeric latitude and longitude`, `points[${n}]`, i);
      }
      return Re(o);
    } catch (o) {
      if (o instanceof de) return se(o);
      const r = new de(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return se(r);
    }
  }
  static validateSketchArray(t) {
    try {
      if (!Array.isArray(t)) throw new de("Sketch array must be an array", "data", t);
      if (t.length === 0) throw new de("Sketch array cannot be empty", "data.length", t.length);
      for (let o = 0; o < t.length; o++) {
        const r = t[o], n = this.validateSketchData(r);
        if (n.isErr()) throw new de(`Invalid sketch at index ${o}: ${n.error.message}`, `[${o}]`, r, n.error);
      }
      return Re(t);
    } catch (o) {
      if (o instanceof de) return se(o);
      const r = new de(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return se(r);
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
        return se(new de(`Unknown expected format: ${String(o)}`, "expectedFormat", o));
    }
  }
  static checkDataIntegrity(t, o) {
    try {
      const r = this.validateData(t, o);
      return r.isErr() ? se(new ka(`Data validation failed: ${r.error.message}`, t, r.error)) : Re({ isValid: true, errors: [], warnings: [] });
    } catch (r) {
      return se(new ka(`Data integrity check failed: ${String(r)}`, t, r instanceof Error ? r : new Error(String(r))));
    }
  }
}
class dx {
  constructor() {
    __publicField(this, "fromVersion", 0);
    __publicField(this, "toVersion", 1);
    __publicField(this, "name", "route-collection-to-sketch");
  }
  migrate(t) {
    try {
      const o = Ct.validateRouteCollectionData(t);
      if (o.isErr()) return se(new ge(`Invalid route collection data: ${o.error.message}`, fe.VALIDATION_FAILED, o.error));
      const r = o.value, n = new Wt();
      n.meta.name = r.meta.name || "Migrated Routes", n.meta.description = r.meta.description || "Migrated from route collection", n.meta.creation_timestamp = r.meta.creation_timestamp, n.meta.modification_timestamp = Date.now(), n.routes = r;
      const i = [n.toStorage()];
      return Re(i);
    } catch (o) {
      return se(new ge(`Route collection to sketch migration failed: ${String(o)}`, fe.MIGRATION_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  rollback(t) {
    try {
      const o = Ct.validateSketchArray(t);
      if (o.isErr()) return se(new ge(`Invalid sketch array data for rollback: ${o.error.message}`, fe.VALIDATION_FAILED, o.error));
      const r = o.value;
      if (r.length === 0) return se(new ge("Cannot rollback: empty sketch array", fe.MIGRATION_FAILED));
      const n = r[0];
      return Re(n.routes);
    } catch (o) {
      return se(new ge(`Route collection to sketch rollback failed: ${String(o)}`, fe.ROLLBACK_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  validateBefore(t) {
    return Ct.validateRouteCollectionData(t).map(() => {
    }).mapErr((o) => new de(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return Ct.validateSketchArray(t).map(() => {
    }).mapErr((o) => new de(`Post-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
}
class ux {
  constructor() {
    __publicField(this, "fromVersion", 1);
    __publicField(this, "toVersion", 2);
    __publicField(this, "name", "sketch-v1-to-v2");
  }
  migrate() {
    return se(new ge("Sketch V1 to V2 migration not yet implemented", fe.STRATEGY_NOT_FOUND));
  }
  validateBefore(t) {
    return Ct.validateSketchArray(t).map(() => {
    }).mapErr((o) => new de(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return se(new de("Sketch V2 validation not yet implemented", void 0, t));
  }
}
const _fx = class _fx {
  static register(t) {
    const o = this.getStrategyKey(t.fromVersion, t.toVersion);
    this.strategies.set(o, t);
  }
  static getStrategy(t, o) {
    const r = this.getStrategyKey(t, o), n = this.strategies.get(r);
    return n ? Re(n) : se(new ge(`No migration strategy found for version ${t} to ${o}`, fe.STRATEGY_NOT_FOUND));
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
__publicField(_fx, "strategies", /* @__PURE__ */ new Map());
_fx.register(new dx()), _fx.register(new ux());
let fx = _fx;
class hx {
  static createStrategy(t, o) {
    return fx.getStrategy(t, o);
  }
  static createStrategiesForPath(t) {
    try {
      const o = [];
      for (let r = 0; r < t.length; r++) {
        const n = r === 0 ? t[0] - 1 : t[r - 1], i = t[r], a = this.createStrategy(n, i);
        if (a.isErr()) return se(a.error);
        o.push(a.value);
      }
      return Re(o);
    } catch (o) {
      return se(new ge(`Failed to create strategies for migration path: ${String(o)}`, fe.MIGRATION_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
}
class px {
  static isMigrationNeeded(t) {
    return Po.isMigrationNeeded(t);
  }
  static getDataVersion(t) {
    return Po.extractVersion(t);
  }
  static migrateToCurrent(t, o = {}) {
    return this.migrateToVersion(t, Po.getCurrentVersion(), o);
  }
  static migrateToVersion(t, o, r = {}) {
    try {
      const n = { ...this.DEFAULT_OPTIONS, ...r }, i = Po.extractVersion(t);
      if (i.isErr()) return se(new ge(`Failed to extract current version: ${i.error.message}`, fe.INVALID_VERSION, i.error));
      const a = i.value;
      if (a === o) return Re({ data: t, fromVersion: a, toVersion: o, migratedVersions: [] });
      const l = Po.determineMigrationPath(a, o);
      if (l.isErr()) return se(new ge(`Failed to determine migration path: ${l.error.message}`, fe.INVALID_VERSION, l.error));
      const s = l.value, c = hx.createStrategiesForPath(s);
      if (c.isErr()) return se(c.error);
      const d = c.value;
      if (n.validateBefore) {
        const p = this.validateDataBeforeMigration(t, a);
        if (p.isErr()) return se(new ge(`Pre-migration validation failed: ${p.error.message}`, fe.VALIDATION_FAILED, p.error));
      }
      const u = n.enableRollback ? t : void 0;
      let f = t;
      const h = [];
      for (const p of d) {
        const m = this.executeMigrationWithRetry(p, f, n);
        if (m.isErr()) {
          if (n.enableRollback && u) {
            const v = this.rollbackToVersion(u);
            if (v.isErr()) return se(new cx(`Migration failed and rollback also failed: ${v.error.message}`, m.error, v.error));
          }
          return se(m.error);
        }
        f = m.value, h.push(p.toVersion);
      }
      if (n.validateAfter) {
        const p = this.validateDataAfterMigration(f, o);
        if (p.isErr()) return se(new ge(`Post-migration validation failed: ${p.error.message}`, fe.VALIDATION_FAILED, p.error));
      }
      return Re({ data: f, fromVersion: a, toVersion: o, migratedVersions: h, rollbackData: n.enableRollback ? u : void 0 });
    } catch (n) {
      return se(new ge(`Migration service error: ${String(n)}`, fe.MIGRATION_FAILED, n instanceof Error ? n : new Error(String(n))));
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
            n = new ge(`Post-migration validation failed: ${l.error.message}`, fe.VALIDATION_FAILED, l.error);
            continue;
          }
        }
        return Re(a.value);
      } catch (a) {
        n = new ge(`Migration attempt ${i + 1} failed: ${String(a)}`, fe.MIGRATION_FAILED, a instanceof Error ? a : new Error(String(a)));
      }
      i < (r.maxRetries || 0) && r.retryDelay && console.warn(`Migration failed, retrying in ${r.retryDelay}ms...`);
    }
    return se(n || new ge("Migration failed after all retry attempts", fe.MIGRATION_FAILED));
  }
  static rollbackToVersion(t) {
    try {
      return Re(t);
    } catch (o) {
      return se(new ge(`Rollback failed: ${String(o)}`, fe.ROLLBACK_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  static validateDataBeforeMigration(t, o) {
    switch (o) {
      case 0:
        return Ct.validateRouteCollectionData(t).map(() => {
        }).mapErr((r) => new ge(`Route collection validation failed: ${r.message}`, fe.VALIDATION_FAILED, r));
      case 1:
        return Ct.validateSketchArray(t).map(() => {
        }).mapErr((r) => new ge(`Sketch array validation failed: ${r.message}`, fe.VALIDATION_FAILED, r));
      default:
        return se(new ge(`Unknown version for pre-migration validation: ${o}`, fe.VALIDATION_FAILED));
    }
  }
  static validateDataAfterMigration(t, o) {
    return o === 1 ? Ct.validateSketchArray(t).map(() => {
    }).mapErr((r) => new ge(`Sketch array validation failed: ${r.message}`, fe.VALIDATION_FAILED, r)) : se(new ge(`Unknown version for post-migration validation: ${o}`, fe.VALIDATION_FAILED));
  }
  static checkDataIntegrity(t, o) {
    return Ct.checkDataIntegrity(t, o);
  }
}
__publicField(px, "DEFAULT_OPTIONS", { validateBefore: true, validateAfter: true, enableRollback: true, maxRetries: 3, retryDelay: 1e3 });
const _so = class _so {
  constructor() {
    __publicField(this, "routeCache", /* @__PURE__ */ new Map());
    __publicField(this, "cacheTimeout", 5e3);
    __publicField(this, "maxCacheSize", Ic.MAX_CACHE_SIZE);
  }
  static getInstance() {
    return _so.instance || (_so.instance = new _so()), _so.instance;
  }
  async getRoute(t) {
    const o = this.routeCache.get(t);
    if (o && Date.now() - o.timestamp < this.cacheTimeout) return o.accessCount++, o.route;
    const r = await this.getMainRoute(t);
    if (!r) return null;
    const i = await lo.getUnmergedEntries(t) ?? [];
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
    const o = await _e("sketches");
    if (!o) return null;
    const r = o.map((n) => Wt.fromStorage(n));
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
      const c = o[s - 1].point, d = o[s].point;
      i += gi({ longitude: c.longitude, latitude: c.latitude }, { longitude: d.longitude, latitude: d.latitude });
    }
    o.length > 0 && t.points.length > 0 && (i += gi({ longitude: t.points[t.points.length - 1].longitude, latitude: t.points[t.points.length - 1].latitude }, { longitude: o[0].point.longitude, latitude: o[0].point.latitude }));
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
__publicField(_so, "instance");
let so = _so;
const Ba = so.getInstance();
const _co = class _co {
  constructor() {
  }
  static getInstance() {
    return _co.instance || (_co.instance = new _co()), _co.instance;
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
      const i = await _e("wal:activeRoutes") || [];
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
    const t = await _e("wal:activeRoutes") || [], o = [];
    for (const r of t) {
      const n = await lo.getMetadata(r);
      if (n && n.unmergedCount > 0) {
        const i = await this.findBatchesForRoute(r);
        for (const a of i) {
          const l = await _e(`route:${r}:batches:${a}`);
          l && l.status === "pending" && o.push(l);
        }
      }
    }
    return o;
  }
  async findBatchesForRoute(t) {
    const o = [], r = `route:${t}:batches:`;
    for (let n = 0; n < 100 && await _e(`${r}${n}`); n++) o.push(`${n}`);
    return o;
  }
  async recoverMerge(t, o) {
    console.info(`[CrashRecovery] Recovering merge for route ${t}, batch ${o}`);
    const r = await _e(`route:${t}:batches:${o}`);
    if (!r || r.status !== "pending") return;
    if (!await lo.getMetadata(t)) throw new Error(`No metadata found for route ${t}`);
    const a = (await _e(`route:${t}:log`) || []).filter((l) => !l.merged);
    if (a.length === 0) {
      r.status = "completed", await $e(`route:${t}:batches:${r.id}`, r);
      return;
    }
    console.info(`[CrashRecovery] Re-executing merge for ${a.length} entries`), await Ac.mergeRoute(t);
  }
  async validateRouteLog(t) {
    const [o, r] = await Promise.all([_e(`route:${t}:log`), lo.getMetadata(t)]);
    if (!o || !r) {
      console.warn(`[CrashRecovery] Corrupted or missing data for route ${t}, attempting rebuild`), await this.rebuildRouteLog(t);
      return;
    }
    const n = o.filter((a) => !a.merged).length;
    n !== r.unmergedCount && (console.warn(`[CrashRecovery] Count mismatch for route ${t}: expected ${r.unmergedCount}, found ${n}`), r.unmergedCount = n, await $e(`route:${t}:metadata`, r));
    const i = [...o].sort((a, l) => a.sequence - l.sequence);
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
      for (let l = o; l < t.length; l++) t[l].sequence === r && (a ? i.push(t[l]) : a = true);
      for (const l of i) {
        const s = t.indexOf(l);
        s !== -1 && t.splice(s, 1);
      }
    } else {
      console.info(`[CrashRecovery] Inserting placeholder entry for missing sequence ${r}`);
      const i = { id: crypto.randomUUID(), routeId: t[0].routeId, point: t[o - 1].point, timestamp: Date.now(), sequence: r, merged: false };
      t.splice(o, 0, i);
    }
  }
  async rebuildRouteLog(t) {
    console.info(`[CrashRecovery] Rebuilding route log for ${t}`);
    const o = await lo.getMetadata(t);
    o && (o.unmergedCount = 0, o.lastSequence = 0, await $e(`route:${t}:metadata`, o)), await $e(`route:${t}:log`, []);
  }
  async rebuildStatistics() {
    const t = await _e("wal:activeRoutes") || [];
    let o = 0;
    for (const r of t) {
      const n = await _e(`route:${r}:log`) || [];
      o += n.length;
    }
    await $e("wal:lastMergeTime", Date.now()), await $e("wal:statistics", { writesPerSecond: 0, averageLogSize: t.length > 0 ? o / t.length : 0, mergeDuration: 0 });
  }
};
__publicField(_co, "instance");
let co = _co;
const gx = co.getInstance(), mC = Ga("sketches", () => {
  const e = _([]), t = _(null), o = _(null), r = _(false), n = _(false), i = B(() => {
    if (!t.value) return null;
    const T = e.value.find((y) => y.id === t.value);
    return T ? new sx(T.routes.routes.map((y) => new Oa(y.id, y.points, y.properties, y.meta)), T.routes.id, T.routes.meta) : null;
  }), a = B(() => i.value ? i.value.routes.map((T) => ({ id: T.id, name: T.name, points: T.getPoints(), meta: T.meta })) : []), l = B(() => t.value && e.value.find((T) => T.id === t.value) || null), s = B(() => l.value ? l.value.drafts.drafts : []);
  async function c() {
    if (r.value || n.value) return;
    n.value = true;
    const T = await _e("sketches");
    if (T) {
      const y = px.migrateToCurrent(T, { validateBefore: true, validateAfter: true, enableRollback: true });
      if (y.isErr()) {
        console.error("[SketchStore] Data migration failed:", y.error), await f();
        return;
      }
      const I = y.value;
      if (I.migratedVersions.length > 0 && console.info(`[SketchStore] Successfully migrated data from version ${I.fromVersion} to ${I.toVersion}`), Array.isArray(I.data)) {
        e.value = I.data.map((N) => Wt.fromStorage(N));
        const z = [];
        e.value.forEach((N) => {
          N.routes.routes.forEach((Z) => {
            Z.points.length > 1 && !Z.meta.distance && z.push((async () => {
              try {
                Z.meta.distance = await Or(Z.points);
              } catch (ne) {
                console.warn("Failed to calculate route distance:", ne), Z.meta.distance = 0;
              }
            })());
          });
        }), await Promise.all(z), !t.value && e.value.length > 0 && (t.value = e.value[0].id);
      } else await f();
    } else await f();
    await d(), r.value = true, n.value = false;
  }
  async function d() {
    try {
      await _e("wal:initialized") || (console.info("[SketchStore] Initializing WAL system..."), await u(), await $e("wal:initialized", true), await $e("wal:version", 1), console.info("[SketchStore] WAL system initialized")), console.info("[SketchStore] Running crash recovery...");
      const y = await gx.recover();
      y.failedRoutes > 0 ? console.warn("[SketchStore] Crash recovery completed with failures:", y.details) : console.info("[SketchStore] Crash recovery completed successfully");
    } catch (T) {
      console.error("[SketchStore] Failed to initialize WAL:", T);
    }
  }
  async function u() {
    const T = await _e("sketches");
    T && await $e("sketches:backup:pre-wal", T);
    const y = await _e("sketches");
    if (!y) return;
    const I = y.map((N) => Wt.fromStorage(N)), z = [];
    for (const N of I) for (const Z of N.routes.routes) await $e(`route:${Z.id}:metadata`, Z.meta), z.push(Z.id);
    await $e("wal:activeRoutes", z);
  }
  async function f() {
    const T = new Wt();
    T.meta.name = "Default Sketch", e.value = [T], t.value = T.id, await $e("sketches", e.value.map((y) => y.toStorage())), await Je();
  }
  async function h(T = "New Sketch") {
    const y = new Wt();
    return y.meta.name = T, e.value.push(y), await $e("sketches", e.value.map((I) => I.toStorage())), await Je(), y;
  }
  async function p(T, y) {
    const I = e.value.find((z) => z.id === T);
    I && (y.name !== void 0 && I.updateName(y.name), y.description !== void 0 && I.updateDescription(y.description), y.tags !== void 0 && (I.meta.tags.forEach((z) => {
      I.removeTag(z);
    }), y.tags.forEach((z) => {
      I.addTag(z);
    })), await $e("sketches", e.value.map((z) => z.toStorage())), await Je());
  }
  async function m(T) {
    const y = e.value.findIndex((I) => I.id === T);
    y !== -1 && (e.value.splice(y, 1), t.value === T && (t.value = e.value.length > 0 ? e.value[0].id : null), await $e("sketches", e.value.map((I) => I.toStorage())), await Je());
  }
  function v(T) {
    t.value = T, o.value = null;
  }
  async function g(T, y = {}, I = {}) {
    l.value || await f();
    const z = new Oa(void 0, [], y, I);
    return z.meta.name = T, l.value && l.value.routes.routes.push(z.exportToStorage()), await $e("sketches", e.value.map((N) => N.toStorage())), await Je(), z;
  }
  async function x(T) {
    if (!l.value) return;
    const y = l.value.routes.routes.findIndex((I) => I.id === T);
    y !== -1 && (l.value.routes.routes.splice(y, 1), o.value === T && (o.value = null), await $e("sketches", e.value.map((I) => I.toStorage())), await Je());
  }
  async function $(T, y) {
    if (!l.value) return;
    const I = l.value.routes.routes.find((N) => N.id === T);
    if (!I) return;
    if (I.points.push(y), I.meta.modification_timestamp = Date.now(), I.points.length > 1) try {
      if (I.meta.distance === void 0) {
        const N = await Or(I.points);
        I.meta.distance = N;
      } else {
        const N = await Or([I.points[I.points.length - 2], y]);
        I.meta.distance += N;
      }
    } catch (N) {
      console.warn("Failed to calculate route distance:", N), I.meta.distance === void 0 && (I.meta.distance = 0);
    }
    const z = e.value.map((N) => N.toStorage());
    try {
      await lo.appendPoint(T, y), Ba.invalidateCache(T);
    } catch (N) {
      console.error("[SketchStore] WAL append failed, rolling back in-memory state:", N);
      const Z = z.map((ue) => Wt.fromStorage(ue)), ne = Z.find((ue) => {
        var _a2;
        return ue.id === ((_a2 = l.value) == null ? void 0 : _a2.id);
      });
      throw ne && ne.routes.routes.findIndex((ce) => ce.id === T) !== -1 && (e.value = Z, t.value = ne.id), N;
    }
  }
  async function S(T, y) {
    if (!l.value) return;
    const I = l.value.routes.routes.find((z) => z.id === T);
    I && (y.meta !== void 0 && (I.meta = { ...I.meta, ...y.meta }), y.properties !== void 0 && (I.properties = { ...I.properties, ...y.properties }), I.meta.modification_timestamp = Date.now(), await $e("sketches", e.value.map((z) => z.toStorage())), await Je());
  }
  async function E(T) {
    if (!l.value) return;
    const y = l.value.routes.routes.find((I) => I.id === T);
    y && (y.points = [], y.meta.modification_timestamp = Date.now(), await $e("sketches", e.value.map((I) => I.toStorage())), await Je());
  }
  async function A(T) {
    return Ba.getRoute(T);
  }
  function b(T) {
    o.value = T;
  }
  async function w(T, y = {}, I = {}) {
    l.value || await f();
    const z = { id: crypto.randomUUID(), meta: { ...Mt(), ...I }, shape: T, properties: y };
    return l.value && l.value.drafts.drafts.push(z), await $e("sketches", e.value.map((N) => N.toStorage())), await Je(), z;
  }
  async function P(T, y) {
    if (!l.value) return;
    const I = l.value.drafts.drafts.find((z) => z.id === T);
    I && (y.shape !== void 0 && (I.shape = y.shape), y.properties !== void 0 && (I.properties = { ...I.properties, ...y.properties }), y.meta !== void 0 && (I.meta = { ...I.meta, ...y.meta }, I.meta.modification_timestamp = Date.now()), await $e("sketches", e.value.map((z) => z.toStorage())), await Je());
  }
  async function O(T) {
    if (!l.value) return;
    const y = l.value.drafts.drafts.findIndex((I) => I.id === T);
    y !== -1 && (l.value.drafts.drafts.splice(y, 1), await $e("sketches", e.value.map((I) => I.toStorage())), await Je());
  }
  function H(T) {
    return l.value && l.value.drafts.drafts.find((y) => y.id === T) || null;
  }
  function M() {
    return l.value ? l.value.routes.routes.map((T) => T.id) : [];
  }
  function V() {
    return l.value ? l.value.drafts.drafts.map((T) => T.id) : [];
  }
  return { sketches: e, currentSketchId: t, currentRouteId: o, routeCollection: i, routes: a, currentSketch: l, currentDrafts: s, init: c, createSketch: h, updateSketch: p, deleteSketch: m, setCurrentSketchId: v, addRoute: g, deleteRoute: x, addPointToRoute: $, updateRoute: S, clearRoutePoints: E, getRouteById: A, setCurrentRouteId: b, listRouteIDs: M, addDraft: w, updateDraft: P, deleteDraft: O, getDraftById: H, listDraftIDs: V };
});
export {
  xh as $,
  Om as A,
  Ft as B,
  Lm as C,
  Dm as D,
  Nm as E,
  jm as F,
  Km as G,
  qm as H,
  Ym as I,
  Zm as J,
  ev as K,
  av as L,
  xv as M,
  yv as N,
  $v as O,
  Tv as P,
  Ov as Q,
  Wx as R,
  Mv as S,
  Do as T,
  aC as U,
  ei as V,
  Iv as W,
  qx as X,
  Th as Y,
  Ah as Z,
  Ev as _,
  W as a,
  rv as a$,
  nC as a0,
  iC as a1,
  Wv as a2,
  L as a3,
  Q as a4,
  Jx as a5,
  G as a6,
  U as a7,
  bn as a8,
  ds as a9,
  Cb as aA,
  Rb as aB,
  Ab as aC,
  Ob as aD,
  Bb as aE,
  Hb as aF,
  _b as aG,
  jb as aH,
  Kb as aI,
  Yb as aJ,
  Zb as aK,
  t0 as aL,
  n0 as aM,
  a0 as aN,
  s0 as aO,
  u0 as aP,
  p0 as aQ,
  b0 as aR,
  x0 as aS,
  Pt as aT,
  Eo as aU,
  F as aV,
  E0 as aW,
  T0 as aX,
  M0 as aY,
  B0 as aZ,
  St as a_,
  dt as aa,
  us as ab,
  gt as ac,
  sC as ad,
  jo as ae,
  Ce as af,
  J as ag,
  Et as ah,
  qp as ai,
  cs as aj,
  Vv as ak,
  Np as al,
  Wp as am,
  _p as an,
  $a as ao,
  Gp as ap,
  lC as aq,
  Dv as ar,
  Gv as as,
  Uv as at,
  Yv as au,
  Zv as av,
  eb as aw,
  nb as ax,
  cb as ay,
  gb as az,
  Qp as b,
  pe as b$,
  tt as b0,
  Kn as b1,
  rC as b2,
  va as b3,
  cC as b4,
  $g as b5,
  Dl as b6,
  Hl as b7,
  Gx as b8,
  Tb as b9,
  Wi as bA,
  Tx as bB,
  ch as bC,
  ma as bD,
  Go as bE,
  Ko as bF,
  ya as bG,
  Vx as bH,
  bs as bI,
  Ke as bJ,
  ps as bK,
  Uo as bL,
  Qx as bM,
  jt as bN,
  _i as bO,
  kh as bP,
  Ss as bQ,
  ba as bR,
  Sa as bS,
  qn as bT,
  Kg as bU,
  Rh as bV,
  Zg as bW,
  Yx as bX,
  Xe as bY,
  Jg as bZ,
  Op as b_,
  qe as ba,
  G0 as bb,
  mC as bc,
  oC as bd,
  uC as be,
  Sx as bf,
  hC as bg,
  gC as bh,
  pC as bi,
  Cn as bj,
  cv as bk,
  ys as bl,
  kf as bm,
  $x as bn,
  Af as bo,
  Px as bp,
  Ex as bq,
  wx as br,
  fC as bs,
  tC as bt,
  An as bu,
  Za as bv,
  Wn as bw,
  Co as bx,
  To as by,
  Kl as bz,
  eo as c,
  Tp as c$,
  he as c0,
  Vo as c1,
  gm as c2,
  Al as c3,
  ah as c4,
  yo as c5,
  $s as c6,
  Fm as c7,
  Ph as c8,
  Dp as c9,
  Lo as cA,
  Ps as cB,
  Ap as cC,
  Pr as cD,
  Es as cE,
  Kx as cF,
  Rs as cG,
  sr as cH,
  Ts as cI,
  pr as cJ,
  nd as cK,
  nv as cL,
  Ho as cM,
  _x as cN,
  tv as cO,
  qv as cP,
  is as cQ,
  jx as cR,
  Dh as cS,
  wr as cT,
  Wo as cU,
  $r as cV,
  fs as cW,
  jn as cX,
  Ul as cY,
  Xv as cZ,
  Fh as c_,
  Xx as ca,
  Ip as cb,
  Dx as cc,
  gh as cd,
  zx as ce,
  bh as cf,
  dh as cg,
  Hx as ch,
  ph as ci,
  Lx as cj,
  Ax as ck,
  uh as cl,
  Mx as cm,
  Ox as cn,
  Nx as co,
  Fx as cp,
  kx as cq,
  Bx as cr,
  Zt as cs,
  jl as ct,
  Gl as cu,
  ql as cv,
  vo as cw,
  gn as cx,
  _m as cy,
  Sr as cz,
  Eg as d,
  Ds as d0,
  Ix as d1,
  ob as d2,
  ab as d3,
  db as d4,
  wa as d5,
  z0 as d6,
  pb as d7,
  eC as d8,
  bb as d9,
  Hh as da,
  dC as db,
  yb as dc,
  kb as dd,
  ko as de,
  Hs as df,
  Gb as dg,
  W0 as dh,
  Ub as di,
  vn as dj,
  Jb as dk,
  i0 as dl,
  _s as dm,
  Ux as dn,
  C0 as dp,
  Tm as dq,
  bx as dr,
  yx as ds,
  Cx as dt,
  xx as du,
  Tg as e,
  Ag as f,
  Fg as g,
  _n as h,
  K as i,
  Hg as j,
  jg as k,
  Xg as l,
  Zx as m,
  em as n,
  om as o,
  nm as p,
  im as q,
  Lt as r,
  Qo as s,
  lm as t,
  hm as u,
  vm as v,
  ym as w,
  $m as x,
  Im as y,
  Mm as z
};
