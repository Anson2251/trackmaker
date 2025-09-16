var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { ag as Gi, ah as hs, ai as bo, aj as Tn, ak as En, al as Ki, am as ps, E as Ct, an as yt, ao as qi, ap as Ui, aq as gs, ar as ms, as as Xi, at as Yi, au as Zi, av as Qi, aw as vs, ax as $r, ay as bs, az as xs, aA as Cs, aB as ys, aC as Ss, aD as ws, aE as $s, d as te, i as ie, j as I, v as Go, p as ye, b as V, q as Se, h as C, W as lo, g as Ji, aF as Ps, N as Io, c as Kr, o as qr, a as Qe, r as xo, I as Qo, k as Ue, f as ke, e as Oo, J as zs, L as Ts, z as _t, F as Lo, P as Ur, O as Ho, T as Es, t as ue, a7 as el, aG as Bs, w as Jo, B as Co, U as Ms, m as et, M as Pr, Q as ol, aH as Rs, V as Bn, l as ks, n as Mn, aI as Is, a2 as Hs, aJ as Fs, aK as Os, aL as tl, aM as Ko, aN as Ls, aO as As, af as Rn } from "./index-B3cU0dyc.js";
var Ds = "[object Symbol]";
function Xr(e) {
  return typeof e == "symbol" || Gi(e) && hs(e) == Ds;
}
function rl(e, o) {
  for (var t = -1, r = e == null ? 0 : e.length, n = Array(r); ++t < r; ) n[t] = o(e[t], t, e);
  return n;
}
var kn = Tn ? Tn.prototype : void 0, In = kn ? kn.toString : void 0;
function nl(e) {
  if (typeof e == "string") return e;
  if (bo(e)) return rl(e, nl) + "";
  if (Xr(e)) return In ? In.call(e) : "";
  var o = e + "";
  return o == "0" && 1 / e == -1 / 0 ? "-0" : o;
}
function Yr(e) {
  return e;
}
function Ws(e, o, t) {
  switch (t.length) {
    case 0:
      return e.call(o);
    case 1:
      return e.call(o, t[0]);
    case 2:
      return e.call(o, t[0], t[1]);
    case 3:
      return e.call(o, t[0], t[1], t[2]);
  }
  return e.apply(o, t);
}
function _s(e, o) {
  var t = -1, r = e.length;
  for (o || (o = Array(r)); ++t < r; ) o[t] = e[t];
  return o;
}
var Ns = 800, js = 16, Vs = Date.now;
function Gs(e) {
  var o = 0, t = 0;
  return function() {
    var r = Vs(), n = js - (r - t);
    if (t = r, n > 0) {
      if (++o >= Ns) return arguments[0];
    } else o = 0;
    return e.apply(void 0, arguments);
  };
}
function Ks(e) {
  return function() {
    return e;
  };
}
var qs = En ? function(e, o) {
  return En(e, "toString", { configurable: true, enumerable: false, value: Ks(o), writable: true });
} : Yr, Us = Gs(qs);
function Xs(e, o, t, r) {
  var n = !t;
  t || (t = {});
  for (var i = -1, l = o.length; ++i < l; ) {
    var a = o[i], s = void 0;
    s === void 0 && (s = e[a]), n ? Ki(t, a, s) : ps(t, a, s);
  }
  return t;
}
var Hn = Math.max;
function Ys(e, o, t) {
  return o = Hn(o === void 0 ? e.length - 1 : o, 0), function() {
    for (var r = arguments, n = -1, i = Hn(r.length - o, 0), l = Array(i); ++n < i; ) l[n] = r[o + n];
    n = -1;
    for (var a = Array(o + 1); ++n < o; ) a[n] = r[n];
    return a[o] = t(l), Ws(e, this, a);
  };
}
function Zs(e, o) {
  return Us(Ys(e, o, Yr), e + "");
}
function Qs(e, o, t) {
  if (!Ct(t)) return false;
  var r = typeof o;
  return (r == "number" ? yt(t) && qi(o, t.length) : r == "string" && o in t) ? Ui(t[o], e) : false;
}
function Js(e) {
  return Zs(function(o, t) {
    var r = -1, n = t.length, i = n > 1 ? t[n - 1] : void 0, l = n > 2 ? t[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (n--, i) : void 0, l && Qs(t[0], t[1], l) && (i = n < 3 ? void 0 : i, n = 1), o = Object(o); ++r < n; ) {
      var a = t[r];
      a && e(o, a, r, i);
    }
    return o;
  });
}
function ec(e) {
  var o = [];
  if (e != null) for (var t in Object(e)) o.push(t);
  return o;
}
var oc = Object.prototype, tc = oc.hasOwnProperty;
function rc(e) {
  if (!Ct(e)) return ec(e);
  var o = gs(e), t = [];
  for (var r in e) r == "constructor" && (o || !tc.call(e, r)) || t.push(r);
  return t;
}
function il(e) {
  return yt(e) ? ms(e, true) : rc(e);
}
var nc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ic = /^\w*$/;
function Zr(e, o) {
  if (bo(e)) return false;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || Xr(e) ? true : ic.test(e) || !nc.test(e) || o != null && e in Object(o);
}
var lc = "Expected a function";
function Qr(e, o) {
  if (typeof e != "function" || o != null && typeof o != "function") throw new TypeError(lc);
  var t = function() {
    var r = arguments, n = o ? o.apply(this, r) : r[0], i = t.cache;
    if (i.has(n)) return i.get(n);
    var l = e.apply(this, r);
    return t.cache = i.set(n, l) || i, l;
  };
  return t.cache = new (Qr.Cache || Xi)(), t;
}
Qr.Cache = Xi;
var ac = 500;
function sc(e) {
  var o = Qr(e, function(r) {
    return t.size === ac && t.clear(), r;
  }), t = o.cache;
  return o;
}
var cc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dc = /\\(\\)?/g, uc = sc(function(e) {
  var o = [];
  return e.charCodeAt(0) === 46 && o.push(""), e.replace(cc, function(t, r, n, i) {
    o.push(n ? i.replace(dc, "$1") : r || t);
  }), o;
});
function ll(e) {
  return e == null ? "" : nl(e);
}
function al(e, o) {
  return bo(e) ? e : Zr(e, o) ? [e] : uc(ll(e));
}
function qt(e) {
  if (typeof e == "string" || Xr(e)) return e;
  var o = e + "";
  return o == "0" && 1 / e == -1 / 0 ? "-0" : o;
}
function sl(e, o) {
  o = al(o, e);
  for (var t = 0, r = o.length; e != null && t < r; ) e = e[qt(o[t++])];
  return t && t == r ? e : void 0;
}
function fc(e, o, t) {
  var r = e == null ? void 0 : sl(e, o);
  return r === void 0 ? t : r;
}
function hc(e, o, t) {
  var r = -1, n = e.length;
  o < 0 && (o = -o > n ? 0 : n + o), t = t > n ? n : t, t < 0 && (t += n), n = o > t ? 0 : t - o >>> 0, o >>>= 0;
  for (var i = Array(n); ++r < n; ) i[r] = e[r + o];
  return i;
}
function pc(e, o, t) {
  var r = e.length;
  return t = t === void 0 ? r : t, !o && t >= r ? e : hc(e, o, t);
}
var gc = "\\ud800-\\udfff", mc = "\\u0300-\\u036f", vc = "\\ufe20-\\ufe2f", bc = "\\u20d0-\\u20ff", xc = mc + vc + bc, Cc = "\\ufe0e\\ufe0f", yc = "\\u200d", Sc = RegExp("[" + yc + gc + xc + Cc + "]");
function cl(e) {
  return Sc.test(e);
}
function wc(e) {
  return e.split("");
}
var dl = "\\ud800-\\udfff", $c = "\\u0300-\\u036f", Pc = "\\ufe20-\\ufe2f", zc = "\\u20d0-\\u20ff", Tc = $c + Pc + zc, Ec = "\\ufe0e\\ufe0f", Bc = "[" + dl + "]", zr = "[" + Tc + "]", Tr = "\\ud83c[\\udffb-\\udfff]", Mc = "(?:" + zr + "|" + Tr + ")", ul = "[^" + dl + "]", fl = "(?:\\ud83c[\\udde6-\\uddff]){2}", hl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Rc = "\\u200d", pl = Mc + "?", gl = "[" + Ec + "]?", kc = "(?:" + Rc + "(?:" + [ul, fl, hl].join("|") + ")" + gl + pl + ")*", Ic = gl + pl + kc, Hc = "(?:" + [ul + zr + "?", zr, fl, hl, Bc].join("|") + ")", Fc = RegExp(Tr + "(?=" + Tr + ")|" + Hc + Ic, "g");
function Oc(e) {
  return e.match(Fc) || [];
}
function Lc(e) {
  return cl(e) ? Oc(e) : wc(e);
}
function Ac(e) {
  return function(o) {
    o = ll(o);
    var t = cl(o) ? Lc(o) : void 0, r = t ? t[0] : o.charAt(0), n = t ? pc(t, 1).join("") : o.slice(1);
    return r[e]() + n;
  };
}
var Dc = Ac("toUpperCase"), Wc = 1, _c = 2;
function Nc(e, o, t, r) {
  var n = t.length, i = n;
  if (e == null) return !i;
  for (e = Object(e); n--; ) {
    var l = t[n];
    if (l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return false;
  }
  for (; ++n < i; ) {
    l = t[n];
    var a = l[0], s = e[a], c = l[1];
    if (l[2]) {
      if (s === void 0 && !(a in e)) return false;
    } else {
      var d = new Yi(), u;
      if (!(u === void 0 ? Zi(c, s, Wc | _c, r, d) : u)) return false;
    }
  }
  return true;
}
function ml(e) {
  return e === e && !Ct(e);
}
function jc(e) {
  for (var o = Qi(e), t = o.length; t--; ) {
    var r = o[t], n = e[r];
    o[t] = [r, n, ml(n)];
  }
  return o;
}
function vl(e, o) {
  return function(t) {
    return t == null ? false : t[e] === o && (o !== void 0 || e in Object(t));
  };
}
function Vc(e) {
  var o = jc(e);
  return o.length == 1 && o[0][2] ? vl(o[0][0], o[0][1]) : function(t) {
    return t === e || Nc(t, e, o);
  };
}
function Gc(e, o) {
  return e != null && o in Object(e);
}
function Kc(e, o, t) {
  o = al(o, e);
  for (var r = -1, n = o.length, i = false; ++r < n; ) {
    var l = qt(o[r]);
    if (!(i = e != null && t(e, l))) break;
    e = e[l];
  }
  return i || ++r != n ? i : (n = e == null ? 0 : e.length, !!n && vs(n) && qi(l, n) && (bo(e) || $r(e)));
}
function qc(e, o) {
  return e != null && Kc(e, o, Gc);
}
var Uc = 1, Xc = 2;
function Yc(e, o) {
  return Zr(e) && ml(o) ? vl(qt(e), o) : function(t) {
    var r = fc(t, e);
    return r === void 0 && r === o ? qc(t, e) : Zi(o, r, Uc | Xc);
  };
}
function Zc(e) {
  return function(o) {
    return o == null ? void 0 : o[e];
  };
}
function Qc(e) {
  return function(o) {
    return sl(o, e);
  };
}
function Jc(e) {
  return Zr(e) ? Zc(qt(e)) : Qc(e);
}
function ed(e) {
  return typeof e == "function" ? e : e == null ? Yr : typeof e == "object" ? bo(e) ? Yc(e[0], e[1]) : Vc(e) : Jc(e);
}
function od(e) {
  return function(o, t, r) {
    for (var n = -1, i = Object(o), l = r(o), a = l.length; a--; ) {
      var s = l[++n];
      if (t(i[s], s, i) === false) break;
    }
    return o;
  };
}
var bl = od();
function td(e, o) {
  return e && bl(e, o, Qi);
}
function rd(e, o) {
  return function(t, r) {
    if (t == null) return t;
    if (!yt(t)) return e(t, r);
    for (var n = t.length, i = -1, l = Object(t); ++i < n && r(l[i], i, l) !== false; ) ;
    return t;
  };
}
var nd = rd(td);
function Er(e, o, t) {
  (t !== void 0 && !Ui(e[o], t) || t === void 0 && !(o in e)) && Ki(e, o, t);
}
function id(e) {
  return Gi(e) && yt(e);
}
function Br(e, o) {
  if (!(o === "constructor" && typeof e[o] == "function") && o != "__proto__") return e[o];
}
function ld(e) {
  return Xs(e, il(e));
}
function ad(e, o, t, r, n, i, l) {
  var a = Br(e, t), s = Br(o, t), c = l.get(s);
  if (c) {
    Er(e, t, c);
    return;
  }
  var d = i ? i(a, s, t + "", e, o, l) : void 0, u = d === void 0;
  if (u) {
    var h = bo(s), f = !h && bs(s), p = !h && !f && xs(s);
    d = s, h || f || p ? bo(a) ? d = a : id(a) ? d = _s(a) : f ? (u = false, d = Cs(s, true)) : p ? (u = false, d = ys(s, true)) : d = [] : Ss(s) || $r(s) ? (d = a, $r(a) ? d = ld(a) : (!Ct(a) || ws(a)) && (d = $s(s))) : u = false;
  }
  u && (l.set(s, d), n(d, s, r, i, l), l.delete(s)), Er(e, t, d);
}
function xl(e, o, t, r, n) {
  e !== o && bl(o, function(i, l) {
    if (n || (n = new Yi()), Ct(i)) ad(e, o, l, t, xl, r, n);
    else {
      var a = r ? r(Br(e, l), i, l + "", e, o, n) : void 0;
      a === void 0 && (a = i), Er(e, l, a);
    }
  }, il);
}
function sd(e, o) {
  var t = -1, r = yt(e) ? Array(e.length) : [];
  return nd(e, function(n, i, l) {
    r[++t] = o(n, i, l);
  }), r;
}
function cd(e, o) {
  var t = bo(e) ? rl : sd;
  return t(e, ed(o));
}
var lt = Js(function(e, o, t) {
  xl(e, o, t);
});
/*!
* vue-router v4.5.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
const Vo = typeof document < "u";
function Cl(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function dd(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Cl(e.default);
}
const pe = Object.assign;
function lr(e, o) {
  const t = {};
  for (const r in o) {
    const n = o[r];
    t[r] = qe(n) ? n.map(e) : e(n);
  }
  return t;
}
const ct = () => {
}, qe = Array.isArray, yl = /#/g, ud = /&/g, fd = /\//g, hd = /=/g, pd = /\?/g, Sl = /\+/g, gd = /%5B/g, md = /%5D/g, wl = /%5E/g, vd = /%60/g, $l = /%7B/g, bd = /%7C/g, Pl = /%7D/g, xd = /%20/g;
function Jr(e) {
  return encodeURI("" + e).replace(bd, "|").replace(gd, "[").replace(md, "]");
}
function Cd(e) {
  return Jr(e).replace($l, "{").replace(Pl, "}").replace(wl, "^");
}
function Mr(e) {
  return Jr(e).replace(Sl, "%2B").replace(xd, "+").replace(yl, "%23").replace(ud, "%26").replace(vd, "`").replace($l, "{").replace(Pl, "}").replace(wl, "^");
}
function yd(e) {
  return Mr(e).replace(hd, "%3D");
}
function Sd(e) {
  return Jr(e).replace(yl, "%23").replace(pd, "%3F");
}
function wd(e) {
  return e == null ? "" : Sd(e).replace(fd, "%2F");
}
function ft(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const $d = /\/$/, Pd = (e) => e.replace($d, "");
function ar(e, o, t = "/") {
  let r, n = {}, i = "", l = "";
  const a = o.indexOf("#");
  let s = o.indexOf("?");
  return a < s && a >= 0 && (s = -1), s > -1 && (r = o.slice(0, s), i = o.slice(s + 1, a > -1 ? a : o.length), n = e(i)), a > -1 && (r = r || o.slice(0, a), l = o.slice(a, o.length)), r = Bd(r ?? o, t), { fullPath: r + (i && "?") + i + l, path: r, query: n, hash: ft(l) };
}
function zd(e, o) {
  const t = o.query ? e(o.query) : "";
  return o.path + (t && "?") + t + (o.hash || "");
}
function Td(e, o, t) {
  const r = o.matched.length - 1, n = t.matched.length - 1;
  return r > -1 && r === n && Xo(o.matched[r], t.matched[n]) && zl(o.params, t.params) && e(o.query) === e(t.query) && o.hash === t.hash;
}
function Xo(e, o) {
  return (e.aliasOf || e) === (o.aliasOf || o);
}
function zl(e, o) {
  if (Object.keys(e).length !== Object.keys(o).length) return false;
  for (const t in e) if (!Ed(e[t], o[t])) return false;
  return true;
}
function Ed(e, o) {
  return qe(e) ? Fn(e, o) : qe(o) ? Fn(o, e) : e === o;
}
function Fn(e, o) {
  return qe(o) ? e.length === o.length && e.every((t, r) => t === o[r]) : e.length === 1 && e[0] === o;
}
function Bd(e, o) {
  if (e.startsWith("/")) return e;
  if (!e) return o;
  const t = o.split("/"), r = e.split("/"), n = r[r.length - 1];
  (n === ".." || n === ".") && r.push("");
  let i = t.length - 1, l, a;
  for (l = 0; l < r.length; l++) if (a = r[l], a !== ".") if (a === "..") i > 1 && i--;
  else break;
  return t.slice(0, i).join("/") + "/" + r.slice(l).join("/");
}
const ho = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var ht;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ht || (ht = {}));
var Nt;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Nt || (Nt = {}));
const sr = "";
function Md(e) {
  if (!e) if (Vo) {
    const o = document.querySelector("base");
    e = o && o.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Pd(e);
}
const Rd = /^[^#]+#/;
function kd(e, o) {
  return e.replace(Rd, "#") + o;
}
function Id(e, o) {
  const t = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return { behavior: o.behavior, left: r.left - t.left - (o.left || 0), top: r.top - t.top - (o.top || 0) };
}
const Hd = () => ({ left: window.scrollX, top: window.scrollY });
function Fd(e) {
  let o;
  if ("el" in e) {
    const t = e.el, r = typeof t == "string" && t.startsWith("#"), n = typeof t == "string" ? r ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
    if (!n) return;
    o = Id(n, e);
  } else o = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(o) : window.scrollTo(o.left != null ? o.left : window.scrollX, o.top != null ? o.top : window.scrollY);
}
function On(e, o) {
  return (history.state ? history.state.position - o : -1) + e;
}
const Rr = /* @__PURE__ */ new Map();
function Od(e, o) {
  Rr.set(e, o);
}
function Ld(e) {
  const o = Rr.get(e);
  return Rr.delete(e), o;
}
function Db(e = "") {
  let o = [], t = [[sr, {}]], r = 0;
  e = Md(e);
  function n(a, s = {}) {
    r++, r !== t.length && t.splice(r), t.push([a, s]);
  }
  function i(a, s, { direction: c, delta: d }) {
    const u = { direction: c, delta: d, type: ht.pop };
    for (const h of o) h(a, s, u);
  }
  const l = { location: sr, state: {}, base: e, createHref: kd.bind(null, e), replace(a, s) {
    t.splice(r--, 1), n(a, s);
  }, push(a, s) {
    n(a, s);
  }, listen(a) {
    return o.push(a), () => {
      const s = o.indexOf(a);
      s > -1 && o.splice(s, 1);
    };
  }, destroy() {
    o = [], t = [[sr, {}]], r = 0;
  }, go(a, s = true) {
    const c = this.location, d = a < 0 ? Nt.back : Nt.forward;
    r = Math.max(0, Math.min(r + a, t.length - 1)), s && i(this.location, c, { direction: d, delta: a });
  } };
  return Object.defineProperty(l, "location", { enumerable: true, get: () => t[r][0] }), Object.defineProperty(l, "state", { enumerable: true, get: () => t[r][1] }), l;
}
function Ad(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Tl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const El = Symbol("");
var Ln;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ln || (Ln = {}));
function Yo(e, o) {
  return pe(new Error(), { type: e, [El]: true }, o);
}
function ro(e, o) {
  return e instanceof Error && El in e && (o == null || !!(e.type & o));
}
const An = "[^/]+?", Dd = { sensitive: false, strict: false, start: true, end: true }, Wd = /[.+*?^${}()[\]/\\]/g;
function _d(e, o) {
  const t = pe({}, Dd, o), r = [];
  let n = t.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const d = c.length ? [] : [90];
    t.strict && !c.length && (n += "/");
    for (let u = 0; u < c.length; u++) {
      const h = c[u];
      let f = 40 + (t.sensitive ? 0.25 : 0);
      if (h.type === 0) u || (n += "/"), n += h.value.replace(Wd, "\\$&"), f += 40;
      else if (h.type === 1) {
        const { value: p, repeatable: v, optional: b, regexp: g } = h;
        i.push({ name: p, repeatable: v, optional: b });
        const x = g || An;
        if (x !== An) {
          f += 10;
          try {
            new RegExp(`(${x})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${x}): ` + y.message);
          }
        }
        let P = v ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        u || (P = b && c.length < 2 ? `(?:/${P})` : "/" + P), b && (P += "?"), n += P, f += 20, b && (f += -8), v && (f += -20), x === ".*" && (f += -50);
      }
      d.push(f);
    }
    r.push(d);
  }
  if (t.strict && t.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += 0.7000000000000001;
  }
  t.strict || (n += "/?"), t.end ? n += "$" : t.strict && !n.endsWith("/") && (n += "(?:/|$)");
  const l = new RegExp(n, t.sensitive ? "" : "i");
  function a(c) {
    const d = c.match(l), u = {};
    if (!d) return null;
    for (let h = 1; h < d.length; h++) {
      const f = d[h] || "", p = i[h - 1];
      u[p.name] = f && p.repeatable ? f.split("/") : f;
    }
    return u;
  }
  function s(c) {
    let d = "", u = false;
    for (const h of e) {
      (!u || !d.endsWith("/")) && (d += "/"), u = false;
      for (const f of h) if (f.type === 0) d += f.value;
      else if (f.type === 1) {
        const { value: p, repeatable: v, optional: b } = f, g = p in c ? c[p] : "";
        if (qe(g) && !v) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const x = qe(g) ? g.join("/") : g;
        if (!x) if (b) h.length < 2 && (d.endsWith("/") ? d = d.slice(0, -1) : u = true);
        else throw new Error(`Missing required param "${p}"`);
        d += x;
      }
    }
    return d || "/";
  }
  return { re: l, score: r, keys: i, parse: a, stringify: s };
}
function Nd(e, o) {
  let t = 0;
  for (; t < e.length && t < o.length; ) {
    const r = o[t] - e[t];
    if (r) return r;
    t++;
  }
  return e.length < o.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > o.length ? o.length === 1 && o[0] === 80 ? 1 : -1 : 0;
}
function Bl(e, o) {
  let t = 0;
  const r = e.score, n = o.score;
  for (; t < r.length && t < n.length; ) {
    const i = Nd(r[t], n[t]);
    if (i) return i;
    t++;
  }
  if (Math.abs(n.length - r.length) === 1) {
    if (Dn(r)) return 1;
    if (Dn(n)) return -1;
  }
  return n.length - r.length;
}
function Dn(e) {
  const o = e[e.length - 1];
  return e.length > 0 && o[o.length - 1] < 0;
}
const jd = { type: 0, value: "" }, Vd = /[a-zA-Z0-9_]/;
function Gd(e) {
  if (!e) return [[]];
  if (e === "/") return [[jd]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function o(f) {
    throw new Error(`ERR (${t})/"${c}": ${f}`);
  }
  let t = 0, r = t;
  const n = [];
  let i;
  function l() {
    i && n.push(i), i = [];
  }
  let a = 0, s, c = "", d = "";
  function u() {
    c && (t === 0 ? i.push({ type: 0, value: c }) : t === 1 || t === 2 || t === 3 ? (i.length > 1 && (s === "*" || s === "+") && o(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: 1, value: c, regexp: d, repeatable: s === "*" || s === "+", optional: s === "*" || s === "?" })) : o("Invalid state to consume buffer"), c = "");
  }
  function h() {
    c += s;
  }
  for (; a < e.length; ) {
    if (s = e[a++], s === "\\" && t !== 2) {
      r = t, t = 4;
      continue;
    }
    switch (t) {
      case 0:
        s === "/" ? (c && u(), l()) : s === ":" ? (u(), t = 1) : h();
        break;
      case 4:
        h(), t = r;
        break;
      case 1:
        s === "(" ? t = 2 : Vd.test(s) ? h() : (u(), t = 0, s !== "*" && s !== "?" && s !== "+" && a--);
        break;
      case 2:
        s === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + s : t = 3 : d += s;
        break;
      case 3:
        u(), t = 0, s !== "*" && s !== "?" && s !== "+" && a--, d = "";
        break;
      default:
        o("Unknown state");
        break;
    }
  }
  return t === 2 && o(`Unfinished custom RegExp for param "${c}"`), u(), l(), n;
}
function Kd(e, o, t) {
  const r = _d(Gd(e.path), t), n = pe(r, { record: e, parent: o, children: [], alias: [] });
  return o && !n.record.aliasOf == !o.record.aliasOf && o.children.push(n), n;
}
function qd(e, o) {
  const t = [], r = /* @__PURE__ */ new Map();
  o = jn({ strict: false, end: true, sensitive: false }, o);
  function n(u) {
    return r.get(u);
  }
  function i(u, h, f) {
    const p = !f, v = _n(u);
    v.aliasOf = f && f.record;
    const b = jn(o, u), g = [v];
    if ("alias" in u) {
      const y = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const z of y) g.push(_n(pe({}, v, { components: f ? f.record.components : v.components, path: z, aliasOf: f ? f.record : v })));
    }
    let x, P;
    for (const y of g) {
      const { path: z } = y;
      if (h && z[0] !== "/") {
        const T = h.record.path, m = T[T.length - 1] === "/" ? "" : "/";
        y.path = h.record.path + (z && m + z);
      }
      if (x = Kd(y, h, b), f ? f.alias.push(x) : (P = P || x, P !== x && P.alias.push(x), p && u.name && !Nn(x) && l(u.name)), Ml(x) && s(x), v.children) {
        const T = v.children;
        for (let m = 0; m < T.length; m++) i(T[m], x, f && f.children[m]);
      }
      f = f || x;
    }
    return P ? () => {
      l(P);
    } : ct;
  }
  function l(u) {
    if (Tl(u)) {
      const h = r.get(u);
      h && (r.delete(u), t.splice(t.indexOf(h), 1), h.children.forEach(l), h.alias.forEach(l));
    } else {
      const h = t.indexOf(u);
      h > -1 && (t.splice(h, 1), u.record.name && r.delete(u.record.name), u.children.forEach(l), u.alias.forEach(l));
    }
  }
  function a() {
    return t;
  }
  function s(u) {
    const h = Yd(u, t);
    t.splice(h, 0, u), u.record.name && !Nn(u) && r.set(u.record.name, u);
  }
  function c(u, h) {
    let f, p = {}, v, b;
    if ("name" in u && u.name) {
      if (f = r.get(u.name), !f) throw Yo(1, { location: u });
      b = f.record.name, p = pe(Wn(h.params, f.keys.filter((P) => !P.optional).concat(f.parent ? f.parent.keys.filter((P) => P.optional) : []).map((P) => P.name)), u.params && Wn(u.params, f.keys.map((P) => P.name))), v = f.stringify(p);
    } else if (u.path != null) v = u.path, f = t.find((P) => P.re.test(v)), f && (p = f.parse(v), b = f.record.name);
    else {
      if (f = h.name ? r.get(h.name) : t.find((P) => P.re.test(h.path)), !f) throw Yo(1, { location: u, currentLocation: h });
      b = f.record.name, p = pe({}, h.params, u.params), v = f.stringify(p);
    }
    const g = [];
    let x = f;
    for (; x; ) g.unshift(x.record), x = x.parent;
    return { name: b, path: v, params: p, matched: g, meta: Xd(g) };
  }
  e.forEach((u) => i(u));
  function d() {
    t.length = 0, r.clear();
  }
  return { addRoute: i, resolve: c, removeRoute: l, clearRoutes: d, getRoutes: a, getRecordMatcher: n };
}
function Wn(e, o) {
  const t = {};
  for (const r of o) r in e && (t[r] = e[r]);
  return t;
}
function _n(e) {
  const o = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Ud(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(o, "mods", { value: {} }), o;
}
function Ud(e) {
  const o = {}, t = e.props || false;
  if ("component" in e) o.default = t;
  else for (const r in e.components) o[r] = typeof t == "object" ? t[r] : t;
  return o;
}
function Nn(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function Xd(e) {
  return e.reduce((o, t) => pe(o, t.meta), {});
}
function jn(e, o) {
  const t = {};
  for (const r in e) t[r] = r in o ? o[r] : e[r];
  return t;
}
function Yd(e, o) {
  let t = 0, r = o.length;
  for (; t !== r; ) {
    const i = t + r >> 1;
    Bl(e, o[i]) < 0 ? r = i : t = i + 1;
  }
  const n = Zd(e);
  return n && (r = o.lastIndexOf(n, r - 1)), r;
}
function Zd(e) {
  let o = e;
  for (; o = o.parent; ) if (Ml(o) && Bl(e, o) === 0) return o;
}
function Ml({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Qd(e) {
  const o = {};
  if (e === "" || e === "?") return o;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let n = 0; n < r.length; ++n) {
    const i = r[n].replace(Sl, " "), l = i.indexOf("="), a = ft(l < 0 ? i : i.slice(0, l)), s = l < 0 ? null : ft(i.slice(l + 1));
    if (a in o) {
      let c = o[a];
      qe(c) || (c = o[a] = [c]), c.push(s);
    } else o[a] = s;
  }
  return o;
}
function Vn(e) {
  let o = "";
  for (let t in e) {
    const r = e[t];
    if (t = yd(t), r == null) {
      r !== void 0 && (o += (o.length ? "&" : "") + t);
      continue;
    }
    (qe(r) ? r.map((i) => i && Mr(i)) : [r && Mr(r)]).forEach((i) => {
      i !== void 0 && (o += (o.length ? "&" : "") + t, i != null && (o += "=" + i));
    });
  }
  return o;
}
function Jd(e) {
  const o = {};
  for (const t in e) {
    const r = e[t];
    r !== void 0 && (o[t] = qe(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
  }
  return o;
}
const eu = Symbol(""), Gn = Symbol(""), en = Symbol(""), on = Symbol(""), kr = Symbol("");
function rt() {
  let e = [];
  function o(r) {
    return e.push(r), () => {
      const n = e.indexOf(r);
      n > -1 && e.splice(n, 1);
    };
  }
  function t() {
    e = [];
  }
  return { add: o, list: () => e.slice(), reset: t };
}
function mo(e, o, t, r, n, i = (l) => l()) {
  const l = r && (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
  return () => new Promise((a, s) => {
    const c = (h) => {
      h === false ? s(Yo(4, { from: t, to: o })) : h instanceof Error ? s(h) : Ad(h) ? s(Yo(2, { from: o, to: h })) : (l && r.enterCallbacks[n] === l && typeof h == "function" && l.push(h), a());
    }, d = i(() => e.call(r && r.instances[n], o, t, c));
    let u = Promise.resolve(d);
    e.length < 3 && (u = u.then(c)), u.catch((h) => s(h));
  });
}
function cr(e, o, t, r, n = (i) => i()) {
  const i = [];
  for (const l of e) for (const a in l.components) {
    let s = l.components[a];
    if (!(o !== "beforeRouteEnter" && !l.instances[a])) if (Cl(s)) {
      const d = (s.__vccOpts || s)[o];
      d && i.push(mo(d, t, r, l, a, n));
    } else {
      let c = s();
      i.push(() => c.then((d) => {
        if (!d) throw new Error(`Couldn't resolve component "${a}" at "${l.path}"`);
        const u = dd(d) ? d.default : d;
        l.mods[a] = d, l.components[a] = u;
        const f = (u.__vccOpts || u)[o];
        return f && mo(f, t, r, l, a, n)();
      }));
    }
  }
  return i;
}
function Kn(e) {
  const o = ie(en), t = ie(on), r = I(() => {
    const s = Go(e.to);
    return o.resolve(s);
  }), n = I(() => {
    const { matched: s } = r.value, { length: c } = s, d = s[c - 1], u = t.matched;
    if (!d || !u.length) return -1;
    const h = u.findIndex(Xo.bind(null, d));
    if (h > -1) return h;
    const f = qn(s[c - 2]);
    return c > 1 && qn(d) === f && u[u.length - 1].path !== f ? u.findIndex(Xo.bind(null, s[c - 2])) : h;
  }), i = I(() => n.value > -1 && iu(t.params, r.value.params)), l = I(() => n.value > -1 && n.value === t.matched.length - 1 && zl(t.params, r.value.params));
  function a(s = {}) {
    if (nu(s)) {
      const c = o[Go(e.replace) ? "replace" : "push"](Go(e.to)).catch(ct);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return { route: r, href: I(() => r.value.href), isActive: i, isExactActive: l, navigate: a };
}
function ou(e) {
  return e.length === 1 ? e[0] : e;
}
const tu = te({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: Kn, setup(e, { slots: o }) {
  const t = Ji(Kn(e)), { options: r } = ie(en), n = I(() => ({ [Un(e.activeClass, r.linkActiveClass, "router-link-active")]: t.isActive, [Un(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive }));
  return () => {
    const i = o.default && ou(o.default(t));
    return e.custom ? i : C("a", { "aria-current": t.isExactActive ? e.ariaCurrentValue : null, href: t.href, onClick: t.navigate, class: n.value }, i);
  };
} }), ru = tu;
function nu(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const o = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(o)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function iu(e, o) {
  for (const t in o) {
    const r = o[t], n = e[t];
    if (typeof r == "string") {
      if (r !== n) return false;
    } else if (!qe(n) || n.length !== r.length || r.some((i, l) => i !== n[l])) return false;
  }
  return true;
}
function qn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Un = (e, o, t) => e ?? o ?? t, lu = te({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: o, slots: t }) {
  const r = ie(kr), n = I(() => e.route || r.value), i = ie(Gn, 0), l = I(() => {
    let c = Go(i);
    const { matched: d } = n.value;
    let u;
    for (; (u = d[c]) && !u.components; ) c++;
    return c;
  }), a = I(() => n.value.matched[l.value]);
  ye(Gn, I(() => l.value + 1)), ye(eu, a), ye(kr, n);
  const s = V();
  return Se(() => [s.value, a.value, e.name], ([c, d, u], [h, f, p]) => {
    d && (d.instances[u] = c, f && f !== d && c && c === h && (d.leaveGuards.size || (d.leaveGuards = f.leaveGuards), d.updateGuards.size || (d.updateGuards = f.updateGuards))), c && d && (!f || !Xo(d, f) || !h) && (d.enterCallbacks[u] || []).forEach((v) => v(c));
  }, { flush: "post" }), () => {
    const c = n.value, d = e.name, u = a.value, h = u && u.components[d];
    if (!h) return Xn(t.default, { Component: h, route: c });
    const f = u.props[d], p = f ? f === true ? c.params : typeof f == "function" ? f(c) : f : null, b = C(h, pe({}, p, o, { onVnodeUnmounted: (g) => {
      g.component.isUnmounted && (u.instances[d] = null);
    }, ref: s }));
    return Xn(t.default, { Component: b, route: c }) || b;
  };
} });
function Xn(e, o) {
  if (!e) return null;
  const t = e(o);
  return t.length === 1 ? t[0] : t;
}
const au = lu;
function Wb(e) {
  const o = qd(e.routes, e), t = e.parseQuery || Qd, r = e.stringifyQuery || Vn, n = e.history, i = rt(), l = rt(), a = rt(), s = lo(ho);
  let c = ho;
  Vo && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const d = lr.bind(null, ($) => "" + $), u = lr.bind(null, wd), h = lr.bind(null, ft);
  function f($, W) {
    let R, K;
    return Tl($) ? (R = o.getRecordMatcher($), K = W) : K = $, o.addRoute(K, R);
  }
  function p($) {
    const W = o.getRecordMatcher($);
    W && o.removeRoute(W);
  }
  function v() {
    return o.getRoutes().map(($) => $.record);
  }
  function b($) {
    return !!o.getRecordMatcher($);
  }
  function g($, W) {
    if (W = pe({}, W || s.value), typeof $ == "string") {
      const oe = ar(t, $, W.path), me = o.resolve({ path: oe.path }, W), Ge = n.createHref(oe.fullPath);
      return pe(oe, me, { params: h(me.params), hash: ft(oe.hash), redirectedFrom: void 0, href: Ge });
    }
    let R;
    if ($.path != null) R = pe({}, $, { path: ar(t, $.path, W.path).path });
    else {
      const oe = pe({}, $.params);
      for (const me in oe) oe[me] == null && delete oe[me];
      R = pe({}, $, { params: u(oe) }), W.params = u(W.params);
    }
    const K = o.resolve(R, W), se = $.hash || "";
    K.params = d(h(K.params));
    const ge = zd(r, pe({}, $, { hash: Cd(se), path: K.path })), ee = n.createHref(ge);
    return pe({ fullPath: ge, hash: se, query: r === Vn ? Jd($.query) : $.query || {} }, K, { redirectedFrom: void 0, href: ee });
  }
  function x($) {
    return typeof $ == "string" ? ar(t, $, s.value.path) : pe({}, $);
  }
  function P($, W) {
    if (c !== $) return Yo(8, { from: W, to: $ });
  }
  function y($) {
    return m($);
  }
  function z($) {
    return y(pe(x($), { replace: true }));
  }
  function T($) {
    const W = $.matched[$.matched.length - 1];
    if (W && W.redirect) {
      const { redirect: R } = W;
      let K = typeof R == "function" ? R($) : R;
      return typeof K == "string" && (K = K.includes("?") || K.includes("#") ? K = x(K) : { path: K }, K.params = {}), pe({ query: $.query, hash: $.hash, params: K.path != null ? {} : $.params }, K);
    }
  }
  function m($, W) {
    const R = c = g($), K = s.value, se = $.state, ge = $.force, ee = $.replace === true, oe = T(R);
    if (oe) return m(pe(x(oe), { state: typeof oe == "object" ? pe({}, se, oe.state) : se, force: ge, replace: ee }), W || R);
    const me = R;
    me.redirectedFrom = W;
    let Ge;
    return !ge && Td(r, K, R) && (Ge = Yo(16, { to: me, from: K }), fe(K, K, true, false)), (Ge ? Promise.resolve(Ge) : M(me, K)).catch((ze) => ro(ze) ? ro(ze, 2) ? ze : le(ze) : X(ze, me, K)).then((ze) => {
      if (ze) {
        if (ro(ze, 2)) return m(pe({ replace: ee }, x(ze.to), { state: typeof ze.to == "object" ? pe({}, se, ze.to.state) : se, force: ge }), W || me);
      } else ze = E(me, K, true, ee, se);
      return L(me, K, ze), ze;
    });
  }
  function S($, W) {
    const R = P($, W);
    return R ? Promise.reject(R) : Promise.resolve();
  }
  function w($) {
    const W = Re.values().next().value;
    return W && typeof W.runWithContext == "function" ? W.runWithContext($) : $();
  }
  function M($, W) {
    let R;
    const [K, se, ge] = su($, W);
    R = cr(K.reverse(), "beforeRouteLeave", $, W);
    for (const oe of K) oe.leaveGuards.forEach((me) => {
      R.push(mo(me, $, W));
    });
    const ee = S.bind(null, $, W);
    return R.push(ee), re(R).then(() => {
      R = [];
      for (const oe of i.list()) R.push(mo(oe, $, W));
      return R.push(ee), re(R);
    }).then(() => {
      R = cr(se, "beforeRouteUpdate", $, W);
      for (const oe of se) oe.updateGuards.forEach((me) => {
        R.push(mo(me, $, W));
      });
      return R.push(ee), re(R);
    }).then(() => {
      R = [];
      for (const oe of ge) if (oe.beforeEnter) if (qe(oe.beforeEnter)) for (const me of oe.beforeEnter) R.push(mo(me, $, W));
      else R.push(mo(oe.beforeEnter, $, W));
      return R.push(ee), re(R);
    }).then(() => ($.matched.forEach((oe) => oe.enterCallbacks = {}), R = cr(ge, "beforeRouteEnter", $, W, w), R.push(ee), re(R))).then(() => {
      R = [];
      for (const oe of l.list()) R.push(mo(oe, $, W));
      return R.push(ee), re(R);
    }).catch((oe) => ro(oe, 8) ? oe : Promise.reject(oe));
  }
  function L($, W, R) {
    a.list().forEach((K) => w(() => K($, W, R)));
  }
  function E($, W, R, K, se) {
    const ge = P($, W);
    if (ge) return ge;
    const ee = W === ho, oe = Vo ? history.state : {};
    R && (K || ee ? n.replace($.fullPath, pe({ scroll: ee && oe && oe.scroll }, se)) : n.push($.fullPath, se)), s.value = $, fe($, W, R, ee), le();
  }
  let _;
  function D() {
    _ || (_ = n.listen(($, W, R) => {
      if (!uo.listening) return;
      const K = g($), se = T(K);
      if (se) {
        m(pe(se, { replace: true, force: true }), K).catch(ct);
        return;
      }
      c = K;
      const ge = s.value;
      Vo && Od(On(ge.fullPath, R.delta), Hd()), M(K, ge).catch((ee) => ro(ee, 12) ? ee : ro(ee, 2) ? (m(pe(x(ee.to), { force: true }), K).then((oe) => {
        ro(oe, 20) && !R.delta && R.type === ht.pop && n.go(-1, false);
      }).catch(ct), Promise.reject()) : (R.delta && n.go(-R.delta, false), X(ee, K, ge))).then((ee) => {
        ee = ee || E(K, ge, false), ee && (R.delta && !ro(ee, 8) ? n.go(-R.delta, false) : R.type === ht.pop && ro(ee, 20) && n.go(-1, false)), L(K, ge, ee);
      }).catch(ct);
    }));
  }
  let B = rt(), N = rt(), k;
  function X($, W, R) {
    le($);
    const K = N.list();
    return K.length ? K.forEach((se) => se($, W, R)) : console.error($), Promise.reject($);
  }
  function ne() {
    return k && s.value !== ho ? Promise.resolve() : new Promise(($, W) => {
      B.add([$, W]);
    });
  }
  function le($) {
    return k || (k = !$, D(), B.list().forEach(([W, R]) => $ ? R($) : W()), B.reset()), $;
  }
  function fe($, W, R, K) {
    const { scrollBehavior: se } = e;
    if (!Vo || !se) return Promise.resolve();
    const ge = !R && Ld(On($.fullPath, 0)) || (K || !R) && history.state && history.state.scroll || null;
    return Io().then(() => se($, W, ge)).then((ee) => ee && Fd(ee)).catch((ee) => X(ee, $, W));
  }
  const ae = ($) => n.go($);
  let Be;
  const Re = /* @__PURE__ */ new Set(), uo = { currentRoute: s, listening: true, addRoute: f, removeRoute: p, clearRoutes: o.clearRoutes, hasRoute: b, getRoutes: v, resolve: g, options: e, push: y, replace: z, go: ae, back: () => ae(-1), forward: () => ae(1), beforeEach: i.add, beforeResolve: l.add, afterEach: a.add, onError: N.add, isReady: ne, install($) {
    const W = this;
    $.component("RouterLink", ru), $.component("RouterView", au), $.config.globalProperties.$router = W, Object.defineProperty($.config.globalProperties, "$route", { enumerable: true, get: () => Go(s) }), Vo && !Be && s.value === ho && (Be = true, y(n.location).catch((se) => {
    }));
    const R = {};
    for (const se in ho) Object.defineProperty(R, se, { get: () => s.value[se], enumerable: true });
    $.provide(en, W), $.provide(on, Ps(R)), $.provide(kr, s);
    const K = $.unmount;
    Re.add($), $.unmount = function() {
      Re.delete($), Re.size < 1 && (c = ho, _ && _(), _ = null, s.value = ho, Be = false, k = false), K();
    };
  } };
  function re($) {
    return $.reduce((W, R) => W.then(() => w(R)), Promise.resolve());
  }
  return uo;
}
function su(e, o) {
  const t = [], r = [], n = [], i = Math.max(o.matched.length, e.matched.length);
  for (let l = 0; l < i; l++) {
    const a = o.matched[l];
    a && (e.matched.find((c) => Xo(c, a)) ? r.push(a) : t.push(a));
    const s = e.matched[l];
    s && (o.matched.find((c) => Xo(c, s)) || n.push(s));
  }
  return [t, r, n];
}
function _b(e) {
  return ie(on);
}
const cu = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Nb = te({ name: "Map", render: function(o, t) {
  return qr(), Kr("svg", cu, t[0] || (t[0] = [Qe("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Qe("path", { d: "M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3V7" }), Qe("path", { d: "M9 4v13" }), Qe("path", { d: "M15 7v13" })], -1)]));
} }), du = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, jb = te({ name: "MapPin", render: function(o, t) {
  return qr(), Kr("svg", du, t[0] || (t[0] = [Qe("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Qe("circle", { cx: "12", cy: "11", r: "3" }), Qe("path", { d: "M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" })], -1)]));
} }), uu = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, Vb = te({ name: "Settings", render: function(o, t) {
  return qr(), Kr("svg", uu, t[0] || (t[0] = [Qe("g", { fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [Qe("path", { d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065z" }), Qe("circle", { cx: "12", cy: "12", r: "3" })], -1)]));
} });
function fu(e) {
  let o = ".", t = "__", r = "--", n;
  if (e) {
    let p = e.blockPrefix;
    p && (o = p), p = e.elementPrefix, p && (t = p), p = e.modifierPrefix, p && (r = p);
  }
  const i = { install(p) {
    n = p.c;
    const v = p.context;
    v.bem = {}, v.bem.b = null, v.bem.els = null;
  } };
  function l(p) {
    let v, b;
    return { before(g) {
      v = g.bem.b, b = g.bem.els, g.bem.els = null;
    }, after(g) {
      g.bem.b = v, g.bem.els = b;
    }, $({ context: g, props: x }) {
      return p = typeof p == "string" ? p : p({ context: g, props: x }), g.bem.b = p, `${(x == null ? void 0 : x.bPrefix) || o}${g.bem.b}`;
    } };
  }
  function a(p) {
    let v;
    return { before(b) {
      v = b.bem.els;
    }, after(b) {
      b.bem.els = v;
    }, $({ context: b, props: g }) {
      return p = typeof p == "string" ? p : p({ context: b, props: g }), b.bem.els = p.split(",").map((x) => x.trim()), b.bem.els.map((x) => `${(g == null ? void 0 : g.bPrefix) || o}${b.bem.b}${t}${x}`).join(", ");
    } };
  }
  function s(p) {
    return { $({ context: v, props: b }) {
      p = typeof p == "string" ? p : p({ context: v, props: b });
      const g = p.split(",").map((y) => y.trim());
      function x(y) {
        return g.map((z) => `&${(b == null ? void 0 : b.bPrefix) || o}${v.bem.b}${y !== void 0 ? `${t}${y}` : ""}${r}${z}`).join(", ");
      }
      const P = v.bem.els;
      return P !== null ? x(P[0]) : x();
    } };
  }
  function c(p) {
    return { $({ context: v, props: b }) {
      p = typeof p == "string" ? p : p({ context: v, props: b });
      const g = v.bem.els;
      return `&:not(${(b == null ? void 0 : b.bPrefix) || o}${v.bem.b}${g !== null && g.length > 0 ? `${t}${g[0]}` : ""}${r}${p})`;
    } };
  }
  return Object.assign(i, { cB: ((...p) => n(l(p[0]), p[1], p[2])), cE: ((...p) => n(a(p[0]), p[1], p[2])), cM: ((...p) => n(s(p[0]), p[1], p[2])), cNotM: ((...p) => n(c(p[0]), p[1], p[2])) }), i;
}
function hu(e) {
  let o = 0;
  for (let t = 0; t < e.length; ++t) e[t] === "&" && ++o;
  return o;
}
const Rl = /\s*,(?![^(]*\))\s*/g, pu = /\s+/g;
function gu(e, o) {
  const t = [];
  return o.split(Rl).forEach((r) => {
    let n = hu(r);
    if (n) {
      if (n === 1) {
        e.forEach((l) => {
          t.push(r.replace("&", l));
        });
        return;
      }
    } else {
      e.forEach((l) => {
        t.push((l && l + " ") + r);
      });
      return;
    }
    let i = [r];
    for (; n--; ) {
      const l = [];
      i.forEach((a) => {
        e.forEach((s) => {
          l.push(a.replace("&", s));
        });
      }), i = l;
    }
    i.forEach((l) => t.push(l));
  }), t;
}
function mu(e, o) {
  const t = [];
  return o.split(Rl).forEach((r) => {
    e.forEach((n) => {
      t.push((n && n + " ") + r);
    });
  }), t;
}
function vu(e) {
  let o = [""];
  return e.forEach((t) => {
    t = t && t.trim(), t && (t.includes("&") ? o = gu(o, t) : o = mu(o, t));
  }), o.join(", ").replace(pu, " ");
}
function Yn(e) {
  if (!e) return;
  const o = e.parentElement;
  o && o.removeChild(e);
}
function Ut(e, o) {
  return (o ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function bu(e) {
  const o = document.createElement("style");
  return o.setAttribute("cssr-id", e), o;
}
function Et(e) {
  return e ? /^\s*@(s|m)/.test(e) : false;
}
const xu = /[A-Z]/g;
function kl(e) {
  return e.replace(xu, (o) => "-" + o.toLowerCase());
}
function Cu(e, o = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((t) => o + `  ${kl(t[0])}: ${t[1]};`).join(`
`) + `
` + o + "}" : `: ${e};`;
}
function yu(e, o, t) {
  return typeof e == "function" ? e({ context: o.context, props: t }) : e;
}
function Zn(e, o, t, r) {
  if (!o) return "";
  const n = yu(o, t, r);
  if (!n) return "";
  if (typeof n == "string") return `${e} {
${n}
}`;
  const i = Object.keys(n);
  if (i.length === 0) return t.config.keepEmptyBlock ? e + ` {
}` : "";
  const l = e ? [e + " {"] : [];
  return i.forEach((a) => {
    const s = n[a];
    if (a === "raw") {
      l.push(`
` + s + `
`);
      return;
    }
    a = kl(a), s != null && l.push(`  ${a}${Cu(s)}`);
  }), e && l.push("}"), l.join(`
`);
}
function Ir(e, o, t) {
  e && e.forEach((r) => {
    if (Array.isArray(r)) Ir(r, o, t);
    else if (typeof r == "function") {
      const n = r(o);
      Array.isArray(n) ? Ir(n, o, t) : n && t(n);
    } else r && t(r);
  });
}
function Il(e, o, t, r, n) {
  const i = e.$;
  let l = "";
  if (!i || typeof i == "string") Et(i) ? l = i : o.push(i);
  else if (typeof i == "function") {
    const c = i({ context: r.context, props: n });
    Et(c) ? l = c : o.push(c);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string") Et(i.$) ? l = i.$ : o.push(i.$);
  else if (i.$) {
    const c = i.$({ context: r.context, props: n });
    Et(c) ? l = c : o.push(c);
  }
  const a = vu(o), s = Zn(a, e.props, r, n);
  l ? t.push(`${l} {`) : s.length && t.push(s), e.children && Ir(e.children, { context: r.context, props: n }, (c) => {
    if (typeof c == "string") {
      const d = Zn(a, { raw: c }, r, n);
      t.push(d);
    } else Il(c, o, t, r, n);
  }), o.pop(), l && t.push("}"), i && i.after && i.after(r.context);
}
function Su(e, o, t) {
  const r = [];
  return Il(e, [], r, o, t), r.join(`

`);
}
function pt(e) {
  for (var o = 0, t, r = 0, n = e.length; n >= 4; ++r, n -= 4) t = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= t >>> 24, o = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      o ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      o ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      o ^= e.charCodeAt(r) & 255, o = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16);
  }
  return o ^= o >>> 13, o = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), ((o ^ o >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function wu(e, o, t, r) {
  const { els: n } = o;
  if (t === void 0) n.forEach(Yn), o.els = [];
  else {
    const i = Ut(t, r);
    i && n.includes(i) && (Yn(i), o.els = n.filter((l) => l !== i));
  }
}
function Qn(e, o) {
  e.push(o);
}
function $u(e, o, t, r, n, i, l, a, s) {
  let c;
  if (t === void 0 && (c = o.render(r), t = pt(c)), s) {
    s.adapter(t, c ?? o.render(r));
    return;
  }
  a === void 0 && (a = document.head);
  const d = Ut(t, a);
  if (d !== null && !i) return d;
  const u = d ?? bu(t);
  if (c === void 0 && (c = o.render(r)), u.textContent = c, d !== null) return d;
  if (l) {
    const h = a.querySelector(`meta[name="${l}"]`);
    if (h) return a.insertBefore(u, h), Qn(o.els, u), u;
  }
  return n ? a.insertBefore(u, a.querySelector("style, link")) : a.appendChild(u), Qn(o.els, u), u;
}
function Pu(e) {
  return Su(this, this.instance, e);
}
function zu(e = {}) {
  const { id: o, ssr: t, props: r, head: n = false, force: i = false, anchorMetaName: l, parent: a } = e;
  return $u(this.instance, this, o, r, n, i, l, a, t);
}
function Tu(e = {}) {
  const { id: o, parent: t } = e;
  wu(this.instance, this, o, t);
}
const Bt = function(e, o, t, r) {
  return { instance: e, $: o, props: t, children: r, els: [], render: Pu, mount: zu, unmount: Tu };
}, Eu = function(e, o, t, r) {
  return Array.isArray(o) ? Bt(e, { $: null }, null, o) : Array.isArray(t) ? Bt(e, o, null, t) : Array.isArray(r) ? Bt(e, o, t, r) : Bt(e, o, t, null);
};
function Hl(e = {}) {
  const o = { c: ((...t) => Eu(o, ...t)), use: (t, ...r) => t.install(o, ...r), find: Ut, context: {}, config: e };
  return o;
}
function Bu(e, o) {
  if (e === void 0) return false;
  if (o) {
    const { context: { ids: t } } = o;
    return t.has(e);
  }
  return Ut(e) !== null;
}
const Mu = "n", gt = `.${Mu}-`, Ru = "__", ku = "--", Fl = Hl(), Ol = fu({ blockPrefix: gt, elementPrefix: Ru, modifierPrefix: ku });
Fl.use(Ol);
const { c: H, find: Gb } = Fl, { cB: Q, cE: j, cM: U, cNotM: vo } = Ol;
function Ll(e) {
  return H(({ props: { bPrefix: o } }) => `${o || gt}modal, ${o || gt}drawer`, [e]);
}
function Iu(e) {
  return H(({ props: { bPrefix: o } }) => `${o || gt}popover`, [e]);
}
function Al(e) {
  return H(({ props: { bPrefix: o } }) => `&${o || gt}modal`, e);
}
const Hu = (...e) => H(">", [Q(...e)]);
function Z(e, o) {
  return e + (o === "default" ? "" : o.replace(/^[a-z]/, (t) => t.toUpperCase()));
}
let jt = [];
const Dl = /* @__PURE__ */ new WeakMap();
function Fu() {
  jt.forEach((e) => e(...Dl.get(e))), jt = [];
}
function Ou(e, ...o) {
  Dl.set(e, o), !jt.includes(e) && jt.push(e) === 1 && requestAnimationFrame(Fu);
}
function Jn(e, o) {
  let { target: t } = e;
  for (; t; ) {
    if (t.dataset && t.dataset[o] !== void 0) return true;
    t = t.parentElement;
  }
  return false;
}
function mt(e) {
  return e.composedPath()[0] || null;
}
function ei(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Kb(e) {
  if (e != null) return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Eo(e, o) {
  const t = e.trim().split(/\s+/g), r = { top: t[0] };
  switch (t.length) {
    case 1:
      r.right = t[0], r.bottom = t[0], r.left = t[0];
      break;
    case 2:
      r.right = t[1], r.left = t[1], r.bottom = t[0];
      break;
    case 3:
      r.right = t[1], r.bottom = t[2], r.left = t[1];
      break;
    case 4:
      r.right = t[1], r.bottom = t[2], r.left = t[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return o === void 0 ? r : r[o];
}
function qb(e, o) {
  const [t, r] = e.split(" ");
  return { row: t, col: r || t };
}
const oi = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32", transparent: "#0000" };
function Ub(e, o, t) {
  o /= 100, t /= 100;
  const r = o * Math.min(t, 1 - t) + t;
  return [e, r ? (2 - 2 * t / r) * 100 : 0, r * 100];
}
function Xb(e, o, t) {
  o /= 100, t /= 100;
  const r = t - t * o / 2, n = Math.min(r, 1 - r);
  return [e, n ? (t - r) / n * 100 : 0, r * 100];
}
function Lu(e, o, t) {
  o /= 100, t /= 100;
  let r = (n, i = (n + e / 60) % 6) => t - t * o * Math.max(Math.min(i, 4 - i, 1), 0);
  return [r(5) * 255, r(3) * 255, r(1) * 255];
}
function Yb(e, o, t) {
  e /= 255, o /= 255, t /= 255;
  let r = Math.max(e, o, t), n = r - Math.min(e, o, t), i = n && (r == e ? (o - t) / n : r == o ? 2 + (t - e) / n : 4 + (e - o) / n);
  return [60 * (i < 0 ? i + 6 : i), r && n / r * 100, r * 100];
}
function Zb(e, o, t) {
  e /= 255, o /= 255, t /= 255;
  let r = Math.max(e, o, t), n = r - Math.min(e, o, t), i = 1 - Math.abs(r + r - n - 1), l = n && (r == e ? (o - t) / n : r == o ? 2 + (t - e) / n : 4 + (e - o) / n);
  return [60 * (l < 0 ? l + 6 : l), i ? n / i * 100 : 0, (r + r - n) * 50];
}
function Au(e, o, t) {
  o /= 100, t /= 100;
  let r = o * Math.min(t, 1 - t), n = (i, l = (i + e / 30) % 12) => t - r * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  return [n(0) * 255, n(8) * 255, n(4) * 255];
}
const eo = "^\\s*", oo = "\\s*$", yo = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*", De = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Bo = "([0-9A-Fa-f])", Mo = "([0-9A-Fa-f]{2})", Wl = new RegExp(`${eo}hsl\\s*\\(${De},${yo},${yo}\\)${oo}`), _l = new RegExp(`${eo}hsv\\s*\\(${De},${yo},${yo}\\)${oo}`), Nl = new RegExp(`${eo}hsla\\s*\\(${De},${yo},${yo},${De}\\)${oo}`), jl = new RegExp(`${eo}hsva\\s*\\(${De},${yo},${yo},${De}\\)${oo}`), Du = new RegExp(`${eo}rgb\\s*\\(${De},${De},${De}\\)${oo}`), Wu = new RegExp(`${eo}rgba\\s*\\(${De},${De},${De},${De}\\)${oo}`), tn = new RegExp(`${eo}#${Bo}${Bo}${Bo}${oo}`), rn = new RegExp(`${eo}#${Mo}${Mo}${Mo}${oo}`), nn = new RegExp(`${eo}#${Bo}${Bo}${Bo}${Bo}${oo}`), ln = new RegExp(`${eo}#${Mo}${Mo}${Mo}${Mo}${oo}`);
function Fe(e) {
  return parseInt(e, 16);
}
function _u(e) {
  try {
    let o;
    if (o = Nl.exec(e)) return [Je(o[1]), we(o[5]), we(o[9]), ao(o[13])];
    if (o = Wl.exec(e)) return [Je(o[1]), we(o[5]), we(o[9]), 1];
    throw new Error(`[seemly/hsla]: Invalid color value ${e}.`);
  } catch (o) {
    throw o;
  }
}
function Nu(e) {
  try {
    let o;
    if (o = jl.exec(e)) return [Je(o[1]), we(o[5]), we(o[9]), ao(o[13])];
    if (o = _l.exec(e)) return [Je(o[1]), we(o[5]), we(o[9]), 1];
    throw new Error(`[seemly/hsva]: Invalid color value ${e}.`);
  } catch (o) {
    throw o;
  }
}
function So(e) {
  try {
    let o;
    if (o = rn.exec(e)) return [Fe(o[1]), Fe(o[2]), Fe(o[3]), 1];
    if (o = Du.exec(e)) return [xe(o[1]), xe(o[5]), xe(o[9]), 1];
    if (o = Wu.exec(e)) return [xe(o[1]), xe(o[5]), xe(o[9]), ao(o[13])];
    if (o = tn.exec(e)) return [Fe(o[1] + o[1]), Fe(o[2] + o[2]), Fe(o[3] + o[3]), 1];
    if (o = ln.exec(e)) return [Fe(o[1]), Fe(o[2]), Fe(o[3]), ao(Fe(o[4]) / 255)];
    if (o = nn.exec(e)) return [Fe(o[1] + o[1]), Fe(o[2] + o[2]), Fe(o[3] + o[3]), ao(Fe(o[4] + o[4]) / 255)];
    if (e in oi) return So(oi[e]);
    if (Wl.test(e) || Nl.test(e)) {
      const [t, r, n, i] = _u(e);
      return [...Au(t, r, n), i];
    } else if (_l.test(e) || jl.test(e)) {
      const [t, r, n, i] = Nu(e);
      return [...Lu(t, r, n), i];
    }
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (o) {
    throw o;
  }
}
function ju(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Vu(e, o, t) {
  return `rgb(${xe(e)}, ${xe(o)}, ${xe(t)})`;
}
function Hr(e, o, t, r) {
  return `rgba(${xe(e)}, ${xe(o)}, ${xe(t)}, ${ju(r)})`;
}
function dr(e, o, t, r, n) {
  return xe((e * o * (1 - r) + t * r) / n);
}
function A(e, o) {
  Array.isArray(e) || (e = So(e)), Array.isArray(o) || (o = So(o));
  const t = e[3], r = o[3], n = ao(t + r - t * r);
  return Hr(dr(e[0], t, o[0], r, n), dr(e[1], t, o[1], r, n), dr(e[2], t, o[2], r, n), n);
}
function G(e, o) {
  const [t, r, n, i = 1] = Array.isArray(e) ? e : So(e);
  return typeof o.alpha == "number" ? Hr(t, r, n, o.alpha) : Hr(t, r, n, i);
}
function Mt(e, o) {
  const [t, r, n, i = 1] = Array.isArray(e) ? e : So(e), { lightness: l = 1, alpha: a = 1 } = o;
  return Gu([t * l, r * l, n * l, i * a]);
}
function ao(e) {
  const o = Math.round(Number(e) * 100) / 100;
  return o > 1 ? 1 : o < 0 ? 0 : o;
}
function Je(e) {
  const o = Math.round(Number(e));
  return o >= 360 || o < 0 ? 0 : o;
}
function xe(e) {
  const o = Math.round(Number(e));
  return o > 255 ? 255 : o < 0 ? 0 : o;
}
function we(e) {
  const o = Math.round(Number(e));
  return o > 100 ? 100 : o < 0 ? 0 : o;
}
function Qb(e) {
  const [o, t, r] = Array.isArray(e) ? e : So(e);
  return Vu(o, t, r);
}
function Gu(e) {
  const [o, t, r] = e;
  return 3 in e ? `rgba(${xe(o)}, ${xe(t)}, ${xe(r)}, ${ao(e[3])})` : `rgba(${xe(o)}, ${xe(t)}, ${xe(r)}, 1)`;
}
function Jb(e) {
  return `hsv(${Je(e[0])}, ${we(e[1])}%, ${we(e[2])}%)`;
}
function e0(e) {
  const [o, t, r] = e;
  return 3 in e ? `hsva(${Je(o)}, ${we(t)}%, ${we(r)}%, ${ao(e[3])})` : `hsva(${Je(o)}, ${we(t)}%, ${we(r)}%, 1)`;
}
function o0(e) {
  return `hsl(${Je(e[0])}, ${we(e[1])}%, ${we(e[2])}%)`;
}
function t0(e) {
  const [o, t, r] = e;
  return 3 in e ? `hsla(${Je(o)}, ${we(t)}%, ${we(r)}%, ${ao(e[3])})` : `hsla(${Je(o)}, ${we(t)}%, ${we(r)}%, 1)`;
}
function r0(e) {
  if (typeof e == "string") {
    let r;
    if (r = rn.exec(e)) return `${r[0]}FF`;
    if (r = ln.exec(e)) return r[0];
    if (r = tn.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}FF`;
    if (r = nn.exec(e)) return `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}${r[4]}${r[4]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  const o = `#${e.slice(0, 3).map((r) => xe(r).toString(16).toUpperCase().padStart(2, "0")).join("")}`, t = e.length === 3 ? "FF" : xe(e[3] * 255).toString(16).padStart(2, "0").toUpperCase();
  return o + t;
}
function n0(e) {
  if (typeof e == "string") {
    let o;
    if (o = rn.exec(e)) return o[0];
    if (o = ln.exec(e)) return o[0].slice(0, 7);
    if (o = tn.exec(e) || nn.exec(e)) return `#${o[1]}${o[1]}${o[2]}${o[2]}${o[3]}${o[3]}`;
    throw new Error(`[seemly/toHexString]: Invalid hex value ${e}.`);
  }
  return `#${e.slice(0, 3).map((o) => xe(o).toString(16).toUpperCase().padStart(2, "0")).join("")}`;
}
function Ku(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function At(e) {
  return e.composedPath()[0];
}
const qu = { mousemoveoutside: /* @__PURE__ */ new WeakMap(), clickoutside: /* @__PURE__ */ new WeakMap() };
function Uu(e, o, t) {
  if (e === "mousemoveoutside") {
    const r = (n) => {
      o.contains(At(n)) || t(n);
    };
    return { mousemove: r, touchstart: r };
  } else if (e === "clickoutside") {
    let r = false;
    const n = (l) => {
      r = !o.contains(At(l));
    }, i = (l) => {
      r && (o.contains(At(l)) || t(l));
    };
    return { mousedown: n, mouseup: i, touchstart: n, touchend: i };
  }
  return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {};
}
function Vl(e, o, t) {
  const r = qu[e];
  let n = r.get(o);
  n === void 0 && r.set(o, n = /* @__PURE__ */ new WeakMap());
  let i = n.get(t);
  return i === void 0 && n.set(t, i = Uu(e, o, t)), i;
}
function Xu(e, o, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = Vl(e, o, t);
    return Object.keys(n).forEach((i) => {
      de(i, document, n[i], r);
    }), true;
  }
  return false;
}
function Yu(e, o, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const n = Vl(e, o, t);
    return Object.keys(n).forEach((i) => {
      ce(i, document, n[i], r);
    }), true;
  }
  return false;
}
function Zu() {
  if (typeof window > "u") return { on: () => {
  }, off: () => {
  } };
  const e = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  function t() {
    e.set(this, true);
  }
  function r() {
    e.set(this, true), o.set(this, true);
  }
  function n(m, S, w) {
    const M = m[S];
    return m[S] = function() {
      return w.apply(m, arguments), M.apply(m, arguments);
    }, m;
  }
  function i(m, S) {
    m[S] = Event.prototype[S];
  }
  const l = /* @__PURE__ */ new WeakMap(), a = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var m;
    return (m = l.get(this)) !== null && m !== void 0 ? m : null;
  }
  function c(m, S) {
    a !== void 0 && Object.defineProperty(m, "currentTarget", { configurable: true, enumerable: true, get: S ?? a.get });
  }
  const d = { bubble: {}, capture: {} }, u = {};
  function h() {
    const m = function(S) {
      const { type: w, eventPhase: M, bubbles: L } = S, E = At(S);
      if (M === 2) return;
      const _ = M === 1 ? "capture" : "bubble";
      let D = E;
      const B = [];
      for (; D === null && (D = window), B.push(D), D !== window; ) D = D.parentNode || null;
      const N = d.capture[w], k = d.bubble[w];
      if (n(S, "stopPropagation", t), n(S, "stopImmediatePropagation", r), c(S, s), _ === "capture") {
        if (N === void 0) return;
        for (let X = B.length - 1; X >= 0 && !e.has(S); --X) {
          const ne = B[X], le = N.get(ne);
          if (le !== void 0) {
            l.set(S, ne);
            for (const fe of le) {
              if (o.has(S)) break;
              fe(S);
            }
          }
          if (X === 0 && !L && k !== void 0) {
            const fe = k.get(ne);
            if (fe !== void 0) for (const ae of fe) {
              if (o.has(S)) break;
              ae(S);
            }
          }
        }
      } else if (_ === "bubble") {
        if (k === void 0) return;
        for (let X = 0; X < B.length && !e.has(S); ++X) {
          const ne = B[X], le = k.get(ne);
          if (le !== void 0) {
            l.set(S, ne);
            for (const fe of le) {
              if (o.has(S)) break;
              fe(S);
            }
          }
        }
      }
      i(S, "stopPropagation"), i(S, "stopImmediatePropagation"), c(S);
    };
    return m.displayName = "evtdUnifiedHandler", m;
  }
  function f() {
    const m = function(S) {
      const { type: w, eventPhase: M } = S;
      if (M !== 2) return;
      const L = u[w];
      L !== void 0 && L.forEach((E) => E(S));
    };
    return m.displayName = "evtdUnifiedWindowEventHandler", m;
  }
  const p = h(), v = f();
  function b(m, S) {
    const w = d[m];
    return w[S] === void 0 && (w[S] = /* @__PURE__ */ new Map(), window.addEventListener(S, p, m === "capture")), w[S];
  }
  function g(m) {
    return u[m] === void 0 && (u[m] = /* @__PURE__ */ new Set(), window.addEventListener(m, v)), u[m];
  }
  function x(m, S) {
    let w = m.get(S);
    return w === void 0 && m.set(S, w = /* @__PURE__ */ new Set()), w;
  }
  function P(m, S, w, M) {
    const L = d[S][w];
    if (L !== void 0) {
      const E = L.get(m);
      if (E !== void 0 && E.has(M)) return true;
    }
    return false;
  }
  function y(m, S) {
    const w = u[m];
    return !!(w !== void 0 && w.has(S));
  }
  function z(m, S, w, M) {
    let L;
    if (typeof M == "object" && M.once === true ? L = (N) => {
      T(m, S, L, M), w(N);
    } : L = w, Xu(m, S, L, M)) return;
    const _ = M === true || typeof M == "object" && M.capture === true ? "capture" : "bubble", D = b(_, m), B = x(D, S);
    if (B.has(L) || B.add(L), S === window) {
      const N = g(m);
      N.has(L) || N.add(L);
    }
  }
  function T(m, S, w, M) {
    if (Yu(m, S, w, M)) return;
    const E = M === true || typeof M == "object" && M.capture === true, _ = E ? "capture" : "bubble", D = b(_, m), B = x(D, S);
    if (S === window && !P(S, E ? "bubble" : "capture", m, w) && y(m, w)) {
      const k = u[m];
      k.delete(w), k.size === 0 && (window.removeEventListener(m, v), u[m] = void 0);
    }
    B.has(w) && B.delete(w), B.size === 0 && D.delete(S), D.size === 0 && (window.removeEventListener(m, p, _ === "capture"), d[_][m] = void 0);
  }
  return { on: z, off: T };
}
const { on: de, off: ce } = Zu();
function Qu(e) {
  const o = V(!!e.value);
  if (o.value) return xo(o);
  const t = Se(e, (r) => {
    r && (o.value = true, t());
  });
  return xo(o);
}
function Ve(e) {
  const o = I(e), t = V(o.value);
  return Se(o, (r) => {
    t.value = r;
  }), typeof e == "function" ? t : { __v_isRef: true, get value() {
    return t.value;
  }, set value(r) {
    e.set(r);
  } };
}
function an() {
  return Qo() !== null;
}
const sn = typeof window < "u";
let qo, dt;
const Ju = () => {
  var e, o;
  qo = sn ? (o = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || o === void 0 ? void 0 : o.ready : void 0, dt = false, qo !== void 0 ? qo.then(() => {
    dt = true;
  }) : dt = true;
};
Ju();
function ef(e) {
  if (dt) return;
  let o = false;
  Ue(() => {
    dt || (qo == null ? void 0 : qo.then(() => {
      o || e();
    }));
  }), ke(() => {
    o = true;
  });
}
const at = V(null);
function ti(e) {
  if (e.clientX > 0 || e.clientY > 0) at.value = { x: e.clientX, y: e.clientY };
  else {
    const { target: o } = e;
    if (o instanceof Element) {
      const { left: t, top: r, width: n, height: i } = o.getBoundingClientRect();
      t > 0 || r > 0 ? at.value = { x: t + n / 2, y: r + i / 2 } : at.value = { x: 0, y: 0 };
    } else at.value = null;
  }
}
let Rt = 0, ri = true;
function of() {
  if (!sn) return xo(V(null));
  Rt === 0 && de("click", document, ti, true);
  const e = () => {
    Rt += 1;
  };
  return ri && (ri = an()) ? (Oo(e), ke(() => {
    Rt -= 1, Rt === 0 && ce("click", document, ti, true);
  })) : e(), xo(at);
}
const tf = V(void 0);
let kt = 0;
function ni() {
  tf.value = Date.now();
}
let ii = true;
function rf(e) {
  if (!sn) return xo(V(false));
  const o = V(false);
  let t = null;
  function r() {
    t !== null && window.clearTimeout(t);
  }
  function n() {
    r(), o.value = true, t = window.setTimeout(() => {
      o.value = false;
    }, e);
  }
  kt === 0 && de("click", window, ni, true);
  const i = () => {
    kt += 1, de("click", window, n, true);
  };
  return ii && (ii = an()) ? (Oo(i), ke(() => {
    kt -= 1, kt === 0 && ce("click", window, ni, true), ce("click", window, n, true), r();
  })) : i(), xo(o);
}
function Gl(e, o) {
  return Se(e, (t) => {
    t !== void 0 && (o.value = t);
  }), I(() => e.value === void 0 ? o.value : e.value);
}
function Xt() {
  const e = V(false);
  return Ue(() => {
    e.value = true;
  }), xo(e);
}
function Kl(e, o) {
  return I(() => {
    for (const t of o) if (e[t] !== void 0) return e[t];
    return e[o[o.length - 1]];
  });
}
const nf = (typeof window > "u" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function lf() {
  return nf;
}
function af(e = {}, o) {
  const t = Ji({ ctrl: false, command: false, win: false, shift: false, tab: false }), { keydown: r, keyup: n } = e, i = (s) => {
    switch (s.key) {
      case "Control":
        t.ctrl = true;
        break;
      case "Meta":
        t.command = true, t.win = true;
        break;
      case "Shift":
        t.shift = true;
        break;
      case "Tab":
        t.tab = true;
        break;
    }
    r !== void 0 && Object.keys(r).forEach((c) => {
      if (c !== s.key) return;
      const d = r[c];
      if (typeof d == "function") d(s);
      else {
        const { stop: u = false, prevent: h = false } = d;
        u && s.stopPropagation(), h && s.preventDefault(), d.handler(s);
      }
    });
  }, l = (s) => {
    switch (s.key) {
      case "Control":
        t.ctrl = false;
        break;
      case "Meta":
        t.command = false, t.win = false;
        break;
      case "Shift":
        t.shift = false;
        break;
      case "Tab":
        t.tab = false;
        break;
    }
    n !== void 0 && Object.keys(n).forEach((c) => {
      if (c !== s.key) return;
      const d = n[c];
      if (typeof d == "function") d(s);
      else {
        const { stop: u = false, prevent: h = false } = d;
        u && s.stopPropagation(), h && s.preventDefault(), d.handler(s);
      }
    });
  }, a = () => {
    (o === void 0 || o.value) && (de("keydown", document, i), de("keyup", document, l)), o !== void 0 && Se(o, (s) => {
      s ? (de("keydown", document, i), de("keyup", document, l)) : (ce("keydown", document, i), ce("keyup", document, l));
    });
  };
  return an() ? (Oo(a), ke(() => {
    (o === void 0 || o.value) && (ce("keydown", document, i), ce("keyup", document, l));
  })) : a(), xo(t);
}
function i0(e) {
  return e;
}
const l0 = "n-internal-select-menu", sf = "n-internal-select-menu-body", Yt = "n-drawer-body", a0 = "n-drawer", Zt = "n-modal-body", cf = "n-modal-provider", ql = "n-modal", St = "n-popover-body", Ul = "__disabled__";
function Zo(e) {
  const o = ie(Zt, null), t = ie(Yt, null), r = ie(St, null), n = ie(sf, null), i = V();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const l = () => {
      i.value = document.fullscreenElement;
    };
    Ue(() => {
      de("fullscreenchange", document, l);
    }), ke(() => {
      ce("fullscreenchange", document, l);
    });
  }
  return Ve(() => {
    var l;
    const { to: a } = e;
    return a !== void 0 ? a === false ? Ul : a === true ? i.value || "body" : a : (o == null ? void 0 : o.value) ? (l = o.value.$el) !== null && l !== void 0 ? l : o.value : (t == null ? void 0 : t.value) ? t.value : (r == null ? void 0 : r.value) ? r.value : (n == null ? void 0 : n.value) ? n.value : a ?? (i.value || "body");
  });
}
Zo.tdkey = Ul;
Zo.propTo = { type: [String, Object, Boolean], default: void 0 };
function df(e, o, t) {
  const r = V(e.value);
  let n = null;
  return Se(e, (i) => {
    n !== null && window.clearTimeout(n), i === true ? t && !t.value ? r.value = true : n = window.setTimeout(() => {
      r.value = true;
    }, o) : r.value = false;
  }), r;
}
const wt = typeof document < "u" && typeof window < "u", cn = V(false);
function li() {
  cn.value = true;
}
function ai() {
  cn.value = false;
}
let nt = 0;
function uf() {
  return wt && (Oo(() => {
    nt || (window.addEventListener("compositionstart", li), window.addEventListener("compositionend", ai)), nt++;
  }), ke(() => {
    nt <= 1 ? (window.removeEventListener("compositionstart", li), window.removeEventListener("compositionend", ai), nt = 0) : nt--;
  })), cn;
}
let Wo = 0, si = "", ci = "", di = "", ui = "";
const fi = V("0px");
function ff(e) {
  if (typeof document > "u") return;
  const o = document.documentElement;
  let t, r = false;
  const n = () => {
    o.style.marginRight = si, o.style.overflow = ci, o.style.overflowX = di, o.style.overflowY = ui, fi.value = "0px";
  };
  Ue(() => {
    t = Se(e, (i) => {
      if (i) {
        if (!Wo) {
          const l = window.innerWidth - o.offsetWidth;
          l > 0 && (si = o.style.marginRight, o.style.marginRight = `${l}px`, fi.value = `${l}px`), ci = o.style.overflow, di = o.style.overflowX, ui = o.style.overflowY, o.style.overflow = "hidden", o.style.overflowX = "hidden", o.style.overflowY = "hidden";
        }
        r = true, Wo++;
      } else Wo--, Wo || n(), r = false;
    }, { immediate: true });
  }), ke(() => {
    t == null ? void 0 : t(), r && (Wo--, Wo || n(), r = false);
  });
}
function hf(e) {
  const o = { isDeactivated: false };
  let t = false;
  return zs(() => {
    if (o.isDeactivated = false, !t) {
      t = true;
      return;
    }
    e();
  }), Ts(() => {
    o.isDeactivated = true, t || (t = true);
  }), o;
}
function Fr(e, o, t = "default") {
  const r = o[t];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  return r();
}
function Or(e, o = true, t = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && t.push(_t(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Or(r, o, t);
        return;
      }
      if (r.type === Lo) {
        if (r.children === null) return;
        Array.isArray(r.children) && Or(r.children, o, t);
      } else r.type !== Ur && t.push(r);
    }
  }), t;
}
function hi(e, o, t = "default") {
  const r = o[t];
  if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  const n = Or(r());
  if (n.length === 1) return n[0];
  throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`);
}
let po = null;
function Xl() {
  if (po === null && (po = document.getElementById("v-binder-view-measurer"), po === null)) {
    po = document.createElement("div"), po.id = "v-binder-view-measurer";
    const { style: e } = po;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(po);
  }
  return po.getBoundingClientRect();
}
function pf(e, o) {
  const t = Xl();
  return { top: o, left: e, height: 0, width: 0, right: t.width - e, bottom: t.height - o };
}
function ur(e) {
  const o = e.getBoundingClientRect(), t = Xl();
  return { left: o.left - t.left, top: o.top - t.top, bottom: t.height + t.top - o.bottom, right: t.width + t.left - o.right, width: o.width, height: o.height };
}
function gf(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Yl(e) {
  if (e === null) return null;
  const o = gf(e);
  if (o === null) return null;
  if (o.nodeType === 9) return document;
  if (o.nodeType === 1) {
    const { overflow: t, overflowX: r, overflowY: n } = getComputedStyle(o);
    if (/(auto|scroll|overlay)/.test(t + n + r)) return o;
  }
  return Yl(o);
}
const Zl = te({ name: "Binder", props: { syncTargetWithParent: Boolean, syncTarget: { type: Boolean, default: true } }, setup(e) {
  var o;
  ye("VBinder", (o = Qo()) === null || o === void 0 ? void 0 : o.proxy);
  const t = ie("VBinder", null), r = V(null), n = (g) => {
    r.value = g, t && e.syncTargetWithParent && t.setTargetRef(g);
  };
  let i = [];
  const l = () => {
    let g = r.value;
    for (; g = Yl(g), g !== null; ) i.push(g);
    for (const x of i) de("scroll", x, u, true);
  }, a = () => {
    for (const g of i) ce("scroll", g, u, true);
    i = [];
  }, s = /* @__PURE__ */ new Set(), c = (g) => {
    s.size === 0 && l(), s.has(g) || s.add(g);
  }, d = (g) => {
    s.has(g) && s.delete(g), s.size === 0 && a();
  }, u = () => {
    Ou(h);
  }, h = () => {
    s.forEach((g) => g());
  }, f = /* @__PURE__ */ new Set(), p = (g) => {
    f.size === 0 && de("resize", window, b), f.has(g) || f.add(g);
  }, v = (g) => {
    f.has(g) && f.delete(g), f.size === 0 && ce("resize", window, b);
  }, b = () => {
    f.forEach((g) => g());
  };
  return ke(() => {
    ce("resize", window, b), a();
  }), { targetRef: r, setTargetRef: n, addScrollListener: c, removeScrollListener: d, addResizeListener: p, removeResizeListener: v };
}, render() {
  return Fr("binder", this.$slots);
} }), Ql = te({ name: "Target", setup() {
  const { setTargetRef: e, syncTarget: o } = ie("VBinder");
  return { syncTarget: o, setTargetDirective: { mounted: e, updated: e } };
}, render() {
  const { syncTarget: e, setTargetDirective: o } = this;
  return e ? Ho(hi("follower", this.$slots), [[o]]) : hi("follower", this.$slots);
} }), _o = "@@mmoContext", mf = { mounted(e, { value: o }) {
  e[_o] = { handler: void 0 }, typeof o == "function" && (e[_o].handler = o, de("mousemoveoutside", e, o));
}, updated(e, { value: o }) {
  const t = e[_o];
  typeof o == "function" ? t.handler ? t.handler !== o && (ce("mousemoveoutside", e, t.handler), t.handler = o, de("mousemoveoutside", e, o)) : (e[_o].handler = o, de("mousemoveoutside", e, o)) : t.handler && (ce("mousemoveoutside", e, t.handler), t.handler = void 0);
}, unmounted(e) {
  const { handler: o } = e[_o];
  o && ce("mousemoveoutside", e, o), e[_o].handler = void 0;
} }, No = "@@coContext", Lr = { mounted(e, { value: o, modifiers: t }) {
  e[No] = { handler: void 0 }, typeof o == "function" && (e[No].handler = o, de("clickoutside", e, o, { capture: t.capture }));
}, updated(e, { value: o, modifiers: t }) {
  const r = e[No];
  typeof o == "function" ? r.handler ? r.handler !== o && (ce("clickoutside", e, r.handler, { capture: t.capture }), r.handler = o, de("clickoutside", e, o, { capture: t.capture })) : (e[No].handler = o, de("clickoutside", e, o, { capture: t.capture })) : r.handler && (ce("clickoutside", e, r.handler, { capture: t.capture }), r.handler = void 0);
}, unmounted(e, { modifiers: o }) {
  const { handler: t } = e[No];
  t && ce("clickoutside", e, t, { capture: o.capture }), e[No].handler = void 0;
} };
function vf(e, o) {
  console.error(`[vdirs/${e}]: ${o}`);
}
class bf {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(o, t) {
    const { elementZIndex: r } = this;
    if (t !== void 0) {
      o.style.zIndex = `${t}`, r.delete(o);
      return;
    }
    const { nextZIndex: n } = this;
    r.has(o) && r.get(o) + 1 === this.nextZIndex || (o.style.zIndex = `${n}`, r.set(o, n), this.nextZIndex = n + 1, this.squashState());
  }
  unregister(o, t) {
    const { elementZIndex: r } = this;
    r.has(o) ? r.delete(o) : t === void 0 && vf("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: o } = this;
    o || (this.nextZIndex = 2e3), this.nextZIndex - o > 2500 && this.rearrange();
  }
  rearrange() {
    const o = Array.from(this.elementZIndex.entries());
    o.sort((t, r) => t[1] - r[1]), this.nextZIndex = 2e3, o.forEach((t) => {
      const r = t[0], n = this.nextZIndex++;
      `${n}` !== r.style.zIndex && (r.style.zIndex = `${n}`);
    });
  }
}
const fr = new bf(), jo = "@@ziContext", dn = { mounted(e, o) {
  const { value: t = {} } = o, { zIndex: r, enabled: n } = t;
  e[jo] = { enabled: !!n, initialized: false }, n && (fr.ensureZIndex(e, r), e[jo].initialized = true);
}, updated(e, o) {
  const { value: t = {} } = o, { zIndex: r, enabled: n } = t, i = e[jo].enabled;
  n && !i && (fr.ensureZIndex(e, r), e[jo].initialized = true), e[jo].enabled = !!n;
}, unmounted(e, o) {
  if (!e[jo].initialized) return;
  const { value: t = {} } = o, { zIndex: r } = t;
  fr.unregister(e, r);
} }, xf = "@css-render/vue3-ssr";
function Cf(e, o) {
  return `<style cssr-id="${e}">
${o}
</style>`;
}
function yf(e, o, t) {
  const { styles: r, ids: n } = t;
  n.has(e) || r !== null && (n.add(e), r.push(Cf(e, o)));
}
const Sf = typeof document < "u";
function ot() {
  if (Sf) return;
  const e = ie(xf, null);
  if (e !== null) return { adapter: (o, t) => yf(o, t, e), context: e };
}
function pi(e, o) {
  console.error(`[vueuc/${e}]: ${o}`);
}
const { c: st } = Hl(), Jl = "vueuc-style";
function gi(e) {
  return typeof e == "string" ? document.querySelector(e) : e() || null;
}
const ea = te({ name: "LazyTeleport", props: { to: { type: [String, Object], default: void 0 }, disabled: Boolean, show: { type: Boolean, required: true } }, setup(e) {
  return { showTeleport: Qu(ue(e, "show")), mergedTo: I(() => {
    const { to: o } = e;
    return o ?? "body";
  }) };
}, render() {
  return this.showTeleport ? this.disabled ? Fr("lazy-teleport", this.$slots) : C(Es, { disabled: this.disabled, to: this.mergedTo }, Fr("lazy-teleport", this.$slots)) : null;
} }), It = { top: "bottom", bottom: "top", left: "right", right: "left" }, mi = { start: "end", center: "center", end: "start" }, hr = { top: "height", bottom: "height", left: "width", right: "width" }, wf = { "bottom-start": "top left", bottom: "top center", "bottom-end": "top right", "top-start": "bottom left", top: "bottom center", "top-end": "bottom right", "right-start": "top left", right: "center left", "right-end": "bottom left", "left-start": "top right", left: "center right", "left-end": "bottom right" }, $f = { "bottom-start": "bottom left", bottom: "bottom center", "bottom-end": "bottom right", "top-start": "top left", top: "top center", "top-end": "top right", "right-start": "top right", right: "center right", "right-end": "bottom right", "left-start": "top left", left: "center left", "left-end": "bottom left" }, Pf = { "bottom-start": "right", "bottom-end": "left", "top-start": "right", "top-end": "left", "right-start": "bottom", "right-end": "top", "left-start": "bottom", "left-end": "top" }, vi = { top: true, bottom: false, left: true, right: false }, bi = { top: "end", bottom: "start", left: "end", right: "start" };
function zf(e, o, t, r, n, i) {
  if (!n || i) return { placement: e, top: 0, left: 0 };
  const [l, a] = e.split("-");
  let s = a ?? "center", c = { top: 0, left: 0 };
  const d = (f, p, v) => {
    let b = 0, g = 0;
    const x = t[f] - o[p] - o[f];
    return x > 0 && r && (v ? g = vi[p] ? x : -x : b = vi[p] ? x : -x), { left: b, top: g };
  }, u = l === "left" || l === "right";
  if (s !== "center") {
    const f = Pf[e], p = It[f], v = hr[f];
    if (t[v] > o[v]) {
      if (o[f] + o[v] < t[v]) {
        const b = (t[v] - o[v]) / 2;
        o[f] < b || o[p] < b ? o[f] < o[p] ? (s = mi[a], c = d(v, p, u)) : c = d(v, f, u) : s = "center";
      }
    } else t[v] < o[v] && o[p] < 0 && o[f] > o[p] && (s = mi[a]);
  } else {
    const f = l === "bottom" || l === "top" ? "left" : "top", p = It[f], v = hr[f], b = (t[v] - o[v]) / 2;
    (o[f] < b || o[p] < b) && (o[f] > o[p] ? (s = bi[f], c = d(v, f, u)) : (s = bi[p], c = d(v, p, u)));
  }
  let h = l;
  return o[l] < t[hr[l]] && o[l] < o[It[l]] && (h = It[l]), { placement: s !== "center" ? `${h}-${s}` : h, left: c.left, top: c.top };
}
function Tf(e, o) {
  return o ? $f[e] : wf[e];
}
function Ef(e, o, t, r, n, i) {
  if (i) switch (e) {
    case "bottom-start":
      return { top: `${Math.round(t.top - o.top + t.height)}px`, left: `${Math.round(t.left - o.left)}px`, transform: "translateY(-100%)" };
    case "bottom-end":
      return { top: `${Math.round(t.top - o.top + t.height)}px`, left: `${Math.round(t.left - o.left + t.width)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "top-start":
      return { top: `${Math.round(t.top - o.top)}px`, left: `${Math.round(t.left - o.left)}px`, transform: "" };
    case "top-end":
      return { top: `${Math.round(t.top - o.top)}px`, left: `${Math.round(t.left - o.left + t.width)}px`, transform: "translateX(-100%)" };
    case "right-start":
      return { top: `${Math.round(t.top - o.top)}px`, left: `${Math.round(t.left - o.left + t.width)}px`, transform: "translateX(-100%)" };
    case "right-end":
      return { top: `${Math.round(t.top - o.top + t.height)}px`, left: `${Math.round(t.left - o.left + t.width)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "left-start":
      return { top: `${Math.round(t.top - o.top)}px`, left: `${Math.round(t.left - o.left)}px`, transform: "" };
    case "left-end":
      return { top: `${Math.round(t.top - o.top + t.height)}px`, left: `${Math.round(t.left - o.left)}px`, transform: "translateY(-100%)" };
    case "top":
      return { top: `${Math.round(t.top - o.top)}px`, left: `${Math.round(t.left - o.left + t.width / 2)}px`, transform: "translateX(-50%)" };
    case "right":
      return { top: `${Math.round(t.top - o.top + t.height / 2)}px`, left: `${Math.round(t.left - o.left + t.width)}px`, transform: "translateX(-100%) translateY(-50%)" };
    case "left":
      return { top: `${Math.round(t.top - o.top + t.height / 2)}px`, left: `${Math.round(t.left - o.left)}px`, transform: "translateY(-50%)" };
    case "bottom":
    default:
      return { top: `${Math.round(t.top - o.top + t.height)}px`, left: `${Math.round(t.left - o.left + t.width / 2)}px`, transform: "translateX(-50%) translateY(-100%)" };
  }
  switch (e) {
    case "bottom-start":
      return { top: `${Math.round(t.top - o.top + t.height + r)}px`, left: `${Math.round(t.left - o.left + n)}px`, transform: "" };
    case "bottom-end":
      return { top: `${Math.round(t.top - o.top + t.height + r)}px`, left: `${Math.round(t.left - o.left + t.width + n)}px`, transform: "translateX(-100%)" };
    case "top-start":
      return { top: `${Math.round(t.top - o.top + r)}px`, left: `${Math.round(t.left - o.left + n)}px`, transform: "translateY(-100%)" };
    case "top-end":
      return { top: `${Math.round(t.top - o.top + r)}px`, left: `${Math.round(t.left - o.left + t.width + n)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "right-start":
      return { top: `${Math.round(t.top - o.top + r)}px`, left: `${Math.round(t.left - o.left + t.width + n)}px`, transform: "" };
    case "right-end":
      return { top: `${Math.round(t.top - o.top + t.height + r)}px`, left: `${Math.round(t.left - o.left + t.width + n)}px`, transform: "translateY(-100%)" };
    case "left-start":
      return { top: `${Math.round(t.top - o.top + r)}px`, left: `${Math.round(t.left - o.left + n)}px`, transform: "translateX(-100%)" };
    case "left-end":
      return { top: `${Math.round(t.top - o.top + t.height + r)}px`, left: `${Math.round(t.left - o.left + n)}px`, transform: "translateX(-100%) translateY(-100%)" };
    case "top":
      return { top: `${Math.round(t.top - o.top + r)}px`, left: `${Math.round(t.left - o.left + t.width / 2 + n)}px`, transform: "translateY(-100%) translateX(-50%)" };
    case "right":
      return { top: `${Math.round(t.top - o.top + t.height / 2 + r)}px`, left: `${Math.round(t.left - o.left + t.width + n)}px`, transform: "translateY(-50%)" };
    case "left":
      return { top: `${Math.round(t.top - o.top + t.height / 2 + r)}px`, left: `${Math.round(t.left - o.left + n)}px`, transform: "translateY(-50%) translateX(-100%)" };
    case "bottom":
    default:
      return { top: `${Math.round(t.top - o.top + t.height + r)}px`, left: `${Math.round(t.left - o.left + t.width / 2 + n)}px`, transform: "translateX(-50%)" };
  }
}
const Bf = st([st(".v-binder-follower-container", { position: "absolute", left: "0", right: "0", top: "0", height: "0", pointerEvents: "none", zIndex: "auto" }), st(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [st("> *", { pointerEvents: "all" })])]), oa = te({ name: "Follower", inheritAttrs: false, props: { show: Boolean, enabled: { type: Boolean, default: void 0 }, placement: { type: String, default: "bottom" }, syncTrigger: { type: Array, default: ["resize", "scroll"] }, to: [String, Object], flip: { type: Boolean, default: true }, internalShift: Boolean, x: Number, y: Number, width: String, minWidth: String, containerClass: String, teleportDisabled: Boolean, zindexable: { type: Boolean, default: true }, zIndex: Number, overlap: Boolean }, setup(e) {
  const o = ie("VBinder"), t = Ve(() => e.enabled !== void 0 ? e.enabled : e.show), r = V(null), n = V(null), i = () => {
    const { syncTrigger: h } = e;
    h.includes("scroll") && o.addScrollListener(s), h.includes("resize") && o.addResizeListener(s);
  }, l = () => {
    o.removeScrollListener(s), o.removeResizeListener(s);
  };
  Ue(() => {
    t.value && (s(), i());
  });
  const a = ot();
  Bf.mount({ id: "vueuc/binder", head: true, anchorMetaName: Jl, ssr: a }), ke(() => {
    l();
  }), ef(() => {
    t.value && s();
  });
  const s = () => {
    if (!t.value) return;
    const h = r.value;
    if (h === null) return;
    const f = o.targetRef, { x: p, y: v, overlap: b } = e, g = p !== void 0 && v !== void 0 ? pf(p, v) : ur(f);
    h.style.setProperty("--v-target-width", `${Math.round(g.width)}px`), h.style.setProperty("--v-target-height", `${Math.round(g.height)}px`);
    const { width: x, minWidth: P, placement: y, internalShift: z, flip: T } = e;
    h.setAttribute("v-placement", y), b ? h.setAttribute("v-overlap", "") : h.removeAttribute("v-overlap");
    const { style: m } = h;
    x === "target" ? m.width = `${g.width}px` : x !== void 0 ? m.width = x : m.width = "", P === "target" ? m.minWidth = `${g.width}px` : P !== void 0 ? m.minWidth = P : m.minWidth = "";
    const S = ur(h), w = ur(n.value), { left: M, top: L, placement: E } = zf(y, g, S, z, T, b), _ = Tf(E, b), { left: D, top: B, transform: N } = Ef(E, w, g, L, M, b);
    h.setAttribute("v-placement", E), h.style.setProperty("--v-offset-left", `${Math.round(M)}px`), h.style.setProperty("--v-offset-top", `${Math.round(L)}px`), h.style.transform = `translateX(${D}) translateY(${B}) ${N}`, h.style.setProperty("--v-transform-origin", _), h.style.transformOrigin = _;
  };
  Se(t, (h) => {
    h ? (i(), c()) : l();
  });
  const c = () => {
    Io().then(s).catch((h) => console.error(h));
  };
  ["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach((h) => {
    Se(ue(e, h), s);
  }), ["teleportDisabled"].forEach((h) => {
    Se(ue(e, h), c);
  }), Se(ue(e, "syncTrigger"), (h) => {
    h.includes("resize") ? o.addResizeListener(s) : o.removeResizeListener(s), h.includes("scroll") ? o.addScrollListener(s) : o.removeScrollListener(s);
  });
  const d = Xt(), u = Ve(() => {
    const { to: h } = e;
    if (h !== void 0) return h;
    d.value;
  });
  return { VBinder: o, mergedEnabled: t, offsetContainerRef: n, followerRef: r, mergedTo: u, syncPosition: s };
}, render() {
  return C(ea, { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled }, { default: () => {
    var e, o;
    const t = C("div", { class: ["v-binder-follower-container", this.containerClass], ref: "offsetContainerRef" }, [C("div", { class: "v-binder-follower-content", ref: "followerRef" }, (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e))]);
    return this.zindexable ? Ho(t, [[dn, { enabled: this.mergedEnabled, zIndex: this.zIndex }]]) : t;
  } });
} });
var Ro = [], Mf = function() {
  return Ro.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Rf = function() {
  return Ro.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, xi = "ResizeObserver loop completed with undelivered notifications.", kf = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: xi }) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = xi), window.dispatchEvent(e);
}, vt;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(vt || (vt = {}));
var ko = function(e) {
  return Object.freeze(e);
}, If = /* @__PURE__ */ (function() {
  function e(o, t) {
    this.inlineSize = o, this.blockSize = t, ko(this);
  }
  return e;
})(), ta = (function() {
  function e(o, t, r, n) {
    return this.x = o, this.y = t, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, ko(this);
  }
  return e.prototype.toJSON = function() {
    var o = this, t = o.x, r = o.y, n = o.top, i = o.right, l = o.bottom, a = o.left, s = o.width, c = o.height;
    return { x: t, y: r, top: n, right: i, bottom: l, left: a, width: s, height: c };
  }, e.fromRect = function(o) {
    return new e(o.x, o.y, o.width, o.height);
  }, e;
})(), un = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, ra = function(e) {
  if (un(e)) {
    var o = e.getBBox(), t = o.width, r = o.height;
    return !t && !r;
  }
  var n = e, i = n.offsetWidth, l = n.offsetHeight;
  return !(i || l || e.getClientRects().length);
}, Ci = function(e) {
  var o;
  if (e instanceof Element) return true;
  var t = (o = e == null ? void 0 : e.ownerDocument) === null || o === void 0 ? void 0 : o.defaultView;
  return !!(t && e instanceof t.Element);
}, Hf = function(e) {
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
}, ut = typeof window < "u" ? window : {}, Ht = /* @__PURE__ */ new WeakMap(), yi = /auto|scroll/, Ff = /^tb|vertical/, Of = /msie|trident/i.test(ut.navigator && ut.navigator.userAgent), Xe = function(e) {
  return parseFloat(e || "0");
}, Uo = function(e, o, t) {
  return e === void 0 && (e = 0), o === void 0 && (o = 0), t === void 0 && (t = false), new If((t ? o : e) || 0, (t ? e : o) || 0);
}, Si = ko({ devicePixelContentBoxSize: Uo(), borderBoxSize: Uo(), contentBoxSize: Uo(), contentRect: new ta(0, 0, 0, 0) }), na = function(e, o) {
  if (o === void 0 && (o = false), Ht.has(e) && !o) return Ht.get(e);
  if (ra(e)) return Ht.set(e, Si), Si;
  var t = getComputedStyle(e), r = un(e) && e.ownerSVGElement && e.getBBox(), n = !Of && t.boxSizing === "border-box", i = Ff.test(t.writingMode || ""), l = !r && yi.test(t.overflowY || ""), a = !r && yi.test(t.overflowX || ""), s = r ? 0 : Xe(t.paddingTop), c = r ? 0 : Xe(t.paddingRight), d = r ? 0 : Xe(t.paddingBottom), u = r ? 0 : Xe(t.paddingLeft), h = r ? 0 : Xe(t.borderTopWidth), f = r ? 0 : Xe(t.borderRightWidth), p = r ? 0 : Xe(t.borderBottomWidth), v = r ? 0 : Xe(t.borderLeftWidth), b = u + c, g = s + d, x = v + f, P = h + p, y = a ? e.offsetHeight - P - e.clientHeight : 0, z = l ? e.offsetWidth - x - e.clientWidth : 0, T = n ? b + x : 0, m = n ? g + P : 0, S = r ? r.width : Xe(t.width) - T - z, w = r ? r.height : Xe(t.height) - m - y, M = S + b + z + x, L = w + g + y + P, E = ko({ devicePixelContentBoxSize: Uo(Math.round(S * devicePixelRatio), Math.round(w * devicePixelRatio), i), borderBoxSize: Uo(M, L, i), contentBoxSize: Uo(S, w, i), contentRect: new ta(u, s, S, w) });
  return Ht.set(e, E), E;
}, ia = function(e, o, t) {
  var r = na(e, t), n = r.borderBoxSize, i = r.contentBoxSize, l = r.devicePixelContentBoxSize;
  switch (o) {
    case vt.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case vt.BORDER_BOX:
      return n;
    default:
      return i;
  }
}, Lf = /* @__PURE__ */ (function() {
  function e(o) {
    var t = na(o);
    this.target = o, this.contentRect = t.contentRect, this.borderBoxSize = ko([t.borderBoxSize]), this.contentBoxSize = ko([t.contentBoxSize]), this.devicePixelContentBoxSize = ko([t.devicePixelContentBoxSize]);
  }
  return e;
})(), la = function(e) {
  if (ra(e)) return 1 / 0;
  for (var o = 0, t = e.parentNode; t; ) o += 1, t = t.parentNode;
  return o;
}, Af = function() {
  var e = 1 / 0, o = [];
  Ro.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var a = [];
      l.activeTargets.forEach(function(c) {
        var d = new Lf(c.target), u = la(c.target);
        a.push(d), c.lastReportedSize = ia(c.target, c.observedBox), u < e && (e = u);
      }), o.push(function() {
        l.callback.call(l.observer, a, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var t = 0, r = o; t < r.length; t++) {
    var n = r[t];
    n();
  }
  return e;
}, wi = function(e) {
  Ro.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
      n.isActive() && (la(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
    });
  });
}, Df = function() {
  var e = 0;
  for (wi(e); Mf(); ) e = Af(), wi(e);
  return Rf() && kf(), e > 0;
}, pr, aa = [], Wf = function() {
  return aa.splice(0).forEach(function(e) {
    return e();
  });
}, _f = function(e) {
  if (!pr) {
    var o = 0, t = document.createTextNode(""), r = { characterData: true };
    new MutationObserver(function() {
      return Wf();
    }).observe(t, r), pr = function() {
      t.textContent = "".concat(o ? o-- : o++);
    };
  }
  aa.push(e), pr();
}, Nf = function(e) {
  _f(function() {
    requestAnimationFrame(e);
  });
}, Dt = 0, jf = function() {
  return !!Dt;
}, Vf = 250, Gf = { attributes: true, characterData: true, childList: true, subtree: true }, $i = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], Pi = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, gr = false, Kf = (function() {
  function e() {
    var o = this;
    this.stopped = true, this.listener = function() {
      return o.schedule();
    };
  }
  return e.prototype.run = function(o) {
    var t = this;
    if (o === void 0 && (o = Vf), !gr) {
      gr = true;
      var r = Pi(o);
      Nf(function() {
        var n = false;
        try {
          n = Df();
        } finally {
          if (gr = false, o = r - Pi(), !jf()) return;
          n ? t.run(1e3) : o > 0 ? t.run(o) : t.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var o = this, t = function() {
      return o.observer && o.observer.observe(document.body, Gf);
    };
    document.body ? t() : ut.addEventListener("DOMContentLoaded", t);
  }, e.prototype.start = function() {
    var o = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), $i.forEach(function(t) {
      return ut.addEventListener(t, o.listener, true);
    }));
  }, e.prototype.stop = function() {
    var o = this;
    this.stopped || (this.observer && this.observer.disconnect(), $i.forEach(function(t) {
      return ut.removeEventListener(t, o.listener, true);
    }), this.stopped = true);
  }, e;
})(), Ar = new Kf(), zi = function(e) {
  !Dt && e > 0 && Ar.start(), Dt += e, !Dt && Ar.stop();
}, qf = function(e) {
  return !un(e) && !Hf(e) && getComputedStyle(e).display === "inline";
}, Uf = (function() {
  function e(o, t) {
    this.target = o, this.observedBox = t || vt.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e.prototype.isActive = function() {
    var o = ia(this.target, this.observedBox, true);
    return qf(this.target) && (this.lastReportedSize = o), this.lastReportedSize.inlineSize !== o.inlineSize || this.lastReportedSize.blockSize !== o.blockSize;
  }, e;
})(), Xf = /* @__PURE__ */ (function() {
  function e(o, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = o, this.callback = t;
  }
  return e;
})(), Ft = /* @__PURE__ */ new WeakMap(), Ti = function(e, o) {
  for (var t = 0; t < e.length; t += 1) if (e[t].target === o) return t;
  return -1;
}, Ot = (function() {
  function e() {
  }
  return e.connect = function(o, t) {
    var r = new Xf(o, t);
    Ft.set(o, r);
  }, e.observe = function(o, t, r) {
    var n = Ft.get(o), i = n.observationTargets.length === 0;
    Ti(n.observationTargets, t) < 0 && (i && Ro.push(n), n.observationTargets.push(new Uf(t, r && r.box)), zi(1), Ar.schedule());
  }, e.unobserve = function(o, t) {
    var r = Ft.get(o), n = Ti(r.observationTargets, t), i = r.observationTargets.length === 1;
    n >= 0 && (i && Ro.splice(Ro.indexOf(r), 1), r.observationTargets.splice(n, 1), zi(-1));
  }, e.disconnect = function(o) {
    var t = this, r = Ft.get(o);
    r.observationTargets.slice().forEach(function(n) {
      return t.unobserve(o, n.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
})(), Yf = (function() {
  function e(o) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof o != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ot.connect(this, o);
  }
  return e.prototype.observe = function(o, t) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ci(o)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ot.observe(this, o, t);
  }, e.prototype.unobserve = function(o) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ci(o)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ot.unobserve(this, o);
  }, e.prototype.disconnect = function() {
    Ot.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
})();
class Zf {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Yf)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(o) {
    for (const t of o) {
      const r = this.elHandlersMap.get(t.target);
      r !== void 0 && r(t);
    }
  }
  registerHandler(o, t) {
    this.elHandlersMap.set(o, t), this.observer.observe(o);
  }
  unregisterHandler(o) {
    this.elHandlersMap.has(o) && (this.elHandlersMap.delete(o), this.observer.unobserve(o));
  }
}
const Ei = new Zf(), Bi = te({ name: "ResizeObserver", props: { onResize: Function }, setup(e) {
  let o = false;
  const t = Qo().proxy;
  function r(n) {
    const { onResize: i } = e;
    i !== void 0 && i(n);
  }
  Ue(() => {
    const n = t.$el;
    if (n === void 0) {
      pi("resize-observer", "$el does not exist.");
      return;
    }
    if (n.nextElementSibling !== n.nextSibling && n.nodeType === 3 && n.nodeValue !== "") {
      pi("resize-observer", "$el can not be observed (it may be a text node).");
      return;
    }
    n.nextElementSibling !== null && (Ei.registerHandler(n.nextElementSibling, r), o = true);
  }), ke(() => {
    o && Ei.unregisterHandler(t.$el.nextElementSibling);
  });
}, render() {
  return el(this.$slots, "default");
} }), no = "v-hidden", Qf = st("[v-hidden]", { display: "none!important" }), s0 = te({ name: "Overflow", props: { getCounter: Function, getTail: Function, updateCounter: Function, onUpdateCount: Function, onUpdateOverflow: Function }, setup(e, { slots: o }) {
  const t = V(null), r = V(null);
  function n(l) {
    const { value: a } = t, { getCounter: s, getTail: c } = e;
    let d;
    if (s !== void 0 ? d = s() : d = r.value, !a || !d) return;
    d.hasAttribute(no) && d.removeAttribute(no);
    const { children: u } = a;
    if (l.showAllItemsBeforeCalculate) for (const P of u) P.hasAttribute(no) && P.removeAttribute(no);
    const h = a.offsetWidth, f = [], p = o.tail ? c == null ? void 0 : c() : null;
    let v = p ? p.offsetWidth : 0, b = false;
    const g = a.children.length - (o.tail ? 1 : 0);
    for (let P = 0; P < g - 1; ++P) {
      if (P < 0) continue;
      const y = u[P];
      if (b) {
        y.hasAttribute(no) || y.setAttribute(no, "");
        continue;
      } else y.hasAttribute(no) && y.removeAttribute(no);
      const z = y.offsetWidth;
      if (v += z, f[P] = z, v > h) {
        const { updateCounter: T } = e;
        for (let m = P; m >= 0; --m) {
          const S = g - 1 - m;
          T !== void 0 ? T(S) : d.textContent = `${S}`;
          const w = d.offsetWidth;
          if (v -= f[m], v + w <= h || m === 0) {
            b = true, P = m - 1, p && (P === -1 ? (p.style.maxWidth = `${h - w}px`, p.style.boxSizing = "border-box") : p.style.maxWidth = "");
            const { onUpdateCount: M } = e;
            M && M(S);
            break;
          }
        }
      }
    }
    const { onUpdateOverflow: x } = e;
    b ? x !== void 0 && x(true) : (x !== void 0 && x(false), d.setAttribute(no, ""));
  }
  const i = ot();
  return Qf.mount({ id: "vueuc/overflow", head: true, anchorMetaName: Jl, ssr: i }), Ue(() => n({ showAllItemsBeforeCalculate: false })), { selfRef: t, counterRef: r, sync: n };
}, render() {
  const { $slots: e } = this;
  return Io(() => this.sync({ showAllItemsBeforeCalculate: false })), C("div", { class: "v-overflow", ref: "selfRef" }, [el(e, "default"), e.counter ? e.counter() : C("span", { style: { display: "inline-block" }, ref: "counterRef" }), e.tail ? e.tail() : null]);
} });
function sa(e) {
  return e instanceof HTMLElement;
}
function ca(e) {
  for (let o = 0; o < e.childNodes.length; o++) {
    const t = e.childNodes[o];
    if (sa(t) && (ua(t) || ca(t))) return true;
  }
  return false;
}
function da(e) {
  for (let o = e.childNodes.length - 1; o >= 0; o--) {
    const t = e.childNodes[o];
    if (sa(t) && (ua(t) || da(t))) return true;
  }
  return false;
}
function ua(e) {
  if (!Jf(e)) return false;
  try {
    e.focus({ preventScroll: true });
  } catch {
  }
  return document.activeElement === e;
}
function Jf(e) {
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
let it = [];
const fa = te({ name: "FocusTrap", props: { disabled: Boolean, active: Boolean, autoFocus: { type: Boolean, default: true }, onEsc: Function, initialFocusTo: [String, Function], finalFocusTo: [String, Function], returnFocusOnDeactivated: { type: Boolean, default: true } }, setup(e) {
  const o = Ku(), t = V(null), r = V(null);
  let n = false, i = false;
  const l = typeof document > "u" ? null : document.activeElement;
  function a() {
    return it[it.length - 1] === o;
  }
  function s(b) {
    var g;
    b.code === "Escape" && a() && ((g = e.onEsc) === null || g === void 0 || g.call(e, b));
  }
  Ue(() => {
    Se(() => e.active, (b) => {
      b ? (u(), de("keydown", document, s)) : (ce("keydown", document, s), n && h());
    }, { immediate: true });
  }), ke(() => {
    ce("keydown", document, s), n && h();
  });
  function c(b) {
    if (!i && a()) {
      const g = d();
      if (g === null || g.contains(mt(b))) return;
      f("first");
    }
  }
  function d() {
    const b = t.value;
    if (b === null) return null;
    let g = b;
    for (; g = g.nextSibling, !(g === null || g instanceof Element && g.tagName === "DIV"); ) ;
    return g;
  }
  function u() {
    var b;
    if (!e.disabled) {
      if (it.push(o), e.autoFocus) {
        const { initialFocusTo: g } = e;
        g === void 0 ? f("first") : (b = gi(g)) === null || b === void 0 || b.focus({ preventScroll: true });
      }
      n = true, document.addEventListener("focus", c, true);
    }
  }
  function h() {
    var b;
    if (e.disabled || (document.removeEventListener("focus", c, true), it = it.filter((x) => x !== o), a())) return;
    const { finalFocusTo: g } = e;
    g !== void 0 ? (b = gi(g)) === null || b === void 0 || b.focus({ preventScroll: true }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (i = true, l.focus({ preventScroll: true }), i = false);
  }
  function f(b) {
    if (a() && e.active) {
      const g = t.value, x = r.value;
      if (g !== null && x !== null) {
        const P = d();
        if (P == null || P === x) {
          i = true, g.focus({ preventScroll: true }), i = false;
          return;
        }
        i = true;
        const y = b === "first" ? ca(P) : da(P);
        i = false, y || (i = true, g.focus({ preventScroll: true }), i = false);
      }
    }
  }
  function p(b) {
    if (i) return;
    const g = d();
    g !== null && (b.relatedTarget !== null && g.contains(b.relatedTarget) ? f("last") : f("first"));
  }
  function v(b) {
    i || (b.relatedTarget !== null && b.relatedTarget === t.value ? f("last") : f("first"));
  }
  return { focusableStartRef: t, focusableEndRef: r, focusableStyle: "position: absolute; height: 0; width: 0;", handleStartFocus: p, handleEndFocus: v };
}, render() {
  const { default: e } = this.$slots;
  if (e === void 0) return null;
  if (this.disabled) return e();
  const { active: o, focusableStyle: t } = this;
  return C(Lo, null, [C("div", { "aria-hidden": "true", tabindex: o ? "0" : "-1", ref: "focusableStartRef", style: t, onFocus: this.handleStartFocus }), e(), C("div", { "aria-hidden": "true", style: t, ref: "focusableEndRef", tabindex: o ? "0" : "-1", onFocus: this.handleEndFocus })]);
} });
function Mi(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const eh = /^(\d|\.)+$/, Ri = /(\d|\.)+/;
function Wt(e, { c: o = 1, offset: t = 0, attachPx: r = true } = {}) {
  if (typeof e == "number") {
    const n = (e + t) * o;
    return n === 0 ? "0" : `${n}px`;
  } else if (typeof e == "string") if (eh.test(e)) {
    const n = (Number(e) + t) * o;
    return r ? n === 0 ? "0" : `${n}px` : `${n}`;
  } else {
    const n = Ri.exec(e);
    return n ? e.replace(Ri, String((Number(n[0]) + t) * o)) : e;
  }
  return e;
}
function ki(e) {
  const { left: o, right: t, top: r, bottom: n } = Eo(e);
  return `${r} ${o} ${n} ${t}`;
}
let mr;
function oh() {
  return mr === void 0 && (mr = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), mr;
}
const ha = /* @__PURE__ */ new WeakSet();
function c0(e) {
  ha.add(e);
}
function th(e) {
  return !ha.has(e);
}
function Fo(e, o) {
  console.error(`[naive/${e}]: ${o}`);
}
function d0(e, o, t) {
  console.error(`[naive/${e}]: ${o}`, t);
}
function rh(e, o) {
  throw new Error(`[naive/${e}]: ${o}`);
}
function Le(e, ...o) {
  if (Array.isArray(e)) e.forEach((t) => Le(t, ...o));
  else return e(...o);
}
function nh(e) {
  return (o) => {
    o ? e.value = o.$el : e.value = null;
  };
}
function Vt(e, o = true, t = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && t.push(_t(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Vt(r, o, t);
        return;
      }
      if (r.type === Lo) {
        if (r.children === null) return;
        Array.isArray(r.children) && Vt(r.children, o, t);
      } else {
        if (r.type === Ur && o) return;
        t.push(r);
      }
    }
  }), t;
}
function ih(e, o = "default", t = void 0) {
  const r = e[o];
  if (!r) return Fo("getFirstSlotVNode", `slot[${o}] is empty`), null;
  const n = Vt(r(t));
  return n.length === 1 ? n[0] : (Fo("getFirstSlotVNode", `slot[${o}] should have exactly one child`), null);
}
function lh(e, o, t) {
  if (!o) return null;
  const r = Vt(o(t));
  return r.length === 1 ? r[0] : (Fo("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function bt(e, o = [], t) {
  const r = {};
  return o.forEach((n) => {
    r[n] = e[n];
  }), Object.assign(r, t);
}
function fn(e) {
  return Object.keys(e);
}
function u0(e, o = [], t) {
  const r = {};
  return Object.getOwnPropertyNames(e).forEach((i) => {
    o.includes(i) || (r[i] = e[i]);
  }), Object.assign(r, t);
}
function Ze(e, ...o) {
  return typeof e == "function" ? e(...o) : typeof e == "string" ? _t(e) : typeof e == "number" ? _t(String(e)) : null;
}
function je(e) {
  return e.some((o) => Bs(o) ? !(o.type === Ur || o.type === Lo && !je(o.children)) : true) ? e : null;
}
function Ii(e, o) {
  return e && je(e()) || o();
}
function f0(e, o, t) {
  return e && je(e(o)) || t(o);
}
function Oe(e, o) {
  const t = e && je(e());
  return o(t || null);
}
function h0(e, o, t) {
  const r = e && je(e(o));
  return t(r || null);
}
function Dr(e) {
  return !(e && je(e()));
}
const Hi = te({ render() {
  var e, o;
  return (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e);
} }), so = "n-config-provider", Gt = "n";
function to(e = {}, o = { defaultBordered: true }) {
  const t = ie(so, null);
  return { inlineThemeDisabled: t == null ? void 0 : t.inlineThemeDisabled, mergedRtlRef: t == null ? void 0 : t.mergedRtlRef, mergedComponentPropsRef: t == null ? void 0 : t.mergedComponentPropsRef, mergedBreakpointsRef: t == null ? void 0 : t.mergedBreakpointsRef, mergedBorderedRef: I(() => {
    var r, n;
    const { bordered: i } = e;
    return i !== void 0 ? i : (n = (r = t == null ? void 0 : t.mergedBorderedRef.value) !== null && r !== void 0 ? r : o.defaultBordered) !== null && n !== void 0 ? n : true;
  }), mergedClsPrefixRef: t ? t.mergedClsPrefixRef : lo(Gt), namespaceRef: I(() => t == null ? void 0 : t.mergedNamespaceRef.value) };
}
function p0() {
  const e = ie(so, null);
  return e ? e.mergedClsPrefixRef : lo(Gt);
}
function co(e, o, t, r) {
  t || rh("useThemeClass", "cssVarsRef is not passed");
  const n = ie(so, null), i = n == null ? void 0 : n.mergedThemeHashRef, l = n == null ? void 0 : n.styleMountTarget, a = V(""), s = ot();
  let c;
  const d = `__${e}`, u = () => {
    let h = d;
    const f = o ? o.value : void 0, p = i == null ? void 0 : i.value;
    p && (h += `-${p}`), f && (h += `-${f}`);
    const { themeOverrides: v, builtinThemeOverrides: b } = r;
    v && (h += `-${pt(JSON.stringify(v))}`), b && (h += `-${pt(JSON.stringify(b))}`), a.value = h, c = () => {
      const g = t.value;
      let x = "";
      for (const P in g) x += `${P}: ${g[P]};`;
      H(`.${h}`, x).mount({ id: h, ssr: s, parent: l }), c = void 0;
    };
  };
  return Jo(() => {
    u();
  }), { themeClass: a, onRender: () => {
    c == null ? void 0 : c();
  } };
}
const Fi = "n-form-item";
function ah(e, { defaultSize: o = "medium", mergedSize: t, mergedDisabled: r } = {}) {
  const n = ie(Fi, null);
  ye(Fi, null);
  const i = I(t ? () => t(n) : () => {
    const { size: s } = e;
    if (s) return s;
    if (n) {
      const { mergedSize: c } = n;
      if (c.value !== void 0) return c.value;
    }
    return o;
  }), l = I(r ? () => r(n) : () => {
    const { disabled: s } = e;
    return s !== void 0 ? s : n ? n.disabled.value : false;
  }), a = I(() => {
    const { status: s } = e;
    return s || (n == null ? void 0 : n.mergedValidationStatus.value);
  });
  return ke(() => {
    n && n.restoreValidation();
  }), { mergedSizeRef: i, mergedDisabledRef: l, mergedStatusRef: a, nTriggerFormBlur() {
    n && n.handleContentBlur();
  }, nTriggerFormChange() {
    n && n.handleContentChange();
  }, nTriggerFormFocus() {
    n && n.handleContentFocus();
  }, nTriggerFormInput() {
    n && n.handleContentInput();
  } };
}
const xt = "naive-ui-style";
function $t(e, o, t) {
  if (!o) return;
  const r = ot(), n = I(() => {
    const { value: a } = o;
    if (!a) return;
    const s = a[e];
    if (s) return s;
  }), i = ie(so, null), l = () => {
    Jo(() => {
      const { value: a } = t, s = `${a}${e}Rtl`;
      if (Bu(s, r)) return;
      const { value: c } = n;
      c && c.style.mount({ id: s, head: true, anchorMetaName: xt, props: { bPrefix: a ? `.${a}-` : void 0 }, ssr: r, parent: i == null ? void 0 : i.styleMountTarget });
    });
  };
  return r ? l() : Oo(l), n;
}
const Ao = { fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace", fontWeight: "400", fontWeightStrong: "500", cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)", cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)", cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)", borderRadius: "3px", borderRadiusSmall: "2px", fontSize: "14px", fontSizeMini: "12px", fontSizeTiny: "12px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", lineHeight: "1.6", heightMini: "16px", heightTiny: "22px", heightSmall: "28px", heightMedium: "34px", heightLarge: "40px", heightHuge: "46px" }, { fontSize: sh, fontFamily: ch, lineHeight: dh } = Ao, pa = H("body", `
 margin: 0;
 font-size: ${sh};
 font-family: ${ch};
 line-height: ${dh};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [H("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Qt(e, o, t) {
  if (!o) return;
  const r = ot(), n = ie(so, null), i = () => {
    const l = t.value;
    o.mount({ id: l === void 0 ? e : l + e, head: true, anchorMetaName: xt, props: { bPrefix: l ? `.${l}-` : void 0 }, ssr: r, parent: n == null ? void 0 : n.styleMountTarget }), (n == null ? void 0 : n.preflightStyleDisabled) || pa.mount({ id: "n-global", head: true, anchorMetaName: xt, ssr: r, parent: n == null ? void 0 : n.styleMountTarget });
  };
  r ? i() : Oo(i);
}
function g0(e) {
  return e;
}
function Ce(e, o, t, r, n, i) {
  const l = ot(), a = ie(so, null);
  if (t) {
    const c = () => {
      const d = i == null ? void 0 : i.value;
      t.mount({ id: d === void 0 ? o : d + o, head: true, props: { bPrefix: d ? `.${d}-` : void 0 }, anchorMetaName: xt, ssr: l, parent: a == null ? void 0 : a.styleMountTarget }), (a == null ? void 0 : a.preflightStyleDisabled) || pa.mount({ id: "n-global", head: true, anchorMetaName: xt, ssr: l, parent: a == null ? void 0 : a.styleMountTarget });
    };
    l ? c() : Oo(c);
  }
  return I(() => {
    var c;
    const { theme: { common: d, self: u, peers: h = {} } = {}, themeOverrides: f = {}, builtinThemeOverrides: p = {} } = n, { common: v, peers: b } = f, { common: g = void 0, [e]: { common: x = void 0, self: P = void 0, peers: y = {} } = {} } = (a == null ? void 0 : a.mergedThemeRef.value) || {}, { common: z = void 0, [e]: T = {} } = (a == null ? void 0 : a.mergedThemeOverridesRef.value) || {}, { common: m, peers: S = {} } = T, w = lt({}, d || x || g || r.common, z, m, v), M = lt((c = u || P || r.self) === null || c === void 0 ? void 0 : c(w), p, T, f);
    return { common: w, self: M, peers: lt({}, r.peers, y, h), peerOverrides: lt({}, p.peers, S, b) };
  });
}
Ce.props = { theme: Object, themeOverrides: Object, builtinThemeOverrides: Object };
const uh = Q("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [H("svg", `
 height: 1em;
 width: 1em;
 `)]), ga = te({ name: "BaseIcon", props: { role: String, ariaLabel: String, ariaDisabled: { type: Boolean, default: void 0 }, ariaHidden: { type: Boolean, default: void 0 }, clsPrefix: { type: String, required: true }, onClick: Function, onMousedown: Function, onMouseup: Function }, setup(e) {
  Qt("-base-icon", uh, ue(e, "clsPrefix"));
}, render() {
  return C("i", { class: `${this.clsPrefix}-base-icon`, onClick: this.onClick, onMousedown: this.onMousedown, onMouseup: this.onMouseup, role: this.role, "aria-label": this.ariaLabel, "aria-hidden": this.ariaHidden, "aria-disabled": this.ariaDisabled }, this.$slots);
} }), ma = te({ name: "BaseIconSwitchTransition", setup(e, { slots: o }) {
  const t = Xt();
  return () => C(Co, { name: "icon-switch-transition", appear: t.value }, o);
} });
function Pt(e, o) {
  const t = te({ render() {
    return o();
  } });
  return te({ name: Dc(e), setup() {
    var r;
    const n = (r = ie(so, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
    return () => {
      var i;
      const l = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e];
      return l ? l() : C(t, null);
    };
  } });
}
const fh = te({ name: "ChevronRight", render() {
  return C("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, C("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" }));
} }), hh = Pt("close", () => C("svg", { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true }, C("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, C("g", { fill: "currentColor", "fill-rule": "nonzero" }, C("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))), ph = Pt("error", () => C("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, C("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, C("g", { "fill-rule": "nonzero" }, C("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z" }))))), Oi = Pt("info", () => C("svg", { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, C("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, C("g", { "fill-rule": "nonzero" }, C("path", { d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z" }))))), gh = Pt("success", () => C("svg", { viewBox: "0 0 48 48", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, C("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, C("g", { "fill-rule": "nonzero" }, C("path", { d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z" }))))), mh = Pt("warning", () => C("svg", { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, C("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, C("g", { "fill-rule": "nonzero" }, C("path", { d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z" }))))), { cubicBezierEaseInOut: vh } = Ao;
function Wr({ originalTransform: e = "", left: o = 0, top: t = 0, transition: r = `all .3s ${vh} !important` } = {}) {
  return [H("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", { transform: `${e} scale(0.75)`, left: o, top: t, opacity: 0 }), H("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", { transform: `scale(1) ${e}`, left: o, top: t, opacity: 1 }), H("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", { transformOrigin: "center", position: "absolute", left: o, top: t, transition: r })];
}
const bh = Q("base-close", `
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
 `), H("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), vo("disabled", [H("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), H("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), H("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), H("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), H("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), U("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), U("round", [H("&::before", `
 border-radius: 50%;
 `)])]), va = te({ name: "BaseClose", props: { isButtonTag: { type: Boolean, default: true }, clsPrefix: { type: String, required: true }, disabled: { type: Boolean, default: void 0 }, focusable: { type: Boolean, default: true }, round: Boolean, onClick: Function, absolute: Boolean }, setup(e) {
  return Qt("-base-close", bh, ue(e, "clsPrefix")), () => {
    const { clsPrefix: o, disabled: t, absolute: r, round: n, isButtonTag: i } = e;
    return C(i ? "button" : "div", { type: i ? "button" : void 0, tabindex: t || !e.focusable ? -1 : 0, "aria-disabled": t, "aria-label": "close", role: i ? void 0 : "button", disabled: t, class: [`${o}-base-close`, r && `${o}-base-close--absolute`, t && `${o}-base-close--disabled`, n && `${o}-base-close--round`], onMousedown: (a) => {
      e.focusable || a.preventDefault();
    }, onClick: e.onClick }, C(ga, { clsPrefix: o }, { default: () => C(hh, null) }));
  };
} }), xh = te({ name: "FadeInExpandTransition", props: { appear: Boolean, group: Boolean, mode: String, onLeave: Function, onAfterLeave: Function, onAfterEnter: Function, width: Boolean, reverse: Boolean }, setup(e, { slots: o }) {
  function t(a) {
    e.width ? a.style.maxWidth = `${a.offsetWidth}px` : a.style.maxHeight = `${a.offsetHeight}px`, a.offsetWidth;
  }
  function r(a) {
    e.width ? a.style.maxWidth = "0" : a.style.maxHeight = "0", a.offsetWidth;
    const { onLeave: s } = e;
    s && s();
  }
  function n(a) {
    e.width ? a.style.maxWidth = "" : a.style.maxHeight = "";
    const { onAfterLeave: s } = e;
    s && s();
  }
  function i(a) {
    if (a.style.transition = "none", e.width) {
      const s = a.offsetWidth;
      a.style.maxWidth = "0", a.offsetWidth, a.style.transition = "", a.style.maxWidth = `${s}px`;
    } else if (e.reverse) a.style.maxHeight = `${a.offsetHeight}px`, a.offsetHeight, a.style.transition = "", a.style.maxHeight = "0";
    else {
      const s = a.offsetHeight;
      a.style.maxHeight = "0", a.offsetWidth, a.style.transition = "", a.style.maxHeight = `${s}px`;
    }
    a.offsetWidth;
  }
  function l(a) {
    var s;
    e.width ? a.style.maxWidth = "" : e.reverse || (a.style.maxHeight = ""), (s = e.onAfterEnter) === null || s === void 0 || s.call(e);
  }
  return () => {
    const { group: a, width: s, appear: c, mode: d } = e, u = a ? Ms : Co, h = { name: s ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition", appear: c, onEnter: i, onAfterEnter: l, onBeforeLeave: t, onLeave: r, onAfterLeave: n };
    return a || (h.mode = d), C(u, h, o);
  };
} }), Ch = H([H("@keyframes rotator", `
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
 `, [j("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Wr()]), j("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Wr({ left: "50%", top: "50%", originalTransform: "translateX(-50%) translateY(-50%)" })]), j("container", `
 animation: rotator 3s linear infinite both;
 `, [j("icon", `
 height: 1em;
 width: 1em;
 `)])])]), vr = "1.6s", yh = { strokeWidth: { type: Number, default: 28 }, stroke: { type: String, default: void 0 } }, Sh = te({ name: "BaseLoading", props: Object.assign({ clsPrefix: { type: String, required: true }, show: { type: Boolean, default: true }, scale: { type: Number, default: 1 }, radius: { type: Number, default: 100 } }, yh), setup(e) {
  Qt("-base-loading", Ch, ue(e, "clsPrefix"));
}, render() {
  const { clsPrefix: e, radius: o, strokeWidth: t, stroke: r, scale: n } = this, i = o / n;
  return C("div", { class: `${e}-base-loading`, role: "img", "aria-label": "loading" }, C(ma, null, { default: () => this.show ? C("div", { key: "icon", class: `${e}-base-loading__transition-wrapper` }, C("div", { class: `${e}-base-loading__container` }, C("svg", { class: `${e}-base-loading__icon`, viewBox: `0 0 ${2 * i} ${2 * i}`, xmlns: "http://www.w3.org/2000/svg", style: { color: r } }, C("g", null, C("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};270 ${i} ${i}`, begin: "0s", dur: vr, fill: "freeze", repeatCount: "indefinite" }), C("circle", { class: `${e}-base-loading__icon`, fill: "none", stroke: "currentColor", "stroke-width": t, "stroke-linecap": "round", cx: i, cy: i, r: o - t / 2, "stroke-dasharray": 5.67 * o, "stroke-dashoffset": 18.48 * o }, C("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`, begin: "0s", dur: vr, fill: "freeze", repeatCount: "indefinite" }), C("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * o};${1.42 * o};${5.67 * o}`, begin: "0s", dur: vr, fill: "freeze", repeatCount: "indefinite" })))))) : C("div", { key: "placeholder", class: `${e}-base-loading__placeholder` }, this.$slots) }));
} }), { cubicBezierEaseInOut: Li } = Ao;
function ba({ name: e = "fade-in", enterDuration: o = "0.2s", leaveDuration: t = "0.2s", enterCubicBezier: r = Li, leaveCubicBezier: n = Li } = {}) {
  return [H(`&.${e}-transition-enter-active`, { transition: `all ${o} ${r}!important` }), H(`&.${e}-transition-leave-active`, { transition: `all ${t} ${n}!important` }), H(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, { opacity: 0 }), H(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, { opacity: 1 })];
}
const Y = { neutralBase: "#FFF", neutralInvertBase: "#000", neutralTextBase: "#000", neutralPopover: "#fff", neutralCard: "#fff", neutralModal: "#fff", neutralBody: "#fff", alpha1: "0.82", alpha2: "0.72", alpha3: "0.38", alpha4: "0.24", alpha5: "0.18", alphaClose: "0.6", alphaDisabled: "0.5", alphaAvatar: "0.2", alphaProgressRail: ".08", alphaInput: "0", alphaScrollbar: "0.25", alphaScrollbarHover: "0.4", primaryHover: "#36ad6a", primaryDefault: "#18a058", primaryActive: "#0c7a43", primarySuppl: "#36ad6a", infoHover: "#4098fc", infoDefault: "#2080f0", infoActive: "#1060c9", infoSuppl: "#4098fc", errorHover: "#de576d", errorDefault: "#d03050", errorActive: "#ab1f3f", errorSuppl: "#de576d", warningHover: "#fcb040", warningDefault: "#f0a020", warningActive: "#c97c10", warningSuppl: "#fcb040", successHover: "#36ad6a", successDefault: "#18a058", successActive: "#0c7a43", successSuppl: "#36ad6a" }, wh = So(Y.neutralBase), xa = So(Y.neutralInvertBase), $h = `rgba(${xa.slice(0, 3).join(", ")}, `;
function Ai(e) {
  return `${$h + String(e)})`;
}
function Me(e) {
  const o = Array.from(xa);
  return o[3] = Number(e), A(wh, o);
}
const F = Object.assign(Object.assign({ name: "common" }, Ao), { baseColor: Y.neutralBase, primaryColor: Y.primaryDefault, primaryColorHover: Y.primaryHover, primaryColorPressed: Y.primaryActive, primaryColorSuppl: Y.primarySuppl, infoColor: Y.infoDefault, infoColorHover: Y.infoHover, infoColorPressed: Y.infoActive, infoColorSuppl: Y.infoSuppl, successColor: Y.successDefault, successColorHover: Y.successHover, successColorPressed: Y.successActive, successColorSuppl: Y.successSuppl, warningColor: Y.warningDefault, warningColorHover: Y.warningHover, warningColorPressed: Y.warningActive, warningColorSuppl: Y.warningSuppl, errorColor: Y.errorDefault, errorColorHover: Y.errorHover, errorColorPressed: Y.errorActive, errorColorSuppl: Y.errorSuppl, textColorBase: Y.neutralTextBase, textColor1: "rgb(31, 34, 37)", textColor2: "rgb(51, 54, 57)", textColor3: "rgb(118, 124, 130)", textColorDisabled: Me(Y.alpha4), placeholderColor: Me(Y.alpha4), placeholderColorDisabled: Me(Y.alpha5), iconColor: Me(Y.alpha4), iconColorHover: Mt(Me(Y.alpha4), { lightness: 0.75 }), iconColorPressed: Mt(Me(Y.alpha4), { lightness: 0.9 }), iconColorDisabled: Me(Y.alpha5), opacity1: Y.alpha1, opacity2: Y.alpha2, opacity3: Y.alpha3, opacity4: Y.alpha4, opacity5: Y.alpha5, dividerColor: "rgb(239, 239, 245)", borderColor: "rgb(224, 224, 230)", closeIconColor: Me(Number(Y.alphaClose)), closeIconColorHover: Me(Number(Y.alphaClose)), closeIconColorPressed: Me(Number(Y.alphaClose)), closeColorHover: "rgba(0, 0, 0, .09)", closeColorPressed: "rgba(0, 0, 0, .13)", clearColor: Me(Y.alpha4), clearColorHover: Mt(Me(Y.alpha4), { lightness: 0.75 }), clearColorPressed: Mt(Me(Y.alpha4), { lightness: 0.9 }), scrollbarColor: Ai(Y.alphaScrollbar), scrollbarColorHover: Ai(Y.alphaScrollbarHover), scrollbarWidth: "5px", scrollbarHeight: "5px", scrollbarBorderRadius: "5px", progressRailColor: Me(Y.alphaProgressRail), railColor: "rgb(219, 219, 223)", popoverColor: Y.neutralPopover, tableColor: Y.neutralCard, cardColor: Y.neutralCard, modalColor: Y.neutralModal, bodyColor: Y.neutralBody, tagColor: "#eee", avatarColor: Me(Y.alphaAvatar), invertedColor: "rgb(0, 20, 40)", inputColor: Me(Y.alphaInput), codeColor: "rgb(244, 244, 248)", tabColor: "rgb(247, 247, 250)", actionColor: "rgb(250, 250, 252)", tableHeaderColor: "rgb(250, 250, 252)", hoverColor: "rgb(243, 243, 245)", tableColorHover: "rgba(0, 0, 100, 0.03)", tableColorStriped: "rgba(0, 0, 100, 0.02)", pressedColor: "rgb(237, 237, 239)", opacityDisabled: Y.alphaDisabled, inputColorDisabled: "rgb(250, 250, 252)", buttonColor2: "rgba(46, 51, 56, .05)", buttonColor2Hover: "rgba(46, 51, 56, .09)", buttonColor2Pressed: "rgba(46, 51, 56, .13)", boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)", boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)", boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)" }), Ph = { railInsetHorizontalBottom: "auto 2px 4px 2px", railInsetHorizontalTop: "4px 2px auto 2px", railInsetVerticalRight: "2px 4px 2px auto", railInsetVerticalLeft: "2px auto 2px 4px", railColor: "transparent" };
function zh(e) {
  const { scrollbarColor: o, scrollbarColorHover: t, scrollbarHeight: r, scrollbarWidth: n, scrollbarBorderRadius: i } = e;
  return Object.assign(Object.assign({}, Ph), { height: r, width: n, borderRadius: i, color: o, colorHover: t });
}
const Ee = { name: "Scrollbar", common: F, self: zh }, Th = Q("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [H(">", [Q("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [H("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), H(">", [Q("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), H(">, +", [Q("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [U("horizontal", `
 height: var(--n-scrollbar-height);
 `, [H(">", [j("scrollbar", `
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
 `, [H(">", [j("scrollbar", `
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
 `), U("disabled", [H(">", [j("scrollbar", "pointer-events: none;")])]), H(">", [j("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [ba(), H("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Eh = Object.assign(Object.assign({}, Ce.props), { duration: { type: Number, default: 0 }, scrollable: { type: Boolean, default: true }, xScrollable: Boolean, trigger: { type: String, default: "hover" }, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function, internalHoistYRail: Boolean, yPlacement: { type: String, default: "right" }, xPlacement: { type: String, default: "bottom" } }), Ca = te({ name: "Scrollbar", props: Eh, inheritAttrs: false, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: t, mergedRtlRef: r } = to(e), n = $t("Scrollbar", r, o), i = V(null), l = V(null), a = V(null), s = V(null), c = V(null), d = V(null), u = V(null), h = V(null), f = V(null), p = V(null), v = V(null), b = V(0), g = V(0), x = V(false), P = V(false);
  let y = false, z = false, T, m, S = 0, w = 0, M = 0, L = 0;
  const E = lf(), _ = Ce("Scrollbar", "-scrollbar", Th, Ee, e, o), D = I(() => {
    const { value: O } = h, { value: q } = d, { value: J } = p;
    return O === null || q === null || J === null ? 0 : Math.min(O, J * O / q + ei(_.value.self.width) * 1.5);
  }), B = I(() => `${D.value}px`), N = I(() => {
    const { value: O } = f, { value: q } = u, { value: J } = v;
    return O === null || q === null || J === null ? 0 : J * O / q + ei(_.value.self.height) * 1.5;
  }), k = I(() => `${N.value}px`), X = I(() => {
    const { value: O } = h, { value: q } = b, { value: J } = d, { value: he } = p;
    if (O === null || J === null || he === null) return 0;
    {
      const $e = J - O;
      return $e ? q / $e * (he - D.value) : 0;
    }
  }), ne = I(() => `${X.value}px`), le = I(() => {
    const { value: O } = f, { value: q } = g, { value: J } = u, { value: he } = v;
    if (O === null || J === null || he === null) return 0;
    {
      const $e = J - O;
      return $e ? q / $e * (he - N.value) : 0;
    }
  }), fe = I(() => `${le.value}px`), ae = I(() => {
    const { value: O } = h, { value: q } = d;
    return O !== null && q !== null && q > O;
  }), Be = I(() => {
    const { value: O } = f, { value: q } = u;
    return O !== null && q !== null && q > O;
  }), Re = I(() => {
    const { trigger: O } = e;
    return O === "none" || x.value;
  }), uo = I(() => {
    const { trigger: O } = e;
    return O === "none" || P.value;
  }), re = I(() => {
    const { container: O } = e;
    return O ? O() : l.value;
  }), $ = I(() => {
    const { content: O } = e;
    return O ? O() : a.value;
  }), W = (O, q) => {
    if (!e.scrollable) return;
    if (typeof O == "number") {
      ee(O, q ?? 0, 0, false, "auto");
      return;
    }
    const { left: J, top: he, index: $e, elSize: He, position: Ke, behavior: be, el: _e, debounce: fo = true } = O;
    (J !== void 0 || he !== void 0) && ee(J ?? 0, he ?? 0, 0, false, be), _e !== void 0 ? ee(0, _e.offsetTop, _e.offsetHeight, fo, be) : $e !== void 0 && He !== void 0 ? ee(0, $e * He, He, fo, be) : Ke === "bottom" ? ee(0, Number.MAX_SAFE_INTEGER, 0, false, be) : Ke === "top" && ee(0, 0, 0, false, be);
  }, R = hf(() => {
    e.container || W({ top: b.value, left: g.value });
  }), K = () => {
    R.isDeactivated || zo();
  }, se = (O) => {
    if (R.isDeactivated) return;
    const { onResize: q } = e;
    q && q(O), zo();
  }, ge = (O, q) => {
    if (!e.scrollable) return;
    const { value: J } = re;
    J && (typeof O == "object" ? J.scrollBy(O) : J.scrollBy(O, q || 0));
  };
  function ee(O, q, J, he, $e) {
    const { value: He } = re;
    if (He) {
      if (he) {
        const { scrollTop: Ke, offsetHeight: be } = He;
        if (q > Ke) {
          q + J <= Ke + be || He.scrollTo({ left: O, top: q + J - be, behavior: $e });
          return;
        }
      }
      He.scrollTo({ left: O, top: q, behavior: $e });
    }
  }
  function oe() {
    rr(), ve(), zo();
  }
  function me() {
    Ge();
  }
  function Ge() {
    ze(), tr();
  }
  function ze() {
    m !== void 0 && window.clearTimeout(m), m = window.setTimeout(() => {
      P.value = false;
    }, e.duration);
  }
  function tr() {
    T !== void 0 && window.clearTimeout(T), T = window.setTimeout(() => {
      x.value = false;
    }, e.duration);
  }
  function rr() {
    T !== void 0 && window.clearTimeout(T), x.value = true;
  }
  function ve() {
    m !== void 0 && window.clearTimeout(m), P.value = true;
  }
  function Te(O) {
    const { onScroll: q } = e;
    q && q(O), Po();
  }
  function Po() {
    const { value: O } = re;
    O && (b.value = O.scrollTop, g.value = O.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1));
  }
  function qa() {
    const { value: O } = $;
    O && (d.value = O.offsetHeight, u.value = O.offsetWidth);
    const { value: q } = re;
    q && (h.value = q.offsetHeight, f.value = q.offsetWidth);
    const { value: J } = c, { value: he } = s;
    J && (v.value = J.offsetWidth), he && (p.value = he.offsetHeight);
  }
  function Sn() {
    const { value: O } = re;
    O && (b.value = O.scrollTop, g.value = O.scrollLeft * ((n == null ? void 0 : n.value) ? -1 : 1), h.value = O.offsetHeight, f.value = O.offsetWidth, d.value = O.scrollHeight, u.value = O.scrollWidth);
    const { value: q } = c, { value: J } = s;
    q && (v.value = q.offsetWidth), J && (p.value = J.offsetHeight);
  }
  function zo() {
    e.scrollable && (e.useUnifiedContainer ? Sn() : (qa(), Po()));
  }
  function wn(O) {
    var q;
    return !(!((q = i.value) === null || q === void 0) && q.contains(mt(O)));
  }
  function Ua(O) {
    O.preventDefault(), O.stopPropagation(), z = true, de("mousemove", window, $n, true), de("mouseup", window, Pn, true), w = g.value, M = (n == null ? void 0 : n.value) ? window.innerWidth - O.clientX : O.clientX;
  }
  function $n(O) {
    if (!z) return;
    T !== void 0 && window.clearTimeout(T), m !== void 0 && window.clearTimeout(m);
    const { value: q } = f, { value: J } = u, { value: he } = N;
    if (q === null || J === null) return;
    const He = ((n == null ? void 0 : n.value) ? window.innerWidth - O.clientX - M : O.clientX - M) * (J - q) / (q - he), Ke = J - q;
    let be = w + He;
    be = Math.min(Ke, be), be = Math.max(be, 0);
    const { value: _e } = re;
    if (_e) {
      _e.scrollLeft = be * ((n == null ? void 0 : n.value) ? -1 : 1);
      const { internalOnUpdateScrollLeft: fo } = e;
      fo && fo(be);
    }
  }
  function Pn(O) {
    O.preventDefault(), O.stopPropagation(), ce("mousemove", window, $n, true), ce("mouseup", window, Pn, true), z = false, zo(), wn(O) && Ge();
  }
  function Xa(O) {
    O.preventDefault(), O.stopPropagation(), y = true, de("mousemove", window, nr, true), de("mouseup", window, ir, true), S = b.value, L = O.clientY;
  }
  function nr(O) {
    if (!y) return;
    T !== void 0 && window.clearTimeout(T), m !== void 0 && window.clearTimeout(m);
    const { value: q } = h, { value: J } = d, { value: he } = D;
    if (q === null || J === null) return;
    const He = (O.clientY - L) * (J - q) / (q - he), Ke = J - q;
    let be = S + He;
    be = Math.min(Ke, be), be = Math.max(be, 0);
    const { value: _e } = re;
    _e && (_e.scrollTop = be);
  }
  function ir(O) {
    O.preventDefault(), O.stopPropagation(), ce("mousemove", window, nr, true), ce("mouseup", window, ir, true), y = false, zo(), wn(O) && Ge();
  }
  Jo(() => {
    const { value: O } = Be, { value: q } = ae, { value: J } = o, { value: he } = c, { value: $e } = s;
    he && (O ? he.classList.remove(`${J}-scrollbar-rail--disabled`) : he.classList.add(`${J}-scrollbar-rail--disabled`)), $e && (q ? $e.classList.remove(`${J}-scrollbar-rail--disabled`) : $e.classList.add(`${J}-scrollbar-rail--disabled`));
  }), Ue(() => {
    e.container || zo();
  }), ke(() => {
    T !== void 0 && window.clearTimeout(T), m !== void 0 && window.clearTimeout(m), ce("mousemove", window, nr, true), ce("mouseup", window, ir, true);
  });
  const zn = I(() => {
    const { common: { cubicBezierEaseInOut: O }, self: { color: q, colorHover: J, height: he, width: $e, borderRadius: He, railInsetHorizontalTop: Ke, railInsetHorizontalBottom: be, railInsetVerticalRight: _e, railInsetVerticalLeft: fo, railColor: Ya } } = _.value, { top: Za, right: Qa, bottom: Ja, left: es } = Eo(Ke), { top: os, right: ts, bottom: rs, left: ns } = Eo(be), { top: is, right: ls, bottom: as, left: ss } = Eo((n == null ? void 0 : n.value) ? ki(_e) : _e), { top: cs, right: ds, bottom: us, left: fs } = Eo((n == null ? void 0 : n.value) ? ki(fo) : fo);
    return { "--n-scrollbar-bezier": O, "--n-scrollbar-color": q, "--n-scrollbar-color-hover": J, "--n-scrollbar-border-radius": He, "--n-scrollbar-width": $e, "--n-scrollbar-height": he, "--n-scrollbar-rail-top-horizontal-top": Za, "--n-scrollbar-rail-right-horizontal-top": Qa, "--n-scrollbar-rail-bottom-horizontal-top": Ja, "--n-scrollbar-rail-left-horizontal-top": es, "--n-scrollbar-rail-top-horizontal-bottom": os, "--n-scrollbar-rail-right-horizontal-bottom": ts, "--n-scrollbar-rail-bottom-horizontal-bottom": rs, "--n-scrollbar-rail-left-horizontal-bottom": ns, "--n-scrollbar-rail-top-vertical-right": is, "--n-scrollbar-rail-right-vertical-right": ls, "--n-scrollbar-rail-bottom-vertical-right": as, "--n-scrollbar-rail-left-vertical-right": ss, "--n-scrollbar-rail-top-vertical-left": cs, "--n-scrollbar-rail-right-vertical-left": ds, "--n-scrollbar-rail-bottom-vertical-left": us, "--n-scrollbar-rail-left-vertical-left": fs, "--n-scrollbar-rail-color": Ya };
  }), Do = t ? co("scrollbar", void 0, zn, e) : void 0;
  return Object.assign(Object.assign({}, { scrollTo: W, scrollBy: ge, sync: zo, syncUnifiedContainer: Sn, handleMouseEnterWrapper: oe, handleMouseLeaveWrapper: me }), { mergedClsPrefix: o, rtlEnabled: n, containerScrollTop: b, wrapperRef: i, containerRef: l, contentRef: a, yRailRef: s, xRailRef: c, needYBar: ae, needXBar: Be, yBarSizePx: B, xBarSizePx: k, yBarTopPx: ne, xBarLeftPx: fe, isShowXBar: Re, isShowYBar: uo, isIos: E, handleScroll: Te, handleContentResize: K, handleContainerResize: se, handleYScrollMouseDown: Xa, handleXScrollMouseDown: Ua, cssVars: t ? void 0 : zn, themeClass: Do == null ? void 0 : Do.themeClass, onRender: Do == null ? void 0 : Do.onRender });
}, render() {
  var e;
  const { $slots: o, mergedClsPrefix: t, triggerDisplayManually: r, rtlEnabled: n, internalHoistYRail: i, yPlacement: l, xPlacement: a, xScrollable: s } = this;
  if (!this.scrollable) return (e = o.default) === null || e === void 0 ? void 0 : e.call(o);
  const c = this.trigger === "none", d = (f, p) => C("div", { ref: "yRailRef", class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--vertical`, `${t}-scrollbar-rail--vertical--${l}`, f], "data-scrollbar-rail": true, style: [p || "", this.verticalRailStyle], "aria-hidden": true }, C(c ? Hi : Co, c ? null : { name: "fade-in-transition" }, { default: () => this.needYBar && this.isShowYBar && !this.isIos ? C("div", { class: `${t}-scrollbar-rail__scrollbar`, style: { height: this.yBarSizePx, top: this.yBarTopPx }, onMousedown: this.handleYScrollMouseDown }) : null })), u = () => {
    var f, p;
    return (f = this.onRender) === null || f === void 0 || f.call(this), C("div", et(this.$attrs, { role: "none", ref: "wrapperRef", class: [`${t}-scrollbar`, this.themeClass, n && `${t}-scrollbar--rtl`], style: this.cssVars, onMouseenter: r ? void 0 : this.handleMouseEnterWrapper, onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper }), [this.container ? (p = o.default) === null || p === void 0 ? void 0 : p.call(o) : C("div", { role: "none", ref: "containerRef", class: [`${t}-scrollbar-container`, this.containerClass], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel }, C(Bi, { onResize: this.handleContentResize }, { default: () => C("div", { ref: "contentRef", role: "none", style: [{ width: this.xScrollable ? "fit-content" : null }, this.contentStyle], class: [`${t}-scrollbar-content`, this.contentClass] }, o) })), i ? null : d(void 0, void 0), s && C("div", { ref: "xRailRef", class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--horizontal`, `${t}-scrollbar-rail--horizontal--${a}`], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, C(c ? Hi : Co, c ? null : { name: "fade-in-transition" }, { default: () => this.needXBar && this.isShowXBar && !this.isIos ? C("div", { class: `${t}-scrollbar-rail__scrollbar`, style: { width: this.xBarSizePx, right: n ? this.xBarLeftPx : void 0, left: n ? void 0 : this.xBarLeftPx }, onMousedown: this.handleXScrollMouseDown }) : null }))]);
  }, h = this.container ? u() : C(Bi, { onResize: this.handleContainerResize }, { default: u });
  return i ? C(Lo, null, h, d(this.themeClass, this.cssVars)) : h;
} }), ya = Ca;
function Di(e) {
  return Array.isArray(e) ? e : [e];
}
const _r = { STOP: "STOP" };
function Sa(e, o) {
  const t = o(e);
  e.children !== void 0 && t !== _r.STOP && e.children.forEach((r) => Sa(r, o));
}
function Bh(e, o = {}) {
  const { preserveGroup: t = false } = o, r = [], n = t ? (l) => {
    l.isLeaf || (r.push(l.key), i(l.children));
  } : (l) => {
    l.isLeaf || (l.isGroup || r.push(l.key), i(l.children));
  };
  function i(l) {
    l.forEach(n);
  }
  return i(e), r;
}
function Mh(e, o) {
  const { isLeaf: t } = e;
  return t !== void 0 ? t : !o(e);
}
function Rh(e) {
  return e.children;
}
function kh(e) {
  return e.key;
}
function Ih() {
  return false;
}
function Hh(e, o) {
  const { isLeaf: t } = e;
  return !(t === false && !Array.isArray(o(e)));
}
function Fh(e) {
  return e.disabled === true;
}
function Oh(e, o) {
  return e.isLeaf === false && !Array.isArray(o(e));
}
function br(e) {
  var o;
  return e == null ? [] : Array.isArray(e) ? e : (o = e.checkedKeys) !== null && o !== void 0 ? o : [];
}
function xr(e) {
  var o;
  return e == null || Array.isArray(e) ? [] : (o = e.indeterminateKeys) !== null && o !== void 0 ? o : [];
}
function Lh(e, o) {
  const t = new Set(e);
  return o.forEach((r) => {
    t.has(r) || t.add(r);
  }), Array.from(t);
}
function Ah(e, o) {
  const t = new Set(e);
  return o.forEach((r) => {
    t.has(r) && t.delete(r);
  }), Array.from(t);
}
function Dh(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function m0(e) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((t, r) => {
    o.set(t.key, r);
  }), (t) => {
    var r;
    return (r = o.get(t)) !== null && r !== void 0 ? r : null;
  };
}
class Wh extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function _h(e, o, t, r) {
  return Kt(o.concat(e), t, r, false);
}
function Nh(e, o) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const n = o.treeNodeMap.get(r);
    if (n !== void 0) {
      let i = n.parent;
      for (; i !== null && !(i.disabled || t.has(i.key)); ) t.add(i.key), i = i.parent;
    }
  }), t;
}
function jh(e, o, t, r) {
  const n = Kt(o, t, r, false), i = Kt(e, t, r, true), l = Nh(e, t), a = [];
  return n.forEach((s) => {
    (i.has(s) || l.has(s)) && a.push(s);
  }), a.forEach((s) => n.delete(s)), n;
}
function Cr(e, o) {
  const { checkedKeys: t, keysToCheck: r, keysToUncheck: n, indeterminateKeys: i, cascade: l, leafOnly: a, checkStrategy: s, allowNotLoaded: c } = e;
  if (!l) return r !== void 0 ? { checkedKeys: Lh(t, r), indeterminateKeys: Array.from(i) } : n !== void 0 ? { checkedKeys: Ah(t, n), indeterminateKeys: Array.from(i) } : { checkedKeys: Array.from(t), indeterminateKeys: Array.from(i) };
  const { levelTreeNodeMap: d } = o;
  let u;
  n !== void 0 ? u = jh(n, t, o, c) : r !== void 0 ? u = _h(r, t, o, c) : u = Kt(t, o, c, false);
  const h = s === "parent", f = s === "child" || a, p = u, v = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(d.keys()));
  for (let g = b; g >= 0; g -= 1) {
    const x = g === 0, P = d.get(g);
    for (const y of P) {
      if (y.isLeaf) continue;
      const { key: z, shallowLoaded: T } = y;
      if (f && T && y.children.forEach((M) => {
        !M.disabled && !M.isLeaf && M.shallowLoaded && p.has(M.key) && p.delete(M.key);
      }), y.disabled || !T) continue;
      let m = true, S = false, w = true;
      for (const M of y.children) {
        const L = M.key;
        if (!M.disabled) {
          if (w && (w = false), p.has(L)) S = true;
          else if (v.has(L)) {
            S = true, m = false;
            break;
          } else if (m = false, S) break;
        }
      }
      m && !w ? (h && y.children.forEach((M) => {
        !M.disabled && p.has(M.key) && p.delete(M.key);
      }), p.add(z)) : S && v.add(z), x && f && p.has(z) && p.delete(z);
    }
  }
  return { checkedKeys: Array.from(p), indeterminateKeys: Array.from(v) };
}
function Kt(e, o, t, r) {
  const { treeNodeMap: n, getChildren: i } = o, l = /* @__PURE__ */ new Set(), a = new Set(e);
  return e.forEach((s) => {
    const c = n.get(s);
    c !== void 0 && Sa(c, (d) => {
      if (d.disabled) return _r.STOP;
      const { key: u } = d;
      if (!l.has(u) && (l.add(u), a.add(u), Oh(d.rawNode, i))) {
        if (r) return _r.STOP;
        if (!t) throw new Wh();
      }
    });
  }), a;
}
function Vh(e, { includeGroup: o = false, includeSelf: t = true }, r) {
  var n;
  const i = r.treeNodeMap;
  let l = e == null ? null : (n = i.get(e)) !== null && n !== void 0 ? n : null;
  const a = { keyPath: [], treeNodePath: [], treeNode: l };
  if (l == null ? void 0 : l.ignored) return a.treeNode = null, a;
  for (; l; ) !l.ignored && (o || !l.isGroup) && a.treeNodePath.push(l), l = l.parent;
  return a.treeNodePath.reverse(), t || a.treeNodePath.pop(), a.keyPath = a.treeNodePath.map((s) => s.key), a;
}
function Gh(e) {
  if (e.length === 0) return null;
  const o = e[0];
  return o.isGroup || o.ignored || o.disabled ? o.getNext() : o;
}
function Kh(e, o) {
  const t = e.siblings, r = t.length, { index: n } = e;
  return o ? t[(n + 1) % r] : n === t.length - 1 ? null : t[n + 1];
}
function Wi(e, o, { loop: t = false, includeDisabled: r = false } = {}) {
  const n = o === "prev" ? qh : Kh, i = { reverse: o === "prev" };
  let l = false, a = null;
  function s(c) {
    if (c !== null) {
      if (c === e) {
        if (!l) l = true;
        else if (!e.disabled && !e.isGroup) {
          a = e;
          return;
        }
      } else if ((!c.disabled || r) && !c.ignored && !c.isGroup) {
        a = c;
        return;
      }
      if (c.isGroup) {
        const d = hn(c, i);
        d !== null ? a = d : s(n(c, t));
      } else {
        const d = n(c, false);
        if (d !== null) s(d);
        else {
          const u = Uh(c);
          (u == null ? void 0 : u.isGroup) ? s(n(u, t)) : t && s(n(c, true));
        }
      }
    }
  }
  return s(e), a;
}
function qh(e, o) {
  const t = e.siblings, r = t.length, { index: n } = e;
  return o ? t[(n - 1 + r) % r] : n === 0 ? null : t[n - 1];
}
function Uh(e) {
  return e.parent;
}
function hn(e, o = {}) {
  const { reverse: t = false } = o, { children: r } = e;
  if (r) {
    const { length: n } = r, i = t ? n - 1 : 0, l = t ? -1 : n, a = t ? -1 : 1;
    for (let s = i; s !== l; s += a) {
      const c = r[s];
      if (!c.disabled && !c.ignored) if (c.isGroup) {
        const d = hn(c, o);
        if (d !== null) return d;
      } else return c;
    }
  }
  return null;
}
const Xh = { getChild() {
  return this.ignored ? null : hn(this);
}, getParent() {
  const { parent: e } = this;
  return (e == null ? void 0 : e.isGroup) ? e.getParent() : e;
}, getNext(e = {}) {
  return Wi(this, "next", e);
}, getPrev(e = {}) {
  return Wi(this, "prev", e);
} };
function Yh(e, o) {
  const t = o ? new Set(o) : void 0, r = [];
  function n(i) {
    i.forEach((l) => {
      r.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || t === void 0 || t.has(l.key)) && n(l.children);
    });
  }
  return n(e), r;
}
function Zh(e, o) {
  const t = e.key;
  for (; o; ) {
    if (o.key === t) return true;
    o = o.parent;
  }
  return false;
}
function wa(e, o, t, r, n, i = null, l = 0) {
  const a = [];
  return e.forEach((s, c) => {
    var d;
    const u = Object.create(r);
    if (u.rawNode = s, u.siblings = a, u.level = l, u.index = c, u.isFirstChild = c === 0, u.isLastChild = c + 1 === e.length, u.parent = i, !u.ignored) {
      const h = n(s);
      Array.isArray(h) && (u.children = wa(h, o, t, r, n, u, l + 1));
    }
    a.push(u), o.set(u.key, u), t.has(l) || t.set(l, []), (d = t.get(l)) === null || d === void 0 || d.push(u);
  }), a;
}
function Qh(e, o = {}) {
  var t;
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), { getDisabled: i = Fh, getIgnored: l = Ih, getIsGroup: a = Dh, getKey: s = kh } = o, c = (t = o.getChildren) !== null && t !== void 0 ? t : Rh, d = o.ignoreEmptyChildren ? (y) => {
    const z = c(y);
    return Array.isArray(z) ? z.length ? z : null : z;
  } : c, u = Object.assign({ get key() {
    return s(this.rawNode);
  }, get disabled() {
    return i(this.rawNode);
  }, get isGroup() {
    return a(this.rawNode);
  }, get isLeaf() {
    return Mh(this.rawNode, d);
  }, get shallowLoaded() {
    return Hh(this.rawNode, d);
  }, get ignored() {
    return l(this.rawNode);
  }, contains(y) {
    return Zh(this, y);
  } }, Xh), h = wa(e, r, n, u, d);
  function f(y) {
    if (y == null) return null;
    const z = r.get(y);
    return z && !z.isGroup && !z.ignored ? z : null;
  }
  function p(y) {
    if (y == null) return null;
    const z = r.get(y);
    return z && !z.ignored ? z : null;
  }
  function v(y, z) {
    const T = p(y);
    return T ? T.getPrev(z) : null;
  }
  function b(y, z) {
    const T = p(y);
    return T ? T.getNext(z) : null;
  }
  function g(y) {
    const z = p(y);
    return z ? z.getParent() : null;
  }
  function x(y) {
    const z = p(y);
    return z ? z.getChild() : null;
  }
  const P = { treeNodes: h, treeNodeMap: r, levelTreeNodeMap: n, maxLevel: Math.max(...n.keys()), getChildren: d, getFlattenedNodes(y) {
    return Yh(h, y);
  }, getNode: f, getPrev: v, getNext: b, getParent: g, getChild: x, getFirstAvailableNode() {
    return Gh(h);
  }, getPath(y, z = {}) {
    return Vh(y, z, P);
  }, getCheckedKeys(y, z = {}) {
    const { cascade: T = true, leafOnly: m = false, checkStrategy: S = "all", allowNotLoaded: w = false } = z;
    return Cr({ checkedKeys: br(y), indeterminateKeys: xr(y), cascade: T, leafOnly: m, checkStrategy: S, allowNotLoaded: w }, P);
  }, check(y, z, T = {}) {
    const { cascade: m = true, leafOnly: S = false, checkStrategy: w = "all", allowNotLoaded: M = false } = T;
    return Cr({ checkedKeys: br(z), indeterminateKeys: xr(z), keysToCheck: y == null ? [] : Di(y), cascade: m, leafOnly: S, checkStrategy: w, allowNotLoaded: M }, P);
  }, uncheck(y, z, T = {}) {
    const { cascade: m = true, leafOnly: S = false, checkStrategy: w = "all", allowNotLoaded: M = false } = T;
    return Cr({ checkedKeys: br(z), indeterminateKeys: xr(z), keysToUncheck: y == null ? [] : Di(y), cascade: m, leafOnly: S, checkStrategy: w, allowNotLoaded: M }, P);
  }, getNonLeafKeys(y = {}) {
    return Bh(h, y);
  } };
  return P;
}
const Jh = { iconSizeTiny: "28px", iconSizeSmall: "34px", iconSizeMedium: "40px", iconSizeLarge: "46px", iconSizeHuge: "52px" };
function ep(e) {
  const { textColorDisabled: o, iconColor: t, textColor2: r, fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: l, fontSizeLarge: a, fontSizeHuge: s } = e;
  return Object.assign(Object.assign({}, Jh), { fontSizeTiny: n, fontSizeSmall: i, fontSizeMedium: l, fontSizeLarge: a, fontSizeHuge: s, textColor: o, iconColor: t, extraTextColor: r });
}
const wo = { name: "Empty", common: F, self: ep }, op = { height: "calc(var(--n-option-height) * 7.6)", paddingTiny: "4px 0", paddingSmall: "4px 0", paddingMedium: "4px 0", paddingLarge: "4px 0", paddingHuge: "4px 0", optionPaddingTiny: "0 12px", optionPaddingSmall: "0 12px", optionPaddingMedium: "0 12px", optionPaddingLarge: "0 12px", optionPaddingHuge: "0 12px", loadingSize: "18px" };
function tp(e) {
  const { borderRadius: o, popoverColor: t, textColor3: r, dividerColor: n, textColor2: i, primaryColorPressed: l, textColorDisabled: a, primaryColor: s, opacityDisabled: c, hoverColor: d, fontSizeTiny: u, fontSizeSmall: h, fontSizeMedium: f, fontSizeLarge: p, fontSizeHuge: v, heightTiny: b, heightSmall: g, heightMedium: x, heightLarge: P, heightHuge: y } = e;
  return Object.assign(Object.assign({}, op), { optionFontSizeTiny: u, optionFontSizeSmall: h, optionFontSizeMedium: f, optionFontSizeLarge: p, optionFontSizeHuge: v, optionHeightTiny: b, optionHeightSmall: g, optionHeightMedium: x, optionHeightLarge: P, optionHeightHuge: y, borderRadius: o, color: t, groupHeaderTextColor: r, actionDividerColor: n, optionTextColor: i, optionTextColorPressed: l, optionTextColorDisabled: a, optionTextColorActive: s, optionOpacityDisabled: c, optionCheckColor: s, optionColorPending: d, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: d, actionTextColor: i, loadingColor: s });
}
const zt = { name: "InternalSelectMenu", common: F, peers: { Scrollbar: Ee, Empty: wo }, self: tp }, { cubicBezierEaseIn: _i, cubicBezierEaseOut: Ni } = Ao;
function $a({ transformOrigin: e = "inherit", duration: o = ".2s", enterScale: t = ".9", originalTransform: r = "", originalTransition: n = "" } = {}) {
  return [H("&.fade-in-scale-up-transition-leave-active", { transformOrigin: e, transition: `opacity ${o} ${_i}, transform ${o} ${_i} ${n && `,${n}`}` }), H("&.fade-in-scale-up-transition-enter-active", { transformOrigin: e, transition: `opacity ${o} ${Ni}, transform ${o} ${Ni} ${n && `,${n}`}` }), H("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", { opacity: 0, transform: `${r} scale(${t})` }), H("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", { opacity: 1, transform: `${r} scale(1)` })];
}
const rp = { space: "6px", spaceArrow: "10px", arrowOffset: "10px", arrowOffsetVertical: "10px", arrowHeight: "6px", padding: "8px 14px" };
function np(e) {
  const { boxShadow2: o, popoverColor: t, textColor2: r, borderRadius: n, fontSize: i, dividerColor: l } = e;
  return Object.assign(Object.assign({}, rp), { fontSize: i, borderRadius: n, color: t, dividerColor: l, textColor: r, boxShadow: o });
}
const $o = { name: "Popover", common: F, peers: { Scrollbar: Ee }, self: np }, yr = { top: "bottom", bottom: "top", left: "right", right: "left" }, Pe = "var(--n-arrow-height) * 1.414", ip = H([Q("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [H(">", [Q("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), vo("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [vo("scrollable", [vo("show-header-or-footer", "padding: var(--n-padding);")])]), j("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), j("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), U("scrollable, show-header-or-footer", [j("content", `
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
 width: calc(${Pe});
 height: calc(${Pe});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), H("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `), H("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `), H("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), H("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), Ne("top-start", `
 top: calc(${Pe} / -2);
 left: calc(${io("top-start")} - var(--v-offset-left));
 `), Ne("top", `
 top: calc(${Pe} / -2);
 transform: translateX(calc(${Pe} / -2)) rotate(45deg);
 left: 50%;
 `), Ne("top-end", `
 top: calc(${Pe} / -2);
 right: calc(${io("top-end")} + var(--v-offset-left));
 `), Ne("bottom-start", `
 bottom: calc(${Pe} / -2);
 left: calc(${io("bottom-start")} - var(--v-offset-left));
 `), Ne("bottom", `
 bottom: calc(${Pe} / -2);
 transform: translateX(calc(${Pe} / -2)) rotate(45deg);
 left: 50%;
 `), Ne("bottom-end", `
 bottom: calc(${Pe} / -2);
 right: calc(${io("bottom-end")} + var(--v-offset-left));
 `), Ne("left-start", `
 left: calc(${Pe} / -2);
 top: calc(${io("left-start")} - var(--v-offset-top));
 `), Ne("left", `
 left: calc(${Pe} / -2);
 transform: translateY(calc(${Pe} / -2)) rotate(45deg);
 top: 50%;
 `), Ne("left-end", `
 left: calc(${Pe} / -2);
 bottom: calc(${io("left-end")} + var(--v-offset-top));
 `), Ne("right-start", `
 right: calc(${Pe} / -2);
 top: calc(${io("right-start")} - var(--v-offset-top));
 `), Ne("right", `
 right: calc(${Pe} / -2);
 transform: translateY(calc(${Pe} / -2)) rotate(45deg);
 top: 50%;
 `), Ne("right-end", `
 right: calc(${Pe} / -2);
 bottom: calc(${io("right-end")} + var(--v-offset-top));
 `), ...cd({ top: ["right-start", "left-start"], right: ["top-end", "bottom-end"], bottom: ["right-end", "left-end"], left: ["top-start", "bottom-start"] }, (e, o) => {
  const t = ["right", "left"].includes(o), r = t ? "width" : "height";
  return e.map((n) => {
    const i = n.split("-")[1] === "end", a = `calc((${`var(--v-target-${r}, 0px)`} - ${Pe}) / 2)`, s = io(n);
    return H(`[v-placement="${n}"] >`, [Q("popover-shared", [U("center-arrow", [Q("popover-arrow", `${o}: calc(max(${a}, ${s}) ${i ? "+" : "-"} var(--v-offset-${t ? "left" : "top"}));`)])])]);
  });
})]);
function io(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Ne(e, o) {
  const t = e.split("-")[0], r = ["top", "bottom"].includes(t) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return H(`[v-placement="${e}"] >`, [Q("popover-shared", `
 margin-${yr[t]}: var(--n-space);
 `, [U("show-arrow", `
 margin-${yr[t]}: var(--n-space-arrow);
 `), U("overlap", `
 margin: 0;
 `), Hu("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${yr[t]}: auto;
 ${r}
 `, [Q("popover-arrow", o)])])]);
}
const Pa = Object.assign(Object.assign({}, Ce.props), { to: Zo.propTo, show: Boolean, trigger: String, showArrow: Boolean, delay: Number, duration: Number, raw: Boolean, arrowPointToCenter: Boolean, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], displayDirective: String, x: Number, y: Number, flip: Boolean, overlap: Boolean, placement: String, width: [Number, String], keepAliveOnHover: Boolean, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], internalDeactivateImmediately: Boolean, animated: Boolean, onClickoutside: Function, internalTrapFocus: Boolean, internalOnAfterLeave: Function, minWidth: Number, maxWidth: Number });
function za({ arrowClass: e, arrowStyle: o, arrowWrapperClass: t, arrowWrapperStyle: r, clsPrefix: n }) {
  return C("div", { key: "__popover-arrow__", style: r, class: [`${n}-popover-arrow-wrapper`, t] }, C("div", { class: [`${n}-popover-arrow`, e], style: o }));
}
const lp = te({ name: "PopoverBody", inheritAttrs: false, props: Pa, setup(e, { slots: o, attrs: t }) {
  const { namespaceRef: r, mergedClsPrefixRef: n, inlineThemeDisabled: i, mergedRtlRef: l } = to(e), a = Ce("Popover", "-popover", ip, $o, e, n), s = $t("Popover", l, n), c = V(null), d = ie("NPopover"), u = V(null), h = V(e.show), f = V(false);
  Jo(() => {
    const { show: w } = e;
    w && !oh() && !e.internalDeactivateImmediately && (f.value = true);
  });
  const p = I(() => {
    const { trigger: w, onClickoutside: M } = e, L = [], { positionManuallyRef: { value: E } } = d;
    return E || (w === "click" && !M && L.push([Lr, T, void 0, { capture: true }]), w === "hover" && L.push([mf, z])), M && L.push([Lr, T, void 0, { capture: true }]), (e.displayDirective === "show" || e.animated && f.value) && L.push([Pr, e.show]), L;
  }), v = I(() => {
    const { common: { cubicBezierEaseInOut: w, cubicBezierEaseIn: M, cubicBezierEaseOut: L }, self: { space: E, spaceArrow: _, padding: D, fontSize: B, textColor: N, dividerColor: k, color: X, boxShadow: ne, borderRadius: le, arrowHeight: fe, arrowOffset: ae, arrowOffsetVertical: Be } } = a.value;
    return { "--n-box-shadow": ne, "--n-bezier": w, "--n-bezier-ease-in": M, "--n-bezier-ease-out": L, "--n-font-size": B, "--n-text-color": N, "--n-color": X, "--n-divider-color": k, "--n-border-radius": le, "--n-arrow-height": fe, "--n-arrow-offset": ae, "--n-arrow-offset-vertical": Be, "--n-padding": D, "--n-space": E, "--n-space-arrow": _ };
  }), b = I(() => {
    const w = e.width === "trigger" ? void 0 : Wt(e.width), M = [];
    w && M.push({ width: w });
    const { maxWidth: L, minWidth: E } = e;
    return L && M.push({ maxWidth: Wt(L) }), E && M.push({ maxWidth: Wt(E) }), i || M.push(v.value), M;
  }), g = i ? co("popover", void 0, v, e) : void 0;
  d.setBodyInstance({ syncPosition: x }), ke(() => {
    d.setBodyInstance(null);
  }), Se(ue(e, "show"), (w) => {
    e.animated || (w ? h.value = true : h.value = false);
  });
  function x() {
    var w;
    (w = c.value) === null || w === void 0 || w.syncPosition();
  }
  function P(w) {
    e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(w);
  }
  function y(w) {
    e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(w);
  }
  function z(w) {
    e.trigger === "hover" && !m().contains(mt(w)) && d.handleMouseMoveOutside(w);
  }
  function T(w) {
    (e.trigger === "click" && !m().contains(mt(w)) || e.onClickoutside) && d.handleClickOutside(w);
  }
  function m() {
    return d.getTriggerElement();
  }
  ye(St, u), ye(Yt, null), ye(Zt, null);
  function S() {
    if (g == null ? void 0 : g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && f.value)) return null;
    let M;
    const L = d.internalRenderBodyRef.value, { value: E } = n;
    if (L) M = L([`${E}-popover-shared`, (s == null ? void 0 : s.value) && `${E}-popover--rtl`, g == null ? void 0 : g.themeClass.value, e.overlap && `${E}-popover-shared--overlap`, e.showArrow && `${E}-popover-shared--show-arrow`, e.arrowPointToCenter && `${E}-popover-shared--center-arrow`], u, b.value, P, y);
    else {
      const { value: _ } = d.extraClassRef, { internalTrapFocus: D } = e, B = !Dr(o.header) || !Dr(o.footer), N = () => {
        var k, X;
        const ne = B ? C(Lo, null, Oe(o.header, (ae) => ae ? C("div", { class: [`${E}-popover__header`, e.headerClass], style: e.headerStyle }, ae) : null), Oe(o.default, (ae) => ae ? C("div", { class: [`${E}-popover__content`, e.contentClass], style: e.contentStyle }, o) : null), Oe(o.footer, (ae) => ae ? C("div", { class: [`${E}-popover__footer`, e.footerClass], style: e.footerStyle }, ae) : null)) : e.scrollable ? (k = o.default) === null || k === void 0 ? void 0 : k.call(o) : C("div", { class: [`${E}-popover__content`, e.contentClass], style: e.contentStyle }, o), le = e.scrollable ? C(ya, { themeOverrides: a.value.peerOverrides.Scrollbar, theme: a.value.peers.Scrollbar, contentClass: B ? void 0 : `${E}-popover__content ${(X = e.contentClass) !== null && X !== void 0 ? X : ""}`, contentStyle: B ? void 0 : e.contentStyle }, { default: () => ne }) : ne, fe = e.showArrow ? za({ arrowClass: e.arrowClass, arrowStyle: e.arrowStyle, arrowWrapperClass: e.arrowWrapperClass, arrowWrapperStyle: e.arrowWrapperStyle, clsPrefix: E }) : null;
        return [le, fe];
      };
      M = C("div", et({ class: [`${E}-popover`, `${E}-popover-shared`, (s == null ? void 0 : s.value) && `${E}-popover--rtl`, g == null ? void 0 : g.themeClass.value, _.map((k) => `${E}-${k}`), { [`${E}-popover--scrollable`]: e.scrollable, [`${E}-popover--show-header-or-footer`]: B, [`${E}-popover--raw`]: e.raw, [`${E}-popover-shared--overlap`]: e.overlap, [`${E}-popover-shared--show-arrow`]: e.showArrow, [`${E}-popover-shared--center-arrow`]: e.arrowPointToCenter }], ref: u, style: b.value, onKeydown: d.handleKeydown, onMouseenter: P, onMouseleave: y }, t), D ? C(fa, { active: e.show, autoFocus: true }, { default: N }) : N());
    }
    return Ho(M, p.value);
  }
  return { displayed: f, namespace: r, isMounted: d.isMountedRef, zIndex: d.zIndexRef, followerRef: c, adjustedTo: Zo(e), followerEnabled: h, renderContentNode: S };
}, render() {
  return C(oa, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === Zo.tdkey }, { default: () => this.animated ? C(Co, { name: "popover-transition", appear: this.isMounted, onEnter: () => {
    this.followerEnabled = true;
  }, onAfterLeave: () => {
    var e;
    (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = false, this.displayed = false;
  } }, { default: this.renderContentNode }) : this.renderContentNode() });
} }), ap = Object.keys(Pa), sp = { focus: ["onFocus", "onBlur"], click: ["onClick"], hover: ["onMouseenter", "onMouseleave"], manual: [], nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"] };
function cp(e, o, t) {
  sp[o].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const n = e.props[r], i = t[r];
    n ? e.props[r] = (...l) => {
      n(...l), i(...l);
    } : e.props[r] = i;
  });
}
const Jt = { show: { type: Boolean, default: void 0 }, defaultShow: Boolean, showArrow: { type: Boolean, default: true }, trigger: { type: String, default: "hover" }, delay: { type: Number, default: 100 }, duration: { type: Number, default: 100 }, raw: Boolean, placement: { type: String, default: "top" }, x: Number, y: Number, arrowPointToCenter: Boolean, disabled: Boolean, getDisabled: Function, displayDirective: { type: String, default: "if" }, arrowClass: String, arrowStyle: [String, Object], arrowWrapperClass: String, arrowWrapperStyle: [String, Object], flip: { type: Boolean, default: true }, animated: { type: Boolean, default: true }, width: { type: [Number, String], default: void 0 }, overlap: Boolean, keepAliveOnHover: { type: Boolean, default: true }, zIndex: Number, to: Zo.propTo, scrollable: Boolean, contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], footerClass: String, footerStyle: [Object, String], onClickoutside: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], internalDeactivateImmediately: Boolean, internalSyncTargetWithParent: Boolean, internalInheritedEventHandlers: { type: Array, default: () => [] }, internalTrapFocus: Boolean, internalExtraClass: { type: Array, default: () => [] }, onShow: [Function, Array], onHide: [Function, Array], arrow: { type: Boolean, default: void 0 }, minWidth: Number, maxWidth: Number }, dp = Object.assign(Object.assign(Object.assign({}, Ce.props), Jt), { internalOnAfterLeave: Function, internalRenderBody: Function }), Ta = te({ name: "Popover", inheritAttrs: false, props: dp, slots: Object, __popover__: true, setup(e) {
  const o = Xt(), t = V(null), r = I(() => e.show), n = V(e.defaultShow), i = Gl(r, n), l = Ve(() => e.disabled ? false : i.value), a = () => {
    if (e.disabled) return true;
    const { getDisabled: B } = e;
    return !!(B == null ? void 0 : B());
  }, s = () => a() ? false : i.value, c = Kl(e, ["arrow", "showArrow"]), d = I(() => e.overlap ? false : c.value);
  let u = null;
  const h = V(null), f = V(null), p = Ve(() => e.x !== void 0 && e.y !== void 0);
  function v(B) {
    const { "onUpdate:show": N, onUpdateShow: k, onShow: X, onHide: ne } = e;
    n.value = B, N && Le(N, B), k && Le(k, B), B && X && Le(X, true), B && ne && Le(ne, false);
  }
  function b() {
    u && u.syncPosition();
  }
  function g() {
    const { value: B } = h;
    B && (window.clearTimeout(B), h.value = null);
  }
  function x() {
    const { value: B } = f;
    B && (window.clearTimeout(B), f.value = null);
  }
  function P() {
    const B = a();
    if (e.trigger === "focus" && !B) {
      if (s()) return;
      v(true);
    }
  }
  function y() {
    const B = a();
    if (e.trigger === "focus" && !B) {
      if (!s()) return;
      v(false);
    }
  }
  function z() {
    const B = a();
    if (e.trigger === "hover" && !B) {
      if (x(), h.value !== null || s()) return;
      const N = () => {
        v(true), h.value = null;
      }, { delay: k } = e;
      k === 0 ? N() : h.value = window.setTimeout(N, k);
    }
  }
  function T() {
    const B = a();
    if (e.trigger === "hover" && !B) {
      if (g(), f.value !== null || !s()) return;
      const N = () => {
        v(false), f.value = null;
      }, { duration: k } = e;
      k === 0 ? N() : f.value = window.setTimeout(N, k);
    }
  }
  function m() {
    T();
  }
  function S(B) {
    var N;
    s() && (e.trigger === "click" && (g(), x(), v(false)), (N = e.onClickoutside) === null || N === void 0 || N.call(e, B));
  }
  function w() {
    if (e.trigger === "click" && !a()) {
      g(), x();
      const B = !s();
      v(B);
    }
  }
  function M(B) {
    e.internalTrapFocus && B.key === "Escape" && (g(), x(), v(false));
  }
  function L(B) {
    n.value = B;
  }
  function E() {
    var B;
    return (B = t.value) === null || B === void 0 ? void 0 : B.targetRef;
  }
  function _(B) {
    u = B;
  }
  return ye("NPopover", { getTriggerElement: E, handleKeydown: M, handleMouseEnter: z, handleMouseLeave: T, handleClickOutside: S, handleMouseMoveOutside: m, setBodyInstance: _, positionManuallyRef: p, isMountedRef: o, zIndexRef: ue(e, "zIndex"), extraClassRef: ue(e, "internalExtraClass"), internalRenderBodyRef: ue(e, "internalRenderBody") }), Jo(() => {
    i.value && a() && v(false);
  }), { binderInstRef: t, positionManually: p, mergedShowConsideringDisabledProp: l, uncontrolledShow: n, mergedShowArrow: d, getMergedShow: s, setShow: L, handleClick: w, handleMouseEnter: z, handleMouseLeave: T, handleFocus: P, handleBlur: y, syncPosition: b };
}, render() {
  var e;
  const { positionManually: o, $slots: t } = this;
  let r, n = false;
  if (!o && (r = ih(t, "trigger"), r)) {
    r = ol(r), r = r.type === Rs ? C("span", [r]) : r;
    const i = { onClick: this.handleClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur };
    if (!((e = r.type) === null || e === void 0) && e.__popover__) n = true, r.props || (r.props = { internalSyncTargetWithParent: true, internalInheritedEventHandlers: [] }), r.props.internalSyncTargetWithParent = true, r.props.internalInheritedEventHandlers ? r.props.internalInheritedEventHandlers = [i, ...r.props.internalInheritedEventHandlers] : r.props.internalInheritedEventHandlers = [i];
    else {
      const { internalInheritedEventHandlers: l } = this, a = [i, ...l], s = { onBlur: (c) => {
        a.forEach((d) => {
          d.onBlur(c);
        });
      }, onFocus: (c) => {
        a.forEach((d) => {
          d.onFocus(c);
        });
      }, onClick: (c) => {
        a.forEach((d) => {
          d.onClick(c);
        });
      }, onMouseenter: (c) => {
        a.forEach((d) => {
          d.onMouseenter(c);
        });
      }, onMouseleave: (c) => {
        a.forEach((d) => {
          d.onMouseleave(c);
        });
      } };
      cp(r, l ? "nested" : o ? "manual" : this.trigger, s);
    }
  }
  return C(Zl, { ref: "binderInstRef", syncTarget: !n, syncTargetWithParent: this.internalSyncTargetWithParent }, { default: () => {
    this.mergedShowConsideringDisabledProp;
    const i = this.getMergedShow();
    return [this.internalTrapFocus && i ? Ho(C("div", { style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 } }), [[dn, { enabled: i, zIndex: this.zIndex }]]) : null, o ? null : C(Ql, null, { default: () => r }), C(lp, bt(this.$props, ap, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: i })), { default: () => {
      var l, a;
      return (a = (l = this.$slots).default) === null || a === void 0 ? void 0 : a.call(l);
    }, header: () => {
      var l, a;
      return (a = (l = this.$slots).header) === null || a === void 0 ? void 0 : a.call(l);
    }, footer: () => {
      var l, a;
      return (a = (l = this.$slots).footer) === null || a === void 0 ? void 0 : a.call(l);
    } })];
  } });
} }), up = { closeIconSizeTiny: "12px", closeIconSizeSmall: "12px", closeIconSizeMedium: "14px", closeIconSizeLarge: "14px", closeSizeTiny: "16px", closeSizeSmall: "16px", closeSizeMedium: "18px", closeSizeLarge: "18px", padding: "0 7px", closeMargin: "0 0 0 4px" };
function fp(e) {
  const { textColor2: o, primaryColorHover: t, primaryColorPressed: r, primaryColor: n, infoColor: i, successColor: l, warningColor: a, errorColor: s, baseColor: c, borderColor: d, opacityDisabled: u, tagColor: h, closeIconColor: f, closeIconColorHover: p, closeIconColorPressed: v, borderRadiusSmall: b, fontSizeMini: g, fontSizeTiny: x, fontSizeSmall: P, fontSizeMedium: y, heightMini: z, heightTiny: T, heightSmall: m, heightMedium: S, closeColorHover: w, closeColorPressed: M, buttonColor2Hover: L, buttonColor2Pressed: E, fontWeightStrong: _ } = e;
  return Object.assign(Object.assign({}, up), { closeBorderRadius: b, heightTiny: z, heightSmall: T, heightMedium: m, heightLarge: S, borderRadius: b, opacityDisabled: u, fontSizeTiny: g, fontSizeSmall: x, fontSizeMedium: P, fontSizeLarge: y, fontWeightStrong: _, textColorCheckable: o, textColorHoverCheckable: o, textColorPressedCheckable: o, textColorChecked: c, colorCheckable: "#0000", colorHoverCheckable: L, colorPressedCheckable: E, colorChecked: n, colorCheckedHover: t, colorCheckedPressed: r, border: `1px solid ${d}`, textColor: o, color: h, colorBordered: "rgb(250, 250, 252)", closeIconColor: f, closeIconColorHover: p, closeIconColorPressed: v, closeColorHover: w, closeColorPressed: M, borderPrimary: `1px solid ${G(n, { alpha: 0.3 })}`, textColorPrimary: n, colorPrimary: G(n, { alpha: 0.12 }), colorBorderedPrimary: G(n, { alpha: 0.1 }), closeIconColorPrimary: n, closeIconColorHoverPrimary: n, closeIconColorPressedPrimary: n, closeColorHoverPrimary: G(n, { alpha: 0.12 }), closeColorPressedPrimary: G(n, { alpha: 0.18 }), borderInfo: `1px solid ${G(i, { alpha: 0.3 })}`, textColorInfo: i, colorInfo: G(i, { alpha: 0.12 }), colorBorderedInfo: G(i, { alpha: 0.1 }), closeIconColorInfo: i, closeIconColorHoverInfo: i, closeIconColorPressedInfo: i, closeColorHoverInfo: G(i, { alpha: 0.12 }), closeColorPressedInfo: G(i, { alpha: 0.18 }), borderSuccess: `1px solid ${G(l, { alpha: 0.3 })}`, textColorSuccess: l, colorSuccess: G(l, { alpha: 0.12 }), colorBorderedSuccess: G(l, { alpha: 0.1 }), closeIconColorSuccess: l, closeIconColorHoverSuccess: l, closeIconColorPressedSuccess: l, closeColorHoverSuccess: G(l, { alpha: 0.12 }), closeColorPressedSuccess: G(l, { alpha: 0.18 }), borderWarning: `1px solid ${G(a, { alpha: 0.35 })}`, textColorWarning: a, colorWarning: G(a, { alpha: 0.15 }), colorBorderedWarning: G(a, { alpha: 0.12 }), closeIconColorWarning: a, closeIconColorHoverWarning: a, closeIconColorPressedWarning: a, closeColorHoverWarning: G(a, { alpha: 0.12 }), closeColorPressedWarning: G(a, { alpha: 0.18 }), borderError: `1px solid ${G(s, { alpha: 0.23 })}`, textColorError: s, colorError: G(s, { alpha: 0.1 }), colorBorderedError: G(s, { alpha: 0.08 }), closeIconColorError: s, closeIconColorHoverError: s, closeIconColorPressedError: s, closeColorHoverError: G(s, { alpha: 0.12 }), closeColorPressedError: G(s, { alpha: 0.18 }) });
}
const Ea = { name: "Tag", common: F, self: fp }, hp = { paddingSingle: "0 26px 0 12px", paddingMultiple: "3px 26px 0 12px", clearSize: "16px", arrowSize: "16px" };
function pp(e) {
  const { borderRadius: o, textColor2: t, textColorDisabled: r, inputColor: n, inputColorDisabled: i, primaryColor: l, primaryColorHover: a, warningColor: s, warningColorHover: c, errorColor: d, errorColorHover: u, borderColor: h, iconColor: f, iconColorDisabled: p, clearColor: v, clearColorHover: b, clearColorPressed: g, placeholderColor: x, placeholderColorDisabled: P, fontSizeTiny: y, fontSizeSmall: z, fontSizeMedium: T, fontSizeLarge: m, heightTiny: S, heightSmall: w, heightMedium: M, heightLarge: L, fontWeight: E } = e;
  return Object.assign(Object.assign({}, hp), { fontSizeTiny: y, fontSizeSmall: z, fontSizeMedium: T, fontSizeLarge: m, heightTiny: S, heightSmall: w, heightMedium: M, heightLarge: L, borderRadius: o, fontWeight: E, textColor: t, textColorDisabled: r, placeholderColor: x, placeholderColorDisabled: P, color: n, colorDisabled: i, colorActive: n, border: `1px solid ${h}`, borderHover: `1px solid ${a}`, borderActive: `1px solid ${l}`, borderFocus: `1px solid ${a}`, boxShadowHover: "none", boxShadowActive: `0 0 0 2px ${G(l, { alpha: 0.2 })}`, boxShadowFocus: `0 0 0 2px ${G(l, { alpha: 0.2 })}`, caretColor: l, arrowColor: f, arrowColorDisabled: p, loadingColor: l, borderWarning: `1px solid ${s}`, borderHoverWarning: `1px solid ${c}`, borderActiveWarning: `1px solid ${s}`, borderFocusWarning: `1px solid ${c}`, boxShadowHoverWarning: "none", boxShadowActiveWarning: `0 0 0 2px ${G(s, { alpha: 0.2 })}`, boxShadowFocusWarning: `0 0 0 2px ${G(s, { alpha: 0.2 })}`, colorActiveWarning: n, caretColorWarning: s, borderError: `1px solid ${d}`, borderHoverError: `1px solid ${u}`, borderActiveError: `1px solid ${d}`, borderFocusError: `1px solid ${u}`, boxShadowHoverError: "none", boxShadowActiveError: `0 0 0 2px ${G(d, { alpha: 0.2 })}`, boxShadowFocusError: `0 0 0 2px ${G(d, { alpha: 0.2 })}`, colorActiveError: n, caretColorError: d, clearColor: v, clearColorHover: b, clearColorPressed: g });
}
const pn = { name: "InternalSelection", common: F, peers: { Popover: $o }, self: pp }, { cubicBezierEaseInOut: go } = Ao;
function gp({ duration: e = ".2s", delay: o = ".1s" } = {}) {
  return [H("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", { opacity: 1 }), H("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), H("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${go},
 max-width ${e} ${go} ${o},
 margin-left ${e} ${go} ${o},
 margin-right ${e} ${go} ${o};
 `), H("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${go} ${o},
 max-width ${e} ${go},
 margin-left ${e} ${go},
 margin-right ${e} ${go};
 `)];
}
const mp = Q("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), vp = te({ name: "BaseWave", props: { clsPrefix: { type: String, required: true } }, setup(e) {
  Qt("-base-wave", mp, ue(e, "clsPrefix"));
  const o = V(null), t = V(false);
  let r = null;
  return ke(() => {
    r !== null && window.clearTimeout(r);
  }), { active: t, selfRef: o, play() {
    r !== null && (window.clearTimeout(r), t.value = false, r = null), Io(() => {
      var n;
      (n = o.value) === null || n === void 0 || n.offsetHeight, t.value = true, r = window.setTimeout(() => {
        t.value = false, r = null;
      }, 1e3);
    });
  } };
}, render() {
  const { clsPrefix: e } = this;
  return C("div", { ref: "selfRef", "aria-hidden": true, class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`] });
} }), bp = { iconMargin: "11px 8px 0 12px", iconMarginRtl: "11px 12px 0 8px", iconSize: "24px", closeIconSize: "16px", closeSize: "20px", closeMargin: "13px 14px 0 0", closeMarginRtl: "13px 0 0 14px", padding: "13px" };
function xp(e) {
  const { lineHeight: o, borderRadius: t, fontWeightStrong: r, baseColor: n, dividerColor: i, actionColor: l, textColor1: a, textColor2: s, closeColorHover: c, closeColorPressed: d, closeIconColor: u, closeIconColorHover: h, closeIconColorPressed: f, infoColor: p, successColor: v, warningColor: b, errorColor: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, bp), { fontSize: x, lineHeight: o, titleFontWeight: r, borderRadius: t, border: `1px solid ${i}`, color: l, titleTextColor: a, iconColor: s, contentTextColor: s, closeBorderRadius: t, closeColorHover: c, closeColorPressed: d, closeIconColor: u, closeIconColorHover: h, closeIconColorPressed: f, borderInfo: `1px solid ${A(n, G(p, { alpha: 0.25 }))}`, colorInfo: A(n, G(p, { alpha: 0.08 })), titleTextColorInfo: a, iconColorInfo: p, contentTextColorInfo: s, closeColorHoverInfo: c, closeColorPressedInfo: d, closeIconColorInfo: u, closeIconColorHoverInfo: h, closeIconColorPressedInfo: f, borderSuccess: `1px solid ${A(n, G(v, { alpha: 0.25 }))}`, colorSuccess: A(n, G(v, { alpha: 0.08 })), titleTextColorSuccess: a, iconColorSuccess: v, contentTextColorSuccess: s, closeColorHoverSuccess: c, closeColorPressedSuccess: d, closeIconColorSuccess: u, closeIconColorHoverSuccess: h, closeIconColorPressedSuccess: f, borderWarning: `1px solid ${A(n, G(b, { alpha: 0.33 }))}`, colorWarning: A(n, G(b, { alpha: 0.08 })), titleTextColorWarning: a, iconColorWarning: b, contentTextColorWarning: s, closeColorHoverWarning: c, closeColorPressedWarning: d, closeIconColorWarning: u, closeIconColorHoverWarning: h, closeIconColorPressedWarning: f, borderError: `1px solid ${A(n, G(g, { alpha: 0.25 }))}`, colorError: A(n, G(g, { alpha: 0.08 })), titleTextColorError: a, iconColorError: g, contentTextColorError: s, closeColorHoverError: c, closeColorPressedError: d, closeIconColorError: u, closeIconColorHoverError: h, closeIconColorPressedError: f });
}
const Cp = { name: "Alert", common: F, self: xp }, { cubicBezierEaseInOut: Ye, cubicBezierEaseOut: yp, cubicBezierEaseIn: Sp } = Ao;
function v0({ overflow: e = "hidden", duration: o = ".3s", originalTransition: t = "", leavingDelay: r = "0s", foldPadding: n = false, enterToProps: i = void 0, leaveToProps: l = void 0, reverse: a = false } = {}) {
  const s = a ? "leave" : "enter", c = a ? "enter" : "leave";
  return [H(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${s}-to`, Object.assign(Object.assign({}, i), { opacity: 1 })), H(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${s}-from`, Object.assign(Object.assign({}, l), { opacity: 0, marginTop: "0 !important", marginBottom: "0 !important", paddingTop: n ? "0 !important" : void 0, paddingBottom: n ? "0 !important" : void 0 })), H(`&.fade-in-height-expand-transition-${c}-active`, `
 overflow: ${e};
 transition:
 max-height ${o} ${Ye} ${r},
 opacity ${o} ${yp} ${r},
 margin-top ${o} ${Ye} ${r},
 margin-bottom ${o} ${Ye} ${r},
 padding-top ${o} ${Ye} ${r},
 padding-bottom ${o} ${Ye} ${r}
 ${t ? `,${t}` : ""}
 `), H(`&.fade-in-height-expand-transition-${s}-active`, `
 overflow: ${e};
 transition:
 max-height ${o} ${Ye},
 opacity ${o} ${Sp},
 margin-top ${o} ${Ye},
 margin-bottom ${o} ${Ye},
 padding-top ${o} ${Ye},
 padding-bottom ${o} ${Ye}
 ${t ? `,${t}` : ""}
 `)];
}
const wp = { linkFontSize: "13px", linkPadding: "0 0 0 16px", railWidth: "4px" };
function $p(e) {
  const { borderRadius: o, railColor: t, primaryColor: r, primaryColorHover: n, primaryColorPressed: i, textColor2: l } = e;
  return Object.assign(Object.assign({}, wp), { borderRadius: o, railColor: t, railColorActive: r, linkColor: G(r, { alpha: 0.15 }), linkTextColor: l, linkTextColorHover: n, linkTextColorPressed: i, linkTextColorActive: r });
}
const Pp = { name: "Anchor", common: F, self: $p }, zp = wt && "chrome" in window;
wt && navigator.userAgent.includes("Firefox");
const Tp = wt && navigator.userAgent.includes("Safari") && !zp, Ep = { paddingTiny: "0 8px", paddingSmall: "0 10px", paddingMedium: "0 12px", paddingLarge: "0 14px", clearSize: "16px" };
function Bp(e) {
  const { textColor2: o, textColor3: t, textColorDisabled: r, primaryColor: n, primaryColorHover: i, inputColor: l, inputColorDisabled: a, borderColor: s, warningColor: c, warningColorHover: d, errorColor: u, errorColorHover: h, borderRadius: f, lineHeight: p, fontSizeTiny: v, fontSizeSmall: b, fontSizeMedium: g, fontSizeLarge: x, heightTiny: P, heightSmall: y, heightMedium: z, heightLarge: T, actionColor: m, clearColor: S, clearColorHover: w, clearColorPressed: M, placeholderColor: L, placeholderColorDisabled: E, iconColor: _, iconColorDisabled: D, iconColorHover: B, iconColorPressed: N, fontWeight: k } = e;
  return Object.assign(Object.assign({}, Ep), { fontWeight: k, countTextColorDisabled: r, countTextColor: t, heightTiny: P, heightSmall: y, heightMedium: z, heightLarge: T, fontSizeTiny: v, fontSizeSmall: b, fontSizeMedium: g, fontSizeLarge: x, lineHeight: p, lineHeightTextarea: p, borderRadius: f, iconSize: "16px", groupLabelColor: m, groupLabelTextColor: o, textColor: o, textColorDisabled: r, textDecorationColor: o, caretColor: n, placeholderColor: L, placeholderColorDisabled: E, color: l, colorDisabled: a, colorFocus: l, groupLabelBorder: `1px solid ${s}`, border: `1px solid ${s}`, borderHover: `1px solid ${i}`, borderDisabled: `1px solid ${s}`, borderFocus: `1px solid ${i}`, boxShadowFocus: `0 0 0 2px ${G(n, { alpha: 0.2 })}`, loadingColor: n, loadingColorWarning: c, borderWarning: `1px solid ${c}`, borderHoverWarning: `1px solid ${d}`, colorFocusWarning: l, borderFocusWarning: `1px solid ${d}`, boxShadowFocusWarning: `0 0 0 2px ${G(c, { alpha: 0.2 })}`, caretColorWarning: c, loadingColorError: u, borderError: `1px solid ${u}`, borderHoverError: `1px solid ${h}`, colorFocusError: l, borderFocusError: `1px solid ${h}`, boxShadowFocusError: `0 0 0 2px ${G(u, { alpha: 0.2 })}`, caretColorError: u, clearColor: S, clearColorHover: w, clearColorPressed: M, iconColor: _, iconColorDisabled: D, iconColorHover: B, iconColorPressed: N, suffixTextColor: o });
}
const We = { name: "Input", common: F, peers: { Scrollbar: Ee }, self: Bp };
function Mp(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
}
const Rp = { name: "AutoComplete", common: F, peers: { InternalSelectMenu: zt, Input: We }, self: Mp };
function kp(e) {
  const { borderRadius: o, avatarColor: t, cardColor: r, fontSize: n, heightTiny: i, heightSmall: l, heightMedium: a, heightLarge: s, heightHuge: c, modalColor: d, popoverColor: u } = e;
  return { borderRadius: o, fontSize: n, border: `2px solid ${r}`, heightTiny: i, heightSmall: l, heightMedium: a, heightLarge: s, heightHuge: c, color: A(r, t), colorModal: A(d, t), colorPopover: A(u, t) };
}
const Ba = { name: "Avatar", common: F, self: kp };
function Ip() {
  return { gap: "-12px" };
}
const Hp = { name: "AvatarGroup", common: F, peers: { Avatar: Ba }, self: Ip }, Fp = { width: "44px", height: "44px", borderRadius: "22px", iconSize: "26px" };
function Op(e) {
  const { popoverColor: o, textColor2: t, primaryColorHover: r, primaryColorPressed: n } = e;
  return Object.assign(Object.assign({}, Fp), { color: o, textColor: t, iconColor: t, iconColorHover: r, iconColorPressed: n, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)" });
}
const Lp = { name: "BackTop", common: F, self: Op };
function Ap(e) {
  const { errorColor: o, infoColor: t, successColor: r, warningColor: n, fontFamily: i } = e;
  return { color: o, colorInfo: t, colorSuccess: r, colorError: o, colorWarning: n, fontSize: "12px", fontFamily: i };
}
const Dp = { name: "Badge", common: F, self: Ap }, Wp = { fontWeightActive: "400" };
function _p(e) {
  const { fontSize: o, textColor3: t, textColor2: r, borderRadius: n, buttonColor2Hover: i, buttonColor2Pressed: l } = e;
  return Object.assign(Object.assign({}, Wp), { fontSize: o, itemLineHeight: "1.25", itemTextColor: t, itemTextColorHover: r, itemTextColorPressed: r, itemTextColorActive: r, itemBorderRadius: n, itemColorHover: i, itemColorPressed: l, separatorColor: t });
}
const Np = { name: "Breadcrumb", common: F, self: _p };
function To(e) {
  return A(e, [255, 255, 255, 0.16]);
}
function Lt(e) {
  return A(e, [0, 0, 0, 0.12]);
}
const jp = "n-button-group", Vp = { paddingTiny: "0 6px", paddingSmall: "0 10px", paddingMedium: "0 14px", paddingLarge: "0 18px", paddingRoundTiny: "0 10px", paddingRoundSmall: "0 14px", paddingRoundMedium: "0 18px", paddingRoundLarge: "0 22px", iconMarginTiny: "6px", iconMarginSmall: "6px", iconMarginMedium: "6px", iconMarginLarge: "6px", iconSizeTiny: "14px", iconSizeSmall: "18px", iconSizeMedium: "18px", iconSizeLarge: "20px", rippleDuration: ".6s" };
function Gp(e) {
  const { heightTiny: o, heightSmall: t, heightMedium: r, heightLarge: n, borderRadius: i, fontSizeTiny: l, fontSizeSmall: a, fontSizeMedium: s, fontSizeLarge: c, opacityDisabled: d, textColor2: u, textColor3: h, primaryColorHover: f, primaryColorPressed: p, borderColor: v, primaryColor: b, baseColor: g, infoColor: x, infoColorHover: P, infoColorPressed: y, successColor: z, successColorHover: T, successColorPressed: m, warningColor: S, warningColorHover: w, warningColorPressed: M, errorColor: L, errorColorHover: E, errorColorPressed: _, fontWeight: D, buttonColor2: B, buttonColor2Hover: N, buttonColor2Pressed: k, fontWeightStrong: X } = e;
  return Object.assign(Object.assign({}, Vp), { heightTiny: o, heightSmall: t, heightMedium: r, heightLarge: n, borderRadiusTiny: i, borderRadiusSmall: i, borderRadiusMedium: i, borderRadiusLarge: i, fontSizeTiny: l, fontSizeSmall: a, fontSizeMedium: s, fontSizeLarge: c, opacityDisabled: d, colorOpacitySecondary: "0.16", colorOpacitySecondaryHover: "0.22", colorOpacitySecondaryPressed: "0.28", colorSecondary: B, colorSecondaryHover: N, colorSecondaryPressed: k, colorTertiary: B, colorTertiaryHover: N, colorTertiaryPressed: k, colorQuaternary: "#0000", colorQuaternaryHover: N, colorQuaternaryPressed: k, color: "#0000", colorHover: "#0000", colorPressed: "#0000", colorFocus: "#0000", colorDisabled: "#0000", textColor: u, textColorTertiary: h, textColorHover: f, textColorPressed: p, textColorFocus: f, textColorDisabled: u, textColorText: u, textColorTextHover: f, textColorTextPressed: p, textColorTextFocus: f, textColorTextDisabled: u, textColorGhost: u, textColorGhostHover: f, textColorGhostPressed: p, textColorGhostFocus: f, textColorGhostDisabled: u, border: `1px solid ${v}`, borderHover: `1px solid ${f}`, borderPressed: `1px solid ${p}`, borderFocus: `1px solid ${f}`, borderDisabled: `1px solid ${v}`, rippleColor: b, colorPrimary: b, colorHoverPrimary: f, colorPressedPrimary: p, colorFocusPrimary: f, colorDisabledPrimary: b, textColorPrimary: g, textColorHoverPrimary: g, textColorPressedPrimary: g, textColorFocusPrimary: g, textColorDisabledPrimary: g, textColorTextPrimary: b, textColorTextHoverPrimary: f, textColorTextPressedPrimary: p, textColorTextFocusPrimary: f, textColorTextDisabledPrimary: u, textColorGhostPrimary: b, textColorGhostHoverPrimary: f, textColorGhostPressedPrimary: p, textColorGhostFocusPrimary: f, textColorGhostDisabledPrimary: b, borderPrimary: `1px solid ${b}`, borderHoverPrimary: `1px solid ${f}`, borderPressedPrimary: `1px solid ${p}`, borderFocusPrimary: `1px solid ${f}`, borderDisabledPrimary: `1px solid ${b}`, rippleColorPrimary: b, colorInfo: x, colorHoverInfo: P, colorPressedInfo: y, colorFocusInfo: P, colorDisabledInfo: x, textColorInfo: g, textColorHoverInfo: g, textColorPressedInfo: g, textColorFocusInfo: g, textColorDisabledInfo: g, textColorTextInfo: x, textColorTextHoverInfo: P, textColorTextPressedInfo: y, textColorTextFocusInfo: P, textColorTextDisabledInfo: u, textColorGhostInfo: x, textColorGhostHoverInfo: P, textColorGhostPressedInfo: y, textColorGhostFocusInfo: P, textColorGhostDisabledInfo: x, borderInfo: `1px solid ${x}`, borderHoverInfo: `1px solid ${P}`, borderPressedInfo: `1px solid ${y}`, borderFocusInfo: `1px solid ${P}`, borderDisabledInfo: `1px solid ${x}`, rippleColorInfo: x, colorSuccess: z, colorHoverSuccess: T, colorPressedSuccess: m, colorFocusSuccess: T, colorDisabledSuccess: z, textColorSuccess: g, textColorHoverSuccess: g, textColorPressedSuccess: g, textColorFocusSuccess: g, textColorDisabledSuccess: g, textColorTextSuccess: z, textColorTextHoverSuccess: T, textColorTextPressedSuccess: m, textColorTextFocusSuccess: T, textColorTextDisabledSuccess: u, textColorGhostSuccess: z, textColorGhostHoverSuccess: T, textColorGhostPressedSuccess: m, textColorGhostFocusSuccess: T, textColorGhostDisabledSuccess: z, borderSuccess: `1px solid ${z}`, borderHoverSuccess: `1px solid ${T}`, borderPressedSuccess: `1px solid ${m}`, borderFocusSuccess: `1px solid ${T}`, borderDisabledSuccess: `1px solid ${z}`, rippleColorSuccess: z, colorWarning: S, colorHoverWarning: w, colorPressedWarning: M, colorFocusWarning: w, colorDisabledWarning: S, textColorWarning: g, textColorHoverWarning: g, textColorPressedWarning: g, textColorFocusWarning: g, textColorDisabledWarning: g, textColorTextWarning: S, textColorTextHoverWarning: w, textColorTextPressedWarning: M, textColorTextFocusWarning: w, textColorTextDisabledWarning: u, textColorGhostWarning: S, textColorGhostHoverWarning: w, textColorGhostPressedWarning: M, textColorGhostFocusWarning: w, textColorGhostDisabledWarning: S, borderWarning: `1px solid ${S}`, borderHoverWarning: `1px solid ${w}`, borderPressedWarning: `1px solid ${M}`, borderFocusWarning: `1px solid ${w}`, borderDisabledWarning: `1px solid ${S}`, rippleColorWarning: S, colorError: L, colorHoverError: E, colorPressedError: _, colorFocusError: E, colorDisabledError: L, textColorError: g, textColorHoverError: g, textColorPressedError: g, textColorFocusError: g, textColorDisabledError: g, textColorTextError: L, textColorTextHoverError: E, textColorTextPressedError: _, textColorTextFocusError: E, textColorTextDisabledError: u, textColorGhostError: L, textColorGhostHoverError: E, textColorGhostPressedError: _, textColorGhostFocusError: E, textColorGhostDisabledError: L, borderError: `1px solid ${L}`, borderHoverError: `1px solid ${E}`, borderPressedError: `1px solid ${_}`, borderFocusError: `1px solid ${E}`, borderDisabledError: `1px solid ${L}`, rippleColorError: L, waveOpacity: "0.6", fontWeight: D, fontWeightStrong: X });
}
const Ie = { name: "Button", common: F, self: Gp }, Kp = H([Q("button", `
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
 `, [U("color", [j("border", { borderColor: "var(--n-border-color)" }), U("disabled", [j("border", { borderColor: "var(--n-border-color-disabled)" })]), vo("disabled", [H("&:focus", [j("state-border", { borderColor: "var(--n-border-color-focus)" })]), H("&:hover", [j("state-border", { borderColor: "var(--n-border-color-hover)" })]), H("&:active", [j("state-border", { borderColor: "var(--n-border-color-pressed)" })]), U("pressed", [j("state-border", { borderColor: "var(--n-border-color-pressed)" })])])]), U("disabled", { backgroundColor: "var(--n-color-disabled)", color: "var(--n-text-color-disabled)" }, [j("border", { border: "var(--n-border-disabled)" })]), vo("disabled", [H("&:focus", { backgroundColor: "var(--n-color-focus)", color: "var(--n-text-color-focus)" }, [j("state-border", { border: "var(--n-border-focus)" })]), H("&:hover", { backgroundColor: "var(--n-color-hover)", color: "var(--n-text-color-hover)" }, [j("state-border", { border: "var(--n-border-hover)" })]), H("&:active", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [j("state-border", { border: "var(--n-border-pressed)" })]), U("pressed", { backgroundColor: "var(--n-color-pressed)", color: "var(--n-text-color-pressed)" }, [j("state-border", { border: "var(--n-border-pressed)" })])]), U("loading", "cursor: wait;"), Q("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [U("active", { zIndex: 1, animationName: "button-wave-spread, button-wave-opacity" })]), wt && "MozBoxSizing" in document.createElement("div").style ? H("&::moz-focus-inner", { border: 0 }) : null, j("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), j("border", { border: "var(--n-border)" }), j("state-border", { border: "var(--n-border)", borderColor: "#0000", zIndex: 1 }), j("icon", `
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
 `, [Wr({ top: "50%", originalTransform: "translateY(-50%)" })]), gp()]), j("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [H("~", [j("icon", { margin: "var(--n-icon-margin)", marginRight: 0 })])]), U("block", `
 display: flex;
 width: 100%;
 `), U("dashed", [j("border, state-border", { borderStyle: "dashed !important" })]), U("disabled", { cursor: "not-allowed", opacity: "var(--n-opacity-disabled)" })]), H("@keyframes button-wave-spread", { from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" }, to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" } }), H("@keyframes button-wave-opacity", { from: { opacity: "var(--n-wave-opacity)" }, to: { opacity: 0 } })]), qp = Object.assign(Object.assign({}, Ce.props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, tag: { type: String, default: "button" }, type: { type: String, default: "default" }, dashed: Boolean, renderIcon: Function, iconPlacement: { type: String, default: "left" }, attrType: { type: String, default: "button" }, bordered: { type: Boolean, default: true }, onClick: [Function, Array], nativeFocusBehavior: { type: Boolean, default: !Tp } }), Nr = te({ name: "Button", props: qp, slots: Object, setup(e) {
  const o = V(null), t = V(null), r = V(false), n = Ve(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), i = ie(jp, {}), { mergedSizeRef: l } = ah({}, { defaultSize: "medium", mergedSize: (y) => {
    const { size: z } = e;
    if (z) return z;
    const { size: T } = i;
    if (T) return T;
    const { mergedSize: m } = y || {};
    return m ? m.value : "medium";
  } }), a = I(() => e.focusable && !e.disabled), s = (y) => {
    var z;
    a.value || y.preventDefault(), !e.nativeFocusBehavior && (y.preventDefault(), !e.disabled && a.value && ((z = o.value) === null || z === void 0 || z.focus({ preventScroll: true })));
  }, c = (y) => {
    var z;
    if (!e.disabled && !e.loading) {
      const { onClick: T } = e;
      T && Le(T, y), e.text || (z = t.value) === null || z === void 0 || z.play();
    }
  }, d = (y) => {
    switch (y.key) {
      case "Enter":
        if (!e.keyboard) return;
        r.value = false;
    }
  }, u = (y) => {
    switch (y.key) {
      case "Enter":
        if (!e.keyboard || e.loading) {
          y.preventDefault();
          return;
        }
        r.value = true;
    }
  }, h = () => {
    r.value = false;
  }, { inlineThemeDisabled: f, mergedClsPrefixRef: p, mergedRtlRef: v } = to(e), b = Ce("Button", "-button", Kp, Ie, e, p), g = $t("Button", v, p), x = I(() => {
    const y = b.value, { common: { cubicBezierEaseInOut: z, cubicBezierEaseOut: T }, self: m } = y, { rippleDuration: S, opacityDisabled: w, fontWeight: M, fontWeightStrong: L } = m, E = l.value, { dashed: _, type: D, ghost: B, text: N, color: k, round: X, circle: ne, textColor: le, secondary: fe, tertiary: ae, quaternary: Be, strong: Re } = e, uo = { "--n-font-weight": Re ? L : M };
    let re = { "--n-color": "initial", "--n-color-hover": "initial", "--n-color-pressed": "initial", "--n-color-focus": "initial", "--n-color-disabled": "initial", "--n-ripple-color": "initial", "--n-text-color": "initial", "--n-text-color-hover": "initial", "--n-text-color-pressed": "initial", "--n-text-color-focus": "initial", "--n-text-color-disabled": "initial" };
    const $ = D === "tertiary", W = D === "default", R = $ ? "default" : D;
    if (N) {
      const ve = le || k;
      re = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": "#0000", "--n-text-color": ve || m[Z("textColorText", R)], "--n-text-color-hover": ve ? To(ve) : m[Z("textColorTextHover", R)], "--n-text-color-pressed": ve ? Lt(ve) : m[Z("textColorTextPressed", R)], "--n-text-color-focus": ve ? To(ve) : m[Z("textColorTextHover", R)], "--n-text-color-disabled": ve || m[Z("textColorTextDisabled", R)] };
    } else if (B || _) {
      const ve = le || k;
      re = { "--n-color": "#0000", "--n-color-hover": "#0000", "--n-color-pressed": "#0000", "--n-color-focus": "#0000", "--n-color-disabled": "#0000", "--n-ripple-color": k || m[Z("rippleColor", R)], "--n-text-color": ve || m[Z("textColorGhost", R)], "--n-text-color-hover": ve ? To(ve) : m[Z("textColorGhostHover", R)], "--n-text-color-pressed": ve ? Lt(ve) : m[Z("textColorGhostPressed", R)], "--n-text-color-focus": ve ? To(ve) : m[Z("textColorGhostHover", R)], "--n-text-color-disabled": ve || m[Z("textColorGhostDisabled", R)] };
    } else if (fe) {
      const ve = W ? m.textColor : $ ? m.textColorTertiary : m[Z("color", R)], Te = k || ve, Po = D !== "default" && D !== "tertiary";
      re = { "--n-color": Po ? G(Te, { alpha: Number(m.colorOpacitySecondary) }) : m.colorSecondary, "--n-color-hover": Po ? G(Te, { alpha: Number(m.colorOpacitySecondaryHover) }) : m.colorSecondaryHover, "--n-color-pressed": Po ? G(Te, { alpha: Number(m.colorOpacitySecondaryPressed) }) : m.colorSecondaryPressed, "--n-color-focus": Po ? G(Te, { alpha: Number(m.colorOpacitySecondaryHover) }) : m.colorSecondaryHover, "--n-color-disabled": m.colorSecondary, "--n-ripple-color": "#0000", "--n-text-color": Te, "--n-text-color-hover": Te, "--n-text-color-pressed": Te, "--n-text-color-focus": Te, "--n-text-color-disabled": Te };
    } else if (ae || Be) {
      const ve = W ? m.textColor : $ ? m.textColorTertiary : m[Z("color", R)], Te = k || ve;
      ae ? (re["--n-color"] = m.colorTertiary, re["--n-color-hover"] = m.colorTertiaryHover, re["--n-color-pressed"] = m.colorTertiaryPressed, re["--n-color-focus"] = m.colorSecondaryHover, re["--n-color-disabled"] = m.colorTertiary) : (re["--n-color"] = m.colorQuaternary, re["--n-color-hover"] = m.colorQuaternaryHover, re["--n-color-pressed"] = m.colorQuaternaryPressed, re["--n-color-focus"] = m.colorQuaternaryHover, re["--n-color-disabled"] = m.colorQuaternary), re["--n-ripple-color"] = "#0000", re["--n-text-color"] = Te, re["--n-text-color-hover"] = Te, re["--n-text-color-pressed"] = Te, re["--n-text-color-focus"] = Te, re["--n-text-color-disabled"] = Te;
    } else re = { "--n-color": k || m[Z("color", R)], "--n-color-hover": k ? To(k) : m[Z("colorHover", R)], "--n-color-pressed": k ? Lt(k) : m[Z("colorPressed", R)], "--n-color-focus": k ? To(k) : m[Z("colorFocus", R)], "--n-color-disabled": k || m[Z("colorDisabled", R)], "--n-ripple-color": k || m[Z("rippleColor", R)], "--n-text-color": le || (k ? m.textColorPrimary : $ ? m.textColorTertiary : m[Z("textColor", R)]), "--n-text-color-hover": le || (k ? m.textColorHoverPrimary : m[Z("textColorHover", R)]), "--n-text-color-pressed": le || (k ? m.textColorPressedPrimary : m[Z("textColorPressed", R)]), "--n-text-color-focus": le || (k ? m.textColorFocusPrimary : m[Z("textColorFocus", R)]), "--n-text-color-disabled": le || (k ? m.textColorDisabledPrimary : m[Z("textColorDisabled", R)]) };
    let K = { "--n-border": "initial", "--n-border-hover": "initial", "--n-border-pressed": "initial", "--n-border-focus": "initial", "--n-border-disabled": "initial" };
    N ? K = { "--n-border": "none", "--n-border-hover": "none", "--n-border-pressed": "none", "--n-border-focus": "none", "--n-border-disabled": "none" } : K = { "--n-border": m[Z("border", R)], "--n-border-hover": m[Z("borderHover", R)], "--n-border-pressed": m[Z("borderPressed", R)], "--n-border-focus": m[Z("borderFocus", R)], "--n-border-disabled": m[Z("borderDisabled", R)] };
    const { [Z("height", E)]: se, [Z("fontSize", E)]: ge, [Z("padding", E)]: ee, [Z("paddingRound", E)]: oe, [Z("iconSize", E)]: me, [Z("borderRadius", E)]: Ge, [Z("iconMargin", E)]: ze, waveOpacity: tr } = m, rr = { "--n-width": ne && !N ? se : "initial", "--n-height": N ? "initial" : se, "--n-font-size": ge, "--n-padding": ne || N ? "initial" : X ? oe : ee, "--n-icon-size": me, "--n-icon-margin": ze, "--n-border-radius": N ? "initial" : ne || X ? se : Ge };
    return Object.assign(Object.assign(Object.assign(Object.assign({ "--n-bezier": z, "--n-bezier-ease-out": T, "--n-ripple-duration": S, "--n-opacity-disabled": w, "--n-wave-opacity": tr }, uo), re), K), rr);
  }), P = f ? co("button", I(() => {
    let y = "";
    const { dashed: z, type: T, ghost: m, text: S, color: w, round: M, circle: L, textColor: E, secondary: _, tertiary: D, quaternary: B, strong: N } = e;
    z && (y += "a"), m && (y += "b"), S && (y += "c"), M && (y += "d"), L && (y += "e"), _ && (y += "f"), D && (y += "g"), B && (y += "h"), N && (y += "i"), w && (y += `j${Mi(w)}`), E && (y += `k${Mi(E)}`);
    const { value: k } = l;
    return y += `l${k[0]}`, y += `m${T[0]}`, y;
  }), x, e) : void 0;
  return { selfElRef: o, waveElRef: t, mergedClsPrefix: p, mergedFocusable: a, mergedSize: l, showBorder: n, enterPressed: r, rtlEnabled: g, handleMousedown: s, handleKeydown: u, handleBlur: h, handleKeyup: d, handleClick: c, customColorCssVars: I(() => {
    const { color: y } = e;
    if (!y) return null;
    const z = To(y);
    return { "--n-border-color": y, "--n-border-color-hover": z, "--n-border-color-pressed": Lt(y), "--n-border-color-focus": z, "--n-border-color-disabled": y };
  }), cssVars: f ? void 0 : x, themeClass: P == null ? void 0 : P.themeClass, onRender: P == null ? void 0 : P.onRender };
}, render() {
  const { mergedClsPrefix: e, tag: o, onRender: t } = this;
  t == null ? void 0 : t();
  const r = Oe(this.$slots.default, (n) => n && C("span", { class: `${e}-button__content` }, n));
  return C(o, { ref: "selfElRef", class: [this.themeClass, `${e}-button`, `${e}-button--${this.type}-type`, `${e}-button--${this.mergedSize}-type`, this.rtlEnabled && `${e}-button--rtl`, this.disabled && `${e}-button--disabled`, this.block && `${e}-button--block`, this.enterPressed && `${e}-button--pressed`, !this.text && this.dashed && `${e}-button--dashed`, this.color && `${e}-button--color`, this.secondary && `${e}-button--secondary`, this.loading && `${e}-button--loading`, this.ghost && `${e}-button--ghost`], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown }, this.iconPlacement === "right" && r, C(xh, { width: true }, { default: () => Oe(this.$slots.icon, (n) => (this.loading || this.renderIcon || n) && C("span", { class: `${e}-button__icon`, style: { margin: Dr(this.$slots.default) ? "0" : "" } }, C(ma, null, { default: () => this.loading ? C(Sh, { clsPrefix: e, key: "loading", class: `${e}-icon-slot`, strokeWidth: 20 }) : C("div", { key: "icon", class: `${e}-icon-slot`, role: "none" }, this.renderIcon ? this.renderIcon() : n) }))) }), this.iconPlacement === "left" && r, this.text ? null : C(vp, { ref: "waveElRef", clsPrefix: e }), this.showBorder ? C("div", { "aria-hidden": true, class: `${e}-button__border`, style: this.customColorCssVars }) : null, this.showBorder ? C("div", { "aria-hidden": true, class: `${e}-button__state-border`, style: this.customColorCssVars }) : null);
} }), b0 = Nr, Up = { titleFontSize: "22px" };
function Xp(e) {
  const { borderRadius: o, fontSize: t, lineHeight: r, textColor2: n, textColor1: i, textColorDisabled: l, dividerColor: a, fontWeightStrong: s, primaryColor: c, baseColor: d, hoverColor: u, cardColor: h, modalColor: f, popoverColor: p } = e;
  return Object.assign(Object.assign({}, Up), { borderRadius: o, borderColor: A(h, a), borderColorModal: A(f, a), borderColorPopover: A(p, a), textColor: n, titleFontWeight: s, titleTextColor: i, dayTextColor: l, fontSize: t, lineHeight: r, dateColorCurrent: c, dateTextColorCurrent: d, cellColorHover: A(h, u), cellColorHoverModal: A(f, u), cellColorHoverPopover: A(p, u), cellColor: h, cellColorModal: f, cellColorPopover: p, barColor: c });
}
const Yp = { name: "Calendar", common: F, peers: { Button: Ie }, self: Xp }, Zp = { paddingSmall: "12px 16px 12px", paddingMedium: "19px 24px 20px", paddingLarge: "23px 32px 24px", paddingHuge: "27px 40px 28px", titleFontSizeSmall: "16px", titleFontSizeMedium: "18px", titleFontSizeLarge: "18px", titleFontSizeHuge: "18px", closeIconSize: "18px", closeSize: "22px" };
function Qp(e) {
  const { primaryColor: o, borderRadius: t, lineHeight: r, fontSize: n, cardColor: i, textColor2: l, textColor1: a, dividerColor: s, fontWeightStrong: c, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: h, closeColorHover: f, closeColorPressed: p, modalColor: v, boxShadow1: b, popoverColor: g, actionColor: x } = e;
  return Object.assign(Object.assign({}, Zp), { lineHeight: r, color: i, colorModal: v, colorPopover: g, colorTarget: o, colorEmbedded: x, colorEmbeddedModal: x, colorEmbeddedPopover: x, textColor: l, titleTextColor: a, borderColor: s, actionColor: x, titleFontWeight: c, closeColorHover: f, closeColorPressed: p, closeBorderRadius: t, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: h, fontSizeSmall: n, fontSizeMedium: n, fontSizeLarge: n, fontSizeHuge: n, boxShadow: b, borderRadius: t });
}
const gn = { name: "Card", common: F, self: Qp }, Jp = H([Q("card", `
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
 `, [Al({ background: "var(--n-color-modal)" }), U("hoverable", [H("&:hover", "box-shadow: var(--n-box-shadow);")]), U("content-segmented", [H(">", [j("content", { paddingTop: "var(--n-padding-bottom)" })])]), U("content-soft-segmented", [H(">", [j("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), U("footer-segmented", [H(">", [j("footer", { paddingTop: "var(--n-padding-bottom)" })])]), U("footer-soft-segmented", [H(">", [j("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), H(">", [Q("card-header", `
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
 `, [H("&:first-child", { paddingTop: "var(--n-padding-bottom)" })]), j("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), Q("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [H("img", `
 display: block;
 width: 100%;
 `)]), U("bordered", `
 border: 1px solid var(--n-border-color);
 `, [H("&:target", "border-color: var(--n-color-target);")]), U("action-segmented", [H(">", [j("action", [H("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("content-segmented, content-soft-segmented", [H(">", [j("content", { transition: "border-color 0.3s var(--n-bezier)" }, [H("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("footer-segmented, footer-soft-segmented", [H(">", [j("footer", { transition: "border-color 0.3s var(--n-bezier)" }, [H("&:not(:first-child)", { borderTop: "1px solid var(--n-border-color)" })])])]), U("embedded", `
 background-color: var(--n-color-embedded);
 `)]), Ll(Q("card", `
 background: var(--n-color-modal);
 `, [U("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), Iu(Q("card", `
 background: var(--n-color-popover);
 `, [U("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), mn = { title: [String, Function], contentClass: String, contentStyle: [Object, String], headerClass: String, headerStyle: [Object, String], headerExtraClass: String, headerExtraStyle: [Object, String], footerClass: String, footerStyle: [Object, String], embedded: Boolean, segmented: { type: [Boolean, Object], default: false }, size: { type: String, default: "medium" }, bordered: { type: Boolean, default: true }, closable: Boolean, hoverable: Boolean, role: String, onClose: [Function, Array], tag: { type: String, default: "div" }, cover: Function, content: [String, Function], footer: Function, action: Function, headerExtra: Function, closeFocusable: Boolean }, eg = fn(mn), og = Object.assign(Object.assign({}, Ce.props), mn), tg = te({ name: "Card", props: og, slots: Object, setup(e) {
  const o = () => {
    const { onClose: c } = e;
    c && Le(c);
  }, { inlineThemeDisabled: t, mergedClsPrefixRef: r, mergedRtlRef: n } = to(e), i = Ce("Card", "-card", Jp, gn, e, r), l = $t("Card", n, r), a = I(() => {
    const { size: c } = e, { self: { color: d, colorModal: u, colorTarget: h, textColor: f, titleTextColor: p, titleFontWeight: v, borderColor: b, actionColor: g, borderRadius: x, lineHeight: P, closeIconColor: y, closeIconColorHover: z, closeIconColorPressed: T, closeColorHover: m, closeColorPressed: S, closeBorderRadius: w, closeIconSize: M, closeSize: L, boxShadow: E, colorPopover: _, colorEmbedded: D, colorEmbeddedModal: B, colorEmbeddedPopover: N, [Z("padding", c)]: k, [Z("fontSize", c)]: X, [Z("titleFontSize", c)]: ne }, common: { cubicBezierEaseInOut: le } } = i.value, { top: fe, left: ae, bottom: Be } = Eo(k);
    return { "--n-bezier": le, "--n-border-radius": x, "--n-color": d, "--n-color-modal": u, "--n-color-popover": _, "--n-color-embedded": D, "--n-color-embedded-modal": B, "--n-color-embedded-popover": N, "--n-color-target": h, "--n-text-color": f, "--n-line-height": P, "--n-action-color": g, "--n-title-text-color": p, "--n-title-font-weight": v, "--n-close-icon-color": y, "--n-close-icon-color-hover": z, "--n-close-icon-color-pressed": T, "--n-close-color-hover": m, "--n-close-color-pressed": S, "--n-border-color": b, "--n-box-shadow": E, "--n-padding-top": fe, "--n-padding-bottom": Be, "--n-padding-left": ae, "--n-font-size": X, "--n-title-font-size": ne, "--n-close-size": L, "--n-close-icon-size": M, "--n-close-border-radius": w };
  }), s = t ? co("card", I(() => e.size[0]), a, e) : void 0;
  return { rtlEnabled: l, mergedClsPrefix: r, mergedTheme: i, handleCloseClick: o, cssVars: t ? void 0 : a, themeClass: s == null ? void 0 : s.themeClass, onRender: s == null ? void 0 : s.onRender };
}, render() {
  const { segmented: e, bordered: o, hoverable: t, mergedClsPrefix: r, rtlEnabled: n, onRender: i, embedded: l, tag: a, $slots: s } = this;
  return i == null ? void 0 : i(), C(a, { class: [`${r}-card`, this.themeClass, l && `${r}-card--embedded`, { [`${r}-card--rtl`]: n, [`${r}-card--content${typeof e != "boolean" && e.content === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.content, [`${r}-card--footer${typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""}-segmented`]: e === true || e !== false && e.footer, [`${r}-card--action-segmented`]: e === true || e !== false && e.action, [`${r}-card--bordered`]: o, [`${r}-card--hoverable`]: t }], style: this.cssVars, role: this.role }, Oe(s.cover, (c) => {
    const d = this.cover ? je([this.cover()]) : c;
    return d && C("div", { class: `${r}-card-cover`, role: "none" }, d);
  }), Oe(s.header, (c) => {
    const { title: d } = this, u = d ? je(typeof d == "function" ? [d()] : [d]) : c;
    return u || this.closable ? C("div", { class: [`${r}-card-header`, this.headerClass], style: this.headerStyle, role: "heading" }, C("div", { class: `${r}-card-header__main`, role: "heading" }, u), Oe(s["header-extra"], (h) => {
      const f = this.headerExtra ? je([this.headerExtra()]) : h;
      return f && C("div", { class: [`${r}-card-header__extra`, this.headerExtraClass], style: this.headerExtraStyle }, f);
    }), this.closable && C(va, { clsPrefix: r, class: `${r}-card-header__close`, onClick: this.handleCloseClick, focusable: this.closeFocusable, absolute: true })) : null;
  }), Oe(s.default, (c) => {
    const { content: d } = this, u = d ? je(typeof d == "function" ? [d()] : [d]) : c;
    return u && C("div", { class: [`${r}-card__content`, this.contentClass], style: this.contentStyle, role: "none" }, u);
  }), Oe(s.footer, (c) => {
    const d = this.footer ? je([this.footer()]) : c;
    return d && C("div", { class: [`${r}-card__footer`, this.footerClass], style: this.footerStyle, role: "none" }, d);
  }), Oe(s.action, (c) => {
    const d = this.action ? je([this.action()]) : c;
    return d && C("div", { class: `${r}-card__action`, role: "none" }, d);
  }));
} });
function rg() {
  return { dotSize: "8px", dotColor: "rgba(255, 255, 255, .3)", dotColorActive: "rgba(255, 255, 255, 1)", dotColorFocus: "rgba(255, 255, 255, .5)", dotLineWidth: "16px", dotLineWidthActive: "24px", arrowColor: "#eee" };
}
const ng = { name: "Carousel", common: F, self: rg }, ig = { sizeSmall: "14px", sizeMedium: "16px", sizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function lg(e) {
  const { baseColor: o, inputColorDisabled: t, cardColor: r, modalColor: n, popoverColor: i, textColorDisabled: l, borderColor: a, primaryColor: s, textColor2: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: h, borderRadiusSmall: f, lineHeight: p } = e;
  return Object.assign(Object.assign({}, ig), { labelLineHeight: p, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: h, borderRadius: f, color: o, colorChecked: s, colorDisabled: t, colorDisabledChecked: t, colorTableHeader: r, colorTableHeaderModal: n, colorTableHeaderPopover: i, checkMarkColor: o, checkMarkColorDisabled: l, checkMarkColorDisabledChecked: l, border: `1px solid ${a}`, borderDisabled: `1px solid ${a}`, borderDisabledChecked: `1px solid ${a}`, borderChecked: `1px solid ${s}`, borderFocus: `1px solid ${s}`, boxShadowFocus: `0 0 0 2px ${G(s, { alpha: 0.3 })}`, textColor: c, textColorDisabled: l });
}
const tt = { name: "Checkbox", common: F, self: lg };
function ag(e) {
  const { borderRadius: o, boxShadow2: t, popoverColor: r, textColor2: n, textColor3: i, primaryColor: l, textColorDisabled: a, dividerColor: s, hoverColor: c, fontSizeMedium: d, heightMedium: u } = e;
  return { menuBorderRadius: o, menuColor: r, menuBoxShadow: t, menuDividerColor: s, menuHeight: "calc(var(--n-option-height) * 6.6)", optionArrowColor: i, optionHeight: u, optionFontSize: d, optionColorHover: c, optionTextColor: n, optionTextColorActive: l, optionTextColorDisabled: a, optionCheckMarkColor: l, loadingColor: l, columnWidth: "180px" };
}
const sg = { name: "Cascader", common: F, peers: { InternalSelectMenu: zt, InternalSelection: pn, Scrollbar: Ee, Checkbox: tt, Empty: wo }, self: ag };
function cg(e) {
  const { textColor2: o, fontSize: t, fontWeightStrong: r, textColor3: n } = e;
  return { textColor: o, fontSize: t, fontWeightStrong: r, "mono-3": "#a0a1a7", "hue-1": "#0184bb", "hue-2": "#4078f2", "hue-3": "#a626a4", "hue-4": "#50a14f", "hue-5": "#e45649", "hue-5-2": "#c91243", "hue-6": "#986801", "hue-6-2": "#c18401", lineNumberTextColor: n };
}
const Ma = { name: "Code", common: F, self: cg };
function dg(e) {
  const { fontWeight: o, textColor1: t, textColor2: r, textColorDisabled: n, dividerColor: i, fontSize: l } = e;
  return { titleFontSize: l, titleFontWeight: o, dividerColor: i, titleTextColor: t, titleTextColorDisabled: n, fontSize: l, textColor: r, arrowColor: r, arrowColorDisabled: n, itemMargin: "16px 0 0 0", titlePadding: "16px 0 0 0" };
}
const ug = { name: "Collapse", common: F, self: dg };
function fg(e) {
  const { cubicBezierEaseInOut: o } = e;
  return { bezier: o };
}
const hg = { name: "CollapseTransition", common: F, self: fg };
function pg(e) {
  const { fontSize: o, boxShadow2: t, popoverColor: r, textColor2: n, borderRadius: i, borderColor: l, heightSmall: a, heightMedium: s, heightLarge: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: h, dividerColor: f } = e;
  return { panelFontSize: o, boxShadow: t, color: r, textColor: n, borderRadius: i, border: `1px solid ${l}`, heightSmall: a, heightMedium: s, heightLarge: c, fontSizeSmall: d, fontSizeMedium: u, fontSizeLarge: h, dividerColor: f };
}
const gg = { name: "ColorPicker", common: F, peers: { Input: We, Button: Ie }, self: pg }, mg = { abstract: Boolean, bordered: { type: Boolean, default: void 0 }, clsPrefix: String, locale: Object, dateLocale: Object, namespace: String, rtl: Array, tag: { type: String, default: "div" }, hljs: Object, katex: Object, theme: Object, themeOverrides: Object, componentOptions: Object, icons: Object, breakpoints: Object, preflightStyleDisabled: Boolean, styleMountTarget: Object, inlineThemeDisabled: { type: Boolean, default: void 0 }, as: { type: String, validator: () => (Fo("config-provider", "`as` is deprecated, please use `tag` instead."), true), default: void 0 } }, x0 = te({ name: "ConfigProvider", alias: ["App"], props: mg, setup(e) {
  const o = ie(so, null), t = I(() => {
    const { theme: v } = e;
    if (v === null) return;
    const b = o == null ? void 0 : o.mergedThemeRef.value;
    return v === void 0 ? b : b === void 0 ? v : Object.assign({}, b, v);
  }), r = I(() => {
    const { themeOverrides: v } = e;
    if (v !== null) {
      if (v === void 0) return o == null ? void 0 : o.mergedThemeOverridesRef.value;
      {
        const b = o == null ? void 0 : o.mergedThemeOverridesRef.value;
        return b === void 0 ? v : lt({}, b, v);
      }
    }
  }), n = Ve(() => {
    const { namespace: v } = e;
    return v === void 0 ? o == null ? void 0 : o.mergedNamespaceRef.value : v;
  }), i = Ve(() => {
    const { bordered: v } = e;
    return v === void 0 ? o == null ? void 0 : o.mergedBorderedRef.value : v;
  }), l = I(() => {
    const { icons: v } = e;
    return v === void 0 ? o == null ? void 0 : o.mergedIconsRef.value : v;
  }), a = I(() => {
    const { componentOptions: v } = e;
    return v !== void 0 ? v : o == null ? void 0 : o.mergedComponentPropsRef.value;
  }), s = I(() => {
    const { clsPrefix: v } = e;
    return v !== void 0 ? v : o ? o.mergedClsPrefixRef.value : Gt;
  }), c = I(() => {
    var v;
    const { rtl: b } = e;
    if (b === void 0) return o == null ? void 0 : o.mergedRtlRef.value;
    const g = {};
    for (const x of b) g[x.name] = Bn(x), (v = x.peers) === null || v === void 0 || v.forEach((P) => {
      P.name in g || (g[P.name] = Bn(P));
    });
    return g;
  }), d = I(() => e.breakpoints || (o == null ? void 0 : o.mergedBreakpointsRef.value)), u = e.inlineThemeDisabled || (o == null ? void 0 : o.inlineThemeDisabled), h = e.preflightStyleDisabled || (o == null ? void 0 : o.preflightStyleDisabled), f = e.styleMountTarget || (o == null ? void 0 : o.styleMountTarget), p = I(() => {
    const { value: v } = t, { value: b } = r, g = b && Object.keys(b).length !== 0, x = v == null ? void 0 : v.name;
    return x ? g ? `${x}-${pt(JSON.stringify(r.value))}` : x : g ? pt(JSON.stringify(r.value)) : "";
  });
  return ye(so, { mergedThemeHashRef: p, mergedBreakpointsRef: d, mergedRtlRef: c, mergedIconsRef: l, mergedComponentPropsRef: a, mergedBorderedRef: i, mergedNamespaceRef: n, mergedClsPrefixRef: s, mergedLocaleRef: I(() => {
    const { locale: v } = e;
    if (v !== null) return v === void 0 ? o == null ? void 0 : o.mergedLocaleRef.value : v;
  }), mergedDateLocaleRef: I(() => {
    const { dateLocale: v } = e;
    if (v !== null) return v === void 0 ? o == null ? void 0 : o.mergedDateLocaleRef.value : v;
  }), mergedHljsRef: I(() => {
    const { hljs: v } = e;
    return v === void 0 ? o == null ? void 0 : o.mergedHljsRef.value : v;
  }), mergedKatexRef: I(() => {
    const { katex: v } = e;
    return v === void 0 ? o == null ? void 0 : o.mergedKatexRef.value : v;
  }), mergedThemeRef: t, mergedThemeOverridesRef: r, inlineThemeDisabled: u || false, preflightStyleDisabled: h || false, styleMountTarget: f }), { mergedClsPrefix: s, mergedBordered: i, mergedNamespace: n, mergedTheme: t, mergedThemeOverrides: r };
}, render() {
  var e, o, t, r;
  return this.abstract ? (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t) : C(this.as || this.tag, { class: `${this.mergedClsPrefix || Gt}-config-provider` }, (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e));
} });
function vg(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
}
const Ra = { name: "Popselect", common: F, peers: { Popover: $o, InternalSelectMenu: zt }, self: vg };
function bg(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
}
const ka = { name: "Select", common: F, peers: { InternalSelection: pn, InternalSelectMenu: zt }, self: bg }, xg = { itemPaddingSmall: "0 4px", itemMarginSmall: "0 0 0 8px", itemMarginSmallRtl: "0 8px 0 0", itemPaddingMedium: "0 4px", itemMarginMedium: "0 0 0 8px", itemMarginMediumRtl: "0 8px 0 0", itemPaddingLarge: "0 4px", itemMarginLarge: "0 0 0 8px", itemMarginLargeRtl: "0 8px 0 0", buttonIconSizeSmall: "14px", buttonIconSizeMedium: "16px", buttonIconSizeLarge: "18px", inputWidthSmall: "60px", selectWidthSmall: "unset", inputMarginSmall: "0 0 0 8px", inputMarginSmallRtl: "0 8px 0 0", selectMarginSmall: "0 0 0 8px", prefixMarginSmall: "0 8px 0 0", suffixMarginSmall: "0 0 0 8px", inputWidthMedium: "60px", selectWidthMedium: "unset", inputMarginMedium: "0 0 0 8px", inputMarginMediumRtl: "0 8px 0 0", selectMarginMedium: "0 0 0 8px", prefixMarginMedium: "0 8px 0 0", suffixMarginMedium: "0 0 0 8px", inputWidthLarge: "60px", selectWidthLarge: "unset", inputMarginLarge: "0 0 0 8px", inputMarginLargeRtl: "0 8px 0 0", selectMarginLarge: "0 0 0 8px", prefixMarginLarge: "0 8px 0 0", suffixMarginLarge: "0 0 0 8px" };
function Cg(e) {
  const { textColor2: o, primaryColor: t, primaryColorHover: r, primaryColorPressed: n, inputColorDisabled: i, textColorDisabled: l, borderColor: a, borderRadius: s, fontSizeTiny: c, fontSizeSmall: d, fontSizeMedium: u, heightTiny: h, heightSmall: f, heightMedium: p } = e;
  return Object.assign(Object.assign({}, xg), { buttonColor: "#0000", buttonColorHover: "#0000", buttonColorPressed: "#0000", buttonBorder: `1px solid ${a}`, buttonBorderHover: `1px solid ${a}`, buttonBorderPressed: `1px solid ${a}`, buttonIconColor: o, buttonIconColorHover: o, buttonIconColorPressed: o, itemTextColor: o, itemTextColorHover: r, itemTextColorPressed: n, itemTextColorActive: t, itemTextColorDisabled: l, itemColor: "#0000", itemColorHover: "#0000", itemColorPressed: "#0000", itemColorActive: "#0000", itemColorActiveHover: "#0000", itemColorDisabled: i, itemBorder: "1px solid #0000", itemBorderHover: "1px solid #0000", itemBorderPressed: "1px solid #0000", itemBorderActive: `1px solid ${t}`, itemBorderDisabled: `1px solid ${a}`, itemBorderRadius: s, itemSizeSmall: h, itemSizeMedium: f, itemSizeLarge: p, itemFontSizeSmall: c, itemFontSizeMedium: d, itemFontSizeLarge: u, jumperFontSizeSmall: c, jumperFontSizeMedium: d, jumperFontSizeLarge: u, jumperTextColor: o, jumperTextColorDisabled: l });
}
const Ia = { name: "Pagination", common: F, peers: { Select: ka, Input: We, Popselect: Ra }, self: Cg }, yg = { padding: "4px 0", optionIconSizeSmall: "14px", optionIconSizeMedium: "16px", optionIconSizeLarge: "16px", optionIconSizeHuge: "18px", optionSuffixWidthSmall: "14px", optionSuffixWidthMedium: "14px", optionSuffixWidthLarge: "16px", optionSuffixWidthHuge: "16px", optionIconSuffixWidthSmall: "32px", optionIconSuffixWidthMedium: "32px", optionIconSuffixWidthLarge: "36px", optionIconSuffixWidthHuge: "36px", optionPrefixWidthSmall: "14px", optionPrefixWidthMedium: "14px", optionPrefixWidthLarge: "16px", optionPrefixWidthHuge: "16px", optionIconPrefixWidthSmall: "36px", optionIconPrefixWidthMedium: "36px", optionIconPrefixWidthLarge: "40px", optionIconPrefixWidthHuge: "40px" };
function Sg(e) {
  const { primaryColor: o, textColor2: t, dividerColor: r, hoverColor: n, popoverColor: i, invertedColor: l, borderRadius: a, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: d, fontSizeHuge: u, heightSmall: h, heightMedium: f, heightLarge: p, heightHuge: v, textColor3: b, opacityDisabled: g } = e;
  return Object.assign(Object.assign({}, yg), { optionHeightSmall: h, optionHeightMedium: f, optionHeightLarge: p, optionHeightHuge: v, borderRadius: a, fontSizeSmall: s, fontSizeMedium: c, fontSizeLarge: d, fontSizeHuge: u, optionTextColor: t, optionTextColorHover: t, optionTextColorActive: o, optionTextColorChildActive: o, color: i, dividerColor: r, suffixColor: t, prefixColor: t, optionColorHover: n, optionColorActive: G(o, { alpha: 0.1 }), groupHeaderTextColor: b, optionTextColorInverted: "#BBB", optionTextColorHoverInverted: "#FFF", optionTextColorActiveInverted: "#FFF", optionTextColorChildActiveInverted: "#FFF", colorInverted: l, dividerColorInverted: "#BBB", suffixColorInverted: "#BBB", prefixColorInverted: "#BBB", optionColorHoverInverted: o, optionColorActiveInverted: o, groupHeaderTextColorInverted: "#AAA", optionOpacityDisabled: g });
}
const er = { name: "Dropdown", common: F, peers: { Popover: $o }, self: Sg }, wg = { padding: "8px 14px" };
function $g(e) {
  const { borderRadius: o, boxShadow2: t, baseColor: r } = e;
  return Object.assign(Object.assign({}, wg), { borderRadius: o, boxShadow: t, color: A(r, "rgba(0, 0, 0, .85)"), textColor: r });
}
const Tt = { name: "Tooltip", common: F, peers: { Popover: $o }, self: $g }, Ha = { name: "Ellipsis", common: F, peers: { Tooltip: Tt } }, Pg = { radioSizeSmall: "14px", radioSizeMedium: "16px", radioSizeLarge: "18px", labelPadding: "0 8px", labelFontWeight: "400" };
function zg(e) {
  const { borderColor: o, primaryColor: t, baseColor: r, textColorDisabled: n, inputColorDisabled: i, textColor2: l, opacityDisabled: a, borderRadius: s, fontSizeSmall: c, fontSizeMedium: d, fontSizeLarge: u, heightSmall: h, heightMedium: f, heightLarge: p, lineHeight: v } = e;
  return Object.assign(Object.assign({}, Pg), { labelLineHeight: v, buttonHeightSmall: h, buttonHeightMedium: f, buttonHeightLarge: p, fontSizeSmall: c, fontSizeMedium: d, fontSizeLarge: u, boxShadow: `inset 0 0 0 1px ${o}`, boxShadowActive: `inset 0 0 0 1px ${t}`, boxShadowFocus: `inset 0 0 0 1px ${t}, 0 0 0 2px ${G(t, { alpha: 0.2 })}`, boxShadowHover: `inset 0 0 0 1px ${t}`, boxShadowDisabled: `inset 0 0 0 1px ${o}`, color: r, colorDisabled: i, colorActive: "#0000", textColor: l, textColorDisabled: n, dotColorActive: t, dotColorDisabled: o, buttonBorderColor: o, buttonBorderColorActive: t, buttonBorderColorHover: o, buttonColor: r, buttonColorActive: r, buttonTextColor: l, buttonTextColorActive: t, buttonTextColorHover: t, opacityDisabled: a, buttonBoxShadowFocus: `inset 0 0 0 1px ${t}, 0 0 0 2px ${G(t, { alpha: 0.3 })}`, buttonBoxShadowHover: "inset 0 0 0 1px #0000", buttonBoxShadow: "inset 0 0 0 1px #0000", buttonBorderRadius: s });
}
const Fa = { name: "Radio", common: F, self: zg }, Tg = { thPaddingSmall: "8px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "8px", tdPaddingMedium: "12px", tdPaddingLarge: "12px", sorterSize: "15px", resizableContainerSize: "8px", resizableSize: "2px", filterSize: "15px", paginationMargin: "12px 0 0 0", emptyPadding: "48px 0", actionPadding: "8px 12px", actionButtonMargin: "0 8px 0 0" };
function Eg(e) {
  const { cardColor: o, modalColor: t, popoverColor: r, textColor2: n, textColor1: i, tableHeaderColor: l, tableColorHover: a, iconColor: s, primaryColor: c, fontWeightStrong: d, borderRadius: u, lineHeight: h, fontSizeSmall: f, fontSizeMedium: p, fontSizeLarge: v, dividerColor: b, heightSmall: g, opacityDisabled: x, tableColorStriped: P } = e;
  return Object.assign(Object.assign({}, Tg), { actionDividerColor: b, lineHeight: h, borderRadius: u, fontSizeSmall: f, fontSizeMedium: p, fontSizeLarge: v, borderColor: A(o, b), tdColorHover: A(o, a), tdColorSorting: A(o, a), tdColorStriped: A(o, P), thColor: A(o, l), thColorHover: A(A(o, l), a), thColorSorting: A(A(o, l), a), tdColor: o, tdTextColor: n, thTextColor: i, thFontWeight: d, thButtonColorHover: a, thIconColor: s, thIconColorActive: c, borderColorModal: A(t, b), tdColorHoverModal: A(t, a), tdColorSortingModal: A(t, a), tdColorStripedModal: A(t, P), thColorModal: A(t, l), thColorHoverModal: A(A(t, l), a), thColorSortingModal: A(A(t, l), a), tdColorModal: t, borderColorPopover: A(r, b), tdColorHoverPopover: A(r, a), tdColorSortingPopover: A(r, a), tdColorStripedPopover: A(r, P), thColorPopover: A(r, l), thColorHoverPopover: A(A(r, l), a), thColorSortingPopover: A(A(r, l), a), tdColorPopover: r, boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)", boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)", loadingColor: c, loadingSize: g, opacityLoading: x });
}
const Bg = { name: "DataTable", common: F, peers: { Button: Ie, Checkbox: tt, Radio: Fa, Pagination: Ia, Scrollbar: Ee, Empty: wo, Popover: $o, Ellipsis: Ha, Dropdown: er }, self: Eg }, Mg = Object.assign(Object.assign({}, Jt), Ce.props), C0 = te({ name: "Tooltip", props: Mg, slots: Object, __popover__: true, setup(e) {
  const { mergedClsPrefixRef: o } = to(e), t = Ce("Tooltip", "-tooltip", void 0, Tt, e, o), r = V(null);
  return Object.assign(Object.assign({}, { syncPosition() {
    r.value.syncPosition();
  }, setShow(i) {
    r.value.setShow(i);
  } }), { popoverRef: r, mergedTheme: t, popoverThemeOverrides: I(() => t.value.self) });
}, render() {
  const { mergedTheme: e, internalExtraClass: o } = this;
  return C(Ta, Object.assign(Object.assign({}, this.$props), { theme: e.peers.Popover, themeOverrides: e.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: o.concat("tooltip"), ref: "popoverRef" }), this.$slots);
} }), vn = "n-dropdown-menu", or = "n-dropdown", ji = "n-dropdown-option", Oa = te({ name: "DropdownDivider", props: { clsPrefix: { type: String, required: true } }, render() {
  return C("div", { class: `${this.clsPrefix}-dropdown-divider` });
} }), Rg = te({ name: "DropdownGroupHeader", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true } }, setup() {
  const { showIconRef: e, hasSubmenuRef: o } = ie(vn), { renderLabelRef: t, labelFieldRef: r, nodePropsRef: n, renderOptionRef: i } = ie(or);
  return { labelField: r, showIcon: e, hasSubmenu: o, renderLabel: t, nodeProps: n, renderOption: i };
}, render() {
  var e;
  const { clsPrefix: o, hasSubmenu: t, showIcon: r, nodeProps: n, renderLabel: i, renderOption: l } = this, { rawNode: a } = this.tmNode, s = C("div", Object.assign({ class: `${o}-dropdown-option` }, n == null ? void 0 : n(a)), C("div", { class: `${o}-dropdown-option-body ${o}-dropdown-option-body--group` }, C("div", { "data-dropdown-option": true, class: [`${o}-dropdown-option-body__prefix`, r && `${o}-dropdown-option-body__prefix--show-icon`] }, Ze(a.icon)), C("div", { class: `${o}-dropdown-option-body__label`, "data-dropdown-option": true }, i ? i(a) : Ze((e = a.title) !== null && e !== void 0 ? e : a[this.labelField])), C("div", { class: [`${o}-dropdown-option-body__suffix`, t && `${o}-dropdown-option-body__suffix--has-submenu`], "data-dropdown-option": true })));
  return l ? l({ node: s, option: a }) : s;
} });
function kg(e) {
  const { textColorBase: o, opacity1: t, opacity2: r, opacity3: n, opacity4: i, opacity5: l } = e;
  return { color: o, opacity1Depth: t, opacity2Depth: r, opacity3Depth: n, opacity4Depth: i, opacity5Depth: l };
}
const La = { name: "Icon", common: F, self: kg }, Ig = Q("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [U("color-transition", { transition: "color .3s var(--n-bezier)" }), U("depth", { color: "var(--n-color)" }, [H("svg", { opacity: "var(--n-opacity)", transition: "opacity .3s var(--n-bezier)" })]), H("svg", { height: "1em", width: "1em" })]), Hg = Object.assign(Object.assign({}, Ce.props), { depth: [String, Number], size: [Number, String], color: String, component: [Object, Function] }), Fg = te({ _n_icon__: true, name: "Icon", inheritAttrs: false, props: Hg, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: t } = to(e), r = Ce("Icon", "-icon", Ig, La, e, o), n = I(() => {
    const { depth: l } = e, { common: { cubicBezierEaseInOut: a }, self: s } = r.value;
    if (l !== void 0) {
      const { color: c, [`opacity${l}Depth`]: d } = s;
      return { "--n-bezier": a, "--n-color": c, "--n-opacity": d };
    }
    return { "--n-bezier": a, "--n-color": "", "--n-opacity": "" };
  }), i = t ? co("icon", I(() => `${e.depth || "d"}`), n, e) : void 0;
  return { mergedClsPrefix: o, mergedStyle: I(() => {
    const { size: l, color: a } = e;
    return { fontSize: Wt(l), color: a };
  }), cssVars: t ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e;
  const { $parent: o, depth: t, mergedClsPrefix: r, component: n, onRender: i, themeClass: l } = this;
  return !((e = o == null ? void 0 : o.$options) === null || e === void 0) && e._n_icon__ && Fo("icon", "don't wrap `n-icon` inside `n-icon`"), i == null ? void 0 : i(), C("i", et(this.$attrs, { role: "img", class: [`${r}-icon`, l, { [`${r}-icon--depth`]: t, [`${r}-icon--color-transition`]: t !== void 0 }], style: [this.cssVars, this.mergedStyle] }), n ? C(n) : this.$slots);
} });
function jr(e, o) {
  return e.type === "submenu" || e.type === void 0 && e[o] !== void 0;
}
function Og(e) {
  return e.type === "group";
}
function Aa(e) {
  return e.type === "divider";
}
function Lg(e) {
  return e.type === "render";
}
const Da = te({ name: "DropdownOption", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null }, placement: { type: String, default: "right-start" }, props: Object, scrollable: Boolean }, setup(e) {
  const o = ie(or), { hoverKeyRef: t, keyboardKeyRef: r, lastToggledSubmenuKeyRef: n, pendingKeyPathRef: i, activeKeyPathRef: l, animatedRef: a, mergedShowRef: s, renderLabelRef: c, renderIconRef: d, labelFieldRef: u, childrenFieldRef: h, renderOptionRef: f, nodePropsRef: p, menuPropsRef: v } = o, b = ie(ji, null), g = ie(vn), x = ie(St), P = I(() => e.tmNode.rawNode), y = I(() => {
    const { value: k } = h;
    return jr(e.tmNode.rawNode, k);
  }), z = I(() => {
    const { disabled: k } = e.tmNode;
    return k;
  }), T = I(() => {
    if (!y.value) return false;
    const { key: k, disabled: X } = e.tmNode;
    if (X) return false;
    const { value: ne } = t, { value: le } = r, { value: fe } = n, { value: ae } = i;
    return ne !== null ? ae.includes(k) : le !== null ? ae.includes(k) && ae[ae.length - 1] !== k : fe !== null ? ae.includes(k) : false;
  }), m = I(() => r.value === null && !a.value), S = df(T, 300, m), w = I(() => !!(b == null ? void 0 : b.enteringSubmenuRef.value)), M = V(false);
  ye(ji, { enteringSubmenuRef: M });
  function L() {
    M.value = true;
  }
  function E() {
    M.value = false;
  }
  function _() {
    const { parentKey: k, tmNode: X } = e;
    X.disabled || s.value && (n.value = k, r.value = null, t.value = X.key);
  }
  function D() {
    const { tmNode: k } = e;
    k.disabled || s.value && t.value !== k.key && _();
  }
  function B(k) {
    if (e.tmNode.disabled || !s.value) return;
    const { relatedTarget: X } = k;
    X && !Jn({ target: X }, "dropdownOption") && !Jn({ target: X }, "scrollbarRail") && (t.value = null);
  }
  function N() {
    const { value: k } = y, { tmNode: X } = e;
    s.value && !k && !X.disabled && (o.doSelect(X.key, X.rawNode), o.doUpdateShow(false));
  }
  return { labelField: u, renderLabel: c, renderIcon: d, siblingHasIcon: g.showIconRef, siblingHasSubmenu: g.hasSubmenuRef, menuProps: v, popoverBody: x, animated: a, mergedShowSubmenu: I(() => S.value && !w.value), rawNode: P, hasSubmenu: y, pending: Ve(() => {
    const { value: k } = i, { key: X } = e.tmNode;
    return k.includes(X);
  }), childActive: Ve(() => {
    const { value: k } = l, { key: X } = e.tmNode, ne = k.findIndex((le) => X === le);
    return ne === -1 ? false : ne < k.length - 1;
  }), active: Ve(() => {
    const { value: k } = l, { key: X } = e.tmNode, ne = k.findIndex((le) => X === le);
    return ne === -1 ? false : ne === k.length - 1;
  }), mergedDisabled: z, renderOption: f, nodeProps: p, handleClick: N, handleMouseMove: D, handleMouseEnter: _, handleMouseLeave: B, handleSubmenuBeforeEnter: L, handleSubmenuAfterEnter: E };
}, render() {
  var e, o;
  const { animated: t, rawNode: r, mergedShowSubmenu: n, clsPrefix: i, siblingHasIcon: l, siblingHasSubmenu: a, renderLabel: s, renderIcon: c, renderOption: d, nodeProps: u, props: h, scrollable: f } = this;
  let p = null;
  if (n) {
    const x = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, r, r.children);
    p = C(Wa, Object.assign({}, x, { clsPrefix: i, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
  }
  const v = { class: [`${i}-dropdown-option-body`, this.pending && `${i}-dropdown-option-body--pending`, this.active && `${i}-dropdown-option-body--active`, this.childActive && `${i}-dropdown-option-body--child-active`, this.mergedDisabled && `${i}-dropdown-option-body--disabled`], onMousemove: this.handleMouseMove, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onClick: this.handleClick }, b = u == null ? void 0 : u(r), g = C("div", Object.assign({ class: [`${i}-dropdown-option`, b == null ? void 0 : b.class], "data-dropdown-option": true }, b), C("div", et(v, h), [C("div", { class: [`${i}-dropdown-option-body__prefix`, l && `${i}-dropdown-option-body__prefix--show-icon`] }, [c ? c(r) : Ze(r.icon)]), C("div", { "data-dropdown-option": true, class: `${i}-dropdown-option-body__label` }, s ? s(r) : Ze((o = r[this.labelField]) !== null && o !== void 0 ? o : r.title)), C("div", { "data-dropdown-option": true, class: [`${i}-dropdown-option-body__suffix`, a && `${i}-dropdown-option-body__suffix--has-submenu`] }, this.hasSubmenu ? C(Fg, null, { default: () => C(fh, null) }) : null)]), this.hasSubmenu ? C(Zl, null, { default: () => [C(Ql, null, { default: () => C("div", { class: `${i}-dropdown-offset-container` }, C(oa, { show: this.mergedShowSubmenu, placement: this.placement, to: f && this.popoverBody || void 0, teleportDisabled: !f }, { default: () => C("div", { class: `${i}-dropdown-menu-wrapper` }, t ? C(Co, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, { default: () => p }) : p) })) })] }) : null);
  return d ? d({ node: g, option: r }) : g;
} }), Ag = te({ name: "NDropdownGroup", props: { clsPrefix: { type: String, required: true }, tmNode: { type: Object, required: true }, parentKey: { type: [String, Number], default: null } }, render() {
  const { tmNode: e, parentKey: o, clsPrefix: t } = this, { children: r } = e;
  return C(Lo, null, C(Rg, { clsPrefix: t, tmNode: e, key: e.key }), r == null ? void 0 : r.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : Aa(i) ? C(Oa, { clsPrefix: t, key: n.key }) : n.isGroup ? (Fo("dropdown", "`group` node is not allowed to be put in `group` node."), null) : C(Da, { clsPrefix: t, tmNode: n, parentKey: o, key: n.key });
  }));
} }), Dg = te({ name: "DropdownRenderOption", props: { tmNode: { type: Object, required: true } }, render() {
  const { rawNode: { render: e, props: o } } = this.tmNode;
  return C("div", o, [e == null ? void 0 : e()]);
} }), Wa = te({ name: "DropdownMenu", props: { scrollable: Boolean, showArrow: Boolean, arrowStyle: [String, Object], clsPrefix: { type: String, required: true }, tmNodes: { type: Array, default: () => [] }, parentKey: { type: [String, Number], default: null } }, setup(e) {
  const { renderIconRef: o, childrenFieldRef: t } = ie(or);
  ye(vn, { showIconRef: I(() => {
    const n = o.value;
    return e.tmNodes.some((i) => {
      var l;
      if (i.isGroup) return (l = i.children) === null || l === void 0 ? void 0 : l.some(({ rawNode: s }) => n ? n(s) : s.icon);
      const { rawNode: a } = i;
      return n ? n(a) : a.icon;
    });
  }), hasSubmenuRef: I(() => {
    const { value: n } = t;
    return e.tmNodes.some((i) => {
      var l;
      if (i.isGroup) return (l = i.children) === null || l === void 0 ? void 0 : l.some(({ rawNode: s }) => jr(s, n));
      const { rawNode: a } = i;
      return jr(a, n);
    });
  }) });
  const r = V(null);
  return ye(Zt, null), ye(Yt, null), ye(St, r), { bodyRef: r };
}, render() {
  const { parentKey: e, clsPrefix: o, scrollable: t } = this, r = this.tmNodes.map((n) => {
    const { rawNode: i } = n;
    return i.show === false ? null : Lg(i) ? C(Dg, { tmNode: n, key: n.key }) : Aa(i) ? C(Oa, { clsPrefix: o, key: n.key }) : Og(i) ? C(Ag, { clsPrefix: o, tmNode: n, parentKey: e, key: n.key }) : C(Da, { clsPrefix: o, tmNode: n, parentKey: e, key: n.key, props: i.props, scrollable: t });
  });
  return C("div", { class: [`${o}-dropdown-menu`, t && `${o}-dropdown-menu--scrollable`], ref: "bodyRef" }, t ? C(ya, { contentClass: `${o}-dropdown-menu__content` }, { default: () => r }) : r, this.showArrow ? za({ clsPrefix: o, arrowStyle: this.arrowStyle, arrowClass: void 0, arrowWrapperClass: void 0, arrowWrapperStyle: void 0 }) : null);
} }), Wg = Q("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [$a(), Q("dropdown-option", `
 position: relative;
 `, [H("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [H("&::before", `
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
 `, [H("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), vo("disabled", [U("pending", `
 color: var(--n-option-text-color-hover);
 `, [j("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), H("&::before", "background-color: var(--n-option-color-hover);")]), U("active", `
 color: var(--n-option-text-color-active);
 `, [j("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), H("&::before", "background-color: var(--n-option-color-active);")]), U("child-active", `
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
 `), Q("icon", `
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
 `), H(">", [Q("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), vo("scrollable", `
 padding: var(--n-padding);
 `), U("scrollable", [j("content", `
 padding: var(--n-padding);
 `)])]), _g = { animated: { type: Boolean, default: true }, keyboard: { type: Boolean, default: true }, size: { type: String, default: "medium" }, inverted: Boolean, placement: { type: String, default: "bottom" }, onSelect: [Function, Array], options: { type: Array, default: () => [] }, menuProps: Function, showArrow: Boolean, renderLabel: Function, renderIcon: Function, renderOption: Function, nodeProps: Function, labelField: { type: String, default: "label" }, keyField: { type: String, default: "key" }, childrenField: { type: String, default: "children" }, value: [String, Number] }, Ng = Object.keys(Jt), jg = Object.assign(Object.assign(Object.assign({}, Jt), _g), Ce.props), y0 = te({ name: "Dropdown", inheritAttrs: false, props: jg, setup(e) {
  const o = V(false), t = Gl(ue(e, "show"), o), r = I(() => {
    const { keyField: E, childrenField: _ } = e;
    return Qh(e.options, { getKey(D) {
      return D[E];
    }, getDisabled(D) {
      return D.disabled === true;
    }, getIgnored(D) {
      return D.type === "divider" || D.type === "render";
    }, getChildren(D) {
      return D[_];
    } });
  }), n = I(() => r.value.treeNodes), i = V(null), l = V(null), a = V(null), s = I(() => {
    var E, _, D;
    return (D = (_ = (E = i.value) !== null && E !== void 0 ? E : l.value) !== null && _ !== void 0 ? _ : a.value) !== null && D !== void 0 ? D : null;
  }), c = I(() => r.value.getPath(s.value).keyPath), d = I(() => r.value.getPath(e.value).keyPath), u = Ve(() => e.keyboard && t.value);
  af({ keydown: { ArrowUp: { prevent: true, handler: z }, ArrowRight: { prevent: true, handler: y }, ArrowDown: { prevent: true, handler: T }, ArrowLeft: { prevent: true, handler: P }, Enter: { prevent: true, handler: m }, Escape: x } }, u);
  const { mergedClsPrefixRef: h, inlineThemeDisabled: f } = to(e), p = Ce("Dropdown", "-dropdown", Wg, er, e, h);
  ye(or, { labelFieldRef: ue(e, "labelField"), childrenFieldRef: ue(e, "childrenField"), renderLabelRef: ue(e, "renderLabel"), renderIconRef: ue(e, "renderIcon"), hoverKeyRef: i, keyboardKeyRef: l, lastToggledSubmenuKeyRef: a, pendingKeyPathRef: c, activeKeyPathRef: d, animatedRef: ue(e, "animated"), mergedShowRef: t, nodePropsRef: ue(e, "nodeProps"), renderOptionRef: ue(e, "renderOption"), menuPropsRef: ue(e, "menuProps"), doSelect: v, doUpdateShow: b }), Se(t, (E) => {
    !e.animated && !E && g();
  });
  function v(E, _) {
    const { onSelect: D } = e;
    D && Le(D, E, _);
  }
  function b(E) {
    const { "onUpdate:show": _, onUpdateShow: D } = e;
    _ && Le(_, E), D && Le(D, E), o.value = E;
  }
  function g() {
    i.value = null, l.value = null, a.value = null;
  }
  function x() {
    b(false);
  }
  function P() {
    w("left");
  }
  function y() {
    w("right");
  }
  function z() {
    w("up");
  }
  function T() {
    w("down");
  }
  function m() {
    const E = S();
    (E == null ? void 0 : E.isLeaf) && t.value && (v(E.key, E.rawNode), b(false));
  }
  function S() {
    var E;
    const { value: _ } = r, { value: D } = s;
    return !_ || D === null ? null : (E = _.getNode(D)) !== null && E !== void 0 ? E : null;
  }
  function w(E) {
    const { value: _ } = s, { value: { getFirstAvailableNode: D } } = r;
    let B = null;
    if (_ === null) {
      const N = D();
      N !== null && (B = N.key);
    } else {
      const N = S();
      if (N) {
        let k;
        switch (E) {
          case "down":
            k = N.getNext();
            break;
          case "up":
            k = N.getPrev();
            break;
          case "right":
            k = N.getChild();
            break;
          case "left":
            k = N.getParent();
            break;
        }
        k && (B = k.key);
      }
    }
    B !== null && (i.value = null, l.value = B);
  }
  const M = I(() => {
    const { size: E, inverted: _ } = e, { common: { cubicBezierEaseInOut: D }, self: B } = p.value, { padding: N, dividerColor: k, borderRadius: X, optionOpacityDisabled: ne, [Z("optionIconSuffixWidth", E)]: le, [Z("optionSuffixWidth", E)]: fe, [Z("optionIconPrefixWidth", E)]: ae, [Z("optionPrefixWidth", E)]: Be, [Z("fontSize", E)]: Re, [Z("optionHeight", E)]: uo, [Z("optionIconSize", E)]: re } = B, $ = { "--n-bezier": D, "--n-font-size": Re, "--n-padding": N, "--n-border-radius": X, "--n-option-height": uo, "--n-option-prefix-width": Be, "--n-option-icon-prefix-width": ae, "--n-option-suffix-width": fe, "--n-option-icon-suffix-width": le, "--n-option-icon-size": re, "--n-divider-color": k, "--n-option-opacity-disabled": ne };
    return _ ? ($["--n-color"] = B.colorInverted, $["--n-option-color-hover"] = B.optionColorHoverInverted, $["--n-option-color-active"] = B.optionColorActiveInverted, $["--n-option-text-color"] = B.optionTextColorInverted, $["--n-option-text-color-hover"] = B.optionTextColorHoverInverted, $["--n-option-text-color-active"] = B.optionTextColorActiveInverted, $["--n-option-text-color-child-active"] = B.optionTextColorChildActiveInverted, $["--n-prefix-color"] = B.prefixColorInverted, $["--n-suffix-color"] = B.suffixColorInverted, $["--n-group-header-text-color"] = B.groupHeaderTextColorInverted) : ($["--n-color"] = B.color, $["--n-option-color-hover"] = B.optionColorHover, $["--n-option-color-active"] = B.optionColorActive, $["--n-option-text-color"] = B.optionTextColor, $["--n-option-text-color-hover"] = B.optionTextColorHover, $["--n-option-text-color-active"] = B.optionTextColorActive, $["--n-option-text-color-child-active"] = B.optionTextColorChildActive, $["--n-prefix-color"] = B.prefixColor, $["--n-suffix-color"] = B.suffixColor, $["--n-group-header-text-color"] = B.groupHeaderTextColor), $;
  }), L = f ? co("dropdown", I(() => `${e.size[0]}${e.inverted ? "i" : ""}`), M, e) : void 0;
  return { mergedClsPrefix: h, mergedTheme: p, tmNodes: n, mergedShow: t, handleAfterLeave: () => {
    e.animated && g();
  }, doUpdateShow: b, cssVars: f ? void 0 : M, themeClass: L == null ? void 0 : L.themeClass, onRender: L == null ? void 0 : L.onRender };
}, render() {
  const e = (r, n, i, l, a) => {
    var s;
    const { mergedClsPrefix: c, menuProps: d } = this;
    (s = this.onRender) === null || s === void 0 || s.call(this);
    const u = (d == null ? void 0 : d(void 0, this.tmNodes.map((f) => f.rawNode))) || {}, h = { ref: nh(n), class: [r, `${c}-dropdown`, this.themeClass], clsPrefix: c, tmNodes: this.tmNodes, style: [...i, this.cssVars], showArrow: this.showArrow, arrowStyle: this.arrowStyle, scrollable: this.scrollable, onMouseenter: l, onMouseleave: a };
    return C(Wa, et(this.$attrs, h, u));
  }, { mergedTheme: o } = this, t = { show: this.mergedShow, theme: o.peers.Popover, themeOverrides: o.peerOverrides.Popover, internalOnAfterLeave: this.handleAfterLeave, internalRenderBody: e, onUpdateShow: this.doUpdateShow, "onUpdate:show": void 0 };
  return C(Ta, Object.assign({}, bt(this.$props, Ng), t), { trigger: () => {
    var r, n;
    return (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r);
  } });
} }), Vg = { itemFontSize: "12px", itemHeight: "36px", itemWidth: "52px", panelActionPadding: "8px 0" };
function Gg(e) {
  const { popoverColor: o, textColor2: t, primaryColor: r, hoverColor: n, dividerColor: i, opacityDisabled: l, boxShadow2: a, borderRadius: s, iconColor: c, iconColorDisabled: d } = e;
  return Object.assign(Object.assign({}, Vg), { panelColor: o, panelBoxShadow: a, panelDividerColor: i, itemTextColor: t, itemTextColorActive: r, itemColorHover: n, itemOpacityDisabled: l, itemBorderRadius: s, borderRadius: s, iconColor: c, iconColorDisabled: d });
}
const _a = { name: "TimePicker", common: F, peers: { Scrollbar: Ee, Button: Ie, Input: We }, self: Gg }, Kg = { itemSize: "24px", itemCellWidth: "38px", itemCellHeight: "32px", scrollItemWidth: "80px", scrollItemHeight: "40px", panelExtraFooterPadding: "8px 12px", panelActionPadding: "8px 12px", calendarTitlePadding: "0", calendarTitleHeight: "28px", arrowSize: "14px", panelHeaderPadding: "8px 12px", calendarDaysHeight: "32px", calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px", calendarLeftPaddingDate: "6px 12px 4px 12px", calendarLeftPaddingDatetime: "4px 12px", calendarLeftPaddingDaterange: "6px 12px 4px 12px", calendarLeftPaddingDatetimerange: "4px 12px", calendarLeftPaddingMonth: "0", calendarLeftPaddingYear: "0", calendarLeftPaddingQuarter: "0", calendarLeftPaddingMonthrange: "0", calendarLeftPaddingQuarterrange: "0", calendarLeftPaddingYearrange: "0", calendarLeftPaddingWeek: "6px 12px 4px 12px", calendarRightPaddingDate: "6px 12px 4px 12px", calendarRightPaddingDatetime: "4px 12px", calendarRightPaddingDaterange: "6px 12px 4px 12px", calendarRightPaddingDatetimerange: "4px 12px", calendarRightPaddingMonth: "0", calendarRightPaddingYear: "0", calendarRightPaddingQuarter: "0", calendarRightPaddingMonthrange: "0", calendarRightPaddingQuarterrange: "0", calendarRightPaddingYearrange: "0", calendarRightPaddingWeek: "0" };
function qg(e) {
  const { hoverColor: o, fontSize: t, textColor2: r, textColorDisabled: n, popoverColor: i, primaryColor: l, borderRadiusSmall: a, iconColor: s, iconColorDisabled: c, textColor1: d, dividerColor: u, boxShadow2: h, borderRadius: f, fontWeightStrong: p } = e;
  return Object.assign(Object.assign({}, Kg), { itemFontSize: t, calendarDaysFontSize: t, calendarTitleFontSize: t, itemTextColor: r, itemTextColorDisabled: n, itemTextColorActive: i, itemTextColorCurrent: l, itemColorIncluded: G(l, { alpha: 0.1 }), itemColorHover: o, itemColorDisabled: o, itemColorActive: l, itemBorderRadius: a, panelColor: i, panelTextColor: r, arrowColor: s, calendarTitleTextColor: d, calendarTitleColorHover: o, calendarDaysTextColor: r, panelHeaderDividerColor: u, calendarDaysDividerColor: u, calendarDividerColor: u, panelActionDividerColor: u, panelBoxShadow: h, panelBorderRadius: f, calendarTitleFontWeight: p, scrollItemBorderRadius: f, iconColor: s, iconColorDisabled: c });
}
const Ug = { name: "DatePicker", common: F, peers: { Input: We, Button: Ie, TimePicker: _a, Scrollbar: Ee }, self: qg }, Xg = { thPaddingBorderedSmall: "8px 12px", thPaddingBorderedMedium: "12px 16px", thPaddingBorderedLarge: "16px 24px", thPaddingSmall: "0", thPaddingMedium: "0", thPaddingLarge: "0", tdPaddingBorderedSmall: "8px 12px", tdPaddingBorderedMedium: "12px 16px", tdPaddingBorderedLarge: "16px 24px", tdPaddingSmall: "0 0 8px 0", tdPaddingMedium: "0 0 12px 0", tdPaddingLarge: "0 0 16px 0" };
function Yg(e) {
  const { tableHeaderColor: o, textColor2: t, textColor1: r, cardColor: n, modalColor: i, popoverColor: l, dividerColor: a, borderRadius: s, fontWeightStrong: c, lineHeight: d, fontSizeSmall: u, fontSizeMedium: h, fontSizeLarge: f } = e;
  return Object.assign(Object.assign({}, Xg), { lineHeight: d, fontSizeSmall: u, fontSizeMedium: h, fontSizeLarge: f, titleTextColor: r, thColor: A(n, o), thColorModal: A(i, o), thColorPopover: A(l, o), thTextColor: r, thFontWeight: c, tdTextColor: t, tdColor: n, tdColorModal: i, tdColorPopover: l, borderColor: A(n, a), borderColorModal: A(i, a), borderColorPopover: A(l, a), borderRadius: s });
}
const Zg = { name: "Descriptions", common: F, self: Yg }, Qg = "n-dialog-provider", S0 = "n-dialog-api", w0 = "n-dialog-reactive-list", Jg = { titleFontSize: "18px", padding: "16px 28px 20px 28px", iconSize: "28px", actionSpace: "12px", contentMargin: "8px 0 16px 0", iconMargin: "0 4px 0 0", iconMarginIconTop: "4px 0 8px 0", closeSize: "22px", closeIconSize: "18px", closeMargin: "20px 26px 0 0", closeMarginIconTop: "10px 16px 0 0" };
function em(e) {
  const { textColor1: o, textColor2: t, modalColor: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: l, closeColorHover: a, closeColorPressed: s, infoColor: c, successColor: d, warningColor: u, errorColor: h, primaryColor: f, dividerColor: p, borderRadius: v, fontWeightStrong: b, lineHeight: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, Jg), { fontSize: x, lineHeight: g, border: `1px solid ${p}`, titleTextColor: o, textColor: t, color: r, closeColorHover: a, closeColorPressed: s, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: l, closeBorderRadius: v, iconColor: f, iconColorInfo: c, iconColorSuccess: d, iconColorWarning: u, iconColorError: h, borderRadius: v, titleFontWeight: b });
}
const bn = { name: "Dialog", common: F, peers: { Button: Ie }, self: em }, xn = { icon: Function, type: { type: String, default: "default" }, title: [String, Function], closable: { type: Boolean, default: true }, negativeText: String, positiveText: String, positiveButtonProps: Object, negativeButtonProps: Object, content: [String, Function], action: Function, showIcon: { type: Boolean, default: true }, loading: Boolean, bordered: Boolean, iconPlacement: String, titleClass: [String, Array], titleStyle: [String, Object], contentClass: [String, Array], contentStyle: [String, Object], actionClass: [String, Array], actionStyle: [String, Object], onPositiveClick: Function, onNegativeClick: Function, onClose: Function, closeFocusable: Boolean }, om = fn(xn), tm = H([Q("dialog", `
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
 `, [j("icon", { color: "var(--n-icon-color)" }), U("bordered", { border: "var(--n-border)" }), U("icon-top", [j("close", { margin: "var(--n-close-margin)" }), j("icon", { margin: "var(--n-icon-margin)" }), j("content", { textAlign: "center" }), j("title", { justifyContent: "center" }), j("action", { justifyContent: "center" })]), U("icon-left", [j("icon", { margin: "var(--n-icon-margin)" }), U("closable", [j("title", `
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
 `, [H("> *:not(:last-child)", `
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
 `), Q("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), Ll(Q("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), Q("dialog", [Al(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), rm = { default: () => C(Oi, null), info: () => C(Oi, null), success: () => C(gh, null), warning: () => C(mh, null), error: () => C(ph, null) }, nm = te({ name: "Dialog", alias: ["NimbusConfirmCard", "Confirm"], props: Object.assign(Object.assign({}, Ce.props), xn), slots: Object, setup(e) {
  const { mergedComponentPropsRef: o, mergedClsPrefixRef: t, inlineThemeDisabled: r, mergedRtlRef: n } = to(e), i = $t("Dialog", n, t), l = I(() => {
    var f, p;
    const { iconPlacement: v } = e;
    return v || ((p = (f = o == null ? void 0 : o.value) === null || f === void 0 ? void 0 : f.Dialog) === null || p === void 0 ? void 0 : p.iconPlacement) || "left";
  });
  function a(f) {
    const { onPositiveClick: p } = e;
    p && p(f);
  }
  function s(f) {
    const { onNegativeClick: p } = e;
    p && p(f);
  }
  function c() {
    const { onClose: f } = e;
    f && f();
  }
  const d = Ce("Dialog", "-dialog", tm, bn, e, t), u = I(() => {
    const { type: f } = e, p = l.value, { common: { cubicBezierEaseInOut: v }, self: { fontSize: b, lineHeight: g, border: x, titleTextColor: P, textColor: y, color: z, closeBorderRadius: T, closeColorHover: m, closeColorPressed: S, closeIconColor: w, closeIconColorHover: M, closeIconColorPressed: L, closeIconSize: E, borderRadius: _, titleFontWeight: D, titleFontSize: B, padding: N, iconSize: k, actionSpace: X, contentMargin: ne, closeSize: le, [p === "top" ? "iconMarginIconTop" : "iconMargin"]: fe, [p === "top" ? "closeMarginIconTop" : "closeMargin"]: ae, [Z("iconColor", f)]: Be } } = d.value, Re = Eo(fe);
    return { "--n-font-size": b, "--n-icon-color": Be, "--n-bezier": v, "--n-close-margin": ae, "--n-icon-margin-top": Re.top, "--n-icon-margin-right": Re.right, "--n-icon-margin-bottom": Re.bottom, "--n-icon-margin-left": Re.left, "--n-icon-size": k, "--n-close-size": le, "--n-close-icon-size": E, "--n-close-border-radius": T, "--n-close-color-hover": m, "--n-close-color-pressed": S, "--n-close-icon-color": w, "--n-close-icon-color-hover": M, "--n-close-icon-color-pressed": L, "--n-color": z, "--n-text-color": y, "--n-border-radius": _, "--n-padding": N, "--n-line-height": g, "--n-border": x, "--n-content-margin": ne, "--n-title-font-size": B, "--n-title-font-weight": D, "--n-title-text-color": P, "--n-action-space": X };
  }), h = r ? co("dialog", I(() => `${e.type[0]}${l.value[0]}`), u, e) : void 0;
  return { mergedClsPrefix: t, rtlEnabled: i, mergedIconPlacement: l, mergedTheme: d, handlePositiveClick: a, handleNegativeClick: s, handleCloseClick: c, cssVars: r ? void 0 : u, themeClass: h == null ? void 0 : h.themeClass, onRender: h == null ? void 0 : h.onRender };
}, render() {
  var e;
  const { bordered: o, mergedIconPlacement: t, cssVars: r, closable: n, showIcon: i, title: l, content: a, action: s, negativeText: c, positiveText: d, positiveButtonProps: u, negativeButtonProps: h, handlePositiveClick: f, handleNegativeClick: p, mergedTheme: v, loading: b, type: g, mergedClsPrefix: x } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const P = i ? C(ga, { clsPrefix: x, class: `${x}-dialog__icon` }, { default: () => Oe(this.$slots.icon, (z) => z || (this.icon ? Ze(this.icon) : rm[this.type]())) }) : null, y = Oe(this.$slots.action, (z) => z || d || c || s ? C("div", { class: [`${x}-dialog__action`, this.actionClass], style: this.actionStyle }, z || (s ? [Ze(s)] : [this.negativeText && C(Nr, Object.assign({ theme: v.peers.Button, themeOverrides: v.peerOverrides.Button, ghost: true, size: "small", onClick: p }, h), { default: () => Ze(this.negativeText) }), this.positiveText && C(Nr, Object.assign({ theme: v.peers.Button, themeOverrides: v.peerOverrides.Button, size: "small", type: g === "default" ? "primary" : g, disabled: b, loading: b, onClick: f }, u), { default: () => Ze(this.positiveText) })])) : null);
  return C("div", { class: [`${x}-dialog`, this.themeClass, this.closable && `${x}-dialog--closable`, `${x}-dialog--icon-${t}`, o && `${x}-dialog--bordered`, this.rtlEnabled && `${x}-dialog--rtl`], style: r, role: "dialog" }, n ? Oe(this.$slots.close, (z) => {
    const T = [`${x}-dialog__close`, this.rtlEnabled && `${x}-dialog--rtl`];
    return z ? C("div", { class: T }, z) : C(va, { focusable: this.closeFocusable, clsPrefix: x, class: T, onClick: this.handleCloseClick });
  }) : null, i && t === "top" ? C("div", { class: `${x}-dialog-icon-container` }, P) : null, C("div", { class: [`${x}-dialog__title`, this.titleClass], style: this.titleStyle }, i && t === "left" ? P : null, Ii(this.$slots.header, () => [Ze(l)])), C("div", { class: [`${x}-dialog__content`, y ? "" : `${x}-dialog__content--last`, this.contentClass], style: this.contentStyle }, Ii(this.$slots.default, () => [Ze(a)])), y);
} });
function im(e) {
  const { modalColor: o, textColor2: t, boxShadow3: r } = e;
  return { color: o, textColor: t, boxShadow: r };
}
const Na = { name: "Modal", common: F, peers: { Scrollbar: Ee, Dialog: bn, Card: gn }, self: im }, Vr = "n-draggable";
function lm(e, o) {
  let t;
  const r = I(() => e.value !== false), n = I(() => r.value ? Vr : ""), i = I(() => {
    const s = e.value;
    return s === true || s === false ? true : s ? s.bounds !== "none" : true;
  });
  function l(s) {
    const c = s.querySelector(`.${Vr}`);
    if (!c || !n.value) return;
    let d = 0, u = 0, h = 0, f = 0, p = 0, v = 0, b;
    function g(y) {
      y.preventDefault(), b = y;
      const { x: z, y: T, right: m, bottom: S } = s.getBoundingClientRect();
      u = z, f = T, d = window.innerWidth - m, h = window.innerHeight - S;
      const { left: w, top: M } = s.style;
      p = +M.slice(0, -2), v = +w.slice(0, -2);
    }
    function x(y) {
      if (!b) return;
      const { clientX: z, clientY: T } = b;
      let m = y.clientX - z, S = y.clientY - T;
      i.value && (m > d ? m = d : -m > u && (m = -u), S > h ? S = h : -S > f && (S = -f));
      const w = m + v, M = S + p;
      s.style.top = `${M}px`, s.style.left = `${w}px`;
    }
    function P() {
      b = void 0, o.onEnd(s);
    }
    de("mousedown", c, g), de("mousemove", window, x), de("mouseup", window, P), t = () => {
      ce("mousedown", c, g), de("mousemove", window, x), de("mouseup", window, P);
    };
  }
  function a() {
    t && (t(), t = void 0);
  }
  return ks(a), { stopDrag: a, startDrag: l, draggableRef: r, draggableClassRef: n };
}
const Cn = Object.assign(Object.assign({}, mn), xn), am = fn(Cn), sm = te({ name: "ModalBody", inheritAttrs: false, slots: Object, props: Object.assign(Object.assign({ show: { type: Boolean, required: true }, preset: String, displayDirective: { type: String, required: true }, trapFocus: { type: Boolean, default: true }, autoFocus: { type: Boolean, default: true }, blockScroll: Boolean, draggable: { type: [Boolean, Object], default: false }, maskHidden: Boolean }, Cn), { renderMask: Function, onClickoutside: Function, onBeforeLeave: { type: Function, required: true }, onAfterLeave: { type: Function, required: true }, onPositiveClick: { type: Function, required: true }, onNegativeClick: { type: Function, required: true }, onClose: { type: Function, required: true }, onAfterEnter: Function, onEsc: Function }), setup(e) {
  const o = V(null), t = V(null), r = V(e.show), n = V(null), i = V(null), l = ie(ql);
  let a = null;
  Se(ue(e, "show"), (S) => {
    S && (a = l.getMousePosition());
  }, { immediate: true });
  const { stopDrag: s, startDrag: c, draggableRef: d, draggableClassRef: u } = lm(ue(e, "draggable"), { onEnd: (S) => {
    v(S);
  } }), h = I(() => Mn([e.titleClass, u.value])), f = I(() => Mn([e.headerClass, u.value]));
  Se(ue(e, "show"), (S) => {
    S && (r.value = true);
  }), ff(I(() => e.blockScroll && r.value));
  function p() {
    if (l.transformOriginRef.value === "center") return "";
    const { value: S } = n, { value: w } = i;
    if (S === null || w === null) return "";
    if (t.value) {
      const M = t.value.containerScrollTop;
      return `${S}px ${w + M}px`;
    }
    return "";
  }
  function v(S) {
    if (l.transformOriginRef.value === "center" || !a || !t.value) return;
    const w = t.value.containerScrollTop, { offsetLeft: M, offsetTop: L } = S, E = a.y, _ = a.x;
    n.value = -(M - _), i.value = -(L - E - w), S.style.transformOrigin = p();
  }
  function b(S) {
    Io(() => {
      v(S);
    });
  }
  function g(S) {
    S.style.transformOrigin = p(), e.onBeforeLeave();
  }
  function x(S) {
    const w = S;
    d.value && c(w), e.onAfterEnter && e.onAfterEnter(w);
  }
  function P() {
    r.value = false, n.value = null, i.value = null, s(), e.onAfterLeave();
  }
  function y() {
    const { onClose: S } = e;
    S && S();
  }
  function z() {
    e.onNegativeClick();
  }
  function T() {
    e.onPositiveClick();
  }
  const m = V(null);
  return Se(m, (S) => {
    S && Io(() => {
      const w = S.el;
      w && o.value !== w && (o.value = w);
    });
  }), ye(Zt, o), ye(Yt, null), ye(St, null), { mergedTheme: l.mergedThemeRef, appear: l.appearRef, isMounted: l.isMountedRef, mergedClsPrefix: l.mergedClsPrefixRef, bodyRef: o, scrollbarRef: t, draggableClass: u, displayed: r, childNodeRef: m, cardHeaderClass: f, dialogTitleClass: h, handlePositiveClick: T, handleNegativeClick: z, handleCloseClick: y, handleAfterEnter: x, handleAfterLeave: P, handleBeforeLeave: g, handleEnter: b };
}, render() {
  const { $slots: e, $attrs: o, handleEnter: t, handleAfterEnter: r, handleAfterLeave: n, handleBeforeLeave: i, preset: l, mergedClsPrefix: a } = this;
  let s = null;
  if (!l) {
    if (s = lh("default", e.default, { draggableClass: this.draggableClass }), !s) {
      Fo("modal", "default slot is empty");
      return;
    }
    s = ol(s), s.props = et({ class: `${a}-modal` }, o, s.props || {});
  }
  return this.displayDirective === "show" || this.displayed || this.show ? Ho(C("div", { role: "none", class: [`${a}-modal-body-wrapper`, this.maskHidden && `${a}-modal-body-wrapper--mask-hidden`] }, C(Ca, { ref: "scrollbarRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentClass: `${a}-modal-scroll-content` }, { default: () => {
    var c;
    return [(c = this.renderMask) === null || c === void 0 ? void 0 : c.call(this), C(fa, { disabled: !this.trapFocus || this.maskHidden, active: this.show, onEsc: this.onEsc, autoFocus: this.autoFocus }, { default: () => {
      var d;
      return C(Co, { name: "fade-in-scale-up-transition", appear: (d = this.appear) !== null && d !== void 0 ? d : this.isMounted, onEnter: t, onAfterEnter: r, onAfterLeave: n, onBeforeLeave: i }, { default: () => {
        const u = [[Pr, this.show]], { onClickoutside: h } = this;
        return h && u.push([Lr, this.onClickoutside, void 0, { capture: true }]), Ho(this.preset === "confirm" || this.preset === "dialog" ? C(nm, Object.assign({}, this.$attrs, { class: [`${a}-modal`, this.$attrs.class], ref: "bodyRef", theme: this.mergedTheme.peers.Dialog, themeOverrides: this.mergedTheme.peerOverrides.Dialog }, bt(this.$props, om), { titleClass: this.dialogTitleClass, "aria-modal": "true" }), e) : this.preset === "card" ? C(tg, Object.assign({}, this.$attrs, { ref: "bodyRef", class: [`${a}-modal`, this.$attrs.class], theme: this.mergedTheme.peers.Card, themeOverrides: this.mergedTheme.peerOverrides.Card }, bt(this.$props, eg), { headerClass: this.cardHeaderClass, "aria-modal": "true", role: "dialog" }), e) : this.childNodeRef = s, u);
      } });
    } })];
  } })), [[Pr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
} }), cm = H([Q("modal-container", `
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
 `, [ba({ enterDuration: ".25s", leaveDuration: ".25s", enterCubicBezier: "var(--n-bezier-ease-out)", leaveCubicBezier: "var(--n-bezier-ease-out)" })]), Q("modal-body-wrapper", `
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
 `), U("mask-hidden", "pointer-events: none;", [H("> *", `
 pointer-events: all;
 `)])]), Q("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [$a({ duration: ".25s", enterScale: ".5" }), H(`.${Vr}`, `
 cursor: move;
 user-select: none;
 `)])]), dm = Object.assign(Object.assign(Object.assign(Object.assign({}, Ce.props), { show: Boolean, showMask: { type: Boolean, default: true }, maskClosable: { type: Boolean, default: true }, preset: String, to: [String, Object], displayDirective: { type: String, default: "if" }, transformOrigin: { type: String, default: "mouse" }, zIndex: Number, autoFocus: { type: Boolean, default: true }, trapFocus: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, blockScroll: { type: Boolean, default: true } }), Cn), { draggable: [Boolean, Object], onEsc: Function, "onUpdate:show": [Function, Array], onUpdateShow: [Function, Array], onAfterEnter: Function, onBeforeLeave: Function, onAfterLeave: Function, onClose: Function, onPositiveClick: Function, onNegativeClick: Function, onMaskClick: Function, internalDialog: Boolean, internalModal: Boolean, internalAppear: { type: Boolean, default: void 0 }, overlayStyle: [String, Object], onBeforeHide: Function, onAfterHide: Function, onHide: Function, unstableShowMask: { type: Boolean, default: void 0 } }), $0 = te({ name: "Modal", inheritAttrs: false, props: dm, slots: Object, setup(e) {
  const o = V(null), { mergedClsPrefixRef: t, namespaceRef: r, inlineThemeDisabled: n } = to(e), i = Ce("Modal", "-modal", cm, Na, e, t), l = rf(64), a = of(), s = Xt(), c = e.internalDialog ? ie(Qg, null) : null, d = e.internalModal ? ie(cf, null) : null, u = uf();
  function h(T) {
    const { onUpdateShow: m, "onUpdate:show": S, onHide: w } = e;
    m && Le(m, T), S && Le(S, T), w && !T && w(T);
  }
  function f() {
    const { onClose: T } = e;
    T ? Promise.resolve(T()).then((m) => {
      m !== false && h(false);
    }) : h(false);
  }
  function p() {
    const { onPositiveClick: T } = e;
    T ? Promise.resolve(T()).then((m) => {
      m !== false && h(false);
    }) : h(false);
  }
  function v() {
    const { onNegativeClick: T } = e;
    T ? Promise.resolve(T()).then((m) => {
      m !== false && h(false);
    }) : h(false);
  }
  function b() {
    const { onBeforeLeave: T, onBeforeHide: m } = e;
    T && Le(T), m && m();
  }
  function g() {
    const { onAfterLeave: T, onAfterHide: m } = e;
    T && Le(T), m && m();
  }
  function x(T) {
    var m;
    const { onMaskClick: S } = e;
    S && S(T), e.maskClosable && !((m = o.value) === null || m === void 0) && m.contains(mt(T)) && h(false);
  }
  function P(T) {
    var m;
    (m = e.onEsc) === null || m === void 0 || m.call(e), e.show && e.closeOnEsc && th(T) && (u.value || h(false));
  }
  ye(ql, { getMousePosition: () => {
    const T = c || d;
    if (T) {
      const { clickedRef: m, clickedPositionRef: S } = T;
      if (m.value && S.value) return S.value;
    }
    return l.value ? a.value : null;
  }, mergedClsPrefixRef: t, mergedThemeRef: i, isMountedRef: s, appearRef: ue(e, "internalAppear"), transformOriginRef: ue(e, "transformOrigin") });
  const y = I(() => {
    const { common: { cubicBezierEaseOut: T }, self: { boxShadow: m, color: S, textColor: w } } = i.value;
    return { "--n-bezier-ease-out": T, "--n-box-shadow": m, "--n-color": S, "--n-text-color": w };
  }), z = n ? co("theme-class", void 0, y, e) : void 0;
  return { mergedClsPrefix: t, namespace: r, isMounted: s, containerRef: o, presetProps: I(() => bt(e, am)), handleEsc: P, handleAfterLeave: g, handleClickoutside: x, handleBeforeLeave: b, doUpdateShow: h, handleNegativeClick: v, handlePositiveClick: p, handleCloseClick: f, cssVars: n ? void 0 : y, themeClass: z == null ? void 0 : z.themeClass, onRender: z == null ? void 0 : z.onRender };
}, render() {
  const { mergedClsPrefix: e } = this;
  return C(ea, { to: this.to, show: this.show }, { default: () => {
    var o;
    (o = this.onRender) === null || o === void 0 || o.call(this);
    const { showMask: t } = this;
    return Ho(C("div", { role: "none", ref: "containerRef", class: [`${e}-modal-container`, this.themeClass, this.namespace], style: this.cssVars }, C(sm, Object.assign({ style: this.overlayStyle }, this.$attrs, { ref: "bodyWrapper", displayDirective: this.displayDirective, show: this.show, preset: this.preset, autoFocus: this.autoFocus, trapFocus: this.trapFocus, draggable: this.draggable, blockScroll: this.blockScroll, maskHidden: !t }, this.presetProps, { onEsc: this.handleEsc, onClose: this.handleCloseClick, onNegativeClick: this.handleNegativeClick, onPositiveClick: this.handlePositiveClick, onBeforeLeave: this.handleBeforeLeave, onAfterEnter: this.onAfterEnter, onAfterLeave: this.handleAfterLeave, onClickoutside: t ? void 0 : this.handleClickoutside, renderMask: t ? () => {
      var r;
      return C(Co, { name: "fade-in-transition", key: "mask", appear: (r = this.internalAppear) !== null && r !== void 0 ? r : this.isMounted }, { default: () => this.show ? C("div", { "aria-hidden": true, ref: "containerRef", class: `${e}-modal-mask`, onClick: this.handleClickoutside }) : null });
    } : void 0 }), this.$slots)), [[dn, { zIndex: this.zIndex, enabled: this.show }]]);
  } });
} });
function um(e) {
  const { primaryColor: o, errorColor: t } = e;
  return { colorError: t, colorLoading: o, height: "2px" };
}
const fm = { name: "LoadingBar", common: F, self: um }, P0 = "n-message-api", z0 = "n-message-provider", hm = { margin: "0 0 8px 0", padding: "10px 20px", maxWidth: "720px", minWidth: "420px", iconMargin: "0 10px 0 0", closeMargin: "0 0 0 10px", closeSize: "20px", closeIconSize: "16px", iconSize: "20px", fontSize: "14px" };
function pm(e) {
  const { textColor2: o, closeIconColor: t, closeIconColorHover: r, closeIconColorPressed: n, infoColor: i, successColor: l, errorColor: a, warningColor: s, popoverColor: c, boxShadow2: d, primaryColor: u, lineHeight: h, borderRadius: f, closeColorHover: p, closeColorPressed: v } = e;
  return Object.assign(Object.assign({}, hm), { closeBorderRadius: f, textColor: o, textColorInfo: o, textColorSuccess: o, textColorError: o, textColorWarning: o, textColorLoading: o, color: c, colorInfo: c, colorSuccess: c, colorError: c, colorWarning: c, colorLoading: c, boxShadow: d, boxShadowInfo: d, boxShadowSuccess: d, boxShadowError: d, boxShadowWarning: d, boxShadowLoading: d, iconColor: o, iconColorInfo: i, iconColorSuccess: l, iconColorWarning: s, iconColorError: a, iconColorLoading: u, closeColorHover: p, closeColorPressed: v, closeIconColor: t, closeIconColorHover: r, closeIconColorPressed: n, closeColorHoverInfo: p, closeColorPressedInfo: v, closeIconColorInfo: t, closeIconColorHoverInfo: r, closeIconColorPressedInfo: n, closeColorHoverSuccess: p, closeColorPressedSuccess: v, closeIconColorSuccess: t, closeIconColorHoverSuccess: r, closeIconColorPressedSuccess: n, closeColorHoverError: p, closeColorPressedError: v, closeIconColorError: t, closeIconColorHoverError: r, closeIconColorPressedError: n, closeColorHoverWarning: p, closeColorPressedWarning: v, closeIconColorWarning: t, closeIconColorHoverWarning: r, closeIconColorPressedWarning: n, closeColorHoverLoading: p, closeColorPressedLoading: v, closeIconColorLoading: t, closeIconColorHoverLoading: r, closeIconColorPressedLoading: n, loadingColor: u, lineHeight: h, borderRadius: f, border: "0" });
}
const gm = { name: "Message", common: F, self: pm }, mm = { closeMargin: "16px 12px", closeSize: "20px", closeIconSize: "16px", width: "365px", padding: "16px", titleFontSize: "16px", metaFontSize: "12px", descriptionFontSize: "12px" };
function vm(e) {
  const { textColor2: o, successColor: t, infoColor: r, warningColor: n, errorColor: i, popoverColor: l, closeIconColor: a, closeIconColorHover: s, closeIconColorPressed: c, closeColorHover: d, closeColorPressed: u, textColor1: h, textColor3: f, borderRadius: p, fontWeightStrong: v, boxShadow2: b, lineHeight: g, fontSize: x } = e;
  return Object.assign(Object.assign({}, mm), { borderRadius: p, lineHeight: g, fontSize: x, headerFontWeight: v, iconColor: o, iconColorSuccess: t, iconColorInfo: r, iconColorWarning: n, iconColorError: i, color: l, textColor: o, closeIconColor: a, closeIconColorHover: s, closeIconColorPressed: c, closeBorderRadius: p, closeColorHover: d, closeColorPressed: u, headerTextColor: h, descriptionTextColor: f, actionTextColor: o, boxShadow: b });
}
const bm = { name: "Notification", common: F, peers: { Scrollbar: Ee }, self: vm };
function xm(e) {
  const { textColor1: o, dividerColor: t, fontWeightStrong: r } = e;
  return { textColor: o, color: t, fontWeight: r };
}
const Cm = { name: "Divider", common: F, self: xm };
function ym(e) {
  const { modalColor: o, textColor1: t, textColor2: r, boxShadow3: n, lineHeight: i, fontWeightStrong: l, dividerColor: a, closeColorHover: s, closeColorPressed: c, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: h, borderRadius: f, primaryColorHover: p } = e;
  return { bodyPadding: "16px 24px", borderRadius: f, headerPadding: "16px 24px", footerPadding: "16px 24px", color: o, textColor: r, titleTextColor: t, titleFontSize: "18px", titleFontWeight: l, boxShadow: n, lineHeight: i, headerBorderBottom: `1px solid ${a}`, footerBorderTop: `1px solid ${a}`, closeIconColor: d, closeIconColorHover: u, closeIconColorPressed: h, closeSize: "22px", closeIconSize: "18px", closeColorHover: s, closeColorPressed: c, closeBorderRadius: f, resizableTriggerColorHover: p };
}
const Sm = { name: "Drawer", common: F, peers: { Scrollbar: Ee }, self: ym }, wm = { actionMargin: "0 0 0 20px", actionMarginRtl: "0 20px 0 0" };
function $m() {
  return wm;
}
const Pm = { name: "DynamicInput", common: F, peers: { Input: We, Button: Ie }, self: $m }, zm = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function Tm() {
  return zm;
}
const ja = { name: "Space", self: Tm }, Em = { name: "DynamicTags", common: F, peers: { Input: We, Button: Ie, Tag: Ea, Space: ja }, self() {
  return { inputWidth: "64px" };
} }, Bm = { name: "Element", common: F }, Mm = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" };
function Rm() {
  return Mm;
}
const km = { name: "Flex", self: Rm }, Im = { name: "ButtonGroup", common: F }, Hm = { feedbackPadding: "4px 0 0 2px", feedbackHeightSmall: "24px", feedbackHeightMedium: "24px", feedbackHeightLarge: "26px", feedbackFontSizeSmall: "13px", feedbackFontSizeMedium: "14px", feedbackFontSizeLarge: "14px", labelFontSizeLeftSmall: "14px", labelFontSizeLeftMedium: "14px", labelFontSizeLeftLarge: "15px", labelFontSizeTopSmall: "13px", labelFontSizeTopMedium: "14px", labelFontSizeTopLarge: "14px", labelHeightSmall: "24px", labelHeightMedium: "26px", labelHeightLarge: "28px", labelPaddingVertical: "0 0 6px 2px", labelPaddingHorizontal: "0 12px 0 0", labelTextAlignVertical: "left", labelTextAlignHorizontal: "right", labelFontWeight: "400" };
function Fm(e) {
  const { heightSmall: o, heightMedium: t, heightLarge: r, textColor1: n, errorColor: i, warningColor: l, lineHeight: a, textColor3: s } = e;
  return Object.assign(Object.assign({}, Hm), { blankHeightSmall: o, blankHeightMedium: t, blankHeightLarge: r, lineHeight: a, labelTextColor: n, asteriskColor: i, feedbackTextColorError: i, feedbackTextColorWarning: l, feedbackTextColor: s });
}
const Om = { name: "Form", common: F, self: Fm };
function Lm(e) {
  const { primaryColor: o, successColor: t, warningColor: r, errorColor: n, infoColor: i, fontWeightStrong: l } = e;
  return { fontWeight: l, rotate: "252deg", colorStartPrimary: G(o, { alpha: 0.6 }), colorEndPrimary: o, colorStartInfo: G(i, { alpha: 0.6 }), colorEndInfo: i, colorStartWarning: G(r, { alpha: 0.6 }), colorEndWarning: r, colorStartError: G(n, { alpha: 0.6 }), colorEndError: n, colorStartSuccess: G(t, { alpha: 0.6 }), colorEndSuccess: t };
}
const Am = { name: "GradientText", common: F, self: Lm };
function Dm(e) {
  const { textColorDisabled: o } = e;
  return { iconColorDisabled: o };
}
const Wm = { name: "InputNumber", common: F, peers: { Button: Ie, Input: We }, self: Dm };
function _m() {
  return { inputWidthSmall: "24px", inputWidthMedium: "30px", inputWidthLarge: "36px", gapSmall: "8px", gapMedium: "8px", gapLarge: "8px" };
}
const Nm = { name: "InputOtp", common: F, peers: { Input: We }, self: _m };
function jm(e) {
  const { baseColor: o, textColor2: t, bodyColor: r, cardColor: n, dividerColor: i, actionColor: l, scrollbarColor: a, scrollbarColorHover: s, invertedColor: c } = e;
  return { textColor: t, textColorInverted: "#FFF", color: r, colorEmbedded: l, headerColor: n, headerColorInverted: c, footerColor: l, footerColorInverted: c, headerBorderColor: i, headerBorderColorInverted: c, footerBorderColor: i, footerBorderColorInverted: c, siderBorderColor: i, siderBorderColorInverted: c, siderColor: n, siderColorInverted: c, siderToggleButtonBorder: `1px solid ${i}`, siderToggleButtonColor: o, siderToggleButtonIconColor: t, siderToggleButtonIconColorInverted: t, siderToggleBarColor: A(r, a), siderToggleBarColorHover: A(r, s), __invertScrollbar: "true" };
}
const Vm = { name: "Layout", common: F, peers: { Scrollbar: Ee }, self: jm }, Gm = { name: "Row", common: F };
function Km(e) {
  const { textColor2: o, cardColor: t, modalColor: r, popoverColor: n, dividerColor: i, borderRadius: l, fontSize: a, hoverColor: s } = e;
  return { textColor: o, color: t, colorHover: s, colorModal: r, colorHoverModal: A(r, s), colorPopover: n, colorHoverPopover: A(n, s), borderColor: i, borderColorModal: A(r, i), borderColorPopover: A(n, i), borderRadius: l, fontSize: a };
}
const qm = { name: "List", common: F, self: Km };
function Um(e) {
  const { textColor2: o, modalColor: t, borderColor: r, fontSize: n, primaryColor: i } = e;
  return { loaderFontSize: n, loaderTextColor: o, loaderColor: t, loaderBorder: `1px solid ${r}`, loadingColor: i };
}
const Xm = { name: "Log", common: F, peers: { Scrollbar: Ee, Code: Ma }, self: Um };
function Ym(e) {
  const { boxShadow2: o } = e;
  return { menuBoxShadow: o };
}
const Zm = { name: "Mention", common: F, peers: { InternalSelectMenu: zt, Input: We }, self: Ym };
function Qm(e, o, t, r) {
  return { itemColorHoverInverted: "#0000", itemColorActiveInverted: o, itemColorActiveHoverInverted: o, itemColorActiveCollapsedInverted: o, itemTextColorInverted: e, itemTextColorHoverInverted: t, itemTextColorChildActiveInverted: t, itemTextColorChildActiveHoverInverted: t, itemTextColorActiveInverted: t, itemTextColorActiveHoverInverted: t, itemTextColorHorizontalInverted: e, itemTextColorHoverHorizontalInverted: t, itemTextColorChildActiveHorizontalInverted: t, itemTextColorChildActiveHoverHorizontalInverted: t, itemTextColorActiveHorizontalInverted: t, itemTextColorActiveHoverHorizontalInverted: t, itemIconColorInverted: e, itemIconColorHoverInverted: t, itemIconColorActiveInverted: t, itemIconColorActiveHoverInverted: t, itemIconColorChildActiveInverted: t, itemIconColorChildActiveHoverInverted: t, itemIconColorCollapsedInverted: e, itemIconColorHorizontalInverted: e, itemIconColorHoverHorizontalInverted: t, itemIconColorActiveHorizontalInverted: t, itemIconColorActiveHoverHorizontalInverted: t, itemIconColorChildActiveHorizontalInverted: t, itemIconColorChildActiveHoverHorizontalInverted: t, arrowColorInverted: e, arrowColorHoverInverted: t, arrowColorActiveInverted: t, arrowColorActiveHoverInverted: t, arrowColorChildActiveInverted: t, arrowColorChildActiveHoverInverted: t, groupTextColorInverted: r };
}
function Jm(e) {
  const { borderRadius: o, textColor3: t, primaryColor: r, textColor2: n, textColor1: i, fontSize: l, dividerColor: a, hoverColor: s, primaryColorHover: c } = e;
  return Object.assign({ borderRadius: o, color: "#0000", groupTextColor: t, itemColorHover: s, itemColorActive: G(r, { alpha: 0.1 }), itemColorActiveHover: G(r, { alpha: 0.1 }), itemColorActiveCollapsed: G(r, { alpha: 0.1 }), itemTextColor: n, itemTextColorHover: n, itemTextColorActive: r, itemTextColorActiveHover: r, itemTextColorChildActive: r, itemTextColorChildActiveHover: r, itemTextColorHorizontal: n, itemTextColorHoverHorizontal: c, itemTextColorActiveHorizontal: r, itemTextColorActiveHoverHorizontal: r, itemTextColorChildActiveHorizontal: r, itemTextColorChildActiveHoverHorizontal: r, itemIconColor: i, itemIconColorHover: i, itemIconColorActive: r, itemIconColorActiveHover: r, itemIconColorChildActive: r, itemIconColorChildActiveHover: r, itemIconColorCollapsed: i, itemIconColorHorizontal: i, itemIconColorHoverHorizontal: c, itemIconColorActiveHorizontal: r, itemIconColorActiveHoverHorizontal: r, itemIconColorChildActiveHorizontal: r, itemIconColorChildActiveHoverHorizontal: r, itemHeight: "42px", arrowColor: n, arrowColorHover: n, arrowColorActive: r, arrowColorActiveHover: r, arrowColorChildActive: r, arrowColorChildActiveHover: r, colorInverted: "#0000", borderColorHorizontal: "#0000", fontSize: l, dividerColor: a }, Qm("#BBB", r, "#FFF", "#AAA"));
}
const ev = { name: "Menu", common: F, peers: { Tooltip: Tt, Dropdown: er }, self: Jm }, ov = { titleFontSize: "18px", backSize: "22px" };
function tv(e) {
  const { textColor1: o, textColor2: t, textColor3: r, fontSize: n, fontWeightStrong: i, primaryColorHover: l, primaryColorPressed: a } = e;
  return Object.assign(Object.assign({}, ov), { titleFontWeight: i, fontSize: n, titleTextColor: o, backColor: t, backColorHover: l, backColorPressed: a, subtitleTextColor: r });
}
const rv = { name: "PageHeader", common: F, self: tv }, nv = { iconSize: "22px" };
function iv(e) {
  const { fontSize: o, warningColor: t } = e;
  return Object.assign(Object.assign({}, nv), { fontSize: o, iconColor: t });
}
const lv = { name: "Popconfirm", common: F, peers: { Button: Ie, Popover: $o }, self: iv };
function av(e) {
  const { infoColor: o, successColor: t, warningColor: r, errorColor: n, textColor2: i, progressRailColor: l, fontSize: a, fontWeight: s } = e;
  return { fontSize: a, fontSizeCircle: "28px", fontWeightCircle: s, railColor: l, railHeight: "8px", iconSizeCircle: "36px", iconSizeLine: "18px", iconColor: o, iconColorInfo: o, iconColorSuccess: t, iconColorWarning: r, iconColorError: n, textColorCircle: i, textColorLineInner: "rgb(255, 255, 255)", textColorLineOuter: i, fillColor: o, fillColorInfo: o, fillColorSuccess: t, fillColorWarning: r, fillColorError: n, lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)" };
}
const Va = { name: "Progress", common: F, self: av };
function sv(e) {
  const { railColor: o } = e;
  return { itemColor: o, itemColorActive: "#FFCC33", sizeSmall: "16px", sizeMedium: "20px", sizeLarge: "24px" };
}
const cv = { name: "Rate", common: F, self: sv }, dv = { titleFontSizeSmall: "26px", titleFontSizeMedium: "32px", titleFontSizeLarge: "40px", titleFontSizeHuge: "48px", fontSizeSmall: "14px", fontSizeMedium: "14px", fontSizeLarge: "15px", fontSizeHuge: "16px", iconSizeSmall: "64px", iconSizeMedium: "80px", iconSizeLarge: "100px", iconSizeHuge: "125px", iconColor418: void 0, iconColor404: void 0, iconColor403: void 0, iconColor500: void 0 };
function uv(e) {
  const { textColor2: o, textColor1: t, errorColor: r, successColor: n, infoColor: i, warningColor: l, lineHeight: a, fontWeightStrong: s } = e;
  return Object.assign(Object.assign({}, dv), { lineHeight: a, titleFontWeight: s, titleTextColor: t, textColor: o, iconColorError: r, iconColorSuccess: n, iconColorInfo: i, iconColorWarning: l });
}
const fv = { name: "Result", common: F, self: uv }, hv = { railHeight: "4px", railWidthVertical: "4px", handleSize: "18px", dotHeight: "8px", dotWidth: "8px", dotBorderRadius: "4px" };
function pv(e) {
  const o = "rgba(0, 0, 0, .85)", t = "0 2px 8px 0 rgba(0, 0, 0, 0.12)", { railColor: r, primaryColor: n, baseColor: i, cardColor: l, modalColor: a, popoverColor: s, borderRadius: c, fontSize: d, opacityDisabled: u } = e;
  return Object.assign(Object.assign({}, hv), { fontSize: d, markFontSize: d, railColor: r, railColorHover: r, fillColor: n, fillColorHover: n, opacityDisabled: u, handleColor: "#FFF", dotColor: l, dotColorModal: a, dotColorPopover: s, handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", indicatorColor: o, indicatorBoxShadow: t, indicatorTextColor: i, indicatorBorderRadius: c, dotBorder: `2px solid ${r}`, dotBorderActive: `2px solid ${n}`, dotBoxShadow: "" });
}
const gv = { name: "Slider", common: F, self: pv };
function mv(e) {
  const { opacityDisabled: o, heightTiny: t, heightSmall: r, heightMedium: n, heightLarge: i, heightHuge: l, primaryColor: a, fontSize: s } = e;
  return { fontSize: s, textColor: a, sizeTiny: t, sizeSmall: r, sizeMedium: n, sizeLarge: i, sizeHuge: l, color: a, opacitySpinning: o };
}
const vv = { name: "Spin", common: F, self: mv };
function bv(e) {
  const { textColor2: o, textColor3: t, fontSize: r, fontWeight: n } = e;
  return { labelFontSize: r, labelFontWeight: n, valueFontWeight: n, valueFontSize: "24px", labelTextColor: t, valuePrefixTextColor: o, valueSuffixTextColor: o, valueTextColor: o };
}
const xv = { name: "Statistic", common: F, self: bv }, Cv = { stepHeaderFontSizeSmall: "14px", stepHeaderFontSizeMedium: "16px", indicatorIndexFontSizeSmall: "14px", indicatorIndexFontSizeMedium: "16px", indicatorSizeSmall: "22px", indicatorSizeMedium: "28px", indicatorIconSizeSmall: "14px", indicatorIconSizeMedium: "18px" };
function yv(e) {
  const { fontWeightStrong: o, baseColor: t, textColorDisabled: r, primaryColor: n, errorColor: i, textColor1: l, textColor2: a } = e;
  return Object.assign(Object.assign({}, Cv), { stepHeaderFontWeight: o, indicatorTextColorProcess: t, indicatorTextColorWait: r, indicatorTextColorFinish: n, indicatorTextColorError: i, indicatorBorderColorProcess: n, indicatorBorderColorWait: r, indicatorBorderColorFinish: n, indicatorBorderColorError: i, indicatorColorProcess: n, indicatorColorWait: "#0000", indicatorColorFinish: "#0000", indicatorColorError: "#0000", splitorColorProcess: r, splitorColorWait: r, splitorColorFinish: n, splitorColorError: r, headerTextColorProcess: l, headerTextColorWait: r, headerTextColorFinish: r, headerTextColorError: i, descriptionTextColorProcess: a, descriptionTextColorWait: r, descriptionTextColorFinish: r, descriptionTextColorError: i });
}
const Sv = { name: "Steps", common: F, self: yv }, wv = { buttonHeightSmall: "14px", buttonHeightMedium: "18px", buttonHeightLarge: "22px", buttonWidthSmall: "14px", buttonWidthMedium: "18px", buttonWidthLarge: "22px", buttonWidthPressedSmall: "20px", buttonWidthPressedMedium: "24px", buttonWidthPressedLarge: "28px", railHeightSmall: "18px", railHeightMedium: "22px", railHeightLarge: "26px", railWidthSmall: "32px", railWidthMedium: "40px", railWidthLarge: "48px" };
function $v(e) {
  const { primaryColor: o, opacityDisabled: t, borderRadius: r, textColor3: n } = e;
  return Object.assign(Object.assign({}, wv), { iconColor: n, textColor: "white", loadingColor: o, opacityDisabled: t, railColor: "rgba(0, 0, 0, .14)", railColorActive: o, buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)", buttonColor: "#FFF", railBorderRadiusSmall: r, railBorderRadiusMedium: r, railBorderRadiusLarge: r, buttonBorderRadiusSmall: r, buttonBorderRadiusMedium: r, buttonBorderRadiusLarge: r, boxShadowFocus: `0 0 0 2px ${G(o, { alpha: 0.2 })}` });
}
const Pv = { name: "Switch", common: F, self: $v }, zv = { thPaddingSmall: "6px", thPaddingMedium: "12px", thPaddingLarge: "12px", tdPaddingSmall: "6px", tdPaddingMedium: "12px", tdPaddingLarge: "12px" };
function Tv(e) {
  const { dividerColor: o, cardColor: t, modalColor: r, popoverColor: n, tableHeaderColor: i, tableColorStriped: l, textColor1: a, textColor2: s, borderRadius: c, fontWeightStrong: d, lineHeight: u, fontSizeSmall: h, fontSizeMedium: f, fontSizeLarge: p } = e;
  return Object.assign(Object.assign({}, zv), { fontSizeSmall: h, fontSizeMedium: f, fontSizeLarge: p, lineHeight: u, borderRadius: c, borderColor: A(t, o), borderColorModal: A(r, o), borderColorPopover: A(n, o), tdColor: t, tdColorModal: r, tdColorPopover: n, tdColorStriped: A(t, l), tdColorStripedModal: A(r, l), tdColorStripedPopover: A(n, l), thColor: A(t, i), thColorModal: A(r, i), thColorPopover: A(n, i), thTextColor: a, tdTextColor: s, thFontWeight: d });
}
const Ev = { name: "Table", common: F, self: Tv }, Bv = { tabFontSizeSmall: "14px", tabFontSizeMedium: "14px", tabFontSizeLarge: "16px", tabGapSmallLine: "36px", tabGapMediumLine: "36px", tabGapLargeLine: "36px", tabGapSmallLineVertical: "8px", tabGapMediumLineVertical: "8px", tabGapLargeLineVertical: "8px", tabPaddingSmallLine: "6px 0", tabPaddingMediumLine: "10px 0", tabPaddingLargeLine: "14px 0", tabPaddingVerticalSmallLine: "6px 12px", tabPaddingVerticalMediumLine: "8px 16px", tabPaddingVerticalLargeLine: "10px 20px", tabGapSmallBar: "36px", tabGapMediumBar: "36px", tabGapLargeBar: "36px", tabGapSmallBarVertical: "8px", tabGapMediumBarVertical: "8px", tabGapLargeBarVertical: "8px", tabPaddingSmallBar: "4px 0", tabPaddingMediumBar: "6px 0", tabPaddingLargeBar: "10px 0", tabPaddingVerticalSmallBar: "6px 12px", tabPaddingVerticalMediumBar: "8px 16px", tabPaddingVerticalLargeBar: "10px 20px", tabGapSmallCard: "4px", tabGapMediumCard: "4px", tabGapLargeCard: "4px", tabGapSmallCardVertical: "4px", tabGapMediumCardVertical: "4px", tabGapLargeCardVertical: "4px", tabPaddingSmallCard: "8px 16px", tabPaddingMediumCard: "10px 20px", tabPaddingLargeCard: "12px 24px", tabPaddingSmallSegment: "4px 0", tabPaddingMediumSegment: "6px 0", tabPaddingLargeSegment: "8px 0", tabPaddingVerticalLargeSegment: "0 8px", tabPaddingVerticalSmallCard: "8px 12px", tabPaddingVerticalMediumCard: "10px 16px", tabPaddingVerticalLargeCard: "12px 20px", tabPaddingVerticalSmallSegment: "0 4px", tabPaddingVerticalMediumSegment: "0 6px", tabGapSmallSegment: "0", tabGapMediumSegment: "0", tabGapLargeSegment: "0", tabGapSmallSegmentVertical: "0", tabGapMediumSegmentVertical: "0", tabGapLargeSegmentVertical: "0", panePaddingSmall: "8px 0 0 0", panePaddingMedium: "12px 0 0 0", panePaddingLarge: "16px 0 0 0", closeSize: "18px", closeIconSize: "14px" };
function Mv(e) {
  const { textColor2: o, primaryColor: t, textColorDisabled: r, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: l, closeColorHover: a, closeColorPressed: s, tabColor: c, baseColor: d, dividerColor: u, fontWeight: h, textColor1: f, borderRadius: p, fontSize: v, fontWeightStrong: b } = e;
  return Object.assign(Object.assign({}, Bv), { colorSegment: c, tabFontSizeCard: v, tabTextColorLine: f, tabTextColorActiveLine: t, tabTextColorHoverLine: t, tabTextColorDisabledLine: r, tabTextColorSegment: f, tabTextColorActiveSegment: o, tabTextColorHoverSegment: o, tabTextColorDisabledSegment: r, tabTextColorBar: f, tabTextColorActiveBar: t, tabTextColorHoverBar: t, tabTextColorDisabledBar: r, tabTextColorCard: f, tabTextColorHoverCard: f, tabTextColorActiveCard: t, tabTextColorDisabledCard: r, barColor: t, closeIconColor: n, closeIconColorHover: i, closeIconColorPressed: l, closeColorHover: a, closeColorPressed: s, closeBorderRadius: p, tabColor: c, tabColorSegment: d, tabBorderColor: u, tabFontWeightActive: h, tabFontWeight: h, tabBorderRadius: p, paneTextColor: o, fontWeightStrong: b });
}
const Rv = { name: "Tabs", common: F, self: Mv };
function kv(e) {
  const { textColor1: o, textColor2: t, fontWeightStrong: r, fontSize: n } = e;
  return { fontSize: n, titleTextColor: o, textColor: t, titleFontWeight: r };
}
const Iv = { name: "Thing", common: F, self: kv }, Hv = { titleMarginMedium: "0 0 6px 0", titleMarginLarge: "-2px 0 6px 0", titleFontSizeMedium: "14px", titleFontSizeLarge: "16px", iconSizeMedium: "14px", iconSizeLarge: "14px" };
function Fv(e) {
  const { textColor3: o, infoColor: t, errorColor: r, successColor: n, warningColor: i, textColor1: l, textColor2: a, railColor: s, fontWeightStrong: c, fontSize: d } = e;
  return Object.assign(Object.assign({}, Hv), { contentFontSize: d, titleFontWeight: c, circleBorder: `2px solid ${o}`, circleBorderInfo: `2px solid ${t}`, circleBorderError: `2px solid ${r}`, circleBorderSuccess: `2px solid ${n}`, circleBorderWarning: `2px solid ${i}`, iconColor: o, iconColorInfo: t, iconColorError: r, iconColorSuccess: n, iconColorWarning: i, titleTextColor: l, contentTextColor: a, metaTextColor: o, lineColor: s });
}
const Ov = { name: "Timeline", common: F, self: Fv }, Lv = { extraFontSizeSmall: "12px", extraFontSizeMedium: "12px", extraFontSizeLarge: "14px", titleFontSizeSmall: "14px", titleFontSizeMedium: "16px", titleFontSizeLarge: "16px", closeSize: "20px", closeIconSize: "16px", headerHeightSmall: "44px", headerHeightMedium: "44px", headerHeightLarge: "50px" };
function Av(e) {
  const { fontWeight: o, fontSizeLarge: t, fontSizeMedium: r, fontSizeSmall: n, heightLarge: i, heightMedium: l, borderRadius: a, cardColor: s, tableHeaderColor: c, textColor1: d, textColorDisabled: u, textColor2: h, textColor3: f, borderColor: p, hoverColor: v, closeColorHover: b, closeColorPressed: g, closeIconColor: x, closeIconColorHover: P, closeIconColorPressed: y } = e;
  return Object.assign(Object.assign({}, Lv), { itemHeightSmall: l, itemHeightMedium: l, itemHeightLarge: i, fontSizeSmall: n, fontSizeMedium: r, fontSizeLarge: t, borderRadius: a, dividerColor: p, borderColor: p, listColor: s, headerColor: A(s, c), titleTextColor: d, titleTextColorDisabled: u, extraTextColor: f, extraTextColorDisabled: u, itemTextColor: h, itemTextColorDisabled: u, itemColorPending: v, titleFontWeight: o, closeColorHover: b, closeColorPressed: g, closeIconColor: x, closeIconColorHover: P, closeIconColorPressed: y });
}
const Dv = { name: "Transfer", common: F, peers: { Checkbox: tt, Scrollbar: Ee, Input: We, Empty: wo, Button: Ie }, self: Av };
function Wv(e) {
  const { borderRadiusSmall: o, dividerColor: t, hoverColor: r, pressedColor: n, primaryColor: i, textColor3: l, textColor2: a, textColorDisabled: s, fontSize: c } = e;
  return { fontSize: c, lineHeight: "1.5", nodeHeight: "30px", nodeWrapperPadding: "3px 0", nodeBorderRadius: o, nodeColorHover: r, nodeColorPressed: n, nodeColorActive: G(i, { alpha: 0.1 }), arrowColor: l, nodeTextColor: a, nodeTextColorDisabled: s, loadingColor: i, dropMarkColor: i, lineColor: t };
}
const Ga = { name: "Tree", common: F, peers: { Checkbox: tt, Scrollbar: Ee, Empty: wo }, self: Wv };
function _v(e) {
  const { popoverColor: o, boxShadow2: t, borderRadius: r, heightMedium: n, dividerColor: i, textColor2: l } = e;
  return { menuPadding: "4px", menuColor: o, menuBoxShadow: t, menuBorderRadius: r, menuHeight: `calc(${n} * 7.6)`, actionDividerColor: i, actionTextColor: l, actionPadding: "8px 12px", headerDividerColor: i, headerTextColor: l, headerPadding: "8px 12px" };
}
const Nv = { name: "TreeSelect", common: F, peers: { Tree: Ga, Empty: wo, InternalSelection: pn }, self: _v }, jv = { headerFontSize1: "30px", headerFontSize2: "22px", headerFontSize3: "18px", headerFontSize4: "16px", headerFontSize5: "16px", headerFontSize6: "16px", headerMargin1: "28px 0 20px 0", headerMargin2: "28px 0 20px 0", headerMargin3: "28px 0 20px 0", headerMargin4: "28px 0 18px 0", headerMargin5: "28px 0 18px 0", headerMargin6: "28px 0 18px 0", headerPrefixWidth1: "16px", headerPrefixWidth2: "16px", headerPrefixWidth3: "12px", headerPrefixWidth4: "12px", headerPrefixWidth5: "12px", headerPrefixWidth6: "12px", headerBarWidth1: "4px", headerBarWidth2: "4px", headerBarWidth3: "3px", headerBarWidth4: "3px", headerBarWidth5: "3px", headerBarWidth6: "3px", pMargin: "16px 0 16px 0", liMargin: ".25em 0 0 0", olPadding: "0 0 0 2em", ulPadding: "0 0 0 2em" };
function Vv(e) {
  const { primaryColor: o, textColor2: t, borderColor: r, lineHeight: n, fontSize: i, borderRadiusSmall: l, dividerColor: a, fontWeightStrong: s, textColor1: c, textColor3: d, infoColor: u, warningColor: h, errorColor: f, successColor: p, codeColor: v } = e;
  return Object.assign(Object.assign({}, jv), { aTextColor: o, blockquoteTextColor: t, blockquotePrefixColor: r, blockquoteLineHeight: n, blockquoteFontSize: i, codeBorderRadius: l, liTextColor: t, liLineHeight: n, liFontSize: i, hrColor: a, headerFontWeight: s, headerTextColor: c, pTextColor: t, pTextColor1Depth: c, pTextColor2Depth: t, pTextColor3Depth: d, pLineHeight: n, pFontSize: i, headerBarColor: o, headerBarColorPrimary: o, headerBarColorInfo: u, headerBarColorError: f, headerBarColorWarning: h, headerBarColorSuccess: p, textColor: t, textColor1Depth: c, textColor2Depth: t, textColor3Depth: d, textColorPrimary: o, textColorInfo: u, textColorSuccess: p, textColorWarning: h, textColorError: f, codeTextColor: t, codeColor: v, codeBorder: "1px solid #0000" });
}
const Ka = { name: "Typography", common: F, self: Vv };
function Gv(e) {
  const { iconColor: o, primaryColor: t, errorColor: r, textColor2: n, successColor: i, opacityDisabled: l, actionColor: a, borderColor: s, hoverColor: c, lineHeight: d, borderRadius: u, fontSize: h } = e;
  return { fontSize: h, lineHeight: d, borderRadius: u, draggerColor: a, draggerBorder: `1px dashed ${s}`, draggerBorderHover: `1px dashed ${t}`, itemColorHover: c, itemColorHoverError: G(r, { alpha: 0.06 }), itemTextColor: n, itemTextColorError: r, itemTextColorSuccess: i, itemIconColor: o, itemDisabledOpacity: l, itemBorderImageCardError: `1px solid ${r}`, itemBorderImageCard: `1px solid ${s}` };
}
const Kv = { name: "Upload", common: F, peers: { Button: Ie, Progress: Va }, self: Gv }, qv = { name: "Watermark", common: F, self(e) {
  const { fontFamily: o } = e;
  return { fontFamily: o };
} };
function Uv(e) {
  const { popoverColor: o, dividerColor: t, borderRadius: r } = e;
  return { color: o, buttonBorderColor: t, borderRadiusSquare: r, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)" };
}
const Xv = { name: "FloatButtonGroup", common: F, self: Uv };
function Yv(e) {
  const { popoverColor: o, textColor2: t, buttonColor2Hover: r, buttonColor2Pressed: n, primaryColor: i, primaryColorHover: l, primaryColorPressed: a, borderRadius: s } = e;
  return { color: o, colorHover: r, colorPressed: n, colorPrimary: i, colorPrimaryHover: l, colorPrimaryPressed: a, textColor: t, boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)", boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)", boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)", textColorPrimary: "#fff", borderRadiusSquare: s };
}
const Zv = { name: "FloatButton", common: F, self: Yv };
function Qv(e) {
  const { borderRadius: o, fontSizeMini: t, fontSizeTiny: r, fontSizeSmall: n, fontWeight: i, textColor2: l, cardColor: a, buttonColor2Hover: s } = e;
  return { activeColors: ["#9be9a8", "#40c463", "#30a14e", "#216e39"], borderRadius: o, borderColor: a, textColor: l, mininumColor: s, fontWeight: i, loadingColorStart: "rgba(0, 0, 0, 0.06)", loadingColorEnd: "rgba(0, 0, 0, 0.12)", rectSizeSmall: "10px", rectSizeMedium: "11px", rectSizeLarge: "12px", borderRadiusSmall: "2px", borderRadiusMedium: "2px", borderRadiusLarge: "2px", xGapSmall: "2px", xGapMedium: "3px", xGapLarge: "3px", yGapSmall: "2px", yGapMedium: "3px", yGapLarge: "3px", fontSizeSmall: r, fontSizeMedium: t, fontSizeLarge: n };
}
const Jv = { name: "Heatmap", common: F, self: Qv };
function eb(e) {
  const { primaryColor: o, baseColor: t } = e;
  return { color: o, iconColor: t };
}
const ob = { name: "IconWrapper", common: F, self: eb };
function tb() {
  return { toolbarIconColor: "rgba(255, 255, 255, .9)", toolbarColor: "rgba(0, 0, 0, .35)", toolbarBoxShadow: "none", toolbarBorderRadius: "24px" };
}
const rb = { name: "Image", common: F, peers: { Tooltip: Tt }, self: tb }, nb = { extraFontSize: "12px", width: "440px" };
function ib(e) {
  const { fontWeight: o, iconColorDisabled: t, iconColor: r, fontSizeLarge: n, fontSizeMedium: i, fontSizeSmall: l, heightLarge: a, heightMedium: s, heightSmall: c, borderRadius: d, cardColor: u, tableHeaderColor: h, textColor1: f, textColorDisabled: p, textColor2: v, borderColor: b, hoverColor: g } = e;
  return Object.assign(Object.assign({}, nb), { itemHeightSmall: c, itemHeightMedium: s, itemHeightLarge: a, fontSizeSmall: l, fontSizeMedium: i, fontSizeLarge: n, borderRadius: d, borderColor: b, listColor: u, headerColor: A(u, h), titleTextColor: f, titleTextColorDisabled: p, extraTextColor: v, filterDividerColor: b, itemTextColor: v, itemTextColorDisabled: p, itemColorPending: g, titleFontWeight: o, iconColor: r, iconColorDisabled: t });
}
const lb = { name: "Transfer", common: F, peers: { Checkbox: tt, Scrollbar: Ee, Input: We, Empty: wo, Button: Ie }, self: ib };
function ab() {
  return {};
}
const sb = { name: "Marquee", common: F, self: ab };
function cb(e) {
  return { borderRadius: e.borderRadius };
}
const db = { name: "QrCode", common: F, self: cb };
function ub(e) {
  const { heightSmall: o, heightMedium: t, heightLarge: r, borderRadius: n } = e;
  return { color: "#eee", colorEnd: "#ddd", borderRadius: n, heightSmall: o, heightMedium: t, heightLarge: r };
}
const fb = { name: "Skeleton", common: F, self: ub };
function hb(e) {
  const { primaryColorHover: o, borderColor: t } = e;
  return { resizableTriggerColorHover: o, resizableTriggerColor: t };
}
const pb = { name: "Split", common: F, self: hb }, gb = Q("text", `
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
 `)]), mb = Object.assign(Object.assign({}, Ce.props), { code: Boolean, type: { type: String, default: "default" }, delete: Boolean, strong: Boolean, italic: Boolean, underline: Boolean, depth: [String, Number], tag: String, as: { type: String, validator: () => true, default: void 0 } }), T0 = te({ name: "Text", props: mb, setup(e) {
  const { mergedClsPrefixRef: o, inlineThemeDisabled: t } = to(e), r = Ce("Typography", "-text", gb, Ka, e, o), n = I(() => {
    const { depth: l, type: a } = e, s = a === "default" ? l === void 0 ? "textColor" : `textColor${l}Depth` : Z("textColor", a), { common: { fontWeightStrong: c, fontFamilyMono: d, cubicBezierEaseInOut: u }, self: { codeTextColor: h, codeBorderRadius: f, codeColor: p, codeBorder: v, [s]: b } } = r.value;
    return { "--n-bezier": u, "--n-text-color": b, "--n-font-weight-strong": c, "--n-font-famliy-mono": d, "--n-code-border-radius": f, "--n-code-text-color": h, "--n-code-color": p, "--n-code-border": v };
  }), i = t ? co("text", I(() => `${e.type[0]}${e.depth || ""}`), n, e) : void 0;
  return { mergedClsPrefix: o, compitableTag: Kl(e, ["as", "tag"]), cssVars: t ? void 0 : n, themeClass: i == null ? void 0 : i.themeClass, onRender: i == null ? void 0 : i.onRender };
}, render() {
  var e, o, t;
  const { mergedClsPrefix: r } = this;
  (e = this.onRender) === null || e === void 0 || e.call(this);
  const n = [`${r}-text`, this.themeClass, { [`${r}-text--code`]: this.code, [`${r}-text--delete`]: this.delete, [`${r}-text--strong`]: this.strong, [`${r}-text--italic`]: this.italic, [`${r}-text--underline`]: this.underline }], i = (t = (o = this.$slots).default) === null || t === void 0 ? void 0 : t.call(o);
  return this.code ? C("code", { class: n, style: this.cssVars }, this.delete ? C("del", null, i) : i) : this.delete ? C("del", { class: n, style: this.cssVars }, i) : C(this.compitableTag || "span", { class: n, style: this.cssVars }, i);
} }), vb = () => ({}), bb = { name: "Equation", common: F, self: vb }, E0 = { name: "light", common: F, Alert: Cp, Anchor: Pp, AutoComplete: Rp, Avatar: Ba, AvatarGroup: Hp, BackTop: Lp, Badge: Dp, Breadcrumb: Np, Button: Ie, ButtonGroup: Im, Calendar: Yp, Card: gn, Carousel: ng, Cascader: sg, Checkbox: tt, Code: Ma, Collapse: ug, CollapseTransition: hg, ColorPicker: gg, DataTable: Bg, DatePicker: Ug, Descriptions: Zg, Dialog: bn, Divider: Cm, Drawer: Sm, Dropdown: er, DynamicInput: Pm, DynamicTags: Em, Element: Bm, Empty: wo, Equation: bb, Ellipsis: Ha, Flex: km, Form: Om, GradientText: Am, Heatmap: Jv, Icon: La, IconWrapper: ob, Image: rb, Input: We, InputNumber: Wm, InputOtp: Nm, Layout: Vm, LegacyTransfer: lb, List: qm, LoadingBar: fm, Log: Xm, Menu: ev, Mention: Zm, Message: gm, Modal: Na, Notification: bm, PageHeader: rv, Pagination: Ia, Popconfirm: lv, Popover: $o, Popselect: Ra, Progress: Va, QrCode: db, Radio: Fa, Rate: cv, Row: Gm, Result: fv, Scrollbar: Ee, Skeleton: fb, Select: ka, Slider: gv, Space: ja, Spin: vv, Statistic: xv, Steps: Sv, Switch: Pv, Table: Ev, Tabs: Rv, Tag: Ea, Thing: Iv, TimePicker: _a, Timeline: Ov, Tooltip: Tt, Transfer: Dv, Tree: Ga, TreeSelect: Nv, Typography: Ka, Upload: Kv, Watermark: qv, Split: pb, FloatButton: Zv, FloatButtonGroup: Xv, Marquee: sb };
class xb {
  constructor() {
    __publicField(this, "storageProvider", null);
    __publicField(this, "initialized", false);
  }
  async init() {
    if (this.initialized) return;
    const o = Is();
    if (o.isErr()) throw o.error;
    const t = o.value.getStorage();
    if (t.isErr()) throw t.error;
    this.storageProvider = t.value;
    const r = await this.storageProvider.init();
    if (r.isErr()) throw r.error;
    this.initialized = true;
  }
  async set(o, t) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const r = await this.storageProvider.set(o, t);
    if (r.isErr()) throw r.error;
  }
  async get(o) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const t = await this.storageProvider.get(o);
    if (t.isErr()) throw t.error;
    return t.value;
  }
  async save() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const o = await this.storageProvider.save();
    if (o.isErr()) throw o.error;
  }
  async exportToJson() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const o = await this.storageProvider.exportToJson();
    if (o.isErr()) throw o.error;
    return o.value;
  }
  async clear() {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const o = await this.storageProvider.clear();
    if (o.isErr()) throw o.error;
  }
  async remove(o) {
    if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
    const t = await this.storageProvider.remove(o);
    if (t.isErr()) throw t.error;
  }
}
const Ae = new xb(), Cb = Ae.set.bind(Ae), yb = Ae.get.bind(Ae), Sb = Ae.save.bind(Ae);
Ae.init.bind(Ae);
Ae.exportToJson.bind(Ae);
Ae.clear.bind(Ae);
Ae.remove.bind(Ae);
const B0 = Hs("settings", () => {
  const e = V({ theme: "system", interfaceLanguage: "en", mapLanguage: "interface", watchCompatibilityMode: true, geolocationCorrection: false });
  async function o() {
    const r = await yb("settings");
    r && (e.value = { ...e.value, ...r });
  }
  async function t() {
    await Cb("settings", JSON.parse(JSON.stringify(e.value))), await Sb();
  }
  return Se(e, t, { deep: true }), { settings: e, init: o };
});
function wb(e) {
  return Fs() ? (Os(e), true) : false;
}
const Sr = /* @__PURE__ */ new WeakMap(), $b = (...e) => {
  var o;
  const t = e[0], r = (o = Qo()) == null ? void 0 : o.proxy;
  if (r == null && !tl()) throw new Error("injectLocal must be called in setup");
  return r && Sr.has(r) && t in Sr.get(r) ? Sr.get(r)[t] : ie(...e);
}, Pb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const zb = Object.prototype.toString, Tb = (e) => zb.call(e) === "[object Object]";
function Vi(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function wr(e) {
  return Array.isArray(e) ? e : [e];
}
function Eb(e) {
  return Qo();
}
function Bb(e, o = true, t) {
  Eb() ? Ue(e, t) : o ? e() : Io(e);
}
function Mb(e, o, t) {
  return Se(e, o, { ...t, immediate: true });
}
const yn = Pb ? window : void 0;
function Rb(e) {
  var o;
  const t = Ko(e);
  return (o = t == null ? void 0 : t.$el) != null ? o : t;
}
function Gr(...e) {
  const o = [], t = () => {
    o.forEach((a) => a()), o.length = 0;
  }, r = (a, s, c, d) => (a.addEventListener(s, c, d), () => a.removeEventListener(s, c, d)), n = I(() => {
    const a = wr(Ko(e[0])).filter((s) => s != null);
    return a.every((s) => typeof s != "string") ? a : void 0;
  }), i = Mb(() => {
    var a, s;
    return [(s = (a = n.value) == null ? void 0 : a.map((c) => Rb(c))) != null ? s : [yn].filter((c) => c != null), wr(Ko(n.value ? e[1] : e[0])), wr(Go(n.value ? e[2] : e[1])), Ko(n.value ? e[3] : e[2])];
  }, ([a, s, c, d]) => {
    if (t(), !(a == null ? void 0 : a.length) || !(s == null ? void 0 : s.length) || !(c == null ? void 0 : c.length)) return;
    const u = Tb(d) ? { ...d } : d;
    o.push(...a.flatMap((h) => s.flatMap((f) => c.map((p) => r(h, f, p, u)))));
  }, { flush: "post" }), l = () => {
    i(), t();
  };
  return wb(t), l;
}
function kb() {
  const e = lo(false), o = Qo();
  return o && Ue(() => {
    e.value = true;
  }, o), e;
}
function Ib(e) {
  const o = kb();
  return I(() => (o.value, !!e()));
}
const Hb = Symbol("vueuse-ssr-width");
function Fb() {
  const e = tl() ? $b(Hb, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Ob(e, o = {}) {
  const { window: t = yn, ssrWidth: r = Fb() } = o, n = Ib(() => t && "matchMedia" in t && typeof t.matchMedia == "function"), i = lo(typeof r == "number"), l = lo(), a = lo(false), s = (c) => {
    a.value = c.matches;
  };
  return Jo(() => {
    if (i.value) {
      i.value = !n.value;
      const c = Ko(e).split(",");
      a.value = c.some((d) => {
        const u = d.includes("not all"), h = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), f = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(h || f);
        return h && p && (p = r >= Vi(h[1])), f && p && (p = r <= Vi(f[1])), u ? !p : p;
      });
      return;
    }
    n.value && (l.value = t.matchMedia(Ko(e)), a.value = l.value.matches);
  }), Gr(l, "change", s, { passive: true }), I(() => a.value);
}
function M0(e = {}) {
  const { window: o = yn, initialWidth: t = Number.POSITIVE_INFINITY, initialHeight: r = Number.POSITIVE_INFINITY, listenOrientation: n = true, includeScrollbar: i = true, type: l = "inner" } = e, a = lo(t), s = lo(r), c = () => {
    if (o) if (l === "outer") a.value = o.outerWidth, s.value = o.outerHeight;
    else if (l === "visual" && o.visualViewport) {
      const { width: u, height: h, scale: f } = o.visualViewport;
      a.value = Math.round(u * f), s.value = Math.round(h * f);
    } else i ? (a.value = o.innerWidth, s.value = o.innerHeight) : (a.value = o.document.documentElement.clientWidth, s.value = o.document.documentElement.clientHeight);
  };
  c(), Bb(c);
  const d = { passive: true };
  if (Gr("resize", c, d), o && l === "visual" && o.visualViewport && Gr(o.visualViewport, "resize", c, d), n) {
    const u = Ob("(orientation: portrait)");
    Se(u, () => c());
  }
  return { width: a, height: s };
}
class R0 {
  constructor() {
    __publicField(this, "parser");
    __publicField(this, "platformContext");
    this.parser = new Ls(navigator.userAgent), this.platformContext = As();
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
    return Rn() ? "Tauri" : this.platformContext.browser || "";
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
    return Rn();
  }
  get isWeb() {
    const o = this.platformContext.environment;
    return o === "web" || o === "mobile_web";
  }
}
export {
  Ku as $,
  ag as A,
  wo as B,
  dg as C,
  fg as D,
  pg as E,
  bg as F,
  Cg as G,
  Sg as H,
  wg as I,
  Pg as J,
  Eg as K,
  kg as L,
  Gg as M,
  qg as N,
  Yg as O,
  em as P,
  im as Q,
  i0 as R,
  nm as S,
  bt as T,
  $0 as U,
  xn as V,
  om as W,
  u0 as X,
  of as Y,
  rf as Z,
  Qg as _,
  A as a,
  C0 as a$,
  S0 as a0,
  w0 as a1,
  pm as a2,
  H as a3,
  Q as a4,
  v0 as a5,
  j as a6,
  U as a7,
  Wr as a8,
  ma as a9,
  Km as aA,
  Jm as aB,
  tv as aC,
  iv as aD,
  av as aE,
  uv as aF,
  hv as aG,
  mv as aH,
  bv as aI,
  yv as aJ,
  wv as aK,
  Tv as aL,
  Mv as aM,
  kv as aN,
  Hv as aO,
  Lv as aP,
  Wv as aQ,
  Vv as aR,
  Gv as aS,
  so as aT,
  lt as aU,
  F as aV,
  Qv as aW,
  eb as aX,
  nb as aY,
  ab as aZ,
  vo as a_,
  Ze as aa,
  va as ab,
  to as ac,
  z0 as ad,
  $t as ae,
  Ce as af,
  Z as ag,
  co as ah,
  Sh as ai,
  ga as aj,
  gm as ak,
  ph as al,
  mh as am,
  gh as an,
  Oi as ao,
  xh as ap,
  P0 as aq,
  dm as ar,
  vm as as,
  xm as at,
  ym as au,
  wm as av,
  zm as aw,
  Mm as ax,
  Fm as ay,
  _m as az,
  zh as b,
  Ll as b$,
  Ve as b0,
  fn as b1,
  y0 as b2,
  Bi as b3,
  Qh as b4,
  Gl as b5,
  Kl as b6,
  s0 as b7,
  ev as b8,
  Le as b9,
  Qt as bA,
  Pt as bB,
  Ii as bC,
  l0 as bD,
  $a as bE,
  Oe as bF,
  Ca as bG,
  zt as bH,
  m0 as bI,
  Eo as bJ,
  Jn as bK,
  sf as bL,
  Ea as bM,
  Mi as bN,
  Hi as bO,
  pn as bP,
  Cp as bQ,
  ef as bR,
  Pp as bS,
  f0 as bT,
  We as bU,
  Tp as bV,
  ah as bW,
  de as bX,
  ce as bY,
  wt as bZ,
  jp as b_,
  vb as ba,
  _b as bb,
  B0 as bc,
  R0 as bd,
  M0 as be,
  T0 as bf,
  Nr as bg,
  Fg as bh,
  Ta as bi,
  au as bj,
  Nb as bk,
  ru as bl,
  jb as bm,
  Vb as bn,
  E0 as bo,
  x0 as bp,
  Xr as bq,
  ll as br,
  sn as bs,
  ot as bt,
  st as bu,
  Jl as bv,
  ei as bw,
  Kb as bx,
  Ou as by,
  Ei as bz,
  Ao as c,
  lv as c$,
  Iu as c0,
  tt as c1,
  ug as c2,
  Qu as c3,
  fh as c4,
  h0 as c5,
  rh as c6,
  t0 as c7,
  Nu as c8,
  Xb as c9,
  p0 as cA,
  Ha as cB,
  Cm as cC,
  fa as cD,
  a0 as cE,
  ff as cF,
  Yt as cG,
  St as cH,
  Zt as cI,
  ba as cJ,
  dn as cK,
  ea as cL,
  Sm as cM,
  Wt as cN,
  uf as cO,
  th as cP,
  ja as cQ,
  qb as cR,
  Em as cS,
  km as cT,
  Om as cU,
  fc as cV,
  Fi as cW,
  rb as cX,
  Wm as cY,
  b0 as cZ,
  qm as c_,
  Gu as ca,
  Lu as cb,
  r0 as cc,
  _u as cd,
  e0 as ce,
  Ub as cf,
  Au as cg,
  Yb as ch,
  Zb as ci,
  n0 as cj,
  o0 as ck,
  Qb as cl,
  Jb as cm,
  Fo as cn,
  Zl as co,
  Ql as cp,
  oa as cq,
  Zo as cr,
  Lr as cs,
  gg as ct,
  Xt as cu,
  mt as cv,
  ka as cw,
  c0 as cx,
  Vt as cy,
  Fa as cz,
  ep as d,
  Jt as d0,
  pt as d1,
  Va as d2,
  vv as d3,
  pb as d4,
  Dr as d5,
  Pv as d6,
  Rv as d7,
  Ka as d8,
  d0 as d9,
  Kv as da,
  yb as db,
  Cb as dc,
  Sb as dd,
  tg as de,
  Wb as df,
  Db as dg,
  tp as e,
  np as f,
  up as g,
  an as h,
  G as i,
  hp as j,
  bp as k,
  $p as l,
  g0 as m,
  Ep as n,
  Mp as o,
  kp as p,
  Ip as q,
  So as r,
  Mt as s,
  Fp as t,
  _p as u,
  Gp as v,
  Xp as w,
  Qp as x,
  rg as y,
  lg as z
};
