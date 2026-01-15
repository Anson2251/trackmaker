var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { as as xa, at as qs, ac as Mt, au as Qn, av as Jn, aw as Ca, ax as Ys, H as Do, ay as Ho, az as ya, aA as Sa, aB as Xs, aC as Zs, aD as wa, aE as $a, aF as Pa, aG as Ea, aH as Qs, aI as Ur, aJ as Js, aK as ec, aL as tc, aM as oc, aN as rc, aO as nc, aP as ic, i as ie, l as Ra, N as xn, M as Ta, d as ee, j as O, v as so, p as Re, b as N, B as Te, h as y, Z as St, g as Ia, aQ as ac, P as Xt, c as ur, o as fr, a as Ke, r as Ot, L as mo, k as st, f as _e, e as Jt, y as ar, F as eo, R as Cn, Q as Zt, T as lc, t as ge, a5 as za, aR as sc, w as vo, C as Bt, W as cc, m as Pt, O as qr, S as Aa, aS as dc, Y as ei, n as ti, aT as uc, q as ka, aa as Er, aU as fc, aV as hc, aW as Ma, aX as co, aY as pc, aZ as gc, ar as oi, ab as Ct, a_ as mc, a$ as vc, b0 as Ee, b1 as ae, b2 as Rr } from "./index-CK3FBwFX.js";
var bc = "[object Symbol]";
function yn(e) {
  return typeof e == "symbol" || xa(e) && qs(e) == bc;
}
function Oa(e, t) {
  for (var o = -1, r = e == null ? 0 : e.length, n = Array(r); ++o < r; ) n[o] = t(e[o], o, e);
  return n;
}
var ri = Qn ? Qn.prototype : void 0, ni = ri ? ri.toString : void 0;
function Ba(e) {
  if (typeof e == "string") return e;
  if (Mt(e)) return Oa(e, Ba) + "";
  if (yn(e)) return ni ? ni.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Sn(e) {
  return e;
}
function xc(e, t, o) {
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
function Cc(e, t) {
  var o = -1, r = e.length;
  for (t || (t = Array(r)); ++o < r; ) t[o] = e[o];
  return t;
}
var yc = 800, Sc = 16, wc = Date.now;
function $c(e) {
  var t = 0, o = 0;
  return function() {
    var r = wc(), n = Sc - (r - o);
    if (o = r, n > 0) {
      if (++t >= yc) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function Pc(e) {
  return function() {
    return e;
  };
}
var Ec = Jn ? function(e, t) {
  return Jn(e, "toString", { configurable: true, enumerable: false, value: Pc(t), writable: true });
} : Sn, Rc = $c(Ec);
function Tc(e, t, o, r) {
  var n = !o;
  o || (o = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var l = t[i], s = void 0;
    s === void 0 && (s = e[l]), n ? Ca(o, l, s) : Ys(o, l, s);
  }
  return o;
}
var ii = Math.max;
function Ic(e, t, o) {
  return t = ii(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, n = -1, i = ii(r.length - t, 0), a = Array(i); ++n < i; ) a[n] = r[t + n];
    n = -1;
    for (var l = Array(t + 1); ++n < t; ) l[n] = r[n];
    return l[t] = o(a), xc(e, this, l);
  };
}
function zc(e, t) {
  return Rc(Ic(e, t, Sn), e + "");
}
function Ac(e, t, o) {
  if (!Do(o)) return false;
  var r = typeof t;
  return (r == "number" ? Ho(o) && ya(t, o.length) : r == "string" && t in o) ? Sa(o[t], e) : false;
}
function kc(e) {
  return zc(function(t, o) {
    var r = -1, n = o.length, i = n > 1 ? o[n - 1] : void 0, a = n > 2 ? o[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (n--, i) : void 0, a && Ac(o[0], o[1], a) && (i = n < 3 ? void 0 : i, n = 1), t = Object(t); ++r < n; ) {
      var l = o[r];
      l && e(t, l, r, i);
    }
    return t;
  });
}
function Mc(e) {
  var t = [];
  if (e != null) for (var o in Object(e)) t.push(o);
  return t;
}
var Oc = Object.prototype, Bc = Oc.hasOwnProperty;
function Fc(e) {
  if (!Do(e)) return Mc(e);
  var t = Xs(e), o = [];
  for (var r in e) r == "constructor" && (t || !Bc.call(e, r)) || o.push(r);
  return o;
}
function Fa(e) {
  return Ho(e) ? Zs(e, true) : Fc(e);
}
var Lc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Dc = /^\w*$/;
function wn(e, t) {
  if (Mt(e)) return false;
  var o = typeof e;
  return o == "number" || o == "symbol" || o == "boolean" || e == null || yn(e) ? true : Dc.test(e) || !Lc.test(e) || t != null && e in Object(t);
}
var Hc = "Expected a function";
function $n(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Hc);
  var o = function() {
    var r = arguments, n = t ? t.apply(this, r) : r[0], i = o.cache;
    if (i.has(n)) return i.get(n);
    var a = e.apply(this, r);
    return o.cache = i.set(n, a) || i, a;
  };
  return o.cache = new ($n.Cache || wa)(), o;
}
$n.Cache = wa;
var Nc = 500;
function _c(e) {
  var t = $n(e, function(r) {
    return o.size === Nc && o.clear(), r;
  }), o = t.cache;
  return t;
}
var Wc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vc = /\\(\\)?/g, jc = _c(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Wc, function(o, r, n, i) {
    t.push(n ? i.replace(Vc, "$1") : r || o);
  }), t;
});
function La(e) {
  return e == null ? "" : Ba(e);
}
function Da(e, t) {
  return Mt(e) ? e : wn(e, t) ? [e] : jc(La(e));
}
function hr(e) {
  if (typeof e == "string" || yn(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ha(e, t) {
  t = Da(t, e);
  for (var o = 0, r = t.length; e != null && o < r; ) e = e[hr(t[o++])];
  return o && o == r ? e : void 0;
}
function Gc(e, t, o) {
  var r = e == null ? void 0 : Ha(e, t);
  return r === void 0 ? o : r;
}
function Kc(e, t, o) {
  var r = -1, n = e.length;
  t < 0 && (t = -t > n ? 0 : n + t), o = o > n ? n : o, o < 0 && (o += n), n = t > o ? 0 : o - t >>> 0, t >>>= 0;
  for (var i = Array(n); ++r < n; ) i[r] = e[r + t];
  return i;
}
function Uc(e, t, o) {
  var r = e.length;
  return o = o === void 0 ? r : o, !t && o >= r ? e : Kc(e, t, o);
}
var qc = "\\ud800-\\udfff", Yc = "\\u0300-\\u036f", Xc = "\\ufe20-\\ufe2f", Zc = "\\u20d0-\\u20ff", Qc = Yc + Xc + Zc, Jc = "\\ufe0e\\ufe0f", ed = "\\u200d", td = RegExp("[" + ed + qc + Qc + Jc + "]");
function Na(e) {
  return td.test(e);
}
function od(e) {
  return e.split("");
}
var _a = "\\ud800-\\udfff", rd = "\\u0300-\\u036f", nd = "\\ufe20-\\ufe2f", id = "\\u20d0-\\u20ff", ad = rd + nd + id, ld = "\\ufe0e\\ufe0f", sd = "[" + _a + "]", Yr = "[" + ad + "]", Xr = "\\ud83c[\\udffb-\\udfff]", cd = "(?:" + Yr + "|" + Xr + ")", Wa = "[^" + _a + "]", Va = "(?:\\ud83c[\\udde6-\\uddff]){2}", ja = "[\\ud800-\\udbff][\\udc00-\\udfff]", dd = "\\u200d", Ga = cd + "?", Ka = "[" + ld + "]?", ud = "(?:" + dd + "(?:" + [Wa, Va, ja].join("|") + ")" + Ka + Ga + ")*", fd = Ka + Ga + ud, hd = "(?:" + [Wa + Yr + "?", Yr, Va, ja, sd].join("|") + ")", pd = RegExp(Xr + "(?=" + Xr + ")|" + hd + fd, "g");
function gd(e) {
  return e.match(pd) || [];
}
function md(e) {
  return Na(e) ? gd(e) : od(e);
}
function vd(e) {
  return function(t) {
    t = La(t);
    var o = Na(t) ? md(t) : void 0, r = o ? o[0] : t.charAt(0), n = o ? Uc(o, 1).join("") : t.slice(1);
    return r[e]() + n;
  };
}
var bd = vd("toUpperCase"), xd = 1, Cd = 2;
function yd(e, t, o, r) {
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
      var d = new $a(), u;
      if (!(u === void 0 ? Pa(c, s, xd | Cd, r, d) : u)) return false;
    }
  }
  return true;
}
function Ua(e) {
  return e === e && !Do(e);
}
function Sd(e) {
  for (var t = Ea(e), o = t.length; o--; ) {
    var r = t[o], n = e[r];
    t[o] = [r, n, Ua(n)];
  }
  return t;
}
function qa(e, t) {
  return function(o) {
    return o == null ? false : o[e] === t && (t !== void 0 || e in Object(o));
  };
}
function wd(e) {
  var t = Sd(e);
  return t.length == 1 && t[0][2] ? qa(t[0][0], t[0][1]) : function(o) {
    return o === e || yd(o, e, t);
  };
}
function $d(e, t) {
  return e != null && t in Object(e);
}
function Pd(e, t, o) {
  t = Da(t, e);
  for (var r = -1, n = t.length, i = false; ++r < n; ) {
    var a = hr(t[r]);
    if (!(i = e != null && o(e, a))) break;
    e = e[a];
  }
  return i || ++r != n ? i : (n = e == null ? 0 : e.length, !!n && Qs(n) && ya(a, n) && (Mt(e) || Ur(e)));
}
function Ed(e, t) {
  return e != null && Pd(e, t, $d);
}
var Rd = 1, Td = 2;
function Id(e, t) {
  return wn(e) && Ua(t) ? qa(hr(e), t) : function(o) {
    var r = Gc(o, e);
    return r === void 0 && r === t ? Ed(o, e) : Pa(t, r, Rd | Td);
  };
}
function zd(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Ad(e) {
  return function(t) {
    return Ha(t, e);
  };
}
function kd(e) {
  return wn(e) ? zd(hr(e)) : Ad(e);
}
function Md(e) {
  return typeof e == "function" ? e : e == null ? Sn : typeof e == "object" ? Mt(e) ? Id(e[0], e[1]) : wd(e) : kd(e);
}
function Od(e) {
  return function(t, o, r) {
    for (var n = -1, i = Object(t), a = r(t), l = a.length; l--; ) {
      var s = a[++n];
      if (o(i[s], s, i) === false) break;
    }
    return t;
  };
}
var Ya = Od();
function Bd(e, t) {
  return e && Ya(e, t, Ea);
}
function Fd(e, t) {
  return function(o, r) {
    if (o == null) return o;
    if (!Ho(o)) return e(o, r);
    for (var n = o.length, i = -1, a = Object(o); ++i < n && r(a[i], i, a) !== false; ) ;
    return o;
  };
}
var Ld = Fd(Bd);
function Zr(e, t, o) {
  (o !== void 0 && !Sa(e[t], o) || o === void 0 && !(t in e)) && Ca(e, t, o);
}
function Dd(e) {
  return xa(e) && Ho(e);
}
function Qr(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
}
function Hd(e) {
  return Tc(e, Fa(e));
}
function Nd(e, t, o, r, n, i, a) {
  var l = Qr(e, o), s = Qr(t, o), c = a.get(s);
  if (c) {
    Zr(e, o, c);
    return;
  }
  var d = i ? i(l, s, o + "", e, t, a) : void 0, u = d === void 0;
  if (u) {
    var f = Mt(s), h = !f && Js(s), p = !f && !h && ec(s);
    d = s, f || h || p ? Mt(l) ? d = l : Dd(l) ? d = Cc(l) : h ? (u = false, d = tc(s, true)) : p ? (u = false, d = oc(s, true)) : d = [] : rc(s) || Ur(s) ? (d = l, Ur(l) ? d = Hd(l) : (!Do(l) || nc(l)) && (d = ic(s))) : u = false;
  }
  u && (a.set(s, d), n(d, s, r, i, a), a.delete(s)), Zr(e, o, d);
}
function Xa(e, t, o, r, n) {
  e !== t && Ya(t, function(i, a) {
    if (n || (n = new $a()), Do(i)) Nd(e, t, a, o, Xa, r, n);
    else {
      var l = r ? r(Qr(e, a), i, a + "", e, t, n) : void 0;
      l === void 0 && (l = i), Zr(e, a, l);
    }
  }, Fa);
}
function _d(e, t) {
  var o = -1, r = Ho(e) ? Array(e.length) : [];
  return Ld(e, function(n, i, a) {
    r[++o] = t(n, i, a);
  }), r;
}
function Wd(e, t) {
  var o = Mt(e) ? Oa : _d;
  return o(e, Md(t));
}
var $o = kc(function(e, t, o) {
  Xa(e, t, o);
});
const lo = typeof document < "u";
function Za(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Vd(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Za(e.default);
}
const be = Object.assign;
function Tr(e, t) {
  const o = {};
  for (const r in t) {
    const n = t[r];
    o[r] = lt(n) ? n.map(e) : e(n);
  }
  return o;
}
const Ro = () => {
}, lt = Array.isArray;
function ai(e, t) {
  const o = {};
  for (const r in e) o[r] = r in t ? t[r] : e[r];
  return o;
}
const Qa = /#/g, jd = /&/g, Gd = /\//g, Kd = /=/g, Ud = /\?/g, Ja = /\+/g, qd = /%5B/g, Yd = /%5D/g, el = /%5E/g, Xd = /%60/g, tl = /%7B/g, Zd = /%7C/g, ol = /%7D/g, Qd = /%20/g;
function Pn(e) {
  return e == null ? "" : encodeURI("" + e).replace(Zd, "|").replace(qd, "[").replace(Yd, "]");
}
function Jd(e) {
  return Pn(e).replace(tl, "{").replace(ol, "}").replace(el, "^");
}
function Jr(e) {
  return Pn(e).replace(Ja, "%2B").replace(Qd, "+").replace(Qa, "%23").replace(jd, "%26").replace(Xd, "`").replace(tl, "{").replace(ol, "}").replace(el, "^");
}
function eu(e) {
  return Jr(e).replace(Kd, "%3D");
}
function tu(e) {
  return Pn(e).replace(Qa, "%23").replace(Ud, "%3F");
}
function ou(e) {
  return tu(e).replace(Gd, "%2F");
}
function Ao(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const ru = /\/$/, nu = (e) => e.replace(ru, "");
function Ir(e, t, o = "/") {
  let r, n = {}, i = "", a = "";
  const l = t.indexOf("#");
  let s = t.indexOf("?");
  return s = l >= 0 && s > l ? -1 : s, s >= 0 && (r = t.slice(0, s), i = t.slice(s, l > 0 ? l : t.length), n = e(i.slice(1))), l >= 0 && (r = r || t.slice(0, l), a = t.slice(l, t.length)), r = su(r ?? t, o), { fullPath: r + i + a, path: r, query: n, hash: Ao(a) };
}
function iu(e, t) {
  const o = t.query ? e(t.query) : "";
  return t.path + (o && "?") + o + (t.hash || "");
}
function au(e, t, o) {
  const r = t.matched.length - 1, n = o.matched.length - 1;
  return r > -1 && r === n && ho(t.matched[r], o.matched[n]) && rl(t.params, o.params) && e(t.query) === e(o.query) && t.hash === o.hash;
}
function ho(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function rl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return false;
  for (var o in e) if (!lu(e[o], t[o])) return false;
  return true;
}
function lu(e, t) {
  return lt(e) ? li(e, t) : lt(t) ? li(t, e) : (e == null ? void 0 : e.valueOf()) === (t == null ? void 0 : t.valueOf());
}
function li(e, t) {
  return lt(t) ? e.length === t.length && e.every((o, r) => o === t[r]) : e.length === 1 && e[0] === t;
}
function su(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const o = t.split("/"), r = e.split("/"), n = r[r.length - 1];
  (n === ".." || n === ".") && r.push("");
  let i = o.length - 1, a, l;
  for (a = 0; a < r.length; a++) if (l = r[a], l !== ".") if (l === "..") i > 1 && i--;
  else break;
  return o.slice(0, i).join("/") + "/" + r.slice(a).join("/");
}
const It = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
let en = (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), si = (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
const zr = "";
function cu(e) {
  if (!e) if (lo) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), nu(e);
}
const du = /^[^#]+#/;
function uu(e, t) {
  return e.replace(du, "#") + t;
}
function fu(e, t) {
  const o = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: t.behavior, left: r.left - o.left - (t.left || 0), top: r.top - o.top - (t.top || 0) };
}
const hu = () => ({ left: window.scrollX, top: window.scrollY });
function pu(e) {
  let t;
  if ("el" in e) {
    const o = e.el, r = typeof o == "string" && o.startsWith("#"), n = typeof o == "string" ? r ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!n) return;
    t = fu(n, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function ci(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const tn = /* @__PURE__ */ new Map();
function gu(e, t) {
  tn.set(e, t);
}
function mu(e) {
  const t = tn.get(e);
  return tn.delete(e), t;
}
function vu(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function nl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
let $e = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const il = /* @__PURE__ */ Symbol("");
$e.MATCHER_NOT_FOUND + "", $e.NAVIGATION_GUARD_REDIRECT + "", $e.NAVIGATION_ABORTED + "", $e.NAVIGATION_CANCELLED + "", $e.NAVIGATION_DUPLICATED + "";
function po(e, t) {
  return be(new Error(), { type: e, [il]: true }, t);
}
function vt(e, t) {
  return e instanceof Error && il in e && (t == null || !!(e.type & t));
}
const bu = ["params", "query", "hash"];
function xu(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const o of bu) o in e && (t[o] = e[o]);
  return JSON.stringify(t, null, 2);
}
function Cu(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const n = o[r].replace(Ja, " "), i = n.indexOf("="), a = Ao(i < 0 ? n : n.slice(0, i)), l = i < 0 ? null : Ao(n.slice(i + 1));
    if (a in t) {
      let s = t[a];
      lt(s) || (s = t[a] = [s]), s.push(l);
    } else t[a] = l;
  }
  return t;
}
function di(e) {
  let t = "";
  for (let o in e) {
    const r = e[o];
    if (o = eu(o), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + o);
      continue;
    }
    (lt(r) ? r.map((n) => n && Jr(n)) : [r && Jr(r)]).forEach((n) => {
      n !== void 0 && (t += (t.length ? "&" : "") + o, n != null && (t += "=" + n));
    });
  }
  return t;
}
function yu(e) {
  const t = {};
  for (const o in e) {
    const r = e[o];
    r !== void 0 && (t[o] = lt(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
  }
  return t;
}
const al = /* @__PURE__ */ Symbol(""), ui = /* @__PURE__ */ Symbol(""), pr = /* @__PURE__ */ Symbol(""), En = /* @__PURE__ */ Symbol(""), on = /* @__PURE__ */ Symbol("");
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
function Su(e, t, o) {
  const r = () => {
    e[t].delete(o);
  };
  Ra(r), xn(r), Ta(() => {
    e[t].add(o);
  }), e[t].add(o);
}
function O0(e) {
  const t = ie(al, {}).value;
  t && Su(t, "leaveGuards", e);
}
function kt(e, t, o, r, n, i = (a) => a()) {
  const a = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
  return () => new Promise((l, s) => {
    const c = (f) => {
      f === false ? s(po($e.NAVIGATION_ABORTED, { from: o, to: t })) : f instanceof Error ? s(f) : vu(f) ? s(po($e.NAVIGATION_GUARD_REDIRECT, { from: t, to: f })) : (a && r.enterCallbacks[n] === a && typeof f == "function" && a.push(f), l());
    }, d = i(() => e.call(r && r.instances[n], t, o, c));
    let u = Promise.resolve(d);
    e.length < 3 && (u = u.then(c)), u.catch((f) => s(f));
  });
}
function Ar(e, t, o, r, n = (i) => i()) {
  const i = [];
  for (const a of e) for (const l in a.components) {
    let s = a.components[l];
    if (!(t !== "beforeRouteEnter" && !a.instances[l])) if (Za(s)) {
      const c = (s.__vccOpts || s)[t];
      c && i.push(kt(c, o, r, a, l, n));
    } else {
      let c = s();
      i.push(() => c.then((d) => {
        if (!d) throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);
        const u = Vd(d) ? d.default : d;
        a.mods[l] = d, a.components[l] = u;
        const f = (u.__vccOpts || u)[t];
        return f && kt(f, o, r, a, l, n)();
      }));
    }
  }
  return i;
}
function wu(e, t) {
  const o = [], r = [], n = [], i = Math.max(t.matched.length, e.matched.length);
  for (let a = 0; a < i; a++) {
    const l = t.matched[a];
    l && (e.matched.find((c) => ho(c, l)) ? r.push(l) : o.push(l));
    const s = e.matched[a];
    s && (t.matched.find((c) => ho(c, s)) || n.push(s));
  }
  return [o, r, n];
}
function B0(e = "") {
  let t = [], o = [[zr, {}]], r = 0;
  e = cu(e);
  function n(l, s = {}) {
    r++, r !== o.length && o.splice(r), o.push([l, s]);
  }
  function i(l, s, { direction: c, delta: d }) {
    const u = { direction: c, delta: d, type: en.pop };
    for (const f of t) f(l, s, u);
  }
  const a = { location: zr, state: {}, base: e, createHref: uu.bind(null, e), replace(l, s) {
    o.splice(r--, 1), n(l, s);
  }, push(l, s) {
    n(l, s);
  }, listen(l) {
    return t.push(l), () => {
      const s = t.indexOf(l);
      s > -1 && t.splice(s, 1);
    };
  }, destroy() {
    t = [], o = [[zr, {}]], r = 0;
  }, go(l, s = true) {
    const c = this.location, d = l < 0 ? si.back : si.forward;
    r = Math.max(0, Math.min(r + l, o.length - 1)), s && i(this.location, c, { direction: d, delta: l });
  } };
  return Object.defineProperty(a, "location", { enumerable: true, get: () => o[r][0] }), Object.defineProperty(a, "state", { enumerable: true, get: () => o[r][1] }), a;
}
let Vt = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var ke = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(ke || {});
const $u = { type: Vt.Static, value: "" }, Pu = /[a-zA-Z0-9_]/;
function Eu(e) {
  if (!e) return [[]];
  if (e === "/") return [[$u]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${o})/"${c}": ${h}`);
  }
  let o = ke.Static, r = o;
  const n = [];
  let i;
  function a() {
    i && n.push(i), i = [];
  }
  let l = 0, s, c = "", d = "";
  function u() {
    c && (o === ke.Static ? i.push({ type: Vt.Static, value: c }) : o === ke.Param || o === ke.ParamRegExp || o === ke.ParamRegExpEnd ? (i.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: Vt.Param, value: c, regexp: d, repeatable: s === "*" || s === "+", optional: s === "*" || s === "?" })) : t("Invalid state to consume buffer"), c = "");
  }
  function f() {
    c += s;
  }
  for (; l < e.length; ) {
    if (s = e[l++], s === "\\" && o !== ke.ParamRegExp) {
      r = o, o = ke.EscapeNext;
      continue;
    }
    switch (o) {
      case ke.Static:
        s === "/" ? (c && u(), a()) : s === ":" ? (u(), o = ke.Param) : f();
        break;
      case ke.EscapeNext:
        f(), o = r;
        break;
      case ke.Param:
        s === "(" ? o = ke.ParamRegExp : Pu.test(s) ? f() : (u(), o = ke.Static, s !== "*" && s !== "?" && s !== "+" && l--);
        break;
      case ke.ParamRegExp:
        s === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + s : o = ke.ParamRegExpEnd : d += s;
        break;
      case ke.ParamRegExpEnd:
        u(), o = ke.Static, s !== "*" && s !== "?" && s !== "+" && l--, d = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return o === ke.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`), u(), a(), n;
}
const fi = "[^/]+?", Ru = { sensitive: false, strict: false, start: true, end: true };
var Ne = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(Ne || {});
const Tu = /[.+*?^${}()[\]/\\]/g;
function Iu(e, t) {
  const o = be({}, Ru, t), r = [];
  let n = o.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const d = c.length ? [] : [Ne.Root];
    o.strict && !c.length && (n += "/");
    for (let u = 0; u < c.length; u++) {
      const f = c[u];
      let h = Ne.Segment + (o.sensitive ? Ne.BonusCaseSensitive : 0);
      if (f.type === Vt.Static) u || (n += "/"), n += f.value.replace(Tu, "\\$&"), h += Ne.Static;
      else if (f.type === Vt.Param) {
        const { value: p, repeatable: v, optional: m, regexp: g } = f;
        i.push({ name: p, repeatable: v, optional: m });
        const x = g || fi;
        if (x !== fi) {
          h += Ne.BonusCustomRegExp;
          try {
            `${x}`;
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${x}): ` + S.message);
          }
        }
        let R = v ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        u || (R = m && c.length < 2 ? `(?:/${R})` : "/" + R), m && (R += "?"), n += R, h += Ne.Dynamic, m && (h += Ne.BonusOptional), v && (h += Ne.BonusRepeatable), x === ".*" && (h += Ne.BonusWildcard);
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
        const { value: p, repeatable: v, optional: m } = h, g = p in c ? c[p] : "";
        if (lt(g) && !v) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const x = lt(g) ? g.join("/") : g;
        if (!x) if (m) f.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : u = true);
        else throw new Error(`Missing required param "${p}"`);
        d += x;
      }
    }
    return d || "/";
  }
  return { re: a, score: r, keys: i, parse: l, stringify: s };
}
function zu(e, t) {
  let o = 0;
  for (; o < e.length && o < t.length; ) {
    const r = t[o] - e[o];
    if (r) return r;
    o++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === Ne.Static + Ne.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Ne.Static + Ne.Segment ? 1 : -1 : 0;
}
function ll(e, t) {
  let o = 0;
  const r = e.score, n = t.score;
  for (; o < r.length && o < n.length; ) {
    const i = zu(r[o], n[o]);
    if (i) return i;
    o++;
  }
  if (Math.abs(n.length - r.length) === 1) {
    if (hi(r)) return 1;
    if (hi(n)) return -1;
  }
  return n.length - r.length;
}
function hi(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Au = { strict: false, end: true, sensitive: false };
function ku(e, t, o) {
  const r = Iu(Eu(e.path), o), n = be(r, { record: e, parent: t, children: [], alias: [] });
  return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
}
function Mu(e, t) {
  const o = [], r = /* @__PURE__ */ new Map();
  t = ai(Au, t);
  function n(u) {
    return r.get(u);
  }
  function i(u, f, h) {
    const p = !h, v = gi(u);
    v.aliasOf = h && h.record;
    const m = ai(t, u), g = [v];
    if ("alias" in u) {
      const S = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const I of S) g.push(gi(be({}, v, { components: h ? h.record.components : v.components, path: I, aliasOf: h ? h.record : v })));
    }
    let x, R;
    for (const S of g) {
      const { path: I } = S;
      if (f && I[0] !== "/") {
        const z = f.record.path, b = z[z.length - 1] === "/" ? "" : "/";
        S.path = f.record.path + (I && b + I);
      }
      if (x = ku(S, f, m), h ? h.alias.push(x) : (R = R || x, R !== x && R.alias.push(x), p && u.name && !mi(x) && a(u.name)), sl(x) && s(x), v.children) {
        const z = v.children;
        for (let b = 0; b < z.length; b++) i(z[b], x, h && h.children[b]);
      }
      h = h || x;
    }
    return R ? () => {
      a(R);
    } : Ro;
  }
  function a(u) {
    if (nl(u)) {
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
    const f = Fu(u, o);
    o.splice(f, 0, u), u.record.name && !mi(u) && r.set(u.record.name, u);
  }
  function c(u, f) {
    let h, p = {}, v, m;
    if ("name" in u && u.name) {
      if (h = r.get(u.name), !h) throw po($e.MATCHER_NOT_FOUND, { location: u });
      m = h.record.name, p = be(pi(f.params, h.keys.filter((R) => !R.optional).concat(h.parent ? h.parent.keys.filter((R) => R.optional) : []).map((R) => R.name)), u.params && pi(u.params, h.keys.map((R) => R.name))), v = h.stringify(p);
    } else if (u.path != null) v = u.path, h = o.find((R) => R.re.test(v)), h && (p = h.parse(v), m = h.record.name);
    else {
      if (h = f.name ? r.get(f.name) : o.find((R) => R.re.test(f.path)), !h) throw po($e.MATCHER_NOT_FOUND, { location: u, currentLocation: f });
      m = h.record.name, p = be({}, f.params, u.params), v = h.stringify(p);
    }
    const g = [];
    let x = h;
    for (; x; ) g.unshift(x.record), x = x.parent;
    return { name: m, path: v, params: p, matched: g, meta: Bu(g) };
  }
  e.forEach((u) => i(u));
  function d() {
    o.length = 0, r.clear();
  }
  return { addRoute: i, resolve: c, removeRoute: a, clearRoutes: d, getRoutes: l, getRecordMatcher: n };
}
function pi(e, t) {
  const o = {};
  for (const r of t) r in e && (o[r] = e[r]);
  return o;
}
function gi(e) {
  const t = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Ou(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Ou(e) {
  const t = {}, o = e.props || false;
  if ("component" in e) t.default = o;
  else for (const r in e.components) t[r] = typeof o == "object" ? o[r] : o;
  return t;
}
function mi(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Bu(e) {
  return e.reduce((t, o) => be(t, o.meta), {});
}
function Fu(e, t) {
  let o = 0, r = t.length;
  for (; o !== r; ) {
    const i = o + r >> 1;
    ll(e, t[i]) < 0 ? r = i : o = i + 1;
  }
  const n = Lu(e);
  return n && (r = t.lastIndexOf(n, r - 1)), r;
}
function Lu(e) {
  let t = e;
  for (; t = t.parent; ) if (sl(t) && ll(e, t) === 0) return t;
}
function sl({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function vi(e) {
  const t = ie(pr), o = ie(En), r = O(() => {
    const s = so(e.to);
    return t.resolve(s);
  }), n = O(() => {
    const { matched: s } = r.value, { length: c } = s, d = s[c - 1], u = o.matched;
    if (!d || !u.length) return -1;
    const f = u.findIndex(ho.bind(null, d));
    if (f > -1) return f;
    const h = bi(s[c - 2]);
    return c > 1 && bi(d) === h && u[u.length - 1].path !== h ? u.findIndex(ho.bind(null, s[c - 2])) : f;
  }), i = O(() => n.value > -1 && Wu(o.params, r.value.params)), a = O(() => n.value > -1 && n.value === o.matched.length - 1 && rl(o.params, r.value.params));
  function l(s = {}) {
    if (_u(s)) {
      const c = t[so(e.replace) ? "replace" : "push"](so(e.to)).catch(Ro);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: r, href: O(() => r.value.href), isActive: i, isExactActive: a, navigate: l };
}
function Du(e) {
  return e.length === 1 ? e[0] : e;
}
const Hu = ee({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: vi, setup(e, { slots: t }) {
  const o = Ia(vi(e)), { options: r } = ie(pr), n = O(() => ({ [xi(e.activeClass, r.linkActiveClass, "router-link-active")]: o.isActive, [xi(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive }));
  return () => {
    const i = t.default && Du(t.default(o));
    return e.custom ? i : y("a", { "aria-current": o.isExactActive ? e.ariaCurrentValue : null, href: o.href, onClick: o.navigate, class: n.value }, i);
  };
} }), Nu = Hu;
function _u(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function Wu(e, t) {
  for (const o in t) {
    const r = t[o], n = e[o];
    if (typeof r == "string") {
      if (r !== n) return false;
    } else if (!lt(n) || n.length !== r.length || r.some((i, a) => i.valueOf() !== n[a].valueOf())) return false;
  }
  return true;
}
function bi(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const xi = (e, t, o) => e ?? t ?? o, Vu = ee({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: o }) {
  const r = ie(on), n = O(() => e.route || r.value), i = ie(ui, 0), a = O(() => {
    let c = so(i);
    const { matched: d } = n.value;
    let u;
    for (; (u = d[c]) && !u.components; ) c++;
    return c;
  }), l = O(() => n.value.matched[a.value]);
  Re(ui, O(() => a.value + 1)), Re(al, l), Re(on, n);
  const s = N();
  return Te(() => [s.value, l.value, e.name], ([c, d, u], [f, h, p]) => {
    d && (d.instances[u] = c, h && h !== d && c && c === f && (d.leaveGuards.size || (d.leaveGuards = h.leaveGuards), d.updateGuards.size || (d.updateGuards = h.updateGuards))), c && d && (!h || !ho(d, h) || !f) && (d.enterCallbacks[u] || []).forEach((v) => v(c));
  }, { flush: "post" }), () => {
    const c = n.value, d = e.name, u = l.value, f = u && u.components[d];
    if (!f) return Ci(o.default, { Component: f, route: c });
    const h = u.props[d], p = h ? h === true ? c.params : typeof h == "function" ? h(c) : h : null, m = y(f, be({}, p, t, { onVnodeUnmounted: (g) => {
      g.component.isUnmounted && (u.instances[d] = null);
    }, ref: s }));
    return Ci(o.default, { Component: m, route: c }) || m;
  };
} });
function Ci(e, t) {
  if (!e) return null;
  const o = e(t);
  return o.length === 1 ? o[0] : o;
}
const ju = Vu;
function F0(e) {
  const t = Mu(e.routes, e), o = e.parseQuery || Cu, r = e.stringifyQuery || di, n = e.history, i = Co(), a = Co(), l = Co(), s = St(It);
  let c = It;
  lo && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = Tr.bind(null, (T) => "" + T), u = Tr.bind(null, ou), f = Tr.bind(null, Ao);
  function h(T, V) {
    let M, Y;
    return nl(T) ? (M = t.getRecordMatcher(T), Y = V) : Y = T, t.addRoute(Y, M);
  }
  function p(T) {
    const V = t.getRecordMatcher(T);
    V && t.removeRoute(V);
  }
  function v() {
    return t.getRoutes().map((T) => T.record);
  }
  function m(T) {
    return !!t.getRecordMatcher(T);
  }
  function g(T, V) {
    if (V = be({}, V || s.value), typeof T == "string") {
      const oe = Ir(o, T, V.path), ye = t.resolve({ path: oe.path }, V), nt = n.createHref(oe.fullPath);
      return be(oe, ye, { params: f(ye.params), hash: Ao(oe.hash), redirectedFrom: void 0, href: nt });
    }
    let M;
    if (T.path != null) M = be({}, T, { path: Ir(o, T.path, V.path).path });
    else {
      const oe = be({}, T.params);
      for (const ye in oe) oe[ye] == null && delete oe[ye];
      M = be({}, T, { params: u(oe) }), V.params = u(V.params);
    }
    const Y = t.resolve(M, V), re = T.hash || "";
    Y.params = d(f(Y.params));
    const xe = iu(r, be({}, T, { hash: Jd(re), path: Y.path })), te = n.createHref(xe);
    return be({ fullPath: xe, hash: re, query: r === di ? yu(T.query) : T.query || {} }, Y, { redirectedFrom: void 0, href: te });
  }
  function x(T) {
    return typeof T == "string" ? Ir(o, T, s.value.path) : be({}, T);
  }
  function R(T, V) {
    if (c !== T) return po($e.NAVIGATION_CANCELLED, { from: V, to: T });
  }
  function S(T) {
    return b(T);
  }
  function I(T) {
    return S(be(x(T), { replace: true }));
  }
  function z(T, V) {
    const M = T.matched[T.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: Y } = M;
      let re = typeof Y == "function" ? Y(T, V) : Y;
      return typeof re == "string" && (re = re.includes("?") || re.includes("#") ? re = x(re) : { path: re }, re.params = {}), be({ query: T.query, hash: T.hash, params: re.path != null ? {} : T.params }, re);
    }
  }
  function b(T, V) {
    const M = c = g(T), Y = s.value, re = T.state, xe = T.force, te = T.replace === true, oe = z(M, Y);
    if (oe) return b(be(x(oe), { state: typeof oe == "object" ? be({}, re, oe.state) : re, force: xe, replace: te }), V || M);
    const ye = M;
    ye.redirectedFrom = V;
    let nt;
    return !xe && au(r, Y, M) && (nt = po($e.NAVIGATION_DUPLICATED, { to: ye, from: Y }), me(Y, Y, true, false)), (nt ? Promise.resolve(nt) : $(ye, Y)).catch((Me) => vt(Me) ? vt(Me, $e.NAVIGATION_GUARD_REDIRECT) ? Me : se(Me) : q(Me, ye, Y)).then((Me) => {
      if (Me) {
        if (vt(Me, $e.NAVIGATION_GUARD_REDIRECT)) return b(be({ replace: te }, x(Me.to), { state: typeof Me.to == "object" ? be({}, re, Me.to.state) : re, force: xe }), V || ye);
      } else Me = C(ye, Y, true, te, re);
      return E(ye, Y, Me), Me;
    });
  }
  function w(T, V) {
    const M = R(T, V);
    return M ? Promise.reject(M) : Promise.resolve();
  }
  function P(T) {
    const V = He.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(T) : T();
  }
  function $(T, V) {
    let M;
    const [Y, re, xe] = wu(T, V);
    M = Ar(Y.reverse(), "beforeRouteLeave", T, V);
    for (const oe of Y) oe.leaveGuards.forEach((ye) => {
      M.push(kt(ye, T, V));
    });
    const te = w.bind(null, T, V);
    return M.push(te), ne(M).then(() => {
      M = [];
      for (const oe of i.list()) M.push(kt(oe, T, V));
      return M.push(te), ne(M);
    }).then(() => {
      M = Ar(re, "beforeRouteUpdate", T, V);
      for (const oe of re) oe.updateGuards.forEach((ye) => {
        M.push(kt(ye, T, V));
      });
      return M.push(te), ne(M);
    }).then(() => {
      M = [];
      for (const oe of xe) if (oe.beforeEnter) if (lt(oe.beforeEnter)) for (const ye of oe.beforeEnter) M.push(kt(ye, T, V));
      else M.push(kt(oe.beforeEnter, T, V));
      return M.push(te), ne(M);
    }).then(() => (T.matched.forEach((oe) => oe.enterCallbacks = {}), M = Ar(xe, "beforeRouteEnter", T, V, P), M.push(te), ne(M))).then(() => {
      M = [];
      for (const oe of a.list()) M.push(kt(oe, T, V));
      return M.push(te), ne(M);
    }).catch((oe) => vt(oe, $e.NAVIGATION_CANCELLED) ? oe : Promise.reject(oe));
  }
  function E(T, V, M) {
    l.list().forEach((Y) => P(() => Y(T, V, M)));
  }
  function C(T, V, M, Y, re) {
    const xe = R(T, V);
    if (xe) return xe;
    const te = V === It, oe = lo ? history.state : {};
    M && (Y || te ? n.replace(T.fullPath, be({ scroll: te && oe && oe.scroll }, re)) : n.push(T.fullPath, re)), s.value = T, me(T, V, M, te), se();
  }
  let k;
  function H() {
    k || (k = n.listen((T, V, M) => {
      if (!rt.listening) return;
      const Y = g(T), re = z(Y, rt.currentRoute.value);
      if (re) {
        b(be(re, { replace: true, force: true }), Y).catch(Ro);
        return;
      }
      c = Y;
      const xe = s.value;
      lo && gu(ci(xe.fullPath, M.delta), hu()), $(Y, xe).catch((te) => vt(te, $e.NAVIGATION_ABORTED | $e.NAVIGATION_CANCELLED) ? te : vt(te, $e.NAVIGATION_GUARD_REDIRECT) ? (b(be(x(te.to), { force: true }), Y).then((oe) => {
        vt(oe, $e.NAVIGATION_ABORTED | $e.NAVIGATION_DUPLICATED) && !M.delta && M.type === en.pop && n.go(-1, false);
      }).catch(Ro), Promise.reject()) : (M.delta && n.go(-M.delta, false), q(te, Y, xe))).then((te) => {
        te = te || C(Y, xe, false), te && (M.delta && !vt(te, $e.NAVIGATION_CANCELLED) ? n.go(-M.delta, false) : M.type === en.pop && vt(te, $e.NAVIGATION_ABORTED | $e.NAVIGATION_DUPLICATED) && n.go(-1, false)), E(Y, xe, te);
      }).catch(Ro);
    }));
  }
  let A = Co(), W = Co(), B;
  function q(T, V, M) {
    se(T);
    const Y = W.list();
    return Y.length ? Y.forEach((re) => re(T, V, M)) : console.error(T), Promise.reject(T);
  }
  function le() {
    return B && s.value !== It ? Promise.resolve() : new Promise((T, V) => {
      A.add([T, V]);
    });
  }
  function se(T) {
    return B || (B = !T, H(), A.list().forEach(([V, M]) => T ? M(T) : V()), A.reset()), T;
  }
  function me(T, V, M, Y) {
    const { scrollBehavior: re } = e;
    if (!lo || !re) return Promise.resolve();
    const xe = !M && mu(ci(T.fullPath, 0)) || (Y || !M) && history.state && history.state.scroll || null;
    return Xt().then(() => re(T, V, xe)).then((te) => te && pu(te)).catch((te) => q(te, T, V));
  }
  const ce = (T) => n.go(T);
  let Le;
  const He = /* @__PURE__ */ new Set(), rt = { currentRoute: s, listening: true, addRoute: h, removeRoute: p, clearRoutes: t.clearRoutes, hasRoute: m, getRoutes: v, resolve: g, options: e, push: S, replace: I, go: ce, back: () => ce(-1), forward: () => ce(1), beforeEach: i.add, beforeResolve: a.add, afterEach: l.add, onError: W.add, isReady: le, install(T) {
    T.component("RouterLink", Nu), T.component("RouterView", ju), T.config.globalProperties.$router = rt, Object.defineProperty(T.config.globalProperties, "$route", { enumerable: true, get: () => so(s) }), lo && !Le && s.value === It && (Le = true, S(n.location).catch((Y) => {
    }));
    const V = {};
    for (const Y in It) Object.defineProperty(V, Y, { get: () => s.value[Y], enumerable: true });
    T.provide(pr, rt), T.provide(En, ac(V)), T.provide(on, s);
    const M = T.unmount;
    He.add(T), T.unmount = function() {
      He.delete(T), He.size < 1 && (c = It, k && k(), k = null, s.value = It, Le = false, B = false), M();
    };
  } };
  function ne(T) {
    return T.reduce((V, M) => V.then(() => P(M)), Promise.resolve());
  }
  return rt;
}
function L0() {
  return ie(pr);
}
function D0(e) {
  return ie(En);
}
const Gu = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, H0 = ee({ name: "InfoCircle", render: function(t, o) {
  return fr(), ur("svg", Gu, o[0] || (o[0] = [Ke("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ke("circle", { cx: "12", cy: "12", r: "9" }), Ke("path", { d: "M12 8h.01" }), Ke("path", { d: "M11 12h1v4h1" })], -1)]));
} }), Ku = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, N0 = ee({ name: "Map", render: function(t, o) {
  return fr(), ur("svg", Ku, o[0] || (o[0] = [Ke("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ke("path", { d: "M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3V7" }), Ke("path", { d: "M9 4v13" }), Ke("path", { d: "M15 7v13" })], -1)]));
} }), Uu = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, _0 = ee({ name: "MapPin", render: function(t, o) {
  return fr(), ur("svg", Uu, o[0] || (o[0] = [Ke("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ke("circle", { cx: "12", cy: "11", r: "3" }), Ke("path", { d: "M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" })], -1)]));
} }), qu = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, W0 = ee({ name: "Settings", render: function(t, o) {
  return fr(), ur("svg", qu, o[0] || (o[0] = [Ke("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Ke("path", { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z" }), Ke("circle", { cx: "12", cy: "12", r: "3" })], -1)]));
} });
function Yu(e) {
  let t = ".", o = "__", r = "--", n;
  if (e) {
    let p = e.blockPrefix;
    p && (t = p), p = e.elementPrefix, p && (o = p), p = e.modifierPrefix, p && (r = p);
  }
  const i = { install(p) {
    n = p.c;
    const v = p.context;
    v.bem = {}, v.bem.b = null, v.bem.els = null;
  } };
  function a(p) {
    let v, m;
    return { before(g) {
      v = g.bem.b, m = g.bem.els, g.bem.els = null;
    }, after(g) {
      g.bem.b = v, g.bem.els = m;
    }, $({ context: g, props: x }) {
      return p = typeof p == "string" ? p : p({ context: g, props: x }), g.bem.b = p, `${(x == null ? void 0 : x.bPrefix) || t}${g.bem.b}`;
    } };
  }
  function l(p) {
    let v;
    return { before(m) {
      v = m.bem.els;
    }, after(m) {
      m.bem.els = v;
    }, $({ context: m, props: g }) {
      return p = typeof p == "string" ? p : p({ context: m, props: g }), m.bem.els = p.split(",").map((x) => x.trim()), m.bem.els.map((x) => `${(g == null ? void 0 : g.bPrefix) || t}${m.bem.b}${o}${x}`).join(", ");
    } };
  }
  function s(p) {
    return { $({ context: v, props: m }) {
      p = typeof p == "string" ? p : p({ context: v, props: m });
      const g = p.split(",").map((S) => S.trim());
      function x(S) {
        return g.map((I) => `&${(m == null ? void 0 : m.bPrefix) || t}${v.bem.b}${S !== void 0 ? `${o}${S}` : ""}${r}${I}`).join(", ");
      }
      const R = v.bem.els;
      return R !== null ? x(R[0]) : x();
    } };
  }
  function c(p) {
    return { $({ context: v, props: m }) {
      p = typeof p == "string" ? p : p({ context: v, props: m });
      const g = v.bem.els;
      return `&:not(${(m == null ? void 0 : m.bPrefix) || t}${v.bem.b}${g !== null && g.length > 0 ? `${o}${g[0]}` : ""}${r}${p})`;
    } };
  }
  return Object.assign(i, { cB: ((...p) => n(a(p[0]), p[1], p[2])), cE: ((...p) => n(l(p[0]), p[1], p[2])), cM: ((...p) => n(s(p[0]), p[1], p[2])), cNotM: ((...p) => n(c(p[0]), p[1], p[2])) }), i;
}
function Xu(e) {
  let t = 0;
  for (let o = 0; o < e.length; ++o) e[o] === "&" && ++t;
  return t;
}
const cl = /\s*,(?![^(]*\))\s*/g, Zu = /\s+/g;
function Qu(e, t) {
  const o = [];
  return t.split(cl).forEach((r) => {
    let n = Xu(r);
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
function Ju(e, t) {
  const o = [];
  return t.split(cl).forEach((r) => {
    e.forEach((n) => {
      o.push((n && n + " ") + r);
    });
  }), o;
}
function ef(e) {
  let t = [""];
  return e.forEach((o) => {
    o = o && o.trim(), o && (o.includes("&") ? t = Qu(t, o) : t = Ju(t, o));
  }), t.join(", ").replace(Zu, " ");
}
function yi(e) {
  if (!e) return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function gr(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function tf(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Uo(e) {
  return e ? /^\s*@(s|m)/.test(e) : false;
}
const of = /[A-Z]/g;
function dl(e) {
  return e.replace(of, (t) => "-" + t.toLowerCase());
}
function rf(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((o) => t + `  ${dl(o[0])}: ${o[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function nf(e, t, o) {
  return typeof e == "function" ? e({ context: t.context, props: o }) : e;
}
function Si(e, t, o, r) {
  if (!t) return "";
  const n = nf(t, o, r);
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
    l = dl(l), s != null && a.push(`  ${l}${rf(s)}`);
  }), e && a.push("}"), a.join(`
`);
}
function rn(e, t, o) {
  e && e.forEach((r) => {
    if (Array.isArray(r)) rn(r, t, o);
    else if (typeof r == "function") {
      const n = r(t);
      Array.isArray(n) ? rn(n, t, o) : n && o(n);
    } else r && o(r);
  });
}
function ul(e, t, o, r, n) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string") Uo(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const c = i({ context: r.context, props: n });
    Uo(c) ? a = c : t.push(c);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string") Uo(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const c = i.$({ context: r.context, props: n });
    Uo(c) ? a = c : t.push(c);
  }
  const l = ef(t), s = Si(l, e.props, r, n);
  a ? o.push(`${a} {`) : s.length && o.push(s), e.children && rn(e.children, { context: r.context, props: n }, (c) => {
    if (typeof c == "string") {
      const d = Si(l, { raw: c }, r, n);
      o.push(d);
    } else ul(c, t, o, r, n);
  }), t.pop(), a && o.push("}"), i && i.after && i.after(r.context);
}
function af(e, t, o) {
  const r = [];
  return ul(e, [], r, t, o), r.join(`

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
function lf(e, t, o, r) {
  const { els: n } = t;
  if (o === void 0) n.forEach(yi), t.els = [];
  else {
    const i = gr(o, r);
    i && n.includes(i) && (yi(i), t.els = n.filter((a) => a !== i));
  }
}
function wi(e, t) {
  e.push(t);
}
function sf(e, t, o, r, n, i, a, l, s) {
  let c;
  if (o === void 0 && (c = t.render(r), o = ko(c)), s) {
    s.adapter(o, c ?? t.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const d = gr(o, l);
  if (d !== null && !i) return d;
  const u = d ?? tf(o);
  if (c === void 0 && (c = t.render(r)), u.textContent = c, d !== null) return d;
  if (a) {
    const f = l.querySelector(`meta[name="${a}"]`);
    if (f) return l.insertBefore(u, f), wi(t.els, u), u;
  }
  return n ? l.insertBefore(u, l.querySelector("style, link")) : l.appendChild(u), wi(t.els, u), u;
}
function cf(e) {
  return af(this, this.instance, e);
}
function df(e = {}) {
  const { id: t, ssr: o, props: r, head: n = false, force: i = false, anchorMetaName: a, parent: l } = e;
  return sf(this.instance, this, t, r, n, i, a, l, o);
}
function uf(e = {}) {
  const { id: t, parent: o } = e;
  lf(this.instance, this, t, o);
}
const qo = function(e, t, o, r) {
  return { instance: e, $: t, props: o, children: r, els: [], render: cf, mount: df, unmount: uf };
}, ff = function(e, t, o, r) {
  return Array.isArray(t) ? qo(e, { $: null }, null, t) : Array.isArray(o) ? qo(e, t, null, o) : Array.isArray(r) ? qo(e, t, o, r) : qo(e, t, o, null);
};
function fl(e = {}) {
  const t = { c: ((...o) => ff(t, ...o)), use: (o, ...r) => o.install(t, ...r), find: gr, context: {}, config: e };
  return t;
}
function hf(e, t) {
  if (e === void 0) return false;
  if (t) {
    const { context: { ids: o } } = t;
    return o.has(e);
  }
  return gr(e) !== null;
}
const pf = "n", Mo = `.${pf}-`, gf = "__", mf = "--", hl = fl(), pl = Yu({ blockPrefix: Mo, elementPrefix: gf, modifierPrefix: mf });
hl.use(pl);
const { c: F, find: V0 } = hl, { cB: Z, cE: j, cM: K, cNotM: wt } = pl;
function gl(e) {
  return F(({ props: { bPrefix: t } }) => `${t || Mo}modal, ${t || Mo}drawer`, [e]);
}
function vf(e) {
  return F(({ props: { bPrefix: t } }) => `${t || Mo}popover`, [e]);
}
function ml(e) {
  return F(({ props: { bPrefix: t } }) => `&${t || Mo}modal`, e);
}
const bf = (...e) => F(">", [Z(...e)]);
function Q(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (o) => o.toUpperCase()));
}
let lr = [];
const vl = /* @__PURE__ */ new WeakMap();
function xf() {
  lr.forEach((e) => e(...vl.get(e))), lr = [];
}
function Cf(e, ...t) {
  vl.set(e, t), !lr.includes(e) && lr.push(e) === 1 && requestAnimationFrame(xf);
}
function $i(e, t) {
  let { target: o } = e;
  for (; o; ) {
    if (o.dataset && o.dataset[t] !== void 0) return true;
    o = o.parentElement;
  }
  return false;
}
function Oo(e) {
  return e.composedPath()[0] || null;
}
function Pi(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function j0(e) {
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
function G0(e, t) {
  const [o, r] = e.split(" ");
  return { row: o, col: r || o };
}
const Ei = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32", transparent: "#0000" };
function K0(e, t, o) {
  t /= 100, o /= 100;
  const r = t * Math.min(o, 1 - o) + o;
  return [e, r ? (2 - 2 * o / r) * 100 : 0, r * 100];
}
function U0(e, t, o) {
  t /= 100, o /= 100;
  const r = o - o * t / 2, n = Math.min(r, 1 - r);
  return [e, n ? (o - r) / n * 100 : 0, r * 100];
}
function yf(e, t, o) {
  t /= 100, o /= 100;
  let r = (n, i = (n + e / 60) % 6) => o - o * t * Math.max(Math.min(i, 4 - i, 1), 0);
  return [r(5) * 255, r(3) * 255, r(1) * 255];
}
function q0(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (i < 0 ? i + 6 : i), r && n / r * 100, r * 100];
}
function Y0(e, t, o) {
  e /= 255, t /= 255, o /= 255;
  let r = Math.max(e, t, o), n = r - Math.min(e, t, o), i = 1 - Math.abs(r + r - n - 1), a = n && (r == e ? (t - o) / n : r == t ? 2 + (o - e) / n : 4 + (e - t) / n);
  return [60 * (a < 0 ? a + 6 : a), i ? n / i * 100 : 0, (r + r - n) * 50];
}
function Sf(e, t, o) {
  t /= 100, o /= 100;
  let r = t * Math.min(o, 1 - o), n = (i, a = (i + e / 30) % 12) => o - r * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [n(0) * 255, n(8) * 255, n(4) * 255];
}
const pt = "^\\s*", gt = "\\s*$", Ft = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", Ze = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Gt = "([0-9A-Fa-f])", Kt = "([0-9A-Fa-f]{2})", bl = new RegExp(`${pt}hsl\\s*\\(${Ze},${Ft},${Ft}\\)${gt}`), xl = new RegExp(`${pt}hsv\\s*\\(${Ze},${Ft},${Ft}\\)${gt}`), Cl = new RegExp(`${pt}hsla\\s*\\(${Ze},${Ft},${Ft},${Ze}\\)${gt}`), yl = new RegExp(`${pt}hsva\\s*\\(${Ze},${Ft},${Ft},${Ze}\\)${gt}`), wf = new RegExp(`${pt}rgb\\s*\\(${Ze},${Ze},${Ze}\\)${gt}`), $f = new RegExp(`${pt}rgba\\s*\\(${Ze},${Ze},${Ze},${Ze}\\)${gt}`), Rn = new RegExp(`${pt}#${Gt}${Gt}${Gt}${gt}`), Tn = new RegExp(`${pt}#${Kt}${Kt}${Kt}${gt}`), In = new RegExp(`${pt}#${Gt}${Gt}${Gt}${Gt}${gt}`), zn = new RegExp(`${pt}#${Kt}${Kt}${Kt}${Kt}${gt}`);
function je(e) {
  return parseInt(e, 16);
}
function Pf(e) {
  try {
    let t;
    if (t = Cl.exec(e)) return [ht(t[1]), Ie(t[5]), Ie(t[9]), $t(t[13])];
    if (t = bl.exec(e)) return [ht(t[1]), Ie(t[5]), Ie(t[9]), 1];
    throw new Error(`[seemly/hsla]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Ef(e) {
  try {
    let t;
    if (t = yl.exec(e)) return [ht(t[1]), Ie(t[5]), Ie(t[9]), $t(t[13])];
    if (t = xl.exec(e)) return [ht(t[1]), Ie(t[5]), Ie(t[9]), 1];
    throw new Error(`[seemly/hsva]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Lt(e) {
  try {
    let t;
    if (t = Tn.exec(e)) return [je(t[1]), je(t[2]), je(t[3]), 1];
    if (t = wf.exec(e)) return [Pe(t[1]), Pe(t[5]), Pe(t[9]), 1];
    if (t = $f.exec(e)) return [Pe(t[1]), Pe(t[5]), Pe(t[9]), $t(t[13])];
    if (t = Rn.exec(e)) return [je(t[1] + t[1]), je(t[2] + t[2]), je(t[3] + t[3]), 1];
    if (t = zn.exec(e)) return [je(t[1]), je(t[2]), je(t[3]), $t(je(t[4]) / 255)];
    if (t = In.exec(e)) return [je(t[1] + t[1]), je(t[2] + t[2]), je(t[3] + t[3]), $t(je(t[4] + t[4]) / 255)];
    if (e in Ei) return Lt(Ei[e]);
    if (bl.test(e) || Cl.test(e)) {
      const [o, r, n, i] = Pf(e);
      return [...Sf(o, r, n), i];
    } else if (xl.test(e) || yl.test(e)) {
      const [o, r, n, i] = Ef(e);
      return [...yf(o, r, n), i];
    }
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Rf(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Tf(e, t, o) {
  return `rgb(${Pe(e)}, ${Pe(t)}, ${Pe(o)})`;
}
function nn(e, t, o, r) {
  return `rgba(${Pe(e)}, ${Pe(t)}, ${Pe(o)}, ${Rf(r)})`;
}
function kr(e, t, o, r, n) {
  return Pe((e * t * (1 - r) + o * r) / n);
}
function _(e, t) {
  Array.isArray(e) || (e = Lt(e)), Array.isArray(t) || (t = Lt(t));
  const o = e[3], r = t[3], n = $t(o + r - o * r);
  return nn(kr(e[0], o, t[0], r, n), kr(e[1], o, t[1], r, n), kr(e[2], o, t[2], r, n), n);
}
function G(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : Lt(e);
  return typeof t.alpha == "number" ? nn(o, r, n, t.alpha) : nn(o, r, n, i);
}
function Yo(e, t) {
  const [o, r, n, i = 1] = Array.isArray(e) ? e : Lt(e), { lightness: a = 1, alpha: l = 1 } = t;
  return If([o * a, r * a, n * a, i * l]);
}
function $t(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function ht(e) {
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
function X0(e) {
  const [t, o, r] = Array.isArray(e) ? e : Lt(e);
  return Tf(t, o, r);
}
function If(e) {
  const [t, o, r] = e;
  return 3 in e ? `rgba(${Pe(t)}, ${Pe(o)}, ${Pe(r)}, ${$t(e[3])})` : `rgba(${Pe(t)}, ${Pe(o)}, ${Pe(r)}, 1)`;
}
function Z0(e) {
  return `hsv(${ht(e[0])}, ${Ie(e[1])}%, ${Ie(e[2])}%)`;
}
function Q0(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsva(${ht(t)}, ${Ie(o)}%, ${Ie(r)}%, ${$t(e[3])})` : `hsva(${ht(t)}, ${Ie(o)}%, ${Ie(r)}%, 1)`;
}
function J0(e) {
  return `hsl(${ht(e[0])}, ${Ie(e[1])}%, ${Ie(e[2])}%)`;
}
function ex(e) {
  const [t, o, r] = e;
  return 3 in e ? `hsla(${ht(t)}, ${Ie(o)}%, ${Ie(r)}%, ${$t(e[3])})` : `hsla(${ht(t)}, ${Ie(o)}%, ${Ie(r)}%, 1)`;
}
function tx(e) {
  if (typeof e == "string") {
    let r;
    if (r = Tn.exec(e)) return `${r[0]}FF`;
    if (r = zn.exec(e)) return r[0];
    if (r = Rn.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}FF`;
    if (r = In.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}${r[4]}${r[4]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  const t = `#${e.slice(0, 3).map((r) => Pe(r).toString(16).toUpperCase().padStart(2, "0")).join("")}`, o = e.length === 3 ? "FF" : Pe(e[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return t + o;
}
function ox(e) {
  if (typeof e == "string") {
    let t;
    if (t = Tn.exec(e)) return t[0];
    if (t = zn.exec(e)) return t[0].slice(0, 7);
    if (t = Rn.exec(e) || In.exec(e)) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  return `#${e.slice(0, 3).map((t) => Pe(t).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function zf(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function rx(e, t) {
  const o = [];
  for (let r = 0; r < e; ++r) o.push(t);
  return o;
}
function rr(e) {
  return e.composedPath()[0];
}
const Af = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function kf(e, t, o) {
  if (e === "mousemoveoutside") {
    const r = (n) => {
      t.contains(rr(n)) || o(n);
    };
    return { mousemove: r, touchstart: r };
  } else if (e === "clickoutside") {
    let r = false;
    const n = (a) => {
      r = !t.contains(rr(a));
    }, i = (a) => {
      r && (t.contains(rr(a)) || o(a));
    };
    return { mousedown: n, mouseup: i, touchstart: n, touchend: i };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {};
}
function Sl(e, t, o) {
  const r = Af[e];
  let n = r.get(t);
  n === void 0 && r.set(t, n = /* @__PURE__ */ new WeakMap());
  let i = n.get(o);
  return i === void 0 && n.set(o, i = kf(e, t, o)), i;
}
function Mf(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = Sl(e, t, o);
    return Object.keys(n).forEach((i) => {
      he(i, document, n[i], r);
    }), true;
  }
  return false;
}
function Of(e, t, o, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = Sl(e, t, o);
    return Object.keys(n).forEach((i) => {
      fe(i, document, n[i], r);
    }), true;
  }
  return false;
}
function Bf() {
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
    const $ = b[w];
    return b[w] = function() {
      return P.apply(b, arguments), $.apply(b, arguments);
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
      const { type: P, eventPhase: $, bubbles: E } = w, C = rr(w);
      if ($ === 2) return;
      const k = $ === 1 ? "capture" : "bubble";
      let H = C;
      const A = [];
      for (; H === null && (H = window), A.push(H), H !== window; ) H = H.parentNode || null;
      const W = d.capture[P], B = d.bubble[P];
      if (n(w, "stopPropagation", o), n(w, "stopImmediatePropagation", r), c(w, s), k === "capture") {
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
          if (q === 0 && !E && B !== void 0) {
            const me = B.get(le);
            if (me !== void 0) for (const ce of me) {
              if (t.has(w)) break;
              ce(w);
            }
          }
        }
      } else if (k === "bubble") {
        if (B === void 0) return;
        for (let q = 0; q < A.length && !e.has(w); ++q) {
          const le = A[q], se = B.get(le);
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
      const { type: P, eventPhase: $ } = w;
      if ($ !== 2) return;
      const E = u[P];
      E !== void 0 && E.forEach((C) => C(w));
    };
    return b.displayName = "evtdUnifiedWindowEventHandler", b;
  }
  const p = f(), v = h();
  function m(b, w) {
    const P = d[b];
    return P[w] === void 0 && (P[w] = /* @__PURE__ */ new Map(), window.addEventListener(w, p, b === "capture")), P[w];
  }
  function g(b) {
    return u[b] === void 0 && (u[b] = /* @__PURE__ */ new Set(), window.addEventListener(b, v)), u[b];
  }
  function x(b, w) {
    let P = b.get(w);
    return P === void 0 && b.set(w, P = /* @__PURE__ */ new Set()), P;
  }
  function R(b, w, P, $) {
    const E = d[w][P];
    if (E !== void 0) {
      const C = E.get(b);
      if (C !== void 0 && C.has($)) return true;
    }
    return false;
  }
  function S(b, w) {
    const P = u[b];
    return !!(P !== void 0 && P.has(w));
  }
  function I(b, w, P, $) {
    let E;
    if (typeof $ == "object" && $.once === true ? E = (W) => {
      z(b, w, E, $), P(W);
    } : E = P, Mf(b, w, E, $)) return;
    const k = $ === true || typeof $ == "object" && $.capture === true ? "capture" : "bubble", H = m(k, b), A = x(H, w);
    if (A.has(E) || A.add(E), w === window) {
      const W = g(b);
      W.has(E) || W.add(E);
    }
  }
  function z(b, w, P, $) {
    if (Of(b, w, P, $)) return;
    const C = $ === true || typeof $ == "object" && $.capture === true, k = C ? "capture" : "bubble", H = m(k, b), A = x(H, w);
    if (w === window && !R(w, C ? "bubble" : "capture", b, P) && S(b, P)) {
      const B = u[b];
      B.delete(P), B.size === 0 && (window.removeEventListener(b, v), u[b] = void 0);
    }
    A.has(P) && A.delete(P), A.size === 0 && H.delete(w), H.size === 0 && (window.removeEventListener(b, p, k === "capture"), d[k][b] = void 0);
  }
  return { on: I, off: z };
}
const { on: he, off: fe } = Bf();
function Ff(e) {
  const t = N(!!e.value);
  if (t.value) return Ot(t);
  const o = Te(e, (r) => {
    r && (t.value = true, o());
  });
  return Ot(t);
}
function ot(e) {
  const t = O(e), o = N(t.value);
  return Te(t, (r) => {
    o.value = r;
  }), typeof e == "function" ? o : { __v_isRef: true, get value() {
    return o.value;
  }, set value(r) {
    e.set(r);
  } };
}
function An() {
  return mo() !== null;
}
const kn = typeof window < "u";
let uo, To;
const Lf = () => {
  var e, t;
  uo = kn ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, To = false, uo !== void 0 ? uo.then(() => {
    To = true;
  }) : To = true;
};
Lf();
function Df(e) {
  if (To) return;
  let t = false;
  st(() => {
    To || (uo == null ? void 0 : uo.then(() => {
      t || e();
    }));
  }), _e(() => {
    t = true;
  });
}
const Po = N(null);
function Ri(e) {
  if (e.clientX > 0 || e.clientY > 0) Po.value = { x: e.clientX, y: e.clientY };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: o, top: r, width: n, height: i } = t.getBoundingClientRect();
      o > 0 || r > 0 ? Po.value = { x: o + n / 2, y: r + i / 2 } : Po.value = { x: 0, y: 0 };
    } else Po.value = null;
  }
}
let Xo = 0, Ti = true;
function Hf() {
  if (!kn) return Ot(N(null));
  Xo === 0 && he("click", document, Ri, true);
  const e = () => {
    Xo += 1;
  };
  return Ti && (Ti = An()) ? (Jt(e), _e(() => {
    Xo -= 1, Xo === 0 && fe("click", document, Ri, true);
  })) : e(), Ot(Po);
}
const Nf = N(void 0);
let Zo = 0;
function Ii() {
  Nf.value = Date.now();
}
let zi = true;
function _f(e) {
  if (!kn) return Ot(N(false));
  const t = N(false);
  let o = null;
  function r() {
    o !== null && window.clearTimeout(o);
  }
  function n() {
    r(), t.value = true, o = window.setTimeout(() => {
      t.value = false;
    }, e);
  }
  Zo === 0 && he("click", window, Ii, true);
  const i = () => {
    Zo += 1, he("click", window, n, true);
  };
  return zi && (zi = An()) ? (Jt(i), _e(() => {
    Zo -= 1, Zo === 0 && fe("click", window, Ii, true), fe("click", window, n, true), r();
  })) : i(), Ot(t);
}
function wl(e, t) {
  return Te(e, (o) => {
    o !== void 0 && (t.value = o);
  }), O(() => e.value === void 0 ? t.value : e.value);
}
function mr() {
  const e = N(false);
  return st(() => {
    e.value = true;
  }), Ot(e);
}
function $l(e, t) {
  return O(() => {
    for (const o of t) if (e[o] !== void 0) return e[o];
    return e[t[t.length - 1]];
  });
}
const Wf = (typeof window > "u" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function Vf() {
  return Wf;
}
function jf(e = {}, t) {
  const o = Ia({ ctrl: false, command: false, win: false, shift: false, tab: false }), { keydown: r, keyup: n } = e, i = (s) => {
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
    (t === void 0 || t.value) && (he("keydown", document, i), he("keyup", document, a)), t !== void 0 && Te(t, (s) => {
      s ? (he("keydown", document, i), he("keyup", document, a)) : (fe("keydown", document, i), fe("keyup", document, a));
    });
  };
  return An() ? (Jt(l), _e(() => {
    (t === void 0 || t.value) && (fe("keydown", document, i), fe("keyup", document, a));
  })) : l(), Ot(o);
}
function nx(e) {
  return e;
}
const ix = "n-internal-select-menu", Gf = "n-internal-select-menu-body", vr = "n-drawer-body", ax = "n-drawer", br = "n-modal-body", Kf = "n-modal-provider", Pl = "n-modal", No = "n-popover-body", El = "__disabled__";
function go(e) {
  const t = ie(br, null), o = ie(vr, null), r = ie(No, null), n = ie(Gf, null), i = N();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    st(() => {
      he("fullscreenchange", document, a);
    }), _e(() => {
      fe("fullscreenchange", document, a);
    });
  }
  return ot(() => {
    var a;
    const { to: l } = e;
    return l !== void 0 ? l === false ? El : l === true ? i.value || "body" : l : (t == null ? void 0 : t.value) ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : (o == null ? void 0 : o.value) ? o.value : (r == null ? void 0 : r.value) ? r.value : (n == null ? void 0 : n.value) ? n.value : l ?? (i.value || "body");
  });
}
go.tdkey = El;
go.propTo = { type: [String, Object, Boolean], default: void 0 };
function Uf(e, t, o) {
  const r = N(e.value);
  let n = null;
  return Te(e, (i) => {
    n !== null && window.clearTimeout(n), i === true ? o && !o.value ? r.value = true : n = window.setTimeout(() => {
      r.value = true;
    }, t) : r.value = false;
  }), r;
}
const _o = typeof document < "u" && typeof window < "u", Mn = N(false);
function Ai() {
  Mn.value = true;
}
function ki() {
  Mn.value = false;
}
let yo = 0;
function qf() {
  return _o && (Jt(() => {
    yo || (window.addEventListener("compositionstart", Ai), window.addEventListener("compositionend", ki)), yo++;
  }), _e(() => {
    yo <= 1 ? (window.removeEventListener("compositionstart", Ai), window.removeEventListener("compositionend", ki), yo = 0) : yo--;
  })), Mn;
}
let ro = 0, Mi = "", Oi = "", Bi = "", Fi = "";
const Li = N("0px");
function Yf(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let o, r = false;
  const n = () => {
    t.style.marginRight = Mi, t.style.overflow = Oi, t.style.overflowX = Bi, t.style.overflowY = Fi, Li.value = "0px";
  };
  st(() => {
    o = Te(e, (i) => {
      if (i) {
        if (!ro) {
          const a = window.innerWidth - t.offsetWidth;
          a > 0 && (Mi = t.style.marginRight, t.style.marginRight = `${a}px`, Li.value = `${a}px`), Oi = t.style.overflow, Bi = t.style.overflowX, Fi = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        r = true, ro++;
      } else ro--, ro || n(), r = false;
    }, { immediate: true });
  }), _e(() => {
    o == null ? void 0 : o(), r && (ro--, ro || n(), r = false);
  });
}
function Xf(e) {
  const t = { isDeactivated: false };
  let o = false;
  return Ta(() => {
    if (t.isDeactivated = false, !o) {
      o = true;
      return;
    }
    e();
  }), xn(() => {
    t.isDeactivated = true, o || (o = true);
  }), t;
}
function an(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  return r();
}
function ln(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(ar(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        ln(r, t, o);
        return;
      }
      if (r.type === eo) {
        if (r.children === null) return;
        Array.isArray(r.children) && ln(r.children, t, o);
      } else r.type !== Cn && o.push(r);
    }
  }), o;
}
function Di(e, t, o = "default") {
  const r = t[o];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
  const n = ln(r());
  if (n.length === 1) return n[0];
  throw new Error(`[vueuc/${e}]: slot[${o}] should have exactly one child.`);
}
let zt = null;
function Rl() {
  if (zt === null && (zt = document.getElementById("v-binder-view-measurer"), zt === null)) {
    zt = document.createElement("div"), zt.id = "v-binder-view-measurer";
    const { style: e } = zt;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(zt);
  }
  return zt.getBoundingClientRect();
}
function Zf(e, t) {
  const o = Rl();
  return { top: t, left: e, height: 0, width: 0, right: o.width - e, bottom: o.height - t };
}
function Mr(e) {
  const t = e.getBoundingClientRect(), o = Rl();
  return { left: t.left - o.left, top: t.top - o.top, bottom: o.height + o.top - t.bottom, right: o.width + o.left - t.right, width: t.width, height: t.height };
}
function Qf(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Tl(e) {
  if (e === null) return null;
  const t = Qf(e);
  if (t === null) return null;
  if (t.nodeType === 9) return document;
  if (t.nodeType === 1) {
    const { overflow: o, overflowX: r, overflowY: n } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(o + n + r)) return t;
  }
  return Tl(t);
}
const Il = ee({ name: "Binder", props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(e) {
  var t;
  Re("VBinder", (t = mo()) === null || t === void 0 ? void 0 : t.proxy);
  const o = ie("VBinder", null), r = N(null), n = (g) => {
    r.value = g, o && e.syncTargetWithParent && o.setTargetRef(g);
  };
  let i = [];
  const a = () => {
    let g = r.value;
    for (; g = Tl(g), g !== null; ) i.push(g);
    for (const x of i) he("scroll", x, u, true);
  }, l = () => {
    for (const g of i) fe("scroll", g, u, true);
    i = [];
  }, s = /* @__PURE__ */ new Set(), c = (g) => {
    s.size === 0 && a(), s.has(g) || s.add(g);
  }, d = (g) => {
    s.has(g) && s.delete(g), s.size === 0 && l();
  }, u = () => {
    Cf(f);
  }, f = () => {
    s.forEach((g) => g());
  }, h = /* @__PURE__ */ new Set(), p = (g) => {
    h.size === 0 && he("resize", window, m), h.has(g) || h.add(g);
  }, v = (g) => {
    h.has(g) && h.delete(g), h.size === 0 && fe("resize", window, m);
  }, m = () => {
    h.forEach((g) => g());
  };
  return _e(() => {
    fe("resize", window, m), l();
  }), { targetRef: r, setTargetRef: n, addScrollListener: c, removeScrollListener: d, addResizeListener: p, removeResizeListener: v };
}, render() {
  return an("binder", this.$slots);
} }), zl = ee({ name: "Target", setup() {
  const { setTargetRef: e, syncTarget: t } = ie("VBinder");
  return { syncTarget: t, setTargetDirective: { mounted: e, updated: e } };
}, render() {
  const { syncTarget: e, setTargetDirective: t } = this;
  return e ? Zt(Di("follower", this.$slots), [[t]]) : Di("follower", this.$slots);
} }), no = "@@mmoContext", Jf = { mounted(e, { value: t }) {
  e[no] = { handler: void 0 }, typeof t == "function" && (e[no].handler = t, he("mousemoveoutside", e, t));
}, updated(e, { value: t }) {
  const o = e[no];
  typeof t == "function" ? o.handler ? o.handler !== t && (fe("mousemoveoutside", e, o.handler), o.handler = t, he("mousemoveoutside", e, t)) : (e[no].handler = t, he("mousemoveoutside", e, t)) : o.handler && (fe("mousemoveoutside", e, o.handler), o.handler = void 0);
}, unmounted(e) {
  const { handler: t } = e[no];
  t && fe("mousemoveoutside", e, t), e[no].handler = void 0;
} }, io = "@@coContext", sn = { mounted(e, { value: t, modifiers: o }) {
  e[io] = { handler: void 0 }, typeof t == "function" && (e[io].handler = t, he("clickoutside", e, t, { capture: o.capture }));
}, updated(e, { value: t, modifiers: o }) {
  const r = e[io];
  typeof t == "function" ? r.handler ? r.handler !== t && (fe("clickoutside", e, r.handler, { capture: o.capture }), r.handler = t, he("clickoutside", e, t, { capture: o.capture })) : (e[io].handler = t, he("clickoutside", e, t, { capture: o.capture })) : r.handler && (fe("clickoutside", e, r.handler, { capture: o.capture }), r.handler = void 0);
}, unmounted(e, { modifiers: t }) {
  const { handler: o } = e[io];
  o && fe("clickoutside", e, o, { capture: t.capture }), e[io].handler = void 0;
} };
function eh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class th {
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
    r.has(t) ? r.delete(t) : o === void 0 && eh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Or = new th(), ao = "@@ziContext", On = { mounted(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o;
  e[ao] = { enabled: !!n, initialized: false }, n && (Or.ensureZIndex(e, r), e[ao].initialized = true);
}, updated(e, t) {
  const { value: o = {} } = t, { zIndex: r, enabled: n } = o, i = e[ao].enabled;
  n && !i && (Or.ensureZIndex(e, r), e[ao].initialized = true), e[ao].enabled = !!n;
}, unmounted(e, t) {
  if (!e[ao].initialized) return;
  const { value: o = {} } = t, { zIndex: r } = o;
  Or.unregister(e, r);
} }, oh = "@css-render/vue3-ssr";
function rh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function nh(e, t, o) {
  const { styles: r, ids: n } = o;
  n.has(e) || r !== null && (n.add(e), r.push(rh(e, t)));
}
const ih = typeof document < "u";
function bo() {
  if (ih) return;
  const e = ie(oh, null);
  if (e !== null) return { adapter: (t, o) => nh(t, o, e), context: e };
}
function Hi(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: Eo } = fl(), Al = "vueuc-style";
function Ni(e) {
  return typeof e == "string" ? document.querySelector(e) : e() || null;
}
const kl = ee({ name: "LazyTeleport", props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(e) {
  return { showTeleport: Ff(ge(e, "show")), mergedTo: O(() => {
    const { to: t } = e;
    return t ?? "body";
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? an("lazy-teleport", this.$slots) : y(lc, { disabled: this.disabled, to: this.mergedTo }, an("lazy-teleport", this.$slots)) : null;
} }), Qo = { top: "bottom", bottom: "top", left: "right", right: "left" }, _i = { start: "end", center: "center", end: "start" }, Br = { top: "height", bottom: "height", left: "width", right: "width" }, ah = { "bottom-start": "top left", bottom: "top center", "bottom-end": "top right", "top-start": "bottom left", top: "bottom center", "top-end": "bottom right", "right-start": "top left", right: "center left", "right-end": "bottom left", "left-start": "top right", left: "center right", "left-end": "bottom right" }, lh = { "bottom-start": "bottom left", bottom: "bottom center", "bottom-end": "bottom right", "top-start": "top left", top: "top center", "top-end": "top right", "right-start": "top right", right: "center right", "right-end": "bottom right", "left-start": "top left", left: "center left", "left-end": "bottom left" }, sh = { "bottom-start": "right", "bottom-end": "left", "top-start": "right", "top-end": "left", "right-start": "bottom", "right-end": "top", "left-start": "bottom", "left-end": "top" }, Wi = { top: true, bottom: false, left: true, right: false }, Vi = { top: "end", bottom: "start", left: "end", right: "start" };
function ch(e, t, o, r, n, i) {
  if (!n || i) return { placement: e, top: 0, left: 0 };
  const [a, l] = e.split("-");
  let s = l ?? "center", c = { top: 0, left: 0 };
  const d = (h, p, v) => {
    let m = 0, g = 0;
    const x = o[h] - t[p] - t[h];
    return x > 0 && r && (v ? g = Wi[p] ? x : -x : m = Wi[p] ? x : -x), { left: m, top: g };
  }, u = a === "left" || a === "right";
  if (s !== "center") {
    const h = sh[e], p = Qo[h], v = Br[h];
    if (o[v] > t[v]) {
      if (t[h] + t[v] < o[v]) {
        const m = (o[v] - t[v]) / 2;
        t[h] < m || t[p] < m ? t[h] < t[p] ? (s = _i[l], c = d(v, p, u)) : c = d(v, h, u) : s = "center";
      }
    } else o[v] < t[v] && t[p] < 0 && t[h] > t[p] && (s = _i[l]);
  } else {
    const h = a === "bottom" || a === "top" ? "left" : "top", p = Qo[h], v = Br[h], m = (o[v] - t[v]) / 2;
    (t[h] < m || t[p] < m) && (t[h] > t[p] ? (s = Vi[h], c = d(v, h, u)) : (s = Vi[p], c = d(v, p, u)));
  }
  let f = a;
  return t[a] < o[Br[a]] && t[a] < t[Qo[a]] && (f = Qo[a]), { placement: s !== "center" ? `${f}-${s}` : f, left: c.left, top: c.top };
}
function dh(e, t) {
  return t ? lh[e] : ah[e];
}
function uh(e, t, o, r, n, i) {
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
const fh = Eo([Eo(".v-binder-follower-container", { position: "absolute", left: "0", right: "0", top: "0", height: "0", pointerEvents: "none", zIndex: "auto" }), Eo(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [Eo("> *", { pointerEvents: "all" })])]), Ml = ee({ name: "Follower", inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: "bottom" }, syncTrigger: { type: Array, default: ["resize", "scroll"] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(e) {
  const t = ie("VBinder"), o = ot(() => e.enabled !== void 0 ? e.enabled : e.show), r = N(null), n = N(null), i = () => {
    const { syncTrigger: f } = e;
    f.includes("scroll") && t.addScrollListener(s), f.includes("resize") && t.addResizeListener(s);
  }, a = () => {
    t.removeScrollListener(s), t.removeResizeListener(s);
  };
  st(() => {
    o.value && (s(), i());
  });
  const l = bo();
  fh.mount({ id: "vueuc/binder", head: true, anchorMetaName: Al, ssr: l }), _e(() => {
    a();
  }), Df(() => {
    o.value && s();
  });
  const s = () => {
    if (!o.value) return;
    const f = r.value;
    if (f === null) return;
    const h = t.targetRef, { x: p, y: v, overlap: m } = e, g = p !== void 0 && v !== void 0 ? Zf(p, v) : Mr(h);
    f.style.setProperty("--v-target-width", `${Math.round(g.width)}px`), f.style.setProperty("--v-target-height", `${Math.round(g.height)}px`);
    const { width: x, minWidth: R, placement: S, internalShift: I, flip: z } = e;
    f.setAttribute("v-placement", S), m ? f.setAttribute("v-overlap", "") : f.removeAttribute("v-overlap");
    const { style: b } = f;
    x === "target" ? b.width = `${g.width}px` : x !== void 0 ? b.width = x : b.width = "", R === "target" ? b.minWidth = `${g.width}px` : R !== void 0 ? b.minWidth = R : b.minWidth = "";
    const w = Mr(f), P = Mr(n.value), { left: $, top: E, placement: C } = ch(S, g, w, I, z, m), k = dh(C, m), { left: H, top: A, transform: W } = uh(C, P, g, E, $, m);
    f.setAttribute("v-placement", C), f.style.setProperty("--v-offset-left", `${Math.round($)}px`), f.style.setProperty("--v-offset-top", `${Math.round(E)}px`), f.style.transform = `translateX(${H}) translateY(${A}) ${W}`, f.style.setProperty("--v-transform-origin", k), f.style.transformOrigin = k;
  };
  Te(o, (f) => {
    f ? (i(), c()) : a();
  });
  const c = () => {
    Xt().then(s).catch((f) => console.error(f));
  };
  ["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach((f) => {
    Te(ge(e, f), s);
  }), ["teleportDisabled"].forEach((f) => {
    Te(ge(e, f), c);
  }), Te(ge(e, "syncTrigger"), (f) => {
    f.includes("resize") ? t.addResizeListener(s) : t.removeResizeListener(s), f.includes("scroll") ? t.addScrollListener(s) : t.removeScrollListener(s);
  });
  const d = mr(), u = ot(() => {
    const { to: f } = e;
    if (f !== void 0) return f;
    d.value;
  });
  return { VBinder: t, mergedEnabled: o, offsetContainerRef: n, followerRef: r, mergedTo: u, syncPosition: s };
}, render() {
  return y(kl, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var e, t;
    const o = y("div", { class: ["v-binder-follower-container", this.containerClass], ref: "offsetContainerRef" }, [y("div", { class: "v-binder-follower-content", ref: "followerRef" }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))]);
    return this.zindexable ? Zt(o, [[On, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : o;
  } });
} });
var Ut = [], hh = function() {
  return Ut.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, ph = function() {
  return Ut.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, ji = "ResizeObserver loop completed with undelivered notifications.", gh = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: ji }) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = ji), window.dispatchEvent(e);
}, Bo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Bo || (Bo = {}));
var qt = function(e) {
  return Object.freeze(e);
}, mh = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.inlineSize = t, this.blockSize = o, qt(this);
  }
  return e;
})(), Ol = (function() {
  function e(t, o, r, n) {
    return this.x = t, this.y = o, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, qt(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, o = t.x, r = t.y, n = t.top, i = t.right, a = t.bottom, l = t.left, s = t.width, c = t.height;
    return { x: o, y: r, top: n, right: i, bottom: a, left: l, width: s, height: c };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
})(), Bn = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Bl = function(e) {
  if (Bn(e)) {
    var t = e.getBBox(), o = t.width, r = t.height;
    return !o && !r;
  }
  var n = e, i = n.offsetWidth, a = n.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, Gi = function(e) {
  var t;
  if (e instanceof Element) return true;
  var o = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(o && e instanceof o.Element);
}, vh = function(e) {
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
}, Io = typeof window < "u" ? window : {}, Jo = /* @__PURE__ */ new WeakMap(), Ki = /auto|scroll/, bh = /^tb|vertical/, xh = /msie|trident/i.test(Io.navigator && Io.navigator.userAgent), ct = function(e) {
  return parseFloat(e || "0");
}, fo = function(e, t, o) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), o === void 0 && (o = false), new mh((o ? t : e) || 0, (o ? e : t) || 0);
}, Ui = qt({ devicePixelContentBoxSize: fo(), borderBoxSize: fo(), contentBoxSize: fo(), contentRect: new Ol(0, 0, 0, 0) }), Fl = function(e, t) {
  if (t === void 0 && (t = false), Jo.has(e) && !t) return Jo.get(e);
  if (Bl(e)) return Jo.set(e, Ui), Ui;
  var o = getComputedStyle(e), r = Bn(e) && e.ownerSVGElement && e.getBBox(), n = !xh && o.boxSizing === "border-box", i = bh.test(o.writingMode || ""), a = !r && Ki.test(o.overflowY || ""), l = !r && Ki.test(o.overflowX || ""), s = r ? 0 : ct(o.paddingTop), c = r ? 0 : ct(o.paddingRight), d = r ? 0 : ct(o.paddingBottom), u = r ? 0 : ct(o.paddingLeft), f = r ? 0 : ct(o.borderTopWidth), h = r ? 0 : ct(o.borderRightWidth), p = r ? 0 : ct(o.borderBottomWidth), v = r ? 0 : ct(o.borderLeftWidth), m = u + c, g = s + d, x = v + h, R = f + p, S = l ? e.offsetHeight - R - e.clientHeight : 0, I = a ? e.offsetWidth - x - e.clientWidth : 0, z = n ? m + x : 0, b = n ? g + R : 0, w = r ? r.width : ct(o.width) - z - I, P = r ? r.height : ct(o.height) - b - S, $ = w + m + I + x, E = P + g + S + R, C = qt({ devicePixelContentBoxSize: fo(Math.round(w * devicePixelRatio), Math.round(P * devicePixelRatio), i), borderBoxSize: fo($, E, i), contentBoxSize: fo(w, P, i), contentRect: new Ol(u, s, w, P) });
  return Jo.set(e, C), C;
}, Ll = function(e, t, o) {
  var r = Fl(e, o), n = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case Bo.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case Bo.BORDER_BOX:
      return n;
    default:
      return i;
  }
}, Ch = /* @__PURE__ */ (function() {
  function e(t) {
    var o = Fl(t);
    this.target = t, this.contentRect = o.contentRect, this.borderBoxSize = qt([o.borderBoxSize]), this.contentBoxSize = qt([o.contentBoxSize]), this.devicePixelContentBoxSize = qt([o.devicePixelContentBoxSize]);
  }
  return e;
})(), Dl = function(e) {
  if (Bl(e)) return 1 / 0;
  for (var t = 0, o = e.parentNode; o; ) t += 1, o = o.parentNode;
  return t;
}, yh = function() {
  var e = 1 / 0, t = [];
  Ut.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var l = [];
      a.activeTargets.forEach(function(c) {
        var d = new Ch(c.target), u = Dl(c.target);
        l.push(d), c.lastReportedSize = Ll(c.target, c.observedBox), u < e && (e = u);
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
}, qi = function(e) {
  Ut.forEach(function(o) {
    o.activeTargets.splice(0, o.activeTargets.length), o.skippedTargets.splice(0, o.skippedTargets.length), o.observationTargets.forEach(function(n) {
      n.isActive() && (Dl(n.target) > e ? o.activeTargets.push(n) : o.skippedTargets.push(n));
    });
  });
}, Sh = function() {
  var e = 0;
  for (qi(e); hh(); ) e = yh(), qi(e);
  return ph() && gh(), e > 0;
}, Fr, Hl = [], wh = function() {
  return Hl.splice(0).forEach(function(e) {
    return e();
  });
}, $h = function(e) {
  if (!Fr) {
    var t = 0, o = document.createTextNode(""), r = { characterData: true };
    new MutationObserver(function() {
      return wh();
    }).observe(o, r), Fr = function() {
      o.textContent = "".concat(t ? t-- : t++);
    };
  }
  Hl.push(e), Fr();
}, Ph = function(e) {
  $h(function() {
    requestAnimationFrame(e);
  });
}, nr = 0, Eh = function() {
  return !!nr;
}, Rh = 250, Th = { attributes: true, characterData: true, childList: true, subtree: true }, Yi = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], Xi = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Lr = false, Ih = (function() {
  function e() {
    var t = this;
    this.stopped = true, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var o = this;
    if (t === void 0 && (t = Rh), !Lr) {
      Lr = true;
      var r = Xi(t);
      Ph(function() {
        var n = false;
        try {
          n = Sh();
        } finally {
          if (Lr = false, t = r - Xi(), !Eh()) return;
          n ? o.run(1e3) : t > 0 ? o.run(t) : o.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, o = function() {
      return t.observer && t.observer.observe(document.body, Th);
    };
    document.body ? o() : Io.addEventListener("DOMContentLoaded", o);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), Yi.forEach(function(o) {
      return Io.addEventListener(o, t.listener, true);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Yi.forEach(function(o) {
      return Io.removeEventListener(o, t.listener, true);
    }), this.stopped = true);
  }, e;
})(), cn = new Ih(), Zi = function(e) {
  !nr && e > 0 && cn.start(), nr += e, !nr && cn.stop();
}, zh = function(e) {
  return !Bn(e) && !vh(e) && getComputedStyle(e).display === "inline";
}, Ah = (function() {
  function e(t, o) {
    this.target = t, this.observedBox = o || Bo.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e.prototype.isActive = function() {
    var t = Ll(this.target, this.observedBox, true);
    return zh(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
})(), kh = /* @__PURE__ */ (function() {
  function e(t, o) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = o;
  }
  return e;
})(), er = /* @__PURE__ */ new WeakMap(), Qi = function(e, t) {
  for (var o = 0; o < e.length; o += 1) if (e[o].target === t) return o;
  return -1;
}, tr = (function() {
  function e() {
  }
  return e.connect = function(t, o) {
    var r = new kh(t, o);
    er.set(t, r);
  }, e.observe = function(t, o, r) {
    var n = er.get(t), i = n.observationTargets.length === 0;
    Qi(n.observationTargets, o) < 0 && (i && Ut.push(n), n.observationTargets.push(new Ah(o, r && r.box)), Zi(1), cn.schedule());
  }, e.unobserve = function(t, o) {
    var r = er.get(t), n = Qi(r.observationTargets, o), i = r.observationTargets.length === 1;
    n >= 0 && (i && Ut.splice(Ut.indexOf(r), 1), r.observationTargets.splice(n, 1), Zi(-1));
  }, e.disconnect = function(t) {
    var o = this, r = er.get(t);
    r.observationTargets.slice().forEach(function(n) {
      return o.unobserve(t, n.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
})(), Mh = (function() {
  function e(t) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    tr.connect(this, t);
  }
  return e.prototype.observe = function(t, o) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Gi(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    tr.observe(this, t, o);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Gi(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    tr.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    tr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
})();
class Oh {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Mh)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const Ji = new Oh(), ea = ee({ name: "ResizeObserver", props: { onResize: Function }, setup(e) {
  let t = false;
  const o = mo().proxy;
  function r(n) {
    const { onResize: i } = e;
    i !== void 0 && i(n);
  }
  st(() => {
    const n = o.$el;
    if (n === void 0) {
      Hi("resize-observer", "$el does not exist.");
      return;
    }
    if (n.nextElementSibling !== n.nextSibling && n.nodeType === 3 && n.nodeValue !== "") {
      Hi("resize-observer", "$el can not be observed (it may be a text node).");
      return;
    }
    n.nextElementSibling !== null && (Ji.registerHandler(n.nextElementSibling, r), t = true);
  }), _e(() => {
    t && Ji.unregisterHandler(o.$el.nextElementSibling);
  });
}, render() {
  return za(this.$slots, "default");
} }), bt = "v-hidden", Bh = Eo("[v-hidden]", { display: "none!important" }), lx = ee({ name: "Overflow", props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(e, { slots: t }) {
  const o = N(null), r = N(null);
  function n(a) {
    const { value: l } = o, { getCounter: s, getTail: c } = e;
    let d;
    if (s !== void 0 ? d = s() : d = r.value, !l || !d) return;
    d.hasAttribute(bt) && d.removeAttribute(bt);
    const { children: u } = l;
    if (a.showAllItemsBeforeCalculate) for (const R of u) R.hasAttribute(bt) && R.removeAttribute(bt);
    const f = l.offsetWidth, h = [], p = t.tail ? c == null ? void 0 : c() : null;
    let v = p ? p.offsetWidth : 0, m = false;
    const g = l.children.length - (t.tail ? 1 : 0);
    for (let R = 0; R < g - 1; ++R) {
      if (R < 0) continue;
      const S = u[R];
      if (m) {
        S.hasAttribute(bt) || S.setAttribute(bt, "");
        continue;
      } else S.hasAttribute(bt) && S.removeAttribute(bt);
      const I = S.offsetWidth;
      if (v += I, h[R] = I, v > f) {
        const { updateCounter: z } = e;
        for (let b = R; b >= 0; --b) {
          const w = g - 1 - b;
          z !== void 0 ? z(w) : d.textContent = `${w}`;
          const P = d.offsetWidth;
          if (v -= h[b], v + P <= f || b === 0) {
            m = true, R = b - 1, p && (R === -1 ? (p.style.maxWidth = `${f - P}px`, p.style.boxSizing = "border-box") : p.style.maxWidth = "");
            const { onUpdateCount: $ } = e;
            $ && $(w);
            break;
          }
        }
      }
    }
    const { onUpdateOverflow: x } = e;
    m ? x !== void 0 && x(true) : (x !== void 0 && x(false), d.setAttribute(bt, ""));
  }
  const i = bo();
  return Bh.mount({ id: "vueuc/overflow", head: true, anchorMetaName: Al, ssr: i }), st(() => n({ showAllItemsBeforeCalculate: false })), { selfRef: o, counterRef: r, sync: n };
}, render() {
  const { $slots: e } = this;
  return Xt(() => this.sync({ showAllItemsBeforeCalculate: false })), y("div", { class: "v-overflow", ref: "selfRef" }, [za(e, "default"), e.counter ? e.counter() : y("span", { style: { display: "inline-block" }, ref: "counterRef" }), e.tail ? e.tail() : null]);
} });
function Nl(e) {
  return e instanceof HTMLElement;
}
function _l(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const o = e.childNodes[t];
    if (Nl(o) && (Vl(o) || _l(o))) return true;
  }
  return false;
}
function Wl(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const o = e.childNodes[t];
    if (Nl(o) && (Vl(o) || Wl(o))) return true;
  }
  return false;
}
function Vl(e) {
  if (!Fh(e)) return false;
  try {
    e.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === e;
}
function Fh(e) {
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
const jl = ee({ name: "FocusTrap", props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(e) {
  const t = zf(), o = N(null), r = N(null);
  let n = false, i = false;
  const a = typeof document > "u" ? null : document.activeElement;
  function l() {
    return So[So.length - 1] === t;
  }
  function s(m) {
    var g;
    m.code === "Escape" && l() && ((g = e.onEsc) === null || g === void 0 || g.call(e, m));
  }
  st(() => {
    Te(() => e.active, (m) => {
      m ? (u(), he("keydown", document, s)) : (fe("keydown", document, s), n && f());
    }, { immediate: true });
  }), _e(() => {
    fe("keydown", document, s), n && f();
  });
  function c(m) {
    if (!i && l()) {
      const g = d();
      if (g === null || g.contains(Oo(m))) return;
      h("first");
    }
  }
  function d() {
    const m = o.value;
    if (m === null) return null;
    let g = m;
    for (; g = g.nextSibling, !(g === null || g instanceof Element && g.tagName === "DIV"); ) ;
    return g;
  }
  function u() {
    var m;
    if (!e.disabled) {
      if (So.push(t), e.autoFocus) {
        const { initialFocusTo: g } = e;
        g === void 0 ? h("first") : (m = Ni(g)) === null || m === void 0 || m.focus({ preventScroll: true });
      }
      n = true, document.addEventListener("focus", c, true);
    }
  }
  function f() {
    var m;
    if (e.disabled || (document.removeEventListener("focus", c, true), So = So.filter((x) => x !== t), l())) return;
    const { finalFocusTo: g } = e;
    g !== void 0 ? (m = Ni(g)) === null || m === void 0 || m.focus({ preventScroll: true }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = true, a.focus({ preventScroll: true }), i = false);
  }
  function h(m) {
    if (l() && e.active) {
      const g = o.value, x = r.value;
      if (g !== null && x !== null) {
        const R = d();
        if (R == null || R === x) {
          i = true, g.focus({ preventScroll: true }), i = false;
          return;
        }
        i = true;
        const S = m === "first" ? _l(R) : Wl(R);
        i = false, S || (i = true, g.focus({ preventScroll: true }), i = false);
      }
    }
  }
  function p(m) {
    if (i) return;
    const g = d();
    g !== null && (m.relatedTarget !== null && g.contains(m.relatedTarget) ? h("last") : h("first"));
  }
  function v(m) {
    i || (m.relatedTarget !== null && m.relatedTarget === o.value ? h("last") : h("first"));
  }
  return { focusableStartRef: o, focusableEndRef: r, focusableStyle: "position: absolute; height: 0; width: 0;", handleStartFocus: p, handleEndFocus: v };
}, render() {
  const { default: e } = this.$slots;
  if (e === void 0) return null;
  if (this.disabled) return e();
  const { active: t, focusableStyle: o } = this;
  return y(eo, null, [y("div", { "aria-hidden": "true", tabindex: t ? "0" : "-1", ref: "focusableStartRef", style: o, onFocus: this.handleStartFocus }), e(), y("div", { "aria-hidden": "true", style: o, ref: "focusableEndRef", tabindex: t ? "0" : "-1", onFocus: this.handleEndFocus })]);
} });
function ta(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const Lh = /^(\d|\.)+$/, oa = /(\d|\.)+/;
function ir(e, { c: t = 1, offset: o = 0, attachPx: r = true } = {}) {
  if (typeof e == "number") {
    const n = (e + o) * t;
    return n === 0 ? "0" : `${n}px`;
  } else if (typeof e == "string") if (Lh.test(e)) {
    const n = (Number(e) + o) * t;
    return r ? n === 0 ? "0" : `${n}px` : `${n}`;
  } else {
    const n = oa.exec(e);
    return n ? e.replace(oa, String((Number(n[0]) + o) * t)) : e;
  }
  return e;
}
function ra(e) {
  const { left: t, right: o, top: r, bottom: n } = jt(e);
  return `${r} ${t} ${n} ${o}`;
}
let Dr;
function Dh() {
  return Dr === void 0 && (Dr = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Dr;
}
const Gl = /* @__PURE__ */ new WeakSet();
function sx(e) {
  Gl.add(e);
}
function Hh(e) {
  return !Gl.has(e);
}
function Qt(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function cx(e, t, o) {
  console.error(`[naive/${e}]: ${t}`, o);
}
function Nh(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function Ue(e, ...t) {
  if (Array.isArray(e)) e.forEach((o) => Ue(o, ...t));
  else return e(...t);
}
function _h(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function sr(e, t = true, o = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && o.push(ar(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        sr(r, t, o);
        return;
      }
      if (r.type === eo) {
        if (r.children === null) return;
        Array.isArray(r.children) && sr(r.children, t, o);
      } else {
        if (r.type === Cn && t) return;
        o.push(r);
      }
    }
  }), o;
}
function Wh(e, t = "default", o = void 0) {
  const r = e[t];
  if (!r) return Qt("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const n = sr(r(o));
  return n.length === 1 ? n[0] : (Qt("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function Vh(e, t, o) {
  if (!t) return null;
  const r = sr(t(o));
  return r.length === 1 ? r[0] : (Qt("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function Fo(e, t = [], o) {
  const r = {};
  return t.forEach((n) => {
    r[n] = e[n];
  }), Object.assign(r, o);
}
function Fn(e) {
  return Object.keys(e);
}
function dx(e, t = [], o) {
  const r = {};
  return Object.getOwnPropertyNames(e).forEach((i) => {
    t.includes(i) || (r[i] = e[i]);
  }), Object.assign(r, o);
}
function ft(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? ar(e) : typeof e == "number" ? ar(String(e)) : null;
}
function tt(e) {
  return e.some((t) => sc(t) ? !(t.type === Cn || t.type === eo && !tt(t.children)) : true) ? e : null;
}
function na(e, t) {
  return e && tt(e()) || t();
}
function ux(e, t, o) {
  return e && tt(e(t)) || o(t);
}
function Ge(e, t) {
  const o = e && tt(e());
  return t(o || null);
}
function fx(e, t, o) {
  const r = e && tt(e(t));
  return o(r || null);
}
function dn(e) {
  return !(e && tt(e()));
}
const ia = ee({ render() {
  var e, t;
  return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
} }), Et = "n-config-provider", cr = "n";
function mt(e = {}, t = { defaultBordered: true }) {
  const o = ie(Et, null);
  return { inlineThemeDisabled: o == null ? void 0 : o.inlineThemeDisabled, mergedRtlRef: o == null ? void 0 : o.mergedRtlRef, mergedComponentPropsRef: o == null ? void 0 : o.mergedComponentPropsRef, mergedBreakpointsRef: o == null ? void 0 : o.mergedBreakpointsRef, mergedBorderedRef: O(() => {
    var r, n;
    const { bordered: i } = e;
    return i !== void 0 ? i : (n = (r = o == null ? void 0 : o.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && n !== void 0 ? n : true;
  }), mergedClsPrefixRef: o ? o.mergedClsPrefixRef : St(cr), namespaceRef: O(() => o == null ? void 0 : o.mergedNamespaceRef.value) };
}
function Kl() {
  const e = ie(Et, null);
  return e ? e.mergedClsPrefixRef : St(cr);
}
function Rt(e, t, o, r) {
  o || Nh("useThemeClass", "cssVarsRef is not passed");
  const n = ie(Et, null), i = n == null ? void 0 : n.mergedThemeHashRef, a = n == null ? void 0 : n.styleMountTarget, l = N(""), s = bo();
  let c;
  const d = `__${e}`, u = () => {
    let f = d;
    const h = t ? t.value : void 0, p = i == null ? void 0 : i.value;
    p && (f += `-${p}`), h && (f += `-${h}`);
    const { themeOverrides: v, builtinThemeOverrides: m } = r;
    v && (f += `-${ko(JSON.stringify(v))}`), m && (f += `-${ko(JSON.stringify(m))}`), l.value = f, c = () => {
      const g = o.value;
      let x = "";
      for (const R in g) x += `${R}: ${g[R]};`;
      F(`.${f}`, x).mount({ id: f, ssr: s, parent: a }), c = void 0;
    };
  };
  return vo(() => {
    u();
  }), { themeClass: l, onRender: () => {
    c == null ? void 0 : c();
  } };
}
const aa = "n-form-item";
function jh(e, { defaultSize: t = "medium", mergedSize: o, mergedDisabled: r } = {}) {
  const n = ie(aa, null);
  Re(aa, null);
  const i = O(o ? () => o(n) : () => {
    const { size: s } = e;
    if (s) return s;
    if (n) {
      const { mergedSize: c } = n;
      if (c.value !== void 0) return c.value;
    }
    return t;
  }), a = O(r ? () => r(n) : () => {
    const { disabled: s } = e;
    return s !== void 0 ? s : n ? n.disabled.value : false;
  }), l = O(() => {
    const { status: s } = e;
    return s || (n == null ? void 0 : n.mergedValidationStatus.value);
  });
  return _e(() => {
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
const Lo = "naive-ui-style";
function Wo(e, t, o) {
  if (!t) return;
  const r = bo(), n = O(() => {
    const { value: l } = t;
    if (!l) return;
    const s = l[e];
    if (s) return s;
  }), i = ie(Et, null), a = () => {
    vo(() => {
      const { value: l } = o, s = `${l}${e}Rtl`;
      if (hf(s, r)) return;
      const { value: c } = n;
      c && c.style.mount({ id: s, head: true, anchorMetaName: Lo, props: { bPrefix: l ? `.${l}-` : void 0 }, ssr: r, parent: i == null ? void 0 : i.styleMountTarget });
    });
  };
  return r ? a() : Jt(a), n;
}
const to = { fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace", fontWeight: "400", fontWeightStrong: "500", cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)", cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)", cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)", borderRadius: "3px", borderRadiusSmall: "2px", fontSize: "14px", fontSizeMini: "12px", fontSizeTiny: "12px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", lineHeight: "1.6", heightMini: "16px", heightTiny: "22px", heightSmall: "28px", heightMedium: "34px", heightLarge: "40px", heightHuge: "46px" }, { fontSize: Gh, fontFamily: Kh, lineHeight: Uh } = to, Ul = F("body", `
 margin: 0;
 font-size: ${Gh};
 font-family: ${Kh};
 line-height: ${Uh};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [F("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Vo(e, t, o) {
  if (!t) return;
  const r = bo(), n = ie(Et, null), i = () => {
    const a = o.value;
    t.mount({ id: a === void 0 ? e : a + e, head: true, anchorMetaName: Lo, props: { bPrefix: a ? `.${a}-` : void 0 }, ssr: r, parent: n == null ? void 0 : n.styleMountTarget }), (n == null ? void 0 : n.preflightStyleDisabled) || Ul.mount({ id: "n-global", head: true, anchorMetaName: Lo, ssr: r, parent: n == null ? void 0 : n.styleMountTarget });
  };
  r ? i() : Jt(i);
}
function hx(e) {
  return e;
}
function Ce(e, t, o, r, n, i) {
  const a = bo(), l = ie(Et, null);
  if (o) {
    const c = () => {
      const d = i == null ? void 0 : i.value;
      o.mount({ id: d === void 0 ? t : d + t, head: true, props: { bPrefix: d ? `.${d}-` : void 0 }, anchorMetaName: Lo, ssr: a, parent: l == null ? void 0 : l.styleMountTarget }), (l == null ? void 0 : l.preflightStyleDisabled) || Ul.mount({ id: "n-global", head: true, anchorMetaName: Lo, ssr: a, parent: l == null ? void 0 : l.styleMountTarget });
    };
    a ? c() : Jt(c);
  }
  return O(() => {
    var c;
    const { theme: { common: d, self: u, peers: f = {} } = {}, themeOverrides: h = {}, builtinThemeOverrides: p = {} } = n, { common: v, peers: m } = h, { common: g = void 0, [e]: { common: x = void 0, self: R = void 0, peers: S = {} } = {} } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, { common: I = void 0, [e]: z = {} } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, { common: b, peers: w = {} } = z, P = $o({}, d || x || g || r.common, I, b, v), $ = $o((c = u || R || r.self) === null || c === void 0 ? void 0 : c(P), p, z, h);
    return { common: P, self: $, peers: $o({}, r.peers, S, f), peerOverrides: $o({}, p.peers, w, m) };
  });
}
Ce.props = { theme: Object, themeOverrides: Object, builtinThemeOverrides: Object };
const qh = Z("base-icon", `
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
 `)]), ql = ee({ name: "BaseIcon", props: { role: String, ariaLabel: String, ariaDisabled: { type: Boolean, default: void 0 }, ariaHidden: { type: Boolean, default: void 0 }, clsPrefix: { type: String, required: true }, onClick: Function, onMousedown: Function, onMouseup: Function }, setup(e) {
  Vo("-base-icon", qh, ge(e, "clsPrefix"));
}, render() {
  return y("i", { class: `${this.clsPrefix}-base-icon`, onClick: this.onClick, onMousedown: this.onMousedown, onMouseup: this.onMouseup, role: this.role, "aria-label": this.ariaLabel, "aria-hidden": this.ariaHidden, "aria-disabled": this.ariaDisabled }, this.$slots);
} }), Yl = ee({ name: "BaseIconSwitchTransition", setup(e, { slots: t }) {
  const o = mr();
  return () => y(Bt, { name: "icon-switch-transition", appear: o.value }, t);
} });
function jo(e, t) {
  const o = ee({ render() {
    return t();
  } });
  return ee({ name: bd(e), setup() {
    var r;
    const n = (r = ie(Et, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
    return () => {
      var i;
      const a = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e];
      return a ? a() : y(o, null);
    };
  } });
}
const Yh = ee({ name: "ChevronRight", render() {
  return y("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, y("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" }));
} }), Xh = jo("close", () => y("svg", { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true }, y("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, y("g", { fill: "currentColor", "fill-rule": "nonzero" }, y("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))), Zh = jo("error", () => y("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, y("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, y("g", { "fill-rule": "nonzero" }, y("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" }))))), la = jo("info", () => y("svg", { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, y("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, y("g", { "fill-rule": "nonzero" }, y("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" }))))), Qh = jo("success", () => y("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, y("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, y("g", { "fill-rule": "nonzero" }, y("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" }))))), Jh = jo("warning", () => y("svg", { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, y("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, y("g", { "fill-rule": "nonzero" }, y("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" }))))), { cubicBezierEaseInOut: ep } = to;
function un({ originalTransform: e = "", left: t = 0, top: o = 0, transition: r = `all .3s ${ep} !important` } = {}) {
  return [F("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", { transform: `${e} scale(0.75)`, left: t, top: o, opacity: 0 }), F("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", { transform: `scale(1) ${e}`, left: t, top: o, opacity: 1 }), F("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", { transformOrigin: "center", position: "absolute", left: t, top: o, transition: r })];
}
const tp = Z("base-close", `
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
 `), wt("disabled", [F("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), F("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), F("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), F("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), F("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), K("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), K("round", [F("&::before", `
 border-radius: 50%;
 `)])]), Xl = ee({ name: "BaseClose", props: { isButtonTag: { type: Boolean, default: true }, clsPrefix: { type: String, required: true }, disabled: { type: Boolean, default: void 0 }, focusable: { type: Boolean, default: true }, round: Boolean, onClick: Function, absolute: Boolean }, setup(e) {
  return Vo("-base-close", tp, ge(e, "clsPrefix")), () => {
    const { clsPrefix: t, disabled: o, absolute: r, round: n, isButtonTag: i } = e;
    return y(i ? "button" : "div", { type: i ? "button" : void 0, tabindex: o || !e.focusable ? -1 : 0, "aria-disabled": o, "aria-label": "close", role: i ? void 0 : "button", disabled: o, class: [`${t}-base-close`, r && `${t}-base-close--absolute`, o && `${t}-base-close--disabled`, n && `${t}-base-close--round`], onMousedown: (l) => {
      e.focusable || l.preventDefault();
    }, onClick: e.onClick }, y(ql, { clsPrefix: t }, { default: () => y(Xh, null) }));
  };
} }), op = ee({ name: "FadeInExpandTransition", props: { appear: Boolean, group: Boolean, mode: String, onLeave: Function, onAfterLeave: Function, onAfterEnter: Function, width: Boolean, reverse: Boolean }, setup(e, { slots: t }) {
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
    const { group: l, width: s, appear: c, mode: d } = e, u = l ? cc : Bt, f = { name: s ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition", appear: c, onEnter: i, onAfterEnter: a, onBeforeLeave: o, onLeave: r, onAfterLeave: n };
    return l || (f.mode = d), y(u, f, t);
  };
} }), rp = F([F("@keyframes rotator", `
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
 `, [un()]), j("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [un({ left: "50%", top: "50%", originalTransform: "translateX(-50%) translateY(-50%)" })]), j("container", `
 animation: rotator 3s linear infinite both;
 `, [j("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Hr = "1.6s", np = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, ip = ee({ name: "BaseLoading", props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, np), setup(e) {
  Vo("-base-loading", rp, ge(e, "clsPrefix"));
}, render() {
  const { clsPrefix: e, radius: t, strokeWidth: o, stroke: r, scale: n } = this, i = t / n;
  return y("div", { class: `${e}-base-loading`, role: "img", "aria-label": "loading" }, y(Yl, null, { default: () => this.show ? y("div", { key: "icon", class: `${e}-base-loading__transition-wrapper` }, y("div", { class: `${e}-base-loading__container` }, y("svg", { class: `${e}-base-loading__icon`, viewBox: `0 0 ${2 * i} ${2 * i}`, xmlns: "http://www.w3.org/2000/svg", style: { color: r } }, y("g", null, y("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};270 ${i} ${i}`, begin: "0s", dur: Hr, fill: "freeze", repeatCount: "indefinite" }), y("circle", { class: `${e}-base-loading__icon`, fill: "none", stroke: "currentColor", "stroke-width": o, "stroke-linecap": "round", cx: i, cy: i, r: t - o / 2, "stroke-dasharray": 5.67 * t, "stroke-dashoffset": 18.48 * t }, y("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`, begin: "0s", dur: Hr, fill: "freeze", repeatCount: "indefinite" }), y("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * t};${1.42 * t};${5.67 * t}`, begin: "0s", dur: Hr, fill: "freeze", repeatCount: "indefinite" })))))) : y("div", { key: "placeholder", class: `${e}-base-loading__placeholder` }, this.$slots) }));
} }), { cubicBezierEaseInOut: sa } = to;
function Zl({ name: e = "fade-in", enterDuration: t = "0.2s", leaveDuration: o = "0.2s", enterCubicBezier: r = sa, leaveCubicBezier: n = sa } = {}) {
  return [F(`&.${e}-transition-enter-active`, { transition: `all ${t} ${r}!important` }), F(`&.${e}-transition-leave-active`, { transition: `all ${o} ${n}!important` }), F(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, { opacity: 0 }), F(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, { opacity: 1 })];
}
const X = { neutralBase: "#FFF", neutralInvertBase: "#000", neutralTextBase: "#000", neutralPopover: "#fff", neutralCard: "#fff", neutralModal: "#fff", neutralBody: "#fff", alpha1: "0.82", alpha2: "0.72", alpha3: "0.38", alpha4: "0.24", alpha5: "0.18", alphaClose: "0.6", alphaDisabled: "0.5", alphaAvatar: "0.2", alphaProgressRail: ".08", alphaInput: "0", alphaScrollbar: "0.25", alphaScrollbarHover: "0.4", primaryHover: "#36ad6a", primaryDefault: "#18a058", primaryActive: "#0c7a43", primarySuppl: "#36ad6a", infoHover: "#4098fc", infoDefault: "#2080f0", infoActive: "#1060c9", infoSuppl: "#4098fc", errorHover: "#de576d", errorDefault: "#d03050", errorActive: "#ab1f3f", errorSuppl: "#de576d", warningHover: "#fcb040", warningDefault: "#f0a020", warningActive: "#c97c10", warningSuppl: "#fcb040", successHover: "#36ad6a", successDefault: "#18a058", successActive: "#0c7a43", successSuppl: "#36ad6a" }, ap = Lt(X.neutralBase), Ql = Lt(X.neutralInvertBase), lp = `rgba(${Ql.slice(0, 3).join(", ")}, `;
function ca(e) {
  return `${lp + String(e)})`;
}
function De(e) {
  const t = Array.from(Ql);
  return t[3] = Number(e), _(ap, t);
}
const L = Object.assign(Object.assign({ name: "common" }, to), { baseColor: X.neutralBase, primaryColor: X.primaryDefault, primaryColorHover: X.primaryHover, primaryColorPressed: X.primaryActive, primaryColorSuppl: X.primarySuppl, infoColor: X.infoDefault, infoColorHover: X.infoHover, infoColorPressed: X.infoActive, infoColorSuppl: X.infoSuppl, successColor: X.successDefault, successColorHover: X.successHover, successColorPressed: X.successActive, successColorSuppl: X.successSuppl, warningColor: X.warningDefault, warningColorHover: X.warningHover, warningColorPressed: X.warningActive, warningColorSuppl: X.warningSuppl, errorColor: X.errorDefault, errorColorHover: X.errorHover, errorColorPressed: X.errorActive, errorColorSuppl: X.errorSuppl, textColorBase: X.neutralTextBase, textColor1: "rgb(31, 34, 37)", textColor2: "rgb(51, 54, 57)", textColor3: "rgb(118, 124, 130)", textColorDisabled: De(X.alpha4), placeholderColor: De(X.alpha4), placeholderColorDisabled: De(X.alpha5), iconColor: De(X.alpha4), iconColorHover: Yo(De(X.alpha4), { lightness: 0.75 }), iconColorPressed: Yo(De(X.alpha4), { lightness: 0.9 }), iconColorDisabled: De(X.alpha5), opacity1: X.alpha1, opacity2: X.alpha2, opacity3: X.alpha3, opacity4: X.alpha4, opacity5: X.alpha5, dividerColor: "rgb(239, 239, 245)", borderColor: "rgb(224, 224, 230)", closeIconColor: De(Number(X.alphaClose)), closeIconColorHover: De(Number(X.alphaClose)), closeIconColorPressed: De(Number(X.alphaClose)), closeColorHover: "rgba(0, 0, 0, .09)", closeColorPressed: "rgba(0, 0, 0, .13)", clearColor: De(X.alpha4), clearColorHover: Yo(De(X.alpha4), { lightness: 0.75 }), clearColorPressed: Yo(De(X.alpha4), { lightness: 0.9 }), scrollbarColor: ca(X.alphaScrollbar), scrollbarColorHover: ca(X.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: De(X.alphaProgressRail), railColor: "rgb(219, 219, 223)", popoverColor: X.neutralPopover, tableColor: X.neutralCard, cardColor: X.neutralCard, modalColor: X.neutralModal, bodyColor: X.neutralBody, tagColor: "#eee", avatarColor: De(X.alphaAvatar), invertedColor: "rgb(0, 20, 40)", inputColor: De(X.alphaInput), codeColor: "rgb(244, 244, 248)", tabColor: "rgb(247, 247, 250)", actionColor: "rgb(250, 250, 252)", tableHeaderColor: "rgb(250, 250, 252)", hoverColor: "rgb(243, 243, 245)", tableColorHover: "rgba(0, 0, 100, 0.03)", tableColorStriped: "rgba(0, 0, 100, 0.02)", pressedColor: "rgb(237, 237, 239)", opacityDisabled: X.alphaDisabled, inputColorDisabled: "rgb(250, 250, 252)", buttonColor2: "rgba(46, 51, 56, .05)", buttonColor2Hover: "rgba(46, 51, 56, .09)", buttonColor2Pressed: "rgba(46, 51, 56, .13)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), sp = { railInsetHorizontalBottom: "auto 2px 4px 2px", railInsetHorizontalTop: "4px 2px auto 2px", railInsetVerticalRight: "2px 4px 2px auto", railInsetVerticalLeft: "2px auto 2px 4px", railColor: "transparent" };
function cp(e) {
  const { scrollbarColor: t, scrollbarColorHover: o, scrollbarHeight: r, scrollbarWidth: n, scrollbarBorderRadius: i } = e;
  return Object.assign(Object.assign({}, sp), { height: r, width: n, borderRadius: i, color: t, colorHover: o });
}
const Fe = { name: "Scrollbar", common: L, self: cp }, dp = Z("scrollbar", `
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
 `, [K("horizontal", `
 height: var(--n-scrollbar-height);
 `, [F(">", [j("scrollbar", `
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
 `, [F(">", [j("scrollbar", `
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
 `), K("disabled", [F(">", [j("scrollbar", "pointer-events: none;")])]), F(">", [j("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Zl(), F("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), up = Object.assign(Object.assign({}, Ce.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: "hover" }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: "right" }, xPlacement: { type: String, default: "bottom" } }), Jl = ee({ name: "Scrollbar", props: up, inheritAttrs: false, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o, mergedRtlRef: r } = mt(e), n = Wo("Scrollbar", r, t), i = N(null), a = N(null), l = N(null), s = N(null), c = N(null), d = N(null), u = N(null), f = N(null), h = N(null), p = N(null), v = N(null), m = N(0), g = N(0), x = N(false), R = N(false);
  let S = false, I = false, z, b, w = 0, P = 0, $ = 0, E = 0;
  const C = Vf(), k = Ce("Scrollbar", "-scrollbar", dp, Fe, e, t), H = O(() => {
    const { value: D } = f, { value: U } = d, { value: J } = p;
    return D === null || U === null || J === null ? 0 : Math.min(D, J * D / U + Pi(k.value.self.width) * 1.5);
  }), A = O(() => `${H.value}px`), W = O(() => {
    const { value: D } = h, { value: U } = u, { value: J } = v;
    return D === null || U === null || J === null ? 0 : J * D / U + Pi(k.value.self.height) * 1.5;
  }), B = O(() => `${W.value}px`), q = O(() => {
    const { value: D } = f, { value: U } = m, { value: J } = d, { value: ve } = p;
    if (D === null || J === null || ve === null) return 0;
    {
      const ze = J - D;
      return ze ? U / ze * (ve - H.value) : 0;
    }
  }), le = O(() => `${q.value}px`), se = O(() => {
    const { value: D } = h, { value: U } = g, { value: J } = u, { value: ve } = v;
    if (D === null || J === null || ve === null) return 0;
    {
      const ze = J - D;
      return ze ? U / ze * (ve - W.value) : 0;
    }
  }), me = O(() => `${se.value}px`), ce = O(() => {
    const { value: D } = f, { value: U } = d;
    return D !== null && U !== null && U > D;
  }), Le = O(() => {
    const { value: D } = h, { value: U } = u;
    return D !== null && U !== null && U > D;
  }), He = O(() => {
    const { trigger: D } = e;
    return D === "none" || x.value;
  }), rt = O(() => {
    const { trigger: D } = e;
    return D === "none" || R.value;
  }), ne = O(() => {
    const { container: D } = e;
    return D ? D() : a.value;
  }), T = O(() => {
    const { content: D } = e;
    return D ? D() : l.value;
  }), V = (D, U) => {
    if (!e.scrollable) return;
    if (typeof D == "number") {
      te(D, U ?? 0, 0, false, "auto");
      return;
    }
    const { left: J, top: ve, index: ze, elSize: Ve, position: it, behavior: we, el: Je, debounce: Tt = true } = D;
    (J !== void 0 || ve !== void 0) && te(J ?? 0, ve ?? 0, 0, false, we), Je !== void 0 ? te(0, Je.offsetTop, Je.offsetHeight, Tt, we) : ze !== void 0 && Ve !== void 0 ? te(0, ze * Ve, Ve, Tt, we) : it === "bottom" ? te(0, Number.MAX_SAFE_INTEGER, 0, false, we) : it === "top" && te(0, 0, 0, false, we);
  }, M = Xf(() => {
    e.container || V({ top: m.value, left: g.value });
  }), Y = () => {
    M.isDeactivated || _t();
  }, re = (D) => {
    if (M.isDeactivated) return;
    const { onResize: U } = e;
    U && U(D), _t();
  }, xe = (D, U) => {
    if (!e.scrollable) return;
    const { value: J } = ne;
    J && (typeof D == "object" ? J.scrollBy(D) : J.scrollBy(D, U || 0));
  };
  function te(D, U, J, ve, ze) {
    const { value: Ve } = ne;
    if (Ve) {
      if (ve) {
        const { scrollTop: it, offsetHeight: we } = Ve;
        if (U > it) {
          U + J <= it + we || Ve.scrollTo({ left: D, top: U + J - we, behavior: ze });
          return;
        }
      }
      Ve.scrollTo({ left: D, top: U, behavior: ze });
    }
  }
  function oe() {
    wr(), Se(), _t();
  }
  function ye() {
    nt();
  }
  function nt() {
    Me(), Sr();
  }
  function Me() {
    b !== void 0 && window.clearTimeout(b), b = window.setTimeout(() => {
      R.value = false;
    }, e.duration);
  }
  function Sr() {
    z !== void 0 && window.clearTimeout(z), z = window.setTimeout(() => {
      x.value = false;
    }, e.duration);
  }
  function wr() {
    z !== void 0 && window.clearTimeout(z), x.value = true;
  }
  function Se() {
    b !== void 0 && window.clearTimeout(b), R.value = true;
  }
  function Oe(D) {
    const { onScroll: U } = e;
    U && U(D), Nt();
  }
  function Nt() {
    const { value: D } = ne;
    D && (m.value = D.scrollTop, g.value = D.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1));
  }
  function Ts() {
    const { value: D } = T;
    D && (d.value = D.offsetHeight, u.value = D.offsetWidth);
    const { value: U } = ne;
    U && (f.value = U.offsetHeight, h.value = U.offsetWidth);
    const { value: J } = c, { value: ve } = s;
    J && (v.value = J.offsetWidth), ve && (p.value = ve.offsetHeight);
  }
  function Un() {
    const { value: D } = ne;
    D && (m.value = D.scrollTop, g.value = D.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1), f.value = D.offsetHeight, h.value = D.offsetWidth, d.value = D.scrollHeight, u.value = D.scrollWidth);
    const { value: U } = c, { value: J } = s;
    U && (v.value = U.offsetWidth), J && (p.value = J.offsetHeight);
  }
  function _t() {
    e.scrollable && (e.useUnifiedContainer ? Un() : (Ts(), Nt()));
  }
  function qn(D) {
    var U;
    return !(!((U = i.value) === null || U === void 0) && U.contains(Oo(D)));
  }
  function Is(D) {
    D.preventDefault(), D.stopPropagation(), I = true, he("mousemove", window, Yn, true), he("mouseup", window, Xn, true), P = g.value, $ = (n == null ? void 0 : n.value) ? window.innerWidth - D.clientX : D.clientX;
  }
  function Yn(D) {
    if (!I) return;
    z !== void 0 && window.clearTimeout(z), b !== void 0 && window.clearTimeout(b);
    const { value: U } = h, { value: J } = u, { value: ve } = W;
    if (U === null || J === null) return;
    const Ve = ((n == null ? void 0 : n.value) ? window.innerWidth - D.clientX - $ : D.clientX - $) * (J - U) / (U - ve), it = J - U;
    let we = P + Ve;
    we = Math.min(it, we), we = Math.max(we, 0);
    const { value: Je } = ne;
    if (Je) {
      Je.scrollLeft = we * ((n == null ? void 0 : n.value) ? -1 : 1);
      const { internalOnUpdateScrollLeft: Tt } = e;
      Tt && Tt(we);
    }
  }
  function Xn(D) {
    D.preventDefault(), D.stopPropagation(), fe("mousemove", window, Yn, true), fe("mouseup", window, Xn, true), I = false, _t(), qn(D) && nt();
  }
  function zs(D) {
    D.preventDefault(), D.stopPropagation(), S = true, he("mousemove", window, $r, true), he("mouseup", window, Pr, true), w = m.value, E = D.clientY;
  }
  function $r(D) {
    if (!S) return;
    z !== void 0 && window.clearTimeout(z), b !== void 0 && window.clearTimeout(b);
    const { value: U } = f, { value: J } = d, { value: ve } = H;
    if (U === null || J === null) return;
    const Ve = (D.clientY - E) * (J - U) / (U - ve), it = J - U;
    let we = w + Ve;
    we = Math.min(it, we), we = Math.max(we, 0);
    const { value: Je } = ne;
    Je && (Je.scrollTop = we);
  }
  function Pr(D) {
    D.preventDefault(), D.stopPropagation(), fe("mousemove", window, $r, true), fe("mouseup", window, Pr, true), S = false, _t(), qn(D) && nt();
  }
  vo(() => {
    const { value: D } = Le, { value: U } = ce, { value: J } = t, { value: ve } = c, { value: ze } = s;
    ve && (D ? ve.classList.remove(`${J}-scrollbar-rail--disabled`) : ve.classList.add(`${J}-scrollbar-rail--disabled`)), ze && (U ? ze.classList.remove(`${J}-scrollbar-rail--disabled`) : ze.classList.add(`${J}-scrollbar-rail--disabled`));
  }), st(() => {
    e.container || _t();
  }), _e(() => {
    z !== void 0 && window.clearTimeout(z), b !== void 0 && window.clearTimeout(b), fe("mousemove", window, $r, true), fe("mouseup", window, Pr, true);
  });
  const Zn = O(() => {
    const { common: { cubicBezierEaseInOut: D }, self: { color: U, colorHover: J, height: ve, width: ze, borderRadius: Ve, railInsetHorizontalTop: it, railInsetHorizontalBottom: we, railInsetVerticalRight: Je, railInsetVerticalLeft: Tt, railColor: As } } = k.value, { top: ks, right: Ms, bottom: Os, left: Bs } = jt(it), { top: Fs, right: Ls, bottom: Ds, left: Hs } = jt(we), { top: Ns, right: _s, bottom: Ws, left: Vs } = jt((n == null ? void 0 : n.value) ? ra(Je) : Je), { top: js, right: Gs, bottom: Ks, left: Us } = jt((n == null ? void 0 : n.value) ? ra(Tt) : Tt);
    return { "--n-scrollbar-bezier": D, "--n-scrollbar-color": U, "--n-scrollbar-color-hover": J, "--n-scrollbar-border-radius": Ve, "--n-scrollbar-width": ze, "--n-scrollbar-height": ve, "--n-scrollbar-rail-top-horizontal-top": ks, "--n-scrollbar-rail-right-horizontal-top": Ms, "--n-scrollbar-rail-bottom-horizontal-top": Os, "--n-scrollbar-rail-left-horizontal-top": Bs, "--n-scrollbar-rail-top-horizontal-bottom": Fs, "--n-scrollbar-rail-right-horizontal-bottom": Ls, "--n-scrollbar-rail-bottom-horizontal-bottom": Ds, "--n-scrollbar-rail-left-horizontal-bottom": Hs, "--n-scrollbar-rail-top-vertical-right": Ns, "--n-scrollbar-rail-right-vertical-right": _s, "--n-scrollbar-rail-bottom-vertical-right": Ws, "--n-scrollbar-rail-left-vertical-right": Vs, "--n-scrollbar-rail-top-vertical-left": js, "--n-scrollbar-rail-right-vertical-left": Gs, "--n-scrollbar-rail-bottom-vertical-left": Ks, "--n-scrollbar-rail-left-vertical-left": Us, "--n-scrollbar-rail-color": As };
  }), oo = o ? Rt("scrollbar", void 0, Zn, e) : void 0;
  return Object.assign(Object.assign({}, { scrollTo: V, scrollBy: xe, sync: _t, syncUnifiedContainer: Un, handleMouseEnterWrapper: oe, handleMouseLeaveWrapper: ye }), { mergedClsPrefix: t, rtlEnabled: n, containerScrollTop: m, wrapperRef: i, containerRef: a, contentRef: l, yRailRef: s, xRailRef: c, needYBar: ce, needXBar: Le, yBarSizePx: A, xBarSizePx: B, yBarTopPx: le, xBarLeftPx: me, isShowXBar: He, isShowYBar: rt, isIos: C, handleScroll: Oe, handleContentResize: Y, handleContainerResize: re, handleYScrollMouseDown: zs, handleXScrollMouseDown: Is, cssVars: o ? void 0 : Zn, themeClass: oo == null ? void 0 : oo.themeClass, onRender: oo == null ? void 0 : oo.onRender });
}, render() {
  var e;
  const { $slots: t, mergedClsPrefix: o, triggerDisplayManually: r, rtlEnabled: n, internalHoistYRail: i, yPlacement: a, xPlacement: l, xScrollable: s } = this;
  if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
  const c = this.trigger === "none", d = (h, p) => y("div", { ref: "yRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--vertical`, `${o}-scrollbar-rail--vertical--${a}`, h], "data-scrollbar-rail": true, style: [p || "", this.verticalRailStyle], "aria-hidden": true }, y(c ? ia : Bt, c ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? y("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), u = () => {
    var h, p;
    return (h = this.onRender) === null || h === void 0 || h.call(this), y("div", Pt(this.$attrs, { role: "none", ref: "wrapperRef", class: [`${o}-scrollbar`, this.themeClass, n && `${o}-scrollbar--rtl`], style: this.cssVars, onMouseenter: r ? void 0 : this.handleMouseEnterWrapper, onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (p = t.default) === null || p === void 0 ? void 0 : p.call(t) : y("div", { role: "none", ref: "containerRef", class: [`${o}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, y(ea, { onResize: this.handleContentResize }, { default: () => y("div", { ref: "contentRef", role: "none", style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle], class: [`${o}-scrollbar-content`, this.contentClass] }, t) })), i ? null : d(void 0, void 0), s && y("div", { ref: "xRailRef", class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--horizontal`, `${o}-scrollbar-rail--horizontal--${l}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, y(c ? ia : Bt, c ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? y("div", { class: `${o}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: n ? this.xBarLeftPx : void 0, left: n ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, f = this.container ? u() : y(ea, { onResize: this.handleContainerResize }, { default: u });
  return i ? y(eo, null, f, d(this.themeClass, this.cssVars)) : f;
} }), es = Jl;
function da(e) {
  return Array.isArray(e) ? e : [e];
}
const fn = { STOP: "STOP" };
function ts(e, t) {
  const o = t(e);
  e.children !== void 0 && o !== fn.STOP && e.children.forEach((r) => ts(r, t));
}
function fp(e, t = {}) {
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
function hp(e, t) {
  const { isLeaf: o } = e;
  return o !== void 0 ? o : !t(e);
}
function pp(e) {
  return e.children;
}
function gp(e) {
  return e.key;
}
function mp() {
  return false;
}
function vp(e, t) {
  const { isLeaf: o } = e;
  return !(o === false && !Array.isArray(t(e)));
}
function bp(e) {
  return e.disabled === true;
}
function xp(e, t) {
  return e.isLeaf === false && !Array.isArray(t(e));
}
function Nr(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function _r(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function Cp(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) || o.add(r);
  }), Array.from(o);
}
function yp(e, t) {
  const o = new Set(e);
  return t.forEach((r) => {
    o.has(r) && o.delete(r);
  }), Array.from(o);
}
function Sp(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function px(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((o, r) => {
    t.set(o.key, r);
  }), (o) => {
    var r;
    return (r = t.get(o)) !== null && r !== void 0 ? r : null;
  };
}
class wp extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function $p(e, t, o, r) {
  return dr(t.concat(e), o, r, false);
}
function Pp(e, t) {
  const o = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const n = t.treeNodeMap.get(r);
    if (n !== void 0) {
      let i = n.parent;
      for (; i !== null && !(i.disabled || o.has(i.key)); ) o.add(i.key), i = i.parent;
    }
  }), o;
}
function Ep(e, t, o, r) {
  const n = dr(t, o, r, false), i = dr(e, o, r, true), a = Pp(e, o), l = [];
  return n.forEach((s) => {
    (i.has(s) || a.has(s)) && l.push(s);
  }), l.forEach((s) => n.delete(s)), n;
}
function Wr(e, t) {
  const { checkedKeys: o, keysToCheck: r, keysToUncheck: n, indeterminateKeys: i, cascade: a, leafOnly: l, checkStrategy: s, allowNotLoaded: c } = e;
  if (!a) return r !== void 0 ? { checkedKeys: Cp(o, r), indeterminateKeys: Array.from(i) } : n !== void 0 ? { checkedKeys: yp(o, n), indeterminateKeys: Array.from(i) } : { checkedKeys: Array.from(o), indeterminateKeys: Array.from(i) };
  const { levelTreeNodeMap: d } = t;
  let u;
  n !== void 0 ? u = Ep(n, o, t, c) : r !== void 0 ? u = $p(r, o, t, c) : u = dr(o, t, c, false);
  const f = s === "parent", h = s === "child" || l, p = u, v = /* @__PURE__ */ new Set(), m = Math.max.apply(null, Array.from(d.keys()));
  for (let g = m; g >= 0; g -= 1) {
    const x = g === 0, R = d.get(g);
    for (const S of R) {
      if (S.isLeaf) continue;
      const { key: I, shallowLoaded: z } = S;
      if (h && z && S.children.forEach(($) => {
        !$.disabled && !$.isLeaf && $.shallowLoaded && p.has($.key) && p.delete($.key);
      }), S.disabled || !z) continue;
      let b = true, w = false, P = true;
      for (const $ of S.children) {
        const E = $.key;
        if (!$.disabled) {
          if (P && (P = false), p.has(E)) w = true;
          else if (v.has(E)) {
            w = true, b = false;
            break;
          } else if (b = false, w) break;
        }
      }
      b && !P ? (f && S.children.forEach(($) => {
        !$.disabled && p.has($.key) && p.delete($.key);
      }), p.add(I)) : w && v.add(I), x && h && p.has(I) && p.delete(I);
    }
  }
  return { checkedKeys: Array.from(p), indeterminateKeys: Array.from(v) };
}
function dr(e, t, o, r) {
  const { treeNodeMap: n, getChildren: i } = t, a = /* @__PURE__ */ new Set(), l = new Set(e);
  return e.forEach((s) => {
    const c = n.get(s);
    c !== void 0 && ts(c, (d) => {
      if (d.disabled) return fn.STOP;
      const { key: u } = d;
      if (!a.has(u) && (a.add(u), l.add(u), xp(d.rawNode, i))) {
        if (r) return fn.STOP;
        if (!o) throw new wp();
      }
    });
  }), l;
}
function Rp(e, { includeGroup: t = false, includeSelf: o = true }, r) {
  var n;
  const i = r.treeNodeMap;
  let a = e == null ? null : (n = i.get(e)) !== null && n !== void 0 ? n : null;
  const l = { keyPath: [], treeNodePath: [], treeNode: a };
  if (a == null ? void 0 : a.ignored) return l.treeNode = null, l;
  for (; a; ) !a.ignored && (t || !a.isGroup) && l.treeNodePath.push(a), a = a.parent;
  return l.treeNodePath.reverse(), o || l.treeNodePath.pop(), l.keyPath = l.treeNodePath.map((s) => s.key), l;
}
function Tp(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Ip(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n + 1) % r] : n === o.length - 1 ? null : o[n + 1];
}
function ua(e, t, { loop: o = false, includeDisabled: r = false } = {}) {
  const n = t === "prev" ? zp : Ip, i = { reverse: t === "prev" };
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
        const d = Ln(c, i);
        d !== null ? l = d : s(n(c, o));
      } else {
        const d = n(c, false);
        if (d !== null) s(d);
        else {
          const u = Ap(c);
          (u == null ? void 0 : u.isGroup) ? s(n(u, o)) : o && s(n(c, true));
        }
      }
    }
  }
  return s(e), l;
}
function zp(e, t) {
  const o = e.siblings, r = o.length, { index: n } = e;
  return t ? o[(n - 1 + r) % r] : n === 0 ? null : o[n - 1];
}
function Ap(e) {
  return e.parent;
}
function Ln(e, t = {}) {
  const { reverse: o = false } = t, { children: r } = e;
  if (r) {
    const { length: n } = r, i = o ? n - 1 : 0, a = o ? -1 : n, l = o ? -1 : 1;
    for (let s = i; s !== a; s += l) {
      const c = r[s];
      if (!c.disabled && !c.ignored) if (c.isGroup) {
        const d = Ln(c, t);
        if (d !== null) return d;
      } else return c;
    }
  }
  return null;
}
const kp = { getChild() {
  return this.ignored ? null : Ln(this);
}, getParent() {
  const { parent: e } = this;
  return (e == null ? void 0 : e.isGroup) ? e.getParent() : e;
}, getNext(e = {}) {
  return ua(this, "next", e);
}, getPrev(e = {}) {
  return ua(this, "prev", e);
} };
function Mp(e, t) {
  const o = t ? new Set(t) : void 0, r = [];
  function n(i) {
    i.forEach((a) => {
      r.push(a), !(a.isLeaf || !a.children || a.ignored) && (a.isGroup || o === void 0 || o.has(a.key)) && n(a.children);
    });
  }
  return n(e), r;
}
function Op(e, t) {
  const o = e.key;
  for (; t; ) {
    if (t.key === o) return true;
    t = t.parent;
  }
  return false;
}
function os(e, t, o, r, n, i = null, a = 0) {
  const l = [];
  return e.forEach((s, c) => {
    var d;
    const u = Object.create(r);
    if (u.rawNode = s, u.siblings = l, u.level = a, u.index = c, u.isFirstChild = c === 0, u.isLastChild = c + 1 === e.length, u.parent = i, !u.ignored) {
      const f = n(s);
      Array.isArray(f) && (u.children = os(f, t, o, r, n, u, a + 1));
    }
    l.push(u), t.set(u.key, u), o.has(a) || o.set(a, []), (d = o.get(a)) === null || d === void 0 || d.push(u);
  }), l;
}
function Bp(e, t = {}) {
  var o;
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), { getDisabled: i = bp, getIgnored: a = mp, getIsGroup: l = Sp, getKey: s = gp } = t, c = (o = t.getChildren) !== null && o !== void 0 ? o : pp, d = t.ignoreEmptyChildren ? (S) => {
    const I = c(S);
    return Array.isArray(I) ? I.length ? I : null : I;
  } : c, u = Object.assign({ get key() {
    return s(this.rawNode);
  }, get disabled() {
    return i(this.rawNode);
  }, get isGroup() {
    return l(this.rawNode);
  }, get isLeaf() {
    return hp(this.rawNode, d);
  }, get shallowLoaded() {
    return vp(this.rawNode, d);
  }, get ignored() {
    return a(this.rawNode);
  }, contains(S) {
    return Op(this, S);
  } }, kp), f = os(e, r, n, u, d);
  function h(S) {
    if (S == null) return null;
    const I = r.get(S);
    return I && !I.isGroup && !I.ignored ? I : null;
  }
  function p(S) {
    if (S == null) return null;
    const I = r.get(S);
    return I && !I.ignored ? I : null;
  }
  function v(S, I) {
    const z = p(S);
    return z ? z.getPrev(I) : null;
  }
  function m(S, I) {
    const z = p(S);
    return z ? z.getNext(I) : null;
  }
  function g(S) {
    const I = p(S);
    return I ? I.getParent() : null;
  }
  function x(S) {
    const I = p(S);
    return I ? I.getChild() : null;
  }
  const R = { treeNodes: f, treeNodeMap: r, levelTreeNodeMap: n, maxLevel: Math.max(...n.keys()), getChildren: d, getFlattenedNodes(S) {
    return Mp(f, S);
  }, getNode: h, getPrev: v, getNext: m, getParent: g, getChild: x, getFirstAvailableNode() {
    return Tp(f);
  }, getPath(S, I = {}) {
    return Rp(S, I, R);
  }, getCheckedKeys(S, I = {}) {
    const { cascade: z = true, leafOnly: b = false, checkStrategy: w = "all", allowNotLoaded: P = false } = I;
    return Wr({ checkedKeys: Nr(S), indeterminateKeys: _r(S), cascade: z, leafOnly: b, checkStrategy: w, allowNotLoaded: P }, R);
  }, check(S, I, z = {}) {
    const { cascade: b = true, leafOnly: w = false, checkStrategy: P = "all", allowNotLoaded: $ = false } = z;
    return Wr({ checkedKeys: Nr(I), indeterminateKeys: _r(I), keysToCheck: S == null ? [] : da(S), cascade: b, leafOnly: w, checkStrategy: P, allowNotLoaded: $ }, R);
  }, uncheck(S, I, z = {}) {
    const { cascade: b = true, leafOnly: w = false, checkStrategy: P = "all", allowNotLoaded: $ = false } = z;
    return Wr({ checkedKeys: Nr(I), indeterminateKeys: _r(I), keysToUncheck: S == null ? [] : da(S), cascade: b, leafOnly: w, checkStrategy: P, allowNotLoaded: $ }, R);
  }, getNonLeafKeys(S = {}) {
    return fp(f, S);
  } };
  return R;
}
const Fp = { iconSizeTiny: "28px", iconSizeSmall: "34px", iconSizeMedium: "40px", iconSizeLarge: "46px", iconSizeHuge: "52px" };
function Lp(e) {
  const { textColorDisabled: t, iconColor: o, textColor2: r, fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: l, fontSizeHuge: s } = e;
  return Object.assign(Object.assign({}, Fp), { fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: a, fontSizeLarge: l, fontSizeHuge: s, textColor: t, iconColor: o, extraTextColor: r });
}
const Dt = { name: "Empty", common: L, self: Lp }, Dp = { height: "calc(var(--n-option-height) * 7.6)", paddingTiny: "4px 0", paddingSmall: "4px 0", paddingMedium: "4px 0", paddingLarge: "4px 0", paddingHuge: "4px 0", optionPaddingTiny: "0 12px", optionPaddingSmall: "0 12px", optionPaddingMedium: "0 12px", optionPaddingLarge: "0 12px", optionPaddingHuge: "0 12px", loadingSize: "18px" };
function Hp(e) {
  const { borderRadius: t, popoverColor: o, textColor3: r, dividerColor: n, textColor2: i, primaryColorPressed: a, textColorDisabled: l, primaryColor: s, opacityDisabled: c, hoverColor: d, fontSizeTiny: u, fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p, fontSizeHuge: v, heightTiny: m, heightSmall: g, heightMedium: x, heightLarge: R, heightHuge: S } = e;
  return Object.assign(Object.assign({}, Dp), { optionFontSizeTiny: u, optionFontSizeSmall: f, optionFontSizeMedium: h, optionFontSizeLarge: p, optionFontSizeHuge: v, optionHeightTiny: m, optionHeightSmall: g, optionHeightMedium: x, optionHeightLarge: R, optionHeightHuge: S, borderRadius: t, color: o, groupHeaderTextColor: r, actionDividerColor: n, optionTextColor: i, optionTextColorPressed: a, optionTextColorDisabled: l, optionTextColorActive: s, optionOpacityDisabled: c, optionCheckColor: s, optionColorPending: d, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: d, actionTextColor: i, loadingColor: s });
}
const Go = { name: "InternalSelectMenu", common: L, peers: { Scrollbar: Fe, Empty: Dt }, self: Hp }, { cubicBezierEaseIn: fa, cubicBezierEaseOut: ha } = to;
function rs({ transformOrigin: e = "inherit", duration: t = ".2s", enterScale: o = ".9", originalTransform: r = "", originalTransition: n = "" } = {}) {
  return [F("&.fade-in-scale-up-transition-leave-active", { transformOrigin: e, transition: `opacity ${t} ${fa}, transform ${t} ${fa} ${n && `,${n}`}` }), F("&.fade-in-scale-up-transition-enter-active", { transformOrigin: e, transition: `opacity ${t} ${ha}, transform ${t} ${ha} ${n && `,${n}`}` }), F("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", { opacity: 0, transform: `${r} scale(${o})` }), F("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", { opacity: 1, transform: `${r} scale(1)` })];
}
const Np = { space: "6px", spaceArrow: "10px", arrowOffset: "10px", arrowOffsetVertical: "10px", arrowHeight: "6px", padding: "8px 14px" };
function _p(e) {
  const { boxShadow2: t, popoverColor: o, textColor2: r, borderRadius: n, fontSize: i, dividerColor: a } = e;
  return Object.assign(Object.assign({}, Np), { fontSize: i, borderRadius: n, color: o, dividerColor: a, textColor: r, boxShadow: t });
}
const Ht = { name: "Popover", common: L, peers: { Scrollbar: Fe }, self: _p }, Vr = { top: "bottom", bottom: "top", left: "right", right: "left" }, Ae = "var(--n-arrow-height) * 1.414", Wp = F([Z("popover", `
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
 `)]), wt("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [wt("scrollable", [wt("show-header-or-footer", "padding: var(--n-padding);")])]), j("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), j("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), K("scrollable, show-header-or-footer", [j("content", `
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
 left: calc(${xt("top-start")} - var(--v-offset-left));
 `), et("top", `
 top: calc(${Ae} / -2);
 transform: translateX(calc(${Ae} / -2)) rotate(45deg);
 left: 50%;
 `), et("top-end", `
 top: calc(${Ae} / -2);
 right: calc(${xt("top-end")} + var(--v-offset-left));
 `), et("bottom-start", `
 bottom: calc(${Ae} / -2);
 left: calc(${xt("bottom-start")} - var(--v-offset-left));
 `), et("bottom", `
 bottom: calc(${Ae} / -2);
 transform: translateX(calc(${Ae} / -2)) rotate(45deg);
 left: 50%;
 `), et("bottom-end", `
 bottom: calc(${Ae} / -2);
 right: calc(${xt("bottom-end")} + var(--v-offset-left));
 `), et("left-start", `
 left: calc(${Ae} / -2);
 top: calc(${xt("left-start")} - var(--v-offset-top));
 `), et("left", `
 left: calc(${Ae} / -2);
 transform: translateY(calc(${Ae} / -2)) rotate(45deg);
 top: 50%;
 `), et("left-end", `
 left: calc(${Ae} / -2);
 bottom: calc(${xt("left-end")} + var(--v-offset-top));
 `), et("right-start", `
 right: calc(${Ae} / -2);
 top: calc(${xt("right-start")} - var(--v-offset-top));
 `), et("right", `
 right: calc(${Ae} / -2);
 transform: translateY(calc(${Ae} / -2)) rotate(45deg);
 top: 50%;
 `), et("right-end", `
 right: calc(${Ae} / -2);
 bottom: calc(${xt("right-end")} + var(--v-offset-top));
 `), ...Wd({ top: ["right-start", "left-start"], right: ["top-end", "bottom-end"], bottom: ["right-end", "left-end"], left: ["top-start", "bottom-start"] }, (e, t) => {
  const o = ["right", "left"].includes(t), r = o ? "width" : "height";
  return e.map((n) => {
    const i = n.split("-")[1] === "end", l = `calc((${`var(--v-target-${r}, 0px)`} - ${Ae}) / 2)`, s = xt(n);
    return F(`[v-placement="${n}"] >`, [Z("popover-shared", [K("center-arrow", [Z("popover-arrow", `${t}: calc(max(${l}, ${s}) ${i ? "+" : "-"} var(--v-offset-${o ? "left" : "top"}));`)])])]);
  });
})]);
function xt(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function et(e, t) {
  const o = e.split("-")[0], r = ["top", "bottom"].includes(o) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return F(`[v-placement="${e}"] >`, [Z("popover-shared", `
 margin-${Vr[o]}: var(--n-space);
 `, [K("show-arrow", `
 margin-${Vr[o]}: var(--n-space-arrow);
 `), K("overlap", `
 margin: 0;
 `), bf("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${Vr[o]}: auto;
 ${r}
 `, [Z("popover-arrow", t)])])]);
}
const ns = Object.assign(Object.assign({}, Ce.props), { to: go.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function is({ arrowClass: e, arrowStyle: t, arrowWrapperClass: o, arrowWrapperStyle: r, clsPrefix: n }) {
  return y("div", { key: "__popover-arrow__", style: r, class: [`${n}-popover-arrow-wrapper`, o] }, y("div", { class: [`${n}-popover-arrow`, e], style: t }));
}
const Vp = ee({ name: "PopoverBody", inheritAttrs: false, props: ns, setup(e, { slots: t, attrs: o }) {
  const { namespaceRef: r, mergedClsPrefixRef: n, inlineThemeDisabled: i, mergedRtlRef: a } = mt(e), l = Ce("Popover", "-popover", Wp, Ht, e, n), s = Wo("Popover", a, n), c = N(null), d = ie("NPopover"), u = N(null), f = N(e.show), h = N(false);
  vo(() => {
    const { show: P } = e;
    P && !Dh() && !e.internalDeactivateImmediately && (h.value = true);
  });
  const p = O(() => {
    const { trigger: P, onClickoutside: $ } = e, E = [], { positionManuallyRef: { value: C } } = d;
    return C || (P === "click" && !$ && E.push([sn, z, void 0, { capture: true }]), P === "hover" && E.push([Jf, I])), $ && E.push([sn, z, void 0, { capture: true }]), (e.displayDirective === "show" || e.animated && h.value) && E.push([qr, e.show]), E;
  }), v = O(() => {
    const { common: { cubicBezierEaseInOut: P, cubicBezierEaseIn: $, cubicBezierEaseOut: E }, self: { space: C, spaceArrow: k, padding: H, fontSize: A, textColor: W, dividerColor: B, color: q, boxShadow: le, borderRadius: se, arrowHeight: me, arrowOffset: ce, arrowOffsetVertical: Le } } = l.value;
    return { "--n-box-shadow": le, "--n-bezier": P, "--n-bezier-ease-in": $, "--n-bezier-ease-out": E, "--n-font-size": A, "--n-text-color": W, "--n-color": q, "--n-divider-color": B, "--n-border-radius": se, "--n-arrow-height": me, "--n-arrow-offset": ce, "--n-arrow-offset-vertical": Le, "--n-padding": H, "--n-space": C, "--n-space-arrow": k };
  }), m = O(() => {
    const P = e.width === "trigger" ? void 0 : ir(e.width), $ = [];
    P && $.push({ width: P });
    const { maxWidth: E, minWidth: C } = e;
    return E && $.push({ maxWidth: ir(E) }), C && $.push({ maxWidth: ir(C) }), i || $.push(v.value), $;
  }), g = i ? Rt("popover", void 0, v, e) : void 0;
  d.setBodyInstance({ syncPosition: x }), _e(() => {
    d.setBodyInstance(null);
  }), Te(ge(e, "show"), (P) => {
    e.animated || (P ? f.value = true : f.value = false);
  });
  function x() {
    var P;
    (P = c.value) === null || P === void 0 || P.syncPosition();
  }
  function R(P) {
    e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(P);
  }
  function S(P) {
    e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(P);
  }
  function I(P) {
    e.trigger === "hover" && !b().contains(Oo(P)) && d.handleMouseMoveOutside(P);
  }
  function z(P) {
    (e.trigger === "click" && !b().contains(Oo(P)) || e.onClickoutside) && d.handleClickOutside(P);
  }
  function b() {
    return d.getTriggerElement();
  }
  Re(No, u), Re(vr, null), Re(br, null);
  function w() {
    if (g == null ? void 0 : g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value)) return null;
    let $;
    const E = d.internalRenderBodyRef.value, { value: C } = n;
    if (E) $ = E([`${C}-popover-shared`, (s == null ? void 0 : s.value) && `${C}-popover--rtl`, g == null ? void 0 : g.themeClass.value, e.overlap && `${C}-popover-shared--overlap`, e.showArrow && `${C}-popover-shared--show-arrow`, e.arrowPointToCenter && `${C}-popover-shared--center-arrow`], u, m.value, R, S);
    else {
      const { value: k } = d.extraClassRef, { internalTrapFocus: H } = e, A = !dn(t.header) || !dn(t.footer), W = () => {
        var B, q;
        const le = A ? y(eo, null, Ge(t.header, (ce) => ce ? y("div", { class: [`${C}-popover__header`, e.headerClass], style: e.headerStyle }, ce) : null), Ge(t.default, (ce) => ce ? y("div", { class: [`${C}-popover__content`, e.contentClass], style: e.contentStyle }, t) : null), Ge(t.footer, (ce) => ce ? y("div", { class: [`${C}-popover__footer`, e.footerClass], style: e.footerStyle }, ce) : null)) : e.scrollable ? (B = t.default) === null || B === void 0 ? void 0 : B.call(t) : y("div", { class: [`${C}-popover__content`, e.contentClass], style: e.contentStyle }, t), se = e.scrollable ? y(es, { themeOverrides: l.value.peerOverrides.Scrollbar, theme: l.value.peers.Scrollbar, contentClass: A ? void 0 : `${C}-popover__content ${(q = e.contentClass) !== null && q !== void 0 ? q : ""}`, contentStyle: A ? void 0 : e.contentStyle }, { default: () => le }) : le, me = e.showArrow ? is({ arrowClass: e.arrowClass, arrowStyle: e.arrowStyle, arrowWrapperClass: e.arrowWrapperClass, arrowWrapperStyle: e.arrowWrapperStyle, clsPrefix: C }) : null;
        return [se, me];
      };
      $ = y("div", Pt({ class: [`${C}-popover`, `${C}-popover-shared`, (s == null ? void 0 : s.value) && `${C}-popover--rtl`, g == null ? void 0 : g.themeClass.value, k.map((B) => `${C}-${B}`), { [`${C}-popover--scrollable`]: e.scrollable, [`${C}-popover--show-header-or-footer`]: A, [`${C}-popover--raw`]: e.raw, [`${C}-popover-shared--overlap`]: e.overlap, [`${C}-popover-shared--show-arrow`]: e.showArrow, [`${C}-popover-shared--center-arrow`]: e.arrowPointToCenter }], ref: u, style: m.value, onKeydown: d.handleKeydown, onMouseenter: R, onMouseleave: S }, o), H ? y(jl, { active: e.show, autoFocus: true }, { default: W }) : W());
    }
    return Zt($, p.value);
  }
  return { displayed: h, namespace: r, isMounted: d.isMountedRef, zIndex: d.zIndexRef, followerRef: c, adjustedTo: go(e), followerEnabled: f, renderContentNode: w };
}, render() {
  return y(Ml, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === go.tdkey }, { default: () => this.animated ? y(Bt, { name: "popover-transition", appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var e;
    (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), jp = Object.keys(ns), Gp = { focus: ["onFocus", "onBlur"], click: ["onClick"], hover: ["onMouseenter", "onMouseleave"], manual: [], nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"] };
function Kp(e, t, o) {
  Gp[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const n = e.props[r], i = o[r];
    n ? e.props[r] = (...a) => {
      n(...a), i(...a);
    } : e.props[r] = i;
  });
}
const xr = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: "hover" }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: "top" }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: "if" }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: go.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number }, Up = Object.assign(Object.assign(Object.assign({}, Ce.props), xr), { internalOnAfterLeave: Function, internalRenderBody: Function }), as = ee({ name: "Popover", inheritAttrs: false, props: Up, slots: Object, __popover__: true, setup(e) {
  const t = mr(), o = N(null), r = O(() => e.show), n = N(e.defaultShow), i = wl(r, n), a = ot(() => e.disabled ? false : i.value), l = () => {
    if (e.disabled) return true;
    const { getDisabled: A } = e;
    return !!(A == null ? void 0 : A());
  }, s = () => l() ? false : i.value, c = $l(e, ["arrow", "showArrow"]), d = O(() => e.overlap ? false : c.value);
  let u = null;
  const f = N(null), h = N(null), p = ot(() => e.x !== void 0 && e.y !== void 0);
  function v(A) {
    const { "onUpdate:show": W, onUpdateShow: B, onShow: q, onHide: le } = e;
    n.value = A, W && Ue(W, A), B && Ue(B, A), A && q && Ue(q, true), A && le && Ue(le, false);
  }
  function m() {
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
  function R() {
    const A = l();
    if (e.trigger === "focus" && !A) {
      if (s()) return;
      v(true);
    }
  }
  function S() {
    const A = l();
    if (e.trigger === "focus" && !A) {
      if (!s()) return;
      v(false);
    }
  }
  function I() {
    const A = l();
    if (e.trigger === "hover" && !A) {
      if (x(), f.value !== null || s()) return;
      const W = () => {
        v(true), f.value = null;
      }, { delay: B } = e;
      B === 0 ? W() : f.value = window.setTimeout(W, B);
    }
  }
  function z() {
    const A = l();
    if (e.trigger === "hover" && !A) {
      if (g(), h.value !== null || !s()) return;
      const W = () => {
        v(false), h.value = null;
      }, { duration: B } = e;
      B === 0 ? W() : h.value = window.setTimeout(W, B);
    }
  }
  function b() {
    z();
  }
  function w(A) {
    var W;
    s() && (e.trigger === "click" && (g(), x(), v(false)), (W = e.onClickoutside) === null || W === void 0 || W.call(e, A));
  }
  function P() {
    if (e.trigger === "click" && !l()) {
      g(), x();
      const A = !s();
      v(A);
    }
  }
  function $(A) {
    e.internalTrapFocus && A.key === "Escape" && (g(), x(), v(false));
  }
  function E(A) {
    n.value = A;
  }
  function C() {
    var A;
    return (A = o.value) === null || A === void 0 ? void 0 : A.targetRef;
  }
  function k(A) {
    u = A;
  }
  return Re("NPopover", { getTriggerElement: C, handleKeydown: $, handleMouseEnter: I, handleMouseLeave: z, handleClickOutside: w, handleMouseMoveOutside: b, setBodyInstance: k, positionManuallyRef: p, isMountedRef: t, zIndexRef: ge(e, "zIndex"), extraClassRef: ge(e, "internalExtraClass"), internalRenderBodyRef: ge(e, "internalRenderBody") }), vo(() => {
    i.value && l() && v(false);
  }), { binderInstRef: o, positionManually: p, mergedShowConsideringDisabledProp: a, uncontrolledShow: n, mergedShowArrow: d, getMergedShow: s, setShow: E, handleClick: P, handleMouseEnter: I, handleMouseLeave: z, handleFocus: R, handleBlur: S, syncPosition: m };
}, render() {
  var e;
  const { positionManually: t, $slots: o } = this;
  let r, n = false;
  if (!t && (r = Wh(o, "trigger"), r)) {
    r = Aa(r), r = r.type === dc ? y("span", [r]) : r;
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
      Kp(r, a ? "nested" : t ? "manual" : this.trigger, s);
    }
  }
  return y(Il, { ref: "binderInstRef", syncTarget: !n, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    const i = this.getMergedShow();
    return [this.internalTrapFocus && i ? Zt(y("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 } }), [[On, { enabled: i, zIndex: this.zIndex }]]) : null, t ? null : y(zl, null, { default: () => r }), y(Vp, Fo(this.$props, jp, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: i })), { default: () => {
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
} }), qp = { closeIconSizeTiny: "12px", closeIconSizeSmall: "12px", closeIconSizeMedium: "14px", closeIconSizeLarge: "14px", closeSizeTiny: "16px", closeSizeSmall: "16px", closeSizeMedium: "18px", closeSizeLarge: "18px", padding: "0 7px", closeMargin: "0 0 0 4px" };
function Yp(e) {
  const { textColor2: t, primaryColorHover: o, primaryColorPressed: r, primaryColor: n, infoColor: i, successColor: a, warningColor: l, errorColor: s, baseColor: c, borderColor: d, opacityDisabled: u, tagColor: f, closeIconColor: h, closeIconColorHover: p, closeIconColorPressed: v, borderRadiusSmall: m, fontSizeMini: g, fontSizeTiny: x, fontSizeSmall: R, fontSizeMedium: S, heightMini: I, heightTiny: z, heightSmall: b, heightMedium: w, closeColorHover: P, closeColorPressed: $, buttonColor2Hover: E, buttonColor2Pressed: C, fontWeightStrong: k } = e;
  return Object.assign(Object.assign({}, qp), { closeBorderRadius: m, heightTiny: I, heightSmall: z, heightMedium: b, heightLarge: w, borderRadius: m, opacityDisabled: u, fontSizeTiny: g, fontSizeSmall: x, fontSizeMedium: R, fontSizeLarge: S, fontWeightStrong: k, textColorCheckable: t, textColorHoverCheckable: t, textColorPressedCheckable: t, textColorChecked: c, colorCheckable: "#0000", colorHoverCheckable: E, colorPressedCheckable: C, colorChecked: n, colorCheckedHover: o, colorCheckedPressed: r, border: `1px solid ${d}`, textColor: t, color: f, colorBordered: "rgb(250, 250, 252)", closeIconColor: h, closeIconColorHover: p, closeIconColorPressed: v, closeColorHover: P, closeColorPressed: $, borderPrimary: `1px solid ${G(n, { alpha: 0.3 })}`, textColorPrimary: n, colorPrimary: G(n, { alpha: 0.12 }), colorBorderedPrimary: G(n, { alpha: 0.1 }), closeIconColorPrimary: n, closeIconColorHoverPrimary: n, closeIconColorPressedPrimary: n, closeColorHoverPrimary: G(n, { alpha: 0.12 }), closeColorPressedPrimary: G(n, { alpha: 0.18 }), borderInfo: `1px solid ${G(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: G(i, { alpha: 0.12 }), colorBorderedInfo: G(i, { alpha: 0.1 }), closeIconColorInfo: i, closeIconColorHoverInfo: i, closeIconColorPressedInfo: i, closeColorHoverInfo: G(i, { alpha: 0.12 }), closeColorPressedInfo: G(i, { alpha: 0.18 }), borderSuccess: `1px solid ${G(a, { alpha: 0.3 })}`, textColorSuccess: a, colorSuccess: G(a, { alpha: 0.12 }), colorBorderedSuccess: G(a, { alpha: 0.1 }), closeIconColorSuccess: a, closeIconColorHoverSuccess: a, closeIconColorPressedSuccess: a, closeColorHoverSuccess: G(a, { alpha: 0.12 }), closeColorPressedSuccess: G(a, { alpha: 0.18 }), borderWarning: `1px solid ${G(l, { alpha: 0.35 })}`, textColorWarning: l, colorWarning: G(l, { alpha: 0.15 }), colorBorderedWarning: G(l, { alpha: 0.12 }), closeIconColorWarning: l, closeIconColorHoverWarning: l, closeIconColorPressedWarning: l, closeColorHoverWarning: G(l, { alpha: 0.12 }), closeColorPressedWarning: G(l, { alpha: 0.18 }), borderError: `1px solid ${G(s, { alpha: 0.23 })}`, textColorError: s, colorError: G(s, { alpha: 0.1 }), colorBorderedError: G(s, { alpha: 0.08 }), closeIconColorError: s, closeIconColorHoverError: s, closeIconColorPressedError: s, closeColorHoverError: G(s, { alpha: 0.12 }), closeColorPressedError: G(s, { alpha: 0.18 }) });
}
const ls = { name: "Tag", common: L, self: Yp }, Xp = { paddingSingle: "0 26px 0 12px", paddingMultiple: "3px 26px 0 12px", clearSize: "16px", arrowSize: "16px" };
function Zp(e) {
  const { borderRadius: t, textColor2: o, textColorDisabled: r, inputColor: n, inputColorDisabled: i, primaryColor: a, primaryColorHover: l, warningColor: s, warningColorHover: c, errorColor: d, errorColorHover: u, borderColor: f, iconColor: h, iconColorDisabled: p, clearColor: v, clearColorHover: m, clearColorPressed: g, placeholderColor: x, placeholderColorDisabled: R, fontSizeTiny: S, fontSizeSmall: I, fontSizeMedium: z, fontSizeLarge: b, heightTiny: w, heightSmall: P, heightMedium: $, heightLarge: E, fontWeight: C } = e;
  return Object.assign(Object.assign({}, Xp), { fontSizeTiny: S, fontSizeSmall: I, fontSizeMedium: z, fontSizeLarge: b, heightTiny: w, heightSmall: P, heightMedium: $, heightLarge: E, borderRadius: t, fontWeight: C, textColor: o, textColorDisabled: r, placeholderColor: x, placeholderColorDisabled: R, color: n, colorDisabled: i, colorActive: n, border: `1px solid ${f}`, borderHover: `1px solid ${l}`, borderActive: `1px solid ${a}`, borderFocus: `1px solid ${l}`, boxShadowHover: "none", boxShadowActive: `0 0 0 2px ${G(a, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${G(a, { alpha: 0.2 })}`, caretColor: a, arrowColor: h, arrowColorDisabled: p, loadingColor: a, borderWarning: `1px solid ${s}`, borderHoverWarning: `1px solid ${c}`, borderActiveWarning: `1px solid ${s}`, borderFocusWarning: `1px solid ${c}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 0 2px ${G(s, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${G(s, { alpha: 0.2 })}`, colorActiveWarning: n, caretColorWarning: s, borderError: `1px solid ${d}`, borderHoverError: `1px solid ${u}`, borderActiveError: `1px solid ${d}`, borderFocusError: `1px solid ${u}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 0 2px ${G(d, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${G(d, { alpha: 0.2 })}`, colorActiveError: n, caretColorError: d, clearColor: v, clearColorHover: m, clearColorPressed: g });
}
const Dn = { name: "InternalSelection", common: L, peers: { Popover: Ht }, self: Zp }, { cubicBezierEaseInOut: At } = to;
function Qp({ duration: e = ".2s", delay: t = ".1s" } = {}) {
  return [F("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }), F("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), F("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${At},
 max-width ${e} ${At} ${t},
 margin-left ${e} ${At} ${t},
 margin-right ${e} ${At} ${t};
 `), F("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${At} ${t},
 max-width ${e} ${At},
 margin-left ${e} ${At},
 margin-right ${e} ${At};
 `)];
}
const Jp = Z("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), eg = ee({ name: "BaseWave", props: { clsPrefix: { type: String, required: true } }, setup(e) {
  Vo("-base-wave", Jp, ge(e, "clsPrefix"));
  const t = N(null), o = N(false);
  let r = null;
  return _e(() => {
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
} }), tg = { iconMargin: "11px 8px 0 12px", iconMarginRtl: "11px 12px 0 8px", iconSize: "24px", closeIconSize: "16px", closeSize: "20px", closeMargin: "13px 14px 0 0", closeMarginRtl: "13px 0 0 14px", padding: "13px" };
function og(e) {
  const { lineHeight: t, borderRadius: o, fontWeightStrong: r, baseColor: n, dividerColor: i, actionColor: a, textColor1: l, textColor2: s, closeColorHover: c, closeColorPressed: d, closeIconColor: u, closeIconColorHover: f, closeIconColorPressed: h, infoColor: p, successColor: v, warningColor: m, errorColor: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, tg), { fontSize: x, lineHeight: t, titleFontWeight: r, borderRadius: o, border: `1px solid ${i}`, color: a, titleTextColor: l, iconColor: s, contentTextColor: s, closeBorderRadius: o, closeColorHover: c, closeColorPressed: d, closeIconColor: u, closeIconColorHover: f, closeIconColorPressed: h, borderInfo: `1px solid ${_(n, G(p, { alpha: 0.25 }))}`, colorInfo: _(n, G(p, { alpha: 0.08 })), titleTextColorInfo: l, iconColorInfo: p, contentTextColorInfo: s, closeColorHoverInfo: c, closeColorPressedInfo: d, closeIconColorInfo: u, closeIconColorHoverInfo: f, closeIconColorPressedInfo: h, borderSuccess: `1px solid ${_(n, G(v, { alpha: 0.25 }))}`, colorSuccess: _(n, G(v, { alpha: 0.08 })), titleTextColorSuccess: l, iconColorSuccess: v, contentTextColorSuccess: s, closeColorHoverSuccess: c, closeColorPressedSuccess: d, closeIconColorSuccess: u, closeIconColorHoverSuccess: f, closeIconColorPressedSuccess: h, borderWarning: `1px solid ${_(n, G(m, { alpha: 0.33 }))}`, colorWarning: _(n, G(m, { alpha: 0.08 })), titleTextColorWarning: l, iconColorWarning: m, contentTextColorWarning: s, closeColorHoverWarning: c, closeColorPressedWarning: d, closeIconColorWarning: u, closeIconColorHoverWarning: f, closeIconColorPressedWarning: h, borderError: `1px solid ${_(n, G(g, { alpha: 0.25 }))}`, colorError: _(n, G(g, { alpha: 0.08 })), titleTextColorError: l, iconColorError: g, contentTextColorError: s, closeColorHoverError: c, closeColorPressedError: d, closeIconColorError: u, closeIconColorHoverError: f, closeIconColorPressedError: h });
}
const rg = { name: "Alert", common: L, self: og }, { cubicBezierEaseInOut: dt, cubicBezierEaseOut: ng, cubicBezierEaseIn: ig } = to;
function gx({ overflow: e = "hidden", duration: t = ".3s", originalTransition: o = "", leavingDelay: r = "0s", foldPadding: n = false, enterToProps: i = void 0, leaveToProps: a = void 0, reverse: l = false } = {}) {
  const s = l ? "leave" : "enter", c = l ? "enter" : "leave";
  return [F(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${s}-to`, Object.assign(Object.assign({}, i), { opacity: 1 })), F(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${s}-from`, Object.assign(Object.assign({}, a), { opacity: 0, marginTop: "0 !important", marginBottom: "0 !important", paddingTop: n ? "0 !important" : void 0, paddingBottom: n ? "0 !important" : void 0 })), F(`&.fade-in-height-expand-transition-${c}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${dt} ${r},
 opacity ${t} ${ng} ${r},
 margin-top ${t} ${dt} ${r},
 margin-bottom ${t} ${dt} ${r},
 padding-top ${t} ${dt} ${r},
 padding-bottom ${t} ${dt} ${r}
 ${o ? `,${o}` : ""}
 `), F(`&.fade-in-height-expand-transition-${s}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${dt},
 opacity ${t} ${ig},
 margin-top ${t} ${dt},
 margin-bottom ${t} ${dt},
 padding-top ${t} ${dt},
 padding-bottom ${t} ${dt}
 ${o ? `,${o}` : ""}
 `)];
}
const ag = { linkFontSize: "13px", linkPadding: "0 0 0 16px", railWidth: "4px" };
function lg(e) {
  const { borderRadius: t, railColor: o, primaryColor: r, primaryColorHover: n, primaryColorPressed: i, textColor2: a } = e;
  return Object.assign(Object.assign({}, ag), { borderRadius: t, railColor: o, railColorActive: r, linkColor: G(r, { alpha: 0.15 }), linkTextColor: a, linkTextColorHover: n, linkTextColorPressed: i, linkTextColorActive: r });
}
const sg = { name: "Anchor", common: L, self: lg }, cg = _o && "chrome" in window;
_o && navigator.userAgent.includes("Firefox");
const dg = _o && navigator.userAgent.includes("Safari") && !cg, ug = { paddingTiny: "0 8px", paddingSmall: "0 10px", paddingMedium: "0 12px", paddingLarge: "0 14px", clearSize: "16px" };
function fg(e) {
  const { textColor2: t, textColor3: o, textColorDisabled: r, primaryColor: n, primaryColorHover: i, inputColor: a, inputColorDisabled: l, borderColor: s, warningColor: c, warningColorHover: d, errorColor: u, errorColorHover: f, borderRadius: h, lineHeight: p, fontSizeTiny: v, fontSizeSmall: m, fontSizeMedium: g, fontSizeLarge: x, heightTiny: R, heightSmall: S, heightMedium: I, heightLarge: z, actionColor: b, clearColor: w, clearColorHover: P, clearColorPressed: $, placeholderColor: E, placeholderColorDisabled: C, iconColor: k, iconColorDisabled: H, iconColorHover: A, iconColorPressed: W, fontWeight: B } = e;
  return Object.assign(Object.assign({}, ug), { fontWeight: B, countTextColorDisabled: r, countTextColor: o, heightTiny: R, heightSmall: S, heightMedium: I, heightLarge: z, fontSizeTiny: v, fontSizeSmall: m, fontSizeMedium: g, fontSizeLarge: x, lineHeight: p, lineHeightTextarea: p, borderRadius: h, iconSize: "16px", groupLabelColor: b, groupLabelTextColor: t, textColor: t, textColorDisabled: r, textDecorationColor: t, caretColor: n, placeholderColor: E, placeholderColorDisabled: C, color: a, colorDisabled: l, colorFocus: a, groupLabelBorder: `1px solid ${s}`, border: `1px solid ${s}`, borderHover: `1px solid ${i}`, borderDisabled: `1px solid ${s}`, borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 0 2px ${G(n, { alpha: 0.2 })}`, loadingColor: n, loadingColorWarning: c, borderWarning: `1px solid ${c}`, borderHoverWarning: `1px solid ${d}`, colorFocusWarning: a, borderFocusWarning: `1px solid ${d}`, boxShadowFocusWarning: `0 0 0 2px ${G(c, { alpha: 0.2 })}`, caretColorWarning: c, loadingColorError: u, borderError: `1px solid ${u}`, borderHoverError: `1px solid ${f}`, colorFocusError: a, borderFocusError: `1px solid ${f}`, boxShadowFocusError: `0 0 0 2px ${G(u, { alpha: 0.2 })}`, caretColorError: u, clearColor: w, clearColorHover: P, clearColorPressed: $, iconColor: k, iconColorDisabled: H, iconColorHover: A, iconColorPressed: W, suffixTextColor: t });
}
const Qe = { name: "Input", common: L, peers: { Scrollbar: Fe }, self: fg };
function hg(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const pg = { name: "AutoComplete", common: L, peers: { InternalSelectMenu: Go, Input: Qe }, self: hg };
function gg(e) {
  const { borderRadius: t, avatarColor: o, cardColor: r, fontSize: n, heightTiny: i, heightSmall: a, heightMedium: l, heightLarge: s, heightHuge: c, modalColor: d, popoverColor: u } = e;
  return { borderRadius: t, fontSize: n, border: `2px solid ${r}`, heightTiny: i, heightSmall: a, heightMedium: l, heightLarge: s, heightHuge: c, color: _(r, o), colorModal: _(d, o), colorPopover: _(u, o) };
}
const ss = { name: "Avatar", common: L, self: gg };
function mg() {
  return { gap: "-12px" };
}
const vg = { name: "AvatarGroup", common: L, peers: { Avatar: ss }, self: mg }, bg = { width: "44px", height: "44px", borderRadius: "22px", iconSize: "26px" };
function xg(e) {
  const { popoverColor: t, textColor2: o, primaryColorHover: r, primaryColorPressed: n } = e;
  return Object.assign(Object.assign({}, bg), { color: t, textColor: o, iconColor: o, iconColorHover: r, iconColorPressed: n, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
}
const Cg = { name: "BackTop", common: L, self: xg };
function yg(e) {
  const { errorColor: t, infoColor: o, successColor: r, warningColor: n, fontFamily: i } = e;
  return { color: t, colorInfo: o, colorSuccess: r, colorError: t, colorWarning: n, fontSize: "12px", fontFamily: i };
}
const Sg = { name: "Badge", common: L, self: yg }, wg = { fontWeightActive: "400" };
function $g(e) {
  const { fontSize: t, textColor3: o, textColor2: r, borderRadius: n, buttonColor2Hover: i, buttonColor2Pressed: a } = e;
  return Object.assign(Object.assign({}, wg), { fontSize: t, itemLineHeight: "1.25", itemTextColor: o, itemTextColorHover: r, itemTextColorPressed: r, itemTextColorActive: r, itemBorderRadius: n, itemColorHover: i, itemColorPressed: a, separatorColor: o });
}
const Pg = { name: "Breadcrumb", common: L, self: $g };
function Wt(e) {
  return _(e, [255, 255, 255, 0.16]);
}
function or(e) {
  return _(e, [0, 0, 0, 0.12]);
}
const Eg = "n-button-group", Rg = { paddingTiny: "0 6px", paddingSmall: "0 10px", paddingMedium: "0 14px", paddingLarge: "0 18px", paddingRoundTiny: "0 10px", paddingRoundSmall: "0 14px", paddingRoundMedium: "0 18px", paddingRoundLarge: "0 22px", iconMarginTiny: "6px", iconMarginSmall: "6px", iconMarginMedium: "6px", iconMarginLarge: "6px", iconSizeTiny: "14px", iconSizeSmall: "18px", iconSizeMedium: "18px", iconSizeLarge: "20px", rippleDuration: ".6s" };
function Tg(e) {
  const { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadius: i, fontSizeTiny: a, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: c, opacityDisabled: d, textColor2: u, textColor3: f, primaryColorHover: h, primaryColorPressed: p, borderColor: v, primaryColor: m, baseColor: g, infoColor: x, infoColorHover: R, infoColorPressed: S, successColor: I, successColorHover: z, successColorPressed: b, warningColor: w, warningColorHover: P, warningColorPressed: $, errorColor: E, errorColorHover: C, errorColorPressed: k, fontWeight: H, buttonColor2: A, buttonColor2Hover: W, buttonColor2Pressed: B, fontWeightStrong: q } = e;
  return Object.assign(Object.assign({}, Rg), { heightTiny: t, heightSmall: o, heightMedium: r, heightLarge: n, borderRadiusTiny: i, borderRadiusSmall: i, borderRadiusMedium: i, borderRadiusLarge: i, fontSizeTiny: a, fontSizeSmall: l, fontSizeMedium: s, fontSizeLarge: c, opacityDisabled: d, colorOpacitySecondary: "0.16", colorOpacitySecondaryHover: "0.22", colorOpacitySecondaryPressed: "0.28", colorSecondary: A, colorSecondaryHover: W, colorSecondaryPressed: B, colorTertiary: A, colorTertiaryHover: W, colorTertiaryPressed: B, colorQuaternary: "#0000", colorQuaternaryHover: W, colorQuaternaryPressed: B, color: "#0000", colorHover: "#0000", colorPressed: "#0000", colorFocus: "#0000", colorDisabled: "#0000", textColor: u, textColorTertiary: f, textColorHover: h, textColorPressed: p, textColorFocus: h, textColorDisabled: u, textColorText: u, textColorTextHover: h, textColorTextPressed: p, textColorTextFocus: h, textColorTextDisabled: u, textColorGhost: u, textColorGhostHover: h, textColorGhostPressed: p, textColorGhostFocus: h, textColorGhostDisabled: u, border: `1px solid ${v}`, borderHover: `1px solid ${h}`, borderPressed: `1px solid ${p}`, borderFocus: `1px solid ${h}`, borderDisabled: `1px solid ${v}`, rippleColor: m, colorPrimary: m, colorHoverPrimary: h, colorPressedPrimary: p, colorFocusPrimary: h, colorDisabledPrimary: m, textColorPrimary: g, textColorHoverPrimary: g, textColorPressedPrimary: g, textColorFocusPrimary: g, textColorDisabledPrimary: g, textColorTextPrimary: m, textColorTextHoverPrimary: h, textColorTextPressedPrimary: p, textColorTextFocusPrimary: h, textColorTextDisabledPrimary: u, textColorGhostPrimary: m, textColorGhostHoverPrimary: h, textColorGhostPressedPrimary: p, textColorGhostFocusPrimary: h, textColorGhostDisabledPrimary: m, borderPrimary: `1px solid ${m}`, borderHoverPrimary: `1px solid ${h}`, borderPressedPrimary: `1px solid ${p}`, borderFocusPrimary: `1px solid ${h}`, borderDisabledPrimary: `1px solid ${m}`, rippleColorPrimary: m, colorInfo: x, colorHoverInfo: R, colorPressedInfo: S, colorFocusInfo: R, colorDisabledInfo: x, textColorInfo: g, textColorHoverInfo: g, textColorPressedInfo: g, textColorFocusInfo: g, textColorDisabledInfo: g, textColorTextInfo: x, textColorTextHoverInfo: R, textColorTextPressedInfo: S, textColorTextFocusInfo: R, textColorTextDisabledInfo: u, textColorGhostInfo: x, textColorGhostHoverInfo: R, textColorGhostPressedInfo: S, textColorGhostFocusInfo: R, textColorGhostDisabledInfo: x, borderInfo: `1px solid ${x}`, borderHoverInfo: `1px solid ${R}`, borderPressedInfo: `1px solid ${S}`, borderFocusInfo: `1px solid ${R}`, borderDisabledInfo: `1px solid ${x}`, rippleColorInfo: x, colorSuccess: I, colorHoverSuccess: z, colorPressedSuccess: b, colorFocusSuccess: z, colorDisabledSuccess: I, textColorSuccess: g, textColorHoverSuccess: g, textColorPressedSuccess: g, textColorFocusSuccess: g, textColorDisabledSuccess: g, textColorTextSuccess: I, textColorTextHoverSuccess: z, textColorTextPressedSuccess: b, textColorTextFocusSuccess: z, textColorTextDisabledSuccess: u, textColorGhostSuccess: I, textColorGhostHoverSuccess: z, textColorGhostPressedSuccess: b, textColorGhostFocusSuccess: z, textColorGhostDisabledSuccess: I, borderSuccess: `1px solid ${I}`, borderHoverSuccess: `1px solid ${z}`, borderPressedSuccess: `1px solid ${b}`, borderFocusSuccess: `1px solid ${z}`, borderDisabledSuccess: `1px solid ${I}`, rippleColorSuccess: I, colorWarning: w, colorHoverWarning: P, colorPressedWarning: $, colorFocusWarning: P, colorDisabledWarning: w, textColorWarning: g, textColorHoverWarning: g, textColorPressedWarning: g, textColorFocusWarning: g, textColorDisabledWarning: g, textColorTextWarning: w, textColorTextHoverWarning: P, textColorTextPressedWarning: $, textColorTextFocusWarning: P, textColorTextDisabledWarning: u, textColorGhostWarning: w, textColorGhostHoverWarning: P, textColorGhostPressedWarning: $, textColorGhostFocusWarning: P, textColorGhostDisabledWarning: w, borderWarning: `1px solid ${w}`, borderHoverWarning: `1px solid ${P}`, borderPressedWarning: `1px solid ${$}`, borderFocusWarning: `1px solid ${P}`, borderDisabledWarning: `1px solid ${w}`, rippleColorWarning: w, colorError: E, colorHoverError: C, colorPressedError: k, colorFocusError: C, colorDisabledError: E, textColorError: g, textColorHoverError: g, textColorPressedError: g, textColorFocusError: g, textColorDisabledError: g, textColorTextError: E, textColorTextHoverError: C, textColorTextPressedError: k, textColorTextFocusError: C, textColorTextDisabledError: u, textColorGhostError: E, textColorGhostHoverError: C, textColorGhostPressedError: k, textColorGhostFocusError: C, textColorGhostDisabledError: E, borderError: `1px solid ${E}`, borderHoverError: `1px solid ${C}`, borderPressedError: `1px solid ${k}`, borderFocusError: `1px solid ${C}`, borderDisabledError: `1px solid ${E}`, rippleColorError: E, waveOpacity: "0.6", fontWeight: H, fontWeightStrong: q });
}
const We = { name: "Button", common: L, self: Tg }, Ig = F([Z("button", `
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
 `, [K("color", [j("border", { borderColor: "var(--n-border-color)" }), K("disabled", [j("border", { borderColor: "var(--n-border-color-disabled)" })]), wt("disabled", [F("&:focus", [j("state-border", { borderColor: "var(--n-border-color-focus)" })]), F("&:hover", [j("state-border", { borderColor: "var(--n-border-color-hover)" })]), F("&:active", [j("state-border", { borderColor: "var(--n-border-color-pressed)" })]), K("pressed", [j("state-border", { borderColor: "var(--n-border-color-pressed)" })])])]), K("disabled", { backgroundColor: "var(--n-color-disabled)", color: "var(--n-text-color-disabled)" }, [j("border", { border: "var(--n-border-disabled)" })]), wt("disabled", [F("&:focus", { backgroundColor: "var(--n-color-focus)", color: "var(--n-text-color-focus)" }, [j("state-border", { border: "var(--n-border-focus)" })]), F("&:hover", { backgroundColor: "var(--n-color-hover)", color: "var(--n-text-color-hover)" }, [j("state-border", { border: "var(--n-border-hover)" })]), F("&:active", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [j("state-border", { border: "var(--n-border-pressed)" })]), K("pressed", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [j("state-border", { border: "var(--n-border-pressed)" })])]), K("loading", "cursor: wait;"), Z("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [K("active", { zIndex: 1, animationName: "button-wave-spread, button-wave-opacity" })]), _o && "MozBoxSizing" in document.createElement("div").style ? F("&::moz-focus-inner", { border: 0 }) : null, j("border, state-border", `
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
 `, [un({ top: "50%", originalTransform: "translateY(-50%)" })]), Qp()]), j("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [F("~", [j("icon", { margin: "var(--n-icon-margin)", marginRight: 0 })])]), K("block", `
 display: flex;
 width: 100%;
 `), K("dashed", [j("border, state-border", { borderStyle: "dashed !important" })]), K("disabled", { cursor: "not-allowed", opacity: "var(--n-opacity-disabled)" })]), F("@keyframes button-wave-spread", { from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" }, to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" } }), F("@keyframes button-wave-opacity", { from: { opacity: "var(--n-wave-opacity)" }, to: { opacity: 0 } })]), zg = Object.assign(Object.assign({}, Ce.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: "button" }, type: { type: String, default: "default" }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: "left" }, attrType: { type: String, default: "button" }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !dg } }), hn = ee({ name: "Button", props: zg, slots: Object, setup(e) {
  const t = N(null), o = N(null), r = N(false), n = ot(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), i = ie(Eg, {}), { mergedSizeRef: a } = jh({}, { defaultSize: "medium", mergedSize: (S) => {
    const { size: I } = e;
    if (I) return I;
    const { size: z } = i;
    if (z) return z;
    const { mergedSize: b } = S || {};
    return b ? b.value : "medium";
  } }), l = O(() => e.focusable && !e.disabled), s = (S) => {
    var I;
    l.value || S.preventDefault(), !e.nativeFocusBehavior && (S.preventDefault(), !e.disabled && l.value && ((I = t.value) === null || I === void 0 || I.focus({ preventScroll: true })));
  }, c = (S) => {
    var I;
    if (!e.disabled && !e.loading) {
      const { onClick: z } = e;
      z && Ue(z, S), e.text || (I = o.value) === null || I === void 0 || I.play();
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
  }, { inlineThemeDisabled: h, mergedClsPrefixRef: p, mergedRtlRef: v } = mt(e), m = Ce("Button", "-button", Ig, We, e, p), g = Wo("Button", v, p), x = O(() => {
    const S = m.value, { common: { cubicBezierEaseInOut: I, cubicBezierEaseOut: z }, self: b } = S, { rippleDuration: w, opacityDisabled: P, fontWeight: $, fontWeightStrong: E } = b, C = a.value, { dashed: k, type: H, ghost: A, text: W, color: B, round: q, circle: le, textColor: se, secondary: me, tertiary: ce, quaternary: Le, strong: He } = e, rt = { "--n-font-weight": He ? E : $ };
    let ne = { "--n-color": "initial", "--n-color-hover": "initial", "--n-color-pressed": "initial", "--n-color-focus": "initial", "--n-color-disabled": "initial", "--n-ripple-color": "initial", "--n-text-color": "initial", "--n-text-color-hover": "initial", "--n-text-color-pressed": "initial", "--n-text-color-focus": "initial", "--n-text-color-disabled": "initial" };
    const T = H === "tertiary", V = H === "default", M = T ? "default" : H;
    if (W) {
      const Se = se || B;
      ne = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": "#0000", "--n-text-color": Se || b[Q("textColorText", M)], "--n-text-color-hover": Se ? Wt(Se) : b[Q("textColorTextHover", M)], "--n-text-color-pressed": Se ? or(Se) : b[Q("textColorTextPressed", M)], "--n-text-color-focus": Se ? Wt(Se) : b[Q("textColorTextHover", M)], "--n-text-color-disabled": Se || b[Q("textColorTextDisabled", M)] };
    } else if (A || k) {
      const Se = se || B;
      ne = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": B || b[Q("rippleColor", M)], "--n-text-color": Se || b[Q("textColorGhost", M)], "--n-text-color-hover": Se ? Wt(Se) : b[Q("textColorGhostHover", M)], "--n-text-color-pressed": Se ? or(Se) : b[Q("textColorGhostPressed", M)], "--n-text-color-focus": Se ? Wt(Se) : b[Q("textColorGhostHover", M)], "--n-text-color-disabled": Se || b[Q("textColorGhostDisabled", M)] };
    } else if (me) {
      const Se = V ? b.textColor : T ? b.textColorTertiary : b[Q("color", M)], Oe = B || Se, Nt = H !== "default" && H !== "tertiary";
      ne = { "--n-color": Nt ? G(Oe, { alpha: Number(b.colorOpacitySecondary) }) : b.colorSecondary, "--n-color-hover": Nt ? G(Oe, { alpha: Number(b.colorOpacitySecondaryHover) }) : b.colorSecondaryHover, "--n-color-pressed": Nt ? G(Oe, { alpha: Number(b.colorOpacitySecondaryPressed) }) : b.colorSecondaryPressed, "--n-color-focus": Nt ? G(Oe, { alpha: Number(b.colorOpacitySecondaryHover) }) : b.colorSecondaryHover, "--n-color-disabled": b.colorSecondary, "--n-ripple-color": "#0000", "--n-text-color": Oe, "--n-text-color-hover": Oe, "--n-text-color-pressed": Oe, "--n-text-color-focus": Oe, "--n-text-color-disabled": Oe };
    } else if (ce || Le) {
      const Se = V ? b.textColor : T ? b.textColorTertiary : b[Q("color", M)], Oe = B || Se;
      ce ? (ne["--n-color"] = b.colorTertiary, ne["--n-color-hover"] = b.colorTertiaryHover, ne["--n-color-pressed"] = b.colorTertiaryPressed, ne["--n-color-focus"] = b.colorSecondaryHover, ne["--n-color-disabled"] = b.colorTertiary) : (ne["--n-color"] = b.colorQuaternary, ne["--n-color-hover"] = b.colorQuaternaryHover, ne["--n-color-pressed"] = b.colorQuaternaryPressed, ne["--n-color-focus"] = b.colorQuaternaryHover, ne["--n-color-disabled"] = b.colorQuaternary), ne["--n-ripple-color"] = "#0000", ne["--n-text-color"] = Oe, ne["--n-text-color-hover"] = Oe, ne["--n-text-color-pressed"] = Oe, ne["--n-text-color-focus"] = Oe, ne["--n-text-color-disabled"] = Oe;
    } else ne = { "--n-color": B || b[Q("color", M)], "--n-color-hover": B ? Wt(B) : b[Q("colorHover", M)], "--n-color-pressed": B ? or(B) : b[Q("colorPressed", M)], "--n-color-focus": B ? Wt(B) : b[Q("colorFocus", M)], "--n-color-disabled": B || b[Q("colorDisabled", M)], "--n-ripple-color": B || b[Q("rippleColor", M)], "--n-text-color": se || (B ? b.textColorPrimary : T ? b.textColorTertiary : b[Q("textColor", M)]), "--n-text-color-hover": se || (B ? b.textColorHoverPrimary : b[Q("textColorHover", M)]), "--n-text-color-pressed": se || (B ? b.textColorPressedPrimary : b[Q("textColorPressed", M)]), "--n-text-color-focus": se || (B ? b.textColorFocusPrimary : b[Q("textColorFocus", M)]), "--n-text-color-disabled": se || (B ? b.textColorDisabledPrimary : b[Q("textColorDisabled", M)]) };
    let Y = { "--n-border": "initial", "--n-border-hover": "initial", "--n-border-pressed": "initial", "--n-border-focus": "initial", "--n-border-disabled": "initial" };
    W ? Y = { "--n-border": "none", "--n-border-hover": "none", "--n-border-pressed": "none", "--n-border-focus": "none", "--n-border-disabled": "none" } : Y = { "--n-border": b[Q("border", M)], "--n-border-hover": b[Q("borderHover", M)], "--n-border-pressed": b[Q("borderPressed", M)], "--n-border-focus": b[Q("borderFocus", M)], "--n-border-disabled": b[Q("borderDisabled", M)] };
    const { [Q("height", C)]: re, [Q("fontSize", C)]: xe, [Q("padding", C)]: te, [Q("paddingRound", C)]: oe, [Q("iconSize", C)]: ye, [Q("borderRadius", C)]: nt, [Q("iconMargin", C)]: Me, waveOpacity: Sr } = b, wr = { "--n-width": le && !W ? re : "initial", "--n-height": W ? "initial" : re, "--n-font-size": xe, "--n-padding": le || W ? "initial" : q ? oe : te, "--n-icon-size": ye, "--n-icon-margin": Me, "--n-border-radius": W ? "initial" : le || q ? re : nt };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": I, "--n-bezier-ease-out": z, "--n-ripple-duration": w, "--n-opacity-disabled": P, "--n-wave-opacity": Sr }, rt), ne), Y), wr);
  }), R = h ? Rt("button", O(() => {
    let S = "";
    const { dashed: I, type: z, ghost: b, text: w, color: P, round: $, circle: E, textColor: C, secondary: k, tertiary: H, quaternary: A, strong: W } = e;
    I && (S += "a"), b && (S += "b"), w && (S += "c"), $ && (S += "d"), E && (S += "e"), k && (S += "f"), H && (S += "g"), A && (S += "h"), W && (S += "i"), P && (S += `j${ta(P)}`), C && (S += `k${ta(C)}`);
    const { value: B } = a;
    return S += `l${B[0]}`, S += `m${z[0]}`, S;
  }), x, e) : void 0;
  return { selfElRef: t, waveElRef: o, mergedClsPrefix: p, mergedFocusable: l, mergedSize: a, showBorder: n, enterPressed: r, rtlEnabled: g, handleMousedown: s, handleKeydown: u, handleBlur: f, handleKeyup: d, handleClick: c, customColorCssVars: O(() => {
    const { color: S } = e;
    if (!S) return null;
    const I = Wt(S);
    return { "--n-border-color": S, "--n-border-color-hover": I, "--n-border-color-pressed": or(S), "--n-border-color-focus": I, "--n-border-color-disabled": S };
  }), cssVars: h ? void 0 : x, themeClass: R == null ? void 0 : R.themeClass, onRender: R == null ? void 0 : R.onRender };
}, render() {
  const { mergedClsPrefix: e, tag: t, onRender: o } = this;
  o == null ? void 0 : o();
  const r = Ge(this.$slots.default, (n) => n && y("span", { class: `${e}-button__content` }, n));
  return y(t, { ref: "selfElRef", class: [this.themeClass, `${e}-button`, `${e}-button--${this.type}-type`, `${e}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e}-button--rtl`, this.disabled && `${e}-button--disabled`, this.block && `${e}-button--block`, this.enterPressed && `${e}-button--pressed`, !this.text && this.dashed && `${e}-button--dashed`, this.color && `${e}-button--color`, this.secondary && `${e}-button--secondary`, this.loading && `${e}-button--loading`, this.ghost && `${e}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === "right" && r, y(op, { width: true }, { default: () => Ge(this.$slots.icon, (n) => (this.loading || this.renderIcon || n) && y("span", { class: `${e}-button__icon`, style: { margin: dn(this.$slots.default) ? "0" : "" } }, y(Yl, null, { default: () => this.loading ? y(ip, { clsPrefix: e, key: "loading", class: `${e}-icon-slot`, strokeWidth: 20 }) : y("div", { key: "icon", class: `${e}-icon-slot`, role: "none" }, this.renderIcon ? this.renderIcon() : n) }))) }), this.iconPlacement === "left" && r, this.text ? null : y(eg, { ref: "waveElRef", clsPrefix: e }), this.showBorder ? y("div", { "aria-hidden": true, class: `${e}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? y("div", { "aria-hidden": true, class: `${e}-button__state-border`, style: this.customColorCssVars }) : null);
} }), mx = hn, Ag = { titleFontSize: "22px" };
function kg(e) {
  const { borderRadius: t, fontSize: o, lineHeight: r, textColor2: n, textColor1: i, textColorDisabled: a, dividerColor: l, fontWeightStrong: s, primaryColor: c, baseColor: d, hoverColor: u, cardColor: f, modalColor: h, popoverColor: p } = e;
  return Object.assign(Object.assign({}, Ag), { borderRadius: t, borderColor: _(f, l), borderColorModal: _(h, l), borderColorPopover: _(p, l), textColor: n, titleFontWeight: s, titleTextColor: i, dayTextColor: a, fontSize: o, lineHeight: r, dateColorCurrent: c, dateTextColorCurrent: d, cellColorHover: _(f, u), cellColorHoverModal: _(h, u), cellColorHoverPopover: _(p, u), cellColor: f, cellColorModal: h, cellColorPopover: p, barColor: c });
}
const Mg = { name: "Calendar", common: L, peers: { Button: We }, self: kg }, Og = { paddingSmall: "12px 16px 12px", paddingMedium: "19px 24px 20px", paddingLarge: "23px 32px 24px", paddingHuge: "27px 40px 28px", titleFontSizeSmall: "16px", titleFontSizeMedium: "18px", titleFontSizeLarge: "18px", titleFontSizeHuge: "18px", closeIconSize: "18px", closeSize: "22px" };
function Bg(e) {
  const { primaryColor: t, borderRadius: o, lineHeight: r, fontSize: n, cardColor: i, textColor2: a, textColor1: l, dividerColor: s, fontWeightStrong: c, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, closeColorHover: h, closeColorPressed: p, modalColor: v, boxShadow1: m, popoverColor: g, actionColor: x } = e;
  return Object.assign(Object.assign({}, Og), { lineHeight: r, color: i, colorModal: v, colorPopover: g, colorTarget: t, colorEmbedded: x, colorEmbeddedModal: x, colorEmbeddedPopover: x, textColor: a, titleTextColor: l, borderColor: s, actionColor: x, titleFontWeight: c, closeColorHover: h, closeColorPressed: p, closeBorderRadius: o, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, fontSizeSmall: n, fontSizeMedium: n, fontSizeLarge: n, fontSizeHuge: n, boxShadow: m, borderRadius: o });
}
const Hn = { name: "Card", common: L, self: Bg }, Fg = F([Z("card", `
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
 `, [ml({ background: "var(--n-color-modal)" }), K("hoverable", [F("&:hover", "box-shadow: var(--n-box-shadow);")]), K("content-segmented", [F(">", [j("content", { paddingTop: "var(--n-padding-bottom)" })])]), K("content-soft-segmented", [F(">", [j("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), K("footer-segmented", [F(">", [j("footer", { paddingTop: "var(--n-padding-bottom)" })])]), K("footer-soft-segmented", [F(">", [j("footer", `
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
 `)]), K("bordered", `
 border: 1px solid var(--n-border-color);
 `, [F("&:target", "border-color: var(--n-color-target);")]), K("action-segmented", [F(">", [j("action", [F("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), K("content-segmented, content-soft-segmented", [F(">", [j("content", { transition: "border-color 0.3s var(--n-bezier)" }, [F("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), K("footer-segmented, footer-soft-segmented", [F(">", [j("footer", { transition: "border-color 0.3s var(--n-bezier)" }, [F("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), K("embedded", `
 background-color: var(--n-color-embedded);
 `)]), gl(Z("card", `
 background: var(--n-color-modal);
 `, [K("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), vf(Z("card", `
 background: var(--n-color-popover);
 `, [K("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), Nn = { title: [String, Function], contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], headerExtraClass: String, headerExtraStyle: [Object, String], footerClass: String, footerStyle: [Object, String], embedded: Boolean, segmented: { type: [Boolean, Object], default: false }, size: { type: String, default: "medium" }, bordered: { type: Boolean, default: true }, closable: Boolean, hoverable: Boolean, role: String, onClose: [Function, Array], tag: { type: String, default: "div" }, cover: Function, content: [String, Function], footer: Function, action: Function, headerExtra: Function, closeFocusable: Boolean }, Lg = Fn(Nn), Dg = Object.assign(Object.assign({}, Ce.props), Nn), Hg = ee({ name: "Card", props: Dg, slots: Object, setup(e) {
  const t = () => {
    const { onClose: c } = e;
    c && Ue(c);
  }, { inlineThemeDisabled: o, mergedClsPrefixRef: r, mergedRtlRef: n } = mt(e), i = Ce("Card", "-card", Fg, Hn, e, r), a = Wo("Card", n, r), l = O(() => {
    const { size: c } = e, { self: { color: d, colorModal: u, colorTarget: f, textColor: h, titleTextColor: p, titleFontWeight: v, borderColor: m, actionColor: g, borderRadius: x, lineHeight: R, closeIconColor: S, closeIconColorHover: I, closeIconColorPressed: z, closeColorHover: b, closeColorPressed: w, closeBorderRadius: P, closeIconSize: $, closeSize: E, boxShadow: C, colorPopover: k, colorEmbedded: H, colorEmbeddedModal: A, colorEmbeddedPopover: W, [Q("padding", c)]: B, [Q("fontSize", c)]: q, [Q("titleFontSize", c)]: le }, common: { cubicBezierEaseInOut: se } } = i.value, { top: me, left: ce, bottom: Le } = jt(B);
    return { "--n-bezier": se, "--n-border-radius": x, "--n-color": d, "--n-color-modal": u, "--n-color-popover": k, "--n-color-embedded": H, "--n-color-embedded-modal": A, "--n-color-embedded-popover": W, "--n-color-target": f, "--n-text-color": h, "--n-line-height": R, "--n-action-color": g, "--n-title-text-color": p, "--n-title-font-weight": v, "--n-close-icon-color": S, "--n-close-icon-color-hover": I, "--n-close-icon-color-pressed": z, "--n-close-color-hover": b, "--n-close-color-pressed": w, "--n-border-color": m, "--n-box-shadow": C, "--n-padding-top": me, "--n-padding-bottom": Le, "--n-padding-left": ce, "--n-font-size": q, "--n-title-font-size": le, "--n-close-size": E, "--n-close-icon-size": $, "--n-close-border-radius": P };
  }), s = o ? Rt("card", O(() => e.size[0]), l, e) : void 0;
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
    }), this.closable && y(Xl, { clsPrefix: r, class: `${r}-card-header__close`, onClick: this.handleCloseClick, focusable: this.closeFocusable, absolute: true })) : null;
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
function Ng() {
  return { dotSize: "8px", dotColor: "rgba(255, 255, 255, .3)", dotColorActive: "rgba(255, 255, 255, 1)", dotColorFocus: "rgba(255, 255, 255, .5)", dotLineWidth: "16px", dotLineWidthActive: "24px", arrowColor: "#eee" };
}
const _g = { name: "Carousel", common: L, self: Ng }, Wg = { sizeSmall: "14px", sizeMedium: "16px", sizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function Vg(e) {
  const { baseColor: t, inputColorDisabled: o, cardColor: r, modalColor: n, popoverColor: i, textColorDisabled: a, borderColor: l, primaryColor: s, textColor2: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, borderRadiusSmall: h, lineHeight: p } = e;
  return Object.assign(Object.assign({}, Wg), { labelLineHeight: p, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, borderRadius: h, color: t, colorChecked: s, colorDisabled: o, colorDisabledChecked: o, colorTableHeader: r, colorTableHeaderModal: n, colorTableHeaderPopover: i, checkMarkColor: t, checkMarkColorDisabled: a, checkMarkColorDisabledChecked: a, border: `1px solid ${l}`, borderDisabled: `1px solid ${l}`, borderDisabledChecked: `1px solid ${l}`, borderChecked: `1px solid ${s}`, borderFocus: `1px solid ${s}`, boxShadowFocus: `0 0 0 2px ${G(s, { alpha: 0.3 })}`, textColor: c, textColorDisabled: a });
}
const xo = { name: "Checkbox", common: L, self: Vg };
function jg(e) {
  const { borderRadius: t, boxShadow2: o, popoverColor: r, textColor2: n, textColor3: i, primaryColor: a, textColorDisabled: l, dividerColor: s, hoverColor: c, fontSizeMedium: d, heightMedium: u } = e;
  return { menuBorderRadius: t, menuColor: r, menuBoxShadow: o, menuDividerColor: s, menuHeight: "calc(var(--n-option-height) * 6.6)", optionArrowColor: i, optionHeight: u, optionFontSize: d, optionColorHover: c, optionTextColor: n, optionTextColorActive: a, optionTextColorDisabled: l, optionCheckMarkColor: a, loadingColor: a, columnWidth: "180px" };
}
const Gg = { name: "Cascader", common: L, peers: { InternalSelectMenu: Go, InternalSelection: Dn, Scrollbar: Fe, Checkbox: xo, Empty: Dt }, self: jg };
function Kg(e) {
  const { textColor2: t, fontSize: o, fontWeightStrong: r, textColor3: n } = e;
  return { textColor: t, fontSize: o, fontWeightStrong: r, "mono-3": "#a0a1a7", "hue-1": "#0184bb", "hue-2": "#4078f2", "hue-3": "#a626a4", "hue-4": "#50a14f", "hue-5": "#e45649", "hue-5-2": "#c91243", "hue-6": "#986801", "hue-6-2": "#c18401", lineNumberTextColor: n };
}
const cs = { name: "Code", common: L, self: Kg };
function Ug(e) {
  const { fontWeight: t, textColor1: o, textColor2: r, textColorDisabled: n, dividerColor: i, fontSize: a } = e;
  return { titleFontSize: a, titleFontWeight: t, dividerColor: i, titleTextColor: o, titleTextColorDisabled: n, fontSize: a, textColor: r, arrowColor: r, arrowColorDisabled: n, itemMargin: "16px 0 0 0", titlePadding: "16px 0 0 0" };
}
const qg = { name: "Collapse", common: L, self: Ug };
function Yg(e) {
  const { cubicBezierEaseInOut: t } = e;
  return { bezier: t };
}
const Xg = { name: "CollapseTransition", common: L, self: Yg };
function Zg(e) {
  const { fontSize: t, boxShadow2: o, popoverColor: r, textColor2: n, borderRadius: i, borderColor: a, heightSmall: l, heightMedium: s, heightLarge: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, dividerColor: h } = e;
  return { panelFontSize: t, boxShadow: o, color: r, textColor: n, borderRadius: i, border: `1px solid ${a}`, heightSmall: l, heightMedium: s, heightLarge: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: f, dividerColor: h };
}
const Qg = { name: "ColorPicker", common: L, peers: { Input: Qe, Button: We }, self: Zg }, Jg = { abstract: Boolean, bordered: { type: Boolean, default: void 0 }, clsPrefix: String, locale: Object, dateLocale: Object, namespace: String, rtl: Array, tag: { type: String, default: "div" }, hljs: Object, katex: Object, theme: Object, themeOverrides: Object, componentOptions: Object, icons: Object, breakpoints: Object, preflightStyleDisabled: Boolean, styleMountTarget: Object, inlineThemeDisabled: { type: Boolean, default: void 0 }, as: { type: String, validator: () => (Qt("config-provider", "`as` is deprecated, please use `tag` instead."), true), default: void 0 } }, vx = ee({ name: "ConfigProvider", alias: ["App"], props: Jg, setup(e) {
  const t = ie(Et, null), o = O(() => {
    const { theme: v } = e;
    if (v === null) return;
    const m = t == null ? void 0 : t.mergedThemeRef.value;
    return v === void 0 ? m : m === void 0 ? v : Object.assign({}, m, v);
  }), r = O(() => {
    const { themeOverrides: v } = e;
    if (v !== null) {
      if (v === void 0) return t == null ? void 0 : t.mergedThemeOverridesRef.value;
      {
        const m = t == null ? void 0 : t.mergedThemeOverridesRef.value;
        return m === void 0 ? v : $o({}, m, v);
      }
    }
  }), n = ot(() => {
    const { namespace: v } = e;
    return v === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : v;
  }), i = ot(() => {
    const { bordered: v } = e;
    return v === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : v;
  }), a = O(() => {
    const { icons: v } = e;
    return v === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : v;
  }), l = O(() => {
    const { componentOptions: v } = e;
    return v !== void 0 ? v : t == null ? void 0 : t.mergedComponentPropsRef.value;
  }), s = O(() => {
    const { clsPrefix: v } = e;
    return v !== void 0 ? v : t ? t.mergedClsPrefixRef.value : cr;
  }), c = O(() => {
    var v;
    const { rtl: m } = e;
    if (m === void 0) return t == null ? void 0 : t.mergedRtlRef.value;
    const g = {};
    for (const x of m) g[x.name] = ei(x), (v = x.peers) === null || v === void 0 || v.forEach((R) => {
      R.name in g || (g[R.name] = ei(R));
    });
    return g;
  }), d = O(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), u = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), f = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), h = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), p = O(() => {
    const { value: v } = o, { value: m } = r, g = m && Object.keys(m).length !== 0, x = v == null ? void 0 : v.name;
    return x ? g ? `${x}-${ko(JSON.stringify(r.value))}` : x : g ? ko(JSON.stringify(r.value)) : "";
  });
  return Re(Et, { mergedThemeHashRef: p, mergedBreakpointsRef: d, mergedRtlRef: c, mergedIconsRef: a, mergedComponentPropsRef: l, mergedBorderedRef: i, mergedNamespaceRef: n, mergedClsPrefixRef: s, mergedLocaleRef: O(() => {
    const { locale: v } = e;
    if (v !== null) return v === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : v;
  }), mergedDateLocaleRef: O(() => {
    const { dateLocale: v } = e;
    if (v !== null) return v === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : v;
  }), mergedHljsRef: O(() => {
    const { hljs: v } = e;
    return v === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : v;
  }), mergedKatexRef: O(() => {
    const { katex: v } = e;
    return v === void 0 ? t == null ? void 0 : t.mergedKatexRef.value : v;
  }), mergedThemeRef: o, mergedThemeOverridesRef: r, inlineThemeDisabled: u || false, preflightStyleDisabled: f || false, styleMountTarget: h }), { mergedClsPrefix: s, mergedBordered: i, mergedNamespace: n, mergedTheme: o, mergedThemeOverrides: r };
}, render() {
  var e, t, o, r;
  return this.abstract ? (r = (o = this.$slots).default) === null || r === void 0 ? void 0 : r.call(o) : y(this.as || this.tag, { class: `${this.mergedClsPrefix || cr}-config-provider` }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
} });
function em(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const ds = { name: "Popselect", common: L, peers: { Popover: Ht, InternalSelectMenu: Go }, self: em };
function tm(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const us = { name: "Select", common: L, peers: { InternalSelection: Dn, InternalSelectMenu: Go }, self: tm }, om = { itemPaddingSmall: "0 4px", itemMarginSmall: "0 0 0 8px", itemMarginSmallRtl: "0 8px 0 0", itemPaddingMedium: "0 4px", itemMarginMedium: "0 0 0 8px", itemMarginMediumRtl: "0 8px 0 0", itemPaddingLarge: "0 4px", itemMarginLarge: "0 0 0 8px", itemMarginLargeRtl: "0 8px 0 0", buttonIconSizeSmall: "14px", buttonIconSizeMedium: "16px", buttonIconSizeLarge: "18px", inputWidthSmall: "60px", selectWidthSmall: "unset", inputMarginSmall: "0 0 0 8px", inputMarginSmallRtl: "0 8px 0 0", selectMarginSmall: "0 0 0 8px", prefixMarginSmall: "0 8px 0 0", suffixMarginSmall: "0 0 0 8px", inputWidthMedium: "60px", selectWidthMedium: "unset", inputMarginMedium: "0 0 0 8px", inputMarginMediumRtl: "0 8px 0 0", selectMarginMedium: "0 0 0 8px", prefixMarginMedium: "0 8px 0 0", suffixMarginMedium: "0 0 0 8px", inputWidthLarge: "60px", selectWidthLarge: "unset", inputMarginLarge: "0 0 0 8px", inputMarginLargeRtl: "0 8px 0 0", selectMarginLarge: "0 0 0 8px", prefixMarginLarge: "0 8px 0 0", suffixMarginLarge: "0 0 0 8px" };
function rm(e) {
  const { textColor2: t, primaryColor: o, primaryColorHover: r, primaryColorPressed: n, inputColorDisabled: i, textColorDisabled: a, borderColor: l, borderRadius: s, fontSizeTiny: c, fontSizeSmall: d, fontSizeMedium: u, heightTiny: f, heightSmall: h, heightMedium: p } = e;
  return Object.assign(Object.assign({}, om), { buttonColor: "#0000", buttonColorHover: "#0000", buttonColorPressed: "#0000", buttonBorder: `1px solid ${l}`, buttonBorderHover: `1px solid ${l}`, buttonBorderPressed: `1px solid ${l}`, buttonIconColor: t, buttonIconColorHover: t, buttonIconColorPressed: t, itemTextColor: t, itemTextColorHover: r, itemTextColorPressed: n, itemTextColorActive: o, itemTextColorDisabled: a, itemColor: "#0000", itemColorHover: "#0000", itemColorPressed: "#0000", itemColorActive: "#0000", itemColorActiveHover: "#0000", itemColorDisabled: i, itemBorder: "1px solid #0000", itemBorderHover: "1px solid #0000", itemBorderPressed: "1px solid #0000", itemBorderActive: `1px solid ${o}`, itemBorderDisabled: `1px solid ${l}`, itemBorderRadius: s, itemSizeSmall: f, itemSizeMedium: h, itemSizeLarge: p, itemFontSizeSmall: c, itemFontSizeMedium: d, itemFontSizeLarge: u, jumperFontSizeSmall: c, jumperFontSizeMedium: d, jumperFontSizeLarge: u, jumperTextColor: t, jumperTextColorDisabled: a });
}
const fs = { name: "Pagination", common: L, peers: { Select: us, Input: Qe, Popselect: ds }, self: rm }, nm = { padding: "4px 0", optionIconSizeSmall: "14px", optionIconSizeMedium: "16px", optionIconSizeLarge: "16px", optionIconSizeHuge: "18px", optionSuffixWidthSmall: "14px", optionSuffixWidthMedium: "14px", optionSuffixWidthLarge: "16px", optionSuffixWidthHuge: "16px", optionIconSuffixWidthSmall: "32px", optionIconSuffixWidthMedium: "32px", optionIconSuffixWidthLarge: "36px", optionIconSuffixWidthHuge: "36px", optionPrefixWidthSmall: "14px", optionPrefixWidthMedium: "14px", optionPrefixWidthLarge: "16px", optionPrefixWidthHuge: "16px", optionIconPrefixWidthSmall: "36px", optionIconPrefixWidthMedium: "36px", optionIconPrefixWidthLarge: "40px", optionIconPrefixWidthHuge: "40px" };
function im(e) {
  const { primaryColor: t, textColor2: o, dividerColor: r, hoverColor: n, popoverColor: i, invertedColor: a, borderRadius: l, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: d, fontSizeHuge: u, heightSmall: f, heightMedium: h, heightLarge: p, heightHuge: v, textColor3: m, opacityDisabled: g } = e;
  return Object.assign(Object.assign({}, nm), { optionHeightSmall: f, optionHeightMedium: h, optionHeightLarge: p, optionHeightHuge: v, borderRadius: l, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: d, fontSizeHuge: u, optionTextColor: o, optionTextColorHover: o, optionTextColorActive: t, optionTextColorChildActive: t, color: i, dividerColor: r, suffixColor: o, prefixColor: o, optionColorHover: n, optionColorActive: G(t, { alpha: 0.1 }), groupHeaderTextColor: m, optionTextColorInverted: "#BBB", optionTextColorHoverInverted: "#FFF", optionTextColorActiveInverted: "#FFF", optionTextColorChildActiveInverted: "#FFF", colorInverted: a, dividerColorInverted: "#BBB", suffixColorInverted: "#BBB", prefixColorInverted: "#BBB", optionColorHoverInverted: t, optionColorActiveInverted: t, groupHeaderTextColorInverted: "#AAA", optionOpacityDisabled: g });
}
const Cr = { name: "Dropdown", common: L, peers: { Popover: Ht }, self: im }, am = { padding: "8px 14px" };
function lm(e) {
  const { borderRadius: t, boxShadow2: o, baseColor: r } = e;
  return Object.assign(Object.assign({}, am), { borderRadius: t, boxShadow: o, color: _(r, "rgba(0, 0, 0, .85)"), textColor: r });
}
const Ko = { name: "Tooltip", common: L, peers: { Popover: Ht }, self: lm }, _n = { name: "Ellipsis", common: L, peers: { Tooltip: Ko } }, sm = { radioSizeSmall: "14px", radioSizeMedium: "16px", radioSizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function cm(e) {
  const { borderColor: t, primaryColor: o, baseColor: r, textColorDisabled: n, inputColorDisabled: i, textColor2: a, opacityDisabled: l, borderRadius: s, fontSizeSmall: c, fontSizeMedium: d, fontSizeLarge: u, heightSmall: f, heightMedium: h, heightLarge: p, lineHeight: v } = e;
  return Object.assign(Object.assign({}, sm), { labelLineHeight: v, buttonHeightSmall: f, buttonHeightMedium: h, buttonHeightLarge: p, fontSizeSmall: c, fontSizeMedium: d, fontSizeLarge: u, boxShadow: `inset 0 0 0 1px ${t}`, boxShadowActive: `inset 0 0 0 1px ${o}`, boxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${G(o, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${o}`, boxShadowDisabled: `inset 0 0 0 1px ${t}`, color: r, colorDisabled: i, colorActive: "#0000", textColor: a, textColorDisabled: n, dotColorActive: o, dotColorDisabled: t, buttonBorderColor: t, buttonBorderColorActive: o, buttonBorderColorHover: t, buttonColor: r, buttonColorActive: r, buttonTextColor: a, buttonTextColorActive: o, buttonTextColorHover: o, opacityDisabled: l, buttonBoxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${G(o, { alpha: 0.3 })}`, buttonBoxShadowHover: "inset 0 0 0 1px #0000", buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: s });
}
const hs = { name: "Radio", common: L, self: cm }, dm = { thPaddingSmall: "8px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "8px", tdPaddingMedium: "12px", tdPaddingLarge: "12px", sorterSize: "15px", resizableContainerSize: "8px", resizableSize: "2px", filterSize: "15px", paginationMargin: "12px 0 0 0", emptyPadding: "48px 0", actionPadding: "8px 12px", actionButtonMargin: "0 8px 0 0" };
function um(e) {
  const { cardColor: t, modalColor: o, popoverColor: r, textColor2: n, textColor1: i, tableHeaderColor: a, tableColorHover: l, iconColor: s, primaryColor: c, fontWeightStrong: d, borderRadius: u, lineHeight: f, fontSizeSmall: h, fontSizeMedium: p, fontSizeLarge: v, dividerColor: m, heightSmall: g, opacityDisabled: x, tableColorStriped: R } = e;
  return Object.assign(Object.assign({}, dm), { actionDividerColor: m, lineHeight: f, borderRadius: u, fontSizeSmall: h, fontSizeMedium: p, fontSizeLarge: v, borderColor: _(t, m), tdColorHover: _(t, l), tdColorSorting: _(t, l), tdColorStriped: _(t, R), thColor: _(t, a), thColorHover: _(_(t, a), l), thColorSorting: _(_(t, a), l), tdColor: t, tdTextColor: n, thTextColor: i, thFontWeight: d, thButtonColorHover: l, thIconColor: s, thIconColorActive: c, borderColorModal: _(o, m), tdColorHoverModal: _(o, l), tdColorSortingModal: _(o, l), tdColorStripedModal: _(o, R), thColorModal: _(o, a), thColorHoverModal: _(_(o, a), l), thColorSortingModal: _(_(o, a), l), tdColorModal: o, borderColorPopover: _(r, m), tdColorHoverPopover: _(r, l), tdColorSortingPopover: _(r, l), tdColorStripedPopover: _(r, R), thColorPopover: _(r, a), thColorHoverPopover: _(_(r, a), l), thColorSortingPopover: _(_(r, a), l), tdColorPopover: r, boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)", boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)", loadingColor: c, loadingSize: g, opacityLoading: x });
}
const fm = { name: "DataTable", common: L, peers: { Button: We, Checkbox: xo, Radio: hs, Pagination: fs, Scrollbar: Fe, Empty: Dt, Popover: Ht, Ellipsis: _n, Dropdown: Cr }, self: um }, hm = Object.assign(Object.assign({}, xr), Ce.props), pm = ee({ name: "Tooltip", props: hm, slots: Object, __popover__: true, setup(e) {
  const { mergedClsPrefixRef: t } = mt(e), o = Ce("Tooltip", "-tooltip", void 0, Ko, e, t), r = N(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    r.value.syncPosition();
  }, setShow(i) {
    r.value.setShow(i);
  } }), { popoverRef: r, mergedTheme: o, popoverThemeOverrides: O(() => o.value.self) });
}, render() {
  const { mergedTheme: e, internalExtraClass: t } = this;
  return y(as, Object.assign(Object.assign({}, this.$props), { theme: e.peers.Popover, themeOverrides: e.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: t.concat("tooltip"), ref: "popoverRef" }), this.$slots);
} }), ps = Z("ellipsis", { overflow: "hidden" }, [wt("line-clamp", `
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
function pn(e) {
  return `${e}-ellipsis--line-clamp`;
}
function gn(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const gs = Object.assign(Object.assign({}, Ce.props), { expandTrigger: String, lineClamp: [Number, String], tooltip: { type: [Boolean, Object], default: true } }), gm = ee({ name: "Ellipsis", inheritAttrs: false, props: gs, slots: Object, setup(e, { slots: t, attrs: o }) {
  const r = Kl(), n = Ce("Ellipsis", "-ellipsis", ps, _n, e, r), i = N(null), a = N(null), l = N(null), s = N(false), c = O(() => {
    const { lineClamp: m } = e, { value: g } = s;
    return m !== void 0 ? { textOverflow: "", "-webkit-line-clamp": g ? "" : m } : { textOverflow: g ? "" : "ellipsis", "-webkit-line-clamp": "" };
  });
  function d() {
    let m = false;
    const { value: g } = s;
    if (g) return true;
    const { value: x } = i;
    if (x) {
      const { lineClamp: R } = e;
      if (h(x), R !== void 0) m = x.scrollHeight <= x.offsetHeight;
      else {
        const { value: S } = a;
        S && (m = S.getBoundingClientRect().width <= x.getBoundingClientRect().width);
      }
      p(x, m);
    }
    return m;
  }
  const u = O(() => e.expandTrigger === "click" ? () => {
    var m;
    const { value: g } = s;
    g && ((m = l.value) === null || m === void 0 || m.setShow(false)), s.value = !g;
  } : void 0);
  xn(() => {
    var m;
    e.tooltip && ((m = l.value) === null || m === void 0 || m.setShow(false));
  });
  const f = () => y("span", Object.assign({}, Pt(o, { class: [`${r.value}-ellipsis`, e.lineClamp !== void 0 ? pn(r.value) : void 0, e.expandTrigger === "click" ? gn(r.value, "pointer") : void 0], style: c.value }), { ref: "triggerRef", onClick: u.value, onMouseenter: e.expandTrigger === "click" ? d : void 0 }), e.lineClamp ? t : y("span", { ref: "triggerInnerRef" }, t));
  function h(m) {
    if (!m) return;
    const g = c.value, x = pn(r.value);
    e.lineClamp !== void 0 ? v(m, x, "add") : v(m, x, "remove");
    for (const R in g) m.style[R] !== g[R] && (m.style[R] = g[R]);
  }
  function p(m, g) {
    const x = gn(r.value, "pointer");
    e.expandTrigger === "click" && !g ? v(m, x, "add") : v(m, x, "remove");
  }
  function v(m, g, x) {
    x === "add" ? m.classList.contains(g) || m.classList.add(g) : m.classList.contains(g) && m.classList.remove(g);
  }
  return { mergedTheme: n, triggerRef: i, triggerInnerRef: a, tooltipRef: l, handleClick: u, renderTrigger: f, getTooltipDisabled: d };
}, render() {
  var e;
  const { tooltip: t, renderTrigger: o, $slots: r } = this;
  if (t) {
    const { mergedTheme: n } = this;
    return y(pm, Object.assign({ ref: "tooltipRef", placement: "top" }, t, { getDisabled: this.getTooltipDisabled, theme: n.peers.Tooltip, themeOverrides: n.peerOverrides.Tooltip }), { trigger: o, default: (e = r.tooltip) !== null && e !== void 0 ? e : r.default });
  } else return o();
} }), bx = ee({ name: "PerformantEllipsis", props: gs, inheritAttrs: false, setup(e, { attrs: t, slots: o }) {
  const r = N(false), n = Kl();
  return Vo("-ellipsis", ps, n), { mouseEntered: r, renderTrigger: () => {
    const { lineClamp: a } = e, l = n.value;
    return y("span", Object.assign({}, Pt(t, { class: [`${l}-ellipsis`, a !== void 0 ? pn(l) : void 0, e.expandTrigger === "click" ? gn(l, "pointer") : void 0], style: a === void 0 ? { textOverflow: "ellipsis" } : { "-webkit-line-clamp": a } }), { onMouseenter: () => {
      r.value = true;
    } }), a ? o : y("span", null, o));
  } };
}, render() {
  return this.mouseEntered ? y(gm, Pt({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
} }), Wn = "n-dropdown-menu", yr = "n-dropdown", pa = "n-dropdown-option", ms = ee({ name: "DropdownDivider", props: { clsPrefix: { type: String, required: true } }, render() {
  return y("div", { class: `${this.clsPrefix}-dropdown-divider` });
} }), mm = ee({ name: "DropdownGroupHeader", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  const { showIconRef: e, hasSubmenuRef: t } = ie(Wn), { renderLabelRef: o, labelFieldRef: r, nodePropsRef: n, renderOptionRef: i } = ie(yr);
  return { labelField: r, showIcon: e, hasSubmenu: t, renderLabel: o, nodeProps: n, renderOption: i };
}, render() {
  var e;
  const { clsPrefix: t, hasSubmenu: o, showIcon: r, nodeProps: n, renderLabel: i, renderOption: a } = this, { rawNode: l } = this.tmNode, s = y("div", Object.assign({ class: `${t}-dropdown-option` }, n == null ? void 0 : n(l)), y("div", { class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group` }, y("div", { "data-dropdown-option": true, class: [`${t}-dropdown-option-body__prefix`, r && `${t}-dropdown-option-body__prefix--show-icon`] }, ft(l.icon)), y("div", { class: `${t}-dropdown-option-body__label`, "data-dropdown-option": true }, i ? i(l) : ft((e = l.title) !== null && e !== void 0 ? e : l[this.labelField])), y("div", { class: [`${t}-dropdown-option-body__suffix`, o && `${t}-dropdown-option-body__suffix--has-submenu`], "data-dropdown-option": true })));
  return a ? a({ node: s, option: l }) : s;
} });
function vm(e) {
  const { textColorBase: t, opacity1: o, opacity2: r, opacity3: n, opacity4: i, opacity5: a } = e;
  return { color: t, opacity1Depth: o, opacity2Depth: r, opacity3Depth: n, opacity4Depth: i, opacity5Depth: a };
}
const vs = { name: "Icon", common: L, self: vm }, bm = Z("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [K("color-transition", { transition: "color .3s var(--n-bezier)" }), K("depth", { color: "var(--n-color)" }, [F("svg", { opacity: "var(--n-opacity)", transition: "opacity .3s var(--n-bezier)" })]), F("svg", { height: "1em", width: "1em" })]), xm = Object.assign(Object.assign({}, Ce.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), Cm = ee({ _n_icon__: true, name: "Icon", inheritAttrs: false, props: xm, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = mt(e), r = Ce("Icon", "-icon", bm, vs, e, t), n = O(() => {
    const { depth: a } = e, { common: { cubicBezierEaseInOut: l }, self: s } = r.value;
    if (a !== void 0) {
      const { color: c, [`opacity${a}Depth`]: d } = s;
      return { "--n-bezier": l, "--n-color": c, "--n-opacity": d };
    }
    return { "--n-bezier": l, "--n-color": "", "--n-opacity": "" };
  }), i = o ? Rt("icon", O(() => `${e.depth || "d"}`), n, e) : void 0;
  return { mergedClsPrefix: t, mergedStyle: O(() => {
    const { size: a, color: l } = e;
    return { fontSize: ir(a), color: l };
  }), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e;
  const { $parent: t, depth: o, mergedClsPrefix: r, component: n, onRender: i, themeClass: a } = this;
  return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Qt("icon", "don't wrap `n-icon` inside `n-icon`"), i == null ? void 0 : i(), y("i", Pt(this.$attrs, { role: "img", class: [`${r}-icon`, a, { [`${r}-icon--depth`]: o, [`${r}-icon--color-transition`]: o !== void 0 }], style: [this.cssVars, this.mergedStyle] }), n ? y(n) : this.$slots);
} });
function mn(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function ym(e) {
  return e.type === "group";
}
function bs(e) {
  return e.type === "divider";
}
function Sm(e) {
  return e.type === "render";
}
const xs = ee({ name: "DropdownOption", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null }, placement: { type: String, default: "right-start" }, props: Object, scrollable: Boolean }, setup(e) {
  const t = ie(yr), { hoverKeyRef: o, keyboardKeyRef: r, lastToggledSubmenuKeyRef: n, pendingKeyPathRef: i, activeKeyPathRef: a, animatedRef: l, mergedShowRef: s, renderLabelRef: c, renderIconRef: d, labelFieldRef: u, childrenFieldRef: f, renderOptionRef: h, nodePropsRef: p, menuPropsRef: v } = t, m = ie(pa, null), g = ie(Wn), x = ie(No), R = O(() => e.tmNode.rawNode), S = O(() => {
    const { value: B } = f;
    return mn(e.tmNode.rawNode, B);
  }), I = O(() => {
    const { disabled: B } = e.tmNode;
    return B;
  }), z = O(() => {
    if (!S.value) return false;
    const { key: B, disabled: q } = e.tmNode;
    if (q) return false;
    const { value: le } = o, { value: se } = r, { value: me } = n, { value: ce } = i;
    return le !== null ? ce.includes(B) : se !== null ? ce.includes(B) && ce[ce.length - 1] !== B : me !== null ? ce.includes(B) : false;
  }), b = O(() => r.value === null && !l.value), w = Uf(z, 300, b), P = O(() => !!(m == null ? void 0 : m.enteringSubmenuRef.value)), $ = N(false);
  Re(pa, { enteringSubmenuRef: $ });
  function E() {
    $.value = true;
  }
  function C() {
    $.value = false;
  }
  function k() {
    const { parentKey: B, tmNode: q } = e;
    q.disabled || s.value && (n.value = B, r.value = null, o.value = q.key);
  }
  function H() {
    const { tmNode: B } = e;
    B.disabled || s.value && o.value !== B.key && k();
  }
  function A(B) {
    if (e.tmNode.disabled || !s.value) return;
    const { relatedTarget: q } = B;
    q && !$i({ target: q }, "dropdownOption") && !$i({ target: q }, "scrollbarRail") && (o.value = null);
  }
  function W() {
    const { value: B } = S, { tmNode: q } = e;
    s.value && !B && !q.disabled && (t.doSelect(q.key, q.rawNode), t.doUpdateShow(false));
  }
  return { labelField: u, renderLabel: c, renderIcon: d, siblingHasIcon: g.showIconRef, siblingHasSubmenu: g.hasSubmenuRef, menuProps: v, popoverBody: x, animated: l, mergedShowSubmenu: O(() => w.value && !P.value), rawNode: R, hasSubmenu: S, pending: ot(() => {
    const { value: B } = i, { key: q } = e.tmNode;
    return B.includes(q);
  }), childActive: ot(() => {
    const { value: B } = a, { key: q } = e.tmNode, le = B.findIndex((se) => q === se);
    return le === -1 ? false : le < B.length - 1;
  }), active: ot(() => {
    const { value: B } = a, { key: q } = e.tmNode, le = B.findIndex((se) => q === se);
    return le === -1 ? false : le === B.length - 1;
  }), mergedDisabled: I, renderOption: h, nodeProps: p, handleClick: W, handleMouseMove: H, handleMouseEnter: k, handleMouseLeave: A, handleSubmenuBeforeEnter: E, handleSubmenuAfterEnter: C };
}, render() {
  var e, t;
  const { animated: o, rawNode: r, mergedShowSubmenu: n, clsPrefix: i, siblingHasIcon: a, siblingHasSubmenu: l, renderLabel: s, renderIcon: c, renderOption: d, nodeProps: u, props: f, scrollable: h } = this;
  let p = null;
  if (n) {
    const x = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, r, r.children);
    p = y(Cs, Object.assign({}, x, { clsPrefix: i, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
  }
  const v = { class: [`${i}-dropdown-option-body`, this.pending && `${i}-dropdown-option-body--pending`, this.active && `${i}-dropdown-option-body--active`, this.childActive && `${i}-dropdown-option-body--child-active`, this.mergedDisabled && `${i}-dropdown-option-body--disabled`], onMousemove: this.handleMouseMove, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onClick: this.handleClick }, m = u == null ? void 0 : u(r), g = y("div", Object.assign({ class: [`${i}-dropdown-option`, m == null ? void 0 : m.class], "data-dropdown-option": true }, m), y("div", Pt(v, f), [y("div", { class: [`${i}-dropdown-option-body__prefix`, a && `${i}-dropdown-option-body__prefix--show-icon`] }, [c ? c(r) : ft(r.icon)]), y("div", { "data-dropdown-option": true, class: `${i}-dropdown-option-body__label` }, s ? s(r) : ft((t = r[this.labelField]) !== null && t !== void 0 ? t : r.title)), y("div", { "data-dropdown-option": true, class: [`${i}-dropdown-option-body__suffix`, l && `${i}-dropdown-option-body__suffix--has-submenu`] }, this.hasSubmenu ? y(Cm, null, { default: () => y(Yh, null) }) : null)]), this.hasSubmenu ? y(Il, null, { default: () => [y(zl, null, { default: () => y("div", { class: `${i}-dropdown-offset-container` }, y(Ml, { show: this.mergedShowSubmenu, placement: this.placement, to: h && this.popoverBody || void 0, teleportDisabled: !h }, { default: () => y("div", { class: `${i}-dropdown-menu-wrapper` }, o ? y(Bt, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, { default: () => p }) : p) })) })] }) : null);
  return d ? d({ node: g, option: r }) : g;
} }), wm = ee({ name: "NDropdownGroup", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null } }, render() {
  const { tmNode: e, parentKey: t, clsPrefix: o } = this, { children: r } = e;
  return y(eo, null, y(mm, { clsPrefix: o, tmNode: e, key: e.key }), r == null ? void 0 : r.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : bs(i) ? y(ms, { clsPrefix: o, key: n.key }) : n.isGroup ? (Qt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : y(xs, { clsPrefix: o, tmNode: n, parentKey: t, key: n.key });
  }));
} }), $m = ee({ name: "DropdownRenderOption", props: { tmNode: { type: Object, required: true } }, render() {
  const { rawNode: { render: e, props: t } } = this.tmNode;
  return y("div", t, [e == null ? void 0 : e()]);
} }), Cs = ee({ name: "DropdownMenu", props: { scrollable: Boolean, showArrow: Boolean, arrowStyle: [String, Object], clsPrefix: { type: String, required: true }, tmNodes: { type: Array, default: () => [] }, parentKey: { type: [String, Number], default: null } }, setup(e) {
  const { renderIconRef: t, childrenFieldRef: o } = ie(yr);
  Re(Wn, { showIconRef: O(() => {
    const n = t.value;
    return e.tmNodes.some((i) => {
      var a;
      if (i.isGroup) return (a = i.children) === null || a === void 0 ? void 0 : a.some(({ rawNode: s }) => n ? n(s) : s.icon);
      const { rawNode: l } = i;
      return n ? n(l) : l.icon;
    });
  }), hasSubmenuRef: O(() => {
    const { value: n } = o;
    return e.tmNodes.some((i) => {
      var a;
      if (i.isGroup) return (a = i.children) === null || a === void 0 ? void 0 : a.some(({ rawNode: s }) => mn(s, n));
      const { rawNode: l } = i;
      return mn(l, n);
    });
  }) });
  const r = N(null);
  return Re(br, null), Re(vr, null), Re(No, r), { bodyRef: r };
}, render() {
  const { parentKey: e, clsPrefix: t, scrollable: o } = this, r = this.tmNodes.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : Sm(i) ? y($m, { tmNode: n, key: n.key }) : bs(i) ? y(ms, { clsPrefix: t, key: n.key }) : ym(i) ? y(wm, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key }) : y(xs, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key, props: i.props, scrollable: o });
  });
  return y("div", { class: [`${t}-dropdown-menu`, o && `${t}-dropdown-menu--scrollable`], ref: "bodyRef" }, o ? y(es, { contentClass: `${t}-dropdown-menu__content` }, { default: () => r }) : r, this.showArrow ? is({ clsPrefix: t, arrowStyle: this.arrowStyle, arrowClass: void 0, arrowWrapperClass: void 0, arrowWrapperStyle: void 0 }) : null);
} }), Pm = Z("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [rs(), Z("dropdown-option", `
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
 `), wt("disabled", [K("pending", `
 color: var(--n-option-text-color-hover);
 `, [j("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), F("&::before", "background-color: var(--n-option-color-hover);")]), K("active", `
 color: var(--n-option-text-color-active);
 `, [j("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), F("&::before", "background-color: var(--n-option-color-active);")]), K("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [j("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), K("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), K("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [j("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [K("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), j("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [K("show-icon", `
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
 `, [K("has-submenu", `
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
 `)]), wt("scrollable", `
 padding: var(--n-padding);
 `), K("scrollable", [j("content", `
 padding: var(--n-padding);
 `)])]), Em = { animated: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, size: { type: String, default: "medium" }, inverted: Boolean, placement: { type: String, default: "bottom" }, onSelect: [Function, Array], options: { type: Array, default: () => [] }, menuProps: Function, showArrow: Boolean, renderLabel: Function, renderIcon: Function, renderOption: Function, nodeProps: Function, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, value: [String, Number] }, Rm = Object.keys(xr), Tm = Object.assign(Object.assign(Object.assign({}, xr), Em), Ce.props), xx = ee({ name: "Dropdown", inheritAttrs: false, props: Tm, setup(e) {
  const t = N(false), o = wl(ge(e, "show"), t), r = O(() => {
    const { keyField: C, childrenField: k } = e;
    return Bp(e.options, { getKey(H) {
      return H[C];
    }, getDisabled(H) {
      return H.disabled === true;
    }, getIgnored(H) {
      return H.type === "divider" || H.type === "render";
    }, getChildren(H) {
      return H[k];
    } });
  }), n = O(() => r.value.treeNodes), i = N(null), a = N(null), l = N(null), s = O(() => {
    var C, k, H;
    return (H = (k = (C = i.value) !== null && C !== void 0 ? C : a.value) !== null && k !== void 0 ? k : l.value) !== null && H !== void 0 ? H : null;
  }), c = O(() => r.value.getPath(s.value).keyPath), d = O(() => r.value.getPath(e.value).keyPath), u = ot(() => e.keyboard && o.value);
  jf({ keydown: { ArrowUp: { prevent: true, handler: I }, ArrowRight: { prevent: true, handler: S }, ArrowDown: { prevent: true, handler: z }, ArrowLeft: { prevent: true, handler: R }, Enter: { prevent: true, handler: b }, Escape: x } }, u);
  const { mergedClsPrefixRef: f, inlineThemeDisabled: h } = mt(e), p = Ce("Dropdown", "-dropdown", Pm, Cr, e, f);
  Re(yr, { labelFieldRef: ge(e, "labelField"), childrenFieldRef: ge(e, "childrenField"), renderLabelRef: ge(e, "renderLabel"), renderIconRef: ge(e, "renderIcon"), hoverKeyRef: i, keyboardKeyRef: a, lastToggledSubmenuKeyRef: l, pendingKeyPathRef: c, activeKeyPathRef: d, animatedRef: ge(e, "animated"), mergedShowRef: o, nodePropsRef: ge(e, "nodeProps"), renderOptionRef: ge(e, "renderOption"), menuPropsRef: ge(e, "menuProps"), doSelect: v, doUpdateShow: m }), Te(o, (C) => {
    !e.animated && !C && g();
  });
  function v(C, k) {
    const { onSelect: H } = e;
    H && Ue(H, C, k);
  }
  function m(C) {
    const { "onUpdate:show": k, onUpdateShow: H } = e;
    k && Ue(k, C), H && Ue(H, C), t.value = C;
  }
  function g() {
    i.value = null, a.value = null, l.value = null;
  }
  function x() {
    m(false);
  }
  function R() {
    P("left");
  }
  function S() {
    P("right");
  }
  function I() {
    P("up");
  }
  function z() {
    P("down");
  }
  function b() {
    const C = w();
    (C == null ? void 0 : C.isLeaf) && o.value && (v(C.key, C.rawNode), m(false));
  }
  function w() {
    var C;
    const { value: k } = r, { value: H } = s;
    return !k || H === null ? null : (C = k.getNode(H)) !== null && C !== void 0 ? C : null;
  }
  function P(C) {
    const { value: k } = s, { value: { getFirstAvailableNode: H } } = r;
    let A = null;
    if (k === null) {
      const W = H();
      W !== null && (A = W.key);
    } else {
      const W = w();
      if (W) {
        let B;
        switch (C) {
          case "down":
            B = W.getNext();
            break;
          case "up":
            B = W.getPrev();
            break;
          case "right":
            B = W.getChild();
            break;
          case "left":
            B = W.getParent();
            break;
        }
        B && (A = B.key);
      }
    }
    A !== null && (i.value = null, a.value = A);
  }
  const $ = O(() => {
    const { size: C, inverted: k } = e, { common: { cubicBezierEaseInOut: H }, self: A } = p.value, { padding: W, dividerColor: B, borderRadius: q, optionOpacityDisabled: le, [Q("optionIconSuffixWidth", C)]: se, [Q("optionSuffixWidth", C)]: me, [Q("optionIconPrefixWidth", C)]: ce, [Q("optionPrefixWidth", C)]: Le, [Q("fontSize", C)]: He, [Q("optionHeight", C)]: rt, [Q("optionIconSize", C)]: ne } = A, T = { "--n-bezier": H, "--n-font-size": He, "--n-padding": W, "--n-border-radius": q, "--n-option-height": rt, "--n-option-prefix-width": Le, "--n-option-icon-prefix-width": ce, "--n-option-suffix-width": me, "--n-option-icon-suffix-width": se, "--n-option-icon-size": ne, "--n-divider-color": B, "--n-option-opacity-disabled": le };
    return k ? (T["--n-color"] = A.colorInverted, T["--n-option-color-hover"] = A.optionColorHoverInverted, T["--n-option-color-active"] = A.optionColorActiveInverted, T["--n-option-text-color"] = A.optionTextColorInverted, T["--n-option-text-color-hover"] = A.optionTextColorHoverInverted, T["--n-option-text-color-active"] = A.optionTextColorActiveInverted, T["--n-option-text-color-child-active"] = A.optionTextColorChildActiveInverted, T["--n-prefix-color"] = A.prefixColorInverted, T["--n-suffix-color"] = A.suffixColorInverted, T["--n-group-header-text-color"] = A.groupHeaderTextColorInverted) : (T["--n-color"] = A.color, T["--n-option-color-hover"] = A.optionColorHover, T["--n-option-color-active"] = A.optionColorActive, T["--n-option-text-color"] = A.optionTextColor, T["--n-option-text-color-hover"] = A.optionTextColorHover, T["--n-option-text-color-active"] = A.optionTextColorActive, T["--n-option-text-color-child-active"] = A.optionTextColorChildActive, T["--n-prefix-color"] = A.prefixColor, T["--n-suffix-color"] = A.suffixColor, T["--n-group-header-text-color"] = A.groupHeaderTextColor), T;
  }), E = h ? Rt("dropdown", O(() => `${e.size[0]}${e.inverted ? "i" : ""}`), $, e) : void 0;
  return { mergedClsPrefix: f, mergedTheme: p, tmNodes: n, mergedShow: o, handleAfterLeave: () => {
    e.animated && g();
  }, doUpdateShow: m, cssVars: h ? void 0 : $, themeClass: E == null ? void 0 : E.themeClass, onRender: E == null ? void 0 : E.onRender };
}, render() {
  const e = (r, n, i, a, l) => {
    var s;
    const { mergedClsPrefix: c, menuProps: d } = this;
    (s = this.onRender) === null || s === void 0 || s.call(this);
    const u = (d == null ? void 0 : d(void 0, this.tmNodes.map((h) => h.rawNode))) || {}, f = { ref: _h(n), class: [r, `${c}-dropdown`, this.themeClass], clsPrefix: c, tmNodes: this.tmNodes, style: [...i, this.cssVars], showArrow: this.showArrow, arrowStyle: this.arrowStyle, scrollable: this.scrollable, onMouseenter: a, onMouseleave: l };
    return y(Cs, Pt(this.$attrs, f, u));
  }, { mergedTheme: t } = this, o = { show: this.mergedShow, theme: t.peers.Popover, themeOverrides: t.peerOverrides.Popover, internalOnAfterLeave: this.handleAfterLeave, internalRenderBody: e, onUpdateShow: this.doUpdateShow, "onUpdate:show": void 0 };
  return y(as, Object.assign({}, Fo(this.$props, Rm), o), { trigger: () => {
    var r, n;
    return (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r);
  } });
} }), Im = { itemFontSize: "12px", itemHeight: "36px", itemWidth: "52px", panelActionPadding: "8px 0" };
function zm(e) {
  const { popoverColor: t, textColor2: o, primaryColor: r, hoverColor: n, dividerColor: i, opacityDisabled: a, boxShadow2: l, borderRadius: s, iconColor: c, iconColorDisabled: d } = e;
  return Object.assign(Object.assign({}, Im), { panelColor: t, panelBoxShadow: l, panelDividerColor: i, itemTextColor: o, itemTextColorActive: r, itemColorHover: n, itemOpacityDisabled: a, itemBorderRadius: s, borderRadius: s, iconColor: c, iconColorDisabled: d });
}
const ys = { name: "TimePicker", common: L, peers: { Scrollbar: Fe, Button: We, Input: Qe }, self: zm }, Am = { itemSize: "24px", itemCellWidth: "38px", itemCellHeight: "32px", scrollItemWidth: "80px", scrollItemHeight: "40px", panelExtraFooterPadding: "8px 12px", panelActionPadding: "8px 12px", calendarTitlePadding: "0", calendarTitleHeight: "28px", arrowSize: "14px", panelHeaderPadding: "8px 12px", calendarDaysHeight: "32px", calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px", calendarLeftPaddingDate: "6px 12px 4px 12px", calendarLeftPaddingDatetime: "4px 12px", calendarLeftPaddingDaterange: "6px 12px 4px 12px", calendarLeftPaddingDatetimerange: "4px 12px", calendarLeftPaddingMonth: "0", calendarLeftPaddingYear: "0", calendarLeftPaddingQuarter: "0", calendarLeftPaddingMonthrange: "0", calendarLeftPaddingQuarterrange: "0", calendarLeftPaddingYearrange: "0", calendarLeftPaddingWeek: "6px 12px 4px 12px", calendarRightPaddingDate: "6px 12px 4px 12px", calendarRightPaddingDatetime: "4px 12px", calendarRightPaddingDaterange: "6px 12px 4px 12px", calendarRightPaddingDatetimerange: "4px 12px", calendarRightPaddingMonth: "0", calendarRightPaddingYear: "0", calendarRightPaddingQuarter: "0", calendarRightPaddingMonthrange: "0", calendarRightPaddingQuarterrange: "0", calendarRightPaddingYearrange: "0", calendarRightPaddingWeek: "0" };
function km(e) {
  const { hoverColor: t, fontSize: o, textColor2: r, textColorDisabled: n, popoverColor: i, primaryColor: a, borderRadiusSmall: l, iconColor: s, iconColorDisabled: c, textColor1: d, dividerColor: u, boxShadow2: f, borderRadius: h, fontWeightStrong: p } = e;
  return Object.assign(Object.assign({}, Am), { itemFontSize: o, calendarDaysFontSize: o, calendarTitleFontSize: o, itemTextColor: r, itemTextColorDisabled: n, itemTextColorActive: i, itemTextColorCurrent: a, itemColorIncluded: G(a, { alpha: 0.1 }), itemColorHover: t, itemColorDisabled: t, itemColorActive: a, itemBorderRadius: l, panelColor: i, panelTextColor: r, arrowColor: s, calendarTitleTextColor: d, calendarTitleColorHover: t, calendarDaysTextColor: r, panelHeaderDividerColor: u, calendarDaysDividerColor: u, calendarDividerColor: u, panelActionDividerColor: u, panelBoxShadow: f, panelBorderRadius: h, calendarTitleFontWeight: p, scrollItemBorderRadius: h, iconColor: s, iconColorDisabled: c });
}
const Mm = { name: "DatePicker", common: L, peers: { Input: Qe, Button: We, TimePicker: ys, Scrollbar: Fe }, self: km }, Om = { thPaddingBorderedSmall: "8px 12px", thPaddingBorderedMedium: "12px 16px", thPaddingBorderedLarge: "16px 24px", thPaddingSmall: "0", thPaddingMedium: "0", thPaddingLarge: "0", tdPaddingBorderedSmall: "8px 12px", tdPaddingBorderedMedium: "12px 16px", tdPaddingBorderedLarge: "16px 24px", tdPaddingSmall: "0 0 8px 0", tdPaddingMedium: "0 0 12px 0", tdPaddingLarge: "0 0 16px 0" };
function Bm(e) {
  const { tableHeaderColor: t, textColor2: o, textColor1: r, cardColor: n, modalColor: i, popoverColor: a, dividerColor: l, borderRadius: s, fontWeightStrong: c, lineHeight: d, fontSizeSmall: u, fontSizeMedium: f, fontSizeLarge: h } = e;
  return Object.assign(Object.assign({}, Om), { lineHeight: d, fontSizeSmall: u, fontSizeMedium: f, fontSizeLarge: h, titleTextColor: r, thColor: _(n, t), thColorModal: _(i, t), thColorPopover: _(a, t), thTextColor: r, thFontWeight: c, tdTextColor: o, tdColor: n, tdColorModal: i, tdColorPopover: a, borderColor: _(n, l), borderColorModal: _(i, l), borderColorPopover: _(a, l), borderRadius: s });
}
const Fm = { name: "Descriptions", common: L, self: Bm }, Lm = "n-dialog-provider", Cx = "n-dialog-api", yx = "n-dialog-reactive-list", Dm = { titleFontSize: "18px", padding: "16px 28px 20px 28px", iconSize: "28px", actionSpace: "12px", contentMargin: "8px 0 16px 0", iconMargin: "0 4px 0 0", iconMarginIconTop: "4px 0 8px 0", closeSize: "22px", closeIconSize: "18px", closeMargin: "20px 26px 0 0", closeMarginIconTop: "10px 16px 0 0" };
function Hm(e) {
  const { textColor1: t, textColor2: o, modalColor: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, infoColor: c, successColor: d, warningColor: u, errorColor: f, primaryColor: h, dividerColor: p, borderRadius: v, fontWeightStrong: m, lineHeight: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, Dm), { fontSize: x, lineHeight: g, border: `1px solid ${p}`, titleTextColor: t, textColor: o, color: r, closeColorHover: l, closeColorPressed: s, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeBorderRadius: v, iconColor: h, iconColorInfo: c, iconColorSuccess: d, iconColorWarning: u, iconColorError: f, borderRadius: v, titleFontWeight: m });
}
const Vn = { name: "Dialog", common: L, peers: { Button: We }, self: Hm }, jn = { icon: Function, type: { type: String, default: "default" }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean }, Nm = Fn(jn), _m = F([Z("dialog", `
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
 `), K("bordered", `
 border: var(--n-border);
 `), K("icon-top", [j("close", `
 margin: var(--n-close-margin);
 `), j("icon", `
 margin: var(--n-icon-margin);
 `), j("content", `
 text-align: center;
 `), j("title", `
 justify-content: center;
 `), j("action", `
 justify-content: center;
 `)]), K("icon-left", [j("icon", `
 margin: var(--n-icon-margin);
 `), K("closable", [j("title", `
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
 `, [K("last", "margin-bottom: 0;")]), j("action", `
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
 `)]), gl(Z("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), Z("dialog", [ml(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), Wm = { default: () => y(la, null), info: () => y(la, null), success: () => y(Qh, null), warning: () => y(Jh, null), error: () => y(Zh, null) }, Vm = ee({ name: "Dialog", alias: ["NimbusConfirmCard", "Confirm"], props: Object.assign(Object.assign({}, Ce.props), jn), slots: Object, setup(e) {
  const { mergedComponentPropsRef: t, mergedClsPrefixRef: o, inlineThemeDisabled: r, mergedRtlRef: n } = mt(e), i = Wo("Dialog", n, o), a = O(() => {
    var h, p;
    const { iconPlacement: v } = e;
    return v || ((p = (h = t == null ? void 0 : t.value) === null || h === void 0 ? void 0 : h.Dialog) === null || p === void 0 ? void 0 : p.iconPlacement) || "left";
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
  const d = Ce("Dialog", "-dialog", _m, Vn, e, o), u = O(() => {
    const { type: h } = e, p = a.value, { common: { cubicBezierEaseInOut: v }, self: { fontSize: m, lineHeight: g, border: x, titleTextColor: R, textColor: S, color: I, closeBorderRadius: z, closeColorHover: b, closeColorPressed: w, closeIconColor: P, closeIconColorHover: $, closeIconColorPressed: E, closeIconSize: C, borderRadius: k, titleFontWeight: H, titleFontSize: A, padding: W, iconSize: B, actionSpace: q, contentMargin: le, closeSize: se, [p === "top" ? "iconMarginIconTop" : "iconMargin"]: me, [p === "top" ? "closeMarginIconTop" : "closeMargin"]: ce, [Q("iconColor", h)]: Le } } = d.value, He = jt(me);
    return { "--n-font-size": m, "--n-icon-color": Le, "--n-bezier": v, "--n-close-margin": ce, "--n-icon-margin-top": He.top, "--n-icon-margin-right": He.right, "--n-icon-margin-bottom": He.bottom, "--n-icon-margin-left": He.left, "--n-icon-size": B, "--n-close-size": se, "--n-close-icon-size": C, "--n-close-border-radius": z, "--n-close-color-hover": b, "--n-close-color-pressed": w, "--n-close-icon-color": P, "--n-close-icon-color-hover": $, "--n-close-icon-color-pressed": E, "--n-color": I, "--n-text-color": S, "--n-border-radius": k, "--n-padding": W, "--n-line-height": g, "--n-border": x, "--n-content-margin": le, "--n-title-font-size": A, "--n-title-font-weight": H, "--n-title-text-color": R, "--n-action-space": q };
  }), f = r ? Rt("dialog", O(() => `${e.type[0]}${a.value[0]}`), u, e) : void 0;
  return { mergedClsPrefix: o, rtlEnabled: i, mergedIconPlacement: a, mergedTheme: d, handlePositiveClick: l, handleNegativeClick: s, handleCloseClick: c, cssVars: r ? void 0 : u, themeClass: f == null ? void 0 : f.themeClass, onRender: f == null ? void 0 : f.onRender };
}, render() {
  var e;
  const { bordered: t, mergedIconPlacement: o, cssVars: r, closable: n, showIcon: i, title: a, content: l, action: s, negativeText: c, positiveText: d, positiveButtonProps: u, negativeButtonProps: f, handlePositiveClick: h, handleNegativeClick: p, mergedTheme: v, loading: m, type: g, mergedClsPrefix: x } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const R = i ? y(ql, { clsPrefix: x, class: `${x}-dialog__icon` }, { default: () => Ge(this.$slots.icon, (I) => I || (this.icon ? ft(this.icon) : Wm[this.type]())) }) : null, S = Ge(this.$slots.action, (I) => I || d || c || s ? y("div", { class: [`${x}-dialog__action`, this.actionClass], style: this.actionStyle }, I || (s ? [ft(s)] : [this.negativeText && y(hn, Object.assign({ theme: v.peers.Button, themeOverrides: v.peerOverrides.Button, ghost: true, size: "small", onClick: p }, f), { default: () => ft(this.negativeText) }), this.positiveText && y(hn, Object.assign({ theme: v.peers.Button, themeOverrides: v.peerOverrides.Button, size: "small", type: g === "default" ? "primary" : g, disabled: m, loading: m, onClick: h }, u), { default: () => ft(this.positiveText) })])) : null);
  return y("div", { class: [`${x}-dialog`, this.themeClass, this.closable && `${x}-dialog--closable`, `${x}-dialog--icon-${o}`, t && `${x}-dialog--bordered`, this.rtlEnabled && `${x}-dialog--rtl`], style: r, role: "dialog" }, n ? Ge(this.$slots.close, (I) => {
    const z = [`${x}-dialog__close`, this.rtlEnabled && `${x}-dialog--rtl`];
    return I ? y("div", { class: z }, I) : y(Xl, { focusable: this.closeFocusable, clsPrefix: x, class: z, onClick: this.handleCloseClick });
  }) : null, i && o === "top" ? y("div", { class: `${x}-dialog-icon-container` }, R) : null, y("div", { class: [`${x}-dialog__title`, this.titleClass], style: this.titleStyle }, i && o === "left" ? R : null, na(this.$slots.header, () => [ft(a)])), y("div", { class: [`${x}-dialog__content`, S ? "" : `${x}-dialog__content--last`, this.contentClass], style: this.contentStyle }, na(this.$slots.default, () => [ft(l)])), S);
} });
function jm(e) {
  const { modalColor: t, textColor2: o, boxShadow3: r } = e;
  return { color: t, textColor: o, boxShadow: r };
}
const Ss = { name: "Modal", common: L, peers: { Scrollbar: Fe, Dialog: Vn, Card: Hn }, self: jm }, vn = "n-draggable";
function Gm(e, t) {
  let o;
  const r = O(() => e.value !== false), n = O(() => r.value ? vn : ""), i = O(() => {
    const s = e.value;
    return s === true || s === false ? true : s ? s.bounds !== "none" : true;
  });
  function a(s) {
    const c = s.querySelector(`.${vn}`);
    if (!c || !n.value) return;
    let d = 0, u = 0, f = 0, h = 0, p = 0, v = 0, m;
    function g(S) {
      S.preventDefault(), m = S;
      const { x: I, y: z, right: b, bottom: w } = s.getBoundingClientRect();
      u = I, h = z, d = window.innerWidth - b, f = window.innerHeight - w;
      const { left: P, top: $ } = s.style;
      p = +$.slice(0, -2), v = +P.slice(0, -2);
    }
    function x(S) {
      if (!m) return;
      const { clientX: I, clientY: z } = m;
      let b = S.clientX - I, w = S.clientY - z;
      i.value && (b > d ? b = d : -b > u && (b = -u), w > f ? w = f : -w > h && (w = -h));
      const P = b + v, $ = w + p;
      s.style.top = `${$}px`, s.style.left = `${P}px`;
    }
    function R() {
      m = void 0, t.onEnd(s);
    }
    he("mousedown", c, g), he("mousemove", window, x), he("mouseup", window, R), o = () => {
      fe("mousedown", c, g), he("mousemove", window, x), he("mouseup", window, R);
    };
  }
  function l() {
    o && (o(), o = void 0);
  }
  return Ra(l), { stopDrag: l, startDrag: a, draggableRef: r, draggableClassRef: n };
}
const Gn = Object.assign(Object.assign({}, Nn), jn), Km = Fn(Gn), Um = ee({ name: "ModalBody", inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, Gn), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(e) {
  const t = N(null), o = N(null), r = N(e.show), n = N(null), i = N(null), a = ie(Pl);
  let l = null;
  Te(ge(e, "show"), (w) => {
    w && (l = a.getMousePosition());
  }, { immediate: true });
  const { stopDrag: s, startDrag: c, draggableRef: d, draggableClassRef: u } = Gm(ge(e, "draggable"), { onEnd: (w) => {
    v(w);
  } }), f = O(() => ti([e.titleClass, u.value])), h = O(() => ti([e.headerClass, u.value]));
  Te(ge(e, "show"), (w) => {
    w && (r.value = true);
  }), Yf(O(() => e.blockScroll && r.value));
  function p() {
    if (a.transformOriginRef.value === "center") return "";
    const { value: w } = n, { value: P } = i;
    if (w === null || P === null) return "";
    if (o.value) {
      const $ = o.value.containerScrollTop;
      return `${w}px ${P + $}px`;
    }
    return "";
  }
  function v(w) {
    if (a.transformOriginRef.value === "center" || !l || !o.value) return;
    const P = o.value.containerScrollTop, { offsetLeft: $, offsetTop: E } = w, C = l.y, k = l.x;
    n.value = -($ - k), i.value = -(E - C - P), w.style.transformOrigin = p();
  }
  function m(w) {
    Xt(() => {
      v(w);
    });
  }
  function g(w) {
    w.style.transformOrigin = p(), e.onBeforeLeave();
  }
  function x(w) {
    const P = w;
    d.value && c(P), e.onAfterEnter && e.onAfterEnter(P);
  }
  function R() {
    r.value = false, n.value = null, i.value = null, s(), e.onAfterLeave();
  }
  function S() {
    const { onClose: w } = e;
    w && w();
  }
  function I() {
    e.onNegativeClick();
  }
  function z() {
    e.onPositiveClick();
  }
  const b = N(null);
  return Te(b, (w) => {
    w && Xt(() => {
      const P = w.el;
      P && t.value !== P && (t.value = P);
    });
  }), Re(br, t), Re(vr, null), Re(No, null), { mergedTheme: a.mergedThemeRef, appear: a.appearRef, isMounted: a.isMountedRef, mergedClsPrefix: a.mergedClsPrefixRef, bodyRef: t, scrollbarRef: o, draggableClass: u, displayed: r, childNodeRef: b, cardHeaderClass: h, dialogTitleClass: f, handlePositiveClick: z, handleNegativeClick: I, handleCloseClick: S, handleAfterEnter: x, handleAfterLeave: R, handleBeforeLeave: g, handleEnter: m };
}, render() {
  const { $slots: e, $attrs: t, handleEnter: o, handleAfterEnter: r, handleAfterLeave: n, handleBeforeLeave: i, preset: a, mergedClsPrefix: l } = this;
  let s = null;
  if (!a) {
    if (s = Vh("default", e.default, { draggableClass: this.draggableClass }), !s) {
      Qt("modal", "default slot is empty");
      return;
    }
    s = Aa(s), s.props = Pt({ class: `${l}-modal` }, t, s.props || {});
  }
  return this.displayDirective === "show" || this.displayed || this.show ? Zt(y("div", { role: "none", class: [`${l}-modal-body-wrapper`, this.maskHidden && `${l}-modal-body-wrapper--mask-hidden`] }, y(Jl, { ref: "scrollbarRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${l}-modal-scroll-content` }, { default: () => {
    var c;
    return [(c = this.renderMask) === null || c === void 0 ? void 0 : c.call(this), y(jl, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => {
      var d;
      return y(Bt, { name: "fade-in-scale-up-transition", appear: (d = this.appear) !== null && d !== void 0 ? d : this.isMounted, onEnter: o, onAfterEnter: r, onAfterLeave: n, onBeforeLeave: i }, { default: () => {
        const u = [[qr, this.show]], { onClickoutside: f } = this;
        return f && u.push([sn, this.onClickoutside, void 0, { capture: true }]), Zt(this.preset === "confirm" || this.preset === "dialog" ? y(Vm, Object.assign({}, this.$attrs, { class: [`${l}-modal`, this.$attrs.class], ref: "bodyRef", theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, Fo(this.$props, Nm), { titleClass: this.dialogTitleClass, "aria-modal": "true" }), e) : this.preset === "card" ? y(Hg, Object.assign({}, this.$attrs, { ref: "bodyRef", class: [`${l}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, Fo(this.$props, Lg), { headerClass: this.cardHeaderClass, "aria-modal": "true", role: "dialog" }), e) : this.childNodeRef = s, u);
      } });
    } })];
  } })), [[qr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
} }), qm = F([Z("modal-container", `
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
 `, [Zl({ enterDuration: ".25s", leaveDuration: ".25s", enterCubicBezier: "var(--n-bezier-ease-out)", leaveCubicBezier: "var(--n-bezier-ease-out)" })]), Z("modal-body-wrapper", `
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
 `), K("mask-hidden", "pointer-events: none;", [Z("modal-scroll-content", [F("> *", `
 pointer-events: all;
 `)])])]), Z("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [rs({ duration: ".25s", enterScale: ".5" }), F(`.${vn}`, `
 cursor: move;
 user-select: none;
 `)])]), Ym = Object.assign(Object.assign(Object.assign(Object.assign({}, Ce.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: "if" }, transformOrigin: { type: String, default: "mouse" }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), Gn), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } }), Sx = ee({ name: "Modal", inheritAttrs: false, props: Ym, slots: Object, setup(e) {
  const t = N(null), { mergedClsPrefixRef: o, namespaceRef: r, inlineThemeDisabled: n } = mt(e), i = Ce("Modal", "-modal", qm, Ss, e, o), a = _f(64), l = Hf(), s = mr(), c = e.internalDialog ? ie(Lm, null) : null, d = e.internalModal ? ie(Kf, null) : null, u = qf();
  function f(z) {
    const { onUpdateShow: b, "onUpdate:show": w, onHide: P } = e;
    b && Ue(b, z), w && Ue(w, z), P && !z && P(z);
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
  function v() {
    const { onNegativeClick: z } = e;
    z ? Promise.resolve(z()).then((b) => {
      b !== false && f(false);
    }) : f(false);
  }
  function m() {
    const { onBeforeLeave: z, onBeforeHide: b } = e;
    z && Ue(z), b && b();
  }
  function g() {
    const { onAfterLeave: z, onAfterHide: b } = e;
    z && Ue(z), b && b();
  }
  function x(z) {
    var b;
    const { onMaskClick: w } = e;
    w && w(z), e.maskClosable && !((b = t.value) === null || b === void 0) && b.contains(Oo(z)) && f(false);
  }
  function R(z) {
    var b;
    (b = e.onEsc) === null || b === void 0 || b.call(e), e.show && e.closeOnEsc && Hh(z) && (u.value || f(false));
  }
  Re(Pl, { getMousePosition: () => {
    const z = c || d;
    if (z) {
      const { clickedRef: b, clickedPositionRef: w } = z;
      if (b.value && w.value) return w.value;
    }
    return a.value ? l.value : null;
  }, mergedClsPrefixRef: o, mergedThemeRef: i, isMountedRef: s, appearRef: ge(e, "internalAppear"), transformOriginRef: ge(e, "transformOrigin") });
  const S = O(() => {
    const { common: { cubicBezierEaseOut: z }, self: { boxShadow: b, color: w, textColor: P } } = i.value;
    return { "--n-bezier-ease-out": z, "--n-box-shadow": b, "--n-color": w, "--n-text-color": P };
  }), I = n ? Rt("theme-class", void 0, S, e) : void 0;
  return { mergedClsPrefix: o, namespace: r, isMounted: s, containerRef: t, presetProps: O(() => Fo(e, Km)), handleEsc: R, handleAfterLeave: g, handleClickoutside: x, handleBeforeLeave: m, doUpdateShow: f, handleNegativeClick: v, handlePositiveClick: p, handleCloseClick: h, cssVars: n ? void 0 : S, themeClass: I == null ? void 0 : I.themeClass, onRender: I == null ? void 0 : I.onRender };
}, render() {
  const { mergedClsPrefix: e } = this;
  return y(kl, { to: this.to, show: this.show }, { default: () => {
    var t;
    (t = this.onRender) === null || t === void 0 || t.call(this);
    const { showMask: o } = this;
    return Zt(y("div", { role: "none", ref: "containerRef", class: [`${e}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, y(Um, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: "bodyWrapper", displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !o }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: o ? void 0 : this.handleClickoutside, renderMask: o ? () => {
      var r;
      return y(Bt, { name: "fade-in-transition", key: "mask", appear: (r = this.internalAppear) !== null && r !== void 0 ? r : this.isMounted }, { default: () => this.show ? y("div", { "aria-hidden": true, ref: "containerRef", class: `${e}-modal-mask`, onClick: this.handleClickoutside }) : null });
    } : void 0 }), this.$slots)), [[On, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
function Xm(e) {
  const { primaryColor: t, errorColor: o } = e;
  return { colorError: o, colorLoading: t, height: "2px" };
}
const Zm = { name: "LoadingBar", common: L, self: Xm }, wx = "n-message-api", $x = "n-message-provider", Qm = { margin: "0 0 8px 0", padding: "10px 20px", maxWidth: "720px", minWidth: "420px", iconMargin: "0 10px 0 0", closeMargin: "0 0 0 10px", closeSize: "20px", closeIconSize: "16px", iconSize: "20px", fontSize: "14px" };
function Jm(e) {
  const { textColor2: t, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, infoColor: i, successColor: a, errorColor: l, warningColor: s, popoverColor: c, boxShadow2: d, primaryColor: u, lineHeight: f, borderRadius: h, closeColorHover: p, closeColorPressed: v } = e;
  return Object.assign(Object.assign({}, Qm), { closeBorderRadius: h, textColor: t, textColorInfo: t, textColorSuccess: t, textColorError: t, textColorWarning: t, textColorLoading: t, color: c, colorInfo: c, colorSuccess: c, colorError: c, colorWarning: c, colorLoading: c, boxShadow: d, boxShadowInfo: d, boxShadowSuccess: d, boxShadowError: d, boxShadowWarning: d, boxShadowLoading: d, iconColor: t, iconColorInfo: i, iconColorSuccess: a, iconColorWarning: s, iconColorError: l, iconColorLoading: u, closeColorHover: p, closeColorPressed: v, closeIconColor: o, closeIconColorHover: r, closeIconColorPressed: n, closeColorHoverInfo: p, closeColorPressedInfo: v, closeIconColorInfo: o, closeIconColorHoverInfo: r, closeIconColorPressedInfo: n, closeColorHoverSuccess: p, closeColorPressedSuccess: v, closeIconColorSuccess: o, closeIconColorHoverSuccess: r, closeIconColorPressedSuccess: n, closeColorHoverError: p, closeColorPressedError: v, closeIconColorError: o, closeIconColorHoverError: r, closeIconColorPressedError: n, closeColorHoverWarning: p, closeColorPressedWarning: v, closeIconColorWarning: o, closeIconColorHoverWarning: r, closeIconColorPressedWarning: n, closeColorHoverLoading: p, closeColorPressedLoading: v, closeIconColorLoading: o, closeIconColorHoverLoading: r, closeIconColorPressedLoading: n, loadingColor: u, lineHeight: f, borderRadius: h, border: "0" });
}
const ev = { name: "Message", common: L, self: Jm }, tv = { closeMargin: "16px 12px", closeSize: "20px", closeIconSize: "16px", width: "365px", padding: "16px", titleFontSize: "16px", metaFontSize: "12px", descriptionFontSize: "12px" };
function ov(e) {
  const { textColor2: t, successColor: o, infoColor: r, warningColor: n, errorColor: i, popoverColor: a, closeIconColor: l, closeIconColorHover: s, closeIconColorPressed: c, closeColorHover: d, closeColorPressed: u, textColor1: f, textColor3: h, borderRadius: p, fontWeightStrong: v, boxShadow2: m, lineHeight: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, tv), { borderRadius: p, lineHeight: g, fontSize: x, headerFontWeight: v, iconColor: t, iconColorSuccess: o, iconColorInfo: r, iconColorWarning: n, iconColorError: i, color: a, textColor: t, closeIconColor: l, closeIconColorHover: s, closeIconColorPressed: c, closeBorderRadius: p, closeColorHover: d, closeColorPressed: u, headerTextColor: f, descriptionTextColor: h, actionTextColor: t, boxShadow: m });
}
const rv = { name: "Notification", common: L, peers: { Scrollbar: Fe }, self: ov };
function nv(e) {
  const { textColor1: t, dividerColor: o, fontWeightStrong: r } = e;
  return { textColor: t, color: o, fontWeight: r };
}
const iv = { name: "Divider", common: L, self: nv };
function av(e) {
  const { modalColor: t, textColor1: o, textColor2: r, boxShadow3: n, lineHeight: i, fontWeightStrong: a, dividerColor: l, closeColorHover: s, closeColorPressed: c, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, borderRadius: h, primaryColorHover: p } = e;
  return { bodyPadding: "16px 24px", borderRadius: h, headerPadding: "16px 24px", footerPadding: "16px 24px", color: t, textColor: r, titleTextColor: o, titleFontSize: "18px", titleFontWeight: a, boxShadow: n, lineHeight: i, headerBorderBottom: `1px solid ${l}`, footerBorderTop: `1px solid ${l}`, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: f, closeSize: "22px", closeIconSize: "18px", closeColorHover: s, closeColorPressed: c, closeBorderRadius: h, resizableTriggerColorHover: p };
}
const lv = { name: "Drawer", common: L, peers: { Scrollbar: Fe }, self: av }, sv = { actionMargin: "0 0 0 20px", actionMarginRtl: "0 20px 0 0" };
function cv() {
  return sv;
}
const dv = { name: "DynamicInput", common: L, peers: { Input: Qe, Button: We }, self: cv }, uv = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function fv() {
  return uv;
}
const ws = { name: "Space", self: fv }, hv = { name: "DynamicTags", common: L, peers: { Input: Qe, Button: We, Tag: ls, Space: ws }, self() {
  return { inputWidth: "64px" };
} }, pv = { name: "Element", common: L }, gv = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function mv() {
  return gv;
}
const vv = { name: "Flex", self: mv }, bv = { name: "ButtonGroup", common: L }, xv = { feedbackPadding: "4px 0 0 2px", feedbackHeightSmall: "24px", feedbackHeightMedium: "24px", feedbackHeightLarge: "26px", feedbackFontSizeSmall: "13px", feedbackFontSizeMedium: "14px", feedbackFontSizeLarge: "14px", labelFontSizeLeftSmall: "14px", labelFontSizeLeftMedium: "14px", labelFontSizeLeftLarge: "15px", labelFontSizeTopSmall: "13px", labelFontSizeTopMedium: "14px", labelFontSizeTopLarge: "14px", labelHeightSmall: "24px", labelHeightMedium: "26px", labelHeightLarge: "28px", labelPaddingVertical: "0 0 6px 2px", labelPaddingHorizontal: "0 12px 0 0", labelTextAlignVertical: "left", labelTextAlignHorizontal: "right", labelFontWeight: "400" };
function Cv(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, textColor1: n, errorColor: i, warningColor: a, lineHeight: l, textColor3: s } = e;
  return Object.assign(Object.assign({}, xv), { blankHeightSmall: t, blankHeightMedium: o, blankHeightLarge: r, lineHeight: l, labelTextColor: n, asteriskColor: i, feedbackTextColorError: i, feedbackTextColorWarning: a, feedbackTextColor: s });
}
const yv = { name: "Form", common: L, self: Cv };
function Sv(e) {
  const { primaryColor: t, successColor: o, warningColor: r, errorColor: n, infoColor: i, fontWeightStrong: a } = e;
  return { fontWeight: a, rotate: "252deg", colorStartPrimary: G(t, { alpha: 0.6 }), colorEndPrimary: t, colorStartInfo: G(i, { alpha: 0.6 }), colorEndInfo: i, colorStartWarning: G(r, { alpha: 0.6 }), colorEndWarning: r, colorStartError: G(n, { alpha: 0.6 }), colorEndError: n, colorStartSuccess: G(o, { alpha: 0.6 }), colorEndSuccess: o };
}
const wv = { name: "GradientText", common: L, self: Sv };
function $v(e) {
  const { textColorDisabled: t } = e;
  return { iconColorDisabled: t };
}
const Pv = { name: "InputNumber", common: L, peers: { Button: We, Input: Qe }, self: $v };
function Ev() {
  return { inputWidthSmall: "24px", inputWidthMedium: "30px", inputWidthLarge: "36px", gapSmall: "8px", gapMedium: "8px", gapLarge: "8px" };
}
const Rv = { name: "InputOtp", common: L, peers: { Input: Qe }, self: Ev };
function Tv(e) {
  const { baseColor: t, textColor2: o, bodyColor: r, cardColor: n, dividerColor: i, actionColor: a, scrollbarColor: l, scrollbarColorHover: s, invertedColor: c } = e;
  return { textColor: o, textColorInverted: "#FFF", color: r, colorEmbedded: a, headerColor: n, headerColorInverted: c, footerColor: a, footerColorInverted: c, headerBorderColor: i, headerBorderColorInverted: c, footerBorderColor: i, footerBorderColorInverted: c, siderBorderColor: i, siderBorderColorInverted: c, siderColor: n, siderColorInverted: c, siderToggleButtonBorder: `1px solid ${i}`, siderToggleButtonColor: t, siderToggleButtonIconColor: o, siderToggleButtonIconColorInverted: o, siderToggleBarColor: _(r, l), siderToggleBarColorHover: _(r, s), __invertScrollbar: "true" };
}
const Iv = { name: "Layout", common: L, peers: { Scrollbar: Fe }, self: Tv }, zv = { name: "Row", common: L };
function Av(e) {
  const { textColor2: t, cardColor: o, modalColor: r, popoverColor: n, dividerColor: i, borderRadius: a, fontSize: l, hoverColor: s } = e;
  return { textColor: t, color: o, colorHover: s, colorModal: r, colorHoverModal: _(r, s), colorPopover: n, colorHoverPopover: _(n, s), borderColor: i, borderColorModal: _(r, i), borderColorPopover: _(n, i), borderRadius: a, fontSize: l };
}
const kv = { name: "List", common: L, self: Av };
function Mv(e) {
  const { textColor2: t, modalColor: o, borderColor: r, fontSize: n, primaryColor: i } = e;
  return { loaderFontSize: n, loaderTextColor: t, loaderColor: o, loaderBorder: `1px solid ${r}`, loadingColor: i };
}
const Ov = { name: "Log", common: L, peers: { Scrollbar: Fe, Code: cs }, self: Mv };
function Bv(e) {
  const { boxShadow2: t } = e;
  return { menuBoxShadow: t };
}
const Fv = { name: "Mention", common: L, peers: { InternalSelectMenu: Go, Input: Qe }, self: Bv };
function Lv(e, t, o, r) {
  return { itemColorHoverInverted: "#0000", itemColorActiveInverted: t, itemColorActiveHoverInverted: t, itemColorActiveCollapsedInverted: t, itemTextColorInverted: e, itemTextColorHoverInverted: o, itemTextColorChildActiveInverted: o, itemTextColorChildActiveHoverInverted: o, itemTextColorActiveInverted: o, itemTextColorActiveHoverInverted: o, itemTextColorHorizontalInverted: e, itemTextColorHoverHorizontalInverted: o, itemTextColorChildActiveHorizontalInverted: o, itemTextColorChildActiveHoverHorizontalInverted: o, itemTextColorActiveHorizontalInverted: o, itemTextColorActiveHoverHorizontalInverted: o, itemIconColorInverted: e, itemIconColorHoverInverted: o, itemIconColorActiveInverted: o, itemIconColorActiveHoverInverted: o, itemIconColorChildActiveInverted: o, itemIconColorChildActiveHoverInverted: o, itemIconColorCollapsedInverted: e, itemIconColorHorizontalInverted: e, itemIconColorHoverHorizontalInverted: o, itemIconColorActiveHorizontalInverted: o, itemIconColorActiveHoverHorizontalInverted: o, itemIconColorChildActiveHorizontalInverted: o, itemIconColorChildActiveHoverHorizontalInverted: o, arrowColorInverted: e, arrowColorHoverInverted: o, arrowColorActiveInverted: o, arrowColorActiveHoverInverted: o, arrowColorChildActiveInverted: o, arrowColorChildActiveHoverInverted: o, groupTextColorInverted: r };
}
function Dv(e) {
  const { borderRadius: t, textColor3: o, primaryColor: r, textColor2: n, textColor1: i, fontSize: a, dividerColor: l, hoverColor: s, primaryColorHover: c } = e;
  return Object.assign({ borderRadius: t, color: "#0000", groupTextColor: o, itemColorHover: s, itemColorActive: G(r, { alpha: 0.1 }), itemColorActiveHover: G(r, { alpha: 0.1 }), itemColorActiveCollapsed: G(r, { alpha: 0.1 }), itemTextColor: n, itemTextColorHover: n, itemTextColorActive: r, itemTextColorActiveHover: r, itemTextColorChildActive: r, itemTextColorChildActiveHover: r, itemTextColorHorizontal: n, itemTextColorHoverHorizontal: c, itemTextColorActiveHorizontal: r, itemTextColorActiveHoverHorizontal: r, itemTextColorChildActiveHorizontal: r, itemTextColorChildActiveHoverHorizontal: r, itemIconColor: i, itemIconColorHover: i, itemIconColorActive: r, itemIconColorActiveHover: r, itemIconColorChildActive: r, itemIconColorChildActiveHover: r, itemIconColorCollapsed: i, itemIconColorHorizontal: i, itemIconColorHoverHorizontal: c, itemIconColorActiveHorizontal: r, itemIconColorActiveHoverHorizontal: r, itemIconColorChildActiveHorizontal: r, itemIconColorChildActiveHoverHorizontal: r, itemHeight: "42px", arrowColor: n, arrowColorHover: n, arrowColorActive: r, arrowColorActiveHover: r, arrowColorChildActive: r, arrowColorChildActiveHover: r, colorInverted: "#0000", borderColorHorizontal: "#0000", fontSize: a, dividerColor: l }, Lv("#BBB", r, "#FFF", "#AAA"));
}
const Hv = { name: "Menu", common: L, peers: { Tooltip: Ko, Dropdown: Cr }, self: Dv }, Nv = { titleFontSize: "18px", backSize: "22px" };
function _v(e) {
  const { textColor1: t, textColor2: o, textColor3: r, fontSize: n, fontWeightStrong: i, primaryColorHover: a, primaryColorPressed: l } = e;
  return Object.assign(Object.assign({}, Nv), { titleFontWeight: i, fontSize: n, titleTextColor: t, backColor: o, backColorHover: a, backColorPressed: l, subtitleTextColor: r });
}
const Wv = { name: "PageHeader", common: L, self: _v }, Vv = { iconSize: "22px" };
function jv(e) {
  const { fontSize: t, warningColor: o } = e;
  return Object.assign(Object.assign({}, Vv), { fontSize: t, iconColor: o });
}
const Gv = { name: "Popconfirm", common: L, peers: { Button: We, Popover: Ht }, self: jv };
function Kv(e) {
  const { infoColor: t, successColor: o, warningColor: r, errorColor: n, textColor2: i, progressRailColor: a, fontSize: l, fontWeight: s } = e;
  return { fontSize: l, fontSizeCircle: "28px", fontWeightCircle: s, railColor: a, railHeight: "8px", iconSizeCircle: "36px", iconSizeLine: "18px", iconColor: t, iconColorInfo: t, iconColorSuccess: o, iconColorWarning: r, iconColorError: n, textColorCircle: i, textColorLineInner: "rgb(255, 255, 255)", textColorLineOuter: i, fillColor: t, fillColorInfo: t, fillColorSuccess: o, fillColorWarning: r, fillColorError: n, lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)" };
}
const $s = { name: "Progress", common: L, self: Kv };
function Uv(e) {
  const { railColor: t } = e;
  return { itemColor: t, itemColorActive: "#FFCC33", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
}
const qv = { name: "Rate", common: L, self: Uv }, Yv = { titleFontSizeSmall: "26px", titleFontSizeMedium: "32px", titleFontSizeLarge: "40px", titleFontSizeHuge: "48px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", iconSizeSmall: "64px", iconSizeMedium: "80px", iconSizeLarge: "100px", iconSizeHuge: "125px", iconColor418: void 0, iconColor404: void 0, iconColor403: void 0, iconColor500: void 0 };
function Xv(e) {
  const { textColor2: t, textColor1: o, errorColor: r, successColor: n, infoColor: i, warningColor: a, lineHeight: l, fontWeightStrong: s } = e;
  return Object.assign(Object.assign({}, Yv), { lineHeight: l, titleFontWeight: s, titleTextColor: o, textColor: t, iconColorError: r, iconColorSuccess: n, iconColorInfo: i, iconColorWarning: a });
}
const Zv = { name: "Result", common: L, self: Xv }, Qv = { railHeight: "4px", railWidthVertical: "4px", handleSize: "18px", dotHeight: "8px", dotWidth: "8px", dotBorderRadius: "4px" };
function Jv(e) {
  const t = "rgba(0, 0, 0, .85)", o = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: r, primaryColor: n, baseColor: i, cardColor: a, modalColor: l, popoverColor: s, borderRadius: c, fontSize: d, opacityDisabled: u } = e;
  return Object.assign(Object.assign({}, Qv), { fontSize: d, markFontSize: d, railColor: r, railColorHover: r, fillColor: n, fillColorHover: n, opacityDisabled: u, handleColor: "#FFF", dotColor: a, dotColorModal: l, dotColorPopover: s, handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", indicatorColor: t, indicatorBoxShadow: o, indicatorTextColor: i, indicatorBorderRadius: c, dotBorder: `2px solid ${r}`, dotBorderActive: `2px solid ${n}`, dotBoxShadow: "" });
}
const eb = { name: "Slider", common: L, self: Jv };
function tb(e) {
  const { opacityDisabled: t, heightTiny: o, heightSmall: r, heightMedium: n, heightLarge: i, heightHuge: a, primaryColor: l, fontSize: s } = e;
  return { fontSize: s, textColor: l, sizeTiny: o, sizeSmall: r, sizeMedium: n, sizeLarge: i, sizeHuge: a, color: l, opacitySpinning: t };
}
const ob = { name: "Spin", common: L, self: tb };
function rb(e) {
  const { textColor2: t, textColor3: o, fontSize: r, fontWeight: n } = e;
  return { labelFontSize: r, labelFontWeight: n, valueFontWeight: n, valueFontSize: "24px", labelTextColor: o, valuePrefixTextColor: t, valueSuffixTextColor: t, valueTextColor: t };
}
const nb = { name: "Statistic", common: L, self: rb }, ib = { stepHeaderFontSizeSmall: "14px", stepHeaderFontSizeMedium: "16px", indicatorIndexFontSizeSmall: "14px", indicatorIndexFontSizeMedium: "16px", indicatorSizeSmall: "22px", indicatorSizeMedium: "28px", indicatorIconSizeSmall: "14px", indicatorIconSizeMedium: "18px" };
function ab(e) {
  const { fontWeightStrong: t, baseColor: o, textColorDisabled: r, primaryColor: n, errorColor: i, textColor1: a, textColor2: l } = e;
  return Object.assign(Object.assign({}, ib), { stepHeaderFontWeight: t, indicatorTextColorProcess: o, indicatorTextColorWait: r, indicatorTextColorFinish: n, indicatorTextColorError: i, indicatorBorderColorProcess: n, indicatorBorderColorWait: r, indicatorBorderColorFinish: n, indicatorBorderColorError: i, indicatorColorProcess: n, indicatorColorWait: "#0000", indicatorColorFinish: "#0000", indicatorColorError: "#0000", splitorColorProcess: r, splitorColorWait: r, splitorColorFinish: n, splitorColorError: r, headerTextColorProcess: a, headerTextColorWait: r, headerTextColorFinish: r, headerTextColorError: i, descriptionTextColorProcess: l, descriptionTextColorWait: r, descriptionTextColorFinish: r, descriptionTextColorError: i });
}
const lb = { name: "Steps", common: L, self: ab }, sb = { buttonHeightSmall: "14px", buttonHeightMedium: "18px", buttonHeightLarge: "22px", buttonWidthSmall: "14px", buttonWidthMedium: "18px", buttonWidthLarge: "22px", buttonWidthPressedSmall: "20px", buttonWidthPressedMedium: "24px", buttonWidthPressedLarge: "28px", railHeightSmall: "18px", railHeightMedium: "22px", railHeightLarge: "26px", railWidthSmall: "32px", railWidthMedium: "40px", railWidthLarge: "48px" };
function cb(e) {
  const { primaryColor: t, opacityDisabled: o, borderRadius: r, textColor3: n } = e;
  return Object.assign(Object.assign({}, sb), { iconColor: n, textColor: "white", loadingColor: t, opacityDisabled: o, railColor: "rgba(0, 0, 0, .14)", railColorActive: t, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 0 2px ${G(t, { alpha: 0.2 })}` });
}
const db = { name: "Switch", common: L, self: cb }, ub = { thPaddingSmall: "6px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "6px", tdPaddingMedium: "12px", tdPaddingLarge: "12px" };
function fb(e) {
  const { dividerColor: t, cardColor: o, modalColor: r, popoverColor: n, tableHeaderColor: i, tableColorStriped: a, textColor1: l, textColor2: s, borderRadius: c, fontWeightStrong: d, lineHeight: u, fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p } = e;
  return Object.assign(Object.assign({}, ub), { fontSizeSmall: f, fontSizeMedium: h, fontSizeLarge: p, lineHeight: u, borderRadius: c, borderColor: _(o, t), borderColorModal: _(r, t), borderColorPopover: _(n, t), tdColor: o, tdColorModal: r, tdColorPopover: n, tdColorStriped: _(o, a), tdColorStripedModal: _(r, a), tdColorStripedPopover: _(n, a), thColor: _(o, i), thColorModal: _(r, i), thColorPopover: _(n, i), thTextColor: l, tdTextColor: s, thFontWeight: d });
}
const hb = { name: "Table", common: L, self: fb }, pb = { tabFontSizeSmall: "14px", tabFontSizeMedium: "14px", tabFontSizeLarge: "16px", tabGapSmallLine: "36px", tabGapMediumLine: "36px", tabGapLargeLine: "36px", tabGapSmallLineVertical: "8px", tabGapMediumLineVertical: "8px", tabGapLargeLineVertical: "8px", tabPaddingSmallLine: "6px 0", tabPaddingMediumLine: "10px 0", tabPaddingLargeLine: "14px 0", tabPaddingVerticalSmallLine: "6px 12px", tabPaddingVerticalMediumLine: "8px 16px", tabPaddingVerticalLargeLine: "10px 20px", tabGapSmallBar: "36px", tabGapMediumBar: "36px", tabGapLargeBar: "36px", tabGapSmallBarVertical: "8px", tabGapMediumBarVertical: "8px", tabGapLargeBarVertical: "8px", tabPaddingSmallBar: "4px 0", tabPaddingMediumBar: "6px 0", tabPaddingLargeBar: "10px 0", tabPaddingVerticalSmallBar: "6px 12px", tabPaddingVerticalMediumBar: "8px 16px", tabPaddingVerticalLargeBar: "10px 20px", tabGapSmallCard: "4px", tabGapMediumCard: "4px", tabGapLargeCard: "4px", tabGapSmallCardVertical: "4px", tabGapMediumCardVertical: "4px", tabGapLargeCardVertical: "4px", tabPaddingSmallCard: "8px 16px", tabPaddingMediumCard: "10px 20px", tabPaddingLargeCard: "12px 24px", tabPaddingSmallSegment: "4px 0", tabPaddingMediumSegment: "6px 0", tabPaddingLargeSegment: "8px 0", tabPaddingVerticalLargeSegment: "0 8px", tabPaddingVerticalSmallCard: "8px 12px", tabPaddingVerticalMediumCard: "10px 16px", tabPaddingVerticalLargeCard: "12px 20px", tabPaddingVerticalSmallSegment: "0 4px", tabPaddingVerticalMediumSegment: "0 6px", tabGapSmallSegment: "0", tabGapMediumSegment: "0", tabGapLargeSegment: "0", tabGapSmallSegmentVertical: "0", tabGapMediumSegmentVertical: "0", tabGapLargeSegmentVertical: "0", panePaddingSmall: "8px 0 0 0", panePaddingMedium: "12px 0 0 0", panePaddingLarge: "16px 0 0 0", closeSize: "18px", closeIconSize: "14px" };
function gb(e) {
  const { textColor2: t, primaryColor: o, textColorDisabled: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, tabColor: c, baseColor: d, dividerColor: u, fontWeight: f, textColor1: h, borderRadius: p, fontSize: v, fontWeightStrong: m } = e;
  return Object.assign(Object.assign({}, pb), { colorSegment: c, tabFontSizeCard: v, tabTextColorLine: h, tabTextColorActiveLine: o, tabTextColorHoverLine: o, tabTextColorDisabledLine: r, tabTextColorSegment: h, tabTextColorActiveSegment: t, tabTextColorHoverSegment: t, tabTextColorDisabledSegment: r, tabTextColorBar: h, tabTextColorActiveBar: o, tabTextColorHoverBar: o, tabTextColorDisabledBar: r, tabTextColorCard: h, tabTextColorHoverCard: h, tabTextColorActiveCard: o, tabTextColorDisabledCard: r, barColor: o, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: a, closeColorHover: l, closeColorPressed: s, closeBorderRadius: p, tabColor: c, tabColorSegment: d, tabBorderColor: u, tabFontWeightActive: f, tabFontWeight: f, tabBorderRadius: p, paneTextColor: t, fontWeightStrong: m });
}
const mb = { name: "Tabs", common: L, self: gb };
function vb(e) {
  const { textColor1: t, textColor2: o, fontWeightStrong: r, fontSize: n } = e;
  return { fontSize: n, titleTextColor: t, textColor: o, titleFontWeight: r };
}
const bb = { name: "Thing", common: L, self: vb }, xb = { titleMarginMedium: "0 0 6px 0", titleMarginLarge: "-2px 0 6px 0", titleFontSizeMedium: "14px", titleFontSizeLarge: "16px", iconSizeMedium: "14px", iconSizeLarge: "14px" };
function Cb(e) {
  const { textColor3: t, infoColor: o, errorColor: r, successColor: n, warningColor: i, textColor1: a, textColor2: l, railColor: s, fontWeightStrong: c, fontSize: d } = e;
  return Object.assign(Object.assign({}, xb), { contentFontSize: d, titleFontWeight: c, circleBorder: `2px solid ${t}`, circleBorderInfo: `2px solid ${o}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${n}`, circleBorderWarning: `2px solid ${i}`, iconColor: t, iconColorInfo: o, iconColorError: r, iconColorSuccess: n, iconColorWarning: i, titleTextColor: a, contentTextColor: l, metaTextColor: t, lineColor: s });
}
const yb = { name: "Timeline", common: L, self: Cb }, Sb = { extraFontSizeSmall: "12px", extraFontSizeMedium: "12px", extraFontSizeLarge: "14px", titleFontSizeSmall: "14px", titleFontSizeMedium: "16px", titleFontSizeLarge: "16px", closeSize: "20px", closeIconSize: "16px", headerHeightSmall: "44px", headerHeightMedium: "44px", headerHeightLarge: "50px" };
function wb(e) {
  const { fontWeight: t, fontSizeLarge: o, fontSizeMedium: r, fontSizeSmall: n, heightLarge: i, heightMedium: a, borderRadius: l, cardColor: s, tableHeaderColor: c, textColor1: d, textColorDisabled: u, textColor2: f, textColor3: h, borderColor: p, hoverColor: v, closeColorHover: m, closeColorPressed: g, closeIconColor: x, closeIconColorHover: R, closeIconColorPressed: S } = e;
  return Object.assign(Object.assign({}, Sb), { itemHeightSmall: a, itemHeightMedium: a, itemHeightLarge: i, fontSizeSmall: n, fontSizeMedium: r, fontSizeLarge: o, borderRadius: l, dividerColor: p, borderColor: p, listColor: s, headerColor: _(s, c), titleTextColor: d, titleTextColorDisabled: u, extraTextColor: h, extraTextColorDisabled: u, itemTextColor: f, itemTextColorDisabled: u, itemColorPending: v, titleFontWeight: t, closeColorHover: m, closeColorPressed: g, closeIconColor: x, closeIconColorHover: R, closeIconColorPressed: S });
}
const $b = { name: "Transfer", common: L, peers: { Checkbox: xo, Scrollbar: Fe, Input: Qe, Empty: Dt, Button: We }, self: wb };
function Pb(e) {
  const { borderRadiusSmall: t, dividerColor: o, hoverColor: r, pressedColor: n, primaryColor: i, textColor3: a, textColor2: l, textColorDisabled: s, fontSize: c } = e;
  return { fontSize: c, lineHeight: "1.5", nodeHeight: "30px", nodeWrapperPadding: "3px 0", nodeBorderRadius: t, nodeColorHover: r, nodeColorPressed: n, nodeColorActive: G(i, { alpha: 0.1 }), arrowColor: a, nodeTextColor: l, nodeTextColorDisabled: s, loadingColor: i, dropMarkColor: i, lineColor: o };
}
const Ps = { name: "Tree", common: L, peers: { Checkbox: xo, Scrollbar: Fe, Empty: Dt }, self: Pb };
function Eb(e) {
  const { popoverColor: t, boxShadow2: o, borderRadius: r, heightMedium: n, dividerColor: i, textColor2: a } = e;
  return { menuPadding: "4px", menuColor: t, menuBoxShadow: o, menuBorderRadius: r, menuHeight: `calc(${n} * 7.6)`, actionDividerColor: i, actionTextColor: a, actionPadding: "8px 12px", headerDividerColor: i, headerTextColor: a, headerPadding: "8px 12px" };
}
const Rb = { name: "TreeSelect", common: L, peers: { Tree: Ps, Empty: Dt, InternalSelection: Dn }, self: Eb }, Tb = { headerFontSize1: "30px", headerFontSize2: "22px", headerFontSize3: "18px", headerFontSize4: "16px", headerFontSize5: "16px", headerFontSize6: "16px", headerMargin1: "28px 0 20px 0", headerMargin2: "28px 0 20px 0", headerMargin3: "28px 0 20px 0", headerMargin4: "28px 0 18px 0", headerMargin5: "28px 0 18px 0", headerMargin6: "28px 0 18px 0", headerPrefixWidth1: "16px", headerPrefixWidth2: "16px", headerPrefixWidth3: "12px", headerPrefixWidth4: "12px", headerPrefixWidth5: "12px", headerPrefixWidth6: "12px", headerBarWidth1: "4px", headerBarWidth2: "4px", headerBarWidth3: "3px", headerBarWidth4: "3px", headerBarWidth5: "3px", headerBarWidth6: "3px", pMargin: "16px 0 16px 0", liMargin: ".25em 0 0 0", olPadding: "0 0 0 2em", ulPadding: "0 0 0 2em" };
function Ib(e) {
  const { primaryColor: t, textColor2: o, borderColor: r, lineHeight: n, fontSize: i, borderRadiusSmall: a, dividerColor: l, fontWeightStrong: s, textColor1: c, textColor3: d, infoColor: u, warningColor: f, errorColor: h, successColor: p, codeColor: v } = e;
  return Object.assign(Object.assign({}, Tb), { aTextColor: t, blockquoteTextColor: o, blockquotePrefixColor: r, blockquoteLineHeight: n, blockquoteFontSize: i, codeBorderRadius: a, liTextColor: o, liLineHeight: n, liFontSize: i, hrColor: l, headerFontWeight: s, headerTextColor: c, pTextColor: o, pTextColor1Depth: c, pTextColor2Depth: o, pTextColor3Depth: d, pLineHeight: n, pFontSize: i, headerBarColor: t, headerBarColorPrimary: t, headerBarColorInfo: u, headerBarColorError: h, headerBarColorWarning: f, headerBarColorSuccess: p, textColor: o, textColor1Depth: c, textColor2Depth: o, textColor3Depth: d, textColorPrimary: t, textColorInfo: u, textColorSuccess: p, textColorWarning: f, textColorError: h, codeTextColor: o, codeColor: v, codeBorder: "1px solid #0000" });
}
const Es = { name: "Typography", common: L, self: Ib };
function zb(e) {
  const { iconColor: t, primaryColor: o, errorColor: r, textColor2: n, successColor: i, opacityDisabled: a, actionColor: l, borderColor: s, hoverColor: c, lineHeight: d, borderRadius: u, fontSize: f } = e;
  return { fontSize: f, lineHeight: d, borderRadius: u, draggerColor: l, draggerBorder: `1px dashed ${s}`, draggerBorderHover: `1px dashed ${o}`, itemColorHover: c, itemColorHoverError: G(r, { alpha: 0.06 }), itemTextColor: n, itemTextColorError: r, itemTextColorSuccess: i, itemIconColor: t, itemDisabledOpacity: a, itemBorderImageCardError: `1px solid ${r}`, itemBorderImageCard: `1px solid ${s}` };
}
const Ab = { name: "Upload", common: L, peers: { Button: We, Progress: $s }, self: zb }, kb = { name: "Watermark", common: L, self(e) {
  const { fontFamily: t } = e;
  return { fontFamily: t };
} };
function Mb(e) {
  const { popoverColor: t, dividerColor: o, borderRadius: r } = e;
  return { color: t, buttonBorderColor: o, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
}
const Ob = { name: "FloatButtonGroup", common: L, self: Mb };
function Bb(e) {
  const { popoverColor: t, textColor2: o, buttonColor2Hover: r, buttonColor2Pressed: n, primaryColor: i, primaryColorHover: a, primaryColorPressed: l, borderRadius: s } = e;
  return { color: t, colorHover: r, colorPressed: n, colorPrimary: i, colorPrimaryHover: a, colorPrimaryPressed: l, textColor: o, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)", textColorPrimary: "#fff", borderRadiusSquare: s };
}
const Fb = { name: "FloatButton", common: L, self: Bb };
function Lb(e) {
  const { borderRadius: t, fontSizeMini: o, fontSizeTiny: r, fontSizeSmall: n, fontWeight: i, textColor2: a, cardColor: l, buttonColor2Hover: s } = e;
  return { activeColors: ["#9be9a8", "#40c463", "#30a14e", "#216e39"], borderRadius: t, borderColor: l, textColor: a, mininumColor: s, fontWeight: i, loadingColorStart: "rgba(0, 0, 0, 0.06)", loadingColorEnd: "rgba(0, 0, 0, 0.12)", rectSizeSmall: "10px", rectSizeMedium: "11px", rectSizeLarge: "12px", borderRadiusSmall: "2px", borderRadiusMedium: "2px", borderRadiusLarge: "2px", xGapSmall: "2px", xGapMedium: "3px", xGapLarge: "3px", yGapSmall: "2px", yGapMedium: "3px", yGapLarge: "3px", fontSizeSmall: r, fontSizeMedium: o, fontSizeLarge: n };
}
const Db = { name: "Heatmap", common: L, self: Lb };
function Hb(e) {
  const { primaryColor: t, baseColor: o } = e;
  return { color: t, iconColor: o };
}
const Nb = { name: "IconWrapper", common: L, self: Hb };
function _b() {
  return { toolbarIconColor: "rgba(255, 255, 255, .9)", toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
}
const Wb = { name: "Image", common: L, peers: { Tooltip: Ko }, self: _b }, Px = "n-layout-sider", Ex = { type: String, default: "static" }, Vb = { extraFontSize: "12px", width: "440px" };
function jb(e) {
  const { fontWeight: t, iconColorDisabled: o, iconColor: r, fontSizeLarge: n, fontSizeMedium: i, fontSizeSmall: a, heightLarge: l, heightMedium: s, heightSmall: c, borderRadius: d, cardColor: u, tableHeaderColor: f, textColor1: h, textColorDisabled: p, textColor2: v, borderColor: m, hoverColor: g } = e;
  return Object.assign(Object.assign({}, Vb), { itemHeightSmall: c, itemHeightMedium: s, itemHeightLarge: l, fontSizeSmall: a, fontSizeMedium: i, fontSizeLarge: n, borderRadius: d, borderColor: m, listColor: u, headerColor: _(u, f), titleTextColor: h, titleTextColorDisabled: p, extraTextColor: v, filterDividerColor: m, itemTextColor: v, itemTextColorDisabled: p, itemColorPending: g, titleFontWeight: t, iconColor: r, iconColorDisabled: o });
}
const Gb = { name: "Transfer", common: L, peers: { Checkbox: xo, Scrollbar: Fe, Input: Qe, Empty: Dt, Button: We }, self: jb };
function Kb() {
  return {};
}
const Ub = { name: "Marquee", common: L, self: Kb };
function qb(e) {
  return { borderRadius: e.borderRadius };
}
const Yb = { name: "QrCode", common: L, self: qb };
function Xb(e) {
  const { heightSmall: t, heightMedium: o, heightLarge: r, borderRadius: n } = e;
  return { color: "#eee", colorEnd: "#ddd", borderRadius: n, heightSmall: t, heightMedium: o, heightLarge: r };
}
const Zb = { name: "Skeleton", common: L, self: Xb };
function Qb(e) {
  const { primaryColorHover: t, borderColor: o } = e;
  return { resizableTriggerColorHover: t, resizableTriggerColor: o };
}
const Jb = { name: "Split", common: L, self: Qb }, e0 = Z("text", `
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
 `)]), t0 = Object.assign(Object.assign({}, Ce.props), { code: Boolean, type: { type: String, default: "default" }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), Rx = ee({ name: "Text", props: t0, setup(e) {
  const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = mt(e), r = Ce("Typography", "-text", e0, Es, e, t), n = O(() => {
    const { depth: a, type: l } = e, s = l === "default" ? a === void 0 ? "textColor" : `textColor${a}Depth` : Q("textColor", l), { common: { fontWeightStrong: c, fontFamilyMono: d, cubicBezierEaseInOut: u }, self: { codeTextColor: f, codeBorderRadius: h, codeColor: p, codeBorder: v, [s]: m } } = r.value;
    return { "--n-bezier": u, "--n-text-color": m, "--n-font-weight-strong": c, "--n-font-famliy-mono": d, "--n-code-border-radius": h, "--n-code-text-color": f, "--n-code-color": p, "--n-code-border": v };
  }), i = o ? Rt("text", O(() => `${e.type[0]}${e.depth || ""}`), n, e) : void 0;
  return { mergedClsPrefix: t, compitableTag: $l(e, ["as", "tag"]), cssVars: o ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e, t, o;
  const { mergedClsPrefix: r } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const n = [`${r}-text`, this.themeClass, { [`${r}-text--code`]: this.code, [`${r}-text--delete`]: this.delete, [`${r}-text--strong`]: this.strong, [`${r}-text--italic`]: this.italic, [`${r}-text--underline`]: this.underline }], i = (o = (t = this.$slots).default) === null || o === void 0 ? void 0 : o.call(t);
  return this.code ? y("code", { class: n, style: this.cssVars }, this.delete ? y("del", null, i) : i) : this.delete ? y("del", { class: n, style: this.cssVars }, i) : y(this.compitableTag || "span", { class: n, style: this.cssVars }, i);
} }), o0 = () => ({}), r0 = { name: "Equation", common: L, self: o0 }, Tx = { name: "light", common: L, Alert: rg, Anchor: sg, AutoComplete: pg, Avatar: ss, AvatarGroup: vg, BackTop: Cg, Badge: Sg, Breadcrumb: Pg, Button: We, ButtonGroup: bv, Calendar: Mg, Card: Hn, Carousel: _g, Cascader: Gg, Checkbox: xo, Code: cs, Collapse: qg, CollapseTransition: Xg, ColorPicker: Qg, DataTable: fm, DatePicker: Mm, Descriptions: Fm, Dialog: Vn, Divider: iv, Drawer: lv, Dropdown: Cr, DynamicInput: dv, DynamicTags: hv, Element: pv, Empty: Dt, Equation: r0, Ellipsis: _n, Flex: vv, Form: yv, GradientText: wv, Heatmap: Db, Icon: vs, IconWrapper: Nb, Image: Wb, Input: Qe, InputNumber: Pv, InputOtp: Rv, Layout: Iv, LegacyTransfer: Gb, List: kv, LoadingBar: Zm, Log: Ov, Menu: Hv, Mention: Fv, Message: ev, Modal: Ss, Notification: rv, PageHeader: Wv, Pagination: fs, Popconfirm: Gv, Popover: Ht, Popselect: ds, Progress: $s, QrCode: Yb, Radio: hs, Rate: qv, Row: zv, Result: Zv, Scrollbar: Fe, Skeleton: Zb, Select: us, Slider: eb, Space: ws, Spin: ob, Statistic: nb, Steps: lb, Switch: db, Table: hb, Tabs: mb, Tag: ls, Thing: bb, TimePicker: ys, Timeline: yb, Tooltip: Ko, Transfer: $b, Tree: Ps, TreeSelect: Rb, Typography: Es, Upload: Ab, Watermark: kb, Split: Jb, FloatButton: Fb, FloatButtonGroup: Ob, Marquee: Ub };
class n0 {
  constructor() {
    __publicField(this, "storageProvider", null);
    __publicField(this, "initialized", false);
  }
  async init() {
    if (this.initialized) return;
    const t = uc();
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
const qe = new n0(), Ye = qe.set.bind(qe), Rs = qe.get.bind(qe), Xe = qe.save.bind(qe);
qe.init.bind(qe);
qe.exportToJson.bind(qe);
qe.clear.bind(qe);
qe.remove.bind(qe);
const i0 = "trackmaker_settings", Ix = ka("settings", () => {
  const e = N({ ...Er });
  async function t() {
    const a = await Rs("settings");
    a && (e.value = { ...e.value, ...a }), r();
  }
  async function o() {
    await Ye("settings", JSON.parse(JSON.stringify(e.value))), await Xe(), r();
  }
  function r() {
    try {
      localStorage.setItem(i0, JSON.stringify(e.value));
    } catch {
    }
  }
  function n() {
    const a = { theme: e.value.theme, interfaceLanguage: e.value.interfaceLanguage, mapLanguage: e.value.mapLanguage, watchCompatibilityMode: e.value.watchCompatibilityMode, geolocationCorrection: e.value.geolocationCorrection };
    e.value = { ...Er, ...a };
  }
  function i(a) {
    const l = Er, s = e.value;
    s[a] = l[a], e.value = { ...s };
  }
  return Te(e, () => {
    r(), o();
  }, { deep: true }), { settings: e, init: t, resetAdvancedSettings: n, resetSetting: i };
});
function a0(e) {
  return fc() ? (hc(e), true) : false;
}
const jr = /* @__PURE__ */ new WeakMap(), l0 = (...e) => {
  var t;
  const o = e[0], r = (t = mo()) == null ? void 0 : t.proxy;
  if (r == null && !Ma()) throw new Error("injectLocal must be called in setup");
  return r && jr.has(r) && o in jr.get(r) ? jr.get(r)[o] : ie(...e);
}, s0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const c0 = Object.prototype.toString, d0 = (e) => c0.call(e) === "[object Object]";
function ga(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Gr(e) {
  return Array.isArray(e) ? e : [e];
}
function u0(e) {
  return mo();
}
function f0(e, t = true, o) {
  u0() ? st(e, o) : t ? e() : Xt(e);
}
function h0(e, t, o) {
  return Te(e, t, { ...o, immediate: true });
}
const Kn = s0 ? window : void 0;
function p0(e) {
  var t;
  const o = co(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function bn(...e) {
  const t = [], o = () => {
    t.forEach((l) => l()), t.length = 0;
  }, r = (l, s, c, d) => (l.addEventListener(s, c, d), () => l.removeEventListener(s, c, d)), n = O(() => {
    const l = Gr(co(e[0])).filter((s) => s != null);
    return l.every((s) => typeof s != "string") ? l : void 0;
  }), i = h0(() => {
    var l, s;
    return [(s = (l = n.value) == null ? void 0 : l.map((c) => p0(c))) != null ? s : [Kn].filter((c) => c != null), Gr(co(n.value ? e[1] : e[0])), Gr(so(n.value ? e[2] : e[1])), co(n.value ? e[3] : e[2])];
  }, ([l, s, c, d]) => {
    if (o(), !(l == null ? void 0 : l.length) || !(s == null ? void 0 : s.length) || !(c == null ? void 0 : c.length)) return;
    const u = d0(d) ? { ...d } : d;
    t.push(...l.flatMap((f) => s.flatMap((h) => c.map((p) => r(f, h, p, u)))));
  }, { flush: "post" }), a = () => {
    i(), o();
  };
  return a0(o), a;
}
function g0() {
  const e = St(false), t = mo();
  return t && st(() => {
    e.value = true;
  }, t), e;
}
function m0(e) {
  const t = g0();
  return O(() => (t.value, !!e()));
}
const v0 = /* @__PURE__ */ Symbol("vueuse-ssr-width");
function b0() {
  const e = Ma() ? l0(v0, null) : null;
  return typeof e == "number" ? e : void 0;
}
function x0(e, t = {}) {
  const { window: o = Kn, ssrWidth: r = b0() } = t, n = m0(() => o && "matchMedia" in o && typeof o.matchMedia == "function"), i = St(typeof r == "number"), a = St(), l = St(false), s = (c) => {
    l.value = c.matches;
  };
  return vo(() => {
    if (i.value) {
      i.value = !n.value;
      const c = co(e).split(",");
      l.value = c.some((d) => {
        const u = d.includes("not all"), f = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), h = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || h);
        return f && p && (p = r >= ga(f[1])), h && p && (p = r <= ga(h[1])), u ? !p : p;
      });
      return;
    }
    n.value && (a.value = o.matchMedia(co(e)), l.value = a.value.matches);
  }), bn(a, "change", s, { passive: true }), O(() => l.value);
}
function zx(e = {}) {
  const { window: t = Kn, initialWidth: o = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: n = true, includeScrollbar: i = true, type: a = "inner" } = e, l = St(o), s = St(r), c = () => {
    if (t) if (a === "outer") l.value = t.outerWidth, s.value = t.outerHeight;
    else if (a === "visual" && t.visualViewport) {
      const { width: u, height: f, scale: h } = t.visualViewport;
      l.value = Math.round(u * h), s.value = Math.round(f * h);
    } else i ? (l.value = t.innerWidth, s.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, s.value = t.document.documentElement.clientHeight);
  };
  c(), f0(c);
  const d = { passive: true };
  if (bn("resize", c, d), t && a === "visual" && t.visualViewport && bn(t.visualViewport, "resize", c, d), n) {
    const u = x0("(orientation: portrait)");
    Te(u, () => c());
  }
  return { width: l, height: s };
}
class Ax {
  constructor() {
    __publicField(this, "parser");
    __publicField(this, "platformContext");
    this.parser = new pc(navigator.userAgent), this.platformContext = gc();
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
    return oi() ? "Tauri" : this.platformContext.browser || "";
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
    return oi();
  }
  get isWeb() {
    const t = this.platformContext.environment;
    return t === "web" || t === "mobile_web";
  }
}
const Be = [];
for (let e = 0; e < 256; ++e) Be.push((e + 256).toString(16).slice(1));
function C0(e, t = 0) {
  return (Be[e[t + 0]] + Be[e[t + 1]] + Be[e[t + 2]] + Be[e[t + 3]] + "-" + Be[e[t + 4]] + Be[e[t + 5]] + "-" + Be[e[t + 6]] + Be[e[t + 7]] + "-" + Be[e[t + 8]] + Be[e[t + 9]] + "-" + Be[e[t + 10]] + Be[e[t + 11]] + Be[e[t + 12]] + Be[e[t + 13]] + Be[e[t + 14]] + Be[e[t + 15]]).toLowerCase();
}
let Kr;
const y0 = new Uint8Array(16);
function S0() {
  if (!Kr) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Kr = crypto.getRandomValues.bind(crypto);
  }
  return Kr(y0);
}
const w0 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ma = { randomUUID: w0 };
function zo(e, t, o) {
  var _a2;
  if (ma.randomUUID && !e) return ma.randomUUID();
  e = e || {};
  const r = e.random ?? ((_a2 = e.rng) == null ? void 0 : _a2.call(e)) ?? S0();
  if (r.length < 16) throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, C0(r);
}
function at() {
  return { name: "Untitled", description: "A new geographic item", creation_timestamp: Date.now(), modification_timestamp: Date.now(), created_by: "anonymous", modified_by: "anonymous", tags: [] };
}
function $0() {
  return { ...at(), version: 1, signature: void 0 };
}
class Yt {
  constructor(t = zo(), o, r, n) {
    __publicField(this, "id");
    __publicField(this, "meta");
    __publicField(this, "routes");
    __publicField(this, "drafts");
    this.id = t, this.routes = o || { id: zo(), meta: at(), routes: [] }, this.drafts = r || { id: zo(), meta: at(), drafts: [] }, this.meta = { ...$0(), ...n };
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
class P0 {
  constructor(t = [], o = zo(), r = at()) {
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
    return Ct(this.routesInternal);
  }
  set routes(t) {
    this.routesInternal = Ct(t);
  }
  findRoute(t) {
    return this.routesInternal.find((o) => o.id === t);
  }
  existRoute(t) {
    return this.routesInternal.some((o) => o.id === t);
  }
  addRoute(t) {
    if (this.existRoute(t.id)) throw new Error(`[CartoSketch.Route] Route ${t.id} already exist`);
    this.routesInternal.push(Ct(t)), this.updateModificationTime();
  }
  updateRoute(t) {
    const o = this.routesInternal.findIndex((r) => r.id === t.id);
    if (o === -1) throw new Error(`[CartoSketch.Route] Route ${t.id} not found`);
    this.routesInternal[o] = Ct(t), this.updateModificationTime();
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
class va {
  constructor(t = zo(), o = [], r = {}, n) {
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
    this.points = Ct(t), this.updateModificationTime();
  }
  appendPoint(t) {
    this.points.push(Ct(t)), this.updateModificationTime();
  }
  getPoints() {
    return Ct(this.points);
  }
  setProperties(t) {
    const o = Ct(t);
    Object.assign(this.properties, o), this.updateModificationTime();
  }
  updateModificationTime() {
    this.meta.modification_timestamp = Date.now();
  }
  exportAsGeoJSON() {
    return { type: "Feature", properties: { ...this.properties, ...this.meta, description: JSON.stringify({ name: this.meta.name, id: this.id }) }, geometry: { type: "LineString", coordinates: this.points.map((t) => [t.longitude, t.latitude]) } };
  }
  exportToStorage() {
    return Ct({ id: this.id, meta: this.meta, properties: this.properties, points: this.points });
  }
}
var ue = ((e) => (e.MIGRATION_FAILED = "MIGRATION_FAILED", e.INVALID_VERSION = "INVALID_VERSION", e.UNSUPPORTED_VERSION = "UNSUPPORTED_VERSION", e.ROLLBACK_FAILED = "ROLLBACK_FAILED", e.VALIDATION_FAILED = "VALIDATION_FAILED", e.STRATEGY_NOT_FOUND = "STRATEGY_NOT_FOUND", e.DATA_CORRUPTION = "DATA_CORRUPTION", e))(ue || {});
class pe extends mc {
  constructor(t, o = "MIGRATION_FAILED", r) {
    super(t, r);
    __publicField(this, "code");
    __publicField(this, "domain", vc.GENERIC);
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
class ba extends pe {
  constructor(t, o, r) {
    super(t, "DATA_CORRUPTION", r), this.corruptedData = o;
  }
}
class E0 extends pe {
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
class yt {
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
      return r.isErr() ? ae(new ba(`Data validation failed: ${r.error.message}`, t, r.error)) : Ee({ isValid: true, errors: [], warnings: [] });
    } catch (r) {
      return ae(new ba(`Data integrity check failed: ${String(r)}`, t, r instanceof Error ? r : new Error(String(r))));
    }
  }
}
class R0 {
  constructor() {
    __publicField(this, "fromVersion", 0);
    __publicField(this, "toVersion", 1);
    __publicField(this, "name", "route-collection-to-sketch");
  }
  migrate(t) {
    try {
      const o = yt.validateRouteCollectionData(t);
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
      const o = yt.validateSketchArray(t);
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
    return yt.validateRouteCollectionData(t).map(() => {
    }).mapErr((o) => new de(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return yt.validateSketchArray(t).map(() => {
    }).mapErr((o) => new de(`Post-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
}
class T0 {
  constructor() {
    __publicField(this, "fromVersion", 1);
    __publicField(this, "toVersion", 2);
    __publicField(this, "name", "sketch-v1-to-v2");
  }
  migrate() {
    return ae(new pe("Sketch V1 to V2 migration not yet implemented", ue.STRATEGY_NOT_FOUND));
  }
  validateBefore(t) {
    return yt.validateSketchArray(t).map(() => {
    }).mapErr((o) => new de(`Pre-migration validation failed: ${o.message}`, o.field, o.value, o));
  }
  validateAfter(t) {
    return ae(new de("Sketch V2 validation not yet implemented", void 0, t));
  }
}
const _I0 = class _I0 {
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
__publicField(_I0, "strategies", /* @__PURE__ */ new Map());
_I0.register(new R0()), _I0.register(new T0());
let I0 = _I0;
class z0 {
  static createStrategy(t, o) {
    return I0.getStrategy(t, o);
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
class A0 {
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
      const s = l.value, c = z0.createStrategiesForPath(s);
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
        const v = this.executeMigrationWithRetry(p, f, n);
        if (v.isErr()) {
          if (n.enableRollback && u) {
            const m = this.rollbackToVersion(u);
            if (m.isErr()) return ae(new E0(`Migration failed and rollback also failed: ${m.error.message}`, v.error, m.error));
          }
          return ae(v.error);
        }
        f = v.value, h.push(p.toVersion);
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
        return yt.validateRouteCollectionData(t).map(() => {
        }).mapErr((r) => new pe(`Route collection validation failed: ${r.message}`, ue.VALIDATION_FAILED, r));
      case 1:
        return yt.validateSketchArray(t).map(() => {
        }).mapErr((r) => new pe(`Sketch array validation failed: ${r.message}`, ue.VALIDATION_FAILED, r));
      default:
        return ae(new pe(`Unknown version for pre-migration validation: ${o}`, ue.VALIDATION_FAILED));
    }
  }
  static validateDataAfterMigration(t, o) {
    return o === 1 ? yt.validateSketchArray(t).map(() => {
    }).mapErr((r) => new pe(`Sketch array validation failed: ${r.message}`, ue.VALIDATION_FAILED, r)) : ae(new pe(`Unknown version for post-migration validation: ${o}`, ue.VALIDATION_FAILED));
  }
  static checkDataIntegrity(t, o) {
    return yt.checkDataIntegrity(t, o);
  }
}
__publicField(A0, "DEFAULT_OPTIONS", { validateBefore: true, validateAfter: true, enableRollback: true, maxRetries: 3, retryDelay: 1e3 });
const kx = ka("sketches", () => {
  const e = N([]), t = N(null), o = N(null), r = O(() => {
    if (!t.value) return null;
    const $ = e.value.find((E) => E.id === t.value);
    return $ ? new P0($.routes.routes.map((E) => new va(E.id, E.points, E.properties, E.meta)), $.routes.id, $.routes.meta) : null;
  }), n = O(() => r.value ? r.value.routes.map(($) => ({ id: $.id, name: $.name, points: $.getPoints(), meta: $.meta })) : []), i = O(() => t.value && e.value.find(($) => $.id === t.value) || null), a = O(() => i.value ? i.value.drafts.drafts : []);
  async function l() {
    const $ = await Rs("sketches");
    if ($) {
      const E = A0.migrateToCurrent($, { validateBefore: true, validateAfter: true, enableRollback: true });
      if (E.isErr()) {
        console.error("[SketchStore] Data migration failed:", E.error), await s();
        return;
      }
      const C = E.value;
      if (C.migratedVersions.length > 0 && console.info(`[SketchStore] Successfully migrated data from version ${C.fromVersion} to ${C.toVersion}`), Array.isArray(C.data)) {
        e.value = C.data.map((H) => Yt.fromStorage(H));
        const k = [];
        e.value.forEach((H) => {
          H.routes.routes.forEach((A) => {
            A.points.length > 1 && !A.meta.distance && k.push((async () => {
              try {
                A.meta.distance = await Rr(A.points);
              } catch (W) {
                console.warn("Failed to calculate route distance:", W), A.meta.distance = 0;
              }
            })());
          });
        }), await Promise.all(k), !t.value && e.value.length > 0 && (t.value = e.value[0].id);
      } else await s();
    } else await s();
  }
  async function s() {
    const $ = new Yt();
    $.meta.name = "Default Sketch", e.value = [$], t.value = $.id, await Ye("sketches", e.value.map((E) => E.toStorage())), await Xe();
  }
  async function c($ = "New Sketch") {
    const E = new Yt();
    return E.meta.name = $, e.value.push(E), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe(), E;
  }
  async function d($, E) {
    const C = e.value.find((k) => k.id === $);
    C && (E.name !== void 0 && C.updateName(E.name), E.description !== void 0 && C.updateDescription(E.description), E.tags !== void 0 && (C.meta.tags.forEach((k) => {
      C.removeTag(k);
    }), E.tags.forEach((k) => {
      C.addTag(k);
    })), await Ye("sketches", e.value.map((k) => k.toStorage())), await Xe());
  }
  async function u($) {
    const E = e.value.findIndex((C) => C.id === $);
    E !== -1 && (e.value.splice(E, 1), t.value === $ && (t.value = e.value.length > 0 ? e.value[0].id : null), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe());
  }
  function f($) {
    t.value = $, o.value = null;
  }
  async function h($, E = {}, C = {}) {
    i.value || await s();
    const k = new va(void 0, [], E, C);
    return k.meta.name = $, i.value && i.value.routes.routes.push(k.exportToStorage()), await Ye("sketches", e.value.map((H) => H.toStorage())), await Xe(), k;
  }
  async function p($) {
    if (!i.value) return;
    const E = i.value.routes.routes.findIndex((C) => C.id === $);
    E !== -1 && (i.value.routes.routes.splice(E, 1), o.value === $ && (o.value = null), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe());
  }
  async function v($, E) {
    if (!i.value) return;
    const C = i.value.routes.routes.find((k) => k.id === $);
    if (C) {
      if (C.points.push(E), C.meta.modification_timestamp = Date.now(), C.points.length > 1) try {
        if (C.meta.distance === void 0) {
          const k = await Rr(C.points);
          C.meta.distance = k;
        } else {
          const k = await Rr([C.points[C.points.length - 2], E]);
          C.meta.distance += k;
        }
      } catch (k) {
        console.warn("Failed to calculate route distance:", k), C.meta.distance === void 0 && (C.meta.distance = 0);
      }
      await Ye("sketches", e.value.map((k) => k.toStorage())), await Xe();
    }
  }
  async function m($, E) {
    if (!i.value) return;
    const C = i.value.routes.routes.find((k) => k.id === $);
    C && (E.meta !== void 0 && (C.meta = { ...C.meta, ...E.meta }), E.properties !== void 0 && (C.properties = { ...C.properties, ...E.properties }), C.meta.modification_timestamp = Date.now(), await Ye("sketches", e.value.map((k) => k.toStorage())), await Xe());
  }
  async function g($) {
    if (!i.value) return;
    const E = i.value.routes.routes.find((C) => C.id === $);
    E && (E.points = [], E.meta.modification_timestamp = Date.now(), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe());
  }
  function x($) {
    return i.value && i.value.routes.routes.find((E) => E.id === $) || null;
  }
  function R($) {
    o.value = $;
  }
  async function S($, E = {}, C = {}) {
    i.value || await s();
    const k = { id: crypto.randomUUID(), meta: { ...at(), ...C }, shape: $, properties: E };
    return i.value && i.value.drafts.drafts.push(k), await Ye("sketches", e.value.map((H) => H.toStorage())), await Xe(), k;
  }
  async function I($, E) {
    if (!i.value) return;
    const C = i.value.drafts.drafts.find((k) => k.id === $);
    C && (E.shape !== void 0 && (C.shape = E.shape), E.properties !== void 0 && (C.properties = { ...C.properties, ...E.properties }), E.meta !== void 0 && (C.meta = { ...C.meta, ...E.meta }, C.meta.modification_timestamp = Date.now()), await Ye("sketches", e.value.map((k) => k.toStorage())), await Xe());
  }
  async function z($) {
    if (!i.value) return;
    const E = i.value.drafts.drafts.findIndex((C) => C.id === $);
    E !== -1 && (i.value.drafts.drafts.splice(E, 1), await Ye("sketches", e.value.map((C) => C.toStorage())), await Xe());
  }
  function b($) {
    return i.value && i.value.drafts.drafts.find((E) => E.id === $) || null;
  }
  function w() {
    return i.value ? i.value.routes.routes.map(($) => $.id) : [];
  }
  function P() {
    return i.value ? i.value.drafts.drafts.map(($) => $.id) : [];
  }
  return { sketches: e, currentSketchId: t, currentRouteId: o, routeCollection: r, routes: n, currentSketch: i, currentDrafts: a, init: l, createSketch: c, updateSketch: d, deleteSketch: u, setCurrentSketchId: f, addRoute: h, deleteRoute: p, addPointToRoute: v, updateRoute: m, clearRoutePoints: g, getRouteById: x, setCurrentRouteId: R, listRouteIDs: w, addDraft: S, updateDraft: I, deleteDraft: z, getDraftById: b, listDraftIDs: P };
});
export {
  zf as $,
  jg as A,
  Dt as B,
  Ug as C,
  Yg as D,
  Zg as E,
  tm as F,
  rm as G,
  im as H,
  am as I,
  sm as J,
  um as K,
  vm as L,
  zm as M,
  km as N,
  Bm as O,
  Hm as P,
  jm as Q,
  nx as R,
  Vm as S,
  Fo as T,
  Sx as U,
  jn as V,
  Nm as W,
  dx as X,
  Hf as Y,
  _f as Z,
  Lm as _,
  _ as a,
  pm as a$,
  Cx as a0,
  yx as a1,
  Jm as a2,
  F as a3,
  Z as a4,
  gx as a5,
  j as a6,
  K as a7,
  un as a8,
  Yl as a9,
  Av as aA,
  Dv as aB,
  _v as aC,
  jv as aD,
  Kv as aE,
  Xv as aF,
  Qv as aG,
  tb as aH,
  rb as aI,
  ab as aJ,
  sb as aK,
  fb as aL,
  gb as aM,
  vb as aN,
  xb as aO,
  Sb as aP,
  Pb as aQ,
  Ib as aR,
  zb as aS,
  Et as aT,
  $o as aU,
  L as aV,
  Lb as aW,
  Hb as aX,
  Vb as aY,
  Kb as aZ,
  wt as a_,
  ft as aa,
  Xl as ab,
  mt as ac,
  $x as ad,
  Wo as ae,
  Ce as af,
  Q as ag,
  Rt as ah,
  ip as ai,
  ql as aj,
  ev as ak,
  Zh as al,
  Jh as am,
  Qh as an,
  la as ao,
  op as ap,
  wx as aq,
  Ym as ar,
  ov as as,
  nv as at,
  av as au,
  sv as av,
  uv as aw,
  gv as ax,
  Cv as ay,
  Ev as az,
  cp as b,
  he as b$,
  ot as b0,
  Fn as b1,
  xx as b2,
  ea as b3,
  Px as b4,
  Bp as b5,
  wl as b6,
  $l as b7,
  lx as b8,
  Hv as b9,
  Pi as bA,
  j0 as bB,
  Cf as bC,
  Ji as bD,
  Vo as bE,
  jo as bF,
  na as bG,
  ix as bH,
  rs as bI,
  Ge as bJ,
  Jl as bK,
  Go as bL,
  px as bM,
  jt as bN,
  $i as bO,
  Gf as bP,
  ls as bQ,
  ta as bR,
  ia as bS,
  Dn as bT,
  rg as bU,
  Df as bV,
  sg as bW,
  ux as bX,
  Qe as bY,
  dg as bZ,
  jh as b_,
  Ue as ba,
  o0 as bb,
  kx as bc,
  bx as bd,
  Rx as be,
  D0 as bf,
  Ix as bg,
  Ax as bh,
  zx as bi,
  hn as bj,
  Cm as bk,
  as as bl,
  ju as bm,
  N0 as bn,
  Nu as bo,
  _0 as bp,
  W0 as bq,
  H0 as br,
  Tx as bs,
  vx as bt,
  yn as bu,
  La as bv,
  kn as bw,
  bo as bx,
  Eo as by,
  Al as bz,
  to as c,
  Hh as c$,
  fe as c0,
  _o as c1,
  Eg as c2,
  gl as c3,
  vf as c4,
  xo as c5,
  cs as c6,
  qg as c7,
  Ff as c8,
  Yh as c9,
  Oo as cA,
  ds as cB,
  _h as cC,
  xr as cD,
  us as cE,
  sx as cF,
  fs as cG,
  ir as cH,
  hs as cI,
  sr as cJ,
  Gc as cK,
  gm as cL,
  Lo as cM,
  rx as cN,
  fm as cO,
  iv as cP,
  jl as cQ,
  ax as cR,
  Yf as cS,
  vr as cT,
  No as cU,
  br as cV,
  Zl as cW,
  On as cX,
  kl as cY,
  lv as cZ,
  qf as c_,
  fx as ca,
  Nh as cb,
  ex as cc,
  Ef as cd,
  U0 as ce,
  If as cf,
  yf as cg,
  tx as ch,
  Pf as ci,
  Q0 as cj,
  K0 as ck,
  Sf as cl,
  q0 as cm,
  Y0 as cn,
  ox as co,
  J0 as cp,
  X0 as cq,
  Z0 as cr,
  Qt as cs,
  Il as ct,
  zl as cu,
  Ml as cv,
  go as cw,
  sn as cx,
  Qg as cy,
  mr as cz,
  Lp as d,
  ws as d0,
  G0 as d1,
  hv as d2,
  vv as d3,
  yv as d4,
  aa as d5,
  Wb as d6,
  Pv as d7,
  mx as d8,
  Iv as d9,
  Xf as da,
  Ex as db,
  kv as dc,
  Gv as dd,
  ko as de,
  $s as df,
  ob as dg,
  Jb as dh,
  nb as di,
  dn as dj,
  db as dk,
  mb as dl,
  Es as dm,
  cx as dn,
  Ab as dp,
  Rs as dq,
  Ye as dr,
  Xe as ds,
  Hg as dt,
  O0 as du,
  L0 as dv,
  F0 as dw,
  B0 as dx,
  Hp as e,
  _p as f,
  qp as g,
  An as h,
  G as i,
  Xp as j,
  tg as k,
  lg as l,
  hx as m,
  ug as n,
  hg as o,
  gg as p,
  mg as q,
  Lt as r,
  Yo as s,
  bg as t,
  $g as u,
  Tg as v,
  kg as w,
  Bg as x,
  Ng as y,
  Vg as z
};
