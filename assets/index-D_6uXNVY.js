const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-BmEGD631.js","./sketch-store-s--rUA9G.js","./vue-i18n-43V9uPuC.js","./index-C2LOrOV4.js","./App-BkoMreV2.css","./index-kO1JytUv.js","./index-DnlHAfHQ.css"])))=>i.map(i=>d[i]);
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
let Xs, Hv, yn, Cv, Cc, Sv, Dt, hI, qs, Wo, Lv, yv, ki, bA, vA, Dv, Cd, Iv, Ht, ci, Rv, sA, ca, Mv, ft, ul, tA, ov, je, TA, Yi, xr, bv, vv, en, wv, Nv, UA, Pv, mv, Xm, tg, ig, Jm, qh, Jh, jg, Bn, cu, BT, Ko, ef, jn, Wg, Vg, Kh, lg, PT, tE, ST, Zh, wE, eA, _n, Ea, hd, PS, Fv, Pa, Zi, ht, dv, hf, Zs, Ue, Av, fv, cv, hv, uv, sv, lv, av, Uv, kv, rv, wo, oc, RI, Fi, Pi, Cn, Zl, Kt, Tv, ni, nv, Wa, Ec, Gn, Dr, B, C, Ss, Zo, Zr, Oc, gv, pv, ud, zo, AA, CA, pl, ha, wN, fr, Ol, Pr, ml, dN, nl, To, gA, _v, Sc, ts, Ev, Bt, Rn, Ov, mA, fN, Vo;
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
  const qp = {
    withStackTrace: false
  }, Gh = (e, t, o = qp) => {
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
  function Bi(e, t, o, i) {
    function n(s) {
      return s instanceof o ? s : new o(function(l) {
        l(s);
      });
    }
    return new (o || (o = Promise))(function(s, l) {
      function h(m) {
        try {
          g(i.next(m));
        } catch (R) {
          l(R);
        }
      }
      function d(m) {
        try {
          g(i.throw(m));
        } catch (R) {
          l(R);
        }
      }
      function g(m) {
        m.done ? s(m.value) : n(m.value).then(h, d);
      }
      g((i = i.apply(e, [])).next());
    });
  }
  function Nl(e) {
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
  function Fo(e) {
    return this instanceof Fo ? (this.v = e, this) : new Fo(e);
  }
  function bl(e, t, o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = o.apply(e, t || []), n, s = [];
    return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", l), n[Symbol.asyncIterator] = function() {
      return this;
    }, n;
    function l(A) {
      return function(M) {
        return Promise.resolve(M).then(A, R);
      };
    }
    function h(A, M) {
      i[A] && (n[A] = function(D) {
        return new Promise(function(ne, ee) {
          s.push([
            A,
            D,
            ne,
            ee
          ]) > 1 || d(A, D);
        });
      }, M && (n[A] = M(n[A])));
    }
    function d(A, M) {
      try {
        g(i[A](M));
      } catch (D) {
        N(s[0][3], D);
      }
    }
    function g(A) {
      A.value instanceof Fo ? Promise.resolve(A.value.v).then(m, R) : N(s[0][2], A);
    }
    function m(A) {
      d("next", A);
    }
    function R(A) {
      d("throw", A);
    }
    function N(A, M) {
      A(M), s.shift(), s.length && d(s[0][0], s[0][1]);
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
          value: Fo(e[n](l)),
          done: false
        } : s ? s(l) : l;
      } : s;
    }
  }
  function Jp(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], o;
    return t ? t.call(e) : (e = typeof Nl == "function" ? Nl(e) : e[Symbol.iterator](), o = {}, i("next"), i("throw"), i("return"), o[Symbol.asyncIterator] = function() {
      return this;
    }, o);
    function i(s) {
      o[s] = e[s] && function(l) {
        return new Promise(function(h, d) {
          l = e[s](l), n(h, d, l.done, l.value);
        });
      };
    }
    function n(s, l, h, d) {
      Promise.resolve(d).then(function(g) {
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
      return (...i) => new Ut(Bi(this, void 0, void 0, function* () {
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
      return new Ut(this._promise.then((o) => Bi(this, void 0, void 0, function* () {
        return o.isErr() ? new Ro(o.error) : new Do(yield t(o.value));
      })));
    }
    andThrough(t) {
      return new Ut(this._promise.then((o) => Bi(this, void 0, void 0, function* () {
        if (o.isErr()) return new Ro(o.error);
        const i = yield t(o.value);
        return i.isErr() ? new Ro(i.error) : new Do(o.value);
      })));
    }
    andTee(t) {
      return new Ut(this._promise.then((o) => Bi(this, void 0, void 0, function* () {
        if (o.isErr()) return new Ro(o.error);
        try {
          yield t(o.value);
        } catch {
        }
        return new Do(o.value);
      })));
    }
    orTee(t) {
      return new Ut(this._promise.then((o) => Bi(this, void 0, void 0, function* () {
        if (o.isOk()) return new Do(o.value);
        try {
          yield t(o.error);
        } catch {
        }
        return new Ro(o.error);
      })));
    }
    mapErr(t) {
      return new Ut(this._promise.then((o) => Bi(this, void 0, void 0, function* () {
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
      return new Ut(this._promise.then((o) => Bi(this, void 0, void 0, function* () {
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
        return yield Fo(yield Fo(yield* Kp(Jp(yield Fo(this._promise.then((o) => o.safeUnwrap()))))));
      });
    }
    then(t, o) {
      return this._promise.then(t, o);
    }
    [Symbol.asyncIterator]() {
      return bl(this, arguments, function* () {
        const o = yield Fo(this._promise);
        return o.isErr() && (yield yield Fo(rs(o.error))), yield Fo(o.value);
      });
    }
  }
  function rs(e) {
    return new Ut(Promise.resolve(new Ro(e)));
  }
  const Bh = (e) => {
    let t = B([]);
    for (const o of e) if (o.isErr()) {
      t = C(o.error);
      break;
    } else t.map((i) => i.push(o.value));
    return t;
  }, Xp = (e) => Ut.fromSafePromise(Promise.all(e)).andThen(Bh), jh = (e) => {
    let t = B([]);
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
          return B(h);
        } catch (h) {
          return C(s ? s(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function o(n) {
      return Bh(n);
    }
    e.combine = o;
    function i(n) {
      return jh(n);
    }
    e.combineWithAllErrors = i;
  })(nc || (nc = {}));
  B = function(e) {
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
      return B(t(this.value));
    }
    mapErr(t) {
      return B(this.value);
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
      return B(this.value);
    }
    orTee(t) {
      return B(this.value);
    }
    orElse(t) {
      return B(this.value);
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
      throw Gh("Called `_unsafeUnwrapErr` on an Ok", this, t);
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
      return rs(this.error);
    }
    asyncAndThrough(t) {
      return rs(this.error);
    }
    asyncMap(t) {
      return rs(this.error);
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
      throw Gh("Called `_unsafeUnwrap` on an Err", this, t);
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
  var em = "2.0.8", tm = 500, vl = "user-agent", Nn = "", Ll = "?", Et = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Qt = "browser", ti = "cpu", Uo = "device", So = "engine", ao = "os", bn = "result", j = "name", U = "type", z = "vendor", $ = "version", $t = "architecture", Ir = "major", G = "model", ss = "console", Le = "mobile", Ze = "tablet", Ot = "smarttv", Ho = "wearable", Gr = "xr", tr = "embedded", ln = "inapp", Wc = "brands", Ji = "formFactors", Gc = "fullVersionList", vn = "platform", Bc = "platformVersion", $s = "bitness", Mi = "sec-ch-ua", om = Mi + "-full-version-list", im = Mi + "-arch", nm = Mi + "-" + $s, rm = Mi + "-form-factors", sm = Mi + "-" + Le, am = Mi + "-" + G, Yh = Mi + "-" + vn, cm = Yh + "-version", xh = [
    Wc,
    Gc,
    Le,
    G,
    vn,
    Bc,
    $t,
    Ji,
    $s
  ], Br = "Amazon", un = "Apple", Cl = "ASUS", Dl = "BlackBerry", ji = "Google", Hl = "Huawei", Sa = "Lenovo", Ml = "Honor", jr = "LG", Aa = "Microsoft", Na = "Motorola", Pl = "Nvidia", Fl = "OnePlus", ba = "OPPO", $n = "Samsung", _l = "Sharp", Vn = "Sony", va = "Xiaomi", La = "Zebra", Ul = "Chrome", kl = "Chromium", di = "Chromecast", as = "Edge", Zn = "Firefox", hn = "Opera", Ca = "Facebook", Wl = "Sogou", fn = "Mobile ", qn = " Browser", rc = "Windows", lm = typeof window !== Et.UNDEFINED, Jt = lm && window.navigator ? window.navigator : void 0, Xi = Jt && Jt.userAgentData ? Jt.userAgentData : void 0, um = function(e, t) {
    var o = {}, i = t;
    if (!gs(t)) {
      i = {};
      for (var n in t) for (var s in t[n]) i[s] = t[n][s].concat(i[s] ? i[s] : []);
    }
    for (var l in e) o[l] = i[l] && i[l].length % 2 === 0 ? i[l].concat(e[l]) : e[l];
    return o;
  }, Vs = function(e) {
    for (var t = {}, o = 0; o < e.length; o++) t[e[o].toUpperCase()] = e[o];
    return t;
  }, sc = function(e, t) {
    if (typeof e === Et.OBJECT && e.length > 0) {
      for (var o in e) if (Ni(t) == Ni(e[o])) return true;
      return false;
    }
    return Cr(e) ? Ni(t) == Ni(e) : false;
  }, gs = function(e, t) {
    for (var o in e) return /^(browser|cpu|device|engine|os)$/.test(o) || (t ? gs(e[o]) : false);
  }, Cr = function(e) {
    return typeof e === Et.STRING;
  }, Da = function(e) {
    if (e) {
      for (var t = [], o = Ln(/\\?\"/g, e).split(","), i = 0; i < o.length; i++) if (o[i].indexOf(";") > -1) {
        var n = Ts(o[i]).split(";v=");
        t[i] = {
          brand: n[0],
          version: n[1]
        };
      } else t[i] = Ts(o[i]);
      return t;
    }
  }, Ni = function(e) {
    return Cr(e) ? e.toLowerCase() : e;
  }, ac = function(e) {
    return Cr(e) ? Ln(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, ei = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var o = e[t];
      typeof o == Et.OBJECT && o.length == 2 ? this[o[0]] = o[1] : this[o] = void 0;
    }
    return this;
  }, Ln = function(e, t) {
    return Cr(t) ? t.replace(e, Nn) : t;
  }, Kn = function(e) {
    return Ln(/\\?\"/g, e);
  }, Ts = function(e, t) {
    return e = Ln(/^\s\s*/, String(e)), typeof t === Et.UNDEFINED ? e : e.substring(0, t);
  }, cc = function(e, t) {
    if (!(!e || !t)) for (var o = 0, i, n, s, l, h, d; o < t.length && !h; ) {
      var g = t[o], m = t[o + 1];
      for (i = n = 0; i < g.length && !h && g[i]; ) if (h = g[i++].exec(e), h) for (s = 0; s < m.length; s++) d = h[++n], l = m[s], typeof l === Et.OBJECT && l.length > 0 ? l.length === 2 ? typeof l[1] == Et.FUNCTION ? this[l[0]] = l[1].call(this, d) : this[l[0]] = l[1] : l.length >= 3 && (typeof l[1] === Et.FUNCTION && !(l[1].exec && l[1].test) ? l.length > 3 ? this[l[0]] = d ? l[1].apply(this, l.slice(2)) : void 0 : this[l[0]] = d ? l[1].call(this, d, l[2]) : void 0 : l.length == 3 ? this[l[0]] = d ? d.replace(l[1], l[2]) : void 0 : l.length == 4 ? this[l[0]] = d ? l[3].call(this, d.replace(l[1], l[2])) : void 0 : l.length > 4 && (this[l[0]] = d ? l[3].apply(this, [
        d.replace(l[1], l[2])
      ].concat(l.slice(4))) : void 0)) : this[l] = d || void 0;
      o += 2;
    }
  }, yo = function(e, t) {
    for (var o in t) if (typeof t[o] === Et.OBJECT && t[o].length > 0) {
      for (var i = 0; i < t[o].length; i++) if (sc(t[o][i], e)) return o === Ll ? void 0 : o;
    } else if (sc(t[o], e)) return o === Ll ? void 0 : o;
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
  }, hm = {
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
        $,
        [
          j,
          fn + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          as + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        j,
        $
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          hn + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          hn + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          hn
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        $,
        [
          j,
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
        j,
        $
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        $,
        [
          j,
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
          j,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        $,
        [
          j,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "Smart " + Sa + qn
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          j,
          /(.+)/,
          "$1 Secure" + qn
        ],
        $
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          Zn + " Focus"
        ]
      ],
      [
        / mms\/([\w\.]+)$/i
      ],
      [
        $,
        [
          j,
          hn + " Neon"
        ]
      ],
      [
        / opt\/([\w\.]+)$/i
      ],
      [
        $,
        [
          j,
          hn + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          hn + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          "MIUI" + qn
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        $,
        [
          j,
          fn + Zn
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        $,
        [
          j,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          j,
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
          j,
          /(.+)/,
          "$1" + qn
        ],
        $
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        $,
        [
          j,
          $n + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        $,
        [
          j,
          Wl + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          j,
          Wl + " Mobile"
        ],
        $
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        j,
        $
      ],
      [
        /(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i
      ],
      [
        j
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        $,
        j
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          j,
          Ca
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
        j,
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
          j,
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
          j,
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
        j,
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
          j,
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
        j,
        $
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        $,
        [
          j,
          Ul + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        $,
        [
          j,
          as + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          j,
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
          j,
          "Android" + qn
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        $,
        [
          j,
          fn + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        j,
        $
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        $,
        [
          j,
          fn + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          j,
          fn + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        $,
        j
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        j,
        [
          $,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        j,
        $
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          j,
          fn + Zn
        ],
        $
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          j,
          "Netscape"
        ],
        $
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        j,
        $
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        $,
        [
          j,
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
        j,
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
        j,
        [
          $,
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
          Nn,
          Ni
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
        G,
        [
          z,
          $n
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
          un
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        G,
        [
          z,
          un
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
          Ml
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
          Hl
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /(?:huawei) ?([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
      ],
      [
        G,
        [
          z,
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
          G,
          /_/g,
          " "
        ],
        [
          z,
          va
        ],
        [
          U,
          Ze
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
          G,
          /_/g,
          " "
        ],
        [
          z,
          va
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
        G,
        [
          z,
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
        G,
        [
          z,
          ba
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
        G,
        [
          z,
          yo,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": ba
          }
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
          Sa
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        G,
        [
          z,
          Sa
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
        G,
        [
          z,
          Na
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
        G,
        [
          z,
          Na
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        G,
        [
          z,
          jr
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        G,
        [
          z,
          jr
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
        z,
        G,
        [
          U,
          Ze
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
      ],
      [
        [
          G,
          /_/g,
          " "
        ],
        [
          U,
          Le
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
        G,
        [
          z,
          ji
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        G,
        [
          z,
          ji
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
        z,
        G
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        G,
        [
          z,
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
          G,
          "Xperia Tablet"
        ],
        [
          z,
          Vn
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        G,
        [
          z,
          Br
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          G,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          z,
          Br
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
        G,
        z,
        [
          U,
          Ze
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /(?:blackberry|\(bb10;) (\w+)/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
          Cl
        ],
        [
          U,
          Ze
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
          "HTC"
        ],
        [
          U,
          Ze
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
          G,
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
        G,
        [
          z,
          "TCL"
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        G,
        [
          z,
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
          z,
          Ni
        ],
        G,
        [
          U,
          yo,
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
        G,
        [
          z,
          "Acer"
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
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
        G,
        [
          z,
          "Archos"
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
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
        z,
        G,
        [
          U,
          Ze
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
        G,
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
        z,
        G,
        [
          U,
          Ze
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        G,
        [
          z,
          Aa
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        G,
        [
          z,
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
        G,
        [
          z,
          Pl
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        z,
        G,
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
          G,
          /\./g,
          " "
        ],
        [
          z,
          Aa
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
        G,
        [
          z,
          La
        ],
        [
          U,
          Ze
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        G,
        [
          z,
          La
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
          G,
          /^/,
          "SmartTV"
        ],
        [
          z,
          $n
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
        G,
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
          jr
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
          G,
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
          G,
          di + " Third Generation"
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
          G,
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
          G,
          di + " Nest Hub"
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
          G,
          di
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
        G,
        [
          z,
          Ca
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
        G,
        [
          z,
          Br
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
        G,
        [
          z,
          Pl
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
        G,
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
        G,
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
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        G,
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
        G,
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
          yo,
          {
            LG: "lge"
          }
        ],
        [
          G,
          Ts
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
        G,
        [
          z,
          Vn
        ],
        [
          U,
          ss
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        G,
        [
          z,
          Aa
        ],
        [
          U,
          ss
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
          yo,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        G,
        [
          U,
          ss
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        G,
        [
          z,
          $n
        ],
        [
          U,
          Ho
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        z,
        G,
        [
          U,
          Ho
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        G,
        [
          z,
          ba
        ],
        [
          U,
          Ho
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        G,
        [
          z,
          un
        ],
        [
          U,
          Ho
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        G,
        [
          z,
          Fl
        ],
        [
          U,
          Ho
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        G,
        [
          z,
          Na
        ],
        [
          U,
          Ho
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        G,
        [
          z,
          Vn
        ],
        [
          U,
          Ho
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        G,
        [
          z,
          jr
        ],
        [
          U,
          Ho
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        G,
        [
          z,
          La
        ],
        [
          U,
          Ho
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        G,
        [
          z,
          ji
        ],
        [
          U,
          Gr
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        z,
        G,
        [
          U,
          Gr
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        G,
        [
          z,
          Ca
        ],
        [
          U,
          Gr
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          U,
          Gr
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        z,
        [
          U,
          tr
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        G,
        [
          z,
          Br
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
        G,
        [
          z,
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
        G,
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
        G,
        [
          U,
          yo,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": Ze
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          U,
          Ze
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
        G,
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
          j,
          as + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        j,
        $
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        $,
        [
          j,
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
        j,
        $
      ],
      [
        /ladybird\//i
      ],
      [
        [
          j,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        $,
        j
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          j,
          /N/,
          "R"
        ],
        [
          $,
          yo,
          Gl
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        j,
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
          yo,
          Gl
        ],
        [
          j,
          rc
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        j,
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
          j,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          j,
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
          j,
          di + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          j,
          di + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        $,
        [
          j,
          di + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          j,
          di + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        $,
        [
          j,
          di
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        $,
        j
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          j,
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
        j,
        $
      ],
      [
        /\(bb(10);/i
      ],
      [
        $,
        [
          j,
          Dl
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        $,
        [
          j,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i
      ],
      [
        $,
        [
          j,
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
          j,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          $,
          yo,
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
          j,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        $,
        [
          j,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          j,
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
        j,
        $
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          j,
          "Solaris"
        ],
        $
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        j,
        $
      ]
    ]
  }, Yr = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return ei.call(e.init, [
      [
        Qt,
        [
          j,
          $,
          Ir,
          U
        ]
      ],
      [
        ti,
        [
          $t
        ]
      ],
      [
        Uo,
        [
          U,
          G,
          z
        ]
      ],
      [
        So,
        [
          j,
          $
        ]
      ],
      [
        ao,
        [
          j,
          $
        ]
      ]
    ]), ei.call(e.isIgnore, [
      [
        Qt,
        [
          $,
          Ir
        ]
      ],
      [
        So,
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
    ]), ei.call(e.isIgnoreRgx, [
      [
        Qt,
        / ?browser$/i
      ],
      [
        ao,
        / ?os$/i
      ]
    ]), ei.call(e.toString, [
      [
        Qt,
        [
          j,
          $
        ]
      ],
      [
        ti,
        [
          $t
        ]
      ],
      [
        Uo,
        [
          z,
          G
        ]
      ],
      [
        So,
        [
          j,
          $
        ]
      ],
      [
        ao,
        [
          j,
          $
        ]
      ]
    ]), e;
  })(), fm = function(e, t) {
    var o = Yr.init[t], i = Yr.isIgnore[t] || 0, n = Yr.isIgnoreRgx[t] || 0, s = Yr.toString[t] || 0;
    function l() {
      ei.call(this, o);
    }
    return l.prototype.getItem = function() {
      return e;
    }, l.prototype.withClientHints = function() {
      return Xi ? Xi.getHighEntropyValues(xh).then(function(h) {
        return e.setCH(new zh(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, l.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != bn && (l.prototype.is = function(h) {
      var d = false;
      for (var g in this) if (this.hasOwnProperty(g) && !sc(i, g) && Ni(n ? Ln(n, this[g]) : this[g]) == Ni(n ? Ln(n, h) : h)) {
        if (d = true, h != Et.UNDEFINED) break;
      } else if (h == Et.UNDEFINED && d) {
        d = !d;
        break;
      }
      return d;
    }, l.prototype.toString = function() {
      var h = Nn;
      for (var d in s) typeof this[s[d]] !== Et.UNDEFINED && (h += (h ? " " : Nn) + this[s[d]]);
      return h || Et.UNDEFINED;
    }), l.prototype.then = function(h) {
      var d = this, g = function() {
        for (var R in d) d.hasOwnProperty(R) && (this[R] = d[R]);
      };
      g.prototype = {
        is: l.prototype.is,
        toString: l.prototype.toString,
        withClientHints: l.prototype.withClientHints,
        withFeatureCheck: l.prototype.withFeatureCheck
      };
      var m = new g();
      return h(m), m;
    }, new l();
  };
  function zh(e, t) {
    if (e = e || {}, ei.call(this, xh), t) ei.call(this, [
      [
        Wc,
        Da(e[Mi])
      ],
      [
        Gc,
        Da(e[om])
      ],
      [
        Le,
        /\?1/.test(e[sm])
      ],
      [
        G,
        Kn(e[am])
      ],
      [
        vn,
        Kn(e[Yh])
      ],
      [
        Bc,
        Kn(e[cm])
      ],
      [
        $t,
        Kn(e[im])
      ],
      [
        Ji,
        Da(e[rm])
      ],
      [
        $s,
        Kn(e[nm])
      ]
    ]);
    else for (var o in e) this.hasOwnProperty(o) && typeof e[o] !== Et.UNDEFINED && (this[o] = e[o]);
  }
  function Li(e, t, o, i) {
    return ei.call(this, [
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
        fm(this, e)
      ]
    ]), this;
  }
  Li.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  Li.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  Li.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  Li.prototype.detectFeature = function() {
    if (Jt && Jt.userAgent == this.ua) switch (this.itemType) {
      case Qt:
        Jt.brave && typeof Jt.brave.isBrave == Et.FUNCTION && this.set(j, "Brave");
        break;
      case Uo:
        !this.get(U) && Xi && Xi[Le] && this.set(U, Le), this.get(G) == "Macintosh" && Jt && typeof Jt.standalone !== Et.UNDEFINED && Jt.maxTouchPoints && Jt.maxTouchPoints > 2 && this.set(G, "iPad").set(U, Ze);
        break;
      case ao:
        !this.get(j) && Xi && Xi[vn] && this.set(j, Xi[vn]);
        break;
      case bn:
        var e = this.data, t = function(o) {
          return e[o].getItem().detectFeature().get();
        };
        this.set(Qt, t(Qt)).set(ti, t(ti)).set(Uo, t(Uo)).set(So, t(So)).set(ao, t(ao));
    }
    return this;
  };
  Li.prototype.parseUA = function() {
    switch (this.itemType != bn && cc.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case Qt:
        this.set(Ir, ac(this.get($)));
        break;
      case ao:
        if (this.get(j) == "iOS" && this.get($) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set($, e[1]);
        }
        break;
    }
    return this;
  };
  Li.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case Qt:
      case So:
        var o = e[Gc] || e[Wc], i;
        if (o) for (var n = 0; n < o.length; n++) {
          var s = o[n].brand || o[n], l = o[n].version;
          this.itemType == Qt && !/not.a.brand/i.test(s) && (!i || /Chrom/.test(i) && s != kl || i == as && /WebView2/.test(s)) && (s = yo(s, hm), i = this.get(j), i && !/Chrom/.test(i) && /Chrom/.test(s) || this.set(j, s).set($, l).set(Ir, ac(l)), i = s), this.itemType == So && s == kl && this.set($, l);
        }
        break;
      case ti:
        var h = e[$t];
        h && (h && e[$s] == "64" && (h += "64"), cc.call(this.data, h + ";", t));
        break;
      case Uo:
        if (e[Le] && this.set(U, Le), e[G] && (this.set(G, e[G]), !this.get(U) || !this.get(z))) {
          var d = {};
          cc.call(d, "droid 9; " + e[G] + ")", t), !this.get(U) && d.type && this.set(U, d.type), !this.get(z) && d.vendor && this.set(z, d.vendor);
        }
        if (e[Ji]) {
          var g;
          if (typeof e[Ji] != "string") for (var m = 0; !g && m < e[Ji].length; ) g = yo(e[Ji][m++], Bl);
          else g = yo(e[Ji], Bl);
          this.set(U, g);
        }
        break;
      case ao:
        var R = e[vn];
        if (R) {
          var N = e[Bc];
          R == rc && (N = parseInt(ac(N), 10) >= 13 ? "11" : "10"), this.set(j, R).set($, N);
        }
        this.get(j) == rc && e[G] == "Xbox" && this.set(j, "Xbox").set($, void 0);
        break;
      case bn:
        var A = this.data, M = function(D) {
          return A[D].getItem().setCH(e).parseCH().get();
        };
        this.set(Qt, M(Qt)).set(ti, M(ti)).set(Uo, M(Uo)).set(So, M(So)).set(ao, M(ao));
    }
    return this;
  };
  ni = function(e, t, o) {
    if (typeof e === Et.OBJECT ? (gs(e, true) ? (typeof t === Et.OBJECT && (o = t), t = e) : (o = e, t = void 0), e = void 0) : typeof e === Et.STRING && !gs(t, true) && (o = t, t = void 0), o) if (typeof o.append === Et.FUNCTION) {
      var i = {};
      o.forEach(function(m, R) {
        i[String(R).toLowerCase()] = m;
      }), o = i;
    } else {
      var n = {};
      for (var s in o) o.hasOwnProperty(s) && (n[String(s).toLowerCase()] = o[s]);
      o = n;
    }
    if (!(this instanceof ni)) return new ni(e, t, o).getResult();
    var l = typeof e === Et.STRING ? e : o && o[vl] ? o[vl] : Jt && Jt.userAgent ? Jt.userAgent : Nn, h = new zh(o, true), d = t ? um(jl, t) : jl, g = function(m) {
      return m == bn ? function() {
        return new Li(m, l, d, h).set("ua", l).set(Qt, this.getBrowser()).set(ti, this.getCPU()).set(Uo, this.getDevice()).set(So, this.getEngine()).set(ao, this.getOS()).get();
      } : function() {
        return new Li(m, l, d[m], h).parseUA().get();
      };
    };
    return ei.call(this, [
      [
        "getBrowser",
        g(Qt)
      ],
      [
        "getCPU",
        g(ti)
      ],
      [
        "getDevice",
        g(Uo)
      ],
      [
        "getEngine",
        g(So)
      ],
      [
        "getOS",
        g(ao)
      ],
      [
        "getResult",
        g(bn)
      ],
      [
        "getUA",
        function() {
          return l;
        }
      ],
      [
        "setUA",
        function(m) {
          return Cr(m) && (l = Ts(m, tm)), this;
        }
      ]
    ]).setUA(l), this;
  };
  ni.VERSION = em;
  ni.BROWSER = Vs([
    j,
    $,
    Ir,
    U
  ]);
  ni.CPU = Vs([
    $t
  ]);
  ni.DEVICE = Vs([
    G,
    z,
    U,
    ss,
    Le,
    Ot,
    Ze,
    Ho,
    tr
  ]);
  ni.ENGINE = ni.OS = Vs([
    j,
    $
  ]);
  let Tt;
  Tt = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(Tt || {});
  Dr = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(Dr || {});
  Gn = class extends Error {
    constructor(t, o) {
      super(t), this.cause = o, this.name = this.constructor.name, o && (this.message = `${t} (caused by: ${o.message})`);
    }
  };
  class _e extends Gn {
    constructor(t, o = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = o;
    }
  }
  function dm(e) {
    return e instanceof Gn;
  }
  xr = function(e, t = "Unknown error occurred") {
    return dm(e) ? e : e instanceof Error ? new _e(t, "UNKNOWN_ERROR", e) : new _e(t, "UNKNOWN_ERROR");
  };
  Yi = function(e, t) {
    const o = t ? `[${t}] ` : "";
    console.error(`${o}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class pm {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new ni(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? Tt.TAURI : this.parser.getDevice().type === "mobile" ? Tt.MOBILE_WEB : Tt.WEB;
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
        case Tt.TAURI:
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
        case Tt.MOBILE_WEB:
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
        case Tt.WEB:
        case Tt.UNKNOWN:
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
        case Tt.TAURI:
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
        case Tt.MOBILE_WEB:
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
        case Tt.WEB:
        case Tt.UNKNOWN:
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
        return !t.environment || !t.capabilities ? C(new _e("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), B(true));
      } catch (t) {
        return C(new _e("Platform detection failed", void 0, t));
      }
    }
  }
  const jc = new pm();
  nv = function() {
    return jc.getPlatformContext();
  };
  function mm(e, t, o, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? i : o === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function gm(e, t, o, i, n) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, o), o;
  }
  var cs;
  function Tm(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function At(e, t = {}, o) {
    return window.__TAURI_INTERNALS__.invoke(e, t, o);
  }
  class Em {
    get rid() {
      return mm(this, cs, "f");
    }
    constructor(t) {
      cs.set(this, void 0), gm(this, cs, t);
    }
    async close() {
      return At("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  cs = /* @__PURE__ */ new WeakMap();
  var Yl;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Yl || (Yl = {}));
  async function Im(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await At("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function xl(e, t, o) {
    var i;
    const n = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return At("plugin:event|listen", {
      event: e,
      target: n,
      handler: Tm(t)
    }).then((s) => async () => Im(e, s));
  }
  async function Om(e, t) {
    return await Es.load(e, t);
  }
  class Es extends Em {
    constructor(t) {
      super(t);
    }
    static async load(t, o) {
      const i = await At("plugin:store|load", {
        path: t,
        options: o
      });
      return new Es(i);
    }
    static async get(t) {
      return await At("plugin:store|get_store", {
        path: t
      }).then((o) => o ? new Es(o) : null);
    }
    async set(t, o) {
      await At("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: o
      });
    }
    async get(t) {
      const [o, i] = await At("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return i ? o : void 0;
    }
    async has(t) {
      return await At("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await At("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await At("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await At("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await At("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await At("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await At("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await At("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await At("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await At("plugin:store|save", {
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
  class at extends Gn {
    constructor(t, o, i) {
      super(t, i);
      __publicField(this, "domain", Dr.STORAGE);
      this.code = o;
    }
  }
  var it = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(it || {});
  class Ct extends Gn {
    constructor(t, o, i) {
      super(t, i);
      __publicField(this, "domain", Dr.GEOLOCATION);
      this.code = o;
    }
  }
  var gt = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(gt || {});
  class xi extends Gn {
    constructor(t, o, i) {
      super(t, i);
      __publicField(this, "domain", Dr.GENERIC);
      this.code = o;
    }
  }
  var Ei = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e.NOT_INITIALIZED = "NOT_INITIALIZED", e))(Ei || {});
  class Rm {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return B(void 0);
      try {
        return this.store = await Om(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, B(void 0);
      } catch (t) {
        return C(new at("Failed to initialize Tauri storage", it.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, o) {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        return await this.store.set(t, o), B(void 0);
      } catch (i) {
        return C(new at(`Failed to set value for key: ${t}`, it.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        const o = await this.store.get(t);
        return B(o ?? null);
      } catch (o) {
        return C(new at(`Failed to get value for key: ${t}`, it.GET_FAILED, o));
      }
    }
    async save() {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        return await this.store.save(), B(void 0);
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
        return B(JSON.stringify(o, null, 2));
      } catch (t) {
        return C(new at("Failed to export data to JSON", it.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const o of t) await this.store.delete(o);
        return B(void 0);
      } catch (t) {
        return C(new at("Failed to clear store", it.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return C(new at("Tauri store not initialized", it.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), B(void 0);
      } catch (o) {
        return C(new at(`Failed to remove key: ${t}`, it.REMOVE_FAILED, o));
      }
    }
  }
  let $h, wm, Vh, ym, Sm, Jn;
  $h = typeof global == "object" && global && global.Object === Object && global;
  wm = typeof self == "object" && self && self.Object === Object && self;
  Wo = $h || wm || Function("return this")();
  Cn = Wo.Symbol;
  Vh = Object.prototype;
  ym = Vh.hasOwnProperty;
  Sm = Vh.toString;
  Jn = Cn ? Cn.toStringTag : void 0;
  function Am(e) {
    var t = ym.call(e, Jn), o = e[Jn];
    try {
      e[Jn] = void 0;
      var i = true;
    } catch {
    }
    var n = Sm.call(e);
    return i && (t ? e[Jn] = o : delete e[Jn]), n;
  }
  var Nm = Object.prototype, bm = Nm.toString;
  function vm(e) {
    return bm.call(e);
  }
  var Lm = "[object Null]", Cm = "[object Undefined]", zl = Cn ? Cn.toStringTag : void 0;
  Pi = function(e) {
    return e == null ? e === void 0 ? Cm : Lm : zl && zl in Object(e) ? Am(e) : vm(e);
  };
  Fi = function(e) {
    return e != null && typeof e == "object";
  };
  Zs = Array.isArray;
  qs = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Dm = "[object AsyncFunction]", Hm = "[object Function]", Mm = "[object GeneratorFunction]", Pm = "[object Proxy]";
  Zh = function(e) {
    if (!qs(e)) return false;
    var t = Pi(e);
    return t == Hm || t == Mm || t == Dm || t == Pm;
  };
  var Ha = Wo["__core-js_shared__"], $l = (function() {
    var e = /[^.]+$/.exec(Ha && Ha.keys && Ha.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function Fm(e) {
    return !!$l && $l in e;
  }
  var _m = Function.prototype, Um = _m.toString;
  function rn(e) {
    if (e != null) {
      try {
        return Um.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var km = /[\\^$.*+?()[\]{}|]/g, Wm = /^\[object .+?Constructor\]$/, Gm = Function.prototype, Bm = Object.prototype, jm = Gm.toString, Ym = Bm.hasOwnProperty, xm = RegExp("^" + jm.call(Ym).replace(km, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function zm(e) {
    if (!qs(e) || Fm(e)) return false;
    var t = Zh(e) ? xm : Wm;
    return t.test(rn(e));
  }
  function $m(e, t) {
    return e == null ? void 0 : e[t];
  }
  function sn(e, t) {
    var o = $m(e, t);
    return zm(o) ? o : void 0;
  }
  let lc, Vl, Vm;
  lc = sn(Wo, "WeakMap");
  Vl = Object.create;
  Vm = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!qs(t)) return {};
      if (Vl) return Vl(t);
      e.prototype = t;
      var o = new e();
      return e.prototype = void 0, o;
    };
  })();
  Zl = (function() {
    try {
      var e = sn(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function Zm(e, t) {
    for (var o = -1, i = e == null ? 0 : e.length; ++o < i && t(e[o], o, e) !== false; ) ;
    return e;
  }
  var qm = 9007199254740991, Km = /^(?:0|[1-9]\d*)$/;
  Jm = function(e, t) {
    var o = typeof e;
    return t = t ?? qm, !!t && (o == "number" || o != "symbol" && Km.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  Xm = function(e, t, o) {
    t == "__proto__" && Zl ? Zl(e, t, {
      configurable: true,
      enumerable: true,
      value: o,
      writable: true
    }) : e[t] = o;
  };
  qh = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var Qm = Object.prototype, eg = Qm.hasOwnProperty;
  tg = function(e, t, o) {
    var i = e[t];
    (!(eg.call(e, t) && qh(i, o)) || o === void 0 && !(t in e)) && Xm(e, t, o);
  };
  var og = 9007199254740991;
  Kh = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= og;
  };
  ig = function(e) {
    return e != null && Kh(e.length) && !Zh(e);
  };
  var ng = Object.prototype;
  Jh = function(e) {
    var t = e && e.constructor, o = typeof t == "function" && t.prototype || ng;
    return e === o;
  };
  function rg(e, t) {
    for (var o = -1, i = Array(e); ++o < e; ) i[o] = t(o);
    return i;
  }
  var sg = "[object Arguments]";
  function ql(e) {
    return Fi(e) && Pi(e) == sg;
  }
  let Xh, ag, cg;
  Xh = Object.prototype;
  ag = Xh.hasOwnProperty;
  cg = Xh.propertyIsEnumerable;
  lg = ql(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? ql : function(e) {
    return Fi(e) && ag.call(e, "callee") && !cg.call(e, "callee");
  };
  function ug() {
    return false;
  }
  let Qh, Kl, hg, Jl, fg, dg, pg, mg, gg, Tg, Eg, Ig, Og, Rg, wg, yg, Sg, Ag, Ng, bg, vg, Lg, Cg, Dg, Hg, Mg, Pg, Fg, _g, ot;
  Qh = typeof exports == "object" && exports && !exports.nodeType && exports;
  Kl = Qh && typeof module == "object" && module && !module.nodeType && module;
  hg = Kl && Kl.exports === Qh;
  Jl = hg ? Wo.Buffer : void 0;
  fg = Jl ? Jl.isBuffer : void 0;
  ef = fg || ug;
  dg = "[object Arguments]";
  pg = "[object Array]";
  mg = "[object Boolean]";
  gg = "[object Date]";
  Tg = "[object Error]";
  Eg = "[object Function]";
  Ig = "[object Map]";
  Og = "[object Number]";
  Rg = "[object Object]";
  wg = "[object RegExp]";
  yg = "[object Set]";
  Sg = "[object String]";
  Ag = "[object WeakMap]";
  Ng = "[object ArrayBuffer]";
  bg = "[object DataView]";
  vg = "[object Float32Array]";
  Lg = "[object Float64Array]";
  Cg = "[object Int8Array]";
  Dg = "[object Int16Array]";
  Hg = "[object Int32Array]";
  Mg = "[object Uint8Array]";
  Pg = "[object Uint8ClampedArray]";
  Fg = "[object Uint16Array]";
  _g = "[object Uint32Array]";
  ot = {};
  ot[vg] = ot[Lg] = ot[Cg] = ot[Dg] = ot[Hg] = ot[Mg] = ot[Pg] = ot[Fg] = ot[_g] = true;
  ot[dg] = ot[pg] = ot[Ng] = ot[mg] = ot[bg] = ot[gg] = ot[Tg] = ot[Eg] = ot[Ig] = ot[Og] = ot[Rg] = ot[wg] = ot[yg] = ot[Sg] = ot[Ag] = false;
  function Ug(e) {
    return Fi(e) && Kh(e.length) && !!ot[Pi(e)];
  }
  function Yc(e) {
    return function(t) {
      return e(t);
    };
  }
  let tf, sr, kg, Ma, Dn, Xl, Gg, Bg;
  tf = typeof exports == "object" && exports && !exports.nodeType && exports;
  sr = tf && typeof module == "object" && module && !module.nodeType && module;
  kg = sr && sr.exports === tf;
  Ma = kg && $h.process;
  Dn = (function() {
    try {
      var e = sr && sr.require && sr.require("util").types;
      return e || Ma && Ma.binding && Ma.binding("util");
    } catch {
    }
  })();
  Xl = Dn && Dn.isTypedArray;
  Wg = Xl ? Yc(Xl) : Ug;
  Gg = Object.prototype;
  Bg = Gg.hasOwnProperty;
  jg = function(e, t) {
    var o = Zs(e), i = !o && lg(e), n = !o && !i && ef(e), s = !o && !i && !n && Wg(e), l = o || i || n || s, h = l ? rg(e.length, String) : [], d = h.length;
    for (var g in e) (t || Bg.call(e, g)) && !(l && (g == "length" || n && (g == "offset" || g == "parent") || s && (g == "buffer" || g == "byteLength" || g == "byteOffset") || Jm(g, d))) && h.push(g);
    return h;
  };
  function of(e, t) {
    return function(o) {
      return e(t(o));
    };
  }
  var Yg = of(Object.keys, Object), xg = Object.prototype, zg = xg.hasOwnProperty;
  function $g(e) {
    if (!Jh(e)) return Yg(e);
    var t = [];
    for (var o in Object(e)) zg.call(e, o) && o != "constructor" && t.push(o);
    return t;
  }
  Vg = function(e) {
    return ig(e) ? jg(e) : $g(e);
  };
  var Or = sn(Object, "create");
  function Zg() {
    this.__data__ = Or ? Or(null) : {}, this.size = 0;
  }
  function qg(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Kg = "__lodash_hash_undefined__", Jg = Object.prototype, Xg = Jg.hasOwnProperty;
  function Qg(e) {
    var t = this.__data__;
    if (Or) {
      var o = t[e];
      return o === Kg ? void 0 : o;
    }
    return Xg.call(t, e) ? t[e] : void 0;
  }
  var eT = Object.prototype, tT = eT.hasOwnProperty;
  function oT(e) {
    var t = this.__data__;
    return Or ? t[e] !== void 0 : tT.call(t, e);
  }
  var iT = "__lodash_hash_undefined__";
  function nT(e, t) {
    var o = this.__data__;
    return this.size += this.has(e) ? 0 : 1, o[e] = Or && t === void 0 ? iT : t, this;
  }
  function nn(e) {
    var t = -1, o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  nn.prototype.clear = Zg;
  nn.prototype.delete = qg;
  nn.prototype.get = Qg;
  nn.prototype.has = oT;
  nn.prototype.set = nT;
  function rT() {
    this.__data__ = [], this.size = 0;
  }
  function Ks(e, t) {
    for (var o = e.length; o--; ) if (qh(e[o][0], t)) return o;
    return -1;
  }
  var sT = Array.prototype, aT = sT.splice;
  function cT(e) {
    var t = this.__data__, o = Ks(t, e);
    if (o < 0) return false;
    var i = t.length - 1;
    return o == i ? t.pop() : aT.call(t, o, 1), --this.size, true;
  }
  function lT(e) {
    var t = this.__data__, o = Ks(t, e);
    return o < 0 ? void 0 : t[o][1];
  }
  function uT(e) {
    return Ks(this.__data__, e) > -1;
  }
  function hT(e, t) {
    var o = this.__data__, i = Ks(o, e);
    return i < 0 ? (++this.size, o.push([
      e,
      t
    ])) : o[i][1] = t, this;
  }
  function li(e) {
    var t = -1, o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  li.prototype.clear = rT;
  li.prototype.delete = cT;
  li.prototype.get = lT;
  li.prototype.has = uT;
  li.prototype.set = hT;
  var Rr = sn(Wo, "Map");
  function fT() {
    this.size = 0, this.__data__ = {
      hash: new nn(),
      map: new (Rr || li)(),
      string: new nn()
    };
  }
  function dT(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Js(e, t) {
    var o = e.__data__;
    return dT(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
  }
  function pT(e) {
    var t = Js(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function mT(e) {
    return Js(this, e).get(e);
  }
  function gT(e) {
    return Js(this, e).has(e);
  }
  function TT(e, t) {
    var o = Js(this, e), i = o.size;
    return o.set(e, t), this.size += o.size == i ? 0 : 1, this;
  }
  Bn = function(e) {
    var t = -1, o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  };
  Bn.prototype.clear = fT;
  Bn.prototype.delete = pT;
  Bn.prototype.get = mT;
  Bn.prototype.has = gT;
  Bn.prototype.set = TT;
  function ET(e, t) {
    for (var o = -1, i = t.length, n = e.length; ++o < i; ) e[n + o] = t[o];
    return e;
  }
  var nf = of(Object.getPrototypeOf, Object), IT = "[object Object]", OT = Function.prototype, RT = Object.prototype, rf = OT.toString, wT = RT.hasOwnProperty, yT = rf.call(Object);
  ST = function(e) {
    if (!Fi(e) || Pi(e) != IT) return false;
    var t = nf(e);
    if (t === null) return true;
    var o = wT.call(t, "constructor") && t.constructor;
    return typeof o == "function" && o instanceof o && rf.call(o) == yT;
  };
  var AT = "[object DOMException]", NT = "[object Error]";
  function sf(e) {
    if (!Fi(e)) return false;
    var t = Pi(e);
    return t == NT || t == AT || typeof e.message == "string" && typeof e.name == "string" && !ST(e);
  }
  function bT() {
    this.__data__ = new li(), this.size = 0;
  }
  function vT(e) {
    var t = this.__data__, o = t.delete(e);
    return this.size = t.size, o;
  }
  function LT(e) {
    return this.__data__.get(e);
  }
  function CT(e) {
    return this.__data__.has(e);
  }
  var DT = 200;
  function HT(e, t) {
    var o = this.__data__;
    if (o instanceof li) {
      var i = o.__data__;
      if (!Rr || i.length < DT - 1) return i.push([
        e,
        t
      ]), this.size = ++o.size, this;
      o = this.__data__ = new Bn(i);
    }
    return o.set(e, t), this.size = o.size, this;
  }
  jn = function(e) {
    var t = this.__data__ = new li(e);
    this.size = t.size;
  };
  jn.prototype.clear = bT;
  jn.prototype.delete = vT;
  jn.prototype.get = LT;
  jn.prototype.has = CT;
  jn.prototype.set = HT;
  var af = typeof exports == "object" && exports && !exports.nodeType && exports, Ql = af && typeof module == "object" && module && !module.nodeType && module, MT = Ql && Ql.exports === af, eu = MT ? Wo.Buffer : void 0, tu = eu ? eu.allocUnsafe : void 0;
  PT = function(e, t) {
    if (t) return e.slice();
    var o = e.length, i = tu ? tu(o) : new e.constructor(o);
    return e.copy(i), i;
  };
  function FT(e, t) {
    for (var o = -1, i = e == null ? 0 : e.length, n = 0, s = []; ++o < i; ) {
      var l = e[o];
      t(l, o, e) && (s[n++] = l);
    }
    return s;
  }
  function _T() {
    return [];
  }
  var UT = Object.prototype, kT = UT.propertyIsEnumerable, ou = Object.getOwnPropertySymbols, WT = ou ? function(e) {
    return e == null ? [] : (e = Object(e), FT(ou(e), function(t) {
      return kT.call(e, t);
    }));
  } : _T;
  function GT(e, t, o) {
    var i = t(e);
    return Zs(e) ? i : ET(i, o(e));
  }
  BT = function(e) {
    return GT(e, Vg, WT);
  };
  let uc, hc, fc, iu, jT, nu, ru, su, au, YT, xT, zT, $T, VT;
  uc = sn(Wo, "DataView");
  hc = sn(Wo, "Promise");
  fc = sn(Wo, "Set");
  iu = "[object Map]";
  jT = "[object Object]";
  nu = "[object Promise]";
  ru = "[object Set]";
  su = "[object WeakMap]";
  au = "[object DataView]";
  YT = rn(uc);
  xT = rn(Rr);
  zT = rn(hc);
  $T = rn(fc);
  VT = rn(lc);
  Ko = Pi;
  (uc && Ko(new uc(new ArrayBuffer(1))) != au || Rr && Ko(new Rr()) != iu || hc && Ko(hc.resolve()) != nu || fc && Ko(new fc()) != ru || lc && Ko(new lc()) != su) && (Ko = function(e) {
    var t = Pi(e), o = t == jT ? e.constructor : void 0, i = o ? rn(o) : "";
    if (i) switch (i) {
      case YT:
        return au;
      case xT:
        return iu;
      case zT:
        return nu;
      case $T:
        return ru;
      case VT:
        return su;
    }
    return t;
  });
  var ZT = Object.prototype, qT = ZT.hasOwnProperty;
  function KT(e) {
    var t = e.length, o = new e.constructor(t);
    return t && typeof e[0] == "string" && qT.call(e, "index") && (o.index = e.index, o.input = e.input), o;
  }
  cu = Wo.Uint8Array;
  function xc(e) {
    var t = new e.constructor(e.byteLength);
    return new cu(t).set(new cu(e)), t;
  }
  function JT(e, t) {
    var o = xc(e.buffer);
    return new e.constructor(o, e.byteOffset, e.byteLength);
  }
  var XT = /\w*$/;
  function QT(e) {
    var t = new e.constructor(e.source, XT.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var lu = Cn ? Cn.prototype : void 0, uu = lu ? lu.valueOf : void 0;
  function eE(e) {
    return uu ? Object(uu.call(e)) : {};
  }
  tE = function(e, t) {
    var o = t ? xc(e.buffer) : e.buffer;
    return new e.constructor(o, e.byteOffset, e.length);
  };
  var oE = "[object Boolean]", iE = "[object Date]", nE = "[object Map]", rE = "[object Number]", sE = "[object RegExp]", aE = "[object Set]", cE = "[object String]", lE = "[object Symbol]", uE = "[object ArrayBuffer]", hE = "[object DataView]", fE = "[object Float32Array]", dE = "[object Float64Array]", pE = "[object Int8Array]", mE = "[object Int16Array]", gE = "[object Int32Array]", TE = "[object Uint8Array]", EE = "[object Uint8ClampedArray]", IE = "[object Uint16Array]", OE = "[object Uint32Array]";
  function RE(e, t, o) {
    var i = e.constructor;
    switch (t) {
      case uE:
        return xc(e);
      case oE:
      case iE:
        return new i(+e);
      case hE:
        return JT(e);
      case fE:
      case dE:
      case pE:
      case mE:
      case gE:
      case TE:
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
        return QT(e);
      case aE:
        return new i();
      case lE:
        return eE(e);
    }
  }
  wE = function(e) {
    return typeof e.constructor == "function" && !Jh(e) ? Vm(nf(e)) : {};
  };
  var yE = "[object Map]";
  function SE(e) {
    return Fi(e) && Ko(e) == yE;
  }
  var hu = Dn && Dn.isMap, AE = hu ? Yc(hu) : SE, NE = "[object Set]";
  function bE(e) {
    return Fi(e) && Ko(e) == NE;
  }
  var fu = Dn && Dn.isSet, vE = fu ? Yc(fu) : bE, LE = 1, cf = "[object Arguments]", CE = "[object Array]", DE = "[object Boolean]", HE = "[object Date]", ME = "[object Error]", lf = "[object Function]", PE = "[object GeneratorFunction]", FE = "[object Map]", _E = "[object Number]", uf = "[object Object]", UE = "[object RegExp]", kE = "[object Set]", WE = "[object String]", GE = "[object Symbol]", BE = "[object WeakMap]", jE = "[object ArrayBuffer]", YE = "[object DataView]", xE = "[object Float32Array]", zE = "[object Float64Array]", $E = "[object Int8Array]", VE = "[object Int16Array]", ZE = "[object Int32Array]", qE = "[object Uint8Array]", KE = "[object Uint8ClampedArray]", JE = "[object Uint16Array]", XE = "[object Uint32Array]", Xe = {};
  Xe[cf] = Xe[CE] = Xe[jE] = Xe[YE] = Xe[DE] = Xe[HE] = Xe[xE] = Xe[zE] = Xe[$E] = Xe[VE] = Xe[ZE] = Xe[FE] = Xe[_E] = Xe[uf] = Xe[UE] = Xe[kE] = Xe[WE] = Xe[GE] = Xe[qE] = Xe[KE] = Xe[JE] = Xe[XE] = true;
  Xe[ME] = Xe[lf] = Xe[BE] = false;
  function ls(e, t, o, i, n, s) {
    var l, h = t & LE;
    if (l !== void 0) return l;
    if (!qs(e)) return e;
    var d = Zs(e);
    if (d) l = KT(e);
    else {
      var g = Ko(e), m = g == lf || g == PE;
      if (ef(e)) return PT(e, h);
      if (g == uf || g == cf || m && !n) l = m ? {} : wE(e);
      else {
        if (!Xe[g]) return n ? e : {};
        l = RE(e, g, h);
      }
    }
    s || (s = new jn());
    var R = s.get(e);
    if (R) return R;
    s.set(e, l), vE(e) ? e.forEach(function(M) {
      l.add(ls(M, t, o, M, e, s));
    }) : AE(e) && e.forEach(function(M, D) {
      l.set(D, ls(M, t, o, D, e, s));
    });
    var N = BT, A = d ? void 0 : N(e);
    return Zm(A || e, function(M, D) {
      A && (D = M, M = e[D]), tg(l, D, ls(M, t, o, D, e, s));
    }), l;
  }
  var QE = 1, eI = 4;
  hf = function(e) {
    return ls(e, QE | eI);
  };
  var tI = "[object String]";
  function dc(e) {
    return typeof e == "string" || !Zs(e) && Fi(e) && Pi(e) == tI;
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
  rv = [
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
  function Pt(e) {
    try {
      if (typeof localStorage > "u") return Pa[e];
      const t = localStorage.getItem(oI);
      if (t !== null) return JSON.parse(t)[e] ?? Pa[e];
    } catch {
    }
    return Pa[e];
  }
  function du() {
    return Pt("debugMode");
  }
  function zc() {
    return Pt("gpsUpdateInterval");
  }
  function nI() {
    return Pt("kalmanGpsUpdateInterval");
  }
  function rI() {
    return Pt("enableKalmanFilter");
  }
  sv = function() {
    return Pt("mapZoomLevel");
  };
  av = function() {
    return Pt("keepScreenOn");
  };
  cv = function() {
    return Pt("mapTileServer");
  };
  lv = function() {
    return Pt("showCompass");
  };
  uv = function() {
    return Pt("autoRecenterTimeout");
  };
  hv = function() {
    return Pt("customMapTileUrl");
  };
  fv = function() {
    return Pt("mapTilerApiKey");
  };
  function pc() {
    return Pt("imuUpdateFrequency");
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
        return Pt("maxCacheSize") || 100;
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
        s.onsuccess = (d) => {
          const g = d.target.result;
          g && h < l && (g.delete(), h++, g.continue());
        }, i.oncomplete = () => t(), i.onerror = () => o(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return B(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, B(void 0);
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
          const l = i.put(hf(o), t);
          l.onsuccess = () => n(), l.onerror = () => s(new Error("Failed to set value"));
        })), B(void 0);
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
        return B(o);
      } catch (o) {
        return C(new at(`Failed to get value for key: ${t}`, it.GET_FAILED, o));
      }
    }
    async save() {
      return B(void 0);
    }
    async exportToJson() {
      if (!this.db) return C(new at("Database not initialized", it.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (o) => new Promise((i, n) => {
          const s = o.getAll();
          s.onsuccess = () => {
            const h = s.result.reduce((d, g, m) => (d[m] = g, d), {});
            i(h);
          }, s.onerror = () => n(new Error("Failed to export data"));
        }));
        return B(JSON.stringify(t, null, 2));
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
        })), B(void 0);
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
        })), B(void 0);
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
      if (this.initialized) return B(void 0);
      const o = await this.getPermissionStatus();
      if (o.isErr()) return C(o.error);
      if (o.value === "prompt" && t) {
        if (!await t(o.value, "permission.location.prompt")) return C(new Ct("Geolocation permission denied", gt.PERMISSION_DENIED));
        const n = await this.getPermissionStatus();
        if (n.isErr()) return C(n.error);
        if (n.value === "denied") return C(new Ct("Geolocation permission denied", gt.PERMISSION_DENIED));
      }
      try {
        return await this.injectTauriProvider(), this.initialized = true, B(void 0);
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
        return B(t.state);
      } catch (t) {
        return C(new Ct("Failed to get permission status", gt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(B("granted")), (o) => {
          o.code === o.PERMISSION_DENIED ? t(B("denied")) : t(B("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), B("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? B("denied") : C(new Ct("Failed to request permission", gt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return B(this.convertToGeolocationPosition(t));
      } catch (t) {
        return C(new Ct("Failed to get current position", gt.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await At(this.tauriHandlerName);
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
        return this.watchCallbacks.set(s, s), B(s);
      } catch (i) {
        return C(new Ct("Failed to start watching position", gt.WATCH_FAILED, i));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), B(void 0);
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
      const t = await At(this.tauriHandlerName), o = {
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
      if (this.initialized) return B(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const o = await this.initPromise;
      return o.isErr() && (this.initPromise = null), o;
    }
    async doInit(t) {
      if (this.initialized) return B(void 0);
      if (!this.isSupported()) return C(new Ct("Geolocation is not supported by this browser", gt.UNSUPPORTED));
      const o = await this.getPermissionStatus();
      if (o.isErr()) return C(o.error);
      if (o.value === "prompt" && t) {
        if (!await t(o.value, "permission.location.prompt")) return C(new Ct("Geolocation permission denied", gt.PERMISSION_DENIED));
        const n = await this.getPermissionStatus();
        if (n.isErr()) return C(n.error);
        if (n.value === "denied") return C(new Ct("Geolocation permission denied", gt.PERMISSION_DENIED));
      }
      return this.initialized = true, B(void 0);
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return B(t.state);
      } catch (t) {
        return C(new Ct("Failed to get permission status", gt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(B("granted")), (o) => {
          o.code === o.PERMISSION_DENIED ? t(B("denied")) : t(B("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: true
        });
      });
    }
    async requestPermission() {
      try {
        return (await this.getCurrentPosition()).isOk() ? B("granted") : B("denied");
      } catch (t) {
        return this.isPositionError(t) ? t.code === t.PERMISSION_DENIED ? B("denied") : B("prompt") : C(new Ct("Failed to request permission", gt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((o) => {
          t(B(o));
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
      const i = nI(), n = zc(), s = Pt("watchCompatibilityMode"), l = (o == null ? void 0 : o.highFrequency) ?? false;
      if (s || l) {
        l ? console.log("[Geolocation] High frequency mode enabled") : console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const h = Date.now();
          return this.compatibilityModeCallbacks.set(h, t), this.compatibilityIntervalId === null && (this.compatibilityIntervalId = setInterval(async () => {
            const d = await this.getCurrentPosition();
            if (d.isOk()) {
              const g = d.value, m = {
                lat: g.coords.latitude,
                lng: g.coords.longitude,
                acc: g.coords.accuracy
              }, R = Date.now();
              if (!(!l && R - this.lastCompatibilityUpdateTime > n) && !l && this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === m.lat && this.lastCompatibilityPosition.lng === m.lng && this.lastCompatibilityPosition.acc === m.acc) return;
              this.lastCompatibilityPosition = m;
              for (const A of this.compatibilityModeCallbacks.values()) try {
                A(g);
              } catch (M) {
                console.error("[Geolocation] Callback error:", M);
              }
              this.lastCompatibilityUpdateTime = R;
            }
          }, l ? i : n)), this.compatibilityModeWatches.set(h, this.compatibilityIntervalId), B(h);
        } catch (h) {
          return C(new Ct("Failed to start watching position (compatibility mode)", gt.WATCH_FAILED, h));
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
        return B(h);
      } catch (h) {
        return C(new Ct("Failed to start watching position", gt.WATCH_FAILED, h));
      }
    }
    clearWatch(t) {
      try {
        return this.compatibilityModeWatches.has(t) ? (this.compatibilityModeCallbacks.delete(t), this.compatibilityModeWatches.delete(t), this.compatibilityModeCallbacks.size === 0 && this.compatibilityIntervalId !== null && (window.clearInterval(this.compatibilityIntervalId), this.compatibilityIntervalId = null, this.lastCompatibilityPosition = null)) : navigator.geolocation.clearWatch(t), B(void 0);
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
      if (this.initialized) return B(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const o = await this.initPromise;
      return o.isErr() && (this.initPromise = null), o;
    }
    async doInit(t) {
      if (this.disposed) return C(new _e("Device orientation provider has been disposed"));
      const o = await this.requestPermissionIfNeeded(t);
      return o.isErr() ? C(o.error) : await this.checkHardwareSupport() ? (this.initialized = true, B(void 0)) : C(new _e("Device orientation is not supported by this browser"));
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
            if (!await t("prompt", "permission.device-orientation.required")) return C(new _e("User declined to grant device orientation permission"));
            if (await DeviceOrientationEvent.requestPermission() !== "granted") return C(new _e("Device orientation permission denied"));
          } else return o === "denied" ? C(new _e("Device orientation permission denied")) : B(void 0);
        }
        return B(void 0);
      } catch (o) {
        return C(new _e("Failed to request device orientation permission", void 0, o));
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
      if (this.disposed) return C(new _e("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      if (this.isWatching) return B(void 0);
      try {
        return this.orientationEventListenerCount === 0 && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.orientationEventListenerCount++, this.isWatching = true, B(void 0);
      } catch (t) {
        return C(new _e("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return B(void 0);
      try {
        return this.orientationEventListenerCount--, this.isWatching = false, this.lastReading = null, this.orientationEventListenerCount === 0 && window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), B(void 0);
      } catch (t) {
        return C(new _e("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (this.disposed) return C(new _e("Device orientation provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return B(this.lastReading);
    }
    onOrientationChange(t) {
      const o = this.nextListenerId++;
      return this.listeners.set(o, t), this.lastReading && t(this.lastReading), o;
    }
    removeEventListener(t) {
      return this.listeners.delete(t), B(void 0);
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
  function ff(e) {
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
  var De = {};
  const fI = Object.prototype.toString;
  function wr(e) {
    const t = fI.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const dI = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: wr
  }, Symbol.toStringTag, {
    value: "Module"
  })), pI = ff(dI);
  function mI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!wr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var o = t.fromIndex, i = o === void 0 ? 0 : o, n = t.toIndex, s = n === void 0 ? e.length : n;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (s <= i || s > e.length || !Number.isInteger(s)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var l = e[i], h = i + 1; h < s; h++) e[h] > l && (l = e[h]);
    return l;
  }
  function gI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!wr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var o = t.fromIndex, i = o === void 0 ? 0 : o, n = t.toIndex, s = n === void 0 ? e.length : n;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (s <= i || s > e.length || !Number.isInteger(s)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var l = e[i], h = i + 1; h < s; h++) e[h] < l && (l = e[h]);
    return l;
  }
  function TI(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (wr(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var o;
    if (t.output !== void 0) {
      if (!wr(t.output)) throw new TypeError("output option must be an array if specified");
      o = t.output;
    } else o = new Array(e.length);
    var i = gI(e), n = mI(e);
    if (i === n) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var s = t.min, l = s === void 0 ? t.autoMinMax ? i : 0 : s, h = t.max, d = h === void 0 ? t.autoMinMax ? n : 1 : h;
    if (l >= d) throw new RangeError("min option must be smaller than max option");
    for (var g = (d - l) / (n - i), m = 0; m < e.length; m++) o[m] = (e[m] - i) * g + l;
    return o;
  }
  const EI = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: TI
  }, Symbol.toStringTag, {
    value: "Module"
  })), II = ff(EI);
  var pu;
  function OI() {
    var _ce_instances, e_fn, _e2;
    if (pu) return De;
    pu = 1, Object.defineProperty(De, "__esModule", {
      value: true
    });
    var e = pI, t = II;
    const o = " ".repeat(2), i = " ".repeat(4);
    function n() {
      return s(this);
    }
    function s(p, a = {}) {
      const { maxRows: c = 15, maxColumns: r = 10, maxNumSize: u = 8, padMinus: f = "auto" } = a;
      return `${p.constructor.name} {
${o}[
${i}${l(p, c, r, u, f)}
${o}]
${o}rows: ${p.rows}
${o}columns: ${p.columns}
}`;
    }
    function l(p, a, c, r, u) {
      const { rows: f, columns: T } = p, E = Math.min(f, a), I = Math.min(T, c), O = [];
      if (u === "auto") {
        u = false;
        e: for (let L = 0; L < E; L++) for (let w = 0; w < I; w++) if (p.get(L, w) < 0) {
          u = true;
          break e;
        }
      }
      for (let L = 0; L < E; L++) {
        let w = [];
        for (let P = 0; P < I; P++) w.push(h(p.get(L, P), r, u));
        O.push(`${w.join(" ")}`);
      }
      return I !== T && (O[O.length - 1] += ` ... ${T - c} more columns`), E !== f && O.push(`... ${f - a} more rows`), O.join(`
${i}`);
    }
    function h(p, a, c) {
      return (p >= 0 && c ? ` ${d(p, a - 1)}` : d(p, a)).padEnd(a);
    }
    function d(p, a) {
      let c = p.toString();
      if (c.length <= a) return c;
      let r = p.toFixed(a);
      if (r.length > a && (r = p.toFixed(Math.max(0, a - (r.length - a)))), r.length <= a && !r.startsWith("0.000") && !r.startsWith("-0.000")) return r;
      let u = p.toExponential(a);
      return u.length > a && (u = p.toExponential(Math.max(0, a - (u.length - a)))), u.slice(0);
    }
    function g(p, a) {
      p.prototype.add = function(r) {
        return typeof r == "number" ? this.addS(r) : this.addM(r);
      }, p.prototype.addS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) + r);
        return this;
      }, p.prototype.addM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) + r.get(u, f));
        return this;
      }, p.add = function(r, u) {
        return new a(r).add(u);
      }, p.prototype.sub = function(r) {
        return typeof r == "number" ? this.subS(r) : this.subM(r);
      }, p.prototype.subS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) - r);
        return this;
      }, p.prototype.subM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) - r.get(u, f));
        return this;
      }, p.sub = function(r, u) {
        return new a(r).sub(u);
      }, p.prototype.subtract = p.prototype.sub, p.prototype.subtractS = p.prototype.subS, p.prototype.subtractM = p.prototype.subM, p.subtract = p.sub, p.prototype.mul = function(r) {
        return typeof r == "number" ? this.mulS(r) : this.mulM(r);
      }, p.prototype.mulS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) * r);
        return this;
      }, p.prototype.mulM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) * r.get(u, f));
        return this;
      }, p.mul = function(r, u) {
        return new a(r).mul(u);
      }, p.prototype.multiply = p.prototype.mul, p.prototype.multiplyS = p.prototype.mulS, p.prototype.multiplyM = p.prototype.mulM, p.multiply = p.mul, p.prototype.div = function(r) {
        return typeof r == "number" ? this.divS(r) : this.divM(r);
      }, p.prototype.divS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) / r);
        return this;
      }, p.prototype.divM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) / r.get(u, f));
        return this;
      }, p.div = function(r, u) {
        return new a(r).div(u);
      }, p.prototype.divide = p.prototype.div, p.prototype.divideS = p.prototype.divS, p.prototype.divideM = p.prototype.divM, p.divide = p.div, p.prototype.mod = function(r) {
        return typeof r == "number" ? this.modS(r) : this.modM(r);
      }, p.prototype.modS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) % r);
        return this;
      }, p.prototype.modM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) % r.get(u, f));
        return this;
      }, p.mod = function(r, u) {
        return new a(r).mod(u);
      }, p.prototype.modulus = p.prototype.mod, p.prototype.modulusS = p.prototype.modS, p.prototype.modulusM = p.prototype.modM, p.modulus = p.mod, p.prototype.and = function(r) {
        return typeof r == "number" ? this.andS(r) : this.andM(r);
      }, p.prototype.andS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) & r);
        return this;
      }, p.prototype.andM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) & r.get(u, f));
        return this;
      }, p.and = function(r, u) {
        return new a(r).and(u);
      }, p.prototype.or = function(r) {
        return typeof r == "number" ? this.orS(r) : this.orM(r);
      }, p.prototype.orS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) | r);
        return this;
      }, p.prototype.orM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) | r.get(u, f));
        return this;
      }, p.or = function(r, u) {
        return new a(r).or(u);
      }, p.prototype.xor = function(r) {
        return typeof r == "number" ? this.xorS(r) : this.xorM(r);
      }, p.prototype.xorS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) ^ r);
        return this;
      }, p.prototype.xorM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) ^ r.get(u, f));
        return this;
      }, p.xor = function(r, u) {
        return new a(r).xor(u);
      }, p.prototype.leftShift = function(r) {
        return typeof r == "number" ? this.leftShiftS(r) : this.leftShiftM(r);
      }, p.prototype.leftShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) << r);
        return this;
      }, p.prototype.leftShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) << r.get(u, f));
        return this;
      }, p.leftShift = function(r, u) {
        return new a(r).leftShift(u);
      }, p.prototype.signPropagatingRightShift = function(r) {
        return typeof r == "number" ? this.signPropagatingRightShiftS(r) : this.signPropagatingRightShiftM(r);
      }, p.prototype.signPropagatingRightShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) >> r);
        return this;
      }, p.prototype.signPropagatingRightShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) >> r.get(u, f));
        return this;
      }, p.signPropagatingRightShift = function(r, u) {
        return new a(r).signPropagatingRightShift(u);
      }, p.prototype.rightShift = function(r) {
        return typeof r == "number" ? this.rightShiftS(r) : this.rightShiftM(r);
      }, p.prototype.rightShiftS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) >>> r);
        return this;
      }, p.prototype.rightShiftM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) >>> r.get(u, f));
        return this;
      }, p.rightShift = function(r, u) {
        return new a(r).rightShift(u);
      }, p.prototype.zeroFillRightShift = p.prototype.rightShift, p.prototype.zeroFillRightShiftS = p.prototype.rightShiftS, p.prototype.zeroFillRightShiftM = p.prototype.rightShiftM, p.zeroFillRightShift = p.rightShift, p.prototype.not = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, ~this.get(r, u));
        return this;
      }, p.not = function(r) {
        return new a(r).not();
      }, p.prototype.abs = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.abs(this.get(r, u)));
        return this;
      }, p.abs = function(r) {
        return new a(r).abs();
      }, p.prototype.acos = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.acos(this.get(r, u)));
        return this;
      }, p.acos = function(r) {
        return new a(r).acos();
      }, p.prototype.acosh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.acosh(this.get(r, u)));
        return this;
      }, p.acosh = function(r) {
        return new a(r).acosh();
      }, p.prototype.asin = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.asin(this.get(r, u)));
        return this;
      }, p.asin = function(r) {
        return new a(r).asin();
      }, p.prototype.asinh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.asinh(this.get(r, u)));
        return this;
      }, p.asinh = function(r) {
        return new a(r).asinh();
      }, p.prototype.atan = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.atan(this.get(r, u)));
        return this;
      }, p.atan = function(r) {
        return new a(r).atan();
      }, p.prototype.atanh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.atanh(this.get(r, u)));
        return this;
      }, p.atanh = function(r) {
        return new a(r).atanh();
      }, p.prototype.cbrt = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cbrt(this.get(r, u)));
        return this;
      }, p.cbrt = function(r) {
        return new a(r).cbrt();
      }, p.prototype.ceil = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.ceil(this.get(r, u)));
        return this;
      }, p.ceil = function(r) {
        return new a(r).ceil();
      }, p.prototype.clz32 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.clz32(this.get(r, u)));
        return this;
      }, p.clz32 = function(r) {
        return new a(r).clz32();
      }, p.prototype.cos = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cos(this.get(r, u)));
        return this;
      }, p.cos = function(r) {
        return new a(r).cos();
      }, p.prototype.cosh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.cosh(this.get(r, u)));
        return this;
      }, p.cosh = function(r) {
        return new a(r).cosh();
      }, p.prototype.exp = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.exp(this.get(r, u)));
        return this;
      }, p.exp = function(r) {
        return new a(r).exp();
      }, p.prototype.expm1 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.expm1(this.get(r, u)));
        return this;
      }, p.expm1 = function(r) {
        return new a(r).expm1();
      }, p.prototype.floor = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.floor(this.get(r, u)));
        return this;
      }, p.floor = function(r) {
        return new a(r).floor();
      }, p.prototype.fround = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.fround(this.get(r, u)));
        return this;
      }, p.fround = function(r) {
        return new a(r).fround();
      }, p.prototype.log = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log(this.get(r, u)));
        return this;
      }, p.log = function(r) {
        return new a(r).log();
      }, p.prototype.log1p = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log1p(this.get(r, u)));
        return this;
      }, p.log1p = function(r) {
        return new a(r).log1p();
      }, p.prototype.log10 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log10(this.get(r, u)));
        return this;
      }, p.log10 = function(r) {
        return new a(r).log10();
      }, p.prototype.log2 = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.log2(this.get(r, u)));
        return this;
      }, p.log2 = function(r) {
        return new a(r).log2();
      }, p.prototype.round = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.round(this.get(r, u)));
        return this;
      }, p.round = function(r) {
        return new a(r).round();
      }, p.prototype.sign = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sign(this.get(r, u)));
        return this;
      }, p.sign = function(r) {
        return new a(r).sign();
      }, p.prototype.sin = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sin(this.get(r, u)));
        return this;
      }, p.sin = function(r) {
        return new a(r).sin();
      }, p.prototype.sinh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sinh(this.get(r, u)));
        return this;
      }, p.sinh = function(r) {
        return new a(r).sinh();
      }, p.prototype.sqrt = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.sqrt(this.get(r, u)));
        return this;
      }, p.sqrt = function(r) {
        return new a(r).sqrt();
      }, p.prototype.tan = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.tan(this.get(r, u)));
        return this;
      }, p.tan = function(r) {
        return new a(r).tan();
      }, p.prototype.tanh = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.tanh(this.get(r, u)));
        return this;
      }, p.tanh = function(r) {
        return new a(r).tanh();
      }, p.prototype.trunc = function() {
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.set(r, u, Math.trunc(this.get(r, u)));
        return this;
      }, p.trunc = function(r) {
        return new a(r).trunc();
      }, p.pow = function(r, u) {
        return new a(r).pow(u);
      }, p.prototype.pow = function(r) {
        return typeof r == "number" ? this.powS(r) : this.powM(r);
      }, p.prototype.powS = function(r) {
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) ** r);
        return this;
      }, p.prototype.powM = function(r) {
        if (r = a.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let u = 0; u < this.rows; u++) for (let f = 0; f < this.columns; f++) this.set(u, f, this.get(u, f) ** r.get(u, f));
        return this;
      };
    }
    function m(p, a, c) {
      let r = c ? p.rows : p.rows - 1;
      if (a < 0 || a > r) throw new RangeError("Row index out of range");
    }
    function R(p, a, c) {
      let r = c ? p.columns : p.columns - 1;
      if (a < 0 || a > r) throw new RangeError("Column index out of range");
    }
    function N(p, a) {
      if (a.to1DArray && (a = a.to1DArray()), a.length !== p.columns) throw new RangeError("vector size must be the same as the number of columns");
      return a;
    }
    function A(p, a) {
      if (a.to1DArray && (a = a.to1DArray()), a.length !== p.rows) throw new RangeError("vector size must be the same as the number of rows");
      return a;
    }
    function M(p, a) {
      if (!e.isAnyArray(a)) throw new TypeError("row indices must be an array");
      for (let c = 0; c < a.length; c++) if (a[c] < 0 || a[c] >= p.rows) throw new RangeError("row indices are out of range");
    }
    function D(p, a) {
      if (!e.isAnyArray(a)) throw new TypeError("column indices must be an array");
      for (let c = 0; c < a.length; c++) if (a[c] < 0 || a[c] >= p.columns) throw new RangeError("column indices are out of range");
    }
    function ne(p, a, c, r, u) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (Z("startRow", a), Z("endRow", c), Z("startColumn", r), Z("endColumn", u), a > c || r > u || a < 0 || a >= p.rows || c < 0 || c >= p.rows || r < 0 || r >= p.columns || u < 0 || u >= p.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function ee(p, a = 0) {
      let c = [];
      for (let r = 0; r < p; r++) c.push(a);
      return c;
    }
    function Z(p, a) {
      if (typeof a != "number") throw new TypeError(`${p} must be a number`);
    }
    function Y(p) {
      if (p.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function _(p) {
      let a = ee(p.rows);
      for (let c = 0; c < p.rows; ++c) for (let r = 0; r < p.columns; ++r) a[c] += p.get(c, r);
      return a;
    }
    function re(p) {
      let a = ee(p.columns);
      for (let c = 0; c < p.rows; ++c) for (let r = 0; r < p.columns; ++r) a[r] += p.get(c, r);
      return a;
    }
    function ge(p) {
      let a = 0;
      for (let c = 0; c < p.rows; c++) for (let r = 0; r < p.columns; r++) a += p.get(c, r);
      return a;
    }
    function se(p) {
      let a = ee(p.rows, 1);
      for (let c = 0; c < p.rows; ++c) for (let r = 0; r < p.columns; ++r) a[c] *= p.get(c, r);
      return a;
    }
    function de(p) {
      let a = ee(p.columns, 1);
      for (let c = 0; c < p.rows; ++c) for (let r = 0; r < p.columns; ++r) a[r] *= p.get(c, r);
      return a;
    }
    function ie(p) {
      let a = 1;
      for (let c = 0; c < p.rows; c++) for (let r = 0; r < p.columns; r++) a *= p.get(c, r);
      return a;
    }
    function Te(p, a, c) {
      const r = p.rows, u = p.columns, f = [];
      for (let T = 0; T < r; T++) {
        let E = 0, I = 0, O = 0;
        for (let L = 0; L < u; L++) O = p.get(T, L) - c[T], E += O, I += O * O;
        a ? f.push((I - E * E / u) / (u - 1)) : f.push((I - E * E / u) / u);
      }
      return f;
    }
    function Ce(p, a, c) {
      const r = p.rows, u = p.columns, f = [];
      for (let T = 0; T < u; T++) {
        let E = 0, I = 0, O = 0;
        for (let L = 0; L < r; L++) O = p.get(L, T) - c[T], E += O, I += O * O;
        a ? f.push((I - E * E / r) / (r - 1)) : f.push((I - E * E / r) / r);
      }
      return f;
    }
    function pe(p, a, c) {
      const r = p.rows, u = p.columns, f = r * u;
      let T = 0, E = 0, I = 0;
      for (let O = 0; O < r; O++) for (let L = 0; L < u; L++) I = p.get(O, L) - c, T += I, E += I * I;
      return a ? (E - T * T / f) / (f - 1) : (E - T * T / f) / f;
    }
    function Be(p, a) {
      for (let c = 0; c < p.rows; c++) for (let r = 0; r < p.columns; r++) p.set(c, r, p.get(c, r) - a[c]);
    }
    function It(p, a) {
      for (let c = 0; c < p.rows; c++) for (let r = 0; r < p.columns; r++) p.set(c, r, p.get(c, r) - a[r]);
    }
    function oo(p, a) {
      for (let c = 0; c < p.rows; c++) for (let r = 0; r < p.columns; r++) p.set(c, r, p.get(c, r) - a);
    }
    function Je(p) {
      const a = [];
      for (let c = 0; c < p.rows; c++) {
        let r = 0;
        for (let u = 0; u < p.columns; u++) r += p.get(c, u) ** 2 / (p.columns - 1);
        a.push(Math.sqrt(r));
      }
      return a;
    }
    function He(p, a) {
      for (let c = 0; c < p.rows; c++) for (let r = 0; r < p.columns; r++) p.set(c, r, p.get(c, r) / a[c]);
    }
    function Ve(p) {
      const a = [];
      for (let c = 0; c < p.columns; c++) {
        let r = 0;
        for (let u = 0; u < p.rows; u++) r += p.get(u, c) ** 2 / (p.rows - 1);
        a.push(Math.sqrt(r));
      }
      return a;
    }
    function Go(p, a) {
      for (let c = 0; c < p.rows; c++) for (let r = 0; r < p.columns; r++) p.set(c, r, p.get(c, r) / a[r]);
    }
    function cn(p) {
      const a = p.size - 1;
      let c = 0;
      for (let r = 0; r < p.columns; r++) for (let u = 0; u < p.rows; u++) c += p.get(u, r) ** 2 / a;
      return Math.sqrt(c);
    }
    function Bo(p, a) {
      for (let c = 0; c < p.rows; c++) for (let r = 0; r < p.columns; r++) p.set(c, r, p.get(c, r) / a);
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
        let E = f - u, I = new ce(a, c);
        for (let O = 0; O < a; O++) for (let L = 0; L < c; L++) {
          let w = u + Math.round(T() * E);
          I.set(O, L, w);
        }
        return I;
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
              for (let I = r + 1; I < a.columns; I++) a.set(T, I, a.get(T, I) - a.get(c, I) * E);
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
            let I = a.get(E, f);
            for (let O = f; O < c; O++) {
              let L = a.get(E, O) - I * a.get(u, O);
              a.set(E, O, L);
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
        m(this, a);
        let c = [];
        for (let r = 0; r < this.columns; r++) c.push(this.get(a, r));
        return c;
      }
      getRowVector(a) {
        return ce.rowVector(this.getRow(a));
      }
      setRow(a, c) {
        m(this, a), c = N(this, c);
        for (let r = 0; r < this.columns; r++) this.set(a, r, c[r]);
        return this;
      }
      swapRows(a, c) {
        m(this, a), m(this, c);
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
        R(this, a), c = A(this, c);
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
        a = A(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) + a[c]);
        return this;
      }
      subColumnVector(a) {
        a = A(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) - a[c]);
        return this;
      }
      mulColumnVector(a) {
        a = A(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) * a[c]);
        return this;
      }
      divColumnVector(a) {
        a = A(this, a);
        for (let c = 0; c < this.rows; c++) for (let r = 0; r < this.columns; r++) this.set(c, r, this.get(c, r) / a[c]);
        return this;
      }
      mulRow(a, c) {
        m(this, a);
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
        Y(this);
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
        Y(this);
        let a = this.get(0, 0), c = [
          0,
          0
        ];
        for (let r = 0; r < this.rows; r++) for (let u = 0; u < this.columns; u++) this.get(r, u) < a && (a = this.get(r, u), c[0] = r, c[1] = u);
        return c;
      }
      maxRow(a) {
        if (m(this, a), this.isEmpty()) return NaN;
        let c = this.get(a, 0);
        for (let r = 1; r < this.columns; r++) this.get(a, r) > c && (c = this.get(a, r));
        return c;
      }
      maxRowIndex(a) {
        m(this, a), Y(this);
        let c = this.get(a, 0), r = [
          a,
          0
        ];
        for (let u = 1; u < this.columns; u++) this.get(a, u) > c && (c = this.get(a, u), r[1] = u);
        return r;
      }
      minRow(a) {
        if (m(this, a), this.isEmpty()) return NaN;
        let c = this.get(a, 0);
        for (let r = 1; r < this.columns; r++) this.get(a, r) < c && (c = this.get(a, r));
        return c;
      }
      minRowIndex(a) {
        m(this, a), Y(this);
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
        R(this, a), Y(this);
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
        R(this, a), Y(this);
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
          for (let I = 0; I < r; I++) T[I] = a.get(I, E);
          for (let I = 0; I < c; I++) {
            let O = 0;
            for (let L = 0; L < r; L++) O += this.get(I, L) * T[L];
            f.set(I, E, O);
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
        const r = this.get(0, 0), u = a.get(0, 0), f = this.get(0, 1), T = a.get(0, 1), E = this.get(1, 0), I = a.get(1, 0), O = this.get(1, 1), L = a.get(1, 1), w = (r + O) * (u + L), P = (E + O) * u, oe = r * (T - L), H = O * (I - u), k = (r + f) * L, he = (E - r) * (u + T), S = (f - O) * (I + L), te = w + H - k + S, me = oe + k, Ne = P + H, ve = w - P + oe + he;
        return c.set(0, 0, te), c.set(0, 1, me), c.set(1, 0, Ne), c.set(1, 1, ve), c;
      }
      strassen3x3(a) {
        a = ce.checkMatrix(a);
        let c = new ce(3, 3);
        const r = this.get(0, 0), u = this.get(0, 1), f = this.get(0, 2), T = this.get(1, 0), E = this.get(1, 1), I = this.get(1, 2), O = this.get(2, 0), L = this.get(2, 1), w = this.get(2, 2), P = a.get(0, 0), oe = a.get(0, 1), H = a.get(0, 2), k = a.get(1, 0), he = a.get(1, 1), S = a.get(1, 2), te = a.get(2, 0), me = a.get(2, 1), Ne = a.get(2, 2), ve = (r + u + f - T - E - L - w) * he, nt = (r - T) * (-oe + he), Oe = E * (-P + oe + k - he - S - te + Ne), ye = (-r + T + E) * (P - oe + he), qe = (T + E) * (-P + oe), b = r * P, x = (-r + O + L) * (P - H + S), fe = (-r + O) * (H - S), X = (O + L) * (-P + H), rt = (r + u + f - E - I - O - L) * S, ze = L * (-P + H + k - he - S - te + me), tt = (-f + L + w) * (he + te - me), st = (f - w) * (he - me), bt = f * te, Oo = (L + w) * (-te + me), yt = (-f + E + I) * (S + te - Ne), Lo = (f - I) * (S - Ne), Yo = (E + I) * (-te + Ne), Fe = u * k, vt = I * me, no = T * H, ro = O * oe, St = w * Ne, Gp = b + bt + Fe, Bp = ve + ye + qe + b + tt + bt + Oo, jp = b + x + X + rt + bt + yt + Yo, Yp = nt + Oe + ye + b + bt + yt + Lo, xp = nt + ye + qe + b + vt, zp = bt + yt + Lo + Yo + no, $p = b + x + fe + ze + tt + st + bt, Vp = tt + st + bt + Oo + ro, Zp = b + x + fe + X + St;
        return c.set(0, 0, Gp), c.set(0, 1, Bp), c.set(0, 2, jp), c.set(1, 0, Yp), c.set(1, 1, xp), c.set(1, 2, zp), c.set(2, 0, $p), c.set(2, 1, Vp), c.set(2, 2, Zp), c;
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
        let I = Math.max(r, f), O = Math.max(u, T);
        c = E(c, I, O), a = E(a, I, O);
        function L(w, P, oe, H) {
          if (oe <= 512 || H <= 512) return w.mmul(P);
          oe % 2 === 1 && H % 2 === 1 ? (w = E(w, oe + 1, H + 1), P = E(P, oe + 1, H + 1)) : oe % 2 === 1 ? (w = E(w, oe + 1, H), P = E(P, oe + 1, H)) : H % 2 === 1 && (w = E(w, oe, H + 1), P = E(P, oe, H + 1));
          let k = parseInt(w.rows / 2, 10), he = parseInt(w.columns / 2, 10), S = w.subMatrix(0, k - 1, 0, he - 1), te = P.subMatrix(0, k - 1, 0, he - 1), me = w.subMatrix(0, k - 1, he, w.columns - 1), Ne = P.subMatrix(0, k - 1, he, P.columns - 1), ve = w.subMatrix(k, w.rows - 1, 0, he - 1), nt = P.subMatrix(k, P.rows - 1, 0, he - 1), Oe = w.subMatrix(k, w.rows - 1, he, w.columns - 1), ye = P.subMatrix(k, P.rows - 1, he, P.columns - 1), qe = L(we.add(S, Oe), we.add(te, ye), k, he), b = L(we.add(ve, Oe), te, k, he), x = L(S, we.sub(Ne, ye), k, he), fe = L(Oe, we.sub(nt, te), k, he), X = L(we.add(S, me), ye, k, he), rt = L(we.sub(ve, S), we.add(te, Ne), k, he), ze = L(we.sub(me, Oe), we.add(nt, ye), k, he), tt = we.add(qe, fe);
          tt.sub(X), tt.add(ze);
          let st = we.add(x, X), bt = we.add(b, fe), Oo = we.sub(qe, b);
          Oo.add(x), Oo.add(rt);
          let yt = we.zeros(2 * tt.rows, 2 * tt.columns);
          return yt = yt.setSubMatrix(tt, 0, 0), yt = yt.setSubMatrix(st, tt.rows, 0), yt = yt.setSubMatrix(bt, 0, tt.columns), yt = yt.setSubMatrix(Oo, tt.rows, tt.columns), yt.subMatrix(0, oe - 1, 0, H - 1);
        }
        return L(c, a, I, O);
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
        for (let E = 0; E < c; E++) for (let I = 0; I < r; I++) for (let O = 0; O < u; O++) for (let L = 0; L < f; L++) T.set(u * E + O, f * I + L, this.get(E, I) * a.get(O, L));
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
      sortRows(a = xn) {
        for (let c = 0; c < this.rows; c++) this.setRow(c, this.getRow(c).sort(a));
        return this;
      }
      sortColumns(a = xn) {
        for (let c = 0; c < this.columns; c++) this.setColumn(c, this.getColumn(c).sort(a));
        return this;
      }
      subMatrix(a, c, r, u) {
        ne(this, a, c, r, u);
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
        ne(this, c, u, r, f);
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
            return Be(this, r), this;
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
            return He(this, r), this;
          }
          case "column": {
            if (r === void 0) r = Ve(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Go(this, r), this;
          }
          case void 0: {
            if (r === void 0) r = cn(this);
            else if (typeof r != "number") throw new TypeError("scale must be a number");
            return Bo(this, r), this;
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
    function xn(p, a) {
      return p - a;
    }
    function ya(p) {
      return p.every((a) => typeof a == "number");
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
            if (!ya(r[u])) throw new TypeError("Input data contains non-numeric values");
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
        return m(this, a), this.data.splice(a, 1), this.rows -= 1, this;
      }
      addRow(a, c) {
        return c === void 0 && (c = a, a = this.rows), m(this, a, true), c = Float64Array.from(N(this, c)), this.data.splice(a, 0, c), this.rows += 1, this;
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
        typeof c > "u" && (c = a, a = this.columns), R(this, a, true), c = A(this, c);
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
    g(we, ce);
    const _qt = class _qt extends we {
      constructor(a) {
        super();
        __privateAdd(this, _e2);
        if (ce.isMatrix(a)) {
          if (!a.isSymmetric()) throw new TypeError("not symmetric data");
          __privateSet(this, _e2, ce.copy(a, new ce(a.rows, a.rows)));
        } else if (Number.isInteger(a) && a >= 0) __privateSet(this, _e2, new ce(a, a));
        else if (__privateSet(this, _e2, new ce(a)), !this.isSymmetric()) throw new TypeError("not symmetric data");
      }
      get size() {
        return __privateGet(this, _e2).size;
      }
      get rows() {
        return __privateGet(this, _e2).rows;
      }
      get columns() {
        return __privateGet(this, _e2).columns;
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
        const a = new _qt(this.diagonalSize);
        for (const [c, r, u] of this.upperRightEntries()) a.set(c, r, u);
        return a;
      }
      toMatrix() {
        return new ce(this);
      }
      get(a, c) {
        return __privateGet(this, _e2).get(a, c);
      }
      set(a, c, r) {
        return __privateGet(this, _e2).set(a, c, r), __privateGet(this, _e2).set(c, a, r), this;
      }
      removeCross(a) {
        return __privateGet(this, _e2).removeRow(a), __privateGet(this, _e2).removeColumn(a), this;
      }
      addCross(a, c) {
        c === void 0 && (c = a, a = this.diagonalSize);
        const r = c.slice();
        return r.splice(a, 1), __privateGet(this, _e2).addRow(a, r), __privateGet(this, _e2).addColumn(a, c), this;
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
        const u = new _qt(r);
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
    _e2 = new WeakMap();
    let qt = _qt;
    qt.prototype.klassType = "SymmetricMatrix";
    class jo extends qt {
      static isDistanceMatrix(a) {
        return qt.isSymmetricMatrix(a) && a.klassSubType === "DistanceMatrix";
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
        return new qt(this);
      }
      clone() {
        const a = new jo(this.diagonalSize);
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
    jo.prototype.klassSubType = "DistanceMatrix";
    class io extends we {
      constructor(a, c, r) {
        super(), this.matrix = a, this.rows = c, this.columns = r;
      }
    }
    class _r extends io {
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
    class Wi extends io {
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
    class yl extends io {
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
    class y extends io {
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
    class v extends io {
      constructor(a, c) {
        m(a, c), super(a, 1, a.columns), this.row = c;
      }
      set(a, c, r) {
        return this.matrix.set(this.row, c, r), this;
      }
      get(a, c) {
        return this.matrix.get(this.row, c);
      }
    }
    class F extends io {
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
        M(a, c), D(a, r), super(a, c.length, r.length), this.rowIndices = c, this.columnIndices = r;
      }
      set(a, c, r) {
        return this.matrix.set(this.rowIndices[a], this.columnIndices[c], r), this;
      }
      get(a, c) {
        return this.matrix.get(this.rowIndices[a], this.columnIndices[c]);
      }
    }
    class q extends io {
      constructor(a, c, r, u, f) {
        ne(a, c, r, u, f), super(a, r - c + 1, f - u + 1), this.startRow = c, this.startColumn = u;
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
    class Q extends we {
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
    function ae(p, a) {
      if (e.isAnyArray(p)) return p[0] && e.isAnyArray(p[0]) ? new Q(p) : new le(p, a);
      throw new Error("the argument is not an array");
    }
    class V {
      constructor(a) {
        a = Q.checkMatrix(a);
        let c = a.clone(), r = c.rows, u = c.columns, f = new Float64Array(r), T = 1, E, I, O, L, w, P, oe, H, k;
        for (E = 0; E < r; E++) f[E] = E;
        for (H = new Float64Array(r), I = 0; I < u; I++) {
          for (E = 0; E < r; E++) H[E] = c.get(E, I);
          for (E = 0; E < r; E++) {
            for (k = Math.min(E, I), w = 0, O = 0; O < k; O++) w += c.get(E, O) * H[O];
            H[E] -= w, c.set(E, I, H[E]);
          }
          for (L = I, E = I + 1; E < r; E++) Math.abs(H[E]) > Math.abs(H[L]) && (L = E);
          if (L !== I) {
            for (O = 0; O < u; O++) P = c.get(L, O), c.set(L, O, c.get(I, O)), c.set(I, O, P);
            oe = f[L], f[L] = f[I], f[I] = oe, T = -T;
          }
          if (I < r && c.get(I, I) !== 0) for (E = I + 1; E < r; E++) c.set(E, I, c.get(E, I) / c.get(I, I));
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
        let u = a.columns, f = a.subMatrixRow(this.pivotVector, 0, u - 1), T = c.columns, E, I, O;
        for (O = 0; O < T; O++) for (E = O + 1; E < T; E++) for (I = 0; I < u; I++) f.set(E, I, f.get(E, I) - f.get(O, I) * c.get(E, O));
        for (O = T - 1; O >= 0; O--) {
          for (I = 0; I < u; I++) f.set(O, I, f.get(O, I) / c.get(O, O));
          for (E = 0; E < O; E++) for (I = 0; I < u; I++) f.set(E, I, f.get(E, I) - f.get(O, I) * c.get(E, O));
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
    function Ee(p, a) {
      let c = 0;
      return Math.abs(p) > Math.abs(a) ? (c = a / p, Math.abs(p) * Math.sqrt(1 + c * c)) : a !== 0 ? (c = p / a, Math.abs(a) * Math.sqrt(1 + c * c)) : 0;
    }
    class ue {
      constructor(a) {
        a = Q.checkMatrix(a);
        let c = a.clone(), r = a.rows, u = a.columns, f = new Float64Array(u), T, E, I, O;
        for (I = 0; I < u; I++) {
          let L = 0;
          for (T = I; T < r; T++) L = Ee(L, c.get(T, I));
          if (L !== 0) {
            for (c.get(I, I) < 0 && (L = -L), T = I; T < r; T++) c.set(T, I, c.get(T, I) / L);
            for (c.set(I, I, c.get(I, I) + 1), E = I + 1; E < u; E++) {
              for (O = 0, T = I; T < r; T++) O += c.get(T, I) * c.get(T, E);
              for (O = -O / c.get(I, I), T = I; T < r; T++) c.set(T, E, c.get(T, E) + O * c.get(T, I));
            }
          }
          f[I] = -L;
        }
        this.QR = c, this.Rdiag = f;
      }
      solve(a) {
        a = ce.checkMatrix(a);
        let c = this.QR, r = c.rows;
        if (a.rows !== r) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let u = a.columns, f = a.clone(), T = c.columns, E, I, O, L;
        for (O = 0; O < T; O++) for (I = 0; I < u; I++) {
          for (L = 0, E = O; E < r; E++) L += c.get(E, O) * f.get(E, I);
          for (L = -L / c.get(O, O), E = O; E < r; E++) f.set(E, I, f.get(E, I) + L * c.get(E, O));
        }
        for (O = T - 1; O >= 0; O--) {
          for (I = 0; I < u; I++) f.set(O, I, f.get(O, I) / this.Rdiag[O]);
          for (E = 0; E < O; E++) for (I = 0; I < u; I++) f.set(E, I, f.get(E, I) - f.get(O, I) * c.get(E, O));
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
        let a = this.QR, c = a.rows, r = a.columns, u = new ce(c, r), f, T, E, I;
        for (E = r - 1; E >= 0; E--) {
          for (f = 0; f < c; f++) u.set(f, E, 0);
          for (u.set(E, E, 1), T = E; T < r; T++) if (a.get(E, E) !== 0) {
            for (I = 0, f = E; f < c; f++) I += a.get(f, E) * u.get(f, T);
            for (I = -I / a.get(E, E), f = E; f < c; f++) u.set(f, T, u.get(f, T) + I * a.get(f, E));
          }
        }
        return u;
      }
    }
    class Ie {
      constructor(a, c = {}) {
        if (a = Q.checkMatrix(a), a.isEmpty()) throw new Error("Matrix must be non-empty");
        let r = a.rows, u = a.columns;
        const { computeLeftSingularVectors: f = true, computeRightSingularVectors: T = true, autoTranspose: E = false } = c;
        let I = !!f, O = !!T, L = false, w;
        if (r < u) if (!E) w = a.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          w = a.transpose(), r = w.rows, u = w.columns, L = true;
          let b = I;
          I = O, O = b;
        }
        else w = a.clone();
        let P = Math.min(r, u), oe = Math.min(r + 1, u), H = new Float64Array(oe), k = new ce(r, P), he = new ce(u, u), S = new Float64Array(u), te = new Float64Array(r), me = new Float64Array(oe);
        for (let b = 0; b < oe; b++) me[b] = b;
        let Ne = Math.min(r - 1, u), ve = Math.max(0, Math.min(u - 2, r)), nt = Math.max(Ne, ve);
        for (let b = 0; b < nt; b++) {
          if (b < Ne) {
            H[b] = 0;
            for (let x = b; x < r; x++) H[b] = Ee(H[b], w.get(x, b));
            if (H[b] !== 0) {
              w.get(b, b) < 0 && (H[b] = -H[b]);
              for (let x = b; x < r; x++) w.set(x, b, w.get(x, b) / H[b]);
              w.set(b, b, w.get(b, b) + 1);
            }
            H[b] = -H[b];
          }
          for (let x = b + 1; x < u; x++) {
            if (b < Ne && H[b] !== 0) {
              let fe = 0;
              for (let X = b; X < r; X++) fe += w.get(X, b) * w.get(X, x);
              fe = -fe / w.get(b, b);
              for (let X = b; X < r; X++) w.set(X, x, w.get(X, x) + fe * w.get(X, b));
            }
            S[x] = w.get(b, x);
          }
          if (I && b < Ne) for (let x = b; x < r; x++) k.set(x, b, w.get(x, b));
          if (b < ve) {
            S[b] = 0;
            for (let x = b + 1; x < u; x++) S[b] = Ee(S[b], S[x]);
            if (S[b] !== 0) {
              S[b + 1] < 0 && (S[b] = 0 - S[b]);
              for (let x = b + 1; x < u; x++) S[x] /= S[b];
              S[b + 1] += 1;
            }
            if (S[b] = -S[b], b + 1 < r && S[b] !== 0) {
              for (let x = b + 1; x < r; x++) te[x] = 0;
              for (let x = b + 1; x < r; x++) for (let fe = b + 1; fe < u; fe++) te[x] += S[fe] * w.get(x, fe);
              for (let x = b + 1; x < u; x++) {
                let fe = -S[x] / S[b + 1];
                for (let X = b + 1; X < r; X++) w.set(X, x, w.get(X, x) + fe * te[X]);
              }
            }
            if (O) for (let x = b + 1; x < u; x++) he.set(x, b, S[x]);
          }
        }
        let Oe = Math.min(u, r + 1);
        if (Ne < u && (H[Ne] = w.get(Ne, Ne)), r < Oe && (H[Oe - 1] = 0), ve + 1 < Oe && (S[ve] = w.get(ve, Oe - 1)), S[Oe - 1] = 0, I) {
          for (let b = Ne; b < P; b++) {
            for (let x = 0; x < r; x++) k.set(x, b, 0);
            k.set(b, b, 1);
          }
          for (let b = Ne - 1; b >= 0; b--) if (H[b] !== 0) {
            for (let x = b + 1; x < P; x++) {
              let fe = 0;
              for (let X = b; X < r; X++) fe += k.get(X, b) * k.get(X, x);
              fe = -fe / k.get(b, b);
              for (let X = b; X < r; X++) k.set(X, x, k.get(X, x) + fe * k.get(X, b));
            }
            for (let x = b; x < r; x++) k.set(x, b, -k.get(x, b));
            k.set(b, b, 1 + k.get(b, b));
            for (let x = 0; x < b - 1; x++) k.set(x, b, 0);
          } else {
            for (let x = 0; x < r; x++) k.set(x, b, 0);
            k.set(b, b, 1);
          }
        }
        if (O) for (let b = u - 1; b >= 0; b--) {
          if (b < ve && S[b] !== 0) for (let x = b + 1; x < u; x++) {
            let fe = 0;
            for (let X = b + 1; X < u; X++) fe += he.get(X, b) * he.get(X, x);
            fe = -fe / he.get(b + 1, b);
            for (let X = b + 1; X < u; X++) he.set(X, x, he.get(X, x) + fe * he.get(X, b));
          }
          for (let x = 0; x < u; x++) he.set(x, b, 0);
          he.set(b, b, 1);
        }
        let ye = Oe - 1, qe = Number.EPSILON;
        for (; Oe > 0; ) {
          let b, x;
          for (b = Oe - 2; b >= -1 && b !== -1; b--) {
            const fe = Number.MIN_VALUE + qe * Math.abs(H[b] + Math.abs(H[b + 1]));
            if (Math.abs(S[b]) <= fe || Number.isNaN(S[b])) {
              S[b] = 0;
              break;
            }
          }
          if (b === Oe - 2) x = 4;
          else {
            let fe;
            for (fe = Oe - 1; fe >= b && fe !== b; fe--) {
              let X = (fe !== Oe ? Math.abs(S[fe]) : 0) + (fe !== b + 1 ? Math.abs(S[fe - 1]) : 0);
              if (Math.abs(H[fe]) <= qe * X) {
                H[fe] = 0;
                break;
              }
            }
            fe === b ? x = 3 : fe === Oe - 1 ? x = 1 : (x = 2, b = fe);
          }
          switch (b++, x) {
            case 1: {
              let fe = S[Oe - 2];
              S[Oe - 2] = 0;
              for (let X = Oe - 2; X >= b; X--) {
                let rt = Ee(H[X], fe), ze = H[X] / rt, tt = fe / rt;
                if (H[X] = rt, X !== b && (fe = -tt * S[X - 1], S[X - 1] = ze * S[X - 1]), O) for (let st = 0; st < u; st++) rt = ze * he.get(st, X) + tt * he.get(st, Oe - 1), he.set(st, Oe - 1, -tt * he.get(st, X) + ze * he.get(st, Oe - 1)), he.set(st, X, rt);
              }
              break;
            }
            case 2: {
              let fe = S[b - 1];
              S[b - 1] = 0;
              for (let X = b; X < Oe; X++) {
                let rt = Ee(H[X], fe), ze = H[X] / rt, tt = fe / rt;
                if (H[X] = rt, fe = -tt * S[X], S[X] = ze * S[X], I) for (let st = 0; st < r; st++) rt = ze * k.get(st, X) + tt * k.get(st, b - 1), k.set(st, b - 1, -tt * k.get(st, X) + ze * k.get(st, b - 1)), k.set(st, X, rt);
              }
              break;
            }
            case 3: {
              const fe = Math.max(Math.abs(H[Oe - 1]), Math.abs(H[Oe - 2]), Math.abs(S[Oe - 2]), Math.abs(H[b]), Math.abs(S[b])), X = H[Oe - 1] / fe, rt = H[Oe - 2] / fe, ze = S[Oe - 2] / fe, tt = H[b] / fe, st = S[b] / fe, bt = ((rt + X) * (rt - X) + ze * ze) / 2, Oo = X * ze * (X * ze);
              let yt = 0;
              (bt !== 0 || Oo !== 0) && (bt < 0 ? yt = 0 - Math.sqrt(bt * bt + Oo) : yt = Math.sqrt(bt * bt + Oo), yt = Oo / (bt + yt));
              let Lo = (tt + X) * (tt - X) + yt, Yo = tt * st;
              for (let Fe = b; Fe < Oe - 1; Fe++) {
                let vt = Ee(Lo, Yo);
                vt === 0 && (vt = Number.MIN_VALUE);
                let no = Lo / vt, ro = Yo / vt;
                if (Fe !== b && (S[Fe - 1] = vt), Lo = no * H[Fe] + ro * S[Fe], S[Fe] = no * S[Fe] - ro * H[Fe], Yo = ro * H[Fe + 1], H[Fe + 1] = no * H[Fe + 1], O) for (let St = 0; St < u; St++) vt = no * he.get(St, Fe) + ro * he.get(St, Fe + 1), he.set(St, Fe + 1, -ro * he.get(St, Fe) + no * he.get(St, Fe + 1)), he.set(St, Fe, vt);
                if (vt = Ee(Lo, Yo), vt === 0 && (vt = Number.MIN_VALUE), no = Lo / vt, ro = Yo / vt, H[Fe] = vt, Lo = no * S[Fe] + ro * H[Fe + 1], H[Fe + 1] = -ro * S[Fe] + no * H[Fe + 1], Yo = ro * S[Fe + 1], S[Fe + 1] = no * S[Fe + 1], I && Fe < r - 1) for (let St = 0; St < r; St++) vt = no * k.get(St, Fe) + ro * k.get(St, Fe + 1), k.set(St, Fe + 1, -ro * k.get(St, Fe) + no * k.get(St, Fe + 1)), k.set(St, Fe, vt);
              }
              S[Oe - 2] = Lo;
              break;
            }
            case 4: {
              if (H[b] <= 0 && (H[b] = H[b] < 0 ? -H[b] : 0, O)) for (let fe = 0; fe <= ye; fe++) he.set(fe, b, -he.get(fe, b));
              for (; b < ye && !(H[b] >= H[b + 1]); ) {
                let fe = H[b];
                if (H[b] = H[b + 1], H[b + 1] = fe, O && b < u - 1) for (let X = 0; X < u; X++) fe = he.get(X, b + 1), he.set(X, b + 1, he.get(X, b)), he.set(X, b, fe);
                if (I && b < r - 1) for (let X = 0; X < r; X++) fe = k.get(X, b + 1), k.set(X, b + 1, k.get(X, b)), k.set(X, b, fe);
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
        let T = this.U, E = this.rightSingularVectors, I = E.mmul(f), O = E.rows, L = T.rows, w = ce.zeros(O, L);
        for (let P = 0; P < O; P++) for (let oe = 0; oe < L; oe++) {
          let H = 0;
          for (let k = 0; k < u; k++) H += I.get(P, k) * T.get(oe, k);
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
        let T = this.U, E = T.rows, I = T.columns, O = new ce(r, E);
        for (let L = 0; L < r; L++) for (let w = 0; w < E; w++) {
          let P = 0;
          for (let oe = 0; oe < I; oe++) P += f.get(L, oe) * T.get(w, oe);
          O.set(L, w, P);
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
    function Ae(p, a = false) {
      return p = Q.checkMatrix(p), a ? new Ie(p).inverse() : Pe(p, ce.eye(p.rows));
    }
    function Pe(p, a, c = false) {
      return p = Q.checkMatrix(p), a = Q.checkMatrix(a), c ? new Ie(p).solve(a) : p.isSquare() ? new V(p).solve(a) : new ue(p).solve(a);
    }
    function We(p) {
      if (p = ce.checkMatrix(p), p.isSquare()) {
        if (p.columns === 0) return 1;
        let a, c, r, u;
        if (p.columns === 2) return a = p.get(0, 0), c = p.get(0, 1), r = p.get(1, 0), u = p.get(1, 1), a * u - c * r;
        if (p.columns === 3) {
          let f, T, E;
          return f = new K(p, [
            1,
            2
          ], [
            1,
            2
          ]), T = new K(p, [
            1,
            2
          ], [
            0,
            2
          ]), E = new K(p, [
            1,
            2
          ], [
            0,
            1
          ]), a = p.get(0, 0), c = p.get(0, 1), r = p.get(0, 2), a * We(f) - c * We(T) + r * We(E);
        } else return new V(p).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function Ge(p, a) {
      let c = [];
      for (let r = 0; r < p; r++) r !== a && c.push(r);
      return c;
    }
    function Ft(p, a, c, r = 1e-9, u = 1e-9) {
      if (p > u) return new Array(a.rows + 1).fill(0);
      {
        let f = a.addRow(c, [
          0
        ]);
        for (let T = 0; T < f.rows; T++) Math.abs(f.get(T, 0)) < r && f.set(T, 0, 0);
        return f.to1DArray();
      }
    }
    function _t(p, a = {}) {
      const { thresholdValue: c = 1e-9, thresholdError: r = 1e-9 } = a;
      p = ce.checkMatrix(p);
      let u = p.rows, f = new ce(u, u);
      for (let T = 0; T < u; T++) {
        let E = ce.columnVector(p.getRow(T)), I = p.subMatrixRow(Ge(u, T)).transpose(), L = new Ie(I).solve(E), w = ce.sub(E, I.mmul(L)).abs().max();
        f.setRow(T, Ft(w, L, T, c, r));
      }
      return f;
    }
    function ho(p, a = Number.EPSILON) {
      if (p = ce.checkMatrix(p), p.isEmpty()) return p.transpose();
      let c = new Ie(p, {
        autoTranspose: true
      }), r = c.leftSingularVectors, u = c.rightSingularVectors, f = c.diagonal;
      for (let T = 0; T < f.length; T++) Math.abs(f[T]) > a ? f[T] = 1 / f[T] : f[T] = 0;
      return u.mmul(ce.diag(f).mmul(r.transpose()));
    }
    function fo(p, a = p, c = {}) {
      p = new ce(p);
      let r = false;
      if (typeof a == "object" && !ce.isMatrix(a) && !e.isAnyArray(a) ? (c = a, a = p, r = true) : a = new ce(a), p.rows !== a.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: u = true } = c;
      u && (p = p.center("column"), r || (a = a.center("column")));
      const f = p.transpose().mmul(a);
      for (let T = 0; T < f.rows; T++) for (let E = 0; E < f.columns; E++) f.set(T, E, f.get(T, E) * (1 / (p.rows - 1)));
      return f;
    }
    function Gi(p, a = p, c = {}) {
      p = new ce(p);
      let r = false;
      if (typeof a == "object" && !ce.isMatrix(a) && !e.isAnyArray(a) ? (c = a, a = p, r = true) : a = new ce(a), p.rows !== a.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: u = true, scale: f = true } = c;
      u && (p.center("column"), r || a.center("column")), f && (p.scale("column"), r || a.scale("column"));
      const T = p.standardDeviation("column", {
        unbiased: true
      }), E = r ? T : a.standardDeviation("column", {
        unbiased: true
      }), I = p.transpose().mmul(a);
      for (let O = 0; O < I.rows; O++) for (let L = 0; L < I.columns; L++) I.set(O, L, I.get(O, L) * (1 / (T[O] * E[L])) * (1 / (p.rows - 1)));
      return I;
    }
    class zn {
      constructor(a, c = {}) {
        const { assumeSymmetric: r = false } = c;
        if (a = Q.checkMatrix(a), !a.isSquare()) throw new Error("Matrix is not a square matrix");
        if (a.isEmpty()) throw new Error("Matrix must be non-empty");
        let u = a.columns, f = new ce(u, u), T = new Float64Array(u), E = new Float64Array(u), I = a, O, L, w = false;
        if (r ? w = true : w = a.isSymmetric(), w) {
          for (O = 0; O < u; O++) for (L = 0; L < u; L++) f.set(O, L, I.get(O, L));
          jt(u, E, T, f), po(u, E, T, f);
        } else {
          let P = new ce(u, u), oe = new Float64Array(u);
          for (L = 0; L < u; L++) for (O = 0; O < u; O++) P.set(O, L, I.get(O, L));
          Ur(u, P, oe, f), kr(u, E, T, f, P);
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
    function jt(p, a, c, r) {
      let u, f, T, E, I, O, L, w;
      for (I = 0; I < p; I++) c[I] = r.get(p - 1, I);
      for (E = p - 1; E > 0; E--) {
        for (w = 0, T = 0, O = 0; O < E; O++) w = w + Math.abs(c[O]);
        if (w === 0) for (a[E] = c[E - 1], I = 0; I < E; I++) c[I] = r.get(E - 1, I), r.set(E, I, 0), r.set(I, E, 0);
        else {
          for (O = 0; O < E; O++) c[O] /= w, T += c[O] * c[O];
          for (u = c[E - 1], f = Math.sqrt(T), u > 0 && (f = -f), a[E] = w * f, T = T - u * f, c[E - 1] = u - f, I = 0; I < E; I++) a[I] = 0;
          for (I = 0; I < E; I++) {
            for (u = c[I], r.set(I, E, u), f = a[I] + r.get(I, I) * u, O = I + 1; O <= E - 1; O++) f += r.get(O, I) * c[O], a[O] += r.get(O, I) * u;
            a[I] = f;
          }
          for (u = 0, I = 0; I < E; I++) a[I] /= T, u += a[I] * c[I];
          for (L = u / (T + T), I = 0; I < E; I++) a[I] -= L * c[I];
          for (I = 0; I < E; I++) {
            for (u = c[I], f = a[I], O = I; O <= E - 1; O++) r.set(O, I, r.get(O, I) - (u * a[O] + f * c[O]));
            c[I] = r.get(E - 1, I), r.set(E, I, 0);
          }
        }
        c[E] = T;
      }
      for (E = 0; E < p - 1; E++) {
        if (r.set(p - 1, E, r.get(E, E)), r.set(E, E, 1), T = c[E + 1], T !== 0) {
          for (O = 0; O <= E; O++) c[O] = r.get(O, E + 1) / T;
          for (I = 0; I <= E; I++) {
            for (f = 0, O = 0; O <= E; O++) f += r.get(O, E + 1) * r.get(O, I);
            for (O = 0; O <= E; O++) r.set(O, I, r.get(O, I) - f * c[O]);
          }
        }
        for (O = 0; O <= E; O++) r.set(O, E + 1, 0);
      }
      for (I = 0; I < p; I++) c[I] = r.get(p - 1, I), r.set(p - 1, I, 0);
      r.set(p - 1, p - 1, 1), a[0] = 0;
    }
    function po(p, a, c, r) {
      let u, f, T, E, I, O, L, w, P, oe, H, k, he, S, te, me;
      for (T = 1; T < p; T++) a[T - 1] = a[T];
      a[p - 1] = 0;
      let Ne = 0, ve = 0, nt = Number.EPSILON;
      for (O = 0; O < p; O++) {
        for (ve = Math.max(ve, Math.abs(c[O]) + Math.abs(a[O])), L = O; L < p && !(Math.abs(a[L]) <= nt * ve); ) L++;
        if (L > O) do {
          for (u = c[O], w = (c[O + 1] - u) / (2 * a[O]), P = Ee(w, 1), w < 0 && (P = -P), c[O] = a[O] / (w + P), c[O + 1] = a[O] * (w + P), oe = c[O + 1], f = u - c[O], T = O + 2; T < p; T++) c[T] -= f;
          for (Ne = Ne + f, w = c[L], H = 1, k = H, he = H, S = a[O + 1], te = 0, me = 0, T = L - 1; T >= O; T--) for (he = k, k = H, me = te, u = H * a[T], f = H * w, P = Ee(w, a[T]), a[T + 1] = te * P, te = a[T] / P, H = w / P, w = H * c[T] - te * u, c[T + 1] = f + te * (H * u + te * c[T]), I = 0; I < p; I++) f = r.get(I, T + 1), r.set(I, T + 1, te * r.get(I, T) + H * f), r.set(I, T, H * r.get(I, T) - te * f);
          w = -te * me * he * S * a[O] / oe, a[O] = te * w, c[O] = H * w;
        } while (Math.abs(a[O]) > nt * ve);
        c[O] = c[O] + Ne, a[O] = 0;
      }
      for (T = 0; T < p - 1; T++) {
        for (I = T, w = c[T], E = T + 1; E < p; E++) c[E] < w && (I = E, w = c[E]);
        if (I !== T) for (c[I] = c[T], c[T] = w, E = 0; E < p; E++) w = r.get(E, T), r.set(E, T, r.get(E, I)), r.set(E, I, w);
      }
    }
    function Ur(p, a, c, r) {
      let u = 0, f = p - 1, T, E, I, O, L, w, P;
      for (w = u + 1; w <= f - 1; w++) {
        for (P = 0, O = w; O <= f; O++) P = P + Math.abs(a.get(O, w - 1));
        if (P !== 0) {
          for (I = 0, O = f; O >= w; O--) c[O] = a.get(O, w - 1) / P, I += c[O] * c[O];
          for (E = Math.sqrt(I), c[w] > 0 && (E = -E), I = I - c[w] * E, c[w] = c[w] - E, L = w; L < p; L++) {
            for (T = 0, O = f; O >= w; O--) T += c[O] * a.get(O, L);
            for (T = T / I, O = w; O <= f; O++) a.set(O, L, a.get(O, L) - T * c[O]);
          }
          for (O = 0; O <= f; O++) {
            for (T = 0, L = f; L >= w; L--) T += c[L] * a.get(O, L);
            for (T = T / I, L = w; L <= f; L++) a.set(O, L, a.get(O, L) - T * c[L]);
          }
          c[w] = P * c[w], a.set(w, w - 1, P * E);
        }
      }
      for (O = 0; O < p; O++) for (L = 0; L < p; L++) r.set(O, L, O === L ? 1 : 0);
      for (w = f - 1; w >= u + 1; w--) if (a.get(w, w - 1) !== 0) {
        for (O = w + 1; O <= f; O++) c[O] = a.get(O, w - 1);
        for (L = w; L <= f; L++) {
          for (E = 0, O = w; O <= f; O++) E += c[O] * r.get(O, L);
          for (E = E / c[w] / a.get(w, w - 1), O = w; O <= f; O++) r.set(O, L, r.get(O, L) + E * c[O]);
        }
      }
    }
    function kr(p, a, c, r, u) {
      let f = p - 1, T = 0, E = p - 1, I = Number.EPSILON, O = 0, L = 0, w = 0, P = 0, oe = 0, H = 0, k = 0, he = 0, S, te, me, Ne, ve, nt, Oe, ye, qe, b, x, fe, X, rt, ze;
      for (S = 0; S < p; S++) for ((S < T || S > E) && (c[S] = u.get(S, S), a[S] = 0), te = Math.max(S - 1, 0); te < p; te++) L = L + Math.abs(u.get(S, te));
      for (; f >= T; ) {
        for (Ne = f; Ne > T && (H = Math.abs(u.get(Ne - 1, Ne - 1)) + Math.abs(u.get(Ne, Ne)), H === 0 && (H = L), !(Math.abs(u.get(Ne, Ne - 1)) < I * H)); ) Ne--;
        if (Ne === f) u.set(f, f, u.get(f, f) + O), c[f] = u.get(f, f), a[f] = 0, f--, he = 0;
        else if (Ne === f - 1) {
          if (Oe = u.get(f, f - 1) * u.get(f - 1, f), w = (u.get(f - 1, f - 1) - u.get(f, f)) / 2, P = w * w + Oe, k = Math.sqrt(Math.abs(P)), u.set(f, f, u.get(f, f) + O), u.set(f - 1, f - 1, u.get(f - 1, f - 1) + O), ye = u.get(f, f), P >= 0) {
            for (k = w >= 0 ? w + k : w - k, c[f - 1] = ye + k, c[f] = c[f - 1], k !== 0 && (c[f] = ye - Oe / k), a[f - 1] = 0, a[f] = 0, ye = u.get(f, f - 1), H = Math.abs(ye) + Math.abs(k), w = ye / H, P = k / H, oe = Math.sqrt(w * w + P * P), w = w / oe, P = P / oe, te = f - 1; te < p; te++) k = u.get(f - 1, te), u.set(f - 1, te, P * k + w * u.get(f, te)), u.set(f, te, P * u.get(f, te) - w * k);
            for (S = 0; S <= f; S++) k = u.get(S, f - 1), u.set(S, f - 1, P * k + w * u.get(S, f)), u.set(S, f, P * u.get(S, f) - w * k);
            for (S = T; S <= E; S++) k = r.get(S, f - 1), r.set(S, f - 1, P * k + w * r.get(S, f)), r.set(S, f, P * r.get(S, f) - w * k);
          } else c[f - 1] = ye + w, c[f] = ye + w, a[f - 1] = k, a[f] = -k;
          f = f - 2, he = 0;
        } else {
          if (ye = u.get(f, f), qe = 0, Oe = 0, Ne < f && (qe = u.get(f - 1, f - 1), Oe = u.get(f, f - 1) * u.get(f - 1, f)), he === 10) {
            for (O += ye, S = T; S <= f; S++) u.set(S, S, u.get(S, S) - ye);
            H = Math.abs(u.get(f, f - 1)) + Math.abs(u.get(f - 1, f - 2)), ye = qe = 0.75 * H, Oe = -0.4375 * H * H;
          }
          if (he === 30 && (H = (qe - ye) / 2, H = H * H + Oe, H > 0)) {
            for (H = Math.sqrt(H), qe < ye && (H = -H), H = ye - Oe / ((qe - ye) / 2 + H), S = T; S <= f; S++) u.set(S, S, u.get(S, S) - H);
            O += H, ye = qe = Oe = 0.964;
          }
          for (he = he + 1, ve = f - 2; ve >= Ne && (k = u.get(ve, ve), oe = ye - k, H = qe - k, w = (oe * H - Oe) / u.get(ve + 1, ve) + u.get(ve, ve + 1), P = u.get(ve + 1, ve + 1) - k - oe - H, oe = u.get(ve + 2, ve + 1), H = Math.abs(w) + Math.abs(P) + Math.abs(oe), w = w / H, P = P / H, oe = oe / H, !(ve === Ne || Math.abs(u.get(ve, ve - 1)) * (Math.abs(P) + Math.abs(oe)) < I * (Math.abs(w) * (Math.abs(u.get(ve - 1, ve - 1)) + Math.abs(k) + Math.abs(u.get(ve + 1, ve + 1)))))); ) ve--;
          for (S = ve + 2; S <= f; S++) u.set(S, S - 2, 0), S > ve + 2 && u.set(S, S - 3, 0);
          for (me = ve; me <= f - 1 && (rt = me !== f - 1, me !== ve && (w = u.get(me, me - 1), P = u.get(me + 1, me - 1), oe = rt ? u.get(me + 2, me - 1) : 0, ye = Math.abs(w) + Math.abs(P) + Math.abs(oe), ye !== 0 && (w = w / ye, P = P / ye, oe = oe / ye)), ye !== 0); me++) if (H = Math.sqrt(w * w + P * P + oe * oe), w < 0 && (H = -H), H !== 0) {
            for (me !== ve ? u.set(me, me - 1, -H * ye) : Ne !== ve && u.set(me, me - 1, -u.get(me, me - 1)), w = w + H, ye = w / H, qe = P / H, k = oe / H, P = P / w, oe = oe / w, te = me; te < p; te++) w = u.get(me, te) + P * u.get(me + 1, te), rt && (w = w + oe * u.get(me + 2, te), u.set(me + 2, te, u.get(me + 2, te) - w * k)), u.set(me, te, u.get(me, te) - w * ye), u.set(me + 1, te, u.get(me + 1, te) - w * qe);
            for (S = 0; S <= Math.min(f, me + 3); S++) w = ye * u.get(S, me) + qe * u.get(S, me + 1), rt && (w = w + k * u.get(S, me + 2), u.set(S, me + 2, u.get(S, me + 2) - w * oe)), u.set(S, me, u.get(S, me) - w), u.set(S, me + 1, u.get(S, me + 1) - w * P);
            for (S = T; S <= E; S++) w = ye * r.get(S, me) + qe * r.get(S, me + 1), rt && (w = w + k * r.get(S, me + 2), r.set(S, me + 2, r.get(S, me + 2) - w * oe)), r.set(S, me, r.get(S, me) - w), r.set(S, me + 1, r.get(S, me + 1) - w * P);
          }
        }
      }
      if (L !== 0) {
        for (f = p - 1; f >= 0; f--) if (w = c[f], P = a[f], P === 0) for (Ne = f, u.set(f, f, 1), S = f - 1; S >= 0; S--) {
          for (Oe = u.get(S, S) - w, oe = 0, te = Ne; te <= f; te++) oe = oe + u.get(S, te) * u.get(te, f);
          if (a[S] < 0) k = Oe, H = oe;
          else if (Ne = S, a[S] === 0 ? u.set(S, f, Oe !== 0 ? -oe / Oe : -oe / (I * L)) : (ye = u.get(S, S + 1), qe = u.get(S + 1, S), P = (c[S] - w) * (c[S] - w) + a[S] * a[S], nt = (ye * H - k * oe) / P, u.set(S, f, nt), u.set(S + 1, f, Math.abs(ye) > Math.abs(k) ? (-oe - Oe * nt) / ye : (-H - qe * nt) / k)), nt = Math.abs(u.get(S, f)), I * nt * nt > 1) for (te = S; te <= f; te++) u.set(te, f, u.get(te, f) / nt);
        }
        else if (P < 0) for (Ne = f - 1, Math.abs(u.get(f, f - 1)) > Math.abs(u.get(f - 1, f)) ? (u.set(f - 1, f - 1, P / u.get(f, f - 1)), u.set(f - 1, f, -(u.get(f, f) - w) / u.get(f, f - 1))) : (ze = Wr(0, -u.get(f - 1, f), u.get(f - 1, f - 1) - w, P), u.set(f - 1, f - 1, ze[0]), u.set(f - 1, f, ze[1])), u.set(f, f - 1, 0), u.set(f, f, 1), S = f - 2; S >= 0; S--) {
          for (b = 0, x = 0, te = Ne; te <= f; te++) b = b + u.get(S, te) * u.get(te, f - 1), x = x + u.get(S, te) * u.get(te, f);
          if (Oe = u.get(S, S) - w, a[S] < 0) k = Oe, oe = b, H = x;
          else if (Ne = S, a[S] === 0 ? (ze = Wr(-b, -x, Oe, P), u.set(S, f - 1, ze[0]), u.set(S, f, ze[1])) : (ye = u.get(S, S + 1), qe = u.get(S + 1, S), fe = (c[S] - w) * (c[S] - w) + a[S] * a[S] - P * P, X = (c[S] - w) * 2 * P, fe === 0 && X === 0 && (fe = I * L * (Math.abs(Oe) + Math.abs(P) + Math.abs(ye) + Math.abs(qe) + Math.abs(k))), ze = Wr(ye * oe - k * b + P * x, ye * H - k * x - P * b, fe, X), u.set(S, f - 1, ze[0]), u.set(S, f, ze[1]), Math.abs(ye) > Math.abs(k) + Math.abs(P) ? (u.set(S + 1, f - 1, (-b - Oe * u.get(S, f - 1) + P * u.get(S, f)) / ye), u.set(S + 1, f, (-x - Oe * u.get(S, f) - P * u.get(S, f - 1)) / ye)) : (ze = Wr(-oe - qe * u.get(S, f - 1), -H - qe * u.get(S, f), k, P), u.set(S + 1, f - 1, ze[0]), u.set(S + 1, f, ze[1]))), nt = Math.max(Math.abs(u.get(S, f - 1)), Math.abs(u.get(S, f))), I * nt * nt > 1) for (te = S; te <= f; te++) u.set(te, f - 1, u.get(te, f - 1) / nt), u.set(te, f, u.get(te, f) / nt);
        }
        for (S = 0; S < p; S++) if (S < T || S > E) for (te = S; te < p; te++) r.set(S, te, u.get(S, te));
        for (te = p - 1; te >= T; te--) for (S = T; S <= E; S++) {
          for (k = 0, me = T; me <= Math.min(te, E); me++) k = k + r.get(S, me) * u.get(me, te);
          r.set(S, te, k);
        }
      }
    }
    function Wr(p, a, c, r) {
      let u, f;
      return Math.abs(c) > Math.abs(r) ? (u = r / c, f = c + u * r, [
        (p + u * a) / f,
        (a - u * p) / f
      ]) : (u = c / r, f = r + u * c, [
        (u * p + a) / f,
        (u * a - p) / f
      ]);
    }
    class Sl {
      constructor(a) {
        if (a = Q.checkMatrix(a), !a.isSymmetric()) throw new Error("Matrix is not symmetric");
        let c = a, r = c.rows, u = new ce(r, r), f = true, T, E, I;
        for (E = 0; E < r; E++) {
          let O = 0;
          for (I = 0; I < E; I++) {
            let L = 0;
            for (T = 0; T < I; T++) L += u.get(I, T) * u.get(E, T);
            L = (c.get(E, I) - L) / u.get(I, I), u.set(E, I, L), O = O + L * L;
          }
          for (O = c.get(E, E) - O, f && (f = O > 0), u.set(E, E, Math.sqrt(Math.max(O, 0))), I = E + 1; I < r; I++) u.set(E, I, 0);
        }
        this.L = u, this.positiveDefinite = f;
      }
      isPositiveDefinite() {
        return this.positiveDefinite;
      }
      solve(a) {
        a = Q.checkMatrix(a);
        let c = this.L, r = c.rows;
        if (a.rows !== r) throw new Error("Matrix dimensions do not match");
        if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
        let u = a.columns, f = a.clone(), T, E, I;
        for (I = 0; I < r; I++) for (E = 0; E < u; E++) {
          for (T = 0; T < I; T++) f.set(I, E, f.get(I, E) - f.get(T, E) * c.get(I, T));
          f.set(I, E, f.get(I, E) / c.get(I, I));
        }
        for (I = r - 1; I >= 0; I--) for (E = 0; E < u; E++) {
          for (T = I + 1; T < r; T++) f.set(I, E, f.get(I, E) - f.get(T, E) * c.get(T, I));
          f.set(I, E, f.get(I, E) / c.get(I, I));
        }
        return f;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class Al {
      constructor(a, c = {}) {
        a = Q.checkMatrix(a);
        let { Y: r } = c;
        const { scaleScores: u = false, maxIterations: f = 1e3, terminationCriteria: T = 1e-10 } = c;
        let E;
        if (r) {
          if (e.isAnyArray(r) && typeof r[0] == "number" ? r = ce.columnVector(r) : r = Q.checkMatrix(r), r.rows !== a.rows) throw new Error("Y should have the same number of rows as X");
          E = r.getColumnVector(0);
        } else E = a.getColumnVector(0);
        let I = 1, O, L, w, P;
        for (let oe = 0; oe < f && I > T; oe++) w = a.transpose().mmul(E).div(E.transpose().mmul(E).get(0, 0)), w = w.div(w.norm()), O = a.mmul(w).div(w.transpose().mmul(w).get(0, 0)), oe > 0 && (I = O.clone().sub(P).pow(2).sum()), P = O.clone(), r ? (L = r.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0)), L = L.div(L.norm()), E = r.mmul(L).div(L.transpose().mmul(L).get(0, 0))) : E = O;
        if (r) {
          let oe = a.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0));
          oe = oe.div(oe.norm());
          let H = a.clone().sub(O.clone().mmul(oe.transpose())), k = E.transpose().mmul(O).div(O.transpose().mmul(O).get(0, 0)), he = r.clone().sub(O.clone().mulS(k.get(0, 0)).mmul(L.transpose()));
          this.t = O, this.p = oe.transpose(), this.w = w.transpose(), this.q = L, this.u = E, this.s = O.transpose().mmul(O), this.xResidual = H, this.yResidual = he, this.betas = k;
        } else this.w = w.transpose(), this.s = O.transpose().mmul(O).sqrt(), u ? this.t = O.clone().div(this.s.get(0, 0)) : this.t = O, this.xResidual = a.sub(O.mmul(w.transpose()));
      }
    }
    return De.AbstractMatrix = we, De.CHO = Sl, De.CholeskyDecomposition = Sl, De.DistanceMatrix = jo, De.EVD = zn, De.EigenvalueDecomposition = zn, De.LU = V, De.LuDecomposition = V, De.Matrix = ce, De.MatrixColumnSelectionView = Wi, De.MatrixColumnView = _r, De.MatrixFlipColumnView = yl, De.MatrixFlipRowView = y, De.MatrixRowSelectionView = F, De.MatrixRowView = v, De.MatrixSelectionView = K, De.MatrixSubView = q, De.MatrixTransposeView = J, De.NIPALS = Al, De.Nipals = Al, De.QR = ue, De.QrDecomposition = ue, De.SVD = Ie, De.SingularValueDecomposition = Ie, De.SymmetricMatrix = qt, De.WrapperMatrix1D = le, De.WrapperMatrix2D = Q, De.correlation = Gi, De.covariance = fo, De.default = ce, De.determinant = We, De.inverse = Ae, De.linearDependencies = _t, De.pseudoInverse = ho, De.solve = Pe, De.wrap = ae, De;
  }
  var $c = OI();
  const mu = hI($c), pi = $c.Matrix;
  mu.Matrix ? mu.Matrix : $c.Matrix;
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
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this), this.matrixRz = pi.zeros(3, 3), this.matrixRy = pi.zeros(3, 3), this.matrixRx = pi.zeros(3, 3), this.matrixR = pi.zeros(3, 3), this.matrixRTemp = pi.zeros(3, 3), this.vectorInput = pi.zeros(3, 1), this.vectorOutput = pi.zeros(3, 1), this.gravityENU = new pi([
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
      if (this.initialized) return B(void 0);
      if (this.initPromise) return this.initPromise;
      this.initPromise = this.doInit(t);
      const o = await this.initPromise;
      return o.isErr() && (this.initPromise = null), o;
    }
    async doInit(t) {
      if (this.disposed) return C(new _e("IMU provider has been disposed"));
      const o = await this.requestPermissionIfNeeded(t);
      return o.isErr() ? C(o.error) : await this.checkHardwareSupport() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, B(void 0)) : C(new _e("Device motion is not supported by this browser"));
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
            if (!await t("prompt", "permission.imu.required")) return C(new _e("User declined to grant IMU permission"));
            if (await DeviceMotionEvent.requestPermission() !== "granted") return C(new _e("IMU permission denied"));
          } else return o === "denied" ? C(new _e("IMU permission denied")) : B(void 0);
        }
        return B(void 0);
      } catch (o) {
        return C(new _e("Failed to request IMU permission", void 0, o));
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
        }, l = (d) => {
          (d.alpha !== null || d.beta !== null || d.gamma !== null) && n();
        }, h = (d) => {
          (d.acceleration || d.accelerationIncludingGravity || d.rotationRate) && n();
        };
        window.addEventListener("deviceorientation", l), window.addEventListener("devicemotion", h), setTimeout(s, 1e3);
      });
    }
    async startAcceleration(t = {}) {
      if (this.disposed) return C(new _e("IMU provider has been disposed"));
      if (!this.initialized) {
        const o = await this.init();
        if (o.isErr()) return C(o.error);
      }
      if (this.isAccelerationActive) return B(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false, this.accelerationIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isAccelerationActive = true, B(void 0);
      } catch (o) {
        return C(new _e("Failed to start acceleration monitoring", void 0, o));
      }
    }
    async startGyroscope(t = {}) {
      if (this.disposed) return C(new _e("IMU provider has been disposed"));
      if (!this.initialized) {
        const o = await this.init();
        if (o.isErr()) return C(o.error);
      }
      if (this.isGyroscopeActive) return B(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false, this.gyroscopeIntervalMs = t.frequency && t.frequency > 0 ? Math.floor(1e3 / t.frequency) : 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null);
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.boundHandleMotionEvent, true), this.motionEventListenerCount++, this.isGyroscopeActive = true, B(void 0);
      } catch (o) {
        return C(new _e("Failed to start gyroscope monitoring", void 0, o));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return B(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.accelerationIntervalMs = 0, this.accelerationPrevReading = null, this.accelerationAccumulatedX = 0, this.accelerationAccumulatedY = 0, this.accelerationAccumulatedZ = 0, this.accelerationAccumulatedTime = 0, this.accelerationLastEmitTime = 0, this.accelerationTimer !== null && (clearTimeout(this.accelerationTimer), this.accelerationTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), B(void 0);
      } catch (t) {
        return C(new _e("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return B(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.gyroscopeIntervalMs = 0, this.gyroscopePrevReading = null, this.gyroscopeAccumulatedX = 0, this.gyroscopeAccumulatedY = 0, this.gyroscopeAccumulatedZ = 0, this.gyroscopeAccumulatedTime = 0, this.gyroscopeLastEmitTime = 0, this.gyroscopeTimer !== null && (clearTimeout(this.gyroscopeTimer), this.gyroscopeTimer = null), this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), B(void 0);
      } catch (t) {
        return C(new _e("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (this.disposed) return C(new _e("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return B(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (this.disposed) return C(new _e("IMU provider has been disposed"));
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return C(t.error);
      }
      return B(this.lastGyroscopeReading);
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
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), B(void 0);
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
      let d;
      this.normalizeAccelerationToENU && this.deviceOrientation ? d = this.transformToENU(s, l, h, o, this.deviceOrientation) : d = {
        x: s,
        y: l,
        z: h,
        timestamp: o
      }, this.addAccelerationReading(d);
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
      const o = t.alpha * _ar.DEG_TO_RAD, i = t.beta * _ar.DEG_TO_RAD, n = t.gamma * _ar.DEG_TO_RAD, s = Math.cos(o), l = Math.sin(o), h = Math.cos(i), d = Math.sin(i), g = Math.cos(n), m = Math.sin(n);
      this.matrixRz.set(0, 0, s), this.matrixRz.set(0, 1, -l), this.matrixRz.set(0, 2, 0), this.matrixRz.set(1, 0, l), this.matrixRz.set(1, 1, s), this.matrixRz.set(1, 2, 0), this.matrixRz.set(2, 0, 0), this.matrixRz.set(2, 1, 0), this.matrixRz.set(2, 2, 1), this.matrixRy.set(0, 0, h), this.matrixRy.set(0, 1, 0), this.matrixRy.set(0, 2, d), this.matrixRy.set(1, 0, 0), this.matrixRy.set(1, 1, 1), this.matrixRy.set(1, 2, 0), this.matrixRy.set(2, 0, -d), this.matrixRy.set(2, 1, 0), this.matrixRy.set(2, 2, h), this.matrixRx.set(0, 0, 1), this.matrixRx.set(0, 1, 0), this.matrixRx.set(0, 2, 0), this.matrixRx.set(1, 0, 0), this.matrixRx.set(1, 1, g), this.matrixRx.set(1, 2, -m), this.matrixRx.set(2, 0, 0), this.matrixRx.set(2, 1, m), this.matrixRx.set(2, 2, g), this.multiplyMatricesInPlace(this.matrixRz, this.matrixRy, this.matrixRTemp), this.multiplyMatricesInPlace(this.matrixRTemp, this.matrixRx, this.matrixR);
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
  __publicField(_ar, "GRAVITY", 9.81);
  __publicField(_ar, "DEG_TO_RAD", Math.PI / 180);
  let ar = _ar;
  const _Si = class _Si {
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
      const o = jc.getPlatformContext(), i = new _Si(o), n = await i.initializeProviders(t);
      return n.isErr() ? C(n.error) : (_Si.instance = i, B(i));
    }
    static getInstance() {
      return _Si.instance ? B(_Si.instance) : C(new xi("Platform services not initialized", Ei.NOT_INITIALIZED));
    }
    async initializeProviders(t) {
      try {
        this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage);
        const o = await Promise.all([
          this.createIMUProvider(t == null ? void 0 : t.imu),
          this.createDeviceOrientationProvider(t == null ? void 0 : t.deviceOrientation)
        ]);
        return this.imuProvider = o[0], this.deviceOrientationProvider = o[1], this.geolocationProvider = await this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, B(void 0);
      } catch (o) {
        return C(new xi("Failed to initialize platform providers", Ei.DETECTION_FAILED, o));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case Tt.TAURI:
          return new Rm((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case Tt.WEB:
        case Tt.MOBILE_WEB:
        case Tt.UNKNOWN:
        default:
          return new sI((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    async createGeolocationProvider(t) {
      let o;
      switch (this.context.environment) {
        case Tt.TAURI:
          o = new aI((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case Tt.WEB:
        case Tt.MOBILE_WEB:
        case Tt.UNKNOWN:
        default:
          o = new lI();
          break;
      }
      const i = await o.init(t == null ? void 0 : t.permissionCallback);
      return i.isErr() ? (console.error("Failed to initialize geolocation provider", i.error), null) : o;
    }
    createFileProvider() {
      return {
        init: async () => C(new _e("File provider not implemented")),
        readFile: async () => C(new _e("File provider not implemented")),
        writeFile: async () => C(new _e("File provider not implemented")),
        deleteFile: async () => C(new _e("File provider not implemented")),
        listFiles: async () => C(new _e("File provider not implemented")),
        exists: async () => C(new _e("File provider not implemented")),
        isSupported: () => false
      };
    }
    async createIMUProvider(t) {
      const o = new ar(), i = await o.init(t == null ? void 0 : t.permissionCallback);
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
      return this.storageProvider ? B(this.storageProvider) : C(new xi("Storage provider not initialized", Ei.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? B(this.geolocationProvider) : C(new xi("Geolocation provider not initialized", Ei.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? B(this.fileProvider) : C(new xi("File provider not initialized", Ei.DETECTION_FAILED));
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
      _Si.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? B(this.imuProvider) : C(new xi("IMU provider not initialized", Ei.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? B(this.deviceOrientationProvider) : C(new xi("Device orientation provider not initialized", Ei.DETECTION_FAILED));
    }
  };
  __publicField(_Si, "instance", null);
  let Si = _Si;
  Xs = function() {
    return Si.getInstance();
  };
  RI = function() {
    return typeof navigator > "u" ? false : jc.detectEnvironment() === Tt.TAURI;
  };
  class wI {
    constructor() {
      __publicField(this, "storageProvider", null);
      __publicField(this, "initialized", false);
    }
    async init() {
      if (this.initialized) return;
      const t = Xs();
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
  eo = new wI();
  ht = eo.set.bind(eo);
  Zi = eo.get.bind(eo);
  dv = eo.save.bind(eo);
  eo.init.bind(eo);
  eo.exportToJson.bind(eo);
  eo.clear.bind(eo);
  eo.remove.bind(eo);
  function W(e, t, o) {
    function i(h, d) {
      if (h._zod || Object.defineProperty(h, "_zod", {
        value: {
          def: d,
          constr: l,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      }), h._zod.traits.has(e)) return;
      h._zod.traits.add(e), t(h, d);
      const g = l.prototype, m = Object.keys(g);
      for (let R = 0; R < m.length; R++) {
        const N = m[R];
        N in h || (h[N] = g[N].bind(h));
      }
    }
    const n = (o == null ? void 0 : o.Parent) ?? Object;
    class s extends n {
    }
    Object.defineProperty(s, "name", {
      value: e
    });
    function l(h) {
      var d;
      const g = (o == null ? void 0 : o.Parent) ? new s() : this;
      i(g, h), (d = g._zod).deferred ?? (d.deferred = []);
      for (const m of g._zod.deferred) m();
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
  class En extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  class df extends Error {
    constructor(t) {
      super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
    }
  }
  const pf = {};
  function Ci(e) {
    return pf;
  }
  function mf(e) {
    const t = Object.values(e).filter((i) => typeof i == "number");
    return Object.entries(e).filter(([i, n]) => t.indexOf(+i) === -1).map(([i, n]) => n);
  }
  function mc(e, t) {
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
    const t = e.startsWith("^") ? 1 : 0, o = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, o);
  }
  function yI(e, t) {
    const o = (e.toString().split(".")[1] || "").length, i = t.toString();
    let n = (i.split(".")[1] || "").length;
    if (n === 0 && /\d?e-\d?/.test(i)) {
      const d = i.match(/\d?e-(\d?)/);
      (d == null ? void 0 : d[1]) && (n = Number.parseInt(d[1]));
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
  function _i(...e) {
    const t = {};
    for (const o of e) {
      const i = Object.getOwnPropertyDescriptors(o);
      Object.assign(t, i);
    }
    return Object.defineProperties({}, t);
  }
  function Tu(e) {
    return JSON.stringify(e);
  }
  function SI(e) {
    return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const gf = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
  };
  function Is(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
  }
  const AI = Vc(() => {
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
    if (Is(e) === false) return false;
    const t = e.constructor;
    if (t === void 0 || typeof t != "function") return true;
    const o = t.prototype;
    return !(Is(o) === false || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === false);
  }
  function Tf(e) {
    return Hn(e) ? {
      ...e
    } : Array.isArray(e) ? [
      ...e
    ] : e;
  }
  const NI = /* @__PURE__ */ new Set([
    "string",
    "number",
    "symbol"
  ]);
  function Qs(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function Ui(e, t, o) {
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
  const vI = {
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
  function LI(e, t) {
    const o = e._zod.def, i = o.checks;
    if (i && i.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
    const s = _i(e._zod.def, {
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
    return Ui(e, s);
  }
  function CI(e, t) {
    const o = e._zod.def, i = o.checks;
    if (i && i.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
    const s = _i(e._zod.def, {
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
    return Ui(e, s);
  }
  function DI(e, t) {
    if (!Hn(t)) throw new Error("Invalid input to extend: expected a plain object");
    const o = e._zod.def.checks;
    if (o && o.length > 0) {
      const s = e._zod.def.shape;
      for (const l in t) if (Object.getOwnPropertyDescriptor(s, l) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    const n = _i(e._zod.def, {
      get shape() {
        const s = {
          ...e._zod.def.shape,
          ...t
        };
        return an(this, "shape", s), s;
      }
    });
    return Ui(e, n);
  }
  function HI(e, t) {
    if (!Hn(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
    const o = _i(e._zod.def, {
      get shape() {
        const i = {
          ...e._zod.def.shape,
          ...t
        };
        return an(this, "shape", i), i;
      }
    });
    return Ui(e, o);
  }
  function MI(e, t) {
    const o = _i(e._zod.def, {
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
    return Ui(e, o);
  }
  function PI(e, t, o) {
    const n = t._zod.def.checks;
    if (n && n.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
    const l = _i(t._zod.def, {
      get shape() {
        const h = t._zod.def.shape, d = {
          ...h
        };
        if (o) for (const g in o) {
          if (!(g in h)) throw new Error(`Unrecognized key: "${g}"`);
          o[g] && (d[g] = e ? new e({
            type: "optional",
            innerType: h[g]
          }) : h[g]);
        }
        else for (const g in h) d[g] = e ? new e({
          type: "optional",
          innerType: h[g]
        }) : h[g];
        return an(this, "shape", d), d;
      },
      checks: []
    });
    return Ui(t, l);
  }
  function FI(e, t, o) {
    const i = _i(t._zod.def, {
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
    return Ui(t, i);
  }
  function gn(e, t = 0) {
    var _a3;
    if (e.aborted === true) return true;
    for (let o = t; o < e.issues.length; o++) if (((_a3 = e.issues[o]) == null ? void 0 : _a3.continue) !== true) return true;
    return false;
  }
  function Tn(e, t) {
    return t.map((o) => {
      var i;
      return (i = o).path ?? (i.path = []), o.path.unshift(e), o;
    });
  }
  function zr(e) {
    return typeof e == "string" ? e : e == null ? void 0 : e.message;
  }
  function Di(e, t, o) {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    const i = {
      ...e,
      path: e.path ?? []
    };
    if (!e.message) {
      const n = zr((_c2 = (_b3 = (_a3 = e.inst) == null ? void 0 : _a3._zod.def) == null ? void 0 : _b3.error) == null ? void 0 : _c2.call(_b3, e)) ?? zr((_d2 = t == null ? void 0 : t.error) == null ? void 0 : _d2.call(t, e)) ?? zr((_e2 = o.customError) == null ? void 0 : _e2.call(o, e)) ?? zr((_f2 = o.localeError) == null ? void 0 : _f2.call(o, e)) ?? "Invalid input";
      i.message = n;
    }
    return delete i.inst, delete i.continue, (t == null ? void 0 : t.reportInput) || delete i.input, i;
  }
  function Kc(e) {
    return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
  }
  function yr(...e) {
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
  const Ef = (e, t) => {
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
      value: e._zod,
      enumerable: false
    }), Object.defineProperty(e, "issues", {
      value: t,
      enumerable: false
    }), e.message = JSON.stringify(t, mc, 2), Object.defineProperty(e, "toString", {
      value: () => e.message,
      enumerable: false
    });
  }, If = W("$ZodError", Ef), Of = W("$ZodError", Ef, {
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
          const d = s.path[h];
          h === s.path.length - 1 ? (l[d] = l[d] || {
            _errors: []
          }, l[d]._errors.push(t(s))) : l[d] = l[d] || {
            _errors: []
          }, l = l[d], h++;
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
    if (l instanceof Promise) throw new En();
    if (l.issues.length) {
      const h = new ((n == null ? void 0 : n.Err) ?? e)(l.issues.map((d) => Di(d, s, Ci())));
      throw gf(h, n == null ? void 0 : n.callee), h;
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
      const h = new ((n == null ? void 0 : n.Err) ?? e)(l.issues.map((d) => Di(d, s, Ci())));
      throw gf(h, n == null ? void 0 : n.callee), h;
    }
    return l.value;
  }, ea = (e) => (t, o, i) => {
    const n = i ? {
      ...i,
      async: false
    } : {
      async: false
    }, s = t._zod.run({
      value: o,
      issues: []
    }, n);
    if (s instanceof Promise) throw new En();
    return s.issues.length ? {
      success: false,
      error: new (e ?? If)(s.issues.map((l) => Di(l, n, Ci())))
    } : {
      success: true,
      data: s.value
    };
  }, kI = ea(Of), ta = (e) => async (t, o, i) => {
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
      error: new e(s.issues.map((l) => Di(l, n, Ci())))
    } : {
      success: true,
      data: s.value
    };
  }, WI = ta(Of), GI = (e) => (t, o, i) => {
    const n = i ? Object.assign(i, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return Jc(e)(t, o, n);
  }, BI = (e) => (t, o, i) => Jc(e)(t, o, i), jI = (e) => async (t, o, i) => {
    const n = i ? Object.assign(i, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return Xc(e)(t, o, n);
  }, YI = (e) => async (t, o, i) => Xc(e)(t, o, i), xI = (e) => (t, o, i) => {
    const n = i ? Object.assign(i, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return ea(e)(t, o, n);
  }, zI = (e) => (t, o, i) => ea(e)(t, o, i), $I = (e) => async (t, o, i) => {
    const n = i ? Object.assign(i, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return ta(e)(t, o, n);
  }, VI = (e) => async (t, o, i) => ta(e)(t, o, i), ZI = /^[cC][^\s-]{8,}$/, qI = /^[0-9a-z]+$/, KI = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, JI = /^[0-9a-vA-V]{20}$/, XI = /^[A-Za-z0-9]{27}$/, QI = /^[a-zA-Z0-9_-]{21}$/, eO = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, tO = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Eu = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, oO = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, iO = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  function nO() {
    return new RegExp(iO, "u");
  }
  const rO = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sO = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, aO = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, cO = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, lO = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Rf = /^[A-Za-z0-9_-]*$/, uO = /^\+[1-9]\d{6,14}$/, wf = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", hO = new RegExp(`^${wf}$`);
  function yf(e) {
    const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  }
  function fO(e) {
    return new RegExp(`^${yf(e)}$`);
  }
  function dO(e) {
    const t = yf({
      precision: e.precision
    }), o = [
      "Z"
    ];
    e.local && o.push(""), e.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const i = `${t}(?:${o.join("|")})`;
    return new RegExp(`^${wf}T(?:${i})$`);
  }
  const pO = (e) => {
    const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  }, mO = /^-?\d+$/, Sf = /^-?\d+(?:\.\d+)?$/, gO = /^(?:true|false)$/i, TO = /^[^A-Z]*$/, EO = /^[^a-z]*$/, to = W("$ZodCheck", (e, t) => {
    var o;
    e._zod ?? (e._zod = {}), e._zod.def = t, (o = e._zod).onattach ?? (o.onattach = []);
  }), Af = {
    number: "number",
    bigint: "bigint",
    object: "date"
  }, Nf = W("$ZodCheckLessThan", (e, t) => {
    to.init(e, t);
    const o = Af[typeof t.value];
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
  }), bf = W("$ZodCheckGreaterThan", (e, t) => {
    to.init(e, t);
    const o = Af[typeof t.value];
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
  }), IO = W("$ZodCheckMultipleOf", (e, t) => {
    to.init(e, t), e._zod.onattach.push((o) => {
      var i;
      (i = o._zod.bag).multipleOf ?? (i.multipleOf = t.value);
    }), e._zod.check = (o) => {
      if (typeof o.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
      (typeof o.value == "bigint" ? o.value % t.value === BigInt(0) : yI(o.value, t.value) === 0) || o.issues.push({
        origin: typeof o.value,
        code: "not_multiple_of",
        divisor: t.value,
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), OO = W("$ZodCheckNumberFormat", (e, t) => {
    var _a3;
    to.init(e, t), t.format = t.format || "float64";
    const o = (_a3 = t.format) == null ? void 0 : _a3.includes("int"), i = o ? "int" : "number", [n, s] = vI[t.format];
    e._zod.onattach.push((l) => {
      const h = l._zod.bag;
      h.format = t.format, h.minimum = n, h.maximum = s, o && (h.pattern = mO);
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
  }), RO = W("$ZodCheckMaxLength", (e, t) => {
    var o;
    to.init(e, t), (o = e._zod.def).when ?? (o.when = (i) => {
      const n = i.value;
      return !Zc(n) && n.length !== void 0;
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
  }), wO = W("$ZodCheckMinLength", (e, t) => {
    var o;
    to.init(e, t), (o = e._zod.def).when ?? (o.when = (i) => {
      const n = i.value;
      return !Zc(n) && n.length !== void 0;
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
  }), yO = W("$ZodCheckLengthEquals", (e, t) => {
    var o;
    to.init(e, t), (o = e._zod.def).when ?? (o.when = (i) => {
      const n = i.value;
      return !Zc(n) && n.length !== void 0;
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
  }), oa = W("$ZodCheckStringFormat", (e, t) => {
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
  }), SO = W("$ZodCheckRegex", (e, t) => {
    oa.init(e, t), e._zod.check = (o) => {
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
  }), AO = W("$ZodCheckLowerCase", (e, t) => {
    t.pattern ?? (t.pattern = TO), oa.init(e, t);
  }), NO = W("$ZodCheckUpperCase", (e, t) => {
    t.pattern ?? (t.pattern = EO), oa.init(e, t);
  }), bO = W("$ZodCheckIncludes", (e, t) => {
    to.init(e, t);
    const o = Qs(t.includes), i = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${o}` : o);
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
  }), vO = W("$ZodCheckStartsWith", (e, t) => {
    to.init(e, t);
    const o = new RegExp(`^${Qs(t.prefix)}.*`);
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
  }), LO = W("$ZodCheckEndsWith", (e, t) => {
    to.init(e, t);
    const o = new RegExp(`.*${Qs(t.suffix)}$`);
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
  }), CO = W("$ZodCheckOverwrite", (e, t) => {
    to.init(e, t), e._zod.check = (o) => {
      o.value = t.tx(o.value);
    };
  });
  class DO {
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
  const HO = {
    major: 4,
    minor: 3,
    patch: 5
  }, pt = W("$ZodType", (e, t) => {
    var _a3;
    var o;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = HO;
    const i = [
      ...e._zod.def.checks ?? []
    ];
    e._zod.traits.has("$ZodCheck") && i.unshift(e);
    for (const n of i) for (const s of n._zod.onattach) s(e);
    if (i.length === 0) (o = e._zod).deferred ?? (o.deferred = []), (_a3 = e._zod.deferred) == null ? void 0 : _a3.push(() => {
      e._zod.run = e._zod.parse;
    });
    else {
      const n = (l, h, d) => {
        let g = gn(l), m;
        for (const R of h) {
          if (R._zod.def.when) {
            if (!R._zod.def.when(l)) continue;
          } else if (g) continue;
          const N = l.issues.length, A = R._zod.check(l);
          if (A instanceof Promise && (d == null ? void 0 : d.async) === false) throw new En();
          if (m || A instanceof Promise) m = (m ?? Promise.resolve()).then(async () => {
            await A, l.issues.length !== N && (g || (g = gn(l, N)));
          });
          else {
            if (l.issues.length === N) continue;
            g || (g = gn(l, N));
          }
        }
        return m ? m.then(() => l) : l;
      }, s = (l, h, d) => {
        if (gn(l)) return l.aborted = true, l;
        const g = n(h, i, d);
        if (g instanceof Promise) {
          if (d.async === false) throw new En();
          return g.then((m) => e._zod.parse(m, d));
        }
        return e._zod.parse(g, d);
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
          return g instanceof Promise ? g.then((m) => s(m, l, h)) : s(g, l, h);
        }
        const d = e._zod.parse(l, h);
        if (d instanceof Promise) {
          if (h.async === false) throw new En();
          return d.then((g) => n(g, i, h));
        }
        return n(d, i, h);
      };
    }
    $e(e, "~standard", () => ({
      validate: (n) => {
        var _a4;
        try {
          const s = kI(e, n);
          return s.success ? {
            value: s.data
          } : {
            issues: (_a4 = s.error) == null ? void 0 : _a4.issues
          };
        } catch {
          return WI(e, n).then((l) => {
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
  }), Qc = W("$ZodString", (e, t) => {
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
  }), ut = W("$ZodStringFormat", (e, t) => {
    oa.init(e, t), Qc.init(e, t);
  }), MO = W("$ZodGUID", (e, t) => {
    t.pattern ?? (t.pattern = tO), ut.init(e, t);
  }), PO = W("$ZodUUID", (e, t) => {
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
  }), FO = W("$ZodEmail", (e, t) => {
    t.pattern ?? (t.pattern = oO), ut.init(e, t);
  }), _O = W("$ZodURL", (e, t) => {
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
  }), UO = W("$ZodEmoji", (e, t) => {
    t.pattern ?? (t.pattern = nO()), ut.init(e, t);
  }), kO = W("$ZodNanoID", (e, t) => {
    t.pattern ?? (t.pattern = QI), ut.init(e, t);
  }), WO = W("$ZodCUID", (e, t) => {
    t.pattern ?? (t.pattern = ZI), ut.init(e, t);
  }), GO = W("$ZodCUID2", (e, t) => {
    t.pattern ?? (t.pattern = qI), ut.init(e, t);
  }), BO = W("$ZodULID", (e, t) => {
    t.pattern ?? (t.pattern = KI), ut.init(e, t);
  }), jO = W("$ZodXID", (e, t) => {
    t.pattern ?? (t.pattern = JI), ut.init(e, t);
  }), YO = W("$ZodKSUID", (e, t) => {
    t.pattern ?? (t.pattern = XI), ut.init(e, t);
  }), xO = W("$ZodISODateTime", (e, t) => {
    t.pattern ?? (t.pattern = dO(t)), ut.init(e, t);
  }), zO = W("$ZodISODate", (e, t) => {
    t.pattern ?? (t.pattern = hO), ut.init(e, t);
  }), $O = W("$ZodISOTime", (e, t) => {
    t.pattern ?? (t.pattern = fO(t)), ut.init(e, t);
  }), VO = W("$ZodISODuration", (e, t) => {
    t.pattern ?? (t.pattern = eO), ut.init(e, t);
  }), ZO = W("$ZodIPv4", (e, t) => {
    t.pattern ?? (t.pattern = rO), ut.init(e, t), e._zod.bag.format = "ipv4";
  }), qO = W("$ZodIPv6", (e, t) => {
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
  }), KO = W("$ZodCIDRv4", (e, t) => {
    t.pattern ?? (t.pattern = aO), ut.init(e, t);
  }), JO = W("$ZodCIDRv6", (e, t) => {
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
  function vf(e) {
    if (e === "") return true;
    if (e.length % 4 !== 0) return false;
    try {
      return atob(e), true;
    } catch {
      return false;
    }
  }
  const XO = W("$ZodBase64", (e, t) => {
    t.pattern ?? (t.pattern = lO), ut.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (o) => {
      vf(o.value) || o.issues.push({
        code: "invalid_format",
        format: "base64",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  });
  function QO(e) {
    if (!Rf.test(e)) return false;
    const t = e.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), o = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
    return vf(o);
  }
  const eR = W("$ZodBase64URL", (e, t) => {
    t.pattern ?? (t.pattern = Rf), ut.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (o) => {
      QO(o.value) || o.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), tR = W("$ZodE164", (e, t) => {
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
  const iR = W("$ZodJWT", (e, t) => {
    ut.init(e, t), e._zod.check = (o) => {
      oR(o.value, t.alg) || o.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: o.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), Lf = W("$ZodNumber", (e, t) => {
    pt.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Sf, e._zod.parse = (o, i) => {
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
  }), nR = W("$ZodNumberFormat", (e, t) => {
    OO.init(e, t), Lf.init(e, t);
  }), rR = W("$ZodBoolean", (e, t) => {
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
  }), sR = W("$ZodUnknown", (e, t) => {
    pt.init(e, t), e._zod.parse = (o) => o;
  }), aR = W("$ZodNever", (e, t) => {
    pt.init(e, t), e._zod.parse = (o, i) => (o.issues.push({
      expected: "never",
      code: "invalid_type",
      input: o.value,
      inst: e
    }), o);
  });
  function Iu(e, t, o) {
    e.issues.length && t.issues.push(...Tn(o, e.issues)), t.value[o] = e.value;
  }
  const cR = W("$ZodArray", (e, t) => {
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
        const h = n[l], d = t.element._zod.run({
          value: h,
          issues: []
        }, i);
        d instanceof Promise ? s.push(d.then((g) => Iu(g, o, l))) : Iu(d, o, l);
      }
      return s.length ? Promise.all(s).then(() => o) : o;
    };
  });
  function Os(e, t, o, i, n) {
    if (e.issues.length) {
      if (n && !(o in i)) return;
      t.issues.push(...Tn(o, e.issues));
    }
    e.value === void 0 ? o in i && (t.value[o] = void 0) : t.value[o] = e.value;
  }
  function Cf(e) {
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
  function Df(e, t, o, i, n, s) {
    const l = [], h = n.keySet, d = n.catchall._zod, g = d.def.type, m = d.optout === "optional";
    for (const R in t) {
      if (h.has(R)) continue;
      if (g === "never") {
        l.push(R);
        continue;
      }
      const N = d.run({
        value: t[R],
        issues: []
      }, i);
      N instanceof Promise ? e.push(N.then((A) => Os(A, o, R, t, m))) : Os(N, o, R, t, m);
    }
    return l.length && o.issues.push({
      code: "unrecognized_keys",
      keys: l,
      input: t,
      inst: s
    }), e.length ? Promise.all(e).then(() => o) : o;
  }
  const lR = W("$ZodObject", (e, t) => {
    var _a3;
    if (pt.init(e, t), !((_a3 = Object.getOwnPropertyDescriptor(t, "shape")) == null ? void 0 : _a3.get)) {
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
    const i = Vc(() => Cf(t));
    $e(e._zod, "propValues", () => {
      const h = t.shape, d = {};
      for (const g in h) {
        const m = h[g]._zod;
        if (m.values) {
          d[g] ?? (d[g] = /* @__PURE__ */ new Set());
          for (const R of m.values) d[g].add(R);
        }
      }
      return d;
    });
    const n = Is, s = t.catchall;
    let l;
    e._zod.parse = (h, d) => {
      l ?? (l = i.value);
      const g = h.value;
      if (!n(g)) return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: e
      }), h;
      h.value = {};
      const m = [], R = l.shape;
      for (const N of l.keys) {
        const A = R[N], M = A._zod.optout === "optional", D = A._zod.run({
          value: g[N],
          issues: []
        }, d);
        D instanceof Promise ? m.push(D.then((ne) => Os(ne, h, N, g, M))) : Os(D, h, N, g, M);
      }
      return s ? Df(m, g, h, d, i.value, e) : m.length ? Promise.all(m).then(() => h) : h;
    };
  }), uR = W("$ZodObjectJIT", (e, t) => {
    lR.init(e, t);
    const o = e._zod.parse, i = Vc(() => Cf(t)), n = (N) => {
      var _a3, _b3;
      const A = new DO([
        "shape",
        "payload",
        "ctx"
      ]), M = i.value, D = (Y) => {
        const _ = Tu(Y);
        return `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`;
      };
      A.write("const input = payload.value;");
      const ne = /* @__PURE__ */ Object.create(null);
      let ee = 0;
      for (const Y of M.keys) ne[Y] = `key_${ee++}`;
      A.write("const newResult = {};");
      for (const Y of M.keys) {
        const _ = ne[Y], re = Tu(Y), se = ((_b3 = (_a3 = N[Y]) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout) === "optional";
        A.write(`const ${_} = ${D(Y)};`), se ? A.write(`
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
        
      `) : A.write(`
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
      A.write("payload.value = newResult;"), A.write("return payload;");
      const Z = A.compile();
      return (Y, _) => Z(N, Y, _);
    };
    let s;
    const l = Is, h = !pf.jitless, g = h && AI.value, m = t.catchall;
    let R;
    e._zod.parse = (N, A) => {
      R ?? (R = i.value);
      const M = N.value;
      return l(M) ? h && g && (A == null ? void 0 : A.async) === false && A.jitless !== true ? (s || (s = n(t.shape)), N = s(N, A), m ? Df([], M, N, A, R, e) : N) : o(N, A) : (N.issues.push({
        expected: "object",
        code: "invalid_type",
        input: M,
        inst: e
      }), N);
    };
  });
  function Ou(e, t, o, i) {
    for (const s of e) if (s.issues.length === 0) return t.value = s.value, t;
    const n = e.filter((s) => !gn(s));
    return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: o,
      errors: e.map((s) => s.issues.map((l) => Di(l, i, Ci())))
    }), t);
  }
  const hR = W("$ZodUnion", (e, t) => {
    pt.init(e, t), $e(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), $e(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), $e(e._zod, "values", () => {
      if (t.options.every((n) => n._zod.values)) return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
    }), $e(e._zod, "pattern", () => {
      if (t.options.every((n) => n._zod.pattern)) {
        const n = t.options.map((s) => s._zod.pattern);
        return new RegExp(`^(${n.map((s) => qc(s.source)).join("|")})$`);
      }
    });
    const o = t.options.length === 1, i = t.options[0]._zod.run;
    e._zod.parse = (n, s) => {
      if (o) return i(n, s);
      let l = false;
      const h = [];
      for (const d of t.options) {
        const g = d._zod.run({
          value: n.value,
          issues: []
        }, s);
        if (g instanceof Promise) h.push(g), l = true;
        else {
          if (g.issues.length === 0) return g;
          h.push(g);
        }
      }
      return l ? Promise.all(h).then((d) => Ou(d, n, e, s)) : Ou(h, n, e, s);
    };
  }), fR = W("$ZodIntersection", (e, t) => {
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
      ]).then(([d, g]) => Ru(o, d, g)) : Ru(o, s, l);
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
    if (Hn(e) && Hn(t)) {
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
      for (const d of h.keys) i.has(d) || i.set(d, {}), i.get(d).l = true;
    } else e.issues.push(h);
    for (const h of o.issues) if (h.code === "unrecognized_keys") for (const d of h.keys) i.has(d) || i.set(d, {}), i.get(d).r = true;
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
  const dR = W("$ZodRecord", (e, t) => {
    pt.init(e, t), e._zod.parse = (o, i) => {
      const n = o.value;
      if (!Hn(n)) return o.issues.push({
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
          const m = t.valueType._zod.run({
            value: n[g],
            issues: []
          }, i);
          m instanceof Promise ? s.push(m.then((R) => {
            R.issues.length && o.issues.push(...Tn(g, R.issues)), o.value[g] = R.value;
          })) : (m.issues.length && o.issues.push(...Tn(g, m.issues)), o.value[g] = m.value);
        }
        let d;
        for (const g in n) h.has(g) || (d = d ?? [], d.push(g));
        d && d.length > 0 && o.issues.push({
          code: "unrecognized_keys",
          input: n,
          inst: e,
          keys: d
        });
      } else {
        o.value = {};
        for (const h of Reflect.ownKeys(n)) {
          if (h === "__proto__") continue;
          let d = t.keyType._zod.run({
            value: h,
            issues: []
          }, i);
          if (d instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (typeof h == "string" && Sf.test(h) && d.issues.length && d.issues.some((R) => R.code === "invalid_type" && R.expected === "number")) {
            const R = t.keyType._zod.run({
              value: Number(h),
              issues: []
            }, i);
            if (R instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            R.issues.length === 0 && (d = R);
          }
          if (d.issues.length) {
            t.mode === "loose" ? o.value[h] = n[h] : o.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: d.issues.map((R) => Di(R, i, Ci())),
              input: h,
              path: [
                h
              ],
              inst: e
            });
            continue;
          }
          const m = t.valueType._zod.run({
            value: n[h],
            issues: []
          }, i);
          m instanceof Promise ? s.push(m.then((R) => {
            R.issues.length && o.issues.push(...Tn(h, R.issues)), o.value[d.value] = R.value;
          })) : (m.issues.length && o.issues.push(...Tn(h, m.issues)), o.value[d.value] = m.value);
        }
      }
      return s.length ? Promise.all(s).then(() => o) : o;
    };
  }), pR = W("$ZodEnum", (e, t) => {
    pt.init(e, t);
    const o = mf(t.entries), i = new Set(o);
    e._zod.values = i, e._zod.pattern = new RegExp(`^(${o.filter((n) => NI.has(typeof n)).map((n) => typeof n == "string" ? Qs(n) : n.toString()).join("|")})$`), e._zod.parse = (n, s) => {
      const l = n.value;
      return i.has(l) || n.issues.push({
        code: "invalid_value",
        values: o,
        input: l,
        inst: e
      }), n;
    };
  }), mR = W("$ZodTransform", (e, t) => {
    pt.init(e, t), e._zod.parse = (o, i) => {
      if (i.direction === "backward") throw new df(e.constructor.name);
      const n = t.transform(o.value, o);
      if (i.async) return (n instanceof Promise ? n : Promise.resolve(n)).then((l) => (o.value = l, o));
      if (n instanceof Promise) throw new En();
      return o.value = n, o;
    };
  });
  function wu(e, t) {
    return e.issues.length && t === void 0 ? {
      issues: [],
      value: void 0
    } : e;
  }
  const Hf = W("$ZodOptional", (e, t) => {
    pt.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", $e(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...t.innerType._zod.values,
      void 0
    ]) : void 0), $e(e._zod, "pattern", () => {
      const o = t.innerType._zod.pattern;
      return o ? new RegExp(`^(${qc(o.source)})?$`) : void 0;
    }), e._zod.parse = (o, i) => {
      if (t.innerType._zod.optin === "optional") {
        const n = t.innerType._zod.run(o, i);
        return n instanceof Promise ? n.then((s) => wu(s, o.value)) : wu(n, o.value);
      }
      return o.value === void 0 ? o : t.innerType._zod.run(o, i);
    };
  }), gR = W("$ZodExactOptional", (e, t) => {
    Hf.init(e, t), $e(e._zod, "values", () => t.innerType._zod.values), $e(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (o, i) => t.innerType._zod.run(o, i);
  }), TR = W("$ZodNullable", (e, t) => {
    pt.init(e, t), $e(e._zod, "optin", () => t.innerType._zod.optin), $e(e._zod, "optout", () => t.innerType._zod.optout), $e(e._zod, "pattern", () => {
      const o = t.innerType._zod.pattern;
      return o ? new RegExp(`^(${qc(o.source)}|null)$`) : void 0;
    }), $e(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...t.innerType._zod.values,
      null
    ]) : void 0), e._zod.parse = (o, i) => o.value === null ? o : t.innerType._zod.run(o, i);
  }), ER = W("$ZodDefault", (e, t) => {
    pt.init(e, t), e._zod.optin = "optional", $e(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, i) => {
      if (i.direction === "backward") return t.innerType._zod.run(o, i);
      if (o.value === void 0) return o.value = t.defaultValue, o;
      const n = t.innerType._zod.run(o, i);
      return n instanceof Promise ? n.then((s) => yu(s, t)) : yu(n, t);
    };
  });
  function yu(e, t) {
    return e.value === void 0 && (e.value = t.defaultValue), e;
  }
  const IR = W("$ZodPrefault", (e, t) => {
    pt.init(e, t), e._zod.optin = "optional", $e(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, i) => (i.direction === "backward" || o.value === void 0 && (o.value = t.defaultValue), t.innerType._zod.run(o, i));
  }), OR = W("$ZodNonOptional", (e, t) => {
    pt.init(e, t), $e(e._zod, "values", () => {
      const o = t.innerType._zod.values;
      return o ? new Set([
        ...o
      ].filter((i) => i !== void 0)) : void 0;
    }), e._zod.parse = (o, i) => {
      const n = t.innerType._zod.run(o, i);
      return n instanceof Promise ? n.then((s) => Su(s, e)) : Su(n, e);
    };
  });
  function Su(e, t) {
    return !e.issues.length && e.value === void 0 && e.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: e.value,
      inst: t
    }), e;
  }
  const RR = W("$ZodCatch", (e, t) => {
    pt.init(e, t), $e(e._zod, "optin", () => t.innerType._zod.optin), $e(e._zod, "optout", () => t.innerType._zod.optout), $e(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, i) => {
      if (i.direction === "backward") return t.innerType._zod.run(o, i);
      const n = t.innerType._zod.run(o, i);
      return n instanceof Promise ? n.then((s) => (o.value = s.value, s.issues.length && (o.value = t.catchValue({
        ...o,
        error: {
          issues: s.issues.map((l) => Di(l, i, Ci()))
        },
        input: o.value
      }), o.issues = []), o)) : (o.value = n.value, n.issues.length && (o.value = t.catchValue({
        ...o,
        error: {
          issues: n.issues.map((s) => Di(s, i, Ci()))
        },
        input: o.value
      }), o.issues = []), o);
    };
  }), wR = W("$ZodPipe", (e, t) => {
    pt.init(e, t), $e(e._zod, "values", () => t.in._zod.values), $e(e._zod, "optin", () => t.in._zod.optin), $e(e._zod, "optout", () => t.out._zod.optout), $e(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (o, i) => {
      if (i.direction === "backward") {
        const s = t.out._zod.run(o, i);
        return s instanceof Promise ? s.then((l) => $r(l, t.in, i)) : $r(s, t.in, i);
      }
      const n = t.in._zod.run(o, i);
      return n instanceof Promise ? n.then((s) => $r(s, t.out, i)) : $r(n, t.out, i);
    };
  });
  function $r(e, t, o) {
    return e.issues.length ? (e.aborted = true, e) : t._zod.run({
      value: e.value,
      issues: e.issues
    }, o);
  }
  const yR = W("$ZodReadonly", (e, t) => {
    pt.init(e, t), $e(e._zod, "propValues", () => t.innerType._zod.propValues), $e(e._zod, "values", () => t.innerType._zod.values), $e(e._zod, "optin", () => {
      var _a3, _b3;
      return (_b3 = (_a3 = t.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optin;
    }), $e(e._zod, "optout", () => {
      var _a3, _b3;
      return (_b3 = (_a3 = t.innerType) == null ? void 0 : _a3._zod) == null ? void 0 : _b3.optout;
    }), e._zod.parse = (o, i) => {
      if (i.direction === "backward") return t.innerType._zod.run(o, i);
      const n = t.innerType._zod.run(o, i);
      return n instanceof Promise ? n.then(Au) : Au(n);
    };
  });
  function Au(e) {
    return e.value = Object.freeze(e.value), e;
  }
  const SR = W("$ZodCustom", (e, t) => {
    to.init(e, t), pt.init(e, t), e._zod.parse = (o, i) => o, e._zod.check = (o) => {
      const i = o.value, n = t.fn(i);
      if (n instanceof Promise) return n.then((s) => Nu(s, o, i, e));
      Nu(n, o, i, e);
    };
  });
  function Nu(e, t, o, i) {
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
      i._zod.def.params && (n.params = i._zod.def.params), t.issues.push(yr(n));
    }
  }
  var bu;
  class AR {
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
  function NR() {
    return new AR();
  }
  (bu = globalThis).__zod_globalRegistry ?? (bu.__zod_globalRegistry = NR());
  const or = globalThis.__zod_globalRegistry;
  function bR(e, t) {
    return new e({
      type: "string",
      ...Re(t)
    });
  }
  function vR(e, t) {
    return new e({
      type: "string",
      format: "email",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function vu(e, t) {
    return new e({
      type: "string",
      format: "guid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function LR(e, t) {
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
  function DR(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v6",
      ...Re(t)
    });
  }
  function HR(e, t) {
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
  function PR(e, t) {
    return new e({
      type: "string",
      format: "emoji",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function FR(e, t) {
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
  function kR(e, t) {
    return new e({
      type: "string",
      format: "ulid",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function WR(e, t) {
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
  function jR(e, t) {
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
  function ZR(e, t) {
    return new e({
      type: "string",
      format: "jwt",
      check: "string_format",
      abort: false,
      ...Re(t)
    });
  }
  function qR(e, t) {
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
  function ew(e, t) {
    return new e({
      type: "number",
      check: "number_format",
      abort: false,
      format: "safeint",
      ...Re(t)
    });
  }
  function tw(e, t) {
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
  function iw(e, t) {
    return new e({
      type: "never",
      ...Re(t)
    });
  }
  function Lu(e, t) {
    return new Nf({
      check: "less_than",
      ...Re(t),
      value: e,
      inclusive: false
    });
  }
  function Fa(e, t) {
    return new Nf({
      check: "less_than",
      ...Re(t),
      value: e,
      inclusive: true
    });
  }
  function Cu(e, t) {
    return new bf({
      check: "greater_than",
      ...Re(t),
      value: e,
      inclusive: false
    });
  }
  function _a(e, t) {
    return new bf({
      check: "greater_than",
      ...Re(t),
      value: e,
      inclusive: true
    });
  }
  function Du(e, t) {
    return new IO({
      check: "multiple_of",
      ...Re(t),
      value: e
    });
  }
  function Mf(e, t) {
    return new RO({
      check: "max_length",
      ...Re(t),
      maximum: e
    });
  }
  function Rs(e, t) {
    return new wO({
      check: "min_length",
      ...Re(t),
      minimum: e
    });
  }
  function Pf(e, t) {
    return new yO({
      check: "length_equals",
      ...Re(t),
      length: e
    });
  }
  function nw(e, t) {
    return new SO({
      check: "string_format",
      format: "regex",
      ...Re(t),
      pattern: e
    });
  }
  function rw(e) {
    return new AO({
      check: "string_format",
      format: "lowercase",
      ...Re(e)
    });
  }
  function sw(e) {
    return new NO({
      check: "string_format",
      format: "uppercase",
      ...Re(e)
    });
  }
  function aw(e, t) {
    return new bO({
      check: "string_format",
      format: "includes",
      ...Re(t),
      includes: e
    });
  }
  function cw(e, t) {
    return new vO({
      check: "string_format",
      format: "starts_with",
      ...Re(t),
      prefix: e
    });
  }
  function lw(e, t) {
    return new LO({
      check: "string_format",
      format: "ends_with",
      ...Re(t),
      suffix: e
    });
  }
  function Yn(e) {
    return new CO({
      check: "overwrite",
      tx: e
    });
  }
  function uw(e) {
    return Yn((t) => t.normalize(e));
  }
  function hw() {
    return Yn((e) => e.trim());
  }
  function fw() {
    return Yn((e) => e.toLowerCase());
  }
  function dw() {
    return Yn((e) => e.toUpperCase());
  }
  function pw() {
    return Yn((e) => SI(e));
  }
  function mw(e, t, o) {
    return new e({
      type: "array",
      element: t,
      ...Re(o)
    });
  }
  function gw(e, t, o) {
    const i = Re(o);
    return i.abort ?? (i.abort = true), new e({
      type: "custom",
      check: "custom",
      fn: t,
      ...i
    });
  }
  function Tw(e, t, o) {
    return new e({
      type: "custom",
      check: "custom",
      fn: t,
      ...Re(o)
    });
  }
  function Ew(e) {
    const t = Iw((o) => (o.addIssue = (i) => {
      if (typeof i == "string") o.issues.push(yr(i, o.value, t._zod.def));
      else {
        const n = i;
        n.fatal && (n.continue = false), n.code ?? (n.code = "custom"), n.input ?? (n.input = o.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), o.issues.push(yr(n));
      }
    }, e(o.value, o)));
    return t;
  }
  function Iw(e, t) {
    const o = new to({
      check: "custom",
      ...Re(t)
    });
    return o._zod.check = e, o;
  }
  function Ff(e) {
    let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
    return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
      processors: e.processors ?? {},
      metadataRegistry: (e == null ? void 0 : e.metadata) ?? or,
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
      const m = {
        ...o,
        schemaPath: [
          ...o.schemaPath,
          e
        ],
        path: o.path
      };
      if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, l.schema, m);
      else {
        const N = l.schema, A = t.processors[n.type];
        if (!A) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);
        A(e, t, N, m);
      }
      const R = e._zod.parent;
      R && (l.ref || (l.ref = R), Rt(R, t, m), t.seen.get(R).isParent = true);
    }
    const d = t.metadataRegistry.get(e);
    return d && Object.assign(l.schema, d), t.io === "input" && xt(e) && (delete l.schema.examples, delete l.schema.default), t.io === "input" && l.schema._prefault && ((i = l.schema).default ?? (i.default = l.schema._prefault)), delete l.schema._prefault, t.seen.get(e).schema;
  }
  function _f(e, t) {
    var _a3, _b3, _c2, _d2;
    const o = e.seen.get(t);
    if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = /* @__PURE__ */ new Map();
    for (const l of e.seen.entries()) {
      const h = (_a3 = e.metadataRegistry.get(l[0])) == null ? void 0 : _a3.id;
      if (h) {
        const d = i.get(h);
        if (d && d !== l[0]) throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
        i.set(h, l[0]);
      }
    }
    const n = (l) => {
      var _a4;
      const h = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        const R = (_a4 = e.external.registry.get(l[0])) == null ? void 0 : _a4.id, N = e.external.uri ?? ((M) => M);
        if (R) return {
          ref: N(R)
        };
        const A = l[1].defId ?? l[1].schema.id ?? `schema${e.counter++}`;
        return l[1].defId = A, {
          defId: A,
          ref: `${N("__shared")}#/${h}/${A}`
        };
      }
      if (l[1] === o) return {
        ref: "#"
      };
      const g = `#/${h}/`, m = l[1].schema.id ?? `__schema${e.counter++}`;
      return {
        defId: m,
        ref: g + m
      };
    }, s = (l) => {
      if (l[1].schema.$ref) return;
      const h = l[1], { ref: d, defId: g } = n(l);
      h.def = {
        ...h.schema
      }, g && (h.defId = g);
      const m = h.schema;
      for (const R in m) delete m[R];
      m.$ref = d;
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
  function Uf(e, t) {
    var _a3, _b3, _c2;
    const o = e.seen.get(t);
    if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = (l) => {
      const h = e.seen.get(l);
      if (h.ref === null) return;
      const d = h.def ?? h.schema, g = {
        ...d
      }, m = h.ref;
      if (h.ref = null, m) {
        i(m);
        const N = e.seen.get(m), A = N.schema;
        if (A.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (d.allOf = d.allOf ?? [], d.allOf.push(A)) : Object.assign(d, A), Object.assign(d, g), l._zod.parent === m) for (const D in d) D === "$ref" || D === "allOf" || D in g || delete d[D];
        if (A.$ref) for (const D in d) D === "$ref" || D === "allOf" || D in N.def && JSON.stringify(d[D]) === JSON.stringify(N.def[D]) && delete d[D];
      }
      const R = l._zod.parent;
      if (R && R !== m) {
        i(R);
        const N = e.seen.get(R);
        if ((N == null ? void 0 : N.schema.$ref) && (d.$ref = N.schema.$ref, N.def)) for (const A in d) A === "$ref" || A === "allOf" || A in N.def && JSON.stringify(d[A]) === JSON.stringify(N.def[A]) && delete d[A];
      }
      e.override({
        zodSchema: l,
        jsonSchema: d,
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
  const Ow = (e, t = {}) => (o) => {
    const i = Ff({
      ...o,
      processors: t
    });
    return Rt(e, i), _f(i, e), Uf(i, e);
  }, ws = (e, t, o = {}) => (i) => {
    const { libraryOptions: n, target: s } = i ?? {}, l = Ff({
      ...n ?? {},
      target: s,
      io: t,
      processors: o
    });
    return Rt(e, l), _f(l, e), Uf(l, e);
  }, Rw = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  }, ww = (e, t, o, i) => {
    const n = o;
    n.type = "string";
    const { minimum: s, maximum: l, format: h, patterns: d, contentEncoding: g } = e._zod.bag;
    if (typeof s == "number" && (n.minLength = s), typeof l == "number" && (n.maxLength = l), h && (n.format = Rw[h] ?? h, n.format === "" && delete n.format, h === "time" && delete n.format), g && (n.contentEncoding = g), d && d.size > 0) {
      const m = [
        ...d
      ];
      m.length === 1 ? n.pattern = m[0].source : m.length > 1 && (n.allOf = [
        ...m.map((R) => ({
          ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
            type: "string"
          } : {},
          pattern: R.source
        }))
      ]);
    }
  }, yw = (e, t, o, i) => {
    const n = o, { minimum: s, maximum: l, format: h, multipleOf: d, exclusiveMaximum: g, exclusiveMinimum: m } = e._zod.bag;
    typeof h == "string" && h.includes("int") ? n.type = "integer" : n.type = "number", typeof m == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.minimum = m, n.exclusiveMinimum = true) : n.exclusiveMinimum = m), typeof s == "number" && (n.minimum = s, typeof m == "number" && t.target !== "draft-04" && (m >= s ? delete n.minimum : delete n.exclusiveMinimum)), typeof g == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.maximum = g, n.exclusiveMaximum = true) : n.exclusiveMaximum = g), typeof l == "number" && (n.maximum = l, typeof g == "number" && t.target !== "draft-04" && (g <= l ? delete n.maximum : delete n.exclusiveMaximum)), typeof d == "number" && (n.multipleOf = d);
  }, Sw = (e, t, o, i) => {
    o.type = "boolean";
  }, Aw = (e, t, o, i) => {
    o.not = {};
  }, Nw = (e, t, o, i) => {
  }, bw = (e, t, o, i) => {
    const n = e._zod.def, s = mf(n.entries);
    s.every((l) => typeof l == "number") && (o.type = "number"), s.every((l) => typeof l == "string") && (o.type = "string"), o.enum = s;
  }, vw = (e, t, o, i) => {
    if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
  }, Lw = (e, t, o, i) => {
    if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
  }, Cw = (e, t, o, i) => {
    const n = o, s = e._zod.def, { minimum: l, maximum: h } = e._zod.bag;
    typeof l == "number" && (n.minItems = l), typeof h == "number" && (n.maxItems = h), n.type = "array", n.items = Rt(s.element, t, {
      ...i,
      path: [
        ...i.path,
        "items"
      ]
    });
  }, Dw = (e, t, o, i) => {
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
    const h = new Set(Object.keys(l)), d = new Set([
      ...h
    ].filter((g) => {
      const m = s.shape[g]._zod;
      return t.io === "input" ? m.optin === void 0 : m.optout === void 0;
    }));
    d.size > 0 && (n.required = Array.from(d)), ((_a3 = s.catchall) == null ? void 0 : _a3._zod.def.type) === "never" ? n.additionalProperties = false : s.catchall ? s.catchall && (n.additionalProperties = Rt(s.catchall, t, {
      ...i,
      path: [
        ...i.path,
        "additionalProperties"
      ]
    })) : t.io === "output" && (n.additionalProperties = false);
  }, Hw = (e, t, o, i) => {
    const n = e._zod.def, s = n.inclusive === false, l = n.options.map((h, d) => Rt(h, t, {
      ...i,
      path: [
        ...i.path,
        s ? "oneOf" : "anyOf",
        d
      ]
    }));
    s ? o.oneOf = l : o.anyOf = l;
  }, Mw = (e, t, o, i) => {
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
    }), h = (g) => "allOf" in g && Object.keys(g).length === 1, d = [
      ...h(s) ? s.allOf : [
        s
      ],
      ...h(l) ? l.allOf : [
        l
      ]
    ];
    o.allOf = d;
  }, Pw = (e, t, o, i) => {
    var _a3;
    const n = o, s = e._zod.def;
    n.type = "object";
    const l = s.keyType, d = (_a3 = l._zod.bag) == null ? void 0 : _a3.patterns;
    if (s.mode === "loose" && d && d.size > 0) {
      const m = Rt(s.valueType, t, {
        ...i,
        path: [
          ...i.path,
          "patternProperties",
          "*"
        ]
      });
      n.patternProperties = {};
      for (const R of d) n.patternProperties[R.source] = m;
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
      const m = [
        ...g
      ].filter((R) => typeof R == "string" || typeof R == "number");
      m.length > 0 && (n.required = m);
    }
  }, Fw = (e, t, o, i) => {
    const n = e._zod.def, s = Rt(n.innerType, t, i), l = t.seen.get(e);
    t.target === "openapi-3.0" ? (l.ref = n.innerType, o.nullable = true) : o.anyOf = [
      s,
      {
        type: "null"
      }
    ];
  }, _w = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType;
  }, Uw = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType, o.default = JSON.parse(JSON.stringify(n.defaultValue));
  }, kw = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType, t.io === "input" && (o._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
  }, Ww = (e, t, o, i) => {
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
  }, Gw = (e, t, o, i) => {
    const n = e._zod.def, s = t.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
    Rt(s, t, i);
    const l = t.seen.get(e);
    l.ref = s;
  }, Bw = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType, o.readOnly = true;
  }, kf = (e, t, o, i) => {
    const n = e._zod.def;
    Rt(n.innerType, t, i);
    const s = t.seen.get(e);
    s.ref = n.innerType;
  }, jw = W("ZodISODateTime", (e, t) => {
    xO.init(e, t), dt.init(e, t);
  });
  function Yw(e) {
    return qR(jw, e);
  }
  const xw = W("ZodISODate", (e, t) => {
    zO.init(e, t), dt.init(e, t);
  });
  function zw(e) {
    return KR(xw, e);
  }
  const $w = W("ZodISOTime", (e, t) => {
    $O.init(e, t), dt.init(e, t);
  });
  function Vw(e) {
    return JR($w, e);
  }
  const Zw = W("ZodISODuration", (e, t) => {
    VO.init(e, t), dt.init(e, t);
  });
  function qw(e) {
    return XR(Zw, e);
  }
  const Kw = (e, t) => {
    If.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
      format: {
        value: (o) => UI(e, o)
      },
      flatten: {
        value: (o) => _I(e, o)
      },
      addIssue: {
        value: (o) => {
          e.issues.push(o), e.message = JSON.stringify(e.issues, mc, 2);
        }
      },
      addIssues: {
        value: (o) => {
          e.issues.push(...o), e.message = JSON.stringify(e.issues, mc, 2);
        }
      },
      isEmpty: {
        get() {
          return e.issues.length === 0;
        }
      }
    });
  }, Io = W("ZodError", Kw, {
    Parent: Error
  }), Jw = Jc(Io), Xw = Xc(Io), Qw = ea(Io), ey = ta(Io), ty = GI(Io), oy = BI(Io), iy = jI(Io), ny = YI(Io), ry = xI(Io), sy = zI(Io), ay = $I(Io), cy = VI(Io), mt = W("ZodType", (e, t) => (pt.init(e, t), Object.assign(e["~standard"], {
    jsonSchema: {
      input: ws(e, "input"),
      output: ws(e, "output")
    }
  }), e.toJSONSchema = Ow(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", {
    value: t
  }), e.check = (...o) => e.clone(_i(t, {
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
  }), e.with = e.check, e.clone = (o, i) => Ui(e, o, i), e.brand = () => e, e.register = ((o, i) => (o.add(e, i), e)), e.parse = (o, i) => Jw(e, o, i, {
    callee: e.parse
  }), e.safeParse = (o, i) => Qw(e, o, i), e.parseAsync = async (o, i) => Xw(e, o, i, {
    callee: e.parseAsync
  }), e.safeParseAsync = async (o, i) => ey(e, o, i), e.spa = e.safeParseAsync, e.encode = (o, i) => ty(e, o, i), e.decode = (o, i) => oy(e, o, i), e.encodeAsync = async (o, i) => iy(e, o, i), e.decodeAsync = async (o, i) => ny(e, o, i), e.safeEncode = (o, i) => ry(e, o, i), e.safeDecode = (o, i) => sy(e, o, i), e.safeEncodeAsync = async (o, i) => ay(e, o, i), e.safeDecodeAsync = async (o, i) => cy(e, o, i), e.refine = (o, i) => e.check(oS(o, i)), e.superRefine = (o) => e.check(iS(o)), e.overwrite = (o) => e.check(Yn(o)), e.optional = () => Fu(e), e.exactOptional = () => Yy(e), e.nullable = () => _u(e), e.nullish = () => Fu(_u(e)), e.nonoptional = (o) => qy(e, o), e.array = () => ys(e), e.or = (o) => Fy([
    e,
    o
  ]), e.and = (o) => Uy(e, o), e.transform = (o) => Uu(e, By(o)), e.default = (o) => $y(e, o), e.prefault = (o) => Zy(e, o), e.catch = (o) => Jy(e, o), e.pipe = (o) => Uu(e, o), e.readonly = () => eS(e), e.describe = (o) => {
    const i = e.clone();
    return or.add(i, {
      description: o
    }), i;
  }, Object.defineProperty(e, "description", {
    get() {
      var _a3;
      return (_a3 = or.get(e)) == null ? void 0 : _a3.description;
    },
    configurable: true
  }), e.meta = (...o) => {
    if (o.length === 0) return or.get(e);
    const i = e.clone();
    return or.add(i, o[0]), i;
  }, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (o) => o(e), e)), Wf = W("_ZodString", (e, t) => {
    Qc.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (i, n, s) => ww(e, i, n);
    const o = e._zod.bag;
    e.format = o.format ?? null, e.minLength = o.minimum ?? null, e.maxLength = o.maximum ?? null, e.regex = (...i) => e.check(nw(...i)), e.includes = (...i) => e.check(aw(...i)), e.startsWith = (...i) => e.check(cw(...i)), e.endsWith = (...i) => e.check(lw(...i)), e.min = (...i) => e.check(Rs(...i)), e.max = (...i) => e.check(Mf(...i)), e.length = (...i) => e.check(Pf(...i)), e.nonempty = (...i) => e.check(Rs(1, ...i)), e.lowercase = (i) => e.check(rw(i)), e.uppercase = (i) => e.check(sw(i)), e.trim = () => e.check(hw()), e.normalize = (...i) => e.check(uw(...i)), e.toLowerCase = () => e.check(fw()), e.toUpperCase = () => e.check(dw()), e.slugify = () => e.check(pw());
  }), ly = W("ZodString", (e, t) => {
    Qc.init(e, t), Wf.init(e, t), e.email = (o) => e.check(vR(uy, o)), e.url = (o) => e.check(MR(hy, o)), e.jwt = (o) => e.check(ZR(Ny, o)), e.emoji = (o) => e.check(PR(fy, o)), e.guid = (o) => e.check(vu(Hu, o)), e.uuid = (o) => e.check(LR(Vr, o)), e.uuidv4 = (o) => e.check(CR(Vr, o)), e.uuidv6 = (o) => e.check(DR(Vr, o)), e.uuidv7 = (o) => e.check(HR(Vr, o)), e.nanoid = (o) => e.check(FR(dy, o)), e.guid = (o) => e.check(vu(Hu, o)), e.cuid = (o) => e.check(_R(py, o)), e.cuid2 = (o) => e.check(UR(my, o)), e.ulid = (o) => e.check(kR(gy, o)), e.base64 = (o) => e.check(zR(yy, o)), e.base64url = (o) => e.check($R(Sy, o)), e.xid = (o) => e.check(WR(Ty, o)), e.ksuid = (o) => e.check(GR(Ey, o)), e.ipv4 = (o) => e.check(BR(Iy, o)), e.ipv6 = (o) => e.check(jR(Oy, o)), e.cidrv4 = (o) => e.check(YR(Ry, o)), e.cidrv6 = (o) => e.check(xR(wy, o)), e.e164 = (o) => e.check(VR(Ay, o)), e.datetime = (o) => e.check(Yw(o)), e.date = (o) => e.check(zw(o)), e.time = (o) => e.check(Vw(o)), e.duration = (o) => e.check(qw(o));
  });
  function oi(e) {
    return bR(ly, e);
  }
  const dt = W("ZodStringFormat", (e, t) => {
    ut.init(e, t), Wf.init(e, t);
  }), uy = W("ZodEmail", (e, t) => {
    FO.init(e, t), dt.init(e, t);
  }), Hu = W("ZodGUID", (e, t) => {
    MO.init(e, t), dt.init(e, t);
  }), Vr = W("ZodUUID", (e, t) => {
    PO.init(e, t), dt.init(e, t);
  }), hy = W("ZodURL", (e, t) => {
    _O.init(e, t), dt.init(e, t);
  }), fy = W("ZodEmoji", (e, t) => {
    UO.init(e, t), dt.init(e, t);
  }), dy = W("ZodNanoID", (e, t) => {
    kO.init(e, t), dt.init(e, t);
  }), py = W("ZodCUID", (e, t) => {
    WO.init(e, t), dt.init(e, t);
  }), my = W("ZodCUID2", (e, t) => {
    GO.init(e, t), dt.init(e, t);
  }), gy = W("ZodULID", (e, t) => {
    BO.init(e, t), dt.init(e, t);
  }), Ty = W("ZodXID", (e, t) => {
    jO.init(e, t), dt.init(e, t);
  }), Ey = W("ZodKSUID", (e, t) => {
    YO.init(e, t), dt.init(e, t);
  }), Iy = W("ZodIPv4", (e, t) => {
    ZO.init(e, t), dt.init(e, t);
  }), Oy = W("ZodIPv6", (e, t) => {
    qO.init(e, t), dt.init(e, t);
  }), Ry = W("ZodCIDRv4", (e, t) => {
    KO.init(e, t), dt.init(e, t);
  }), wy = W("ZodCIDRv6", (e, t) => {
    JO.init(e, t), dt.init(e, t);
  }), yy = W("ZodBase64", (e, t) => {
    XO.init(e, t), dt.init(e, t);
  }), Sy = W("ZodBase64URL", (e, t) => {
    eR.init(e, t), dt.init(e, t);
  }), Ay = W("ZodE164", (e, t) => {
    tR.init(e, t), dt.init(e, t);
  }), Ny = W("ZodJWT", (e, t) => {
    iR.init(e, t), dt.init(e, t);
  }), Gf = W("ZodNumber", (e, t) => {
    Lf.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (i, n, s) => yw(e, i, n), e.gt = (i, n) => e.check(Cu(i, n)), e.gte = (i, n) => e.check(_a(i, n)), e.min = (i, n) => e.check(_a(i, n)), e.lt = (i, n) => e.check(Lu(i, n)), e.lte = (i, n) => e.check(Fa(i, n)), e.max = (i, n) => e.check(Fa(i, n)), e.int = (i) => e.check(Mu(i)), e.safe = (i) => e.check(Mu(i)), e.positive = (i) => e.check(Cu(0, i)), e.nonnegative = (i) => e.check(_a(0, i)), e.negative = (i) => e.check(Lu(0, i)), e.nonpositive = (i) => e.check(Fa(0, i)), e.multipleOf = (i, n) => e.check(Du(i, n)), e.step = (i, n) => e.check(Du(i, n)), e.finite = () => e;
    const o = e._zod.bag;
    e.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), e.isFinite = true, e.format = o.format ?? null;
  });
  function et(e) {
    return QR(Gf, e);
  }
  const by = W("ZodNumberFormat", (e, t) => {
    nR.init(e, t), Gf.init(e, t);
  });
  function Mu(e) {
    return ew(by, e);
  }
  const vy = W("ZodBoolean", (e, t) => {
    rR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Sw(e, o, i);
  });
  function Bf(e) {
    return tw(vy, e);
  }
  const Ly = W("ZodUnknown", (e, t) => {
    sR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Nw();
  });
  function Pu() {
    return ow(Ly);
  }
  const Cy = W("ZodNever", (e, t) => {
    aR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Aw(e, o, i);
  });
  function Dy(e) {
    return iw(Cy, e);
  }
  const Hy = W("ZodArray", (e, t) => {
    cR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Cw(e, o, i, n), e.element = t.element, e.min = (o, i) => e.check(Rs(o, i)), e.nonempty = (o) => e.check(Rs(1, o)), e.max = (o, i) => e.check(Mf(o, i)), e.length = (o, i) => e.check(Pf(o, i)), e.unwrap = () => e.element;
  });
  function ys(e, t) {
    return mw(Hy, e, t);
  }
  const My = W("ZodObject", (e, t) => {
    uR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Dw(e, o, i, n), $e(e, "shape", () => t.shape), e.keyof = () => jf(Object.keys(e._zod.def.shape)), e.catchall = (o) => e.clone({
      ...e._zod.def,
      catchall: o
    }), e.passthrough = () => e.clone({
      ...e._zod.def,
      catchall: Pu()
    }), e.loose = () => e.clone({
      ...e._zod.def,
      catchall: Pu()
    }), e.strict = () => e.clone({
      ...e._zod.def,
      catchall: Dy()
    }), e.strip = () => e.clone({
      ...e._zod.def,
      catchall: void 0
    }), e.extend = (o) => DI(e, o), e.safeExtend = (o) => HI(e, o), e.merge = (o) => MI(e, o), e.pick = (o) => LI(e, o), e.omit = (o) => CI(e, o), e.partial = (...o) => PI(Yf, e, o[0]), e.required = (...o) => FI(xf, e, o[0]);
  });
  function Mn(e, t) {
    const o = {
      type: "object",
      shape: e ?? {},
      ...Re(t)
    };
    return new My(o);
  }
  const Py = W("ZodUnion", (e, t) => {
    hR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Hw(e, o, i, n), e.options = t.options;
  });
  function Fy(e, t) {
    return new Py({
      type: "union",
      options: e,
      ...Re(t)
    });
  }
  const _y = W("ZodIntersection", (e, t) => {
    fR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Mw(e, o, i, n);
  });
  function Uy(e, t) {
    return new _y({
      type: "intersection",
      left: e,
      right: t
    });
  }
  const ky = W("ZodRecord", (e, t) => {
    dR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Pw(e, o, i, n), e.keyType = t.keyType, e.valueType = t.valueType;
  });
  function Wy(e, t, o) {
    return new ky({
      type: "record",
      keyType: e,
      valueType: t,
      ...Re(o)
    });
  }
  const Tc = W("ZodEnum", (e, t) => {
    pR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (i, n, s) => bw(e, i, n), e.enum = t.entries, e.options = Object.values(t.entries);
    const o = new Set(Object.keys(t.entries));
    e.extract = (i, n) => {
      const s = {};
      for (const l of i) if (o.has(l)) s[l] = t.entries[l];
      else throw new Error(`Key ${l} not found in enum`);
      return new Tc({
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
      return new Tc({
        ...t,
        checks: [],
        ...Re(n),
        entries: s
      });
    };
  });
  function jf(e, t) {
    const o = Array.isArray(e) ? Object.fromEntries(e.map((i) => [
      i,
      i
    ])) : e;
    return new Tc({
      type: "enum",
      entries: o,
      ...Re(t)
    });
  }
  const Gy = W("ZodTransform", (e, t) => {
    mR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Lw(e, o), e._zod.parse = (o, i) => {
      if (i.direction === "backward") throw new df(e.constructor.name);
      o.addIssue = (s) => {
        if (typeof s == "string") o.issues.push(yr(s, o.value, t));
        else {
          const l = s;
          l.fatal && (l.continue = false), l.code ?? (l.code = "custom"), l.input ?? (l.input = o.value), l.inst ?? (l.inst = e), o.issues.push(yr(l));
        }
      };
      const n = t.transform(o.value, o);
      return n instanceof Promise ? n.then((s) => (o.value = s, o)) : (o.value = n, o);
    };
  });
  function By(e) {
    return new Gy({
      type: "transform",
      transform: e
    });
  }
  const Yf = W("ZodOptional", (e, t) => {
    Hf.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => kf(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function Fu(e) {
    return new Yf({
      type: "optional",
      innerType: e
    });
  }
  const jy = W("ZodExactOptional", (e, t) => {
    gR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => kf(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function Yy(e) {
    return new jy({
      type: "optional",
      innerType: e
    });
  }
  const xy = W("ZodNullable", (e, t) => {
    TR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Fw(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function _u(e) {
    return new xy({
      type: "nullable",
      innerType: e
    });
  }
  const zy = W("ZodDefault", (e, t) => {
    ER.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Uw(e, o, i, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
  });
  function $y(e, t) {
    return new zy({
      type: "default",
      innerType: e,
      get defaultValue() {
        return typeof t == "function" ? t() : Tf(t);
      }
    });
  }
  const Vy = W("ZodPrefault", (e, t) => {
    IR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => kw(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function Zy(e, t) {
    return new Vy({
      type: "prefault",
      innerType: e,
      get defaultValue() {
        return typeof t == "function" ? t() : Tf(t);
      }
    });
  }
  const xf = W("ZodNonOptional", (e, t) => {
    OR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => _w(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function qy(e, t) {
    return new xf({
      type: "nonoptional",
      innerType: e,
      ...Re(t)
    });
  }
  const Ky = W("ZodCatch", (e, t) => {
    RR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Ww(e, o, i, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
  });
  function Jy(e, t) {
    return new Ky({
      type: "catch",
      innerType: e,
      catchValue: typeof t == "function" ? t : () => t
    });
  }
  const Xy = W("ZodPipe", (e, t) => {
    wR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Gw(e, o, i, n), e.in = t.in, e.out = t.out;
  });
  function Uu(e, t) {
    return new Xy({
      type: "pipe",
      in: e,
      out: t
    });
  }
  const Qy = W("ZodReadonly", (e, t) => {
    yR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => Bw(e, o, i, n), e.unwrap = () => e._zod.def.innerType;
  });
  function eS(e) {
    return new Qy({
      type: "readonly",
      innerType: e
    });
  }
  const zf = W("ZodCustom", (e, t) => {
    SR.init(e, t), mt.init(e, t), e._zod.processJSONSchema = (o, i, n) => vw(e, o);
  });
  function tS(e, t) {
    return gw(zf, e ?? (() => true), t);
  }
  function oS(e, t = {}) {
    return Tw(zf, e, t);
  }
  function iS(e) {
    return Ew(e);
  }
  const $f = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, Vf = Mn({
    id: oi().regex($f),
    routeId: oi(),
    point: tS((e) => {
      const t = e;
      return typeof t.latitude == "number" && typeof t.longitude == "number";
    }),
    timestamp: et().positive(),
    sequence: et().int().nonnegative(),
    merged: Bf(),
    distanceIncrement: et().nonnegative().optional()
  }), nS = Mn({
    routeId: oi(),
    lastMergeTime: et().positive(),
    unmergedCount: et().int().nonnegative(),
    lastSequence: et().int().nonnegative(),
    totalPoints: et().int().nonnegative(),
    checksum: oi().optional()
  });
  Mn({
    id: oi().regex($f),
    routeId: oi(),
    startSequence: et().int().nonnegative(),
    endSequence: et().int().nonnegative(),
    pointCount: et().int().positive(),
    distanceAdded: et().nonnegative(),
    mergeTime: et().positive(),
    status: jf([
      "pending",
      "completed",
      "failed"
    ]),
    error: oi().optional()
  });
  Mn({
    appendLatency: ys(et().positive()),
    mergeDuration: ys(et().positive()),
    logSizePerRoute: Wy(oi(), et().int().nonnegative()),
    failedAppends: et().int().nonnegative(),
    failedMerges: et().int().nonnegative(),
    recoveryEvents: et().int().nonnegative(),
    mergeFrequency: et(),
    compressionRatio: et(),
    memoryUsage: et()
  });
  Mn({
    initialized: Bf(),
    version: et().int().positive(),
    lastMergeTime: et().positive(),
    activeRoutes: ys(oi()),
    statistics: Mn({
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
  function rS(e, t, o) {
    return Vf.parse({
      id: crypto.randomUUID(),
      routeId: e,
      point: t,
      timestamp: Date.now(),
      sequence: o,
      merged: false
    });
  }
  function Ua(e) {
    return Vf.parse(e);
  }
  function ku(e) {
    return nS.parse(e);
  }
  const Lt = [];
  for (let e = 0; e < 256; ++e) Lt.push((e + 256).toString(16).slice(1));
  function sS(e, t = 0) {
    return (Lt[e[t + 0]] + Lt[e[t + 1]] + Lt[e[t + 2]] + Lt[e[t + 3]] + "-" + Lt[e[t + 4]] + Lt[e[t + 5]] + "-" + Lt[e[t + 6]] + Lt[e[t + 7]] + "-" + Lt[e[t + 8]] + Lt[e[t + 9]] + "-" + Lt[e[t + 10]] + Lt[e[t + 11]] + Lt[e[t + 12]] + Lt[e[t + 13]] + Lt[e[t + 14]] + Lt[e[t + 15]]).toLowerCase();
  }
  let ka;
  const aS = new Uint8Array(16);
  function cS() {
    if (!ka) {
      if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      ka = crypto.getRandomValues.bind(crypto);
    }
    return ka(aS);
  }
  const lS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Wu = {
    randomUUID: lS
  };
  Wa = function(e, t, o) {
    var _a3;
    if (Wu.randomUUID && !e) return Wu.randomUUID();
    e = e || {};
    const i = e.random ?? ((_a3 = e.rng) == null ? void 0 : _a3.call(e)) ?? cS();
    if (i.length < 16) throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, sS(i);
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
  function uS() {
    return {
      ...Ec(),
      version: 1,
      signature: void 0
    };
  }
  Ss = class {
    constructor(t = Wa(), o, i, n) {
      __publicField(this, "id");
      __publicField(this, "meta");
      __publicField(this, "routes");
      __publicField(this, "drafts");
      this.id = t, this.routes = o || {
        id: Wa(),
        meta: Ec(),
        routes: []
      }, this.drafts = i || {
        id: Wa(),
        meta: Ec(),
        drafts: []
      }, this.meta = {
        ...uS(),
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
      return new Ss(t.id, t.routes, t.drafts, t.meta);
    }
    clone() {
      return Ss.fromStorage(this.toStorage());
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
  let Me;
  const Zf = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && Zf.decode();
  let ir = null;
  function us() {
    return (ir === null || ir.byteLength === 0) && (ir = new Uint8Array(Me.memory.buffer)), ir;
  }
  function Qi(e, t) {
    return e = e >>> 0, Zf.decode(us().subarray(e, e + t));
  }
  let As = 0;
  const hs = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, hS = typeof hs.encodeInto == "function" ? function(e, t) {
    return hs.encodeInto(e, t);
  } : function(e, t) {
    const o = hs.encode(e);
    return t.set(o), {
      read: e.length,
      written: o.length
    };
  };
  function qf(e, t, o) {
    if (o === void 0) {
      const h = hs.encode(e), d = t(h.length, 1) >>> 0;
      return us().subarray(d, d + h.length).set(h), As = h.length, d;
    }
    let i = e.length, n = t(i, 1) >>> 0;
    const s = us();
    let l = 0;
    for (; l < i; l++) {
      const h = e.charCodeAt(l);
      if (h > 127) break;
      s[n + l] = h;
    }
    if (l !== i) {
      l !== 0 && (e = e.slice(l)), n = o(n, i, i = l + e.length * 3, 1) >>> 0;
      const h = us().subarray(n + l, n + i), d = hS(e, h);
      l += d.written, n = o(n, i, l, 1) >>> 0;
    }
    return As = l, n;
  }
  function fS(e) {
    return e == null;
  }
  let qi = null;
  function Gu() {
    return (qi === null || qi.buffer.detached === true || qi.buffer.detached === void 0 && qi.buffer !== Me.memory.buffer) && (qi = new DataView(Me.memory.buffer)), qi;
  }
  function Kf(e) {
    const t = Me.__wbindgen_export_0.get(e);
    return Me.__externref_table_dealloc(e), t;
  }
  function Ga(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Ic(e, t, o) {
    Ga(e, Pn), Ga(t, Pn), Ga(o, el);
    const i = Me.transform(e.__wbg_ptr, t.__wbg_ptr, o.__wbg_ptr);
    if (i[1]) throw Kf(i[0]);
  }
  const Bu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Me.__wbg_point_free(e >>> 0, 1));
  class el {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Bu.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Me.__wbg_point_free(t, 0);
    }
    get x() {
      return Me.__wbg_get_point_x(this.__wbg_ptr);
    }
    set x(t) {
      Me.__wbg_set_point_x(this.__wbg_ptr, t);
    }
    get y() {
      return Me.__wbg_get_point_y(this.__wbg_ptr);
    }
    set y(t) {
      Me.__wbg_set_point_y(this.__wbg_ptr, t);
    }
    get z() {
      return Me.__wbg_get_point_z(this.__wbg_ptr);
    }
    set z(t) {
      Me.__wbg_set_point_z(this.__wbg_ptr, t);
    }
    constructor(t, o, i) {
      const n = Me.point_new(t, o, i);
      return this.__wbg_ptr = n >>> 0, Bu.register(this, this.__wbg_ptr, this), this;
    }
  }
  const ju = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Me.__wbg_projection_free(e >>> 0, 1));
  class Pn {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ju.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Me.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const o = qf(t, Me.__wbindgen_malloc, Me.__wbindgen_realloc), i = As, n = Me.projection_new(o, i);
      if (n[2]) throw Kf(n[1]);
      return this.__wbg_ptr = n[0] >>> 0, ju.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, o;
      try {
        const i = Me.projection_projName(this.__wbg_ptr);
        return t = i[0], o = i[1], Qi(i[0], i[1]);
      } finally {
        Me.__wbindgen_free(t, o, 1);
      }
    }
    get isLatlon() {
      return Me.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Me.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, o;
      try {
        const i = Me.projection_axis(this.__wbg_ptr);
        return t = i[0], o = i[1], Qi(i[0], i[1]);
      } finally {
        Me.__wbindgen_free(t, o, 1);
      }
    }
    get isNormalizedAxis() {
      return Me.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Me.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, o;
      try {
        const i = Me.projection_units(this.__wbg_ptr);
        return t = i[0], o = i[1], Qi(i[0], i[1]);
      } finally {
        Me.__wbindgen_free(t, o, 1);
      }
    }
  }
  async function dS(e, t) {
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
  function pS() {
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
      return parseFloat(Qi(t, o));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, o, i) {
      return parseInt(Qi(t, o), i);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, o, i) {
      return t.slice(o >>> 0, i >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, o) {
      return new Error(Qi(t, o));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Me.__wbindgen_export_0, o = t.grow(4);
      t.set(0, void 0), t.set(o + 0, void 0), t.set(o + 1, null), t.set(o + 2, true), t.set(o + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, o) {
      const i = o, n = typeof i == "string" ? i : void 0;
      var s = fS(n) ? 0 : qf(n, Me.__wbindgen_malloc, Me.__wbindgen_realloc), l = As;
      Gu().setInt32(t + 4, l, true), Gu().setInt32(t + 0, s, true);
    }, e.wbg.__wbindgen_throw = function(t, o) {
      throw new Error(Qi(t, o));
    }, e;
  }
  function mS(e, t) {
    return Me = e.exports, Jf.__wbindgen_wasm_module = t, qi = null, ir = null, Me.__wbindgen_start(), Me;
  }
  async function Jf(e) {
    if (Me !== void 0) return Me;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = pS();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: o, module: i } = await dS(await e, t);
    return mS(o, i);
  }
  const gS = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, fs = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let Ba = false;
  async function Xf() {
    if (!Ba) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Jf({
        module_or_path: gS
      }), Ba = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), Ba = true;
    }
  }
  async function Yu(e, t, o) {
    await Xf();
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
  function TS(e, t) {
    const o = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(o * o + i * i);
  }
  Oc = function(e, t) {
    const i = e.latitude * Math.PI / 180, n = t.latitude * Math.PI / 180, s = (t.latitude - e.latitude) * Math.PI / 180, l = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(s / 2) * Math.sin(s / 2) + Math.cos(i) * Math.cos(n) * Math.sin(l / 2) * Math.sin(l / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  };
  async function ES(e, t, o = {}) {
    const { projection: i = fs.CGCS2000_3_DEGREE, useHaversine: n = false } = o;
    if (n) return Oc(e, t);
    try {
      const s = await Yu(fs.WGS84, i, [
        e.longitude,
        e.latitude
      ]), l = await Yu(fs.WGS84, i, [
        t.longitude,
        t.latitude
      ]);
      return TS({
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
  pv = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let o = 0;
    for (let i = 1; i < e.length; i++) o += await ES(e[i - 1], e[i], t);
    return o;
  };
  mv = function(e) {
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
    scheduleMerge(t, o = "normal") {
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
      const o = performance.now(), i = crypto.randomUUID(), n = {
        id: i,
        routeId: t,
        startSequence: 0,
        endSequence: 0,
        pointCount: 0,
        distanceAdded: 0,
        mergeTime: Date.now(),
        status: "pending"
      }, [s, l, h] = await Promise.all([
        Zi("sketches"),
        Zr.getUnmergedEntries(t),
        Zr.getMetadata(t)
      ]);
      if (!s || !h) throw new Error(`Missing data for route ${t}`);
      if (l.length === 0) {
        n.status = "completed", await ht(`route:${t}:batches:${i}`, n);
        return;
      }
      const d = s.map((ne) => Ss.fromStorage(ne)), g = d.findIndex((ne) => ne.routes.routes.some((ee) => ee.id === t));
      if (g === -1) throw new Error(`Route ${t} not found in sketches`);
      const m = d[g].routes.routes.findIndex((ne) => ne.id === t), R = d[g].routes.routes[m], N = R.points.length > 0 ? R.points[R.points.length - 1] : null;
      let A = 0;
      const M = [];
      for (let ne = 0; ne < l.length; ne++) {
        const ee = l[ne], Z = ne === 0 && N ? N : l[ne - 1].point, Y = Oc({
          longitude: Z.longitude,
          latitude: Z.latitude
        }, {
          longitude: ee.point.longitude,
          latitude: ee.point.latitude
        });
        A += Y, ee.distanceIncrement = Y, M.push(ee.point);
      }
      R.points.push(...M), R.meta.distance = (R.meta.distance || 0) + A, R.meta.modification_timestamp = Date.now(), l.forEach((ne) => ne.merged = true), n.startSequence = l[0].sequence, n.endSequence = l[l.length - 1].sequence, n.pointCount = l.length, n.distanceAdded = A, await this.saveMergeTransaction(d, t, l, h, n), await Zr.cleanupMergedEntries(t), this.mergeCount++, this.lastMergeTime = Date.now();
      const D = performance.now() - o;
      console.info(`[MergeProcessor] Merged ${l.length} points into route ${t} in ${D.toFixed(2)}ms`);
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
          ht("sketches", t.map((d) => d.toStorage())),
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
      console.error(`[MergeProcessor] Recording merge failure for route ${t}:`, o);
    }
    async forceMerge(t) {
      (await Zr.getUnmergedEntries(t)).length > 0 && await this.mergeRoute(t);
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
  gv = en.getInstance();
  class xu {
    constructor() {
      __publicField(this, "locks", /* @__PURE__ */ new Map());
    }
    acquire(t) {
      return new Promise((o) => {
        const i = () => {
          if (!this.locks.has(t)) {
            let n;
            const s = new Promise((l) => {
              n = () => {
                this.locks.delete(t), l();
              };
            });
            this.locks.set(t, s), o(n);
          }
        };
        if (i(), this.locks.has(t)) {
          const n = setInterval(() => {
            this.locks.has(t) || (clearInterval(n), i());
          }, 0);
        }
      });
    }
    isLocked(t) {
      return this.locks.has(t);
    }
  }
  class zu {
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
  class IS {
    constructor() {
      __publicField(this, "writeBuffer", /* @__PURE__ */ new Map());
      __publicField(this, "sequenceCache", /* @__PURE__ */ new Map());
      __publicField(this, "sequenceInitPromises", /* @__PURE__ */ new Map());
      __publicField(this, "flushMutex", new xu());
      __publicField(this, "storageMutex", new xu());
      __publicField(this, "pendingOperations", /* @__PURE__ */ new Set());
      __publicField(this, "pendingVisibilityFlush", null);
      __publicField(this, "mergeProcessor", null);
      __publicField(this, "appendLatencyBuffer", new zu(Zo.MAX_LATENCY_SAMPLES));
      __publicField(this, "mergeDurationBuffer", new zu(Zo.MAX_LATENCY_SAMPLES));
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
      return rS(t, o, i);
    }
    async getNextSequence(t) {
      if (this.sequenceCache.has(t)) {
        const i = this.sequenceCache.get(t) + 1;
        return this.sequenceCache.set(t, i), i;
      }
      if (!this.sequenceInitPromises.has(t)) {
        const i = this.initializeSequence(t).finally(() => {
          this.sequenceInitPromises.delete(t);
        });
        this.sequenceInitPromises.set(t, i);
      }
      await this.sequenceInitPromises.get(t);
      const o = this.sequenceCache.get(t) + 1;
      return this.sequenceCache.set(t, o), o;
    }
    async initializeSequence(t) {
      const o = await this.getOrCreateMetadata(t);
      this.sequenceCache.set(t, o.lastSequence);
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
        i.push(Ua(n));
      } catch {
        this.metrics.recoveryEvents++;
      }
      return i;
    }
    async getOrCreateMetadata(t) {
      const o = await Zi(`route:${t}:metadata`);
      if (o) try {
        return ku(o);
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
          const i = `${ja}${t}`, n = localStorage.getItem(i), l = [
            ...n ? JSON.parse(n) : [],
            ...o
          ], h = JSON.stringify(l);
          if (h.length < 1024 * 1024) localStorage.setItem(i, h);
          else {
            const d = l.slice(-100);
            localStorage.setItem(i, JSON.stringify(d)), console.warn(`[WAL] Emergency flush truncated for route ${t}`);
          }
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
            l.push(Ua(h));
          } catch {
          }
          if (l.length > 0) {
            const h = await this.storageMutex.acquire(`route:${i}`);
            try {
              const d = await this.safeGetLog(i), g = new Set(d.map((R) => R.id)), m = l.filter((R) => !g.has(R.id));
              if (m.length > 0) {
                const R = [
                  ...d,
                  ...m
                ];
                R.sort((N, A) => N.sequence - A.sequence), await ht(`route:${i}:log`, R), console.log(`[WAL] Recovered ${m.length} entries for route ${i}`), this.metrics.recoveryEvents++;
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
        const n = await this.safeGetLog(t), s = new Set(o.map((d) => d.id));
        let l = 0;
        for (const d of n) s.has(d.id) && !d.merged && (d.merged = true, l++);
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
        this.sequenceCache.delete(t), this.writeBuffer.delete(t), delete this.metrics.logSizePerRoute[t];
        const i = await this.storageMutex.acquire("wal:activeRoutes");
        try {
          const n = await Zi("wal:activeRoutes") ?? [], s = n.filter((l) => l !== t);
          s.length !== n.length && await ht("wal:activeRoutes", s);
        } finally {
          i();
        }
      } finally {
        o();
      }
    }
    updateLogSize(t, o) {
      this.metrics.logSizePerRoute[t] = o, this.updateMemoryUsage();
    }
    updateMemoryUsage() {
      let t = 0;
      for (const o of this.writeBuffer.values()) t += o.length;
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
      for (const o of this.writeBuffer.values()) t += o.length;
      return t;
    }
    async getMetadata(t) {
      const o = await Zi(`route:${t}:metadata`);
      if (!o) return null;
      try {
        return ku(o);
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
      this.isShuttingDown = true, this.periodicFlushInterval && (clearInterval(this.periodicFlushInterval), this.periodicFlushInterval = null), typeof window < "u" && window.removeEventListener("beforeunload", this.handleBeforeUnload), typeof document < "u" && document.removeEventListener("visibilitychange", this.handleVisibilityChange), this.pendingOperations.size > 0 && await Promise.allSettled(this.pendingOperations), this.pendingVisibilityFlush && await this.pendingVisibilityFlush, await this.flushAllBuffers(), this.sequenceCache.clear(), this.sequenceInitPromises.clear(), this.writeBuffer.clear(), this.mergeProcessor = null, this.appendLatencyBuffer.clear(), this.mergeDurationBuffer.clear();
    }
    async performRecovery() {
      const t = await Zi("wal:activeRoutes") ?? [];
      let o = 0, i = 0;
      for (const n of t) {
        const s = await this.storageMutex.acquire(`route:${n}`);
        try {
          const l = await this.safeStorageGet(`route:${n}:log`) ?? [], h = [];
          let d = 0;
          if (!Array.isArray(l)) console.warn(`[WAL] Log for route ${n} is not an array, resetting`), await ht(`route:${n}:log`, []), d = 1;
          else {
            for (const A of l) try {
              h.push(Ua(A));
            } catch {
              d++;
            }
            d > 0 && (await ht(`route:${n}:log`, h), i += d);
          }
          const g = await this.getOrCreateMetadata(n), m = h.filter((A) => !A.merged).length, R = h.length > 0 ? Math.max(...h.map((A) => A.sequence)) : 0;
          (g.unmergedCount !== m || g.totalPoints !== h.length || g.lastSequence < R || d > 0) && (g.unmergedCount = m, g.totalPoints = h.length, g.lastSequence = R, await ht(`route:${n}:metadata`, g), this.metrics.recoveryEvents++, o++), this.updateLogSize(n, h.length);
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
  let Ya = null;
  function Qf() {
    return Ya || (Ya = new IS()), Ya;
  }
  Zr = Qf();
  window.addEventListener("beforeunload", async () => {
    try {
      await Qf().shutdown();
    } catch (e) {
      console.error("WAL shutdown failed:", e);
    }
  });
  function tl(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const o of e.split(",")) t[o] = 1;
    return (o) => o in t;
  }
  const ke = {}, In = [], Ao = () => {
  }, ed = () => false, ia = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ol = (e) => e.startsWith("onUpdate:"), wt = Object.assign, il = (e, t) => {
    const o = e.indexOf(t);
    o > -1 && e.splice(o, 1);
  }, OS = Object.prototype.hasOwnProperty, Ye = (e, t) => OS.call(e, t), Se = Array.isArray, On = (e) => Hr(e) === "[object Map]", td = (e) => Hr(e) === "[object Set]", RS = (e) => Hr(e) === "[object RegExp]", be = (e) => typeof e == "function", lt = (e) => typeof e == "string", ui = (e) => typeof e == "symbol", Ke = (e) => e !== null && typeof e == "object", od = (e) => (Ke(e) || be(e)) && be(e.then) && be(e.catch), id = Object.prototype.toString, Hr = (e) => id.call(e), wS = (e) => Hr(e).slice(8, -1), nd = (e) => Hr(e) === "[object Object]", na = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cr = tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ra = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((o) => t[o] || (t[o] = e(o)));
  }, yS = /-\w/g, uo = ra((e) => e.replace(yS, (t) => t.slice(1).toUpperCase())), SS = /\B([A-Z])/g, hi = ra((e) => e.replace(SS, "-$1").toLowerCase()), sa = ra((e) => e.charAt(0).toUpperCase() + e.slice(1)), xa = ra((e) => e ? `on${sa(e)}` : ""), Xt = (e, t) => !Object.is(e, t), lr = (e, ...t) => {
    for (let o = 0; o < e.length; o++) e[o](...t);
  }, rd = (e, t, o, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: o
    });
  }, AS = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, NS = (e) => {
    const t = lt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let $u;
  const aa = () => $u || ($u = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  ca = function(e) {
    if (Se(e)) {
      const t = {};
      for (let o = 0; o < e.length; o++) {
        const i = e[o], n = lt(i) ? CS(i) : ca(i);
        if (n) for (const s in n) t[s] = n[s];
      }
      return t;
    } else if (lt(e) || Ke(e)) return e;
  };
  const bS = /;(?![^(]*\))/g, vS = /:([^]+)/, LS = /\/\*[^]*?\*\//g;
  function CS(e) {
    const t = {};
    return e.replace(LS, "").split(bS).forEach((o) => {
      if (o) {
        const i = o.split(vS);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  nl = function(e) {
    let t = "";
    if (lt(e)) t = e;
    else if (Se(e)) for (let o = 0; o < e.length; o++) {
      const i = nl(e[o]);
      i && (t += i + " ");
    }
    else if (Ke(e)) for (const o in e) e[o] && (t += o + " ");
    return t.trim();
  };
  const DS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", HS = tl(DS);
  function sd(e) {
    return !!e || e === "";
  }
  let ad, cd, za;
  ad = (e) => !!(e && e.__v_isRef === true);
  Vo = (e) => lt(e) ? e : e == null ? "" : Se(e) || Ke(e) && (e.toString === id || !be(e.toString)) ? ad(e) ? Vo(e.value) : JSON.stringify(e, cd, 2) : String(e);
  cd = (e, t) => ad(t) ? cd(e, t.value) : On(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((o, [i, n], s) => (o[za(i, s) + " =>"] = n, o), {})
  } : td(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((o) => za(o))
  } : ui(t) ? za(t) : Ke(t) && !Se(t) && !nd(t) ? String(t) : t;
  za = (e, t = "") => {
    var o;
    return ui(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e;
  };
  function MS(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let kt;
  class ld {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = kt, !t && kt && (this.index = (kt.scopes || (kt.scopes = [])).push(this) - 1);
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
        const o = kt;
        try {
          return kt = this, t();
        } finally {
          kt = o;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = kt, kt = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (kt = this.prevScope, this.prevScope = void 0);
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
  ud = function(e) {
    return new ld(e);
  };
  hd = function() {
    return kt;
  };
  PS = function(e, t = false) {
    kt && kt.cleanups.push(e);
  };
  let Qe;
  const $a = /* @__PURE__ */ new WeakSet();
  class fd {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kt && kt.active && kt.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, $a.has(this) && ($a.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pd(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Vu(this), md(this);
      const t = Qe, o = No;
      Qe = this, No = true;
      try {
        return this.fn();
      } finally {
        gd(this), Qe = t, No = o, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) al(t);
        this.deps = this.depsTail = void 0, Vu(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? $a.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Rc(this) && this.run();
    }
    get dirty() {
      return Rc(this);
    }
  }
  let dd = 0, ur, hr;
  function pd(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = hr, hr = e;
      return;
    }
    e.next = ur, ur = e;
  }
  function rl() {
    dd++;
  }
  function sl() {
    if (--dd > 0) return;
    if (hr) {
      let t = hr;
      for (hr = void 0; t; ) {
        const o = t.next;
        t.next = void 0, t.flags &= -9, t = o;
      }
    }
    let e;
    for (; ur; ) {
      let t = ur;
      for (ur = void 0; t; ) {
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
  function md(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function gd(e) {
    let t, o = e.depsTail, i = o;
    for (; i; ) {
      const n = i.prevDep;
      i.version === -1 ? (i === o && (o = n), al(i), FS(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
    }
    e.deps = t, e.depsTail = o;
  }
  function Rc(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Td(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Td(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sr) || (e.globalVersion = Sr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Rc(e)))) return;
    e.flags |= 2;
    const t = e.dep, o = Qe, i = No;
    Qe = e, No = true;
    try {
      md(e);
      const n = e.fn(e._value);
      (t.version === 0 || Xt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
    } catch (n) {
      throw t.version++, n;
    } finally {
      Qe = o, No = i, gd(e), e.flags &= -3;
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
  function FS(e) {
    const { prevDep: t, nextDep: o } = e;
    t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
  }
  let No = true;
  const Ed = [];
  function ri() {
    Ed.push(No), No = false;
  }
  function si() {
    const e = Ed.pop();
    No = e === void 0 ? true : e;
  }
  function Vu(e) {
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
  let Sr = 0;
  class _S {
    constructor(t, o) {
      this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class la {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Qe || !No || Qe === this.computed) return;
      let o = this.activeLink;
      if (o === void 0 || o.sub !== Qe) o = this.activeLink = new _S(Qe, this), Qe.deps ? (o.prevDep = Qe.depsTail, Qe.depsTail.nextDep = o, Qe.depsTail = o) : Qe.deps = Qe.depsTail = o, Id(o);
      else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
        const i = o.nextDep;
        i.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = i), o.prevDep = Qe.depsTail, o.nextDep = void 0, Qe.depsTail.nextDep = o, Qe.depsTail = o, Qe.deps === o && (Qe.deps = i);
      }
      return o;
    }
    trigger(t) {
      this.version++, Sr++, this.notify(t);
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
  function Id(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) Id(i);
      }
      const o = e.dep.subs;
      o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
    }
  }
  const Ns = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ Symbol(""), wc = /* @__PURE__ */ Symbol(""), Ar = /* @__PURE__ */ Symbol("");
  function Wt(e, t, o) {
    if (No && Qe) {
      let i = Ns.get(e);
      i || Ns.set(e, i = /* @__PURE__ */ new Map());
      let n = i.get(o);
      n || (i.set(o, n = new la()), n.map = i, n.key = o), n.track();
    }
  }
  function Xo(e, t, o, i, n, s) {
    const l = Ns.get(e);
    if (!l) {
      Sr++;
      return;
    }
    const h = (d) => {
      d && d.trigger();
    };
    if (rl(), t === "clear") l.forEach(h);
    else {
      const d = Se(e), g = d && na(o);
      if (d && o === "length") {
        const m = Number(i);
        l.forEach((R, N) => {
          (N === "length" || N === Ar || !ui(N) && N >= m) && h(R);
        });
      } else switch ((o !== void 0 || l.has(void 0)) && h(l.get(o)), g && h(l.get(Ar)), t) {
        case "add":
          d ? g && h(l.get("length")) : (h(l.get(tn)), On(e) && h(l.get(wc)));
          break;
        case "delete":
          d || (h(l.get(tn)), On(e) && h(l.get(wc)));
          break;
        case "set":
          On(e) && h(l.get(tn));
          break;
      }
    }
    sl();
  }
  function US(e, t) {
    const o = Ns.get(e);
    return o && o.get(t);
  }
  function dn(e) {
    const t = Ue(e);
    return t === e ? t : (Wt(t, "iterate", Ar), lo(e) ? t : t.map(bo));
  }
  function ua(e) {
    return Wt(e = Ue(e), "iterate", Ar), e;
  }
  function Ri(e, t) {
    return ai(e) ? ii(e) ? Fn(bo(t)) : Fn(t) : bo(t);
  }
  const kS = {
    __proto__: null,
    [Symbol.iterator]() {
      return Va(this, Symbol.iterator, (e) => Ri(this, e));
    },
    concat(...e) {
      return dn(this).concat(...e.map((t) => Se(t) ? dn(t) : t));
    },
    entries() {
      return Va(this, "entries", (e) => (e[1] = Ri(this, e[1]), e));
    },
    every(e, t) {
      return xo(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return xo(this, "filter", e, t, (o) => o.map((i) => Ri(this, i)), arguments);
    },
    find(e, t) {
      return xo(this, "find", e, t, (o) => Ri(this, o), arguments);
    },
    findIndex(e, t) {
      return xo(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return xo(this, "findLast", e, t, (o) => Ri(this, o), arguments);
    },
    findLastIndex(e, t) {
      return xo(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return xo(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Za(this, "includes", e);
    },
    indexOf(...e) {
      return Za(this, "indexOf", e);
    },
    join(e) {
      return dn(this).join(e);
    },
    lastIndexOf(...e) {
      return Za(this, "lastIndexOf", e);
    },
    map(e, t) {
      return xo(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Xn(this, "pop");
    },
    push(...e) {
      return Xn(this, "push", e);
    },
    reduce(e, ...t) {
      return Zu(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Zu(this, "reduceRight", e, t);
    },
    shift() {
      return Xn(this, "shift");
    },
    some(e, t) {
      return xo(this, "some", e, t, void 0, arguments);
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
      return Va(this, "values", (e) => Ri(this, e));
    }
  };
  function Va(e, t, o) {
    const i = ua(e), n = i[t]();
    return i !== e && !lo(e) && (n._next = n.next, n.next = () => {
      const s = n._next();
      return s.done || (s.value = o(s.value)), s;
    }), n;
  }
  const WS = Array.prototype;
  function xo(e, t, o, i, n, s) {
    const l = ua(e), h = l !== e && !lo(e), d = l[t];
    if (d !== WS[t]) {
      const R = d.apply(e, s);
      return h ? bo(R) : R;
    }
    let g = o;
    l !== e && (h ? g = function(R, N) {
      return o.call(this, Ri(e, R), N, e);
    } : o.length > 2 && (g = function(R, N) {
      return o.call(this, R, N, e);
    }));
    const m = d.call(l, g, i);
    return h && n ? n(m) : m;
  }
  function Zu(e, t, o, i) {
    const n = ua(e);
    let s = o;
    return n !== e && (lo(e) ? o.length > 3 && (s = function(l, h, d) {
      return o.call(this, l, h, d, e);
    }) : s = function(l, h, d) {
      return o.call(this, l, Ri(e, h), d, e);
    }), n[t](s, ...i);
  }
  function Za(e, t, o) {
    const i = Ue(e);
    Wt(i, "iterate", Ar);
    const n = i[t](...o);
    return (n === -1 || n === false) && fa(o[0]) ? (o[0] = Ue(o[0]), i[t](...o)) : n;
  }
  function Xn(e, t, o = []) {
    ri(), rl();
    const i = Ue(e)[t].apply(e, o);
    return sl(), si(), i;
  }
  const GS = tl("__proto__,__v_isRef,__isVue"), Od = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ui));
  function BS(e) {
    ui(e) || (e = String(e));
    const t = Ue(this);
    return Wt(t, "has", e), t.hasOwnProperty(e);
  }
  class Rd {
    constructor(t = false, o = false) {
      this._isReadonly = t, this._isShallow = o;
    }
    get(t, o, i) {
      if (o === "__v_skip") return t.__v_skip;
      const n = this._isReadonly, s = this._isShallow;
      if (o === "__v_isReactive") return !n;
      if (o === "__v_isReadonly") return n;
      if (o === "__v_isShallow") return s;
      if (o === "__v_raw") return i === (n ? s ? JS : Ad : s ? Sd : yd).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const l = Se(t);
      if (!n) {
        let d;
        if (l && (d = kS[o])) return d;
        if (o === "hasOwnProperty") return BS;
      }
      const h = Reflect.get(t, o, ft(t) ? t : i);
      if ((ui(o) ? Od.has(o) : GS(o)) || (n || Wt(t, "get", o), s)) return h;
      if (ft(h)) {
        const d = l && na(o) ? h : h.value;
        return n && Ke(d) ? Sc(d) : d;
      }
      return Ke(h) ? n ? Sc(h) : ha(h) : h;
    }
  }
  class wd extends Rd {
    constructor(t = false) {
      super(false, t);
    }
    set(t, o, i, n) {
      let s = t[o];
      const l = Se(t) && na(o);
      if (!this._isShallow) {
        const g = ai(s);
        if (!lo(i) && !ai(i) && (s = Ue(s), i = Ue(i)), !l && ft(s) && !ft(i)) return g || (s.value = i), true;
      }
      const h = l ? Number(o) < t.length : Ye(t, o), d = Reflect.set(t, o, i, ft(t) ? t : n);
      return t === Ue(n) && (h ? Xt(i, s) && Xo(t, "set", o, i) : Xo(t, "add", o, i)), d;
    }
    deleteProperty(t, o) {
      const i = Ye(t, o);
      t[o];
      const n = Reflect.deleteProperty(t, o);
      return n && i && Xo(t, "delete", o, void 0), n;
    }
    has(t, o) {
      const i = Reflect.has(t, o);
      return (!ui(o) || !Od.has(o)) && Wt(t, "has", o), i;
    }
    ownKeys(t) {
      return Wt(t, "iterate", Se(t) ? "length" : tn), Reflect.ownKeys(t);
    }
  }
  class jS extends Rd {
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
  const YS = new wd(), xS = new jS(), zS = new wd(true);
  const yc = (e) => e, qr = (e) => Reflect.getPrototypeOf(e);
  function $S(e, t, o) {
    return function(...i) {
      const n = this.__v_raw, s = Ue(n), l = On(s), h = e === "entries" || e === Symbol.iterator && l, d = e === "keys" && l, g = n[e](...i), m = o ? yc : t ? Fn : bo;
      return !t && Wt(s, "iterate", d ? wc : tn), {
        next() {
          const { value: R, done: N } = g.next();
          return N ? {
            value: R,
            done: N
          } : {
            value: h ? [
              m(R[0]),
              m(R[1])
            ] : m(R),
            done: N
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function Kr(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function VS(e, t) {
    const o = {
      get(n) {
        const s = this.__v_raw, l = Ue(s), h = Ue(n);
        e || (Xt(n, h) && Wt(l, "get", n), Wt(l, "get", h));
        const { has: d } = qr(l), g = t ? yc : e ? Fn : bo;
        if (d.call(l, n)) return g(s.get(n));
        if (d.call(l, h)) return g(s.get(h));
        s !== l && s.get(n);
      },
      get size() {
        const n = this.__v_raw;
        return !e && Wt(Ue(n), "iterate", tn), n.size;
      },
      has(n) {
        const s = this.__v_raw, l = Ue(s), h = Ue(n);
        return e || (Xt(n, h) && Wt(l, "has", n), Wt(l, "has", h)), n === h ? s.has(n) : s.has(n) || s.has(h);
      },
      forEach(n, s) {
        const l = this, h = l.__v_raw, d = Ue(h), g = t ? yc : e ? Fn : bo;
        return !e && Wt(d, "iterate", tn), h.forEach((m, R) => n.call(s, g(m), g(R), l));
      }
    };
    return wt(o, e ? {
      add: Kr("add"),
      set: Kr("set"),
      delete: Kr("delete"),
      clear: Kr("clear")
    } : {
      add(n) {
        !t && !lo(n) && !ai(n) && (n = Ue(n));
        const s = Ue(this);
        return qr(s).has.call(s, n) || (s.add(n), Xo(s, "add", n, n)), this;
      },
      set(n, s) {
        !t && !lo(s) && !ai(s) && (s = Ue(s));
        const l = Ue(this), { has: h, get: d } = qr(l);
        let g = h.call(l, n);
        g || (n = Ue(n), g = h.call(l, n));
        const m = d.call(l, n);
        return l.set(n, s), g ? Xt(s, m) && Xo(l, "set", n, s) : Xo(l, "add", n, s), this;
      },
      delete(n) {
        const s = Ue(this), { has: l, get: h } = qr(s);
        let d = l.call(s, n);
        d || (n = Ue(n), d = l.call(s, n)), h && h.call(s, n);
        const g = s.delete(n);
        return d && Xo(s, "delete", n, void 0), g;
      },
      clear() {
        const n = Ue(this), s = n.size !== 0, l = n.clear();
        return s && Xo(n, "clear", void 0, void 0), l;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((n) => {
      o[n] = $S(n, e, t);
    }), o;
  }
  function cl(e, t) {
    const o = VS(e, t);
    return (i, n, s) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? i : Reflect.get(Ye(o, n) && n in i ? o : i, n, s);
  }
  const ZS = {
    get: cl(false, false)
  }, qS = {
    get: cl(false, true)
  }, KS = {
    get: cl(true, false)
  };
  const yd = /* @__PURE__ */ new WeakMap(), Sd = /* @__PURE__ */ new WeakMap(), Ad = /* @__PURE__ */ new WeakMap(), JS = /* @__PURE__ */ new WeakMap();
  function XS(e) {
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
  function QS(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : XS(wS(e));
  }
  ha = function(e) {
    return ai(e) ? e : ll(e, false, YS, ZS, yd);
  };
  eA = function(e) {
    return ll(e, false, zS, qS, Sd);
  };
  Sc = function(e) {
    return ll(e, true, xS, KS, Ad);
  };
  function ll(e, t, o, i, n) {
    if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = QS(e);
    if (s === 0) return e;
    const l = n.get(e);
    if (l) return l;
    const h = new Proxy(e, s === 2 ? i : o);
    return n.set(e, h), h;
  }
  function ii(e) {
    return ai(e) ? ii(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function ai(e) {
    return !!(e && e.__v_isReadonly);
  }
  function lo(e) {
    return !!(e && e.__v_isShallow);
  }
  function fa(e) {
    return e ? !!e.__v_raw : false;
  }
  Ue = function(e) {
    const t = e && e.__v_raw;
    return t ? Ue(t) : e;
  };
  ul = function(e) {
    return !Ye(e, "__v_skip") && Object.isExtensible(e) && rd(e, "__v_skip", true), e;
  };
  const bo = (e) => Ke(e) ? ha(e) : e, Fn = (e) => Ke(e) ? Sc(e) : e;
  ft = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Kt = function(e) {
    return Nd(e, false);
  };
  tA = function(e) {
    return Nd(e, true);
  };
  function Nd(e, t) {
    return ft(e) ? e : new oA(e, t);
  }
  class oA {
    constructor(t, o) {
      this.dep = new la(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = o ? t : Ue(t), this._value = o ? t : bo(t), this.__v_isShallow = o;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const o = this._rawValue, i = this.__v_isShallow || lo(t) || ai(t);
      t = i ? t : Ue(t), Xt(t, o) && (this._rawValue = t, this._value = i ? t : bo(t), this.dep.trigger());
    }
  }
  Rn = function(e) {
    return ft(e) ? e.value : e;
  };
  Tv = function(e) {
    return be(e) ? e() : Rn(e);
  };
  const iA = {
    get: (e, t, o) => t === "__v_raw" ? e : Rn(Reflect.get(e, t, o)),
    set: (e, t, o, i) => {
      const n = e[t];
      return ft(n) && !ft(o) ? (n.value = o, true) : Reflect.set(e, t, o, i);
    }
  };
  function bd(e) {
    return ii(e) ? e : new Proxy(e, iA);
  }
  class nA {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const o = this.dep = new la(), { get: i, set: n } = t(o.track.bind(o), o.trigger.bind(o));
      this._get = i, this._set = n;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function rA(e) {
    return new nA(e);
  }
  sA = function(e) {
    const t = Se(e) ? new Array(e.length) : {};
    for (const o in e) t[o] = vd(e, o);
    return t;
  };
  class aA {
    constructor(t, o, i) {
      this._object = t, this._key = o, this._defaultValue = i, this.__v_isRef = true, this._value = void 0, this._raw = Ue(t);
      let n = true, s = t;
      if (!Se(t) || !na(String(o))) do
        n = !fa(s) || lo(s);
      while (n && (s = s.__v_raw));
      this._shallow = n;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Rn(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && ft(this._raw[this._key])) {
        const o = this._object[this._key];
        if (ft(o)) {
          o.value = t;
          return;
        }
      }
      this._object[this._key] = t;
    }
    get dep() {
      return US(this._raw, this._key);
    }
  }
  class cA {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Ev = function(e, t, o) {
    return ft(e) ? e : be(e) ? new cA(e) : Ke(e) && arguments.length > 1 ? vd(e, t, o) : Kt(e);
  };
  function vd(e, t, o) {
    return new aA(e, t, o);
  }
  class lA {
    constructor(t, o, i) {
      this.fn = t, this.setter = o, this._value = void 0, this.dep = new la(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Qe !== this) return pd(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Td(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function uA(e, t, o = false) {
    let i, n;
    return be(e) ? i = e : (i = e.get, n = e.set), new lA(i, n, o);
  }
  const Jr = {}, bs = /* @__PURE__ */ new WeakMap();
  let Ki;
  function hA(e, t = false, o = Ki) {
    if (o) {
      let i = bs.get(o);
      i || bs.set(o, i = []), i.push(e);
    }
  }
  function fA(e, t, o = ke) {
    const { immediate: i, deep: n, once: s, scheduler: l, augmentJob: h, call: d } = o, g = (_) => n ? _ : lo(_) || n === false || n === 0 ? Qo(_, 1) : Qo(_);
    let m, R, N, A, M = false, D = false;
    if (ft(e) ? (R = () => e.value, M = lo(e)) : ii(e) ? (R = () => g(e), M = true) : Se(e) ? (D = true, M = e.some((_) => ii(_) || lo(_)), R = () => e.map((_) => {
      if (ft(_)) return _.value;
      if (ii(_)) return g(_);
      if (be(_)) return d ? d(_, 2) : _();
    })) : be(e) ? t ? R = d ? () => d(e, 2) : e : R = () => {
      if (N) {
        ri();
        try {
          N();
        } finally {
          si();
        }
      }
      const _ = Ki;
      Ki = m;
      try {
        return d ? d(e, 3, [
          A
        ]) : e(A);
      } finally {
        Ki = _;
      }
    } : R = Ao, t && n) {
      const _ = R, re = n === true ? 1 / 0 : n;
      R = () => Qo(_(), re);
    }
    const ne = hd(), ee = () => {
      m.stop(), ne && ne.active && il(ne.effects, m);
    };
    if (s && t) {
      const _ = t;
      t = (...re) => {
        _(...re), ee();
      };
    }
    let Z = D ? new Array(e.length).fill(Jr) : Jr;
    const Y = (_) => {
      if (!(!(m.flags & 1) || !m.dirty && !_)) if (t) {
        const re = m.run();
        if (n || M || (D ? re.some((ge, se) => Xt(ge, Z[se])) : Xt(re, Z))) {
          N && N();
          const ge = Ki;
          Ki = m;
          try {
            const se = [
              re,
              Z === Jr ? void 0 : D && Z[0] === Jr ? [] : Z,
              A
            ];
            Z = re, d ? d(t, 3, se) : t(...se);
          } finally {
            Ki = ge;
          }
        }
      } else m.run();
    };
    return h && h(Y), m = new fd(R), m.scheduler = l ? () => l(Y, false) : Y, A = (_) => hA(_, false, m), N = m.onStop = () => {
      const _ = bs.get(m);
      if (_) {
        if (d) d(_, 4);
        else for (const re of _) re();
        bs.delete(m);
      }
    }, t ? i ? Y(true) : Z = m.run() : l ? l(Y.bind(null, true), true) : m.run(), ee.pause = m.pause.bind(m), ee.resume = m.resume.bind(m), ee.stop = ee, ee;
  }
  function Qo(e, t = 1 / 0, o) {
    if (t <= 0 || !Ke(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t)) return e;
    if (o.set(e, t), t--, ft(e)) Qo(e.value, t, o);
    else if (Se(e)) for (let i = 0; i < e.length; i++) Qo(e[i], t, o);
    else if (td(e) || On(e)) e.forEach((i) => {
      Qo(i, t, o);
    });
    else if (nd(e)) {
      for (const i in e) Qo(e[i], t, o);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Qo(e[i], t, o);
    }
    return e;
  }
  function Mr(e, t, o, i) {
    try {
      return i ? e(...i) : e();
    } catch (n) {
      da(n, t, o);
    }
  }
  function vo(e, t, o, i) {
    if (be(e)) {
      const n = Mr(e, t, o, i);
      return n && od(n) && n.catch((s) => {
        da(s, t, o);
      }), n;
    }
    if (Se(e)) {
      const n = [];
      for (let s = 0; s < e.length; s++) n.push(vo(e[s], t, o, i));
      return n;
    }
  }
  function da(e, t, o, i = true) {
    const n = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: l } = t && t.appContext.config || ke;
    if (t) {
      let h = t.parent;
      const d = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${o}`;
      for (; h; ) {
        const m = h.ec;
        if (m) {
          for (let R = 0; R < m.length; R++) if (m[R](e, d, g) === false) return;
        }
        h = h.parent;
      }
      if (s) {
        ri(), Mr(s, null, 10, [
          e,
          d,
          g
        ]), si();
        return;
      }
    }
    dA(e, o, n, i, l);
  }
  function dA(e, t, o, i = true, n = false) {
    if (n) throw e;
    console.error(e);
  }
  const Vt = [];
  let Po = -1;
  const wn = [];
  let wi = null, mn = 0;
  const Ld = Promise.resolve();
  let vs = null;
  Cd = function(e) {
    const t = vs || Ld;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function pA(e) {
    let t = Po + 1, o = Vt.length;
    for (; t < o; ) {
      const i = t + o >>> 1, n = Vt[i], s = Nr(n);
      s < e || s === e && n.flags & 2 ? t = i + 1 : o = i;
    }
    return t;
  }
  function hl(e) {
    if (!(e.flags & 1)) {
      const t = Nr(e), o = Vt[Vt.length - 1];
      !o || !(e.flags & 2) && t >= Nr(o) ? Vt.push(e) : Vt.splice(pA(t), 0, e), e.flags |= 1, Dd();
    }
  }
  function Dd() {
    vs || (vs = Ld.then(Pd));
  }
  function Hd(e) {
    Se(e) ? wn.push(...e) : wi && e.id === -1 ? wi.splice(mn + 1, 0, e) : e.flags & 1 || (wn.push(e), e.flags |= 1), Dd();
  }
  function qu(e, t, o = Po + 1) {
    for (; o < Vt.length; o++) {
      const i = Vt[o];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        Vt.splice(o, 1), o--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function Md(e) {
    if (wn.length) {
      const t = [
        ...new Set(wn)
      ].sort((o, i) => Nr(o) - Nr(i));
      if (wn.length = 0, wi) {
        wi.push(...t);
        return;
      }
      for (wi = t, mn = 0; mn < wi.length; mn++) {
        const o = wi[mn];
        o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
      }
      wi = null, mn = 0;
    }
  }
  const Nr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Pd(e) {
    try {
      for (Po = 0; Po < Vt.length; Po++) {
        const t = Vt[Po];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Mr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Po < Vt.length; Po++) {
        const t = Vt[Po];
        t && (t.flags &= -2);
      }
      Po = -1, Vt.length = 0, Md(), vs = null, (Vt.length || wn.length) && Pd();
    }
  }
  let Mt = null, Fd = null;
  function Ls(e) {
    const t = Mt;
    return Mt = e, Fd = e && e.type.__scopeId || null, t;
  }
  mA = function(e, t = Mt, o) {
    if (!t || e._n) return e;
    const i = (...n) => {
      i._d && Fs(-1);
      const s = Ls(t);
      let l;
      try {
        l = e(...n);
      } finally {
        Ls(s), i._d && Fs(1);
      }
      return l;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  Iv = function(e, t) {
    if (Mt === null) return e;
    const o = Ia(Mt), i = e.dirs || (e.dirs = []);
    for (let n = 0; n < t.length; n++) {
      let [s, l, h, d = ke] = t[n];
      s && (be(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && Qo(l), i.push({
        dir: s,
        instance: o,
        value: l,
        oldValue: void 0,
        arg: h,
        modifiers: d
      }));
    }
    return e;
  };
  function zi(e, t, o, i) {
    const n = e.dirs, s = t && t.dirs;
    for (let l = 0; l < n.length; l++) {
      const h = n[l];
      s && (h.oldValue = s[l].value);
      let d = h.dir[i];
      d && (ri(), vo(d, o, 8, [
        e.el,
        h,
        e,
        t
      ]), si());
    }
  }
  gA = function(e, t) {
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
  TA = function() {
    return !!(ki() || on);
  };
  const EA = /* @__PURE__ */ Symbol.for("v-scx"), IA = () => fr(EA);
  Ov = function(e, t) {
    return pa(e, null, t);
  };
  function OA(e, t) {
    return pa(e, null, {
      flush: "sync"
    });
  }
  yn = function(e, t, o) {
    return pa(e, t, o);
  };
  function pa(e, t, o = ke) {
    const { immediate: i, deep: n, flush: s, once: l } = o, h = wt({}, o), d = t && i || !t && s !== "post";
    let g;
    if (Lr) {
      if (s === "sync") {
        const A = IA();
        g = A.__watcherHandles || (A.__watcherHandles = []);
      } else if (!d) {
        const A = () => {
        };
        return A.stop = Ao, A.resume = Ao, A.pause = Ao, A;
      }
    }
    const m = Gt;
    h.call = (A, M, D) => vo(A, m, M, D);
    let R = false;
    s === "post" ? h.scheduler = (A) => {
      Nt(A, m && m.suspense);
    } : s !== "sync" && (R = true, h.scheduler = (A, M) => {
      M ? A() : hl(A);
    }), h.augmentJob = (A) => {
      t && (A.flags |= 4), R && (A.flags |= 2, m && (A.id = m.uid, A.i = m));
    };
    const N = fA(e, t, h);
    return Lr && (g ? g.push(N) : d && N()), N;
  }
  function RA(e, t, o) {
    const i = this.proxy, n = lt(e) ? e.includes(".") ? _d(i, e) : () => i[e] : e.bind(i, i);
    let s;
    be(t) ? s = t : (s = t.handler, o = t);
    const l = Fr(this), h = pa(n, s.bind(i), o);
    return l(), h;
  }
  function _d(e, t) {
    const o = t.split(".");
    return () => {
      let i = e;
      for (let n = 0; n < o.length && i; n++) i = i[o[n]];
      return i;
    };
  }
  const Ud = /* @__PURE__ */ Symbol("_vte"), kd = (e) => e.__isTeleport, dr = (e) => e && (e.disabled || e.disabled === ""), Ku = (e) => e && (e.defer || e.defer === ""), Ju = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Xu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ac = (e, t) => {
    const o = e && e.to;
    return lt(o) ? t ? t(o) : null : o;
  }, Wd = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, o, i, n, s, l, h, d, g) {
      const { mc: m, pc: R, pbc: N, o: { insert: A, querySelector: M, createText: D, createComment: ne } } = g, ee = dr(t.props);
      let { shapeFlag: Z, children: Y, dynamicChildren: _ } = t;
      if (e == null) {
        const re = t.el = D(""), ge = t.anchor = D("");
        A(re, o, i), A(ge, o, i);
        const se = (ie, Te) => {
          Z & 16 && m(Y, ie, Te, n, s, l, h, d);
        }, de = () => {
          const ie = t.target = Ac(t.props, M), Te = Gd(ie, t, D, A);
          ie && (l !== "svg" && Ju(ie) ? l = "svg" : l !== "mathml" && Xu(ie) && (l = "mathml"), n && n.isCE && (n.ce._teleportTargets || (n.ce._teleportTargets = /* @__PURE__ */ new Set())).add(ie), ee || (se(ie, Te), ds(t, false)));
        };
        ee && (se(o, ge), ds(t, true)), Ku(t.props) ? (t.el.__isMounted = false, Nt(() => {
          de(), delete t.el.__isMounted;
        }, s)) : de();
      } else {
        if (Ku(t.props) && e.el.__isMounted === false) {
          Nt(() => {
            Wd.process(e, t, o, i, n, s, l, h, d, g);
          }, s);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const re = t.anchor = e.anchor, ge = t.target = e.target, se = t.targetAnchor = e.targetAnchor, de = dr(e.props), ie = de ? o : ge, Te = de ? re : se;
        if (l === "svg" || Ju(ge) ? l = "svg" : (l === "mathml" || Xu(ge)) && (l = "mathml"), _ ? (N(e.dynamicChildren, _, ie, n, s, l, h), El(e, t, true)) : d || R(e, t, ie, Te, n, s, l, h, false), ee) de ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Xr(t, o, re, g, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Ce = t.target = Ac(t.props, M);
          Ce && Xr(t, Ce, null, g, 0);
        } else de && Xr(t, ge, se, g, 1);
        ds(t, ee);
      }
    },
    remove(e, t, o, { um: i, o: { remove: n } }, s) {
      const { shapeFlag: l, children: h, anchor: d, targetStart: g, targetAnchor: m, target: R, props: N } = e;
      if (R && (n(g), n(m)), s && n(d), l & 16) {
        const A = s || !dr(N);
        for (let M = 0; M < h.length; M++) {
          const D = h[M];
          i(D, t, o, A, !!D.dynamicChildren);
        }
      }
    },
    move: Xr,
    hydrate: wA
  };
  function Xr(e, t, o, { o: { insert: i }, m: n }, s = 2) {
    s === 0 && i(e.targetAnchor, t, o);
    const { el: l, anchor: h, shapeFlag: d, children: g, props: m } = e, R = s === 2;
    if (R && i(l, t, o), (!R || dr(m)) && d & 16) for (let N = 0; N < g.length; N++) n(g[N], t, o, 2);
    R && i(h, t, o);
  }
  function wA(e, t, o, i, n, s, { o: { nextSibling: l, parentNode: h, querySelector: d, insert: g, createText: m } }, R) {
    function N(D, ne, ee, Z) {
      ne.anchor = R(l(D), ne, h(D), o, i, n, s), ne.targetStart = ee, ne.targetAnchor = Z;
    }
    const A = t.target = Ac(t.props, d), M = dr(t.props);
    if (A) {
      const D = A._lpa || A.firstChild;
      if (t.shapeFlag & 16) if (M) N(e, t, D, D && l(D));
      else {
        t.anchor = l(e);
        let ne = D;
        for (; ne; ) {
          if (ne && ne.nodeType === 8) {
            if (ne.data === "teleport start anchor") t.targetStart = ne;
            else if (ne.data === "teleport anchor") {
              t.targetAnchor = ne, A._lpa = t.targetAnchor && l(t.targetAnchor);
              break;
            }
          }
          ne = l(ne);
        }
        t.targetAnchor || Gd(A, t, m, g), R(D && l(D), t, A, o, i, n, s);
      }
      ds(t, M);
    } else M && t.shapeFlag & 16 && N(e, t, e, l(e));
    return t.anchor && l(t.anchor);
  }
  Rv = Wd;
  function ds(e, t) {
    const o = e.ctx;
    if (o && o.ut) {
      let i, n;
      for (t ? (i = e.el, n = e.anchor) : (i = e.targetStart, n = e.targetAnchor); i && i !== n; ) i.nodeType === 1 && i.setAttribute("data-v-owner", o.uid), i = i.nextSibling;
      o.ut();
    }
  }
  function Gd(e, t, o, i) {
    const n = t.targetStart = o(""), s = t.targetAnchor = o("");
    return n[Ud] = s, e && (i(n, e), i(s, e)), s;
  }
  const Jo = /* @__PURE__ */ Symbol("_leaveCb"), Qr = /* @__PURE__ */ Symbol("_enterCb");
  function Bd() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Pr(() => {
      e.isMounted = true;
    }), pl(() => {
      e.isUnmounting = true;
    }), e;
  }
  const mo = [
    Function,
    Array
  ], jd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: mo,
    onEnter: mo,
    onAfterEnter: mo,
    onEnterCancelled: mo,
    onBeforeLeave: mo,
    onLeave: mo,
    onAfterLeave: mo,
    onLeaveCancelled: mo,
    onBeforeAppear: mo,
    onAppear: mo,
    onAfterAppear: mo,
    onAppearCancelled: mo
  }, Yd = (e) => {
    const t = e.subTree;
    return t.component ? Yd(t.component) : t;
  }, yA = {
    name: "BaseTransition",
    props: jd,
    setup(e, { slots: t }) {
      const o = ki(), i = Bd();
      return () => {
        const n = t.default && fl(t.default(), true);
        if (!n || !n.length) return;
        const s = xd(n), l = Ue(e), { mode: h } = l;
        if (i.isLeaving) return qa(s);
        const d = Qu(s);
        if (!d) return qa(s);
        let g = br(d, l, i, o, (R) => g = R);
        d.type !== Ht && Hi(d, g);
        let m = o.subTree && Qu(o.subTree);
        if (m && m.type !== Ht && !Ai(m, d) && Yd(o).type !== Ht) {
          let R = br(m, l, i, o);
          if (Hi(m, R), h === "out-in" && d.type !== Ht) return i.isLeaving = true, R.afterLeave = () => {
            i.isLeaving = false, o.job.flags & 8 || o.update(), delete R.afterLeave, m = void 0;
          }, qa(s);
          h === "in-out" && d.type !== Ht ? R.delayLeave = (N, A, M) => {
            const D = zd(i, m);
            D[String(m.key)] = m, N[Jo] = () => {
              A(), N[Jo] = void 0, delete g.delayedLeave, m = void 0;
            }, g.delayedLeave = () => {
              M(), delete g.delayedLeave, m = void 0;
            };
          } : m = void 0;
        } else m && (m = void 0);
        return s;
      };
    }
  };
  function xd(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const o of e) if (o.type !== Ht) {
        t = o;
        break;
      }
    }
    return t;
  }
  const SA = yA;
  function zd(e, t) {
    const { leavingVNodes: o } = e;
    let i = o.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), o.set(t.type, i)), i;
  }
  function br(e, t, o, i, n) {
    const { appear: s, mode: l, persisted: h = false, onBeforeEnter: d, onEnter: g, onAfterEnter: m, onEnterCancelled: R, onBeforeLeave: N, onLeave: A, onAfterLeave: M, onLeaveCancelled: D, onBeforeAppear: ne, onAppear: ee, onAfterAppear: Z, onAppearCancelled: Y } = t, _ = String(e.key), re = zd(o, e), ge = (ie, Te) => {
      ie && vo(ie, i, 9, Te);
    }, se = (ie, Te) => {
      const Ce = Te[1];
      ge(ie, Te), Se(ie) ? ie.every((pe) => pe.length <= 1) && Ce() : ie.length <= 1 && Ce();
    }, de = {
      mode: l,
      persisted: h,
      beforeEnter(ie) {
        let Te = d;
        if (!o.isMounted) if (s) Te = ne || d;
        else return;
        ie[Jo] && ie[Jo](true);
        const Ce = re[_];
        Ce && Ai(e, Ce) && Ce.el[Jo] && Ce.el[Jo](), ge(Te, [
          ie
        ]);
      },
      enter(ie) {
        let Te = g, Ce = m, pe = R;
        if (!o.isMounted) if (s) Te = ee || g, Ce = Z || m, pe = Y || R;
        else return;
        let Be = false;
        const It = ie[Qr] = (oo) => {
          Be || (Be = true, oo ? ge(pe, [
            ie
          ]) : ge(Ce, [
            ie
          ]), de.delayedLeave && de.delayedLeave(), ie[Qr] = void 0);
        };
        Te ? se(Te, [
          ie,
          It
        ]) : It();
      },
      leave(ie, Te) {
        const Ce = String(e.key);
        if (ie[Qr] && ie[Qr](true), o.isUnmounting) return Te();
        ge(N, [
          ie
        ]);
        let pe = false;
        const Be = ie[Jo] = (It) => {
          pe || (pe = true, Te(), It ? ge(D, [
            ie
          ]) : ge(M, [
            ie
          ]), ie[Jo] = void 0, re[Ce] === e && delete re[Ce]);
        };
        re[Ce] = e, A ? se(A, [
          ie,
          Be
        ]) : Be();
      },
      clone(ie) {
        const Te = br(ie, t, o, i, n);
        return n && n(Te), Te;
      }
    };
    return de;
  }
  function qa(e) {
    if (ma(e)) return e = ci(e), e.children = null, e;
  }
  function Qu(e) {
    if (!ma(e)) return kd(e.type) && e.children ? xd(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: o } = e;
    if (o) {
      if (t & 16) return o[0];
      if (t & 32 && be(o.default)) return o.default();
    }
  }
  function Hi(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Hi(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function fl(e, t = false, o) {
    let i = [], n = 0;
    for (let s = 0; s < e.length; s++) {
      let l = e[s];
      const h = o == null ? l.key : String(o) + String(l.key != null ? l.key : s);
      l.type === Dt ? (l.patchFlag & 128 && n++, i = i.concat(fl(l.children, t, h))) : (t || l.type !== Ht) && i.push(h != null ? ci(l, {
        key: h
      }) : l);
    }
    if (n > 1) for (let s = 0; s < i.length; s++) i[s].patchFlag = -2;
    return i;
  }
  AA = function(e, t) {
    return be(e) ? wt({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function $d(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  wv = function(e) {
    const t = ki(), o = tA(null);
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
  const Cs = /* @__PURE__ */ new WeakMap();
  function pr(e, t, o, i, n = false) {
    if (Se(e)) {
      e.forEach((M, D) => pr(M, t && (Se(t) ? t[D] : t), o, i, n));
      return;
    }
    if (bi(i) && !n) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && pr(e, t, o, i.component.subTree);
      return;
    }
    const s = i.shapeFlag & 4 ? Ia(i.component) : i.el, l = n ? null : s, { i: h, r: d } = e, g = t && t.r, m = h.refs === ke ? h.refs = {} : h.refs, R = h.setupState, N = Ue(R), A = R === ke ? ed : (M) => Ye(N, M);
    if (g != null && g !== d) {
      if (eh(t), lt(g)) m[g] = null, A(g) && (R[g] = null);
      else if (ft(g)) {
        g.value = null;
        const M = t;
        M.k && (m[M.k] = null);
      }
    }
    if (be(d)) Mr(d, h, 12, [
      l,
      m
    ]);
    else {
      const M = lt(d), D = ft(d);
      if (M || D) {
        const ne = () => {
          if (e.f) {
            const ee = M ? A(d) ? R[d] : m[d] : d.value;
            if (n) Se(ee) && il(ee, s);
            else if (Se(ee)) ee.includes(s) || ee.push(s);
            else if (M) m[d] = [
              s
            ], A(d) && (R[d] = m[d]);
            else {
              const Z = [
                s
              ];
              d.value = Z, e.k && (m[e.k] = Z);
            }
          } else M ? (m[d] = l, A(d) && (R[d] = l)) : D && (d.value = l, e.k && (m[e.k] = l));
        };
        if (l) {
          const ee = () => {
            ne(), Cs.delete(e);
          };
          ee.id = -1, Cs.set(e, ee), Nt(ee, o);
        } else eh(e), ne();
      }
    }
  }
  function eh(e) {
    const t = Cs.get(e);
    t && (t.flags |= 8, Cs.delete(e));
  }
  aa().requestIdleCallback;
  aa().cancelIdleCallback;
  let bi, ma, NA;
  bi = (e) => !!e.type.__asyncLoader;
  ma = (e) => e.type.__isKeepAlive;
  NA = {
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
        const Z = t.default && t.default();
        return Z && Z.length === 1 ? Z[0] : Z;
      };
      const n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      let l = null;
      const h = o.suspense, { renderer: { p: d, m: g, um: m, o: { createElement: R } } } = i, N = R("div");
      i.activate = (Z, Y, _, re, ge) => {
        const se = Z.component;
        g(Z, Y, _, 0, h), d(se.vnode, Z, Y, _, se, h, re, Z.slotScopeIds, ge), Nt(() => {
          se.isDeactivated = false, se.a && lr(se.a);
          const de = Z.props && Z.props.onVnodeMounted;
          de && go(de, se.parent, Z);
        }, h);
      }, i.deactivate = (Z) => {
        const Y = Z.component;
        Ms(Y.m), Ms(Y.a), g(Z, N, null, 1, h), Nt(() => {
          Y.da && lr(Y.da);
          const _ = Z.props && Z.props.onVnodeUnmounted;
          _ && go(_, Y.parent, Z), Y.isDeactivated = true;
        }, h);
      };
      function A(Z) {
        Ka(Z), m(Z, o, h, true);
      }
      function M(Z) {
        n.forEach((Y, _) => {
          const re = Hc(bi(Y) ? Y.type.__asyncResolved || {} : Y.type);
          re && !Z(re) && D(_);
        });
      }
      function D(Z) {
        const Y = n.get(Z);
        Y && (!l || !Ai(Y, l)) ? A(Y) : l && Ka(l), n.delete(Z), s.delete(Z);
      }
      yn(() => [
        e.include,
        e.exclude
      ], ([Z, Y]) => {
        Z && M((_) => nr(Z, _)), Y && M((_) => !nr(Y, _));
      }, {
        flush: "post",
        deep: true
      });
      let ne = null;
      const ee = () => {
        ne != null && (Ps(o.subTree.type) ? Nt(() => {
          n.set(ne, es(o.subTree));
        }, o.subTree.suspense) : n.set(ne, es(o.subTree)));
      };
      return Pr(ee), dl(ee), pl(() => {
        n.forEach((Z) => {
          const { subTree: Y, suspense: _ } = o, re = es(Y);
          if (Z.type === re.type && Z.key === re.key) {
            Ka(re);
            const ge = re.component.da;
            ge && Nt(ge, _);
            return;
          }
          A(Z);
        });
      }), () => {
        if (ne = null, !t.default) return l = null;
        const Z = t.default(), Y = Z[0];
        if (Z.length > 1) return l = null, Z;
        if (!_n(Y) || !(Y.shapeFlag & 4) && !(Y.shapeFlag & 128)) return l = null, Y;
        let _ = es(Y);
        if (_.type === Ht) return l = null, _;
        const re = _.type, ge = Hc(bi(_) ? _.type.__asyncResolved || {} : re), { include: se, exclude: de, max: ie } = e;
        if (se && (!ge || !nr(se, ge)) || de && ge && nr(de, ge)) return _.shapeFlag &= -257, l = _, Y;
        const Te = _.key == null ? re : _.key, Ce = n.get(Te);
        return _.el && (_ = ci(_), Y.shapeFlag & 128 && (Y.ssContent = _)), ne = Te, Ce ? (_.el = Ce.el, _.component = Ce.component, _.transition && Hi(_, _.transition), _.shapeFlag |= 512, s.delete(Te), s.add(Te)) : (s.add(Te), ie && s.size > parseInt(ie, 10) && D(s.values().next().value)), _.shapeFlag |= 256, l = _, Ps(Y.type) ? Y : _;
      };
    }
  };
  yv = NA;
  function nr(e, t) {
    return Se(e) ? e.some((o) => nr(o, t)) : lt(e) ? e.split(",").includes(t) : RS(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  bA = function(e, t) {
    Vd(e, "a", t);
  };
  vA = function(e, t) {
    Vd(e, "da", t);
  };
  function Vd(e, t, o = Gt) {
    const i = e.__wdc || (e.__wdc = () => {
      let n = o;
      for (; n; ) {
        if (n.isDeactivated) return;
        n = n.parent;
      }
      return e();
    });
    if (ga(t, i, o), o) {
      let n = o.parent;
      for (; n && n.parent; ) ma(n.parent.vnode) && LA(i, t, o, n), n = n.parent;
    }
  }
  function LA(e, t, o, i) {
    const n = ga(t, e, i, true);
    ml(() => {
      il(i[t], n);
    }, o);
  }
  function Ka(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function es(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function ga(e, t, o = Gt, i = false) {
    if (o) {
      const n = o[e] || (o[e] = []), s = t.__weh || (t.__weh = (...l) => {
        ri();
        const h = Fr(o), d = vo(t, o, e, l);
        return h(), si(), d;
      });
      return i ? n.unshift(s) : n.push(s), s;
    }
  }
  let fi, Zd, dl, DA, HA, MA;
  fi = (e) => (t, o = Gt) => {
    (!Lr || e === "sp") && ga(e, (...i) => t(...i), o);
  };
  CA = fi("bm");
  Pr = fi("m");
  Zd = fi("bu");
  dl = fi("u");
  pl = fi("bum");
  ml = fi("um");
  DA = fi("sp");
  HA = fi("rtg");
  MA = fi("rtc");
  function PA(e, t = Gt) {
    ga("ec", e, t);
  }
  const FA = "components", qd = /* @__PURE__ */ Symbol.for("v-ndc");
  Sv = function(e) {
    return lt(e) ? _A(FA, e, false) || e : e || qd;
  };
  function _A(e, t, o = true, i = false) {
    const n = Mt || Gt;
    if (n) {
      const s = n.type;
      {
        const h = Hc(s, false);
        if (h && (h === t || h === uo(t) || h === sa(uo(t)))) return s;
      }
      const l = th(n[e] || s[e], t) || th(n.appContext[e], t);
      return !l && i ? s : l;
    }
  }
  function th(e, t) {
    return e && (e[t] || e[uo(t)] || e[sa(uo(t))]);
  }
  UA = function(e, t, o, i) {
    let n;
    const s = o, l = Se(e);
    if (l || lt(e)) {
      const h = l && ii(e);
      let d = false, g = false;
      h && (d = !lo(e), g = ai(e), e = ua(e)), n = new Array(e.length);
      for (let m = 0, R = e.length; m < R; m++) n[m] = t(d ? g ? Fn(bo(e[m])) : bo(e[m]) : e[m], m, void 0, s);
    } else if (typeof e == "number") {
      n = new Array(e);
      for (let h = 0; h < e; h++) n[h] = t(h + 1, h, void 0, s);
    } else if (Ke(e)) if (e[Symbol.iterator]) n = Array.from(e, (h, d) => t(h, d, void 0, s));
    else {
      const h = Object.keys(e);
      n = new Array(h.length);
      for (let d = 0, g = h.length; d < g; d++) {
        const m = h[d];
        n[d] = t(e[m], m, d, s);
      }
    }
    else n = [];
    return n;
  };
  Av = function(e, t) {
    for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (Se(i)) for (let n = 0; n < i.length; n++) e[i[n].name] = i[n].fn;
      else i && (e[i.name] = i.key ? (...n) => {
        const s = i.fn(...n);
        return s && (s.key = i.key), s;
      } : i.fn);
    }
    return e;
  };
  Nv = function(e, t, o = {}, i, n) {
    if (Mt.ce || Mt.parent && bi(Mt.parent) && Mt.parent.ce) {
      const g = Object.keys(o).length > 0;
      return t !== "default" && (o.name = t), To(), Cc(Dt, null, [
        Bt("slot", o, i && i())
      ], g ? -2 : 64);
    }
    let s = e[t];
    s && s._c && (s._d = false), To();
    const l = s && Kd(s(o)), h = o.key || l && l.key, d = Cc(Dt, {
      key: (h && !ui(h) ? h : `_${t}`) + (!l && i ? "_fb" : "")
    }, l || (i ? i() : []), l && e._ === 1 ? 64 : -2);
    return !n && d.scopeId && (d.slotScopeIds = [
      d.scopeId + "-s"
    ]), s && s._c && (s._d = true), d;
  };
  function Kd(e) {
    return e.some((t) => _n(t) ? !(t.type === Ht || t.type === Dt && !Kd(t.children)) : true) ? e : null;
  }
  const Nc = (e) => e ? pp(e) ? Ia(e) : Nc(e.parent) : null, mr = wt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Nc(e.parent),
    $root: (e) => Nc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xd(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Cd.bind(e.proxy)),
    $watch: (e) => RA.bind(e)
  }), Ja = (e, t) => e !== ke && !e.__isScriptSetup && Ye(e, t), kA = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: o, setupState: i, data: n, props: s, accessCache: l, type: h, appContext: d } = e;
      if (t[0] !== "$") {
        const N = l[t];
        if (N !== void 0) switch (N) {
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
          if (Ja(i, t)) return l[t] = 1, i[t];
          if (n !== ke && Ye(n, t)) return l[t] = 2, n[t];
          if (Ye(s, t)) return l[t] = 3, s[t];
          if (o !== ke && Ye(o, t)) return l[t] = 4, o[t];
          bc && (l[t] = 0);
        }
      }
      const g = mr[t];
      let m, R;
      if (g) return t === "$attrs" && Wt(e.attrs, "get", ""), g(e);
      if ((m = h.__cssModules) && (m = m[t])) return m;
      if (o !== ke && Ye(o, t)) return l[t] = 4, o[t];
      if (R = d.config.globalProperties, Ye(R, t)) return R[t];
    },
    set({ _: e }, t, o) {
      const { data: i, setupState: n, ctx: s } = e;
      return Ja(n, t) ? (n[t] = o, true) : i !== ke && Ye(i, t) ? (i[t] = o, true) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = o, true);
    },
    has({ _: { data: e, setupState: t, accessCache: o, ctx: i, appContext: n, props: s, type: l } }, h) {
      let d;
      return !!(o[h] || e !== ke && h[0] !== "$" && Ye(e, h) || Ja(t, h) || Ye(s, h) || Ye(i, h) || Ye(mr, h) || Ye(n.config.globalProperties, h) || (d = l.__cssModules) && d[h]);
    },
    defineProperty(e, t, o) {
      return o.get != null ? e._.accessCache[t] = 0 : Ye(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
    }
  };
  function Ds(e) {
    return Se(e) ? e.reduce((t, o) => (t[o] = null, t), {}) : e;
  }
  bv = function(e, t) {
    return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : wt({}, Ds(e), Ds(t));
  };
  let bc = true;
  function WA(e) {
    const t = Xd(e), o = e.proxy, i = e.ctx;
    bc = false, t.beforeCreate && oh(t.beforeCreate, e, "bc");
    const { data: n, computed: s, methods: l, watch: h, provide: d, inject: g, created: m, beforeMount: R, mounted: N, beforeUpdate: A, updated: M, activated: D, deactivated: ne, beforeDestroy: ee, beforeUnmount: Z, destroyed: Y, unmounted: _, render: re, renderTracked: ge, renderTriggered: se, errorCaptured: de, serverPrefetch: ie, expose: Te, inheritAttrs: Ce, components: pe, directives: Be, filters: It } = t;
    if (g && GA(g, i, null), l) for (const He in l) {
      const Ve = l[He];
      be(Ve) && (i[He] = Ve.bind(o));
    }
    if (n) {
      const He = n.call(o, o);
      Ke(He) && (e.data = ha(He));
    }
    if (bc = true, s) for (const He in s) {
      const Ve = s[He], Go = be(Ve) ? Ve.bind(o, o) : be(Ve.get) ? Ve.get.bind(o, o) : Ao, cn = !be(Ve) && be(Ve.set) ? Ve.set.bind(o) : Ao, Bo = Ol({
        get: Go,
        set: cn
      });
      Object.defineProperty(i, He, {
        enumerable: true,
        configurable: true,
        get: () => Bo.value,
        set: (we) => Bo.value = we
      });
    }
    if (h) for (const He in h) Jd(h[He], i, o, He);
    if (d) {
      const He = be(d) ? d.call(o) : d;
      Reflect.ownKeys(He).forEach((Ve) => {
        gA(Ve, He[Ve]);
      });
    }
    m && oh(m, e, "c");
    function Je(He, Ve) {
      Se(Ve) ? Ve.forEach((Go) => He(Go.bind(o))) : Ve && He(Ve.bind(o));
    }
    if (Je(CA, R), Je(Pr, N), Je(Zd, A), Je(dl, M), Je(bA, D), Je(vA, ne), Je(PA, de), Je(MA, ge), Je(HA, se), Je(pl, Z), Je(ml, _), Je(DA, ie), Se(Te)) if (Te.length) {
      const He = e.exposed || (e.exposed = {});
      Te.forEach((Ve) => {
        Object.defineProperty(He, Ve, {
          get: () => o[Ve],
          set: (Go) => o[Ve] = Go,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    re && e.render === Ao && (e.render = re), Ce != null && (e.inheritAttrs = Ce), pe && (e.components = pe), Be && (e.directives = Be), ie && $d(e);
  }
  function GA(e, t, o = Ao) {
    Se(e) && (e = vc(e));
    for (const i in e) {
      const n = e[i];
      let s;
      Ke(n) ? "default" in n ? s = fr(n.from || i, n.default, true) : s = fr(n.from || i) : s = fr(n), ft(s) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (l) => s.value = l
      }) : t[i] = s;
    }
  }
  function oh(e, t, o) {
    vo(Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, o);
  }
  function Jd(e, t, o, i) {
    let n = i.includes(".") ? _d(o, i) : () => o[i];
    if (lt(e)) {
      const s = t[e];
      be(s) && yn(n, s);
    } else if (be(e)) yn(n, e.bind(o));
    else if (Ke(e)) if (Se(e)) e.forEach((s) => Jd(s, t, o, i));
    else {
      const s = be(e.handler) ? e.handler.bind(o) : t[e.handler];
      be(s) && yn(n, s, e);
    }
  }
  function Xd(e) {
    const t = e.type, { mixins: o, extends: i } = t, { mixins: n, optionsCache: s, config: { optionMergeStrategies: l } } = e.appContext, h = s.get(t);
    let d;
    return h ? d = h : !n.length && !o && !i ? d = t : (d = {}, n.length && n.forEach((g) => Hs(d, g, l, true)), Hs(d, t, l)), Ke(t) && s.set(t, d), d;
  }
  function Hs(e, t, o, i = false) {
    const { mixins: n, extends: s } = t;
    s && Hs(e, s, o, true), n && n.forEach((l) => Hs(e, l, o, true));
    for (const l in t) if (!(i && l === "expose")) {
      const h = BA[l] || o && o[l];
      e[l] = h ? h(e[l], t[l]) : t[l];
    }
    return e;
  }
  const BA = {
    data: ih,
    props: nh,
    emits: nh,
    methods: rr,
    computed: rr,
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
    components: rr,
    directives: rr,
    watch: YA,
    provide: ih,
    inject: jA
  };
  function ih(e, t) {
    return t ? e ? function() {
      return wt(be(e) ? e.call(this, this) : e, be(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function jA(e, t) {
    return rr(vc(e), vc(t));
  }
  function vc(e) {
    if (Se(e)) {
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
  function rr(e, t) {
    return e ? wt(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function nh(e, t) {
    return e ? Se(e) && Se(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : wt(/* @__PURE__ */ Object.create(null), Ds(e), Ds(t ?? {})) : t;
  }
  function YA(e, t) {
    if (!e) return t;
    if (!t) return e;
    const o = wt(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) o[i] = zt(e[i], t[i]);
    return o;
  }
  function Qd() {
    return {
      app: null,
      config: {
        isNativeTag: ed,
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
  let xA = 0;
  function zA(e, t) {
    return function(i, n = null) {
      be(i) || (i = wt({}, i)), n != null && !Ke(n) && (n = null);
      const s = Qd(), l = /* @__PURE__ */ new WeakSet(), h = [];
      let d = false;
      const g = s.app = {
        _uid: xA++,
        _component: i,
        _props: n,
        _container: null,
        _context: s,
        _instance: null,
        version: yN,
        get config() {
          return s.config;
        },
        set config(m) {
        },
        use(m, ...R) {
          return l.has(m) || (m && be(m.install) ? (l.add(m), m.install(g, ...R)) : be(m) && (l.add(m), m(g, ...R))), g;
        },
        mixin(m) {
          return s.mixins.includes(m) || s.mixins.push(m), g;
        },
        component(m, R) {
          return R ? (s.components[m] = R, g) : s.components[m];
        },
        directive(m, R) {
          return R ? (s.directives[m] = R, g) : s.directives[m];
        },
        mount(m, R, N) {
          if (!d) {
            const A = g._ceVNode || Bt(i, n);
            return A.appContext = s, N === true ? N = "svg" : N === false && (N = void 0), e(A, m, N), d = true, g._container = m, m.__vue_app__ = g, Ia(A.component);
          }
        },
        onUnmount(m) {
          h.push(m);
        },
        unmount() {
          d && (vo(h, g._instance, 16), e(null, g._container), delete g._container.__vue_app__);
        },
        provide(m, R) {
          return s.provides[m] = R, g;
        },
        runWithContext(m) {
          const R = on;
          on = g;
          try {
            return m();
          } finally {
            on = R;
          }
        }
      };
      return g;
    };
  }
  let on = null;
  vv = function(e, t, o = ke) {
    const i = ki(), n = uo(t), s = hi(t), l = ep(e, n), h = rA((d, g) => {
      let m, R = ke, N;
      return OA(() => {
        const A = e[n];
        Xt(m, A) && (m = A, g());
      }), {
        get() {
          return d(), o.get ? o.get(m) : m;
        },
        set(A) {
          const M = o.set ? o.set(A) : A;
          if (!Xt(M, m) && !(R !== ke && Xt(A, R))) return;
          const D = i.vnode.props;
          D && (t in D || n in D || s in D) && (`onUpdate:${t}` in D || `onUpdate:${n}` in D || `onUpdate:${s}` in D) || (m = A, g()), i.emit(`update:${t}`, M), Xt(A, M) && Xt(A, R) && !Xt(M, N) && g(), R = A, N = M;
        }
      };
    });
    return h[Symbol.iterator] = () => {
      let d = 0;
      return {
        next() {
          return d < 2 ? {
            value: d++ ? l || ke : h,
            done: false
          } : {
            done: true
          };
        }
      };
    }, h;
  };
  const ep = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${uo(t)}Modifiers`] || e[`${hi(t)}Modifiers`];
  function $A(e, t, ...o) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || ke;
    let n = o;
    const s = t.startsWith("update:"), l = s && ep(i, t.slice(7));
    l && (l.trim && (n = o.map((m) => lt(m) ? m.trim() : m)), l.number && (n = o.map(AS)));
    let h, d = i[h = xa(t)] || i[h = xa(uo(t))];
    !d && s && (d = i[h = xa(hi(t))]), d && vo(d, e, 6, n);
    const g = i[h + "Once"];
    if (g) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, vo(g, e, 6, n);
    }
  }
  const VA = /* @__PURE__ */ new WeakMap();
  function tp(e, t, o = false) {
    const i = o ? VA : t.emitsCache, n = i.get(e);
    if (n !== void 0) return n;
    const s = e.emits;
    let l = {}, h = false;
    if (!be(e)) {
      const d = (g) => {
        const m = tp(g, t, true);
        m && (h = true, wt(l, m));
      };
      !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
    }
    return !s && !h ? (Ke(e) && i.set(e, null), null) : (Se(s) ? s.forEach((d) => l[d] = null) : wt(l, s), Ke(e) && i.set(e, l), l);
  }
  function Ta(e, t) {
    return !e || !ia(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, hi(t)) || Ye(e, t));
  }
  function rh(e) {
    const { type: t, vnode: o, proxy: i, withProxy: n, propsOptions: [s], slots: l, attrs: h, emit: d, render: g, renderCache: m, props: R, data: N, setupState: A, ctx: M, inheritAttrs: D } = e, ne = Ls(e);
    let ee, Z;
    try {
      if (o.shapeFlag & 4) {
        const _ = n || i, re = _;
        ee = _o(g.call(re, _, m, R, A, N, M)), Z = h;
      } else {
        const _ = t;
        ee = _o(_.length > 1 ? _(R, {
          attrs: h,
          slots: l,
          emit: d
        }) : _(R, null)), Z = t.props ? h : ZA(h);
      }
    } catch (_) {
      Tr.length = 0, da(_, e, 1), ee = Bt(Ht);
    }
    let Y = ee;
    if (Z && D !== false) {
      const _ = Object.keys(Z), { shapeFlag: re } = Y;
      _.length && re & 7 && (s && _.some(ol) && (Z = qA(Z, s)), Y = ci(Y, Z, false, true));
    }
    return o.dirs && (Y = ci(Y, null, false, true), Y.dirs = Y.dirs ? Y.dirs.concat(o.dirs) : o.dirs), o.transition && Hi(Y, o.transition), ee = Y, Ls(ne), ee;
  }
  const ZA = (e) => {
    let t;
    for (const o in e) (o === "class" || o === "style" || ia(o)) && ((t || (t = {}))[o] = e[o]);
    return t;
  }, qA = (e, t) => {
    const o = {};
    for (const i in e) (!ol(i) || !(i.slice(9) in t)) && (o[i] = e[i]);
    return o;
  };
  function KA(e, t, o) {
    const { props: i, children: n, component: s } = e, { props: l, children: h, patchFlag: d } = t, g = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (o && d >= 0) {
      if (d & 1024) return true;
      if (d & 16) return i ? sh(i, l, g) : !!l;
      if (d & 8) {
        const m = t.dynamicProps;
        for (let R = 0; R < m.length; R++) {
          const N = m[R];
          if (l[N] !== i[N] && !Ta(g, N)) return true;
        }
      }
    } else return (n || h) && (!h || !h.$stable) ? true : i === l ? false : i ? l ? sh(i, l, g) : true : !!l;
    return false;
  }
  function sh(e, t, o) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let n = 0; n < i.length; n++) {
      const s = i[n];
      if (t[s] !== e[s] && !Ta(o, s)) return true;
    }
    return false;
  }
  function JA({ vnode: e, parent: t }, o) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = o, t = t.parent;
      else break;
    }
  }
  const op = {}, ip = () => Object.create(op), np = (e) => Object.getPrototypeOf(e) === op;
  function XA(e, t, o, i = false) {
    const n = {}, s = ip();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), rp(e, t, n, s);
    for (const l in e.propsOptions[0]) l in n || (n[l] = void 0);
    o ? e.props = i ? n : eA(n) : e.type.props ? e.props = n : e.props = s, e.attrs = s;
  }
  function QA(e, t, o, i) {
    const { props: n, attrs: s, vnode: { patchFlag: l } } = e, h = Ue(n), [d] = e.propsOptions;
    let g = false;
    if ((i || l > 0) && !(l & 16)) {
      if (l & 8) {
        const m = e.vnode.dynamicProps;
        for (let R = 0; R < m.length; R++) {
          let N = m[R];
          if (Ta(e.emitsOptions, N)) continue;
          const A = t[N];
          if (d) if (Ye(s, N)) A !== s[N] && (s[N] = A, g = true);
          else {
            const M = uo(N);
            n[M] = Lc(d, h, M, A, e, false);
          }
          else A !== s[N] && (s[N] = A, g = true);
        }
      }
    } else {
      rp(e, t, n, s) && (g = true);
      let m;
      for (const R in h) (!t || !Ye(t, R) && ((m = hi(R)) === R || !Ye(t, m))) && (d ? o && (o[R] !== void 0 || o[m] !== void 0) && (n[R] = Lc(d, h, R, void 0, e, true)) : delete n[R]);
      if (s !== h) for (const R in s) (!t || !Ye(t, R)) && (delete s[R], g = true);
    }
    g && Xo(e.attrs, "set", "");
  }
  function rp(e, t, o, i) {
    const [n, s] = e.propsOptions;
    let l = false, h;
    if (t) for (let d in t) {
      if (cr(d)) continue;
      const g = t[d];
      let m;
      n && Ye(n, m = uo(d)) ? !s || !s.includes(m) ? o[m] = g : (h || (h = {}))[m] = g : Ta(e.emitsOptions, d) || (!(d in i) || g !== i[d]) && (i[d] = g, l = true);
    }
    if (s) {
      const d = Ue(o), g = h || ke;
      for (let m = 0; m < s.length; m++) {
        const R = s[m];
        o[R] = Lc(n, d, R, g[R], e, !Ye(g, R));
      }
    }
    return l;
  }
  function Lc(e, t, o, i, n, s) {
    const l = e[o];
    if (l != null) {
      const h = Ye(l, "default");
      if (h && i === void 0) {
        const d = l.default;
        if (l.type !== Function && !l.skipFactory && be(d)) {
          const { propsDefaults: g } = n;
          if (o in g) i = g[o];
          else {
            const m = Fr(n);
            i = g[o] = d.call(null, t), m();
          }
        } else i = d;
        n.ce && n.ce._setProp(o, i);
      }
      l[0] && (s && !h ? i = false : l[1] && (i === "" || i === hi(o)) && (i = true));
    }
    return i;
  }
  const eN = /* @__PURE__ */ new WeakMap();
  function sp(e, t, o = false) {
    const i = o ? eN : t.propsCache, n = i.get(e);
    if (n) return n;
    const s = e.props, l = {}, h = [];
    let d = false;
    if (!be(e)) {
      const m = (R) => {
        d = true;
        const [N, A] = sp(R, t, true);
        wt(l, N), A && h.push(...A);
      };
      !o && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
    }
    if (!s && !d) return Ke(e) && i.set(e, In), In;
    if (Se(s)) for (let m = 0; m < s.length; m++) {
      const R = uo(s[m]);
      ah(R) && (l[R] = ke);
    }
    else if (s) for (const m in s) {
      const R = uo(m);
      if (ah(R)) {
        const N = s[m], A = l[R] = Se(N) || be(N) ? {
          type: N
        } : wt({}, N), M = A.type;
        let D = false, ne = true;
        if (Se(M)) for (let ee = 0; ee < M.length; ++ee) {
          const Z = M[ee], Y = be(Z) && Z.name;
          if (Y === "Boolean") {
            D = true;
            break;
          } else Y === "String" && (ne = false);
        }
        else D = be(M) && M.name === "Boolean";
        A[0] = D, A[1] = ne, (D || Ye(A, "default")) && h.push(R);
      }
    }
    const g = [
      l,
      h
    ];
    return Ke(e) && i.set(e, g), g;
  }
  function ah(e) {
    return e[0] !== "$" && !cr(e);
  }
  const gl = (e) => e === "_" || e === "_ctx" || e === "$stable", Tl = (e) => Se(e) ? e.map(_o) : [
    _o(e)
  ], tN = (e, t, o) => {
    if (t._n) return t;
    const i = mA((...n) => Tl(t(...n)), o);
    return i._c = false, i;
  }, ap = (e, t, o) => {
    const i = e._ctx;
    for (const n in e) {
      if (gl(n)) continue;
      const s = e[n];
      if (be(s)) t[n] = tN(n, s, i);
      else if (s != null) {
        const l = Tl(s);
        t[n] = () => l;
      }
    }
  }, cp = (e, t) => {
    const o = Tl(t);
    e.slots.default = () => o;
  }, lp = (e, t, o) => {
    for (const i in t) (o || !gl(i)) && (e[i] = t[i]);
  }, oN = (e, t, o) => {
    const i = e.slots = ip();
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (lp(i, t, o), o && rd(i, "_", n, true)) : ap(t, i);
    } else t && cp(e, t);
  }, iN = (e, t, o) => {
    const { vnode: i, slots: n } = e;
    let s = true, l = ke;
    if (i.shapeFlag & 32) {
      const h = t._;
      h ? o && h === 1 ? s = false : lp(n, t, o) : (s = !t.$stable, ap(t, n)), l = t;
    } else t && (cp(e, t), l = {
      default: 1
    });
    if (s) for (const h in n) !gl(h) && l[h] == null && delete n[h];
  }, Nt = cN;
  function nN(e) {
    return rN(e);
  }
  function rN(e, t) {
    const o = aa();
    o.__VUE__ = true;
    const { insert: i, remove: n, patchProp: s, createElement: l, createText: h, createComment: d, setText: g, setElementText: m, parentNode: R, nextSibling: N, setScopeId: A = Ao, insertStaticContent: M } = e, D = (y, v, F, K = null, q = null, J = null, le = void 0, Q = null, ae = !!v.dynamicChildren) => {
      if (y === v) return;
      y && !Ai(y, v) && (K = jo(y), we(y, q, J, true), y = null), v.patchFlag === -2 && (ae = false, v.dynamicChildren = null);
      const { type: V, ref: Ee, shapeFlag: ue } = v;
      switch (V) {
        case Ea:
          ne(y, v, F, K);
          break;
        case Ht:
          ee(y, v, F, K);
          break;
        case gr:
          y == null && Z(v, F, K, le);
          break;
        case Dt:
          pe(y, v, F, K, q, J, le, Q, ae);
          break;
        default:
          ue & 1 ? re(y, v, F, K, q, J, le, Q, ae) : ue & 6 ? Be(y, v, F, K, q, J, le, Q, ae) : (ue & 64 || ue & 128) && V.process(y, v, F, K, q, J, le, Q, ae, Wi);
      }
      Ee != null && q ? pr(Ee, y && y.ref, J, v || y, !v) : Ee == null && y && y.ref != null && pr(y.ref, null, J, y, true);
    }, ne = (y, v, F, K) => {
      if (y == null) i(v.el = h(v.children), F, K);
      else {
        const q = v.el = y.el;
        v.children !== y.children && g(q, v.children);
      }
    }, ee = (y, v, F, K) => {
      y == null ? i(v.el = d(v.children || ""), F, K) : v.el = y.el;
    }, Z = (y, v, F, K) => {
      [y.el, y.anchor] = M(y.children, v, F, K, y.el, y.anchor);
    }, Y = ({ el: y, anchor: v }, F, K) => {
      let q;
      for (; y && y !== v; ) q = N(y), i(y, F, K), y = q;
      i(v, F, K);
    }, _ = ({ el: y, anchor: v }) => {
      let F;
      for (; y && y !== v; ) F = N(y), n(y), y = F;
      n(v);
    }, re = (y, v, F, K, q, J, le, Q, ae) => {
      if (v.type === "svg" ? le = "svg" : v.type === "math" && (le = "mathml"), y == null) ge(v, F, K, q, J, le, Q, ae);
      else {
        const V = y.el && y.el._isVueCE ? y.el : null;
        try {
          V && V._beginPatch(), ie(y, v, q, J, le, Q, ae);
        } finally {
          V && V._endPatch();
        }
      }
    }, ge = (y, v, F, K, q, J, le, Q) => {
      let ae, V;
      const { props: Ee, shapeFlag: ue, transition: Ie, dirs: Ae } = y;
      if (ae = y.el = l(y.type, J, Ee && Ee.is, Ee), ue & 8 ? m(ae, y.children) : ue & 16 && de(y.children, ae, null, K, q, Xa(y, J), le, Q), Ae && zi(y, null, K, "created"), se(ae, y, y.scopeId, le, K), Ee) {
        for (const We in Ee) We !== "value" && !cr(We) && s(ae, We, null, Ee[We], J, K);
        "value" in Ee && s(ae, "value", null, Ee.value, J), (V = Ee.onVnodeBeforeMount) && go(V, K, y);
      }
      Ae && zi(y, null, K, "beforeMount");
      const Pe = sN(q, Ie);
      Pe && Ie.beforeEnter(ae), i(ae, v, F), ((V = Ee && Ee.onVnodeMounted) || Pe || Ae) && Nt(() => {
        V && go(V, K, y), Pe && Ie.enter(ae), Ae && zi(y, null, K, "mounted");
      }, q);
    }, se = (y, v, F, K, q) => {
      if (F && A(y, F), K) for (let J = 0; J < K.length; J++) A(y, K[J]);
      if (q) {
        let J = q.subTree;
        if (v === J || Ps(J.type) && (J.ssContent === v || J.ssFallback === v)) {
          const le = q.vnode;
          se(y, le, le.scopeId, le.slotScopeIds, q.parent);
        }
      }
    }, de = (y, v, F, K, q, J, le, Q, ae = 0) => {
      for (let V = ae; V < y.length; V++) {
        const Ee = y[V] = Q ? yi(y[V]) : _o(y[V]);
        D(null, Ee, v, F, K, q, J, le, Q);
      }
    }, ie = (y, v, F, K, q, J, le) => {
      const Q = v.el = y.el;
      let { patchFlag: ae, dynamicChildren: V, dirs: Ee } = v;
      ae |= y.patchFlag & 16;
      const ue = y.props || ke, Ie = v.props || ke;
      let Ae;
      if (F && $i(F, false), (Ae = Ie.onVnodeBeforeUpdate) && go(Ae, F, v, y), Ee && zi(v, y, F, "beforeUpdate"), F && $i(F, true), (ue.innerHTML && Ie.innerHTML == null || ue.textContent && Ie.textContent == null) && m(Q, ""), V ? Te(y.dynamicChildren, V, Q, F, K, Xa(v, q), J) : le || Ve(y, v, Q, null, F, K, Xa(v, q), J, false), ae > 0) {
        if (ae & 16) Ce(Q, ue, Ie, F, q);
        else if (ae & 2 && ue.class !== Ie.class && s(Q, "class", null, Ie.class, q), ae & 4 && s(Q, "style", ue.style, Ie.style, q), ae & 8) {
          const Pe = v.dynamicProps;
          for (let We = 0; We < Pe.length; We++) {
            const Ge = Pe[We], Ft = ue[Ge], _t = Ie[Ge];
            (_t !== Ft || Ge === "value") && s(Q, Ge, Ft, _t, q, F);
          }
        }
        ae & 1 && y.children !== v.children && m(Q, v.children);
      } else !le && V == null && Ce(Q, ue, Ie, F, q);
      ((Ae = Ie.onVnodeUpdated) || Ee) && Nt(() => {
        Ae && go(Ae, F, v, y), Ee && zi(v, y, F, "updated");
      }, K);
    }, Te = (y, v, F, K, q, J, le) => {
      for (let Q = 0; Q < v.length; Q++) {
        const ae = y[Q], V = v[Q], Ee = ae.el && (ae.type === Dt || !Ai(ae, V) || ae.shapeFlag & 198) ? R(ae.el) : F;
        D(ae, V, Ee, null, K, q, J, le, true);
      }
    }, Ce = (y, v, F, K, q) => {
      if (v !== F) {
        if (v !== ke) for (const J in v) !cr(J) && !(J in F) && s(y, J, v[J], null, q, K);
        for (const J in F) {
          if (cr(J)) continue;
          const le = F[J], Q = v[J];
          le !== Q && J !== "value" && s(y, J, Q, le, q, K);
        }
        "value" in F && s(y, "value", v.value, F.value, q);
      }
    }, pe = (y, v, F, K, q, J, le, Q, ae) => {
      const V = v.el = y ? y.el : h(""), Ee = v.anchor = y ? y.anchor : h("");
      let { patchFlag: ue, dynamicChildren: Ie, slotScopeIds: Ae } = v;
      Ae && (Q = Q ? Q.concat(Ae) : Ae), y == null ? (i(V, F, K), i(Ee, F, K), de(v.children || [], F, Ee, q, J, le, Q, ae)) : ue > 0 && ue & 64 && Ie && y.dynamicChildren && y.dynamicChildren.length === Ie.length ? (Te(y.dynamicChildren, Ie, F, q, J, le, Q), (v.key != null || q && v === q.subTree) && El(y, v, true)) : Ve(y, v, F, Ee, q, J, le, Q, ae);
    }, Be = (y, v, F, K, q, J, le, Q, ae) => {
      v.slotScopeIds = Q, y == null ? v.shapeFlag & 512 ? q.ctx.activate(v, F, K, le, ae) : It(v, F, K, q, J, le, ae) : oo(y, v, ae);
    }, It = (y, v, F, K, q, J, le) => {
      const Q = y.component = gN(y, K, q);
      if (ma(y) && (Q.ctx.renderer = Wi), TN(Q, false, le), Q.asyncDep) {
        if (q && q.registerDep(Q, Je, le), !y.el) {
          const ae = Q.subTree = Bt(Ht);
          ee(null, ae, v, F), y.placeholder = ae.el;
        }
      } else Je(Q, y, v, F, q, J, le);
    }, oo = (y, v, F) => {
      const K = v.component = y.component;
      if (KA(y, v, F)) if (K.asyncDep && !K.asyncResolved) {
        He(K, v, F);
        return;
      } else K.next = v, K.update();
      else v.el = y.el, K.vnode = v;
    }, Je = (y, v, F, K, q, J, le) => {
      const Q = () => {
        if (y.isMounted) {
          let { next: ue, bu: Ie, u: Ae, parent: Pe, vnode: We } = y;
          {
            const fo = up(y);
            if (fo) {
              ue && (ue.el = We.el, He(y, ue, le)), fo.asyncDep.then(() => {
                y.isUnmounted || Q();
              });
              return;
            }
          }
          let Ge = ue, Ft;
          $i(y, false), ue ? (ue.el = We.el, He(y, ue, le)) : ue = We, Ie && lr(Ie), (Ft = ue.props && ue.props.onVnodeBeforeUpdate) && go(Ft, Pe, ue, We), $i(y, true);
          const _t = rh(y), ho = y.subTree;
          y.subTree = _t, D(ho, _t, R(ho.el), jo(ho), y, q, J), ue.el = _t.el, Ge === null && JA(y, _t.el), Ae && Nt(Ae, q), (Ft = ue.props && ue.props.onVnodeUpdated) && Nt(() => go(Ft, Pe, ue, We), q);
        } else {
          let ue;
          const { el: Ie, props: Ae } = v, { bm: Pe, m: We, parent: Ge, root: Ft, type: _t } = y, ho = bi(v);
          $i(y, false), Pe && lr(Pe), !ho && (ue = Ae && Ae.onVnodeBeforeMount) && go(ue, Ge, v), $i(y, true);
          {
            Ft.ce && Ft.ce._def.shadowRoot !== false && Ft.ce._injectChildStyle(_t);
            const fo = y.subTree = rh(y);
            D(null, fo, F, K, y, q, J), v.el = fo.el;
          }
          if (We && Nt(We, q), !ho && (ue = Ae && Ae.onVnodeMounted)) {
            const fo = v;
            Nt(() => go(ue, Ge, fo), q);
          }
          (v.shapeFlag & 256 || Ge && bi(Ge.vnode) && Ge.vnode.shapeFlag & 256) && y.a && Nt(y.a, q), y.isMounted = true, v = F = K = null;
        }
      };
      y.scope.on();
      const ae = y.effect = new fd(Q);
      y.scope.off();
      const V = y.update = ae.run.bind(ae), Ee = y.job = ae.runIfDirty.bind(ae);
      Ee.i = y, Ee.id = y.uid, ae.scheduler = () => hl(Ee), $i(y, true), V();
    }, He = (y, v, F) => {
      v.component = y;
      const K = y.vnode.props;
      y.vnode = v, y.next = null, QA(y, v.props, K, F), iN(y, v.children, F), ri(), qu(y), si();
    }, Ve = (y, v, F, K, q, J, le, Q, ae = false) => {
      const V = y && y.children, Ee = y ? y.shapeFlag : 0, ue = v.children, { patchFlag: Ie, shapeFlag: Ae } = v;
      if (Ie > 0) {
        if (Ie & 128) {
          cn(V, ue, F, K, q, J, le, Q, ae);
          return;
        } else if (Ie & 256) {
          Go(V, ue, F, K, q, J, le, Q, ae);
          return;
        }
      }
      Ae & 8 ? (Ee & 16 && qt(V, q, J), ue !== V && m(F, ue)) : Ee & 16 ? Ae & 16 ? cn(V, ue, F, K, q, J, le, Q, ae) : qt(V, q, J, true) : (Ee & 8 && m(F, ""), Ae & 16 && de(ue, F, K, q, J, le, Q, ae));
    }, Go = (y, v, F, K, q, J, le, Q, ae) => {
      y = y || In, v = v || In;
      const V = y.length, Ee = v.length, ue = Math.min(V, Ee);
      let Ie;
      for (Ie = 0; Ie < ue; Ie++) {
        const Ae = v[Ie] = ae ? yi(v[Ie]) : _o(v[Ie]);
        D(y[Ie], Ae, F, null, q, J, le, Q, ae);
      }
      V > Ee ? qt(y, q, J, true, false, ue) : de(v, F, K, q, J, le, Q, ae, ue);
    }, cn = (y, v, F, K, q, J, le, Q, ae) => {
      let V = 0;
      const Ee = v.length;
      let ue = y.length - 1, Ie = Ee - 1;
      for (; V <= ue && V <= Ie; ) {
        const Ae = y[V], Pe = v[V] = ae ? yi(v[V]) : _o(v[V]);
        if (Ai(Ae, Pe)) D(Ae, Pe, F, null, q, J, le, Q, ae);
        else break;
        V++;
      }
      for (; V <= ue && V <= Ie; ) {
        const Ae = y[ue], Pe = v[Ie] = ae ? yi(v[Ie]) : _o(v[Ie]);
        if (Ai(Ae, Pe)) D(Ae, Pe, F, null, q, J, le, Q, ae);
        else break;
        ue--, Ie--;
      }
      if (V > ue) {
        if (V <= Ie) {
          const Ae = Ie + 1, Pe = Ae < Ee ? v[Ae].el : K;
          for (; V <= Ie; ) D(null, v[V] = ae ? yi(v[V]) : _o(v[V]), F, Pe, q, J, le, Q, ae), V++;
        }
      } else if (V > Ie) for (; V <= ue; ) we(y[V], q, J, true), V++;
      else {
        const Ae = V, Pe = V, We = /* @__PURE__ */ new Map();
        for (V = Pe; V <= Ie; V++) {
          const jt = v[V] = ae ? yi(v[V]) : _o(v[V]);
          jt.key != null && We.set(jt.key, V);
        }
        let Ge, Ft = 0;
        const _t = Ie - Pe + 1;
        let ho = false, fo = 0;
        const Gi = new Array(_t);
        for (V = 0; V < _t; V++) Gi[V] = 0;
        for (V = Ae; V <= ue; V++) {
          const jt = y[V];
          if (Ft >= _t) {
            we(jt, q, J, true);
            continue;
          }
          let po;
          if (jt.key != null) po = We.get(jt.key);
          else for (Ge = Pe; Ge <= Ie; Ge++) if (Gi[Ge - Pe] === 0 && Ai(jt, v[Ge])) {
            po = Ge;
            break;
          }
          po === void 0 ? we(jt, q, J, true) : (Gi[po - Pe] = V + 1, po >= fo ? fo = po : ho = true, D(jt, v[po], F, null, q, J, le, Q, ae), Ft++);
        }
        const zn = ho ? aN(Gi) : In;
        for (Ge = zn.length - 1, V = _t - 1; V >= 0; V--) {
          const jt = Pe + V, po = v[jt], Ur = v[jt + 1], kr = jt + 1 < Ee ? Ur.el || hp(Ur) : K;
          Gi[V] === 0 ? D(null, po, F, kr, q, J, le, Q, ae) : ho && (Ge < 0 || V !== zn[Ge] ? Bo(po, F, kr, 2) : Ge--);
        }
      }
    }, Bo = (y, v, F, K, q = null) => {
      const { el: J, type: le, transition: Q, children: ae, shapeFlag: V } = y;
      if (V & 6) {
        Bo(y.component.subTree, v, F, K);
        return;
      }
      if (V & 128) {
        y.suspense.move(v, F, K);
        return;
      }
      if (V & 64) {
        le.move(y, v, F, Wi);
        return;
      }
      if (le === Dt) {
        i(J, v, F);
        for (let ue = 0; ue < ae.length; ue++) Bo(ae[ue], v, F, K);
        i(y.anchor, v, F);
        return;
      }
      if (le === gr) {
        Y(y, v, F);
        return;
      }
      if (K !== 2 && V & 1 && Q) if (K === 0) Q.beforeEnter(J), i(J, v, F), Nt(() => Q.enter(J), q);
      else {
        const { leave: ue, delayLeave: Ie, afterLeave: Ae } = Q, Pe = () => {
          y.ctx.isUnmounted ? n(J) : i(J, v, F);
        }, We = () => {
          J._isLeaving && J[Jo](true), ue(J, () => {
            Pe(), Ae && Ae();
          });
        };
        Ie ? Ie(J, Pe, We) : We();
      }
      else i(J, v, F);
    }, we = (y, v, F, K = false, q = false) => {
      const { type: J, props: le, ref: Q, children: ae, dynamicChildren: V, shapeFlag: Ee, patchFlag: ue, dirs: Ie, cacheIndex: Ae } = y;
      if (ue === -2 && (q = false), Q != null && (ri(), pr(Q, null, F, y, true), si()), Ae != null && (v.renderCache[Ae] = void 0), Ee & 256) {
        v.ctx.deactivate(y);
        return;
      }
      const Pe = Ee & 1 && Ie, We = !bi(y);
      let Ge;
      if (We && (Ge = le && le.onVnodeBeforeUnmount) && go(Ge, v, y), Ee & 6) ce(y.component, F, K);
      else {
        if (Ee & 128) {
          y.suspense.unmount(F, K);
          return;
        }
        Pe && zi(y, null, v, "beforeUnmount"), Ee & 64 ? y.type.remove(y, v, F, Wi, K) : V && !V.hasOnce && (J !== Dt || ue > 0 && ue & 64) ? qt(V, v, F, false, true) : (J === Dt && ue & 384 || !q && Ee & 16) && qt(ae, v, F), K && xn(y);
      }
      (We && (Ge = le && le.onVnodeUnmounted) || Pe) && Nt(() => {
        Ge && go(Ge, v, y), Pe && zi(y, null, v, "unmounted");
      }, F);
    }, xn = (y) => {
      const { type: v, el: F, anchor: K, transition: q } = y;
      if (v === Dt) {
        ya(F, K);
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
        const { leave: le, delayLeave: Q } = q, ae = () => le(F, J);
        Q ? Q(y.el, J, ae) : ae();
      } else J();
    }, ya = (y, v) => {
      let F;
      for (; y !== v; ) F = N(y), n(y), y = F;
      n(v);
    }, ce = (y, v, F) => {
      const { bum: K, scope: q, job: J, subTree: le, um: Q, m: ae, a: V } = y;
      Ms(ae), Ms(V), K && lr(K), q.stop(), J && (J.flags |= 8, we(le, y, v, F)), Q && Nt(Q, v), Nt(() => {
        y.isUnmounted = true;
      }, v);
    }, qt = (y, v, F, K = false, q = false, J = 0) => {
      for (let le = J; le < y.length; le++) we(y[le], v, F, K, q);
    }, jo = (y) => {
      if (y.shapeFlag & 6) return jo(y.component.subTree);
      if (y.shapeFlag & 128) return y.suspense.next();
      const v = N(y.anchor || y.el), F = v && v[Ud];
      return F ? N(F) : v;
    };
    let io = false;
    const _r = (y, v, F) => {
      let K;
      y == null ? v._vnode && (we(v._vnode, null, null, true), K = v._vnode.component) : D(v._vnode || null, y, v, null, null, null, F), v._vnode = y, io || (io = true, qu(K), Md(), io = false);
    }, Wi = {
      p: D,
      um: we,
      m: Bo,
      r: xn,
      mt: It,
      mc: de,
      pc: Ve,
      pbc: Te,
      n: jo,
      o: e
    };
    return {
      render: _r,
      hydrate: void 0,
      createApp: zA(_r)
    };
  }
  function Xa({ type: e, props: t }, o) {
    return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
  }
  function $i({ effect: e, job: t }, o) {
    o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function sN(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function El(e, t, o = false) {
    const i = e.children, n = t.children;
    if (Se(i) && Se(n)) for (let s = 0; s < i.length; s++) {
      const l = i[s];
      let h = n[s];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = n[s] = yi(n[s]), h.el = l.el), !o && h.patchFlag !== -2 && El(l, h)), h.type === Ea && (h.patchFlag !== -1 ? h.el = l.el : h.__elIndex = s + (e.type === Dt ? 1 : 0)), h.type === Ht && !h.el && (h.el = l.el);
    }
  }
  function aN(e) {
    const t = e.slice(), o = [
      0
    ];
    let i, n, s, l, h;
    const d = e.length;
    for (i = 0; i < d; i++) {
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
  function Ms(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function hp(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? hp(t.subTree) : null;
  }
  const Ps = (e) => e.__isSuspense;
  function cN(e, t) {
    t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : Hd(e);
  }
  let gr, Tr;
  Dt = /* @__PURE__ */ Symbol.for("v-fgt");
  Ea = /* @__PURE__ */ Symbol.for("v-txt");
  Ht = /* @__PURE__ */ Symbol.for("v-cmt");
  gr = /* @__PURE__ */ Symbol.for("v-stc");
  Tr = [];
  let co = null;
  To = function(e = false) {
    Tr.push(co = e ? null : []);
  };
  function lN() {
    Tr.pop(), co = Tr[Tr.length - 1] || null;
  }
  let vr = 1;
  function Fs(e, t = false) {
    vr += e, e < 0 && co && t && (co.hasOnce = true);
  }
  function fp(e) {
    return e.dynamicChildren = vr > 0 ? co || In : null, lN(), vr > 0 && co && co.push(e), e;
  }
  zo = function(e, t, o, i, n, s) {
    return fp(je(e, t, o, i, n, s, true));
  };
  Cc = function(e, t, o, i, n) {
    return fp(Bt(e, t, o, i, n, true));
  };
  _n = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function Ai(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const dp = ({ key: e }) => e ?? null, ps = ({ ref: e, ref_key: t, ref_for: o }) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || ft(e) || be(e) ? {
    i: Mt,
    r: e,
    k: t,
    f: !!o
  } : e : null);
  je = function(e, t = null, o = null, i = 0, n = null, s = e === Dt ? 0 : 1, l = false, h = false) {
    const d = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && dp(t),
      ref: t && ps(t),
      scopeId: Fd,
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
    return h ? (Il(d, o), s & 128 && e.normalize(d)) : o && (d.shapeFlag |= lt(o) ? 8 : 16), vr > 0 && !l && co && (d.patchFlag > 0 || s & 6) && d.patchFlag !== 32 && co.push(d), d;
  };
  Bt = uN;
  function uN(e, t = null, o = null, i = 0, n = null, s = false) {
    if ((!e || e === qd) && (e = Ht), _n(e)) {
      const h = ci(e, t, true);
      return o && Il(h, o), vr > 0 && !s && co && (h.shapeFlag & 6 ? co[co.indexOf(e)] = h : co.push(h)), h.patchFlag = -2, h;
    }
    if (RN(e) && (e = e.__vccOpts), t) {
      t = hN(t);
      let { class: h, style: d } = t;
      h && !lt(h) && (t.class = nl(h)), Ke(d) && (fa(d) && !Se(d) && (d = wt({}, d)), t.style = ca(d));
    }
    const l = lt(e) ? 1 : Ps(e) ? 128 : kd(e) ? 64 : Ke(e) ? 4 : be(e) ? 2 : 0;
    return je(e, t, o, i, n, l, s, true);
  }
  function hN(e) {
    return e ? fa(e) || np(e) ? wt({}, e) : e : null;
  }
  ci = function(e, t, o = false, i = false) {
    const { props: n, ref: s, patchFlag: l, children: h, transition: d } = e, g = t ? dN(n || {}, t) : n, m = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: g,
      key: g && dp(g),
      ref: t && t.ref ? o && s ? Se(s) ? s.concat(ps(t)) : [
        s,
        ps(t)
      ] : ps(t) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: h,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Dt ? l === -1 ? 16 : l | 16 : l,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: d,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ci(e.ssContent),
      ssFallback: e.ssFallback && ci(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return d && i && Hi(m, d.clone(m)), m;
  };
  fN = function(e = " ", t = 0) {
    return Bt(Ea, null, e, t);
  };
  Lv = function(e, t) {
    const o = Bt(gr, null, e);
    return o.staticCount = t, o;
  };
  ts = function(e = "", t = false) {
    return t ? (To(), Cc(Ht, null, e)) : Bt(Ht, null, e);
  };
  function _o(e) {
    return e == null || typeof e == "boolean" ? Bt(Ht) : Se(e) ? Bt(Dt, null, e.slice()) : _n(e) ? yi(e) : Bt(Ea, null, String(e));
  }
  function yi(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ci(e);
  }
  function Il(e, t) {
    let o = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (Se(t)) o = 16;
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
      fN(t)
    ]) : o = 8);
    e.children = t, e.shapeFlag |= o;
  }
  dN = function(...e) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const i = e[o];
      for (const n in i) if (n === "class") t.class !== i.class && (t.class = nl([
        t.class,
        i.class
      ]));
      else if (n === "style") t.style = ca([
        t.style,
        i.style
      ]);
      else if (ia(n)) {
        const s = t[n], l = i[n];
        l && s !== l && !(Se(s) && s.includes(l)) && (t[n] = s ? [].concat(s, l) : l);
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
  const pN = Qd();
  let mN = 0;
  function gN(e, t, o) {
    const i = e.type, n = (t ? t.appContext : e.appContext) || pN, s = {
      uid: mN++,
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
      scope: new ld(true),
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
    }, s.root = t ? t.root : s, s.emit = $A.bind(null, s), e.ce && e.ce(s), s;
  }
  let Gt = null;
  ki = () => Gt || Mt;
  let _s, Dc;
  {
    const e = aa(), t = (o, i) => {
      let n;
      return (n = e[o]) || (n = e[o] = []), n.push(i), (s) => {
        n.length > 1 ? n.forEach((l) => l(s)) : n[0](s);
      };
    };
    _s = t("__VUE_INSTANCE_SETTERS__", (o) => Gt = o), Dc = t("__VUE_SSR_SETTERS__", (o) => Lr = o);
  }
  const Fr = (e) => {
    const t = Gt;
    return _s(e), e.scope.on(), () => {
      e.scope.off(), _s(t);
    };
  }, ch = () => {
    Gt && Gt.scope.off(), _s(null);
  };
  function pp(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Lr = false;
  function TN(e, t = false, o = false) {
    t && Dc(t);
    const { props: i, children: n } = e.vnode, s = pp(e);
    XA(e, i, s, t), oN(e, n, o || t);
    const l = s ? EN(e, t) : void 0;
    return t && Dc(false), l;
  }
  function EN(e, t) {
    const o = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, kA);
    const { setup: i } = o;
    if (i) {
      ri();
      const n = e.setupContext = i.length > 1 ? ON(e) : null, s = Fr(e), l = Mr(i, e, 0, [
        e.props,
        n
      ]), h = od(l);
      if (si(), s(), (h || e.sp) && !bi(e) && $d(e), h) {
        if (l.then(ch, ch), t) return l.then((d) => {
          lh(e, d);
        }).catch((d) => {
          da(d, e, 0);
        });
        e.asyncDep = l;
      } else lh(e, l);
    } else mp(e);
  }
  function lh(e, t, o) {
    be(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = bd(t)), mp(e);
  }
  function mp(e, t, o) {
    const i = e.type;
    e.render || (e.render = i.render || Ao);
    {
      const n = Fr(e);
      ri();
      try {
        WA(e);
      } finally {
        si(), n();
      }
    }
  }
  const IN = {
    get(e, t) {
      return Wt(e, "get", ""), e[t];
    }
  };
  function ON(e) {
    const t = (o) => {
      e.exposed = o || {};
    };
    return {
      attrs: new Proxy(e.attrs, IN),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Ia(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bd(ul(e.exposed)), {
      get(t, o) {
        if (o in t) return t[o];
        if (o in mr) return mr[o](e);
      },
      has(t, o) {
        return o in t || o in mr;
      }
    })) : e.proxy;
  }
  function Hc(e, t = true) {
    return be(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function RN(e) {
    return be(e) && "__vccOpts" in e;
  }
  Ol = (e, t) => uA(e, t, Lr);
  wN = function(e, t, o) {
    try {
      Fs(-1);
      const i = arguments.length;
      return i === 2 ? Ke(t) && !Se(t) ? _n(t) ? Bt(e, null, [
        t
      ]) : Bt(e, t) : Bt(e, null, t) : (i > 3 ? o = Array.prototype.slice.call(arguments, 2) : i === 3 && _n(o) && (o = [
        o
      ]), Bt(e, t, o));
    } finally {
      Fs(1);
    }
  };
  const yN = "3.5.26";
  let Mc;
  const uh = typeof window < "u" && window.trustedTypes;
  if (uh) try {
    Mc = uh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let gp, SN, AN, qo, hh, NN, mi, Qn, Un, Tp, Ep, bN, Vi, fh;
  gp = Mc ? (e) => Mc.createHTML(e) : (e) => e;
  SN = "http://www.w3.org/2000/svg";
  AN = "http://www.w3.org/1998/Math/MathML";
  qo = typeof document < "u" ? document : null;
  hh = qo && qo.createElement("template");
  NN = {
    insert: (e, t, o) => {
      t.insertBefore(e, o || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, o, i) => {
      const n = t === "svg" ? qo.createElementNS(SN, e) : t === "mathml" ? qo.createElementNS(AN, e) : o ? qo.createElement(e, {
        is: o
      }) : qo.createElement(e);
      return e === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
    },
    createText: (e) => qo.createTextNode(e),
    createComment: (e) => qo.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qo.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, o, i, n, s) {
      const l = o ? o.previousSibling : t.lastChild;
      if (n && (n === s || n.nextSibling)) for (; t.insertBefore(n.cloneNode(true), o), !(n === s || !(n = n.nextSibling)); ) ;
      else {
        hh.innerHTML = gp(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const h = hh.content;
        if (i === "svg" || i === "mathml") {
          const d = h.firstChild;
          for (; d.firstChild; ) h.appendChild(d.firstChild);
          h.removeChild(d);
        }
        t.insertBefore(h, o);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        o ? o.previousSibling : t.lastChild
      ];
    }
  };
  mi = "transition";
  Qn = "animation";
  Un = /* @__PURE__ */ Symbol("_vtc");
  Tp = {
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
  Ep = wt({}, jd, Tp);
  bN = (e) => (e.displayName = "Transition", e.props = Ep, e);
  Cv = bN((e, { slots: t }) => wN(SA, Ip(e), t));
  Vi = (e, t = []) => {
    Se(e) ? e.forEach((o) => o(...t)) : e && e(...t);
  };
  fh = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Ip(e) {
    const t = {};
    for (const pe in e) pe in Tp || (t[pe] = e[pe]);
    if (e.css === false) return t;
    const { name: o = "v", type: i, duration: n, enterFromClass: s = `${o}-enter-from`, enterActiveClass: l = `${o}-enter-active`, enterToClass: h = `${o}-enter-to`, appearFromClass: d = s, appearActiveClass: g = l, appearToClass: m = h, leaveFromClass: R = `${o}-leave-from`, leaveActiveClass: N = `${o}-leave-active`, leaveToClass: A = `${o}-leave-to` } = e, M = vN(n), D = M && M[0], ne = M && M[1], { onBeforeEnter: ee, onEnter: Z, onEnterCancelled: Y, onLeave: _, onLeaveCancelled: re, onBeforeAppear: ge = ee, onAppear: se = Z, onAppearCancelled: de = Y } = t, ie = (pe, Be, It, oo) => {
      pe._enterCancelled = oo, Ii(pe, Be ? m : h), Ii(pe, Be ? g : l), It && It();
    }, Te = (pe, Be) => {
      pe._isLeaving = false, Ii(pe, R), Ii(pe, A), Ii(pe, N), Be && Be();
    }, Ce = (pe) => (Be, It) => {
      const oo = pe ? se : Z, Je = () => ie(Be, pe, It);
      Vi(oo, [
        Be,
        Je
      ]), dh(() => {
        Ii(Be, pe ? d : s), Mo(Be, pe ? m : h), fh(oo) || ph(Be, i, D, Je);
      });
    };
    return wt(t, {
      onBeforeEnter(pe) {
        Vi(ee, [
          pe
        ]), Mo(pe, s), Mo(pe, l);
      },
      onBeforeAppear(pe) {
        Vi(ge, [
          pe
        ]), Mo(pe, d), Mo(pe, g);
      },
      onEnter: Ce(false),
      onAppear: Ce(true),
      onLeave(pe, Be) {
        pe._isLeaving = true;
        const It = () => Te(pe, Be);
        Mo(pe, R), pe._enterCancelled ? (Mo(pe, N), Pc(pe)) : (Pc(pe), Mo(pe, N)), dh(() => {
          pe._isLeaving && (Ii(pe, R), Mo(pe, A), fh(_) || ph(pe, i, ne, It));
        }), Vi(_, [
          pe,
          It
        ]);
      },
      onEnterCancelled(pe) {
        ie(pe, false, void 0, true), Vi(Y, [
          pe
        ]);
      },
      onAppearCancelled(pe) {
        ie(pe, true, void 0, true), Vi(de, [
          pe
        ]);
      },
      onLeaveCancelled(pe) {
        Te(pe), Vi(re, [
          pe
        ]);
      }
    });
  }
  function vN(e) {
    if (e == null) return null;
    if (Ke(e)) return [
      Qa(e.enter),
      Qa(e.leave)
    ];
    {
      const t = Qa(e);
      return [
        t,
        t
      ];
    }
  }
  function Qa(e) {
    return NS(e);
  }
  function Mo(e, t) {
    t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Un] || (e[Un] = /* @__PURE__ */ new Set())).add(t);
  }
  function Ii(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const o = e[Un];
    o && (o.delete(t), o.size || (e[Un] = void 0));
  }
  function dh(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let LN = 0;
  function ph(e, t, o, i) {
    const n = e._endId = ++LN, s = () => {
      n === e._endId && i();
    };
    if (o != null) return setTimeout(s, o);
    const { type: l, timeout: h, propCount: d } = Op(e, t);
    if (!l) return i();
    const g = l + "end";
    let m = 0;
    const R = () => {
      e.removeEventListener(g, N), s();
    }, N = (A) => {
      A.target === e && ++m >= d && R();
    };
    setTimeout(() => {
      m < d && R();
    }, h + 1), e.addEventListener(g, N);
  }
  function Op(e, t) {
    const o = window.getComputedStyle(e), i = (M) => (o[M] || "").split(", "), n = i(`${mi}Delay`), s = i(`${mi}Duration`), l = mh(n, s), h = i(`${Qn}Delay`), d = i(`${Qn}Duration`), g = mh(h, d);
    let m = null, R = 0, N = 0;
    t === mi ? l > 0 && (m = mi, R = l, N = s.length) : t === Qn ? g > 0 && (m = Qn, R = g, N = d.length) : (R = Math.max(l, g), m = R > 0 ? l > g ? mi : Qn : null, N = m ? m === mi ? s.length : d.length : 0);
    const A = m === mi && /\b(?:transform|all)(?:,|$)/.test(i(`${mi}Property`).toString());
    return {
      type: m,
      timeout: R,
      propCount: N,
      hasTransform: A
    };
  }
  function mh(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((o, i) => gh(o) + gh(e[i])));
  }
  function gh(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Pc(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function CN(e, t, o) {
    const i = e[Un];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
  }
  let Us, Rp;
  Us = /* @__PURE__ */ Symbol("_vod");
  Rp = /* @__PURE__ */ Symbol("_vsh");
  Dv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: o }) {
      e[Us] = e.style.display === "none" ? "" : e.style.display, o && t ? o.beforeEnter(e) : er(e, t);
    },
    mounted(e, { value: t }, { transition: o }) {
      o && t && o.enter(e);
    },
    updated(e, { value: t, oldValue: o }, { transition: i }) {
      !t != !o && (i ? t ? (i.beforeEnter(e), er(e, true), i.enter(e)) : i.leave(e, () => {
        er(e, false);
      }) : er(e, t));
    },
    beforeUnmount(e, { value: t }) {
      er(e, t);
    }
  };
  function er(e, t) {
    e.style.display = t ? e[Us] : "none", e[Rp] = !t;
  }
  const wp = /* @__PURE__ */ Symbol("");
  Hv = function(e) {
    const t = ki();
    if (!t) return;
    const o = t.ut = (n = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((s) => ks(s, n));
    }, i = () => {
      const n = e(t.proxy);
      t.ce ? ks(t.ce, n) : Fc(t.subTree, n), o(n);
    };
    Zd(() => {
      Hd(i);
    }), Pr(() => {
      yn(i, Ao, {
        flush: "post"
      });
      const n = new MutationObserver(i);
      n.observe(t.subTree.el.parentNode, {
        childList: true
      }), ml(() => n.disconnect());
    });
  };
  function Fc(e, t) {
    if (e.shapeFlag & 128) {
      const o = e.suspense;
      e = o.activeBranch, o.pendingBranch && !o.isHydrating && o.effects.push(() => {
        Fc(o.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) ks(e.el, t);
    else if (e.type === Dt) e.children.forEach((o) => Fc(o, t));
    else if (e.type === gr) {
      let { el: o, anchor: i } = e;
      for (; o && (ks(o, t), o !== i); ) o = o.nextSibling;
    }
  }
  function ks(e, t) {
    if (e.nodeType === 1) {
      const o = e.style;
      let i = "";
      for (const n in t) {
        const s = MS(t[n]);
        o.setProperty(`--${n}`, s), i += `--${n}: ${s};`;
      }
      o[wp] = i;
    }
  }
  const DN = /(?:^|;)\s*display\s*:/;
  function HN(e, t, o) {
    const i = e.style, n = lt(o);
    let s = false;
    if (o && !n) {
      if (t) if (lt(t)) for (const l of t.split(";")) {
        const h = l.slice(0, l.indexOf(":")).trim();
        o[h] == null && ms(i, h, "");
      }
      else for (const l in t) o[l] == null && ms(i, l, "");
      for (const l in o) l === "display" && (s = true), ms(i, l, o[l]);
    } else if (n) {
      if (t !== o) {
        const l = i[wp];
        l && (o += ";" + l), i.cssText = o, s = DN.test(o);
      }
    } else t && e.removeAttribute("style");
    Us in e && (e[Us] = s ? i.display : "", e[Rp] && (i.display = "none"));
  }
  const Th = /\s*!important$/;
  function ms(e, t, o) {
    if (Se(o)) o.forEach((i) => ms(e, t, i));
    else if (o == null && (o = ""), t.startsWith("--")) e.setProperty(t, o);
    else {
      const i = MN(e, t);
      Th.test(o) ? e.setProperty(hi(i), o.replace(Th, ""), "important") : e[i] = o;
    }
  }
  const Eh = [
    "Webkit",
    "Moz",
    "ms"
  ], ec = {};
  function MN(e, t) {
    const o = ec[t];
    if (o) return o;
    let i = uo(t);
    if (i !== "filter" && i in e) return ec[t] = i;
    i = sa(i);
    for (let n = 0; n < Eh.length; n++) {
      const s = Eh[n] + i;
      if (s in e) return ec[t] = s;
    }
    return t;
  }
  const Ih = "http://www.w3.org/1999/xlink";
  function Oh(e, t, o, i, n, s = HS(t)) {
    i && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Ih, t.slice(6, t.length)) : e.setAttributeNS(Ih, t, o) : o == null || s && !sd(o) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : ui(o) ? String(o) : o);
  }
  function Rh(e, t, o, i, n) {
    if (t === "innerHTML" || t === "textContent") {
      o != null && (e[t] = t === "innerHTML" ? gp(o) : o);
      return;
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const h = s === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? e.type === "checkbox" ? "on" : "" : String(o);
      (h !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(t), e._value = o;
      return;
    }
    let l = false;
    if (o === "" || o == null) {
      const h = typeof e[t];
      h === "boolean" ? o = sd(o) : o == null && h === "string" ? (o = "", l = true) : h === "number" && (o = 0, l = true);
    }
    try {
      e[t] = o;
    } catch {
    }
    l && e.removeAttribute(n || t);
  }
  function PN(e, t, o, i) {
    e.addEventListener(t, o, i);
  }
  function FN(e, t, o, i) {
    e.removeEventListener(t, o, i);
  }
  const wh = /* @__PURE__ */ Symbol("_vei");
  function _N(e, t, o, i, n = null) {
    const s = e[wh] || (e[wh] = {}), l = s[t];
    if (i && l) l.value = i;
    else {
      const [h, d] = UN(t);
      if (i) {
        const g = s[t] = GN(i, n);
        PN(e, h, g, d);
      } else l && (FN(e, h, l, d), s[t] = void 0);
    }
  }
  const yh = /(?:Once|Passive|Capture)$/;
  function UN(e) {
    let t;
    if (yh.test(e)) {
      t = {};
      let i;
      for (; i = e.match(yh); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : hi(e.slice(2)),
      t
    ];
  }
  let tc = 0;
  const kN = Promise.resolve(), WN = () => tc || (kN.then(() => tc = 0), tc = Date.now());
  function GN(e, t) {
    const o = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= o.attached) return;
      vo(BN(i, o.value), t, 5, [
        i
      ]);
    };
    return o.value = e, o.attached = WN(), o;
  }
  function BN(e, t) {
    if (Se(t)) {
      const o = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        o.call(e), e._stopped = true;
      }, t.map((i) => (n) => !n._stopped && i && i(n));
    } else return t;
  }
  const Sh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, jN = (e, t, o, i, n, s) => {
    const l = n === "svg";
    t === "class" ? CN(e, i, l) : t === "style" ? HN(e, o, i) : ia(t) ? ol(t) || _N(e, t, o, i, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : YN(e, t, i, l)) ? (Rh(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oh(e, t, i, l, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !lt(i)) ? Rh(e, uo(t), i, s, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Oh(e, t, i, l));
  };
  function YN(e, t, o, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && Sh(t) && be(o));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const n = e.tagName;
      if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE") return false;
    }
    return Sh(t) && lt(o) ? false : t in e;
  }
  let yp, Sp, Ws, Ah, xN, zN;
  yp = /* @__PURE__ */ new WeakMap();
  Sp = /* @__PURE__ */ new WeakMap();
  Ws = /* @__PURE__ */ Symbol("_moveCb");
  Ah = /* @__PURE__ */ Symbol("_enterCb");
  xN = (e) => (delete e.props.mode, e);
  zN = xN({
    name: "TransitionGroup",
    props: wt({}, Ep, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const o = ki(), i = Bd();
      let n, s;
      return dl(() => {
        if (!n.length) return;
        const l = e.moveClass || `${e.name || "v"}-move`;
        if (!qN(n[0].el, o.vnode.el, l)) {
          n = [];
          return;
        }
        n.forEach($N), n.forEach(VN);
        const h = n.filter(ZN);
        Pc(o.vnode.el), h.forEach((d) => {
          const g = d.el, m = g.style;
          Mo(g, l), m.transform = m.webkitTransform = m.transitionDuration = "";
          const R = g[Ws] = (N) => {
            N && N.target !== g || (!N || N.propertyName.endsWith("transform")) && (g.removeEventListener("transitionend", R), g[Ws] = null, Ii(g, l));
          };
          g.addEventListener("transitionend", R);
        }), n = [];
      }), () => {
        const l = Ue(e), h = Ip(l);
        let d = l.tag || Dt;
        if (n = [], s) for (let g = 0; g < s.length; g++) {
          const m = s[g];
          m.el && m.el instanceof Element && (n.push(m), Hi(m, br(m, h, i, o)), yp.set(m, {
            left: m.el.offsetLeft,
            top: m.el.offsetTop
          }));
        }
        s = t.default ? fl(t.default()) : [];
        for (let g = 0; g < s.length; g++) {
          const m = s[g];
          m.key != null && Hi(m, br(m, h, i, o));
        }
        return Bt(d, null, s);
      };
    }
  });
  Mv = zN;
  function $N(e) {
    const t = e.el;
    t[Ws] && t[Ws](), t[Ah] && t[Ah]();
  }
  function VN(e) {
    Sp.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function ZN(e) {
    const t = yp.get(e), o = Sp.get(e), i = t.left - o.left, n = t.top - o.top;
    if (i || n) {
      const s = e.el.style;
      return s.transform = s.webkitTransform = `translate(${i}px,${n}px)`, s.transitionDuration = "0s", e;
    }
  }
  function qN(e, t, o) {
    const i = e.cloneNode(), n = e[Un];
    n && n.forEach((h) => {
      h.split(/\s+/).forEach((d) => d && i.classList.remove(d));
    }), o.split(/\s+/).forEach((h) => h && i.classList.add(h)), i.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(i);
    const { hasTransform: l } = Op(i);
    return s.removeChild(i), l;
  }
  let KN, JN, XN, QN;
  KN = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  JN = {
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
    exact: (e, t) => KN.some((o) => e[`${o}Key`] && !t.includes(o))
  };
  Pv = (e, t) => {
    const o = e._withMods || (e._withMods = {}), i = t.join(".");
    return o[i] || (o[i] = ((n, ...s) => {
      for (let l = 0; l < t.length; l++) {
        const h = JN[t[l]];
        if (h && h(n, t)) return;
      }
      return e(n, ...s);
    }));
  };
  XN = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  Fv = (e, t) => {
    const o = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return o[i] || (o[i] = ((n) => {
      if (!("key" in n)) return;
      const s = hi(n.key);
      if (t.some((l) => l === s || XN[l] === s)) return e(n);
    }));
  };
  QN = wt({
    patchProp: jN
  }, NN);
  let Nh;
  function eb() {
    return Nh || (Nh = nN(QN));
  }
  const Ap = ((...e) => {
    const t = eb().createApp(...e), { mount: o } = t;
    return t.mount = (i) => {
      const n = ob(i);
      if (!n) return;
      const s = t._component;
      !be(s) && !s.render && !s.template && (s.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
      const l = o(n, false, tb(n));
      return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), l;
    }, t;
  });
  function tb(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function ob(e) {
    return lt(e) ? document.querySelector(e) : e;
  }
  const ib = "" + new URL("../favicon.svg", import.meta.url).href, Yt = (e) => dc(e) ? e : sf(e) ? String(e) : JSON.stringify(e), Co = {
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
  }, nb = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function Np(e, t, o = 1e4, i = {}, n = 0, s = 0, l = 0) {
    var _a3, _b3, _c2, _d2, _e2, _f2;
    const { logger: h = nb, progressReporter: d, printLog: g = true } = i, m = e.find((D) => D.name === t);
    if (!m) throw new Error(`cannot exactly find module "${t}" from the library`);
    const R = e.findIndex((D) => D.name === m.name);
    if (e[R].status === "loaded") return g && h.info(Co.alreadyLoaded(m.name)), {
      completed: l,
      total: s
    };
    const N = m.dependencies || [], A = e.filter((D) => N.includes(D.name)), M = N.filter((D) => !e.find((ne) => ne.name === D));
    if (M.length > 0) {
      const D = Co.missingDependencies(m.name, M.join(", "));
      throw g && h.error(D), new Error(D);
    }
    if (e[R].status === "error") {
      const D = Co.errorDetermined(m.name);
      throw g && h.info(D), new Error(D);
    }
    if (e[R].status === "loading") return g && h.info(Co.alreadyLoading(m.name)), await rb(e, m.name, o, h), {
      completed: l,
      total: s
    };
    try {
      let D = s, ne = l;
      if (n === 0) {
        const ee = /* @__PURE__ */ new Set(), Z = (Y) => {
          if (ee.has(Y)) return;
          ee.add(Y);
          const _ = e.find((re) => re.name === Y);
          if (_ && _.dependencies) for (const re of _.dependencies) Z(re);
        };
        Z(t), D = ee.size, ne = 0;
      }
      if (A.length > 0) {
        h.info(Co.loadDependencies(m.name, A.map((ee) => ee.name)));
        for (const ee of A) {
          const Z = await Np(e, ee.name, o, {
            logger: h,
            progressReporter: d,
            printLog: g
          }, n + 1, D, ne);
          ne = Z.completed, D = Z.total, (_a3 = d == null ? void 0 : d.onOverallProgress) == null ? void 0 : _a3.call(d, ne, D);
        }
        g && h.info(Co.dependenciesReady(m.name));
      }
      e[R].status = "loading", (_b3 = d == null ? void 0 : d.onModuleStart) == null ? void 0 : _b3.call(d, m.displayName);
      try {
        return g && h.info(Co.loading(m.name)), await m.moduleInit(o), e[R].status = "loaded", ne++, (_c2 = d == null ? void 0 : d.onModuleComplete) == null ? void 0 : _c2.call(d, m.displayName), (_d2 = d == null ? void 0 : d.onOverallProgress) == null ? void 0 : _d2.call(d, ne, D), g && h.info(Co.loaded(m.name)), {
          completed: ne,
          total: D
        };
      } catch (ee) {
        e[R].status = "error";
        const Z = Co.error(m.name, dc(ee) ? ee : sf(ee) ? ee.message : JSON.stringify(ee));
        throw h.error(Z), (_e2 = d == null ? void 0 : d.onModuleError) == null ? void 0 : _e2.call(d, m.displayName, dc(ee) ? new Error(ee) : ee), new Error(Z);
      }
    } catch (D) {
      e[R].status = "error", console.log(D);
      const ne = Co.error(m.name, D);
      throw h.error(ne), (_f2 = d == null ? void 0 : d.onModuleError) == null ? void 0 : _f2.call(d, m.displayName, D), new Error(ne);
    }
  }
  async function rb(e, t, o = 1e4, i) {
    const n = Date.now();
    return new Promise((s, l) => {
      const h = setInterval(() => {
        const d = e.find((g) => g.name === t);
        if (d && d.status === "loaded") clearInterval(h), s();
        else if (Date.now() - n > o) {
          clearInterval(h);
          const g = new Error(`Load module ${t} timeout`);
          i == null ? void 0 : i.error(g.message), l(g);
        }
      }, 10);
    });
  }
  let sb, ab, bh, cb;
  sb = "modulepreload";
  ab = function(e, t) {
    return new URL(e, t).href;
  };
  bh = {};
  oc = function(t, o, i) {
    let n = Promise.resolve();
    if (o && o.length > 0) {
      let g = function(m) {
        return Promise.all(m.map((R) => Promise.resolve(R).then((N) => ({
          status: "fulfilled",
          value: N
        }), (N) => ({
          status: "rejected",
          reason: N
        }))));
      };
      const l = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), d = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      n = g(o.map((m) => {
        if (m = ab(m, i), m in bh) return;
        bh[m] = true;
        const R = m.endsWith(".css"), N = R ? '[rel="stylesheet"]' : "";
        if (i) for (let M = l.length - 1; M >= 0; M--) {
          const D = l[M];
          if (D.href === m && (!R || D.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${m}"]${N}`)) return;
        const A = document.createElement("link");
        if (A.rel = R ? "stylesheet" : sb, R || (A.as = "script"), A.crossOrigin = "", A.href = m, d && A.setAttribute("nonce", d), document.head.appendChild(A), R) return new Promise((M, D) => {
          A.addEventListener("load", M), A.addEventListener("error", () => D(new Error(`Unable to preload CSS for ${m}`)));
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
  cb = [
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
  class xe extends Gn {
    constructor(t, o, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", Dr.GEOLOCATION);
      this.code = o;
    }
  }
  class $o extends xe {
    constructor(t = "Geolocation update service error", o, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = o;
    }
  }
  class ko {
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
  class lb {
    constructor(t) {
      __publicField(this, "strategies", []);
      __publicField(this, "activeStrategy", null);
      __publicField(this, "watcherCount", 0);
      __publicField(this, "isInitialized", false);
      this.strategies = t;
    }
    async initialise() {
      if (this.isInitialized) return B(void 0);
      for (const t of this.strategies) try {
        if (await t.isAvailable()) {
          if (this.activeStrategy = t, (await this.activeStrategy.initialize()).isErr()) {
            console.info(`[BackendManager] Backend ${t.name} not initialised`);
            continue;
          }
          return this.isInitialized = true, console.info(`[BackendManager] Initialised with ${t.name} backend`), B(void 0);
        } else console.info(`[BackendManager] Fail to initialise with ${t.name} backend, trying fallbacks`);
      } catch (o) {
        console.warn(`[BackendManager] Failed to test ${t.name} backend:`, o);
        continue;
      }
      return C(new xe("No backend available", "BACKEND_NOT_AVAILABLE"));
    }
    async startWatching(t) {
      if (!this.isInitialized) return C(new xe("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return C(new xe("No backend available", "BACKEND_NOT_AVAILABLE"));
      if (this.watcherCount === 0) {
        const o = await this.activeStrategy.startWatching(t);
        if (o.isErr()) return console.warn(`[BackendManager] Failed to start ${this.activeStrategy.name} backend:`, o.error), C(o.error);
      } else {
        const o = await this.activeStrategy.startWatching(t);
        if (o.isErr()) return C(o.error);
      }
      return this.watcherCount++, console.info(`[BackendManager] Started watching with ${this.activeStrategy.name} backend (count: ${this.watcherCount})`), B(this.activeStrategy.name);
    }
    async stopWatching() {
      var _a3;
      if (this.watcherCount === 0 || !this.activeStrategy) return B(void 0);
      if (this.watcherCount--, this.watcherCount === 0) {
        const t = await this.activeStrategy.stopWatching();
        if (t.isErr()) return C(new xe(`Failed to stop ${((_a3 = this.activeStrategy) == null ? void 0 : _a3.name) || "unknown"} backend`, "UPDATE_SERVICE_ERROR", t.error));
        console.info("[BackendManager] Stopped watching location");
      } else console.info(`[BackendManager] Decremented watcher count (count: ${this.watcherCount})`);
      return B(void 0);
    }
    async getCurrentPosition() {
      if (!this.isInitialized) return C(new xe("Backend not initialized", "BACKEND_NOT_INITIALIZED"));
      if (!this.activeStrategy) return C(new xe("No backend available for current position", "BACKEND_NOT_AVAILABLE"));
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
  class ub {
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
  class hb {
    constructor() {
      __publicField(this, "currentLocation", null);
      __publicField(this, "currentBackend", null);
      __publicField(this, "eventEmitter");
      this.eventEmitter = new ub();
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
      if (this.isInitialized) return B(void 0);
      try {
        const t = Xs();
        if (t.isErr()) return C(new xe("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const o = t.value.getGeolocationProvider();
        return o ? (this.provider = o, this.isInitialized = true, B(void 0)) : C(new xe("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
      } catch (t) {
        return C(new xe("Exception during GPS backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider) return C(new xe("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const o = await this.provider.watchPosition((i) => {
        const n = new ko(i.coords.latitude, i.coords.longitude, i.coords.accuracy);
        t(n, "gps");
      });
      return o.isErr() ? C(new xe("Failed to start watching position", "UPDATE_SERVICE_ERROR", o.error)) : (this.watchId = o.value, B(void 0));
    }
    async stopWatching() {
      if (this.watchId !== null && this.provider) {
        const t = this.provider.clearWatch(this.watchId);
        if (t.isErr()) return C(new xe("Failed to stop watching position", "UPDATE_SERVICE_ERROR", t.error));
        this.watchId = null;
      }
      return B(void 0);
    }
    async getCurrentPosition() {
      if (!this.provider) return C(new xe("GPS backend not initialized", "BACKEND_NOT_AVAILABLE"));
      const t = await this.provider.getCurrentPosition();
      if (t.isErr()) return C(new xe("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
      const o = t.value;
      return B(new ko(o.coords.latitude, o.coords.longitude, o.coords.accuracy));
    }
  }
  const vh = "https://ipapi.co/json/";
  class db {
    constructor() {
      __publicField(this, "name", "ip");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "watchInterval", null);
      __publicField(this, "lastLocation", null);
      __publicField(this, "nextCallbackId", 1);
      __publicField(this, "activeWatcherCount", 0);
    }
    async initialize() {
      return B();
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
      }, 3e4), this.updateLocation()), B(void 0);
    }
    async stopWatching() {
      try {
        return this.watchCallbacks.clear(), this.activeWatcherCount = 0, this.watchInterval !== null && (clearInterval(this.watchInterval), this.watchInterval = null), this.lastLocation = null, B(void 0);
      } catch (t) {
        return C(new xe("Failed to stop IP location watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      try {
        console.info("[IPFallbackBackend] Getting location from IP service");
        const t = await fetch(vh, {
          signal: AbortSignal.timeout(1e4)
        });
        if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
        const o = await t.json(), i = new ko(o.latitude, o.longitude, 5e4);
        return console.info("[IPFallbackBackend] Successfully retrieved location from IP service"), B(i);
      } catch (t) {
        return C(new xe("Failed to get location from IP service", "POSITION_UNAVAILABLE", t));
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
  const { sin: so, cos: pb, sqrt: Rl, abs: Gs, PI: Zt } = Math, Lh = 6378245, Ch = 0.006693421622965823;
  function bp(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function mb(e, t) {
    let o = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * Rl(Gs(e));
    return o += (20 * so(6 * e * Zt) + 20 * so(2 * e * Zt)) * 2 / 3, o += (20 * so(t * Zt) + 40 * so(t / 3 * Zt)) * 2 / 3, o += (160 * so(t / 12 * Zt) + 320 * so(t * Zt / 30)) * 2 / 3, o;
  }
  function gb(e, t) {
    let o = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * Rl(Gs(e));
    return o += (20 * so(6 * e * Zt) + 20 * so(2 * e * Zt)) * 2 / 3, o += (20 * so(e * Zt) + 40 * so(e / 3 * Zt)) * 2 / 3, o += (150 * so(e / 12 * Zt) + 300 * so(e / 30 * Zt)) * 2 / 3, o;
  }
  function Tb(e, t) {
    let o = gb(e - 105, t - 35), i = mb(e - 105, t - 35);
    const n = t / 180 * Zt;
    let s = so(n);
    s = 1 - Ch * s * s;
    const l = Rl(s);
    return o = o * 180 / (Lh / l * pb(n) * Zt), i = i * 180 / (Lh * (1 - Ch) / (s * l) * Zt), [
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
    const i = Tb(t, o);
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
    for (; Gs(l) > 1e-6 || Gs(h) > 1e-6; ) i -= l, n -= h, s = vi([
      i,
      n
    ]), l = s[0] - t, h = s[1] - o;
    return [
      i,
      n
    ];
  }
  const { sin: Bs, cos: js, atan2: vp, sqrt: Lp, PI: Eb } = Math, Ys = Eb * 3e3 / 180;
  function Sn(e) {
    const [t, o] = e, i = t - 65e-4, n = o - 6e-3, s = Lp(i * i + n * n) - 2e-5 * Bs(n * Ys), l = vp(n, i) - 3e-6 * js(i * Ys), h = s * js(l), d = s * Bs(l);
    return [
      h,
      d
    ];
  }
  function Wn(e) {
    const [t, o] = e, i = t, n = o, s = Lp(i * i + n * n) + 2e-5 * Bs(n * Ys), l = vp(n, i) + 3e-6 * js(i * Ys), h = s * js(l) + 65e-4, d = s * Bs(l) + 6e-3;
    return [
      h,
      d
    ];
  }
  const Dh = 180 / Math.PI, Hh = Math.PI / 180, xs = 6378137, gi = 20037508342789244e-9;
  function os(e) {
    return [
      e[0] * Dh / xs,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / xs))) * Dh
    ];
  }
  function Oa(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, o = [
      xs * t * Hh,
      xs * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * Hh))
    ];
    return o[0] > gi && (o[0] = gi), o[0] < -gi && (o[0] = -gi), o[1] > gi && (o[1] = gi), o[1] < -gi && (o[1] = -gi), o;
  }
  const { abs: zs } = Math, Mh = [
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
  ], Ib = [
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
  ], Ob = [
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
    const i = zs(t) / o[9];
    let n = o[0] + o[1] * zs(e), s = o[2] + o[3] * i + o[4] * Math.pow(i, 2) + o[5] * Math.pow(i, 3) + o[6] * Math.pow(i, 4) + o[7] * Math.pow(i, 5) + o[8] * Math.pow(i, 6);
    return n *= e < 0 ? -1 : 1, s *= t < 0 ? -1 : 1, [
      n,
      s
    ];
  }
  function Ra(e) {
    const [t, o] = e;
    let i = [];
    for (let n = 0; n < Ph.length; n++) if (zs(o) > Ph[n]) {
      i = Ob[n];
      break;
    }
    return Cp(t, o, i);
  }
  function is(e) {
    const [t, o] = e;
    let i = [];
    for (let n = 0; n < Mh.length; n++) if (zs(o) >= Mh[n]) {
      i = Ib[n];
      break;
    }
    return Cp(t, o, i);
  }
  function Ti(e, t) {
    if (!e) throw new Error(t);
  }
  function Dp(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function Fh(e) {
    return !isNaN(Number(e)) && e !== null && !Dp(e);
  }
  function Eo(...e) {
    const t = e.length - 1;
    return function(...o) {
      let i = t, n = e[t].apply(null, o);
      for (; i--; ) n = e[i].call(null, n);
      return n;
    };
  }
  function Hp(e, t, o = false) {
    if (e === null) return;
    let i, n, s, l, h, d, g = 0, m = 0, R, N;
    const { type: A } = e, M = A === "FeatureCollection", D = A === "Feature", ne = M ? e.features.length : 1;
    for (let ee = 0; ee < ne; ee++) {
      R = M ? e.features[ee].geometry : D ? e.geometry : e, N = R ? R.type === "GeometryCollection" : false, d = N ? R.geometries.length : 1;
      for (let Z = 0; Z < d; Z++) {
        let Y = 0, _ = 0;
        if (l = N ? R.geometries[Z] : R, l === null) continue;
        const re = l.type;
        switch (g = o && (re === "Polygon" || re === "MultiPolygon") ? 1 : 0, re) {
          case null:
            break;
          case "Point":
            if (h = l.coordinates, t(h, m, ee, Y, _) === false) return false;
            m++, Y++;
            break;
          case "LineString":
          case "MultiPoint":
            for (h = l.coordinates, i = 0; i < h.length; i++) {
              if (t(h[i], m, ee, Y, _) === false) return false;
              m++, re === "MultiPoint" && Y++;
            }
            re === "LineString" && Y++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (h = l.coordinates, i = 0; i < h.length; i++) {
              for (n = 0; n < h[i].length - g; n++) {
                if (t(h[i][n], m, ee, Y, _) === false) return false;
                m++;
              }
              re === "MultiLineString" && Y++, re === "Polygon" && _++;
            }
            re === "Polygon" && Y++;
            break;
          case "MultiPolygon":
            for (h = l.coordinates, i = 0; i < h.length; i++) {
              for (_ = 0, n = 0; n < h[i].length; n++) {
                for (s = 0; s < h[i][n].length - g; s++) {
                  if (t(h[i][n][s], m, ee, Y, _) === false) return false;
                  m++;
                }
                _++;
              }
              Y++;
            }
            break;
          case "GeometryCollection":
            for (i = 0; i < l.geometries.length; i++) if (Hp(l.geometries[i], t, o) === false) return false;
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
  const Rb = {
    to: {
      [ct.GCJ02]: vi,
      [ct.BD09]: Eo(Wn, vi),
      [ct.BD09MC]: Eo(Ra, Wn, vi),
      [ct.EPSG3857]: Oa
    }
  }, wb = {
    to: {
      [ct.WGS84]: kn,
      [ct.BD09]: Wn,
      [ct.BD09MC]: Eo(Ra, Wn),
      [ct.EPSG3857]: Eo(Oa, kn)
    }
  }, yb = {
    to: {
      [ct.WGS84]: Eo(kn, Sn),
      [ct.GCJ02]: Sn,
      [ct.EPSG3857]: Eo(Oa, kn, Sn),
      [ct.BD09MC]: Ra
    }
  }, Sb = {
    to: {
      [ct.WGS84]: os,
      [ct.GCJ02]: Eo(vi, os),
      [ct.BD09]: Eo(Wn, vi, os),
      [ct.BD09MC]: Eo(Ra, Wn, vi, os)
    }
  }, Ab = {
    to: {
      [ct.WGS84]: Eo(kn, Sn, is),
      [ct.GCJ02]: Eo(Sn, is),
      [ct.EPSG3857]: Eo(Oa, kn, Sn, is),
      [ct.BD09]: is
    }
  }, Nb = {
    WGS84: Rb,
    GCJ02: wb,
    BD09: yb,
    EPSG3857: Sb,
    BD09MC: Ab
  };
  var bb = Nb;
  function vb(e, t, o) {
    if (Ti(!!e, "The args[0] input coordinate is required"), Ti(!!t, "The args[1] original coordinate system is required"), Ti(!!o, "The args[2] target coordinate system is required"), t === o) return e;
    const i = bb[t];
    Ti(!!i, `Invalid original coordinate system: ${t}`);
    const n = i.to[o];
    Ti(!!n, `Invalid target coordinate system: ${o}`);
    const s = typeof e;
    if (Ti(s === "string" || s === "object", `Invalid input coordinate type: ${s}`), s === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let l = false;
    Dp(e) && (Ti(e.length >= 2, `Invalid input coordinate: ${e}`), Ti(Fh(e[0]) && Fh(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), l = true);
    const h = n;
    return l ? h(e) : (Hp(e, (d) => {
      [d[0], d[1]] = h(d);
    }), e);
  }
  const An = Object.assign(Object.assign({}, ct), {
    CRSTypes: ct,
    transform: vb
  }), _h = 6378137;
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
      return Pt("geolocationCorrection") ?? false;
    }
    setReferencePoint(t, o) {
      this.referencePoint = t, this.localProjection = o || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`, this.cachedLocalProjection && this.cachedLocalProjection.free(), this.cachedLocalProjection = new Pn(this.localProjection);
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      let o = t;
      if (this.geolocationCorrectionEnabled) {
        const l = new ko(t.latitude, t.longitude);
        o = Pp(l);
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
          const l = new ko(s.latitude, s.longitude);
          return Lb(l);
        }
        return s;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const o = 6371e3, i = this.referencePoint.latitude * Math.PI / 180, n = this.referencePoint.longitude * Math.PI / 180, s = t.latitude * Math.PI / 180, l = t.longitude * Math.PI / 180, h = o * (l - n) * Math.cos((i + s) / 2), d = o * (s - i);
      return {
        x: h,
        y: d
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const o = this.referencePoint.latitude * Math.PI / 180, i = this.referencePoint.longitude * Math.PI / 180, n = (t.y / _h + o) * 180 / Math.PI, s = (t.x / (_h * Math.cos(o)) + i) * 180 / Math.PI;
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
  function Pp(e) {
    const t = An.transform([
      e.longitude,
      e.latitude
    ], An.WGS84, An.GCJ02);
    return new ko(t[1], t[0]);
  }
  function Lb(e) {
    const t = An.transform([
      e.longitude,
      e.latitude
    ], An.GCJ02, An.WGS84);
    return new ko(t[1], t[0]);
  }
  new Mp();
  class Cb {
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
      __publicField(this, "imuProvider", null);
      __publicField(this, "worker", null);
      __publicField(this, "coordinateTransformer", null);
      __publicField(this, "watchId", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "userCallback", null);
      __publicField(this, "imuCallbacks", []);
      __publicField(this, "imuUpdateInterval", null);
      __publicField(this, "pendingMessages", /* @__PURE__ */ new Map());
      __publicField(this, "messageId", 0);
      this.config = t;
    }
    createWorker() {
      return new Worker(new URL("" + new URL("kalman-worker-CNkMZ-0i.js", import.meta.url).href, import.meta.url), {
        type: "module"
      });
    }
    async sendMessage(t, o) {
      if (!this.worker) throw new Error("Worker not initialized");
      const i = `${Date.now()}-${++this.messageId}`;
      return new Promise((n, s) => {
        this.pendingMessages.set(i, {
          resolve: n,
          reject: s
        });
        const l = {
          type: t,
          payload: o,
          id: i
        };
        this.worker.postMessage(l), setTimeout(() => {
          this.pendingMessages.get(i) && (this.pendingMessages.delete(i), s(new Error(`Message timeout: ${t}`)));
        }, 5e3);
      });
    }
    async processGPSReading(t) {
      if (this.worker) try {
        const i = {
          reading: await this.convertToLocalGPS(t)
        };
        this.sendMessage("PROCESS_GPS", i).catch((n) => {
          console.error("[KalmanBackend] Failed to send GPS reading to worker:", n);
        });
      } catch (o) {
        console.error("[KalmanBackend] Error converting GPS to local:", o);
      }
    }
    setupWorkerHandlers() {
      this.worker && (this.worker.onmessage = (t) => {
        const o = t.data;
        if (o.id && this.pendingMessages.has(o.id)) {
          const { resolve: i } = this.pendingMessages.get(o.id);
          this.pendingMessages.delete(o.id), i(o.payload);
          return;
        }
        switch (o.type) {
          case "LOCATION_UPDATE": {
            const i = o.payload;
            this.handleLocalLocationUpdate(i.location);
            break;
          }
          case "ERROR": {
            console.error("[KalmanBackend] Worker error:", o.payload);
            break;
          }
        }
      }, this.worker.onerror = (t) => {
        console.error("[KalmanBackend] Worker error:", t);
      });
    }
    async handleLocalLocationUpdate(t) {
      if (this.coordinateTransformer) try {
        const o = await this.coordinateTransformer.localToGeographic({
          x: t.x,
          y: t.y
        }), i = new ko(o.latitude, o.longitude, t.accuracy);
        this.handleLocationUpdate(i);
      } catch (o) {
        console.error("[KalmanBackend] Error converting local to geographic:", o);
      }
    }
    async convertToLocalGPS(t) {
      if (!this.coordinateTransformer) throw new Error("Coordinate transformer not initialized");
      const o = await this.coordinateTransformer.geographicToLocal({
        longitude: t.latitude,
        latitude: t.longitude
      });
      let i, n;
      if (t.speed !== void 0 && t.speed !== null && t.heading !== void 0 && t.heading !== null) {
        const s = t.heading * Math.PI / 180;
        i = t.speed * Math.sin(s), n = t.speed * Math.cos(s);
      }
      return {
        x: o.x,
        y: o.y,
        accuracy: t.accuracy,
        timestamp: t.timestamp,
        speedX: i,
        speedY: n
      };
    }
    async initialize() {
      if (this.isInitialized) return B(void 0);
      try {
        const t = Xs();
        if (t.isErr()) return C(new xe("Platform services not available", "BACKEND_NOT_AVAILABLE", t.error));
        const o = t.value.getGeolocationProvider();
        if (!o) return C(new xe("Geolocation provider not available", "BACKEND_NOT_AVAILABLE"));
        this.provider = o;
        const i = t.value.getIMU();
        i.isOk() && (this.imuProvider = i.value);
        const n = await this.provider.getCurrentPosition();
        if (n.isErr()) return C(new xe("Failed to get the initial geolocation", "UPDATE_SERVICE_ERROR", n.error));
        this.coordinateTransformer = new Mp(), this.coordinateTransformer.setReferencePoint({
          longitude: n.value.coords.longitude,
          latitude: n.value.coords.latitude
        }), this.worker = this.createWorker(), this.setupWorkerHandlers();
        const s = {
          initialAccelerationUncertainty: this.config.sigmaAcceleration,
          initialPositionUncertainty: this.config.initialPositionUncertainty,
          initialVelocityUncertainty: this.config.initialVelocityUncertainty,
          gpsSpeedUncertainty: this.config.gpsSpeedUncertainty,
          debugEnabled: this.config.debugEnabled
        }, l = {
          latitude: n.value.coords.latitude,
          longitude: n.value.coords.longitude,
          accuracy: n.value.coords.accuracy,
          timestamp: performance.now(),
          speed: n.value.coords.speed ?? void 0,
          heading: n.value.coords.heading ?? void 0
        }, h = await this.convertToLocalGPS(l), d = {
          config: s,
          initialGPSReading: h,
          debugEnabled: this.config.debugEnabled
        }, g = await this.sendMessage("INIT", d);
        return g.success ? (this.isInitialized = true, B(void 0)) : C(new xe(g.error || "Failed to initialize Kalman filter", "UPDATE_SERVICE_ERROR"));
      } catch (t) {
        return C(new xe("Exception during Kalman backend initialization", "UPDATE_SERVICE_ERROR", t));
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
      if (!this.provider || !this.worker) return C(new xe("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        this.userCallback = t, this.imuProvider && this.startIMUMonitoring();
        const o = await this.provider.watchPosition((i) => {
          const n = {
            latitude: i.coords.latitude,
            longitude: i.coords.longitude,
            accuracy: i.coords.accuracy,
            timestamp: performance.now(),
            speed: i.coords.speed ?? void 0,
            heading: i.coords.heading ?? void 0
          };
          this.processGPSReading(n);
        }, {
          highFrequency: true
        });
        return o.isErr() ? C(new xe("Failed to start watching position", "UPDATE_SERVICE_ERROR", o.error)) : (this.watchId = o.value, console.info("[KalmanBackend] Started Kalman-filtered location watching"), B(void 0));
      } catch (o) {
        return C(new xe("Exception during start watching", "UPDATE_SERVICE_ERROR", o));
      }
    }
    startIMUMonitoring() {
      this.imuProvider && (this.imuCallbacks.push((t) => {
        if (!this.worker) return;
        const o = {
          reading: t
        };
        this.sendMessage("PROCESS_IMU", o).catch((i) => {
          console.error("[KalmanBackend] Failed to send IMU reading to worker:", i);
        });
      }), this.imuUpdateInterval = setInterval(async () => {
        try {
          const t = await this.getCombinedIMUReading();
          if (t) for (const o of this.imuCallbacks) try {
            o(t);
          } catch (i) {
            console.error("[KalmanBackend] IMU callback error:", i);
          }
        } catch (t) {
          console.error("[KalmanBackend] Error polling IMU:", t);
        }
      }, this.config.imuUpdateInterval));
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
        return console.error("[KalmanBackend] Error getting combined IMU reading:", t), null;
      }
    }
    async stopWatching() {
      if (!this.provider || !this.worker) return B(void 0);
      try {
        if (this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null), this.imuProvider) {
          const t = this.imuProvider.stopAcceleration();
          t.isErr() && console.warn("[KalmanBackend] Failed to stop acceleration sensor:", t.error);
          const o = this.imuProvider.stopGyroscope();
          o.isErr() && console.warn("[KalmanBackend] Failed to stop gyroscope sensor:", o.error);
        }
        if (this.imuCallbacks = [], this.watchId !== null) {
          const t = this.provider.clearWatch(this.watchId);
          t.isErr() && console.warn("[KalmanBackend] Failed to clear watch:", t.error), this.watchId = null;
        }
        return console.info("[KalmanBackend] Stopped Kalman-filtered location watching"), B(void 0);
      } catch (t) {
        return C(new xe("Exception during stop watching", "UPDATE_SERVICE_ERROR", t));
      }
    }
    async getCurrentPosition() {
      if (!this.provider || !this.worker || !this.coordinateTransformer) return C(new xe("Kalman backend not properly initialized", "BACKEND_NOT_AVAILABLE"));
      try {
        const t = await this.provider.getCurrentPosition();
        if (t.isErr()) return C(new xe("Failed to get current position", "UPDATE_SERVICE_ERROR", t.error));
        const o = t.value, i = {
          latitude: o.coords.latitude,
          longitude: o.coords.longitude,
          accuracy: o.coords.accuracy,
          timestamp: performance.now(),
          speed: o.coords.speed ?? void 0,
          heading: o.coords.heading ?? void 0
        }, s = {
          reading: await this.convertToLocalGPS(i)
        };
        await this.sendMessage("PROCESS_GPS", s);
        const l = await this.sendMessage("GET_FILTERED_POSITION");
        if (l.error) return C(new xe(l.error, "UPDATE_SERVICE_ERROR"));
        const h = await this.coordinateTransformer.localToGeographic({
          x: l.x,
          y: l.y
        });
        return B(new ko(h.latitude, h.longitude, l.accuracy));
      } catch (t) {
        return C(new xe("Exception getting current position", "UPDATE_SERVICE_ERROR", t));
      }
    }
    getLastKalmanGain() {
      return null;
    }
    getKalmanState() {
      return this.worker && this.sendMessage("GET_KALMAN_STATE").then((t) => t && typeof t == "object" && "state" in t ? t : null).catch(() => null), null;
    }
    handleLocationUpdate(t) {
      if (this.userCallback) try {
        this.userCallback(t, "kalman");
      } catch (o) {
        console.error("[KalmanBackend] User callback error:", o);
      }
    }
    dispose() {
      this.imuUpdateInterval && (clearInterval(this.imuUpdateInterval), this.imuUpdateInterval = null), this.imuProvider && (this.imuProvider.stopAcceleration(), this.imuProvider.stopGyroscope()), this.watchId !== null && this.provider && (this.provider.clearWatch(this.watchId), this.watchId = null), this.worker && (this.sendMessage("DISPOSE").catch(() => {
      }), this.worker.terminate(), this.worker = null), this.coordinateTransformer && (this.coordinateTransformer.dispose(), this.coordinateTransformer = null), this.isInitialized = false, this.userCallback = null, this.imuCallbacks = [], this.pendingMessages.clear();
    }
  }
  wo = (_b2 = class {
    constructor() {
      __publicField(this, "isInitialized", false);
      __publicField(this, "backendManager");
      __publicField(this, "stateManager");
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      const t = [], o = Pt("geolocationBackend"), i = o === "auto" ? rI() : o === "kalman", n = o === "auto" || o === "gps", s = o === "auto" || o === "ip";
      if (i) {
        const l = pc(), h = l > 0 ? Math.floor(1e3 / l) : 50;
        t.push(new Cb({
          imuUpdateInterval: h,
          sigmaAcceleration: 1,
          initialPositionUncertainty: 20,
          initialVelocityUncertainty: 4,
          gpsSpeedUncertainty: 2,
          debugEnabled: false
        }));
      }
      n && t.push(new fb()), s && t.push(new db()), console.info(`[GeolocationManager] Initializing with backend preference: ${o}, strategies: ${t.map((l) => l.name).join(", ")}`), this.backendManager = new lb(t), this.stateManager = new hb();
    }
    static async getInstance() {
      if (wo.instance || (wo.instance = new wo()), !wo.instance.isInitialized) {
        const t = await wo.instance.initialize();
        if (t.isErr()) return C(t.error);
      }
      return B(wo.instance);
    }
    static getExistingInstance() {
      if (!wo.instance) throw new Error("GeolocationManager not initialized. Call getInstance() first.");
      return wo.instance;
    }
    static reset() {
      wo.instance = null;
    }
    async initialize() {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), B(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with new architecture");
      try {
        this.stateManager.subscribe((i, n) => {
          this.notifyCallbacks(i);
        });
        const t = await this.backendManager.initialise();
        if (t.isErr()) return console.warn("[GeolocationManager] No backend available for location"), C(new $o("No geolocation backend available", "no_backend_available", t.error));
        const o = await this.backendManager.getCurrentPosition();
        return o.isOk() ? (this.stateManager.updateLocation(o.value, this.backendManager.getActiveBackend()), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully"), B(void 0)) : C(new $o("Backend selected fail to obtain geolocation", "backend_error", o.error));
      } catch (t) {
        const o = xr(t, "Failed to initialize geolocation manager");
        return Yi(o, "GeolocationManager.initialize"), C(new $o("Exception during initialization", "initialization_failed", o));
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new $o("Geolocation manager not initialized", "not_initialized");
        return Yi(t, "GeolocationManager.getCurrentLocation"), C(t);
      }
      try {
        const t = await this.backendManager.getCurrentPosition();
        return t.isOk() && this.stateManager.updateLocation(t.value, this.backendManager.getActiveBackend() || "gps"), t;
      } catch (t) {
        const o = xr(t, "Failed to get current location");
        return Yi(o, "GeolocationManager.getCurrentLocation"), C(new $o("Failed to get current location", "get_location_failed", o));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const o = new $o("Geolocation manager not initialized", "not_initialized");
        return Yi(o, "GeolocationManager.startLocationUpdates"), C(o);
      }
      console.info("[GeolocationManager] Starting location updates");
      try {
        const o = this.nextCallbackId++;
        this.locationUpdateCallbacks.set(o, t);
        const i = await this.backendManager.startWatching((n, s) => {
          this.stateManager.updateLocation(n, s), this.notifyCallbacks(n);
        });
        return i.isErr() ? (this.locationUpdateCallbacks.delete(o), C(i.error)) : (console.info(`[GeolocationManager] Location updates started with handler ${o}`), B(o));
      } catch (o) {
        const i = xr(o, "Failed to start location updates");
        return Yi(i, "GeolocationManager.startLocationUpdates"), C(new $o("Failed to start location updates", "start_updates_failed", i));
      }
    }
    async stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const o = new $o("Geolocation manager not initialized", "not_initialized");
        return Yi(o, "GeolocationManager.stopLocationUpdates"), C(o);
      }
      console.info("[GeolocationManager] Stopping location updates");
      try {
        if (this.locationUpdateCallbacks.delete(t), this.locationUpdateCallbacks.size === 0) {
          const o = await this.backendManager.stopWatching();
          if (o.isErr()) return C(o.error);
        }
        return console.info(`[GeolocationManager] Location updates stopped for handler ${t}`), B(void 0);
      } catch (o) {
        const i = xr(o, "Failed to stop location updates");
        return Yi(i, "GeolocationManager.stopLocationUpdates"), C(new $o("Failed to stop location updates", "stop_updates_failed", i));
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
      return t || (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new ko(0, 0));
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
      return Pt("geolocationCorrection") ? Pp(t) : t;
    }
    notifyCallbacks(t) {
      const o = this.applyGeolocationCorrection(t), i = hf(o);
      for (const n of this.locationUpdateCallbacks.values()) try {
        n(i);
      } catch (s) {
        console.error("[GeolocationManager] Callback error:", s);
      }
    }
    async refreshBackend() {
      return B(void 0);
    }
  }, __publicField(_b2, "instance", null), _b2);
  let Fp;
  const wa = (e) => Fp = e, _p = /* @__PURE__ */ Symbol();
  function _c(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Er;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Er || (Er = {}));
  function Up() {
    const e = ud(true), t = e.run(() => Kt({}));
    let o = [], i = [];
    const n = ul({
      install(s) {
        wa(n), n._a = s, s.provide(_p, n), s.config.globalProperties.$pinia = n, i.forEach((l) => o.push(l)), i = [];
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
  const kp = () => {
  };
  function Uh(e, t, o, i = kp) {
    e.add(t);
    const n = () => {
      e.delete(t) && i();
    };
    return !o && hd() && PS(n), n;
  }
  function pn(e, ...t) {
    e.forEach((o) => {
      o(...t);
    });
  }
  const Db = (e) => e(), kh = /* @__PURE__ */ Symbol(), ic = /* @__PURE__ */ Symbol();
  function Uc(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((o, i) => e.set(i, o)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const o in t) {
      if (!t.hasOwnProperty(o)) continue;
      const i = t[o], n = e[o];
      _c(n) && _c(i) && e.hasOwnProperty(o) && !ft(i) && !ii(i) ? e[o] = Uc(n, i) : e[o] = i;
    }
    return e;
  }
  const Hb = /* @__PURE__ */ Symbol();
  function Mb(e) {
    return !_c(e) || !Object.prototype.hasOwnProperty.call(e, Hb);
  }
  const { assign: Oi } = Object;
  function Pb(e) {
    return !!(ft(e) && e.effect);
  }
  function Fb(e, t, o, i) {
    const { state: n, actions: s, getters: l } = t, h = o.state.value[e];
    let d;
    function g() {
      h || (o.state.value[e] = n ? n() : {});
      const m = sA(o.state.value[e]);
      return Oi(m, s, Object.keys(l || {}).reduce((R, N) => (R[N] = ul(Ol(() => {
        wa(o);
        const A = o._s.get(e);
        return l[N].call(A, A);
      })), R), {}));
    }
    return d = Wp(e, g, t, o, i, true), d;
  }
  function Wp(e, t, o = {}, i, n, s) {
    let l;
    const h = Oi({
      actions: {}
    }, o), d = {
      deep: true
    };
    let g, m, R = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set(), A;
    const M = i.state.value[e];
    !s && !M && (i.state.value[e] = {}), Kt({});
    let D;
    function ne(de) {
      let ie;
      g = m = false, typeof de == "function" ? (de(i.state.value[e]), ie = {
        type: Er.patchFunction,
        storeId: e,
        events: A
      }) : (Uc(i.state.value[e], de), ie = {
        type: Er.patchObject,
        payload: de,
        storeId: e,
        events: A
      });
      const Te = D = /* @__PURE__ */ Symbol();
      Cd().then(() => {
        D === Te && (g = true);
      }), m = true, pn(R, ie, i.state.value[e]);
    }
    const ee = s ? function() {
      const { state: ie } = o, Te = ie ? ie() : {};
      this.$patch((Ce) => {
        Oi(Ce, Te);
      });
    } : kp;
    function Z() {
      l.stop(), R.clear(), N.clear(), i._s.delete(e);
    }
    const Y = (de, ie = "") => {
      if (kh in de) return de[ic] = ie, de;
      const Te = function() {
        wa(i);
        const Ce = Array.from(arguments), pe = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set();
        function It(He) {
          pe.add(He);
        }
        function oo(He) {
          Be.add(He);
        }
        pn(N, {
          args: Ce,
          name: Te[ic],
          store: re,
          after: It,
          onError: oo
        });
        let Je;
        try {
          Je = de.apply(this && this.$id === e ? this : re, Ce);
        } catch (He) {
          throw pn(Be, He), He;
        }
        return Je instanceof Promise ? Je.then((He) => (pn(pe, He), He)).catch((He) => (pn(Be, He), Promise.reject(He))) : (pn(pe, Je), Je);
      };
      return Te[kh] = true, Te[ic] = ie, Te;
    }, _ = {
      _p: i,
      $id: e,
      $onAction: Uh.bind(null, N),
      $patch: ne,
      $reset: ee,
      $subscribe(de, ie = {}) {
        const Te = Uh(R, de, ie.detached, () => Ce()), Ce = l.run(() => yn(() => i.state.value[e], (pe) => {
          (ie.flush === "sync" ? m : g) && de({
            storeId: e,
            type: Er.direct,
            events: A
          }, pe);
        }, Oi({}, d, ie)));
        return Te;
      },
      $dispose: Z
    }, re = ha(_);
    i._s.set(e, re);
    const se = (i._a && i._a.runWithContext || Db)(() => i._e.run(() => (l = ud()).run(() => t({
      action: Y
    }))));
    for (const de in se) {
      const ie = se[de];
      if (ft(ie) && !Pb(ie) || ii(ie)) s || (M && Mb(ie) && (ft(ie) ? ie.value = M[de] : Uc(ie, M[de])), i.state.value[e][de] = ie);
      else if (typeof ie == "function") {
        const Te = Y(ie, de);
        se[de] = Te, h.actions[de] = ie;
      }
    }
    return Oi(re, se), Oi(Ue(re), se), Object.defineProperty(re, "$state", {
      get: () => i.state.value[e],
      set: (de) => {
        ne((ie) => {
          Oi(ie, de);
        });
      }
    }), i._p.forEach((de) => {
      Oi(re, l.run(() => de({
        store: re,
        app: i._a,
        pinia: i,
        options: h
      })));
    }), M && s && o.hydrate && o.hydrate(re.$state, M), g = true, m = true, re;
  }
  _v = function(e, t, o) {
    let i;
    const n = typeof t == "function";
    i = n ? o : t;
    function s(l, h) {
      const d = TA();
      return l = l || (d ? fr(_p, null) : null), l && wa(l), l = Fp, l._s.has(e) || (n ? Wp(e, t, i, l) : Fb(e, i, l)), l._s.get(e);
    }
    return s.$id = e, s;
  };
  var _b = [
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
      id: "vue-i18n",
      name: "vue-i18n",
      description: "Internationalization plugin for Vue.js",
      url: "git+https://github.com/intlify/vue-i18n.git",
      homepage: "https://github.com/intlify/vue-i18n/tree/master/packages/vue-i18n#readme",
      licenseType: "MIT",
      license: `The MIT License (MIT)

Copyright (c) 2020 kazuya kawaguchi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
  let Wh, kc, Ub, kb, ns, Wb, Gb, Bb, jb, Yb, xb, zb, $b, Vb, Zb, qb, Kb, Jb, Xb, Qb, ev, tv, iv, wl;
  Wh = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a3;
        const e = Ap((await oc(async () => {
          const { default: o } = await import("./App-BmEGD631.js");
          return {
            default: o
          };
        }, __vite__mapDeps([0,1,2,3,4]), import.meta.url)).default);
        e.use(Up()), e.use((await oc(async () => {
          const { default: o } = await import("./index-kO1JytUv.js");
          return {
            default: o
          };
        }, __vite__mapDeps([5,2,1,6]), import.meta.url)).default), e.use((await oc(async () => {
          const { i18n: o } = await import("./index-C2LOrOV4.js");
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
        await Xf();
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
          const t = async (d, g) => RI() ? false : window.permissionConfirm ? window.permissionConfirm(g) : false, o = await Si.init({
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
            const d = l.value;
            (await d.init()).isErr() ? console.warn("[Platform] DeviceOrientation not supported on this platform") : await d.start();
          }
          const h = i.getIMU();
          if (h.isOk()) {
            const d = h.value;
            (await d.init()).isErr() ? console.warn("[Platform] IMU not supported on this platform") : (await d.startAcceleration({
              frequency: pc(),
              normalizeToENU: true
            }), await d.startGyroscope({
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
          e = du();
        } catch {
        }
        try {
          if (!Xs()) throw new Error("Platform services not initialized");
          e && console.time("Geolocation service initialise");
          const o = await wo.getInstance();
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
  Uv = cb;
  kv = _b;
  kc = {
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
  Ub = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && kc[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  kb = Ub();
  ns = (e) => kc[kb][e] || kc.en[e] || e;
  Wb = {
    class: "splash-container"
  };
  Gb = {
    class: "splash-content"
  };
  Bb = {
    key: 0,
    class: "loading-section"
  };
  jb = {
    class: "progress-container"
  };
  Yb = {
    class: "progress-bar"
  };
  xb = {
    class: "progress-text"
  };
  zb = {
    class: "loading-details"
  };
  $b = {
    class: "current-module"
  };
  Vb = {
    key: 1,
    class: "error-section"
  };
  Zb = {
    class: "error-message"
  };
  qb = {
    key: 0
  };
  Kb = {
    key: 1
  };
  Jb = {
    key: 2,
    class: "timeout-section"
  };
  Xb = {
    key: 3,
    class: "permission-section"
  };
  Qb = {
    class: "permission-message"
  };
  ev = {
    class: "permission-buttons"
  };
  tv = AA({
    __name: "SplashScreen",
    setup(e) {
      const t = Kt(0), o = Kt(""), i = Kt(""), n = Kt(0), s = Kt(0), l = Kt(false), h = Kt(false), d = Kt(""), g = Kt(false), m = Kt("");
      let R = null;
      const N = Kt("light"), A = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? N.value = "dark" : N.value = "light";
        } catch {
          N.value = "light";
        }
      }, M = () => {
        N.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", N.value);
      }, D = Ol(() => Math.round(t.value / 100 * 100)), ne = {
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
          console.error(se), o.value = String(se), d.value = String(se);
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
          o.value = `Failed to load ${ge}`, d.value = se.message;
        },
        onOverallProgress: (ge, se) => {
          n.value = se, s.value = ge, t.value = Math.min(100, ge / se * 100);
        }
      }, Z = () => {
        window.location.reload();
      }, Y = (ge) => (m.value = ns(ge), g.value = true, new Promise((se) => {
        R = (de) => {
          g.value = false, se(de);
        };
      })), _ = () => {
        R == null ? void 0 : R(true);
      }, re = () => {
        R == null ? void 0 : R(false);
      };
      return window.permissionConfirm = Y, Pr(() => {
        var _a3;
        A(), M(), (_a3 = document.getElementById("pre-splash")) == null ? void 0 : _a3.remove();
        const ge = (se, de = /* @__PURE__ */ new Set()) => {
          if (de.has(se)) return 0;
          de.add(se);
          const ie = Wh.find((Ce) => Ce.name === se);
          if (!ie) return 0;
          let Te = 1;
          if (ie.dependencies) for (const Ce of ie.dependencies) Te += ge(Ce, de);
          return Te;
        };
        n.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), Np(Wh, "trackmaker", 3e4, {
          logger: ne,
          progressReporter: ee,
          printLog: true
        }).then(() => {
          o.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((se) => {
          const de = String(se.toString());
          if (de.toLowerCase().includes("timeout")) {
            const ie = de.split("Trackback").map((Te) => Te.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(ie.map((Te) => ({
              Trackback: Te
            })), [
              "Trackback"
            ]), h.value = true;
          } else d.value = de, l.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(se);
        });
      }), (ge, se) => (To(), zo("div", Wb, [
        je("div", Gb, [
          se[8] || (se[8] = je("div", {
            class: "logo-section"
          }, [
            je("div", {
              class: "app-logo"
            }, [
              je("img", {
                src: ib,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            je("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !l.value && !h.value ? (To(), zo("div", Bb, [
            je("div", jb, [
              je("div", Yb, [
                je("div", {
                  class: "progress-fill",
                  style: ca({
                    width: `${D.value}%`
                  })
                }, null, 4)
              ]),
              je("div", xb, Vo(D.value) + "% ", 1)
            ]),
            je("div", zb, [
              je("p", $b, " Loading: " + Vo(i.value), 1)
            ]),
            se[0] || (se[0] = je("div", {
              class: "loading-animation"
            }, [
              je("div", {
                class: "spinner"
              })
            ], -1))
          ])) : ts("", true),
          l.value ? (To(), zo("div", Vb, [
            se[1] || (se[1] = je("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            se[2] || (se[2] = je("h2", null, "Loading Error", -1)),
            je("div", Zb, [
              (To(true), zo(Dt, null, UA((d.value ?? "").split(`
`), (de) => (To(), zo("div", {
                key: de,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                de.toLocaleLowerCase().includes("trackback") ? (To(), zo("strong", qb, Vo(de), 1)) : (To(), zo("span", Kb, Vo(de), 1))
              ]))), 128))
            ]),
            je("button", {
              class: "retry-button",
              onClick: Z
            }, " Retry ")
          ])) : ts("", true),
          h.value ? (To(), zo("div", Jb, [
            se[3] || (se[3] = je("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            se[4] || (se[4] = je("h2", null, "Connection Timeout", -1)),
            se[5] || (se[5] = je("p", null, "Unable to load required modules within the timeout period.", -1)),
            se[6] || (se[6] = je("p", null, "Please check your internet connection and try again.", -1)),
            je("button", {
              class: "retry-button",
              onClick: Z
            }, " Retry ")
          ])) : ts("", true),
          g.value ? (To(), zo("div", Xb, [
            se[7] || (se[7] = je("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            je("h2", null, Vo(Rn(ns)("permission.title")), 1),
            je("p", Qb, Vo(m.value), 1),
            je("div", ev, [
              je("button", {
                class: "permission-button deny",
                onClick: re
              }, Vo(Rn(ns)("permission.deny")), 1),
              je("button", {
                class: "permission-button allow",
                onClick: _
              }, Vo(Rn(ns)("permission.allow")), 1)
            ])
          ])) : ts("", true)
        ])
      ]));
    }
  });
  ov = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [i, n] of t) o[i] = n;
    return o;
  };
  iv = ov(tv, [
    [
      "__scopeId",
      "data-v-d9d60867"
    ]
  ]);
  wl = Ap(iv);
  wl.use(Up());
  wl.mount("#splash");
  window.splashScreen = wl;
})();
export {
  Xs as $,
  Hv as A,
  yn as B,
  Cv as C,
  Cc as D,
  Sv as E,
  Dt as F,
  hI as G,
  qs as H,
  Wo as I,
  Lv as J,
  yv as K,
  ki as L,
  bA as M,
  vA as N,
  Dv as O,
  Cd as P,
  Iv as Q,
  Ht as R,
  ci as S,
  Rv as T,
  sA as U,
  ca as V,
  Mv as W,
  ft as X,
  ul as Y,
  tA as Z,
  ov as _,
  __tla,
  je as a,
  TA as a$,
  Yi as a0,
  xr as a1,
  bv as a2,
  vv as a3,
  en as a4,
  wv as a5,
  Nv as a6,
  UA as a7,
  Pv as a8,
  mv as a9,
  Xm as aA,
  tg as aB,
  ig as aC,
  Jm as aD,
  qh as aE,
  Jh as aF,
  jg as aG,
  Bn as aH,
  cu as aI,
  BT as aJ,
  Ko as aK,
  ef as aL,
  jn as aM,
  Wg as aN,
  Vg as aO,
  Kh as aP,
  lg as aQ,
  PT as aR,
  tE as aS,
  ST as aT,
  Zh as aU,
  wE as aV,
  eA as aW,
  _n as aX,
  Ea as aY,
  hd as aZ,
  PS as a_,
  Fv as aa,
  Pa as ab,
  Zi as ac,
  ht as ad,
  dv as ae,
  hf as af,
  Zs as ag,
  Ue as ah,
  Av as ai,
  fv as aj,
  cv as ak,
  hv as al,
  uv as am,
  sv as an,
  lv as ao,
  av as ap,
  Uv as aq,
  kv as ar,
  rv as as,
  wo as at,
  oc as au,
  RI as av,
  Fi as aw,
  Pi as ax,
  Cn as ay,
  Zl as az,
  Kt as b,
  Tv as b0,
  ni as b1,
  nv as b2,
  Wa as b3,
  Ec as b4,
  Gn as b5,
  Dr as b6,
  B as b7,
  C as b8,
  Ss as b9,
  Zo as ba,
  Zr as bb,
  Oc as bc,
  gv as bd,
  pv as be,
  ud as bf,
  zo as c,
  AA as d,
  CA as e,
  pl as f,
  ha as g,
  wN as h,
  fr as i,
  Ol as j,
  Pr as k,
  ml as l,
  dN as m,
  nl as n,
  To as o,
  gA as p,
  _v as q,
  Sc as r,
  ts as s,
  Ev as t,
  Bt as u,
  Rn as v,
  Ov as w,
  mA as x,
  fN as y,
  Vo as z
};
