const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-BS4kvb_O.js","./sketch-store-D6j1LfKN.js","./index-CrKT6iG9.js","./index-BlGNN0Kx.js","./App-C5xEvwb7.css","./index-CIa5HXjm.js","./index-DY6DJxZR.css"])))=>i.map(i=>d[i]);
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
let Hr, _v, yn, Pv, Dc, vv, Ht, fI, Ks, Wi, Mv, bv, ko, vA, LA, Fv, Dd, yv, Mt, co, Av, aA, la, Uv, dt, ul, iA, sv, Ye, EA, xo, zr, Dv, Hv, en, Nv, Cv, kA, kv, Iv, Qm, ig, ng, Xm, Kh, Xh, xg, Bn, cu, jT, Ki, tf, jn, Gg, Zg, Jh, ug, FT, iE, AT, qh, yE, tA, _n, Ia, fd, FS, Wv, Fa, Zo, ft, Tv, ff, qs, ke, Lv, gv, fv, mv, pv, uv, dv, hv, Bv, jv, lv, yi, oc, wI, Fo, Po, Cn, Zl, Jt, Rv, no, cv, Ga, Ic, Gn, Dr, W, C, As, Zi, qr, Rc, Ov, Ev, zi, NA, DA, pl, fa, yN, fr, Ol, Fr, ml, pN, nl, Ti, TA, Gv, Ac, is, wv, jt, Rn, Sv, gA, dN, Vi;
let __tla = (async () => {
  var _a2, _b2;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
    new MutationObserver((n) => {
      for (const s of n) if (s.type === "childList") for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function i(n) {
      const s = {};
      return n.integrity && (s.integrity = n.integrity), n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? s.credentials = "include" : n.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function o(n) {
      if (n.ep) return;
      n.ep = true;
      const s = i(n);
      fetch(n.href, s);
    }
  })();
  const Kp = {
    withStackTrace: false
  }, Bh = (e, t, i = Kp) => {
    const o = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, n = i.withStackTrace ? new Error().stack : void 0;
    return {
      data: o,
      message: e,
      stack: n
    };
  };
  function Bo(e, t, i, o) {
    function n(s) {
      return s instanceof i ? s : new i(function(l) {
        l(s);
      });
    }
    return new (i || (i = Promise))(function(s, l) {
      function h(p) {
        try {
          m(o.next(p));
        } catch (I) {
          l(I);
        }
      }
      function d(p) {
        try {
          m(o.throw(p));
        } catch (I) {
          l(I);
        }
      }
      function m(p) {
        p.done ? s(p.value) : n(p.value).then(h, d);
      }
      m((o = o.apply(e, [])).next());
    });
  }
  function Nl(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, i = t && e[t], o = 0;
    if (i) return i.call(e);
    if (e && typeof e.length == "number") return {
      next: function() {
        return e && o >= e.length && (e = void 0), {
          value: e && e[o++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function _i(e) {
    return this instanceof _i ? (this.v = e, this) : new _i(e);
  }
  function bl(e, t, i) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var o = i.apply(e, t || []), n, s = [];
    return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", l), n[Symbol.asyncIterator] = function() {
      return this;
    }, n;
    function l(S) {
      return function(M) {
        return Promise.resolve(M).then(S, I);
      };
    }
    function h(S, M) {
      o[S] && (n[S] = function(D) {
        return new Promise(function(ie, Q) {
          s.push([
            S,
            D,
            ie,
            Q
          ]) > 1 || d(S, D);
        });
      }, M && (n[S] = M(n[S])));
    }
    function d(S, M) {
      try {
        m(o[S](M));
      } catch (D) {
        N(s[0][3], D);
      }
    }
    function m(S) {
      S.value instanceof _i ? Promise.resolve(S.value.v).then(p, I) : N(s[0][2], S);
    }
    function p(S) {
      d("next", S);
    }
    function I(S) {
      d("throw", S);
    }
    function N(S, M) {
      S(M), s.shift(), s.length && d(s[0][0], s[0][1]);
    }
  }
  function Jp(e) {
    var t, i;
    return t = {}, o("next"), o("throw", function(n) {
      throw n;
    }), o("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function o(n, s) {
      t[n] = e[n] ? function(l) {
        return (i = !i) ? {
          value: _i(e[n](l)),
          done: false
        } : s ? s(l) : l;
      } : s;
    }
  }
  function Xp(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], i;
    return t ? t.call(e) : (e = typeof Nl == "function" ? Nl(e) : e[Symbol.iterator](), i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function o(s) {
      i[s] = e[s] && function(l) {
        return new Promise(function(h, d) {
          l = e[s](l), n(h, d, l.done, l.value);
        });
      };
    }
    function n(s, l, h, d) {
      Promise.resolve(d).then(function(m) {
        s({
          value: m,
          done: h
        });
      }, l);
    }
  }
  class kt {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const i = t.then((o) => new Hi(o));
      return new kt(i);
    }
    static fromPromise(t, i) {
      const o = t.then((n) => new Hi(n)).catch((n) => new wi(i(n)));
      return new kt(o);
    }
    static fromThrowable(t, i) {
      return (...o) => new kt(Bo(this, void 0, void 0, function* () {
        try {
          return new Hi(yield t(...o));
        } catch (n) {
          return new wi(i ? i(n) : n);
        }
      }));
    }
    static combine(t) {
      return Qp(t);
    }
    static combineWithAllErrors(t) {
      return em(t);
    }
    map(t) {
      return new kt(this._promise.then((i) => Bo(this, void 0, void 0, function* () {
        return i.isErr() ? new wi(i.error) : new Hi(yield t(i.value));
      })));
    }
    andThrough(t) {
      return new kt(this._promise.then((i) => Bo(this, void 0, void 0, function* () {
        if (i.isErr()) return new wi(i.error);
        const o = yield t(i.value);
        return o.isErr() ? new wi(o.error) : new Hi(i.value);
      })));
    }
    andTee(t) {
      return new kt(this._promise.then((i) => Bo(this, void 0, void 0, function* () {
        if (i.isErr()) return new wi(i.error);
        try {
          yield t(i.value);
        } catch {
        }
        return new Hi(i.value);
      })));
    }
    orTee(t) {
      return new kt(this._promise.then((i) => Bo(this, void 0, void 0, function* () {
        if (i.isOk()) return new Hi(i.value);
        try {
          yield t(i.error);
        } catch {
        }
        return new wi(i.error);
      })));
    }
    mapErr(t) {
      return new kt(this._promise.then((i) => Bo(this, void 0, void 0, function* () {
        return i.isOk() ? new Hi(i.value) : new wi(yield t(i.error));
      })));
    }
    andThen(t) {
      return new kt(this._promise.then((i) => {
        if (i.isErr()) return new wi(i.error);
        const o = t(i.value);
        return o instanceof kt ? o._promise : o;
      }));
    }
    orElse(t) {
      return new kt(this._promise.then((i) => Bo(this, void 0, void 0, function* () {
        return i.isErr() ? t(i.error) : new Hi(i.value);
      })));
    }
    match(t, i) {
      return this._promise.then((o) => o.match(t, i));
    }
    unwrapOr(t) {
      return this._promise.then((i) => i.unwrapOr(t));
    }
    safeUnwrap() {
      return bl(this, arguments, function* () {
        return yield _i(yield _i(yield* Jp(Xp(yield _i(this._promise.then((i) => i.safeUnwrap()))))));
      });
    }
    then(t, i) {
      return this._promise.then(t, i);
    }
    [Symbol.asyncIterator]() {
      return bl(this, arguments, function* () {
        const i = yield _i(this._promise);
        return i.isErr() && (yield yield _i(ss(i.error))), yield _i(i.value);
      });
    }
  }
  function ss(e) {
    return new kt(Promise.resolve(new wi(e)));
  }
  const jh = (e) => {
    let t = W([]);
    for (const i of e) if (i.isErr()) {
      t = C(i.error);
      break;
    } else t.map((o) => o.push(i.value));
    return t;
  }, Qp = (e) => kt.fromSafePromise(Promise.all(e)).andThen(jh), xh = (e) => {
    let t = W([]);
    for (const i of e) i.isErr() && t.isErr() ? t.error.push(i.error) : i.isErr() && t.isOk() ? t = C([
      i.error
    ]) : i.isOk() && t.isOk() && t.value.push(i.value);
    return t;
  }, em = (e) => kt.fromSafePromise(Promise.all(e)).andThen(xh);
  var rc;
  (function(e) {
    function t(n, s) {
      return (...l) => {
        try {
          const h = n(...l);
          return W(h);
        } catch (h) {
          return C(s ? s(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function i(n) {
      return jh(n);
    }
    e.combine = i;
    function o(n) {
      return xh(n);
    }
    e.combineWithAllErrors = o;
  })(rc || (rc = {}));
  W = function(e) {
    return new Hi(e);
  };
  C = function(e) {
    return new wi(e);
  };
  class Hi {
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
      return W(t(this.value));
    }
    mapErr(t) {
      return W(this.value);
    }
    andThen(t) {
      return t(this.value);
    }
    andThrough(t) {
      return t(this.value).map((i) => this.value);
    }
    andTee(t) {
      try {
        t(this.value);
      } catch {
      }
      return W(this.value);
    }
    orTee(t) {
      return W(this.value);
    }
    orElse(t) {
      return W(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return kt.fromSafePromise(t(this.value));
    }
    unwrapOr(t) {
      return this.value;
    }
    match(t, i) {
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
  class wi {
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
    match(t, i) {
      return i(this.error);
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
  rc.fromThrowable;
  var tm = "2.0.8", im = 500, vl = "user-agent", Nn = "", Ll = "?", It = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, ei = "browser", to = "cpu", ki = "device", Ai = "engine", ci = "os", bn = "result", x = "name", U = "type", $ = "vendor", V = "version", Vt = "architecture", Ir = "major", j = "model", as = "console", Le = "mobile", qe = "tablet", Rt = "smarttv", Mi = "wearable", Br = "xr", tr = "embedded", ln = "inapp", Gc = "brands", Jo = "formFactors", Bc = "fullVersionList", vn = "platform", jc = "platformVersion", Vs = "bitness", Mo = "sec-ch-ua", om = Mo + "-full-version-list", nm = Mo + "-arch", rm = Mo + "-" + Vs, sm = Mo + "-form-factors", am = Mo + "-" + Le, cm = Mo + "-" + j, Yh = Mo + "-" + vn, lm = Yh + "-version", zh = [
    Gc,
    Bc,
    Le,
    j,
    vn,
    jc,
    Vt,
    Jo,
    Vs
  ], jr = "Amazon", un = "Apple", Cl = "ASUS", Dl = "BlackBerry", jo = "Google", Hl = "Huawei", Aa = "Lenovo", Ml = "Honor", xr = "LG", Na = "Microsoft", ba = "Motorola", Pl = "Nvidia", Fl = "OnePlus", va = "OPPO", $n = "Samsung", _l = "Sharp", Vn = "Sony", La = "Xiaomi", Ca = "Zebra", Ul = "Chrome", kl = "Chromium", po = "Chromecast", cs = "Edge", Zn = "Firefox", hn = "Opera", Da = "Facebook", Wl = "Sogou", fn = "Mobile ", qn = " Browser", sc = "Windows", um = typeof window !== It.UNDEFINED, Xt = um && window.navigator ? window.navigator : void 0, Xo = Xt && Xt.userAgentData ? Xt.userAgentData : void 0, hm = function(e, t) {
    var i = {}, o = t;
    if (!Ts(t)) {
      o = {};
      for (var n in t) for (var s in t[n]) o[s] = t[n][s].concat(o[s] ? o[s] : []);
    }
    for (var l in e) i[l] = o[l] && o[l].length % 2 === 0 ? o[l].concat(e[l]) : e[l];
    return i;
  }, Zs = function(e) {
    for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
    return t;
  }, ac = function(e, t) {
    if (typeof e === It.OBJECT && e.length > 0) {
      for (var i in e) if (No(t) == No(e[i])) return true;
      return false;
    }
    return Cr(e) ? No(t) == No(e) : false;
  }, Ts = function(e, t) {
    for (var i in e) return /^(browser|cpu|device|engine|os)$/.test(i) || (t ? Ts(e[i]) : false);
  }, Cr = function(e) {
    return typeof e === It.STRING;
  }, Ha = function(e) {
    if (e) {
      for (var t = [], i = Ln(/\\?\"/g, e).split(","), o = 0; o < i.length; o++) if (i[o].indexOf(";") > -1) {
        var n = Es(i[o]).split(";v=");
        t[o] = {
          brand: n[0],
          version: n[1]
        };
      } else t[o] = Es(i[o]);
      return t;
    }
  }, No = function(e) {
    return Cr(e) ? e.toLowerCase() : e;
  }, cc = function(e) {
    return Cr(e) ? Ln(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, eo = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var i = e[t];
      typeof i == It.OBJECT && i.length == 2 ? this[i[0]] = i[1] : this[i] = void 0;
    }
    return this;
  }, Ln = function(e, t) {
    return Cr(t) ? t.replace(e, Nn) : t;
  }, Kn = function(e) {
    return Ln(/\\?\"/g, e);
  }, Es = function(e, t) {
    return e = Ln(/^\s\s*/, String(e)), typeof t === It.UNDEFINED ? e : e.substring(0, t);
  }, lc = function(e, t) {
    if (!(!e || !t)) for (var i = 0, o, n, s, l, h, d; i < t.length && !h; ) {
      var m = t[i], p = t[i + 1];
      for (o = n = 0; o < m.length && !h && m[o]; ) if (h = m[o++].exec(e), h) for (s = 0; s < p.length; s++) d = h[++n], l = p[s], typeof l === It.OBJECT && l.length > 0 ? l.length === 2 ? typeof l[1] == It.FUNCTION ? this[l[0]] = l[1].call(this, d) : this[l[0]] = l[1] : l.length >= 3 && (typeof l[1] === It.FUNCTION && !(l[1].exec && l[1].test) ? l.length > 3 ? this[l[0]] = d ? l[1].apply(this, l.slice(2)) : void 0 : this[l[0]] = d ? l[1].call(this, d, l[2]) : void 0 : l.length == 3 ? this[l[0]] = d ? d.replace(l[1], l[2]) : void 0 : l.length == 4 ? this[l[0]] = d ? l[3].call(this, d.replace(l[1], l[2])) : void 0 : l.length > 4 && (this[l[0]] = d ? l[3].apply(this, [
        d.replace(l[1], l[2])
      ].concat(l.slice(4))) : void 0)) : this[l] = d || void 0;
      i += 2;
    }
  }, Si = function(e, t) {
    for (var i in t) if (typeof t[i] === It.OBJECT && t[i].length > 0) {
      for (var o = 0; o < t[i].length; o++) if (ac(t[i][o], e)) return i === Ll ? void 0 : i;
    } else if (ac(t[i], e)) return i === Ll ? void 0 : i;
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
  }, fm = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, jl = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          fn + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          cs + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        x,
        V
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          hn + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          hn + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          hn
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        V,
        [
          x,
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
        x,
        V
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        V,
        [
          x,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "Smart " + Aa + qn
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          x,
          /(.+)/,
          "$1 Secure" + qn
        ],
        V
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          Zn + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        V,
        [
          x,
          hn + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        V,
        [
          x,
          hn + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          hn + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          "MIUI" + qn
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        V,
        [
          x,
          fn + Zn
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        V,
        [
          x,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          x,
          /(.+)/,
          "$1Browser"
        ],
        V
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          x,
          /(.+)/,
          "$1" + qn
        ],
        V
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          $n + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        V,
        [
          x,
          Wl + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          x,
          Wl + " Mobile"
        ],
        V
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        x,
        V
      ],
      [
        /(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i
      ],
      [
        x
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        V,
        x
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          x,
          Da
        ],
        V,
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
        x,
        V,
        [
          U,
          ln
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        V,
        [
          x,
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
        V,
        [
          x,
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
        x,
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
          x,
          /(.+)/,
          "Zalo"
        ],
        V,
        [
          U,
          ln
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        x,
        V
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        V,
        [
          x,
          Ul + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        V,
        [
          x,
          cs + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          x,
          Ul + " WebView"
        ],
        V
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        V,
        [
          x,
          "Android" + qn
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        V,
        [
          x,
          fn + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        x,
        V
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        V,
        [
          x,
          fn + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          x,
          fn + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        V,
        x
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        x,
        [
          V,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        x,
        V
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          x,
          fn + Zn
        ],
        V
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          x,
          "Netscape"
        ],
        V
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        x,
        V
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        V,
        [
          x,
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
        x,
        [
          V,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        x,
        [
          V,
          /[^\d\.]+./,
          Nn
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          Vt,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Vt,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Vt,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Vt,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Vt,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          Vt,
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
          Vt,
          /ower/,
          Nn,
          No
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          Vt,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          Vt,
          "alpha"
        ]
      ]
    ],
    device: [
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [
        j,
        [
          $,
          $n
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
        j,
        [
          $,
          $n
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        j,
        [
          $,
          un
        ],
        [
          U,
          Le
        ]
      ],
      [
        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
      ],
      [
        j,
        [
          $,
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
        j,
        [
          $,
          un
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        j,
        [
          $,
          _l
        ],
        [
          U,
          Le
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        j,
        [
          $,
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
        j,
        [
          $,
          Ml
        ],
        [
          U,
          Le
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        j,
        [
          $,
          Hl
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
        j,
        [
          $,
          Hl
        ],
        [
          U,
          Le
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          j,
          /_/g,
          " "
        ],
        [
          $,
          La
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
          j,
          /_/g,
          " "
        ],
        [
          $,
          La
        ],
        [
          U,
          Le
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        j,
        [
          $,
          Fl
        ],
        [
          U,
          Le
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        j,
        [
          $,
          va
        ],
        [
          U,
          Le
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        j,
        [
          $,
          Si,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": va
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
        j,
        [
          $,
          "BLU"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        j,
        [
          $,
          "Vivo"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        j,
        [
          $,
          "Realme"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        j,
        [
          $,
          Aa
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
        j,
        [
          $,
          Aa
        ],
        [
          U,
          Le
        ]
      ],
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        j,
        [
          $,
          ba
        ],
        [
          U,
          Le
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        j,
        [
          $,
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
        j,
        [
          $,
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
        j,
        [
          $,
          xr
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        $,
        j,
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
          j,
          /_/g,
          " "
        ],
        [
          U,
          Le
        ],
        [
          $,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        j,
        [
          $,
          jo
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
        j,
        [
          $,
          jo
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        $,
        j
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        j,
        [
          $,
          Vn
        ],
        [
          U,
          Le
        ]
      ],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [
        [
          j,
          "Xperia Tablet"
        ],
        [
          $,
          Vn
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
        j,
        [
          $,
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
          j,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          $,
          jr
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        j,
        $,
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
        j,
        [
          $,
          Dl
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        j,
        [
          $,
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
        j,
        [
          $,
          Cl
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        j,
        [
          $,
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
        $,
        [
          j,
          /_/g,
          " "
        ],
        [
          U,
          Le
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        j,
        [
          $,
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
        j,
        [
          $,
          "TCL"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          $,
          No
        ],
        j,
        [
          U,
          Si,
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
        j,
        [
          $,
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
        j,
        [
          $,
          "Meizu"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        j,
        [
          $,
          "Ulefone"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        j,
        [
          $,
          "Energizer"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        j,
        [
          $,
          "Cat"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        j,
        [
          $,
          "Smartfren"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        j,
        [
          $,
          "Nothing"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        j,
        [
          $,
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
        j,
        [
          $,
          "Archos"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        j,
        [
          $,
          "HMD"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        $,
        j,
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
        $,
        j,
        [
          U,
          Le
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        $,
        j,
        [
          U,
          qe
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        j,
        [
          $,
          Na
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
        j,
        [
          $,
          "Fairphone"
        ],
        [
          U,
          Le
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        j,
        [
          $,
          Pl
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
        $,
        j,
        [
          U,
          Le
        ]
      ],
      [
        /(kin\.[onetw]{3})/i
      ],
      [
        [
          j,
          /\./g,
          " "
        ],
        [
          $,
          Na
        ],
        [
          U,
          Le
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        j,
        [
          $,
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
        j,
        [
          $,
          Ca
        ],
        [
          U,
          Le
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        $,
        [
          U,
          Rt
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          j,
          /^/,
          "SmartTV"
        ],
        [
          $,
          $n
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        $,
        j,
        [
          U,
          Rt
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          $,
          xr
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        $,
        [
          j,
          un + " TV"
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          j,
          po + " Third Generation"
        ],
        [
          $,
          jo
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          j,
          /^/,
          "Chromecast "
        ],
        [
          $,
          jo
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          j,
          po + " Nest Hub"
        ],
        [
          $,
          jo
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          j,
          po
        ],
        [
          $,
          jo
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        j,
        [
          $,
          Da
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        j,
        [
          $,
          jr
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        j,
        [
          $,
          Pl
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        j,
        [
          $,
          _l
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        j,
        [
          $,
          Vn
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        j,
        [
          $,
          La
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        $,
        j,
        [
          U,
          Rt
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          $,
          /.+\/(\w+)/,
          "$1",
          Si,
          {
            LG: "lge"
          }
        ],
        [
          j,
          Es
        ],
        [
          U,
          Rt
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        j,
        [
          $,
          Vn
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
        j,
        [
          $,
          Na
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
          $,
          Si,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        j,
        [
          U,
          as
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        j,
        [
          $,
          $n
        ],
        [
          U,
          Mi
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        $,
        j,
        [
          U,
          Mi
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        j,
        [
          $,
          va
        ],
        [
          U,
          Mi
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        j,
        [
          $,
          un
        ],
        [
          U,
          Mi
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        j,
        [
          $,
          Fl
        ],
        [
          U,
          Mi
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        j,
        [
          $,
          ba
        ],
        [
          U,
          Mi
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        j,
        [
          $,
          Vn
        ],
        [
          U,
          Mi
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        j,
        [
          $,
          xr
        ],
        [
          U,
          Mi
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        j,
        [
          $,
          Ca
        ],
        [
          U,
          Mi
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        j,
        [
          $,
          jo
        ],
        [
          U,
          Br
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        $,
        j,
        [
          U,
          Br
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        j,
        [
          $,
          Da
        ],
        [
          U,
          Br
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          U,
          Br
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        $,
        [
          U,
          tr
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        j,
        [
          $,
          jr
        ],
        [
          U,
          tr
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        j,
        [
          $,
          un
        ],
        [
          U,
          tr
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          U,
          tr
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        j,
        [
          U,
          Rt
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          U,
          Rt
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        j,
        [
          U,
          Si,
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
          Le
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        j,
        [
          $,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        V,
        [
          x,
          cs + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        x,
        V
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        V,
        [
          x,
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
        x,
        V
      ],
      [
        /ladybird\//i
      ],
      [
        [
          x,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        V,
        x
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          x,
          /N/,
          "R"
        ],
        [
          V,
          Si,
          Gl
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        x,
        V
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          V,
          /(;|\))/g,
          "",
          Si,
          Gl
        ],
        [
          x,
          sc
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        x,
        V
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
        /\btvos ?([\w\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          V,
          /_/g,
          "."
        ],
        [
          x,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          x,
          "macOS"
        ],
        [
          V,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        V,
        [
          x,
          po + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        V,
        [
          x,
          po + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        V,
        [
          x,
          po + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        V,
        [
          x,
          po + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        V,
        [
          x,
          po
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        V,
        x
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          x,
          /(.+)/,
          "$1 Touch"
        ],
        V
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        x,
        V
      ],
      [
        /\(bb(10);/i
      ],
      [
        V,
        [
          x,
          Dl
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        V,
        [
          x,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i
      ],
      [
        V,
        [
          x,
          Zn + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        V,
        [
          x,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          V,
          Si,
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
          x,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        V,
        [
          x,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          x,
          "Chrome OS"
        ],
        V
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
        x,
        V
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          x,
          "Solaris"
        ],
        V
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        x,
        V
      ]
    ]
  }, Yr = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return eo.call(e.init, [
      [
        ei,
        [
          x,
          V,
          Ir,
          U
        ]
      ],
      [
        to,
        [
          Vt
        ]
      ],
      [
        ki,
        [
          U,
          j,
          $
        ]
      ],
      [
        Ai,
        [
          x,
          V
        ]
      ],
      [
        ci,
        [
          x,
          V
        ]
      ]
    ]), eo.call(e.isIgnore, [
      [
        ei,
        [
          V,
          Ir
        ]
      ],
      [
        Ai,
        [
          V
        ]
      ],
      [
        ci,
        [
          V
        ]
      ]
    ]), eo.call(e.isIgnoreRgx, [
      [
        ei,
        / ?browser$/i
      ],
      [
        ci,
        / ?os$/i
      ]
    ]), eo.call(e.toString, [
      [
        ei,
        [
          x,
          V
        ]
      ],
      [
        to,
        [
          Vt
        ]
      ],
      [
        ki,
        [
          $,
          j
        ]
      ],
      [
        Ai,
        [
          x,
          V
        ]
      ],
      [
        ci,
        [
          x,
          V
        ]
      ]
    ]), e;
  })(), dm = function(e, t) {
    var i = Yr.init[t], o = Yr.isIgnore[t] || 0, n = Yr.isIgnoreRgx[t] || 0, s = Yr.toString[t] || 0;
    function l() {
      eo.call(this, i);
    }
    return l.prototype.getItem = function() {
      return e;
    }, l.prototype.withClientHints = function() {
      return Xo ? Xo.getHighEntropyValues(zh).then(function(h) {
        return e.setCH(new $h(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, l.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != bn && (l.prototype.is = function(h) {
      var d = false;
      for (var m in this) if (this.hasOwnProperty(m) && !ac(o, m) && No(n ? Ln(n, this[m]) : this[m]) == No(n ? Ln(n, h) : h)) {
        if (d = true, h != It.UNDEFINED) break;
      } else if (h == It.UNDEFINED && d) {
        d = !d;
        break;
      }
      return d;
    }, l.prototype.toString = function() {
      var h = Nn;
      for (var d in s) typeof this[s[d]] !== It.UNDEFINED && (h += (h ? " " : Nn) + this[s[d]]);
      return h || It.UNDEFINED;
    }), l.prototype.then = function(h) {
      var d = this, m = function() {
        for (var I in d) d.hasOwnProperty(I) && (this[I] = d[I]);
      };
      m.prototype = {
        is: l.prototype.is,
        toString: l.prototype.toString,
        withClientHints: l.prototype.withClientHints,
        withFeatureCheck: l.prototype.withFeatureCheck
      };
      var p = new m();
      return h(p), p;
    }, new l();
  };
  function $h(e, t) {
    if (e = e || {}, eo.call(this, zh), t) eo.call(this, [
      [
        Gc,
        Ha(e[Mo])
      ],
      [
        Bc,
        Ha(e[om])
      ],
      [
        Le,
        /\?1/.test(e[am])
      ],
      [
        j,
        Kn(e[cm])
      ],
      [
        vn,
        Kn(e[Yh])
      ],
      [
        jc,
        Kn(e[lm])
      ],
      [
        Vt,
        Kn(e[nm])
      ],
      [
        Jo,
        Ha(e[sm])
      ],
      [
        Vs,
        Kn(e[rm])
      ]
    ]);
    else for (var i in e) this.hasOwnProperty(i) && typeof e[i] !== It.UNDEFINED && (this[i] = e[i]);
  }
  function Lo(e, t, i, o) {
    return eo.call(this, [
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
        o
      ],
      [
        "rgxMap",
        i
      ],
      [
        "data",
        dm(this, e)
      ]
    ]), this;
  }
  Lo.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  Lo.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  Lo.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  Lo.prototype.detectFeature = function() {
    if (Xt && Xt.userAgent == this.ua) switch (this.itemType) {
      case ei:
        Xt.brave && typeof Xt.brave.isBrave == It.FUNCTION && this.set(x, "Brave");
        break;
      case ki:
        !this.get(U) && Xo && Xo[Le] && this.set(U, Le), this.get(j) == "Macintosh" && Xt && typeof Xt.standalone !== It.UNDEFINED && Xt.maxTouchPoints && Xt.maxTouchPoints > 2 && this.set(j, "iPad").set(U, qe);
        break;
      case ci:
        !this.get(x) && Xo && Xo[vn] && this.set(x, Xo[vn]);
        break;
      case bn:
        var e = this.data, t = function(i) {
          return e[i].getItem().detectFeature().get();
        };
        this.set(ei, t(ei)).set(to, t(to)).set(ki, t(ki)).set(Ai, t(Ai)).set(ci, t(ci));
    }
    return this;
  };
  Lo.prototype.parseUA = function() {
    switch (this.itemType != bn && lc.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case ei:
        this.set(Ir, cc(this.get(V)));
        break;
      case ci:
        if (this.get(x) == "iOS" && this.get(V) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(V, e[1]);
        }
        break;
    }
    return this;
  };
  Lo.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case ei:
      case Ai:
        var i = e[Bc] || e[Gc], o;
        if (i) for (var n = 0; n < i.length; n++) {
          var s = i[n].brand || i[n], l = i[n].version;
          this.itemType == ei && !/not.a.brand/i.test(s) && (!o || /Chrom/.test(o) && s != kl || o == cs && /WebView2/.test(s)) && (s = Si(s, fm), o = this.get(x), o && !/Chrom/.test(o) && /Chrom/.test(s) || this.set(x, s).set(V, l).set(Ir, cc(l)), o = s), this.itemType == Ai && s == kl && this.set(V, l);
        }
        break;
      case to:
        var h = e[Vt];
        h && (h && e[Vs] == "64" && (h += "64"), lc.call(this.data, h + ";", t));
        break;
      case ki:
        if (e[Le] && this.set(U, Le), e[j] && (this.set(j, e[j]), !this.get(U) || !this.get($))) {
          var d = {};
          lc.call(d, "droid 9; " + e[j] + ")", t), !this.get(U) && d.type && this.set(U, d.type), !this.get($) && d.vendor && this.set($, d.vendor);
        }
        if (e[Jo]) {
          var m;
          if (typeof e[Jo] != "string") for (var p = 0; !m && p < e[Jo].length; ) m = Si(e[Jo][p++], Bl);
          else m = Si(e[Jo], Bl);
          this.set(U, m);
        }
        break;
      case ci:
        var I = e[vn];
        if (I) {
          var N = e[jc];
          I == sc && (N = parseInt(cc(N), 10) >= 13 ? "11" : "10"), this.set(x, I).set(V, N);
        }
        this.get(x) == sc && e[j] == "Xbox" && this.set(x, "Xbox").set(V, void 0);
        break;
      case bn:
        var S = this.data, M = function(D) {
          return S[D].getItem().setCH(e).parseCH().get();
        };
        this.set(ei, M(ei)).set(to, M(to)).set(ki, M(ki)).set(Ai, M(Ai)).set(ci, M(ci));
    }
    return this;
  };
  no = function(e, t, i) {
    if (typeof e === It.OBJECT ? (Ts(e, true) ? (typeof t === It.OBJECT && (i = t), t = e) : (i = e, t = void 0), e = void 0) : typeof e === It.STRING && !Ts(t, true) && (i = t, t = void 0), i) if (typeof i.append === It.FUNCTION) {
      var o = {};
      i.forEach(function(p, I) {
        o[String(I).toLowerCase()] = p;
      }), i = o;
    } else {
      var n = {};
      for (var s in i) i.hasOwnProperty(s) && (n[String(s).toLowerCase()] = i[s]);
      i = n;
    }
    if (!(this instanceof no)) return new no(e, t, i).getResult();
    var l = typeof e === It.STRING ? e : i && i[vl] ? i[vl] : Xt && Xt.userAgent ? Xt.userAgent : Nn, h = new $h(i, true), d = t ? hm(jl, t) : jl, m = function(p) {
      return p == bn ? function() {
        return new Lo(p, l, d, h).set("ua", l).set(ei, this.getBrowser()).set(to, this.getCPU()).set(ki, this.getDevice()).set(Ai, this.getEngine()).set(ci, this.getOS()).get();
      } : function() {
        return new Lo(p, l, d[p], h).parseUA().get();
      };
    };
    return eo.call(this, [
      [
        "getBrowser",
        m(ei)
      ],
      [
        "getCPU",
        m(to)
      ],
      [
        "getDevice",
        m(ki)
      ],
      [
        "getEngine",
        m(Ai)
      ],
      [
        "getOS",
        m(ci)
      ],
      [
        "getResult",
        m(bn)
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
          return Cr(p) && (l = Es(p, im)), this;
        }
      ]
    ]).setUA(l), this;
  };
  no.VERSION = tm;
  no.BROWSER = Zs([
    x,
    V,
    Ir,
    U
  ]);
  no.CPU = Zs([
    Vt
  ]);
  no.DEVICE = Zs([
    j,
    $,
    U,
    as,
    Le,
    Rt,
    qe,
    Mi,
    tr
  ]);
  no.ENGINE = no.OS = Zs([
    x,
    V
  ]);
  let Et;
  Et = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(Et || {});
  Dr = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(Dr || {});
  Gn = class extends Error {
    constructor(t, i) {
      super(t), this.cause = i, this.name = this.constructor.name, i && (this.message = `${t} (caused by: ${i.message})`);
    }
  };
  class Ue extends Gn {
    constructor(t, i = "GENERIC_ERROR", o) {
      super(t, o);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = i;
    }
  }
  function pm(e) {
    return e instanceof Gn;
  }
  zr = function(e, t = "Unknown error occurred") {
    return pm(e) ? e : e instanceof Error ? new Ue(t, "UNKNOWN_ERROR", e) : new Ue(t, "UNKNOWN_ERROR");
  };
  xo = function(e, t) {
    const i = t ? `[${t}] ` : "";
    console.error(`${i}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class mm {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new no(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? Et.TAURI : this.parser.getDevice().type === "mobile" ? Et.MOBILE_WEB : Et.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), i = this.parser.getDevice(), o = this.parser.getBrowser(), n = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: typeof navigator < "u" ? navigator.userAgent : "",
        isMobile: i.type === "mobile",
        isTablet: i.type === "tablet",
        browser: o.name || void 0,
        os: n.name || void 0
      };
    }
    getPlatformCapabilities(t) {
      const i = {
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
        case Et.TAURI:
          return {
            ...i,
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
              ...i.permissions,
              geolocation: true
            },
            sensors: {
              deviceOrientation: "DeviceOrientationEvent" in window,
              motion: "DeviceMotionEvent" in window,
              highAccuracy: false
            }
          };
        case Et.MOBILE_WEB:
          return {
            ...i,
            geolocation: {
              ...i.geolocation,
              highAccuracy: false,
              kalmanFilter: true
            },
            permissions: {
              ...i.permissions,
              geolocation: true
            },
            sensors: {
              ...i.sensors,
              highAccuracy: true
            }
          };
        case Et.WEB:
        case Et.UNKNOWN:
        default:
          return i;
      }
    }
    getDefaultConfiguration(t) {
      const i = {
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
        case Et.TAURI:
          return {
            ...i,
            storage: {
              ...i.storage,
              filePath: "user-data.json",
              autoSave: false
            },
            geolocation: {
              ...i.geolocation,
              tauriHandler: "get_geolocation"
            },
            fileSystem: {
              ...i.fileSystem,
              basePath: "./data",
              allowedExtensions: [
                ".json",
                ".geojson",
                ".gpx",
                ".kml"
              ]
            }
          };
        case Et.MOBILE_WEB:
          return {
            ...i,
            storage: {
              ...i.storage,
              dbName: "mobile-trackmaker-db",
              storeName: "user-data"
            },
            geolocation: {
              ...i.geolocation,
              timeout: 2e4,
              maximumAge: 5e3,
              enableHighAccuracy: true
            }
          };
        case Et.WEB:
        case Et.UNKNOWN:
        default:
          return {
            ...i,
            storage: {
              ...i.storage,
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
        }), W(true));
      } catch (t) {
        return C(new Ue("Platform detection failed", void 0, t));
      }
    }
  }
  const xc = new mm();
  cv = function() {
    return xc.getPlatformContext();
  };
  function gm(e, t, i, o) {
    if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return i === "m" ? o : i === "a" ? o.call(e) : o ? o.value : t.get(e);
  }
  function Tm(e, t, i, o, n) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, i), i;
  }
  var ls;
  function Em(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function Nt(e, t = {}, i) {
    return window.__TAURI_INTERNALS__.invoke(e, t, i);
  }
  class Im {
    get rid() {
      return gm(this, ls, "f");
    }
    constructor(t) {
      ls.set(this, void 0), Tm(this, ls, t);
    }
    async close() {
      return Nt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  ls = /* @__PURE__ */ new WeakMap();
  var xl;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(xl || (xl = {}));
  async function Om(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await Nt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Yl(e, t, i) {
    var o;
    const n = (o = void 0) !== null && o !== void 0 ? o : {
      kind: "Any"
    };
    return Nt("plugin:event|listen", {
      event: e,
      target: n,
      handler: Em(t)
    }).then((s) => async () => Om(e, s));
  }
  async function Rm(e, t) {
    return await Is.load(e, t);
  }
  class Is extends Im {
    constructor(t) {
      super(t);
    }
    static async load(t, i) {
      const o = await Nt("plugin:store|load", {
        path: t,
        options: i
      });
      return new Is(o);
    }
    static async get(t) {
      return await Nt("plugin:store|get_store", {
        path: t
      }).then((i) => i ? new Is(i) : null);
    }
    async set(t, i) {
      await Nt("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: i
      });
    }
    async get(t) {
      const [i, o] = await Nt("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return o ? i : void 0;
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
    async onKeyChange(t, i) {
      return await Yl("store://change", (o) => {
        o.payload.resourceId === this.rid && o.payload.key === t && i(o.payload.exists ? o.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Yl("store://change", (i) => {
        i.payload.resourceId === this.rid && t(i.payload.key, i.payload.exists ? i.payload.value : void 0);
      });
    }
  }
  class ct extends Gn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", Dr.STORAGE);
      this.code = i;
    }
  }
  var nt = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(nt || {});
  class Dt extends Gn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", Dr.GEOLOCATION);
      this.code = i;
    }
  }
  var Tt = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(Tt || {});
  class Yo extends Gn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "domain", Dr.GENERIC);
      this.code = i;
    }
  }
  var Eo = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(Eo || {});
  class wm {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return W(void 0);
      try {
        return this.store = await Rm(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, W(void 0);
      } catch (t) {
        return C(new ct("Failed to initialize Tauri storage", nt.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, i) {
      if (!this.store) return C(new ct("Tauri store not initialized", nt.NOT_INITIALIZED));
      try {
        return await this.store.set(t, i), W(void 0);
      } catch (o) {
        return C(new ct(`Failed to set value for key: ${t}`, nt.SET_FAILED, o));
      }
    }
    async get(t) {
      if (!this.store) return C(new ct("Tauri store not initialized", nt.NOT_INITIALIZED));
      try {
        const i = await this.store.get(t);
        return W(i ?? null);
      } catch (i) {
        return C(new ct(`Failed to get value for key: ${t}`, nt.GET_FAILED, i));
      }
    }
    async save() {
      if (!this.store) return C(new ct("Tauri store not initialized", nt.NOT_INITIALIZED));
      try {
        return await this.store.save(), W(void 0);
      } catch (t) {
        return C(new ct("Failed to save store", nt.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return C(new ct("Tauri store not initialized", nt.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), i = {};
        for (const o of t) {
          const n = await this.store.get(o);
          i[o] = n;
        }
        return W(JSON.stringify(i, null, 2));
      } catch (t) {
        return C(new ct("Failed to export data to JSON", nt.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return C(new ct("Tauri store not initialized", nt.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const i of t) await this.store.delete(i);
        return W(void 0);
      } catch (t) {
        return C(new ct("Failed to clear store", nt.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return C(new ct("Tauri store not initialized", nt.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), W(void 0);
      } catch (i) {
        return C(new ct(`Failed to remove key: ${t}`, nt.REMOVE_FAILED, i));
      }
    }
  }
  let Vh, ym, Zh, Sm, Am, Jn;
  Vh = typeof global == "object" && global && global.Object === Object && global;
  ym = typeof self == "object" && self && self.Object === Object && self;
  Wi = Vh || ym || Function("return this")();
  Cn = Wi.Symbol;
  Zh = Object.prototype;
  Sm = Zh.hasOwnProperty;
  Am = Zh.toString;
  Jn = Cn ? Cn.toStringTag : void 0;
  function Nm(e) {
    var t = Sm.call(e, Jn), i = e[Jn];
    try {
      e[Jn] = void 0;
      var o = true;
    } catch {
    }
    var n = Am.call(e);
    return o && (t ? e[Jn] = i : delete e[Jn]), n;
  }
  var bm = Object.prototype, vm = bm.toString;
  function Lm(e) {
    return vm.call(e);
  }
  var Cm = "[object Null]", Dm = "[object Undefined]", zl = Cn ? Cn.toStringTag : void 0;
  Po = function(e) {
    return e == null ? e === void 0 ? Dm : Cm : zl && zl in Object(e) ? Nm(e) : Lm(e);
  };
  Fo = function(e) {
    return e != null && typeof e == "object";
  };
  qs = Array.isArray;
  Ks = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Hm = "[object AsyncFunction]", Mm = "[object Function]", Pm = "[object GeneratorFunction]", Fm = "[object Proxy]";
  qh = function(e) {
    if (!Ks(e)) return false;
    var t = Po(e);
    return t == Mm || t == Pm || t == Hm || t == Fm;
  };
  var Ma = Wi["__core-js_shared__"], $l = (function() {
    var e = /[^.]+$/.exec(Ma && Ma.keys && Ma.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function _m(e) {
    return !!$l && $l in e;
  }
  var Um = Function.prototype, km = Um.toString;
  function rn(e) {
    if (e != null) {
      try {
        return km.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Wm = /[\\^$.*+?()[\]{}|]/g, Gm = /^\[object .+?Constructor\]$/, Bm = Function.prototype, jm = Object.prototype, xm = Bm.toString, Ym = jm.hasOwnProperty, zm = RegExp("^" + xm.call(Ym).replace(Wm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function $m(e) {
    if (!Ks(e) || _m(e)) return false;
    var t = qh(e) ? zm : Gm;
    return t.test(rn(e));
  }
  function Vm(e, t) {
    return e == null ? void 0 : e[t];
  }
  function sn(e, t) {
    var i = Vm(e, t);
    return $m(i) ? i : void 0;
  }
  let uc, Vl, Zm;
  uc = sn(Wi, "WeakMap");
  Vl = Object.create;
  Zm = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Ks(t)) return {};
      if (Vl) return Vl(t);
      e.prototype = t;
      var i = new e();
      return e.prototype = void 0, i;
    };
  })();
  Zl = (function() {
    try {
      var e = sn(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function qm(e, t) {
    for (var i = -1, o = e == null ? 0 : e.length; ++i < o && t(e[i], i, e) !== false; ) ;
    return e;
  }
  var Km = 9007199254740991, Jm = /^(?:0|[1-9]\d*)$/;
  Xm = function(e, t) {
    var i = typeof e;
    return t = t ?? Km, !!t && (i == "number" || i != "symbol" && Jm.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  Qm = function(e, t, i) {
    t == "__proto__" && Zl ? Zl(e, t, {
      configurable: true,
      enumerable: true,
      value: i,
      writable: true
    }) : e[t] = i;
  };
  Kh = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var eg = Object.prototype, tg = eg.hasOwnProperty;
  ig = function(e, t, i) {
    var o = e[t];
    (!(tg.call(e, t) && Kh(o, i)) || i === void 0 && !(t in e)) && Qm(e, t, i);
  };
  var og = 9007199254740991;
  Jh = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= og;
  };
  ng = function(e) {
    return e != null && Jh(e.length) && !qh(e);
  };
  var rg = Object.prototype;
  Xh = function(e) {
    var t = e && e.constructor, i = typeof t == "function" && t.prototype || rg;
    return e === i;
  };
  function sg(e, t) {
    for (var i = -1, o = Array(e); ++i < e; ) o[i] = t(i);
    return o;
  }
  var ag = "[object Arguments]";
  function ql(e) {
    return Fo(e) && Po(e) == ag;
  }
  let Qh, cg, lg;
  Qh = Object.prototype;
  cg = Qh.hasOwnProperty;
  lg = Qh.propertyIsEnumerable;
  ug = ql(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? ql : function(e) {
    return Fo(e) && cg.call(e, "callee") && !lg.call(e, "callee");
  };
  function hg() {
    return false;
  }
  let ef, Kl, fg, Jl, dg, pg, mg, gg, Tg, Eg, Ig, Og, Rg, wg, yg, Sg, Ag, Ng, bg, vg, Lg, Cg, Dg, Hg, Mg, Pg, Fg, _g, Ug, ot;
  ef = typeof exports == "object" && exports && !exports.nodeType && exports;
  Kl = ef && typeof module == "object" && module && !module.nodeType && module;
  fg = Kl && Kl.exports === ef;
  Jl = fg ? Wi.Buffer : void 0;
  dg = Jl ? Jl.isBuffer : void 0;
  tf = dg || hg;
  pg = "[object Arguments]";
  mg = "[object Array]";
  gg = "[object Boolean]";
  Tg = "[object Date]";
  Eg = "[object Error]";
  Ig = "[object Function]";
  Og = "[object Map]";
  Rg = "[object Number]";
  wg = "[object Object]";
  yg = "[object RegExp]";
  Sg = "[object Set]";
  Ag = "[object String]";
  Ng = "[object WeakMap]";
  bg = "[object ArrayBuffer]";
  vg = "[object DataView]";
  Lg = "[object Float32Array]";
  Cg = "[object Float64Array]";
  Dg = "[object Int8Array]";
  Hg = "[object Int16Array]";
  Mg = "[object Int32Array]";
  Pg = "[object Uint8Array]";
  Fg = "[object Uint8ClampedArray]";
  _g = "[object Uint16Array]";
  Ug = "[object Uint32Array]";
  ot = {};
  ot[Lg] = ot[Cg] = ot[Dg] = ot[Hg] = ot[Mg] = ot[Pg] = ot[Fg] = ot[_g] = ot[Ug] = true;
  ot[pg] = ot[mg] = ot[bg] = ot[gg] = ot[vg] = ot[Tg] = ot[Eg] = ot[Ig] = ot[Og] = ot[Rg] = ot[wg] = ot[yg] = ot[Sg] = ot[Ag] = ot[Ng] = false;
  function kg(e) {
    return Fo(e) && Jh(e.length) && !!ot[Po(e)];
  }
  function Yc(e) {
    return function(t) {
      return e(t);
    };
  }
  let of, sr, Wg, Pa, Dn, Xl, Bg, jg;
  of = typeof exports == "object" && exports && !exports.nodeType && exports;
  sr = of && typeof module == "object" && module && !module.nodeType && module;
  Wg = sr && sr.exports === of;
  Pa = Wg && Vh.process;
  Dn = (function() {
    try {
      var e = sr && sr.require && sr.require("util").types;
      return e || Pa && Pa.binding && Pa.binding("util");
    } catch {
    }
  })();
  Xl = Dn && Dn.isTypedArray;
  Gg = Xl ? Yc(Xl) : kg;
  Bg = Object.prototype;
  jg = Bg.hasOwnProperty;
  xg = function(e, t) {
    var i = qs(e), o = !i && ug(e), n = !i && !o && tf(e), s = !i && !o && !n && Gg(e), l = i || o || n || s, h = l ? sg(e.length, String) : [], d = h.length;
    for (var m in e) (t || jg.call(e, m)) && !(l && (m == "length" || n && (m == "offset" || m == "parent") || s && (m == "buffer" || m == "byteLength" || m == "byteOffset") || Xm(m, d))) && h.push(m);
    return h;
  };
  function nf(e, t) {
    return function(i) {
      return e(t(i));
    };
  }
  var Yg = nf(Object.keys, Object), zg = Object.prototype, $g = zg.hasOwnProperty;
  function Vg(e) {
    if (!Xh(e)) return Yg(e);
    var t = [];
    for (var i in Object(e)) $g.call(e, i) && i != "constructor" && t.push(i);
    return t;
  }
  Zg = function(e) {
    return ng(e) ? xg(e) : Vg(e);
  };
  var Or = sn(Object, "create");
  function qg() {
    this.__data__ = Or ? Or(null) : {}, this.size = 0;
  }
  function Kg(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Jg = "__lodash_hash_undefined__", Xg = Object.prototype, Qg = Xg.hasOwnProperty;
  function eT(e) {
    var t = this.__data__;
    if (Or) {
      var i = t[e];
      return i === Jg ? void 0 : i;
    }
    return Qg.call(t, e) ? t[e] : void 0;
  }
  var tT = Object.prototype, iT = tT.hasOwnProperty;
  function oT(e) {
    var t = this.__data__;
    return Or ? t[e] !== void 0 : iT.call(t, e);
  }
  var nT = "__lodash_hash_undefined__";
  function rT(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = Or && t === void 0 ? nT : t, this;
  }
  function nn(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  nn.prototype.clear = qg;
  nn.prototype.delete = Kg;
  nn.prototype.get = eT;
  nn.prototype.has = oT;
  nn.prototype.set = rT;
  function sT() {
    this.__data__ = [], this.size = 0;
  }
  function Js(e, t) {
    for (var i = e.length; i--; ) if (Kh(e[i][0], t)) return i;
    return -1;
  }
  var aT = Array.prototype, cT = aT.splice;
  function lT(e) {
    var t = this.__data__, i = Js(t, e);
    if (i < 0) return false;
    var o = t.length - 1;
    return i == o ? t.pop() : cT.call(t, i, 1), --this.size, true;
  }
  function uT(e) {
    var t = this.__data__, i = Js(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  function hT(e) {
    return Js(this.__data__, e) > -1;
  }
  function fT(e, t) {
    var i = this.__data__, o = Js(i, e);
    return o < 0 ? (++this.size, i.push([
      e,
      t
    ])) : i[o][1] = t, this;
  }
  function lo(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  lo.prototype.clear = sT;
  lo.prototype.delete = lT;
  lo.prototype.get = uT;
  lo.prototype.has = hT;
  lo.prototype.set = fT;
  var Rr = sn(Wi, "Map");
  function dT() {
    this.size = 0, this.__data__ = {
      hash: new nn(),
      map: new (Rr || lo)(),
      string: new nn()
    };
  }
  function pT(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Xs(e, t) {
    var i = e.__data__;
    return pT(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  function mT(e) {
    var t = Xs(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function gT(e) {
    return Xs(this, e).get(e);
  }
  function TT(e) {
    return Xs(this, e).has(e);
  }
  function ET(e, t) {
    var i = Xs(this, e), o = i.size;
    return i.set(e, t), this.size += i.size == o ? 0 : 1, this;
  }
  Bn = function(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  };
  Bn.prototype.clear = dT;
  Bn.prototype.delete = mT;
  Bn.prototype.get = gT;
  Bn.prototype.has = TT;
  Bn.prototype.set = ET;
  function IT(e, t) {
    for (var i = -1, o = t.length, n = e.length; ++i < o; ) e[n + i] = t[i];
    return e;
  }
  var rf = nf(Object.getPrototypeOf, Object), OT = "[object Object]", RT = Function.prototype, wT = Object.prototype, sf = RT.toString, yT = wT.hasOwnProperty, ST = sf.call(Object);
  AT = function(e) {
    if (!Fo(e) || Po(e) != OT) return false;
    var t = rf(e);
    if (t === null) return true;
    var i = yT.call(t, "constructor") && t.constructor;
    return typeof i == "function" && i instanceof i && sf.call(i) == ST;
  };
  var NT = "[object DOMException]", bT = "[object Error]";
  function af(e) {
    if (!Fo(e)) return false;
    var t = Po(e);
    return t == bT || t == NT || typeof e.message == "string" && typeof e.name == "string" && !AT(e);
  }
  function vT() {
    this.__data__ = new lo(), this.size = 0;
  }
  function LT(e) {
    var t = this.__data__, i = t.delete(e);
    return this.size = t.size, i;
  }
  function CT(e) {
    return this.__data__.get(e);
  }
  function DT(e) {
    return this.__data__.has(e);
  }
  var HT = 200;
  function MT(e, t) {
    var i = this.__data__;
    if (i instanceof lo) {
      var o = i.__data__;
      if (!Rr || o.length < HT - 1) return o.push([
        e,
        t
      ]), this.size = ++i.size, this;
      i = this.__data__ = new Bn(o);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  jn = function(e) {
    var t = this.__data__ = new lo(e);
    this.size = t.size;
  };
  jn.prototype.clear = vT;
  jn.prototype.delete = LT;
  jn.prototype.get = CT;
  jn.prototype.has = DT;
  jn.prototype.set = MT;
  var cf = typeof exports == "object" && exports && !exports.nodeType && exports, Ql = cf && typeof module == "object" && module && !module.nodeType && module, PT = Ql && Ql.exports === cf, eu = PT ? Wi.Buffer : void 0, tu = eu ? eu.allocUnsafe : void 0;
  FT = function(e, t) {
    if (t) return e.slice();
    var i = e.length, o = tu ? tu(i) : new e.constructor(i);
    return e.copy(o), o;
  };
  function _T(e, t) {
    for (var i = -1, o = e == null ? 0 : e.length, n = 0, s = []; ++i < o; ) {
      var l = e[i];
      t(l, i, e) && (s[n++] = l);
    }
    return s;
  }
  function UT() {
    return [];
  }
  var kT = Object.prototype, WT = kT.propertyIsEnumerable, iu = Object.getOwnPropertySymbols, GT = iu ? function(e) {
    return e == null ? [] : (e = Object(e), _T(iu(e), function(t) {
      return WT.call(e, t);
    }));
  } : UT;
  function BT(e, t, i) {
    var o = t(e);
    return qs(e) ? o : IT(o, i(e));
  }
  jT = function(e) {
    return BT(e, Zg, GT);
  };
  let hc, fc, dc, ou, xT, nu, ru, su, au, YT, zT, $T, VT, ZT;
  hc = sn(Wi, "DataView");
  fc = sn(Wi, "Promise");
  dc = sn(Wi, "Set");
  ou = "[object Map]";
  xT = "[object Object]";
  nu = "[object Promise]";
  ru = "[object Set]";
  su = "[object WeakMap]";
  au = "[object DataView]";
  YT = rn(hc);
  zT = rn(Rr);
  $T = rn(fc);
  VT = rn(dc);
  ZT = rn(uc);
  Ki = Po;
  (hc && Ki(new hc(new ArrayBuffer(1))) != au || Rr && Ki(new Rr()) != ou || fc && Ki(fc.resolve()) != nu || dc && Ki(new dc()) != ru || uc && Ki(new uc()) != su) && (Ki = function(e) {
    var t = Po(e), i = t == xT ? e.constructor : void 0, o = i ? rn(i) : "";
    if (o) switch (o) {
      case YT:
        return au;
      case zT:
        return ou;
      case $T:
        return nu;
      case VT:
        return ru;
      case ZT:
        return su;
    }
    return t;
  });
  var qT = Object.prototype, KT = qT.hasOwnProperty;
  function JT(e) {
    var t = e.length, i = new e.constructor(t);
    return t && typeof e[0] == "string" && KT.call(e, "index") && (i.index = e.index, i.input = e.input), i;
  }
  cu = Wi.Uint8Array;
  function zc(e) {
    var t = new e.constructor(e.byteLength);
    return new cu(t).set(new cu(e)), t;
  }
  function XT(e, t) {
    var i = zc(e.buffer);
    return new e.constructor(i, e.byteOffset, e.byteLength);
  }
  var QT = /\w*$/;
  function eE(e) {
    var t = new e.constructor(e.source, QT.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var lu = Cn ? Cn.prototype : void 0, uu = lu ? lu.valueOf : void 0;
  function tE(e) {
    return uu ? Object(uu.call(e)) : {};
  }
  iE = function(e, t) {
    var i = t ? zc(e.buffer) : e.buffer;
    return new e.constructor(i, e.byteOffset, e.length);
  };
  var oE = "[object Boolean]", nE = "[object Date]", rE = "[object Map]", sE = "[object Number]", aE = "[object RegExp]", cE = "[object Set]", lE = "[object String]", uE = "[object Symbol]", hE = "[object ArrayBuffer]", fE = "[object DataView]", dE = "[object Float32Array]", pE = "[object Float64Array]", mE = "[object Int8Array]", gE = "[object Int16Array]", TE = "[object Int32Array]", EE = "[object Uint8Array]", IE = "[object Uint8ClampedArray]", OE = "[object Uint16Array]", RE = "[object Uint32Array]";
  function wE(e, t, i) {
    var o = e.constructor;
    switch (t) {
      case hE:
        return zc(e);
      case oE:
      case nE:
        return new o(+e);
      case fE:
        return XT(e);
      case dE:
      case pE:
      case mE:
      case gE:
      case TE:
      case EE:
      case IE:
      case OE:
      case RE:
        return iE(e, i);
      case rE:
        return new o();
      case sE:
      case lE:
        return new o(e);
      case aE:
        return eE(e);
      case cE:
        return new o();
      case uE:
        return tE(e);
    }
  }
  yE = function(e) {
    return typeof e.constructor == "function" && !Xh(e) ? Zm(rf(e)) : {};
  };
  var SE = "[object Map]";
  function AE(e) {
    return Fo(e) && Ki(e) == SE;
  }
  var hu = Dn && Dn.isMap, NE = hu ? Yc(hu) : AE, bE = "[object Set]";
  function vE(e) {
    return Fo(e) && Ki(e) == bE;
  }
  var fu = Dn && Dn.isSet, LE = fu ? Yc(fu) : vE, CE = 1, lf = "[object Arguments]", DE = "[object Array]", HE = "[object Boolean]", ME = "[object Date]", PE = "[object Error]", uf = "[object Function]", FE = "[object GeneratorFunction]", _E = "[object Map]", UE = "[object Number]", hf = "[object Object]", kE = "[object RegExp]", WE = "[object Set]", GE = "[object String]", BE = "[object Symbol]", jE = "[object WeakMap]", xE = "[object ArrayBuffer]", YE = "[object DataView]", zE = "[object Float32Array]", $E = "[object Float64Array]", VE = "[object Int8Array]", ZE = "[object Int16Array]", qE = "[object Int32Array]", KE = "[object Uint8Array]", JE = "[object Uint8ClampedArray]", XE = "[object Uint16Array]", QE = "[object Uint32Array]", Qe = {};
  Qe[lf] = Qe[DE] = Qe[xE] = Qe[YE] = Qe[HE] = Qe[ME] = Qe[zE] = Qe[$E] = Qe[VE] = Qe[ZE] = Qe[qE] = Qe[_E] = Qe[UE] = Qe[hf] = Qe[kE] = Qe[WE] = Qe[GE] = Qe[BE] = Qe[KE] = Qe[JE] = Qe[XE] = Qe[QE] = true;
  Qe[PE] = Qe[uf] = Qe[jE] = false;
  function us(e, t, i, o, n, s) {
    var l, h = t & CE;
    if (l !== void 0) return l;
    if (!Ks(e)) return e;
    var d = qs(e);
    if (d) l = JT(e);
    else {
      var m = Ki(e), p = m == uf || m == FE;
      if (tf(e)) return FT(e, h);
      if (m == hf || m == lf || p && !n) l = p ? {} : yE(e);
      else {
        if (!Qe[m]) return n ? e : {};
        l = wE(e, m, h);
      }
    }
    s || (s = new jn());
    var I = s.get(e);
    if (I) return I;
    s.set(e, l), LE(e) ? e.forEach(function(M) {
      l.add(us(M, t, i, M, e, s));
    }) : NE(e) && e.forEach(function(M, D) {
      l.set(D, us(M, t, i, D, e, s));
    });
    var N = jT, S = d ? void 0 : N(e);
    return qm(S || e, function(M, D) {
      S && (D = M, M = e[D]), ig(l, D, us(M, t, i, D, e, s));
    }), l;
  }
  var eI = 1, tI = 4;
  ff = function(e) {
    return us(e, eI | tI);
  };
  var iI = "[object String]";
  function pc(e) {
    return typeof e == "string" || !qs(e) && Fo(e) && Po(e) == iI;
  }
  let oI, nI;
  Fa = {
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
  lv = [
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
  nI = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function Ft(e) {
    try {
      if (typeof localStorage > "u") return Fa[e];
      const t = localStorage.getItem(oI);
      if (t !== null) return JSON.parse(t)[e] ?? Fa[e];
    } catch {
    }
    return Fa[e];
  }
  function du() {
    return Ft("debugMode");
  }
  function $c() {
    return Ft("gpsUpdateInterval");
  }
  function rI() {
    return Ft("kalmanGpsUpdateInterval");
  }
  function sI() {
    return Ft("enableKalmanFilter");
  }
  uv = function() {
    return Ft("mapZoomLevel");
  };
  hv = function() {
    return Ft("keepScreenOn");
  };
  fv = function() {
    return Ft("mapTileServer");
  };
  dv = function() {
    return Ft("showCompass");
  };
  pv = function() {
    return Ft("autoRecenterTimeout");
  };
  mv = function() {
    return Ft("customMapTileUrl");
  };
  gv = function() {
    return Ft("mapTilerApiKey");
  };
  function mc() {
    return Ft("imuUpdateFrequency");
  }
  class aI {
    constructor(t = "trackmaker-db", i = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = i;
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
      if (this.db) return new Promise((t, i) => {
        const o = this.db.transaction(this.storeName, "readwrite"), s = o.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), l = 100;
        let h = 0;
        s.onsuccess = (d) => {
          const m = d.target.result;
          m && h < l && (m.delete(), h++, m.continue());
        }, o.oncomplete = () => t(), o.onerror = () => i(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return W(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, W(void 0);
      } catch (t) {
        return C(new ct("Failed to initialize Web storage", nt.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, i) => {
        const o = indexedDB.open(this.dbName, 1);
        o.onupgradeneeded = (n) => {
          const s = n.target.result;
          s.objectStoreNames.contains(this.storeName) || s.createObjectStore(this.storeName);
        }, o.onsuccess = (n) => {
          t(n.target.result);
        }, o.onerror = (n) => {
          i(n.target.error ?? Error("Failed to open database"));
        };
      });
    }
    async set(t, i) {
      if (!this.db) return C(new ct("Database not initialized", nt.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (o) => new Promise((n, s) => {
          const l = o.put(ff(i), t);
          l.onsuccess = () => n(), l.onerror = () => s(new Error("Failed to set value"));
        })), W(void 0);
      } catch (o) {
        return C(new ct(`Failed to set value for key: ${t}`, nt.SET_FAILED, o));
      }
    }
    async get(t) {
      if (!this.db) return C(new ct("Database not initialized", nt.NOT_INITIALIZED));
      try {
        const i = await this.executeTransaction("readonly", (o) => new Promise((n, s) => {
          const l = o.get(t);
          l.onsuccess = () => n(l.result), l.onerror = () => s(new Error("Failed to get value"));
        }));
        return W(i);
      } catch (i) {
        return C(new ct(`Failed to get value for key: ${t}`, nt.GET_FAILED, i));
      }
    }
    async save() {
      return W(void 0);
    }
    async exportToJson() {
      if (!this.db) return C(new ct("Database not initialized", nt.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (i) => new Promise((o, n) => {
          const s = i.getAll();
          s.onsuccess = () => {
            const h = s.result.reduce((d, m, p) => (d[p] = m, d), {});
            o(h);
          }, s.onerror = () => n(new Error("Failed to export data"));
        }));
        return W(JSON.stringify(t, null, 2));
      } catch (t) {
        return C(new ct("Failed to export data to JSON", nt.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return C(new ct("Database not initialized", nt.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((i, o) => {
          const n = t.clear();
          n.onsuccess = () => i(), n.onerror = () => o(new Error("Failed to clear store"));
        })), W(void 0);
      } catch (t) {
        return C(new ct("Failed to clear store", nt.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return C(new ct("Database not initialized", nt.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((o, n) => {
          const s = i.delete(t);
          s.onsuccess = () => o(), s.onerror = () => n(new Error("Failed to remove key"));
        })), W(void 0);
      } catch (i) {
        return C(new ct(`Failed to remove key: ${t}`, nt.REMOVE_FAILED, i));
      }
    }
    executeTransaction(t, i) {
      return new Promise((o, n) => {
        if (!this.db) {
          n(new Error("Database not initialized"));
          return;
        }
        const s = this.db.transaction(this.storeName, t), l = s.objectStore(this.storeName);
        i(l).then(o).catch(n), s.onerror = () => {
          n(new Error("Transaction failed"));
        };
      });
    }
  }
  class cI {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init(t) {
      if (this.initialized) return W(void 0);
      const i = await this.getPermissionStatus();
      if (i.isErr()) return C(i.error);
      if (i.value === "prompt" && t) {
        if (!await t(i.value, "permission.location.prompt")) return C(new Dt("Geolocation permission denied", Tt.PERMISSION_DENIED));
        const n = await this.getPermissionStatus();
        if (n.isErr()) return C(n.error);
        if (n.value === "denied") return C(new Dt("Geolocation permission denied", Tt.PERMISSION_DENIED));
      }
      try {
        return await this.injectTauriProvider(), this.initialized = true, W(void 0);
      } catch (o) {
        return C(new Dt("Failed to initialize Tauri geolocation provider", Tt.INITIALIZATION_FAILED, o));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new lI(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return await this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return W(t.state);
      } catch (t) {
        return C(new Dt("Failed to get permission status", Tt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(W("granted")), (i) => {
          i.code === i.PERMISSION_DENIED ? t(W("denied")) : t(W("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), W("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? W("denied") : C(new Dt("Failed to request permission", Tt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return W(this.convertToGeolocationPosition(t));
      } catch (t) {
        return C(new Dt("Failed to get current position", Tt.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await Nt(this.tauriHandlerName);
    }
    convertToGeolocationPosition(t) {
      const i = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, o = {
        coords: {
          ...i,
          toJSON: () => JSON.stringify(i)
        },
        timestamp: performance.now()
      };
      return {
        ...o,
        toJSON: () => JSON.stringify(o)
      };
    }
    async watchPosition(t, i) {
      try {
        const o = $c(), n = (i == null ? void 0 : i.highFrequency) ?? false, s = window.setInterval(async () => {
          try {
            const l = await this.getCurrentPosition();
            l.isOk() && t(l.value);
          } catch (l) {
            console.error("Error in watch position:", l);
          }
        }, n ? 100 : o);
        return this.watchCallbacks.set(s, s), W(s);
      } catch (o) {
        return C(new Dt("Failed to start watching position", Tt.WATCH_FAILED, o));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), W(void 0);
      } catch (i) {
        return C(new Dt("Failed to clear watch", Tt.CLEAR_WATCH_FAILED, i));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class lI {
    constructor(t) {
      __publicField(this, "tauriHandlerName");
      this.tauriHandlerName = t;
    }
    getCurrentPosition(t, i) {
      this.getTauriPosition().then(t).catch((o) => {
        i == null ? void 0 : i(this.createPositionError(o));
      });
    }
    watchPosition(t, i, o) {
      const n = $c(), s = (o == null ? void 0 : o.highFrequency) ?? false;
      return window.setInterval(() => {
        this.getTauriPosition().then(t).catch((h) => {
          i == null ? void 0 : i(this.createPositionError(h));
        });
      }, s ? 100 : n);
    }
    clearWatch(t) {
      clearInterval(t);
    }
    async getTauriPosition() {
      const t = await Nt(this.tauriHandlerName), i = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, o = {
        coords: {
          ...i,
          toJSON: () => JSON.stringify(i)
        },
        timestamp: performance.now()
      };
      return {
        ...o,
        toJSON: () => JSON.stringify(o)
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
  class uI {
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
      if (this.initialized) return W(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.initialized) return W(void 0);
      if (!this.isSupported()) return C(new Dt("Geolocation is not supported by this browser", Tt.UNSUPPORTED));
      const i = await this.getPermissionStatus();
      if (i.isErr()) return C(i.error);
      if (i.value === "prompt" && t) {
        if (!await t(i.value, "permission.location.prompt")) return C(new Dt("Geolocation permission denied", Tt.PERMISSION_DENIED));
        const n = await this.getPermissionStatus();
        if (n.isErr()) return C(n.error);
        if (n.value === "denied") return C(new Dt("Geolocation permission denied", Tt.PERMISSION_DENIED));
      }
      return this.initialized = true, W(void 0);
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return W(t.state);
      } catch (t) {
        return C(new Dt("Failed to get permission status", Tt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(W("granted")), (i) => {
          i.code === i.PERMISSION_DENIED ? t(W("denied")) : t(W("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? W("granted") : W("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? W("denied") : W("prompt") : C(new Dt("Failed to request permission", Tt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((i) => {
          t(W(i));
        }, (i) => {
          let o;
          const n = i.message;
          switch (i.code) {
            case i.PERMISSION_DENIED:
              o = Tt.PERMISSION_DENIED;
              break;
            case i.POSITION_UNAVAILABLE:
              o = Tt.POSITION_UNAVAILABLE;
              break;
            case i.TIMEOUT:
              o = Tt.TIMEOUT;
              break;
            default:
              o = Tt.POSITION_UNAVAILABLE;
          }
          t(C(new Dt(n, o, new Error(i.message))));
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 0
        });
      });
    }
    async watchPosition(t, i) {
      if (!this.initialized) {
        const h = await this.init();
        if (h.isErr()) return C(h.error);
      }
      const o = rI(), n = $c(), s = Ft("watchCompatibilityMode"), l = (i == null ? void 0 : i.highFrequency) ?? false;
      if (s || l) {
        l ? console.log("[Geolocation] High frequency mode enabled") : console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const h = Date.now();
          return this.compatibilityModeCallbacks.set(h, t), this.compatibilityIntervalId === null && (this.compatibilityIntervalId = setInterval(async () => {
            const d = await this.getCurrentPosition();
            if (d.isOk()) {
              const m = d.value, p = {
                lat: m.coords.latitude,
                lng: m.coords.longitude,
                acc: m.coords.accuracy
              }, I = Date.now();
              if (!(!l && I - this.lastCompatibilityUpdateTime > n) && !l && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === p.lat && this.lastCompatibilityPosition.lng === p.lng && this.lastCompatibilityPosition.acc === p.acc) return;
              this.lastCompatibilityPosition = p;
              for (const S of this.compatibilityModeCallbacks.values()) try {
                S(m);
              } catch (M) {
                console.error("[Geolocation] Callback error:", M);
              }
              this.lastCompatibilityUpdateTime = I;
            }
          }, l ? o : n)), this.compatibilityModeWatches.set(h, this.compatibilityIntervalId), W(h);
        } catch (h) {
          return C(new Dt("Failed to start watching position (compatibility mode)", Tt.WATCH_FAILED, h));
        }
      }
      try {
        const h = navigator.geolocation.watchPosition(t, (d) => {
          console.error("Geolocation watch error:", d);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: l ? 0 : n
        });
        return W(h);
      } catch (h) {
        return C(new Dt("Failed to start watching position", Tt.WATCH_FAILED, h));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null)) : navigator.geolocation.clearWatch(t), W(void 0);
      } catch (i) {
        return C(new Dt("Failed to clear watch", Tt.CLEAR_WATCH_FAILED, i));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class hI {
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
      if (this.initialized) return W(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.disposed) return C(new Ue("Device orientation provider has been disposed"));
      const i = await this.requestPermissionIfNeeded(t);
      return i.isErr() ? C(i.error) : await this.checkHardwareSupport() ? (this.initialized = true, W(void 0)) : C(new Ue("Device orientation is not supported by this browser"));
    }
    async requestPermissionIfNeeded(t) {
      try {
        if (typeof DeviceOrientationEvent < "u" && typeof DeviceOrientationEvent.requestPermission == "function") {
          let i = "prompt";
          try {
            i = await DeviceOrientationEvent.requestPermission();
          } catch {
          }
          if (t && i === "prompt") {
            if (!await t("prompt", "permission.device-orientation.required")) return C(new Ue("User declined to grant device orientation permission"));
            if (await DeviceOrientationEvent.requestPermission() !== "granted") return C(new Ue("Device orientation permission denied"));
          } else return i === "denied" ? C(new Ue("Device orientation permission denied")) : W(void 0);
        }
        return W(void 0);
      } catch (i) {
        return C(new Ue("Failed to request device orientation permission", void 0, i));
      }
    }
    async checkHardwareSupport() {
      return "DeviceOrientationEvent" in window ? new Promise((t) => {
        let i = false;
        const o = () => {
          window.removeEventListener("deviceorientation", l);
        }, n = () => {
          i || (i = true, o(), t(true));
        }, s = () => {
          i || (i = true, o(), t(false));
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
      if (this.isWatching) return W(void 0);
      try {
        return this.orientationEventListenerCount === 0 && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.orientationEventListenerCount++, this.isWatching = true, W(void 0);
      } catch (t) {
        return C(new Ue("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return W(void 0);
      try {
        return this.orientationEventListenerCount--, this.isWatching = false, this.lastReading = null, this.orientationEventListenerCount === 0 && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), W(void 0);
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
      return W(this.lastReading);
    }
    onOrientationChange(t) {
      const i = this.nextListenerId++;
      return this.listeners.set(i, t), this.lastReading && t(this.lastReading), i;
    }
    removeEventListener(t) {
      return this.listeners.delete(t), W(void 0);
    }
    dispose() {
      this.disposed || (this.disposed = true, this.stop(), this.listeners.clear(), this.initialized = false, this.initPromise = null, this.lastReading = null);
    }
    handleOrientationEvent(t) {
      if (t.alpha === null && t.beta === null && t.gamma === null) return;
      const i = {
        alpha: t.alpha ?? 0,
        beta: t.beta ?? 0,
        gamma: t.gamma ?? 0,
        webkitCompassHeading: t.webkitCompassHeading,
        timestamp: t.timeStamp || performance.now()
      };
      this.lastReading = i;
      for (const o of this.listeners.values()) try {
        o(i);
      } catch (n) {
        console.error("Error in device orientation callback:", n);
      }
    }
  }
  fI = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function df(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var i = function o() {
        var n = false;
        try {
          n = this instanceof o;
        } catch {
        }
        return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      i.prototype = t.prototype;
    } else i = {};
    return Object.defineProperty(i, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(o) {
      var n = Object.getOwnPropertyDescriptor(e, o);
      Object.defineProperty(i, o, n.get ? n : {
        enumerable: true,
        get: function() {
          return e[o];
        }
      });
    }), i;
  }
  var He = {};
  const dI = Object.prototype.toString;
  function wr(e) {
    const t = dI.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const pI = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: wr
  }, Symbol.toStringTag, {
    value: "Module"
  })), mI = df(pI);
  function gI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!wr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, o = i === void 0 ? 0 : i, n = t.toIndex, s = n === void 0 ? e.length : n;
    if (o < 0 || o >= e.length || !Number.isInteger(o)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (s <= o || s > e.length || !Number.isInteger(s)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var l = e[o], h = o + 1; h < s; h++) e[h] > l && (l = e[h]);
    return l;
  }
  function TI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!wr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var i = t.fromIndex, o = i === void 0 ? 0 : i, n = t.toIndex, s = n === void 0 ? e.length : n;
    if (o < 0 || o >= e.length || !Number.isInteger(o)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (s <= o || s > e.length || !Number.isInteger(s)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var l = e[o], h = o + 1; h < s; h++) e[h] < l && (l = e[h]);
    return l;
  }
  function EI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (wr(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var i;
    if (t.output !== void 0) {
      if (!wr(t.output)) throw new TypeError("output option must be an array if specified");
      i = t.output;
    } else i = new Array(e.length);
    var o = TI(e), n = gI(e);
    if (o === n) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var s = t.min, l = s === void 0 ? t.autoMinMax ? o : 0 : s, h = t.max, d = h === void 0 ? t.autoMinMax ? n : 1 : h;
    if (l >= d) throw new RangeError("min option must be smaller than max option");
    for (var m = (d - l) / (n - o), p = 0; p < e.length; p++) i[p] = (e[p] - o) * m + l;
    return i;
  }
  const II = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: EI
  }, Symbol.toStringTag, {
    value: "Module"
  })), OI = df(II);
  var pu;
  function RI() {
    var _ce_instances, e_fn, _e;
    if (pu) return He;
    pu = 1, Object.defineProperty(He, "__esModule", {
      value: true
    });
    var e = mI, t = OI;
    const i = " ".repeat(2), o = " ".repeat(4);
    function n() {
      return s(this);
    }
    function s(g, a = {}) {
      const { maxRows: c = 15, maxColumns: r = 10, maxNumSize: u = 8, padMinus: f = "auto" } = a;
      return `${g.constructor.name} {
${i}[
${o}${l(g, c, r, u, f)}
${i}]
${i}rows: ${g.rows}
${i}columns: ${g.columns}
}`;
    }
    function l(g, a, c, r, u) {
      const { rows: f, columns: T } = g, E = Math.min(f, a), O = Math.min(T, c), R = [];
      if (u === "auto") {
        u = false;
        e: for (let L = 0; L < E; L++) for (let w = 0; w < O; w++) if (g.get(L, w) < 0) {
          u = true;
          break e;
        }
      }
      for (let L = 0; L < E; L++) {
        let w = [];
        for (let P = 0; P < O; P++) w.push(h(g.get(L, P), r, u));
        R.push(`${w.join(" ")}`);
      }
      return O !== T && (R[R.length - 1] += ` ... ${T - c} more columns`), E !== f && R.push(`... ${f - a} more rows`), R.join(`
${o}`);
    }
    function h(g, a, c) {
      return (g >= 0 && c ? ` ${d(g, a - 1)}` : d(g, a)).padEnd(a);
    }
    function d(g, a) {
      let c = g.toString();
      if (c.length <= a) return c;
      let r = g.toFixed(a);
      if (r.length > a && (r = g.toFixed(Math.max(0, a - (r.length - a)))), r.length <= a && !r.startsWith("0.000") && !r.startsWith("-0.000")) return r;
      let u = g.toExponential(a);
      return u.length > a && (u = g.toExponential(Math.max(0, a - (u.length - a)))), u.slice(0);
    }
    function m(g, a) {
      g.prototype.add = function(r) {
        return typeof r == "number" ? this.addS(r) : this.addM(r);
      }, g.prototype.addS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) + r);
        return this;
      }, g.prototype.addM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) + r.get(u, f));
        return this;
      }, g.add = function(r, u) {
        return new a(r).add(u);
      }, g.prototype.sub = function(r) {
        return typeof r == "number" ? this.subS(r) : this.subM(r);
      }, g.prototype.subS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) - r);
        return this;
      }, g.prototype.subM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) - r.get(u, f));
        return this;
      }, g.sub = function(r, u) {
        return new a(r).sub(u);
      }, g.prototype.subtract = g.prototype.sub, g.prototype.subtractS = g.prototype.subS, g.prototype.subtractM = g.prototype.subM, g.subtract = g.sub, g.prototype.mul = function(r) {
        return typeof r == "number" ? this.mulS(r) : this.mulM(r);
      }, g.prototype.mulS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) * r);
        return this;
      }, g.prototype.mulM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) * r.get(u, f));
        return this;
      }, g.mul = function(r, u) {
        return new a(r).mul(u);
      }, g.prototype.multiply = g.prototype.mul, g.prototype.multiplyS = g.prototype.mulS, g.prototype.multiplyM = g.prototype.mulM, g.multiply = g.mul, g.prototype.div = function(r) {
        return typeof r == "number" ? this.divS(r) : this.divM(r);
      }, g.prototype.divS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) / r);
        return this;
      }, g.prototype.divM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) / r.get(u, f));
        return this;
      }, g.div = function(r, u) {
        return new a(r).div(u);
      }, g.prototype.divide = g.prototype.div, g.prototype.divideS = g.prototype.divS, g.prototype.divideM = g.prototype.divM, g.divide = g.div, g.prototype.mod = function(r) {
        return typeof r == "number" ? this.modS(r) : this.modM(r);
      }, g.prototype.modS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) % r);
        return this;
      }, g.prototype.modM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) % r.get(u, f));
        return this;
      }, g.mod = function(r, u) {
        return new a(r).mod(u);
      }, g.prototype.modulus = g.prototype.mod, g.prototype.modulusS = g.prototype.modS, g.prototype.modulusM = g.prototype.modM, g.modulus = g.mod, g.prototype.and = function(r) {
        return typeof r == "number" ? this.andS(r) : this.andM(r);
      }, g.prototype.andS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) & r);
        return this;
      }, g.prototype.andM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) & r.get(u, f));
        return this;
      }, g.and = function(r, u) {
        return new a(r).and(u);
      }, g.prototype.or = function(r) {
        return typeof r == "number" ? this.orS(r) : this.orM(r);
      }, g.prototype.orS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) | r);
        return this;
      }, g.prototype.orM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) | r.get(u, f));
        return this;
      }, g.or = function(r, u) {
        return new a(r).or(u);
      }, g.prototype.xor = function(r) {
        return typeof r == "number" ? this.xorS(r) : this.xorM(r);
      }, g.prototype.xorS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) ^ r);
        return this;
      }, g.prototype.xorM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) ^ r.get(u, f));
        return this;
      }, g.xor = function(r, u) {
        return new a(r).xor(u);
      }, g.prototype.leftShift = function(r) {
        return typeof r == "number" ? this.leftShiftS(r) : this.leftShiftM(r);
      }, g.prototype.leftShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) << r);
        return this;
      }, g.prototype.leftShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) << r.get(u, f));
        return this;
      }, g.leftShift = function(r, u) {
        return new a(r).leftShift(u);
      }, g.prototype.signPropagatingRightShift = function(r) {
        return typeof r == "number" ? this.signPropagatingRightShiftS(r) : this.signPropagatingRightShiftM(r);
      }, g.prototype.signPropagatingRightShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) >> r);
        return this;
      }, g.prototype.signPropagatingRightShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) >> r.get(u, f));
        return this;
      }, g.signPropagatingRightShift = function(r, u) {
        return new a(r).signPropagatingRightShift(u);
      }, g.prototype.rightShift = function(r) {
        return typeof r == "number" ? this.rightShiftS(r) : this.rightShiftM(r);
      }, g.prototype.rightShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) >>> r);
        return this;
      }, g.prototype.rightShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) >>> r.get(u, f));
        return this;
      }, g.rightShift = function(r, u) {
        return new a(r).rightShift(u);
      }, g.prototype.zeroFillRightShift = g.prototype.rightShift, g.prototype.zeroFillRightShiftS = g.prototype.rightShiftS, g.prototype.zeroFillRightShiftM = g.prototype.rightShiftM, g.zeroFillRightShift = g.rightShift, g.prototype.not = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, ~this.get(r, u));
        return this;
      }, g.not = function(r) {
        return new a(r).not();
      }, g.prototype.abs = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.abs(this.get(r, u)));
        return this;
      }, g.abs = function(r) {
        return new a(r).abs();
      }, g.prototype.acos = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.acos(this.get(r, u)));
        return this;
      }, g.acos = function(r) {
        return new a(r).acos();
      }, g.prototype.acosh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.acosh(this.get(r, u)));
        return this;
      }, g.acosh = function(r) {
        return new a(r).acosh();
      }, g.prototype.asin = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.asin(this.get(r, u)));
        return this;
      }, g.asin = function(r) {
        return new a(r).asin();
      }, g.prototype.asinh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.asinh(this.get(r, u)));
        return this;
      }, g.asinh = function(r) {
        return new a(r).asinh();
      }, g.prototype.atan = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.atan(this.get(r, u)));
        return this;
      }, g.atan = function(r) {
        return new a(r).atan();
      }, g.prototype.atanh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.atanh(this.get(r, u)));
        return this;
      }, g.atanh = function(r) {
        return new a(r).atanh();
      }, g.prototype.cbrt = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cbrt(this.get(r, u)));
        return this;
      }, g.cbrt = function(r) {
        return new a(r).cbrt();
      }, g.prototype.ceil = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.ceil(this.get(r, u)));
        return this;
      }, g.ceil = function(r) {
        return new a(r).ceil();
      }, g.prototype.clz32 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.clz32(this.get(r, u)));
        return this;
      }, g.clz32 = function(r) {
        return new a(r).clz32();
      }, g.prototype.cos = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cos(this.get(r, u)));
        return this;
      }, g.cos = function(r) {
        return new a(r).cos();
      }, g.prototype.cosh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cosh(this.get(r, u)));
        return this;
      }, g.cosh = function(r) {
        return new a(r).cosh();
      }, g.prototype.exp = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.exp(this.get(r, u)));
        return this;
      }, g.exp = function(r) {
        return new a(r).exp();
      }, g.prototype.expm1 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.expm1(this.get(r, u)));
        return this;
      }, g.expm1 = function(r) {
        return new a(r).expm1();
      }, g.prototype.floor = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.floor(this.get(r, u)));
        return this;
      }, g.floor = function(r) {
        return new a(r).floor();
      }, g.prototype.fround = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.fround(this.get(r, u)));
        return this;
      }, g.fround = function(r) {
        return new a(r).fround();
      }, g.prototype.log = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log(this.get(r, u)));
        return this;
      }, g.log = function(r) {
        return new a(r).log();
      }, g.prototype.log1p = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log1p(this.get(r, u)));
        return this;
      }, g.log1p = function(r) {
        return new a(r).log1p();
      }, g.prototype.log10 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log10(this.get(r, u)));
        return this;
      }, g.log10 = function(r) {
        return new a(r).log10();
      }, g.prototype.log2 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log2(this.get(r, u)));
        return this;
      }, g.log2 = function(r) {
        return new a(r).log2();
      }, g.prototype.round = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.round(this.get(r, u)));
        return this;
      }, g.round = function(r) {
        return new a(r).round();
      }, g.prototype.sign = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sign(this.get(r, u)));
        return this;
      }, g.sign = function(r) {
        return new a(r).sign();
      }, g.prototype.sin = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sin(this.get(r, u)));
        return this;
      }, g.sin = function(r) {
        return new a(r).sin();
      }, g.prototype.sinh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sinh(this.get(r, u)));
        return this;
      }, g.sinh = function(r) {
        return new a(r).sinh();
      }, g.prototype.sqrt = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sqrt(this.get(r, u)));
        return this;
      }, g.sqrt = function(r) {
        return new a(r).sqrt();
      }, g.prototype.tan = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.tan(this.get(r, u)));
        return this;
      }, g.tan = function(r) {
        return new a(r).tan();
      }, g.prototype.tanh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.tanh(this.get(r, u)));
        return this;
      }, g.tanh = function(r) {
        return new a(r).tanh();
      }, g.prototype.trunc = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.trunc(this.get(r, u)));
        return this;
      }, g.trunc = function(r) {
        return new a(r).trunc();
      }, g.pow = function(r, u) {
        return new a(r).pow(u);
      }, g.prototype.pow = function(r) {
        return typeof r == "number" ? this.powS(r) : this.powM(r);
      }, g.prototype.powS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) ** r);
        return this;
      }, g.prototype.powM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) ** r.get(u, f));
        return this;
      };
    }
    function p(g, a, c) {
      let r = c ? g.rows : g.rows - 1;
      if (a < 0 || a > r) throw new RangeError("Row index out of range");
    }
    function I(g, a, c) {
      let r = c ? g.columns : g.columns - 1;
      if (a < 0 || a > r) throw new RangeError("Column index out of range");
    }
    function N(g, a) {
      if (a.to1DArray && (a = a.to1DArray()), a.length !== g.columns) throw new RangeError("vector size must be the same as the number of columns");
      return a;
    }
    function S(g, a) {
      if (a.to1DArray && (a = a.to1DArray()), a.length !== g.rows) throw new RangeError("vector size must be the same as the number of rows");
      return a;
    }
    function M(g, a) {
      if (!e.isAnyArray(a)) throw new TypeError("row indices must be an array");
      for (let c = 0; c < a.length; c++) if (a[c] < 0 || a[c] >= g.rows) throw new RangeError("row indices are out of range");
    }
    function D(g, a) {
      if (!e.isAnyArray(a)) throw new TypeError("column indices must be an array");
      for (let c = 0; c < a.length; c++) if (a[c] < 0 || a[c] >= g.columns) throw new RangeError("column indices are out of range");
    }
    function ie(g, a, c, r, u) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (Y("startRow", a), Y("endRow", c), Y("startColumn", r), Y("endColumn", u), a > c || r > u || a < 0 || a >= g.rows || c < 0 || c >= g.rows || r < 0 || r >= g.columns || u < 0 || u >= g.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function Q(g, a = 0) {
      let c = [];
      for (let r = 0; r < g; r++) c.push(a);
      return c;
    }
    function Y(g, a) {
      if (typeof a != "number") throw new TypeError(`${g} must be a number`);
    }
    function G(g) {
      if (g.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function _(g) {
      let a = Q(g.rows);
      for (let c = 0; c < g.rows; ++c) for (let r = 0; r < g.columns; ++r) a[c] += g.get(c, r);
      return a;
    }
    function re(g) {
      let a = Q(g.columns);
      for (let c = 0; c < g.rows; ++c) for (let r = 0; r < g.columns; ++r) a[r] += g.get(c, r);
      return a;
    }
    function ge(g) {
      let a = 0;
      for (let c = 0; c < g.rows; c++) for (let r = 0; r < g.columns; r++) a += g.get(c, r);
      return a;
    }
    function se(g) {
      let a = Q(g.rows, 1);
      for (let c = 0; c < g.rows; ++c) for (let r = 0; r < g.columns; ++r) a[c] *= g.get(c, r);
      return a;
    }
    function de(g) {
      let a = Q(g.columns, 1);
      for (let c = 0; c < g.rows; ++c) for (let r = 0; r < g.columns; ++r) a[r] *= g.get(c, r);
      return a;
    }
    function ne(g) {
      let a = 1;
      for (let c = 0; c < g.rows; c++) for (let r = 0; r < g.columns; r++) a *= g.get(c, r);
      return a;
    }
    function Te(g, a, c) {
      const r = g.rows, u = g.columns, f = [];
      for (let T = 0; T < r; T++) {
        let E = 0, O = 0, R = 0;
        for (let L = 0; L < u; L++) R = g.get(T, L) - c[T], E += R, O += R * R;
        a ? f.push((O - E * E / u) / (u - 1)) : f.push((O - E * E / u) / u);
      }
      return f;
    }
    function Ce(g, a, c) {
      const r = g.rows, u = g.columns, f = [];
      for (let T = 0; T < u; T++) {
        let E = 0, O = 0, R = 0;
        for (let L = 0; L < r; L++) R = g.get(L, T) - c[T], E += R, O += R * R;
        a ? f.push((O - E * E / r) / (r - 1)) : f.push((O - E * E / r) / r);
      }
      return f;
    }
    function pe(g, a, c) {
      const r = g.rows, u = g.columns, f = r * u;
      let T = 0, E = 0, O = 0;
      for (let R = 0; R < r; R++) for (let L = 0; L < u; L++) O = g.get(R, L) - c, T += O, E += O * O;
      return a ? (E - T * T / f) / (f - 1) : (E - T * T / f) / f;
    }
    function xe(g, a) {
      for (let c = 0; c < g.rows; c++) for (let r = 0; r < g.columns; r++) g.set(c, r, g.get(c, r) - a[c]);
    }
    function Ot(g, a) {
      for (let c = 0; c < g.rows; c++) for (let r = 0; r < g.columns; r++) g.set(c, r, g.get(c, r) - a[r]);
    }
    function oi(g, a) {
      for (let c = 0; c < g.rows; c++) for (let r = 0; r < g.columns; r++) g.set(c, r, g.get(c, r) - a);
    }
    function Xe(g) {
      const a = [];
      for (let c = 0; c < g.rows; c++) {
        let r = 0;
        for (let u = 0; u < g.columns; u++) r += g.get(c, u) ** 2 / (g.columns - 1);
        a.push(Math.sqrt(r));
      }
      return a;
    }
    function Me(g, a) {
      for (let c = 0; c < g.rows; c++) for (let r = 0; r < g.columns; r++) g.set(c, r, g.get(c, r) / a[c]);
    }
    function Ze(g) {
      const a = [];
      for (let c = 0; c < g.columns; c++) {
        let r = 0;
        for (let u = 0; u < g.rows; u++) r += g.get(u, c) ** 2 / (g.rows - 1);
        a.push(Math.sqrt(r));
      }
      return a;
    }
    function Gi(g, a) {
      for (let c = 0; c < g.rows; c++) for (let r = 0; r < g.columns; r++) g.set(c, r, g.get(c, r) / a[r]);
    }
    function cn(g) {
      const a = g.size - 1;
      let c = 0;
      for (let r = 0; r < g.columns; r++) for (let u = 0; u < g.rows; u++) c += g.get(u, r) ** 2 / a;
      return Math.sqrt(c);
    }
    function Bi(g, a) {
      for (let c = 0; c < g.rows; c++) for (let r = 0; r < g.columns; r++) g.set(c, r, g.get(c, r) / a);
    }
    class we {
      static from1DArray(a, c, r) {
        if (a * c !== r.length) throw new RangeError("data length does not match given dimensions");
        let f = new ce(a, c);
        for (let T = 0; T < a; T++) for (let E = 0; E < c; E++) f.set(T, E, r[T * c + E]);
        return f;
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
        let f = new ce(a, c);
        for (let T = 0; T < a; T++) for (let E = 0; E < c; E++) f.set(T, E, u());
        return f;
      }
      static randInt(a, c, r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { min: u = 0, max: f = 1e3, random: T = Math.random } = r;
        if (!Number.isInteger(u)) throw new TypeError("min must be an integer");
        if (!Number.isInteger(f)) throw new TypeError("max must be an integer");
        if (u >= f) throw new RangeError("min must be smaller than max");
        let E = f - u, O = new ce(a, c);
        for (let R = 0; R < a; R++) for (let L = 0; L < c; L++) {
          let w = u + Math.round(T() * E);
          O.set(R, L, w);
        }
        return O;
      }
      static eye(a, c, r) {
        c === void 0 && (c = a), r === void 0 && (r = 1);
        let u = Math.min(a, c), f = this.zeros(a, c);
        for (let T = 0; T < u; T++) f.set(T, T, r);
        return f;
      }
      static diag(a, c, r) {
        let u = a.length;
        c === void 0 && (c = u), r === void 0 && (r = c);
        let f = Math.min(u, c, r), T = this.zeros(c, r);
        for (let E = 0; E < f; E++) T.set(E, E, a[E]);
        return T;
      }
      static min(a, c) {
        a = this.checkMatrix(a), c = this.checkMatrix(c);
        let r = a.rows, u = a.columns, f = new ce(r, u);
        for (let T = 0; T < r; T++) for (let E = 0; E < u; E++) f.set(T, E, Math.min(a.get(T, E), c.get(T, E)));
        return f;
      }
      static max(a, c) {
        a = this.checkMatrix(a), c = this.checkMatrix(c);
        let r = a.rows, u = a.columns, f = new this(r, u);
        for (let T = 0; T < r; T++) for (let E = 0; E < u; E++) f.set(T, E, Math.max(a.get(T, E), c.get(T, E)));
        return f;
      }
      static checkMatrix(a) {
        return we.isMatrix(a) ? a : new ce(a);
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
        let a = 0, c = 0, r = -1, u = true, f = false;
        for (; a < this.rows && u; ) {
          for (c = 0, f = false; c < this.columns && f === false; ) this.get(a, c) === 0 ? c++ : this.get(a, c) === 1 && c > r ? (f = true, r = c) : (u = false, f = true);
          a++;
        }
        return u;
      }
      isReducedEchelonForm() {
        let a = 0, c = 0, r = -1, u = true, f = false;
        for (; a < this.rows && u; ) {
          for (c = 0, f = false; c < this.columns && f === false; ) this.get(a, c) === 0 ? c++ : this.get(a, c) === 1 && c > r ? (f = true, r = c) : (u = false, f = true);
          for (let T = c + 1; T < this.rows; T++) this.get(a, T) !== 0 && (u = false);
          a++;
        }
        return u;
      }
      echelonForm() {
        let a = this.clone(), c = 0, r = 0;
        for (; c < a.rows && r < a.columns; ) {
          let u = c;
          for (let f = c; f < a.rows; f++) a.get(f, r) > a.get(u, r) && (u = f);
          if (a.get(u, r) === 0) r++;
          else {
            a.swapRows(c, u);
            let f = a.get(c, r);
            for (let T = r; T < a.columns; T++) a.set(c, T, a.get(c, T) / f);
            for (let T = c + 1; T < a.rows; T++) {
              let E = a.get(T, r) / a.get(c, r);
              a.set(T, r, 0);
              for (let O = r + 1; O < a.columns; O++) a.set(T, O, a.get(T, O) - a.get(c, O) * E);
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
          let f = 0, T = false;
          for (; f < r && T === false; ) a.get(u, f) === 1 ? T = true : f++;
          for (let E = 0; E < u; E++) {
            let O = a.get(E, f);
            for (let R = f; R < c; R++) {
              let L = a.get(E, R) - O * a.get(u, R);
              a.set(E, R, L);
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
        for (let f = 0; f < c; f++) for (let T = 0; T < r; T++) u.setSubMatrix(this, this.rows * f, this.columns * T);
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
        p(this, a), c = N(this, c);
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
        I(this, a);
        let c = [];
        for (let r = 0; r < this.rows; r++) c.push(this.get(r, a));
        return c;
      }
      getColumnVector(a) {
        return ce.columnVector(this.getColumn(a));
      }
      setColumn(a, c) {
        I(this, a), c = S(this, c);
        for (let r = 0; r < this.rows; r++) this.set(r, a, c[r]);
        return this;
      }
      swapColumns(a, c) {
        I(this, a), I(this, c);
        for (let r = 0; r < this.rows; r++) {
          let u = this.get(r, a);
          this.set(r, a, this.get(r, c)), this.set(r, c, u);
        }
        return this;
      }
      addRowVector(a) {
        a = N(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) + a[r]);
        return this;
      }
      subRowVector(a) {
        a = N(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) - a[r]);
        return this;
      }
      mulRowVector(a) {
        a = N(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) * a[r]);
        return this;
      }
      divRowVector(a) {
        a = N(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) / a[r]);
        return this;
      }
      addColumnVector(a) {
        a = S(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) + a[c]);
        return this;
      }
      subColumnVector(a) {
        a = S(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) - a[c]);
        return this;
      }
      mulColumnVector(a) {
        a = S(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) * a[c]);
        return this;
      }
      divColumnVector(a) {
        a = S(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) / a[c]);
        return this;
      }
      mulRow(a, c) {
        p(this, a);
        for (let r = 0; r < this.columns; r++) this.set(a, r, this.get(a, r) * c);
        return this;
      }
      mulColumn(a, c) {
        I(this, a);
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
        G(this);
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
        G(this);
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
        p(this, a), G(this);
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
        p(this, a), G(this);
        let c = this.get(a, 0), r = [
          a,
          0
        ];
        for (let u = 1; u < this.columns; u++) this.get(a, u) < c && (c = this.get(a, u), r[1] = u);
        return r;
      }
      maxColumn(a) {
        if (I(this, a), this.isEmpty()) return NaN;
        let c = this.get(0, a);
        for (let r = 1; r < this.rows; r++) this.get(r, a) > c && (c = this.get(r, a));
        return c;
      }
      maxColumnIndex(a) {
        I(this, a), G(this);
        let c = this.get(0, a), r = [
          0,
          a
        ];
        for (let u = 1; u < this.rows; u++) this.get(u, a) > c && (c = this.get(u, a), r[0] = u);
        return r;
      }
      minColumn(a) {
        if (I(this, a), this.isEmpty()) return NaN;
        let c = this.get(0, a);
        for (let r = 1; r < this.rows; r++) this.get(r, a) < c && (c = this.get(r, a));
        return c;
      }
      minColumnIndex(a) {
        I(this, a), G(this);
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
        we.isMatrix(a) && (a = a.to1DArray());
        let c = this.to1DArray();
        if (c.length !== a.length) throw new RangeError("vectors do not have the same size");
        let r = 0;
        for (let u = 0; u < c.length; u++) r += c[u] * a[u];
        return r;
      }
      mmul(a) {
        a = ce.checkMatrix(a);
        let c = this.rows, r = this.columns, u = a.columns, f = new ce(c, u), T = new Float64Array(r);
        for (let E = 0; E < u; E++) {
          for (let O = 0; O < r; O++) T[O] = a.get(O, E);
          for (let O = 0; O < c; O++) {
            let R = 0;
            for (let L = 0; L < r; L++) R += this.get(O, L) * T[L];
            f.set(O, E, R);
          }
        }
        return f;
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
        const r = this.get(0, 0), u = a.get(0, 0), f = this.get(0, 1), T = a.get(0, 1), E = this.get(1, 0), O = a.get(1, 0), R = this.get(1, 1), L = a.get(1, 1), w = (r + R) * (u + L), P = (E + R) * u, oe = r * (T - L), H = R * (O - u), k = (r + f) * L, he = (E - r) * (u + T), A = (f - R) * (O + L), te = w + H - k + A, me = oe + k, Ne = P + H, ve = w - P + oe + he;
        return c.set(0, 0, te), c.set(0, 1, me), c.set(1, 0, Ne), c.set(1, 1, ve), c;
      }
      strassen3x3(a) {
        a = ce.checkMatrix(a);
        let c = new ce(3, 3);
        const r = this.get(0, 0), u = this.get(0, 1), f = this.get(0, 2), T = this.get(1, 0), E = this.get(1, 1), O = this.get(1, 2), R = this.get(2, 0), L = this.get(2, 1), w = this.get(2, 2), P = a.get(0, 0), oe = a.get(0, 1), H = a.get(0, 2), k = a.get(1, 0), he = a.get(1, 1), A = a.get(1, 2), te = a.get(2, 0), me = a.get(2, 1), Ne = a.get(2, 2), ve = (r + u + f - T - E - L - w) * he, rt = (r - T) * (-oe + he), Oe = E * (-P + oe + k - he - A - te + Ne), ye = (-r + T + E) * (P - oe + he), Ke = (T + E) * (-P + oe), b = r * P, z = (-r + R + L) * (P - H + A), fe = (-r + R) * (H - A), X = (R + L) * (-P + H), st = (r + u + f - E - O - R - L) * A, $e = L * (-P + H + k - he - A - te + me), it = (-f + L + w) * (he + te - me), at = (f - w) * (he - me), vt = f * te, Ri = (L + w) * (-te + me), St = (-f + E + O) * (A + te - Ne), Ci = (f - O) * (A - Ne), xi = (E + O) * (-te + Ne), _e2 = u * k, Lt = O * me, ri = T * H, si = R * oe, At = w * Ne, Bp = b + vt + _e2, jp = ve + ye + Ke + b + it + vt + Ri, xp = b + z + X + st + vt + St + xi, Yp = rt + Oe + ye + b + vt + St + Ci, zp = rt + ye + Ke + b + Lt, $p = vt + St + Ci + xi + ri, Vp = b + z + fe + $e + it + at + vt, Zp = it + at + vt + Ri + si, qp = b + z + fe + X + At;
        return c.set(0, 0, Bp), c.set(0, 1, jp), c.set(0, 2, xp), c.set(1, 0, Yp), c.set(1, 1, zp), c.set(1, 2, $p), c.set(2, 0, Vp), c.set(2, 1, Zp), c.set(2, 2, qp), c;
      }
      mmulStrassen(a) {
        a = ce.checkMatrix(a);
        let c = this.clone(), r = c.rows, u = c.columns, f = a.rows, T = a.columns;
        u !== f && console.warn(`Multiplying ${r} x ${u} and ${f} x ${T} matrix: dimensions do not match.`);
        function E(w, P, oe) {
          let H = w.rows, k = w.columns;
          if (H === P && k === oe) return w;
          {
            let he = we.zeros(P, oe);
            return he = he.setSubMatrix(w, 0, 0), he;
          }
        }
        let O = Math.max(r, f), R = Math.max(u, T);
        c = E(c, O, R), a = E(a, O, R);
        function L(w, P, oe, H) {
          if (oe <= 512 || H <= 512) return w.mmul(P);
          oe % 2 === 1 && H % 2 === 1 ? (w = E(w, oe + 1, H + 1), P = E(P, oe + 1, H + 1)) : oe % 2 === 1 ? (w = E(w, oe + 1, H), P = E(P, oe + 1, H)) : H % 2 === 1 && (w = E(w, oe, H + 1), P = E(P, oe, H + 1));
          let k = parseInt(w.rows / 2, 10), he = parseInt(w.columns / 2, 10), A = w.subMatrix(0, k - 1, 0, he - 1), te = P.subMatrix(0, k - 1, 0, he - 1), me = w.subMatrix(0, k - 1, he, w.columns - 1), Ne = P.subMatrix(0, k - 1, he, P.columns - 1), ve = w.subMatrix(k, w.rows - 1, 0, he - 1), rt = P.subMatrix(k, P.rows - 1, 0, he - 1), Oe = w.subMatrix(k, w.rows - 1, he, w.columns - 1), ye = P.subMatrix(k, P.rows - 1, he, P.columns - 1), Ke = L(we.add(A, Oe), we.add(te, ye), k, he), b = L(we.add(ve, Oe), te, k, he), z = L(A, we.sub(Ne, ye), k, he), fe = L(Oe, we.sub(rt, te), k, he), X = L(we.add(A, me), ye, k, he), st = L(we.sub(ve, A), we.add(te, Ne), k, he), $e = L(we.sub(me, Oe), we.add(rt, ye), k, he), it = we.add(Ke, fe);
          it.sub(X), it.add($e);
          let at = we.add(z, X), vt = we.add(b, fe), Ri = we.sub(Ke, b);
          Ri.add(z), Ri.add(st);
          let St = we.zeros(2 * it.rows, 2 * it.columns);
          return St = St.setSubMatrix(it, 0, 0), St = St.setSubMatrix(at, it.rows, 0), St = St.setSubMatrix(vt, 0, it.columns), St = St.setSubMatrix(Ri, it.rows, it.columns), St.subMatrix(0, oe - 1, 0, H - 1);
        }
        return L(c, a, O, R);
      }
      scaleRows(a = {}) {
        if (typeof a != "object") throw new TypeError("options must be an object");
        const { min: c = 0, max: r = 1 } = a;
        if (!Number.isFinite(c)) throw new TypeError("min must be a number");
        if (!Number.isFinite(r)) throw new TypeError("max must be a number");
        if (c >= r) throw new RangeError("min must be smaller than max");
        let u = new ce(this.rows, this.columns);
        for (let f = 0; f < this.rows; f++) {
          const T = this.getRow(f);
          T.length > 0 && t(T, {
            min: c,
            max: r,
            output: T
          }), u.setRow(f, T);
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
        for (let f = 0; f < this.columns; f++) {
          const T = this.getColumn(f);
          T.length && t(T, {
            min: c,
            max: r,
            output: T
          }), u.setColumn(f, T);
        }
        return u;
      }
      flipRows() {
        const a = Math.ceil(this.columns / 2);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < a; r++) {
          let u = this.get(c, r), f = this.get(c, this.columns - 1 - r);
          this.set(c, r, f), this.set(c, this.columns - 1 - r, u);
        }
        return this;
      }
      flipColumns() {
        const a = Math.ceil(this.rows / 2);
        for (let c = 0; c < this.columns; c++) for (let r = 0; r < a; r++) {
          let u = this.get(r, c), f = this.get(this.rows - 1 - r, c);
          this.set(r, c, f), this.set(this.rows - 1 - r, c, u);
        }
        return this;
      }
      kroneckerProduct(a) {
        a = ce.checkMatrix(a);
        let c = this.rows, r = this.columns, u = a.rows, f = a.columns, T = new ce(c * u, r * f);
        for (let E = 0; E < c; E++) for (let O = 0; O < r; O++) for (let R = 0; R < u; R++) for (let L = 0; L < f; L++) T.set(u * E + R, f * O + L, this.get(E, O) * a.get(R, L));
        return T;
      }
      kroneckerSum(a) {
        if (a = ce.checkMatrix(a), !this.isSquare() || !a.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
        let c = this.rows, r = a.rows, u = this.kroneckerProduct(ce.eye(r, r)), f = ce.eye(c, c).kroneckerProduct(a);
        return u.add(f);
      }
      transpose() {
        let a = new ce(this.columns, this.rows);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) a.set(r, c, this.get(c, r));
        return a;
      }
      sortRows(a = Yn) {
        for (let c = 0; c < this.rows; c++) this.setRow(c, this.getRow(c).sort(a));
        return this;
      }
      sortColumns(a = Yn) {
        for (let c = 0; c < this.columns; c++) this.setColumn(c, this.getColumn(c).sort(a));
        return this;
      }
      subMatrix(a, c, r, u) {
        ie(this, a, c, r, u);
        let f = new ce(c - a + 1, u - r + 1);
        for (let T = a; T <= c; T++) for (let E = r; E <= u; E++) f.set(T - a, E - r, this.get(T, E));
        return f;
      }
      subMatrixRow(a, c, r) {
        if (c === void 0 && (c = 0), r === void 0 && (r = this.columns - 1), c > r || c < 0 || c >= this.columns || r < 0 || r >= this.columns) throw new RangeError("Argument out of range");
        let u = new ce(a.length, r - c + 1);
        for (let f = 0; f < a.length; f++) for (let T = c; T <= r; T++) {
          if (a[f] < 0 || a[f] >= this.rows) throw new RangeError(`Row index out of range: ${a[f]}`);
          u.set(f, T - c, this.get(a[f], T));
        }
        return u;
      }
      subMatrixColumn(a, c, r) {
        if (c === void 0 && (c = 0), r === void 0 && (r = this.rows - 1), c > r || c < 0 || c >= this.rows || r < 0 || r >= this.rows) throw new RangeError("Argument out of range");
        let u = new ce(r - c + 1, a.length);
        for (let f = 0; f < a.length; f++) for (let T = c; T <= r; T++) {
          if (a[f] < 0 || a[f] >= this.columns) throw new RangeError(`Column index out of range: ${a[f]}`);
          u.set(T - c, f, this.get(T, a[f]));
        }
        return u;
      }
      setSubMatrix(a, c, r) {
        if (a = ce.checkMatrix(a), a.isEmpty()) return this;
        let u = c + a.rows - 1, f = r + a.columns - 1;
        ie(this, c, u, r, f);
        for (let T = 0; T < a.rows; T++) for (let E = 0; E < a.columns; E++) this.set(c + T, r + E, a.get(T, E));
        return this;
      }
      selection(a, c) {
        M(this, a), D(this, c);
        let r = new ce(a.length, c.length);
        for (let u = 0; u < a.length; u++) {
          let f = a[u];
          for (let T = 0; T < c.length; T++) {
            let E = c[T];
            r.set(u, T, this.get(f, E));
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
        for (const [r, u, f] of a.entries()) c.set(r, u, f);
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
            return de(this);
          case void 0:
            return ne(this);
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
            return Te(this, r, u);
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
            return xe(this, r), this;
          }
          case "column": {
            if (!e.isAnyArray(r)) throw new TypeError("center must be an array");
            return Ot(this, r), this;
          }
          case void 0: {
            if (typeof r != "number") throw new TypeError("center must be a number");
            return oi(this, r), this;
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
            if (r === void 0) r = Xe(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Me(this, r), this;
          }
          case "column": {
            if (r === void 0) r = Ze(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Gi(this, r), this;
          }
          case void 0: {
            if (r === void 0) r = cn(this);
            else if (typeof r != "number") throw new TypeError("scale must be a number");
            return Bi(this, r), this;
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
    we.prototype.klass = "Matrix", typeof Symbol < "u" && (we.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = n);
    function Yn(g, a) {
      return g - a;
    }
    function Sa(g) {
      return g.every((a) => typeof a == "number");
    }
    we.random = we.rand, we.randomInt = we.randInt, we.diagonal = we.diag, we.prototype.diagonal = we.prototype.diag, we.identity = we.eye, we.prototype.negate = we.prototype.neg, we.prototype.tensorProduct = we.prototype.kroneckerProduct;
    const _ce = class _ce extends we {
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
            if (!Sa(r[u])) throw new TypeError("Input data contains non-numeric values");
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
        return c === void 0 && (c = a, a = this.rows), p(this, a, true), c = Float64Array.from(N(this, c)), this.data.splice(a, 0, c), this.rows += 1, this;
      }
      removeColumn(a) {
        I(this, a);
        for (let c = 0; c < this.rows; c++) {
          const r = new Float64Array(this.columns - 1);
          for (let u = 0; u < a; u++) r[u] = this.data[c][u];
          for (let u = a + 1; u < this.columns; u++) r[u - 1] = this.data[c][u];
          this.data[c] = r;
        }
        return this.columns -= 1, this;
      }
      addColumn(a, c) {
        typeof c > "u" && (c = a, a = this.columns), I(this, a, true), c = S(this, c);
        for (let r = 0; r < this.rows; r++) {
          const u = new Float64Array(this.columns + 1);
          let f = 0;
          for (; f < a; f++) u[f] = this.data[r][f];
          for (u[f++] = c[r]; f < this.columns + 1; f++) u[f] = this.data[r][f - 1];
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
    m(we, ce);
    const _Kt = class _Kt extends we {
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
        const a = new _Kt(this.diagonalSize);
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
        for (let r = 0, u = 0, f = 0; f < c.length; f++) c[f] = this.get(u, r), ++r >= a && (r = ++u);
        return c;
      }
      static fromCompact(a) {
        const c = a.length, r = (Math.sqrt(8 * c + 1) - 1) / 2;
        if (!Number.isInteger(r)) throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(a)}`);
        const u = new _Kt(r);
        for (let f = 0, T = 0, E = 0; E < c; E++) u.set(f, T, a[E]), ++f >= r && (f = ++T);
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
    let Kt = _Kt;
    Kt.prototype.klassType = "SymmetricMatrix";
    class ji extends Kt {
      static isDistanceMatrix(a) {
        return Kt.isSymmetricMatrix(a) && a.klassSubType === "DistanceMatrix";
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
        return new Kt(this);
      }
      clone() {
        const a = new ji(this.diagonalSize);
        for (const [c, r, u] of this.upperRightEntries()) c !== r && a.set(c, r, u);
        return a;
      }
      toCompact() {
        const { diagonalSize: a } = this, c = (a - 1) * a / 2, r = new Array(c);
        for (let u = 1, f = 0, T = 0; T < r.length; T++) r[T] = this.get(f, u), ++u >= a && (u = ++f + 1);
        return r;
      }
      static fromCompact(a) {
        const c = a.length;
        if (c === 0) return new this(0);
        const r = (Math.sqrt(8 * c + 1) + 1) / 2;
        if (!Number.isInteger(r)) throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(a)}`);
        const u = new this(r);
        for (let f = 1, T = 0, E = 0; E < c; E++) u.set(f, T, a[E]), ++f >= r && (f = ++T + 1);
        return u;
      }
    }
    ji.prototype.klassSubType = "DistanceMatrix";
    class ni extends we {
      constructor(a, c, r) {
        super(), this.matrix = a, this.rows = c, this.columns = r;
      }
    }
    class Ur extends ni {
      constructor(a, c) {
        I(a, c), super(a, a.rows, 1), this.column = c;
      }
      set(a, c, r) {
        return this.matrix.set(a, this.column, r), this;
      }
      get(a) {
        return this.matrix.get(a, this.column);
      }
    }
    class Wo extends ni {
      constructor(a, c) {
        D(a, c), super(a, a.rows, c.length), this.columnIndices = c;
      }
      set(a, c, r) {
        return this.matrix.set(a, this.columnIndices[c], r), this;
      }
      get(a, c) {
        return this.matrix.get(a, this.columnIndices[c]);
      }
    }
    class yl extends ni {
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
    class y extends ni {
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
    class v extends ni {
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
    class F extends ni {
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
    class K extends ni {
      constructor(a, c, r) {
        M(a, c), D(a, r), super(a, c.length, r.length), this.rowIndices = c, this.columnIndices = r;
      }
      set(a, c, r) {
        return this.matrix.set(this.rowIndices[a], this.columnIndices[c], r), this;
      }
      get(a, c) {
        return this.matrix.get(this.rowIndices[a], this.columnIndices[c]);
      }
    }
    class q extends ni {
      constructor(a, c, r, u, f) {
        ie(a, c, r, u, f), super(a, r - c + 1, f - u + 1), this.startRow = c, this.startColumn = u;
      }
      set(a, c, r) {
        return this.matrix.set(this.startRow + a, this.startColumn + c, r), this;
      }
      get(a, c) {
        return this.matrix.get(this.startRow + a, this.startColumn + c);
      }
    }
    class J extends ni {
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
    class le extends we {
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
    class ee extends we {
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
    function ae(g, a) {
      if (e.isAnyArray(g)) return g[0] && e.isAnyArray(g[0]) ? new ee(g) : new le(g, a);
      throw new Error("the argument is not an array");
    }
    class Z {
      constructor(a) {
        a = ee.checkMatrix(a);
        let c = a.clone(), r = c.rows, u = c.columns, f = new Float64Array(r), T = 1, E, O, R, L, w, P, oe, H, k;
        for (E = 0; E < r; E++) f[E] = E;
        for (H = new Float64Array(r), O = 0; O < u; O++) {
          for (E = 0; E < r; E++) H[E] = c.get(E, O);
          for (E = 0; E < r; E++) {
            for (k = Math.min(E, O), w = 0, R = 0; R < k; R++) w += c.get(E, R) * H[R];
            H[E] -= w, c.set(E, O, H[E]);
          }
          for (L = O, E = O + 1; E < r; E++) Math.abs(H[E]) > Math.abs(H[L]) && (L = E);
          if (L !== O) {
            for (R = 0; R < u; R++) P = c.get(L, R), c.set(L, R, c.get(O, R)), c.set(O, R, P);
            oe = f[L], f[L] = f[O], f[O] = oe, T = -T;
          }
          if (O < r && c.get(O, O) !== 0) for (E = O + 1; E < r; E++) c.set(E, O, c.get(E, O) / c.get(O, O));
        }
        this.LU = c, this.pivotVector = f, this.pivotSign = T;
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
        let u = a.columns, f = a.subMatrixRow(this.pivotVector, 0, u - 1), T = c.columns, E, O, R;
        for (R = 0; R < T; R++) for (E = R + 1; E < T; E++) for (O = 0; O < u; O++) f.set(E, O, f.get(E, O) - f.get(R, O) * c.get(E, R));
        for (R = T - 1; R >= 0; R--) {
          for (O = 0; O < u; O++) f.set(R, O, f.get(R, O) / c.get(R, R));
          for (E = 0; E < R; E++) for (O = 0; O < u; O++) f.set(E, O, f.get(E, O) - f.get(R, O) * c.get(E, R));
        }
        return f;
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
        for (let f = 0; f < c; f++) for (let T = 0; T < r; T++) f > T ? u.set(f, T, a.get(f, T)) : f === T ? u.set(f, T, 1) : u.set(f, T, 0);
        return u;
      }
      get upperTriangularMatrix() {
        let a = this.LU, c = a.rows, r = a.columns, u = new ce(c, r);
        for (let f = 0; f < c; f++) for (let T = 0; T < r; T++) f <= T ? u.set(f, T, a.get(f, T)) : u.set(f, T, 0);
        return u;
      }
      get pivotPermutationVector() {
        return Array.from(this.pivotVector);
      }
    }
    function Ee(g, a) {
      let c = 0;
      return Math.abs(g) > Math.abs(a) ? (c = a / g, Math.abs(g) * Math.sqrt(1 + c * c)) : a !== 0 ? (c = g / a, Math.abs(a) * Math.sqrt(1 + c * c)) : 0;
    }
    class ue {
      constructor(a) {
        a = ee.checkMatrix(a);
        let c = a.clone(), r = a.rows, u = a.columns, f = new Float64Array(u), T, E, O, R;
        for (O = 0; O < u; O++) {
          let L = 0;
          for (T = O; T < r; T++) L = Ee(L, c.get(T, O));
          if (L !== 0) {
            for (c.get(O, O) < 0 && (L = -L), T = O; T < r; T++) c.set(T, O, c.get(T, O) / L);
            for (c.set(O, O, c.get(O, O) + 1), E = O + 1; E < u; E++) {
              for (R = 0, T = O; T < r; T++) R += c.get(T, O) * c.get(T, E);
              for (R = -R / c.get(O, O), T = O; T < r; T++) c.set(T, E, c.get(T, E) + R * c.get(T, O));
            }
          }
          f[O] = -L;
        }
        this.QR = c, this.Rdiag = f;
      }
      solve(a) {
        a = ce.checkMatrix(a);
        let c = this.QR, r = c.rows;
        if (a.rows !== r) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let u = a.columns, f = a.clone(), T = c.columns, E, O, R, L;
        for (R = 0; R < T; R++) for (O = 0; O < u; O++) {
          for (L = 0, E = R; E < r; E++) L += c.get(E, R) * f.get(E, O);
          for (L = -L / c.get(R, R), E = R; E < r; E++) f.set(E, O, f.get(E, O) + L * c.get(E, R));
        }
        for (R = T - 1; R >= 0; R--) {
          for (O = 0; O < u; O++) f.set(R, O, f.get(R, O) / this.Rdiag[R]);
          for (E = 0; E < R; E++) for (O = 0; O < u; O++) f.set(E, O, f.get(E, O) - f.get(R, O) * c.get(E, R));
        }
        return f.subMatrix(0, T - 1, 0, u - 1);
      }
      isFullRank() {
        let a = this.QR.columns;
        for (let c = 0; c < a; c++) if (this.Rdiag[c] === 0) return false;
        return true;
      }
      get upperTriangularMatrix() {
        let a = this.QR, c = a.columns, r = new ce(c, c), u, f;
        for (u = 0; u < c; u++) for (f = 0; f < c; f++) u < f ? r.set(u, f, a.get(u, f)) : u === f ? r.set(u, f, this.Rdiag[u]) : r.set(u, f, 0);
        return r;
      }
      get orthogonalMatrix() {
        let a = this.QR, c = a.rows, r = a.columns, u = new ce(c, r), f, T, E, O;
        for (E = r - 1; E >= 0; E--) {
          for (f = 0; f < c; f++) u.set(f, E, 0);
          for (u.set(E, E, 1), T = E; T < r; T++) if (a.get(E, E) !== 0) {
            for (O = 0, f = E; f < c; f++) O += a.get(f, E) * u.get(f, T);
            for (O = -O / a.get(E, E), f = E; f < c; f++) u.set(f, T, u.get(f, T) + O * a.get(f, E));
          }
        }
        return u;
      }
    }
    class Ie {
      constructor(a, c = {}) {
        if (a = ee.checkMatrix(a), a.isEmpty()) throw new Error("Matrix must be non-empty");
        let r = a.rows, u = a.columns;
        const { computeLeftSingularVectors: f = true, computeRightSingularVectors: T = true, autoTranspose: E = false } = c;
        let O = !!f, R = !!T, L = false, w;
        if (r < u) if (!E) w = a.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          w = a.transpose(), r = w.rows, u = w.columns, L = true;
          let b = O;
          O = R, R = b;
        }
        else w = a.clone();
        let P = Math.min(r, u), oe = Math.min(r + 1, u), H = new Float64Array(oe), k = new ce(r, P), he = new ce(u, u), A = new Float64Array(u), te = new Float64Array(r), me = new Float64Array(oe);
        for (let b = 0; b < oe; b++) me[b] = b;
        let Ne = Math.min(r - 1, u), ve = Math.max(0, Math.min(u - 2, r)), rt = Math.max(Ne, ve);
        for (let b = 0; b < rt; b++) {
          if (b < Ne) {
            H[b] = 0;
            for (let z = b; z < r; z++) H[b] = Ee(H[b], w.get(z, b));
            if (H[b] !== 0) {
              w.get(b, b) < 0 && (H[b] = -H[b]);
              for (let z = b; z < r; z++) w.set(z, b, w.get(z, b) / H[b]);
              w.set(b, b, w.get(b, b) + 1);
            }
            H[b] = -H[b];
          }
          for (let z = b + 1; z < u; z++) {
            if (b < Ne && H[b] !== 0) {
              let fe = 0;
              for (let X = b; X < r; X++) fe += w.get(X, b) * w.get(X, z);
              fe = -fe / w.get(b, b);
              for (let X = b; X < r; X++) w.set(X, z, w.get(X, z) + fe * w.get(X, b));
            }
            A[z] = w.get(b, z);
          }
          if (O && b < Ne) for (let z = b; z < r; z++) k.set(z, b, w.get(z, b));
          if (b < ve) {
            A[b] = 0;
            for (let z = b + 1; z < u; z++) A[b] = Ee(A[b], A[z]);
            if (A[b] !== 0) {
              A[b + 1] < 0 && (A[b] = 0 - A[b]);
              for (let z = b + 1; z < u; z++) A[z] /= A[b];
              A[b + 1] += 1;
            }
            if (A[b] = -A[b], b + 1 < r && A[b] !== 0) {
              for (let z = b + 1; z < r; z++) te[z] = 0;
              for (let z = b + 1; z < r; z++) for (let fe = b + 1; fe < u; fe++) te[z] += A[fe] * w.get(z, fe);
              for (let z = b + 1; z < u; z++) {
                let fe = -A[z] / A[b + 1];
                for (let X = b + 1; X < r; X++) w.set(X, z, w.get(X, z) + fe * te[X]);
              }
            }
            if (R) for (let z = b + 1; z < u; z++) he.set(z, b, A[z]);
          }
        }
        let Oe = Math.min(u, r + 1);
        if (Ne < u && (H[Ne] = w.get(Ne, Ne)), r < Oe && (H[Oe - 1] = 0), ve + 1 < Oe && (A[ve] = w.get(ve, Oe - 1)), A[Oe - 1] = 0, O) {
          for (let b = Ne; b < P; b++) {
            for (let z = 0; z < r; z++) k.set(z, b, 0);
            k.set(b, b, 1);
          }
          for (let b = Ne - 1; b >= 0; b--) if (H[b] !== 0) {
            for (let z = b + 1; z < P; z++) {
              let fe = 0;
              for (let X = b; X < r; X++) fe += k.get(X, b) * k.get(X, z);
              fe = -fe / k.get(b, b);
              for (let X = b; X < r; X++) k.set(X, z, k.get(X, z) + fe * k.get(X, b));
            }
            for (let z = b; z < r; z++) k.set(z, b, -k.get(z, b));
            k.set(b, b, 1 + k.get(b, b));
            for (let z = 0; z < b - 1; z++) k.set(z, b, 0);
          } else {
            for (let z = 0; z < r; z++) k.set(z, b, 0);
            k.set(b, b, 1);
          }
        }
        if (R) for (let b = u - 1; b >= 0; b--) {
          if (b < ve && A[b] !== 0) for (let z = b + 1; z < u; z++) {
            let fe = 0;
            for (let X = b + 1; X < u; X++) fe += he.get(X, b) * he.get(X, z);
            fe = -fe / he.get(b + 1, b);
            for (let X = b + 1; X < u; X++) he.set(X, z, he.get(X, z) + fe * he.get(X, b));
          }
          for (let z = 0; z < u; z++) he.set(z, b, 0);
          he.set(b, b, 1);
        }
        let ye = Oe - 1, Ke = Number.EPSILON;
        for (; Oe > 0; ) {
          let b, z;
          for (b = Oe - 2; b >= -1 && b !== -1; b--) {
            const fe = Number.MIN_VALUE + Ke * Math.abs(H[b] + Math.abs(H[b + 1]));
            if (Math.abs(A[b]) <= fe || Number.isNaN(A[b])) {
              A[b] = 0;
              break;
            }
          }
          if (b === Oe - 2) z = 4;
          else {
            let fe;
            for (fe = Oe - 1; fe >= b && fe !== b; fe--) {
              let X = (fe !== Oe ? Math.abs(A[fe]) : 0) + (fe !== b + 1 ? Math.abs(A[fe - 1]) : 0);
              if (Math.abs(H[fe]) <= Ke * X) {
                H[fe] = 0;
                break;
              }
            }
            fe === b ? z = 3 : fe === Oe - 1 ? z = 1 : (z = 2, b = fe);
          }
          switch (b++, z) {
            case 1: {
              let fe = A[Oe - 2];
              A[Oe - 2] = 0;
              for (let X = Oe - 2; X >= b; X--) {
                let st = Ee(H[X], fe), $e = H[X] / st, it = fe / st;
                if (H[X] = st, X !== b && (fe = -it * A[X - 1], A[X - 1] = $e * A[X - 1]), R) for (let at = 0; at < u; at++) st = $e * he.get(at, X) + it * he.get(at, Oe - 1), he.set(at, Oe - 1, -it * he.get(at, X) + $e * he.get(at, Oe - 1)), he.set(at, X, st);
              }
              break;
            }
            case 2: {
              let fe = A[b - 1];
              A[b - 1] = 0;
              for (let X = b; X < Oe; X++) {
                let st = Ee(H[X], fe), $e = H[X] / st, it = fe / st;
                if (H[X] = st, fe = -it * A[X], A[X] = $e * A[X], O) for (let at = 0; at < r; at++) st = $e * k.get(at, X) + it * k.get(at, b - 1), k.set(at, b - 1, -it * k.get(at, X) + $e * k.get(at, b - 1)), k.set(at, X, st);
              }
              break;
            }
            case 3: {
              const fe = Math.max(Math.abs(H[Oe - 1]), Math.abs(H[Oe - 2]), Math.abs(A[Oe - 2]), Math.abs(H[b]), Math.abs(A[b])), X = H[Oe - 1] / fe, st = H[Oe - 2] / fe, $e = A[Oe - 2] / fe, it = H[b] / fe, at = A[b] / fe, vt = ((st + X) * (st - X) + $e * $e) / 2, Ri = X * $e * (X * $e);
              let St = 0;
              (vt !== 0 || Ri !== 0) && (vt < 0 ? St = 0 - Math.sqrt(vt * vt + Ri) : St = Math.sqrt(vt * vt + Ri), St = Ri / (vt + St));
              let Ci = (it + X) * (it - X) + St, xi = it * at;
              for (let _e2 = b; _e2 < Oe - 1; _e2++) {
                let Lt = Ee(Ci, xi);
                Lt === 0 && (Lt = Number.MIN_VALUE);
                let ri = Ci / Lt, si = xi / Lt;
                if (_e2 !== b && (A[_e2 - 1] = Lt), Ci = ri * H[_e2] + si * A[_e2], A[_e2] = ri * A[_e2] - si * H[_e2], xi = si * H[_e2 + 1], H[_e2 + 1] = ri * H[_e2 + 1], R) for (let At = 0; At < u; At++) Lt = ri * he.get(At, _e2) + si * he.get(At, _e2 + 1), he.set(At, _e2 + 1, -si * he.get(At, _e2) + ri * he.get(At, _e2 + 1)), he.set(At, _e2, Lt);
                if (Lt = Ee(Ci, xi), Lt === 0 && (Lt = Number.MIN_VALUE), ri = Ci / Lt, si = xi / Lt, H[_e2] = Lt, Ci = ri * A[_e2] + si * H[_e2 + 1], H[_e2 + 1] = -si * A[_e2] + ri * H[_e2 + 1], xi = si * A[_e2 + 1], A[_e2 + 1] = ri * A[_e2 + 1], O && _e2 < r - 1) for (let At = 0; At < r; At++) Lt = ri * k.get(At, _e2) + si * k.get(At, _e2 + 1), k.set(At, _e2 + 1, -si * k.get(At, _e2) + ri * k.get(At, _e2 + 1)), k.set(At, _e2, Lt);
              }
              A[Oe - 2] = Ci;
              break;
            }
            case 4: {
              if (H[b] <= 0 && (H[b] = H[b] < 0 ? -H[b] : 0, R)) for (let fe = 0; fe <= ye; fe++) he.set(fe, b, -he.get(fe, b));
              for (; b < ye && !(H[b] >= H[b + 1]); ) {
                let fe = H[b];
                if (H[b] = H[b + 1], H[b + 1] = fe, R && b < u - 1) for (let X = 0; X < u; X++) fe = he.get(X, b + 1), he.set(X, b + 1, he.get(X, b)), he.set(X, b, fe);
                if (O && b < r - 1) for (let X = 0; X < r; X++) fe = k.get(X, b + 1), k.set(X, b + 1, k.get(X, b)), k.set(X, b, fe);
                b++;
              }
              Oe--;
              break;
            }
          }
        }
        if (L) {
          let b = he;
          he = k, k = b;
        }
        this.m = r, this.n = u, this.s = H, this.U = k, this.V = he;
      }
      solve(a) {
        let c = a, r = this.threshold, u = this.s.length, f = ce.zeros(u, u);
        for (let P = 0; P < u; P++) Math.abs(this.s[P]) <= r ? f.set(P, P, 0) : f.set(P, P, 1 / this.s[P]);
        let T = this.U, E = this.rightSingularVectors, O = E.mmul(f), R = E.rows, L = T.rows, w = ce.zeros(R, L);
        for (let P = 0; P < R; P++) for (let oe = 0; oe < L; oe++) {
          let H = 0;
          for (let k = 0; k < u; k++) H += O.get(P, k) * T.get(oe, k);
          w.set(P, oe, H);
        }
        return w.mmul(c);
      }
      solveForDiagonal(a) {
        return this.solve(ce.diag(a));
      }
      inverse() {
        let a = this.V, c = this.threshold, r = a.rows, u = a.columns, f = new ce(r, this.s.length);
        for (let L = 0; L < r; L++) for (let w = 0; w < u; w++) Math.abs(this.s[w]) > c && f.set(L, w, a.get(L, w) / this.s[w]);
        let T = this.U, E = T.rows, O = T.columns, R = new ce(r, E);
        for (let L = 0; L < r; L++) for (let w = 0; w < E; w++) {
          let P = 0;
          for (let oe = 0; oe < O; oe++) P += f.get(L, oe) * T.get(w, oe);
          R.set(L, w, P);
        }
        return R;
      }
      get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
      }
      get norm2() {
        return this.s[0];
      }
      get rank() {
        let a = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, c = 0, r = this.s;
        for (let u = 0, f = r.length; u < f; u++) r[u] > a && c++;
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
    function Ae(g, a = false) {
      return g = ee.checkMatrix(g), a ? new Ie(g).inverse() : Fe(g, ce.eye(g.rows));
    }
    function Fe(g, a, c = false) {
      return g = ee.checkMatrix(g), a = ee.checkMatrix(a), c ? new Ie(g).solve(a) : g.isSquare() ? new Z(g).solve(a) : new ue(g).solve(a);
    }
    function Be(g) {
      if (g = ce.checkMatrix(g), g.isSquare()) {
        if (g.columns === 0) return 1;
        let a, c, r, u;
        if (g.columns === 2) return a = g.get(0, 0), c = g.get(0, 1), r = g.get(1, 0), u = g.get(1, 1), a * u - c * r;
        if (g.columns === 3) {
          let f, T, E;
          return f = new K(g, [
            1,
            2
          ], [
            1,
            2
          ]), T = new K(g, [
            1,
            2
          ], [
            0,
            2
          ]), E = new K(g, [
            1,
            2
          ], [
            0,
            1
          ]), a = g.get(0, 0), c = g.get(0, 1), r = g.get(0, 2), a * Be(f) - c * Be(T) + r * Be(E);
        } else return new Z(g).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function je(g, a) {
      let c = [];
      for (let r = 0; r < g; r++) r !== a && c.push(r);
      return c;
    }
    function _t(g, a, c, r = 1e-9, u = 1e-9) {
      if (g > u) return new Array(a.rows + 1).fill(0);
      {
        let f = a.addRow(c, [
          0
        ]);
        for (let T = 0; T < f.rows; T++) Math.abs(f.get(T, 0)) < r && f.set(T, 0, 0);
        return f.to1DArray();
      }
    }
    function Ut(g, a = {}) {
      const { thresholdValue: c = 1e-9, thresholdError: r = 1e-9 } = a;
      g = ce.checkMatrix(g);
      let u = g.rows, f = new ce(u, u);
      for (let T = 0; T < u; T++) {
        let E = ce.columnVector(g.getRow(T)), O = g.subMatrixRow(je(u, T)).transpose(), L = new Ie(O).solve(E), w = ce.sub(E, O.mmul(L)).abs().max();
        f.setRow(T, _t(w, L, T, c, r));
      }
      return f;
    }
    function fi(g, a = Number.EPSILON) {
      if (g = ce.checkMatrix(g), g.isEmpty()) return g.transpose();
      let c = new Ie(g, {
        autoTranspose: true
      }), r = c.leftSingularVectors, u = c.rightSingularVectors, f = c.diagonal;
      for (let T = 0; T < f.length; T++) Math.abs(f[T]) > a ? f[T] = 1 / f[T] : f[T] = 0;
      return u.mmul(ce.diag(f).mmul(r.transpose()));
    }
    function di(g, a = g, c = {}) {
      g = new ce(g);
      let r = false;
      if (typeof a == "object" && !ce.isMatrix(a) && !e.isAnyArray(a) ? (c = a, a = g, r = true) : a = new ce(a), g.rows !== a.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: u = true } = c;
      u && (g = g.center("column"), r || (a = a.center("column")));
      const f = g.transpose().mmul(a);
      for (let T = 0; T < f.rows; T++) for (let E = 0; E < f.columns; E++) f.set(T, E, f.get(T, E) * (1 / (g.rows - 1)));
      return f;
    }
    function Go(g, a = g, c = {}) {
      g = new ce(g);
      let r = false;
      if (typeof a == "object" && !ce.isMatrix(a) && !e.isAnyArray(a) ? (c = a, a = g, r = true) : a = new ce(a), g.rows !== a.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: u = true, scale: f = true } = c;
      u && (g.center("column"), r || a.center("column")), f && (g.scale("column"), r || a.scale("column"));
      const T = g.standardDeviation("column", {
        unbiased: true
      }), E = r ? T : a.standardDeviation("column", {
        unbiased: true
      }), O = g.transpose().mmul(a);
      for (let R = 0; R < O.rows; R++) for (let L = 0; L < O.columns; L++) O.set(R, L, O.get(R, L) * (1 / (T[R] * E[L])) * (1 / (g.rows - 1)));
      return O;
    }
    class zn {
      constructor(a, c = {}) {
        const { assumeSymmetric: r = false } = c;
        if (a = ee.checkMatrix(a), !a.isSquare()) throw new Error("Matrix is not a square matrix");
        if (a.isEmpty()) throw new Error("Matrix must be non-empty");
        let u = a.columns, f = new ce(u, u), T = new Float64Array(u), E = new Float64Array(u), O = a, R, L, w = false;
        if (r ? w = true : w = a.isSymmetric(), w) {
          for (R = 0; R < u; R++) for (L = 0; L < u; L++) f.set(R, L, O.get(R, L));
          xt(u, E, T, f), pi(u, E, T, f);
        } else {
          let P = new ce(u, u), oe = new Float64Array(u);
          for (L = 0; L < u; L++) for (R = 0; R < u; R++) P.set(R, L, O.get(R, L));
          kr(u, P, oe, f), Wr(u, E, T, f, P);
        }
        this.n = u, this.e = E, this.d = T, this.V = f;
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
        let a = this.n, c = this.e, r = this.d, u = new ce(a, a), f, T;
        for (f = 0; f < a; f++) {
          for (T = 0; T < a; T++) u.set(f, T, 0);
          u.set(f, f, r[f]), c[f] > 0 ? u.set(f, f + 1, c[f]) : c[f] < 0 && u.set(f, f - 1, c[f]);
        }
        return u;
      }
    }
    function xt(g, a, c, r) {
      let u, f, T, E, O, R, L, w;
      for (O = 0; O < g; O++) c[O] = r.get(g - 1, O);
      for (E = g - 1; E > 0; E--) {
        for (w = 0, T = 0, R = 0; R < E; R++) w = w + Math.abs(c[R]);
        if (w === 0) for (a[E] = c[E - 1], O = 0; O < E; O++) c[O] = r.get(E - 1, O), r.set(E, O, 0), r.set(O, E, 0);
        else {
          for (R = 0; R < E; R++) c[R] /= w, T += c[R] * c[R];
          for (u = c[E - 1], f = Math.sqrt(T), u > 0 && (f = -f), a[E] = w * f, T = T - u * f, c[E - 1] = u - f, O = 0; O < E; O++) a[O] = 0;
          for (O = 0; O < E; O++) {
            for (u = c[O], r.set(O, E, u), f = a[O] + r.get(O, O) * u, R = O + 1; R <= E - 1; R++) f += r.get(R, O) * c[R], a[R] += r.get(R, O) * u;
            a[O] = f;
          }
          for (u = 0, O = 0; O < E; O++) a[O] /= T, u += a[O] * c[O];
          for (L = u / (T + T), O = 0; O < E; O++) a[O] -= L * c[O];
          for (O = 0; O < E; O++) {
            for (u = c[O], f = a[O], R = O; R <= E - 1; R++) r.set(R, O, r.get(R, O) - (u * a[R] + f * c[R]));
            c[O] = r.get(E - 1, O), r.set(E, O, 0);
          }
        }
        c[E] = T;
      }
      for (E = 0; E < g - 1; E++) {
        if (r.set(g - 1, E, r.get(E, E)), r.set(E, E, 1), T = c[E + 1], T !== 0) {
          for (R = 0; R <= E; R++) c[R] = r.get(R, E + 1) / T;
          for (O = 0; O <= E; O++) {
            for (f = 0, R = 0; R <= E; R++) f += r.get(R, E + 1) * r.get(R, O);
            for (R = 0; R <= E; R++) r.set(R, O, r.get(R, O) - f * c[R]);
          }
        }
        for (R = 0; R <= E; R++) r.set(R, E + 1, 0);
      }
      for (O = 0; O < g; O++) c[O] = r.get(g - 1, O), r.set(g - 1, O, 0);
      r.set(g - 1, g - 1, 1), a[0] = 0;
    }
    function pi(g, a, c, r) {
      let u, f, T, E, O, R, L, w, P, oe, H, k, he, A, te, me;
      for (T = 1; T < g; T++) a[T - 1] = a[T];
      a[g - 1] = 0;
      let Ne = 0, ve = 0, rt = Number.EPSILON;
      for (R = 0; R < g; R++) {
        for (ve = Math.max(ve, Math.abs(c[R]) + Math.abs(a[R])), L = R; L < g && !(Math.abs(a[L]) <= rt * ve); ) L++;
        if (L > R) do {
          for (u = c[R], w = (c[R + 1] - u) / (2 * a[R]), P = Ee(w, 1), w < 0 && (P = -P), c[R] = a[R] / (w + P), c[R + 1] = a[R] * (w + P), oe = c[R + 1], f = u - c[R], T = R + 2; T < g; T++) c[T] -= f;
          for (Ne = Ne + f, w = c[L], H = 1, k = H, he = H, A = a[R + 1], te = 0, me = 0, T = L - 1; T >= R; T--) for (he = k, k = H, me = te, u = H * a[T], f = H * w, P = Ee(w, a[T]), a[T + 1] = te * P, te = a[T] / P, H = w / P, w = H * c[T] - te * u, c[T + 1] = f + te * (H * u + te * c[T]), O = 0; O < g; O++) f = r.get(O, T + 1), r.set(O, T + 1, te * r.get(O, T) + H * f), r.set(O, T, H * r.get(O, T) - te * f);
          w = -te * me * he * A * a[R] / oe, a[R] = te * w, c[R] = H * w;
        } while (Math.abs(a[R]) > rt * ve);
        c[R] = c[R] + Ne, a[R] = 0;
      }
      for (T = 0; T < g - 1; T++) {
        for (O = T, w = c[T], E = T + 1; E < g; E++) c[E] < w && (O = E, w = c[E]);
        if (O !== T) for (c[O] = c[T], c[T] = w, E = 0; E < g; E++) w = r.get(E, T), r.set(E, T, r.get(E, O)), r.set(E, O, w);
      }
    }
    function kr(g, a, c, r) {
      let u = 0, f = g - 1, T, E, O, R, L, w, P;
      for (w = u + 1; w <= f - 1; w++) {
        for (P = 0, R = w; R <= f; R++) P = P + Math.abs(a.get(R, w - 1));
        if (P !== 0) {
          for (O = 0, R = f; R >= w; R--) c[R] = a.get(R, w - 1) / P, O += c[R] * c[R];
          for (E = Math.sqrt(O), c[w] > 0 && (E = -E), O = O - c[w] * E, c[w] = c[w] - E, L = w; L < g; L++) {
            for (T = 0, R = f; R >= w; R--) T += c[R] * a.get(R, L);
            for (T = T / O, R = w; R <= f; R++) a.set(R, L, a.get(R, L) - T * c[R]);
          }
          for (R = 0; R <= f; R++) {
            for (T = 0, L = f; L >= w; L--) T += c[L] * a.get(R, L);
            for (T = T / O, L = w; L <= f; L++) a.set(R, L, a.get(R, L) - T * c[L]);
          }
          c[w] = P * c[w], a.set(w, w - 1, P * E);
        }
      }
      for (R = 0; R < g; R++) for (L = 0; L < g; L++) r.set(R, L, R === L ? 1 : 0);
      for (w = f - 1; w >= u + 1; w--) if (a.get(w, w - 1) !== 0) {
        for (R = w + 1; R <= f; R++) c[R] = a.get(R, w - 1);
        for (L = w; L <= f; L++) {
          for (E = 0, R = w; R <= f; R++) E += c[R] * r.get(R, L);
          for (E = E / c[w] / a.get(w, w - 1), R = w; R <= f; R++) r.set(R, L, r.get(R, L) + E * c[R]);
        }
      }
    }
    function Wr(g, a, c, r, u) {
      let f = g - 1, T = 0, E = g - 1, O = Number.EPSILON, R = 0, L = 0, w = 0, P = 0, oe = 0, H = 0, k = 0, he = 0, A, te, me, Ne, ve, rt, Oe, ye, Ke, b, z, fe, X, st, $e;
      for (A = 0; A < g; A++) for ((A < T || A > E) && (c[A] = u.get(A, A), a[A] = 0), te = Math.max(A - 1, 0); te < g; te++) L = L + Math.abs(u.get(A, te));
      for (; f >= T; ) {
        for (Ne = f; Ne > T && (H = Math.abs(u.get(Ne - 1, Ne - 1)) + Math.abs(u.get(Ne, Ne)), H === 0 && (H = L), !(Math.abs(u.get(Ne, Ne - 1)) < O * H)); ) Ne--;
        if (Ne === f) u.set(f, f, u.get(f, f) + R), c[f] = u.get(f, f), a[f] = 0, f--, he = 0;
        else if (Ne === f - 1) {
          if (Oe = u.get(f, f - 1) * u.get(f - 1, f), w = (u.get(f - 1, f - 1) - u.get(f, f)) / 2, P = w * w + Oe, k = Math.sqrt(Math.abs(P)), u.set(f, f, u.get(f, f) + R), u.set(f - 1, f - 1, u.get(f - 1, f - 1) + R), ye = u.get(f, f), P >= 0) {
            for (k = w >= 0 ? w + k : w - k, c[f - 1] = ye + k, c[f] = c[f - 1], k !== 0 && (c[f] = ye - Oe / k), a[f - 1] = 0, a[f] = 0, ye = u.get(f, f - 1), H = Math.abs(ye) + Math.abs(k), w = ye / H, P = k / H, oe = Math.sqrt(w * w + P * P), w = w / oe, P = P / oe, te = f - 1; te < g; te++) k = u.get(f - 1, te), u.set(f - 1, te, P * k + w * u.get(f, te)), u.set(f, te, P * u.get(f, te) - w * k);
            for (A = 0; A <= f; A++) k = u.get(A, f - 1), u.set(A, f - 1, P * k + w * u.get(A, f)), u.set(A, f, P * u.get(A, f) - w * k);
            for (A = T; A <= E; A++) k = r.get(A, f - 1), r.set(A, f - 1, P * k + w * r.get(A, f)), r.set(A, f, P * r.get(A, f) - w * k);
          } else c[f - 1] = ye + w, c[f] = ye + w, a[f - 1] = k, a[f] = -k;
          f = f - 2, he = 0;
        } else {
          if (ye = u.get(f, f), Ke = 0, Oe = 0, Ne < f && (Ke = u.get(f - 1, f - 1), Oe = u.get(f, f - 1) * u.get(f - 1, f)), he === 10) {
            for (R += ye, A = T; A <= f; A++) u.set(A, A, u.get(A, A) - ye);
            H = Math.abs(u.get(f, f - 1)) + Math.abs(u.get(f - 1, f - 2)), ye = Ke = 0.75 * H, Oe = -0.4375 * H * H;
          }
          if (he === 30 && (H = (Ke - ye) / 2, H = H * H + Oe, H > 0)) {
            for (H = Math.sqrt(H), Ke < ye && (H = -H), H = ye - Oe / ((Ke - ye) / 2 + H), A = T; A <= f; A++) u.set(A, A, u.get(A, A) - H);
            R += H, ye = Ke = Oe = 0.964;
          }
          for (he = he + 1, ve = f - 2; ve >= Ne && (k = u.get(ve, ve), oe = ye - k, H = Ke - k, w = (oe * H - Oe) / u.get(ve + 1, ve) + u.get(ve, ve + 1), P = u.get(ve + 1, ve + 1) - k - oe - H, oe = u.get(ve + 2, ve + 1), H = Math.abs(w) + Math.abs(P) + Math.abs(oe), w = w / H, P = P / H, oe = oe / H, !(ve === Ne || Math.abs(u.get(ve, ve - 1)) * (Math.abs(P) + Math.abs(oe)) < O * (Math.abs(w) * (Math.abs(u.get(ve - 1, ve - 1)) + Math.abs(k) + Math.abs(u.get(ve + 1, ve + 1)))))); ) ve--;
          for (A = ve + 2; A <= f; A++) u.set(A, A - 2, 0), A > ve + 2 && u.set(A, A - 3, 0);
          for (me = ve; me <= f - 1 && (st = me !== f - 1, me !== ve && (w = u.get(me, me - 1), P = u.get(me + 1, me - 1), oe = st ? u.get(me + 2, me - 1) : 0, ye = Math.abs(w) + Math.abs(P) + Math.abs(oe), ye !== 0 && (w = w / ye, P = P / ye, oe = oe / ye)), ye !== 0); me++) if (H = Math.sqrt(w * w + P * P + oe * oe), w < 0 && (H = -H), H !== 0) {
            for (me !== ve ? u.set(me, me - 1, -H * ye) : Ne !== ve && u.set(me, me - 1, -u.get(me, me - 1)), w = w + H, ye = w / H, Ke = P / H, k = oe / H, P = P / w, oe = oe / w, te = me; te < g; te++) w = u.get(me, te) + P * u.get(me + 1, te), st && (w = w + oe * u.get(me + 2, te), u.set(me + 2, te, u.get(me + 2, te) - w * k)), u.set(me, te, u.get(me, te) - w * ye), u.set(me + 1, te, u.get(me + 1, te) - w * Ke);
            for (A = 0; A <= Math.min(f, me + 3); A++) w = ye * u.get(A, me) + Ke * u.get(A, me + 1), st && (w = w + k * u.get(A, me + 2), u.set(A, me + 2, u.get(A, me + 2) - w * oe)), u.set(A, me, u.get(A, me) - w), u.set(A, me + 1, u.get(A, me + 1) - w * P);
            for (A = T; A <= E; A++) w = ye * r.get(A, me) + Ke * r.get(A, me + 1), st && (w = w + k * r.get(A, me + 2), r.set(A, me + 2, r.get(A, me + 2) - w * oe)), r.set(A, me, r.get(A, me) - w), r.set(A, me + 1, r.get(A, me + 1) - w * P);
          }
        }
      }
      if (L !== 0) {
        for (f = g - 1; f >= 0; f--) if (w = c[f], P = a[f], P === 0) for (Ne = f, u.set(f, f, 1), A = f - 1; A >= 0; A--) {
          for (Oe = u.get(A, A) - w, oe = 0, te = Ne; te <= f; te++) oe = oe + u.get(A, te) * u.get(te, f);
          if (a[A] < 0) k = Oe, H = oe;
          else if (Ne = A, a[A] === 0 ? u.set(A, f, Oe !== 0 ? -oe / Oe : -oe / (O * L)) : (ye = u.get(A, A + 1), Ke = u.get(A + 1, A), P = (c[A] - w) * (c[A] - w) + a[A] * a[A], rt = (ye * H - k * oe) / P, u.set(A, f, rt), u.set(A + 1, f, Math.abs(ye) > Math.abs(k) ? (-oe - Oe * rt) / ye : (-H - Ke * rt) / k)), rt = Math.abs(u.get(A, f)), O * rt * rt > 1) for (te = A; te <= f; te++) u.set(te, f, u.get(te, f) / rt);
        }
        else if (P < 0) for (Ne = f - 1, Math.abs(u.get(f, f - 1)) > Math.abs(u.get(f - 1, f)) ? (u.set(f - 1, f - 1, P / u.get(f, f - 1)), u.set(f - 1, f, -(u.get(f, f) - w) / u.get(f, f - 1))) : ($e = Gr(0, -u.get(f - 1, f), u.get(f - 1, f - 1) - w, P), u.set(f - 1, f - 1, $e[0]), u.set(f - 1, f, $e[1])), u.set(f, f - 1, 0), u.set(f, f, 1), A = f - 2; A >= 0; A--) {
          for (b = 0, z = 0, te = Ne; te <= f; te++) b = b + u.get(A, te) * u.get(te, f - 1), z = z + u.get(A, te) * u.get(te, f);
          if (Oe = u.get(A, A) - w, a[A] < 0) k = Oe, oe = b, H = z;
          else if (Ne = A, a[A] === 0 ? ($e = Gr(-b, -z, Oe, P), u.set(A, f - 1, $e[0]), u.set(A, f, $e[1])) : (ye = u.get(A, A + 1), Ke = u.get(A + 1, A), fe = (c[A] - w) * (c[A] - w) + a[A] * a[A] - P * P, X = (c[A] - w) * 2 * P, fe === 0 && X === 0 && (fe = O * L * (Math.abs(Oe) + Math.abs(P) + Math.abs(ye) + Math.abs(Ke) + Math.abs(k))), $e = Gr(ye * oe - k * b + P * z, ye * H - k * z - P * b, fe, X), u.set(A, f - 1, $e[0]), u.set(A, f, $e[1]), Math.abs(ye) > Math.abs(k) + Math.abs(P) ? (u.set(A + 1, f - 1, (-b - Oe * u.get(A, f - 1) + P * u.get(A, f)) / ye), u.set(A + 1, f, (-z - Oe * u.get(A, f) - P * u.get(A, f - 1)) / ye)) : ($e = Gr(-oe - Ke * u.get(A, f - 1), -H - Ke * u.get(A, f), k, P), u.set(A + 1, f - 1, $e[0]), u.set(A + 1, f, $e[1]))), rt = Math.max(Math.abs(u.get(A, f - 1)), Math.abs(u.get(A, f))), O * rt * rt > 1) for (te = A; te <= f; te++) u.set(te, f - 1, u.get(te, f - 1) / rt), u.set(te, f, u.get(te, f) / rt);
        }
        for (A = 0; A < g; A++) if (A < T || A > E) for (te = A; te < g; te++) r.set(A, te, u.get(A, te));
        for (te = g - 1; te >= T; te--) for (A = T; A <= E; A++) {
          for (k = 0, me = T; me <= Math.min(te, E); me++) k = k + r.get(A, me) * u.get(me, te);
          r.set(A, te, k);
        }
      }
    }
    function Gr(g, a, c, r) {
      let u, f;
      return Math.abs(c) > Math.abs(r) ? (u = r / c, f = c + u * r, [
        (g + u * a) / f,
        (a - u * g) / f
      ]) : (u = c / r, f = r + u * c, [
        (u * g + a) / f,
        (u * a - g) / f
      ]);
    }
    class Sl {
      constructor(a) {
        if (a = ee.checkMatrix(a), !a.isSymmetric()) throw new Error("Matrix is not symmetric");
        let c = a, r = c.rows, u = new ce(r, r), f = true, T, E, O;
        for (E = 0; E < r; E++) {
          let R = 0;
          for (O = 0; O < E; O++) {
            let L = 0;
            for (T = 0; T < O; T++) L += u.get(O, T) * u.get(E, T);
            L = (c.get(E, O) - L) / u.get(O, O), u.set(E, O, L), R = R + L * L;
          }
          for (R = c.get(E, E) - R, f && (f = R > 0), u.set(E, E, Math.sqrt(Math.max(R, 0))), O = E + 1; O < r; O++) u.set(E, O, 0);
        }
        this.L = u, this.positiveDefinite = f;
      }
      isPositiveDefinite() {
        return this.positiveDefinite;
      }
      solve(a) {
        a = ee.checkMatrix(a);
        let c = this.L, r = c.rows;
        if (a.rows !== r) throw new Error("Matrix dimensions do not match");
        if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
        let u = a.columns, f = a.clone(), T, E, O;
        for (O = 0; O < r; O++) for (E = 0; E < u; E++) {
          for (T = 0; T < O; T++) f.set(O, E, f.get(O, E) - f.get(T, E) * c.get(O, T));
          f.set(O, E, f.get(O, E) / c.get(O, O));
        }
        for (O = r - 1; O >= 0; O--) for (E = 0; E < u; E++) {
          for (T = O + 1; T < r; T++) f.set(O, E, f.get(O, E) - f.get(T, E) * c.get(T, O));
          f.set(O, E, f.get(O, E) / c.get(O, O));
        }
        return f;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class Al {
      constructor(a, c = {}) {
        a = ee.checkMatrix(a);
        let { Y: r } = c;
        const { scaleScores: u = false, maxIterations: f = 1e3, terminationCriteria: T = 1e-10 } = c;
        let E;
        if (r) {
          if (e.isAnyArray(r) && typeof r[0] == "number" ? r = ce.columnVector(r) : r = ee.checkMatrix(r), r.rows !== a.rows) throw new Error("Y should have the same number of rows as X");
          E = r.getColumnVector(0);
        } else E = a.getColumnVector(0);
        let O = 1, R, L, w, P;
        for (let oe = 0; oe < f && O > T; oe++) w = a.transpose().mmul(E).div(E.transpose().mmul(E).get(0, 0)), w = w.div(w.norm()), R = a.mmul(w).div(w.transpose().mmul(w).get(0, 0)), oe > 0 && (O = R.clone().sub(P).pow(2).sum()), P = R.clone(), r ? (L = r.transpose().mmul(R).div(R.transpose().mmul(R).get(0, 0)), L = L.div(L.norm()), E = r.mmul(L).div(L.transpose().mmul(L).get(0, 0))) : E = R;
        if (r) {
          let oe = a.transpose().mmul(R).div(R.transpose().mmul(R).get(0, 0));
          oe = oe.div(oe.norm());
          let H = a.clone().sub(R.clone().mmul(oe.transpose())), k = E.transpose().mmul(R).div(R.transpose().mmul(R).get(0, 0)), he = r.clone().sub(R.clone().mulS(k.get(0, 0)).mmul(L.transpose()));
          this.t = R, this.p = oe.transpose(), this.w = w.transpose(), this.q = L, this.u = E, this.s = R.transpose().mmul(R), this.xResidual = H, this.yResidual = he, this.betas = k;
        } else this.w = w.transpose(), this.s = R.transpose().mmul(R).sqrt(), u ? this.t = R.clone().div(this.s.get(0, 0)) : this.t = R, this.xResidual = a.sub(R.mmul(w.transpose()));
      }
    }
    return He.AbstractMatrix = we, He.CHO = Sl, He.CholeskyDecomposition = Sl, He.DistanceMatrix = ji, He.EVD = zn, He.EigenvalueDecomposition = zn, He.LU = Z, He.LuDecomposition = Z, He.Matrix = ce, He.MatrixColumnSelectionView = Wo, He.MatrixColumnView = Ur, He.MatrixFlipColumnView = yl, He.MatrixFlipRowView = y, He.MatrixRowSelectionView = F, He.MatrixRowView = v, He.MatrixSelectionView = K, He.MatrixSubView = q, He.MatrixTransposeView = J, He.NIPALS = Al, He.Nipals = Al, He.QR = ue, He.QrDecomposition = ue, He.SVD = Ie, He.SingularValueDecomposition = Ie, He.SymmetricMatrix = Kt, He.WrapperMatrix1D = le, He.WrapperMatrix2D = ee, He.correlation = Go, He.covariance = di, He.default = ce, He.determinant = Be, He.inverse = Ae, He.linearDependencies = Ut, He.pseudoInverse = fi, He.solve = Fe, He.wrap = ae, He;
  }
  var Qs = RI();
  const mu = fI(Qs), We = Qs.Matrix;
  mu.Matrix ? mu.Matrix : Qs.Matrix;
  const gu = Qs.inverse;
  const _ar = class _ar {
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
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = We.zeros(3, 3), this.matrixRy = We.zeros(3, 3), this.matrixRx = We.zeros(3, 3), this.matrixR = We.zeros(3, 3), this.matrixRTemp = We.zeros(3, 3), this.vectorInput = We.zeros(3, 1), this.vectorOutput = We.zeros(3, 1), this.gravityENU = new We([
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
      if (this.initialized) return W(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const i = await this.initPromise;
      return i.isErr() && (this.initPromise = null), i;
    }
    async doInit(t) {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      const i = await this.requestPermissionIfNeeded(t);
      return i.isErr() ? C(i.error) : await this.checkHardwareSupport() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, W(void 0)) : C(new Ue("Device motion is not supported by this browser"));
    }
    async requestPermissionIfNeeded(t) {
      try {
        if (typeof DeviceMotionEvent < "u" && typeof DeviceMotionEvent.requestPermission == "function") {
          let i = "prompt";
          try {
            i = await DeviceMotionEvent.requestPermission();
          } catch {
          }
          if (t && i === "prompt") {
            if (!await t("prompt", "permission.imu.required")) return C(new Ue("User declined to grant IMU permission"));
            if (await DeviceMotionEvent.requestPermission() !== "granted") return C(new Ue("IMU permission denied"));
          } else return i === "denied" ? C(new Ue("IMU permission denied")) : W(void 0);
        }
        return W(void 0);
      } catch (i) {
        return C(new Ue("Failed to request IMU permission", void 0, i));
      }
    }
    async checkHardwareSupport() {
      return !("DeviceOrientationEvent" in window) || !("DeviceMotionEvent" in window) ? false : new Promise((t) => {
        let i = false;
        const o = () => {
          window.removeEventListener("deviceorientation", l), window.removeEventListener("devicemotion", h);
        }, n = () => {
          i || (i = true, o(), t(true));
        }, s = () => {
          i || (i = true, o(), t(false));
        }, l = (d) => {
          (d.alpha !== null || d.beta !== null || d.gamma !== null) && n();
        }, h = (d) => {
          (d.acceleration || d.accelerationIncludingGravity || d.rotationRate) && n();
        };
        window.addEventListener("deviceorientation", l), window.addEventListener("devicemotion", h), setTimeout(s, 1e3);
      });
    }
    async startAcceleration(t = {}) {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return C(i.error);
      }
      if (this.isAccelerationActive) return W(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false, this.accelerationIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isAccelerationActive = true, W(void 0);
      } catch (i) {
        return C(new Ue("Failed to start acceleration monitoring", void 0, i));
      }
    }
    async startGyroscope(t = {}) {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return C(i.error);
      }
      if (this.isGyroscopeActive) return W(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false, this.gyroscopeIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isGyroscopeActive = true, W(void 0);
      } catch (i) {
        return C(new Ue("Failed to start gyroscope monitoring", void 0, i));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return W(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.accelerationIntervalMs = 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), W(void 0);
      } catch (t) {
        return C(new Ue("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return W(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.gyroscopeIntervalMs = 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), W(void 0);
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
      return W(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (this.disposed) return C(new Ue("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return W(this.lastGyroscopeReading);
    }
    onAccelerationReading(t) {
      const i = this.nextListenerId++;
      return this.accelerationListeners.set(i, t), this.lastAccelerationReading && t(this.lastAccelerationReading), i;
    }
    onGyroscopeReading(t) {
      const i = this.nextListenerId++;
      return this.gyroscopeListeners.set(i, t), this.lastGyroscopeReading && t(this.lastGyroscopeReading), i;
    }
    removeEventListener(t) {
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), W(void 0);
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
      const i = t.timeStamp || performance.now();
      this.isAccelerationActive && this.processAccelerationData(t, i), this.isGyroscopeActive && this.processGyroscopeData(t, i);
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
      const i = t.timestamp - this.accelerationPrevReading.timestamp;
      if (i <= 0) {
        this.accelerationPrevReading = t;
        return;
      }
      this.accelerationAccumulatedX += (this.accelerationPrevReading.x + t.x) * i / 2, this.accelerationAccumulatedY += (this.accelerationPrevReading.y + t.y) * i / 2, this.accelerationAccumulatedZ += (this.accelerationPrevReading.z + t.z) * i / 2, this.accelerationAccumulatedTime += i, t.timestamp - this.accelerationLastEmitTime >= this.accelerationIntervalMs ? (this.flushAccelerationReadings(), this.accelerationPrevReading = t, this.accelerationAccumulatedX = t.x, this.accelerationAccumulatedY = t.y, this.accelerationAccumulatedZ = t.z, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = t.timestamp, this.accelerationTimer !== null && clearTimeout(this.accelerationTimer), this.accelerationTimer = window.setTimeout(() => this.flushAccelerationReadings(), this.accelerationIntervalMs)) : this.accelerationPrevReading = t;
    }
    flushAccelerationReadings() {
      if (this.accelerationPrevReading === null) {
        this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
        return;
      }
      let t;
      if (this.accelerationAccumulatedTime === 0) t = this.accelerationPrevReading;
      else {
        const i = this.accelerationAccumulatedX / this.accelerationAccumulatedTime, o = this.accelerationAccumulatedY / this.accelerationAccumulatedTime, n = this.accelerationAccumulatedZ / this.accelerationAccumulatedTime;
        t = {
          x: i,
          y: o,
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
      const i = t.timestamp - this.gyroscopePrevReading.timestamp;
      if (i <= 0) {
        this.gyroscopePrevReading = t;
        return;
      }
      this.gyroscopeAccumulatedX += (this.gyroscopePrevReading.x + t.x) * i / 2, this.gyroscopeAccumulatedY += (this.gyroscopePrevReading.y + t.y) * i / 2, this.gyroscopeAccumulatedZ += (this.gyroscopePrevReading.z + t.z) * i / 2, this.gyroscopeAccumulatedTime += i, t.timestamp - this.gyroscopeLastEmitTime >= this.gyroscopeIntervalMs ? (this.flushGyroscopeReadings(), this.gyroscopePrevReading = t, this.gyroscopeAccumulatedX = t.x, this.gyroscopeAccumulatedY = t.y, this.gyroscopeAccumulatedZ = t.z, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = t.timestamp, this.gyroscopeTimer !== null && clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = window.setTimeout(() => this.flushGyroscopeReadings(), this.gyroscopeIntervalMs)) : this.gyroscopePrevReading = t;
    }
    flushGyroscopeReadings() {
      if (this.gyroscopePrevReading === null) {
        this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
        return;
      }
      let t;
      if (this.gyroscopeAccumulatedTime === 0) t = this.gyroscopePrevReading;
      else {
        const i = this.gyroscopeAccumulatedX / this.gyroscopeAccumulatedTime, o = this.gyroscopeAccumulatedY / this.gyroscopeAccumulatedTime, n = this.gyroscopeAccumulatedZ / this.gyroscopeAccumulatedTime;
        t = {
          x: i,
          y: o,
          z: n,
          timestamp: this.gyroscopePrevReading.timestamp
        };
      }
      this.lastGyroscopeReading = t, this.notifyListeners(this.gyroscopeListeners, t, "gyroscope"), this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
    }
    processAccelerationData(t, i) {
      let o = t.acceleration, n = false;
      if ((!o || o.x === null || o.y === null || o.z === null) && (o = t.accelerationIncludingGravity, n = true), !o || o.x === null || o.y === null || o.z === null) return;
      let s = o.x, l = o.y, h = o.z;
      if (n && this.deviceOrientation) {
        const m = this.computeGravityInDeviceFrame(this.deviceOrientation);
        s -= m.x, l -= m.y, h -= m.z;
      }
      let d;
      this.normalizeAccelerationToENU && this.deviceOrientation ? d = this.transformToENU(s, l, h, i, this.deviceOrientation) : d = {
        x: s,
        y: l,
        z: h,
        timestamp: i
      }, this.addAccelerationReading(d);
    }
    processGyroscopeData(t, i) {
      const o = t.rotationRate;
      if (!o || o.alpha === null || o.beta === null || o.gamma === null) return;
      const n = o.beta, s = o.gamma, l = o.alpha;
      let h;
      this.normalizeGyroscopeToENU && this.deviceOrientation ? h = this.transformToENU(n, s, l, i, this.deviceOrientation) : h = {
        x: n,
        y: s,
        z: l,
        timestamp: i
      }, this.addGyroscopeReading(h);
    }
    notifyListeners(t, i, o) {
      for (const n of t.values()) try {
        n(i);
      } catch (s) {
        console.error(`Error in ${o} callback:`, s);
      }
    }
    updateRotationMatrices(t) {
      const i = t.alpha * _ar.DEG_TO_RAD, o = t.beta * _ar.DEG_TO_RAD, n = t.gamma * _ar.DEG_TO_RAD, s = Math.cos(i), l = Math.sin(i), h = Math.cos(o), d = Math.sin(o), m = Math.cos(n), p = Math.sin(n);
      this.matrixRz.set(0, 0, s), this.matrixRz.set(0, 1, -l), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, l), this.matrixRz.set(1, 1, s), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, h), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, d), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -d), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, h), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, m), this.matrixRx.set(1, 2, -p), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, p), this.matrixRx.set(2, 2, m), this.multiplyMatricesInPlace(this.matrixRz, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRx, this.matrixR);
    }
    multiplyMatricesInPlace(t, i, o) {
      for (let n = 0; n < 3; n++) for (let s = 0; s < 3; s++) {
        let l = 0;
        for (let h = 0; h < 3; h++) l += t.get(n, h) * i.get(h, s);
        o.set(n, s, l);
      }
    }
    multiplyMatrixVectorInPlace(t, i, o) {
      for (let n = 0; n < 3; n++) {
        let s = 0;
        for (let l = 0; l < 3; l++) s += t.get(n, l) * i.get(l, 0);
        o.set(n, 0, s);
      }
    }
    transformToENU(t, i, o, n, s) {
      return this.updateRotationMatrices(s), this.vectorInput.set(0, 0, t), this.vectorInput.set(1, 0, i), this.vectorInput.set(2, 0, o), this.multiplyMatrixVectorInPlace(this.matrixR, this.vectorInput, this.vectorOutput), {
        x: this.vectorOutput.get(0, 0),
        y: this.vectorOutput.get(1, 0),
        z: this.vectorOutput.get(2, 0),
        timestamp: n
      };
    }
    computeGravityInDeviceFrame(t) {
      this.updateRotationMatrices(t);
      let i = 0, o = 0, n = 0;
      for (let s = 0; s < 3; s++) {
        const l = this.gravityENU.get(s, 0);
        i += this.matrixR.get(s, 0) * l, o += this.matrixR.get(s, 1) * l, n += this.matrixR.get(s, 2) * l;
      }
      return {
        x: i,
        y: o,
        z: n
      };
    }
  };
  __publicField(_ar, "GRAVITY", 9.81);
  __publicField(_ar, "DEG_TO_RAD", Math.PI / 180);
  let ar = _ar;
  const _So = class _So {
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
      const i = xc.getPlatformContext(), o = new _So(i), n = await o.initializeProviders(t);
      return n.isErr() ? C(n.error) : (_So.instance = o, W(o));
    }
    static getInstance() {
      return _So.instance ? W(_So.instance) : C(new Yo("Platform services not initialized", Eo.NOT_INITIALIZED));
    }
    async initializeProviders(t) {
      try {
        this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage);
        const i = await Promise.all([
          this.createIMUProvider(t == null ? void 0 : t.imu),
          this.createDeviceOrientationProvider(t == null ? void 0 : t.deviceOrientation)
        ]);
        return this.imuProvider = i[0], this.deviceOrientationProvider = i[1], this.geolocationProvider = await this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, W(void 0);
      } catch (i) {
        return C(new Yo("Failed to initialize platform providers", Eo.DETECTION_FAILED, i));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case Et.TAURI:
          return new wm((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case Et.WEB:
        case Et.MOBILE_WEB:
        case Et.UNKNOWN:
        default:
          return new aI((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let i;
      switch (this.context.environment) {
        case Et.TAURI:
          i = new cI((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case Et.WEB:
        case Et.MOBILE_WEB:
        case Et.UNKNOWN:
        default:
          i = new uI();
          break;
      }
      const o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize geolocation provider", o.error), null) : i;
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
      const i = new ar(), o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize IMU provider", o.error), null) : i;
    }
    async createDeviceOrientationProvider(t) {
      const i = new hI(), o = await i.init(t == null ? void 0 : t.permissionCallback);
      return o.isErr() ? (console.error("Failed to initialize device orientation provider", o.error), null) : i;
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? W(this.storageProvider) : C(new Yo("Storage provider not initialized", Eo.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? W(this.geolocationProvider) : C(new Yo("Geolocation provider not initialized", Eo.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? W(this.fileProvider) : C(new Yo("File provider not initialized", Eo.DETECTION_FAILED));
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
      _So.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? W(this.imuProvider) : C(new Yo("IMU provider not initialized", Eo.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? W(this.deviceOrientationProvider) : C(new Yo("Device orientation provider not initialized", Eo.DETECTION_FAILED));
    }
  };
  __publicField(_So, "instance", null);
  let So = _So;
  Hr = function() {
    return So.getInstance();
  };
  wI = function() {
    return typeof navigator > "u" ? false : xc.detectEnvironment() === Et.TAURI;
  };
  class yI {
    constructor() {
      __publicField(this, "storageProvider", null);
      __publicField(this, "initialized", false);
    }
    async init() {
      if (this.initialized) return;
      const t = Hr();
      if (t.isErr()) throw t.error;
      const i = t.value.getStorage();
      if (i.isErr()) throw i.error;
      this.storageProvider = i.value;
      const o = await this.storageProvider.init();
      if (o.isErr()) throw o.error;
      this.initialized = true;
    }
    async set(t, i) {
      if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
      const o = await this.storageProvider.set(t, i);
      if (o.isErr()) throw o.error;
    }
    async get(t) {
      if (this.initialized || await this.init(), !this.storageProvider) throw new Error("Storage provider not initialized");
      const i = await this.storageProvider.get(t);
      if (i.isErr()) throw i.error;
      return i.value;
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
      const i = await this.storageProvider.remove(t);
      if (i.isErr()) throw i.error;
    }
  }
  let ti;
  ti = new yI();
  ft = ti.set.bind(ti);
  Zo = ti.get.bind(ti);
  Tv = ti.save.bind(ti);
  ti.init.bind(ti);
  ti.exportToJson.bind(ti);
  ti.clear.bind(ti);
  ti.remove.bind(ti);
  function B(e, t, i) {
    function o(h, d) {
      if (h._zod || Object.defineProperty(h, "_zod", {
        value: {
          def: d,
          constr: l,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      }), h._zod.traits.has(e)) return;
      h._zod.traits.add(e), t(h, d);
      const m = l.prototype, p = Object.keys(m);
      for (let I = 0; I < p.length; I++) {
        const N = p[I];
        N in h || (h[N] = m[N].bind(h));
      }
    }
    const n = (i == null ? void 0 : i.Parent) ?? Object;
    class s extends n {
    }
    Object.defineProperty(s, "name", {
      value: e
    });
    function l(h) {
      var d;
      const m = (i == null ? void 0 : i.Parent) ? new s() : this;
      o(m, h), (d = m._zod).deferred ?? (d.deferred = []);
      for (const p of m._zod.deferred) p();
      return m;
    }
    return Object.defineProperty(l, "init", {
      value: o
    }), Object.defineProperty(l, Symbol.hasInstance, {
      value: (h) => {
        var _a3, _b3;
        return (i == null ? void 0 : i.Parent) && h instanceof i.Parent ? true : (_b3 = (_a3 = h == null ? void 0 : h._zod) == null ? void 0 : _a3.traits) == null ? void 0 : _b3.has(e);
      }
    }), Object.defineProperty(l, "name", {
      value: e
    }), l;
  }
  class En extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  class pf extends Error {
    constructor(t) {
      super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
    }
  }
  const mf = {};
  function Co(e) {
    return mf;
  }
  function gf(e) {
    const t = Object.values(e).filter((o) => typeof o == "number");
    return Object.entries(e).filter(([o, n]) => t.indexOf(+o) === -1).map(([o, n]) => n);
  }
  function gc(e, t) {
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
  function Zc(e) {
    return e == null;
  }
  function qc(e) {
    const t = e.startsWith("^") ? 1 : 0, i = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, i);
  }
  function SI(e, t) {
    const i = (e.toString().split(".")[1] || "").length, o = t.toString();
    let n = (o.split(".")[1] || "").length;
    if (n === 0 && /\d?e-\d?/.test(o)) {
      const d = o.match(/\d?e-(\d?)/);
      (d == null ? void 0 : d[1]) && (n = Number.parseInt(d[1]));
    }
    const s = i > n ? i : n, l = Number.parseInt(e.toFixed(s).replace(".", "")), h = Number.parseInt(t.toFixed(s).replace(".", ""));
    return l % h / 10 ** s;
  }
  const Tu = /* @__PURE__ */ Symbol("evaluating");
  function Ve(e, t, i) {
    let o;
    Object.defineProperty(e, t, {
      get() {
        if (o !== Tu) return o === void 0 && (o = Tu, o = i()), o;
      },
      set(n) {
        Object.defineProperty(e, t, {
          value: n
        });
      },
      configurable: true
    });
  }
  function an(e, t, i) {
    Object.defineProperty(e, t, {
      value: i,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  function _o(...e) {
    const t = {};
    for (const i of e) {
      const o = Object.getOwnPropertyDescriptors(i);
      Object.assign(t, o);
    }
    return Object.defineProperties({}, t);
  }
  function Eu(e) {
    return JSON.stringify(e);
  }
  function AI(e) {
    return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const Tf = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
  };
  function Os(e) {
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
  function Hn(e) {
    if (Os(e) === false) return false;
    const t = e.constructor;
    if (t === void 0 || typeof t != "function") return true;
    const i = t.prototype;
    return !(Os(i) === false || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === false);
  }
  function Ef(e) {
    return Hn(e) ? {
      ...e
    } : Array.isArray(e) ? [
      ...e
    ] : e;
  }
  const bI = /* @__PURE__ */ new Set([
    "string",
    "number",
    "symbol"
  ]);
  function ea(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function Uo(e, t, i) {
    const o = new e._zod.constr(t ?? e._zod.def);
    return (!t || (i == null ? void 0 : i.parent)) && (o._zod.parent = e), o;
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
  function vI(e) {
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
  function CI(e, t) {
    const i = e._zod.def, o = i.checks;
    if (o && o.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
    const s = _o(e._zod.def, {
      get shape() {
        const l = {};
        for (const h in t) {
          if (!(h in i.shape)) throw new Error(`Unrecognized key: "${h}"`);
          t[h] && (l[h] = i.shape[h]);
        }
        return an(this, "shape", l), l;
      },
      checks: []
    });
    return Uo(e, s);
  }
  function DI(e, t) {
    const i = e._zod.def, o = i.checks;
    if (o && o.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
    const s = _o(e._zod.def, {
      get shape() {
        const l = {
          ...e._zod.def.shape
        };
        for (const h in t) {
          if (!(h in i.shape)) throw new Error(`Unrecognized key: "${h}"`);
          t[h] && delete l[h];
        }
        return an(this, "shape", l), l;
      },
      checks: []
    });
    return Uo(e, s);
  }
  function HI(e, t) {
    if (!Hn(t)) throw new Error("Invalid input to extend: expected a plain object");
    const i = e._zod.def.checks;
    if (i && i.length > 0) {
      const s = e._zod.def.shape;
      for (const l in t) if (Object.getOwnPropertyDescriptor(s, l) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    const n = _o(e._zod.def, {
      get shape() {
        const s = {
          ...e._zod.def.shape,
          ...t
        };
        return an(this, "shape", s), s;
      }
    });
    return Uo(e, n);
  }
  function MI(e, t) {
    if (!Hn(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
    const i = _o(e._zod.def, {
      get shape() {
        const o = {
          ...e._zod.def.shape,
          ...t
        };
        return an(this, "shape", o), o;
      }
    });
    return Uo(e, i);
  }
  function PI(e, t) {
    const i = _o(e._zod.def, {
      get shape() {
        const o = {
          ...e._zod.def.shape,
          ...t._zod.def.shape
        };
        return an(this, "shape", o), o;
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: []
    });
    return Uo(e, i);
  }
  function FI(e, t, i) {
    const n = t._zod.def.checks;
    if (n && n.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
    const l = _o(t._zod.def, {
      get shape() {
        const h = t._zod.def.shape, d = {
          ...h
        };
        if (i) for (const m in i) {
          if (!(m in h)) throw new Error(`Unrecognized key: "${m}"`);
          i[m] && (d[m] = e ? new e({
            type: "optional",
            innerType: h[m]
          }) : h[m]);
        }
        else for (const m in h) d[m] = e ? new e({
          type: "optional",
          innerType: h[m]
        }) : h[m];
        return an(this, "shape", d), d;
      },
      checks: []
    });
    return Uo(t, l);
  }
  function _I(e, t, i) {
    const o = _o(t._zod.def, {
      get shape() {
        const n = t._zod.def.shape, s = {
          ...n
        };
        if (i) for (const l in i) {
          if (!(l in s)) throw new Error(`Unrecognized key: "${l}"`);
          i[l] && (s[l] = new e({
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
    return Uo(t, o);
  }
  function gn(e, t = 0) {
    var _a3;
    if (e.aborted === true) return true;
    for (let i = t; i < e.issues.length; i++) if (((_a3 = e.issues[i]) == null ? void 0 : _a3.continue) !== true) return true;
    return false;
  }
  function Tn(e, t) {
    return t.map((i) => {
      var o;
      return (o = i).path ?? (o.path = []), i.path.unshift(e), i;
    });
  }
  function $r(e) {
    return typeof e == "string" ? e : e == null ? void 0 : e.message;
  }
  function Do(e, t, i) {
    var _a3, _b3, _c2, _d2, _e, _f2;
    const o = {
      ...e,
      path: e.path ?? []
    };
    if (!e.message) {
      const n = $r((_c2 = (_b3 = (_a3 = e.inst) == null ? void 0 : _a3._zod.def) == null ? void 0 : _b3.error) == null ? void 0 : _c2.call(_b3, e)) ?? $r((_d2 = t == null ? void 0 : t.error) == null ? void 0 : _d2.call(t, e)) ?? $r((_e = i.customError) == null ? void 0 : _e.call(i, e)) ?? $r((_f2 = i.localeError) == null ? void 0 : _f2.call(i, e)) ?? "Invalid input";
      o.message = n;
    }
    return delete o.inst, delete o.continue, (t == null ? void 0 : t.reportInput) || delete o.input, o;
  }
  function Kc(e) {
    return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
  }
  function yr(...e) {
    const [t, i, o] = e;
    return typeof t == "string" ? {
      message: t,
      code: "custom",
      input: i,
      inst: o
    } : {
      ...t
    };
  }
  const If = (e, t) => {
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
      value: e._zod,
      enumerable: false
    }), Object.defineProperty(e, "issues", {
      value: t,
      enumerable: false
    }), e.message = JSON.stringify(t, gc, 2), Object.defineProperty(e, "toString", {
      value: () => e.message,
      enumerable: false
    });
  }, Of = B("$ZodError", If), Rf = B("$ZodError", If, {
    Parent: Error
  });
  function UI(e, t = (i) => i.message) {
    const i = {}, o = [];
    for (const n of e.issues) n.path.length > 0 ? (i[n.path[0]] = i[n.path[0]] || [], i[n.path[0]].push(t(n))) : o.push(t(n));
    return {
      formErrors: o,
      fieldErrors: i
    };
  }
  function kI(e, t = (i) => i.message) {
    const i = {
      _errors: []
    }, o = (n) => {
      for (const s of n.issues) if (s.code === "invalid_union" && s.errors.length) s.errors.map((l) => o({
        issues: l
      }));
      else if (s.code === "invalid_key") o({
        issues: s.issues
      });
      else if (s.code === "invalid_element") o({
        issues: s.issues
      });
      else if (s.path.length === 0) i._errors.push(t(s));
      else {
        let l = i, h = 0;
        for (; h < s.path.length; ) {
          const d = s.path[h];
          h === s.path.length - 1 ? (l[d] = l[d] || {
            _errors: []
          }, l[d]._errors.push(t(s))) : l[d] = l[d] || {
            _errors: []
          }, l = l[d], h++;
        }
      }
    };
    return o(e), i;
  }
  const Jc = (e) => (t, i, o, n) => {
    const s = o ? Object.assign(o, {
      async: false
    }) : {
      async: false
    }, l = t._zod.run({
      value: i,
      issues: []
    }, s);
    if (l instanceof Promise) throw new En();
    if (l.issues.length) {
      const h = new ((n == null ? void 0 : n.Err) ?? e)(l.issues.map((d) => Do(d, s, Co())));
      throw Tf(h, n == null ? void 0 : n.callee), h;
    }
    return l.value;
  }, Xc = (e) => async (t, i, o, n) => {
    const s = o ? Object.assign(o, {
      async: true
    }) : {
      async: true
    };
    let l = t._zod.run({
      value: i,
      issues: []
    }, s);
    if (l instanceof Promise && (l = await l), l.issues.length) {
      const h = new ((n == null ? void 0 : n.Err) ?? e)(l.issues.map((d) => Do(d, s, Co())));
      throw Tf(h, n == null ? void 0 : n.callee), h;
    }
    return l.value;
  }, ta = (e) => (t, i, o) => {
    const n = o ? {
      ...o,
      async: false
    } : {
      async: false
    }, s = t._zod.run({
      value: i,
      issues: []
    }, n);
    if (s instanceof Promise) throw new En();
    return s.issues.length ? {
      success: false,
      error: new (e ?? Of)(s.issues.map((l) => Do(l, n, Co())))
    } : {
      success: true,
      data: s.value
    };
  }, WI = ta(Rf), ia = (e) => async (t, i, o) => {
    const n = o ? Object.assign(o, {
      async: true
    }) : {
      async: true
    };
    let s = t._zod.run({
      value: i,
      issues: []
    }, n);
    return s instanceof Promise && (s = await s), s.issues.length ? {
      success: false,
      error: new e(s.issues.map((l) => Do(l, n, Co())))
    } : {
      success: true,
      data: s.value
    };
  }, GI = ia(Rf), BI = (e) => (t, i, o) => {
    const n = o ? Object.assign(o, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return Jc(e)(t, i, n);
  }, jI = (e) => (t, i, o) => Jc(e)(t, i, o), xI = (e) => async (t, i, o) => {
    const n = o ? Object.assign(o, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return Xc(e)(t, i, n);
  }, YI = (e) => async (t, i, o) => Xc(e)(t, i, o), zI = (e) => (t, i, o) => {
    const n = o ? Object.assign(o, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return ta(e)(t, i, n);
  }, $I = (e) => (t, i, o) => ta(e)(t, i, o), VI = (e) => async (t, i, o) => {
    const n = o ? Object.assign(o, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return ia(e)(t, i, n);
  }, ZI = (e) => async (t, i, o) => ia(e)(t, i, o), qI = /^[cC][^\s-]{8,}$/, KI = /^[0-9a-z]+$/, JI = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, XI = /^[0-9a-vA-V]{20}$/, QI = /^[A-Za-z0-9]{27}$/, eO = /^[a-zA-Z0-9_-]{21}$/, tO = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, iO = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Iu = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, oO = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, nO = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  function rO() {
    return new RegExp(nO, "u");
  }
  const sO = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, aO = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, cO = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, lO = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, uO = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, wf = /^[A-Za-z0-9_-]*$/, hO = /^\+[1-9]\d{6,14}$/, yf = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", fO = new RegExp(`^${yf}$`);
  function Sf(e) {
    const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  }
  function dO(e) {
    return new RegExp(`^${Sf(e)}$`);
  }
  function pO(e) {
    const t = Sf({
      precision: e.precision
    }), i = [
      "Z"
    ];
    e.local && i.push(""), e.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const o = `${t}(?:${i.join("|")})`;
    return new RegExp(`^${yf}T(?:${o})$`);
  }
  const mO = (e) => {
    const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  }, gO = /^-?\d+$/, Af = /^-?\d+(?:\.\d+)?$/, TO = /^(?:true|false)$/i, EO = /^[^A-Z]*$/, IO = /^[^a-z]*$/, ii = B("$ZodCheck", (e, t) => {
    var i;
    e._zod ?? (e._zod = {}), e._zod.def = t, (i = e._zod).onattach ?? (i.onattach = []);
  }), Nf = {
    number: "number",
    bigint: "bigint",
    object: "date"
  }, bf = B("$ZodCheckLessThan", (e, t) => {
    ii.init(e, t);
    const i = Nf[typeof t.value];
    e._zod.onattach.push((o) => {
      const n = o._zod.bag, s = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      t.value < s && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
    }), e._zod.check = (o) => {
      (t.inclusive ? o.value <= t.value : o.value < t.value) || o.issues.push({
        origin: i,
        code: "too_big",
        maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
        input: o.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    };
  }), vf = B("$ZodCheckGreaterThan", (e, t) => {
    ii.init(e, t);
    const i = Nf[typeof t.value];
    e._zod.onattach.push((o) => {
      const n = o._zod.bag, s = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      t.value > s && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
    }), e._zod.check = (o) => {
      (t.inclusive ? o.value >= t.value : o.value > t.value) || o.issues.push({
        origin: i,
        code: "too_small",
        minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
        input: o.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    };
  }), OO = B("$ZodCheckMultipleOf", (e, t) => {
    ii.init(e, t), e._zod.onattach.push((i) => {
      var o;
      (o = i._zod.bag).multipleOf ?? (o.multipleOf = t.value);
    }), e._zod.check = (i) => {
      if (typeof i.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
      (typeof i.value == "bigint" ? i.value % t.value === BigInt(0) : SI(i.value, t.value) === 0) || i.issues.push({
        origin: typeof i.value,
        code: "not_multiple_of",
        divisor: t.value,
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), RO = B("$ZodCheckNumberFormat", (e, t) => {
    var _a3;
    ii.init(e, t), t.format = t.format || "float64";
    const i = (_a3 = t.format) == null ? void 0 : _a3.includes("int"), o = i ? "int" : "number", [n, s] = LI[t.format];
    e._zod.onattach.push((l) => {
      const h = l._zod.bag;
      h.format = t.format, h.minimum = n, h.maximum = s, i && (h.pattern = gO);
    }), e._zod.check = (l) => {
      const h = l.value;
      if (i) {
        if (!Number.isInteger(h)) {
          l.issues.push({
            expected: o,
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
            origin: o,
            inclusive: true,
            continue: !t.abort
          }) : l.issues.push({
            input: h,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: e,
            origin: o,
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
  }), wO = B("$ZodCheckMaxLength", (e, t) => {
    var i;
    ii.init(e, t), (i = e._zod.def).when ?? (i.when = (o) => {
      const n = o.value;
      return !Zc(n) && n.length !== void 0;
    }), e._zod.onattach.push((o) => {
      const n = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      t.maximum < n && (o._zod.bag.maximum = t.maximum);
    }), e._zod.check = (o) => {
      const n = o.value;
      if (n.length <= t.maximum) return;
      const l = Kc(n);
      o.issues.push({
        origin: l,
        code: "too_big",
        maximum: t.maximum,
        inclusive: true,
        input: n,
        inst: e,
        continue: !t.abort
      });
    };
  }), yO = B("$ZodCheckMinLength", (e, t) => {
    var i;
    ii.init(e, t), (i = e._zod.def).when ?? (i.when = (o) => {
      const n = o.value;
      return !Zc(n) && n.length !== void 0;
    }), e._zod.onattach.push((o) => {
      const n = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      t.minimum > n && (o._zod.bag.minimum = t.minimum);
    }), e._zod.check = (o) => {
      const n = o.value;
      if (n.length >= t.minimum) return;
      const l = Kc(n);
      o.issues.push({
        origin: l,
        code: "too_small",
        minimum: t.minimum,
        inclusive: true,
        input: n,
        inst: e,
        continue: !t.abort
      });
    };
  }), SO = B("$ZodCheckLengthEquals", (e, t) => {
    var i;
    ii.init(e, t), (i = e._zod.def).when ?? (i.when = (o) => {
      const n = o.value;
      return !Zc(n) && n.length !== void 0;
    }), e._zod.onattach.push((o) => {
      const n = o._zod.bag;
      n.minimum = t.length, n.maximum = t.length, n.length = t.length;
    }), e._zod.check = (o) => {
      const n = o.value, s = n.length;
      if (s === t.length) return;
      const l = Kc(n), h = s > t.length;
      o.issues.push({
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
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), oa = B("$ZodCheckStringFormat", (e, t) => {
    var i, o;
    ii.init(e, t), e._zod.onattach.push((n) => {
      const s = n._zod.bag;
      s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
    }), t.pattern ? (i = e._zod).check ?? (i.check = (n) => {
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
    }) : (o = e._zod).check ?? (o.check = () => {
    });
  }), AO = B("$ZodCheckRegex", (e, t) => {
    oa.init(e, t), e._zod.check = (i) => {
      t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: i.value,
        pattern: t.pattern.toString(),
        inst: e,
        continue: !t.abort
      });
    };
  }), NO = B("$ZodCheckLowerCase", (e, t) => {
    t.pattern ?? (t.pattern = EO), oa.init(e, t);
  }), bO = B("$ZodCheckUpperCase", (e, t) => {
    t.pattern ?? (t.pattern = IO), oa.init(e, t);
  }), vO = B("$ZodCheckIncludes", (e, t) => {
    ii.init(e, t);
    const i = ea(t.includes), o = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${i}` : i);
    t.pattern = o, e._zod.onattach.push((n) => {
      const s = n._zod.bag;
      s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(o);
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
  }), LO = B("$ZodCheckStartsWith", (e, t) => {
    ii.init(e, t);
    const i = new RegExp(`^${ea(t.prefix)}.*`);
    t.pattern ?? (t.pattern = i), e._zod.onattach.push((o) => {
      const n = o._zod.bag;
      n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(i);
    }), e._zod.check = (o) => {
      o.value.startsWith(t.prefix) || o.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: t.prefix,
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), CO = B("$ZodCheckEndsWith", (e, t) => {
    ii.init(e, t);
    const i = new RegExp(`.*${ea(t.suffix)}$`);
    t.pattern ?? (t.pattern = i), e._zod.onattach.push((o) => {
      const n = o._zod.bag;
      n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(i);
    }), e._zod.check = (o) => {
      o.value.endsWith(t.suffix) || o.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: t.suffix,
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), DO = B("$ZodCheckOverwrite", (e, t) => {
    ii.init(e, t), e._zod.check = (i) => {
      i.value = t.tx(i.value);
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
      const o = t.split(`
`).filter((l) => l), n = Math.min(...o.map((l) => l.length - l.trimStart().length)), s = o.map((l) => l.slice(n)).map((l) => " ".repeat(this.indent * 2) + l);
      for (const l of s) this.content.push(l);
    }
    compile() {
      const t = Function, i = this == null ? void 0 : this.args, n = [
        ...((this == null ? void 0 : this.content) ?? [
          ""
        ]).map((s) => `  ${s}`)
      ];
      return new t(...i, n.join(`
`));
    }
  }
  const MO = {
    major: 4,
    minor: 3,
    patch: 5
  }, mt = B("$ZodType", (e, t) => {
    var _a3;
    var i;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = MO;
    const o = [
      ...e._zod.def.checks ?? []
    ];
    e._zod.traits.has("$ZodCheck") && o.unshift(e);
    for (const n of o) for (const s of n._zod.onattach) s(e);
    if (o.length === 0) (i = e._zod).deferred ?? (i.deferred = []), (_a3 = e._zod.deferred) == null ? void 0 : _a3.push(() => {
      e._zod.run = e._zod.parse;
    });
    else {
      const n = (l, h, d) => {
        let m = gn(l), p;
        for (const I of h) {
          if (I._zod.def.when) {
            if (!I._zod.def.when(l)) continue;
          } else if (m) continue;
          const N = l.issues.length, S = I._zod.check(l);
          if (S instanceof Promise && (d == null ? void 0 : d.async) === false) throw new En();
          if (p || S instanceof Promise) p = (p ?? Promise.resolve()).then(async () => {
            await S, l.issues.length !== N && (m || (m = gn(l, N)));
          });
          else {
            if (l.issues.length === N) continue;
            m || (m = gn(l, N));
          }
        }
        return p ? p.then(() => l) : l;
      }, s = (l, h, d) => {
        if (gn(l)) return l.aborted = true, l;
        const m = n(h, o, d);
        if (m instanceof Promise) {
          if (d.async === false) throw new En();
          return m.then((p) => e._zod.parse(p, d));
        }
        return e._zod.parse(m, d);
      };
      e._zod.run = (l, h) => {
        if (h.skipChecks) return e._zod.parse(l, h);
        if (h.direction === "backward") {
          const m = e._zod.parse({
            value: l.value,
            issues: []
          }, {
            ...h,
            skipChecks: true
          });
          return m instanceof Promise ? m.then((p) => s(p, l, h)) : s(m, l, h);
        }
        const d = e._zod.parse(l, h);
        if (d instanceof Promise) {
          if (h.async === false) throw new En();
          return d.then((m) => n(m, o, h));
        }
        return n(d, o, h);
      };
    }
    Ve(e, "~standard", () => ({
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
          return GI(e, n).then((l) => {
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
  }), Qc = B("$ZodString", (e, t) => {
    var _a3;
    mt.init(e, t), e._zod.pattern = [
      ...((_a3 = e == null ? void 0 : e._zod.bag) == null ? void 0 : _a3.patterns) ?? []
    ].pop() ?? mO(e._zod.bag), e._zod.parse = (i, o) => {
      if (t.coerce) try {
        i.value = String(i.value);
      } catch {
      }
      return typeof i.value == "string" || i.issues.push({
        expected: "string",
        code: "invalid_type",
        input: i.value,
        inst: e
      }), i;
    };
  }), ht = B("$ZodStringFormat", (e, t) => {
    oa.init(e, t), Qc.init(e, t);
  }), PO = B("$ZodGUID", (e, t) => {
    t.pattern ?? (t.pattern = iO), ht.init(e, t);
  }), FO = B("$ZodUUID", (e, t) => {
    if (t.version) {
      const o = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }[t.version];
      if (o === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = Iu(o));
    } else t.pattern ?? (t.pattern = Iu());
    ht.init(e, t);
  }), _O = B("$ZodEmail", (e, t) => {
    t.pattern ?? (t.pattern = oO), ht.init(e, t);
  }), UO = B("$ZodURL", (e, t) => {
    ht.init(e, t), e._zod.check = (i) => {
      try {
        const o = i.value.trim(), n = new URL(o);
        t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || i.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: t.hostname.source,
          input: i.value,
          inst: e,
          continue: !t.abort
        })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || i.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: t.protocol.source,
          input: i.value,
          inst: e,
          continue: !t.abort
        })), t.normalize ? i.value = n.href : i.value = o;
        return;
      } catch {
        i.issues.push({
          code: "invalid_format",
          format: "url",
          input: i.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  }), kO = B("$ZodEmoji", (e, t) => {
    t.pattern ?? (t.pattern = rO()), ht.init(e, t);
  }), WO = B("$ZodNanoID", (e, t) => {
    t.pattern ?? (t.pattern = eO), ht.init(e, t);
  }), GO = B("$ZodCUID", (e, t) => {
    t.pattern ?? (t.pattern = qI), ht.init(e, t);
  }), BO = B("$ZodCUID2", (e, t) => {
    t.pattern ?? (t.pattern = KI), ht.init(e, t);
  }), jO = B("$ZodULID", (e, t) => {
    t.pattern ?? (t.pattern = JI), ht.init(e, t);
  }), xO = B("$ZodXID", (e, t) => {
    t.pattern ?? (t.pattern = XI), ht.init(e, t);
  }), YO = B("$ZodKSUID", (e, t) => {
    t.pattern ?? (t.pattern = QI), ht.init(e, t);
  }), zO = B("$ZodISODateTime", (e, t) => {
    t.pattern ?? (t.pattern = pO(t)), ht.init(e, t);
  }), $O = B("$ZodISODate", (e, t) => {
    t.pattern ?? (t.pattern = fO), ht.init(e, t);
  }), VO = B("$ZodISOTime", (e, t) => {
    t.pattern ?? (t.pattern = dO(t)), ht.init(e, t);
  }), ZO = B("$ZodISODuration", (e, t) => {
    t.pattern ?? (t.pattern = tO), ht.init(e, t);
  }), qO = B("$ZodIPv4", (e, t) => {
    t.pattern ?? (t.pattern = sO), ht.init(e, t), e._zod.bag.format = "ipv4";
  }), KO = B("$ZodIPv6", (e, t) => {
    t.pattern ?? (t.pattern = aO), ht.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (i) => {
      try {
        new URL(`http://[${i.value}]`);
      } catch {
        i.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: i.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  }), JO = B("$ZodCIDRv4", (e, t) => {
    t.pattern ?? (t.pattern = cO), ht.init(e, t);
  }), XO = B("$ZodCIDRv6", (e, t) => {
    t.pattern ?? (t.pattern = lO), ht.init(e, t), e._zod.check = (i) => {
      const o = i.value.split("/");
      try {
        if (o.length !== 2) throw new Error();
        const [n, s] = o;
        if (!s) throw new Error();
        const l = Number(s);
        if (`${l}` !== s) throw new Error();
        if (l < 0 || l > 128) throw new Error();
        new URL(`http://[${n}]`);
      } catch {
        i.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: i.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  });
  function Lf(e) {
    if (e === "") return true;
    if (e.length % 4 !== 0) return false;
    try {
      return atob(e), true;
    } catch {
      return false;
    }
  }
  const QO = B("$ZodBase64", (e, t) => {
    t.pattern ?? (t.pattern = uO), ht.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (i) => {
      Lf(i.value) || i.issues.push({
        code: "invalid_format",
        format: "base64",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    };
  });
  function eR(e) {
    if (!wf.test(e)) return false;
    const t = e.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), i = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
    return Lf(i);
  }
  const tR = B("$ZodBase64URL", (e, t) => {
    t.pattern ?? (t.pattern = wf), ht.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (i) => {
      eR(i.value) || i.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), iR = B("$ZodE164", (e, t) => {
    t.pattern ?? (t.pattern = hO), ht.init(e, t);
  });
  function oR(e, t = null) {
    try {
      const i = e.split(".");
      if (i.length !== 3) return false;
      const [o] = i;
      if (!o) return false;
      const n = JSON.parse(atob(o));
      return !("typ" in n && (n == null ? void 0 : n.typ) !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
    } catch {
      return false;
    }
  }
  const nR = B("$ZodJWT", (e, t) => {
    ht.init(e, t), e._zod.check = (i) => {
      oR(i.value, t.alg) || i.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: i.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), Cf = B("$ZodNumber", (e, t) => {
    mt.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Af, e._zod.parse = (i, o) => {
      if (t.coerce) try {
        i.value = Number(i.value);
      } catch {
      }
      const n = i.value;
      if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n)) return i;
      const s = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
      return i.issues.push({
        expected: "number",
        code: "invalid_type",
        input: n,
        inst: e,
        ...s ? {
          received: s
        } : {}
      }), i;
    };
  }), rR = B("$ZodNumberFormat", (e, t) => {
    RO.init(e, t), Cf.init(e, t);
  }), sR = B("$ZodBoolean", (e, t) => {
    mt.init(e, t), e._zod.pattern = TO, e._zod.parse = (i, o) => {
      if (t.coerce) try {
        i.value = !!i.value;
      } catch {
      }
      const n = i.value;
      return typeof n == "boolean" || i.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: n,
        inst: e
      }), i;
    };
  }), aR = B("$ZodUnknown", (e, t) => {
    mt.init(e, t), e._zod.parse = (i) => i;
  }), cR = B("$ZodNever", (e, t) => {
    mt.init(e, t), e._zod.parse = (i, o) => (i.issues.push({
      expected: "never",
      code: "invalid_type",
      input: i.value,
      inst: e
    }), i);
  });
  function Ou(e, t, i) {
    e.issues.length && t.issues.push(...Tn(i, e.issues)), t.value[i] = e.value;
  }
  const lR = B("$ZodArray", (e, t) => {
    mt.init(e, t), e._zod.parse = (i, o) => {
      const n = i.value;
      if (!Array.isArray(n)) return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), i;
      i.value = Array(n.length);
      const s = [];
      for (let l = 0; l < n.length; l++) {
        const h = n[l], d = t.element._zod.run({
          value: h,
          issues: []
        }, o);
        d instanceof Promise ? s.push(d.then((m) => Ou(m, i, l))) : Ou(d, i, l);
      }
      return s.length ? Promise.all(s).then(() => i) : i;
    };
  });
  function Rs(e, t, i, o, n) {
    if (e.issues.length) {
      if (n && !(i in o)) return;
      t.issues.push(...Tn(i, e.issues));
    }
    e.value === void 0 ? i in o && (t.value[i] = void 0) : t.value[i] = e.value;
  }
  function Df(e) {
    var _a3, _b3, _c2, _d2;
    const t = Object.keys(e.shape);
    for (const o of t) if (!((_d2 = (_c2 = (_b3 = (_a3 = e.shape) == null ? void 0 : _a3[o]) == null ? void 0 : _b3._zod) == null ? void 0 : _c2.traits) == null ? void 0 : _d2.has("$ZodType"))) throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
    const i = vI(e.shape);
    return {
      ...e,
      keys: t,
      keySet: new Set(t),
      numKeys: t.length,
      optionalKeys: new Set(i)
    };
  }
  function Hf(e, t, i, o, n, s) {
    const l = [], h = n.keySet, d = n.catchall._zod, m = d.def.type, p = d.optout === "optional";
    for (const I in t) {
      if (h.has(I)) continue;
      if (m === "never") {
        l.push(I);
        continue;
      }
      const N = d.run({
        value: t[I],
        issues: []
      }, o);
      N instanceof Promise ? e.push(N.then((S) => Rs(S, i, I, t, p))) : Rs(N, i, I, t, p);
    }
    return l.length && i.issues.push({
      code: "unrecognized_keys",
      keys: l,
      input: t,
      inst: s
    }), e.length ? Promise.all(e).then(() => i) : i;
  }
  const uR = B("$ZodObject", (e, t) => {
    var _a3;
    if (mt.init(e, t), !((_a3 = Object.getOwnPropertyDescriptor(t, "shape")) == null ? void 0 : _a3.get)) {
      const h = t.shape;
      Object.defineProperty(t, "shape", {
        get: () => {
          const d = {
            ...h
          };
          return Object.defineProperty(t, "shape", {
            value: d
          }), d;
        }
      });
    }
    const o = Vc(() => Df(t));
    Ve(e._zod, "propValues", () => {
      const h = t.shape, d = {};
      for (const m in h) {
        const p = h[m]._zod;
        if (p.values) {
          d[m] ?? (d[m] = /* @__PURE__ */ new Set());
          for (const I of p.values) d[m].add(I);
        }
      }
      return d;
    });
    const n = Os, s = t.catchall;
    let l;
    e._zod.parse = (h, d) => {
      l ?? (l = o.value);
      const m = h.value;
      if (!n(m)) return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: m,
        inst: e
      }), h;
      h.value = {};
      const p = [], I = l.shape;
      for (const N of l.keys) {
        const S = I[N], M = S._zod.optout === "optional", D = S._zod.run({
          value: m[N],
          issues: []
        }, d);
        D instanceof Promise ? p.push(D.then((ie) => Rs(ie, h, N, m, M))) : Rs(D, h, N, m, M);
      }
      return s ? Hf(p, m, h, d, o.value, e) : p.length ? Promise.all(p).then(() => h) : h;
    };
  }), hR = B("$ZodObjectJIT", (e, t) => {
    uR.init(e, t);
    const i = e._zod.parse, o = Vc(() => Df(t)), n = (N) => {
      var _a3, _b3;
      const S = new HO([
        "shape",
        "payload",
        "ctx"
      ]), M = o.value, D = (G) => {
        const _ = Eu(G);
        return `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`;
      };
      S.write("const input = payload.value;");
      const ie = /* @__PURE__ */ Object.create(null);
      let Q = 0;
      for (const G of M.keys) ie[G] = `key_${Q++}`;
      S.write("const newResult = {};");
      for (const G of M.keys) {
        const _ = ie[G], re = Eu(G), se = ((_b3 = (_a3 = N[G]) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout) === "optional";
        S.write(`const ${_} = ${D(G)};`), se ? S.write(`
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
        
      `) : S.write(`
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
      S.write("payload.value = newResult;"), S.write("return payload;");
      const Y = S.compile();
      return (G, _) => Y(N, G, _);
    };
    let s;
    const l = Os, h = !mf.jitless, m = h && NI.value, p = t.catchall;
    let I;
    e._zod.parse = (N, S) => {
      I ?? (I = o.value);
      const M = N.value;
      return l(M) ? h && m && (S == null ? void 0 : S.async) === false && S.jitless !== true ? (s || (s = n(t.shape)), N = s(N, S), p ? Hf([], M, N, S, I, e) : N) : i(N, S) : (N.issues.push({
        expected: "object",
        code: "invalid_type",
        input: M,
        inst: e
      }), N);
    };
  });
  function Ru(e, t, i, o) {
    for (const s of e) if (s.issues.length === 0) return t.value = s.value, t;
    const n = e.filter((s) => !gn(s));
    return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: i,
      errors: e.map((s) => s.issues.map((l) => Do(l, o, Co())))
    }), t);
  }
  const fR = B("$ZodUnion", (e, t) => {
    mt.init(e, t), Ve(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), Ve(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), Ve(e._zod, "values", () => {
      if (t.options.every((n) => n._zod.values)) return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
    }), Ve(e._zod, "pattern", () => {
      if (t.options.every((n) => n._zod.pattern)) {
        const n = t.options.map((s) => s._zod.pattern);
        return new RegExp(`^(${n.map((s) => qc(s.source)).join("|")})$`);
      }
    });
    const i = t.options.length === 1, o = t.options[0]._zod.run;
    e._zod.parse = (n, s) => {
      if (i) return o(n, s);
      let l = false;
      const h = [];
      for (const d of t.options) {
        const m = d._zod.run({
          value: n.value,
          issues: []
        }, s);
        if (m instanceof Promise) h.push(m), l = true;
        else {
          if (m.issues.length === 0) return m;
          h.push(m);
        }
      }
      return l ? Promise.all(h).then((d) => Ru(d, n, e, s)) : Ru(h, n, e, s);
    };
  }), dR = B("$ZodIntersection", (e, t) => {
    mt.init(e, t), e._zod.parse = (i, o) => {
      const n = i.value, s = t.left._zod.run({
        value: n,
        issues: []
      }, o), l = t.right._zod.run({
        value: n,
        issues: []
      }, o);
      return s instanceof Promise || l instanceof Promise ? Promise.all([
        s,
        l
      ]).then(([d, m]) => wu(i, d, m)) : wu(i, s, l);
    };
  });
  function Tc(e, t) {
    if (e === t) return {
      valid: true,
      data: e
    };
    if (e instanceof Date && t instanceof Date && +e == +t) return {
      valid: true,
      data: e
    };
    if (Hn(e) && Hn(t)) {
      const i = Object.keys(t), o = Object.keys(e).filter((s) => i.indexOf(s) !== -1), n = {
        ...e,
        ...t
      };
      for (const s of o) {
        const l = Tc(e[s], t[s]);
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
      const i = [];
      for (let o = 0; o < e.length; o++) {
        const n = e[o], s = t[o], l = Tc(n, s);
        if (!l.valid) return {
          valid: false,
          mergeErrorPath: [
            o,
            ...l.mergeErrorPath
          ]
        };
        i.push(l.data);
      }
      return {
        valid: true,
        data: i
      };
    }
    return {
      valid: false,
      mergeErrorPath: []
    };
  }
  function wu(e, t, i) {
    const o = /* @__PURE__ */ new Map();
    let n;
    for (const h of t.issues) if (h.code === "unrecognized_keys") {
      n ?? (n = h);
      for (const d of h.keys) o.has(d) || o.set(d, {}), o.get(d).l = true;
    } else e.issues.push(h);
    for (const h of i.issues) if (h.code === "unrecognized_keys") for (const d of h.keys) o.has(d) || o.set(d, {}), o.get(d).r = true;
    else e.issues.push(h);
    const s = [
      ...o
    ].filter(([, h]) => h.l && h.r).map(([h]) => h);
    if (s.length && n && e.issues.push({
      ...n,
      keys: s
    }), gn(e)) return e;
    const l = Tc(t.value, i.value);
    if (!l.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
    return e.value = l.data, e;
  }
  const pR = B("$ZodRecord", (e, t) => {
    mt.init(e, t), e._zod.parse = (i, o) => {
      const n = i.value;
      if (!Hn(n)) return i.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), i;
      const s = [], l = t.keyType._zod.values;
      if (l) {
        i.value = {};
        const h = /* @__PURE__ */ new Set();
        for (const m of l) if (typeof m == "string" || typeof m == "number" || typeof m == "symbol") {
          h.add(typeof m == "number" ? m.toString() : m);
          const p = t.valueType._zod.run({
            value: n[m],
            issues: []
          }, o);
          p instanceof Promise ? s.push(p.then((I) => {
            I.issues.length && i.issues.push(...Tn(m, I.issues)), i.value[m] = I.value;
          })) : (p.issues.length && i.issues.push(...Tn(m, p.issues)), i.value[m] = p.value);
        }
        let d;
        for (const m in n) h.has(m) || (d = d ?? [], d.push(m));
        d && d.length > 0 && i.issues.push({
          code: "unrecognized_keys",
          input: n,
          inst: e,
          keys: d
        });
      } else {
        i.value = {};
        for (const h of Reflect.ownKeys(n)) {
          if (h === "__proto__") continue;
          let d = t.keyType._zod.run({
            value: h,
            issues: []
          }, o);
          if (d instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (typeof h == "string" && Af.test(h) && d.issues.length && d.issues.some((I) => I.code === "invalid_type" && I.expected === "number")) {
            const I = t.keyType._zod.run({
              value: Number(h),
              issues: []
            }, o);
            if (I instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            I.issues.length === 0 && (d = I);
          }
          if (d.issues.length) {
            t.mode === "loose" ? i.value[h] = n[h] : i.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: d.issues.map((I) => Do(I, o, Co())),
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
          }, o);
          p instanceof Promise ? s.push(p.then((I) => {
            I.issues.length && i.issues.push(...Tn(h, I.issues)), i.value[d.value] = I.value;
          })) : (p.issues.length && i.issues.push(...Tn(h, p.issues)), i.value[d.value] = p.value);
        }
      }
      return s.length ? Promise.all(s).then(() => i) : i;
    };
  }), mR = B("$ZodEnum", (e, t) => {
    mt.init(e, t);
    const i = gf(t.entries), o = new Set(i);
    e._zod.values = o, e._zod.pattern = new RegExp(`^(${i.filter((n) => bI.has(typeof n)).map((n) => typeof n == "string" ? ea(n) : n.toString()).join("|")})$`), e._zod.parse = (n, s) => {
      const l = n.value;
      return o.has(l) || n.issues.push({
        code: "invalid_value",
        values: i,
        input: l,
        inst: e
      }), n;
    };
  }), gR = B("$ZodTransform", (e, t) => {
    mt.init(e, t), e._zod.parse = (i, o) => {
      if (o.direction === "backward") throw new pf(e.constructor.name);
      const n = t.transform(i.value, i);
      if (o.async) return (n instanceof Promise ? n : Promise.resolve(n)).then((l) => (i.value = l, i));
      if (n instanceof Promise) throw new En();
      return i.value = n, i;
    };
  });
  function yu(e, t) {
    return e.issues.length && t === void 0 ? {
      issues: [],
      value: void 0
    } : e;
  }
  const Mf = B("$ZodOptional", (e, t) => {
    mt.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Ve(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...t.innerType._zod.values,
      void 0
    ]) : void 0), Ve(e._zod, "pattern", () => {
      const i = t.innerType._zod.pattern;
      return i ? new RegExp(`^(${qc(i.source)})?$`) : void 0;
    }), e._zod.parse = (i, o) => {
      if (t.innerType._zod.optin === "optional") {
        const n = t.innerType._zod.run(i, o);
        return n instanceof Promise ? n.then((s) => yu(s, i.value)) : yu(n, i.value);
      }
      return i.value === void 0 ? i : t.innerType._zod.run(i, o);
    };
  }), TR = B("$ZodExactOptional", (e, t) => {
    Mf.init(e, t), Ve(e._zod, "values", () => t.innerType._zod.values), Ve(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (i, o) => t.innerType._zod.run(i, o);
  }), ER = B("$ZodNullable", (e, t) => {
    mt.init(e, t), Ve(e._zod, "optin", () => t.innerType._zod.optin), Ve(e._zod, "optout", () => t.innerType._zod.optout), Ve(e._zod, "pattern", () => {
      const i = t.innerType._zod.pattern;
      return i ? new RegExp(`^(${qc(i.source)}|null)$`) : void 0;
    }), Ve(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...t.innerType._zod.values,
      null
    ]) : void 0), e._zod.parse = (i, o) => i.value === null ? i : t.innerType._zod.run(i, o);
  }), IR = B("$ZodDefault", (e, t) => {
    mt.init(e, t), e._zod.optin = "optional", Ve(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, o) => {
      if (o.direction === "backward") return t.innerType._zod.run(i, o);
      if (i.value === void 0) return i.value = t.defaultValue, i;
      const n = t.innerType._zod.run(i, o);
      return n instanceof Promise ? n.then((s) => Su(s, t)) : Su(n, t);
    };
  });
  function Su(e, t) {
    return e.value === void 0 && (e.value = t.defaultValue), e;
  }
  const OR = B("$ZodPrefault", (e, t) => {
    mt.init(e, t), e._zod.optin = "optional", Ve(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, o) => (o.direction === "backward" || i.value === void 0 && (i.value = t.defaultValue), t.innerType._zod.run(i, o));
  }), RR = B("$ZodNonOptional", (e, t) => {
    mt.init(e, t), Ve(e._zod, "values", () => {
      const i = t.innerType._zod.values;
      return i ? new Set([
        ...i
      ].filter((o) => o !== void 0)) : void 0;
    }), e._zod.parse = (i, o) => {
      const n = t.innerType._zod.run(i, o);
      return n instanceof Promise ? n.then((s) => Au(s, e)) : Au(n, e);
    };
  });
  function Au(e, t) {
    return !e.issues.length && e.value === void 0 && e.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: e.value,
      inst: t
    }), e;
  }
  const wR = B("$ZodCatch", (e, t) => {
    mt.init(e, t), Ve(e._zod, "optin", () => t.innerType._zod.optin), Ve(e._zod, "optout", () => t.innerType._zod.optout), Ve(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (i, o) => {
      if (o.direction === "backward") return t.innerType._zod.run(i, o);
      const n = t.innerType._zod.run(i, o);
      return n instanceof Promise ? n.then((s) => (i.value = s.value, s.issues.length && (i.value = t.catchValue({
        ...i,
        error: {
          issues: s.issues.map((l) => Do(l, o, Co()))
        },
        input: i.value
      }), i.issues = []), i)) : (i.value = n.value, n.issues.length && (i.value = t.catchValue({
        ...i,
        error: {
          issues: n.issues.map((s) => Do(s, o, Co()))
        },
        input: i.value
      }), i.issues = []), i);
    };
  }), yR = B("$ZodPipe", (e, t) => {
    mt.init(e, t), Ve(e._zod, "values", () => t.in._zod.values), Ve(e._zod, "optin", () => t.in._zod.optin), Ve(e._zod, "optout", () => t.out._zod.optout), Ve(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (i, o) => {
      if (o.direction === "backward") {
        const s = t.out._zod.run(i, o);
        return s instanceof Promise ? s.then((l) => Vr(l, t.in, o)) : Vr(s, t.in, o);
      }
      const n = t.in._zod.run(i, o);
      return n instanceof Promise ? n.then((s) => Vr(s, t.out, o)) : Vr(n, t.out, o);
    };
  });
  function Vr(e, t, i) {
    return e.issues.length ? (e.aborted = true, e) : t._zod.run({
      value: e.value,
      issues: e.issues
    }, i);
  }
  const SR = B("$ZodReadonly", (e, t) => {
    mt.init(e, t), Ve(e._zod, "propValues", () => t.innerType._zod.propValues), Ve(e._zod, "values", () => t.innerType._zod.values), Ve(e._zod, "optin", () => {
      var _a3, _b3;
      return (_b3 = (_a3 = t.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optin;
    }), Ve(e._zod, "optout", () => {
      var _a3, _b3;
      return (_b3 = (_a3 = t.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout;
    }), e._zod.parse = (i, o) => {
      if (o.direction === "backward") return t.innerType._zod.run(i, o);
      const n = t.innerType._zod.run(i, o);
      return n instanceof Promise ? n.then(Nu) : Nu(n);
    };
  });
  function Nu(e) {
    return e.value = Object.freeze(e.value), e;
  }
  const AR = B("$ZodCustom", (e, t) => {
    ii.init(e, t), mt.init(e, t), e._zod.parse = (i, o) => i, e._zod.check = (i) => {
      const o = i.value, n = t.fn(o);
      if (n instanceof Promise) return n.then((s) => bu(s, i, o, e));
      bu(n, i, o, e);
    };
  });
  function bu(e, t, i, o) {
    if (!e) {
      const n = {
        code: "custom",
        input: i,
        inst: o,
        path: [
          ...o._zod.def.path ?? []
        ],
        continue: !o._zod.def.abort
      };
      o._zod.def.params && (n.params = o._zod.def.params), t.issues.push(yr(n));
    }
  }
  var vu;
  class NR {
    constructor() {
      this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
    }
    add(t, ...i) {
      const o = i[0];
      return this._map.set(t, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, t), this;
    }
    clear() {
      return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
    }
    remove(t) {
      const i = this._map.get(t);
      return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(t), this;
    }
    get(t) {
      const i = t._zod.parent;
      if (i) {
        const o = {
          ...this.get(i) ?? {}
        };
        delete o.id;
        const n = {
          ...o,
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
  function bR() {
    return new NR();
  }
  (vu = globalThis).__zod_globalRegistry ?? (vu.__zod_globalRegistry = bR());
  const ir = globalThis.__zod_globalRegistry;
  function vR(e, t) {
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
  function CR(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function DR(e, t) {
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
  function MR(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v7",
      ...Re(t)
    });
  }
  function PR(e, t) {
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
  function _R(e, t) {
    return new e({
      type: "string",
      format: "nanoid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function UR(e, t) {
    return new e({
      type: "string",
      format: "cuid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function kR(e, t) {
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
  function GR(e, t) {
    return new e({
      type: "string",
      format: "xid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function BR(e, t) {
    return new e({
      type: "string",
      format: "ksuid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function jR(e, t) {
    return new e({
      type: "string",
      format: "ipv4",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function xR(e, t) {
    return new e({
      type: "string",
      format: "ipv6",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function YR(e, t) {
    return new e({
      type: "string",
      format: "cidrv4",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function zR(e, t) {
    return new e({
      type: "string",
      format: "cidrv6",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function $R(e, t) {
    return new e({
      type: "string",
      format: "base64",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function VR(e, t) {
    return new e({
      type: "string",
      format: "base64url",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function ZR(e, t) {
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
  function KR(e, t) {
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
  function JR(e, t) {
    return new e({
      type: "string",
      format: "date",
      check: "string_format",
      ...Re(t)
    });
  }
  function XR(e, t) {
    return new e({
      type: "string",
      format: "time",
      check: "string_format",
      precision: null,
      ...Re(t)
    });
  }
  function QR(e, t) {
    return new e({
      type: "string",
      format: "duration",
      check: "string_format",
      ...Re(t)
    });
  }
  function ew(e, t) {
    return new e({
      type: "number",
      checks: [],
      ...Re(t)
    });
  }
  function tw(e, t) {
    return new e({
      type: "number",
      check: "number_format",
      abort: false,
      format: "safeint",
      ...Re(t)
    });
  }
  function iw(e, t) {
    return new e({
      type: "boolean",
      ...Re(t)
    });
  }
  function ow(e) {
    return new e({
      type: "unknown"
    });
  }
  function nw(e, t) {
    return new e({
      type: "never",
      ...Re(t)
    });
  }
  function Cu(e, t) {
    return new bf({
      check: "less_than",
      ...Re(t),
      value: e,
      inclusive: false
    });
  }
  function _a(e, t) {
    return new bf({
      check: "less_than",
      ...Re(t),
      value: e,
      inclusive: true
    });
  }
  function Du(e, t) {
    return new vf({
      check: "greater_than",
      ...Re(t),
      value: e,
      inclusive: false
    });
  }
  function Ua(e, t) {
    return new vf({
      check: "greater_than",
      ...Re(t),
      value: e,
      inclusive: true
    });
  }
  function Hu(e, t) {
    return new OO({
      check: "multiple_of",
      ...Re(t),
      value: e
    });
  }
  function Pf(e, t) {
    return new wO({
      check: "max_length",
      ...Re(t),
      maximum: e
    });
  }
  function ws(e, t) {
    return new yO({
      check: "min_length",
      ...Re(t),
      minimum: e
    });
  }
  function Ff(e, t) {
    return new SO({
      check: "length_equals",
      ...Re(t),
      length: e
    });
  }
  function rw(e, t) {
    return new AO({
      check: "string_format",
      format: "regex",
      ...Re(t),
      pattern: e
    });
  }
  function sw(e) {
    return new NO({
      check: "string_format",
      format: "lowercase",
      ...Re(e)
    });
  }
  function aw(e) {
    return new bO({
      check: "string_format",
      format: "uppercase",
      ...Re(e)
    });
  }
  function cw(e, t) {
    return new vO({
      check: "string_format",
      format: "includes",
      ...Re(t),
      includes: e
    });
  }
  function lw(e, t) {
    return new LO({
      check: "string_format",
      format: "starts_with",
      ...Re(t),
      prefix: e
    });
  }
  function uw(e, t) {
    return new CO({
      check: "string_format",
      format: "ends_with",
      ...Re(t),
      suffix: e
    });
  }
  function xn(e) {
    return new DO({
      check: "overwrite",
      tx: e
    });
  }
  function hw(e) {
    return xn((t) => t.normalize(e));
  }
  function fw() {
    return xn((e) => e.trim());
  }
  function dw() {
    return xn((e) => e.toLowerCase());
  }
  function pw() {
    return xn((e) => e.toUpperCase());
  }
  function mw() {
    return xn((e) => AI(e));
  }
  function gw(e, t, i) {
    return new e({
      type: "array",
      element: t,
      ...Re(i)
    });
  }
  function Tw(e, t, i) {
    const o = Re(i);
    return o.abort ?? (o.abort = true), new e({
      type: "custom",
      check: "custom",
      fn: t,
      ...o
    });
  }
  function Ew(e, t, i) {
    return new e({
      type: "custom",
      check: "custom",
      fn: t,
      ...Re(i)
    });
  }
  function Iw(e) {
    const t = Ow((i) => (i.addIssue = (o) => {
      if (typeof o == "string") i.issues.push(yr(o, i.value, t._zod.def));
      else {
        const n = o;
        n.fatal && (n.continue = false), n.code ?? (n.code = "custom"), n.input ?? (n.input = i.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), i.issues.push(yr(n));
      }
    }, e(i.value, i)));
    return t;
  }
  function Ow(e, t) {
    const i = new ii({
      check: "custom",
      ...Re(t)
    });
    return i._zod.check = e, i;
  }
  function _f(e) {
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
  function wt(e, t, i = {
    path: [],
    schemaPath: []
  }) {
    var _a3, _b3;
    var o;
    const n = e._zod.def, s = t.seen.get(e);
    if (s) return s.count++, i.schemaPath.includes(e) && (s.cycle = i.path), s.schema;
    const l = {
      schema: {},
      count: 1,
      cycle: void 0,
      path: i.path
    };
    t.seen.set(e, l);
    const h = (_b3 = (_a3 = e._zod).toJSONSchema) == null ? void 0 : _b3.call(_a3);
    if (h) l.schema = h;
    else {
      const p = {
        ...i,
        schemaPath: [
          ...i.schemaPath,
          e
        ],
        path: i.path
      };
      if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, l.schema, p);
      else {
        const N = l.schema, S = t.processors[n.type];
        if (!S) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);
        S(e, t, N, p);
      }
      const I = e._zod.parent;
      I && (l.ref || (l.ref = I), wt(I, t, p), t.seen.get(I).isParent = true);
    }
    const d = t.metadataRegistry.get(e);
    return d && Object.assign(l.schema, d), t.io === "input" && zt(e) && (delete l.schema.examples, delete l.schema.default), t.io === "input" && l.schema._prefault && ((o = l.schema).default ?? (o.default = l.schema._prefault)), delete l.schema._prefault, t.seen.get(e).schema;
  }
  function Uf(e, t) {
    var _a3, _b3, _c2, _d2;
    const i = e.seen.get(t);
    if (!i) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const o = /* @__PURE__ */ new Map();
    for (const l of e.seen.entries()) {
      const h = (_a3 = e.metadataRegistry.get(l[0])) == null ? void 0 : _a3.id;
      if (h) {
        const d = o.get(h);
        if (d && d !== l[0]) throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
        o.set(h, l[0]);
      }
    }
    const n = (l) => {
      var _a4;
      const h = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        const I = (_a4 = e.external.registry.get(l[0])) == null ? void 0 : _a4.id, N = e.external.uri ?? ((M) => M);
        if (I) return {
          ref: N(I)
        };
        const S = l[1].defId ?? l[1].schema.id ?? `schema${e.counter++}`;
        return l[1].defId = S, {
          defId: S,
          ref: `${N("__shared")}#/${h}/${S}`
        };
      }
      if (l[1] === i) return {
        ref: "#"
      };
      const m = `#/${h}/`, p = l[1].schema.id ?? `__schema${e.counter++}`;
      return {
        defId: p,
        ref: m + p
      };
    }, s = (l) => {
      if (l[1].schema.$ref) return;
      const h = l[1], { ref: d, defId: m } = n(l);
      h.def = {
        ...h.schema
      }, m && (h.defId = m);
      const p = h.schema;
      for (const I in p) delete p[I];
      p.$ref = d;
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
        const m = (_c2 = e.external.registry.get(l[0])) == null ? void 0 : _c2.id;
        if (t !== l[0] && m) {
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
  function kf(e, t) {
    var _a3, _b3, _c2;
    const i = e.seen.get(t);
    if (!i) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const o = (l) => {
      const h = e.seen.get(l);
      if (h.ref === null) return;
      const d = h.def ?? h.schema, m = {
        ...d
      }, p = h.ref;
      if (h.ref = null, p) {
        o(p);
        const N = e.seen.get(p), S = N.schema;
        if (S.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (d.allOf = d.allOf ?? [], d.allOf.push(S)) : Object.assign(d, S), Object.assign(d, m), l._zod.parent === p) for (const D in d) D === "$ref" || D === "allOf" || D in m || delete d[D];
        if (S.$ref) for (const D in d) D === "$ref" || D === "allOf" || D in N.def && JSON.stringify(d[D]) === JSON.stringify(N.def[D]) && delete d[D];
      }
      const I = l._zod.parent;
      if (I && I !== p) {
        o(I);
        const N = e.seen.get(I);
        if ((N == null ? void 0 : N.schema.$ref) && (d.$ref = N.schema.$ref, N.def)) for (const S in d) S === "$ref" || S === "allOf" || S in N.def && JSON.stringify(d[S]) === JSON.stringify(N.def[S]) && delete d[S];
      }
      e.override({
        zodSchema: l,
        jsonSchema: d,
        path: h.path ?? []
      });
    };
    for (const l of [
      ...e.seen.entries()
    ].reverse()) o(l[0]);
    const n = {};
    if (e.target === "draft-2020-12" ? n.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? n.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? n.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (_a3 = e.external) == null ? void 0 : _a3.uri) {
      const l = (_b3 = e.external.registry.get(t)) == null ? void 0 : _b3.id;
      if (!l) throw new Error("Schema is missing an `id` property");
      n.$id = e.external.uri(l);
    }
    Object.assign(n, i.def ?? i.schema);
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
            input: ys(t, "input", e.processors),
            output: ys(t, "output", e.processors)
          }
        },
        enumerable: false,
        writable: false
      }), l;
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
  function zt(e, t) {
    const i = t ?? {
      seen: /* @__PURE__ */ new Set()
    };
    if (i.seen.has(e)) return false;
    i.seen.add(e);
    const o = e._zod.def;
    if (o.type === "transform") return true;
    if (o.type === "array") return zt(o.element, i);
    if (o.type === "set") return zt(o.valueType, i);
    if (o.type === "lazy") return zt(o.getter(), i);
    if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault") return zt(o.innerType, i);
    if (o.type === "intersection") return zt(o.left, i) || zt(o.right, i);
    if (o.type === "record" || o.type === "map") return zt(o.keyType, i) || zt(o.valueType, i);
    if (o.type === "pipe") return zt(o.in, i) || zt(o.out, i);
    if (o.type === "object") {
      for (const n in o.shape) if (zt(o.shape[n], i)) return true;
      return false;
    }
    if (o.type === "union") {
      for (const n of o.options) if (zt(n, i)) return true;
      return false;
    }
    if (o.type === "tuple") {
      for (const n of o.items) if (zt(n, i)) return true;
      return !!(o.rest && zt(o.rest, i));
    }
    return false;
  }
  const Rw = (e, t = {}) => (i) => {
    const o = _f({
      ...i,
      processors: t
    });
    return wt(e, o), Uf(o, e), kf(o, e);
  }, ys = (e, t, i = {}) => (o) => {
    const { libraryOptions: n, target: s } = o ?? {}, l = _f({
      ...n ?? {},
      target: s,
      io: t,
      processors: i
    });
    return wt(e, l), Uf(l, e), kf(l, e);
  }, ww = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  }, yw = (e, t, i, o) => {
    const n = i;
    n.type = "string";
    const { minimum: s, maximum: l, format: h, patterns: d, contentEncoding: m } = e._zod.bag;
    if (typeof s == "number" && (n.minLength = s), typeof l == "number" && (n.maxLength = l), h && (n.format = ww[h] ?? h, n.format === "" && delete n.format, h === "time" && delete n.format), m && (n.contentEncoding = m), d && d.size > 0) {
      const p = [
        ...d
      ];
      p.length === 1 ? n.pattern = p[0].source : p.length > 1 && (n.allOf = [
        ...p.map((I) => ({
          ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
            type: "string"
          } : {},
          pattern: I.source
        }))
      ]);
    }
  }, Sw = (e, t, i, o) => {
    const n = i, { minimum: s, maximum: l, format: h, multipleOf: d, exclusiveMaximum: m, exclusiveMinimum: p } = e._zod.bag;
    typeof h == "string" && h.includes("int") ? n.type = "integer" : n.type = "number", typeof p == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.minimum = p, n.exclusiveMinimum = true) : n.exclusiveMinimum = p), typeof s == "number" && (n.minimum = s, typeof p == "number" && t.target !== "draft-04" && (p >= s ? delete n.minimum : delete n.exclusiveMinimum)), typeof m == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.maximum = m, n.exclusiveMaximum = true) : n.exclusiveMaximum = m), typeof l == "number" && (n.maximum = l, typeof m == "number" && t.target !== "draft-04" && (m <= l ? delete n.maximum : delete n.exclusiveMaximum)), typeof d == "number" && (n.multipleOf = d);
  }, Aw = (e, t, i, o) => {
    i.type = "boolean";
  }, Nw = (e, t, i, o) => {
    i.not = {};
  }, bw = (e, t, i, o) => {
  }, vw = (e, t, i, o) => {
    const n = e._zod.def, s = gf(n.entries);
    s.every((l) => typeof l == "number") && (i.type = "number"), s.every((l) => typeof l == "string") && (i.type = "string"), i.enum = s;
  }, Lw = (e, t, i, o) => {
    if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
  }, Cw = (e, t, i, o) => {
    if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
  }, Dw = (e, t, i, o) => {
    const n = i, s = e._zod.def, { minimum: l, maximum: h } = e._zod.bag;
    typeof l == "number" && (n.minItems = l), typeof h == "number" && (n.maxItems = h), n.type = "array", n.items = wt(s.element, t, {
      ...o,
      path: [
        ...o.path,
        "items"
      ]
    });
  }, Hw = (e, t, i, o) => {
    var _a3;
    const n = i, s = e._zod.def;
    n.type = "object", n.properties = {};
    const l = s.shape;
    for (const m in l) n.properties[m] = wt(l[m], t, {
      ...o,
      path: [
        ...o.path,
        "properties",
        m
      ]
    });
    const h = new Set(Object.keys(l)), d = new Set([
      ...h
    ].filter((m) => {
      const p = s.shape[m]._zod;
      return t.io === "input" ? p.optin === void 0 : p.optout === void 0;
    }));
    d.size > 0 && (n.required = Array.from(d)), ((_a3 = s.catchall) == null ? void 0 : _a3._zod.def.type) === "never" ? n.additionalProperties = false : s.catchall ? s.catchall && (n.additionalProperties = wt(s.catchall, t, {
      ...o,
      path: [
        ...o.path,
        "additionalProperties"
      ]
    })) : t.io === "output" && (n.additionalProperties = false);
  }, Mw = (e, t, i, o) => {
    const n = e._zod.def, s = n.inclusive === false, l = n.options.map((h, d) => wt(h, t, {
      ...o,
      path: [
        ...o.path,
        s ? "oneOf" : "anyOf",
        d
      ]
    }));
    s ? i.oneOf = l : i.anyOf = l;
  }, Pw = (e, t, i, o) => {
    const n = e._zod.def, s = wt(n.left, t, {
      ...o,
      path: [
        ...o.path,
        "allOf",
        0
      ]
    }), l = wt(n.right, t, {
      ...o,
      path: [
        ...o.path,
        "allOf",
        1
      ]
    }), h = (m) => "allOf" in m && Object.keys(m).length === 1, d = [
      ...h(s) ? s.allOf : [
        s
      ],
      ...h(l) ? l.allOf : [
        l
      ]
    ];
    i.allOf = d;
  }, Fw = (e, t, i, o) => {
    var _a3;
    const n = i, s = e._zod.def;
    n.type = "object";
    const l = s.keyType, d = (_a3 = l._zod.bag) == null ? void 0 : _a3.patterns;
    if (s.mode === "loose" && d && d.size > 0) {
      const p = wt(s.valueType, t, {
        ...o,
        path: [
          ...o.path,
          "patternProperties",
          "*"
        ]
      });
      n.patternProperties = {};
      for (const I of d) n.patternProperties[I.source] = p;
    } else (t.target === "draft-07" || t.target === "draft-2020-12") && (n.propertyNames = wt(s.keyType, t, {
      ...o,
      path: [
        ...o.path,
        "propertyNames"
      ]
    })), n.additionalProperties = wt(s.valueType, t, {
      ...o,
      path: [
        ...o.path,
        "additionalProperties"
      ]
    });
    const m = l._zod.values;
    if (m) {
      const p = [
        ...m
      ].filter((I) => typeof I == "string" || typeof I == "number");
      p.length > 0 && (n.required = p);
    }
  }, _w = (e, t, i, o) => {
    const n = e._zod.def, s = wt(n.innerType, t, o), l = t.seen.get(e);
    t.target === "openapi-3.0" ? (l.ref = n.innerType, i.nullable = true) : i.anyOf = [
      s,
      {
        type: "null"
      }
    ];
  }, Uw = (e, t, i, o) => {
    const n = e._zod.def;
    wt(n.innerType, t, o);
    const s = t.seen.get(e);
    s.ref = n.innerType;
  }, kw = (e, t, i, o) => {
    const n = e._zod.def;
    wt(n.innerType, t, o);
    const s = t.seen.get(e);
    s.ref = n.innerType, i.default = JSON.parse(JSON.stringify(n.defaultValue));
  }, Ww = (e, t, i, o) => {
    const n = e._zod.def;
    wt(n.innerType, t, o);
    const s = t.seen.get(e);
    s.ref = n.innerType, t.io === "input" && (i._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
  }, Gw = (e, t, i, o) => {
    const n = e._zod.def;
    wt(n.innerType, t, o);
    const s = t.seen.get(e);
    s.ref = n.innerType;
    let l;
    try {
      l = n.catchValue(void 0);
    } catch {
      throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    i.default = l;
  }, Bw = (e, t, i, o) => {
    const n = e._zod.def, s = t.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
    wt(s, t, o);
    const l = t.seen.get(e);
    l.ref = s;
  }, jw = (e, t, i, o) => {
    const n = e._zod.def;
    wt(n.innerType, t, o);
    const s = t.seen.get(e);
    s.ref = n.innerType, i.readOnly = true;
  }, Wf = (e, t, i, o) => {
    const n = e._zod.def;
    wt(n.innerType, t, o);
    const s = t.seen.get(e);
    s.ref = n.innerType;
  }, xw = B("ZodISODateTime", (e, t) => {
    zO.init(e, t), pt.init(e, t);
  });
  function Yw(e) {
    return KR(xw, e);
  }
  const zw = B("ZodISODate", (e, t) => {
    $O.init(e, t), pt.init(e, t);
  });
  function $w(e) {
    return JR(zw, e);
  }
  const Vw = B("ZodISOTime", (e, t) => {
    VO.init(e, t), pt.init(e, t);
  });
  function Zw(e) {
    return XR(Vw, e);
  }
  const qw = B("ZodISODuration", (e, t) => {
    ZO.init(e, t), pt.init(e, t);
  });
  function Kw(e) {
    return QR(qw, e);
  }
  const Jw = (e, t) => {
    Of.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
      format: {
        value: (i) => kI(e, i)
      },
      flatten: {
        value: (i) => UI(e, i)
      },
      addIssue: {
        value: (i) => {
          e.issues.push(i), e.message = JSON.stringify(e.issues, gc, 2);
        }
      },
      addIssues: {
        value: (i) => {
          e.issues.push(...i), e.message = JSON.stringify(e.issues, gc, 2);
        }
      },
      isEmpty: {
        get() {
          return e.issues.length === 0;
        }
      }
    });
  }, Oi = B("ZodError", Jw, {
    Parent: Error
  }), Xw = Jc(Oi), Qw = Xc(Oi), ey = ta(Oi), ty = ia(Oi), iy = BI(Oi), oy = jI(Oi), ny = xI(Oi), ry = YI(Oi), sy = zI(Oi), ay = $I(Oi), cy = VI(Oi), ly = ZI(Oi), gt = B("ZodType", (e, t) => (mt.init(e, t), Object.assign(e["~standard"], {
    jsonSchema: {
      input: ys(e, "input"),
      output: ys(e, "output")
    }
  }), e.toJSONSchema = Rw(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", {
    value: t
  }), e.check = (...i) => e.clone(_o(t, {
    checks: [
      ...t.checks ?? [],
      ...i.map((o) => typeof o == "function" ? {
        _zod: {
          check: o,
          def: {
            check: "custom"
          },
          onattach: []
        }
      } : o)
    ]
  }), {
    parent: true
  }), e.with = e.check, e.clone = (i, o) => Uo(e, i, o), e.brand = () => e, e.register = ((i, o) => (i.add(e, o), e)), e.parse = (i, o) => Xw(e, i, o, {
    callee: e.parse
  }), e.safeParse = (i, o) => ey(e, i, o), e.parseAsync = async (i, o) => Qw(e, i, o, {
    callee: e.parseAsync
  }), e.safeParseAsync = async (i, o) => ty(e, i, o), e.spa = e.safeParseAsync, e.encode = (i, o) => iy(e, i, o), e.decode = (i, o) => oy(e, i, o), e.encodeAsync = async (i, o) => ny(e, i, o), e.decodeAsync = async (i, o) => ry(e, i, o), e.safeEncode = (i, o) => sy(e, i, o), e.safeDecode = (i, o) => ay(e, i, o), e.safeEncodeAsync = async (i, o) => cy(e, i, o), e.safeDecodeAsync = async (i, o) => ly(e, i, o), e.refine = (i, o) => e.check(oS(i, o)), e.superRefine = (i) => e.check(nS(i)), e.overwrite = (i) => e.check(xn(i)), e.optional = () => _u(e), e.exactOptional = () => Yy(e), e.nullable = () => Uu(e), e.nullish = () => _u(Uu(e)), e.nonoptional = (i) => Ky(e, i), e.array = () => Ss(e), e.or = (i) => _y([
    e,
    i
  ]), e.and = (i) => ky(e, i), e.transform = (i) => ku(e, jy(i)), e.default = (i) => Vy(e, i), e.prefault = (i) => qy(e, i), e.catch = (i) => Xy(e, i), e.pipe = (i) => ku(e, i), e.readonly = () => tS(e), e.describe = (i) => {
    const o = e.clone();
    return ir.add(o, {
      description: i
    }), o;
  }, Object.defineProperty(e, "description", {
    get() {
      var _a3;
      return (_a3 = ir.get(e)) == null ? void 0 : _a3.description;
    },
    configurable: true
  }), e.meta = (...i) => {
    if (i.length === 0) return ir.get(e);
    const o = e.clone();
    return ir.add(o, i[0]), o;
  }, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (i) => i(e), e)), Gf = B("_ZodString", (e, t) => {
    Qc.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (o, n, s) => yw(e, o, n);
    const i = e._zod.bag;
    e.format = i.format ?? null, e.minLength = i.minimum ?? null, e.maxLength = i.maximum ?? null, e.regex = (...o) => e.check(rw(...o)), e.includes = (...o) => e.check(cw(...o)), e.startsWith = (...o) => e.check(lw(...o)), e.endsWith = (...o) => e.check(uw(...o)), e.min = (...o) => e.check(ws(...o)), e.max = (...o) => e.check(Pf(...o)), e.length = (...o) => e.check(Ff(...o)), e.nonempty = (...o) => e.check(ws(1, ...o)), e.lowercase = (o) => e.check(sw(o)), e.uppercase = (o) => e.check(aw(o)), e.trim = () => e.check(fw()), e.normalize = (...o) => e.check(hw(...o)), e.toLowerCase = () => e.check(dw()), e.toUpperCase = () => e.check(pw()), e.slugify = () => e.check(mw());
  }), uy = B("ZodString", (e, t) => {
    Qc.init(e, t), Gf.init(e, t), e.email = (i) => e.check(LR(hy, i)), e.url = (i) => e.check(PR(fy, i)), e.jwt = (i) => e.check(qR(by, i)), e.emoji = (i) => e.check(FR(dy, i)), e.guid = (i) => e.check(Lu(Mu, i)), e.uuid = (i) => e.check(CR(Zr, i)), e.uuidv4 = (i) => e.check(DR(Zr, i)), e.uuidv6 = (i) => e.check(HR(Zr, i)), e.uuidv7 = (i) => e.check(MR(Zr, i)), e.nanoid = (i) => e.check(_R(py, i)), e.guid = (i) => e.check(Lu(Mu, i)), e.cuid = (i) => e.check(UR(my, i)), e.cuid2 = (i) => e.check(kR(gy, i)), e.ulid = (i) => e.check(WR(Ty, i)), e.base64 = (i) => e.check($R(Sy, i)), e.base64url = (i) => e.check(VR(Ay, i)), e.xid = (i) => e.check(GR(Ey, i)), e.ksuid = (i) => e.check(BR(Iy, i)), e.ipv4 = (i) => e.check(jR(Oy, i)), e.ipv6 = (i) => e.check(xR(Ry, i)), e.cidrv4 = (i) => e.check(YR(wy, i)), e.cidrv6 = (i) => e.check(zR(yy, i)), e.e164 = (i) => e.check(ZR(Ny, i)), e.datetime = (i) => e.check(Yw(i)), e.date = (i) => e.check($w(i)), e.time = (i) => e.check(Zw(i)), e.duration = (i) => e.check(Kw(i));
  });
  function io(e) {
    return vR(uy, e);
  }
  const pt = B("ZodStringFormat", (e, t) => {
    ht.init(e, t), Gf.init(e, t);
  }), hy = B("ZodEmail", (e, t) => {
    _O.init(e, t), pt.init(e, t);
  }), Mu = B("ZodGUID", (e, t) => {
    PO.init(e, t), pt.init(e, t);
  }), Zr = B("ZodUUID", (e, t) => {
    FO.init(e, t), pt.init(e, t);
  }), fy = B("ZodURL", (e, t) => {
    UO.init(e, t), pt.init(e, t);
  }), dy = B("ZodEmoji", (e, t) => {
    kO.init(e, t), pt.init(e, t);
  }), py = B("ZodNanoID", (e, t) => {
    WO.init(e, t), pt.init(e, t);
  }), my = B("ZodCUID", (e, t) => {
    GO.init(e, t), pt.init(e, t);
  }), gy = B("ZodCUID2", (e, t) => {
    BO.init(e, t), pt.init(e, t);
  }), Ty = B("ZodULID", (e, t) => {
    jO.init(e, t), pt.init(e, t);
  }), Ey = B("ZodXID", (e, t) => {
    xO.init(e, t), pt.init(e, t);
  }), Iy = B("ZodKSUID", (e, t) => {
    YO.init(e, t), pt.init(e, t);
  }), Oy = B("ZodIPv4", (e, t) => {
    qO.init(e, t), pt.init(e, t);
  }), Ry = B("ZodIPv6", (e, t) => {
    KO.init(e, t), pt.init(e, t);
  }), wy = B("ZodCIDRv4", (e, t) => {
    JO.init(e, t), pt.init(e, t);
  }), yy = B("ZodCIDRv6", (e, t) => {
    XO.init(e, t), pt.init(e, t);
  }), Sy = B("ZodBase64", (e, t) => {
    QO.init(e, t), pt.init(e, t);
  }), Ay = B("ZodBase64URL", (e, t) => {
    tR.init(e, t), pt.init(e, t);
  }), Ny = B("ZodE164", (e, t) => {
    iR.init(e, t), pt.init(e, t);
  }), by = B("ZodJWT", (e, t) => {
    nR.init(e, t), pt.init(e, t);
  }), Bf = B("ZodNumber", (e, t) => {
    Cf.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (o, n, s) => Sw(e, o, n), e.gt = (o, n) => e.check(Du(o, n)), e.gte = (o, n) => e.check(Ua(o, n)), e.min = (o, n) => e.check(Ua(o, n)), e.lt = (o, n) => e.check(Cu(o, n)), e.lte = (o, n) => e.check(_a(o, n)), e.max = (o, n) => e.check(_a(o, n)), e.int = (o) => e.check(Pu(o)), e.safe = (o) => e.check(Pu(o)), e.positive = (o) => e.check(Du(0, o)), e.nonnegative = (o) => e.check(Ua(0, o)), e.negative = (o) => e.check(Cu(0, o)), e.nonpositive = (o) => e.check(_a(0, o)), e.multipleOf = (o, n) => e.check(Hu(o, n)), e.step = (o, n) => e.check(Hu(o, n)), e.finite = () => e;
    const i = e._zod.bag;
    e.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), e.isFinite = true, e.format = i.format ?? null;
  });
  function tt(e) {
    return ew(Bf, e);
  }
  const vy = B("ZodNumberFormat", (e, t) => {
    rR.init(e, t), Bf.init(e, t);
  });
  function Pu(e) {
    return tw(vy, e);
  }
  const Ly = B("ZodBoolean", (e, t) => {
    sR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Aw(e, i, o);
  });
  function jf(e) {
    return iw(Ly, e);
  }
  const Cy = B("ZodUnknown", (e, t) => {
    aR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => bw();
  });
  function Fu() {
    return ow(Cy);
  }
  const Dy = B("ZodNever", (e, t) => {
    cR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Nw(e, i, o);
  });
  function Hy(e) {
    return nw(Dy, e);
  }
  const My = B("ZodArray", (e, t) => {
    lR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Dw(e, i, o, n), e.element = t.element, e.min = (i, o) => e.check(ws(i, o)), e.nonempty = (i) => e.check(ws(1, i)), e.max = (i, o) => e.check(Pf(i, o)), e.length = (i, o) => e.check(Ff(i, o)), e.unwrap = () => e.element;
  });
  function Ss(e, t) {
    return gw(My, e, t);
  }
  const Py = B("ZodObject", (e, t) => {
    hR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Hw(e, i, o, n), Ve(e, "shape", () => t.shape), e.keyof = () => xf(Object.keys(e._zod.def.shape)), e.catchall = (i) => e.clone({
      ...e._zod.def,
      catchall: i
    }), e.passthrough = () => e.clone({
      ...e._zod.def,
      catchall: Fu()
    }), e.loose = () => e.clone({
      ...e._zod.def,
      catchall: Fu()
    }), e.strict = () => e.clone({
      ...e._zod.def,
      catchall: Hy()
    }), e.strip = () => e.clone({
      ...e._zod.def,
      catchall: void 0
    }), e.extend = (i) => HI(e, i), e.safeExtend = (i) => MI(e, i), e.merge = (i) => PI(e, i), e.pick = (i) => CI(e, i), e.omit = (i) => DI(e, i), e.partial = (...i) => FI(Yf, e, i[0]), e.required = (...i) => _I(zf, e, i[0]);
  });
  function Mn(e, t) {
    const i = {
      type: "object",
      shape: e ?? {},
      ...Re(t)
    };
    return new Py(i);
  }
  const Fy = B("ZodUnion", (e, t) => {
    fR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Mw(e, i, o, n), e.options = t.options;
  });
  function _y(e, t) {
    return new Fy({
      type: "union",
      options: e,
      ...Re(t)
    });
  }
  const Uy = B("ZodIntersection", (e, t) => {
    dR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Pw(e, i, o, n);
  });
  function ky(e, t) {
    return new Uy({
      type: "intersection",
      left: e,
      right: t
    });
  }
  const Wy = B("ZodRecord", (e, t) => {
    pR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Fw(e, i, o, n), e.keyType = t.keyType, e.valueType = t.valueType;
  });
  function Gy(e, t, i) {
    return new Wy({
      type: "record",
      keyType: e,
      valueType: t,
      ...Re(i)
    });
  }
  const Ec = B("ZodEnum", (e, t) => {
    mR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (o, n, s) => vw(e, o, n), e.enum = t.entries, e.options = Object.values(t.entries);
    const i = new Set(Object.keys(t.entries));
    e.extract = (o, n) => {
      const s = {};
      for (const l of o) if (i.has(l)) s[l] = t.entries[l];
      else throw new Error(`Key ${l} not found in enum`);
      return new Ec({
        ...t,
        checks: [],
        ...Re(n),
        entries: s
      });
    }, e.exclude = (o, n) => {
      const s = {
        ...t.entries
      };
      for (const l of o) if (i.has(l)) delete s[l];
      else throw new Error(`Key ${l} not found in enum`);
      return new Ec({
        ...t,
        checks: [],
        ...Re(n),
        entries: s
      });
    };
  });
  function xf(e, t) {
    const i = Array.isArray(e) ? Object.fromEntries(e.map((o) => [
      o,
      o
    ])) : e;
    return new Ec({
      type: "enum",
      entries: i,
      ...Re(t)
    });
  }
  const By = B("ZodTransform", (e, t) => {
    gR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Cw(e, i), e._zod.parse = (i, o) => {
      if (o.direction === "backward") throw new pf(e.constructor.name);
      i.addIssue = (s) => {
        if (typeof s == "string") i.issues.push(yr(s, i.value, t));
        else {
          const l = s;
          l.fatal && (l.continue = false), l.code ?? (l.code = "custom"), l.input ?? (l.input = i.value), l.inst ?? (l.inst = e), i.issues.push(yr(l));
        }
      };
      const n = t.transform(i.value, i);
      return n instanceof Promise ? n.then((s) => (i.value = s, i)) : (i.value = n, i);
    };
  });
  function jy(e) {
    return new By({
      type: "transform",
      transform: e
    });
  }
  const Yf = B("ZodOptional", (e, t) => {
    Mf.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Wf(e, i, o, n), e.unwrap = () => e._zod.def.innerType;
  });
  function _u(e) {
    return new Yf({
      type: "optional",
      innerType: e
    });
  }
  const xy = B("ZodExactOptional", (e, t) => {
    TR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Wf(e, i, o, n), e.unwrap = () => e._zod.def.innerType;
  });
  function Yy(e) {
    return new xy({
      type: "optional",
      innerType: e
    });
  }
  const zy = B("ZodNullable", (e, t) => {
    ER.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => _w(e, i, o, n), e.unwrap = () => e._zod.def.innerType;
  });
  function Uu(e) {
    return new zy({
      type: "nullable",
      innerType: e
    });
  }
  const $y = B("ZodDefault", (e, t) => {
    IR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => kw(e, i, o, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
  });
  function Vy(e, t) {
    return new $y({
      type: "default",
      innerType: e,
      get defaultValue() {
        return typeof t == "function" ? t() : Ef(t);
      }
    });
  }
  const Zy = B("ZodPrefault", (e, t) => {
    OR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Ww(e, i, o, n), e.unwrap = () => e._zod.def.innerType;
  });
  function qy(e, t) {
    return new Zy({
      type: "prefault",
      innerType: e,
      get defaultValue() {
        return typeof t == "function" ? t() : Ef(t);
      }
    });
  }
  const zf = B("ZodNonOptional", (e, t) => {
    RR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Uw(e, i, o, n), e.unwrap = () => e._zod.def.innerType;
  });
  function Ky(e, t) {
    return new zf({
      type: "nonoptional",
      innerType: e,
      ...Re(t)
    });
  }
  const Jy = B("ZodCatch", (e, t) => {
    wR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Gw(e, i, o, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
  });
  function Xy(e, t) {
    return new Jy({
      type: "catch",
      innerType: e,
      catchValue: typeof t == "function" ? t : () => t
    });
  }
  const Qy = B("ZodPipe", (e, t) => {
    yR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Bw(e, i, o, n), e.in = t.in, e.out = t.out;
  });
  function ku(e, t) {
    return new Qy({
      type: "pipe",
      in: e,
      out: t
    });
  }
  const eS = B("ZodReadonly", (e, t) => {
    SR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => jw(e, i, o, n), e.unwrap = () => e._zod.def.innerType;
  });
  function tS(e) {
    return new eS({
      type: "readonly",
      innerType: e
    });
  }
  const $f = B("ZodCustom", (e, t) => {
    AR.init(e, t), gt.init(e, t), e._zod.processJSONSchema = (i, o, n) => Lw(e, i);
  });
  function iS(e, t) {
    return Tw($f, e ?? (() => true), t);
  }
  function oS(e, t = {}) {
    return Ew($f, e, t);
  }
  function nS(e) {
    return Iw(e);
  }
  const Vf = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, Zf = Mn({
    id: io().regex(Vf),
    routeId: io(),
    point: iS((e) => {
      const t = e;
      return typeof t.latitude == "number" && typeof t.longitude == "number";
    }),
    timestamp: tt().positive(),
    sequence: tt().int().nonnegative(),
    merged: jf(),
    distanceIncrement: tt().nonnegative().optional()
  }), rS = Mn({
    routeId: io(),
    lastMergeTime: tt().positive(),
    unmergedCount: tt().int().nonnegative(),
    lastSequence: tt().int().nonnegative(),
    totalPoints: tt().int().nonnegative(),
    checksum: io().optional()
  });
  Mn({
    id: io().regex(Vf),
    routeId: io(),
    startSequence: tt().int().nonnegative(),
    endSequence: tt().int().nonnegative(),
    pointCount: tt().int().positive(),
    distanceAdded: tt().nonnegative(),
    mergeTime: tt().positive(),
    status: xf([
      "pending",
      "completed",
      "failed"
    ]),
    error: io().optional()
  });
  Mn({
    appendLatency: Ss(tt().positive()),
    mergeDuration: Ss(tt().positive()),
    logSizePerRoute: Gy(io(), tt().int().nonnegative()),
    failedAppends: tt().int().nonnegative(),
    failedMerges: tt().int().nonnegative(),
    recoveryEvents: tt().int().nonnegative(),
    mergeFrequency: tt(),
    compressionRatio: tt(),
    memoryUsage: tt()
  });
  Mn({
    initialized: jf(),
    version: tt().int().positive(),
    lastMergeTime: tt().positive(),
    activeRoutes: Ss(io()),
    statistics: Mn({
      writesPerSecond: tt(),
      averageLogSize: tt(),
      mergeDuration: tt()
    })
  });
  Zi = {
    FLUSH_THRESHOLD: 10,
    FLUSH_DELAY_MS: 100,
    MERGE_TIME_INTERVAL_MS: 3e4,
    MERGE_SIZE_THRESHOLD: 100,
    MAX_RETRIES: 3,
    RETRY_BASE_DELAY_MS: 1e3,
    MAX_LATENCY_SAMPLES: 100,
    MAX_CACHE_SIZE: 100
  };
  function sS(e, t, i) {
    return Zf.parse({
      id: crypto.randomUUID(),
      routeId: e,
      point: t,
      timestamp: Date.now(),
      sequence: i,
      merged: false
    });
  }
  function ka(e) {
    return Zf.parse(e);
  }
  function Wu(e) {
    return rS.parse(e);
  }
  const Ct = [];
  for (let e = 0; e < 256; ++e) Ct.push((e + 256).toString(16).slice(1));
  function aS(e, t = 0) {
    return (Ct[e[t + 0]] + Ct[e[t + 1]] + Ct[e[t + 2]] + Ct[e[t + 3]] + "-" + Ct[e[t + 4]] + Ct[e[t + 5]] + "-" + Ct[e[t + 6]] + Ct[e[t + 7]] + "-" + Ct[e[t + 8]] + Ct[e[t + 9]] + "-" + Ct[e[t + 10]] + Ct[e[t + 11]] + Ct[e[t + 12]] + Ct[e[t + 13]] + Ct[e[t + 14]] + Ct[e[t + 15]]).toLowerCase();
  }
  let Wa;
  const cS = new Uint8Array(16);
  function lS() {
    if (!Wa) {
      if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      Wa = crypto.getRandomValues.bind(crypto);
    }
    return Wa(cS);
  }
  const uS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Gu = {
    randomUUID: uS
  };
  Ga = function(e, t, i) {
    var _a3;
    if (Gu.randomUUID && !e) return Gu.randomUUID();
    e = e || {};
    const o = e.random ?? ((_a3 = e.rng) == null ? void 0 : _a3.call(e)) ?? lS();
    if (o.length < 16) throw new Error("Random bytes length must be >= 16");
    return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, aS(o);
  };
  Ic = function() {
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
  function hS() {
    return {
      ...Ic(),
      version: 1,
      signature: void 0
    };
  }
  As = class {
    constructor(t = Ga(), i, o, n) {
      __publicField(this, "id");
      __publicField(this, "meta");
      __publicField(this, "routes");
      __publicField(this, "drafts");
      this.id = t, this.routes = i || {
        id: Ga(),
        meta: Ic(),
        routes: []
      }, this.drafts = o || {
        id: Ga(),
        meta: Ic(),
        drafts: []
      }, this.meta = {
        ...hS(),
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
      return new As(t.id, t.routes, t.drafts, t.meta);
    }
    clone() {
      return As.fromStorage(this.toStorage());
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
      const i = this.meta.tags.indexOf(t);
      i > -1 && (this.meta.tags.splice(i, 1), this.meta.modification_timestamp = Date.now());
    }
  };
  let Pe;
  const qf = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && qf.decode();
  let or = null;
  function hs() {
    return (or === null || or.byteLength === 0) && (or = new Uint8Array(Pe.memory.buffer)), or;
  }
  function Qo(e, t) {
    return e = e >>> 0, qf.decode(hs().subarray(e, e + t));
  }
  let Ns = 0;
  const fs = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, fS = typeof fs.encodeInto == "function" ? function(e, t) {
    return fs.encodeInto(e, t);
  } : function(e, t) {
    const i = fs.encode(e);
    return t.set(i), {
      read: e.length,
      written: i.length
    };
  };
  function Kf(e, t, i) {
    if (i === void 0) {
      const h = fs.encode(e), d = t(h.length, 1) >>> 0;
      return hs().subarray(d, d + h.length).set(h), Ns = h.length, d;
    }
    let o = e.length, n = t(o, 1) >>> 0;
    const s = hs();
    let l = 0;
    for (; l < o; l++) {
      const h = e.charCodeAt(l);
      if (h > 127) break;
      s[n + l] = h;
    }
    if (l !== o) {
      l !== 0 && (e = e.slice(l)), n = i(n, o, o = l + e.length * 3, 1) >>> 0;
      const h = hs().subarray(n + l, n + o), d = fS(e, h);
      l += d.written, n = i(n, o, l, 1) >>> 0;
    }
    return Ns = l, n;
  }
  function dS(e) {
    return e == null;
  }
  let qo = null;
  function Bu() {
    return (qo === null || qo.buffer.detached === true || qo.buffer.detached === void 0 && qo.buffer !== Pe.memory.buffer) && (qo = new DataView(Pe.memory.buffer)), qo;
  }
  function Jf(e) {
    const t = Pe.__wbindgen_export_0.get(e);
    return Pe.__externref_table_dealloc(e), t;
  }
  function Ba(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Oc(e, t, i) {
    Ba(e, Pn), Ba(t, Pn), Ba(i, el);
    const o = Pe.transform(e.__wbg_ptr, t.__wbg_ptr, i.__wbg_ptr);
    if (o[1]) throw Jf(o[0]);
  }
  const ju = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Pe.__wbg_point_free(e >>> 0, 1));
  class el {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ju.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Pe.__wbg_point_free(t, 0);
    }
    get x() {
      return Pe.__wbg_get_point_x(this.__wbg_ptr);
    }
    set x(t) {
      Pe.__wbg_set_point_x(this.__wbg_ptr, t);
    }
    get y() {
      return Pe.__wbg_get_point_y(this.__wbg_ptr);
    }
    set y(t) {
      Pe.__wbg_set_point_y(this.__wbg_ptr, t);
    }
    get z() {
      return Pe.__wbg_get_point_z(this.__wbg_ptr);
    }
    set z(t) {
      Pe.__wbg_set_point_z(this.__wbg_ptr, t);
    }
    constructor(t, i, o) {
      const n = Pe.point_new(t, i, o);
      return this.__wbg_ptr = n >>> 0, ju.register(this, this.__wbg_ptr, this), this;
    }
  }
  const xu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Pe.__wbg_projection_free(e >>> 0, 1));
  class Pn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xu.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Pe.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const i = Kf(t, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), o = Ns, n = Pe.projection_new(i, o);
      if (n[2]) throw Jf(n[1]);
      return this.__wbg_ptr = n[0] >>> 0, xu.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, i;
      try {
        const o = Pe.projection_projName(this.__wbg_ptr);
        return t = o[0], i = o[1], Qo(o[0], o[1]);
      } finally {
        Pe.__wbindgen_free(t, i, 1);
      }
    }
    get isLatlon() {
      return Pe.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Pe.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, i;
      try {
        const o = Pe.projection_axis(this.__wbg_ptr);
        return t = o[0], i = o[1], Qo(o[0], o[1]);
      } finally {
        Pe.__wbindgen_free(t, i, 1);
      }
    }
    get isNormalizedAxis() {
      return Pe.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Pe.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, i;
      try {
        const o = Pe.projection_units(this.__wbg_ptr);
        return t = o[0], i = o[1], Qo(o[0], o[1]);
      } finally {
        Pe.__wbindgen_free(t, i, 1);
      }
    }
  }
  async function pS(e, t) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (o) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
        else throw o;
      }
      const i = await e.arrayBuffer();
      return await WebAssembly.instantiate(i, t);
    } else {
      const i = await WebAssembly.instantiate(e, t);
      return i instanceof WebAssembly.Instance ? {
        instance: i,
        module: e
      } : i;
    }
  }
  function mS() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbg_buffer_e6c6daaa78528d53 = function(t) {
      return t.buffer;
    }, e.wbg.__wbg_getFloat32_e0872364daa466bb = function(t, i, o) {
      return t.getFloat32(i >>> 0, o !== 0);
    }, e.wbg.__wbg_getFloat64_3c55a5d18420aa12 = function(t, i, o) {
      return t.getFloat64(i >>> 0, o !== 0);
    }, e.wbg.__wbg_getInt32_6ea30555a7e6366d = function(t, i, o) {
      return t.getInt32(i >>> 0, o !== 0);
    }, e.wbg.__wbg_getUint32_78580012d2915dec = function(t, i, o) {
      return t.getUint32(i >>> 0, o !== 0);
    }, e.wbg.__wbg_parseFloat_40655e71a57d91e0 = function(t, i) {
      return parseFloat(Qo(t, i));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, i, o) {
      return parseInt(Qo(t, i), o);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, i, o) {
      return t.slice(i >>> 0, o >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, i) {
      return new Error(Qo(t, i));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Pe.__wbindgen_export_0, i = t.grow(4);
      t.set(0, void 0), t.set(i + 0, void 0), t.set(i + 1, null), t.set(i + 2, true), t.set(i + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, i) {
      const o = i, n = typeof o == "string" ? o : void 0;
      var s = dS(n) ? 0 : Kf(n, Pe.__wbindgen_malloc, Pe.__wbindgen_realloc), l = Ns;
      Bu().setInt32(t + 4, l, true), Bu().setInt32(t + 0, s, true);
    }, e.wbg.__wbindgen_throw = function(t, i) {
      throw new Error(Qo(t, i));
    }, e;
  }
  function gS(e, t) {
    return Pe = e.exports, Xf.__wbindgen_wasm_module = t, qo = null, or = null, Pe.__wbindgen_start(), Pe;
  }
  async function Xf(e) {
    if (Pe !== void 0) return Pe;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = mS();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: i, module: o } = await pS(await e, t);
    return gS(i, o);
  }
  const TS = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, ds = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let ja = false;
  async function Qf() {
    if (!ja) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Xf({
        module_or_path: TS
      }), ja = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), ja = true;
    }
  }
  async function Yu(e, t, i) {
    await Qf();
    const o = new Pn(e), n = new Pn(t), s = new el(i[0], i[1], 0);
    try {
      return Oc(o, n, s), [
        s.x,
        s.y
      ];
    } catch (l) {
      throw new Error(`Failed to transform coordinate: ${l instanceof Error ? l.message : String(l)}`);
    } finally {
      o.free(), n.free(), s.free();
    }
  }
  function ES(e, t) {
    const i = t.x - e.x, o = t.y - e.y;
    return Math.sqrt(i * i + o * o);
  }
  Rc = function(e, t) {
    const o = e.latitude * Math.PI / 180, n = t.latitude * Math.PI / 180, s = (t.latitude - e.latitude) * Math.PI / 180, l = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(s / 2) * Math.sin(s / 2) + Math.cos(o) * Math.cos(n) * Math.sin(l / 2) * Math.sin(l / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  };
  async function IS(e, t, i = {}) {
    const { projection: o = ds.CGCS2000_3_DEGREE, useHaversine: n = false } = i;
    if (n) return Rc(e, t);
    try {
      const s = await Yu(ds.WGS84, o, [
        e.longitude,
        e.latitude
      ]), l = await Yu(ds.WGS84, o, [
        t.longitude,
        t.latitude
      ]);
      return ES({
        x: s[0],
        y: s[1]
      }, {
        x: l[0],
        y: l[1]
      });
    } catch (s) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", s), Rc(e, t);
    }
  }
  Ev = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let i = 0;
    for (let o = 1; o < e.length; o++) i += await IS(e[o - 1], e[o], t);
    return i;
  };
  Iv = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  en = (_a2 = class {
    constructor() {
      __publicField(this, "mergeQueue", []);
      __publicField(this, "isProcessing", false);
      __publicField(this, "lastMergeTime", 0);
      __publicField(this, "mergeCount", 0);
    }
    static getInstance() {
      return en.instance || (en.instance = new en()), en.instance;
    }
    scheduleMerge(t, i = "normal") {
      const o = this.mergeQueue.find((s) => s.routeId === t);
      if (o) {
        i === "high" && (o.priority = "high", o.scheduledTime = Date.now());
        return;
      }
      const n = {
        routeId: t,
        priority: i,
        scheduledTime: Date.now(),
        attempts: 0
      };
      this.mergeQueue.push(n), this.processQueue();
    }
    async processQueue() {
      if (!(this.isProcessing || this.mergeQueue.length === 0)) {
        this.isProcessing = true;
        try {
          for (this.mergeQueue.sort((t, i) => {
            const o = {
              high: 0,
              normal: 1,
              low: 2
            };
            return o[t.priority] !== o[i.priority] ? o[t.priority] - o[i.priority] : t.scheduledTime - i.scheduledTime;
          }); this.mergeQueue.length > 0; ) {
            const t = this.mergeQueue.shift();
            try {
              await this.mergeRoute(t.routeId), t.attempts = 0;
            } catch (i) {
              console.error(`[MergeProcessor] Merge failed for route ${t.routeId}:`, i), t.attempts++, t.attempts < Zi.MAX_RETRIES ? (t.scheduledTime = Date.now() + Zi.RETRY_BASE_DELAY_MS * Math.pow(2, t.attempts), this.mergeQueue.push(t)) : await this.recordMergeFailure(t.routeId, i);
            }
          }
        } finally {
          this.isProcessing = false;
        }
      }
    }
    async mergeRoute(t) {
      const i = performance.now(), o = crypto.randomUUID(), n = {
        id: o,
        routeId: t,
        startSequence: 0,
        endSequence: 0,
        pointCount: 0,
        distanceAdded: 0,
        mergeTime: Date.now(),
        status: "pending"
      }, [s, l, h] = await Promise.all([
        Zo("sketches"),
        qr.getUnmergedEntries(t),
        qr.getMetadata(t)
      ]);
      if (!s || !h) throw new Error(`Missing data for route ${t}`);
      if (l.length === 0) {
        n.status = "completed", await ft(`route:${t}:batches:${o}`, n);
        return;
      }
      const d = s.map((ie) => As.fromStorage(ie)), m = d.findIndex((ie) => ie.routes.routes.some((Q) => Q.id === t));
      if (m === -1) throw new Error(`Route ${t} not found in sketches`);
      const p = d[m].routes.routes.findIndex((ie) => ie.id === t), I = d[m].routes.routes[p], N = I.points.length > 0 ? I.points[I.points.length - 1] : null;
      let S = 0;
      const M = [];
      for (let ie = 0; ie < l.length; ie++) {
        const Q = l[ie], Y = ie === 0 && N ? N : l[ie - 1].point, G = Rc({
          longitude: Y.longitude,
          latitude: Y.latitude
        }, {
          longitude: Q.point.longitude,
          latitude: Q.point.latitude
        });
        S += G, Q.distanceIncrement = G, M.push(Q.point);
      }
      I.points.push(...M), I.meta.distance = (I.meta.distance || 0) + S, I.meta.modification_timestamp = Date.now(), l.forEach((ie) => ie.merged = true), n.startSequence = l[0].sequence, n.endSequence = l[l.length - 1].sequence, n.pointCount = l.length, n.distanceAdded = S, await this.saveMergeTransaction(d, t, l, h, n), await qr.cleanupMergedEntries(t), this.mergeCount++, this.lastMergeTime = Date.now();
      const D = performance.now() - i;
      console.info(`[MergeProcessor] Merged ${l.length} points into route ${t} in ${D.toFixed(2)}ms`);
    }
    async saveMergeTransaction(t, i, o, n, s) {
      const l = {
        sketches: JSON.parse(JSON.stringify(t.map((h) => h.toStorage()))),
        logEntries: JSON.parse(JSON.stringify(o)),
        metadata: JSON.parse(JSON.stringify(n))
      };
      try {
        n.unmergedCount -= o.length, n.lastMergeTime = Date.now();
        const h = [
          ft("sketches", t.map((d) => d.toStorage())),
          ft(`route:${i}:log`, o),
          ft(`route:${i}:metadata`, n),
          ft(`route:${i}:batches:${s.id}`, s)
        ];
        await Promise.all(h), s.status = "completed", await ft(`route:${i}:batches:${s.id}`, s);
      } catch (h) {
        throw await Promise.all([
          ft("sketches", l.sketches),
          ft(`route:${i}:log`, l.logEntries),
          ft(`route:${i}:metadata`, l.metadata)
        ]), s.status = "failed", s.error = h instanceof Error ? h.message : "Unknown error", await ft(`route:${i}:batches:${s.id}`, s), h;
      }
    }
    async recordMergeFailure(t, i) {
      console.error(`[MergeProcessor] Recording merge failure for route ${t}:`, i);
    }
    async forceMerge(t) {
      (await qr.getUnmergedEntries(t)).length > 0 && await this.mergeRoute(t);
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
  Ov = en.getInstance();
  class zu {
    constructor() {
      __publicField(this, "locks", /* @__PURE__ */ new Map());
    }
    acquire(t) {
      return new Promise((i) => {
        const o = () => {
          if (!this.locks.has(t)) {
            let n;
            const s = new Promise((l) => {
              n = () => {
                this.locks.delete(t), l();
              };
            });
            this.locks.set(t, s), i(n);
          }
        };
        if (o(), this.locks.has(t)) {
          const n = setInterval(() => {
            this.locks.has(t) || (clearInterval(n), o());
          }, 0);
        }
      });
    }
    isLocked(t) {
      return this.locks.has(t);
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
  const xa = "wal:emergency:";
  class OS {
    constructor() {
      __publicField(this, "writeBuffer", /* @__PURE__ */ new Map());
      __publicField(this, "sequenceCache", /* @__PURE__ */ new Map());
      __publicField(this, "sequenceInitPromises", /* @__PURE__ */ new Map());
      __publicField(this, "flushMutex", new zu());
      __publicField(this, "storageMutex", new zu());
      __publicField(this, "pendingOperations", /* @__PURE__ */ new Set());
      __publicField(this, "pendingVisibilityFlush", null);
      __publicField(this, "mergeProcessor", null);
      __publicField(this, "appendLatencyBuffer", new $u(Zi.MAX_LATENCY_SAMPLES));
      __publicField(this, "mergeDurationBuffer", new $u(Zi.MAX_LATENCY_SAMPLES));
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
      __publicField(this, "handleBeforeUnload", (t) => {
        this.getTotalBufferSize() > 0 && this.flushAllBuffersSync();
      });
      __publicField(this, "handleVisibilityChange", () => {
        document.visibilityState === "hidden" && !this.pendingVisibilityFlush && (this.pendingVisibilityFlush = this.flushAllBuffers().catch(console.error).finally(() => {
          this.pendingVisibilityFlush = null;
        }));
      });
      this.setupLifecycleHandlers(), this.mergeProcessor = en.getInstance();
    }
    setupLifecycleHandlers() {
      typeof window > "u" || (this.recoverEmergencyFlush().catch(console.error), this.periodicFlushInterval = setInterval(() => this.flushAllBuffers(), Zi.FLUSH_DELAY_MS), window.addEventListener("beforeunload", this.handleBeforeUnload), document.addEventListener("visibilitychange", this.handleVisibilityChange));
    }
    async appendPoint(t, i) {
      if (this.validateAppendInput(t, i), this.isShuttingDown) throw new Error("WAL is shutting down");
      const o = this.doAppendPoint(t, i);
      this.pendingOperations.add(o);
      try {
        await o;
      } finally {
        this.pendingOperations.delete(o);
      }
    }
    async doAppendPoint(t, i) {
      const o = performance.now();
      try {
        const n = await this.createLogEntry(t, i);
        this.addToBuffer(t, n), this.getBufferSize(t) >= Zi.FLUSH_THRESHOLD && await this.flushBuffer(t), this.scheduleMerge(t);
      } catch (n) {
        throw this.metrics.failedAppends++, console.error(`[WAL] Failed to append point to route ${t}:`, n), n;
      } finally {
        const n = performance.now() - o;
        this.appendLatencyBuffer.push(n);
      }
    }
    validateAppendInput(t, i) {
      if (!t || typeof t != "string" || t.trim() === "") throw new Error("Invalid routeId: must be a non-empty string");
      if (!i || typeof i != "object") throw new Error("Invalid point: must be an object");
      if (typeof i.latitude != "number" || !Number.isFinite(i.latitude)) throw new Error("Invalid point.latitude: must be a finite number");
      if (typeof i.longitude != "number" || !Number.isFinite(i.longitude)) throw new Error("Invalid point.longitude: must be a finite number");
      if (i.latitude < -90 || i.latitude > 90) throw new Error("Invalid point.latitude: must be between -90 and 90");
      if (i.longitude < -180 || i.longitude > 180) throw new Error("Invalid point.longitude: must be between -180 and 180");
    }
    async createLogEntry(t, i) {
      const o = await this.getNextSequence(t);
      return sS(t, i, o);
    }
    async getNextSequence(t) {
      if (this.sequenceCache.has(t)) {
        const o = this.sequenceCache.get(t) + 1;
        return this.sequenceCache.set(t, o), o;
      }
      if (!this.sequenceInitPromises.has(t)) {
        const o = this.initializeSequence(t).finally(() => {
          this.sequenceInitPromises.delete(t);
        });
        this.sequenceInitPromises.set(t, o);
      }
      await this.sequenceInitPromises.get(t);
      const i = this.sequenceCache.get(t) + 1;
      return this.sequenceCache.set(t, i), i;
    }
    async initializeSequence(t) {
      const i = await this.getOrCreateMetadata(t);
      this.sequenceCache.set(t, i.lastSequence);
    }
    addToBuffer(t, i) {
      this.writeBuffer.has(t) || this.writeBuffer.set(t, []), this.writeBuffer.get(t).push(i);
    }
    async flushBuffer(t) {
      const i = await this.flushMutex.acquire(t);
      try {
        await this.doFlush(t);
      } finally {
        i();
      }
    }
    async doFlush(t) {
      const i = this.writeBuffer.get(t);
      if (!i || i.length === 0) return;
      const o = i.splice(0, i.length);
      if (o.length !== 0) try {
        const n = await this.storageMutex.acquire(`route:${t}`);
        try {
          const l = [
            ...await this.safeGetLog(t),
            ...o
          ];
          await ft(`route:${t}:log`, l);
          try {
            const h = await this.getOrCreateMetadata(t);
            h.unmergedCount += o.length, h.totalPoints += o.length, h.lastSequence = o[o.length - 1].sequence, await ft(`route:${t}:metadata`, h);
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
          ...o,
          ...s
        ]), n;
      }
    }
    async safeStorageGet(t) {
      try {
        return await Zo(t);
      } catch (i) {
        return console.error(`[WAL] Failed to read from storage key ${t}:`, i), null;
      }
    }
    async safeGetLog(t) {
      const i = await this.safeStorageGet(`route:${t}:log`);
      if (i === null) return [];
      if (!Array.isArray(i)) return console.warn(`[WAL] Corrupted log for route ${t}: not an array`), this.metrics.recoveryEvents++, [];
      const o = [];
      for (const n of i) try {
        o.push(ka(n));
      } catch {
        this.metrics.recoveryEvents++;
      }
      return o;
    }
    async getOrCreateMetadata(t) {
      const i = await Zo(`route:${t}:metadata`);
      if (i) try {
        return Wu(i);
      } catch {
        console.warn(`[WAL] Invalid metadata for route ${t}, recreating`), this.metrics.recoveryEvents++;
      }
      const o = {
        routeId: t,
        lastMergeTime: Date.now(),
        unmergedCount: 0,
        lastSequence: 0,
        totalPoints: 0
      };
      return await ft(`route:${t}:metadata`, o), o;
    }
    async markRouteActive(t) {
      const i = await this.storageMutex.acquire("wal:activeRoutes");
      try {
        const o = await Zo("wal:activeRoutes") ?? [];
        o.includes(t) || (o.push(t), await ft("wal:activeRoutes", o));
      } finally {
        i();
      }
    }
    scheduleMerge(t) {
      typeof window > "u" || typeof document > "u" || this.scheduleMergeWithRetry(t, 0);
    }
    scheduleMergeWithRetry(t, i) {
      if (this.mergeProcessor) this.mergeProcessor.scheduleMerge(t);
      else if (console.warn(`[WAL] Could not schedule merge for route ${t} (attempt ${i + 1}):`, "merge processor not initialized"), i < Zi.MAX_RETRIES) {
        const o = Zi.RETRY_BASE_DELAY_MS * Math.pow(2, i);
        setTimeout(() => {
          this.scheduleMergeWithRetry(t, i + 1);
        }, o);
      } else console.error(`[WAL] Failed to schedule merge for route ${t} after ${Zi.MAX_RETRIES} attempts`), this.metrics.failedMerges++;
    }
    async flushAllBuffers() {
      const t = Array.from(this.writeBuffer.keys());
      await Promise.allSettled(t.map((i) => this.flushBuffer(i)));
    }
    flushAllBuffersSync() {
      if (!(typeof localStorage > "u")) {
        for (const [t, i] of this.writeBuffer.entries()) if (i.length !== 0) try {
          const o = `${xa}${t}`, n = localStorage.getItem(o), l = [
            ...n ? JSON.parse(n) : [],
            ...i
          ], h = JSON.stringify(l);
          if (h.length < 1024 * 1024) localStorage.setItem(o, h);
          else {
            const d = l.slice(-100);
            localStorage.setItem(o, JSON.stringify(d)), console.warn(`[WAL] Emergency flush truncated for route ${t}`);
          }
        } catch (o) {
          console.error("[WAL] Emergency flush failed for route", t, o);
        }
      }
    }
    async recoverEmergencyFlush() {
      if (typeof localStorage > "u") return;
      const t = [];
      for (let i = 0; i < localStorage.length; i++) {
        const o = localStorage.key(i);
        (o == null ? void 0 : o.startsWith(xa)) && t.push(o);
      }
      for (const i of t) {
        const o = i.slice(xa.length);
        try {
          const n = localStorage.getItem(i);
          if (!n) continue;
          const s = JSON.parse(n), l = [];
          for (const h of s) try {
            l.push(ka(h));
          } catch {
          }
          if (l.length > 0) {
            const h = await this.storageMutex.acquire(`route:${o}`);
            try {
              const d = await this.safeGetLog(o), m = new Set(d.map((I) => I.id)), p = l.filter((I) => !m.has(I.id));
              if (p.length > 0) {
                const I = [
                  ...d,
                  ...p
                ];
                I.sort((N, S) => N.sequence - S.sequence), await ft(`route:${o}:log`, I), console.log(`[WAL] Recovered ${p.length} entries for route ${o}`), this.metrics.recoveryEvents++;
              }
            } finally {
              h();
            }
          }
          localStorage.removeItem(i);
        } catch (n) {
          console.error(`[WAL] Failed to recover emergency data for ${i}:`, n), localStorage.removeItem(i);
        }
      }
    }
    async getUnmergedEntries(t) {
      const i = await this.storageMutex.acquire(`route:${t}`);
      try {
        return (await this.safeGetLog(t)).filter((n) => !n.merged);
      } finally {
        i();
      }
    }
    async markEntriesAsMerged(t, i) {
      if (i.length === 0) return;
      const o = await this.storageMutex.acquire(`route:${t}`);
      try {
        const n = await this.safeGetLog(t), s = new Set(i.map((d) => d.id));
        let l = 0;
        for (const d of n) s.has(d.id) && !d.merged && (d.merged = true, l++);
        await ft(`route:${t}:log`, n);
        const h = await this.getOrCreateMetadata(t);
        h.unmergedCount = Math.max(0, h.unmergedCount - l), h.lastMergeTime = Date.now(), await ft(`route:${t}:metadata`, h);
      } finally {
        o();
      }
    }
    async cleanupMergedEntries(t) {
      const i = await this.storageMutex.acquire(`route:${t}`);
      try {
        const o = await this.safeGetLog(t), n = o.filter((s) => !s.merged);
        if (n.length < o.length) {
          await ft(`route:${t}:log`, n), this.updateLogSize(t, n.length);
          const s = await this.getOrCreateMetadata(t);
          s.unmergedCount = n.length, await ft(`route:${t}:metadata`, s);
        }
      } finally {
        i();
      }
    }
    async cleanupRoute(t) {
      const i = await this.storageMutex.acquire(`route:${t}`);
      try {
        this.sequenceCache.delete(t), this.writeBuffer.delete(t), delete this.metrics.logSizePerRoute[t];
        const o = await this.storageMutex.acquire("wal:activeRoutes");
        try {
          const n = await Zo("wal:activeRoutes") ?? [], s = n.filter((l) => l !== t);
          s.length !== n.length && await ft("wal:activeRoutes", s);
        } finally {
          o();
        }
      } finally {
        i();
      }
    }
    updateLogSize(t, i) {
      this.metrics.logSizePerRoute[t] = i, this.updateMemoryUsage();
    }
    updateMemoryUsage() {
      let t = 0;
      for (const i of this.writeBuffer.values()) t += i.length;
      this.metrics.memoryUsage = t * 200;
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
      for (const i of this.writeBuffer.values()) t += i.length;
      return t;
    }
    async getMetadata(t) {
      const i = await Zo(`route:${t}:metadata`);
      if (!i) return null;
      try {
        return Wu(i);
      } catch {
        return null;
      }
    }
    hasPendingWrites(t) {
      const i = this.writeBuffer.get(t);
      return i !== void 0 && i.length > 0;
    }
    isFlushInProgress(t) {
      return this.flushMutex.isLocked(t);
    }
    async shutdown() {
      this.isShuttingDown = true, this.periodicFlushInterval && (clearInterval(this.periodicFlushInterval), this.periodicFlushInterval = null), typeof window < "u" && window.removeEventListener("beforeunload", this.handleBeforeUnload), typeof document < "u" && document.removeEventListener("visibilitychange", this.handleVisibilityChange), this.pendingOperations.size > 0 && await Promise.allSettled(this.pendingOperations), this.pendingVisibilityFlush && await this.pendingVisibilityFlush, await this.flushAllBuffers(), this.sequenceCache.clear(), this.sequenceInitPromises.clear(), this.writeBuffer.clear(), this.mergeProcessor = null, this.appendLatencyBuffer.clear(), this.mergeDurationBuffer.clear();
    }
    async performRecovery() {
      const t = await Zo("wal:activeRoutes") ?? [];
      let i = 0, o = 0;
      for (const n of t) {
        const s = await this.storageMutex.acquire(`route:${n}`);
        try {
          const l = await this.safeStorageGet(`route:${n}:log`) ?? [], h = [];
          let d = 0;
          if (!Array.isArray(l)) console.warn(`[WAL] Log for route ${n} is not an array, resetting`), await ft(`route:${n}:log`, []), d = 1;
          else {
            for (const S of l) try {
              h.push(ka(S));
            } catch {
              d++;
            }
            d > 0 && (await ft(`route:${n}:log`, h), o += d);
          }
          const m = await this.getOrCreateMetadata(n), p = h.filter((S) => !S.merged).length, I = h.length > 0 ? Math.max(...h.map((S) => S.sequence)) : 0;
          (m.unmergedCount !== p || m.totalPoints !== h.length || m.lastSequence < I || d > 0) && (m.unmergedCount = p, m.totalPoints = h.length, m.lastSequence = I, await ft(`route:${n}:metadata`, m), this.metrics.recoveryEvents++, i++), this.updateLogSize(n, h.length);
        } catch (l) {
          console.error(`[WAL] Recovery failed for route ${n}:`, l);
        } finally {
          s();
        }
      }
      return {
        routesRecovered: i,
        entriesRemoved: o
      };
    }
  }
  let Ya = null;
  function ed() {
    return Ya || (Ya = new OS()), Ya;
  }
  qr = ed();
  window.addEventListener("beforeunload", async () => {
    try {
      await ed().shutdown();
    } catch (e) {
      console.error("WAL shutdown failed:", e);
    }
  });
  function tl(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const i of e.split(",")) t[i] = 1;
    return (i) => i in t;
  }
  const Ge = {}, In = [], Ni = () => {
  }, td = () => false, na = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), yt = Object.assign, ol = (e, t) => {
    const i = e.indexOf(t);
    i > -1 && e.splice(i, 1);
  }, RS = Object.prototype.hasOwnProperty, ze = (e, t) => RS.call(e, t), Se = Array.isArray, On = (e) => Mr(e) === "[object Map]", id = (e) => Mr(e) === "[object Set]", wS = (e) => Mr(e) === "[object RegExp]", be = (e) => typeof e == "function", ut = (e) => typeof e == "string", uo = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", od = (e) => (Je(e) || be(e)) && be(e.then) && be(e.catch), nd = Object.prototype.toString, Mr = (e) => nd.call(e), yS = (e) => Mr(e).slice(8, -1), rd = (e) => Mr(e) === "[object Object]", ra = (e) => ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cr = tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), sa = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((i) => t[i] || (t[i] = e(i)));
  }, SS = /-\w/g, hi = sa((e) => e.replace(SS, (t) => t.slice(1).toUpperCase())), AS = /\B([A-Z])/g, ho = sa((e) => e.replace(AS, "-$1").toLowerCase()), aa = sa((e) => e.charAt(0).toUpperCase() + e.slice(1)), za = sa((e) => e ? `on${aa(e)}` : ""), Qt = (e, t) => !Object.is(e, t), lr = (e, ...t) => {
    for (let i = 0; i < e.length; i++) e[i](...t);
  }, sd = (e, t, i, o = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: o,
      value: i
    });
  }, NS = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, bS = (e) => {
    const t = ut(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Vu;
  const ca = () => Vu || (Vu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  la = function(e) {
    if (Se(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) {
        const o = e[i], n = ut(o) ? DS(o) : la(o);
        if (n) for (const s in n) t[s] = n[s];
      }
      return t;
    } else if (ut(e) || Je(e)) return e;
  };
  const vS = /;(?![^(]*\))/g, LS = /:([^]+)/, CS = /\/\*[^]*?\*\//g;
  function DS(e) {
    const t = {};
    return e.replace(CS, "").split(vS).forEach((i) => {
      if (i) {
        const o = i.split(LS);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }), t;
  }
  nl = function(e) {
    let t = "";
    if (ut(e)) t = e;
    else if (Se(e)) for (let i = 0; i < e.length; i++) {
      const o = nl(e[i]);
      o && (t += o + " ");
    }
    else if (Je(e)) for (const i in e) e[i] && (t += i + " ");
    return t.trim();
  };
  const HS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", MS = tl(HS);
  function ad(e) {
    return !!e || e === "";
  }
  let cd, ld, $a;
  cd = (e) => !!(e && e.__v_isRef === true);
  Vi = (e) => ut(e) ? e : e == null ? "" : Se(e) || Je(e) && (e.toString === nd || !be(e.toString)) ? cd(e) ? Vi(e.value) : JSON.stringify(e, ld, 2) : String(e);
  ld = (e, t) => cd(t) ? ld(e, t.value) : On(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((i, [o, n], s) => (i[$a(o, s) + " =>"] = n, i), {})
  } : id(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((i) => $a(i))
  } : uo(t) ? $a(t) : Je(t) && !Se(t) && !rd(t) ? String(t) : t;
  $a = (e, t = "") => {
    var i;
    return uo(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e;
  };
  function PS(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Wt;
  class ud {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Wt, !t && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, i;
        if (this.scopes) for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].pause();
        for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, i;
        if (this.scopes) for (t = 0, i = this.scopes.length; t < i; t++) this.scopes[t].resume();
        for (t = 0, i = this.effects.length; t < i; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const i = Wt;
        try {
          return Wt = this, t();
        } finally {
          Wt = i;
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
        let i, o;
        for (i = 0, o = this.effects.length; i < o; i++) this.effects[i].stop();
        for (this.effects.length = 0, i = 0, o = this.cleanups.length; i < o; i++) this.cleanups[i]();
        if (this.cleanups.length = 0, this.scopes) {
          for (i = 0, o = this.scopes.length; i < o; i++) this.scopes[i].stop(true);
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
  function hd(e) {
    return new ud(e);
  }
  fd = function() {
    return Wt;
  };
  FS = function(e, t = false) {
    Wt && Wt.cleanups.push(e);
  };
  let et;
  const Va = /* @__PURE__ */ new WeakSet();
  class dd {
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
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || md(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Zu(this), gd(this);
      const t = et, i = bi;
      et = this, bi = true;
      try {
        return this.fn();
      } finally {
        Td(this), et = t, bi = i, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) al(t);
        this.deps = this.depsTail = void 0, Zu(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Va.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      wc(this) && this.run();
    }
    get dirty() {
      return wc(this);
    }
  }
  let pd = 0, ur, hr;
  function md(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = hr, hr = e;
      return;
    }
    e.next = ur, ur = e;
  }
  function rl() {
    pd++;
  }
  function sl() {
    if (--pd > 0) return;
    if (hr) {
      let t = hr;
      for (hr = void 0; t; ) {
        const i = t.next;
        t.next = void 0, t.flags &= -9, t = i;
      }
    }
    let e;
    for (; ur; ) {
      let t = ur;
      for (ur = void 0; t; ) {
        const i = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
        t = i;
      }
    }
    if (e) throw e;
  }
  function gd(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Td(e) {
    let t, i = e.depsTail, o = i;
    for (; o; ) {
      const n = o.prevDep;
      o.version === -1 ? (o === i && (i = n), al(o), _S(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = n;
    }
    e.deps = t, e.depsTail = i;
  }
  function wc(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ed(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Ed(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sr) || (e.globalVersion = Sr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wc(e)))) return;
    e.flags |= 2;
    const t = e.dep, i = et, o = bi;
    et = e, bi = true;
    try {
      gd(e);
      const n = e.fn(e._value);
      (t.version === 0 || Qt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
    } catch (n) {
      throw t.version++, n;
    } finally {
      et = i, bi = o, Td(e), e.flags &= -3;
    }
  }
  function al(e, t = false) {
    const { dep: i, prevSub: o, nextSub: n } = e;
    if (o && (o.nextSub = n, e.prevSub = void 0), n && (n.prevSub = o, e.nextSub = void 0), i.subs === e && (i.subs = o, !o && i.computed)) {
      i.computed.flags &= -5;
      for (let s = i.computed.deps; s; s = s.nextDep) al(s, true);
    }
    !t && !--i.sc && i.map && i.map.delete(i.key);
  }
  function _S(e) {
    const { prevDep: t, nextDep: i } = e;
    t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
  }
  let bi = true;
  const Id = [];
  function ro() {
    Id.push(bi), bi = false;
  }
  function so() {
    const e = Id.pop();
    bi = e === void 0 ? true : e;
  }
  function Zu(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const i = et;
      et = void 0;
      try {
        t();
      } finally {
        et = i;
      }
    }
  }
  let Sr = 0;
  class US {
    constructor(t, i) {
      this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class ua {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!et || !bi || et === this.computed) return;
      let i = this.activeLink;
      if (i === void 0 || i.sub !== et) i = this.activeLink = new US(et, this), et.deps ? (i.prevDep = et.depsTail, et.depsTail.nextDep = i, et.depsTail = i) : et.deps = et.depsTail = i, Od(i);
      else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
        const o = i.nextDep;
        o.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = o), i.prevDep = et.depsTail, i.nextDep = void 0, et.depsTail.nextDep = i, et.depsTail = i, et.deps === i && (et.deps = o);
      }
      return i;
    }
    trigger(t) {
      this.version++, Sr++, this.notify(t);
    }
    notify(t) {
      rl();
      try {
        for (let i = this.subs; i; i = i.prevSub) i.sub.notify() && i.sub.dep.notify();
      } finally {
        sl();
      }
    }
  }
  function Od(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let o = t.deps; o; o = o.nextDep) Od(o);
      }
      const i = e.dep.subs;
      i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
    }
  }
  const bs = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ Symbol(""), yc = /* @__PURE__ */ Symbol(""), Ar = /* @__PURE__ */ Symbol("");
  function Gt(e, t, i) {
    if (bi && et) {
      let o = bs.get(e);
      o || bs.set(e, o = /* @__PURE__ */ new Map());
      let n = o.get(i);
      n || (o.set(i, n = new ua()), n.map = o, n.key = i), n.track();
    }
  }
  function Xi(e, t, i, o, n, s) {
    const l = bs.get(e);
    if (!l) {
      Sr++;
      return;
    }
    const h = (d) => {
      d && d.trigger();
    };
    if (rl(), t === "clear") l.forEach(h);
    else {
      const d = Se(e), m = d && ra(i);
      if (d && i === "length") {
        const p = Number(o);
        l.forEach((I, N) => {
          (N === "length" || N === Ar || !uo(N) && N >= p) && h(I);
        });
      } else switch ((i !== void 0 || l.has(void 0)) && h(l.get(i)), m && h(l.get(Ar)), t) {
        case "add":
          d ? m && h(l.get("length")) : (h(l.get(tn)), On(e) && h(l.get(yc)));
          break;
        case "delete":
          d || (h(l.get(tn)), On(e) && h(l.get(yc)));
          break;
        case "set":
          On(e) && h(l.get(tn));
          break;
      }
    }
    sl();
  }
  function kS(e, t) {
    const i = bs.get(e);
    return i && i.get(t);
  }
  function dn(e) {
    const t = ke(e);
    return t === e ? t : (Gt(t, "iterate", Ar), ui(e) ? t : t.map(vi));
  }
  function ha(e) {
    return Gt(e = ke(e), "iterate", Ar), e;
  }
  function Ro(e, t) {
    return ao(e) ? oo(e) ? Fn(vi(t)) : Fn(t) : vi(t);
  }
  const WS = {
    __proto__: null,
    [Symbol.iterator]() {
      return Za(this, Symbol.iterator, (e) => Ro(this, e));
    },
    concat(...e) {
      return dn(this).concat(...e.map((t) => Se(t) ? dn(t) : t));
    },
    entries() {
      return Za(this, "entries", (e) => (e[1] = Ro(this, e[1]), e));
    },
    every(e, t) {
      return Yi(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Yi(this, "filter", e, t, (i) => i.map((o) => Ro(this, o)), arguments);
    },
    find(e, t) {
      return Yi(this, "find", e, t, (i) => Ro(this, i), arguments);
    },
    findIndex(e, t) {
      return Yi(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Yi(this, "findLast", e, t, (i) => Ro(this, i), arguments);
    },
    findLastIndex(e, t) {
      return Yi(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Yi(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return qa(this, "includes", e);
    },
    indexOf(...e) {
      return qa(this, "indexOf", e);
    },
    join(e) {
      return dn(this).join(e);
    },
    lastIndexOf(...e) {
      return qa(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Yi(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Xn(this, "pop");
    },
    push(...e) {
      return Xn(this, "push", e);
    },
    reduce(e, ...t) {
      return qu(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return qu(this, "reduceRight", e, t);
    },
    shift() {
      return Xn(this, "shift");
    },
    some(e, t) {
      return Yi(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Xn(this, "splice", e);
    },
    toReversed() {
      return dn(this).toReversed();
    },
    toSorted(e) {
      return dn(this).toSorted(e);
    },
    toSpliced(...e) {
      return dn(this).toSpliced(...e);
    },
    unshift(...e) {
      return Xn(this, "unshift", e);
    },
    values() {
      return Za(this, "values", (e) => Ro(this, e));
    }
  };
  function Za(e, t, i) {
    const o = ha(e), n = o[t]();
    return o !== e && !ui(e) && (n._next = n.next, n.next = () => {
      const s = n._next();
      return s.done || (s.value = i(s.value)), s;
    }), n;
  }
  const GS = Array.prototype;
  function Yi(e, t, i, o, n, s) {
    const l = ha(e), h = l !== e && !ui(e), d = l[t];
    if (d !== GS[t]) {
      const I = d.apply(e, s);
      return h ? vi(I) : I;
    }
    let m = i;
    l !== e && (h ? m = function(I, N) {
      return i.call(this, Ro(e, I), N, e);
    } : i.length > 2 && (m = function(I, N) {
      return i.call(this, I, N, e);
    }));
    const p = d.call(l, m, o);
    return h && n ? n(p) : p;
  }
  function qu(e, t, i, o) {
    const n = ha(e);
    let s = i;
    return n !== e && (ui(e) ? i.length > 3 && (s = function(l, h, d) {
      return i.call(this, l, h, d, e);
    }) : s = function(l, h, d) {
      return i.call(this, l, Ro(e, h), d, e);
    }), n[t](s, ...o);
  }
  function qa(e, t, i) {
    const o = ke(e);
    Gt(o, "iterate", Ar);
    const n = o[t](...i);
    return (n === -1 || n === false) && da(i[0]) ? (i[0] = ke(i[0]), o[t](...i)) : n;
  }
  function Xn(e, t, i = []) {
    ro(), rl();
    const o = ke(e)[t].apply(e, i);
    return sl(), so(), o;
  }
  const BS = tl("__proto__,__v_isRef,__isVue"), Rd = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(uo));
  function jS(e) {
    uo(e) || (e = String(e));
    const t = ke(this);
    return Gt(t, "has", e), t.hasOwnProperty(e);
  }
  class wd {
    constructor(t = false, i = false) {
      this._isReadonly = t, this._isShallow = i;
    }
    get(t, i, o) {
      if (i === "__v_skip") return t.__v_skip;
      const n = this._isReadonly, s = this._isShallow;
      if (i === "__v_isReactive") return !n;
      if (i === "__v_isReadonly") return n;
      if (i === "__v_isShallow") return s;
      if (i === "__v_raw") return o === (n ? s ? XS : Nd : s ? Ad : Sd).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
      const l = Se(t);
      if (!n) {
        let d;
        if (l && (d = WS[i])) return d;
        if (i === "hasOwnProperty") return jS;
      }
      const h = Reflect.get(t, i, dt(t) ? t : o);
      if ((uo(i) ? Rd.has(i) : BS(i)) || (n || Gt(t, "get", i), s)) return h;
      if (dt(h)) {
        const d = l && ra(i) ? h : h.value;
        return n && Je(d) ? Ac(d) : d;
      }
      return Je(h) ? n ? Ac(h) : fa(h) : h;
    }
  }
  class yd extends wd {
    constructor(t = false) {
      super(false, t);
    }
    set(t, i, o, n) {
      let s = t[i];
      const l = Se(t) && ra(i);
      if (!this._isShallow) {
        const m = ao(s);
        if (!ui(o) && !ao(o) && (s = ke(s), o = ke(o)), !l && dt(s) && !dt(o)) return m || (s.value = o), true;
      }
      const h = l ? Number(i) < t.length : ze(t, i), d = Reflect.set(t, i, o, dt(t) ? t : n);
      return t === ke(n) && (h ? Qt(o, s) && Xi(t, "set", i, o) : Xi(t, "add", i, o)), d;
    }
    deleteProperty(t, i) {
      const o = ze(t, i);
      t[i];
      const n = Reflect.deleteProperty(t, i);
      return n && o && Xi(t, "delete", i, void 0), n;
    }
    has(t, i) {
      const o = Reflect.has(t, i);
      return (!uo(i) || !Rd.has(i)) && Gt(t, "has", i), o;
    }
    ownKeys(t) {
      return Gt(t, "iterate", Se(t) ? "length" : tn), Reflect.ownKeys(t);
    }
  }
  class xS extends wd {
    constructor(t = false) {
      super(true, t);
    }
    set(t, i) {
      return true;
    }
    deleteProperty(t, i) {
      return true;
    }
  }
  const YS = new yd(), zS = new xS(), $S = new yd(true);
  const Sc = (e) => e, Kr = (e) => Reflect.getPrototypeOf(e);
  function VS(e, t, i) {
    return function(...o) {
      const n = this.__v_raw, s = ke(n), l = On(s), h = e === "entries" || e === Symbol.iterator && l, d = e === "keys" && l, m = n[e](...o), p = i ? Sc : t ? Fn : vi;
      return !t && Gt(s, "iterate", d ? yc : tn), {
        next() {
          const { value: I, done: N } = m.next();
          return N ? {
            value: I,
            done: N
          } : {
            value: h ? [
              p(I[0]),
              p(I[1])
            ] : p(I),
            done: N
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
  function ZS(e, t) {
    const i = {
      get(n) {
        const s = this.__v_raw, l = ke(s), h = ke(n);
        e || (Qt(n, h) && Gt(l, "get", n), Gt(l, "get", h));
        const { has: d } = Kr(l), m = t ? Sc : e ? Fn : vi;
        if (d.call(l, n)) return m(s.get(n));
        if (d.call(l, h)) return m(s.get(h));
        s !== l && s.get(n);
      },
      get size() {
        const n = this.__v_raw;
        return !e && Gt(ke(n), "iterate", tn), n.size;
      },
      has(n) {
        const s = this.__v_raw, l = ke(s), h = ke(n);
        return e || (Qt(n, h) && Gt(l, "has", n), Gt(l, "has", h)), n === h ? s.has(n) : s.has(n) || s.has(h);
      },
      forEach(n, s) {
        const l = this, h = l.__v_raw, d = ke(h), m = t ? Sc : e ? Fn : vi;
        return !e && Gt(d, "iterate", tn), h.forEach((p, I) => n.call(s, m(p), m(I), l));
      }
    };
    return yt(i, e ? {
      add: Jr("add"),
      set: Jr("set"),
      delete: Jr("delete"),
      clear: Jr("clear")
    } : {
      add(n) {
        !t && !ui(n) && !ao(n) && (n = ke(n));
        const s = ke(this);
        return Kr(s).has.call(s, n) || (s.add(n), Xi(s, "add", n, n)), this;
      },
      set(n, s) {
        !t && !ui(s) && !ao(s) && (s = ke(s));
        const l = ke(this), { has: h, get: d } = Kr(l);
        let m = h.call(l, n);
        m || (n = ke(n), m = h.call(l, n));
        const p = d.call(l, n);
        return l.set(n, s), m ? Qt(s, p) && Xi(l, "set", n, s) : Xi(l, "add", n, s), this;
      },
      delete(n) {
        const s = ke(this), { has: l, get: h } = Kr(s);
        let d = l.call(s, n);
        d || (n = ke(n), d = l.call(s, n)), h && h.call(s, n);
        const m = s.delete(n);
        return d && Xi(s, "delete", n, void 0), m;
      },
      clear() {
        const n = ke(this), s = n.size !== 0, l = n.clear();
        return s && Xi(n, "clear", void 0, void 0), l;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((n) => {
      i[n] = VS(n, e, t);
    }), i;
  }
  function cl(e, t) {
    const i = ZS(e, t);
    return (o, n, s) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? o : Reflect.get(ze(i, n) && n in o ? i : o, n, s);
  }
  const qS = {
    get: cl(false, false)
  }, KS = {
    get: cl(false, true)
  }, JS = {
    get: cl(true, false)
  };
  const Sd = /* @__PURE__ */ new WeakMap(), Ad = /* @__PURE__ */ new WeakMap(), Nd = /* @__PURE__ */ new WeakMap(), XS = /* @__PURE__ */ new WeakMap();
  function QS(e) {
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
  function eA(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : QS(yS(e));
  }
  fa = function(e) {
    return ao(e) ? e : ll(e, false, YS, qS, Sd);
  };
  tA = function(e) {
    return ll(e, false, $S, KS, Ad);
  };
  Ac = function(e) {
    return ll(e, true, zS, JS, Nd);
  };
  function ll(e, t, i, o, n) {
    if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = eA(e);
    if (s === 0) return e;
    const l = n.get(e);
    if (l) return l;
    const h = new Proxy(e, s === 2 ? o : i);
    return n.set(e, h), h;
  }
  function oo(e) {
    return ao(e) ? oo(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function ao(e) {
    return !!(e && e.__v_isReadonly);
  }
  function ui(e) {
    return !!(e && e.__v_isShallow);
  }
  function da(e) {
    return e ? !!e.__v_raw : false;
  }
  ke = function(e) {
    const t = e && e.__v_raw;
    return t ? ke(t) : e;
  };
  ul = function(e) {
    return !ze(e, "__v_skip") && Object.isExtensible(e) && sd(e, "__v_skip", true), e;
  };
  const vi = (e) => Je(e) ? fa(e) : e, Fn = (e) => Je(e) ? Ac(e) : e;
  dt = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Jt = function(e) {
    return bd(e, false);
  };
  iA = function(e) {
    return bd(e, true);
  };
  function bd(e, t) {
    return dt(e) ? e : new oA(e, t);
  }
  class oA {
    constructor(t, i) {
      this.dep = new ua(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = i ? t : ke(t), this._value = i ? t : vi(t), this.__v_isShallow = i;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const i = this._rawValue, o = this.__v_isShallow || ui(t) || ao(t);
      t = o ? t : ke(t), Qt(t, i) && (this._rawValue = t, this._value = o ? t : vi(t), this.dep.trigger());
    }
  }
  Rn = function(e) {
    return dt(e) ? e.value : e;
  };
  Rv = function(e) {
    return be(e) ? e() : Rn(e);
  };
  const nA = {
    get: (e, t, i) => t === "__v_raw" ? e : Rn(Reflect.get(e, t, i)),
    set: (e, t, i, o) => {
      const n = e[t];
      return dt(n) && !dt(i) ? (n.value = i, true) : Reflect.set(e, t, i, o);
    }
  };
  function vd(e) {
    return oo(e) ? e : new Proxy(e, nA);
  }
  class rA {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const i = this.dep = new ua(), { get: o, set: n } = t(i.track.bind(i), i.trigger.bind(i));
      this._get = o, this._set = n;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function sA(e) {
    return new rA(e);
  }
  aA = function(e) {
    const t = Se(e) ? new Array(e.length) : {};
    for (const i in e) t[i] = Ld(e, i);
    return t;
  };
  class cA {
    constructor(t, i, o) {
      this._object = t, this._key = i, this._defaultValue = o, this.__v_isRef = true, this._value = void 0, this._raw = ke(t);
      let n = true, s = t;
      if (!Se(t) || !ra(String(i))) do
        n = !da(s) || ui(s);
      while (n && (s = s.__v_raw));
      this._shallow = n;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Rn(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && dt(this._raw[this._key])) {
        const i = this._object[this._key];
        if (dt(i)) {
          i.value = t;
          return;
        }
      }
      this._object[this._key] = t;
    }
    get dep() {
      return kS(this._raw, this._key);
    }
  }
  class lA {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  wv = function(e, t, i) {
    return dt(e) ? e : be(e) ? new lA(e) : Je(e) && arguments.length > 1 ? Ld(e, t, i) : Jt(e);
  };
  function Ld(e, t, i) {
    return new cA(e, t, i);
  }
  class uA {
    constructor(t, i, o) {
      this.fn = t, this.setter = i, this._value = void 0, this.dep = new ua(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = o;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && et !== this) return md(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Ed(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function hA(e, t, i = false) {
    let o, n;
    return be(e) ? o = e : (o = e.get, n = e.set), new uA(o, n, i);
  }
  const Xr = {}, vs = /* @__PURE__ */ new WeakMap();
  let Ko;
  function fA(e, t = false, i = Ko) {
    if (i) {
      let o = vs.get(i);
      o || vs.set(i, o = []), o.push(e);
    }
  }
  function dA(e, t, i = Ge) {
    const { immediate: o, deep: n, once: s, scheduler: l, augmentJob: h, call: d } = i, m = (_) => n ? _ : ui(_) || n === false || n === 0 ? Qi(_, 1) : Qi(_);
    let p, I, N, S, M = false, D = false;
    if (dt(e) ? (I = () => e.value, M = ui(e)) : oo(e) ? (I = () => m(e), M = true) : Se(e) ? (D = true, M = e.some((_) => oo(_) || ui(_)), I = () => e.map((_) => {
      if (dt(_)) return _.value;
      if (oo(_)) return m(_);
      if (be(_)) return d ? d(_, 2) : _();
    })) : be(e) ? t ? I = d ? () => d(e, 2) : e : I = () => {
      if (N) {
        ro();
        try {
          N();
        } finally {
          so();
        }
      }
      const _ = Ko;
      Ko = p;
      try {
        return d ? d(e, 3, [
          S
        ]) : e(S);
      } finally {
        Ko = _;
      }
    } : I = Ni, t && n) {
      const _ = I, re = n === true ? 1 / 0 : n;
      I = () => Qi(_(), re);
    }
    const ie = fd(), Q = () => {
      p.stop(), ie && ie.active && ol(ie.effects, p);
    };
    if (s && t) {
      const _ = t;
      t = (...re) => {
        _(...re), Q();
      };
    }
    let Y = D ? new Array(e.length).fill(Xr) : Xr;
    const G = (_) => {
      if (!(!(p.flags & 1) || !p.dirty && !_)) if (t) {
        const re = p.run();
        if (n || M || (D ? re.some((ge, se) => Qt(ge, Y[se])) : Qt(re, Y))) {
          N && N();
          const ge = Ko;
          Ko = p;
          try {
            const se = [
              re,
              Y === Xr ? void 0 : D && Y[0] === Xr ? [] : Y,
              S
            ];
            Y = re, d ? d(t, 3, se) : t(...se);
          } finally {
            Ko = ge;
          }
        }
      } else p.run();
    };
    return h && h(G), p = new dd(I), p.scheduler = l ? () => l(G, false) : G, S = (_) => fA(_, false, p), N = p.onStop = () => {
      const _ = vs.get(p);
      if (_) {
        if (d) d(_, 4);
        else for (const re of _) re();
        vs.delete(p);
      }
    }, t ? o ? G(true) : Y = p.run() : l ? l(G.bind(null, true), true) : p.run(), Q.pause = p.pause.bind(p), Q.resume = p.resume.bind(p), Q.stop = Q, Q;
  }
  function Qi(e, t = 1 / 0, i) {
    if (t <= 0 || !Je(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t)) return e;
    if (i.set(e, t), t--, dt(e)) Qi(e.value, t, i);
    else if (Se(e)) for (let o = 0; o < e.length; o++) Qi(e[o], t, i);
    else if (id(e) || On(e)) e.forEach((o) => {
      Qi(o, t, i);
    });
    else if (rd(e)) {
      for (const o in e) Qi(e[o], t, i);
      for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && Qi(e[o], t, i);
    }
    return e;
  }
  function Pr(e, t, i, o) {
    try {
      return o ? e(...o) : e();
    } catch (n) {
      pa(n, t, i);
    }
  }
  function Li(e, t, i, o) {
    if (be(e)) {
      const n = Pr(e, t, i, o);
      return n && od(n) && n.catch((s) => {
        pa(s, t, i);
      }), n;
    }
    if (Se(e)) {
      const n = [];
      for (let s = 0; s < e.length; s++) n.push(Li(e[s], t, i, o));
      return n;
    }
  }
  function pa(e, t, i, o = true) {
    const n = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Ge;
    if (t) {
      let h = t.parent;
      const d = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${i}`;
      for (; h; ) {
        const p = h.ec;
        if (p) {
          for (let I = 0; I < p.length; I++) if (p[I](e, d, m) === false) return;
        }
        h = h.parent;
      }
      if (s) {
        ro(), Pr(s, null, 10, [
          e,
          d,
          m
        ]), so();
        return;
      }
    }
    pA(e, i, n, o, l);
  }
  function pA(e, t, i, o = true, n = false) {
    if (n) throw e;
    console.error(e);
  }
  const Zt = [];
  let Fi = -1;
  const wn = [];
  let wo = null, mn = 0;
  const Cd = Promise.resolve();
  let Ls = null;
  Dd = function(e) {
    const t = Ls || Cd;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function mA(e) {
    let t = Fi + 1, i = Zt.length;
    for (; t < i; ) {
      const o = t + i >>> 1, n = Zt[o], s = Nr(n);
      s < e || s === e && n.flags & 2 ? t = o + 1 : i = o;
    }
    return t;
  }
  function hl(e) {
    if (!(e.flags & 1)) {
      const t = Nr(e), i = Zt[Zt.length - 1];
      !i || !(e.flags & 2) && t >= Nr(i) ? Zt.push(e) : Zt.splice(mA(t), 0, e), e.flags |= 1, Hd();
    }
  }
  function Hd() {
    Ls || (Ls = Cd.then(Fd));
  }
  function Md(e) {
    Se(e) ? wn.push(...e) : wo && e.id === -1 ? wo.splice(mn + 1, 0, e) : e.flags & 1 || (wn.push(e), e.flags |= 1), Hd();
  }
  function Ku(e, t, i = Fi + 1) {
    for (; i < Zt.length; i++) {
      const o = Zt[i];
      if (o && o.flags & 2) {
        if (e && o.id !== e.uid) continue;
        Zt.splice(i, 1), i--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
      }
    }
  }
  function Pd(e) {
    if (wn.length) {
      const t = [
        ...new Set(wn)
      ].sort((i, o) => Nr(i) - Nr(o));
      if (wn.length = 0, wo) {
        wo.push(...t);
        return;
      }
      for (wo = t, mn = 0; mn < wo.length; mn++) {
        const i = wo[mn];
        i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
      }
      wo = null, mn = 0;
    }
  }
  const Nr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Fd(e) {
    try {
      for (Fi = 0; Fi < Zt.length; Fi++) {
        const t = Zt[Fi];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Pr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Fi < Zt.length; Fi++) {
        const t = Zt[Fi];
        t && (t.flags &= -2);
      }
      Fi = -1, Zt.length = 0, Pd(), Ls = null, (Zt.length || wn.length) && Fd();
    }
  }
  let Pt = null, _d = null;
  function Cs(e) {
    const t = Pt;
    return Pt = e, _d = e && e.type.__scopeId || null, t;
  }
  gA = function(e, t = Pt, i) {
    if (!t || e._n) return e;
    const o = (...n) => {
      o._d && _s(-1);
      const s = Cs(t);
      let l;
      try {
        l = e(...n);
      } finally {
        Cs(s), o._d && _s(1);
      }
      return l;
    };
    return o._n = true, o._c = true, o._d = true, o;
  };
  yv = function(e, t) {
    if (Pt === null) return e;
    const i = Oa(Pt), o = e.dirs || (e.dirs = []);
    for (let n = 0; n < t.length; n++) {
      let [s, l, h, d = Ge] = t[n];
      s && (be(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && Qi(l), o.push({
        dir: s,
        instance: i,
        value: l,
        oldValue: void 0,
        arg: h,
        modifiers: d
      }));
    }
    return e;
  };
  function zo(e, t, i, o) {
    const n = e.dirs, s = t && t.dirs;
    for (let l = 0; l < n.length; l++) {
      const h = n[l];
      s && (h.oldValue = s[l].value);
      let d = h.dir[o];
      d && (ro(), Li(d, i, 8, [
        e.el,
        h,
        e,
        t
      ]), so());
    }
  }
  TA = function(e, t) {
    if (Bt) {
      let i = Bt.provides;
      const o = Bt.parent && Bt.parent.provides;
      o === i && (i = Bt.provides = Object.create(o)), i[e] = t;
    }
  };
  fr = function(e, t, i = false) {
    const o = ko();
    if (o || on) {
      let n = on ? on._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
      if (n && e in n) return n[e];
      if (arguments.length > 1) return i && be(t) ? t.call(o && o.proxy) : t;
    }
  };
  EA = function() {
    return !!(ko() || on);
  };
  const IA = /* @__PURE__ */ Symbol.for("v-scx"), OA = () => fr(IA);
  Sv = function(e, t) {
    return ma(e, null, t);
  };
  function RA(e, t) {
    return ma(e, null, {
      flush: "sync"
    });
  }
  yn = function(e, t, i) {
    return ma(e, t, i);
  };
  function ma(e, t, i = Ge) {
    const { immediate: o, deep: n, flush: s, once: l } = i, h = yt({}, i), d = t && o || !t && s !== "post";
    let m;
    if (Lr) {
      if (s === "sync") {
        const S = OA();
        m = S.__watcherHandles || (S.__watcherHandles = []);
      } else if (!d) {
        const S = () => {
        };
        return S.stop = Ni, S.resume = Ni, S.pause = Ni, S;
      }
    }
    const p = Bt;
    h.call = (S, M, D) => Li(S, p, M, D);
    let I = false;
    s === "post" ? h.scheduler = (S) => {
      bt(S, p && p.suspense);
    } : s !== "sync" && (I = true, h.scheduler = (S, M) => {
      M ? S() : hl(S);
    }), h.augmentJob = (S) => {
      t && (S.flags |= 4), I && (S.flags |= 2, p && (S.id = p.uid, S.i = p));
    };
    const N = dA(e, t, h);
    return Lr && (m ? m.push(N) : d && N()), N;
  }
  function wA(e, t, i) {
    const o = this.proxy, n = ut(e) ? e.includes(".") ? Ud(o, e) : () => o[e] : e.bind(o, o);
    let s;
    be(t) ? s = t : (s = t.handler, i = t);
    const l = _r(this), h = ma(n, s.bind(o), i);
    return l(), h;
  }
  function Ud(e, t) {
    const i = t.split(".");
    return () => {
      let o = e;
      for (let n = 0; n < i.length && o; n++) o = o[i[n]];
      return o;
    };
  }
  const kd = /* @__PURE__ */ Symbol("_vte"), Wd = (e) => e.__isTeleport, dr = (e) => e && (e.disabled || e.disabled === ""), Ju = (e) => e && (e.defer || e.defer === ""), Xu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Qu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Nc = (e, t) => {
    const i = e && e.to;
    return ut(i) ? t ? t(i) : null : i;
  }, Gd = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, i, o, n, s, l, h, d, m) {
      const { mc: p, pc: I, pbc: N, o: { insert: S, querySelector: M, createText: D, createComment: ie } } = m, Q = dr(t.props);
      let { shapeFlag: Y, children: G, dynamicChildren: _ } = t;
      if (e == null) {
        const re = t.el = D(""), ge = t.anchor = D("");
        S(re, i, o), S(ge, i, o);
        const se = (ne, Te) => {
          Y & 16 && p(G, ne, Te, n, s, l, h, d);
        }, de = () => {
          const ne = t.target = Nc(t.props, M), Te = Bd(ne, t, D, S);
          ne && (l !== "svg" && Xu(ne) ? l = "svg" : l !== "mathml" && Qu(ne) && (l = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(ne), Q || (se(ne, Te), ps(t, false)));
        };
        Q && (se(i, ge), ps(t, true)), Ju(t.props) ? (t.el.__isMounted = false, bt(() => {
          de(), delete t.el.__isMounted;
        }, s)) : de();
      } else {
        if (Ju(t.props) && e.el.__isMounted === false) {
          bt(() => {
            Gd.process(e, t, i, o, n, s, l, h, d, m);
          }, s);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const re = t.anchor = e.anchor, ge = t.target = e.target, se = t.targetAnchor = e.targetAnchor, de = dr(e.props), ne = de ? i : ge, Te = de ? re : se;
        if (l === "svg" || Xu(ge) ? l = "svg" : (l === "mathml" || Qu(ge)) && (l = "mathml"), _ ? (N(e.dynamicChildren, _, ne, n, s, l, h), El(e, t, true)) : d || I(e, t, ne, Te, n, s, l, h, false), Q) de ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Qr(t, i, re, m, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Ce = t.target = Nc(t.props, M);
          Ce && Qr(t, Ce, null, m, 0);
        } else de && Qr(t, ge, se, m, 1);
        ps(t, Q);
      }
    },
    remove(e, t, i, { um: o, o: { remove: n } }, s) {
      const { shapeFlag: l, children: h, anchor: d, targetStart: m, targetAnchor: p, target: I, props: N } = e;
      if (I && (n(m), n(p)), s && n(d), l & 16) {
        const S = s || !dr(N);
        for (let M = 0; M < h.length; M++) {
          const D = h[M];
          o(D, t, i, S, !!D.dynamicChildren);
        }
      }
    },
    move: Qr,
    hydrate: yA
  };
  function Qr(e, t, i, { o: { insert: o }, m: n }, s = 2) {
    s === 0 && o(e.targetAnchor, t, i);
    const { el: l, anchor: h, shapeFlag: d, children: m, props: p } = e, I = s === 2;
    if (I && o(l, t, i), (!I || dr(p)) && d & 16) for (let N = 0; N < m.length; N++) n(m[N], t, i, 2);
    I && o(h, t, i);
  }
  function yA(e, t, i, o, n, s, { o: { nextSibling: l, parentNode: h, querySelector: d, insert: m, createText: p } }, I) {
    function N(D, ie, Q, Y) {
      ie.anchor = I(l(D), ie, h(D), i, o, n, s), ie.targetStart = Q, ie.targetAnchor = Y;
    }
    const S = t.target = Nc(t.props, d), M = dr(t.props);
    if (S) {
      const D = S._lpa || S.firstChild;
      if (t.shapeFlag & 16) if (M) N(e, t, D, D && l(D));
      else {
        t.anchor = l(e);
        let ie = D;
        for (; ie; ) {
          if (ie && ie.nodeType === 8) {
            if (ie.data === "teleport start anchor") t.targetStart = ie;
            else if (ie.data === "teleport anchor") {
              t.targetAnchor = ie, S._lpa = t.targetAnchor && l(t.targetAnchor);
              break;
            }
          }
          ie = l(ie);
        }
        t.targetAnchor || Bd(S, t, p, m), I(D && l(D), t, S, i, o, n, s);
      }
      ps(t, M);
    } else M && t.shapeFlag & 16 && N(e, t, e, l(e));
    return t.anchor && l(t.anchor);
  }
  Av = Gd;
  function ps(e, t) {
    const i = e.ctx;
    if (i && i.ut) {
      let o, n;
      for (t ? (o = e.el, n = e.anchor) : (o = e.targetStart, n = e.targetAnchor); o && o !== n; ) o.nodeType === 1 && o.setAttribute("data-v-owner", i.uid), o = o.nextSibling;
      i.ut();
    }
  }
  function Bd(e, t, i, o) {
    const n = t.targetStart = i(""), s = t.targetAnchor = i("");
    return n[kd] = s, e && (o(n, e), o(s, e)), s;
  }
  const Ji = /* @__PURE__ */ Symbol("_leaveCb"), es = /* @__PURE__ */ Symbol("_enterCb");
  function jd() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Fr(() => {
      e.isMounted = true;
    }), pl(() => {
      e.isUnmounting = true;
    }), e;
  }
  const mi = [
    Function,
    Array
  ], xd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: mi,
    onEnter: mi,
    onAfterEnter: mi,
    onEnterCancelled: mi,
    onBeforeLeave: mi,
    onLeave: mi,
    onAfterLeave: mi,
    onLeaveCancelled: mi,
    onBeforeAppear: mi,
    onAppear: mi,
    onAfterAppear: mi,
    onAppearCancelled: mi
  }, Yd = (e) => {
    const t = e.subTree;
    return t.component ? Yd(t.component) : t;
  }, SA = {
    name: "BaseTransition",
    props: xd,
    setup(e, { slots: t }) {
      const i = ko(), o = jd();
      return () => {
        const n = t.default && fl(t.default(), true);
        if (!n || !n.length) return;
        const s = zd(n), l = ke(e), { mode: h } = l;
        if (o.isLeaving) return Ka(s);
        const d = eh(s);
        if (!d) return Ka(s);
        let m = br(d, l, o, i, (I) => m = I);
        d.type !== Mt && Ho(d, m);
        let p = i.subTree && eh(i.subTree);
        if (p && p.type !== Mt && !Ao(p, d) && Yd(i).type !== Mt) {
          let I = br(p, l, o, i);
          if (Ho(p, I), h === "out-in" && d.type !== Mt) return o.isLeaving = true, I.afterLeave = () => {
            o.isLeaving = false, i.job.flags & 8 || i.update(), delete I.afterLeave, p = void 0;
          }, Ka(s);
          h === "in-out" && d.type !== Mt ? I.delayLeave = (N, S, M) => {
            const D = $d(o, p);
            D[String(p.key)] = p, N[Ji] = () => {
              S(), N[Ji] = void 0, delete m.delayedLeave, p = void 0;
            }, m.delayedLeave = () => {
              M(), delete m.delayedLeave, p = void 0;
            };
          } : p = void 0;
        } else p && (p = void 0);
        return s;
      };
    }
  };
  function zd(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const i of e) if (i.type !== Mt) {
        t = i;
        break;
      }
    }
    return t;
  }
  const AA = SA;
  function $d(e, t) {
    const { leavingVNodes: i } = e;
    let o = i.get(t.type);
    return o || (o = /* @__PURE__ */ Object.create(null), i.set(t.type, o)), o;
  }
  function br(e, t, i, o, n) {
    const { appear: s, mode: l, persisted: h = false, onBeforeEnter: d, onEnter: m, onAfterEnter: p, onEnterCancelled: I, onBeforeLeave: N, onLeave: S, onAfterLeave: M, onLeaveCancelled: D, onBeforeAppear: ie, onAppear: Q, onAfterAppear: Y, onAppearCancelled: G } = t, _ = String(e.key), re = $d(i, e), ge = (ne, Te) => {
      ne && Li(ne, o, 9, Te);
    }, se = (ne, Te) => {
      const Ce = Te[1];
      ge(ne, Te), Se(ne) ? ne.every((pe) => pe.length <= 1) && Ce() : ne.length <= 1 && Ce();
    }, de = {
      mode: l,
      persisted: h,
      beforeEnter(ne) {
        let Te = d;
        if (!i.isMounted) if (s) Te = ie || d;
        else return;
        ne[Ji] && ne[Ji](true);
        const Ce = re[_];
        Ce && Ao(e, Ce) && Ce.el[Ji] && Ce.el[Ji](), ge(Te, [
          ne
        ]);
      },
      enter(ne) {
        let Te = m, Ce = p, pe = I;
        if (!i.isMounted) if (s) Te = Q || m, Ce = Y || p, pe = G || I;
        else return;
        let xe = false;
        const Ot = ne[es] = (oi) => {
          xe || (xe = true, oi ? ge(pe, [
            ne
          ]) : ge(Ce, [
            ne
          ]), de.delayedLeave && de.delayedLeave(), ne[es] = void 0);
        };
        Te ? se(Te, [
          ne,
          Ot
        ]) : Ot();
      },
      leave(ne, Te) {
        const Ce = String(e.key);
        if (ne[es] && ne[es](true), i.isUnmounting) return Te();
        ge(N, [
          ne
        ]);
        let pe = false;
        const xe = ne[Ji] = (Ot) => {
          pe || (pe = true, Te(), Ot ? ge(D, [
            ne
          ]) : ge(M, [
            ne
          ]), ne[Ji] = void 0, re[Ce] === e && delete re[Ce]);
        };
        re[Ce] = e, S ? se(S, [
          ne,
          xe
        ]) : xe();
      },
      clone(ne) {
        const Te = br(ne, t, i, o, n);
        return n && n(Te), Te;
      }
    };
    return de;
  }
  function Ka(e) {
    if (ga(e)) return e = co(e), e.children = null, e;
  }
  function eh(e) {
    if (!ga(e)) return Wd(e.type) && e.children ? zd(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: i } = e;
    if (i) {
      if (t & 16) return i[0];
      if (t & 32 && be(i.default)) return i.default();
    }
  }
  function Ho(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Ho(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function fl(e, t = false, i) {
    let o = [], n = 0;
    for (let s = 0; s < e.length; s++) {
      let l = e[s];
      const h = i == null ? l.key : String(i) + String(l.key != null ? l.key : s);
      l.type === Ht ? (l.patchFlag & 128 && n++, o = o.concat(fl(l.children, t, h))) : (t || l.type !== Mt) && o.push(h != null ? co(l, {
        key: h
      }) : l);
    }
    if (n > 1) for (let s = 0; s < o.length; s++) o[s].patchFlag = -2;
    return o;
  }
  NA = function(e, t) {
    return be(e) ? yt({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Vd(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  Nv = function(e) {
    const t = ko(), i = iA(null);
    if (t) {
      const n = t.refs === Ge ? t.refs = {} : t.refs;
      Object.defineProperty(n, e, {
        enumerable: true,
        get: () => i.value,
        set: (s) => i.value = s
      });
    }
    return i;
  };
  const Ds = /* @__PURE__ */ new WeakMap();
  function pr(e, t, i, o, n = false) {
    if (Se(e)) {
      e.forEach((M, D) => pr(M, t && (Se(t) ? t[D] : t), i, o, n));
      return;
    }
    if (bo(o) && !n) {
      o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && pr(e, t, i, o.component.subTree);
      return;
    }
    const s = o.shapeFlag & 4 ? Oa(o.component) : o.el, l = n ? null : s, { i: h, r: d } = e, m = t && t.r, p = h.refs === Ge ? h.refs = {} : h.refs, I = h.setupState, N = ke(I), S = I === Ge ? td : (M) => ze(N, M);
    if (m != null && m !== d) {
      if (th(t), ut(m)) p[m] = null, S(m) && (I[m] = null);
      else if (dt(m)) {
        m.value = null;
        const M = t;
        M.k && (p[M.k] = null);
      }
    }
    if (be(d)) Pr(d, h, 12, [
      l,
      p
    ]);
    else {
      const M = ut(d), D = dt(d);
      if (M || D) {
        const ie = () => {
          if (e.f) {
            const Q = M ? S(d) ? I[d] : p[d] : d.value;
            if (n) Se(Q) && ol(Q, s);
            else if (Se(Q)) Q.includes(s) || Q.push(s);
            else if (M) p[d] = [
              s
            ], S(d) && (I[d] = p[d]);
            else {
              const Y = [
                s
              ];
              d.value = Y, e.k && (p[e.k] = Y);
            }
          } else M ? (p[d] = l, S(d) && (I[d] = l)) : D && (d.value = l, e.k && (p[e.k] = l));
        };
        if (l) {
          const Q = () => {
            ie(), Ds.delete(e);
          };
          Q.id = -1, Ds.set(e, Q), bt(Q, i);
        } else th(e), ie();
      }
    }
  }
  function th(e) {
    const t = Ds.get(e);
    t && (t.flags |= 8, Ds.delete(e));
  }
  ca().requestIdleCallback;
  ca().cancelIdleCallback;
  let bo, ga, bA;
  bo = (e) => !!e.type.__asyncLoader;
  ga = (e) => e.type.__isKeepAlive;
  bA = {
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
      const i = ko(), o = i.ctx;
      if (!o.renderer) return () => {
        const Y = t.default && t.default();
        return Y && Y.length === 1 ? Y[0] : Y;
      };
      const n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      let l = null;
      const h = i.suspense, { renderer: { p: d, m, um: p, o: { createElement: I } } } = o, N = I("div");
      o.activate = (Y, G, _, re, ge) => {
        const se = Y.component;
        m(Y, G, _, 0, h), d(se.vnode, Y, G, _, se, h, re, Y.slotScopeIds, ge), bt(() => {
          se.isDeactivated = false, se.a && lr(se.a);
          const de = Y.props && Y.props.onVnodeMounted;
          de && gi(de, se.parent, Y);
        }, h);
      }, o.deactivate = (Y) => {
        const G = Y.component;
        Ps(G.m), Ps(G.a), m(Y, N, null, 1, h), bt(() => {
          G.da && lr(G.da);
          const _ = Y.props && Y.props.onVnodeUnmounted;
          _ && gi(_, G.parent, Y), G.isDeactivated = true;
        }, h);
      };
      function S(Y) {
        Ja(Y), p(Y, i, h, true);
      }
      function M(Y) {
        n.forEach((G, _) => {
          const re = Mc(bo(G) ? G.type.__asyncResolved || {} : G.type);
          re && !Y(re) && D(_);
        });
      }
      function D(Y) {
        const G = n.get(Y);
        G && (!l || !Ao(G, l)) ? S(G) : l && Ja(l), n.delete(Y), s.delete(Y);
      }
      yn(() => [
        e.include,
        e.exclude
      ], ([Y, G]) => {
        Y && M((_) => nr(Y, _)), G && M((_) => !nr(G, _));
      }, {
        flush: "post",
        deep: true
      });
      let ie = null;
      const Q = () => {
        ie != null && (Fs(i.subTree.type) ? bt(() => {
          n.set(ie, ts(i.subTree));
        }, i.subTree.suspense) : n.set(ie, ts(i.subTree)));
      };
      return Fr(Q), dl(Q), pl(() => {
        n.forEach((Y) => {
          const { subTree: G, suspense: _ } = i, re = ts(G);
          if (Y.type === re.type && Y.key === re.key) {
            Ja(re);
            const ge = re.component.da;
            ge && bt(ge, _);
            return;
          }
          S(Y);
        });
      }), () => {
        if (ie = null, !t.default) return l = null;
        const Y = t.default(), G = Y[0];
        if (Y.length > 1) return l = null, Y;
        if (!_n(G) || !(G.shapeFlag & 4) && !(G.shapeFlag & 128)) return l = null, G;
        let _ = ts(G);
        if (_.type === Mt) return l = null, _;
        const re = _.type, ge = Mc(bo(_) ? _.type.__asyncResolved || {} : re), { include: se, exclude: de, max: ne } = e;
        if (se && (!ge || !nr(se, ge)) || de && ge && nr(de, ge)) return _.shapeFlag &= -257, l = _, G;
        const Te = _.key == null ? re : _.key, Ce = n.get(Te);
        return _.el && (_ = co(_), G.shapeFlag & 128 && (G.ssContent = _)), ie = Te, Ce ? (_.el = Ce.el, _.component = Ce.component, _.transition && Ho(_, _.transition), _.shapeFlag |= 512, s.delete(Te), s.add(Te)) : (s.add(Te), ne && s.size > parseInt(ne, 10) && D(s.values().next().value)), _.shapeFlag |= 256, l = _, Fs(G.type) ? G : _;
      };
    }
  };
  bv = bA;
  function nr(e, t) {
    return Se(e) ? e.some((i) => nr(i, t)) : ut(e) ? e.split(",").includes(t) : wS(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  vA = function(e, t) {
    Zd(e, "a", t);
  };
  LA = function(e, t) {
    Zd(e, "da", t);
  };
  function Zd(e, t, i = Bt) {
    const o = e.__wdc || (e.__wdc = () => {
      let n = i;
      for (; n; ) {
        if (n.isDeactivated) return;
        n = n.parent;
      }
      return e();
    });
    if (Ta(t, o, i), i) {
      let n = i.parent;
      for (; n && n.parent; ) ga(n.parent.vnode) && CA(o, t, i, n), n = n.parent;
    }
  }
  function CA(e, t, i, o) {
    const n = Ta(t, e, o, true);
    ml(() => {
      ol(o[t], n);
    }, i);
  }
  function Ja(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function ts(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function Ta(e, t, i = Bt, o = false) {
    if (i) {
      const n = i[e] || (i[e] = []), s = t.__weh || (t.__weh = (...l) => {
        ro();
        const h = _r(i), d = Li(t, i, e, l);
        return h(), so(), d;
      });
      return o ? n.unshift(s) : n.push(s), s;
    }
  }
  let fo, qd, dl, HA, MA, PA;
  fo = (e) => (t, i = Bt) => {
    (!Lr || e === "sp") && Ta(e, (...o) => t(...o), i);
  };
  DA = fo("bm");
  Fr = fo("m");
  qd = fo("bu");
  dl = fo("u");
  pl = fo("bum");
  ml = fo("um");
  HA = fo("sp");
  MA = fo("rtg");
  PA = fo("rtc");
  function FA(e, t = Bt) {
    Ta("ec", e, t);
  }
  const _A = "components", Kd = /* @__PURE__ */ Symbol.for("v-ndc");
  vv = function(e) {
    return ut(e) ? UA(_A, e, false) || e : e || Kd;
  };
  function UA(e, t, i = true, o = false) {
    const n = Pt || Bt;
    if (n) {
      const s = n.type;
      {
        const h = Mc(s, false);
        if (h && (h === t || h === hi(t) || h === aa(hi(t)))) return s;
      }
      const l = ih(n[e] || s[e], t) || ih(n.appContext[e], t);
      return !l && o ? s : l;
    }
  }
  function ih(e, t) {
    return e && (e[t] || e[hi(t)] || e[aa(hi(t))]);
  }
  kA = function(e, t, i, o) {
    let n;
    const s = i, l = Se(e);
    if (l || ut(e)) {
      const h = l && oo(e);
      let d = false, m = false;
      h && (d = !ui(e), m = ao(e), e = ha(e)), n = new Array(e.length);
      for (let p = 0, I = e.length; p < I; p++) n[p] = t(d ? m ? Fn(vi(e[p])) : vi(e[p]) : e[p], p, void 0, s);
    } else if (typeof e == "number") {
      n = new Array(e);
      for (let h = 0; h < e; h++) n[h] = t(h + 1, h, void 0, s);
    } else if (Je(e)) if (e[Symbol.iterator]) n = Array.from(e, (h, d) => t(h, d, void 0, s));
    else {
      const h = Object.keys(e);
      n = new Array(h.length);
      for (let d = 0, m = h.length; d < m; d++) {
        const p = h[d];
        n[d] = t(e[p], p, d, s);
      }
    }
    else n = [];
    return n;
  };
  Lv = function(e, t) {
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (Se(o)) for (let n = 0; n < o.length; n++) e[o[n].name] = o[n].fn;
      else o && (e[o.name] = o.key ? (...n) => {
        const s = o.fn(...n);
        return s && (s.key = o.key), s;
      } : o.fn);
    }
    return e;
  };
  Cv = function(e, t, i = {}, o, n) {
    if (Pt.ce || Pt.parent && bo(Pt.parent) && Pt.parent.ce) {
      const m = Object.keys(i).length > 0;
      return t !== "default" && (i.name = t), Ti(), Dc(Ht, null, [
        jt("slot", i, o && o())
      ], m ? -2 : 64);
    }
    let s = e[t];
    s && s._c && (s._d = false), Ti();
    const l = s && Jd(s(i)), h = i.key || l && l.key, d = Dc(Ht, {
      key: (h && !uo(h) ? h : `_${t}`) + (!l && o ? "_fb" : "")
    }, l || (o ? o() : []), l && e._ === 1 ? 64 : -2);
    return !n && d.scopeId && (d.slotScopeIds = [
      d.scopeId + "-s"
    ]), s && s._c && (s._d = true), d;
  };
  function Jd(e) {
    return e.some((t) => _n(t) ? !(t.type === Mt || t.type === Ht && !Jd(t.children)) : true) ? e : null;
  }
  const bc = (e) => e ? mp(e) ? Oa(e) : bc(e.parent) : null, mr = yt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => bc(e.parent),
    $root: (e) => bc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Qd(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Dd.bind(e.proxy)),
    $watch: (e) => wA.bind(e)
  }), Xa = (e, t) => e !== Ge && !e.__isScriptSetup && ze(e, t), WA = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: i, setupState: o, data: n, props: s, accessCache: l, type: h, appContext: d } = e;
      if (t[0] !== "$") {
        const N = l[t];
        if (N !== void 0) switch (N) {
          case 1:
            return o[t];
          case 2:
            return n[t];
          case 4:
            return i[t];
          case 3:
            return s[t];
        }
        else {
          if (Xa(o, t)) return l[t] = 1, o[t];
          if (n !== Ge && ze(n, t)) return l[t] = 2, n[t];
          if (ze(s, t)) return l[t] = 3, s[t];
          if (i !== Ge && ze(i, t)) return l[t] = 4, i[t];
          vc && (l[t] = 0);
        }
      }
      const m = mr[t];
      let p, I;
      if (m) return t === "$attrs" && Gt(e.attrs, "get", ""), m(e);
      if ((p = h.__cssModules) && (p = p[t])) return p;
      if (i !== Ge && ze(i, t)) return l[t] = 4, i[t];
      if (I = d.config.globalProperties, ze(I, t)) return I[t];
    },
    set({ _: e }, t, i) {
      const { data: o, setupState: n, ctx: s } = e;
      return Xa(n, t) ? (n[t] = i, true) : o !== Ge && ze(o, t) ? (o[t] = i, true) : ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = i, true);
    },
    has({ _: { data: e, setupState: t, accessCache: i, ctx: o, appContext: n, props: s, type: l } }, h) {
      let d;
      return !!(i[h] || e !== Ge && h[0] !== "$" && ze(e, h) || Xa(t, h) || ze(s, h) || ze(o, h) || ze(mr, h) || ze(n.config.globalProperties, h) || (d = l.__cssModules) && d[h]);
    },
    defineProperty(e, t, i) {
      return i.get != null ? e._.accessCache[t] = 0 : ze(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
    }
  };
  function Hs(e) {
    return Se(e) ? e.reduce((t, i) => (t[i] = null, t), {}) : e;
  }
  Dv = function(e, t) {
    return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : yt({}, Hs(e), Hs(t));
  };
  let vc = true;
  function GA(e) {
    const t = Qd(e), i = e.proxy, o = e.ctx;
    vc = false, t.beforeCreate && oh(t.beforeCreate, e, "bc");
    const { data: n, computed: s, methods: l, watch: h, provide: d, inject: m, created: p, beforeMount: I, mounted: N, beforeUpdate: S, updated: M, activated: D, deactivated: ie, beforeDestroy: Q, beforeUnmount: Y, destroyed: G, unmounted: _, render: re, renderTracked: ge, renderTriggered: se, errorCaptured: de, serverPrefetch: ne, expose: Te, inheritAttrs: Ce, components: pe, directives: xe, filters: Ot } = t;
    if (m && BA(m, o, null), l) for (const Me in l) {
      const Ze = l[Me];
      be(Ze) && (o[Me] = Ze.bind(i));
    }
    if (n) {
      const Me = n.call(i, i);
      Je(Me) && (e.data = fa(Me));
    }
    if (vc = true, s) for (const Me in s) {
      const Ze = s[Me], Gi = be(Ze) ? Ze.bind(i, i) : be(Ze.get) ? Ze.get.bind(i, i) : Ni, cn = !be(Ze) && be(Ze.set) ? Ze.set.bind(i) : Ni, Bi = Ol({
        get: Gi,
        set: cn
      });
      Object.defineProperty(o, Me, {
        enumerable: true,
        configurable: true,
        get: () => Bi.value,
        set: (we) => Bi.value = we
      });
    }
    if (h) for (const Me in h) Xd(h[Me], o, i, Me);
    if (d) {
      const Me = be(d) ? d.call(i) : d;
      Reflect.ownKeys(Me).forEach((Ze) => {
        TA(Ze, Me[Ze]);
      });
    }
    p && oh(p, e, "c");
    function Xe(Me, Ze) {
      Se(Ze) ? Ze.forEach((Gi) => Me(Gi.bind(i))) : Ze && Me(Ze.bind(i));
    }
    if (Xe(DA, I), Xe(Fr, N), Xe(qd, S), Xe(dl, M), Xe(vA, D), Xe(LA, ie), Xe(FA, de), Xe(PA, ge), Xe(MA, se), Xe(pl, Y), Xe(ml, _), Xe(HA, ne), Se(Te)) if (Te.length) {
      const Me = e.exposed || (e.exposed = {});
      Te.forEach((Ze) => {
        Object.defineProperty(Me, Ze, {
          get: () => i[Ze],
          set: (Gi) => i[Ze] = Gi,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    re && e.render === Ni && (e.render = re), Ce != null && (e.inheritAttrs = Ce), pe && (e.components = pe), xe && (e.directives = xe), ne && Vd(e);
  }
  function BA(e, t, i = Ni) {
    Se(e) && (e = Lc(e));
    for (const o in e) {
      const n = e[o];
      let s;
      Je(n) ? "default" in n ? s = fr(n.from || o, n.default, true) : s = fr(n.from || o) : s = fr(n), dt(s) ? Object.defineProperty(t, o, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (l) => s.value = l
      }) : t[o] = s;
    }
  }
  function oh(e, t, i) {
    Li(Se(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, i);
  }
  function Xd(e, t, i, o) {
    let n = o.includes(".") ? Ud(i, o) : () => i[o];
    if (ut(e)) {
      const s = t[e];
      be(s) && yn(n, s);
    } else if (be(e)) yn(n, e.bind(i));
    else if (Je(e)) if (Se(e)) e.forEach((s) => Xd(s, t, i, o));
    else {
      const s = be(e.handler) ? e.handler.bind(i) : t[e.handler];
      be(s) && yn(n, s, e);
    }
  }
  function Qd(e) {
    const t = e.type, { mixins: i, extends: o } = t, { mixins: n, optionsCache: s, config: { optionMergeStrategies: l } } = e.appContext, h = s.get(t);
    let d;
    return h ? d = h : !n.length && !i && !o ? d = t : (d = {}, n.length && n.forEach((m) => Ms(d, m, l, true)), Ms(d, t, l)), Je(t) && s.set(t, d), d;
  }
  function Ms(e, t, i, o = false) {
    const { mixins: n, extends: s } = t;
    s && Ms(e, s, i, true), n && n.forEach((l) => Ms(e, l, i, true));
    for (const l in t) if (!(o && l === "expose")) {
      const h = jA[l] || i && i[l];
      e[l] = h ? h(e[l], t[l]) : t[l];
    }
    return e;
  }
  const jA = {
    data: nh,
    props: rh,
    emits: rh,
    methods: rr,
    computed: rr,
    beforeCreate: $t,
    created: $t,
    beforeMount: $t,
    mounted: $t,
    beforeUpdate: $t,
    updated: $t,
    beforeDestroy: $t,
    beforeUnmount: $t,
    destroyed: $t,
    unmounted: $t,
    activated: $t,
    deactivated: $t,
    errorCaptured: $t,
    serverPrefetch: $t,
    components: rr,
    directives: rr,
    watch: YA,
    provide: nh,
    inject: xA
  };
  function nh(e, t) {
    return t ? e ? function() {
      return yt(be(e) ? e.call(this, this) : e, be(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function xA(e, t) {
    return rr(Lc(e), Lc(t));
  }
  function Lc(e) {
    if (Se(e)) {
      const t = {};
      for (let i = 0; i < e.length; i++) t[e[i]] = e[i];
      return t;
    }
    return e;
  }
  function $t(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function rr(e, t) {
    return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function rh(e, t) {
    return e ? Se(e) && Se(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : yt(/* @__PURE__ */ Object.create(null), Hs(e), Hs(t ?? {})) : t;
  }
  function YA(e, t) {
    if (!e) return t;
    if (!t) return e;
    const i = yt(/* @__PURE__ */ Object.create(null), e);
    for (const o in t) i[o] = $t(e[o], t[o]);
    return i;
  }
  function ep() {
    return {
      app: null,
      config: {
        isNativeTag: td,
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
  let zA = 0;
  function $A(e, t) {
    return function(o, n = null) {
      be(o) || (o = yt({}, o)), n != null && !Je(n) && (n = null);
      const s = ep(), l = /* @__PURE__ */ new WeakSet(), h = [];
      let d = false;
      const m = s.app = {
        _uid: zA++,
        _component: o,
        _props: n,
        _container: null,
        _context: s,
        _instance: null,
        version: SN,
        get config() {
          return s.config;
        },
        set config(p) {
        },
        use(p, ...I) {
          return l.has(p) || (p && be(p.install) ? (l.add(p), p.install(m, ...I)) : be(p) && (l.add(p), p(m, ...I))), m;
        },
        mixin(p) {
          return s.mixins.includes(p) || s.mixins.push(p), m;
        },
        component(p, I) {
          return I ? (s.components[p] = I, m) : s.components[p];
        },
        directive(p, I) {
          return I ? (s.directives[p] = I, m) : s.directives[p];
        },
        mount(p, I, N) {
          if (!d) {
            const S = m._ceVNode || jt(o, n);
            return S.appContext = s, N === true ? N = "svg" : N === false && (N = void 0), e(S, p, N), d = true, m._container = p, p.__vue_app__ = m, Oa(S.component);
          }
        },
        onUnmount(p) {
          h.push(p);
        },
        unmount() {
          d && (Li(h, m._instance, 16), e(null, m._container), delete m._container.__vue_app__);
        },
        provide(p, I) {
          return s.provides[p] = I, m;
        },
        runWithContext(p) {
          const I = on;
          on = m;
          try {
            return p();
          } finally {
            on = I;
          }
        }
      };
      return m;
    };
  }
  let on = null;
  Hv = function(e, t, i = Ge) {
    const o = ko(), n = hi(t), s = ho(t), l = tp(e, n), h = sA((d, m) => {
      let p, I = Ge, N;
      return RA(() => {
        const S = e[n];
        Qt(p, S) && (p = S, m());
      }), {
        get() {
          return d(), i.get ? i.get(p) : p;
        },
        set(S) {
          const M = i.set ? i.set(S) : S;
          if (!Qt(M, p) && !(I !== Ge && Qt(S, I))) return;
          const D = o.vnode.props;
          D && (t in D || n in D || s in D) && (`onUpdate:${t}` in D || `onUpdate:${n}` in D || `onUpdate:${s}` in D) || (p = S, m()), o.emit(`update:${t}`, M), Qt(S, M) && Qt(S, I) && !Qt(M, N) && m(), I = S, N = M;
        }
      };
    });
    return h[Symbol.iterator] = () => {
      let d = 0;
      return {
        next() {
          return d < 2 ? {
            value: d++ ? l || Ge : h,
            done: false
          } : {
            done: true
          };
        }
      };
    }, h;
  };
  const tp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${hi(t)}Modifiers`] || e[`${ho(t)}Modifiers`];
  function VA(e, t, ...i) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || Ge;
    let n = i;
    const s = t.startsWith("update:"), l = s && tp(o, t.slice(7));
    l && (l.trim && (n = i.map((p) => ut(p) ? p.trim() : p)), l.number && (n = i.map(NS)));
    let h, d = o[h = za(t)] || o[h = za(hi(t))];
    !d && s && (d = o[h = za(ho(t))]), d && Li(d, e, 6, n);
    const m = o[h + "Once"];
    if (m) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, Li(m, e, 6, n);
    }
  }
  const ZA = /* @__PURE__ */ new WeakMap();
  function ip(e, t, i = false) {
    const o = i ? ZA : t.emitsCache, n = o.get(e);
    if (n !== void 0) return n;
    const s = e.emits;
    let l = {}, h = false;
    if (!be(e)) {
      const d = (m) => {
        const p = ip(m, t, true);
        p && (h = true, yt(l, p));
      };
      !i && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
    }
    return !s && !h ? (Je(e) && o.set(e, null), null) : (Se(s) ? s.forEach((d) => l[d] = null) : yt(l, s), Je(e) && o.set(e, l), l);
  }
  function Ea(e, t) {
    return !e || !na(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ze(e, t[0].toLowerCase() + t.slice(1)) || ze(e, ho(t)) || ze(e, t));
  }
  function sh(e) {
    const { type: t, vnode: i, proxy: o, withProxy: n, propsOptions: [s], slots: l, attrs: h, emit: d, render: m, renderCache: p, props: I, data: N, setupState: S, ctx: M, inheritAttrs: D } = e, ie = Cs(e);
    let Q, Y;
    try {
      if (i.shapeFlag & 4) {
        const _ = n || o, re = _;
        Q = Ui(m.call(re, _, p, I, S, N, M)), Y = h;
      } else {
        const _ = t;
        Q = Ui(_.length > 1 ? _(I, {
          attrs: h,
          slots: l,
          emit: d
        }) : _(I, null)), Y = t.props ? h : qA(h);
      }
    } catch (_) {
      Tr.length = 0, pa(_, e, 1), Q = jt(Mt);
    }
    let G = Q;
    if (Y && D !== false) {
      const _ = Object.keys(Y), { shapeFlag: re } = G;
      _.length && re & 7 && (s && _.some(il) && (Y = KA(Y, s)), G = co(G, Y, false, true));
    }
    return i.dirs && (G = co(G, null, false, true), G.dirs = G.dirs ? G.dirs.concat(i.dirs) : i.dirs), i.transition && Ho(G, i.transition), Q = G, Cs(ie), Q;
  }
  const qA = (e) => {
    let t;
    for (const i in e) (i === "class" || i === "style" || na(i)) && ((t || (t = {}))[i] = e[i]);
    return t;
  }, KA = (e, t) => {
    const i = {};
    for (const o in e) (!il(o) || !(o.slice(9) in t)) && (i[o] = e[o]);
    return i;
  };
  function JA(e, t, i) {
    const { props: o, children: n, component: s } = e, { props: l, children: h, patchFlag: d } = t, m = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (i && d >= 0) {
      if (d & 1024) return true;
      if (d & 16) return o ? ah(o, l, m) : !!l;
      if (d & 8) {
        const p = t.dynamicProps;
        for (let I = 0; I < p.length; I++) {
          const N = p[I];
          if (l[N] !== o[N] && !Ea(m, N)) return true;
        }
      }
    } else return (n || h) && (!h || !h.$stable) ? true : o === l ? false : o ? l ? ah(o, l, m) : true : !!l;
    return false;
  }
  function ah(e, t, i) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return true;
    for (let n = 0; n < o.length; n++) {
      const s = o[n];
      if (t[s] !== e[s] && !Ea(i, s)) return true;
    }
    return false;
  }
  function XA({ vnode: e, parent: t }, i) {
    for (; t; ) {
      const o = t.subTree;
      if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e) (e = t.vnode).el = i, t = t.parent;
      else break;
    }
  }
  const op = {}, np = () => Object.create(op), rp = (e) => Object.getPrototypeOf(e) === op;
  function QA(e, t, i, o = false) {
    const n = {}, s = np();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), sp(e, t, n, s);
    for (const l in e.propsOptions[0]) l in n || (n[l] = void 0);
    i ? e.props = o ? n : tA(n) : e.type.props ? e.props = n : e.props = s, e.attrs = s;
  }
  function eN(e, t, i, o) {
    const { props: n, attrs: s, vnode: { patchFlag: l } } = e, h = ke(n), [d] = e.propsOptions;
    let m = false;
    if ((o || l > 0) && !(l & 16)) {
      if (l & 8) {
        const p = e.vnode.dynamicProps;
        for (let I = 0; I < p.length; I++) {
          let N = p[I];
          if (Ea(e.emitsOptions, N)) continue;
          const S = t[N];
          if (d) if (ze(s, N)) S !== s[N] && (s[N] = S, m = true);
          else {
            const M = hi(N);
            n[M] = Cc(d, h, M, S, e, false);
          }
          else S !== s[N] && (s[N] = S, m = true);
        }
      }
    } else {
      sp(e, t, n, s) && (m = true);
      let p;
      for (const I in h) (!t || !ze(t, I) && ((p = ho(I)) === I || !ze(t, p))) && (d ? i && (i[I] !== void 0 || i[p] !== void 0) && (n[I] = Cc(d, h, I, void 0, e, true)) : delete n[I]);
      if (s !== h) for (const I in s) (!t || !ze(t, I)) && (delete s[I], m = true);
    }
    m && Xi(e.attrs, "set", "");
  }
  function sp(e, t, i, o) {
    const [n, s] = e.propsOptions;
    let l = false, h;
    if (t) for (let d in t) {
      if (cr(d)) continue;
      const m = t[d];
      let p;
      n && ze(n, p = hi(d)) ? !s || !s.includes(p) ? i[p] = m : (h || (h = {}))[p] = m : Ea(e.emitsOptions, d) || (!(d in o) || m !== o[d]) && (o[d] = m, l = true);
    }
    if (s) {
      const d = ke(i), m = h || Ge;
      for (let p = 0; p < s.length; p++) {
        const I = s[p];
        i[I] = Cc(n, d, I, m[I], e, !ze(m, I));
      }
    }
    return l;
  }
  function Cc(e, t, i, o, n, s) {
    const l = e[i];
    if (l != null) {
      const h = ze(l, "default");
      if (h && o === void 0) {
        const d = l.default;
        if (l.type !== Function && !l.skipFactory && be(d)) {
          const { propsDefaults: m } = n;
          if (i in m) o = m[i];
          else {
            const p = _r(n);
            o = m[i] = d.call(null, t), p();
          }
        } else o = d;
        n.ce && n.ce._setProp(i, o);
      }
      l[0] && (s && !h ? o = false : l[1] && (o === "" || o === ho(i)) && (o = true));
    }
    return o;
  }
  const tN = /* @__PURE__ */ new WeakMap();
  function ap(e, t, i = false) {
    const o = i ? tN : t.propsCache, n = o.get(e);
    if (n) return n;
    const s = e.props, l = {}, h = [];
    let d = false;
    if (!be(e)) {
      const p = (I) => {
        d = true;
        const [N, S] = ap(I, t, true);
        yt(l, N), S && h.push(...S);
      };
      !i && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    if (!s && !d) return Je(e) && o.set(e, In), In;
    if (Se(s)) for (let p = 0; p < s.length; p++) {
      const I = hi(s[p]);
      ch(I) && (l[I] = Ge);
    }
    else if (s) for (const p in s) {
      const I = hi(p);
      if (ch(I)) {
        const N = s[p], S = l[I] = Se(N) || be(N) ? {
          type: N
        } : yt({}, N), M = S.type;
        let D = false, ie = true;
        if (Se(M)) for (let Q = 0; Q < M.length; ++Q) {
          const Y = M[Q], G = be(Y) && Y.name;
          if (G === "Boolean") {
            D = true;
            break;
          } else G === "String" && (ie = false);
        }
        else D = be(M) && M.name === "Boolean";
        S[0] = D, S[1] = ie, (D || ze(S, "default")) && h.push(I);
      }
    }
    const m = [
      l,
      h
    ];
    return Je(e) && o.set(e, m), m;
  }
  function ch(e) {
    return e[0] !== "$" && !cr(e);
  }
  const gl = (e) => e === "_" || e === "_ctx" || e === "$stable", Tl = (e) => Se(e) ? e.map(Ui) : [
    Ui(e)
  ], iN = (e, t, i) => {
    if (t._n) return t;
    const o = gA((...n) => Tl(t(...n)), i);
    return o._c = false, o;
  }, cp = (e, t, i) => {
    const o = e._ctx;
    for (const n in e) {
      if (gl(n)) continue;
      const s = e[n];
      if (be(s)) t[n] = iN(n, s, o);
      else if (s != null) {
        const l = Tl(s);
        t[n] = () => l;
      }
    }
  }, lp = (e, t) => {
    const i = Tl(t);
    e.slots.default = () => i;
  }, up = (e, t, i) => {
    for (const o in t) (i || !gl(o)) && (e[o] = t[o]);
  }, oN = (e, t, i) => {
    const o = e.slots = np();
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (up(o, t, i), i && sd(o, "_", n, true)) : cp(t, o);
    } else t && lp(e, t);
  }, nN = (e, t, i) => {
    const { vnode: o, slots: n } = e;
    let s = true, l = Ge;
    if (o.shapeFlag & 32) {
      const h = t._;
      h ? i && h === 1 ? s = false : up(n, t, i) : (s = !t.$stable, cp(t, n)), l = t;
    } else t && (lp(e, t), l = {
      default: 1
    });
    if (s) for (const h in n) !gl(h) && l[h] == null && delete n[h];
  }, bt = lN;
  function rN(e) {
    return sN(e);
  }
  function sN(e, t) {
    const i = ca();
    i.__VUE__ = true;
    const { insert: o, remove: n, patchProp: s, createElement: l, createText: h, createComment: d, setText: m, setElementText: p, parentNode: I, nextSibling: N, setScopeId: S = Ni, insertStaticContent: M } = e, D = (y, v, F, K = null, q = null, J = null, le = void 0, ee = null, ae = !!v.dynamicChildren) => {
      if (y === v) return;
      y && !Ao(y, v) && (K = ji(y), we(y, q, J, true), y = null), v.patchFlag === -2 && (ae = false, v.dynamicChildren = null);
      const { type: Z, ref: Ee, shapeFlag: ue } = v;
      switch (Z) {
        case Ia:
          ie(y, v, F, K);
          break;
        case Mt:
          Q(y, v, F, K);
          break;
        case gr:
          y == null && Y(v, F, K, le);
          break;
        case Ht:
          pe(y, v, F, K, q, J, le, ee, ae);
          break;
        default:
          ue & 1 ? re(y, v, F, K, q, J, le, ee, ae) : ue & 6 ? xe(y, v, F, K, q, J, le, ee, ae) : (ue & 64 || ue & 128) && Z.process(y, v, F, K, q, J, le, ee, ae, Wo);
      }
      Ee != null && q ? pr(Ee, y && y.ref, J, v || y, !v) : Ee == null && y && y.ref != null && pr(y.ref, null, J, y, true);
    }, ie = (y, v, F, K) => {
      if (y == null) o(v.el = h(v.children), F, K);
      else {
        const q = v.el = y.el;
        v.children !== y.children && m(q, v.children);
      }
    }, Q = (y, v, F, K) => {
      y == null ? o(v.el = d(v.children || ""), F, K) : v.el = y.el;
    }, Y = (y, v, F, K) => {
      [y.el, y.anchor] = M(y.children, v, F, K, y.el, y.anchor);
    }, G = ({ el: y, anchor: v }, F, K) => {
      let q;
      for (; y && y !== v; ) q = N(y), o(y, F, K), y = q;
      o(v, F, K);
    }, _ = ({ el: y, anchor: v }) => {
      let F;
      for (; y && y !== v; ) F = N(y), n(y), y = F;
      n(v);
    }, re = (y, v, F, K, q, J, le, ee, ae) => {
      if (v.type === "svg" ? le = "svg" : v.type === "math" && (le = "mathml"), y == null) ge(v, F, K, q, J, le, ee, ae);
      else {
        const Z = y.el && y.el._isVueCE ? y.el : null;
        try {
          Z && Z._beginPatch(), ne(y, v, q, J, le, ee, ae);
        } finally {
          Z && Z._endPatch();
        }
      }
    }, ge = (y, v, F, K, q, J, le, ee) => {
      let ae, Z;
      const { props: Ee, shapeFlag: ue, transition: Ie, dirs: Ae } = y;
      if (ae = y.el = l(y.type, J, Ee && Ee.is, Ee), ue & 8 ? p(ae, y.children) : ue & 16 && de(y.children, ae, null, K, q, Qa(y, J), le, ee), Ae && zo(y, null, K, "created"), se(ae, y, y.scopeId, le, K), Ee) {
        for (const Be in Ee) Be !== "value" && !cr(Be) && s(ae, Be, null, Ee[Be], J, K);
        "value" in Ee && s(ae, "value", null, Ee.value, J), (Z = Ee.onVnodeBeforeMount) && gi(Z, K, y);
      }
      Ae && zo(y, null, K, "beforeMount");
      const Fe = aN(q, Ie);
      Fe && Ie.beforeEnter(ae), o(ae, v, F), ((Z = Ee && Ee.onVnodeMounted) || Fe || Ae) && bt(() => {
        Z && gi(Z, K, y), Fe && Ie.enter(ae), Ae && zo(y, null, K, "mounted");
      }, q);
    }, se = (y, v, F, K, q) => {
      if (F && S(y, F), K) for (let J = 0; J < K.length; J++) S(y, K[J]);
      if (q) {
        let J = q.subTree;
        if (v === J || Fs(J.type) && (J.ssContent === v || J.ssFallback === v)) {
          const le = q.vnode;
          se(y, le, le.scopeId, le.slotScopeIds, q.parent);
        }
      }
    }, de = (y, v, F, K, q, J, le, ee, ae = 0) => {
      for (let Z = ae; Z < y.length; Z++) {
        const Ee = y[Z] = ee ? yo(y[Z]) : Ui(y[Z]);
        D(null, Ee, v, F, K, q, J, le, ee);
      }
    }, ne = (y, v, F, K, q, J, le) => {
      const ee = v.el = y.el;
      let { patchFlag: ae, dynamicChildren: Z, dirs: Ee } = v;
      ae |= y.patchFlag & 16;
      const ue = y.props || Ge, Ie = v.props || Ge;
      let Ae;
      if (F && $o(F, false), (Ae = Ie.onVnodeBeforeUpdate) && gi(Ae, F, v, y), Ee && zo(v, y, F, "beforeUpdate"), F && $o(F, true), (ue.innerHTML && Ie.innerHTML == null || ue.textContent && Ie.textContent == null) && p(ee, ""), Z ? Te(y.dynamicChildren, Z, ee, F, K, Qa(v, q), J) : le || Ze(y, v, ee, null, F, K, Qa(v, q), J, false), ae > 0) {
        if (ae & 16) Ce(ee, ue, Ie, F, q);
        else if (ae & 2 && ue.class !== Ie.class && s(ee, "class", null, Ie.class, q), ae & 4 && s(ee, "style", ue.style, Ie.style, q), ae & 8) {
          const Fe = v.dynamicProps;
          for (let Be = 0; Be < Fe.length; Be++) {
            const je = Fe[Be], _t = ue[je], Ut = Ie[je];
            (Ut !== _t || je === "value") && s(ee, je, _t, Ut, q, F);
          }
        }
        ae & 1 && y.children !== v.children && p(ee, v.children);
      } else !le && Z == null && Ce(ee, ue, Ie, F, q);
      ((Ae = Ie.onVnodeUpdated) || Ee) && bt(() => {
        Ae && gi(Ae, F, v, y), Ee && zo(v, y, F, "updated");
      }, K);
    }, Te = (y, v, F, K, q, J, le) => {
      for (let ee = 0; ee < v.length; ee++) {
        const ae = y[ee], Z = v[ee], Ee = ae.el && (ae.type === Ht || !Ao(ae, Z) || ae.shapeFlag & 198) ? I(ae.el) : F;
        D(ae, Z, Ee, null, K, q, J, le, true);
      }
    }, Ce = (y, v, F, K, q) => {
      if (v !== F) {
        if (v !== Ge) for (const J in v) !cr(J) && !(J in F) && s(y, J, v[J], null, q, K);
        for (const J in F) {
          if (cr(J)) continue;
          const le = F[J], ee = v[J];
          le !== ee && J !== "value" && s(y, J, ee, le, q, K);
        }
        "value" in F && s(y, "value", v.value, F.value, q);
      }
    }, pe = (y, v, F, K, q, J, le, ee, ae) => {
      const Z = v.el = y ? y.el : h(""), Ee = v.anchor = y ? y.anchor : h("");
      let { patchFlag: ue, dynamicChildren: Ie, slotScopeIds: Ae } = v;
      Ae && (ee = ee ? ee.concat(Ae) : Ae), y == null ? (o(Z, F, K), o(Ee, F, K), de(v.children || [], F, Ee, q, J, le, ee, ae)) : ue > 0 && ue & 64 && Ie && y.dynamicChildren && y.dynamicChildren.length === Ie.length ? (Te(y.dynamicChildren, Ie, F, q, J, le, ee), (v.key != null || q && v === q.subTree) && El(y, v, true)) : Ze(y, v, F, Ee, q, J, le, ee, ae);
    }, xe = (y, v, F, K, q, J, le, ee, ae) => {
      v.slotScopeIds = ee, y == null ? v.shapeFlag & 512 ? q.ctx.activate(v, F, K, le, ae) : Ot(v, F, K, q, J, le, ae) : oi(y, v, ae);
    }, Ot = (y, v, F, K, q, J, le) => {
      const ee = y.component = TN(y, K, q);
      if (ga(y) && (ee.ctx.renderer = Wo), EN(ee, false, le), ee.asyncDep) {
        if (q && q.registerDep(ee, Xe, le), !y.el) {
          const ae = ee.subTree = jt(Mt);
          Q(null, ae, v, F), y.placeholder = ae.el;
        }
      } else Xe(ee, y, v, F, q, J, le);
    }, oi = (y, v, F) => {
      const K = v.component = y.component;
      if (JA(y, v, F)) if (K.asyncDep && !K.asyncResolved) {
        Me(K, v, F);
        return;
      } else K.next = v, K.update();
      else v.el = y.el, K.vnode = v;
    }, Xe = (y, v, F, K, q, J, le) => {
      const ee = () => {
        if (y.isMounted) {
          let { next: ue, bu: Ie, u: Ae, parent: Fe, vnode: Be } = y;
          {
            const di = hp(y);
            if (di) {
              ue && (ue.el = Be.el, Me(y, ue, le)), di.asyncDep.then(() => {
                y.isUnmounted || ee();
              });
              return;
            }
          }
          let je = ue, _t;
          $o(y, false), ue ? (ue.el = Be.el, Me(y, ue, le)) : ue = Be, Ie && lr(Ie), (_t = ue.props && ue.props.onVnodeBeforeUpdate) && gi(_t, Fe, ue, Be), $o(y, true);
          const Ut = sh(y), fi = y.subTree;
          y.subTree = Ut, D(fi, Ut, I(fi.el), ji(fi), y, q, J), ue.el = Ut.el, je === null && XA(y, Ut.el), Ae && bt(Ae, q), (_t = ue.props && ue.props.onVnodeUpdated) && bt(() => gi(_t, Fe, ue, Be), q);
        } else {
          let ue;
          const { el: Ie, props: Ae } = v, { bm: Fe, m: Be, parent: je, root: _t, type: Ut } = y, fi = bo(v);
          $o(y, false), Fe && lr(Fe), !fi && (ue = Ae && Ae.onVnodeBeforeMount) && gi(ue, je, v), $o(y, true);
          {
            _t.ce && _t.ce._def.shadowRoot !== false && _t.ce._injectChildStyle(Ut);
            const di = y.subTree = sh(y);
            D(null, di, F, K, y, q, J), v.el = di.el;
          }
          if (Be && bt(Be, q), !fi && (ue = Ae && Ae.onVnodeMounted)) {
            const di = v;
            bt(() => gi(ue, je, di), q);
          }
          (v.shapeFlag & 256 || je && bo(je.vnode) && je.vnode.shapeFlag & 256) && y.a && bt(y.a, q), y.isMounted = true, v = F = K = null;
        }
      };
      y.scope.on();
      const ae = y.effect = new dd(ee);
      y.scope.off();
      const Z = y.update = ae.run.bind(ae), Ee = y.job = ae.runIfDirty.bind(ae);
      Ee.i = y, Ee.id = y.uid, ae.scheduler = () => hl(Ee), $o(y, true), Z();
    }, Me = (y, v, F) => {
      v.component = y;
      const K = y.vnode.props;
      y.vnode = v, y.next = null, eN(y, v.props, K, F), nN(y, v.children, F), ro(), Ku(y), so();
    }, Ze = (y, v, F, K, q, J, le, ee, ae = false) => {
      const Z = y && y.children, Ee = y ? y.shapeFlag : 0, ue = v.children, { patchFlag: Ie, shapeFlag: Ae } = v;
      if (Ie > 0) {
        if (Ie & 128) {
          cn(Z, ue, F, K, q, J, le, ee, ae);
          return;
        } else if (Ie & 256) {
          Gi(Z, ue, F, K, q, J, le, ee, ae);
          return;
        }
      }
      Ae & 8 ? (Ee & 16 && Kt(Z, q, J), ue !== Z && p(F, ue)) : Ee & 16 ? Ae & 16 ? cn(Z, ue, F, K, q, J, le, ee, ae) : Kt(Z, q, J, true) : (Ee & 8 && p(F, ""), Ae & 16 && de(ue, F, K, q, J, le, ee, ae));
    }, Gi = (y, v, F, K, q, J, le, ee, ae) => {
      y = y || In, v = v || In;
      const Z = y.length, Ee = v.length, ue = Math.min(Z, Ee);
      let Ie;
      for (Ie = 0; Ie < ue; Ie++) {
        const Ae = v[Ie] = ae ? yo(v[Ie]) : Ui(v[Ie]);
        D(y[Ie], Ae, F, null, q, J, le, ee, ae);
      }
      Z > Ee ? Kt(y, q, J, true, false, ue) : de(v, F, K, q, J, le, ee, ae, ue);
    }, cn = (y, v, F, K, q, J, le, ee, ae) => {
      let Z = 0;
      const Ee = v.length;
      let ue = y.length - 1, Ie = Ee - 1;
      for (; Z <= ue && Z <= Ie; ) {
        const Ae = y[Z], Fe = v[Z] = ae ? yo(v[Z]) : Ui(v[Z]);
        if (Ao(Ae, Fe)) D(Ae, Fe, F, null, q, J, le, ee, ae);
        else break;
        Z++;
      }
      for (; Z <= ue && Z <= Ie; ) {
        const Ae = y[ue], Fe = v[Ie] = ae ? yo(v[Ie]) : Ui(v[Ie]);
        if (Ao(Ae, Fe)) D(Ae, Fe, F, null, q, J, le, ee, ae);
        else break;
        ue--, Ie--;
      }
      if (Z > ue) {
        if (Z <= Ie) {
          const Ae = Ie + 1, Fe = Ae < Ee ? v[Ae].el : K;
          for (; Z <= Ie; ) D(null, v[Z] = ae ? yo(v[Z]) : Ui(v[Z]), F, Fe, q, J, le, ee, ae), Z++;
        }
      } else if (Z > Ie) for (; Z <= ue; ) we(y[Z], q, J, true), Z++;
      else {
        const Ae = Z, Fe = Z, Be = /* @__PURE__ */ new Map();
        for (Z = Fe; Z <= Ie; Z++) {
          const xt = v[Z] = ae ? yo(v[Z]) : Ui(v[Z]);
          xt.key != null && Be.set(xt.key, Z);
        }
        let je, _t = 0;
        const Ut = Ie - Fe + 1;
        let fi = false, di = 0;
        const Go = new Array(Ut);
        for (Z = 0; Z < Ut; Z++) Go[Z] = 0;
        for (Z = Ae; Z <= ue; Z++) {
          const xt = y[Z];
          if (_t >= Ut) {
            we(xt, q, J, true);
            continue;
          }
          let pi;
          if (xt.key != null) pi = Be.get(xt.key);
          else for (je = Fe; je <= Ie; je++) if (Go[je - Fe] === 0 && Ao(xt, v[je])) {
            pi = je;
            break;
          }
          pi === void 0 ? we(xt, q, J, true) : (Go[pi - Fe] = Z + 1, pi >= di ? di = pi : fi = true, D(xt, v[pi], F, null, q, J, le, ee, ae), _t++);
        }
        const zn = fi ? cN(Go) : In;
        for (je = zn.length - 1, Z = Ut - 1; Z >= 0; Z--) {
          const xt = Fe + Z, pi = v[xt], kr = v[xt + 1], Wr = xt + 1 < Ee ? kr.el || fp(kr) : K;
          Go[Z] === 0 ? D(null, pi, F, Wr, q, J, le, ee, ae) : fi && (je < 0 || Z !== zn[je] ? Bi(pi, F, Wr, 2) : je--);
        }
      }
    }, Bi = (y, v, F, K, q = null) => {
      const { el: J, type: le, transition: ee, children: ae, shapeFlag: Z } = y;
      if (Z & 6) {
        Bi(y.component.subTree, v, F, K);
        return;
      }
      if (Z & 128) {
        y.suspense.move(v, F, K);
        return;
      }
      if (Z & 64) {
        le.move(y, v, F, Wo);
        return;
      }
      if (le === Ht) {
        o(J, v, F);
        for (let ue = 0; ue < ae.length; ue++) Bi(ae[ue], v, F, K);
        o(y.anchor, v, F);
        return;
      }
      if (le === gr) {
        G(y, v, F);
        return;
      }
      if (K !== 2 && Z & 1 && ee) if (K === 0) ee.beforeEnter(J), o(J, v, F), bt(() => ee.enter(J), q);
      else {
        const { leave: ue, delayLeave: Ie, afterLeave: Ae } = ee, Fe = () => {
          y.ctx.isUnmounted ? n(J) : o(J, v, F);
        }, Be = () => {
          J._isLeaving && J[Ji](true), ue(J, () => {
            Fe(), Ae && Ae();
          });
        };
        Ie ? Ie(J, Fe, Be) : Be();
      }
      else o(J, v, F);
    }, we = (y, v, F, K = false, q = false) => {
      const { type: J, props: le, ref: ee, children: ae, dynamicChildren: Z, shapeFlag: Ee, patchFlag: ue, dirs: Ie, cacheIndex: Ae } = y;
      if (ue === -2 && (q = false), ee != null && (ro(), pr(ee, null, F, y, true), so()), Ae != null && (v.renderCache[Ae] = void 0), Ee & 256) {
        v.ctx.deactivate(y);
        return;
      }
      const Fe = Ee & 1 && Ie, Be = !bo(y);
      let je;
      if (Be && (je = le && le.onVnodeBeforeUnmount) && gi(je, v, y), Ee & 6) ce(y.component, F, K);
      else {
        if (Ee & 128) {
          y.suspense.unmount(F, K);
          return;
        }
        Fe && zo(y, null, v, "beforeUnmount"), Ee & 64 ? y.type.remove(y, v, F, Wo, K) : Z && !Z.hasOnce && (J !== Ht || ue > 0 && ue & 64) ? Kt(Z, v, F, false, true) : (J === Ht && ue & 384 || !q && Ee & 16) && Kt(ae, v, F), K && Yn(y);
      }
      (Be && (je = le && le.onVnodeUnmounted) || Fe) && bt(() => {
        je && gi(je, v, y), Fe && zo(y, null, v, "unmounted");
      }, F);
    }, Yn = (y) => {
      const { type: v, el: F, anchor: K, transition: q } = y;
      if (v === Ht) {
        Sa(F, K);
        return;
      }
      if (v === gr) {
        _(y);
        return;
      }
      const J = () => {
        n(F), q && !q.persisted && q.afterLeave && q.afterLeave();
      };
      if (y.shapeFlag & 1 && q && !q.persisted) {
        const { leave: le, delayLeave: ee } = q, ae = () => le(F, J);
        ee ? ee(y.el, J, ae) : ae();
      } else J();
    }, Sa = (y, v) => {
      let F;
      for (; y !== v; ) F = N(y), n(y), y = F;
      n(v);
    }, ce = (y, v, F) => {
      const { bum: K, scope: q, job: J, subTree: le, um: ee, m: ae, a: Z } = y;
      Ps(ae), Ps(Z), K && lr(K), q.stop(), J && (J.flags |= 8, we(le, y, v, F)), ee && bt(ee, v), bt(() => {
        y.isUnmounted = true;
      }, v);
    }, Kt = (y, v, F, K = false, q = false, J = 0) => {
      for (let le = J; le < y.length; le++) we(y[le], v, F, K, q);
    }, ji = (y) => {
      if (y.shapeFlag & 6) return ji(y.component.subTree);
      if (y.shapeFlag & 128) return y.suspense.next();
      const v = N(y.anchor || y.el), F = v && v[kd];
      return F ? N(F) : v;
    };
    let ni = false;
    const Ur = (y, v, F) => {
      let K;
      y == null ? v._vnode && (we(v._vnode, null, null, true), K = v._vnode.component) : D(v._vnode || null, y, v, null, null, null, F), v._vnode = y, ni || (ni = true, Ku(K), Pd(), ni = false);
    }, Wo = {
      p: D,
      um: we,
      m: Bi,
      r: Yn,
      mt: Ot,
      mc: de,
      pc: Ze,
      pbc: Te,
      n: ji,
      o: e
    };
    return {
      render: Ur,
      hydrate: void 0,
      createApp: $A(Ur)
    };
  }
  function Qa({ type: e, props: t }, i) {
    return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
  }
  function $o({ effect: e, job: t }, i) {
    i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function aN(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function El(e, t, i = false) {
    const o = e.children, n = t.children;
    if (Se(o) && Se(n)) for (let s = 0; s < o.length; s++) {
      const l = o[s];
      let h = n[s];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = n[s] = yo(n[s]), h.el = l.el), !i && h.patchFlag !== -2 && El(l, h)), h.type === Ia && (h.patchFlag !== -1 ? h.el = l.el : h.__elIndex = s + (e.type === Ht ? 1 : 0)), h.type === Mt && !h.el && (h.el = l.el);
    }
  }
  function cN(e) {
    const t = e.slice(), i = [
      0
    ];
    let o, n, s, l, h;
    const d = e.length;
    for (o = 0; o < d; o++) {
      const m = e[o];
      if (m !== 0) {
        if (n = i[i.length - 1], e[n] < m) {
          t[o] = n, i.push(o);
          continue;
        }
        for (s = 0, l = i.length - 1; s < l; ) h = s + l >> 1, e[i[h]] < m ? s = h + 1 : l = h;
        m < e[i[s]] && (s > 0 && (t[o] = i[s - 1]), i[s] = o);
      }
    }
    for (s = i.length, l = i[s - 1]; s-- > 0; ) i[s] = l, l = t[l];
    return i;
  }
  function hp(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : hp(t);
  }
  function Ps(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function fp(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? fp(t.subTree) : null;
  }
  const Fs = (e) => e.__isSuspense;
  function lN(e, t) {
    t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : Md(e);
  }
  let gr, Tr;
  Ht = /* @__PURE__ */ Symbol.for("v-fgt");
  Ia = /* @__PURE__ */ Symbol.for("v-txt");
  Mt = /* @__PURE__ */ Symbol.for("v-cmt");
  gr = /* @__PURE__ */ Symbol.for("v-stc");
  Tr = [];
  let li = null;
  Ti = function(e = false) {
    Tr.push(li = e ? null : []);
  };
  function uN() {
    Tr.pop(), li = Tr[Tr.length - 1] || null;
  }
  let vr = 1;
  function _s(e, t = false) {
    vr += e, e < 0 && li && t && (li.hasOnce = true);
  }
  function dp(e) {
    return e.dynamicChildren = vr > 0 ? li || In : null, uN(), vr > 0 && li && li.push(e), e;
  }
  zi = function(e, t, i, o, n, s) {
    return dp(Ye(e, t, i, o, n, s, true));
  };
  Dc = function(e, t, i, o, n) {
    return dp(jt(e, t, i, o, n, true));
  };
  _n = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function Ao(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const pp = ({ key: e }) => e ?? null, ms = ({ ref: e, ref_key: t, ref_for: i }) => (typeof e == "number" && (e = "" + e), e != null ? ut(e) || dt(e) || be(e) ? {
    i: Pt,
    r: e,
    k: t,
    f: !!i
  } : e : null);
  Ye = function(e, t = null, i = null, o = 0, n = null, s = e === Ht ? 0 : 1, l = false, h = false) {
    const d = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && pp(t),
      ref: t && ms(t),
      scopeId: _d,
      slotScopeIds: null,
      children: i,
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
      patchFlag: o,
      dynamicProps: n,
      dynamicChildren: null,
      appContext: null,
      ctx: Pt
    };
    return h ? (Il(d, i), s & 128 && e.normalize(d)) : i && (d.shapeFlag |= ut(i) ? 8 : 16), vr > 0 && !l && li && (d.patchFlag > 0 || s & 6) && d.patchFlag !== 32 && li.push(d), d;
  };
  jt = hN;
  function hN(e, t = null, i = null, o = 0, n = null, s = false) {
    if ((!e || e === Kd) && (e = Mt), _n(e)) {
      const h = co(e, t, true);
      return i && Il(h, i), vr > 0 && !s && li && (h.shapeFlag & 6 ? li[li.indexOf(e)] = h : li.push(h)), h.patchFlag = -2, h;
    }
    if (wN(e) && (e = e.__vccOpts), t) {
      t = fN(t);
      let { class: h, style: d } = t;
      h && !ut(h) && (t.class = nl(h)), Je(d) && (da(d) && !Se(d) && (d = yt({}, d)), t.style = la(d));
    }
    const l = ut(e) ? 1 : Fs(e) ? 128 : Wd(e) ? 64 : Je(e) ? 4 : be(e) ? 2 : 0;
    return Ye(e, t, i, o, n, l, s, true);
  }
  function fN(e) {
    return e ? da(e) || rp(e) ? yt({}, e) : e : null;
  }
  co = function(e, t, i = false, o = false) {
    const { props: n, ref: s, patchFlag: l, children: h, transition: d } = e, m = t ? pN(n || {}, t) : n, p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: m,
      key: m && pp(m),
      ref: t && t.ref ? i && s ? Se(s) ? s.concat(ms(t)) : [
        s,
        ms(t)
      ] : ms(t) : s,
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
      transition: d,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && co(e.ssContent),
      ssFallback: e.ssFallback && co(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return d && o && Ho(p, d.clone(p)), p;
  };
  dN = function(e = " ", t = 0) {
    return jt(Ia, null, e, t);
  };
  Mv = function(e, t) {
    const i = jt(gr, null, e);
    return i.staticCount = t, i;
  };
  is = function(e = "", t = false) {
    return t ? (Ti(), Dc(Mt, null, e)) : jt(Mt, null, e);
  };
  function Ui(e) {
    return e == null || typeof e == "boolean" ? jt(Mt) : Se(e) ? jt(Ht, null, e.slice()) : _n(e) ? yo(e) : jt(Ia, null, String(e));
  }
  function yo(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : co(e);
  }
  function Il(e, t) {
    let i = 0;
    const { shapeFlag: o } = e;
    if (t == null) t = null;
    else if (Se(t)) i = 16;
    else if (typeof t == "object") if (o & 65) {
      const n = t.default;
      n && (n._c && (n._d = false), Il(e, n()), n._c && (n._d = true));
      return;
    } else {
      i = 32;
      const n = t._;
      !n && !rp(t) ? t._ctx = Pt : n === 3 && Pt && (Pt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else be(t) ? (t = {
      default: t,
      _ctx: Pt
    }, i = 32) : (t = String(t), o & 64 ? (i = 16, t = [
      dN(t)
    ]) : i = 8);
    e.children = t, e.shapeFlag |= i;
  }
  pN = function(...e) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      for (const n in o) if (n === "class") t.class !== o.class && (t.class = nl([
        t.class,
        o.class
      ]));
      else if (n === "style") t.style = la([
        t.style,
        o.style
      ]);
      else if (na(n)) {
        const s = t[n], l = o[n];
        l && s !== l && !(Se(s) && s.includes(l)) && (t[n] = s ? [].concat(s, l) : l);
      } else n !== "" && (t[n] = o[n]);
    }
    return t;
  };
  function gi(e, t, i, o = null) {
    Li(e, t, 7, [
      i,
      o
    ]);
  }
  const mN = ep();
  let gN = 0;
  function TN(e, t, i) {
    const o = e.type, n = (t ? t.appContext : e.appContext) || mN, s = {
      uid: gN++,
      vnode: e,
      type: o,
      parent: t,
      appContext: n,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new ud(true),
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
      propsOptions: ap(o, n),
      emitsOptions: ip(o, n),
      emit: null,
      emitted: null,
      propsDefaults: Ge,
      inheritAttrs: o.inheritAttrs,
      ctx: Ge,
      data: Ge,
      props: Ge,
      attrs: Ge,
      slots: Ge,
      refs: Ge,
      setupState: Ge,
      setupContext: null,
      suspense: i,
      suspenseId: i ? i.pendingId : 0,
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
    }, s.root = t ? t.root : s, s.emit = VA.bind(null, s), e.ce && e.ce(s), s;
  }
  let Bt = null;
  ko = () => Bt || Pt;
  let Us, Hc;
  {
    const e = ca(), t = (i, o) => {
      let n;
      return (n = e[i]) || (n = e[i] = []), n.push(o), (s) => {
        n.length > 1 ? n.forEach((l) => l(s)) : n[0](s);
      };
    };
    Us = t("__VUE_INSTANCE_SETTERS__", (i) => Bt = i), Hc = t("__VUE_SSR_SETTERS__", (i) => Lr = i);
  }
  const _r = (e) => {
    const t = Bt;
    return Us(e), e.scope.on(), () => {
      e.scope.off(), Us(t);
    };
  }, lh = () => {
    Bt && Bt.scope.off(), Us(null);
  };
  function mp(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Lr = false;
  function EN(e, t = false, i = false) {
    t && Hc(t);
    const { props: o, children: n } = e.vnode, s = mp(e);
    QA(e, o, s, t), oN(e, n, i || t);
    const l = s ? IN(e, t) : void 0;
    return t && Hc(false), l;
  }
  function IN(e, t) {
    const i = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, WA);
    const { setup: o } = i;
    if (o) {
      ro();
      const n = e.setupContext = o.length > 1 ? RN(e) : null, s = _r(e), l = Pr(o, e, 0, [
        e.props,
        n
      ]), h = od(l);
      if (so(), s(), (h || e.sp) && !bo(e) && Vd(e), h) {
        if (l.then(lh, lh), t) return l.then((d) => {
          uh(e, d);
        }).catch((d) => {
          pa(d, e, 0);
        });
        e.asyncDep = l;
      } else uh(e, l);
    } else gp(e);
  }
  function uh(e, t, i) {
    be(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = vd(t)), gp(e);
  }
  function gp(e, t, i) {
    const o = e.type;
    e.render || (e.render = o.render || Ni);
    {
      const n = _r(e);
      ro();
      try {
        GA(e);
      } finally {
        so(), n();
      }
    }
  }
  const ON = {
    get(e, t) {
      return Gt(e, "get", ""), e[t];
    }
  };
  function RN(e) {
    const t = (i) => {
      e.exposed = i || {};
    };
    return {
      attrs: new Proxy(e.attrs, ON),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Oa(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vd(ul(e.exposed)), {
      get(t, i) {
        if (i in t) return t[i];
        if (i in mr) return mr[i](e);
      },
      has(t, i) {
        return i in t || i in mr;
      }
    })) : e.proxy;
  }
  function Mc(e, t = true) {
    return be(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function wN(e) {
    return be(e) && "__vccOpts" in e;
  }
  Ol = (e, t) => hA(e, t, Lr);
  yN = function(e, t, i) {
    try {
      _s(-1);
      const o = arguments.length;
      return o === 2 ? Je(t) && !Se(t) ? _n(t) ? jt(e, null, [
        t
      ]) : jt(e, t) : jt(e, null, t) : (o > 3 ? i = Array.prototype.slice.call(arguments, 2) : o === 3 && _n(i) && (i = [
        i
      ]), jt(e, t, i));
    } finally {
      _s(1);
    }
  };
  const SN = "3.5.26";
  let Pc;
  const hh = typeof window < "u" && window.trustedTypes;
  if (hh) try {
    Pc = hh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Tp, AN, NN, qi, fh, bN, mo, Qn, Un, Ep, Ip, vN, Vo, dh;
  Tp = Pc ? (e) => Pc.createHTML(e) : (e) => e;
  AN = "http://www.w3.org/2000/svg";
  NN = "http://www.w3.org/1998/Math/MathML";
  qi = typeof document < "u" ? document : null;
  fh = qi && qi.createElement("template");
  bN = {
    insert: (e, t, i) => {
      t.insertBefore(e, i || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, i, o) => {
      const n = t === "svg" ? qi.createElementNS(AN, e) : t === "mathml" ? qi.createElementNS(NN, e) : i ? qi.createElement(e, {
        is: i
      }) : qi.createElement(e);
      return e === "select" && o && o.multiple != null && n.setAttribute("multiple", o.multiple), n;
    },
    createText: (e) => qi.createTextNode(e),
    createComment: (e) => qi.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qi.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, i, o, n, s) {
      const l = i ? i.previousSibling : t.lastChild;
      if (n && (n === s || n.nextSibling)) for (; t.insertBefore(n.cloneNode(true), i), !(n === s || !(n = n.nextSibling)); ) ;
      else {
        fh.innerHTML = Tp(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
        const h = fh.content;
        if (o === "svg" || o === "mathml") {
          const d = h.firstChild;
          for (; d.firstChild; ) h.appendChild(d.firstChild);
          h.removeChild(d);
        }
        t.insertBefore(h, i);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        i ? i.previousSibling : t.lastChild
      ];
    }
  };
  mo = "transition";
  Qn = "animation";
  Un = /* @__PURE__ */ Symbol("_vtc");
  Ep = {
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
  Ip = yt({}, xd, Ep);
  vN = (e) => (e.displayName = "Transition", e.props = Ip, e);
  Pv = vN((e, { slots: t }) => yN(AA, Op(e), t));
  Vo = (e, t = []) => {
    Se(e) ? e.forEach((i) => i(...t)) : e && e(...t);
  };
  dh = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Op(e) {
    const t = {};
    for (const pe in e) pe in Ep || (t[pe] = e[pe]);
    if (e.css === false) return t;
    const { name: i = "v", type: o, duration: n, enterFromClass: s = `${i}-enter-from`, enterActiveClass: l = `${i}-enter-active`, enterToClass: h = `${i}-enter-to`, appearFromClass: d = s, appearActiveClass: m = l, appearToClass: p = h, leaveFromClass: I = `${i}-leave-from`, leaveActiveClass: N = `${i}-leave-active`, leaveToClass: S = `${i}-leave-to` } = e, M = LN(n), D = M && M[0], ie = M && M[1], { onBeforeEnter: Q, onEnter: Y, onEnterCancelled: G, onLeave: _, onLeaveCancelled: re, onBeforeAppear: ge = Q, onAppear: se = Y, onAppearCancelled: de = G } = t, ne = (pe, xe, Ot, oi) => {
      pe._enterCancelled = oi, Io(pe, xe ? p : h), Io(pe, xe ? m : l), Ot && Ot();
    }, Te = (pe, xe) => {
      pe._isLeaving = false, Io(pe, I), Io(pe, S), Io(pe, N), xe && xe();
    }, Ce = (pe) => (xe, Ot) => {
      const oi = pe ? se : Y, Xe = () => ne(xe, pe, Ot);
      Vo(oi, [
        xe,
        Xe
      ]), ph(() => {
        Io(xe, pe ? d : s), Pi(xe, pe ? p : h), dh(oi) || mh(xe, o, D, Xe);
      });
    };
    return yt(t, {
      onBeforeEnter(pe) {
        Vo(Q, [
          pe
        ]), Pi(pe, s), Pi(pe, l);
      },
      onBeforeAppear(pe) {
        Vo(ge, [
          pe
        ]), Pi(pe, d), Pi(pe, m);
      },
      onEnter: Ce(false),
      onAppear: Ce(true),
      onLeave(pe, xe) {
        pe._isLeaving = true;
        const Ot = () => Te(pe, xe);
        Pi(pe, I), pe._enterCancelled ? (Pi(pe, N), Fc(pe)) : (Fc(pe), Pi(pe, N)), ph(() => {
          pe._isLeaving && (Io(pe, I), Pi(pe, S), dh(_) || mh(pe, o, ie, Ot));
        }), Vo(_, [
          pe,
          Ot
        ]);
      },
      onEnterCancelled(pe) {
        ne(pe, false, void 0, true), Vo(G, [
          pe
        ]);
      },
      onAppearCancelled(pe) {
        ne(pe, true, void 0, true), Vo(de, [
          pe
        ]);
      },
      onLeaveCancelled(pe) {
        Te(pe), Vo(re, [
          pe
        ]);
      }
    });
  }
  function LN(e) {
    if (e == null) return null;
    if (Je(e)) return [
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
    return bS(e);
  }
  function Pi(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Un] || (e[Un] = /* @__PURE__ */ new Set())).add(t);
  }
  function Io(e, t) {
    t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
    const i = e[Un];
    i && (i.delete(t), i.size || (e[Un] = void 0));
  }
  function ph(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let CN = 0;
  function mh(e, t, i, o) {
    const n = e._endId = ++CN, s = () => {
      n === e._endId && o();
    };
    if (i != null) return setTimeout(s, i);
    const { type: l, timeout: h, propCount: d } = Rp(e, t);
    if (!l) return o();
    const m = l + "end";
    let p = 0;
    const I = () => {
      e.removeEventListener(m, N), s();
    }, N = (S) => {
      S.target === e && ++p >= d && I();
    };
    setTimeout(() => {
      p < d && I();
    }, h + 1), e.addEventListener(m, N);
  }
  function Rp(e, t) {
    const i = window.getComputedStyle(e), o = (M) => (i[M] || "").split(", "), n = o(`${mo}Delay`), s = o(`${mo}Duration`), l = gh(n, s), h = o(`${Qn}Delay`), d = o(`${Qn}Duration`), m = gh(h, d);
    let p = null, I = 0, N = 0;
    t === mo ? l > 0 && (p = mo, I = l, N = s.length) : t === Qn ? m > 0 && (p = Qn, I = m, N = d.length) : (I = Math.max(l, m), p = I > 0 ? l > m ? mo : Qn : null, N = p ? p === mo ? s.length : d.length : 0);
    const S = p === mo && /\b(?:transform|all)(?:,|$)/.test(o(`${mo}Property`).toString());
    return {
      type: p,
      timeout: I,
      propCount: N,
      hasTransform: S
    };
  }
  function gh(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((i, o) => Th(i) + Th(e[o])));
  }
  function Th(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Fc(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function DN(e, t, i) {
    const o = e[Un];
    o && (t = (t ? [
      t,
      ...o
    ] : [
      ...o
    ]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
  }
  let ks, wp;
  ks = /* @__PURE__ */ Symbol("_vod");
  wp = /* @__PURE__ */ Symbol("_vsh");
  Fv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: i }) {
      e[ks] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : er(e, t);
    },
    mounted(e, { value: t }, { transition: i }) {
      i && t && i.enter(e);
    },
    updated(e, { value: t, oldValue: i }, { transition: o }) {
      !t != !i && (o ? t ? (o.beforeEnter(e), er(e, true), o.enter(e)) : o.leave(e, () => {
        er(e, false);
      }) : er(e, t));
    },
    beforeUnmount(e, { value: t }) {
      er(e, t);
    }
  };
  function er(e, t) {
    e.style.display = t ? e[ks] : "none", e[wp] = !t;
  }
  const yp = /* @__PURE__ */ Symbol("");
  _v = function(e) {
    const t = ko();
    if (!t) return;
    const i = t.ut = (n = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((s) => Ws(s, n));
    }, o = () => {
      const n = e(t.proxy);
      t.ce ? Ws(t.ce, n) : _c(t.subTree, n), i(n);
    };
    qd(() => {
      Md(o);
    }), Fr(() => {
      yn(o, Ni, {
        flush: "post"
      });
      const n = new MutationObserver(o);
      n.observe(t.subTree.el.parentNode, {
        childList: true
      }), ml(() => n.disconnect());
    });
  };
  function _c(e, t) {
    if (e.shapeFlag & 128) {
      const i = e.suspense;
      e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
        _c(i.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Ws(e.el, t);
    else if (e.type === Ht) e.children.forEach((i) => _c(i, t));
    else if (e.type === gr) {
      let { el: i, anchor: o } = e;
      for (; i && (Ws(i, t), i !== o); ) i = i.nextSibling;
    }
  }
  function Ws(e, t) {
    if (e.nodeType === 1) {
      const i = e.style;
      let o = "";
      for (const n in t) {
        const s = PS(t[n]);
        i.setProperty(`--${n}`, s), o += `--${n}: ${s};`;
      }
      i[yp] = o;
    }
  }
  const HN = /(?:^|;)\s*display\s*:/;
  function MN(e, t, i) {
    const o = e.style, n = ut(i);
    let s = false;
    if (i && !n) {
      if (t) if (ut(t)) for (const l of t.split(";")) {
        const h = l.slice(0, l.indexOf(":")).trim();
        i[h] == null && gs(o, h, "");
      }
      else for (const l in t) i[l] == null && gs(o, l, "");
      for (const l in i) l === "display" && (s = true), gs(o, l, i[l]);
    } else if (n) {
      if (t !== i) {
        const l = o[yp];
        l && (i += ";" + l), o.cssText = i, s = HN.test(i);
      }
    } else t && e.removeAttribute("style");
    ks in e && (e[ks] = s ? o.display : "", e[wp] && (o.display = "none"));
  }
  const Eh = /\s*!important$/;
  function gs(e, t, i) {
    if (Se(i)) i.forEach((o) => gs(e, t, o));
    else if (i == null && (i = ""), t.startsWith("--")) e.setProperty(t, i);
    else {
      const o = PN(e, t);
      Eh.test(i) ? e.setProperty(ho(o), i.replace(Eh, ""), "important") : e[o] = i;
    }
  }
  const Ih = [
    "Webkit",
    "Moz",
    "ms"
  ], tc = {};
  function PN(e, t) {
    const i = tc[t];
    if (i) return i;
    let o = hi(t);
    if (o !== "filter" && o in e) return tc[t] = o;
    o = aa(o);
    for (let n = 0; n < Ih.length; n++) {
      const s = Ih[n] + o;
      if (s in e) return tc[t] = s;
    }
    return t;
  }
  const Oh = "http://www.w3.org/1999/xlink";
  function Rh(e, t, i, o, n, s = MS(t)) {
    o && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(Oh, t.slice(6, t.length)) : e.setAttributeNS(Oh, t, i) : i == null || s && !ad(i) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : uo(i) ? String(i) : i);
  }
  function wh(e, t, i, o, n) {
    if (t === "innerHTML" || t === "textContent") {
      i != null && (e[t] = t === "innerHTML" ? Tp(i) : i);
      return;
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const h = s === "OPTION" ? e.getAttribute("value") || "" : e.value, d = i == null ? e.type === "checkbox" ? "on" : "" : String(i);
      (h !== d || !("_value" in e)) && (e.value = d), i == null && e.removeAttribute(t), e._value = i;
      return;
    }
    let l = false;
    if (i === "" || i == null) {
      const h = typeof e[t];
      h === "boolean" ? i = ad(i) : i == null && h === "string" ? (i = "", l = true) : h === "number" && (i = 0, l = true);
    }
    try {
      e[t] = i;
    } catch {
    }
    l && e.removeAttribute(n || t);
  }
  function FN(e, t, i, o) {
    e.addEventListener(t, i, o);
  }
  function _N(e, t, i, o) {
    e.removeEventListener(t, i, o);
  }
  const yh = /* @__PURE__ */ Symbol("_vei");
  function UN(e, t, i, o, n = null) {
    const s = e[yh] || (e[yh] = {}), l = s[t];
    if (o && l) l.value = o;
    else {
      const [h, d] = kN(t);
      if (o) {
        const m = s[t] = BN(o, n);
        FN(e, h, m, d);
      } else l && (_N(e, h, l, d), s[t] = void 0);
    }
  }
  const Sh = /(?:Once|Passive|Capture)$/;
  function kN(e) {
    let t;
    if (Sh.test(e)) {
      t = {};
      let o;
      for (; o = e.match(Sh); ) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : ho(e.slice(2)),
      t
    ];
  }
  let ic = 0;
  const WN = Promise.resolve(), GN = () => ic || (WN.then(() => ic = 0), ic = Date.now());
  function BN(e, t) {
    const i = (o) => {
      if (!o._vts) o._vts = Date.now();
      else if (o._vts <= i.attached) return;
      Li(jN(o, i.value), t, 5, [
        o
      ]);
    };
    return i.value = e, i.attached = GN(), i;
  }
  function jN(e, t) {
    if (Se(t)) {
      const i = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        i.call(e), e._stopped = true;
      }, t.map((o) => (n) => !n._stopped && o && o(n));
    } else return t;
  }
  const Ah = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xN = (e, t, i, o, n, s) => {
    const l = n === "svg";
    t === "class" ? DN(e, o, l) : t === "style" ? MN(e, i, o) : na(t) ? il(t) || UN(e, t, i, o, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : YN(e, t, o, l)) ? (wh(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rh(e, t, o, l, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ut(o)) ? wh(e, hi(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Rh(e, t, o, l));
  };
  function YN(e, t, i, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && Ah(t) && be(i));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const n = e.tagName;
      if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE") return false;
    }
    return Ah(t) && ut(i) ? false : t in e;
  }
  let Sp, Ap, Gs, Nh, zN, $N;
  Sp = /* @__PURE__ */ new WeakMap();
  Ap = /* @__PURE__ */ new WeakMap();
  Gs = /* @__PURE__ */ Symbol("_moveCb");
  Nh = /* @__PURE__ */ Symbol("_enterCb");
  zN = (e) => (delete e.props.mode, e);
  $N = zN({
    name: "TransitionGroup",
    props: yt({}, Ip, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const i = ko(), o = jd();
      let n, s;
      return dl(() => {
        if (!n.length) return;
        const l = e.moveClass || `${e.name || "v"}-move`;
        if (!KN(n[0].el, i.vnode.el, l)) {
          n = [];
          return;
        }
        n.forEach(VN), n.forEach(ZN);
        const h = n.filter(qN);
        Fc(i.vnode.el), h.forEach((d) => {
          const m = d.el, p = m.style;
          Pi(m, l), p.transform = p.webkitTransform = p.transitionDuration = "";
          const I = m[Gs] = (N) => {
            N && N.target !== m || (!N || N.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", I), m[Gs] = null, Io(m, l));
          };
          m.addEventListener("transitionend", I);
        }), n = [];
      }), () => {
        const l = ke(e), h = Op(l);
        let d = l.tag || Ht;
        if (n = [], s) for (let m = 0; m < s.length; m++) {
          const p = s[m];
          p.el && p.el instanceof Element && (n.push(p), Ho(p, br(p, h, o, i)), Sp.set(p, {
            left: p.el.offsetLeft,
            top: p.el.offsetTop
          }));
        }
        s = t.default ? fl(t.default()) : [];
        for (let m = 0; m < s.length; m++) {
          const p = s[m];
          p.key != null && Ho(p, br(p, h, o, i));
        }
        return jt(d, null, s);
      };
    }
  });
  Uv = $N;
  function VN(e) {
    const t = e.el;
    t[Gs] && t[Gs](), t[Nh] && t[Nh]();
  }
  function ZN(e) {
    Ap.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function qN(e) {
    const t = Sp.get(e), i = Ap.get(e), o = t.left - i.left, n = t.top - i.top;
    if (o || n) {
      const s = e.el.style;
      return s.transform = s.webkitTransform = `translate(${o}px,${n}px)`, s.transitionDuration = "0s", e;
    }
  }
  function KN(e, t, i) {
    const o = e.cloneNode(), n = e[Un];
    n && n.forEach((h) => {
      h.split(/\s+/).forEach((d) => d && o.classList.remove(d));
    }), i.split(/\s+/).forEach((h) => h && o.classList.add(h)), o.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(o);
    const { hasTransform: l } = Rp(o);
    return s.removeChild(o), l;
  }
  let JN, XN, QN, eb;
  JN = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  XN = {
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
    exact: (e, t) => JN.some((i) => e[`${i}Key`] && !t.includes(i))
  };
  kv = (e, t) => {
    const i = e._withMods || (e._withMods = {}), o = t.join(".");
    return i[o] || (i[o] = ((n, ...s) => {
      for (let l = 0; l < t.length; l++) {
        const h = XN[t[l]];
        if (h && h(n, t)) return;
      }
      return e(n, ...s);
    }));
  };
  QN = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  Wv = (e, t) => {
    const i = e._withKeys || (e._withKeys = {}), o = t.join(".");
    return i[o] || (i[o] = ((n) => {
      if (!("key" in n)) return;
      const s = ho(n.key);
      if (t.some((l) => l === s || QN[l] === s)) return e(n);
    }));
  };
  eb = yt({
    patchProp: xN
  }, bN);
  let bh;
  function tb() {
    return bh || (bh = rN(eb));
  }
  const Np = ((...e) => {
    const t = tb().createApp(...e), { mount: i } = t;
    return t.mount = (o) => {
      const n = ob(o);
      if (!n) return;
      const s = t._component;
      !be(s) && !s.render && !s.template && (s.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
      const l = i(n, false, ib(n));
      return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), l;
    }, t;
  });
  function ib(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function ob(e) {
    return ut(e) ? document.querySelector(e) : e;
  }
  const nb = "" + new URL("../favicon.svg", import.meta.url).href, Yt = (e) => pc(e) ? e : af(e) ? String(e) : JSON.stringify(e), Di = {
    unloaded: (...e) => `[loadModules] Module "${Yt(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Yt(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Yt(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Yt(e[0])}" failed to load.
Trackback: 
${Yt(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Yt(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Yt(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Yt(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Yt(e[0])}" is missing the following dependencies: ${Yt(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Yt(e[0])}" is loading its dependencies (${e.slice(1).map((t) => Yt(t)).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Yt(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Yt(e[0])}" dependencies failed to load. 

Trackback: 
${Yt(e[1])}`
  }, rb = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function bp(e, t, i = 1e4, o = {}, n = 0, s = 0, l = 0) {
    var _a3, _b3, _c2, _d2, _e, _f2;
    const { logger: h = rb, progressReporter: d, printLog: m = true } = o, p = e.find((D) => D.name === t);
    if (!p) throw new Error(`cannot exactly find module "${t}" from the library`);
    const I = e.findIndex((D) => D.name === p.name);
    if (e[I].status === "loaded") return m && h.info(Di.alreadyLoaded(p.name)), {
      completed: l,
      total: s
    };
    const N = p.dependencies || [], S = e.filter((D) => N.includes(D.name)), M = N.filter((D) => !e.find((ie) => ie.name === D));
    if (M.length > 0) {
      const D = Di.missingDependencies(p.name, M.join(", "));
      throw m && h.error(D), new Error(D);
    }
    if (e[I].status === "error") {
      const D = Di.errorDetermined(p.name);
      throw m && h.info(D), new Error(D);
    }
    if (e[I].status === "loading") return m && h.info(Di.alreadyLoading(p.name)), await sb(e, p.name, i, h), {
      completed: l,
      total: s
    };
    try {
      let D = s, ie = l;
      if (n === 0) {
        const Q = /* @__PURE__ */ new Set(), Y = (G) => {
          if (Q.has(G)) return;
          Q.add(G);
          const _ = e.find((re) => re.name === G);
          if (_ && _.dependencies) for (const re of _.dependencies) Y(re);
        };
        Y(t), D = Q.size, ie = 0;
      }
      if (S.length > 0) {
        h.info(Di.loadDependencies(p.name, S.map((Q) => Q.name)));
        for (const Q of S) {
          const Y = await bp(e, Q.name, i, {
            logger: h,
            progressReporter: d,
            printLog: m
          }, n + 1, D, ie);
          ie = Y.completed, D = Y.total, (_a3 = d == null ? void 0 : d.onOverallProgress) == null ? void 0 : _a3.call(d, ie, D);
        }
        m && h.info(Di.dependenciesReady(p.name));
      }
      e[I].status = "loading", (_b3 = d == null ? void 0 : d.onModuleStart) == null ? void 0 : _b3.call(d, p.displayName);
      try {
        return m && h.info(Di.loading(p.name)), await p.moduleInit(i), e[I].status = "loaded", ie++, (_c2 = d == null ? void 0 : d.onModuleComplete) == null ? void 0 : _c2.call(d, p.displayName), (_d2 = d == null ? void 0 : d.onOverallProgress) == null ? void 0 : _d2.call(d, ie, D), m && h.info(Di.loaded(p.name)), {
          completed: ie,
          total: D
        };
      } catch (Q) {
        e[I].status = "error";
        const Y = Di.error(p.name, pc(Q) ? Q : af(Q) ? Q.message : JSON.stringify(Q));
        throw h.error(Y), (_e = d == null ? void 0 : d.onModuleError) == null ? void 0 : _e.call(d, p.displayName, pc(Q) ? new Error(Q) : Q), new Error(Y);
      }
    } catch (D) {
      e[I].status = "error", console.log(D);
      const ie = Di.error(p.name, D);
      throw h.error(ie), (_f2 = d == null ? void 0 : d.onModuleError) == null ? void 0 : _f2.call(d, p.displayName, D), new Error(ie);
    }
  }
  async function sb(e, t, i = 1e4, o) {
    const n = Date.now();
    return new Promise((s, l) => {
      const h = setInterval(() => {
        const d = e.find((m) => m.name === t);
        if (d && d.status === "loaded") clearInterval(h), s();
        else if (Date.now() - n > i) {
          clearInterval(h);
          const m = new Error(`Load module ${t} timeout`);
          o == null ? void 0 : o.error(m.message), l(m);
        }
      }, 10);
    });
  }
  let ab, cb, vh, lb;
  ab = "modulepreload";
  cb = function(e, t) {
    return new URL(e, t).href;
  };
  vh = {};
  oc = function(t, i, o) {
    let n = Promise.resolve();
    if (i && i.length > 0) {
      let m = function(p) {
        return Promise.all(p.map((I) => Promise.resolve(I).then((N) => ({
          status: "fulfilled",
          value: N
        }), (N) => ({
          status: "rejected",
          reason: N
        }))));
      };
      const l = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), d = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      n = m(i.map((p) => {
        if (p = cb(p, o), p in vh) return;
        vh[p] = true;
        const I = p.endsWith(".css"), N = I ? '[rel="stylesheet"]' : "";
        if (o) for (let M = l.length - 1; M >= 0; M--) {
          const D = l[M];
          if (D.href === p && (!I || D.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${p}"]${N}`)) return;
        const S = document.createElement("link");
        if (S.rel = I ? "stylesheet" : ab, I || (S.as = "script"), S.crossOrigin = "", S.href = p, d && S.setAttribute("nonce", d), document.head.appendChild(S), I) return new Promise((M, D) => {
          S.addEventListener("load", M), S.addEventListener("error", () => D(new Error(`Unable to preload CSS for ${p}`)));
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
  class De extends Gn {
    constructor(t, i, o) {
      super(t, o);
      __publicField(this, "code");
      __publicField(this, "domain", Dr.GEOLOCATION);
      this.code = i;
    }
  }
  class $i extends De {
    constructor(t = "Geolocation update service error", i, o) {
      super(t, "UPDATE_SERVICE_ERROR", o), this.serviceName = i;
    }
  }
  class Ei {
    constructor(t, i, o = 0) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      __publicField(this, "accuracy");
      this.latitude = t, this.longitude = i, this.accuracy = o;
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
      if (this.isInitialized) return W(void 0);
      for (const t of this.strategies) try {
        if (await t.isAvailable()) {
          if (this.activeStrategy = t, (await this.activeStrategy.initialize()).isErr()) {
            console.info(`[BackendManager] Backend ${t.name} not initialised`);
            continue;
          }
          return this.isInitialized = true, console.info(`[BackendManager] Initialised with ${t.name} backend`), W(void 0);
        } else console.info(`[BackendManager] Fail to initialise with ${t.name} backend, trying fallbacks`);
      } catch (i) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, i);
        continue;
      }
      return C(new De("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return C(new De("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return C(new De("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const i = await this.activeStrategy.startWatching(t);
        if (i.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, i.error), C(i.error);
      } else {
        const i = await this.activeStrategy.startWatching(t);
        if (i.isErr()) return C(i.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), W(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return W(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return C(new De(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return W(void 0);
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
    emit(t, i) {
      for (const o of this.callbacks) try {
        o(t, i);
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
  class fb {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new hb();
    }
    updateLocation(t, i) {
      this.currentLocation = t, this.currentBackend = i, this.eventEmitter.emit(t, i);
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
  class db {
    constructor() {
      __publicField(this, "name", "gps");
      __publicField(this, "provider", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
    }
    async initialize() {
      if (this.isInitialized) return W(void 0);
      try {
        const t = Hr();
        if (t.isErr()) return C(new De("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        return i ? (this.provider = i, this.isInitialized = true, W(void 0)) : C(new De("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
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
      const i = await this.provider.watchPosition((o) => {
        const n = new Ei(o.coords.latitude, o.coords.longitude, o.coords.accuracy);
        t(n, "gps");
      });
      return i.isErr() ? C(new De("Failed to start watching position", "UPDATE_SERVICE_ERROR", i.error)) : (this.watchId = i.value, W(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return C(new De("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return W(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return C(new De("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return C(new De("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const i = t.value;
      return W(new Ei(i.coords.latitude, i.coords.longitude, i.coords.accuracy));
    }
  }
  const Lh = "https://ipapi.co/json/";
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
      return W();
    }
    async isAvailable() {
      try {
        return (await fetch(Lh, {
          method: "HEAD",
          signal: AbortSignal.timeout(5e3)
        })).ok;
      } catch {
        return false;
      }
    }
    async startWatching(t) {
      const i = this.nextCallbackId++;
      return this.watchCallbacks.set(i, t), this.activeWatcherCount++, this.watchInterval === null && (this.watchInterval = setInterval(() => {
        this.updateLocation();
      }, 3e4), this.updateLocation()), W(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, W(void 0);
      } catch (t) {
        return C(new De("Failed to stop IP location watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      try {
        console.info("[IPFallbackBackend] Getting location from IP service");
        const t = await fetch(Lh, {
          signal: AbortSignal.timeout(1e4)
        });
        if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
        const i = await t.json(), o = new Ei(i.latitude, i.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), W(o);
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
        const i = t.value;
        if (!this.lastLocation || Math.abs(i.latitude - this.lastLocation.latitude) > 1e-4 || Math.abs(i.longitude - this.lastLocation.longitude) > 1e-4) {
          this.lastLocation = i;
          for (const o of this.watchCallbacks.values()) try {
            o(i, "ip");
          } catch (n) {
            console.error("[IPFallbackBackend] Callback error:", n);
          }
        }
      } catch (t) {
        console.error("[IPFallbackBackend] Error updating location:", t);
      }
    }
  }
  const { sin: ai, cos: mb, sqrt: Rl, abs: Bs, PI: qt } = Math, Ch = 6378245, Dh = 0.006693421622965823;
  function vp(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function gb(e, t) {
    let i = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * Rl(Bs(e));
    return i += (20 * ai(6 * e * qt) + 20 * ai(2 * e * qt)) * 2 / 3, i += (20 * ai(t * qt) + 40 * ai(t / 3 * qt)) * 2 / 3, i += (160 * ai(t / 12 * qt) + 320 * ai(t * qt / 30)) * 2 / 3, i;
  }
  function Tb(e, t) {
    let i = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * Rl(Bs(e));
    return i += (20 * ai(6 * e * qt) + 20 * ai(2 * e * qt)) * 2 / 3, i += (20 * ai(e * qt) + 40 * ai(e / 3 * qt)) * 2 / 3, i += (150 * ai(e / 12 * qt) + 300 * ai(e / 30 * qt)) * 2 / 3, i;
  }
  function Eb(e, t) {
    let i = Tb(e - 105, t - 35), o = gb(e - 105, t - 35);
    const n = t / 180 * qt;
    let s = ai(n);
    s = 1 - Dh * s * s;
    const l = Rl(s);
    return i = i * 180 / (Ch / l * mb(n) * qt), o = o * 180 / (Ch * (1 - Dh) / (s * l) * qt), [
      i,
      o
    ];
  }
  function vo(e) {
    const [t, i] = e;
    if (!vp(t, i)) return [
      t,
      i
    ];
    const o = Eb(t, i);
    return [
      t + o[0],
      i + o[1]
    ];
  }
  function kn(e) {
    const [t, i] = e;
    if (!vp(t, i)) return [
      t,
      i
    ];
    let [o, n] = [
      t,
      i
    ], s = vo([
      o,
      n
    ]), l = s[0] - t, h = s[1] - i;
    for (; Bs(l) > 1e-6 || Bs(h) > 1e-6; ) o -= l, n -= h, s = vo([
      o,
      n
    ]), l = s[0] - t, h = s[1] - i;
    return [
      o,
      n
    ];
  }
  const { sin: js, cos: xs, atan2: Lp, sqrt: Cp, PI: Ib } = Math, Ys = Ib * 3e3 / 180;
  function Sn(e) {
    const [t, i] = e, o = t - 65e-4, n = i - 6e-3, s = Cp(o * o + n * n) - 2e-5 * js(n * Ys), l = Lp(n, o) - 3e-6 * xs(o * Ys), h = s * xs(l), d = s * js(l);
    return [
      h,
      d
    ];
  }
  function Wn(e) {
    const [t, i] = e, o = t, n = i, s = Cp(o * o + n * n) + 2e-5 * js(n * Ys), l = Lp(n, o) + 3e-6 * xs(o * Ys), h = s * xs(l) + 65e-4, d = s * js(l) + 6e-3;
    return [
      h,
      d
    ];
  }
  const Hh = 180 / Math.PI, Mh = Math.PI / 180, zs = 6378137, go = 20037508342789244e-9;
  function os(e) {
    return [
      e[0] * Hh / zs,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / zs))) * Hh
    ];
  }
  function Ra(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, i = [
      zs * t * Mh,
      zs * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * Mh))
    ];
    return i[0] > go && (i[0] = go), i[0] < -go && (i[0] = -go), i[1] > go && (i[1] = go), i[1] < -go && (i[1] = -go), i;
  }
  const { abs: $s } = Math, Ph = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], Fh = [
    75,
    60,
    45,
    30,
    15,
    0
  ], Ob = [
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
  ], Rb = [
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
  function Dp(e, t, i) {
    const o = $s(t) / i[9];
    let n = i[0] + i[1] * $s(e), s = i[2] + i[3] * o + i[4] * Math.pow(o, 2) + i[5] * Math.pow(o, 3) + i[6] * Math.pow(o, 4) + i[7] * Math.pow(o, 5) + i[8] * Math.pow(o, 6);
    return n *= e < 0 ? -1 : 1, s *= t < 0 ? -1 : 1, [
      n,
      s
    ];
  }
  function wa(e) {
    const [t, i] = e;
    let o = [];
    for (let n = 0; n < Fh.length; n++) if ($s(i) > Fh[n]) {
      o = Rb[n];
      break;
    }
    return Dp(t, i, o);
  }
  function ns(e) {
    const [t, i] = e;
    let o = [];
    for (let n = 0; n < Ph.length; n++) if ($s(i) >= Ph[n]) {
      o = Ob[n];
      break;
    }
    return Dp(t, i, o);
  }
  function To(e, t) {
    if (!e) throw new Error(t);
  }
  function Hp(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function _h(e) {
    return !isNaN(Number(e)) && e !== null && !Hp(e);
  }
  function Ii(...e) {
    const t = e.length - 1;
    return function(...i) {
      let o = t, n = e[t].apply(null, i);
      for (; o--; ) n = e[o].call(null, n);
      return n;
    };
  }
  function Mp(e, t, i = false) {
    if (e === null) return;
    let o, n, s, l, h, d, m = 0, p = 0, I, N;
    const { type: S } = e, M = S === "FeatureCollection", D = S === "Feature", ie = M ? e.features.length : 1;
    for (let Q = 0; Q < ie; Q++) {
      I = M ? e.features[Q].geometry : D ? e.geometry : e, N = I ? I.type === "GeometryCollection" : false, d = N ? I.geometries.length : 1;
      for (let Y = 0; Y < d; Y++) {
        let G = 0, _ = 0;
        if (l = N ? I.geometries[Y] : I, l === null) continue;
        const re = l.type;
        switch (m = i && (re === "Polygon" || re === "MultiPolygon") ? 1 : 0, re) {
          case null:
            break;
          case "Point":
            if (h = l.coordinates, t(h, p, Q, G, _) === false) return false;
            p++, G++;
            break;
          case "LineString":
          case "MultiPoint":
            for (h = l.coordinates, o = 0; o < h.length; o++) {
              if (t(h[o], p, Q, G, _) === false) return false;
              p++, re === "MultiPoint" && G++;
            }
            re === "LineString" && G++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (h = l.coordinates, o = 0; o < h.length; o++) {
              for (n = 0; n < h[o].length - m; n++) {
                if (t(h[o][n], p, Q, G, _) === false) return false;
                p++;
              }
              re === "MultiLineString" && G++, re === "Polygon" && _++;
            }
            re === "Polygon" && G++;
            break;
          case "MultiPolygon":
            for (h = l.coordinates, o = 0; o < h.length; o++) {
              for (_ = 0, n = 0; n < h[o].length; n++) {
                for (s = 0; s < h[o][n].length - m; s++) {
                  if (t(h[o][n][s], p, Q, G, _) === false) return false;
                  p++;
                }
                _++;
              }
              G++;
            }
            break;
          case "GeometryCollection":
            for (o = 0; o < l.geometries.length; o++) if (Mp(l.geometries[o], t, i) === false) return false;
            break;
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
    }
  }
  var lt;
  (function(e) {
    e.WGS84 = "WGS84", e.WGS1984 = "WGS84", e.EPSG4326 = "WGS84", e.GCJ02 = "GCJ02", e.AMap = "GCJ02", e.BD09 = "BD09", e.BD09LL = "BD09", e.Baidu = "BD09", e.BMap = "BD09", e.BD09MC = "BD09MC", e.BD09Meter = "BD09MC", e.EPSG3857 = "EPSG3857", e.EPSG900913 = "EPSG3857", e.EPSG102100 = "EPSG3857", e.WebMercator = "EPSG3857", e.WM = "EPSG3857";
  })(lt || (lt = {}));
  const wb = {
    to: {
      [lt.GCJ02]: vo,
      [lt.BD09]: Ii(Wn, vo),
      [lt.BD09MC]: Ii(wa, Wn, vo),
      [lt.EPSG3857]: Ra
    }
  }, yb = {
    to: {
      [lt.WGS84]: kn,
      [lt.BD09]: Wn,
      [lt.BD09MC]: Ii(wa, Wn),
      [lt.EPSG3857]: Ii(Ra, kn)
    }
  }, Sb = {
    to: {
      [lt.WGS84]: Ii(kn, Sn),
      [lt.GCJ02]: Sn,
      [lt.EPSG3857]: Ii(Ra, kn, Sn),
      [lt.BD09MC]: wa
    }
  }, Ab = {
    to: {
      [lt.WGS84]: os,
      [lt.GCJ02]: Ii(vo, os),
      [lt.BD09]: Ii(Wn, vo, os),
      [lt.BD09MC]: Ii(wa, Wn, vo, os)
    }
  }, Nb = {
    to: {
      [lt.WGS84]: Ii(kn, Sn, ns),
      [lt.GCJ02]: Ii(Sn, ns),
      [lt.EPSG3857]: Ii(Ra, kn, Sn, ns),
      [lt.BD09]: ns
    }
  }, bb = {
    WGS84: wb,
    GCJ02: yb,
    BD09: Sb,
    EPSG3857: Ab,
    BD09MC: Nb
  };
  var vb = bb;
  function Lb(e, t, i) {
    if (To(!!e, "The args[0] input coordinate is required"), To(!!t, "The args[1] original coordinate system is required"), To(!!i, "The args[2] target coordinate system is required"), t === i) return e;
    const o = vb[t];
    To(!!o, `Invalid original coordinate system: ${t}`);
    const n = o.to[i];
    To(!!n, `Invalid target coordinate system: ${i}`);
    const s = typeof e;
    if (To(s === "string" || s === "object", `Invalid input coordinate type: ${s}`), s === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let l = false;
    Hp(e) && (To(e.length >= 2, `Invalid input coordinate: ${e}`), To(_h(e[0]) && _h(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), l = true);
    const h = n;
    return l ? h(e) : (Mp(e, (d) => {
      [d[0], d[1]] = h(d);
    }), e);
  }
  const An = Object.assign(Object.assign({}, lt), {
    CRSTypes: lt,
    transform: Lb
  }), Uh = 6378137;
  class Pp {
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
      return this.cachedWGS84Projection || (this.cachedWGS84Projection = new Pn(ds.WGS84)), this.cachedWGS84Projection;
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
    setReferencePoint(t, i) {
      this.referencePoint = t, this.localProjection = i || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`, this.cachedLocalProjection && this.cachedLocalProjection.free(), this.cachedLocalProjection = new Pn(this.localProjection);
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      let i = t;
      if (this.geolocationCorrectionEnabled) {
        const l = new Ei(t.latitude, t.longitude);
        i = Fp(l);
      }
      const o = this.getWGS84Projection(), n = this.getLocalProjectionObj(), s = this.getPoint();
      s.x = i.longitude, s.y = i.latitude, s.z = 0;
      try {
        return Oc(o, n, s), {
          x: s.x,
          y: s.y
        };
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      const i = this.getLocalProjectionObj(), o = this.getWGS84Projection(), n = this.getPoint();
      n.x = t.x, n.y = t.y, n.z = 0;
      try {
        Oc(i, o, n);
        const s = {
          longitude: n.x,
          latitude: n.y
        };
        if (this.geolocationCorrectionEnabled) {
          const l = new Ei(s.latitude, s.longitude);
          return Cb(l);
        }
        return s;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const i = 6371e3, o = this.referencePoint.latitude * Math.PI / 180, n = this.referencePoint.longitude * Math.PI / 180, s = t.latitude * Math.PI / 180, l = t.longitude * Math.PI / 180, h = i * (l - n) * Math.cos((o + s) / 2), d = i * (s - o);
      return {
        x: h,
        y: d
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const i = this.referencePoint.latitude * Math.PI / 180, o = this.referencePoint.longitude * Math.PI / 180, n = (t.y / Uh + i) * 180 / Math.PI, s = (t.x / (Uh * Math.cos(i)) + o) * 180 / Math.PI;
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
    const t = An.transform([
      e.longitude,
      e.latitude
    ], An.WGS84, An.GCJ02);
    return new Ei(t[1], t[0]);
  }
  function Cb(e) {
    const t = An.transform([
      e.longitude,
      e.latitude
    ], An.GCJ02, An.WGS84);
    return new Ei(t[1], t[0]);
  }
  new Pp();
  class Db {
    constructor(t) {
      __publicField(this, "state");
      __publicField(this, "config");
      __publicField(this, "coordinateTransformer");
      __publicField(this, "lastKalmanGain", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "debugEnabled", false);
      this.config = {
        initialAccelerationUncertainty: 2,
        initialPositionUncertainty: 20,
        initialVelocityUncertainty: 10,
        gpsSpeedUncertainty: 0.05,
        imuAccelerationUncertainty: 0.05,
        velocityProcessNoise: 2,
        ...t
      }, this.coordinateTransformer = new Pp(), this.state = this.createInitialState();
    }
    dispose() {
      this.coordinateTransformer.dispose(), this.state.covariance = new We(6, 6), this.lastKalmanGain = null, this.isInitialized = false;
    }
    createInitialState() {
      return {
        position: {
          x: 0,
          y: 0
        },
        velocity: {
          x: 0,
          y: 0
        },
        acceleration: {
          x: 0,
          y: 0
        },
        covariance: new We([
          [
            Math.pow(this.config.initialPositionUncertainty, 2),
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            Math.pow(this.config.initialPositionUncertainty, 2),
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            Math.pow(this.config.initialVelocityUncertainty, 2),
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            Math.pow(this.config.initialVelocityUncertainty, 2),
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            Math.pow(this.config.initialAccelerationUncertainty, 2),
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            Math.pow(this.config.initialAccelerationUncertainty, 2)
          ]
        ]),
        timestamp: performance.now()
      };
    }
    async initialize(t) {
      if (t.latitude === 0 && t.longitude === 0) throw new Error("Invalid GPS coordinates: Cannot initialize Kalman filter with (0, 0)");
      this.coordinateTransformer.isInitialized() || this.coordinateTransformer.setReferencePoint({
        longitude: t.longitude,
        latitude: t.latitude
      });
      const i = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      });
      this.state.position = {
        x: i.x,
        y: i.y
      }, this.state.timestamp = t.timestamp;
      const o = t.speed !== void 0 && t.speed !== null && t.heading !== void 0 && t.heading !== null;
      if (o) {
        const h = this.gpsVelocityToLocal(t.speed, t.heading);
        this.state.velocity = {
          x: h.x,
          y: h.y
        };
      }
      const n = this.gpsAccuracyToSigma(t.accuracy), s = o ? this.config.gpsSpeedUncertainty : this.config.initialVelocityUncertainty, l = this.config.initialAccelerationUncertainty;
      this.state.covariance = new We([
        [
          n * n,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          n * n,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          s * s,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          s * s,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          l * l,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          l * l
        ]
      ]), this.debugEnabled && console.log("[KalmanFilter] Initialized:", {
        position: this.state.position,
        velocity: this.state.velocity,
        hasVelocity: o,
        positionUncertainty: n,
        velocityUncertainty: s,
        initialTimestamp: this.state.timestamp,
        gpsTimestamp: t.timestamp
      }), this.isInitialized = true;
    }
    predict(t) {
      this.isInitialized && (this.predictInternal(t), this.state.timestamp += t * 1e3);
    }
    async updateGPS(t) {
      if (!this.isInitialized) return;
      if (t.latitude === 0 && t.longitude === 0) {
        console.warn("[PureKalmanFilter] Ignoring invalid GPS coordinates (0, 0)");
        return;
      }
      const i = (t.timestamp - this.state.timestamp) / 1e3;
      i > 0 && this.predictInternal(i), await this.updateGPSInternal(t), this.state.timestamp = t.timestamp;
    }
    updateIMU(t) {
      if (!this.isInitialized) return;
      const i = (t.timestamp - this.state.timestamp) / 1e3;
      i > 0 ? (this.predictInternal(i), this.state.timestamp = t.timestamp) : i < 0 ? (this.debugEnabled && console.log("[KalmanFilter] IMU reading before state, resetting timestamp:", {
        stateTimestamp: this.state.timestamp,
        imuTimestamp: t.timestamp,
        dt: i
      }), this.state.timestamp = t.timestamp) : this.debugEnabled && console.log("[KalmanFilter] IMU reading at same timestamp"), t.acceleration && this.updateIMUInternal(t.acceleration);
    }
    async getFilteredPosition() {
      if (!this.isInitialized) throw new Error("Kalman filter not initialized - cannot get filtered position");
      const t = await this.coordinateTransformer.localToGeographic(this.state.position);
      return {
        latitude: t.latitude,
        longitude: t.longitude
      };
    }
    getState() {
      return {
        ...this.state
      };
    }
    getLastKalmanGain() {
      return this.lastKalmanGain;
    }
    isFilterInitialized() {
      return this.isInitialized;
    }
    predictInternal(t) {
      if (t <= 0) {
        this.debugEnabled && console.warn("[KalmanFilter] predictInternal called with non-positive dt:", t);
        return;
      }
      const i = new We([
        [
          1,
          0,
          t,
          0,
          0.5 * t * t,
          0
        ],
        [
          0,
          1,
          0,
          t,
          0,
          0.5 * t * t
        ],
        [
          0,
          0,
          1,
          0,
          t,
          0
        ],
        [
          0,
          0,
          0,
          1,
          0,
          t
        ],
        [
          0,
          0,
          0,
          0,
          1,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          1
        ]
      ]), o = this.config.initialAccelerationUncertainty, n = new We([
        [
          Math.pow(t, 4) / 4,
          0,
          Math.pow(t, 3) / 2,
          0,
          Math.pow(t, 2) / 2,
          0
        ],
        [
          0,
          Math.pow(t, 4) / 4,
          0,
          Math.pow(t, 3) / 2,
          0,
          Math.pow(t, 2) / 2
        ],
        [
          Math.pow(t, 3) / 2,
          0,
          t * t,
          0,
          t,
          0
        ],
        [
          0,
          Math.pow(t, 3) / 2,
          0,
          t * t,
          0,
          t
        ],
        [
          Math.pow(t, 2) / 2,
          0,
          t,
          0,
          1,
          0
        ],
        [
          0,
          Math.pow(t, 2) / 2,
          0,
          t,
          0,
          1
        ]
      ]).mul(o * o), s = this.config.velocityProcessNoise ?? 1, l = new We([
        [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          t * s * s,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          t * s * s,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      ]), h = n.add(l), d = new We([
        [
          this.state.position.x
        ],
        [
          this.state.position.y
        ],
        [
          this.state.velocity.x
        ],
        [
          this.state.velocity.y
        ],
        [
          this.state.acceleration.x
        ],
        [
          this.state.acceleration.y
        ]
      ]), m = i.mmul(d), p = i.mmul(this.state.covariance).mmul(i.transpose()).add(h);
      if (this.debugEnabled) {
        const I = p.trace(), N = Math.sqrt(p.get(0, 0) + p.get(1, 1)), S = Math.sqrt(p.get(2, 2) + p.get(3, 3)), M = Math.sqrt(p.get(4, 4) + p.get(5, 5));
        console.log("[KalmanFilter] Prediction:", {
          dt: t,
          sigmaA: o,
          covarianceTrace: I,
          positionUncertainty: N,
          velocityUncertainty: S,
          accelerationUncertainty: M,
          position: {
            x: m.get(0, 0),
            y: m.get(1, 0)
          },
          velocity: {
            x: m.get(2, 0),
            y: m.get(3, 0)
          },
          acceleration: {
            x: m.get(4, 0),
            y: m.get(5, 0)
          }
        });
      }
      this.state.position = {
        x: m.get(0, 0),
        y: m.get(1, 0)
      }, this.state.velocity = {
        x: m.get(2, 0),
        y: m.get(3, 0)
      }, this.state.acceleration = {
        x: m.get(4, 0),
        y: m.get(5, 0)
      }, this.state.covariance = p;
    }
    async updateGPSInternal(t) {
      const i = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      }), o = t.speed !== void 0 && t.speed !== null && t.heading !== void 0 && t.heading !== null;
      let n;
      o ? n = new We([
        [
          1,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          1,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          1,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          1,
          0,
          0
        ]
      ]) : n = new We([
        [
          1,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          1,
          0,
          0,
          0,
          0
        ]
      ]);
      let s;
      if (o) {
        const G = this.gpsVelocityToLocal(t.speed, t.heading);
        s = new We([
          [
            i.x
          ],
          [
            i.y
          ],
          [
            G.x
          ],
          [
            G.y
          ]
        ]);
      } else s = new We([
        [
          i.x
        ],
        [
          i.y
        ]
      ]);
      const l = this.gpsAccuracyToSigma(t.accuracy);
      let h;
      if (o) {
        const G = this.config.gpsSpeedUncertainty;
        h = new We([
          [
            l * l,
            0,
            0,
            0
          ],
          [
            0,
            l * l,
            0,
            0
          ],
          [
            0,
            0,
            G * G,
            0
          ],
          [
            0,
            0,
            0,
            G * G
          ]
        ]);
      } else h = new We([
        [
          l * l,
          0
        ],
        [
          0,
          l * l
        ]
      ]);
      const d = 1e-6, p = n.mmul(this.state.covariance).mmul(n.transpose()).add(h), I = p.add(We.identity(p.rows, p.columns).mul(d)), N = this.state.covariance.mmul(n.transpose()).mmul(gu(I));
      this.lastKalmanGain = N, this.debugEnabled && console.log("[KalmanFilter] GPS update:", {
        hasVelocity: o,
        position: {
          x: i.x,
          y: i.y
        },
        gpsSpeed: t.speed,
        gpsHeading: t.heading,
        kalmanGain: N.to2DArray(),
        gainNorm: Math.sqrt(N.to1DArray().reduce((G, _) => G + _ * _, 0))
      });
      const S = new We([
        [
          this.state.position.x
        ],
        [
          this.state.position.y
        ],
        [
          this.state.velocity.x
        ],
        [
          this.state.velocity.y
        ],
        [
          this.state.acceleration.x
        ],
        [
          this.state.acceleration.y
        ]
      ]), M = s.subtract(n.mmul(S)), D = S.add(N.mmul(M)), Y = We.identity(6, 6).subtract(N.mmul(n)).mmul(this.state.covariance).add(We.identity(6, 6).mul(d));
      this.state.position = {
        x: D.get(0, 0),
        y: D.get(1, 0)
      }, this.state.velocity = {
        x: D.get(2, 0),
        y: D.get(3, 0)
      }, this.state.acceleration = {
        x: D.get(4, 0),
        y: D.get(5, 0)
      }, this.state.covariance = Y;
    }
    gpsAccuracyToSigma(t) {
      return Math.max(t, 1) / Math.sqrt(2 * Math.log(20));
    }
    gpsVelocityToLocal(t, i) {
      const o = i * Math.PI / 180, n = t * Math.sin(o), s = t * Math.cos(o);
      return {
        x: n,
        y: s
      };
    }
    updateIMUInternal(t) {
      const i = new We([
        [
          0,
          0,
          0,
          0,
          1,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          1
        ]
      ]), o = new We([
        [
          t.x
        ],
        [
          t.y
        ]
      ]), n = Math.max(this.config.imuAccelerationUncertainty, 0.5), s = 1e-6, l = new We([
        [
          n * n,
          0
        ],
        [
          0,
          n * n
        ]
      ]), d = i.mmul(this.state.covariance).mmul(i.transpose()).add(l);
      (d.get(0, 0) < s || d.get(1, 1) < s || Math.abs(d.get(0, 1)) > 0.9 * Math.sqrt(d.get(0, 0) * d.get(1, 1))) && this.debugEnabled && console.warn("[KalmanFilter] Near-singular IMU measurement covariance, adding regularization");
      const m = d.add(We.identity(d.rows, d.columns).mul(s)), p = this.state.covariance.mmul(i.transpose()).mmul(gu(m));
      if (this.lastKalmanGain = p, this.debugEnabled) {
        const Q = Math.sqrt(p.to1DArray().reduce((Y, G) => Y + G * G, 0));
        console.log("[KalmanFilter] IMU update:", {
          acceleration: {
            x: t.x,
            y: t.y
          },
          kalmanGain: p.to2DArray(),
          gainNorm: Q,
          sigmaAcc: n,
          stateAcceleration: {
            x: this.state.acceleration.x,
            y: this.state.acceleration.y
          }
        });
      }
      const I = new We([
        [
          this.state.position.x
        ],
        [
          this.state.position.y
        ],
        [
          this.state.velocity.x
        ],
        [
          this.state.velocity.y
        ],
        [
          this.state.acceleration.x
        ],
        [
          this.state.acceleration.y
        ]
      ]), N = o.subtract(i.mmul(I)), S = I.add(p.mmul(N)), ie = We.identity(6, 6).subtract(p.mmul(i)).mmul(this.state.covariance).add(We.identity(6, 6).mul(s));
      this.state.position = {
        x: S.get(0, 0),
        y: S.get(1, 0)
      }, this.state.velocity = {
        x: S.get(2, 0),
        y: S.get(3, 0)
      }, this.state.acceleration = {
        x: S.get(4, 0),
        y: S.get(5, 0)
      }, this.state.covariance = ie;
    }
  }
  class Hb {
    constructor(t = 100) {
      __publicField(this, "imuProvider", null);
      __publicField(this, "isListening", false);
      __publicField(this, "imuCallbacks", []);
      __publicField(this, "imuUpdateInterval", null);
      this.imuUpdateIntervalMs = t;
    }
    async initialize() {
      try {
        const t = Hr();
        if (t.isErr()) return C(new De("Platform services not available for IMU", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getIMU();
        return i.isErr() ? C(new De("IMU provider not available", "BACKEND_NOT_AVAILABLE", i.error)) : (this.imuProvider = i.value, W(void 0));
      } catch (t) {
        return C(new De("Exception during IMU initialization", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async isAvailable() {
      return !this.imuProvider && (await this.initialize()).isErr() ? false : !!this.imuProvider;
    }
    async startListening(t) {
      if (!this.imuProvider) return C(new De("IMU not initialized", "BACKEND_NOT_AVAILABLE"));
      if (this.isListening) return this.imuCallbacks.push(t), W(void 0);
      try {
        return this.imuCallbacks.push(t), this.isListening = true, this.startIMUPolling(), console.info("[IMUFusionManager] Started IMU sensor fusion"), W(void 0);
      } catch (i) {
        return C(new De("Failed to start IMU listening", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async stopListening() {
      if (!this.isListening || !this.imuProvider) return W(void 0);
      try {
        this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null);
        const t = this.imuProvider.stopAcceleration();
        t.isErr() && console.warn("[IMUFusionManager] Failed to stop acceleration sensor:", t.error);
        const i = this.imuProvider.stopGyroscope();
        return i.isErr() && console.warn("[IMUFusionManager] Failed to stop gyroscope sensor:", i.error), this.imuCallbacks = [], this.isListening = false, console.info("[IMUFusionManager] Stopped IMU sensor fusion"), W(void 0);
      } catch (t) {
        return C(new De("Failed to stop IMU listening", "UPDATE_SERVICE_ERROR", t));
      }
    }
    startIMUPolling() {
      this.imuProvider && (this.imuUpdateInterval = setInterval(async () => {
        try {
          const t = await this.getCombinedIMUReading();
          if (t) for (const i of this.imuCallbacks) try {
            i(t);
          } catch (o) {
            console.error("[IMUFusionManager] IMU callback error:", o);
          }
        } catch (t) {
          console.error("[IMUFusionManager] Error polling IMU:", t);
        }
      }, this.imuUpdateIntervalMs));
    }
    async getCombinedIMUReading() {
      if (!this.imuProvider) return null;
      try {
        const [t, i] = await Promise.all([
          this.imuProvider.getAccelerationReading(),
          this.imuProvider.getGyroscopeReading()
        ]), o = {
          timestamp: performance.now()
        };
        return t.isOk() && t.value && (o.acceleration = {
          x: t.value.x,
          y: t.value.y,
          z: t.value.z
        }), i.isOk() && i.value && (o.gyroscope = {
          x: i.value.x,
          y: i.value.y,
          z: i.value.z
        }), o;
      } catch (t) {
        return console.error("[IMUFusionManager] Error getting combined IMU reading:", t), null;
      }
    }
  }
  class Mb {
    constructor(t, i, o = 100) {
      __publicField(this, "kalmanFilter");
      __publicField(this, "imuManager");
      __publicField(this, "callback", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "lastOutputTime", 0);
      __publicField(this, "lastOutputAccuracy", 0);
      __publicField(this, "debugEnabled", false);
      this.kalmanFilter = new Db(i), this.imuManager = new Hb(o), this.callback = t;
    }
    async initialize(t) {
      try {
        (await this.imuManager.initialize()).isErr() && console.warn("[LocationProcessor] IMU not available, using GPS-only mode");
        try {
          await this.kalmanFilter.initialize(t), this.isInitialized = true;
        } catch (o) {
          return C(new De("Failed to initialize Kalman filter", "UPDATE_SERVICE_ERROR", o));
        }
        return W(void 0);
      } catch (i) {
        return C(new De("Failed to initialize location processor", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async startGPS() {
      try {
        return await this.imuManager.isAvailable() && (await this.imuManager.startListening((o) => this.processIMUReading(o))).isErr() && console.warn("[LocationProcessor] Failed to start IMU, using GPS-only"), this.isInitialized = true, console.info("[LocationProcessor] Started location processing"), W(void 0);
      } catch (t) {
        return C(new De("Failed to start GPS processing", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async stopGPS() {
      try {
        const t = await this.imuManager.stopListening();
        return t.isErr() && console.warn("[LocationProcessor] Failed to stop IMU:", t.error), this.isInitialized = false, console.info("[LocationProcessor] Stopped location processing"), W(void 0);
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
        if (!this.kalmanFilter.isFilterInitialized()) {
          await this.kalmanFilter.initialize(t), this.lastOutputAccuracy = t.accuracy;
          const n = await this.kalmanFilter.getFilteredPosition(), s = new Ei(n.latitude, n.longitude, t.accuracy);
          this.notifyCallback(s);
          return;
        }
        await this.kalmanFilter.updateGPS(t), this.lastOutputAccuracy = t.accuracy;
        const i = await this.kalmanFilter.getFilteredPosition(), o = new Ei(i.latitude, i.longitude, t.accuracy);
        this.notifyCallback(o);
      } catch (i) {
        console.error("[LocationProcessor] Error processing GPS location:", i);
      }
    }
    processIMUReading(t) {
      if (!this.isInitialized || !this.kalmanFilter.isFilterInitialized()) {
        this.isInitialized && !this.kalmanFilter.isFilterInitialized() && console.log("[LocationProcessor] Kalman filter not yet initialized, buffering IMU reading");
        return;
      }
      try {
        this.debugEnabled && console.log("[LocationProcessor] Processing IMU reading:", {
          timestamp: t.timestamp,
          acceleration: t.acceleration
        }), this.kalmanFilter.updateIMU(t), this.outputPredictedPosition();
      } catch (i) {
        console.error("[LocationProcessor] Error processing IMU reading:", i);
      }
    }
    async outputPredictedPosition() {
      const t = performance.now();
      if (!(t - this.lastOutputTime < 50)) {
        this.lastOutputTime = t;
        try {
          const i = await this.kalmanFilter.getFilteredPosition(), o = new Ei(i.latitude, i.longitude, this.lastOutputAccuracy || 10);
          this.notifyCallback(o);
        } catch (i) {
          console.error("[LocationProcessor] Error outputting predicted position:", i);
        }
      }
    }
    async getCurrentFilteredPosition() {
      if (!this.kalmanFilter.isFilterInitialized()) return C(new De("Kalman filter not initialized", "UPDATE_SERVICE_ERROR"));
      try {
        const t = await this.kalmanFilter.getFilteredPosition(), i = new Ei(t.latitude, t.longitude, this.lastOutputAccuracy || 10);
        return W(i);
      } catch (t) {
        return C(new De("Failed to get filtered position", "UPDATE_SERVICE_ERROR", t));
      }
    }
    getLastKalmanGain() {
      return this.kalmanFilter.getLastKalmanGain();
    }
    getKalmanState() {
      return this.kalmanFilter.getState();
    }
    isProcessorInitialized() {
      return this.isInitialized;
    }
    notifyCallback(t) {
      if (this.callback) try {
        this.callback(t, "kalman");
      } catch (i) {
        console.error("[LocationProcessor] Callback error:", i);
      }
    }
  }
  class Pb {
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
      if (this.isInitialized) return W(void 0);
      try {
        const t = Hr();
        if (t.isErr()) return C(new De("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const i = t.value.getGeolocationProvider();
        if (!i) return C(new De("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = i;
        const o = await this.provider.getCurrentPosition();
        if (o.isErr()) return C(new De("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", o.error));
        this.processor = new Mb((s, l) => this.handleLocationUpdate(s), {
          initialAccelerationUncertainty: this.config.sigmaAcceleration,
          initialPositionUncertainty: this.config.initialPositionUncertainty,
          initialVelocityUncertainty: this.config.initialVelocityUncertainty,
          gpsSpeedUncertainty: this.config.gpsSpeedUncertainty,
          debugEnabled: this.config.debugEnabled
        }, this.config.imuUpdateInterval);
        const n = await this.processor.initialize({
          latitude: o.value.coords.latitude,
          longitude: o.value.coords.longitude,
          accuracy: o.value.coords.accuracy,
          timestamp: performance.now(),
          speed: o.value.coords.speed ?? void 0,
          heading: o.value.coords.heading ?? void 0
        });
        return n.isErr() ? n : (this.isInitialized = true, W(void 0));
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
        const i = await this.provider.watchPosition((n) => {
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
        if (i.isErr()) return C(new De("Failed to start watching position", "UPDATE_SERVICE_ERROR", i.error));
        this.watchId = i.value;
        const o = await this.processor.startGPS();
        return o.isErr() ? (this.watchId !== null && this.provider && this.provider.clearWatch(this.watchId), o) : (console.info("[KalmanBackend] Started Kalman-filtered location watching"), W(void 0));
      } catch (i) {
        return C(new De("Exception during start watching", "UPDATE_SERVICE_ERROR", i));
      }
    }
    async stopWatching() {
      if (!this.provider || !this.processor) return W(void 0);
      try {
        const t = await this.processor.stopGPS();
        if (t.isErr() && console.warn("[KalmanBackend] Failed to stop processor cleanly:", t.error), this.watchId !== null) {
          const i = this.provider.clearWatch(this.watchId);
          i.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", i.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), W(void 0);
      } catch (t) {
        return C(new De("Exception during stop watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      if (!this.provider || !this.processor) return C(new De("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        const t = await this.provider.getCurrentPosition();
        if (t.isErr()) return C(new De("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
        const i = t.value, o = {
          latitude: i.coords.latitude,
          longitude: i.coords.longitude,
          accuracy: i.coords.accuracy,
          timestamp: performance.now(),
          speed: i.coords.speed ?? void 0,
          heading: i.coords.heading ?? void 0
        };
        return await this.processor.processGPSLocation(o), await this.processor.getCurrentFilteredPosition();
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
      } catch (i) {
        console.error("[KalmanBackend] User callback error:", i);
      }
    }
  }
  yi = (_b2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [], i = Ft("geolocationBackend"), o = i === "auto" ? sI() : i === "kalman", n = i === "auto" || i === "gps", s = i === "auto" || i === "ip";
      if (o) {
        const l = mc(), h = l > 0 ? Math.floor(1e3 / l) : 50;
        t.push(new Pb({
          imuUpdateInterval: h,
          sigmaAcceleration: 1,
          initialPositionUncertainty: 20,
          initialVelocityUncertainty: 4,
          gpsSpeedUncertainty: 2,
          debugEnabled: false
        }));
      }
      n && t.push(new db()), s && t.push(new pb()), console.info(`[GeolocationManager] Initializing with backend preference: ${i}, strategies: ${t.map((l) => l.name).join(", ")}`), this.backendManager = new ub(t), this.stateManager = new fb();
    }
    static async getInstance() {
      if (yi.instance || (yi.instance = new yi()), !yi.instance.isInitialized) {
        const t = await yi.instance.initialize();
        if (t.isErr()) return C(t.error);
      }
      return W(yi.instance);
    }
    static getExistingInstance() {
      if (!yi.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return yi.instance;
    }
    static reset() {
      yi.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), W(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((o, n) => {
          this.notifyCallbacks(o);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), C(new $i("No geolocation backend available", "no_backend_available", t.error));
        const i = await this.backendManager.getCurrentPosition();
        return i.isOk() ? (this.stateManager.updateLocation(i.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), W(void 0)) : C(new $i("Backend selected fail to obtain geolocation", "backend_error", i.error));
      } catch (t) {
        const i = zr(t, "Failed to initialize geolocation manager");
        return xo(i, "GeolocationManager.initialize"), C(new $i("Exception during initialization", "initialization_failed", i));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new $i("Geolocation manager not initialized", "not_initialized");
        return xo(t, "GeolocationManager.getCurrentLocation"), C(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const i = zr(t, "Failed to get current location");
        return xo(i, "GeolocationManager.getCurrentLocation"), C(new $i("Failed to get current location", "get_location_failed", i));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const i = new $i("Geolocation manager not initialized", "not_initialized");
        return xo(i, "GeolocationManager.startLocationUpdates"), C(i);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const i = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(i, t);
        const o = await this.backendManager.startWatching((n, s) => {
          this.stateManager.updateLocation(n, s), this.notifyCallbacks(n);
        });
        return o.isErr() ? (this.locationUpdateCallbacks.delete(i), C(o.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${i}`), W(i));
      } catch (i) {
        const o = zr(i, "Failed to start location updates");
        return xo(o, "GeolocationManager.startLocationUpdates"), C(new $i("Failed to start location updates", "start_updates_failed", o));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const i = new $i("Geolocation manager not initialized", "not_initialized");
        return xo(i, "GeolocationManager.stopLocationUpdates"), C(i);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const i = await this.backendManager.stopWatching();
          if (i.isErr()) return C(i.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), W(void 0);
      } catch (i) {
        const o = zr(i, "Failed to stop location updates");
        return xo(o, "GeolocationManager.stopLocationUpdates"), C(new $i("Failed to stop location updates", "stop_updates_failed", o));
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
      return t || (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new Ei(0, 0));
    }
    addLocationListener(t) {
      const i = this.nextCallbackId++;
      return this.locationUpdateCallbacks.set(i, t), i;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    getLastKalmanGain() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const i = this.backendManager.strategies.find((o) => o.name === "kalman");
        if (i && "getLastKalmanGain" in i) return i.getLastKalmanGain();
      }
      return null;
    }
    getKalmanState() {
      if (this.backendManager.getActiveBackend() === "kalman") {
        const i = this.backendManager.strategies.find((o) => o.name === "kalman");
        if (i && "getKalmanState" in i) return i.getKalmanState();
      }
      return null;
    }
    applyGeolocationCorrection(t) {
      return Ft("geolocationCorrection") ? Fp(t) : t;
    }
    notifyCallbacks(t) {
      const i = this.applyGeolocationCorrection(t), o = ff(i);
      for (const n of this.locationUpdateCallbacks.values()) try {
        n(o);
      } catch (s) {
        console.error("[GeolocationManager] Callback error:", s);
      }
    }
    async refreshBackend() {
      return W(void 0);
    }
  }, __publicField(_b2, "instance", null), _b2);
  let _p;
  const ya = (e) => _p = e, Up = /* @__PURE__ */ Symbol();
  function Uc(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Er;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Er || (Er = {}));
  function kp() {
    const e = hd(true), t = e.run(() => Jt({}));
    let i = [], o = [];
    const n = ul({
      install(s) {
        ya(n), n._a = s, s.provide(Up, n), s.config.globalProperties.$pinia = n, o.forEach((l) => i.push(l)), o = [];
      },
      use(s) {
        return this._a ? i.push(s) : o.push(s), this;
      },
      _p: i,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return n;
  }
  const Wp = () => {
  };
  function kh(e, t, i, o = Wp) {
    e.add(t);
    const n = () => {
      e.delete(t) && o();
    };
    return !i && fd() && FS(n), n;
  }
  function pn(e, ...t) {
    e.forEach((i) => {
      i(...t);
    });
  }
  const Fb = (e) => e(), Wh = /* @__PURE__ */ Symbol(), nc = /* @__PURE__ */ Symbol();
  function kc(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((i, o) => e.set(o, i)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const i in t) {
      if (!t.hasOwnProperty(i)) continue;
      const o = t[i], n = e[i];
      Uc(n) && Uc(o) && e.hasOwnProperty(i) && !dt(o) && !oo(o) ? e[i] = kc(n, o) : e[i] = o;
    }
    return e;
  }
  const _b = /* @__PURE__ */ Symbol();
  function Ub(e) {
    return !Uc(e) || !Object.prototype.hasOwnProperty.call(e, _b);
  }
  const { assign: Oo } = Object;
  function kb(e) {
    return !!(dt(e) && e.effect);
  }
  function Wb(e, t, i, o) {
    const { state: n, actions: s, getters: l } = t, h = i.state.value[e];
    let d;
    function m() {
      h || (i.state.value[e] = n ? n() : {});
      const p = aA(i.state.value[e]);
      return Oo(p, s, Object.keys(l || {}).reduce((I, N) => (I[N] = ul(Ol(() => {
        ya(i);
        const S = i._s.get(e);
        return l[N].call(S, S);
      })), I), {}));
    }
    return d = Gp(e, m, t, i, o, true), d;
  }
  function Gp(e, t, i = {}, o, n, s) {
    let l;
    const h = Oo({
      actions: {}
    }, i), d = {
      deep: true
    };
    let m, p, I = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set(), S;
    const M = o.state.value[e];
    !s && !M && (o.state.value[e] = {}), Jt({});
    let D;
    function ie(de) {
      let ne;
      m = p = false, typeof de == "function" ? (de(o.state.value[e]), ne = {
        type: Er.patchFunction,
        storeId: e,
        events: S
      }) : (kc(o.state.value[e], de), ne = {
        type: Er.patchObject,
        payload: de,
        storeId: e,
        events: S
      });
      const Te = D = /* @__PURE__ */ Symbol();
      Dd().then(() => {
        D === Te && (m = true);
      }), p = true, pn(I, ne, o.state.value[e]);
    }
    const Q = s ? function() {
      const { state: ne } = i, Te = ne ? ne() : {};
      this.$patch((Ce) => {
        Oo(Ce, Te);
      });
    } : Wp;
    function Y() {
      l.stop(), I.clear(), N.clear(), o._s.delete(e);
    }
    const G = (de, ne = "") => {
      if (Wh in de) return de[nc] = ne, de;
      const Te = function() {
        ya(o);
        const Ce = Array.from(arguments), pe = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Set();
        function Ot(Me) {
          pe.add(Me);
        }
        function oi(Me) {
          xe.add(Me);
        }
        pn(N, {
          args: Ce,
          name: Te[nc],
          store: re,
          after: Ot,
          onError: oi
        });
        let Xe;
        try {
          Xe = de.apply(this && this.$id === e ? this : re, Ce);
        } catch (Me) {
          throw pn(xe, Me), Me;
        }
        return Xe instanceof Promise ? Xe.then((Me) => (pn(pe, Me), Me)).catch((Me) => (pn(xe, Me), Promise.reject(Me))) : (pn(pe, Xe), Xe);
      };
      return Te[Wh] = true, Te[nc] = ne, Te;
    }, _ = {
      _p: o,
      $id: e,
      $onAction: kh.bind(null, N),
      $patch: ie,
      $reset: Q,
      $subscribe(de, ne = {}) {
        const Te = kh(I, de, ne.detached, () => Ce()), Ce = l.run(() => yn(() => o.state.value[e], (pe) => {
          (ne.flush === "sync" ? p : m) && de({
            storeId: e,
            type: Er.direct,
            events: S
          }, pe);
        }, Oo({}, d, ne)));
        return Te;
      },
      $dispose: Y
    }, re = fa(_);
    o._s.set(e, re);
    const se = (o._a && o._a.runWithContext || Fb)(() => o._e.run(() => (l = hd()).run(() => t({
      action: G
    }))));
    for (const de in se) {
      const ne = se[de];
      if (dt(ne) && !kb(ne) || oo(ne)) s || (M && Ub(ne) && (dt(ne) ? ne.value = M[de] : kc(ne, M[de])), o.state.value[e][de] = ne);
      else if (typeof ne == "function") {
        const Te = G(ne, de);
        se[de] = Te, h.actions[de] = ne;
      }
    }
    return Oo(re, se), Oo(ke(re), se), Object.defineProperty(re, "$state", {
      get: () => o.state.value[e],
      set: (de) => {
        ie((ne) => {
          Oo(ne, de);
        });
      }
    }), o._p.forEach((de) => {
      Oo(re, l.run(() => de({
        store: re,
        app: o._a,
        pinia: o,
        options: h
      })));
    }), M && s && i.hydrate && i.hydrate(re.$state, M), m = true, p = true, re;
  }
  Gv = function(e, t, i) {
    let o;
    const n = typeof t == "function";
    o = n ? i : t;
    function s(l, h) {
      const d = EA();
      return l = l || (d ? fr(Up, null) : null), l && ya(l), l = _p, l._s.has(e) || (n ? Gp(e, t, o, l) : Wb(e, o, l)), l._s.get(e);
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
    }
  ];
  let Gh, Wc, Bb, jb, rs, xb, Yb, zb, $b, Vb, Zb, qb, Kb, Jb, Xb, Qb, ev, tv, iv, ov, nv, rv, av, wl;
  Gh = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Np((await oc(async () => {
          const { default: i } = await import("./App-BS4kvb_O.js");
          return {
            default: i
          };
        }, __vite__mapDeps([0,1,2,3,4]), import.meta.url)).default);
        e.use(kp()), e.use((await oc(async () => {
          const { default: i } = await import("./index-CIa5HXjm.js");
          return {
            default: i
          };
        }, __vite__mapDeps([5,2,1,6]), import.meta.url)).default), e.use((await oc(async () => {
          const { i18n: i } = await import("./index-BlGNN0Kx.js");
          return {
            i18n: i
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
        await Qf();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = du();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const t = async (d, m) => wI() ? false : window.permissionConfirm ? window.permissionConfirm(m) : false, i = await So.init({
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
          if (i.isErr()) throw i.error;
          const o = i.value, n = o.getStorage();
          if (n.isErr()) throw n.error;
          const s = await n.value.init();
          if (s.isErr()) throw s.error;
          const l = o.getDeviceOrientation();
          if (l.isOk()) {
            const d = l.value;
            (await d.init()).isErr() ? console.warn("[Platform] DeviceOrientation not supported on this platform") : await d.start();
          }
          const h = o.getIMU();
          if (h.isOk()) {
            const d = h.value;
            (await d.init()).isErr() ? console.warn("[Platform] IMU not supported on this platform") : (await d.startAcceleration({
              frequency: mc(),
              normalizeToENU: true
            }), await d.startGyroscope({
              frequency: mc(),
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
          e = du();
        } catch {
        }
        try {
          if (!Hr()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const i = await yi.getInstance();
          if (i.isErr()) throw i.error;
          const o = i.value;
          e && console.timeEnd("Geolocation service initialise"), e && console.time("Geolocation service start"), await o.startLocationUpdates(() => {
          }), e && console.timeEnd("Geolocation service start"), window.GeolocationManager = o, console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
        } catch (t) {
          return console.error("[Geolocation] Failed to initialize geolocation service:", t), Promise.reject(t instanceof Error ? t : new Error(String(t)));
        }
      },
      dependencies: [
        "platform-services"
      ]
    }
  ];
  Bv = lb;
  jv = Gb;
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
  jb = Bb();
  rs = (e) => Wc[jb][e] || Wc.en[e] || e;
  xb = {
    class: "splash-container"
  };
  Yb = {
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
  Zb = {
    class: "progress-text"
  };
  qb = {
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
  ev = {
    key: 1
  };
  tv = {
    key: 2,
    class: "timeout-section"
  };
  iv = {
    key: 3,
    class: "permission-section"
  };
  ov = {
    class: "permission-message"
  };
  nv = {
    class: "permission-buttons"
  };
  rv = NA({
    __name: "SplashScreen",
    setup(e) {
      const t = Jt(0), i = Jt(""), o = Jt(""), n = Jt(0), s = Jt(0), l = Jt(false), h = Jt(false), d = Jt(""), m = Jt(false), p = Jt("");
      let I = null;
      const N = Jt("light"), S = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? N.value = "dark" : N.value = "light";
        } catch {
          N.value = "light";
        }
      }, M = () => {
        N.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", N.value);
      }, D = Ol(() => Math.round(t.value / 100 * 100)), ie = {
        info: (...ge) => {
          const se = ge.join(" ");
          console.info(se), i.value = String(se);
        },
        warn: (...ge) => {
          const se = ge.join(" ");
          console.warn(se), i.value = String(se);
        },
        error: (...ge) => {
          const se = ge.join(" ");
          console.error(se), i.value = String(se), d.value = String(se);
        },
        debug: (...ge) => {
          console.debug(...ge);
        }
      }, Q = {
        onModuleStart: (ge) => {
          o.value = ge, i.value = `Loading ${ge}...`;
        },
        onModuleComplete: (ge) => {
          s.value++, t.value = Math.min(100, s.value / n.value * 100), i.value = `Loaded ${ge}`;
        },
        onModuleError: (ge, se) => {
          i.value = `Failed to load ${ge}`, d.value = se.message;
        },
        onOverallProgress: (ge, se) => {
          n.value = se, s.value = ge, t.value = Math.min(100, ge / se * 100);
        }
      }, Y = () => {
        window.location.reload();
      }, G = (ge) => (p.value = rs(ge), m.value = true, new Promise((se) => {
        I = (de) => {
          m.value = false, se(de);
        };
      })), _ = () => {
        I == null ? void 0 : I(true);
      }, re = () => {
        I == null ? void 0 : I(false);
      };
      return window.permissionConfirm = G, Fr(() => {
        var _a3;
        S(), M(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (se, de = /* @__PURE__ */ new Set()) => {
          if (de.has(se)) return 0;
          de.add(se);
          const ne = Gh.find((Ce) => Ce.name === se);
          if (!ne) return 0;
          let Te = 1;
          if (ne.dependencies) for (const Ce of ne.dependencies) Te += ge(Ce, de);
          return Te;
        };
        n.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), bp(Gh, "trackmaker", 3e4, {
          logger: ie,
          progressReporter: Q,
          printLog: true
        }).then(() => {
          i.value = "All modules loaded successfully", o.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((se) => {
          const de = String(se.toString());
          if (de.toLowerCase().includes("timeout")) {
            const ne = de.split("Trackback").map((Te) => Te.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(ne.map((Te) => ({
              Trackback: Te
            })), [
              "Trackback"
            ]), h.value = true;
          } else d.value = de, l.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(se);
        });
      }), (ge, se) => (Ti(), zi("div", xb, [
        Ye("div", Yb, [
          se[8] || (se[8] = Ye("div", {
            class: "logo-section"
          }, [
            Ye("div", {
              class: "app-logo"
            }, [
              Ye("img", {
                src: nb,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            Ye("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !l.value && !h.value ? (Ti(), zi("div", zb, [
            Ye("div", $b, [
              Ye("div", Vb, [
                Ye("div", {
                  class: "progress-fill",
                  style: la({
                    width: `${D.value}%`
                  })
                }, null, 4)
              ]),
              Ye("div", Zb, Vi(D.value) + "% ", 1)
            ]),
            Ye("div", qb, [
              Ye("p", Kb, " Loading: " + Vi(o.value), 1)
            ]),
            se[0] || (se[0] = Ye("div", {
              class: "loading-animation"
            }, [
              Ye("div", {
                class: "spinner"
              })
            ], -1))
          ])) : is("", true),
          l.value ? (Ti(), zi("div", Jb, [
            se[1] || (se[1] = Ye("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            se[2] || (se[2] = Ye("h2", null, "Loading Error", -1)),
            Ye("div", Xb, [
              (Ti(true), zi(Ht, null, kA((d.value ?? "").split(`
`), (de) => (Ti(), zi("div", {
                key: de,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                de.toLocaleLowerCase().includes("trackback") ? (Ti(), zi("strong", Qb, Vi(de), 1)) : (Ti(), zi("span", ev, Vi(de), 1))
              ]))), 128))
            ]),
            Ye("button", {
              class: "retry-button",
              onClick: Y
            }, " Retry ")
          ])) : is("", true),
          h.value ? (Ti(), zi("div", tv, [
            se[3] || (se[3] = Ye("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            se[4] || (se[4] = Ye("h2", null, "Connection Timeout", -1)),
            se[5] || (se[5] = Ye("p", null, "Unable to load required modules within the timeout period.", -1)),
            se[6] || (se[6] = Ye("p", null, "Please check your internet connection and try again.", -1)),
            Ye("button", {
              class: "retry-button",
              onClick: Y
            }, " Retry ")
          ])) : is("", true),
          m.value ? (Ti(), zi("div", iv, [
            se[7] || (se[7] = Ye("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            Ye("h2", null, Vi(Rn(rs)("permission.title")), 1),
            Ye("p", ov, Vi(p.value), 1),
            Ye("div", nv, [
              Ye("button", {
                class: "permission-button deny",
                onClick: re
              }, Vi(Rn(rs)("permission.deny")), 1),
              Ye("button", {
                class: "permission-button allow",
                onClick: _
              }, Vi(Rn(rs)("permission.allow")), 1)
            ])
          ])) : is("", true)
        ])
      ]));
    }
  });
  sv = (e, t) => {
    const i = e.__vccOpts || e;
    for (const [o, n] of t) i[o] = n;
    return i;
  };
  av = sv(rv, [
    [
      "__scopeId",
      "data-v-d9d60867"
    ]
  ]);
  wl = Np(av);
  wl.use(kp());
  wl.mount("#splash");
  window.splashScreen = wl;
})();
export {
  Hr as $,
  _v as A,
  yn as B,
  Pv as C,
  Dc as D,
  vv as E,
  Ht as F,
  fI as G,
  Ks as H,
  Wi as I,
  Mv as J,
  bv as K,
  ko as L,
  vA as M,
  LA as N,
  Fv as O,
  Dd as P,
  yv as Q,
  Mt as R,
  co as S,
  Av as T,
  aA as U,
  la as V,
  Uv as W,
  dt as X,
  ul as Y,
  iA as Z,
  sv as _,
  __tla,
  Ye as a,
  EA as a$,
  xo as a0,
  zr as a1,
  Dv as a2,
  Hv as a3,
  en as a4,
  Nv as a5,
  Cv as a6,
  kA as a7,
  kv as a8,
  Iv as a9,
  Qm as aA,
  ig as aB,
  ng as aC,
  Xm as aD,
  Kh as aE,
  Xh as aF,
  xg as aG,
  Bn as aH,
  cu as aI,
  jT as aJ,
  Ki as aK,
  tf as aL,
  jn as aM,
  Gg as aN,
  Zg as aO,
  Jh as aP,
  ug as aQ,
  FT as aR,
  iE as aS,
  AT as aT,
  qh as aU,
  yE as aV,
  tA as aW,
  _n as aX,
  Ia as aY,
  fd as aZ,
  FS as a_,
  Wv as aa,
  Fa as ab,
  Zo as ac,
  ft as ad,
  Tv as ae,
  ff as af,
  qs as ag,
  ke as ah,
  Lv as ai,
  gv as aj,
  fv as ak,
  mv as al,
  pv as am,
  uv as an,
  dv as ao,
  hv as ap,
  Bv as aq,
  jv as ar,
  lv as as,
  yi as at,
  oc as au,
  wI as av,
  Fo as aw,
  Po as ax,
  Cn as ay,
  Zl as az,
  Jt as b,
  Rv as b0,
  no as b1,
  cv as b2,
  Ga as b3,
  Ic as b4,
  Gn as b5,
  Dr as b6,
  W as b7,
  C as b8,
  As as b9,
  Zi as ba,
  qr as bb,
  Rc as bc,
  Ov as bd,
  Ev as be,
  zi as c,
  NA as d,
  DA as e,
  pl as f,
  fa as g,
  yN as h,
  fr as i,
  Ol as j,
  Fr as k,
  ml as l,
  pN as m,
  nl as n,
  Ti as o,
  TA as p,
  Gv as q,
  Ac as r,
  is as s,
  wv as t,
  jt as u,
  Rn as v,
  Sv as w,
  gA as x,
  dN as y,
  Vi as z
};
