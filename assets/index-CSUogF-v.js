const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-cZukATjX.js","./platform-5NWNjCmy.js","./vue-i18n-DWHux4_u.js","./App-jBe8gYQr.css","./index-Cv7ObHZn.js","./index-o8mdNpeC.css","./index-BG-dcj_z.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let Bn, ir, Mw, Di, Nw, It, ke, on, Bo, Dw, rn, Rw, Tf, Ef, Fw, Vc, Ow, _e, Dt, sf, _w, ko, Uw, ds, ef, be, Io, Tw, ge, Mr, H, L, $w, Cw, xw, Pw, Lw, Lf, jw, Gw, Bw, Vw, hi, Jy, Qu, Fn, Wo, Zi, Ac, ku, Gf, Aw, Mt, Ww, Ic, Je, Gt, bf, Af, ms, Mo, Ed, wr, Es, xr, ys, hd, is, nt, jf, xn, Uc, Ye, Sw, Hw, Gc, kw, si, gf, dd;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
      for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(o) {
      const i = {};
      return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function r(o) {
      if (o.ep) return;
      o.ep = true;
      const i = n(o);
      fetch(o.href, i);
    }
  })();
  function ts(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const ne = {}, Ln = [], it = () => {
  }, hc = () => false, Ro = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ns = (e) => e.startsWith("onUpdate:"), Te = Object.assign, rs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, bu = Object.prototype.hasOwnProperty, re = (e, t) => bu.call(e, t), V = Array.isArray, Cn = (e) => Cr(e) === "[object Map]", pc = (e) => Cr(e) === "[object Set]", vu = (e) => Cr(e) === "[object RegExp]", z = (e) => typeof e == "function", ye = (e) => typeof e == "string", Ft = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", gc = (e) => (fe(e) || z(e)) && z(e.then) && z(e.catch), mc = Object.prototype.toString, Cr = (e) => mc.call(e), Tu = (e) => Cr(e).slice(8, -1), yc = (e) => Cr(e) === "[object Object]", os = (e) => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fr = ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), No = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Eu = /-\w/g, ze = No((e) => e.replace(Eu, (t) => t.slice(1).toUpperCase())), Iu = /\B([A-Z])/g, Ht = No((e) => e.replace(Iu, "-$1").toLowerCase()), Lo = No((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xo = No((e) => e ? `on${Lo(e)}` : ""), $e = (e, t) => !Object.is(e, t), dr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, wc = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  }, Au = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Su = (e) => {
    const t = ye(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Fs;
  const Co = () => Fs || (Fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  ko = function(e) {
    if (V(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], o = ye(r) ? Ru(r) : ko(r);
        if (o) for (const i in o) t[i] = o[i];
      }
      return t;
    } else if (ye(e) || fe(e)) return e;
  };
  const Ou = /;(?![^(]*\))/g, _u = /:([^]+)/, Pu = /\/\*[^]*?\*\//g;
  function Ru(e) {
    const t = {};
    return e.replace(Pu, "").split(Ou).forEach((n) => {
      if (n) {
        const r = n.split(_u);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  is = function(e) {
    let t = "";
    if (ye(e)) t = e;
    else if (V(e)) for (let n = 0; n < e.length; n++) {
      const r = is(e[n]);
      r && (t += r + " ");
    }
    else if (fe(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const Nu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lu = ts(Nu);
  function bc(e) {
    return !!e || e === "";
  }
  let vc, Tc, Zo;
  vc = (e) => !!(e && e.__v_isRef === true);
  ir = (e) => ye(e) ? e : e == null ? "" : V(e) || fe(e) && (e.toString === mc || !z(e.toString)) ? vc(e) ? ir(e.value) : JSON.stringify(e, Tc, 2) : String(e);
  Tc = (e, t) => vc(t) ? Tc(e, t.value) : Cn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, o], i) => (n[Zo(r, i) + " =>"] = o, n), {})
  } : pc(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Zo(n))
  } : Ft(t) ? Zo(t) : fe(t) && !V(t) && !yc(t) ? String(t) : t;
  Zo = (e, t = "") => {
    var n;
    return Ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function Cu(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Ne;
  class Ec {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Ne, !t && Ne && (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1);
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
        const n = Ne;
        try {
          return Ne = this, t();
        } finally {
          Ne = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Ne, Ne = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Ne = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const o = this.parent.scopes.pop();
          o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  Ic = function(e) {
    return new Ec(e);
  };
  Ac = function() {
    return Ne;
  };
  ku = function(e, t = false) {
    Ne && Ne.cleanups.push(e);
  };
  let ue;
  const Qo = /* @__PURE__ */ new WeakSet();
  class Sc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && Ne.active && Ne.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Qo.has(this) && (Qo.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _c(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Hs(this), Pc(this);
      const t = ue, n = st;
      ue = this, st = true;
      try {
        return this.fn();
      } finally {
        Rc(this), ue = t, st = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) cs(t);
        this.deps = this.depsTail = void 0, Hs(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Qo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      _i(this) && this.run();
    }
    get dirty() {
      return _i(this);
    }
  }
  let Oc = 0, hr, pr;
  function _c(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = pr, pr = e;
      return;
    }
    e.next = hr, hr = e;
  }
  function ss() {
    Oc++;
  }
  function as() {
    if (--Oc > 0) return;
    if (pr) {
      let t = pr;
      for (pr = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; hr; ) {
      let t = hr;
      for (hr = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function Pc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Rc(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), cs(r), xu(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
    }
    e.deps = t, e.depsTail = n;
  }
  function _i(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Nc(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Nc(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ir) || (e.globalVersion = Ir, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_i(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = ue, r = st;
    ue = e, st = true;
    try {
      Pc(e);
      const o = e.fn(e._value);
      (t.version === 0 || $e(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
    } catch (o) {
      throw t.version++, o;
    } finally {
      ue = n, st = r, Rc(e), e.flags &= -3;
    }
  }
  function cs(e, t = false) {
    const { dep: n, prevSub: r, nextSub: o } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep) cs(i, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function xu(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let st = true;
  const Lc = [];
  function kt() {
    Lc.push(st), st = false;
  }
  function xt() {
    const e = Lc.pop();
    st = e === void 0 ? true : e;
  }
  function Hs(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = ue;
      ue = void 0;
      try {
        t();
      } finally {
        ue = n;
      }
    }
  }
  let Ir = 0;
  class Du {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class xo {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!ue || !st || ue === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== ue) n = this.activeLink = new Du(ue, this), ue.deps ? (n.prevDep = ue.depsTail, ue.depsTail.nextDep = n, ue.depsTail = n) : ue.deps = ue.depsTail = n, Cc(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ue.depsTail, n.nextDep = void 0, ue.depsTail.nextDep = n, ue.depsTail = n, ue.deps === n && (ue.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, Ir++, this.notify(t);
    }
    notify(t) {
      ss();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        as();
      }
    }
  }
  function Cc(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Cc(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const io = /* @__PURE__ */ new WeakMap(), yn = Symbol(""), Pi = Symbol(""), Ar = Symbol("");
  function Ce(e, t, n) {
    if (st && ue) {
      let r = io.get(e);
      r || io.set(e, r = /* @__PURE__ */ new Map());
      let o = r.get(n);
      o || (r.set(n, o = new xo()), o.map = r, o.key = n), o.track();
    }
  }
  function Pt(e, t, n, r, o, i) {
    const s = io.get(e);
    if (!s) {
      Ir++;
      return;
    }
    const a = (c) => {
      c && c.trigger();
    };
    if (ss(), t === "clear") s.forEach(a);
    else {
      const c = V(e), u = c && os(n);
      if (c && n === "length") {
        const l = Number(r);
        s.forEach((d, g) => {
          (g === "length" || g === Ar || !Ft(g) && g >= l) && a(d);
        });
      } else switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(Ar)), t) {
        case "add":
          c ? u && a(s.get("length")) : (a(s.get(yn)), Cn(e) && a(s.get(Pi)));
          break;
        case "delete":
          c || (a(s.get(yn)), Cn(e) && a(s.get(Pi)));
          break;
        case "set":
          Cn(e) && a(s.get(yn));
          break;
      }
    }
    as();
  }
  function Mu(e, t) {
    const n = io.get(e);
    return n && n.get(t);
  }
  function An(e) {
    const t = te(e);
    return t === e ? t : (Ce(t, "iterate", Ar), Qe(e) ? t : t.map(Oe));
  }
  function Do(e) {
    return Ce(e = te(e), "iterate", Ar), e;
  }
  const Fu = {
    __proto__: null,
    [Symbol.iterator]() {
      return ei(this, Symbol.iterator, Oe);
    },
    concat(...e) {
      return An(this).concat(...e.map((t) => V(t) ? An(t) : t));
    },
    entries() {
      return ei(this, "entries", (e) => (e[1] = Oe(e[1]), e));
    },
    every(e, t) {
      return St(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return St(this, "filter", e, t, (n) => n.map(Oe), arguments);
    },
    find(e, t) {
      return St(this, "find", e, t, Oe, arguments);
    },
    findIndex(e, t) {
      return St(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return St(this, "findLast", e, t, Oe, arguments);
    },
    findLastIndex(e, t) {
      return St(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return St(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return ti(this, "includes", e);
    },
    indexOf(...e) {
      return ti(this, "indexOf", e);
    },
    join(e) {
      return An(this).join(e);
    },
    lastIndexOf(...e) {
      return ti(this, "lastIndexOf", e);
    },
    map(e, t) {
      return St(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Kn(this, "pop");
    },
    push(...e) {
      return Kn(this, "push", e);
    },
    reduce(e, ...t) {
      return Us(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Us(this, "reduceRight", e, t);
    },
    shift() {
      return Kn(this, "shift");
    },
    some(e, t) {
      return St(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Kn(this, "splice", e);
    },
    toReversed() {
      return An(this).toReversed();
    },
    toSorted(e) {
      return An(this).toSorted(e);
    },
    toSpliced(...e) {
      return An(this).toSpliced(...e);
    },
    unshift(...e) {
      return Kn(this, "unshift", e);
    },
    values() {
      return ei(this, "values", Oe);
    }
  };
  function ei(e, t, n) {
    const r = Do(e), o = r[t]();
    return r !== e && !Qe(e) && (o._next = o.next, o.next = () => {
      const i = o._next();
      return i.value && (i.value = n(i.value)), i;
    }), o;
  }
  const Hu = Array.prototype;
  function St(e, t, n, r, o, i) {
    const s = Do(e), a = s !== e && !Qe(e), c = s[t];
    if (c !== Hu[t]) {
      const d = c.apply(e, i);
      return a ? Oe(d) : d;
    }
    let u = n;
    s !== e && (a ? u = function(d, g) {
      return n.call(this, Oe(d), g, e);
    } : n.length > 2 && (u = function(d, g) {
      return n.call(this, d, g, e);
    }));
    const l = c.call(s, u, r);
    return a && o ? o(l) : l;
  }
  function Us(e, t, n, r) {
    const o = Do(e);
    let i = n;
    return o !== e && (Qe(e) ? n.length > 3 && (i = function(s, a, c) {
      return n.call(this, s, a, c, e);
    }) : i = function(s, a, c) {
      return n.call(this, s, Oe(a), c, e);
    }), o[t](i, ...r);
  }
  function ti(e, t, n) {
    const r = te(e);
    Ce(r, "iterate", Ar);
    const o = r[t](...n);
    return (o === -1 || o === false) && fs(n[0]) ? (n[0] = te(n[0]), r[t](...n)) : o;
  }
  function Kn(e, t, n = []) {
    kt(), ss();
    const r = te(e)[t].apply(e, n);
    return as(), xt(), r;
  }
  const Uu = ts("__proto__,__v_isRef,__isVue"), kc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ft));
  function ju(e) {
    Ft(e) || (e = String(e));
    const t = te(this);
    return Ce(t, "has", e), t.hasOwnProperty(e);
  }
  class xc {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const o = this._isReadonly, i = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw") return r === (o ? i ? Ju : Hc : i ? Fc : Mc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const s = V(t);
      if (!o) {
        let c;
        if (s && (c = Fu[n])) return c;
        if (n === "hasOwnProperty") return ju;
      }
      const a = Reflect.get(t, n, be(t) ? t : r);
      return (Ft(n) ? kc.has(n) : Uu(n)) || (o || Ce(t, "get", n), i) ? a : be(a) ? s && os(n) ? a : a.value : fe(a) ? o ? Uc(a) : Mo(a) : a;
    }
  }
  class Dc extends xc {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, o) {
      let i = t[n];
      if (!this._isShallow) {
        const c = en(i);
        if (!Qe(r) && !en(r) && (i = te(i), r = te(r)), !V(t) && be(i) && !be(r)) return c || (i.value = r), true;
      }
      const s = V(t) && os(n) ? Number(n) < t.length : re(t, n), a = Reflect.set(t, n, r, be(t) ? t : o);
      return t === te(o) && (s ? $e(r, i) && Pt(t, "set", n, r) : Pt(t, "add", n, r)), a;
    }
    deleteProperty(t, n) {
      const r = re(t, n);
      t[n];
      const o = Reflect.deleteProperty(t, n);
      return o && r && Pt(t, "delete", n, void 0), o;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!Ft(n) || !kc.has(n)) && Ce(t, "has", n), r;
    }
    ownKeys(t) {
      return Ce(t, "iterate", V(t) ? "length" : yn), Reflect.ownKeys(t);
    }
  }
  class Gu extends xc {
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
  const Wu = new Dc(), $u = new Gu(), Bu = new Dc(true);
  const Ri = (e) => e, Ur = (e) => Reflect.getPrototypeOf(e);
  function Vu(e, t, n) {
    return function(...r) {
      const o = this.__v_raw, i = te(o), s = Cn(i), a = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, u = o[e](...r), l = n ? Ri : t ? so : Oe;
      return !t && Ce(i, "iterate", c ? Pi : yn), {
        next() {
          const { value: d, done: g } = u.next();
          return g ? {
            value: d,
            done: g
          } : {
            value: a ? [
              l(d[0]),
              l(d[1])
            ] : l(d),
            done: g
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function jr(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Yu(e, t) {
    const n = {
      get(o) {
        const i = this.__v_raw, s = te(i), a = te(o);
        e || ($e(o, a) && Ce(s, "get", o), Ce(s, "get", a));
        const { has: c } = Ur(s), u = t ? Ri : e ? so : Oe;
        if (c.call(s, o)) return u(i.get(o));
        if (c.call(s, a)) return u(i.get(a));
        i !== s && i.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !e && Ce(te(o), "iterate", yn), o.size;
      },
      has(o) {
        const i = this.__v_raw, s = te(i), a = te(o);
        return e || ($e(o, a) && Ce(s, "has", o), Ce(s, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
      },
      forEach(o, i) {
        const s = this, a = s.__v_raw, c = te(a), u = t ? Ri : e ? so : Oe;
        return !e && Ce(c, "iterate", yn), a.forEach((l, d) => o.call(i, u(l), u(d), s));
      }
    };
    return Te(n, e ? {
      add: jr("add"),
      set: jr("set"),
      delete: jr("delete"),
      clear: jr("clear")
    } : {
      add(o) {
        !t && !Qe(o) && !en(o) && (o = te(o));
        const i = te(this);
        return Ur(i).has.call(i, o) || (i.add(o), Pt(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !Qe(i) && !en(i) && (i = te(i));
        const s = te(this), { has: a, get: c } = Ur(s);
        let u = a.call(s, o);
        u || (o = te(o), u = a.call(s, o));
        const l = c.call(s, o);
        return s.set(o, i), u ? $e(i, l) && Pt(s, "set", o, i) : Pt(s, "add", o, i), this;
      },
      delete(o) {
        const i = te(this), { has: s, get: a } = Ur(i);
        let c = s.call(i, o);
        c || (o = te(o), c = s.call(i, o)), a && a.call(i, o);
        const u = i.delete(o);
        return c && Pt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = te(this), i = o.size !== 0, s = o.clear();
        return i && Pt(o, "clear", void 0, void 0), s;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((o) => {
      n[o] = Vu(o, e, t);
    }), n;
  }
  function ls(e, t) {
    const n = Yu(e, t);
    return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(re(n, o) && o in r ? n : r, o, i);
  }
  const zu = {
    get: ls(false, false)
  }, qu = {
    get: ls(false, true)
  }, Ku = {
    get: ls(true, false)
  };
  const Mc = /* @__PURE__ */ new WeakMap(), Fc = /* @__PURE__ */ new WeakMap(), Hc = /* @__PURE__ */ new WeakMap(), Ju = /* @__PURE__ */ new WeakMap();
  function Xu(e) {
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
  function Zu(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Xu(Tu(e));
  }
  Mo = function(e) {
    return en(e) ? e : us(e, false, Wu, zu, Mc);
  };
  Qu = function(e) {
    return us(e, false, Bu, qu, Fc);
  };
  Uc = function(e) {
    return us(e, true, $u, Ku, Hc);
  };
  function us(e, t, n, r, o) {
    if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = Zu(e);
    if (i === 0) return e;
    const s = o.get(e);
    if (s) return s;
    const a = new Proxy(e, i === 2 ? r : n);
    return o.set(e, a), a;
  }
  function Qt(e) {
    return en(e) ? Qt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function en(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Qe(e) {
    return !!(e && e.__v_isShallow);
  }
  function fs(e) {
    return e ? !!e.__v_raw : false;
  }
  function te(e) {
    const t = e && e.__v_raw;
    return t ? te(t) : e;
  }
  ds = function(e) {
    return !re(e, "__v_skip") && Object.isExtensible(e) && wc(e, "__v_skip", true), e;
  };
  const Oe = (e) => fe(e) ? Mo(e) : e, so = (e) => fe(e) ? Uc(e) : e;
  be = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Je = function(e) {
    return jc(e, false);
  };
  ef = function(e) {
    return jc(e, true);
  };
  function jc(e, t) {
    return be(e) ? e : new tf(e, t);
  }
  class tf {
    constructor(t, n) {
      this.dep = new xo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : te(t), this._value = n ? t : Oe(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || Qe(t) || en(t);
      t = r ? t : te(t), $e(t, n) && (this._rawValue = t, this._value = r ? t : Oe(t), this.dep.trigger());
    }
  }
  Gc = function(e) {
    return be(e) ? e.value : e;
  };
  Aw = function(e) {
    return z(e) ? e() : Gc(e);
  };
  const nf = {
    get: (e, t, n) => t === "__v_raw" ? e : Gc(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const o = e[t];
      return be(o) && !be(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function Wc(e) {
    return Qt(e) ? e : new Proxy(e, nf);
  }
  class rf {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new xo(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = o;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function of(e) {
    return new rf(e);
  }
  sf = function(e) {
    const t = V(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = $c(e, n);
    return t;
  };
  class af {
    constructor(t, n, r) {
      this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0;
    }
    get value() {
      const t = this._object[this._key];
      return this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return Mu(te(this._object), this._key);
    }
  }
  class cf {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Sw = function(e, t, n) {
    return be(e) ? e : z(e) ? new cf(e) : fe(e) && arguments.length > 1 ? $c(e, t, n) : Je(e);
  };
  function $c(e, t, n) {
    const r = e[t];
    return be(r) ? r : new af(e, t, n);
  }
  class lf {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new xo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ir - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && ue !== this) return _c(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Nc(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function uf(e, t, n = false) {
    let r, o;
    return z(e) ? r = e : (r = e.get, o = e.set), new lf(r, o, n);
  }
  const Gr = {}, ao = /* @__PURE__ */ new WeakMap();
  let pn;
  function ff(e, t = false, n = pn) {
    if (n) {
      let r = ao.get(n);
      r || ao.set(n, r = []), r.push(e);
    }
  }
  function df(e, t, n = ne) {
    const { immediate: r, deep: o, once: i, scheduler: s, augmentJob: a, call: c } = n, u = (I) => o ? I : Qe(I) || o === false || o === 0 ? Rt(I, 1) : Rt(I);
    let l, d, g, p, m = false, b = false;
    if (be(e) ? (d = () => e.value, m = Qe(e)) : Qt(e) ? (d = () => u(e), m = true) : V(e) ? (b = true, m = e.some((I) => Qt(I) || Qe(I)), d = () => e.map((I) => {
      if (be(I)) return I.value;
      if (Qt(I)) return u(I);
      if (z(I)) return c ? c(I, 2) : I();
    })) : z(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
      if (g) {
        kt();
        try {
          g();
        } finally {
          xt();
        }
      }
      const I = pn;
      pn = l;
      try {
        return c ? c(e, 3, [
          p
        ]) : e(p);
      } finally {
        pn = I;
      }
    } : d = it, t && o) {
      const I = d, G = o === true ? 1 / 0 : o;
      d = () => Rt(I(), G);
    }
    const C = Ac(), O = () => {
      l.stop(), C && C.active && rs(C.effects, l);
    };
    if (i && t) {
      const I = t;
      t = (...G) => {
        I(...G), O();
      };
    }
    let A = b ? new Array(e.length).fill(Gr) : Gr;
    const M = (I) => {
      if (!(!(l.flags & 1) || !l.dirty && !I)) if (t) {
        const G = l.run();
        if (o || m || (b ? G.some((J, X) => $e(J, A[X])) : $e(G, A))) {
          g && g();
          const J = pn;
          pn = l;
          try {
            const X = [
              G,
              A === Gr ? void 0 : b && A[0] === Gr ? [] : A,
              p
            ];
            A = G, c ? c(t, 3, X) : t(...X);
          } finally {
            pn = J;
          }
        }
      } else l.run();
    };
    return a && a(M), l = new Sc(d), l.scheduler = s ? () => s(M, false) : M, p = (I) => ff(I, false, l), g = l.onStop = () => {
      const I = ao.get(l);
      if (I) {
        if (c) c(I, 4);
        else for (const G of I) G();
        ao.delete(l);
      }
    }, t ? r ? M(true) : A = l.run() : s ? s(M.bind(null, true), true) : l.run(), O.pause = l.pause.bind(l), O.resume = l.resume.bind(l), O.stop = O, O;
  }
  function Rt(e, t = 1 / 0, n) {
    if (t <= 0 || !fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, be(e)) Rt(e.value, t, n);
    else if (V(e)) for (let r = 0; r < e.length; r++) Rt(e[r], t, n);
    else if (pc(e) || Cn(e)) e.forEach((r) => {
      Rt(r, t, n);
    });
    else if (yc(e)) {
      for (const r in e) Rt(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Rt(e[r], t, n);
    }
    return e;
  }
  function kr(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (o) {
      Fo(o, t, n);
    }
  }
  function at(e, t, n, r) {
    if (z(e)) {
      const o = kr(e, t, n, r);
      return o && gc(o) && o.catch((i) => {
        Fo(i, t, n);
      }), o;
    }
    if (V(e)) {
      const o = [];
      for (let i = 0; i < e.length; i++) o.push(at(e[i], t, n, r));
      return o;
    }
  }
  function Fo(e, t, n, r = true) {
    const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ne;
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
        kt(), kr(i, null, 10, [
          e,
          c,
          u
        ]), xt();
        return;
      }
    }
    hf(e, n, o, r, s);
  }
  function hf(e, t, n, r = true, o = false) {
    if (o) throw e;
    console.error(e);
  }
  const Me = [];
  let yt = -1;
  const kn = [];
  let Yt = null, Nn = 0;
  const Bc = Promise.resolve();
  let co = null;
  Vc = function(e) {
    const t = co || Bc;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function pf(e) {
    let t = yt + 1, n = Me.length;
    for (; t < n; ) {
      const r = t + n >>> 1, o = Me[r], i = Sr(o);
      i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function hs(e) {
    if (!(e.flags & 1)) {
      const t = Sr(e), n = Me[Me.length - 1];
      !n || !(e.flags & 2) && t >= Sr(n) ? Me.push(e) : Me.splice(pf(t), 0, e), e.flags |= 1, Yc();
    }
  }
  function Yc() {
    co || (co = Bc.then(Kc));
  }
  function zc(e) {
    V(e) ? kn.push(...e) : Yt && e.id === -1 ? Yt.splice(Nn + 1, 0, e) : e.flags & 1 || (kn.push(e), e.flags |= 1), Yc();
  }
  function js(e, t, n = yt + 1) {
    for (; n < Me.length; n++) {
      const r = Me[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Me.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function qc(e) {
    if (kn.length) {
      const t = [
        ...new Set(kn)
      ].sort((n, r) => Sr(n) - Sr(r));
      if (kn.length = 0, Yt) {
        Yt.push(...t);
        return;
      }
      for (Yt = t, Nn = 0; Nn < Yt.length; Nn++) {
        const n = Yt[Nn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Yt = null, Nn = 0;
    }
  }
  const Sr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Kc(e) {
    try {
      for (yt = 0; yt < Me.length; yt++) {
        const t = Me[yt];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), kr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; yt < Me.length; yt++) {
        const t = Me[yt];
        t && (t.flags &= -2);
      }
      yt = -1, Me.length = 0, qc(), co = null, (Me.length || kn.length) && Kc();
    }
  }
  let Pe = null, Jc = null;
  function lo(e) {
    const t = Pe;
    return Pe = e, Jc = e && e.type.__scopeId || null, t;
  }
  gf = function(e, t = Pe, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && mo(-1);
      const i = lo(t);
      let s;
      try {
        s = e(...o);
      } finally {
        lo(i), r._d && mo(1);
      }
      return s;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  Ow = function(e, t) {
    if (Pe === null) return e;
    const n = $o(Pe), r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
      let [i, s, a, c = ne] = t[o];
      i && (z(i) && (i = {
        mounted: i,
        updated: i
      }), i.deep && Rt(s), r.push({
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
  function ln(e, t, n, r) {
    const o = e.dirs, i = t && t.dirs;
    for (let s = 0; s < o.length; s++) {
      const a = o[s];
      i && (a.oldValue = i[s].value);
      let c = a.dir[r];
      c && (kt(), at(c, n, 8, [
        e.el,
        a,
        e,
        t
      ]), xt());
    }
  }
  const Xc = Symbol("_vte"), Zc = (e) => e.__isTeleport, gr = (e) => e && (e.disabled || e.disabled === ""), Gs = (e) => e && (e.defer || e.defer === ""), Ws = (e) => typeof SVGElement < "u" && e instanceof SVGElement, $s = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ni = (e, t) => {
    const n = e && e.to;
    return ye(n) ? t ? t(n) : null : n;
  }, Qc = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, o, i, s, a, c, u) {
      const { mc: l, pc: d, pbc: g, o: { insert: p, querySelector: m, createText: b, createComment: C } } = u, O = gr(t.props);
      let { shapeFlag: A, children: M, dynamicChildren: I } = t;
      if (e == null) {
        const G = t.el = b(""), J = t.anchor = b("");
        p(G, n, r), p(J, n, r);
        const X = (x, $) => {
          A & 16 && (o && o.isCE && (o.ce._teleportTarget = x), l(M, x, $, o, i, s, a, c));
        }, W = () => {
          const x = t.target = Ni(t.props, m), $ = el(x, t, b, p);
          x && (s !== "svg" && Ws(x) ? s = "svg" : s !== "mathml" && $s(x) && (s = "mathml"), O || (X(x, $), Zr(t, false)));
        };
        O && (X(n, J), Zr(t, true)), Gs(t.props) ? (t.el.__isMounted = false, Ie(() => {
          W(), delete t.el.__isMounted;
        }, i)) : W();
      } else {
        if (Gs(t.props) && e.el.__isMounted === false) {
          Ie(() => {
            Qc.process(e, t, n, r, o, i, s, a, c, u);
          }, i);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const G = t.anchor = e.anchor, J = t.target = e.target, X = t.targetAnchor = e.targetAnchor, W = gr(e.props), x = W ? n : J, $ = W ? G : X;
        if (s === "svg" || Ws(J) ? s = "svg" : (s === "mathml" || $s(J)) && (s = "mathml"), I ? (g(e.dynamicChildren, I, x, o, i, s, a), vs(e, t, true)) : c || d(e, t, x, $, o, i, s, a, false), O) W ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Wr(t, n, G, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Z = t.target = Ni(t.props, m);
          Z && Wr(t, Z, null, u, 0);
        } else W && Wr(t, J, X, u, 1);
        Zr(t, O);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, i) {
      const { shapeFlag: s, children: a, anchor: c, targetStart: u, targetAnchor: l, target: d, props: g } = e;
      if (d && (o(u), o(l)), i && o(c), s & 16) {
        const p = i || !gr(g);
        for (let m = 0; m < a.length; m++) {
          const b = a[m];
          r(b, t, n, p, !!b.dynamicChildren);
        }
      }
    },
    move: Wr,
    hydrate: mf
  };
  function Wr(e, t, n, { o: { insert: r }, m: o }, i = 2) {
    i === 0 && r(e.targetAnchor, t, n);
    const { el: s, anchor: a, shapeFlag: c, children: u, props: l } = e, d = i === 2;
    if (d && r(s, t, n), (!d || gr(l)) && c & 16) for (let g = 0; g < u.length; g++) o(u[g], t, n, 2);
    d && r(a, t, n);
  }
  function mf(e, t, n, r, o, i, { o: { nextSibling: s, parentNode: a, querySelector: c, insert: u, createText: l } }, d) {
    function g(b, C, O, A) {
      C.anchor = d(s(b), C, a(b), n, r, o, i), C.targetStart = O, C.targetAnchor = A;
    }
    const p = t.target = Ni(t.props, c), m = gr(t.props);
    if (p) {
      const b = p._lpa || p.firstChild;
      if (t.shapeFlag & 16) if (m) g(e, t, b, b && s(b));
      else {
        t.anchor = s(e);
        let C = b;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor") t.targetStart = C;
            else if (C.data === "teleport anchor") {
              t.targetAnchor = C, p._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          }
          C = s(C);
        }
        t.targetAnchor || el(p, t, l, u), d(b && s(b), t, p, n, r, o, i);
      }
      Zr(t, m);
    } else m && t.shapeFlag & 16 && g(e, t, e, s(e));
    return t.anchor && s(t.anchor);
  }
  _w = Qc;
  function Zr(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, o;
      for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function el(e, t, n, r) {
    const o = t.targetStart = n(""), i = t.targetAnchor = n("");
    return o[Xc] = i, e && (r(o, e), r(i, e)), i;
  }
  const _t = Symbol("_leaveCb"), $r = Symbol("_enterCb");
  function tl() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return xr(() => {
      e.isMounted = true;
    }), ms(() => {
      e.isUnmounting = true;
    }), e;
  }
  const qe = [
    Function,
    Array
  ], nl = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: qe,
    onEnter: qe,
    onAfterEnter: qe,
    onEnterCancelled: qe,
    onBeforeLeave: qe,
    onLeave: qe,
    onAfterLeave: qe,
    onLeaveCancelled: qe,
    onBeforeAppear: qe,
    onAppear: qe,
    onAfterAppear: qe,
    onAppearCancelled: qe
  }, rl = (e) => {
    const t = e.subTree;
    return t.component ? rl(t.component) : t;
  }, yf = {
    name: "BaseTransition",
    props: nl,
    setup(e, { slots: t }) {
      const n = rn(), r = tl();
      return () => {
        const o = t.default && ps(t.default(), true);
        if (!o || !o.length) return;
        const i = ol(o), s = te(e), { mode: a } = s;
        if (r.isLeaving) return ni(i);
        const c = Bs(i);
        if (!c) return ni(i);
        let u = Or(c, s, r, n, (d) => u = d);
        c.type !== _e && tn(c, u);
        let l = n.subTree && Bs(n.subTree);
        if (l && l.type !== _e && !qt(l, c) && rl(n).type !== _e) {
          let d = Or(l, s, r, n);
          if (tn(l, d), a === "out-in" && c.type !== _e) return r.isLeaving = true, d.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, l = void 0;
          }, ni(i);
          a === "in-out" && c.type !== _e ? d.delayLeave = (g, p, m) => {
            const b = il(r, l);
            b[String(l.key)] = l, g[_t] = () => {
              p(), g[_t] = void 0, delete u.delayedLeave, l = void 0;
            }, u.delayedLeave = () => {
              m(), delete u.delayedLeave, l = void 0;
            };
          } : l = void 0;
        } else l && (l = void 0);
        return i;
      };
    }
  };
  function ol(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== _e) {
        t = n;
        break;
      }
    }
    return t;
  }
  const wf = yf;
  function il(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function Or(e, t, n, r, o) {
    const { appear: i, mode: s, persisted: a = false, onBeforeEnter: c, onEnter: u, onAfterEnter: l, onEnterCancelled: d, onBeforeLeave: g, onLeave: p, onAfterLeave: m, onLeaveCancelled: b, onBeforeAppear: C, onAppear: O, onAfterAppear: A, onAppearCancelled: M } = t, I = String(e.key), G = il(n, e), J = (x, $) => {
      x && at(x, r, 9, $);
    }, X = (x, $) => {
      const Z = $[1];
      J(x, $), V(x) ? x.every((j) => j.length <= 1) && Z() : x.length <= 1 && Z();
    }, W = {
      mode: s,
      persisted: a,
      beforeEnter(x) {
        let $ = c;
        if (!n.isMounted) if (i) $ = C || c;
        else return;
        x[_t] && x[_t](true);
        const Z = G[I];
        Z && qt(e, Z) && Z.el[_t] && Z.el[_t](), J($, [
          x
        ]);
      },
      enter(x) {
        let $ = u, Z = l, j = d;
        if (!n.isMounted) if (i) $ = O || u, Z = A || l, j = M || d;
        else return;
        let ie = false;
        const Ae = x[$r] = (et) => {
          ie || (ie = true, et ? J(j, [
            x
          ]) : J(Z, [
            x
          ]), W.delayedLeave && W.delayedLeave(), x[$r] = void 0);
        };
        $ ? X($, [
          x,
          Ae
        ]) : Ae();
      },
      leave(x, $) {
        const Z = String(e.key);
        if (x[$r] && x[$r](true), n.isUnmounting) return $();
        J(g, [
          x
        ]);
        let j = false;
        const ie = x[_t] = (Ae) => {
          j || (j = true, $(), Ae ? J(b, [
            x
          ]) : J(m, [
            x
          ]), x[_t] = void 0, G[Z] === e && delete G[Z]);
        };
        G[Z] = e, p ? X(p, [
          x,
          ie
        ]) : ie();
      },
      clone(x) {
        const $ = Or(x, t, n, r, o);
        return o && o($), $;
      }
    };
    return W;
  }
  function ni(e) {
    if (Ho(e)) return e = Dt(e), e.children = null, e;
  }
  function Bs(e) {
    if (!Ho(e)) return Zc(e.type) && e.children ? ol(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && z(n.default)) return n.default();
    }
  }
  function tn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, tn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function ps(e, t = false, n) {
    let r = [], o = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
      s.type === ke ? (s.patchFlag & 128 && o++, r = r.concat(ps(s.children, t, a))) : (t || s.type !== _e) && r.push(a != null ? Dt(s, {
        key: a
      }) : s);
    }
    if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r;
  }
  bf = function(e, t) {
    return z(e) ? Te({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function sl(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  Pw = function(e) {
    const t = rn(), n = ef(null);
    if (t) {
      const o = t.refs === ne ? t.refs = {} : t.refs;
      Object.defineProperty(o, e, {
        enumerable: true,
        get: () => n.value,
        set: (i) => n.value = i
      });
    }
    return n;
  };
  const uo = /* @__PURE__ */ new WeakMap();
  function mr(e, t, n, r, o = false) {
    if (V(e)) {
      e.forEach((m, b) => mr(m, t && (V(t) ? t[b] : t), n, r, o));
      return;
    }
    if (wn(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && mr(e, t, n, r.component.subTree);
      return;
    }
    const i = r.shapeFlag & 4 ? $o(r.component) : r.el, s = o ? null : i, { i: a, r: c } = e, u = t && t.r, l = a.refs === ne ? a.refs = {} : a.refs, d = a.setupState, g = te(d), p = d === ne ? hc : (m) => re(g, m);
    if (u != null && u !== c) {
      if (Vs(t), ye(u)) l[u] = null, p(u) && (d[u] = null);
      else if (be(u)) {
        u.value = null;
        const m = t;
        m.k && (l[m.k] = null);
      }
    }
    if (z(c)) kr(c, a, 12, [
      s,
      l
    ]);
    else {
      const m = ye(c), b = be(c);
      if (m || b) {
        const C = () => {
          if (e.f) {
            const O = m ? p(c) ? d[c] : l[c] : c.value;
            if (o) V(O) && rs(O, i);
            else if (V(O)) O.includes(i) || O.push(i);
            else if (m) l[c] = [
              i
            ], p(c) && (d[c] = l[c]);
            else {
              const A = [
                i
              ];
              c.value = A, e.k && (l[e.k] = A);
            }
          } else m ? (l[c] = s, p(c) && (d[c] = s)) : b && (c.value = s, e.k && (l[e.k] = s));
        };
        if (s) {
          const O = () => {
            C(), uo.delete(e);
          };
          O.id = -1, uo.set(e, O), Ie(O, n);
        } else Vs(e), C();
      }
    }
  }
  function Vs(e) {
    const t = uo.get(e);
    t && (t.flags |= 8, uo.delete(e));
  }
  Co().requestIdleCallback;
  Co().cancelIdleCallback;
  let wn, Ho, vf;
  wn = (e) => !!e.type.__asyncLoader;
  Ho = (e) => e.type.__isKeepAlive;
  vf = {
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
      const n = rn(), r = n.ctx;
      if (!r.renderer) return () => {
        const A = t.default && t.default();
        return A && A.length === 1 ? A[0] : A;
      };
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
      let s = null;
      const a = n.suspense, { renderer: { p: c, m: u, um: l, o: { createElement: d } } } = r, g = d("div");
      r.activate = (A, M, I, G, J) => {
        const X = A.component;
        u(A, M, I, 0, a), c(X.vnode, A, M, I, X, a, G, A.slotScopeIds, J), Ie(() => {
          X.isDeactivated = false, X.a && dr(X.a);
          const W = A.props && A.props.onVnodeMounted;
          W && Ke(W, X.parent, A);
        }, a);
      }, r.deactivate = (A) => {
        const M = A.component;
        po(M.m), po(M.a), u(A, g, null, 1, a), Ie(() => {
          M.da && dr(M.da);
          const I = A.props && A.props.onVnodeUnmounted;
          I && Ke(I, M.parent, A), M.isDeactivated = true;
        }, a);
      };
      function p(A) {
        ri(A), l(A, n, a, true);
      }
      function m(A) {
        o.forEach((M, I) => {
          const G = Fi(M.type);
          G && !A(G) && b(I);
        });
      }
      function b(A) {
        const M = o.get(A);
        M && (!s || !qt(M, s)) ? p(M) : s && ri(s), o.delete(A), i.delete(A);
      }
      xn(() => [
        e.include,
        e.exclude
      ], ([A, M]) => {
        A && m((I) => sr(A, I)), M && m((I) => !sr(M, I));
      }, {
        flush: "post",
        deep: true
      });
      let C = null;
      const O = () => {
        C != null && (go(n.subTree.type) ? Ie(() => {
          o.set(C, Br(n.subTree));
        }, n.subTree.suspense) : o.set(C, Br(n.subTree)));
      };
      return xr(O), gs(O), ms(() => {
        o.forEach((A) => {
          const { subTree: M, suspense: I } = n, G = Br(M);
          if (A.type === G.type && A.key === G.key) {
            ri(G);
            const J = G.component.da;
            J && Ie(J, I);
            return;
          }
          p(A);
        });
      }), () => {
        if (C = null, !t.default) return s = null;
        const A = t.default(), M = A[0];
        if (A.length > 1) return s = null, A;
        if (!Fn(M) || !(M.shapeFlag & 4) && !(M.shapeFlag & 128)) return s = null, M;
        let I = Br(M);
        if (I.type === _e) return s = null, I;
        const G = I.type, J = Fi(wn(I) ? I.type.__asyncResolved || {} : G), { include: X, exclude: W, max: x } = e;
        if (X && (!J || !sr(X, J)) || W && J && sr(W, J)) return I.shapeFlag &= -257, s = I, M;
        const $ = I.key == null ? G : I.key, Z = o.get($);
        return I.el && (I = Dt(I), M.shapeFlag & 128 && (M.ssContent = I)), C = $, Z ? (I.el = Z.el, I.component = Z.component, I.transition && tn(I, I.transition), I.shapeFlag |= 512, i.delete($), i.add($)) : (i.add($), x && i.size > parseInt(x, 10) && b(i.values().next().value)), I.shapeFlag |= 256, s = I, go(M.type) ? M : I;
      };
    }
  };
  Rw = vf;
  function sr(e, t) {
    return V(e) ? e.some((n) => sr(n, t)) : ye(e) ? e.split(",").includes(t) : vu(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Tf = function(e, t) {
    al(e, "a", t);
  };
  Ef = function(e, t) {
    al(e, "da", t);
  };
  function al(e, t, n = xe) {
    const r = e.__wdc || (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
    if (Uo(t, r, n), n) {
      let o = n.parent;
      for (; o && o.parent; ) Ho(o.parent.vnode) && If(r, t, n, o), o = o.parent;
    }
  }
  function If(e, t, n, r) {
    const o = Uo(t, e, r, true);
    ys(() => {
      rs(r[t], o);
    }, n);
  }
  function ri(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function Br(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function Uo(e, t, n = xe, r = false) {
    if (n) {
      const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
        kt();
        const a = Dr(n), c = at(t, n, e, s);
        return a(), xt(), c;
      });
      return r ? o.unshift(i) : o.push(i), i;
    }
  }
  let Ut, cl, gs, Sf, Of, _f;
  Ut = (e) => (t, n = xe) => {
    (!Pr || e === "sp") && Uo(e, (...r) => t(...r), n);
  };
  Af = Ut("bm");
  xr = Ut("m");
  cl = Ut("bu");
  gs = Ut("u");
  ms = Ut("bum");
  ys = Ut("um");
  Sf = Ut("sp");
  Of = Ut("rtg");
  _f = Ut("rtc");
  function Pf(e, t = xe) {
    Uo("ec", e, t);
  }
  const Rf = "components", ll = Symbol.for("v-ndc");
  Nw = function(e) {
    return ye(e) ? Nf(Rf, e, false) || e : e || ll;
  };
  function Nf(e, t, n = true, r = false) {
    const o = Pe || xe;
    if (o) {
      const i = o.type;
      {
        const a = Fi(i, false);
        if (a && (a === t || a === ze(t) || a === Lo(ze(t)))) return i;
      }
      const s = Ys(o[e] || i[e], t) || Ys(o.appContext[e], t);
      return !s && r ? i : s;
    }
  }
  function Ys(e, t) {
    return e && (e[t] || e[ze(t)] || e[Lo(ze(t))]);
  }
  Lf = function(e, t, n, r) {
    let o;
    const i = n, s = V(e);
    if (s || ye(e)) {
      const a = s && Qt(e);
      let c = false, u = false;
      a && (c = !Qe(e), u = en(e), e = Do(e)), o = new Array(e.length);
      for (let l = 0, d = e.length; l < d; l++) o[l] = t(c ? u ? so(Oe(e[l])) : Oe(e[l]) : e[l], l, void 0, i);
    } else if (typeof e == "number") {
      o = new Array(e);
      for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, i);
    } else if (fe(e)) if (e[Symbol.iterator]) o = Array.from(e, (a, c) => t(a, c, void 0, i));
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let c = 0, u = a.length; c < u; c++) {
        const l = a[c];
        o[c] = t(e[l], l, c, i);
      }
    }
    else o = [];
    return o;
  };
  Lw = function(e, t, n = {}, r, o) {
    if (Pe.ce || Pe.parent && wn(Pe.parent) && Pe.parent.ce) return t !== "default" && (n.name = t), nt(), Di(ke, null, [
      Ye("slot", n, r && r())
    ], 64);
    let i = e[t];
    i && i._c && (i._d = false), nt();
    const s = i && ul(i(n)), a = n.key || s && s.key, c = Di(ke, {
      key: (a && !Ft(a) ? a : `_${t}`) + (!s && r ? "_fb" : "")
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !o && c.scopeId && (c.slotScopeIds = [
      c.scopeId + "-s"
    ]), i && i._c && (i._d = true), c;
  };
  function ul(e) {
    return e.some((t) => Fn(t) ? !(t.type === _e || t.type === ke && !ul(t.children)) : true) ? e : null;
  }
  const Li = (e) => e ? Pl(e) ? $o(e) : Li(e.parent) : null, yr = Te(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => dl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Vc.bind(e.proxy)),
    $watch: (e) => td.bind(e)
  }), oi = (e, t) => e !== ne && !e.__isScriptSetup && re(e, t), Cf = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: r, data: o, props: i, accessCache: s, type: a, appContext: c } = e;
      let u;
      if (t[0] !== "$") {
        const p = s[t];
        if (p !== void 0) switch (p) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
        else {
          if (oi(r, t)) return s[t] = 1, r[t];
          if (o !== ne && re(o, t)) return s[t] = 2, o[t];
          if ((u = e.propsOptions[0]) && re(u, t)) return s[t] = 3, i[t];
          if (n !== ne && re(n, t)) return s[t] = 4, n[t];
          Ci && (s[t] = 0);
        }
      }
      const l = yr[t];
      let d, g;
      if (l) return t === "$attrs" && Ce(e.attrs, "get", ""), l(e);
      if ((d = a.__cssModules) && (d = d[t])) return d;
      if (n !== ne && re(n, t)) return s[t] = 4, n[t];
      if (g = c.config.globalProperties, re(g, t)) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: i } = e;
      return oi(o, t) ? (o[t] = n, true) : r !== ne && re(r, t) ? (r[t] = n, true) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i, type: s } }, a) {
      let c, u;
      return !!(n[a] || e !== ne && a[0] !== "$" && re(e, a) || oi(t, a) || (c = i[0]) && re(c, a) || re(r, a) || re(yr, a) || re(o.config.globalProperties, a) || (u = s.__cssModules) && u[a]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : re(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function fo(e) {
    return V(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  Cw = function(e, t) {
    return !e || !t ? e || t : V(e) && V(t) ? e.concat(t) : Te({}, fo(e), fo(t));
  };
  let Ci = true;
  function kf(e) {
    const t = dl(e), n = e.proxy, r = e.ctx;
    Ci = false, t.beforeCreate && zs(t.beforeCreate, e, "bc");
    const { data: o, computed: i, methods: s, watch: a, provide: c, inject: u, created: l, beforeMount: d, mounted: g, beforeUpdate: p, updated: m, activated: b, deactivated: C, beforeDestroy: O, beforeUnmount: A, destroyed: M, unmounted: I, render: G, renderTracked: J, renderTriggered: X, errorCaptured: W, serverPrefetch: x, expose: $, inheritAttrs: Z, components: j, directives: ie, filters: Ae } = t;
    if (u && xf(u, r, null), s) for (const Q in s) {
      const ae = s[Q];
      z(ae) && (r[Q] = ae.bind(n));
    }
    if (o) {
      const Q = o.call(n, n);
      fe(Q) && (e.data = Mo(Q));
    }
    if (Ci = true, i) for (const Q in i) {
      const ae = i[Q], an = z(ae) ? ae.bind(n, n) : z(ae.get) ? ae.get.bind(n, n) : it, Fr = !z(ae) && z(ae.set) ? ae.set.bind(n) : it, cn = Es({
        get: an,
        set: Fr
      });
      Object.defineProperty(r, Q, {
        enumerable: true,
        configurable: true,
        get: () => cn.value,
        set: (ct) => cn.value = ct
      });
    }
    if (a) for (const Q in a) fl(a[Q], r, n, Q);
    if (c) {
      const Q = z(c) ? c.call(n) : c;
      Reflect.ownKeys(Q).forEach((ae) => {
        jf(ae, Q[ae]);
      });
    }
    l && zs(l, e, "c");
    function pe(Q, ae) {
      V(ae) ? ae.forEach((an) => Q(an.bind(n))) : ae && Q(ae.bind(n));
    }
    if (pe(Af, d), pe(xr, g), pe(cl, p), pe(gs, m), pe(Tf, b), pe(Ef, C), pe(Pf, W), pe(_f, J), pe(Of, X), pe(ms, A), pe(ys, I), pe(Sf, x), V($)) if ($.length) {
      const Q = e.exposed || (e.exposed = {});
      $.forEach((ae) => {
        Object.defineProperty(Q, ae, {
          get: () => n[ae],
          set: (an) => n[ae] = an,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    G && e.render === it && (e.render = G), Z != null && (e.inheritAttrs = Z), j && (e.components = j), ie && (e.directives = ie), x && sl(e);
  }
  function xf(e, t, n = it) {
    V(e) && (e = ki(e));
    for (const r in e) {
      const o = e[r];
      let i;
      fe(o) ? "default" in o ? i = wr(o.from || r, o.default, true) : i = wr(o.from || r) : i = wr(o), be(i) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (s) => i.value = s
      }) : t[r] = i;
    }
  }
  function zs(e, t, n) {
    at(V(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function fl(e, t, n, r) {
    let o = r.includes(".") ? Il(n, r) : () => n[r];
    if (ye(e)) {
      const i = t[e];
      z(i) && xn(o, i);
    } else if (z(e)) xn(o, e.bind(n));
    else if (fe(e)) if (V(e)) e.forEach((i) => fl(i, t, n, r));
    else {
      const i = z(e.handler) ? e.handler.bind(n) : t[e.handler];
      z(i) && xn(o, i, e);
    }
  }
  function dl(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: i, config: { optionMergeStrategies: s } } = e.appContext, a = i.get(t);
    let c;
    return a ? c = a : !o.length && !n && !r ? c = t : (c = {}, o.length && o.forEach((u) => ho(c, u, s, true)), ho(c, t, s)), fe(t) && i.set(t, c), c;
  }
  function ho(e, t, n, r = false) {
    const { mixins: o, extends: i } = t;
    i && ho(e, i, n, true), o && o.forEach((s) => ho(e, s, n, true));
    for (const s in t) if (!(r && s === "expose")) {
      const a = Df[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
    return e;
  }
  const Df = {
    data: qs,
    props: Ks,
    emits: Ks,
    methods: ar,
    computed: ar,
    beforeCreate: De,
    created: De,
    beforeMount: De,
    mounted: De,
    beforeUpdate: De,
    updated: De,
    beforeDestroy: De,
    beforeUnmount: De,
    destroyed: De,
    unmounted: De,
    activated: De,
    deactivated: De,
    errorCaptured: De,
    serverPrefetch: De,
    components: ar,
    directives: ar,
    watch: Ff,
    provide: qs,
    inject: Mf
  };
  function qs(e, t) {
    return t ? e ? function() {
      return Te(z(e) ? e.call(this, this) : e, z(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Mf(e, t) {
    return ar(ki(e), ki(t));
  }
  function ki(e) {
    if (V(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function De(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function ar(e, t) {
    return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Ks(e, t) {
    return e ? V(e) && V(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Te(/* @__PURE__ */ Object.create(null), fo(e), fo(t ?? {})) : t;
  }
  function Ff(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Te(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = De(e[r], t[r]);
    return n;
  }
  function hl() {
    return {
      app: null,
      config: {
        isNativeTag: hc,
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
  let Hf = 0;
  function Uf(e, t) {
    return function(r, o = null) {
      z(r) || (r = Te({}, r)), o != null && !fe(o) && (o = null);
      const i = hl(), s = /* @__PURE__ */ new WeakSet(), a = [];
      let c = false;
      const u = i.app = {
        _uid: Hf++,
        _component: r,
        _props: o,
        _container: null,
        _context: i,
        _instance: null,
        version: Id,
        get config() {
          return i.config;
        },
        set config(l) {
        },
        use(l, ...d) {
          return s.has(l) || (l && z(l.install) ? (s.add(l), l.install(u, ...d)) : z(l) && (s.add(l), l(u, ...d))), u;
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
        mount(l, d, g) {
          if (!c) {
            const p = u._ceVNode || Ye(r, o);
            return p.appContext = i, g === true ? g = "svg" : g === false && (g = void 0), e(p, l, g), c = true, u._container = l, l.__vue_app__ = u, $o(p.component);
          }
        },
        onUnmount(l) {
          a.push(l);
        },
        unmount() {
          c && (at(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(l, d) {
          return i.provides[l] = d, u;
        },
        runWithContext(l) {
          const d = bn;
          bn = u;
          try {
            return l();
          } finally {
            bn = d;
          }
        }
      };
      return u;
    };
  }
  let bn = null;
  jf = function(e, t) {
    if (xe) {
      let n = xe.provides;
      const r = xe.parent && xe.parent.provides;
      r === n && (n = xe.provides = Object.create(r)), n[e] = t;
    }
  };
  wr = function(e, t, n = false) {
    const r = rn();
    if (r || bn) {
      let o = bn ? bn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && z(t) ? t.call(r && r.proxy) : t;
    }
  };
  Gf = function() {
    return !!(rn() || bn);
  };
  const pl = {}, gl = () => Object.create(pl), ml = (e) => Object.getPrototypeOf(e) === pl;
  function Wf(e, t, n, r = false) {
    const o = {}, i = gl();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), yl(e, t, o, i);
    for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
    n ? e.props = r ? o : Qu(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
  }
  function $f(e, t, n, r) {
    const { props: o, attrs: i, vnode: { patchFlag: s } } = e, a = te(o), [c] = e.propsOptions;
    let u = false;
    if ((r || s > 0) && !(s & 16)) {
      if (s & 8) {
        const l = e.vnode.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          let g = l[d];
          if (Go(e.emitsOptions, g)) continue;
          const p = t[g];
          if (c) if (re(i, g)) p !== i[g] && (i[g] = p, u = true);
          else {
            const m = ze(g);
            o[m] = xi(c, a, m, p, e, false);
          }
          else p !== i[g] && (i[g] = p, u = true);
        }
      }
    } else {
      yl(e, t, o, i) && (u = true);
      let l;
      for (const d in a) (!t || !re(t, d) && ((l = Ht(d)) === d || !re(t, l))) && (c ? n && (n[d] !== void 0 || n[l] !== void 0) && (o[d] = xi(c, a, d, void 0, e, true)) : delete o[d]);
      if (i !== a) for (const d in i) (!t || !re(t, d)) && (delete i[d], u = true);
    }
    u && Pt(e.attrs, "set", "");
  }
  function yl(e, t, n, r) {
    const [o, i] = e.propsOptions;
    let s = false, a;
    if (t) for (let c in t) {
      if (fr(c)) continue;
      const u = t[c];
      let l;
      o && re(o, l = ze(c)) ? !i || !i.includes(l) ? n[l] = u : (a || (a = {}))[l] = u : Go(e.emitsOptions, c) || (!(c in r) || u !== r[c]) && (r[c] = u, s = true);
    }
    if (i) {
      const c = te(n), u = a || ne;
      for (let l = 0; l < i.length; l++) {
        const d = i[l];
        n[d] = xi(o, c, d, u[d], e, !re(u, d));
      }
    }
    return s;
  }
  function xi(e, t, n, r, o, i) {
    const s = e[n];
    if (s != null) {
      const a = re(s, "default");
      if (a && r === void 0) {
        const c = s.default;
        if (s.type !== Function && !s.skipFactory && z(c)) {
          const { propsDefaults: u } = o;
          if (n in u) r = u[n];
          else {
            const l = Dr(o);
            r = u[n] = c.call(null, t), l();
          }
        } else r = c;
        o.ce && o.ce._setProp(n, r);
      }
      s[0] && (i && !a ? r = false : s[1] && (r === "" || r === Ht(n)) && (r = true));
    }
    return r;
  }
  const Bf = /* @__PURE__ */ new WeakMap();
  function wl(e, t, n = false) {
    const r = n ? Bf : t.propsCache, o = r.get(e);
    if (o) return o;
    const i = e.props, s = {}, a = [];
    let c = false;
    if (!z(e)) {
      const l = (d) => {
        c = true;
        const [g, p] = wl(d, t, true);
        Te(s, g), p && a.push(...p);
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    if (!i && !c) return fe(e) && r.set(e, Ln), Ln;
    if (V(i)) for (let l = 0; l < i.length; l++) {
      const d = ze(i[l]);
      Js(d) && (s[d] = ne);
    }
    else if (i) for (const l in i) {
      const d = ze(l);
      if (Js(d)) {
        const g = i[l], p = s[d] = V(g) || z(g) ? {
          type: g
        } : Te({}, g), m = p.type;
        let b = false, C = true;
        if (V(m)) for (let O = 0; O < m.length; ++O) {
          const A = m[O], M = z(A) && A.name;
          if (M === "Boolean") {
            b = true;
            break;
          } else M === "String" && (C = false);
        }
        else b = z(m) && m.name === "Boolean";
        p[0] = b, p[1] = C, (b || re(p, "default")) && a.push(d);
      }
    }
    const u = [
      s,
      a
    ];
    return fe(e) && r.set(e, u), u;
  }
  function Js(e) {
    return e[0] !== "$" && !fr(e);
  }
  const ws = (e) => e === "_" || e === "_ctx" || e === "$stable", bs = (e) => V(e) ? e.map(bt) : [
    bt(e)
  ], Vf = (e, t, n) => {
    if (t._n) return t;
    const r = gf((...o) => bs(t(...o)), n);
    return r._c = false, r;
  }, bl = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (ws(o)) continue;
      const i = e[o];
      if (z(i)) t[o] = Vf(o, i, r);
      else if (i != null) {
        const s = bs(i);
        t[o] = () => s;
      }
    }
  }, vl = (e, t) => {
    const n = bs(t);
    e.slots.default = () => n;
  }, Tl = (e, t, n) => {
    for (const r in t) (n || !ws(r)) && (e[r] = t[r]);
  }, Yf = (e, t, n) => {
    const r = e.slots = gl();
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Tl(r, t, n), n && wc(r, "_", o, true)) : bl(t, r);
    } else t && vl(e, t);
  }, zf = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let i = true, s = ne;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? i = false : Tl(o, t, n) : (i = !t.$stable, bl(t, o)), s = t;
    } else t && (vl(e, t), s = {
      default: 1
    });
    if (i) for (const a in o) !ws(a) && s[a] == null && delete o[a];
  }, Ie = cd;
  function qf(e) {
    return Kf(e);
  }
  function Kf(e, t) {
    const n = Co();
    n.__VUE__ = true;
    const { insert: r, remove: o, patchProp: i, createElement: s, createText: a, createComment: c, setText: u, setElementText: l, parentNode: d, nextSibling: g, setScopeId: p = it, insertStaticContent: m } = e, b = (f, h, y, R = null, _ = null, P = null, F = void 0, D = null, k = !!h.dynamicChildren) => {
      if (f === h) return;
      f && !qt(f, h) && (R = Hr(f), ct(f, _, P, true), f = null), h.patchFlag === -2 && (k = false, h.dynamicChildren = null);
      const { type: N, ref: Y, shapeFlag: U } = h;
      switch (N) {
        case Wo:
          C(f, h, y, R);
          break;
        case _e:
          O(f, h, y, R);
          break;
        case br:
          f == null && A(h, y, R, F);
          break;
        case ke:
          j(f, h, y, R, _, P, F, D, k);
          break;
        default:
          U & 1 ? G(f, h, y, R, _, P, F, D, k) : U & 6 ? ie(f, h, y, R, _, P, F, D, k) : (U & 64 || U & 128) && N.process(f, h, y, R, _, P, F, D, k, zn);
      }
      Y != null && _ ? mr(Y, f && f.ref, P, h || f, !h) : Y == null && f && f.ref != null && mr(f.ref, null, P, f, true);
    }, C = (f, h, y, R) => {
      if (f == null) r(h.el = a(h.children), y, R);
      else {
        const _ = h.el = f.el;
        h.children !== f.children && u(_, h.children);
      }
    }, O = (f, h, y, R) => {
      f == null ? r(h.el = c(h.children || ""), y, R) : h.el = f.el;
    }, A = (f, h, y, R) => {
      [f.el, f.anchor] = m(f.children, h, y, R, f.el, f.anchor);
    }, M = ({ el: f, anchor: h }, y, R) => {
      let _;
      for (; f && f !== h; ) _ = g(f), r(f, y, R), f = _;
      r(h, y, R);
    }, I = ({ el: f, anchor: h }) => {
      let y;
      for (; f && f !== h; ) y = g(f), o(f), f = y;
      o(h);
    }, G = (f, h, y, R, _, P, F, D, k) => {
      h.type === "svg" ? F = "svg" : h.type === "math" && (F = "mathml"), f == null ? J(h, y, R, _, P, F, D, k) : x(f, h, _, P, F, D, k);
    }, J = (f, h, y, R, _, P, F, D) => {
      let k, N;
      const { props: Y, shapeFlag: U, transition: B, dirs: q } = f;
      if (k = f.el = s(f.type, P, Y && Y.is, Y), U & 8 ? l(k, f.children) : U & 16 && W(f.children, k, null, R, _, ii(f, P), F, D), q && ln(f, null, R, "created"), X(k, f, f.scopeId, F, R), Y) {
        for (const ce in Y) ce !== "value" && !fr(ce) && i(k, ce, null, Y[ce], P, R);
        "value" in Y && i(k, "value", null, Y.value, P), (N = Y.onVnodeBeforeMount) && Ke(N, R, f);
      }
      q && ln(f, null, R, "beforeMount");
      const ee = Jf(_, B);
      ee && B.beforeEnter(k), r(k, h, y), ((N = Y && Y.onVnodeMounted) || ee || q) && Ie(() => {
        N && Ke(N, R, f), ee && B.enter(k), q && ln(f, null, R, "mounted");
      }, _);
    }, X = (f, h, y, R, _) => {
      if (y && p(f, y), R) for (let P = 0; P < R.length; P++) p(f, R[P]);
      if (_) {
        let P = _.subTree;
        if (h === P || go(P.type) && (P.ssContent === h || P.ssFallback === h)) {
          const F = _.vnode;
          X(f, F, F.scopeId, F.slotScopeIds, _.parent);
        }
      }
    }, W = (f, h, y, R, _, P, F, D, k = 0) => {
      for (let N = k; N < f.length; N++) {
        const Y = f[N] = D ? zt(f[N]) : bt(f[N]);
        b(null, Y, h, y, R, _, P, F, D);
      }
    }, x = (f, h, y, R, _, P, F) => {
      const D = h.el = f.el;
      let { patchFlag: k, dynamicChildren: N, dirs: Y } = h;
      k |= f.patchFlag & 16;
      const U = f.props || ne, B = h.props || ne;
      let q;
      if (y && un(y, false), (q = B.onVnodeBeforeUpdate) && Ke(q, y, h, f), Y && ln(h, f, y, "beforeUpdate"), y && un(y, true), (U.innerHTML && B.innerHTML == null || U.textContent && B.textContent == null) && l(D, ""), N ? $(f.dynamicChildren, N, D, y, R, ii(h, _), P) : F || ae(f, h, D, null, y, R, ii(h, _), P, false), k > 0) {
        if (k & 16) Z(D, U, B, y, _);
        else if (k & 2 && U.class !== B.class && i(D, "class", null, B.class, _), k & 4 && i(D, "style", U.style, B.style, _), k & 8) {
          const ee = h.dynamicProps;
          for (let ce = 0; ce < ee.length; ce++) {
            const oe = ee[ce], Fe = U[oe], He = B[oe];
            (He !== Fe || oe === "value") && i(D, oe, Fe, He, _, y);
          }
        }
        k & 1 && f.children !== h.children && l(D, h.children);
      } else !F && N == null && Z(D, U, B, y, _);
      ((q = B.onVnodeUpdated) || Y) && Ie(() => {
        q && Ke(q, y, h, f), Y && ln(h, f, y, "updated");
      }, R);
    }, $ = (f, h, y, R, _, P, F) => {
      for (let D = 0; D < h.length; D++) {
        const k = f[D], N = h[D], Y = k.el && (k.type === ke || !qt(k, N) || k.shapeFlag & 198) ? d(k.el) : y;
        b(k, N, Y, null, R, _, P, F, true);
      }
    }, Z = (f, h, y, R, _) => {
      if (h !== y) {
        if (h !== ne) for (const P in h) !fr(P) && !(P in y) && i(f, P, h[P], null, _, R);
        for (const P in y) {
          if (fr(P)) continue;
          const F = y[P], D = h[P];
          F !== D && P !== "value" && i(f, P, D, F, _, R);
        }
        "value" in y && i(f, "value", h.value, y.value, _);
      }
    }, j = (f, h, y, R, _, P, F, D, k) => {
      const N = h.el = f ? f.el : a(""), Y = h.anchor = f ? f.anchor : a("");
      let { patchFlag: U, dynamicChildren: B, slotScopeIds: q } = h;
      q && (D = D ? D.concat(q) : q), f == null ? (r(N, y, R), r(Y, y, R), W(h.children || [], y, Y, _, P, F, D, k)) : U > 0 && U & 64 && B && f.dynamicChildren ? ($(f.dynamicChildren, B, y, _, P, F, D), (h.key != null || _ && h === _.subTree) && vs(f, h, true)) : ae(f, h, y, Y, _, P, F, D, k);
    }, ie = (f, h, y, R, _, P, F, D, k) => {
      h.slotScopeIds = D, f == null ? h.shapeFlag & 512 ? _.ctx.activate(h, y, R, F, k) : Ae(h, y, R, _, P, F, k) : et(f, h, k);
    }, Ae = (f, h, y, R, _, P, F) => {
      const D = f.component = md(f, R, _);
      if (Ho(f) && (D.ctx.renderer = zn), yd(D, false, F), D.asyncDep) {
        if (_ && _.registerDep(D, pe, F), !f.el) {
          const k = D.subTree = Ye(_e);
          O(null, k, h, y), f.placeholder = k.el;
        }
      } else pe(D, f, h, y, _, P, F);
    }, et = (f, h, y) => {
      const R = h.component = f.component;
      if (sd(f, h, y)) if (R.asyncDep && !R.asyncResolved) {
        Q(R, h, y);
        return;
      } else R.next = h, R.update();
      else h.el = f.el, R.vnode = h;
    }, pe = (f, h, y, R, _, P, F) => {
      const D = () => {
        if (f.isMounted) {
          let { next: U, bu: B, u: q, parent: ee, vnode: ce } = f;
          {
            const ut = El(f);
            if (ut) {
              U && (U.el = ce.el, Q(f, U, F)), ut.asyncDep.then(() => {
                f.isUnmounted || D();
              });
              return;
            }
          }
          let oe = U, Fe;
          un(f, false), U ? (U.el = ce.el, Q(f, U, F)) : U = ce, B && dr(B), (Fe = U.props && U.props.onVnodeBeforeUpdate) && Ke(Fe, ee, U, ce), un(f, true);
          const He = Xs(f), lt = f.subTree;
          f.subTree = He, b(lt, He, d(lt.el), Hr(lt), f, _, P), U.el = He.el, oe === null && ad(f, He.el), q && Ie(q, _), (Fe = U.props && U.props.onVnodeUpdated) && Ie(() => Ke(Fe, ee, U, ce), _);
        } else {
          let U;
          const { el: B, props: q } = h, { bm: ee, m: ce, parent: oe, root: Fe, type: He } = f, lt = wn(h);
          un(f, false), ee && dr(ee), !lt && (U = q && q.onVnodeBeforeMount) && Ke(U, oe, h), un(f, true);
          {
            Fe.ce && Fe.ce._def.shadowRoot !== false && Fe.ce._injectChildStyle(He);
            const ut = f.subTree = Xs(f);
            b(null, ut, y, R, f, _, P), h.el = ut.el;
          }
          if (ce && Ie(ce, _), !lt && (U = q && q.onVnodeMounted)) {
            const ut = h;
            Ie(() => Ke(U, oe, ut), _);
          }
          (h.shapeFlag & 256 || oe && wn(oe.vnode) && oe.vnode.shapeFlag & 256) && f.a && Ie(f.a, _), f.isMounted = true, h = y = R = null;
        }
      };
      f.scope.on();
      const k = f.effect = new Sc(D);
      f.scope.off();
      const N = f.update = k.run.bind(k), Y = f.job = k.runIfDirty.bind(k);
      Y.i = f, Y.id = f.uid, k.scheduler = () => hs(Y), un(f, true), N();
    }, Q = (f, h, y) => {
      h.component = f;
      const R = f.vnode.props;
      f.vnode = h, f.next = null, $f(f, h.props, R, y), zf(f, h.children, y), kt(), js(f), xt();
    }, ae = (f, h, y, R, _, P, F, D, k = false) => {
      const N = f && f.children, Y = f ? f.shapeFlag : 0, U = h.children, { patchFlag: B, shapeFlag: q } = h;
      if (B > 0) {
        if (B & 128) {
          Fr(N, U, y, R, _, P, F, D, k);
          return;
        } else if (B & 256) {
          an(N, U, y, R, _, P, F, D, k);
          return;
        }
      }
      q & 8 ? (Y & 16 && Yn(N, _, P), U !== N && l(y, U)) : Y & 16 ? q & 16 ? Fr(N, U, y, R, _, P, F, D, k) : Yn(N, _, P, true) : (Y & 8 && l(y, ""), q & 16 && W(U, y, R, _, P, F, D, k));
    }, an = (f, h, y, R, _, P, F, D, k) => {
      f = f || Ln, h = h || Ln;
      const N = f.length, Y = h.length, U = Math.min(N, Y);
      let B;
      for (B = 0; B < U; B++) {
        const q = h[B] = k ? zt(h[B]) : bt(h[B]);
        b(f[B], q, y, null, _, P, F, D, k);
      }
      N > Y ? Yn(f, _, P, true, false, U) : W(h, y, R, _, P, F, D, k, U);
    }, Fr = (f, h, y, R, _, P, F, D, k) => {
      let N = 0;
      const Y = h.length;
      let U = f.length - 1, B = Y - 1;
      for (; N <= U && N <= B; ) {
        const q = f[N], ee = h[N] = k ? zt(h[N]) : bt(h[N]);
        if (qt(q, ee)) b(q, ee, y, null, _, P, F, D, k);
        else break;
        N++;
      }
      for (; N <= U && N <= B; ) {
        const q = f[U], ee = h[B] = k ? zt(h[B]) : bt(h[B]);
        if (qt(q, ee)) b(q, ee, y, null, _, P, F, D, k);
        else break;
        U--, B--;
      }
      if (N > U) {
        if (N <= B) {
          const q = B + 1, ee = q < Y ? h[q].el : R;
          for (; N <= B; ) b(null, h[N] = k ? zt(h[N]) : bt(h[N]), y, ee, _, P, F, D, k), N++;
        }
      } else if (N > B) for (; N <= U; ) ct(f[N], _, P, true), N++;
      else {
        const q = N, ee = N, ce = /* @__PURE__ */ new Map();
        for (N = ee; N <= B; N++) {
          const Be = h[N] = k ? zt(h[N]) : bt(h[N]);
          Be.key != null && ce.set(Be.key, N);
        }
        let oe, Fe = 0;
        const He = B - ee + 1;
        let lt = false, ut = 0;
        const qn = new Array(He);
        for (N = 0; N < He; N++) qn[N] = 0;
        for (N = q; N <= U; N++) {
          const Be = f[N];
          if (Fe >= He) {
            ct(Be, _, P, true);
            continue;
          }
          let ft;
          if (Be.key != null) ft = ce.get(Be.key);
          else for (oe = ee; oe <= B; oe++) if (qn[oe - ee] === 0 && qt(Be, h[oe])) {
            ft = oe;
            break;
          }
          ft === void 0 ? ct(Be, _, P, true) : (qn[ft - ee] = N + 1, ft >= ut ? ut = ft : lt = true, b(Be, h[ft], y, null, _, P, F, D, k), Fe++);
        }
        const xs = lt ? Xf(qn) : Ln;
        for (oe = xs.length - 1, N = He - 1; N >= 0; N--) {
          const Be = ee + N, ft = h[Be], Ds = h[Be + 1], Ms = Be + 1 < Y ? Ds.el || Ds.placeholder : R;
          qn[N] === 0 ? b(null, ft, y, Ms, _, P, F, D, k) : lt && (oe < 0 || N !== xs[oe] ? cn(ft, y, Ms, 2) : oe--);
        }
      }
    }, cn = (f, h, y, R, _ = null) => {
      const { el: P, type: F, transition: D, children: k, shapeFlag: N } = f;
      if (N & 6) {
        cn(f.component.subTree, h, y, R);
        return;
      }
      if (N & 128) {
        f.suspense.move(h, y, R);
        return;
      }
      if (N & 64) {
        F.move(f, h, y, zn);
        return;
      }
      if (F === ke) {
        r(P, h, y);
        for (let U = 0; U < k.length; U++) cn(k[U], h, y, R);
        r(f.anchor, h, y);
        return;
      }
      if (F === br) {
        M(f, h, y);
        return;
      }
      if (R !== 2 && N & 1 && D) if (R === 0) D.beforeEnter(P), r(P, h, y), Ie(() => D.enter(P), _);
      else {
        const { leave: U, delayLeave: B, afterLeave: q } = D, ee = () => {
          f.ctx.isUnmounted ? o(P) : r(P, h, y);
        }, ce = () => {
          P._isLeaving && P[_t](true), U(P, () => {
            ee(), q && q();
          });
        };
        B ? B(P, ee, ce) : ce();
      }
      else r(P, h, y);
    }, ct = (f, h, y, R = false, _ = false) => {
      const { type: P, props: F, ref: D, children: k, dynamicChildren: N, shapeFlag: Y, patchFlag: U, dirs: B, cacheIndex: q } = f;
      if (U === -2 && (_ = false), D != null && (kt(), mr(D, null, y, f, true), xt()), q != null && (h.renderCache[q] = void 0), Y & 256) {
        h.ctx.deactivate(f);
        return;
      }
      const ee = Y & 1 && B, ce = !wn(f);
      let oe;
      if (ce && (oe = F && F.onVnodeBeforeUnmount) && Ke(oe, h, f), Y & 6) wu(f.component, y, R);
      else {
        if (Y & 128) {
          f.suspense.unmount(y, R);
          return;
        }
        ee && ln(f, null, h, "beforeUnmount"), Y & 64 ? f.type.remove(f, h, y, zn, R) : N && !N.hasOnce && (P !== ke || U > 0 && U & 64) ? Yn(N, h, y, false, true) : (P === ke && U & 384 || !_ && Y & 16) && Yn(k, h, y), R && Cs(f);
      }
      (ce && (oe = F && F.onVnodeUnmounted) || ee) && Ie(() => {
        oe && Ke(oe, h, f), ee && ln(f, null, h, "unmounted");
      }, y);
    }, Cs = (f) => {
      const { type: h, el: y, anchor: R, transition: _ } = f;
      if (h === ke) {
        yu(y, R);
        return;
      }
      if (h === br) {
        I(f);
        return;
      }
      const P = () => {
        o(y), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (f.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: F, delayLeave: D } = _, k = () => F(y, P);
        D ? D(f.el, P, k) : k();
      } else P();
    }, yu = (f, h) => {
      let y;
      for (; f !== h; ) y = g(f), o(f), f = y;
      o(h);
    }, wu = (f, h, y) => {
      const { bum: R, scope: _, job: P, subTree: F, um: D, m: k, a: N } = f;
      po(k), po(N), R && dr(R), _.stop(), P && (P.flags |= 8, ct(F, f, h, y)), D && Ie(D, h), Ie(() => {
        f.isUnmounted = true;
      }, h);
    }, Yn = (f, h, y, R = false, _ = false, P = 0) => {
      for (let F = P; F < f.length; F++) ct(f[F], h, y, R, _);
    }, Hr = (f) => {
      if (f.shapeFlag & 6) return Hr(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const h = g(f.anchor || f.el), y = h && h[Xc];
      return y ? g(y) : h;
    };
    let Jo = false;
    const ks = (f, h, y) => {
      f == null ? h._vnode && ct(h._vnode, null, null, true) : b(h._vnode || null, f, h, null, null, null, y), h._vnode = f, Jo || (Jo = true, js(), qc(), Jo = false);
    }, zn = {
      p: b,
      um: ct,
      m: cn,
      r: Cs,
      mt: Ae,
      mc: W,
      pc: ae,
      pbc: $,
      n: Hr,
      o: e
    };
    return {
      render: ks,
      hydrate: void 0,
      createApp: Uf(ks)
    };
  }
  function ii({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function un({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Jf(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function vs(e, t, n = false) {
    const r = e.children, o = t.children;
    if (V(r) && V(o)) for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = zt(o[i]), a.el = s.el), !n && a.patchFlag !== -2 && vs(s, a)), a.type === Wo && a.patchFlag !== -1 && (a.el = s.el), a.type === _e && !a.el && (a.el = s.el);
    }
  }
  function Xf(e) {
    const t = e.slice(), n = [
      0
    ];
    let r, o, i, s, a;
    const c = e.length;
    for (r = 0; r < c; r++) {
      const u = e[r];
      if (u !== 0) {
        if (o = n[n.length - 1], e[o] < u) {
          t[r] = o, n.push(r);
          continue;
        }
        for (i = 0, s = n.length - 1; i < s; ) a = i + s >> 1, e[n[a]] < u ? i = a + 1 : s = a;
        u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
      }
    }
    for (i = n.length, s = n[i - 1]; i-- > 0; ) n[i] = s, s = t[s];
    return n;
  }
  function El(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : El(t);
  }
  function po(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Zf = Symbol.for("v-scx"), Qf = () => wr(Zf);
  kw = function(e, t) {
    return jo(e, null, t);
  };
  function ed(e, t) {
    return jo(e, null, {
      flush: "sync"
    });
  }
  xn = function(e, t, n) {
    return jo(e, t, n);
  };
  function jo(e, t, n = ne) {
    const { immediate: r, deep: o, flush: i, once: s } = n, a = Te({}, n), c = t && r || !t && i !== "post";
    let u;
    if (Pr) {
      if (i === "sync") {
        const p = Qf();
        u = p.__watcherHandles || (p.__watcherHandles = []);
      } else if (!c) {
        const p = () => {
        };
        return p.stop = it, p.resume = it, p.pause = it, p;
      }
    }
    const l = xe;
    a.call = (p, m, b) => at(p, l, m, b);
    let d = false;
    i === "post" ? a.scheduler = (p) => {
      Ie(p, l && l.suspense);
    } : i !== "sync" && (d = true, a.scheduler = (p, m) => {
      m ? p() : hs(p);
    }), a.augmentJob = (p) => {
      t && (p.flags |= 4), d && (p.flags |= 2, l && (p.id = l.uid, p.i = l));
    };
    const g = df(e, t, a);
    return Pr && (u ? u.push(g) : c && g()), g;
  }
  function td(e, t, n) {
    const r = this.proxy, o = ye(e) ? e.includes(".") ? Il(r, e) : () => r[e] : e.bind(r, r);
    let i;
    z(t) ? i = t : (i = t.handler, n = t);
    const s = Dr(this), a = jo(o, i.bind(r), n);
    return s(), a;
  }
  function Il(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  xw = function(e, t, n = ne) {
    const r = rn(), o = ze(t), i = Ht(t), s = Al(e, o), a = of((c, u) => {
      let l, d = ne, g;
      return ed(() => {
        const p = e[o];
        $e(l, p) && (l = p, u());
      }), {
        get() {
          return c(), n.get ? n.get(l) : l;
        },
        set(p) {
          const m = n.set ? n.set(p) : p;
          if (!$e(m, l) && !(d !== ne && $e(p, d))) return;
          const b = r.vnode.props;
          b && (t in b || o in b || i in b) && (`onUpdate:${t}` in b || `onUpdate:${o}` in b || `onUpdate:${i}` in b) || (l = p, u()), r.emit(`update:${t}`, m), $e(p, m) && $e(p, d) && !$e(m, g) && u(), d = p, g = m;
        }
      };
    });
    return a[Symbol.iterator] = () => {
      let c = 0;
      return {
        next() {
          return c < 2 ? {
            value: c++ ? s || ne : a,
            done: false
          } : {
            done: true
          };
        }
      };
    }, a;
  };
  const Al = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${Ht(t)}Modifiers`];
  function nd(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ne;
    let o = n;
    const i = t.startsWith("update:"), s = i && Al(r, t.slice(7));
    s && (s.trim && (o = n.map((l) => ye(l) ? l.trim() : l)), s.number && (o = n.map(Au)));
    let a, c = r[a = Xo(t)] || r[a = Xo(ze(t))];
    !c && i && (c = r[a = Xo(Ht(t))]), c && at(c, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, at(u, e, 6, o);
    }
  }
  const rd = /* @__PURE__ */ new WeakMap();
  function Sl(e, t, n = false) {
    const r = n ? rd : t.emitsCache, o = r.get(e);
    if (o !== void 0) return o;
    const i = e.emits;
    let s = {}, a = false;
    if (!z(e)) {
      const c = (u) => {
        const l = Sl(u, t, true);
        l && (a = true, Te(s, l));
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !i && !a ? (fe(e) && r.set(e, null), null) : (V(i) ? i.forEach((c) => s[c] = null) : Te(s, i), fe(e) && r.set(e, s), s);
  }
  function Go(e, t) {
    return !e || !Ro(t) ? false : (t = t.slice(2).replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, Ht(t)) || re(e, t));
  }
  function Xs(e) {
    const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [i], slots: s, attrs: a, emit: c, render: u, renderCache: l, props: d, data: g, setupState: p, ctx: m, inheritAttrs: b } = e, C = lo(e);
    let O, A;
    try {
      if (n.shapeFlag & 4) {
        const I = o || r, G = I;
        O = bt(u.call(G, I, l, d, p, g, m)), A = a;
      } else {
        const I = t;
        O = bt(I.length > 1 ? I(d, {
          attrs: a,
          slots: s,
          emit: c
        }) : I(d, null)), A = t.props ? a : od(a);
      }
    } catch (I) {
      vr.length = 0, Fo(I, e, 1), O = Ye(_e);
    }
    let M = O;
    if (A && b !== false) {
      const I = Object.keys(A), { shapeFlag: G } = M;
      I.length && G & 7 && (i && I.some(ns) && (A = id(A, i)), M = Dt(M, A, false, true));
    }
    return n.dirs && (M = Dt(M, null, false, true), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && tn(M, n.transition), O = M, lo(C), O;
  }
  const od = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Ro(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, id = (e, t) => {
    const n = {};
    for (const r in e) (!ns(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function sd(e, t, n) {
    const { props: r, children: o, component: i } = e, { props: s, children: a, patchFlag: c } = t, u = i.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && c >= 0) {
      if (c & 1024) return true;
      if (c & 16) return r ? Zs(r, s, u) : !!s;
      if (c & 8) {
        const l = t.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          const g = l[d];
          if (s[g] !== r[g] && !Go(u, g)) return true;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? true : r === s ? false : r ? s ? Zs(r, s, u) : true : !!s;
    return false;
  }
  function Zs(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      if (t[i] !== e[i] && !Go(n, i)) return true;
    }
    return false;
  }
  function ad({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const go = (e) => e.__isSuspense;
  function cd(e, t) {
    t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : zc(e);
  }
  let br, vr;
  ke = Symbol.for("v-fgt");
  Wo = Symbol.for("v-txt");
  _e = Symbol.for("v-cmt");
  br = Symbol.for("v-stc");
  vr = [];
  let Ve = null;
  nt = function(e = false) {
    vr.push(Ve = e ? null : []);
  };
  function ld() {
    vr.pop(), Ve = vr[vr.length - 1] || null;
  }
  let _r = 1;
  function mo(e, t = false) {
    _r += e, e < 0 && Ve && t && (Ve.hasOnce = true);
  }
  function Ol(e) {
    return e.dynamicChildren = _r > 0 ? Ve || Ln : null, ld(), _r > 0 && Ve && Ve.push(e), e;
  }
  Gt = function(e, t, n, r, o, i) {
    return Ol(ge(e, t, n, r, o, i, true));
  };
  Di = function(e, t, n, r, o) {
    return Ol(Ye(e, t, n, r, o, true));
  };
  Fn = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function qt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const _l = ({ key: e }) => e ?? null, Qr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ye(e) || be(e) || z(e) ? {
    i: Pe,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  ge = function(e, t = null, n = null, r = 0, o = null, i = e === ke ? 0 : 1, s = false, a = false) {
    const c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && _l(t),
      ref: t && Qr(t),
      scopeId: Jc,
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
      patchFlag: r,
      dynamicProps: o,
      dynamicChildren: null,
      appContext: null,
      ctx: Pe
    };
    return a ? (Ts(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ye(n) ? 8 : 16), _r > 0 && !s && Ve && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Ve.push(c), c;
  };
  Ye = ud;
  function ud(e, t = null, n = null, r = 0, o = null, i = false) {
    if ((!e || e === ll) && (e = _e), Fn(e)) {
      const a = Dt(e, t, true);
      return n && Ts(a, n), _r > 0 && !i && Ve && (a.shapeFlag & 6 ? Ve[Ve.indexOf(e)] = a : Ve.push(a)), a.patchFlag = -2, a;
    }
    if (Td(e) && (e = e.__vccOpts), t) {
      t = fd(t);
      let { class: a, style: c } = t;
      a && !ye(a) && (t.class = is(a)), fe(c) && (fs(c) && !V(c) && (c = Te({}, c)), t.style = ko(c));
    }
    const s = ye(e) ? 1 : go(e) ? 128 : Zc(e) ? 64 : fe(e) ? 4 : z(e) ? 2 : 0;
    return ge(e, t, n, r, o, s, i, true);
  }
  function fd(e) {
    return e ? fs(e) || ml(e) ? Te({}, e) : e : null;
  }
  Dt = function(e, t, n = false, r = false) {
    const { props: o, ref: i, patchFlag: s, children: a, transition: c } = e, u = t ? hd(o || {}, t) : o, l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && _l(u),
      ref: t && t.ref ? n && i ? V(i) ? i.concat(Qr(t)) : [
        i,
        Qr(t)
      ] : Qr(t) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ke ? s === -1 ? 16 : s | 16 : s,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Dt(e.ssContent),
      ssFallback: e.ssFallback && Dt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return c && r && tn(l, c.clone(l)), l;
  };
  dd = function(e = " ", t = 0) {
    return Ye(Wo, null, e, t);
  };
  Dw = function(e, t) {
    const n = Ye(br, null, e);
    return n.staticCount = t, n;
  };
  si = function(e = "", t = false) {
    return t ? (nt(), Di(_e, null, e)) : Ye(_e, null, e);
  };
  function bt(e) {
    return e == null || typeof e == "boolean" ? Ye(_e) : V(e) ? Ye(ke, null, e.slice()) : Fn(e) ? zt(e) : Ye(Wo, null, String(e));
  }
  function zt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
  }
  function Ts(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (V(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), Ts(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ml(t) ? t._ctx = Pe : o === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else z(t) ? (t = {
      default: t,
      _ctx: Pe
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      dd(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  hd = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const o in r) if (o === "class") t.class !== r.class && (t.class = is([
        t.class,
        r.class
      ]));
      else if (o === "style") t.style = ko([
        t.style,
        r.style
      ]);
      else if (Ro(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(V(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else o !== "" && (t[o] = r[o]);
    }
    return t;
  };
  function Ke(e, t, n, r = null) {
    at(e, t, 7, [
      n,
      r
    ]);
  }
  const pd = hl();
  let gd = 0;
  function md(e, t, n) {
    const r = e.type, o = (t ? t.appContext : e.appContext) || pd, i = {
      uid: gd++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ec(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: wl(r, o),
      emitsOptions: Sl(r, o),
      emit: null,
      emitted: null,
      propsDefaults: ne,
      inheritAttrs: r.inheritAttrs,
      ctx: ne,
      data: ne,
      props: ne,
      attrs: ne,
      slots: ne,
      refs: ne,
      setupState: ne,
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
    }, i.root = t ? t.root : i, i.emit = nd.bind(null, i), e.ce && e.ce(i), i;
  }
  let xe = null;
  rn = () => xe || Pe;
  let yo, Mi;
  {
    const e = Co(), t = (n, r) => {
      let o;
      return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
        o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
      };
    };
    yo = t("__VUE_INSTANCE_SETTERS__", (n) => xe = n), Mi = t("__VUE_SSR_SETTERS__", (n) => Pr = n);
  }
  const Dr = (e) => {
    const t = xe;
    return yo(e), e.scope.on(), () => {
      e.scope.off(), yo(t);
    };
  }, Qs = () => {
    xe && xe.scope.off(), yo(null);
  };
  function Pl(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Pr = false;
  function yd(e, t = false, n = false) {
    t && Mi(t);
    const { props: r, children: o } = e.vnode, i = Pl(e);
    Wf(e, r, i, t), Yf(e, o, n || t);
    const s = i ? wd(e, t) : void 0;
    return t && Mi(false), s;
  }
  function wd(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Cf);
    const { setup: r } = n;
    if (r) {
      kt();
      const o = e.setupContext = r.length > 1 ? vd(e) : null, i = Dr(e), s = kr(r, e, 0, [
        e.props,
        o
      ]), a = gc(s);
      if (xt(), i(), (a || e.sp) && !wn(e) && sl(e), a) {
        if (s.then(Qs, Qs), t) return s.then((c) => {
          ea(e, c);
        }).catch((c) => {
          Fo(c, e, 0);
        });
        e.asyncDep = s;
      } else ea(e, s);
    } else Rl(e);
  }
  function ea(e, t, n) {
    z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = Wc(t)), Rl(e);
  }
  function Rl(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || it);
    {
      const o = Dr(e);
      kt();
      try {
        kf(e);
      } finally {
        xt(), o();
      }
    }
  }
  const bd = {
    get(e, t) {
      return Ce(e, "get", ""), e[t];
    }
  };
  function vd(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, bd),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function $o(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wc(ds(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in yr) return yr[n](e);
      },
      has(t, n) {
        return n in t || n in yr;
      }
    })) : e.proxy;
  }
  function Fi(e, t = true) {
    return z(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Td(e) {
    return z(e) && "__vccOpts" in e;
  }
  Es = (e, t) => uf(e, t, Pr);
  Ed = function(e, t, n) {
    const r = (i, s, a) => {
      mo(-1);
      try {
        return Ye(i, s, a);
      } finally {
        mo(1);
      }
    }, o = arguments.length;
    return o === 2 ? fe(t) && !V(t) ? Fn(t) ? r(e, null, [
      t
    ]) : r(e, t) : r(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Fn(n) && (n = [
      n
    ]), r(e, t, n));
  };
  const Id = "3.5.21";
  let Hi;
  const ta = typeof window < "u" && window.trustedTypes;
  if (ta) try {
    Hi = ta.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Nl, Ad, Sd, Ot, na, Od, Wt, Jn, Hn, Ll, Cl, _d, fn, ra;
  Nl = Hi ? (e) => Hi.createHTML(e) : (e) => e;
  Ad = "http://www.w3.org/2000/svg";
  Sd = "http://www.w3.org/1998/Math/MathML";
  Ot = typeof document < "u" ? document : null;
  na = Ot && Ot.createElement("template");
  Od = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t === "svg" ? Ot.createElementNS(Ad, e) : t === "mathml" ? Ot.createElementNS(Sd, e) : n ? Ot.createElement(e, {
        is: n
      }) : Ot.createElement(e);
      return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
    },
    createText: (e) => Ot.createTextNode(e),
    createComment: (e) => Ot.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ot.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (o && (o === i || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === i || !(o = o.nextSibling)); ) ;
      else {
        na.innerHTML = Nl(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = na.content;
        if (r === "svg" || r === "mathml") {
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
  Wt = "transition";
  Jn = "animation";
  Hn = Symbol("_vtc");
  Ll = {
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
  Cl = Te({}, nl, Ll);
  _d = (e) => (e.displayName = "Transition", e.props = Cl, e);
  Mw = _d((e, { slots: t }) => Ed(wf, kl(e), t));
  fn = (e, t = []) => {
    V(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  ra = (e) => e ? V(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function kl(e) {
    const t = {};
    for (const j in e) j in Ll || (t[j] = e[j]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: o, enterFromClass: i = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: c = i, appearActiveClass: u = s, appearToClass: l = a, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: g = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, m = Pd(o), b = m && m[0], C = m && m[1], { onBeforeEnter: O, onEnter: A, onEnterCancelled: M, onLeave: I, onLeaveCancelled: G, onBeforeAppear: J = O, onAppear: X = A, onAppearCancelled: W = M } = t, x = (j, ie, Ae, et) => {
      j._enterCancelled = et, Bt(j, ie ? l : a), Bt(j, ie ? u : s), Ae && Ae();
    }, $ = (j, ie) => {
      j._isLeaving = false, Bt(j, d), Bt(j, p), Bt(j, g), ie && ie();
    }, Z = (j) => (ie, Ae) => {
      const et = j ? X : A, pe = () => x(ie, j, Ae);
      fn(et, [
        ie,
        pe
      ]), oa(() => {
        Bt(ie, j ? c : i), pt(ie, j ? l : a), ra(et) || ia(ie, r, b, pe);
      });
    };
    return Te(t, {
      onBeforeEnter(j) {
        fn(O, [
          j
        ]), pt(j, i), pt(j, s);
      },
      onBeforeAppear(j) {
        fn(J, [
          j
        ]), pt(j, c), pt(j, u);
      },
      onEnter: Z(false),
      onAppear: Z(true),
      onLeave(j, ie) {
        j._isLeaving = true;
        const Ae = () => $(j, ie);
        pt(j, d), j._enterCancelled ? (pt(j, g), Ui()) : (Ui(), pt(j, g)), oa(() => {
          j._isLeaving && (Bt(j, d), pt(j, p), ra(I) || ia(j, r, C, Ae));
        }), fn(I, [
          j,
          Ae
        ]);
      },
      onEnterCancelled(j) {
        x(j, false, void 0, true), fn(M, [
          j
        ]);
      },
      onAppearCancelled(j) {
        x(j, true, void 0, true), fn(W, [
          j
        ]);
      },
      onLeaveCancelled(j) {
        $(j), fn(G, [
          j
        ]);
      }
    });
  }
  function Pd(e) {
    if (e == null) return null;
    if (fe(e)) return [
      ai(e.enter),
      ai(e.leave)
    ];
    {
      const t = ai(e);
      return [
        t,
        t
      ];
    }
  }
  function ai(e) {
    return Su(e);
  }
  function pt(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Hn] || (e[Hn] = /* @__PURE__ */ new Set())).add(t);
  }
  function Bt(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Hn];
    n && (n.delete(t), n.size || (e[Hn] = void 0));
  }
  function oa(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Rd = 0;
  function ia(e, t, n, r) {
    const o = e._endId = ++Rd, i = () => {
      o === e._endId && r();
    };
    if (n != null) return setTimeout(i, n);
    const { type: s, timeout: a, propCount: c } = xl(e, t);
    if (!s) return r();
    const u = s + "end";
    let l = 0;
    const d = () => {
      e.removeEventListener(u, g), i();
    }, g = (p) => {
      p.target === e && ++l >= c && d();
    };
    setTimeout(() => {
      l < c && d();
    }, a + 1), e.addEventListener(u, g);
  }
  function xl(e, t) {
    const n = window.getComputedStyle(e), r = (m) => (n[m] || "").split(", "), o = r(`${Wt}Delay`), i = r(`${Wt}Duration`), s = sa(o, i), a = r(`${Jn}Delay`), c = r(`${Jn}Duration`), u = sa(a, c);
    let l = null, d = 0, g = 0;
    t === Wt ? s > 0 && (l = Wt, d = s, g = i.length) : t === Jn ? u > 0 && (l = Jn, d = u, g = c.length) : (d = Math.max(s, u), l = d > 0 ? s > u ? Wt : Jn : null, g = l ? l === Wt ? i.length : c.length : 0);
    const p = l === Wt && /\b(?:transform|all)(?:,|$)/.test(r(`${Wt}Property`).toString());
    return {
      type: l,
      timeout: d,
      propCount: g,
      hasTransform: p
    };
  }
  function sa(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => aa(n) + aa(e[r])));
  }
  function aa(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Ui() {
    return document.body.offsetHeight;
  }
  function Nd(e, t, n) {
    const r = e[Hn];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let wo, Dl;
  wo = Symbol("_vod");
  Dl = Symbol("_vsh");
  Fw = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[wo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Xn(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), Xn(e, true), r.enter(e)) : r.leave(e, () => {
        Xn(e, false);
      }) : Xn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Xn(e, t);
    }
  };
  function Xn(e, t) {
    e.style.display = t ? e[wo] : "none", e[Dl] = !t;
  }
  const Ml = Symbol("");
  Hw = function(e) {
    const t = rn();
    if (!t) return;
    const n = t.ut = (o = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((i) => bo(i, o));
    }, r = () => {
      const o = e(t.proxy);
      t.ce ? bo(t.ce, o) : ji(t.subTree, o), n(o);
    };
    cl(() => {
      zc(r);
    }), xr(() => {
      xn(r, it, {
        flush: "post"
      });
      const o = new MutationObserver(r);
      o.observe(t.subTree.el.parentNode, {
        childList: true
      }), ys(() => o.disconnect());
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
    if (e.shapeFlag & 1 && e.el) bo(e.el, t);
    else if (e.type === ke) e.children.forEach((n) => ji(n, t));
    else if (e.type === br) {
      let { el: n, anchor: r } = e;
      for (; n && (bo(n, t), n !== r); ) n = n.nextSibling;
    }
  }
  function bo(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let r = "";
      for (const o in t) {
        const i = Cu(t[o]);
        n.setProperty(`--${o}`, i), r += `--${o}: ${i};`;
      }
      n[Ml] = r;
    }
  }
  const Ld = /(?:^|;)\s*display\s*:/;
  function Cd(e, t, n) {
    const r = e.style, o = ye(n);
    let i = false;
    if (n && !o) {
      if (t) if (ye(t)) for (const s of t.split(";")) {
        const a = s.slice(0, s.indexOf(":")).trim();
        n[a] == null && eo(r, a, "");
      }
      else for (const s in t) n[s] == null && eo(r, s, "");
      for (const s in n) s === "display" && (i = true), eo(r, s, n[s]);
    } else if (o) {
      if (t !== n) {
        const s = r[Ml];
        s && (n += ";" + s), r.cssText = n, i = Ld.test(n);
      }
    } else t && e.removeAttribute("style");
    wo in e && (e[wo] = i ? r.display : "", e[Dl] && (r.display = "none"));
  }
  const ca = /\s*!important$/;
  function eo(e, t, n) {
    if (V(n)) n.forEach((r) => eo(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = kd(e, t);
      ca.test(n) ? e.setProperty(Ht(r), n.replace(ca, ""), "important") : e[r] = n;
    }
  }
  const la = [
    "Webkit",
    "Moz",
    "ms"
  ], ci = {};
  function kd(e, t) {
    const n = ci[t];
    if (n) return n;
    let r = ze(t);
    if (r !== "filter" && r in e) return ci[t] = r;
    r = Lo(r);
    for (let o = 0; o < la.length; o++) {
      const i = la[o] + r;
      if (i in e) return ci[t] = i;
    }
    return t;
  }
  const ua = "http://www.w3.org/1999/xlink";
  function fa(e, t, n, r, o, i = Lu(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ua, t.slice(6, t.length)) : e.setAttributeNS(ua, t, n) : n == null || i && !bc(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ft(n) ? String(n) : n);
  }
  function da(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? Nl(n) : n);
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
      a === "boolean" ? n = bc(n) : n == null && a === "string" ? (n = "", s = true) : a === "number" && (n = 0, s = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    s && e.removeAttribute(o || t);
  }
  function xd(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function Dd(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const ha = Symbol("_vei");
  function Md(e, t, n, r, o = null) {
    const i = e[ha] || (e[ha] = {}), s = i[t];
    if (r && s) s.value = r;
    else {
      const [a, c] = Fd(t);
      if (r) {
        const u = i[t] = jd(r, o);
        xd(e, a, u, c);
      } else s && (Dd(e, a, s, c), i[t] = void 0);
    }
  }
  const pa = /(?:Once|Passive|Capture)$/;
  function Fd(e) {
    let t;
    if (pa.test(e)) {
      t = {};
      let r;
      for (; r = e.match(pa); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Ht(e.slice(2)),
      t
    ];
  }
  let li = 0;
  const Hd = Promise.resolve(), Ud = () => li || (Hd.then(() => li = 0), li = Date.now());
  function jd(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      at(Gd(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = Ud(), n;
  }
  function Gd(e, t) {
    if (V(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (o) => !o._stopped && r && r(o));
    } else return t;
  }
  const ga = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wd = (e, t, n, r, o, i) => {
    const s = o === "svg";
    t === "class" ? Nd(e, r, s) : t === "style" ? Cd(e, n, r) : Ro(t) ? ns(t) || Md(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : $d(e, t, r, s)) ? (da(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fa(e, t, r, s, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ye(r)) ? da(e, ze(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), fa(e, t, r, s));
  };
  function $d(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ga(t) && z(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const o = e.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
    }
    return ga(t) && ye(n) ? false : t in e;
  }
  let Fl, Hl, vo, ma, Bd, Vd;
  Fl = /* @__PURE__ */ new WeakMap();
  Hl = /* @__PURE__ */ new WeakMap();
  vo = Symbol("_moveCb");
  ma = Symbol("_enterCb");
  Bd = (e) => (delete e.props.mode, e);
  Vd = Bd({
    name: "TransitionGroup",
    props: Te({}, Cl, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = rn(), r = tl();
      let o, i;
      return gs(() => {
        if (!o.length) return;
        const s = e.moveClass || `${e.name || "v"}-move`;
        if (!Kd(o[0].el, n.vnode.el, s)) {
          o = [];
          return;
        }
        o.forEach(Yd), o.forEach(zd);
        const a = o.filter(qd);
        Ui(), a.forEach((c) => {
          const u = c.el, l = u.style;
          pt(u, s), l.transform = l.webkitTransform = l.transitionDuration = "";
          const d = u[vo] = (g) => {
            g && g.target !== u || (!g || g.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[vo] = null, Bt(u, s));
          };
          u.addEventListener("transitionend", d);
        }), o = [];
      }), () => {
        const s = te(e), a = kl(s);
        let c = s.tag || ke;
        if (o = [], i) for (let u = 0; u < i.length; u++) {
          const l = i[u];
          l.el && l.el instanceof Element && (o.push(l), tn(l, Or(l, a, r, n)), Fl.set(l, l.el.getBoundingClientRect()));
        }
        i = t.default ? ps(t.default()) : [];
        for (let u = 0; u < i.length; u++) {
          const l = i[u];
          l.key != null && tn(l, Or(l, a, r, n));
        }
        return Ye(c, null, i);
      };
    }
  });
  Uw = Vd;
  function Yd(e) {
    const t = e.el;
    t[vo] && t[vo](), t[ma] && t[ma]();
  }
  function zd(e) {
    Hl.set(e, e.el.getBoundingClientRect());
  }
  function qd(e) {
    const t = Fl.get(e), n = Hl.get(e), r = t.left - n.left, o = t.top - n.top;
    if (r || o) {
      const i = e.el.style;
      return i.transform = i.webkitTransform = `translate(${r}px,${o}px)`, i.transitionDuration = "0s", e;
    }
  }
  function Kd(e, t, n) {
    const r = e.cloneNode(), o = e[Hn];
    o && o.forEach((a) => {
      a.split(/\s+/).forEach((c) => c && r.classList.remove(c));
    }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(r);
    const { hasTransform: s } = xl(r);
    return i.removeChild(r), s;
  }
  let Jd, Xd, Zd, Qd;
  Jd = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Xd = {
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
    exact: (e, t) => Jd.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  jw = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = ((o, ...i) => {
      for (let s = 0; s < t.length; s++) {
        const a = Xd[t[s]];
        if (a && a(o, t)) return;
      }
      return e(o, ...i);
    }));
  };
  Zd = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  Gw = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = ((o) => {
      if (!("key" in o)) return;
      const i = Ht(o.key);
      if (t.some((s) => s === i || Zd[s] === i)) return e(o);
    }));
  };
  Qd = Te({
    patchProp: Wd
  }, Od);
  let ya;
  function eh() {
    return ya || (ya = qf(Qd));
  }
  const Ul = ((...e) => {
    const t = eh().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = nh(r);
      if (!o) return;
      const i = t._component;
      !z(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
      const s = n(o, false, th(o));
      return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
    }, t;
  });
  function th(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function nh(e) {
    return ye(e) ? document.querySelector(e) : e;
  }
  const rh = "" + new URL("../favicon.svg", import.meta.url).href;
  var jl = typeof global == "object" && global && global.Object === Object && global, oh = typeof self == "object" && self && self.Object === Object && self, At = jl || oh || Function("return this")(), nn = At.Symbol, Gl = Object.prototype, ih = Gl.hasOwnProperty, sh = Gl.toString, Zn = nn ? nn.toStringTag : void 0;
  function ah(e) {
    var t = ih.call(e, Zn), n = e[Zn];
    try {
      e[Zn] = void 0;
      var r = true;
    } catch {
    }
    var o = sh.call(e);
    return r && (t ? e[Zn] = n : delete e[Zn]), o;
  }
  var ch = Object.prototype, lh = ch.toString;
  function uh(e) {
    return lh.call(e);
  }
  var fh = "[object Null]", dh = "[object Undefined]", wa = nn ? nn.toStringTag : void 0;
  on = function(e) {
    return e == null ? e === void 0 ? dh : fh : wa && wa in Object(e) ? ah(e) : uh(e);
  };
  It = function(e) {
    return e != null && typeof e == "object";
  };
  var Un = Array.isArray;
  Bo = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var hh = "[object AsyncFunction]", ph = "[object Function]", gh = "[object GeneratorFunction]", mh = "[object Proxy]";
  function Wl(e) {
    if (!Bo(e)) return false;
    var t = on(e);
    return t == ph || t == gh || t == hh || t == mh;
  }
  var ui = At["__core-js_shared__"], ba = (function() {
    var e = /[^.]+$/.exec(ui && ui.keys && ui.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function yh(e) {
    return !!ba && ba in e;
  }
  var wh = Function.prototype, bh = wh.toString;
  function Tn(e) {
    if (e != null) {
      try {
        return bh.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var vh = /[\\^$.*+?()[\]{}|]/g, Th = /^\[object .+?Constructor\]$/, Eh = Function.prototype, Ih = Object.prototype, Ah = Eh.toString, Sh = Ih.hasOwnProperty, Oh = RegExp("^" + Ah.call(Sh).replace(vh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function _h(e) {
    if (!Bo(e) || yh(e)) return false;
    var t = Wl(e) ? Oh : Th;
    return t.test(Tn(e));
  }
  function Ph(e, t) {
    return e == null ? void 0 : e[t];
  }
  function En(e, t) {
    var n = Ph(e, t);
    return _h(n) ? n : void 0;
  }
  var Gi = En(At, "WeakMap"), va = Object.create, Rh = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Bo(t)) return {};
      if (va) return va(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })(), Ta = (function() {
    try {
      var e = En(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function Nh(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var Lh = 9007199254740991, Ch = /^(?:0|[1-9]\d*)$/;
  function kh(e, t) {
    var n = typeof e;
    return t = t ?? Lh, !!t && (n == "number" || n != "symbol" && Ch.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function xh(e, t, n) {
    t == "__proto__" && Ta ? Ta(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  }
  function Is(e, t) {
    return e === t || e !== e && t !== t;
  }
  var Dh = Object.prototype, Mh = Dh.hasOwnProperty;
  function Fh(e, t, n) {
    var r = e[t];
    (!(Mh.call(e, t) && Is(r, n)) || n === void 0 && !(t in e)) && xh(e, t, n);
  }
  var Hh = 9007199254740991;
  function $l(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Hh;
  }
  function Uh(e) {
    return e != null && $l(e.length) && !Wl(e);
  }
  var jh = Object.prototype;
  function Bl(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || jh;
    return e === n;
  }
  function Gh(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var Wh = "[object Arguments]";
  function Ea(e) {
    return It(e) && on(e) == Wh;
  }
  var Vl = Object.prototype, $h = Vl.hasOwnProperty, Bh = Vl.propertyIsEnumerable, Vh = Ea(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Ea : function(e) {
    return It(e) && $h.call(e, "callee") && !Bh.call(e, "callee");
  };
  function Yh() {
    return false;
  }
  var Yl = typeof exports == "object" && exports && !exports.nodeType && exports, Ia = Yl && typeof module == "object" && module && !module.nodeType && module, zh = Ia && Ia.exports === Yl, Aa = zh ? At.Buffer : void 0, qh = Aa ? Aa.isBuffer : void 0, To = qh || Yh, Kh = "[object Arguments]", Jh = "[object Array]", Xh = "[object Boolean]", Zh = "[object Date]", Qh = "[object Error]", ep = "[object Function]", tp = "[object Map]", np = "[object Number]", rp = "[object Object]", op = "[object RegExp]", ip = "[object Set]", sp = "[object String]", ap = "[object WeakMap]", cp = "[object ArrayBuffer]", lp = "[object DataView]", up = "[object Float32Array]", fp = "[object Float64Array]", dp = "[object Int8Array]", hp = "[object Int16Array]", pp = "[object Int32Array]", gp = "[object Uint8Array]", mp = "[object Uint8ClampedArray]", yp = "[object Uint16Array]", wp = "[object Uint32Array]", de = {};
  de[up] = de[fp] = de[dp] = de[hp] = de[pp] = de[gp] = de[mp] = de[yp] = de[wp] = true;
  de[Kh] = de[Jh] = de[cp] = de[Xh] = de[lp] = de[Zh] = de[Qh] = de[ep] = de[tp] = de[np] = de[rp] = de[op] = de[ip] = de[sp] = de[ap] = false;
  function bp(e) {
    return It(e) && $l(e.length) && !!de[on(e)];
  }
  function As(e) {
    return function(t) {
      return e(t);
    };
  }
  var zl = typeof exports == "object" && exports && !exports.nodeType && exports, Tr = zl && typeof module == "object" && module && !module.nodeType && module, vp = Tr && Tr.exports === zl, fi = vp && jl.process, jn = (function() {
    try {
      var e = Tr && Tr.require && Tr.require("util").types;
      return e || fi && fi.binding && fi.binding("util");
    } catch {
    }
  })(), Sa = jn && jn.isTypedArray, ql = Sa ? As(Sa) : bp, Tp = Object.prototype, Ep = Tp.hasOwnProperty;
  function Ip(e, t) {
    var n = Un(e), r = !n && Vh(e), o = !n && !r && To(e), i = !n && !r && !o && ql(e), s = n || r || o || i, a = s ? Gh(e.length, String) : [], c = a.length;
    for (var u in e) Ep.call(e, u) && !(s && (u == "length" || o && (u == "offset" || u == "parent") || i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || kh(u, c))) && a.push(u);
    return a;
  }
  function Kl(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Ap = Kl(Object.keys, Object), Sp = Object.prototype, Op = Sp.hasOwnProperty;
  function _p(e) {
    if (!Bl(e)) return Ap(e);
    var t = [];
    for (var n in Object(e)) Op.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function Pp(e) {
    return Uh(e) ? Ip(e) : _p(e);
  }
  var Rr = En(Object, "create");
  function Rp() {
    this.__data__ = Rr ? Rr(null) : {}, this.size = 0;
  }
  function Np(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Lp = "__lodash_hash_undefined__", Cp = Object.prototype, kp = Cp.hasOwnProperty;
  function xp(e) {
    var t = this.__data__;
    if (Rr) {
      var n = t[e];
      return n === Lp ? void 0 : n;
    }
    return kp.call(t, e) ? t[e] : void 0;
  }
  var Dp = Object.prototype, Mp = Dp.hasOwnProperty;
  function Fp(e) {
    var t = this.__data__;
    return Rr ? t[e] !== void 0 : Mp.call(t, e);
  }
  var Hp = "__lodash_hash_undefined__";
  function Up(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Rr && t === void 0 ? Hp : t, this;
  }
  function vn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  vn.prototype.clear = Rp;
  vn.prototype.delete = Np;
  vn.prototype.get = xp;
  vn.prototype.has = Fp;
  vn.prototype.set = Up;
  function jp() {
    this.__data__ = [], this.size = 0;
  }
  function Vo(e, t) {
    for (var n = e.length; n--; ) if (Is(e[n][0], t)) return n;
    return -1;
  }
  var Gp = Array.prototype, Wp = Gp.splice;
  function $p(e) {
    var t = this.__data__, n = Vo(t, e);
    if (n < 0) return false;
    var r = t.length - 1;
    return n == r ? t.pop() : Wp.call(t, n, 1), --this.size, true;
  }
  function Bp(e) {
    var t = this.__data__, n = Vo(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Vp(e) {
    return Vo(this.__data__, e) > -1;
  }
  function Yp(e, t) {
    var n = this.__data__, r = Vo(n, e);
    return r < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[r][1] = t, this;
  }
  function jt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  jt.prototype.clear = jp;
  jt.prototype.delete = $p;
  jt.prototype.get = Bp;
  jt.prototype.has = Vp;
  jt.prototype.set = Yp;
  var Nr = En(At, "Map");
  function zp() {
    this.size = 0, this.__data__ = {
      hash: new vn(),
      map: new (Nr || jt)(),
      string: new vn()
    };
  }
  function qp(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Yo(e, t) {
    var n = e.__data__;
    return qp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Kp(e) {
    var t = Yo(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Jp(e) {
    return Yo(this, e).get(e);
  }
  function Xp(e) {
    return Yo(this, e).has(e);
  }
  function Zp(e, t) {
    var n = Yo(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function In(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  In.prototype.clear = zp;
  In.prototype.delete = Kp;
  In.prototype.get = Jp;
  In.prototype.has = Xp;
  In.prototype.set = Zp;
  function Qp(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
    return e;
  }
  var Jl = Kl(Object.getPrototypeOf, Object), eg = "[object Object]", tg = Function.prototype, ng = Object.prototype, Xl = tg.toString, rg = ng.hasOwnProperty, og = Xl.call(Object);
  function ig(e) {
    if (!It(e) || on(e) != eg) return false;
    var t = Jl(e);
    if (t === null) return true;
    var n = rg.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Xl.call(n) == og;
  }
  var sg = "[object DOMException]", ag = "[object Error]";
  function cg(e) {
    if (!It(e)) return false;
    var t = on(e);
    return t == ag || t == sg || typeof e.message == "string" && typeof e.name == "string" && !ig(e);
  }
  function lg() {
    this.__data__ = new jt(), this.size = 0;
  }
  function ug(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function fg(e) {
    return this.__data__.get(e);
  }
  function dg(e) {
    return this.__data__.has(e);
  }
  var hg = 200;
  function pg(e, t) {
    var n = this.__data__;
    if (n instanceof jt) {
      var r = n.__data__;
      if (!Nr || r.length < hg - 1) return r.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new In(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  function Ct(e) {
    var t = this.__data__ = new jt(e);
    this.size = t.size;
  }
  Ct.prototype.clear = lg;
  Ct.prototype.delete = ug;
  Ct.prototype.get = fg;
  Ct.prototype.has = dg;
  Ct.prototype.set = pg;
  var Zl = typeof exports == "object" && exports && !exports.nodeType && exports, Oa = Zl && typeof module == "object" && module && !module.nodeType && module, gg = Oa && Oa.exports === Zl, _a = gg ? At.Buffer : void 0;
  _a && _a.allocUnsafe;
  function mg(e, t) {
    return e.slice();
  }
  function yg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (i[o++] = s);
    }
    return i;
  }
  function wg() {
    return [];
  }
  var bg = Object.prototype, vg = bg.propertyIsEnumerable, Pa = Object.getOwnPropertySymbols, Tg = Pa ? function(e) {
    return e == null ? [] : (e = Object(e), yg(Pa(e), function(t) {
      return vg.call(e, t);
    }));
  } : wg;
  function Eg(e, t, n) {
    var r = t(e);
    return Un(e) ? r : Qp(r, n(e));
  }
  function Wi(e) {
    return Eg(e, Pp, Tg);
  }
  var $i = En(At, "DataView"), Bi = En(At, "Promise"), Vi = En(At, "Set"), Ra = "[object Map]", Ig = "[object Object]", Na = "[object Promise]", La = "[object Set]", Ca = "[object WeakMap]", ka = "[object DataView]", Ag = Tn($i), Sg = Tn(Nr), Og = Tn(Bi), _g = Tn(Vi), Pg = Tn(Gi), rt = on;
  ($i && rt(new $i(new ArrayBuffer(1))) != ka || Nr && rt(new Nr()) != Ra || Bi && rt(Bi.resolve()) != Na || Vi && rt(new Vi()) != La || Gi && rt(new Gi()) != Ca) && (rt = function(e) {
    var t = on(e), n = t == Ig ? e.constructor : void 0, r = n ? Tn(n) : "";
    if (r) switch (r) {
      case Ag:
        return ka;
      case Sg:
        return Ra;
      case Og:
        return Na;
      case _g:
        return La;
      case Pg:
        return Ca;
    }
    return t;
  });
  var Rg = Object.prototype, Ng = Rg.hasOwnProperty;
  function Lg(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && Ng.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var Eo = At.Uint8Array;
  function Ss(e) {
    var t = new e.constructor(e.byteLength);
    return new Eo(t).set(new Eo(e)), t;
  }
  function Cg(e, t) {
    var n = Ss(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var kg = /\w*$/;
  function xg(e) {
    var t = new e.constructor(e.source, kg.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var xa = nn ? nn.prototype : void 0, Da = xa ? xa.valueOf : void 0;
  function Dg(e) {
    return Da ? Object(Da.call(e)) : {};
  }
  function Mg(e, t) {
    var n = Ss(e.buffer);
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var Fg = "[object Boolean]", Hg = "[object Date]", Ug = "[object Map]", jg = "[object Number]", Gg = "[object RegExp]", Wg = "[object Set]", $g = "[object String]", Bg = "[object Symbol]", Vg = "[object ArrayBuffer]", Yg = "[object DataView]", zg = "[object Float32Array]", qg = "[object Float64Array]", Kg = "[object Int8Array]", Jg = "[object Int16Array]", Xg = "[object Int32Array]", Zg = "[object Uint8Array]", Qg = "[object Uint8ClampedArray]", em = "[object Uint16Array]", tm = "[object Uint32Array]";
  function nm(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case Vg:
        return Ss(e);
      case Fg:
      case Hg:
        return new r(+e);
      case Yg:
        return Cg(e);
      case zg:
      case qg:
      case Kg:
      case Jg:
      case Xg:
      case Zg:
      case Qg:
      case em:
      case tm:
        return Mg(e);
      case Ug:
        return new r();
      case jg:
      case $g:
        return new r(e);
      case Gg:
        return xg(e);
      case Wg:
        return new r();
      case Bg:
        return Dg(e);
    }
  }
  function rm(e) {
    return typeof e.constructor == "function" && !Bl(e) ? Rh(Jl(e)) : {};
  }
  var om = "[object Map]";
  function im(e) {
    return It(e) && rt(e) == om;
  }
  var Ma = jn && jn.isMap, sm = Ma ? As(Ma) : im, am = "[object Set]";
  function cm(e) {
    return It(e) && rt(e) == am;
  }
  var Fa = jn && jn.isSet, lm = Fa ? As(Fa) : cm, Ql = "[object Arguments]", um = "[object Array]", fm = "[object Boolean]", dm = "[object Date]", hm = "[object Error]", eu = "[object Function]", pm = "[object GeneratorFunction]", gm = "[object Map]", mm = "[object Number]", tu = "[object Object]", ym = "[object RegExp]", wm = "[object Set]", bm = "[object String]", vm = "[object Symbol]", Tm = "[object WeakMap]", Em = "[object ArrayBuffer]", Im = "[object DataView]", Am = "[object Float32Array]", Sm = "[object Float64Array]", Om = "[object Int8Array]", _m = "[object Int16Array]", Pm = "[object Int32Array]", Rm = "[object Uint8Array]", Nm = "[object Uint8ClampedArray]", Lm = "[object Uint16Array]", Cm = "[object Uint32Array]", le = {};
  le[Ql] = le[um] = le[Em] = le[Im] = le[fm] = le[dm] = le[Am] = le[Sm] = le[Om] = le[_m] = le[Pm] = le[gm] = le[mm] = le[tu] = le[ym] = le[wm] = le[bm] = le[vm] = le[Rm] = le[Nm] = le[Lm] = le[Cm] = true;
  le[hm] = le[eu] = le[Tm] = false;
  function to(e, t, n, r, o, i) {
    var s;
    if (s !== void 0) return s;
    if (!Bo(e)) return e;
    var a = Un(e);
    if (a) s = Lg(e);
    else {
      var c = rt(e), u = c == eu || c == pm;
      if (To(e)) return mg(e);
      if (c == tu || c == Ql || u && !o) s = u ? {} : rm(e);
      else {
        if (!le[c]) return o ? e : {};
        s = nm(e, c);
      }
    }
    i || (i = new Ct());
    var l = i.get(e);
    if (l) return l;
    i.set(e, s), lm(e) ? e.forEach(function(p) {
      s.add(to(p, t, n, p, e, i));
    }) : sm(e) && e.forEach(function(p, m) {
      s.set(m, to(p, t, n, m, e, i));
    });
    var d = Wi, g = a ? void 0 : d(e);
    return Nh(g || e, function(p, m) {
      g && (m = p, p = e[m]), Fh(s, m, to(p, t, n, m, e, i));
    }), s;
  }
  var km = 1, xm = 4;
  Io = function(e) {
    return to(e, km | xm);
  };
  var Dm = "__lodash_hash_undefined__";
  function Mm(e) {
    return this.__data__.set(e, Dm), this;
  }
  function Fm(e) {
    return this.__data__.has(e);
  }
  function Ao(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new In(); ++t < n; ) this.add(e[t]);
  }
  Ao.prototype.add = Ao.prototype.push = Mm;
  Ao.prototype.has = Fm;
  function Hm(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return true;
    return false;
  }
  function Um(e, t) {
    return e.has(t);
  }
  var jm = 1, Gm = 2;
  function nu(e, t, n, r, o, i) {
    var s = n & jm, a = e.length, c = t.length;
    if (a != c && !(s && c > a)) return false;
    var u = i.get(e), l = i.get(t);
    if (u && l) return u == t && l == e;
    var d = -1, g = true, p = n & Gm ? new Ao() : void 0;
    for (i.set(e, t), i.set(t, e); ++d < a; ) {
      var m = e[d], b = t[d];
      if (r) var C = s ? r(b, m, d, t, e, i) : r(m, b, d, e, t, i);
      if (C !== void 0) {
        if (C) continue;
        g = false;
        break;
      }
      if (p) {
        if (!Hm(t, function(O, A) {
          if (!Um(p, A) && (m === O || o(m, O, n, r, i))) return p.push(A);
        })) {
          g = false;
          break;
        }
      } else if (!(m === b || o(m, b, n, r, i))) {
        g = false;
        break;
      }
    }
    return i.delete(e), i.delete(t), g;
  }
  function Wm(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(r, o) {
      n[++t] = [
        o,
        r
      ];
    }), n;
  }
  function $m(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(r) {
      n[++t] = r;
    }), n;
  }
  var Bm = 1, Vm = 2, Ym = "[object Boolean]", zm = "[object Date]", qm = "[object Error]", Km = "[object Map]", Jm = "[object Number]", Xm = "[object RegExp]", Zm = "[object Set]", Qm = "[object String]", ey = "[object Symbol]", ty = "[object ArrayBuffer]", ny = "[object DataView]", Ha = nn ? nn.prototype : void 0, di = Ha ? Ha.valueOf : void 0;
  function ry(e, t, n, r, o, i, s) {
    switch (n) {
      case ny:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
        e = e.buffer, t = t.buffer;
      case ty:
        return !(e.byteLength != t.byteLength || !i(new Eo(e), new Eo(t)));
      case Ym:
      case zm:
      case Jm:
        return Is(+e, +t);
      case qm:
        return e.name == t.name && e.message == t.message;
      case Xm:
      case Qm:
        return e == t + "";
      case Km:
        var a = Wm;
      case Zm:
        var c = r & Bm;
        if (a || (a = $m), e.size != t.size && !c) return false;
        var u = s.get(e);
        if (u) return u == t;
        r |= Vm, s.set(e, t);
        var l = nu(a(e), a(t), r, o, i, s);
        return s.delete(e), l;
      case ey:
        if (di) return di.call(e) == di.call(t);
    }
    return false;
  }
  var oy = 1, iy = Object.prototype, sy = iy.hasOwnProperty;
  function ay(e, t, n, r, o, i) {
    var s = n & oy, a = Wi(e), c = a.length, u = Wi(t), l = u.length;
    if (c != l && !s) return false;
    for (var d = c; d--; ) {
      var g = a[d];
      if (!(s ? g in t : sy.call(t, g))) return false;
    }
    var p = i.get(e), m = i.get(t);
    if (p && m) return p == t && m == e;
    var b = true;
    i.set(e, t), i.set(t, e);
    for (var C = s; ++d < c; ) {
      g = a[d];
      var O = e[g], A = t[g];
      if (r) var M = s ? r(A, O, g, t, e, i) : r(O, A, g, e, t, i);
      if (!(M === void 0 ? O === A || o(O, A, n, r, i) : M)) {
        b = false;
        break;
      }
      C || (C = g == "constructor");
    }
    if (b && !C) {
      var I = e.constructor, G = t.constructor;
      I != G && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof G == "function" && G instanceof G) && (b = false);
    }
    return i.delete(e), i.delete(t), b;
  }
  var cy = 1, Ua = "[object Arguments]", ja = "[object Array]", Vr = "[object Object]", ly = Object.prototype, Ga = ly.hasOwnProperty;
  function uy(e, t, n, r, o, i) {
    var s = Un(e), a = Un(t), c = s ? ja : rt(e), u = a ? ja : rt(t);
    c = c == Ua ? Vr : c, u = u == Ua ? Vr : u;
    var l = c == Vr, d = u == Vr, g = c == u;
    if (g && To(e)) {
      if (!To(t)) return false;
      s = true, l = false;
    }
    if (g && !l) return i || (i = new Ct()), s || ql(e) ? nu(e, t, n, r, o, i) : ry(e, t, c, n, r, o, i);
    if (!(n & cy)) {
      var p = l && Ga.call(e, "__wrapped__"), m = d && Ga.call(t, "__wrapped__");
      if (p || m) {
        var b = p ? e.value() : e, C = m ? t.value() : t;
        return i || (i = new Ct()), o(b, C, n, r, i);
      }
    }
    return g ? (i || (i = new Ct()), ay(e, t, n, r, o, i)) : false;
  }
  function ru(e, t, n, r, o) {
    return e === t ? true : e == null || t == null || !It(e) && !It(t) ? e !== e && t !== t : uy(e, t, n, r, ru, o);
  }
  var fy = "[object String]";
  function Yi(e) {
    return typeof e == "string" || !Un(e) && It(e) && on(e) == fy;
  }
  function dy(e, t) {
    return ru(e, t);
  }
  const Ue = (e) => Yi(e) ? e : JSON.stringify(e), dt = {
    unloaded: (...e) => `[loadModules] Module "${Ue(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Ue(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Ue(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Ue(e[0])}" failed to load.
Trackback: 
${Ue(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Ue(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Ue(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Ue(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Ue(e[0])}" is missing the following dependencies: ${Ue(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Ue(e[0])}" is loading its dependencies (${e.slice(1).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Ue(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Ue(e[0])}" dependencies failed to load. 

Trackback: 
${Ue(e[1])}`
  }, hy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function ou(e, t, n = 1e4, r = {}, o = 0, i = 0) {
    var _a2, _b, _c2, _d2;
    const { logger: s = hy, progressReporter: a, printLog: c = true } = r, u = e.find((m) => m.name === t);
    if (!u) throw new Error(`cannot exactly find module "${t}" from the library`);
    const l = e.findIndex((m) => m.name === u.name);
    if (e[l].status === "loaded") return c && s.info(dt.alreadyLoaded(u.name)), Promise.resolve();
    const d = u.dependencies || [], g = e.filter((m) => d.includes(m.name)), p = d.filter((m) => !e.find((b) => b.name === m));
    if (p.length > 0) {
      const m = dt.missingDependencies(u.name, p.join(", "));
      return c && s.error(m), Promise.reject(m);
    }
    if (e[l].status === "error") {
      const m = dt.errorDetermined(u.name);
      return c && s.info(m), Promise.reject(m);
    }
    if (e[l].status === "loading") return c && s.info(dt.alreadyLoading(u.name)), await py(e, u.name, n, s), Promise.resolve();
    try {
      if (g.length > 0) {
        s.info(dt.loadDependencies(u.name, g.map((C) => C.name)));
        const m = o === 0 ? g.length : i;
        let b = 0;
        await Promise.all(g.map(async (C) => {
          var _a3;
          await ou(e, C.name, n, {
            logger: s,
            progressReporter: a,
            printLog: c
          }, o + 1, i), b++, (_a3 = a == null ? void 0 : a.onOverallProgress) == null ? void 0 : _a3.call(a, b, m);
        })), c && s.info(dt.dependenciesReady(u.name));
      }
      e[l].status = "loading", (_a2 = a == null ? void 0 : a.onModuleStart) == null ? void 0 : _a2.call(a, u.displayName);
      try {
        return c && s.info(dt.loading(u.name)), await u.moduleInit(n), e[l].status = "loaded", (_b = a == null ? void 0 : a.onModuleComplete) == null ? void 0 : _b.call(a, u.displayName), c && s.info(dt.loaded(u.name)), Promise.resolve();
      } catch (m) {
        e[l].status = "error";
        const b = dt.error(u.name, Yi(m) ? m : cg(m) ? m.message : JSON.stringify(m));
        return s.error(b), (_c2 = a == null ? void 0 : a.onModuleError) == null ? void 0 : _c2.call(a, u.displayName, Yi(m) ? new Error(m) : m), Promise.reject(b);
      }
    } catch (m) {
      e[l].status = "error";
      const b = dt.error(u.name, m);
      return s.error(b), (_d2 = a == null ? void 0 : a.onModuleError) == null ? void 0 : _d2.call(a, u.displayName, m), Promise.reject(b);
    }
  }
  async function py(e, t, n = 1e4, r) {
    const o = Date.now();
    return new Promise((i, s) => {
      const a = setInterval(() => {
        const c = e.find((u) => u.name === t);
        if (c && c.status === "loaded") clearInterval(a), i();
        else if (Date.now() - o > n) {
          clearInterval(a);
          const u = new Error(`Load module ${t} timeout`);
          r == null ? void 0 : r.error(u.message), s(u);
        }
      }, 100);
    });
  }
  let gy, my, Wa, yy, wy, by, iu;
  gy = "modulepreload";
  my = function(e, t) {
    return new URL(e, t).href;
  };
  Wa = {};
  hi = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      let s = function(l) {
        return Promise.all(l.map((d) => Promise.resolve(d).then((g) => ({
          status: "fulfilled",
          value: g
        }), (g) => ({
          status: "rejected",
          reason: g
        }))));
      };
      const a = document.getElementsByTagName("link"), c = document.querySelector("meta[property=csp-nonce]"), u = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
      o = s(n.map((l) => {
        if (l = my(l, r), l in Wa) return;
        Wa[l] = true;
        const d = l.endsWith(".css"), g = d ? '[rel="stylesheet"]' : "";
        if (!!r) for (let b = a.length - 1; b >= 0; b--) {
          const C = a[b];
          if (C.href === l && (!d || C.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${l}"]${g}`)) return;
        const m = document.createElement("link");
        if (m.rel = d ? "stylesheet" : gy, d || (m.as = "script"), m.crossOrigin = "", m.href = l, u && m.setAttribute("nonce", u), document.head.appendChild(m), d) return new Promise((b, C) => {
          m.addEventListener("load", b), m.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${l}`)));
        });
      }));
    }
    function i(s) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = s, window.dispatchEvent(a), !a.defaultPrevented) throw s;
    }
    return o.then((s) => {
      for (const a of s || []) a.status === "rejected" && i(a.reason);
      return t().catch(i);
    });
  };
  yy = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  wy = [
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
  by = {
    withStackTrace: false
  };
  iu = (e, t, n = by) => {
    const r = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, o = n.withStackTrace ? new Error().stack : void 0;
    return {
      data: r,
      message: e,
      stack: o
    };
  };
  function dn(e, t, n, r) {
    function o(i) {
      return i instanceof n ? i : new n(function(s) {
        s(i);
      });
    }
    return new (n || (n = Promise))(function(i, s) {
      function a(l) {
        try {
          u(r.next(l));
        } catch (d) {
          s(d);
        }
      }
      function c(l) {
        try {
          u(r.throw(l));
        } catch (d) {
          s(d);
        }
      }
      function u(l) {
        l.done ? i(l.value) : o(l.value).then(a, c);
      }
      u((r = r.apply(e, [])).next());
    });
  }
  function $a(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
      next: function() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function vt(e) {
    return this instanceof vt ? (this.v = e, this) : new vt(e);
  }
  function Ba(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", s), o[Symbol.asyncIterator] = function() {
      return this;
    }, o;
    function s(p) {
      return function(m) {
        return Promise.resolve(m).then(p, d);
      };
    }
    function a(p, m) {
      r[p] && (o[p] = function(b) {
        return new Promise(function(C, O) {
          i.push([
            p,
            b,
            C,
            O
          ]) > 1 || c(p, b);
        });
      }, m && (o[p] = m(o[p])));
    }
    function c(p, m) {
      try {
        u(r[p](m));
      } catch (b) {
        g(i[0][3], b);
      }
    }
    function u(p) {
      p.value instanceof vt ? Promise.resolve(p.value.v).then(l, d) : g(i[0][2], p);
    }
    function l(p) {
      c("next", p);
    }
    function d(p) {
      c("throw", p);
    }
    function g(p, m) {
      p(m), i.shift(), i.length && c(i[0][0], i[0][1]);
    }
  }
  function vy(e) {
    var t, n;
    return t = {}, r("next"), r("throw", function(o) {
      throw o;
    }), r("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function r(o, i) {
      t[o] = e[o] ? function(s) {
        return (n = !n) ? {
          value: vt(e[o](s)),
          done: false
        } : i ? i(s) : s;
      } : i;
    }
  }
  function Ty(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof $a == "function" ? $a(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
      return this;
    }, n);
    function r(i) {
      n[i] = e[i] && function(s) {
        return new Promise(function(a, c) {
          s = e[i](s), o(a, c, s.done, s.value);
        });
      };
    }
    function o(i, s, a, c) {
      Promise.resolve(c).then(function(u) {
        i({
          value: u,
          done: a
        });
      }, s);
    }
  }
  class Re {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const n = t.then((r) => new gt(r));
      return new Re(n);
    }
    static fromPromise(t, n) {
      const r = t.then((o) => new gt(o)).catch((o) => new tt(n(o)));
      return new Re(r);
    }
    static fromThrowable(t, n) {
      return (...r) => new Re(dn(this, void 0, void 0, function* () {
        try {
          return new gt(yield t(...r));
        } catch (o) {
          return new tt(n ? n(o) : o);
        }
      }));
    }
    static combine(t) {
      return Ey(t);
    }
    static combineWithAllErrors(t) {
      return Iy(t);
    }
    map(t) {
      return new Re(this._promise.then((n) => dn(this, void 0, void 0, function* () {
        return n.isErr() ? new tt(n.error) : new gt(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new Re(this._promise.then((n) => dn(this, void 0, void 0, function* () {
        if (n.isErr()) return new tt(n.error);
        const r = yield t(n.value);
        return r.isErr() ? new tt(r.error) : new gt(n.value);
      })));
    }
    andTee(t) {
      return new Re(this._promise.then((n) => dn(this, void 0, void 0, function* () {
        if (n.isErr()) return new tt(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new gt(n.value);
      })));
    }
    orTee(t) {
      return new Re(this._promise.then((n) => dn(this, void 0, void 0, function* () {
        if (n.isOk()) return new gt(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new tt(n.error);
      })));
    }
    mapErr(t) {
      return new Re(this._promise.then((n) => dn(this, void 0, void 0, function* () {
        return n.isOk() ? new gt(n.value) : new tt(yield t(n.error));
      })));
    }
    andThen(t) {
      return new Re(this._promise.then((n) => {
        if (n.isErr()) return new tt(n.error);
        const r = t(n.value);
        return r instanceof Re ? r._promise : r;
      }));
    }
    orElse(t) {
      return new Re(this._promise.then((n) => dn(this, void 0, void 0, function* () {
        return n.isErr() ? t(n.error) : new gt(n.value);
      })));
    }
    match(t, n) {
      return this._promise.then((r) => r.match(t, n));
    }
    unwrapOr(t) {
      return this._promise.then((n) => n.unwrapOr(t));
    }
    safeUnwrap() {
      return Ba(this, arguments, function* () {
        return yield vt(yield vt(yield* vy(Ty(yield vt(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return Ba(this, arguments, function* () {
        const n = yield vt(this._promise);
        return n.isErr() && (yield yield vt(no(n.error))), yield vt(n.value);
      });
    }
  }
  function no(e) {
    return new Re(Promise.resolve(new tt(e)));
  }
  const su = (e) => {
    let t = H([]);
    for (const n of e) if (n.isErr()) {
      t = L(n.error);
      break;
    } else t.map((r) => r.push(n.value));
    return t;
  }, Ey = (e) => Re.fromSafePromise(Promise.all(e)).andThen(su), au = (e) => {
    let t = H([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = L([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, Iy = (e) => Re.fromSafePromise(Promise.all(e)).andThen(au);
  var zi;
  (function(e) {
    function t(o, i) {
      return (...s) => {
        try {
          const a = o(...s);
          return H(a);
        } catch (a) {
          return L(i ? i(a) : a);
        }
      };
    }
    e.fromThrowable = t;
    function n(o) {
      return su(o);
    }
    e.combine = n;
    function r(o) {
      return au(o);
    }
    e.combineWithAllErrors = r;
  })(zi || (zi = {}));
  H = function(e) {
    return new gt(e);
  };
  L = function(e) {
    return new tt(e);
  };
  class gt {
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
      return H(t(this.value));
    }
    mapErr(t) {
      return H(this.value);
    }
    andThen(t) {
      return t(this.value);
    }
    andThrough(t) {
      return t(this.value).map((n) => this.value);
    }
    andTee(t) {
      try {
        t(this.value);
      } catch {
      }
      return H(this.value);
    }
    orTee(t) {
      return H(this.value);
    }
    orElse(t) {
      return H(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return Re.fromSafePromise(t(this.value));
    }
    unwrapOr(t) {
      return this.value;
    }
    match(t, n) {
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
      throw iu("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class tt {
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
      return L(this.error);
    }
    mapErr(t) {
      return L(t(this.error));
    }
    andThrough(t) {
      return L(this.error);
    }
    andTee(t) {
      return L(this.error);
    }
    orTee(t) {
      try {
        t(this.error);
      } catch {
      }
      return L(this.error);
    }
    andThen(t) {
      return L(this.error);
    }
    orElse(t) {
      return t(this.error);
    }
    asyncAndThen(t) {
      return no(this.error);
    }
    asyncAndThrough(t) {
      return no(this.error);
    }
    asyncMap(t) {
      return no(this.error);
    }
    unwrapOr(t) {
      return t;
    }
    match(t, n) {
      return n(this.error);
    }
    safeUnwrap() {
      const t = this.error;
      return (function* () {
        throw yield L(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw iu("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  zi.fromThrowable;
  Mr = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(Mr || {});
  Bn = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class Tt extends Bn {
    constructor(t, n = "GENERIC_ERROR", r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function Ay(e) {
    return e instanceof Bn;
  }
  function pi(e, t = "Unknown error occurred") {
    return Ay(e) ? e : e instanceof Error ? new Tt(t, "UNKNOWN_ERROR", e) : new Tt(t, "UNKNOWN_ERROR");
  }
  function ht(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  }
  class Os extends Bn {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", Mr.GEOLOCATION);
      this.code = n;
    }
  }
  class Sn extends Os {
    constructor(t = "User denied geolocation permission", n) {
      super(t, "PERMISSION_DENIED", n);
    }
  }
  class Sy extends Os {
    constructor(t = "Geolocation is not supported by this browser", n) {
      super(t, "UNSUPPORTED_BROWSER", n);
    }
  }
  class we extends Os {
    constructor(t = "Geolocation update service error", n, r) {
      super(t, "UPDATE_SERVICE_ERROR", r), this.serviceName = n;
    }
  }
  var Oy = "2.0.5", qi = 500, Va = "user-agent", Gn = "", Ya = "?", So = "function", Jt = "undefined", Wn = "object", Ki = "string", je = "browser", Nt = "cpu", Et = "device", ot = "engine", Xe = "os", Dn = "result", E = "name", w = "type", T = "vendor", S = "version", Ge = "architecture", Lr = "major", v = "model", cr = "console", K = "mobile", se = "tablet", ve = "smarttv", mt = "wearable", Yr = "xr", lr = "embedded", On = "inapp", _s = "brands", gn = "formFactors", Ps = "fullVersionList", Mn = "platform", Rs = "platformVersion", zo = "bitness", sn = "sec-ch-ua", _y = sn + "-full-version-list", Py = sn + "-arch", Ry = sn + "-" + zo, Ny = sn + "-form-factors", Ly = sn + "-" + K, Cy = sn + "-" + v, cu = sn + "-" + Mn, ky = cu + "-version", lu = [
    _s,
    Ps,
    K,
    v,
    Mn,
    Rs,
    Ge,
    gn,
    zo
  ], zr = "Amazon", _n = "Apple", za = "ASUS", qa = "BlackBerry", hn = "Google", Ka = "Huawei", gi = "Lenovo", Ja = "Honor", qr = "LG", mi = "Microsoft", yi = "Motorola", wi = "Nvidia", Xa = "OnePlus", bi = "OPPO", Qn = "Samsung", Za = "Sharp", er = "Sony", vi = "Xiaomi", Ti = "Zebra", Qa = "Chrome", ec = "Chromium", $t = "Chromecast", ro = "Edge", tr = "Firefox", nr = "Opera", Ei = "Facebook", tc = "Sogou", Pn = "Mobile ", rr = " Browser", Ji = "Windows", xy = typeof window !== Jt, We = xy && window.navigator ? window.navigator : void 0, Kt = We && We.userAgentData ? We.userAgentData : void 0, Dy = function(e, t) {
    var n = {}, r = t;
    if (!Oo(t)) {
      r = {};
      for (var o in t) for (var i in t[o]) r[i] = t[o][i].concat(r[i] ? r[i] : []);
    }
    for (var s in e) n[s] = r[s] && r[s].length % 2 === 0 ? r[s].concat(e[s]) : e[s];
    return n;
  }, qo = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, Xi = function(e, t) {
    if (typeof e === Wn && e.length > 0) {
      for (var n in e) if (Xt(t) == Xt(e[n])) return true;
      return false;
    }
    return Vn(e) ? Xt(t) == Xt(e) : false;
  }, Oo = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? Oo(e[n]) : false);
  }, Vn = function(e) {
    return typeof e === Ki;
  }, Ii = function(e) {
    if (e) {
      for (var t = [], n = $n(/\\?\"/g, e).split(","), r = 0; r < n.length; r++) if (n[r].indexOf(";") > -1) {
        var o = _o(n[r]).split(";v=");
        t[r] = {
          brand: o[0],
          version: o[1]
        };
      } else t[r] = _o(n[r]);
      return t;
    }
  }, Xt = function(e) {
    return Vn(e) ? e.toLowerCase() : e;
  }, Ai = function(e) {
    return Vn(e) ? $n(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, Lt = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var n = e[t];
      typeof n == Wn && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, $n = function(e, t) {
    return Vn(t) ? t.replace(e, Gn) : t;
  }, or = function(e) {
    return $n(/\\?\"/g, e);
  }, _o = function(e, t) {
    if (Vn(e)) return e = $n(/^\s\s*/, e), typeof t === Jt ? e : e.substring(0, qi);
  }, Si = function(e, t) {
    if (!(!e || !t)) for (var n = 0, r, o, i, s, a, c; n < t.length && !a; ) {
      var u = t[n], l = t[n + 1];
      for (r = o = 0; r < u.length && !a && u[r]; ) if (a = u[r++].exec(e), a) for (i = 0; i < l.length; i++) c = a[++o], s = l[i], typeof s === Wn && s.length > 0 ? s.length === 2 ? typeof s[1] == So ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : s.length >= 3 && (typeof s[1] === So && !(s[1].exec && s[1].test) ? s.length > 3 ? this[s[0]] = c ? s[1].apply(this, s.slice(2)) : void 0 : this[s[0]] = c ? s[1].call(this, c, s[2]) : void 0 : s.length == 3 ? this[s[0]] = c ? c.replace(s[1], s[2]) : void 0 : s.length == 4 ? this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : void 0 : s.length > 4 && (this[s[0]] = c ? s[3].apply(this, [
        c.replace(s[1], s[2])
      ].concat(s.slice(4))) : void 0)) : this[s] = c || void 0;
      n += 2;
    }
  }, wt = function(e, t) {
    for (var n in t) if (typeof t[n] === Wn && t[n].length > 0) {
      for (var r = 0; r < t[n].length; r++) if (Xi(t[n][r], e)) return n === Ya ? void 0 : n;
    } else if (Xi(t[n], e)) return n === Ya ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, nc = {
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
  }, rc = {
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
  }, My = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, oc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          Pn + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          ro + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        E,
        S
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          nr + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          nr + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          nr
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        S,
        [
          E,
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
        E,
        S
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        S,
        [
          E,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "Smart " + gi + rr
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          E,
          /(.+)/,
          "$1 Secure" + rr
        ],
        S
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          tr + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          nr + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          nr + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "MIUI" + rr
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        S,
        [
          E,
          Pn + tr
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        S,
        [
          E,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          E,
          /(.+)/,
          "$1Browser"
        ],
        S
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          E,
          /(.+)/,
          "$1" + rr
        ],
        S
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          Qn + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        S,
        [
          E,
          tc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          E,
          tc + " Mobile"
        ],
        S
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        E,
        S
      ],
      [
        /(lbbrowser|rekonq)/i
      ],
      [
        E
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        S,
        E
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          E,
          Ei
        ],
        S,
        [
          w,
          On
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
        E,
        S,
        [
          w,
          On
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        S,
        [
          E,
          "GSA"
        ],
        [
          w,
          On
        ]
      ],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          "TikTok"
        ],
        [
          w,
          On
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        E,
        [
          w,
          On
        ]
      ],
      [
        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
      ],
      [
        [
          E,
          /(.+)/,
          "Zalo"
        ],
        S,
        [
          w,
          On
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        E,
        S
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        S,
        [
          E,
          Qa + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        S,
        [
          E,
          ro + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          E,
          Qa + " WebView"
        ],
        S
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        S,
        [
          E,
          "Android" + rr
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        S,
        [
          E,
          Pn + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        E,
        S
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        S,
        [
          E,
          Pn + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          E,
          Pn + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        S,
        E
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        E,
        [
          S,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        E,
        S
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          E,
          Pn + tr
        ],
        S
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          E,
          "Netscape"
        ],
        S
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        E,
        S
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        S,
        [
          E,
          tr + " Reality"
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
        E,
        [
          S,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        E,
        [
          S,
          /[^\d\.]+./,
          Gn
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          Ge,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Ge,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Ge,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Ge,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Ge,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          Ge,
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
          Ge,
          /ower/,
          Gn,
          Xt
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          Ge,
          "alpha"
        ]
      ]
    ],
    device: [
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [
        v,
        [
          T,
          Qn
        ],
        [
          w,
          se
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        v,
        [
          T,
          Qn
        ],
        [
          w,
          K
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      ],
      [
        v,
        [
          T,
          _n
        ],
        [
          w,
          K
        ]
      ],
      [
        /\((ipad);[-\w\),; ]+apple/i,
        /applecoremedia\/[\w\.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
      ],
      [
        v,
        [
          T,
          _n
        ],
        [
          w,
          se
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        v,
        [
          T,
          _n
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        v,
        [
          T,
          Za
        ],
        [
          w,
          K
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        v,
        [
          T,
          Ja
        ],
        [
          w,
          se
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        v,
        [
          T,
          Ja
        ],
        [
          w,
          K
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        v,
        [
          T,
          Ka
        ],
        [
          w,
          se
        ]
      ],
      [
        /(?:huawei)([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
      ],
      [
        v,
        [
          T,
          Ka
        ],
        [
          w,
          K
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          v,
          /_/g,
          " "
        ],
        [
          T,
          vi
        ],
        [
          w,
          se
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
          v,
          /_/g,
          " "
        ],
        [
          T,
          vi
        ],
        [
          w,
          K
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        v,
        [
          T,
          Xa
        ],
        [
          w,
          K
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        v,
        [
          T,
          bi
        ],
        [
          w,
          K
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        v,
        [
          T,
          wt,
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
          w,
          se
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        v,
        [
          T,
          "BLU"
        ],
        [
          w,
          K
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        v,
        [
          T,
          "Vivo"
        ],
        [
          w,
          K
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        v,
        [
          T,
          "Realme"
        ],
        [
          w,
          K
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        v,
        [
          T,
          gi
        ],
        [
          w,
          se
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        v,
        [
          T,
          gi
        ],
        [
          w,
          K
        ]
      ],
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        v,
        [
          T,
          yi
        ],
        [
          w,
          K
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        v,
        [
          T,
          yi
        ],
        [
          w,
          se
        ]
      ],
      [
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        v,
        [
          T,
          qr
        ],
        [
          w,
          se
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        v,
        [
          T,
          qr
        ],
        [
          w,
          K
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        T,
        v,
        [
          w,
          se
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*))/i
      ],
      [
        [
          v,
          /_/g,
          " "
        ],
        [
          w,
          K
        ],
        [
          T,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        v,
        [
          T,
          hn
        ],
        [
          w,
          se
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        v,
        [
          T,
          hn
        ],
        [
          w,
          K
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        T,
        v
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        v,
        [
          T,
          er
        ],
        [
          w,
          K
        ]
      ],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [
        [
          v,
          "Xperia Tablet"
        ],
        [
          T,
          er
        ],
        [
          w,
          se
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        v,
        [
          T,
          zr
        ],
        [
          w,
          se
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          v,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          T,
          zr
        ],
        [
          w,
          K
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        v,
        T,
        [
          w,
          se
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /\(bb10; (\w+)/i
      ],
      [
        v,
        [
          T,
          qa
        ],
        [
          w,
          K
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        v,
        [
          T,
          za
        ],
        [
          w,
          se
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        v,
        [
          T,
          za
        ],
        [
          w,
          K
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        v,
        [
          T,
          "HTC"
        ],
        [
          w,
          se
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        T,
        [
          v,
          /_/g,
          " "
        ],
        [
          w,
          K
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        v,
        [
          T,
          "TCL"
        ],
        [
          w,
          se
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        v,
        [
          T,
          "TCL"
        ],
        [
          w,
          K
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          T,
          Xt
        ],
        v,
        [
          w,
          wt,
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
        v,
        [
          T,
          "Acer"
        ],
        [
          w,
          se
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        v,
        [
          T,
          "Meizu"
        ],
        [
          w,
          K
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        v,
        [
          T,
          "Ulefone"
        ],
        [
          w,
          K
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        v,
        [
          T,
          "Energizer"
        ],
        [
          w,
          K
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        v,
        [
          T,
          "Cat"
        ],
        [
          w,
          K
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        v,
        [
          T,
          "Smartfren"
        ],
        [
          w,
          K
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        v,
        [
          T,
          "Nothing"
        ],
        [
          w,
          K
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        v,
        [
          T,
          "Archos"
        ],
        [
          w,
          se
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        v,
        [
          T,
          "Archos"
        ],
        [
          w,
          K
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        v,
        [
          T,
          "HMD"
        ],
        [
          w,
          K
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        T,
        v,
        [
          w,
          se
        ]
      ],
      [
        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
        /; (blu|hmd|imo|infinix|lava|oneplus|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
        /(hp) ([\w ]+\w)/i,
        /(microsoft); (lumia[\w ]+)/i,
        /(oppo) ?([\w ]+) bui/i,
        /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i
      ],
      [
        T,
        v,
        [
          w,
          K
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        T,
        v,
        [
          w,
          se
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        v,
        [
          T,
          mi
        ],
        [
          w,
          se
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        v,
        [
          T,
          "Fairphone"
        ],
        [
          w,
          K
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        v,
        [
          T,
          wi
        ],
        [
          w,
          se
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        T,
        v,
        [
          w,
          K
        ]
      ],
      [
        /(kin\.[onetw]{3})/i
      ],
      [
        [
          v,
          /\./g,
          " "
        ],
        [
          T,
          mi
        ],
        [
          w,
          K
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        v,
        [
          T,
          Ti
        ],
        [
          w,
          se
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        v,
        [
          T,
          Ti
        ],
        [
          w,
          K
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        T,
        [
          w,
          ve
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          v,
          /^/,
          "SmartTV"
        ],
        [
          T,
          Qn
        ],
        [
          w,
          ve
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        T,
        v,
        [
          w,
          ve
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          T,
          qr
        ],
        [
          w,
          ve
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        T,
        [
          v,
          _n + " TV"
        ],
        [
          w,
          ve
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          v,
          $t + " Third Generation"
        ],
        [
          T,
          hn
        ],
        [
          w,
          ve
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          v,
          /^/,
          "Chromecast "
        ],
        [
          T,
          hn
        ],
        [
          w,
          ve
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          v,
          $t + " Nest Hub"
        ],
        [
          T,
          hn
        ],
        [
          w,
          ve
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          v,
          $t
        ],
        [
          T,
          hn
        ],
        [
          w,
          ve
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        v,
        [
          T,
          Ei
        ],
        [
          w,
          ve
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        v,
        [
          T,
          zr
        ],
        [
          w,
          ve
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        v,
        [
          T,
          wi
        ],
        [
          w,
          ve
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        v,
        [
          T,
          Za
        ],
        [
          w,
          ve
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        v,
        [
          T,
          er
        ],
        [
          w,
          ve
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        v,
        [
          T,
          vi
        ],
        [
          w,
          ve
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        T,
        v,
        [
          w,
          ve
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          T,
          /.+\/(\w+)/,
          "$1",
          wt,
          {
            LG: "lge"
          }
        ],
        [
          v,
          _o
        ],
        [
          w,
          ve
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        v,
        [
          T,
          er
        ],
        [
          w,
          cr
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        v,
        [
          T,
          mi
        ],
        [
          w,
          cr
        ]
      ],
      [
        /(ouya)/i,
        /(nintendo) (\w+)/i,
        /(retroid) (pocket ([^\)]+))/i
      ],
      [
        T,
        v,
        [
          w,
          cr
        ]
      ],
      [
        /droid.+; (shield)( bui|\))/i
      ],
      [
        v,
        [
          T,
          wi
        ],
        [
          w,
          cr
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        v,
        [
          T,
          Qn
        ],
        [
          w,
          mt
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        T,
        v,
        [
          w,
          mt
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        v,
        [
          T,
          bi
        ],
        [
          w,
          mt
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        v,
        [
          T,
          _n
        ],
        [
          w,
          mt
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        v,
        [
          T,
          Xa
        ],
        [
          w,
          mt
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        v,
        [
          T,
          yi
        ],
        [
          w,
          mt
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        v,
        [
          T,
          er
        ],
        [
          w,
          mt
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        v,
        [
          T,
          qr
        ],
        [
          w,
          mt
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        v,
        [
          T,
          Ti
        ],
        [
          w,
          mt
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        v,
        [
          T,
          hn
        ],
        [
          w,
          Yr
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        T,
        v,
        [
          w,
          Yr
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        v,
        [
          T,
          Ei
        ],
        [
          w,
          Yr
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          w,
          Yr
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        T,
        [
          w,
          lr
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        v,
        [
          T,
          zr
        ],
        [
          w,
          lr
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        v,
        [
          T,
          _n
        ],
        [
          w,
          lr
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          w,
          lr
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        v,
        [
          w,
          ve
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          w,
          ve
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
      ],
      [
        v,
        [
          w,
          wt,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": se
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          w,
          se
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          w,
          K
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        v,
        [
          T,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          ro + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        E,
        S
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        S,
        [
          E,
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
        E,
        S
      ],
      [
        /ladybird\//i
      ],
      [
        [
          E,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        S,
        E
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          E,
          /N/,
          "R"
        ],
        [
          S,
          wt,
          nc
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        E,
        S
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          S,
          /(;|\))/g,
          "",
          wt,
          nc
        ],
        [
          E,
          Ji
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        E,
        S
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          S,
          /_/g,
          "."
        ],
        [
          E,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          E,
          "macOS"
        ],
        [
          S,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        S,
        [
          E,
          $t + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        S,
        [
          E,
          $t + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        S,
        [
          E,
          $t + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        S,
        [
          E,
          $t + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        S,
        [
          E,
          $t
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        S,
        E
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          E,
          /(.+)/,
          "$1 Touch"
        ],
        S
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        E,
        S
      ],
      [
        /\(bb(10);/i
      ],
      [
        S,
        [
          E,
          qa
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        S,
        [
          E,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        S,
        [
          E,
          tr + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        S,
        [
          E,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          S,
          wt,
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
          E,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        S,
        [
          E,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          E,
          "Chrome OS"
        ],
        S
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
        E,
        S
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          E,
          "Solaris"
        ],
        S
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        E,
        S
      ]
    ]
  }, Kr = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return Lt.call(e.init, [
      [
        je,
        [
          E,
          S,
          Lr,
          w
        ]
      ],
      [
        Nt,
        [
          Ge
        ]
      ],
      [
        Et,
        [
          w,
          v,
          T
        ]
      ],
      [
        ot,
        [
          E,
          S
        ]
      ],
      [
        Xe,
        [
          E,
          S
        ]
      ]
    ]), Lt.call(e.isIgnore, [
      [
        je,
        [
          S,
          Lr
        ]
      ],
      [
        ot,
        [
          S
        ]
      ],
      [
        Xe,
        [
          S
        ]
      ]
    ]), Lt.call(e.isIgnoreRgx, [
      [
        je,
        / ?browser$/i
      ],
      [
        Xe,
        / ?os$/i
      ]
    ]), Lt.call(e.toString, [
      [
        je,
        [
          E,
          S
        ]
      ],
      [
        Nt,
        [
          Ge
        ]
      ],
      [
        Et,
        [
          T,
          v
        ]
      ],
      [
        ot,
        [
          E,
          S
        ]
      ],
      [
        Xe,
        [
          E,
          S
        ]
      ]
    ]), e;
  })(), Fy = function(e, t) {
    var n = Kr.init[t], r = Kr.isIgnore[t] || 0, o = Kr.isIgnoreRgx[t] || 0, i = Kr.toString[t] || 0;
    function s() {
      Lt.call(this, n);
    }
    return s.prototype.getItem = function() {
      return e;
    }, s.prototype.withClientHints = function() {
      return Kt ? Kt.getHighEntropyValues(lu).then(function(a) {
        return e.setCH(new uu(a, false)).parseCH().get();
      }) : e.parseCH().get();
    }, s.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != Dn && (s.prototype.is = function(a) {
      var c = false;
      for (var u in this) if (this.hasOwnProperty(u) && !Xi(r, u) && Xt(o ? $n(o, this[u]) : this[u]) == Xt(o ? $n(o, a) : a)) {
        if (c = true, a != Jt) break;
      } else if (a == Jt && c) {
        c = !c;
        break;
      }
      return c;
    }, s.prototype.toString = function() {
      var a = Gn;
      for (var c in i) typeof this[i[c]] !== Jt && (a += (a ? " " : Gn) + this[i[c]]);
      return a || Jt;
    }), Kt || (s.prototype.then = function(a) {
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
  function uu(e, t) {
    if (e = e || {}, Lt.call(this, lu), t) Lt.call(this, [
      [
        _s,
        Ii(e[sn])
      ],
      [
        Ps,
        Ii(e[_y])
      ],
      [
        K,
        /\?1/.test(e[Ly])
      ],
      [
        v,
        or(e[Cy])
      ],
      [
        Mn,
        or(e[cu])
      ],
      [
        Rs,
        or(e[ky])
      ],
      [
        Ge,
        or(e[Py])
      ],
      [
        gn,
        Ii(e[Ny])
      ],
      [
        zo,
        or(e[Ry])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== Jt && (this[n] = e[n]);
  }
  function ic(e, t, n, r) {
    return this.get = function(o) {
      return o ? this.data.hasOwnProperty(o) ? this.data[o] : void 0 : this.data;
    }, this.set = function(o, i) {
      return this.data[o] = i, this;
    }, this.setCH = function(o) {
      return this.uaCH = o, this;
    }, this.detectFeature = function() {
      if (We && We.userAgent == this.ua) switch (this.itemType) {
        case je:
          We.brave && typeof We.brave.isBrave == So && this.set(E, "Brave");
          break;
        case Et:
          !this.get(w) && Kt && Kt[K] && this.set(w, K), this.get(v) == "Macintosh" && We && typeof We.standalone !== Jt && We.maxTouchPoints && We.maxTouchPoints > 2 && this.set(v, "iPad").set(w, se);
          break;
        case Xe:
          !this.get(E) && Kt && Kt[Mn] && this.set(E, Kt[Mn]);
          break;
        case Dn:
          var o = this.data, i = function(s) {
            return o[s].getItem().detectFeature().get();
          };
          this.set(je, i(je)).set(Nt, i(Nt)).set(Et, i(Et)).set(ot, i(ot)).set(Xe, i(Xe));
      }
      return this;
    }, this.parseUA = function() {
      return this.itemType != Dn && Si.call(this.data, this.ua, this.rgxMap), this.itemType == je && this.set(Lr, Ai(this.get(S))), this;
    }, this.parseCH = function() {
      var o = this.uaCH, i = this.rgxMap;
      switch (this.itemType) {
        case je:
        case ot:
          var s = o[Ps] || o[_s], a;
          if (s) for (var c = 0; c < s.length; c++) {
            var u = s[c].brand || s[c], l = s[c].version;
            this.itemType == je && !/not.a.brand/i.test(u) && (!a || /Chrom/.test(a) && u != ec || a == ro && /WebView2/.test(u)) && (u = wt(u, My), a = this.get(E), a && !/Chrom/.test(a) && /Chrom/.test(u) || this.set(E, u).set(S, l).set(Lr, Ai(l)), a = u), this.itemType == ot && u == ec && this.set(S, l);
          }
          break;
        case Nt:
          var d = o[Ge];
          d && (d && o[zo] == "64" && (d += "64"), Si.call(this.data, d + ";", i));
          break;
        case Et:
          if (o[K] && this.set(w, K), o[v] && (this.set(v, o[v]), !this.get(w) || !this.get(T))) {
            var g = {};
            Si.call(g, "droid 9; " + o[v] + ")", i), !this.get(w) && g.type && this.set(w, g.type), !this.get(T) && g.vendor && this.set(T, g.vendor);
          }
          if (o[gn]) {
            var p;
            if (typeof o[gn] != "string") for (var m = 0; !p && m < o[gn].length; ) p = wt(o[gn][m++], rc);
            else p = wt(o[gn], rc);
            this.set(w, p);
          }
          break;
        case Xe:
          var b = o[Mn];
          if (b) {
            var C = o[Rs];
            b == Ji && (C = parseInt(Ai(C), 10) >= 13 ? "11" : "10"), this.set(E, b).set(S, C);
          }
          this.get(E) == Ji && o[v] == "Xbox" && this.set(E, "Xbox").set(S, void 0);
          break;
        case Dn:
          var O = this.data, A = function(M) {
            return O[M].getItem().setCH(o).parseCH().get();
          };
          this.set(je, A(je)).set(Nt, A(Nt)).set(Et, A(Et)).set(ot, A(ot)).set(Xe, A(Xe));
      }
      return this;
    }, Lt.call(this, [
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
        r
      ],
      [
        "rgxMap",
        n
      ],
      [
        "data",
        Fy(this, e)
      ]
    ]), this;
  }
  Mt = function(e, t, n) {
    if (typeof e === Wn ? (Oo(e, true) ? (typeof t === Wn && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === Ki && !Oo(t, true) && (n = t, t = void 0), n) if (typeof n.append === So) {
      var r = {};
      n.forEach(function(l, d) {
        r[String(d).toLowerCase()] = l;
      }), n = r;
    } else {
      var o = {};
      for (var i in n) n.hasOwnProperty(i) && (o[String(i).toLowerCase()] = n[i]);
      n = o;
    }
    if (!(this instanceof Mt)) return new Mt(e, t, n).getResult();
    var s = typeof e === Ki ? e : n && n[Va] ? n[Va] : We && We.userAgent ? We.userAgent : Gn, a = new uu(n, true), c = t ? Dy(oc, t) : oc, u = function(l) {
      return l == Dn ? function() {
        return new ic(l, s, c, a).set("ua", s).set(je, this.getBrowser()).set(Nt, this.getCPU()).set(Et, this.getDevice()).set(ot, this.getEngine()).set(Xe, this.getOS()).get();
      } : function() {
        return new ic(l, s, c[l], a).parseUA().get();
      };
    };
    return Lt.call(this, [
      [
        "getBrowser",
        u(je)
      ],
      [
        "getCPU",
        u(Nt)
      ],
      [
        "getDevice",
        u(Et)
      ],
      [
        "getEngine",
        u(ot)
      ],
      [
        "getOS",
        u(Xe)
      ],
      [
        "getResult",
        u(Dn)
      ],
      [
        "getUA",
        function() {
          return s;
        }
      ],
      [
        "setUA",
        function(l) {
          return Vn(l) && (s = l.length > qi ? _o(l, qi) : l), this;
        }
      ]
    ]).setUA(s), this;
  };
  Mt.VERSION = Oy;
  Mt.BROWSER = qo([
    E,
    S,
    Lr,
    w
  ]);
  Mt.CPU = qo([
    Ge
  ]);
  Mt.DEVICE = qo([
    v,
    T,
    w,
    cr,
    K,
    ve,
    se,
    mt,
    lr
  ]);
  Mt.ENGINE = Mt.OS = qo([
    E,
    S
  ]);
  var Se = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(Se || {});
  class Hy {
    constructor() {
      __publicField(this, "parser");
      this.parser = new Mt(navigator.userAgent);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? Se.TAURI : this.parser.getDevice().type === "mobile" ? Se.MOBILE_WEB : Se.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), n = this.parser.getDevice(), r = this.parser.getBrowser(), o = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: navigator.userAgent,
        isMobile: n.type === "mobile",
        isTablet: n.type === "tablet",
        browser: r.name || void 0,
        os: o.name || void 0
      };
    }
    getPlatformCapabilities(t) {
      const n = {
        storage: {
          persistent: true,
          encryption: false
        },
        geolocation: {
          native: false,
          browser: true,
          ipBased: true,
          highAccuracy: true
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
        }
      };
      switch (t) {
        case Se.TAURI:
          return {
            ...n,
            storage: {
              persistent: true,
              encryption: true,
              quota: void 0
            },
            geolocation: {
              native: true,
              browser: true,
              ipBased: true,
              highAccuracy: true
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
              ...n.permissions,
              geolocation: true
            }
          };
        case Se.MOBILE_WEB:
          return {
            ...n,
            geolocation: {
              ...n.geolocation,
              highAccuracy: false
            },
            permissions: {
              ...n.permissions,
              geolocation: true
            }
          };
        case Se.WEB:
        default:
          return n;
      }
    }
    getDefaultConfiguration(t) {
      const n = {
        storage: {
          autoSave: true
        },
        geolocation: {
          timeout: 3e4,
          maximumAge: 1e4,
          enableHighAccuracy: true
        },
        fileSystem: {
          maxFileSize: 10485760
        }
      };
      switch (t) {
        case Se.TAURI:
          return {
            ...n,
            storage: {
              ...n.storage,
              filePath: "user-data.json",
              autoSave: false
            },
            geolocation: {
              ...n.geolocation,
              tauriHandler: "get_geolocation"
            },
            fileSystem: {
              ...n.fileSystem,
              basePath: "./data",
              allowedExtensions: [
                ".json",
                ".geojson",
                ".gpx",
                ".kml"
              ]
            }
          };
        case Se.MOBILE_WEB:
          return {
            ...n,
            storage: {
              ...n.storage,
              dbName: "mobile-trackmaker-db",
              storeName: "user-data"
            },
            geolocation: {
              ...n.geolocation,
              timeout: 2e4,
              maximumAge: 5e3,
              enableHighAccuracy: false
            }
          };
        case Se.WEB:
        default:
          return {
            ...n,
            storage: {
              ...n.storage,
              dbName: "trackmaker-db",
              storeName: "user-data"
            }
          };
      }
    }
    validate() {
      try {
        const t = this.getPlatformContext();
        return !t.environment || !t.capabilities ? L(new Tt("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), H(true));
      } catch (t) {
        return L(new Tt("Platform detection failed", void 0, t));
      }
    }
  }
  const Ns = new Hy();
  Ww = function() {
    return Ns.getPlatformContext();
  };
  function Uy(e, t, n, r) {
    if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  }
  function jy(e, t, n, r, o) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var oo;
  function Gy(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function Ee(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class Wy {
    get rid() {
      return Uy(this, oo, "f");
    }
    constructor(t) {
      oo.set(this, void 0), jy(this, oo, t);
    }
    async close() {
      return Ee("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  oo = /* @__PURE__ */ new WeakMap();
  var sc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(sc || (sc = {}));
  async function $y(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await Ee("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function ac(e, t, n) {
    var r;
    const o = (r = void 0) !== null && r !== void 0 ? r : {
      kind: "Any"
    };
    return Ee("plugin:event|listen", {
      event: e,
      target: o,
      handler: Gy(t)
    }).then((i) => async () => $y(e, i));
  }
  async function By(e, t) {
    return await Po.load(e, t);
  }
  class Po extends Wy {
    constructor(t) {
      super(t);
    }
    static async load(t, n) {
      const r = await Ee("plugin:store|load", {
        path: t,
        options: n
      });
      return new Po(r);
    }
    static async get(t) {
      return await Ee("plugin:store|get_store", {
        path: t
      }).then((n) => n ? new Po(n) : null);
    }
    async set(t, n) {
      await Ee("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: n
      });
    }
    async get(t) {
      const [n, r] = await Ee("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return r ? n : void 0;
    }
    async has(t) {
      return await Ee("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await Ee("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await Ee("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await Ee("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await Ee("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await Ee("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await Ee("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await Ee("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await Ee("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await Ee("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, n) {
      return await ac("store://change", (r) => {
        r.payload.resourceId === this.rid && r.payload.key === t && n(r.payload.exists ? r.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await ac("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class me extends Bn {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", Mr.STORAGE);
      this.code = n;
    }
  }
  var he = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(he || {});
  class Ze extends Bn {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", Mr.GEOLOCATION);
      this.code = n;
    }
  }
  var Le = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(Le || {});
  class Jr extends Bn {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", Mr.GENERIC);
      this.code = n;
    }
  }
  var ur = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e))(ur || {});
  class Vy {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return H(void 0);
      try {
        return this.store = await By(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, H(void 0);
      } catch (t) {
        return L(new me("Failed to initialize Tauri storage", he.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, n) {
      if (!this.store) return L(new me("Tauri store not initialized", he.NOT_INITIALIZED));
      try {
        return await this.store.set(t, n), H(void 0);
      } catch (r) {
        return L(new me(`Failed to set value for key: ${t}`, he.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.store) return L(new me("Tauri store not initialized", he.NOT_INITIALIZED));
      try {
        const n = await this.store.get(t);
        return H(n ?? null);
      } catch (n) {
        return L(new me(`Failed to get value for key: ${t}`, he.GET_FAILED, n));
      }
    }
    async save() {
      if (!this.store) return L(new me("Tauri store not initialized", he.NOT_INITIALIZED));
      try {
        return await this.store.save(), H(void 0);
      } catch (t) {
        return L(new me("Failed to save store", he.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return L(new me("Tauri store not initialized", he.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), n = {};
        for (const r of t) {
          const o = await this.store.get(r);
          n[r] = o;
        }
        return H(JSON.stringify(n, null, 2));
      } catch (t) {
        return L(new me("Failed to export data to JSON", he.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return L(new me("Tauri store not initialized", he.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const n of t) await this.store.delete(n);
        return H(void 0);
      } catch (t) {
        return L(new me("Failed to clear store", he.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return L(new me("Tauri store not initialized", he.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), H(void 0);
      } catch (n) {
        return L(new me(`Failed to remove key: ${t}`, he.REMOVE_FAILED, n));
      }
    }
  }
  class Yy {
    constructor(t = "trackmaker-db", n = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = n;
    }
    async init() {
      if (this.initialized) return H(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, H(void 0);
      } catch (t) {
        return L(new me("Failed to initialize Web storage", he.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, n) => {
        const r = indexedDB.open(this.dbName, 1);
        r.onupgradeneeded = (o) => {
          const i = o.target.result;
          i.objectStoreNames.contains(this.storeName) || i.createObjectStore(this.storeName);
        }, r.onsuccess = (o) => {
          t(o.target.result);
        }, r.onerror = (o) => {
          n(o.target.error);
        };
      });
    }
    async set(t, n) {
      if (!this.db) return L(new me("Database not initialized", he.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (r) => new Promise((o, i) => {
          const s = r.put(Io(n), t);
          s.onsuccess = () => o(), s.onerror = () => i(new Error("Failed to set value"));
        })), H(void 0);
      } catch (r) {
        return L(new me(`Failed to set value for key: ${t}`, he.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.db) return L(new me("Database not initialized", he.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (r) => new Promise((o, i) => {
          const s = r.get(t);
          s.onsuccess = () => o(s.result), s.onerror = () => i(new Error("Failed to get value"));
        }));
        return H(n);
      } catch (n) {
        return L(new me(`Failed to get value for key: ${t}`, he.GET_FAILED, n));
      }
    }
    async save() {
      return H(void 0);
    }
    async exportToJson() {
      if (!this.db) return L(new me("Database not initialized", he.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (n) => new Promise((r, o) => {
          const i = n.getAll();
          i.onsuccess = () => {
            const s = i.result.reduce((a, c, u) => (a[u] = c, a), {});
            r(s);
          }, i.onerror = () => o(new Error("Failed to export data"));
        }));
        return H(JSON.stringify(t, null, 2));
      } catch (t) {
        return L(new me("Failed to export data to JSON", he.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return L(new me("Database not initialized", he.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((n, r) => {
          const o = t.clear();
          o.onsuccess = () => n(), o.onerror = () => r(new Error("Failed to clear store"));
        })), H(void 0);
      } catch (t) {
        return L(new me("Failed to clear store", he.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return L(new me("Database not initialized", he.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((r, o) => {
          const i = n.delete(t);
          i.onsuccess = () => r(), i.onerror = () => o(new Error("Failed to remove key"));
        })), H(void 0);
      } catch (n) {
        return L(new me(`Failed to remove key: ${t}`, he.REMOVE_FAILED, n));
      }
    }
    executeTransaction(t, n) {
      return new Promise((r, o) => {
        if (!this.db) {
          o(new Error("Database not initialized"));
          return;
        }
        const i = this.db.transaction(this.storeName, t), s = i.objectStore(this.storeName);
        n(s).then(r).catch(o), i.onerror = () => {
          o(new Error("Transaction failed"));
        };
      });
    }
  }
  class zy {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init() {
      if (this.initialized) return H(void 0);
      try {
        return await this.injectTauriProvider(), this.initialized = true, H(void 0);
      } catch (t) {
        return L(new Ze("Failed to initialize Tauri geolocation provider", Le.INITIALIZATION_FAILED, t));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new qy(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return H(t.state);
      } catch (t) {
        return L(new Ze("Failed to get permission status", Le.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(H("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(H("denied")) : t(H("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), H("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? H("denied") : L(new Ze("Failed to request permission", Le.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return H(this.convertToGeolocationPosition(t));
      } catch (t) {
        return L(new Ze("Failed to get current position", Le.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await Ee(this.tauriHandlerName);
    }
    convertToGeolocationPosition(t) {
      const n = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, r = {
        coords: {
          ...n,
          toJSON: () => JSON.stringify(n)
        },
        timestamp: Date.now()
      };
      return {
        ...r,
        toJSON: () => JSON.stringify(r)
      };
    }
    async watchPosition(t) {
      try {
        const n = window.setInterval(async () => {
          try {
            const r = await this.getCurrentPosition();
            r.isOk() && t(r.value);
          } catch (r) {
            console.error("Error in watch position:", r);
          }
        }, 1e4);
        return this.watchCallbacks.set(n, n), H(n);
      } catch (n) {
        return L(new Ze("Failed to start watching position", Le.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), H(void 0);
      } catch (n) {
        return L(new Ze("Failed to clear watch", Le.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class qy {
    constructor(t) {
      __publicField(this, "tauriHandlerName");
      this.tauriHandlerName = t;
    }
    getCurrentPosition(t, n) {
      this.getTauriPosition().then(t).catch((r) => {
        n == null ? void 0 : n(this.createPositionError(r));
      });
    }
    watchPosition(t, n, r) {
      const o = (r == null ? void 0 : r.maximumAge) ?? 1e4;
      return window.setInterval(() => {
        this.getTauriPosition().then(t).catch((s) => {
          n == null ? void 0 : n(this.createPositionError(s));
        });
      }, o);
    }
    clearWatch(t) {
      clearInterval(t);
    }
    async getTauriPosition() {
      const t = await Ee(this.tauriHandlerName), n = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, r = {
        coords: {
          ...n,
          toJSON: () => JSON.stringify(n)
        },
        timestamp: Date.now()
      };
      return {
        ...r,
        toJSON: () => JSON.stringify(r)
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
  class Ky {
    constructor() {
      __publicField(this, "initialized", false);
    }
    async init() {
      return this.initialized ? H(void 0) : this.isSupported() ? (this.initialized = true, H(void 0)) : L(new Ze("Geolocation is not supported by this browser", Le.UNSUPPORTED));
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return H(t.state);
      } catch (t) {
        return L(new Ze("Failed to get permission status", Le.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(H("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(H("denied")) : t(H("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), H("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? H("denied") : L(new Ze("Failed to request permission", Le.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return L(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((n) => {
          t(H(n));
        }, (n) => {
          let r;
          const o = n.message;
          switch (n.code) {
            case n.PERMISSION_DENIED:
              r = Le.PERMISSION_DENIED;
              break;
            case n.POSITION_UNAVAILABLE:
              r = Le.POSITION_UNAVAILABLE;
              break;
            case n.TIMEOUT:
              r = Le.TIMEOUT;
              break;
            default:
              r = Le.POSITION_UNAVAILABLE;
          }
          t(L(new Ze(o, r, new Error(n.message))));
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 1e4
        });
      });
    }
    async watchPosition(t) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return L(n.error);
      }
      try {
        const n = navigator.geolocation.watchPosition(t, (r) => {
          console.error("Geolocation watch error:", r);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 1e4
        });
        return H(n);
      } catch (n) {
        return L(new Ze("Failed to start watching position", Le.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return navigator.geolocation.clearWatch(t), H(void 0);
      } catch (n) {
        return L(new Ze("Failed to clear watch", Le.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  const _mn = class _mn {
    constructor(t) {
      __publicField(this, "context");
      __publicField(this, "storageProvider", null);
      __publicField(this, "geolocationProvider", null);
      __publicField(this, "fileProvider", null);
      __publicField(this, "initialized", false);
      this.context = t;
    }
    static getInstance(t) {
      if (!_mn.instance) {
        const n = Ns.getPlatformContext(), r = new _mn(n), o = r.initializeProviders(t);
        if (o.isErr()) return L(o.error);
        _mn.instance = r;
      }
      return H(_mn.instance);
    }
    initializeProviders(t) {
      try {
        return this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage), this.geolocationProvider = this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, H(void 0);
      } catch (n) {
        return L(new Jr("Failed to initialize platform providers", ur.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case Se.TAURI:
          return new Vy((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case Se.WEB:
        case Se.MOBILE_WEB:
        default:
          return new Yy((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    createGeolocationProvider(t) {
      switch (this.context.environment) {
        case Se.TAURI:
          return new zy((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
        case Se.WEB:
        case Se.MOBILE_WEB:
        default:
          return new Ky();
      }
    }
    createFileProvider() {
      return {
        init: async () => L(new Tt("File provider not implemented")),
        readFile: async () => L(new Tt("File provider not implemented")),
        writeFile: async () => L(new Tt("File provider not implemented")),
        deleteFile: async () => L(new Tt("File provider not implemented")),
        listFiles: async () => L(new Tt("File provider not implemented")),
        exists: async () => L(new Tt("File provider not implemented")),
        isSupported: () => false
      };
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? H(this.storageProvider) : L(new Jr("Storage provider not initialized", ur.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? H(this.geolocationProvider) : L(new Jr("Geolocation provider not initialized", ur.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? H(this.fileProvider) : L(new Jr("File provider not initialized", ur.DETECTION_FAILED));
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
      _mn.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
  };
  __publicField(_mn, "instance", null);
  let mn = _mn;
  Zi = function(e) {
    return mn.getInstance(e);
  };
  Jy = function() {
    return Ns.detectEnvironment() === Se.TAURI;
  };
  class Xy {
    constructor() {
      __publicField(this, "permissionChangeListeners", /* @__PURE__ */ new Set());
      __publicField(this, "currentPermissionState", null);
      __publicField(this, "platformGeolocationProvider", null);
    }
    async getPermissionStatus() {
      if (this.platformGeolocationProvider) try {
        const t = await this.platformGeolocationProvider.getPermissionStatus();
        return t.isOk() ? (this.currentPermissionState = t.value, H(t.value)) : L(new Sn("Failed to get permission status from platform provider", t.error));
      } catch (t) {
        return L(new Sn("Platform provider permission check error", t));
      }
      if (!navigator.geolocation) return L(new Sy("Geolocation is not supported by this browser"));
      try {
        if (!navigator.permissions) return this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return this.currentPermissionState = t.state, H(t.state);
      } catch (t) {
        return L(new Sn("Failed to get permission status", t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(H("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(H("denied")) : t(H("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission(t) {
      if (this.platformGeolocationProvider) try {
        const n = await this.platformGeolocationProvider.requestPermission();
        return n.isOk() ? (this.currentPermissionState = n.value, H(n.value)) : L(new Sn("Failed to request permission from platform provider", n.error));
      } catch (n) {
        return L(new Sn("Platform provider permission request error", n));
      }
      if (!navigator.permissions) return this.getPermissionStatus();
      try {
        const n = await navigator.permissions.query({
          name: "geolocation"
        });
        if (n.state === "prompt" && t && await t(n.state)) {
          const o = await this.fallbackPermissionCheck();
          if (o.isOk()) return this.currentPermissionState = o.value, H(o.value);
        }
        return this.currentPermissionState = n.state, H(n.state);
      } catch (n) {
        return L(new Sn("Failed to request permission", n));
      }
    }
    addPermissionChangeListener(t) {
      return this.permissionChangeListeners.add(t), navigator.permissions && navigator.permissions.query({
        name: "geolocation"
      }).then((n) => {
        n.addEventListener("change", () => {
          this.currentPermissionState = n.state, this.notifyPermissionChange(n.state);
        });
      }).catch(() => {
      }), () => {
        this.permissionChangeListeners.delete(t);
      };
    }
    notifyPermissionChange(t) {
      this.permissionChangeListeners.forEach((n) => {
        try {
          n(t);
        } catch (r) {
          console.error("Error in permission change listener:", r);
        }
      });
    }
    get currentPermission() {
      return this.currentPermissionState;
    }
    setPlatformProvider(t) {
      this.platformGeolocationProvider = t;
    }
  }
  var fu = ((e) => (e[e.PERMISSION_DENIED = 1] = "PERMISSION_DENIED", e[e.POSITION_UNAVAILABLE = 2] = "POSITION_UNAVAILABLE", e[e.TIMEOUT = 3] = "TIMEOUT", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.IOS_HTTPS_REQUIRED = 5] = "IOS_HTTPS_REQUIRED", e[e.FIREFOX_PERMISSION_ISSUE = 6] = "FIREFOX_PERMISSION_ISSUE", e))(fu || {});
  const Zt = [];
  function Zy(e) {
    const t = {
      id: (Zt.length > 0 ? Zt[Zt.length - 1].id : 0) + 1,
      callback: e
    };
    return Zt.push(t), t.id;
  }
  function Qy(e) {
    Zt.splice(Zt.findIndex((t) => t.id === e), 1);
  }
  let Xr = -1, cc = {
    latitude: 0,
    longitude: 0
  };
  const lc = "https://ipapi.co/json/";
  class ew {
    async getPermissionStatus() {
      try {
        return await fetch(lc), "granted";
      } catch {
        return "denied";
      }
    }
    async fetchRaw(t = 1e4) {
      const n = new Promise(async (o, i) => {
        try {
          const s = await fetch(lc);
          if (!s.ok) throw new Error(`HTTP error! Status: ${s.status}`);
          o(s.json());
        } catch {
          i(new Error("Failed to fetch IP geolocation data"));
        }
      }), r = new Promise((o, i) => {
        setTimeout(() => i(new Error("Request IP geolocation data timed out")), t);
      });
      return Promise.race([
        n,
        r
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
      return new Promise((r) => {
        if (Xr === -1) {
          const o = () => {
            this.getCurrentPosition().then((i) => {
              dy(i, cc) || (console.info("[geolocation] IP geolocation position updated"), Zt.forEach((s) => s.callback(i)), cc = Io(i));
            }).catch((i) => {
              throw console.error("[geolocation] Error in IP geolocation watch:", i), new Error(`Error while watching the geolocation [IP]. Code: ${fu.UNKNOWN}, Msg: ${i}`);
            });
          };
          Xr = setInterval(() => o(), 2e4), console.info("[geolocation] IP geolocation watch interval started"), o();
        }
        r(n);
      });
    }
    clearWatch(t) {
      console.info("[geolocation] Clearing IP geolocation watch handler"), Qy(t), Zt.length === 0 && (console.info("[geolocation] Stopping IP geolocation watch interval"), clearInterval(Xr), Xr = -1);
    }
  }
  class tw {
    constructor(t) {
      __publicField(this, "permissionService");
      __publicField(this, "isInitialized", false);
      __publicField(this, "platformGeolocationProvider", null);
      __publicField(this, "ipBackend", null);
      __publicField(this, "isWatching", false);
      __publicField(this, "watchId", null);
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "lastKnownLocation", null);
      __publicField(this, "currentBackend", null);
      this.permissionService = t || new Xy(), this.ipBackend = new ew();
    }
    async initialize(t) {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), H(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with location trail strategy");
      try {
        const n = Zi();
        if (n.isErr()) return console.warn("[GeolocationManager] Failed to get platform services, will try IP backend"), await this.initializeWithIPBackend();
        const r = n.value.getGeolocation();
        if (r.isErr()) return console.warn("[GeolocationManager] Failed to get geolocation provider, will try IP backend"), await this.initializeWithIPBackend();
        if (this.platformGeolocationProvider = r.value, (await this.platformGeolocationProvider.init()).isErr()) return console.warn("[GeolocationManager] Failed to initialize platform provider, will try IP backend"), await this.initializeWithIPBackend();
        this.permissionService.setPlatformProvider(this.platformGeolocationProvider);
        const i = await this.permissionService.getPermissionStatus();
        if (i.isErr()) return ht(i.error, "GeolocationManager.initialize.permission"), console.warn("[GeolocationManager] Failed to get permission status, will try IP backend"), await this.initializeWithIPBackend();
        const s = i.value;
        if (s === "prompt" && t && await t(s)) {
          const u = await this.platformGeolocationProvider.requestPermission();
          if (u.isErr()) return ht(u.error, "GeolocationManager.initialize.requestPermission"), console.warn("[GeolocationManager] Failed to request permission, will try IP backend"), await this.initializeWithIPBackend();
        }
        console.info("[GeolocationManager] Attempting to get location via platform provider (GPS)");
        const a = await this.tryGetGPSLocation();
        if (a.isOk()) console.info("[GeolocationManager] Successfully got location via GPS, using platform provider"), this.currentBackend = "platform", this.lastKnownLocation = a.value;
        else return console.warn("[GeolocationManager] Failed to get location via GPS, falling back to IP backend"), await this.initializeWithIPBackend();
        return this.permissionService.addPermissionChangeListener(async (c) => {
          console.info(`[GeolocationManager] Permission changed to: ${c}`), c === "denied" && this.isWatching && this.watchId !== null && this.stopLocationUpdates(this.watchId);
        }), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using platform provider"), H(void 0);
      } catch {
        return console.warn("[GeolocationManager] Exception during platform initialization, will try IP backend"), await this.initializeWithIPBackend();
      }
    }
    async tryGetGPSLocation() {
      if (!this.platformGeolocationProvider) return L(new we("No platform geolocation provider available", "no_platform_provider"));
      try {
        const t = await this.platformGeolocationProvider.getCurrentPosition();
        if (t.isOk()) {
          const n = t.value;
          return H({
            latitude: n.coords.latitude,
            longitude: n.coords.longitude
          });
        } else return L(new we("Failed to get location from platform provider", "platform_location_failed", t.error));
      } catch (t) {
        return L(new we("Exception while getting location from platform provider", "platform_location_exception", t));
      }
    }
    async initializeWithIPBackend() {
      if (console.info("[GeolocationManager] Initializing with IP backend as fallback"), !this.ipBackend) return L(new we("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Successfully got location via IP backend"), this.currentBackend = "ip", this.lastKnownLocation = t, this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using IP backend"), H(void 0);
      } catch (t) {
        const n = new we("Failed to initialize geolocation manager with IP backend", "ip_backend_failed", t);
        return ht(n, "GeolocationManager.initializeWithIPBackend"), L(n);
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new we("Geolocation manager not initialized", "not_initialized");
        return ht(t, "GeolocationManager.getCurrentLocation"), L(t);
      }
      if (this.currentBackend === "platform" && this.platformGeolocationProvider) return await this.getLocationFromPlatformProvider();
      if (this.currentBackend === "ip" && this.ipBackend) return await this.getLocationFromIPBackend();
      if (console.warn("[GeolocationManager] No backend determined, attempting fallback strategy"), this.platformGeolocationProvider) {
        const t = await this.getLocationFromPlatformProvider();
        if (t.isOk()) return this.currentBackend = "platform", t;
      }
      if (this.ipBackend) {
        const t = await this.getLocationFromIPBackend();
        if (t.isOk()) return this.currentBackend = "ip", t;
      }
      return L(new we("No working geolocation backend available", "no_working_backend"));
    }
    async getLocationFromPlatformProvider() {
      if (!this.platformGeolocationProvider) return L(new we("Platform geolocation provider not available", "platform_provider_unavailable"));
      const t = await this.platformGeolocationProvider.getCurrentPosition();
      if (t.isOk()) {
        const n = t.value, r = {
          latitude: n.coords.latitude,
          longitude: n.coords.longitude
        };
        return console.info("[GeolocationManager] Location retrieved from platform provider"), this.doLocationUpdate(r), H(r);
      } else return ht(t.error, "GeolocationManager.getLocationFromPlatformProvider"), L(new we("Failed to get location from platform provider", "platform_provider_failed", t.error));
    }
    async getLocationFromIPBackend() {
      if (!this.ipBackend) return L(new we("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Location retrieved from IP backend"), this.doLocationUpdate(t), H(t);
      } catch (t) {
        const n = pi(t, "Failed to get location from IP backend");
        return ht(n, "GeolocationManager.getLocationFromIPBackend"), L(new we("Failed to get location from IP backend", "ip_backend_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new we("Geolocation manager not initialized", "not_initialized");
        return ht(n, "GeolocationManager.startLocationUpdates"), L(n);
      }
      if (console.info("[GeolocationManager] Starting location updates"), this.currentBackend === "platform" && this.platformGeolocationProvider) return await this.startPlatformLocationUpdates(t);
      if (this.currentBackend === "ip" && this.ipBackend) return await this.startIPLocationUpdates(t);
      if (console.warn("[GeolocationManager] No backend determined, attempting fallback strategy"), this.platformGeolocationProvider) {
        const n = await this.startPlatformLocationUpdates(t);
        if (n.isOk()) return this.currentBackend = "platform", n;
      }
      if (this.ipBackend) {
        const n = await this.startIPLocationUpdates(t);
        if (n.isOk()) return this.currentBackend = "ip", n;
      }
      return L(new we("No working geolocation backend available for location updates", "no_working_backend_for_updates"));
    }
    async startPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return L(new we("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = await this.platformGeolocationProvider.watchPosition((r) => {
        const o = {
          latitude: r.coords.latitude,
          longitude: r.coords.longitude
        };
        this.doLocationUpdate(o), t(o);
      });
      return n.isOk() ? (console.info("[GeolocationManager] Location updates started via platform provider"), this.isWatching = true, this.watchId = n.value, H(n.value)) : L(new we("Failed to start location updates via platform provider", "platform_watch_failed", n.error));
    }
    async startIPLocationUpdates(t) {
      if (!this.ipBackend) return L(new we("IP backend not available", "ip_backend_unavailable"));
      try {
        const n = await this.ipBackend.watchPosition((r) => {
          this.lastKnownLocation = r, this.doLocationUpdate(r), t(r);
        });
        return console.info("[GeolocationManager] Location updates started via IP backend"), this.isWatching = true, this.watchId = n, H(n);
      } catch (n) {
        const r = pi(n, "Failed to start location updates via IP backend");
        return ht(r, "GeolocationManager.startIPLocationUpdates"), L(new we("Failed to start location updates via IP backend", "ip_watch_failed", r));
      }
    }
    stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new we("Geolocation manager not initialized", "not_initialized");
        return ht(n, "GeolocationManager.stopLocationUpdates"), L(n);
      }
      if (console.info("[GeolocationManager] Stopping location updates"), this.currentBackend === "platform" && this.platformGeolocationProvider) return this.stopPlatformLocationUpdates(t);
      if (this.currentBackend === "ip" && this.ipBackend) return this.stopIPLocationUpdates(t);
      {
        let n = null;
        if (this.platformGeolocationProvider) {
          const r = this.stopPlatformLocationUpdates(t);
          if (r.isOk()) return r;
          n = r.error;
        }
        if (this.ipBackend) {
          const r = this.stopIPLocationUpdates(t);
          if (r.isOk()) return r;
          n = r.error;
        }
        return L(n || new we("No working geolocation backend available for stopping updates", "no_working_backend_for_stop"));
      }
    }
    stopPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return L(new we("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = this.platformGeolocationProvider.clearWatch(t);
      return n.isOk() ? (console.info("[GeolocationManager] Location updates stopped via platform provider"), this.isWatching = false, this.watchId = null, H(void 0)) : L(new we("Failed to stop location updates via platform provider", "platform_clear_watch_failed", n.error));
    }
    stopIPLocationUpdates(t) {
      if (!this.ipBackend) return L(new we("IP backend not available", "ip_backend_unavailable"));
      try {
        return this.ipBackend.clearWatch(t), console.info("[GeolocationManager] Location updates stopped via IP backend"), this.isWatching = false, this.watchId = null, H(void 0);
      } catch (n) {
        const r = pi(n, "Failed to stop location updates via IP backend");
        return ht(r, "GeolocationManager.stopIPLocationUpdates"), L(new we("Failed to stop location updates via IP backend", "ip_clear_watch_failed", r));
      }
    }
    isServiceRunning() {
      return this.isWatching;
    }
    isUsingGPS() {
      return this.currentBackend === "platform";
    }
    getCurrentBackend() {
      return this.currentBackend;
    }
    getLastKnownLocation() {
      return this.lastKnownLocation ? this.lastKnownLocation : {
        latitude: 0,
        longitude: 0
      };
    }
    addLocationListener(t) {
      const n = +`${Date.now()} + ${Math.floor(Math.random() * 1e4)}`;
      return this.locationUpdateCallbacks.set(n, t), n;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    doLocationUpdate(t) {
      this.lastKnownLocation = Io(t), this.locationUpdateCallbacks.forEach((n) => n(Io(t)));
    }
    getPermissionStatus() {
      return this.permissionService.currentPermission;
    }
    async refreshBackend() {
      return H(void 0);
    }
  }
  let du;
  const Ko = (e) => du = e, hu = Symbol();
  function Qi(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Er;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Er || (Er = {}));
  function pu() {
    const e = Ic(true), t = e.run(() => Je({}));
    let n = [], r = [];
    const o = ds({
      install(i) {
        Ko(o), o._a = i, i.provide(hu, o), i.config.globalProperties.$pinia = o, r.forEach((s) => n.push(s)), r = [];
      },
      use(i) {
        return this._a ? n.push(i) : r.push(i), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return o;
  }
  const gu = () => {
  };
  function uc(e, t, n, r = gu) {
    e.push(t);
    const o = () => {
      const i = e.indexOf(t);
      i > -1 && (e.splice(i, 1), r());
    };
    return !n && Ac() && ku(o), o;
  }
  function Rn(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const nw = (e) => e(), fc = Symbol(), Oi = Symbol();
  function es(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], o = e[n];
      Qi(o) && Qi(r) && e.hasOwnProperty(n) && !be(r) && !Qt(r) ? e[n] = es(o, r) : e[n] = r;
    }
    return e;
  }
  const rw = Symbol();
  function ow(e) {
    return !Qi(e) || !Object.prototype.hasOwnProperty.call(e, rw);
  }
  const { assign: Vt } = Object;
  function iw(e) {
    return !!(be(e) && e.effect);
  }
  function sw(e, t, n, r) {
    const { state: o, actions: i, getters: s } = t, a = n.state.value[e];
    let c;
    function u() {
      a || (n.state.value[e] = o ? o() : {});
      const l = sf(n.state.value[e]);
      return Vt(l, i, Object.keys(s || {}).reduce((d, g) => (d[g] = ds(Es(() => {
        Ko(n);
        const p = n._s.get(e);
        return s[g].call(p, p);
      })), d), {}));
    }
    return c = mu(e, u, t, n, r, true), c;
  }
  function mu(e, t, n = {}, r, o, i) {
    let s;
    const a = Vt({
      actions: {}
    }, n), c = {
      deep: true
    };
    let u, l, d = [], g = [], p;
    const m = r.state.value[e];
    !i && !m && (r.state.value[e] = {}), Je({});
    let b;
    function C(W) {
      let x;
      u = l = false, typeof W == "function" ? (W(r.state.value[e]), x = {
        type: Er.patchFunction,
        storeId: e,
        events: p
      }) : (es(r.state.value[e], W), x = {
        type: Er.patchObject,
        payload: W,
        storeId: e,
        events: p
      });
      const $ = b = Symbol();
      Vc().then(() => {
        b === $ && (u = true);
      }), l = true, Rn(d, x, r.state.value[e]);
    }
    const O = i ? function() {
      const { state: x } = n, $ = x ? x() : {};
      this.$patch((Z) => {
        Vt(Z, $);
      });
    } : gu;
    function A() {
      s.stop(), d = [], g = [], r._s.delete(e);
    }
    const M = (W, x = "") => {
      if (fc in W) return W[Oi] = x, W;
      const $ = function() {
        Ko(r);
        const Z = Array.from(arguments), j = [], ie = [];
        function Ae(Q) {
          j.push(Q);
        }
        function et(Q) {
          ie.push(Q);
        }
        Rn(g, {
          args: Z,
          name: $[Oi],
          store: G,
          after: Ae,
          onError: et
        });
        let pe;
        try {
          pe = W.apply(this && this.$id === e ? this : G, Z);
        } catch (Q) {
          throw Rn(ie, Q), Q;
        }
        return pe instanceof Promise ? pe.then((Q) => (Rn(j, Q), Q)).catch((Q) => (Rn(ie, Q), Promise.reject(Q))) : (Rn(j, pe), pe);
      };
      return $[fc] = true, $[Oi] = x, $;
    }, I = {
      _p: r,
      $id: e,
      $onAction: uc.bind(null, g),
      $patch: C,
      $reset: O,
      $subscribe(W, x = {}) {
        const $ = uc(d, W, x.detached, () => Z()), Z = s.run(() => xn(() => r.state.value[e], (j) => {
          (x.flush === "sync" ? l : u) && W({
            storeId: e,
            type: Er.direct,
            events: p
          }, j);
        }, Vt({}, c, x)));
        return $;
      },
      $dispose: A
    }, G = Mo(I);
    r._s.set(e, G);
    const X = (r._a && r._a.runWithContext || nw)(() => r._e.run(() => (s = Ic()).run(() => t({
      action: M
    }))));
    for (const W in X) {
      const x = X[W];
      if (be(x) && !iw(x) || Qt(x)) i || (m && ow(x) && (be(x) ? x.value = m[W] : es(x, m[W])), r.state.value[e][W] = x);
      else if (typeof x == "function") {
        const $ = M(x, W);
        X[W] = $, a.actions[W] = x;
      }
    }
    return Vt(G, X), Vt(te(G), X), Object.defineProperty(G, "$state", {
      get: () => r.state.value[e],
      set: (W) => {
        C((x) => {
          Vt(x, W);
        });
      }
    }), r._p.forEach((W) => {
      Vt(G, s.run(() => W({
        store: G,
        app: r._a,
        pinia: r,
        options: a
      })));
    }), m && i && n.hydrate && n.hydrate(G.$state, m), u = true, l = true, G;
  }
  $w = function(e, t, n) {
    let r;
    const o = typeof t == "function";
    r = o ? n : t;
    function i(s, a) {
      const c = Gf();
      return s = s || (c ? wr(hu, null) : null), s && Ko(s), s = du, s._s.has(e) || (o ? mu(e, t, r, s) : sw(e, r, s)), s._s.get(e);
    }
    return i.$id = e, i;
  };
  let dc, aw, cw, lw, uw, fw, dw, hw, pw, gw, mw, yw, ww, bw, vw, Ew, Ls;
  dc = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a2;
        const e = Ul((await hi(async () => {
          const { default: n } = await import("./App-cZukATjX.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3]), import.meta.url)).default);
        e.use(pu()), e.use((await hi(async () => {
          const { default: n } = await import("./index-Cv7ObHZn.js");
          return {
            default: n
          };
        }, __vite__mapDeps([4,2,1,5]), import.meta.url)).default), e.use((await hi(async () => {
          const { i18n: n } = await import("./index-BG-dcj_z.js");
          return {
            i18n: n
          };
        }, __vite__mapDeps([6,2]), import.meta.url)).i18n), window.splashScreen && window.splashScreen.unmount(), (_a2 = document.getElementById("splash")) == null ? void 0 : _a2.remove();
        const t = document.getElementById("app");
        t && (t.style.display = "inherit"), e.mount("#app");
      },
      dependencies: [
        "platform-services",
        "geolocation"
      ]
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        try {
          console.time("Platform services initialise");
          const e = Zi();
          if (e.isErr()) throw e.error;
          const n = e.value.getStorage();
          if (n.isErr()) throw n.error;
          const r = await n.value.init();
          if (r.isErr()) throw r.error;
          console.timeEnd("Platform services initialise"), console.info("[Platform] Platform services initialized successfully");
        } catch (e) {
          return console.error("[Platform] Failed to initialize platform services:", e), Promise.reject(e);
        }
      },
      dependencies: []
    },
    {
      name: "geolocation",
      displayName: "Geolocation Service",
      moduleInit: async () => {
        try {
          if (!Zi()) throw new Error("Platform services not initialized");
          const t = new tw();
          console.time("Geolocation service initialise"), await t.initialize(async (n) => Jy() ? void 0 : confirm(n === "prompt" ? "Later your browser will request permission to access your location." : "This app requires access to your location to track your movements.")), console.timeEnd("Geolocation service initialise"), console.time("Geolocation service start"), await t.startLocationUpdates((n) => {
            console.log(`[Geolocation] Location updated: ${n.latitude}, ${n.longitude}`);
          }), console.timeEnd("Geolocation service start"), window.GeolocationManager = t, console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
        } catch (e) {
          return console.error("[Geolocation] Failed to initialize geolocation service:", e), Promise.reject(e);
        }
      },
      dependencies: [
        "platform-services"
      ]
    }
  ];
  Bw = wy;
  Vw = yy;
  aw = {
    class: "splash-container"
  };
  cw = {
    class: "splash-content"
  };
  lw = {
    key: 0,
    class: "loading-section"
  };
  uw = {
    class: "progress-container"
  };
  fw = {
    class: "progress-bar"
  };
  dw = {
    class: "progress-text"
  };
  hw = {
    class: "loading-details"
  };
  pw = {
    class: "current-module"
  };
  gw = {
    key: 1,
    class: "error-section"
  };
  mw = {
    class: "error-message"
  };
  yw = {
    key: 0
  };
  ww = {
    key: 1
  };
  bw = {
    key: 2,
    class: "timeout-section"
  };
  vw = bf({
    __name: "SplashScreen",
    setup(e) {
      const t = Je(0), n = Je("Initializing..."), r = Je(""), o = Je(0), i = Je(0), s = Je(false), a = Je(false), c = Je(""), u = Je("light"), l = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? u.value = "dark" : u.value = "light";
        } catch {
          u.value = "light";
        }
      }, d = () => {
        u.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", u.value);
      }, g = Es(() => Math.round(t.value / 100 * 100)), p = {
        info: (...C) => {
          const O = C.join(" ");
          console.info(O), n.value = String(O);
        },
        warn: (...C) => {
          const O = C.join(" ");
          console.warn(O), n.value = String(O);
        },
        error: (...C) => {
          const O = C.join(" ");
          console.error(O), n.value = String(O), c.value = String(O);
        },
        debug: (...C) => {
          console.debug(...C);
        }
      }, m = {
        onModuleStart: (C) => {
          r.value = C, n.value = `Loading ${C}...`;
        },
        onModuleComplete: (C) => {
          i.value++, t.value = Math.min(100, i.value / o.value * 100), n.value = `Loaded ${C}`;
        },
        onModuleError: (C, O) => {
          n.value = `Failed to load ${C}`, c.value = O.message;
        },
        onOverallProgress: (C, O) => {
          o.value = O, i.value = C, t.value = Math.min(100, C / O * 100);
        }
      }, b = () => {
        window.location.reload();
      };
      return xr(() => {
        var _a2;
        l(), d(), (_a2 = document.getElementById("pre-splash")) == null ? void 0 : _a2.remove();
        const C = (O, A = /* @__PURE__ */ new Set()) => {
          if (A.has(O)) return 0;
          A.add(O);
          const M = dc.find((G) => G.name === O);
          if (!M) return 0;
          let I = 1;
          if (M.dependencies) for (const G of M.dependencies) I += C(G, A);
          return I;
        };
        o.value = C("trackmaker"), console.log("=== Start Loading Modules ==="), ou(dc, "trackmaker", 3e4, {
          logger: p,
          progressReporter: m,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", r.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((O) => {
          const A = String(O.toString());
          if (A.toLowerCase().includes("timeout")) {
            const M = A.split("Trackback").map((I) => I.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(M.map((I) => ({
              Trackback: I
            })), [
              "Trackback"
            ]), a.value = true;
          } else c.value = A, s.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(O);
        });
      }), (C, O) => (nt(), Gt("div", aw, [
        ge("div", cw, [
          O[7] || (O[7] = ge("div", {
            class: "logo-section"
          }, [
            ge("div", {
              class: "app-logo"
            }, [
              ge("img", {
                src: rh,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            ge("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !s.value && !a.value ? (nt(), Gt("div", lw, [
            ge("div", uw, [
              ge("div", fw, [
                ge("div", {
                  class: "progress-fill",
                  style: ko({
                    width: `${g.value}%`
                  })
                }, null, 4)
              ]),
              ge("div", dw, ir(g.value) + "% ", 1)
            ]),
            ge("div", hw, [
              ge("p", pw, " Loading: " + ir(r.value), 1)
            ]),
            O[0] || (O[0] = ge("div", {
              class: "loading-animation"
            }, [
              ge("div", {
                class: "spinner"
              })
            ], -1))
          ])) : si("", true),
          s.value ? (nt(), Gt("div", gw, [
            O[1] || (O[1] = ge("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            O[2] || (O[2] = ge("h2", null, "Loading Error", -1)),
            ge("div", mw, [
              (nt(true), Gt(ke, null, Lf((c.value ?? "").split(`
`), (A) => (nt(), Gt("div", {
                key: A,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                A.toLocaleLowerCase().includes("trackback") ? (nt(), Gt("strong", yw, ir(A), 1)) : (nt(), Gt("span", ww, ir(A), 1))
              ]))), 128))
            ]),
            ge("button", {
              class: "retry-button",
              onClick: b
            }, " Retry ")
          ])) : si("", true),
          a.value ? (nt(), Gt("div", bw, [
            O[3] || (O[3] = ge("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            O[4] || (O[4] = ge("h2", null, "Connection Timeout", -1)),
            O[5] || (O[5] = ge("p", null, "Unable to load required modules within the timeout period.", -1)),
            O[6] || (O[6] = ge("p", null, "Please check your internet connection and try again.", -1)),
            ge("button", {
              class: "retry-button",
              onClick: b
            }, " Retry ")
          ])) : si("", true)
        ])
      ]));
    }
  });
  Tw = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
  Ew = Tw(vw, [
    [
      "__scopeId",
      "data-v-5254237a"
    ]
  ]);
  Ls = Ul(Ew);
  Ls.use(pu());
  Ls.mount("#splash");
  window.splashScreen = Ls;
})();
export {
  Bn as $,
  ir as A,
  Mw as B,
  Di as C,
  Nw as D,
  It as E,
  ke as F,
  on as G,
  Bo as H,
  Dw as I,
  rn as J,
  Rw as K,
  Tf as L,
  Ef as M,
  Fw as N,
  Vc as O,
  Ow as P,
  _e as Q,
  Dt as R,
  sf as S,
  _w as T,
  ko as U,
  Uw as V,
  ds as W,
  ef as X,
  be as Y,
  Io as Z,
  Tw as _,
  __tla,
  ge as a,
  Mr as a0,
  H as a1,
  L as a2,
  $w as a3,
  Cw as a4,
  xw as a5,
  Pw as a6,
  Lw as a7,
  Lf as a8,
  jw as a9,
  Gw as aa,
  Bw as ab,
  Vw as ac,
  hi as ad,
  Jy as ae,
  Qu as af,
  Fn as ag,
  Wo as ah,
  Zi as ai,
  Ac as aj,
  ku as ak,
  Gf as al,
  Aw as am,
  Mt as an,
  Ww as ao,
  Ic as ap,
  Je as b,
  Gt as c,
  bf as d,
  Af as e,
  ms as f,
  Mo as g,
  Ed as h,
  wr as i,
  Es as j,
  xr as k,
  ys as l,
  hd as m,
  is as n,
  nt as o,
  jf as p,
  xn as q,
  Uc as r,
  Ye as s,
  Sw as t,
  Hw as u,
  Gc as v,
  kw as w,
  si as x,
  gf as y,
  dd as z
};
