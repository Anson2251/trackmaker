const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-BTBdRhFx.js","./vue-router-CI4JBcSG.js","./vue-i18n-BbepaFVl.js","./settings-store-Dy8kpRzu.js","./light-BiBhEq9V.js","./light-SdkyICje.js","./light-DXHUwBlv.js","./light-Bv8ty0Js.js","./Tooltip-D64Zfrhx.js","./text-Eox52-_f.js","./light-B7aI_XDF.js","./index-BS9LAIUC.js","./omit-DaGFEIm8.js","./App-eFoPT8Ne.css","./index-BV_2vilI.js","./index-DrWGho-a.css","./index-C8YmE5Lo.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Ww, Zn, Hw, Di, Pw, di, Oe, Of, If, il, Dw, Nw, Vw, xw, kw, Cw, xy, _w, Lw, Fw, Rw, td, jw, Cr, Gw, fs, Ii, Ew, de, Bw, Pg, Zt, Rt, $w, ge, Eu, Yw, qw, Ng, cu, ou, km, sy, pt, ly, Fh, ry, Nn, Fr, Hc, Te, Yf, Vf, Fc, of, fd, Ow, bt, No, Es, Uh, _a, sp, lp, iu, ru, Ss, su, qp, nt, hr, fu, Ke, zg, pm, Fg, Be, Dt, Wf, Kf, gs, Lr, Yd, fo, Ts, Ro, ms, Hd, rs, Je, ud, On, Zc, $e, Aw, Uw, tl, Mw, ii, Uf, Dd;
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
  function es(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const ee = {}, En = [], Ze = () => {
  }, _c = () => false, Or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ts = (e) => e.startsWith("onUpdate:"), be = Object.assign, ns = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Wu = Object.prototype.hasOwnProperty, te = (e, t) => Wu.call(e, t), W = Array.isArray, Sn = (e) => Ao(e) === "[object Map]", Rc = (e) => Ao(e) === "[object Set]", Bu = (e) => Ao(e) === "[object RegExp]", V = (e) => typeof e == "function", pe = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", Cc = (e) => (le(e) || V(e)) && V(e.then) && V(e.catch), Nc = Object.prototype.toString, Ao = (e) => Nc.call(e), Vu = (e) => Ao(e).slice(8, -1), Pc = (e) => Ao(e) === "[object Object]", os = (e) => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = es(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ar = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Yu = /-\w/g, je = Ar((e) => e.replace(Yu, (t) => t.slice(1).toUpperCase())), qu = /\B([A-Z])/g, Pt = Ar((e) => e.replace(qu, "-$1").toLowerCase()), _r = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Jr = Ar((e) => e ? `on${_r(e)}` : ""), De = (e, t) => !Object.is(e, t), io = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, Lc = (e, t, n, o = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: o,
      value: n
    });
  }, Ku = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, zu = (e) => {
    const t = pe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let js;
  const Rr = () => js || (js = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  Cr = function(e) {
    if (W(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const o = e[n], r = pe(o) ? Zu(o) : Cr(o);
        if (r) for (const i in r) t[i] = r[i];
      }
      return t;
    } else if (pe(e) || le(e)) return e;
  };
  const Ju = /;(?![^(]*\))/g, Xu = /:([^]+)/, Qu = /\/\*[^]*?\*\//g;
  function Zu(e) {
    const t = {};
    return e.replace(Qu, "").split(Ju).forEach((n) => {
      if (n) {
        const o = n.split(Xu);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }), t;
  }
  rs = function(e) {
    let t = "";
    if (pe(e)) t = e;
    else if (W(e)) for (let n = 0; n < e.length; n++) {
      const o = rs(e[n]);
      o && (t += o + " ");
    }
    else if (le(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const ef = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tf = es(ef);
  function xc(e) {
    return !!e || e === "";
  }
  let Mc, kc, Xr;
  Mc = (e) => !!(e && e.__v_isRef === true);
  Zn = (e) => pe(e) ? e : e == null ? "" : W(e) || le(e) && (e.toString === Nc || !V(e.toString)) ? Mc(e) ? Zn(e.value) : JSON.stringify(e, kc, 2) : String(e);
  kc = (e, t) => Mc(t) ? kc(e, t.value) : Sn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [o, r], i) => (n[Xr(o, i) + " =>"] = r, n), {})
  } : Rc(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Xr(n))
  } : Nt(t) ? Xr(t) : le(t) && !W(t) && !Pc(t) ? String(t) : t;
  Xr = (e, t = "") => {
    var n;
    return Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function nf(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Se;
  class Dc {
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
  Hc = function(e) {
    return new Dc(e);
  };
  Fc = function() {
    return Se;
  };
  of = function(e, t = false) {
    Se && Se.cleanups.push(e);
  };
  let ce;
  const Qr = /* @__PURE__ */ new WeakSet();
  class Uc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Se && Se.active && Se.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Qr.has(this) && (Qr.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || jc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Gs(this), Gc(this);
      const t = ce, n = et;
      ce = this, et = true;
      try {
        return this.fn();
      } finally {
        Wc(this), ce = t, et = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) as(t);
        this.deps = this.depsTail = void 0, Gs(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Qr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Ri(this) && this.run();
    }
    get dirty() {
      return Ri(this);
    }
  }
  let $c = 0, so, ao;
  function jc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = ao, ao = e;
      return;
    }
    e.next = so, so = e;
  }
  function is() {
    $c++;
  }
  function ss() {
    if (--$c > 0) return;
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
  function Gc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Wc(e) {
    let t, n = e.depsTail, o = n;
    for (; o; ) {
      const r = o.prevDep;
      o.version === -1 ? (o === n && (n = r), as(o), rf(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
    }
    e.deps = t, e.depsTail = n;
  }
  function Ri(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Bc(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Bc(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bo) || (e.globalVersion = bo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ri(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = ce, o = et;
    ce = e, et = true;
    try {
      Gc(e);
      const r = e.fn(e._value);
      (t.version === 0 || De(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
    } catch (r) {
      throw t.version++, r;
    } finally {
      ce = n, et = o, Wc(e), e.flags &= -3;
    }
  }
  function as(e, t = false) {
    const { dep: n, prevSub: o, nextSub: r } = e;
    if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), n.subs === e && (n.subs = o, !o && n.computed)) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep) as(i, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function rf(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let et = true;
  const Vc = [];
  function At() {
    Vc.push(et), et = false;
  }
  function _t() {
    const e = Vc.pop();
    et = e === void 0 ? true : e;
  }
  function Gs(e) {
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
  class sf {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Nr {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!ce || !et || ce === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== ce) n = this.activeLink = new sf(ce, this), ce.deps ? (n.prevDep = ce.depsTail, ce.depsTail.nextDep = n, ce.depsTail = n) : ce.deps = ce.depsTail = n, Yc(n);
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
      is();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        ss();
      }
    }
  }
  function Yc(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let o = t.deps; o; o = o.nextDep) Yc(o);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Qo = /* @__PURE__ */ new WeakMap(), fn = Symbol(""), Ci = Symbol(""), yo = Symbol("");
  function Ie(e, t, n) {
    if (et && ce) {
      let o = Qo.get(e);
      o || Qo.set(e, o = /* @__PURE__ */ new Map());
      let r = o.get(n);
      r || (o.set(n, r = new Nr()), r.map = o, r.key = n), r.track();
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
    if (is(), t === "clear") s.forEach(a);
    else {
      const c = W(e), u = c && os(n);
      if (c && n === "length") {
        const l = Number(o);
        s.forEach((d, p) => {
          (p === "length" || p === yo || !Nt(p) && p >= l) && a(d);
        });
      } else switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(yo)), t) {
        case "add":
          c ? u && a(s.get("length")) : (a(s.get(fn)), Sn(e) && a(s.get(Ci)));
          break;
        case "delete":
          c || (a(s.get(fn)), Sn(e) && a(s.get(Ci)));
          break;
        case "set":
          Sn(e) && a(s.get(fn));
          break;
      }
    }
    ss();
  }
  function af(e, t) {
    const n = Qo.get(e);
    return n && n.get(t);
  }
  function bn(e) {
    const t = Z(e);
    return t === e ? t : (Ie(t, "iterate", yo), Ye(e) ? t : t.map(ve));
  }
  function Pr(e) {
    return Ie(e = Z(e), "iterate", yo), e;
  }
  const cf = {
    __proto__: null,
    [Symbol.iterator]() {
      return Zr(this, Symbol.iterator, ve);
    },
    concat(...e) {
      return bn(this).concat(...e.map((t) => W(t) ? bn(t) : t));
    },
    entries() {
      return Zr(this, "entries", (e) => (e[1] = ve(e[1]), e));
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
      return ei(this, "includes", e);
    },
    indexOf(...e) {
      return ei(this, "indexOf", e);
    },
    join(e) {
      return bn(this).join(e);
    },
    lastIndexOf(...e) {
      return ei(this, "lastIndexOf", e);
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
      return Ws(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Ws(this, "reduceRight", e, t);
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
      return Zr(this, "values", ve);
    }
  };
  function Zr(e, t, n) {
    const o = Pr(e), r = o[t]();
    return o !== e && !Ye(e) && (r._next = r.next, r.next = () => {
      const i = r._next();
      return i.value && (i.value = n(i.value)), i;
    }), r;
  }
  const lf = Array.prototype;
  function yt(e, t, n, o, r, i) {
    const s = Pr(e), a = s !== e && !Ye(e), c = s[t];
    if (c !== lf[t]) {
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
  function Ws(e, t, n, o) {
    const r = Pr(e);
    let i = n;
    return r !== e && (Ye(e) ? n.length > 3 && (i = function(s, a, c) {
      return n.call(this, s, a, c, e);
    }) : i = function(s, a, c) {
      return n.call(this, s, ve(a), c, e);
    }), r[t](i, ...o);
  }
  function ei(e, t, n) {
    const o = Z(e);
    Ie(o, "iterate", yo);
    const r = o[t](...n);
    return (r === -1 || r === false) && us(n[0]) ? (n[0] = Z(n[0]), o[t](...n)) : r;
  }
  function Gn(e, t, n = []) {
    At(), is();
    const o = Z(e)[t].apply(e, n);
    return ss(), _t(), o;
  }
  const uf = es("__proto__,__v_isRef,__isVue"), qc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt));
  function ff(e) {
    Nt(e) || (e = String(e));
    const t = Z(this);
    return Ie(t, "has", e), t.hasOwnProperty(e);
  }
  class Kc {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, o) {
      if (n === "__v_skip") return t.__v_skip;
      const r = this._isReadonly, i = this._isShallow;
      if (n === "__v_isReactive") return !r;
      if (n === "__v_isReadonly") return r;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw") return o === (r ? i ? Tf : Qc : i ? Xc : Jc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
      const s = W(t);
      if (!r) {
        let c;
        if (s && (c = cf[n])) return c;
        if (n === "hasOwnProperty") return ff;
      }
      const a = Reflect.get(t, n, ge(t) ? t : o);
      return (Nt(n) ? qc.has(n) : uf(n)) || (r || Ie(t, "get", n), i) ? a : ge(a) ? s && os(n) ? a : a.value : le(a) ? r ? Zc(a) : Lr(a) : a;
    }
  }
  class zc extends Kc {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, o, r) {
      let i = t[n];
      if (!this._isShallow) {
        const c = Xt(i);
        if (!Ye(o) && !Xt(o) && (i = Z(i), o = Z(o)), !W(t) && ge(i) && !ge(o)) return c || (i.value = o), true;
      }
      const s = W(t) && os(n) ? Number(n) < t.length : te(t, n), a = Reflect.set(t, n, o, ge(t) ? t : r);
      return t === Z(r) && (s ? De(o, i) && Tt(t, "set", n, o) : Tt(t, "add", n, o)), a;
    }
    deleteProperty(t, n) {
      const o = te(t, n);
      t[n];
      const r = Reflect.deleteProperty(t, n);
      return r && o && Tt(t, "delete", n, void 0), r;
    }
    has(t, n) {
      const o = Reflect.has(t, n);
      return (!Nt(n) || !qc.has(n)) && Ie(t, "has", n), o;
    }
    ownKeys(t) {
      return Ie(t, "iterate", W(t) ? "length" : fn), Reflect.ownKeys(t);
    }
  }
  class df extends Kc {
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
  const hf = new zc(), pf = new df(), gf = new zc(true);
  const Ni = (e) => e, xo = (e) => Reflect.getPrototypeOf(e);
  function mf(e, t, n) {
    return function(...o) {
      const r = this.__v_raw, i = Z(r), s = Sn(i), a = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, u = r[e](...o), l = n ? Ni : t ? Zo : ve;
      return !t && Ie(i, "iterate", c ? Ci : fn), {
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
  function bf(e, t) {
    const n = {
      get(r) {
        const i = this.__v_raw, s = Z(i), a = Z(r);
        e || (De(r, a) && Ie(s, "get", r), Ie(s, "get", a));
        const { has: c } = xo(s), u = t ? Ni : e ? Zo : ve;
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
        return e || (De(r, a) && Ie(s, "has", r), Ie(s, "has", a)), r === a ? i.has(r) : i.has(r) || i.has(a);
      },
      forEach(r, i) {
        const s = this, a = s.__v_raw, c = Z(a), u = t ? Ni : e ? Zo : ve;
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
        return s.set(r, i), u ? De(i, l) && Tt(s, "set", r, i) : Tt(s, "add", r, i), this;
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
      n[r] = mf(r, e, t);
    }), n;
  }
  function cs(e, t) {
    const n = bf(e, t);
    return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(te(n, r) && r in o ? n : o, r, i);
  }
  const yf = {
    get: cs(false, false)
  }, wf = {
    get: cs(false, true)
  }, vf = {
    get: cs(true, false)
  };
  const Jc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ new WeakMap();
  function Ef(e) {
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
  function Sf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Ef(Vu(e));
  }
  Lr = function(e) {
    return Xt(e) ? e : ls(e, false, hf, yf, Jc);
  };
  If = function(e) {
    return ls(e, false, gf, wf, Xc);
  };
  Zc = function(e) {
    return ls(e, true, pf, vf, Qc);
  };
  function ls(e, t, n, o, r) {
    if (!le(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = Sf(e);
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
  function us(e) {
    return e ? !!e.__v_raw : false;
  }
  function Z(e) {
    const t = e && e.__v_raw;
    return t ? Z(t) : e;
  }
  fs = function(e) {
    return !te(e, "__v_skip") && Object.isExtensible(e) && Lc(e, "__v_skip", true), e;
  };
  const ve = (e) => le(e) ? Lr(e) : e, Zo = (e) => le(e) ? Zc(e) : e;
  ge = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Be = function(e) {
    return el(e, false);
  };
  Of = function(e) {
    return el(e, true);
  };
  function el(e, t) {
    return ge(e) ? e : new Af(e, t);
  }
  class Af {
    constructor(t, n) {
      this.dep = new Nr(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Z(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, o = this.__v_isShallow || Ye(t) || Xt(t);
      t = o ? t : Z(t), De(t, n) && (this._rawValue = t, this._value = o ? t : ve(t), this.dep.trigger());
    }
  }
  tl = function(e) {
    return ge(e) ? e.value : e;
  };
  Ow = function(e) {
    return V(e) ? e() : tl(e);
  };
  const _f = {
    get: (e, t, n) => t === "__v_raw" ? e : tl(Reflect.get(e, t, n)),
    set: (e, t, n, o) => {
      const r = e[t];
      return ge(r) && !ge(n) ? (r.value = n, true) : Reflect.set(e, t, n, o);
    }
  };
  function nl(e) {
    return zt(e) ? e : new Proxy(e, _f);
  }
  class Rf {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new Nr(), { get: o, set: r } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = o, this._set = r;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Cf(e) {
    return new Rf(e);
  }
  function Nf(e) {
    const t = W(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = ol(e, n);
    return t;
  }
  class Pf {
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
      return af(Z(this._object), this._key);
    }
  }
  class Lf {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Aw = function(e, t, n) {
    return ge(e) ? e : V(e) ? new Lf(e) : le(e) && arguments.length > 1 ? ol(e, t, n) : Be(e);
  };
  function ol(e, t, n) {
    const o = e[t];
    return ge(o) ? o : new Pf(e, t, n);
  }
  class xf {
    constructor(t, n, o) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Nr(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && ce !== this) return jc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Bc(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Mf(e, t, n = false) {
    let o, r;
    return V(e) ? o = e : (o = e.get, r = e.set), new xf(o, r, n);
  }
  const ko = {}, er = /* @__PURE__ */ new WeakMap();
  let cn;
  function kf(e, t = false, n = cn) {
    if (n) {
      let o = er.get(n);
      o || er.set(n, o = []), o.push(e);
    }
  }
  function Df(e, t, n = ee) {
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
    const P = Fc(), S = () => {
      l.stop(), P && P.active && ns(P.effects, l);
    };
    if (i && t) {
      const v = t;
      t = (...D) => {
        v(...D), S();
      };
    }
    let E = w ? new Array(e.length).fill(ko) : ko;
    const L = (v) => {
      if (!(!(l.flags & 1) || !l.dirty && !v)) if (t) {
        const D = l.run();
        if (r || g || (w ? D.some((K, z) => De(K, E[z])) : De(D, E))) {
          p && p();
          const K = cn;
          cn = l;
          try {
            const z = [
              D,
              E === ko ? void 0 : w && E[0] === ko ? [] : E,
              m
            ];
            E = D, c ? c(t, 3, z) : t(...z);
          } finally {
            cn = K;
          }
        }
      } else l.run();
    };
    return a && a(L), l = new Uc(d), l.scheduler = s ? () => s(L, false) : L, m = (v) => kf(v, false, l), p = l.onStop = () => {
      const v = er.get(l);
      if (v) {
        if (c) c(v, 4);
        else for (const D of v) D();
        er.delete(l);
      }
    }, t ? o ? L(true) : E = l.run() : s ? s(L.bind(null, true), true) : l.run(), S.pause = l.pause.bind(l), S.resume = l.resume.bind(l), S.stop = S, S;
  }
  function Et(e, t = 1 / 0, n) {
    if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, ge(e)) Et(e.value, t, n);
    else if (W(e)) for (let o = 0; o < e.length; o++) Et(e[o], t, n);
    else if (Rc(e) || Sn(e)) e.forEach((o) => {
      Et(o, t, n);
    });
    else if (Pc(e)) {
      for (const o in e) Et(e[o], t, n);
      for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && Et(e[o], t, n);
    }
    return e;
  }
  function _o(e, t, n, o) {
    try {
      return o ? e(...o) : e();
    } catch (r) {
      xr(r, t, n);
    }
  }
  function tt(e, t, n, o) {
    if (V(e)) {
      const r = _o(e, t, n, o);
      return r && Cc(r) && r.catch((i) => {
        xr(i, t, n);
      }), r;
    }
    if (W(e)) {
      const r = [];
      for (let i = 0; i < e.length; i++) r.push(tt(e[i], t, n, o));
      return r;
    }
  }
  function xr(e, t, n, o = true) {
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
    Hf(e, n, r, o, s);
  }
  function Hf(e, t, n, o = true, r = false) {
    if (r) throw e;
    console.error(e);
  }
  const Re = [];
  let ut = -1;
  const In = [];
  let Wt = null, Tn = 0;
  const rl = Promise.resolve();
  let tr = null;
  il = function(e) {
    const t = tr || rl;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Ff(e) {
    let t = ut + 1, n = Re.length;
    for (; t < n; ) {
      const o = t + n >>> 1, r = Re[o], i = wo(r);
      i < e || i === e && r.flags & 2 ? t = o + 1 : n = o;
    }
    return t;
  }
  function ds(e) {
    if (!(e.flags & 1)) {
      const t = wo(e), n = Re[Re.length - 1];
      !n || !(e.flags & 2) && t >= wo(n) ? Re.push(e) : Re.splice(Ff(t), 0, e), e.flags |= 1, sl();
    }
  }
  function sl() {
    tr || (tr = rl.then(ll));
  }
  function al(e) {
    W(e) ? In.push(...e) : Wt && e.id === -1 ? Wt.splice(Tn + 1, 0, e) : e.flags & 1 || (In.push(e), e.flags |= 1), sl();
  }
  function Bs(e, t, n = ut + 1) {
    for (; n < Re.length; n++) {
      const o = Re[n];
      if (o && o.flags & 2) {
        if (e && o.id !== e.uid) continue;
        Re.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
      }
    }
  }
  function cl(e) {
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
  function ll(e) {
    try {
      for (ut = 0; ut < Re.length; ut++) {
        const t = Re[ut];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), _o(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; ut < Re.length; ut++) {
        const t = Re[ut];
        t && (t.flags &= -2);
      }
      ut = -1, Re.length = 0, cl(), tr = null, (Re.length || In.length) && ll();
    }
  }
  let Ee = null, ul = null;
  function nr(e) {
    const t = Ee;
    return Ee = e, ul = e && e.type.__scopeId || null, t;
  }
  Uf = function(e, t = Ee, n) {
    if (!t || e._n) return e;
    const o = (...r) => {
      o._d && cr(-1);
      const i = nr(t);
      let s;
      try {
        s = e(...r);
      } finally {
        nr(i), o._d && cr(1);
      }
      return s;
    };
    return o._n = true, o._c = true, o._d = true, o;
  };
  _w = function(e, t) {
    if (Ee === null) return e;
    const n = Ur(Ee), o = e.dirs || (e.dirs = []);
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
  const fl = Symbol("_vte"), dl = (e) => e.__isTeleport, co = (e) => e && (e.disabled || e.disabled === ""), Vs = (e) => e && (e.defer || e.defer === ""), Ys = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qs = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Pi = (e, t) => {
    const n = e && e.to;
    return pe(n) ? t ? t(n) : null : n;
  }, hl = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, o, r, i, s, a, c, u) {
      const { mc: l, pc: d, pbc: p, o: { insert: m, querySelector: g, createText: w, createComment: P } } = u, S = co(t.props);
      let { shapeFlag: E, children: L, dynamicChildren: v } = t;
      if (e == null) {
        const D = t.el = w(""), K = t.anchor = w("");
        m(D, n, o), m(K, n, o);
        const z = (M, j) => {
          E & 16 && (r && r.isCE && (r.ce._teleportTarget = M), l(L, M, j, r, i, s, a, c));
        }, $ = () => {
          const M = t.target = Pi(t.props, g), j = pl(M, t, w, m);
          M && (s !== "svg" && Ys(M) ? s = "svg" : s !== "mathml" && qs(M) && (s = "mathml"), S || (z(M, j), qo(t, false)));
        };
        S && (z(n, K), qo(t, true)), Vs(t.props) ? (t.el.__isMounted = false, ye(() => {
          $(), delete t.el.__isMounted;
        }, i)) : $();
      } else {
        if (Vs(t.props) && e.el.__isMounted === false) {
          ye(() => {
            hl.process(e, t, n, o, r, i, s, a, c, u);
          }, i);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const D = t.anchor = e.anchor, K = t.target = e.target, z = t.targetAnchor = e.targetAnchor, $ = co(e.props), M = $ ? n : K, j = $ ? D : z;
        if (s === "svg" || Ys(K) ? s = "svg" : (s === "mathml" || qs(K)) && (s = "mathml"), v ? (p(e.dynamicChildren, v, M, r, i, s, a), ws(e, t, true)) : c || d(e, t, M, j, r, i, s, a, false), S) $ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Do(t, n, D, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const J = t.target = Pi(t.props, g);
          J && Do(t, J, null, u, 0);
        } else $ && Do(t, K, z, u, 1);
        qo(t, S);
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
    hydrate: $f
  };
  function Do(e, t, n, { o: { insert: o }, m: r }, i = 2) {
    i === 0 && o(e.targetAnchor, t, n);
    const { el: s, anchor: a, shapeFlag: c, children: u, props: l } = e, d = i === 2;
    if (d && o(s, t, n), (!d || co(l)) && c & 16) for (let p = 0; p < u.length; p++) r(u[p], t, n, 2);
    d && o(a, t, n);
  }
  function $f(e, t, n, o, r, i, { o: { nextSibling: s, parentNode: a, querySelector: c, insert: u, createText: l } }, d) {
    function p(w, P, S, E) {
      P.anchor = d(s(w), P, a(w), n, o, r, i), P.targetStart = S, P.targetAnchor = E;
    }
    const m = t.target = Pi(t.props, c), g = co(t.props);
    if (m) {
      const w = m._lpa || m.firstChild;
      if (t.shapeFlag & 16) if (g) p(e, t, w, w && s(w));
      else {
        t.anchor = s(e);
        let P = w;
        for (; P; ) {
          if (P && P.nodeType === 8) {
            if (P.data === "teleport start anchor") t.targetStart = P;
            else if (P.data === "teleport anchor") {
              t.targetAnchor = P, m._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          }
          P = s(P);
        }
        t.targetAnchor || pl(m, t, l, u), d(w && s(w), t, m, n, o, r, i);
      }
      qo(t, g);
    } else g && t.shapeFlag & 16 && p(e, t, e, s(e));
    return t.anchor && s(t.anchor);
  }
  Rw = hl;
  function qo(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let o, r;
      for (t ? (o = e.el, r = e.anchor) : (o = e.targetStart, r = e.targetAnchor); o && o !== r; ) o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
      n.ut();
    }
  }
  function pl(e, t, n, o) {
    const r = t.targetStart = n(""), i = t.targetAnchor = n("");
    return r[fl] = i, e && (o(r, e), o(i, e)), i;
  }
  const vt = Symbol("_leaveCb"), Ho = Symbol("_enterCb");
  function gl() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Ro(() => {
      e.isMounted = true;
    }), gs(() => {
      e.isUnmounting = true;
    }), e;
  }
  const Ge = [
    Function,
    Array
  ], ml = {
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
  }, bl = (e) => {
    const t = e.subTree;
    return t.component ? bl(t.component) : t;
  }, jf = {
    name: "BaseTransition",
    props: ml,
    setup(e, { slots: t }) {
      const n = Zt(), o = gl();
      return () => {
        const r = t.default && hs(t.default(), true);
        if (!r || !r.length) return;
        const i = yl(r), s = Z(e), { mode: a } = s;
        if (o.isLeaving) return ti(i);
        const c = Ks(i);
        if (!c) return ti(i);
        let u = vo(c, s, o, n, (d) => u = d);
        c.type !== Te && Qt(c, u);
        let l = n.subTree && Ks(n.subTree);
        if (l && l.type !== Te && !Vt(l, c) && bl(n).type !== Te) {
          let d = vo(l, s, o, n);
          if (Qt(l, d), a === "out-in" && c.type !== Te) return o.isLeaving = true, d.afterLeave = () => {
            o.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, l = void 0;
          }, ti(i);
          a === "in-out" && c.type !== Te ? d.delayLeave = (p, m, g) => {
            const w = wl(o, l);
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
  function yl(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Te) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Gf = jf;
  function wl(e, t) {
    const { leavingVNodes: n } = e;
    let o = n.get(t.type);
    return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
  }
  function vo(e, t, n, o, r) {
    const { appear: i, mode: s, persisted: a = false, onBeforeEnter: c, onEnter: u, onAfterEnter: l, onEnterCancelled: d, onBeforeLeave: p, onLeave: m, onAfterLeave: g, onLeaveCancelled: w, onBeforeAppear: P, onAppear: S, onAfterAppear: E, onAppearCancelled: L } = t, v = String(e.key), D = wl(n, e), K = (M, j) => {
      M && tt(M, o, 9, j);
    }, z = (M, j) => {
      const J = j[1];
      K(M, j), W(M) ? M.every((U) => U.length <= 1) && J() : M.length <= 1 && J();
    }, $ = {
      mode: s,
      persisted: a,
      beforeEnter(M) {
        let j = c;
        if (!n.isMounted) if (i) j = P || c;
        else return;
        M[vt] && M[vt](true);
        const J = D[v];
        J && Vt(e, J) && J.el[vt] && J.el[vt](), K(j, [
          M
        ]);
      },
      enter(M) {
        let j = u, J = l, U = d;
        if (!n.isMounted) if (i) j = S || u, J = E || l, U = L || d;
        else return;
        let oe = false;
        const we = M[Ho] = (ze) => {
          oe || (oe = true, ze ? K(U, [
            M
          ]) : K(J, [
            M
          ]), $.delayedLeave && $.delayedLeave(), M[Ho] = void 0);
        };
        j ? z(j, [
          M,
          we
        ]) : we();
      },
      leave(M, j) {
        const J = String(e.key);
        if (M[Ho] && M[Ho](true), n.isUnmounting) return j();
        K(p, [
          M
        ]);
        let U = false;
        const oe = M[vt] = (we) => {
          U || (U = true, j(), we ? K(w, [
            M
          ]) : K(g, [
            M
          ]), M[vt] = void 0, D[J] === e && delete D[J]);
        };
        D[J] = e, m ? z(m, [
          M,
          oe
        ]) : oe();
      },
      clone(M) {
        const j = vo(M, t, n, o, r);
        return r && r(j), j;
      }
    };
    return $;
  }
  function ti(e) {
    if (Mr(e)) return e = Rt(e), e.children = null, e;
  }
  function Ks(e) {
    if (!Mr(e)) return dl(e.type) && e.children ? yl(e.children) : e;
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
  function hs(e, t = false, n) {
    let o = [], r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
      s.type === Oe ? (s.patchFlag & 128 && r++, o = o.concat(hs(s.children, t, a))) : (t || s.type !== Te) && o.push(a != null ? Rt(s, {
        key: a
      }) : s);
    }
    if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
    return o;
  }
  Wf = function(e, t) {
    return V(e) ? be({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function vl(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  Cw = function(e) {
    const t = Zt(), n = Of(null);
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
  const or = /* @__PURE__ */ new WeakMap();
  function lo(e, t, n, o, r = false) {
    if (W(e)) {
      e.forEach((g, w) => lo(g, t && (W(t) ? t[w] : t), n, o, r));
      return;
    }
    if (dn(o) && !r) {
      o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && lo(e, t, n, o.component.subTree);
      return;
    }
    const i = o.shapeFlag & 4 ? Ur(o.component) : o.el, s = r ? null : i, { i: a, r: c } = e, u = t && t.r, l = a.refs === ee ? a.refs = {} : a.refs, d = a.setupState, p = Z(d), m = d === ee ? _c : (g) => te(p, g);
    if (u != null && u !== c) {
      if (zs(t), pe(u)) l[u] = null, m(u) && (d[u] = null);
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
        const P = () => {
          if (e.f) {
            const S = g ? m(c) ? d[c] : l[c] : c.value;
            if (r) W(S) && ns(S, i);
            else if (W(S)) S.includes(i) || S.push(i);
            else if (g) l[c] = [
              i
            ], m(c) && (d[c] = l[c]);
            else {
              const E = [
                i
              ];
              c.value = E, e.k && (l[e.k] = E);
            }
          } else g ? (l[c] = s, m(c) && (d[c] = s)) : w && (c.value = s, e.k && (l[e.k] = s));
        };
        if (s) {
          const S = () => {
            P(), or.delete(e);
          };
          S.id = -1, or.set(e, S), ye(S, n);
        } else zs(e), P();
      }
    }
  }
  function zs(e) {
    const t = or.get(e);
    t && (t.flags |= 8, or.delete(e));
  }
  Rr().requestIdleCallback;
  Rr().cancelIdleCallback;
  let dn, Mr, Bf;
  dn = (e) => !!e.type.__asyncLoader;
  Mr = (e) => e.type.__isKeepAlive;
  Bf = {
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
        const E = t.default && t.default();
        return E && E.length === 1 ? E[0] : E;
      };
      const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
      let s = null;
      const a = n.suspense, { renderer: { p: c, m: u, um: l, o: { createElement: d } } } = o, p = d("div");
      o.activate = (E, L, v, D, K) => {
        const z = E.component;
        u(E, L, v, 0, a), c(z.vnode, E, L, v, z, a, D, E.slotScopeIds, K), ye(() => {
          z.isDeactivated = false, z.a && io(z.a);
          const $ = E.props && E.props.onVnodeMounted;
          $ && We($, z.parent, E);
        }, a);
      }, o.deactivate = (E) => {
        const L = E.component;
        sr(L.m), sr(L.a), u(E, p, null, 1, a), ye(() => {
          L.da && io(L.da);
          const v = E.props && E.props.onVnodeUnmounted;
          v && We(v, L.parent, E), L.isDeactivated = true;
        }, a);
      };
      function m(E) {
        ni(E), l(E, n, a, true);
      }
      function g(E) {
        r.forEach((L, v) => {
          const D = Fi(L.type);
          D && !E(D) && w(v);
        });
      }
      function w(E) {
        const L = r.get(E);
        L && (!s || !Vt(L, s)) ? m(L) : s && ni(s), r.delete(E), i.delete(E);
      }
      On(() => [
        e.include,
        e.exclude
      ], ([E, L]) => {
        E && g((v) => eo(E, v)), L && g((v) => !eo(L, v));
      }, {
        flush: "post",
        deep: true
      });
      let P = null;
      const S = () => {
        P != null && (ar(n.subTree.type) ? ye(() => {
          r.set(P, Fo(n.subTree));
        }, n.subTree.suspense) : r.set(P, Fo(n.subTree)));
      };
      return Ro(S), ps(S), gs(() => {
        r.forEach((E) => {
          const { subTree: L, suspense: v } = n, D = Fo(L);
          if (E.type === D.type && E.key === D.key) {
            ni(D);
            const K = D.component.da;
            K && ye(K, v);
            return;
          }
          m(E);
        });
      }), () => {
        if (P = null, !t.default) return s = null;
        const E = t.default(), L = E[0];
        if (E.length > 1) return s = null, E;
        if (!Nn(L) || !(L.shapeFlag & 4) && !(L.shapeFlag & 128)) return s = null, L;
        let v = Fo(L);
        if (v.type === Te) return s = null, v;
        const D = v.type, K = Fi(dn(v) ? v.type.__asyncResolved || {} : D), { include: z, exclude: $, max: M } = e;
        if (z && (!K || !eo(z, K)) || $ && K && eo($, K)) return v.shapeFlag &= -257, s = v, L;
        const j = v.key == null ? D : v.key, J = r.get(j);
        return v.el && (v = Rt(v), L.shapeFlag & 128 && (L.ssContent = v)), P = j, J ? (v.el = J.el, v.component = J.component, v.transition && Qt(v, v.transition), v.shapeFlag |= 512, i.delete(j), i.add(j)) : (i.add(j), M && i.size > parseInt(M, 10) && w(i.values().next().value)), v.shapeFlag |= 256, s = v, ar(L.type) ? L : v;
      };
    }
  };
  Nw = Bf;
  function eo(e, t) {
    return W(e) ? e.some((n) => eo(n, t)) : pe(e) ? e.split(",").includes(t) : Bu(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Vf = function(e, t) {
    Tl(e, "a", t);
  };
  Yf = function(e, t) {
    Tl(e, "da", t);
  };
  function Tl(e, t, n = Ae) {
    const o = e.__wdc || (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
    if (kr(t, o, n), n) {
      let r = n.parent;
      for (; r && r.parent; ) Mr(r.parent.vnode) && qf(o, t, n, r), r = r.parent;
    }
  }
  function qf(e, t, n, o) {
    const r = kr(t, e, o, true);
    ms(() => {
      ns(o[t], r);
    }, n);
  }
  function ni(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function Fo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function kr(e, t, n = Ae, o = false) {
    if (n) {
      const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
        At();
        const a = Co(n), c = tt(t, n, e, s);
        return a(), _t(), c;
      });
      return o ? r.unshift(i) : r.push(i), i;
    }
  }
  let Lt, El, ps, zf, Jf, Xf;
  Lt = (e) => (t, n = Ae) => {
    (!Eo || e === "sp") && kr(e, (...o) => t(...o), n);
  };
  Kf = Lt("bm");
  Ro = Lt("m");
  El = Lt("bu");
  ps = Lt("u");
  gs = Lt("bum");
  ms = Lt("um");
  zf = Lt("sp");
  Jf = Lt("rtg");
  Xf = Lt("rtc");
  function Qf(e, t = Ae) {
    kr("ec", e, t);
  }
  const Zf = "components", Sl = Symbol.for("v-ndc");
  Pw = function(e) {
    return pe(e) ? ed(Zf, e, false) || e : e || Sl;
  };
  function ed(e, t, n = true, o = false) {
    const r = Ee || Ae;
    if (r) {
      const i = r.type;
      {
        const a = Fi(i, false);
        if (a && (a === t || a === je(t) || a === _r(je(t)))) return i;
      }
      const s = Js(r[e] || i[e], t) || Js(r.appContext[e], t);
      return !s && o ? i : s;
    }
  }
  function Js(e, t) {
    return e && (e[t] || e[je(t)] || e[_r(je(t))]);
  }
  td = function(e, t, n, o) {
    let r;
    const i = n, s = W(e);
    if (s || pe(e)) {
      const a = s && zt(e);
      let c = false, u = false;
      a && (c = !Ye(e), u = Xt(e), e = Pr(e)), r = new Array(e.length);
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
  Lw = function(e, t, n = {}, o, r) {
    if (Ee.ce || Ee.parent && dn(Ee.parent) && Ee.parent.ce) return t !== "default" && (n.name = t), Je(), Di(Oe, null, [
      $e("slot", n, o && o())
    ], 64);
    let i = e[t];
    i && i._c && (i._d = false), Je();
    const s = i && Il(i(n)), a = n.key || s && s.key, c = Di(Oe, {
      key: (a && !Nt(a) ? a : `_${t}`) + (!s && o ? "_fb" : "")
    }, s || (o ? o() : []), s && e._ === 1 ? 64 : -2);
    return !r && c.scopeId && (c.slotScopeIds = [
      c.scopeId + "-s"
    ]), i && i._c && (i._d = true), c;
  };
  function Il(e) {
    return e.some((t) => Nn(t) ? !(t.type === Te || t.type === Oe && !Il(t.children)) : true) ? e : null;
  }
  const Li = (e) => e ? Gl(e) ? Ur(e) : Li(e.parent) : null, uo = be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Li(e.parent),
    $root: (e) => Li(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Al(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ds(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = il.bind(e.proxy)),
    $watch: (e) => Od.bind(e)
  }), oi = (e, t) => e !== ee && !e.__isScriptSetup && te(e, t), nd = {
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
          if (oi(o, t)) return s[t] = 1, o[t];
          if (r !== ee && te(r, t)) return s[t] = 2, r[t];
          if ((u = e.propsOptions[0]) && te(u, t)) return s[t] = 3, i[t];
          if (n !== ee && te(n, t)) return s[t] = 4, n[t];
          xi && (s[t] = 0);
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
      return oi(r, t) ? (r[t] = n, true) : o !== ee && te(o, t) ? (o[t] = n, true) : te(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i, type: s } }, a) {
      let c, u;
      return !!(n[a] || e !== ee && a[0] !== "$" && te(e, a) || oi(t, a) || (c = i[0]) && te(c, a) || te(o, a) || te(uo, a) || te(r.config.globalProperties, a) || (u = s.__cssModules) && u[a]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : te(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function rr(e) {
    return W(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  xw = function(e, t) {
    return !e || !t ? e || t : W(e) && W(t) ? e.concat(t) : be({}, rr(e), rr(t));
  };
  let xi = true;
  function od(e) {
    const t = Al(e), n = e.proxy, o = e.ctx;
    xi = false, t.beforeCreate && Xs(t.beforeCreate, e, "bc");
    const { data: r, computed: i, methods: s, watch: a, provide: c, inject: u, created: l, beforeMount: d, mounted: p, beforeUpdate: m, updated: g, activated: w, deactivated: P, beforeDestroy: S, beforeUnmount: E, destroyed: L, unmounted: v, render: D, renderTracked: K, renderTriggered: z, errorCaptured: $, serverPrefetch: M, expose: j, inheritAttrs: J, components: U, directives: oe, filters: we } = t;
    if (u && rd(u, o, null), s) for (const X in s) {
      const ie = s[X];
      V(ie) && (o[X] = ie.bind(n));
    }
    if (r) {
      const X = r.call(n, n);
      le(X) && (e.data = Lr(X));
    }
    if (xi = true, i) for (const X in i) {
      const ie = i[X], tn = V(ie) ? ie.bind(n, n) : V(ie.get) ? ie.get.bind(n, n) : Ze, Po = !V(ie) && V(ie.set) ? ie.set.bind(n) : Ze, nn = Ts({
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
    if (a) for (const X in a) Ol(a[X], o, n, X);
    if (c) {
      const X = V(c) ? c.call(n) : c;
      Reflect.ownKeys(X).forEach((ie) => {
        ud(ie, X[ie]);
      });
    }
    l && Xs(l, e, "c");
    function fe(X, ie) {
      W(ie) ? ie.forEach((tn) => X(tn.bind(n))) : ie && X(ie.bind(n));
    }
    if (fe(Kf, d), fe(Ro, p), fe(El, m), fe(ps, g), fe(Vf, w), fe(Yf, P), fe(Qf, $), fe(Xf, K), fe(Jf, z), fe(gs, E), fe(ms, v), fe(zf, M), W(j)) if (j.length) {
      const X = e.exposed || (e.exposed = {});
      j.forEach((ie) => {
        Object.defineProperty(X, ie, {
          get: () => n[ie],
          set: (tn) => n[ie] = tn,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    D && e.render === Ze && (e.render = D), J != null && (e.inheritAttrs = J), U && (e.components = U), oe && (e.directives = oe), M && vl(e);
  }
  function rd(e, t, n = Ze) {
    W(e) && (e = Mi(e));
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
  function Xs(e, t, n) {
    tt(W(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Ol(e, t, n, o) {
    let r = o.includes(".") ? Hl(n, o) : () => n[o];
    if (pe(e)) {
      const i = t[e];
      V(i) && On(r, i);
    } else if (V(e)) On(r, e.bind(n));
    else if (le(e)) if (W(e)) e.forEach((i) => Ol(i, t, n, o));
    else {
      const i = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(i) && On(r, i, e);
    }
  }
  function Al(e) {
    const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: s } } = e.appContext, a = i.get(t);
    let c;
    return a ? c = a : !r.length && !n && !o ? c = t : (c = {}, r.length && r.forEach((u) => ir(c, u, s, true)), ir(c, t, s)), le(t) && i.set(t, c), c;
  }
  function ir(e, t, n, o = false) {
    const { mixins: r, extends: i } = t;
    i && ir(e, i, n, true), r && r.forEach((s) => ir(e, s, n, true));
    for (const s in t) if (!(o && s === "expose")) {
      const a = id[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
    return e;
  }
  const id = {
    data: Qs,
    props: Zs,
    emits: Zs,
    methods: to,
    computed: to,
    beforeCreate: _e,
    created: _e,
    beforeMount: _e,
    mounted: _e,
    beforeUpdate: _e,
    updated: _e,
    beforeDestroy: _e,
    beforeUnmount: _e,
    destroyed: _e,
    unmounted: _e,
    activated: _e,
    deactivated: _e,
    errorCaptured: _e,
    serverPrefetch: _e,
    components: to,
    directives: to,
    watch: ad,
    provide: Qs,
    inject: sd
  };
  function Qs(e, t) {
    return t ? e ? function() {
      return be(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function sd(e, t) {
    return to(Mi(e), Mi(t));
  }
  function Mi(e) {
    if (W(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function _e(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function to(e, t) {
    return e ? be(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Zs(e, t) {
    return e ? W(e) && W(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : be(/* @__PURE__ */ Object.create(null), rr(e), rr(t ?? {})) : t;
  }
  function ad(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = be(/* @__PURE__ */ Object.create(null), e);
    for (const o in t) n[o] = _e(e[o], t[o]);
    return n;
  }
  function _l() {
    return {
      app: null,
      config: {
        isNativeTag: _c,
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
  let cd = 0;
  function ld(e, t) {
    return function(o, r = null) {
      V(o) || (o = be({}, o)), r != null && !le(r) && (r = null);
      const i = _l(), s = /* @__PURE__ */ new WeakSet(), a = [];
      let c = false;
      const u = i.app = {
        _uid: cd++,
        _component: o,
        _props: r,
        _container: null,
        _context: i,
        _instance: null,
        version: qd,
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
            const m = u._ceVNode || $e(o, r);
            return m.appContext = i, p === true ? p = "svg" : p === false && (p = void 0), e(m, l, p), c = true, u._container = l, l.__vue_app__ = u, Ur(m.component);
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
  ud = function(e, t) {
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
  fd = function() {
    return !!(Zt() || hn);
  };
  const Rl = {}, Cl = () => Object.create(Rl), Nl = (e) => Object.getPrototypeOf(e) === Rl;
  function dd(e, t, n, o = false) {
    const r = {}, i = Cl();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Pl(e, t, r, i);
    for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
    n ? e.props = o ? r : If(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
  }
  function hd(e, t, n, o) {
    const { props: r, attrs: i, vnode: { patchFlag: s } } = e, a = Z(r), [c] = e.propsOptions;
    let u = false;
    if ((o || s > 0) && !(s & 16)) {
      if (s & 8) {
        const l = e.vnode.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          let p = l[d];
          if (Hr(e.emitsOptions, p)) continue;
          const m = t[p];
          if (c) if (te(i, p)) m !== i[p] && (i[p] = m, u = true);
          else {
            const g = je(p);
            r[g] = ki(c, a, g, m, e, false);
          }
          else m !== i[p] && (i[p] = m, u = true);
        }
      }
    } else {
      Pl(e, t, r, i) && (u = true);
      let l;
      for (const d in a) (!t || !te(t, d) && ((l = Pt(d)) === d || !te(t, l))) && (c ? n && (n[d] !== void 0 || n[l] !== void 0) && (r[d] = ki(c, a, d, void 0, e, true)) : delete r[d]);
      if (i !== a) for (const d in i) (!t || !te(t, d)) && (delete i[d], u = true);
    }
    u && Tt(e.attrs, "set", "");
  }
  function Pl(e, t, n, o) {
    const [r, i] = e.propsOptions;
    let s = false, a;
    if (t) for (let c in t) {
      if (ro(c)) continue;
      const u = t[c];
      let l;
      r && te(r, l = je(c)) ? !i || !i.includes(l) ? n[l] = u : (a || (a = {}))[l] = u : Hr(e.emitsOptions, c) || (!(c in o) || u !== o[c]) && (o[c] = u, s = true);
    }
    if (i) {
      const c = Z(n), u = a || ee;
      for (let l = 0; l < i.length; l++) {
        const d = i[l];
        n[d] = ki(r, c, d, u[d], e, !te(u, d));
      }
    }
    return s;
  }
  function ki(e, t, n, o, r, i) {
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
  const pd = /* @__PURE__ */ new WeakMap();
  function Ll(e, t, n = false) {
    const o = n ? pd : t.propsCache, r = o.get(e);
    if (r) return r;
    const i = e.props, s = {}, a = [];
    let c = false;
    if (!V(e)) {
      const l = (d) => {
        c = true;
        const [p, m] = Ll(d, t, true);
        be(s, p), m && a.push(...m);
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    if (!i && !c) return le(e) && o.set(e, En), En;
    if (W(i)) for (let l = 0; l < i.length; l++) {
      const d = je(i[l]);
      ea(d) && (s[d] = ee);
    }
    else if (i) for (const l in i) {
      const d = je(l);
      if (ea(d)) {
        const p = i[l], m = s[d] = W(p) || V(p) ? {
          type: p
        } : be({}, p), g = m.type;
        let w = false, P = true;
        if (W(g)) for (let S = 0; S < g.length; ++S) {
          const E = g[S], L = V(E) && E.name;
          if (L === "Boolean") {
            w = true;
            break;
          } else L === "String" && (P = false);
        }
        else w = V(g) && g.name === "Boolean";
        m[0] = w, m[1] = P, (w || te(m, "default")) && a.push(d);
      }
    }
    const u = [
      s,
      a
    ];
    return le(e) && o.set(e, u), u;
  }
  function ea(e) {
    return e[0] !== "$" && !ro(e);
  }
  const bs = (e) => e === "_" || e === "_ctx" || e === "$stable", ys = (e) => W(e) ? e.map(dt) : [
    dt(e)
  ], gd = (e, t, n) => {
    if (t._n) return t;
    const o = Uf((...r) => ys(t(...r)), n);
    return o._c = false, o;
  }, xl = (e, t, n) => {
    const o = e._ctx;
    for (const r in e) {
      if (bs(r)) continue;
      const i = e[r];
      if (V(i)) t[r] = gd(r, i, o);
      else if (i != null) {
        const s = ys(i);
        t[r] = () => s;
      }
    }
  }, Ml = (e, t) => {
    const n = ys(t);
    e.slots.default = () => n;
  }, kl = (e, t, n) => {
    for (const o in t) (n || !bs(o)) && (e[o] = t[o]);
  }, md = (e, t, n) => {
    const o = e.slots = Cl();
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (kl(o, t, n), n && Lc(o, "_", r, true)) : xl(t, o);
    } else t && Ml(e, t);
  }, bd = (e, t, n) => {
    const { vnode: o, slots: r } = e;
    let i = true, s = ee;
    if (o.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? i = false : kl(r, t, n) : (i = !t.$stable, xl(t, r)), s = t;
    } else t && (Ml(e, t), s = {
      default: 1
    });
    if (i) for (const a in r) !bs(a) && s[a] == null && delete r[a];
  }, ye = Ld;
  function yd(e) {
    return wd(e);
  }
  function wd(e, t) {
    const n = Rr();
    n.__VUE__ = true;
    const { insert: o, remove: r, patchProp: i, createElement: s, createText: a, createComment: c, setText: u, setElementText: l, parentNode: d, nextSibling: p, setScopeId: m = Ze, insertStaticContent: g } = e, w = (f, h, b, C = null, _ = null, R = null, H = void 0, k = null, x = !!h.dynamicChildren) => {
      if (f === h) return;
      f && !Vt(f, h) && (C = Lo(f), ot(f, _, R, true), f = null), h.patchFlag === -2 && (x = false, h.dynamicChildren = null);
      const { type: N, ref: B, shapeFlag: F } = h;
      switch (N) {
        case Fr:
          P(f, h, b, C);
          break;
        case Te:
          S(f, h, b, C);
          break;
        case ho:
          f == null && E(h, b, C, H);
          break;
        case Oe:
          U(f, h, b, C, _, R, H, k, x);
          break;
        default:
          F & 1 ? D(f, h, b, C, _, R, H, k, x) : F & 6 ? oe(f, h, b, C, _, R, H, k, x) : (F & 64 || F & 128) && N.process(f, h, b, C, _, R, H, k, x, $n);
      }
      B != null && _ ? lo(B, f && f.ref, R, h || f, !h) : B == null && f && f.ref != null && lo(f.ref, null, R, f, true);
    }, P = (f, h, b, C) => {
      if (f == null) o(h.el = a(h.children), b, C);
      else {
        const _ = h.el = f.el;
        h.children !== f.children && u(_, h.children);
      }
    }, S = (f, h, b, C) => {
      f == null ? o(h.el = c(h.children || ""), b, C) : h.el = f.el;
    }, E = (f, h, b, C) => {
      [f.el, f.anchor] = g(f.children, h, b, C, f.el, f.anchor);
    }, L = ({ el: f, anchor: h }, b, C) => {
      let _;
      for (; f && f !== h; ) _ = p(f), o(f, b, C), f = _;
      o(h, b, C);
    }, v = ({ el: f, anchor: h }) => {
      let b;
      for (; f && f !== h; ) b = p(f), r(f), f = b;
      r(h);
    }, D = (f, h, b, C, _, R, H, k, x) => {
      h.type === "svg" ? H = "svg" : h.type === "math" && (H = "mathml"), f == null ? K(h, b, C, _, R, H, k, x) : M(f, h, _, R, H, k, x);
    }, K = (f, h, b, C, _, R, H, k) => {
      let x, N;
      const { props: B, shapeFlag: F, transition: G, dirs: Y } = f;
      if (x = f.el = s(f.type, R, B && B.is, B), F & 8 ? l(x, f.children) : F & 16 && $(f.children, x, null, C, _, ri(f, R), H, k), Y && on(f, null, C, "created"), z(x, f, f.scopeId, H, C), B) {
        for (const se in B) se !== "value" && !ro(se) && i(x, se, null, B[se], R, C);
        "value" in B && i(x, "value", null, B.value, R), (N = B.onVnodeBeforeMount) && We(N, C, f);
      }
      Y && on(f, null, C, "beforeMount");
      const Q = vd(_, G);
      Q && G.beforeEnter(x), o(x, h, b), ((N = B && B.onVnodeMounted) || Q || Y) && ye(() => {
        N && We(N, C, f), Q && G.enter(x), Y && on(f, null, C, "mounted");
      }, _);
    }, z = (f, h, b, C, _) => {
      if (b && m(f, b), C) for (let R = 0; R < C.length; R++) m(f, C[R]);
      if (_) {
        let R = _.subTree;
        if (h === R || ar(R.type) && (R.ssContent === h || R.ssFallback === h)) {
          const H = _.vnode;
          z(f, H, H.scopeId, H.slotScopeIds, _.parent);
        }
      }
    }, $ = (f, h, b, C, _, R, H, k, x = 0) => {
      for (let N = x; N < f.length; N++) {
        const B = f[N] = k ? Bt(f[N]) : dt(f[N]);
        w(null, B, h, b, C, _, R, H, k);
      }
    }, M = (f, h, b, C, _, R, H) => {
      const k = h.el = f.el;
      let { patchFlag: x, dynamicChildren: N, dirs: B } = h;
      x |= f.patchFlag & 16;
      const F = f.props || ee, G = h.props || ee;
      let Y;
      if (b && rn(b, false), (Y = G.onVnodeBeforeUpdate) && We(Y, b, h, f), B && on(h, f, b, "beforeUpdate"), b && rn(b, true), (F.innerHTML && G.innerHTML == null || F.textContent && G.textContent == null) && l(k, ""), N ? j(f.dynamicChildren, N, k, b, C, ri(h, _), R) : H || ie(f, h, k, null, b, C, ri(h, _), R, false), x > 0) {
        if (x & 16) J(k, F, G, b, _);
        else if (x & 2 && F.class !== G.class && i(k, "class", null, G.class, _), x & 4 && i(k, "style", F.style, G.style, _), x & 8) {
          const Q = h.dynamicProps;
          for (let se = 0; se < Q.length; se++) {
            const ne = Q[se], Ne = F[ne], Pe = G[ne];
            (Pe !== Ne || ne === "value") && i(k, ne, Ne, Pe, _, b);
          }
        }
        x & 1 && f.children !== h.children && l(k, h.children);
      } else !H && N == null && J(k, F, G, b, _);
      ((Y = G.onVnodeUpdated) || B) && ye(() => {
        Y && We(Y, b, h, f), B && on(h, f, b, "updated");
      }, C);
    }, j = (f, h, b, C, _, R, H) => {
      for (let k = 0; k < h.length; k++) {
        const x = f[k], N = h[k], B = x.el && (x.type === Oe || !Vt(x, N) || x.shapeFlag & 198) ? d(x.el) : b;
        w(x, N, B, null, C, _, R, H, true);
      }
    }, J = (f, h, b, C, _) => {
      if (h !== b) {
        if (h !== ee) for (const R in h) !ro(R) && !(R in b) && i(f, R, h[R], null, _, C);
        for (const R in b) {
          if (ro(R)) continue;
          const H = b[R], k = h[R];
          H !== k && R !== "value" && i(f, R, k, H, _, C);
        }
        "value" in b && i(f, "value", h.value, b.value, _);
      }
    }, U = (f, h, b, C, _, R, H, k, x) => {
      const N = h.el = f ? f.el : a(""), B = h.anchor = f ? f.anchor : a("");
      let { patchFlag: F, dynamicChildren: G, slotScopeIds: Y } = h;
      Y && (k = k ? k.concat(Y) : Y), f == null ? (o(N, b, C), o(B, b, C), $(h.children || [], b, B, _, R, H, k, x)) : F > 0 && F & 64 && G && f.dynamicChildren ? (j(f.dynamicChildren, G, b, _, R, H, k), (h.key != null || _ && h === _.subTree) && ws(f, h, true)) : ie(f, h, b, B, _, R, H, k, x);
    }, oe = (f, h, b, C, _, R, H, k, x) => {
      h.slotScopeIds = k, f == null ? h.shapeFlag & 512 ? _.ctx.activate(h, b, C, H, x) : we(h, b, C, _, R, H, x) : ze(f, h, x);
    }, we = (f, h, b, C, _, R, H) => {
      const k = f.component = $d(f, C, _);
      if (Mr(f) && (k.ctx.renderer = $n), jd(k, false, H), k.asyncDep) {
        if (_ && _.registerDep(k, fe, H), !f.el) {
          const x = k.subTree = $e(Te);
          S(null, x, h, b), f.placeholder = x.el;
        }
      } else fe(k, f, h, b, _, R, H);
    }, ze = (f, h, b) => {
      const C = h.component = f.component;
      if (Nd(f, h, b)) if (C.asyncDep && !C.asyncResolved) {
        X(C, h, b);
        return;
      } else C.next = h, C.update();
      else h.el = f.el, C.vnode = h;
    }, fe = (f, h, b, C, _, R, H) => {
      const k = () => {
        if (f.isMounted) {
          let { next: F, bu: G, u: Y, parent: Q, vnode: se } = f;
          {
            const it = Dl(f);
            if (it) {
              F && (F.el = se.el, X(f, F, H)), it.asyncDep.then(() => {
                f.isUnmounted || k();
              });
              return;
            }
          }
          let ne = F, Ne;
          rn(f, false), F ? (F.el = se.el, X(f, F, H)) : F = se, G && io(G), (Ne = F.props && F.props.onVnodeBeforeUpdate) && We(Ne, Q, F, se), rn(f, true);
          const Pe = ta(f), rt = f.subTree;
          f.subTree = Pe, w(rt, Pe, d(rt.el), Lo(rt), f, _, R), F.el = Pe.el, ne === null && Pd(f, Pe.el), Y && ye(Y, _), (Ne = F.props && F.props.onVnodeUpdated) && ye(() => We(Ne, Q, F, se), _);
        } else {
          let F;
          const { el: G, props: Y } = h, { bm: Q, m: se, parent: ne, root: Ne, type: Pe } = f, rt = dn(h);
          rn(f, false), Q && io(Q), !rt && (F = Y && Y.onVnodeBeforeMount) && We(F, ne, h), rn(f, true);
          {
            Ne.ce && Ne.ce._def.shadowRoot !== false && Ne.ce._injectChildStyle(Pe);
            const it = f.subTree = ta(f);
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
      const x = f.effect = new Uc(k);
      f.scope.off();
      const N = f.update = x.run.bind(x), B = f.job = x.runIfDirty.bind(x);
      B.i = f, B.id = f.uid, x.scheduler = () => ds(B), rn(f, true), N();
    }, X = (f, h, b) => {
      h.component = f;
      const C = f.vnode.props;
      f.vnode = h, f.next = null, hd(f, h.props, C, b), bd(f, h.children, b), At(), Bs(f), _t();
    }, ie = (f, h, b, C, _, R, H, k, x = false) => {
      const N = f && f.children, B = f ? f.shapeFlag : 0, F = h.children, { patchFlag: G, shapeFlag: Y } = h;
      if (G > 0) {
        if (G & 128) {
          Po(N, F, b, C, _, R, H, k, x);
          return;
        } else if (G & 256) {
          tn(N, F, b, C, _, R, H, k, x);
          return;
        }
      }
      Y & 8 ? (B & 16 && Un(N, _, R), F !== N && l(b, F)) : B & 16 ? Y & 16 ? Po(N, F, b, C, _, R, H, k, x) : Un(N, _, R, true) : (B & 8 && l(b, ""), Y & 16 && $(F, b, C, _, R, H, k, x));
    }, tn = (f, h, b, C, _, R, H, k, x) => {
      f = f || En, h = h || En;
      const N = f.length, B = h.length, F = Math.min(N, B);
      let G;
      for (G = 0; G < F; G++) {
        const Y = h[G] = x ? Bt(h[G]) : dt(h[G]);
        w(f[G], Y, b, null, _, R, H, k, x);
      }
      N > B ? Un(f, _, R, true, false, F) : $(h, b, C, _, R, H, k, x, F);
    }, Po = (f, h, b, C, _, R, H, k, x) => {
      let N = 0;
      const B = h.length;
      let F = f.length - 1, G = B - 1;
      for (; N <= F && N <= G; ) {
        const Y = f[N], Q = h[N] = x ? Bt(h[N]) : dt(h[N]);
        if (Vt(Y, Q)) w(Y, Q, b, null, _, R, H, k, x);
        else break;
        N++;
      }
      for (; N <= F && N <= G; ) {
        const Y = f[F], Q = h[G] = x ? Bt(h[G]) : dt(h[G]);
        if (Vt(Y, Q)) w(Y, Q, b, null, _, R, H, k, x);
        else break;
        F--, G--;
      }
      if (N > F) {
        if (N <= G) {
          const Y = G + 1, Q = Y < B ? h[Y].el : C;
          for (; N <= G; ) w(null, h[N] = x ? Bt(h[N]) : dt(h[N]), b, Q, _, R, H, k, x), N++;
        }
      } else if (N > G) for (; N <= F; ) ot(f[N], _, R, true), N++;
      else {
        const Y = N, Q = N, se = /* @__PURE__ */ new Map();
        for (N = Q; N <= G; N++) {
          const He = h[N] = x ? Bt(h[N]) : dt(h[N]);
          He.key != null && se.set(He.key, N);
        }
        let ne, Ne = 0;
        const Pe = G - Q + 1;
        let rt = false, it = 0;
        const jn = new Array(Pe);
        for (N = 0; N < Pe; N++) jn[N] = 0;
        for (N = Y; N <= F; N++) {
          const He = f[N];
          if (Ne >= Pe) {
            ot(He, _, R, true);
            continue;
          }
          let st;
          if (He.key != null) st = se.get(He.key);
          else for (ne = Q; ne <= G; ne++) if (jn[ne - Q] === 0 && Vt(He, h[ne])) {
            st = ne;
            break;
          }
          st === void 0 ? ot(He, _, R, true) : (jn[st - Q] = N + 1, st >= it ? it = st : rt = true, w(He, h[st], b, null, _, R, H, k, x), Ne++);
        }
        const Fs = rt ? Td(jn) : En;
        for (ne = Fs.length - 1, N = Pe - 1; N >= 0; N--) {
          const He = Q + N, st = h[He], Us = h[He + 1], $s = He + 1 < B ? Us.el || Us.placeholder : C;
          jn[N] === 0 ? w(null, st, b, $s, _, R, H, k, x) : rt && (ne < 0 || N !== Fs[ne] ? nn(st, b, $s, 2) : ne--);
        }
      }
    }, nn = (f, h, b, C, _ = null) => {
      const { el: R, type: H, transition: k, children: x, shapeFlag: N } = f;
      if (N & 6) {
        nn(f.component.subTree, h, b, C);
        return;
      }
      if (N & 128) {
        f.suspense.move(h, b, C);
        return;
      }
      if (N & 64) {
        H.move(f, h, b, $n);
        return;
      }
      if (H === Oe) {
        o(R, h, b);
        for (let F = 0; F < x.length; F++) nn(x[F], h, b, C);
        o(f.anchor, h, b);
        return;
      }
      if (H === ho) {
        L(f, h, b);
        return;
      }
      if (C !== 2 && N & 1 && k) if (C === 0) k.beforeEnter(R), o(R, h, b), ye(() => k.enter(R), _);
      else {
        const { leave: F, delayLeave: G, afterLeave: Y } = k, Q = () => {
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
      const { type: R, props: H, ref: k, children: x, dynamicChildren: N, shapeFlag: B, patchFlag: F, dirs: G, cacheIndex: Y } = f;
      if (F === -2 && (_ = false), k != null && (At(), lo(k, null, b, f, true), _t()), Y != null && (h.renderCache[Y] = void 0), B & 256) {
        h.ctx.deactivate(f);
        return;
      }
      const Q = B & 1 && G, se = !dn(f);
      let ne;
      if (se && (ne = H && H.onVnodeBeforeUnmount) && We(ne, h, f), B & 6) Gu(f.component, b, C);
      else {
        if (B & 128) {
          f.suspense.unmount(b, C);
          return;
        }
        Q && on(f, null, h, "beforeUnmount"), B & 64 ? f.type.remove(f, h, b, $n, C) : N && !N.hasOnce && (R !== Oe || F > 0 && F & 64) ? Un(N, h, b, false, true) : (R === Oe && F & 384 || !_ && B & 16) && Un(x, h, b), C && Ds(f);
      }
      (se && (ne = H && H.onVnodeUnmounted) || Q) && ye(() => {
        ne && We(ne, h, f), Q && on(f, null, h, "unmounted");
      }, b);
    }, Ds = (f) => {
      const { type: h, el: b, anchor: C, transition: _ } = f;
      if (h === Oe) {
        ju(b, C);
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
        const { leave: H, delayLeave: k } = _, x = () => H(b, R);
        k ? k(f.el, R, x) : x();
      } else R();
    }, ju = (f, h) => {
      let b;
      for (; f !== h; ) b = p(f), r(f), f = b;
      r(h);
    }, Gu = (f, h, b) => {
      const { bum: C, scope: _, job: R, subTree: H, um: k, m: x, a: N } = f;
      sr(x), sr(N), C && io(C), _.stop(), R && (R.flags |= 8, ot(H, f, h, b)), k && ye(k, h), ye(() => {
        f.isUnmounted = true;
      }, h);
    }, Un = (f, h, b, C = false, _ = false, R = 0) => {
      for (let H = R; H < f.length; H++) ot(f[H], h, b, C, _);
    }, Lo = (f) => {
      if (f.shapeFlag & 6) return Lo(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const h = p(f.anchor || f.el), b = h && h[fl];
      return b ? p(b) : h;
    };
    let zr = false;
    const Hs = (f, h, b) => {
      f == null ? h._vnode && ot(h._vnode, null, null, true) : w(h._vnode || null, f, h, null, null, null, b), h._vnode = f, zr || (zr = true, Bs(), cl(), zr = false);
    }, $n = {
      p: w,
      um: ot,
      m: nn,
      r: Ds,
      mt: we,
      mc: $,
      pc: ie,
      pbc: j,
      n: Lo,
      o: e
    };
    return {
      render: Hs,
      hydrate: void 0,
      createApp: ld(Hs)
    };
  }
  function ri({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function rn({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function vd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ws(e, t, n = false) {
    const o = e.children, r = t.children;
    if (W(o) && W(r)) for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let a = r[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = Bt(r[i]), a.el = s.el), !n && a.patchFlag !== -2 && ws(s, a)), a.type === Fr && a.patchFlag !== -1 && (a.el = s.el), a.type === Te && !a.el && (a.el = s.el);
    }
  }
  function Td(e) {
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
  function Dl(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Dl(t);
  }
  function sr(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Ed = Symbol.for("v-scx"), Sd = () => fo(Ed);
  Mw = function(e, t) {
    return Dr(e, null, t);
  };
  function Id(e, t) {
    return Dr(e, null, {
      flush: "sync"
    });
  }
  On = function(e, t, n) {
    return Dr(e, t, n);
  };
  function Dr(e, t, n = ee) {
    const { immediate: o, deep: r, flush: i, once: s } = n, a = be({}, n), c = t && o || !t && i !== "post";
    let u;
    if (Eo) {
      if (i === "sync") {
        const m = Sd();
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
      g ? m() : ds(m);
    }), a.augmentJob = (m) => {
      t && (m.flags |= 4), d && (m.flags |= 2, l && (m.id = l.uid, m.i = l));
    };
    const p = Df(e, t, a);
    return Eo && (u ? u.push(p) : c && p()), p;
  }
  function Od(e, t, n) {
    const o = this.proxy, r = pe(e) ? e.includes(".") ? Hl(o, e) : () => o[e] : e.bind(o, o);
    let i;
    V(t) ? i = t : (i = t.handler, n = t);
    const s = Co(this), a = Dr(r, i.bind(o), n);
    return s(), a;
  }
  function Hl(e, t) {
    const n = t.split(".");
    return () => {
      let o = e;
      for (let r = 0; r < n.length && o; r++) o = o[n[r]];
      return o;
    };
  }
  kw = function(e, t, n = ee) {
    const o = Zt(), r = je(t), i = Pt(t), s = Fl(e, r), a = Cf((c, u) => {
      let l, d = ee, p;
      return Id(() => {
        const m = e[r];
        De(l, m) && (l = m, u());
      }), {
        get() {
          return c(), n.get ? n.get(l) : l;
        },
        set(m) {
          const g = n.set ? n.set(m) : m;
          if (!De(g, l) && !(d !== ee && De(m, d))) return;
          const w = o.vnode.props;
          w && (t in w || r in w || i in w) && (`onUpdate:${t}` in w || `onUpdate:${r}` in w || `onUpdate:${i}` in w) || (l = m, u()), o.emit(`update:${t}`, g), De(m, g) && De(m, d) && !De(g, p) && u(), d = m, p = g;
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
  const Fl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${Pt(t)}Modifiers`];
  function Ad(e, t, ...n) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || ee;
    let r = n;
    const i = t.startsWith("update:"), s = i && Fl(o, t.slice(7));
    s && (s.trim && (r = n.map((l) => pe(l) ? l.trim() : l)), s.number && (r = n.map(Ku)));
    let a, c = o[a = Jr(t)] || o[a = Jr(je(t))];
    !c && i && (c = o[a = Jr(Pt(t))]), c && tt(c, e, 6, r);
    const u = o[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, tt(u, e, 6, r);
    }
  }
  const _d = /* @__PURE__ */ new WeakMap();
  function Ul(e, t, n = false) {
    const o = n ? _d : t.emitsCache, r = o.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let s = {}, a = false;
    if (!V(e)) {
      const c = (u) => {
        const l = Ul(u, t, true);
        l && (a = true, be(s, l));
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !i && !a ? (le(e) && o.set(e, null), null) : (W(i) ? i.forEach((c) => s[c] = null) : be(s, i), le(e) && o.set(e, s), s);
  }
  function Hr(e, t) {
    return !e || !Or(t) ? false : (t = t.slice(2).replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, Pt(t)) || te(e, t));
  }
  function ta(e) {
    const { type: t, vnode: n, proxy: o, withProxy: r, propsOptions: [i], slots: s, attrs: a, emit: c, render: u, renderCache: l, props: d, data: p, setupState: m, ctx: g, inheritAttrs: w } = e, P = nr(e);
    let S, E;
    try {
      if (n.shapeFlag & 4) {
        const v = r || o, D = v;
        S = dt(u.call(D, v, l, d, m, p, g)), E = a;
      } else {
        const v = t;
        S = dt(v.length > 1 ? v(d, {
          attrs: a,
          slots: s,
          emit: c
        }) : v(d, null)), E = t.props ? a : Rd(a);
      }
    } catch (v) {
      po.length = 0, xr(v, e, 1), S = $e(Te);
    }
    let L = S;
    if (E && w !== false) {
      const v = Object.keys(E), { shapeFlag: D } = L;
      v.length && D & 7 && (i && v.some(ts) && (E = Cd(E, i)), L = Rt(L, E, false, true));
    }
    return n.dirs && (L = Rt(L, null, false, true), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && Qt(L, n.transition), S = L, nr(P), S;
  }
  const Rd = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Or(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Cd = (e, t) => {
    const n = {};
    for (const o in e) (!ts(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  };
  function Nd(e, t, n) {
    const { props: o, children: r, component: i } = e, { props: s, children: a, patchFlag: c } = t, u = i.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && c >= 0) {
      if (c & 1024) return true;
      if (c & 16) return o ? na(o, s, u) : !!s;
      if (c & 8) {
        const l = t.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          const p = l[d];
          if (s[p] !== o[p] && !Hr(u, p)) return true;
        }
      }
    } else return (r || a) && (!a || !a.$stable) ? true : o === s ? false : o ? s ? na(o, s, u) : true : !!s;
    return false;
  }
  function na(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return true;
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      if (t[i] !== e[i] && !Hr(n, i)) return true;
    }
    return false;
  }
  function Pd({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const o = t.subTree;
      if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const ar = (e) => e.__isSuspense;
  function Ld(e, t) {
    t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : al(e);
  }
  let ho, po;
  Oe = Symbol.for("v-fgt");
  Fr = Symbol.for("v-txt");
  Te = Symbol.for("v-cmt");
  ho = Symbol.for("v-stc");
  po = [];
  let Ue = null;
  Je = function(e = false) {
    po.push(Ue = e ? null : []);
  };
  function xd() {
    po.pop(), Ue = po[po.length - 1] || null;
  }
  let To = 1;
  function cr(e, t = false) {
    To += e, e < 0 && Ue && t && (Ue.hasOnce = true);
  }
  function $l(e) {
    return e.dynamicChildren = To > 0 ? Ue || En : null, xd(), To > 0 && Ue && Ue.push(e), e;
  }
  Dt = function(e, t, n, o, r, i) {
    return $l(de(e, t, n, o, r, i, true));
  };
  Di = function(e, t, n, o, r) {
    return $l($e(e, t, n, o, r, true));
  };
  Nn = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function Vt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const jl = ({ key: e }) => e ?? null, Ko = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || ge(e) || V(e) ? {
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
      key: t && jl(t),
      ref: t && Ko(t),
      scopeId: ul,
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
    return a ? (vs(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), To > 0 && !s && Ue && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Ue.push(c), c;
  };
  $e = Md;
  function Md(e, t = null, n = null, o = 0, r = null, i = false) {
    if ((!e || e === Sl) && (e = Te), Nn(e)) {
      const a = Rt(e, t, true);
      return n && vs(a, n), To > 0 && !i && Ue && (a.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = a : Ue.push(a)), a.patchFlag = -2, a;
    }
    if (Vd(e) && (e = e.__vccOpts), t) {
      t = kd(t);
      let { class: a, style: c } = t;
      a && !pe(a) && (t.class = rs(a)), le(c) && (us(c) && !W(c) && (c = be({}, c)), t.style = Cr(c));
    }
    const s = pe(e) ? 1 : ar(e) ? 128 : dl(e) ? 64 : le(e) ? 4 : V(e) ? 2 : 0;
    return de(e, t, n, o, r, s, i, true);
  }
  function kd(e) {
    return e ? us(e) || Nl(e) ? be({}, e) : e : null;
  }
  Rt = function(e, t, n = false, o = false) {
    const { props: r, ref: i, patchFlag: s, children: a, transition: c } = e, u = t ? Hd(r || {}, t) : r, l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && jl(u),
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
  Dd = function(e = " ", t = 0) {
    return $e(Fr, null, e, t);
  };
  Dw = function(e, t) {
    const n = $e(ho, null, e);
    return n.staticCount = t, n;
  };
  ii = function(e = "", t = false) {
    return t ? (Je(), Di(Te, null, e)) : $e(Te, null, e);
  };
  function dt(e) {
    return e == null || typeof e == "boolean" ? $e(Te) : W(e) ? $e(Oe, null, e.slice()) : Nn(e) ? Bt(e) : $e(Fr, null, String(e));
  }
  function Bt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e);
  }
  function vs(e, t) {
    let n = 0;
    const { shapeFlag: o } = e;
    if (t == null) t = null;
    else if (W(t)) n = 16;
    else if (typeof t == "object") if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = false), vs(e, r()), r._c && (r._d = true));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Nl(t) ? t._ctx = Ee : r === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else V(t) ? (t = {
      default: t,
      _ctx: Ee
    }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [
      Dd(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Hd = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      for (const r in o) if (r === "class") t.class !== o.class && (t.class = rs([
        t.class,
        o.class
      ]));
      else if (r === "style") t.style = Cr([
        t.style,
        o.style
      ]);
      else if (Or(r)) {
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
  const Fd = _l();
  let Ud = 0;
  function $d(e, t, n) {
    const o = e.type, r = (t ? t.appContext : e.appContext) || Fd, i = {
      uid: Ud++,
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
      scope: new Dc(true),
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
      propsOptions: Ll(o, r),
      emitsOptions: Ul(o, r),
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
    }, i.root = t ? t.root : i, i.emit = Ad.bind(null, i), e.ce && e.ce(i), i;
  }
  let Ae = null;
  Zt = () => Ae || Ee;
  let lr, Hi;
  {
    const e = Rr(), t = (n, o) => {
      let r;
      return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
        r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
      };
    };
    lr = t("__VUE_INSTANCE_SETTERS__", (n) => Ae = n), Hi = t("__VUE_SSR_SETTERS__", (n) => Eo = n);
  }
  const Co = (e) => {
    const t = Ae;
    return lr(e), e.scope.on(), () => {
      e.scope.off(), lr(t);
    };
  }, oa = () => {
    Ae && Ae.scope.off(), lr(null);
  };
  function Gl(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Eo = false;
  function jd(e, t = false, n = false) {
    t && Hi(t);
    const { props: o, children: r } = e.vnode, i = Gl(e);
    dd(e, o, i, t), md(e, r, n || t);
    const s = i ? Gd(e, t) : void 0;
    return t && Hi(false), s;
  }
  function Gd(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nd);
    const { setup: o } = n;
    if (o) {
      At();
      const r = e.setupContext = o.length > 1 ? Bd(e) : null, i = Co(e), s = _o(o, e, 0, [
        e.props,
        r
      ]), a = Cc(s);
      if (_t(), i(), (a || e.sp) && !dn(e) && vl(e), a) {
        if (s.then(oa, oa), t) return s.then((c) => {
          ra(e, c);
        }).catch((c) => {
          xr(c, e, 0);
        });
        e.asyncDep = s;
      } else ra(e, s);
    } else Wl(e);
  }
  function ra(e, t, n) {
    V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = nl(t)), Wl(e);
  }
  function Wl(e, t, n) {
    const o = e.type;
    e.render || (e.render = o.render || Ze);
    {
      const r = Co(e);
      At();
      try {
        od(e);
      } finally {
        _t(), r();
      }
    }
  }
  const Wd = {
    get(e, t) {
      return Ie(e, "get", ""), e[t];
    }
  };
  function Bd(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Wd),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Ur(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nl(fs(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in uo) return uo[n](e);
      },
      has(t, n) {
        return n in t || n in uo;
      }
    })) : e.proxy;
  }
  function Fi(e, t = true) {
    return V(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Vd(e) {
    return V(e) && "__vccOpts" in e;
  }
  Ts = (e, t) => Mf(e, t, Eo);
  Yd = function(e, t, n) {
    const o = (i, s, a) => {
      cr(-1);
      try {
        return $e(i, s, a);
      } finally {
        cr(1);
      }
    }, r = arguments.length;
    return r === 2 ? le(t) && !W(t) ? Nn(t) ? o(e, null, [
      t
    ]) : o(e, t) : o(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Nn(n) && (n = [
      n
    ]), o(e, t, n));
  };
  const qd = "3.5.21";
  let Ui;
  const ia = typeof window < "u" && window.trustedTypes;
  if (ia) try {
    Ui = ia.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Bl, Kd, zd, wt, sa, Jd, Ht, Wn, Pn, Vl, Yl, Xd, sn, aa;
  Bl = Ui ? (e) => Ui.createHTML(e) : (e) => e;
  Kd = "http://www.w3.org/2000/svg";
  zd = "http://www.w3.org/1998/Math/MathML";
  wt = typeof document < "u" ? document : null;
  sa = wt && wt.createElement("template");
  Jd = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const r = t === "svg" ? wt.createElementNS(Kd, e) : t === "mathml" ? wt.createElementNS(zd, e) : n ? wt.createElement(e, {
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
        sa.innerHTML = Bl(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
        const a = sa.content;
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
  Vl = {
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
  Yl = be({}, ml, Vl);
  Xd = (e) => (e.displayName = "Transition", e.props = Yl, e);
  Hw = Xd((e, { slots: t }) => Yd(Gf, ql(e), t));
  sn = (e, t = []) => {
    W(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  aa = (e) => e ? W(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function ql(e) {
    const t = {};
    for (const U in e) U in Vl || (t[U] = e[U]);
    if (e.css === false) return t;
    const { name: n = "v", type: o, duration: r, enterFromClass: i = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: c = i, appearActiveClass: u = s, appearToClass: l = a, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, g = Qd(r), w = g && g[0], P = g && g[1], { onBeforeEnter: S, onEnter: E, onEnterCancelled: L, onLeave: v, onLeaveCancelled: D, onBeforeAppear: K = S, onAppear: z = E, onAppearCancelled: $ = L } = t, M = (U, oe, we, ze) => {
      U._enterCancelled = ze, jt(U, oe ? l : a), jt(U, oe ? u : s), we && we();
    }, j = (U, oe) => {
      U._isLeaving = false, jt(U, d), jt(U, m), jt(U, p), oe && oe();
    }, J = (U) => (oe, we) => {
      const ze = U ? z : E, fe = () => M(oe, U, we);
      sn(ze, [
        oe,
        fe
      ]), ca(() => {
        jt(oe, U ? c : i), ct(oe, U ? l : a), aa(ze) || la(oe, o, w, fe);
      });
    };
    return be(t, {
      onBeforeEnter(U) {
        sn(S, [
          U
        ]), ct(U, i), ct(U, s);
      },
      onBeforeAppear(U) {
        sn(K, [
          U
        ]), ct(U, c), ct(U, u);
      },
      onEnter: J(false),
      onAppear: J(true),
      onLeave(U, oe) {
        U._isLeaving = true;
        const we = () => j(U, oe);
        ct(U, d), U._enterCancelled ? (ct(U, p), $i()) : ($i(), ct(U, p)), ca(() => {
          U._isLeaving && (jt(U, d), ct(U, m), aa(v) || la(U, o, P, we));
        }), sn(v, [
          U,
          we
        ]);
      },
      onEnterCancelled(U) {
        M(U, false, void 0, true), sn(L, [
          U
        ]);
      },
      onAppearCancelled(U) {
        M(U, true, void 0, true), sn($, [
          U
        ]);
      },
      onLeaveCancelled(U) {
        j(U), sn(D, [
          U
        ]);
      }
    });
  }
  function Qd(e) {
    if (e == null) return null;
    if (le(e)) return [
      si(e.enter),
      si(e.leave)
    ];
    {
      const t = si(e);
      return [
        t,
        t
      ];
    }
  }
  function si(e) {
    return zu(e);
  }
  function ct(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Pn] || (e[Pn] = /* @__PURE__ */ new Set())).add(t);
  }
  function jt(e, t) {
    t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
    const n = e[Pn];
    n && (n.delete(t), n.size || (e[Pn] = void 0));
  }
  function ca(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Zd = 0;
  function la(e, t, n, o) {
    const r = e._endId = ++Zd, i = () => {
      r === e._endId && o();
    };
    if (n != null) return setTimeout(i, n);
    const { type: s, timeout: a, propCount: c } = Kl(e, t);
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
  function Kl(e, t) {
    const n = window.getComputedStyle(e), o = (g) => (n[g] || "").split(", "), r = o(`${Ht}Delay`), i = o(`${Ht}Duration`), s = ua(r, i), a = o(`${Wn}Delay`), c = o(`${Wn}Duration`), u = ua(a, c);
    let l = null, d = 0, p = 0;
    t === Ht ? s > 0 && (l = Ht, d = s, p = i.length) : t === Wn ? u > 0 && (l = Wn, d = u, p = c.length) : (d = Math.max(s, u), l = d > 0 ? s > u ? Ht : Wn : null, p = l ? l === Ht ? i.length : c.length : 0);
    const m = l === Ht && /\b(?:transform|all)(?:,|$)/.test(o(`${Ht}Property`).toString());
    return {
      type: l,
      timeout: d,
      propCount: p,
      hasTransform: m
    };
  }
  function ua(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, o) => fa(n) + fa(e[o])));
  }
  function fa(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function $i() {
    return document.body.offsetHeight;
  }
  function eh(e, t, n) {
    const o = e[Pn];
    o && (t = (t ? [
      t,
      ...o
    ] : [
      ...o
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let ur, zl;
  ur = Symbol("_vod");
  zl = Symbol("_vsh");
  Fw = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[ur] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Bn(e, t);
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
    e.style.display = t ? e[ur] : "none", e[zl] = !t;
  }
  const Jl = Symbol("");
  Uw = function(e) {
    const t = Zt();
    if (!t) return;
    const n = t.ut = (r = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((i) => fr(i, r));
    }, o = () => {
      const r = e(t.proxy);
      t.ce ? fr(t.ce, r) : ji(t.subTree, r), n(r);
    };
    El(() => {
      al(o);
    }), Ro(() => {
      On(o, Ze, {
        flush: "post"
      });
      const r = new MutationObserver(o);
      r.observe(t.subTree.el.parentNode, {
        childList: true
      }), ms(() => r.disconnect());
    });
  };
  function ji(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        ji(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) fr(e.el, t);
    else if (e.type === Oe) e.children.forEach((n) => ji(n, t));
    else if (e.type === ho) {
      let { el: n, anchor: o } = e;
      for (; n && (fr(n, t), n !== o); ) n = n.nextSibling;
    }
  }
  function fr(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let o = "";
      for (const r in t) {
        const i = nf(t[r]);
        n.setProperty(`--${r}`, i), o += `--${r}: ${i};`;
      }
      n[Jl] = o;
    }
  }
  const th = /(?:^|;)\s*display\s*:/;
  function nh(e, t, n) {
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
        const s = o[Jl];
        s && (n += ";" + s), o.cssText = n, i = th.test(n);
      }
    } else t && e.removeAttribute("style");
    ur in e && (e[ur] = i ? o.display : "", e[zl] && (o.display = "none"));
  }
  const da = /\s*!important$/;
  function zo(e, t, n) {
    if (W(n)) n.forEach((o) => zo(e, t, o));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const o = oh(e, t);
      da.test(n) ? e.setProperty(Pt(o), n.replace(da, ""), "important") : e[o] = n;
    }
  }
  const ha = [
    "Webkit",
    "Moz",
    "ms"
  ], ai = {};
  function oh(e, t) {
    const n = ai[t];
    if (n) return n;
    let o = je(t);
    if (o !== "filter" && o in e) return ai[t] = o;
    o = _r(o);
    for (let r = 0; r < ha.length; r++) {
      const i = ha[r] + o;
      if (i in e) return ai[t] = i;
    }
    return t;
  }
  const pa = "http://www.w3.org/1999/xlink";
  function ga(e, t, n, o, r, i = tf(t)) {
    o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(pa, t.slice(6, t.length)) : e.setAttributeNS(pa, t, n) : n == null || i && !xc(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Nt(n) ? String(n) : n);
  }
  function ma(e, t, n, o, r) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? Bl(n) : n);
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
      a === "boolean" ? n = xc(n) : n == null && a === "string" ? (n = "", s = true) : a === "number" && (n = 0, s = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    s && e.removeAttribute(r || t);
  }
  function rh(e, t, n, o) {
    e.addEventListener(t, n, o);
  }
  function ih(e, t, n, o) {
    e.removeEventListener(t, n, o);
  }
  const ba = Symbol("_vei");
  function sh(e, t, n, o, r = null) {
    const i = e[ba] || (e[ba] = {}), s = i[t];
    if (o && s) s.value = o;
    else {
      const [a, c] = ah(t);
      if (o) {
        const u = i[t] = uh(o, r);
        rh(e, a, u, c);
      } else s && (ih(e, a, s, c), i[t] = void 0);
    }
  }
  const ya = /(?:Once|Passive|Capture)$/;
  function ah(e) {
    let t;
    if (ya.test(e)) {
      t = {};
      let o;
      for (; o = e.match(ya); ) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Pt(e.slice(2)),
      t
    ];
  }
  let ci = 0;
  const ch = Promise.resolve(), lh = () => ci || (ch.then(() => ci = 0), ci = Date.now());
  function uh(e, t) {
    const n = (o) => {
      if (!o._vts) o._vts = Date.now();
      else if (o._vts <= n.attached) return;
      tt(fh(o, n.value), t, 5, [
        o
      ]);
    };
    return n.value = e, n.attached = lh(), n;
  }
  function fh(e, t) {
    if (W(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((o) => (r) => !r._stopped && o && o(r));
    } else return t;
  }
  const wa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dh = (e, t, n, o, r, i) => {
    const s = r === "svg";
    t === "class" ? eh(e, o, s) : t === "style" ? nh(e, n, o) : Or(t) ? ts(t) || sh(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : hh(e, t, o, s)) ? (ma(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ga(e, t, o, s, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !pe(o)) ? ma(e, je(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ga(e, t, o, s));
  };
  function hh(e, t, n, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && wa(t) && V(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const r = e.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return wa(t) && pe(n) ? false : t in e;
  }
  let Xl, Ql, dr, va, ph, gh;
  Xl = /* @__PURE__ */ new WeakMap();
  Ql = /* @__PURE__ */ new WeakMap();
  dr = Symbol("_moveCb");
  va = Symbol("_enterCb");
  ph = (e) => (delete e.props.mode, e);
  gh = ph({
    name: "TransitionGroup",
    props: be({}, Yl, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = Zt(), o = gl();
      let r, i;
      return ps(() => {
        if (!r.length) return;
        const s = e.moveClass || `${e.name || "v"}-move`;
        if (!wh(r[0].el, n.vnode.el, s)) {
          r = [];
          return;
        }
        r.forEach(mh), r.forEach(bh);
        const a = r.filter(yh);
        $i(), a.forEach((c) => {
          const u = c.el, l = u.style;
          ct(u, s), l.transform = l.webkitTransform = l.transitionDuration = "";
          const d = u[dr] = (p) => {
            p && p.target !== u || (!p || p.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[dr] = null, jt(u, s));
          };
          u.addEventListener("transitionend", d);
        }), r = [];
      }), () => {
        const s = Z(e), a = ql(s);
        let c = s.tag || Oe;
        if (r = [], i) for (let u = 0; u < i.length; u++) {
          const l = i[u];
          l.el && l.el instanceof Element && (r.push(l), Qt(l, vo(l, a, o, n)), Xl.set(l, l.el.getBoundingClientRect()));
        }
        i = t.default ? hs(t.default()) : [];
        for (let u = 0; u < i.length; u++) {
          const l = i[u];
          l.key != null && Qt(l, vo(l, a, o, n));
        }
        return $e(c, null, i);
      };
    }
  });
  $w = gh;
  function mh(e) {
    const t = e.el;
    t[dr] && t[dr](), t[va] && t[va]();
  }
  function bh(e) {
    Ql.set(e, e.el.getBoundingClientRect());
  }
  function yh(e) {
    const t = Xl.get(e), n = Ql.get(e), o = t.left - n.left, r = t.top - n.top;
    if (o || r) {
      const i = e.el.style;
      return i.transform = i.webkitTransform = `translate(${o}px,${r}px)`, i.transitionDuration = "0s", e;
    }
  }
  function wh(e, t, n) {
    const o = e.cloneNode(), r = e[Pn];
    r && r.forEach((a) => {
      a.split(/\s+/).forEach((c) => c && o.classList.remove(c));
    }), n.split(/\s+/).forEach((a) => a && o.classList.add(a)), o.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(o);
    const { hasTransform: s } = Kl(o);
    return i.removeChild(o), s;
  }
  let vh, Th, Eh, Sh;
  vh = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Th = {
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
    exact: (e, t) => vh.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  jw = (e, t) => {
    const n = e._withMods || (e._withMods = {}), o = t.join(".");
    return n[o] || (n[o] = ((r, ...i) => {
      for (let s = 0; s < t.length; s++) {
        const a = Th[t[s]];
        if (a && a(r, t)) return;
      }
      return e(r, ...i);
    }));
  };
  Eh = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  Gw = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
    return n[o] || (n[o] = ((r) => {
      if (!("key" in r)) return;
      const i = Pt(r.key);
      if (t.some((s) => s === i || Eh[s] === i)) return e(r);
    }));
  };
  Sh = be({
    patchProp: dh
  }, Jd);
  let Ta;
  function Ih() {
    return Ta || (Ta = yd(Sh));
  }
  const Zl = ((...e) => {
    const t = Ih().createApp(...e), { mount: n } = t;
    return t.mount = (o) => {
      const r = Ah(o);
      if (!r) return;
      const i = t._component;
      !V(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const s = n(r, false, Oh(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
    }, t;
  });
  function Oh(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Ah(e) {
    return pe(e) ? document.querySelector(e) : e;
  }
  const _h = "" + new URL("../favicon.svg", import.meta.url).href;
  let eu, Rh, gt, tu, Ch, Nh, Vn;
  eu = typeof global == "object" && global && global.Object === Object && global;
  Rh = typeof self == "object" && self && self.Object === Object && self;
  bt = eu || Rh || Function("return this")();
  gt = bt.Symbol;
  tu = Object.prototype;
  Ch = tu.hasOwnProperty;
  Nh = tu.toString;
  Vn = gt ? gt.toStringTag : void 0;
  function Ph(e) {
    var t = Ch.call(e, Vn), n = e[Vn];
    try {
      e[Vn] = void 0;
      var o = true;
    } catch {
    }
    var r = Nh.call(e);
    return o && (t ? e[Vn] = n : delete e[Vn]), r;
  }
  var Lh = Object.prototype, xh = Lh.toString;
  function Mh(e) {
    return xh.call(e);
  }
  var kh = "[object Null]", Dh = "[object Undefined]", Ea = gt ? gt.toStringTag : void 0;
  function xt(e) {
    return e == null ? e === void 0 ? Dh : kh : Ea && Ea in Object(e) ? Ph(e) : Mh(e);
  }
  nt = function(e) {
    return e != null && typeof e == "object";
  };
  var Hh = "[object Symbol]";
  Es = function(e) {
    return typeof e == "symbol" || nt(e) && xt(e) == Hh;
  };
  Fh = function(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; ) r[n] = t(e[n], n, e);
    return r;
  };
  let Sa, Ia;
  Ke = Array.isArray;
  Sa = gt ? gt.prototype : void 0;
  Ia = Sa ? Sa.toString : void 0;
  function nu(e) {
    if (typeof e == "string") return e;
    if (Ke(e)) return Fh(e, nu) + "";
    if (Es(e)) return Ia ? Ia.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
  }
  No = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  Uh = function(e) {
    return e;
  };
  var $h = "[object AsyncFunction]", jh = "[object Function]", Gh = "[object GeneratorFunction]", Wh = "[object Proxy]";
  ou = function(e) {
    if (!No(e)) return false;
    var t = xt(e);
    return t == jh || t == Gh || t == $h || t == Wh;
  };
  var li = bt["__core-js_shared__"], Oa = (function() {
    var e = /[^.]+$/.exec(li && li.keys && li.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function Bh(e) {
    return !!Oa && Oa in e;
  }
  var Vh = Function.prototype, Yh = Vh.toString;
  function gn(e) {
    if (e != null) {
      try {
        return Yh.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var qh = /[\\^$.*+?()[\]{}|]/g, Kh = /^\[object .+?Constructor\]$/, zh = Function.prototype, Jh = Object.prototype, Xh = zh.toString, Qh = Jh.hasOwnProperty, Zh = RegExp("^" + Xh.call(Qh).replace(qh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function ep(e) {
    if (!No(e) || Bh(e)) return false;
    var t = ou(e) ? Zh : Kh;
    return t.test(gn(e));
  }
  function tp(e, t) {
    return e == null ? void 0 : e[t];
  }
  function mn(e, t) {
    var n = tp(e, t);
    return ep(n) ? n : void 0;
  }
  let Gi, Aa, np;
  Gi = mn(bt, "WeakMap");
  Aa = Object.create;
  np = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!No(t)) return {};
      if (Aa) return Aa(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  _a = (function() {
    try {
      var e = mn(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function op(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length; ++n < o && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var rp = 9007199254740991, ip = /^(?:0|[1-9]\d*)$/;
  ru = function(e, t) {
    var n = typeof e;
    return t = t ?? rp, !!t && (n == "number" || n != "symbol" && ip.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  sp = function(e, t, n) {
    t == "__proto__" && _a ? _a(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  Ss = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var ap = Object.prototype, cp = ap.hasOwnProperty;
  lp = function(e, t, n) {
    var o = e[t];
    (!(cp.call(e, t) && Ss(o, n)) || n === void 0 && !(t in e)) && sp(e, t, n);
  };
  var up = 9007199254740991;
  function Is(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= up;
  }
  iu = function(e) {
    return e != null && Is(e.length) && !ou(e);
  };
  var fp = Object.prototype;
  su = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || fp;
    return e === n;
  };
  function dp(e, t) {
    for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
    return o;
  }
  var hp = "[object Arguments]";
  function Ra(e) {
    return nt(e) && xt(e) == hp;
  }
  let au, pp, gp;
  au = Object.prototype;
  pp = au.hasOwnProperty;
  gp = au.propertyIsEnumerable;
  cu = Ra(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Ra : function(e) {
    return nt(e) && pp.call(e, "callee") && !gp.call(e, "callee");
  };
  function mp() {
    return false;
  }
  let lu, Ca, bp, Na, yp, wp, vp, Tp, Ep, Sp, Ip, Op, Ap, _p, Rp, Cp, Np, Pp, Lp, xp, Mp, kp, Dp, Hp, Fp, Up, $p, jp, Gp, ue;
  lu = typeof exports == "object" && exports && !exports.nodeType && exports;
  Ca = lu && typeof module == "object" && module && !module.nodeType && module;
  bp = Ca && Ca.exports === lu;
  Na = bp ? bt.Buffer : void 0;
  yp = Na ? Na.isBuffer : void 0;
  hr = yp || mp;
  wp = "[object Arguments]";
  vp = "[object Array]";
  Tp = "[object Boolean]";
  Ep = "[object Date]";
  Sp = "[object Error]";
  Ip = "[object Function]";
  Op = "[object Map]";
  Ap = "[object Number]";
  _p = "[object Object]";
  Rp = "[object RegExp]";
  Cp = "[object Set]";
  Np = "[object String]";
  Pp = "[object WeakMap]";
  Lp = "[object ArrayBuffer]";
  xp = "[object DataView]";
  Mp = "[object Float32Array]";
  kp = "[object Float64Array]";
  Dp = "[object Int8Array]";
  Hp = "[object Int16Array]";
  Fp = "[object Int32Array]";
  Up = "[object Uint8Array]";
  $p = "[object Uint8ClampedArray]";
  jp = "[object Uint16Array]";
  Gp = "[object Uint32Array]";
  ue = {};
  ue[Mp] = ue[kp] = ue[Dp] = ue[Hp] = ue[Fp] = ue[Up] = ue[$p] = ue[jp] = ue[Gp] = true;
  ue[wp] = ue[vp] = ue[Lp] = ue[Tp] = ue[xp] = ue[Ep] = ue[Sp] = ue[Ip] = ue[Op] = ue[Ap] = ue[_p] = ue[Rp] = ue[Cp] = ue[Np] = ue[Pp] = false;
  function Wp(e) {
    return nt(e) && Is(e.length) && !!ue[xt(e)];
  }
  function Os(e) {
    return function(t) {
      return e(t);
    };
  }
  let uu, go, Bp, ui, Ln, Pa, Vp, Yp;
  uu = typeof exports == "object" && exports && !exports.nodeType && exports;
  go = uu && typeof module == "object" && module && !module.nodeType && module;
  Bp = go && go.exports === uu;
  ui = Bp && eu.process;
  Ln = (function() {
    try {
      var e = go && go.require && go.require("util").types;
      return e || ui && ui.binding && ui.binding("util");
    } catch {
    }
  })();
  Pa = Ln && Ln.isTypedArray;
  fu = Pa ? Os(Pa) : Wp;
  Vp = Object.prototype;
  Yp = Vp.hasOwnProperty;
  qp = function(e, t) {
    var n = Ke(e), o = !n && cu(e), r = !n && !o && hr(e), i = !n && !o && !r && fu(e), s = n || o || r || i, a = s ? dp(e.length, String) : [], c = a.length;
    for (var u in e) (t || Yp.call(e, u)) && !(s && (u == "length" || r && (u == "offset" || u == "parent") || i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || ru(u, c))) && a.push(u);
    return a;
  };
  function du(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Kp = du(Object.keys, Object), zp = Object.prototype, Jp = zp.hasOwnProperty;
  function Xp(e) {
    if (!su(e)) return Kp(e);
    var t = [];
    for (var n in Object(e)) Jp.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function As(e) {
    return iu(e) ? qp(e) : Xp(e);
  }
  var Qp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zp = /^\w*$/;
  function _s(e, t) {
    if (Ke(e)) return false;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || Es(e) ? true : Zp.test(e) || !Qp.test(e) || t != null && e in Object(t);
  }
  var So = mn(Object, "create");
  function eg() {
    this.__data__ = So ? So(null) : {}, this.size = 0;
  }
  function tg(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var ng = "__lodash_hash_undefined__", og = Object.prototype, rg = og.hasOwnProperty;
  function ig(e) {
    var t = this.__data__;
    if (So) {
      var n = t[e];
      return n === ng ? void 0 : n;
    }
    return rg.call(t, e) ? t[e] : void 0;
  }
  var sg = Object.prototype, ag = sg.hasOwnProperty;
  function cg(e) {
    var t = this.__data__;
    return So ? t[e] !== void 0 : ag.call(t, e);
  }
  var lg = "__lodash_hash_undefined__";
  function ug(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = So && t === void 0 ? lg : t, this;
  }
  function pn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  pn.prototype.clear = eg;
  pn.prototype.delete = tg;
  pn.prototype.get = ig;
  pn.prototype.has = cg;
  pn.prototype.set = ug;
  function fg() {
    this.__data__ = [], this.size = 0;
  }
  function $r(e, t) {
    for (var n = e.length; n--; ) if (Ss(e[n][0], t)) return n;
    return -1;
  }
  var dg = Array.prototype, hg = dg.splice;
  function pg(e) {
    var t = this.__data__, n = $r(t, e);
    if (n < 0) return false;
    var o = t.length - 1;
    return n == o ? t.pop() : hg.call(t, n, 1), --this.size, true;
  }
  function gg(e) {
    var t = this.__data__, n = $r(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function mg(e) {
    return $r(this.__data__, e) > -1;
  }
  function bg(e, t) {
    var n = this.__data__, o = $r(n, e);
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
  Mt.prototype.clear = fg;
  Mt.prototype.delete = pg;
  Mt.prototype.get = gg;
  Mt.prototype.has = mg;
  Mt.prototype.set = bg;
  var Io = mn(bt, "Map");
  function yg() {
    this.size = 0, this.__data__ = {
      hash: new pn(),
      map: new (Io || Mt)(),
      string: new pn()
    };
  }
  function wg(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function jr(e, t) {
    var n = e.__data__;
    return wg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function vg(e) {
    var t = jr(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Tg(e) {
    return jr(this, e).get(e);
  }
  function Eg(e) {
    return jr(this, e).has(e);
  }
  function Sg(e, t) {
    var n = jr(this, e), o = n.size;
    return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
  }
  function kt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var o = e[t];
      this.set(o[0], o[1]);
    }
  }
  kt.prototype.clear = yg;
  kt.prototype.delete = vg;
  kt.prototype.get = Tg;
  kt.prototype.has = Eg;
  kt.prototype.set = Sg;
  var Ig = "Expected a function";
  function Rs(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Ig);
    var n = function() {
      var o = arguments, r = t ? t.apply(this, o) : o[0], i = n.cache;
      if (i.has(r)) return i.get(r);
      var s = e.apply(this, o);
      return n.cache = i.set(r, s) || i, s;
    };
    return n.cache = new (Rs.Cache || kt)(), n;
  }
  Rs.Cache = kt;
  var Og = 500;
  function Ag(e) {
    var t = Rs(e, function(o) {
      return n.size === Og && n.clear(), o;
    }), n = t.cache;
    return t;
  }
  var _g = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rg = /\\(\\)?/g, Cg = Ag(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(_g, function(n, o, r, i) {
      t.push(r ? i.replace(Rg, "$1") : o || n);
    }), t;
  });
  Ng = function(e) {
    return e == null ? "" : nu(e);
  };
  function hu(e, t) {
    return Ke(e) ? e : _s(e, t) ? [
      e
    ] : Cg(Ng(e));
  }
  function Gr(e) {
    if (typeof e == "string" || Es(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
  }
  function pu(e, t) {
    t = hu(t, e);
    for (var n = 0, o = t.length; e != null && n < o; ) e = e[Gr(t[n++])];
    return n && n == o ? e : void 0;
  }
  Pg = function(e, t, n) {
    var o = e == null ? void 0 : pu(e, t);
    return o === void 0 ? n : o;
  };
  function Lg(e, t) {
    for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
    return e;
  }
  var gu = du(Object.getPrototypeOf, Object), xg = "[object Object]", Mg = Function.prototype, kg = Object.prototype, mu = Mg.toString, Dg = kg.hasOwnProperty, Hg = mu.call(Object);
  Fg = function(e) {
    if (!nt(e) || xt(e) != xg) return false;
    var t = gu(e);
    if (t === null) return true;
    var n = Dg.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && mu.call(n) == Hg;
  };
  var Ug = "[object DOMException]", $g = "[object Error]";
  function jg(e) {
    if (!nt(e)) return false;
    var t = xt(e);
    return t == $g || t == Ug || typeof e.message == "string" && typeof e.name == "string" && !Fg(e);
  }
  function Gg() {
    this.__data__ = new Mt(), this.size = 0;
  }
  function Wg(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function Bg(e) {
    return this.__data__.get(e);
  }
  function Vg(e) {
    return this.__data__.has(e);
  }
  var Yg = 200;
  function qg(e, t) {
    var n = this.__data__;
    if (n instanceof Mt) {
      var o = n.__data__;
      if (!Io || o.length < Yg - 1) return o.push([
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
  pt.prototype.clear = Gg;
  pt.prototype.delete = Wg;
  pt.prototype.get = Bg;
  pt.prototype.has = Vg;
  pt.prototype.set = qg;
  var bu = typeof exports == "object" && exports && !exports.nodeType && exports, La = bu && typeof module == "object" && module && !module.nodeType && module, Kg = La && La.exports === bu, xa = Kg ? bt.Buffer : void 0, Ma = xa ? xa.allocUnsafe : void 0;
  zg = function(e, t) {
    if (t) return e.slice();
    var n = e.length, o = Ma ? Ma(n) : new e.constructor(n);
    return e.copy(o), o;
  };
  function yu(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
      var s = e[n];
      t(s, n, e) && (i[r++] = s);
    }
    return i;
  }
  function Jg() {
    return [];
  }
  var Xg = Object.prototype, Qg = Xg.propertyIsEnumerable, ka = Object.getOwnPropertySymbols, Zg = ka ? function(e) {
    return e == null ? [] : (e = Object(e), yu(ka(e), function(t) {
      return Qg.call(e, t);
    }));
  } : Jg;
  function em(e, t, n) {
    var o = t(e);
    return Ke(e) ? o : Lg(o, n(e));
  }
  function Wi(e) {
    return em(e, As, Zg);
  }
  var Bi = mn(bt, "DataView"), Vi = mn(bt, "Promise"), Yi = mn(bt, "Set"), Da = "[object Map]", tm = "[object Object]", Ha = "[object Promise]", Fa = "[object Set]", Ua = "[object WeakMap]", $a = "[object DataView]", nm = gn(Bi), om = gn(Io), rm = gn(Vi), im = gn(Yi), sm = gn(Gi), Xe = xt;
  (Bi && Xe(new Bi(new ArrayBuffer(1))) != $a || Io && Xe(new Io()) != Da || Vi && Xe(Vi.resolve()) != Ha || Yi && Xe(new Yi()) != Fa || Gi && Xe(new Gi()) != Ua) && (Xe = function(e) {
    var t = xt(e), n = t == tm ? e.constructor : void 0, o = n ? gn(n) : "";
    if (o) switch (o) {
      case nm:
        return $a;
      case om:
        return Da;
      case rm:
        return Ha;
      case im:
        return Fa;
      case sm:
        return Ua;
    }
    return t;
  });
  var am = Object.prototype, cm = am.hasOwnProperty;
  function lm(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && cm.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var pr = bt.Uint8Array;
  function Cs(e) {
    var t = new e.constructor(e.byteLength);
    return new pr(t).set(new pr(e)), t;
  }
  function um(e, t) {
    var n = Cs(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var fm = /\w*$/;
  function dm(e) {
    var t = new e.constructor(e.source, fm.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var ja = gt ? gt.prototype : void 0, Ga = ja ? ja.valueOf : void 0;
  function hm(e) {
    return Ga ? Object(Ga.call(e)) : {};
  }
  pm = function(e, t) {
    var n = t ? Cs(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var gm = "[object Boolean]", mm = "[object Date]", bm = "[object Map]", ym = "[object Number]", wm = "[object RegExp]", vm = "[object Set]", Tm = "[object String]", Em = "[object Symbol]", Sm = "[object ArrayBuffer]", Im = "[object DataView]", Om = "[object Float32Array]", Am = "[object Float64Array]", _m = "[object Int8Array]", Rm = "[object Int16Array]", Cm = "[object Int32Array]", Nm = "[object Uint8Array]", Pm = "[object Uint8ClampedArray]", Lm = "[object Uint16Array]", xm = "[object Uint32Array]";
  function Mm(e, t, n) {
    var o = e.constructor;
    switch (t) {
      case Sm:
        return Cs(e);
      case gm:
      case mm:
        return new o(+e);
      case Im:
        return um(e);
      case Om:
      case Am:
      case _m:
      case Rm:
      case Cm:
      case Nm:
      case Pm:
      case Lm:
      case xm:
        return pm(e, n);
      case bm:
        return new o();
      case ym:
      case Tm:
        return new o(e);
      case wm:
        return dm(e);
      case vm:
        return new o();
      case Em:
        return hm(e);
    }
  }
  km = function(e) {
    return typeof e.constructor == "function" && !su(e) ? np(gu(e)) : {};
  };
  var Dm = "[object Map]";
  function Hm(e) {
    return nt(e) && Xe(e) == Dm;
  }
  var Wa = Ln && Ln.isMap, Fm = Wa ? Os(Wa) : Hm, Um = "[object Set]";
  function $m(e) {
    return nt(e) && Xe(e) == Um;
  }
  var Ba = Ln && Ln.isSet, jm = Ba ? Os(Ba) : $m, Gm = 1, wu = "[object Arguments]", Wm = "[object Array]", Bm = "[object Boolean]", Vm = "[object Date]", Ym = "[object Error]", vu = "[object Function]", qm = "[object GeneratorFunction]", Km = "[object Map]", zm = "[object Number]", Tu = "[object Object]", Jm = "[object RegExp]", Xm = "[object Set]", Qm = "[object String]", Zm = "[object Symbol]", eb = "[object WeakMap]", tb = "[object ArrayBuffer]", nb = "[object DataView]", ob = "[object Float32Array]", rb = "[object Float64Array]", ib = "[object Int8Array]", sb = "[object Int16Array]", ab = "[object Int32Array]", cb = "[object Uint8Array]", lb = "[object Uint8ClampedArray]", ub = "[object Uint16Array]", fb = "[object Uint32Array]", ae = {};
  ae[wu] = ae[Wm] = ae[tb] = ae[nb] = ae[Bm] = ae[Vm] = ae[ob] = ae[rb] = ae[ib] = ae[sb] = ae[ab] = ae[Km] = ae[zm] = ae[Tu] = ae[Jm] = ae[Xm] = ae[Qm] = ae[Zm] = ae[cb] = ae[lb] = ae[ub] = ae[fb] = true;
  ae[Ym] = ae[vu] = ae[eb] = false;
  function Jo(e, t, n, o, r, i) {
    var s, a = t & Gm;
    if (s !== void 0) return s;
    if (!No(e)) return e;
    var c = Ke(e);
    if (c) s = lm(e);
    else {
      var u = Xe(e), l = u == vu || u == qm;
      if (hr(e)) return zg(e, a);
      if (u == Tu || u == wu || l && !r) s = l ? {} : km(e);
      else {
        if (!ae[u]) return r ? e : {};
        s = Mm(e, u, a);
      }
    }
    i || (i = new pt());
    var d = i.get(e);
    if (d) return d;
    i.set(e, s), jm(e) ? e.forEach(function(g) {
      s.add(Jo(g, t, n, g, e, i));
    }) : Fm(e) && e.forEach(function(g, w) {
      s.set(w, Jo(g, t, n, w, e, i));
    });
    var p = Wi, m = c ? void 0 : p(e);
    return op(m || e, function(g, w) {
      m && (w = g, g = e[w]), lp(s, w, Jo(g, t, n, w, e, i));
    }), s;
  }
  var db = 1, hb = 4;
  Eu = function(e) {
    return Jo(e, db | hb);
  };
  var pb = "__lodash_hash_undefined__";
  function gb(e) {
    return this.__data__.set(e, pb), this;
  }
  function mb(e) {
    return this.__data__.has(e);
  }
  function gr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new kt(); ++t < n; ) this.add(e[t]);
  }
  gr.prototype.add = gr.prototype.push = gb;
  gr.prototype.has = mb;
  function bb(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length; ++n < o; ) if (t(e[n], n, e)) return true;
    return false;
  }
  function yb(e, t) {
    return e.has(t);
  }
  var wb = 1, vb = 2;
  function Su(e, t, n, o, r, i) {
    var s = n & wb, a = e.length, c = t.length;
    if (a != c && !(s && c > a)) return false;
    var u = i.get(e), l = i.get(t);
    if (u && l) return u == t && l == e;
    var d = -1, p = true, m = n & vb ? new gr() : void 0;
    for (i.set(e, t), i.set(t, e); ++d < a; ) {
      var g = e[d], w = t[d];
      if (o) var P = s ? o(w, g, d, t, e, i) : o(g, w, d, e, t, i);
      if (P !== void 0) {
        if (P) continue;
        p = false;
        break;
      }
      if (m) {
        if (!bb(t, function(S, E) {
          if (!yb(m, E) && (g === S || r(g, S, n, o, i))) return m.push(E);
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
  function Tb(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(o, r) {
      n[++t] = [
        r,
        o
      ];
    }), n;
  }
  function Eb(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(o) {
      n[++t] = o;
    }), n;
  }
  var Sb = 1, Ib = 2, Ob = "[object Boolean]", Ab = "[object Date]", _b = "[object Error]", Rb = "[object Map]", Cb = "[object Number]", Nb = "[object RegExp]", Pb = "[object Set]", Lb = "[object String]", xb = "[object Symbol]", Mb = "[object ArrayBuffer]", kb = "[object DataView]", Va = gt ? gt.prototype : void 0, fi = Va ? Va.valueOf : void 0;
  function Db(e, t, n, o, r, i, s) {
    switch (n) {
      case kb:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
        e = e.buffer, t = t.buffer;
      case Mb:
        return !(e.byteLength != t.byteLength || !i(new pr(e), new pr(t)));
      case Ob:
      case Ab:
      case Cb:
        return Ss(+e, +t);
      case _b:
        return e.name == t.name && e.message == t.message;
      case Nb:
      case Lb:
        return e == t + "";
      case Rb:
        var a = Tb;
      case Pb:
        var c = o & Sb;
        if (a || (a = Eb), e.size != t.size && !c) return false;
        var u = s.get(e);
        if (u) return u == t;
        o |= Ib, s.set(e, t);
        var l = Su(a(e), a(t), o, r, i, s);
        return s.delete(e), l;
      case xb:
        if (fi) return fi.call(e) == fi.call(t);
    }
    return false;
  }
  var Hb = 1, Fb = Object.prototype, Ub = Fb.hasOwnProperty;
  function $b(e, t, n, o, r, i) {
    var s = n & Hb, a = Wi(e), c = a.length, u = Wi(t), l = u.length;
    if (c != l && !s) return false;
    for (var d = c; d--; ) {
      var p = a[d];
      if (!(s ? p in t : Ub.call(t, p))) return false;
    }
    var m = i.get(e), g = i.get(t);
    if (m && g) return m == t && g == e;
    var w = true;
    i.set(e, t), i.set(t, e);
    for (var P = s; ++d < c; ) {
      p = a[d];
      var S = e[p], E = t[p];
      if (o) var L = s ? o(E, S, p, t, e, i) : o(S, E, p, e, t, i);
      if (!(L === void 0 ? S === E || r(S, E, n, o, i) : L)) {
        w = false;
        break;
      }
      P || (P = p == "constructor");
    }
    if (w && !P) {
      var v = e.constructor, D = t.constructor;
      v != D && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof D == "function" && D instanceof D) && (w = false);
    }
    return i.delete(e), i.delete(t), w;
  }
  var jb = 1, Ya = "[object Arguments]", qa = "[object Array]", Uo = "[object Object]", Gb = Object.prototype, Ka = Gb.hasOwnProperty;
  function Wb(e, t, n, o, r, i) {
    var s = Ke(e), a = Ke(t), c = s ? qa : Xe(e), u = a ? qa : Xe(t);
    c = c == Ya ? Uo : c, u = u == Ya ? Uo : u;
    var l = c == Uo, d = u == Uo, p = c == u;
    if (p && hr(e)) {
      if (!hr(t)) return false;
      s = true, l = false;
    }
    if (p && !l) return i || (i = new pt()), s || fu(e) ? Su(e, t, n, o, r, i) : Db(e, t, c, n, o, r, i);
    if (!(n & jb)) {
      var m = l && Ka.call(e, "__wrapped__"), g = d && Ka.call(t, "__wrapped__");
      if (m || g) {
        var w = m ? e.value() : e, P = g ? t.value() : t;
        return i || (i = new pt()), r(w, P, n, o, i);
      }
    }
    return p ? (i || (i = new pt()), $b(e, t, n, o, r, i)) : false;
  }
  function Wr(e, t, n, o, r) {
    return e === t ? true : e == null || t == null || !nt(e) && !nt(t) ? e !== e && t !== t : Wb(e, t, n, o, Wr, r);
  }
  var Bb = 1, Vb = 2;
  function Yb(e, t, n, o) {
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
        if (!(d === void 0 ? Wr(u, c, Bb | Vb, o, l) : d)) return false;
      }
    }
    return true;
  }
  function Iu(e) {
    return e === e && !No(e);
  }
  function qb(e) {
    for (var t = As(e), n = t.length; n--; ) {
      var o = t[n], r = e[o];
      t[n] = [
        o,
        r,
        Iu(r)
      ];
    }
    return t;
  }
  function Ou(e, t) {
    return function(n) {
      return n == null ? false : n[e] === t && (t !== void 0 || e in Object(n));
    };
  }
  function Kb(e) {
    var t = qb(e);
    return t.length == 1 && t[0][2] ? Ou(t[0][0], t[0][1]) : function(n) {
      return n === e || Yb(n, e, t);
    };
  }
  function zb(e, t) {
    return e != null && t in Object(e);
  }
  function Jb(e, t, n) {
    t = hu(t, e);
    for (var o = -1, r = t.length, i = false; ++o < r; ) {
      var s = Gr(t[o]);
      if (!(i = e != null && n(e, s))) break;
      e = e[s];
    }
    return i || ++o != r ? i : (r = e == null ? 0 : e.length, !!r && Is(r) && ru(s, r) && (Ke(e) || cu(e)));
  }
  function Xb(e, t) {
    return e != null && Jb(e, t, zb);
  }
  var Qb = 1, Zb = 2;
  function ey(e, t) {
    return _s(e) && Iu(t) ? Ou(Gr(e), t) : function(n) {
      var o = Pg(n, e);
      return o === void 0 && o === t ? Xb(n, e) : Wr(t, o, Qb | Zb);
    };
  }
  function ty(e) {
    return function(t) {
      return t == null ? void 0 : t[e];
    };
  }
  function ny(e) {
    return function(t) {
      return pu(t, e);
    };
  }
  function oy(e) {
    return _s(e) ? ty(Gr(e)) : ny(e);
  }
  ry = function(e) {
    return typeof e == "function" ? e : e == null ? Uh : typeof e == "object" ? Ke(e) ? ey(e[0], e[1]) : Kb(e) : oy(e);
  };
  function iy(e) {
    return function(t, n, o) {
      for (var r = -1, i = Object(t), s = o(t), a = s.length; a--; ) {
        var c = s[++r];
        if (n(i[c], c, i) === false) break;
      }
      return t;
    };
  }
  sy = iy();
  function ay(e, t) {
    return e && sy(e, t, As);
  }
  function cy(e, t) {
    return function(n, o) {
      if (n == null) return n;
      if (!iu(n)) return e(n, o);
      for (var r = n.length, i = -1, s = Object(n); ++i < r && o(s[i], i, s) !== false; ) ;
      return n;
    };
  }
  ly = cy(ay);
  function uy(e, t) {
    var n = [];
    return ly(e, function(o, r, i) {
      t(o, r, i) && n.push(o);
    }), n;
  }
  var fy = "[object String]";
  function qi(e) {
    return typeof e == "string" || !Ke(e) && nt(e) && xt(e) == fy;
  }
  function Ns(e, t) {
    return Wr(e, t);
  }
  var dy = "Expected a function";
  function hy(e) {
    if (typeof e != "function") throw new TypeError(dy);
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
  function py(e, t) {
    var n = Ke(e) ? yu : uy;
    return n(e, hy(ry(t)));
  }
  const Le = (e) => qi(e) ? e : JSON.stringify(e), at = {
    unloaded: (...e) => `[loadModules] Module "${Le(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Le(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Le(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Le(e[0])}" failed to load.
Trackback: 
${Le(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Le(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Le(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Le(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Le(e[0])}" is missing the following dependencies: ${Le(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Le(e[0])}" is loading its dependencies (${e.slice(1).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Le(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Le(e[0])}" dependencies failed to load. 

Trackback: 
${Le(e[1])}`
  }, gy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function Au(e, t, n = 1e4, o = {}, r = 0, i = 0) {
    var _a2, _b2, _c2, _d2;
    const { logger: s = gy, progressReporter: a, printLog: c = true } = o, u = e.find((g) => g.name === t);
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
    if (e[l].status === "loading") return c && s.info(at.alreadyLoading(u.name)), await my(e, u.name, n, s), Promise.resolve();
    try {
      if (p.length > 0) {
        s.info(at.loadDependencies(u.name, p.map((P) => P.name)));
        const g = r === 0 ? p.length : i;
        let w = 0;
        await Promise.all(p.map(async (P) => {
          var _a3;
          await Au(e, P.name, n, {
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
        const w = at.error(u.name, qi(g) ? g : jg(g) ? g.message : JSON.stringify(g));
        return s.error(w), (_c2 = a == null ? void 0 : a.onModuleError) == null ? void 0 : _c2.call(a, u.displayName, qi(g) ? new Error(g) : g), Promise.reject(w);
      }
    } catch (g) {
      e[l].status = "error";
      const w = at.error(u.name, g);
      return s.error(w), (_d2 = a == null ? void 0 : a.onModuleError) == null ? void 0 : _d2.call(a, u.displayName, g), Promise.reject(w);
    }
  }
  async function my(e, t, n = 1e4, o) {
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
  let by, yy, za, wy, vy;
  by = "modulepreload";
  yy = function(e, t) {
    return new URL(e, t).href;
  };
  za = {};
  di = function(t, n, o) {
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
        if (l = yy(l, o), l in za) return;
        za[l] = true;
        const d = l.endsWith(".css"), p = d ? '[rel="stylesheet"]' : "";
        if (!!o) for (let w = a.length - 1; w >= 0; w--) {
          const P = a[w];
          if (P.href === l && (!d || P.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${l}"]${p}`)) return;
        const g = document.createElement("link");
        if (g.rel = d ? "stylesheet" : by, d || (g.as = "script"), g.crossOrigin = "", g.href = l, u && g.setAttribute("nonce", u), document.head.appendChild(g), d) return new Promise((w, P) => {
          g.addEventListener("load", w), g.addEventListener("error", () => P(new Error(`Unable to preload CSS for ${l}`)));
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
  wy = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  vy = [
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
  var An = ((e) => (e[e.PERMISSION_DENIED = 1] = "PERMISSION_DENIED", e[e.POSITION_UNAVAILABLE = 2] = "POSITION_UNAVAILABLE", e[e.TIMEOUT = 3] = "TIMEOUT", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.IOS_HTTPS_REQUIRED = 5] = "IOS_HTTPS_REQUIRED", e[e.FIREFOX_PERMISSION_ISSUE = 6] = "FIREFOX_PERMISSION_ISSUE", e))(An || {}), Ty = "2.0.4", Ki = 500, Ja = "user-agent", xn = "", Xa = "?", mr = "function", qt = "undefined", Mn = "object", zi = "string", xe = "browser", St = "cpu", ht = "device", Qe = "engine", Ve = "os", _n = "result", O = "name", y = "type", I = "vendor", A = "version", Me = "architecture", Oo = "major", T = "model", no = "console", q = "mobile", re = "tablet", me = "smarttv", lt = "wearable", $o = "xr", oo = "embedded", Yn = "inapp", Ps = "brands", ln = "formFactors", Ls = "fullVersionList", Rn = "platform", xs = "platformVersion", Br = "bitness", en = "sec-ch-ua", Ey = en + "-full-version-list", Sy = en + "-arch", Iy = en + "-" + Br, Oy = en + "-form-factors", Ay = en + "-" + q, _y = en + "-" + T, _u = en + "-" + Rn, Ry = _u + "-version", Ru = [
    Ps,
    Ls,
    q,
    T,
    Rn,
    xs,
    Me,
    ln,
    Br
  ], jo = "Amazon", yn = "Apple", Qa = "ASUS", Za = "BlackBerry", an = "Google", ec = "Huawei", hi = "Lenovo", tc = "Honor", Go = "LG", pi = "Microsoft", gi = "Motorola", mi = "Nvidia", nc = "OnePlus", bi = "OPPO", qn = "Samsung", oc = "Sharp", Kn = "Sony", yi = "Xiaomi", wi = "Zebra", rc = "Chrome", ic = "Chromium", Ft = "Chromecast", Xo = "Edge", zn = "Firefox", Jn = "Opera", vi = "Facebook", sc = "Sogou", wn = "Mobile ", Xn = " Browser", Ji = "Windows", Cy = typeof window !== qt, ke = Cy && window.navigator ? window.navigator : void 0, Yt = ke && ke.userAgentData ? ke.userAgentData : void 0, Ny = function(e, t) {
    var n = {}, o = t;
    if (!br(t)) {
      o = {};
      for (var r in t) for (var i in t[r]) o[i] = t[r][i].concat(o[i] ? o[i] : []);
    }
    for (var s in e) n[s] = o[s] && o[s].length % 2 === 0 ? o[s].concat(e[s]) : e[s];
    return n;
  }, Vr = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, Xi = function(e, t) {
    if (typeof e === Mn && e.length > 0) {
      for (var n in e) if (It(t) == It(e[n])) return true;
      return false;
    }
    return Fn(e) ? It(t) == It(e) : false;
  }, br = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? br(e[n]) : false);
  }, Fn = function(e) {
    return typeof e === zi;
  }, Ti = function(e) {
    if (e) {
      for (var t = [], n = kn(/\\?\"/g, e).split(","), o = 0; o < n.length; o++) if (n[o].indexOf(";") > -1) {
        var r = yr(n[o]).split(";v=");
        t[o] = {
          brand: r[0],
          version: r[1]
        };
      } else t[o] = yr(n[o]);
      return t;
    }
  }, It = function(e) {
    return Fn(e) ? e.toLowerCase() : e;
  }, Ei = function(e) {
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
  }, yr = function(e, t) {
    if (Fn(e)) return e = kn(/^\s\s*/, e), typeof t === qt ? e : e.substring(0, Ki);
  }, Si = function(e, t) {
    if (!(!e || !t)) for (var n = 0, o, r, i, s, a, c; n < t.length && !a; ) {
      var u = t[n], l = t[n + 1];
      for (o = r = 0; o < u.length && !a && u[o]; ) if (a = u[o++].exec(e), a) for (i = 0; i < l.length; i++) c = a[++r], s = l[i], typeof s === Mn && s.length > 0 ? s.length === 2 ? typeof s[1] == mr ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : s.length >= 3 && (typeof s[1] === mr && !(s[1].exec && s[1].test) ? s.length > 3 ? this[s[0]] = c ? s[1].apply(this, s.slice(2)) : void 0 : this[s[0]] = c ? s[1].call(this, c, s[2]) : void 0 : s.length == 3 ? this[s[0]] = c ? c.replace(s[1], s[2]) : void 0 : s.length == 4 ? this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : void 0 : s.length > 4 && (this[s[0]] = c ? s[3].apply(this, [
        c.replace(s[1], s[2])
      ].concat(s.slice(4))) : void 0)) : this[s] = c || void 0;
      n += 2;
    }
  }, ft = function(e, t) {
    for (var n in t) if (typeof t[n] === Mn && t[n].length > 0) {
      for (var o = 0; o < t[n].length; o++) if (Xi(t[n][o], e)) return n === Xa ? void 0 : n;
    } else if (Xi(t[n], e)) return n === Xa ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, ac = {
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
  }, cc = {
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
  }, Py = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, lc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          wn + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          Xo + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        O,
        A
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          Jn + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          Jn + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          Jn
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        A,
        [
          O,
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
        O,
        A
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        A,
        [
          O,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "Smart " + hi + Xn
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          O,
          /(.+)/,
          "$1 Secure" + Xn
        ],
        A
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          zn + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          Jn + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          Jn + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          "MIUI" + Xn
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        A,
        [
          O,
          wn + zn
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        A,
        [
          O,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          O,
          /(.+)/,
          "$1Browser"
        ],
        A
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          O,
          /(.+)/,
          "$1" + Xn
        ],
        A
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          qn + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        A,
        [
          O,
          sc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          O,
          sc + " Mobile"
        ],
        A
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        O,
        A
      ],
      [
        /(lbbrowser|rekonq)/i
      ],
      [
        O
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        A,
        O
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          O,
          vi
        ],
        A,
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
        O,
        A,
        [
          y,
          Yn
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        A,
        [
          O,
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
        A,
        [
          O,
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
        O,
        [
          y,
          Yn
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        O,
        A
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        A,
        [
          O,
          rc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        A,
        [
          O,
          Xo + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          O,
          rc + " WebView"
        ],
        A
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        A,
        [
          O,
          "Android" + Xn
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        A,
        [
          O,
          wn + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        O,
        A
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        A,
        [
          O,
          wn + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          O,
          wn + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        A,
        O
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        O,
        [
          A,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        O,
        A
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          O,
          wn + zn
        ],
        A
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          O,
          "Netscape"
        ],
        A
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        O,
        A
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        A,
        [
          O,
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
        O,
        [
          A,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        O,
        [
          A,
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
          Me,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Me,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Me,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Me,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Me,
          "arm"
        ]
      ],
      [
        /((ppc|powerpc)(64)?)( mac|;|\))/i
      ],
      [
        [
          Me,
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
          Me,
          "sparc"
        ]
      ],
      [
        /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
      ],
      [
        [
          Me,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
          yn
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        T,
        [
          I,
          oc
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
          I,
          tc
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
          I,
          tc
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
          I,
          ec
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
          I,
          ec
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
          I,
          yi
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
          I,
          yi
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
          I,
          nc
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
          I,
          bi
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
          I,
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
            "*": bi
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
          I,
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
          I,
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
          I,
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
          I,
          hi
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
          I,
          hi
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
          I,
          gi
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
          I,
          gi
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
          I,
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
          I,
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
        I,
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
          I,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        T,
        [
          I,
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
          I,
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
        I,
        T
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        T,
        [
          I,
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
          I,
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
          I,
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
          I,
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
        I,
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
          I,
          Za
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
          I,
          Qa
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
          I,
          Qa
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
          I,
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
        I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
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
        I,
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
        I,
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
        I,
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
          I,
          pi
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
          I,
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
          I,
          mi
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
        I,
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
          I,
          pi
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
          I,
          wi
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
          I,
          wi
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
        I,
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
          I,
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
        I,
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
          I,
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
        I,
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
          I,
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
          I,
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
          I,
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
          I,
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
          I,
          vi
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
          I,
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
          I,
          mi
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
          I,
          oc
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
          I,
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
          I,
          yi
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
        I,
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
          I,
          /.+\/(\w+)/,
          "$1",
          ft,
          {
            LG: "lge"
          }
        ],
        [
          T,
          yr
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
          I,
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
          I,
          pi
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
        I,
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
          I,
          mi
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
          I,
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
        I,
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
          I,
          bi
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
          I,
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
          I,
          nc
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
          I,
          gi
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
          I,
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
          I,
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
          I,
          wi
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
          I,
          an
        ],
        [
          y,
          $o
        ]
      ],
      [
        /(pico) (4|neo3(?: link|pro)?)/i
      ],
      [
        I,
        T,
        [
          y,
          $o
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        T,
        [
          I,
          vi
        ],
        [
          y,
          $o
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          y,
          $o
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        I,
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
          I,
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
          I,
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
          I,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          Xo + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        O,
        A
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        A,
        [
          O,
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
        O,
        A
      ],
      [
        /ladybird\//i
      ],
      [
        [
          O,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        A,
        O
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          O,
          /N/,
          "R"
        ],
        [
          A,
          ft,
          ac
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        O,
        A
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          A,
          /(;|\))/g,
          "",
          ft,
          ac
        ],
        [
          O,
          Ji
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        O,
        A
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          A,
          /_/g,
          "."
        ],
        [
          O,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          O,
          "macOS"
        ],
        [
          A,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        A,
        [
          O,
          Ft + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        A,
        [
          O,
          Ft + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        A,
        [
          O,
          Ft + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        A,
        [
          O,
          Ft + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        A,
        [
          O,
          Ft
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        A,
        O
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          O,
          /(.+)/,
          "$1 Touch"
        ],
        A
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        O,
        A
      ],
      [
        /\(bb(10);/i
      ],
      [
        A,
        [
          O,
          Za
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        A,
        [
          O,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        A,
        [
          O,
          zn + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        A,
        [
          O,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          A,
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
          O,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        A,
        [
          O,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          O,
          "Chrome OS"
        ],
        A
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
        O,
        A
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          O,
          "Solaris"
        ],
        A
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        O,
        A
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
        xe,
        [
          O,
          A,
          Oo,
          y
        ]
      ],
      [
        St,
        [
          Me
        ]
      ],
      [
        ht,
        [
          y,
          T,
          I
        ]
      ],
      [
        Qe,
        [
          O,
          A
        ]
      ],
      [
        Ve,
        [
          O,
          A
        ]
      ]
    ]), Ot.call(e.isIgnore, [
      [
        xe,
        [
          A,
          Oo
        ]
      ],
      [
        Qe,
        [
          A
        ]
      ],
      [
        Ve,
        [
          A
        ]
      ]
    ]), Ot.call(e.isIgnoreRgx, [
      [
        xe,
        / ?browser$/i
      ],
      [
        Ve,
        / ?os$/i
      ]
    ]), Ot.call(e.toString, [
      [
        xe,
        [
          O,
          A
        ]
      ],
      [
        St,
        [
          Me
        ]
      ],
      [
        ht,
        [
          I,
          T
        ]
      ],
      [
        Qe,
        [
          O,
          A
        ]
      ],
      [
        Ve,
        [
          O,
          A
        ]
      ]
    ]), e;
  })(), Ly = function(e, t) {
    var n = Wo.init[t], o = Wo.isIgnore[t] || 0, r = Wo.isIgnoreRgx[t] || 0, i = Wo.toString[t] || 0;
    function s() {
      Ot.call(this, n);
    }
    return s.prototype.getItem = function() {
      return e;
    }, s.prototype.withClientHints = function() {
      return Yt ? Yt.getHighEntropyValues(Ru).then(function(a) {
        return e.setCH(new Cu(a, false)).parseCH().get();
      }) : e.parseCH().get();
    }, s.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != _n && (s.prototype.is = function(a) {
      var c = false;
      for (var u in this) if (this.hasOwnProperty(u) && !Xi(o, u) && It(r ? kn(r, this[u]) : this[u]) == It(r ? kn(r, a) : a)) {
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
  function Cu(e, t) {
    if (e = e || {}, Ot.call(this, Ru), t) Ot.call(this, [
      [
        Ps,
        Ti(e[en])
      ],
      [
        Ls,
        Ti(e[Ey])
      ],
      [
        q,
        /\?1/.test(e[Ay])
      ],
      [
        T,
        Qn(e[_y])
      ],
      [
        Rn,
        Qn(e[_u])
      ],
      [
        xs,
        Qn(e[Ry])
      ],
      [
        Me,
        Qn(e[Sy])
      ],
      [
        ln,
        Ti(e[Oy])
      ],
      [
        Br,
        Qn(e[Iy])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== qt && (this[n] = e[n]);
  }
  function uc(e, t, n, o) {
    return this.get = function(r) {
      return r ? this.data.hasOwnProperty(r) ? this.data[r] : void 0 : this.data;
    }, this.set = function(r, i) {
      return this.data[r] = i, this;
    }, this.setCH = function(r) {
      return this.uaCH = r, this;
    }, this.detectFeature = function() {
      if (ke && ke.userAgent == this.ua) switch (this.itemType) {
        case xe:
          ke.brave && typeof ke.brave.isBrave == mr && this.set(O, "Brave");
          break;
        case ht:
          !this.get(y) && Yt && Yt[q] && this.set(y, q), this.get(T) == "Macintosh" && ke && typeof ke.standalone !== qt && ke.maxTouchPoints && ke.maxTouchPoints > 2 && this.set(T, "iPad").set(y, re);
          break;
        case Ve:
          !this.get(O) && Yt && Yt[Rn] && this.set(O, Yt[Rn]);
          break;
        case _n:
          var r = this.data, i = function(s) {
            return r[s].getItem().detectFeature().get();
          };
          this.set(xe, i(xe)).set(St, i(St)).set(ht, i(ht)).set(Qe, i(Qe)).set(Ve, i(Ve));
      }
      return this;
    }, this.parseUA = function() {
      return this.itemType != _n && Si.call(this.data, this.ua, this.rgxMap), this.itemType == xe && this.set(Oo, Ei(this.get(A))), this;
    }, this.parseCH = function() {
      var r = this.uaCH, i = this.rgxMap;
      switch (this.itemType) {
        case xe:
        case Qe:
          var s = r[Ls] || r[Ps], a;
          if (s) for (var c in s) {
            var u = s[c].brand || s[c], l = s[c].version;
            this.itemType == xe && !/not.a.brand/i.test(u) && (!a || /Chrom/.test(a) && u != ic || a == Xo && /WebView2/.test(u)) && (u = ft(u, Py), a = this.get(O), a && !/Chrom/.test(a) && /Chrom/.test(u) || this.set(O, u).set(A, l).set(Oo, Ei(l)), a = u), this.itemType == Qe && u == ic && this.set(A, l);
          }
          break;
        case St:
          var d = r[Me];
          d && (d && r[Br] == "64" && (d += "64"), Si.call(this.data, d + ";", i));
          break;
        case ht:
          if (r[q] && this.set(y, q), r[T] && (this.set(T, r[T]), !this.get(y) || !this.get(I))) {
            var p = {};
            Si.call(p, "droid 9; " + r[T] + ")", i), !this.get(y) && p.type && this.set(y, p.type), !this.get(I) && p.vendor && this.set(I, p.vendor);
          }
          if (r[ln]) {
            var m;
            if (typeof r[ln] != "string") for (var g = 0; !m && g < r[ln].length; ) m = ft(r[ln][g++], cc);
            else m = ft(r[ln], cc);
            this.set(y, m);
          }
          break;
        case Ve:
          var w = r[Rn];
          if (w) {
            var P = r[xs];
            w == Ji && (P = parseInt(Ei(P), 10) >= 13 ? "11" : "10"), this.set(O, w).set(A, P);
          }
          this.get(O) == Ji && r[T] == "Xbox" && this.set(O, "Xbox").set(A, void 0);
          break;
        case _n:
          var S = this.data, E = function(L) {
            return S[L].getItem().setCH(r).parseCH().get();
          };
          this.set(xe, E(xe)).set(St, E(St)).set(ht, E(ht)).set(Qe, E(Qe)).set(Ve, E(Ve));
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
        Ly(this, e)
      ]
    ]), this;
  }
  function Ct(e, t, n) {
    if (typeof e === Mn ? (br(e, true) ? (typeof t === Mn && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === zi && !br(t, true) && (n = t, t = void 0), n && typeof n.append === mr) {
      var o = {};
      n.forEach(function(c, u) {
        o[u] = c;
      }), n = o;
    }
    if (!(this instanceof Ct)) return new Ct(e, t, n).getResult();
    var r = typeof e === zi ? e : n && n[Ja] ? n[Ja] : ke && ke.userAgent ? ke.userAgent : xn, i = new Cu(n, true), s = t ? Ny(lc, t) : lc, a = function(c) {
      return c == _n ? function() {
        return new uc(c, r, s, i).set("ua", r).set(xe, this.getBrowser()).set(St, this.getCPU()).set(ht, this.getDevice()).set(Qe, this.getEngine()).set(Ve, this.getOS()).get();
      } : function() {
        return new uc(c, r, s[c], i).parseUA().get();
      };
    };
    return Ot.call(this, [
      [
        "getBrowser",
        a(xe)
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
          return Fn(c) && (r = c.length > Ki ? yr(c, Ki) : c), this;
        }
      ]
    ]).setUA(r), this;
  }
  Ct.VERSION = Ty;
  Ct.BROWSER = Vr([
    O,
    A,
    Oo,
    y
  ]);
  Ct.CPU = Vr([
    Me
  ]);
  Ct.DEVICE = Vr([
    T,
    I,
    y,
    no,
    q,
    me,
    re,
    lt,
    oo
  ]);
  Ct.ENGINE = Ct.OS = Vr([
    O,
    A
  ]);
  xy = class {
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
  var fc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(fc || (fc = {}));
  class My {
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
        const a = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).put(Eu(n), t);
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
  let mt, ky;
  mt = new My("user-data-db", "user-data");
  Ww = mt.set.bind(mt);
  Ii = mt.get.bind(mt);
  Bw = mt.save.bind(mt);
  ky = mt.init.bind(mt);
  mt.exportToJson.bind(mt);
  const { sin: Fe, cos: Dy, sqrt: Ms, abs: wr, PI: Ce } = Math, dc = 6378245, hc = 0.006693421622965823;
  function Nu(e, t) {
    return e >= 72.004 && e <= 137.8347 && t >= 0.8293 && t <= 55.8271;
  }
  function Hy(e, t) {
    let n = -100 + 2 * e + 3 * t + 0.2 * t * t + 0.1 * e * t + 0.2 * Ms(wr(e));
    return n += (20 * Fe(6 * e * Ce) + 20 * Fe(2 * e * Ce)) * 2 / 3, n += (20 * Fe(t * Ce) + 40 * Fe(t / 3 * Ce)) * 2 / 3, n += (160 * Fe(t / 12 * Ce) + 320 * Fe(t * Ce / 30)) * 2 / 3, n;
  }
  function Fy(e, t) {
    let n = 300 + e + 2 * t + 0.1 * e * e + 0.1 * e * t + 0.1 * Ms(wr(e));
    return n += (20 * Fe(6 * e * Ce) + 20 * Fe(2 * e * Ce)) * 2 / 3, n += (20 * Fe(e * Ce) + 40 * Fe(e / 3 * Ce)) * 2 / 3, n += (150 * Fe(e / 12 * Ce) + 300 * Fe(e / 30 * Ce)) * 2 / 3, n;
  }
  function Uy(e, t) {
    let n = Fy(e - 105, t - 35), o = Hy(e - 105, t - 35);
    const r = t / 180 * Ce;
    let i = Fe(r);
    i = 1 - hc * i * i;
    const s = Ms(i);
    return n = n * 180 / (dc / s * Dy(r) * Ce), o = o * 180 / (dc * (1 - hc) / (i * s) * Ce), [
      n,
      o
    ];
  }
  function Jt(e) {
    const [t, n] = e;
    if (!Nu(t, n)) return [
      t,
      n
    ];
    const o = Uy(t, n);
    return [
      t + o[0],
      n + o[1]
    ];
  }
  function Dn(e) {
    const [t, n] = e;
    if (!Nu(t, n)) return [
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
    for (; wr(s) > 1e-6 || wr(a) > 1e-6; ) o -= s, r -= a, i = Jt([
      o,
      r
    ]), s = i[0] - t, a = i[1] - n;
    return [
      o,
      r
    ];
  }
  const { sin: vr, cos: Tr, atan2: Pu, sqrt: Lu, PI: $y } = Math, Er = $y * 3e3 / 180;
  function Cn(e) {
    const [t, n] = e, o = t - 65e-4, r = n - 6e-3, i = Lu(o * o + r * r) - 2e-5 * vr(r * Er), s = Pu(r, o) - 3e-6 * Tr(o * Er), a = i * Tr(s), c = i * vr(s);
    return [
      a,
      c
    ];
  }
  function Hn(e) {
    const [t, n] = e, o = t, r = n, i = Lu(o * o + r * r) + 2e-5 * vr(r * Er), s = Pu(r, o) + 3e-6 * Tr(o * Er), a = i * Tr(s) + 65e-4, c = i * vr(s) + 6e-3;
    return [
      a,
      c
    ];
  }
  const pc = 180 / Math.PI, gc = Math.PI / 180, Sr = 6378137, Ut = 20037508342789244e-9;
  function Bo(e) {
    return [
      e[0] * pc / Sr,
      (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / Sr))) * pc
    ];
  }
  function Yr(e) {
    const t = Math.abs(e[0]) <= 180 ? e[0] : e[0] - (e[0] < 0 ? -1 : 1) * 360, n = [
      Sr * t * gc,
      Sr * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * gc))
    ];
    return n[0] > Ut && (n[0] = Ut), n[0] < -Ut && (n[0] = -Ut), n[1] > Ut && (n[1] = Ut), n[1] < -Ut && (n[1] = -Ut), n;
  }
  const { abs: Ir } = Math, mc = [
    1289059486e-2,
    836237787e-2,
    5591021,
    348198983e-2,
    167804312e-2,
    0
  ], bc = [
    75,
    60,
    45,
    30,
    15,
    0
  ], jy = [
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
  ], Gy = [
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
  function xu(e, t, n) {
    const o = Ir(t) / n[9];
    let r = n[0] + n[1] * Ir(e), i = n[2] + n[3] * o + n[4] * Math.pow(o, 2) + n[5] * Math.pow(o, 3) + n[6] * Math.pow(o, 4) + n[7] * Math.pow(o, 5) + n[8] * Math.pow(o, 6);
    return r *= e < 0 ? -1 : 1, i *= t < 0 ? -1 : 1, [
      r,
      i
    ];
  }
  function qr(e) {
    const [t, n] = e;
    let o = [];
    for (let r = 0; r < bc.length; r++) if (Ir(n) > bc[r]) {
      o = Gy[r];
      break;
    }
    return xu(t, n, o);
  }
  function Vo(e) {
    const [t, n] = e;
    let o = [];
    for (let r = 0; r < mc.length; r++) if (Ir(n) >= mc[r]) {
      o = jy[r];
      break;
    }
    return xu(t, n, o);
  }
  function $t(e, t) {
    if (!e) throw new Error(t);
  }
  function Mu(e) {
    return !!e && Object.prototype.toString.call(e) === "[object Array]";
  }
  function yc(e) {
    return !isNaN(Number(e)) && e !== null && !Mu(e);
  }
  function qe(...e) {
    const t = e.length - 1;
    return function(...n) {
      let o = t, r = e[t].apply(null, n);
      for (; o--; ) r = e[o].call(null, r);
      return r;
    };
  }
  function ku(e, t, n = false) {
    if (e === null) return;
    let o, r, i, s, a, c, u = 0, l = 0, d, p;
    const { type: m } = e, g = m === "FeatureCollection", w = m === "Feature", P = g ? e.features.length : 1;
    for (let S = 0; S < P; S++) {
      d = g ? e.features[S].geometry : w ? e.geometry : e, p = d ? d.type === "GeometryCollection" : false, c = p ? d.geometries.length : 1;
      for (let E = 0; E < c; E++) {
        let L = 0, v = 0;
        if (s = p ? d.geometries[E] : d, s === null) continue;
        const D = s.type;
        switch (u = n && (D === "Polygon" || D === "MultiPolygon") ? 1 : 0, D) {
          case null:
            break;
          case "Point":
            if (a = s.coordinates, t(a, l, S, L, v) === false) return false;
            l++, L++;
            break;
          case "LineString":
          case "MultiPoint":
            for (a = s.coordinates, o = 0; o < a.length; o++) {
              if (t(a[o], l, S, L, v) === false) return false;
              l++, D === "MultiPoint" && L++;
            }
            D === "LineString" && L++;
            break;
          case "Polygon":
          case "MultiLineString":
            for (a = s.coordinates, o = 0; o < a.length; o++) {
              for (r = 0; r < a[o].length - u; r++) {
                if (t(a[o][r], l, S, L, v) === false) return false;
                l++;
              }
              D === "MultiLineString" && L++, D === "Polygon" && v++;
            }
            D === "Polygon" && L++;
            break;
          case "MultiPolygon":
            for (a = s.coordinates, o = 0; o < a.length; o++) {
              for (v = 0, r = 0; r < a[o].length; r++) {
                for (i = 0; i < a[o][r].length - u; i++) {
                  if (t(a[o][r][i], l, S, L, v) === false) return false;
                  l++;
                }
                v++;
              }
              L++;
            }
            break;
          case "GeometryCollection":
            for (o = 0; o < s.geometries.length; o++) if (ku(s.geometries[o], t, n) === false) return false;
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
  const Wy = {
    to: {
      [he.GCJ02]: Jt,
      [he.BD09]: qe(Hn, Jt),
      [he.BD09MC]: qe(qr, Hn, Jt),
      [he.EPSG3857]: Yr
    }
  }, By = {
    to: {
      [he.WGS84]: Dn,
      [he.BD09]: Hn,
      [he.BD09MC]: qe(qr, Hn),
      [he.EPSG3857]: qe(Yr, Dn)
    }
  }, Vy = {
    to: {
      [he.WGS84]: qe(Dn, Cn),
      [he.GCJ02]: Cn,
      [he.EPSG3857]: qe(Yr, Dn, Cn),
      [he.BD09MC]: qr
    }
  }, Yy = {
    to: {
      [he.WGS84]: Bo,
      [he.GCJ02]: qe(Jt, Bo),
      [he.BD09]: qe(Hn, Jt, Bo),
      [he.BD09MC]: qe(qr, Hn, Jt, Bo)
    }
  }, qy = {
    to: {
      [he.WGS84]: qe(Dn, Cn, Vo),
      [he.GCJ02]: qe(Cn, Vo),
      [he.EPSG3857]: qe(Yr, Dn, Cn, Vo),
      [he.BD09]: Vo
    }
  }, Ky = {
    WGS84: Wy,
    GCJ02: By,
    BD09: Vy,
    EPSG3857: Yy,
    BD09MC: qy
  };
  var zy = Ky;
  function Jy(e, t, n) {
    if ($t(!!e, "The args[0] input coordinate is required"), $t(!!t, "The args[1] original coordinate system is required"), $t(!!n, "The args[2] target coordinate system is required"), t === n) return e;
    const o = zy[t];
    $t(!!o, `Invalid original coordinate system: ${t}`);
    const r = o.to[n];
    $t(!!r, `Invalid target coordinate system: ${n}`);
    const i = typeof e;
    if ($t(i === "string" || i === "object", `Invalid input coordinate type: ${i}`), i === "string") try {
      e = JSON.parse(e);
    } catch {
      throw new Error(`Invalid input coordinate: ${e}`);
    }
    let s = false;
    Mu(e) && ($t(e.length >= 2, `Invalid input coordinate: ${e}`), $t(yc(e[0]) && yc(e[1]), `Invalid input coordinate: ${e}`), e = e.map(Number), s = true);
    const a = r;
    return s ? a(e) : (ku(e, (c) => {
      [c[0], c[1]] = a(c);
    }), e);
  }
  const Oi = Object.assign(Object.assign({}, he), {
    CRSTypes: he,
    transform: Jy
  });
  function wc(e) {
    if (!Xy(e)) throw new Error("Invalid geographic point: longitude and latitude must be numbers");
    const t = Oi.transform([
      e.longitude,
      e.latitude
    ], Oi.WGS84, Oi.GCJ02);
    return {
      longitude: t[0],
      latitude: t[1]
    };
  }
  function Xy(e) {
    return typeof (e == null ? void 0 : e.longitude) == "number" && typeof (e == null ? void 0 : e.latitude) == "number" && !isNaN(e.longitude) && !isNaN(e.latitude);
  }
  class Qy {
    constructor() {
      __publicField(this, "platform", new xy());
    }
    get isIOS() {
      return this.platform.os.toLowerCase().includes("ios");
    }
    get isMobile() {
      return this.platform.isMobile || this.platform.isTablet;
    }
    validateEnvironment() {
      if (!navigator.geolocation) {
        py(new Error("Geolocation is not supported by this browser."));
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
      const t = ((_a2 = await Ii("settings")) == null ? void 0 : _a2.geolocationCorrection) ?? false, n = this.getOptions();
      return console.info("[geolocation] Requesting current position from GPS"), new Promise((o, r) => {
        navigator.geolocation.getCurrentPosition((i) => {
          if (console.info("[geolocation] Successfully retrieved current position"), t) {
            const s = wc({
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
      const o = ((_a2 = await Ii("settings")) == null ? void 0 : _a2.watchCompatibilityMode) ?? true, r = ((_b2 = await Ii("settings")) == null ? void 0 : _b2.geolocationCorrection) ?? false;
      return o ? (console.info("[geolocation] Using compatibility mode for position watch"), new Promise((i) => {
        let s = null;
        i(setInterval(async () => {
          this.getCurrentPosition().then((a) => {
            s && Ns(s, a) || (s = a, console.info("[geolocation] Position updated via compatibility mode"), t(Object.freeze(a)));
          }).catch((a) => {
            throw console.error("[geolocation] Error in compatibility mode watch:", a), new Error(`Error while watching the geolocation in compatibility mode [GPS]. Code: ${a.code}, Msg: ${a.message}`);
          });
        }, 5e3));
      })) : new Promise((i) => {
        const s = navigator.geolocation.watchPosition((a) => {
          console.info("[geolocation] Position updated via native watch"), t(r ? wc({
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
  function Zy(e) {
    const t = {
      id: (Kt.length > 0 ? Kt[Kt.length - 1].id : 0) + 1,
      callback: e
    };
    return Kt.push(t), t.id;
  }
  function ew(e) {
    Kt.splice(Kt.findIndex((t) => t.id === e), 1);
  }
  let Yo = -1, vc = {
    latitude: 0,
    longitude: 0
  };
  const Tc = "https://ipapi.co/json/";
  class Ec {
    async getPermissionStatus() {
      try {
        return await fetch(Tc), "granted";
      } catch {
        return "denied";
      }
    }
    async fetchRaw(t = 1e4) {
      const n = new Promise(async (r, i) => {
        try {
          const s = await fetch(Tc);
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
      const n = Zy(t);
      return new Promise((o) => {
        if (Yo === -1) {
          const r = () => {
            this.getCurrentPosition().then((i) => {
              Ns(i, vc) || (console.info("[geolocation] IP geolocation position updated"), Kt.forEach((s) => s.callback(i)), vc = Eu(i));
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
      console.info("[geolocation] Clearing IP geolocation watch handler"), ew(t), Kt.length === 0 && (console.info("[geolocation] Stopping IP geolocation watch interval"), clearInterval(Yo), Yo = -1);
    }
  }
  const un = [];
  function Sc(e, t, n = false) {
    const o = {
      id: (un.length > 0 ? un[un.length - 1].id : 0) + 1,
      type: e,
      callback: t,
      triggered: false,
      once: n
    };
    return un.push(o), o.id;
  }
  function Ai(e, t, ...n) {
    un.filter((o) => o.type === e && !(o.once && o.triggered)).forEach((o) => {
      o.triggered = true, o.callback(Object.freeze(t), ...n);
    });
  }
  function tw(e) {
    un.splice(un.findIndex((t) => t.id === e), 1);
  }
  class nw {
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
      __publicField(this, "addListener", (t) => Sc("change", t));
      __publicField(this, "addHandler", (t, n, o) => Sc(t, n, o));
      __publicField(this, "removeListener", (t) => tw(t));
    }
    async build(t = async () => {
    }) {
      console.info("[geolocation] Building geolocation service");
      const n = new Qy(), o = () => {
        this.backend = new Ec(), console.log("Using IP Geolocation backend"), this.built = true;
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
        return Ns(t, this.presentLocation) ? (console.info("[geolocation] Location unchanged"), Object.freeze(t)) : (this.presentLocation = t, console.info("[geolocation] Location updated successfully"), Ai("change", t), Object.freeze(t));
      } catch (t) {
        const n = t;
        if (console.error("[geolocation] Location refresh failed:", n.message), n.code === An.TIMEOUT || n.code === An.IOS_HTTPS_REQUIRED) return console.warn("[geolocation] Falling back to IP geolocation"), this.backend = new Ec(), this.refresh();
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
          console.info(`[geolocation TIME: ${(/* @__PURE__ */ new Date()).toLocaleString()}] Position updated via watch`), this.presentLocation = n, Ai("change", this.presentLocation);
        }), this.serviceRunning = true, console.info("[geolocation] Geolocation service started successfully"), Ai("start", this.presentLocation), t(this.watchHandler);
      });
    }
    stop(t) {
      if (!this.backend) throw console.error("[geolocation] Cannot stop: backend not initialised"), new Error("Backend not initialised");
      console.info("[geolocation] Stopping geolocation service"), this.serviceRunning = false, this.backend.clearWatch(t), console.info("[geolocation] Geolocation service stopped");
    }
  }
  let Du;
  const Kr = (e) => Du = e, Hu = Symbol();
  function Qi(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var mo;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(mo || (mo = {}));
  function Fu() {
    const e = Hc(true), t = e.run(() => Be({}));
    let n = [], o = [];
    const r = fs({
      install(i) {
        Kr(r), r._a = i, i.provide(Hu, r), i.config.globalProperties.$pinia = r, o.forEach((s) => n.push(s)), o = [];
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
  const Uu = () => {
  };
  function Ic(e, t, n, o = Uu) {
    e.push(t);
    const r = () => {
      const i = e.indexOf(t);
      i > -1 && (e.splice(i, 1), o());
    };
    return !n && Fc() && of(r), r;
  }
  function vn(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const ow = (e) => e(), Oc = Symbol(), _i = Symbol();
  function Zi(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, o) => e.set(o, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const o = t[n], r = e[n];
      Qi(r) && Qi(o) && e.hasOwnProperty(n) && !ge(o) && !zt(o) ? e[n] = Zi(r, o) : e[n] = o;
    }
    return e;
  }
  const rw = Symbol();
  function iw(e) {
    return !Qi(e) || !Object.prototype.hasOwnProperty.call(e, rw);
  }
  const { assign: Gt } = Object;
  function sw(e) {
    return !!(ge(e) && e.effect);
  }
  function aw(e, t, n, o) {
    const { state: r, actions: i, getters: s } = t, a = n.state.value[e];
    let c;
    function u() {
      a || (n.state.value[e] = r ? r() : {});
      const l = Nf(n.state.value[e]);
      return Gt(l, i, Object.keys(s || {}).reduce((d, p) => (d[p] = fs(Ts(() => {
        Kr(n);
        const m = n._s.get(e);
        return s[p].call(m, m);
      })), d), {}));
    }
    return c = $u(e, u, t, n, o, true), c;
  }
  function $u(e, t, n = {}, o, r, i) {
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
    function P($) {
      let M;
      u = l = false, typeof $ == "function" ? ($(o.state.value[e]), M = {
        type: mo.patchFunction,
        storeId: e,
        events: m
      }) : (Zi(o.state.value[e], $), M = {
        type: mo.patchObject,
        payload: $,
        storeId: e,
        events: m
      });
      const j = w = Symbol();
      il().then(() => {
        w === j && (u = true);
      }), l = true, vn(d, M, o.state.value[e]);
    }
    const S = i ? function() {
      const { state: M } = n, j = M ? M() : {};
      this.$patch((J) => {
        Gt(J, j);
      });
    } : Uu;
    function E() {
      s.stop(), d = [], p = [], o._s.delete(e);
    }
    const L = ($, M = "") => {
      if (Oc in $) return $[_i] = M, $;
      const j = function() {
        Kr(o);
        const J = Array.from(arguments), U = [], oe = [];
        function we(X) {
          U.push(X);
        }
        function ze(X) {
          oe.push(X);
        }
        vn(p, {
          args: J,
          name: j[_i],
          store: D,
          after: we,
          onError: ze
        });
        let fe;
        try {
          fe = $.apply(this && this.$id === e ? this : D, J);
        } catch (X) {
          throw vn(oe, X), X;
        }
        return fe instanceof Promise ? fe.then((X) => (vn(U, X), X)).catch((X) => (vn(oe, X), Promise.reject(X))) : (vn(U, fe), fe);
      };
      return j[Oc] = true, j[_i] = M, j;
    }, v = {
      _p: o,
      $id: e,
      $onAction: Ic.bind(null, p),
      $patch: P,
      $reset: S,
      $subscribe($, M = {}) {
        const j = Ic(d, $, M.detached, () => J()), J = s.run(() => On(() => o.state.value[e], (U) => {
          (M.flush === "sync" ? l : u) && $({
            storeId: e,
            type: mo.direct,
            events: m
          }, U);
        }, Gt({}, c, M)));
        return j;
      },
      $dispose: E
    }, D = Lr(v);
    o._s.set(e, D);
    const z = (o._a && o._a.runWithContext || ow)(() => o._e.run(() => (s = Hc()).run(() => t({
      action: L
    }))));
    for (const $ in z) {
      const M = z[$];
      if (ge(M) && !sw(M) || zt(M)) i || (g && iw(M) && (ge(M) ? M.value = g[$] : Zi(M, g[$])), o.state.value[e][$] = M);
      else if (typeof M == "function") {
        const j = L(M, $);
        z[$] = j, a.actions[$] = M;
      }
    }
    return Gt(D, z), Gt(Z(D), z), Object.defineProperty(D, "$state", {
      get: () => o.state.value[e],
      set: ($) => {
        P((M) => {
          Gt(M, $);
        });
      }
    }), o._p.forEach(($) => {
      Gt(D, s.run(() => $({
        store: D,
        app: o._a,
        pinia: o,
        options: a
      })));
    }), g && i && n.hydrate && n.hydrate(D.$state, g), u = true, l = true, D;
  }
  Vw = function(e, t, n) {
    let o;
    const r = typeof t == "function";
    o = r ? n : t;
    function i(s, a) {
      const c = fd();
      return s = s || (c ? fo(Hu, null) : null), s && Kr(s), s = Du, s._s.has(e) || (r ? $u(e, t, o, s) : aw(e, o, s)), s._s.get(e);
    }
    return i.$id = e, i;
  };
  let Ac, cw, lw, uw, fw, dw, hw, pw, gw, mw, bw, yw, ww, vw, Tw, Sw, ks;
  Ac = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a2;
        const e = Zl((await di(async () => {
          const { default: n } = await import("./App-BTBdRhFx.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)).default);
        e.use(Fu()), e.use((await di(async () => {
          const { default: n } = await import("./index-BV_2vilI.js").then(async (m) => {
            await m.__tla;
            return m;
          }).then((o) => o.i);
          return {
            default: n
          };
        }, __vite__mapDeps([14,1,15]), import.meta.url)).default), e.use((await di(async () => {
          const { i18n: n } = await import("./index-C8YmE5Lo.js");
          return {
            i18n: n
          };
        }, __vite__mapDeps([16,2]), import.meta.url)).i18n), window.splashScreen && window.splashScreen.unmount(), (_a2 = document.getElementById("splash")) == null ? void 0 : _a2.remove();
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
      moduleInit: ky
    },
    {
      name: "geolocation",
      displayName: "Geolocation Service",
      moduleInit: async () => {
        try {
          const e = new nw();
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
  Yw = vy;
  qw = wy;
  cw = {
    class: "splash-container"
  };
  lw = {
    class: "splash-content"
  };
  uw = {
    key: 0,
    class: "loading-section"
  };
  fw = {
    class: "progress-container"
  };
  dw = {
    class: "progress-bar"
  };
  hw = {
    class: "progress-text"
  };
  pw = {
    class: "loading-details"
  };
  gw = {
    class: "current-module"
  };
  mw = {
    key: 1,
    class: "error-section"
  };
  bw = {
    class: "error-message"
  };
  yw = {
    key: 0
  };
  ww = {
    key: 1
  };
  vw = {
    key: 2,
    class: "timeout-section"
  };
  Tw = Wf({
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
      }, p = Ts(() => Math.round(t.value / 100 * 100)), m = {
        info: (...P) => {
          const S = P.join(" ");
          console.info(S), n.value = String(S);
        },
        warn: (...P) => {
          const S = P.join(" ");
          console.warn(S), n.value = String(S);
        },
        error: (...P) => {
          const S = P.join(" ");
          console.error(S), n.value = String(S), c.value = String(S);
        },
        debug: (...P) => {
          console.debug(...P);
        }
      }, g = {
        onModuleStart: (P) => {
          o.value = P, n.value = `Loading ${P}...`;
        },
        onModuleComplete: (P) => {
          i.value++, t.value = Math.min(100, i.value / r.value * 100), n.value = `Loaded ${P}`;
        },
        onModuleError: (P, S) => {
          n.value = `Failed to load ${P}`, c.value = S.message;
        },
        onOverallProgress: (P, S) => {
          r.value = S, i.value = P, t.value = Math.min(100, P / S * 100);
        }
      }, w = () => {
        window.location.reload();
      };
      return Ro(() => {
        var _a2;
        l(), d(), (_a2 = document.getElementById("pre-splash")) == null ? void 0 : _a2.remove();
        const P = (S, E = /* @__PURE__ */ new Set()) => {
          if (E.has(S)) return 0;
          E.add(S);
          const L = Ac.find((D) => D.name === S);
          if (!L) return 0;
          let v = 1;
          if (L.dependencies) for (const D of L.dependencies) v += P(D, E);
          return v;
        };
        r.value = P("trackmaker"), console.log("=== Start Loading Modules ==="), Au(Ac, "trackmaker", 3e4, {
          logger: m,
          progressReporter: g,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", o.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((S) => {
          const E = String(S.toString());
          if (E.toLowerCase().includes("timeout")) {
            const L = E.split("Trackback").map((v) => v.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(L.map((v) => ({
              Trackback: v
            })), [
              "Trackback"
            ]), a.value = true;
          } else c.value = E, s.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(S);
        });
      }), (P, S) => (Je(), Dt("div", cw, [
        de("div", lw, [
          S[7] || (S[7] = de("div", {
            class: "logo-section"
          }, [
            de("div", {
              class: "app-logo"
            }, [
              de("img", {
                src: _h,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            de("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !s.value && !a.value ? (Je(), Dt("div", uw, [
            de("div", fw, [
              de("div", dw, [
                de("div", {
                  class: "progress-fill",
                  style: Cr({
                    width: `${p.value}%`
                  })
                }, null, 4)
              ]),
              de("div", hw, Zn(p.value) + "% ", 1)
            ]),
            de("div", pw, [
              de("p", gw, " Loading: " + Zn(o.value), 1)
            ]),
            S[0] || (S[0] = de("div", {
              class: "loading-animation"
            }, [
              de("div", {
                class: "spinner"
              })
            ], -1))
          ])) : ii("", true),
          s.value ? (Je(), Dt("div", mw, [
            S[1] || (S[1] = de("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            S[2] || (S[2] = de("h2", null, "Loading Error", -1)),
            de("div", bw, [
              (Je(true), Dt(Oe, null, td((c.value ?? "").split(`
`), (E) => (Je(), Dt("div", {
                key: E,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                E.toLocaleLowerCase().includes("trackback") ? (Je(), Dt("strong", yw, Zn(E), 1)) : (Je(), Dt("span", ww, Zn(E), 1))
              ]))), 128))
            ]),
            de("button", {
              class: "retry-button",
              onClick: w
            }, " Retry ")
          ])) : ii("", true),
          a.value ? (Je(), Dt("div", vw, [
            S[3] || (S[3] = de("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            S[4] || (S[4] = de("h2", null, "Connection Timeout", -1)),
            S[5] || (S[5] = de("p", null, "Unable to load required modules within the timeout period.", -1)),
            S[6] || (S[6] = de("p", null, "Please check your internet connection and try again.", -1)),
            de("button", {
              class: "retry-button",
              onClick: w
            }, " Retry ")
          ])) : ii("", true)
        ])
      ]));
    }
  });
  Ew = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, r] of t) n[o] = r;
    return n;
  };
  Sw = Ew(Tw, [
    [
      "__scopeId",
      "data-v-5254237a"
    ]
  ]);
  ks = Zl(Sw);
  ks.use(Fu());
  ks.mount("#splash");
  window.splashScreen = ks;
})();
export {
  Ww as $,
  Zn as A,
  Hw as B,
  Di as C,
  Pw as D,
  di as E,
  Oe as F,
  Of as G,
  If as H,
  il as I,
  Dw as J,
  Nw as K,
  Vw as L,
  xw as M,
  kw as N,
  Cw as O,
  xy as P,
  _w as Q,
  Lw as R,
  Fw as S,
  Rw as T,
  td as U,
  jw as V,
  Cr as W,
  Gw as X,
  fs as Y,
  Ii as Z,
  Ew as _,
  __tla,
  de as a,
  Bw as a0,
  Pg as a1,
  Zt as a2,
  Rt as a3,
  $w as a4,
  ge as a5,
  Eu as a6,
  Yw as a7,
  qw as a8,
  Ng as a9,
  cu as aA,
  ou as aB,
  km as aC,
  sy as aD,
  pt as aE,
  ly as aF,
  Fh as aG,
  ry as aH,
  Nn as aI,
  Fr as aJ,
  Hc as aK,
  Te as aa,
  Yf as ab,
  Vf as ac,
  Fc as ad,
  of as ae,
  fd as af,
  Ow as ag,
  bt as ah,
  No as ai,
  Es as aj,
  Uh as ak,
  _a as al,
  sp as am,
  lp as an,
  iu as ao,
  ru as ap,
  Ss as aq,
  su as ar,
  qp as as,
  nt as at,
  hr as au,
  fu as av,
  Ke as aw,
  zg as ax,
  pm as ay,
  Fg as az,
  Be as b,
  Dt as c,
  Wf as d,
  Kf as e,
  gs as f,
  Lr as g,
  Yd as h,
  fo as i,
  Ts as j,
  Ro as k,
  ms as l,
  Hd as m,
  rs as n,
  Je as o,
  ud as p,
  On as q,
  Zc as r,
  $e as s,
  Aw as t,
  Uw as u,
  tl as v,
  Mw as w,
  ii as x,
  Uf as y,
  Dd as z
};
