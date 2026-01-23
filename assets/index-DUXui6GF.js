const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-Bz0uAxxC.js","./sketch-store-CFxDq53P.js","./index-f9QyuP-7.js","./index-DpHmg4sr.js","./App-C5xEvwb7.css","./index-wPXfjPPc.js","./index-DY6DJxZR.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
let Mr, UL, wn, PL, Cc, vL, Ht, hI, Js, Go, FL, LL, ki, LN, vN, _L, Cf, wL, Dt, li, yL, aN, la, WL, dt, ul, oN, sL, je, EN, xi, $r, DL, ML, Ni, bL, HL, WN, kL, IL, XT, tg, ig, JT, Kh, Xh, Yg, Yn, cu, Bm, Jo, td, jn, kg, Vg, Jh, lg, Fm, tE, wm, Zh, AE, tN, Un, Ia, hf, Pw, GL, Pa, Zi, ht, mL, hd, Ks, We, CL, gL, dL, TL, pL, uL, fL, hL, YL, jL, lL, Ao, ms, RI, _i, Pi, Hn, ql, Kt, AL, ri, cL, Ga, Ec, Bn, Dr, k, C, ys, Zo, RL, Oc, OL, EL, $o, yN, HN, pl, da, Sy, fr, Ol, _r, Tl, py, nl, mo, mN, BL, wc, os, SL, Bt, An, NL, gN, fy, qo;
let __tla = (async () => {
  var _a2, _b2;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
    new MutationObserver((n) => {
      for (const s of n) if (s.type === "childList") for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && i(l);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function o(n) {
      const s = {};
      return n.integrity && (s.integrity = n.integrity), n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? s.credentials = "include" : n.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function i(n) {
      if (n.ep) return;
      n.ep = true;
      const s = o(n);
      fetch(n.href, s);
    }
  })();
  const Zp = {
    withStackTrace: false
  }, Bh = (e, t, o = Zp) => {
    const i = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, n = o.withStackTrace ? new Error().stack : void 0;
    return {
      data: i,
      message: e,
      stack: n
    };
  };
  function Yi(e, t, o, i) {
    function n(s) {
      return s instanceof o ? s : new o(function(l) {
        l(s);
      });
    }
    return new (o || (o = Promise))(function(s, l) {
      function h(p) {
        try {
          g(i.next(p));
        } catch (R) {
          l(R);
        }
      }
      function f(p) {
        try {
          g(i.throw(p));
        } catch (R) {
          l(R);
        }
      }
      function g(p) {
        p.done ? s(p.value) : n(p.value).then(h, f);
      }
      g((i = i.apply(e, [])).next());
    });
  }
  function yl(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, o = t && e[t], i = 0;
    if (o) return o.call(e);
    if (e && typeof e.length == "number") return {
      next: function() {
        return e && i >= e.length && (e = void 0), {
          value: e && e[i++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function Uo(e) {
    return this instanceof Uo ? (this.v = e, this) : new Uo(e);
  }
  function bl(e, t, o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = o.apply(e, t || []), n, s = [];
    return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", l), n[Symbol.asyncIterator] = function() {
      return this;
    }, n;
    function l(N) {
      return function(M) {
        return Promise.resolve(M).then(N, R);
      };
    }
    function h(N, M) {
      i[N] && (n[N] = function(H) {
        return new Promise(function(ne, ee) {
          s.push([
            N,
            H,
            ne,
            ee
          ]) > 1 || f(N, H);
        });
      }, M && (n[N] = M(n[N])));
    }
    function f(N, M) {
      try {
        g(i[N](M));
      } catch (H) {
        y(s[0][3], H);
      }
    }
    function g(N) {
      N.value instanceof Uo ? Promise.resolve(N.value.v).then(p, R) : y(s[0][2], N);
    }
    function p(N) {
      f("next", N);
    }
    function R(N) {
      f("throw", N);
    }
    function y(N, M) {
      N(M), s.shift(), s.length && f(s[0][0], s[0][1]);
    }
  }
  function Kp(e) {
    var t, o;
    return t = {}, i("next"), i("throw", function(n) {
      throw n;
    }), i("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function i(n, s) {
      t[n] = e[n] ? function(l) {
        return (o = !o) ? {
          value: Uo(e[n](l)),
          done: false
        } : s ? s(l) : l;
      } : s;
    }
  }
  function Jp(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], o;
    return t ? t.call(e) : (e = typeof yl == "function" ? yl(e) : e[Symbol.iterator](), o = {}, i("next"), i("throw"), i("return"), o[Symbol.asyncIterator] = function() {
      return this;
    }, o);
    function i(s) {
      o[s] = e[s] && function(l) {
        return new Promise(function(h, f) {
          l = e[s](l), n(h, f, l.done, l.value);
        });
      };
    }
    function n(s, l, h, f) {
      Promise.resolve(f).then(function(g) {
        s({
          value: g,
          done: h
        });
      }, l);
    }
  }
  class Ut {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const o = t.then((i) => new Do(i));
      return new Ut(o);
    }
    static fromPromise(t, o) {
      const i = t.then((n) => new Do(n)).catch((n) => new Ro(o(n)));
      return new Ut(i);
    }
    static fromThrowable(t, o) {
      return (...i) => new Ut(Yi(this, void 0, void 0, function* () {
        try {
          return new Do(yield t(...i));
        } catch (n) {
          return new Ro(o ? o(n) : n);
        }
      }));
    }
    static combine(t) {
      return Xp(t);
    }
    static combineWithAllErrors(t) {
      return Qp(t);
    }
    map(t) {
      return new Ut(this._promise.then((o) => Yi(this, void 0, void 0, function* () {
        return o.isErr() ? new Ro(o.error) : new Do(yield t(o.value));
      })));
    }
    andThrough(t) {
      return new Ut(this._promise.then((o) => Yi(this, void 0, void 0, function* () {
        if (o.isErr()) return new Ro(o.error);
        const i = yield t(o.value);
        return i.isErr() ? new Ro(i.error) : new Do(o.value);
      })));
    }
    andTee(t) {
      return new Ut(this._promise.then((o) => Yi(this, void 0, void 0, function* () {
        if (o.isErr()) return new Ro(o.error);
        try {
          yield t(o.value);
        } catch {
        }
        return new Do(o.value);
      })));
    }
    orTee(t) {
      return new Ut(this._promise.then((o) => Yi(this, void 0, void 0, function* () {
        if (o.isOk()) return new Do(o.value);
        try {
          yield t(o.error);
        } catch {
        }
        return new Ro(o.error);
      })));
    }
    mapErr(t) {
      return new Ut(this._promise.then((o) => Yi(this, void 0, void 0, function* () {
        return o.isOk() ? new Do(o.value) : new Ro(yield t(o.error));
      })));
    }
    andThen(t) {
      return new Ut(this._promise.then((o) => {
        if (o.isErr()) return new Ro(o.error);
        const i = t(o.value);
        return i instanceof Ut ? i._promise : i;
      }));
    }
    orElse(t) {
      return new Ut(this._promise.then((o) => Yi(this, void 0, void 0, function* () {
        return o.isErr() ? t(o.error) : new Do(o.value);
      })));
    }
    match(t, o) {
      return this._promise.then((i) => i.match(t, o));
    }
    unwrapOr(t) {
      return this._promise.then((o) => o.unwrapOr(t));
    }
    safeUnwrap() {
      return bl(this, arguments, function* () {
        return yield Uo(yield Uo(yield* Kp(Jp(yield Uo(this._promise.then((o) => o.safeUnwrap()))))));
      });
    }
    then(t, o) {
      return this._promise.then(t, o);
    }
    [Symbol.asyncIterator]() {
      return bl(this, arguments, function* () {
        const o = yield Uo(this._promise);
        return o.isErr() && (yield yield Uo(ss(o.error))), yield Uo(o.value);
      });
    }
  }
  function ss(e) {
    return new Ut(Promise.resolve(new Ro(e)));
  }
  const Yh = (e) => {
    let t = k([]);
    for (const o of e) if (o.isErr()) {
      t = C(o.error);
      break;
    } else t.map((i) => i.push(o.value));
    return t;
  }, Xp = (e) => Ut.fromSafePromise(Promise.all(e)).andThen(Yh), jh = (e) => {
    let t = k([]);
    for (const o of e) o.isErr() && t.isErr() ? t.error.push(o.error) : o.isErr() && t.isOk() ? t = C([
      o.error
    ]) : o.isOk() && t.isOk() && t.value.push(o.value);
    return t;
  }, Qp = (e) => Ut.fromSafePromise(Promise.all(e)).andThen(jh);
  var nc;
  (function(e) {
    function t(n, s) {
      return (...l) => {
        try {
          const h = n(...l);
          return k(h);
        } catch (h) {
          return C(s ? s(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function o(n) {
      return Yh(n);
    }
    e.combine = o;
    function i(n) {
      return jh(n);
    }
    e.combineWithAllErrors = i;
  })(nc || (nc = {}));
  k = function(e) {
    return new Do(e);
  };
  C = function(e) {
    return new Ro(e);
  };
  class Do {
    constructor(t) {
      this.value = t;
    }
    isOk() {
      return true;
    }
    isErr() {
      return !this.isOk();
    }
    map(t) {
      return k(t(this.value));
    }
    mapErr(t) {
      return k(this.value);
    }
    andThen(t) {
      return t(this.value);
    }
    andThrough(t) {
      return t(this.value).map((o) => this.value);
    }
    andTee(t) {
      try {
        t(this.value);
      } catch {
      }
      return k(this.value);
    }
    orTee(t) {
      return k(this.value);
    }
    orElse(t) {
      return k(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return Ut.fromSafePromise(t(this.value));
    }
    unwrapOr(t) {
      return this.value;
    }
    match(t, o) {
      return t(this.value);
    }
    safeUnwrap() {
      const t = this.value;
      return (function* () {
        return t;
      })();
    }
    _unsafeUnwrap(t) {
      return this.value;
    }
    _unsafeUnwrapErr(t) {
      throw Bh("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class Ro {
    constructor(t) {
      this.error = t;
    }
    isOk() {
      return false;
    }
    isErr() {
      return !this.isOk();
    }
    map(t) {
      return C(this.error);
    }
    mapErr(t) {
      return C(t(this.error));
    }
    andThrough(t) {
      return C(this.error);
    }
    andTee(t) {
      return C(this.error);
    }
    orTee(t) {
      try {
        t(this.error);
      } catch {
      }
      return C(this.error);
    }
    andThen(t) {
      return C(this.error);
    }
    orElse(t) {
      return t(this.error);
    }
    asyncAndThen(t) {
      return ss(this.error);
    }
    asyncAndThrough(t) {
      return ss(this.error);
    }
    asyncMap(t) {
      return ss(this.error);
    }
    unwrapOr(t) {
      return t;
    }
    match(t, o) {
      return o(this.error);
    }
    safeUnwrap() {
      const t = this.error;
      return (function* () {
        throw yield C(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw Bh("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  nc.fromThrowable;
  var eT = "2.0.8", tT = 500, Ll = "user-agent", bn = "", vl = "?", Et = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Qt = "browser", oi = "cpu", ko = "device", wo = "engine", ao = "os", Ln = "result", Y = "name", U = "type", z = "vendor", $ = "version", $t = "architecture", Or = "major", B = "model", as = "console", ve = "mobile", qe = "tablet", Ot = "smarttv", Mo = "wearable", Yr = "xr", or = "embedded", ln = "inapp", kc = "brands", Xi = "formFactors", Gc = "fullVersionList", vn = "platform", Bc = "platformVersion", qs = "bitness", Fi = "sec-ch-ua", oT = Fi + "-full-version-list", iT = Fi + "-arch", nT = Fi + "-" + qs, rT = Fi + "-form-factors", sT = Fi + "-" + ve, aT = Fi + "-" + B, xh = Fi + "-" + vn, cT = xh + "-version", zh = [
    kc,
    Gc,
    ve,
    B,
    vn,
    Bc,
    $t,
    Xi,
    qs
  ], jr = "Amazon", un = "Apple", Cl = "ASUS", Hl = "BlackBerry", ji = "Google", Dl = "Huawei", Na = "Lenovo", Ml = "Honor", xr = "LG", ya = "Microsoft", ba = "Motorola", Fl = "Nvidia", Pl = "OnePlus", La = "OPPO", Vn = "Samsung", _l = "Sharp", qn = "Sony", va = "Xiaomi", Ca = "Zebra", Ul = "Chrome", Wl = "Chromium", pi = "Chromecast", cs = "Edge", Zn = "Firefox", hn = "Opera", Ha = "Facebook", kl = "Sogou", dn = "Mobile ", Kn = " Browser", rc = "Windows", lT = typeof window !== Et.UNDEFINED, Jt = lT && window.navigator ? window.navigator : void 0, Qi = Jt && Jt.userAgentData ? Jt.userAgentData : void 0, uT = function(e, t) {
    var o = {}, i = t;
    if (!Es(t)) {
      i = {};
      for (var n in t) for (var s in t[n]) i[s] = t[n][s].concat(i[s] ? i[s] : []);
    }
    for (var l in e) o[l] = i[l] && i[l].length % 2 === 0 ? i[l].concat(e[l]) : e[l];
    return o;
  }, Zs = function(e) {
    for (var t = {}, o = 0; o < e.length; o++) t[e[o].toUpperCase()] = e[o];
    return t;
  }, sc = function(e, t) {
    if (typeof e === Et.OBJECT && e.length > 0) {
      for (var o in e) if (bi(t) == bi(e[o])) return true;
      return false;
    }
    return Hr(e) ? bi(t) == bi(e) : false;
  }, Es = function(e, t) {
    for (var o in e) return /^(browser|cpu|device|engine|os)$/.test(o) || (t ? Es(e[o]) : false);
  }, Hr = function(e) {
    return typeof e === Et.STRING;
  }, Da = function(e) {
    if (e) {
      for (var t = [], o = Cn(/\\?\"/g, e).split(","), i = 0; i < o.length; i++) if (o[i].indexOf(";") > -1) {
        var n = Is(o[i]).split(";v=");
        t[i] = {
          brand: n[0],
          version: n[1]
        };
      } else t[i] = Is(o[i]);
      return t;
    }
  }, bi = function(e) {
    return Hr(e) ? e.toLowerCase() : e;
  }, ac = function(e) {
    return Hr(e) ? Cn(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, ti = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var o = e[t];
      typeof o == Et.OBJECT && o.length == 2 ? this[o[0]] = o[1] : this[o] = void 0;
    }
    return this;
  }, Cn = function(e, t) {
    return Hr(t) ? t.replace(e, bn) : t;
  }, Jn = function(e) {
    return Cn(/\\?\"/g, e);
  }, Is = function(e, t) {
    return e = Cn(/^\s\s*/, String(e)), typeof t === Et.UNDEFINED ? e : e.substring(0, t);
  }, cc = function(e, t) {
    if (!(!e || !t)) for (var o = 0, i, n, s, l, h, f; o < t.length && !h; ) {
      var g = t[o], p = t[o + 1];
      for (i = n = 0; i < g.length && !h && g[i]; ) if (h = g[i++].exec(e), h) for (s = 0; s < p.length; s++) f = h[++n], l = p[s], typeof l === Et.OBJECT && l.length > 0 ? l.length === 2 ? typeof l[1] == Et.FUNCTION ? this[l[0]] = l[1].call(this, f) : this[l[0]] = l[1] : l.length >= 3 && (typeof l[1] === Et.FUNCTION && !(l[1].exec && l[1].test) ? l.length > 3 ? this[l[0]] = f ? l[1].apply(this, l.slice(2)) : void 0 : this[l[0]] = f ? l[1].call(this, f, l[2]) : void 0 : l.length == 3 ? this[l[0]] = f ? f.replace(l[1], l[2]) : void 0 : l.length == 4 ? this[l[0]] = f ? l[3].call(this, f.replace(l[1], l[2])) : void 0 : l.length > 4 && (this[l[0]] = f ? l[3].apply(this, [
        f.replace(l[1], l[2])
      ].concat(l.slice(4))) : void 0)) : this[l] = f || void 0;
      o += 2;
    }
  }, So = function(e, t) {
    for (var o in t) if (typeof t[o] === Et.OBJECT && t[o].length > 0) {
      for (var i = 0; i < t[o].length; i++) if (sc(t[o][i], e)) return o === vl ? void 0 : o;
    } else if (sc(t[o], e)) return o === vl ? void 0 : o;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, Gl = {
    ME: "4.90",
    "NT 3.51": "3.51",
    "NT 4.0": "4.0",
    2e3: [
      "5.0",
      "5.01"
    ],
    XP: [
      "5.1",
      "5.2"
    ],
    Vista: "6.0",
    7: "6.1",
    8: "6.2",
    "8.1": "6.3",
    10: [
      "6.4",
      "10.0"
    ],
    NT: ""
  }, Bl = {
    embedded: "Automotive",
    mobile: "Mobile",
    tablet: [
      "Tablet",
      "EInk"
    ],
    smarttv: "TV",
    wearable: "Watch",
    xr: [
      "VR",
      "XR"
    ],
    "?": [
      "Desktop",
      "Unknown"
    ],
    "*": void 0
  }, hT = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, Yl = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          dn + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          cs + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        Y,
        $
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          hn + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          hn + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          hn
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        $,
        [
          Y,
          "Maxthon"
        ]
      ],
      [
        /(kindle)\/([\w\.]+)/i,
        /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
        /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
        /(?:ms|\()(ie) ([\w\.]+)/i,
        /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
        /(brave)(?: chrome)?\/([\d\.]+)/i,
        /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
        /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
      ],
      [
        Y,
        $
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        $,
        [
          Y,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Smart " + Na + Kn
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          Y,
          /(.+)/,
          "$1 Secure" + Kn
        ],
        $
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          Zn + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        $,
        [
          Y,
          hn + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        $,
        [
          Y,
          hn + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          hn + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "MIUI" + Kn
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        $,
        [
          Y,
          dn + Zn
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        $,
        [
          Y,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          Y,
          /(.+)/,
          "$1Browser"
        ],
        $
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          Y,
          /(.+)/,
          "$1" + Kn
        ],
        $
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          Vn + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        $,
        [
          Y,
          kl + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          Y,
          kl + " Mobile"
        ],
        $
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        Y,
        $
      ],
      [
        /(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i
      ],
      [
        Y
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        $,
        Y
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          Y,
          Ha
        ],
        $,
        [
          U,
          ln
        ]
      ],
      [
        /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
        /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
        /(daum)apps[\/ ]([\w\.]+)/i,
        /safari (line)\/([\w\.]+)/i,
        /\b(line)\/([\w\.]+)\/iab/i,
        /(alipay)client\/([\w\.]+)/i,
        /(twitter)(?:and| f.+e\/([\w\.]+))/i,
        /(bing)(?:web|sapphire)\/([\w\.]+)/i,
        /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i
      ],
      [
        Y,
        $,
        [
          U,
          ln
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        $,
        [
          Y,
          "GSA"
        ],
        [
          U,
          ln
        ]
      ],
      [
        /(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "TikTok"
        ],
        [
          U,
          ln
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        Y,
        [
          U,
          ln
        ]
      ],
      [
        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
      ],
      [
        [
          Y,
          /(.+)/,
          "Zalo"
        ],
        $,
        [
          U,
          ln
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        Y,
        $
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        $,
        [
          Y,
          Ul + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        $,
        [
          Y,
          cs + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          Y,
          Ul + " WebView"
        ],
        $
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        $,
        [
          Y,
          "Android" + Kn
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        $,
        [
          Y,
          dn + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        Y,
        $
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        $,
        [
          Y,
          dn + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          Y,
          dn + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        $,
        Y
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        Y,
        [
          $,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        Y,
        $
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          Y,
          dn + Zn
        ],
        $
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          Y,
          "Netscape"
        ],
        $
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        Y,
        $
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        $,
        [
          Y,
          Zn + " Reality"
        ]
      ],
      [
        /ekiohf.+(flow)\/([\w\.]+)/i,
        /(swiftfox)/i,
        /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
        /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
        /(firefox)\/([\w\.]+)/i,
        /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
        /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
        /\b(links) \(([\w\.]+)/i
      ],
      [
        Y,
        [
          $,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        Y,
        [
          $,
          /[^\d\.]+./,
          bn
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          $t,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          $t,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          $t,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          $t,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          $t,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          $t,
          "sparc"
        ]
      ],
      [
        /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
        /((ppc|powerpc)(64)?)( mac|;|\))/i,
        /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i
      ],
      [
        [
          $t,
          /ower/,
          bn,
          bi
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          $t,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          $t,
          "alpha"
        ]
      ]
    ],
    device: [
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [
        B,
        [
          z,
          Vn
        ],
        [
          U,
          qe
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        B,
        [
          z,
          Vn
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        B,
        [
          z,
          un
        ],
        [
          U,
          ve
        ]
      ],
      [
        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
      ],
      [
        B,
        [
          z,
          un
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        B,
        [
          z,
          un
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        B,
        [
          z,
          _l
        ],
        [
          U,
          ve
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        B,
        [
          z,
          Ml
        ],
        [
          U,
          qe
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        B,
        [
          z,
          Ml
        ],
        [
          U,
          ve
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        B,
        [
          z,
          Dl
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(?:huawei) ?([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
      ],
      [
        B,
        [
          z,
          Dl
        ],
        [
          U,
          ve
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          B,
          /_/g,
          " "
        ],
        [
          z,
          va
        ],
        [
          U,
          qe
        ]
      ],
      [
        /\b; (\w+) build\/hm\1/i,
        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
        /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
        / ([\w ]+) miui\/v?\d/i
      ],
      [
        [
          B,
          /_/g,
          " "
        ],
        [
          z,
          va
        ],
        [
          U,
          ve
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        B,
        [
          z,
          Pl
        ],
        [
          U,
          ve
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        B,
        [
          z,
          La
        ],
        [
          U,
          ve
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        B,
        [
          z,
          So,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": La
          }
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        B,
        [
          z,
          "BLU"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        B,
        [
          z,
          "Vivo"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        B,
        [
          z,
          "Realme"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        B,
        [
          z,
          Na
        ],
        [
          U,
          qe
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        B,
        [
          z,
          Na
        ],
        [
          U,
          ve
        ]
      ],
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        B,
        [
          z,
          ba
        ],
        [
          U,
          ve
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        B,
        [
          z,
          ba
        ],
        [
          U,
          qe
        ]
      ],
      [
        /\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        B,
        [
          z,
          xr
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        B,
        [
          z,
          xr
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        z,
        B,
        [
          U,
          qe
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
      ],
      [
        [
          B,
          /_/g,
          " "
        ],
        [
          U,
          ve
        ],
        [
          z,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        B,
        [
          z,
          ji
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        B,
        [
          z,
          ji
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        z,
        B
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        B,
        [
          z,
          qn
        ],
        [
          U,
          ve
        ]
      ],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [
        [
          B,
          "Xperia Tablet"
        ],
        [
          z,
          qn
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        B,
        [
          z,
          jr
        ],
        [
          U,
          qe
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          B,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          z,
          jr
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        B,
        z,
        [
          U,
          qe
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /(?:blackberry|\(bb10;) (\w+)/i
      ],
      [
        B,
        [
          z,
          Hl
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        B,
        [
          z,
          Cl
        ],
        [
          U,
          qe
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        B,
        [
          z,
          Cl
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        B,
        [
          z,
          "HTC"
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        z,
        [
          B,
          /_/g,
          " "
        ],
        [
          U,
          ve
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        B,
        [
          z,
          "TCL"
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        B,
        [
          z,
          "TCL"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          z,
          bi
        ],
        B,
        [
          U,
          So,
          {
            tablet: [
              "p10001l",
              "w7001"
            ],
            "*": "mobile"
          }
        ]
      ],
      [
        /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
      ],
      [
        B,
        [
          z,
          "Acer"
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        B,
        [
          z,
          "Meizu"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        B,
        [
          z,
          "Ulefone"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        B,
        [
          z,
          "Energizer"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        B,
        [
          z,
          "Cat"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        B,
        [
          z,
          "Smartfren"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        B,
        [
          z,
          "Nothing"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        B,
        [
          z,
          "Archos"
        ],
        [
          U,
          qe
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        B,
        [
          z,
          "Archos"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        B,
        [
          z,
          "HMD"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        z,
        B,
        [
          U,
          qe
        ]
      ],
      [
        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
        /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
        /(hp) ([\w ]+\w)/i,
        /(microsoft); (lumia[\w ]+)/i,
        /(oppo) ?([\w ]+) bui/i,
        /(hisense) ([ehv][\w ]+)\)/i,
        /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i
      ],
      [
        z,
        B,
        [
          U,
          ve
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        z,
        B,
        [
          U,
          qe
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        B,
        [
          z,
          ya
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        B,
        [
          z,
          "Fairphone"
        ],
        [
          U,
          ve
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        B,
        [
          z,
          Fl
        ],
        [
          U,
          qe
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        z,
        B,
        [
          U,
          ve
        ]
      ],
      [
        /(kin\.[onetw]{3})/i
      ],
      [
        [
          B,
          /\./g,
          " "
        ],
        [
          z,
          ya
        ],
        [
          U,
          ve
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        B,
        [
          z,
          Ca
        ],
        [
          U,
          qe
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        B,
        [
          z,
          Ca
        ],
        [
          U,
          ve
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        z,
        [
          U,
          Ot
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          B,
          /^/,
          "SmartTV"
        ],
        [
          z,
          Vn
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        z,
        B,
        [
          U,
          Ot
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          z,
          xr
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        z,
        [
          B,
          un + " TV"
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          B,
          pi + " Third Generation"
        ],
        [
          z,
          ji
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          B,
          /^/,
          "Chromecast "
        ],
        [
          z,
          ji
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          B,
          pi + " Nest Hub"
        ],
        [
          z,
          ji
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          B,
          pi
        ],
        [
          z,
          ji
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        B,
        [
          z,
          Ha
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        B,
        [
          z,
          jr
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        B,
        [
          z,
          Fl
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        B,
        [
          z,
          _l
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        B,
        [
          z,
          qn
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        B,
        [
          z,
          va
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        z,
        B,
        [
          U,
          Ot
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          z,
          /.+\/(\w+)/,
          "$1",
          So,
          {
            LG: "lge"
          }
        ],
        [
          B,
          Is
        ],
        [
          U,
          Ot
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        B,
        [
          z,
          qn
        ],
        [
          U,
          as
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        B,
        [
          z,
          ya
        ],
        [
          U,
          as
        ]
      ],
      [
        /(ouya)/i,
        /(nintendo) (\w+)/i,
        /(retroid) (pocket ([^\)]+))/i,
        /(valve).+(steam deck)/i,
        /droid.+; ((shield|rgcube|gr0006))( bui|\))/i
      ],
      [
        [
          z,
          So,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        B,
        [
          U,
          as
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        B,
        [
          z,
          Vn
        ],
        [
          U,
          Mo
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        z,
        B,
        [
          U,
          Mo
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        B,
        [
          z,
          La
        ],
        [
          U,
          Mo
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        B,
        [
          z,
          un
        ],
        [
          U,
          Mo
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        B,
        [
          z,
          Pl
        ],
        [
          U,
          Mo
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        B,
        [
          z,
          ba
        ],
        [
          U,
          Mo
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        B,
        [
          z,
          qn
        ],
        [
          U,
          Mo
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        B,
        [
          z,
          xr
        ],
        [
          U,
          Mo
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        B,
        [
          z,
          Ca
        ],
        [
          U,
          Mo
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        B,
        [
          z,
          ji
        ],
        [
          U,
          Yr
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        z,
        B,
        [
          U,
          Yr
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        B,
        [
          z,
          Ha
        ],
        [
          U,
          Yr
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          U,
          Yr
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        z,
        [
          U,
          or
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        B,
        [
          z,
          jr
        ],
        [
          U,
          or
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        B,
        [
          z,
          un
        ],
        [
          U,
          or
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          U,
          or
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        B,
        [
          U,
          Ot
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          U,
          Ot
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        B,
        [
          U,
          So,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": qe
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          U,
          qe
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          U,
          ve
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        B,
        [
          z,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          cs + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        Y,
        $
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        $,
        [
          Y,
          "Blink"
        ]
      ],
      [
        /(presto)\/([\w\.]+)/i,
        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
        /ekioh(flow)\/([\w\.]+)/i,
        /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
        /(icab)[\/ ]([23]\.[\d\.]+)/i,
        /\b(libweb)/i
      ],
      [
        Y,
        $
      ],
      [
        /ladybird\//i
      ],
      [
        [
          Y,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        $,
        Y
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          Y,
          /N/,
          "R"
        ],
        [
          $,
          So,
          Gl
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        Y,
        $
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          $,
          /(;|\))/g,
          "",
          So,
          Gl
        ],
        [
          Y,
          rc
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        Y,
        $
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
        /\btvos ?([\w\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          $,
          /_/g,
          "."
        ],
        [
          Y,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          Y,
          "macOS"
        ],
        [
          $,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        $,
        [
          Y,
          pi + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          Y,
          pi + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        $,
        [
          Y,
          pi + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          Y,
          pi + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          Y,
          pi
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        $,
        Y
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          Y,
          /(.+)/,
          "$1 Touch"
        ],
        $
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        Y,
        $
      ],
      [
        /\(bb(10);/i
      ],
      [
        $,
        [
          Y,
          Hl
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        $,
        [
          Y,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i
      ],
      [
        $,
        [
          Y,
          Zn + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        $,
        [
          Y,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          $,
          So,
          {
            25: "120",
            24: "108",
            23: "94",
            22: "87",
            6: "79",
            5: "68",
            4: "53",
            3: "38",
            2: "538",
            1: "537",
            "*": "TV"
          }
        ],
        [
          Y,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        $,
        [
          Y,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          Y,
          "Chrome OS"
        ],
        $
      ],
      [
        /(netrange)mmh/i,
        /(nettv)\/(\d+\.[\w\.]+)/i,
        /(nintendo|playstation) (\w+)/i,
        /(xbox); +xbox ([^\);]+)/i,
        /(pico) .+os([\w\.]+)/i,
        /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
        /linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
        /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
        /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
        /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
        /\b(aix)[; ]([1-9\.]{0,4})/i,
        /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
        /(gnu) ?([\w\.]*)/i,
        /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
        /(haiku) ?(r\d)?/i
      ],
      [
        Y,
        $
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          Y,
          "Solaris"
        ],
        $
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        Y,
        $
      ]
    ]
  }, zr = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return ti.call(e.init, [
      [
        Qt,
        [
          Y,
          $,
          Or,
          U
        ]
      ],
      [
        oi,
        [
          $t
        ]
      ],
      [
        ko,
        [
          U,
          B,
          z
        ]
      ],
      [
        wo,
        [
          Y,
          $
        ]
      ],
      [
        ao,
        [
          Y,
          $
        ]
      ]
    ]), ti.call(e.isIgnore, [
      [
        Qt,
        [
          $,
          Or
        ]
      ],
      [
        wo,
        [
          $
        ]
      ],
      [
        ao,
        [
          $
        ]
      ]
    ]), ti.call(e.isIgnoreRgx, [
      [
        Qt,
        / ?browser$/i
      ],
      [
        ao,
        / ?os$/i
      ]
    ]), ti.call(e.toString, [
      [
        Qt,
        [
          Y,
          $
        ]
      ],
      [
        oi,
        [
          $t
        ]
      ],
      [
        ko,
        [
          z,
          B
        ]
      ],
      [
        wo,
        [
          Y,
          $
        ]
      ],
      [
        ao,
        [
          Y,
          $
        ]
      ]
    ]), e;
  })(), dT = function(e, t) {
    var o = zr.init[t], i = zr.isIgnore[t] || 0, n = zr.isIgnoreRgx[t] || 0, s = zr.toString[t] || 0;
    function l() {
      ti.call(this, o);
    }
    return l.prototype.getItem = function() {
      return e;
    }, l.prototype.withClientHints = function() {
      return Qi ? Qi.getHighEntropyValues(zh).then(function(h) {
        return e.setCH(new $h(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, l.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != Ln && (l.prototype.is = function(h) {
      var f = false;
      for (var g in this) if (this.hasOwnProperty(g) && !sc(i, g) && bi(n ? Cn(n, this[g]) : this[g]) == bi(n ? Cn(n, h) : h)) {
        if (f = true, h != Et.UNDEFINED) break;
      } else if (h == Et.UNDEFINED && f) {
        f = !f;
        break;
      }
      return f;
    }, l.prototype.toString = function() {
      var h = bn;
      for (var f in s) typeof this[s[f]] !== Et.UNDEFINED && (h += (h ? " " : bn) + this[s[f]]);
      return h || Et.UNDEFINED;
    }), l.prototype.then = function(h) {
      var f = this, g = function() {
        for (var R in f) f.hasOwnProperty(R) && (this[R] = f[R]);
      };
      g.prototype = {
        is: l.prototype.is,
        toString: l.prototype.toString,
        withClientHints: l.prototype.withClientHints,
        withFeatureCheck: l.prototype.withFeatureCheck
      };
      var p = new g();
      return h(p), p;
    }, new l();
  };
  function $h(e, t) {
    if (e = e || {}, ti.call(this, zh), t) ti.call(this, [
      [
        kc,
        Da(e[Fi])
      ],
      [
        Gc,
        Da(e[oT])
      ],
      [
        ve,
        /\?1/.test(e[sT])
      ],
      [
        B,
        Jn(e[aT])
      ],
      [
        vn,
        Jn(e[xh])
      ],
      [
        Bc,
        Jn(e[cT])
      ],
      [
        $t,
        Jn(e[iT])
      ],
      [
        Xi,
        Da(e[rT])
      ],
      [
        qs,
        Jn(e[nT])
      ]
    ]);
    else for (var o in e) this.hasOwnProperty(o) && typeof e[o] !== Et.UNDEFINED && (this[o] = e[o]);
  }
  function Ci(e, t, o, i) {
    return ti.call(this, [
      [
        "itemType",
        e
      ],
      [
        "ua",
        t
      ],
      [
        "uaCH",
        i
      ],
      [
        "rgxMap",
        o
      ],
      [
        "data",
        dT(this, e)
      ]
    ]), this;
  }
  Ci.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  Ci.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  Ci.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  Ci.prototype.detectFeature = function() {
    if (Jt && Jt.userAgent == this.ua) switch (this.itemType) {
      case Qt:
        Jt.brave && typeof Jt.brave.isBrave == Et.FUNCTION && this.set(Y, "Brave");
        break;
      case ko:
        !this.get(U) && Qi && Qi[ve] && this.set(U, ve), this.get(B) == "Macintosh" && Jt && typeof Jt.standalone !== Et.UNDEFINED && Jt.maxTouchPoints && Jt.maxTouchPoints > 2 && this.set(B, "iPad").set(U, qe);
        break;
      case ao:
        !this.get(Y) && Qi && Qi[vn] && this.set(Y, Qi[vn]);
        break;
      case Ln:
        var e = this.data, t = function(o) {
          return e[o].getItem().detectFeature().get();
        };
        this.set(Qt, t(Qt)).set(oi, t(oi)).set(ko, t(ko)).set(wo, t(wo)).set(ao, t(ao));
    }
    return this;
  };
  Ci.prototype.parseUA = function() {
    switch (this.itemType != Ln && cc.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case Qt:
        this.set(Or, ac(this.get($)));
        break;
      case ao:
        if (this.get(Y) == "iOS" && this.get($) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set($, e[1]);
        }
        break;
    }
    return this;
  };
  Ci.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case Qt:
      case wo:
        var o = e[Gc] || e[kc], i;
        if (o) for (var n = 0; n < o.length; n++) {
          var s = o[n].brand || o[n], l = o[n].version;
          this.itemType == Qt && !/not.a.brand/i.test(s) && (!i || /Chrom/.test(i) && s != Wl || i == cs && /WebView2/.test(s)) && (s = So(s, hT), i = this.get(Y), i && !/Chrom/.test(i) && /Chrom/.test(s) || this.set(Y, s).set($, l).set(Or, ac(l)), i = s), this.itemType == wo && s == Wl && this.set($, l);
        }
        break;
      case oi:
        var h = e[$t];
        h && (h && e[qs] == "64" && (h += "64"), cc.call(this.data, h + ";", t));
        break;
      case ko:
        if (e[ve] && this.set(U, ve), e[B] && (this.set(B, e[B]), !this.get(U) || !this.get(z))) {
          var f = {};
          cc.call(f, "droid 9; " + e[B] + ")", t), !this.get(U) && f.type && this.set(U, f.type), !this.get(z) && f.vendor && this.set(z, f.vendor);
        }
        if (e[Xi]) {
          var g;
          if (typeof e[Xi] != "string") for (var p = 0; !g && p < e[Xi].length; ) g = So(e[Xi][p++], Bl);
          else g = So(e[Xi], Bl);
          this.set(U, g);
        }
        break;
      case ao:
        var R = e[vn];
        if (R) {
          var y = e[Bc];
          R == rc && (y = parseInt(ac(y), 10) >= 13 ? "11" : "10"), this.set(Y, R).set($, y);
        }
        this.get(Y) == rc && e[B] == "Xbox" && this.set(Y, "Xbox").set($, void 0);
        break;
      case Ln:
        var N = this.data, M = function(H) {
          return N[H].getItem().setCH(e).parseCH().get();
        };
        this.set(Qt, M(Qt)).set(oi, M(oi)).set(ko, M(ko)).set(wo, M(wo)).set(ao, M(ao));
    }
    return this;
  };
  ri = function(e, t, o) {
    if (typeof e === Et.OBJECT ? (Es(e, true) ? (typeof t === Et.OBJECT && (o = t), t = e) : (o = e, t = void 0), e = void 0) : typeof e === Et.STRING && !Es(t, true) && (o = t, t = void 0), o) if (typeof o.append === Et.FUNCTION) {
      var i = {};
      o.forEach(function(p, R) {
        i[String(R).toLowerCase()] = p;
      }), o = i;
    } else {
      var n = {};
      for (var s in o) o.hasOwnProperty(s) && (n[String(s).toLowerCase()] = o[s]);
      o = n;
    }
    if (!(this instanceof ri)) return new ri(e, t, o).getResult();
    var l = typeof e === Et.STRING ? e : o && o[Ll] ? o[Ll] : Jt && Jt.userAgent ? Jt.userAgent : bn, h = new $h(o, true), f = t ? uT(Yl, t) : Yl, g = function(p) {
      return p == Ln ? function() {
        return new Ci(p, l, f, h).set("ua", l).set(Qt, this.getBrowser()).set(oi, this.getCPU()).set(ko, this.getDevice()).set(wo, this.getEngine()).set(ao, this.getOS()).get();
      } : function() {
        return new Ci(p, l, f[p], h).parseUA().get();
      };
    };
    return ti.call(this, [
      [
        "getBrowser",
        g(Qt)
      ],
      [
        "getCPU",
        g(oi)
      ],
      [
        "getDevice",
        g(ko)
      ],
      [
        "getEngine",
        g(wo)
      ],
      [
        "getOS",
        g(ao)
      ],
      [
        "getResult",
        g(Ln)
      ],
      [
        "getUA",
        function() {
          return l;
        }
      ],
      [
        "setUA",
        function(p) {
          return Hr(p) && (l = Is(p, tT)), this;
        }
      ]
    ]).setUA(l), this;
  };
  ri.VERSION = eT;
  ri.BROWSER = Zs([
    Y,
    $,
    Or,
    U
  ]);
  ri.CPU = Zs([
    $t
  ]);
  ri.DEVICE = Zs([
    B,
    z,
    U,
    as,
    ve,
    Ot,
    qe,
    Mo,
    or
  ]);
  ri.ENGINE = ri.OS = Zs([
    Y,
    $
  ]);
  let mt;
  mt = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(mt || {});
  Dr = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(Dr || {});
  Bn = class extends Error {
    constructor(t, o) {
      super(t), this.cause = o, this.name = this.constructor.name, o && (this.message = `${t} (caused by: ${o.message})`);
    }
  };
  class Ue extends Bn {
    constructor(t, o = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = o;
    }
  }
  function fT(e) {
    return e instanceof Bn;
  }
  $r = function(e, t = "Unknown error occurred") {
    return fT(e) ? e : e instanceof Error ? new Ue(t, "UNKNOWN_ERROR", e) : new Ue(t, "UNKNOWN_ERROR");
  };
  xi = function(e, t) {
    const o = t ? `[${t}] ` : "";
    console.error(`${o}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class pT {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new ri(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? mt.TAURI : this.parser.getDevice().type === "mobile" ? mt.MOBILE_WEB : mt.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), o = this.parser.getDevice(), i = this.parser.getBrowser(), n = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: typeof navigator < "u" ? navigator.userAgent : "",
        isMobile: o.type === "mobile",
        isTablet: o.type === "tablet",
        browser: i.name || void 0,
        os: n.name || void 0
      };
    }
    getPlatformCapabilities(t) {
      const o = {
        storage: {
          persistent: true,
          encryption: false
        },
        geolocation: {
          native: false,
          browser: true,
          ipBased: true,
          highAccuracy: true,
          kalmanFilter: true
        },
        fileSystem: {
          read: false,
          write: false,
          native: false
        },
        network: {
          fetch: true,
          websocket: true,
          native: false
        },
        permissions: {
          geolocation: true,
          notifications: "Notification" in window,
          camera: "mediaDevices" in navigator,
          microphone: "mediaDevices" in navigator
        },
        sensors: {
          deviceOrientation: "DeviceOrientationEvent" in window,
          motion: "DeviceMotionEvent" in window,
          highAccuracy: false
        }
      };
      switch (t) {
        case mt.TAURI:
          return {
            ...o,
            storage: {
              persistent: true,
              encryption: true,
              quota: void 0
            },
            geolocation: {
              native: true,
              browser: true,
              ipBased: true,
              highAccuracy: true,
              kalmanFilter: true
            },
            fileSystem: {
              read: true,
              write: true,
              native: true
            },
            network: {
              fetch: true,
              websocket: true,
              native: true
            },
            permissions: {
              ...o.permissions,
              geolocation: true
            },
            sensors: {
              deviceOrientation: "DeviceOrientationEvent" in window,
              motion: "DeviceMotionEvent" in window,
              highAccuracy: false
            }
          };
        case mt.MOBILE_WEB:
          return {
            ...o,
            geolocation: {
              ...o.geolocation,
              highAccuracy: false,
              kalmanFilter: true
            },
            permissions: {
              ...o.permissions,
              geolocation: true
            },
            sensors: {
              ...o.sensors,
              highAccuracy: true
            }
          };
        case mt.WEB:
        case mt.UNKNOWN:
        default:
          return o;
      }
    }
    getDefaultConfiguration(t) {
      const o = {
        storage: {
          autoSave: true
        },
        geolocation: {
          timeout: 3e4,
          maximumAge: 1e4,
          enableHighAccuracy: true,
          enableKalmanFilter: true,
          kalmanConfig: {
            enableIMUFusion: true,
            imuUpdateInterval: 100,
            maxAge: 5e3,
            sigmaAcceleration: 1,
            initialPositionUncertainty: 20,
            initialVelocityUncertainty: 4
          }
        },
        fileSystem: {
          maxFileSize: 10485760
        }
      };
      switch (t) {
        case mt.TAURI:
          return {
            ...o,
            storage: {
              ...o.storage,
              filePath: "user-data.json",
              autoSave: false
            },
            geolocation: {
              ...o.geolocation,
              tauriHandler: "get_geolocation"
            },
            fileSystem: {
              ...o.fileSystem,
              basePath: "./data",
              allowedExtensions: [
                ".json",
                ".geojson",
                ".gpx",
                ".kml"
              ]
            }
          };
        case mt.MOBILE_WEB:
          return {
            ...o,
            storage: {
              ...o.storage,
              dbName: "mobile-trackmaker-db",
              storeName: "user-data"
            },
            geolocation: {
              ...o.geolocation,
              timeout: 2e4,
              maximumAge: 5e3,
              enableHighAccuracy: true
            }
          };
        case mt.WEB:
        case mt.UNKNOWN:
        default:
          return {
            ...o,
            storage: {
              ...o.storage,
              dbName: "trackmaker-db",
              storeName: "user-data"
            }
          };
      }
    }
    validate() {
      try {
        const t = this.getPlatformContext();
        return !t.environment || !t.capabilities ? C(new Ue("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), k(true));
      } catch (t) {
        return C(new Ue("Platform detection failed", void 0, t));
      }
    }
  }
  const Yc = new pT();
  cL = function() {
    return Yc.getPlatformContext();
  };
  function TT(e, t, o, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? i : o === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function gT(e, t, o, i, n) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, o), o;
  }
  var ls;
  function mT(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function Nt(e, t = {}, o) {
    return window.__TAURI_INTERNALS__.invoke(e, t, o);
  }
  class ET {
    get rid() {
      return TT(this, ls, "f");
    }
    constructor(t) {
      ls.set(this, void 0), gT(this, ls, t);
    }
    async close() {
      return Nt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  ls = /* @__PURE__ */ new WeakMap();
  var jl;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(jl || (jl = {}));
  async function IT(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await Nt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function xl(e, t, o) {
    var i;
    const n = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return Nt("plugin:event|listen", {
      event: e,
      target: n,
      handler: mT(t)
    }).then((s) => async () => IT(e, s));
  }
  async function OT(e, t) {
    return await Os.load(e, t);
  }
  class Os extends ET {
    constructor(t) {
      super(t);
    }
    static async load(t, o) {
      const i = await Nt("plugin:store|load", {
        path: t,
        options: o
      });
      return new Os(i);
    }
    static async get(t) {
      return await Nt("plugin:store|get_store", {
        path: t
      }).then((o) => o ? new Os(o) : null);
    }
    async set(t, o) {
      await Nt("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: o
      });
    }
    async get(t) {
      const [o, i] = await Nt("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return i ? o : void 0;
    }
    async has(t) {
      return await Nt("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await Nt("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await Nt("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await Nt("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await Nt("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await Nt("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await Nt("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await Nt("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await Nt("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await Nt("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, o) {
      return await xl("store://change", (i) => {
        i.payload.resourceId === this.rid && i.payload.key === t && o(i.payload.exists ? i.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await xl("store://change", (o) => {
        o.payload.resourceId === this.rid && t(o.payload.key, o.payload.exists ? o.payload.value : void 0);
      });
    }
  }
  class at extends Bn {
    constructor(t, o, i) {
      super(t, i);
      __publicField(this, "domain", Dr.STORAGE);
      this.code = o;
    }
  }
  var it = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(it || {});
  class Ct extends Bn {
    constructor(t, o, i) {
      super(t, i);
      __publicField(this, "domain", Dr.GEOLOCATION);
      this.code = o;
    }
  }
  var gt = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(gt || {});
  class zi extends Bn {
    constructor(t, o, i) {
      super(t, i);
      __publicField(this, "domain", Dr.GENERIC);
      this.code = o;
    }
  }
  var Ei = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(Ei || {});
  class RT {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return k(void 0);
      try {
        return this.store = await OT(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, k(void 0);
      } catch (t) {
        return C(new at("Failed to initialize Tauri storage", it.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, o) {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        return await this.store.set(t, o), k(void 0);
      } catch (i) {
        return C(new at(`Failed to set value for key: ${t}`, it.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        const o = await this.store.get(t);
        return k(o ?? null);
      } catch (o) {
        return C(new at(`Failed to get value for key: ${t}`, it.GET_FAILED, o));
      }
    }
    async save() {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        return await this.store.save(), k(void 0);
      } catch (t) {
        return C(new at("Failed to save store", it.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), o = {};
        for (const i of t) {
          const n = await this.store.get(i);
          o[i] = n;
        }
        return k(JSON.stringify(o, null, 2));
      } catch (t) {
        return C(new at("Failed to export data to JSON", it.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const o of t) await this.store.delete(o);
        return k(void 0);
      } catch (t) {
        return C(new at("Failed to clear store", it.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), k(void 0);
      } catch (o) {
        return C(new at(`Failed to remove key: ${t}`, it.REMOVE_FAILED, o));
      }
    }
  }
  let Vh, AT, qh, ST, wT, Xn;
  Vh = typeof global == "object" && global && global.Object === Object && global;
  AT = typeof self == "object" && self && self.Object === Object && self;
  Go = Vh || AT || Function("return this")();
  Hn = Go.Symbol;
  qh = Object.prototype;
  ST = qh.hasOwnProperty;
  wT = qh.toString;
  Xn = Hn ? Hn.toStringTag : void 0;
  function NT(e) {
    var t = ST.call(e, Xn), o = e[Xn];
    try {
      e[Xn] = void 0;
      var i = true;
    } catch {
    }
    var n = wT.call(e);
    return i && (t ? e[Xn] = o : delete e[Xn]), n;
  }
  var yT = Object.prototype, bT = yT.toString;
  function LT(e) {
    return bT.call(e);
  }
  var vT = "[object Null]", CT = "[object Undefined]", zl = Hn ? Hn.toStringTag : void 0;
  Pi = function(e) {
    return e == null ? e === void 0 ? CT : vT : zl && zl in Object(e) ? NT(e) : LT(e);
  };
  _i = function(e) {
    return e != null && typeof e == "object";
  };
  Ks = Array.isArray;
  Js = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var HT = "[object AsyncFunction]", DT = "[object Function]", MT = "[object GeneratorFunction]", FT = "[object Proxy]";
  Zh = function(e) {
    if (!Js(e)) return false;
    var t = Pi(e);
    return t == DT || t == MT || t == HT || t == FT;
  };
  var Ma = Go["__core-js_shared__"], $l = (function() {
    var e = /[^.]+$/.exec(Ma && Ma.keys && Ma.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function PT(e) {
    return !!$l && $l in e;
  }
  var _T = Function.prototype, UT = _T.toString;
  function rn(e) {
    if (e != null) {
      try {
        return UT.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var WT = /[\\^$.*+?()[\]{}|]/g, kT = /^\[object .+?Constructor\]$/, GT = Function.prototype, BT = Object.prototype, YT = GT.toString, jT = BT.hasOwnProperty, xT = RegExp("^" + YT.call(jT).replace(WT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function zT(e) {
    if (!Js(e) || PT(e)) return false;
    var t = Zh(e) ? xT : kT;
    return t.test(rn(e));
  }
  function $T(e, t) {
    return e == null ? void 0 : e[t];
  }
  function sn(e, t) {
    var o = $T(e, t);
    return zT(o) ? o : void 0;
  }
  let lc, Vl, VT;
  lc = sn(Go, "WeakMap");
  Vl = Object.create;
  VT = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Js(t)) return {};
      if (Vl) return Vl(t);
      e.prototype = t;
      var o = new e();
      return e.prototype = void 0, o;
    };
  })();
  ql = (function() {
    try {
      var e = sn(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function qT(e, t) {
    for (var o = -1, i = e == null ? 0 : e.length; ++o < i && t(e[o], o, e) !== false; ) ;
    return e;
  }
  var ZT = 9007199254740991, KT = /^(?:0|[1-9]\d*)$/;
  JT = function(e, t) {
    var o = typeof e;
    return t = t ?? ZT, !!t && (o == "number" || o != "symbol" && KT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  XT = function(e, t, o) {
    t == "__proto__" && ql ? ql(e, t, {
      configurable: true,
      enumerable: true,
      value: o,
      writable: true
    }) : e[t] = o;
  };
  Kh = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var QT = Object.prototype, eg = QT.hasOwnProperty;
  tg = function(e, t, o) {
    var i = e[t];
    (!(eg.call(e, t) && Kh(i, o)) || o === void 0 && !(t in e)) && XT(e, t, o);
  };
  var og = 9007199254740991;
  Jh = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= og;
  };
  ig = function(e) {
    return e != null && Jh(e.length) && !Zh(e);
  };
  var ng = Object.prototype;
  Xh = function(e) {
    var t = e && e.constructor, o = typeof t == "function" && t.prototype || ng;
    return e === o;
  };
  function rg(e, t) {
    for (var o = -1, i = Array(e); ++o < e; ) i[o] = t(o);
    return i;
  }
  var sg = "[object Arguments]";
  function Zl(e) {
    return _i(e) && Pi(e) == sg;
  }
  let Qh, ag, cg;
  Qh = Object.prototype;
  ag = Qh.hasOwnProperty;
  cg = Qh.propertyIsEnumerable;
  lg = Zl(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Zl : function(e) {
    return _i(e) && ag.call(e, "callee") && !cg.call(e, "callee");
  };
  function ug() {
    return false;
  }
  let ed, Kl, hg, Jl, dg, fg, pg, Tg, gg, mg, Eg, Ig, Og, Rg, Ag, Sg, wg, Ng, yg, bg, Lg, vg, Cg, Hg, Dg, Mg, Fg, Pg, _g, ot;
  ed = typeof exports == "object" && exports && !exports.nodeType && exports;
  Kl = ed && typeof module == "object" && module && !module.nodeType && module;
  hg = Kl && Kl.exports === ed;
  Jl = hg ? Go.Buffer : void 0;
  dg = Jl ? Jl.isBuffer : void 0;
  td = dg || ug;
  fg = "[object Arguments]";
  pg = "[object Array]";
  Tg = "[object Boolean]";
  gg = "[object Date]";
  mg = "[object Error]";
  Eg = "[object Function]";
  Ig = "[object Map]";
  Og = "[object Number]";
  Rg = "[object Object]";
  Ag = "[object RegExp]";
  Sg = "[object Set]";
  wg = "[object String]";
  Ng = "[object WeakMap]";
  yg = "[object ArrayBuffer]";
  bg = "[object DataView]";
  Lg = "[object Float32Array]";
  vg = "[object Float64Array]";
  Cg = "[object Int8Array]";
  Hg = "[object Int16Array]";
  Dg = "[object Int32Array]";
  Mg = "[object Uint8Array]";
  Fg = "[object Uint8ClampedArray]";
  Pg = "[object Uint16Array]";
  _g = "[object Uint32Array]";
  ot = {};
  ot[Lg] = ot[vg] = ot[Cg] = ot[Hg] = ot[Dg] = ot[Mg] = ot[Fg] = ot[Pg] = ot[_g] = true;
  ot[fg] = ot[pg] = ot[yg] = ot[Tg] = ot[bg] = ot[gg] = ot[mg] = ot[Eg] = ot[Ig] = ot[Og] = ot[Rg] = ot[Ag] = ot[Sg] = ot[wg] = ot[Ng] = false;
  function Ug(e) {
    return _i(e) && Jh(e.length) && !!ot[Pi(e)];
  }
  function jc(e) {
    return function(t) {
      return e(t);
    };
  }
  let od, ar, Wg, Fa, Dn, Xl, Gg, Bg;
  od = typeof exports == "object" && exports && !exports.nodeType && exports;
  ar = od && typeof module == "object" && module && !module.nodeType && module;
  Wg = ar && ar.exports === od;
  Fa = Wg && Vh.process;
  Dn = (function() {
    try {
      var e = ar && ar.require && ar.require("util").types;
      return e || Fa && Fa.binding && Fa.binding("util");
    } catch {
    }
  })();
  Xl = Dn && Dn.isTypedArray;
  kg = Xl ? jc(Xl) : Ug;
  Gg = Object.prototype;
  Bg = Gg.hasOwnProperty;
  Yg = function(e, t) {
    var o = Ks(e), i = !o && lg(e), n = !o && !i && td(e), s = !o && !i && !n && kg(e), l = o || i || n || s, h = l ? rg(e.length, String) : [], f = h.length;
    for (var g in e) (t || Bg.call(e, g)) && !(l && (g == "length" || n && (g == "offset" || g == "parent") || s && (g == "buffer" || g == "byteLength" || g == "byteOffset") || JT(g, f))) && h.push(g);
    return h;
  };
  function id(e, t) {
    return function(o) {
      return e(t(o));
    };
  }
  var jg = id(Object.keys, Object), xg = Object.prototype, zg = xg.hasOwnProperty;
  function $g(e) {
    if (!Xh(e)) return jg(e);
    var t = [];
    for (var o in Object(e)) zg.call(e, o) && o != "constructor" && t.push(o);
    return t;
  }
  Vg = function(e) {
    return ig(e) ? Yg(e) : $g(e);
  };
  var Rr = sn(Object, "create");
  function qg() {
    this.__data__ = Rr ? Rr(null) : {}, this.size = 0;
  }
  function Zg(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Kg = "__lodash_hash_undefined__", Jg = Object.prototype, Xg = Jg.hasOwnProperty;
  function Qg(e) {
    var t = this.__data__;
    if (Rr) {
      var o = t[e];
      return o === Kg ? void 0 : o;
    }
    return Xg.call(t, e) ? t[e] : void 0;
  }
  var em = Object.prototype, tm = em.hasOwnProperty;
  function om(e) {
    var t = this.__data__;
    return Rr ? t[e] !== void 0 : tm.call(t, e);
  }
  var im = "__lodash_hash_undefined__";
  function nm(e, t) {
    var o = this.__data__;
    return this.size += this.has(e) ? 0 : 1, o[e] = Rr && t === void 0 ? im : t, this;
  }
  function nn(e) {
    var t = -1, o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  nn.prototype.clear = qg;
  nn.prototype.delete = Zg;
  nn.prototype.get = Qg;
  nn.prototype.has = om;
  nn.prototype.set = nm;
  function rm() {
    this.__data__ = [], this.size = 0;
  }
  function Xs(e, t) {
    for (var o = e.length; o--; ) if (Kh(e[o][0], t)) return o;
    return -1;
  }
  var sm = Array.prototype, am = sm.splice;
  function cm(e) {
    var t = this.__data__, o = Xs(t, e);
    if (o < 0) return false;
    var i = t.length - 1;
    return o == i ? t.pop() : am.call(t, o, 1), --this.size, true;
  }
  function lm(e) {
    var t = this.__data__, o = Xs(t, e);
    return o < 0 ? void 0 : t[o][1];
  }
  function um(e) {
    return Xs(this.__data__, e) > -1;
  }
  function hm(e, t) {
    var o = this.__data__, i = Xs(o, e);
    return i < 0 ? (++this.size, o.push([
      e,
      t
    ])) : o[i][1] = t, this;
  }
  function ui(e) {
    var t = -1, o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  ui.prototype.clear = rm;
  ui.prototype.delete = cm;
  ui.prototype.get = lm;
  ui.prototype.has = um;
  ui.prototype.set = hm;
  var Ar = sn(Go, "Map");
  function dm() {
    this.size = 0, this.__data__ = {
      hash: new nn(),
      map: new (Ar || ui)(),
      string: new nn()
    };
  }
  function fm(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Qs(e, t) {
    var o = e.__data__;
    return fm(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
  }
  function pm(e) {
    var t = Qs(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Tm(e) {
    return Qs(this, e).get(e);
  }
  function gm(e) {
    return Qs(this, e).has(e);
  }
  function mm(e, t) {
    var o = Qs(this, e), i = o.size;
    return o.set(e, t), this.size += o.size == i ? 0 : 1, this;
  }
  Yn = function(e) {
    var t = -1, o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  };
  Yn.prototype.clear = dm;
  Yn.prototype.delete = pm;
  Yn.prototype.get = Tm;
  Yn.prototype.has = gm;
  Yn.prototype.set = mm;
  function Em(e, t) {
    for (var o = -1, i = t.length, n = e.length; ++o < i; ) e[n + o] = t[o];
    return e;
  }
  var nd = id(Object.getPrototypeOf, Object), Im = "[object Object]", Om = Function.prototype, Rm = Object.prototype, rd = Om.toString, Am = Rm.hasOwnProperty, Sm = rd.call(Object);
  wm = function(e) {
    if (!_i(e) || Pi(e) != Im) return false;
    var t = nd(e);
    if (t === null) return true;
    var o = Am.call(t, "constructor") && t.constructor;
    return typeof o == "function" && o instanceof o && rd.call(o) == Sm;
  };
  var Nm = "[object DOMException]", ym = "[object Error]";
  function sd(e) {
    if (!_i(e)) return false;
    var t = Pi(e);
    return t == ym || t == Nm || typeof e.message == "string" && typeof e.name == "string" && !wm(e);
  }
  function bm() {
    this.__data__ = new ui(), this.size = 0;
  }
  function Lm(e) {
    var t = this.__data__, o = t.delete(e);
    return this.size = t.size, o;
  }
  function vm(e) {
    return this.__data__.get(e);
  }
  function Cm(e) {
    return this.__data__.has(e);
  }
  var Hm = 200;
  function Dm(e, t) {
    var o = this.__data__;
    if (o instanceof ui) {
      var i = o.__data__;
      if (!Ar || i.length < Hm - 1) return i.push([
        e,
        t
      ]), this.size = ++o.size, this;
      o = this.__data__ = new Yn(i);
    }
    return o.set(e, t), this.size = o.size, this;
  }
  jn = function(e) {
    var t = this.__data__ = new ui(e);
    this.size = t.size;
  };
  jn.prototype.clear = bm;
  jn.prototype.delete = Lm;
  jn.prototype.get = vm;
  jn.prototype.has = Cm;
  jn.prototype.set = Dm;
  var ad = typeof exports == "object" && exports && !exports.nodeType && exports, Ql = ad && typeof module == "object" && module && !module.nodeType && module, Mm = Ql && Ql.exports === ad, eu = Mm ? Go.Buffer : void 0, tu = eu ? eu.allocUnsafe : void 0;
  Fm = function(e, t) {
    if (t) return e.slice();
    var o = e.length, i = tu ? tu(o) : new e.constructor(o);
    return e.copy(i), i;
  };
  function Pm(e, t) {
    for (var o = -1, i = e == null ? 0 : e.length, n = 0, s = []; ++o < i; ) {
      var l = e[o];
      t(l, o, e) && (s[n++] = l);
    }
    return s;
  }
  function _m() {
    return [];
  }
  var Um = Object.prototype, Wm = Um.propertyIsEnumerable, ou = Object.getOwnPropertySymbols, km = ou ? function(e) {
    return e == null ? [] : (e = Object(e), Pm(ou(e), function(t) {
      return Wm.call(e, t);
    }));
  } : _m;
  function Gm(e, t, o) {
    var i = t(e);
    return Ks(e) ? i : Em(i, o(e));
  }
  Bm = function(e) {
    return Gm(e, Vg, km);
  };
  let uc, hc, dc, iu, Ym, nu, ru, su, au, jm, xm, zm, $m, Vm;
  uc = sn(Go, "DataView");
  hc = sn(Go, "Promise");
  dc = sn(Go, "Set");
  iu = "[object Map]";
  Ym = "[object Object]";
  nu = "[object Promise]";
  ru = "[object Set]";
  su = "[object WeakMap]";
  au = "[object DataView]";
  jm = rn(uc);
  xm = rn(Ar);
  zm = rn(hc);
  $m = rn(dc);
  Vm = rn(lc);
  Jo = Pi;
  (uc && Jo(new uc(new ArrayBuffer(1))) != au || Ar && Jo(new Ar()) != iu || hc && Jo(hc.resolve()) != nu || dc && Jo(new dc()) != ru || lc && Jo(new lc()) != su) && (Jo = function(e) {
    var t = Pi(e), o = t == Ym ? e.constructor : void 0, i = o ? rn(o) : "";
    if (i) switch (i) {
      case jm:
        return au;
      case xm:
        return iu;
      case zm:
        return nu;
      case $m:
        return ru;
      case Vm:
        return su;
    }
    return t;
  });
  var qm = Object.prototype, Zm = qm.hasOwnProperty;
  function Km(e) {
    var t = e.length, o = new e.constructor(t);
    return t && typeof e[0] == "string" && Zm.call(e, "index") && (o.index = e.index, o.input = e.input), o;
  }
  cu = Go.Uint8Array;
  function xc(e) {
    var t = new e.constructor(e.byteLength);
    return new cu(t).set(new cu(e)), t;
  }
  function Jm(e, t) {
    var o = xc(e.buffer);
    return new e.constructor(o, e.byteOffset, e.byteLength);
  }
  var Xm = /\w*$/;
  function Qm(e) {
    var t = new e.constructor(e.source, Xm.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var lu = Hn ? Hn.prototype : void 0, uu = lu ? lu.valueOf : void 0;
  function eE(e) {
    return uu ? Object(uu.call(e)) : {};
  }
  tE = function(e, t) {
    var o = t ? xc(e.buffer) : e.buffer;
    return new e.constructor(o, e.byteOffset, e.length);
  };
  var oE = "[object Boolean]", iE = "[object Date]", nE = "[object Map]", rE = "[object Number]", sE = "[object RegExp]", aE = "[object Set]", cE = "[object String]", lE = "[object Symbol]", uE = "[object ArrayBuffer]", hE = "[object DataView]", dE = "[object Float32Array]", fE = "[object Float64Array]", pE = "[object Int8Array]", TE = "[object Int16Array]", gE = "[object Int32Array]", mE = "[object Uint8Array]", EE = "[object Uint8ClampedArray]", IE = "[object Uint16Array]", OE = "[object Uint32Array]";
  function RE(e, t, o) {
    var i = e.constructor;
    switch (t) {
      case uE:
        return xc(e);
      case oE:
      case iE:
        return new i(+e);
      case hE:
        return Jm(e);
      case dE:
      case fE:
      case pE:
      case TE:
      case gE:
      case mE:
      case EE:
      case IE:
      case OE:
        return tE(e, o);
      case nE:
        return new i();
      case rE:
      case cE:
        return new i(e);
      case sE:
        return Qm(e);
      case aE:
        return new i();
      case lE:
        return eE(e);
    }
  }
  AE = function(e) {
    return typeof e.constructor == "function" && !Xh(e) ? VT(nd(e)) : {};
  };
  var SE = "[object Map]";
  function wE(e) {
    return _i(e) && Jo(e) == SE;
  }
  var hu = Dn && Dn.isMap, NE = hu ? jc(hu) : wE, yE = "[object Set]";
  function bE(e) {
    return _i(e) && Jo(e) == yE;
  }
  var du = Dn && Dn.isSet, LE = du ? jc(du) : bE, vE = 1, cd = "[object Arguments]", CE = "[object Array]", HE = "[object Boolean]", DE = "[object Date]", ME = "[object Error]", ld = "[object Function]", FE = "[object GeneratorFunction]", PE = "[object Map]", _E = "[object Number]", ud = "[object Object]", UE = "[object RegExp]", WE = "[object Set]", kE = "[object String]", GE = "[object Symbol]", BE = "[object WeakMap]", YE = "[object ArrayBuffer]", jE = "[object DataView]", xE = "[object Float32Array]", zE = "[object Float64Array]", $E = "[object Int8Array]", VE = "[object Int16Array]", qE = "[object Int32Array]", ZE = "[object Uint8Array]", KE = "[object Uint8ClampedArray]", JE = "[object Uint16Array]", XE = "[object Uint32Array]", Xe = {};
  Xe[cd] = Xe[CE] = Xe[YE] = Xe[jE] = Xe[HE] = Xe[DE] = Xe[xE] = Xe[zE] = Xe[$E] = Xe[VE] = Xe[qE] = Xe[PE] = Xe[_E] = Xe[ud] = Xe[UE] = Xe[WE] = Xe[kE] = Xe[GE] = Xe[ZE] = Xe[KE] = Xe[JE] = Xe[XE] = true;
  Xe[ME] = Xe[ld] = Xe[BE] = false;
  function us(e, t, o, i, n, s) {
    var l, h = t & vE;
    if (l !== void 0) return l;
    if (!Js(e)) return e;
    var f = Ks(e);
    if (f) l = Km(e);
    else {
      var g = Jo(e), p = g == ld || g == FE;
      if (td(e)) return Fm(e, h);
      if (g == ud || g == cd || p && !n) l = p ? {} : AE(e);
      else {
        if (!Xe[g]) return n ? e : {};
        l = RE(e, g, h);
      }
    }
    s || (s = new jn());
    var R = s.get(e);
    if (R) return R;
    s.set(e, l), LE(e) ? e.forEach(function(M) {
      l.add(us(M, t, o, M, e, s));
    }) : NE(e) && e.forEach(function(M, H) {
      l.set(H, us(M, t, o, H, e, s));
    });
    var y = Bm, N = f ? void 0 : y(e);
    return qT(N || e, function(M, H) {
      N && (H = M, M = e[H]), tg(l, H, us(M, t, o, H, e, s));
    }), l;
  }
  var QE = 1, eI = 4;
  hd = function(e) {
    return us(e, QE | eI);
  };
  var tI = "[object String]";
  function fc(e) {
    return typeof e == "string" || !Ks(e) && _i(e) && Pi(e) == tI;
  }
  let oI, iI;
  Pa = {
    theme: "system",
    interfaceLanguage: "system",
    mapLanguage: "interface",
    watchCompatibilityMode: true,
    geolocationCorrection: false,
    geolocationBackend: "auto",
    debugMode: false,
    maxCacheSize: 100,
    gpsUpdateInterval: 500,
    mapTileServer: "maptiler",
    customMapTileUrl: "",
    mapTilerApiKey: "",
    autoRecenterTimeout: 6e4,
    showCompass: true,
    keepScreenOn: true,
    enableKalmanFilter: true,
    mapZoomLevel: 15,
    imuUpdateFrequency: 10,
    kalmanGpsUpdateInterval: 1e3
  };
  lL = [
    {
      key: "theme",
      name: "Theme",
      type: "string",
      description: "Application theme (light, dark, or system default)",
      userFacing: true
    },
    {
      key: "interfaceLanguage",
      name: "Interface Language",
      type: "string",
      description: "Language for the user interface",
      userFacing: true
    },
    {
      key: "mapLanguage",
      name: "Map Language",
      type: "string",
      description: "Language for map labels",
      userFacing: true
    },
    {
      key: "watchCompatibilityMode",
      name: "Watch Compatibility Mode",
      type: "boolean",
      description: "Enable compatibility mode for GPS watches",
      userFacing: true
    },
    {
      key: "geolocationCorrection",
      name: "Geolocation Correction (WGS to GCJ)",
      type: "boolean",
      description: "Apply WGS to GCJ coordinate conversion for China region",
      userFacing: true
    },
    {
      key: "geolocationBackend",
      name: "Geolocation Backend",
      type: "string",
      description: "Backend strategy for geolocation (auto, kalman, gps, or ip)",
      userFacing: true
    },
    {
      key: "debugMode",
      name: "Debug Mode",
      type: "boolean",
      description: "Enable debug logging and developer tools"
    },
    {
      key: "maxCacheSize",
      name: "Max Cache Size (MB)",
      type: "number",
      description: "Maximum local storage cache size for map tiles"
    },
    {
      key: "gpsUpdateInterval",
      name: "GPS Update Interval (ms)",
      type: "number",
      description: "Minimum interval between GPS position updates"
    },
    {
      key: "kalmanGpsUpdateInterval",
      name: "Kalman GPS Update Interval (ms)",
      type: "number",
      description: "Minimum interval between GPS position updates when using Kalman filter"
    },
    {
      key: "mapTileServer",
      name: "Map Tile Server",
      type: "string",
      description: "Tile server for map rendering (maptiler, openfreemap, custom)"
    },
    {
      key: "customMapTileUrl",
      name: "Custom Map Tile URL",
      type: "string",
      description: "Custom map tile server URL (used when Map Tile Server is set to custom)"
    },
    {
      key: "mapTilerApiKey",
      name: "MapTiler API Key",
      type: "string",
      description: "API key for MapTiler services"
    },
    {
      key: "autoRecenterTimeout",
      name: "Auto Recenter Timeout (ms)",
      type: "number",
      description: "Time limit to restore last map position (in milliseconds)"
    },
    {
      key: "showCompass",
      name: "Show Compass",
      type: "boolean",
      description: "Display compass overlay on map"
    },
    {
      key: "keepScreenOn",
      name: "Keep Screen On",
      type: "boolean",
      description: "Prevent screen from turning off during tracking"
    },
    {
      key: "enableKalmanFilter",
      name: "Enable Kalman Filter",
      type: "boolean",
      description: "Use Kalman filter for GPS position smoothing"
    },
    {
      key: "mapZoomLevel",
      name: "Default Map Zoom Level",
      type: "number",
      description: "Default zoom level when opening the map"
    },
    {
      key: "imuUpdateFrequency",
      name: "IMU Update Frequency (Hz)",
      type: "number",
      description: "Update frequency for IMU sensors (0 = immediate, 10-20Hz recommended)"
    }
  ];
  oI = "trackmaker_settings";
  iI = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Ft(e) {
    try {
      if (typeof localStorage > "u") return Pa[e];
      const t = localStorage.getItem(oI);
      if (t !== null) return JSON.parse(t)[e] ?? Pa[e];
    } catch {
    }
    return Pa[e];
  }
  function fu() {
    return Ft("debugMode");
  }
  function zc() {
    return Ft("gpsUpdateInterval");
  }
  function nI() {
    return Ft("kalmanGpsUpdateInterval");
  }
  function rI() {
    return Ft("enableKalmanFilter");
  }
  uL = function() {
    return Ft("mapZoomLevel");
  };
  hL = function() {
    return Ft("keepScreenOn");
  };
  dL = function() {
    return Ft("mapTileServer");
  };
  fL = function() {
    return Ft("showCompass");
  };
  pL = function() {
    return Ft("autoRecenterTimeout");
  };
  TL = function() {
    return Ft("customMapTileUrl");
  };
  gL = function() {
    return Ft("mapTilerApiKey");
  };
  function pc() {
    return Ft("imuUpdateFrequency");
  }
  class sI {
    constructor(t = "trackmaker-db", o = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = o;
    }
    getMaxCacheSize() {
      try {
        return Ft("maxCacheSize") || 100;
      } catch {
        return 100;
      }
    }
    async shouldPruneCache() {
      return this.db ? new Promise((t) => {
        const n = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).count();
        n.onsuccess = () => {
          const s = this.getMaxCacheSize() * 10;
          t(n.result > s);
        }, n.onerror = () => t(false);
      }) : false;
    }
    async pruneCache() {
      if (this.db) return new Promise((t, o) => {
        const i = this.db.transaction(this.storeName, "readwrite"), s = i.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), l = 100;
        let h = 0;
        s.onsuccess = (f) => {
          const g = f.target.result;
          g && h < l && (g.delete(), h++, g.continue());
        }, i.oncomplete = () => t(), i.onerror = () => o(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return k(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, k(void 0);
      } catch (t) {
        return C(new at("Failed to initialize Web storage", it.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, o) => {
        const i = indexedDB.open(this.dbName, 1);
        i.onupgradeneeded = (n) => {
          const s = n.target.result;
          s.objectStoreNames.contains(this.storeName) || s.createObjectStore(this.storeName);
        }, i.onsuccess = (n) => {
          t(n.target.result);
        }, i.onerror = (n) => {
          o(n.target.error ?? Error("Failed to open database"));
        };
      });
    }
    async set(t, o) {
      if (!this.db) return C(new at("Database not initialized", it.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (i) => new Promise((n, s) => {
          const l = i.put(hd(o), t);
          l.onsuccess = () => n(), l.onerror = () => s(new Error("Failed to set value"));
        })), k(void 0);
      } catch (i) {
        return C(new at(`Failed to set value for key: ${t}`, it.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.db) return C(new at("Database not initialized", it.NOT_INITIALIZED));
      try {
        const o = await this.executeTransaction("readonly", (i) => new Promise((n, s) => {
          const l = i.get(t);
          l.onsuccess = () => n(l.result), l.onerror = () => s(new Error("Failed to get value"));
        }));
        return k(o);
      } catch (o) {
        return C(new at(`Failed to get value for key: ${t}`, it.GET_FAILED, o));
      }
    }
    async save() {
      return k(void 0);
    }
    async exportToJson() {
      if (!this.db) return C(new at("Database not initialized", it.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (o) => new Promise((i, n) => {
          const s = o.getAll();
          s.onsuccess = () => {
            const h = s.result.reduce((f, g, p) => (f[p] = g, f), {});
            i(h);
          }, s.onerror = () => n(new Error("Failed to export data"));
        }));
        return k(JSON.stringify(t, null, 2));
      } catch (t) {
        return C(new at("Failed to export data to JSON", it.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return C(new at("Database not initialized", it.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((o, i) => {
          const n = t.clear();
          n.onsuccess = () => o(), n.onerror = () => i(new Error("Failed to clear store"));
        })), k(void 0);
      } catch (t) {
        return C(new at("Failed to clear store", it.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return C(new at("Database not initialized", it.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (o) => new Promise((i, n) => {
          const s = o.delete(t);
          s.onsuccess = () => i(), s.onerror = () => n(new Error("Failed to remove key"));
        })), k(void 0);
      } catch (o) {
        return C(new at(`Failed to remove key: ${t}`, it.REMOVE_FAILED, o));
      }
    }
    executeTransaction(t, o) {
      return new Promise((i, n) => {
        if (!this.db) {
          n(new Error("Database not initialized"));
          return;
        }
        const s = this.db.transaction(this.storeName, t), l = s.objectStore(this.storeName);
        o(l).then(i).catch(n), s.onerror = () => {
          n(new Error("Transaction failed"));
        };
      });
    }
  }
  class aI {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init(t) {
      if (this.initialized) return k(void 0);
      const o = await this.getPermissionStatus();
      if (o.isErr()) return C(o.error);
      if (o.value === "prompt" && t) {
        if (!await t(o.value, "permission.location.prompt")) return C(new Ct("Geolocation permission denied", gt.PERMISSION_DENIED));
        const n = await this.getPermissionStatus();
        if (n.isErr()) return C(n.error);
        if (n.value === "denied") return C(new Ct("Geolocation permission denied", gt.PERMISSION_DENIED));
      }
      try {
        return await this.injectTauriProvider(), this.initialized = true, k(void 0);
      } catch (i) {
        return C(new Ct("Failed to initialize Tauri geolocation provider", gt.INITIALIZATION_FAILED, i));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new cI(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return await this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return k(t.state);
      } catch (t) {
        return C(new Ct("Failed to get permission status", gt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(k("granted")), (o) => {
          o.code === o.PERMISSION_DENIED ? t(k("denied")) : t(k("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), k("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? k("denied") : C(new Ct("Failed to request permission", gt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return k(this.convertToGeolocationPosition(t));
      } catch (t) {
        return C(new Ct("Failed to get current position", gt.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await Nt(this.tauriHandlerName);
    }
    convertToGeolocationPosition(t) {
      const o = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, i = {
        coords: {
          ...o,
          toJSON: () => JSON.stringify(o)
        },
        timestamp: performance.now()
      };
      return {
        ...i,
        toJSON: () => JSON.stringify(i)
      };
    }
    async watchPosition(t, o) {
      try {
        const i = zc(), n = (o == null ? void 0 : o.highFrequency) ?? false, s = window.setInterval(async () => {
          try {
            const l = await this.getCurrentPosition();
            l.isOk() && t(l.value);
          } catch (l) {
            console.error("Error in watch position:", l);
          }
        }, n ? 100 : i);
        return this.watchCallbacks.set(s, s), k(s);
      } catch (i) {
        return C(new Ct("Failed to start watching position", gt.WATCH_FAILED, i));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), k(void 0);
      } catch (o) {
        return C(new Ct("Failed to clear watch", gt.CLEAR_WATCH_FAILED, o));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class cI {
    constructor(t) {
      __publicField(this, "tauriHandlerName");
      this.tauriHandlerName = t;
    }
    getCurrentPosition(t, o) {
      this.getTauriPosition().then(t).catch((i) => {
        o == null ? void 0 : o(this.createPositionError(i));
      });
    }
    watchPosition(t, o, i) {
      const n = zc(), s = (i == null ? void 0 : i.highFrequency) ?? false;
      return window.setInterval(() => {
        this.getTauriPosition().then(t).catch((h) => {
          o == null ? void 0 : o(this.createPositionError(h));
        });
      }, s ? 100 : n);
    }
    clearWatch(t) {
      clearInterval(t);
    }
    async getTauriPosition() {
      const t = await Nt(this.tauriHandlerName), o = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, i = {
        coords: {
          ...o,
          toJSON: () => JSON.stringify(o)
        },
        timestamp: performance.now()
      };
      return {
        ...i,
        toJSON: () => JSON.stringify(i)
      };
    }
    createPositionError(t) {
      return {
        code: 2,
        message: t.message,
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3
      };
    }
  }
  class lI {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "compatibilityModeWatches", /* @__PURE__ */ new Map());
      __publicField(this, "compatibilityModeCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "lastCompatibilityPosition", null);
      __publicField(this, "lastCompatibilityUpdateTime", 0);
      __publicField(this, "compatibilityIntervalId", null);
      __publicField(this, "initPromise", null);
    }
    async init(t) {
      if (this.initialized) return k(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const o = await this.initPromise;
      return o.isErr() && (this.initPromise = null), o;
    }
    async doInit(t) {
      if (this.initialized) return k(void 0);
      if (!this.isSupported()) return C(new Ct("Geolocation is not supported by this browser", gt.UNSUPPORTED));
      const o = await this.getPermissionStatus();
      if (o.isErr()) return C(o.error);
      if (o.value === "prompt" && t) {
        if (!await t(o.value, "permission.location.prompt")) return C(new Ct("Geolocation permission denied", gt.PERMISSION_DENIED));
        const n = await this.getPermissionStatus();
        if (n.isErr()) return C(n.error);
        if (n.value === "denied") return C(new Ct("Geolocation permission denied", gt.PERMISSION_DENIED));
      }
      return this.initialized = true, k(void 0);
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return k(t.state);
      } catch (t) {
        return C(new Ct("Failed to get permission status", gt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(k("granted")), (o) => {
          o.code === o.PERMISSION_DENIED ? t(k("denied")) : t(k("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? k("granted") : k("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? k("denied") : k("prompt") : C(new Ct("Failed to request permission", gt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((o) => {
          t(k(o));
        }, (o) => {
          let i;
          const n = o.message;
          switch (o.code) {
            case o.PERMISSION_DENIED:
              i = gt.PERMISSION_DENIED;
              break;
            case o.POSITION_UNAVAILABLE:
              i = gt.POSITION_UNAVAILABLE;
              break;
            case o.TIMEOUT:
              i = gt.TIMEOUT;
              break;
            default:
              i = gt.POSITION_UNAVAILABLE;
          }
          t(C(new Ct(n, i, new Error(o.message))));
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 0
        });
      });
    }
    async watchPosition(t, o) {
      if (!this.initialized) {
        const h = await this.init();
        if (h.isErr()) return C(h.error);
      }
      const i = nI(), n = zc(), s = Ft("watchCompatibilityMode"), l = (o == null ? void 0 : o.highFrequency) ?? false;
      if (s || l) {
        l ? console.log("[Geolocation] High frequency mode enabled") : console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const h = Date.now();
          return this.compatibilityModeCallbacks.set(h, t), this.compatibilityIntervalId === null && (this.compatibilityIntervalId = setInterval(async () => {
            const f = await this.getCurrentPosition();
            if (f.isOk()) {
              const g = f.value, p = {
                lat: g.coords.latitude,
                lng: g.coords.longitude,
                acc: g.coords.accuracy
              }, R = Date.now();
              if (!(!l && R - this.lastCompatibilityUpdateTime > n) && !l && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === p.lat && this.lastCompatibilityPosition.lng === p.lng && this.lastCompatibilityPosition.acc === p.acc) return;
              this.lastCompatibilityPosition = p;
              for (const N of this.compatibilityModeCallbacks.values()) try {
                N(g);
              } catch (M) {
                console.error("[Geolocation] Callback error:", M);
              }
              this.lastCompatibilityUpdateTime = R;
            }
          }, l ? i : n)), this.compatibilityModeWatches.set(h, this.compatibilityIntervalId), k(h);
        } catch (h) {
          return C(new Ct("Failed to start watching position (compatibility mode)", gt.WATCH_FAILED, h));
        }
      }
      try {
        const h = navigator.geolocation.watchPosition(t, (f) => {
          console.error("Geolocation watch error:", f);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: l ? 0 : n
        });
        return k(h);
      } catch (h) {
        return C(new Ct("Failed to start watching position", gt.WATCH_FAILED, h));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null)) : navigator.geolocation.clearWatch(t), k(void 0);
      } catch (o) {
        return C(new Ct("Failed to clear watch", gt.CLEAR_WATCH_FAILED, o));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class uI {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "initPromise", null);
      __publicField(this, "isWatching", false);
      __publicField(this, "listeners", /* @__PURE__ */ new Map());
      __publicField(this, "nextListenerId", 0);
      __publicField(this, "lastReading", null);
      __publicField(this, "boundHandleOrientationEvent");
      __publicField(this, "disposed", false);
      __publicField(this, "orientationEventListenerCount", 0);
      this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);
    }
    async init(t) {
      if (this.initialized) return k(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const o = await this.initPromise;
      return o.isErr() && (this.initPromise = null), o;
    }
    async doInit(t) {
      if (this.disposed) return C(new Ue("Device orientation provider has been disposed"));
      const o = await this.requestPermissionIfNeeded(t);
      return o.isErr() ? C(o.error) : await this.checkHardwareSupport() ? (this.initialized = true, k(void 0)) : C(new Ue("Device orientation is not supported by this browser"));
    }
    async requestPermissionIfNeeded(t) {
      try {
        if (typeof DeviceOrientationEvent < "u" && typeof DeviceOrientationEvent.requestPermission == "function") {
          let o = "prompt";
          try {
            o = await DeviceOrientationEvent.requestPermission();
          } catch {
          }
          if (t && o === "prompt") {
            if (!await t("prompt", "permission.device-orientation.required")) return C(new Ue("User declined to grant device orientation permission"));
            if (await DeviceOrientationEvent.requestPermission() !== "granted") return C(new Ue("Device orientation permission denied"));
          } else return o === "denied" ? C(new Ue("Device orientation permission denied")) : k(void 0);
        }
        return k(void 0);
      } catch (o) {
        return C(new Ue("Failed to request device orientation permission", void 0, o));
      }
    }
    async checkHardwareSupport() {
      return "DeviceOrientationEvent" in window ? new Promise((t) => {
        let o = false;
        const i = () => {
          window.removeEventListener("deviceorientation", l);
        }, n = () => {
          o || (o = true, i(), t(true));
        }, s = () => {
          o || (o = true, i(), t(false));
        }, l = (h) => {
          (h.alpha !== null || h.beta !== null || h.gamma !== null) && n();
        };
        window.addEventListener("deviceorientation", l), setTimeout(s, 1e3);
      }) : false;
    }
    async start() {
      if (this.disposed) return C(new Ue("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      if (this.isWatching) return k(void 0);
      try {
        return this.orientationEventListenerCount === 0 && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.orientationEventListenerCount++, this.isWatching = true, k(void 0);
      } catch (t) {
        return C(new Ue("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return k(void 0);
      try {
        return this.orientationEventListenerCount--, this.isWatching = false, this.lastReading = null, this.orientationEventListenerCount === 0 && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), k(void 0);
      } catch (t) {
        return C(new Ue("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (this.disposed) return C(new Ue("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return k(this.lastReading);
    }
    onOrientationChange(t) {
      const o = this.nextListenerId++;
      return this.listeners.set(o, t), this.lastReading && t(this.lastReading), o;
    }
    removeEventListener(t) {
      return this.listeners.delete(t), k(void 0);
    }
    dispose() {
      this.disposed || (this.disposed = true, this.stop(), this.listeners.clear(), this.initialized = false, this.initPromise = null, this.lastReading = null);
    }
    handleOrientationEvent(t) {
      if (t.alpha === null && t.beta === null && t.gamma === null) return;
      const o = {
        alpha: t.alpha ?? 0,
        beta: t.beta ?? 0,
        gamma: t.gamma ?? 0,
        webkitCompassHeading: t.webkitCompassHeading,
        timestamp: t.timeStamp || performance.now()
      };
      this.lastReading = o;
      for (const i of this.listeners.values()) try {
        i(o);
      } catch (n) {
        console.error("Error in device orientation callback:", n);
      }
    }
  }
  hI = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function dd(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var o = function i() {
        var n = false;
        try {
          n = this instanceof i;
        } catch {
        }
        return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      o.prototype = t.prototype;
    } else o = {};
    return Object.defineProperty(o, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(i) {
      var n = Object.getOwnPropertyDescriptor(e, i);
      Object.defineProperty(o, i, n.get ? n : {
        enumerable: true,
        get: function() {
          return e[i];
        }
      });
    }), o;
  }
  var He = {};
  const dI = Object.prototype.toString;
  function Sr(e) {
    const t = dI.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const fI = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: Sr
  }, Symbol.toStringTag, {
    value: "Module"
  })), pI = dd(fI);
  function TI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Sr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var o = t.fromIndex, i = o === void 0 ? 0 : o, n = t.toIndex, s = n === void 0 ? e.length : n;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (s <= i || s > e.length || !Number.isInteger(s)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var l = e[i], h = i + 1; h < s; h++) e[h] > l && (l = e[h]);
    return l;
  }
  function gI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Sr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var o = t.fromIndex, i = o === void 0 ? 0 : o, n = t.toIndex, s = n === void 0 ? e.length : n;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (s <= i || s > e.length || !Number.isInteger(s)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var l = e[i], h = i + 1; h < s; h++) e[h] < l && (l = e[h]);
    return l;
  }
  function mI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Sr(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var o;
    if (t.output !== void 0) {
      if (!Sr(t.output)) throw new TypeError("output option must be an array if specified");
      o = t.output;
    } else o = new Array(e.length);
    var i = gI(e), n = TI(e);
    if (i === n) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var s = t.min, l = s === void 0 ? t.autoMinMax ? i : 0 : s, h = t.max, f = h === void 0 ? t.autoMinMax ? n : 1 : h;
    if (l >= f) throw new RangeError("min option must be smaller than max option");
    for (var g = (f - l) / (n - i), p = 0; p < e.length; p++) o[p] = (e[p] - i) * g + l;
    return o;
  }
  const EI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mI
  }, Symbol.toStringTag, {
    value: "Module"
  })), II = dd(EI);
  var pu;
  function OI() {
    var _ce_instances, e_fn, _e;
    if (pu) return He;
    pu = 1, Object.defineProperty(He, "__esModule", {
      value: true
    });
    var e = pI, t = II;
    const o = " ".repeat(2), i = " ".repeat(4);
    function n() {
      return s(this);
    }
    function s(T, a = {}) {
      const { maxRows: c = 15, maxColumns: r = 10, maxNumSize: u = 8, padMinus: d = "auto" } = a;
      return `${T.constructor.name} {
${o}[
${i}${l(T, c, r, u, d)}
${o}]
${o}rows: ${T.rows}
${o}columns: ${T.columns}
}`;
    }
    function l(T, a, c, r, u) {
      const { rows: d, columns: m } = T, E = Math.min(d, a), I = Math.min(m, c), O = [];
      if (u === "auto") {
        u = false;
        e: for (let v = 0; v < E; v++) for (let A = 0; A < I; A++) if (T.get(v, A) < 0) {
          u = true;
          break e;
        }
      }
      for (let v = 0; v < E; v++) {
        let A = [];
        for (let F = 0; F < I; F++) A.push(h(T.get(v, F), r, u));
        O.push(`${A.join(" ")}`);
      }
      return I !== m && (O[O.length - 1] += ` ... ${m - c} more columns`), E !== d && O.push(`... ${d - a} more rows`), O.join(`
${i}`);
    }
    function h(T, a, c) {
      return (T >= 0 && c ? ` ${f(T, a - 1)}` : f(T, a)).padEnd(a);
    }
    function f(T, a) {
      let c = T.toString();
      if (c.length <= a) return c;
      let r = T.toFixed(a);
      if (r.length > a && (r = T.toFixed(Math.max(0, a - (r.length - a)))), r.length <= a && !r.startsWith("0.000") && !r.startsWith("-0.000")) return r;
      let u = T.toExponential(a);
      return u.length > a && (u = T.toExponential(Math.max(0, a - (u.length - a)))), u.slice(0);
    }
    function g(T, a) {
      T.prototype.add = function(r) {
        return typeof r == "number" ? this.addS(r) : this.addM(r);
      }, T.prototype.addS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) + r);
        return this;
      }, T.prototype.addM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) + r.get(u, d));
        return this;
      }, T.add = function(r, u) {
        return new a(r).add(u);
      }, T.prototype.sub = function(r) {
        return typeof r == "number" ? this.subS(r) : this.subM(r);
      }, T.prototype.subS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) - r);
        return this;
      }, T.prototype.subM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) - r.get(u, d));
        return this;
      }, T.sub = function(r, u) {
        return new a(r).sub(u);
      }, T.prototype.subtract = T.prototype.sub, T.prototype.subtractS = T.prototype.subS, T.prototype.subtractM = T.prototype.subM, T.subtract = T.sub, T.prototype.mul = function(r) {
        return typeof r == "number" ? this.mulS(r) : this.mulM(r);
      }, T.prototype.mulS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) * r);
        return this;
      }, T.prototype.mulM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) * r.get(u, d));
        return this;
      }, T.mul = function(r, u) {
        return new a(r).mul(u);
      }, T.prototype.multiply = T.prototype.mul, T.prototype.multiplyS = T.prototype.mulS, T.prototype.multiplyM = T.prototype.mulM, T.multiply = T.mul, T.prototype.div = function(r) {
        return typeof r == "number" ? this.divS(r) : this.divM(r);
      }, T.prototype.divS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) / r);
        return this;
      }, T.prototype.divM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) / r.get(u, d));
        return this;
      }, T.div = function(r, u) {
        return new a(r).div(u);
      }, T.prototype.divide = T.prototype.div, T.prototype.divideS = T.prototype.divS, T.prototype.divideM = T.prototype.divM, T.divide = T.div, T.prototype.mod = function(r) {
        return typeof r == "number" ? this.modS(r) : this.modM(r);
      }, T.prototype.modS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) % r);
        return this;
      }, T.prototype.modM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) % r.get(u, d));
        return this;
      }, T.mod = function(r, u) {
        return new a(r).mod(u);
      }, T.prototype.modulus = T.prototype.mod, T.prototype.modulusS = T.prototype.modS, T.prototype.modulusM = T.prototype.modM, T.modulus = T.mod, T.prototype.and = function(r) {
        return typeof r == "number" ? this.andS(r) : this.andM(r);
      }, T.prototype.andS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) & r);
        return this;
      }, T.prototype.andM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) & r.get(u, d));
        return this;
      }, T.and = function(r, u) {
        return new a(r).and(u);
      }, T.prototype.or = function(r) {
        return typeof r == "number" ? this.orS(r) : this.orM(r);
      }, T.prototype.orS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) | r);
        return this;
      }, T.prototype.orM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) | r.get(u, d));
        return this;
      }, T.or = function(r, u) {
        return new a(r).or(u);
      }, T.prototype.xor = function(r) {
        return typeof r == "number" ? this.xorS(r) : this.xorM(r);
      }, T.prototype.xorS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) ^ r);
        return this;
      }, T.prototype.xorM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) ^ r.get(u, d));
        return this;
      }, T.xor = function(r, u) {
        return new a(r).xor(u);
      }, T.prototype.leftShift = function(r) {
        return typeof r == "number" ? this.leftShiftS(r) : this.leftShiftM(r);
      }, T.prototype.leftShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) << r);
        return this;
      }, T.prototype.leftShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) << r.get(u, d));
        return this;
      }, T.leftShift = function(r, u) {
        return new a(r).leftShift(u);
      }, T.prototype.signPropagatingRightShift = function(r) {
        return typeof r == "number" ? this.signPropagatingRightShiftS(r) : this.signPropagatingRightShiftM(r);
      }, T.prototype.signPropagatingRightShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) >> r);
        return this;
      }, T.prototype.signPropagatingRightShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) >> r.get(u, d));
        return this;
      }, T.signPropagatingRightShift = function(r, u) {
        return new a(r).signPropagatingRightShift(u);
      }, T.prototype.rightShift = function(r) {
        return typeof r == "number" ? this.rightShiftS(r) : this.rightShiftM(r);
      }, T.prototype.rightShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) >>> r);
        return this;
      }, T.prototype.rightShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) >>> r.get(u, d));
        return this;
      }, T.rightShift = function(r, u) {
        return new a(r).rightShift(u);
      }, T.prototype.zeroFillRightShift = T.prototype.rightShift, T.prototype.zeroFillRightShiftS = T.prototype.rightShiftS, T.prototype.zeroFillRightShiftM = T.prototype.rightShiftM, T.zeroFillRightShift = T.rightShift, T.prototype.not = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, ~this.get(r, u));
        return this;
      }, T.not = function(r) {
        return new a(r).not();
      }, T.prototype.abs = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.abs(this.get(r, u)));
        return this;
      }, T.abs = function(r) {
        return new a(r).abs();
      }, T.prototype.acos = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.acos(this.get(r, u)));
        return this;
      }, T.acos = function(r) {
        return new a(r).acos();
      }, T.prototype.acosh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.acosh(this.get(r, u)));
        return this;
      }, T.acosh = function(r) {
        return new a(r).acosh();
      }, T.prototype.asin = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.asin(this.get(r, u)));
        return this;
      }, T.asin = function(r) {
        return new a(r).asin();
      }, T.prototype.asinh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.asinh(this.get(r, u)));
        return this;
      }, T.asinh = function(r) {
        return new a(r).asinh();
      }, T.prototype.atan = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.atan(this.get(r, u)));
        return this;
      }, T.atan = function(r) {
        return new a(r).atan();
      }, T.prototype.atanh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.atanh(this.get(r, u)));
        return this;
      }, T.atanh = function(r) {
        return new a(r).atanh();
      }, T.prototype.cbrt = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cbrt(this.get(r, u)));
        return this;
      }, T.cbrt = function(r) {
        return new a(r).cbrt();
      }, T.prototype.ceil = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.ceil(this.get(r, u)));
        return this;
      }, T.ceil = function(r) {
        return new a(r).ceil();
      }, T.prototype.clz32 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.clz32(this.get(r, u)));
        return this;
      }, T.clz32 = function(r) {
        return new a(r).clz32();
      }, T.prototype.cos = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cos(this.get(r, u)));
        return this;
      }, T.cos = function(r) {
        return new a(r).cos();
      }, T.prototype.cosh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cosh(this.get(r, u)));
        return this;
      }, T.cosh = function(r) {
        return new a(r).cosh();
      }, T.prototype.exp = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.exp(this.get(r, u)));
        return this;
      }, T.exp = function(r) {
        return new a(r).exp();
      }, T.prototype.expm1 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.expm1(this.get(r, u)));
        return this;
      }, T.expm1 = function(r) {
        return new a(r).expm1();
      }, T.prototype.floor = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.floor(this.get(r, u)));
        return this;
      }, T.floor = function(r) {
        return new a(r).floor();
      }, T.prototype.fround = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.fround(this.get(r, u)));
        return this;
      }, T.fround = function(r) {
        return new a(r).fround();
      }, T.prototype.log = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log(this.get(r, u)));
        return this;
      }, T.log = function(r) {
        return new a(r).log();
      }, T.prototype.log1p = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log1p(this.get(r, u)));
        return this;
      }, T.log1p = function(r) {
        return new a(r).log1p();
      }, T.prototype.log10 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log10(this.get(r, u)));
        return this;
      }, T.log10 = function(r) {
        return new a(r).log10();
      }, T.prototype.log2 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log2(this.get(r, u)));
        return this;
      }, T.log2 = function(r) {
        return new a(r).log2();
      }, T.prototype.round = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.round(this.get(r, u)));
        return this;
      }, T.round = function(r) {
        return new a(r).round();
      }, T.prototype.sign = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sign(this.get(r, u)));
        return this;
      }, T.sign = function(r) {
        return new a(r).sign();
      }, T.prototype.sin = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sin(this.get(r, u)));
        return this;
      }, T.sin = function(r) {
        return new a(r).sin();
      }, T.prototype.sinh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sinh(this.get(r, u)));
        return this;
      }, T.sinh = function(r) {
        return new a(r).sinh();
      }, T.prototype.sqrt = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sqrt(this.get(r, u)));
        return this;
      }, T.sqrt = function(r) {
        return new a(r).sqrt();
      }, T.prototype.tan = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.tan(this.get(r, u)));
        return this;
      }, T.tan = function(r) {
        return new a(r).tan();
      }, T.prototype.tanh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.tanh(this.get(r, u)));
        return this;
      }, T.tanh = function(r) {
        return new a(r).tanh();
      }, T.prototype.trunc = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.trunc(this.get(r, u)));
        return this;
      }, T.trunc = function(r) {
        return new a(r).trunc();
      }, T.pow = function(r, u) {
        return new a(r).pow(u);
      }, T.prototype.pow = function(r) {
        return typeof r == "number" ? this.powS(r) : this.powM(r);
      }, T.prototype.powS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) ** r);
        return this;
      }, T.prototype.powM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let d = 0; d < this.columns; d++) this.set(u, d, this.get(u, d) ** r.get(u, d));
        return this;
      };
    }
    function p(T, a, c) {
      let r = c ? T.rows : T.rows - 1;
      if (a < 0 || a > r) throw new RangeError("Row index out of range");
    }
    function R(T, a, c) {
      let r = c ? T.columns : T.columns - 1;
      if (a < 0 || a > r) throw new RangeError("Column index out of range");
    }
    function y(T, a) {
      if (a.to1DArray && (a = a.to1DArray()), a.length !== T.columns) throw new RangeError("vector size must be the same as the number of columns");
      return a;
    }
    function N(T, a) {
      if (a.to1DArray && (a = a.to1DArray()), a.length !== T.rows) throw new RangeError("vector size must be the same as the number of rows");
      return a;
    }
    function M(T, a) {
      if (!e.isAnyArray(a)) throw new TypeError("row indices must be an array");
      for (let c = 0; c < a.length; c++) if (a[c] < 0 || a[c] >= T.rows) throw new RangeError("row indices are out of range");
    }
    function H(T, a) {
      if (!e.isAnyArray(a)) throw new TypeError("column indices must be an array");
      for (let c = 0; c < a.length; c++) if (a[c] < 0 || a[c] >= T.columns) throw new RangeError("column indices are out of range");
    }
    function ne(T, a, c, r, u) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (q("startRow", a), q("endRow", c), q("startColumn", r), q("endColumn", u), a > c || r > u || a < 0 || a >= T.rows || c < 0 || c >= T.rows || r < 0 || r >= T.columns || u < 0 || u >= T.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function ee(T, a = 0) {
      let c = [];
      for (let r = 0; r < T; r++) c.push(a);
      return c;
    }
    function q(T, a) {
      if (typeof a != "number") throw new TypeError(`${T} must be a number`);
    }
    function j(T) {
      if (T.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function _(T) {
      let a = ee(T.rows);
      for (let c = 0; c < T.rows; ++c) for (let r = 0; r < T.columns; ++r) a[c] += T.get(c, r);
      return a;
    }
    function re(T) {
      let a = ee(T.columns);
      for (let c = 0; c < T.rows; ++c) for (let r = 0; r < T.columns; ++r) a[r] += T.get(c, r);
      return a;
    }
    function ge(T) {
      let a = 0;
      for (let c = 0; c < T.rows; c++) for (let r = 0; r < T.columns; r++) a += T.get(c, r);
      return a;
    }
    function se(T) {
      let a = ee(T.rows, 1);
      for (let c = 0; c < T.rows; ++c) for (let r = 0; r < T.columns; ++r) a[c] *= T.get(c, r);
      return a;
    }
    function fe(T) {
      let a = ee(T.columns, 1);
      for (let c = 0; c < T.rows; ++c) for (let r = 0; r < T.columns; ++r) a[r] *= T.get(c, r);
      return a;
    }
    function ie(T) {
      let a = 1;
      for (let c = 0; c < T.rows; c++) for (let r = 0; r < T.columns; r++) a *= T.get(c, r);
      return a;
    }
    function me(T, a, c) {
      const r = T.rows, u = T.columns, d = [];
      for (let m = 0; m < r; m++) {
        let E = 0, I = 0, O = 0;
        for (let v = 0; v < u; v++) O = T.get(m, v) - c[m], E += O, I += O * O;
        a ? d.push((I - E * E / u) / (u - 1)) : d.push((I - E * E / u) / u);
      }
      return d;
    }
    function Ce(T, a, c) {
      const r = T.rows, u = T.columns, d = [];
      for (let m = 0; m < u; m++) {
        let E = 0, I = 0, O = 0;
        for (let v = 0; v < r; v++) O = T.get(v, m) - c[m], E += O, I += O * O;
        a ? d.push((I - E * E / r) / (r - 1)) : d.push((I - E * E / r) / r);
      }
      return d;
    }
    function pe(T, a, c) {
      const r = T.rows, u = T.columns, d = r * u;
      let m = 0, E = 0, I = 0;
      for (let O = 0; O < r; O++) for (let v = 0; v < u; v++) I = T.get(O, v) - c, m += I, E += I * I;
      return a ? (E - m * m / d) / (d - 1) : (E - m * m / d) / d;
    }
    function Ye(T, a) {
      for (let c = 0; c < T.rows; c++) for (let r = 0; r < T.columns; r++) T.set(c, r, T.get(c, r) - a[c]);
    }
    function It(T, a) {
      for (let c = 0; c < T.rows; c++) for (let r = 0; r < T.columns; r++) T.set(c, r, T.get(c, r) - a[r]);
    }
    function oo(T, a) {
      for (let c = 0; c < T.rows; c++) for (let r = 0; r < T.columns; r++) T.set(c, r, T.get(c, r) - a);
    }
    function Je(T) {
      const a = [];
      for (let c = 0; c < T.rows; c++) {
        let r = 0;
        for (let u = 0; u < T.columns; u++) r += T.get(c, u) ** 2 / (T.columns - 1);
        a.push(Math.sqrt(r));
      }
      return a;
    }
    function Me(T, a) {
      for (let c = 0; c < T.rows; c++) for (let r = 0; r < T.columns; r++) T.set(c, r, T.get(c, r) / a[c]);
    }
    function Ve(T) {
      const a = [];
      for (let c = 0; c < T.columns; c++) {
        let r = 0;
        for (let u = 0; u < T.rows; u++) r += T.get(u, c) ** 2 / (T.rows - 1);
        a.push(Math.sqrt(r));
      }
      return a;
    }
    function Bo(T, a) {
      for (let c = 0; c < T.rows; c++) for (let r = 0; r < T.columns; r++) T.set(c, r, T.get(c, r) / a[r]);
    }
    function cn(T) {
      const a = T.size - 1;
      let c = 0;
      for (let r = 0; r < T.columns; r++) for (let u = 0; u < T.rows; u++) c += T.get(u, r) ** 2 / a;
      return Math.sqrt(c);
    }
    function Yo(T, a) {
      for (let c = 0; c < T.rows; c++) for (let r = 0; r < T.columns; r++) T.set(c, r, T.get(c, r) / a);
    }
    class Ae {
      static from1DArray(a, c, r) {
        if (a * c !== r.length) throw new RangeError("data length does not match given dimensions");
        let d = new ce(a, c);
        for (let m = 0; m < a; m++) for (let E = 0; E < c; E++) d.set(m, E, r[m * c + E]);
        return d;
      }
      static rowVector(a) {
        let c = new ce(1, a.length);
        for (let r = 0; r < a.length; r++) c.set(0, r, a[r]);
        return c;
      }
      static columnVector(a) {
        let c = new ce(a.length, 1);
        for (let r = 0; r < a.length; r++) c.set(r, 0, a[r]);
        return c;
      }
      static zeros(a, c) {
        return new ce(a, c);
      }
      static ones(a, c) {
        return new ce(a, c).fill(1);
      }
      static rand(a, c, r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { random: u = Math.random } = r;
        let d = new ce(a, c);
        for (let m = 0; m < a; m++) for (let E = 0; E < c; E++) d.set(m, E, u());
        return d;
      }
      static randInt(a, c, r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { min: u = 0, max: d = 1e3, random: m = Math.random } = r;
        if (!Number.isInteger(u)) throw new TypeError("min must be an integer");
        if (!Number.isInteger(d)) throw new TypeError("max must be an integer");
        if (u >= d) throw new RangeError("min must be smaller than max");
        let E = d - u, I = new ce(a, c);
        for (let O = 0; O < a; O++) for (let v = 0; v < c; v++) {
          let A = u + Math.round(m() * E);
          I.set(O, v, A);
        }
        return I;
      }
      static eye(a, c, r) {
        c === void 0 && (c = a), r === void 0 && (r = 1);
        let u = Math.min(a, c), d = this.zeros(a, c);
        for (let m = 0; m < u; m++) d.set(m, m, r);
        return d;
      }
      static diag(a, c, r) {
        let u = a.length;
        c === void 0 && (c = u), r === void 0 && (r = c);
        let d = Math.min(u, c, r), m = this.zeros(c, r);
        for (let E = 0; E < d; E++) m.set(E, E, a[E]);
        return m;
      }
      static min(a, c) {
        a = this.checkMatrix(a), c = this.checkMatrix(c);
        let r = a.rows, u = a.columns, d = new ce(r, u);
        for (let m = 0; m < r; m++) for (let E = 0; E < u; E++) d.set(m, E, Math.min(a.get(m, E), c.get(m, E)));
        return d;
      }
      static max(a, c) {
        a = this.checkMatrix(a), c = this.checkMatrix(c);
        let r = a.rows, u = a.columns, d = new this(r, u);
        for (let m = 0; m < r; m++) for (let E = 0; E < u; E++) d.set(m, E, Math.max(a.get(m, E), c.get(m, E)));
        return d;
      }
      static checkMatrix(a) {
        return Ae.isMatrix(a) ? a : new ce(a);
      }
      static isMatrix(a) {
        return a != null && a.klass === "Matrix";
      }
      get size() {
        return this.rows * this.columns;
      }
      apply(a) {
        if (typeof a != "function") throw new TypeError("callback must be a function");
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) a.call(this, c, r);
        return this;
      }
      to1DArray() {
        let a = [];
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) a.push(this.get(c, r));
        return a;
      }
      to2DArray() {
        let a = [];
        for (let c = 0; c < this.rows; c++) {
          a.push([]);
          for (let r = 0; r < this.columns; r++) a[c].push(this.get(c, r));
        }
        return a;
      }
      toJSON() {
        return this.to2DArray();
      }
      isRowVector() {
        return this.rows === 1;
      }
      isColumnVector() {
        return this.columns === 1;
      }
      isVector() {
        return this.rows === 1 || this.columns === 1;
      }
      isSquare() {
        return this.rows === this.columns;
      }
      isEmpty() {
        return this.rows === 0 || this.columns === 0;
      }
      isSymmetric() {
        if (this.isSquare()) {
          for (let a = 0; a < this.rows; a++) for (let c = 0; c <= a; c++) if (this.get(a, c) !== this.get(c, a)) return false;
          return true;
        }
        return false;
      }
      isDistance() {
        if (!this.isSymmetric()) return false;
        for (let a = 0; a < this.rows; a++) if (this.get(a, a) !== 0) return false;
        return true;
      }
      isEchelonForm() {
        let a = 0, c = 0, r = -1, u = true, d = false;
        for (; a < this.rows && u; ) {
          for (c = 0, d = false; c < this.columns && d === false; ) this.get(a, c) === 0 ? c++ : this.get(a, c) === 1 && c > r ? (d = true, r = c) : (u = false, d = true);
          a++;
        }
        return u;
      }
      isReducedEchelonForm() {
        let a = 0, c = 0, r = -1, u = true, d = false;
        for (; a < this.rows && u; ) {
          for (c = 0, d = false; c < this.columns && d === false; ) this.get(a, c) === 0 ? c++ : this.get(a, c) === 1 && c > r ? (d = true, r = c) : (u = false, d = true);
          for (let m = c + 1; m < this.rows; m++) this.get(a, m) !== 0 && (u = false);
          a++;
        }
        return u;
      }
      echelonForm() {
        let a = this.clone(), c = 0, r = 0;
        for (; c < a.rows && r < a.columns; ) {
          let u = c;
          for (let d = c; d < a.rows; d++) a.get(d, r) > a.get(u, r) && (u = d);
          if (a.get(u, r) === 0) r++;
          else {
            a.swapRows(c, u);
            let d = a.get(c, r);
            for (let m = r; m < a.columns; m++) a.set(c, m, a.get(c, m) / d);
            for (let m = c + 1; m < a.rows; m++) {
              let E = a.get(m, r) / a.get(c, r);
              a.set(m, r, 0);
              for (let I = r + 1; I < a.columns; I++) a.set(m, I, a.get(m, I) - a.get(c, I) * E);
            }
            c++, r++;
          }
        }
        return a;
      }
      reducedEchelonForm() {
        let a = this.echelonForm(), c = a.columns, r = a.rows, u = r - 1;
        for (; u >= 0; ) if (a.maxRow(u) === 0) u--;
        else {
          let d = 0, m = false;
          for (; d < r && m === false; ) a.get(u, d) === 1 ? m = true : d++;
          for (let E = 0; E < u; E++) {
            let I = a.get(E, d);
            for (let O = d; O < c; O++) {
              let v = a.get(E, O) - I * a.get(u, O);
              a.set(E, O, v);
            }
          }
          u--;
        }
        return a;
      }
      set() {
        throw new Error("set method is unimplemented");
      }
      get() {
        throw new Error("get method is unimplemented");
      }
      repeat(a = {}) {
        if (typeof a != "object") throw new TypeError("options must be an object");
        const { rows: c = 1, columns: r = 1 } = a;
        if (!Number.isInteger(c) || c <= 0) throw new TypeError("rows must be a positive integer");
        if (!Number.isInteger(r) || r <= 0) throw new TypeError("columns must be a positive integer");
        let u = new ce(this.rows * c, this.columns * r);
        for (let d = 0; d < c; d++) for (let m = 0; m < r; m++) u.setSubMatrix(this, this.rows * d, this.columns * m);
        return u;
      }
      fill(a) {
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, a);
        return this;
      }
      neg() {
        return this.mulS(-1);
      }
      getRow(a) {
        p(this, a);
        let c = [];
        for (let r = 0; r < this.columns; r++) c.push(this.get(a, r));
        return c;
      }
      getRowVector(a) {
        return ce.rowVector(this.getRow(a));
      }
      setRow(a, c) {
        p(this, a), c = y(this, c);
        for (let r = 0; r < this.columns; r++) this.set(a, r, c[r]);
        return this;
      }
      swapRows(a, c) {
        p(this, a), p(this, c);
        for (let r = 0; r < this.columns; r++) {
          let u = this.get(a, r);
          this.set(a, r, this.get(c, r)), this.set(c, r, u);
        }
        return this;
      }
      getColumn(a) {
        R(this, a);
        let c = [];
        for (let r = 0; r < this.rows; r++) c.push(this.get(r, a));
        return c;
      }
      getColumnVector(a) {
        return ce.columnVector(this.getColumn(a));
      }
      setColumn(a, c) {
        R(this, a), c = N(this, c);
        for (let r = 0; r < this.rows; r++) this.set(r, a, c[r]);
        return this;
      }
      swapColumns(a, c) {
        R(this, a), R(this, c);
        for (let r = 0; r < this.rows; r++) {
          let u = this.get(r, a);
          this.set(r, a, this.get(r, c)), this.set(r, c, u);
        }
        return this;
      }
      addRowVector(a) {
        a = y(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) + a[r]);
        return this;
      }
      subRowVector(a) {
        a = y(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) - a[r]);
        return this;
      }
      mulRowVector(a) {
        a = y(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) * a[r]);
        return this;
      }
      divRowVector(a) {
        a = y(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) / a[r]);
        return this;
      }
      addColumnVector(a) {
        a = N(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) + a[c]);
        return this;
      }
      subColumnVector(a) {
        a = N(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) - a[c]);
        return this;
      }
      mulColumnVector(a) {
        a = N(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) * a[c]);
        return this;
      }
      divColumnVector(a) {
        a = N(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) / a[c]);
        return this;
      }
      mulRow(a, c) {
        p(this, a);
        for (let r = 0; r < this.columns; r++) this.set(a, r, this.get(a, r) * c);
        return this;
      }
      mulColumn(a, c) {
        R(this, a);
        for (let r = 0; r < this.rows; r++) this.set(r, a, this.get(r, a) * c);
        return this;
      }
      max(a) {
        if (this.isEmpty()) return NaN;
        switch (a) {
          case "row": {
            const c = new Array(this.rows).fill(Number.NEGATIVE_INFINITY);
            for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) > c[r] && (c[r] = this.get(r, u));
            return c;
          }
          case "column": {
            const c = new Array(this.columns).fill(Number.NEGATIVE_INFINITY);
            for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) > c[u] && (c[u] = this.get(r, u));
            return c;
          }
          case void 0: {
            let c = this.get(0, 0);
            for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) > c && (c = this.get(r, u));
            return c;
          }
          default:
            throw new Error(`invalid option: ${a}`);
        }
      }
      maxIndex() {
        j(this);
        let a = this.get(0, 0), c = [
          0,
          0
        ];
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) > a && (a = this.get(r, u), c[0] = r, c[1] = u);
        return c;
      }
      min(a) {
        if (this.isEmpty()) return NaN;
        switch (a) {
          case "row": {
            const c = new Array(this.rows).fill(Number.POSITIVE_INFINITY);
            for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) < c[r] && (c[r] = this.get(r, u));
            return c;
          }
          case "column": {
            const c = new Array(this.columns).fill(Number.POSITIVE_INFINITY);
            for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) < c[u] && (c[u] = this.get(r, u));
            return c;
          }
          case void 0: {
            let c = this.get(0, 0);
            for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) < c && (c = this.get(r, u));
            return c;
          }
          default:
            throw new Error(`invalid option: ${a}`);
        }
      }
      minIndex() {
        j(this);
        let a = this.get(0, 0), c = [
          0,
          0
        ];
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) < a && (a = this.get(r, u), c[0] = r, c[1] = u);
        return c;
      }
      maxRow(a) {
        if (p(this, a), this.isEmpty()) return NaN;
        let c = this.get(a, 0);
        for (let r = 1; r < this.columns; r++) this.get(a, r) > c && (c = this.get(a, r));
        return c;
      }
      maxRowIndex(a) {
        p(this, a), j(this);
        let c = this.get(a, 0), r = [
          a,
          0
        ];
        for (let u = 1; u < this.columns; u++) this.get(a, u) > c && (c = this.get(a, u), r[1] = u);
        return r;
      }
      minRow(a) {
        if (p(this, a), this.isEmpty()) return NaN;
        let c = this.get(a, 0);
        for (let r = 1; r < this.columns; r++) this.get(a, r) < c && (c = this.get(a, r));
        return c;
      }
      minRowIndex(a) {
        p(this, a), j(this);
        let c = this.get(a, 0), r = [
          a,
          0
        ];
        for (let u = 1; u < this.columns; u++) this.get(a, u) < c && (c = this.get(a, u), r[1] = u);
        return r;
      }
      maxColumn(a) {
        if (R(this, a), this.isEmpty()) return NaN;
        let c = this.get(0, a);
        for (let r = 1; r < this.rows; r++) this.get(r, a) > c && (c = this.get(r, a));
        return c;
      }
      maxColumnIndex(a) {
        R(this, a), j(this);
        let c = this.get(0, a), r = [
          0,
          a
        ];
        for (let u = 1; u < this.rows; u++) this.get(u, a) > c && (c = this.get(u, a), r[0] = u);
        return r;
      }
      minColumn(a) {
        if (R(this, a), this.isEmpty()) return NaN;
        let c = this.get(0, a);
        for (let r = 1; r < this.rows; r++) this.get(r, a) < c && (c = this.get(r, a));
        return c;
      }
      minColumnIndex(a) {
        R(this, a), j(this);
        let c = this.get(0, a), r = [
          0,
          a
        ];
        for (let u = 1; u < this.rows; u++) this.get(u, a) < c && (c = this.get(u, a), r[0] = u);
        return r;
      }
      diag() {
        let a = Math.min(this.rows, this.columns), c = [];
        for (let r = 0; r < a; r++) c.push(this.get(r, r));
        return c;
      }
      norm(a = "frobenius") {
        switch (a) {
          case "max":
            return this.max();
          case "frobenius":
            return Math.sqrt(this.dot(this));
          default:
            throw new RangeError(`unknown norm type: ${a}`);
        }
      }
      cumulativeSum() {
        let a = 0;
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) a += this.get(c, r), this.set(c, r, a);
        return this;
      }
      dot(a) {
        Ae.isMatrix(a) && (a = a.to1DArray());
        let c = this.to1DArray();
        if (c.length !== a.length) throw new RangeError("vectors do not have the same size");
        let r = 0;
        for (let u = 0; u < c.length; u++) r += c[u] * a[u];
        return r;
      }
      mmul(a) {
        a = ce.checkMatrix(a);
        let c = this.rows, r = this.columns, u = a.columns, d = new ce(c, u), m = new Float64Array(r);
        for (let E = 0; E < u; E++) {
          for (let I = 0; I < r; I++) m[I] = a.get(I, E);
          for (let I = 0; I < c; I++) {
            let O = 0;
            for (let v = 0; v < r; v++) O += this.get(I, v) * m[v];
            d.set(I, E, O);
          }
        }
        return d;
      }
      mpow(a) {
        if (!this.isSquare()) throw new RangeError("Matrix must be square");
        if (!Number.isInteger(a) || a < 0) throw new RangeError("Exponent must be a non-negative integer");
        let c = ce.eye(this.rows), r = this;
        for (let u = a; u >= 1; u /= 2) (u & 1) !== 0 && (c = c.mmul(r)), r = r.mmul(r);
        return c;
      }
      strassen2x2(a) {
        a = ce.checkMatrix(a);
        let c = new ce(2, 2);
        const r = this.get(0, 0), u = a.get(0, 0), d = this.get(0, 1), m = a.get(0, 1), E = this.get(1, 0), I = a.get(1, 0), O = this.get(1, 1), v = a.get(1, 1), A = (r + O) * (u + v), F = (E + O) * u, oe = r * (m - v), D = O * (I - u), W = (r + d) * v, he = (E - r) * (u + m), w = (d - O) * (I + v), te = A + D - W + w, Te = oe + W, ye = F + D, Le = A - F + oe + he;
        return c.set(0, 0, te), c.set(0, 1, Te), c.set(1, 0, ye), c.set(1, 1, Le), c;
      }
      strassen3x3(a) {
        a = ce.checkMatrix(a);
        let c = new ce(3, 3);
        const r = this.get(0, 0), u = this.get(0, 1), d = this.get(0, 2), m = this.get(1, 0), E = this.get(1, 1), I = this.get(1, 2), O = this.get(2, 0), v = this.get(2, 1), A = this.get(2, 2), F = a.get(0, 0), oe = a.get(0, 1), D = a.get(0, 2), W = a.get(1, 0), he = a.get(1, 1), w = a.get(1, 2), te = a.get(2, 0), Te = a.get(2, 1), ye = a.get(2, 2), Le = (r + u + d - m - E - v - A) * he, nt = (r - m) * (-oe + he), Oe = E * (-F + oe + W - he - w - te + ye), Se = (-r + m + E) * (F - oe + he), Ze = (m + E) * (-F + oe), b = r * F, x = (-r + O + v) * (F - D + w), de = (-r + O) * (D - w), X = (O + v) * (-F + D), rt = (r + u + d - E - I - O - v) * w, ze = v * (-F + D + W - he - w - te + Te), tt = (-d + v + A) * (he + te - Te), st = (d - A) * (he - Te), bt = d * te, Oo = (v + A) * (-te + Te), St = (-d + E + I) * (w + te - ye), Co = (d - I) * (w - ye), xo = (E + I) * (-te + ye), _e2 = u * W, Lt = I * Te, no = m * D, ro = O * oe, wt = A * ye, Gp = b + bt + _e2, Bp = Le + Se + Ze + b + tt + bt + Oo, Yp = b + x + X + rt + bt + St + xo, jp = nt + Oe + Se + b + bt + St + Co, xp = nt + Se + Ze + b + Lt, zp = bt + St + Co + xo + no, $p = b + x + de + ze + tt + st + bt, Vp = tt + st + bt + Oo + ro, qp = b + x + de + X + wt;
        return c.set(0, 0, Gp), c.set(0, 1, Bp), c.set(0, 2, Yp), c.set(1, 0, jp), c.set(1, 1, xp), c.set(1, 2, zp), c.set(2, 0, $p), c.set(2, 1, Vp), c.set(2, 2, qp), c;
      }
      mmulStrassen(a) {
        a = ce.checkMatrix(a);
        let c = this.clone(), r = c.rows, u = c.columns, d = a.rows, m = a.columns;
        u !== d && console.warn(`Multiplying ${r} x ${u} and ${d} x ${m} matrix: dimensions do not match.`);
        function E(A, F, oe) {
          let D = A.rows, W = A.columns;
          if (D === F && W === oe) return A;
          {
            let he = Ae.zeros(F, oe);
            return he = he.setSubMatrix(A, 0, 0), he;
          }
        }
        let I = Math.max(r, d), O = Math.max(u, m);
        c = E(c, I, O), a = E(a, I, O);
        function v(A, F, oe, D) {
          if (oe <= 512 || D <= 512) return A.mmul(F);
          oe % 2 === 1 && D % 2 === 1 ? (A = E(A, oe + 1, D + 1), F = E(F, oe + 1, D + 1)) : oe % 2 === 1 ? (A = E(A, oe + 1, D), F = E(F, oe + 1, D)) : D % 2 === 1 && (A = E(A, oe, D + 1), F = E(F, oe, D + 1));
          let W = parseInt(A.rows / 2, 10), he = parseInt(A.columns / 2, 10), w = A.subMatrix(0, W - 1, 0, he - 1), te = F.subMatrix(0, W - 1, 0, he - 1), Te = A.subMatrix(0, W - 1, he, A.columns - 1), ye = F.subMatrix(0, W - 1, he, F.columns - 1), Le = A.subMatrix(W, A.rows - 1, 0, he - 1), nt = F.subMatrix(W, F.rows - 1, 0, he - 1), Oe = A.subMatrix(W, A.rows - 1, he, A.columns - 1), Se = F.subMatrix(W, F.rows - 1, he, F.columns - 1), Ze = v(Ae.add(w, Oe), Ae.add(te, Se), W, he), b = v(Ae.add(Le, Oe), te, W, he), x = v(w, Ae.sub(ye, Se), W, he), de = v(Oe, Ae.sub(nt, te), W, he), X = v(Ae.add(w, Te), Se, W, he), rt = v(Ae.sub(Le, w), Ae.add(te, ye), W, he), ze = v(Ae.sub(Te, Oe), Ae.add(nt, Se), W, he), tt = Ae.add(Ze, de);
          tt.sub(X), tt.add(ze);
          let st = Ae.add(x, X), bt = Ae.add(b, de), Oo = Ae.sub(Ze, b);
          Oo.add(x), Oo.add(rt);
          let St = Ae.zeros(2 * tt.rows, 2 * tt.columns);
          return St = St.setSubMatrix(tt, 0, 0), St = St.setSubMatrix(st, tt.rows, 0), St = St.setSubMatrix(bt, 0, tt.columns), St = St.setSubMatrix(Oo, tt.rows, tt.columns), St.subMatrix(0, oe - 1, 0, D - 1);
        }
        return v(c, a, I, O);
      }
      scaleRows(a = {}) {
        if (typeof a != "object") throw new TypeError("options must be an object");
        const { min: c = 0, max: r = 1 } = a;
        if (!Number.isFinite(c)) throw new TypeError("min must be a number");
        if (!Number.isFinite(r)) throw new TypeError("max must be a number");
        if (c >= r) throw new RangeError("min must be smaller than max");
        let u = new ce(this.rows, this.columns);
        for (let d = 0; d < this.rows; d++) {
          const m = this.getRow(d);
          m.length > 0 && t(m, {
            min: c,
            max: r,
            output: m
          }), u.setRow(d, m);
        }
        return u;
      }
      scaleColumns(a = {}) {
        if (typeof a != "object") throw new TypeError("options must be an object");
        const { min: c = 0, max: r = 1 } = a;
        if (!Number.isFinite(c)) throw new TypeError("min must be a number");
        if (!Number.isFinite(r)) throw new TypeError("max must be a number");
        if (c >= r) throw new RangeError("min must be smaller than max");
        let u = new ce(this.rows, this.columns);
        for (let d = 0; d < this.columns; d++) {
          const m = this.getColumn(d);
          m.length && t(m, {
            min: c,
            max: r,
            output: m
          }), u.setColumn(d, m);
        }
        return u;
      }
      flipRows() {
        const a = Math.ceil(this.columns / 2);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < a; r++) {
          let u = this.get(c, r), d = this.get(c, this.columns - 1 - r);
          this.set(c, r, d), this.set(c, this.columns - 1 - r, u);
        }
        return this;
      }
      flipColumns() {
        const a = Math.ceil(this.rows / 2);
        for (let c = 0; c < this.columns; c++) for (let r = 0; r < a; r++) {
          let u = this.get(r, c), d = this.get(this.rows - 1 - r, c);
          this.set(r, c, d), this.set(this.rows - 1 - r, c, u);
        }
        return this;
      }
      kroneckerProduct(a) {
        a = ce.checkMatrix(a);
        let c = this.rows, r = this.columns, u = a.rows, d = a.columns, m = new ce(c * u, r * d);
        for (let E = 0; E < c; E++) for (let I = 0; I < r; I++) for (let O = 0; O < u; O++) for (let v = 0; v < d; v++) m.set(u * E + O, d * I + v, this.get(E, I) * a.get(O, v));
        return m;
      }
      kroneckerSum(a) {
        if (a = ce.checkMatrix(a), !this.isSquare() || !a.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
        let c = this.rows, r = a.rows, u = this.kroneckerProduct(ce.eye(r, r)), d = ce.eye(c, c).kroneckerProduct(a);
        return u.add(d);
      }
      transpose() {
        let a = new ce(this.columns, this.rows);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) a.set(r, c, this.get(c, r));
        return a;
      }
      sortRows(a = zn) {
        for (let c = 0; c < this.rows; c++) this.setRow(c, this.getRow(c).sort(a));
        return this;
      }
      sortColumns(a = zn) {
        for (let c = 0; c < this.columns; c++) this.setColumn(c, this.getColumn(c).sort(a));
        return this;
      }
      subMatrix(a, c, r, u) {
        ne(this, a, c, r, u);
        let d = new ce(c - a + 1, u - r + 1);
        for (let m = a; m <= c; m++) for (let E = r; E <= u; E++) d.set(m - a, E - r, this.get(m, E));
        return d;
      }
      subMatrixRow(a, c, r) {
        if (c === void 0 && (c = 0), r === void 0 && (r = this.columns - 1), c > r || c < 0 || c >= this.columns || r < 0 || r >= this.columns) throw new RangeError("Argument out of range");
        let u = new ce(a.length, r - c + 1);
        for (let d = 0; d < a.length; d++) for (let m = c; m <= r; m++) {
          if (a[d] < 0 || a[d] >= this.rows) throw new RangeError(`Row index out of range: ${a[d]}`);
          u.set(d, m - c, this.get(a[d], m));
        }
        return u;
      }
      subMatrixColumn(a, c, r) {
        if (c === void 0 && (c = 0), r === void 0 && (r = this.rows - 1), c > r || c < 0 || c >= this.rows || r < 0 || r >= this.rows) throw new RangeError("Argument out of range");
        let u = new ce(r - c + 1, a.length);
        for (let d = 0; d < a.length; d++) for (let m = c; m <= r; m++) {
          if (a[d] < 0 || a[d] >= this.columns) throw new RangeError(`Column index out of range: ${a[d]}`);
          u.set(m - c, d, this.get(m, a[d]));
        }
        return u;
      }
      setSubMatrix(a, c, r) {
        if (a = ce.checkMatrix(a), a.isEmpty()) return this;
        let u = c + a.rows - 1, d = r + a.columns - 1;
        ne(this, c, u, r, d);
        for (let m = 0; m < a.rows; m++) for (let E = 0; E < a.columns; E++) this.set(c + m, r + E, a.get(m, E));
        return this;
      }
      selection(a, c) {
        M(this, a), H(this, c);
        let r = new ce(a.length, c.length);
        for (let u = 0; u < a.length; u++) {
          let d = a[u];
          for (let m = 0; m < c.length; m++) {
            let E = c[m];
            r.set(u, m, this.get(d, E));
          }
        }
        return r;
      }
      trace() {
        let a = Math.min(this.rows, this.columns), c = 0;
        for (let r = 0; r < a; r++) c += this.get(r, r);
        return c;
      }
      clone() {
        return this.constructor.copy(this, new ce(this.rows, this.columns));
      }
      static copy(a, c) {
        for (const [r, u, d] of a.entries()) c.set(r, u, d);
        return c;
      }
      sum(a) {
        switch (a) {
          case "row":
            return _(this);
          case "column":
            return re(this);
          case void 0:
            return ge(this);
          default:
            throw new Error(`invalid option: ${a}`);
        }
      }
      product(a) {
        switch (a) {
          case "row":
            return se(this);
          case "column":
            return fe(this);
          case void 0:
            return ie(this);
          default:
            throw new Error(`invalid option: ${a}`);
        }
      }
      mean(a) {
        const c = this.sum(a);
        switch (a) {
          case "row": {
            for (let r = 0; r < this.rows; r++) c[r] /= this.columns;
            return c;
          }
          case "column": {
            for (let r = 0; r < this.columns; r++) c[r] /= this.rows;
            return c;
          }
          case void 0:
            return c / this.size;
          default:
            throw new Error(`invalid option: ${a}`);
        }
      }
      variance(a, c = {}) {
        if (typeof a == "object" && (c = a, a = void 0), typeof c != "object") throw new TypeError("options must be an object");
        const { unbiased: r = true, mean: u = this.mean(a) } = c;
        if (typeof r != "boolean") throw new TypeError("unbiased must be a boolean");
        switch (a) {
          case "row": {
            if (!e.isAnyArray(u)) throw new TypeError("mean must be an array");
            return me(this, r, u);
          }
          case "column": {
            if (!e.isAnyArray(u)) throw new TypeError("mean must be an array");
            return Ce(this, r, u);
          }
          case void 0: {
            if (typeof u != "number") throw new TypeError("mean must be a number");
            return pe(this, r, u);
          }
          default:
            throw new Error(`invalid option: ${a}`);
        }
      }
      standardDeviation(a, c) {
        typeof a == "object" && (c = a, a = void 0);
        const r = this.variance(a, c);
        if (a === void 0) return Math.sqrt(r);
        for (let u = 0; u < r.length; u++) r[u] = Math.sqrt(r[u]);
        return r;
      }
      center(a, c = {}) {
        if (typeof a == "object" && (c = a, a = void 0), typeof c != "object") throw new TypeError("options must be an object");
        const { center: r = this.mean(a) } = c;
        switch (a) {
          case "row": {
            if (!e.isAnyArray(r)) throw new TypeError("center must be an array");
            return Ye(this, r), this;
          }
          case "column": {
            if (!e.isAnyArray(r)) throw new TypeError("center must be an array");
            return It(this, r), this;
          }
          case void 0: {
            if (typeof r != "number") throw new TypeError("center must be a number");
            return oo(this, r), this;
          }
          default:
            throw new Error(`invalid option: ${a}`);
        }
      }
      scale(a, c = {}) {
        if (typeof a == "object" && (c = a, a = void 0), typeof c != "object") throw new TypeError("options must be an object");
        let r = c.scale;
        switch (a) {
          case "row": {
            if (r === void 0) r = Je(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Me(this, r), this;
          }
          case "column": {
            if (r === void 0) r = Ve(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Bo(this, r), this;
          }
          case void 0: {
            if (r === void 0) r = cn(this);
            else if (typeof r != "number") throw new TypeError("scale must be a number");
            return Yo(this, r), this;
          }
          default:
            throw new Error(`invalid option: ${a}`);
        }
      }
      toString(a) {
        return s(this, a);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      *entries() {
        for (let a = 0; a < this.rows; a++) for (let c = 0; c < this.columns; c++) yield [
          a,
          c,
          this.get(a, c)
        ];
      }
      *values() {
        for (let a = 0; a < this.rows; a++) for (let c = 0; c < this.columns; c++) yield this.get(a, c);
      }
    }
    Ae.prototype.klass = "Matrix", typeof Symbol < "u" && (Ae.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = n);
    function zn(T, a) {
      return T - a;
    }
    function wa(T) {
      return T.every((a) => typeof a == "number");
    }
    Ae.random = Ae.rand, Ae.randomInt = Ae.randInt, Ae.diagonal = Ae.diag, Ae.prototype.diagonal = Ae.prototype.diag, Ae.identity = Ae.eye, Ae.prototype.negate = Ae.prototype.neg, Ae.prototype.tensorProduct = Ae.prototype.kroneckerProduct;
    const _ce = class _ce extends Ae {
      constructor(a, c) {
        super();
        __privateAdd(this, _ce_instances);
        __publicField(this, "data");
        if (_ce.isMatrix(a)) __privateMethod(this, _ce_instances, e_fn).call(this, a.rows, a.columns), _ce.copy(a, this);
        else if (Number.isInteger(a) && a >= 0) __privateMethod(this, _ce_instances, e_fn).call(this, a, c);
        else if (e.isAnyArray(a)) {
          const r = a;
          if (a = r.length, c = a ? r[0].length : 0, typeof c != "number") throw new TypeError("Data must be a 2D array with at least one element");
          this.data = [];
          for (let u = 0; u < a; u++) {
            if (r[u].length !== c) throw new RangeError("Inconsistent array dimensions");
            if (!wa(r[u])) throw new TypeError("Input data contains non-numeric values");
            this.data.push(Float64Array.from(r[u]));
          }
          this.rows = a, this.columns = c;
        } else throw new TypeError("First argument must be a positive number or an array");
      }
      set(a, c, r) {
        return this.data[a][c] = r, this;
      }
      get(a, c) {
        return this.data[a][c];
      }
      removeRow(a) {
        return p(this, a), this.data.splice(a, 1), this.rows -= 1, this;
      }
      addRow(a, c) {
        return c === void 0 && (c = a, a = this.rows), p(this, a, true), c = Float64Array.from(y(this, c)), this.data.splice(a, 0, c), this.rows += 1, this;
      }
      removeColumn(a) {
        R(this, a);
        for (let c = 0; c < this.rows; c++) {
          const r = new Float64Array(this.columns - 1);
          for (let u = 0; u < a; u++) r[u] = this.data[c][u];
          for (let u = a + 1; u < this.columns; u++) r[u - 1] = this.data[c][u];
          this.data[c] = r;
        }
        return this.columns -= 1, this;
      }
      addColumn(a, c) {
        typeof c > "u" && (c = a, a = this.columns), R(this, a, true), c = N(this, c);
        for (let r = 0; r < this.rows; r++) {
          const u = new Float64Array(this.columns + 1);
          let d = 0;
          for (; d < a; d++) u[d] = this.data[r][d];
          for (u[d++] = c[r]; d < this.columns + 1; d++) u[d] = this.data[r][d - 1];
          this.data[r] = u;
        }
        return this.columns += 1, this;
      }
    };
    _ce_instances = new WeakSet();
    e_fn = function(a, c) {
      if (this.data = [], Number.isInteger(c) && c >= 0) for (let r = 0; r < a; r++) this.data.push(new Float64Array(c));
      else throw new TypeError("nColumns must be a positive integer");
      this.rows = a, this.columns = c;
    };
    let ce = _ce;
    g(Ae, ce);
    const _Zt = class _Zt extends Ae {
      constructor(a) {
        super();
        __privateAdd(this, _e);
        if (ce.isMatrix(a)) {
          if (!a.isSymmetric()) throw new TypeError("not symmetric data");
          __privateSet(this, _e, ce.copy(a, new ce(a.rows, a.rows)));
        } else if (Number.isInteger(a) && a >= 0) __privateSet(this, _e, new ce(a, a));
        else if (__privateSet(this, _e, new ce(a)), !this.isSymmetric()) throw new TypeError("not symmetric data");
      }
      get size() {
        return __privateGet(this, _e).size;
      }
      get rows() {
        return __privateGet(this, _e).rows;
      }
      get columns() {
        return __privateGet(this, _e).columns;
      }
      get diagonalSize() {
        return this.rows;
      }
      static isSymmetricMatrix(a) {
        return ce.isMatrix(a) && a.klassType === "SymmetricMatrix";
      }
      static zeros(a) {
        return new this(a);
      }
      static ones(a) {
        return new this(a).fill(1);
      }
      clone() {
        const a = new _Zt(this.diagonalSize);
        for (const [c, r, u] of this.upperRightEntries()) a.set(c, r, u);
        return a;
      }
      toMatrix() {
        return new ce(this);
      }
      get(a, c) {
        return __privateGet(this, _e).get(a, c);
      }
      set(a, c, r) {
        return __privateGet(this, _e).set(a, c, r), __privateGet(this, _e).set(c, a, r), this;
      }
      removeCross(a) {
        return __privateGet(this, _e).removeRow(a), __privateGet(this, _e).removeColumn(a), this;
      }
      addCross(a, c) {
        c === void 0 && (c = a, a = this.diagonalSize);
        const r = c.slice();
        return r.splice(a, 1), __privateGet(this, _e).addRow(a, r), __privateGet(this, _e).addColumn(a, c), this;
      }
      applyMask(a) {
        if (a.length !== this.diagonalSize) throw new RangeError("Mask size do not match with matrix size");
        const c = [];
        for (const [r, u] of a.entries()) u || c.push(r);
        c.reverse();
        for (const r of c) this.removeCross(r);
        return this;
      }
      toCompact() {
        const { diagonalSize: a } = this, c = new Array(a * (a + 1) / 2);
        for (let r = 0, u = 0, d = 0; d < c.length; d++) c[d] = this.get(u, r), ++r >= a && (r = ++u);
        return c;
      }
      static fromCompact(a) {
        const c = a.length, r = (Math.sqrt(8 * c + 1) - 1) / 2;
        if (!Number.isInteger(r)) throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(a)}`);
        const u = new _Zt(r);
        for (let d = 0, m = 0, E = 0; E < c; E++) u.set(d, m, a[E]), ++d >= r && (d = ++m);
        return u;
      }
      *upperRightEntries() {
        for (let a = 0, c = 0; a < this.diagonalSize; void 0) {
          const r = this.get(a, c);
          yield [
            a,
            c,
            r
          ], ++c >= this.diagonalSize && (c = ++a);
        }
      }
      *upperRightValues() {
        for (let a = 0, c = 0; a < this.diagonalSize; void 0) yield this.get(a, c), ++c >= this.diagonalSize && (c = ++a);
      }
    };
    _e = new WeakMap();
    let Zt = _Zt;
    Zt.prototype.klassType = "SymmetricMatrix";
    class jo extends Zt {
      static isDistanceMatrix(a) {
        return Zt.isSymmetricMatrix(a) && a.klassSubType === "DistanceMatrix";
      }
      constructor(a) {
        if (super(a), !this.isDistance()) throw new TypeError("Provided arguments do no produce a distance matrix");
      }
      set(a, c, r) {
        return a === c && (r = 0), super.set(a, c, r);
      }
      addCross(a, c) {
        return c === void 0 && (c = a, a = this.diagonalSize), c = c.slice(), c[a] = 0, super.addCross(a, c);
      }
      toSymmetricMatrix() {
        return new Zt(this);
      }
      clone() {
        const a = new jo(this.diagonalSize);
        for (const [c, r, u] of this.upperRightEntries()) c !== r && a.set(c, r, u);
        return a;
      }
      toCompact() {
        const { diagonalSize: a } = this, c = (a - 1) * a / 2, r = new Array(c);
        for (let u = 1, d = 0, m = 0; m < r.length; m++) r[m] = this.get(d, u), ++u >= a && (u = ++d + 1);
        return r;
      }
      static fromCompact(a) {
        const c = a.length;
        if (c === 0) return new this(0);
        const r = (Math.sqrt(8 * c + 1) + 1) / 2;
        if (!Number.isInteger(r)) throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(a)}`);
        const u = new this(r);
        for (let d = 1, m = 0, E = 0; E < c; E++) u.set(d, m, a[E]), ++d >= r && (d = ++m + 1);
        return u;
      }
    }
    jo.prototype.klassSubType = "DistanceMatrix";
    class io extends Ae {
      constructor(a, c, r) {
        super(), this.matrix = a, this.rows = c, this.columns = r;
      }
    }
    class Wr extends io {
      constructor(a, c) {
        R(a, c), super(a, a.rows, 1), this.column = c;
      }
      set(a, c, r) {
        return this.matrix.set(a, this.column, r), this;
      }
      get(a) {
        return this.matrix.get(a, this.column);
      }
    }
    class Gi extends io {
      constructor(a, c) {
        H(a, c), super(a, a.rows, c.length), this.columnIndices = c;
      }
      set(a, c, r) {
        return this.matrix.set(a, this.columnIndices[c], r), this;
      }
      get(a, c) {
        return this.matrix.get(a, this.columnIndices[c]);
      }
    }
    class Sl extends io {
      constructor(a) {
        super(a, a.rows, a.columns);
      }
      set(a, c, r) {
        return this.matrix.set(a, this.columns - c - 1, r), this;
      }
      get(a, c) {
        return this.matrix.get(a, this.columns - c - 1);
      }
    }
    class S extends io {
      constructor(a) {
        super(a, a.rows, a.columns);
      }
      set(a, c, r) {
        return this.matrix.set(this.rows - a - 1, c, r), this;
      }
      get(a, c) {
        return this.matrix.get(this.rows - a - 1, c);
      }
    }
    class L extends io {
      constructor(a, c) {
        p(a, c), super(a, 1, a.columns), this.row = c;
      }
      set(a, c, r) {
        return this.matrix.set(this.row, c, r), this;
      }
      get(a, c) {
        return this.matrix.get(this.row, c);
      }
    }
    class P extends io {
      constructor(a, c) {
        M(a, c), super(a, c.length, a.columns), this.rowIndices = c;
      }
      set(a, c, r) {
        return this.matrix.set(this.rowIndices[a], c, r), this;
      }
      get(a, c) {
        return this.matrix.get(this.rowIndices[a], c);
      }
    }
    class K extends io {
      constructor(a, c, r) {
        M(a, c), H(a, r), super(a, c.length, r.length), this.rowIndices = c, this.columnIndices = r;
      }
      set(a, c, r) {
        return this.matrix.set(this.rowIndices[a], this.columnIndices[c], r), this;
      }
      get(a, c) {
        return this.matrix.get(this.rowIndices[a], this.columnIndices[c]);
      }
    }
    class Z extends io {
      constructor(a, c, r, u, d) {
        ne(a, c, r, u, d), super(a, r - c + 1, d - u + 1), this.startRow = c, this.startColumn = u;
      }
      set(a, c, r) {
        return this.matrix.set(this.startRow + a, this.startColumn + c, r), this;
      }
      get(a, c) {
        return this.matrix.get(this.startRow + a, this.startColumn + c);
      }
    }
    class J extends io {
      constructor(a) {
        super(a, a.columns, a.rows);
      }
      set(a, c, r) {
        return this.matrix.set(c, a, r), this;
      }
      get(a, c) {
        return this.matrix.get(c, a);
      }
    }
    class le extends Ae {
      constructor(a, c = {}) {
        const { rows: r = 1 } = c;
        if (a.length % r !== 0) throw new Error("the data length is not divisible by the number of rows");
        super(), this.rows = r, this.columns = a.length / r, this.data = a;
      }
      set(a, c, r) {
        let u = this._calculateIndex(a, c);
        return this.data[u] = r, this;
      }
      get(a, c) {
        let r = this._calculateIndex(a, c);
        return this.data[r];
      }
      _calculateIndex(a, c) {
        return a * this.columns + c;
      }
    }
    class Q extends Ae {
      constructor(a) {
        super(), this.data = a, this.rows = a.length, this.columns = a[0].length;
      }
      set(a, c, r) {
        return this.data[a][c] = r, this;
      }
      get(a, c) {
        return this.data[a][c];
      }
    }
    function ae(T, a) {
      if (e.isAnyArray(T)) return T[0] && e.isAnyArray(T[0]) ? new Q(T) : new le(T, a);
      throw new Error("the argument is not an array");
    }
    class V {
      constructor(a) {
        a = Q.checkMatrix(a);
        let c = a.clone(), r = c.rows, u = c.columns, d = new Float64Array(r), m = 1, E, I, O, v, A, F, oe, D, W;
        for (E = 0; E < r; E++) d[E] = E;
        for (D = new Float64Array(r), I = 0; I < u; I++) {
          for (E = 0; E < r; E++) D[E] = c.get(E, I);
          for (E = 0; E < r; E++) {
            for (W = Math.min(E, I), A = 0, O = 0; O < W; O++) A += c.get(E, O) * D[O];
            D[E] -= A, c.set(E, I, D[E]);
          }
          for (v = I, E = I + 1; E < r; E++) Math.abs(D[E]) > Math.abs(D[v]) && (v = E);
          if (v !== I) {
            for (O = 0; O < u; O++) F = c.get(v, O), c.set(v, O, c.get(I, O)), c.set(I, O, F);
            oe = d[v], d[v] = d[I], d[I] = oe, m = -m;
          }
          if (I < r && c.get(I, I) !== 0) for (E = I + 1; E < r; E++) c.set(E, I, c.get(E, I) / c.get(I, I));
        }
        this.LU = c, this.pivotVector = d, this.pivotSign = m;
      }
      isSingular() {
        let a = this.LU, c = a.columns;
        for (let r = 0; r < c; r++) if (a.get(r, r) === 0) return true;
        return false;
      }
      solve(a) {
        a = ce.checkMatrix(a);
        let c = this.LU;
        if (c.rows !== a.rows) throw new Error("Invalid matrix dimensions");
        if (this.isSingular()) throw new Error("LU matrix is singular");
        let u = a.columns, d = a.subMatrixRow(this.pivotVector, 0, u - 1), m = c.columns, E, I, O;
        for (O = 0; O < m; O++) for (E = O + 1; E < m; E++) for (I = 0; I < u; I++) d.set(E, I, d.get(E, I) - d.get(O, I) * c.get(E, O));
        for (O = m - 1; O >= 0; O--) {
          for (I = 0; I < u; I++) d.set(O, I, d.get(O, I) / c.get(O, O));
          for (E = 0; E < O; E++) for (I = 0; I < u; I++) d.set(E, I, d.get(E, I) - d.get(O, I) * c.get(E, O));
        }
        return d;
      }
      get determinant() {
        let a = this.LU;
        if (!a.isSquare()) throw new Error("Matrix must be square");
        let c = this.pivotSign, r = a.columns;
        for (let u = 0; u < r; u++) c *= a.get(u, u);
        return c;
      }
      get lowerTriangularMatrix() {
        let a = this.LU, c = a.rows, r = a.columns, u = new ce(c, r);
        for (let d = 0; d < c; d++) for (let m = 0; m < r; m++) d > m ? u.set(d, m, a.get(d, m)) : d === m ? u.set(d, m, 1) : u.set(d, m, 0);
        return u;
      }
      get upperTriangularMatrix() {
        let a = this.LU, c = a.rows, r = a.columns, u = new ce(c, r);
        for (let d = 0; d < c; d++) for (let m = 0; m < r; m++) d <= m ? u.set(d, m, a.get(d, m)) : u.set(d, m, 0);
        return u;
      }
      get pivotPermutationVector() {
        return Array.from(this.pivotVector);
      }
    }
    function Ee(T, a) {
      let c = 0;
      return Math.abs(T) > Math.abs(a) ? (c = a / T, Math.abs(T) * Math.sqrt(1 + c * c)) : a !== 0 ? (c = T / a, Math.abs(a) * Math.sqrt(1 + c * c)) : 0;
    }
    class ue {
      constructor(a) {
        a = Q.checkMatrix(a);
        let c = a.clone(), r = a.rows, u = a.columns, d = new Float64Array(u), m, E, I, O;
        for (I = 0; I < u; I++) {
          let v = 0;
          for (m = I; m < r; m++) v = Ee(v, c.get(m, I));
          if (v !== 0) {
            for (c.get(I, I) < 0 && (v = -v), m = I; m < r; m++) c.set(m, I, c.get(m, I) / v);
            for (c.set(I, I, c.get(I, I) + 1), E = I + 1; E < u; E++) {
              for (O = 0, m = I; m < r; m++) O += c.get(m, I) * c.get(m, E);
              for (O = -O / c.get(I, I), m = I; m < r; m++) c.set(m, E, c.get(m, E) + O * c.get(m, I));
            }
          }
          d[I] = -v;
        }
        this.QR = c, this.Rdiag = d;
      }
      solve(a) {
        a = ce.checkMatrix(a);
        let c = this.QR, r = c.rows;
        if (a.rows !== r) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let u = a.columns, d = a.clone(), m = c.columns, E, I, O, v;
        for (O = 0; O < m; O++) for (I = 0; I < u; I++) {
          for (v = 0, E = O; E < r; E++) v += c.get(E, O) * d.get(E, I);
          for (v = -v / c.get(O, O), E = O; E < r; E++) d.set(E, I, d.get(E, I) + v * c.get(E, O));
        }
        for (O = m - 1; O >= 0; O--) {
          for (I = 0; I < u; I++) d.set(O, I, d.get(O, I) / this.Rdiag[O]);
          for (E = 0; E < O; E++) for (I = 0; I < u; I++) d.set(E, I, d.get(E, I) - d.get(O, I) * c.get(E, O));
        }
        return d.subMatrix(0, m - 1, 0, u - 1);
      }
      isFullRank() {
        let a = this.QR.columns;
        for (let c = 0; c < a; c++) if (this.Rdiag[c] === 0) return false;
        return true;
      }
      get upperTriangularMatrix() {
        let a = this.QR, c = a.columns, r = new ce(c, c), u, d;
        for (u = 0; u < c; u++) for (d = 0; d < c; d++) u < d ? r.set(u, d, a.get(u, d)) : u === d ? r.set(u, d, this.Rdiag[u]) : r.set(u, d, 0);
        return r;
      }
      get orthogonalMatrix() {
        let a = this.QR, c = a.rows, r = a.columns, u = new ce(c, r), d, m, E, I;
        for (E = r - 1; E >= 0; E--) {
          for (d = 0; d < c; d++) u.set(d, E, 0);
          for (u.set(E, E, 1), m = E; m < r; m++) if (a.get(E, E) !== 0) {
            for (I = 0, d = E; d < c; d++) I += a.get(d, E) * u.get(d, m);
            for (I = -I / a.get(E, E), d = E; d < c; d++) u.set(d, m, u.get(d, m) + I * a.get(d, E));
          }
        }
        return u;
      }
    }
    class Ie {
      constructor(a, c = {}) {
        if (a = Q.checkMatrix(a), a.isEmpty()) throw new Error("Matrix must be non-empty");
        let r = a.rows, u = a.columns;
        const { computeLeftSingularVectors: d = true, computeRightSingularVectors: m = true, autoTranspose: E = false } = c;
        let I = !!d, O = !!m, v = false, A;
        if (r < u) if (!E) A = a.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          A = a.transpose(), r = A.rows, u = A.columns, v = true;
          let b = I;
          I = O, O = b;
        }
        else A = a.clone();
        let F = Math.min(r, u), oe = Math.min(r + 1, u), D = new Float64Array(oe), W = new ce(r, F), he = new ce(u, u), w = new Float64Array(u), te = new Float64Array(r), Te = new Float64Array(oe);
        for (let b = 0; b < oe; b++) Te[b] = b;
        let ye = Math.min(r - 1, u), Le = Math.max(0, Math.min(u - 2, r)), nt = Math.max(ye, Le);
        for (let b = 0; b < nt; b++) {
          if (b < ye) {
            D[b] = 0;
            for (let x = b; x < r; x++) D[b] = Ee(D[b], A.get(x, b));
            if (D[b] !== 0) {
              A.get(b, b) < 0 && (D[b] = -D[b]);
              for (let x = b; x < r; x++) A.set(x, b, A.get(x, b) / D[b]);
              A.set(b, b, A.get(b, b) + 1);
            }
            D[b] = -D[b];
          }
          for (let x = b + 1; x < u; x++) {
            if (b < ye && D[b] !== 0) {
              let de = 0;
              for (let X = b; X < r; X++) de += A.get(X, b) * A.get(X, x);
              de = -de / A.get(b, b);
              for (let X = b; X < r; X++) A.set(X, x, A.get(X, x) + de * A.get(X, b));
            }
            w[x] = A.get(b, x);
          }
          if (I && b < ye) for (let x = b; x < r; x++) W.set(x, b, A.get(x, b));
          if (b < Le) {
            w[b] = 0;
            for (let x = b + 1; x < u; x++) w[b] = Ee(w[b], w[x]);
            if (w[b] !== 0) {
              w[b + 1] < 0 && (w[b] = 0 - w[b]);
              for (let x = b + 1; x < u; x++) w[x] /= w[b];
              w[b + 1] += 1;
            }
            if (w[b] = -w[b], b + 1 < r && w[b] !== 0) {
              for (let x = b + 1; x < r; x++) te[x] = 0;
              for (let x = b + 1; x < r; x++) for (let de = b + 1; de < u; de++) te[x] += w[de] * A.get(x, de);
              for (let x = b + 1; x < u; x++) {
                let de = -w[x] / w[b + 1];
                for (let X = b + 1; X < r; X++) A.set(X, x, A.get(X, x) + de * te[X]);
              }
            }
            if (O) for (let x = b + 1; x < u; x++) he.set(x, b, w[x]);
          }
        }
        let Oe = Math.min(u, r + 1);
        if (ye < u && (D[ye] = A.get(ye, ye)), r < Oe && (D[Oe - 1] = 0), Le + 1 < Oe && (w[Le] = A.get(Le, Oe - 1)), w[Oe - 1] = 0, I) {
          for (let b = ye; b < F; b++) {
            for (let x = 0; x < r; x++) W.set(x, b, 0);
            W.set(b, b, 1);
          }
          for (let b = ye - 1; b >= 0; b--) if (D[b] !== 0) {
            for (let x = b + 1; x < F; x++) {
              let de = 0;
              for (let X = b; X < r; X++) de += W.get(X, b) * W.get(X, x);
              de = -de / W.get(b, b);
              for (let X = b; X < r; X++) W.set(X, x, W.get(X, x) + de * W.get(X, b));
            }
            for (let x = b; x < r; x++) W.set(x, b, -W.get(x, b));
            W.set(b, b, 1 + W.get(b, b));
            for (let x = 0; x < b - 1; x++) W.set(x, b, 0);
          } else {
            for (let x = 0; x < r; x++) W.set(x, b, 0);
            W.set(b, b, 1);
          }
        }
        if (O) for (let b = u - 1; b >= 0; b--) {
          if (b < Le && w[b] !== 0) for (let x = b + 1; x < u; x++) {
            let de = 0;
            for (let X = b + 1; X < u; X++) de += he.get(X, b) * he.get(X, x);
            de = -de / he.get(b + 1, b);
            for (let X = b + 1; X < u; X++) he.set(X, x, he.get(X, x) + de * he.get(X, b));
          }
          for (let x = 0; x < u; x++) he.set(x, b, 0);
          he.set(b, b, 1);
        }
        let Se = Oe - 1, Ze = Number.EPSILON;
        for (; Oe > 0; ) {
          let b, x;
          for (b = Oe - 2; b >= -1 && b !== -1; b--) {
            const de = Number.MIN_VALUE + Ze * Math.abs(D[b] + Math.abs(D[b + 1]));
            if (Math.abs(w[b]) <= de || Number.isNaN(w[b])) {
              w[b] = 0;
              break;
            }
          }
          if (b === Oe - 2) x = 4;
          else {
            let de;
            for (de = Oe - 1; de >= b && de !== b; de--) {
              let X = (de !== Oe ? Math.abs(w[de]) : 0) + (de !== b + 1 ? Math.abs(w[de - 1]) : 0);
              if (Math.abs(D[de]) <= Ze * X) {
                D[de] = 0;
                break;
              }
            }
            de === b ? x = 3 : de === Oe - 1 ? x = 1 : (x = 2, b = de);
          }
          switch (b++, x) {
            case 1: {
              let de = w[Oe - 2];
              w[Oe - 2] = 0;
              for (let X = Oe - 2; X >= b; X--) {
                let rt = Ee(D[X], de), ze = D[X] / rt, tt = de / rt;
                if (D[X] = rt, X !== b && (de = -tt * w[X - 1], w[X - 1] = ze * w[X - 1]), O) for (let st = 0; st < u; st++) rt = ze * he.get(st, X) + tt * he.get(st, Oe - 1), he.set(st, Oe - 1, -tt * he.get(st, X) + ze * he.get(st, Oe - 1)), he.set(st, X, rt);
              }
              break;
            }
            case 2: {
              let de = w[b - 1];
              w[b - 1] = 0;
              for (let X = b; X < Oe; X++) {
                let rt = Ee(D[X], de), ze = D[X] / rt, tt = de / rt;
                if (D[X] = rt, de = -tt * w[X], w[X] = ze * w[X], I) for (let st = 0; st < r; st++) rt = ze * W.get(st, X) + tt * W.get(st, b - 1), W.set(st, b - 1, -tt * W.get(st, X) + ze * W.get(st, b - 1)), W.set(st, X, rt);
              }
              break;
            }
            case 3: {
              const de = Math.max(Math.abs(D[Oe - 1]), Math.abs(D[Oe - 2]), Math.abs(w[Oe - 2]), Math.abs(D[b]), Math.abs(w[b])), X = D[Oe - 1] / de, rt = D[Oe - 2] / de, ze = w[Oe - 2] / de, tt = D[b] / de, st = w[b] / de, bt = ((rt + X) * (rt - X) + ze * ze) / 2, Oo = X * ze * (X * ze);
              let St = 0;
              (bt !== 0 || Oo !== 0) && (bt < 0 ? St = 0 - Math.sqrt(bt * bt + Oo) : St = Math.sqrt(bt * bt + Oo), St = Oo / (bt + St));
              let Co = (tt + X) * (tt - X) + St, xo = tt * st;
              for (let _e2 = b; _e2 < Oe - 1; _e2++) {
                let Lt = Ee(Co, xo);
                Lt === 0 && (Lt = Number.MIN_VALUE);
                let no = Co / Lt, ro = xo / Lt;
                if (_e2 !== b && (w[_e2 - 1] = Lt), Co = no * D[_e2] + ro * w[_e2], w[_e2] = no * w[_e2] - ro * D[_e2], xo = ro * D[_e2 + 1], D[_e2 + 1] = no * D[_e2 + 1], O) for (let wt = 0; wt < u; wt++) Lt = no * he.get(wt, _e2) + ro * he.get(wt, _e2 + 1), he.set(wt, _e2 + 1, -ro * he.get(wt, _e2) + no * he.get(wt, _e2 + 1)), he.set(wt, _e2, Lt);
                if (Lt = Ee(Co, xo), Lt === 0 && (Lt = Number.MIN_VALUE), no = Co / Lt, ro = xo / Lt, D[_e2] = Lt, Co = no * w[_e2] + ro * D[_e2 + 1], D[_e2 + 1] = -ro * w[_e2] + no * D[_e2 + 1], xo = ro * w[_e2 + 1], w[_e2 + 1] = no * w[_e2 + 1], I && _e2 < r - 1) for (let wt = 0; wt < r; wt++) Lt = no * W.get(wt, _e2) + ro * W.get(wt, _e2 + 1), W.set(wt, _e2 + 1, -ro * W.get(wt, _e2) + no * W.get(wt, _e2 + 1)), W.set(wt, _e2, Lt);
              }
              w[Oe - 2] = Co;
              break;
            }
            case 4: {
              if (D[b] <= 0 && (D[b] = D[b] < 0 ? -D[b] : 0, O)) for (let de = 0; de <= Se; de++) he.set(de, b, -he.get(de, b));
              for (; b < Se && !(D[b] >= D[b + 1]); ) {
                let de = D[b];
                if (D[b] = D[b + 1], D[b + 1] = de, O && b < u - 1) for (let X = 0; X < u; X++) de = he.get(X, b + 1), he.set(X, b + 1, he.get(X, b)), he.set(X, b, de);
                if (I && b < r - 1) for (let X = 0; X < r; X++) de = W.get(X, b + 1), W.set(X, b + 1, W.get(X, b)), W.set(X, b, de);
                b++;
              }
              Oe--;
              break;
            }
          }
        }
        if (v) {
          let b = he;
          he = W, W = b;
        }
        this.m = r, this.n = u, this.s = D, this.U = W, this.V = he;
      }
      solve(a) {
        let c = a, r = this.threshold, u = this.s.length, d = ce.zeros(u, u);
        for (let F = 0; F < u; F++) Math.abs(this.s[F]) <= r ? d.set(F, F, 0) : d.set(F, F, 1 / this.s[F]);
        let m = this.U, E = this.rightSingularVectors, I = E.mmul(d), O = E.rows, v = m.rows, A = ce.zeros(O, v);
        for (let F = 0; F < O; F++) for (let oe = 0; oe < v; oe++) {
          let D = 0;
          for (let W = 0; W < u; W++) D += I.get(F, W) * m.get(oe, W);
          A.set(F, oe, D);
        }
        return A.mmul(c);
      }
      solveForDiagonal(a) {
        return this.solve(ce.diag(a));
      }
      inverse() {
        let a = this.V, c = this.threshold, r = a.rows, u = a.columns, d = new ce(r, this.s.length);
        for (let v = 0; v < r; v++) for (let A = 0; A < u; A++) Math.abs(this.s[A]) > c && d.set(v, A, a.get(v, A) / this.s[A]);
        let m = this.U, E = m.rows, I = m.columns, O = new ce(r, E);
        for (let v = 0; v < r; v++) for (let A = 0; A < E; A++) {
          let F = 0;
          for (let oe = 0; oe < I; oe++) F += d.get(v, oe) * m.get(A, oe);
          O.set(v, A, F);
        }
        return O;
      }
      get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
      }
      get norm2() {
        return this.s[0];
      }
      get rank() {
        let a = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, c = 0, r = this.s;
        for (let u = 0, d = r.length; u < d; u++) r[u] > a && c++;
        return c;
      }
      get diagonal() {
        return Array.from(this.s);
      }
      get threshold() {
        return Number.EPSILON / 2 * Math.max(this.m, this.n) * this.s[0];
      }
      get leftSingularVectors() {
        return this.U;
      }
      get rightSingularVectors() {
        return this.V;
      }
      get diagonalMatrix() {
        return ce.diag(this.s);
      }
    }
    function Ne(T, a = false) {
      return T = Q.checkMatrix(T), a ? new Ie(T).inverse() : Pe(T, ce.eye(T.rows));
    }
    function Pe(T, a, c = false) {
      return T = Q.checkMatrix(T), a = Q.checkMatrix(a), c ? new Ie(T).solve(a) : T.isSquare() ? new V(T).solve(a) : new ue(T).solve(a);
    }
    function Ge(T) {
      if (T = ce.checkMatrix(T), T.isSquare()) {
        if (T.columns === 0) return 1;
        let a, c, r, u;
        if (T.columns === 2) return a = T.get(0, 0), c = T.get(0, 1), r = T.get(1, 0), u = T.get(1, 1), a * u - c * r;
        if (T.columns === 3) {
          let d, m, E;
          return d = new K(T, [
            1,
            2
          ], [
            1,
            2
          ]), m = new K(T, [
            1,
            2
          ], [
            0,
            2
          ]), E = new K(T, [
            1,
            2
          ], [
            0,
            1
          ]), a = T.get(0, 0), c = T.get(0, 1), r = T.get(0, 2), a * Ge(d) - c * Ge(m) + r * Ge(E);
        } else return new V(T).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function Be(T, a) {
      let c = [];
      for (let r = 0; r < T; r++) r !== a && c.push(r);
      return c;
    }
    function Pt(T, a, c, r = 1e-9, u = 1e-9) {
      if (T > u) return new Array(a.rows + 1).fill(0);
      {
        let d = a.addRow(c, [
          0
        ]);
        for (let m = 0; m < d.rows; m++) Math.abs(d.get(m, 0)) < r && d.set(m, 0, 0);
        return d.to1DArray();
      }
    }
    function _t(T, a = {}) {
      const { thresholdValue: c = 1e-9, thresholdError: r = 1e-9 } = a;
      T = ce.checkMatrix(T);
      let u = T.rows, d = new ce(u, u);
      for (let m = 0; m < u; m++) {
        let E = ce.columnVector(T.getRow(m)), I = T.subMatrixRow(Be(u, m)).transpose(), v = new Ie(I).solve(E), A = ce.sub(E, I.mmul(v)).abs().max();
        d.setRow(m, Pt(A, v, m, c, r));
      }
      return d;
    }
    function ho(T, a = Number.EPSILON) {
      if (T = ce.checkMatrix(T), T.isEmpty()) return T.transpose();
      let c = new Ie(T, {
        autoTranspose: true
      }), r = c.leftSingularVectors, u = c.rightSingularVectors, d = c.diagonal;
      for (let m = 0; m < d.length; m++) Math.abs(d[m]) > a ? d[m] = 1 / d[m] : d[m] = 0;
      return u.mmul(ce.diag(d).mmul(r.transpose()));
    }
    function fo(T, a = T, c = {}) {
      T = new ce(T);
      let r = false;
      if (typeof a == "object" && !ce.isMatrix(a) && !e.isAnyArray(a) ? (c = a, a = T, r = true) : a = new ce(a), T.rows !== a.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: u = true } = c;
      u && (T = T.center("column"), r || (a = a.center("column")));
      const d = T.transpose().mmul(a);
      for (let m = 0; m < d.rows; m++) for (let E = 0; E < d.columns; E++) d.set(m, E, d.get(m, E) * (1 / (T.rows - 1)));
      return d;
    }
    function Bi(T, a = T, c = {}) {
      T = new ce(T);
      let r = false;
      if (typeof a == "object" && !ce.isMatrix(a) && !e.isAnyArray(a) ? (c = a, a = T, r = true) : a = new ce(a), T.rows !== a.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: u = true, scale: d = true } = c;
      u && (T.center("column"), r || a.center("column")), d && (T.scale("column"), r || a.scale("column"));
      const m = T.standardDeviation("column", {
        unbiased: true
      }), E = r ? m : a.standardDeviation("column", {
        unbiased: true
      }), I = T.transpose().mmul(a);
      for (let O = 0; O < I.rows; O++) for (let v = 0; v < I.columns; v++) I.set(O, v, I.get(O, v) * (1 / (m[O] * E[v])) * (1 / (T.rows - 1)));
      return I;
    }
    class $n {
      constructor(a, c = {}) {
        const { assumeSymmetric: r = false } = c;
        if (a = Q.checkMatrix(a), !a.isSquare()) throw new Error("Matrix is not a square matrix");
        if (a.isEmpty()) throw new Error("Matrix must be non-empty");
        let u = a.columns, d = new ce(u, u), m = new Float64Array(u), E = new Float64Array(u), I = a, O, v, A = false;
        if (r ? A = true : A = a.isSymmetric(), A) {
          for (O = 0; O < u; O++) for (v = 0; v < u; v++) d.set(O, v, I.get(O, v));
          Yt(u, E, m, d), po(u, E, m, d);
        } else {
          let F = new ce(u, u), oe = new Float64Array(u);
          for (v = 0; v < u; v++) for (O = 0; O < u; O++) F.set(O, v, I.get(O, v));
          kr(u, F, oe, d), Gr(u, E, m, d, F);
        }
        this.n = u, this.e = E, this.d = m, this.V = d;
      }
      get realEigenvalues() {
        return Array.from(this.d);
      }
      get imaginaryEigenvalues() {
        return Array.from(this.e);
      }
      get eigenvectorMatrix() {
        return this.V;
      }
      get diagonalMatrix() {
        let a = this.n, c = this.e, r = this.d, u = new ce(a, a), d, m;
        for (d = 0; d < a; d++) {
          for (m = 0; m < a; m++) u.set(d, m, 0);
          u.set(d, d, r[d]), c[d] > 0 ? u.set(d, d + 1, c[d]) : c[d] < 0 && u.set(d, d - 1, c[d]);
        }
        return u;
      }
    }
    function Yt(T, a, c, r) {
      let u, d, m, E, I, O, v, A;
      for (I = 0; I < T; I++) c[I] = r.get(T - 1, I);
      for (E = T - 1; E > 0; E--) {
        for (A = 0, m = 0, O = 0; O < E; O++) A = A + Math.abs(c[O]);
        if (A === 0) for (a[E] = c[E - 1], I = 0; I < E; I++) c[I] = r.get(E - 1, I), r.set(E, I, 0), r.set(I, E, 0);
        else {
          for (O = 0; O < E; O++) c[O] /= A, m += c[O] * c[O];
          for (u = c[E - 1], d = Math.sqrt(m), u > 0 && (d = -d), a[E] = A * d, m = m - u * d, c[E - 1] = u - d, I = 0; I < E; I++) a[I] = 0;
          for (I = 0; I < E; I++) {
            for (u = c[I], r.set(I, E, u), d = a[I] + r.get(I, I) * u, O = I + 1; O <= E - 1; O++) d += r.get(O, I) * c[O], a[O] += r.get(O, I) * u;
            a[I] = d;
          }
          for (u = 0, I = 0; I < E; I++) a[I] /= m, u += a[I] * c[I];
          for (v = u / (m + m), I = 0; I < E; I++) a[I] -= v * c[I];
          for (I = 0; I < E; I++) {
            for (u = c[I], d = a[I], O = I; O <= E - 1; O++) r.set(O, I, r.get(O, I) - (u * a[O] + d * c[O]));
            c[I] = r.get(E - 1, I), r.set(E, I, 0);
          }
        }
        c[E] = m;
      }
      for (E = 0; E < T - 1; E++) {
        if (r.set(T - 1, E, r.get(E, E)), r.set(E, E, 1), m = c[E + 1], m !== 0) {
          for (O = 0; O <= E; O++) c[O] = r.get(O, E + 1) / m;
          for (I = 0; I <= E; I++) {
            for (d = 0, O = 0; O <= E; O++) d += r.get(O, E + 1) * r.get(O, I);
            for (O = 0; O <= E; O++) r.set(O, I, r.get(O, I) - d * c[O]);
          }
        }
        for (O = 0; O <= E; O++) r.set(O, E + 1, 0);
      }
      for (I = 0; I < T; I++) c[I] = r.get(T - 1, I), r.set(T - 1, I, 0);
      r.set(T - 1, T - 1, 1), a[0] = 0;
    }
    function po(T, a, c, r) {
      let u, d, m, E, I, O, v, A, F, oe, D, W, he, w, te, Te;
      for (m = 1; m < T; m++) a[m - 1] = a[m];
      a[T - 1] = 0;
      let ye = 0, Le = 0, nt = Number.EPSILON;
      for (O = 0; O < T; O++) {
        for (Le = Math.max(Le, Math.abs(c[O]) + Math.abs(a[O])), v = O; v < T && !(Math.abs(a[v]) <= nt * Le); ) v++;
        if (v > O) do {
          for (u = c[O], A = (c[O + 1] - u) / (2 * a[O]), F = Ee(A, 1), A < 0 && (F = -F), c[O] = a[O] / (A + F), c[O + 1] = a[O] * (A + F), oe = c[O + 1], d = u - c[O], m = O + 2; m < T; m++) c[m] -= d;
          for (ye = ye + d, A = c[v], D = 1, W = D, he = D, w = a[O + 1], te = 0, Te = 0, m = v - 1; m >= O; m--) for (he = W, W = D, Te = te, u = D * a[m], d = D * A, F = Ee(A, a[m]), a[m + 1] = te * F, te = a[m] / F, D = A / F, A = D * c[m] - te * u, c[m + 1] = d + te * (D * u + te * c[m]), I = 0; I < T; I++) d = r.get(I, m + 1), r.set(I, m + 1, te * r.get(I, m) + D * d), r.set(I, m, D * r.get(I, m) - te * d);
          A = -te * Te * he * w * a[O] / oe, a[O] = te * A, c[O] = D * A;
        } while (Math.abs(a[O]) > nt * Le);
        c[O] = c[O] + ye, a[O] = 0;
      }
      for (m = 0; m < T - 1; m++) {
        for (I = m, A = c[m], E = m + 1; E < T; E++) c[E] < A && (I = E, A = c[E]);
        if (I !== m) for (c[I] = c[m], c[m] = A, E = 0; E < T; E++) A = r.get(E, m), r.set(E, m, r.get(E, I)), r.set(E, I, A);
      }
    }
    function kr(T, a, c, r) {
      let u = 0, d = T - 1, m, E, I, O, v, A, F;
      for (A = u + 1; A <= d - 1; A++) {
        for (F = 0, O = A; O <= d; O++) F = F + Math.abs(a.get(O, A - 1));
        if (F !== 0) {
          for (I = 0, O = d; O >= A; O--) c[O] = a.get(O, A - 1) / F, I += c[O] * c[O];
          for (E = Math.sqrt(I), c[A] > 0 && (E = -E), I = I - c[A] * E, c[A] = c[A] - E, v = A; v < T; v++) {
            for (m = 0, O = d; O >= A; O--) m += c[O] * a.get(O, v);
            for (m = m / I, O = A; O <= d; O++) a.set(O, v, a.get(O, v) - m * c[O]);
          }
          for (O = 0; O <= d; O++) {
            for (m = 0, v = d; v >= A; v--) m += c[v] * a.get(O, v);
            for (m = m / I, v = A; v <= d; v++) a.set(O, v, a.get(O, v) - m * c[v]);
          }
          c[A] = F * c[A], a.set(A, A - 1, F * E);
        }
      }
      for (O = 0; O < T; O++) for (v = 0; v < T; v++) r.set(O, v, O === v ? 1 : 0);
      for (A = d - 1; A >= u + 1; A--) if (a.get(A, A - 1) !== 0) {
        for (O = A + 1; O <= d; O++) c[O] = a.get(O, A - 1);
        for (v = A; v <= d; v++) {
          for (E = 0, O = A; O <= d; O++) E += c[O] * r.get(O, v);
          for (E = E / c[A] / a.get(A, A - 1), O = A; O <= d; O++) r.set(O, v, r.get(O, v) + E * c[O]);
        }
      }
    }
    function Gr(T, a, c, r, u) {
      let d = T - 1, m = 0, E = T - 1, I = Number.EPSILON, O = 0, v = 0, A = 0, F = 0, oe = 0, D = 0, W = 0, he = 0, w, te, Te, ye, Le, nt, Oe, Se, Ze, b, x, de, X, rt, ze;
      for (w = 0; w < T; w++) for ((w < m || w > E) && (c[w] = u.get(w, w), a[w] = 0), te = Math.max(w - 1, 0); te < T; te++) v = v + Math.abs(u.get(w, te));
      for (; d >= m; ) {
        for (ye = d; ye > m && (D = Math.abs(u.get(ye - 1, ye - 1)) + Math.abs(u.get(ye, ye)), D === 0 && (D = v), !(Math.abs(u.get(ye, ye - 1)) < I * D)); ) ye--;
        if (ye === d) u.set(d, d, u.get(d, d) + O), c[d] = u.get(d, d), a[d] = 0, d--, he = 0;
        else if (ye === d - 1) {
          if (Oe = u.get(d, d - 1) * u.get(d - 1, d), A = (u.get(d - 1, d - 1) - u.get(d, d)) / 2, F = A * A + Oe, W = Math.sqrt(Math.abs(F)), u.set(d, d, u.get(d, d) + O), u.set(d - 1, d - 1, u.get(d - 1, d - 1) + O), Se = u.get(d, d), F >= 0) {
            for (W = A >= 0 ? A + W : A - W, c[d - 1] = Se + W, c[d] = c[d - 1], W !== 0 && (c[d] = Se - Oe / W), a[d - 1] = 0, a[d] = 0, Se = u.get(d, d - 1), D = Math.abs(Se) + Math.abs(W), A = Se / D, F = W / D, oe = Math.sqrt(A * A + F * F), A = A / oe, F = F / oe, te = d - 1; te < T; te++) W = u.get(d - 1, te), u.set(d - 1, te, F * W + A * u.get(d, te)), u.set(d, te, F * u.get(d, te) - A * W);
            for (w = 0; w <= d; w++) W = u.get(w, d - 1), u.set(w, d - 1, F * W + A * u.get(w, d)), u.set(w, d, F * u.get(w, d) - A * W);
            for (w = m; w <= E; w++) W = r.get(w, d - 1), r.set(w, d - 1, F * W + A * r.get(w, d)), r.set(w, d, F * r.get(w, d) - A * W);
          } else c[d - 1] = Se + A, c[d] = Se + A, a[d - 1] = W, a[d] = -W;
          d = d - 2, he = 0;
        } else {
          if (Se = u.get(d, d), Ze = 0, Oe = 0, ye < d && (Ze = u.get(d - 1, d - 1), Oe = u.get(d, d - 1) * u.get(d - 1, d)), he === 10) {
            for (O += Se, w = m; w <= d; w++) u.set(w, w, u.get(w, w) - Se);
            D = Math.abs(u.get(d, d - 1)) + Math.abs(u.get(d - 1, d - 2)), Se = Ze = 0.75 * D, Oe = -0.4375 * D * D;
          }
          if (he === 30 && (D = (Ze - Se) / 2, D = D * D + Oe, D > 0)) {
            for (D = Math.sqrt(D), Ze < Se && (D = -D), D = Se - Oe / ((Ze - Se) / 2 + D), w = m; w <= d; w++) u.set(w, w, u.get(w, w) - D);
            O += D, Se = Ze = Oe = 0.964;
          }
          for (he = he + 1, Le = d - 2; Le >= ye && (W = u.get(Le, Le), oe = Se - W, D = Ze - W, A = (oe * D - Oe) / u.get(Le + 1, Le) + u.get(Le, Le + 1), F = u.get(Le + 1, Le + 1) - W - oe - D, oe = u.get(Le + 2, Le + 1), D = Math.abs(A) + Math.abs(F) + Math.abs(oe), A = A / D, F = F / D, oe = oe / D, !(Le === ye || Math.abs(u.get(Le, Le - 1)) * (Math.abs(F) + Math.abs(oe)) < I * (Math.abs(A) * (Math.abs(u.get(Le - 1, Le - 1)) + Math.abs(W) + Math.abs(u.get(Le + 1, Le + 1)))))); ) Le--;
          for (w = Le + 2; w <= d; w++) u.set(w, w - 2, 0), w > Le + 2 && u.set(w, w - 3, 0);
          for (Te = Le; Te <= d - 1 && (rt = Te !== d - 1, Te !== Le && (A = u.get(Te, Te - 1), F = u.get(Te + 1, Te - 1), oe = rt ? u.get(Te + 2, Te - 1) : 0, Se = Math.abs(A) + Math.abs(F) + Math.abs(oe), Se !== 0 && (A = A / Se, F = F / Se, oe = oe / Se)), Se !== 0); Te++) if (D = Math.sqrt(A * A + F * F + oe * oe), A < 0 && (D = -D), D !== 0) {
            for (Te !== Le ? u.set(Te, Te - 1, -D * Se) : ye !== Le && u.set(Te, Te - 1, -u.get(Te, Te - 1)), A = A + D, Se = A / D, Ze = F / D, W = oe / D, F = F / A, oe = oe / A, te = Te; te < T; te++) A = u.get(Te, te) + F * u.get(Te + 1, te), rt && (A = A + oe * u.get(Te + 2, te), u.set(Te + 2, te, u.get(Te + 2, te) - A * W)), u.set(Te, te, u.get(Te, te) - A * Se), u.set(Te + 1, te, u.get(Te + 1, te) - A * Ze);
            for (w = 0; w <= Math.min(d, Te + 3); w++) A = Se * u.get(w, Te) + Ze * u.get(w, Te + 1), rt && (A = A + W * u.get(w, Te + 2), u.set(w, Te + 2, u.get(w, Te + 2) - A * oe)), u.set(w, Te, u.get(w, Te) - A), u.set(w, Te + 1, u.get(w, Te + 1) - A * F);
            for (w = m; w <= E; w++) A = Se * r.get(w, Te) + Ze * r.get(w, Te + 1), rt && (A = A + W * r.get(w, Te + 2), r.set(w, Te + 2, r.get(w, Te + 2) - A * oe)), r.set(w, Te, r.get(w, Te) - A), r.set(w, Te + 1, r.get(w, Te + 1) - A * F);
          }
        }
      }
      if (v !== 0) {
        for (d = T - 1; d >= 0; d--) if (A = c[d], F = a[d], F === 0) for (ye = d, u.set(d, d, 1), w = d - 1; w >= 0; w--) {
          for (Oe = u.get(w, w) - A, oe = 0, te = ye; te <= d; te++) oe = oe + u.get(w, te) * u.get(te, d);
          if (a[w] < 0) W = Oe, D = oe;
          else if (ye = w, a[w] === 0 ? u.set(w, d, Oe !== 0 ? -oe / Oe : -oe / (I * v)) : (Se = u.get(w, w + 1), Ze = u.get(w + 1, w), F = (c[w] - A) * (c[w] - A) + a[w] * a[w], nt = (Se * D - W * oe) / F, u.set(w, d, nt), u.set(w + 1, d, Math.abs(Se) > Math.abs(W) ? (-oe - Oe * nt) / Se : (-D - Ze * nt) / W)), nt = Math.abs(u.get(w, d)), I * nt * nt > 1) for (te = w; te <= d; te++) u.set(te, d, u.get(te, d) / nt);
        }
        else if (F < 0) for (ye = d - 1, Math.abs(u.get(d, d - 1)) > Math.abs(u.get(d - 1, d)) ? (u.set(d - 1, d - 1, F / u.get(d, d - 1)), u.set(d - 1, d, -(u.get(d, d) - A) / u.get(d, d - 1))) : (ze = Br(0, -u.get(d - 1, d), u.get(d - 1, d - 1) - A, F), u.set(d - 1, d - 1, ze[0]), u.set(d - 1, d, ze[1])), u.set(d, d - 1, 0), u.set(d, d, 1), w = d - 2; w >= 0; w--) {
          for (b = 0, x = 0, te = ye; te <= d; te++) b = b + u.get(w, te) * u.get(te, d - 1), x = x + u.get(w, te) * u.get(te, d);
          if (Oe = u.get(w, w) - A, a[w] < 0) W = Oe, oe = b, D = x;
          else if (ye = w, a[w] === 0 ? (ze = Br(-b, -x, Oe, F), u.set(w, d - 1, ze[0]), u.set(w, d, ze[1])) : (Se = u.get(w, w + 1), Ze = u.get(w + 1, w), de = (c[w] - A) * (c[w] - A) + a[w] * a[w] - F * F, X = (c[w] - A) * 2 * F, de === 0 && X === 0 && (de = I * v * (Math.abs(Oe) + Math.abs(F) + Math.abs(Se) + Math.abs(Ze) + Math.abs(W))), ze = Br(Se * oe - W * b + F * x, Se * D - W * x - F * b, de, X), u.set(w, d - 1, ze[0]), u.set(w, d, ze[1]), Math.abs(Se) > Math.abs(W) + Math.abs(F) ? (u.set(w + 1, d - 1, (-b - Oe * u.get(w, d - 1) + F * u.get(w, d)) / Se), u.set(w + 1, d, (-x - Oe * u.get(w, d) - F * u.get(w, d - 1)) / Se)) : (ze = Br(-oe - Ze * u.get(w, d - 1), -D - Ze * u.get(w, d), W, F), u.set(w + 1, d - 1, ze[0]), u.set(w + 1, d, ze[1]))), nt = Math.max(Math.abs(u.get(w, d - 1)), Math.abs(u.get(w, d))), I * nt * nt > 1) for (te = w; te <= d; te++) u.set(te, d - 1, u.get(te, d - 1) / nt), u.set(te, d, u.get(te, d) / nt);
        }
        for (w = 0; w < T; w++) if (w < m || w > E) for (te = w; te < T; te++) r.set(w, te, u.get(w, te));
        for (te = T - 1; te >= m; te--) for (w = m; w <= E; w++) {
          for (W = 0, Te = m; Te <= Math.min(te, E); Te++) W = W + r.get(w, Te) * u.get(Te, te);
          r.set(w, te, W);
        }
      }
    }
    function Br(T, a, c, r) {
      let u, d;
      return Math.abs(c) > Math.abs(r) ? (u = r / c, d = c + u * r, [
        (T + u * a) / d,
        (a - u * T) / d
      ]) : (u = c / r, d = r + u * c, [
        (u * T + a) / d,
        (u * a - T) / d
      ]);
    }
    class wl {
      constructor(a) {
        if (a = Q.checkMatrix(a), !a.isSymmetric()) throw new Error("Matrix is not symmetric");
        let c = a, r = c.rows, u = new ce(r, r), d = true, m, E, I;
        for (E = 0; E < r; E++) {
          let O = 0;
          for (I = 0; I < E; I++) {
            let v = 0;
            for (m = 0; m < I; m++) v += u.get(I, m) * u.get(E, m);
            v = (c.get(E, I) - v) / u.get(I, I), u.set(E, I, v), O = O + v * v;
          }
          for (O = c.get(E, E) - O, d && (d = O > 0), u.set(E, E, Math.sqrt(Math.max(O, 0))), I = E + 1; I < r; I++) u.set(E, I, 0);
        }
        this.L = u, this.positiveDefinite = d;
      }
      isPositiveDefinite() {
        return this.positiveDefinite;
      }
      solve(a) {
        a = Q.checkMatrix(a);
        let c = this.L, r = c.rows;
        if (a.rows !== r) throw new Error("Matrix dimensions do not match");
        if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
        let u = a.columns, d = a.clone(), m, E, I;
        for (I = 0; I < r; I++) for (E = 0; E < u; E++) {
          for (m = 0; m < I; m++) d.set(I, E, d.get(I, E) - d.get(m, E) * c.get(I, m));
          d.set(I, E, d.get(I, E) / c.get(I, I));
        }
        for (I = r - 1; I >= 0; I--) for (E = 0; E < u; E++) {
          for (m = I + 1; m < r; m++) d.set(I, E, d.get(I, E) - d.get(m, E) * c.get(m, I));
          d.set(I, E, d.get(I, E) / c.get(I, I));
        }
        return d;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class Nl {
      constructor(a, c = {}) {
        a = Q.checkMatrix(a);
        let { Y: r } = c;
        const { scaleScores: u = false, maxIterations: d = 1e3, terminationCriteria: m = 1e-10 } = c;
        let E;
        if (r) {
          if (e.isAnyArray(r) && typeof r[0] == "number" ? r = ce.columnVector(r) : r = Q.checkMatrix(r), r.rows !== a.rows) throw new Error("Y should have the same number of rows as X");
          E = r.getColumnVector(0);
        } else E = a.getColumnVector(0);
        let I = 1, O, v, A, F;
        for (let oe = 0; oe < d && I > m; oe++) A = a.transpose().mmul(E).div(E.transpose().mmul(E).get(0, 0)), A = A.div(A.norm()), O = a.mmul(A).div(A.transpose().mmul(A).get(0, 0)), oe > 0 && (I = O.clone().sub(F).pow(2).sum()), F = O.clone(), r ? (v = r.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0)), v = v.div(v.norm()), E = r.mmul(v).div(v.transpose().mmul(v).get(0, 0))) : E = O;
        if (r) {
          let oe = a.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0));
          oe = oe.div(oe.norm());
          let D = a.clone().sub(O.clone().mmul(oe.transpose())), W = E.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0)), he = r.clone().sub(O.clone().mulS(W.get(0, 0)).mmul(v.transpose()));
          this.t = O, this.p = oe.transpose(), this.w = A.transpose(), this.q = v, this.u = E, this.s = O.transpose().mmul(O), this.xResidual = D, this.yResidual = he, this.betas = W;
        } else this.w = A.transpose(), this.s = O.transpose().mmul(O).sqrt(), u ? this.t = O.clone().div(this.s.get(0, 0)) : this.t = O, this.xResidual = a.sub(O.mmul(A.transpose()));
      }
    }
    return He.AbstractMatrix = Ae, He.CHO = wl, He.CholeskyDecomposition = wl, He.DistanceMatrix = jo, He.EVD = $n, He.EigenvalueDecomposition = $n, He.LU = V, He.LuDecomposition = V, He.Matrix = ce, He.MatrixColumnSelectionView = Gi, He.MatrixColumnView = Wr, He.MatrixFlipColumnView = Sl, He.MatrixFlipRowView = S, He.MatrixRowSelectionView = P, He.MatrixRowView = L, He.MatrixSelectionView = K, He.MatrixSubView = Z, He.MatrixTransposeView = J, He.NIPALS = Nl, He.Nipals = Nl, He.QR = ue, He.QrDecomposition = ue, He.SVD = Ie, He.SingularValueDecomposition = Ie, He.SymmetricMatrix = Zt, He.WrapperMatrix1D = le, He.WrapperMatrix2D = Q, He.correlation = Bi, He.covariance = fo, He.default = ce, He.determinant = Ge, He.inverse = Ne, He.linearDependencies = _t, He.pseudoInverse = ho, He.solve = Pe, He.wrap = ae, He;
  }
  var $c = OI();
  const Tu = hI($c), Po = $c.Matrix;
  Tu.Matrix ? Tu.Matrix : $c.Matrix;
  const _cr = class _cr {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "initPromise", null);
      __publicField(this, "accelerationListeners", /* @__PURE__ */ new Map());
      __publicField(this, "gyroscopeListeners", /* @__PURE__ */ new Map());
      __publicField(this, "nextListenerId", 0);
      __publicField(this, "lastAccelerationReading", null);
      __publicField(this, "lastGyroscopeReading", null);
      __publicField(this, "normalizeAccelerationToENU", false);
      __publicField(this, "normalizeGyroscopeToENU", false);
      __publicField(this, "deviceOrientation", null);
      __publicField(this, "isAccelerationActive", false);
      __publicField(this, "isGyroscopeActive", false);
      __publicField(this, "motionEventListenerCount", 0);
      __publicField(this, "disposed", false);
      __publicField(this, "accelerationIntervalMs", 0);
      __publicField(this, "gyroscopeIntervalMs", 0);
      __publicField(this, "accelerationPrevReading", null);
      __publicField(this, "accelerationAccumulatedX", 0);
      __publicField(this, "accelerationAccumulatedY", 0);
      __publicField(this, "accelerationAccumulatedZ", 0);
      __publicField(this, "accelerationAccumulatedTime", 0);
      __publicField(this, "accelerationLastEmitTime", 0);
      __publicField(this, "gyroscopePrevReading", null);
      __publicField(this, "gyroscopeAccumulatedX", 0);
      __publicField(this, "gyroscopeAccumulatedY", 0);
      __publicField(this, "gyroscopeAccumulatedZ", 0);
      __publicField(this, "gyroscopeAccumulatedTime", 0);
      __publicField(this, "gyroscopeLastEmitTime", 0);
      __publicField(this, "accelerationTimer", null);
      __publicField(this, "gyroscopeTimer", null);
      __publicField(this, "boundHandleMotionEvent");
      __publicField(this, "boundHandleOrientationEvent");
      __publicField(this, "matrixRz");
      __publicField(this, "matrixRy");
      __publicField(this, "matrixRx");
      __publicField(this, "matrixR");
      __publicField(this, "matrixRTemp");
      __publicField(this, "vectorInput");
      __publicField(this, "vectorOutput");
      __publicField(this, "gravityENU");
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = Po.zeros(3, 3), this.matrixRy = Po.zeros(3, 3), this.matrixRx = Po.zeros(3, 3), this.matrixR = Po.zeros(3, 3), this.matrixRTemp = Po.zeros(3, 3), this.vectorInput = Po.zeros(3, 1), this.vectorOutput = Po.zeros(3, 1), this.gravityENU = new Po([
        [
          0
        ],
        [
          0
        ],
        [
          -9.81
        ]
      ]);
    }
    async init(t) {
      if (this.initialized) return k(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const o = await this.initPromise;
      return o.isErr() && (this.initPromise = null), o;
    }
    async doInit(t) {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      const o = await this.requestPermissionIfNeeded(t);
      return o.isErr() ? C(o.error) : await this.checkHardwareSupport() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, k(void 0)) : C(new Ue("Device motion is not supported by this browser"));
    }
    async requestPermissionIfNeeded(t) {
      try {
        if (typeof DeviceMotionEvent < "u" && typeof DeviceMotionEvent.requestPermission == "function") {
          let o = "prompt";
          try {
            o = await DeviceMotionEvent.requestPermission();
          } catch {
          }
          if (t && o === "prompt") {
            if (!await t("prompt", "permission.imu.required")) return C(new Ue("User declined to grant IMU permission"));
            if (await DeviceMotionEvent.requestPermission() !== "granted") return C(new Ue("IMU permission denied"));
          } else return o === "denied" ? C(new Ue("IMU permission denied")) : k(void 0);
        }
        return k(void 0);
      } catch (o) {
        return C(new Ue("Failed to request IMU permission", void 0, o));
      }
    }
    async checkHardwareSupport() {
      return !("DeviceOrientationEvent" in window) || !("DeviceMotionEvent" in window) ? false : new Promise((t) => {
        let o = false;
        const i = () => {
          window.removeEventListener("deviceorientation", l), window.removeEventListener("devicemotion", h);
        }, n = () => {
          o || (o = true, i(), t(true));
        }, s = () => {
          o || (o = true, i(), t(false));
        }, l = (f) => {
          (f.alpha !== null || f.beta !== null || f.gamma !== null) && n();
        }, h = (f) => {
          (f.acceleration || f.accelerationIncludingGravity || f.rotationRate) && n();
        };
        window.addEventListener("deviceorientation", l), window.addEventListener("devicemotion", h), setTimeout(s, 1e3);
      });
    }
    async startAcceleration(t = {}) {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const o = await this.init();
        if (o.isErr()) return C(o.error);
      }
      if (this.isAccelerationActive) return k(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false, this.accelerationIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isAccelerationActive = true, k(void 0);
      } catch (o) {
        return C(new Ue("Failed to start acceleration monitoring", void 0, o));
      }
    }
    async startGyroscope(t = {}) {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const o = await this.init();
        if (o.isErr()) return C(o.error);
      }
      if (this.isGyroscopeActive) return k(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false, this.gyroscopeIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isGyroscopeActive = true, k(void 0);
      } catch (o) {
        return C(new Ue("Failed to start gyroscope monitoring", void 0, o));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return k(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.accelerationIntervalMs = 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), k(void 0);
      } catch (t) {
        return C(new Ue("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return k(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.gyroscopeIntervalMs = 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), k(void 0);
      } catch (t) {
        return C(new Ue("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return k(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return k(this.lastGyroscopeReading);
    }
    onAccelerationReading(t) {
      const o = this.nextListenerId++;
      return this.accelerationListeners.set(o, t), this.lastAccelerationReading && t(this.lastAccelerationReading), o;
    }
    onGyroscopeReading(t) {
      const o = this.nextListenerId++;
      return this.gyroscopeListeners.set(o, t), this.lastGyroscopeReading && t(this.lastGyroscopeReading), o;
    }
    removeEventListener(t) {
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), k(void 0);
    }
    dispose() {
      this.disposed || (this.disposed = true, this.stopAcceleration(), this.stopGyroscope(), "DeviceOrientationEvent" in window && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent), this.accelerationListeners.clear(), this.gyroscopeListeners.clear(), this.initialized = false, this.initPromise = null, this.deviceOrientation = null, this.lastAccelerationReading = null, this.lastGyroscopeReading = null);
    }
    handleOrientationEvent(t) {
      t.alpha !== null && t.beta !== null && t.gamma !== null && (this.deviceOrientation = {
        alpha: t.alpha,
        beta: t.beta,
        gamma: t.gamma
      });
    }
    handleMotionEvent(t) {
      const o = t.timeStamp || performance.now();
      this.isAccelerationActive && this.processAccelerationData(t, o), this.isGyroscopeActive && this.processGyroscopeData(t, o);
    }
    addAccelerationReading(t) {
      if (this.accelerationIntervalMs === 0) {
        this.lastAccelerationReading = t, this.notifyListeners(this.accelerationListeners, t, "acceleration");
        return;
      }
      if (this.accelerationPrevReading === null) {
        this.accelerationPrevReading = t, this.accelerationAccumulatedX = t.x, this.accelerationAccumulatedY = t.y, this.accelerationAccumulatedZ = t.z, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = t.timestamp, this.accelerationTimer === null && (this.accelerationTimer = window.setTimeout(() => this.flushAccelerationReadings(), this.accelerationIntervalMs));
        return;
      }
      const o = t.timestamp - this.accelerationPrevReading.timestamp;
      if (o <= 0) {
        this.accelerationPrevReading = t;
        return;
      }
      this.accelerationAccumulatedX += (this.accelerationPrevReading.x + t.x) * o / 2, this.accelerationAccumulatedY += (this.accelerationPrevReading.y + t.y) * o / 2, this.accelerationAccumulatedZ += (this.accelerationPrevReading.z + t.z) * o / 2, this.accelerationAccumulatedTime += o, t.timestamp - this.accelerationLastEmitTime >= this.accelerationIntervalMs ? (this.flushAccelerationReadings(), this.accelerationPrevReading = t, this.accelerationAccumulatedX = t.x, this.accelerationAccumulatedY = t.y, this.accelerationAccumulatedZ = t.z, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = t.timestamp, this.accelerationTimer !== null && clearTimeout(this.accelerationTimer), this.accelerationTimer = window.setTimeout(() => this.flushAccelerationReadings(), this.accelerationIntervalMs)) : this.accelerationPrevReading = t;
    }
    flushAccelerationReadings() {
      if (this.accelerationPrevReading === null) {
        this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
        return;
      }
      let t;
      if (this.accelerationAccumulatedTime === 0) t = this.accelerationPrevReading;
      else {
        const o = this.accelerationAccumulatedX / this.accelerationAccumulatedTime, i = this.accelerationAccumulatedY / this.accelerationAccumulatedTime, n = this.accelerationAccumulatedZ / this.accelerationAccumulatedTime;
        t = {
          x: o,
          y: i,
          z: n,
          timestamp: this.accelerationPrevReading.timestamp
        };
      }
      this.lastAccelerationReading = t, this.notifyListeners(this.accelerationListeners, t, "acceleration"), this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
    }
    addGyroscopeReading(t) {
      if (this.gyroscopeIntervalMs === 0) {
        this.lastGyroscopeReading = t, this.notifyListeners(this.gyroscopeListeners, t, "gyroscope");
        return;
      }
      if (this.gyroscopePrevReading === null) {
        this.gyroscopePrevReading = t, this.gyroscopeAccumulatedX = t.x, this.gyroscopeAccumulatedY = t.y, this.gyroscopeAccumulatedZ = t.z, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = t.timestamp, this.gyroscopeTimer === null && (this.gyroscopeTimer = window.setTimeout(() => this.flushGyroscopeReadings(), this.gyroscopeIntervalMs));
        return;
      }
      const o = t.timestamp - this.gyroscopePrevReading.timestamp;
      if (o <= 0) {
        this.gyroscopePrevReading = t;
        return;
      }
      this.gyroscopeAccumulatedX += (this.gyroscopePrevReading.x + t.x) * o / 2, this.gyroscopeAccumulatedY += (this.gyroscopePrevReading.y + t.y) * o / 2, this.gyroscopeAccumulatedZ += (this.gyroscopePrevReading.z + t.z) * o / 2, this.gyroscopeAccumulatedTime += o, t.timestamp - this.gyroscopeLastEmitTime >= this.gyroscopeIntervalMs ? (this.flushGyroscopeReadings(), this.gyroscopePrevReading = t, this.gyroscopeAccumulatedX = t.x, this.gyroscopeAccumulatedY = t.y, this.gyroscopeAccumulatedZ = t.z, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = t.timestamp, this.gyroscopeTimer !== null && clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = window.setTimeout(() => this.flushGyroscopeReadings(), this.gyroscopeIntervalMs)) : this.gyroscopePrevReading = t;
    }
    flushGyroscopeReadings() {
      if (this.gyroscopePrevReading === null) {
        this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
        return;
      }
      let t;
      if (this.gyroscopeAccumulatedTime === 0) t = this.gyroscopePrevReading;
      else {
        const o = this.gyroscopeAccumulatedX / this.gyroscopeAccumulatedTime, i = this.gyroscopeAccumulatedY / this.gyroscopeAccumulatedTime, n = this.gyroscopeAccumulatedZ / this.gyroscopeAccumulatedTime;
        t = {
          x: o,
          y: i,
          z: n,
          timestamp: this.gyroscopePrevReading.timestamp
        };
      }
      this.lastGyroscopeReading = t, this.notifyListeners(this.gyroscopeListeners, t, "gyroscope"), this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
    }
    processAccelerationData(t, o) {
      let i = t.acceleration, n = false;
      if ((!i || i.x === null || i.y === null || i.z === null) && (i = t.accelerationIncludingGravity, n = true), !i || i.x === null || i.y === null || i.z === null) return;
      let s = i.x, l = i.y, h = i.z;
      if (n && this.deviceOrientation) {
        const g = this.computeGravityInDeviceFrame(this.deviceOrientation);
        s -= g.x, l -= g.y, h -= g.z;
      }
      let f;
      this.normalizeAccelerationToENU && this.deviceOrientation ? f = this.transformToENU(s, l, h, o, this.deviceOrientation) : f = {
        x: s,
        y: l,
        z: h,
        timestamp: o
      }, this.addAccelerationReading(f);
    }
    processGyroscopeData(t, o) {
      const i = t.rotationRate;
      if (!i || i.alpha === null || i.beta === null || i.gamma === null) return;
      const n = i.beta, s = i.gamma, l = i.alpha;
      let h;
      this.normalizeGyroscopeToENU && this.deviceOrientation ? h = this.transformToENU(n, s, l, o, this.deviceOrientation) : h = {
        x: n,
        y: s,
        z: l,
        timestamp: o
      }, this.addGyroscopeReading(h);
    }
    notifyListeners(t, o, i) {
      for (const n of t.values()) try {
        n(o);
      } catch (s) {
        console.error(`Error in ${i} callback:`, s);
      }
    }
    updateRotationMatrices(t) {
      const o = t.alpha * _cr.DEG_TO_RAD, i = t.beta * _cr.DEG_TO_RAD, n = t.gamma * _cr.DEG_TO_RAD, s = Math.cos(o), l = Math.sin(o), h = Math.cos(i), f = Math.sin(i), g = Math.cos(n), p = Math.sin(n);
      this.matrixRz.set(0, 0, s), this.matrixRz.set(0, 1, -l), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, l), this.matrixRz.set(1, 1, s), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, h), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, f), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -f), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, h), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, g), this.matrixRx.set(1, 2, -p), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, p), this.matrixRx.set(2, 2, g), this.multiplyMatricesInPlace(this.matrixRz, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRx, this.matrixR);
    }
    multiplyMatricesInPlace(t, o, i) {
      for (let n = 0; n < 3; n++) for (let s = 0; s < 3; s++) {
        let l = 0;
        for (let h = 0; h < 3; h++) l += t.get(n, h) * o.get(h, s);
        i.set(n, s, l);
      }
    }
    multiplyMatrixVectorInPlace(t, o, i) {
      for (let n = 0; n < 3; n++) {
        let s = 0;
        for (let l = 0; l < 3; l++) s += t.get(n, l) * o.get(l, 0);
        i.set(n, 0, s);
      }
    }
    transformToENU(t, o, i, n, s) {
      return this.updateRotationMatrices(s), this.vectorInput.set(0, 0, t), this.vectorInput.set(1, 0, o), this.vectorInput.set(2, 0, i), this.multiplyMatrixVectorInPlace(this.matrixR, this.vectorInput, this.vectorOutput), {
        x: this.vectorOutput.get(0, 0),
        y: this.vectorOutput.get(1, 0),
        z: this.vectorOutput.get(2, 0),
        timestamp: n
      };
    }
    computeGravityInDeviceFrame(t) {
      this.updateRotationMatrices(t);
      let o = 0, i = 0, n = 0;
      for (let s = 0; s < 3; s++) {
        const l = this.gravityENU.get(s, 0);
        o += this.matrixR.get(s, 0) * l, i += this.matrixR.get(s, 1) * l, n += this.matrixR.get(s, 2) * l;
      }
      return {
        x: o,
        y: i,
        z: n
      };
    }
  };
  __publicField(_cr, "GRAVITY", 9.81);
  __publicField(_cr, "DEG_TO_RAD", Math.PI / 180);
  let cr = _cr;
  const _wi = class _wi {
    constructor(t) {
      __publicField(this, "context");
      __publicField(this, "storageProvider", null);
      __publicField(this, "geolocationProvider", null);
      __publicField(this, "fileProvider", null);
      __publicField(this, "imuProvider", null);
      __publicField(this, "deviceOrientationProvider", null);
      __publicField(this, "initialized", false);
      this.context = t;
    }
    static async init(t) {
      const o = Yc.getPlatformContext(), i = new _wi(o), n = await i.initializeProviders(t);
      return n.isErr() ? C(n.error) : (_wi.instance = i, k(i));
    }
    static getInstance() {
      return _wi.instance ? k(_wi.instance) : C(new zi("Platform services not initialized", Ei.NOT_INITIALIZED));
    }
    async initializeProviders(t) {
      try {
        this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage);
        const o = await Promise.all([
          this.createIMUProvider(t == null ? void 0 : t.imu),
          this.createDeviceOrientationProvider(t == null ? void 0 : t.deviceOrientation)
        ]);
        return this.imuProvider = o[0], this.deviceOrientationProvider = o[1], this.geolocationProvider = await this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, k(void 0);
      } catch (o) {
        return C(new zi("Failed to initialize platform providers", Ei.DETECTION_FAILED, o));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case mt.TAURI:
          return new RT((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case mt.WEB:
        case mt.MOBILE_WEB:
        case mt.UNKNOWN:
        default:
          return new sI((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let o;
      switch (this.context.environment) {
        case mt.TAURI:
          o = new aI((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case mt.WEB:
        case mt.MOBILE_WEB:
        case mt.UNKNOWN:
        default:
          o = new lI();
          break;
      }
      const i = await o.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize geolocation provider", i.error), null) : o;
    }
    createFileProvider() {
      return {
        init: async () => C(new Ue("File provider not implemented")),
        readFile: async () => C(new Ue("File provider not implemented")),
        writeFile: async () => C(new Ue("File provider not implemented")),
        deleteFile: async () => C(new Ue("File provider not implemented")),
        listFiles: async () => C(new Ue("File provider not implemented")),
        exists: async () => C(new Ue("File provider not implemented")),
        isSupported: () => false
      };
    }
    async createIMUProvider(t) {
      const o = new cr(), i = await o.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize IMU provider", i.error), null) : o;
    }
    async createDeviceOrientationProvider(t) {
      const o = new uI(), i = await o.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize device orientation provider", i.error), null) : o;
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? k(this.storageProvider) : C(new zi("Storage provider not initialized", Ei.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? k(this.geolocationProvider) : C(new zi("Geolocation provider not initialized", Ei.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? k(this.fileProvider) : C(new zi("File provider not initialized", Ei.DETECTION_FAILED));
    }
    isInitialized() {
      return this.initialized;
    }
    getCapabilities() {
      return this.context.capabilities;
    }
    getConfiguration() {
      return this.context.configuration;
    }
    isEnvironment(t) {
      return this.context.environment === t;
    }
    static reset() {
      _wi.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? k(this.imuProvider) : C(new zi("IMU provider not initialized", Ei.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? k(this.deviceOrientationProvider) : C(new zi("Device orientation provider not initialized", Ei.DETECTION_FAILED));
    }
  };
  __publicField(_wi, "instance", null);
  let wi = _wi;
  Mr = function() {
    return wi.getInstance();
  };
  RI = function() {
    return typeof navigator > "u" ? false : Yc.detectEnvironment() === mt.TAURI;
  };
  class AI {
    constructor() {
      __publicField(this, "storageProvider", null);
      __publicField(this, "initialized", false);
    }
    async init() {
      if (this.initialized) return;
      const t = Mr();
      if (t.isErr()) throw t.error;
      const o = t.value.getStorage();
      if (o.isErr()) throw o.error;
      this.storageProvider = o.value;
      const i = await this.storageProvider.init();
      if (i.isErr()) throw i.error;
      this.initialized = true;
    }
    async set(t, o) {
      if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
      const i = await this.storageProvider.set(t, o);
      if (i.isErr()) throw i.error;
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
  let eo;
  eo = new AI();
  ht = eo.set.bind(eo);
  Zi = eo.get.bind(eo);
  mL = eo.save.bind(eo);
  eo.init.bind(eo);
  eo.exportToJson.bind(eo);
  eo.clear.bind(eo);
  eo.remove.bind(eo);
  function G(e, t, o) {
    function i(h, f) {
      if (h._zod || Object.defineProperty(h, "_zod", {
        value: {
          def: f,
          constr: l,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      }), h._zod.traits.has(e)) return;
      h._zod.traits.add(e), t(h, f);
      const g = l.prototype, p = Object.keys(g);
      for (let R = 0; R < p.length; R++) {
        const y = p[R];
        y in h || (h[y] = g[y].bind(h));
      }
    }
    const n = (o == null ? void 0 : o.Parent) ?? Object;
    class s extends n {
    }
    Object.defineProperty(s, "name", {
      value: e
    });
    function l(h) {
      var f;
      const g = (o == null ? void 0 : o.Parent) ? new s() : this;
      i(g, h), (f = g._zod).deferred ?? (f.deferred = []);
      for (const p of g._zod.deferred) p();
      return g;
    }
    return Object.defineProperty(l, "init", {
      value: i
    }), Object.defineProperty(l, Symbol.hasInstance, {
      value: (h) => {
        var _a3, _b3;
        return (o == null ? void 0 : o.Parent) && h instanceof o.Parent ? true : (_b3 = (_a3 = h == null ? void 0 : h._zod) == null ? void 0 : _a3.traits) == null ? void 0 : _b3.has(e);
      }
    }), Object.defineProperty(l, "name", {
      value: e
    }), l;
  }
  class In extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  class fd extends Error {
    constructor(t) {
      super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
    }
  }
  const pd = {};
  function Hi(e) {
    return pd;
  }
  function Td(e) {
    const t = Object.values(e).filter((i) => typeof i == "number");
    return Object.entries(e).filter(([i, n]) => t.indexOf(+i) === -1).map(([i, n]) => n);
  }
  function Tc(e, t) {
    return typeof t == "bigint" ? t.toString() : t;
  }
  function Vc(e) {
    return {
      get value() {
        {
          const t = e();
          return Object.defineProperty(this, "value", {
            value: t
          }), t;
        }
      }
    };
  }
  function qc(e) {
    return e == null;
  }
  function Zc(e) {
    const t = e.startsWith("^") ? 1 : 0, o = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, o);
  }
  function SI(e, t) {
    const o = (e.toString().split(".")[1] || "").length, i = t.toString();
    let n = (i.split(".")[1] || "").length;
    if (n === 0 && /\d?e-\d?/.test(i)) {
      const f = i.match(/\d?e-(\d?)/);
      (f == null ? void 0 : f[1]) && (n = Number.parseInt(f[1]));
    }
    const s = o > n ? o : n, l = Number.parseInt(e.toFixed(s).replace(".", "")), h = Number.parseInt(t.toFixed(s).replace(".", ""));
    return l % h / 10 ** s;
  }
  const gu = /* @__PURE__ */ Symbol("evaluating");
  function $e(e, t, o) {
    let i;
    Object.defineProperty(e, t, {
      get() {
        if (i !== gu) return i === void 0 && (i = gu, i = o()), i;
      },
      set(n) {
        Object.defineProperty(e, t, {
          value: n
        });
      },
      configurable: true
    });
  }
  function an(e, t, o) {
    Object.defineProperty(e, t, {
      value: o,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  function Ui(...e) {
    const t = {};
    for (const o of e) {
      const i = Object.getOwnPropertyDescriptors(o);
      Object.assign(t, i);
    }
    return Object.defineProperties({}, t);
  }
  function mu(e) {
    return JSON.stringify(e);
  }
  function wI(e) {
    return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const gd = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
  };
  function Rs(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
  }
  const NI = Vc(() => {
    var _a3;
    if (typeof navigator < "u" && ((_a3 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a3.includes("Cloudflare"))) return false;
    try {
      const e = Function;
      return new e(""), true;
    } catch {
      return false;
    }
  });
  function Mn(e) {
    if (Rs(e) === false) return false;
    const t = e.constructor;
    if (t === void 0 || typeof t != "function") return true;
    const o = t.prototype;
    return !(Rs(o) === false || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === false);
  }
  function md(e) {
    return Mn(e) ? {
      ...e
    } : Array.isArray(e) ? [
      ...e
    ] : e;
  }
  const yI = /* @__PURE__ */ new Set([
    "string",
    "number",
    "symbol"
  ]);
  function ea(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function Wi(e, t, o) {
    const i = new e._zod.constr(t ?? e._zod.def);
    return (!t || (o == null ? void 0 : o.parent)) && (i._zod.parent = e), i;
  }
  function Re(e) {
    const t = e;
    if (!t) return {};
    if (typeof t == "string") return {
      error: () => t
    };
    if ((t == null ? void 0 : t.message) !== void 0) {
      if ((t == null ? void 0 : t.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
      t.error = t.message;
    }
    return delete t.message, typeof t.error == "string" ? {
      ...t,
      error: () => t.error
    } : t;
  }
  function bI(e) {
    return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
  }
  const LI = {
    safeint: [
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    ],
    int32: [
      -2147483648,
      2147483647
    ],
    uint32: [
      0,
      4294967295
    ],
    float32: [
      -34028234663852886e22,
      34028234663852886e22
    ],
    float64: [
      -Number.MAX_VALUE,
      Number.MAX_VALUE
    ]
  };
  function vI(e, t) {
    const o = e._zod.def, i = o.checks;
    if (i && i.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
    const s = Ui(e._zod.def, {
      get shape() {
        const l = {};
        for (const h in t) {
          if (!(h in o.shape)) throw new Error(`Unrecognized key: "${h}"`);
          t[h] && (l[h] = o.shape[h]);
        }
        return an(this, "shape", l), l;
      },
      checks: []
    });
    return Wi(e, s);
  }
  function CI(e, t) {
    const o = e._zod.def, i = o.checks;
    if (i && i.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
    const s = Ui(e._zod.def, {
      get shape() {
        const l = {
          ...e._zod.def.shape
        };
        for (const h in t) {
          if (!(h in o.shape)) throw new Error(`Unrecognized key: "${h}"`);
          t[h] && delete l[h];
        }
        return an(this, "shape", l), l;
      },
      checks: []
    });
    return Wi(e, s);
  }
  function HI(e, t) {
    if (!Mn(t)) throw new Error("Invalid input to extend: expected a plain object");
    const o = e._zod.def.checks;
    if (o && o.length > 0) {
      const s = e._zod.def.shape;
      for (const l in t) if (Object.getOwnPropertyDescriptor(s, l) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    const n = Ui(e._zod.def, {
      get shape() {
        const s = {
          ...e._zod.def.shape,
          ...t
        };
        return an(this, "shape", s), s;
      }
    });
    return Wi(e, n);
  }
  function DI(e, t) {
    if (!Mn(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
    const o = Ui(e._zod.def, {
      get shape() {
        const i = {
          ...e._zod.def.shape,
          ...t
        };
        return an(this, "shape", i), i;
      }
    });
    return Wi(e, o);
  }
  function MI(e, t) {
    const o = Ui(e._zod.def, {
      get shape() {
        const i = {
          ...e._zod.def.shape,
          ...t._zod.def.shape
        };
        return an(this, "shape", i), i;
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: []
    });
    return Wi(e, o);
  }
  function FI(e, t, o) {
    const n = t._zod.def.checks;
    if (n && n.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
    const l = Ui(t._zod.def, {
      get shape() {
        const h = t._zod.def.shape, f = {
          ...h
        };
        if (o) for (const g in o) {
          if (!(g in h)) throw new Error(`Unrecognized key: "${g}"`);
          o[g] && (f[g] = e ? new e({
            type: "optional",
            innerType: h[g]
          }) : h[g]);
        }
        else for (const g in h) f[g] = e ? new e({
          type: "optional",
          innerType: h[g]
        }) : h[g];
        return an(this, "shape", f), f;
      },
      checks: []
    });
    return Wi(t, l);
  }
  function PI(e, t, o) {
    const i = Ui(t._zod.def, {
      get shape() {
        const n = t._zod.def.shape, s = {
          ...n
        };
        if (o) for (const l in o) {
          if (!(l in s)) throw new Error(`Unrecognized key: "${l}"`);
          o[l] && (s[l] = new e({
            type: "nonoptional",
            innerType: n[l]
          }));
        }
        else for (const l in n) s[l] = new e({
          type: "nonoptional",
          innerType: n[l]
        });
        return an(this, "shape", s), s;
      }
    });
    return Wi(t, i);
  }
  function gn(e, t = 0) {
    var _a3;
    if (e.aborted === true) return true;
    for (let o = t; o < e.issues.length; o++) if (((_a3 = e.issues[o]) == null ? void 0 : _a3.continue) !== true) return true;
    return false;
  }
  function mn(e, t) {
    return t.map((o) => {
      var i;
      return (i = o).path ?? (i.path = []), o.path.unshift(e), o;
    });
  }
  function Vr(e) {
    return typeof e == "string" ? e : e == null ? void 0 : e.message;
  }
  function Di(e, t, o) {
    var _a3, _b3, _c2, _d2, _e, _f2;
    const i = {
      ...e,
      path: e.path ?? []
    };
    if (!e.message) {
      const n = Vr((_c2 = (_b3 = (_a3 = e.inst) == null ? void 0 : _a3._zod.def) == null ? void 0 : _b3.error) == null ? void 0 : _c2.call(_b3, e)) ?? Vr((_d2 = t == null ? void 0 : t.error) == null ? void 0 : _d2.call(t, e)) ?? Vr((_e = o.customError) == null ? void 0 : _e.call(o, e)) ?? Vr((_f2 = o.localeError) == null ? void 0 : _f2.call(o, e)) ?? "Invalid input";
      i.message = n;
    }
    return delete i.inst, delete i.continue, (t == null ? void 0 : t.reportInput) || delete i.input, i;
  }
  function Kc(e) {
    return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
  }
  function wr(...e) {
    const [t, o, i] = e;
    return typeof t == "string" ? {
      message: t,
      code: "custom",
      input: o,
      inst: i
    } : {
      ...t
    };
  }
  const Ed = (e, t) => {
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
      value: e._zod,
      enumerable: false
    }), Object.defineProperty(e, "issues", {
      value: t,
      enumerable: false
    }), e.message = JSON.stringify(t, Tc, 2), Object.defineProperty(e, "toString", {
      value: () => e.message,
      enumerable: false
    });
  }, Id = G("$ZodError", Ed), Od = G("$ZodError", Ed, {
    Parent: Error
  });
  function _I(e, t = (o) => o.message) {
    const o = {}, i = [];
    for (const n of e.issues) n.path.length > 0 ? (o[n.path[0]] = o[n.path[0]] || [], o[n.path[0]].push(t(n))) : i.push(t(n));
    return {
      formErrors: i,
      fieldErrors: o
    };
  }
  function UI(e, t = (o) => o.message) {
    const o = {
      _errors: []
    }, i = (n) => {
      for (const s of n.issues) if (s.code === "invalid_union" && s.errors.length) s.errors.map((l) => i({
        issues: l
      }));
      else if (s.code === "invalid_key") i({
        issues: s.issues
      });
      else if (s.code === "invalid_element") i({
        issues: s.issues
      });
      else if (s.path.length === 0) o._errors.push(t(s));
      else {
        let l = o, h = 0;
        for (; h < s.path.length; ) {
          const f = s.path[h];
          h === s.path.length - 1 ? (l[f] = l[f] || {
            _errors: []
          }, l[f]._errors.push(t(s))) : l[f] = l[f] || {
            _errors: []
          }, l = l[f], h++;
        }
      }
    };
    return i(e), o;
  }
  const Jc = (e) => (t, o, i, n) => {
    const s = i ? Object.assign(i, {
      async: false
    }) : {
      async: false
    }, l = t._zod.run({
      value: o,
      issues: []
    }, s);
    if (l instanceof Promise) throw new In();
    if (l.issues.length) {
      const h = new ((n == null ? void 0 : n.Err) ?? e)(l.issues.map((f) => Di(f, s, Hi())));
      throw gd(h, n == null ? void 0 : n.callee), h;
    }
    return l.value;
  }, Xc = (e) => async (t, o, i, n) => {
    const s = i ? Object.assign(i, {
      async: true
    }) : {
      async: true
    };
    let l = t._zod.run({
      value: o,
      issues: []
    }, s);
    if (l instanceof Promise && (l = await l), l.issues.length) {
      const h = new ((n == null ? void 0 : n.Err) ?? e)(l.issues.map((f) => Di(f, s, Hi())));
      throw gd(h, n == null ? void 0 : n.callee), h;
    }
    return l.value;
  }, ta = (e) => (t, o, i) => {
    const n = i ? {
      ...i,
      async: false
    } : {
      async: false
    }, s = t._zod.run({
      value: o,
      issues: []
    }, n);
    if (s instanceof Promise) throw new In();
    return s.issues.length ? {
      success: false,
      error: new (e ?? Id)(s.issues.map((l) => Di(l, n, Hi())))
    } : {
      success: true,
      data: s.value
    };
  }, WI = ta(Od), oa = (e) => async (t, o, i) => {
    const n = i ? Object.assign(i, {
      async: true
    }) : {
      async: true
    };
    let s = t._zod.run({
      value: o,
      issues: []
    }, n);
    return s instanceof Promise && (s = await s), s.issues.length ? {
      success: false,
      error: new e(s.issues.map((l) => Di(l, n, Hi())))
    } : {
      success: true,
      data: s.value
    };
  }, kI = oa(Od), GI = (e) => (t, o, i) => {
    const n = i ? Object.assign(i, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return Jc(e)(t, o, n);
  }, BI = (e) => (t, o, i) => Jc(e)(t, o, i), YI = (e) => async (t, o, i) => {
    const n = i ? Object.assign(i, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return Xc(e)(t, o, n);
  }, jI = (e) => async (t, o, i) => Xc(e)(t, o, i), xI = (e) => (t, o, i) => {
    const n = i ? Object.assign(i, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return ta(e)(t, o, n);
  }, zI = (e) => (t, o, i) => ta(e)(t, o, i), $I = (e) => async (t, o, i) => {
    const n = i ? Object.assign(i, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return oa(e)(t, o, n);
  }, VI = (e) => async (t, o, i) => oa(e)(t, o, i), qI = /^[cC][^\s-]{8,}$/, ZI = /^[0-9a-z]+$/, KI = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, JI = /^[0-9a-vA-V]{20}$/, XI = /^[A-Za-z0-9]{27}$/, QI = /^[a-zA-Z0-9_-]{21}$/, eO = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, tO = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Eu = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, oO = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, iO = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  function nO() {
    return new RegExp(iO, "u");
  }
  const rO = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sO = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, aO = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, cO = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, lO = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Rd = /^[A-Za-z0-9_-]*$/, uO = /^\+[1-9]\d{6,14}$/, Ad = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", hO = new RegExp(`^${Ad}$`);
  function Sd(e) {
    const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  }
  function dO(e) {
    return new RegExp(`^${Sd(e)}$`);
  }
  function fO(e) {
    const t = Sd({
      precision: e.precision
    }), o = [
      "Z"
    ];
    e.local && o.push(""), e.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const i = `${t}(?:${o.join("|")})`;
    return new RegExp(`^${Ad}T(?:${i})$`);
  }
  const pO = (e) => {
    const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  }, TO = /^-?\d+$/, wd = /^-?\d+(?:\.\d+)?$/, gO = /^(?:true|false)$/i, mO = /^[^A-Z]*$/, EO = /^[^a-z]*$/, to = G("$ZodCheck", (e, t) => {
    var o;
    e._zod ?? (e._zod = {}), e._zod.def = t, (o = e._zod).onattach ?? (o.onattach = []);
  }), Nd = {
    number: "number",
    bigint: "bigint",
    object: "date"
  }, yd = G("$ZodCheckLessThan", (e, t) => {
    to.init(e, t);
    const o = Nd[typeof t.value];
    e._zod.onattach.push((i) => {
      const n = i._zod.bag, s = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      t.value < s && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
    }), e._zod.check = (i) => {
      (t.inclusive ? i.value <= t.value : i.value < t.value) || i.issues.push({
        origin: o,
        code: "too_big",
        maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
        input: i.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    };
  }), bd = G("$ZodCheckGreaterThan", (e, t) => {
    to.init(e, t);
    const o = Nd[typeof t.value];
    e._zod.onattach.push((i) => {
      const n = i._zod.bag, s = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      t.value > s && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
    }), e._zod.check = (i) => {
      (t.inclusive ? i.value >= t.value : i.value > t.value) || i.issues.push({
        origin: o,
        code: "too_small",
        minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
        input: i.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    };
  }), IO = G("$ZodCheckMultipleOf", (e, t) => {
    to.init(e, t), e._zod.onattach.push((o) => {
      var i;
      (i = o._zod.bag).multipleOf ?? (i.multipleOf = t.value);
    }), e._zod.check = (o) => {
      if (typeof o.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
      (typeof o.value == "bigint" ? o.value % t.value === BigInt(0) : SI(o.value, t.value) === 0) || o.issues.push({
        origin: typeof o.value,
        code: "not_multiple_of",
        divisor: t.value,
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), OO = G("$ZodCheckNumberFormat", (e, t) => {
    var _a3;
    to.init(e, t), t.format = t.format || "float64";
    const o = (_a3 = t.format) == null ? void 0 : _a3.includes("int"), i = o ? "int" : "number", [n, s] = LI[t.format];
    e._zod.onattach.push((l) => {
      const h = l._zod.bag;
      h.format = t.format, h.minimum = n, h.maximum = s, o && (h.pattern = TO);
    }), e._zod.check = (l) => {
      const h = l.value;
      if (o) {
        if (!Number.isInteger(h)) {
          l.issues.push({
            expected: i,
            format: t.format,
            code: "invalid_type",
            continue: false,
            input: h,
            inst: e
          });
          return;
        }
        if (!Number.isSafeInteger(h)) {
          h > 0 ? l.issues.push({
            input: h,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: e,
            origin: i,
            inclusive: true,
            continue: !t.abort
          }) : l.issues.push({
            input: h,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: e,
            origin: i,
            inclusive: true,
            continue: !t.abort
          });
          return;
        }
      }
      h < n && l.issues.push({
        origin: "number",
        input: h,
        code: "too_small",
        minimum: n,
        inclusive: true,
        inst: e,
        continue: !t.abort
      }), h > s && l.issues.push({
        origin: "number",
        input: h,
        code: "too_big",
        maximum: s,
        inclusive: true,
        inst: e,
        continue: !t.abort
      });
    };
  }), RO = G("$ZodCheckMaxLength", (e, t) => {
    var o;
    to.init(e, t), (o = e._zod.def).when ?? (o.when = (i) => {
      const n = i.value;
      return !qc(n) && n.length !== void 0;
    }), e._zod.onattach.push((i) => {
      const n = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      t.maximum < n && (i._zod.bag.maximum = t.maximum);
    }), e._zod.check = (i) => {
      const n = i.value;
      if (n.length <= t.maximum) return;
      const l = Kc(n);
      i.issues.push({
        origin: l,
        code: "too_big",
        maximum: t.maximum,
        inclusive: true,
        input: n,
        inst: e,
        continue: !t.abort
      });
    };
  }), AO = G("$ZodCheckMinLength", (e, t) => {
    var o;
    to.init(e, t), (o = e._zod.def).when ?? (o.when = (i) => {
      const n = i.value;
      return !qc(n) && n.length !== void 0;
    }), e._zod.onattach.push((i) => {
      const n = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      t.minimum > n && (i._zod.bag.minimum = t.minimum);
    }), e._zod.check = (i) => {
      const n = i.value;
      if (n.length >= t.minimum) return;
      const l = Kc(n);
      i.issues.push({
        origin: l,
        code: "too_small",
        minimum: t.minimum,
        inclusive: true,
        input: n,
        inst: e,
        continue: !t.abort
      });
    };
  }), SO = G("$ZodCheckLengthEquals", (e, t) => {
    var o;
    to.init(e, t), (o = e._zod.def).when ?? (o.when = (i) => {
      const n = i.value;
      return !qc(n) && n.length !== void 0;
    }), e._zod.onattach.push((i) => {
      const n = i._zod.bag;
      n.minimum = t.length, n.maximum = t.length, n.length = t.length;
    }), e._zod.check = (i) => {
      const n = i.value, s = n.length;
      if (s === t.length) return;
      const l = Kc(n), h = s > t.length;
      i.issues.push({
        origin: l,
        ...h ? {
          code: "too_big",
          maximum: t.length
        } : {
          code: "too_small",
          minimum: t.length
        },
        inclusive: true,
        exact: true,
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), ia = G("$ZodCheckStringFormat", (e, t) => {
    var o, i;
    to.init(e, t), e._zod.onattach.push((n) => {
      const s = n._zod.bag;
      s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
    }), t.pattern ? (o = e._zod).check ?? (o.check = (n) => {
      t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: t.format,
        input: n.value,
        ...t.pattern ? {
          pattern: t.pattern.toString()
        } : {},
        inst: e,
        continue: !t.abort
      });
    }) : (i = e._zod).check ?? (i.check = () => {
    });
  }), wO = G("$ZodCheckRegex", (e, t) => {
    ia.init(e, t), e._zod.check = (o) => {
      t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: o.value,
        pattern: t.pattern.toString(),
        inst: e,
        continue: !t.abort
      });
    };
  }), NO = G("$ZodCheckLowerCase", (e, t) => {
    t.pattern ?? (t.pattern = mO), ia.init(e, t);
  }), yO = G("$ZodCheckUpperCase", (e, t) => {
    t.pattern ?? (t.pattern = EO), ia.init(e, t);
  }), bO = G("$ZodCheckIncludes", (e, t) => {
    to.init(e, t);
    const o = ea(t.includes), i = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${o}` : o);
    t.pattern = i, e._zod.onattach.push((n) => {
      const s = n._zod.bag;
      s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(i);
    }), e._zod.check = (n) => {
      n.value.includes(t.includes, t.position) || n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: t.includes,
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), LO = G("$ZodCheckStartsWith", (e, t) => {
    to.init(e, t);
    const o = new RegExp(`^${ea(t.prefix)}.*`);
    t.pattern ?? (t.pattern = o), e._zod.onattach.push((i) => {
      const n = i._zod.bag;
      n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(o);
    }), e._zod.check = (i) => {
      i.value.startsWith(t.prefix) || i.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: t.prefix,
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), vO = G("$ZodCheckEndsWith", (e, t) => {
    to.init(e, t);
    const o = new RegExp(`.*${ea(t.suffix)}$`);
    t.pattern ?? (t.pattern = o), e._zod.onattach.push((i) => {
      const n = i._zod.bag;
      n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(o);
    }), e._zod.check = (i) => {
      i.value.endsWith(t.suffix) || i.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: t.suffix,
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), CO = G("$ZodCheckOverwrite", (e, t) => {
    to.init(e, t), e._zod.check = (o) => {
      o.value = t.tx(o.value);
    };
  });
  class HO {
    constructor(t = []) {
      this.content = [], this.indent = 0, this && (this.args = t);
    }
    indented(t) {
      this.indent += 1, t(this), this.indent -= 1;
    }
    write(t) {
      if (typeof t == "function") {
        t(this, {
          execution: "sync"
        }), t(this, {
          execution: "async"
        });
        return;
      }
      const i = t.split(`
`).filter((l) => l), n = Math.min(...i.map((l) => l.length - l.trimStart().length)), s = i.map((l) => l.slice(n)).map((l) => " ".repeat(this.indent * 2) + l);
      for (const l of s) this.content.push(l);
    }
    compile() {
      const t = Function, o = this == null ? void 0 : this.args, n = [
        ...((this == null ? void 0 : this.content) ?? [
          ""
        ]).map((s) => `  ${s}`)
      ];
      return new t(...o, n.join(`
`));
    }
  }
  const DO = {
    major: 4,
    minor: 3,
    patch: 5
  }, pt = G("$ZodType", (e, t) => {
    var _a3;
    var o;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = DO;
    const i = [
      ...e._zod.def.checks ?? []
    ];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (const n of i) for (const s of n._zod.onattach) s(e);
    if (i.length === 0) (o = e._zod).deferred ?? (o.deferred = []), (_a3 = e._zod.deferred) == null ? void 0 : _a3.push(() => {
      e._zod.run = e._zod.parse;
    });
    else {
      const n = (l, h, f) => {
        let g = gn(l), p;
        for (const R of h) {
          if (R._zod.def.when) {
            if (!R._zod.def.when(l)) continue;
          } else if (g) continue;
          const y = l.issues.length, N = R._zod.check(l);
          if (N instanceof Promise && (f == null ? void 0 : f.async) === false) throw new In();
          if (p || N instanceof Promise) p = (p ?? Promise.resolve()).then(async () => {
            await N, l.issues.length !== y && (g || (g = gn(l, y)));
          });
          else {
            if (l.issues.length === y) continue;
            g || (g = gn(l, y));
          }
        }
        return p ? p.then(() => l) : l;
      }, s = (l, h, f) => {
        if (gn(l)) return l.aborted = true, l;
        const g = n(h, i, f);
        if (g instanceof Promise) {
          if (f.async === false) throw new In();
          return g.then((p) => e._zod.parse(p, f));
        }
        return e._zod.parse(g, f);
      };
      e._zod.run = (l, h) => {
        if (h.skipChecks) return e._zod.parse(l, h);
        if (h.direction === "backward") {
          const g = e._zod.parse({
            value: l.value,
            issues: []
          }, {
            ...h,
            skipChecks: true
          });
          return g instanceof Promise ? g.then((p) => s(p, l, h)) : s(g, l, h);
        }
        const f = e._zod.parse(l, h);
        if (f instanceof Promise) {
          if (h.async === false) throw new In();
          return f.then((g) => n(g, i, h));
        }
        return n(f, i, h);
      };
    }
    $e(e, "~standard", () => ({
      validate: (n) => {
        var _a4;
        try {
          const s = WI(e, n);
          return s.success ? {
            value: s.data
          } : {
            issues: (_a4 = s.error) == null ? void 0 : _a4.issues
          };
        } catch {
          return kI(e, n).then((l) => {
            var _a5;
            return l.success ? {
              value: l.data
            } : {
              issues: (_a5 = l.error) == null ? void 0 : _a5.issues
            };
          });
        }
      },
      vendor: "zod",
      version: 1
    }));
  }), Qc = G("$ZodString", (e, t) => {
    var _a3;
    pt.init(e, t), e._zod.pattern = [
      ...((_a3 = e == null ? void 0 : e._zod.bag) == null ? void 0 : _a3.patterns) ?? []
    ].pop() ?? pO(e._zod.bag), e._zod.parse = (o, i) => {
      if (t.coerce) try {
        o.value = String(o.value);
      } catch {
      }
      return typeof o.value == "string" || o.issues.push({
        expected: "string",
        code: "invalid_type",
        input: o.value,
        inst: e
      }), o;
    };
  }), ut = G("$ZodStringFormat", (e, t) => {
    ia.init(e, t), Qc.init(e, t);
  }), MO = G("$ZodGUID", (e, t) => {
    t.pattern ?? (t.pattern = tO), ut.init(e, t);
  }), FO = G("$ZodUUID", (e, t) => {
    if (t.version) {
      const i = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }[t.version];
      if (i === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = Eu(i));
    } else t.pattern ?? (t.pattern = Eu());
    ut.init(e, t);
  }), PO = G("$ZodEmail", (e, t) => {
    t.pattern ?? (t.pattern = oO), ut.init(e, t);
  }), _O = G("$ZodURL", (e, t) => {
    ut.init(e, t), e._zod.check = (o) => {
      try {
        const i = o.value.trim(), n = new URL(i);
        t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || o.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: t.hostname.source,
          input: o.value,
          inst: e,
          continue: !t.abort
        })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || o.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: t.protocol.source,
          input: o.value,
          inst: e,
          continue: !t.abort
        })), t.normalize ? o.value = n.href : o.value = i;
        return;
      } catch {
        o.issues.push({
          code: "invalid_format",
          format: "url",
          input: o.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  }), UO = G("$ZodEmoji", (e, t) => {
    t.pattern ?? (t.pattern = nO()), ut.init(e, t);
  }), WO = G("$ZodNanoID", (e, t) => {
    t.pattern ?? (t.pattern = QI), ut.init(e, t);
  }), kO = G("$ZodCUID", (e, t) => {
    t.pattern ?? (t.pattern = qI), ut.init(e, t);
  }), GO = G("$ZodCUID2", (e, t) => {
    t.pattern ?? (t.pattern = ZI), ut.init(e, t);
  }), BO = G("$ZodULID", (e, t) => {
    t.pattern ?? (t.pattern = KI), ut.init(e, t);
  }), YO = G("$ZodXID", (e, t) => {
    t.pattern ?? (t.pattern = JI), ut.init(e, t);
  }), jO = G("$ZodKSUID", (e, t) => {
    t.pattern ?? (t.pattern = XI), ut.init(e, t);
  }), xO = G("$ZodISODateTime", (e, t) => {
    t.pattern ?? (t.pattern = fO(t)), ut.init(e, t);
  }), zO = G("$ZodISODate", (e, t) => {
    t.pattern ?? (t.pattern = hO), ut.init(e, t);
  }), $O = G("$ZodISOTime", (e, t) => {
    t.pattern ?? (t.pattern = dO(t)), ut.init(e, t);
  }), VO = G("$ZodISODuration", (e, t) => {
    t.pattern ?? (t.pattern = eO), ut.init(e, t);
  }), qO = G("$ZodIPv4", (e, t) => {
    t.pattern ?? (t.pattern = rO), ut.init(e, t), e._zod.bag.format = "ipv4";
  }), ZO = G("$ZodIPv6", (e, t) => {
    t.pattern ?? (t.pattern = sO), ut.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (o) => {
      try {
        new URL(`http://[${o.value}]`);
      } catch {
        o.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: o.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  }), KO = G("$ZodCIDRv4", (e, t) => {
    t.pattern ?? (t.pattern = aO), ut.init(e, t);
  }), JO = G("$ZodCIDRv6", (e, t) => {
    t.pattern ?? (t.pattern = cO), ut.init(e, t), e._zod.check = (o) => {
      const i = o.value.split("/");
      try {
        if (i.length !== 2) throw new Error();
        const [n, s] = i;
        if (!s) throw new Error();
        const l = Number(s);
        if (`${l}` !== s) throw new Error();
        if (l < 0 || l > 128) throw new Error();
        new URL(`http://[${n}]`);
      } catch {
        o.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: o.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  });
  function Ld(e) {
    if (e === "") return true;
    if (e.length % 4 !== 0) return false;
    try {
      return atob(e), true;
    } catch {
      return false;
    }
  }
  const XO = G("$ZodBase64", (e, t) => {
    t.pattern ?? (t.pattern = lO), ut.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (o) => {
      Ld(o.value) || o.issues.push({
        code: "invalid_format",
        format: "base64",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  });
  function QO(e) {
    if (!Rd.test(e)) return false;
    const t = e.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), o = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
    return Ld(o);
  }
  const eR = G("$ZodBase64URL", (e, t) => {
    t.pattern ?? (t.pattern = Rd), ut.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (o) => {
      QO(o.value) || o.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), tR = G("$ZodE164", (e, t) => {
    t.pattern ?? (t.pattern = uO), ut.init(e, t);
  });
  function oR(e, t = null) {
    try {
      const o = e.split(".");
      if (o.length !== 3) return false;
      const [i] = o;
      if (!i) return false;
      const n = JSON.parse(atob(i));
      return !("typ" in n && (n == null ? void 0 : n.typ) !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
    } catch {
      return false;
    }
  }
  const iR = G("$ZodJWT", (e, t) => {
    ut.init(e, t), e._zod.check = (o) => {
      oR(o.value, t.alg) || o.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), vd = G("$ZodNumber", (e, t) => {
    pt.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? wd, e._zod.parse = (o, i) => {
      if (t.coerce) try {
        o.value = Number(o.value);
      } catch {
      }
      const n = o.value;
      if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n)) return o;
      const s = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
      return o.issues.push({
        expected: "number",
        code: "invalid_type",
        input: n,
        inst: e,
        ...s ? {
          received: s
        } : {}
      }), o;
    };
  }), nR = G("$ZodNumberFormat", (e, t) => {
    OO.init(e, t), vd.init(e, t);
  }), rR = G("$ZodBoolean", (e, t) => {
    pt.init(e, t), e._zod.pattern = gO, e._zod.parse = (o, i) => {
      if (t.coerce) try {
        o.value = !!o.value;
      } catch {
      }
      const n = o.value;
      return typeof n == "boolean" || o.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: n,
        inst: e
      }), o;
    };
  }), sR = G("$ZodUnknown", (e, t) => {
    pt.init(e, t), e._zod.parse = (o) => o;
  }), aR = G("$ZodNever", (e, t) => {
    pt.init(e, t), e._zod.parse = (o, i) => (o.issues.push({
      expected: "never",
      code: "invalid_type",
      input: o.value,
      inst: e
    }), o);
  });
  function Iu(e, t, o) {
    e.issues.length && t.issues.push(...mn(o, e.issues)), t.value[o] = e.value;
  }
  const cR = G("$ZodArray", (e, t) => {
    pt.init(e, t), e._zod.parse = (o, i) => {
      const n = o.value;
      if (!Array.isArray(n)) return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), o;
      o.value = Array(n.length);
      const s = [];
      for (let l = 0; l < n.length; l++) {
        const h = n[l], f = t.element._zod.run({
          value: h,
          issues: []
        }, i);
        f instanceof Promise ? s.push(f.then((g) => Iu(g, o, l))) : Iu(f, o, l);
      }
      return s.length ? Promise.all(s).then(() => o) : o;
    };
  });
  function As(e, t, o, i, n) {
    if (e.issues.length) {
      if (n && !(o in i)) return;
      t.issues.push(...mn(o, e.issues));
    }
    e.value === void 0 ? o in i && (t.value[o] = void 0) : t.value[o] = e.value;
  }
  function Cd(e) {
    var _a3, _b3, _c2, _d2;
    const t = Object.keys(e.shape);
    for (const i of t) if (!((_d2 = (_c2 = (_b3 = (_a3 = e.shape) == null ? void 0 : _a3[i]) == null ? void 0 : _b3._zod) == null ? void 0 : _c2.traits) == null ? void 0 : _d2.has("$ZodType"))) throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
    const o = bI(e.shape);
    return {
      ...e,
      keys: t,
      keySet: new Set(t),
      numKeys: t.length,
      optionalKeys: new Set(o)
    };
  }
  function Hd(e, t, o, i, n, s) {
    const l = [], h = n.keySet, f = n.catchall._zod, g = f.def.type, p = f.optout === "optional";
    for (const R in t) {
      if (h.has(R)) continue;
      if (g === "never") {
        l.push(R);
        continue;
      }
      const y = f.run({
        value: t[R],
        issues: []
      }, i);
      y instanceof Promise ? e.push(y.then((N) => As(N, o, R, t, p))) : As(y, o, R, t, p);
    }
    return l.length && o.issues.push({
      code: "unrecognized_keys",
      keys: l,
      input: t,
      inst: s
    }), e.length ? Promise.all(e).then(() => o) : o;
  }
  const lR = G("$ZodObject", (e, t) => {
    var _a3;
    if (pt.init(e, t), !((_a3 = Object.getOwnPropertyDescriptor(t, "shape")) == null ? void 0 : _a3.get)) {
      const h = t.shape;
      Object.defineProperty(t, "shape", {
        get: () => {
          const f = {
            ...h
          };
          return Object.defineProperty(t, "shape", {
            value: f
          }), f;
        }
      });
    }
    const i = Vc(() => Cd(t));
    $e(e._zod, "propValues", () => {
      const h = t.shape, f = {};
      for (const g in h) {
        const p = h[g]._zod;
        if (p.values) {
          f[g] ?? (f[g] = /* @__PURE__ */ new Set());
          for (const R of p.values) f[g].add(R);
        }
      }
      return f;
    });
    const n = Rs, s = t.catchall;
    let l;
    e._zod.parse = (h, f) => {
      l ?? (l = i.value);
      const g = h.value;
      if (!n(g)) return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: e
      }), h;
      h.value = {};
      const p = [], R = l.shape;
      for (const y of l.keys) {
        const N = R[y], M = N._zod.optout === "optional", H = N._zod.run({
          value: g[y],
          issues: []
        }, f);
        H instanceof Promise ? p.push(H.then((ne) => As(ne, h, y, g, M))) : As(H, h, y, g, M);
      }
      return s ? Hd(p, g, h, f, i.value, e) : p.length ? Promise.all(p).then(() => h) : h;
    };
  }), uR = G("$ZodObjectJIT", (e, t) => {
    lR.init(e, t);
    const o = e._zod.parse, i = Vc(() => Cd(t)), n = (y) => {
      var _a3, _b3;
      const N = new HO([
        "shape",
        "payload",
        "ctx"
      ]), M = i.value, H = (j) => {
        const _ = mu(j);
        return `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`;
      };
      N.write("const input = payload.value;");
      const ne = /* @__PURE__ */ Object.create(null);
      let ee = 0;
      for (const j of M.keys) ne[j] = `key_${ee++}`;
      N.write("const newResult = {};");
      for (const j of M.keys) {
        const _ = ne[j], re = mu(j), se = ((_b3 = (_a3 = y[j]) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout) === "optional";
        N.write(`const ${_} = ${H(j)};`), se ? N.write(`
        if (${_}.issues.length) {
          if (${re} in input) {
            payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${re}, ...iss.path] : [${re}]
            })));
          }
        }
        
        if (${_}.value === undefined) {
          if (${re} in input) {
            newResult[${re}] = undefined;
          }
        } else {
          newResult[${re}] = ${_}.value;
        }
        
      `) : N.write(`
        if (${_}.issues.length) {
          payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${re}, ...iss.path] : [${re}]
          })));
        }
        
        if (${_}.value === undefined) {
          if (${re} in input) {
            newResult[${re}] = undefined;
          }
        } else {
          newResult[${re}] = ${_}.value;
        }
        
      `);
      }
      N.write("payload.value = newResult;"), N.write("return payload;");
      const q = N.compile();
      return (j, _) => q(y, j, _);
    };
    let s;
    const l = Rs, h = !pd.jitless, g = h && NI.value, p = t.catchall;
    let R;
    e._zod.parse = (y, N) => {
      R ?? (R = i.value);
      const M = y.value;
      return l(M) ? h && g && (N == null ? void 0 : N.async) === false && N.jitless !== true ? (s || (s = n(t.shape)), y = s(y, N), p ? Hd([], M, y, N, R, e) : y) : o(y, N) : (y.issues.push({
        expected: "object",
        code: "invalid_type",
        input: M,
        inst: e
      }), y);
    };
  });
  function Ou(e, t, o, i) {
    for (const s of e) if (s.issues.length === 0) return t.value = s.value, t;
    const n = e.filter((s) => !gn(s));
    return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: o,
      errors: e.map((s) => s.issues.map((l) => Di(l, i, Hi())))
    }), t);
  }
  const hR = G("$ZodUnion", (e, t) => {
    pt.init(e, t), $e(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), $e(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), $e(e._zod, "values", () => {
      if (t.options.every((n) => n._zod.values)) return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
    }), $e(e._zod, "pattern", () => {
      if (t.options.every((n) => n._zod.pattern)) {
        const n = t.options.map((s) => s._zod.pattern);
        return new RegExp(`^(${n.map((s) => Zc(s.source)).join("|")})$`);
      }
    });
    const o = t.options.length === 1, i = t.options[0]._zod.run;
    e._zod.parse = (n, s) => {
      if (o) return i(n, s);
      let l = false;
      const h = [];
      for (const f of t.options) {
        const g = f._zod.run({
          value: n.value,
          issues: []
        }, s);
        if (g instanceof Promise) h.push(g), l = true;
        else {
          if (g.issues.length === 0) return g;
          h.push(g);
        }
      }
      return l ? Promise.all(h).then((f) => Ou(f, n, e, s)) : Ou(h, n, e, s);
    };
  }), dR = G("$ZodIntersection", (e, t) => {
    pt.init(e, t), e._zod.parse = (o, i) => {
      const n = o.value, s = t.left._zod.run({
        value: n,
        issues: []
      }, i), l = t.right._zod.run({
        value: n,
        issues: []
      }, i);
      return s instanceof Promise || l instanceof Promise ? Promise.all([
        s,
        l
      ]).then(([f, g]) => Ru(o, f, g)) : Ru(o, s, l);
    };
  });
  function gc(e, t) {
    if (e === t) return {
      valid: true,
      data: e
    };
    if (e instanceof Date && t instanceof Date && +e == +t) return {
      valid: true,
      data: e
    };
    if (Mn(e) && Mn(t)) {
      const o = Object.keys(t), i = Object.keys(e).filter((s) => o.indexOf(s) !== -1), n = {
        ...e,
        ...t
      };
      for (const s of i) {
        const l = gc(e[s], t[s]);
        if (!l.valid) return {
          valid: false,
          mergeErrorPath: [
            s,
            ...l.mergeErrorPath
          ]
        };
        n[s] = l.data;
      }
      return {
        valid: true,
        data: n
      };
    }
    if (Array.isArray(e) && Array.isArray(t)) {
      if (e.length !== t.length) return {
        valid: false,
        mergeErrorPath: []
      };
      const o = [];
      for (let i = 0; i < e.length; i++) {
        const n = e[i], s = t[i], l = gc(n, s);
        if (!l.valid) return {
          valid: false,
          mergeErrorPath: [
            i,
            ...l.mergeErrorPath
          ]
        };
        o.push(l.data);
      }
      return {
        valid: true,
        data: o
      };
    }
    return {
      valid: false,
      mergeErrorPath: []
    };
  }
  function Ru(e, t, o) {
    const i = /* @__PURE__ */ new Map();
    let n;
    for (const h of t.issues) if (h.code === "unrecognized_keys") {
      n ?? (n = h);
      for (const f of h.keys) i.has(f) || i.set(f, {}), i.get(f).l = true;
    } else e.issues.push(h);
    for (const h of o.issues) if (h.code === "unrecognized_keys") for (const f of h.keys) i.has(f) || i.set(f, {}), i.get(f).r = true;
    else e.issues.push(h);
    const s = [
      ...i
    ].filter(([, h]) => h.l && h.r).map(([h]) => h);
    if (s.length && n && e.issues.push({
      ...n,
      keys: s
    }), gn(e)) return e;
    const l = gc(t.value, o.value);
    if (!l.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
    return e.value = l.data, e;
  }
  const fR = G("$ZodRecord", (e, t) => {
    pt.init(e, t), e._zod.parse = (o, i) => {
      const n = o.value;
      if (!Mn(n)) return o.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), o;
      const s = [], l = t.keyType._zod.values;
      if (l) {
        o.value = {};
        const h = /* @__PURE__ */ new Set();
        for (const g of l) if (typeof g == "string" || typeof g == "number" || typeof g == "symbol") {
          h.add(typeof g == "number" ? g.toString() : g);
          const p = t.valueType._zod.run({
            value: n[g],
            issues: []
          }, i);
          p instanceof Promise ? s.push(p.then((R) => {
            R.issues.length && o.issues.push(...mn(g, R.issues)), o.value[g] = R.value;
          })) : (p.issues.length && o.issues.push(...mn(g, p.issues)), o.value[g] = p.value);
        }
        let f;
        for (const g in n) h.has(g) || (f = f ?? [], f.push(g));
        f && f.length > 0 && o.issues.push({
          code: "unrecognized_keys",
          input: n,
          inst: e,
          keys: f
        });
      } else {
        o.value = {};
        for (const h of Reflect.ownKeys(n)) {
          if (h === "__proto__") continue;
          let f = t.keyType._zod.run({
            value: h,
            issues: []
          }, i);
          if (f instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (typeof h == "string" && wd.test(h) && f.issues.length && f.issues.some((R) => R.code === "invalid_type" && R.expected === "number")) {
            const R = t.keyType._zod.run({
              value: Number(h),
              issues: []
            }, i);
            if (R instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            R.issues.length === 0 && (f = R);
          }
          if (f.issues.length) {
            t.mode === "loose" ? o.value[h] = n[h] : o.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: f.issues.map((R) => Di(R, i, Hi())),
              input: h,
              path: [
                h
              ],
              inst: e
            });
            continue;
          }
          const p = t.valueType._zod.run({
            value: n[h],
            issues: []
          }, i);
          p instanceof Promise ? s.push(p.then((R) => {
            R.issues.length && o.issues.push(...mn(h, R.issues)), o.value[f.value] = R.value;
          })) : (p.issues.length && o.issues.push(...mn(h, p.issues)), o.value[f.value] = p.value);
        }
      }
      return s.length ? Promise.all(s).then(() => o) : o;
    };
  }), pR = G("$ZodEnum", (e, t) => {
    pt.init(e, t);
    const o = Td(t.entries), i = new Set(o);
    e._zod.values = i, e._zod.pattern = new RegExp(`^(${o.filter((n) => yI.has(typeof n)).map((n) => typeof n == "string" ? ea(n) : n.toString()).join("|")})$`), e._zod.parse = (n, s) => {
      const l = n.value;
      return i.has(l) || n.issues.push({
        code: "invalid_value",
        values: o,
        input: l,
        inst: e
      }), n;
    };
  }), TR = G("$ZodTransform", (e, t) => {
    pt.init(e, t), e._zod.parse = (o, i) => {
      if (i.direction === "backward") throw new fd(e.constructor.name);
      const n = t.transform(o.value, o);
      if (i.async) return (n instanceof Promise ? n : Promise.resolve(n)).then((l) => (o.value = l, o));
      if (n instanceof Promise) throw new In();
      return o.value = n, o;
    };
  });
  function Au(e, t) {
    return e.issues.length && t === void 0 ? {
      issues: [],
      value: void 0
    } : e;
  }
  const Dd = G("$ZodOptional", (e, t) => {
    pt.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", $e(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...t.innerType._zod.values,
      void 0
    ]) : void 0), $e(e._zod, "pattern", () => {
      const o = t.innerType._zod.pattern;
      return o ? new RegExp(`^(${Zc(o.source)})?$`) : void 0;
    }), e._zod.parse = (o, i) => {
      if (t.innerType._zod.optin === "optional") {
        const n = t.innerType._zod.run(o, i);
        return n instanceof Promise ? n.then((s) => Au(s, o.value)) : Au(n, o.value);
      }
      return o.value === void 0 ? o : t.innerType._zod.run(o, i);
    };
  }), gR = G("$ZodExactOptional", (e, t) => {
    Dd.init(e, t), $e(e._zod, "values", () => t.innerType._zod.values), $e(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (o, i) => t.innerType._zod.run(o, i);
  }), mR = G("$ZodNullable", (e, t) => {
    pt.init(e, t), $e(e._zod, "optin", () => t.innerType._zod.optin), $e(e._zod, "optout", () => t.innerType._zod.optout), $e(e._zod, "pattern", () => {
      const o = t.innerType._zod.pattern;
      return o ? new RegExp(`^(${Zc(o.source)}|null)$`) : void 0;
    }), $e(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...t.innerType._zod.values,
      null
    ]) : void 0), e._zod.parse = (o, i) => o.value === null ? o : t.innerType._zod.run(o, i);
  }), ER = G("$ZodDefault", (e, t) => {
    pt.init(e, t), e._zod.optin = "optional", $e(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, i) => {
      if (i.direction === "backward") return t.innerType._zod.run(o, i);
      if (o.value === void 0) return o.value = t.defaultValue, o;
      const n = t.innerType._zod.run(o, i);
      return n instanceof Promise ? n.then((s) => Su(s, t)) : Su(n, t);
    };
  });
  function Su(e, t) {
    return e.value === void 0 && (e.value = t.defaultValue), e;
  }
  const IR = G("$ZodPrefault", (e, t) => {
    pt.init(e, t), e._zod.optin = "optional", $e(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, i) => (i.direction === "backward" || o.value === void 0 && (o.value = t.defaultValue), t.innerType._zod.run(o, i));
  }), OR = G("$ZodNonOptional", (e, t) => {
    pt.init(e, t), $e(e._zod, "values", () => {
      const o = t.innerType._zod.values;
      return o ? new Set([
        ...o
      ].filter((i) => i !== void 0)) : void 0;
    }), e._zod.parse = (o, i) => {
      const n = t.innerType._zod.run(o, i);
      return n instanceof Promise ? n.then((s) => wu(s, e)) : wu(n, e);
    };
  });
  function wu(e, t) {
    return !e.issues.length && e.value === void 0 && e.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: e.value,
      inst: t
    }), e;
  }
  const RR = G("$ZodCatch", (e, t) => {
    pt.init(e, t), $e(e._zod, "optin", () => t.innerType._zod.optin), $e(e._zod, "optout", () => t.innerType._zod.optout), $e(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, i) => {
      if (i.direction === "backward") return t.innerType._zod.run(o, i);
      const n = t.innerType._zod.run(o, i);
      return n instanceof Promise ? n.then((s) => (o.value = s.value, s.issues.length && (o.value = t.catchValue({
        ...o,
        error: {
          issues: s.issues.map((l) => Di(l, i, Hi()))
        },
        input: o.value
      }), o.issues = []), o)) : (o.value = n.value, n.issues.length && (o.value = t.catchValue({
        ...o,
        error: {
          issues: n.issues.map((s) => Di(s, i, Hi()))
        },
        input: o.value
      }), o.issues = []), o);
    };
  }), AR = G("$ZodPipe", (e, t) => {
    pt.init(e, t), $e(e._zod, "values", () => t.in._zod.values), $e(e._zod, "optin", () => t.in._zod.optin), $e(e._zod, "optout", () => t.out._zod.optout), $e(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (o, i) => {
      if (i.direction === "backward") {
        const s = t.out._zod.run(o, i);
        return s instanceof Promise ? s.then((l) => qr(l, t.in, i)) : qr(s, t.in, i);
      }
      const n = t.in._zod.run(o, i);
      return n instanceof Promise ? n.then((s) => qr(s, t.out, i)) : qr(n, t.out, i);
    };
  });
  function qr(e, t, o) {
    return e.issues.length ? (e.aborted = true, e) : t._zod.run({
      value: e.value,
      issues: e.issues
    }, o);
  }
  const SR = G("$ZodReadonly", (e, t) => {
    pt.init(e, t), $e(e._zod, "propValues", () => t.innerType._zod.propValues), $e(e._zod, "values", () => t.innerType._zod.values), $e(e._zod, "optin", () => {
      var _a3, _b3;
      return (_b3 = (_a3 = t.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optin;
    }), $e(e._zod, "optout", () => {
      var _a3, _b3;
      return (_b3 = (_a3 = t.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout;
    }), e._zod.parse = (o, i) => {
      if (i.direction === "backward") return t.innerType._zod.run(o, i);
      const n = t.innerType._zod.run(o, i);
      return n instanceof Promise ? n.then(Nu) : Nu(n);
    };
  });
  function Nu(e) {
    return e.value = Object.freeze(e.value), e;
  }
  const wR = G("$ZodCustom", (e, t) => {
    to.init(e, t), pt.init(e, t), e._zod.parse = (o, i) => o, e._zod.check = (o) => {
      const i = o.value, n = t.fn(i);
      if (n instanceof Promise) return n.then((s) => yu(s, o, i, e));
      yu(n, o, i, e);
    };
  });
  function yu(e, t, o, i) {
    if (!e) {
      const n = {
        code: "custom",
        input: o,
        inst: i,
        path: [
          ...i._zod.def.path ?? []
        ],
        continue: !i._zod.def.abort
      };
      i._zod.def.params && (n.params = i._zod.def.params), t.issues.push(wr(n));
    }
  }
  var bu;
  class NR {
    constructor() {
      this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
    }
    add(t, ...o) {
      const i = o[0];
      return this._map.set(t, i), i && typeof i == "object" && "id" in i && this._idmap.set(i.id, t), this;
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
        const i = {
          ...this.get(o) ?? {}
        };
        delete i.id;
        const n = {
          ...i,
          ...this._map.get(t)
        };
        return Object.keys(n).length ? n : void 0;
      }
      return this._map.get(t);
    }
    has(t) {
      return this._map.has(t);
    }
  }
  function yR() {
    return new NR();
  }
  (bu = globalThis).__zod_globalRegistry ?? (bu.__zod_globalRegistry = yR());
  const ir = globalThis.__zod_globalRegistry;
  function bR(e, t) {
    return new e({
      type: "string",
      ...Re(t)
    });
  }
  function LR(e, t) {
    return new e({
      type: "string",
      format: "email",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function Lu(e, t) {
    return new e({
      type: "string",
      format: "guid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function vR(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function CR(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v4",
      ...Re(t)
    });
  }
  function HR(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v6",
      ...Re(t)
    });
  }
  function DR(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v7",
      ...Re(t)
    });
  }
  function MR(e, t) {
    return new e({
      type: "string",
      format: "url",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function FR(e, t) {
    return new e({
      type: "string",
      format: "emoji",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function PR(e, t) {
    return new e({
      type: "string",
      format: "nanoid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function _R(e, t) {
    return new e({
      type: "string",
      format: "cuid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function UR(e, t) {
    return new e({
      type: "string",
      format: "cuid2",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function WR(e, t) {
    return new e({
      type: "string",
      format: "ulid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function kR(e, t) {
    return new e({
      type: "string",
      format: "xid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function GR(e, t) {
    return new e({
      type: "string",
      format: "ksuid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function BR(e, t) {
    return new e({
      type: "string",
      format: "ipv4",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function YR(e, t) {
    return new e({
      type: "string",
      format: "ipv6",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function jR(e, t) {
    return new e({
      type: "string",
      format: "cidrv4",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function xR(e, t) {
    return new e({
      type: "string",
      format: "cidrv6",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function zR(e, t) {
    return new e({
      type: "string",
      format: "base64",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function $R(e, t) {
    return new e({
      type: "string",
      format: "base64url",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function VR(e, t) {
    return new e({
      type: "string",
      format: "e164",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function qR(e, t) {
    return new e({
      type: "string",
      format: "jwt",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function ZR(e, t) {
    return new e({
      type: "string",
      format: "datetime",
      check: "string_format",
      offset: false,
      local: false,
      precision: null,
      ...Re(t)
    });
  }
  function KR(e, t) {
    return new e({
      type: "string",
      format: "date",
      check: "string_format",
      ...Re(t)
    });
  }
  function JR(e, t) {
    return new e({
      type: "string",
      format: "time",
      check: "string_format",
      precision: null,
      ...Re(t)
    });
  }
  function XR(e, t) {
    return new e({
      type: "string",
      format: "duration",
      check: "string_format",
      ...Re(t)
    });
  }
  function QR(e, t) {
    return new e({
      type: "number",
      checks: [],
      ...Re(t)
    });
  }
  function eA(e, t) {
    return new e({
      type: "number",
      check: "number_format",
      abort: false,
      format: "safeint",
      ...Re(t)
    });
  }
  function tA(e, t) {
    return new e({
      type: "boolean",
      ...Re(t)
    });
  }
  function oA(e) {
    return new e({
      type: "unknown"
    });
  }
  function iA(e, t) {
    return new e({
      type: "never",
      ...Re(t)
    });
  }
  function vu(e, t) {
    return new yd({
      check: "less_than",
      ...Re(t),
      value: e,
      inclusive: false
    });
  }
  function _a(e, t) {
    return new yd({
      check: "less_than",
      ...Re(t),
      value: e,
      inclusive: true
    });
  }
  function Cu(e, t) {
    return new bd({
      check: "greater_than",
      ...Re(t),
      value: e,
      inclusive: false
    });
  }
  function Ua(e, t) {
    return new bd({
      check: "greater_than",
      ...Re(t),
      value: e,
      inclusive: true
    });
  }
  function Hu(e, t) {
    return new IO({
      check: "multiple_of",
      ...Re(t),
      value: e
    });
  }
  function Md(e, t) {
    return new RO({
      check: "max_length",
      ...Re(t),
      maximum: e
    });
  }
  function Ss(e, t) {
    return new AO({
      check: "min_length",
      ...Re(t),
      minimum: e
    });
  }
  function Fd(e, t) {
    return new SO({
      check: "length_equals",
      ...Re(t),
      length: e
    });
  }
  function nA(e, t) {
    return new wO({
      check: "string_format",
      format: "regex",
      ...Re(t),
      pattern: e
    });
  }
  function rA(e) {
    return new NO({
      check: "string_format",
      format: "lowercase",
      ...Re(e)
    });
  }
  function sA(e) {
    return new yO({
      check: "string_format",
      format: "uppercase",
      ...Re(e)
    });
  }
  function aA(e, t) {
    return new bO({
      check: "string_format",
      format: "includes",
      ...Re(t),
      includes: e
    });
  }
  function cA(e, t) {
    return new LO({
      check: "string_format",
      format: "starts_with",
      ...Re(t),
      prefix: e
    });
  }
  function lA(e, t) {
    return new vO({
      check: "string_format",
      format: "ends_with",
      ...Re(t),
      suffix: e
    });
  }
  function xn(e) {
    return new CO({
      check: "overwrite",
      tx: e
    });
  }
  function uA(e) {
    return xn((t) => t.normalize(e));
  }
  function hA() {
    return xn((e) => e.trim());
  }
  function dA() {
    return xn((e) => e.toLowerCase());
  }
  function fA() {
    return xn((e) => e.toUpperCase());
  }
  function pA() {
    return xn((e) => wI(e));
  }
  function TA(e, t, o) {
    return new e({
      type: "array",
      element: t,
      ...Re(o)
    });
  }
  function gA(e, t, o) {
    const i = Re(o);
    return i.abort ?? (i.abort = true), new e({
      type: "custom",
      check: "custom",
      fn: t,
      ...i
    });
  }
  function mA(e, t, o) {
    return new e({
      type: "custom",
      check: "custom",
      fn: t,
      ...Re(o)
    });
  }
  function EA(e) {
    const t = IA((o) => (o.addIssue = (i) => {
      if (typeof i == "string") o.issues.push(wr(i, o.value, t._zod.def));
      else {
        const n = i;
        n.fatal && (n.continue = false), n.code ?? (n.code = "custom"), n.input ?? (n.input = o.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), o.issues.push(wr(n));
      }
    }, e(o.value, o)));
    return t;
  }
  function IA(e, t) {
    const o = new to({
      check: "custom",
      ...Re(t)
    });
    return o._zod.check = e, o;
  }
  function Pd(e) {
    let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
    return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
      processors: e.processors ?? {},
      metadataRegistry: (e == null ? void 0 : e.metadata) ?? ir,
      target: t,
      unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
      override: (e == null ? void 0 : e.override) ?? (() => {
      }),
      io: (e == null ? void 0 : e.io) ?? "output",
      counter: 0,
      seen: /* @__PURE__ */ new Map(),
      cycles: (e == null ? void 0 : e.cycles) ?? "ref",
      reused: (e == null ? void 0 : e.reused) ?? "inline",
      external: (e == null ? void 0 : e.external) ?? void 0
    };
  }
  function Rt(e, t, o = {
    path: [],
    schemaPath: []
  }) {
    var _a3, _b3;
    var i;
    const n = e._zod.def, s = t.seen.get(e);
    if (s) return s.count++, o.schemaPath.includes(e) && (s.cycle = o.path), s.schema;
    const l = {
      schema: {},
      count: 1,
      cycle: void 0,
      path: o.path
    };
    t.seen.set(e, l);
    const h = (_b3 = (_a3 = e._zod).toJSONSchema) == null ? void 0 : _b3.call(_a3);
    if (h) l.schema = h;
    else {
      const p = {
        ...o,
        schemaPath: [
          ...o.schemaPath,
          e
        ],
        path: o.path
      };
      if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, l.schema, p);
      else {
        const y = l.schema, N = t.processors[n.type];
        if (!N) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);
        N(e, t, y, p);
      }
      const R = e._zod.parent;
      R && (l.ref || (l.ref = R), Rt(R, t, p), t.seen.get(R).isParent = true);
    }
    const f = t.metadataRegistry.get(e);
    return f && Object.assign(l.schema, f), t.io === "input" && xt(e) && (delete l.schema.examples, delete l.schema.default), t.io === "input" && l.schema._prefault && ((i = l.schema).default ?? (i.default = l.schema._prefault)), delete l.schema._prefault, t.seen.get(e).schema;
  }
  function _d(e, t) {
    var _a3, _b3, _c2, _d2;
    const o = e.seen.get(t);
    if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = /* @__PURE__ */ new Map();
    for (const l of e.seen.entries()) {
      const h = (_a3 = e.metadataRegistry.get(l[0])) == null ? void 0 : _a3.id;
      if (h) {
        const f = i.get(h);
        if (f && f !== l[0]) throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
        i.set(h, l[0]);
      }
    }
    const n = (l) => {
      var _a4;
      const h = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        const R = (_a4 = e.external.registry.get(l[0])) == null ? void 0 : _a4.id, y = e.external.uri ?? ((M) => M);
        if (R) return {
          ref: y(R)
        };
        const N = l[1].defId ?? l[1].schema.id ?? `schema${e.counter++}`;
        return l[1].defId = N, {
          defId: N,
          ref: `${y("__shared")}#/${h}/${N}`
        };
      }
      if (l[1] === o) return {
        ref: "#"
      };
      const g = `#/${h}/`, p = l[1].schema.id ?? `__schema${e.counter++}`;
      return {
        defId: p,
        ref: g + p
      };
    }, s = (l) => {
      if (l[1].schema.$ref) return;
      const h = l[1], { ref: f, defId: g } = n(l);
      h.def = {
        ...h.schema
      }, g && (h.defId = g);
      const p = h.schema;
      for (const R in p) delete p[R];
      p.$ref = f;
    };
    if (e.cycles === "throw") for (const l of e.seen.entries()) {
      const h = l[1];
      if (h.cycle) throw new Error(`Cycle detected: #/${(_b3 = h.cycle) == null ? void 0 : _b3.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
    for (const l of e.seen.entries()) {
      const h = l[1];
      if (t === l[0]) {
        s(l);
        continue;
      }
      if (e.external) {
        const g = (_c2 = e.external.registry.get(l[0])) == null ? void 0 : _c2.id;
        if (t !== l[0] && g) {
          s(l);
          continue;
        }
      }
      if ((_d2 = e.metadataRegistry.get(l[0])) == null ? void 0 : _d2.id) {
        s(l);
        continue;
      }
      if (h.cycle) {
        s(l);
        continue;
      }
      if (h.count > 1 && e.reused === "ref") {
        s(l);
        continue;
      }
    }
  }
  function Ud(e, t) {
    var _a3, _b3, _c2;
    const o = e.seen.get(t);
    if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = (l) => {
      const h = e.seen.get(l);
      if (h.ref === null) return;
      const f = h.def ?? h.schema, g = {
        ...f
      }, p = h.ref;
      if (h.ref = null, p) {
        i(p);
        const y = e.seen.get(p), N = y.schema;
        if (N.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (f.allOf = f.allOf ?? [], f.allOf.push(N)) : Object.assign(f, N), Object.assign(f, g), l._zod.parent === p) for (const H in f) H === "$ref" || H === "allOf" || H in g || delete f[H];
        if (N.$ref) for (const H in f) H === "$ref" || H === "allOf" || H in y.def && JSON.stringify(f[H]) === JSON.stringify(y.def[H]) && delete f[H];
      }
      const R = l._zod.parent;
      if (R && R !== p) {
        i(R);
        const y = e.seen.get(R);
        if ((y == null ? void 0 : y.schema.$ref) && (f.$ref = y.schema.$ref, y.def)) for (const N in f) N === "$ref" || N === "allOf" || N in y.def && JSON.stringify(f[N]) === JSON.stringify(y.def[N]) && delete f[N];
      }
      e.override({
        zodSchema: l,
        jsonSchema: f,
        path: h.path ?? []
      });
    };
    for (const l of [
      ...e.seen.entries()
    ].reverse()) i(l[0]);
    const n = {};
    if (e.target === "draft-2020-12" ? n.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? n.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? n.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (_a3 = e.external) == null ? void 0 : _a3.uri) {
      const l = (_b3 = e.external.registry.get(t)) == null ? void 0 : _b3.id;
      if (!l) throw new Error("Schema is missing an `id` property");
      n.$id = e.external.uri(l);
    }
    Object.assign(n, o.def ?? o.schema);
    const s = ((_c2 = e.external) == null ? void 0 : _c2.defs) ?? {};
    for (const l of e.seen.entries()) {
      const h = l[1];
      h.def && h.defId && (s[h.defId] = h.def);
    }
    e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? n.$defs = s : n.definitions = s);
    try {
      const l = JSON.parse(JSON.stringify(n));
      return Object.defineProperty(l, "~standard", {
        value: {
          ...t["~standard"],
          jsonSchema: {
            input: ws(t, "input", e.processors),
            output: ws(t, "output", e.processors)
          }
        },
        enumerable: false,
        writable: false
      }), l;
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
  function xt(e, t) {
    const o = t ?? {
      seen: /* @__PURE__ */ new Set()
    };
    if (o.seen.has(e)) return false;
    o.seen.add(e);
    const i = e._zod.def;
    if (i.type === "transform") return true;
    if (i.type === "array") return xt(i.element, o);
    if (i.type === "set") return xt(i.valueType, o);
    if (i.type === "lazy") return xt(i.getter(), o);
    if (i.type === "promise" || i.type === "optional" || i.type === "nonoptional" || i.type === "nullable" || i.type === "readonly" || i.type === "default" || i.type === "prefault") return xt(i.innerType, o);
    if (i.type === "intersection") return xt(i.left, o) || xt(i.right, o);
    if (i.type === "record" || i.type === "map") return xt(i.keyType, o) || xt(i.valueType, o);
    if (i.type === "pipe") return xt(i.in, o) || xt(i.out, o);
    if (i.type === "object") {
      for (const n in i.shape) if (xt(i.shape[n], o)) return true;
      return false;
    }
    if (i.type === "union") {
      for (const n of i.options) if (xt(n, o)) return true;
      return false;
    }
    if (i.type === "tuple") {
      for (const n of i.items) if (xt(n, o)) return true;
      return !!(i.rest && xt(i.rest, o));
    }
    return false;
  }
  const OA = (e, t = {}) => (o) => {
    const i = Pd({
      ...o,
      processors: t
    });
    return Rt(e, i), _d(i, e), Ud(i, e);
  }, ws = (e, t, o = {}) => (i) => {
    const { libraryOptions: n, target: s } = i ?? {}, l = Pd({
      ...n ?? {},
      target: s,
      io: t,
      processors: o
    });
    return Rt(e, l), _d(l, e), Ud(l, e);
  }, RA = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  }, AA = (e, t, o, i) => {
    const n = o;
    n.type = "string";
    const { minimum: s, maximum: l, format: h, patterns: f, contentEncoding: g } = e._zod.bag;
    if (typeof s == "number" && (n.minLength = s), typeof l == "number" && (n.maxLength = l), h && (n.format = RA[h] ?? h, n.format === "" && delete n.format, h === "time" && delete n.format), g && (n.contentEncoding = g), f && f.size > 0) {
      const p = [
        ...f
      ];
      p.length === 1 ? n.pattern = p[0].source : p.length > 1 && (n.allOf = [
        ...p.map((R) => ({
          ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
            type: "string"
          } : {},
          pattern: R.source
        }))
      ]);
    }
  }, SA = (e, t, o, i) => {
    const n = o, { minimum: s, maximum: l, format: h, multipleOf: f, exclusiveMaximum: g, exclusiveMinimum: p } = e._zod.bag;
    typeof h == "string" && h.includes("int") ? n.type = "integer" : n.type = "number", typeof p == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.minimum = p, n.exclusiveMinimum = true) : n.exclusiveMinimum = p), typeof s == "number" && (n.minimum = s, typeof p == "number" && t.target !== "draft-04" && (p >= s ? delete n.minimum : delete n.exclusiveMinimum)), typeof g == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.maximum = g, n.exclusiveMaximum = true) : n.exclusiveMaximum = g), typeof l == "number" && (n.maximum = l, typeof g == "number" && t.target !== "draft-04" && (g <= l ? delete n.maximum : delete n.exclusiveMaximum)), typeof f == "number" && (n.multipleOf = f);
  }, wA = (e, t, o, i) => {
    o.type = "boolean";
  }, NA = (e, t, o, i) => {
    o.not = {};
  }, yA = (e, t, o, i) => {
  }, bA = (e, t, o, i) => {
    const n = e._zod.def, s = Td(n.entries);
    s.every((l) => typeof l == "number") && (o.type = "number"), s.every((l) => typeof l == "string") && (o.type = "string"), o.enum = s;
  }, LA = (e, t, o, i) => {
    if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
  }, vA = (e, t, o, i) => {
    if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
  }, CA = (e, t, o, i) => {
    const n = o, s = e._zod.def, { minimum: l, maximum: h } = e._zod.bag;
    typeof l == "number" && (n.minItems = l), typeof h == "number" && (n.maxItems = h), n.type = "array", n.items = Rt(s.element, t, {
      ...i,
      path: [
        ...i.path,
        "items"
      ]
    });
  }, HA = (e, t, o, i) => {
    var _a3;
    const n = o, s = e._zod.def;
    n.type = "object", n.properties = {};
    const l = s.shape;
    for (const g in l) n.properties[g] = Rt(l[g], t, {
      ...i,
      path: [
        ...i.path,
        "properties",
        g
      ]
    });
    const h = new Set(Object.keys(l)), f = new Set([
      ...h
    ].filter((g) => {
      const p = s.shape[g]._zod;
      return t.io === "input" ? p.optin === void 0 : p.optout === void 0;
    }));
    f.size > 0 && (n.required = Array.from(f)), ((_a3 = s.catchall) == null ? void 0 : _a3._zod.def.type) === "never" ? n.additionalProperties = false : s.catchall ? s.catchall && (n.additionalProperties = Rt(s.catchall, t, {
      ...i,
      path: [
        ...i.path,
        "additionalProperties"
      ]
    })) : t.io === "output" && (n.additionalProperties = false);
  }, DA = (e, t, o, i) => {
    const n = e._zod.def, s = n.inclusive === false, l = n.options.map((h, f) => Rt(h, t, {
      ...i,
      path: [
        ...i.path,
        s ? "oneOf" : "anyOf",
        f
      ]
    }));
    s ? o.oneOf = l : o.anyOf = l;
  }, MA = (e, t, o, i) => {
    const n = e._zod.def, s = Rt(n.left, t, {
      ...i,
      path: [
        ...i.path,
        "allOf",
        0
      ]
    }), l = Rt(n.right, t, {
      ...i,
      path: [
        ...i.path,
        "allOf",
        1
      ]
    }), h = (g) => "allOf" in g && Object.keys(g).length === 1, f = [
      ...h(s) ? s.allOf : [
        s
      ],
      ...h(l) ? l.allOf : [
        l
      ]
    ];
    o.allOf = f;
  }, FA = (e, t, o, i) => {
    var _a3;
    const n = o, s = e._zod.def;
    n.type = "object";
    const l = s.keyType, f = (_a3 = l._zod.bag) == null ? void 0 : _a3.patterns;
    if (s.mode === "loose" && f && f.size > 0) {
      const p = Rt(s.valueType, t, {
        ...i,
        path: [
          ...i.path,
          "patternProperties",
          "*"
        ]
      });
      n.patternProperties = {};
      for (const R of f) n.patternProperties[R.source] = p;
    } else (t.target === "draft-07" || t.target === "draft-2020-12") && (n.propertyNames = Rt(s.keyType, t, {
      ...i,
      path: [
        ...i.path,
        "propertyNames"
      ]
    })), n.additionalProperties = Rt(s.valueType, t, {
      ...i,
      path: [
        ...i.path,
        "additionalProperties"
      ]
    });
    const g = l._zod.values;
    if (g) {
      const p = [
        ...g
      ].filter((R) => typeof R == "string" || typeof R == "number");
      p.length > 0 && (n.required = p);
    }
  }, PA = (e, t, o, i) => {
    const n = e._zod.def, s = Rt(n.innerType, t, i), l = t.seen.get(e);
    t.target === "openapi-3.0" ? (l.ref = n.innerType, o.nullable = true) : o.anyOf = [
      s,
      {
        type: "null"
      }
    ];
  }, _A = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType;
  }, UA = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType, o.default = JSON.parse(JSON.stringify(n.defaultValue));
  }, WA = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType, t.io === "input" && (o._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
  }, kA = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType;
    let l;
    try {
      l = n.catchValue(void 0);
    } catch {
      throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    o.default = l;
  }, GA = (e, t, o, i) => {
    const n = e._zod.def, s = t.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
    Rt(s, t, i);
    const l = t.seen.get(e);
    l.ref = s;
  }, BA = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType, o.readOnly = true;
  }, Wd = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType;
  }, YA = G("ZodISODateTime", (e, t) => {
    xO.init(e, t), ft.init(e, t);
  });
  function jA(e) {
    return ZR(YA, e);
  }
  const xA = G("ZodISODate", (e, t) => {
    zO.init(e, t), ft.init(e, t);
  });
  function zA(e) {
    return KR(xA, e);
  }
  const $A = G("ZodISOTime", (e, t) => {
    $O.init(e, t), ft.init(e, t);
  });
  function VA(e) {
    return JR($A, e);
  }
  const qA = G("ZodISODuration", (e, t) => {
    VO.init(e, t), ft.init(e, t);
  });
  function ZA(e) {
    return XR(qA, e);
  }
  const KA = (e, t) => {
    Id.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
      format: {
        value: (o) => UI(e, o)
      },
      flatten: {
        value: (o) => _I(e, o)
      },
      addIssue: {
        value: (o) => {
          e.issues.push(o), e.message = JSON.stringify(e.issues, Tc, 2);
        }
      },
      addIssues: {
        value: (o) => {
          e.issues.push(...o), e.message = JSON.stringify(e.issues, Tc, 2);
        }
      },
      isEmpty: {
        get() {
          return e.issues.length === 0;
        }
      }
    });
  }, Io = G("ZodError", KA, {
    Parent: Error
  }), JA = Jc(Io), XA = Xc(Io), QA = ta(Io), eS = oa(Io), tS = GI(Io), oS = BI(Io), iS = YI(Io), nS = jI(Io), rS = xI(Io), sS = zI(Io), aS = $I(Io), cS = VI(Io), Tt = G("ZodType", (e, t) => (pt.init(e, t), Object.assign(e["~standard"], {
    jsonSchema: {
      input: ws(e, "input"),
      output: ws(e, "output")
    }
  }), e.toJSONSchema = OA(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", {
    value: t
  }), e.check = (...o) => e.clone(Ui(t, {
    checks: [
      ...t.checks ?? [],
      ...o.map((i) => typeof i == "function" ? {
        _zod: {
          check: i,
          def: {
            check: "custom"
          },
          onattach: []
        }
      } : i)
    ]
  }), {
    parent: true
  }), e.with = e.check, e.clone = (o, i) => Wi(e, o, i), e.brand = () => e, e.register = ((o, i) => (o.add(e, i), e)), e.parse = (o, i) => JA(e, o, i, {
    callee: e.parse
  }), e.safeParse = (o, i) => QA(e, o, i), e.parseAsync = async (o, i) => XA(e, o, i, {
    callee: e.parseAsync
  }), e.safeParseAsync = async (o, i) => eS(e, o, i), e.spa = e.safeParseAsync, e.encode = (o, i) => tS(e, o, i), e.decode = (o, i) => oS(e, o, i), e.encodeAsync = async (o, i) => iS(e, o, i), e.decodeAsync = async (o, i) => nS(e, o, i), e.safeEncode = (o, i) => rS(e, o, i), e.safeDecode = (o, i) => sS(e, o, i), e.safeEncodeAsync = async (o, i) => aS(e, o, i), e.safeDecodeAsync = async (o, i) => cS(e, o, i), e.refine = (o, i) => e.check(ow(o, i)), e.superRefine = (o) => e.check(iw(o)), e.overwrite = (o) => e.check(xn(o)), e.optional = () => Pu(e), e.exactOptional = () => jS(e), e.nullable = () => _u(e), e.nullish = () => Pu(_u(e)), e.nonoptional = (o) => ZS(e, o), e.array = () => Ns(e), e.or = (o) => PS([
    e,
    o
  ]), e.and = (o) => US(e, o), e.transform = (o) => Uu(e, BS(o)), e.default = (o) => $S(e, o), e.prefault = (o) => qS(e, o), e.catch = (o) => JS(e, o), e.pipe = (o) => Uu(e, o), e.readonly = () => ew(e), e.describe = (o) => {
    const i = e.clone();
    return ir.add(i, {
      description: o
    }), i;
  }, Object.defineProperty(e, "description", {
    get() {
      var _a3;
      return (_a3 = ir.get(e)) == null ? void 0 : _a3.description;
    },
    configurable: true
  }), e.meta = (...o) => {
    if (o.length === 0) return ir.get(e);
    const i = e.clone();
    return ir.add(i, o[0]), i;
  }, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (o) => o(e), e)), kd = G("_ZodString", (e, t) => {
    Qc.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (i, n, s) => AA(e, i, n);
    const o = e._zod.bag;
    e.format = o.format ?? null, e.minLength = o.minimum ?? null, e.maxLength = o.maximum ?? null, e.regex = (...i) => e.check(nA(...i)), e.includes = (...i) => e.check(aA(...i)), e.startsWith = (...i) => e.check(cA(...i)), e.endsWith = (...i) => e.check(lA(...i)), e.min = (...i) => e.check(Ss(...i)), e.max = (...i) => e.check(Md(...i)), e.length = (...i) => e.check(Fd(...i)), e.nonempty = (...i) => e.check(Ss(1, ...i)), e.lowercase = (i) => e.check(rA(i)), e.uppercase = (i) => e.check(sA(i)), e.trim = () => e.check(hA()), e.normalize = (...i) => e.check(uA(...i)), e.toLowerCase = () => e.check(dA()), e.toUpperCase = () => e.check(fA()), e.slugify = () => e.check(pA());
  }), lS = G("ZodString", (e, t) => {
    Qc.init(e, t), kd.init(e, t), e.email = (o) => e.check(LR(uS, o)), e.url = (o) => e.check(MR(hS, o)), e.jwt = (o) => e.check(qR(yS, o)), e.emoji = (o) => e.check(FR(dS, o)), e.guid = (o) => e.check(Lu(Du, o)), e.uuid = (o) => e.check(vR(Zr, o)), e.uuidv4 = (o) => e.check(CR(Zr, o)), e.uuidv6 = (o) => e.check(HR(Zr, o)), e.uuidv7 = (o) => e.check(DR(Zr, o)), e.nanoid = (o) => e.check(PR(fS, o)), e.guid = (o) => e.check(Lu(Du, o)), e.cuid = (o) => e.check(_R(pS, o)), e.cuid2 = (o) => e.check(UR(TS, o)), e.ulid = (o) => e.check(WR(gS, o)), e.base64 = (o) => e.check(zR(SS, o)), e.base64url = (o) => e.check($R(wS, o)), e.xid = (o) => e.check(kR(mS, o)), e.ksuid = (o) => e.check(GR(ES, o)), e.ipv4 = (o) => e.check(BR(IS, o)), e.ipv6 = (o) => e.check(YR(OS, o)), e.cidrv4 = (o) => e.check(jR(RS, o)), e.cidrv6 = (o) => e.check(xR(AS, o)), e.e164 = (o) => e.check(VR(NS, o)), e.datetime = (o) => e.check(jA(o)), e.date = (o) => e.check(zA(o)), e.time = (o) => e.check(VA(o)), e.duration = (o) => e.check(ZA(o));
  });
  function ii(e) {
    return bR(lS, e);
  }
  const ft = G("ZodStringFormat", (e, t) => {
    ut.init(e, t), kd.init(e, t);
  }), uS = G("ZodEmail", (e, t) => {
    PO.init(e, t), ft.init(e, t);
  }), Du = G("ZodGUID", (e, t) => {
    MO.init(e, t), ft.init(e, t);
  }), Zr = G("ZodUUID", (e, t) => {
    FO.init(e, t), ft.init(e, t);
  }), hS = G("ZodURL", (e, t) => {
    _O.init(e, t), ft.init(e, t);
  }), dS = G("ZodEmoji", (e, t) => {
    UO.init(e, t), ft.init(e, t);
  }), fS = G("ZodNanoID", (e, t) => {
    WO.init(e, t), ft.init(e, t);
  }), pS = G("ZodCUID", (e, t) => {
    kO.init(e, t), ft.init(e, t);
  }), TS = G("ZodCUID2", (e, t) => {
    GO.init(e, t), ft.init(e, t);
  }), gS = G("ZodULID", (e, t) => {
    BO.init(e, t), ft.init(e, t);
  }), mS = G("ZodXID", (e, t) => {
    YO.init(e, t), ft.init(e, t);
  }), ES = G("ZodKSUID", (e, t) => {
    jO.init(e, t), ft.init(e, t);
  }), IS = G("ZodIPv4", (e, t) => {
    qO.init(e, t), ft.init(e, t);
  }), OS = G("ZodIPv6", (e, t) => {
    ZO.init(e, t), ft.init(e, t);
  }), RS = G("ZodCIDRv4", (e, t) => {
    KO.init(e, t), ft.init(e, t);
  }), AS = G("ZodCIDRv6", (e, t) => {
    JO.init(e, t), ft.init(e, t);
  }), SS = G("ZodBase64", (e, t) => {
    XO.init(e, t), ft.init(e, t);
  }), wS = G("ZodBase64URL", (e, t) => {
    eR.init(e, t), ft.init(e, t);
  }), NS = G("ZodE164", (e, t) => {
    tR.init(e, t), ft.init(e, t);
  }), yS = G("ZodJWT", (e, t) => {
    iR.init(e, t), ft.init(e, t);
  }), Gd = G("ZodNumber", (e, t) => {
    vd.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (i, n, s) => SA(e, i, n), e.gt = (i, n) => e.check(Cu(i, n)), e.gte = (i, n) => e.check(Ua(i, n)), e.min = (i, n) => e.check(Ua(i, n)), e.lt = (i, n) => e.check(vu(i, n)), e.lte = (i, n) => e.check(_a(i, n)), e.max = (i, n) => e.check(_a(i, n)), e.int = (i) => e.check(Mu(i)), e.safe = (i) => e.check(Mu(i)), e.positive = (i) => e.check(Cu(0, i)), e.nonnegative = (i) => e.check(Ua(0, i)), e.negative = (i) => e.check(vu(0, i)), e.nonpositive = (i) => e.check(_a(0, i)), e.multipleOf = (i, n) => e.check(Hu(i, n)), e.step = (i, n) => e.check(Hu(i, n)), e.finite = () => e;
    const o = e._zod.bag;
    e.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), e.isFinite = true, e.format = o.format ?? null;
  });
  function et(e) {
    return QR(Gd, e);
  }
  const bS = G("ZodNumberFormat", (e, t) => {
    nR.init(e, t), Gd.init(e, t);
  });
  function Mu(e) {
    return eA(bS, e);
  }
  const LS = G("ZodBoolean", (e, t) => {
    rR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => wA(e, o, i);
  });
  function Bd(e) {
    return tA(LS, e);
  }
  const vS = G("ZodUnknown", (e, t) => {
    sR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => yA();
  });
  function Fu() {
    return oA(vS);
  }
  const CS = G("ZodNever", (e, t) => {
    aR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => NA(e, o, i);
  });
  function HS(e) {
    return iA(CS, e);
  }
  const DS = G("ZodArray", (e, t) => {
    cR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => CA(e, o, i, n), e.element = t.element, e.min = (o, i) => e.check(Ss(o, i)), e.nonempty = (o) => e.check(Ss(1, o)), e.max = (o, i) => e.check(Md(o, i)), e.length = (o, i) => e.check(Fd(o, i)), e.unwrap = () => e.element;
  });
  function Ns(e, t) {
    return TA(DS, e, t);
  }
  const MS = G("ZodObject", (e, t) => {
    uR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => HA(e, o, i, n), $e(e, "shape", () => t.shape), e.keyof = () => Yd(Object.keys(e._zod.def.shape)), e.catchall = (o) => e.clone({
      ...e._zod.def,
      catchall: o
    }), e.passthrough = () => e.clone({
      ...e._zod.def,
      catchall: Fu()
    }), e.loose = () => e.clone({
      ...e._zod.def,
      catchall: Fu()
    }), e.strict = () => e.clone({
      ...e._zod.def,
      catchall: HS()
    }), e.strip = () => e.clone({
      ...e._zod.def,
      catchall: void 0
    }), e.extend = (o) => HI(e, o), e.safeExtend = (o) => DI(e, o), e.merge = (o) => MI(e, o), e.pick = (o) => vI(e, o), e.omit = (o) => CI(e, o), e.partial = (...o) => FI(jd, e, o[0]), e.required = (...o) => PI(xd, e, o[0]);
  });
  function Fn(e, t) {
    const o = {
      type: "object",
      shape: e ?? {},
      ...Re(t)
    };
    return new MS(o);
  }
  const FS = G("ZodUnion", (e, t) => {
    hR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => DA(e, o, i, n), e.options = t.options;
  });
  function PS(e, t) {
    return new FS({
      type: "union",
      options: e,
      ...Re(t)
    });
  }
  const _S = G("ZodIntersection", (e, t) => {
    dR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => MA(e, o, i, n);
  });
  function US(e, t) {
    return new _S({
      type: "intersection",
      left: e,
      right: t
    });
  }
  const WS = G("ZodRecord", (e, t) => {
    fR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => FA(e, o, i, n), e.keyType = t.keyType, e.valueType = t.valueType;
  });
  function kS(e, t, o) {
    return new WS({
      type: "record",
      keyType: e,
      valueType: t,
      ...Re(o)
    });
  }
  const mc = G("ZodEnum", (e, t) => {
    pR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (i, n, s) => bA(e, i, n), e.enum = t.entries, e.options = Object.values(t.entries);
    const o = new Set(Object.keys(t.entries));
    e.extract = (i, n) => {
      const s = {};
      for (const l of i) if (o.has(l)) s[l] = t.entries[l];
      else throw new Error(`Key ${l} not found in enum`);
      return new mc({
        ...t,
        checks: [],
        ...Re(n),
        entries: s
      });
    }, e.exclude = (i, n) => {
      const s = {
        ...t.entries
      };
      for (const l of i) if (o.has(l)) delete s[l];
      else throw new Error(`Key ${l} not found in enum`);
      return new mc({
        ...t,
        checks: [],
        ...Re(n),
        entries: s
      });
    };
  });
  function Yd(e, t) {
    const o = Array.isArray(e) ? Object.fromEntries(e.map((i) => [
      i,
      i
    ])) : e;
    return new mc({
      type: "enum",
      entries: o,
      ...Re(t)
    });
  }
  const GS = G("ZodTransform", (e, t) => {
    TR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => vA(e, o), e._zod.parse = (o, i) => {
      if (i.direction === "backward") throw new fd(e.constructor.name);
      o.addIssue = (s) => {
        if (typeof s == "string") o.issues.push(wr(s, o.value, t));
        else {
          const l = s;
          l.fatal && (l.continue = false), l.code ?? (l.code = "custom"), l.input ?? (l.input = o.value), l.inst ?? (l.inst = e), o.issues.push(wr(l));
        }
      };
      const n = t.transform(o.value, o);
      return n instanceof Promise ? n.then((s) => (o.value = s, o)) : (o.value = n, o);
    };
  });
  function BS(e) {
    return new GS({
      type: "transform",
      transform: e
    });
  }
  const jd = G("ZodOptional", (e, t) => {
    Dd.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Wd(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function Pu(e) {
    return new jd({
      type: "optional",
      innerType: e
    });
  }
  const YS = G("ZodExactOptional", (e, t) => {
    gR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Wd(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function jS(e) {
    return new YS({
      type: "optional",
      innerType: e
    });
  }
  const xS = G("ZodNullable", (e, t) => {
    mR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => PA(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function _u(e) {
    return new xS({
      type: "nullable",
      innerType: e
    });
  }
  const zS = G("ZodDefault", (e, t) => {
    ER.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => UA(e, o, i, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
  });
  function $S(e, t) {
    return new zS({
      type: "default",
      innerType: e,
      get defaultValue() {
        return typeof t == "function" ? t() : md(t);
      }
    });
  }
  const VS = G("ZodPrefault", (e, t) => {
    IR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => WA(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function qS(e, t) {
    return new VS({
      type: "prefault",
      innerType: e,
      get defaultValue() {
        return typeof t == "function" ? t() : md(t);
      }
    });
  }
  const xd = G("ZodNonOptional", (e, t) => {
    OR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => _A(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function ZS(e, t) {
    return new xd({
      type: "nonoptional",
      innerType: e,
      ...Re(t)
    });
  }
  const KS = G("ZodCatch", (e, t) => {
    RR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => kA(e, o, i, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
  });
  function JS(e, t) {
    return new KS({
      type: "catch",
      innerType: e,
      catchValue: typeof t == "function" ? t : () => t
    });
  }
  const XS = G("ZodPipe", (e, t) => {
    AR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => GA(e, o, i, n), e.in = t.in, e.out = t.out;
  });
  function Uu(e, t) {
    return new XS({
      type: "pipe",
      in: e,
      out: t
    });
  }
  const QS = G("ZodReadonly", (e, t) => {
    SR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => BA(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function ew(e) {
    return new QS({
      type: "readonly",
      innerType: e
    });
  }
  const zd = G("ZodCustom", (e, t) => {
    wR.init(e, t), Tt.init(e, t), e._zod.processJSONSchema = (o, i, n) => LA(e, o);
  });
  function tw(e, t) {
    return gA(zd, e ?? (() => true), t);
  }
  function ow(e, t = {}) {
    return mA(zd, e, t);
  }
  function iw(e) {
    return EA(e);
  }
  const $d = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, Vd = Fn({
    id: ii().regex($d),
    routeId: ii(),
    point: tw((e) => {
      const t = e;
      return typeof t.latitude == "number" && typeof t.longitude == "number";
    }),
    timestamp: et().positive(),
    sequence: et().int().nonnegative(),
    merged: Bd(),
    distanceIncrement: et().nonnegative().optional()
  }), nw = Fn({
    routeId: ii(),
    lastMergeTime: et().positive(),
    unmergedCount: et().int().nonnegative(),
    lastSequence: et().int().nonnegative(),
    totalPoints: et().int().nonnegative(),
    checksum: ii().optional()
  });
  Fn({
    id: ii().regex($d),
    routeId: ii(),
    startSequence: et().int().nonnegative(),
    endSequence: et().int().nonnegative(),
    pointCount: et().int().positive(),
    distanceAdded: et().nonnegative(),
    mergeTime: et().positive(),
    status: Yd([
      "pending",
      "completed",
      "failed"
    ]),
    error: ii().optional()
  });
  Fn({
    appendLatency: Ns(et().positive()),
    mergeDuration: Ns(et().positive()),
    logSizePerRoute: kS(ii(), et().int().nonnegative()),
    failedAppends: et().int().nonnegative(),
    failedMerges: et().int().nonnegative(),
    recoveryEvents: et().int().nonnegative(),
    mergeFrequency: et(),
    compressionRatio: et(),
    memoryUsage: et()
  });
  Fn({
    initialized: Bd(),
    version: et().int().positive(),
    lastMergeTime: et().positive(),
    activeRoutes: Ns(ii()),
    statistics: Fn({
      writesPerSecond: et(),
      averageLogSize: et(),
      mergeDuration: et()
    })
  });
  Zo = {
    FLUSH_THRESHOLD: 10,
    FLUSH_DELAY_MS: 100,
    MERGE_TIME_INTERVAL_MS: 3e4,
    MERGE_SIZE_THRESHOLD: 100,
    MAX_RETRIES: 3,
    RETRY_BASE_DELAY_MS: 1e3,
    MAX_LATENCY_SAMPLES: 100,
    MAX_CACHE_SIZE: 100
  };
  function rw(e, t, o) {
    return Vd.parse({
      id: crypto.randomUUID(),
      routeId: e,
      point: t,
      timestamp: Date.now(),
      sequence: o,
      merged: false
    });
  }
  function Wa(e) {
    return Vd.parse(e);
  }
  function Wu(e) {
    return nw.parse(e);
  }
  const vt = [];
  for (let e = 0; e < 256; ++e) vt.push((e + 256).toString(16).slice(1));
  function sw(e, t = 0) {
    return (vt[e[t + 0]] + vt[e[t + 1]] + vt[e[t + 2]] + vt[e[t + 3]] + "-" + vt[e[t + 4]] + vt[e[t + 5]] + "-" + vt[e[t + 6]] + vt[e[t + 7]] + "-" + vt[e[t + 8]] + vt[e[t + 9]] + "-" + vt[e[t + 10]] + vt[e[t + 11]] + vt[e[t + 12]] + vt[e[t + 13]] + vt[e[t + 14]] + vt[e[t + 15]]).toLowerCase();
  }
  let ka;
  const aw = new Uint8Array(16);
  function cw() {
    if (!ka) {
      if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      ka = crypto.getRandomValues.bind(crypto);
    }
    return ka(aw);
  }
  const lw = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ku = {
    randomUUID: lw
  };
  Ga = function(e, t, o) {
    var _a3;
    if (ku.randomUUID && !e) return ku.randomUUID();
    e = e || {};
    const i = e.random ?? ((_a3 = e.rng) == null ? void 0 : _a3.call(e)) ?? cw();
    if (i.length < 16) throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, sw(i);
  };
  Ec = function() {
    return {
      name: "Untitled",
      description: "A new geographic item",
      creation_timestamp: Date.now(),
      modification_timestamp: Date.now(),
      created_by: "anonymous",
      modified_by: "anonymous",
      tags: []
    };
  };
  function uw() {
    return {
      ...Ec(),
      version: 1,
      signature: void 0
    };
  }
  ys = class {
    constructor(t = Ga(), o, i, n) {
      __publicField(this, "id");
      __publicField(this, "meta");
      __publicField(this, "routes");
      __publicField(this, "drafts");
      this.id = t, this.routes = o || {
        id: Ga(),
        meta: Ec(),
        routes: []
      }, this.drafts = i || {
        id: Ga(),
        meta: Ec(),
        drafts: []
      }, this.meta = {
        ...uw(),
        ...n
      };
    }
    toStorage() {
      return {
        id: this.id,
        meta: this.meta,
        routes: this.routes,
        drafts: this.drafts
      };
    }
    static fromStorage(t) {
      return new ys(t.id, t.routes, t.drafts, t.meta);
    }
    clone() {
      return ys.fromStorage(this.toStorage());
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
  };
  let Fe;
  const qd = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && qd.decode();
  let nr = null;
  function hs() {
    return (nr === null || nr.byteLength === 0) && (nr = new Uint8Array(Fe.memory.buffer)), nr;
  }
  function en(e, t) {
    return e = e >>> 0, qd.decode(hs().subarray(e, e + t));
  }
  let bs = 0;
  const ds = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, hw = typeof ds.encodeInto == "function" ? function(e, t) {
    return ds.encodeInto(e, t);
  } : function(e, t) {
    const o = ds.encode(e);
    return t.set(o), {
      read: e.length,
      written: o.length
    };
  };
  function Zd(e, t, o) {
    if (o === void 0) {
      const h = ds.encode(e), f = t(h.length, 1) >>> 0;
      return hs().subarray(f, f + h.length).set(h), bs = h.length, f;
    }
    let i = e.length, n = t(i, 1) >>> 0;
    const s = hs();
    let l = 0;
    for (; l < i; l++) {
      const h = e.charCodeAt(l);
      if (h > 127) break;
      s[n + l] = h;
    }
    if (l !== i) {
      l !== 0 && (e = e.slice(l)), n = o(n, i, i = l + e.length * 3, 1) >>> 0;
      const h = hs().subarray(n + l, n + i), f = hw(e, h);
      l += f.written, n = o(n, i, l, 1) >>> 0;
    }
    return bs = l, n;
  }
  function dw(e) {
    return e == null;
  }
  let Ki = null;
  function Gu() {
    return (Ki === null || Ki.buffer.detached === true || Ki.buffer.detached === void 0 && Ki.buffer !== Fe.memory.buffer) && (Ki = new DataView(Fe.memory.buffer)), Ki;
  }
  function Kd(e) {
    const t = Fe.__wbindgen_export_0.get(e);
    return Fe.__externref_table_dealloc(e), t;
  }
  function Ba(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Ic(e, t, o) {
    Ba(e, Pn), Ba(t, Pn), Ba(o, el);
    const i = Fe.transform(e.__wbg_ptr, t.__wbg_ptr, o.__wbg_ptr);
    if (i[1]) throw Kd(i[0]);
  }
  const Bu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Fe.__wbg_point_free(e >>> 0, 1));
  class el {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Bu.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Fe.__wbg_point_free(t, 0);
    }
    get x() {
      return Fe.__wbg_get_point_x(this.__wbg_ptr);
    }
    set x(t) {
      Fe.__wbg_set_point_x(this.__wbg_ptr, t);
    }
    get y() {
      return Fe.__wbg_get_point_y(this.__wbg_ptr);
    }
    set y(t) {
      Fe.__wbg_set_point_y(this.__wbg_ptr, t);
    }
    get z() {
      return Fe.__wbg_get_point_z(this.__wbg_ptr);
    }
    set z(t) {
      Fe.__wbg_set_point_z(this.__wbg_ptr, t);
    }
    constructor(t, o, i) {
      const n = Fe.point_new(t, o, i);
      return this.__wbg_ptr = n >>> 0, Bu.register(this, this.__wbg_ptr, this), this;
    }
  }
  const Yu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Fe.__wbg_projection_free(e >>> 0, 1));
  class Pn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Yu.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Fe.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const o = Zd(t, Fe.__wbindgen_malloc, Fe.__wbindgen_realloc), i = bs, n = Fe.projection_new(o, i);
      if (n[2]) throw Kd(n[1]);
      return this.__wbg_ptr = n[0] >>> 0, Yu.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, o;
      try {
        const i = Fe.projection_projName(this.__wbg_ptr);
        return t = i[0], o = i[1], en(i[0], i[1]);
      } finally {
        Fe.__wbindgen_free(t, o, 1);
      }
    }
    get isLatlon() {
      return Fe.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Fe.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, o;
      try {
        const i = Fe.projection_axis(this.__wbg_ptr);
        return t = i[0], o = i[1], en(i[0], i[1]);
      } finally {
        Fe.__wbindgen_free(t, o, 1);
      }
    }
    get isNormalizedAxis() {
      return Fe.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Fe.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, o;
      try {
        const i = Fe.projection_units(this.__wbg_ptr);
        return t = i[0], o = i[1], en(i[0], i[1]);
      } finally {
        Fe.__wbindgen_free(t, o, 1);
      }
    }
  }
  async function fw(e, t) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (i) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i);
        else throw i;
      }
      const o = await e.arrayBuffer();
      return await WebAssembly.instantiate(o, t);
    } else {
      const o = await WebAssembly.instantiate(e, t);
      return o instanceof WebAssembly.Instance ? {
        instance: o,
        module: e
      } : o;
    }
  }
  function pw() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbg_buffer_e6c6daaa78528d53 = function(t) {
      return t.buffer;
    }, e.wbg.__wbg_getFloat32_e0872364daa466bb = function(t, o, i) {
      return t.getFloat32(o >>> 0, i !== 0);
    }, e.wbg.__wbg_getFloat64_3c55a5d18420aa12 = function(t, o, i) {
      return t.getFloat64(o >>> 0, i !== 0);
    }, e.wbg.__wbg_getInt32_6ea30555a7e6366d = function(t, o, i) {
      return t.getInt32(o >>> 0, i !== 0);
    }, e.wbg.__wbg_getUint32_78580012d2915dec = function(t, o, i) {
      return t.getUint32(o >>> 0, i !== 0);
    }, e.wbg.__wbg_parseFloat_40655e71a57d91e0 = function(t, o) {
      return parseFloat(en(t, o));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, o, i) {
      return parseInt(en(t, o), i);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, o, i) {
      return t.slice(o >>> 0, i >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, o) {
      return new Error(en(t, o));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Fe.__wbindgen_export_0, o = t.grow(4);
      t.set(0, void 0), t.set(o + 0, void 0), t.set(o + 1, null), t.set(o + 2, true), t.set(o + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, o) {
      const i = o, n = typeof i == "string" ? i : void 0;
      var s = dw(n) ? 0 : Zd(n, Fe.__wbindgen_malloc, Fe.__wbindgen_realloc), l = bs;
      Gu().setInt32(t + 4, l, true), Gu().setInt32(t + 0, s, true);
    }, e.wbg.__wbindgen_throw = function(t, o) {
      throw new Error(en(t, o));
    }, e;
  }
  function Tw(e, t) {
    return Fe = e.exports, Jd.__wbindgen_wasm_module = t, Ki = null, nr = null, Fe.__wbindgen_start(), Fe;
  }
  async function Jd(e) {
    if (Fe !== void 0) return Fe;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = pw();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: o, module: i } = await fw(await e, t);
    return Tw(o, i);
  }
  const gw = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, fs = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let Ya = false;
  async function Xd() {
    if (!Ya) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Jd({
        module_or_path: gw
      }), Ya = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), Ya = true;
    }
  }
  async function ju(e, t, o) {
    await Xd();
    const i = new Pn(e), n = new Pn(t), s = new el(o[0], o[1], 0);
    try {
      return Ic(i, n, s), [
        s.x,
        s.y
      ];
    } catch (l) {
      throw new Error(`Failed to transform coordinate: ${l instanceof Error ? l.message : String(l)}`);
    } finally {
      i.free(), n.free(), s.free();
    }
  }
  function mw(e, t) {
    const o = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(o * o + i * i);
  }
  Oc = function(e, t) {
    const i = e.latitude * Math.PI / 180, n = t.latitude * Math.PI / 180, s = (t.latitude - e.latitude) * Math.PI / 180, l = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(s / 2) * Math.sin(s / 2) + Math.cos(i) * Math.cos(n) * Math.sin(l / 2) * Math.sin(l / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  };
  async function Ew(e, t, o = {}) {
    const { projection: i = fs.CGCS2000_3_DEGREE, useHaversine: n = false } = o;
    if (n) return Oc(e, t);
    try {
      const s = await ju(fs.WGS84, i, [
        e.longitude,
        e.latitude
      ]), l = await ju(fs.WGS84, i, [
        t.longitude,
        t.latitude
      ]);
      return mw({
        x: s[0],
        y: s[1]
      }, {
        x: l[0],
        y: l[1]
      });
    } catch (s) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", s), Oc(e, t);
    }
  }
  EL = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let o = 0;
    for (let i = 1; i < e.length; i++) o += await Ew(e[i - 1], e[i], t);
    return o;
  };
  IL = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  const Iw = 1e3, xu = 1e4;
  Ni = (_a2 = class {
    constructor() {
      __publicField(this, "mergeQueue", []);
      __publicField(this, "isProcessing", false);
      __publicField(this, "lastMergeTime", 0);
      __publicField(this, "mergeCount", 0);
    }
    static getInstance() {
      return Ni.instance || (Ni.instance = new Ni()), Ni.instance;
    }
    static resetInstance() {
      Ni.instance = void 0;
    }
    scheduleMerge(t, o = "normal") {
      if (this.mergeQueue.length >= xu) {
        console.error(`[MergeProcessor] Merge queue size (${this.mergeQueue.length}) exceeds maximum (${xu}). Rejecting merge for route ${t}`);
        return;
      }
      const i = this.mergeQueue.find((s) => s.routeId === t);
      if (i) {
        o === "high" && (i.priority = "high", i.scheduledTime = Date.now());
        return;
      }
      const n = {
        routeId: t,
        priority: o,
        scheduledTime: Date.now(),
        attempts: 0
      };
      this.mergeQueue.push(n), this.processQueue();
    }
    async processQueue() {
      if (!(this.isProcessing || this.mergeQueue.length === 0)) {
        this.isProcessing = true;
        try {
          for (this.mergeQueue.sort((t, o) => {
            const i = {
              high: 0,
              normal: 1,
              low: 2
            };
            return i[t.priority] !== i[o.priority] ? i[t.priority] - i[o.priority] : t.scheduledTime - o.scheduledTime;
          }); this.mergeQueue.length > 0; ) {
            const t = this.mergeQueue.shift();
            try {
              await this.mergeRoute(t.routeId), t.attempts = 0;
            } catch (o) {
              console.error(`[MergeProcessor] Merge failed for route ${t.routeId}:`, o), t.attempts++, t.attempts < Zo.MAX_RETRIES ? (t.scheduledTime = Date.now() + Zo.RETRY_BASE_DELAY_MS * Math.pow(2, t.attempts), this.mergeQueue.push(t)) : await this.recordMergeFailure(t.routeId, o);
            }
          }
        } finally {
          this.isProcessing = false;
        }
      }
    }
    async mergeRoute(t) {
      const o = performance.now(), [i, n, s] = await Promise.all([
        Zi("sketches"),
        En().getUnmergedEntries(t),
        En().getMetadata(t)
      ]);
      if (!i || !s) throw new Error(`Missing data for route ${t}`);
      if (n.length === 0) return;
      let l = 0, h = 0;
      for (; h < n.length; ) {
        const g = Math.min(h + Iw, n.length), p = n.slice(h, g);
        await this.mergeRouteBatch(t, i, p, s, h === 0, g === n.length), l += p.length, h = g, h < n.length && await new Promise((R) => setTimeout(R, 0));
      }
      this.mergeCount++, this.lastMergeTime = Date.now();
      const f = performance.now() - o;
      console.info(`[MergeProcessor] Merged ${l} points into route ${t} in ${f.toFixed(2)}ms`);
    }
    async mergeRouteBatch(t, o, i, n, s, l) {
      if (i.length === 0) return;
      const f = {
        id: crypto.randomUUID(),
        routeId: t,
        startSequence: i[0].sequence,
        endSequence: i[i.length - 1].sequence,
        pointCount: i.length,
        distanceAdded: 0,
        mergeTime: Date.now(),
        status: "pending"
      }, g = o.map((ne) => ys.fromStorage(ne)), p = g.findIndex((ne) => ne.routes.routes.some((ee) => ee.id === t));
      if (p === -1) throw new Error(`Route ${t} not found in sketches`);
      const R = g[p].routes.routes.findIndex((ne) => ne.id === t), y = g[p].routes.routes[R], N = y.points.length > 0 ? y.points[y.points.length - 1] : null;
      let M = 0;
      const H = [];
      for (let ne = 0; ne < i.length; ne++) {
        const ee = i[ne], q = ne === 0 && N ? N : i[ne - 1].point, j = Oc({
          longitude: q.longitude,
          latitude: q.latitude
        }, {
          longitude: ee.point.longitude,
          latitude: ee.point.latitude
        });
        M += j, ee.distanceIncrement = j, H.push(ee.point);
      }
      y.points.push(...H), y.meta.distance = (y.meta.distance || 0) + M, y.meta.modification_timestamp = Date.now(), i.forEach((ne) => ne.merged = true), f.distanceAdded = M, await this.saveMergeTransaction(g, t, i, n, f), l && await En().cleanupMergedEntries(t);
    }
    async saveMergeTransaction(t, o, i, n, s) {
      const l = {
        sketches: JSON.parse(JSON.stringify(t.map((h) => h.toStorage()))),
        logEntries: JSON.parse(JSON.stringify(i)),
        metadata: JSON.parse(JSON.stringify(n))
      };
      try {
        n.unmergedCount -= i.length, n.lastMergeTime = Date.now();
        const h = [
          ht("sketches", t.map((f) => f.toStorage())),
          ht(`route:${o}:log`, i),
          ht(`route:${o}:metadata`, n),
          ht(`route:${o}:batches:${s.id}`, s)
        ];
        await Promise.all(h), s.status = "completed", await ht(`route:${o}:batches:${s.id}`, s);
      } catch (h) {
        throw await Promise.all([
          ht("sketches", l.sketches),
          ht(`route:${o}:log`, l.logEntries),
          ht(`route:${o}:metadata`, l.metadata)
        ]), s.status = "failed", s.error = h instanceof Error ? h.message : "Unknown error", await ht(`route:${o}:batches:${s.id}`, s), h;
      }
    }
    async recordMergeFailure(t, o) {
      const i = o instanceof Error ? o.message : String(o), n = `route:${t}:merge:lastFailure`;
      try {
        await ht(n, {
          timestamp: Date.now(),
          error: i,
          attempts: 3
        }), console.error(`[MergeProcessor] Merge failed for route ${t} after max retries:`, o);
      } catch (s) {
        console.error(`[MergeProcessor] Failed to record merge failure for route ${t}:`, o), console.error("[MergeProcessor] Also failed to save failure record:", s);
      }
    }
    async forceMerge(t) {
      (await En().getUnmergedEntries(t)).length > 0 && await this.mergeRoute(t);
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
  }, __publicField(_a2, "instance"), _a2);
  OL = Ni.getInstance();
  class zu {
    constructor() {
      __publicField(this, "locks", /* @__PURE__ */ new Map());
      __publicField(this, "lockTimeout", 3e4);
      __publicField(this, "cleanupInterval", null);
      typeof setInterval < "u" && (this.cleanupInterval = setInterval(() => this.cleanupStaleLocks(), 6e4));
    }
    acquire(t) {
      return new Promise((o) => {
        const i = () => {
          const s = this.locks.get(t);
          if (s) if (s.timeoutHandle && clearTimeout(s.timeoutHandle), s.queue.length > 0) {
            const l = s.queue.shift();
            s.createdAt = Date.now(), s.timeoutHandle = this.setupLockTimeout(t), l(i);
          } else this.locks.delete(t);
        }, n = this.locks.get(t);
        if (n) n.queue.push(o);
        else {
          const s = {
            queue: [],
            createdAt: Date.now(),
            timeoutHandle: this.setupLockTimeout(t)
          };
          this.locks.set(t, s), o(i);
        }
      });
    }
    setupLockTimeout(t) {
      return setTimeout(() => {
        const o = this.locks.get(t);
        o && (console.warn(`[AsyncMutex] Lock for key "${t}" exceeded timeout (${this.lockTimeout}ms), forcing cleanup`), o.queue = [], this.locks.delete(t));
      }, this.lockTimeout);
    }
    cleanupStaleLocks() {
      const t = Date.now(), o = [];
      for (const [i, n] of this.locks.entries()) t - n.createdAt > this.lockTimeout && (console.warn(`[AsyncMutex] Removing stale lock for key "${i}"`), n.timeoutHandle && clearTimeout(n.timeoutHandle), o.push(i));
      o.forEach((i) => this.locks.delete(i));
    }
    isLocked(t) {
      return this.locks.has(t);
    }
    destroy() {
      for (const t of this.locks.values()) t.timeoutHandle && clearTimeout(t.timeoutHandle);
      this.locks.clear(), typeof clearInterval < "u" && this.cleanupInterval && clearInterval(this.cleanupInterval);
    }
  }
  class $u {
    constructor(t) {
      __publicField(this, "buffer");
      __publicField(this, "index", 0);
      __publicField(this, "isFull", false);
      this.capacity = t, this.buffer = [];
    }
    push(t) {
      this.buffer.length < this.capacity ? this.buffer.push(t) : (this.buffer[this.index] = t, this.index = (this.index + 1) % this.capacity, this.isFull = true);
    }
    toArray() {
      return this.isFull ? [
        ...this.buffer.slice(this.index),
        ...this.buffer.slice(0, this.index)
      ] : [
        ...this.buffer
      ];
    }
    get length() {
      return this.buffer.length;
    }
    clear() {
      this.buffer = [], this.index = 0, this.isFull = false;
    }
  }
  const ja = "wal:emergency:";
  class Ow {
    constructor() {
      __publicField(this, "writeBuffer", /* @__PURE__ */ new Map());
      __publicField(this, "sequenceCache", /* @__PURE__ */ new Map());
      __publicField(this, "sequenceInitPromises", /* @__PURE__ */ new Map());
      __publicField(this, "flushMutex", new zu());
      __publicField(this, "storageMutex", new zu());
      __publicField(this, "pendingOperations", /* @__PURE__ */ new Set());
      __publicField(this, "pendingVisibilityFlush", null);
      __publicField(this, "appendLatencyBuffer", new $u(Zo.MAX_LATENCY_SAMPLES));
      __publicField(this, "mergeDurationBuffer", new $u(Zo.MAX_LATENCY_SAMPLES));
      __publicField(this, "metrics", {
        logSizePerRoute: {},
        failedAppends: 0,
        failedMerges: 0,
        recoveryEvents: 0,
        mergeFrequency: 0,
        compressionRatio: 1,
        memoryUsage: 0
      });
      __publicField(this, "periodicFlushInterval", null);
      __publicField(this, "isShuttingDown", false);
      __publicField(this, "_mergeProcessor", null);
      __publicField(this, "handleBeforeUnload", (t) => {
        this.getTotalBufferSize() > 0 && this.flushAllBuffersSync();
      });
      __publicField(this, "handleVisibilityChange", () => {
        document.visibilityState === "hidden" && !this.pendingVisibilityFlush && (this.pendingVisibilityFlush = this.flushAllBuffers().catch(console.error).finally(() => {
          this.pendingVisibilityFlush = null;
        }));
      });
      this.setupLifecycleHandlers();
    }
    get mergeProcessor() {
      return this._mergeProcessor || (this._mergeProcessor = Ni.getInstance()), this._mergeProcessor;
    }
    setupLifecycleHandlers() {
      typeof window > "u" || (this.recoverEmergencyFlush().catch(console.error), this.periodicFlushInterval = setInterval(() => this.flushAllBuffers(), Zo.FLUSH_DELAY_MS), window.addEventListener("beforeunload", this.handleBeforeUnload), document.addEventListener("visibilitychange", this.handleVisibilityChange));
    }
    async appendPoint(t, o) {
      if (this.validateAppendInput(t, o), this.isShuttingDown) throw new Error("WAL is shutting down");
      const i = this.doAppendPoint(t, o);
      this.pendingOperations.add(i);
      try {
        await i;
      } finally {
        this.pendingOperations.delete(i);
      }
    }
    async doAppendPoint(t, o) {
      const i = performance.now();
      try {
        const n = await this.createLogEntry(t, o);
        this.addToBuffer(t, n), this.getBufferSize(t) >= Zo.FLUSH_THRESHOLD && await this.flushBuffer(t), this.scheduleMerge(t);
      } catch (n) {
        throw this.metrics.failedAppends++, console.error(`[WAL] Failed to append point to route ${t}:`, n), n;
      } finally {
        const n = performance.now() - i;
        this.appendLatencyBuffer.push(n);
      }
    }
    validateAppendInput(t, o) {
      if (!t || typeof t != "string" || t.trim() === "") throw new Error("Invalid routeId: must be a non-empty string");
      if (!o || typeof o != "object") throw new Error("Invalid point: must be an object");
      if (typeof o.latitude != "number" || !Number.isFinite(o.latitude)) throw new Error("Invalid point.latitude: must be a finite number");
      if (typeof o.longitude != "number" || !Number.isFinite(o.longitude)) throw new Error("Invalid point.longitude: must be a finite number");
      if (o.latitude < -90 || o.latitude > 90) throw new Error("Invalid point.latitude: must be between -90 and 90");
      if (o.longitude < -180 || o.longitude > 180) throw new Error("Invalid point.longitude: must be between -180 and 180");
    }
    async createLogEntry(t, o) {
      const i = await this.getNextSequence(t);
      return rw(t, o, i);
    }
    async getNextSequence(t) {
      if (this.sequenceCache.has(t)) {
        const n = this.sequenceCache.get(t);
        return this.sequenceCache.set(t, n + 1), n;
      }
      if (!this.sequenceInitPromises.has(t)) {
        const n = this.initializeSequence(t).finally(() => {
          this.sequenceInitPromises.delete(t);
        });
        this.sequenceInitPromises.set(t, n);
      }
      await this.sequenceInitPromises.get(t);
      const o = this.sequenceCache.get(t);
      if (o === void 0) throw new Error(`Sequence initialization failed for route ${t}: cache not populated`);
      const i = o;
      return this.sequenceCache.set(t, i + 1), i;
    }
    async initializeSequence(t) {
      const o = await this.getOrCreateMetadata(t), i = o.totalPoints > 0 ? o.lastSequence + 1 : o.lastSequence;
      this.sequenceCache.set(t, i);
    }
    addToBuffer(t, o) {
      this.writeBuffer.has(t) || this.writeBuffer.set(t, []), this.writeBuffer.get(t).push(o);
    }
    async flushBuffer(t) {
      const o = await this.flushMutex.acquire(t);
      try {
        await this.doFlush(t);
      } finally {
        o();
      }
    }
    async doFlush(t) {
      const o = this.writeBuffer.get(t);
      if (!o || o.length === 0) return;
      const i = o.splice(0, o.length);
      if (i.length !== 0) try {
        const n = await this.storageMutex.acquire(`route:${t}`);
        try {
          const l = [
            ...await this.safeGetLog(t),
            ...i
          ];
          await ht(`route:${t}:log`, l);
          try {
            const h = await this.getOrCreateMetadata(t);
            h.unmergedCount += i.length, h.totalPoints += i.length, h.lastSequence = i[i.length - 1].sequence, await ht(`route:${t}:metadata`, h);
          } catch (h) {
            console.warn(`[WAL] Metadata update failed for route ${t}, will reconcile:`, h), this.metrics.recoveryEvents++;
          }
          try {
            await this.markRouteActive(t);
          } catch (h) {
            console.warn(`[WAL] Failed to mark route ${t} as active:`, h);
          }
          this.updateLogSize(t, l.length);
        } finally {
          n();
        }
      } catch (n) {
        const s = this.writeBuffer.get(t) ?? [];
        throw this.writeBuffer.set(t, [
          ...i,
          ...s
        ]), n;
      }
    }
    async safeStorageGet(t) {
      try {
        return await Zi(t);
      } catch (o) {
        return console.error(`[WAL] Failed to read from storage key ${t}:`, o), null;
      }
    }
    async safeGetLog(t) {
      const o = await this.safeStorageGet(`route:${t}:log`);
      if (o === null) return [];
      if (!Array.isArray(o)) return console.warn(`[WAL] Corrupted log for route ${t}: not an array`), this.metrics.recoveryEvents++, [];
      const i = [];
      for (const n of o) try {
        i.push(Wa(n));
      } catch (s) {
        console.warn(`[WAL] Invalid log entry for route ${t}:`, s), this.metrics.recoveryEvents++;
      }
      return i;
    }
    async getOrCreateMetadata(t) {
      const o = await Zi(`route:${t}:metadata`);
      if (o) try {
        return Wu(o);
      } catch {
        console.warn(`[WAL] Invalid metadata for route ${t}, recreating`), this.metrics.recoveryEvents++;
      }
      const i = {
        routeId: t,
        lastMergeTime: Date.now(),
        unmergedCount: 0,
        lastSequence: 0,
        totalPoints: 0
      };
      return await ht(`route:${t}:metadata`, i), i;
    }
    async markRouteActive(t) {
      const o = await this.storageMutex.acquire("wal:activeRoutes");
      try {
        const i = await Zi("wal:activeRoutes") ?? [];
        i.includes(t) || (i.push(t), await ht("wal:activeRoutes", i));
      } finally {
        o();
      }
    }
    scheduleMerge(t) {
      typeof window > "u" || typeof document > "u" || this.scheduleMergeWithRetry(t, 0);
    }
    scheduleMergeWithRetry(t, o) {
      if (this.mergeProcessor) this.mergeProcessor.scheduleMerge(t);
      else if (console.warn(`[WAL] Could not schedule merge for route ${t} (attempt ${o + 1}):`, "merge processor not initialized"), o < Zo.MAX_RETRIES) {
        const i = Zo.RETRY_BASE_DELAY_MS * Math.pow(2, o);
        setTimeout(() => {
          this.scheduleMergeWithRetry(t, o + 1);
        }, i);
      } else console.error(`[WAL] Failed to schedule merge for route ${t} after ${Zo.MAX_RETRIES} attempts`), this.metrics.failedMerges++;
    }
    async flushAllBuffers() {
      const t = Array.from(this.writeBuffer.keys());
      await Promise.allSettled(t.map((o) => this.flushBuffer(o)));
    }
    flushAllBuffersSync() {
      if (!(typeof localStorage > "u")) {
        for (const [t, o] of this.writeBuffer.entries()) if (o.length !== 0) try {
          const i = `${ja}${t}`, n = localStorage.getItem(i), s = n ? JSON.parse(n) : [], l = [
            ...s,
            ...o
          ], h = JSON.stringify(l), f = 1024 * 1024;
          if (h.length > f) {
            const g = `[WAL] Emergency flush data exceeds storage limit (${h.length} bytes > ${f} bytes) for route ${t}. Attempting to store ${o.length} new entries and ${s.length} existing entries. Data loss is imminent. Consider increasing storage quota or implementing compression.`;
            console.error(g);
            try {
              const p = l.slice(-50), R = JSON.stringify(p);
              R.length <= f ? (localStorage.setItem(i, R), console.warn(`[WAL] Stored only last 50 entries for route ${t} due to size constraints`)) : console.error(`[WAL] CRITICAL: Cannot store even 50 recent entries for route ${t}`);
            } catch (p) {
              console.error(`[WAL] Fallback storage also failed for route ${t}:`, p);
            }
          } else localStorage.setItem(i, h);
        } catch (i) {
          console.error("[WAL] Emergency flush failed for route", t, i);
        }
      }
    }
    async recoverEmergencyFlush() {
      if (typeof localStorage > "u") return;
      const t = [];
      for (let o = 0; o < localStorage.length; o++) {
        const i = localStorage.key(o);
        (i == null ? void 0 : i.startsWith(ja)) && t.push(i);
      }
      for (const o of t) {
        const i = o.slice(ja.length);
        try {
          const n = localStorage.getItem(o);
          if (!n) continue;
          const s = JSON.parse(n), l = [];
          for (const h of s) try {
            l.push(Wa(h));
          } catch {
          }
          if (l.length > 0) {
            const h = await this.storageMutex.acquire(`route:${i}`);
            try {
              const f = await this.safeGetLog(i), g = new Set(f.map((R) => R.id)), p = l.filter((R) => !g.has(R.id));
              if (p.length > 0) {
                const R = [
                  ...f,
                  ...p
                ];
                R.sort((y, N) => y.sequence - N.sequence), await ht(`route:${i}:log`, R), console.debug(`[WAL] Recovered ${p.length} entries for route ${i}`), this.metrics.recoveryEvents++;
              }
            } finally {
              h();
            }
          }
          localStorage.removeItem(o);
        } catch (n) {
          console.error(`[WAL] Failed to recover emergency data for ${o}:`, n), localStorage.removeItem(o);
        }
      }
    }
    async getUnmergedEntries(t) {
      const o = await this.storageMutex.acquire(`route:${t}`);
      try {
        return (await this.safeGetLog(t)).filter((n) => !n.merged);
      } finally {
        o();
      }
    }
    async markEntriesAsMerged(t, o) {
      if (o.length === 0) return;
      const i = await this.storageMutex.acquire(`route:${t}`);
      try {
        const n = await this.safeGetLog(t), s = new Set(o.map((f) => f.id));
        let l = 0;
        for (const f of n) s.has(f.id) && !f.merged && (f.merged = true, l++);
        await ht(`route:${t}:log`, n);
        const h = await this.getOrCreateMetadata(t);
        h.unmergedCount = Math.max(0, h.unmergedCount - l), h.lastMergeTime = Date.now(), await ht(`route:${t}:metadata`, h);
      } finally {
        i();
      }
    }
    async cleanupMergedEntries(t) {
      const o = await this.storageMutex.acquire(`route:${t}`);
      try {
        const i = await this.safeGetLog(t), n = i.filter((s) => !s.merged);
        if (n.length < i.length) {
          await ht(`route:${t}:log`, n), this.updateLogSize(t, n.length);
          const s = await this.getOrCreateMetadata(t);
          s.unmergedCount = n.length, await ht(`route:${t}:metadata`, s);
        }
      } finally {
        o();
      }
    }
    async cleanupRoute(t) {
      const o = await this.storageMutex.acquire(`route:${t}`);
      try {
        const i = this.writeBuffer.has(t), n = this.sequenceCache.has(t), s = t in this.metrics.logSizePerRoute;
        this.sequenceCache.delete(t), this.writeBuffer.delete(t), delete this.metrics.logSizePerRoute[t];
        const l = await this.storageMutex.acquire("wal:activeRoutes");
        try {
          const h = await Zi("wal:activeRoutes") ?? [], f = h.filter((g) => g !== t);
          f.length !== h.length && await ht("wal:activeRoutes", f);
        } finally {
          l();
        }
        (i || n || s) && console.debug(`[WAL] Cleaned up route ${t}`);
      } finally {
        o();
      }
    }
    updateLogSize(t, o) {
      this.metrics.logSizePerRoute[t] = o;
    }
    recordMergeDuration(t) {
      this.mergeDurationBuffer.push(t);
    }
    getMetrics() {
      return {
        appendLatency: this.appendLatencyBuffer.toArray(),
        mergeDuration: this.mergeDurationBuffer.toArray(),
        logSizePerRoute: {
          ...this.metrics.logSizePerRoute
        },
        failedAppends: this.metrics.failedAppends,
        failedMerges: this.metrics.failedMerges,
        recoveryEvents: this.metrics.recoveryEvents,
        mergeFrequency: this.metrics.mergeFrequency,
        compressionRatio: this.metrics.compressionRatio,
        memoryUsage: this.metrics.memoryUsage
      };
    }
    getBufferSize(t) {
      var _a3;
      return ((_a3 = this.writeBuffer.get(t)) == null ? void 0 : _a3.length) ?? 0;
    }
    getTotalBufferSize() {
      let t = 0;
      for (const o of this.writeBuffer.values()) t += o.length;
      return t;
    }
    async getMetadata(t) {
      try {
        const o = await Zi(`route:${t}:metadata`);
        return o ? Wu(o) : null;
      } catch {
        return null;
      }
    }
    hasPendingWrites(t) {
      const o = this.writeBuffer.get(t);
      return o !== void 0 && o.length > 0;
    }
    isFlushInProgress(t) {
      return this.flushMutex.isLocked(t);
    }
    async shutdown() {
      this.isShuttingDown = true, this.periodicFlushInterval && (clearInterval(this.periodicFlushInterval), this.periodicFlushInterval = null), typeof window < "u" && window.removeEventListener("beforeunload", this.handleBeforeUnload), typeof document < "u" && document.removeEventListener("visibilitychange", this.handleVisibilityChange), this.pendingOperations.size > 0 && (await Promise.allSettled(this.pendingOperations), this.pendingOperations.clear()), this.pendingVisibilityFlush && (await this.pendingVisibilityFlush, this.pendingVisibilityFlush = null), await this.flushAllBuffers(), this.sequenceCache.clear(), this.sequenceInitPromises.clear(), this.writeBuffer.clear(), this._mergeProcessor = null, this.appendLatencyBuffer.clear(), this.mergeDurationBuffer.clear(), this.flushMutex.destroy(), this.storageMutex.destroy();
    }
    async performRecovery() {
      const t = await Zi("wal:activeRoutes") ?? [];
      let o = 0, i = 0;
      for (const n of t) {
        const s = await this.storageMutex.acquire(`route:${n}`);
        try {
          const l = await this.safeStorageGet(`route:${n}:log`) ?? [], h = [];
          let f = 0;
          if (!Array.isArray(l)) console.warn(`[WAL] Log for route ${n} is not an array, resetting`), await ht(`route:${n}:log`, []), f = 1, i += f;
          else {
            for (const N of l) try {
              h.push(Wa(N));
            } catch {
              f++;
            }
            f > 0 && (await ht(`route:${n}:log`, h), i += f);
          }
          const g = await this.getOrCreateMetadata(n), p = h.filter((N) => !N.merged).length, R = h.length > 0 ? Math.max(...h.map((N) => N.sequence)) : 0;
          (g.unmergedCount !== p || g.totalPoints !== h.length || g.lastSequence < R || f > 0) && (g.unmergedCount = p, g.totalPoints = h.length, g.lastSequence = R, await ht(`route:${n}:metadata`, g), this.metrics.recoveryEvents++, o++), this.updateLogSize(n, h.length);
        } catch (l) {
          console.error(`[WAL] Recovery failed for route ${n}:`, l);
        } finally {
          s();
        }
      }
      return {
        routesRecovered: o,
        entriesRemoved: i
      };
    }
  }
  let xa = null;
  function En() {
    return xa || (xa = new Ow()), xa;
  }
  RL = En();
  window.addEventListener("beforeunload", async () => {
    try {
      await En().shutdown();
    } catch (e) {
      console.error("WAL shutdown failed:", e);
    }
  });
  function tl(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const o of e.split(",")) t[o] = 1;
    return (o) => o in t;
  }
  const ke = {}, On = [], No = () => {
  }, Qd = () => false, na = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ol = (e) => e.startsWith("onUpdate:"), At = Object.assign, il = (e, t) => {
    const o = e.indexOf(t);
    o > -1 && e.splice(o, 1);
  }, Rw = Object.prototype.hasOwnProperty, xe = (e, t) => Rw.call(e, t), we = Array.isArray, Rn = (e) => Fr(e) === "[object Map]", ef = (e) => Fr(e) === "[object Set]", Aw = (e) => Fr(e) === "[object RegExp]", be = (e) => typeof e == "function", lt = (e) => typeof e == "string", hi = (e) => typeof e == "symbol", Ke = (e) => e !== null && typeof e == "object", tf = (e) => (Ke(e) || be(e)) && be(e.then) && be(e.catch), of = Object.prototype.toString, Fr = (e) => of.call(e), Sw = (e) => Fr(e).slice(8, -1), nf = (e) => Fr(e) === "[object Object]", ra = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, lr = tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), sa = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((o) => t[o] || (t[o] = e(o)));
  }, ww = /-\w/g, uo = sa((e) => e.replace(ww, (t) => t.slice(1).toUpperCase())), Nw = /\B([A-Z])/g, di = sa((e) => e.replace(Nw, "-$1").toLowerCase()), aa = sa((e) => e.charAt(0).toUpperCase() + e.slice(1)), za = sa((e) => e ? `on${aa(e)}` : ""), Xt = (e, t) => !Object.is(e, t), ur = (e, ...t) => {
    for (let o = 0; o < e.length; o++) e[o](...t);
  }, rf = (e, t, o, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: o
    });
  }, yw = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, bw = (e) => {
    const t = lt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Vu;
  const ca = () => Vu || (Vu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  la = function(e) {
    if (we(e)) {
      const t = {};
      for (let o = 0; o < e.length; o++) {
        const i = e[o], n = lt(i) ? Hw(i) : la(i);
        if (n) for (const s in n) t[s] = n[s];
      }
      return t;
    } else if (lt(e) || Ke(e)) return e;
  };
  const Lw = /;(?![^(]*\))/g, vw = /:([^]+)/, Cw = /\/\*[^]*?\*\//g;
  function Hw(e) {
    const t = {};
    return e.replace(Cw, "").split(Lw).forEach((o) => {
      if (o) {
        const i = o.split(vw);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  nl = function(e) {
    let t = "";
    if (lt(e)) t = e;
    else if (we(e)) for (let o = 0; o < e.length; o++) {
      const i = nl(e[o]);
      i && (t += i + " ");
    }
    else if (Ke(e)) for (const o in e) e[o] && (t += o + " ");
    return t.trim();
  };
  const Dw = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Mw = tl(Dw);
  function sf(e) {
    return !!e || e === "";
  }
  let af, cf, $a;
  af = (e) => !!(e && e.__v_isRef === true);
  qo = (e) => lt(e) ? e : e == null ? "" : we(e) || Ke(e) && (e.toString === of || !be(e.toString)) ? af(e) ? qo(e.value) : JSON.stringify(e, cf, 2) : String(e);
  cf = (e, t) => af(t) ? cf(e, t.value) : Rn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((o, [i, n], s) => (o[$a(i, s) + " =>"] = n, o), {})
  } : ef(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((o) => $a(o))
  } : hi(t) ? $a(t) : Ke(t) && !we(t) && !nf(t) ? String(t) : t;
  $a = (e, t = "") => {
    var o;
    return hi(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e;
  };
  function Fw(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Wt;
  class lf {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Wt, !t && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, o;
        if (this.scopes) for (t = 0, o = this.scopes.length; t < o; t++) this.scopes[t].pause();
        for (t = 0, o = this.effects.length; t < o; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, o;
        if (this.scopes) for (t = 0, o = this.scopes.length; t < o; t++) this.scopes[t].resume();
        for (t = 0, o = this.effects.length; t < o; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const o = Wt;
        try {
          return Wt = this, t();
        } finally {
          Wt = o;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Wt, Wt = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Wt = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let o, i;
        for (o = 0, i = this.effects.length; o < i; o++) this.effects[o].stop();
        for (this.effects.length = 0, o = 0, i = this.cleanups.length; o < i; o++) this.cleanups[o]();
        if (this.cleanups.length = 0, this.scopes) {
          for (o = 0, i = this.scopes.length; o < i; o++) this.scopes[o].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const n = this.parent.scopes.pop();
          n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function uf(e) {
    return new lf(e);
  }
  hf = function() {
    return Wt;
  };
  Pw = function(e, t = false) {
    Wt && Wt.cleanups.push(e);
  };
  let Qe;
  const Va = /* @__PURE__ */ new WeakSet();
  class df {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Wt && Wt.active && Wt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Va.has(this) && (Va.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pf(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, qu(this), Tf(this);
      const t = Qe, o = yo;
      Qe = this, yo = true;
      try {
        return this.fn();
      } finally {
        gf(this), Qe = t, yo = o, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) al(t);
        this.deps = this.depsTail = void 0, qu(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Va.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Rc(this) && this.run();
    }
    get dirty() {
      return Rc(this);
    }
  }
  let ff = 0, hr, dr;
  function pf(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = dr, dr = e;
      return;
    }
    e.next = hr, hr = e;
  }
  function rl() {
    ff++;
  }
  function sl() {
    if (--ff > 0) return;
    if (dr) {
      let t = dr;
      for (dr = void 0; t; ) {
        const o = t.next;
        t.next = void 0, t.flags &= -9, t = o;
      }
    }
    let e;
    for (; hr; ) {
      let t = hr;
      for (hr = void 0; t; ) {
        const o = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
        t = o;
      }
    }
    if (e) throw e;
  }
  function Tf(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function gf(e) {
    let t, o = e.depsTail, i = o;
    for (; i; ) {
      const n = i.prevDep;
      i.version === -1 ? (i === o && (o = n), al(i), _w(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
    }
    e.deps = t, e.depsTail = o;
  }
  function Rc(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (mf(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function mf(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Nr) || (e.globalVersion = Nr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Rc(e)))) return;
    e.flags |= 2;
    const t = e.dep, o = Qe, i = yo;
    Qe = e, yo = true;
    try {
      Tf(e);
      const n = e.fn(e._value);
      (t.version === 0 || Xt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
    } catch (n) {
      throw t.version++, n;
    } finally {
      Qe = o, yo = i, gf(e), e.flags &= -3;
    }
  }
  function al(e, t = false) {
    const { dep: o, prevSub: i, nextSub: n } = e;
    if (i && (i.nextSub = n, e.prevSub = void 0), n && (n.prevSub = i, e.nextSub = void 0), o.subs === e && (o.subs = i, !i && o.computed)) {
      o.computed.flags &= -5;
      for (let s = o.computed.deps; s; s = s.nextDep) al(s, true);
    }
    !t && !--o.sc && o.map && o.map.delete(o.key);
  }
  function _w(e) {
    const { prevDep: t, nextDep: o } = e;
    t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
  }
  let yo = true;
  const Ef = [];
  function si() {
    Ef.push(yo), yo = false;
  }
  function ai() {
    const e = Ef.pop();
    yo = e === void 0 ? true : e;
  }
  function qu(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const o = Qe;
      Qe = void 0;
      try {
        t();
      } finally {
        Qe = o;
      }
    }
  }
  let Nr = 0;
  class Uw {
    constructor(t, o) {
      this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class ua {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Qe || !yo || Qe === this.computed) return;
      let o = this.activeLink;
      if (o === void 0 || o.sub !== Qe) o = this.activeLink = new Uw(Qe, this), Qe.deps ? (o.prevDep = Qe.depsTail, Qe.depsTail.nextDep = o, Qe.depsTail = o) : Qe.deps = Qe.depsTail = o, If(o);
      else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
        const i = o.nextDep;
        i.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = i), o.prevDep = Qe.depsTail, o.nextDep = void 0, Qe.depsTail.nextDep = o, Qe.depsTail = o, Qe.deps === o && (Qe.deps = i);
      }
      return o;
    }
    trigger(t) {
      this.version++, Nr++, this.notify(t);
    }
    notify(t) {
      rl();
      try {
        for (let o = this.subs; o; o = o.prevSub) o.sub.notify() && o.sub.dep.notify();
      } finally {
        sl();
      }
    }
  }
  function If(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) If(i);
      }
      const o = e.dep.subs;
      o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
    }
  }
  const Ls = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ Symbol(""), Ac = /* @__PURE__ */ Symbol(""), yr = /* @__PURE__ */ Symbol("");
  function kt(e, t, o) {
    if (yo && Qe) {
      let i = Ls.get(e);
      i || Ls.set(e, i = /* @__PURE__ */ new Map());
      let n = i.get(o);
      n || (i.set(o, n = new ua()), n.map = i, n.key = o), n.track();
    }
  }
  function Qo(e, t, o, i, n, s) {
    const l = Ls.get(e);
    if (!l) {
      Nr++;
      return;
    }
    const h = (f) => {
      f && f.trigger();
    };
    if (rl(), t === "clear") l.forEach(h);
    else {
      const f = we(e), g = f && ra(o);
      if (f && o === "length") {
        const p = Number(i);
        l.forEach((R, y) => {
          (y === "length" || y === yr || !hi(y) && y >= p) && h(R);
        });
      } else switch ((o !== void 0 || l.has(void 0)) && h(l.get(o)), g && h(l.get(yr)), t) {
        case "add":
          f ? g && h(l.get("length")) : (h(l.get(tn)), Rn(e) && h(l.get(Ac)));
          break;
        case "delete":
          f || (h(l.get(tn)), Rn(e) && h(l.get(Ac)));
          break;
        case "set":
          Rn(e) && h(l.get(tn));
          break;
      }
    }
    sl();
  }
  function Ww(e, t) {
    const o = Ls.get(e);
    return o && o.get(t);
  }
  function fn(e) {
    const t = We(e);
    return t === e ? t : (kt(t, "iterate", yr), lo(e) ? t : t.map(Lo));
  }
  function ha(e) {
    return kt(e = We(e), "iterate", yr), e;
  }
  function Ri(e, t) {
    return ci(e) ? ni(e) ? _n(Lo(t)) : _n(t) : Lo(t);
  }
  const kw = {
    __proto__: null,
    [Symbol.iterator]() {
      return qa(this, Symbol.iterator, (e) => Ri(this, e));
    },
    concat(...e) {
      return fn(this).concat(...e.map((t) => we(t) ? fn(t) : t));
    },
    entries() {
      return qa(this, "entries", (e) => (e[1] = Ri(this, e[1]), e));
    },
    every(e, t) {
      return zo(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return zo(this, "filter", e, t, (o) => o.map((i) => Ri(this, i)), arguments);
    },
    find(e, t) {
      return zo(this, "find", e, t, (o) => Ri(this, o), arguments);
    },
    findIndex(e, t) {
      return zo(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return zo(this, "findLast", e, t, (o) => Ri(this, o), arguments);
    },
    findLastIndex(e, t) {
      return zo(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return zo(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Za(this, "includes", e);
    },
    indexOf(...e) {
      return Za(this, "indexOf", e);
    },
    join(e) {
      return fn(this).join(e);
    },
    lastIndexOf(...e) {
      return Za(this, "lastIndexOf", e);
    },
    map(e, t) {
      return zo(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Qn(this, "pop");
    },
    push(...e) {
      return Qn(this, "push", e);
    },
    reduce(e, ...t) {
      return Zu(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Zu(this, "reduceRight", e, t);
    },
    shift() {
      return Qn(this, "shift");
    },
    some(e, t) {
      return zo(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Qn(this, "splice", e);
    },
    toReversed() {
      return fn(this).toReversed();
    },
    toSorted(e) {
      return fn(this).toSorted(e);
    },
    toSpliced(...e) {
      return fn(this).toSpliced(...e);
    },
    unshift(...e) {
      return Qn(this, "unshift", e);
    },
    values() {
      return qa(this, "values", (e) => Ri(this, e));
    }
  };
  function qa(e, t, o) {
    const i = ha(e), n = i[t]();
    return i !== e && !lo(e) && (n._next = n.next, n.next = () => {
      const s = n._next();
      return s.done || (s.value = o(s.value)), s;
    }), n;
  }
  const Gw = Array.prototype;
  function zo(e, t, o, i, n, s) {
    const l = ha(e), h = l !== e && !lo(e), f = l[t];
    if (f !== Gw[t]) {
      const R = f.apply(e, s);
      return h ? Lo(R) : R;
    }
    let g = o;
    l !== e && (h ? g = function(R, y) {
      return o.call(this, Ri(e, R), y, e);
    } : o.length > 2 && (g = function(R, y) {
      return o.call(this, R, y, e);
    }));
    const p = f.call(l, g, i);
    return h && n ? n(p) : p;
  }
  function Zu(e, t, o, i) {
    const n = ha(e);
    let s = o;
    return n !== e && (lo(e) ? o.length > 3 && (s = function(l, h, f) {
      return o.call(this, l, h, f, e);
    }) : s = function(l, h, f) {
      return o.call(this, l, Ri(e, h), f, e);
    }), n[t](s, ...i);
  }
  function Za(e, t, o) {
    const i = We(e);
    kt(i, "iterate", yr);
    const n = i[t](...o);
    return (n === -1 || n === false) && fa(o[0]) ? (o[0] = We(o[0]), i[t](...o)) : n;
  }
  function Qn(e, t, o = []) {
    si(), rl();
    const i = We(e)[t].apply(e, o);
    return sl(), ai(), i;
  }
  const Bw = tl("__proto__,__v_isRef,__isVue"), Of = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(hi));
  function Yw(e) {
    hi(e) || (e = String(e));
    const t = We(this);
    return kt(t, "has", e), t.hasOwnProperty(e);
  }
  class Rf {
    constructor(t = false, o = false) {
      this._isReadonly = t, this._isShallow = o;
    }
    get(t, o, i) {
      if (o === "__v_skip") return t.__v_skip;
      const n = this._isReadonly, s = this._isShallow;
      if (o === "__v_isReactive") return !n;
      if (o === "__v_isReadonly") return n;
      if (o === "__v_isShallow") return s;
      if (o === "__v_raw") return i === (n ? s ? Xw : Nf : s ? wf : Sf).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const l = we(t);
      if (!n) {
        let f;
        if (l && (f = kw[o])) return f;
        if (o === "hasOwnProperty") return Yw;
      }
      const h = Reflect.get(t, o, dt(t) ? t : i);
      if ((hi(o) ? Of.has(o) : Bw(o)) || (n || kt(t, "get", o), s)) return h;
      if (dt(h)) {
        const f = l && ra(o) ? h : h.value;
        return n && Ke(f) ? wc(f) : f;
      }
      return Ke(h) ? n ? wc(h) : da(h) : h;
    }
  }
  class Af extends Rf {
    constructor(t = false) {
      super(false, t);
    }
    set(t, o, i, n) {
      let s = t[o];
      const l = we(t) && ra(o);
      if (!this._isShallow) {
        const g = ci(s);
        if (!lo(i) && !ci(i) && (s = We(s), i = We(i)), !l && dt(s) && !dt(i)) return g || (s.value = i), true;
      }
      const h = l ? Number(o) < t.length : xe(t, o), f = Reflect.set(t, o, i, dt(t) ? t : n);
      return t === We(n) && (h ? Xt(i, s) && Qo(t, "set", o, i) : Qo(t, "add", o, i)), f;
    }
    deleteProperty(t, o) {
      const i = xe(t, o);
      t[o];
      const n = Reflect.deleteProperty(t, o);
      return n && i && Qo(t, "delete", o, void 0), n;
    }
    has(t, o) {
      const i = Reflect.has(t, o);
      return (!hi(o) || !Of.has(o)) && kt(t, "has", o), i;
    }
    ownKeys(t) {
      return kt(t, "iterate", we(t) ? "length" : tn), Reflect.ownKeys(t);
    }
  }
  class jw extends Rf {
    constructor(t = false) {
      super(true, t);
    }
    set(t, o) {
      return true;
    }
    deleteProperty(t, o) {
      return true;
    }
  }
  const xw = new Af(), zw = new jw(), $w = new Af(true);
  const Sc = (e) => e, Kr = (e) => Reflect.getPrototypeOf(e);
  function Vw(e, t, o) {
    return function(...i) {
      const n = this.__v_raw, s = We(n), l = Rn(s), h = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, g = n[e](...i), p = o ? Sc : t ? _n : Lo;
      return !t && kt(s, "iterate", f ? Ac : tn), {
        next() {
          const { value: R, done: y } = g.next();
          return y ? {
            value: R,
            done: y
          } : {
            value: h ? [
              p(R[0]),
              p(R[1])
            ] : p(R),
            done: y
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function Jr(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function qw(e, t) {
    const o = {
      get(n) {
        const s = this.__v_raw, l = We(s), h = We(n);
        e || (Xt(n, h) && kt(l, "get", n), kt(l, "get", h));
        const { has: f } = Kr(l), g = t ? Sc : e ? _n : Lo;
        if (f.call(l, n)) return g(s.get(n));
        if (f.call(l, h)) return g(s.get(h));
        s !== l && s.get(n);
      },
      get size() {
        const n = this.__v_raw;
        return !e && kt(We(n), "iterate", tn), n.size;
      },
      has(n) {
        const s = this.__v_raw, l = We(s), h = We(n);
        return e || (Xt(n, h) && kt(l, "has", n), kt(l, "has", h)), n === h ? s.has(n) : s.has(n) || s.has(h);
      },
      forEach(n, s) {
        const l = this, h = l.__v_raw, f = We(h), g = t ? Sc : e ? _n : Lo;
        return !e && kt(f, "iterate", tn), h.forEach((p, R) => n.call(s, g(p), g(R), l));
      }
    };
    return At(o, e ? {
      add: Jr("add"),
      set: Jr("set"),
      delete: Jr("delete"),
      clear: Jr("clear")
    } : {
      add(n) {
        !t && !lo(n) && !ci(n) && (n = We(n));
        const s = We(this);
        return Kr(s).has.call(s, n) || (s.add(n), Qo(s, "add", n, n)), this;
      },
      set(n, s) {
        !t && !lo(s) && !ci(s) && (s = We(s));
        const l = We(this), { has: h, get: f } = Kr(l);
        let g = h.call(l, n);
        g || (n = We(n), g = h.call(l, n));
        const p = f.call(l, n);
        return l.set(n, s), g ? Xt(s, p) && Qo(l, "set", n, s) : Qo(l, "add", n, s), this;
      },
      delete(n) {
        const s = We(this), { has: l, get: h } = Kr(s);
        let f = l.call(s, n);
        f || (n = We(n), f = l.call(s, n)), h && h.call(s, n);
        const g = s.delete(n);
        return f && Qo(s, "delete", n, void 0), g;
      },
      clear() {
        const n = We(this), s = n.size !== 0, l = n.clear();
        return s && Qo(n, "clear", void 0, void 0), l;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((n) => {
      o[n] = Vw(n, e, t);
    }), o;
  }
  function cl(e, t) {
    const o = qw(e, t);
    return (i, n, s) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? i : Reflect.get(xe(o, n) && n in i ? o : i, n, s);
  }
  const Zw = {
    get: cl(false, false)
  }, Kw = {
    get: cl(false, true)
  }, Jw = {
    get: cl(true, false)
  };
  const Sf = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakMap(), Nf = /* @__PURE__ */ new WeakMap(), Xw = /* @__PURE__ */ new WeakMap();
  function Qw(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function eN(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Qw(Sw(e));
  }
  da = function(e) {
    return ci(e) ? e : ll(e, false, xw, Zw, Sf);
  };
  tN = function(e) {
    return ll(e, false, $w, Kw, wf);
  };
  wc = function(e) {
    return ll(e, true, zw, Jw, Nf);
  };
  function ll(e, t, o, i, n) {
    if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = eN(e);
    if (s === 0) return e;
    const l = n.get(e);
    if (l) return l;
    const h = new Proxy(e, s === 2 ? i : o);
    return n.set(e, h), h;
  }
  function ni(e) {
    return ci(e) ? ni(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function ci(e) {
    return !!(e && e.__v_isReadonly);
  }
  function lo(e) {
    return !!(e && e.__v_isShallow);
  }
  function fa(e) {
    return e ? !!e.__v_raw : false;
  }
  We = function(e) {
    const t = e && e.__v_raw;
    return t ? We(t) : e;
  };
  ul = function(e) {
    return !xe(e, "__v_skip") && Object.isExtensible(e) && rf(e, "__v_skip", true), e;
  };
  const Lo = (e) => Ke(e) ? da(e) : e, _n = (e) => Ke(e) ? wc(e) : e;
  dt = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Kt = function(e) {
    return yf(e, false);
  };
  oN = function(e) {
    return yf(e, true);
  };
  function yf(e, t) {
    return dt(e) ? e : new iN(e, t);
  }
  class iN {
    constructor(t, o) {
      this.dep = new ua(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = o ? t : We(t), this._value = o ? t : Lo(t), this.__v_isShallow = o;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const o = this._rawValue, i = this.__v_isShallow || lo(t) || ci(t);
      t = i ? t : We(t), Xt(t, o) && (this._rawValue = t, this._value = i ? t : Lo(t), this.dep.trigger());
    }
  }
  An = function(e) {
    return dt(e) ? e.value : e;
  };
  AL = function(e) {
    return be(e) ? e() : An(e);
  };
  const nN = {
    get: (e, t, o) => t === "__v_raw" ? e : An(Reflect.get(e, t, o)),
    set: (e, t, o, i) => {
      const n = e[t];
      return dt(n) && !dt(o) ? (n.value = o, true) : Reflect.set(e, t, o, i);
    }
  };
  function bf(e) {
    return ni(e) ? e : new Proxy(e, nN);
  }
  class rN {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const o = this.dep = new ua(), { get: i, set: n } = t(o.track.bind(o), o.trigger.bind(o));
      this._get = i, this._set = n;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function sN(e) {
    return new rN(e);
  }
  aN = function(e) {
    const t = we(e) ? new Array(e.length) : {};
    for (const o in e) t[o] = Lf(e, o);
    return t;
  };
  class cN {
    constructor(t, o, i) {
      this._object = t, this._key = o, this._defaultValue = i, this.__v_isRef = true, this._value = void 0, this._raw = We(t);
      let n = true, s = t;
      if (!we(t) || !ra(String(o))) do
        n = !fa(s) || lo(s);
      while (n && (s = s.__v_raw));
      this._shallow = n;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = An(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && dt(this._raw[this._key])) {
        const o = this._object[this._key];
        if (dt(o)) {
          o.value = t;
          return;
        }
      }
      this._object[this._key] = t;
    }
    get dep() {
      return Ww(this._raw, this._key);
    }
  }
  class lN {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  SL = function(e, t, o) {
    return dt(e) ? e : be(e) ? new lN(e) : Ke(e) && arguments.length > 1 ? Lf(e, t, o) : Kt(e);
  };
  function Lf(e, t, o) {
    return new cN(e, t, o);
  }
  class uN {
    constructor(t, o, i) {
      this.fn = t, this.setter = o, this._value = void 0, this.dep = new ua(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Nr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Qe !== this) return pf(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return mf(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function hN(e, t, o = false) {
    let i, n;
    return be(e) ? i = e : (i = e.get, n = e.set), new uN(i, n, o);
  }
  const Xr = {}, vs = /* @__PURE__ */ new WeakMap();
  let Ji;
  function dN(e, t = false, o = Ji) {
    if (o) {
      let i = vs.get(o);
      i || vs.set(o, i = []), i.push(e);
    }
  }
  function fN(e, t, o = ke) {
    const { immediate: i, deep: n, once: s, scheduler: l, augmentJob: h, call: f } = o, g = (_) => n ? _ : lo(_) || n === false || n === 0 ? ei(_, 1) : ei(_);
    let p, R, y, N, M = false, H = false;
    if (dt(e) ? (R = () => e.value, M = lo(e)) : ni(e) ? (R = () => g(e), M = true) : we(e) ? (H = true, M = e.some((_) => ni(_) || lo(_)), R = () => e.map((_) => {
      if (dt(_)) return _.value;
      if (ni(_)) return g(_);
      if (be(_)) return f ? f(_, 2) : _();
    })) : be(e) ? t ? R = f ? () => f(e, 2) : e : R = () => {
      if (y) {
        si();
        try {
          y();
        } finally {
          ai();
        }
      }
      const _ = Ji;
      Ji = p;
      try {
        return f ? f(e, 3, [
          N
        ]) : e(N);
      } finally {
        Ji = _;
      }
    } : R = No, t && n) {
      const _ = R, re = n === true ? 1 / 0 : n;
      R = () => ei(_(), re);
    }
    const ne = hf(), ee = () => {
      p.stop(), ne && ne.active && il(ne.effects, p);
    };
    if (s && t) {
      const _ = t;
      t = (...re) => {
        _(...re), ee();
      };
    }
    let q = H ? new Array(e.length).fill(Xr) : Xr;
    const j = (_) => {
      if (!(!(p.flags & 1) || !p.dirty && !_)) if (t) {
        const re = p.run();
        if (n || M || (H ? re.some((ge, se) => Xt(ge, q[se])) : Xt(re, q))) {
          y && y();
          const ge = Ji;
          Ji = p;
          try {
            const se = [
              re,
              q === Xr ? void 0 : H && q[0] === Xr ? [] : q,
              N
            ];
            q = re, f ? f(t, 3, se) : t(...se);
          } finally {
            Ji = ge;
          }
        }
      } else p.run();
    };
    return h && h(j), p = new df(R), p.scheduler = l ? () => l(j, false) : j, N = (_) => dN(_, false, p), y = p.onStop = () => {
      const _ = vs.get(p);
      if (_) {
        if (f) f(_, 4);
        else for (const re of _) re();
        vs.delete(p);
      }
    }, t ? i ? j(true) : q = p.run() : l ? l(j.bind(null, true), true) : p.run(), ee.pause = p.pause.bind(p), ee.resume = p.resume.bind(p), ee.stop = ee, ee;
  }
  function ei(e, t = 1 / 0, o) {
    if (t <= 0 || !Ke(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t)) return e;
    if (o.set(e, t), t--, dt(e)) ei(e.value, t, o);
    else if (we(e)) for (let i = 0; i < e.length; i++) ei(e[i], t, o);
    else if (ef(e) || Rn(e)) e.forEach((i) => {
      ei(i, t, o);
    });
    else if (nf(e)) {
      for (const i in e) ei(e[i], t, o);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && ei(e[i], t, o);
    }
    return e;
  }
  function Pr(e, t, o, i) {
    try {
      return i ? e(...i) : e();
    } catch (n) {
      pa(n, t, o);
    }
  }
  function vo(e, t, o, i) {
    if (be(e)) {
      const n = Pr(e, t, o, i);
      return n && tf(n) && n.catch((s) => {
        pa(s, t, o);
      }), n;
    }
    if (we(e)) {
      const n = [];
      for (let s = 0; s < e.length; s++) n.push(vo(e[s], t, o, i));
      return n;
    }
  }
  function pa(e, t, o, i = true) {
    const n = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: l } = t && t.appContext.config || ke;
    if (t) {
      let h = t.parent;
      const f = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${o}`;
      for (; h; ) {
        const p = h.ec;
        if (p) {
          for (let R = 0; R < p.length; R++) if (p[R](e, f, g) === false) return;
        }
        h = h.parent;
      }
      if (s) {
        si(), Pr(s, null, 10, [
          e,
          f,
          g
        ]), ai();
        return;
      }
    }
    pN(e, o, n, i, l);
  }
  function pN(e, t, o, i = true, n = false) {
    if (n) throw e;
    console.error(e);
  }
  const Vt = [];
  let _o = -1;
  const Sn = [];
  let Ai = null, Tn = 0;
  const vf = Promise.resolve();
  let Cs = null;
  Cf = function(e) {
    const t = Cs || vf;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function TN(e) {
    let t = _o + 1, o = Vt.length;
    for (; t < o; ) {
      const i = t + o >>> 1, n = Vt[i], s = br(n);
      s < e || s === e && n.flags & 2 ? t = i + 1 : o = i;
    }
    return t;
  }
  function hl(e) {
    if (!(e.flags & 1)) {
      const t = br(e), o = Vt[Vt.length - 1];
      !o || !(e.flags & 2) && t >= br(o) ? Vt.push(e) : Vt.splice(TN(t), 0, e), e.flags |= 1, Hf();
    }
  }
  function Hf() {
    Cs || (Cs = vf.then(Ff));
  }
  function Df(e) {
    we(e) ? Sn.push(...e) : Ai && e.id === -1 ? Ai.splice(Tn + 1, 0, e) : e.flags & 1 || (Sn.push(e), e.flags |= 1), Hf();
  }
  function Ku(e, t, o = _o + 1) {
    for (; o < Vt.length; o++) {
      const i = Vt[o];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        Vt.splice(o, 1), o--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function Mf(e) {
    if (Sn.length) {
      const t = [
        ...new Set(Sn)
      ].sort((o, i) => br(o) - br(i));
      if (Sn.length = 0, Ai) {
        Ai.push(...t);
        return;
      }
      for (Ai = t, Tn = 0; Tn < Ai.length; Tn++) {
        const o = Ai[Tn];
        o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
      }
      Ai = null, Tn = 0;
    }
  }
  const br = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Ff(e) {
    try {
      for (_o = 0; _o < Vt.length; _o++) {
        const t = Vt[_o];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Pr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; _o < Vt.length; _o++) {
        const t = Vt[_o];
        t && (t.flags &= -2);
      }
      _o = -1, Vt.length = 0, Mf(), Cs = null, (Vt.length || Sn.length) && Ff();
    }
  }
  let Mt = null, Pf = null;
  function Hs(e) {
    const t = Mt;
    return Mt = e, Pf = e && e.type.__scopeId || null, t;
  }
  gN = function(e, t = Mt, o) {
    if (!t || e._n) return e;
    const i = (...n) => {
      i._d && Us(-1);
      const s = Hs(t);
      let l;
      try {
        l = e(...n);
      } finally {
        Hs(s), i._d && Us(1);
      }
      return l;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  wL = function(e, t) {
    if (Mt === null) return e;
    const o = Oa(Mt), i = e.dirs || (e.dirs = []);
    for (let n = 0; n < t.length; n++) {
      let [s, l, h, f = ke] = t[n];
      s && (be(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && ei(l), i.push({
        dir: s,
        instance: o,
        value: l,
        oldValue: void 0,
        arg: h,
        modifiers: f
      }));
    }
    return e;
  };
  function $i(e, t, o, i) {
    const n = e.dirs, s = t && t.dirs;
    for (let l = 0; l < n.length; l++) {
      const h = n[l];
      s && (h.oldValue = s[l].value);
      let f = h.dir[i];
      f && (si(), vo(f, o, 8, [
        e.el,
        h,
        e,
        t
      ]), ai());
    }
  }
  mN = function(e, t) {
    if (Gt) {
      let o = Gt.provides;
      const i = Gt.parent && Gt.parent.provides;
      i === o && (o = Gt.provides = Object.create(i)), o[e] = t;
    }
  };
  fr = function(e, t, o = false) {
    const i = ki();
    if (i || on) {
      let n = on ? on._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (n && e in n) return n[e];
      if (arguments.length > 1) return o && be(t) ? t.call(i && i.proxy) : t;
    }
  };
  EN = function() {
    return !!(ki() || on);
  };
  const IN = /* @__PURE__ */ Symbol.for("v-scx"), ON = () => fr(IN);
  NL = function(e, t) {
    return Ta(e, null, t);
  };
  function RN(e, t) {
    return Ta(e, null, {
      flush: "sync"
    });
  }
  wn = function(e, t, o) {
    return Ta(e, t, o);
  };
  function Ta(e, t, o = ke) {
    const { immediate: i, deep: n, flush: s, once: l } = o, h = At({}, o), f = t && i || !t && s !== "post";
    let g;
    if (Cr) {
      if (s === "sync") {
        const N = ON();
        g = N.__watcherHandles || (N.__watcherHandles = []);
      } else if (!f) {
        const N = () => {
        };
        return N.stop = No, N.resume = No, N.pause = No, N;
      }
    }
    const p = Gt;
    h.call = (N, M, H) => vo(N, p, M, H);
    let R = false;
    s === "post" ? h.scheduler = (N) => {
      yt(N, p && p.suspense);
    } : s !== "sync" && (R = true, h.scheduler = (N, M) => {
      M ? N() : hl(N);
    }), h.augmentJob = (N) => {
      t && (N.flags |= 4), R && (N.flags |= 2, p && (N.id = p.uid, N.i = p));
    };
    const y = fN(e, t, h);
    return Cr && (g ? g.push(y) : f && y()), y;
  }
  function AN(e, t, o) {
    const i = this.proxy, n = lt(e) ? e.includes(".") ? _f(i, e) : () => i[e] : e.bind(i, i);
    let s;
    be(t) ? s = t : (s = t.handler, o = t);
    const l = Ur(this), h = Ta(n, s.bind(i), o);
    return l(), h;
  }
  function _f(e, t) {
    const o = t.split(".");
    return () => {
      let i = e;
      for (let n = 0; n < o.length && i; n++) i = i[o[n]];
      return i;
    };
  }
  const Uf = /* @__PURE__ */ Symbol("_vte"), Wf = (e) => e.__isTeleport, pr = (e) => e && (e.disabled || e.disabled === ""), Ju = (e) => e && (e.defer || e.defer === ""), Xu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Qu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Nc = (e, t) => {
    const o = e && e.to;
    return lt(o) ? t ? t(o) : null : o;
  }, kf = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, o, i, n, s, l, h, f, g) {
      const { mc: p, pc: R, pbc: y, o: { insert: N, querySelector: M, createText: H, createComment: ne } } = g, ee = pr(t.props);
      let { shapeFlag: q, children: j, dynamicChildren: _ } = t;
      if (e == null) {
        const re = t.el = H(""), ge = t.anchor = H("");
        N(re, o, i), N(ge, o, i);
        const se = (ie, me) => {
          q & 16 && p(j, ie, me, n, s, l, h, f);
        }, fe = () => {
          const ie = t.target = Nc(t.props, M), me = Gf(ie, t, H, N);
          ie && (l !== "svg" && Xu(ie) ? l = "svg" : l !== "mathml" && Qu(ie) && (l = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(ie), ee || (se(ie, me), ps(t, false)));
        };
        ee && (se(o, ge), ps(t, true)), Ju(t.props) ? (t.el.__isMounted = false, yt(() => {
          fe(), delete t.el.__isMounted;
        }, s)) : fe();
      } else {
        if (Ju(t.props) && e.el.__isMounted === false) {
          yt(() => {
            kf.process(e, t, o, i, n, s, l, h, f, g);
          }, s);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const re = t.anchor = e.anchor, ge = t.target = e.target, se = t.targetAnchor = e.targetAnchor, fe = pr(e.props), ie = fe ? o : ge, me = fe ? re : se;
        if (l === "svg" || Xu(ge) ? l = "svg" : (l === "mathml" || Qu(ge)) && (l = "mathml"), _ ? (y(e.dynamicChildren, _, ie, n, s, l, h), El(e, t, true)) : f || R(e, t, ie, me, n, s, l, h, false), ee) fe ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Qr(t, o, re, g, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Ce = t.target = Nc(t.props, M);
          Ce && Qr(t, Ce, null, g, 0);
        } else fe && Qr(t, ge, se, g, 1);
        ps(t, ee);
      }
    },
    remove(e, t, o, { um: i, o: { remove: n } }, s) {
      const { shapeFlag: l, children: h, anchor: f, targetStart: g, targetAnchor: p, target: R, props: y } = e;
      if (R && (n(g), n(p)), s && n(f), l & 16) {
        const N = s || !pr(y);
        for (let M = 0; M < h.length; M++) {
          const H = h[M];
          i(H, t, o, N, !!H.dynamicChildren);
        }
      }
    },
    move: Qr,
    hydrate: SN
  };
  function Qr(e, t, o, { o: { insert: i }, m: n }, s = 2) {
    s === 0 && i(e.targetAnchor, t, o);
    const { el: l, anchor: h, shapeFlag: f, children: g, props: p } = e, R = s === 2;
    if (R && i(l, t, o), (!R || pr(p)) && f & 16) for (let y = 0; y < g.length; y++) n(g[y], t, o, 2);
    R && i(h, t, o);
  }
  function SN(e, t, o, i, n, s, { o: { nextSibling: l, parentNode: h, querySelector: f, insert: g, createText: p } }, R) {
    function y(H, ne, ee, q) {
      ne.anchor = R(l(H), ne, h(H), o, i, n, s), ne.targetStart = ee, ne.targetAnchor = q;
    }
    const N = t.target = Nc(t.props, f), M = pr(t.props);
    if (N) {
      const H = N._lpa || N.firstChild;
      if (t.shapeFlag & 16) if (M) y(e, t, H, H && l(H));
      else {
        t.anchor = l(e);
        let ne = H;
        for (; ne; ) {
          if (ne && ne.nodeType === 8) {
            if (ne.data === "teleport start anchor") t.targetStart = ne;
            else if (ne.data === "teleport anchor") {
              t.targetAnchor = ne, N._lpa = t.targetAnchor && l(t.targetAnchor);
              break;
            }
          }
          ne = l(ne);
        }
        t.targetAnchor || Gf(N, t, p, g), R(H && l(H), t, N, o, i, n, s);
      }
      ps(t, M);
    } else M && t.shapeFlag & 16 && y(e, t, e, l(e));
    return t.anchor && l(t.anchor);
  }
  yL = kf;
  function ps(e, t) {
    const o = e.ctx;
    if (o && o.ut) {
      let i, n;
      for (t ? (i = e.el, n = e.anchor) : (i = e.targetStart, n = e.targetAnchor); i && i !== n; ) i.nodeType === 1 && i.setAttribute("data-v-owner", o.uid), i = i.nextSibling;
      o.ut();
    }
  }
  function Gf(e, t, o, i) {
    const n = t.targetStart = o(""), s = t.targetAnchor = o("");
    return n[Uf] = s, e && (i(n, e), i(s, e)), s;
  }
  const Xo = /* @__PURE__ */ Symbol("_leaveCb"), es = /* @__PURE__ */ Symbol("_enterCb");
  function Bf() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return _r(() => {
      e.isMounted = true;
    }), pl(() => {
      e.isUnmounting = true;
    }), e;
  }
  const To = [
    Function,
    Array
  ], Yf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: To,
    onEnter: To,
    onAfterEnter: To,
    onEnterCancelled: To,
    onBeforeLeave: To,
    onLeave: To,
    onAfterLeave: To,
    onLeaveCancelled: To,
    onBeforeAppear: To,
    onAppear: To,
    onAfterAppear: To,
    onAppearCancelled: To
  }, jf = (e) => {
    const t = e.subTree;
    return t.component ? jf(t.component) : t;
  }, wN = {
    name: "BaseTransition",
    props: Yf,
    setup(e, { slots: t }) {
      const o = ki(), i = Bf();
      return () => {
        const n = t.default && dl(t.default(), true);
        if (!n || !n.length) return;
        const s = xf(n), l = We(e), { mode: h } = l;
        if (i.isLeaving) return Ka(s);
        const f = eh(s);
        if (!f) return Ka(s);
        let g = Lr(f, l, i, o, (R) => g = R);
        f.type !== Dt && Mi(f, g);
        let p = o.subTree && eh(o.subTree);
        if (p && p.type !== Dt && !yi(p, f) && jf(o).type !== Dt) {
          let R = Lr(p, l, i, o);
          if (Mi(p, R), h === "out-in" && f.type !== Dt) return i.isLeaving = true, R.afterLeave = () => {
            i.isLeaving = false, o.job.flags & 8 || o.update(), delete R.afterLeave, p = void 0;
          }, Ka(s);
          h === "in-out" && f.type !== Dt ? R.delayLeave = (y, N, M) => {
            const H = zf(i, p);
            H[String(p.key)] = p, y[Xo] = () => {
              N(), y[Xo] = void 0, delete g.delayedLeave, p = void 0;
            }, g.delayedLeave = () => {
              M(), delete g.delayedLeave, p = void 0;
            };
          } : p = void 0;
        } else p && (p = void 0);
        return s;
      };
    }
  };
  function xf(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const o of e) if (o.type !== Dt) {
        t = o;
        break;
      }
    }
    return t;
  }
  const NN = wN;
  function zf(e, t) {
    const { leavingVNodes: o } = e;
    let i = o.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), o.set(t.type, i)), i;
  }
  function Lr(e, t, o, i, n) {
    const { appear: s, mode: l, persisted: h = false, onBeforeEnter: f, onEnter: g, onAfterEnter: p, onEnterCancelled: R, onBeforeLeave: y, onLeave: N, onAfterLeave: M, onLeaveCancelled: H, onBeforeAppear: ne, onAppear: ee, onAfterAppear: q, onAppearCancelled: j } = t, _ = String(e.key), re = zf(o, e), ge = (ie, me) => {
      ie && vo(ie, i, 9, me);
    }, se = (ie, me) => {
      const Ce = me[1];
      ge(ie, me), we(ie) ? ie.every((pe) => pe.length <= 1) && Ce() : ie.length <= 1 && Ce();
    }, fe = {
      mode: l,
      persisted: h,
      beforeEnter(ie) {
        let me = f;
        if (!o.isMounted) if (s) me = ne || f;
        else return;
        ie[Xo] && ie[Xo](true);
        const Ce = re[_];
        Ce && yi(e, Ce) && Ce.el[Xo] && Ce.el[Xo](), ge(me, [
          ie
        ]);
      },
      enter(ie) {
        let me = g, Ce = p, pe = R;
        if (!o.isMounted) if (s) me = ee || g, Ce = q || p, pe = j || R;
        else return;
        let Ye = false;
        const It = ie[es] = (oo) => {
          Ye || (Ye = true, oo ? ge(pe, [
            ie
          ]) : ge(Ce, [
            ie
          ]), fe.delayedLeave && fe.delayedLeave(), ie[es] = void 0);
        };
        me ? se(me, [
          ie,
          It
        ]) : It();
      },
      leave(ie, me) {
        const Ce = String(e.key);
        if (ie[es] && ie[es](true), o.isUnmounting) return me();
        ge(y, [
          ie
        ]);
        let pe = false;
        const Ye = ie[Xo] = (It) => {
          pe || (pe = true, me(), It ? ge(H, [
            ie
          ]) : ge(M, [
            ie
          ]), ie[Xo] = void 0, re[Ce] === e && delete re[Ce]);
        };
        re[Ce] = e, N ? se(N, [
          ie,
          Ye
        ]) : Ye();
      },
      clone(ie) {
        const me = Lr(ie, t, o, i, n);
        return n && n(me), me;
      }
    };
    return fe;
  }
  function Ka(e) {
    if (ga(e)) return e = li(e), e.children = null, e;
  }
  function eh(e) {
    if (!ga(e)) return Wf(e.type) && e.children ? xf(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: o } = e;
    if (o) {
      if (t & 16) return o[0];
      if (t & 32 && be(o.default)) return o.default();
    }
  }
  function Mi(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Mi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function dl(e, t = false, o) {
    let i = [], n = 0;
    for (let s = 0; s < e.length; s++) {
      let l = e[s];
      const h = o == null ? l.key : String(o) + String(l.key != null ? l.key : s);
      l.type === Ht ? (l.patchFlag & 128 && n++, i = i.concat(dl(l.children, t, h))) : (t || l.type !== Dt) && i.push(h != null ? li(l, {
        key: h
      }) : l);
    }
    if (n > 1) for (let s = 0; s < i.length; s++) i[s].patchFlag = -2;
    return i;
  }
  yN = function(e, t) {
    return be(e) ? At({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function $f(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  bL = function(e) {
    const t = ki(), o = oN(null);
    if (t) {
      const n = t.refs === ke ? t.refs = {} : t.refs;
      Object.defineProperty(n, e, {
        enumerable: true,
        get: () => o.value,
        set: (s) => o.value = s
      });
    }
    return o;
  };
  const Ds = /* @__PURE__ */ new WeakMap();
  function Tr(e, t, o, i, n = false) {
    if (we(e)) {
      e.forEach((M, H) => Tr(M, t && (we(t) ? t[H] : t), o, i, n));
      return;
    }
    if (Li(i) && !n) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Tr(e, t, o, i.component.subTree);
      return;
    }
    const s = i.shapeFlag & 4 ? Oa(i.component) : i.el, l = n ? null : s, { i: h, r: f } = e, g = t && t.r, p = h.refs === ke ? h.refs = {} : h.refs, R = h.setupState, y = We(R), N = R === ke ? Qd : (M) => xe(y, M);
    if (g != null && g !== f) {
      if (th(t), lt(g)) p[g] = null, N(g) && (R[g] = null);
      else if (dt(g)) {
        g.value = null;
        const M = t;
        M.k && (p[M.k] = null);
      }
    }
    if (be(f)) Pr(f, h, 12, [
      l,
      p
    ]);
    else {
      const M = lt(f), H = dt(f);
      if (M || H) {
        const ne = () => {
          if (e.f) {
            const ee = M ? N(f) ? R[f] : p[f] : f.value;
            if (n) we(ee) && il(ee, s);
            else if (we(ee)) ee.includes(s) || ee.push(s);
            else if (M) p[f] = [
              s
            ], N(f) && (R[f] = p[f]);
            else {
              const q = [
                s
              ];
              f.value = q, e.k && (p[e.k] = q);
            }
          } else M ? (p[f] = l, N(f) && (R[f] = l)) : H && (f.value = l, e.k && (p[e.k] = l));
        };
        if (l) {
          const ee = () => {
            ne(), Ds.delete(e);
          };
          ee.id = -1, Ds.set(e, ee), yt(ee, o);
        } else th(e), ne();
      }
    }
  }
  function th(e) {
    const t = Ds.get(e);
    t && (t.flags |= 8, Ds.delete(e));
  }
  ca().requestIdleCallback;
  ca().cancelIdleCallback;
  let Li, ga, bN;
  Li = (e) => !!e.type.__asyncLoader;
  ga = (e) => e.type.__isKeepAlive;
  bN = {
    name: "KeepAlive",
    __isKeepAlive: true,
    props: {
      include: [
        String,
        RegExp,
        Array
      ],
      exclude: [
        String,
        RegExp,
        Array
      ],
      max: [
        String,
        Number
      ]
    },
    setup(e, { slots: t }) {
      const o = ki(), i = o.ctx;
      if (!i.renderer) return () => {
        const q = t.default && t.default();
        return q && q.length === 1 ? q[0] : q;
      };
      const n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      let l = null;
      const h = o.suspense, { renderer: { p: f, m: g, um: p, o: { createElement: R } } } = i, y = R("div");
      i.activate = (q, j, _, re, ge) => {
        const se = q.component;
        g(q, j, _, 0, h), f(se.vnode, q, j, _, se, h, re, q.slotScopeIds, ge), yt(() => {
          se.isDeactivated = false, se.a && ur(se.a);
          const fe = q.props && q.props.onVnodeMounted;
          fe && go(fe, se.parent, q);
        }, h);
      }, i.deactivate = (q) => {
        const j = q.component;
        Ps(j.m), Ps(j.a), g(q, y, null, 1, h), yt(() => {
          j.da && ur(j.da);
          const _ = q.props && q.props.onVnodeUnmounted;
          _ && go(_, j.parent, q), j.isDeactivated = true;
        }, h);
      };
      function N(q) {
        Ja(q), p(q, o, h, true);
      }
      function M(q) {
        n.forEach((j, _) => {
          const re = Dc(Li(j) ? j.type.__asyncResolved || {} : j.type);
          re && !q(re) && H(_);
        });
      }
      function H(q) {
        const j = n.get(q);
        j && (!l || !yi(j, l)) ? N(j) : l && Ja(l), n.delete(q), s.delete(q);
      }
      wn(() => [
        e.include,
        e.exclude
      ], ([q, j]) => {
        q && M((_) => rr(q, _)), j && M((_) => !rr(j, _));
      }, {
        flush: "post",
        deep: true
      });
      let ne = null;
      const ee = () => {
        ne != null && (_s(o.subTree.type) ? yt(() => {
          n.set(ne, ts(o.subTree));
        }, o.subTree.suspense) : n.set(ne, ts(o.subTree)));
      };
      return _r(ee), fl(ee), pl(() => {
        n.forEach((q) => {
          const { subTree: j, suspense: _ } = o, re = ts(j);
          if (q.type === re.type && q.key === re.key) {
            Ja(re);
            const ge = re.component.da;
            ge && yt(ge, _);
            return;
          }
          N(q);
        });
      }), () => {
        if (ne = null, !t.default) return l = null;
        const q = t.default(), j = q[0];
        if (q.length > 1) return l = null, q;
        if (!Un(j) || !(j.shapeFlag & 4) && !(j.shapeFlag & 128)) return l = null, j;
        let _ = ts(j);
        if (_.type === Dt) return l = null, _;
        const re = _.type, ge = Dc(Li(_) ? _.type.__asyncResolved || {} : re), { include: se, exclude: fe, max: ie } = e;
        if (se && (!ge || !rr(se, ge)) || fe && ge && rr(fe, ge)) return _.shapeFlag &= -257, l = _, j;
        const me = _.key == null ? re : _.key, Ce = n.get(me);
        return _.el && (_ = li(_), j.shapeFlag & 128 && (j.ssContent = _)), ne = me, Ce ? (_.el = Ce.el, _.component = Ce.component, _.transition && Mi(_, _.transition), _.shapeFlag |= 512, s.delete(me), s.add(me)) : (s.add(me), ie && s.size > parseInt(ie, 10) && H(s.values().next().value)), _.shapeFlag |= 256, l = _, _s(j.type) ? j : _;
      };
    }
  };
  LL = bN;
  function rr(e, t) {
    return we(e) ? e.some((o) => rr(o, t)) : lt(e) ? e.split(",").includes(t) : Aw(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  LN = function(e, t) {
    Vf(e, "a", t);
  };
  vN = function(e, t) {
    Vf(e, "da", t);
  };
  function Vf(e, t, o = Gt) {
    const i = e.__wdc || (e.__wdc = () => {
      let n = o;
      for (; n; ) {
        if (n.isDeactivated) return;
        n = n.parent;
      }
      return e();
    });
    if (ma(t, i, o), o) {
      let n = o.parent;
      for (; n && n.parent; ) ga(n.parent.vnode) && CN(i, t, o, n), n = n.parent;
    }
  }
  function CN(e, t, o, i) {
    const n = ma(t, e, i, true);
    Tl(() => {
      il(i[t], n);
    }, o);
  }
  function Ja(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function ts(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function ma(e, t, o = Gt, i = false) {
    if (o) {
      const n = o[e] || (o[e] = []), s = t.__weh || (t.__weh = (...l) => {
        si();
        const h = Ur(o), f = vo(t, o, e, l);
        return h(), ai(), f;
      });
      return i ? n.unshift(s) : n.push(s), s;
    }
  }
  let fi, qf, fl, DN, MN, FN;
  fi = (e) => (t, o = Gt) => {
    (!Cr || e === "sp") && ma(e, (...i) => t(...i), o);
  };
  HN = fi("bm");
  _r = fi("m");
  qf = fi("bu");
  fl = fi("u");
  pl = fi("bum");
  Tl = fi("um");
  DN = fi("sp");
  MN = fi("rtg");
  FN = fi("rtc");
  function PN(e, t = Gt) {
    ma("ec", e, t);
  }
  const _N = "components", Zf = /* @__PURE__ */ Symbol.for("v-ndc");
  vL = function(e) {
    return lt(e) ? UN(_N, e, false) || e : e || Zf;
  };
  function UN(e, t, o = true, i = false) {
    const n = Mt || Gt;
    if (n) {
      const s = n.type;
      {
        const h = Dc(s, false);
        if (h && (h === t || h === uo(t) || h === aa(uo(t)))) return s;
      }
      const l = oh(n[e] || s[e], t) || oh(n.appContext[e], t);
      return !l && i ? s : l;
    }
  }
  function oh(e, t) {
    return e && (e[t] || e[uo(t)] || e[aa(uo(t))]);
  }
  WN = function(e, t, o, i) {
    let n;
    const s = o, l = we(e);
    if (l || lt(e)) {
      const h = l && ni(e);
      let f = false, g = false;
      h && (f = !lo(e), g = ci(e), e = ha(e)), n = new Array(e.length);
      for (let p = 0, R = e.length; p < R; p++) n[p] = t(f ? g ? _n(Lo(e[p])) : Lo(e[p]) : e[p], p, void 0, s);
    } else if (typeof e == "number") {
      n = new Array(e);
      for (let h = 0; h < e; h++) n[h] = t(h + 1, h, void 0, s);
    } else if (Ke(e)) if (e[Symbol.iterator]) n = Array.from(e, (h, f) => t(h, f, void 0, s));
    else {
      const h = Object.keys(e);
      n = new Array(h.length);
      for (let f = 0, g = h.length; f < g; f++) {
        const p = h[f];
        n[f] = t(e[p], p, f, s);
      }
    }
    else n = [];
    return n;
  };
  CL = function(e, t) {
    for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (we(i)) for (let n = 0; n < i.length; n++) e[i[n].name] = i[n].fn;
      else i && (e[i.name] = i.key ? (...n) => {
        const s = i.fn(...n);
        return s && (s.key = i.key), s;
      } : i.fn);
    }
    return e;
  };
  HL = function(e, t, o = {}, i, n) {
    if (Mt.ce || Mt.parent && Li(Mt.parent) && Mt.parent.ce) {
      const g = Object.keys(o).length > 0;
      return t !== "default" && (o.name = t), mo(), Cc(Ht, null, [
        Bt("slot", o, i && i())
      ], g ? -2 : 64);
    }
    let s = e[t];
    s && s._c && (s._d = false), mo();
    const l = s && Kf(s(o)), h = o.key || l && l.key, f = Cc(Ht, {
      key: (h && !hi(h) ? h : `_${t}`) + (!l && i ? "_fb" : "")
    }, l || (i ? i() : []), l && e._ === 1 ? 64 : -2);
    return !n && f.scopeId && (f.slotScopeIds = [
      f.scopeId + "-s"
    ]), s && s._c && (s._d = true), f;
  };
  function Kf(e) {
    return e.some((t) => Un(t) ? !(t.type === Dt || t.type === Ht && !Kf(t.children)) : true) ? e : null;
  }
  const yc = (e) => e ? pp(e) ? Oa(e) : yc(e.parent) : null, gr = At(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => yc(e.parent),
    $root: (e) => yc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Cf.bind(e.proxy)),
    $watch: (e) => AN.bind(e)
  }), Xa = (e, t) => e !== ke && !e.__isScriptSetup && xe(e, t), kN = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: o, setupState: i, data: n, props: s, accessCache: l, type: h, appContext: f } = e;
      if (t[0] !== "$") {
        const y = l[t];
        if (y !== void 0) switch (y) {
          case 1:
            return i[t];
          case 2:
            return n[t];
          case 4:
            return o[t];
          case 3:
            return s[t];
        }
        else {
          if (Xa(i, t)) return l[t] = 1, i[t];
          if (n !== ke && xe(n, t)) return l[t] = 2, n[t];
          if (xe(s, t)) return l[t] = 3, s[t];
          if (o !== ke && xe(o, t)) return l[t] = 4, o[t];
          bc && (l[t] = 0);
        }
      }
      const g = gr[t];
      let p, R;
      if (g) return t === "$attrs" && kt(e.attrs, "get", ""), g(e);
      if ((p = h.__cssModules) && (p = p[t])) return p;
      if (o !== ke && xe(o, t)) return l[t] = 4, o[t];
      if (R = f.config.globalProperties, xe(R, t)) return R[t];
    },
    set({ _: e }, t, o) {
      const { data: i, setupState: n, ctx: s } = e;
      return Xa(n, t) ? (n[t] = o, true) : i !== ke && xe(i, t) ? (i[t] = o, true) : xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = o, true);
    },
    has({ _: { data: e, setupState: t, accessCache: o, ctx: i, appContext: n, props: s, type: l } }, h) {
      let f;
      return !!(o[h] || e !== ke && h[0] !== "$" && xe(e, h) || Xa(t, h) || xe(s, h) || xe(i, h) || xe(gr, h) || xe(n.config.globalProperties, h) || (f = l.__cssModules) && f[h]);
    },
    defineProperty(e, t, o) {
      return o.get != null ? e._.accessCache[t] = 0 : xe(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
    }
  };
  function Ms(e) {
    return we(e) ? e.reduce((t, o) => (t[o] = null, t), {}) : e;
  }
  DL = function(e, t) {
    return !e || !t ? e || t : we(e) && we(t) ? e.concat(t) : At({}, Ms(e), Ms(t));
  };
  let bc = true;
  function GN(e) {
    const t = Xf(e), o = e.proxy, i = e.ctx;
    bc = false, t.beforeCreate && ih(t.beforeCreate, e, "bc");
    const { data: n, computed: s, methods: l, watch: h, provide: f, inject: g, created: p, beforeMount: R, mounted: y, beforeUpdate: N, updated: M, activated: H, deactivated: ne, beforeDestroy: ee, beforeUnmount: q, destroyed: j, unmounted: _, render: re, renderTracked: ge, renderTriggered: se, errorCaptured: fe, serverPrefetch: ie, expose: me, inheritAttrs: Ce, components: pe, directives: Ye, filters: It } = t;
    if (g && BN(g, i, null), l) for (const Me in l) {
      const Ve = l[Me];
      be(Ve) && (i[Me] = Ve.bind(o));
    }
    if (n) {
      const Me = n.call(o, o);
      Ke(Me) && (e.data = da(Me));
    }
    if (bc = true, s) for (const Me in s) {
      const Ve = s[Me], Bo = be(Ve) ? Ve.bind(o, o) : be(Ve.get) ? Ve.get.bind(o, o) : No, cn = !be(Ve) && be(Ve.set) ? Ve.set.bind(o) : No, Yo = Ol({
        get: Bo,
        set: cn
      });
      Object.defineProperty(i, Me, {
        enumerable: true,
        configurable: true,
        get: () => Yo.value,
        set: (Ae) => Yo.value = Ae
      });
    }
    if (h) for (const Me in h) Jf(h[Me], i, o, Me);
    if (f) {
      const Me = be(f) ? f.call(o) : f;
      Reflect.ownKeys(Me).forEach((Ve) => {
        mN(Ve, Me[Ve]);
      });
    }
    p && ih(p, e, "c");
    function Je(Me, Ve) {
      we(Ve) ? Ve.forEach((Bo) => Me(Bo.bind(o))) : Ve && Me(Ve.bind(o));
    }
    if (Je(HN, R), Je(_r, y), Je(qf, N), Je(fl, M), Je(LN, H), Je(vN, ne), Je(PN, fe), Je(FN, ge), Je(MN, se), Je(pl, q), Je(Tl, _), Je(DN, ie), we(me)) if (me.length) {
      const Me = e.exposed || (e.exposed = {});
      me.forEach((Ve) => {
        Object.defineProperty(Me, Ve, {
          get: () => o[Ve],
          set: (Bo) => o[Ve] = Bo,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    re && e.render === No && (e.render = re), Ce != null && (e.inheritAttrs = Ce), pe && (e.components = pe), Ye && (e.directives = Ye), ie && $f(e);
  }
  function BN(e, t, o = No) {
    we(e) && (e = Lc(e));
    for (const i in e) {
      const n = e[i];
      let s;
      Ke(n) ? "default" in n ? s = fr(n.from || i, n.default, true) : s = fr(n.from || i) : s = fr(n), dt(s) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (l) => s.value = l
      }) : t[i] = s;
    }
  }
  function ih(e, t, o) {
    vo(we(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, o);
  }
  function Jf(e, t, o, i) {
    let n = i.includes(".") ? _f(o, i) : () => o[i];
    if (lt(e)) {
      const s = t[e];
      be(s) && wn(n, s);
    } else if (be(e)) wn(n, e.bind(o));
    else if (Ke(e)) if (we(e)) e.forEach((s) => Jf(s, t, o, i));
    else {
      const s = be(e.handler) ? e.handler.bind(o) : t[e.handler];
      be(s) && wn(n, s, e);
    }
  }
  function Xf(e) {
    const t = e.type, { mixins: o, extends: i } = t, { mixins: n, optionsCache: s, config: { optionMergeStrategies: l } } = e.appContext, h = s.get(t);
    let f;
    return h ? f = h : !n.length && !o && !i ? f = t : (f = {}, n.length && n.forEach((g) => Fs(f, g, l, true)), Fs(f, t, l)), Ke(t) && s.set(t, f), f;
  }
  function Fs(e, t, o, i = false) {
    const { mixins: n, extends: s } = t;
    s && Fs(e, s, o, true), n && n.forEach((l) => Fs(e, l, o, true));
    for (const l in t) if (!(i && l === "expose")) {
      const h = YN[l] || o && o[l];
      e[l] = h ? h(e[l], t[l]) : t[l];
    }
    return e;
  }
  const YN = {
    data: nh,
    props: rh,
    emits: rh,
    methods: sr,
    computed: sr,
    beforeCreate: zt,
    created: zt,
    beforeMount: zt,
    mounted: zt,
    beforeUpdate: zt,
    updated: zt,
    beforeDestroy: zt,
    beforeUnmount: zt,
    destroyed: zt,
    unmounted: zt,
    activated: zt,
    deactivated: zt,
    errorCaptured: zt,
    serverPrefetch: zt,
    components: sr,
    directives: sr,
    watch: xN,
    provide: nh,
    inject: jN
  };
  function nh(e, t) {
    return t ? e ? function() {
      return At(be(e) ? e.call(this, this) : e, be(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function jN(e, t) {
    return sr(Lc(e), Lc(t));
  }
  function Lc(e) {
    if (we(e)) {
      const t = {};
      for (let o = 0; o < e.length; o++) t[e[o]] = e[o];
      return t;
    }
    return e;
  }
  function zt(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function sr(e, t) {
    return e ? At(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function rh(e, t) {
    return e ? we(e) && we(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : At(/* @__PURE__ */ Object.create(null), Ms(e), Ms(t ?? {})) : t;
  }
  function xN(e, t) {
    if (!e) return t;
    if (!t) return e;
    const o = At(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) o[i] = zt(e[i], t[i]);
    return o;
  }
  function Qf() {
    return {
      app: null,
      config: {
        isNativeTag: Qd,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let zN = 0;
  function $N(e, t) {
    return function(i, n = null) {
      be(i) || (i = At({}, i)), n != null && !Ke(n) && (n = null);
      const s = Qf(), l = /* @__PURE__ */ new WeakSet(), h = [];
      let f = false;
      const g = s.app = {
        _uid: zN++,
        _component: i,
        _props: n,
        _container: null,
        _context: s,
        _instance: null,
        version: wy,
        get config() {
          return s.config;
        },
        set config(p) {
        },
        use(p, ...R) {
          return l.has(p) || (p && be(p.install) ? (l.add(p), p.install(g, ...R)) : be(p) && (l.add(p), p(g, ...R))), g;
        },
        mixin(p) {
          return s.mixins.includes(p) || s.mixins.push(p), g;
        },
        component(p, R) {
          return R ? (s.components[p] = R, g) : s.components[p];
        },
        directive(p, R) {
          return R ? (s.directives[p] = R, g) : s.directives[p];
        },
        mount(p, R, y) {
          if (!f) {
            const N = g._ceVNode || Bt(i, n);
            return N.appContext = s, y === true ? y = "svg" : y === false && (y = void 0), e(N, p, y), f = true, g._container = p, p.__vue_app__ = g, Oa(N.component);
          }
        },
        onUnmount(p) {
          h.push(p);
        },
        unmount() {
          f && (vo(h, g._instance, 16), e(null, g._container), delete g._container.__vue_app__);
        },
        provide(p, R) {
          return s.provides[p] = R, g;
        },
        runWithContext(p) {
          const R = on;
          on = g;
          try {
            return p();
          } finally {
            on = R;
          }
        }
      };
      return g;
    };
  }
  let on = null;
  ML = function(e, t, o = ke) {
    const i = ki(), n = uo(t), s = di(t), l = ep(e, n), h = sN((f, g) => {
      let p, R = ke, y;
      return RN(() => {
        const N = e[n];
        Xt(p, N) && (p = N, g());
      }), {
        get() {
          return f(), o.get ? o.get(p) : p;
        },
        set(N) {
          const M = o.set ? o.set(N) : N;
          if (!Xt(M, p) && !(R !== ke && Xt(N, R))) return;
          const H = i.vnode.props;
          H && (t in H || n in H || s in H) && (`onUpdate:${t}` in H || `onUpdate:${n}` in H || `onUpdate:${s}` in H) || (p = N, g()), i.emit(`update:${t}`, M), Xt(N, M) && Xt(N, R) && !Xt(M, y) && g(), R = N, y = M;
        }
      };
    });
    return h[Symbol.iterator] = () => {
      let f = 0;
      return {
        next() {
          return f < 2 ? {
            value: f++ ? l || ke : h,
            done: false
          } : {
            done: true
          };
        }
      };
    }, h;
  };
  const ep = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${uo(t)}Modifiers`] || e[`${di(t)}Modifiers`];
  function VN(e, t, ...o) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || ke;
    let n = o;
    const s = t.startsWith("update:"), l = s && ep(i, t.slice(7));
    l && (l.trim && (n = o.map((p) => lt(p) ? p.trim() : p)), l.number && (n = o.map(yw)));
    let h, f = i[h = za(t)] || i[h = za(uo(t))];
    !f && s && (f = i[h = za(di(t))]), f && vo(f, e, 6, n);
    const g = i[h + "Once"];
    if (g) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, vo(g, e, 6, n);
    }
  }
  const qN = /* @__PURE__ */ new WeakMap();
  function tp(e, t, o = false) {
    const i = o ? qN : t.emitsCache, n = i.get(e);
    if (n !== void 0) return n;
    const s = e.emits;
    let l = {}, h = false;
    if (!be(e)) {
      const f = (g) => {
        const p = tp(g, t, true);
        p && (h = true, At(l, p));
      };
      !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
    }
    return !s && !h ? (Ke(e) && i.set(e, null), null) : (we(s) ? s.forEach((f) => l[f] = null) : At(l, s), Ke(e) && i.set(e, l), l);
  }
  function Ea(e, t) {
    return !e || !na(t) ? false : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, di(t)) || xe(e, t));
  }
  function sh(e) {
    const { type: t, vnode: o, proxy: i, withProxy: n, propsOptions: [s], slots: l, attrs: h, emit: f, render: g, renderCache: p, props: R, data: y, setupState: N, ctx: M, inheritAttrs: H } = e, ne = Hs(e);
    let ee, q;
    try {
      if (o.shapeFlag & 4) {
        const _ = n || i, re = _;
        ee = Wo(g.call(re, _, p, R, N, y, M)), q = h;
      } else {
        const _ = t;
        ee = Wo(_.length > 1 ? _(R, {
          attrs: h,
          slots: l,
          emit: f
        }) : _(R, null)), q = t.props ? h : ZN(h);
      }
    } catch (_) {
      Er.length = 0, pa(_, e, 1), ee = Bt(Dt);
    }
    let j = ee;
    if (q && H !== false) {
      const _ = Object.keys(q), { shapeFlag: re } = j;
      _.length && re & 7 && (s && _.some(ol) && (q = KN(q, s)), j = li(j, q, false, true));
    }
    return o.dirs && (j = li(j, null, false, true), j.dirs = j.dirs ? j.dirs.concat(o.dirs) : o.dirs), o.transition && Mi(j, o.transition), ee = j, Hs(ne), ee;
  }
  const ZN = (e) => {
    let t;
    for (const o in e) (o === "class" || o === "style" || na(o)) && ((t || (t = {}))[o] = e[o]);
    return t;
  }, KN = (e, t) => {
    const o = {};
    for (const i in e) (!ol(i) || !(i.slice(9) in t)) && (o[i] = e[i]);
    return o;
  };
  function JN(e, t, o) {
    const { props: i, children: n, component: s } = e, { props: l, children: h, patchFlag: f } = t, g = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (o && f >= 0) {
      if (f & 1024) return true;
      if (f & 16) return i ? ah(i, l, g) : !!l;
      if (f & 8) {
        const p = t.dynamicProps;
        for (let R = 0; R < p.length; R++) {
          const y = p[R];
          if (l[y] !== i[y] && !Ea(g, y)) return true;
        }
      }
    } else return (n || h) && (!h || !h.$stable) ? true : i === l ? false : i ? l ? ah(i, l, g) : true : !!l;
    return false;
  }
  function ah(e, t, o) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let n = 0; n < i.length; n++) {
      const s = i[n];
      if (t[s] !== e[s] && !Ea(o, s)) return true;
    }
    return false;
  }
  function XN({ vnode: e, parent: t }, o) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = o, t = t.parent;
      else break;
    }
  }
  const op = {}, ip = () => Object.create(op), np = (e) => Object.getPrototypeOf(e) === op;
  function QN(e, t, o, i = false) {
    const n = {}, s = ip();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), rp(e, t, n, s);
    for (const l in e.propsOptions[0]) l in n || (n[l] = void 0);
    o ? e.props = i ? n : tN(n) : e.type.props ? e.props = n : e.props = s, e.attrs = s;
  }
  function ey(e, t, o, i) {
    const { props: n, attrs: s, vnode: { patchFlag: l } } = e, h = We(n), [f] = e.propsOptions;
    let g = false;
    if ((i || l > 0) && !(l & 16)) {
      if (l & 8) {
        const p = e.vnode.dynamicProps;
        for (let R = 0; R < p.length; R++) {
          let y = p[R];
          if (Ea(e.emitsOptions, y)) continue;
          const N = t[y];
          if (f) if (xe(s, y)) N !== s[y] && (s[y] = N, g = true);
          else {
            const M = uo(y);
            n[M] = vc(f, h, M, N, e, false);
          }
          else N !== s[y] && (s[y] = N, g = true);
        }
      }
    } else {
      rp(e, t, n, s) && (g = true);
      let p;
      for (const R in h) (!t || !xe(t, R) && ((p = di(R)) === R || !xe(t, p))) && (f ? o && (o[R] !== void 0 || o[p] !== void 0) && (n[R] = vc(f, h, R, void 0, e, true)) : delete n[R]);
      if (s !== h) for (const R in s) (!t || !xe(t, R)) && (delete s[R], g = true);
    }
    g && Qo(e.attrs, "set", "");
  }
  function rp(e, t, o, i) {
    const [n, s] = e.propsOptions;
    let l = false, h;
    if (t) for (let f in t) {
      if (lr(f)) continue;
      const g = t[f];
      let p;
      n && xe(n, p = uo(f)) ? !s || !s.includes(p) ? o[p] = g : (h || (h = {}))[p] = g : Ea(e.emitsOptions, f) || (!(f in i) || g !== i[f]) && (i[f] = g, l = true);
    }
    if (s) {
      const f = We(o), g = h || ke;
      for (let p = 0; p < s.length; p++) {
        const R = s[p];
        o[R] = vc(n, f, R, g[R], e, !xe(g, R));
      }
    }
    return l;
  }
  function vc(e, t, o, i, n, s) {
    const l = e[o];
    if (l != null) {
      const h = xe(l, "default");
      if (h && i === void 0) {
        const f = l.default;
        if (l.type !== Function && !l.skipFactory && be(f)) {
          const { propsDefaults: g } = n;
          if (o in g) i = g[o];
          else {
            const p = Ur(n);
            i = g[o] = f.call(null, t), p();
          }
        } else i = f;
        n.ce && n.ce._setProp(o, i);
      }
      l[0] && (s && !h ? i = false : l[1] && (i === "" || i === di(o)) && (i = true));
    }
    return i;
  }
  const ty = /* @__PURE__ */ new WeakMap();
  function sp(e, t, o = false) {
    const i = o ? ty : t.propsCache, n = i.get(e);
    if (n) return n;
    const s = e.props, l = {}, h = [];
    let f = false;
    if (!be(e)) {
      const p = (R) => {
        f = true;
        const [y, N] = sp(R, t, true);
        At(l, y), N && h.push(...N);
      };
      !o && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    if (!s && !f) return Ke(e) && i.set(e, On), On;
    if (we(s)) for (let p = 0; p < s.length; p++) {
      const R = uo(s[p]);
      ch(R) && (l[R] = ke);
    }
    else if (s) for (const p in s) {
      const R = uo(p);
      if (ch(R)) {
        const y = s[p], N = l[R] = we(y) || be(y) ? {
          type: y
        } : At({}, y), M = N.type;
        let H = false, ne = true;
        if (we(M)) for (let ee = 0; ee < M.length; ++ee) {
          const q = M[ee], j = be(q) && q.name;
          if (j === "Boolean") {
            H = true;
            break;
          } else j === "String" && (ne = false);
        }
        else H = be(M) && M.name === "Boolean";
        N[0] = H, N[1] = ne, (H || xe(N, "default")) && h.push(R);
      }
    }
    const g = [
      l,
      h
    ];
    return Ke(e) && i.set(e, g), g;
  }
  function ch(e) {
    return e[0] !== "$" && !lr(e);
  }
  const gl = (e) => e === "_" || e === "_ctx" || e === "$stable", ml = (e) => we(e) ? e.map(Wo) : [
    Wo(e)
  ], oy = (e, t, o) => {
    if (t._n) return t;
    const i = gN((...n) => ml(t(...n)), o);
    return i._c = false, i;
  }, ap = (e, t, o) => {
    const i = e._ctx;
    for (const n in e) {
      if (gl(n)) continue;
      const s = e[n];
      if (be(s)) t[n] = oy(n, s, i);
      else if (s != null) {
        const l = ml(s);
        t[n] = () => l;
      }
    }
  }, cp = (e, t) => {
    const o = ml(t);
    e.slots.default = () => o;
  }, lp = (e, t, o) => {
    for (const i in t) (o || !gl(i)) && (e[i] = t[i]);
  }, iy = (e, t, o) => {
    const i = e.slots = ip();
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (lp(i, t, o), o && rf(i, "_", n, true)) : ap(t, i);
    } else t && cp(e, t);
  }, ny = (e, t, o) => {
    const { vnode: i, slots: n } = e;
    let s = true, l = ke;
    if (i.shapeFlag & 32) {
      const h = t._;
      h ? o && h === 1 ? s = false : lp(n, t, o) : (s = !t.$stable, ap(t, n)), l = t;
    } else t && (cp(e, t), l = {
      default: 1
    });
    if (s) for (const h in n) !gl(h) && l[h] == null && delete n[h];
  }, yt = ly;
  function ry(e) {
    return sy(e);
  }
  function sy(e, t) {
    const o = ca();
    o.__VUE__ = true;
    const { insert: i, remove: n, patchProp: s, createElement: l, createText: h, createComment: f, setText: g, setElementText: p, parentNode: R, nextSibling: y, setScopeId: N = No, insertStaticContent: M } = e, H = (S, L, P, K = null, Z = null, J = null, le = void 0, Q = null, ae = !!L.dynamicChildren) => {
      if (S === L) return;
      S && !yi(S, L) && (K = jo(S), Ae(S, Z, J, true), S = null), L.patchFlag === -2 && (ae = false, L.dynamicChildren = null);
      const { type: V, ref: Ee, shapeFlag: ue } = L;
      switch (V) {
        case Ia:
          ne(S, L, P, K);
          break;
        case Dt:
          ee(S, L, P, K);
          break;
        case mr:
          S == null && q(L, P, K, le);
          break;
        case Ht:
          pe(S, L, P, K, Z, J, le, Q, ae);
          break;
        default:
          ue & 1 ? re(S, L, P, K, Z, J, le, Q, ae) : ue & 6 ? Ye(S, L, P, K, Z, J, le, Q, ae) : (ue & 64 || ue & 128) && V.process(S, L, P, K, Z, J, le, Q, ae, Gi);
      }
      Ee != null && Z ? Tr(Ee, S && S.ref, J, L || S, !L) : Ee == null && S && S.ref != null && Tr(S.ref, null, J, S, true);
    }, ne = (S, L, P, K) => {
      if (S == null) i(L.el = h(L.children), P, K);
      else {
        const Z = L.el = S.el;
        L.children !== S.children && g(Z, L.children);
      }
    }, ee = (S, L, P, K) => {
      S == null ? i(L.el = f(L.children || ""), P, K) : L.el = S.el;
    }, q = (S, L, P, K) => {
      [S.el, S.anchor] = M(S.children, L, P, K, S.el, S.anchor);
    }, j = ({ el: S, anchor: L }, P, K) => {
      let Z;
      for (; S && S !== L; ) Z = y(S), i(S, P, K), S = Z;
      i(L, P, K);
    }, _ = ({ el: S, anchor: L }) => {
      let P;
      for (; S && S !== L; ) P = y(S), n(S), S = P;
      n(L);
    }, re = (S, L, P, K, Z, J, le, Q, ae) => {
      if (L.type === "svg" ? le = "svg" : L.type === "math" && (le = "mathml"), S == null) ge(L, P, K, Z, J, le, Q, ae);
      else {
        const V = S.el && S.el._isVueCE ? S.el : null;
        try {
          V && V._beginPatch(), ie(S, L, Z, J, le, Q, ae);
        } finally {
          V && V._endPatch();
        }
      }
    }, ge = (S, L, P, K, Z, J, le, Q) => {
      let ae, V;
      const { props: Ee, shapeFlag: ue, transition: Ie, dirs: Ne } = S;
      if (ae = S.el = l(S.type, J, Ee && Ee.is, Ee), ue & 8 ? p(ae, S.children) : ue & 16 && fe(S.children, ae, null, K, Z, Qa(S, J), le, Q), Ne && $i(S, null, K, "created"), se(ae, S, S.scopeId, le, K), Ee) {
        for (const Ge in Ee) Ge !== "value" && !lr(Ge) && s(ae, Ge, null, Ee[Ge], J, K);
        "value" in Ee && s(ae, "value", null, Ee.value, J), (V = Ee.onVnodeBeforeMount) && go(V, K, S);
      }
      Ne && $i(S, null, K, "beforeMount");
      const Pe = ay(Z, Ie);
      Pe && Ie.beforeEnter(ae), i(ae, L, P), ((V = Ee && Ee.onVnodeMounted) || Pe || Ne) && yt(() => {
        V && go(V, K, S), Pe && Ie.enter(ae), Ne && $i(S, null, K, "mounted");
      }, Z);
    }, se = (S, L, P, K, Z) => {
      if (P && N(S, P), K) for (let J = 0; J < K.length; J++) N(S, K[J]);
      if (Z) {
        let J = Z.subTree;
        if (L === J || _s(J.type) && (J.ssContent === L || J.ssFallback === L)) {
          const le = Z.vnode;
          se(S, le, le.scopeId, le.slotScopeIds, Z.parent);
        }
      }
    }, fe = (S, L, P, K, Z, J, le, Q, ae = 0) => {
      for (let V = ae; V < S.length; V++) {
        const Ee = S[V] = Q ? Si(S[V]) : Wo(S[V]);
        H(null, Ee, L, P, K, Z, J, le, Q);
      }
    }, ie = (S, L, P, K, Z, J, le) => {
      const Q = L.el = S.el;
      let { patchFlag: ae, dynamicChildren: V, dirs: Ee } = L;
      ae |= S.patchFlag & 16;
      const ue = S.props || ke, Ie = L.props || ke;
      let Ne;
      if (P && Vi(P, false), (Ne = Ie.onVnodeBeforeUpdate) && go(Ne, P, L, S), Ee && $i(L, S, P, "beforeUpdate"), P && Vi(P, true), (ue.innerHTML && Ie.innerHTML == null || ue.textContent && Ie.textContent == null) && p(Q, ""), V ? me(S.dynamicChildren, V, Q, P, K, Qa(L, Z), J) : le || Ve(S, L, Q, null, P, K, Qa(L, Z), J, false), ae > 0) {
        if (ae & 16) Ce(Q, ue, Ie, P, Z);
        else if (ae & 2 && ue.class !== Ie.class && s(Q, "class", null, Ie.class, Z), ae & 4 && s(Q, "style", ue.style, Ie.style, Z), ae & 8) {
          const Pe = L.dynamicProps;
          for (let Ge = 0; Ge < Pe.length; Ge++) {
            const Be = Pe[Ge], Pt = ue[Be], _t = Ie[Be];
            (_t !== Pt || Be === "value") && s(Q, Be, Pt, _t, Z, P);
          }
        }
        ae & 1 && S.children !== L.children && p(Q, L.children);
      } else !le && V == null && Ce(Q, ue, Ie, P, Z);
      ((Ne = Ie.onVnodeUpdated) || Ee) && yt(() => {
        Ne && go(Ne, P, L, S), Ee && $i(L, S, P, "updated");
      }, K);
    }, me = (S, L, P, K, Z, J, le) => {
      for (let Q = 0; Q < L.length; Q++) {
        const ae = S[Q], V = L[Q], Ee = ae.el && (ae.type === Ht || !yi(ae, V) || ae.shapeFlag & 198) ? R(ae.el) : P;
        H(ae, V, Ee, null, K, Z, J, le, true);
      }
    }, Ce = (S, L, P, K, Z) => {
      if (L !== P) {
        if (L !== ke) for (const J in L) !lr(J) && !(J in P) && s(S, J, L[J], null, Z, K);
        for (const J in P) {
          if (lr(J)) continue;
          const le = P[J], Q = L[J];
          le !== Q && J !== "value" && s(S, J, Q, le, Z, K);
        }
        "value" in P && s(S, "value", L.value, P.value, Z);
      }
    }, pe = (S, L, P, K, Z, J, le, Q, ae) => {
      const V = L.el = S ? S.el : h(""), Ee = L.anchor = S ? S.anchor : h("");
      let { patchFlag: ue, dynamicChildren: Ie, slotScopeIds: Ne } = L;
      Ne && (Q = Q ? Q.concat(Ne) : Ne), S == null ? (i(V, P, K), i(Ee, P, K), fe(L.children || [], P, Ee, Z, J, le, Q, ae)) : ue > 0 && ue & 64 && Ie && S.dynamicChildren && S.dynamicChildren.length === Ie.length ? (me(S.dynamicChildren, Ie, P, Z, J, le, Q), (L.key != null || Z && L === Z.subTree) && El(S, L, true)) : Ve(S, L, P, Ee, Z, J, le, Q, ae);
    }, Ye = (S, L, P, K, Z, J, le, Q, ae) => {
      L.slotScopeIds = Q, S == null ? L.shapeFlag & 512 ? Z.ctx.activate(L, P, K, le, ae) : It(L, P, K, Z, J, le, ae) : oo(S, L, ae);
    }, It = (S, L, P, K, Z, J, le) => {
      const Q = S.component = my(S, K, Z);
      if (ga(S) && (Q.ctx.renderer = Gi), Ey(Q, false, le), Q.asyncDep) {
        if (Z && Z.registerDep(Q, Je, le), !S.el) {
          const ae = Q.subTree = Bt(Dt);
          ee(null, ae, L, P), S.placeholder = ae.el;
        }
      } else Je(Q, S, L, P, Z, J, le);
    }, oo = (S, L, P) => {
      const K = L.component = S.component;
      if (JN(S, L, P)) if (K.asyncDep && !K.asyncResolved) {
        Me(K, L, P);
        return;
      } else K.next = L, K.update();
      else L.el = S.el, K.vnode = L;
    }, Je = (S, L, P, K, Z, J, le) => {
      const Q = () => {
        if (S.isMounted) {
          let { next: ue, bu: Ie, u: Ne, parent: Pe, vnode: Ge } = S;
          {
            const fo = up(S);
            if (fo) {
              ue && (ue.el = Ge.el, Me(S, ue, le)), fo.asyncDep.then(() => {
                S.isUnmounted || Q();
              });
              return;
            }
          }
          let Be = ue, Pt;
          Vi(S, false), ue ? (ue.el = Ge.el, Me(S, ue, le)) : ue = Ge, Ie && ur(Ie), (Pt = ue.props && ue.props.onVnodeBeforeUpdate) && go(Pt, Pe, ue, Ge), Vi(S, true);
          const _t = sh(S), ho = S.subTree;
          S.subTree = _t, H(ho, _t, R(ho.el), jo(ho), S, Z, J), ue.el = _t.el, Be === null && XN(S, _t.el), Ne && yt(Ne, Z), (Pt = ue.props && ue.props.onVnodeUpdated) && yt(() => go(Pt, Pe, ue, Ge), Z);
        } else {
          let ue;
          const { el: Ie, props: Ne } = L, { bm: Pe, m: Ge, parent: Be, root: Pt, type: _t } = S, ho = Li(L);
          Vi(S, false), Pe && ur(Pe), !ho && (ue = Ne && Ne.onVnodeBeforeMount) && go(ue, Be, L), Vi(S, true);
          {
            Pt.ce && Pt.ce._def.shadowRoot !== false && Pt.ce._injectChildStyle(_t);
            const fo = S.subTree = sh(S);
            H(null, fo, P, K, S, Z, J), L.el = fo.el;
          }
          if (Ge && yt(Ge, Z), !ho && (ue = Ne && Ne.onVnodeMounted)) {
            const fo = L;
            yt(() => go(ue, Be, fo), Z);
          }
          (L.shapeFlag & 256 || Be && Li(Be.vnode) && Be.vnode.shapeFlag & 256) && S.a && yt(S.a, Z), S.isMounted = true, L = P = K = null;
        }
      };
      S.scope.on();
      const ae = S.effect = new df(Q);
      S.scope.off();
      const V = S.update = ae.run.bind(ae), Ee = S.job = ae.runIfDirty.bind(ae);
      Ee.i = S, Ee.id = S.uid, ae.scheduler = () => hl(Ee), Vi(S, true), V();
    }, Me = (S, L, P) => {
      L.component = S;
      const K = S.vnode.props;
      S.vnode = L, S.next = null, ey(S, L.props, K, P), ny(S, L.children, P), si(), Ku(S), ai();
    }, Ve = (S, L, P, K, Z, J, le, Q, ae = false) => {
      const V = S && S.children, Ee = S ? S.shapeFlag : 0, ue = L.children, { patchFlag: Ie, shapeFlag: Ne } = L;
      if (Ie > 0) {
        if (Ie & 128) {
          cn(V, ue, P, K, Z, J, le, Q, ae);
          return;
        } else if (Ie & 256) {
          Bo(V, ue, P, K, Z, J, le, Q, ae);
          return;
        }
      }
      Ne & 8 ? (Ee & 16 && Zt(V, Z, J), ue !== V && p(P, ue)) : Ee & 16 ? Ne & 16 ? cn(V, ue, P, K, Z, J, le, Q, ae) : Zt(V, Z, J, true) : (Ee & 8 && p(P, ""), Ne & 16 && fe(ue, P, K, Z, J, le, Q, ae));
    }, Bo = (S, L, P, K, Z, J, le, Q, ae) => {
      S = S || On, L = L || On;
      const V = S.length, Ee = L.length, ue = Math.min(V, Ee);
      let Ie;
      for (Ie = 0; Ie < ue; Ie++) {
        const Ne = L[Ie] = ae ? Si(L[Ie]) : Wo(L[Ie]);
        H(S[Ie], Ne, P, null, Z, J, le, Q, ae);
      }
      V > Ee ? Zt(S, Z, J, true, false, ue) : fe(L, P, K, Z, J, le, Q, ae, ue);
    }, cn = (S, L, P, K, Z, J, le, Q, ae) => {
      let V = 0;
      const Ee = L.length;
      let ue = S.length - 1, Ie = Ee - 1;
      for (; V <= ue && V <= Ie; ) {
        const Ne = S[V], Pe = L[V] = ae ? Si(L[V]) : Wo(L[V]);
        if (yi(Ne, Pe)) H(Ne, Pe, P, null, Z, J, le, Q, ae);
        else break;
        V++;
      }
      for (; V <= ue && V <= Ie; ) {
        const Ne = S[ue], Pe = L[Ie] = ae ? Si(L[Ie]) : Wo(L[Ie]);
        if (yi(Ne, Pe)) H(Ne, Pe, P, null, Z, J, le, Q, ae);
        else break;
        ue--, Ie--;
      }
      if (V > ue) {
        if (V <= Ie) {
          const Ne = Ie + 1, Pe = Ne < Ee ? L[Ne].el : K;
          for (; V <= Ie; ) H(null, L[V] = ae ? Si(L[V]) : Wo(L[V]), P, Pe, Z, J, le, Q, ae), V++;
        }
      } else if (V > Ie) for (; V <= ue; ) Ae(S[V], Z, J, true), V++;
      else {
        const Ne = V, Pe = V, Ge = /* @__PURE__ */ new Map();
        for (V = Pe; V <= Ie; V++) {
          const Yt = L[V] = ae ? Si(L[V]) : Wo(L[V]);
          Yt.key != null && Ge.set(Yt.key, V);
        }
        let Be, Pt = 0;
        const _t = Ie - Pe + 1;
        let ho = false, fo = 0;
        const Bi = new Array(_t);
        for (V = 0; V < _t; V++) Bi[V] = 0;
        for (V = Ne; V <= ue; V++) {
          const Yt = S[V];
          if (Pt >= _t) {
            Ae(Yt, Z, J, true);
            continue;
          }
          let po;
          if (Yt.key != null) po = Ge.get(Yt.key);
          else for (Be = Pe; Be <= Ie; Be++) if (Bi[Be - Pe] === 0 && yi(Yt, L[Be])) {
            po = Be;
            break;
          }
          po === void 0 ? Ae(Yt, Z, J, true) : (Bi[po - Pe] = V + 1, po >= fo ? fo = po : ho = true, H(Yt, L[po], P, null, Z, J, le, Q, ae), Pt++);
        }
        const $n = ho ? cy(Bi) : On;
        for (Be = $n.length - 1, V = _t - 1; V >= 0; V--) {
          const Yt = Pe + V, po = L[Yt], kr = L[Yt + 1], Gr = Yt + 1 < Ee ? kr.el || hp(kr) : K;
          Bi[V] === 0 ? H(null, po, P, Gr, Z, J, le, Q, ae) : ho && (Be < 0 || V !== $n[Be] ? Yo(po, P, Gr, 2) : Be--);
        }
      }
    }, Yo = (S, L, P, K, Z = null) => {
      const { el: J, type: le, transition: Q, children: ae, shapeFlag: V } = S;
      if (V & 6) {
        Yo(S.component.subTree, L, P, K);
        return;
      }
      if (V & 128) {
        S.suspense.move(L, P, K);
        return;
      }
      if (V & 64) {
        le.move(S, L, P, Gi);
        return;
      }
      if (le === Ht) {
        i(J, L, P);
        for (let ue = 0; ue < ae.length; ue++) Yo(ae[ue], L, P, K);
        i(S.anchor, L, P);
        return;
      }
      if (le === mr) {
        j(S, L, P);
        return;
      }
      if (K !== 2 && V & 1 && Q) if (K === 0) Q.beforeEnter(J), i(J, L, P), yt(() => Q.enter(J), Z);
      else {
        const { leave: ue, delayLeave: Ie, afterLeave: Ne } = Q, Pe = () => {
          S.ctx.isUnmounted ? n(J) : i(J, L, P);
        }, Ge = () => {
          J._isLeaving && J[Xo](true), ue(J, () => {
            Pe(), Ne && Ne();
          });
        };
        Ie ? Ie(J, Pe, Ge) : Ge();
      }
      else i(J, L, P);
    }, Ae = (S, L, P, K = false, Z = false) => {
      const { type: J, props: le, ref: Q, children: ae, dynamicChildren: V, shapeFlag: Ee, patchFlag: ue, dirs: Ie, cacheIndex: Ne } = S;
      if (ue === -2 && (Z = false), Q != null && (si(), Tr(Q, null, P, S, true), ai()), Ne != null && (L.renderCache[Ne] = void 0), Ee & 256) {
        L.ctx.deactivate(S);
        return;
      }
      const Pe = Ee & 1 && Ie, Ge = !Li(S);
      let Be;
      if (Ge && (Be = le && le.onVnodeBeforeUnmount) && go(Be, L, S), Ee & 6) ce(S.component, P, K);
      else {
        if (Ee & 128) {
          S.suspense.unmount(P, K);
          return;
        }
        Pe && $i(S, null, L, "beforeUnmount"), Ee & 64 ? S.type.remove(S, L, P, Gi, K) : V && !V.hasOnce && (J !== Ht || ue > 0 && ue & 64) ? Zt(V, L, P, false, true) : (J === Ht && ue & 384 || !Z && Ee & 16) && Zt(ae, L, P), K && zn(S);
      }
      (Ge && (Be = le && le.onVnodeUnmounted) || Pe) && yt(() => {
        Be && go(Be, L, S), Pe && $i(S, null, L, "unmounted");
      }, P);
    }, zn = (S) => {
      const { type: L, el: P, anchor: K, transition: Z } = S;
      if (L === Ht) {
        wa(P, K);
        return;
      }
      if (L === mr) {
        _(S);
        return;
      }
      const J = () => {
        n(P), Z && !Z.persisted && Z.afterLeave && Z.afterLeave();
      };
      if (S.shapeFlag & 1 && Z && !Z.persisted) {
        const { leave: le, delayLeave: Q } = Z, ae = () => le(P, J);
        Q ? Q(S.el, J, ae) : ae();
      } else J();
    }, wa = (S, L) => {
      let P;
      for (; S !== L; ) P = y(S), n(S), S = P;
      n(L);
    }, ce = (S, L, P) => {
      const { bum: K, scope: Z, job: J, subTree: le, um: Q, m: ae, a: V } = S;
      Ps(ae), Ps(V), K && ur(K), Z.stop(), J && (J.flags |= 8, Ae(le, S, L, P)), Q && yt(Q, L), yt(() => {
        S.isUnmounted = true;
      }, L);
    }, Zt = (S, L, P, K = false, Z = false, J = 0) => {
      for (let le = J; le < S.length; le++) Ae(S[le], L, P, K, Z);
    }, jo = (S) => {
      if (S.shapeFlag & 6) return jo(S.component.subTree);
      if (S.shapeFlag & 128) return S.suspense.next();
      const L = y(S.anchor || S.el), P = L && L[Uf];
      return P ? y(P) : L;
    };
    let io = false;
    const Wr = (S, L, P) => {
      let K;
      S == null ? L._vnode && (Ae(L._vnode, null, null, true), K = L._vnode.component) : H(L._vnode || null, S, L, null, null, null, P), L._vnode = S, io || (io = true, Ku(K), Mf(), io = false);
    }, Gi = {
      p: H,
      um: Ae,
      m: Yo,
      r: zn,
      mt: It,
      mc: fe,
      pc: Ve,
      pbc: me,
      n: jo,
      o: e
    };
    return {
      render: Wr,
      hydrate: void 0,
      createApp: $N(Wr)
    };
  }
  function Qa({ type: e, props: t }, o) {
    return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
  }
  function Vi({ effect: e, job: t }, o) {
    o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function ay(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function El(e, t, o = false) {
    const i = e.children, n = t.children;
    if (we(i) && we(n)) for (let s = 0; s < i.length; s++) {
      const l = i[s];
      let h = n[s];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = n[s] = Si(n[s]), h.el = l.el), !o && h.patchFlag !== -2 && El(l, h)), h.type === Ia && (h.patchFlag !== -1 ? h.el = l.el : h.__elIndex = s + (e.type === Ht ? 1 : 0)), h.type === Dt && !h.el && (h.el = l.el);
    }
  }
  function cy(e) {
    const t = e.slice(), o = [
      0
    ];
    let i, n, s, l, h;
    const f = e.length;
    for (i = 0; i < f; i++) {
      const g = e[i];
      if (g !== 0) {
        if (n = o[o.length - 1], e[n] < g) {
          t[i] = n, o.push(i);
          continue;
        }
        for (s = 0, l = o.length - 1; s < l; ) h = s + l >> 1, e[o[h]] < g ? s = h + 1 : l = h;
        g < e[o[s]] && (s > 0 && (t[i] = o[s - 1]), o[s] = i);
      }
    }
    for (s = o.length, l = o[s - 1]; s-- > 0; ) o[s] = l, l = t[l];
    return o;
  }
  function up(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : up(t);
  }
  function Ps(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function hp(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? hp(t.subTree) : null;
  }
  const _s = (e) => e.__isSuspense;
  function ly(e, t) {
    t && t.pendingBranch ? we(e) ? t.effects.push(...e) : t.effects.push(e) : Df(e);
  }
  let mr, Er;
  Ht = /* @__PURE__ */ Symbol.for("v-fgt");
  Ia = /* @__PURE__ */ Symbol.for("v-txt");
  Dt = /* @__PURE__ */ Symbol.for("v-cmt");
  mr = /* @__PURE__ */ Symbol.for("v-stc");
  Er = [];
  let co = null;
  mo = function(e = false) {
    Er.push(co = e ? null : []);
  };
  function uy() {
    Er.pop(), co = Er[Er.length - 1] || null;
  }
  let vr = 1;
  function Us(e, t = false) {
    vr += e, e < 0 && co && t && (co.hasOnce = true);
  }
  function dp(e) {
    return e.dynamicChildren = vr > 0 ? co || On : null, uy(), vr > 0 && co && co.push(e), e;
  }
  $o = function(e, t, o, i, n, s) {
    return dp(je(e, t, o, i, n, s, true));
  };
  Cc = function(e, t, o, i, n) {
    return dp(Bt(e, t, o, i, n, true));
  };
  Un = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function yi(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const fp = ({ key: e }) => e ?? null, Ts = ({ ref: e, ref_key: t, ref_for: o }) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || dt(e) || be(e) ? {
    i: Mt,
    r: e,
    k: t,
    f: !!o
  } : e : null);
  je = function(e, t = null, o = null, i = 0, n = null, s = e === Ht ? 0 : 1, l = false, h = false) {
    const f = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && fp(t),
      ref: t && Ts(t),
      scopeId: Pf,
      slotScopeIds: null,
      children: o,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: s,
      patchFlag: i,
      dynamicProps: n,
      dynamicChildren: null,
      appContext: null,
      ctx: Mt
    };
    return h ? (Il(f, o), s & 128 && e.normalize(f)) : o && (f.shapeFlag |= lt(o) ? 8 : 16), vr > 0 && !l && co && (f.patchFlag > 0 || s & 6) && f.patchFlag !== 32 && co.push(f), f;
  };
  Bt = hy;
  function hy(e, t = null, o = null, i = 0, n = null, s = false) {
    if ((!e || e === Zf) && (e = Dt), Un(e)) {
      const h = li(e, t, true);
      return o && Il(h, o), vr > 0 && !s && co && (h.shapeFlag & 6 ? co[co.indexOf(e)] = h : co.push(h)), h.patchFlag = -2, h;
    }
    if (Ay(e) && (e = e.__vccOpts), t) {
      t = dy(t);
      let { class: h, style: f } = t;
      h && !lt(h) && (t.class = nl(h)), Ke(f) && (fa(f) && !we(f) && (f = At({}, f)), t.style = la(f));
    }
    const l = lt(e) ? 1 : _s(e) ? 128 : Wf(e) ? 64 : Ke(e) ? 4 : be(e) ? 2 : 0;
    return je(e, t, o, i, n, l, s, true);
  }
  function dy(e) {
    return e ? fa(e) || np(e) ? At({}, e) : e : null;
  }
  li = function(e, t, o = false, i = false) {
    const { props: n, ref: s, patchFlag: l, children: h, transition: f } = e, g = t ? py(n || {}, t) : n, p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: g,
      key: g && fp(g),
      ref: t && t.ref ? o && s ? we(s) ? s.concat(Ts(t)) : [
        s,
        Ts(t)
      ] : Ts(t) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: h,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ht ? l === -1 ? 16 : l | 16 : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: f,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && li(e.ssContent),
      ssFallback: e.ssFallback && li(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return f && i && Mi(p, f.clone(p)), p;
  };
  fy = function(e = " ", t = 0) {
    return Bt(Ia, null, e, t);
  };
  FL = function(e, t) {
    const o = Bt(mr, null, e);
    return o.staticCount = t, o;
  };
  os = function(e = "", t = false) {
    return t ? (mo(), Cc(Dt, null, e)) : Bt(Dt, null, e);
  };
  function Wo(e) {
    return e == null || typeof e == "boolean" ? Bt(Dt) : we(e) ? Bt(Ht, null, e.slice()) : Un(e) ? Si(e) : Bt(Ia, null, String(e));
  }
  function Si(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : li(e);
  }
  function Il(e, t) {
    let o = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (we(t)) o = 16;
    else if (typeof t == "object") if (i & 65) {
      const n = t.default;
      n && (n._c && (n._d = false), Il(e, n()), n._c && (n._d = true));
      return;
    } else {
      o = 32;
      const n = t._;
      !n && !np(t) ? t._ctx = Mt : n === 3 && Mt && (Mt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else be(t) ? (t = {
      default: t,
      _ctx: Mt
    }, o = 32) : (t = String(t), i & 64 ? (o = 16, t = [
      fy(t)
    ]) : o = 8);
    e.children = t, e.shapeFlag |= o;
  }
  py = function(...e) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const i = e[o];
      for (const n in i) if (n === "class") t.class !== i.class && (t.class = nl([
        t.class,
        i.class
      ]));
      else if (n === "style") t.style = la([
        t.style,
        i.style
      ]);
      else if (na(n)) {
        const s = t[n], l = i[n];
        l && s !== l && !(we(s) && s.includes(l)) && (t[n] = s ? [].concat(s, l) : l);
      } else n !== "" && (t[n] = i[n]);
    }
    return t;
  };
  function go(e, t, o, i = null) {
    vo(e, t, 7, [
      o,
      i
    ]);
  }
  const Ty = Qf();
  let gy = 0;
  function my(e, t, o) {
    const i = e.type, n = (t ? t.appContext : e.appContext) || Ty, s = {
      uid: gy++,
      vnode: e,
      type: i,
      parent: t,
      appContext: n,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new lf(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(n.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: sp(i, n),
      emitsOptions: tp(i, n),
      emit: null,
      emitted: null,
      propsDefaults: ke,
      inheritAttrs: i.inheritAttrs,
      ctx: ke,
      data: ke,
      props: ke,
      attrs: ke,
      slots: ke,
      refs: ke,
      setupState: ke,
      setupContext: null,
      suspense: o,
      suspenseId: o ? o.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return s.ctx = {
      _: s
    }, s.root = t ? t.root : s, s.emit = VN.bind(null, s), e.ce && e.ce(s), s;
  }
  let Gt = null;
  ki = () => Gt || Mt;
  let Ws, Hc;
  {
    const e = ca(), t = (o, i) => {
      let n;
      return (n = e[o]) || (n = e[o] = []), n.push(i), (s) => {
        n.length > 1 ? n.forEach((l) => l(s)) : n[0](s);
      };
    };
    Ws = t("__VUE_INSTANCE_SETTERS__", (o) => Gt = o), Hc = t("__VUE_SSR_SETTERS__", (o) => Cr = o);
  }
  const Ur = (e) => {
    const t = Gt;
    return Ws(e), e.scope.on(), () => {
      e.scope.off(), Ws(t);
    };
  }, lh = () => {
    Gt && Gt.scope.off(), Ws(null);
  };
  function pp(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Cr = false;
  function Ey(e, t = false, o = false) {
    t && Hc(t);
    const { props: i, children: n } = e.vnode, s = pp(e);
    QN(e, i, s, t), iy(e, n, o || t);
    const l = s ? Iy(e, t) : void 0;
    return t && Hc(false), l;
  }
  function Iy(e, t) {
    const o = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, kN);
    const { setup: i } = o;
    if (i) {
      si();
      const n = e.setupContext = i.length > 1 ? Ry(e) : null, s = Ur(e), l = Pr(i, e, 0, [
        e.props,
        n
      ]), h = tf(l);
      if (ai(), s(), (h || e.sp) && !Li(e) && $f(e), h) {
        if (l.then(lh, lh), t) return l.then((f) => {
          uh(e, f);
        }).catch((f) => {
          pa(f, e, 0);
        });
        e.asyncDep = l;
      } else uh(e, l);
    } else Tp(e);
  }
  function uh(e, t, o) {
    be(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = bf(t)), Tp(e);
  }
  function Tp(e, t, o) {
    const i = e.type;
    e.render || (e.render = i.render || No);
    {
      const n = Ur(e);
      si();
      try {
        GN(e);
      } finally {
        ai(), n();
      }
    }
  }
  const Oy = {
    get(e, t) {
      return kt(e, "get", ""), e[t];
    }
  };
  function Ry(e) {
    const t = (o) => {
      e.exposed = o || {};
    };
    return {
      attrs: new Proxy(e.attrs, Oy),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Oa(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bf(ul(e.exposed)), {
      get(t, o) {
        if (o in t) return t[o];
        if (o in gr) return gr[o](e);
      },
      has(t, o) {
        return o in t || o in gr;
      }
    })) : e.proxy;
  }
  function Dc(e, t = true) {
    return be(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Ay(e) {
    return be(e) && "__vccOpts" in e;
  }
  Ol = (e, t) => hN(e, t, Cr);
  Sy = function(e, t, o) {
    try {
      Us(-1);
      const i = arguments.length;
      return i === 2 ? Ke(t) && !we(t) ? Un(t) ? Bt(e, null, [
        t
      ]) : Bt(e, t) : Bt(e, null, t) : (i > 3 ? o = Array.prototype.slice.call(arguments, 2) : i === 3 && Un(o) && (o = [
        o
      ]), Bt(e, t, o));
    } finally {
      Us(1);
    }
  };
  const wy = "3.5.26";
  let Mc;
  const hh = typeof window < "u" && window.trustedTypes;
  if (hh) try {
    Mc = hh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let gp, Ny, yy, Ko, dh, by, Ti, er, Wn, mp, Ep, Ly, qi, fh;
  gp = Mc ? (e) => Mc.createHTML(e) : (e) => e;
  Ny = "http://www.w3.org/2000/svg";
  yy = "http://www.w3.org/1998/Math/MathML";
  Ko = typeof document < "u" ? document : null;
  dh = Ko && Ko.createElement("template");
  by = {
    insert: (e, t, o) => {
      t.insertBefore(e, o || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, o, i) => {
      const n = t === "svg" ? Ko.createElementNS(Ny, e) : t === "mathml" ? Ko.createElementNS(yy, e) : o ? Ko.createElement(e, {
        is: o
      }) : Ko.createElement(e);
      return e === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
    },
    createText: (e) => Ko.createTextNode(e),
    createComment: (e) => Ko.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ko.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, o, i, n, s) {
      const l = o ? o.previousSibling : t.lastChild;
      if (n && (n === s || n.nextSibling)) for (; t.insertBefore(n.cloneNode(true), o), !(n === s || !(n = n.nextSibling)); ) ;
      else {
        dh.innerHTML = gp(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const h = dh.content;
        if (i === "svg" || i === "mathml") {
          const f = h.firstChild;
          for (; f.firstChild; ) h.appendChild(f.firstChild);
          h.removeChild(f);
        }
        t.insertBefore(h, o);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        o ? o.previousSibling : t.lastChild
      ];
    }
  };
  Ti = "transition";
  er = "animation";
  Wn = /* @__PURE__ */ Symbol("_vtc");
  mp = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [
      String,
      Number,
      Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  Ep = At({}, Yf, mp);
  Ly = (e) => (e.displayName = "Transition", e.props = Ep, e);
  PL = Ly((e, { slots: t }) => Sy(NN, Ip(e), t));
  qi = (e, t = []) => {
    we(e) ? e.forEach((o) => o(...t)) : e && e(...t);
  };
  fh = (e) => e ? we(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Ip(e) {
    const t = {};
    for (const pe in e) pe in mp || (t[pe] = e[pe]);
    if (e.css === false) return t;
    const { name: o = "v", type: i, duration: n, enterFromClass: s = `${o}-enter-from`, enterActiveClass: l = `${o}-enter-active`, enterToClass: h = `${o}-enter-to`, appearFromClass: f = s, appearActiveClass: g = l, appearToClass: p = h, leaveFromClass: R = `${o}-leave-from`, leaveActiveClass: y = `${o}-leave-active`, leaveToClass: N = `${o}-leave-to` } = e, M = vy(n), H = M && M[0], ne = M && M[1], { onBeforeEnter: ee, onEnter: q, onEnterCancelled: j, onLeave: _, onLeaveCancelled: re, onBeforeAppear: ge = ee, onAppear: se = q, onAppearCancelled: fe = j } = t, ie = (pe, Ye, It, oo) => {
      pe._enterCancelled = oo, Ii(pe, Ye ? p : h), Ii(pe, Ye ? g : l), It && It();
    }, me = (pe, Ye) => {
      pe._isLeaving = false, Ii(pe, R), Ii(pe, N), Ii(pe, y), Ye && Ye();
    }, Ce = (pe) => (Ye, It) => {
      const oo = pe ? se : q, Je = () => ie(Ye, pe, It);
      qi(oo, [
        Ye,
        Je
      ]), ph(() => {
        Ii(Ye, pe ? f : s), Fo(Ye, pe ? p : h), fh(oo) || Th(Ye, i, H, Je);
      });
    };
    return At(t, {
      onBeforeEnter(pe) {
        qi(ee, [
          pe
        ]), Fo(pe, s), Fo(pe, l);
      },
      onBeforeAppear(pe) {
        qi(ge, [
          pe
        ]), Fo(pe, f), Fo(pe, g);
      },
      onEnter: Ce(false),
      onAppear: Ce(true),
      onLeave(pe, Ye) {
        pe._isLeaving = true;
        const It = () => me(pe, Ye);
        Fo(pe, R), pe._enterCancelled ? (Fo(pe, y), Fc(pe)) : (Fc(pe), Fo(pe, y)), ph(() => {
          pe._isLeaving && (Ii(pe, R), Fo(pe, N), fh(_) || Th(pe, i, ne, It));
        }), qi(_, [
          pe,
          It
        ]);
      },
      onEnterCancelled(pe) {
        ie(pe, false, void 0, true), qi(j, [
          pe
        ]);
      },
      onAppearCancelled(pe) {
        ie(pe, true, void 0, true), qi(fe, [
          pe
        ]);
      },
      onLeaveCancelled(pe) {
        me(pe), qi(re, [
          pe
        ]);
      }
    });
  }
  function vy(e) {
    if (e == null) return null;
    if (Ke(e)) return [
      ec(e.enter),
      ec(e.leave)
    ];
    {
      const t = ec(e);
      return [
        t,
        t
      ];
    }
  }
  function ec(e) {
    return bw(e);
  }
  function Fo(e, t) {
    t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Wn] || (e[Wn] = /* @__PURE__ */ new Set())).add(t);
  }
  function Ii(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const o = e[Wn];
    o && (o.delete(t), o.size || (e[Wn] = void 0));
  }
  function ph(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Cy = 0;
  function Th(e, t, o, i) {
    const n = e._endId = ++Cy, s = () => {
      n === e._endId && i();
    };
    if (o != null) return setTimeout(s, o);
    const { type: l, timeout: h, propCount: f } = Op(e, t);
    if (!l) return i();
    const g = l + "end";
    let p = 0;
    const R = () => {
      e.removeEventListener(g, y), s();
    }, y = (N) => {
      N.target === e && ++p >= f && R();
    };
    setTimeout(() => {
      p < f && R();
    }, h + 1), e.addEventListener(g, y);
  }
  function Op(e, t) {
    const o = window.getComputedStyle(e), i = (M) => (o[M] || "").split(", "), n = i(`${Ti}Delay`), s = i(`${Ti}Duration`), l = gh(n, s), h = i(`${er}Delay`), f = i(`${er}Duration`), g = gh(h, f);
    let p = null, R = 0, y = 0;
    t === Ti ? l > 0 && (p = Ti, R = l, y = s.length) : t === er ? g > 0 && (p = er, R = g, y = f.length) : (R = Math.max(l, g), p = R > 0 ? l > g ? Ti : er : null, y = p ? p === Ti ? s.length : f.length : 0);
    const N = p === Ti && /\b(?:transform|all)(?:,|$)/.test(i(`${Ti}Property`).toString());
    return {
      type: p,
      timeout: R,
      propCount: y,
      hasTransform: N
    };
  }
  function gh(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((o, i) => mh(o) + mh(e[i])));
  }
  function mh(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Fc(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function Hy(e, t, o) {
    const i = e[Wn];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
  }
  let ks, Rp;
  ks = /* @__PURE__ */ Symbol("_vod");
  Rp = /* @__PURE__ */ Symbol("_vsh");
  _L = {
    name: "show",
    beforeMount(e, { value: t }, { transition: o }) {
      e[ks] = e.style.display === "none" ? "" : e.style.display, o && t ? o.beforeEnter(e) : tr(e, t);
    },
    mounted(e, { value: t }, { transition: o }) {
      o && t && o.enter(e);
    },
    updated(e, { value: t, oldValue: o }, { transition: i }) {
      !t != !o && (i ? t ? (i.beforeEnter(e), tr(e, true), i.enter(e)) : i.leave(e, () => {
        tr(e, false);
      }) : tr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      tr(e, t);
    }
  };
  function tr(e, t) {
    e.style.display = t ? e[ks] : "none", e[Rp] = !t;
  }
  const Ap = /* @__PURE__ */ Symbol("");
  UL = function(e) {
    const t = ki();
    if (!t) return;
    const o = t.ut = (n = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((s) => Gs(s, n));
    }, i = () => {
      const n = e(t.proxy);
      t.ce ? Gs(t.ce, n) : Pc(t.subTree, n), o(n);
    };
    qf(() => {
      Df(i);
    }), _r(() => {
      wn(i, No, {
        flush: "post"
      });
      const n = new MutationObserver(i);
      n.observe(t.subTree.el.parentNode, {
        childList: true
      }), Tl(() => n.disconnect());
    });
  };
  function Pc(e, t) {
    if (e.shapeFlag & 128) {
      const o = e.suspense;
      e = o.activeBranch, o.pendingBranch && !o.isHydrating && o.effects.push(() => {
        Pc(o.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Gs(e.el, t);
    else if (e.type === Ht) e.children.forEach((o) => Pc(o, t));
    else if (e.type === mr) {
      let { el: o, anchor: i } = e;
      for (; o && (Gs(o, t), o !== i); ) o = o.nextSibling;
    }
  }
  function Gs(e, t) {
    if (e.nodeType === 1) {
      const o = e.style;
      let i = "";
      for (const n in t) {
        const s = Fw(t[n]);
        o.setProperty(`--${n}`, s), i += `--${n}: ${s};`;
      }
      o[Ap] = i;
    }
  }
  const Dy = /(?:^|;)\s*display\s*:/;
  function My(e, t, o) {
    const i = e.style, n = lt(o);
    let s = false;
    if (o && !n) {
      if (t) if (lt(t)) for (const l of t.split(";")) {
        const h = l.slice(0, l.indexOf(":")).trim();
        o[h] == null && gs(i, h, "");
      }
      else for (const l in t) o[l] == null && gs(i, l, "");
      for (const l in o) l === "display" && (s = true), gs(i, l, o[l]);
    } else if (n) {
      if (t !== o) {
        const l = i[Ap];
        l && (o += ";" + l), i.cssText = o, s = Dy.test(o);
      }
    } else t && e.removeAttribute("style");
    ks in e && (e[ks] = s ? i.display : "", e[Rp] && (i.display = "none"));
  }
  const Eh = /\s*!important$/;
  function gs(e, t, o) {
    if (we(o)) o.forEach((i) => gs(e, t, i));
    else if (o == null && (o = ""), t.startsWith("--")) e.setProperty(t, o);
    else {
      const i = Fy(e, t);
      Eh.test(o) ? e.setProperty(di(i), o.replace(Eh, ""), "important") : e[i] = o;
    }
  }
  const Ih = [
    "Webkit",
    "Moz",
    "ms"
  ], tc = {};
  function Fy(e, t) {
    const o = tc[t];
    if (o) return o;
    let i = uo(t);
    if (i !== "filter" && i in e) return tc[t] = i;
    i = aa(i);
    for (let n = 0; n < Ih.length; n++) {
      const s = Ih[n] + i;
      if (s in e) return tc[t] = s;
    }
    return t;
  }
  const Oh = "http://www.w3.org/1999/xlink";
  function Rh(e, t, o, i, n, s = Mw(t)) {
    i && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Oh, t.slice(6, t.length)) : e.setAttributeNS(Oh, t, o) : o == null || s && !sf(o) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : hi(o) ? String(o) : o);
  }
  function Ah(e, t, o, i, n) {
    if (t === "innerHTML" || t === "textContent") {
      o != null && (e[t] = t === "innerHTML" ? gp(o) : o);
      return;
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const h = s === "OPTION" ? e.getAttribute("value") || "" : e.value, f = o == null ? e.type === "checkbox" ? "on" : "" : String(o);
      (h !== f || !("_value" in e)) && (e.value = f), o == null && e.removeAttribute(t), e._value = o;
      return;
    }
    let l = false;
    if (o === "" || o == null) {
      const h = typeof e[t];
      h === "boolean" ? o = sf(o) : o == null && h === "string" ? (o = "", l = true) : h === "number" && (o = 0, l = true);
    }
    try {
      e[t] = o;
    } catch {
    }
    l && e.removeAttribute(n || t);
  }
  function Py(e, t, o, i) {
    e.addEventListener(t, o, i);
  }
  function _y(e, t, o, i) {
    e.removeEventListener(t, o, i);
  }
  const Sh = /* @__PURE__ */ Symbol("_vei");
  function Uy(e, t, o, i, n = null) {
    const s = e[Sh] || (e[Sh] = {}), l = s[t];
    if (i && l) l.value = i;
    else {
      const [h, f] = Wy(t);
      if (i) {
        const g = s[t] = By(i, n);
        Py(e, h, g, f);
      } else l && (_y(e, h, l, f), s[t] = void 0);
    }
  }
  const wh = /(?:Once|Passive|Capture)$/;
  function Wy(e) {
    let t;
    if (wh.test(e)) {
      t = {};
      let i;
      for (; i = e.match(wh); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : di(e.slice(2)),
      t
    ];
  }
  let oc = 0;
  const ky = Promise.resolve(), Gy = () => oc || (ky.then(() => oc = 0), oc = Date.now());
  function By(e, t) {
    const o = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= o.attached) return;
      vo(Yy(i, o.value), t, 5, [
        i
      ]);
    };
    return o.value = e, o.attached = Gy(), o;
  }
  function Yy(e, t) {
    if (we(t)) {
      const o = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        o.call(e), e._stopped = true;
      }, t.map((i) => (n) => !n._stopped && i && i(n));
    } else return t;
  }
  const Nh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, jy = (e, t, o, i, n, s) => {
    const l = n === "svg";
    t === "class" ? Hy(e, i, l) : t === "style" ? My(e, o, i) : na(t) ? ol(t) || Uy(e, t, o, i, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : xy(e, t, i, l)) ? (Ah(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rh(e, t, i, l, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !lt(i)) ? Ah(e, uo(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Rh(e, t, i, l));
  };
  function xy(e, t, o, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && Nh(t) && be(o));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const n = e.tagName;
      if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE") return false;
    }
    return Nh(t) && lt(o) ? false : t in e;
  }
  let Sp, wp, Bs, yh, zy, $y;
  Sp = /* @__PURE__ */ new WeakMap();
  wp = /* @__PURE__ */ new WeakMap();
  Bs = /* @__PURE__ */ Symbol("_moveCb");
  yh = /* @__PURE__ */ Symbol("_enterCb");
  zy = (e) => (delete e.props.mode, e);
  $y = zy({
    name: "TransitionGroup",
    props: At({}, Ep, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const o = ki(), i = Bf();
      let n, s;
      return fl(() => {
        if (!n.length) return;
        const l = e.moveClass || `${e.name || "v"}-move`;
        if (!Ky(n[0].el, o.vnode.el, l)) {
          n = [];
          return;
        }
        n.forEach(Vy), n.forEach(qy);
        const h = n.filter(Zy);
        Fc(o.vnode.el), h.forEach((f) => {
          const g = f.el, p = g.style;
          Fo(g, l), p.transform = p.webkitTransform = p.transitionDuration = "";
          const R = g[Bs] = (y) => {
            y && y.target !== g || (!y || y.propertyName.endsWith("transform")) && (g.removeEventListener("transitionend", R), g[Bs] = null, Ii(g, l));
          };
          g.addEventListener("transitionend", R);
        }), n = [];
      }), () => {
        const l = We(e), h = Ip(l);
        let f = l.tag || Ht;
        if (n = [], s) for (let g = 0; g < s.length; g++) {
          const p = s[g];
          p.el && p.el instanceof Element && (n.push(p), Mi(p, Lr(p, h, i, o)), Sp.set(p, {
            left: p.el.offsetLeft,
            top: p.el.offsetTop
          }));
        }
        s = t.default ? dl(t.default()) : [];
        for (let g = 0; g < s.length; g++) {
          const p = s[g];
          p.key != null && Mi(p, Lr(p, h, i, o));
        }
        return Bt(f, null, s);
      };
    }
  });
  WL = $y;
  function Vy(e) {
    const t = e.el;
    t[Bs] && t[Bs](), t[yh] && t[yh]();
  }
  function qy(e) {
    wp.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function Zy(e) {
    const t = Sp.get(e), o = wp.get(e), i = t.left - o.left, n = t.top - o.top;
    if (i || n) {
      const s = e.el.style;
      return s.transform = s.webkitTransform = `translate(${i}px,${n}px)`, s.transitionDuration = "0s", e;
    }
  }
  function Ky(e, t, o) {
    const i = e.cloneNode(), n = e[Wn];
    n && n.forEach((h) => {
      h.split(/\s+/).forEach((f) => f && i.classList.remove(f));
    }), o.split(/\s+/).forEach((h) => h && i.classList.add(h)), i.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(i);
    const { hasTransform: l } = Op(i);
    return s.removeChild(i), l;
  }
  let Jy, Xy, Qy, eb;
  Jy = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Xy = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Jy.some((o) => e[`${o}Key`] && !t.includes(o))
  };
  kL = (e, t) => {
    const o = e._withMods || (e._withMods = {}), i = t.join(".");
    return o[i] || (o[i] = ((n, ...s) => {
      for (let l = 0; l < t.length; l++) {
        const h = Xy[t[l]];
        if (h && h(n, t)) return;
      }
      return e(n, ...s);
    }));
  };
  Qy = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  GL = (e, t) => {
    const o = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return o[i] || (o[i] = ((n) => {
      if (!("key" in n)) return;
      const s = di(n.key);
      if (t.some((l) => l === s || Qy[l] === s)) return e(n);
    }));
  };
  eb = At({
    patchProp: jy
  }, by);
  let bh;
  function tb() {
    return bh || (bh = ry(eb));
  }
  const Np = ((...e) => {
    const t = tb().createApp(...e), { mount: o } = t;
    return t.mount = (i) => {
      const n = ib(i);
      if (!n) return;
      const s = t._component;
      !be(s) && !s.render && !s.template && (s.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
      const l = o(n, false, ob(n));
      return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), l;
    }, t;
  });
  function ob(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function ib(e) {
    return lt(e) ? document.querySelector(e) : e;
  }
  const nb = "" + new URL("../favicon.svg", import.meta.url).href, jt = (e) => fc(e) ? e : sd(e) ? String(e) : JSON.stringify(e), Ho = {
    unloaded: (...e) => `[loadModules] Module "${jt(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${jt(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${jt(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${jt(e[0])}" failed to load.
Trackback: 
${jt(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${jt(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${jt(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${jt(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${jt(e[0])}" is missing the following dependencies: ${jt(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${jt(e[0])}" is loading its dependencies (${e.slice(1).map((t) => jt(t)).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${jt(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${jt(e[0])}" dependencies failed to load. 

Trackback: 
${jt(e[1])}`
  }, rb = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function yp(e, t, o = 1e4, i = {}, n = 0, s = 0, l = 0) {
    var _a3, _b3, _c2, _d2, _e, _f2;
    const { logger: h = rb, progressReporter: f, printLog: g = true } = i, p = e.find((H) => H.name === t);
    if (!p) throw new Error(`cannot exactly find module "${t}" from the library`);
    const R = e.findIndex((H) => H.name === p.name);
    if (e[R].status === "loaded") return g && h.info(Ho.alreadyLoaded(p.name)), {
      completed: l,
      total: s
    };
    const y = p.dependencies || [], N = e.filter((H) => y.includes(H.name)), M = y.filter((H) => !e.find((ne) => ne.name === H));
    if (M.length > 0) {
      const H = Ho.missingDependencies(p.name, M.join(", "));
      throw g && h.error(H), new Error(H);
    }
    if (e[R].status === "error") {
      const H = Ho.errorDetermined(p.name);
      throw g && h.info(H), new Error(H);
    }
    if (e[R].status === "loading") return g && h.info(Ho.alreadyLoading(p.name)), await sb(e, p.name, o, h), {
      completed: l,
      total: s
    };
    try {
      let H = s, ne = l;
      if (n === 0) {
        const ee = /* @__PURE__ */ new Set(), q = (j) => {
          if (ee.has(j)) return;
          ee.add(j);
          const _ = e.find((re) => re.name === j);
          if (_ && _.dependencies) for (const re of _.dependencies) q(re);
        };
        q(t), H = ee.size, ne = 0;
      }
      if (N.length > 0) {
        h.info(Ho.loadDependencies(p.name, N.map((ee) => ee.name)));
        for (const ee of N) {
          const q = await yp(e, ee.name, o, {
            logger: h,
            progressReporter: f,
            printLog: g
          }, n + 1, H, ne);
          ne = q.completed, H = q.total, (_a3 = f == null ? void 0 : f.onOverallProgress) == null ? void 0 : _a3.call(f, ne, H);
        }
        g && h.info(Ho.dependenciesReady(p.name));
      }
      e[R].status = "loading", (_b3 = f == null ? void 0 : f.onModuleStart) == null ? void 0 : _b3.call(f, p.displayName);
      try {
        return g && h.info(Ho.loading(p.name)), await p.moduleInit(o), e[R].status = "loaded", ne++, (_c2 = f == null ? void 0 : f.onModuleComplete) == null ? void 0 : _c2.call(f, p.displayName), (_d2 = f == null ? void 0 : f.onOverallProgress) == null ? void 0 : _d2.call(f, ne, H), g && h.info(Ho.loaded(p.name)), {
          completed: ne,
          total: H
        };
      } catch (ee) {
        e[R].status = "error";
        const q = Ho.error(p.name, fc(ee) ? ee : sd(ee) ? ee.message : JSON.stringify(ee));
        throw h.error(q), (_e = f == null ? void 0 : f.onModuleError) == null ? void 0 : _e.call(f, p.displayName, fc(ee) ? new Error(ee) : ee), new Error(q);
      }
    } catch (H) {
      e[R].status = "error", console.log(H);
      const ne = Ho.error(p.name, H);
      throw h.error(ne), (_f2 = f == null ? void 0 : f.onModuleError) == null ? void 0 : _f2.call(f, p.displayName, H), new Error(ne);
    }
  }
  async function sb(e, t, o = 1e4, i) {
    const n = Date.now();
    return new Promise((s, l) => {
      const h = setInterval(() => {
        const f = e.find((g) => g.name === t);
        if (f && f.status === "loaded") clearInterval(h), s();
        else if (Date.now() - n > o) {
          clearInterval(h);
          const g = new Error(`Load module ${t} timeout`);
          i == null ? void 0 : i.error(g.message), l(g);
        }
      }, 10);
    });
  }
  let ab, cb, Lh, lb;
  ab = "modulepreload";
  cb = function(e, t) {
    return new URL(e, t).href;
  };
  Lh = {};
  ms = function(t, o, i) {
    let n = Promise.resolve();
    if (o && o.length > 0) {
      let g = function(p) {
        return Promise.all(p.map((R) => Promise.resolve(R).then((y) => ({
          status: "fulfilled",
          value: y
        }), (y) => ({
          status: "rejected",
          reason: y
        }))));
      };
      const l = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), f = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      n = g(o.map((p) => {
        if (p = cb(p, i), p in Lh) return;
        Lh[p] = true;
        const R = p.endsWith(".css"), y = R ? '[rel="stylesheet"]' : "";
        if (i) for (let M = l.length - 1; M >= 0; M--) {
          const H = l[M];
          if (H.href === p && (!R || H.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${p}"]${y}`)) return;
        const N = document.createElement("link");
        if (N.rel = R ? "stylesheet" : ab, R || (N.as = "script"), N.crossOrigin = "", N.href = p, f && N.setAttribute("nonce", f), document.head.appendChild(N), R) return new Promise((M, H) => {
          N.addEventListener("load", M), N.addEventListener("error", () => H(new Error(`Unable to preload CSS for ${p}`)));
        });
      }));
    }
    function s(l) {
      const h = new Event("vite:preloadError", {
        cancelable: true
      });
      if (h.payload = l, window.dispatchEvent(h), !h.defaultPrevented) throw l;
    }
    return n.then((l) => {
      for (const h of l || []) h.status === "rejected" && s(h.reason);
      return t().catch(s);
    });
  };
  lb = [
    {
      name: "Open Street Map",
      id: "openstreetmap",
      url: "https://www.openstreetmap.org",
      license: "ODbL"
    },
    {
      name: "MapTiler",
      id: "maptiler",
      url: "https://www.maptiler.com"
    },
    {
      name: "FreeIPAPI",
      id: "freeipapi",
      url: "https://freeipapi.com/"
    }
  ];
  class De extends Bn {
    constructor(t, o, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", Dr.GEOLOCATION);
      this.code = o;
    }
  }
  class Vo extends De {
    constructor(t = "Geolocation update service error", o, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = o;
    }
  }
  class bo {
    constructor(t, o, i = 0) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      __publicField(this, "accuracy");
      this.latitude = t, this.longitude = o, this.accuracy = i;
    }
    toLngLatLike() {
      return [
        this.longitude,
        this.latitude
      ];
    }
    get varianceInMeter() {
      return this.accuracy / (2 * (Math.LN2 + Math.LN10));
    }
  }
  class ub {
    constructor(t) {
      __publicField(this, "strategies", []);
      __publicField(this, "activeStrategy", null);
      __publicField(this, "watcherCount", 0);
      __publicField(this, "isInitialized", false);
      this.strategies = t;
    }
    async initialise() {
      if (this.isInitialized) return k(void 0);
      for (const t of this.strategies) try {
        if (await t.isAvailable()) {
          if (this.activeStrategy = t, (await this.activeStrategy.initialize()).isErr()) {
            console.info(`[BackendManager] Backend ${t.name} not initialised`);
            continue;
          }
          return this.isInitialized = true, console.info(`[BackendManager] Initialised with ${t.name} backend`), k(void 0);
        } else console.info(`[BackendManager] Fail to initialise with ${t.name} backend, trying fallbacks`);
      } catch (o) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, o);
        continue;
      }
      return C(new De("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return C(new De("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return C(new De("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const o = await this.activeStrategy.startWatching(t);
        if (o.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, o.error), C(o.error);
      } else {
        const o = await this.activeStrategy.startWatching(t);
        if (o.isErr()) return C(o.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), k(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return k(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return C(new De(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return k(void 0);
    }
    async getCurrentPosition() {
      if (!this.isInitialized) return C(new De("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return C(new De("No backend available for current position", "BACKEND_NOT_AVAILABLE"));
      const t = await this.activeStrategy.getCurrentPosition();
      return t.isErr() ? (console.warn(`[BackendManager] Failed to get location from ${this.activeStrategy.name}:`, t.error), C(t.error)) : t;
    }
    getActiveBackend() {
      var _a3;
      return ((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || null;
    }
    isWatchingActive() {
      return this.watcherCount > 0;
    }
  }
  class hb {
    constructor() {
      __publicField(this, "callbacks", /* @__PURE__ */ new Set());
    }
    subscribe(t) {
      return this.callbacks.add(t), () => this.callbacks.delete(t);
    }
    emit(t, o) {
      for (const i of this.callbacks) try {
        i(t, o);
      } catch (n) {
        console.error("[LocationEventEmitter] Callback error:", n);
      }
    }
    clear() {
      this.callbacks.clear();
    }
    get size() {
      return this.callbacks.size;
    }
  }
  class db {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new hb();
    }
    updateLocation(t, o) {
      this.currentLocation = t, this.currentBackend = o, this.eventEmitter.emit(t, o);
    }
    getCurrentLocation() {
      return this.currentLocation;
    }
    getCurrentBackend() {
      return this.currentBackend;
    }
    subscribe(t) {
      return this.eventEmitter.subscribe(t);
    }
    clear() {
      this.currentLocation = null, this.currentBackend = null, this.eventEmitter.clear();
    }
    hasLocation() {
      return this.currentLocation !== null;
    }
  }
  class fb {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return k(void 0);
      try {
        const t = Mr();
        if (t.isErr()) return C(new De("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const o = t.value.getGeolocationProvider();
        return o ? (this.provider = o, this.isInitialized = true, k(void 0)) : C(new De("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
      } catch (t) {
        return C(new De("Exception during GPS backend initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      if (!this.isInitialized && (await this.initialize()).isErr() || !this.provider) return false;
      try {
        const t = await this.provider.getPermissionStatus();
        return t.isOk() && t.value !== "denied";
      } catch {
        return false;
      }
    }
    async startWatching(t) {
      if (!this.provider) return C(new De("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const o = await this.provider.watchPosition((i) => {
        const n = new bo(i.coords.latitude, i.coords.longitude, i.coords.accuracy);
        t(n, "gps");
      });
      return o.isErr() ? C(new De("Failed to start watching position", "UPDATE_SERVICE_ERROR", o.error)) : (this.watchId = o.value, k(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return C(new De("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return k(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return C(new De("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return C(new De("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const o = t.value;
      return k(new bo(o.coords.latitude, o.coords.longitude, o.coords.accuracy));
    }
  }
  const vh = "https://ipapi.co/json/";
  class pb {
    constructor() {
      __publicField(this, "name", "ip");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "watchInterval", null);
      __publicField(this, "lastLocation", null);
      __publicField(this, "nextCallbackId", 1);
      __publicField(this, "activeWatcherCount", 0);
    }
    async initialize() {
      return k();
    }
    async isAvailable() {
      try {
        return (await fetch(vh, {
          method: "HEAD",
          signal: AbortSignal.timeout(5e3)
        })).ok;
      } catch {
        return false;
      }
    }
    async startWatching(t) {
      const o = this.nextCallbackId++;
      return this.watchCallbacks.set(o, t), this.activeWatcherCount++, this.watchInterval === null && (this.watchInterval = setInterval(() => {
        this.updateLocation();
      }, 3e4), this.updateLocation()), k(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, k(void 0);
      } catch (t) {
        return C(new De("Failed to stop IP location watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      try {
        console.info("[IPFallbackBackend] Getting location from IP service");
        const t = await fetch(vh, {
          signal: AbortSignal.timeout(1e4)
        });
        if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
        const o = await t.json(), i = new bo(o.latitude, o.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), k(i);
      } catch (t) {
        return C(new De("Failed to get location from IP service", "POSITION_UNAVAILABLE", t));
      }
    }
    async updateLocation() {
      try {
        const t = await this.getCurrentPosition();
        if (t.isErr()) {
          console.error("[IPFallbackBackend] Error updating location:", t.error);
          return;
        }
        const o = t.value;
        if (!this.lastLocation || Math.abs(o.latitude - this.lastLocation.latitude) > 1e-4 || Math.abs(o.longitude - this.lastLocation.longitude) > 1e-4) {
          this.lastLocation = o;
          for (const i of this.watchCallbacks.values()) try {
            i(o, "ip");
          } catch (n) {
            console.error("[IPFallbackBackend] Callback error:", n);
          }
        }
      } catch (t) {
        console.error("[IPFallbackBackend] Error updating location:", t);
      }
    }
  }
  class Tb {
    constructor(t = 100) {
      __publicField(this, "imuProvider", null);
      __publicField(this, "isListening", false);
      __publicField(this, "imuCallbacks", []);
      __publicField(this, "imuUpdateInterval", null);
      this.imuUpdateIntervalMs = t;
    }
    async initialize() {
      try {
        const t = Mr();
        if (t.isErr()) return C(new De("Platform services not available for IMU", "BACKEND_NOT_AVAILABLE", t.error));
        const o = t.value.getIMU();
        return o.isErr() ? C(new De("IMU provider not available", "BACKEND_NOT_AVAILABLE", o.error)) : (this.imuProvider = o.value, k(void 0));
      } catch (t) {
        return C(new De("Exception during IMU initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      return !this.imuProvider && (await this.initialize()).isErr() ? false : !!this.imuProvider;
    }
    async startListening(t) {
      if (!this.imuProvider) return C(new De("IMU not initialized", "BACKEND_NOT_AVAILABLE"));
      if (this.isListening) return this.imuCallbacks.push(t), k(void 0);
      try {
        return this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), k(void 0);
      } catch (o) {
        return C(new De("Failed to start IMU listening", "UPDATE_SERVICE_ERROR", o));
      }
    }
    async stopListening() {
      if (!this.isListening || !this.imuProvider) return k(void 0);
      try {
        this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null);
        const t = this.imuProvider.stopAcceleration();
        t.isErr() && console.warn("[IMUFusionManager] Failed to stop acceleration sensor:", t.error);
        const o = this.imuProvider.stopGyroscope();
        return o.isErr() && console.warn("[IMUFusionManager] Failed to stop gyroscope sensor:", o.error), this.imuCallbacks = [], this.isListening = false, console.info("[IMUFusionManager] Stopped IMU sensor fusion"), k(void 0);
      } catch (t) {
        return C(new De("Failed to stop IMU listening", "UPDATE_SERVICE_ERROR", t));
      }
    }
    startIMUPolling() {
      this.imuProvider && (this.imuUpdateInterval = setInterval(async () => {
        try {
          const t = await this.getCombinedIMUReading();
          if (t) for (const o of this.imuCallbacks) try {
            o(t);
          } catch (i) {
            console.error("[IMUFusionManager] IMU callback error:", i);
          }
        } catch (t) {
          console.error("[IMUFusionManager] Error polling IMU:", t);
        }
      }, this.imuUpdateIntervalMs));
    }
    async getCombinedIMUReading() {
      if (!this.imuProvider) return null;
      try {
        const [t, o] = await Promise.all([
          this.imuProvider.getAccelerationReading(),
          this.imuProvider.getGyroscopeReading()
        ]), i = {
          timestamp: performance.now()
        };
        return t.isOk() && t.value && (i.acceleration = {
          x: t.value.x,
          y: t.value.y,
          z: t.value.z
        }), o.isOk() && o.value && (i.gyroscope = {
          x: o.value.x,
          y: o.value.y,
          z: o.value.z
        }), i;
      } catch (t) {
        return console.error("[IMUFusionManager] Error getting combined IMU reading:", t), null;
      }
    }
  }
  class gb {
    constructor() {
      __publicField(this, "worker", null);
      __publicField(this, "pendingRequests", /* @__PURE__ */ new Map());
      __publicField(this, "nextId", 0);
      __publicField(this, "isInitialized", false);
      __publicField(this, "workerModulePromise", null);
    }
    async initialize(t, o) {
      if (!this.worker) {
        console.log("[KalmanWorkerClient] Creating worker...");
        try {
          this.workerModulePromise || (this.workerModulePromise = ms(() => import("./worker-Bjk5vDxw.js"), [], import.meta.url));
          const s = await this.workerModulePromise;
          console.log("[KalmanWorkerClient] Worker module loaded"), this.worker = new s.default(), console.log("[KalmanWorkerClient] Worker instance created"), this.worker.onmessage = this.handleWorkerMessage.bind(this), this.worker.onerror = this.handleWorkerError.bind(this);
        } catch (s) {
          throw console.error("[KalmanWorkerClient] Failed to create worker:", s), new Error(`Failed to create Kalman worker: ${s instanceof Error ? s.message : String(s)}`);
        }
      }
      const i = {
        type: "INITIALIZE",
        id: this.nextId++,
        config: t,
        initialReading: o
      }, n = await this.sendMessage(i);
      if (!n.success) throw new Error(n.error || "Failed to initialize worker");
      this.isInitialized = true;
    }
    async processGPS(t) {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const o = {
        type: "PROCESS_GPS",
        id: this.nextId++,
        reading: t
      }, i = await this.sendMessage(o);
      if (!i.success) throw new Error(i.error || "Failed to process GPS reading");
    }
    async processIMU(t) {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const o = {
        type: "PROCESS_IMU",
        id: this.nextId++,
        reading: t
      }, i = await this.sendMessage(o);
      if (!i.success) throw new Error(i.error || "Failed to process IMU reading");
    }
    async getFilteredPosition() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_FILTERED_POSITION",
        id: this.nextId++
      }, o = await this.sendMessage(t);
      if (!o.success) throw new Error(o.error || "Failed to get filtered position");
      return o.data.position;
    }
    async getState() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_STATE",
        id: this.nextId++
      }, o = await this.sendMessage(t);
      if (!o.success) throw new Error(o.error || "Failed to get state");
      return o.data.state;
    }
    async getLastKalmanGain() {
      if (!this.isInitialized || !this.worker) throw new Error("Worker not initialized");
      const t = {
        type: "GET_KALMAN_GAIN",
        id: this.nextId++
      }, o = await this.sendMessage(t);
      if (!o.success) throw new Error(o.error || "Failed to get Kalman gain");
      return o.data.gain;
    }
    async reset() {
      const t = {
        type: "RESET",
        id: this.nextId++
      }, o = await this.sendMessage(t);
      if (!o.success) throw new Error(o.error || "Failed to reset worker");
      this.isInitialized = false;
    }
    dispose() {
      this.worker && (this.worker.terminate(), this.worker = null), this.workerModulePromise = null, this.pendingRequests.clear(), this.isInitialized = false;
    }
    isReady() {
      return this.isInitialized && this.worker !== null;
    }
    sendMessage(t) {
      return new Promise((o, i) => {
        if (!this.worker) {
          i(new Error("Worker not available"));
          return;
        }
        this.pendingRequests.set(t.id, {
          resolve: o,
          reject: i
        }), this.worker.postMessage(t);
      });
    }
    handleWorkerMessage(t) {
      const o = t.data;
      if (o.type === "RESULT") {
        const i = this.pendingRequests.get(o.originalId);
        i && (this.pendingRequests.delete(o.originalId), i.resolve({
          success: true,
          data: o.data
        }));
      } else if (o.type === "ERROR") if (o.originalId !== void 0) {
        const i = this.pendingRequests.get(o.originalId);
        i && (this.pendingRequests.delete(o.originalId), console.error("[KalmanWorkerClient] Worker error for request", o.originalId, ":", o.error), i.resolve({
          success: false,
          error: o.error
        }));
      } else console.error("[KalmanWorkerClient] Worker error without originalId:", o.error);
    }
    handleWorkerError(t) {
      console.error("[KalmanWorkerClient] Worker error:", t);
      for (const [, o] of this.pendingRequests) o.reject(new Error(`Worker error: ${t.message}`));
      this.pendingRequests.clear(), this.isInitialized = false, this.worker = null;
    }
  }
  const { sin: so, cos: mb, sqrt: Rl, abs: Ys, PI: qt } = Math, Ch = 6378245, Hh = 0.006693421622965823;
  function bp(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function Eb(e, t) {
    let o = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * Rl(Ys(e));
    return o += (20 * so(6 * e * qt) + 20 * so(2 * e * qt)) * 2 / 3, o += (20 * so(t * qt) + 40 * so(t / 3 * qt)) * 2 / 3, o += (160 * so(t / 12 * qt) + 320 * so(t * qt / 30)) * 2 / 3, o;
  }
  function Ib(e, t) {
    let o = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * Rl(Ys(e));
    return o += (20 * so(6 * e * qt) + 20 * so(2 * e * qt)) * 2 / 3, o += (20 * so(e * qt) + 40 * so(e / 3 * qt)) * 2 / 3, o += (150 * so(e / 12 * qt) + 300 * so(e / 30 * qt)) * 2 / 3, o;
  }
  function Ob(e, t) {
    let o = Ib(e - 105, t - 35), i = Eb(e - 105, t - 35);
    const n = t / 180 * qt;
    let s = so(n);
    s = 1 - Hh * s * s;
    const l = Rl(s);
    return o = o * 180 / (Ch / l * mb(n) * qt), i = i * 180 / (Ch * (1 - Hh) / (s * l) * qt), [
      o,
      i
    ];
  }
  function vi(e) {
    const [t, o] = e;
    if (!bp(t, o)) return [
      t,
      o
    ];
    const i = Ob(t, o);
    return [
      t + i[0],
      o + i[1]
    ];
  }
  function kn(e) {
    const [t, o] = e;
    if (!bp(t, o)) return [
      t,
      o
    ];
    let [i, n] = [
      t,
      o
    ], s = vi([
      i,
      n
    ]), l = s[0] - t, h = s[1] - o;
    for (; Ys(l) > 1e-6 || Ys(h) > 1e-6; ) i -= l, n -= h, s = vi([
      i,
      n
    ]), l = s[0] - t, h = s[1] - o;
    return [
      i,
      n
    ];
  }
  const { sin: js, cos: xs, atan2: Lp, sqrt: vp, PI: Rb } = Math, zs = Rb * 3e3 / 180;
  function Nn(e) {
    const [t, o] = e, i = t - 65e-4, n = o - 6e-3, s = vp(i * i + n * n) - 2e-5 * js(n * zs), l = Lp(n, i) - 3e-6 * xs(i * zs), h = s * xs(l), f = s * js(l);
    return [
      h,
      f
    ];
  }
  function Gn(e) {
    const [t, o] = e, i = t, n = o, s = vp(i * i + n * n) + 2e-5 * js(n * zs), l = Lp(n, i) + 3e-6 * xs(i * zs), h = s * xs(l) + 65e-4, f = s * js(l) + 6e-3;
    return [
      h,
      f
    ];
  }
  const Dh = 180 / Math.PI, Mh = Math.PI / 180, $s = 6378137, gi = 20037508342789244e-9;
  function is(e) {
    return [
      e[0] * Dh / $s,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / $s))) * Dh
    ];
  }
  function Ra(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, o = [
      $s * t * Mh,
      $s * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * Mh))
    ];
    return o[0] > gi && (o[0] = gi), o[0] < -gi && (o[0] = -gi), o[1] > gi && (o[1] = gi), o[1] < -gi && (o[1] = -gi), o;
  }
  const { abs: Vs } = Math, Fh = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], Ph = [
    75,
    60,
    45,
    30,
    15,
    0
  ], Ab = [
    [
      1410526172116255e-23,
      898305509648872e-20,
      -1.9939833816331,
      200.9824383106796,
      -187.2403703815547,
      91.6087516669843,
      -23.38765649603339,
      2.57121317296198,
      -0.03801003308653,
      173379812e-1
    ],
    [
      -7435856389565537e-24,
      8983055097726239e-21,
      -0.78625201886289,
      96.32687599759846,
      -1.85204757529826,
      -59.36935905485877,
      47.40033549296737,
      -16.50741931063887,
      2.28786674699375,
      1026014486e-2
    ],
    [
      -3030883460898826e-23,
      898305509983578e-20,
      0.30071316287616,
      59.74293618442277,
      7.357984074871,
      -25.38371002664745,
      13.45380521110908,
      -3.29883767235584,
      0.32710905363475,
      685681737e-2
    ],
    [
      -1981981304930552e-23,
      8983055099779535e-21,
      0.03278182852591,
      40.31678527705744,
      0.65659298677277,
      -4.44255534477492,
      0.85341911805263,
      0.12923347998204,
      -0.04625736007561,
      448277706e-2
    ],
    [
      309191371068437e-23,
      8983055096812155e-21,
      6995724062e-14,
      23.10934304144901,
      -23663490511e-14,
      -0.6321817810242,
      -0.00663494467273,
      0.03430082397953,
      -0.00466043876332,
      25551644e-1
    ],
    [
      2890871144776878e-24,
      8983055095805407e-21,
      -3068298e-14,
      7.47137025468032,
      -353937994e-14,
      -0.02145144861037,
      -1234426596e-14,
      10322952773e-14,
      -323890364e-14,
      826088.5
    ]
  ], Sb = [
    [
      -0.0015702102444,
      111320.7020616939,
      1704480524535203,
      -10338987376042340,
      26112667856603880,
      -35149669176653700,
      26595700718403920,
      -10725012454188240,
      1800819912950474,
      82.5
    ],
    [
      8277824516172526e-19,
      111320.7020463578,
      6477955746671607e-7,
      -4082003173641316e-6,
      1077490566351142e-5,
      -1517187553151559e-5,
      1205306533862167e-5,
      -5124939663577472e-6,
      9133119359512032e-7,
      67.5
    ],
    [
      0.00337398766765,
      111320.7020202162,
      4481351045890365e-9,
      -2339375119931662e-8,
      7968221547186455e-8,
      -1159649932797253e-7,
      9723671115602145e-8,
      -4366194633752821e-8,
      8477230501135234e-9,
      52.5
    ],
    [
      0.00220636496208,
      111320.7020209128,
      51751.86112841131,
      3796837749470245e-9,
      992013.7397791013,
      -122195221711287e-8,
      1340652697009075e-9,
      -620943.6990984312,
      144416.9293806241,
      37.5
    ],
    [
      -3441963504368392e-19,
      111320.7020576856,
      278.2353980772752,
      2485758690035394e-9,
      6070.750963243378,
      54821.18345352118,
      9540.606633304236,
      -2710.55326746645,
      1405.483844121726,
      22.5
    ],
    [
      -3218135878613132e-19,
      111320.7020701615,
      0.00369383431289,
      823725.6402795718,
      0.46104986909093,
      2351.343141331292,
      1.58060784298199,
      8.77738589078284,
      0.37238884252424,
      7.45
    ]
  ];
  function Cp(e, t, o) {
    const i = Vs(t) / o[9];
    let n = o[0] + o[1] * Vs(e), s = o[2] + o[3] * i + o[4] * Math.pow(i, 2) + o[5] * Math.pow(i, 3) + o[6] * Math.pow(i, 4) + o[7] * Math.pow(i, 5) + o[8] * Math.pow(i, 6);
    return n *= e < 0 ? -1 : 1, s *= t < 0 ? -1 : 1, [
      n,
      s
    ];
  }
  function Aa(e) {
    const [t, o] = e;
    let i = [];
    for (let n = 0; n < Ph.length; n++) if (Vs(o) > Ph[n]) {
      i = Sb[n];
      break;
    }
    return Cp(t, o, i);
  }
  function ns(e) {
    const [t, o] = e;
    let i = [];
    for (let n = 0; n < Fh.length; n++) if (Vs(o) >= Fh[n]) {
      i = Ab[n];
      break;
    }
    return Cp(t, o, i);
  }
  function mi(e, t) {
    if (!e) throw new Error(t);
  }
  function Hp(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function _h(e) {
    return !isNaN(Number(e)) && e !== null && !Hp(e);
  }
  function Eo(...e) {
    const t = e.length - 1;
    return function(...o) {
      let i = t, n = e[t].apply(null, o);
      for (; i--; ) n = e[i].call(null, n);
      return n;
    };
  }
  function Dp(e, t, o = false) {
    if (e === null) return;
    let i, n, s, l, h, f, g = 0, p = 0, R, y;
    const { type: N } = e, M = N === "FeatureCollection", H = N === "Feature", ne = M ? e.features.length : 1;
    for (let ee = 0; ee < ne; ee++) {
      R = M ? e.features[ee].geometry : H ? e.geometry : e, y = R ? R.type === "GeometryCollection" : false, f = y ? R.geometries.length : 1;
      for (let q = 0; q < f; q++) {
        let j = 0, _ = 0;
        if (l = y ? R.geometries[q] : R, l === null) continue;
        const re = l.type;
        switch (g = o && (re === "Polygon" || re === "MultiPolygon") ? 1 : 0, re) {
          case null:
            break;
          case "Point":
            if (h = l.coordinates, t(h, p, ee, j, _) === false) return false;
            p++, j++;
            break;
          case "LineString":
          case "MultiPoint":
            for (h = l.coordinates, i = 0; i < h.length; i++) {
              if (t(h[i], p, ee, j, _) === false) return false;
              p++, re === "MultiPoint" && j++;
            }
            re === "LineString" && j++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (h = l.coordinates, i = 0; i < h.length; i++) {
              for (n = 0; n < h[i].length - g; n++) {
                if (t(h[i][n], p, ee, j, _) === false) return false;
                p++;
              }
              re === "MultiLineString" && j++, re === "Polygon" && _++;
            }
            re === "Polygon" && j++;
            break;
          case "MultiPolygon":
            for (h = l.coordinates, i = 0; i < h.length; i++) {
              for (_ = 0, n = 0; n < h[i].length; n++) {
                for (s = 0; s < h[i][n].length - g; s++) {
                  if (t(h[i][n][s], p, ee, j, _) === false) return false;
                  p++;
                }
                _++;
              }
              j++;
            }
            break;
          case "GeometryCollection":
            for (i = 0; i < l.geometries.length; i++) if (Dp(l.geometries[i], t, o) === false) return false;
            break;
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
    }
  }
  var ct;
  (function(e) {
    e.WGS84 = "WGS84", e.WGS1984 = "WGS84", e.EPSG4326 = "WGS84", e.GCJ02 = "GCJ02", e.AMap = "GCJ02", e.BD09 = "BD09", e.BD09LL = "BD09", e.Baidu = "BD09", e.BMap = "BD09", e.BD09MC = "BD09MC", e.BD09Meter = "BD09MC", e.EPSG3857 = "EPSG3857", e.EPSG900913 = "EPSG3857", e.EPSG102100 = "EPSG3857", e.WebMercator = "EPSG3857", e.WM = "EPSG3857";
  })(ct || (ct = {}));
  const wb = {
    to: {
      [ct.GCJ02]: vi,
      [ct.BD09]: Eo(Gn, vi),
      [ct.BD09MC]: Eo(Aa, Gn, vi),
      [ct.EPSG3857]: Ra
    }
  }, Nb = {
    to: {
      [ct.WGS84]: kn,
      [ct.BD09]: Gn,
      [ct.BD09MC]: Eo(Aa, Gn),
      [ct.EPSG3857]: Eo(Ra, kn)
    }
  }, yb = {
    to: {
      [ct.WGS84]: Eo(kn, Nn),
      [ct.GCJ02]: Nn,
      [ct.EPSG3857]: Eo(Ra, kn, Nn),
      [ct.BD09MC]: Aa
    }
  }, bb = {
    to: {
      [ct.WGS84]: is,
      [ct.GCJ02]: Eo(vi, is),
      [ct.BD09]: Eo(Gn, vi, is),
      [ct.BD09MC]: Eo(Aa, Gn, vi, is)
    }
  }, Lb = {
    to: {
      [ct.WGS84]: Eo(kn, Nn, ns),
      [ct.GCJ02]: Eo(Nn, ns),
      [ct.EPSG3857]: Eo(Ra, kn, Nn, ns),
      [ct.BD09]: ns
    }
  }, vb = {
    WGS84: wb,
    GCJ02: Nb,
    BD09: yb,
    EPSG3857: bb,
    BD09MC: Lb
  };
  var Cb = vb;
  function Hb(e, t, o) {
    if (mi(!!e, "The args[0] input coordinate is required"), mi(!!t, "The args[1] original coordinate system is required"), mi(!!o, "The args[2] target coordinate system is required"), t === o) return e;
    const i = Cb[t];
    mi(!!i, `Invalid original coordinate system: ${t}`);
    const n = i.to[o];
    mi(!!n, `Invalid target coordinate system: ${o}`);
    const s = typeof e;
    if (mi(s === "string" || s === "object", `Invalid input coordinate type: ${s}`), s === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let l = false;
    Hp(e) && (mi(e.length >= 2, `Invalid input coordinate: ${e}`), mi(_h(e[0]) && _h(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), l = true);
    const h = n;
    return l ? h(e) : (Dp(e, (f) => {
      [f[0], f[1]] = h(f);
    }), e);
  }
  const yn = Object.assign(Object.assign({}, ct), {
    CRSTypes: ct,
    transform: Hb
  }), Uh = 6378137;
  class Mp {
    constructor(t) {
      __publicField(this, "referencePoint", null);
      __publicField(this, "localProjection", null);
      __publicField(this, "geolocationCorrectionEnabled");
      __publicField(this, "cachedWGS84Projection", null);
      __publicField(this, "cachedLocalProjection", null);
      __publicField(this, "cachedPoint", null);
      this.geolocationCorrectionEnabled = this.getGeolocationCorrectionSetting(), (t == null ? void 0 : t.referencePoint) && this.setReferencePoint(t.referencePoint, t.projection);
    }
    dispose() {
      this.cachedWGS84Projection && (this.cachedWGS84Projection.free(), this.cachedWGS84Projection = null), this.cachedLocalProjection && (this.cachedLocalProjection.free(), this.cachedLocalProjection = null), this.cachedPoint && (this.cachedPoint.free(), this.cachedPoint = null), this.referencePoint = null, this.localProjection = null;
    }
    getWGS84Projection() {
      return this.cachedWGS84Projection || (this.cachedWGS84Projection = new Pn(fs.WGS84)), this.cachedWGS84Projection;
    }
    getLocalProjectionObj() {
      if (!this.cachedLocalProjection || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      return this.cachedLocalProjection;
    }
    getPoint() {
      return this.cachedPoint || (this.cachedPoint = new el(0, 0, 0)), this.cachedPoint;
    }
    getGeolocationCorrectionSetting() {
      return Ft("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, o) {
      this.referencePoint = t, this.localProjection = o || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`, this.cachedLocalProjection && this.cachedLocalProjection.free(), this.cachedLocalProjection = new Pn(this.localProjection);
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      let o = t;
      if (this.geolocationCorrectionEnabled) {
        const l = new bo(t.latitude, t.longitude);
        o = Fp(l);
      }
      const i = this.getWGS84Projection(), n = this.getLocalProjectionObj(), s = this.getPoint();
      s.x = o.longitude, s.y = o.latitude, s.z = 0;
      try {
        return Ic(i, n, s), {
          x: s.x,
          y: s.y
        };
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      const o = this.getLocalProjectionObj(), i = this.getWGS84Projection(), n = this.getPoint();
      n.x = t.x, n.y = t.y, n.z = 0;
      try {
        Ic(o, i, n);
        const s = {
          longitude: n.x,
          latitude: n.y
        };
        if (this.geolocationCorrectionEnabled) {
          const l = new bo(s.latitude, s.longitude);
          return Db(l);
        }
        return s;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const o = 6371e3, i = this.referencePoint.latitude * Math.PI / 180, n = this.referencePoint.longitude * Math.PI / 180, s = t.latitude * Math.PI / 180, l = t.longitude * Math.PI / 180, h = o * (l - n) * Math.cos((i + s) / 2), f = o * (s - i);
      return {
        x: h,
        y: f
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const o = this.referencePoint.latitude * Math.PI / 180, i = this.referencePoint.longitude * Math.PI / 180, n = (t.y / Uh + o) * 180 / Math.PI, s = (t.x / (Uh * Math.cos(o)) + i) * 180 / Math.PI;
      return {
        latitude: n,
        longitude: s
      };
    }
    getReferencePoint() {
      return this.referencePoint;
    }
    getLocalProjection() {
      return this.localProjection;
    }
    isInitialized() {
      return this.referencePoint !== null && this.localProjection !== null;
    }
  }
  function Fp(e) {
    const t = yn.transform([
      e.longitude,
      e.latitude
    ], yn.WGS84, yn.GCJ02);
    return new bo(t[1], t[0]);
  }
  function Db(e) {
    const t = yn.transform([
      e.longitude,
      e.latitude
    ], yn.GCJ02, yn.WGS84);
    return new bo(t[1], t[0]);
  }
  new Mp();
  class Mb {
    constructor(t, o, i = 100) {
      __publicField(this, "workerClient");
      __publicField(this, "coordinateTransformer");
      __publicField(this, "imuManager");
      __publicField(this, "callback", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "lastOutputTime", 0);
      __publicField(this, "lastOutputAccuracy", 0);
      __publicField(this, "debugEnabled", false);
      __publicField(this, "config");
      __publicField(this, "cachedState", null);
      __publicField(this, "cachedGain", null);
      this.workerClient = new gb(), this.coordinateTransformer = new Mp(), this.imuManager = new Tb(i), this.callback = t, this.config = o, this.debugEnabled = o.debugEnabled || false;
    }
    async initialize(t) {
      try {
        this.coordinateTransformer.setReferencePoint({
          longitude: t.longitude,
          latitude: t.latitude
        });
        const o = await this.coordinateTransformer.geographicToLocal({
          longitude: t.longitude,
          latitude: t.latitude
        });
        let i;
        t.speed !== void 0 && t.heading !== void 0 && (i = this.gpsVelocityToLocal(t.speed, t.heading));
        const n = {
          x: o.x,
          y: o.y,
          accuracy: t.accuracy,
          timestamp: t.timestamp,
          velocity: i
        };
        (await this.imuManager.initialize()).isErr() && console.warn("[LocationProcessor] IMU not available, using GPS-only mode");
        const l = {
          ...this.config,
          debugEnabled: this.debugEnabled
        };
        return await this.workerClient.initialize(l, n), this.isInitialized = true, await this.updateCachedState(), k(void 0);
      } catch (o) {
        return C(new De("Failed to initialize location processor", "UPDATE_SERVICE_ERROR", o));
      }
    }
    async startGPS() {
      try {
        return await this.imuManager.isAvailable() && (await this.imuManager.startListening((i) => {
          this.processIMUReading(i);
        })).isErr() && console.warn("[LocationProcessor] Failed to start IMU, using GPS-only"), this.isInitialized = true, console.info("[LocationProcessor] Started location processing"), k(void 0);
      } catch (t) {
        return C(new De("Failed to start GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async stopGPS() {
      try {
        const t = await this.imuManager.stopListening();
        return t.isErr() && console.warn("[LocationProcessor] Failed to stop IMU:", t.error), this.workerClient.dispose(), this.isInitialized = false, this.cachedState = null, this.cachedGain = null, console.info("[LocationProcessor] Stopped location processing"), k(void 0);
      } catch (t) {
        return C(new De("Failed to stop GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async processGPSLocation(t) {
      if (!this.isInitialized) {
        console.warn("[LocationProcessor] Processor not initialized, ignoring GPS reading");
        return;
      }
      try {
        const o = await this.coordinateTransformer.geographicToLocal({
          longitude: t.longitude,
          latitude: t.latitude
        });
        let i;
        t.speed !== void 0 && t.heading !== void 0 && (i = this.gpsVelocityToLocal(t.speed, t.heading));
        const n = {
          x: o.x,
          y: o.y,
          accuracy: t.accuracy,
          timestamp: t.timestamp,
          velocity: i
        };
        await this.workerClient.processGPS(n), this.lastOutputAccuracy = t.accuracy, await this.outputFilteredPosition();
      } catch (o) {
        console.error("[LocationProcessor] Error processing GPS location:", o);
      }
    }
    async processIMUReading(t) {
      if (!this.isInitialized || !this.workerClient.isReady()) {
        this.isInitialized && !this.workerClient.isReady() && console.log("[LocationProcessor] Kalman filter not yet initialized, buffering IMU reading");
        return;
      }
      try {
        this.debugEnabled && console.log("[LocationProcessor] Processing IMU reading:", {
          timestamp: t.timestamp,
          acceleration: t.acceleration
        }), await this.workerClient.processIMU(t), await this.outputPredictedPosition();
      } catch (o) {
        console.error("[LocationProcessor] Error processing IMU reading:", o);
      }
    }
    async outputFilteredPosition() {
      try {
        const t = await this.workerClient.getFilteredPosition(), o = await this.coordinateTransformer.localToGeographic(t), i = new bo(o.latitude, o.longitude, this.lastOutputAccuracy || 10);
        await this.updateCachedState(), this.notifyCallback(i);
      } catch (t) {
        console.error("[LocationProcessor] Error outputting filtered position:", t);
      }
    }
    async outputPredictedPosition() {
      const t = performance.now();
      if (!(t - this.lastOutputTime < 50)) {
        this.lastOutputTime = t;
        try {
          const o = await this.workerClient.getFilteredPosition(), i = await this.coordinateTransformer.localToGeographic(o), n = new bo(i.latitude, i.longitude, this.lastOutputAccuracy || 10);
          await this.updateCachedState(), this.notifyCallback(n);
        } catch (o) {
          console.error("[LocationProcessor] Error outputting predicted position:", o);
        }
      }
    }
    async getCurrentFilteredPosition() {
      if (!this.workerClient.isReady()) return C(new De("Kalman filter not initialized", "UPDATE_SERVICE_ERROR"));
      try {
        const t = await this.workerClient.getFilteredPosition(), o = await this.coordinateTransformer.localToGeographic(t), i = new bo(o.latitude, o.longitude, this.lastOutputAccuracy || 10);
        return k(i);
      } catch (t) {
        return C(new De("Failed to get filtered position", "UPDATE_SERVICE_ERROR", t));
      }
    }
    getLastKalmanGain() {
      return this.cachedGain;
    }
    getKalmanState() {
      return this.cachedState;
    }
    isProcessorInitialized() {
      return this.isInitialized;
    }
    async updateCachedState() {
      try {
        const t = await this.workerClient.getState(), o = new Po(t.covariance);
        this.cachedState = {
          position: t.position,
          velocity: t.velocity,
          acceleration: t.acceleration,
          covariance: o,
          timestamp: t.timestamp
        };
        const i = await this.workerClient.getLastKalmanGain();
        this.cachedGain = i ? new Po(i) : null;
      } catch (t) {
        console.error("[LocationProcessor] Failed to update cached Kalman state:", t);
      }
    }
    gpsVelocityToLocal(t, o) {
      const i = o * Math.PI / 180, n = t * Math.sin(i), s = t * Math.cos(i);
      return {
        x: n,
        y: s
      };
    }
    notifyCallback(t) {
      if (this.callback) try {
        this.callback(t, "kalman");
      } catch (o) {
        console.error("[LocationProcessor] Callback error:", o);
      }
    }
  }
  class Fb {
    constructor(t = {
      sigmaAcceleration: 1,
      initialPositionUncertainty: 20,
      initialVelocityUncertainty: 4,
      imuUpdateInterval: 100,
      gpsSpeedUncertainty: 2,
      debugEnabled: false
    }) {
      __publicField(this, "name", "kalman");
      __publicField(this, "provider", null);
      __publicField(this, "processor", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "userCallback", null);
      this.config = t;
    }
    async initialize() {
      if (this.isInitialized) return k(void 0);
      try {
        const t = Mr();
        if (t.isErr()) return C(new De("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const o = t.value.getGeolocationProvider();
        if (!o) return C(new De("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = o;
        const i = await this.provider.getCurrentPosition();
        if (i.isErr()) return C(new De("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", i.error));
        this.processor = new Mb((s, l) => this.handleLocationUpdate(s), {
          initialAccelerationUncertainty: this.config.sigmaAcceleration,
          initialPositionUncertainty: this.config.initialPositionUncertainty,
          initialVelocityUncertainty: this.config.initialVelocityUncertainty,
          gpsSpeedUncertainty: this.config.gpsSpeedUncertainty,
          debugEnabled: this.config.debugEnabled
        }, this.config.imuUpdateInterval);
        const n = await this.processor.initialize({
          latitude: i.value.coords.latitude,
          longitude: i.value.coords.longitude,
          accuracy: i.value.coords.accuracy,
          timestamp: performance.now(),
          speed: i.value.coords.speed ?? void 0,
          heading: i.value.coords.heading ?? void 0
        });
        return n.isErr() ? n : (this.isInitialized = true, k(void 0));
      } catch (t) {
        return C(new De("Exception during Kalman backend initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      if (!this.isInitialized && (await this.initialize()).isErr() || !this.provider) return false;
      try {
        const t = await this.provider.getPermissionStatus();
        return t.isOk() && t.value !== "denied";
      } catch {
        return false;
      }
    }
    async startWatching(t) {
      if (!this.provider || !this.processor) return C(new De("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        this.userCallback = t;
        const o = await this.provider.watchPosition((n) => {
          var _a3;
          const s = {
            latitude: n.coords.latitude,
            longitude: n.coords.longitude,
            accuracy: n.coords.accuracy,
            timestamp: performance.now(),
            speed: n.coords.speed ?? void 0,
            heading: n.coords.heading ?? void 0
          };
          (_a3 = this.processor) == null ? void 0 : _a3.processGPSLocation(s);
        }, {
          highFrequency: true
        });
        if (o.isErr()) return C(new De("Failed to start watching position", "UPDATE_SERVICE_ERROR", o.error));
        this.watchId = o.value;
        const i = await this.processor.startGPS();
        return i.isErr() ? (this.watchId !== null && this.provider && this.provider.clearWatch(this.watchId), i) : (console.info("[KalmanBackend] Started Kalman-filtered location watching"), k(void 0));
      } catch (o) {
        return C(new De("Exception during start watching", "UPDATE_SERVICE_ERROR", o));
      }
    }
    async stopWatching() {
      if (!this.provider || !this.processor) return k(void 0);
      try {
        const t = await this.processor.stopGPS();
        if (t.isErr() && console.warn("[KalmanBackend] Failed to stop processor cleanly:", t.error), this.watchId !== null) {
          const o = this.provider.clearWatch(this.watchId);
          o.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", o.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), k(void 0);
      } catch (t) {
        return C(new De("Exception during stop watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      if (!this.provider || !this.processor) return C(new De("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        const t = await this.provider.getCurrentPosition();
        if (t.isErr()) return C(new De("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
        const o = t.value, i = {
          latitude: o.coords.latitude,
          longitude: o.coords.longitude,
          accuracy: o.coords.accuracy,
          timestamp: performance.now(),
          speed: o.coords.speed ?? void 0,
          heading: o.coords.heading ?? void 0
        };
        return await this.processor.processGPSLocation(i), await this.processor.getCurrentFilteredPosition();
      } catch (t) {
        return C(new De("Exception getting current position", "UPDATE_SERVICE_ERROR", t));
      }
    }
    getLastKalmanGain() {
      return this.processor ? this.processor.getLastKalmanGain() : null;
    }
    getKalmanState() {
      return this.processor ? this.processor.getKalmanState() : null;
    }
    handleLocationUpdate(t) {
      if (this.userCallback) try {
        this.userCallback(t, "kalman");
      } catch (o) {
        console.error("[KalmanBackend] User callback error:", o);
      }
    }
  }
  Ao = (_b2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [], o = Ft("geolocationBackend"), i = o === "auto" ? rI() : o === "kalman", n = o === "auto" || o === "gps", s = o === "auto" || o === "ip";
      if (i) {
        const l = pc(), h = l > 0 ? Math.floor(1e3 / l) : 50;
        t.push(new Fb({
          imuUpdateInterval: h,
          sigmaAcceleration: 1,
          initialPositionUncertainty: 20,
          initialVelocityUncertainty: 4,
          gpsSpeedUncertainty: 2,
          debugEnabled: false
        }));
      }
      n && t.push(new fb()), s && t.push(new pb()), console.info(`[GeolocationManager] Initializing with backend preference: ${o}, strategies: ${t.map((l) => l.name).join(", ")}`), this.backendManager = new ub(t), this.stateManager = new db();
    }
    static async getInstance() {
      if (Ao.instance || (Ao.instance = new Ao()), !Ao.instance.isInitialized) {
        const t = await Ao.instance.initialize();
        if (t.isErr()) return C(t.error);
      }
      return k(Ao.instance);
    }
    static getExistingInstance() {
      if (!Ao.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return Ao.instance;
    }
    static reset() {
      Ao.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), k(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((i, n) => {
          this.notifyCallbacks(i);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), C(new Vo("No geolocation backend available", "no_backend_available", t.error));
        const o = await this.backendManager.getCurrentPosition();
        return o.isOk() ? (this.stateManager.updateLocation(o.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), k(void 0)) : C(new Vo("Backend selected fail to obtain geolocation", "backend_error", o.error));
      } catch (t) {
        const o = $r(t, "Failed to initialize geolocation manager");
        return xi(o, "GeolocationManager.initialize"), C(new Vo("Exception during initialization", "initialization_failed", o));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new Vo("Geolocation manager not initialized", "not_initialized");
        return xi(t, "GeolocationManager.getCurrentLocation"), C(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const o = $r(t, "Failed to get current location");
        return xi(o, "GeolocationManager.getCurrentLocation"), C(new Vo("Failed to get current location", "get_location_failed", o));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const o = new Vo("Geolocation manager not initialized", "not_initialized");
        return xi(o, "GeolocationManager.startLocationUpdates"), C(o);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const o = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(o, t);
        const i = await this.backendManager.startWatching((n, s) => {
          this.stateManager.updateLocation(n, s), this.notifyCallbacks(n);
        });
        return i.isErr() ? (this.locationUpdateCallbacks.delete(o), C(i.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${o}`), k(o));
      } catch (o) {
        const i = $r(o, "Failed to start location updates");
        return xi(i, "GeolocationManager.startLocationUpdates"), C(new Vo("Failed to start location updates", "start_updates_failed", i));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const o = new Vo("Geolocation manager not initialized", "not_initialized");
        return xi(o, "GeolocationManager.stopLocationUpdates"), C(o);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const o = await this.backendManager.stopWatching();
          if (o.isErr()) return C(o.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), k(void 0);
      } catch (o) {
        const i = $r(o, "Failed to stop location updates");
        return xi(i, "GeolocationManager.stopLocationUpdates"), C(new Vo("Failed to stop location updates", "stop_updates_failed", i));
      }
    }
    isServiceRunning() {
      return this.backendManager.isWatchingActive();
    }
    isUsingGPS() {
      const t = this.backendManager.getActiveBackend();
      return t === "gps" || t === "kalman";
    }
    getCurrentBackend() {
      return this.backendManager.getActiveBackend();
    }
    getLastKnownLocation() {
      const t = this.stateManager.getCurrentLocation();
      return t || (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new bo(0, 0));
    }
    addLocationListener(t) {
      const o = this.nextCallbackId++;
      return this.locationUpdateCallbacks.set(o, t), o;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    getLastKalmanGain() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const o = this.backendManager.strategies.find((i) => i.name === "kalman");
        if (o && "getLastKalmanGain" in o) return o.getLastKalmanGain();
      }
      return null;
    }
    getKalmanState() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const o = this.backendManager.strategies.find((i) => i.name === "kalman");
        if (o && "getKalmanState" in o) return o.getKalmanState();
      }
      return null;
    }
    applyGeolocationCorrection(t) {
      return Ft("geolocationCorrection") ? Fp(t) : t;
    }
    notifyCallbacks(t) {
      const o = this.applyGeolocationCorrection(t), i = hd(o);
      for (const n of this.locationUpdateCallbacks.values()) try {
        n(i);
      } catch (s) {
        console.error("[GeolocationManager] Callback error:", s);
      }
    }
    async refreshBackend() {
      return k(void 0);
    }
  }, __publicField(_b2, "instance", null), _b2);
  let Pp;
  const Sa = (e) => Pp = e, _p = /* @__PURE__ */ Symbol();
  function _c(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Ir;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Ir || (Ir = {}));
  function Up() {
    const e = uf(true), t = e.run(() => Kt({}));
    let o = [], i = [];
    const n = ul({
      install(s) {
        Sa(n), n._a = s, s.provide(_p, n), s.config.globalProperties.$pinia = n, i.forEach((l) => o.push(l)), i = [];
      },
      use(s) {
        return this._a ? o.push(s) : i.push(s), this;
      },
      _p: o,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return n;
  }
  const Wp = () => {
  };
  function Wh(e, t, o, i = Wp) {
    e.add(t);
    const n = () => {
      e.delete(t) && i();
    };
    return !o && hf() && Pw(n), n;
  }
  function pn(e, ...t) {
    e.forEach((o) => {
      o(...t);
    });
  }
  const Pb = (e) => e(), kh = /* @__PURE__ */ Symbol(), ic = /* @__PURE__ */ Symbol();
  function Uc(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((o, i) => e.set(i, o)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const o in t) {
      if (!t.hasOwnProperty(o)) continue;
      const i = t[o], n = e[o];
      _c(n) && _c(i) && e.hasOwnProperty(o) && !dt(i) && !ni(i) ? e[o] = Uc(n, i) : e[o] = i;
    }
    return e;
  }
  const _b = /* @__PURE__ */ Symbol();
  function Ub(e) {
    return !_c(e) || !Object.prototype.hasOwnProperty.call(e, _b);
  }
  const { assign: Oi } = Object;
  function Wb(e) {
    return !!(dt(e) && e.effect);
  }
  function kb(e, t, o, i) {
    const { state: n, actions: s, getters: l } = t, h = o.state.value[e];
    let f;
    function g() {
      h || (o.state.value[e] = n ? n() : {});
      const p = aN(o.state.value[e]);
      return Oi(p, s, Object.keys(l || {}).reduce((R, y) => (R[y] = ul(Ol(() => {
        Sa(o);
        const N = o._s.get(e);
        return l[y].call(N, N);
      })), R), {}));
    }
    return f = kp(e, g, t, o, i, true), f;
  }
  function kp(e, t, o = {}, i, n, s) {
    let l;
    const h = Oi({
      actions: {}
    }, o), f = {
      deep: true
    };
    let g, p, R = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), N;
    const M = i.state.value[e];
    !s && !M && (i.state.value[e] = {}), Kt({});
    let H;
    function ne(fe) {
      let ie;
      g = p = false, typeof fe == "function" ? (fe(i.state.value[e]), ie = {
        type: Ir.patchFunction,
        storeId: e,
        events: N
      }) : (Uc(i.state.value[e], fe), ie = {
        type: Ir.patchObject,
        payload: fe,
        storeId: e,
        events: N
      });
      const me = H = /* @__PURE__ */ Symbol();
      Cf().then(() => {
        H === me && (g = true);
      }), p = true, pn(R, ie, i.state.value[e]);
    }
    const ee = s ? function() {
      const { state: ie } = o, me = ie ? ie() : {};
      this.$patch((Ce) => {
        Oi(Ce, me);
      });
    } : Wp;
    function q() {
      l.stop(), R.clear(), y.clear(), i._s.delete(e);
    }
    const j = (fe, ie = "") => {
      if (kh in fe) return fe[ic] = ie, fe;
      const me = function() {
        Sa(i);
        const Ce = Array.from(arguments), pe = /* @__PURE__ */ new Set(), Ye = /* @__PURE__ */ new Set();
        function It(Me) {
          pe.add(Me);
        }
        function oo(Me) {
          Ye.add(Me);
        }
        pn(y, {
          args: Ce,
          name: me[ic],
          store: re,
          after: It,
          onError: oo
        });
        let Je;
        try {
          Je = fe.apply(this && this.$id === e ? this : re, Ce);
        } catch (Me) {
          throw pn(Ye, Me), Me;
        }
        return Je instanceof Promise ? Je.then((Me) => (pn(pe, Me), Me)).catch((Me) => (pn(Ye, Me), Promise.reject(Me))) : (pn(pe, Je), Je);
      };
      return me[kh] = true, me[ic] = ie, me;
    }, _ = {
      _p: i,
      $id: e,
      $onAction: Wh.bind(null, y),
      $patch: ne,
      $reset: ee,
      $subscribe(fe, ie = {}) {
        const me = Wh(R, fe, ie.detached, () => Ce()), Ce = l.run(() => wn(() => i.state.value[e], (pe) => {
          (ie.flush === "sync" ? p : g) && fe({
            storeId: e,
            type: Ir.direct,
            events: N
          }, pe);
        }, Oi({}, f, ie)));
        return me;
      },
      $dispose: q
    }, re = da(_);
    i._s.set(e, re);
    const se = (i._a && i._a.runWithContext || Pb)(() => i._e.run(() => (l = uf()).run(() => t({
      action: j
    }))));
    for (const fe in se) {
      const ie = se[fe];
      if (dt(ie) && !Wb(ie) || ni(ie)) s || (M && Ub(ie) && (dt(ie) ? ie.value = M[fe] : Uc(ie, M[fe])), i.state.value[e][fe] = ie);
      else if (typeof ie == "function") {
        const me = j(ie, fe);
        se[fe] = me, h.actions[fe] = ie;
      }
    }
    return Oi(re, se), Oi(We(re), se), Object.defineProperty(re, "$state", {
      get: () => i.state.value[e],
      set: (fe) => {
        ne((ie) => {
          Oi(ie, fe);
        });
      }
    }), i._p.forEach((fe) => {
      Oi(re, l.run(() => fe({
        store: re,
        app: i._a,
        pinia: i,
        options: h
      })));
    }), M && s && o.hydrate && o.hydrate(re.$state, M), g = true, p = true, re;
  }
  BL = function(e, t, o) {
    let i;
    const n = typeof t == "function";
    i = n ? o : t;
    function s(l, h) {
      const f = EN();
      return l = l || (f ? fr(_p, null) : null), l && Sa(l), l = Pp, l._s.has(e) || (n ? kp(e, t, i, l) : kb(e, i, l)), l._s.get(e);
    }
    return s.$id = e, s;
  };
  var Gb = [
    {
      id: "indoorequal-vue-maplibre-gl",
      name: "@indoorequal/vue-maplibre-gl",
      description: "Vue 3 plugin for maplibre-gl",
      url: "https://github.com/indoorequal/vue-maplibre-gl.git",
      homepage: "",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2021 Volker Nauruhn, 2024 Fran\xE7ois de Metz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
      isDev: false
    },
    {
      id: "tauri-apps-api",
      name: "@tauri-apps/api",
      description: "Tauri API definitions",
      url: "git+https://github.com/tauri-apps/tauri.git",
      homepage: "https://github.com/tauri-apps/tauri#readme",
      licenseType: "Apache-2.0 OR MIT",
      license: "",
      isDev: false
    },
    {
      id: "tauri-apps-plugin-fs",
      name: "@tauri-apps/plugin-fs",
      description: "Access the file system.",
      url: "https://github.com/tauri-apps/plugins-workspace",
      homepage: "",
      licenseType: "MIT OR Apache-2.0",
      license: "",
      isDev: false
    },
    {
      id: "tauri-apps-plugin-store",
      name: "@tauri-apps/plugin-store",
      description: "Simple, persistent key-value store.",
      url: "https://github.com/tauri-apps/plugins-workspace",
      homepage: "",
      licenseType: "MIT OR Apache-2.0",
      license: "",
      isDev: false
    },
    {
      id: "vicons-tabler",
      name: "@vicons/tabler",
      description: "Vue3 SVG icon components integrated from [`tabler`](https://github.com/tabler/tabler-icons)",
      url: "",
      homepage: "",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "vueuse-core",
      name: "@vueuse/core",
      description: "Collection of essential Vue Composition Utilities",
      url: "git+https://github.com/vueuse/vueuse.git",
      homepage: "https://github.com/vueuse/vueuse#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2019-PRESENT Anthony Fu<https://github.com/antfu>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "wangeditor-editor",
      name: "@wangeditor/editor",
      description: "Web rich text editor, Web \u5BCC\u6587\u672C\u7F16\u8F91\u5668",
      url: "git+https://github.com/wangeditor-team/wangEditor.git",
      homepage: "https://www.wangeditor.com/",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2021 - present wangEditor-team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "wangeditor-editor-for-vue",
      name: "@wangeditor/editor-for-vue",
      description: "wangEditor component for vue@next",
      url: "git+https://github.com/wangeditor-team/wangEditor-for-vue3.git",
      homepage: "http://www.wangeditor.com/",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "gcoord",
      name: "gcoord",
      description: "geographic coordinate library",
      url: "git+https://github.com/hujiulong/gcoord.git",
      homepage: "https://github.com/hujiulong/gcoord#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2018-present, Jiulong Hu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "lodash-es",
      name: "lodash-es",
      description: "Lodash exported as ES modules.",
      url: "lodash/lodash",
      homepage: "https://lodash.com/custom-builds",
      licenseType: "MIT",
      license: `Copyright OpenJS Foundation and other contributors <https://openjsf.org/>

Based on Underscore.js, copyright Jeremy Ashkenas,
DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/lodash/lodash

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

Copyright and related rights for sample code are waived via CC0. Sample
code is defined as all source code displayed within the prose of the
documentation.

CC0: http://creativecommons.org/publicdomain/zero/1.0/

====

Files located in the node_modules and vendor directories are externally
maintained libraries used by this software which have their own
licenses; we recommend you read them, as their terms may differ from the
terms above.
`,
      isDev: false
    },
    {
      id: "maplibre-gl",
      name: "maplibre-gl",
      description: "BSD licensed community fork of mapbox-gl, a WebGL interactive maps library",
      url: "git://github.com/maplibre/maplibre-gl-js.git",
      homepage: "https://maplibre.org/",
      licenseType: "BSD-3-Clause",
      license: `Copyright (c) 2023, MapLibre contributors

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.
    * Neither the name of MapLibre GL JS nor the names of its contributors
      may be used to endorse or promote products derived from this software
      without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


-------------------------------------------------------------------------------

Contains code from mapbox-gl-js v1.13 and earlier

Version v1.13 of mapbox-gl-js and earlier are licensed under a BSD-3-Clause license

Copyright (c) 2020, Mapbox
Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.
* Neither the name of Mapbox GL JS nor the names of its contributors
  may be used to endorse or promote products derived from this software
  without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


-------------------------------------------------------------------------------

Contains code from glfx.js

Copyright (C) 2011 by Evan Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

--------------------------------------------------------------------------------

Contains a portion of d3-color https://github.com/d3/d3-color

Copyright 2010-2016 Mike Bostock
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the author nor the names of contributors may be used to
  endorse or promote products derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
`,
      isDev: false
    },
    {
      id: "markdown-it-task-lists",
      name: "markdown-it-task-lists",
      description: "A markdown-it plugin to create GitHub-style task lists",
      url: "git@github.com:revin/markdown-it-task-lists.git",
      homepage: "https://github.com/revin/markdown-it-task-lists#readme",
      licenseType: "ISC",
      license: `Copyright (c) 2016, Revin Guillen

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`,
      isDev: false
    },
    {
      id: "markdown-it-ts",
      name: "markdown-it-ts",
      description: "A TypeScript implementation of the markdown-it library with separate parse and render functionalities.",
      url: "",
      homepage: "",
      licenseType: "MIT",
      license: `Copyright (c) 2014 Vitaly Puzrin, Alex Kocharin.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "ml-matrix",
      name: "ml-matrix",
      description: "Matrix manipulation and computation library",
      url: "https://github.com/mljs/matrix.git",
      homepage: "https://github.com/mljs/matrix",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2014 Micha\xEBl Zasso

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

`,
      isDev: false
    },
    {
      id: "nano-vue-i18n",
      name: "nano-vue-i18n",
      description: "A stupidly simple yet ultra-lightweight i18n plugin for Vue 3, designed for high-frequency rendering scenarios.",
      url: "git@github.com:Anson2251/nano-vue-i18n.git",
      homepage: "https://github.com/Anson2251/nano-vue-i18n#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2026 Anson2251

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "neverthrow",
      name: "neverthrow",
      description: "Stop throwing errors, and instead return Results!",
      url: "git+https://github.com/supermacro/neverthrow.git",
      homepage: "https://github.com/supermacro/neverthrow#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2019 Giorgio Delgado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

`,
      isDev: false
    },
    {
      id: "nosleep-js",
      name: "nosleep.js",
      description: "Prevent display sleep and enable wake lock in any Android or iOS web browser",
      url: "https://github.com/richtr/NoSleep.js.git",
      homepage: "https://github.com/richtr/NoSleep.js",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) Rich Tibbett

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "openpgp",
      name: "openpgp",
      description: "OpenPGP.js is a Javascript implementation of the OpenPGP protocol. This is defined in RFC 4880.",
      url: "https://github.com/openpgpjs/openpgpjs",
      homepage: "https://openpgpjs.org/",
      licenseType: "LGPL-3.0+",
      license: `                   GNU LESSER GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.


  This version of the GNU Lesser General Public License incorporates
the terms and conditions of version 3 of the GNU General Public
License, supplemented by the additional permissions listed below.

  0. Additional Definitions.

  As used herein, "this License" refers to version 3 of the GNU Lesser
General Public License, and the "GNU GPL" refers to version 3 of the GNU
General Public License.

  "The Library" refers to a covered work governed by this License,
other than an Application or a Combined Work as defined below.

  An "Application" is any work that makes use of an interface provided
by the Library, but which is not otherwise based on the Library.
Defining a subclass of a class defined by the Library is deemed a mode
of using an interface provided by the Library.

  A "Combined Work" is a work produced by combining or linking an
Application with the Library.  The particular version of the Library
with which the Combined Work was made is also called the "Linked
Version".

  The "Minimal Corresponding Source" for a Combined Work means the
Corresponding Source for the Combined Work, excluding any source code
for portions of the Combined Work that, considered in isolation, are
based on the Application, and not on the Linked Version.

  The "Corresponding Application Code" for a Combined Work means the
object code and/or source code for the Application, including any data
and utility programs needed for reproducing the Combined Work from the
Application, but excluding the System Libraries of the Combined Work.

  1. Exception to Section 3 of the GNU GPL.

  You may convey a covered work under sections 3 and 4 of this License
without being bound by section 3 of the GNU GPL.

  2. Conveying Modified Versions.

  If you modify a copy of the Library, and, in your modifications, a
facility refers to a function or data to be supplied by an Application
that uses the facility (other than as an argument passed when the
facility is invoked), then you may convey a copy of the modified
version:

   a) under this License, provided that you make a good faith effort to
   ensure that, in the event an Application does not supply the
   function or data, the facility still operates, and performs
   whatever part of its purpose remains meaningful, or

   b) under the GNU GPL, with none of the additional permissions of
   this License applicable to that copy.

  3. Object Code Incorporating Material from Library Header Files.

  The object code form of an Application may incorporate material from
a header file that is part of the Library.  You may convey such object
code under terms of your choice, provided that, if the incorporated
material is not limited to numerical parameters, data structure
layouts and accessors, or small macros, inline functions and templates
(ten or fewer lines in length), you do both of the following:

   a) Give prominent notice with each copy of the object code that the
   Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the object code with a copy of the GNU GPL and this license
   document.

  4. Combined Works.

  You may convey a Combined Work under terms of your choice that,
taken together, effectively do not restrict modification of the
portions of the Library contained in the Combined Work and reverse
engineering for debugging such modifications, if you also do each of
the following:

   a) Give prominent notice with each copy of the Combined Work that
   the Library is used in it and that the Library and its use are
   covered by this License.

   b) Accompany the Combined Work with a copy of the GNU GPL and this license
   document.

   c) For a Combined Work that displays copyright notices during
   execution, include the copyright notice for the Library among
   these notices, as well as a reference directing the user to the
   copies of the GNU GPL and this license document.

   d) Do one of the following:

       0) Convey the Minimal Corresponding Source under the terms of this
       License, and the Corresponding Application Code in a form
       suitable for, and under terms that permit, the user to
       recombine or relink the Application with a modified version of
       the Linked Version to produce a modified Combined Work, in the
       manner specified by section 6 of the GNU GPL for conveying
       Corresponding Source.

       1) Use a suitable shared library mechanism for linking with the
       Library.  A suitable mechanism is one that (a) uses at run time
       a copy of the Library already present on the user's computer
       system, and (b) will operate properly with a modified version
       of the Library that is interface-compatible with the Linked
       Version.

   e) Provide Installation Information, but only if you would otherwise
   be required to provide such information under section 6 of the
   GNU GPL, and only to the extent that such information is
   necessary to install and execute a modified version of the
   Combined Work produced by recombining or relinking the
   Application with a modified version of the Linked Version. (If
   you use option 4d0, the Installation Information must accompany
   the Minimal Corresponding Source and Corresponding Application
   Code. If you use option 4d1, you must provide the Installation
   Information in the manner specified by section 6 of the GNU GPL
   for conveying Corresponding Source.)

  5. Combined Libraries.

  You may place library facilities that are a work based on the
Library side by side in a single library together with other library
facilities that are not Applications and are not covered by this
License, and convey such a combined library under terms of your
choice, if you do both of the following:

   a) Accompany the combined library with a copy of the same work based
   on the Library, uncombined with any other library facilities,
   conveyed under the terms of this License.

   b) Give prominent notice with the combined library that part of it
   is a work based on the Library, and explaining where to find the
   accompanying uncombined form of the same work.

  6. Revised Versions of the GNU Lesser General Public License.

  The Free Software Foundation may publish revised and/or new versions
of the GNU Lesser General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

  Each version is given a distinguishing version number. If the
Library as you received it specifies that a certain numbered version
of the GNU Lesser General Public License "or any later version"
applies to it, you have the option of following the terms and
conditions either of that published version or of any later version
published by the Free Software Foundation. If the Library as you
received it does not specify a version number of the GNU Lesser
General Public License, you may choose any version of the GNU Lesser
General Public License ever published by the Free Software Foundation.

  If the Library as you received it specifies that a proxy can decide
whether future versions of the GNU Lesser General Public License shall
apply, that proxy's public statement of acceptance of any version is
permanent authorization for you to choose that version for the
Library.
`,
      isDev: false
    },
    {
      id: "pinia",
      name: "pinia",
      description: "Intuitive, type safe and flexible Store for Vue",
      url: "git+https://github.com/vuejs/pinia.git",
      homepage: "https://pinia.vuejs.org",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2019-present Eduardo San Martin Morote

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "proj4rs",
      name: "proj4rs",
      description: "Rust adaptation of Proj4",
      url: "https://github.com/3liz/proj4rs/",
      homepage: "https://github.com/3liz/proj4rs/",
      licenseType: "MIT OR Apache-2.0",
      license: "",
      isDev: false
    },
    {
      id: "sitdown",
      name: "sitdown",
      description: "Convert HTML into Markdown with JavaScript.Support GitHub Flavored Markdown Spec.Also support almost wechat/zhihu/csdn/juejin HTML.",
      url: "git+https://github.com/mdnice/sitdown.git",
      homepage: "https://github.com/mdnice/sitdown#readme",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "terra-draw",
      name: "terra-draw",
      description: "Frictionless map drawing across mapping provider",
      url: "JamesLMilner/terra-draw",
      homepage: "",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "terra-draw-maplibre-gl-adapter",
      name: "terra-draw-maplibre-gl-adapter",
      description: "Terra Draw Adapter for Maplibre GL JS",
      url: "JamesLMilner/terra-draw",
      homepage: "",
      licenseType: "MIT",
      license: "",
      isDev: false
    },
    {
      id: "typescript",
      name: "typescript",
      description: "TypeScript is a language for application scale JavaScript development",
      url: "https://github.com/microsoft/TypeScript.git",
      homepage: "https://www.typescriptlang.org/",
      licenseType: "Apache-2.0",
      license: `Apache License\r
\r
Version 2.0, January 2004\r
\r
http://www.apache.org/licenses/ \r
\r
TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\r
\r
1. Definitions.\r
\r
"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.\r
\r
"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.\r
\r
"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.\r
\r
"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.\r
\r
"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.\r
\r
"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.\r
\r
"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).\r
\r
"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.\r
\r
"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."\r
\r
"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.\r
\r
2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.\r
\r
3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.\r
\r
4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:\r
\r
You must give any other recipients of the Work or Derivative Works a copy of this License; and\r
\r
You must cause any modified files to carry prominent notices stating that You changed the files; and\r
\r
You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and\r
\r
If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.\r
\r
5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.\r
\r
6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.\r
\r
7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.\r
\r
8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.\r
\r
9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.\r
\r
END OF TERMS AND CONDITIONS\r
`,
      isDev: false
    },
    {
      id: "ua-parser-js",
      name: "ua-parser-js",
      description: "Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent & Client Hints data. Supports browser & node.js environment",
      url: "https://github.com/faisalman/ua-parser-js.git",
      homepage: "https://uaparser.dev",
      licenseType: "AGPL-3.0-or-later",
      license: `# GNU AFFERO GENERAL PUBLIC LICENSE

Version 3, 19 November 2007

Copyright (C) 2007 Free Software Foundation, Inc.
<https://fsf.org/>

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

## Preamble

The GNU Affero General Public License is a free, copyleft license for
software and other kinds of works, specifically designed to ensure
cooperation with the community in the case of network server software.

The licenses for most software and other practical works are designed
to take away your freedom to share and change the works. By contrast,
our General Public Licenses are intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains
free software for all its users.

When we speak of free software, we are referring to freedom, not
price. Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

Developers that use our General Public Licenses protect your rights
with two steps: (1) assert copyright on the software, and (2) offer
you this License which gives you legal permission to copy, distribute
and/or modify the software.

A secondary benefit of defending all users' freedom is that
improvements made in alternate versions of the program, if they
receive widespread use, become available for other developers to
incorporate. Many developers of free software are heartened and
encouraged by the resulting cooperation. However, in the case of
software used on network servers, this result may fail to come about.
The GNU General Public License permits making a modified version and
letting the public access it on a server without ever releasing its
source code to the public.

The GNU Affero General Public License is designed specifically to
ensure that, in such cases, the modified source code becomes available
to the community. It requires the operator of a network server to
provide the source code of the modified version running there to the
users of that server. Therefore, public use of a modified version, on
a publicly accessible server, gives the public access to the source
code of the modified version.

An older license, called the Affero General Public License and
published by Affero, was designed to accomplish similar goals. This is
a different license, not a version of the Affero GPL, but Affero has
released a new version of the Affero GPL which permits relicensing
under this license.

The precise terms and conditions for copying, distribution and
modification follow.

## TERMS AND CONDITIONS

### 0. Definitions.

"This License" refers to version 3 of the GNU Affero General Public
License.

"Copyright" also means copyright-like laws that apply to other kinds
of works, such as semiconductor masks.

"The Program" refers to any copyrightable work licensed under this
License. Each licensee is addressed as "you". "Licensees" and
"recipients" may be individuals or organizations.

To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of
an exact copy. The resulting work is called a "modified version" of
the earlier work or a work "based on" the earlier work.

A "covered work" means either the unmodified Program or a work based
on the Program.

To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy. Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

To "convey" a work means any kind of propagation that enables other
parties to make or receive copies. Mere interaction with a user
through a computer network, with no transfer of a copy, is not
conveying.

An interactive user interface displays "Appropriate Legal Notices" to
the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License. If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

### 1. Source Code.

The "source code" for a work means the preferred form of the work for
making modifications to it. "Object code" means any non-source form of
a work.

A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form. A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities. However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work. For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

The Corresponding Source need not include anything that users can
regenerate automatically from other parts of the Corresponding Source.

The Corresponding Source for a work in source code form is that same
work.

### 2. Basic Permissions.

All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met. This License explicitly affirms your unlimited
permission to run the unmodified Program. The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work. This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

You may make, run and propagate covered works that you do not convey,
without conditions so long as your license otherwise remains in force.
You may convey covered works to others for the sole purpose of having
them make modifications exclusively for you, or provide you with
facilities for running those works, provided that you comply with the
terms of this License in conveying all material for which you do not
control copyright. Those thus making or running the covered works for
you must do so exclusively on your behalf, under your direction and
control, on terms that prohibit them from making any copies of your
copyrighted material outside their relationship with you.

Conveying under any other circumstances is permitted solely under the
conditions stated below. Sublicensing is not allowed; section 10 makes
it unnecessary.

### 3. Protecting Users' Legal Rights From Anti-Circumvention Law.

No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such
circumvention is effected by exercising rights under this License with
respect to the covered work, and you disclaim any intention to limit
operation or modification of the work as a means of enforcing, against
the work's users, your or third parties' legal rights to forbid
circumvention of technological measures.

### 4. Conveying Verbatim Copies.

You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

### 5. Conveying Modified Source Versions.

You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these
conditions:

-   a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.
-   b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under
    section 7. This requirement modifies the requirement in section 4
    to "keep intact all notices".
-   c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy. This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged. This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.
-   d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit. Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

### 6. Conveying Non-Source Forms.

You may convey a covered work in object code form under the terms of
sections 4 and 5, provided that you also convey the machine-readable
Corresponding Source under the terms of this License, in one of these
ways:

-   a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.
-   b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the Corresponding
    Source from a network server at no charge.
-   c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source. This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.
-   d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge. You need not require recipients to copy the
    Corresponding Source along with the object code. If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source. Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.
-   e) Convey the object code using peer-to-peer transmission,
    provided you inform other peers where the object code and
    Corresponding Source of the work are being offered to the general
    public at no charge under subsection 6d.

A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal,
family, or household purposes, or (2) anything designed or sold for
incorporation into a dwelling. In determining whether a product is a
consumer product, doubtful cases shall be resolved in favor of
coverage. For a particular product received by a particular user,
"normally used" refers to a typical or common use of that class of
product, regardless of the status of the particular user or of the way
in which the particular user actually uses, or expects or is expected
to use, the product. A product is a consumer product regardless of
whether the product has substantial commercial, industrial or
non-consumer uses, unless such uses represent the only significant
mode of use of the product.

"Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to
install and execute modified versions of a covered work in that User
Product from a modified version of its Corresponding Source. The
information must suffice to ensure that the continued functioning of
the modified object code is in no case prevented or interfered with
solely because modification has been made.

If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information. But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or
updates for a work that has been modified or installed by the
recipient, or for the User Product in which it has been modified or
installed. Access to a network may be denied when the modification
itself materially and adversely affects the operation of the network
or violates the rules and protocols for communication across the
network.

Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

### 7. Additional Terms.

"Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law. If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it. (Additional permissions may be written to require their own
removal in certain cases when you modify the work.) You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders
of that material) supplement the terms of this License with terms:

-   a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or
-   b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or
-   c) Prohibiting misrepresentation of the origin of that material,
    or requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or
-   d) Limiting the use for publicity purposes of names of licensors
    or authors of the material; or
-   e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or
-   f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions
    of it) with contractual assumptions of liability to the recipient,
    for any liability that these contractual assumptions directly
    impose on those licensors and authors.

All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10. If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term. If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions; the
above requirements apply either way.

### 8. Termination.

You may not propagate or modify a covered work except as expressly
provided under this License. Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

However, if you cease all violation of this License, then your license
from a particular copyright holder is reinstated (a) provisionally,
unless and until the copyright holder explicitly and finally
terminates your license, and (b) permanently, if the copyright holder
fails to notify you of the violation by some reasonable means prior to
60 days after the cessation.

Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License. If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

### 9. Acceptance Not Required for Having Copies.

You are not required to accept this License in order to receive or run
a copy of the Program. Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance. However,
nothing other than this License grants you permission to propagate or
modify any covered work. These actions infringe copyright if you do
not accept this License. Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

### 10. Automatic Licensing of Downstream Recipients.

Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License. You are not responsible
for enforcing compliance by third parties with this License.

An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations. If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License. For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

### 11. Patents.

A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based. The
work thus licensed is called the contributor's "contributor version".

A contributor's "essential patent claims" are all patent claims owned
or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version. For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement). To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients. "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

A patent license is "discriminatory" if it does not include within the
scope of its coverage, prohibits the exercise of, or is conditioned on
the non-exercise of one or more of the rights that are specifically
granted under this License. You may not convey a covered work if you
are a party to an arrangement with a third party that is in the
business of distributing software, under which you make payment to the
third party based on the extent of your activity of conveying the
work, and under which the third party grants, to any of the parties
who would receive the covered work from you, a discriminatory patent
license (a) in connection with copies of the covered work conveyed by
you (or copies made from those copies), or (b) primarily for and in
connection with specific products or compilations that contain the
covered work, unless you entered into that arrangement, or that patent
license was granted, prior to 28 March 2007.

Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

### 12. No Surrender of Others' Freedom.

If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License. If you cannot convey a
covered work so as to satisfy simultaneously your obligations under
this License and any other pertinent obligations, then as a
consequence you may not convey it at all. For example, if you agree to
terms that obligate you to collect a royalty for further conveying
from those to whom you convey the Program, the only way you could
satisfy both those terms and this License would be to refrain entirely
from conveying the Program.

### 13. Remote Network Interaction; Use with the GNU General Public License.

Notwithstanding any other provision of this License, if you modify the
Program, your modified version must prominently offer all users
interacting with it remotely through a computer network (if your
version supports such interaction) an opportunity to receive the
Corresponding Source of your version by providing access to the
Corresponding Source from a network server at no charge, through some
standard or customary means of facilitating copying of software. This
Corresponding Source shall include the Corresponding Source for any
work covered by version 3 of the GNU General Public License that is
incorporated pursuant to the following paragraph.

Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU General Public License into a single
combined work, and to convey the resulting work. The terms of this
License will continue to apply to the part which is the covered work,
but the work with which it is combined will remain governed by version
3 of the GNU General Public License.

### 14. Revised Versions of this License.

The Free Software Foundation may publish revised and/or new versions
of the GNU Affero General Public License from time to time. Such new
versions will be similar in spirit to the present version, but may
differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the Program
specifies that a certain numbered version of the GNU Affero General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation. If the Program does not specify a version number of the
GNU Affero General Public License, you may choose any version ever
published by the Free Software Foundation.

If the Program specifies that a proxy can decide which future versions
of the GNU Affero General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

Later license versions may give you additional or different
permissions. However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

### 15. Disclaimer of Warranty.

THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT
WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND
PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE
DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR
CORRECTION.

### 16. Limitation of Liability.

IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR
CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES,
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT
NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR
LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM
TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER
PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

### 17. Interpretation of Sections 15 and 16.

If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

END OF TERMS AND CONDITIONS`,
      isDev: false
    },
    {
      id: "uuid",
      name: "uuid",
      description: "RFC9562 UUIDs",
      url: "https://github.com/uuidjs/uuid.git",
      homepage: "",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2010-2020 Robert Kieffer and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "vue",
      name: "vue",
      description: "The progressive JavaScript framework for building modern web UI.",
      url: "git+https://github.com/vuejs/core.git",
      homepage: "https://github.com/vuejs/core/tree/main/packages/vue#readme",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2018-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`,
      isDev: false
    },
    {
      id: "zod",
      name: "zod",
      description: "TypeScript-first schema declaration and validation library with static type inference",
      url: "git+https://github.com/colinhacks/zod.git",
      homepage: "https://zod.dev",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2025 Colin McDonnell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: false
    },
    {
      id: "tauri-apps-cli",
      name: "@tauri-apps/cli",
      description: "Command line interface for building Tauri apps",
      url: "git+https://github.com/tauri-apps/tauri.git",
      homepage: "https://github.com/tauri-apps/tauri#readme",
      licenseType: "Apache-2.0 OR MIT",
      license: "",
      isDev: true
    },
    {
      id: "tsconfig-node-lts",
      name: "@tsconfig/node-lts",
      description: "A base TSConfig for working with Node LTS (22).",
      url: "https://github.com/tsconfig/bases.git",
      homepage: "",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) Microsoft Corporation.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-geojson",
      name: "@types/geojson",
      description: "TypeScript definitions for geojson",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/geojson",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-lodash-es",
      name: "@types/lodash-es",
      description: "TypeScript definitions for lodash-es",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash-es",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-node",
      name: "@types/node",
      description: "TypeScript definitions for node",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-ua-parser-js",
      name: "@types/ua-parser-js",
      description: "TypeScript definitions for ua-parser-js",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/ua-parser-js",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "types-uuid",
      name: "@types/uuid",
      description: "TypeScript definitions for uuid",
      url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
      homepage: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/uuid",
      licenseType: "MIT",
      license: `    MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
`,
      isDev: true
    },
    {
      id: "vitejs-plugin-basic-ssl",
      name: "@vitejs/plugin-basic-ssl",
      description: "A Vite plugin to generate untrusted certificates for HTTPS dev servers",
      url: "git+https://github.com/vitejs/vite-plugin-basic-ssl.git",
      homepage: "https://github.com/vitejs/vite-plugin-basic-ssl/#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2019-present, Yuxi (Evan) You and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vitejs-plugin-vue",
      name: "@vitejs/plugin-vue",
      description: "The official plugin for Vue SFC support in Vite.",
      url: "git+https://github.com/vitejs/vite-plugin-vue.git",
      homepage: "https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vue-eslint-config-typescript",
      name: "@vue/eslint-config-typescript",
      description: "ESLint config for TypeScript + Vue.js projects",
      url: "git+https://github.com/vuejs/eslint-config-typescript.git",
      homepage: "https://github.com/vuejs/eslint-config-typescript#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2018-present Evan You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vue-tsconfig",
      name: "@vue/tsconfig",
      description: "A base TSConfig for working with Vue.js",
      url: "git+https://github.com/vuejs/tsconfig.git",
      homepage: "https://github.com/vuejs/tsconfig#readme",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2022-present vuejs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "dotenv",
      name: "dotenv",
      description: "Loads environment variables from .env file",
      url: "git://github.com/motdotla/dotenv.git",
      homepage: "https://github.com/motdotla/dotenv#readme",
      licenseType: "BSD-2-Clause",
      license: `Copyright (c) 2015, Scott Motte
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
`,
      isDev: true
    },
    {
      id: "globals",
      name: "globals",
      description: "Global identifiers from different JavaScript environments",
      url: "sindresorhus/globals",
      homepage: "",
      licenseType: "MIT",
      license: "",
      isDev: true
    },
    {
      id: "naive-ui",
      name: "naive-ui",
      description: "A Vue 3 Component Library. Fairly Complete, Theme Customizable, Uses TypeScript, Fast",
      url: "https://github.com/tusen-ai/naive-ui",
      homepage: "https://www.naiveui.com",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2021 TuSimple

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "oxlint",
      name: "oxlint",
      description: "Linter for the JavaScript Oxidation Compiler",
      url: "git+https://github.com/oxc-project/oxc",
      homepage: "https://oxc.rs",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2024-present VoidZero Inc. & Contributors
Copyright (c) 2023 Boshen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "typedoc",
      name: "typedoc",
      description: "Create api documentation for TypeScript projects.",
      url: "git://github.com/TypeStrong/TypeDoc.git",
      homepage: "https://typedoc.org",
      licenseType: "Apache-2.0",
      license: `Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright {yyyy} {name of copyright owner}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`,
      isDev: true
    },
    {
      id: "typedoc-plugin-markdown",
      name: "typedoc-plugin-markdown",
      description: "A plugin for TypeDoc that enables TypeScript API documentation to be generated in Markdown.",
      url: "git+https://github.com/typedoc2md/typedoc-plugin-markdown.git",
      homepage: "https://typedoc-plugin-markdown.org",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2024 Thomas Grey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vite",
      name: "vite",
      description: "Native-ESM powered web dev build tool",
      url: "git+https://github.com/vitejs/vite.git",
      homepage: "https://vite.dev",
      licenseType: "MIT",
      license: `# Vite core license
Vite is released under the MIT license:

MIT License

Copyright (c) 2019-present, VoidZero Inc. and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Licenses of bundled dependencies
The published Vite artifact additionally contains code with the following licenses:
BSD-2-Clause, CC0-1.0, ISC, MIT

# Bundled dependencies:
## @jridgewell/gen-mapping, @jridgewell/remapping, @jridgewell/sourcemap-codec, @jridgewell/trace-mapping
License: MIT
By: Justin Ridgewell
Repositories: https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps

> Copyright 2024 Justin Ridgewell <justin@ridgewell.name>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/resolve-uri
License: MIT
By: Justin Ridgewell
Repository: https://github.com/jridgewell/resolve-uri

> Copyright 2019 Justin Ridgewell <jridgewell@google.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @polka/compression
License: MIT
Repository: https://github.com/lukeed/polka

---------------------------------------

## @polka/url
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/polka

---------------------------------------

## @rolldown/pluginutils
License: MIT
Repository: https://github.com/rolldown/rolldown

> MIT License
> 
> Copyright (c) 2024-present VoidZero Inc. & Contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
> 
> end of terms and conditions
> 
> The licenses of externally maintained libraries from which parts of the Software is derived are listed [here](https://github.com/rolldown/rolldown/blob/main/THIRD-PARTY-LICENSE).

---------------------------------------

## @rollup/plugin-alias, @rollup/plugin-commonjs, @rollup/plugin-dynamic-import-vars, @rollup/pluginutils
License: MIT
By: Johannes Stein
Repository: https://github.com/rollup/plugins

License: MIT
By: Rich Harris
Repository: https://github.com/rollup/plugins

License: MIT
By: LarsDenBakker
Repository: https://github.com/rollup/plugins

License: MIT
By: Rich Harris
Repository: https://github.com/rollup/plugins

> The MIT License (MIT)
> 
> Copyright (c) 2019 RollupJS Plugin Contributors (https://github.com/rollup/plugins/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## anymatch
License: ISC
By: Elan Shanker
Repository: https://github.com/micromatch/anymatch

> The ISC License
> 
> Copyright (c) 2019 Elan Shanker, Paul Miller (https://paulmillr.com)
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
> IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## artichokie
License: MIT
By: sapphi-red, Evan You
Repository: https://github.com/sapphi-red/artichokie

> MIT License
> 
> Copyright (c) 2020-present, Yuxi (Evan) You
> Copyright (c) 2023-present, sapphi-red
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## binary-extensions
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/binary-extensions

> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
> Copyright (c) Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## braces, fill-range, is-number
License: MIT
By: Jon Schlinkert, Brian Woodward, Elan Shanker, Eugene Sharygin, hemanth.hm
Repository: https://github.com/micromatch/braces

License: MIT
By: Jon Schlinkert, Edo Rivai, Paul Miller, Rouven We\xDFling
Repository: https://github.com/jonschlinkert/fill-range

License: MIT
By: Jon Schlinkert, Olsten Larck, Rouven We\xDFling
Repository: https://github.com/jonschlinkert/is-number

> The MIT License (MIT)
> 
> Copyright (c) 2014-present, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## bundle-name, default-browser, default-browser-id, define-lazy-prop, is-docker, is-inside-container, is-wsl, open, run-applescript, wsl-utils
License: MIT
By: Sindre Sorhus
Repositories: https://github.com/sindresorhus/bundle-name, https://github.com/sindresorhus/default-browser, https://github.com/sindresorhus/default-browser-id, https://github.com/sindresorhus/define-lazy-prop, https://github.com/sindresorhus/is-docker, https://github.com/sindresorhus/is-inside-container, https://github.com/sindresorhus/is-wsl, https://github.com/sindresorhus/open, https://github.com/sindresorhus/run-applescript, https://github.com/sindresorhus/wsl-utils

> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cac
License: MIT
By: egoist
Repository: https://github.com/egoist/cac

> The MIT License (MIT)
> 
> Copyright (c) EGOIST <0x142857@gmail.com> (https://github.com/egoist)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## chokidar
License: MIT
By: Paul Miller, Elan Shanker
Repository: https://github.com/paulmillr/chokidar

> The MIT License (MIT)
> 
> Copyright (c) 2012-2019 Paul Miller (https://paulmillr.com), Elan Shanker
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the \u201CSoftware\u201D), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED \u201CAS IS\u201D, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## commondir, shell-quote
License: MIT
By: James Halliday
Repositories: http://github.com/substack/node-commondir, http://github.com/ljharb/shell-quote

> The MIT License
> 
> Copyright (c) 2013 James Halliday (mail@substack.net)
> 
> Permission is hereby granted, free of charge, 
> to any person obtaining a copy of this software and 
> associated documentation files (the "Software"), to 
> deal in the Software without restriction, including 
> without limitation the rights to use, copy, modify, 
> merge, publish, distribute, sublicense, and/or sell 
> copies of the Software, and to permit persons to whom 
> the Software is furnished to do so, 
> subject to the following conditions:
> 
> The above copyright notice and this permission notice 
> shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
> ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## connect
License: MIT
By: TJ Holowaychuk, Douglas Christopher Wilson, Jonathan Ong, Tim Caswell
Repository: https://github.com/senchalabs/connect

> (The MIT License)
> 
> Copyright (c) 2010 Sencha Inc.
> Copyright (c) 2011 LearnBoost
> Copyright (c) 2011-2014 TJ Holowaychuk
> Copyright (c) 2015 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## convert-source-map
License: MIT
By: Thorsten Lorenz
Repository: https://github.com/thlorenz/convert-source-map

> Copyright 2013 Thorsten Lorenz. 
> All rights reserved.
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cors
License: MIT
By: Troy Goode
Repository: https://github.com/expressjs/cors

> (The MIT License)
> 
> Copyright (c) 2013 Troy Goode <troygoode@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cross-spawn
License: MIT
By: Andr\xE9 Cruz
Repository: https://github.com/moxystudio/node-cross-spawn

> The MIT License (MIT)
> 
> Copyright (c) 2018 Made With MOXY Lda <hello@moxy.studio>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## cssesc
License: MIT
By: Mathias Bynens
Repository: https://github.com/mathiasbynens/cssesc

> Copyright Mathias Bynens <https://mathiasbynens.be/>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## dotenv
License: BSD-2-Clause
Repository: https://github.com/motdotla/dotenv

> Copyright (c) 2015, Scott Motte
> All rights reserved.
> 
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
> 
> * Redistributions of source code must retain the above copyright notice, this
>   list of conditions and the following disclaimer.
> 
> * Redistributions in binary form must reproduce the above copyright notice,
>   this list of conditions and the following disclaimer in the documentation
>   and/or other materials provided with the distribution.
> 
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
> AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
> FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
> DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
> SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
> CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
> OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## dotenv-expand
License: BSD-2-Clause
By: motdotla
Repository: https://github.com/motdotla/dotenv-expand

> Copyright (c) 2016, Scott Motte
> All rights reserved.
> 
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
> 
> * Redistributions of source code must retain the above copyright notice, this
>   list of conditions and the following disclaimer.
> 
> * Redistributions in binary form must reproduce the above copyright notice,
>   this list of conditions and the following disclaimer in the documentation
>   and/or other materials provided with the distribution.
> 
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
> AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
> FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
> DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
> SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
> CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
> OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## ee-first
License: MIT
By: Jonathan Ong, Douglas Christopher Wilson
Repository: https://github.com/jonathanong/ee-first

> The MIT License (MIT)
> 
> Copyright (c) 2014 Jonathan Ong me@jongleberry.com
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## encodeurl
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/pillarjs/encodeurl

> (The MIT License)
> 
> Copyright (c) 2016 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## entities
License: BSD-2-Clause
By: Felix Boehm
Repository: https://github.com/fb55/entities

> Copyright (c) Felix B\xF6hm
> All rights reserved.
> 
> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
> 
> Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
> 
> Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
> 
> THIS IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS,
> EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## es-module-lexer
License: MIT
By: Guy Bedford
Repository: https://github.com/guybedford/es-module-lexer

> MIT License
> -----------
> 
> Copyright (C) 2018-2022 Guy Bedford
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## escape-html
License: MIT
Repository: https://github.com/component/escape-html

> (The MIT License)
> 
> Copyright (c) 2012-2013 TJ Holowaychuk
> Copyright (c) 2015 Andreas Lubbe
> Copyright (c) 2015 Tiancheng "Timothy" Gu
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## estree-walker
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/estree-walker

> Copyright (c) 2015-20 [these people](https://github.com/Rich-Harris/estree-walker/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## etag
License: MIT
By: Douglas Christopher Wilson, David Bj\xF6rklund
Repository: https://github.com/jshttp/etag

> (The MIT License)
> 
> Copyright (c) 2014-2016 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## finalhandler
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/pillarjs/finalhandler

> (The MIT License)
> 
> Copyright (c) 2014-2017 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## follow-redirects
License: MIT
By: Ruben Verborgh, Olivier Lalonde, James Talmage
Repository: https://github.com/follow-redirects/follow-redirects

> Copyright 2014\u2013present Olivier Lalonde <olalonde@gmail.com>, James Talmage <james@talmage.io>, Ruben Verborgh
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
> of the Software, and to permit persons to whom the Software is furnished to do
> so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
> IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## generic-names
License: MIT
By: Alexey Litvinov
Repository: https://github.com/css-modules/generic-names

> The MIT License (MIT)
> 
> Copyright (c) 2015 Alexey Litvinov
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## glob-parent
License: ISC
By: Gulp Team, Elan Shanker, Blaine Bublitz
Repository: https://github.com/gulpjs/glob-parent

> The ISC License
> 
> Copyright (c) 2015, 2019 Elan Shanker
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
> IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## host-validation-middleware
License: MIT
By: sapphi-red
Repository: https://github.com/sapphi-red/host-validation-middleware

> MIT License
> 
> Copyright (c) 2025 sapphi-red
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## http-proxy-3
License: MIT
By: William Stein, Charlie Robbins, Jimb Esser, jcrugzz
Repository: https://github.com/sagemathinc/http-proxy-3

> node-http-3
> 
> Copyright (c) 2010-2025 William Stein, Charlie Robbins, Jarrett Cruger & the Contributors.
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## icss-utils
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/icss-utils

> ISC License (ISC)
> Copyright 2018 Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## is-binary-path
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/is-binary-path

> MIT License
> 
> Copyright (c) 2019 Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com), Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## is-extglob
License: MIT
By: Jon Schlinkert
Repository: https://github.com/jonschlinkert/is-extglob

> The MIT License (MIT)
> 
> Copyright (c) 2014-2016, Jon Schlinkert
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## is-glob
License: MIT
By: Jon Schlinkert, Brian Woodward, Daniel Perez
Repository: https://github.com/micromatch/is-glob

> The MIT License (MIT)
> 
> Copyright (c) 2014-2017, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## is-reference
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/is-reference

---------------------------------------

## isexe, which
License: ISC
By: Isaac Z. Schlueter
Repositories: https://github.com/isaacs/isexe, https://github.com/isaacs/node-which

> The ISC License
> 
> Copyright (c) Isaac Z. Schlueter and Contributors
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
> IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## js-tokens
License: MIT
By: Simon Lydell
Repository: https://github.com/lydell/js-tokens

> The MIT License (MIT)
> 
> Copyright (c) 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024 Simon Lydell
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## launch-editor, launch-editor-middleware
License: MIT
By: Evan You
Repositories: https://github.com/yyx990803/launch-editor, https://github.com/yyx990803/launch-editor

> The MIT License (MIT)
> 
> Copyright (c) 2017-present, Yuxi (Evan) You
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## lilconfig
License: MIT
By: antonk52
Repository: https://github.com/antonk52/lilconfig

> MIT License
> 
> Copyright (c) 2022 Anton Kastritskiy
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## loader-utils
License: MIT
By: Tobias Koppers @sokra
Repository: https://github.com/webpack/loader-utils

> Copyright JS Foundation and other contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## lodash.camelcase
License: MIT
By: John-David Dalton, Blaine Bublitz, Mathias Bynens
Repository: https://github.com/lodash/lodash

> Copyright jQuery Foundation and other contributors <https://jquery.org/>
> 
> Based on Underscore.js, copyright Jeremy Ashkenas,
> DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
> 
> This software consists of voluntary contributions made by many
> individuals. For exact contribution history, see the revision history
> available at https://github.com/lodash/lodash
> 
> The following license applies to all parts of this software except as
> documented below:
> 
> ====
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
> 
> ====
> 
> Copyright and related rights for sample code are waived via CC0. Sample
> code is defined as all source code displayed within the prose of the
> documentation.
> 
> CC0: http://creativecommons.org/publicdomain/zero/1.0/
> 
> ====
> 
> Files located in the node_modules and vendor directories are externally
> maintained libraries used by this software which have their own
> licenses; we recommend you read them, as their terms may differ from the
> terms above.

---------------------------------------

## magic-string
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/magic-string

> Copyright 2018 Rich Harris
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## mlly, ufo
License: MIT
Repositories: https://github.com/unjs/mlly, https://github.com/unjs/ufo

> MIT License
> 
> Copyright (c) Pooya Parsa <pooya@pi0.io>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## mrmime
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/mrmime

> The MIT License (MIT)
> 
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (https://lukeed.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## normalize-path
License: MIT
By: Jon Schlinkert, Blaine Bublitz
Repository: https://github.com/jonschlinkert/normalize-path

> The MIT License (MIT)
> 
> Copyright (c) 2014-2018, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## object-assign
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/object-assign

> The MIT License (MIT)
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## obug
License: MIT
By: Kevin Deng
Repository: https://github.com/sxzz/obug

> The MIT License (MIT)
> 
> Copyright \xA9 2025-PRESENT Kevin Deng (https://github.com/sxzz)
> Copyright (c) 2014-2017 TJ Holowaychuk <tj@vision-media.ca>
> Copyright (c) 2018-2021 Josh Junon
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## on-finished
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/jshttp/on-finished

> (The MIT License)
> 
> Copyright (c) 2013 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2014 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## parse5
License: MIT
By: Ivan Nikulin, https://github.com/inikulin/parse5/graphs/contributors
Repository: https://github.com/inikulin/parse5

> Copyright (c) 2013-2019 Ivan Nikulin (ifaaan@gmail.com, https://github.com/inikulin)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## parseurl
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/pillarjs/parseurl

> (The MIT License)
> 
> Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2014-2017 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## path-key, shebang-regex
License: MIT
By: Sindre Sorhus
Repositories: https://github.com/sindresorhus/path-key, https://github.com/sindresorhus/shebang-regex

> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## periscopic
License: MIT
Repository: https://github.com/Rich-Harris/periscopic

> Copyright (c) 2019 Rich Harris
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## picocolors
License: ISC
By: Alexey Raspopov
Repository: https://github.com/alexeyraspopov/picocolors

> ISC License
> 
> Copyright (c) 2021-2024 Oleksii Raspopov, Kostiantyn Denysov, Anton Verinov
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
> OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-import
License: MIT
By: Maxime Thirouin
Repository: https://github.com/postcss/postcss-import

> The MIT License (MIT)
> 
> Copyright (c) 2014 Maxime Thirouin, Jason Campbell & Kevin M\xE5rtensson
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-load-config
License: MIT
By: Michael Ciniawky, Ryan Dunckel, Mateusz Derks, Dalton Santos, Patrick Gilday, Fran\xE7ois Wouts
Repository: https://github.com/postcss/postcss-load-config

> The MIT License (MIT)
> 
> Copyright Michael Ciniawsky <michael.ciniawsky@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules
License: MIT
By: Alexander Madyankin
Repository: https://github.com/css-modules/postcss-modules

> The MIT License (MIT)
> 
> Copyright 2015-present Alexander Madyankin <alexander@madyankin.name>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules-extract-imports
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-extract-imports

> Copyright 2015 Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-modules-local-by-default
License: MIT
By: Mark Dalgleish
Repository: https://github.com/css-modules/postcss-modules-local-by-default

> The MIT License (MIT)
> 
> Copyright 2015 Mark Dalgleish <mark.john.dalgleish@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules-scope
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-scope

> ISC License (ISC)
> 
> Copyright (c) 2015, Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-modules-values
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-values

> ISC License (ISC)
> 
> Copyright (c) 2015, Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-selector-parser
License: MIT
By: Ben Briggs, Chris Eppstein
Repository: https://github.com/postcss/postcss-selector-parser

> Copyright (c) Ben Briggs <beneb.info@gmail.com> (http://beneb.info)
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-value-parser
License: MIT
By: Bogdan Chadkin
Repository: https://github.com/TrySound/postcss-value-parser

> Copyright (c) Bogdan Chadkin <trysound@yandex.ru>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## readdirp
License: MIT
By: Thorsten Lorenz, Paul Miller
Repository: https://github.com/paulmillr/readdirp

> MIT License
> 
> Copyright (c) 2012-2019 Thorsten Lorenz, Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## resolve.exports, totalist
License: MIT
By: Luke Edwards
Repositories: https://github.com/lukeed/resolve.exports, https://github.com/lukeed/totalist

> The MIT License (MIT)
> 
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## shebang-command
License: MIT
By: Kevin M\xE5rtensson
Repository: https://github.com/kevva/shebang-command

> MIT License
> 
> Copyright (c) Kevin M\xE5rtensson <kevinmartensson@gmail.com> (github.com/kevva)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## sirv
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/sirv

---------------------------------------

## statuses
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/jshttp/statuses

> The MIT License (MIT)
> 
> Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2016 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## string-hash
License: CC0-1.0
By: The Dark Sky Company
Repository: https://github.com/darkskyapp/string-hash

---------------------------------------

## strip-literal
License: MIT
By: Anthony Fu
Repository: https://github.com/antfu/strip-literal

> MIT License
> 
> Copyright (c) 2022 Anthony Fu <https://github.com/antfu>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## to-regex-range
License: MIT
By: Jon Schlinkert, Rouven We\xDFling
Repository: https://github.com/micromatch/to-regex-range

> The MIT License (MIT)
> 
> Copyright (c) 2015-present, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## tsconfck
License: MIT
By: dominikg
Repository: https://github.com/dominikg/tsconfck

> MIT License
> 
> Copyright (c) 2021-present dominikg and [contributors](https://github.com/dominikg/tsconfck/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
> 
> -- Licenses for 3rd-party code included in tsconfck --
> 
> # strip-bom and strip-json-comments
> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## unpipe
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/stream-utils/unpipe

> (The MIT License)
> 
> Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## util-deprecate
License: MIT
By: Nathan Rajlich
Repository: https://github.com/TooTallNate/util-deprecate

> (The MIT License)
> 
> Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## utils-merge
License: MIT
By: Jared Hanson
Repository: https://github.com/jaredhanson/utils-merge

> The MIT License (MIT)
> 
> Copyright (c) 2013-2017 Jared Hanson
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## vary
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/jshttp/vary

> (The MIT License)
> 
> Copyright (c) 2014-2017 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## ws
License: MIT
By: Einar Otto Stangvik
Repository: https://github.com/websockets/ws

> Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
> Copyright (c) 2013 Arnout Kazemier and contributors
> Copyright (c) 2016 Luigi Pinca and contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vite-plugin-compression",
      name: "vite-plugin-compression",
      description: "Use gzip or brotli to compress resources.",
      url: "https://github.com/anncwb/vite-plugin-compression",
      homepage: "https://github.com/anncwb/vite-plugin-compression/tree/master/#readme",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2020-present, Vben

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vite-plugin-top-level-await",
      name: "vite-plugin-top-level-await",
      description: "Transform code to support top-level await in normal browsers for Vite.",
      url: "https://github.com/Menci/vite-plugin-top-level-await",
      homepage: "",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2022 Menci

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vite-plugin-wasm",
      name: "vite-plugin-wasm",
      description: "Add WebAssembly ESM integration (aka. Webpack's `asyncWebAssembly`) to Vite and support `wasm-pack` generated modules.",
      url: "https://github.com/Menci/vite-plugin-wasm",
      homepage: "",
      licenseType: "MIT",
      license: `MIT License

Copyright (c) 2022 Menci

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
      isDev: true
    },
    {
      id: "vitest",
      name: "vitest",
      description: "Next generation testing framework powered by Vite",
      url: "git+https://github.com/vitest-dev/vitest.git",
      homepage: "https://vitest.dev",
      licenseType: "MIT",
      license: `# Vitest core license
Vitest is released under the MIT license:

MIT License

Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Licenses of bundled dependencies
The published Vitest artifact additionally contains code with the following licenses:
BSD-3-Clause, ISC, MIT

# Bundled dependencies:
## @antfu/install-pkg
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu/install-pkg.git

> MIT License
>
> Copyright (c) 2021 Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/resolve-uri
License: MIT
By: Justin Ridgewell
Repository: https://github.com/jridgewell/resolve-uri

> Copyright 2019 Justin Ridgewell <jridgewell@google.com>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/sourcemap-codec
License: MIT
By: Justin Ridgewell
Repository: git+https://github.com/jridgewell/sourcemaps.git

> Copyright 2024 Justin Ridgewell <justin@ridgewell.name>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/trace-mapping
License: MIT
By: Justin Ridgewell
Repository: git+https://github.com/jridgewell/sourcemaps.git

> Copyright 2024 Justin Ridgewell <justin@ridgewell.name>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @sinonjs/commons
License: BSD-3-Clause
Repository: git+https://github.com/sinonjs/commons.git

> BSD 3-Clause License
>
> Copyright (c) 2018, Sinon.JS
> All rights reserved.
>
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
>
> * Redistributions of source code must retain the above copyright notice, this
>   list of conditions and the following disclaimer.
>
> * Redistributions in binary form must reproduce the above copyright notice,
>   this list of conditions and the following disclaimer in the documentation
>   and/or other materials provided with the distribution.
>
> * Neither the name of the copyright holder nor the names of its
>   contributors may be used to endorse or promote products derived from
>   this software without specific prior written permission.
>
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
> AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
> FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
> DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
> SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
> CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
> OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## @sinonjs/fake-timers
License: BSD-3-Clause
By: Christian Johansen
Repository: git+https://github.com/sinonjs/fake-timers.git

> Copyright (c) 2010-2014, Christian Johansen, christian@cjohansen.no. All rights reserved.
>
> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
>
> 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
>
> 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
>
> 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
>
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## acorn-walk
License: MIT
By: Marijn Haverbeke, Ingvar Stepanyan, Adrian Heine
Repository: https://github.com/acornjs/acorn.git

> MIT License
>
> Copyright (C) 2012-2020 by various contributors (see AUTHORS)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## birpc
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu-collective/birpc.git

> MIT License
>
> Copyright (c) 2021 Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## cac
License: MIT
By: egoist
Repository: egoist/cac

> The MIT License (MIT)
>
> Copyright (c) EGOIST <0x142857@gmail.com> (https://github.com/egoist)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## empathic
License: MIT
By: Luke Edwards
Repository: lukeed/empathic

> MIT License
>
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## flatted
License: ISC
By: Andrea Giammarchi
Repository: git+https://github.com/WebReflection/flatted.git

> ISC License
>
> Copyright (c) 2018-2020, Andrea Giammarchi, @WebReflection
>
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
>
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
> REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
> AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
> INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
> LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
> OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
> PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## js-tokens
License: MIT
By: Simon Lydell
Repository: lydell/js-tokens

> The MIT License (MIT)
>
> Copyright (c) 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024 Simon Lydell
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## kleur
License: MIT
By: Luke Edwards
Repository: lukeed/kleur

> The MIT License (MIT)
>
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## local-pkg
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu-collective/local-pkg.git

> MIT License
>
> Copyright (c) 2021 Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## mime
License: MIT
By: Robert Kieffer
Repository: https://github.com/broofa/mime

> MIT License
>
> Copyright (c) 2023 Robert Kieffer
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## mlly
License: MIT
Repository: unjs/mlly

> MIT License
>
> Copyright (c) Pooya Parsa <pooya@pi0.io>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## package-manager-detector
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu-collective/package-manager-detector.git

> MIT License
>
> Copyright (c) 2020-PRESENT Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## prompts
License: MIT
By: Terkel Gjervig
Repository: terkelg/prompts

> MIT License
>
> Copyright (c) 2018 Terkel Gjervig Nielsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## quansync
License: MIT
By: Anthony Fu, \u4E09\u54B2\u667A\u5B50 Kevin Deng
Repository: git+https://github.com/quansync-dev/quansync.git

> MIT License
>
> Copyright (c) 2025-PRESENT Anthony Fu <https://github.com/antfu> and Kevin Deng <https://github.com/sxzz>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## sisteransi
License: MIT
By: Terkel Gjervig
Repository: https://github.com/terkelg/sisteransi

> MIT License
>
> Copyright (c) 2018 Terkel Gjervig Nielsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## strip-literal
License: MIT
By: Anthony Fu
Repository: git+https://github.com/antfu/strip-literal.git

> MIT License
>
> Copyright (c) 2022 Anthony Fu <https://github.com/antfu>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## type-detect
License: MIT
By: Jake Luer, Keith Cirkel, David Losert, Aleksey Shvayka, Lucas Fernandes da Costa, Grant Snodgrass, Jeremy Tice, Edward Betts, dvlsg, Amila Welihinda, Jake Champion, Miroslav Bajto\u0161
Repository: git+ssh://git@github.com/chaijs/type-detect.git

> Copyright (c) 2013 Jake Luer <jake@alogicalparadox.com> (http://alogicalparadox.com)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## ufo
License: MIT
Repository: unjs/ufo

> MIT License
>
> Copyright (c) Pooya Parsa <pooya@pi0.io>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## ws
License: MIT
By: Einar Otto Stangvik
Repository: git+https://github.com/websockets/ws.git

> Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
> Copyright (c) 2013 Arnout Kazemier and contributors
> Copyright (c) 2016 Luigi Pinca and contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
      isDev: true
    }
  ];
  let Gh, Wc, Bb, Yb, rs, jb, xb, zb, $b, Vb, qb, Zb, Kb, Jb, Xb, Qb, eL, tL, oL, iL, nL, rL, aL, Al;
  Gh = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Np((await ms(async () => {
          const { default: o } = await import("./App-Bz0uAxxC.js");
          return {
            default: o
          };
        }, __vite__mapDeps([0,1,2,3,4]), import.meta.url)).default);
        e.use(Up()), e.use((await ms(async () => {
          const { default: o } = await import("./index-wPXfjPPc.js");
          return {
            default: o
          };
        }, __vite__mapDeps([5,2,1,6]), import.meta.url)).default), e.use((await ms(async () => {
          const { i18n: o } = await import("./index-DpHmg4sr.js");
          return {
            i18n: o
          };
        }, __vite__mapDeps([3,2]), import.meta.url)).i18n), window.splashScreen && window.splashScreen.unmount(), (_a3 = document.getElementById("splash")) == null ? void 0 : _a3.remove();
        const t = document.getElementById("app");
        t && (t.style.display = "inherit"), e.mount("#app");
      },
      dependencies: [
        "geolocation",
        "platform-services",
        "proj4-wasm"
      ]
    },
    {
      name: "proj4-wasm",
      displayName: "Proj4 Wasm",
      moduleInit: async () => {
        await Xd();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = fu();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const t = async (f, g) => RI() ? false : window.permissionConfirm ? window.permissionConfirm(g) : false, o = await wi.init({
            geolocation: {
              permissionCallback: t
            },
            imu: {
              permissionCallback: t
            },
            deviceOrientation: {
              permissionCallback: t
            }
          });
          if (o.isErr()) throw o.error;
          const i = o.value, n = i.getStorage();
          if (n.isErr()) throw n.error;
          const s = await n.value.init();
          if (s.isErr()) throw s.error;
          const l = i.getDeviceOrientation();
          if (l.isOk()) {
            const f = l.value;
            (await f.init()).isErr() ? console.warn("[Platform] DeviceOrientation not supported on this platform") : await f.start();
          }
          const h = i.getIMU();
          if (h.isOk()) {
            const f = h.value;
            (await f.init()).isErr() ? console.warn("[Platform] IMU not supported on this platform") : (await f.startAcceleration({
              frequency: pc(),
              normalizeToENU: true
            }), await f.startGyroscope({
              frequency: pc(),
              normalizeToENU: true
            }));
          }
          e && console.timeEnd("Platform services initialise"), console.info("[Platform] Platform services initialized successfully");
        } catch (t) {
          return console.error("[Platform] Failed to initialize platform services:", t), Promise.reject(t instanceof Error ? t : new Error(String(t)));
        }
      },
      dependencies: []
    },
    {
      name: "geolocation",
      displayName: "Geolocation Service",
      moduleInit: async () => {
        let e = false;
        try {
          e = fu();
        } catch {
        }
        try {
          if (!Mr()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const o = await Ao.getInstance();
          if (o.isErr()) throw o.error;
          const i = o.value;
          e && console.timeEnd("Geolocation service initialise"), e && console.time("Geolocation service start"), await i.startLocationUpdates(() => {
          }), e && console.timeEnd("Geolocation service start"), window.GeolocationManager = i, console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
        } catch (t) {
          return console.error("[Geolocation] Failed to initialize geolocation service:", t), Promise.reject(t instanceof Error ? t : new Error(String(t)));
        }
      },
      dependencies: [
        "platform-services"
      ]
    }
  ];
  YL = lb;
  jL = Gb;
  Wc = {
    en: {
      "permission.location.prompt": "Your browser will request permission to access your location.",
      "permission.location.required": "This app requires access to your location to track your movements.",
      "permission.imu.required": "This app requires access to your device's motion sensors to provide orientation tracking.",
      "permission.allow": "Allow",
      "permission.deny": "Deny",
      "permission.title": "Permission Required",
      "error.title": "Loading Error",
      "timeout.title": "Connection Timeout",
      "timeout.message": "Unable to load required modules within the timeout period. Please check your internet connection and try again.",
      retry: "Retry"
    },
    "zh-CN": {
      "permission.location.prompt": "\u60A8\u7684\u6D4F\u89C8\u5668\u5C06\u8BF7\u6C42\u4F4D\u7F6E\u8BBF\u95EE\u6743\u9650\u3002",
      "permission.location.required": "\u6B64\u5E94\u7528\u9700\u8981\u8BBF\u95EE\u60A8\u7684\u4F4D\u7F6E\u4EE5\u8FFD\u8E2A\u60A8\u7684\u8FD0\u52A8\u3002",
      "permission.imu.required": "\u6B64\u5E94\u7528\u9700\u8981\u8BBF\u95EE\u60A8\u8BBE\u5907\u7684\u8FD0\u52A8\u4F20\u611F\u5668\u4EE5\u63D0\u4F9B\u65B9\u5411\u8FFD\u8E2A\u3002",
      "permission.allow": "\u5141\u8BB8",
      "permission.deny": "\u62D2\u7EDD",
      "permission.title": "\u9700\u8981\u6743\u9650",
      "error.title": "\u52A0\u8F7D\u9519\u8BEF",
      "timeout.title": "\u8FDE\u63A5\u8D85\u65F6",
      "timeout.message": "\u65E0\u6CD5\u5728\u8D85\u65F6\u65F6\u95F4\u5185\u52A0\u8F7D\u6240\u9700\u6A21\u5757\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u5E76\u91CD\u8BD5\u3002",
      retry: "\u91CD\u8BD5"
    }
  };
  Bb = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && Wc[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  Yb = Bb();
  rs = (e) => Wc[Yb][e] || Wc.en[e] || e;
  jb = {
    class: "splash-container"
  };
  xb = {
    class: "splash-content"
  };
  zb = {
    key: 0,
    class: "loading-section"
  };
  $b = {
    class: "progress-container"
  };
  Vb = {
    class: "progress-bar"
  };
  qb = {
    class: "progress-text"
  };
  Zb = {
    class: "loading-details"
  };
  Kb = {
    class: "current-module"
  };
  Jb = {
    key: 1,
    class: "error-section"
  };
  Xb = {
    class: "error-message"
  };
  Qb = {
    key: 0
  };
  eL = {
    key: 1
  };
  tL = {
    key: 2,
    class: "timeout-section"
  };
  oL = {
    key: 3,
    class: "permission-section"
  };
  iL = {
    class: "permission-message"
  };
  nL = {
    class: "permission-buttons"
  };
  rL = yN({
    __name: "SplashScreen",
    setup(e) {
      const t = Kt(0), o = Kt(""), i = Kt(""), n = Kt(0), s = Kt(0), l = Kt(false), h = Kt(false), f = Kt(""), g = Kt(false), p = Kt("");
      let R = null;
      const y = Kt("light"), N = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? y.value = "dark" : y.value = "light";
        } catch {
          y.value = "light";
        }
      }, M = () => {
        y.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", y.value);
      }, H = Ol(() => Math.round(t.value / 100 * 100)), ne = {
        info: (...ge) => {
          const se = ge.join(" ");
          console.info(se), o.value = String(se);
        },
        warn: (...ge) => {
          const se = ge.join(" ");
          console.warn(se), o.value = String(se);
        },
        error: (...ge) => {
          const se = ge.join(" ");
          console.error(se), o.value = String(se), f.value = String(se);
        },
        debug: (...ge) => {
          console.debug(...ge);
        }
      }, ee = {
        onModuleStart: (ge) => {
          i.value = ge, o.value = `Loading ${ge}...`;
        },
        onModuleComplete: (ge) => {
          s.value++, t.value = Math.min(100, s.value / n.value * 100), o.value = `Loaded ${ge}`;
        },
        onModuleError: (ge, se) => {
          o.value = `Failed to load ${ge}`, f.value = se.message;
        },
        onOverallProgress: (ge, se) => {
          n.value = se, s.value = ge, t.value = Math.min(100, ge / se * 100);
        }
      }, q = () => {
        window.location.reload();
      }, j = (ge) => (p.value = rs(ge), g.value = true, new Promise((se) => {
        R = (fe) => {
          g.value = false, se(fe);
        };
      })), _ = () => {
        R == null ? void 0 : R(true);
      }, re = () => {
        R == null ? void 0 : R(false);
      };
      return window.permissionConfirm = j, _r(() => {
        var _a3;
        N(), M(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (se, fe = /* @__PURE__ */ new Set()) => {
          if (fe.has(se)) return 0;
          fe.add(se);
          const ie = Gh.find((Ce) => Ce.name === se);
          if (!ie) return 0;
          let me = 1;
          if (ie.dependencies) for (const Ce of ie.dependencies) me += ge(Ce, fe);
          return me;
        };
        n.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), yp(Gh, "trackmaker", 3e4, {
          logger: ne,
          progressReporter: ee,
          printLog: true
        }).then(() => {
          o.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((se) => {
          const fe = String(se.toString());
          if (fe.toLowerCase().includes("timeout")) {
            const ie = fe.split("Trackback").map((me) => me.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(ie.map((me) => ({
              Trackback: me
            })), [
              "Trackback"
            ]), h.value = true;
          } else f.value = fe, l.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(se);
        });
      }), (ge, se) => (mo(), $o("div", jb, [
        je("div", xb, [
          se[8] || (se[8] = je("div", {
            class: "logo-section"
          }, [
            je("div", {
              class: "app-logo"
            }, [
              je("img", {
                src: nb,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            je("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !l.value && !h.value ? (mo(), $o("div", zb, [
            je("div", $b, [
              je("div", Vb, [
                je("div", {
                  class: "progress-fill",
                  style: la({
                    width: `${H.value}%`
                  })
                }, null, 4)
              ]),
              je("div", qb, qo(H.value) + "% ", 1)
            ]),
            je("div", Zb, [
              je("p", Kb, " Loading: " + qo(i.value), 1)
            ]),
            se[0] || (se[0] = je("div", {
              class: "loading-animation"
            }, [
              je("div", {
                class: "spinner"
              })
            ], -1))
          ])) : os("", true),
          l.value ? (mo(), $o("div", Jb, [
            se[1] || (se[1] = je("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            se[2] || (se[2] = je("h2", null, "Loading Error", -1)),
            je("div", Xb, [
              (mo(true), $o(Ht, null, WN((f.value ?? "").split(`
`), (fe) => (mo(), $o("div", {
                key: fe,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                fe.toLocaleLowerCase().includes("trackback") ? (mo(), $o("strong", Qb, qo(fe), 1)) : (mo(), $o("span", eL, qo(fe), 1))
              ]))), 128))
            ]),
            je("button", {
              class: "retry-button",
              onClick: q
            }, " Retry ")
          ])) : os("", true),
          h.value ? (mo(), $o("div", tL, [
            se[3] || (se[3] = je("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            se[4] || (se[4] = je("h2", null, "Connection Timeout", -1)),
            se[5] || (se[5] = je("p", null, "Unable to load required modules within the timeout period.", -1)),
            se[6] || (se[6] = je("p", null, "Please check your internet connection and try again.", -1)),
            je("button", {
              class: "retry-button",
              onClick: q
            }, " Retry ")
          ])) : os("", true),
          g.value ? (mo(), $o("div", oL, [
            se[7] || (se[7] = je("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            je("h2", null, qo(An(rs)("permission.title")), 1),
            je("p", iL, qo(p.value), 1),
            je("div", nL, [
              je("button", {
                class: "permission-button deny",
                onClick: re
              }, qo(An(rs)("permission.deny")), 1),
              je("button", {
                class: "permission-button allow",
                onClick: _
              }, qo(An(rs)("permission.allow")), 1)
            ])
          ])) : os("", true)
        ])
      ]));
    }
  });
  sL = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [i, n] of t) o[i] = n;
    return o;
  };
  aL = sL(rL, [
    [
      "__scopeId",
      "data-v-d9d60867"
    ]
  ]);
  Al = Np(aL);
  Al.use(Up());
  Al.mount("#splash");
  window.splashScreen = Al;
})();
export {
  Mr as $,
  UL as A,
  wn as B,
  PL as C,
  Cc as D,
  vL as E,
  Ht as F,
  hI as G,
  Js as H,
  Go as I,
  FL as J,
  LL as K,
  ki as L,
  LN as M,
  vN as N,
  _L as O,
  Cf as P,
  wL as Q,
  Dt as R,
  li as S,
  yL as T,
  aN as U,
  la as V,
  WL as W,
  dt as X,
  ul as Y,
  oN as Z,
  sL as _,
  __tla,
  je as a,
  EN as a$,
  xi as a0,
  $r as a1,
  DL as a2,
  ML as a3,
  Ni as a4,
  bL as a5,
  HL as a6,
  WN as a7,
  kL as a8,
  IL as a9,
  XT as aA,
  tg as aB,
  ig as aC,
  JT as aD,
  Kh as aE,
  Xh as aF,
  Yg as aG,
  Yn as aH,
  cu as aI,
  Bm as aJ,
  Jo as aK,
  td as aL,
  jn as aM,
  kg as aN,
  Vg as aO,
  Jh as aP,
  lg as aQ,
  Fm as aR,
  tE as aS,
  wm as aT,
  Zh as aU,
  AE as aV,
  tN as aW,
  Un as aX,
  Ia as aY,
  hf as aZ,
  Pw as a_,
  GL as aa,
  Pa as ab,
  Zi as ac,
  ht as ad,
  mL as ae,
  hd as af,
  Ks as ag,
  We as ah,
  CL as ai,
  gL as aj,
  dL as ak,
  TL as al,
  pL as am,
  uL as an,
  fL as ao,
  hL as ap,
  YL as aq,
  jL as ar,
  lL as as,
  Ao as at,
  ms as au,
  RI as av,
  _i as aw,
  Pi as ax,
  Hn as ay,
  ql as az,
  Kt as b,
  AL as b0,
  ri as b1,
  cL as b2,
  Ga as b3,
  Ec as b4,
  Bn as b5,
  Dr as b6,
  k as b7,
  C as b8,
  ys as b9,
  Zo as ba,
  RL as bb,
  Oc as bc,
  OL as bd,
  EL as be,
  $o as c,
  yN as d,
  HN as e,
  pl as f,
  da as g,
  Sy as h,
  fr as i,
  Ol as j,
  _r as k,
  Tl as l,
  py as m,
  nl as n,
  mo as o,
  mN as p,
  BL as q,
  wc as r,
  os as s,
  SL as t,
  Bt as u,
  An as v,
  NL as w,
  gN as x,
  fy as y,
  qo as z
};
