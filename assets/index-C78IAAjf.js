const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-uAkCZMRG.js","./vue-router-BNQB2Ws5.js","./vue-i18n-CLQtY7Fy.js","./settings-store-D9OhlzQl.js","./light-Cs_wBr-w.js","./light-DQpWJLfV.js","./light-CSUG1-qx.js","./light-BPKr394F.js","./Tooltip-DLb3jOEK.js","./text-DuK6zv_f.js","./light-DlAJCh0V.js","./index-CaX32A_j.js","./omit-CncMXXUD.js","./_commonjsHelpers-gnU0ypJ3.js","./App-FitnL7gO.css","./index-sk8ZSphq.js","./index-DrWGho-a.css","./index-DpRi9cKa.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Uw, Zn, Mw, Mi, Rw, ui, Oe, Sf, Ef, ol, xw, _w, Gw, Nw, Lw, Aw, Ny, Iw, Cw, kw, Ow, Zf, Fw, _r, $w, ls, Ei, ww, de, jw, Rg, Zt, Rt, Hw, ge, vu, Ww, Bw, _g, su, tu, Lm, oy, pt, sy, kh, ty, Nn, Dr, kc, Te, Bf, Wf, Dc, tf, ld, Ew, bt, No, vs, Dh, Oa, op, sp, ou, nu, Ts, ru, Bp, nt, fr, lu, Ke, Yg, fm, kg, Be, Dt, jf, Yf, hs, Nr, Wd, fo, ws, Ro, ps, Md, ns, Je, cd, On, Xc, _e, Sw, Dw, Zc, Pw, oi, Hf, xd;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
    new MutationObserver((r) => {
      for (const i of r) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(r) {
      const i = {};
      return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function o(r) {
      if (r.ep) return;
      r.ep = true;
      const i = n(r);
      fetch(r.href, i);
    }
  })();
  function Qi(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const ee = {}, En = [], Ze = () => {
  }, Oc = () => false, Sr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zi = (e) => e.startsWith("onUpdate:"), be = Object.assign, es = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, ju = Object.prototype.hasOwnProperty, te = (e, t) => ju.call(e, t), W = Array.isArray, Sn = (e) => Ao(e) === "[object Map]", Ac = (e) => Ao(e) === "[object Set]", Gu = (e) => Ao(e) === "[object RegExp]", V = (e) => typeof e == "function", pe = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", _c = (e) => (le(e) || V(e)) && V(e.then) && V(e.catch), Rc = Object.prototype.toString, Ao = (e) => Rc.call(e), Wu = (e) => Ao(e).slice(8, -1), Cc = (e) => Ao(e) === "[object Object]", ts = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = Qi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ir = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Bu = /-(\w)/g, je = Ir((e) => e.replace(Bu, (t, n) => n ? n.toUpperCase() : "")), Vu = /\B([A-Z])/g, Pt = Ir((e) => e.replace(Vu, "-$1").toLowerCase()), Or = Ir((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kr = Ir((e) => e ? `on${Or(e)}` : ""), He = (e, t) => !Object.is(e, t), io = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, Nc = (e, t, n, o = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: o,
      value: n
    });
  }, Yu = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, qu = (e) => {
    const t = pe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let $s;
  const Ar = () => $s || ($s = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  _r = function(e) {
    if (W(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const o = e[n], r = pe(o) ? Xu(o) : _r(o);
        if (r) for (const i in r) t[i] = r[i];
      }
      return t;
    } else if (pe(e) || le(e)) return e;
  };
  const Ku = /;(?![^(]*\))/g, zu = /:([^]+)/, Ju = /\/\*[^]*?\*\//g;
  function Xu(e) {
    const t = {};
    return e.replace(Ju, "").split(Ku).forEach((n) => {
      if (n) {
        const o = n.split(zu);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }), t;
  }
  ns = function(e) {
    let t = "";
    if (pe(e)) t = e;
    else if (W(e)) for (let n = 0; n < e.length; n++) {
      const o = ns(e[n]);
      o && (t += o + " ");
    }
    else if (le(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const Qu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zu = Qi(Qu);
  function Pc(e) {
    return !!e || e === "";
  }
  let Lc, xc, zr;
  Lc = (e) => !!(e && e.__v_isRef === true);
  Zn = (e) => pe(e) ? e : e == null ? "" : W(e) || le(e) && (e.toString === Rc || !V(e.toString)) ? Lc(e) ? Zn(e.value) : JSON.stringify(e, xc, 2) : String(e);
  xc = (e, t) => Lc(t) ? xc(e, t.value) : Sn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [o, r], i) => (n[zr(o, i) + " =>"] = r, n), {})
  } : Ac(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => zr(n))
  } : Nt(t) ? zr(t) : le(t) && !W(t) && !Cc(t) ? String(t) : t;
  zr = (e, t = "") => {
    var n;
    return Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function ef(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Se;
  class Mc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Se, !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const n = Se;
        try {
          return Se = this, t();
        } finally {
          Se = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Se, Se = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Se = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, o;
        for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  kc = function(e) {
    return new Mc(e);
  };
  Dc = function() {
    return Se;
  };
  tf = function(e, t = false) {
    Se && Se.cleanups.push(e);
  };
  let ce;
  const Jr = /* @__PURE__ */ new WeakSet();
  class Hc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Se && Se.active && Se.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Jr.has(this) && (Jr.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $c(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Us(this), Uc(this);
      const t = ce, n = et;
      ce = this, et = true;
      try {
        return this.fn();
      } finally {
        jc(this), ce = t, et = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) is(t);
        this.deps = this.depsTail = void 0, Us(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Jr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Ai(this) && this.run();
    }
    get dirty() {
      return Ai(this);
    }
  }
  let Fc = 0, so, ao;
  function $c(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = ao, ao = e;
      return;
    }
    e.next = so, so = e;
  }
  function os() {
    Fc++;
  }
  function rs() {
    if (--Fc > 0) return;
    if (ao) {
      let t = ao;
      for (ao = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; so; ) {
      let t = so;
      for (so = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function Uc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function jc(e) {
    let t, n = e.depsTail, o = n;
    for (; o; ) {
      const r = o.prevDep;
      o.version === -1 ? (o === n && (n = r), is(o), nf(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
    }
    e.deps = t, e.depsTail = n;
  }
  function Ai(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Gc(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Gc(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bo) || (e.globalVersion = bo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ai(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = ce, o = et;
    ce = e, et = true;
    try {
      Uc(e);
      const r = e.fn(e._value);
      (t.version === 0 || He(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
    } catch (r) {
      throw t.version++, r;
    } finally {
      ce = n, et = o, jc(e), e.flags &= -3;
    }
  }
  function is(e, t = false) {
    const { dep: n, prevSub: o, nextSub: r } = e;
    if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), n.subs === e && (n.subs = o, !o && n.computed)) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep) is(i, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function nf(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let et = true;
  const Wc = [];
  function At() {
    Wc.push(et), et = false;
  }
  function _t() {
    const e = Wc.pop();
    et = e === void 0 ? true : e;
  }
  function Us(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = ce;
      ce = void 0;
      try {
        t();
      } finally {
        ce = n;
      }
    }
  }
  let bo = 0;
  class of {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Rr {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!ce || !et || ce === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== ce) n = this.activeLink = new of(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, Bc(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const o = n.nextDep;
        o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = ce.depsTail, n.nextDep = void 0, ce.depsTail.nextDep = n, ce.depsTail = n, ce.deps === n && (ce.deps = o);
      }
      return n;
    }
    trigger(t) {
      this.version++, bo++, this.notify(t);
    }
    notify(t) {
      os();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        rs();
      }
    }
  }
  function Bc(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let o = t.deps; o; o = o.nextDep) Bc(o);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Qo = /* @__PURE__ */ new WeakMap(), fn = Symbol(""), _i = Symbol(""), yo = Symbol("");
  function Ie(e, t, n) {
    if (et && ce) {
      let o = Qo.get(e);
      o || Qo.set(e, o = /* @__PURE__ */ new Map());
      let r = o.get(n);
      r || (o.set(n, r = new Rr()), r.map = o, r.key = n), r.track();
    }
  }
  function Tt(e, t, n, o, r, i) {
    const s = Qo.get(e);
    if (!s) {
      bo++;
      return;
    }
    const a = (c) => {
      c && c.trigger();
    };
    if (os(), t === "clear") s.forEach(a);
    else {
      const c = W(e), u = c && ts(n);
      if (c && n === "length") {
        const l = Number(o);
        s.forEach((d, p) => {
          (p === "length" || p === yo || !Nt(p) && p >= l) && a(d);
        });
      } else switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(yo)), t) {
        case "add":
          c ? u && a(s.get("length")) : (a(s.get(fn)), Sn(e) && a(s.get(_i)));
          break;
        case "delete":
          c || (a(s.get(fn)), Sn(e) && a(s.get(_i)));
          break;
        case "set":
          Sn(e) && a(s.get(fn));
          break;
      }
    }
    rs();
  }
  function rf(e, t) {
    const n = Qo.get(e);
    return n && n.get(t);
  }
  function bn(e) {
    const t = Z(e);
    return t === e ? t : (Ie(t, "iterate", yo), Ye(e) ? t : t.map(ve));
  }
  function Cr(e) {
    return Ie(e = Z(e), "iterate", yo), e;
  }
  const sf = {
    __proto__: null,
    [Symbol.iterator]() {
      return Xr(this, Symbol.iterator, ve);
    },
    concat(...e) {
      return bn(this).concat(...e.map((t) => W(t) ? bn(t) : t));
    },
    entries() {
      return Xr(this, "entries", (e) => (e[1] = ve(e[1]), e));
    },
    every(e, t) {
      return yt(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return yt(this, "filter", e, t, (n) => n.map(ve), arguments);
    },
    find(e, t) {
      return yt(this, "find", e, t, ve, arguments);
    },
    findIndex(e, t) {
      return yt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return yt(this, "findLast", e, t, ve, arguments);
    },
    findLastIndex(e, t) {
      return yt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return yt(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Qr(this, "includes", e);
    },
    indexOf(...e) {
      return Qr(this, "indexOf", e);
    },
    join(e) {
      return bn(this).join(e);
    },
    lastIndexOf(...e) {
      return Qr(this, "lastIndexOf", e);
    },
    map(e, t) {
      return yt(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Gn(this, "pop");
    },
    push(...e) {
      return Gn(this, "push", e);
    },
    reduce(e, ...t) {
      return js(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return js(this, "reduceRight", e, t);
    },
    shift() {
      return Gn(this, "shift");
    },
    some(e, t) {
      return yt(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Gn(this, "splice", e);
    },
    toReversed() {
      return bn(this).toReversed();
    },
    toSorted(e) {
      return bn(this).toSorted(e);
    },
    toSpliced(...e) {
      return bn(this).toSpliced(...e);
    },
    unshift(...e) {
      return Gn(this, "unshift", e);
    },
    values() {
      return Xr(this, "values", ve);
    }
  };
  function Xr(e, t, n) {
    const o = Cr(e), r = o[t]();
    return o !== e && !Ye(e) && (r._next = r.next, r.next = () => {
      const i = r._next();
      return i.value && (i.value = n(i.value)), i;
    }), r;
  }
  const af = Array.prototype;
  function yt(e, t, n, o, r, i) {
    const s = Cr(e), a = s !== e && !Ye(e), c = s[t];
    if (c !== af[t]) {
      const d = c.apply(e, i);
      return a ? ve(d) : d;
    }
    let u = n;
    s !== e && (a ? u = function(d, p) {
      return n.call(this, ve(d), p, e);
    } : n.length > 2 && (u = function(d, p) {
      return n.call(this, d, p, e);
    }));
    const l = c.call(s, u, o);
    return a && r ? r(l) : l;
  }
  function js(e, t, n, o) {
    const r = Cr(e);
    let i = n;
    return r !== e && (Ye(e) ? n.length > 3 && (i = function(s, a, c) {
      return n.call(this, s, a, c, e);
    }) : i = function(s, a, c) {
      return n.call(this, s, ve(a), c, e);
    }), r[t](i, ...o);
  }
  function Qr(e, t, n) {
    const o = Z(e);
    Ie(o, "iterate", yo);
    const r = o[t](...n);
    return (r === -1 || r === false) && cs(n[0]) ? (n[0] = Z(n[0]), o[t](...n)) : r;
  }
  function Gn(e, t, n = []) {
    At(), os();
    const o = Z(e)[t].apply(e, n);
    return rs(), _t(), o;
  }
  const cf = Qi("__proto__,__v_isRef,__isVue"), Vc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt));
  function lf(e) {
    Nt(e) || (e = String(e));
    const t = Z(this);
    return Ie(t, "has", e), t.hasOwnProperty(e);
  }
  class Yc {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, o) {
      if (n === "__v_skip") return t.__v_skip;
      const r = this._isReadonly, i = this._isShallow;
      if (n === "__v_isReactive") return !r;
      if (n === "__v_isReadonly") return r;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw") return o === (r ? i ? wf : Jc : i ? zc : Kc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
      const s = W(t);
      if (!r) {
        let c;
        if (s && (c = sf[n])) return c;
        if (n === "hasOwnProperty") return lf;
      }
      const a = Reflect.get(t, n, ge(t) ? t : o);
      return (Nt(n) ? Vc.has(n) : cf(n)) || (r || Ie(t, "get", n), i) ? a : ge(a) ? s && ts(n) ? a : a.value : le(a) ? r ? Xc(a) : Nr(a) : a;
    }
  }
  class qc extends Yc {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, o, r) {
      let i = t[n];
      if (!this._isShallow) {
        const c = Xt(i);
        if (!Ye(o) && !Xt(o) && (i = Z(i), o = Z(o)), !W(t) && ge(i) && !ge(o)) return c || (i.value = o), true;
      }
      const s = W(t) && ts(n) ? Number(n) < t.length : te(t, n), a = Reflect.set(t, n, o, ge(t) ? t : r);
      return t === Z(r) && (s ? He(o, i) && Tt(t, "set", n, o) : Tt(t, "add", n, o)), a;
    }
    deleteProperty(t, n) {
      const o = te(t, n);
      t[n];
      const r = Reflect.deleteProperty(t, n);
      return r && o && Tt(t, "delete", n, void 0), r;
    }
    has(t, n) {
      const o = Reflect.has(t, n);
      return (!Nt(n) || !Vc.has(n)) && Ie(t, "has", n), o;
    }
    ownKeys(t) {
      return Ie(t, "iterate", W(t) ? "length" : fn), Reflect.ownKeys(t);
    }
  }
  class uf extends Yc {
    constructor(t = false) {
      super(true, t);
    }
    set(t, n) {
      return true;
    }
    deleteProperty(t, n) {
      return true;
    }
  }
  const ff = new qc(), df = new uf(), hf = new qc(true);
  const Ri = (e) => e, xo = (e) => Reflect.getPrototypeOf(e);
  function pf(e, t, n) {
    return function(...o) {
      const r = this.__v_raw, i = Z(r), s = Sn(i), a = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, u = r[e](...o), l = n ? Ri : t ? Zo : ve;
      return !t && Ie(i, "iterate", c ? _i : fn), {
        next() {
          const { value: d, done: p } = u.next();
          return p ? {
            value: d,
            done: p
          } : {
            value: a ? [
              l(d[0]),
              l(d[1])
            ] : l(d),
            done: p
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function Mo(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function gf(e, t) {
    const n = {
      get(r) {
        const i = this.__v_raw, s = Z(i), a = Z(r);
        e || (He(r, a) && Ie(s, "get", r), Ie(s, "get", a));
        const { has: c } = xo(s), u = t ? Ri : e ? Zo : ve;
        if (c.call(s, r)) return u(i.get(r));
        if (c.call(s, a)) return u(i.get(a));
        i !== s && i.get(r);
      },
      get size() {
        const r = this.__v_raw;
        return !e && Ie(Z(r), "iterate", fn), r.size;
      },
      has(r) {
        const i = this.__v_raw, s = Z(i), a = Z(r);
        return e || (He(r, a) && Ie(s, "has", r), Ie(s, "has", a)), r === a ? i.has(r) : i.has(r) || i.has(a);
      },
      forEach(r, i) {
        const s = this, a = s.__v_raw, c = Z(a), u = t ? Ri : e ? Zo : ve;
        return !e && Ie(c, "iterate", fn), a.forEach((l, d) => r.call(i, u(l), u(d), s));
      }
    };
    return be(n, e ? {
      add: Mo("add"),
      set: Mo("set"),
      delete: Mo("delete"),
      clear: Mo("clear")
    } : {
      add(r) {
        !t && !Ye(r) && !Xt(r) && (r = Z(r));
        const i = Z(this);
        return xo(i).has.call(i, r) || (i.add(r), Tt(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Ye(i) && !Xt(i) && (i = Z(i));
        const s = Z(this), { has: a, get: c } = xo(s);
        let u = a.call(s, r);
        u || (r = Z(r), u = a.call(s, r));
        const l = c.call(s, r);
        return s.set(r, i), u ? He(i, l) && Tt(s, "set", r, i) : Tt(s, "add", r, i), this;
      },
      delete(r) {
        const i = Z(this), { has: s, get: a } = xo(i);
        let c = s.call(i, r);
        c || (r = Z(r), c = s.call(i, r)), a && a.call(i, r);
        const u = i.delete(r);
        return c && Tt(i, "delete", r, void 0), u;
      },
      clear() {
        const r = Z(this), i = r.size !== 0, s = r.clear();
        return i && Tt(r, "clear", void 0, void 0), s;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((r) => {
      n[r] = pf(r, e, t);
    }), n;
  }
  function ss(e, t) {
    const n = gf(e, t);
    return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(te(n, r) && r in o ? n : o, r, i);
  }
  const mf = {
    get: ss(false, false)
  }, bf = {
    get: ss(false, true)
  }, yf = {
    get: ss(true, false)
  };
  const Kc = /* @__PURE__ */ new WeakMap(), zc = /* @__PURE__ */ new WeakMap(), Jc = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakMap();
  function vf(e) {
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
  function Tf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : vf(Wu(e));
  }
  Nr = function(e) {
    return Xt(e) ? e : as(e, false, ff, mf, Kc);
  };
  Ef = function(e) {
    return as(e, false, hf, bf, zc);
  };
  Xc = function(e) {
    return as(e, true, df, yf, Jc);
  };
  function as(e, t, n, o, r) {
    if (!le(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = Tf(e);
    if (i === 0) return e;
    const s = r.get(e);
    if (s) return s;
    const a = new Proxy(e, i === 2 ? o : n);
    return r.set(e, a), a;
  }
  function zt(e) {
    return Xt(e) ? zt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Xt(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Ye(e) {
    return !!(e && e.__v_isShallow);
  }
  function cs(e) {
    return e ? !!e.__v_raw : false;
  }
  function Z(e) {
    const t = e && e.__v_raw;
    return t ? Z(t) : e;
  }
  ls = function(e) {
    return !te(e, "__v_skip") && Object.isExtensible(e) && Nc(e, "__v_skip", true), e;
  };
  const ve = (e) => le(e) ? Nr(e) : e, Zo = (e) => le(e) ? Xc(e) : e;
  ge = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Be = function(e) {
    return Qc(e, false);
  };
  Sf = function(e) {
    return Qc(e, true);
  };
  function Qc(e, t) {
    return ge(e) ? e : new If(e, t);
  }
  class If {
    constructor(t, n) {
      this.dep = new Rr(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Z(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, o = this.__v_isShallow || Ye(t) || Xt(t);
      t = o ? t : Z(t), He(t, n) && (this._rawValue = t, this._value = o ? t : ve(t), this.dep.trigger());
    }
  }
  Zc = function(e) {
    return ge(e) ? e.value : e;
  };
  Ew = function(e) {
    return V(e) ? e() : Zc(e);
  };
  const Of = {
    get: (e, t, n) => t === "__v_raw" ? e : Zc(Reflect.get(e, t, n)),
    set: (e, t, n, o) => {
      const r = e[t];
      return ge(r) && !ge(n) ? (r.value = n, true) : Reflect.set(e, t, n, o);
    }
  };
  function el(e) {
    return zt(e) ? e : new Proxy(e, Of);
  }
  class Af {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new Rr(), { get: o, set: r } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = o, this._set = r;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function _f(e) {
    return new Af(e);
  }
  function Rf(e) {
    const t = W(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = tl(e, n);
    return t;
  }
  class Cf {
    constructor(t, n, o) {
      this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = true, this._value = void 0;
    }
    get value() {
      const t = this._object[this._key];
      return this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return rf(Z(this._object), this._key);
    }
  }
  class Nf {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Sw = function(e, t, n) {
    return ge(e) ? e : V(e) ? new Nf(e) : le(e) && arguments.length > 1 ? tl(e, t, n) : Be(e);
  };
  function tl(e, t, n) {
    const o = e[t];
    return ge(o) ? o : new Cf(e, t, n);
  }
  class Pf {
    constructor(t, n, o) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Rr(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && ce !== this) return $c(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Gc(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Lf(e, t, n = false) {
    let o, r;
    return V(e) ? o = e : (o = e.get, r = e.set), new Pf(o, r, n);
  }
  const ko = {}, er = /* @__PURE__ */ new WeakMap();
  let cn;
  function xf(e, t = false, n = cn) {
    if (n) {
      let o = er.get(n);
      o || er.set(n, o = []), o.push(e);
    }
  }
  function Mf(e, t, n = ee) {
    const { immediate: o, deep: r, once: i, scheduler: s, augmentJob: a, call: c } = n, u = (v) => r ? v : Ye(v) || r === false || r === 0 ? Et(v, 1) : Et(v);
    let l, d, p, m, g = false, w = false;
    if (ge(e) ? (d = () => e.value, g = Ye(e)) : zt(e) ? (d = () => u(e), g = true) : W(e) ? (w = true, g = e.some((v) => zt(v) || Ye(v)), d = () => e.map((v) => {
      if (ge(v)) return v.value;
      if (zt(v)) return u(v);
      if (V(v)) return c ? c(v, 2) : v();
    })) : V(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
      if (p) {
        At();
        try {
          p();
        } finally {
          _t();
        }
      }
      const v = cn;
      cn = l;
      try {
        return c ? c(e, 3, [
          m
        ]) : e(m);
      } finally {
        cn = v;
      }
    } : d = Ze, t && r) {
      const v = d, D = r === true ? 1 / 0 : r;
      d = () => Et(v(), D);
    }
    const k = Dc(), A = () => {
      l.stop(), k && k.active && es(k.effects, l);
    };
    if (i && t) {
      const v = t;
      t = (...D) => {
        v(...D), A();
      };
    }
    let S = w ? new Array(e.length).fill(ko) : ko;
    const P = (v) => {
      if (!(!(l.flags & 1) || !l.dirty && !v)) if (t) {
        const D = l.run();
        if (r || g || (w ? D.some((K, z) => He(K, S[z])) : He(D, S))) {
          p && p();
          const K = cn;
          cn = l;
          try {
            const z = [
              D,
              S === ko ? void 0 : w && S[0] === ko ? [] : S,
              m
            ];
            S = D, c ? c(t, 3, z) : t(...z);
          } finally {
            cn = K;
          }
        }
      } else l.run();
    };
    return a && a(P), l = new Hc(d), l.scheduler = s ? () => s(P, false) : P, m = (v) => xf(v, false, l), p = l.onStop = () => {
      const v = er.get(l);
      if (v) {
        if (c) c(v, 4);
        else for (const D of v) D();
        er.delete(l);
      }
    }, t ? o ? P(true) : S = l.run() : s ? s(P.bind(null, true), true) : l.run(), A.pause = l.pause.bind(l), A.resume = l.resume.bind(l), A.stop = A, A;
  }
  function Et(e, t = 1 / 0, n) {
    if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, ge(e)) Et(e.value, t, n);
    else if (W(e)) for (let o = 0; o < e.length; o++) Et(e[o], t, n);
    else if (Ac(e) || Sn(e)) e.forEach((o) => {
      Et(o, t, n);
    });
    else if (Cc(e)) {
      for (const o in e) Et(e[o], t, n);
      for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && Et(e[o], t, n);
    }
    return e;
  }
  function _o(e, t, n, o) {
    try {
      return o ? e(...o) : e();
    } catch (r) {
      Pr(r, t, n);
    }
  }
  function tt(e, t, n, o) {
    if (V(e)) {
      const r = _o(e, t, n, o);
      return r && _c(r) && r.catch((i) => {
        Pr(i, t, n);
      }), r;
    }
    if (W(e)) {
      const r = [];
      for (let i = 0; i < e.length; i++) r.push(tt(e[i], t, n, o));
      return r;
    }
  }
  function Pr(e, t, n, o = true) {
    const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ee;
    if (t) {
      let a = t.parent;
      const c = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; a; ) {
        const l = a.ec;
        if (l) {
          for (let d = 0; d < l.length; d++) if (l[d](e, c, u) === false) return;
        }
        a = a.parent;
      }
      if (i) {
        At(), _o(i, null, 10, [
          e,
          c,
          u
        ]), _t();
        return;
      }
    }
    kf(e, n, r, o, s);
  }
  function kf(e, t, n, o = true, r = false) {
    if (r) throw e;
    console.error(e);
  }
  const Ce = [];
  let ut = -1;
  const In = [];
  let Wt = null, Tn = 0;
  const nl = Promise.resolve();
  let tr = null;
  ol = function(e) {
    const t = tr || nl;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Df(e) {
    let t = ut + 1, n = Ce.length;
    for (; t < n; ) {
      const o = t + n >>> 1, r = Ce[o], i = wo(r);
      i < e || i === e && r.flags & 2 ? t = o + 1 : n = o;
    }
    return t;
  }
  function us(e) {
    if (!(e.flags & 1)) {
      const t = wo(e), n = Ce[Ce.length - 1];
      !n || !(e.flags & 2) && t >= wo(n) ? Ce.push(e) : Ce.splice(Df(t), 0, e), e.flags |= 1, rl();
    }
  }
  function rl() {
    tr || (tr = nl.then(al));
  }
  function il(e) {
    W(e) ? In.push(...e) : Wt && e.id === -1 ? Wt.splice(Tn + 1, 0, e) : e.flags & 1 || (In.push(e), e.flags |= 1), rl();
  }
  function Gs(e, t, n = ut + 1) {
    for (; n < Ce.length; n++) {
      const o = Ce[n];
      if (o && o.flags & 2) {
        if (e && o.id !== e.uid) continue;
        Ce.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
      }
    }
  }
  function sl(e) {
    if (In.length) {
      const t = [
        ...new Set(In)
      ].sort((n, o) => wo(n) - wo(o));
      if (In.length = 0, Wt) {
        Wt.push(...t);
        return;
      }
      for (Wt = t, Tn = 0; Tn < Wt.length; Tn++) {
        const n = Wt[Tn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Wt = null, Tn = 0;
    }
  }
  const wo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function al(e) {
    try {
      for (ut = 0; ut < Ce.length; ut++) {
        const t = Ce[ut];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), _o(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; ut < Ce.length; ut++) {
        const t = Ce[ut];
        t && (t.flags &= -2);
      }
      ut = -1, Ce.length = 0, sl(), tr = null, (Ce.length || In.length) && al();
    }
  }
  let Ee = null, cl = null;
  function nr(e) {
    const t = Ee;
    return Ee = e, cl = e && e.type.__scopeId || null, t;
  }
  Hf = function(e, t = Ee, n) {
    if (!t || e._n) return e;
    const o = (...r) => {
      o._d && ea(-1);
      const i = nr(t);
      let s;
      try {
        s = e(...r);
      } finally {
        nr(i), o._d && ea(1);
      }
      return s;
    };
    return o._n = true, o._c = true, o._d = true, o;
  };
  Iw = function(e, t) {
    if (Ee === null) return e;
    const n = Hr(Ee), o = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
      let [i, s, a, c = ee] = t[r];
      i && (V(i) && (i = {
        mounted: i,
        updated: i
      }), i.deep && Et(s), o.push({
        dir: i,
        instance: n,
        value: s,
        oldValue: void 0,
        arg: a,
        modifiers: c
      }));
    }
    return e;
  };
  function on(e, t, n, o) {
    const r = e.dirs, i = t && t.dirs;
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      i && (a.oldValue = i[s].value);
      let c = a.dir[o];
      c && (At(), tt(c, n, 8, [
        e.el,
        a,
        e,
        t
      ]), _t());
    }
  }
  const ll = Symbol("_vte"), ul = (e) => e.__isTeleport, co = (e) => e && (e.disabled || e.disabled === ""), Ws = (e) => e && (e.defer || e.defer === ""), Bs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Vs = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ci = (e, t) => {
    const n = e && e.to;
    return pe(n) ? t ? t(n) : null : n;
  }, fl = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, o, r, i, s, a, c, u) {
      const { mc: l, pc: d, pbc: p, o: { insert: m, querySelector: g, createText: w, createComment: k } } = u, A = co(t.props);
      let { shapeFlag: S, children: P, dynamicChildren: v } = t;
      if (e == null) {
        const D = t.el = w(""), K = t.anchor = w("");
        m(D, n, o), m(K, n, o);
        const z = (x, j) => {
          S & 16 && (r && r.isCE && (r.ce._teleportTarget = x), l(P, x, j, r, i, s, a, c));
        }, U = () => {
          const x = t.target = Ci(t.props, g), j = dl(x, t, w, m);
          x && (s !== "svg" && Bs(x) ? s = "svg" : s !== "mathml" && Vs(x) && (s = "mathml"), A || (z(x, j), qo(t, false)));
        };
        A && (z(n, K), qo(t, true)), Ws(t.props) ? (t.el.__isMounted = false, ye(() => {
          U(), delete t.el.__isMounted;
        }, i)) : U();
      } else {
        if (Ws(t.props) && e.el.__isMounted === false) {
          ye(() => {
            fl.process(e, t, n, o, r, i, s, a, c, u);
          }, i);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const D = t.anchor = e.anchor, K = t.target = e.target, z = t.targetAnchor = e.targetAnchor, U = co(e.props), x = U ? n : K, j = U ? D : z;
        if (s === "svg" || Bs(K) ? s = "svg" : (s === "mathml" || Vs(K)) && (s = "mathml"), v ? (p(e.dynamicChildren, v, x, r, i, s, a), bs(e, t, true)) : c || d(e, t, x, j, r, i, s, a, false), A) U ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Do(t, n, D, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const J = t.target = Ci(t.props, g);
          J && Do(t, J, null, u, 0);
        } else U && Do(t, K, z, u, 1);
        qo(t, A);
      }
    },
    remove(e, t, n, { um: o, o: { remove: r } }, i) {
      const { shapeFlag: s, children: a, anchor: c, targetStart: u, targetAnchor: l, target: d, props: p } = e;
      if (d && (r(u), r(l)), i && r(c), s & 16) {
        const m = i || !co(p);
        for (let g = 0; g < a.length; g++) {
          const w = a[g];
          o(w, t, n, m, !!w.dynamicChildren);
        }
      }
    },
    move: Do,
    hydrate: Ff
  };
  function Do(e, t, n, { o: { insert: o }, m: r }, i = 2) {
    i === 0 && o(e.targetAnchor, t, n);
    const { el: s, anchor: a, shapeFlag: c, children: u, props: l } = e, d = i === 2;
    if (d && o(s, t, n), (!d || co(l)) && c & 16) for (let p = 0; p < u.length; p++) r(u[p], t, n, 2);
    d && o(a, t, n);
  }
  function Ff(e, t, n, o, r, i, { o: { nextSibling: s, parentNode: a, querySelector: c, insert: u, createText: l } }, d) {
    const p = t.target = Ci(t.props, c);
    if (p) {
      const m = co(t.props), g = p._lpa || p.firstChild;
      if (t.shapeFlag & 16) if (m) t.anchor = d(s(e), t, a(e), n, o, r, i), t.targetStart = g, t.targetAnchor = g && s(g);
      else {
        t.anchor = s(e);
        let w = g;
        for (; w; ) {
          if (w && w.nodeType === 8) {
            if (w.data === "teleport start anchor") t.targetStart = w;
            else if (w.data === "teleport anchor") {
              t.targetAnchor = w, p._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          }
          w = s(w);
        }
        t.targetAnchor || dl(p, t, l, u), d(g && s(g), t, p, n, o, r, i);
      }
      qo(t, m);
    }
    return t.anchor && s(t.anchor);
  }
  Ow = fl;
  function qo(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let o, r;
      for (t ? (o = e.el, r = e.anchor) : (o = e.targetStart, r = e.targetAnchor); o && o !== r; ) o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
      n.ut();
    }
  }
  function dl(e, t, n, o) {
    const r = t.targetStart = n(""), i = t.targetAnchor = n("");
    return r[ll] = i, e && (o(r, e), o(i, e)), i;
  }
  const vt = Symbol("_leaveCb"), Ho = Symbol("_enterCb");
  function hl() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Ro(() => {
      e.isMounted = true;
    }), hs(() => {
      e.isUnmounting = true;
    }), e;
  }
  const Ge = [
    Function,
    Array
  ], pl = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ge,
    onEnter: Ge,
    onAfterEnter: Ge,
    onEnterCancelled: Ge,
    onBeforeLeave: Ge,
    onLeave: Ge,
    onAfterLeave: Ge,
    onLeaveCancelled: Ge,
    onBeforeAppear: Ge,
    onAppear: Ge,
    onAfterAppear: Ge,
    onAppearCancelled: Ge
  }, gl = (e) => {
    const t = e.subTree;
    return t.component ? gl(t.component) : t;
  }, $f = {
    name: "BaseTransition",
    props: pl,
    setup(e, { slots: t }) {
      const n = Zt(), o = hl();
      return () => {
        const r = t.default && fs(t.default(), true);
        if (!r || !r.length) return;
        const i = ml(r), s = Z(e), { mode: a } = s;
        if (o.isLeaving) return Zr(i);
        const c = Ys(i);
        if (!c) return Zr(i);
        let u = vo(c, s, o, n, (d) => u = d);
        c.type !== Te && Qt(c, u);
        let l = n.subTree && Ys(n.subTree);
        if (l && l.type !== Te && !Vt(c, l) && gl(n).type !== Te) {
          let d = vo(l, s, o, n);
          if (Qt(l, d), a === "out-in" && c.type !== Te) return o.isLeaving = true, d.afterLeave = () => {
            o.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, l = void 0;
          }, Zr(i);
          a === "in-out" && c.type !== Te ? d.delayLeave = (p, m, g) => {
            const w = bl(o, l);
            w[String(l.key)] = l, p[vt] = () => {
              m(), p[vt] = void 0, delete u.delayedLeave, l = void 0;
            }, u.delayedLeave = () => {
              g(), delete u.delayedLeave, l = void 0;
            };
          } : l = void 0;
        } else l && (l = void 0);
        return i;
      };
    }
  };
  function ml(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Te) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Uf = $f;
  function bl(e, t) {
    const { leavingVNodes: n } = e;
    let o = n.get(t.type);
    return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
  }
  function vo(e, t, n, o, r) {
    const { appear: i, mode: s, persisted: a = false, onBeforeEnter: c, onEnter: u, onAfterEnter: l, onEnterCancelled: d, onBeforeLeave: p, onLeave: m, onAfterLeave: g, onLeaveCancelled: w, onBeforeAppear: k, onAppear: A, onAfterAppear: S, onAppearCancelled: P } = t, v = String(e.key), D = bl(n, e), K = (x, j) => {
      x && tt(x, o, 9, j);
    }, z = (x, j) => {
      const J = j[1];
      K(x, j), W(x) ? x.every(($) => $.length <= 1) && J() : x.length <= 1 && J();
    }, U = {
      mode: s,
      persisted: a,
      beforeEnter(x) {
        let j = c;
        if (!n.isMounted) if (i) j = k || c;
        else return;
        x[vt] && x[vt](true);
        const J = D[v];
        J && Vt(e, J) && J.el[vt] && J.el[vt](), K(j, [
          x
        ]);
      },
      enter(x) {
        let j = u, J = l, $ = d;
        if (!n.isMounted) if (i) j = A || u, J = S || l, $ = P || d;
        else return;
        let oe = false;
        const we = x[Ho] = (ze) => {
          oe || (oe = true, ze ? K($, [
            x
          ]) : K(J, [
            x
          ]), U.delayedLeave && U.delayedLeave(), x[Ho] = void 0);
        };
        j ? z(j, [
          x,
          we
        ]) : we();
      },
      leave(x, j) {
        const J = String(e.key);
        if (x[Ho] && x[Ho](true), n.isUnmounting) return j();
        K(p, [
          x
        ]);
        let $ = false;
        const oe = x[vt] = (we) => {
          $ || ($ = true, j(), we ? K(w, [
            x
          ]) : K(g, [
            x
          ]), x[vt] = void 0, D[J] === e && delete D[J]);
        };
        D[J] = e, m ? z(m, [
          x,
          oe
        ]) : oe();
      },
      clone(x) {
        const j = vo(x, t, n, o, r);
        return r && r(j), j;
      }
    };
    return U;
  }
  function Zr(e) {
    if (Lr(e)) return e = Rt(e), e.children = null, e;
  }
  function Ys(e) {
    if (!Lr(e)) return ul(e.type) && e.children ? ml(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && V(n.default)) return n.default();
    }
  }
  function Qt(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Qt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function fs(e, t = false, n) {
    let o = [], r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
      s.type === Oe ? (s.patchFlag & 128 && r++, o = o.concat(fs(s.children, t, a))) : (t || s.type !== Te) && o.push(a != null ? Rt(s, {
        key: a
      }) : s);
    }
    if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
    return o;
  }
  jf = function(e, t) {
    return V(e) ? be({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function yl(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  Aw = function(e) {
    const t = Zt(), n = Sf(null);
    if (t) {
      const r = t.refs === ee ? t.refs = {} : t.refs;
      Object.defineProperty(r, e, {
        enumerable: true,
        get: () => n.value,
        set: (i) => n.value = i
      });
    }
    return n;
  };
  function lo(e, t, n, o, r = false) {
    if (W(e)) {
      e.forEach((g, w) => lo(g, t && (W(t) ? t[w] : t), n, o, r));
      return;
    }
    if (dn(o) && !r) {
      o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && lo(e, t, n, o.component.subTree);
      return;
    }
    const i = o.shapeFlag & 4 ? Hr(o.component) : o.el, s = r ? null : i, { i: a, r: c } = e, u = t && t.r, l = a.refs === ee ? a.refs = {} : a.refs, d = a.setupState, p = Z(d), m = d === ee ? Oc : (g) => te(p, g);
    if (u != null && u !== c) {
      if (pe(u)) l[u] = null, m(u) && (d[u] = null);
      else if (ge(u)) {
        u.value = null;
        const g = t;
        g.k && (l[g.k] = null);
      }
    }
    if (V(c)) _o(c, a, 12, [
      s,
      l
    ]);
    else {
      const g = pe(c), w = ge(c);
      if (g || w) {
        const k = () => {
          if (e.f) {
            const A = g ? m(c) ? d[c] : l[c] : c.value;
            if (r) W(A) && es(A, i);
            else if (W(A)) A.includes(i) || A.push(i);
            else if (g) l[c] = [
              i
            ], m(c) && (d[c] = l[c]);
            else {
              const S = [
                i
              ];
              c.value = S, e.k && (l[e.k] = S);
            }
          } else g ? (l[c] = s, m(c) && (d[c] = s)) : w && (c.value = s, e.k && (l[e.k] = s));
        };
        s ? (k.id = -1, ye(k, n)) : k();
      }
    }
  }
  Ar().requestIdleCallback;
  Ar().cancelIdleCallback;
  let dn, Lr, Gf;
  dn = (e) => !!e.type.__asyncLoader;
  Lr = (e) => e.type.__isKeepAlive;
  Gf = {
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
      const n = Zt(), o = n.ctx;
      if (!o.renderer) return () => {
        const S = t.default && t.default();
        return S && S.length === 1 ? S[0] : S;
      };
      const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
      let s = null;
      const a = n.suspense, { renderer: { p: c, m: u, um: l, o: { createElement: d } } } = o, p = d("div");
      o.activate = (S, P, v, D, K) => {
        const z = S.component;
        u(S, P, v, 0, a), c(z.vnode, S, P, v, z, a, D, S.slotScopeIds, K), ye(() => {
          z.isDeactivated = false, z.a && io(z.a);
          const U = S.props && S.props.onVnodeMounted;
          U && We(U, z.parent, S);
        }, a);
      }, o.deactivate = (S) => {
        const P = S.component;
        ir(P.m), ir(P.a), u(S, p, null, 1, a), ye(() => {
          P.da && io(P.da);
          const v = S.props && S.props.onVnodeUnmounted;
          v && We(v, P.parent, S), P.isDeactivated = true;
        }, a);
      };
      function m(S) {
        ei(S), l(S, n, a, true);
      }
      function g(S) {
        r.forEach((P, v) => {
          const D = Di(P.type);
          D && !S(D) && w(v);
        });
      }
      function w(S) {
        const P = r.get(S);
        P && (!s || !Vt(P, s)) ? m(P) : s && ei(s), r.delete(S), i.delete(S);
      }
      On(() => [
        e.include,
        e.exclude
      ], ([S, P]) => {
        S && g((v) => eo(S, v)), P && g((v) => !eo(P, v));
      }, {
        flush: "post",
        deep: true
      });
      let k = null;
      const A = () => {
        k != null && (sr(n.subTree.type) ? ye(() => {
          r.set(k, Fo(n.subTree));
        }, n.subTree.suspense) : r.set(k, Fo(n.subTree)));
      };
      return Ro(A), ds(A), hs(() => {
        r.forEach((S) => {
          const { subTree: P, suspense: v } = n, D = Fo(P);
          if (S.type === D.type && S.key === D.key) {
            ei(D);
            const K = D.component.da;
            K && ye(K, v);
            return;
          }
          m(S);
        });
      }), () => {
        if (k = null, !t.default) return s = null;
        const S = t.default(), P = S[0];
        if (S.length > 1) return s = null, S;
        if (!Nn(P) || !(P.shapeFlag & 4) && !(P.shapeFlag & 128)) return s = null, P;
        let v = Fo(P);
        if (v.type === Te) return s = null, v;
        const D = v.type, K = Di(dn(v) ? v.type.__asyncResolved || {} : D), { include: z, exclude: U, max: x } = e;
        if (z && (!K || !eo(z, K)) || U && K && eo(U, K)) return v.shapeFlag &= -257, s = v, P;
        const j = v.key == null ? D : v.key, J = r.get(j);
        return v.el && (v = Rt(v), P.shapeFlag & 128 && (P.ssContent = v)), k = j, J ? (v.el = J.el, v.component = J.component, v.transition && Qt(v, v.transition), v.shapeFlag |= 512, i.delete(j), i.add(j)) : (i.add(j), x && i.size > parseInt(x, 10) && w(i.values().next().value)), v.shapeFlag |= 256, s = v, sr(P.type) ? P : v;
      };
    }
  };
  _w = Gf;
  function eo(e, t) {
    return W(e) ? e.some((n) => eo(n, t)) : pe(e) ? e.split(",").includes(t) : Gu(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Wf = function(e, t) {
    wl(e, "a", t);
  };
  Bf = function(e, t) {
    wl(e, "da", t);
  };
  function wl(e, t, n = Ae) {
    const o = e.__wdc || (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
    if (xr(t, o, n), n) {
      let r = n.parent;
      for (; r && r.parent; ) Lr(r.parent.vnode) && Vf(o, t, n, r), r = r.parent;
    }
  }
  function Vf(e, t, n, o) {
    const r = xr(t, e, o, true);
    ps(() => {
      es(o[t], r);
    }, n);
  }
  function ei(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function Fo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function xr(e, t, n = Ae, o = false) {
    if (n) {
      const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
        At();
        const a = Co(n), c = tt(t, n, e, s);
        return a(), _t(), c;
      });
      return o ? r.unshift(i) : r.push(i), i;
    }
  }
  let Lt, vl, ds, qf, Kf, zf;
  Lt = (e) => (t, n = Ae) => {
    (!Eo || e === "sp") && xr(e, (...o) => t(...o), n);
  };
  Yf = Lt("bm");
  Ro = Lt("m");
  vl = Lt("bu");
  ds = Lt("u");
  hs = Lt("bum");
  ps = Lt("um");
  qf = Lt("sp");
  Kf = Lt("rtg");
  zf = Lt("rtc");
  function Jf(e, t = Ae) {
    xr("ec", e, t);
  }
  const Xf = "components", Tl = Symbol.for("v-ndc");
  Rw = function(e) {
    return pe(e) ? Qf(Xf, e, false) || e : e || Tl;
  };
  function Qf(e, t, n = true, o = false) {
    const r = Ee || Ae;
    if (r) {
      const i = r.type;
      {
        const a = Di(i, false);
        if (a && (a === t || a === je(t) || a === Or(je(t)))) return i;
      }
      const s = qs(r[e] || i[e], t) || qs(r.appContext[e], t);
      return !s && o ? i : s;
    }
  }
  function qs(e, t) {
    return e && (e[t] || e[je(t)] || e[Or(je(t))]);
  }
  Zf = function(e, t, n, o) {
    let r;
    const i = n, s = W(e);
    if (s || pe(e)) {
      const a = s && zt(e);
      let c = false, u = false;
      a && (c = !Ye(e), u = Xt(e), e = Cr(e)), r = new Array(e.length);
      for (let l = 0, d = e.length; l < d; l++) r[l] = t(c ? u ? Zo(ve(e[l])) : ve(e[l]) : e[l], l, void 0, i);
    } else if (typeof e == "number") {
      r = new Array(e);
      for (let a = 0; a < e; a++) r[a] = t(a + 1, a, void 0, i);
    } else if (le(e)) if (e[Symbol.iterator]) r = Array.from(e, (a, c) => t(a, c, void 0, i));
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let c = 0, u = a.length; c < u; c++) {
        const l = a[c];
        r[c] = t(e[l], l, c, i);
      }
    }
    else r = [];
    return r;
  };
  Cw = function(e, t, n = {}, o, r) {
    if (Ee.ce || Ee.parent && dn(Ee.parent) && Ee.parent.ce) return t !== "default" && (n.name = t), Je(), Mi(Oe, null, [
      _e("slot", n, o && o())
    ], 64);
    let i = e[t];
    i && i._c && (i._d = false), Je();
    const s = i && El(i(n)), a = n.key || s && s.key, c = Mi(Oe, {
      key: (a && !Nt(a) ? a : `_${t}`) + (!s && o ? "_fb" : "")
    }, s || (o ? o() : []), s && e._ === 1 ? 64 : -2);
    return !r && c.scopeId && (c.slotScopeIds = [
      c.scopeId + "-s"
    ]), i && i._c && (i._d = true), c;
  };
  function El(e) {
    return e.some((t) => Nn(t) ? !(t.type === Te || t.type === Oe && !El(t.children)) : true) ? e : null;
  }
  const Ni = (e) => e ? Ul(e) ? Hr(e) : Ni(e.parent) : null, uo = be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ni(e.parent),
    $root: (e) => Ni(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Il(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      us(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ol.bind(e.proxy)),
    $watch: (e) => Sd.bind(e)
  }), ti = (e, t) => e !== ee && !e.__isScriptSetup && te(e, t), ed = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: a, appContext: c } = e;
      let u;
      if (t[0] !== "$") {
        const m = s[t];
        if (m !== void 0) switch (m) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
        else {
          if (ti(o, t)) return s[t] = 1, o[t];
          if (r !== ee && te(r, t)) return s[t] = 2, r[t];
          if ((u = e.propsOptions[0]) && te(u, t)) return s[t] = 3, i[t];
          if (n !== ee && te(n, t)) return s[t] = 4, n[t];
          Pi && (s[t] = 0);
        }
      }
      const l = uo[t];
      let d, p;
      if (l) return t === "$attrs" && Ie(e.attrs, "get", ""), l(e);
      if ((d = a.__cssModules) && (d = d[t])) return d;
      if (n !== ee && te(n, t)) return s[t] = 4, n[t];
      if (p = c.config.globalProperties, te(p, t)) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: r, ctx: i } = e;
      return ti(r, t) ? (r[t] = n, true) : o !== ee && te(o, t) ? (o[t] = n, true) : te(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i, type: s } }, a) {
      let c, u;
      return !!(n[a] || e !== ee && a[0] !== "$" && te(e, a) || ti(t, a) || (c = i[0]) && te(c, a) || te(o, a) || te(uo, a) || te(r.config.globalProperties, a) || (u = s.__cssModules) && u[a]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : te(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function or(e) {
    return W(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  Nw = function(e, t) {
    return !e || !t ? e || t : W(e) && W(t) ? e.concat(t) : be({}, or(e), or(t));
  };
  let Pi = true;
  function td(e) {
    const t = Il(e), n = e.proxy, o = e.ctx;
    Pi = false, t.beforeCreate && Ks(t.beforeCreate, e, "bc");
    const { data: r, computed: i, methods: s, watch: a, provide: c, inject: u, created: l, beforeMount: d, mounted: p, beforeUpdate: m, updated: g, activated: w, deactivated: k, beforeDestroy: A, beforeUnmount: S, destroyed: P, unmounted: v, render: D, renderTracked: K, renderTriggered: z, errorCaptured: U, serverPrefetch: x, expose: j, inheritAttrs: J, components: $, directives: oe, filters: we } = t;
    if (u && nd(u, o, null), s) for (const X in s) {
      const ie = s[X];
      V(ie) && (o[X] = ie.bind(n));
    }
    if (r) {
      const X = r.call(n, n);
      le(X) && (e.data = Nr(X));
    }
    if (Pi = true, i) for (const X in i) {
      const ie = i[X], tn = V(ie) ? ie.bind(n, n) : V(ie.get) ? ie.get.bind(n, n) : Ze, Po = !V(ie) && V(ie.set) ? ie.set.bind(n) : Ze, nn = ws({
        get: tn,
        set: Po
      });
      Object.defineProperty(o, X, {
        enumerable: true,
        configurable: true,
        get: () => nn.value,
        set: (ot) => nn.value = ot
      });
    }
    if (a) for (const X in a) Sl(a[X], o, n, X);
    if (c) {
      const X = V(c) ? c.call(n) : c;
      Reflect.ownKeys(X).forEach((ie) => {
        cd(ie, X[ie]);
      });
    }
    l && Ks(l, e, "c");
    function fe(X, ie) {
      W(ie) ? ie.forEach((tn) => X(tn.bind(n))) : ie && X(ie.bind(n));
    }
    if (fe(Yf, d), fe(Ro, p), fe(vl, m), fe(ds, g), fe(Wf, w), fe(Bf, k), fe(Jf, U), fe(zf, K), fe(Kf, z), fe(hs, S), fe(ps, v), fe(qf, x), W(j)) if (j.length) {
      const X = e.exposed || (e.exposed = {});
      j.forEach((ie) => {
        Object.defineProperty(X, ie, {
          get: () => n[ie],
          set: (tn) => n[ie] = tn,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    D && e.render === Ze && (e.render = D), J != null && (e.inheritAttrs = J), $ && (e.components = $), oe && (e.directives = oe), x && yl(e);
  }
  function nd(e, t, n = Ze) {
    W(e) && (e = Li(e));
    for (const o in e) {
      const r = e[o];
      let i;
      le(r) ? "default" in r ? i = fo(r.from || o, r.default, true) : i = fo(r.from || o) : i = fo(r), ge(i) ? Object.defineProperty(t, o, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (s) => i.value = s
      }) : t[o] = i;
    }
  }
  function Ks(e, t, n) {
    tt(W(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Sl(e, t, n, o) {
    let r = o.includes(".") ? kl(n, o) : () => n[o];
    if (pe(e)) {
      const i = t[e];
      V(i) && On(r, i);
    } else if (V(e)) On(r, e.bind(n));
    else if (le(e)) if (W(e)) e.forEach((i) => Sl(i, t, n, o));
    else {
      const i = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(i) && On(r, i, e);
    }
  }
  function Il(e) {
    const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: s } } = e.appContext, a = i.get(t);
    let c;
    return a ? c = a : !r.length && !n && !o ? c = t : (c = {}, r.length && r.forEach((u) => rr(c, u, s, true)), rr(c, t, s)), le(t) && i.set(t, c), c;
  }
  function rr(e, t, n, o = false) {
    const { mixins: r, extends: i } = t;
    i && rr(e, i, n, true), r && r.forEach((s) => rr(e, s, n, true));
    for (const s in t) if (!(o && s === "expose")) {
      const a = od[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
    return e;
  }
  const od = {
    data: zs,
    props: Js,
    emits: Js,
    methods: to,
    computed: to,
    beforeCreate: Re,
    created: Re,
    beforeMount: Re,
    mounted: Re,
    beforeUpdate: Re,
    updated: Re,
    beforeDestroy: Re,
    beforeUnmount: Re,
    destroyed: Re,
    unmounted: Re,
    activated: Re,
    deactivated: Re,
    errorCaptured: Re,
    serverPrefetch: Re,
    components: to,
    directives: to,
    watch: id,
    provide: zs,
    inject: rd
  };
  function zs(e, t) {
    return t ? e ? function() {
      return be(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function rd(e, t) {
    return to(Li(e), Li(t));
  }
  function Li(e) {
    if (W(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function Re(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function to(e, t) {
    return e ? be(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Js(e, t) {
    return e ? W(e) && W(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : be(/* @__PURE__ */ Object.create(null), or(e), or(t ?? {})) : t;
  }
  function id(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = be(/* @__PURE__ */ Object.create(null), e);
    for (const o in t) n[o] = Re(e[o], t[o]);
    return n;
  }
  function Ol() {
    return {
      app: null,
      config: {
        isNativeTag: Oc,
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
  let sd = 0;
  function ad(e, t) {
    return function(o, r = null) {
      V(o) || (o = be({}, o)), r != null && !le(r) && (r = null);
      const i = Ol(), s = /* @__PURE__ */ new WeakSet(), a = [];
      let c = false;
      const u = i.app = {
        _uid: sd++,
        _component: o,
        _props: r,
        _container: null,
        _context: i,
        _instance: null,
        version: Bd,
        get config() {
          return i.config;
        },
        set config(l) {
        },
        use(l, ...d) {
          return s.has(l) || (l && V(l.install) ? (s.add(l), l.install(u, ...d)) : V(l) && (s.add(l), l(u, ...d))), u;
        },
        mixin(l) {
          return i.mixins.includes(l) || i.mixins.push(l), u;
        },
        component(l, d) {
          return d ? (i.components[l] = d, u) : i.components[l];
        },
        directive(l, d) {
          return d ? (i.directives[l] = d, u) : i.directives[l];
        },
        mount(l, d, p) {
          if (!c) {
            const m = u._ceVNode || _e(o, r);
            return m.appContext = i, p === true ? p = "svg" : p === false && (p = void 0), e(m, l, p), c = true, u._container = l, l.__vue_app__ = u, Hr(m.component);
          }
        },
        onUnmount(l) {
          a.push(l);
        },
        unmount() {
          c && (tt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(l, d) {
          return i.provides[l] = d, u;
        },
        runWithContext(l) {
          const d = hn;
          hn = u;
          try {
            return l();
          } finally {
            hn = d;
          }
        }
      };
      return u;
    };
  }
  let hn = null;
  cd = function(e, t) {
    if (Ae) {
      let n = Ae.provides;
      const o = Ae.parent && Ae.parent.provides;
      o === n && (n = Ae.provides = Object.create(o)), n[e] = t;
    }
  };
  fo = function(e, t, n = false) {
    const o = Zt();
    if (o || hn) {
      let r = hn ? hn._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
      if (r && e in r) return r[e];
      if (arguments.length > 1) return n && V(t) ? t.call(o && o.proxy) : t;
    }
  };
  ld = function() {
    return !!(Zt() || hn);
  };
  const Al = {}, _l = () => Object.create(Al), Rl = (e) => Object.getPrototypeOf(e) === Al;
  function ud(e, t, n, o = false) {
    const r = {}, i = _l();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Cl(e, t, r, i);
    for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
    n ? e.props = o ? r : Ef(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
  }
  function fd(e, t, n, o) {
    const { props: r, attrs: i, vnode: { patchFlag: s } } = e, a = Z(r), [c] = e.propsOptions;
    let u = false;
    if ((o || s > 0) && !(s & 16)) {
      if (s & 8) {
        const l = e.vnode.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          let p = l[d];
          if (kr(e.emitsOptions, p)) continue;
          const m = t[p];
          if (c) if (te(i, p)) m !== i[p] && (i[p] = m, u = true);
          else {
            const g = je(p);
            r[g] = xi(c, a, g, m, e, false);
          }
          else m !== i[p] && (i[p] = m, u = true);
        }
      }
    } else {
      Cl(e, t, r, i) && (u = true);
      let l;
      for (const d in a) (!t || !te(t, d) && ((l = Pt(d)) === d || !te(t, l))) && (c ? n && (n[d] !== void 0 || n[l] !== void 0) && (r[d] = xi(c, a, d, void 0, e, true)) : delete r[d]);
      if (i !== a) for (const d in i) (!t || !te(t, d)) && (delete i[d], u = true);
    }
    u && Tt(e.attrs, "set", "");
  }
  function Cl(e, t, n, o) {
    const [r, i] = e.propsOptions;
    let s = false, a;
    if (t) for (let c in t) {
      if (ro(c)) continue;
      const u = t[c];
      let l;
      r && te(r, l = je(c)) ? !i || !i.includes(l) ? n[l] = u : (a || (a = {}))[l] = u : kr(e.emitsOptions, c) || (!(c in o) || u !== o[c]) && (o[c] = u, s = true);
    }
    if (i) {
      const c = Z(n), u = a || ee;
      for (let l = 0; l < i.length; l++) {
        const d = i[l];
        n[d] = xi(r, c, d, u[d], e, !te(u, d));
      }
    }
    return s;
  }
  function xi(e, t, n, o, r, i) {
    const s = e[n];
    if (s != null) {
      const a = te(s, "default");
      if (a && o === void 0) {
        const c = s.default;
        if (s.type !== Function && !s.skipFactory && V(c)) {
          const { propsDefaults: u } = r;
          if (n in u) o = u[n];
          else {
            const l = Co(r);
            o = u[n] = c.call(null, t), l();
          }
        } else o = c;
        r.ce && r.ce._setProp(n, o);
      }
      s[0] && (i && !a ? o = false : s[1] && (o === "" || o === Pt(n)) && (o = true));
    }
    return o;
  }
  const dd = /* @__PURE__ */ new WeakMap();
  function Nl(e, t, n = false) {
    const o = n ? dd : t.propsCache, r = o.get(e);
    if (r) return r;
    const i = e.props, s = {}, a = [];
    let c = false;
    if (!V(e)) {
      const l = (d) => {
        c = true;
        const [p, m] = Nl(d, t, true);
        be(s, p), m && a.push(...m);
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    if (!i && !c) return le(e) && o.set(e, En), En;
    if (W(i)) for (let l = 0; l < i.length; l++) {
      const d = je(i[l]);
      Xs(d) && (s[d] = ee);
    }
    else if (i) for (const l in i) {
      const d = je(l);
      if (Xs(d)) {
        const p = i[l], m = s[d] = W(p) || V(p) ? {
          type: p
        } : be({}, p), g = m.type;
        let w = false, k = true;
        if (W(g)) for (let A = 0; A < g.length; ++A) {
          const S = g[A], P = V(S) && S.name;
          if (P === "Boolean") {
            w = true;
            break;
          } else P === "String" && (k = false);
        }
        else w = V(g) && g.name === "Boolean";
        m[0] = w, m[1] = k, (w || te(m, "default")) && a.push(d);
      }
    }
    const u = [
      s,
      a
    ];
    return le(e) && o.set(e, u), u;
  }
  function Xs(e) {
    return e[0] !== "$" && !ro(e);
  }
  const gs = (e) => e === "_" || e === "_ctx" || e === "$stable", ms = (e) => W(e) ? e.map(dt) : [
    dt(e)
  ], hd = (e, t, n) => {
    if (t._n) return t;
    const o = Hf((...r) => ms(t(...r)), n);
    return o._c = false, o;
  }, Pl = (e, t, n) => {
    const o = e._ctx;
    for (const r in e) {
      if (gs(r)) continue;
      const i = e[r];
      if (V(i)) t[r] = hd(r, i, o);
      else if (i != null) {
        const s = ms(i);
        t[r] = () => s;
      }
    }
  }, Ll = (e, t) => {
    const n = ms(t);
    e.slots.default = () => n;
  }, xl = (e, t, n) => {
    for (const o in t) (n || !gs(o)) && (e[o] = t[o]);
  }, pd = (e, t, n) => {
    const o = e.slots = _l();
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (xl(o, t, n), n && Nc(o, "_", r, true)) : Pl(t, o);
    } else t && Ll(e, t);
  }, gd = (e, t, n) => {
    const { vnode: o, slots: r } = e;
    let i = true, s = ee;
    if (o.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? i = false : xl(r, t, n) : (i = !t.$stable, Pl(t, r)), s = t;
    } else t && (Ll(e, t), s = {
      default: 1
    });
    if (i) for (const a in r) !gs(a) && s[a] == null && delete r[a];
  }, ye = Cd;
  function md(e) {
    return bd(e);
  }
  function bd(e, t) {
    const n = Ar();
    n.__VUE__ = true;
    const { insert: o, remove: r, patchProp: i, createElement: s, createText: a, createComment: c, setText: u, setElementText: l, parentNode: d, nextSibling: p, setScopeId: m = Ze, insertStaticContent: g } = e, w = (f, h, b, C = null, _ = null, R = null, H = void 0, M = null, L = !!h.dynamicChildren) => {
      if (f === h) return;
      f && !Vt(f, h) && (C = Lo(f), ot(f, _, R, true), f = null), h.patchFlag === -2 && (L = false, h.dynamicChildren = null);
      const { type: N, ref: B, shapeFlag: F } = h;
      switch (N) {
        case Dr:
          k(f, h, b, C);
          break;
        case Te:
          A(f, h, b, C);
          break;
        case ho:
          f == null && S(h, b, C, H);
          break;
        case Oe:
          $(f, h, b, C, _, R, H, M, L);
          break;
        default:
          F & 1 ? D(f, h, b, C, _, R, H, M, L) : F & 6 ? oe(f, h, b, C, _, R, H, M, L) : (F & 64 || F & 128) && N.process(f, h, b, C, _, R, H, M, L, Un);
      }
      B != null && _ ? lo(B, f && f.ref, R, h || f, !h) : B == null && f && f.ref != null && lo(f.ref, null, R, f, true);
    }, k = (f, h, b, C) => {
      if (f == null) o(h.el = a(h.children), b, C);
      else {
        const _ = h.el = f.el;
        h.children !== f.children && u(_, h.children);
      }
    }, A = (f, h, b, C) => {
      f == null ? o(h.el = c(h.children || ""), b, C) : h.el = f.el;
    }, S = (f, h, b, C) => {
      [f.el, f.anchor] = g(f.children, h, b, C, f.el, f.anchor);
    }, P = ({ el: f, anchor: h }, b, C) => {
      let _;
      for (; f && f !== h; ) _ = p(f), o(f, b, C), f = _;
      o(h, b, C);
    }, v = ({ el: f, anchor: h }) => {
      let b;
      for (; f && f !== h; ) b = p(f), r(f), f = b;
      r(h);
    }, D = (f, h, b, C, _, R, H, M, L) => {
      h.type === "svg" ? H = "svg" : h.type === "math" && (H = "mathml"), f == null ? K(h, b, C, _, R, H, M, L) : x(f, h, _, R, H, M, L);
    }, K = (f, h, b, C, _, R, H, M) => {
      let L, N;
      const { props: B, shapeFlag: F, transition: G, dirs: Y } = f;
      if (L = f.el = s(f.type, R, B && B.is, B), F & 8 ? l(L, f.children) : F & 16 && U(f.children, L, null, C, _, ni(f, R), H, M), Y && on(f, null, C, "created"), z(L, f, f.scopeId, H, C), B) {
        for (const se in B) se !== "value" && !ro(se) && i(L, se, null, B[se], R, C);
        "value" in B && i(L, "value", null, B.value, R), (N = B.onVnodeBeforeMount) && We(N, C, f);
      }
      Y && on(f, null, C, "beforeMount");
      const Q = yd(_, G);
      Q && G.beforeEnter(L), o(L, h, b), ((N = B && B.onVnodeMounted) || Q || Y) && ye(() => {
        N && We(N, C, f), Q && G.enter(L), Y && on(f, null, C, "mounted");
      }, _);
    }, z = (f, h, b, C, _) => {
      if (b && m(f, b), C) for (let R = 0; R < C.length; R++) m(f, C[R]);
      if (_) {
        let R = _.subTree;
        if (h === R || sr(R.type) && (R.ssContent === h || R.ssFallback === h)) {
          const H = _.vnode;
          z(f, H, H.scopeId, H.slotScopeIds, _.parent);
        }
      }
    }, U = (f, h, b, C, _, R, H, M, L = 0) => {
      for (let N = L; N < f.length; N++) {
        const B = f[N] = M ? Bt(f[N]) : dt(f[N]);
        w(null, B, h, b, C, _, R, H, M);
      }
    }, x = (f, h, b, C, _, R, H) => {
      const M = h.el = f.el;
      let { patchFlag: L, dynamicChildren: N, dirs: B } = h;
      L |= f.patchFlag & 16;
      const F = f.props || ee, G = h.props || ee;
      let Y;
      if (b && rn(b, false), (Y = G.onVnodeBeforeUpdate) && We(Y, b, h, f), B && on(h, f, b, "beforeUpdate"), b && rn(b, true), (F.innerHTML && G.innerHTML == null || F.textContent && G.textContent == null) && l(M, ""), N ? j(f.dynamicChildren, N, M, b, C, ni(h, _), R) : H || ie(f, h, M, null, b, C, ni(h, _), R, false), L > 0) {
        if (L & 16) J(M, F, G, b, _);
        else if (L & 2 && F.class !== G.class && i(M, "class", null, G.class, _), L & 4 && i(M, "style", F.style, G.style, _), L & 8) {
          const Q = h.dynamicProps;
          for (let se = 0; se < Q.length; se++) {
            const ne = Q[se], Pe = F[ne], Le = G[ne];
            (Le !== Pe || ne === "value") && i(M, ne, Pe, Le, _, b);
          }
        }
        L & 1 && f.children !== h.children && l(M, h.children);
      } else !H && N == null && J(M, F, G, b, _);
      ((Y = G.onVnodeUpdated) || B) && ye(() => {
        Y && We(Y, b, h, f), B && on(h, f, b, "updated");
      }, C);
    }, j = (f, h, b, C, _, R, H) => {
      for (let M = 0; M < h.length; M++) {
        const L = f[M], N = h[M], B = L.el && (L.type === Oe || !Vt(L, N) || L.shapeFlag & 198) ? d(L.el) : b;
        w(L, N, B, null, C, _, R, H, true);
      }
    }, J = (f, h, b, C, _) => {
      if (h !== b) {
        if (h !== ee) for (const R in h) !ro(R) && !(R in b) && i(f, R, h[R], null, _, C);
        for (const R in b) {
          if (ro(R)) continue;
          const H = b[R], M = h[R];
          H !== M && R !== "value" && i(f, R, M, H, _, C);
        }
        "value" in b && i(f, "value", h.value, b.value, _);
      }
    }, $ = (f, h, b, C, _, R, H, M, L) => {
      const N = h.el = f ? f.el : a(""), B = h.anchor = f ? f.anchor : a("");
      let { patchFlag: F, dynamicChildren: G, slotScopeIds: Y } = h;
      Y && (M = M ? M.concat(Y) : Y), f == null ? (o(N, b, C), o(B, b, C), U(h.children || [], b, B, _, R, H, M, L)) : F > 0 && F & 64 && G && f.dynamicChildren ? (j(f.dynamicChildren, G, b, _, R, H, M), (h.key != null || _ && h === _.subTree) && bs(f, h, true)) : ie(f, h, b, B, _, R, H, M, L);
    }, oe = (f, h, b, C, _, R, H, M, L) => {
      h.slotScopeIds = M, f == null ? h.shapeFlag & 512 ? _.ctx.activate(h, b, C, H, L) : we(h, b, C, _, R, H, L) : ze(f, h, L);
    }, we = (f, h, b, C, _, R, H) => {
      const M = f.component = Hd(f, C, _);
      if (Lr(f) && (M.ctx.renderer = Un), Fd(M, false, H), M.asyncDep) {
        if (_ && _.registerDep(M, fe, H), !f.el) {
          const L = M.subTree = _e(Te);
          A(null, L, h, b), f.placeholder = L.el;
        }
      } else fe(M, f, h, b, _, R, H);
    }, ze = (f, h, b) => {
      const C = h.component = f.component;
      if (_d(f, h, b)) if (C.asyncDep && !C.asyncResolved) {
        X(C, h, b);
        return;
      } else C.next = h, C.update();
      else h.el = f.el, C.vnode = h;
    }, fe = (f, h, b, C, _, R, H) => {
      const M = () => {
        if (f.isMounted) {
          let { next: F, bu: G, u: Y, parent: Q, vnode: se } = f;
          {
            const it = Ml(f);
            if (it) {
              F && (F.el = se.el, X(f, F, H)), it.asyncDep.then(() => {
                f.isUnmounted || M();
              });
              return;
            }
          }
          let ne = F, Pe;
          rn(f, false), F ? (F.el = se.el, X(f, F, H)) : F = se, G && io(G), (Pe = F.props && F.props.onVnodeBeforeUpdate) && We(Pe, Q, F, se), rn(f, true);
          const Le = Qs(f), rt = f.subTree;
          f.subTree = Le, w(rt, Le, d(rt.el), Lo(rt), f, _, R), F.el = Le.el, ne === null && Rd(f, Le.el), Y && ye(Y, _), (Pe = F.props && F.props.onVnodeUpdated) && ye(() => We(Pe, Q, F, se), _);
        } else {
          let F;
          const { el: G, props: Y } = h, { bm: Q, m: se, parent: ne, root: Pe, type: Le } = f, rt = dn(h);
          rn(f, false), Q && io(Q), !rt && (F = Y && Y.onVnodeBeforeMount) && We(F, ne, h), rn(f, true);
          {
            Pe.ce && Pe.ce._def.shadowRoot !== false && Pe.ce._injectChildStyle(Le);
            const it = f.subTree = Qs(f);
            w(null, it, b, C, f, _, R), h.el = it.el;
          }
          if (se && ye(se, _), !rt && (F = Y && Y.onVnodeMounted)) {
            const it = h;
            ye(() => We(F, ne, it), _);
          }
          (h.shapeFlag & 256 || ne && dn(ne.vnode) && ne.vnode.shapeFlag & 256) && f.a && ye(f.a, _), f.isMounted = true, h = b = C = null;
        }
      };
      f.scope.on();
      const L = f.effect = new Hc(M);
      f.scope.off();
      const N = f.update = L.run.bind(L), B = f.job = L.runIfDirty.bind(L);
      B.i = f, B.id = f.uid, L.scheduler = () => us(B), rn(f, true), N();
    }, X = (f, h, b) => {
      h.component = f;
      const C = f.vnode.props;
      f.vnode = h, f.next = null, fd(f, h.props, C, b), gd(f, h.children, b), At(), Gs(f), _t();
    }, ie = (f, h, b, C, _, R, H, M, L = false) => {
      const N = f && f.children, B = f ? f.shapeFlag : 0, F = h.children, { patchFlag: G, shapeFlag: Y } = h;
      if (G > 0) {
        if (G & 128) {
          Po(N, F, b, C, _, R, H, M, L);
          return;
        } else if (G & 256) {
          tn(N, F, b, C, _, R, H, M, L);
          return;
        }
      }
      Y & 8 ? (B & 16 && $n(N, _, R), F !== N && l(b, F)) : B & 16 ? Y & 16 ? Po(N, F, b, C, _, R, H, M, L) : $n(N, _, R, true) : (B & 8 && l(b, ""), Y & 16 && U(F, b, C, _, R, H, M, L));
    }, tn = (f, h, b, C, _, R, H, M, L) => {
      f = f || En, h = h || En;
      const N = f.length, B = h.length, F = Math.min(N, B);
      let G;
      for (G = 0; G < F; G++) {
        const Y = h[G] = L ? Bt(h[G]) : dt(h[G]);
        w(f[G], Y, b, null, _, R, H, M, L);
      }
      N > B ? $n(f, _, R, true, false, F) : U(h, b, C, _, R, H, M, L, F);
    }, Po = (f, h, b, C, _, R, H, M, L) => {
      let N = 0;
      const B = h.length;
      let F = f.length - 1, G = B - 1;
      for (; N <= F && N <= G; ) {
        const Y = f[N], Q = h[N] = L ? Bt(h[N]) : dt(h[N]);
        if (Vt(Y, Q)) w(Y, Q, b, null, _, R, H, M, L);
        else break;
        N++;
      }
      for (; N <= F && N <= G; ) {
        const Y = f[F], Q = h[G] = L ? Bt(h[G]) : dt(h[G]);
        if (Vt(Y, Q)) w(Y, Q, b, null, _, R, H, M, L);
        else break;
        F--, G--;
      }
      if (N > F) {
        if (N <= G) {
          const Y = G + 1, Q = Y < B ? h[Y].el : C;
          for (; N <= G; ) w(null, h[N] = L ? Bt(h[N]) : dt(h[N]), b, Q, _, R, H, M, L), N++;
        }
      } else if (N > G) for (; N <= F; ) ot(f[N], _, R, true), N++;
      else {
        const Y = N, Q = N, se = /* @__PURE__ */ new Map();
        for (N = Q; N <= G; N++) {
          const Fe = h[N] = L ? Bt(h[N]) : dt(h[N]);
          Fe.key != null && se.set(Fe.key, N);
        }
        let ne, Pe = 0;
        const Le = G - Q + 1;
        let rt = false, it = 0;
        const jn = new Array(Le);
        for (N = 0; N < Le; N++) jn[N] = 0;
        for (N = Y; N <= F; N++) {
          const Fe = f[N];
          if (Pe >= Le) {
            ot(Fe, _, R, true);
            continue;
          }
          let st;
          if (Fe.key != null) st = se.get(Fe.key);
          else for (ne = Q; ne <= G; ne++) if (jn[ne - Q] === 0 && Vt(Fe, h[ne])) {
            st = ne;
            break;
          }
          st === void 0 ? ot(Fe, _, R, true) : (jn[st - Q] = N + 1, st >= it ? it = st : rt = true, w(Fe, h[st], b, null, _, R, H, M, L), Pe++);
        }
        const Ds = rt ? wd(jn) : En;
        for (ne = Ds.length - 1, N = Le - 1; N >= 0; N--) {
          const Fe = Q + N, st = h[Fe], Hs = h[Fe + 1], Fs = Fe + 1 < B ? Hs.el || Hs.placeholder : C;
          jn[N] === 0 ? w(null, st, b, Fs, _, R, H, M, L) : rt && (ne < 0 || N !== Ds[ne] ? nn(st, b, Fs, 2) : ne--);
        }
      }
    }, nn = (f, h, b, C, _ = null) => {
      const { el: R, type: H, transition: M, children: L, shapeFlag: N } = f;
      if (N & 6) {
        nn(f.component.subTree, h, b, C);
        return;
      }
      if (N & 128) {
        f.suspense.move(h, b, C);
        return;
      }
      if (N & 64) {
        H.move(f, h, b, Un);
        return;
      }
      if (H === Oe) {
        o(R, h, b);
        for (let F = 0; F < L.length; F++) nn(L[F], h, b, C);
        o(f.anchor, h, b);
        return;
      }
      if (H === ho) {
        P(f, h, b);
        return;
      }
      if (C !== 2 && N & 1 && M) if (C === 0) M.beforeEnter(R), o(R, h, b), ye(() => M.enter(R), _);
      else {
        const { leave: F, delayLeave: G, afterLeave: Y } = M, Q = () => {
          f.ctx.isUnmounted ? r(R) : o(R, h, b);
        }, se = () => {
          R._isLeaving && R[vt](true), F(R, () => {
            Q(), Y && Y();
          });
        };
        G ? G(R, Q, se) : se();
      }
      else o(R, h, b);
    }, ot = (f, h, b, C = false, _ = false) => {
      const { type: R, props: H, ref: M, children: L, dynamicChildren: N, shapeFlag: B, patchFlag: F, dirs: G, cacheIndex: Y } = f;
      if (F === -2 && (_ = false), M != null && (At(), lo(M, null, b, f, true), _t()), Y != null && (h.renderCache[Y] = void 0), B & 256) {
        h.ctx.deactivate(f);
        return;
      }
      const Q = B & 1 && G, se = !dn(f);
      let ne;
      if (se && (ne = H && H.onVnodeBeforeUnmount) && We(ne, h, f), B & 6) Uu(f.component, b, C);
      else {
        if (B & 128) {
          f.suspense.unmount(b, C);
          return;
        }
        Q && on(f, null, h, "beforeUnmount"), B & 64 ? f.type.remove(f, h, b, Un, C) : N && !N.hasOnce && (R !== Oe || F > 0 && F & 64) ? $n(N, h, b, false, true) : (R === Oe && F & 384 || !_ && B & 16) && $n(L, h, b), C && Ms(f);
      }
      (se && (ne = H && H.onVnodeUnmounted) || Q) && ye(() => {
        ne && We(ne, h, f), Q && on(f, null, h, "unmounted");
      }, b);
    }, Ms = (f) => {
      const { type: h, el: b, anchor: C, transition: _ } = f;
      if (h === Oe) {
        $u(b, C);
        return;
      }
      if (h === ho) {
        v(f);
        return;
      }
      const R = () => {
        r(b), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (f.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: H, delayLeave: M } = _, L = () => H(b, R);
        M ? M(f.el, R, L) : L();
      } else R();
    }, $u = (f, h) => {
      let b;
      for (; f !== h; ) b = p(f), r(f), f = b;
      r(h);
    }, Uu = (f, h, b) => {
      const { bum: C, scope: _, job: R, subTree: H, um: M, m: L, a: N } = f;
      ir(L), ir(N), C && io(C), _.stop(), R && (R.flags |= 8, ot(H, f, h, b)), M && ye(M, h), ye(() => {
        f.isUnmounted = true;
      }, h);
    }, $n = (f, h, b, C = false, _ = false, R = 0) => {
      for (let H = R; H < f.length; H++) ot(f[H], h, b, C, _);
    }, Lo = (f) => {
      if (f.shapeFlag & 6) return Lo(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const h = p(f.anchor || f.el), b = h && h[ll];
      return b ? p(b) : h;
    };
    let qr = false;
    const ks = (f, h, b) => {
      f == null ? h._vnode && ot(h._vnode, null, null, true) : w(h._vnode || null, f, h, null, null, null, b), h._vnode = f, qr || (qr = true, Gs(), sl(), qr = false);
    }, Un = {
      p: w,
      um: ot,
      m: nn,
      r: Ms,
      mt: we,
      mc: U,
      pc: ie,
      pbc: j,
      n: Lo,
      o: e
    };
    return {
      render: ks,
      hydrate: void 0,
      createApp: ad(ks)
    };
  }
  function ni({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function rn({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function yd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function bs(e, t, n = false) {
    const o = e.children, r = t.children;
    if (W(o) && W(r)) for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let a = r[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = Bt(r[i]), a.el = s.el), !n && a.patchFlag !== -2 && bs(s, a)), a.type === Dr && a.patchFlag !== -1 && (a.el = s.el), a.type === Te && !a.el && (a.el = s.el);
    }
  }
  function wd(e) {
    const t = e.slice(), n = [
      0
    ];
    let o, r, i, s, a;
    const c = e.length;
    for (o = 0; o < c; o++) {
      const u = e[o];
      if (u !== 0) {
        if (r = n[n.length - 1], e[r] < u) {
          t[o] = r, n.push(o);
          continue;
        }
        for (i = 0, s = n.length - 1; i < s; ) a = i + s >> 1, e[n[a]] < u ? i = a + 1 : s = a;
        u < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
      }
    }
    for (i = n.length, s = n[i - 1]; i-- > 0; ) n[i] = s, s = t[s];
    return n;
  }
  function Ml(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Ml(t);
  }
  function ir(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const vd = Symbol.for("v-scx"), Td = () => fo(vd);
  Pw = function(e, t) {
    return Mr(e, null, t);
  };
  function Ed(e, t) {
    return Mr(e, null, {
      flush: "sync"
    });
  }
  On = function(e, t, n) {
    return Mr(e, t, n);
  };
  function Mr(e, t, n = ee) {
    const { immediate: o, deep: r, flush: i, once: s } = n, a = be({}, n), c = t && o || !t && i !== "post";
    let u;
    if (Eo) {
      if (i === "sync") {
        const m = Td();
        u = m.__watcherHandles || (m.__watcherHandles = []);
      } else if (!c) {
        const m = () => {
        };
        return m.stop = Ze, m.resume = Ze, m.pause = Ze, m;
      }
    }
    const l = Ae;
    a.call = (m, g, w) => tt(m, l, g, w);
    let d = false;
    i === "post" ? a.scheduler = (m) => {
      ye(m, l && l.suspense);
    } : i !== "sync" && (d = true, a.scheduler = (m, g) => {
      g ? m() : us(m);
    }), a.augmentJob = (m) => {
      t && (m.flags |= 4), d && (m.flags |= 2, l && (m.id = l.uid, m.i = l));
    };
    const p = Mf(e, t, a);
    return Eo && (u ? u.push(p) : c && p()), p;
  }
  function Sd(e, t, n) {
    const o = this.proxy, r = pe(e) ? e.includes(".") ? kl(o, e) : () => o[e] : e.bind(o, o);
    let i;
    V(t) ? i = t : (i = t.handler, n = t);
    const s = Co(this), a = Mr(r, i.bind(o), n);
    return s(), a;
  }
  function kl(e, t) {
    const n = t.split(".");
    return () => {
      let o = e;
      for (let r = 0; r < n.length && o; r++) o = o[n[r]];
      return o;
    };
  }
  Lw = function(e, t, n = ee) {
    const o = Zt(), r = je(t), i = Pt(t), s = Dl(e, r), a = _f((c, u) => {
      let l, d = ee, p;
      return Ed(() => {
        const m = e[r];
        He(l, m) && (l = m, u());
      }), {
        get() {
          return c(), n.get ? n.get(l) : l;
        },
        set(m) {
          const g = n.set ? n.set(m) : m;
          if (!He(g, l) && !(d !== ee && He(m, d))) return;
          const w = o.vnode.props;
          w && (t in w || r in w || i in w) && (`onUpdate:${t}` in w || `onUpdate:${r}` in w || `onUpdate:${i}` in w) || (l = m, u()), o.emit(`update:${t}`, g), He(m, g) && He(m, d) && !He(g, p) && u(), d = m, p = g;
        }
      };
    });
    return a[Symbol.iterator] = () => {
      let c = 0;
      return {
        next() {
          return c < 2 ? {
            value: c++ ? s || ee : a,
            done: false
          } : {
            done: true
          };
        }
      };
    }, a;
  };
  const Dl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${Pt(t)}Modifiers`];
  function Id(e, t, ...n) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || ee;
    let r = n;
    const i = t.startsWith("update:"), s = i && Dl(o, t.slice(7));
    s && (s.trim && (r = n.map((l) => pe(l) ? l.trim() : l)), s.number && (r = n.map(Yu)));
    let a, c = o[a = Kr(t)] || o[a = Kr(je(t))];
    !c && i && (c = o[a = Kr(Pt(t))]), c && tt(c, e, 6, r);
    const u = o[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, tt(u, e, 6, r);
    }
  }
  function Hl(e, t, n = false) {
    const o = t.emitsCache, r = o.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let s = {}, a = false;
    if (!V(e)) {
      const c = (u) => {
        const l = Hl(u, t, true);
        l && (a = true, be(s, l));
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !i && !a ? (le(e) && o.set(e, null), null) : (W(i) ? i.forEach((c) => s[c] = null) : be(s, i), le(e) && o.set(e, s), s);
  }
  function kr(e, t) {
    return !e || !Sr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, Pt(t)) || te(e, t));
  }
  function Qs(e) {
    const { type: t, vnode: n, proxy: o, withProxy: r, propsOptions: [i], slots: s, attrs: a, emit: c, render: u, renderCache: l, props: d, data: p, setupState: m, ctx: g, inheritAttrs: w } = e, k = nr(e);
    let A, S;
    try {
      if (n.shapeFlag & 4) {
        const v = r || o, D = v;
        A = dt(u.call(D, v, l, d, m, p, g)), S = a;
      } else {
        const v = t;
        A = dt(v.length > 1 ? v(d, {
          attrs: a,
          slots: s,
          emit: c
        }) : v(d, null)), S = t.props ? a : Od(a);
      }
    } catch (v) {
      po.length = 0, Pr(v, e, 1), A = _e(Te);
    }
    let P = A;
    if (S && w !== false) {
      const v = Object.keys(S), { shapeFlag: D } = P;
      v.length && D & 7 && (i && v.some(Zi) && (S = Ad(S, i)), P = Rt(P, S, false, true));
    }
    return n.dirs && (P = Rt(P, null, false, true), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && Qt(P, n.transition), A = P, nr(k), A;
  }
  const Od = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Sr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Ad = (e, t) => {
    const n = {};
    for (const o in e) (!Zi(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  };
  function _d(e, t, n) {
    const { props: o, children: r, component: i } = e, { props: s, children: a, patchFlag: c } = t, u = i.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && c >= 0) {
      if (c & 1024) return true;
      if (c & 16) return o ? Zs(o, s, u) : !!s;
      if (c & 8) {
        const l = t.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          const p = l[d];
          if (s[p] !== o[p] && !kr(u, p)) return true;
        }
      }
    } else return (r || a) && (!a || !a.$stable) ? true : o === s ? false : o ? s ? Zs(o, s, u) : true : !!s;
    return false;
  }
  function Zs(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return true;
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      if (t[i] !== e[i] && !kr(n, i)) return true;
    }
    return false;
  }
  function Rd({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const o = t.subTree;
      if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const sr = (e) => e.__isSuspense;
  function Cd(e, t) {
    t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : il(e);
  }
  let ho, po;
  Oe = Symbol.for("v-fgt");
  Dr = Symbol.for("v-txt");
  Te = Symbol.for("v-cmt");
  ho = Symbol.for("v-stc");
  po = [];
  let Ue = null;
  Je = function(e = false) {
    po.push(Ue = e ? null : []);
  };
  function Nd() {
    po.pop(), Ue = po[po.length - 1] || null;
  }
  let To = 1;
  function ea(e, t = false) {
    To += e, e < 0 && Ue && t && (Ue.hasOnce = true);
  }
  function Fl(e) {
    return e.dynamicChildren = To > 0 ? Ue || En : null, Nd(), To > 0 && Ue && Ue.push(e), e;
  }
  Dt = function(e, t, n, o, r, i) {
    return Fl(de(e, t, n, o, r, i, true));
  };
  Mi = function(e, t, n, o, r) {
    return Fl(_e(e, t, n, o, r, true));
  };
  Nn = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function Vt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const $l = ({ key: e }) => e ?? null, Ko = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || ge(e) || V(e) ? {
    i: Ee,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  de = function(e, t = null, n = null, o = 0, r = null, i = e === Oe ? 0 : 1, s = false, a = false) {
    const c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && $l(t),
      ref: t && Ko(t),
      scopeId: cl,
      slotScopeIds: null,
      children: n,
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
      shapeFlag: i,
      patchFlag: o,
      dynamicProps: r,
      dynamicChildren: null,
      appContext: null,
      ctx: Ee
    };
    return a ? (ys(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), To > 0 && !s && Ue && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Ue.push(c), c;
  };
  _e = Pd;
  function Pd(e, t = null, n = null, o = 0, r = null, i = false) {
    if ((!e || e === Tl) && (e = Te), Nn(e)) {
      const a = Rt(e, t, true);
      return n && ys(a, n), To > 0 && !i && Ue && (a.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = a : Ue.push(a)), a.patchFlag = -2, a;
    }
    if (Gd(e) && (e = e.__vccOpts), t) {
      t = Ld(t);
      let { class: a, style: c } = t;
      a && !pe(a) && (t.class = ns(a)), le(c) && (cs(c) && !W(c) && (c = be({}, c)), t.style = _r(c));
    }
    const s = pe(e) ? 1 : sr(e) ? 128 : ul(e) ? 64 : le(e) ? 4 : V(e) ? 2 : 0;
    return de(e, t, n, o, r, s, i, true);
  }
  function Ld(e) {
    return e ? cs(e) || Rl(e) ? be({}, e) : e : null;
  }
  Rt = function(e, t, n = false, o = false) {
    const { props: r, ref: i, patchFlag: s, children: a, transition: c } = e, u = t ? Md(r || {}, t) : r, l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && $l(u),
      ref: t && t.ref ? n && i ? W(i) ? i.concat(Ko(t)) : [
        i,
        Ko(t)
      ] : Ko(t) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Oe ? s === -1 ? 16 : s | 16 : s,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Rt(e.ssContent),
      ssFallback: e.ssFallback && Rt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return c && o && Qt(l, c.clone(l)), l;
  };
  xd = function(e = " ", t = 0) {
    return _e(Dr, null, e, t);
  };
  xw = function(e, t) {
    const n = _e(ho, null, e);
    return n.staticCount = t, n;
  };
  oi = function(e = "", t = false) {
    return t ? (Je(), Mi(Te, null, e)) : _e(Te, null, e);
  };
  function dt(e) {
    return e == null || typeof e == "boolean" ? _e(Te) : W(e) ? _e(Oe, null, e.slice()) : Nn(e) ? Bt(e) : _e(Dr, null, String(e));
  }
  function Bt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e);
  }
  function ys(e, t) {
    let n = 0;
    const { shapeFlag: o } = e;
    if (t == null) t = null;
    else if (W(t)) n = 16;
    else if (typeof t == "object") if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = false), ys(e, r()), r._c && (r._d = true));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Rl(t) ? t._ctx = Ee : r === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else V(t) ? (t = {
      default: t,
      _ctx: Ee
    }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [
      xd(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Md = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      for (const r in o) if (r === "class") t.class !== o.class && (t.class = ns([
        t.class,
        o.class
      ]));
      else if (r === "style") t.style = _r([
        t.style,
        o.style
      ]);
      else if (Sr(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !(W(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
    }
    return t;
  };
  function We(e, t, n, o = null) {
    tt(e, t, 7, [
      n,
      o
    ]);
  }
  const kd = Ol();
  let Dd = 0;
  function Hd(e, t, n) {
    const o = e.type, r = (t ? t.appContext : e.appContext) || kd, i = {
      uid: Dd++,
      vnode: e,
      type: o,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Mc(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Nl(o, r),
      emitsOptions: Hl(o, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: o.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
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
    return i.ctx = {
      _: i
    }, i.root = t ? t.root : i, i.emit = Id.bind(null, i), e.ce && e.ce(i), i;
  }
  let Ae = null;
  Zt = () => Ae || Ee;
  let ar, ki;
  {
    const e = Ar(), t = (n, o) => {
      let r;
      return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
        r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
      };
    };
    ar = t("__VUE_INSTANCE_SETTERS__", (n) => Ae = n), ki = t("__VUE_SSR_SETTERS__", (n) => Eo = n);
  }
  const Co = (e) => {
    const t = Ae;
    return ar(e), e.scope.on(), () => {
      e.scope.off(), ar(t);
    };
  }, ta = () => {
    Ae && Ae.scope.off(), ar(null);
  };
  function Ul(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Eo = false;
  function Fd(e, t = false, n = false) {
    t && ki(t);
    const { props: o, children: r } = e.vnode, i = Ul(e);
    ud(e, o, i, t), pd(e, r, n || t);
    const s = i ? $d(e, t) : void 0;
    return t && ki(false), s;
  }
  function $d(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ed);
    const { setup: o } = n;
    if (o) {
      At();
      const r = e.setupContext = o.length > 1 ? jd(e) : null, i = Co(e), s = _o(o, e, 0, [
        e.props,
        r
      ]), a = _c(s);
      if (_t(), i(), (a || e.sp) && !dn(e) && yl(e), a) {
        if (s.then(ta, ta), t) return s.then((c) => {
          na(e, c);
        }).catch((c) => {
          Pr(c, e, 0);
        });
        e.asyncDep = s;
      } else na(e, s);
    } else jl(e);
  }
  function na(e, t, n) {
    V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = el(t)), jl(e);
  }
  function jl(e, t, n) {
    const o = e.type;
    e.render || (e.render = o.render || Ze);
    {
      const r = Co(e);
      At();
      try {
        td(e);
      } finally {
        _t(), r();
      }
    }
  }
  const Ud = {
    get(e, t) {
      return Ie(e, "get", ""), e[t];
    }
  };
  function jd(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Ud),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Hr(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(el(ls(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in uo) return uo[n](e);
      },
      has(t, n) {
        return n in t || n in uo;
      }
    })) : e.proxy;
  }
  function Di(e, t = true) {
    return V(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Gd(e) {
    return V(e) && "__vccOpts" in e;
  }
  ws = (e, t) => Lf(e, t, Eo);
  Wd = function(e, t, n) {
    const o = arguments.length;
    return o === 2 ? le(t) && !W(t) ? Nn(t) ? _e(e, null, [
      t
    ]) : _e(e, t) : _e(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Nn(n) && (n = [
      n
    ]), _e(e, t, n));
  };
  const Bd = "3.5.20";
  let Hi;
  const oa = typeof window < "u" && window.trustedTypes;
  if (oa) try {
    Hi = oa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Gl, Vd, Yd, wt, ra, qd, Ht, Wn, Pn, Wl, Bl, Kd, sn, ia;
  Gl = Hi ? (e) => Hi.createHTML(e) : (e) => e;
  Vd = "http://www.w3.org/2000/svg";
  Yd = "http://www.w3.org/1998/Math/MathML";
  wt = typeof document < "u" ? document : null;
  ra = wt && wt.createElement("template");
  qd = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const r = t === "svg" ? wt.createElementNS(Vd, e) : t === "mathml" ? wt.createElementNS(Yd, e) : n ? wt.createElement(e, {
        is: n
      }) : wt.createElement(e);
      return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
    },
    createText: (e) => wt.createTextNode(e),
    createComment: (e) => wt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => wt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, o, r, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === i || !(r = r.nextSibling)); ) ;
      else {
        ra.innerHTML = Gl(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
        const a = ra.content;
        if (o === "svg" || o === "mathml") {
          const c = a.firstChild;
          for (; c.firstChild; ) a.appendChild(c.firstChild);
          a.removeChild(c);
        }
        t.insertBefore(a, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
  Ht = "transition";
  Wn = "animation";
  Pn = Symbol("_vtc");
  Wl = {
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
  Bl = be({}, pl, Wl);
  Kd = (e) => (e.displayName = "Transition", e.props = Bl, e);
  Mw = Kd((e, { slots: t }) => Wd(Uf, Vl(e), t));
  sn = (e, t = []) => {
    W(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  ia = (e) => e ? W(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Vl(e) {
    const t = {};
    for (const $ in e) $ in Wl || (t[$] = e[$]);
    if (e.css === false) return t;
    const { name: n = "v", type: o, duration: r, enterFromClass: i = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: c = i, appearActiveClass: u = s, appearToClass: l = a, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = zd(r), w = g && g[0], k = g && g[1], { onBeforeEnter: A, onEnter: S, onEnterCancelled: P, onLeave: v, onLeaveCancelled: D, onBeforeAppear: K = A, onAppear: z = S, onAppearCancelled: U = P } = t, x = ($, oe, we, ze) => {
      $._enterCancelled = ze, jt($, oe ? l : a), jt($, oe ? u : s), we && we();
    }, j = ($, oe) => {
      $._isLeaving = false, jt($, d), jt($, m), jt($, p), oe && oe();
    }, J = ($) => (oe, we) => {
      const ze = $ ? z : S, fe = () => x(oe, $, we);
      sn(ze, [
        oe,
        fe
      ]), sa(() => {
        jt(oe, $ ? c : i), ct(oe, $ ? l : a), ia(ze) || aa(oe, o, w, fe);
      });
    };
    return be(t, {
      onBeforeEnter($) {
        sn(A, [
          $
        ]), ct($, i), ct($, s);
      },
      onBeforeAppear($) {
        sn(K, [
          $
        ]), ct($, c), ct($, u);
      },
      onEnter: J(false),
      onAppear: J(true),
      onLeave($, oe) {
        $._isLeaving = true;
        const we = () => j($, oe);
        ct($, d), $._enterCancelled ? (ct($, p), Fi()) : (Fi(), ct($, p)), sa(() => {
          $._isLeaving && (jt($, d), ct($, m), ia(v) || aa($, o, k, we));
        }), sn(v, [
          $,
          we
        ]);
      },
      onEnterCancelled($) {
        x($, false, void 0, true), sn(P, [
          $
        ]);
      },
      onAppearCancelled($) {
        x($, true, void 0, true), sn(U, [
          $
        ]);
      },
      onLeaveCancelled($) {
        j($), sn(D, [
          $
        ]);
      }
    });
  }
  function zd(e) {
    if (e == null) return null;
    if (le(e)) return [
      ri(e.enter),
      ri(e.leave)
    ];
    {
      const t = ri(e);
      return [
        t,
        t
      ];
    }
  }
  function ri(e) {
    return qu(e);
  }
  function ct(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Pn] || (e[Pn] = /* @__PURE__ */ new Set())).add(t);
  }
  function jt(e, t) {
    t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
    const n = e[Pn];
    n && (n.delete(t), n.size || (e[Pn] = void 0));
  }
  function sa(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Jd = 0;
  function aa(e, t, n, o) {
    const r = e._endId = ++Jd, i = () => {
      r === e._endId && o();
    };
    if (n != null) return setTimeout(i, n);
    const { type: s, timeout: a, propCount: c } = Yl(e, t);
    if (!s) return o();
    const u = s + "end";
    let l = 0;
    const d = () => {
      e.removeEventListener(u, p), i();
    }, p = (m) => {
      m.target === e && ++l >= c && d();
    };
    setTimeout(() => {
      l < c && d();
    }, a + 1), e.addEventListener(u, p);
  }
  function Yl(e, t) {
    const n = window.getComputedStyle(e), o = (g) => (n[g] || "").split(", "), r = o(`${Ht}Delay`), i = o(`${Ht}Duration`), s = ca(r, i), a = o(`${Wn}Delay`), c = o(`${Wn}Duration`), u = ca(a, c);
    let l = null, d = 0, p = 0;
    t === Ht ? s > 0 && (l = Ht, d = s, p = i.length) : t === Wn ? u > 0 && (l = Wn, d = u, p = c.length) : (d = Math.max(s, u), l = d > 0 ? s > u ? Ht : Wn : null, p = l ? l === Ht ? i.length : c.length : 0);
    const m = l === Ht && /\b(transform|all)(,|$)/.test(o(`${Ht}Property`).toString());
    return {
      type: l,
      timeout: d,
      propCount: p,
      hasTransform: m
    };
  }
  function ca(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, o) => la(n) + la(e[o])));
  }
  function la(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Fi() {
    return document.body.offsetHeight;
  }
  function Xd(e, t, n) {
    const o = e[Pn];
    o && (t = (t ? [
      t,
      ...o
    ] : [
      ...o
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let cr, ql;
  cr = Symbol("_vod");
  ql = Symbol("_vsh");
  kw = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[cr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: o }) {
      !t != !n && (o ? t ? (o.beforeEnter(e), Bn(e, true), o.enter(e)) : o.leave(e, () => {
        Bn(e, false);
      }) : Bn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Bn(e, t);
    }
  };
  function Bn(e, t) {
    e.style.display = t ? e[cr] : "none", e[ql] = !t;
  }
  const Kl = Symbol("");
  Dw = function(e) {
    const t = Zt();
    if (!t) return;
    const n = t.ut = (r = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((i) => lr(i, r));
    }, o = () => {
      const r = e(t.proxy);
      t.ce ? lr(t.ce, r) : $i(t.subTree, r), n(r);
    };
    vl(() => {
      il(o);
    }), Ro(() => {
      On(o, Ze, {
        flush: "post"
      });
      const r = new MutationObserver(o);
      r.observe(t.subTree.el.parentNode, {
        childList: true
      }), ps(() => r.disconnect());
    });
  };
  function $i(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        $i(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) lr(e.el, t);
    else if (e.type === Oe) e.children.forEach((n) => $i(n, t));
    else if (e.type === ho) {
      let { el: n, anchor: o } = e;
      for (; n && (lr(n, t), n !== o); ) n = n.nextSibling;
    }
  }
  function lr(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let o = "";
      for (const r in t) {
        const i = ef(t[r]);
        n.setProperty(`--${r}`, i), o += `--${r}: ${i};`;
      }
      n[Kl] = o;
    }
  }
  const Qd = /(^|;)\s*display\s*:/;
  function Zd(e, t, n) {
    const o = e.style, r = pe(n);
    let i = false;
    if (n && !r) {
      if (t) if (pe(t)) for (const s of t.split(";")) {
        const a = s.slice(0, s.indexOf(":")).trim();
        n[a] == null && zo(o, a, "");
      }
      else for (const s in t) n[s] == null && zo(o, s, "");
      for (const s in n) s === "display" && (i = true), zo(o, s, n[s]);
    } else if (r) {
      if (t !== n) {
        const s = o[Kl];
        s && (n += ";" + s), o.cssText = n, i = Qd.test(n);
      }
    } else t && e.removeAttribute("style");
    cr in e && (e[cr] = i ? o.display : "", e[ql] && (o.display = "none"));
  }
  const ua = /\s*!important$/;
  function zo(e, t, n) {
    if (W(n)) n.forEach((o) => zo(e, t, o));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const o = eh(e, t);
      ua.test(n) ? e.setProperty(Pt(o), n.replace(ua, ""), "important") : e[o] = n;
    }
  }
  const fa = [
    "Webkit",
    "Moz",
    "ms"
  ], ii = {};
  function eh(e, t) {
    const n = ii[t];
    if (n) return n;
    let o = je(t);
    if (o !== "filter" && o in e) return ii[t] = o;
    o = Or(o);
    for (let r = 0; r < fa.length; r++) {
      const i = fa[r] + o;
      if (i in e) return ii[t] = i;
    }
    return t;
  }
  const da = "http://www.w3.org/1999/xlink";
  function ha(e, t, n, o, r, i = Zu(t)) {
    o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(da, t.slice(6, t.length)) : e.setAttributeNS(da, t, n) : n == null || i && !Pc(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Nt(n) ? String(n) : n);
  }
  function pa(e, t, n, o, r) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? Gl(n) : n);
      return;
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
      const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let s = false;
    if (n === "" || n == null) {
      const a = typeof e[t];
      a === "boolean" ? n = Pc(n) : n == null && a === "string" ? (n = "", s = true) : a === "number" && (n = 0, s = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    s && e.removeAttribute(r || t);
  }
  function th(e, t, n, o) {
    e.addEventListener(t, n, o);
  }
  function nh(e, t, n, o) {
    e.removeEventListener(t, n, o);
  }
  const ga = Symbol("_vei");
  function oh(e, t, n, o, r = null) {
    const i = e[ga] || (e[ga] = {}), s = i[t];
    if (o && s) s.value = o;
    else {
      const [a, c] = rh(t);
      if (o) {
        const u = i[t] = ah(o, r);
        th(e, a, u, c);
      } else s && (nh(e, a, s, c), i[t] = void 0);
    }
  }
  const ma = /(?:Once|Passive|Capture)$/;
  function rh(e) {
    let t;
    if (ma.test(e)) {
      t = {};
      let o;
      for (; o = e.match(ma); ) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Pt(e.slice(2)),
      t
    ];
  }
  let si = 0;
  const ih = Promise.resolve(), sh = () => si || (ih.then(() => si = 0), si = Date.now());
  function ah(e, t) {
    const n = (o) => {
      if (!o._vts) o._vts = Date.now();
      else if (o._vts <= n.attached) return;
      tt(ch(o, n.value), t, 5, [
        o
      ]);
    };
    return n.value = e, n.attached = sh(), n;
  }
  function ch(e, t) {
    if (W(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((o) => (r) => !r._stopped && o && o(r));
    } else return t;
  }
  const ba = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lh = (e, t, n, o, r, i) => {
    const s = r === "svg";
    t === "class" ? Xd(e, o, s) : t === "style" ? Zd(e, n, o) : Sr(t) ? Zi(t) || oh(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : uh(e, t, o, s)) ? (pa(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ha(e, t, o, s, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !pe(o)) ? pa(e, je(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ha(e, t, o, s));
  };
  function uh(e, t, n, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && ba(t) && V(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const r = e.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return ba(t) && pe(n) ? false : t in e;
  }
  let zl, Jl, ur, ya, fh, dh;
  zl = /* @__PURE__ */ new WeakMap();
  Jl = /* @__PURE__ */ new WeakMap();
  ur = Symbol("_moveCb");
  ya = Symbol("_enterCb");
  fh = (e) => (delete e.props.mode, e);
  dh = fh({
    name: "TransitionGroup",
    props: be({}, Bl, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = Zt(), o = hl();
      let r, i;
      return ds(() => {
        if (!r.length) return;
        const s = e.moveClass || `${e.name || "v"}-move`;
        if (!mh(r[0].el, n.vnode.el, s)) {
          r = [];
          return;
        }
        r.forEach(hh), r.forEach(ph);
        const a = r.filter(gh);
        Fi(), a.forEach((c) => {
          const u = c.el, l = u.style;
          ct(u, s), l.transform = l.webkitTransform = l.transitionDuration = "";
          const d = u[ur] = (p) => {
            p && p.target !== u || (!p || /transform$/.test(p.propertyName)) && (u.removeEventListener("transitionend", d), u[ur] = null, jt(u, s));
          };
          u.addEventListener("transitionend", d);
        }), r = [];
      }), () => {
        const s = Z(e), a = Vl(s);
        let c = s.tag || Oe;
        if (r = [], i) for (let u = 0; u < i.length; u++) {
          const l = i[u];
          l.el && l.el instanceof Element && (r.push(l), Qt(l, vo(l, a, o, n)), zl.set(l, l.el.getBoundingClientRect()));
        }
        i = t.default ? fs(t.default()) : [];
        for (let u = 0; u < i.length; u++) {
          const l = i[u];
          l.key != null && Qt(l, vo(l, a, o, n));
        }
        return _e(c, null, i);
      };
    }
  });
  Hw = dh;
  function hh(e) {
    const t = e.el;
    t[ur] && t[ur](), t[ya] && t[ya]();
  }
  function ph(e) {
    Jl.set(e, e.el.getBoundingClientRect());
  }
  function gh(e) {
    const t = zl.get(e), n = Jl.get(e), o = t.left - n.left, r = t.top - n.top;
    if (o || r) {
      const i = e.el.style;
      return i.transform = i.webkitTransform = `translate(${o}px,${r}px)`, i.transitionDuration = "0s", e;
    }
  }
  function mh(e, t, n) {
    const o = e.cloneNode(), r = e[Pn];
    r && r.forEach((a) => {
      a.split(/\s+/).forEach((c) => c && o.classList.remove(c));
    }), n.split(/\s+/).forEach((a) => a && o.classList.add(a)), o.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(o);
    const { hasTransform: s } = Yl(o);
    return i.removeChild(o), s;
  }
  let bh, yh, wh, vh;
  bh = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  yh = {
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
    exact: (e, t) => bh.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  Fw = (e, t) => {
    const n = e._withMods || (e._withMods = {}), o = t.join(".");
    return n[o] || (n[o] = ((r, ...i) => {
      for (let s = 0; s < t.length; s++) {
        const a = yh[t[s]];
        if (a && a(r, t)) return;
      }
      return e(r, ...i);
    }));
  };
  wh = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  $w = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
    return n[o] || (n[o] = ((r) => {
      if (!("key" in r)) return;
      const i = Pt(r.key);
      if (t.some((s) => s === i || wh[s] === i)) return e(r);
    }));
  };
  vh = be({
    patchProp: lh
  }, qd);
  let wa;
  function Th() {
    return wa || (wa = md(vh));
  }
  const Xl = ((...e) => {
    const t = Th().createApp(...e), { mount: n } = t;
    return t.mount = (o) => {
      const r = Sh(o);
      if (!r) return;
      const i = t._component;
      !V(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const s = n(r, false, Eh(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
    }, t;
  });
  function Eh(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Sh(e) {
    return pe(e) ? document.querySelector(e) : e;
  }
  const Ih = "" + new URL("../favicon.svg", import.meta.url).href;
  let Ql, Oh, gt, Zl, Ah, _h, Vn;
  Ql = typeof global == "object" && global && global.Object === Object && global;
  Oh = typeof self == "object" && self && self.Object === Object && self;
  bt = Ql || Oh || Function("return this")();
  gt = bt.Symbol;
  Zl = Object.prototype;
  Ah = Zl.hasOwnProperty;
  _h = Zl.toString;
  Vn = gt ? gt.toStringTag : void 0;
  function Rh(e) {
    var t = Ah.call(e, Vn), n = e[Vn];
    try {
      e[Vn] = void 0;
      var o = true;
    } catch {
    }
    var r = _h.call(e);
    return o && (t ? e[Vn] = n : delete e[Vn]), r;
  }
  var Ch = Object.prototype, Nh = Ch.toString;
  function Ph(e) {
    return Nh.call(e);
  }
  var Lh = "[object Null]", xh = "[object Undefined]", va = gt ? gt.toStringTag : void 0;
  function xt(e) {
    return e == null ? e === void 0 ? xh : Lh : va && va in Object(e) ? Rh(e) : Ph(e);
  }
  nt = function(e) {
    return e != null && typeof e == "object";
  };
  var Mh = "[object Symbol]";
  vs = function(e) {
    return typeof e == "symbol" || nt(e) && xt(e) == Mh;
  };
  kh = function(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; ) r[n] = t(e[n], n, e);
    return r;
  };
  let Ta, Ea;
  Ke = Array.isArray;
  Ta = gt ? gt.prototype : void 0;
  Ea = Ta ? Ta.toString : void 0;
  function eu(e) {
    if (typeof e == "string") return e;
    if (Ke(e)) return kh(e, eu) + "";
    if (vs(e)) return Ea ? Ea.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
  }
  No = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  Dh = function(e) {
    return e;
  };
  var Hh = "[object AsyncFunction]", Fh = "[object Function]", $h = "[object GeneratorFunction]", Uh = "[object Proxy]";
  tu = function(e) {
    if (!No(e)) return false;
    var t = xt(e);
    return t == Fh || t == $h || t == Hh || t == Uh;
  };
  var ai = bt["__core-js_shared__"], Sa = (function() {
    var e = /[^.]+$/.exec(ai && ai.keys && ai.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function jh(e) {
    return !!Sa && Sa in e;
  }
  var Gh = Function.prototype, Wh = Gh.toString;
  function gn(e) {
    if (e != null) {
      try {
        return Wh.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Bh = /[\\^$.*+?()[\]{}|]/g, Vh = /^\[object .+?Constructor\]$/, Yh = Function.prototype, qh = Object.prototype, Kh = Yh.toString, zh = qh.hasOwnProperty, Jh = RegExp("^" + Kh.call(zh).replace(Bh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Xh(e) {
    if (!No(e) || jh(e)) return false;
    var t = tu(e) ? Jh : Vh;
    return t.test(gn(e));
  }
  function Qh(e, t) {
    return e == null ? void 0 : e[t];
  }
  function mn(e, t) {
    var n = Qh(e, t);
    return Xh(n) ? n : void 0;
  }
  let Ui, Ia, Zh;
  Ui = mn(bt, "WeakMap");
  Ia = Object.create;
  Zh = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!No(t)) return {};
      if (Ia) return Ia(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  Oa = (function() {
    try {
      var e = mn(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function ep(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length; ++n < o && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var tp = 9007199254740991, np = /^(?:0|[1-9]\d*)$/;
  nu = function(e, t) {
    var n = typeof e;
    return t = t ?? tp, !!t && (n == "number" || n != "symbol" && np.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  op = function(e, t, n) {
    t == "__proto__" && Oa ? Oa(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  Ts = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var rp = Object.prototype, ip = rp.hasOwnProperty;
  sp = function(e, t, n) {
    var o = e[t];
    (!(ip.call(e, t) && Ts(o, n)) || n === void 0 && !(t in e)) && op(e, t, n);
  };
  var ap = 9007199254740991;
  function Es(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ap;
  }
  ou = function(e) {
    return e != null && Es(e.length) && !tu(e);
  };
  var cp = Object.prototype;
  ru = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || cp;
    return e === n;
  };
  function lp(e, t) {
    for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
    return o;
  }
  var up = "[object Arguments]";
  function Aa(e) {
    return nt(e) && xt(e) == up;
  }
  let iu, fp, dp;
  iu = Object.prototype;
  fp = iu.hasOwnProperty;
  dp = iu.propertyIsEnumerable;
  su = Aa(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Aa : function(e) {
    return nt(e) && fp.call(e, "callee") && !dp.call(e, "callee");
  };
  function hp() {
    return false;
  }
  let au, _a, pp, Ra, gp, mp, bp, yp, wp, vp, Tp, Ep, Sp, Ip, Op, Ap, _p, Rp, Cp, Np, Pp, Lp, xp, Mp, kp, Dp, Hp, Fp, $p, ue;
  au = typeof exports == "object" && exports && !exports.nodeType && exports;
  _a = au && typeof module == "object" && module && !module.nodeType && module;
  pp = _a && _a.exports === au;
  Ra = pp ? bt.Buffer : void 0;
  gp = Ra ? Ra.isBuffer : void 0;
  fr = gp || hp;
  mp = "[object Arguments]";
  bp = "[object Array]";
  yp = "[object Boolean]";
  wp = "[object Date]";
  vp = "[object Error]";
  Tp = "[object Function]";
  Ep = "[object Map]";
  Sp = "[object Number]";
  Ip = "[object Object]";
  Op = "[object RegExp]";
  Ap = "[object Set]";
  _p = "[object String]";
  Rp = "[object WeakMap]";
  Cp = "[object ArrayBuffer]";
  Np = "[object DataView]";
  Pp = "[object Float32Array]";
  Lp = "[object Float64Array]";
  xp = "[object Int8Array]";
  Mp = "[object Int16Array]";
  kp = "[object Int32Array]";
  Dp = "[object Uint8Array]";
  Hp = "[object Uint8ClampedArray]";
  Fp = "[object Uint16Array]";
  $p = "[object Uint32Array]";
  ue = {};
  ue[Pp] = ue[Lp] = ue[xp] = ue[Mp] = ue[kp] = ue[Dp] = ue[Hp] = ue[Fp] = ue[$p] = true;
  ue[mp] = ue[bp] = ue[Cp] = ue[yp] = ue[Np] = ue[wp] = ue[vp] = ue[Tp] = ue[Ep] = ue[Sp] = ue[Ip] = ue[Op] = ue[Ap] = ue[_p] = ue[Rp] = false;
  function Up(e) {
    return nt(e) && Es(e.length) && !!ue[xt(e)];
  }
  function Ss(e) {
    return function(t) {
      return e(t);
    };
  }
  let cu, go, jp, ci, Ln, Ca, Gp, Wp;
  cu = typeof exports == "object" && exports && !exports.nodeType && exports;
  go = cu && typeof module == "object" && module && !module.nodeType && module;
  jp = go && go.exports === cu;
  ci = jp && Ql.process;
  Ln = (function() {
    try {
      var e = go && go.require && go.require("util").types;
      return e || ci && ci.binding && ci.binding("util");
    } catch {
    }
  })();
  Ca = Ln && Ln.isTypedArray;
  lu = Ca ? Ss(Ca) : Up;
  Gp = Object.prototype;
  Wp = Gp.hasOwnProperty;
  Bp = function(e, t) {
    var n = Ke(e), o = !n && su(e), r = !n && !o && fr(e), i = !n && !o && !r && lu(e), s = n || o || r || i, a = s ? lp(e.length, String) : [], c = a.length;
    for (var u in e) (t || Wp.call(e, u)) && !(s && (u == "length" || r && (u == "offset" || u == "parent") || i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || nu(u, c))) && a.push(u);
    return a;
  };
  function uu(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Vp = uu(Object.keys, Object), Yp = Object.prototype, qp = Yp.hasOwnProperty;
  function Kp(e) {
    if (!ru(e)) return Vp(e);
    var t = [];
    for (var n in Object(e)) qp.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function Is(e) {
    return ou(e) ? Bp(e) : Kp(e);
  }
  var zp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jp = /^\w*$/;
  function Os(e, t) {
    if (Ke(e)) return false;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || vs(e) ? true : Jp.test(e) || !zp.test(e) || t != null && e in Object(t);
  }
  var So = mn(Object, "create");
  function Xp() {
    this.__data__ = So ? So(null) : {}, this.size = 0;
  }
  function Qp(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Zp = "__lodash_hash_undefined__", eg = Object.prototype, tg = eg.hasOwnProperty;
  function ng(e) {
    var t = this.__data__;
    if (So) {
      var n = t[e];
      return n === Zp ? void 0 : n;
    }
    return tg.call(t, e) ? t[e] : void 0;
  }
  var og = Object.prototype, rg = og.hasOwnProperty;
  function ig(e) {
    var t = this.__data__;
    return So ? t[e] !== void 0 : rg.call(t, e);
  }
  var sg = "__lodash_hash_undefined__";
  function ag(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = So && t === void 0 ? sg : t, this;
  }
  function pn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  pn.prototype.clear = Xp;
  pn.prototype.delete = Qp;
  pn.prototype.get = ng;
  pn.prototype.has = ig;
  pn.prototype.set = ag;
  function cg() {
    this.__data__ = [], this.size = 0;
  }
  function Fr(e, t) {
    for (var n = e.length; n--; ) if (Ts(e[n][0], t)) return n;
    return -1;
  }
  var lg = Array.prototype, ug = lg.splice;
  function fg(e) {
    var t = this.__data__, n = Fr(t, e);
    if (n < 0) return false;
    var o = t.length - 1;
    return n == o ? t.pop() : ug.call(t, n, 1), --this.size, true;
  }
  function dg(e) {
    var t = this.__data__, n = Fr(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function hg(e) {
    return Fr(this.__data__, e) > -1;
  }
  function pg(e, t) {
    var n = this.__data__, o = Fr(n, e);
    return o < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[o][1] = t, this;
  }
  function Mt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  Mt.prototype.clear = cg;
  Mt.prototype.delete = fg;
  Mt.prototype.get = dg;
  Mt.prototype.has = hg;
  Mt.prototype.set = pg;
  var Io = mn(bt, "Map");
  function gg() {
    this.size = 0, this.__data__ = {
      hash: new pn(),
      map: new (Io || Mt)(),
      string: new pn()
    };
  }
  function mg(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function $r(e, t) {
    var n = e.__data__;
    return mg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function bg(e) {
    var t = $r(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function yg(e) {
    return $r(this, e).get(e);
  }
  function wg(e) {
    return $r(this, e).has(e);
  }
  function vg(e, t) {
    var n = $r(this, e), o = n.size;
    return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
  }
  function kt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  kt.prototype.clear = gg;
  kt.prototype.delete = bg;
  kt.prototype.get = yg;
  kt.prototype.has = wg;
  kt.prototype.set = vg;
  var Tg = "Expected a function";
  function As(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Tg);
    var n = function() {
      var o = arguments, r = t ? t.apply(this, o) : o[0], i = n.cache;
      if (i.has(r)) return i.get(r);
      var s = e.apply(this, o);
      return n.cache = i.set(r, s) || i, s;
    };
    return n.cache = new (As.Cache || kt)(), n;
  }
  As.Cache = kt;
  var Eg = 500;
  function Sg(e) {
    var t = As(e, function(o) {
      return n.size === Eg && n.clear(), o;
    }), n = t.cache;
    return t;
  }
  var Ig = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Og = /\\(\\)?/g, Ag = Sg(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ig, function(n, o, r, i) {
      t.push(r ? i.replace(Og, "$1") : o || n);
    }), t;
  });
  _g = function(e) {
    return e == null ? "" : eu(e);
  };
  function fu(e, t) {
    return Ke(e) ? e : Os(e, t) ? [
      e
    ] : Ag(_g(e));
  }
  function Ur(e) {
    if (typeof e == "string" || vs(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
  }
  function du(e, t) {
    t = fu(t, e);
    for (var n = 0, o = t.length; e != null && n < o; ) e = e[Ur(t[n++])];
    return n && n == o ? e : void 0;
  }
  Rg = function(e, t, n) {
    var o = e == null ? void 0 : du(e, t);
    return o === void 0 ? n : o;
  };
  function Cg(e, t) {
    for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
    return e;
  }
  var hu = uu(Object.getPrototypeOf, Object), Ng = "[object Object]", Pg = Function.prototype, Lg = Object.prototype, pu = Pg.toString, xg = Lg.hasOwnProperty, Mg = pu.call(Object);
  kg = function(e) {
    if (!nt(e) || xt(e) != Ng) return false;
    var t = hu(e);
    if (t === null) return true;
    var n = xg.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && pu.call(n) == Mg;
  };
  var Dg = "[object DOMException]", Hg = "[object Error]";
  function Fg(e) {
    if (!nt(e)) return false;
    var t = xt(e);
    return t == Hg || t == Dg || typeof e.message == "string" && typeof e.name == "string" && !kg(e);
  }
  function $g() {
    this.__data__ = new Mt(), this.size = 0;
  }
  function Ug(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function jg(e) {
    return this.__data__.get(e);
  }
  function Gg(e) {
    return this.__data__.has(e);
  }
  var Wg = 200;
  function Bg(e, t) {
    var n = this.__data__;
    if (n instanceof Mt) {
      var o = n.__data__;
      if (!Io || o.length < Wg - 1) return o.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new kt(o);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  pt = function(e) {
    var t = this.__data__ = new Mt(e);
    this.size = t.size;
  };
  pt.prototype.clear = $g;
  pt.prototype.delete = Ug;
  pt.prototype.get = jg;
  pt.prototype.has = Gg;
  pt.prototype.set = Bg;
  var gu = typeof exports == "object" && exports && !exports.nodeType && exports, Na = gu && typeof module == "object" && module && !module.nodeType && module, Vg = Na && Na.exports === gu, Pa = Vg ? bt.Buffer : void 0, La = Pa ? Pa.allocUnsafe : void 0;
  Yg = function(e, t) {
    if (t) return e.slice();
    var n = e.length, o = La ? La(n) : new e.constructor(n);
    return e.copy(o), o;
  };
  function mu(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
      var s = e[n];
      t(s, n, e) && (i[r++] = s);
    }
    return i;
  }
  function qg() {
    return [];
  }
  var Kg = Object.prototype, zg = Kg.propertyIsEnumerable, xa = Object.getOwnPropertySymbols, Jg = xa ? function(e) {
    return e == null ? [] : (e = Object(e), mu(xa(e), function(t) {
      return zg.call(e, t);
    }));
  } : qg;
  function Xg(e, t, n) {
    var o = t(e);
    return Ke(e) ? o : Cg(o, n(e));
  }
  function ji(e) {
    return Xg(e, Is, Jg);
  }
  var Gi = mn(bt, "DataView"), Wi = mn(bt, "Promise"), Bi = mn(bt, "Set"), Ma = "[object Map]", Qg = "[object Object]", ka = "[object Promise]", Da = "[object Set]", Ha = "[object WeakMap]", Fa = "[object DataView]", Zg = gn(Gi), em = gn(Io), tm = gn(Wi), nm = gn(Bi), om = gn(Ui), Xe = xt;
  (Gi && Xe(new Gi(new ArrayBuffer(1))) != Fa || Io && Xe(new Io()) != Ma || Wi && Xe(Wi.resolve()) != ka || Bi && Xe(new Bi()) != Da || Ui && Xe(new Ui()) != Ha) && (Xe = function(e) {
    var t = xt(e), n = t == Qg ? e.constructor : void 0, o = n ? gn(n) : "";
    if (o) switch (o) {
      case Zg:
        return Fa;
      case em:
        return Ma;
      case tm:
        return ka;
      case nm:
        return Da;
      case om:
        return Ha;
    }
    return t;
  });
  var rm = Object.prototype, im = rm.hasOwnProperty;
  function sm(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && im.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var dr = bt.Uint8Array;
  function _s(e) {
    var t = new e.constructor(e.byteLength);
    return new dr(t).set(new dr(e)), t;
  }
  function am(e, t) {
    var n = _s(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var cm = /\w*$/;
  function lm(e) {
    var t = new e.constructor(e.source, cm.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var $a = gt ? gt.prototype : void 0, Ua = $a ? $a.valueOf : void 0;
  function um(e) {
    return Ua ? Object(Ua.call(e)) : {};
  }
  fm = function(e, t) {
    var n = t ? _s(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var dm = "[object Boolean]", hm = "[object Date]", pm = "[object Map]", gm = "[object Number]", mm = "[object RegExp]", bm = "[object Set]", ym = "[object String]", wm = "[object Symbol]", vm = "[object ArrayBuffer]", Tm = "[object DataView]", Em = "[object Float32Array]", Sm = "[object Float64Array]", Im = "[object Int8Array]", Om = "[object Int16Array]", Am = "[object Int32Array]", _m = "[object Uint8Array]", Rm = "[object Uint8ClampedArray]", Cm = "[object Uint16Array]", Nm = "[object Uint32Array]";
  function Pm(e, t, n) {
    var o = e.constructor;
    switch (t) {
      case vm:
        return _s(e);
      case dm:
      case hm:
        return new o(+e);
      case Tm:
        return am(e);
      case Em:
      case Sm:
      case Im:
      case Om:
      case Am:
      case _m:
      case Rm:
      case Cm:
      case Nm:
        return fm(e, n);
      case pm:
        return new o();
      case gm:
      case ym:
        return new o(e);
      case mm:
        return lm(e);
      case bm:
        return new o();
      case wm:
        return um(e);
    }
  }
  Lm = function(e) {
    return typeof e.constructor == "function" && !ru(e) ? Zh(hu(e)) : {};
  };
  var xm = "[object Map]";
  function Mm(e) {
    return nt(e) && Xe(e) == xm;
  }
  var ja = Ln && Ln.isMap, km = ja ? Ss(ja) : Mm, Dm = "[object Set]";
  function Hm(e) {
    return nt(e) && Xe(e) == Dm;
  }
  var Ga = Ln && Ln.isSet, Fm = Ga ? Ss(Ga) : Hm, $m = 1, bu = "[object Arguments]", Um = "[object Array]", jm = "[object Boolean]", Gm = "[object Date]", Wm = "[object Error]", yu = "[object Function]", Bm = "[object GeneratorFunction]", Vm = "[object Map]", Ym = "[object Number]", wu = "[object Object]", qm = "[object RegExp]", Km = "[object Set]", zm = "[object String]", Jm = "[object Symbol]", Xm = "[object WeakMap]", Qm = "[object ArrayBuffer]", Zm = "[object DataView]", eb = "[object Float32Array]", tb = "[object Float64Array]", nb = "[object Int8Array]", ob = "[object Int16Array]", rb = "[object Int32Array]", ib = "[object Uint8Array]", sb = "[object Uint8ClampedArray]", ab = "[object Uint16Array]", cb = "[object Uint32Array]", ae = {};
  ae[bu] = ae[Um] = ae[Qm] = ae[Zm] = ae[jm] = ae[Gm] = ae[eb] = ae[tb] = ae[nb] = ae[ob] = ae[rb] = ae[Vm] = ae[Ym] = ae[wu] = ae[qm] = ae[Km] = ae[zm] = ae[Jm] = ae[ib] = ae[sb] = ae[ab] = ae[cb] = true;
  ae[Wm] = ae[yu] = ae[Xm] = false;
  function Jo(e, t, n, o, r, i) {
    var s, a = t & $m;
    if (s !== void 0) return s;
    if (!No(e)) return e;
    var c = Ke(e);
    if (c) s = sm(e);
    else {
      var u = Xe(e), l = u == yu || u == Bm;
      if (fr(e)) return Yg(e, a);
      if (u == wu || u == bu || l && !r) s = l ? {} : Lm(e);
      else {
        if (!ae[u]) return r ? e : {};
        s = Pm(e, u, a);
      }
    }
    i || (i = new pt());
    var d = i.get(e);
    if (d) return d;
    i.set(e, s), Fm(e) ? e.forEach(function(g) {
      s.add(Jo(g, t, n, g, e, i));
    }) : km(e) && e.forEach(function(g, w) {
      s.set(w, Jo(g, t, n, w, e, i));
    });
    var p = ji, m = c ? void 0 : p(e);
    return ep(m || e, function(g, w) {
      m && (w = g, g = e[w]), sp(s, w, Jo(g, t, n, w, e, i));
    }), s;
  }
  var lb = 1, ub = 4;
  vu = function(e) {
    return Jo(e, lb | ub);
  };
  var fb = "__lodash_hash_undefined__";
  function db(e) {
    return this.__data__.set(e, fb), this;
  }
  function hb(e) {
    return this.__data__.has(e);
  }
  function hr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new kt(); ++t < n; ) this.add(e[t]);
  }
  hr.prototype.add = hr.prototype.push = db;
  hr.prototype.has = hb;
  function pb(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length; ++n < o; ) if (t(e[n], n, e)) return true;
    return false;
  }
  function gb(e, t) {
    return e.has(t);
  }
  var mb = 1, bb = 2;
  function Tu(e, t, n, o, r, i) {
    var s = n & mb, a = e.length, c = t.length;
    if (a != c && !(s && c > a)) return false;
    var u = i.get(e), l = i.get(t);
    if (u && l) return u == t && l == e;
    var d = -1, p = true, m = n & bb ? new hr() : void 0;
    for (i.set(e, t), i.set(t, e); ++d < a; ) {
      var g = e[d], w = t[d];
      if (o) var k = s ? o(w, g, d, t, e, i) : o(g, w, d, e, t, i);
      if (k !== void 0) {
        if (k) continue;
        p = false;
        break;
      }
      if (m) {
        if (!pb(t, function(A, S) {
          if (!gb(m, S) && (g === A || r(g, A, n, o, i))) return m.push(S);
        })) {
          p = false;
          break;
        }
      } else if (!(g === w || r(g, w, n, o, i))) {
        p = false;
        break;
      }
    }
    return i.delete(e), i.delete(t), p;
  }
  function yb(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(o, r) {
      n[++t] = [
        r,
        o
      ];
    }), n;
  }
  function wb(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(o) {
      n[++t] = o;
    }), n;
  }
  var vb = 1, Tb = 2, Eb = "[object Boolean]", Sb = "[object Date]", Ib = "[object Error]", Ob = "[object Map]", Ab = "[object Number]", _b = "[object RegExp]", Rb = "[object Set]", Cb = "[object String]", Nb = "[object Symbol]", Pb = "[object ArrayBuffer]", Lb = "[object DataView]", Wa = gt ? gt.prototype : void 0, li = Wa ? Wa.valueOf : void 0;
  function xb(e, t, n, o, r, i, s) {
    switch (n) {
      case Lb:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
        e = e.buffer, t = t.buffer;
      case Pb:
        return !(e.byteLength != t.byteLength || !i(new dr(e), new dr(t)));
      case Eb:
      case Sb:
      case Ab:
        return Ts(+e, +t);
      case Ib:
        return e.name == t.name && e.message == t.message;
      case _b:
      case Cb:
        return e == t + "";
      case Ob:
        var a = yb;
      case Rb:
        var c = o & vb;
        if (a || (a = wb), e.size != t.size && !c) return false;
        var u = s.get(e);
        if (u) return u == t;
        o |= Tb, s.set(e, t);
        var l = Tu(a(e), a(t), o, r, i, s);
        return s.delete(e), l;
      case Nb:
        if (li) return li.call(e) == li.call(t);
    }
    return false;
  }
  var Mb = 1, kb = Object.prototype, Db = kb.hasOwnProperty;
  function Hb(e, t, n, o, r, i) {
    var s = n & Mb, a = ji(e), c = a.length, u = ji(t), l = u.length;
    if (c != l && !s) return false;
    for (var d = c; d--; ) {
      var p = a[d];
      if (!(s ? p in t : Db.call(t, p))) return false;
    }
    var m = i.get(e), g = i.get(t);
    if (m && g) return m == t && g == e;
    var w = true;
    i.set(e, t), i.set(t, e);
    for (var k = s; ++d < c; ) {
      p = a[d];
      var A = e[p], S = t[p];
      if (o) var P = s ? o(S, A, p, t, e, i) : o(A, S, p, e, t, i);
      if (!(P === void 0 ? A === S || r(A, S, n, o, i) : P)) {
        w = false;
        break;
      }
      k || (k = p == "constructor");
    }
    if (w && !k) {
      var v = e.constructor, D = t.constructor;
      v != D && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof D == "function" && D instanceof D) && (w = false);
    }
    return i.delete(e), i.delete(t), w;
  }
  var Fb = 1, Ba = "[object Arguments]", Va = "[object Array]", $o = "[object Object]", $b = Object.prototype, Ya = $b.hasOwnProperty;
  function Ub(e, t, n, o, r, i) {
    var s = Ke(e), a = Ke(t), c = s ? Va : Xe(e), u = a ? Va : Xe(t);
    c = c == Ba ? $o : c, u = u == Ba ? $o : u;
    var l = c == $o, d = u == $o, p = c == u;
    if (p && fr(e)) {
      if (!fr(t)) return false;
      s = true, l = false;
    }
    if (p && !l) return i || (i = new pt()), s || lu(e) ? Tu(e, t, n, o, r, i) : xb(e, t, c, n, o, r, i);
    if (!(n & Fb)) {
      var m = l && Ya.call(e, "__wrapped__"), g = d && Ya.call(t, "__wrapped__");
      if (m || g) {
        var w = m ? e.value() : e, k = g ? t.value() : t;
        return i || (i = new pt()), r(w, k, n, o, i);
      }
    }
    return p ? (i || (i = new pt()), Hb(e, t, n, o, r, i)) : false;
  }
  function jr(e, t, n, o, r) {
    return e === t ? true : e == null || t == null || !nt(e) && !nt(t) ? e !== e && t !== t : Ub(e, t, n, o, jr, r);
  }
  var jb = 1, Gb = 2;
  function Wb(e, t, n, o) {
    var r = n.length, i = r;
    if (e == null) return !i;
    for (e = Object(e); r--; ) {
      var s = n[r];
      if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return false;
    }
    for (; ++r < i; ) {
      s = n[r];
      var a = s[0], c = e[a], u = s[1];
      if (s[2]) {
        if (c === void 0 && !(a in e)) return false;
      } else {
        var l = new pt(), d;
        if (!(d === void 0 ? jr(u, c, jb | Gb, o, l) : d)) return false;
      }
    }
    return true;
  }
  function Eu(e) {
    return e === e && !No(e);
  }
  function Bb(e) {
    for (var t = Is(e), n = t.length; n--; ) {
      var o = t[n], r = e[o];
      t[n] = [
        o,
        r,
        Eu(r)
      ];
    }
    return t;
  }
  function Su(e, t) {
    return function(n) {
      return n == null ? false : n[e] === t && (t !== void 0 || e in Object(n));
    };
  }
  function Vb(e) {
    var t = Bb(e);
    return t.length == 1 && t[0][2] ? Su(t[0][0], t[0][1]) : function(n) {
      return n === e || Wb(n, e, t);
    };
  }
  function Yb(e, t) {
    return e != null && t in Object(e);
  }
  function qb(e, t, n) {
    t = fu(t, e);
    for (var o = -1, r = t.length, i = false; ++o < r; ) {
      var s = Ur(t[o]);
      if (!(i = e != null && n(e, s))) break;
      e = e[s];
    }
    return i || ++o != r ? i : (r = e == null ? 0 : e.length, !!r && Es(r) && nu(s, r) && (Ke(e) || su(e)));
  }
  function Kb(e, t) {
    return e != null && qb(e, t, Yb);
  }
  var zb = 1, Jb = 2;
  function Xb(e, t) {
    return Os(e) && Eu(t) ? Su(Ur(e), t) : function(n) {
      var o = Rg(n, e);
      return o === void 0 && o === t ? Kb(n, e) : jr(t, o, zb | Jb);
    };
  }
  function Qb(e) {
    return function(t) {
      return t == null ? void 0 : t[e];
    };
  }
  function Zb(e) {
    return function(t) {
      return du(t, e);
    };
  }
  function ey(e) {
    return Os(e) ? Qb(Ur(e)) : Zb(e);
  }
  ty = function(e) {
    return typeof e == "function" ? e : e == null ? Dh : typeof e == "object" ? Ke(e) ? Xb(e[0], e[1]) : Vb(e) : ey(e);
  };
  function ny(e) {
    return function(t, n, o) {
      for (var r = -1, i = Object(t), s = o(t), a = s.length; a--; ) {
        var c = s[++r];
        if (n(i[c], c, i) === false) break;
      }
      return t;
    };
  }
  oy = ny();
  function ry(e, t) {
    return e && oy(e, t, Is);
  }
  function iy(e, t) {
    return function(n, o) {
      if (n == null) return n;
      if (!ou(n)) return e(n, o);
      for (var r = n.length, i = -1, s = Object(n); ++i < r && o(s[i], i, s) !== false; ) ;
      return n;
    };
  }
  sy = iy(ry);
  function ay(e, t) {
    var n = [];
    return sy(e, function(o, r, i) {
      t(o, r, i) && n.push(o);
    }), n;
  }
  var cy = "[object String]";
  function Vi(e) {
    return typeof e == "string" || !Ke(e) && nt(e) && xt(e) == cy;
  }
  function Rs(e, t) {
    return jr(e, t);
  }
  var ly = "Expected a function";
  function uy(e) {
    if (typeof e != "function") throw new TypeError(ly);
    return function() {
      var t = arguments;
      switch (t.length) {
        case 0:
          return !e.call(this);
        case 1:
          return !e.call(this, t[0]);
        case 2:
          return !e.call(this, t[0], t[1]);
        case 3:
          return !e.call(this, t[0], t[1], t[2]);
      }
      return !e.apply(this, t);
    };
  }
  function fy(e, t) {
    var n = Ke(e) ? mu : ay;
    return n(e, uy(ty(t)));
  }
  const xe = (e) => Vi(e) ? e : JSON.stringify(e), at = {
    unloaded: (...e) => `[loadModules] Module "${xe(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${xe(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${xe(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${xe(e[0])}" failed to load.
Trackback: 
${xe(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${xe(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${xe(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${xe(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${xe(e[0])}" is missing the following dependencies: ${xe(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${xe(e[0])}" is loading its dependencies (${e.slice(1).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${xe(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${xe(e[0])}" dependencies failed to load. 

Trackback: 
${xe(e[1])}`
  }, dy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function Iu(e, t, n = 1e4, o = {}, r = 0, i = 0) {
    var _a2, _b2, _c2, _d2;
    const { logger: s = dy, progressReporter: a, printLog: c = true } = o, u = e.find((g) => g.name === t);
    if (!u) throw new Error(`cannot exactly find module "${t}" from the library`);
    const l = e.findIndex((g) => g.name === u.name);
    if (e[l].status === "loaded") return c && s.info(at.alreadyLoaded(u.name)), Promise.resolve();
    const d = u.dependencies || [], p = e.filter((g) => d.includes(g.name)), m = d.filter((g) => !e.find((w) => w.name === g));
    if (m.length > 0) {
      const g = at.missingDependencies(u.name, m.join(", "));
      return c && s.error(g), Promise.reject(g);
    }
    if (e[l].status === "error") {
      const g = at.errorDetermined(u.name);
      return c && s.info(g), Promise.reject(g);
    }
    if (e[l].status === "loading") return c && s.info(at.alreadyLoading(u.name)), await hy(e, u.name, n, s), Promise.resolve();
    try {
      if (p.length > 0) {
        s.info(at.loadDependencies(u.name, p.map((k) => k.name)));
        const g = r === 0 ? p.length : i;
        let w = 0;
        await Promise.all(p.map(async (k) => {
          var _a3;
          await Iu(e, k.name, n, {
            logger: s,
            progressReporter: a,
            printLog: c
          }, r + 1, i), w++, (_a3 = a == null ? void 0 : a.onOverallProgress) == null ? void 0 : _a3.call(a, w, g);
        })), c && s.info(at.dependenciesReady(u.name));
      }
      e[l].status = "loading", (_a2 = a == null ? void 0 : a.onModuleStart) == null ? void 0 : _a2.call(a, u.displayName);
      try {
        return c && s.info(at.loading(u.name)), await u.moduleInit(n), e[l].status = "loaded", (_b2 = a == null ? void 0 : a.onModuleComplete) == null ? void 0 : _b2.call(a, u.displayName), c && s.info(at.loaded(u.name)), Promise.resolve();
      } catch (g) {
        e[l].status = "error";
        const w = at.error(u.name, Vi(g) ? g : Fg(g) ? g.message : JSON.stringify(g));
        return s.error(w), (_c2 = a == null ? void 0 : a.onModuleError) == null ? void 0 : _c2.call(a, u.displayName, Vi(g) ? new Error(g) : g), Promise.reject(w);
      }
    } catch (g) {
      e[l].status = "error";
      const w = at.error(u.name, g);
      return s.error(w), (_d2 = a == null ? void 0 : a.onModuleError) == null ? void 0 : _d2.call(a, u.displayName, g), Promise.reject(w);
    }
  }
  async function hy(e, t, n = 1e4, o) {
    const r = Date.now();
    return new Promise((i, s) => {
      const a = setInterval(() => {
        const c = e.find((u) => u.name === t);
        if (c && c.status === "loaded") clearInterval(a), i();
        else if (Date.now() - r > n) {
          clearInterval(a);
          const u = new Error(`Load module ${t} timeout`);
          o == null ? void 0 : o.error(u.message), s(u);
        }
      }, 100);
    });
  }
  let py, gy, qa, my, by;
  py = "modulepreload";
  gy = function(e, t) {
    return new URL(e, t).href;
  };
  qa = {};
  ui = function(t, n, o) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      let s = function(l) {
        return Promise.all(l.map((d) => Promise.resolve(d).then((p) => ({
          status: "fulfilled",
          value: p
        }), (p) => ({
          status: "rejected",
          reason: p
        }))));
      };
      const a = document.getElementsByTagName("link"), c = document.querySelector("meta[property=csp-nonce]"), u = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
      r = s(n.map((l) => {
        if (l = gy(l, o), l in qa) return;
        qa[l] = true;
        const d = l.endsWith(".css"), p = d ? '[rel="stylesheet"]' : "";
        if (!!o) for (let w = a.length - 1; w >= 0; w--) {
          const k = a[w];
          if (k.href === l && (!d || k.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${l}"]${p}`)) return;
        const g = document.createElement("link");
        if (g.rel = d ? "stylesheet" : py, d || (g.as = "script"), g.crossOrigin = "", g.href = l, u && g.setAttribute("nonce", u), document.head.appendChild(g), d) return new Promise((w, k) => {
          g.addEventListener("load", w), g.addEventListener("error", () => k(new Error(`Unable to preload CSS for ${l}`)));
        });
      }));
    }
    function i(s) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = s, window.dispatchEvent(a), !a.defaultPrevented) throw s;
    }
    return r.then((s) => {
      for (const a of s || []) a.status === "rejected" && i(a.reason);
      return t().catch(i);
    });
  };
  my = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  by = [
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
  var An = ((e) => (e[e.PERMISSION_DENIED = 1] = "PERMISSION_DENIED", e[e.POSITION_UNAVAILABLE = 2] = "POSITION_UNAVAILABLE", e[e.TIMEOUT = 3] = "TIMEOUT", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.IOS_HTTPS_REQUIRED = 5] = "IOS_HTTPS_REQUIRED", e[e.FIREFOX_PERMISSION_ISSUE = 6] = "FIREFOX_PERMISSION_ISSUE", e))(An || {}), yy = "2.0.4", Yi = 500, Ka = "user-agent", xn = "", za = "?", pr = "function", qt = "undefined", Mn = "object", qi = "string", Me = "browser", St = "cpu", ht = "device", Qe = "engine", Ve = "os", _n = "result", I = "name", y = "type", E = "vendor", O = "version", ke = "architecture", Oo = "major", T = "model", no = "console", q = "mobile", re = "tablet", me = "smarttv", lt = "wearable", Uo = "xr", oo = "embedded", Yn = "inapp", Cs = "brands", ln = "formFactors", Ns = "fullVersionList", Rn = "platform", Ps = "platformVersion", Gr = "bitness", en = "sec-ch-ua", wy = en + "-full-version-list", vy = en + "-arch", Ty = en + "-" + Gr, Ey = en + "-form-factors", Sy = en + "-" + q, Iy = en + "-" + T, Ou = en + "-" + Rn, Oy = Ou + "-version", Au = [
    Cs,
    Ns,
    q,
    T,
    Rn,
    Ps,
    ke,
    ln,
    Gr
  ], jo = "Amazon", yn = "Apple", Ja = "ASUS", Xa = "BlackBerry", an = "Google", Qa = "Huawei", fi = "Lenovo", Za = "Honor", Go = "LG", di = "Microsoft", hi = "Motorola", pi = "Nvidia", ec = "OnePlus", gi = "OPPO", qn = "Samsung", tc = "Sharp", Kn = "Sony", mi = "Xiaomi", bi = "Zebra", nc = "Chrome", oc = "Chromium", Ft = "Chromecast", Xo = "Edge", zn = "Firefox", Jn = "Opera", yi = "Facebook", rc = "Sogou", wn = "Mobile ", Xn = " Browser", Ki = "Windows", Ay = typeof window !== qt, De = Ay && window.navigator ? window.navigator : void 0, Yt = De && De.userAgentData ? De.userAgentData : void 0, _y = function(e, t) {
    var n = {}, o = t;
    if (!gr(t)) {
      o = {};
      for (var r in t) for (var i in t[r]) o[i] = t[r][i].concat(o[i] ? o[i] : []);
    }
    for (var s in e) n[s] = o[s] && o[s].length % 2 === 0 ? o[s].concat(e[s]) : e[s];
    return n;
  }, Wr = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, zi = function(e, t) {
    if (typeof e === Mn && e.length > 0) {
      for (var n in e) if (It(t) == It(e[n])) return true;
      return false;
    }
    return Fn(e) ? It(t) == It(e) : false;
  }, gr = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? gr(e[n]) : false);
  }, Fn = function(e) {
    return typeof e === qi;
  }, wi = function(e) {
    if (e) {
      for (var t = [], n = kn(/\\?\"/g, e).split(","), o = 0; o < n.length; o++) if (n[o].indexOf(";") > -1) {
        var r = mr(n[o]).split(";v=");
        t[o] = {
          brand: r[0],
          version: r[1]
        };
      } else t[o] = mr(n[o]);
      return t;
    }
  }, It = function(e) {
    return Fn(e) ? e.toLowerCase() : e;
  }, vi = function(e) {
    return Fn(e) ? kn(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, Ot = function(e) {
    for (var t in e) {
      var n = e[t];
      typeof n == Mn && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, kn = function(e, t) {
    return Fn(t) ? t.replace(e, xn) : t;
  }, Qn = function(e) {
    return kn(/\\?\"/g, e);
  }, mr = function(e, t) {
    if (Fn(e)) return e = kn(/^\s\s*/, e), typeof t === qt ? e : e.substring(0, Yi);
  }, Ti = function(e, t) {
    if (!(!e || !t)) for (var n = 0, o, r, i, s, a, c; n < t.length && !a; ) {
      var u = t[n], l = t[n + 1];
      for (o = r = 0; o < u.length && !a && u[o]; ) if (a = u[o++].exec(e), a) for (i = 0; i < l.length; i++) c = a[++r], s = l[i], typeof s === Mn && s.length > 0 ? s.length === 2 ? typeof s[1] == pr ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : s.length >= 3 && (typeof s[1] === pr && !(s[1].exec && s[1].test) ? s.length > 3 ? this[s[0]] = c ? s[1].apply(this, s.slice(2)) : void 0 : this[s[0]] = c ? s[1].call(this, c, s[2]) : void 0 : s.length == 3 ? this[s[0]] = c ? c.replace(s[1], s[2]) : void 0 : s.length == 4 ? this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : void 0 : s.length > 4 && (this[s[0]] = c ? s[3].apply(this, [
        c.replace(s[1], s[2])
      ].concat(s.slice(4))) : void 0)) : this[s] = c || void 0;
      n += 2;
    }
  }, ft = function(e, t) {
    for (var n in t) if (typeof t[n] === Mn && t[n].length > 0) {
      for (var o = 0; o < t[n].length; o++) if (zi(t[n][o], e)) return n === za ? void 0 : n;
    } else if (zi(t[n], e)) return n === za ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, ic = {
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
  }, sc = {
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
  }, Ry = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, ac = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          wn + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          Xo + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        I,
        O
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          Jn + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          Jn + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          Jn
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        O,
        [
          I,
          "Maxthon"
        ]
      ],
      [
        /(kindle)\/([\w\.]+)/i,
        /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
        /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
        /(?:ms|\()(ie) ([\w\.]+)/i,
        /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
        /(heytap|ovi|115|surf)browser\/([\d\.]+)/i,
        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
      ],
      [
        I,
        O
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        O,
        [
          I,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Smart " + fi + Xn
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          I,
          /(.+)/,
          "$1 Secure" + Xn
        ],
        O
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          zn + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          Jn + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          Jn + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "MIUI" + Xn
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        O,
        [
          I,
          wn + zn
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        O,
        [
          I,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          I,
          /(.+)/,
          "$1Browser"
        ],
        O
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          I,
          /(.+)/,
          "$1" + Xn
        ],
        O
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          qn + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        O,
        [
          I,
          rc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          I,
          rc + " Mobile"
        ],
        O
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        I,
        O
      ],
      [
        /(lbbrowser|rekonq)/i
      ],
      [
        I
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        O,
        I
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          I,
          yi
        ],
        O,
        [
          y,
          Yn
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
        /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i
      ],
      [
        I,
        O,
        [
          y,
          Yn
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        O,
        [
          I,
          "GSA"
        ],
        [
          y,
          Yn
        ]
      ],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "TikTok"
        ],
        [
          y,
          Yn
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        I,
        [
          y,
          Yn
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        I,
        O
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        O,
        [
          I,
          nc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        O,
        [
          I,
          Xo + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          I,
          nc + " WebView"
        ],
        O
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        O,
        [
          I,
          "Android" + Xn
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        O,
        [
          I,
          wn + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        I,
        O
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        O,
        [
          I,
          wn + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          I,
          wn + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        O,
        I
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        I,
        [
          O,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        I,
        O
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          I,
          wn + zn
        ],
        O
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          I,
          "Netscape"
        ],
        O
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        I,
        O
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        O,
        [
          I,
          zn + " Reality"
        ]
      ],
      [
        /ekiohf.+(flow)\/([\w\.]+)/i,
        /(swiftfox)/i,
        /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
        /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
        /(firefox)\/([\w\.]+)/i,
        /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
        /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
        /\b(links) \(([\w\.]+)/i
      ],
      [
        I,
        [
          O,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        I,
        [
          O,
          /[^\d\.]+./,
          xn
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          ke,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          ke,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          ke,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          ke,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          ke,
          "arm"
        ]
      ],
      [
        /((ppc|powerpc)(64)?)( mac|;|\))/i
      ],
      [
        [
          ke,
          /ower/,
          xn,
          It
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          ke,
          "sparc"
        ]
      ],
      [
        /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      ],
      [
        [
          ke,
          It
        ]
      ]
    ],
    device: [
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [
        T,
        [
          E,
          qn
        ],
        [
          y,
          re
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        T,
        [
          E,
          qn
        ],
        [
          y,
          q
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      ],
      [
        T,
        [
          E,
          yn
        ],
        [
          y,
          q
        ]
      ],
      [
        /\((ipad);[-\w\),; ]+apple/i,
        /applecoremedia\/[\w\.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
      ],
      [
        T,
        [
          E,
          yn
        ],
        [
          y,
          re
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        T,
        [
          E,
          yn
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        T,
        [
          E,
          tc
        ],
        [
          y,
          q
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        T,
        [
          E,
          Za
        ],
        [
          y,
          re
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        T,
        [
          E,
          Za
        ],
        [
          y,
          q
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        T,
        [
          E,
          Qa
        ],
        [
          y,
          re
        ]
      ],
      [
        /(?:huawei)([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
      ],
      [
        T,
        [
          E,
          Qa
        ],
        [
          y,
          q
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          T,
          /_/g,
          " "
        ],
        [
          E,
          mi
        ],
        [
          y,
          re
        ]
      ],
      [
        /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
        /\b; (\w+) build\/hm\1/i,
        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
        /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
        /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
        / ([\w ]+) miui\/v?\d/i
      ],
      [
        [
          T,
          /_/g,
          " "
        ],
        [
          E,
          mi
        ],
        [
          y,
          q
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        T,
        [
          E,
          ec
        ],
        [
          y,
          q
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        T,
        [
          E,
          gi
        ],
        [
          y,
          q
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        T,
        [
          E,
          ft,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": gi
          }
        ],
        [
          y,
          re
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        T,
        [
          E,
          "BLU"
        ],
        [
          y,
          q
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        T,
        [
          E,
          "Vivo"
        ],
        [
          y,
          q
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        T,
        [
          E,
          "Realme"
        ],
        [
          y,
          q
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        T,
        [
          E,
          fi
        ],
        [
          y,
          re
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        T,
        [
          E,
          fi
        ],
        [
          y,
          q
        ]
      ],
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        T,
        [
          E,
          hi
        ],
        [
          y,
          q
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        T,
        [
          E,
          hi
        ],
        [
          y,
          re
        ]
      ],
      [
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        T,
        [
          E,
          Go
        ],
        [
          y,
          re
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        T,
        [
          E,
          Go
        ],
        [
          y,
          q
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        E,
        T,
        [
          y,
          re
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*))/i
      ],
      [
        [
          T,
          /_/g,
          " "
        ],
        [
          y,
          q
        ],
        [
          E,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        T,
        [
          E,
          an
        ],
        [
          y,
          re
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        T,
        [
          E,
          an
        ],
        [
          y,
          q
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        E,
        T
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        T,
        [
          E,
          Kn
        ],
        [
          y,
          q
        ]
      ],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [
        [
          T,
          "Xperia Tablet"
        ],
        [
          E,
          Kn
        ],
        [
          y,
          re
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        T,
        [
          E,
          jo
        ],
        [
          y,
          re
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          T,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          E,
          jo
        ],
        [
          y,
          q
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        T,
        E,
        [
          y,
          re
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /\(bb10; (\w+)/i
      ],
      [
        T,
        [
          E,
          Xa
        ],
        [
          y,
          q
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        T,
        [
          E,
          Ja
        ],
        [
          y,
          re
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        T,
        [
          E,
          Ja
        ],
        [
          y,
          q
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        T,
        [
          E,
          "HTC"
        ],
        [
          y,
          re
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        E,
        [
          T,
          /_/g,
          " "
        ],
        [
          y,
          q
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        T,
        [
          E,
          "TCL"
        ],
        [
          y,
          re
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        T,
        [
          E,
          "TCL"
        ],
        [
          y,
          q
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          E,
          It
        ],
        T,
        [
          y,
          ft,
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
        T,
        [
          E,
          "Acer"
        ],
        [
          y,
          re
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        T,
        [
          E,
          "Meizu"
        ],
        [
          y,
          q
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        T,
        [
          E,
          "Ulefone"
        ],
        [
          y,
          q
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        T,
        [
          E,
          "Energizer"
        ],
        [
          y,
          q
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        T,
        [
          E,
          "Cat"
        ],
        [
          y,
          q
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        T,
        [
          E,
          "Smartfren"
        ],
        [
          y,
          q
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        T,
        [
          E,
          "Nothing"
        ],
        [
          y,
          q
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        T,
        [
          E,
          "Archos"
        ],
        [
          y,
          re
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        T,
        [
          E,
          "Archos"
        ],
        [
          y,
          q
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        T,
        [
          E,
          "HMD"
        ],
        [
          y,
          q
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        E,
        T,
        [
          y,
          re
        ]
      ],
      [
        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
        /; (blu|hmd|imo|infinix|lava|oneplus|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
        /(hp) ([\w ]+\w)/i,
        /(microsoft); (lumia[\w ]+)/i,
        /(oppo) ?([\w ]+) bui/i
      ],
      [
        E,
        T,
        [
          y,
          q
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        E,
        T,
        [
          y,
          re
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        T,
        [
          E,
          di
        ],
        [
          y,
          re
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        T,
        [
          E,
          "Fairphone"
        ],
        [
          y,
          q
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        T,
        [
          E,
          pi
        ],
        [
          y,
          re
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        E,
        T,
        [
          y,
          q
        ]
      ],
      [
        /(kin\.[onetw]{3})/i
      ],
      [
        [
          T,
          /\./g,
          " "
        ],
        [
          E,
          di
        ],
        [
          y,
          q
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        T,
        [
          E,
          bi
        ],
        [
          y,
          re
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        T,
        [
          E,
          bi
        ],
        [
          y,
          q
        ]
      ],
      [
        /smart-tv.+(samsung)/i
      ],
      [
        E,
        [
          y,
          me
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          T,
          /^/,
          "SmartTV"
        ],
        [
          E,
          qn
        ],
        [
          y,
          me
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        E,
        T,
        [
          y,
          me
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          E,
          Go
        ],
        [
          y,
          me
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        E,
        [
          T,
          yn + " TV"
        ],
        [
          y,
          me
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          T,
          Ft + " Third Generation"
        ],
        [
          E,
          an
        ],
        [
          y,
          me
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          T,
          /^/,
          "Chromecast "
        ],
        [
          E,
          an
        ],
        [
          y,
          me
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          T,
          Ft + " Nest Hub"
        ],
        [
          E,
          an
        ],
        [
          y,
          me
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          T,
          Ft
        ],
        [
          E,
          an
        ],
        [
          y,
          me
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        T,
        [
          E,
          yi
        ],
        [
          y,
          me
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        T,
        [
          E,
          jo
        ],
        [
          y,
          me
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        T,
        [
          E,
          pi
        ],
        [
          y,
          me
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        T,
        [
          E,
          tc
        ],
        [
          y,
          me
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        T,
        [
          E,
          Kn
        ],
        [
          y,
          me
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        T,
        [
          E,
          mi
        ],
        [
          y,
          me
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        E,
        T,
        [
          y,
          me
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          E,
          /.+\/(\w+)/,
          "$1",
          ft,
          {
            LG: "lge"
          }
        ],
        [
          T,
          mr
        ],
        [
          y,
          me
        ]
      ],
      [
        /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
      ],
      [
        T,
        [
          y,
          me
        ]
      ],
      [
        /\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          y,
          me
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        T,
        [
          E,
          Kn
        ],
        [
          y,
          no
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        T,
        [
          E,
          di
        ],
        [
          y,
          no
        ]
      ],
      [
        /(ouya)/i,
        /(nintendo) (\w+)/i,
        /(retroid) (pocket ([^\)]+))/i
      ],
      [
        E,
        T,
        [
          y,
          no
        ]
      ],
      [
        /droid.+; (shield)( bui|\))/i
      ],
      [
        T,
        [
          E,
          pi
        ],
        [
          y,
          no
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        T,
        [
          E,
          qn
        ],
        [
          y,
          lt
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        E,
        T,
        [
          y,
          lt
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        T,
        [
          E,
          gi
        ],
        [
          y,
          lt
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        T,
        [
          E,
          yn
        ],
        [
          y,
          lt
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        T,
        [
          E,
          ec
        ],
        [
          y,
          lt
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        T,
        [
          E,
          hi
        ],
        [
          y,
          lt
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        T,
        [
          E,
          Kn
        ],
        [
          y,
          lt
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        T,
        [
          E,
          Go
        ],
        [
          y,
          lt
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        T,
        [
          E,
          bi
        ],
        [
          y,
          lt
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        T,
        [
          E,
          an
        ],
        [
          y,
          Uo
        ]
      ],
      [
        /(pico) (4|neo3(?: link|pro)?)/i
      ],
      [
        E,
        T,
        [
          y,
          Uo
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        T,
        [
          E,
          yi
        ],
        [
          y,
          Uo
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          y,
          Uo
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        E,
        [
          y,
          oo
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        T,
        [
          E,
          jo
        ],
        [
          y,
          oo
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        T,
        [
          E,
          yn
        ],
        [
          y,
          oo
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          y,
          oo
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
      ],
      [
        T,
        [
          y,
          ft,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": re
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          y,
          re
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          y,
          q
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        T,
        [
          E,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          Xo + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        I,
        O
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          "Blink"
        ]
      ],
      [
        /(presto)\/([\w\.]+)/i,
        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
        /ekioh(flow)\/([\w\.]+)/i,
        /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
        /(icab)[\/ ]([23]\.[\d\.]+)/i,
        /\b(libweb)/i
      ],
      [
        I,
        O
      ],
      [
        /ladybird\//i
      ],
      [
        [
          I,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        O,
        I
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          I,
          /N/,
          "R"
        ],
        [
          O,
          ft,
          ic
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        I,
        O
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          O,
          /(;|\))/g,
          "",
          ft,
          ic
        ],
        [
          I,
          Ki
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        I,
        O
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          O,
          /_/g,
          "."
        ],
        [
          I,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          I,
          "macOS"
        ],
        [
          O,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        O,
        [
          I,
          Ft + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        O,
        [
          I,
          Ft + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        O,
        [
          I,
          Ft + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        O,
        [
          I,
          Ft + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        O,
        [
          I,
          Ft
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        O,
        I
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          I,
          /(.+)/,
          "$1 Touch"
        ],
        O
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        I,
        O
      ],
      [
        /\(bb(10);/i
      ],
      [
        O,
        [
          I,
          Xa
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        O,
        [
          I,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        O,
        [
          I,
          zn + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        O,
        [
          I,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          O,
          ft,
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
          I,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        O,
        [
          I,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          I,
          "Chrome OS"
        ],
        O
      ],
      [
        /panasonic;(viera)/i,
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
        I,
        O
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          I,
          "Solaris"
        ],
        O
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        I,
        O
      ]
    ]
  }, Wo = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return Ot.call(e.init, [
      [
        Me,
        [
          I,
          O,
          Oo,
          y
        ]
      ],
      [
        St,
        [
          ke
        ]
      ],
      [
        ht,
        [
          y,
          T,
          E
        ]
      ],
      [
        Qe,
        [
          I,
          O
        ]
      ],
      [
        Ve,
        [
          I,
          O
        ]
      ]
    ]), Ot.call(e.isIgnore, [
      [
        Me,
        [
          O,
          Oo
        ]
      ],
      [
        Qe,
        [
          O
        ]
      ],
      [
        Ve,
        [
          O
        ]
      ]
    ]), Ot.call(e.isIgnoreRgx, [
      [
        Me,
        / ?browser$/i
      ],
      [
        Ve,
        / ?os$/i
      ]
    ]), Ot.call(e.toString, [
      [
        Me,
        [
          I,
          O
        ]
      ],
      [
        St,
        [
          ke
        ]
      ],
      [
        ht,
        [
          E,
          T
        ]
      ],
      [
        Qe,
        [
          I,
          O
        ]
      ],
      [
        Ve,
        [
          I,
          O
        ]
      ]
    ]), e;
  })(), Cy = function(e, t) {
    var n = Wo.init[t], o = Wo.isIgnore[t] || 0, r = Wo.isIgnoreRgx[t] || 0, i = Wo.toString[t] || 0;
    function s() {
      Ot.call(this, n);
    }
    return s.prototype.getItem = function() {
      return e;
    }, s.prototype.withClientHints = function() {
      return Yt ? Yt.getHighEntropyValues(Au).then(function(a) {
        return e.setCH(new _u(a, false)).parseCH().get();
      }) : e.parseCH().get();
    }, s.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != _n && (s.prototype.is = function(a) {
      var c = false;
      for (var u in this) if (this.hasOwnProperty(u) && !zi(o, u) && It(r ? kn(r, this[u]) : this[u]) == It(r ? kn(r, a) : a)) {
        if (c = true, a != qt) break;
      } else if (a == qt && c) {
        c = !c;
        break;
      }
      return c;
    }, s.prototype.toString = function() {
      var a = xn;
      for (var c in i) typeof this[i[c]] !== qt && (a += (a ? " " : xn) + this[i[c]]);
      return a || qt;
    }), Yt || (s.prototype.then = function(a) {
      var c = this, u = function() {
        for (var d in c) c.hasOwnProperty(d) && (this[d] = c[d]);
      };
      u.prototype = {
        is: s.prototype.is,
        toString: s.prototype.toString
      };
      var l = new u();
      return a(l), l;
    }), new s();
  };
  function _u(e, t) {
    if (e = e || {}, Ot.call(this, Au), t) Ot.call(this, [
      [
        Cs,
        wi(e[en])
      ],
      [
        Ns,
        wi(e[wy])
      ],
      [
        q,
        /\?1/.test(e[Sy])
      ],
      [
        T,
        Qn(e[Iy])
      ],
      [
        Rn,
        Qn(e[Ou])
      ],
      [
        Ps,
        Qn(e[Oy])
      ],
      [
        ke,
        Qn(e[vy])
      ],
      [
        ln,
        wi(e[Ey])
      ],
      [
        Gr,
        Qn(e[Ty])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== qt && (this[n] = e[n]);
  }
  function cc(e, t, n, o) {
    return this.get = function(r) {
      return r ? this.data.hasOwnProperty(r) ? this.data[r] : void 0 : this.data;
    }, this.set = function(r, i) {
      return this.data[r] = i, this;
    }, this.setCH = function(r) {
      return this.uaCH = r, this;
    }, this.detectFeature = function() {
      if (De && De.userAgent == this.ua) switch (this.itemType) {
        case Me:
          De.brave && typeof De.brave.isBrave == pr && this.set(I, "Brave");
          break;
        case ht:
          !this.get(y) && Yt && Yt[q] && this.set(y, q), this.get(T) == "Macintosh" && De && typeof De.standalone !== qt && De.maxTouchPoints && De.maxTouchPoints > 2 && this.set(T, "iPad").set(y, re);
          break;
        case Ve:
          !this.get(I) && Yt && Yt[Rn] && this.set(I, Yt[Rn]);
          break;
        case _n:
          var r = this.data, i = function(s) {
            return r[s].getItem().detectFeature().get();
          };
          this.set(Me, i(Me)).set(St, i(St)).set(ht, i(ht)).set(Qe, i(Qe)).set(Ve, i(Ve));
      }
      return this;
    }, this.parseUA = function() {
      return this.itemType != _n && Ti.call(this.data, this.ua, this.rgxMap), this.itemType == Me && this.set(Oo, vi(this.get(O))), this;
    }, this.parseCH = function() {
      var r = this.uaCH, i = this.rgxMap;
      switch (this.itemType) {
        case Me:
        case Qe:
          var s = r[Ns] || r[Cs], a;
          if (s) for (var c in s) {
            var u = s[c].brand || s[c], l = s[c].version;
            this.itemType == Me && !/not.a.brand/i.test(u) && (!a || /Chrom/.test(a) && u != oc || a == Xo && /WebView2/.test(u)) && (u = ft(u, Ry), a = this.get(I), a && !/Chrom/.test(a) && /Chrom/.test(u) || this.set(I, u).set(O, l).set(Oo, vi(l)), a = u), this.itemType == Qe && u == oc && this.set(O, l);
          }
          break;
        case St:
          var d = r[ke];
          d && (d && r[Gr] == "64" && (d += "64"), Ti.call(this.data, d + ";", i));
          break;
        case ht:
          if (r[q] && this.set(y, q), r[T] && (this.set(T, r[T]), !this.get(y) || !this.get(E))) {
            var p = {};
            Ti.call(p, "droid 9; " + r[T] + ")", i), !this.get(y) && p.type && this.set(y, p.type), !this.get(E) && p.vendor && this.set(E, p.vendor);
          }
          if (r[ln]) {
            var m;
            if (typeof r[ln] != "string") for (var g = 0; !m && g < r[ln].length; ) m = ft(r[ln][g++], sc);
            else m = ft(r[ln], sc);
            this.set(y, m);
          }
          break;
        case Ve:
          var w = r[Rn];
          if (w) {
            var k = r[Ps];
            w == Ki && (k = parseInt(vi(k), 10) >= 13 ? "11" : "10"), this.set(I, w).set(O, k);
          }
          this.get(I) == Ki && r[T] == "Xbox" && this.set(I, "Xbox").set(O, void 0);
          break;
        case _n:
          var A = this.data, S = function(P) {
            return A[P].getItem().setCH(r).parseCH().get();
          };
          this.set(Me, S(Me)).set(St, S(St)).set(ht, S(ht)).set(Qe, S(Qe)).set(Ve, S(Ve));
      }
      return this;
    }, Ot.call(this, [
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
        n
      ],
      [
        "data",
        Cy(this, e)
      ]
    ]), this;
  }
  function Ct(e, t, n) {
    if (typeof e === Mn ? (gr(e, true) ? (typeof t === Mn && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === qi && !gr(t, true) && (n = t, t = void 0), n && typeof n.append === pr) {
      var o = {};
      n.forEach(function(c, u) {
        o[u] = c;
      }), n = o;
    }
    if (!(this instanceof Ct)) return new Ct(e, t, n).getResult();
    var r = typeof e === qi ? e : n && n[Ka] ? n[Ka] : De && De.userAgent ? De.userAgent : xn, i = new _u(n, true), s = t ? _y(ac, t) : ac, a = function(c) {
      return c == _n ? function() {
        return new cc(c, r, s, i).set("ua", r).set(Me, this.getBrowser()).set(St, this.getCPU()).set(ht, this.getDevice()).set(Qe, this.getEngine()).set(Ve, this.getOS()).get();
      } : function() {
        return new cc(c, r, s[c], i).parseUA().get();
      };
    };
    return Ot.call(this, [
      [
        "getBrowser",
        a(Me)
      ],
      [
        "getCPU",
        a(St)
      ],
      [
        "getDevice",
        a(ht)
      ],
      [
        "getEngine",
        a(Qe)
      ],
      [
        "getOS",
        a(Ve)
      ],
      [
        "getResult",
        a(_n)
      ],
      [
        "getUA",
        function() {
          return r;
        }
      ],
      [
        "setUA",
        function(c) {
          return Fn(c) && (r = c.length > Yi ? mr(c, Yi) : c), this;
        }
      ]
    ]).setUA(r), this;
  }
  Ct.VERSION = yy;
  Ct.BROWSER = Wr([
    I,
    O,
    Oo,
    y
  ]);
  Ct.CPU = Wr([
    ke
  ]);
  Ct.DEVICE = Wr([
    T,
    E,
    y,
    no,
    q,
    me,
    re,
    lt,
    oo
  ]);
  Ct.ENGINE = Ct.OS = Wr([
    I,
    O
  ]);
  Ny = class {
    constructor() {
      __publicField(this, "parser");
      this.parser = new Ct(navigator.userAgent);
    }
    get isMobile() {
      return this.parser.getDevice().type === "mobile";
    }
    get isTablet() {
      return this.parser.getDevice().type === "tablet";
    }
    get isUnknown() {
      return typeof this.parser.getDevice().type > "u";
    }
    get browser() {
      return this.parser.getBrowser().name || "";
    }
    get engine() {
      return this.parser.getEngine().name || "";
    }
    get os() {
      return this.parser.getOS().name || "";
    }
  };
  var lc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(lc || (lc = {}));
  class Py {
    constructor(t, n) {
      __publicField(this, "db", null);
      __publicField(this, "initialised", false);
      this.dbName = t, this.storeName = n, this.init();
    }
    init() {
      return this.initialised ? Promise.resolve() : new Promise((t, n) => {
        const o = indexedDB.open(this.dbName, 1);
        o.onupgradeneeded = (r) => {
          const i = r.target.result;
          i.objectStoreNames.contains(this.storeName) || i.createObjectStore(this.storeName);
        }, o.onsuccess = (r) => {
          this.db = r.target.result, t();
        }, o.onerror = (r) => {
          n(r.target.error);
        };
      });
    }
    async set(t, n) {
      return this.db ? new Promise((o, r) => {
        if (!this.db) return Promise.reject("Database has not been initialised");
        const a = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).put(vu(n), t);
        a.onsuccess = () => o(), a.onerror = () => r("Failed to set value");
      }) : Promise.reject("Database not initialized");
    }
    async get(t) {
      return this.db ? new Promise((n, o) => {
        if (!this.db) {
          o("Database has not been initialised");
          return;
        }
        const s = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).get(t);
        s.onsuccess = () => n(s.result), s.onerror = () => o("Failed to get value");
      }) : Promise.reject("Database not initialized");
    }
    async save() {
    }
    async exportToJson() {
      return this.db ? new Promise((t, n) => {
        if (!this.db) return Promise.reject("Database has not been initialised");
        const i = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).getAll();
        i.onsuccess = () => {
          const s = i.result.reduce((a, c, u) => (a[u] = c, a), {});
          t(JSON.stringify(s, null, 2));
        }, i.onerror = () => {
          n("Failed to export data to JSON");
        };
      }) : Promise.reject("Database not initialized");
    }
  }
  let mt, Ly;
  mt = new Py("user-data-db", "user-data");
  Uw = mt.set.bind(mt);
  Ei = mt.get.bind(mt);
  jw = mt.save.bind(mt);
  Ly = mt.init.bind(mt);
  mt.exportToJson.bind(mt);
  const { sin: $e, cos: xy, sqrt: Ls, abs: br, PI: Ne } = Math, uc = 6378245, fc = 0.006693421622965823;
  function Ru(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function My(e, t) {
    let n = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * Ls(br(e));
    return n += (20 * $e(6 * e * Ne) + 20 * $e(2 * e * Ne)) * 2 / 3, n += (20 * $e(t * Ne) + 40 * $e(t / 3 * Ne)) * 2 / 3, n += (160 * $e(t / 12 * Ne) + 320 * $e(t * Ne / 30)) * 2 / 3, n;
  }
  function ky(e, t) {
    let n = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * Ls(br(e));
    return n += (20 * $e(6 * e * Ne) + 20 * $e(2 * e * Ne)) * 2 / 3, n += (20 * $e(e * Ne) + 40 * $e(e / 3 * Ne)) * 2 / 3, n += (150 * $e(e / 12 * Ne) + 300 * $e(e / 30 * Ne)) * 2 / 3, n;
  }
  function Dy(e, t) {
    let n = ky(e - 105, t - 35), o = My(e - 105, t - 35);
    const r = t / 180 * Ne;
    let i = $e(r);
    i = 1 - fc * i * i;
    const s = Ls(i);
    return n = n * 180 / (uc / s * xy(r) * Ne), o = o * 180 / (uc * (1 - fc) / (i * s) * Ne), [
      n,
      o
    ];
  }
  function Jt(e) {
    const [t, n] = e;
    if (!Ru(t, n)) return [
      t,
      n
    ];
    const o = Dy(t, n);
    return [
      t + o[0],
      n + o[1]
    ];
  }
  function Dn(e) {
    const [t, n] = e;
    if (!Ru(t, n)) return [
      t,
      n
    ];
    let [o, r] = [
      t,
      n
    ], i = Jt([
      o,
      r
    ]), s = i[0] - t, a = i[1] - n;
    for (; br(s) > 1e-6 || br(a) > 1e-6; ) o -= s, r -= a, i = Jt([
      o,
      r
    ]), s = i[0] - t, a = i[1] - n;
    return [
      o,
      r
    ];
  }
  const { sin: yr, cos: wr, atan2: Cu, sqrt: Nu, PI: Hy } = Math, vr = Hy * 3e3 / 180;
  function Cn(e) {
    const [t, n] = e, o = t - 65e-4, r = n - 6e-3, i = Nu(o * o + r * r) - 2e-5 * yr(r * vr), s = Cu(r, o) - 3e-6 * wr(o * vr), a = i * wr(s), c = i * yr(s);
    return [
      a,
      c
    ];
  }
  function Hn(e) {
    const [t, n] = e, o = t, r = n, i = Nu(o * o + r * r) + 2e-5 * yr(r * vr), s = Cu(r, o) + 3e-6 * wr(o * vr), a = i * wr(s) + 65e-4, c = i * yr(s) + 6e-3;
    return [
      a,
      c
    ];
  }
  const dc = 180 / Math.PI, hc = Math.PI / 180, Tr = 6378137, $t = 20037508342789244e-9;
  function Bo(e) {
    return [
      e[0] * dc / Tr,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / Tr))) * dc
    ];
  }
  function Br(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, n = [
      Tr * t * hc,
      Tr * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * hc))
    ];
    return n[0] > $t && (n[0] = $t), n[0] < -$t && (n[0] = -$t), n[1] > $t && (n[1] = $t), n[1] < -$t && (n[1] = -$t), n;
  }
  const { abs: Er } = Math, pc = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], gc = [
    75,
    60,
    45,
    30,
    15,
    0
  ], Fy = [
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
  ], $y = [
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
  function Pu(e, t, n) {
    const o = Er(t) / n[9];
    let r = n[0] + n[1] * Er(e), i = n[2] + n[3] * o + n[4] * Math.pow(o, 2) + n[5] * Math.pow(o, 3) + n[6] * Math.pow(o, 4) + n[7] * Math.pow(o, 5) + n[8] * Math.pow(o, 6);
    return r *= e < 0 ? -1 : 1, i *= t < 0 ? -1 : 1, [
      r,
      i
    ];
  }
  function Vr(e) {
    const [t, n] = e;
    let o = [];
    for (let r = 0; r < gc.length; r++) if (Er(n) > gc[r]) {
      o = $y[r];
      break;
    }
    return Pu(t, n, o);
  }
  function Vo(e) {
    const [t, n] = e;
    let o = [];
    for (let r = 0; r < pc.length; r++) if (Er(n) >= pc[r]) {
      o = Fy[r];
      break;
    }
    return Pu(t, n, o);
  }
  function Ut(e, t) {
    if (!e) throw new Error(t);
  }
  function Lu(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function mc(e) {
    return !isNaN(Number(e)) && e !== null && !Lu(e);
  }
  function qe(...e) {
    const t = e.length - 1;
    return function(...n) {
      let o = t, r = e[t].apply(null, n);
      for (; o--; ) r = e[o].call(null, r);
      return r;
    };
  }
  function xu(e, t, n = false) {
    if (e === null) return;
    let o, r, i, s, a, c, u = 0, l = 0, d, p;
    const { type: m } = e, g = m === "FeatureCollection", w = m === "Feature", k = g ? e.features.length : 1;
    for (let A = 0; A < k; A++) {
      d = g ? e.features[A].geometry : w ? e.geometry : e, p = d ? d.type === "GeometryCollection" : false, c = p ? d.geometries.length : 1;
      for (let S = 0; S < c; S++) {
        let P = 0, v = 0;
        if (s = p ? d.geometries[S] : d, s === null) continue;
        const D = s.type;
        switch (u = n && (D === "Polygon" || D === "MultiPolygon") ? 1 : 0, D) {
          case null:
            break;
          case "Point":
            if (a = s.coordinates, t(a, l, A, P, v) === false) return false;
            l++, P++;
            break;
          case "LineString":
          case "MultiPoint":
            for (a = s.coordinates, o = 0; o < a.length; o++) {
              if (t(a[o], l, A, P, v) === false) return false;
              l++, D === "MultiPoint" && P++;
            }
            D === "LineString" && P++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (a = s.coordinates, o = 0; o < a.length; o++) {
              for (r = 0; r < a[o].length - u; r++) {
                if (t(a[o][r], l, A, P, v) === false) return false;
                l++;
              }
              D === "MultiLineString" && P++, D === "Polygon" && v++;
            }
            D === "Polygon" && P++;
            break;
          case "MultiPolygon":
            for (a = s.coordinates, o = 0; o < a.length; o++) {
              for (v = 0, r = 0; r < a[o].length; r++) {
                for (i = 0; i < a[o][r].length - u; i++) {
                  if (t(a[o][r][i], l, A, P, v) === false) return false;
                  l++;
                }
                v++;
              }
              P++;
            }
            break;
          case "GeometryCollection":
            for (o = 0; o < s.geometries.length; o++) if (xu(s.geometries[o], t, n) === false) return false;
            break;
          default:
            throw new Error("Unknown Geometry Type");
        }
      }
    }
  }
  var he;
  (function(e) {
    e.WGS84 = "WGS84", e.WGS1984 = "WGS84", e.EPSG4326 = "WGS84", e.GCJ02 = "GCJ02", e.AMap = "GCJ02", e.BD09 = "BD09", e.BD09LL = "BD09", e.Baidu = "BD09", e.BMap = "BD09", e.BD09MC = "BD09MC", e.BD09Meter = "BD09MC", e.EPSG3857 = "EPSG3857", e.EPSG900913 = "EPSG3857", e.EPSG102100 = "EPSG3857", e.WebMercator = "EPSG3857", e.WM = "EPSG3857";
  })(he || (he = {}));
  const Uy = {
    to: {
      [he.GCJ02]: Jt,
      [he.BD09]: qe(Hn, Jt),
      [he.BD09MC]: qe(Vr, Hn, Jt),
      [he.EPSG3857]: Br
    }
  }, jy = {
    to: {
      [he.WGS84]: Dn,
      [he.BD09]: Hn,
      [he.BD09MC]: qe(Vr, Hn),
      [he.EPSG3857]: qe(Br, Dn)
    }
  }, Gy = {
    to: {
      [he.WGS84]: qe(Dn, Cn),
      [he.GCJ02]: Cn,
      [he.EPSG3857]: qe(Br, Dn, Cn),
      [he.BD09MC]: Vr
    }
  }, Wy = {
    to: {
      [he.WGS84]: Bo,
      [he.GCJ02]: qe(Jt, Bo),
      [he.BD09]: qe(Hn, Jt, Bo),
      [he.BD09MC]: qe(Vr, Hn, Jt, Bo)
    }
  }, By = {
    to: {
      [he.WGS84]: qe(Dn, Cn, Vo),
      [he.GCJ02]: qe(Cn, Vo),
      [he.EPSG3857]: qe(Br, Dn, Cn, Vo),
      [he.BD09]: Vo
    }
  }, Vy = {
    WGS84: Uy,
    GCJ02: jy,
    BD09: Gy,
    EPSG3857: Wy,
    BD09MC: By
  };
  var Yy = Vy;
  function qy(e, t, n) {
    if (Ut(!!e, "The args[0] input coordinate is required"), Ut(!!t, "The args[1] original coordinate system is required"), Ut(!!n, "The args[2] target coordinate system is required"), t === n) return e;
    const o = Yy[t];
    Ut(!!o, `Invalid original coordinate system: ${t}`);
    const r = o.to[n];
    Ut(!!r, `Invalid target coordinate system: ${n}`);
    const i = typeof e;
    if (Ut(i === "string" || i === "object", `Invalid input coordinate type: ${i}`), i === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let s = false;
    Lu(e) && (Ut(e.length >= 2, `Invalid input coordinate: ${e}`), Ut(mc(e[0]) && mc(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), s = true);
    const a = r;
    return s ? a(e) : (xu(e, (c) => {
      [c[0], c[1]] = a(c);
    }), e);
  }
  const Si = Object.assign(Object.assign({}, he), {
    CRSTypes: he,
    transform: qy
  });
  function bc(e) {
    if (!Ky(e)) throw new Error("Invalid geographic point: longitude and latitude must be numbers");
    const t = Si.transform([
      e.longitude,
      e.latitude
    ], Si.WGS84, Si.GCJ02);
    return {
      longitude: t[0],
      latitude: t[1]
    };
  }
  function Ky(e) {
    return typeof (e == null ? void 0 : e.longitude) == "number" && typeof (e == null ? void 0 : e.latitude) == "number" && !isNaN(e.longitude) && !isNaN(e.latitude);
  }
  class zy {
    constructor() {
      __publicField(this, "platform", new Ny());
    }
    get isIOS() {
      return this.platform.os.toLowerCase().includes("ios");
    }
    get isMobile() {
      return this.platform.isMobile || this.platform.isTablet;
    }
    validateEnvironment() {
      if (!navigator.geolocation) {
        fy(new Error("Geolocation is not supported by this browser."));
        return;
      }
      if (this.isIOS && window.location.protocol !== "https:") throw {
        code: An.IOS_HTTPS_REQUIRED,
        message: "Geolocation requires HTTPS on iOS"
      };
    }
    getOptions() {
      return {
        enableHighAccuracy: !this.isMobile,
        timeout: this.isMobile ? 2e4 : 3e4,
        maximumAge: this.isMobile ? 5e3 : 1e4
      };
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return console.warn("navigator.permissions is not supported in this browser"), new Promise((o) => {
        navigator.geolocation.getCurrentPosition(() => o("granted"), (r) => {
          r.code === r.PERMISSION_DENIED ? o("denied") : o("prompt");
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
      const n = (await navigator.permissions.query({
        name: "geolocation"
      })).state;
      return console.log("GPS permission status: ", n), n;
    }
    async getCurrentPosition() {
      var _a2;
      try {
        this.validateEnvironment();
      } catch (o) {
        return console.error("[geolocation] Environment validation failed"), Promise.reject(o);
      }
      const t = ((_a2 = await Ei("settings")) == null ? void 0 : _a2.geolocationCorrection) ?? false, n = this.getOptions();
      return console.info("[geolocation] Requesting current position from GPS"), new Promise((o, r) => {
        navigator.geolocation.getCurrentPosition((i) => {
          if (console.info("[geolocation] Successfully retrieved current position"), t) {
            const s = bc({
              latitude: i.coords.latitude,
              longitude: i.coords.longitude
            });
            o(s);
          } else o({
            latitude: i.coords.latitude,
            longitude: i.coords.longitude
          });
        }, (i) => {
          console.error(`[geolocation] Failed to get current position: code ${i.code}`), r({
            code: i.code,
            message: i.message
          });
        }, n);
      });
    }
    async watchPosition(t) {
      var _a2, _b2;
      try {
        this.validateEnvironment();
      } catch (i) {
        return console.error("[geolocation] Environment validation failed for watch position"), Promise.reject(i);
      }
      const n = this.getOptions();
      console.info("[geolocation] Starting position watch");
      const o = ((_a2 = await Ei("settings")) == null ? void 0 : _a2.watchCompatibilityMode) ?? true, r = ((_b2 = await Ei("settings")) == null ? void 0 : _b2.geolocationCorrection) ?? false;
      return o ? (console.info("[geolocation] Using compatibility mode for position watch"), new Promise((i) => {
        let s = null;
        i(setInterval(async () => {
          this.getCurrentPosition().then((a) => {
            s && Rs(s, a) || (s = a, console.info("[geolocation] Position updated via compatibility mode"), t(Object.freeze(a)));
          }).catch((a) => {
            throw console.error("[geolocation] Error in compatibility mode watch:", a), new Error(`Error while watching the geolocation in compatibility mode [GPS]. Code: ${a.code}, Msg: ${a.message}`);
          });
        }, 5e3));
      })) : new Promise((i) => {
        const s = navigator.geolocation.watchPosition((a) => {
          console.info("[geolocation] Position updated via native watch"), t(r ? bc({
            latitude: a.coords.latitude,
            longitude: a.coords.longitude
          }) : {
            latitude: a.coords.latitude,
            longitude: a.coords.longitude
          });
        }, (a) => {
          throw console.error("[geolocation] Error in native watch:", a), new Error(`Error while watching the geolocation [GPS]. Code: ${a.code}, Msg: ${a.message}`);
        }, n);
        i(s);
      });
    }
    clearWatch(t) {
      console.info("[geolocation] Clearing position watch"), navigator.geolocation.clearWatch(t);
    }
  }
  const Kt = [];
  function Jy(e) {
    const t = {
      id: (Kt.length > 0 ? Kt[Kt.length - 1].id : 0) + 1,
      callback: e
    };
    return Kt.push(t), t.id;
  }
  function Xy(e) {
    Kt.splice(Kt.findIndex((t) => t.id === e), 1);
  }
  let Yo = -1, yc = {
    latitude: 0,
    longitude: 0
  };
  const wc = "https://ipapi.co/json/";
  class vc {
    async getPermissionStatus() {
      try {
        return await fetch(wc), "granted";
      } catch {
        return "denied";
      }
    }
    async fetchRaw(t = 1e4) {
      const n = new Promise(async (r, i) => {
        try {
          const s = await fetch(wc);
          if (!s.ok) throw new Error(`HTTP error! Status: ${s.status}`);
          r(s.json());
        } catch {
          i(new Error("Failed to fetch IP geolocation data"));
        }
      }), o = new Promise((r, i) => {
        setTimeout(() => i(new Error("Request IP geolocation data timed out")), t);
      });
      return Promise.race([
        n,
        o
      ]);
    }
    async getInfo() {
      const t = await this.fetchRaw();
      if (!t) throw new Error("Failed to fetch IP geolocation data");
      return {
        city: t.cityName,
        latitude: t.latitude,
        longitude: t.longitude
      };
    }
    async getCurrentPosition() {
      console.info("[geolocation] Getting current position from IP");
      const t = await this.getInfo();
      return console.info("[geolocation] Successfully retrieved current position from IP"), {
        latitude: t.latitude,
        longitude: t.longitude
      };
    }
    watchPosition(t) {
      console.info("[geolocation] Starting IP geolocation watch");
      const n = Jy(t);
      return new Promise((o) => {
        if (Yo === -1) {
          const r = () => {
            this.getCurrentPosition().then((i) => {
              Rs(i, yc) || (console.info("[geolocation] IP geolocation position updated"), Kt.forEach((s) => s.callback(i)), yc = vu(i));
            }).catch((i) => {
              throw console.error("[geolocation] Error in IP geolocation watch:", i), new Error(`Error while watching the geolocation [IP]. Code: ${An.UNKNOWN}, Msg: ${i}`);
            });
          };
          Yo = setInterval(() => r(), 2e4), console.info("[geolocation] IP geolocation watch interval started"), r();
        }
        o(n);
      });
    }
    clearWatch(t) {
      console.info("[geolocation] Clearing IP geolocation watch handler"), Xy(t), Kt.length === 0 && (console.info("[geolocation] Stopping IP geolocation watch interval"), clearInterval(Yo), Yo = -1);
    }
  }
  const un = [];
  function Tc(e, t, n = false) {
    const o = {
      id: (un.length > 0 ? un[un.length - 1].id : 0) + 1,
      type: e,
      callback: t,
      triggered: false,
      once: n
    };
    return un.push(o), o.id;
  }
  function Ii(e, t, ...n) {
    un.filter((o) => o.type === e && !(o.once && o.triggered)).forEach((o) => {
      o.triggered = true, o.callback(Object.freeze(t), ...n);
    });
  }
  function Qy(e) {
    un.splice(un.findIndex((t) => t.id === e), 1);
  }
  class Zy {
    constructor() {
      __publicField(this, "presentLocation", {
        latitude: 0,
        longitude: 0
      });
      __publicField(this, "serviceRunning", false);
      __publicField(this, "built", false);
      __publicField(this, "backend");
      __publicField(this, "usingGPS", false);
      __publicField(this, "watchHandler", -1);
      __publicField(this, "addListener", (t) => Tc("change", t));
      __publicField(this, "addHandler", (t, n, o) => Tc(t, n, o));
      __publicField(this, "removeListener", (t) => Qy(t));
    }
    async build(t = async () => {
    }) {
      console.info("[geolocation] Building geolocation service");
      const n = new zy(), o = () => {
        this.backend = new vc(), console.log("Using IP Geolocation backend"), this.built = true;
      }, r = async (i) => {
        switch (console.info(`[geolocation] GPS permission state: ${i}`), i) {
          case "granted": {
            console.info("[geolocation] GPS permission granted, testing GPS functionality");
            try {
              await n.getCurrentPosition(), this.backend = n, console.info("[geolocation] GPS backend initialized successfully"), this.usingGPS = true, this.built = true;
            } catch (s) {
              const a = s;
              console.error("[geolocation] GPS backend initialization failed:", a.message), a.code === An.IOS_HTTPS_REQUIRED && console.warn("[geolocation] iOS HTTPS required for geolocation, falling back to IP"), o();
            }
            break;
          }
          case "prompt": {
            if (console.info("[geolocation] GPS permission prompt required"), await t(i)) return console.info("[geolocation] User granted permission via prompt"), r("granted");
            if (console.warn("[geolocation] User denied or cancelled permission prompt"), await n.getPermissionStatus() === "granted") return console.info("[geolocation] Actual permission status is granted"), r("granted");
            console.info("[geolocation] Falling back to IP geolocation"), o();
            break;
          }
          case "denied": {
            console.warn("[geolocation] GPS permission denied, using IP geolocation"), o();
            break;
          }
          default:
            console.warn("[geolocation] Unknown permission state, using IP geolocation"), o();
            break;
        }
      };
      if ("permissions" in navigator) {
        console.info("[geolocation] Using permissions API for GPS permission");
        try {
          const i = await navigator.permissions.query({
            name: "geolocation"
          });
          await r(i.state), i.addEventListener("change", async () => {
            console.info(`[geolocation] Permission state changed to: ${i.state}`), i.state === "granted" ? (console.info("[geolocation] Re-initializing with GPS backend"), await r("granted")) : i.state === "denied" && (console.warn("[geolocation] Permission denied, switching to IP backend"), o());
          });
        } catch (i) {
          console.warn("[geolocation] Permissions API failed, using legacy checking:", i);
          const s = await n.getPermissionStatus();
          await r(s);
        }
      } else {
        console.warn("[geolocation] Permissions API not supported, using legacy permission checking");
        const i = await n.getPermissionStatus();
        await r(i);
      }
    }
    get present() {
      return Object.freeze(this.presentLocation);
    }
    async refresh() {
      if (!this.built) throw console.error("[geolocation] Service not built"), new Error("Geolocation service not built");
      if (!this.backend) throw console.error("[geolocation] Backend not initialised"), new Error("Backend not initialised");
      if (!this.serviceRunning) throw console.error("[geolocation] Service not running"), new Error("Updater service not running");
      console.info("[geolocation] Refreshing location");
      try {
        const t = await this.backend.getCurrentPosition();
        return Rs(t, this.presentLocation) ? (console.info("[geolocation] Location unchanged"), Object.freeze(t)) : (this.presentLocation = t, console.info("[geolocation] Location updated successfully"), Ii("change", t), Object.freeze(t));
      } catch (t) {
        const n = t;
        if (console.error("[geolocation] Location refresh failed:", n.message), n.code === An.TIMEOUT || n.code === An.IOS_HTTPS_REQUIRED) return console.warn("[geolocation] Falling back to IP geolocation"), this.backend = new vc(), this.refresh();
        throw t;
      }
    }
    get isStarted() {
      return this.serviceRunning;
    }
    start() {
      if (!this.backend) throw console.error("[geolocation] Cannot start: backend not initialised"), new Error("Backend not initialised");
      return new Promise(async (t) => {
        if (this.serviceRunning) return console.info("[geolocation] Service already running"), t(this.watchHandler);
        console.info("[geolocation] Starting geolocation service"), this.watchHandler = await this.backend.watchPosition((n) => {
          console.info(`[geolocation TIME: ${(/* @__PURE__ */ new Date()).toLocaleString()}] Position updated via watch`), this.presentLocation = n, Ii("change", this.presentLocation);
        }), this.serviceRunning = true, console.info("[geolocation] Geolocation service started successfully"), Ii("start", this.presentLocation), t(this.watchHandler);
      });
    }
    stop(t) {
      if (!this.backend) throw console.error("[geolocation] Cannot stop: backend not initialised"), new Error("Backend not initialised");
      console.info("[geolocation] Stopping geolocation service"), this.serviceRunning = false, this.backend.clearWatch(t), console.info("[geolocation] Geolocation service stopped");
    }
  }
  let Mu;
  const Yr = (e) => Mu = e, ku = Symbol();
  function Ji(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var mo;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(mo || (mo = {}));
  function Du() {
    const e = kc(true), t = e.run(() => Be({}));
    let n = [], o = [];
    const r = ls({
      install(i) {
        Yr(r), r._a = i, i.provide(ku, r), i.config.globalProperties.$pinia = r, o.forEach((s) => n.push(s)), o = [];
      },
      use(i) {
        return this._a ? n.push(i) : o.push(i), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return r;
  }
  const Hu = () => {
  };
  function Ec(e, t, n, o = Hu) {
    e.push(t);
    const r = () => {
      const i = e.indexOf(t);
      i > -1 && (e.splice(i, 1), o());
    };
    return !n && Dc() && tf(r), r;
  }
  function vn(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const ew = (e) => e(), Sc = Symbol(), Oi = Symbol();
  function Xi(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const o = t[n], r = e[n];
      Ji(r) && Ji(o) && e.hasOwnProperty(n) && !ge(o) && !zt(o) ? e[n] = Xi(r, o) : e[n] = o;
    }
    return e;
  }
  const tw = Symbol();
  function nw(e) {
    return !Ji(e) || !Object.prototype.hasOwnProperty.call(e, tw);
  }
  const { assign: Gt } = Object;
  function ow(e) {
    return !!(ge(e) && e.effect);
  }
  function rw(e, t, n, o) {
    const { state: r, actions: i, getters: s } = t, a = n.state.value[e];
    let c;
    function u() {
      a || (n.state.value[e] = r ? r() : {});
      const l = Rf(n.state.value[e]);
      return Gt(l, i, Object.keys(s || {}).reduce((d, p) => (d[p] = ls(ws(() => {
        Yr(n);
        const m = n._s.get(e);
        return s[p].call(m, m);
      })), d), {}));
    }
    return c = Fu(e, u, t, n, o, true), c;
  }
  function Fu(e, t, n = {}, o, r, i) {
    let s;
    const a = Gt({
      actions: {}
    }, n), c = {
      deep: true
    };
    let u, l, d = [], p = [], m;
    const g = o.state.value[e];
    !i && !g && (o.state.value[e] = {}), Be({});
    let w;
    function k(U) {
      let x;
      u = l = false, typeof U == "function" ? (U(o.state.value[e]), x = {
        type: mo.patchFunction,
        storeId: e,
        events: m
      }) : (Xi(o.state.value[e], U), x = {
        type: mo.patchObject,
        payload: U,
        storeId: e,
        events: m
      });
      const j = w = Symbol();
      ol().then(() => {
        w === j && (u = true);
      }), l = true, vn(d, x, o.state.value[e]);
    }
    const A = i ? function() {
      const { state: x } = n, j = x ? x() : {};
      this.$patch((J) => {
        Gt(J, j);
      });
    } : Hu;
    function S() {
      s.stop(), d = [], p = [], o._s.delete(e);
    }
    const P = (U, x = "") => {
      if (Sc in U) return U[Oi] = x, U;
      const j = function() {
        Yr(o);
        const J = Array.from(arguments), $ = [], oe = [];
        function we(X) {
          $.push(X);
        }
        function ze(X) {
          oe.push(X);
        }
        vn(p, {
          args: J,
          name: j[Oi],
          store: D,
          after: we,
          onError: ze
        });
        let fe;
        try {
          fe = U.apply(this && this.$id === e ? this : D, J);
        } catch (X) {
          throw vn(oe, X), X;
        }
        return fe instanceof Promise ? fe.then((X) => (vn($, X), X)).catch((X) => (vn(oe, X), Promise.reject(X))) : (vn($, fe), fe);
      };
      return j[Sc] = true, j[Oi] = x, j;
    }, v = {
      _p: o,
      $id: e,
      $onAction: Ec.bind(null, p),
      $patch: k,
      $reset: A,
      $subscribe(U, x = {}) {
        const j = Ec(d, U, x.detached, () => J()), J = s.run(() => On(() => o.state.value[e], ($) => {
          (x.flush === "sync" ? l : u) && U({
            storeId: e,
            type: mo.direct,
            events: m
          }, $);
        }, Gt({}, c, x)));
        return j;
      },
      $dispose: S
    }, D = Nr(v);
    o._s.set(e, D);
    const z = (o._a && o._a.runWithContext || ew)(() => o._e.run(() => (s = kc()).run(() => t({
      action: P
    }))));
    for (const U in z) {
      const x = z[U];
      if (ge(x) && !ow(x) || zt(x)) i || (g && nw(x) && (ge(x) ? x.value = g[U] : Xi(x, g[U])), o.state.value[e][U] = x);
      else if (typeof x == "function") {
        const j = P(x, U);
        z[U] = j, a.actions[U] = x;
      }
    }
    return Gt(D, z), Gt(Z(D), z), Object.defineProperty(D, "$state", {
      get: () => o.state.value[e],
      set: (U) => {
        k((x) => {
          Gt(x, U);
        });
      }
    }), o._p.forEach((U) => {
      Gt(D, s.run(() => U({
        store: D,
        app: o._a,
        pinia: o,
        options: a
      })));
    }), g && i && n.hydrate && n.hydrate(D.$state, g), u = true, l = true, D;
  }
  Gw = function(e, t, n) {
    let o;
    const r = typeof t == "function";
    o = r ? n : t;
    function i(s, a) {
      const c = ld();
      return s = s || (c ? fo(ku, null) : null), s && Yr(s), s = Mu, s._s.has(e) || (r ? Fu(e, t, o, s) : rw(e, o, s)), s._s.get(e);
    }
    return i.$id = e, i;
  };
  let Ic, iw, sw, aw, cw, lw, uw, fw, dw, hw, pw, gw, mw, bw, yw, vw, xs;
  Ic = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a2;
        const e = Xl((await ui(async () => {
          const { default: n } = await import("./App-uAkCZMRG.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), import.meta.url)).default);
        e.use(Du()), e.use((await ui(async () => {
          const { default: n } = await import("./index-sk8ZSphq.js").then(async (m) => {
            await m.__tla;
            return m;
          }).then((o) => o.i);
          return {
            default: n
          };
        }, __vite__mapDeps([15,1,16]), import.meta.url)).default), e.use((await ui(async () => {
          const { i18n: n } = await import("./index-DpRi9cKa.js");
          return {
            i18n: n
          };
        }, __vite__mapDeps([17,2]), import.meta.url)).i18n), window.splashScreen && window.splashScreen.unmount(), (_a2 = document.getElementById("splash")) == null ? void 0 : _a2.remove();
        const t = document.getElementById("app");
        t && (t.style.display = "inherit"), e.mount("#app");
      },
      dependencies: [
        "geolocation",
        "storage"
      ]
    },
    {
      name: "storage",
      displayName: "Storage",
      moduleInit: Ly
    },
    {
      name: "geolocation",
      displayName: "Geolocation Service",
      moduleInit: async () => {
        try {
          const e = new Zy();
          console.time("Geolocation update service initialise"), await e.build((t) => new Promise(async (n) => {
            confirm(t === "prompt" ? "Later your browser will request permission to access your location." : "This app requires access to your location to track your movements.") ? n(true) : n();
          })), console.timeEnd("Geolocation update service initialise"), console.time("Geolocation update service start"), await e.start(), console.timeEnd("Geolocation update service start"), window.UpdateService = e;
        } catch (e) {
          return Promise.reject(e);
        }
      },
      dependencies: [
        "storage"
      ]
    }
  ];
  Ww = by;
  Bw = my;
  iw = {
    class: "splash-container"
  };
  sw = {
    class: "splash-content"
  };
  aw = {
    key: 0,
    class: "loading-section"
  };
  cw = {
    class: "progress-container"
  };
  lw = {
    class: "progress-bar"
  };
  uw = {
    class: "progress-text"
  };
  fw = {
    class: "loading-details"
  };
  dw = {
    class: "current-module"
  };
  hw = {
    key: 1,
    class: "error-section"
  };
  pw = {
    class: "error-message"
  };
  gw = {
    key: 0
  };
  mw = {
    key: 1
  };
  bw = {
    key: 2,
    class: "timeout-section"
  };
  yw = jf({
    __name: "SplashScreen",
    setup(e) {
      const t = Be(0), n = Be("Initializing..."), o = Be(""), r = Be(0), i = Be(0), s = Be(false), a = Be(false), c = Be(""), u = Be("light"), l = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? u.value = "dark" : u.value = "light";
        } catch {
          u.value = "light";
        }
      }, d = () => {
        u.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", u.value);
      }, p = ws(() => Math.round(t.value / 100 * 100)), m = {
        info: (...k) => {
          const A = k.join(" ");
          console.info(A), n.value = String(A);
        },
        warn: (...k) => {
          const A = k.join(" ");
          console.warn(A), n.value = String(A);
        },
        error: (...k) => {
          const A = k.join(" ");
          console.error(A), n.value = String(A), c.value = String(A);
        },
        debug: (...k) => {
          console.debug(...k);
        }
      }, g = {
        onModuleStart: (k) => {
          o.value = k, n.value = `Loading ${k}...`;
        },
        onModuleComplete: (k) => {
          i.value++, t.value = Math.min(100, i.value / r.value * 100), n.value = `Loaded ${k}`;
        },
        onModuleError: (k, A) => {
          n.value = `Failed to load ${k}`, c.value = A.message;
        },
        onOverallProgress: (k, A) => {
          r.value = A, i.value = k, t.value = Math.min(100, k / A * 100);
        }
      }, w = () => {
        window.location.reload();
      };
      return Ro(() => {
        var _a2;
        l(), d(), (_a2 = document.getElementById("pre-splash")) == null ? void 0 : _a2.remove();
        const k = (A, S = /* @__PURE__ */ new Set()) => {
          if (S.has(A)) return 0;
          S.add(A);
          const P = Ic.find((D) => D.name === A);
          if (!P) return 0;
          let v = 1;
          if (P.dependencies) for (const D of P.dependencies) v += k(D, S);
          return v;
        };
        r.value = k("trackmaker"), console.log("=== Start Loading Modules ==="), Iu(Ic, "trackmaker", 3e4, {
          logger: m,
          progressReporter: g,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", o.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((A) => {
          const S = String(A.toString());
          if (S.toLowerCase().includes("timeout")) {
            const P = S.split("Trackback").map((v) => v.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(P.map((v) => ({
              Trackback: v
            })), [
              "Trackback"
            ]), a.value = true;
          } else c.value = S, s.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(A);
        });
      }), (k, A) => (Je(), Dt("div", iw, [
        de("div", sw, [
          A[7] || (A[7] = de("div", {
            class: "logo-section"
          }, [
            de("div", {
              class: "app-logo"
            }, [
              de("img", {
                src: Ih,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            de("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !s.value && !a.value ? (Je(), Dt("div", aw, [
            de("div", cw, [
              de("div", lw, [
                de("div", {
                  class: "progress-fill",
                  style: _r({
                    width: `${p.value}%`
                  })
                }, null, 4)
              ]),
              de("div", uw, Zn(p.value) + "% ", 1)
            ]),
            de("div", fw, [
              de("p", dw, " Loading: " + Zn(o.value), 1)
            ]),
            A[0] || (A[0] = de("div", {
              class: "loading-animation"
            }, [
              de("div", {
                class: "spinner"
              })
            ], -1))
          ])) : oi("", true),
          s.value ? (Je(), Dt("div", hw, [
            A[1] || (A[1] = de("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            A[2] || (A[2] = de("h2", null, "Loading Error", -1)),
            de("div", pw, [
              (Je(true), Dt(Oe, null, Zf((c.value ?? "").split(`
`), (S) => (Je(), Dt("div", {
                key: S,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                S.toLocaleLowerCase().includes("trackback") ? (Je(), Dt("strong", gw, Zn(S), 1)) : (Je(), Dt("span", mw, Zn(S), 1))
              ]))), 128))
            ]),
            de("button", {
              class: "retry-button",
              onClick: w
            }, " Retry ")
          ])) : oi("", true),
          a.value ? (Je(), Dt("div", bw, [
            A[3] || (A[3] = de("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            A[4] || (A[4] = de("h2", null, "Connection Timeout", -1)),
            A[5] || (A[5] = de("p", null, "Unable to load required modules within the timeout period.", -1)),
            A[6] || (A[6] = de("p", null, "Please check your internet connection and try again.", -1)),
            de("button", {
              class: "retry-button",
              onClick: w
            }, " Retry ")
          ])) : oi("", true)
        ])
      ]));
    }
  });
  ww = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, r] of t) n[o] = r;
    return n;
  };
  vw = ww(yw, [
    [
      "__scopeId",
      "data-v-5254237a"
    ]
  ]);
  xs = Xl(vw);
  xs.use(Du());
  xs.mount("#splash");
  window.splashScreen = xs;
})();
export {
  Uw as $,
  Zn as A,
  Mw as B,
  Mi as C,
  Rw as D,
  ui as E,
  Oe as F,
  Sf as G,
  Ef as H,
  ol as I,
  xw as J,
  _w as K,
  Gw as L,
  Nw as M,
  Lw as N,
  Aw as O,
  Ny as P,
  Iw as Q,
  Cw as R,
  kw as S,
  Ow as T,
  Zf as U,
  Fw as V,
  _r as W,
  $w as X,
  ls as Y,
  Ei as Z,
  ww as _,
  __tla,
  de as a,
  jw as a0,
  Rg as a1,
  Zt as a2,
  Rt as a3,
  Hw as a4,
  ge as a5,
  vu as a6,
  Ww as a7,
  Bw as a8,
  _g as a9,
  su as aA,
  tu as aB,
  Lm as aC,
  oy as aD,
  pt as aE,
  sy as aF,
  kh as aG,
  ty as aH,
  Nn as aI,
  Dr as aJ,
  kc as aK,
  Te as aa,
  Bf as ab,
  Wf as ac,
  Dc as ad,
  tf as ae,
  ld as af,
  Ew as ag,
  bt as ah,
  No as ai,
  vs as aj,
  Dh as ak,
  Oa as al,
  op as am,
  sp as an,
  ou as ao,
  nu as ap,
  Ts as aq,
  ru as ar,
  Bp as as,
  nt as at,
  fr as au,
  lu as av,
  Ke as aw,
  Yg as ax,
  fm as ay,
  kg as az,
  Be as b,
  Dt as c,
  jf as d,
  Yf as e,
  hs as f,
  Nr as g,
  Wd as h,
  fo as i,
  ws as j,
  Ro as k,
  ps as l,
  Md as m,
  ns as n,
  Je as o,
  cd as p,
  On as q,
  Xc as r,
  _e as s,
  Sw as t,
  Dw as u,
  Zc as v,
  Pw as w,
  oi as x,
  Hf as y,
  xd as z
};
