var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { as as sr, at as lc, ac as ht, au as cr, av as si, aw as ka, ax as sc, H as Ho, ay as _o, az as Fa, aA as En, aB as cc, aC as dc, aD as Tn, aE as ci, aF as di, aG as ui, aH as Jr, aI as To, aJ as La, aK as Da, aL as uc, aM as en, aN as fc, aO as hc, aP as pc, aQ as gc, aR as mc, i as ie, l as Ha, N as Rn, M as _a, d as ee, j as B, v as so, p as Te, b as _, B as Re, h as y, Z as wt, g as Na, aS as vc, P as Xt, c as mr, o as vr, a as Ue, r as Bt, L as mo, k as st, f as Ne, e as Jt, y as dr, F as eo, R as In, Q as Zt, T as bc, t as ge, a5 as Wa, aT as xc, w as vo, C as kt, W as Cc, m as Et, O as tn, S as Va, aU as yc, Y as fi, n as hi, $ as Sc, q as ja, aa as Ar, aV as wc, aW as $c, aX as Ga, aY as co, aZ as Pc, a_ as Ec, ar as pi, ab as yt, a$ as Tc, b0 as Rc, b1 as Ee, b2 as ae, b3 as Or } from "./index-BFKcpPr2.js";
var Ic = "[object Symbol]";
function zn(e) {
  return typeof e == "symbol" || sr(e) && lc(e) == Ic;
}
function Ua(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length, n = Array(r); ++o < r; ) n[o] = t(e[o], o, e);
  return n;
}
var gi = cr ? cr.prototype : void 0, mi = gi ? gi.toString : void 0;
function Ka(e) {
  if (typeof e == "string") return e;
  if (ht(e)) return Ua(e, Ka) + "";
  if (zn(e)) return mi ? mi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function An(e) {
  return e;
}
function zc(e, t, o) {
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
function Ac(e, t) {
  var o = -1, r = e.length;
  for (t || (t = Array(r)); ++o < r; ) t[o] = e[o];
  return t;
}
var Oc = 800, Mc = 16, Bc = Date.now;
function kc(e) {
  var t = 0, o = 0;
  return function() {
    var r = Bc(), n = Mc - (r - o);
    if (o = r, n > 0) {
      if (++t >= Oc) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function Fc(e) {
  return function() {
    return e;
  };
}
var Lc = si ? function(e, t) {
  return si(e, "toString", { configurable: true, enumerable: false, value: Fc(t), writable: true });
} : An, Dc = kc(Lc);
function Hc(e, t, o, r) {
  var n = !o;
  o || (o = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var l = t[i], s = void 0;
    s === void 0 && (s = e[l]), n ? ka(o, l, s) : sc(o, l, s);
  }
  return o;
}
var vi = Math.max;
function _c(e, t, o) {
  return t = vi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, n = -1, i = vi(r.length - t, 0), a = Array(i); ++n < i; ) a[n] = r[t + n];
    n = -1;
    for (var l = Array(t + 1); ++n < t; ) l[n] = r[n];
    return l[t] = o(a), zc(e, this, l);
  };
}
function Nc(e, t) {
  return Dc(_c(e, t, An), e + "");
}
function Wc(e, t, o) {
  if (!Ho(o)) return false;
  var r = typeof t;
  return (r == "number" ? _o(o) && Fa(t, o.length) : r == "string" && t in o) ? En(o[t], e) : false;
}
function Vc(e) {
  return Nc(function(t, o) {
    var r = -1, n = o.length, i = n > 1 ? o[n - 1] : void 0, a = n > 2 ? o[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (n--, i) : void 0, a && Wc(o[0], o[1], a) && (i = n < 3 ? void 0 : i, n = 1), t = Object(t); ++r < n; ) {
      var l = o[r];
      l && e(t, l, r, i);
    }
    return t;
  });
}
function jc(e) {
  var t = [];
  if (e != null) for (var o in Object(e)) t.push(o);
  return t;
}
var Gc = Object.prototype, Uc = Gc.hasOwnProperty;
function Kc(e) {
  if (!Ho(e)) return jc(e);
  var t = cc(e), o = [];
  for (var r in e) r == "constructor" && (t || !Uc.call(e, r)) || o.push(r);
  return o;
}
function qa(e) {
  return _o(e) ? dc(e, true) : Kc(e);
}
var qc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Yc = /^\w*$/;
function On(e, t) {
  if (ht(e)) return false;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || zn(e) ? true : Yc.test(e) || !qc.test(e) || t != null && e in Object(t);
}
var Xc = "Expected a function";
function Mn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Xc);
  var o = function() {
    var r = arguments, n = t ? t.apply(this, r) : r[0], i = o.cache;
    if (i.has(n)) return i.get(n);
    var a = e.apply(this, r);
    return o.cache = i.set(n, a) || i, a;
  };
  return o.cache = new (Mn.Cache || Tn)(), o;
}
Mn.Cache = Tn;
var Zc = 500;
function Qc(e) {
  var t = Mn(e, function(r) {
    return o.size === Zc && o.clear(), r;
  }), o = t.cache;
  return t;
}
var Jc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ed = /\\(\\)?/g, td = Qc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Jc, function(o, r, n, i) {
    t.push(n ? i.replace(ed, "$1") : r || o);
  }), t;
});
function Ya(e) {
  return e == null ? "" : Ka(e);
}
function Xa(e, t) {
  return ht(e) ? e : On(e, t) ? [e] : td(Ya(e));
}
function br(e) {
  if (typeof e == "string" || zn(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Za(e, t) {
  t = Xa(t, e);
  for (var o = 0, r = t.length; e != null && o < r; ) e = e[br(t[o++])];
  return o && o == r ? e : void 0;
}
function od(e, t, o) {
  var r = e == null ? void 0 : Za(e, t);
  return r === void 0 ? o : r;
}
function rd(e, t, o) {
  var r = -1, n = e.length;
  t < 0 && (t = -t > n ? 0 : n + t), o = o > n ? n : o, o < 0 && (o += n), n = t > o ? 0 : o - t >>> 0, t >>>= 0;
  for (var i = Array(n); ++r < n; ) i[r] = e[r + t];
  return i;
}
function nd(e, t, o) {
  var r = e.length;
  return o = o === void 0 ? r : o, !t && o >= r ? e : rd(e, t, o);
}
var id = "\\ud800-\\udfff", ad = "\\u0300-\\u036f", ld = "\\ufe20-\\ufe2f", sd = "\\u20d0-\\u20ff", cd = ad + ld + sd, dd = "\\ufe0e\\ufe0f", ud = "\\u200d", fd = RegExp("[" + ud + id + cd + dd + "]");
function Qa(e) {
  return fd.test(e);
}
function hd(e) {
  return e.split("");
}
var Ja = "\\ud800-\\udfff", pd = "\\u0300-\\u036f", gd = "\\ufe20-\\ufe2f", md = "\\u20d0-\\u20ff", vd = pd + gd + md, bd = "\\ufe0e\\ufe0f", xd = "[" + Ja + "]", on = "[" + vd + "]", rn = "\\ud83c[\\udffb-\\udfff]", Cd = "(?:" + on + "|" + rn + ")", el = "[^" + Ja + "]", tl = "(?:\\ud83c[\\udde6-\\uddff]){2}", ol = "[\\ud800-\\udbff][\\udc00-\\udfff]", yd = "\\u200d", rl = Cd + "?", nl = "[" + bd + "]?", Sd = "(?:" + yd + "(?:" + [el, tl, ol].join("|") + ")" + nl + rl + ")*", wd = nl + rl + Sd, $d = "(?:" + [el + on + "?", on, tl, ol, xd].join("|") + ")", Pd = RegExp(rn + "(?=" + rn + ")|" + $d + wd, "g");
function Ed(e) {
  return e.match(Pd) || [];
}
function Td(e) {
  return Qa(e) ? Ed(e) : hd(e);
}
function Rd(e) {
  return function(t) {
    t = Ya(t);
    var o = Qa(t) ? Td(t) : void 0, r = o ? o[0] : t.charAt(0), n = o ? nd(o, 1).join("") : t.slice(1);
    return r[e]() + n;
  };
}
var Id = Rd("toUpperCase"), zd = "__lodash_hash_undefined__";
function Ad(e) {
  return this.__data__.set(e, zd), this;
}
function Od(e) {
  return this.__data__.has(e);
}
function ur(e) {
  var t = -1, o = e == null ? 0 : e.length;
  for (this.__data__ = new Tn(); ++t < o; ) this.add(e[t]);
}
ur.prototype.add = ur.prototype.push = Ad;
ur.prototype.has = Od;
function Md(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length; ++o < r; ) if (t(e[o], o, e)) return true;
  return false;
}
function Bd(e, t) {
  return e.has(t);
}
var kd = 1, Fd = 2;
function il(e, t, o, r, n, i) {
  var a = o & kd, l = e.length, s = t.length;
  if (l != s && !(a && s > l)) return false;
  var c = i.get(e), d = i.get(t);
  if (c && d) return c == t && d == e;
  var u = -1, f = true, h = o & Fd ? new ur() : void 0;
  for (i.set(e, t), i.set(t, e); ++u < l; ) {
    var p = e[u], m = t[u];
    if (r) var v = a ? r(m, p, u, t, e, i) : r(p, m, u, e, t, i);
    if (v !== void 0) {
      if (v) continue;
      f = false;
      break;
    }
    if (h) {
      if (!Md(t, function(g, x) {
        if (!Bd(h, x) && (p === g || n(p, g, o, r, i))) return h.push(x);
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
function Ld(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r, n) {
    o[++t] = [n, r];
  }), o;
}
function Dd(e) {
  var t = -1, o = Array(e.size);
  return e.forEach(function(r) {
    o[++t] = r;
  }), o;
}
var Hd = 1, _d = 2, Nd = "[object Boolean]", Wd = "[object Date]", Vd = "[object Error]", jd = "[object Map]", Gd = "[object Number]", Ud = "[object RegExp]", Kd = "[object Set]", qd = "[object String]", Yd = "[object Symbol]", Xd = "[object ArrayBuffer]", Zd = "[object DataView]", bi = cr ? cr.prototype : void 0, Mr = bi ? bi.valueOf : void 0;
function Qd(e, t, o, r, n, i, a) {
  switch (o) {
    case Zd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
      e = e.buffer, t = t.buffer;
    case Xd:
      return !(e.byteLength != t.byteLength || !i(new ci(e), new ci(t)));
    case Nd:
    case Wd:
    case Gd:
      return En(+e, +t);
    case Vd:
      return e.name == t.name && e.message == t.message;
    case Ud:
    case qd:
      return e == t + "";
    case jd:
      var l = Ld;
    case Kd:
      var s = r & Hd;
      if (l || (l = Dd), e.size != t.size && !s) return false;
      var c = a.get(e);
      if (c) return c == t;
      r |= _d, a.set(e, t);
      var d = il(l(e), l(t), r, n, i, a);
      return a.delete(e), d;
    case Yd:
      if (Mr) return Mr.call(e) == Mr.call(t);
  }
  return false;
}
var Jd = 1, eu = Object.prototype, tu = eu.hasOwnProperty;
function ou(e, t, o, r, n, i) {
  var a = o & Jd, l = di(e), s = l.length, c = di(t), d = c.length;
  if (s != d && !a) return false;
  for (var u = s; u--; ) {
    var f = l[u];
    if (!(a ? f in t : tu.call(t, f))) return false;
  }
  var h = i.get(e), p = i.get(t);
  if (h && p) return h == t && p == e;
  var m = true;
  i.set(e, t), i.set(t, e);
  for (var v = a; ++u < s; ) {
    f = l[u];
    var g = e[f], x = t[f];
    if (r) var P = a ? r(x, g, f, t, e, i) : r(g, x, f, e, t, i);
    if (!(P === void 0 ? g === x || n(g, x, o, r, i) : P)) {
      m = false;
      break;
    }
    v || (v = f == "constructor");
  }
  if (m && !v) {
    var S = e.constructor, R = t.constructor;
    S != R && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof R == "function" && R instanceof R) && (m = false);
  }
  return i.delete(e), i.delete(t), m;
}
var ru = 1, xi = "[object Arguments]", Ci = "[object Array]", qo = "[object Object]", nu = Object.prototype, yi = nu.hasOwnProperty;
function iu(e, t, o, r, n, i) {
  var a = ht(e), l = ht(t), s = a ? Ci : ui(e), c = l ? Ci : ui(t);
  s = s == xi ? qo : s, c = c == xi ? qo : c;
  var d = s == qo, u = c == qo, f = s == c;
  if (f && Jr(e)) {
    if (!Jr(t)) return false;
    a = true, d = false;
  }
  if (f && !d) return i || (i = new To()), a || La(e) ? il(e, t, o, r, n, i) : Qd(e, t, s, o, r, n, i);
  if (!(o & ru)) {
    var h = d && yi.call(e, "__wrapped__"), p = u && yi.call(t, "__wrapped__");
    if (h || p) {
      var m = h ? e.value() : e, v = p ? t.value() : t;
      return i || (i = new To()), n(m, v, o, r, i);
    }
  }
  return f ? (i || (i = new To()), ou(e, t, o, r, n, i)) : false;
}
function Bn(e, t, o, r, n) {
  return e === t ? true : e == null || t == null || !sr(e) && !sr(t) ? e !== e && t !== t : iu(e, t, o, r, Bn, n);
}
var au = 1, lu = 2;
function su(e, t, o, r) {
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
      var d = new To(), u;
      if (!(u === void 0 ? Bn(c, s, au | lu, r, d) : u)) return false;
    }
  }
  return true;
}
function al(e) {
  return e === e && !Ho(e);
}
function cu(e) {
  for (var t = Da(e), o = t.length; o--; ) {
    var r = t[o], n = e[r];
    t[o] = [r, n, al(n)];
  }
  return t;
}
function ll(e, t) {
  return function(o) {
    return o == null ? false : o[e] === t && (t !== void 0 || e in Object(o));
  };
}
function du(e) {
  var t = cu(e);
  return t.length == 1 && t[0][2] ? ll(t[0][0], t[0][1]) : function(o) {
    return o === e || su(o, e, t);
  };
}
function uu(e, t) {
  return e != null && t in Object(e);
}
function fu(e, t, o) {
  t = Xa(t, e);
  for (var r = -1, n = t.length, i = false; ++r < n; ) {
    var a = br(t[r]);
    if (!(i = e != null && o(e, a))) break;
    e = e[a];
  }
  return i || ++r != n ? i : (n = e == null ? 0 : e.length, !!n && uc(n) && Fa(a, n) && (ht(e) || en(e)));
}
function hu(e, t) {
  return e != null && fu(e, t, uu);
}
var pu = 1, gu = 2;
function mu(e, t) {
  return On(e) && al(t) ? ll(br(e), t) : function(o) {
    var r = od(o, e);
    return r === void 0 && r === t ? hu(o, e) : Bn(t, r, pu | gu);
  };
}
function vu(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function bu(e) {
  return function(t) {
    return Za(t, e);
  };
}
function xu(e) {
  return On(e) ? vu(br(e)) : bu(e);
}
function Cu(e) {
  return typeof e == "function" ? e : e == null ? An : typeof e == "object" ? ht(e) ? mu(e[0], e[1]) : du(e) : xu(e);
}
function yu(e) {
  return function(t, o, r) {
    for (var n = -1, i = Object(t), a = r(t), l = a.length; l--; ) {
      var s = a[++n];
      if (o(i[s], s, i) === false) break;
    }
    return t;
  };
}
var sl = yu();
function Su(e, t) {
  return e && sl(e, t, Da);
}
function wu(e, t) {
  return function(o, r) {
    if (o == null) return o;
    if (!_o(o)) return e(o, r);
    for (var n = o.length, i = -1, a = Object(o); ++i < n && r(a[i], i, a) !== false; ) ;
    return o;
  };
}
var $u = wu(Su);
function nn(e, t, o) {
  (o !== void 0 && !En(e[t], o) || o === void 0 && !(t in e)) && ka(e, t, o);
}
function Pu(e) {
  return sr(e) && _o(e);
}
function an(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
}
function Eu(e) {
  return Hc(e, qa(e));
}
function Tu(e, t, o, r, n, i, a) {
  var l = an(e, o), s = an(t, o), c = a.get(s);
  if (c) {
    nn(e, o, c);
    return;
  }
  var d = i ? i(l, s, o + "", e, t, a) : void 0, u = d === void 0;
  if (u) {
    var f = ht(s), h = !f && Jr(s), p = !f && !h && La(s);
    d = s, f || h || p ? ht(l) ? d = l : Pu(l) ? d = Ac(l) : h ? (u = false, d = fc(s, true)) : p ? (u = false, d = hc(s, true)) : d = [] : pc(s) || en(s) ? (d = l, en(l) ? d = Eu(l) : (!Ho(l) || gc(l)) && (d = mc(s))) : u = false;
  }
  u && (a.set(s, d), n(d, s, r, i, a), a.delete(s)), nn(e, o, d);
}
function cl(e, t, o, r, n) {
  e !== t && sl(t, function(i, a) {
    if (n || (n = new To()), Ho(i)) Tu(e, t, a, o, cl, r, n);
    else {
      var l = r ? r(an(e, a), i, a + "", e, t, n) : void 0;
      l === void 0 && (l = i), nn(e, a, l);
    }
  }, qa);
}
function Ru(e, t) {
  var o = -1, r = _o(e) ? Array(e.length) : [];
  return $u(e, function(n, i, a) {
    r[++o] = t(n, i, a);
  }), r;
}
function Iu(e, t) {
  var o = ht(e) ? Ua : Ru;
  return o(e, Cu(t));
}
var $o = Vc(function(e, t, o) {
  cl(e, t, o);
});
const lo = typeof document < "u";
function dl(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function zu(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && dl(e.default);
}
const be = Object.assign;
function Br(e, t) {
  const o = {};
  for (const r in t) {
    const n = t[r];
    o[r] = lt(n) ? n.map(e) : e(n);
  }
  return o;
}
const Ro = () => {
}, lt = Array.isArray;
function Si(e, t) {
  const o = {};
  for (const r in e) o[r] = r in t ? t[r] : e[r];
  return o;
}
const ul = /#/g, Au = /&/g, Ou = /\//g, Mu = /=/g, Bu = /\?/g, fl = /\+/g, ku = /%5B/g, Fu = /%5D/g, hl = /%5E/g, Lu = /%60/g, pl = /%7B/g, Du = /%7C/g, gl = /%7D/g, Hu = /%20/g;
function kn(e) {
  return e == null ? "" : encodeURI("" + e).replace(Du, "|").replace(ku, "[").replace(Fu, "]");
}
function _u(e) {
  return kn(e).replace(pl, "{").replace(gl, "}").replace(hl, "^");
}
function ln(e) {
  return kn(e).replace(fl, "%2B").replace(Hu, "+").replace(ul, "%23").replace(Au, "%26").replace(Lu, "`").replace(pl, "{").replace(gl, "}").replace(hl, "^");
}
function Nu(e) {
  return ln(e).replace(Mu, "%3D");
}
function Wu(e) {
  return kn(e).replace(ul, "%23").replace(Bu, "%3F");
}
function Vu(e) {
  return Wu(e).replace(Ou, "%2F");
}
function Oo(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const ju = /\/$/, Gu = (e) => e.replace(ju, "");
function kr(e, t, o = "/") {
  let r, n = {}, i = "", a = "";
  const l = t.indexOf("#");
  let s = t.indexOf("?");
  return s = l >= 0 && s > l ? -1 : s, s >= 0 && (r = t.slice(0, s), i = t.slice(s, l > 0 ? l : t.length), n = e(i.slice(1))), l >= 0 && (r = r || t.slice(0, l), a = t.slice(l, t.length)), r = Yu(r ?? t, o), { fullPath: r + i + a, path: r, query: n, hash: Oo(a) };
}
function Uu(e, t) {
  const o = t.query ? e(t.query) : "";
  return t.path + (o && "?") + o + (t.hash || "");
}
function Ku(e, t, o) {
  const r = t.matched.length - 1, n = o.matched.length - 1;
  return r > -1 && r === n && ho(t.matched[r], o.matched[n]) && ml(t.params, o.params) && e(t.query) === e(o.query) && t.hash === o.hash;
}
function ho(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ml(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var o in e) if (!qu(e[o], t[o])) return false;
  return true;
}
function qu(e, t) {
  return lt(e) ? wi(e, t) : lt(t) ? wi(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function wi(e, t) {
  return lt(t) ? e.length === t.length && e.every((o, r) => o === t[r]) : e.length === 1 && e[0] === t;
}
function Yu(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const o = t.split("/"), r = e.split("/"), n = r[r.length - 1];
  (n === ".." || n === ".") && r.push("");
  let i = o.length - 1, a, l;
  for (a = 0; a < r.length; a++) if (l = r[a], l !== ".") if (l === "..") i > 1 && i--;
  else break;
  return o.slice(0, i).join("/") + "/" + r.slice(a).join("/");
}
const zt = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let sn = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), $i = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
const Fr = "";
function Xu(e) {
  if (!e) if (lo) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Gu(e);
}
const Zu = /^[^#]+#/;
function Qu(e, t) {
  return e.replace(Zu, "#") + t;
}
function Ju(e, t) {
  const o = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - o.left - (t.left || 0), top: r.top - o.top - (t.top || 0) };
}
const ef = () => ({ left: window.scrollX, top: window.scrollY });
function tf(e) {
  let t;
  if ("el" in e) {
    const o = e.el, r = typeof o == "string" && o.startsWith("#"), n = typeof o == "string" ? r ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!n) return;
    t = Ju(n, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Pi(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const cn = /* @__PURE__ */ new Map();
function of(e, t) {
  cn.set(e, t);
}
function rf(e) {
  const t = cn.get(e);
  return cn.delete(e), t;
}
function nf(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function vl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let $e = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const bl = /* @__PURE__ */ Symbol("");
$e.MATCHER_NOT_FOUND + "", $e.NAVIGATION_GUARD_REDIRECT + "", $e.NAVIGATION_ABORTED + "", $e.NAVIGATION_CANCELLED + "", $e.NAVIGATION_DUPLICATED + "";
function po(e, t) {
  return be(new Error(), { type: e, [bl]: true }, t);
}
function bt(e, t) {
  return e instanceof Error && bl in e && (t == null || !!(e.type & t));
}
const af = ["params", "query", "hash"];
function lf(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const o of af) o in e && (t[o] = e[o]);
  return JSON.stringify(t, null, 2);
}
function sf(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const n = o[r].replace(fl, " "), i = n.indexOf("="), a = Oo(i < 0 ? n : n.slice(0, i)), l = i < 0 ? null : Oo(n.slice(i + 1));
    if (a in t) {
      let s = t[a];
      lt(s) || (s = t[a] = [s]), s.push(l);
    } else t[a] = l;
  }
  return t;
}
function Ei(e) {
  let t = "";
  for (let o in e) {
    const r = e[o];
    if (o = Nu(o), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + o);
      continue;
    }
    (lt(r) ? r.map((n) => n && ln(n)) : [r && ln(r)]).forEach((n) => {
      n !== void 0 && (t += (t.length ? "&" : "") + o, n != null && (t += "=" + n));
    });
  }
  return t;
}
function cf(e) {
  const t = {};
  for (const o in e) {
    const r = e[o];
    r !== void 0 && (t[o] = lt(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
  }
  return t;
}
const xl = /* @__PURE__ */ Symbol(""), Ti = /* @__PURE__ */ Symbol(""), xr = /* @__PURE__ */ Symbol(""), Fn = /* @__PURE__ */ Symbol(""), dn = /* @__PURE__ */ Symbol("");
function Co() {
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
function df(e, t, o) {
  const r = () => {
    e[t].delete(o);
  };
  Ha(r), Rn(r), _a(() => {
    e[t].add(o);
  }), e[t].add(o);
}
function yx(e) {
  const t = ie(xl, {}).value;
  t && df(t, "leaveGuards", e);
}
function Mt(e, t, o, r, n, i = (a) => a()) {
  const a = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
  return () => new Promise((l, s) => {
    const c = (f) => {
      f === false ? s(po($e.NAVIGATION_ABORTED, { from: o, to: t })) : f instanceof Error ? s(f) : nf(f) ? s(po($e.NAVIGATION_GUARD_REDIRECT, { from: t, to: f })) : (a && r.enterCallbacks[n] === a && typeof f == "function" && a.push(f), l());
    }, d = i(() => e.call(r && r.instances[n], t, o, c));
    let u = Promise.resolve(d);
    e.length < 3 && (u = u.then(c)), u.catch((f) => s(f));
  });
}
function Lr(e, t, o, r, n = (i) => i()) {
  const i = [];
  for (const a of e) for (const l in a.components) {
    let s = a.components[l];
    if (!(t !== "beforeRouteEnter" && !a.instances[l])) if (dl(s)) {
      const c = (s.__vccOpts || s)[t];
      c && i.push(Mt(c, o, r, a, l, n));
    } else {
      let c = s();
      i.push(() => c.then((d) => {
        if (!d) throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);
        const u = zu(d) ? d.default : d;
        a.mods[l] = d, a.components[l] = u;
        const f = (u.__vccOpts || u)[t];
        return f && Mt(f, o, r, a, l, n)();
      }));
    }
  }
  return i;
}
function uf(e, t) {
  const o = [], r = [], n = [], i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const l = t.matched[a];
    l && (e.matched.find((c) => ho(c, l)) ? r.push(l) : o.push(l));
    const s = e.matched[a];
    s && (t.matched.find((c) => ho(c, s)) || n.push(s));
  }
  return [o, r, n];
}
function Sx(e = "") {
  let t = [], o = [[Fr, {}]], r = 0;
  e = Xu(e);
  function n(l, s = {}) {
    r++, r !== o.length && o.splice(r), o.push([l, s]);
  }
  function i(l, s, { direction: c, delta: d }) {
    const u = { direction: c, delta: d, type: sn.pop };
    for (const f of t) f(l, s, u);
  }
  const a = { location: Fr, state: {}, base: e, createHref: Qu.bind(null, e), replace(l, s) {
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
    const c = this.location, d = l < 0 ? $i.back : $i.forward;
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
const ff = { type: Vt.Static, value: "" }, hf = /[a-zA-Z0-9_]/;
function pf(e) {
  if (!e) return [[]];
  if (e === "/") return [[ff]];
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
        s === "(" ? o = Oe.ParamRegExp : hf.test(s) ? f() : (u(), o = Oe.Static, s !== "*" && s !== "?" && s !== "+" && l--);
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
const Ri = "[^/]+?", gf = { sensitive: false, strict: false, start: true, end: true };
var _e = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(_e || {});
const mf = /[.+*?^${}()[\]/\\]/g;
function vf(e, t) {
  const o = be({}, gf, t), r = [];
  let n = o.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const d = c.length ? [] : [_e.Root];
    o.strict && !c.length && (n += "/");
    for (let u = 0; u < c.length; u++) {
      const f = c[u];
      let h = _e.Segment + (o.sensitive ? _e.BonusCaseSensitive : 0);
      if (f.type === Vt.Static) u || (n += "/"), n += f.value.replace(mf, "\\$&"), h += _e.Static;
      else if (f.type === Vt.Param) {
        const { value: p, repeatable: m, optional: v, regexp: g } = f;
        i.push({ name: p, repeatable: m, optional: v });
        const x = g || Ri;
        if (x !== Ri) {
          h += _e.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${x}): ` + S.message);
          }
        }
        let P = m ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        u || (P = v && c.length < 2 ? `(?:/${P})` : "/" + P), v && (P += "?"), n += P, h += _e.Dynamic, v && (h += _e.BonusOptional), m && (h += _e.BonusRepeatable), x === ".*" && (h += _e.BonusWildcard);
      }
      d.push(h);
    }
    r.push(d);
  }
  if (o.strict && o.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += _e.BonusStrict;
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
        if (lt(g) && !m) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const x = lt(g) ? g.join("/") : g;
        if (!x) if (v) f.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : u = true);
        else throw new Error(`Missing required param "${p}"`);
        d += x;
      }
    }
    return d || "/";
  }
  return { re: a, score: r, keys: i, parse: l, stringify: s };
}
function bf(e, t) {
  let o = 0;
  for (; o < e.length && o < t.length; ) {
    const r = t[o] - e[o];
    if (r) return r;
    o++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === _e.Static + _e.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === _e.Static + _e.Segment ? 1 : -1 : 0;
}
function Cl(e, t) {
  let o = 0;
  const r = e.score, n = t.score;
  for (; o < r.length && o < n.length; ) {
    const i = bf(r[o], n[o]);
    if (i) return i;
    o++;
  }
  if (Math.abs(n.length - r.length) === 1) {
    if (Ii(r)) return 1;
    if (Ii(n)) return -1;
  }
  return n.length - r.length;
}
function Ii(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const xf = { strict: false, end: true, sensitive: false };
function Cf(e, t, o) {
  const r = vf(pf(e.path), o), n = be(r, { record: e, parent: t, children: [], alias: [] });
  return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
}
function yf(e, t) {
  const o = [], r = /* @__PURE__ */ new Map();
  t = Si(xf, t);
  function n(u) {
    return r.get(u);
  }
  function i(u, f, h) {
    const p = !h, m = Ai(u);
    m.aliasOf = h && h.record;
    const v = Si(t, u), g = [m];
    if ("alias" in u) {
      const S = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const R of S) g.push(Ai(be({}, m, { components: h ? h.record.components : m.components, path: R, aliasOf: h ? h.record : m })));
    }
    let x, P;
    for (const S of g) {
      const { path: R } = S;
      if (f && R[0] !== "/") {
        const z = f.record.path, b = z[z.length - 1] === "/" ? "" : "/";
        S.path = f.record.path + (R && b + R);
      }
      if (x = Cf(S, f, v), h ? h.alias.push(x) : (P = P || x, P !== x && P.alias.push(x), p && u.name && !Oi(x) && a(u.name)), yl(x) && s(x), m.children) {
        const z = m.children;
        for (let b = 0; b < z.length; b++) i(z[b], x, h && h.children[b]);
      }
      h = h || x;
    }
    return P ? () => {
      a(P);
    } : Ro;
  }
  function a(u) {
    if (vl(u)) {
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
    const f = $f(u, o);
    o.splice(f, 0, u), u.record.name && !Oi(u) && r.set(u.record.name, u);
  }
  function c(u, f) {
    let h, p = {}, m, v;
    if ("name" in u && u.name) {
      if (h = r.get(u.name), !h) throw po($e.MATCHER_NOT_FOUND, { location: u });
      v = h.record.name, p = be(zi(f.params, h.keys.filter((P) => !P.optional).concat(h.parent ? h.parent.keys.filter((P) => P.optional) : []).map((P) => P.name)), u.params && zi(u.params, h.keys.map((P) => P.name))), m = h.stringify(p);
    } else if (u.path != null) m = u.path, h = o.find((P) => P.re.test(m)), h && (p = h.parse(m), v = h.record.name);
    else {
      if (h = f.name ? r.get(f.name) : o.find((P) => P.re.test(f.path)), !h) throw po($e.MATCHER_NOT_FOUND, { location: u, currentLocation: f });
      v = h.record.name, p = be({}, f.params, u.params), m = h.stringify(p);
    }
    const g = [];
    let x = h;
    for (; x; ) g.unshift(x.record), x = x.parent;
    return { name: v, path: m, params: p, matched: g, meta: wf(g) };
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
function Ai(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Sf(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Sf(e) {
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
function wf(e) {
  return e.reduce((t, o) => be(t, o.meta), {});
}
function $f(e, t) {
  let o = 0, r = t.length;
  for (; o !== r; ) {
    const i = o + r >> 1;
    Cl(e, t[i]) < 0 ? r = i : o = i + 1;
  }
  const n = Pf(e);
  return n && (r = t.lastIndexOf(n, r - 1)), r;
}
function Pf(e) {
  let t = e;
  for (; t = t.parent; ) if (yl(t) && Cl(e, t) === 0) return t;
}
function yl({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Mi(e) {
  const t = ie(xr), o = ie(Fn), r = B(() => {
    const s = so(e.to);
    return t.resolve(s);
  }), n = B(() => {
    const { matched: s } = r.value, { length: c } = s, d = s[c - 1], u = o.matched;
    if (!d || !u.length) return -1;
    const f = u.findIndex(ho.bind(null, d));
    if (f > -1) return f;
    const h = Bi(s[c - 2]);
    return c > 1 && Bi(d) === h && u[u.length - 1].path !== h ? u.findIndex(ho.bind(null, s[c - 2])) : f;
  }), i = B(() => n.value > -1 && zf(o.params, r.value.params)), a = B(() => n.value > -1 && n.value === o.matched.length - 1 && ml(o.params, r.value.params));
  function l(s = {}) {
    if (If(s)) {
      const c = t[so(e.replace) ? "replace" : "push"](so(e.to)).catch(Ro);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: r, href: B(() => r.value.href), isActive: i, isExactActive: a, navigate: l };
}
function Ef(e) {
  return e.length === 1 ? e[0] : e;
}
const Tf = ee({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: Mi, setup(e, { slots: t }) {
  const o = Na(Mi(e)), { options: r } = ie(xr), n = B(() => ({ [ki(e.activeClass, r.linkActiveClass, "router-link-active")]: o.isActive, [ki(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive }));
  return () => {
    const i = t.default && Ef(t.default(o));
    return e.custom ? i : y("a", { "aria-current": o.isExactActive ? e.ariaCurrentValue : null, href: o.href, onClick: o.navigate, class: n.value }, i);
  };
} }), Rf = Tf;
function If(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function zf(e, t) {
  for (const o in t) {
    const r = t[o], n = e[o];
    if (typeof r == "string") {
      if (r !== n) return false;
    } else if (!lt(n) || n.length !== r.length || r.some((i, a) => i.valueOf() !== n[a].valueOf())) return false;
  }
  return true;
}
function Bi(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ki = (e, t, o) => e ?? t ?? o, Af = ee({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: o }) {
  const r = ie(dn), n = B(() => e.route || r.value), i = ie(Ti, 0), a = B(() => {
    let c = so(i);
    const { matched: d } = n.value;
    let u;
    for (; (u = d[c]) && !u.components; ) c++;
    return c;
  }), l = B(() => n.value.matched[a.value]);
  Te(Ti, B(() => a.value + 1)), Te(xl, l), Te(dn, n);
  const s = _();
  return Re(() => [s.value, l.value, e.name], ([c, d, u], [f, h, p]) => {
    d && (d.instances[u] = c, h && h !== d && c && c === f && (d.leaveGuards.size || (d.leaveGuards = h.leaveGuards), d.updateGuards.size || (d.updateGuards = h.updateGuards))), c && d && (!h || !ho(d, h) || !f) && (d.enterCallbacks[u] || []).forEach((m) => m(c));
  }, { flush: "post" }), () => {
    const c = n.value, d = e.name, u = l.value, f = u && u.components[d];
    if (!f) return Fi(o.default, { Component: f, route: c });
    const h = u.props[d], p = h ? h === true ? c.params : typeof h == "function" ? h(c) : h : null, v = y(f, be({}, p, t, { onVnodeUnmounted: (g) => {
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
const Of = Af;
function wx(e) {
  const t = yf(e.routes, e), o = e.parseQuery || sf, r = e.stringifyQuery || Ei, n = e.history, i = Co(), a = Co(), l = Co(), s = wt(zt);
  let c = zt;
  lo && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = Br.bind(null, (I) => "" + I), u = Br.bind(null, Vu), f = Br.bind(null, Oo);
  function h(I, V) {
    let M, Y;
    return vl(I) ? (M = t.getRecordMatcher(I), Y = V) : Y = I, t.addRoute(Y, M);
  }
  function p(I) {
    const V = t.getRecordMatcher(I);
    V && t.removeRoute(V);
  }
  function m() {
    return t.getRoutes().map((I) => I.record);
  }
  function v(I) {
    return !!t.getRecordMatcher(I);
  }
  function g(I, V) {
    if (V = be({}, V || s.value), typeof I == "string") {
      const oe = kr(o, I, V.path), ye = t.resolve({ path: oe.path }, V), nt = n.createHref(oe.fullPath);
      return be(oe, ye, { params: f(ye.params), hash: Oo(oe.hash), redirectedFrom: void 0, href: nt });
    }
    let M;
    if (I.path != null) M = be({}, I, { path: kr(o, I.path, V.path).path });
    else {
      const oe = be({}, I.params);
      for (const ye in oe) oe[ye] == null && delete oe[ye];
      M = be({}, I, { params: u(oe) }), V.params = u(V.params);
    }
    const Y = t.resolve(M, V), re = I.hash || "";
    Y.params = d(f(Y.params));
    const xe = Uu(r, be({}, I, { hash: _u(re), path: Y.path })), te = n.createHref(xe);
    return be({ fullPath: xe, hash: re, query: r === Ei ? cf(I.query) : I.query || {} }, Y, { redirectedFrom: void 0, href: te });
  }
  function x(I) {
    return typeof I == "string" ? kr(o, I, s.value.path) : be({}, I);
  }
  function P(I, V) {
    if (c !== I) return po($e.NAVIGATION_CANCELLED, { from: V, to: I });
  }
  function S(I) {
    return b(I);
  }
  function R(I) {
    return S(be(x(I), { replace: true }));
  }
  function z(I, V) {
    const M = I.matched[I.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: Y } = M;
      let re = typeof Y == "function" ? Y(I, V) : Y;
      return typeof re == "string" && (re = re.includes("?") || re.includes("#") ? re = x(re) : { path: re }, re.params = {}), be({ query: I.query, hash: I.hash, params: re.path != null ? {} : I.params }, re);
    }
  }
  function b(I, V) {
    const M = c = g(I), Y = s.value, re = I.state, xe = I.force, te = I.replace === true, oe = z(M, Y);
    if (oe) return b(be(x(oe), { state: typeof oe == "object" ? be({}, re, oe.state) : re, force: xe, replace: te }), V || M);
    const ye = M;
    ye.redirectedFrom = V;
    let nt;
    return !xe && Ku(r, Y, M) && (nt = po($e.NAVIGATION_DUPLICATED, { to: ye, from: Y }), me(Y, Y, true, false)), (nt ? Promise.resolve(nt) : $(ye, Y)).catch((Me) => bt(Me) ? bt(Me, $e.NAVIGATION_GUARD_REDIRECT) ? Me : se(Me) : q(Me, ye, Y)).then((Me) => {
      if (Me) {
        if (bt(Me, $e.NAVIGATION_GUARD_REDIRECT)) return b(be({ replace: te }, x(Me.to), { state: typeof Me.to == "object" ? be({}, re, Me.to.state) : re, force: xe }), V || ye);
      } else Me = C(ye, Y, true, te, re);
      return T(ye, Y, Me), Me;
    });
  }
  function w(I, V) {
    const M = P(I, V);
    return M ? Promise.reject(M) : Promise.resolve();
  }
  function E(I) {
    const V = He.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(I) : I();
  }
  function $(I, V) {
    let M;
    const [Y, re, xe] = uf(I, V);
    M = Lr(Y.reverse(), "beforeRouteLeave", I, V);
    for (const oe of Y) oe.leaveGuards.forEach((ye) => {
      M.push(Mt(ye, I, V));
    });
    const te = w.bind(null, I, V);
    return M.push(te), ne(M).then(() => {
      M = [];
      for (const oe of i.list()) M.push(Mt(oe, I, V));
      return M.push(te), ne(M);
    }).then(() => {
      M = Lr(re, "beforeRouteUpdate", I, V);
      for (const oe of re) oe.updateGuards.forEach((ye) => {
        M.push(Mt(ye, I, V));
      });
      return M.push(te), ne(M);
    }).then(() => {
      M = [];
      for (const oe of xe) if (oe.beforeEnter) if (lt(oe.beforeEnter)) for (const ye of oe.beforeEnter) M.push(Mt(ye, I, V));
      else M.push(Mt(oe.beforeEnter, I, V));
      return M.push(te), ne(M);
    }).then(() => (I.matched.forEach((oe) => oe.enterCallbacks = {}), M = Lr(xe, "beforeRouteEnter", I, V, E), M.push(te), ne(M))).then(() => {
      M = [];
      for (const oe of a.list()) M.push(Mt(oe, I, V));
      return M.push(te), ne(M);
    }).catch((oe) => bt(oe, $e.NAVIGATION_CANCELLED) ? oe : Promise.reject(oe));
  }
  function T(I, V, M) {
    l.list().forEach((Y) => E(() => Y(I, V, M)));
  }
  function C(I, V, M, Y, re) {
    const xe = P(I, V);
    if (xe) return xe;
    const te = V === zt, oe = lo ? history.state : {};
    M && (Y || te ? n.replace(I.fullPath, be({ scroll: te && oe && oe.scroll }, re)) : n.push(I.fullPath, re)), s.value = I, me(I, V, M, te), se();
  }
  let O;
  function H() {
    O || (O = n.listen((I, V, M) => {
      if (!rt.listening) return;
      const Y = g(I), re = z(Y, rt.currentRoute.value);
      if (re) {
        b(be(re, { replace: true, force: true }), Y).catch(Ro);
        return;
      }
      c = Y;
      const xe = s.value;
      lo && of(Pi(xe.fullPath, M.delta), ef()), $(Y, xe).catch((te) => bt(te, $e.NAVIGATION_ABORTED | $e.NAVIGATION_CANCELLED) ? te : bt(te, $e.NAVIGATION_GUARD_REDIRECT) ? (b(be(x(te.to), { force: true }), Y).then((oe) => {
        bt(oe, $e.NAVIGATION_ABORTED | $e.NAVIGATION_DUPLICATED) && !M.delta && M.type === sn.pop && n.go(-1, false);
      }).catch(Ro), Promise.reject()) : (M.delta && n.go(-M.delta, false), q(te, Y, xe))).then((te) => {
        te = te || C(Y, xe, false), te && (M.delta && !bt(te, $e.NAVIGATION_CANCELLED) ? n.go(-M.delta, false) : M.type === sn.pop && bt(te, $e.NAVIGATION_ABORTED | $e.NAVIGATION_DUPLICATED) && n.go(-1, false)), T(Y, xe, te);
      }).catch(Ro);
    }));
  }
  let A = Co(), W = Co(), k;
  function q(I, V, M) {
    se(I);
    const Y = W.list();
    return Y.length ? Y.forEach((re) => re(I, V, M)) : console.error(I), Promise.reject(I);
  }
  function le() {
    return k && s.value !== zt ? Promise.resolve() : new Promise((I, V) => {
      A.add([I, V]);
    });
  }
  function se(I) {
    return k || (k = !I, H(), A.list().forEach(([V, M]) => I ? M(I) : V()), A.reset()), I;
  }
  function me(I, V, M, Y) {
    const { scrollBehavior: re } = e;
    if (!lo || !re) return Promise.resolve();
    const xe = !M && rf(Pi(I.fullPath, 0)) || (Y || !M) && history.state && history.state.scroll || null;
    return Xt().then(() => re(I, V, xe)).then((te) => te && tf(te)).catch((te) => q(te, I, V));
  }
  const ce = (I) => n.go(I);
  let Le;
  const He = /* @__PURE__ */ new Set(), rt = { currentRoute: s, listening: true, addRoute: h, removeRoute: p, clearRoutes: t.clearRoutes, hasRoute: v, getRoutes: m, resolve: g, options: e, push: S, replace: R, go: ce, back: () => ce(-1), forward: () => ce(1), beforeEach: i.add, beforeResolve: a.add, afterEach: l.add, onError: W.add, isReady: le, install(I) {
    I.component("RouterLink", Rf), I.component("RouterView", Of), I.config.globalProperties.$router = rt, Object.defineProperty(I.config.globalProperties, "$route", { enumerable: true, get: () => so(s) }), lo && !Le && s.value === zt && (Le = true, S(n.location).catch((Y) => {
    }));
    const V = {};
    for (const Y in zt) Object.defineProperty(V, Y, { get: () => s.value[Y], enumerable: true });
    I.provide(xr, rt), I.provide(Fn, vc(V)), I.provide(dn, s);
    const M = I.unmount;
    He.add(I), I.unmount = function() {
      He.delete(I), He.size < 1 && (c = zt, O && O(), O = null, s.value = zt, Le = false, k = false), M();
    };
  } };
  function ne(I) {
    return I.reduce((V, M) => V.then(() => E(M)), Promise.resolve());
  }
  return rt;
}
function $x() {
  return ie(xr);
}
function Px(e) {
  return ie(Fn);
}
const Mf = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Ex = ee({ name: "InfoCircle", render: function(t, o) {
  return vr(), mr("svg", Mf, o[0] || (o[0] = [Ue("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ue("circle", { cx: "12", cy: "12", r: "9" }), Ue("path", { d: "M12 8h.01" }), Ue("path", { d: "M11 12h1v4h1" })], -1)]));
} }), Bf = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Tx = ee({ name: "Map", render: function(t, o) {
  return vr(), mr("svg", Bf, o[0] || (o[0] = [Ue("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ue("path", { d: "M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3V7" }), Ue("path", { d: "M9 4v13" }), Ue("path", { d: "M15 7v13" })], -1)]));
} }), kf = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Rx = ee({ name: "MapPin", render: function(t, o) {
  return vr(), mr("svg", kf, o[0] || (o[0] = [Ue("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ue("circle", { cx: "12", cy: "11", r: "3" }), Ue("path", { d: "M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" })], -1)]));
} }), Ff = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Ix = ee({ name: "Settings", render: function(t, o) {
  return vr(), mr("svg", Ff, o[0] || (o[0] = [Ue("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ue("path", { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z" }), Ue("circle", { cx: "12", cy: "12", r: "3" })], -1)]));
} });
function Lf(e) {
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
        return g.map((R) => `&${(v == null ? void 0 : v.bPrefix) || t}${m.bem.b}${S !== void 0 ? `${o}${S}` : ""}${r}${R}`).join(", ");
      }
      const P = m.bem.els;
      return P !== null ? x(P[0]) : x();
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
function Df(e) {
  let t = 0;
  for (let o = 0; o < e.length; ++o) e[o] === "&" && ++t;
  return t;
}
const Sl = /\s*,(?![^(]*\))\s*/g, Hf = /\s+/g;
function _f(e, t) {
  const o = [];
  return t.split(Sl).forEach((r) => {
    let n = Df(r);
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
function Nf(e, t) {
  const o = [];
  return t.split(Sl).forEach((r) => {
    e.forEach((n) => {
      o.push((n && n + " ") + r);
    });
  }), o;
}
function Wf(e) {
  let t = [""];
  return e.forEach((o) => {
    o = o && o.trim(), o && (o.includes("&") ? t = _f(t, o) : t = Nf(t, o));
  }), t.join(", ").replace(Hf, " ");
}
function Li(e) {
  if (!e) return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Cr(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Vf(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Yo(e) {
  return e ? /^\s*@(s|m)/.test(e) : false;
}
const jf = /[A-Z]/g;
function wl(e) {
  return e.replace(jf, (t) => "-" + t.toLowerCase());
}
function Gf(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((o) => t + `  ${wl(o[0])}: ${o[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Uf(e, t, o) {
  return typeof e == "function" ? e({ context: t.context, props: o }) : e;
}
function Di(e, t, o, r) {
  if (!t) return "";
  const n = Uf(t, o, r);
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
    l = wl(l), s != null && a.push(`  ${l}${Gf(s)}`);
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
function $l(e, t, o, r, n) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string") Yo(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const c = i({ context: r.context, props: n });
    Yo(c) ? a = c : t.push(c);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string") Yo(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const c = i.$({ context: r.context, props: n });
    Yo(c) ? a = c : t.push(c);
  }
  const l = Wf(t), s = Di(l, e.props, r, n);
  a ? o.push(`${a} {`) : s.length && o.push(s), e.children && un(e.children, { context: r.context, props: n }, (c) => {
    if (typeof c == "string") {
      const d = Di(l, { raw: c }, r, n);
      o.push(d);
    } else $l(c, t, o, r, n);
  }), t.pop(), a && o.push("}"), i && i.after && i.after(r.context);
}
function Kf(e, t, o) {
  const r = [];
  return $l(e, [], r, t, o), r.join(`

`);
}
function Mo(e) {
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
function qf(e, t, o, r) {
  const { els: n } = t;
  if (o === void 0) n.forEach(Li), t.els = [];
  else {
    const i = Cr(o, r);
    i && n.includes(i) && (Li(i), t.els = n.filter((a) => a !== i));
  }
}
function Hi(e, t) {
  e.push(t);
}
function Yf(e, t, o, r, n, i, a, l, s) {
  let c;
  if (o === void 0 && (c = t.render(r), o = Mo(c)), s) {
    s.adapter(o, c ?? t.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const d = Cr(o, l);
  if (d !== null && !i) return d;
  const u = d ?? Vf(o);
  if (c === void 0 && (c = t.render(r)), u.textContent = c, d !== null) return d;
  if (a) {
    const f = l.querySelector(`meta[name="${a}"]`);
    if (f) return l.insertBefore(u, f), Hi(t.els, u), u;
  }
  return n ? l.insertBefore(u, l.querySelector("style, link")) : l.appendChild(u), Hi(t.els, u), u;
}
function Xf(e) {
  return Kf(this, this.instance, e);
}
function Zf(e = {}) {
  const { id: t, ssr: o, props: r, head: n = false, force: i = false, anchorMetaName: a, parent: l } = e;
  return Yf(this.instance, this, t, r, n, i, a, l, o);
}
function Qf(e = {}) {
  const { id: t, parent: o } = e;
  qf(this.instance, this, t, o);
}
const Xo = function(e, t, o, r) {
  return { instance: e, $: t, props: o, children: r, els: [], render: Xf, mount: Zf, unmount: Qf };
}, Jf = function(e, t, o, r) {
  return Array.isArray(t) ? Xo(e, { $: null }, null, t) : Array.isArray(o) ? Xo(e, t, null, o) : Array.isArray(r) ? Xo(e, t, o, r) : Xo(e, t, o, null);
};
function Pl(e = {}) {
  const t = { c: ((...o) => Jf(t, ...o)), use: (o, ...r) => o.install(t, ...r), find: Cr, context: {}, config: e };
  return t;
}
function eh(e, t) {
  if (e === void 0) return false;
  if (t) {
    const { context: { ids: o } } = t;
    return o.has(e);
  }
  return Cr(e) !== null;
}
const th = "n", Bo = `.${th}-`, oh = "__", rh = "--", El = Pl(), Tl = Lf({ blockPrefix: Bo, elementPrefix: oh, modifierPrefix: rh });
El.use(Tl);
const { c: F, find: zx } = El, { cB: Z, cE: j, cM: U, cNotM: $t } = Tl;
function Rl(e) {
  return F(({ props: { bPrefix: t } }) => `${t || Bo}modal, ${t || Bo}drawer`, [e]);
}
function nh(e) {
  return F(({ props: { bPrefix: t } }) => `${t || Bo}popover`, [e]);
}
function Il(e) {
  return F(({ props: { bPrefix: t } }) => `&${t || Bo}modal`, e);
}
const ih = (...e) => F(">", [Z(...e)]);
function Q(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (o) => o.toUpperCase()));
}
let fr = [];
const zl = /* @__PURE__ */ new WeakMap();
function ah() {
  fr.forEach((e) => e(...zl.get(e))), fr = [];
}
function lh(e, ...t) {
  zl.set(e, t), !fr.includes(e) && fr.push(e) === 1 && requestAnimationFrame(ah);
}
function _i(e, t) {
  let { target: o } = e;
  for (; o; ) {
    if (o.dataset && o.dataset[t] !== void 0) return true;
    o = o.parentElement;
  }
  return false;
}
function ko(e) {
  return e.composedPath()[0] || null;
}
function Ni(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Ax(e) {
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
function Ox(e, t) {
  const [o, r] = e.split(" ");
  return { row: o, col: r || o };
}
const Wi = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32", transparent: "#0000" };
function Mx(e, t, o) {
  t /= 100, o /= 100;
  const r = t * Math.min(o, 1 - o) + o;
  return [e, r ? (2 - 2 * o / r) * 100 : 0, r * 100];
}
function Bx(e, t, o) {
  t /= 100, o /= 100;
  const r = o - o * t / 2, n = Math.min(r, 1 - r);
  return [e, n ? (o - r) / n * 100 : 0, r * 100];
}
function sh(e, t, o) {
  t /= 100, o /= 100;
  let r = (n, i = (n + e / 60) % 6) => o - o * t * Math.max(Math.min(i, 4 - i, 1), 0);
  return [r(5) * 255, r(3) * 255, r(1) * 255];
}
function kx(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (i < 0 ? i + 6 : i), r && n / r * 100, r * 100];
}
function Fx(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = 1 - Math.abs(r + r - n - 1), a = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (a < 0 ? a + 6 : a), i ? n / i * 100 : 0, (r + r - n) * 50];
}
function ch(e, t, o) {
  t /= 100, o /= 100;
  let r = t * Math.min(o, 1 - o), n = (i, a = (i + e / 30) % 12) => o - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [n(0) * 255, n(8) * 255, n(4) * 255];
}
const gt = "^\\s*", mt = "\\s*$", Ft = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", Ze = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Gt = "([0-9A-Fa-f])", Ut = "([0-9A-Fa-f]{2})", Al = new RegExp(`${gt}hsl\\s*\\(${Ze},${Ft},${Ft}\\)${mt}`), Ol = new RegExp(`${gt}hsv\\s*\\(${Ze},${Ft},${Ft}\\)${mt}`), Ml = new RegExp(`${gt}hsla\\s*\\(${Ze},${Ft},${Ft},${Ze}\\)${mt}`), Bl = new RegExp(`${gt}hsva\\s*\\(${Ze},${Ft},${Ft},${Ze}\\)${mt}`), dh = new RegExp(`${gt}rgb\\s*\\(${Ze},${Ze},${Ze}\\)${mt}`), uh = new RegExp(`${gt}rgba\\s*\\(${Ze},${Ze},${Ze},${Ze}\\)${mt}`), Ln = new RegExp(`${gt}#${Gt}${Gt}${Gt}${mt}`), Dn = new RegExp(`${gt}#${Ut}${Ut}${Ut}${mt}`), Hn = new RegExp(`${gt}#${Gt}${Gt}${Gt}${Gt}${mt}`), _n = new RegExp(`${gt}#${Ut}${Ut}${Ut}${Ut}${mt}`);
function je(e) {
  return parseInt(e, 16);
}
function fh(e) {
  try {
    let t;
    if (t = Ml.exec(e)) return [pt(t[1]), Ie(t[5]), Ie(t[9]), Pt(t[13])];
    if (t = Al.exec(e)) return [pt(t[1]), Ie(t[5]), Ie(t[9]), 1];
    throw new Error(`[seemly/hsla]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function hh(e) {
  try {
    let t;
    if (t = Bl.exec(e)) return [pt(t[1]), Ie(t[5]), Ie(t[9]), Pt(t[13])];
    if (t = Ol.exec(e)) return [pt(t[1]), Ie(t[5]), Ie(t[9]), 1];
    throw new Error(`[seemly/hsva]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Lt(e) {
  try {
    let t;
    if (t = Dn.exec(e)) return [je(t[1]), je(t[2]), je(t[3]), 1];
    if (t = dh.exec(e)) return [Pe(t[1]), Pe(t[5]), Pe(t[9]), 1];
    if (t = uh.exec(e)) return [Pe(t[1]), Pe(t[5]), Pe(t[9]), Pt(t[13])];
    if (t = Ln.exec(e)) return [je(t[1] + t[1]), je(t[2] + t[2]), je(t[3] + t[3]), 1];
    if (t = _n.exec(e)) return [je(t[1]), je(t[2]), je(t[3]), Pt(je(t[4]) / 255)];
    if (t = Hn.exec(e)) return [je(t[1] + t[1]), je(t[2] + t[2]), je(t[3] + t[3]), Pt(je(t[4] + t[4]) / 255)];
    if (e in Wi) return Lt(Wi[e]);
    if (Al.test(e) || Ml.test(e)) {
      const [o, r, n, i] = fh(e);
      return [...ch(o, r, n), i];
    } else if (Ol.test(e) || Bl.test(e)) {
      const [o, r, n, i] = hh(e);
      return [...sh(o, r, n), i];
    }
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ph(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function gh(e, t, o) {
  return `rgb(${Pe(e)}, ${Pe(t)}, ${Pe(o)})`;
}
function fn(e, t, o, r) {
  return `rgba(${Pe(e)}, ${Pe(t)}, ${Pe(o)}, ${ph(r)})`;
}
function Dr(e, t, o, r, n) {
  return Pe((e * t * (1 - r) + o * r) / n);
}
function N(e, t) {
  Array.isArray(e) || (e = Lt(e)), Array.isArray(t) || (t = Lt(t));
  const o = e[3], r = t[3], n = Pt(o + r - o * r);
  return fn(Dr(e[0], o, t[0], r, n), Dr(e[1], o, t[1], r, n), Dr(e[2], o, t[2], r, n), n);
}
function G(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : Lt(e);
  return typeof t.alpha == "number" ? fn(o, r, n, t.alpha) : fn(o, r, n, i);
}
function Zo(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : Lt(e), { lightness: a = 1, alpha: l = 1 } = t;
  return mh([o * a, r * a, n * a, i * l]);
}
function Pt(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function pt(e) {
  const t = Math.round(Number(e));
  return t >= 360 || t < 0 ? 0 : t;
}
function Pe(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Ie(e) {
  const t = Math.round(Number(e));
  return t > 100 ? 100 : t < 0 ? 0 : t;
}
function Lx(e) {
  const [t, o, r] = Array.isArray(e) ? e : Lt(e);
  return gh(t, o, r);
}
function mh(e) {
  const [t, o, r] = e;
  return 3 in e ? `rgba(${Pe(t)}, ${Pe(o)}, ${Pe(r)}, ${Pt(e[3])})` : `rgba(${Pe(t)}, ${Pe(o)}, ${Pe(r)}, 1)`;
}
function Dx(e) {
  return `hsv(${pt(e[0])}, ${Ie(e[1])}%, ${Ie(e[2])}%)`;
}
function Hx(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsva(${pt(t)}, ${Ie(o)}%, ${Ie(r)}%, ${Pt(e[3])})` : `hsva(${pt(t)}, ${Ie(o)}%, ${Ie(r)}%, 1)`;
}
function _x(e) {
  return `hsl(${pt(e[0])}, ${Ie(e[1])}%, ${Ie(e[2])}%)`;
}
function Nx(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsla(${pt(t)}, ${Ie(o)}%, ${Ie(r)}%, ${Pt(e[3])})` : `hsla(${pt(t)}, ${Ie(o)}%, ${Ie(r)}%, 1)`;
}
function Wx(e) {
  if (typeof e == "string") {
    let r;
    if (r = Dn.exec(e)) return `${r[0]}FF`;
    if (r = _n.exec(e)) return r[0];
    if (r = Ln.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}FF`;
    if (r = Hn.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}${r[4]}${r[4]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  const t = `#${e.slice(0, 3).map((r) => Pe(r).toString(16).toUpperCase().padStart(2, "0")).join("")}`, o = e.length === 3 ? "FF" : Pe(e[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return t + o;
}
function Vx(e) {
  if (typeof e == "string") {
    let t;
    if (t = Dn.exec(e)) return t[0];
    if (t = _n.exec(e)) return t[0].slice(0, 7);
    if (t = Ln.exec(e) || Hn.exec(e)) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  return `#${e.slice(0, 3).map((t) => Pe(t).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function vh(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function jx(e, t) {
  const o = [];
  for (let r = 0; r < e; ++r) o.push(t);
  return o;
}
function ir(e) {
  return e.composedPath()[0];
}
const bh = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function xh(e, t, o) {
  if (e === "mousemoveoutside") {
    const r = (n) => {
      t.contains(ir(n)) || o(n);
    };
    return { mousemove: r, touchstart: r };
  } else if (e === "clickoutside") {
    let r = false;
    const n = (a) => {
      r = !t.contains(ir(a));
    }, i = (a) => {
      r && (t.contains(ir(a)) || o(a));
    };
    return { mousedown: n, mouseup: i, touchstart: n, touchend: i };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {};
}
function kl(e, t, o) {
  const r = bh[e];
  let n = r.get(t);
  n === void 0 && r.set(t, n = /* @__PURE__ */ new WeakMap());
  let i = n.get(o);
  return i === void 0 && n.set(o, i = xh(e, t, o)), i;
}
function Ch(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = kl(e, t, o);
    return Object.keys(n).forEach((i) => {
      he(i, document, n[i], r);
    }), true;
  }
  return false;
}
function yh(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = kl(e, t, o);
    return Object.keys(n).forEach((i) => {
      fe(i, document, n[i], r);
    }), true;
  }
  return false;
}
function Sh() {
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
  function n(b, w, E) {
    const $ = b[w];
    return b[w] = function() {
      return E.apply(b, arguments), $.apply(b, arguments);
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
      const { type: E, eventPhase: $, bubbles: T } = w, C = ir(w);
      if ($ === 2) return;
      const O = $ === 1 ? "capture" : "bubble";
      let H = C;
      const A = [];
      for (; H === null && (H = window), A.push(H), H !== window; ) H = H.parentNode || null;
      const W = d.capture[E], k = d.bubble[E];
      if (n(w, "stopPropagation", o), n(w, "stopImmediatePropagation", r), c(w, s), O === "capture") {
        if (W === void 0) return;
        for (let q = A.length - 1; q >= 0 && !e.has(w); --q) {
          const le = A[q], se = W.get(le);
          if (se !== void 0) {
            a.set(w, le);
            for (const me of se) {
              if (t.has(w)) break;
              me(w);
            }
          }
          if (q === 0 && !T && k !== void 0) {
            const me = k.get(le);
            if (me !== void 0) for (const ce of me) {
              if (t.has(w)) break;
              ce(w);
            }
          }
        }
      } else if (O === "bubble") {
        if (k === void 0) return;
        for (let q = 0; q < A.length && !e.has(w); ++q) {
          const le = A[q], se = k.get(le);
          if (se !== void 0) {
            a.set(w, le);
            for (const me of se) {
              if (t.has(w)) break;
              me(w);
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
      const { type: E, eventPhase: $ } = w;
      if ($ !== 2) return;
      const T = u[E];
      T !== void 0 && T.forEach((C) => C(w));
    };
    return b.displayName = "evtdUnifiedWindowEventHandler", b;
  }
  const p = f(), m = h();
  function v(b, w) {
    const E = d[b];
    return E[w] === void 0 && (E[w] = /* @__PURE__ */ new Map(), window.addEventListener(w, p, b === "capture")), E[w];
  }
  function g(b) {
    return u[b] === void 0 && (u[b] = /* @__PURE__ */ new Set(), window.addEventListener(b, m)), u[b];
  }
  function x(b, w) {
    let E = b.get(w);
    return E === void 0 && b.set(w, E = /* @__PURE__ */ new Set()), E;
  }
  function P(b, w, E, $) {
    const T = d[w][E];
    if (T !== void 0) {
      const C = T.get(b);
      if (C !== void 0 && C.has($)) return true;
    }
    return false;
  }
  function S(b, w) {
    const E = u[b];
    return !!(E !== void 0 && E.has(w));
  }
  function R(b, w, E, $) {
    let T;
    if (typeof $ == "object" && $.once === true ? T = (W) => {
      z(b, w, T, $), E(W);
    } : T = E, Ch(b, w, T, $)) return;
    const O = $ === true || typeof $ == "object" && $.capture === true ? "capture" : "bubble", H = v(O, b), A = x(H, w);
    if (A.has(T) || A.add(T), w === window) {
      const W = g(b);
      W.has(T) || W.add(T);
    }
  }
  function z(b, w, E, $) {
    if (yh(b, w, E, $)) return;
    const C = $ === true || typeof $ == "object" && $.capture === true, O = C ? "capture" : "bubble", H = v(O, b), A = x(H, w);
    if (w === window && !P(w, C ? "bubble" : "capture", b, E) && S(b, E)) {
      const k = u[b];
      k.delete(E), k.size === 0 && (window.removeEventListener(b, m), u[b] = void 0);
    }
    A.has(E) && A.delete(E), A.size === 0 && H.delete(w), H.size === 0 && (window.removeEventListener(b, p, O === "capture"), d[O][b] = void 0);
  }
  return { on: R, off: z };
}
const { on: he, off: fe } = Sh();
function wh(e) {
  const t = _(!!e.value);
  if (t.value) return Bt(t);
  const o = Re(e, (r) => {
    r && (t.value = true, o());
  });
  return Bt(t);
}
function ot(e) {
  const t = B(e), o = _(t.value);
  return Re(t, (r) => {
    o.value = r;
  }), typeof e == "function" ? o : { __v_isRef: true, get value() {
    return o.value;
  }, set value(r) {
    e.set(r);
  } };
}
function Nn() {
  return mo() !== null;
}
const Wn = typeof window < "u";
let uo, Io;
const $h = () => {
  var e, t;
  uo = Wn ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, Io = false, uo !== void 0 ? uo.then(() => {
    Io = true;
  }) : Io = true;
};
$h();
function Ph(e) {
  if (Io) return;
  let t = false;
  st(() => {
    Io || (uo == null ? void 0 : uo.then(() => {
      t || e();
    }));
  }), Ne(() => {
    t = true;
  });
}
const Po = _(null);
function Vi(e) {
  if (e.clientX > 0 || e.clientY > 0) Po.value = { x: e.clientX, y: e.clientY };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: o, top: r, width: n, height: i } = t.getBoundingClientRect();
      o > 0 || r > 0 ? Po.value = { x: o + n / 2, y: r + i / 2 } : Po.value = { x: 0, y: 0 };
    } else Po.value = null;
  }
}
let Qo = 0, ji = true;
function Eh() {
  if (!Wn) return Bt(_(null));
  Qo === 0 && he("click", document, Vi, true);
  const e = () => {
    Qo += 1;
  };
  return ji && (ji = Nn()) ? (Jt(e), Ne(() => {
    Qo -= 1, Qo === 0 && fe("click", document, Vi, true);
  })) : e(), Bt(Po);
}
const Th = _(void 0);
let Jo = 0;
function Gi() {
  Th.value = Date.now();
}
let Ui = true;
function Rh(e) {
  if (!Wn) return Bt(_(false));
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
  Jo === 0 && he("click", window, Gi, true);
  const i = () => {
    Jo += 1, he("click", window, n, true);
  };
  return Ui && (Ui = Nn()) ? (Jt(i), Ne(() => {
    Jo -= 1, Jo === 0 && fe("click", window, Gi, true), fe("click", window, n, true), r();
  })) : i(), Bt(t);
}
function Fl(e, t) {
  return Re(e, (o) => {
    o !== void 0 && (t.value = o);
  }), B(() => e.value === void 0 ? t.value : e.value);
}
function yr() {
  const e = _(false);
  return st(() => {
    e.value = true;
  }), Bt(e);
}
function Ll(e, t) {
  return B(() => {
    for (const o of t) if (e[o] !== void 0) return e[o];
    return e[t[t.length - 1]];
  });
}
const Ih = (typeof window > "u" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function zh() {
  return Ih;
}
function Ah(e = {}, t) {
  const o = Na({ ctrl: false, command: false, win: false, shift: false, tab: false }), { keydown: r, keyup: n } = e, i = (s) => {
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
    (t === void 0 || t.value) && (he("keydown", document, i), he("keyup", document, a)), t !== void 0 && Re(t, (s) => {
      s ? (he("keydown", document, i), he("keyup", document, a)) : (fe("keydown", document, i), fe("keyup", document, a));
    });
  };
  return Nn() ? (Jt(l), Ne(() => {
    (t === void 0 || t.value) && (fe("keydown", document, i), fe("keyup", document, a));
  })) : l(), Bt(o);
}
function Gx(e) {
  return e;
}
const Ux = "n-internal-select-menu", Oh = "n-internal-select-menu-body", Sr = "n-drawer-body", Kx = "n-drawer", wr = "n-modal-body", Mh = "n-modal-provider", Dl = "n-modal", No = "n-popover-body", Hl = "__disabled__";
function go(e) {
  const t = ie(wr, null), o = ie(Sr, null), r = ie(No, null), n = ie(Oh, null), i = _();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    st(() => {
      he("fullscreenchange", document, a);
    }), Ne(() => {
      fe("fullscreenchange", document, a);
    });
  }
  return ot(() => {
    var a;
    const { to: l } = e;
    return l !== void 0 ? l === false ? Hl : l === true ? i.value || "body" : l : (t == null ? void 0 : t.value) ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : (o == null ? void 0 : o.value) ? o.value : (r == null ? void 0 : r.value) ? r.value : (n == null ? void 0 : n.value) ? n.value : l ?? (i.value || "body");
  });
}
go.tdkey = Hl;
go.propTo = { type: [String, Object, Boolean], default: void 0 };
function Bh(e, t, o) {
  const r = _(e.value);
  let n = null;
  return Re(e, (i) => {
    n !== null && window.clearTimeout(n), i === true ? o && !o.value ? r.value = true : n = window.setTimeout(() => {
      r.value = true;
    }, t) : r.value = false;
  }), r;
}
const Wo = typeof document < "u" && typeof window < "u", Vn = _(false);
function Ki() {
  Vn.value = true;
}
function qi() {
  Vn.value = false;
}
let yo = 0;
function kh() {
  return Wo && (Jt(() => {
    yo || (window.addEventListener("compositionstart", Ki), window.addEventListener("compositionend", qi)), yo++;
  }), Ne(() => {
    yo <= 1 ? (window.removeEventListener("compositionstart", Ki), window.removeEventListener("compositionend", qi), yo = 0) : yo--;
  })), Vn;
}
let ro = 0, Yi = "", Xi = "", Zi = "", Qi = "";
const Ji = _("0px");
function Fh(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let o, r = false;
  const n = () => {
    t.style.marginRight = Yi, t.style.overflow = Xi, t.style.overflowX = Zi, t.style.overflowY = Qi, Ji.value = "0px";
  };
  st(() => {
    o = Re(e, (i) => {
      if (i) {
        if (!ro) {
          const a = window.innerWidth - t.offsetWidth;
          a > 0 && (Yi = t.style.marginRight, t.style.marginRight = `${a}px`, Ji.value = `${a}px`), Xi = t.style.overflow, Zi = t.style.overflowX, Qi = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        r = true, ro++;
      } else ro--, ro || n(), r = false;
    }, { immediate: true });
  }), Ne(() => {
    o == null ? void 0 : o(), r && (ro--, ro || n(), r = false);
  });
}
function Lh(e) {
  const t = { isDeactivated: false };
  let o = false;
  return _a(() => {
    if (t.isDeactivated = false, !o) {
      o = true;
      return;
    }
    e();
  }), Rn(() => {
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
        (typeof r == "string" || typeof r == "number") && o.push(dr(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        pn(r, t, o);
        return;
      }
      if (r.type === eo) {
        if (r.children === null) return;
        Array.isArray(r.children) && pn(r.children, t, o);
      } else r.type !== In && o.push(r);
    }
  }), o;
}
function ea(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  const n = pn(r());
  if (n.length === 1) return n[0];
  throw new Error(`[vueuc/${e}]: slot[${o}] should have exactly one child.`);
}
let At = null;
function _l() {
  if (At === null && (At = document.getElementById("v-binder-view-measurer"), At === null)) {
    At = document.createElement("div"), At.id = "v-binder-view-measurer";
    const { style: e } = At;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(At);
  }
  return At.getBoundingClientRect();
}
function Dh(e, t) {
  const o = _l();
  return { top: t, left: e, height: 0, width: 0, right: o.width - e, bottom: o.height - t };
}
function Hr(e) {
  const t = e.getBoundingClientRect(), o = _l();
  return { left: t.left - o.left, top: t.top - o.top, bottom: o.height + o.top - t.bottom, right: o.width + o.left - t.right, width: t.width, height: t.height };
}
function Hh(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Nl(e) {
  if (e === null) return null;
  const t = Hh(e);
  if (t === null) return null;
  if (t.nodeType === 9) return document;
  if (t.nodeType === 1) {
    const { overflow: o, overflowX: r, overflowY: n } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(o + n + r)) return t;
  }
  return Nl(t);
}
const Wl = ee({ name: "Binder", props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(e) {
  var t;
  Te("VBinder", (t = mo()) === null || t === void 0 ? void 0 : t.proxy);
  const o = ie("VBinder", null), r = _(null), n = (g) => {
    r.value = g, o && e.syncTargetWithParent && o.setTargetRef(g);
  };
  let i = [];
  const a = () => {
    let g = r.value;
    for (; g = Nl(g), g !== null; ) i.push(g);
    for (const x of i) he("scroll", x, u, true);
  }, l = () => {
    for (const g of i) fe("scroll", g, u, true);
    i = [];
  }, s = /* @__PURE__ */ new Set(), c = (g) => {
    s.size === 0 && a(), s.has(g) || s.add(g);
  }, d = (g) => {
    s.has(g) && s.delete(g), s.size === 0 && l();
  }, u = () => {
    lh(f);
  }, f = () => {
    s.forEach((g) => g());
  }, h = /* @__PURE__ */ new Set(), p = (g) => {
    h.size === 0 && he("resize", window, v), h.has(g) || h.add(g);
  }, m = (g) => {
    h.has(g) && h.delete(g), h.size === 0 && fe("resize", window, v);
  }, v = () => {
    h.forEach((g) => g());
  };
  return Ne(() => {
    fe("resize", window, v), l();
  }), { targetRef: r, setTargetRef: n, addScrollListener: c, removeScrollListener: d, addResizeListener: p, removeResizeListener: m };
}, render() {
  return hn("binder", this.$slots);
} }), Vl = ee({ name: "Target", setup() {
  const { setTargetRef: e, syncTarget: t } = ie("VBinder");
  return { syncTarget: t, setTargetDirective: { mounted: e, updated: e } };
}, render() {
  const { syncTarget: e, setTargetDirective: t } = this;
  return e ? Zt(ea("follower", this.$slots), [[t]]) : ea("follower", this.$slots);
} }), no = "@@mmoContext", _h = { mounted(e, { value: t }) {
  e[no] = { handler: void 0 }, typeof t == "function" && (e[no].handler = t, he("mousemoveoutside", e, t));
}, updated(e, { value: t }) {
  const o = e[no];
  typeof t == "function" ? o.handler ? o.handler !== t && (fe("mousemoveoutside", e, o.handler), o.handler = t, he("mousemoveoutside", e, t)) : (e[no].handler = t, he("mousemoveoutside", e, t)) : o.handler && (fe("mousemoveoutside", e, o.handler), o.handler = void 0);
}, unmounted(e) {
  const { handler: t } = e[no];
  t && fe("mousemoveoutside", e, t), e[no].handler = void 0;
} }, io = "@@coContext", gn = { mounted(e, { value: t, modifiers: o }) {
  e[io] = { handler: void 0 }, typeof t == "function" && (e[io].handler = t, he("clickoutside", e, t, { capture: o.capture }));
}, updated(e, { value: t, modifiers: o }) {
  const r = e[io];
  typeof t == "function" ? r.handler ? r.handler !== t && (fe("clickoutside", e, r.handler, { capture: o.capture }), r.handler = t, he("clickoutside", e, t, { capture: o.capture })) : (e[io].handler = t, he("clickoutside", e, t, { capture: o.capture })) : r.handler && (fe("clickoutside", e, r.handler, { capture: o.capture }), r.handler = void 0);
}, unmounted(e, { modifiers: t }) {
  const { handler: o } = e[io];
  o && fe("clickoutside", e, o, { capture: t.capture }), e[io].handler = void 0;
} };
function Nh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class Wh {
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
    r.has(t) ? r.delete(t) : o === void 0 && Nh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const _r = new Wh(), ao = "@@ziContext", jn = { mounted(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o;
  e[ao] = { enabled: !!n, initialized: false }, n && (_r.ensureZIndex(e, r), e[ao].initialized = true);
}, updated(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o, i = e[ao].enabled;
  n && !i && (_r.ensureZIndex(e, r), e[ao].initialized = true), e[ao].enabled = !!n;
}, unmounted(e, t) {
  if (!e[ao].initialized) return;
  const { value: o = {} } = t, { zIndex: r } = o;
  _r.unregister(e, r);
} }, Vh = "@css-render/vue3-ssr";
function jh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Gh(e, t, o) {
  const { styles: r, ids: n } = o;
  n.has(e) || r !== null && (n.add(e), r.push(jh(e, t)));
}
const Uh = typeof document < "u";
function bo() {
  if (Uh) return;
  const e = ie(Vh, null);
  if (e !== null) return { adapter: (t, o) => Gh(t, o, e), context: e };
}
function ta(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: Eo } = Pl(), jl = "vueuc-style";
function oa(e) {
  return typeof e == "string" ? document.querySelector(e) : e() || null;
}
const Gl = ee({ name: "LazyTeleport", props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(e) {
  return { showTeleport: wh(ge(e, "show")), mergedTo: B(() => {
    const { to: t } = e;
    return t ?? "body";
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? hn("lazy-teleport", this.$slots) : y(bc, { disabled: this.disabled, to: this.mergedTo }, hn("lazy-teleport", this.$slots)) : null;
} }), er = { top: "bottom", bottom: "top", left: "right", right: "left" }, ra = { start: "end", center: "center", end: "start" }, Nr = { top: "height", bottom: "height", left: "width", right: "width" }, Kh = { "bottom-start": "top left", bottom: "top center", "bottom-end": "top right", "top-start": "bottom left", top: "bottom center", "top-end": "bottom right", "right-start": "top left", right: "center left", "right-end": "bottom left", "left-start": "top right", left: "center right", "left-end": "bottom right" }, qh = { "bottom-start": "bottom left", bottom: "bottom center", "bottom-end": "bottom right", "top-start": "top left", top: "top center", "top-end": "top right", "right-start": "top right", right: "center right", "right-end": "bottom right", "left-start": "top left", left: "center left", "left-end": "bottom left" }, Yh = { "bottom-start": "right", "bottom-end": "left", "top-start": "right", "top-end": "left", "right-start": "bottom", "right-end": "top", "left-start": "bottom", "left-end": "top" }, na = { top: true, bottom: false, left: true, right: false }, ia = { top: "end", bottom: "start", left: "end", right: "start" };
function Xh(e, t, o, r, n, i) {
  if (!n || i) return { placement: e, top: 0, left: 0 };
  const [a, l] = e.split("-");
  let s = l ?? "center", c = { top: 0, left: 0 };
  const d = (h, p, m) => {
    let v = 0, g = 0;
    const x = o[h] - t[p] - t[h];
    return x > 0 && r && (m ? g = na[p] ? x : -x : v = na[p] ? x : -x), { left: v, top: g };
  }, u = a === "left" || a === "right";
  if (s !== "center") {
    const h = Yh[e], p = er[h], m = Nr[h];
    if (o[m] > t[m]) {
      if (t[h] + t[m] < o[m]) {
        const v = (o[m] - t[m]) / 2;
        t[h] < v || t[p] < v ? t[h] < t[p] ? (s = ra[l], c = d(m, p, u)) : c = d(m, h, u) : s = "center";
      }
    } else o[m] < t[m] && t[p] < 0 && t[h] > t[p] && (s = ra[l]);
  } else {
    const h = a === "bottom" || a === "top" ? "left" : "top", p = er[h], m = Nr[h], v = (o[m] - t[m]) / 2;
    (t[h] < v || t[p] < v) && (t[h] > t[p] ? (s = ia[h], c = d(m, h, u)) : (s = ia[p], c = d(m, p, u)));
  }
  let f = a;
  return t[a] < o[Nr[a]] && t[a] < t[er[a]] && (f = er[a]), { placement: s !== "center" ? `${f}-${s}` : f, left: c.left, top: c.top };
}
function Zh(e, t) {
  return t ? qh[e] : Kh[e];
}
function Qh(e, t, o, r, n, i) {
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
const Jh = Eo([Eo(".v-binder-follower-container", { position: "absolute", left: "0", right: "0", top: "0", height: "0", pointerEvents: "none", zIndex: "auto" }), Eo(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [Eo("> *", { pointerEvents: "all" })])]), Ul = ee({ name: "Follower", inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: "bottom" }, syncTrigger: { type: Array, default: ["resize", "scroll"] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(e) {
  const t = ie("VBinder"), o = ot(() => e.enabled !== void 0 ? e.enabled : e.show), r = _(null), n = _(null), i = () => {
    const { syncTrigger: f } = e;
    f.includes("scroll") && t.addScrollListener(s), f.includes("resize") && t.addResizeListener(s);
  }, a = () => {
    t.removeScrollListener(s), t.removeResizeListener(s);
  };
  st(() => {
    o.value && (s(), i());
  });
  const l = bo();
  Jh.mount({ id: "vueuc/binder", head: true, anchorMetaName: jl, ssr: l }), Ne(() => {
    a();
  }), Ph(() => {
    o.value && s();
  });
  const s = () => {
    if (!o.value) return;
    const f = r.value;
    if (f === null) return;
    const h = t.targetRef, { x: p, y: m, overlap: v } = e, g = p !== void 0 && m !== void 0 ? Dh(p, m) : Hr(h);
    f.style.setProperty("--v-target-width", `${Math.round(g.width)}px`), f.style.setProperty("--v-target-height", `${Math.round(g.height)}px`);
    const { width: x, minWidth: P, placement: S, internalShift: R, flip: z } = e;
    f.setAttribute("v-placement", S), v ? f.setAttribute("v-overlap", "") : f.removeAttribute("v-overlap");
    const { style: b } = f;
    x === "target" ? b.width = `${g.width}px` : x !== void 0 ? b.width = x : b.width = "", P === "target" ? b.minWidth = `${g.width}px` : P !== void 0 ? b.minWidth = P : b.minWidth = "";
    const w = Hr(f), E = Hr(n.value), { left: $, top: T, placement: C } = Xh(S, g, w, R, z, v), O = Zh(C, v), { left: H, top: A, transform: W } = Qh(C, E, g, T, $, v);
    f.setAttribute("v-placement", C), f.style.setProperty("--v-offset-left", `${Math.round($)}px`), f.style.setProperty("--v-offset-top", `${Math.round(T)}px`), f.style.transform = `translateX(${H}) translateY(${A}) ${W}`, f.style.setProperty("--v-transform-origin", O), f.style.transformOrigin = O;
  };
  Re(o, (f) => {
    f ? (i(), c()) : a();
  });
  const c = () => {
    Xt().then(s).catch((f) => console.error(f));
  };
  ["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach((f) => {
    Re(ge(e, f), s);
  }), ["teleportDisabled"].forEach((f) => {
    Re(ge(e, f), c);
  }), Re(ge(e, "syncTrigger"), (f) => {
    f.includes("resize") ? t.addResizeListener(s) : t.removeResizeListener(s), f.includes("scroll") ? t.addScrollListener(s) : t.removeScrollListener(s);
  });
  const d = yr(), u = ot(() => {
    const { to: f } = e;
    if (f !== void 0) return f;
    d.value;
  });
  return { VBinder: t, mergedEnabled: o, offsetContainerRef: n, followerRef: r, mergedTo: u, syncPosition: s };
}, render() {
  return y(Gl, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var e, t;
    const o = y("div", { class: ["v-binder-follower-container", this.containerClass], ref: "offsetContainerRef" }, [y("div", { class: "v-binder-follower-content", ref: "followerRef" }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))]);
    return this.zindexable ? Zt(o, [[jn, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : o;
  } });
} });
var Kt = [], ep = function() {
  return Kt.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, tp = function() {
  return Kt.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, aa = "ResizeObserver loop completed with undelivered notifications.", op = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: aa }) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = aa), window.dispatchEvent(e);
}, Fo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Fo || (Fo = {}));
var qt = function(e) {
  return Object.freeze(e);
}, rp = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.inlineSize = t, this.blockSize = o, qt(this);
  }
  return e;
})(), Kl = (function() {
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
}, ql = function(e) {
  if (Gn(e)) {
    var t = e.getBBox(), o = t.width, r = t.height;
    return !o && !r;
  }
  var n = e, i = n.offsetWidth, a = n.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, la = function(e) {
  var t;
  if (e instanceof Element) return true;
  var o = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(o && e instanceof o.Element);
}, np = function(e) {
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
}, zo = typeof window < "u" ? window : {}, tr = /* @__PURE__ */ new WeakMap(), sa = /auto|scroll/, ip = /^tb|vertical/, ap = /msie|trident/i.test(zo.navigator && zo.navigator.userAgent), ct = function(e) {
  return parseFloat(e || "0");
}, fo = function(e, t, o) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), o === void 0 && (o = false), new rp((o ? t : e) || 0, (o ? e : t) || 0);
}, ca = qt({ devicePixelContentBoxSize: fo(), borderBoxSize: fo(), contentBoxSize: fo(), contentRect: new Kl(0, 0, 0, 0) }), Yl = function(e, t) {
  if (t === void 0 && (t = false), tr.has(e) && !t) return tr.get(e);
  if (ql(e)) return tr.set(e, ca), ca;
  var o = getComputedStyle(e), r = Gn(e) && e.ownerSVGElement && e.getBBox(), n = !ap && o.boxSizing === "border-box", i = ip.test(o.writingMode || ""), a = !r && sa.test(o.overflowY || ""), l = !r && sa.test(o.overflowX || ""), s = r ? 0 : ct(o.paddingTop), c = r ? 0 : ct(o.paddingRight), d = r ? 0 : ct(o.paddingBottom), u = r ? 0 : ct(o.paddingLeft), f = r ? 0 : ct(o.borderTopWidth), h = r ? 0 : ct(o.borderRightWidth), p = r ? 0 : ct(o.borderBottomWidth), m = r ? 0 : ct(o.borderLeftWidth), v = u + c, g = s + d, x = m + h, P = f + p, S = l ? e.offsetHeight - P - e.clientHeight : 0, R = a ? e.offsetWidth - x - e.clientWidth : 0, z = n ? v + x : 0, b = n ? g + P : 0, w = r ? r.width : ct(o.width) - z - R, E = r ? r.height : ct(o.height) - b - S, $ = w + v + R + x, T = E + g + S + P, C = qt({ devicePixelContentBoxSize: fo(Math.round(w * devicePixelRatio), Math.round(E * devicePixelRatio), i), borderBoxSize: fo($, T, i), contentBoxSize: fo(w, E, i), contentRect: new Kl(u, s, w, E) });
  return tr.set(e, C), C;
}, Xl = function(e, t, o) {
  var r = Yl(e, o), n = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case Fo.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case Fo.BORDER_BOX:
      return n;
    default:
      return i;
  }
}, lp = /* @__PURE__ */ (function() {
  function e(t) {
    var o = Yl(t);
    this.target = t, this.contentRect = o.contentRect, this.borderBoxSize = qt([o.borderBoxSize]), this.contentBoxSize = qt([o.contentBoxSize]), this.devicePixelContentBoxSize = qt([o.devicePixelContentBoxSize]);
  }
  return e;
})(), Zl = function(e) {
  if (ql(e)) return 1 / 0;
  for (var t = 0, o = e.parentNode; o; ) t += 1, o = o.parentNode;
  return t;
}, sp = function() {
  var e = 1 / 0, t = [];
  Kt.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var l = [];
      a.activeTargets.forEach(function(c) {
        var d = new lp(c.target), u = Zl(c.target);
        l.push(d), c.lastReportedSize = Xl(c.target, c.observedBox), u < e && (e = u);
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
}, da = function(e) {
  Kt.forEach(function(o) {
    o.activeTargets.splice(0, o.activeTargets.length), o.skippedTargets.splice(0, o.skippedTargets.length), o.observationTargets.forEach(function(n) {
      n.isActive() && (Zl(n.target) > e ? o.activeTargets.push(n) : o.skippedTargets.push(n));
    });
  });
}, cp = function() {
  var e = 0;
  for (da(e); ep(); ) e = sp(), da(e);
  return tp() && op(), e > 0;
}, Wr, Ql = [], dp = function() {
  return Ql.splice(0).forEach(function(e) {
    return e();
  });
}, up = function(e) {
  if (!Wr) {
    var t = 0, o = document.createTextNode(""), r = { characterData: true };
    new MutationObserver(function() {
      return dp();
    }).observe(o, r), Wr = function() {
      o.textContent = "".concat(t ? t-- : t++);
    };
  }
  Ql.push(e), Wr();
}, fp = function(e) {
  up(function() {
    requestAnimationFrame(e);
  });
}, ar = 0, hp = function() {
  return !!ar;
}, pp = 250, gp = { attributes: true, characterData: true, childList: true, subtree: true }, ua = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], fa = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Vr = false, mp = (function() {
  function e() {
    var t = this;
    this.stopped = true, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var o = this;
    if (t === void 0 && (t = pp), !Vr) {
      Vr = true;
      var r = fa(t);
      fp(function() {
        var n = false;
        try {
          n = cp();
        } finally {
          if (Vr = false, t = r - fa(), !hp()) return;
          n ? o.run(1e3) : t > 0 ? o.run(t) : o.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, o = function() {
      return t.observer && t.observer.observe(document.body, gp);
    };
    document.body ? o() : zo.addEventListener("DOMContentLoaded", o);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), ua.forEach(function(o) {
      return zo.addEventListener(o, t.listener, true);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), ua.forEach(function(o) {
      return zo.removeEventListener(o, t.listener, true);
    }), this.stopped = true);
  }, e;
})(), mn = new mp(), ha = function(e) {
  !ar && e > 0 && mn.start(), ar += e, !ar && mn.stop();
}, vp = function(e) {
  return !Gn(e) && !np(e) && getComputedStyle(e).display === "inline";
}, bp = (function() {
  function e(t, o) {
    this.target = t, this.observedBox = o || Fo.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e.prototype.isActive = function() {
    var t = Xl(this.target, this.observedBox, true);
    return vp(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
})(), xp = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = o;
  }
  return e;
})(), or = /* @__PURE__ */ new WeakMap(), pa = function(e, t) {
  for (var o = 0; o < e.length; o += 1) if (e[o].target === t) return o;
  return -1;
}, rr = (function() {
  function e() {
  }
  return e.connect = function(t, o) {
    var r = new xp(t, o);
    or.set(t, r);
  }, e.observe = function(t, o, r) {
    var n = or.get(t), i = n.observationTargets.length === 0;
    pa(n.observationTargets, o) < 0 && (i && Kt.push(n), n.observationTargets.push(new bp(o, r && r.box)), ha(1), mn.schedule());
  }, e.unobserve = function(t, o) {
    var r = or.get(t), n = pa(r.observationTargets, o), i = r.observationTargets.length === 1;
    n >= 0 && (i && Kt.splice(Kt.indexOf(r), 1), r.observationTargets.splice(n, 1), ha(-1));
  }, e.disconnect = function(t) {
    var o = this, r = or.get(t);
    r.observationTargets.slice().forEach(function(n) {
      return o.unobserve(t, n.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
})(), Cp = (function() {
  function e(t) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    rr.connect(this, t);
  }
  return e.prototype.observe = function(t, o) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!la(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    rr.observe(this, t, o);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!la(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    rr.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    rr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
})();
class yp {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Cp)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const ga = new yp(), ma = ee({ name: "ResizeObserver", props: { onResize: Function }, setup(e) {
  let t = false;
  const o = mo().proxy;
  function r(n) {
    const { onResize: i } = e;
    i !== void 0 && i(n);
  }
  st(() => {
    const n = o.$el;
    if (n === void 0) {
      ta("resize-observer", "$el does not exist.");
      return;
    }
    if (n.nextElementSibling !== n.nextSibling && n.nodeType === 3 && n.nodeValue !== "") {
      ta("resize-observer", "$el can not be observed (it may be a text node).");
      return;
    }
    n.nextElementSibling !== null && (ga.registerHandler(n.nextElementSibling, r), t = true);
  }), Ne(() => {
    t && ga.unregisterHandler(o.$el.nextElementSibling);
  });
}, render() {
  return Wa(this.$slots, "default");
} }), xt = "v-hidden", Sp = Eo("[v-hidden]", { display: "none!important" }), qx = ee({ name: "Overflow", props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(e, { slots: t }) {
  const o = _(null), r = _(null);
  function n(a) {
    const { value: l } = o, { getCounter: s, getTail: c } = e;
    let d;
    if (s !== void 0 ? d = s() : d = r.value, !l || !d) return;
    d.hasAttribute(xt) && d.removeAttribute(xt);
    const { children: u } = l;
    if (a.showAllItemsBeforeCalculate) for (const P of u) P.hasAttribute(xt) && P.removeAttribute(xt);
    const f = l.offsetWidth, h = [], p = t.tail ? c == null ? void 0 : c() : null;
    let m = p ? p.offsetWidth : 0, v = false;
    const g = l.children.length - (t.tail ? 1 : 0);
    for (let P = 0; P < g - 1; ++P) {
      if (P < 0) continue;
      const S = u[P];
      if (v) {
        S.hasAttribute(xt) || S.setAttribute(xt, "");
        continue;
      } else S.hasAttribute(xt) && S.removeAttribute(xt);
      const R = S.offsetWidth;
      if (m += R, h[P] = R, m > f) {
        const { updateCounter: z } = e;
        for (let b = P; b >= 0; --b) {
          const w = g - 1 - b;
          z !== void 0 ? z(w) : d.textContent = `${w}`;
          const E = d.offsetWidth;
          if (m -= h[b], m + E <= f || b === 0) {
            v = true, P = b - 1, p && (P === -1 ? (p.style.maxWidth = `${f - E}px`, p.style.boxSizing = "border-box") : p.style.maxWidth = "");
            const { onUpdateCount: $ } = e;
            $ && $(w);
            break;
          }
        }
      }
    }
    const { onUpdateOverflow: x } = e;
    v ? x !== void 0 && x(true) : (x !== void 0 && x(false), d.setAttribute(xt, ""));
  }
  const i = bo();
  return Sp.mount({ id: "vueuc/overflow", head: true, anchorMetaName: jl, ssr: i }), st(() => n({ showAllItemsBeforeCalculate: false })), { selfRef: o, counterRef: r, sync: n };
}, render() {
  const { $slots: e } = this;
  return Xt(() => this.sync({ showAllItemsBeforeCalculate: false })), y("div", { class: "v-overflow", ref: "selfRef" }, [Wa(e, "default"), e.counter ? e.counter() : y("span", { style: { display: "inline-block" }, ref: "counterRef" }), e.tail ? e.tail() : null]);
} });
function Jl(e) {
  return e instanceof HTMLElement;
}
function es(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const o = e.childNodes[t];
    if (Jl(o) && (os(o) || es(o))) return true;
  }
  return false;
}
function ts(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const o = e.childNodes[t];
    if (Jl(o) && (os(o) || ts(o))) return true;
  }
  return false;
}
function os(e) {
  if (!wp(e)) return false;
  try {
    e.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === e;
}
function wp(e) {
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
let So = [];
const rs = ee({ name: "FocusTrap", props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(e) {
  const t = vh(), o = _(null), r = _(null);
  let n = false, i = false;
  const a = typeof document > "u" ? null : document.activeElement;
  function l() {
    return So[So.length - 1] === t;
  }
  function s(v) {
    var g;
    v.code === "Escape" && l() && ((g = e.onEsc) === null || g === void 0 || g.call(e, v));
  }
  st(() => {
    Re(() => e.active, (v) => {
      v ? (u(), he("keydown", document, s)) : (fe("keydown", document, s), n && f());
    }, { immediate: true });
  }), Ne(() => {
    fe("keydown", document, s), n && f();
  });
  function c(v) {
    if (!i && l()) {
      const g = d();
      if (g === null || g.contains(ko(v))) return;
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
      if (So.push(t), e.autoFocus) {
        const { initialFocusTo: g } = e;
        g === void 0 ? h("first") : (v = oa(g)) === null || v === void 0 || v.focus({ preventScroll: true });
      }
      n = true, document.addEventListener("focus", c, true);
    }
  }
  function f() {
    var v;
    if (e.disabled || (document.removeEventListener("focus", c, true), So = So.filter((x) => x !== t), l())) return;
    const { finalFocusTo: g } = e;
    g !== void 0 ? (v = oa(g)) === null || v === void 0 || v.focus({ preventScroll: true }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = true, a.focus({ preventScroll: true }), i = false);
  }
  function h(v) {
    if (l() && e.active) {
      const g = o.value, x = r.value;
      if (g !== null && x !== null) {
        const P = d();
        if (P == null || P === x) {
          i = true, g.focus({ preventScroll: true }), i = false;
          return;
        }
        i = true;
        const S = v === "first" ? es(P) : ts(P);
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
  return y(eo, null, [y("div", { "aria-hidden": "true", tabindex: t ? "0" : "-1", ref: "focusableStartRef", style: o, onFocus: this.handleStartFocus }), e(), y("div", { "aria-hidden": "true", style: o, ref: "focusableEndRef", tabindex: t ? "0" : "-1", onFocus: this.handleEndFocus })]);
} });
function va(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const $p = /^(\d|\.)+$/, ba = /(\d|\.)+/;
function lr(e, { c: t = 1, offset: o = 0, attachPx: r = true } = {}) {
  if (typeof e == "number") {
    const n = (e + o) * t;
    return n === 0 ? "0" : `${n}px`;
  } else if (typeof e == "string") if ($p.test(e)) {
    const n = (Number(e) + o) * t;
    return r ? n === 0 ? "0" : `${n}px` : `${n}`;
  } else {
    const n = ba.exec(e);
    return n ? e.replace(ba, String((Number(n[0]) + o) * t)) : e;
  }
  return e;
}
function xa(e) {
  const { left: t, right: o, top: r, bottom: n } = jt(e);
  return `${r} ${t} ${n} ${o}`;
}
let jr;
function Pp() {
  return jr === void 0 && (jr = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), jr;
}
const ns = /* @__PURE__ */ new WeakSet();
function Yx(e) {
  ns.add(e);
}
function Ep(e) {
  return !ns.has(e);
}
function Qt(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function Xx(e, t, o) {
  console.error(`[naive/${e}]: ${t}`, o);
}
function Tp(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function Ke(e, ...t) {
  if (Array.isArray(e)) e.forEach((o) => Ke(o, ...t));
  else return e(...t);
}
function Rp(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function hr(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(dr(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        hr(r, t, o);
        return;
      }
      if (r.type === eo) {
        if (r.children === null) return;
        Array.isArray(r.children) && hr(r.children, t, o);
      } else {
        if (r.type === In && t) return;
        o.push(r);
      }
    }
  }), o;
}
function Ip(e, t = "default", o = void 0) {
  const r = e[t];
  if (!r) return Qt("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = hr(r(o));
  return n.length === 1 ? n[0] : (Qt("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function zp(e, t, o) {
  if (!t) return null;
  const r = hr(t(o));
  return r.length === 1 ? r[0] : (Qt("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function Lo(e, t = [], o) {
  const r = {};
  return t.forEach((n) => {
    r[n] = e[n];
  }), Object.assign(r, o);
}
function Un(e) {
  return Object.keys(e);
}
function Zx(e, t = [], o) {
  const r = {};
  return Object.getOwnPropertyNames(e).forEach((i) => {
    t.includes(i) || (r[i] = e[i]);
  }), Object.assign(r, o);
}
function ft(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? dr(e) : typeof e == "number" ? dr(String(e)) : null;
}
function tt(e) {
  return e.some((t) => xc(t) ? !(t.type === In || t.type === eo && !tt(t.children)) : true) ? e : null;
}
function Ca(e, t) {
  return e && tt(e()) || t();
}
function Qx(e, t, o) {
  return e && tt(e(t)) || o(t);
}
function Ge(e, t) {
  const o = e && tt(e());
  return t(o || null);
}
function Jx(e, t, o) {
  const r = e && tt(e(t));
  return o(r || null);
}
function vn(e) {
  return !(e && tt(e()));
}
const ya = ee({ render() {
  var e, t;
  return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
} }), Tt = "n-config-provider", pr = "n";
function vt(e = {}, t = { defaultBordered: true }) {
  const o = ie(Tt, null);
  return { inlineThemeDisabled: o == null ? void 0 : o.inlineThemeDisabled, mergedRtlRef: o == null ? void 0 : o.mergedRtlRef, mergedComponentPropsRef: o == null ? void 0 : o.mergedComponentPropsRef, mergedBreakpointsRef: o == null ? void 0 : o.mergedBreakpointsRef, mergedBorderedRef: B(() => {
    var r, n;
    const { bordered: i } = e;
    return i !== void 0 ? i : (n = (r = o == null ? void 0 : o.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && n !== void 0 ? n : true;
  }), mergedClsPrefixRef: o ? o.mergedClsPrefixRef : wt(pr), namespaceRef: B(() => o == null ? void 0 : o.mergedNamespaceRef.value) };
}
function is() {
  const e = ie(Tt, null);
  return e ? e.mergedClsPrefixRef : wt(pr);
}
function Rt(e, t, o, r) {
  o || Tp("useThemeClass", "cssVarsRef is not passed");
  const n = ie(Tt, null), i = n == null ? void 0 : n.mergedThemeHashRef, a = n == null ? void 0 : n.styleMountTarget, l = _(""), s = bo();
  let c;
  const d = `__${e}`, u = () => {
    let f = d;
    const h = t ? t.value : void 0, p = i == null ? void 0 : i.value;
    p && (f += `-${p}`), h && (f += `-${h}`);
    const { themeOverrides: m, builtinThemeOverrides: v } = r;
    m && (f += `-${Mo(JSON.stringify(m))}`), v && (f += `-${Mo(JSON.stringify(v))}`), l.value = f, c = () => {
      const g = o.value;
      let x = "";
      for (const P in g) x += `${P}: ${g[P]};`;
      F(`.${f}`, x).mount({ id: f, ssr: s, parent: a }), c = void 0;
    };
  };
  return vo(() => {
    u();
  }), { themeClass: l, onRender: () => {
    c == null ? void 0 : c();
  } };
}
const Sa = "n-form-item";
function Ap(e, { defaultSize: t = "medium", mergedSize: o, mergedDisabled: r } = {}) {
  const n = ie(Sa, null);
  Te(Sa, null);
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
  return Ne(() => {
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
const Do = "naive-ui-style";
function Vo(e, t, o) {
  if (!t) return;
  const r = bo(), n = B(() => {
    const { value: l } = t;
    if (!l) return;
    const s = l[e];
    if (s) return s;
  }), i = ie(Tt, null), a = () => {
    vo(() => {
      const { value: l } = o, s = `${l}${e}Rtl`;
      if (eh(s, r)) return;
      const { value: c } = n;
      c && c.style.mount({ id: s, head: true, anchorMetaName: Do, props: { bPrefix: l ? `.${l}-` : void 0 }, ssr: r, parent: i == null ? void 0 : i.styleMountTarget });
    });
  };
  return r ? a() : Jt(a), n;
}
const to = { fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace", fontWeight: "400", fontWeightStrong: "500", cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)", cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)", cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)", borderRadius: "3px", borderRadiusSmall: "2px", fontSize: "14px", fontSizeMini: "12px", fontSizeTiny: "12px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", lineHeight: "1.6", heightMini: "16px", heightTiny: "22px", heightSmall: "28px", heightMedium: "34px", heightLarge: "40px", heightHuge: "46px" }, { fontSize: Op, fontFamily: Mp, lineHeight: Bp } = to, as = F("body", `
 margin: 0;
 font-size: ${Op};
 font-family: ${Mp};
 line-height: ${Bp};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [F("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function jo(e, t, o) {
  if (!t) return;
  const r = bo(), n = ie(Tt, null), i = () => {
    const a = o.value;
    t.mount({ id: a === void 0 ? e : a + e, head: true, anchorMetaName: Do, props: { bPrefix: a ? `.${a}-` : void 0 }, ssr: r, parent: n == null ? void 0 : n.styleMountTarget }), (n == null ? void 0 : n.preflightStyleDisabled) || as.mount({ id: "n-global", head: true, anchorMetaName: Do, ssr: r, parent: n == null ? void 0 : n.styleMountTarget });
  };
  r ? i() : Jt(i);
}
function eC(e) {
  return e;
}
function Ce(e, t, o, r, n, i) {
  const a = bo(), l = ie(Tt, null);
  if (o) {
    const c = () => {
      const d = i == null ? void 0 : i.value;
      o.mount({ id: d === void 0 ? t : d + t, head: true, props: { bPrefix: d ? `.${d}-` : void 0 }, anchorMetaName: Do, ssr: a, parent: l == null ? void 0 : l.styleMountTarget }), (l == null ? void 0 : l.preflightStyleDisabled) || as.mount({ id: "n-global", head: true, anchorMetaName: Do, ssr: a, parent: l == null ? void 0 : l.styleMountTarget });
    };
    a ? c() : Jt(c);
  }
  return B(() => {
    var c;
    const { theme: { common: d, self: u, peers: f = {} } = {}, themeOverrides: h = {}, builtinThemeOverrides: p = {} } = n, { common: m, peers: v } = h, { common: g = void 0, [e]: { common: x = void 0, self: P = void 0, peers: S = {} } = {} } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, { common: R = void 0, [e]: z = {} } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, { common: b, peers: w = {} } = z, E = $o({}, d || x || g || r.common, R, b, m), $ = $o((c = u || P || r.self) === null || c === void 0 ? void 0 : c(E), p, z, h);
    return { common: E, self: $, peers: $o({}, r.peers, S, f), peerOverrides: $o({}, p.peers, w, v) };
  });
}
Ce.props = { theme: Object, themeOverrides: Object, builtinThemeOverrides: Object };
const kp = Z("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [F("svg", `
 height: 1em;
 width: 1em;
 `)]), ls = ee({ name: "BaseIcon", props: { role: String, ariaLabel: String, ariaDisabled: { type: Boolean, default: void 0 }, ariaHidden: { type: Boolean, default: void 0 }, clsPrefix: { type: String, required: true }, onClick: Function, onMousedown: Function, onMouseup: Function }, setup(e) {
  jo("-base-icon", kp, ge(e, "clsPrefix"));
}, render() {
  return y("i", { class: `${this.clsPrefix}-base-icon`, onClick: this.onClick, onMousedown: this.onMousedown, onMouseup: this.onMouseup, role: this.role, "aria-label": this.ariaLabel, "aria-hidden": this.ariaHidden, "aria-disabled": this.ariaDisabled }, this.$slots);
} }), ss = ee({ name: "BaseIconSwitchTransition", setup(e, { slots: t }) {
  const o = yr();
  return () => y(kt, { name: "icon-switch-transition", appear: o.value }, t);
} });
function Go(e, t) {
  const o = ee({ render() {
    return t();
  } });
  return ee({ name: Id(e), setup() {
    var r;
    const n = (r = ie(Tt, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
    return () => {
      var i;
      const a = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e];
      return a ? a() : y(o, null);
    };
  } });
}
const Fp = ee({ name: "ChevronRight", render() {
  return y("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, y("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" }));
} }), Lp = Go("close", () => y("svg", { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true }, y("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, y("g", { fill: "currentColor", "fill-rule": "nonzero" }, y("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))), Dp = Go("error", () => y("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, y("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, y("g", { "fill-rule": "nonzero" }, y("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" }))))), wa = Go("info", () => y("svg", { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, y("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, y("g", { "fill-rule": "nonzero" }, y("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" }))))), Hp = Go("success", () => y("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, y("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, y("g", { "fill-rule": "nonzero" }, y("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" }))))), _p = Go("warning", () => y("svg", { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, y("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, y("g", { "fill-rule": "nonzero" }, y("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" }))))), { cubicBezierEaseInOut: Np } = to;
function bn({ originalTransform: e = "", left: t = 0, top: o = 0, transition: r = `all .3s ${Np} !important` } = {}) {
  return [F("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", { transform: `${e} scale(0.75)`, left: t, top: o, opacity: 0 }), F("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", { transform: `scale(1) ${e}`, left: t, top: o, opacity: 1 }), F("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", { transformOrigin: "center", position: "absolute", left: t, top: o, transition: r })];
}
const Wp = Z("base-close", `
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
 `), F("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), $t("disabled", [F("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), F("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), F("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), F("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), F("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), U("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), U("round", [F("&::before", `
 border-radius: 50%;
 `)])]), cs = ee({ name: "BaseClose", props: { isButtonTag: { type: Boolean, default: true }, clsPrefix: { type: String, required: true }, disabled: { type: Boolean, default: void 0 }, focusable: { type: Boolean, default: true }, round: Boolean, onClick: Function, absolute: Boolean }, setup(e) {
  return jo("-base-close", Wp, ge(e, "clsPrefix")), () => {
    const { clsPrefix: t, disabled: o, absolute: r, round: n, isButtonTag: i } = e;
    return y(i ? "button" : "div", { type: i ? "button" : void 0, tabindex: o || !e.focusable ? -1 : 0, "aria-disabled": o, "aria-label": "close", role: i ? void 0 : "button", disabled: o, class: [`${t}-base-close`, r && `${t}-base-close--absolute`, o && `${t}-base-close--disabled`, n && `${t}-base-close--round`], onMousedown: (l) => {
      e.focusable || l.preventDefault();
    }, onClick: e.onClick }, y(ls, { clsPrefix: t }, { default: () => y(Lp, null) }));
  };
} }), Vp = ee({ name: "FadeInExpandTransition", props: { appear: Boolean, group: Boolean, mode: String, onLeave: Function, onAfterLeave: Function, onAfterEnter: Function, width: Boolean, reverse: Boolean }, setup(e, { slots: t }) {
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
    const { group: l, width: s, appear: c, mode: d } = e, u = l ? Cc : kt, f = { name: s ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition", appear: c, onEnter: i, onAfterEnter: a, onBeforeLeave: o, onLeave: r, onAfterLeave: n };
    return l || (f.mode = d), y(u, f, t);
  };
} }), jp = F([F("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), Z("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [j("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [bn()]), j("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [bn({ left: "50%", top: "50%", originalTransform: "translateX(-50%) translateY(-50%)" })]), j("container", `
 animation: rotator 3s linear infinite both;
 `, [j("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Gr = "1.6s", Gp = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, Up = ee({ name: "BaseLoading", props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, Gp), setup(e) {
  jo("-base-loading", jp, ge(e, "clsPrefix"));
}, render() {
  const { clsPrefix: e, radius: t, strokeWidth: o, stroke: r, scale: n } = this, i = t / n;
  return y("div", { class: `${e}-base-loading`, role: "img", "aria-label": "loading" }, y(ss, null, { default: () => this.show ? y("div", { key: "icon", class: `${e}-base-loading__transition-wrapper` }, y("div", { class: `${e}-base-loading__container` }, y("svg", { class: `${e}-base-loading__icon`, viewBox: `0 0 ${2 * i} ${2 * i}`, xmlns: "http://www.w3.org/2000/svg", style: { color: r } }, y("g", null, y("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};270 ${i} ${i}`, begin: "0s", dur: Gr, fill: "freeze", repeatCount: "indefinite" }), y("circle", { class: `${e}-base-loading__icon`, fill: "none", stroke: "currentColor", "stroke-width": o, "stroke-linecap": "round", cx: i, cy: i, r: t - o / 2, "stroke-dasharray": 5.67 * t, "stroke-dashoffset": 18.48 * t }, y("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`, begin: "0s", dur: Gr, fill: "freeze", repeatCount: "indefinite" }), y("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * t};${1.42 * t};${5.67 * t}`, begin: "0s", dur: Gr, fill: "freeze", repeatCount: "indefinite" })))))) : y("div", { key: "placeholder", class: `${e}-base-loading__placeholder` }, this.$slots) }));
} }), { cubicBezierEaseInOut: $a } = to;
function ds({ name: e = "fade-in", enterDuration: t = "0.2s", leaveDuration: o = "0.2s", enterCubicBezier: r = $a, leaveCubicBezier: n = $a } = {}) {
  return [F(`&.${e}-transition-enter-active`, { transition: `all ${t} ${r}!important` }), F(`&.${e}-transition-leave-active`, { transition: `all ${o} ${n}!important` }), F(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, { opacity: 0 }), F(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, { opacity: 1 })];
}
const X = { neutralBase: "#FFF", neutralInvertBase: "#000", neutralTextBase: "#000", neutralPopover: "#fff", neutralCard: "#fff", neutralModal: "#fff", neutralBody: "#fff", alpha1: "0.82", alpha2: "0.72", alpha3: "0.38", alpha4: "0.24", alpha5: "0.18", alphaClose: "0.6", alphaDisabled: "0.5", alphaAvatar: "0.2", alphaProgressRail: ".08", alphaInput: "0", alphaScrollbar: "0.25", alphaScrollbarHover: "0.4", primaryHover: "#36ad6a", primaryDefault: "#18a058", primaryActive: "#0c7a43", primarySuppl: "#36ad6a", infoHover: "#4098fc", infoDefault: "#2080f0", infoActive: "#1060c9", infoSuppl: "#4098fc", errorHover: "#de576d", errorDefault: "#d03050", errorActive: "#ab1f3f", errorSuppl: "#de576d", warningHover: "#fcb040", warningDefault: "#f0a020", warningActive: "#c97c10", warningSuppl: "#fcb040", successHover: "#36ad6a", successDefault: "#18a058", successActive: "#0c7a43", successSuppl: "#36ad6a" }, Kp = Lt(X.neutralBase), us = Lt(X.neutralInvertBase), qp = `rgba(${us.slice(0, 3).join(", ")}, `;
function Pa(e) {
  return `${qp + String(e)})`;
}
function De(e) {
  const t = Array.from(us);
  return t[3] = Number(e), N(Kp, t);
}
const L = Object.assign(Object.assign({ name: "common" }, to), { baseColor: X.neutralBase, primaryColor: X.primaryDefault, primaryColorHover: X.primaryHover, primaryColorPressed: X.primaryActive, primaryColorSuppl: X.primarySuppl, infoColor: X.infoDefault, infoColorHover: X.infoHover, infoColorPressed: X.infoActive, infoColorSuppl: X.infoSuppl, successColor: X.successDefault, successColorHover: X.successHover, successColorPressed: X.successActive, successColorSuppl: X.successSuppl, warningColor: X.warningDefault, warningColorHover: X.warningHover, warningColorPressed: X.warningActive, warningColorSuppl: X.warningSuppl, errorColor: X.errorDefault, errorColorHover: X.errorHover, errorColorPressed: X.errorActive, errorColorSuppl: X.errorSuppl, textColorBase: X.neutralTextBase, textColor1: "rgb(31, 34, 37)", textColor2: "rgb(51, 54, 57)", textColor3: "rgb(118, 124, 130)", textColorDisabled: De(X.alpha4), placeholderColor: De(X.alpha4), placeholderColorDisabled: De(X.alpha5), iconColor: De(X.alpha4), iconColorHover: Zo(De(X.alpha4), { lightness: 0.75 }), iconColorPressed: Zo(De(X.alpha4), { lightness: 0.9 }), iconColorDisabled: De(X.alpha5), opacity1: X.alpha1, opacity2: X.alpha2, opacity3: X.alpha3, opacity4: X.alpha4, opacity5: X.alpha5, dividerColor: "rgb(239, 239, 245)", borderColor: "rgb(224, 224, 230)", closeIconColor: De(Number(X.alphaClose)), closeIconColorHover: De(Number(X.alphaClose)), closeIconColorPressed: De(Number(X.alphaClose)), closeColorHover: "rgba(0, 0, 0, .09)", closeColorPressed: "rgba(0, 0, 0, .13)", clearColor: De(X.alpha4), clearColorHover: Zo(De(X.alpha4), { lightness: 0.75 }), clearColorPressed: Zo(De(X.alpha4), { lightness: 0.9 }), scrollbarColor: Pa(X.alphaScrollbar), scrollbarColorHover: Pa(X.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: De(X.alphaProgressRail), railColor: "rgb(219, 219, 223)", popoverColor: X.neutralPopover, tableColor: X.neutralCard, cardColor: X.neutralCard, modalColor: X.neutralModal, bodyColor: X.neutralBody, tagColor: "#eee", avatarColor: De(X.alphaAvatar), invertedColor: "rgb(0, 20, 40)", inputColor: De(X.alphaInput), codeColor: "rgb(244, 244, 248)", tabColor: "rgb(247, 247, 250)", actionColor: "rgb(250, 250, 252)", tableHeaderColor: "rgb(250, 250, 252)", hoverColor: "rgb(243, 243, 245)", tableColorHover: "rgba(0, 0, 100, 0.03)", tableColorStriped: "rgba(0, 0, 100, 0.02)", pressedColor: "rgb(237, 237, 239)", opacityDisabled: X.alphaDisabled, inputColorDisabled: "rgb(250, 250, 252)", buttonColor2: "rgba(46, 51, 56, .05)", buttonColor2Hover: "rgba(46, 51, 56, .09)", buttonColor2Pressed: "rgba(46, 51, 56, .13)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), Yp = { railInsetHorizontalBottom: "auto 2px 4px 2px", railInsetHorizontalTop: "4px 2px auto 2px", railInsetVerticalRight: "2px 4px 2px auto", railInsetVerticalLeft: "2px auto 2px 4px", railColor: "transparent" };
function Xp(e) {
  const { scrollbarColor: t, scrollbarColorHover: o, scrollbarHeight: r, scrollbarWidth: n, scrollbarBorderRadius: i } = e;
  return Object.assign(Object.assign({}, Yp), { height: r, width: n, borderRadius: i, color: t, colorHover: o });
}
const Fe = { name: "Scrollbar", common: L, self: Xp }, Zp = Z("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [F(">", [Z("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [F("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), F(">", [Z("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), F(">, +", [Z("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [U("horizontal", `
 height: var(--n-scrollbar-height);
 `, [F(">", [j("scrollbar", `
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
 `, [F(">", [j("scrollbar", `
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
 `), U("disabled", [F(">", [j("scrollbar", "pointer-events: none;")])]), F(">", [j("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [ds(), F("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Qp = Object.assign(Object.assign({}, Ce.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: "hover" }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: "right" }, xPlacement: { type: String, default: "bottom" } }), fs = ee({ name: "Scrollbar", props: Qp, inheritAttrs: false, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o, mergedRtlRef: r } = vt(e), n = Vo("Scrollbar", r, t), i = _(null), a = _(null), l = _(null), s = _(null), c = _(null), d = _(null), u = _(null), f = _(null), h = _(null), p = _(null), m = _(null), v = _(0), g = _(0), x = _(false), P = _(false);
  let S = false, R = false, z, b, w = 0, E = 0, $ = 0, T = 0;
  const C = zh(), O = Ce("Scrollbar", "-scrollbar", Zp, Fe, e, t), H = B(() => {
    const { value: D } = f, { value: K } = d, { value: J } = p;
    return D === null || K === null || J === null ? 0 : Math.min(D, J * D / K + Ni(O.value.self.width) * 1.5);
  }), A = B(() => `${H.value}px`), W = B(() => {
    const { value: D } = h, { value: K } = u, { value: J } = m;
    return D === null || K === null || J === null ? 0 : J * D / K + Ni(O.value.self.height) * 1.5;
  }), k = B(() => `${W.value}px`), q = B(() => {
    const { value: D } = f, { value: K } = v, { value: J } = d, { value: ve } = p;
    if (D === null || J === null || ve === null) return 0;
    {
      const ze = J - D;
      return ze ? K / ze * (ve - H.value) : 0;
    }
  }), le = B(() => `${q.value}px`), se = B(() => {
    const { value: D } = h, { value: K } = g, { value: J } = u, { value: ve } = m;
    if (D === null || J === null || ve === null) return 0;
    {
      const ze = J - D;
      return ze ? K / ze * (ve - W.value) : 0;
    }
  }), me = B(() => `${se.value}px`), ce = B(() => {
    const { value: D } = f, { value: K } = d;
    return D !== null && K !== null && K > D;
  }), Le = B(() => {
    const { value: D } = h, { value: K } = u;
    return D !== null && K !== null && K > D;
  }), He = B(() => {
    const { trigger: D } = e;
    return D === "none" || x.value;
  }), rt = B(() => {
    const { trigger: D } = e;
    return D === "none" || P.value;
  }), ne = B(() => {
    const { container: D } = e;
    return D ? D() : a.value;
  }), I = B(() => {
    const { content: D } = e;
    return D ? D() : l.value;
  }), V = (D, K) => {
    if (!e.scrollable) return;
    if (typeof D == "number") {
      te(D, K ?? 0, 0, false, "auto");
      return;
    }
    const { left: J, top: ve, index: ze, elSize: Ve, position: it, behavior: we, el: Je, debounce: It = true } = D;
    (J !== void 0 || ve !== void 0) && te(J ?? 0, ve ?? 0, 0, false, we), Je !== void 0 ? te(0, Je.offsetTop, Je.offsetHeight, It, we) : ze !== void 0 && Ve !== void 0 ? te(0, ze * Ve, Ve, It, we) : it === "bottom" ? te(0, Number.MAX_SAFE_INTEGER, 0, false, we) : it === "top" && te(0, 0, 0, false, we);
  }, M = Lh(() => {
    e.container || V({ top: v.value, left: g.value });
  }), Y = () => {
    M.isDeactivated || Nt();
  }, re = (D) => {
    if (M.isDeactivated) return;
    const { onResize: K } = e;
    K && K(D), Nt();
  }, xe = (D, K) => {
    if (!e.scrollable) return;
    const { value: J } = ne;
    J && (typeof D == "object" ? J.scrollBy(D) : J.scrollBy(D, K || 0));
  };
  function te(D, K, J, ve, ze) {
    const { value: Ve } = ne;
    if (Ve) {
      if (ve) {
        const { scrollTop: it, offsetHeight: we } = Ve;
        if (K > it) {
          K + J <= it + we || Ve.scrollTo({ left: D, top: K + J - we, behavior: ze });
          return;
        }
      }
      Ve.scrollTo({ left: D, top: K, behavior: ze });
    }
  }
  function oe() {
    Rr(), Se(), Nt();
  }
  function ye() {
    nt();
  }
  function nt() {
    Me(), Tr();
  }
  function Me() {
    b !== void 0 && window.clearTimeout(b), b = window.setTimeout(() => {
      P.value = false;
    }, e.duration);
  }
  function Tr() {
    z !== void 0 && window.clearTimeout(z), z = window.setTimeout(() => {
      x.value = false;
    }, e.duration);
  }
  function Rr() {
    z !== void 0 && window.clearTimeout(z), x.value = true;
  }
  function Se() {
    b !== void 0 && window.clearTimeout(b), P.value = true;
  }
  function Be(D) {
    const { onScroll: K } = e;
    K && K(D), _t();
  }
  function _t() {
    const { value: D } = ne;
    D && (v.value = D.scrollTop, g.value = D.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1));
  }
  function Ns() {
    const { value: D } = I;
    D && (d.value = D.offsetHeight, u.value = D.offsetWidth);
    const { value: K } = ne;
    K && (f.value = K.offsetHeight, h.value = K.offsetWidth);
    const { value: J } = c, { value: ve } = s;
    J && (m.value = J.offsetWidth), ve && (p.value = ve.offsetHeight);
  }
  function ri() {
    const { value: D } = ne;
    D && (v.value = D.scrollTop, g.value = D.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1), f.value = D.offsetHeight, h.value = D.offsetWidth, d.value = D.scrollHeight, u.value = D.scrollWidth);
    const { value: K } = c, { value: J } = s;
    K && (m.value = K.offsetWidth), J && (p.value = J.offsetHeight);
  }
  function Nt() {
    e.scrollable && (e.useUnifiedContainer ? ri() : (Ns(), _t()));
  }
  function ni(D) {
    var K;
    return !(!((K = i.value) === null || K === void 0) && K.contains(ko(D)));
  }
  function Ws(D) {
    D.preventDefault(), D.stopPropagation(), R = true, he("mousemove", window, ii, true), he("mouseup", window, ai, true), E = g.value, $ = (n == null ? void 0 : n.value) ? window.innerWidth - D.clientX : D.clientX;
  }
  function ii(D) {
    if (!R) return;
    z !== void 0 && window.clearTimeout(z), b !== void 0 && window.clearTimeout(b);
    const { value: K } = h, { value: J } = u, { value: ve } = W;
    if (K === null || J === null) return;
    const Ve = ((n == null ? void 0 : n.value) ? window.innerWidth - D.clientX - $ : D.clientX - $) * (J - K) / (K - ve), it = J - K;
    let we = E + Ve;
    we = Math.min(it, we), we = Math.max(we, 0);
    const { value: Je } = ne;
    if (Je) {
      Je.scrollLeft = we * ((n == null ? void 0 : n.value) ? -1 : 1);
      const { internalOnUpdateScrollLeft: It } = e;
      It && It(we);
    }
  }
  function ai(D) {
    D.preventDefault(), D.stopPropagation(), fe("mousemove", window, ii, true), fe("mouseup", window, ai, true), R = false, Nt(), ni(D) && nt();
  }
  function Vs(D) {
    D.preventDefault(), D.stopPropagation(), S = true, he("mousemove", window, Ir, true), he("mouseup", window, zr, true), w = v.value, T = D.clientY;
  }
  function Ir(D) {
    if (!S) return;
    z !== void 0 && window.clearTimeout(z), b !== void 0 && window.clearTimeout(b);
    const { value: K } = f, { value: J } = d, { value: ve } = H;
    if (K === null || J === null) return;
    const Ve = (D.clientY - T) * (J - K) / (K - ve), it = J - K;
    let we = w + Ve;
    we = Math.min(it, we), we = Math.max(we, 0);
    const { value: Je } = ne;
    Je && (Je.scrollTop = we);
  }
  function zr(D) {
    D.preventDefault(), D.stopPropagation(), fe("mousemove", window, Ir, true), fe("mouseup", window, zr, true), S = false, Nt(), ni(D) && nt();
  }
  vo(() => {
    const { value: D } = Le, { value: K } = ce, { value: J } = t, { value: ve } = c, { value: ze } = s;
    ve && (D ? ve.classList.remove(`${J}-scrollbar-rail--disabled`) : ve.classList.add(`${J}-scrollbar-rail--disabled`)), ze && (K ? ze.classList.remove(`${J}-scrollbar-rail--disabled`) : ze.classList.add(`${J}-scrollbar-rail--disabled`));
  }), st(() => {
    e.container || Nt();
  }), Ne(() => {
    z !== void 0 && window.clearTimeout(z), b !== void 0 && window.clearTimeout(b), fe("mousemove", window, Ir, true), fe("mouseup", window, zr, true);
  });
  const li = B(() => {
    const { common: { cubicBezierEaseInOut: D }, self: { color: K, colorHover: J, height: ve, width: ze, borderRadius: Ve, railInsetHorizontalTop: it, railInsetHorizontalBottom: we, railInsetVerticalRight: Je, railInsetVerticalLeft: It, railColor: js } } = O.value, { top: Gs, right: Us, bottom: Ks, left: qs } = jt(it), { top: Ys, right: Xs, bottom: Zs, left: Qs } = jt(we), { top: Js, right: ec, bottom: tc, left: oc } = jt((n == null ? void 0 : n.value) ? xa(Je) : Je), { top: rc, right: nc, bottom: ic, left: ac } = jt((n == null ? void 0 : n.value) ? xa(It) : It);
    return { "--n-scrollbar-bezier": D, "--n-scrollbar-color": K, "--n-scrollbar-color-hover": J, "--n-scrollbar-border-radius": Ve, "--n-scrollbar-width": ze, "--n-scrollbar-height": ve, "--n-scrollbar-rail-top-horizontal-top": Gs, "--n-scrollbar-rail-right-horizontal-top": Us, "--n-scrollbar-rail-bottom-horizontal-top": Ks, "--n-scrollbar-rail-left-horizontal-top": qs, "--n-scrollbar-rail-top-horizontal-bottom": Ys, "--n-scrollbar-rail-right-horizontal-bottom": Xs, "--n-scrollbar-rail-bottom-horizontal-bottom": Zs, "--n-scrollbar-rail-left-horizontal-bottom": Qs, "--n-scrollbar-rail-top-vertical-right": Js, "--n-scrollbar-rail-right-vertical-right": ec, "--n-scrollbar-rail-bottom-vertical-right": tc, "--n-scrollbar-rail-left-vertical-right": oc, "--n-scrollbar-rail-top-vertical-left": rc, "--n-scrollbar-rail-right-vertical-left": nc, "--n-scrollbar-rail-bottom-vertical-left": ic, "--n-scrollbar-rail-left-vertical-left": ac, "--n-scrollbar-rail-color": js };
  }), oo = o ? Rt("scrollbar", void 0, li, e) : void 0;
  return Object.assign(Object.assign({}, { scrollTo: V, scrollBy: xe, sync: Nt, syncUnifiedContainer: ri, handleMouseEnterWrapper: oe, handleMouseLeaveWrapper: ye }), { mergedClsPrefix: t, rtlEnabled: n, containerScrollTop: v, wrapperRef: i, containerRef: a, contentRef: l, yRailRef: s, xRailRef: c, needYBar: ce, needXBar: Le, yBarSizePx: A, xBarSizePx: k, yBarTopPx: le, xBarLeftPx: me, isShowXBar: He, isShowYBar: rt, isIos: C, handleScroll: Be, handleContentResize: Y, handleContainerResize: re, handleYScrollMouseDown: Vs, handleXScrollMouseDown: Ws, cssVars: o ? void 0 : li, themeClass: oo == null ? void 0 : oo.themeClass, onRender: oo == null ? void 0 : oo.onRender });
}, render() {
  var e;
  const { $slots: t, mergedClsPrefix: o, triggerDisplayManually: r, rtlEnabled: n, internalHoistYRail: i, yPlacement: a, xPlacement: l, xScrollable: s } = this;
  if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
  const c = this.trigger === "none", d = (h, p) => y("div", { ref: "yRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--vertical`, `${o}-scrollbar-rail--vertical--${a}`, h], "data-scrollbar-rail": true, style: [p || "", this.verticalRailStyle], "aria-hidden": true }, y(c ? ya : kt, c ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? y("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), u = () => {
    var h, p;
    return (h = this.onRender) === null || h === void 0 || h.call(this), y("div", Et(this.$attrs, { role: "none", ref: "wrapperRef", class: [`${o}-scrollbar`, this.themeClass, n && `${o}-scrollbar--rtl`], style: this.cssVars, onMouseenter: r ? void 0 : this.handleMouseEnterWrapper, onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (p = t.default) === null || p === void 0 ? void 0 : p.call(t) : y("div", { role: "none", ref: "containerRef", class: [`${o}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, y(ma, { onResize: this.handleContentResize }, { default: () => y("div", { ref: "contentRef", role: "none", style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle], class: [`${o}-scrollbar-content`, this.contentClass] }, t) })), i ? null : d(void 0, void 0), s && y("div", { ref: "xRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--horizontal`, `${o}-scrollbar-rail--horizontal--${l}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, y(c ? ya : kt, c ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? y("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: n ? this.xBarLeftPx : void 0, left: n ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, f = this.container ? u() : y(ma, { onResize: this.handleContainerResize }, { default: u });
  return i ? y(eo, null, f, d(this.themeClass, this.cssVars)) : f;
} }), hs = fs;
function Ea(e) {
  return Array.isArray(e) ? e : [e];
}
const xn = { STOP: "STOP" };
function ps(e, t) {
  const o = t(e);
  e.children !== void 0 && o !== xn.STOP && e.children.forEach((r) => ps(r, t));
}
function Jp(e, t = {}) {
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
function eg(e, t) {
  const { isLeaf: o } = e;
  return o !== void 0 ? o : !t(e);
}
function tg(e) {
  return e.children;
}
function og(e) {
  return e.key;
}
function rg() {
  return false;
}
function ng(e, t) {
  const { isLeaf: o } = e;
  return !(o === false && !Array.isArray(t(e)));
}
function ig(e) {
  return e.disabled === true;
}
function ag(e, t) {
  return e.isLeaf === false && !Array.isArray(t(e));
}
function Ur(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function Kr(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function lg(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) || o.add(r);
  }), Array.from(o);
}
function sg(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) && o.delete(r);
  }), Array.from(o);
}
function cg(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function tC(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((o, r) => {
    t.set(o.key, r);
  }), (o) => {
    var r;
    return (r = t.get(o)) !== null && r !== void 0 ? r : null;
  };
}
class dg extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function ug(e, t, o, r) {
  return gr(t.concat(e), o, r, false);
}
function fg(e, t) {
  const o = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const n = t.treeNodeMap.get(r);
    if (n !== void 0) {
      let i = n.parent;
      for (; i !== null && !(i.disabled || o.has(i.key)); ) o.add(i.key), i = i.parent;
    }
  }), o;
}
function hg(e, t, o, r) {
  const n = gr(t, o, r, false), i = gr(e, o, r, true), a = fg(e, o), l = [];
  return n.forEach((s) => {
    (i.has(s) || a.has(s)) && l.push(s);
  }), l.forEach((s) => n.delete(s)), n;
}
function qr(e, t) {
  const { checkedKeys: o, keysToCheck: r, keysToUncheck: n, indeterminateKeys: i, cascade: a, leafOnly: l, checkStrategy: s, allowNotLoaded: c } = e;
  if (!a) return r !== void 0 ? { checkedKeys: lg(o, r), indeterminateKeys: Array.from(i) } : n !== void 0 ? { checkedKeys: sg(o, n), indeterminateKeys: Array.from(i) } : { checkedKeys: Array.from(o), indeterminateKeys: Array.from(i) };
  const { levelTreeNodeMap: d } = t;
  let u;
  n !== void 0 ? u = hg(n, o, t, c) : r !== void 0 ? u = ug(r, o, t, c) : u = gr(o, t, c, false);
  const f = s === "parent", h = s === "child" || l, p = u, m = /* @__PURE__ */ new Set(), v = Math.max.apply(null, Array.from(d.keys()));
  for (let g = v; g >= 0; g -= 1) {
    const x = g === 0, P = d.get(g);
    for (const S of P) {
      if (S.isLeaf) continue;
      const { key: R, shallowLoaded: z } = S;
      if (h && z && S.children.forEach(($) => {
        !$.disabled && !$.isLeaf && $.shallowLoaded && p.has($.key) && p.delete($.key);
      }), S.disabled || !z) continue;
      let b = true, w = false, E = true;
      for (const $ of S.children) {
        const T = $.key;
        if (!$.disabled) {
          if (E && (E = false), p.has(T)) w = true;
          else if (m.has(T)) {
            w = true, b = false;
            break;
          } else if (b = false, w) break;
        }
      }
      b && !E ? (f && S.children.forEach(($) => {
        !$.disabled && p.has($.key) && p.delete($.key);
      }), p.add(R)) : w && m.add(R), x && h && p.has(R) && p.delete(R);
    }
  }
  return { checkedKeys: Array.from(p), indeterminateKeys: Array.from(m) };
}
function gr(e, t, o, r) {
  const { treeNodeMap: n, getChildren: i } = t, a = /* @__PURE__ */ new Set(), l = new Set(e);
  return e.forEach((s) => {
    const c = n.get(s);
    c !== void 0 && ps(c, (d) => {
      if (d.disabled) return xn.STOP;
      const { key: u } = d;
      if (!a.has(u) && (a.add(u), l.add(u), ag(d.rawNode, i))) {
        if (r) return xn.STOP;
        if (!o) throw new dg();
      }
    });
  }), l;
}
function pg(e, { includeGroup: t = false, includeSelf: o = true }, r) {
  var n;
  const i = r.treeNodeMap;
  let a = e == null ? null : (n = i.get(e)) !== null && n !== void 0 ? n : null;
  const l = { keyPath: [], treeNodePath: [], treeNode: a };
  if (a == null ? void 0 : a.ignored) return l.treeNode = null, l;
  for (; a; ) !a.ignored && (t || !a.isGroup) && l.treeNodePath.push(a), a = a.parent;
  return l.treeNodePath.reverse(), o || l.treeNodePath.pop(), l.keyPath = l.treeNodePath.map((s) => s.key), l;
}
function gg(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function mg(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n + 1) % r] : n === o.length - 1 ? null : o[n + 1];
}
function Ta(e, t, { loop: o = false, includeDisabled: r = false } = {}) {
  const n = t === "prev" ? vg : mg, i = { reverse: t === "prev" };
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
        const d = Kn(c, i);
        d !== null ? l = d : s(n(c, o));
      } else {
        const d = n(c, false);
        if (d !== null) s(d);
        else {
          const u = bg(c);
          (u == null ? void 0 : u.isGroup) ? s(n(u, o)) : o && s(n(c, true));
        }
      }
    }
  }
  return s(e), l;
}
function vg(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n - 1 + r) % r] : n === 0 ? null : o[n - 1];
}
function bg(e) {
  return e.parent;
}
function Kn(e, t = {}) {
  const { reverse: o = false } = t, { children: r } = e;
  if (r) {
    const { length: n } = r, i = o ? n - 1 : 0, a = o ? -1 : n, l = o ? -1 : 1;
    for (let s = i; s !== a; s += l) {
      const c = r[s];
      if (!c.disabled && !c.ignored) if (c.isGroup) {
        const d = Kn(c, t);
        if (d !== null) return d;
      } else return c;
    }
  }
  return null;
}
const xg = { getChild() {
  return this.ignored ? null : Kn(this);
}, getParent() {
  const { parent: e } = this;
  return (e == null ? void 0 : e.isGroup) ? e.getParent() : e;
}, getNext(e = {}) {
  return Ta(this, "next", e);
}, getPrev(e = {}) {
  return Ta(this, "prev", e);
} };
function Cg(e, t) {
  const o = t ? new Set(t) : void 0, r = [];
  function n(i) {
    i.forEach((a) => {
      r.push(a), !(a.isLeaf || !a.children || a.ignored) && (a.isGroup || o === void 0 || o.has(a.key)) && n(a.children);
    });
  }
  return n(e), r;
}
function yg(e, t) {
  const o = e.key;
  for (; t; ) {
    if (t.key === o) return true;
    t = t.parent;
  }
  return false;
}
function gs(e, t, o, r, n, i = null, a = 0) {
  const l = [];
  return e.forEach((s, c) => {
    var d;
    const u = Object.create(r);
    if (u.rawNode = s, u.siblings = l, u.level = a, u.index = c, u.isFirstChild = c === 0, u.isLastChild = c + 1 === e.length, u.parent = i, !u.ignored) {
      const f = n(s);
      Array.isArray(f) && (u.children = gs(f, t, o, r, n, u, a + 1));
    }
    l.push(u), t.set(u.key, u), o.has(a) || o.set(a, []), (d = o.get(a)) === null || d === void 0 || d.push(u);
  }), l;
}
function Sg(e, t = {}) {
  var o;
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), { getDisabled: i = ig, getIgnored: a = rg, getIsGroup: l = cg, getKey: s = og } = t, c = (o = t.getChildren) !== null && o !== void 0 ? o : tg, d = t.ignoreEmptyChildren ? (S) => {
    const R = c(S);
    return Array.isArray(R) ? R.length ? R : null : R;
  } : c, u = Object.assign({ get key() {
    return s(this.rawNode);
  }, get disabled() {
    return i(this.rawNode);
  }, get isGroup() {
    return l(this.rawNode);
  }, get isLeaf() {
    return eg(this.rawNode, d);
  }, get shallowLoaded() {
    return ng(this.rawNode, d);
  }, get ignored() {
    return a(this.rawNode);
  }, contains(S) {
    return yg(this, S);
  } }, xg), f = gs(e, r, n, u, d);
  function h(S) {
    if (S == null) return null;
    const R = r.get(S);
    return R && !R.isGroup && !R.ignored ? R : null;
  }
  function p(S) {
    if (S == null) return null;
    const R = r.get(S);
    return R && !R.ignored ? R : null;
  }
  function m(S, R) {
    const z = p(S);
    return z ? z.getPrev(R) : null;
  }
  function v(S, R) {
    const z = p(S);
    return z ? z.getNext(R) : null;
  }
  function g(S) {
    const R = p(S);
    return R ? R.getParent() : null;
  }
  function x(S) {
    const R = p(S);
    return R ? R.getChild() : null;
  }
  const P = { treeNodes: f, treeNodeMap: r, levelTreeNodeMap: n, maxLevel: Math.max(...n.keys()), getChildren: d, getFlattenedNodes(S) {
    return Cg(f, S);
  }, getNode: h, getPrev: m, getNext: v, getParent: g, getChild: x, getFirstAvailableNode() {
    return gg(f);
  }, getPath(S, R = {}) {
    return pg(S, R, P);
  }, getCheckedKeys(S, R = {}) {
    const { cascade: z = true, leafOnly: b = false, checkStrategy: w = "all", allowNotLoaded: E = false } = R;
    return qr({ checkedKeys: Ur(S), indeterminateKeys: Kr(S), cascade: z, leafOnly: b, checkStrategy: w, allowNotLoaded: E }, P);
  }, check(S, R, z = {}) {
    const { cascade: b = true, leafOnly: w = false, checkStrategy: E = "all", allowNotLoaded: $ = false } = z;
    return qr({ checkedKeys: Ur(R), indeterminateKeys: Kr(R), keysToCheck: S == null ? [] : Ea(S), cascade: b, leafOnly: w, checkStrategy: E, allowNotLoaded: $ }, P);
  }, uncheck(S, R, z = {}) {
    const { cascade: b = true, leafOnly: w = false, checkStrategy: E = "all", allowNotLoaded: $ = false } = z;
    return qr({ checkedKeys: Ur(R), indeterminateKeys: Kr(R), keysToUncheck: S == null ? [] : Ea(S), cascade: b, leafOnly: w, checkStrategy: E, allowNotLoaded: $ }, P);
  }, getNonLeafKeys(S = {}) {
    return Jp(f, S);
  } };
  return P;
}
const wg = { iconSizeTiny: "28px", iconSizeSmall: "34px", iconSizeMedium: "40px", iconSizeLarge: "46px", iconSizeHuge: "52px" };
function $g(e) {
  const { textColorDisabled: t, iconColor: o, textColor2: r, fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: l, fontSizeHuge: s } = e;
  return Object.assign(Object.assign({}, wg), { fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: l, fontSizeHuge: s, textColor: t, iconColor: o, extraTextColor: r });
}
const Dt = { name: "Empty", common: L, self: $g }, Pg = { height: "calc(var(--n-option-height) * 7.6)", paddingTiny: "4px 0", paddingSmall: "4px 0", paddingMedium: "4px 0", paddingLarge: "4px 0", paddingHuge: "4px 0", optionPaddingTiny: "0 12px", optionPaddingSmall: "0 12px", optionPaddingMedium: "0 12px", optionPaddingLarge: "0 12px", optionPaddingHuge: "0 12px", loadingSize: "18px" };
function Eg(e) {
  const { borderRadius: t, popoverColor: o, textColor3: r, dividerColor: n, textColor2: i, primaryColorPressed: a, textColorDisabled: l, primaryColor: s, opacityDisabled: c, hoverColor: d, fontSizeTiny: u, fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p, fontSizeHuge: m, heightTiny: v, heightSmall: g, heightMedium: x, heightLarge: P, heightHuge: S } = e;
  return Object.assign(Object.assign({}, Pg), { optionFontSizeTiny: u, optionFontSizeSmall: f, optionFontSizeMedium: h, optionFontSizeLarge: p, optionFontSizeHuge: m, optionHeightTiny: v, optionHeightSmall: g, optionHeightMedium: x, optionHeightLarge: P, optionHeightHuge: S, borderRadius: t, color: o, groupHeaderTextColor: r, actionDividerColor: n, optionTextColor: i, optionTextColorPressed: a, optionTextColorDisabled: l, optionTextColorActive: s, optionOpacityDisabled: c, optionCheckColor: s, optionColorPending: d, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: d, actionTextColor: i, loadingColor: s });
}
const Uo = { name: "InternalSelectMenu", common: L, peers: { Scrollbar: Fe, Empty: Dt }, self: Eg }, { cubicBezierEaseIn: Ra, cubicBezierEaseOut: Ia } = to;
function ms({ transformOrigin: e = "inherit", duration: t = ".2s", enterScale: o = ".9", originalTransform: r = "", originalTransition: n = "" } = {}) {
  return [F("&.fade-in-scale-up-transition-leave-active", { transformOrigin: e, transition: `opacity ${t} ${Ra}, transform ${t} ${Ra} ${n && `,${n}`}` }), F("&.fade-in-scale-up-transition-enter-active", { transformOrigin: e, transition: `opacity ${t} ${Ia}, transform ${t} ${Ia} ${n && `,${n}`}` }), F("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", { opacity: 0, transform: `${r} scale(${o})` }), F("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", { opacity: 1, transform: `${r} scale(1)` })];
}
const Tg = { space: "6px", spaceArrow: "10px", arrowOffset: "10px", arrowOffsetVertical: "10px", arrowHeight: "6px", padding: "8px 14px" };
function Rg(e) {
  const { boxShadow2: t, popoverColor: o, textColor2: r, borderRadius: n, fontSize: i, dividerColor: a } = e;
  return Object.assign(Object.assign({}, Tg), { fontSize: i, borderRadius: n, color: o, dividerColor: a, textColor: r, boxShadow: t });
}
const Ht = { name: "Popover", common: L, peers: { Scrollbar: Fe }, self: Rg }, Yr = { top: "bottom", bottom: "top", left: "right", right: "left" }, Ae = "var(--n-arrow-height) * 1.414", Ig = F([Z("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [F(">", [Z("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), $t("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [$t("scrollable", [$t("show-header-or-footer", "padding: var(--n-padding);")])]), j("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), j("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), U("scrollable, show-header-or-footer", [j("content", `
 padding: var(--n-padding);
 `)])]), Z("popover-shared", `
 transform-origin: inherit;
 `, [Z("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [Z("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ae});
 height: calc(${Ae});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), F("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `), F("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `), F("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), F("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), et("top-start", `
 top: calc(${Ae} / -2);
 left: calc(${Ct("top-start")} - var(--v-offset-left));
 `), et("top", `
 top: calc(${Ae} / -2);
 transform: translateX(calc(${Ae} / -2)) rotate(45deg);
 left: 50%;
 `), et("top-end", `
 top: calc(${Ae} / -2);
 right: calc(${Ct("top-end")} + var(--v-offset-left));
 `), et("bottom-start", `
 bottom: calc(${Ae} / -2);
 left: calc(${Ct("bottom-start")} - var(--v-offset-left));
 `), et("bottom", `
 bottom: calc(${Ae} / -2);
 transform: translateX(calc(${Ae} / -2)) rotate(45deg);
 left: 50%;
 `), et("bottom-end", `
 bottom: calc(${Ae} / -2);
 right: calc(${Ct("bottom-end")} + var(--v-offset-left));
 `), et("left-start", `
 left: calc(${Ae} / -2);
 top: calc(${Ct("left-start")} - var(--v-offset-top));
 `), et("left", `
 left: calc(${Ae} / -2);
 transform: translateY(calc(${Ae} / -2)) rotate(45deg);
 top: 50%;
 `), et("left-end", `
 left: calc(${Ae} / -2);
 bottom: calc(${Ct("left-end")} + var(--v-offset-top));
 `), et("right-start", `
 right: calc(${Ae} / -2);
 top: calc(${Ct("right-start")} - var(--v-offset-top));
 `), et("right", `
 right: calc(${Ae} / -2);
 transform: translateY(calc(${Ae} / -2)) rotate(45deg);
 top: 50%;
 `), et("right-end", `
 right: calc(${Ae} / -2);
 bottom: calc(${Ct("right-end")} + var(--v-offset-top));
 `), ...Iu({ top: ["right-start", "left-start"], right: ["top-end", "bottom-end"], bottom: ["right-end", "left-end"], left: ["top-start", "bottom-start"] }, (e, t) => {
  const o = ["right", "left"].includes(t), r = o ? "width" : "height";
  return e.map((n) => {
    const i = n.split("-")[1] === "end", l = `calc((${`var(--v-target-${r}, 0px)`} - ${Ae}) / 2)`, s = Ct(n);
    return F(`[v-placement="${n}"] >`, [Z("popover-shared", [U("center-arrow", [Z("popover-arrow", `${t}: calc(max(${l}, ${s}) ${i ? "+" : "-"} var(--v-offset-${o ? "left" : "top"}));`)])])]);
  });
})]);
function Ct(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function et(e, t) {
  const o = e.split("-")[0], r = ["top", "bottom"].includes(o) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return F(`[v-placement="${e}"] >`, [Z("popover-shared", `
 margin-${Yr[o]}: var(--n-space);
 `, [U("show-arrow", `
 margin-${Yr[o]}: var(--n-space-arrow);
 `), U("overlap", `
 margin: 0;
 `), ih("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${Yr[o]}: auto;
 ${r}
 `, [Z("popover-arrow", t)])])]);
}
const vs = Object.assign(Object.assign({}, Ce.props), { to: go.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function bs({ arrowClass: e, arrowStyle: t, arrowWrapperClass: o, arrowWrapperStyle: r, clsPrefix: n }) {
  return y("div", { key: "__popover-arrow__", style: r, class: [`${n}-popover-arrow-wrapper`, o] }, y("div", { class: [`${n}-popover-arrow`, e], style: t }));
}
const zg = ee({ name: "PopoverBody", inheritAttrs: false, props: vs, setup(e, { slots: t, attrs: o }) {
  const { namespaceRef: r, mergedClsPrefixRef: n, inlineThemeDisabled: i, mergedRtlRef: a } = vt(e), l = Ce("Popover", "-popover", Ig, Ht, e, n), s = Vo("Popover", a, n), c = _(null), d = ie("NPopover"), u = _(null), f = _(e.show), h = _(false);
  vo(() => {
    const { show: E } = e;
    E && !Pp() && !e.internalDeactivateImmediately && (h.value = true);
  });
  const p = B(() => {
    const { trigger: E, onClickoutside: $ } = e, T = [], { positionManuallyRef: { value: C } } = d;
    return C || (E === "click" && !$ && T.push([gn, z, void 0, { capture: true }]), E === "hover" && T.push([_h, R])), $ && T.push([gn, z, void 0, { capture: true }]), (e.displayDirective === "show" || e.animated && h.value) && T.push([tn, e.show]), T;
  }), m = B(() => {
    const { common: { cubicBezierEaseInOut: E, cubicBezierEaseIn: $, cubicBezierEaseOut: T }, self: { space: C, spaceArrow: O, padding: H, fontSize: A, textColor: W, dividerColor: k, color: q, boxShadow: le, borderRadius: se, arrowHeight: me, arrowOffset: ce, arrowOffsetVertical: Le } } = l.value;
    return { "--n-box-shadow": le, "--n-bezier": E, "--n-bezier-ease-in": $, "--n-bezier-ease-out": T, "--n-font-size": A, "--n-text-color": W, "--n-color": q, "--n-divider-color": k, "--n-border-radius": se, "--n-arrow-height": me, "--n-arrow-offset": ce, "--n-arrow-offset-vertical": Le, "--n-padding": H, "--n-space": C, "--n-space-arrow": O };
  }), v = B(() => {
    const E = e.width === "trigger" ? void 0 : lr(e.width), $ = [];
    E && $.push({ width: E });
    const { maxWidth: T, minWidth: C } = e;
    return T && $.push({ maxWidth: lr(T) }), C && $.push({ maxWidth: lr(C) }), i || $.push(m.value), $;
  }), g = i ? Rt("popover", void 0, m, e) : void 0;
  d.setBodyInstance({ syncPosition: x }), Ne(() => {
    d.setBodyInstance(null);
  }), Re(ge(e, "show"), (E) => {
    e.animated || (E ? f.value = true : f.value = false);
  });
  function x() {
    var E;
    (E = c.value) === null || E === void 0 || E.syncPosition();
  }
  function P(E) {
    e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(E);
  }
  function S(E) {
    e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(E);
  }
  function R(E) {
    e.trigger === "hover" && !b().contains(ko(E)) && d.handleMouseMoveOutside(E);
  }
  function z(E) {
    (e.trigger === "click" && !b().contains(ko(E)) || e.onClickoutside) && d.handleClickOutside(E);
  }
  function b() {
    return d.getTriggerElement();
  }
  Te(No, u), Te(Sr, null), Te(wr, null);
  function w() {
    if (g == null ? void 0 : g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value)) return null;
    let $;
    const T = d.internalRenderBodyRef.value, { value: C } = n;
    if (T) $ = T([`${C}-popover-shared`, (s == null ? void 0 : s.value) && `${C}-popover--rtl`, g == null ? void 0 : g.themeClass.value, e.overlap && `${C}-popover-shared--overlap`, e.showArrow && `${C}-popover-shared--show-arrow`, e.arrowPointToCenter && `${C}-popover-shared--center-arrow`], u, v.value, P, S);
    else {
      const { value: O } = d.extraClassRef, { internalTrapFocus: H } = e, A = !vn(t.header) || !vn(t.footer), W = () => {
        var k, q;
        const le = A ? y(eo, null, Ge(t.header, (ce) => ce ? y("div", { class: [`${C}-popover__header`, e.headerClass], style: e.headerStyle }, ce) : null), Ge(t.default, (ce) => ce ? y("div", { class: [`${C}-popover__content`, e.contentClass], style: e.contentStyle }, t) : null), Ge(t.footer, (ce) => ce ? y("div", { class: [`${C}-popover__footer`, e.footerClass], style: e.footerStyle }, ce) : null)) : e.scrollable ? (k = t.default) === null || k === void 0 ? void 0 : k.call(t) : y("div", { class: [`${C}-popover__content`, e.contentClass], style: e.contentStyle }, t), se = e.scrollable ? y(hs, { themeOverrides: l.value.peerOverrides.Scrollbar, theme: l.value.peers.Scrollbar, contentClass: A ? void 0 : `${C}-popover__content ${(q = e.contentClass) !== null && q !== void 0 ? q : ""}`, contentStyle: A ? void 0 : e.contentStyle }, { default: () => le }) : le, me = e.showArrow ? bs({ arrowClass: e.arrowClass, arrowStyle: e.arrowStyle, arrowWrapperClass: e.arrowWrapperClass, arrowWrapperStyle: e.arrowWrapperStyle, clsPrefix: C }) : null;
        return [se, me];
      };
      $ = y("div", Et({ class: [`${C}-popover`, `${C}-popover-shared`, (s == null ? void 0 : s.value) && `${C}-popover--rtl`, g == null ? void 0 : g.themeClass.value, O.map((k) => `${C}-${k}`), { [`${C}-popover--scrollable`]: e.scrollable, [`${C}-popover--show-header-or-footer`]: A, [`${C}-popover--raw`]: e.raw, [`${C}-popover-shared--overlap`]: e.overlap, [`${C}-popover-shared--show-arrow`]: e.showArrow, [`${C}-popover-shared--center-arrow`]: e.arrowPointToCenter }], ref: u, style: v.value, onKeydown: d.handleKeydown, onMouseenter: P, onMouseleave: S }, o), H ? y(rs, { active: e.show, autoFocus: true }, { default: W }) : W());
    }
    return Zt($, p.value);
  }
  return { displayed: h, namespace: r, isMounted: d.isMountedRef, zIndex: d.zIndexRef, followerRef: c, adjustedTo: go(e), followerEnabled: f, renderContentNode: w };
}, render() {
  return y(Ul, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === go.tdkey }, { default: () => this.animated ? y(kt, { name: "popover-transition", appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var e;
    (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), Ag = Object.keys(vs), Og = { focus: ["onFocus", "onBlur"], click: ["onClick"], hover: ["onMouseenter", "onMouseleave"], manual: [], nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"] };
function Mg(e, t, o) {
  Og[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const n = e.props[r], i = o[r];
    n ? e.props[r] = (...a) => {
      n(...a), i(...a);
    } : e.props[r] = i;
  });
}
const $r = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: "hover" }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: "top" }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: "if" }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: go.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number }, Bg = Object.assign(Object.assign(Object.assign({}, Ce.props), $r), { internalOnAfterLeave: Function, internalRenderBody: Function }), xs = ee({ name: "Popover", inheritAttrs: false, props: Bg, slots: Object, __popover__: true, setup(e) {
  const t = yr(), o = _(null), r = B(() => e.show), n = _(e.defaultShow), i = Fl(r, n), a = ot(() => e.disabled ? false : i.value), l = () => {
    if (e.disabled) return true;
    const { getDisabled: A } = e;
    return !!(A == null ? void 0 : A());
  }, s = () => l() ? false : i.value, c = Ll(e, ["arrow", "showArrow"]), d = B(() => e.overlap ? false : c.value);
  let u = null;
  const f = _(null), h = _(null), p = ot(() => e.x !== void 0 && e.y !== void 0);
  function m(A) {
    const { "onUpdate:show": W, onUpdateShow: k, onShow: q, onHide: le } = e;
    n.value = A, W && Ke(W, A), k && Ke(k, A), A && q && Ke(q, true), A && le && Ke(le, false);
  }
  function v() {
    u && u.syncPosition();
  }
  function g() {
    const { value: A } = f;
    A && (window.clearTimeout(A), f.value = null);
  }
  function x() {
    const { value: A } = h;
    A && (window.clearTimeout(A), h.value = null);
  }
  function P() {
    const A = l();
    if (e.trigger === "focus" && !A) {
      if (s()) return;
      m(true);
    }
  }
  function S() {
    const A = l();
    if (e.trigger === "focus" && !A) {
      if (!s()) return;
      m(false);
    }
  }
  function R() {
    const A = l();
    if (e.trigger === "hover" && !A) {
      if (x(), f.value !== null || s()) return;
      const W = () => {
        m(true), f.value = null;
      }, { delay: k } = e;
      k === 0 ? W() : f.value = window.setTimeout(W, k);
    }
  }
  function z() {
    const A = l();
    if (e.trigger === "hover" && !A) {
      if (g(), h.value !== null || !s()) return;
      const W = () => {
        m(false), h.value = null;
      }, { duration: k } = e;
      k === 0 ? W() : h.value = window.setTimeout(W, k);
    }
  }
  function b() {
    z();
  }
  function w(A) {
    var W;
    s() && (e.trigger === "click" && (g(), x(), m(false)), (W = e.onClickoutside) === null || W === void 0 || W.call(e, A));
  }
  function E() {
    if (e.trigger === "click" && !l()) {
      g(), x();
      const A = !s();
      m(A);
    }
  }
  function $(A) {
    e.internalTrapFocus && A.key === "Escape" && (g(), x(), m(false));
  }
  function T(A) {
    n.value = A;
  }
  function C() {
    var A;
    return (A = o.value) === null || A === void 0 ? void 0 : A.targetRef;
  }
  function O(A) {
    u = A;
  }
  return Te("NPopover", { getTriggerElement: C, handleKeydown: $, handleMouseEnter: R, handleMouseLeave: z, handleClickOutside: w, handleMouseMoveOutside: b, setBodyInstance: O, positionManuallyRef: p, isMountedRef: t, zIndexRef: ge(e, "zIndex"), extraClassRef: ge(e, "internalExtraClass"), internalRenderBodyRef: ge(e, "internalRenderBody") }), vo(() => {
    i.value && l() && m(false);
  }), { binderInstRef: o, positionManually: p, mergedShowConsideringDisabledProp: a, uncontrolledShow: n, mergedShowArrow: d, getMergedShow: s, setShow: T, handleClick: E, handleMouseEnter: R, handleMouseLeave: z, handleFocus: P, handleBlur: S, syncPosition: v };
}, render() {
  var e;
  const { positionManually: t, $slots: o } = this;
  let r, n = false;
  if (!t && (r = Ip(o, "trigger"), r)) {
    r = Va(r), r = r.type === yc ? y("span", [r]) : r;
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
      Mg(r, a ? "nested" : t ? "manual" : this.trigger, s);
    }
  }
  return y(Wl, { ref: "binderInstRef", syncTarget: !n, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    const i = this.getMergedShow();
    return [this.internalTrapFocus && i ? Zt(y("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 } }), [[jn, { enabled: i, zIndex: this.zIndex }]]) : null, t ? null : y(Vl, null, { default: () => r }), y(zg, Lo(this.$props, Ag, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: i })), { default: () => {
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
} }), kg = { closeIconSizeTiny: "12px", closeIconSizeSmall: "12px", closeIconSizeMedium: "14px", closeIconSizeLarge: "14px", closeSizeTiny: "16px", closeSizeSmall: "16px", closeSizeMedium: "18px", closeSizeLarge: "18px", padding: "0 7px", closeMargin: "0 0 0 4px" };
function Fg(e) {
  const { textColor2: t, primaryColorHover: o, primaryColorPressed: r, primaryColor: n, infoColor: i, successColor: a, warningColor: l, errorColor: s, baseColor: c, borderColor: d, opacityDisabled: u, tagColor: f, closeIconColor: h, closeIconColorHover: p, closeIconColorPressed: m, borderRadiusSmall: v, fontSizeMini: g, fontSizeTiny: x, fontSizeSmall: P, fontSizeMedium: S, heightMini: R, heightTiny: z, heightSmall: b, heightMedium: w, closeColorHover: E, closeColorPressed: $, buttonColor2Hover: T, buttonColor2Pressed: C, fontWeightStrong: O } = e;
  return Object.assign(Object.assign({}, kg), { closeBorderRadius: v, heightTiny: R, heightSmall: z, heightMedium: b, heightLarge: w, borderRadius: v, opacityDisabled: u, fontSizeTiny: g, fontSizeSmall: x, fontSizeMedium: P, fontSizeLarge: S, fontWeightStrong: O, textColorCheckable: t, textColorHoverCheckable: t, textColorPressedCheckable: t, textColorChecked: c, colorCheckable: "#0000", colorHoverCheckable: T, colorPressedCheckable: C, colorChecked: n, colorCheckedHover: o, colorCheckedPressed: r, border: `1px solid ${d}`, textColor: t, color: f, colorBordered: "rgb(250, 250, 252)", closeIconColor: h, closeIconColorHover: p, closeIconColorPressed: m, closeColorHover: E, closeColorPressed: $, borderPrimary: `1px solid ${G(n, { alpha: 0.3 })}`, textColorPrimary: n, colorPrimary: G(n, { alpha: 0.12 }), colorBorderedPrimary: G(n, { alpha: 0.1 }), closeIconColorPrimary: n, closeIconColorHoverPrimary: n, closeIconColorPressedPrimary: n, closeColorHoverPrimary: G(n, { alpha: 0.12 }), closeColorPressedPrimary: G(n, { alpha: 0.18 }), borderInfo: `1px solid ${G(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: G(i, { alpha: 0.12 }), colorBorderedInfo: G(i, { alpha: 0.1 }), closeIconColorInfo: i, closeIconColorHoverInfo: i, closeIconColorPressedInfo: i, closeColorHoverInfo: G(i, { alpha: 0.12 }), closeColorPressedInfo: G(i, { alpha: 0.18 }), borderSuccess: `1px solid ${G(a, { alpha: 0.3 })}`, textColorSuccess: a, colorSuccess: G(a, { alpha: 0.12 }), colorBorderedSuccess: G(a, { alpha: 0.1 }), closeIconColorSuccess: a, closeIconColorHoverSuccess: a, closeIconColorPressedSuccess: a, closeColorHoverSuccess: G(a, { alpha: 0.12 }), closeColorPressedSuccess: G(a, { alpha: 0.18 }), borderWarning: `1px solid ${G(l, { alpha: 0.35 })}`, textColorWarning: l, colorWarning: G(l, { alpha: 0.15 }), colorBorderedWarning: G(l, { alpha: 0.12 }), closeIconColorWarning: l, closeIconColorHoverWarning: l, closeIconColorPressedWarning: l, closeColorHoverWarning: G(l, { alpha: 0.12 }), closeColorPressedWarning: G(l, { alpha: 0.18 }), borderError: `1px solid ${G(s, { alpha: 0.23 })}`, textColorError: s, colorError: G(s, { alpha: 0.1 }), colorBorderedError: G(s, { alpha: 0.08 }), closeIconColorError: s, closeIconColorHoverError: s, closeIconColorPressedError: s, closeColorHoverError: G(s, { alpha: 0.12 }), closeColorPressedError: G(s, { alpha: 0.18 }) });
}
const Cs = { name: "Tag", common: L, self: Fg }, Lg = { paddingSingle: "0 26px 0 12px", paddingMultiple: "3px 26px 0 12px", clearSize: "16px", arrowSize: "16px" };
function Dg(e) {
  const { borderRadius: t, textColor2: o, textColorDisabled: r, inputColor: n, inputColorDisabled: i, primaryColor: a, primaryColorHover: l, warningColor: s, warningColorHover: c, errorColor: d, errorColorHover: u, borderColor: f, iconColor: h, iconColorDisabled: p, clearColor: m, clearColorHover: v, clearColorPressed: g, placeholderColor: x, placeholderColorDisabled: P, fontSizeTiny: S, fontSizeSmall: R, fontSizeMedium: z, fontSizeLarge: b, heightTiny: w, heightSmall: E, heightMedium: $, heightLarge: T, fontWeight: C } = e;
  return Object.assign(Object.assign({}, Lg), { fontSizeTiny: S, fontSizeSmall: R, fontSizeMedium: z, fontSizeLarge: b, heightTiny: w, heightSmall: E, heightMedium: $, heightLarge: T, borderRadius: t, fontWeight: C, textColor: o, textColorDisabled: r, placeholderColor: x, placeholderColorDisabled: P, color: n, colorDisabled: i, colorActive: n, border: `1px solid ${f}`, borderHover: `1px solid ${l}`, borderActive: `1px solid ${a}`, borderFocus: `1px solid ${l}`, boxShadowHover: "none", boxShadowActive: `0 0 0 2px ${G(a, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${G(a, { alpha: 0.2 })}`, caretColor: a, arrowColor: h, arrowColorDisabled: p, loadingColor: a, borderWarning: `1px solid ${s}`, borderHoverWarning: `1px solid ${c}`, borderActiveWarning: `1px solid ${s}`, borderFocusWarning: `1px solid ${c}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 0 2px ${G(s, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${G(s, { alpha: 0.2 })}`, colorActiveWarning: n, caretColorWarning: s, borderError: `1px solid ${d}`, borderHoverError: `1px solid ${u}`, borderActiveError: `1px solid ${d}`, borderFocusError: `1px solid ${u}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 0 2px ${G(d, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${G(d, { alpha: 0.2 })}`, colorActiveError: n, caretColorError: d, clearColor: m, clearColorHover: v, clearColorPressed: g });
}
const qn = { name: "InternalSelection", common: L, peers: { Popover: Ht }, self: Dg }, { cubicBezierEaseInOut: Ot } = to;
function Hg({ duration: e = ".2s", delay: t = ".1s" } = {}) {
  return [F("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }), F("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), F("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Ot},
 max-width ${e} ${Ot} ${t},
 margin-left ${e} ${Ot} ${t},
 margin-right ${e} ${Ot} ${t};
 `), F("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Ot} ${t},
 max-width ${e} ${Ot},
 margin-left ${e} ${Ot},
 margin-right ${e} ${Ot};
 `)];
}
const _g = Z("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Ng = ee({ name: "BaseWave", props: { clsPrefix: { type: String, required: true } }, setup(e) {
  jo("-base-wave", _g, ge(e, "clsPrefix"));
  const t = _(null), o = _(false);
  let r = null;
  return Ne(() => {
    r !== null && window.clearTimeout(r);
  }), { active: o, selfRef: t, play() {
    r !== null && (window.clearTimeout(r), o.value = false, r = null), Xt(() => {
      var n;
      (n = t.value) === null || n === void 0 || n.offsetHeight, o.value = true, r = window.setTimeout(() => {
        o.value = false, r = null;
      }, 1e3);
    });
  } };
}, render() {
  const { clsPrefix: e } = this;
  return y("div", { ref: "selfRef", "aria-hidden": true, class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`] });
} }), Wg = { iconMargin: "11px 8px 0 12px", iconMarginRtl: "11px 12px 0 8px", iconSize: "24px", closeIconSize: "16px", closeSize: "20px", closeMargin: "13px 14px 0 0", closeMarginRtl: "13px 0 0 14px", padding: "13px" };
function Vg(e) {
  const { lineHeight: t, borderRadius: o, fontWeightStrong: r, baseColor: n, dividerColor: i, actionColor: a, textColor1: l, textColor2: s, closeColorHover: c, closeColorPressed: d, closeIconColor: u, closeIconColorHover: f, closeIconColorPressed: h, infoColor: p, successColor: m, warningColor: v, errorColor: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, Wg), { fontSize: x, lineHeight: t, titleFontWeight: r, borderRadius: o, border: `1px solid ${i}`, color: a, titleTextColor: l, iconColor: s, contentTextColor: s, closeBorderRadius: o, closeColorHover: c, closeColorPressed: d, closeIconColor: u, closeIconColorHover: f, closeIconColorPressed: h, borderInfo: `1px solid ${N(n, G(p, { alpha: 0.25 }))}`, colorInfo: N(n, G(p, { alpha: 0.08 })), titleTextColorInfo: l, iconColorInfo: p, contentTextColorInfo: s, closeColorHoverInfo: c, closeColorPressedInfo: d, closeIconColorInfo: u, closeIconColorHoverInfo: f, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${N(n, G(m, { alpha: 0.25 }))}`, colorSuccess: N(n, G(m, { alpha: 0.08 })), titleTextColorSuccess: l, iconColorSuccess: m, contentTextColorSuccess: s, closeColorHoverSuccess: c, closeColorPressedSuccess: d, closeIconColorSuccess: u, closeIconColorHoverSuccess: f, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${N(n, G(v, { alpha: 0.33 }))}`, colorWarning: N(n, G(v, { alpha: 0.08 })), titleTextColorWarning: l, iconColorWarning: v, contentTextColorWarning: s, closeColorHoverWarning: c, closeColorPressedWarning: d, closeIconColorWarning: u, closeIconColorHoverWarning: f, closeIconColorPressedWarning: h, borderError: `1px solid ${N(n, G(g, { alpha: 0.25 }))}`, colorError: N(n, G(g, { alpha: 0.08 })), titleTextColorError: l, iconColorError: g, contentTextColorError: s, closeColorHoverError: c, closeColorPressedError: d, closeIconColorError: u, closeIconColorHoverError: f, closeIconColorPressedError: h });
}
const jg = { name: "Alert", common: L, self: Vg }, { cubicBezierEaseInOut: dt, cubicBezierEaseOut: Gg, cubicBezierEaseIn: Ug } = to;
function oC({ overflow: e = "hidden", duration: t = ".3s", originalTransition: o = "", leavingDelay: r = "0s", foldPadding: n = false, enterToProps: i = void 0, leaveToProps: a = void 0, reverse: l = false } = {}) {
  const s = l ? "leave" : "enter", c = l ? "enter" : "leave";
  return [F(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${s}-to`, Object.assign(Object.assign({}, i), { opacity: 1 })), F(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${s}-from`, Object.assign(Object.assign({}, a), { opacity: 0, marginTop: "0 !important", marginBottom: "0 !important", paddingTop: n ? "0 !important" : void 0, paddingBottom: n ? "0 !important" : void 0 })), F(`&.fade-in-height-expand-transition-${c}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${dt} ${r},
 opacity ${t} ${Gg} ${r},
 margin-top ${t} ${dt} ${r},
 margin-bottom ${t} ${dt} ${r},
 padding-top ${t} ${dt} ${r},
 padding-bottom ${t} ${dt} ${r}
 ${o ? `,${o}` : ""}
 `), F(`&.fade-in-height-expand-transition-${s}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${dt},
 opacity ${t} ${Ug},
 margin-top ${t} ${dt},
 margin-bottom ${t} ${dt},
 padding-top ${t} ${dt},
 padding-bottom ${t} ${dt}
 ${o ? `,${o}` : ""}
 `)];
}
const Kg = { linkFontSize: "13px", linkPadding: "0 0 0 16px", railWidth: "4px" };
function qg(e) {
  const { borderRadius: t, railColor: o, primaryColor: r, primaryColorHover: n, primaryColorPressed: i, textColor2: a } = e;
  return Object.assign(Object.assign({}, Kg), { borderRadius: t, railColor: o, railColorActive: r, linkColor: G(r, { alpha: 0.15 }), linkTextColor: a, linkTextColorHover: n, linkTextColorPressed: i, linkTextColorActive: r });
}
const Yg = { name: "Anchor", common: L, self: qg }, Xg = Wo && "chrome" in window;
Wo && navigator.userAgent.includes("Firefox");
const Zg = Wo && navigator.userAgent.includes("Safari") && !Xg, Qg = { paddingTiny: "0 8px", paddingSmall: "0 10px", paddingMedium: "0 12px", paddingLarge: "0 14px", clearSize: "16px" };
function Jg(e) {
  const { textColor2: t, textColor3: o, textColorDisabled: r, primaryColor: n, primaryColorHover: i, inputColor: a, inputColorDisabled: l, borderColor: s, warningColor: c, warningColorHover: d, errorColor: u, errorColorHover: f, borderRadius: h, lineHeight: p, fontSizeTiny: m, fontSizeSmall: v, fontSizeMedium: g, fontSizeLarge: x, heightTiny: P, heightSmall: S, heightMedium: R, heightLarge: z, actionColor: b, clearColor: w, clearColorHover: E, clearColorPressed: $, placeholderColor: T, placeholderColorDisabled: C, iconColor: O, iconColorDisabled: H, iconColorHover: A, iconColorPressed: W, fontWeight: k } = e;
  return Object.assign(Object.assign({}, Qg), { fontWeight: k, countTextColorDisabled: r, countTextColor: o, heightTiny: P, heightSmall: S, heightMedium: R, heightLarge: z, fontSizeTiny: m, fontSizeSmall: v, fontSizeMedium: g, fontSizeLarge: x, lineHeight: p, lineHeightTextarea: p, borderRadius: h, iconSize: "16px", groupLabelColor: b, groupLabelTextColor: t, textColor: t, textColorDisabled: r, textDecorationColor: t, caretColor: n, placeholderColor: T, placeholderColorDisabled: C, color: a, colorDisabled: l, colorFocus: a, groupLabelBorder: `1px solid ${s}`, border: `1px solid ${s}`, borderHover: `1px solid ${i}`, borderDisabled: `1px solid ${s}`, borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 0 2px ${G(n, { alpha: 0.2 })}`, loadingColor: n, loadingColorWarning: c, borderWarning: `1px solid ${c}`, borderHoverWarning: `1px solid ${d}`, colorFocusWarning: a, borderFocusWarning: `1px solid ${d}`, boxShadowFocusWarning: `0 0 0 2px ${G(c, { alpha: 0.2 })}`, caretColorWarning: c, loadingColorError: u, borderError: `1px solid ${u}`, borderHoverError: `1px solid ${f}`, colorFocusError: a, borderFocusError: `1px solid ${f}`, boxShadowFocusError: `0 0 0 2px ${G(u, { alpha: 0.2 })}`, caretColorError: u, clearColor: w, clearColorHover: E, clearColorPressed: $, iconColor: O, iconColorDisabled: H, iconColorHover: A, iconColorPressed: W, suffixTextColor: t });
}
const Qe = { name: "Input", common: L, peers: { Scrollbar: Fe }, self: Jg };
function em(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const tm = { name: "AutoComplete", common: L, peers: { InternalSelectMenu: Uo, Input: Qe }, self: em };
function om(e) {
  const { borderRadius: t, avatarColor: o, cardColor: r, fontSize: n, heightTiny: i, heightSmall: a, heightMedium: l, heightLarge: s, heightHuge: c, modalColor: d, popoverColor: u } = e;
  return { borderRadius: t, fontSize: n, border: `2px solid ${r}`, heightTiny: i, heightSmall: a, heightMedium: l, heightLarge: s, heightHuge: c, color: N(r, o), colorModal: N(d, o), colorPopover: N(u, o) };
}
const ys = { name: "Avatar", common: L, self: om };
function rm() {
  return { gap: "-12px" };
}
const nm = { name: "AvatarGroup", common: L, peers: { Avatar: ys }, self: rm }, im = { width: "44px", height: "44px", borderRadius: "22px", iconSize: "26px" };
function am(e) {
  const { popoverColor: t, textColor2: o, primaryColorHover: r, primaryColorPressed: n } = e;
  return Object.assign(Object.assign({}, im), { color: t, textColor: o, iconColor: o, iconColorHover: r, iconColorPressed: n, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
}
const lm = { name: "BackTop", common: L, self: am };
function sm(e) {
  const { errorColor: t, infoColor: o, successColor: r, warningColor: n, fontFamily: i } = e;
  return { color: t, colorInfo: o, colorSuccess: r, colorError: t, colorWarning: n, fontSize: "12px", fontFamily: i };
}
const cm = { name: "Badge", common: L, self: sm }, dm = { fontWeightActive: "400" };
function um(e) {
  const { fontSize: t, textColor3: o, textColor2: r, borderRadius: n, buttonColor2Hover: i, buttonColor2Pressed: a } = e;
  return Object.assign(Object.assign({}, dm), { fontSize: t, itemLineHeight: "1.25", itemTextColor: o, itemTextColorHover: r, itemTextColorPressed: r, itemTextColorActive: r, itemBorderRadius: n, itemColorHover: i, itemColorPressed: a, separatorColor: o });
}
const fm = { name: "Breadcrumb", common: L, self: um };
function Wt(e) {
  return N(e, [255, 255, 255, 0.16]);
}
function nr(e) {
  return N(e, [0, 0, 0, 0.12]);
}
const hm = "n-button-group", pm = { paddingTiny: "0 6px", paddingSmall: "0 10px", paddingMedium: "0 14px", paddingLarge: "0 18px", paddingRoundTiny: "0 10px", paddingRoundSmall: "0 14px", paddingRoundMedium: "0 18px", paddingRoundLarge: "0 22px", iconMarginTiny: "6px", iconMarginSmall: "6px", iconMarginMedium: "6px", iconMarginLarge: "6px", iconSizeTiny: "14px", iconSizeSmall: "18px", iconSizeMedium: "18px", iconSizeLarge: "20px", rippleDuration: ".6s" };
function gm(e) {
  const { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadius: i, fontSizeTiny: a, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: c, opacityDisabled: d, textColor2: u, textColor3: f, primaryColorHover: h, primaryColorPressed: p, borderColor: m, primaryColor: v, baseColor: g, infoColor: x, infoColorHover: P, infoColorPressed: S, successColor: R, successColorHover: z, successColorPressed: b, warningColor: w, warningColorHover: E, warningColorPressed: $, errorColor: T, errorColorHover: C, errorColorPressed: O, fontWeight: H, buttonColor2: A, buttonColor2Hover: W, buttonColor2Pressed: k, fontWeightStrong: q } = e;
  return Object.assign(Object.assign({}, pm), { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadiusTiny: i, borderRadiusSmall: i, borderRadiusMedium: i, borderRadiusLarge: i, fontSizeTiny: a, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: c, opacityDisabled: d, colorOpacitySecondary: "0.16", colorOpacitySecondaryHover: "0.22", colorOpacitySecondaryPressed: "0.28", colorSecondary: A, colorSecondaryHover: W, colorSecondaryPressed: k, colorTertiary: A, colorTertiaryHover: W, colorTertiaryPressed: k, colorQuaternary: "#0000", colorQuaternaryHover: W, colorQuaternaryPressed: k, color: "#0000", colorHover: "#0000", colorPressed: "#0000", colorFocus: "#0000", colorDisabled: "#0000", textColor: u, textColorTertiary: f, textColorHover: h, textColorPressed: p, textColorFocus: h, textColorDisabled: u, textColorText: u, textColorTextHover: h, textColorTextPressed: p, textColorTextFocus: h, textColorTextDisabled: u, textColorGhost: u, textColorGhostHover: h, textColorGhostPressed: p, textColorGhostFocus: h, textColorGhostDisabled: u, border: `1px solid ${m}`, borderHover: `1px solid ${h}`, borderPressed: `1px solid ${p}`, borderFocus: `1px solid ${h}`, borderDisabled: `1px solid ${m}`, rippleColor: v, colorPrimary: v, colorHoverPrimary: h, colorPressedPrimary: p, colorFocusPrimary: h, colorDisabledPrimary: v, textColorPrimary: g, textColorHoverPrimary: g, textColorPressedPrimary: g, textColorFocusPrimary: g, textColorDisabledPrimary: g, textColorTextPrimary: v, textColorTextHoverPrimary: h, textColorTextPressedPrimary: p, textColorTextFocusPrimary: h, textColorTextDisabledPrimary: u, textColorGhostPrimary: v, textColorGhostHoverPrimary: h, textColorGhostPressedPrimary: p, textColorGhostFocusPrimary: h, textColorGhostDisabledPrimary: v, borderPrimary: `1px solid ${v}`, borderHoverPrimary: `1px solid ${h}`, borderPressedPrimary: `1px solid ${p}`, borderFocusPrimary: `1px solid ${h}`, borderDisabledPrimary: `1px solid ${v}`, rippleColorPrimary: v, colorInfo: x, colorHoverInfo: P, colorPressedInfo: S, colorFocusInfo: P, colorDisabledInfo: x, textColorInfo: g, textColorHoverInfo: g, textColorPressedInfo: g, textColorFocusInfo: g, textColorDisabledInfo: g, textColorTextInfo: x, textColorTextHoverInfo: P, textColorTextPressedInfo: S, textColorTextFocusInfo: P, textColorTextDisabledInfo: u, textColorGhostInfo: x, textColorGhostHoverInfo: P, textColorGhostPressedInfo: S, textColorGhostFocusInfo: P, textColorGhostDisabledInfo: x, borderInfo: `1px solid ${x}`, borderHoverInfo: `1px solid ${P}`, borderPressedInfo: `1px solid ${S}`, borderFocusInfo: `1px solid ${P}`, borderDisabledInfo: `1px solid ${x}`, rippleColorInfo: x, colorSuccess: R, colorHoverSuccess: z, colorPressedSuccess: b, colorFocusSuccess: z, colorDisabledSuccess: R, textColorSuccess: g, textColorHoverSuccess: g, textColorPressedSuccess: g, textColorFocusSuccess: g, textColorDisabledSuccess: g, textColorTextSuccess: R, textColorTextHoverSuccess: z, textColorTextPressedSuccess: b, textColorTextFocusSuccess: z, textColorTextDisabledSuccess: u, textColorGhostSuccess: R, textColorGhostHoverSuccess: z, textColorGhostPressedSuccess: b, textColorGhostFocusSuccess: z, textColorGhostDisabledSuccess: R, borderSuccess: `1px solid ${R}`, borderHoverSuccess: `1px solid ${z}`, borderPressedSuccess: `1px solid ${b}`, borderFocusSuccess: `1px solid ${z}`, borderDisabledSuccess: `1px solid ${R}`, rippleColorSuccess: R, colorWarning: w, colorHoverWarning: E, colorPressedWarning: $, colorFocusWarning: E, colorDisabledWarning: w, textColorWarning: g, textColorHoverWarning: g, textColorPressedWarning: g, textColorFocusWarning: g, textColorDisabledWarning: g, textColorTextWarning: w, textColorTextHoverWarning: E, textColorTextPressedWarning: $, textColorTextFocusWarning: E, textColorTextDisabledWarning: u, textColorGhostWarning: w, textColorGhostHoverWarning: E, textColorGhostPressedWarning: $, textColorGhostFocusWarning: E, textColorGhostDisabledWarning: w, borderWarning: `1px solid ${w}`, borderHoverWarning: `1px solid ${E}`, borderPressedWarning: `1px solid ${$}`, borderFocusWarning: `1px solid ${E}`, borderDisabledWarning: `1px solid ${w}`, rippleColorWarning: w, colorError: T, colorHoverError: C, colorPressedError: O, colorFocusError: C, colorDisabledError: T, textColorError: g, textColorHoverError: g, textColorPressedError: g, textColorFocusError: g, textColorDisabledError: g, textColorTextError: T, textColorTextHoverError: C, textColorTextPressedError: O, textColorTextFocusError: C, textColorTextDisabledError: u, textColorGhostError: T, textColorGhostHoverError: C, textColorGhostPressedError: O, textColorGhostFocusError: C, textColorGhostDisabledError: T, borderError: `1px solid ${T}`, borderHoverError: `1px solid ${C}`, borderPressedError: `1px solid ${O}`, borderFocusError: `1px solid ${C}`, borderDisabledError: `1px solid ${T}`, rippleColorError: T, waveOpacity: "0.6", fontWeight: H, fontWeightStrong: q });
}
const We = { name: "Button", common: L, self: gm }, mm = F([Z("button", `
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
 `, [U("color", [j("border", { borderColor: "var(--n-border-color)" }), U("disabled", [j("border", { borderColor: "var(--n-border-color-disabled)" })]), $t("disabled", [F("&:focus", [j("state-border", { borderColor: "var(--n-border-color-focus)" })]), F("&:hover", [j("state-border", { borderColor: "var(--n-border-color-hover)" })]), F("&:active", [j("state-border", { borderColor: "var(--n-border-color-pressed)" })]), U("pressed", [j("state-border", { borderColor: "var(--n-border-color-pressed)" })])])]), U("disabled", { backgroundColor: "var(--n-color-disabled)", color: "var(--n-text-color-disabled)" }, [j("border", { border: "var(--n-border-disabled)" })]), $t("disabled", [F("&:focus", { backgroundColor: "var(--n-color-focus)", color: "var(--n-text-color-focus)" }, [j("state-border", { border: "var(--n-border-focus)" })]), F("&:hover", { backgroundColor: "var(--n-color-hover)", color: "var(--n-text-color-hover)" }, [j("state-border", { border: "var(--n-border-hover)" })]), F("&:active", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [j("state-border", { border: "var(--n-border-pressed)" })]), U("pressed", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [j("state-border", { border: "var(--n-border-pressed)" })])]), U("loading", "cursor: wait;"), Z("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [U("active", { zIndex: 1, animationName: "button-wave-spread, button-wave-opacity" })]), Wo && "MozBoxSizing" in document.createElement("div").style ? F("&::moz-focus-inner", { border: 0 }) : null, j("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), j("border", `
 border: var(--n-border);
 `), j("state-border", `
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `), j("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [Z("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [bn({ top: "50%", originalTransform: "translateY(-50%)" })]), Hg()]), j("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [F("~", [j("icon", { margin: "var(--n-icon-margin)", marginRight: 0 })])]), U("block", `
 display: flex;
 width: 100%;
 `), U("dashed", [j("border, state-border", { borderStyle: "dashed !important" })]), U("disabled", { cursor: "not-allowed", opacity: "var(--n-opacity-disabled)" })]), F("@keyframes button-wave-spread", { from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" }, to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" } }), F("@keyframes button-wave-opacity", { from: { opacity: "var(--n-wave-opacity)" }, to: { opacity: 0 } })]), vm = Object.assign(Object.assign({}, Ce.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: "button" }, type: { type: String, default: "default" }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: "left" }, attrType: { type: String, default: "button" }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !Zg } }), Cn = ee({ name: "Button", props: vm, slots: Object, setup(e) {
  const t = _(null), o = _(null), r = _(false), n = ot(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), i = ie(hm, {}), { mergedSizeRef: a } = Ap({}, { defaultSize: "medium", mergedSize: (S) => {
    const { size: R } = e;
    if (R) return R;
    const { size: z } = i;
    if (z) return z;
    const { mergedSize: b } = S || {};
    return b ? b.value : "medium";
  } }), l = B(() => e.focusable && !e.disabled), s = (S) => {
    var R;
    l.value || S.preventDefault(), !e.nativeFocusBehavior && (S.preventDefault(), !e.disabled && l.value && ((R = t.value) === null || R === void 0 || R.focus({ preventScroll: true })));
  }, c = (S) => {
    var R;
    if (!e.disabled && !e.loading) {
      const { onClick: z } = e;
      z && Ke(z, S), e.text || (R = o.value) === null || R === void 0 || R.play();
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
  }, { inlineThemeDisabled: h, mergedClsPrefixRef: p, mergedRtlRef: m } = vt(e), v = Ce("Button", "-button", mm, We, e, p), g = Vo("Button", m, p), x = B(() => {
    const S = v.value, { common: { cubicBezierEaseInOut: R, cubicBezierEaseOut: z }, self: b } = S, { rippleDuration: w, opacityDisabled: E, fontWeight: $, fontWeightStrong: T } = b, C = a.value, { dashed: O, type: H, ghost: A, text: W, color: k, round: q, circle: le, textColor: se, secondary: me, tertiary: ce, quaternary: Le, strong: He } = e, rt = { "--n-font-weight": He ? T : $ };
    let ne = { "--n-color": "initial", "--n-color-hover": "initial", "--n-color-pressed": "initial", "--n-color-focus": "initial", "--n-color-disabled": "initial", "--n-ripple-color": "initial", "--n-text-color": "initial", "--n-text-color-hover": "initial", "--n-text-color-pressed": "initial", "--n-text-color-focus": "initial", "--n-text-color-disabled": "initial" };
    const I = H === "tertiary", V = H === "default", M = I ? "default" : H;
    if (W) {
      const Se = se || k;
      ne = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": "#0000", "--n-text-color": Se || b[Q("textColorText", M)], "--n-text-color-hover": Se ? Wt(Se) : b[Q("textColorTextHover", M)], "--n-text-color-pressed": Se ? nr(Se) : b[Q("textColorTextPressed", M)], "--n-text-color-focus": Se ? Wt(Se) : b[Q("textColorTextHover", M)], "--n-text-color-disabled": Se || b[Q("textColorTextDisabled", M)] };
    } else if (A || O) {
      const Se = se || k;
      ne = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": k || b[Q("rippleColor", M)], "--n-text-color": Se || b[Q("textColorGhost", M)], "--n-text-color-hover": Se ? Wt(Se) : b[Q("textColorGhostHover", M)], "--n-text-color-pressed": Se ? nr(Se) : b[Q("textColorGhostPressed", M)], "--n-text-color-focus": Se ? Wt(Se) : b[Q("textColorGhostHover", M)], "--n-text-color-disabled": Se || b[Q("textColorGhostDisabled", M)] };
    } else if (me) {
      const Se = V ? b.textColor : I ? b.textColorTertiary : b[Q("color", M)], Be = k || Se, _t = H !== "default" && H !== "tertiary";
      ne = { "--n-color": _t ? G(Be, { alpha: Number(b.colorOpacitySecondary) }) : b.colorSecondary, "--n-color-hover": _t ? G(Be, { alpha: Number(b.colorOpacitySecondaryHover) }) : b.colorSecondaryHover, "--n-color-pressed": _t ? G(Be, { alpha: Number(b.colorOpacitySecondaryPressed) }) : b.colorSecondaryPressed, "--n-color-focus": _t ? G(Be, { alpha: Number(b.colorOpacitySecondaryHover) }) : b.colorSecondaryHover, "--n-color-disabled": b.colorSecondary, "--n-ripple-color": "#0000", "--n-text-color": Be, "--n-text-color-hover": Be, "--n-text-color-pressed": Be, "--n-text-color-focus": Be, "--n-text-color-disabled": Be };
    } else if (ce || Le) {
      const Se = V ? b.textColor : I ? b.textColorTertiary : b[Q("color", M)], Be = k || Se;
      ce ? (ne["--n-color"] = b.colorTertiary, ne["--n-color-hover"] = b.colorTertiaryHover, ne["--n-color-pressed"] = b.colorTertiaryPressed, ne["--n-color-focus"] = b.colorSecondaryHover, ne["--n-color-disabled"] = b.colorTertiary) : (ne["--n-color"] = b.colorQuaternary, ne["--n-color-hover"] = b.colorQuaternaryHover, ne["--n-color-pressed"] = b.colorQuaternaryPressed, ne["--n-color-focus"] = b.colorQuaternaryHover, ne["--n-color-disabled"] = b.colorQuaternary), ne["--n-ripple-color"] = "#0000", ne["--n-text-color"] = Be, ne["--n-text-color-hover"] = Be, ne["--n-text-color-pressed"] = Be, ne["--n-text-color-focus"] = Be, ne["--n-text-color-disabled"] = Be;
    } else ne = { "--n-color": k || b[Q("color", M)], "--n-color-hover": k ? Wt(k) : b[Q("colorHover", M)], "--n-color-pressed": k ? nr(k) : b[Q("colorPressed", M)], "--n-color-focus": k ? Wt(k) : b[Q("colorFocus", M)], "--n-color-disabled": k || b[Q("colorDisabled", M)], "--n-ripple-color": k || b[Q("rippleColor", M)], "--n-text-color": se || (k ? b.textColorPrimary : I ? b.textColorTertiary : b[Q("textColor", M)]), "--n-text-color-hover": se || (k ? b.textColorHoverPrimary : b[Q("textColorHover", M)]), "--n-text-color-pressed": se || (k ? b.textColorPressedPrimary : b[Q("textColorPressed", M)]), "--n-text-color-focus": se || (k ? b.textColorFocusPrimary : b[Q("textColorFocus", M)]), "--n-text-color-disabled": se || (k ? b.textColorDisabledPrimary : b[Q("textColorDisabled", M)]) };
    let Y = { "--n-border": "initial", "--n-border-hover": "initial", "--n-border-pressed": "initial", "--n-border-focus": "initial", "--n-border-disabled": "initial" };
    W ? Y = { "--n-border": "none", "--n-border-hover": "none", "--n-border-pressed": "none", "--n-border-focus": "none", "--n-border-disabled": "none" } : Y = { "--n-border": b[Q("border", M)], "--n-border-hover": b[Q("borderHover", M)], "--n-border-pressed": b[Q("borderPressed", M)], "--n-border-focus": b[Q("borderFocus", M)], "--n-border-disabled": b[Q("borderDisabled", M)] };
    const { [Q("height", C)]: re, [Q("fontSize", C)]: xe, [Q("padding", C)]: te, [Q("paddingRound", C)]: oe, [Q("iconSize", C)]: ye, [Q("borderRadius", C)]: nt, [Q("iconMargin", C)]: Me, waveOpacity: Tr } = b, Rr = { "--n-width": le && !W ? re : "initial", "--n-height": W ? "initial" : re, "--n-font-size": xe, "--n-padding": le || W ? "initial" : q ? oe : te, "--n-icon-size": ye, "--n-icon-margin": Me, "--n-border-radius": W ? "initial" : le || q ? re : nt };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": R, "--n-bezier-ease-out": z, "--n-ripple-duration": w, "--n-opacity-disabled": E, "--n-wave-opacity": Tr }, rt), ne), Y), Rr);
  }), P = h ? Rt("button", B(() => {
    let S = "";
    const { dashed: R, type: z, ghost: b, text: w, color: E, round: $, circle: T, textColor: C, secondary: O, tertiary: H, quaternary: A, strong: W } = e;
    R && (S += "a"), b && (S += "b"), w && (S += "c"), $ && (S += "d"), T && (S += "e"), O && (S += "f"), H && (S += "g"), A && (S += "h"), W && (S += "i"), E && (S += `j${va(E)}`), C && (S += `k${va(C)}`);
    const { value: k } = a;
    return S += `l${k[0]}`, S += `m${z[0]}`, S;
  }), x, e) : void 0;
  return { selfElRef: t, waveElRef: o, mergedClsPrefix: p, mergedFocusable: l, mergedSize: a, showBorder: n, enterPressed: r, rtlEnabled: g, handleMousedown: s, handleKeydown: u, handleBlur: f, handleKeyup: d, handleClick: c, customColorCssVars: B(() => {
    const { color: S } = e;
    if (!S) return null;
    const R = Wt(S);
    return { "--n-border-color": S, "--n-border-color-hover": R, "--n-border-color-pressed": nr(S), "--n-border-color-focus": R, "--n-border-color-disabled": S };
  }), cssVars: h ? void 0 : x, themeClass: P == null ? void 0 : P.themeClass, onRender: P == null ? void 0 : P.onRender };
}, render() {
  const { mergedClsPrefix: e, tag: t, onRender: o } = this;
  o == null ? void 0 : o();
  const r = Ge(this.$slots.default, (n) => n && y("span", { class: `${e}-button__content` }, n));
  return y(t, { ref: "selfElRef", class: [this.themeClass, `${e}-button`, `${e}-button--${this.type}-type`, `${e}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e}-button--rtl`, this.disabled && `${e}-button--disabled`, this.block && `${e}-button--block`, this.enterPressed && `${e}-button--pressed`, !this.text && this.dashed && `${e}-button--dashed`, this.color && `${e}-button--color`, this.secondary && `${e}-button--secondary`, this.loading && `${e}-button--loading`, this.ghost && `${e}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === "right" && r, y(Vp, { width: true }, { default: () => Ge(this.$slots.icon, (n) => (this.loading || this.renderIcon || n) && y("span", { class: `${e}-button__icon`, style: { margin: vn(this.$slots.default) ? "0" : "" } }, y(ss, null, { default: () => this.loading ? y(Up, { clsPrefix: e, key: "loading", class: `${e}-icon-slot`, strokeWidth: 20 }) : y("div", { key: "icon", class: `${e}-icon-slot`, role: "none" }, this.renderIcon ? this.renderIcon() : n) }))) }), this.iconPlacement === "left" && r, this.text ? null : y(Ng, { ref: "waveElRef", clsPrefix: e }), this.showBorder ? y("div", { "aria-hidden": true, class: `${e}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? y("div", { "aria-hidden": true, class: `${e}-button__state-border`, style: this.customColorCssVars }) : null);
} }), rC = Cn, bm = { titleFontSize: "22px" };
function xm(e) {
  const { borderRadius: t, fontSize: o, lineHeight: r, textColor2: n, textColor1: i, textColorDisabled: a, dividerColor: l, fontWeightStrong: s, primaryColor: c, baseColor: d, hoverColor: u, cardColor: f, modalColor: h, popoverColor: p } = e;
  return Object.assign(Object.assign({}, bm), { borderRadius: t, borderColor: N(f, l), borderColorModal: N(h, l), borderColorPopover: N(p, l), textColor: n, titleFontWeight: s, titleTextColor: i, dayTextColor: a, fontSize: o, lineHeight: r, dateColorCurrent: c, dateTextColorCurrent: d, cellColorHover: N(f, u), cellColorHoverModal: N(h, u), cellColorHoverPopover: N(p, u), cellColor: f, cellColorModal: h, cellColorPopover: p, barColor: c });
}
const Cm = { name: "Calendar", common: L, peers: { Button: We }, self: xm }, ym = { paddingSmall: "12px 16px 12px", paddingMedium: "19px 24px 20px", paddingLarge: "23px 32px 24px", paddingHuge: "27px 40px 28px", titleFontSizeSmall: "16px", titleFontSizeMedium: "18px", titleFontSizeLarge: "18px", titleFontSizeHuge: "18px", closeIconSize: "18px", closeSize: "22px" };
function Sm(e) {
  const { primaryColor: t, borderRadius: o, lineHeight: r, fontSize: n, cardColor: i, textColor2: a, textColor1: l, dividerColor: s, fontWeightStrong: c, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, closeColorHover: h, closeColorPressed: p, modalColor: m, boxShadow1: v, popoverColor: g, actionColor: x } = e;
  return Object.assign(Object.assign({}, ym), { lineHeight: r, color: i, colorModal: m, colorPopover: g, colorTarget: t, colorEmbedded: x, colorEmbeddedModal: x, colorEmbeddedPopover: x, textColor: a, titleTextColor: l, borderColor: s, actionColor: x, titleFontWeight: c, closeColorHover: h, closeColorPressed: p, closeBorderRadius: o, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, fontSizeSmall: n, fontSizeMedium: n, fontSizeLarge: n, fontSizeHuge: n, boxShadow: v, borderRadius: o });
}
const Yn = { name: "Card", common: L, self: Sm }, wm = F([Z("card", `
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
 `, [Il({ background: "var(--n-color-modal)" }), U("hoverable", [F("&:hover", "box-shadow: var(--n-box-shadow);")]), U("content-segmented", [F(">", [j("content", { paddingTop: "var(--n-padding-bottom)" })])]), U("content-soft-segmented", [F(">", [j("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), U("footer-segmented", [F(">", [j("footer", { paddingTop: "var(--n-padding-bottom)" })])]), U("footer-soft-segmented", [F(">", [j("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), F(">", [Z("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [j("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), j("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), j("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), j("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), j("content", "flex: 1; min-width: 0;"), j("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [F("&:first-child", { paddingTop: "var(--n-padding-bottom)" })]), j("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), Z("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [F("img", `
 display: block;
 width: 100%;
 `)]), U("bordered", `
 border: 1px solid var(--n-border-color);
 `, [F("&:target", "border-color: var(--n-color-target);")]), U("action-segmented", [F(">", [j("action", [F("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("content-segmented, content-soft-segmented", [F(">", [j("content", { transition: "border-color 0.3s var(--n-bezier)" }, [F("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("footer-segmented, footer-soft-segmented", [F(">", [j("footer", { transition: "border-color 0.3s var(--n-bezier)" }, [F("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("embedded", `
 background-color: var(--n-color-embedded);
 `)]), Rl(Z("card", `
 background: var(--n-color-modal);
 `, [U("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), nh(Z("card", `
 background: var(--n-color-popover);
 `, [U("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), Xn = { title: [String, Function], contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], headerExtraClass: String, headerExtraStyle: [Object, String], footerClass: String, footerStyle: [Object, String], embedded: Boolean, segmented: { type: [Boolean, Object], default: false }, size: { type: String, default: "medium" }, bordered: { type: Boolean, default: true }, closable: Boolean, hoverable: Boolean, role: String, onClose: [Function, Array], tag: { type: String, default: "div" }, cover: Function, content: [String, Function], footer: Function, action: Function, headerExtra: Function, closeFocusable: Boolean }, $m = Un(Xn), Pm = Object.assign(Object.assign({}, Ce.props), Xn), Em = ee({ name: "Card", props: Pm, slots: Object, setup(e) {
  const t = () => {
    const { onClose: c } = e;
    c && Ke(c);
  }, { inlineThemeDisabled: o, mergedClsPrefixRef: r, mergedRtlRef: n } = vt(e), i = Ce("Card", "-card", wm, Yn, e, r), a = Vo("Card", n, r), l = B(() => {
    const { size: c } = e, { self: { color: d, colorModal: u, colorTarget: f, textColor: h, titleTextColor: p, titleFontWeight: m, borderColor: v, actionColor: g, borderRadius: x, lineHeight: P, closeIconColor: S, closeIconColorHover: R, closeIconColorPressed: z, closeColorHover: b, closeColorPressed: w, closeBorderRadius: E, closeIconSize: $, closeSize: T, boxShadow: C, colorPopover: O, colorEmbedded: H, colorEmbeddedModal: A, colorEmbeddedPopover: W, [Q("padding", c)]: k, [Q("fontSize", c)]: q, [Q("titleFontSize", c)]: le }, common: { cubicBezierEaseInOut: se } } = i.value, { top: me, left: ce, bottom: Le } = jt(k);
    return { "--n-bezier": se, "--n-border-radius": x, "--n-color": d, "--n-color-modal": u, "--n-color-popover": O, "--n-color-embedded": H, "--n-color-embedded-modal": A, "--n-color-embedded-popover": W, "--n-color-target": f, "--n-text-color": h, "--n-line-height": P, "--n-action-color": g, "--n-title-text-color": p, "--n-title-font-weight": m, "--n-close-icon-color": S, "--n-close-icon-color-hover": R, "--n-close-icon-color-pressed": z, "--n-close-color-hover": b, "--n-close-color-pressed": w, "--n-border-color": v, "--n-box-shadow": C, "--n-padding-top": me, "--n-padding-bottom": Le, "--n-padding-left": ce, "--n-font-size": q, "--n-title-font-size": le, "--n-close-size": T, "--n-close-icon-size": $, "--n-close-border-radius": E };
  }), s = o ? Rt("card", B(() => e.size[0]), l, e) : void 0;
  return { rtlEnabled: a, mergedClsPrefix: r, mergedTheme: i, handleCloseClick: t, cssVars: o ? void 0 : l, themeClass: s == null ? void 0 : s.themeClass, onRender: s == null ? void 0 : s.onRender };
}, render() {
  const { segmented: e, bordered: t, hoverable: o, mergedClsPrefix: r, rtlEnabled: n, onRender: i, embedded: a, tag: l, $slots: s } = this;
  return i == null ? void 0 : i(), y(l, { class: [`${r}-card`, this.themeClass, a && `${r}-card--embedded`, { [`${r}-card--rtl`]: n, [`${r}-card--content${typeof e != "boolean" && e.content === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.content, [`${r}-card--footer${typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.footer, [`${r}-card--action-segmented`]: e === true || e !== false && e.action, [`${r}-card--bordered`]: t, [`${r}-card--hoverable`]: o }], style: this.cssVars, role: this.role }, Ge(s.cover, (c) => {
    const d = this.cover ? tt([this.cover()]) : c;
    return d && y("div", { class: `${r}-card-cover`, role: "none" }, d);
  }), Ge(s.header, (c) => {
    const { title: d } = this, u = d ? tt(typeof d == "function" ? [d()] : [d]) : c;
    return u || this.closable ? y("div", { class: [`${r}-card-header`, this.headerClass], style: this.headerStyle, role: "heading" }, y("div", { class: `${r}-card-header__main`, role: "heading" }, u), Ge(s["header-extra"], (f) => {
      const h = this.headerExtra ? tt([this.headerExtra()]) : f;
      return h && y("div", { class: [`${r}-card-header__extra`, this.headerExtraClass], style: this.headerExtraStyle }, h);
    }), this.closable && y(cs, { clsPrefix: r, class: `${r}-card-header__close`, onClick: this.handleCloseClick, focusable: this.closeFocusable, absolute: true })) : null;
  }), Ge(s.default, (c) => {
    const { content: d } = this, u = d ? tt(typeof d == "function" ? [d()] : [d]) : c;
    return u && y("div", { class: [`${r}-card__content`, this.contentClass], style: this.contentStyle, role: "none" }, u);
  }), Ge(s.footer, (c) => {
    const d = this.footer ? tt([this.footer()]) : c;
    return d && y("div", { class: [`${r}-card__footer`, this.footerClass], style: this.footerStyle, role: "none" }, d);
  }), Ge(s.action, (c) => {
    const d = this.action ? tt([this.action()]) : c;
    return d && y("div", { class: `${r}-card__action`, role: "none" }, d);
  }));
} });
function Tm() {
  return { dotSize: "8px", dotColor: "rgba(255, 255, 255, .3)", dotColorActive: "rgba(255, 255, 255, 1)", dotColorFocus: "rgba(255, 255, 255, .5)", dotLineWidth: "16px", dotLineWidthActive: "24px", arrowColor: "#eee" };
}
const Rm = { name: "Carousel", common: L, self: Tm }, Im = { sizeSmall: "14px", sizeMedium: "16px", sizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function zm(e) {
  const { baseColor: t, inputColorDisabled: o, cardColor: r, modalColor: n, popoverColor: i, textColorDisabled: a, borderColor: l, primaryColor: s, textColor2: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, borderRadiusSmall: h, lineHeight: p } = e;
  return Object.assign(Object.assign({}, Im), { labelLineHeight: p, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, borderRadius: h, color: t, colorChecked: s, colorDisabled: o, colorDisabledChecked: o, colorTableHeader: r, colorTableHeaderModal: n, colorTableHeaderPopover: i, checkMarkColor: t, checkMarkColorDisabled: a, checkMarkColorDisabledChecked: a, border: `1px solid ${l}`, borderDisabled: `1px solid ${l}`, borderDisabledChecked: `1px solid ${l}`, borderChecked: `1px solid ${s}`, borderFocus: `1px solid ${s}`, boxShadowFocus: `0 0 0 2px ${G(s, { alpha: 0.3 })}`, textColor: c, textColorDisabled: a });
}
const xo = { name: "Checkbox", common: L, self: zm };
function Am(e) {
  const { borderRadius: t, boxShadow2: o, popoverColor: r, textColor2: n, textColor3: i, primaryColor: a, textColorDisabled: l, dividerColor: s, hoverColor: c, fontSizeMedium: d, heightMedium: u } = e;
  return { menuBorderRadius: t, menuColor: r, menuBoxShadow: o, menuDividerColor: s, menuHeight: "calc(var(--n-option-height) * 6.6)", optionArrowColor: i, optionHeight: u, optionFontSize: d, optionColorHover: c, optionTextColor: n, optionTextColorActive: a, optionTextColorDisabled: l, optionCheckMarkColor: a, loadingColor: a, columnWidth: "180px" };
}
const Om = { name: "Cascader", common: L, peers: { InternalSelectMenu: Uo, InternalSelection: qn, Scrollbar: Fe, Checkbox: xo, Empty: Dt }, self: Am };
function Mm(e) {
  const { textColor2: t, fontSize: o, fontWeightStrong: r, textColor3: n } = e;
  return { textColor: t, fontSize: o, fontWeightStrong: r, "mono-3": "#a0a1a7", "hue-1": "#0184bb", "hue-2": "#4078f2", "hue-3": "#a626a4", "hue-4": "#50a14f", "hue-5": "#e45649", "hue-5-2": "#c91243", "hue-6": "#986801", "hue-6-2": "#c18401", lineNumberTextColor: n };
}
const Ss = { name: "Code", common: L, self: Mm };
function Bm(e) {
  const { fontWeight: t, textColor1: o, textColor2: r, textColorDisabled: n, dividerColor: i, fontSize: a } = e;
  return { titleFontSize: a, titleFontWeight: t, dividerColor: i, titleTextColor: o, titleTextColorDisabled: n, fontSize: a, textColor: r, arrowColor: r, arrowColorDisabled: n, itemMargin: "16px 0 0 0", titlePadding: "16px 0 0 0" };
}
const km = { name: "Collapse", common: L, self: Bm };
function Fm(e) {
  const { cubicBezierEaseInOut: t } = e;
  return { bezier: t };
}
const Lm = { name: "CollapseTransition", common: L, self: Fm };
function Dm(e) {
  const { fontSize: t, boxShadow2: o, popoverColor: r, textColor2: n, borderRadius: i, borderColor: a, heightSmall: l, heightMedium: s, heightLarge: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, dividerColor: h } = e;
  return { panelFontSize: t, boxShadow: o, color: r, textColor: n, borderRadius: i, border: `1px solid ${a}`, heightSmall: l, heightMedium: s, heightLarge: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, dividerColor: h };
}
const Hm = { name: "ColorPicker", common: L, peers: { Input: Qe, Button: We }, self: Dm }, _m = { abstract: Boolean, bordered: { type: Boolean, default: void 0 }, clsPrefix: String, locale: Object, dateLocale: Object, namespace: String, rtl: Array, tag: { type: String, default: "div" }, hljs: Object, katex: Object, theme: Object, themeOverrides: Object, componentOptions: Object, icons: Object, breakpoints: Object, preflightStyleDisabled: Boolean, styleMountTarget: Object, inlineThemeDisabled: { type: Boolean, default: void 0 }, as: { type: String, validator: () => (Qt("config-provider", "`as` is deprecated, please use `tag` instead."), true), default: void 0 } }, nC = ee({ name: "ConfigProvider", alias: ["App"], props: _m, setup(e) {
  const t = ie(Tt, null), o = B(() => {
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
        return v === void 0 ? m : $o({}, v, m);
      }
    }
  }), n = ot(() => {
    const { namespace: m } = e;
    return m === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : m;
  }), i = ot(() => {
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
    return m !== void 0 ? m : t ? t.mergedClsPrefixRef.value : pr;
  }), c = B(() => {
    var m;
    const { rtl: v } = e;
    if (v === void 0) return t == null ? void 0 : t.mergedRtlRef.value;
    const g = {};
    for (const x of v) g[x.name] = fi(x), (m = x.peers) === null || m === void 0 || m.forEach((P) => {
      P.name in g || (g[P.name] = fi(P));
    });
    return g;
  }), d = B(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), u = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), f = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), h = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), p = B(() => {
    const { value: m } = o, { value: v } = r, g = v && Object.keys(v).length !== 0, x = m == null ? void 0 : m.name;
    return x ? g ? `${x}-${Mo(JSON.stringify(r.value))}` : x : g ? Mo(JSON.stringify(r.value)) : "";
  });
  return Te(Tt, { mergedThemeHashRef: p, mergedBreakpointsRef: d, mergedRtlRef: c, mergedIconsRef: a, mergedComponentPropsRef: l, mergedBorderedRef: i, mergedNamespaceRef: n, mergedClsPrefixRef: s, mergedLocaleRef: B(() => {
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
  return this.abstract ? (r = (o = this.$slots).default) === null || r === void 0 ? void 0 : r.call(o) : y(this.as || this.tag, { class: `${this.mergedClsPrefix || pr}-config-provider` }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
} });
function Nm(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const ws = { name: "Popselect", common: L, peers: { Popover: Ht, InternalSelectMenu: Uo }, self: Nm };
function Wm(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const $s = { name: "Select", common: L, peers: { InternalSelection: qn, InternalSelectMenu: Uo }, self: Wm }, Vm = { itemPaddingSmall: "0 4px", itemMarginSmall: "0 0 0 8px", itemMarginSmallRtl: "0 8px 0 0", itemPaddingMedium: "0 4px", itemMarginMedium: "0 0 0 8px", itemMarginMediumRtl: "0 8px 0 0", itemPaddingLarge: "0 4px", itemMarginLarge: "0 0 0 8px", itemMarginLargeRtl: "0 8px 0 0", buttonIconSizeSmall: "14px", buttonIconSizeMedium: "16px", buttonIconSizeLarge: "18px", inputWidthSmall: "60px", selectWidthSmall: "unset", inputMarginSmall: "0 0 0 8px", inputMarginSmallRtl: "0 8px 0 0", selectMarginSmall: "0 0 0 8px", prefixMarginSmall: "0 8px 0 0", suffixMarginSmall: "0 0 0 8px", inputWidthMedium: "60px", selectWidthMedium: "unset", inputMarginMedium: "0 0 0 8px", inputMarginMediumRtl: "0 8px 0 0", selectMarginMedium: "0 0 0 8px", prefixMarginMedium: "0 8px 0 0", suffixMarginMedium: "0 0 0 8px", inputWidthLarge: "60px", selectWidthLarge: "unset", inputMarginLarge: "0 0 0 8px", inputMarginLargeRtl: "0 8px 0 0", selectMarginLarge: "0 0 0 8px", prefixMarginLarge: "0 8px 0 0", suffixMarginLarge: "0 0 0 8px" };
function jm(e) {
  const { textColor2: t, primaryColor: o, primaryColorHover: r, primaryColorPressed: n, inputColorDisabled: i, textColorDisabled: a, borderColor: l, borderRadius: s, fontSizeTiny: c, fontSizeSmall: d, fontSizeMedium: u, heightTiny: f, heightSmall: h, heightMedium: p } = e;
  return Object.assign(Object.assign({}, Vm), { buttonColor: "#0000", buttonColorHover: "#0000", buttonColorPressed: "#0000", buttonBorder: `1px solid ${l}`, buttonBorderHover: `1px solid ${l}`, buttonBorderPressed: `1px solid ${l}`, buttonIconColor: t, buttonIconColorHover: t, buttonIconColorPressed: t, itemTextColor: t, itemTextColorHover: r, itemTextColorPressed: n, itemTextColorActive: o, itemTextColorDisabled: a, itemColor: "#0000", itemColorHover: "#0000", itemColorPressed: "#0000", itemColorActive: "#0000", itemColorActiveHover: "#0000", itemColorDisabled: i, itemBorder: "1px solid #0000", itemBorderHover: "1px solid #0000", itemBorderPressed: "1px solid #0000", itemBorderActive: `1px solid ${o}`, itemBorderDisabled: `1px solid ${l}`, itemBorderRadius: s, itemSizeSmall: f, itemSizeMedium: h, itemSizeLarge: p, itemFontSizeSmall: c, itemFontSizeMedium: d, itemFontSizeLarge: u, jumperFontSizeSmall: c, jumperFontSizeMedium: d, jumperFontSizeLarge: u, jumperTextColor: t, jumperTextColorDisabled: a });
}
const Ps = { name: "Pagination", common: L, peers: { Select: $s, Input: Qe, Popselect: ws }, self: jm }, Gm = { padding: "4px 0", optionIconSizeSmall: "14px", optionIconSizeMedium: "16px", optionIconSizeLarge: "16px", optionIconSizeHuge: "18px", optionSuffixWidthSmall: "14px", optionSuffixWidthMedium: "14px", optionSuffixWidthLarge: "16px", optionSuffixWidthHuge: "16px", optionIconSuffixWidthSmall: "32px", optionIconSuffixWidthMedium: "32px", optionIconSuffixWidthLarge: "36px", optionIconSuffixWidthHuge: "36px", optionPrefixWidthSmall: "14px", optionPrefixWidthMedium: "14px", optionPrefixWidthLarge: "16px", optionPrefixWidthHuge: "16px", optionIconPrefixWidthSmall: "36px", optionIconPrefixWidthMedium: "36px", optionIconPrefixWidthLarge: "40px", optionIconPrefixWidthHuge: "40px" };
function Um(e) {
  const { primaryColor: t, textColor2: o, dividerColor: r, hoverColor: n, popoverColor: i, invertedColor: a, borderRadius: l, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: d, fontSizeHuge: u, heightSmall: f, heightMedium: h, heightLarge: p, heightHuge: m, textColor3: v, opacityDisabled: g } = e;
  return Object.assign(Object.assign({}, Gm), { optionHeightSmall: f, optionHeightMedium: h, optionHeightLarge: p, optionHeightHuge: m, borderRadius: l, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: d, fontSizeHuge: u, optionTextColor: o, optionTextColorHover: o, optionTextColorActive: t, optionTextColorChildActive: t, color: i, dividerColor: r, suffixColor: o, prefixColor: o, optionColorHover: n, optionColorActive: G(t, { alpha: 0.1 }), groupHeaderTextColor: v, optionTextColorInverted: "#BBB", optionTextColorHoverInverted: "#FFF", optionTextColorActiveInverted: "#FFF", optionTextColorChildActiveInverted: "#FFF", colorInverted: a, dividerColorInverted: "#BBB", suffixColorInverted: "#BBB", prefixColorInverted: "#BBB", optionColorHoverInverted: t, optionColorActiveInverted: t, groupHeaderTextColorInverted: "#AAA", optionOpacityDisabled: g });
}
const Pr = { name: "Dropdown", common: L, peers: { Popover: Ht }, self: Um }, Km = { padding: "8px 14px" };
function qm(e) {
  const { borderRadius: t, boxShadow2: o, baseColor: r } = e;
  return Object.assign(Object.assign({}, Km), { borderRadius: t, boxShadow: o, color: N(r, "rgba(0, 0, 0, .85)"), textColor: r });
}
const Ko = { name: "Tooltip", common: L, peers: { Popover: Ht }, self: qm }, Zn = { name: "Ellipsis", common: L, peers: { Tooltip: Ko } }, Ym = { radioSizeSmall: "14px", radioSizeMedium: "16px", radioSizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function Xm(e) {
  const { borderColor: t, primaryColor: o, baseColor: r, textColorDisabled: n, inputColorDisabled: i, textColor2: a, opacityDisabled: l, borderRadius: s, fontSizeSmall: c, fontSizeMedium: d, fontSizeLarge: u, heightSmall: f, heightMedium: h, heightLarge: p, lineHeight: m } = e;
  return Object.assign(Object.assign({}, Ym), { labelLineHeight: m, buttonHeightSmall: f, buttonHeightMedium: h, buttonHeightLarge: p, fontSizeSmall: c, fontSizeMedium: d, fontSizeLarge: u, boxShadow: `inset 0 0 0 1px ${t}`, boxShadowActive: `inset 0 0 0 1px ${o}`, boxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${G(o, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${o}`, boxShadowDisabled: `inset 0 0 0 1px ${t}`, color: r, colorDisabled: i, colorActive: "#0000", textColor: a, textColorDisabled: n, dotColorActive: o, dotColorDisabled: t, buttonBorderColor: t, buttonBorderColorActive: o, buttonBorderColorHover: t, buttonColor: r, buttonColorActive: r, buttonTextColor: a, buttonTextColorActive: o, buttonTextColorHover: o, opacityDisabled: l, buttonBoxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${G(o, { alpha: 0.3 })}`, buttonBoxShadowHover: "inset 0 0 0 1px #0000", buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: s });
}
const Es = { name: "Radio", common: L, self: Xm }, Zm = { thPaddingSmall: "8px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "8px", tdPaddingMedium: "12px", tdPaddingLarge: "12px", sorterSize: "15px", resizableContainerSize: "8px", resizableSize: "2px", filterSize: "15px", paginationMargin: "12px 0 0 0", emptyPadding: "48px 0", actionPadding: "8px 12px", actionButtonMargin: "0 8px 0 0" };
function Qm(e) {
  const { cardColor: t, modalColor: o, popoverColor: r, textColor2: n, textColor1: i, tableHeaderColor: a, tableColorHover: l, iconColor: s, primaryColor: c, fontWeightStrong: d, borderRadius: u, lineHeight: f, fontSizeSmall: h, fontSizeMedium: p, fontSizeLarge: m, dividerColor: v, heightSmall: g, opacityDisabled: x, tableColorStriped: P } = e;
  return Object.assign(Object.assign({}, Zm), { actionDividerColor: v, lineHeight: f, borderRadius: u, fontSizeSmall: h, fontSizeMedium: p, fontSizeLarge: m, borderColor: N(t, v), tdColorHover: N(t, l), tdColorSorting: N(t, l), tdColorStriped: N(t, P), thColor: N(t, a), thColorHover: N(N(t, a), l), thColorSorting: N(N(t, a), l), tdColor: t, tdTextColor: n, thTextColor: i, thFontWeight: d, thButtonColorHover: l, thIconColor: s, thIconColorActive: c, borderColorModal: N(o, v), tdColorHoverModal: N(o, l), tdColorSortingModal: N(o, l), tdColorStripedModal: N(o, P), thColorModal: N(o, a), thColorHoverModal: N(N(o, a), l), thColorSortingModal: N(N(o, a), l), tdColorModal: o, borderColorPopover: N(r, v), tdColorHoverPopover: N(r, l), tdColorSortingPopover: N(r, l), tdColorStripedPopover: N(r, P), thColorPopover: N(r, a), thColorHoverPopover: N(N(r, a), l), thColorSortingPopover: N(N(r, a), l), tdColorPopover: r, boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)", boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)", loadingColor: c, loadingSize: g, opacityLoading: x });
}
const Jm = { name: "DataTable", common: L, peers: { Button: We, Checkbox: xo, Radio: Es, Pagination: Ps, Scrollbar: Fe, Empty: Dt, Popover: Ht, Ellipsis: Zn, Dropdown: Pr }, self: Qm }, ev = Object.assign(Object.assign({}, $r), Ce.props), tv = ee({ name: "Tooltip", props: ev, slots: Object, __popover__: true, setup(e) {
  const { mergedClsPrefixRef: t } = vt(e), o = Ce("Tooltip", "-tooltip", void 0, Ko, e, t), r = _(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    r.value.syncPosition();
  }, setShow(i) {
    r.value.setShow(i);
  } }), { popoverRef: r, mergedTheme: o, popoverThemeOverrides: B(() => o.value.self) });
}, render() {
  const { mergedTheme: e, internalExtraClass: t } = this;
  return y(xs, Object.assign(Object.assign({}, this.$props), { theme: e.peers.Popover, themeOverrides: e.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: t.concat("tooltip"), ref: "popoverRef" }), this.$slots);
} }), Ts = Z("ellipsis", { overflow: "hidden" }, [$t("line-clamp", `
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
const Rs = Object.assign(Object.assign({}, Ce.props), { expandTrigger: String, lineClamp: [Number, String], tooltip: { type: [Boolean, Object], default: true } }), ov = ee({ name: "Ellipsis", inheritAttrs: false, props: Rs, slots: Object, setup(e, { slots: t, attrs: o }) {
  const r = is(), n = Ce("Ellipsis", "-ellipsis", Ts, Zn, e, r), i = _(null), a = _(null), l = _(null), s = _(false), c = B(() => {
    const { lineClamp: v } = e, { value: g } = s;
    return v !== void 0 ? { textOverflow: "", "-webkit-line-clamp": g ? "" : v } : { textOverflow: g ? "" : "ellipsis", "-webkit-line-clamp": "" };
  });
  function d() {
    let v = false;
    const { value: g } = s;
    if (g) return true;
    const { value: x } = i;
    if (x) {
      const { lineClamp: P } = e;
      if (h(x), P !== void 0) v = x.scrollHeight <= x.offsetHeight;
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
  Rn(() => {
    var v;
    e.tooltip && ((v = l.value) === null || v === void 0 || v.setShow(false));
  });
  const f = () => y("span", Object.assign({}, Et(o, { class: [`${r.value}-ellipsis`, e.lineClamp !== void 0 ? yn(r.value) : void 0, e.expandTrigger === "click" ? Sn(r.value, "pointer") : void 0], style: c.value }), { ref: "triggerRef", onClick: u.value, onMouseenter: e.expandTrigger === "click" ? d : void 0 }), e.lineClamp ? t : y("span", { ref: "triggerInnerRef" }, t));
  function h(v) {
    if (!v) return;
    const g = c.value, x = yn(r.value);
    e.lineClamp !== void 0 ? m(v, x, "add") : m(v, x, "remove");
    for (const P in g) v.style[P] !== g[P] && (v.style[P] = g[P]);
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
    return y(tv, Object.assign({ ref: "tooltipRef", placement: "top" }, t, { getDisabled: this.getTooltipDisabled, theme: n.peers.Tooltip, themeOverrides: n.peerOverrides.Tooltip }), { trigger: o, default: (e = r.tooltip) !== null && e !== void 0 ? e : r.default });
  } else return o();
} }), iC = ee({ name: "PerformantEllipsis", props: Rs, inheritAttrs: false, setup(e, { attrs: t, slots: o }) {
  const r = _(false), n = is();
  return jo("-ellipsis", Ts, n), { mouseEntered: r, renderTrigger: () => {
    const { lineClamp: a } = e, l = n.value;
    return y("span", Object.assign({}, Et(t, { class: [`${l}-ellipsis`, a !== void 0 ? yn(l) : void 0, e.expandTrigger === "click" ? Sn(l, "pointer") : void 0], style: a === void 0 ? { textOverflow: "ellipsis" } : { "-webkit-line-clamp": a } }), { onMouseenter: () => {
      r.value = true;
    } }), a ? o : y("span", null, o));
  } };
}, render() {
  return this.mouseEntered ? y(ov, Et({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
} }), Qn = "n-dropdown-menu", Er = "n-dropdown", za = "n-dropdown-option", Is = ee({ name: "DropdownDivider", props: { clsPrefix: { type: String, required: true } }, render() {
  return y("div", { class: `${this.clsPrefix}-dropdown-divider` });
} }), rv = ee({ name: "DropdownGroupHeader", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  const { showIconRef: e, hasSubmenuRef: t } = ie(Qn), { renderLabelRef: o, labelFieldRef: r, nodePropsRef: n, renderOptionRef: i } = ie(Er);
  return { labelField: r, showIcon: e, hasSubmenu: t, renderLabel: o, nodeProps: n, renderOption: i };
}, render() {
  var e;
  const { clsPrefix: t, hasSubmenu: o, showIcon: r, nodeProps: n, renderLabel: i, renderOption: a } = this, { rawNode: l } = this.tmNode, s = y("div", Object.assign({ class: `${t}-dropdown-option` }, n == null ? void 0 : n(l)), y("div", { class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group` }, y("div", { "data-dropdown-option": true, class: [`${t}-dropdown-option-body__prefix`, r && `${t}-dropdown-option-body__prefix--show-icon`] }, ft(l.icon)), y("div", { class: `${t}-dropdown-option-body__label`, "data-dropdown-option": true }, i ? i(l) : ft((e = l.title) !== null && e !== void 0 ? e : l[this.labelField])), y("div", { class: [`${t}-dropdown-option-body__suffix`, o && `${t}-dropdown-option-body__suffix--has-submenu`], "data-dropdown-option": true })));
  return a ? a({ node: s, option: l }) : s;
} });
function nv(e) {
  const { textColorBase: t, opacity1: o, opacity2: r, opacity3: n, opacity4: i, opacity5: a } = e;
  return { color: t, opacity1Depth: o, opacity2Depth: r, opacity3Depth: n, opacity4Depth: i, opacity5Depth: a };
}
const zs = { name: "Icon", common: L, self: nv }, iv = Z("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [U("color-transition", { transition: "color .3s var(--n-bezier)" }), U("depth", { color: "var(--n-color)" }, [F("svg", { opacity: "var(--n-opacity)", transition: "opacity .3s var(--n-bezier)" })]), F("svg", { height: "1em", width: "1em" })]), av = Object.assign(Object.assign({}, Ce.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), lv = ee({ _n_icon__: true, name: "Icon", inheritAttrs: false, props: av, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = vt(e), r = Ce("Icon", "-icon", iv, zs, e, t), n = B(() => {
    const { depth: a } = e, { common: { cubicBezierEaseInOut: l }, self: s } = r.value;
    if (a !== void 0) {
      const { color: c, [`opacity${a}Depth`]: d } = s;
      return { "--n-bezier": l, "--n-color": c, "--n-opacity": d };
    }
    return { "--n-bezier": l, "--n-color": "", "--n-opacity": "" };
  }), i = o ? Rt("icon", B(() => `${e.depth || "d"}`), n, e) : void 0;
  return { mergedClsPrefix: t, mergedStyle: B(() => {
    const { size: a, color: l } = e;
    return { fontSize: lr(a), color: l };
  }), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e;
  const { $parent: t, depth: o, mergedClsPrefix: r, component: n, onRender: i, themeClass: a } = this;
  return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Qt("icon", "don't wrap `n-icon` inside `n-icon`"), i == null ? void 0 : i(), y("i", Et(this.$attrs, { role: "img", class: [`${r}-icon`, a, { [`${r}-icon--depth`]: o, [`${r}-icon--color-transition`]: o !== void 0 }], style: [this.cssVars, this.mergedStyle] }), n ? y(n) : this.$slots);
} });
function wn(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function sv(e) {
  return e.type === "group";
}
function As(e) {
  return e.type === "divider";
}
function cv(e) {
  return e.type === "render";
}
const Os = ee({ name: "DropdownOption", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null }, placement: { type: String, default: "right-start" }, props: Object, scrollable: Boolean }, setup(e) {
  const t = ie(Er), { hoverKeyRef: o, keyboardKeyRef: r, lastToggledSubmenuKeyRef: n, pendingKeyPathRef: i, activeKeyPathRef: a, animatedRef: l, mergedShowRef: s, renderLabelRef: c, renderIconRef: d, labelFieldRef: u, childrenFieldRef: f, renderOptionRef: h, nodePropsRef: p, menuPropsRef: m } = t, v = ie(za, null), g = ie(Qn), x = ie(No), P = B(() => e.tmNode.rawNode), S = B(() => {
    const { value: k } = f;
    return wn(e.tmNode.rawNode, k);
  }), R = B(() => {
    const { disabled: k } = e.tmNode;
    return k;
  }), z = B(() => {
    if (!S.value) return false;
    const { key: k, disabled: q } = e.tmNode;
    if (q) return false;
    const { value: le } = o, { value: se } = r, { value: me } = n, { value: ce } = i;
    return le !== null ? ce.includes(k) : se !== null ? ce.includes(k) && ce[ce.length - 1] !== k : me !== null ? ce.includes(k) : false;
  }), b = B(() => r.value === null && !l.value), w = Bh(z, 300, b), E = B(() => !!(v == null ? void 0 : v.enteringSubmenuRef.value)), $ = _(false);
  Te(za, { enteringSubmenuRef: $ });
  function T() {
    $.value = true;
  }
  function C() {
    $.value = false;
  }
  function O() {
    const { parentKey: k, tmNode: q } = e;
    q.disabled || s.value && (n.value = k, r.value = null, o.value = q.key);
  }
  function H() {
    const { tmNode: k } = e;
    k.disabled || s.value && o.value !== k.key && O();
  }
  function A(k) {
    if (e.tmNode.disabled || !s.value) return;
    const { relatedTarget: q } = k;
    q && !_i({ target: q }, "dropdownOption") && !_i({ target: q }, "scrollbarRail") && (o.value = null);
  }
  function W() {
    const { value: k } = S, { tmNode: q } = e;
    s.value && !k && !q.disabled && (t.doSelect(q.key, q.rawNode), t.doUpdateShow(false));
  }
  return { labelField: u, renderLabel: c, renderIcon: d, siblingHasIcon: g.showIconRef, siblingHasSubmenu: g.hasSubmenuRef, menuProps: m, popoverBody: x, animated: l, mergedShowSubmenu: B(() => w.value && !E.value), rawNode: P, hasSubmenu: S, pending: ot(() => {
    const { value: k } = i, { key: q } = e.tmNode;
    return k.includes(q);
  }), childActive: ot(() => {
    const { value: k } = a, { key: q } = e.tmNode, le = k.findIndex((se) => q === se);
    return le === -1 ? false : le < k.length - 1;
  }), active: ot(() => {
    const { value: k } = a, { key: q } = e.tmNode, le = k.findIndex((se) => q === se);
    return le === -1 ? false : le === k.length - 1;
  }), mergedDisabled: R, renderOption: h, nodeProps: p, handleClick: W, handleMouseMove: H, handleMouseEnter: O, handleMouseLeave: A, handleSubmenuBeforeEnter: T, handleSubmenuAfterEnter: C };
}, render() {
  var e, t;
  const { animated: o, rawNode: r, mergedShowSubmenu: n, clsPrefix: i, siblingHasIcon: a, siblingHasSubmenu: l, renderLabel: s, renderIcon: c, renderOption: d, nodeProps: u, props: f, scrollable: h } = this;
  let p = null;
  if (n) {
    const x = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, r, r.children);
    p = y(Ms, Object.assign({}, x, { clsPrefix: i, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
  }
  const m = { class: [`${i}-dropdown-option-body`, this.pending && `${i}-dropdown-option-body--pending`, this.active && `${i}-dropdown-option-body--active`, this.childActive && `${i}-dropdown-option-body--child-active`, this.mergedDisabled && `${i}-dropdown-option-body--disabled`], onMousemove: this.handleMouseMove, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onClick: this.handleClick }, v = u == null ? void 0 : u(r), g = y("div", Object.assign({ class: [`${i}-dropdown-option`, v == null ? void 0 : v.class], "data-dropdown-option": true }, v), y("div", Et(m, f), [y("div", { class: [`${i}-dropdown-option-body__prefix`, a && `${i}-dropdown-option-body__prefix--show-icon`] }, [c ? c(r) : ft(r.icon)]), y("div", { "data-dropdown-option": true, class: `${i}-dropdown-option-body__label` }, s ? s(r) : ft((t = r[this.labelField]) !== null && t !== void 0 ? t : r.title)), y("div", { "data-dropdown-option": true, class: [`${i}-dropdown-option-body__suffix`, l && `${i}-dropdown-option-body__suffix--has-submenu`] }, this.hasSubmenu ? y(lv, null, { default: () => y(Fp, null) }) : null)]), this.hasSubmenu ? y(Wl, null, { default: () => [y(Vl, null, { default: () => y("div", { class: `${i}-dropdown-offset-container` }, y(Ul, { show: this.mergedShowSubmenu, placement: this.placement, to: h && this.popoverBody || void 0, teleportDisabled: !h }, { default: () => y("div", { class: `${i}-dropdown-menu-wrapper` }, o ? y(kt, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, { default: () => p }) : p) })) })] }) : null);
  return d ? d({ node: g, option: r }) : g;
} }), dv = ee({ name: "NDropdownGroup", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null } }, render() {
  const { tmNode: e, parentKey: t, clsPrefix: o } = this, { children: r } = e;
  return y(eo, null, y(rv, { clsPrefix: o, tmNode: e, key: e.key }), r == null ? void 0 : r.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : As(i) ? y(Is, { clsPrefix: o, key: n.key }) : n.isGroup ? (Qt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : y(Os, { clsPrefix: o, tmNode: n, parentKey: t, key: n.key });
  }));
} }), uv = ee({ name: "DropdownRenderOption", props: { tmNode: { type: Object, required: true } }, render() {
  const { rawNode: { render: e, props: t } } = this.tmNode;
  return y("div", t, [e == null ? void 0 : e()]);
} }), Ms = ee({ name: "DropdownMenu", props: { scrollable: Boolean, showArrow: Boolean, arrowStyle: [String, Object], clsPrefix: { type: String, required: true }, tmNodes: { type: Array, default: () => [] }, parentKey: { type: [String, Number], default: null } }, setup(e) {
  const { renderIconRef: t, childrenFieldRef: o } = ie(Er);
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
  return Te(wr, null), Te(Sr, null), Te(No, r), { bodyRef: r };
}, render() {
  const { parentKey: e, clsPrefix: t, scrollable: o } = this, r = this.tmNodes.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : cv(i) ? y(uv, { tmNode: n, key: n.key }) : As(i) ? y(Is, { clsPrefix: t, key: n.key }) : sv(i) ? y(dv, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key }) : y(Os, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key, props: i.props, scrollable: o });
  });
  return y("div", { class: [`${t}-dropdown-menu`, o && `${t}-dropdown-menu--scrollable`], ref: "bodyRef" }, o ? y(hs, { contentClass: `${t}-dropdown-menu__content` }, { default: () => r }) : r, this.showArrow ? bs({ clsPrefix: t, arrowStyle: this.arrowStyle, arrowClass: void 0, arrowWrapperClass: void 0, arrowWrapperStyle: void 0 }) : null);
} }), fv = Z("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [ms(), Z("dropdown-option", `
 position: relative;
 `, [F("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [F("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), Z("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [F("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), $t("disabled", [U("pending", `
 color: var(--n-option-text-color-hover);
 `, [j("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), F("&::before", "background-color: var(--n-option-color-hover);")]), U("active", `
 color: var(--n-option-text-color-active);
 `, [j("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), F("&::before", "background-color: var(--n-option-color-active);")]), U("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [j("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), U("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), U("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [j("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [U("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), j("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [U("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), Z("icon", `
 font-size: var(--n-option-icon-size);
 `)]), j("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), j("suffix", `
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
 `), Z("icon", `
 font-size: var(--n-option-icon-size);
 `)]), Z("dropdown-menu", "pointer-events: all;")]), Z("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), Z("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), Z("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), F(">", [Z("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), $t("scrollable", `
 padding: var(--n-padding);
 `), U("scrollable", [j("content", `
 padding: var(--n-padding);
 `)])]), hv = { animated: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, size: { type: String, default: "medium" }, inverted: Boolean, placement: { type: String, default: "bottom" }, onSelect: [Function, Array], options: { type: Array, default: () => [] }, menuProps: Function, showArrow: Boolean, renderLabel: Function, renderIcon: Function, renderOption: Function, nodeProps: Function, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, value: [String, Number] }, pv = Object.keys($r), gv = Object.assign(Object.assign(Object.assign({}, $r), hv), Ce.props), aC = ee({ name: "Dropdown", inheritAttrs: false, props: gv, setup(e) {
  const t = _(false), o = Fl(ge(e, "show"), t), r = B(() => {
    const { keyField: C, childrenField: O } = e;
    return Sg(e.options, { getKey(H) {
      return H[C];
    }, getDisabled(H) {
      return H.disabled === true;
    }, getIgnored(H) {
      return H.type === "divider" || H.type === "render";
    }, getChildren(H) {
      return H[O];
    } });
  }), n = B(() => r.value.treeNodes), i = _(null), a = _(null), l = _(null), s = B(() => {
    var C, O, H;
    return (H = (O = (C = i.value) !== null && C !== void 0 ? C : a.value) !== null && O !== void 0 ? O : l.value) !== null && H !== void 0 ? H : null;
  }), c = B(() => r.value.getPath(s.value).keyPath), d = B(() => r.value.getPath(e.value).keyPath), u = ot(() => e.keyboard && o.value);
  Ah({ keydown: { ArrowUp: { prevent: true, handler: R }, ArrowRight: { prevent: true, handler: S }, ArrowDown: { prevent: true, handler: z }, ArrowLeft: { prevent: true, handler: P }, Enter: { prevent: true, handler: b }, Escape: x } }, u);
  const { mergedClsPrefixRef: f, inlineThemeDisabled: h } = vt(e), p = Ce("Dropdown", "-dropdown", fv, Pr, e, f);
  Te(Er, { labelFieldRef: ge(e, "labelField"), childrenFieldRef: ge(e, "childrenField"), renderLabelRef: ge(e, "renderLabel"), renderIconRef: ge(e, "renderIcon"), hoverKeyRef: i, keyboardKeyRef: a, lastToggledSubmenuKeyRef: l, pendingKeyPathRef: c, activeKeyPathRef: d, animatedRef: ge(e, "animated"), mergedShowRef: o, nodePropsRef: ge(e, "nodeProps"), renderOptionRef: ge(e, "renderOption"), menuPropsRef: ge(e, "menuProps"), doSelect: m, doUpdateShow: v }), Re(o, (C) => {
    !e.animated && !C && g();
  });
  function m(C, O) {
    const { onSelect: H } = e;
    H && Ke(H, C, O);
  }
  function v(C) {
    const { "onUpdate:show": O, onUpdateShow: H } = e;
    O && Ke(O, C), H && Ke(H, C), t.value = C;
  }
  function g() {
    i.value = null, a.value = null, l.value = null;
  }
  function x() {
    v(false);
  }
  function P() {
    E("left");
  }
  function S() {
    E("right");
  }
  function R() {
    E("up");
  }
  function z() {
    E("down");
  }
  function b() {
    const C = w();
    (C == null ? void 0 : C.isLeaf) && o.value && (m(C.key, C.rawNode), v(false));
  }
  function w() {
    var C;
    const { value: O } = r, { value: H } = s;
    return !O || H === null ? null : (C = O.getNode(H)) !== null && C !== void 0 ? C : null;
  }
  function E(C) {
    const { value: O } = s, { value: { getFirstAvailableNode: H } } = r;
    let A = null;
    if (O === null) {
      const W = H();
      W !== null && (A = W.key);
    } else {
      const W = w();
      if (W) {
        let k;
        switch (C) {
          case "down":
            k = W.getNext();
            break;
          case "up":
            k = W.getPrev();
            break;
          case "right":
            k = W.getChild();
            break;
          case "left":
            k = W.getParent();
            break;
        }
        k && (A = k.key);
      }
    }
    A !== null && (i.value = null, a.value = A);
  }
  const $ = B(() => {
    const { size: C, inverted: O } = e, { common: { cubicBezierEaseInOut: H }, self: A } = p.value, { padding: W, dividerColor: k, borderRadius: q, optionOpacityDisabled: le, [Q("optionIconSuffixWidth", C)]: se, [Q("optionSuffixWidth", C)]: me, [Q("optionIconPrefixWidth", C)]: ce, [Q("optionPrefixWidth", C)]: Le, [Q("fontSize", C)]: He, [Q("optionHeight", C)]: rt, [Q("optionIconSize", C)]: ne } = A, I = { "--n-bezier": H, "--n-font-size": He, "--n-padding": W, "--n-border-radius": q, "--n-option-height": rt, "--n-option-prefix-width": Le, "--n-option-icon-prefix-width": ce, "--n-option-suffix-width": me, "--n-option-icon-suffix-width": se, "--n-option-icon-size": ne, "--n-divider-color": k, "--n-option-opacity-disabled": le };
    return O ? (I["--n-color"] = A.colorInverted, I["--n-option-color-hover"] = A.optionColorHoverInverted, I["--n-option-color-active"] = A.optionColorActiveInverted, I["--n-option-text-color"] = A.optionTextColorInverted, I["--n-option-text-color-hover"] = A.optionTextColorHoverInverted, I["--n-option-text-color-active"] = A.optionTextColorActiveInverted, I["--n-option-text-color-child-active"] = A.optionTextColorChildActiveInverted, I["--n-prefix-color"] = A.prefixColorInverted, I["--n-suffix-color"] = A.suffixColorInverted, I["--n-group-header-text-color"] = A.groupHeaderTextColorInverted) : (I["--n-color"] = A.color, I["--n-option-color-hover"] = A.optionColorHover, I["--n-option-color-active"] = A.optionColorActive, I["--n-option-text-color"] = A.optionTextColor, I["--n-option-text-color-hover"] = A.optionTextColorHover, I["--n-option-text-color-active"] = A.optionTextColorActive, I["--n-option-text-color-child-active"] = A.optionTextColorChildActive, I["--n-prefix-color"] = A.prefixColor, I["--n-suffix-color"] = A.suffixColor, I["--n-group-header-text-color"] = A.groupHeaderTextColor), I;
  }), T = h ? Rt("dropdown", B(() => `${e.size[0]}${e.inverted ? "i" : ""}`), $, e) : void 0;
  return { mergedClsPrefix: f, mergedTheme: p, tmNodes: n, mergedShow: o, handleAfterLeave: () => {
    e.animated && g();
  }, doUpdateShow: v, cssVars: h ? void 0 : $, themeClass: T == null ? void 0 : T.themeClass, onRender: T == null ? void 0 : T.onRender };
}, render() {
  const e = (r, n, i, a, l) => {
    var s;
    const { mergedClsPrefix: c, menuProps: d } = this;
    (s = this.onRender) === null || s === void 0 || s.call(this);
    const u = (d == null ? void 0 : d(void 0, this.tmNodes.map((h) => h.rawNode))) || {}, f = { ref: Rp(n), class: [r, `${c}-dropdown`, this.themeClass], clsPrefix: c, tmNodes: this.tmNodes, style: [...i, this.cssVars], showArrow: this.showArrow, arrowStyle: this.arrowStyle, scrollable: this.scrollable, onMouseenter: a, onMouseleave: l };
    return y(Ms, Et(this.$attrs, f, u));
  }, { mergedTheme: t } = this, o = { show: this.mergedShow, theme: t.peers.Popover, themeOverrides: t.peerOverrides.Popover, internalOnAfterLeave: this.handleAfterLeave, internalRenderBody: e, onUpdateShow: this.doUpdateShow, "onUpdate:show": void 0 };
  return y(xs, Object.assign({}, Lo(this.$props, pv), o), { trigger: () => {
    var r, n;
    return (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r);
  } });
} }), mv = { itemFontSize: "12px", itemHeight: "36px", itemWidth: "52px", panelActionPadding: "8px 0" };
function vv(e) {
  const { popoverColor: t, textColor2: o, primaryColor: r, hoverColor: n, dividerColor: i, opacityDisabled: a, boxShadow2: l, borderRadius: s, iconColor: c, iconColorDisabled: d } = e;
  return Object.assign(Object.assign({}, mv), { panelColor: t, panelBoxShadow: l, panelDividerColor: i, itemTextColor: o, itemTextColorActive: r, itemColorHover: n, itemOpacityDisabled: a, itemBorderRadius: s, borderRadius: s, iconColor: c, iconColorDisabled: d });
}
const Bs = { name: "TimePicker", common: L, peers: { Scrollbar: Fe, Button: We, Input: Qe }, self: vv }, bv = { itemSize: "24px", itemCellWidth: "38px", itemCellHeight: "32px", scrollItemWidth: "80px", scrollItemHeight: "40px", panelExtraFooterPadding: "8px 12px", panelActionPadding: "8px 12px", calendarTitlePadding: "0", calendarTitleHeight: "28px", arrowSize: "14px", panelHeaderPadding: "8px 12px", calendarDaysHeight: "32px", calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px", calendarLeftPaddingDate: "6px 12px 4px 12px", calendarLeftPaddingDatetime: "4px 12px", calendarLeftPaddingDaterange: "6px 12px 4px 12px", calendarLeftPaddingDatetimerange: "4px 12px", calendarLeftPaddingMonth: "0", calendarLeftPaddingYear: "0", calendarLeftPaddingQuarter: "0", calendarLeftPaddingMonthrange: "0", calendarLeftPaddingQuarterrange: "0", calendarLeftPaddingYearrange: "0", calendarLeftPaddingWeek: "6px 12px 4px 12px", calendarRightPaddingDate: "6px 12px 4px 12px", calendarRightPaddingDatetime: "4px 12px", calendarRightPaddingDaterange: "6px 12px 4px 12px", calendarRightPaddingDatetimerange: "4px 12px", calendarRightPaddingMonth: "0", calendarRightPaddingYear: "0", calendarRightPaddingQuarter: "0", calendarRightPaddingMonthrange: "0", calendarRightPaddingQuarterrange: "0", calendarRightPaddingYearrange: "0", calendarRightPaddingWeek: "0" };
function xv(e) {
  const { hoverColor: t, fontSize: o, textColor2: r, textColorDisabled: n, popoverColor: i, primaryColor: a, borderRadiusSmall: l, iconColor: s, iconColorDisabled: c, textColor1: d, dividerColor: u, boxShadow2: f, borderRadius: h, fontWeightStrong: p } = e;
  return Object.assign(Object.assign({}, bv), { itemFontSize: o, calendarDaysFontSize: o, calendarTitleFontSize: o, itemTextColor: r, itemTextColorDisabled: n, itemTextColorActive: i, itemTextColorCurrent: a, itemColorIncluded: G(a, { alpha: 0.1 }), itemColorHover: t, itemColorDisabled: t, itemColorActive: a, itemBorderRadius: l, panelColor: i, panelTextColor: r, arrowColor: s, calendarTitleTextColor: d, calendarTitleColorHover: t, calendarDaysTextColor: r, panelHeaderDividerColor: u, calendarDaysDividerColor: u, calendarDividerColor: u, panelActionDividerColor: u, panelBoxShadow: f, panelBorderRadius: h, calendarTitleFontWeight: p, scrollItemBorderRadius: h, iconColor: s, iconColorDisabled: c });
}
const Cv = { name: "DatePicker", common: L, peers: { Input: Qe, Button: We, TimePicker: Bs, Scrollbar: Fe }, self: xv }, yv = { thPaddingBorderedSmall: "8px 12px", thPaddingBorderedMedium: "12px 16px", thPaddingBorderedLarge: "16px 24px", thPaddingSmall: "0", thPaddingMedium: "0", thPaddingLarge: "0", tdPaddingBorderedSmall: "8px 12px", tdPaddingBorderedMedium: "12px 16px", tdPaddingBorderedLarge: "16px 24px", tdPaddingSmall: "0 0 8px 0", tdPaddingMedium: "0 0 12px 0", tdPaddingLarge: "0 0 16px 0" };
function Sv(e) {
  const { tableHeaderColor: t, textColor2: o, textColor1: r, cardColor: n, modalColor: i, popoverColor: a, dividerColor: l, borderRadius: s, fontWeightStrong: c, lineHeight: d, fontSizeSmall: u, fontSizeMedium: f, fontSizeLarge: h } = e;
  return Object.assign(Object.assign({}, yv), { lineHeight: d, fontSizeSmall: u, fontSizeMedium: f, fontSizeLarge: h, titleTextColor: r, thColor: N(n, t), thColorModal: N(i, t), thColorPopover: N(a, t), thTextColor: r, thFontWeight: c, tdTextColor: o, tdColor: n, tdColorModal: i, tdColorPopover: a, borderColor: N(n, l), borderColorModal: N(i, l), borderColorPopover: N(a, l), borderRadius: s });
}
const wv = { name: "Descriptions", common: L, self: Sv }, $v = "n-dialog-provider", lC = "n-dialog-api", sC = "n-dialog-reactive-list", Pv = { titleFontSize: "18px", padding: "16px 28px 20px 28px", iconSize: "28px", actionSpace: "12px", contentMargin: "8px 0 16px 0", iconMargin: "0 4px 0 0", iconMarginIconTop: "4px 0 8px 0", closeSize: "22px", closeIconSize: "18px", closeMargin: "20px 26px 0 0", closeMarginIconTop: "10px 16px 0 0" };
function Ev(e) {
  const { textColor1: t, textColor2: o, modalColor: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, infoColor: c, successColor: d, warningColor: u, errorColor: f, primaryColor: h, dividerColor: p, borderRadius: m, fontWeightStrong: v, lineHeight: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, Pv), { fontSize: x, lineHeight: g, border: `1px solid ${p}`, titleTextColor: t, textColor: o, color: r, closeColorHover: l, closeColorPressed: s, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeBorderRadius: m, iconColor: h, iconColorInfo: c, iconColorSuccess: d, iconColorWarning: u, iconColorError: f, borderRadius: m, titleFontWeight: v });
}
const Jn = { name: "Dialog", common: L, peers: { Button: We }, self: Ev }, ei = { icon: Function, type: { type: String, default: "default" }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean }, Tv = Un(ei), Rv = F([Z("dialog", `
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
 `, [j("icon", `
 color: var(--n-icon-color);
 `), U("bordered", `
 border: var(--n-border);
 `), U("icon-top", [j("close", `
 margin: var(--n-close-margin);
 `), j("icon", `
 margin: var(--n-icon-margin);
 `), j("content", `
 text-align: center;
 `), j("title", `
 justify-content: center;
 `), j("action", `
 justify-content: center;
 `)]), U("icon-left", [j("icon", `
 margin: var(--n-icon-margin);
 `), U("closable", [j("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), j("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), j("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [U("last", "margin-bottom: 0;")]), j("action", `
 display: flex;
 justify-content: flex-end;
 `, [F("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), j("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), j("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), Z("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), Rl(Z("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), Z("dialog", [Il(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), Iv = { default: () => y(wa, null), info: () => y(wa, null), success: () => y(Hp, null), warning: () => y(_p, null), error: () => y(Dp, null) }, zv = ee({ name: "Dialog", alias: ["NimbusConfirmCard", "Confirm"], props: Object.assign(Object.assign({}, Ce.props), ei), slots: Object, setup(e) {
  const { mergedComponentPropsRef: t, mergedClsPrefixRef: o, inlineThemeDisabled: r, mergedRtlRef: n } = vt(e), i = Vo("Dialog", n, o), a = B(() => {
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
  const d = Ce("Dialog", "-dialog", Rv, Jn, e, o), u = B(() => {
    const { type: h } = e, p = a.value, { common: { cubicBezierEaseInOut: m }, self: { fontSize: v, lineHeight: g, border: x, titleTextColor: P, textColor: S, color: R, closeBorderRadius: z, closeColorHover: b, closeColorPressed: w, closeIconColor: E, closeIconColorHover: $, closeIconColorPressed: T, closeIconSize: C, borderRadius: O, titleFontWeight: H, titleFontSize: A, padding: W, iconSize: k, actionSpace: q, contentMargin: le, closeSize: se, [p === "top" ? "iconMarginIconTop" : "iconMargin"]: me, [p === "top" ? "closeMarginIconTop" : "closeMargin"]: ce, [Q("iconColor", h)]: Le } } = d.value, He = jt(me);
    return { "--n-font-size": v, "--n-icon-color": Le, "--n-bezier": m, "--n-close-margin": ce, "--n-icon-margin-top": He.top, "--n-icon-margin-right": He.right, "--n-icon-margin-bottom": He.bottom, "--n-icon-margin-left": He.left, "--n-icon-size": k, "--n-close-size": se, "--n-close-icon-size": C, "--n-close-border-radius": z, "--n-close-color-hover": b, "--n-close-color-pressed": w, "--n-close-icon-color": E, "--n-close-icon-color-hover": $, "--n-close-icon-color-pressed": T, "--n-color": R, "--n-text-color": S, "--n-border-radius": O, "--n-padding": W, "--n-line-height": g, "--n-border": x, "--n-content-margin": le, "--n-title-font-size": A, "--n-title-font-weight": H, "--n-title-text-color": P, "--n-action-space": q };
  }), f = r ? Rt("dialog", B(() => `${e.type[0]}${a.value[0]}`), u, e) : void 0;
  return { mergedClsPrefix: o, rtlEnabled: i, mergedIconPlacement: a, mergedTheme: d, handlePositiveClick: l, handleNegativeClick: s, handleCloseClick: c, cssVars: r ? void 0 : u, themeClass: f == null ? void 0 : f.themeClass, onRender: f == null ? void 0 : f.onRender };
}, render() {
  var e;
  const { bordered: t, mergedIconPlacement: o, cssVars: r, closable: n, showIcon: i, title: a, content: l, action: s, negativeText: c, positiveText: d, positiveButtonProps: u, negativeButtonProps: f, handlePositiveClick: h, handleNegativeClick: p, mergedTheme: m, loading: v, type: g, mergedClsPrefix: x } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const P = i ? y(ls, { clsPrefix: x, class: `${x}-dialog__icon` }, { default: () => Ge(this.$slots.icon, (R) => R || (this.icon ? ft(this.icon) : Iv[this.type]())) }) : null, S = Ge(this.$slots.action, (R) => R || d || c || s ? y("div", { class: [`${x}-dialog__action`, this.actionClass], style: this.actionStyle }, R || (s ? [ft(s)] : [this.negativeText && y(Cn, Object.assign({ theme: m.peers.Button, themeOverrides: m.peerOverrides.Button, ghost: true, size: "small", onClick: p }, f), { default: () => ft(this.negativeText) }), this.positiveText && y(Cn, Object.assign({ theme: m.peers.Button, themeOverrides: m.peerOverrides.Button, size: "small", type: g === "default" ? "primary" : g, disabled: v, loading: v, onClick: h }, u), { default: () => ft(this.positiveText) })])) : null);
  return y("div", { class: [`${x}-dialog`, this.themeClass, this.closable && `${x}-dialog--closable`, `${x}-dialog--icon-${o}`, t && `${x}-dialog--bordered`, this.rtlEnabled && `${x}-dialog--rtl`], style: r, role: "dialog" }, n ? Ge(this.$slots.close, (R) => {
    const z = [`${x}-dialog__close`, this.rtlEnabled && `${x}-dialog--rtl`];
    return R ? y("div", { class: z }, R) : y(cs, { focusable: this.closeFocusable, clsPrefix: x, class: z, onClick: this.handleCloseClick });
  }) : null, i && o === "top" ? y("div", { class: `${x}-dialog-icon-container` }, P) : null, y("div", { class: [`${x}-dialog__title`, this.titleClass], style: this.titleStyle }, i && o === "left" ? P : null, Ca(this.$slots.header, () => [ft(a)])), y("div", { class: [`${x}-dialog__content`, S ? "" : `${x}-dialog__content--last`, this.contentClass], style: this.contentStyle }, Ca(this.$slots.default, () => [ft(l)])), S);
} });
function Av(e) {
  const { modalColor: t, textColor2: o, boxShadow3: r } = e;
  return { color: t, textColor: o, boxShadow: r };
}
const ks = { name: "Modal", common: L, peers: { Scrollbar: Fe, Dialog: Jn, Card: Yn }, self: Av }, $n = "n-draggable";
function Ov(e, t) {
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
      const { x: R, y: z, right: b, bottom: w } = s.getBoundingClientRect();
      u = R, h = z, d = window.innerWidth - b, f = window.innerHeight - w;
      const { left: E, top: $ } = s.style;
      p = +$.slice(0, -2), m = +E.slice(0, -2);
    }
    function x(S) {
      if (!v) return;
      const { clientX: R, clientY: z } = v;
      let b = S.clientX - R, w = S.clientY - z;
      i.value && (b > d ? b = d : -b > u && (b = -u), w > f ? w = f : -w > h && (w = -h));
      const E = b + m, $ = w + p;
      s.style.top = `${$}px`, s.style.left = `${E}px`;
    }
    function P() {
      v = void 0, t.onEnd(s);
    }
    he("mousedown", c, g), he("mousemove", window, x), he("mouseup", window, P), o = () => {
      fe("mousedown", c, g), he("mousemove", window, x), he("mouseup", window, P);
    };
  }
  function l() {
    o && (o(), o = void 0);
  }
  return Ha(l), { stopDrag: l, startDrag: a, draggableRef: r, draggableClassRef: n };
}
const ti = Object.assign(Object.assign({}, Xn), ei), Mv = Un(ti), Bv = ee({ name: "ModalBody", inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, ti), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(e) {
  const t = _(null), o = _(null), r = _(e.show), n = _(null), i = _(null), a = ie(Dl);
  let l = null;
  Re(ge(e, "show"), (w) => {
    w && (l = a.getMousePosition());
  }, { immediate: true });
  const { stopDrag: s, startDrag: c, draggableRef: d, draggableClassRef: u } = Ov(ge(e, "draggable"), { onEnd: (w) => {
    m(w);
  } }), f = B(() => hi([e.titleClass, u.value])), h = B(() => hi([e.headerClass, u.value]));
  Re(ge(e, "show"), (w) => {
    w && (r.value = true);
  }), Fh(B(() => e.blockScroll && r.value));
  function p() {
    if (a.transformOriginRef.value === "center") return "";
    const { value: w } = n, { value: E } = i;
    if (w === null || E === null) return "";
    if (o.value) {
      const $ = o.value.containerScrollTop;
      return `${w}px ${E + $}px`;
    }
    return "";
  }
  function m(w) {
    if (a.transformOriginRef.value === "center" || !l || !o.value) return;
    const E = o.value.containerScrollTop, { offsetLeft: $, offsetTop: T } = w, C = l.y, O = l.x;
    n.value = -($ - O), i.value = -(T - C - E), w.style.transformOrigin = p();
  }
  function v(w) {
    Xt(() => {
      m(w);
    });
  }
  function g(w) {
    w.style.transformOrigin = p(), e.onBeforeLeave();
  }
  function x(w) {
    const E = w;
    d.value && c(E), e.onAfterEnter && e.onAfterEnter(E);
  }
  function P() {
    r.value = false, n.value = null, i.value = null, s(), e.onAfterLeave();
  }
  function S() {
    const { onClose: w } = e;
    w && w();
  }
  function R() {
    e.onNegativeClick();
  }
  function z() {
    e.onPositiveClick();
  }
  const b = _(null);
  return Re(b, (w) => {
    w && Xt(() => {
      const E = w.el;
      E && t.value !== E && (t.value = E);
    });
  }), Te(wr, t), Te(Sr, null), Te(No, null), { mergedTheme: a.mergedThemeRef, appear: a.appearRef, isMounted: a.isMountedRef, mergedClsPrefix: a.mergedClsPrefixRef, bodyRef: t, scrollbarRef: o, draggableClass: u, displayed: r, childNodeRef: b, cardHeaderClass: h, dialogTitleClass: f, handlePositiveClick: z, handleNegativeClick: R, handleCloseClick: S, handleAfterEnter: x, handleAfterLeave: P, handleBeforeLeave: g, handleEnter: v };
}, render() {
  const { $slots: e, $attrs: t, handleEnter: o, handleAfterEnter: r, handleAfterLeave: n, handleBeforeLeave: i, preset: a, mergedClsPrefix: l } = this;
  let s = null;
  if (!a) {
    if (s = zp("default", e.default, { draggableClass: this.draggableClass }), !s) {
      Qt("modal", "default slot is empty");
      return;
    }
    s = Va(s), s.props = Et({ class: `${l}-modal` }, t, s.props || {});
  }
  return this.displayDirective === "show" || this.displayed || this.show ? Zt(y("div", { role: "none", class: [`${l}-modal-body-wrapper`, this.maskHidden && `${l}-modal-body-wrapper--mask-hidden`] }, y(fs, { ref: "scrollbarRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${l}-modal-scroll-content` }, { default: () => {
    var c;
    return [(c = this.renderMask) === null || c === void 0 ? void 0 : c.call(this), y(rs, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => {
      var d;
      return y(kt, { name: "fade-in-scale-up-transition", appear: (d = this.appear) !== null && d !== void 0 ? d : this.isMounted, onEnter: o, onAfterEnter: r, onAfterLeave: n, onBeforeLeave: i }, { default: () => {
        const u = [[tn, this.show]], { onClickoutside: f } = this;
        return f && u.push([gn, this.onClickoutside, void 0, { capture: true }]), Zt(this.preset === "confirm" || this.preset === "dialog" ? y(zv, Object.assign({}, this.$attrs, { class: [`${l}-modal`, this.$attrs.class], ref: "bodyRef", theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, Lo(this.$props, Tv), { titleClass: this.dialogTitleClass, "aria-modal": "true" }), e) : this.preset === "card" ? y(Em, Object.assign({}, this.$attrs, { ref: "bodyRef", class: [`${l}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, Lo(this.$props, $m), { headerClass: this.cardHeaderClass, "aria-modal": "true", role: "dialog" }), e) : this.childNodeRef = s, u);
      } });
    } })];
  } })), [[tn, this.displayDirective === "if" || this.displayed || this.show]]) : null;
} }), kv = F([Z("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), Z("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [ds({ enterDuration: ".25s", leaveDuration: ".25s", enterCubicBezier: "var(--n-bezier-ease-out)", leaveCubicBezier: "var(--n-bezier-ease-out)" })]), Z("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [Z("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `), U("mask-hidden", "pointer-events: none;", [Z("modal-scroll-content", [F("> *", `
 pointer-events: all;
 `)])])]), Z("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [ms({ duration: ".25s", enterScale: ".5" }), F(`.${$n}`, `
 cursor: move;
 user-select: none;
 `)])]), Fv = Object.assign(Object.assign(Object.assign(Object.assign({}, Ce.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: "if" }, transformOrigin: { type: String, default: "mouse" }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), ti), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } }), cC = ee({ name: "Modal", inheritAttrs: false, props: Fv, slots: Object, setup(e) {
  const t = _(null), { mergedClsPrefixRef: o, namespaceRef: r, inlineThemeDisabled: n } = vt(e), i = Ce("Modal", "-modal", kv, ks, e, o), a = Rh(64), l = Eh(), s = yr(), c = e.internalDialog ? ie($v, null) : null, d = e.internalModal ? ie(Mh, null) : null, u = kh();
  function f(z) {
    const { onUpdateShow: b, "onUpdate:show": w, onHide: E } = e;
    b && Ke(b, z), w && Ke(w, z), E && !z && E(z);
  }
  function h() {
    const { onClose: z } = e;
    z ? Promise.resolve(z()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function p() {
    const { onPositiveClick: z } = e;
    z ? Promise.resolve(z()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function m() {
    const { onNegativeClick: z } = e;
    z ? Promise.resolve(z()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function v() {
    const { onBeforeLeave: z, onBeforeHide: b } = e;
    z && Ke(z), b && b();
  }
  function g() {
    const { onAfterLeave: z, onAfterHide: b } = e;
    z && Ke(z), b && b();
  }
  function x(z) {
    var b;
    const { onMaskClick: w } = e;
    w && w(z), e.maskClosable && !((b = t.value) === null || b === void 0) && b.contains(ko(z)) && f(false);
  }
  function P(z) {
    var b;
    (b = e.onEsc) === null || b === void 0 || b.call(e), e.show && e.closeOnEsc && Ep(z) && (u.value || f(false));
  }
  Te(Dl, { getMousePosition: () => {
    const z = c || d;
    if (z) {
      const { clickedRef: b, clickedPositionRef: w } = z;
      if (b.value && w.value) return w.value;
    }
    return a.value ? l.value : null;
  }, mergedClsPrefixRef: o, mergedThemeRef: i, isMountedRef: s, appearRef: ge(e, "internalAppear"), transformOriginRef: ge(e, "transformOrigin") });
  const S = B(() => {
    const { common: { cubicBezierEaseOut: z }, self: { boxShadow: b, color: w, textColor: E } } = i.value;
    return { "--n-bezier-ease-out": z, "--n-box-shadow": b, "--n-color": w, "--n-text-color": E };
  }), R = n ? Rt("theme-class", void 0, S, e) : void 0;
  return { mergedClsPrefix: o, namespace: r, isMounted: s, containerRef: t, presetProps: B(() => Lo(e, Mv)), handleEsc: P, handleAfterLeave: g, handleClickoutside: x, handleBeforeLeave: v, doUpdateShow: f, handleNegativeClick: m, handlePositiveClick: p, handleCloseClick: h, cssVars: n ? void 0 : S, themeClass: R == null ? void 0 : R.themeClass, onRender: R == null ? void 0 : R.onRender };
}, render() {
  const { mergedClsPrefix: e } = this;
  return y(Gl, { to: this.to, show: this.show }, { default: () => {
    var t;
    (t = this.onRender) === null || t === void 0 || t.call(this);
    const { showMask: o } = this;
    return Zt(y("div", { role: "none", ref: "containerRef", class: [`${e}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, y(Bv, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: "bodyWrapper", displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !o }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: o ? void 0 : this.handleClickoutside, renderMask: o ? () => {
      var r;
      return y(kt, { name: "fade-in-transition", key: "mask", appear: (r = this.internalAppear) !== null && r !== void 0 ? r : this.isMounted }, { default: () => this.show ? y("div", { "aria-hidden": true, ref: "containerRef", class: `${e}-modal-mask`, onClick: this.handleClickoutside }) : null });
    } : void 0 }), this.$slots)), [[jn, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
function Lv(e) {
  const { primaryColor: t, errorColor: o } = e;
  return { colorError: o, colorLoading: t, height: "2px" };
}
const Dv = { name: "LoadingBar", common: L, self: Lv }, dC = "n-message-api", uC = "n-message-provider", Hv = { margin: "0 0 8px 0", padding: "10px 20px", maxWidth: "720px", minWidth: "420px", iconMargin: "0 10px 0 0", closeMargin: "0 0 0 10px", closeSize: "20px", closeIconSize: "16px", iconSize: "20px", fontSize: "14px" };
function _v(e) {
  const { textColor2: t, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, infoColor: i, successColor: a, errorColor: l, warningColor: s, popoverColor: c, boxShadow2: d, primaryColor: u, lineHeight: f, borderRadius: h, closeColorHover: p, closeColorPressed: m } = e;
  return Object.assign(Object.assign({}, Hv), { closeBorderRadius: h, textColor: t, textColorInfo: t, textColorSuccess: t, textColorError: t, textColorWarning: t, textColorLoading: t, color: c, colorInfo: c, colorSuccess: c, colorError: c, colorWarning: c, colorLoading: c, boxShadow: d, boxShadowInfo: d, boxShadowSuccess: d, boxShadowError: d, boxShadowWarning: d, boxShadowLoading: d, iconColor: t, iconColorInfo: i, iconColorSuccess: a, iconColorWarning: s, iconColorError: l, iconColorLoading: u, closeColorHover: p, closeColorPressed: m, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, closeColorHoverInfo: p, closeColorPressedInfo: m, closeIconColorInfo: o, closeIconColorHoverInfo: r, closeIconColorPressedInfo: n, closeColorHoverSuccess: p, closeColorPressedSuccess: m, closeIconColorSuccess: o, closeIconColorHoverSuccess: r, closeIconColorPressedSuccess: n, closeColorHoverError: p, closeColorPressedError: m, closeIconColorError: o, closeIconColorHoverError: r, closeIconColorPressedError: n, closeColorHoverWarning: p, closeColorPressedWarning: m, closeIconColorWarning: o, closeIconColorHoverWarning: r, closeIconColorPressedWarning: n, closeColorHoverLoading: p, closeColorPressedLoading: m, closeIconColorLoading: o, closeIconColorHoverLoading: r, closeIconColorPressedLoading: n, loadingColor: u, lineHeight: f, borderRadius: h, border: "0" });
}
const Nv = { name: "Message", common: L, self: _v }, Wv = { closeMargin: "16px 12px", closeSize: "20px", closeIconSize: "16px", width: "365px", padding: "16px", titleFontSize: "16px", metaFontSize: "12px", descriptionFontSize: "12px" };
function Vv(e) {
  const { textColor2: t, successColor: o, infoColor: r, warningColor: n, errorColor: i, popoverColor: a, closeIconColor: l, closeIconColorHover: s, closeIconColorPressed: c, closeColorHover: d, closeColorPressed: u, textColor1: f, textColor3: h, borderRadius: p, fontWeightStrong: m, boxShadow2: v, lineHeight: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, Wv), { borderRadius: p, lineHeight: g, fontSize: x, headerFontWeight: m, iconColor: t, iconColorSuccess: o, iconColorInfo: r, iconColorWarning: n, iconColorError: i, color: a, textColor: t, closeIconColor: l, closeIconColorHover: s, closeIconColorPressed: c, closeBorderRadius: p, closeColorHover: d, closeColorPressed: u, headerTextColor: f, descriptionTextColor: h, actionTextColor: t, boxShadow: v });
}
const jv = { name: "Notification", common: L, peers: { Scrollbar: Fe }, self: Vv };
function Gv(e) {
  const { textColor1: t, dividerColor: o, fontWeightStrong: r } = e;
  return { textColor: t, color: o, fontWeight: r };
}
const Uv = { name: "Divider", common: L, self: Gv };
function Kv(e) {
  const { modalColor: t, textColor1: o, textColor2: r, boxShadow3: n, lineHeight: i, fontWeightStrong: a, dividerColor: l, closeColorHover: s, closeColorPressed: c, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, borderRadius: h, primaryColorHover: p } = e;
  return { bodyPadding: "16px 24px", borderRadius: h, headerPadding: "16px 24px", footerPadding: "16px 24px", color: t, textColor: r, titleTextColor: o, titleFontSize: "18px", titleFontWeight: a, boxShadow: n, lineHeight: i, headerBorderBottom: `1px solid ${l}`, footerBorderTop: `1px solid ${l}`, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, closeSize: "22px", closeIconSize: "18px", closeColorHover: s, closeColorPressed: c, closeBorderRadius: h, resizableTriggerColorHover: p };
}
const qv = { name: "Drawer", common: L, peers: { Scrollbar: Fe }, self: Kv }, Yv = { actionMargin: "0 0 0 20px", actionMarginRtl: "0 20px 0 0" };
function Xv() {
  return Yv;
}
const Zv = { name: "DynamicInput", common: L, peers: { Input: Qe, Button: We }, self: Xv }, Qv = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function Jv() {
  return Qv;
}
const Fs = { name: "Space", self: Jv }, eb = { name: "DynamicTags", common: L, peers: { Input: Qe, Button: We, Tag: Cs, Space: Fs }, self() {
  return { inputWidth: "64px" };
} }, tb = { name: "Element", common: L }, ob = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function rb() {
  return ob;
}
const nb = { name: "Flex", self: rb }, ib = { name: "ButtonGroup", common: L }, ab = { feedbackPadding: "4px 0 0 2px", feedbackHeightSmall: "24px", feedbackHeightMedium: "24px", feedbackHeightLarge: "26px", feedbackFontSizeSmall: "13px", feedbackFontSizeMedium: "14px", feedbackFontSizeLarge: "14px", labelFontSizeLeftSmall: "14px", labelFontSizeLeftMedium: "14px", labelFontSizeLeftLarge: "15px", labelFontSizeTopSmall: "13px", labelFontSizeTopMedium: "14px", labelFontSizeTopLarge: "14px", labelHeightSmall: "24px", labelHeightMedium: "26px", labelHeightLarge: "28px", labelPaddingVertical: "0 0 6px 2px", labelPaddingHorizontal: "0 12px 0 0", labelTextAlignVertical: "left", labelTextAlignHorizontal: "right", labelFontWeight: "400" };
function lb(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, textColor1: n, errorColor: i, warningColor: a, lineHeight: l, textColor3: s } = e;
  return Object.assign(Object.assign({}, ab), { blankHeightSmall: t, blankHeightMedium: o, blankHeightLarge: r, lineHeight: l, labelTextColor: n, asteriskColor: i, feedbackTextColorError: i, feedbackTextColorWarning: a, feedbackTextColor: s });
}
const sb = { name: "Form", common: L, self: lb };
function cb(e) {
  const { primaryColor: t, successColor: o, warningColor: r, errorColor: n, infoColor: i, fontWeightStrong: a } = e;
  return { fontWeight: a, rotate: "252deg", colorStartPrimary: G(t, { alpha: 0.6 }), colorEndPrimary: t, colorStartInfo: G(i, { alpha: 0.6 }), colorEndInfo: i, colorStartWarning: G(r, { alpha: 0.6 }), colorEndWarning: r, colorStartError: G(n, { alpha: 0.6 }), colorEndError: n, colorStartSuccess: G(o, { alpha: 0.6 }), colorEndSuccess: o };
}
const db = { name: "GradientText", common: L, self: cb };
function ub(e) {
  const { textColorDisabled: t } = e;
  return { iconColorDisabled: t };
}
const fb = { name: "InputNumber", common: L, peers: { Button: We, Input: Qe }, self: ub };
function hb() {
  return { inputWidthSmall: "24px", inputWidthMedium: "30px", inputWidthLarge: "36px", gapSmall: "8px", gapMedium: "8px", gapLarge: "8px" };
}
const pb = { name: "InputOtp", common: L, peers: { Input: Qe }, self: hb };
function gb(e) {
  const { baseColor: t, textColor2: o, bodyColor: r, cardColor: n, dividerColor: i, actionColor: a, scrollbarColor: l, scrollbarColorHover: s, invertedColor: c } = e;
  return { textColor: o, textColorInverted: "#FFF", color: r, colorEmbedded: a, headerColor: n, headerColorInverted: c, footerColor: a, footerColorInverted: c, headerBorderColor: i, headerBorderColorInverted: c, footerBorderColor: i, footerBorderColorInverted: c, siderBorderColor: i, siderBorderColorInverted: c, siderColor: n, siderColorInverted: c, siderToggleButtonBorder: `1px solid ${i}`, siderToggleButtonColor: t, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: N(r, l), siderToggleBarColorHover: N(r, s), __invertScrollbar: "true" };
}
const mb = { name: "Layout", common: L, peers: { Scrollbar: Fe }, self: gb }, vb = { name: "Row", common: L };
function bb(e) {
  const { textColor2: t, cardColor: o, modalColor: r, popoverColor: n, dividerColor: i, borderRadius: a, fontSize: l, hoverColor: s } = e;
  return { textColor: t, color: o, colorHover: s, colorModal: r, colorHoverModal: N(r, s), colorPopover: n, colorHoverPopover: N(n, s), borderColor: i, borderColorModal: N(r, i), borderColorPopover: N(n, i), borderRadius: a, fontSize: l };
}
const xb = { name: "List", common: L, self: bb };
function Cb(e) {
  const { textColor2: t, modalColor: o, borderColor: r, fontSize: n, primaryColor: i } = e;
  return { loaderFontSize: n, loaderTextColor: t, loaderColor: o, loaderBorder: `1px solid ${r}`, loadingColor: i };
}
const yb = { name: "Log", common: L, peers: { Scrollbar: Fe, Code: Ss }, self: Cb };
function Sb(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const wb = { name: "Mention", common: L, peers: { InternalSelectMenu: Uo, Input: Qe }, self: Sb };
function $b(e, t, o, r) {
  return { itemColorHoverInverted: "#0000", itemColorActiveInverted: t, itemColorActiveHoverInverted: t, itemColorActiveCollapsedInverted: t, itemTextColorInverted: e, itemTextColorHoverInverted: o, itemTextColorChildActiveInverted: o, itemTextColorChildActiveHoverInverted: o, itemTextColorActiveInverted: o, itemTextColorActiveHoverInverted: o, itemTextColorHorizontalInverted: e, itemTextColorHoverHorizontalInverted: o, itemTextColorChildActiveHorizontalInverted: o, itemTextColorChildActiveHoverHorizontalInverted: o, itemTextColorActiveHorizontalInverted: o, itemTextColorActiveHoverHorizontalInverted: o, itemIconColorInverted: e, itemIconColorHoverInverted: o, itemIconColorActiveInverted: o, itemIconColorActiveHoverInverted: o, itemIconColorChildActiveInverted: o, itemIconColorChildActiveHoverInverted: o, itemIconColorCollapsedInverted: e, itemIconColorHorizontalInverted: e, itemIconColorHoverHorizontalInverted: o, itemIconColorActiveHorizontalInverted: o, itemIconColorActiveHoverHorizontalInverted: o, itemIconColorChildActiveHorizontalInverted: o, itemIconColorChildActiveHoverHorizontalInverted: o, arrowColorInverted: e, arrowColorHoverInverted: o, arrowColorActiveInverted: o, arrowColorActiveHoverInverted: o, arrowColorChildActiveInverted: o, arrowColorChildActiveHoverInverted: o, groupTextColorInverted: r };
}
function Pb(e) {
  const { borderRadius: t, textColor3: o, primaryColor: r, textColor2: n, textColor1: i, fontSize: a, dividerColor: l, hoverColor: s, primaryColorHover: c } = e;
  return Object.assign({ borderRadius: t, color: "#0000", groupTextColor: o, itemColorHover: s, itemColorActive: G(r, { alpha: 0.1 }), itemColorActiveHover: G(r, { alpha: 0.1 }), itemColorActiveCollapsed: G(r, { alpha: 0.1 }), itemTextColor: n, itemTextColorHover: n, itemTextColorActive: r, itemTextColorActiveHover: r, itemTextColorChildActive: r, itemTextColorChildActiveHover: r, itemTextColorHorizontal: n, itemTextColorHoverHorizontal: c, itemTextColorActiveHorizontal: r, itemTextColorActiveHoverHorizontal: r, itemTextColorChildActiveHorizontal: r, itemTextColorChildActiveHoverHorizontal: r, itemIconColor: i, itemIconColorHover: i, itemIconColorActive: r, itemIconColorActiveHover: r, itemIconColorChildActive: r, itemIconColorChildActiveHover: r, itemIconColorCollapsed: i, itemIconColorHorizontal: i, itemIconColorHoverHorizontal: c, itemIconColorActiveHorizontal: r, itemIconColorActiveHoverHorizontal: r, itemIconColorChildActiveHorizontal: r, itemIconColorChildActiveHoverHorizontal: r, itemHeight: "42px", arrowColor: n, arrowColorHover: n, arrowColorActive: r, arrowColorActiveHover: r, arrowColorChildActive: r, arrowColorChildActiveHover: r, colorInverted: "#0000", borderColorHorizontal: "#0000", fontSize: a, dividerColor: l }, $b("#BBB", r, "#FFF", "#AAA"));
}
const Eb = { name: "Menu", common: L, peers: { Tooltip: Ko, Dropdown: Pr }, self: Pb }, Tb = { titleFontSize: "18px", backSize: "22px" };
function Rb(e) {
  const { textColor1: t, textColor2: o, textColor3: r, fontSize: n, fontWeightStrong: i, primaryColorHover: a, primaryColorPressed: l } = e;
  return Object.assign(Object.assign({}, Tb), { titleFontWeight: i, fontSize: n, titleTextColor: t, backColor: o, backColorHover: a, backColorPressed: l, subtitleTextColor: r });
}
const Ib = { name: "PageHeader", common: L, self: Rb }, zb = { iconSize: "22px" };
function Ab(e) {
  const { fontSize: t, warningColor: o } = e;
  return Object.assign(Object.assign({}, zb), { fontSize: t, iconColor: o });
}
const Ob = { name: "Popconfirm", common: L, peers: { Button: We, Popover: Ht }, self: Ab };
function Mb(e) {
  const { infoColor: t, successColor: o, warningColor: r, errorColor: n, textColor2: i, progressRailColor: a, fontSize: l, fontWeight: s } = e;
  return { fontSize: l, fontSizeCircle: "28px", fontWeightCircle: s, railColor: a, railHeight: "8px", iconSizeCircle: "36px", iconSizeLine: "18px", iconColor: t, iconColorInfo: t, iconColorSuccess: o, iconColorWarning: r, iconColorError: n, textColorCircle: i, textColorLineInner: "rgb(255, 255, 255)", textColorLineOuter: i, fillColor: t, fillColorInfo: t, fillColorSuccess: o, fillColorWarning: r, fillColorError: n, lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)" };
}
const Ls = { name: "Progress", common: L, self: Mb };
function Bb(e) {
  const { railColor: t } = e;
  return { itemColor: t, itemColorActive: "#FFCC33", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
}
const kb = { name: "Rate", common: L, self: Bb }, Fb = { titleFontSizeSmall: "26px", titleFontSizeMedium: "32px", titleFontSizeLarge: "40px", titleFontSizeHuge: "48px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", iconSizeSmall: "64px", iconSizeMedium: "80px", iconSizeLarge: "100px", iconSizeHuge: "125px", iconColor418: void 0, iconColor404: void 0, iconColor403: void 0, iconColor500: void 0 };
function Lb(e) {
  const { textColor2: t, textColor1: o, errorColor: r, successColor: n, infoColor: i, warningColor: a, lineHeight: l, fontWeightStrong: s } = e;
  return Object.assign(Object.assign({}, Fb), { lineHeight: l, titleFontWeight: s, titleTextColor: o, textColor: t, iconColorError: r, iconColorSuccess: n, iconColorInfo: i, iconColorWarning: a });
}
const Db = { name: "Result", common: L, self: Lb }, Hb = { railHeight: "4px", railWidthVertical: "4px", handleSize: "18px", dotHeight: "8px", dotWidth: "8px", dotBorderRadius: "4px" };
function _b(e) {
  const t = "rgba(0, 0, 0, .85)", o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: r, primaryColor: n, baseColor: i, cardColor: a, modalColor: l, popoverColor: s, borderRadius: c, fontSize: d, opacityDisabled: u } = e;
  return Object.assign(Object.assign({}, Hb), { fontSize: d, markFontSize: d, railColor: r, railColorHover: r, fillColor: n, fillColorHover: n, opacityDisabled: u, handleColor: "#FFF", dotColor: a, dotColorModal: l, dotColorPopover: s, handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", indicatorColor: t, indicatorBoxShadow: o, indicatorTextColor: i, indicatorBorderRadius: c, dotBorder: `2px solid ${r}`, dotBorderActive: `2px solid ${n}`, dotBoxShadow: "" });
}
const Nb = { name: "Slider", common: L, self: _b };
function Wb(e) {
  const { opacityDisabled: t, heightTiny: o, heightSmall: r, heightMedium: n, heightLarge: i, heightHuge: a, primaryColor: l, fontSize: s } = e;
  return { fontSize: s, textColor: l, sizeTiny: o, sizeSmall: r, sizeMedium: n, sizeLarge: i, sizeHuge: a, color: l, opacitySpinning: t };
}
const Vb = { name: "Spin", common: L, self: Wb };
function jb(e) {
  const { textColor2: t, textColor3: o, fontSize: r, fontWeight: n } = e;
  return { labelFontSize: r, labelFontWeight: n, valueFontWeight: n, valueFontSize: "24px", labelTextColor: o, valuePrefixTextColor: t, valueSuffixTextColor: t, valueTextColor: t };
}
const Gb = { name: "Statistic", common: L, self: jb }, Ub = { stepHeaderFontSizeSmall: "14px", stepHeaderFontSizeMedium: "16px", indicatorIndexFontSizeSmall: "14px", indicatorIndexFontSizeMedium: "16px", indicatorSizeSmall: "22px", indicatorSizeMedium: "28px", indicatorIconSizeSmall: "14px", indicatorIconSizeMedium: "18px" };
function Kb(e) {
  const { fontWeightStrong: t, baseColor: o, textColorDisabled: r, primaryColor: n, errorColor: i, textColor1: a, textColor2: l } = e;
  return Object.assign(Object.assign({}, Ub), { stepHeaderFontWeight: t, indicatorTextColorProcess: o, indicatorTextColorWait: r, indicatorTextColorFinish: n, indicatorTextColorError: i, indicatorBorderColorProcess: n, indicatorBorderColorWait: r, indicatorBorderColorFinish: n, indicatorBorderColorError: i, indicatorColorProcess: n, indicatorColorWait: "#0000", indicatorColorFinish: "#0000", indicatorColorError: "#0000", splitorColorProcess: r, splitorColorWait: r, splitorColorFinish: n, splitorColorError: r, headerTextColorProcess: a, headerTextColorWait: r, headerTextColorFinish: r, headerTextColorError: i, descriptionTextColorProcess: l, descriptionTextColorWait: r, descriptionTextColorFinish: r, descriptionTextColorError: i });
}
const qb = { name: "Steps", common: L, self: Kb }, Yb = { buttonHeightSmall: "14px", buttonHeightMedium: "18px", buttonHeightLarge: "22px", buttonWidthSmall: "14px", buttonWidthMedium: "18px", buttonWidthLarge: "22px", buttonWidthPressedSmall: "20px", buttonWidthPressedMedium: "24px", buttonWidthPressedLarge: "28px", railHeightSmall: "18px", railHeightMedium: "22px", railHeightLarge: "26px", railWidthSmall: "32px", railWidthMedium: "40px", railWidthLarge: "48px" };
function Xb(e) {
  const { primaryColor: t, opacityDisabled: o, borderRadius: r, textColor3: n } = e;
  return Object.assign(Object.assign({}, Yb), { iconColor: n, textColor: "white", loadingColor: t, opacityDisabled: o, railColor: "rgba(0, 0, 0, .14)", railColorActive: t, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 0 2px ${G(t, { alpha: 0.2 })}` });
}
const Zb = { name: "Switch", common: L, self: Xb }, Qb = { thPaddingSmall: "6px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "6px", tdPaddingMedium: "12px", tdPaddingLarge: "12px" };
function Jb(e) {
  const { dividerColor: t, cardColor: o, modalColor: r, popoverColor: n, tableHeaderColor: i, tableColorStriped: a, textColor1: l, textColor2: s, borderRadius: c, fontWeightStrong: d, lineHeight: u, fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p } = e;
  return Object.assign(Object.assign({}, Qb), { fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p, lineHeight: u, borderRadius: c, borderColor: N(o, t), borderColorModal: N(r, t), borderColorPopover: N(n, t), tdColor: o, tdColorModal: r, tdColorPopover: n, tdColorStriped: N(o, a), tdColorStripedModal: N(r, a), tdColorStripedPopover: N(n, a), thColor: N(o, i), thColorModal: N(r, i), thColorPopover: N(n, i), thTextColor: l, tdTextColor: s, thFontWeight: d });
}
const e0 = { name: "Table", common: L, self: Jb }, t0 = { tabFontSizeSmall: "14px", tabFontSizeMedium: "14px", tabFontSizeLarge: "16px", tabGapSmallLine: "36px", tabGapMediumLine: "36px", tabGapLargeLine: "36px", tabGapSmallLineVertical: "8px", tabGapMediumLineVertical: "8px", tabGapLargeLineVertical: "8px", tabPaddingSmallLine: "6px 0", tabPaddingMediumLine: "10px 0", tabPaddingLargeLine: "14px 0", tabPaddingVerticalSmallLine: "6px 12px", tabPaddingVerticalMediumLine: "8px 16px", tabPaddingVerticalLargeLine: "10px 20px", tabGapSmallBar: "36px", tabGapMediumBar: "36px", tabGapLargeBar: "36px", tabGapSmallBarVertical: "8px", tabGapMediumBarVertical: "8px", tabGapLargeBarVertical: "8px", tabPaddingSmallBar: "4px 0", tabPaddingMediumBar: "6px 0", tabPaddingLargeBar: "10px 0", tabPaddingVerticalSmallBar: "6px 12px", tabPaddingVerticalMediumBar: "8px 16px", tabPaddingVerticalLargeBar: "10px 20px", tabGapSmallCard: "4px", tabGapMediumCard: "4px", tabGapLargeCard: "4px", tabGapSmallCardVertical: "4px", tabGapMediumCardVertical: "4px", tabGapLargeCardVertical: "4px", tabPaddingSmallCard: "8px 16px", tabPaddingMediumCard: "10px 20px", tabPaddingLargeCard: "12px 24px", tabPaddingSmallSegment: "4px 0", tabPaddingMediumSegment: "6px 0", tabPaddingLargeSegment: "8px 0", tabPaddingVerticalLargeSegment: "0 8px", tabPaddingVerticalSmallCard: "8px 12px", tabPaddingVerticalMediumCard: "10px 16px", tabPaddingVerticalLargeCard: "12px 20px", tabPaddingVerticalSmallSegment: "0 4px", tabPaddingVerticalMediumSegment: "0 6px", tabGapSmallSegment: "0", tabGapMediumSegment: "0", tabGapLargeSegment: "0", tabGapSmallSegmentVertical: "0", tabGapMediumSegmentVertical: "0", tabGapLargeSegmentVertical: "0", panePaddingSmall: "8px 0 0 0", panePaddingMedium: "12px 0 0 0", panePaddingLarge: "16px 0 0 0", closeSize: "18px", closeIconSize: "14px" };
function o0(e) {
  const { textColor2: t, primaryColor: o, textColorDisabled: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, tabColor: c, baseColor: d, dividerColor: u, fontWeight: f, textColor1: h, borderRadius: p, fontSize: m, fontWeightStrong: v } = e;
  return Object.assign(Object.assign({}, t0), { colorSegment: c, tabFontSizeCard: m, tabTextColorLine: h, tabTextColorActiveLine: o, tabTextColorHoverLine: o, tabTextColorDisabledLine: r, tabTextColorSegment: h, tabTextColorActiveSegment: t, tabTextColorHoverSegment: t, tabTextColorDisabledSegment: r, tabTextColorBar: h, tabTextColorActiveBar: o, tabTextColorHoverBar: o, tabTextColorDisabledBar: r, tabTextColorCard: h, tabTextColorHoverCard: h, tabTextColorActiveCard: o, tabTextColorDisabledCard: r, barColor: o, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, closeBorderRadius: p, tabColor: c, tabColorSegment: d, tabBorderColor: u, tabFontWeightActive: f, tabFontWeight: f, tabBorderRadius: p, paneTextColor: t, fontWeightStrong: v });
}
const r0 = { name: "Tabs", common: L, self: o0 };
function n0(e) {
  const { textColor1: t, textColor2: o, fontWeightStrong: r, fontSize: n } = e;
  return { fontSize: n, titleTextColor: t, textColor: o, titleFontWeight: r };
}
const i0 = { name: "Thing", common: L, self: n0 }, a0 = { titleMarginMedium: "0 0 6px 0", titleMarginLarge: "-2px 0 6px 0", titleFontSizeMedium: "14px", titleFontSizeLarge: "16px", iconSizeMedium: "14px", iconSizeLarge: "14px" };
function l0(e) {
  const { textColor3: t, infoColor: o, errorColor: r, successColor: n, warningColor: i, textColor1: a, textColor2: l, railColor: s, fontWeightStrong: c, fontSize: d } = e;
  return Object.assign(Object.assign({}, a0), { contentFontSize: d, titleFontWeight: c, circleBorder: `2px solid ${t}`, circleBorderInfo: `2px solid ${o}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${n}`, circleBorderWarning: `2px solid ${i}`, iconColor: t, iconColorInfo: o, iconColorError: r, iconColorSuccess: n, iconColorWarning: i, titleTextColor: a, contentTextColor: l, metaTextColor: t, lineColor: s });
}
const s0 = { name: "Timeline", common: L, self: l0 }, c0 = { extraFontSizeSmall: "12px", extraFontSizeMedium: "12px", extraFontSizeLarge: "14px", titleFontSizeSmall: "14px", titleFontSizeMedium: "16px", titleFontSizeLarge: "16px", closeSize: "20px", closeIconSize: "16px", headerHeightSmall: "44px", headerHeightMedium: "44px", headerHeightLarge: "50px" };
function d0(e) {
  const { fontWeight: t, fontSizeLarge: o, fontSizeMedium: r, fontSizeSmall: n, heightLarge: i, heightMedium: a, borderRadius: l, cardColor: s, tableHeaderColor: c, textColor1: d, textColorDisabled: u, textColor2: f, textColor3: h, borderColor: p, hoverColor: m, closeColorHover: v, closeColorPressed: g, closeIconColor: x, closeIconColorHover: P, closeIconColorPressed: S } = e;
  return Object.assign(Object.assign({}, c0), { itemHeightSmall: a, itemHeightMedium: a, itemHeightLarge: i, fontSizeSmall: n, fontSizeMedium: r, fontSizeLarge: o, borderRadius: l, dividerColor: p, borderColor: p, listColor: s, headerColor: N(s, c), titleTextColor: d, titleTextColorDisabled: u, extraTextColor: h, extraTextColorDisabled: u, itemTextColor: f, itemTextColorDisabled: u, itemColorPending: m, titleFontWeight: t, closeColorHover: v, closeColorPressed: g, closeIconColor: x, closeIconColorHover: P, closeIconColorPressed: S });
}
const u0 = { name: "Transfer", common: L, peers: { Checkbox: xo, Scrollbar: Fe, Input: Qe, Empty: Dt, Button: We }, self: d0 };
function f0(e) {
  const { borderRadiusSmall: t, dividerColor: o, hoverColor: r, pressedColor: n, primaryColor: i, textColor3: a, textColor2: l, textColorDisabled: s, fontSize: c } = e;
  return { fontSize: c, lineHeight: "1.5", nodeHeight: "30px", nodeWrapperPadding: "3px 0", nodeBorderRadius: t, nodeColorHover: r, nodeColorPressed: n, nodeColorActive: G(i, { alpha: 0.1 }), arrowColor: a, nodeTextColor: l, nodeTextColorDisabled: s, loadingColor: i, dropMarkColor: i, lineColor: o };
}
const Ds = { name: "Tree", common: L, peers: { Checkbox: xo, Scrollbar: Fe, Empty: Dt }, self: f0 };
function h0(e) {
  const { popoverColor: t, boxShadow2: o, borderRadius: r, heightMedium: n, dividerColor: i, textColor2: a } = e;
  return { menuPadding: "4px", menuColor: t, menuBoxShadow: o, menuBorderRadius: r, menuHeight: `calc(${n} * 7.6)`, actionDividerColor: i, actionTextColor: a, actionPadding: "8px 12px", headerDividerColor: i, headerTextColor: a, headerPadding: "8px 12px" };
}
const p0 = { name: "TreeSelect", common: L, peers: { Tree: Ds, Empty: Dt, InternalSelection: qn }, self: h0 }, g0 = { headerFontSize1: "30px", headerFontSize2: "22px", headerFontSize3: "18px", headerFontSize4: "16px", headerFontSize5: "16px", headerFontSize6: "16px", headerMargin1: "28px 0 20px 0", headerMargin2: "28px 0 20px 0", headerMargin3: "28px 0 20px 0", headerMargin4: "28px 0 18px 0", headerMargin5: "28px 0 18px 0", headerMargin6: "28px 0 18px 0", headerPrefixWidth1: "16px", headerPrefixWidth2: "16px", headerPrefixWidth3: "12px", headerPrefixWidth4: "12px", headerPrefixWidth5: "12px", headerPrefixWidth6: "12px", headerBarWidth1: "4px", headerBarWidth2: "4px", headerBarWidth3: "3px", headerBarWidth4: "3px", headerBarWidth5: "3px", headerBarWidth6: "3px", pMargin: "16px 0 16px 0", liMargin: ".25em 0 0 0", olPadding: "0 0 0 2em", ulPadding: "0 0 0 2em" };
function m0(e) {
  const { primaryColor: t, textColor2: o, borderColor: r, lineHeight: n, fontSize: i, borderRadiusSmall: a, dividerColor: l, fontWeightStrong: s, textColor1: c, textColor3: d, infoColor: u, warningColor: f, errorColor: h, successColor: p, codeColor: m } = e;
  return Object.assign(Object.assign({}, g0), { aTextColor: t, blockquoteTextColor: o, blockquotePrefixColor: r, blockquoteLineHeight: n, blockquoteFontSize: i, codeBorderRadius: a, liTextColor: o, liLineHeight: n, liFontSize: i, hrColor: l, headerFontWeight: s, headerTextColor: c, pTextColor: o, pTextColor1Depth: c, pTextColor2Depth: o, pTextColor3Depth: d, pLineHeight: n, pFontSize: i, headerBarColor: t, headerBarColorPrimary: t, headerBarColorInfo: u, headerBarColorError: h, headerBarColorWarning: f, headerBarColorSuccess: p, textColor: o, textColor1Depth: c, textColor2Depth: o, textColor3Depth: d, textColorPrimary: t, textColorInfo: u, textColorSuccess: p, textColorWarning: f, textColorError: h, codeTextColor: o, codeColor: m, codeBorder: "1px solid #0000" });
}
const Hs = { name: "Typography", common: L, self: m0 };
function v0(e) {
  const { iconColor: t, primaryColor: o, errorColor: r, textColor2: n, successColor: i, opacityDisabled: a, actionColor: l, borderColor: s, hoverColor: c, lineHeight: d, borderRadius: u, fontSize: f } = e;
  return { fontSize: f, lineHeight: d, borderRadius: u, draggerColor: l, draggerBorder: `1px dashed ${s}`, draggerBorderHover: `1px dashed ${o}`, itemColorHover: c, itemColorHoverError: G(r, { alpha: 0.06 }), itemTextColor: n, itemTextColorError: r, itemTextColorSuccess: i, itemIconColor: t, itemDisabledOpacity: a, itemBorderImageCardError: `1px solid ${r}`, itemBorderImageCard: `1px solid ${s}` };
}
const b0 = { name: "Upload", common: L, peers: { Button: We, Progress: Ls }, self: v0 }, x0 = { name: "Watermark", common: L, self(e) {
  const { fontFamily: t } = e;
  return { fontFamily: t };
} };
function C0(e) {
  const { popoverColor: t, dividerColor: o, borderRadius: r } = e;
  return { color: t, buttonBorderColor: o, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
}
const y0 = { name: "FloatButtonGroup", common: L, self: C0 };
function S0(e) {
  const { popoverColor: t, textColor2: o, buttonColor2Hover: r, buttonColor2Pressed: n, primaryColor: i, primaryColorHover: a, primaryColorPressed: l, borderRadius: s } = e;
  return { color: t, colorHover: r, colorPressed: n, colorPrimary: i, colorPrimaryHover: a, colorPrimaryPressed: l, textColor: o, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)", textColorPrimary: "#fff", borderRadiusSquare: s };
}
const w0 = { name: "FloatButton", common: L, self: S0 };
function $0(e) {
  const { borderRadius: t, fontSizeMini: o, fontSizeTiny: r, fontSizeSmall: n, fontWeight: i, textColor2: a, cardColor: l, buttonColor2Hover: s } = e;
  return { activeColors: ["#9be9a8", "#40c463", "#30a14e", "#216e39"], borderRadius: t, borderColor: l, textColor: a, mininumColor: s, fontWeight: i, loadingColorStart: "rgba(0, 0, 0, 0.06)", loadingColorEnd: "rgba(0, 0, 0, 0.12)", rectSizeSmall: "10px", rectSizeMedium: "11px", rectSizeLarge: "12px", borderRadiusSmall: "2px", borderRadiusMedium: "2px", borderRadiusLarge: "2px", xGapSmall: "2px", xGapMedium: "3px", xGapLarge: "3px", yGapSmall: "2px", yGapMedium: "3px", yGapLarge: "3px", fontSizeSmall: r, fontSizeMedium: o, fontSizeLarge: n };
}
const P0 = { name: "Heatmap", common: L, self: $0 };
function E0(e) {
  const { primaryColor: t, baseColor: o } = e;
  return { color: t, iconColor: o };
}
const T0 = { name: "IconWrapper", common: L, self: E0 };
function R0() {
  return { toolbarIconColor: "rgba(255, 255, 255, .9)", toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
}
const I0 = { name: "Image", common: L, peers: { Tooltip: Ko }, self: R0 }, fC = "n-layout-sider", hC = { type: String, default: "static" }, z0 = { extraFontSize: "12px", width: "440px" };
function A0(e) {
  const { fontWeight: t, iconColorDisabled: o, iconColor: r, fontSizeLarge: n, fontSizeMedium: i, fontSizeSmall: a, heightLarge: l, heightMedium: s, heightSmall: c, borderRadius: d, cardColor: u, tableHeaderColor: f, textColor1: h, textColorDisabled: p, textColor2: m, borderColor: v, hoverColor: g } = e;
  return Object.assign(Object.assign({}, z0), { itemHeightSmall: c, itemHeightMedium: s, itemHeightLarge: l, fontSizeSmall: a, fontSizeMedium: i, fontSizeLarge: n, borderRadius: d, borderColor: v, listColor: u, headerColor: N(u, f), titleTextColor: h, titleTextColorDisabled: p, extraTextColor: m, filterDividerColor: v, itemTextColor: m, itemTextColorDisabled: p, itemColorPending: g, titleFontWeight: t, iconColor: r, iconColorDisabled: o });
}
const O0 = { name: "Transfer", common: L, peers: { Checkbox: xo, Scrollbar: Fe, Input: Qe, Empty: Dt, Button: We }, self: A0 };
function M0() {
  return {};
}
const B0 = { name: "Marquee", common: L, self: M0 };
function k0(e) {
  return { borderRadius: e.borderRadius };
}
const F0 = { name: "QrCode", common: L, self: k0 };
function L0(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, borderRadius: n } = e;
  return { color: "#eee", colorEnd: "#ddd", borderRadius: n, heightSmall: t, heightMedium: o, heightLarge: r };
}
const D0 = { name: "Skeleton", common: L, self: L0 };
function H0(e) {
  const { primaryColorHover: t, borderColor: o } = e;
  return { resizableTriggerColorHover: t, resizableTriggerColor: o };
}
const _0 = { name: "Split", common: L, self: H0 }, N0 = Z("text", `
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
 `)]), W0 = Object.assign(Object.assign({}, Ce.props), { code: Boolean, type: { type: String, default: "default" }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), pC = ee({ name: "Text", props: W0, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = vt(e), r = Ce("Typography", "-text", N0, Hs, e, t), n = B(() => {
    const { depth: a, type: l } = e, s = l === "default" ? a === void 0 ? "textColor" : `textColor${a}Depth` : Q("textColor", l), { common: { fontWeightStrong: c, fontFamilyMono: d, cubicBezierEaseInOut: u }, self: { codeTextColor: f, codeBorderRadius: h, codeColor: p, codeBorder: m, [s]: v } } = r.value;
    return { "--n-bezier": u, "--n-text-color": v, "--n-font-weight-strong": c, "--n-font-famliy-mono": d, "--n-code-border-radius": h, "--n-code-text-color": f, "--n-code-color": p, "--n-code-border": m };
  }), i = o ? Rt("text", B(() => `${e.type[0]}${e.depth || ""}`), n, e) : void 0;
  return { mergedClsPrefix: t, compitableTag: Ll(e, ["as", "tag"]), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e, t, o;
  const { mergedClsPrefix: r } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const n = [`${r}-text`, this.themeClass, { [`${r}-text--code`]: this.code, [`${r}-text--delete`]: this.delete, [`${r}-text--strong`]: this.strong, [`${r}-text--italic`]: this.italic, [`${r}-text--underline`]: this.underline }], i = (o = (t = this.$slots).default) === null || o === void 0 ? void 0 : o.call(t);
  return this.code ? y("code", { class: n, style: this.cssVars }, this.delete ? y("del", null, i) : i) : this.delete ? y("del", { class: n, style: this.cssVars }, i) : y(this.compitableTag || "span", { class: n, style: this.cssVars }, i);
} }), V0 = () => ({}), j0 = { name: "Equation", common: L, self: V0 }, gC = { name: "light", common: L, Alert: jg, Anchor: Yg, AutoComplete: tm, Avatar: ys, AvatarGroup: nm, BackTop: lm, Badge: cm, Breadcrumb: fm, Button: We, ButtonGroup: ib, Calendar: Cm, Card: Yn, Carousel: Rm, Cascader: Om, Checkbox: xo, Code: Ss, Collapse: km, CollapseTransition: Lm, ColorPicker: Hm, DataTable: Jm, DatePicker: Cv, Descriptions: wv, Dialog: Jn, Divider: Uv, Drawer: qv, Dropdown: Pr, DynamicInput: Zv, DynamicTags: eb, Element: tb, Empty: Dt, Equation: j0, Ellipsis: Zn, Flex: nb, Form: sb, GradientText: db, Heatmap: P0, Icon: zs, IconWrapper: T0, Image: I0, Input: Qe, InputNumber: fb, InputOtp: pb, Layout: mb, LegacyTransfer: O0, List: xb, LoadingBar: Dv, Log: yb, Menu: Eb, Mention: wb, Message: Nv, Modal: ks, Notification: jv, PageHeader: Ib, Pagination: Ps, Popconfirm: Ob, Popover: Ht, Popselect: ws, Progress: Ls, QrCode: F0, Radio: Es, Rate: kb, Row: vb, Result: Db, Scrollbar: Fe, Skeleton: D0, Select: $s, Slider: Nb, Space: Fs, Spin: Vb, Statistic: Gb, Steps: qb, Switch: Zb, Table: e0, Tabs: r0, Tag: Cs, Thing: i0, TimePicker: Bs, Timeline: s0, Tooltip: Ko, Transfer: u0, Tree: Ds, TreeSelect: p0, Typography: Hs, Upload: b0, Watermark: x0, Split: _0, FloatButton: w0, FloatButtonGroup: y0, Marquee: B0 };
class G0 {
  constructor() {
    __publicField(this, "storageProvider", null);
    __publicField(this, "initialized", false);
  }
  async init() {
    if (this.initialized) return;
    const t = Sc();
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
const qe = new G0(), Ye = qe.set.bind(qe), _s = qe.get.bind(qe), Xe = qe.save.bind(qe);
qe.init.bind(qe);
qe.exportToJson.bind(qe);
qe.clear.bind(qe);
qe.remove.bind(qe);
const U0 = "trackmaker_settings", mC = ja("settings", () => {
  const e = _({ ...Ar });
  async function t() {
    const a = await _s("settings");
    a && (e.value = { ...e.value, ...a }), r();
  }
  async function o() {
    await Ye("settings", JSON.parse(JSON.stringify(e.value))), await Xe(), r();
  }
  function r() {
    try {
      localStorage.setItem(U0, JSON.stringify(e.value));
    } catch {
    }
  }
  function n() {
    const a = { theme: e.value.theme, interfaceLanguage: e.value.interfaceLanguage, mapLanguage: e.value.mapLanguage, watchCompatibilityMode: e.value.watchCompatibilityMode, geolocationCorrection: e.value.geolocationCorrection };
    e.value = { ...Ar, ...a };
  }
  function i(a) {
    const l = Ar, s = e.value;
    s[a] = l[a], e.value = { ...s };
  }
  return Re(e, () => {
    r(), o();
  }, { deep: true }), { settings: e, init: t, resetAdvancedSettings: n, resetSetting: i };
});
function K0(e) {
  return wc() ? ($c(e), true) : false;
}
const Xr = /* @__PURE__ */ new WeakMap(), q0 = (...e) => {
  var t;
  const o = e[0], r = (t = mo()) == null ? void 0 : t.proxy;
  if (r == null && !Ga()) throw new Error("injectLocal must be called in setup");
  return r && Xr.has(r) && o in Xr.get(r) ? Xr.get(r)[o] : ie(...e);
}, Y0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const X0 = Object.prototype.toString, Z0 = (e) => X0.call(e) === "[object Object]";
function Aa(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Zr(e) {
  return Array.isArray(e) ? e : [e];
}
function Q0(e) {
  return mo();
}
function J0(e, t = true, o) {
  Q0() ? st(e, o) : t ? e() : Xt(e);
}
function ex(e, t, o) {
  return Re(e, t, { ...o, immediate: true });
}
const oi = Y0 ? window : void 0;
function tx(e) {
  var t;
  const o = co(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function Pn(...e) {
  const t = [], o = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, s, c, d) => (l.addEventListener(s, c, d), () => l.removeEventListener(s, c, d)), n = B(() => {
    const l = Zr(co(e[0])).filter((s) => s != null);
    return l.every((s) => typeof s != "string") ? l : void 0;
  }), i = ex(() => {
    var l, s;
    return [(s = (l = n.value) == null ? void 0 : l.map((c) => tx(c))) != null ? s : [oi].filter((c) => c != null), Zr(co(n.value ? e[1] : e[0])), Zr(so(n.value ? e[2] : e[1])), co(n.value ? e[3] : e[2])];
  }, ([l, s, c, d]) => {
    if (o(), !(l == null ? void 0 : l.length) || !(s == null ? void 0 : s.length) || !(c == null ? void 0 : c.length)) return;
    const u = Z0(d) ? { ...d } : d;
    t.push(...l.flatMap((f) => s.flatMap((h) => c.map((p) => r(f, h, p, u)))));
  }, { flush: "post" }), a = () => {
    i(), o();
  };
  return K0(o), a;
}
function ox() {
  const e = wt(false), t = mo();
  return t && st(() => {
    e.value = true;
  }, t), e;
}
function rx(e) {
  const t = ox();
  return B(() => (t.value, !!e()));
}
const nx = /* @__PURE__ */ Symbol("vueuse-ssr-width");
function ix() {
  const e = Ga() ? q0(nx, null) : null;
  return typeof e == "number" ? e : void 0;
}
function ax(e, t = {}) {
  const { window: o = oi, ssrWidth: r = ix() } = t, n = rx(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), i = wt(typeof r == "number"), a = wt(), l = wt(false), s = (c) => {
    l.value = c.matches;
  };
  return vo(() => {
    if (i.value) {
      i.value = !n.value;
      const c = co(e).split(",");
      l.value = c.some((d) => {
        const u = d.includes("not all"), f = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || h);
        return f && p && (p = r >= Aa(f[1])), h && p && (p = r <= Aa(h[1])), u ? !p : p;
      });
      return;
    }
    n.value && (a.value = o.matchMedia(co(e)), l.value = a.value.matches);
  }), Pn(a, "change", s, { passive: true }), B(() => l.value);
}
function vC(e = {}) {
  const { window: t = oi, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: n = true, includeScrollbar: i = true, type: a = "inner" } = e, l = wt(o), s = wt(r), c = () => {
    if (t) if (a === "outer") l.value = t.outerWidth, s.value = t.outerHeight;
    else if (a === "visual" && t.visualViewport) {
      const { width: u, height: f, scale: h } = t.visualViewport;
      l.value = Math.round(u * h), s.value = Math.round(f * h);
    } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  c(), J0(c);
  const d = { passive: true };
  if (Pn("resize", c, d), t && a === "visual" && t.visualViewport && Pn(t.visualViewport, "resize", c, d), n) {
    const u = ax("(orientation: portrait)");
    Re(u, () => c());
  }
  return { width: l, height: s };
}
class bC {
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
const ke = [];
for (let e = 0; e < 256; ++e) ke.push((e + 256).toString(16).slice(1));
function lx(e, t = 0) {
  return (ke[e[t + 0]] + ke[e[t + 1]] + ke[e[t + 2]] + ke[e[t + 3]] + "-" + ke[e[t + 4]] + ke[e[t + 5]] + "-" + ke[e[t + 6]] + ke[e[t + 7]] + "-" + ke[e[t + 8]] + ke[e[t + 9]] + "-" + ke[e[t + 10]] + ke[e[t + 11]] + ke[e[t + 12]] + ke[e[t + 13]] + ke[e[t + 14]] + ke[e[t + 15]]).toLowerCase();
}
let Qr;
const sx = new Uint8Array(16);
function cx() {
  if (!Qr) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Qr = crypto.getRandomValues.bind(crypto);
  }
  return Qr(sx);
}
const dx = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Oa = { randomUUID: dx };
function Ao(e, t, o) {
  var _a2;
  if (Oa.randomUUID && !e) return Oa.randomUUID();
  e = e || {};
  const r = e.random ?? ((_a2 = e.rng) == null ? void 0 : _a2.call(e)) ?? cx();
  if (r.length < 16) throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, lx(r);
}
function at() {
  return { name: "Untitled", description: "A new geographic item", creation_timestamp: Date.now(), modification_timestamp: Date.now(), created_by: "anonymous", modified_by: "anonymous", tags: [] };
}
function ux() {
  return { ...at(), version: 1, signature: void 0 };
}
class Yt {
  constructor(t = Ao(), o, r, n) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routes");
    __publicField(this, "drafts");
    this.id = t, this.routes = o || { id: Ao(), meta: at(), routes: [] }, this.drafts = r || { id: Ao(), meta: at(), drafts: [] }, this.meta = { ...ux(), ...n };
  }
  toStorage() {
    return { id: this.id, meta: this.meta, routes: this.routes, drafts: this.drafts };
  }
  static fromStorage(t) {
    return new Yt(t.id, t.routes, t.drafts, t.meta);
  }
  clone() {
    return Yt.fromStorage(this.toStorage());
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
class fx {
  constructor(t = [], o = Ao(), r = at()) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routesInternal");
    this.id = o, this.meta = r ?? at(), this.routesInternal = t;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = at()), this.meta.name;
  }
  set name(t) {
    (this.meta === null || this.meta === void 0) && (this.meta = at()), this.meta.name = t;
  }
  get routes() {
    return yt(this.routesInternal);
  }
  set routes(t) {
    this.routesInternal = yt(t);
  }
  findRoute(t) {
    return this.routesInternal.find((o) => o.id === t);
  }
  existRoute(t) {
    return this.routesInternal.some((o) => o.id === t);
  }
  addRoute(t) {
    if (this.existRoute(t.id)) throw new Error(`[CartoSketch.Route] Route ${t.id} already exist`);
    this.routesInternal.push(yt(t)), this.updateModificationTime();
  }
  updateRoute(t) {
    const o = this.routesInternal.findIndex((r) => r.id === t.id);
    if (o === -1) throw new Error(`[CartoSketch.Route] Route ${t.id} not found`);
    this.routesInternal[o] = yt(t), this.updateModificationTime();
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
class Ma {
  constructor(t = Ao(), o = [], r = {}, n) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "properties");
    __publicField(this, "points");
    this.id = t, this.meta = { ...at(), record_timespan: 0, ...n }, this.properties = r, this.points = o;
  }
  get name() {
    return (this.meta === null || this.meta === void 0) && (this.meta = at()), this.meta.name;
  }
  set name(t) {
    (this.meta === null || this.meta === void 0) && (this.meta = at()), this.meta.name = t;
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
    this.points = yt(t), this.updateModificationTime();
  }
  appendPoint(t) {
    this.points.push(yt(t)), this.updateModificationTime();
  }
  getPoints() {
    return yt(this.points);
  }
  setProperties(t) {
    const o = yt(t);
    Object.assign(this.properties, o), this.updateModificationTime();
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: "Feature", properties: { ...this.properties, ...this.meta, description: JSON.stringify({ name: this.meta.name, id: this.id }) }, geometry: { type: "LineString", coordinates: this.points.map((t) => [t.longitude, t.latitude]) } };
  }
  exportToStorage() {
    return yt({ id: this.id, meta: this.meta, properties: this.properties, points: this.points });
  }
}
var ue = ((e) => (e.MIGRATION_FAILED = "MIGRATION_FAILED", e.INVALID_VERSION = "INVALID_VERSION", e.UNSUPPORTED_VERSION = "UNSUPPORTED_VERSION", e.ROLLBACK_FAILED = "ROLLBACK_FAILED", e.VALIDATION_FAILED = "VALIDATION_FAILED", e.STRATEGY_NOT_FOUND = "STRATEGY_NOT_FOUND", e.DATA_CORRUPTION = "DATA_CORRUPTION", e))(ue || {});
class pe extends Tc {
  constructor(t, o = "MIGRATION_FAILED", r) {
    super(t, r);
    __publicField(this, "code");
    __publicField(this, "domain", Rc.GENERIC);
    this.code = o;
  }
}
class ut extends pe {
  constructor(t, o = "INVALID_VERSION", r, n, i) {
    super(t, o, i), this.currentVersion = r, this.targetVersion = n;
  }
}
class de extends pe {
  constructor(t, o, r, n) {
    super(t, "VALIDATION_FAILED", n), this.field = o, this.value = r;
  }
}
class Ba extends pe {
  constructor(t, o, r) {
    super(t, "DATA_CORRUPTION", r), this.corruptedData = o;
  }
}
class hx extends pe {
  constructor(t, o, r, n) {
    super(t, "ROLLBACK_FAILED", n), this.originalError = o, this.rollbackError = r;
  }
}
class wo {
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
        if (typeof o == "number" && o >= 0) return Ee(o);
      }
      if (this.isRouteCollectionFormat(t)) return Ee(0);
      if (this.isSketchArrayFormat(t)) return Ee(1);
      throw new Error("Unable to determine data version");
    } catch (o) {
      const r = o instanceof ut ? o : new ut(`Failed to extract version from data: ${String(o)}`, ue.INVALID_VERSION, void 0, void 0, o instanceof Error ? o : new Error(String(o)));
      return ae(r);
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
      if (t < this.MIN_SUPPORTED_VERSION) throw new ut(`Version ${t} is below minimum supported version ${this.MIN_SUPPORTED_VERSION}`, ue.UNSUPPORTED_VERSION, t);
      if (t > this.CURRENT_VERSION) throw new ut(`Version ${t} is above current version ${this.CURRENT_VERSION}`, ue.UNSUPPORTED_VERSION, t, this.CURRENT_VERSION);
      return Ee(void 0);
    } catch (o) {
      const r = o instanceof ut ? o : new ut(`Version validation failed: ${String(o)}`, ue.INVALID_VERSION, t, void 0, o instanceof Error ? o : new Error(String(o)));
      return ae(r);
    }
  }
  static addVersionMetadata(t, o = this.CURRENT_VERSION) {
    return { ...t, [this.VERSION_KEY]: { version: o, timestamp: Date.now(), description: `Version ${o} data format` } };
  }
  static extractVersionMetadata(t) {
    try {
      if (typeof t == "object" && t !== null && this.VERSION_KEY in t) {
        const o = t[this.VERSION_KEY];
        if (this.isValidVersionInfo(o)) return Ee(o);
      }
      return Ee(null);
    } catch (o) {
      const r = o instanceof ut ? o : new ut(`Failed to extract version metadata: ${String(o)}`, ue.INVALID_VERSION, void 0, void 0, o instanceof Error ? o : new Error(String(o)));
      return ae(r);
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
      if (t === o) return Ee([]);
      const i = [], a = t < o ? 1 : -1;
      for (let l = t; l !== o; l += a) i.push(l + a);
      return Ee(i);
    } catch (r) {
      const n = r instanceof ut ? r : new ut(`Failed to determine migration path: ${String(r)}`, ue.INVALID_VERSION, t, o, r instanceof Error ? r : new Error(String(r)));
      return ae(n);
    }
  }
  static isMigrationNeeded(t) {
    return this.extractVersion(t).map((o) => o !== this.CURRENT_VERSION);
  }
}
__publicField(wo, "CURRENT_VERSION", 1);
__publicField(wo, "VERSION_KEY", "_data_version");
__publicField(wo, "MIN_SUPPORTED_VERSION", 0);
class St {
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
      return Ee(o);
    } catch (o) {
      if (o instanceof de) return ae(o);
      const r = new de(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return ae(r);
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
      return Ee(o);
    } catch (o) {
      if (o instanceof de) return ae(o);
      const r = new de(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return ae(r);
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
      return Ee(o);
    } catch (o) {
      if (o instanceof de) return ae(o);
      const r = new de(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return ae(r);
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
      return Ee(t);
    } catch (o) {
      if (o instanceof de) return ae(o);
      const r = new de(`Unexpected validation error: ${String(o)}`, void 0, t, o instanceof Error ? o : new Error(String(o)));
      return ae(r);
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
        return ae(new de(`Unknown expected format: ${String(o)}`, "expectedFormat", o));
    }
  }
  static checkDataIntegrity(t, o) {
    try {
      const r = this.validateData(t, o);
      return r.isErr() ? ae(new Ba(`Data validation failed: ${r.error.message}`, t, r.error)) : Ee({ isValid: true, errors: [], warnings: [] });
    } catch (r) {
      return ae(new Ba(`Data integrity check failed: ${String(r)}`, t, r instanceof Error ? r : new Error(String(r))));
    }
  }
}
class px {
  constructor() {
    __publicField(this, "fromVersion", 0);
    __publicField(this, "toVersion", 1);
    __publicField(this, "name", "route-collection-to-sketch");
  }
  migrate(t) {
    try {
      const o = St.validateRouteCollectionData(t);
      if (o.isErr()) return ae(new pe(`Invalid route collection data: ${o.error.message}`, ue.VALIDATION_FAILED, o.error));
      const r = o.value, n = new Yt();
      n.meta.name = r.meta.name || "Migrated Routes", n.meta.description = r.meta.description || "Migrated from route collection", n.meta.creation_timestamp = r.meta.creation_timestamp, n.meta.modification_timestamp = Date.now(), n.routes = r;
      const i = [n.toStorage()];
      return Ee(i);
    } catch (o) {
      return ae(new pe(`Route collection to sketch migration failed: ${String(o)}`, ue.MIGRATION_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  rollback(t) {
    try {
      const o = St.validateSketchArray(t);
      if (o.isErr()) return ae(new pe(`Invalid sketch array data for rollback: ${o.error.message}`, ue.VALIDATION_FAILED, o.error));
      const r = o.value;
      if (r.length === 0) return ae(new pe("Cannot rollback: empty sketch array", ue.MIGRATION_FAILED));
      const n = r[0];
      return Ee(n.routes);
    } catch (o) {
      return ae(new pe(`Route collection to sketch rollback failed: ${String(o)}`, ue.ROLLBACK_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  validateBefore(t) {
    return St.validateRouteCollectionData(t).map(() => {
    }).mapErr((o) => new de(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return St.validateSketchArray(t).map(() => {
    }).mapErr((o) => new de(`Post-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
}
class gx {
  constructor() {
    __publicField(this, "fromVersion", 1);
    __publicField(this, "toVersion", 2);
    __publicField(this, "name", "sketch-v1-to-v2");
  }
  migrate() {
    return ae(new pe("Sketch V1 to V2 migration not yet implemented", ue.STRATEGY_NOT_FOUND));
  }
  validateBefore(t) {
    return St.validateSketchArray(t).map(() => {
    }).mapErr((o) => new de(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return ae(new de("Sketch V2 validation not yet implemented", void 0, t));
  }
}
const _mx = class _mx {
  static register(t) {
    const o = this.getStrategyKey(t.fromVersion, t.toVersion);
    this.strategies.set(o, t);
  }
  static getStrategy(t, o) {
    const r = this.getStrategyKey(t, o), n = this.strategies.get(r);
    return n ? Ee(n) : ae(new pe(`No migration strategy found for version ${t} to ${o}`, ue.STRATEGY_NOT_FOUND));
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
__publicField(_mx, "strategies", /* @__PURE__ */ new Map());
_mx.register(new px()), _mx.register(new gx());
let mx = _mx;
class vx {
  static createStrategy(t, o) {
    return mx.getStrategy(t, o);
  }
  static createStrategiesForPath(t) {
    try {
      const o = [];
      for (let r = 0; r < t.length; r++) {
        const n = r === 0 ? t[0] - 1 : t[r - 1], i = t[r], a = this.createStrategy(n, i);
        if (a.isErr()) return ae(a.error);
        o.push(a.value);
      }
      return Ee(o);
    } catch (o) {
      return ae(new pe(`Failed to create strategies for migration path: ${String(o)}`, ue.MIGRATION_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
}
class bx {
  static isMigrationNeeded(t) {
    return wo.isMigrationNeeded(t);
  }
  static getDataVersion(t) {
    return wo.extractVersion(t);
  }
  static migrateToCurrent(t, o = {}) {
    return this.migrateToVersion(t, wo.getCurrentVersion(), o);
  }
  static migrateToVersion(t, o, r = {}) {
    try {
      const n = { ...this.DEFAULT_OPTIONS, ...r }, i = wo.extractVersion(t);
      if (i.isErr()) return ae(new pe(`Failed to extract current version: ${i.error.message}`, ue.INVALID_VERSION, i.error));
      const a = i.value;
      if (a === o) return Ee({ data: t, fromVersion: a, toVersion: o, migratedVersions: [] });
      const l = wo.determineMigrationPath(a, o);
      if (l.isErr()) return ae(new pe(`Failed to determine migration path: ${l.error.message}`, ue.INVALID_VERSION, l.error));
      const s = l.value, c = vx.createStrategiesForPath(s);
      if (c.isErr()) return ae(c.error);
      const d = c.value;
      if (n.validateBefore) {
        const p = this.validateDataBeforeMigration(t, a);
        if (p.isErr()) return ae(new pe(`Pre-migration validation failed: ${p.error.message}`, ue.VALIDATION_FAILED, p.error));
      }
      const u = n.enableRollback ? t : void 0;
      let f = t;
      const h = [];
      for (const p of d) {
        const m = this.executeMigrationWithRetry(p, f, n);
        if (m.isErr()) {
          if (n.enableRollback && u) {
            const v = this.rollbackToVersion(u);
            if (v.isErr()) return ae(new hx(`Migration failed and rollback also failed: ${v.error.message}`, m.error, v.error));
          }
          return ae(m.error);
        }
        f = m.value, h.push(p.toVersion);
      }
      if (n.validateAfter) {
        const p = this.validateDataAfterMigration(f, o);
        if (p.isErr()) return ae(new pe(`Post-migration validation failed: ${p.error.message}`, ue.VALIDATION_FAILED, p.error));
      }
      return Ee({ data: f, fromVersion: a, toVersion: o, migratedVersions: h, rollbackData: n.enableRollback ? u : void 0 });
    } catch (n) {
      return ae(new pe(`Migration service error: ${String(n)}`, ue.MIGRATION_FAILED, n instanceof Error ? n : new Error(String(n))));
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
            n = new pe(`Post-migration validation failed: ${l.error.message}`, ue.VALIDATION_FAILED, l.error);
            continue;
          }
        }
        return Ee(a.value);
      } catch (a) {
        n = new pe(`Migration attempt ${i + 1} failed: ${String(a)}`, ue.MIGRATION_FAILED, a instanceof Error ? a : new Error(String(a)));
      }
      i < (r.maxRetries || 0) && r.retryDelay && console.warn(`Migration failed, retrying in ${r.retryDelay}ms...`);
    }
    return ae(n || new pe("Migration failed after all retry attempts", ue.MIGRATION_FAILED));
  }
  static rollbackToVersion(t) {
    try {
      return Ee(t);
    } catch (o) {
      return ae(new pe(`Rollback failed: ${String(o)}`, ue.ROLLBACK_FAILED, o instanceof Error ? o : new Error(String(o))));
    }
  }
  static validateDataBeforeMigration(t, o) {
    switch (o) {
      case 0:
        return St.validateRouteCollectionData(t).map(() => {
        }).mapErr((r) => new pe(`Route collection validation failed: ${r.message}`, ue.VALIDATION_FAILED, r));
      case 1:
        return St.validateSketchArray(t).map(() => {
        }).mapErr((r) => new pe(`Sketch array validation failed: ${r.message}`, ue.VALIDATION_FAILED, r));
      default:
        return ae(new pe(`Unknown version for pre-migration validation: ${o}`, ue.VALIDATION_FAILED));
    }
  }
  static validateDataAfterMigration(t, o) {
    return o === 1 ? St.validateSketchArray(t).map(() => {
    }).mapErr((r) => new pe(`Sketch array validation failed: ${r.message}`, ue.VALIDATION_FAILED, r)) : ae(new pe(`Unknown version for post-migration validation: ${o}`, ue.VALIDATION_FAILED));
  }
  static checkDataIntegrity(t, o) {
    return St.checkDataIntegrity(t, o);
  }
}
__publicField(bx, "DEFAULT_OPTIONS", { validateBefore: true, validateAfter: true, enableRollback: true, maxRetries: 3, retryDelay: 1e3 });
const xC = ja("sketches", () => {
  const e = _([]), t = _(null), o = _(null), r = B(() => {
    if (!t.value) return null;
    const $ = e.value.find((T) => T.id === t.value);
    return $ ? new fx($.routes.routes.map((T) => new Ma(T.id, T.points, T.properties, T.meta)), $.routes.id, $.routes.meta) : null;
  }), n = B(() => r.value ? r.value.routes.map(($) => ({ id: $.id, name: $.name, points: $.getPoints(), meta: $.meta })) : []), i = B(() => t.value && e.value.find(($) => $.id === t.value) || null), a = B(() => i.value ? i.value.drafts.drafts : []);
  async function l() {
    const $ = await _s("sketches");
    if ($) {
      const T = bx.migrateToCurrent($, { validateBefore: true, validateAfter: true, enableRollback: true });
      if (T.isErr()) {
        console.error("[SketchStore] Data migration failed:", T.error), await s();
        return;
      }
      const C = T.value;
      if (C.migratedVersions.length > 0 && console.info(`[SketchStore] Successfully migrated data from version ${C.fromVersion} to ${C.toVersion}`), Array.isArray(C.data)) {
        e.value = C.data.map((H) => Yt.fromStorage(H));
        const O = [];
        e.value.forEach((H) => {
          H.routes.routes.forEach((A) => {
            A.points.length > 1 && !A.meta.distance && O.push((async () => {
              try {
                A.meta.distance = await Or(A.points);
              } catch (W) {
                console.warn("Failed to calculate route distance:", W), A.meta.distance = 0;
              }
            })());
          });
        }), await Promise.all(O), !t.value && e.value.length > 0 && (t.value = e.value[0].id);
      } else await s();
    } else await s();
  }
  async function s() {
    const $ = new Yt();
    $.meta.name = "Default Sketch", e.value = [$], t.value = $.id, await Ye("sketches", e.value.map((T) => T.toStorage())), await Xe();
  }
  async function c($ = "New Sketch") {
    const T = new Yt();
    return T.meta.name = $, e.value.push(T), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe(), T;
  }
  async function d($, T) {
    const C = e.value.find((O) => O.id === $);
    C && (T.name !== void 0 && C.updateName(T.name), T.description !== void 0 && C.updateDescription(T.description), T.tags !== void 0 && (C.meta.tags.forEach((O) => {
      C.removeTag(O);
    }), T.tags.forEach((O) => {
      C.addTag(O);
    })), await Ye("sketches", e.value.map((O) => O.toStorage())), await Xe());
  }
  async function u($) {
    const T = e.value.findIndex((C) => C.id === $);
    T !== -1 && (e.value.splice(T, 1), t.value === $ && (t.value = e.value.length > 0 ? e.value[0].id : null), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe());
  }
  function f($) {
    t.value = $, o.value = null;
  }
  async function h($, T = {}, C = {}) {
    i.value || await s();
    const O = new Ma(void 0, [], T, C);
    return O.meta.name = $, i.value && i.value.routes.routes.push(O.exportToStorage()), await Ye("sketches", e.value.map((H) => H.toStorage())), await Xe(), O;
  }
  async function p($) {
    if (!i.value) return;
    const T = i.value.routes.routes.findIndex((C) => C.id === $);
    T !== -1 && (i.value.routes.routes.splice(T, 1), o.value === $ && (o.value = null), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe());
  }
  async function m($, T) {
    if (!i.value) return;
    const C = i.value.routes.routes.find((O) => O.id === $);
    if (C) {
      if (C.points.push(T), C.meta.modification_timestamp = Date.now(), C.points.length > 1) try {
        if (C.meta.distance === void 0) {
          const O = await Or(C.points);
          C.meta.distance = O;
        } else {
          const O = await Or([C.points[C.points.length - 2], T]);
          C.meta.distance += O;
        }
      } catch (O) {
        console.warn("Failed to calculate route distance:", O), C.meta.distance === void 0 && (C.meta.distance = 0);
      }
      await Ye("sketches", e.value.map((O) => O.toStorage())), await Xe();
    }
  }
  async function v($, T) {
    if (!i.value) return;
    const C = i.value.routes.routes.find((O) => O.id === $);
    C && (T.meta !== void 0 && (C.meta = { ...C.meta, ...T.meta }), T.properties !== void 0 && (C.properties = { ...C.properties, ...T.properties }), C.meta.modification_timestamp = Date.now(), await Ye("sketches", e.value.map((O) => O.toStorage())), await Xe());
  }
  async function g($) {
    if (!i.value) return;
    const T = i.value.routes.routes.find((C) => C.id === $);
    T && (T.points = [], T.meta.modification_timestamp = Date.now(), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe());
  }
  function x($) {
    return i.value && i.value.routes.routes.find((T) => T.id === $) || null;
  }
  function P($) {
    o.value = $;
  }
  async function S($, T = {}, C = {}) {
    i.value || await s();
    const O = { id: crypto.randomUUID(), meta: { ...at(), ...C }, shape: $, properties: T };
    return i.value && i.value.drafts.drafts.push(O), await Ye("sketches", e.value.map((H) => H.toStorage())), await Xe(), O;
  }
  async function R($, T) {
    if (!i.value) return;
    const C = i.value.drafts.drafts.find((O) => O.id === $);
    C && (T.shape !== void 0 && (C.shape = T.shape), T.properties !== void 0 && (C.properties = { ...C.properties, ...T.properties }), T.meta !== void 0 && (C.meta = { ...C.meta, ...T.meta }, C.meta.modification_timestamp = Date.now()), await Ye("sketches", e.value.map((O) => O.toStorage())), await Xe());
  }
  async function z($) {
    if (!i.value) return;
    const T = i.value.drafts.drafts.findIndex((C) => C.id === $);
    T !== -1 && (i.value.drafts.drafts.splice(T, 1), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe());
  }
  function b($) {
    return i.value && i.value.drafts.drafts.find((T) => T.id === $) || null;
  }
  function w() {
    return i.value ? i.value.routes.routes.map(($) => $.id) : [];
  }
  function E() {
    return i.value ? i.value.drafts.drafts.map(($) => $.id) : [];
  }
  return { sketches: e, currentSketchId: t, currentRouteId: o, routeCollection: r, routes: n, currentSketch: i, currentDrafts: a, init: l, createSketch: c, updateSketch: d, deleteSketch: u, setCurrentSketchId: f, addRoute: h, deleteRoute: p, addPointToRoute: m, updateRoute: v, clearRoutePoints: g, getRouteById: x, setCurrentRouteId: P, listRouteIDs: w, addDraft: S, updateDraft: R, deleteDraft: z, getDraftById: b, listDraftIDs: E };
});
export {
  vh as $,
  Am as A,
  Dt as B,
  Bm as C,
  Fm as D,
  Dm as E,
  Wm as F,
  jm as G,
  Um as H,
  Km as I,
  Ym as J,
  Qm as K,
  nv as L,
  vv as M,
  xv as N,
  Sv as O,
  Ev as P,
  Av as Q,
  Gx as R,
  zv as S,
  Lo as T,
  cC as U,
  ei as V,
  Tv as W,
  Zx as X,
  Eh as Y,
  Rh as Z,
  $v as _,
  N as a,
  tv as a$,
  lC as a0,
  sC as a1,
  _v as a2,
  F as a3,
  Z as a4,
  oC as a5,
  j as a6,
  U as a7,
  bn as a8,
  ss as a9,
  bb as aA,
  Pb as aB,
  Rb as aC,
  Ab as aD,
  Mb as aE,
  Lb as aF,
  Hb as aG,
  Wb as aH,
  jb as aI,
  Kb as aJ,
  Yb as aK,
  Jb as aL,
  o0 as aM,
  n0 as aN,
  a0 as aO,
  c0 as aP,
  f0 as aQ,
  m0 as aR,
  v0 as aS,
  Tt as aT,
  $o as aU,
  L as aV,
  $0 as aW,
  E0 as aX,
  z0 as aY,
  M0 as aZ,
  $t as a_,
  ft as aa,
  cs as ab,
  vt as ac,
  uC as ad,
  Vo as ae,
  Ce as af,
  Q as ag,
  Rt as ah,
  Up as ai,
  ls as aj,
  Nv as ak,
  Dp as al,
  _p as am,
  Hp as an,
  wa as ao,
  Vp as ap,
  dC as aq,
  Fv as ar,
  Vv as as,
  Gv as at,
  Kv as au,
  Yv as av,
  Qv as aw,
  ob as ax,
  lb as ay,
  hb as az,
  Xp as b,
  he as b$,
  ot as b0,
  Un as b1,
  aC as b2,
  ma as b3,
  fC as b4,
  Sg as b5,
  Fl as b6,
  Ll as b7,
  qx as b8,
  Eb as b9,
  Ni as bA,
  Ax as bB,
  lh as bC,
  ga as bD,
  jo as bE,
  Go as bF,
  Ca as bG,
  Ux as bH,
  ms as bI,
  Ge as bJ,
  fs as bK,
  Uo as bL,
  tC as bM,
  jt as bN,
  _i as bO,
  Oh as bP,
  Cs as bQ,
  va as bR,
  ya as bS,
  qn as bT,
  jg as bU,
  Ph as bV,
  Yg as bW,
  Qx as bX,
  Qe as bY,
  Zg as bZ,
  Ap as b_,
  Ke as ba,
  V0 as bb,
  xC as bc,
  iC as bd,
  pC as be,
  Px as bf,
  mC as bg,
  bC as bh,
  vC as bi,
  Cn as bj,
  lv as bk,
  xs as bl,
  Of as bm,
  Tx as bn,
  Rf as bo,
  Rx as bp,
  Ix as bq,
  Ex as br,
  gC as bs,
  nC as bt,
  zn as bu,
  Ya as bv,
  Wn as bw,
  bo as bx,
  Eo as by,
  jl as bz,
  to as c,
  Ep as c$,
  fe as c0,
  Wo as c1,
  hm as c2,
  Rl as c3,
  nh as c4,
  xo as c5,
  Ss as c6,
  km as c7,
  wh as c8,
  Fp as c9,
  ko as cA,
  ws as cB,
  Rp as cC,
  $r as cD,
  $s as cE,
  Yx as cF,
  Ps as cG,
  lr as cH,
  Es as cI,
  hr as cJ,
  od as cK,
  ov as cL,
  Do as cM,
  jx as cN,
  Jm as cO,
  Uv as cP,
  rs as cQ,
  Kx as cR,
  Fh as cS,
  Sr as cT,
  No as cU,
  wr as cV,
  ds as cW,
  jn as cX,
  Gl as cY,
  qv as cZ,
  kh as c_,
  Jx as ca,
  Tp as cb,
  Nx as cc,
  hh as cd,
  Bx as ce,
  mh as cf,
  sh as cg,
  Wx as ch,
  fh as ci,
  Hx as cj,
  Mx as ck,
  ch as cl,
  kx as cm,
  Fx as cn,
  Vx as co,
  _x as cp,
  Lx as cq,
  Dx as cr,
  Qt as cs,
  Wl as ct,
  Vl as cu,
  Ul as cv,
  go as cw,
  gn as cx,
  Hm as cy,
  yr as cz,
  $g as d,
  Fs as d0,
  Ox as d1,
  eb as d2,
  nb as d3,
  sb as d4,
  Sa as d5,
  I0 as d6,
  fb as d7,
  rC as d8,
  mb as d9,
  Lh as da,
  hC as db,
  xb as dc,
  Ob as dd,
  Mo as de,
  Ls as df,
  Vb as dg,
  _0 as dh,
  Gb as di,
  vn as dj,
  Zb as dk,
  r0 as dl,
  Hs as dm,
  Xx as dn,
  b0 as dp,
  _s as dq,
  Ye as dr,
  Xe as ds,
  Em as dt,
  yx as du,
  $x as dv,
  wx as dw,
  Sx as dx,
  Eg as e,
  Rg as f,
  kg as g,
  Nn as h,
  G as i,
  Lg as j,
  Wg as k,
  qg as l,
  eC as m,
  Qg as n,
  em as o,
  om as p,
  rm as q,
  Lt as r,
  Zo as s,
  im as t,
  um as u,
  gm as v,
  xm as w,
  Sm as x,
  Tm as y,
  zm as z
};
