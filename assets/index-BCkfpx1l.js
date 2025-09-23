const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-BnHXkGSX.js","./platform-ICJpkdTC.js","./vue-i18n-DoTloKBc.js","./App-jBe8gYQr.css","./index-D3fVtwWd.js","./index-7UCAB84i.css","./index-BI4E3Xym.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let jr, cr, gb, zi, lb, Zo, ke, At, pb, on, Bf, cb, Vf, mb, cl, ib, Re, Dt, Pf, Wo, sb, yb, Es, If, ve, Po, Yn, eb, me, H, L, Tb, Eb, fb, hb, ab, ub, ed, bb, Ug, im, Rg, iu, Sm, Ef, jn, Jo, ls, Wc, nf, ud, rb, Ft, _b, jc, Ib, vb, Ab, Sb, _i, vy, It, sn, Gn, rn, Ca, rp, sp, cp, np, ks, au, zp, Sn, xt, vu, Xp, su, pp, Oo, fu, Xe, Gt, Gf, Yf, Os, Bo, Vd, Tr, xs, Hr, Rs, Dd, ms, rt, ld, Fn, nl, Ye, ob, wb, ol, db, pi, Hf, Md;
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
  function ds(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const re = {}, kn = [], st = () => {
  }, Nc = () => false, Fo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hs = (e) => e.startsWith("onUpdate:"), Te = Object.assign, ps = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Gu = Object.prototype.hasOwnProperty, oe = (e, t) => Gu.call(e, t), V = Array.isArray, Mn = (e) => Dr(e) === "[object Map]", Lc = (e) => Dr(e) === "[object Set]", $u = (e) => Dr(e) === "[object RegExp]", Y = (e) => typeof e == "function", ye = (e) => typeof e == "string", Ht = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", Cc = (e) => (de(e) || Y(e)) && Y(e.then) && Y(e.catch), xc = Object.prototype.toString, Dr = (e) => xc.call(e), Bu = (e) => Dr(e).slice(8, -1), kc = (e) => Dr(e) === "[object Object]", gs = (e) => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gr = ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ho = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Vu = /-\w/g, qe = Ho((e) => e.replace(Vu, (t) => t.slice(1).toUpperCase())), zu = /\B([A-Z])/g, Ut = Ho((e) => e.replace(zu, "-$1").toLowerCase()), Uo = Ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), ii = Ho((e) => e ? `on${Uo(e)}` : ""), Be = (e, t) => !Object.is(e, t), mr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, Mc = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  }, Yu = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, qu = (e) => {
    const t = ye(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let qs;
  const jo = () => qs || (qs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  Wo = function(e) {
    if (V(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], o = ye(r) ? Zu(r) : Wo(r);
        if (o) for (const i in o) t[i] = o[i];
      }
      return t;
    } else if (ye(e) || de(e)) return e;
  };
  const Ku = /;(?![^(]*\))/g, Ju = /:([^]+)/, Xu = /\/\*[^]*?\*\//g;
  function Zu(e) {
    const t = {};
    return e.replace(Xu, "").split(Ku).forEach((n) => {
      if (n) {
        const r = n.split(Ju);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  ms = function(e) {
    let t = "";
    if (ye(e)) t = e;
    else if (V(e)) for (let n = 0; n < e.length; n++) {
      const r = ms(e[n]);
      r && (t += r + " ");
    }
    else if (de(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const Qu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ef = ds(Qu);
  function Dc(e) {
    return !!e || e === "";
  }
  let Fc, Hc, si;
  Fc = (e) => !!(e && e.__v_isRef === true);
  cr = (e) => ye(e) ? e : e == null ? "" : V(e) || de(e) && (e.toString === xc || !Y(e.toString)) ? Fc(e) ? cr(e.value) : JSON.stringify(e, Hc, 2) : String(e);
  Hc = (e, t) => Fc(t) ? Hc(e, t.value) : Mn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, o], i) => (n[si(r, i) + " =>"] = o, n), {})
  } : Lc(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => si(n))
  } : Ht(t) ? si(t) : de(t) && !V(t) && !kc(t) ? String(t) : t;
  si = (e, t = "") => {
    var n;
    return Ht(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function tf(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let Le;
  class Uc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Le, !t && Le && (this.index = (Le.scopes || (Le.scopes = [])).push(this) - 1);
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
        const n = Le;
        try {
          return Le = this, t();
        } finally {
          Le = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Le, Le = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Le = this.prevScope, this.prevScope = void 0);
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
  jc = function(e) {
    return new Uc(e);
  };
  Wc = function() {
    return Le;
  };
  nf = function(e, t = false) {
    Le && Le.cleanups.push(e);
  };
  let fe;
  const ai = /* @__PURE__ */ new WeakSet();
  class Gc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Le && Le.active && Le.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, ai.has(this) && (ai.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ks(this), Vc(this);
      const t = fe, n = at;
      fe = this, at = true;
      try {
        return this.fn();
      } finally {
        zc(this), fe = t, at = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) bs(t);
        this.deps = this.depsTail = void 0, Ks(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? ai.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Hi(this) && this.run();
    }
    get dirty() {
      return Hi(this);
    }
  }
  let $c = 0, wr, yr;
  function Bc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = yr, yr = e;
      return;
    }
    e.next = wr, wr = e;
  }
  function ws() {
    $c++;
  }
  function ys() {
    if (--$c > 0) return;
    if (yr) {
      let t = yr;
      for (yr = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; wr; ) {
      let t = wr;
      for (wr = void 0; t; ) {
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
  function Vc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function zc(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), bs(r), rf(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
    }
    e.deps = t, e.depsTail = n;
  }
  function Hi(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Yc(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Yc(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Or) || (e.globalVersion = Or, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Hi(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = fe, r = at;
    fe = e, at = true;
    try {
      Vc(e);
      const o = e.fn(e._value);
      (t.version === 0 || Be(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
    } catch (o) {
      throw t.version++, o;
    } finally {
      fe = n, at = r, zc(e), e.flags &= -3;
    }
  }
  function bs(e, t = false) {
    const { dep: n, prevSub: r, nextSub: o } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep) bs(i, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function rf(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let at = true;
  const qc = [];
  function kt() {
    qc.push(at), at = false;
  }
  function Mt() {
    const e = qc.pop();
    at = e === void 0 ? true : e;
  }
  function Ks(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = fe;
      fe = void 0;
      try {
        t();
      } finally {
        fe = n;
      }
    }
  }
  let Or = 0;
  class of {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Go {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!fe || !at || fe === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== fe) n = this.activeLink = new of(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, Kc(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, Or++, this.notify(t);
    }
    notify(t) {
      ws();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        ys();
      }
    }
  }
  function Kc(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Kc(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const fo = /* @__PURE__ */ new WeakMap(), vn = Symbol(""), Ui = Symbol(""), Rr = Symbol("");
  function xe(e, t, n) {
    if (at && fe) {
      let r = fo.get(e);
      r || fo.set(e, r = /* @__PURE__ */ new Map());
      let o = r.get(n);
      o || (r.set(n, o = new Go()), o.map = r, o.key = n), o.track();
    }
  }
  function Pt(e, t, n, r, o, i) {
    const s = fo.get(e);
    if (!s) {
      Or++;
      return;
    }
    const a = (c) => {
      c && c.trigger();
    };
    if (ws(), t === "clear") s.forEach(a);
    else {
      const c = V(e), u = c && gs(n);
      if (c && n === "length") {
        const l = Number(r);
        s.forEach((d, p) => {
          (p === "length" || p === Rr || !Ht(p) && p >= l) && a(d);
        });
      } else switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(Rr)), t) {
        case "add":
          c ? u && a(s.get("length")) : (a(s.get(vn)), Mn(e) && a(s.get(Ui)));
          break;
        case "delete":
          c || (a(s.get(vn)), Mn(e) && a(s.get(Ui)));
          break;
        case "set":
          Mn(e) && a(s.get(vn));
          break;
      }
    }
    ys();
  }
  function sf(e, t) {
    const n = fo.get(e);
    return n && n.get(t);
  }
  function On(e) {
    const t = ne(e);
    return t === e ? t : (xe(t, "iterate", Rr), et(e) ? t : t.map(Oe));
  }
  function $o(e) {
    return xe(e = ne(e), "iterate", Rr), e;
  }
  const af = {
    __proto__: null,
    [Symbol.iterator]() {
      return ci(this, Symbol.iterator, Oe);
    },
    concat(...e) {
      return On(this).concat(...e.map((t) => V(t) ? On(t) : t));
    },
    entries() {
      return ci(this, "entries", (e) => (e[1] = Oe(e[1]), e));
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
      return li(this, "includes", e);
    },
    indexOf(...e) {
      return li(this, "indexOf", e);
    },
    join(e) {
      return On(this).join(e);
    },
    lastIndexOf(...e) {
      return li(this, "lastIndexOf", e);
    },
    map(e, t) {
      return St(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Zn(this, "pop");
    },
    push(...e) {
      return Zn(this, "push", e);
    },
    reduce(e, ...t) {
      return Js(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Js(this, "reduceRight", e, t);
    },
    shift() {
      return Zn(this, "shift");
    },
    some(e, t) {
      return St(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Zn(this, "splice", e);
    },
    toReversed() {
      return On(this).toReversed();
    },
    toSorted(e) {
      return On(this).toSorted(e);
    },
    toSpliced(...e) {
      return On(this).toSpliced(...e);
    },
    unshift(...e) {
      return Zn(this, "unshift", e);
    },
    values() {
      return ci(this, "values", Oe);
    }
  };
  function ci(e, t, n) {
    const r = $o(e), o = r[t]();
    return r !== e && !et(e) && (o._next = o.next, o.next = () => {
      const i = o._next();
      return i.value && (i.value = n(i.value)), i;
    }), o;
  }
  const cf = Array.prototype;
  function St(e, t, n, r, o, i) {
    const s = $o(e), a = s !== e && !et(e), c = s[t];
    if (c !== cf[t]) {
      const d = c.apply(e, i);
      return a ? Oe(d) : d;
    }
    let u = n;
    s !== e && (a ? u = function(d, p) {
      return n.call(this, Oe(d), p, e);
    } : n.length > 2 && (u = function(d, p) {
      return n.call(this, d, p, e);
    }));
    const l = c.call(s, u, r);
    return a && o ? o(l) : l;
  }
  function Js(e, t, n, r) {
    const o = $o(e);
    let i = n;
    return o !== e && (et(e) ? n.length > 3 && (i = function(s, a, c) {
      return n.call(this, s, a, c, e);
    }) : i = function(s, a, c) {
      return n.call(this, s, Oe(a), c, e);
    }), o[t](i, ...r);
  }
  function li(e, t, n) {
    const r = ne(e);
    xe(r, "iterate", Rr);
    const o = r[t](...n);
    return (o === -1 || o === false) && Ts(n[0]) ? (n[0] = ne(n[0]), r[t](...n)) : o;
  }
  function Zn(e, t, n = []) {
    kt(), ws();
    const r = ne(e)[t].apply(e, n);
    return ys(), Mt(), r;
  }
  const lf = ds("__proto__,__v_isRef,__isVue"), Jc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ht));
  function uf(e) {
    Ht(e) || (e = String(e));
    const t = ne(this);
    return xe(t, "has", e), t.hasOwnProperty(e);
  }
  class Xc {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const o = this._isReadonly, i = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw") return r === (o ? i ? vf : tl : i ? el : Qc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const s = V(t);
      if (!o) {
        let c;
        if (s && (c = af[n])) return c;
        if (n === "hasOwnProperty") return uf;
      }
      const a = Reflect.get(t, n, ve(t) ? t : r);
      return (Ht(n) ? Jc.has(n) : lf(n)) || (o || xe(t, "get", n), i) ? a : ve(a) ? s && gs(n) ? a : a.value : de(a) ? o ? nl(a) : Bo(a) : a;
    }
  }
  class Zc extends Xc {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, o) {
      let i = t[n];
      if (!this._isShallow) {
        const c = tn(i);
        if (!et(r) && !tn(r) && (i = ne(i), r = ne(r)), !V(t) && ve(i) && !ve(r)) return c || (i.value = r), true;
      }
      const s = V(t) && gs(n) ? Number(n) < t.length : oe(t, n), a = Reflect.set(t, n, r, ve(t) ? t : o);
      return t === ne(o) && (s ? Be(r, i) && Pt(t, "set", n, r) : Pt(t, "add", n, r)), a;
    }
    deleteProperty(t, n) {
      const r = oe(t, n);
      t[n];
      const o = Reflect.deleteProperty(t, n);
      return o && r && Pt(t, "delete", n, void 0), o;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!Ht(n) || !Jc.has(n)) && xe(t, "has", n), r;
    }
    ownKeys(t) {
      return xe(t, "iterate", V(t) ? "length" : vn), Reflect.ownKeys(t);
    }
  }
  class ff extends Xc {
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
  const df = new Zc(), hf = new ff(), pf = new Zc(true);
  const ji = (e) => e, $r = (e) => Reflect.getPrototypeOf(e);
  function gf(e, t, n) {
    return function(...r) {
      const o = this.__v_raw, i = ne(o), s = Mn(i), a = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, u = o[e](...r), l = n ? ji : t ? ho : Oe;
      return !t && xe(i, "iterate", c ? Ui : vn), {
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
  function Br(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function mf(e, t) {
    const n = {
      get(o) {
        const i = this.__v_raw, s = ne(i), a = ne(o);
        e || (Be(o, a) && xe(s, "get", o), xe(s, "get", a));
        const { has: c } = $r(s), u = t ? ji : e ? ho : Oe;
        if (c.call(s, o)) return u(i.get(o));
        if (c.call(s, a)) return u(i.get(a));
        i !== s && i.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !e && xe(ne(o), "iterate", vn), o.size;
      },
      has(o) {
        const i = this.__v_raw, s = ne(i), a = ne(o);
        return e || (Be(o, a) && xe(s, "has", o), xe(s, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a);
      },
      forEach(o, i) {
        const s = this, a = s.__v_raw, c = ne(a), u = t ? ji : e ? ho : Oe;
        return !e && xe(c, "iterate", vn), a.forEach((l, d) => o.call(i, u(l), u(d), s));
      }
    };
    return Te(n, e ? {
      add: Br("add"),
      set: Br("set"),
      delete: Br("delete"),
      clear: Br("clear")
    } : {
      add(o) {
        !t && !et(o) && !tn(o) && (o = ne(o));
        const i = ne(this);
        return $r(i).has.call(i, o) || (i.add(o), Pt(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !et(i) && !tn(i) && (i = ne(i));
        const s = ne(this), { has: a, get: c } = $r(s);
        let u = a.call(s, o);
        u || (o = ne(o), u = a.call(s, o));
        const l = c.call(s, o);
        return s.set(o, i), u ? Be(i, l) && Pt(s, "set", o, i) : Pt(s, "add", o, i), this;
      },
      delete(o) {
        const i = ne(this), { has: s, get: a } = $r(i);
        let c = s.call(i, o);
        c || (o = ne(o), c = s.call(i, o)), a && a.call(i, o);
        const u = i.delete(o);
        return c && Pt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = ne(this), i = o.size !== 0, s = o.clear();
        return i && Pt(o, "clear", void 0, void 0), s;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((o) => {
      n[o] = gf(o, e, t);
    }), n;
  }
  function vs(e, t) {
    const n = mf(e, t);
    return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(oe(n, o) && o in r ? n : r, o, i);
  }
  const wf = {
    get: vs(false, false)
  }, yf = {
    get: vs(false, true)
  }, bf = {
    get: vs(true, false)
  };
  const Qc = /* @__PURE__ */ new WeakMap(), el = /* @__PURE__ */ new WeakMap(), tl = /* @__PURE__ */ new WeakMap(), vf = /* @__PURE__ */ new WeakMap();
  function _f(e) {
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
    return e.__v_skip || !Object.isExtensible(e) ? 0 : _f(Bu(e));
  }
  Bo = function(e) {
    return tn(e) ? e : _s(e, false, df, wf, Qc);
  };
  Ef = function(e) {
    return _s(e, false, pf, yf, el);
  };
  nl = function(e) {
    return _s(e, true, hf, bf, tl);
  };
  function _s(e, t, n, r, o) {
    if (!de(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = Tf(e);
    if (i === 0) return e;
    const s = o.get(e);
    if (s) return s;
    const a = new Proxy(e, i === 2 ? r : n);
    return o.set(e, a), a;
  }
  function en(e) {
    return tn(e) ? en(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function tn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function et(e) {
    return !!(e && e.__v_isShallow);
  }
  function Ts(e) {
    return e ? !!e.__v_raw : false;
  }
  function ne(e) {
    const t = e && e.__v_raw;
    return t ? ne(t) : e;
  }
  Es = function(e) {
    return !oe(e, "__v_skip") && Object.isExtensible(e) && Mc(e, "__v_skip", true), e;
  };
  const Oe = (e) => de(e) ? Bo(e) : e, ho = (e) => de(e) ? nl(e) : e;
  ve = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Xe = function(e) {
    return rl(e, false);
  };
  If = function(e) {
    return rl(e, true);
  };
  function rl(e, t) {
    return ve(e) ? e : new Af(e, t);
  }
  class Af {
    constructor(t, n) {
      this.dep = new Go(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ne(t), this._value = n ? t : Oe(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || et(t) || tn(t);
      t = r ? t : ne(t), Be(t, n) && (this._rawValue = t, this._value = r ? t : Oe(t), this.dep.trigger());
    }
  }
  ol = function(e) {
    return ve(e) ? e.value : e;
  };
  rb = function(e) {
    return Y(e) ? e() : ol(e);
  };
  const Sf = {
    get: (e, t, n) => t === "__v_raw" ? e : ol(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const o = e[t];
      return ve(o) && !ve(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function il(e) {
    return en(e) ? e : new Proxy(e, Sf);
  }
  class Of {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new Go(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = o;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Rf(e) {
    return new Of(e);
  }
  Pf = function(e) {
    const t = V(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = sl(e, n);
    return t;
  };
  class Nf {
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
      return sf(ne(this._object), this._key);
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
  ob = function(e, t, n) {
    return ve(e) ? e : Y(e) ? new Lf(e) : de(e) && arguments.length > 1 ? sl(e, t, n) : Xe(e);
  };
  function sl(e, t, n) {
    const r = e[t];
    return ve(r) ? r : new Nf(e, t, n);
  }
  class Cf {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Go(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Or - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && fe !== this) return Bc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Yc(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function xf(e, t, n = false) {
    let r, o;
    return Y(e) ? r = e : (r = e.get, o = e.set), new Cf(r, o, n);
  }
  const Vr = {}, po = /* @__PURE__ */ new WeakMap();
  let gn;
  function kf(e, t = false, n = gn) {
    if (n) {
      let r = po.get(n);
      r || po.set(n, r = []), r.push(e);
    }
  }
  function Mf(e, t, n = re) {
    const { immediate: r, deep: o, once: i, scheduler: s, augmentJob: a, call: c } = n, u = (E) => o ? E : et(E) || o === false || o === 0 ? Nt(E, 1) : Nt(E);
    let l, d, p, g, m = false, b = false;
    if (ve(e) ? (d = () => e.value, m = et(e)) : en(e) ? (d = () => u(e), m = true) : V(e) ? (b = true, m = e.some((E) => en(E) || et(E)), d = () => e.map((E) => {
      if (ve(E)) return E.value;
      if (en(E)) return u(E);
      if (Y(E)) return c ? c(E, 2) : E();
    })) : Y(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
      if (p) {
        kt();
        try {
          p();
        } finally {
          Mt();
        }
      }
      const E = gn;
      gn = l;
      try {
        return c ? c(e, 3, [
          g
        ]) : e(g);
      } finally {
        gn = E;
      }
    } : d = st, t && o) {
      const E = d, W = o === true ? 1 / 0 : o;
      d = () => Nt(E(), W);
    }
    const C = Wc(), S = () => {
      l.stop(), C && C.active && ps(C.effects, l);
    };
    if (i && t) {
      const E = t;
      t = (...W) => {
        E(...W), S();
      };
    }
    let I = b ? new Array(e.length).fill(Vr) : Vr;
    const D = (E) => {
      if (!(!(l.flags & 1) || !l.dirty && !E)) if (t) {
        const W = l.run();
        if (o || m || (b ? W.some((X, Z) => Be(X, I[Z])) : Be(W, I))) {
          p && p();
          const X = gn;
          gn = l;
          try {
            const Z = [
              W,
              I === Vr ? void 0 : b && I[0] === Vr ? [] : I,
              g
            ];
            I = W, c ? c(t, 3, Z) : t(...Z);
          } finally {
            gn = X;
          }
        }
      } else l.run();
    };
    return a && a(D), l = new Gc(d), l.scheduler = s ? () => s(D, false) : D, g = (E) => kf(E, false, l), p = l.onStop = () => {
      const E = po.get(l);
      if (E) {
        if (c) c(E, 4);
        else for (const W of E) W();
        po.delete(l);
      }
    }, t ? r ? D(true) : I = l.run() : s ? s(D.bind(null, true), true) : l.run(), S.pause = l.pause.bind(l), S.resume = l.resume.bind(l), S.stop = S, S;
  }
  function Nt(e, t = 1 / 0, n) {
    if (t <= 0 || !de(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, ve(e)) Nt(e.value, t, n);
    else if (V(e)) for (let r = 0; r < e.length; r++) Nt(e[r], t, n);
    else if (Lc(e) || Mn(e)) e.forEach((r) => {
      Nt(r, t, n);
    });
    else if (kc(e)) {
      for (const r in e) Nt(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Nt(e[r], t, n);
    }
    return e;
  }
  function Fr(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (o) {
      Vo(o, t, n);
    }
  }
  function ct(e, t, n, r) {
    if (Y(e)) {
      const o = Fr(e, t, n, r);
      return o && Cc(o) && o.catch((i) => {
        Vo(i, t, n);
      }), o;
    }
    if (V(e)) {
      const o = [];
      for (let i = 0; i < e.length; i++) o.push(ct(e[i], t, n, r));
      return o;
    }
  }
  function Vo(e, t, n, r = true) {
    const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || re;
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
        kt(), Fr(i, null, 10, [
          e,
          c,
          u
        ]), Mt();
        return;
      }
    }
    Df(e, n, o, r, s);
  }
  function Df(e, t, n, r = true, o = false) {
    if (o) throw e;
    console.error(e);
  }
  const Fe = [];
  let yt = -1;
  const Dn = [];
  let Yt = null, xn = 0;
  const al = Promise.resolve();
  let go = null;
  cl = function(e) {
    const t = go || al;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Ff(e) {
    let t = yt + 1, n = Fe.length;
    for (; t < n; ) {
      const r = t + n >>> 1, o = Fe[r], i = Pr(o);
      i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function Is(e) {
    if (!(e.flags & 1)) {
      const t = Pr(e), n = Fe[Fe.length - 1];
      !n || !(e.flags & 2) && t >= Pr(n) ? Fe.push(e) : Fe.splice(Ff(t), 0, e), e.flags |= 1, ll();
    }
  }
  function ll() {
    go || (go = al.then(dl));
  }
  function ul(e) {
    V(e) ? Dn.push(...e) : Yt && e.id === -1 ? Yt.splice(xn + 1, 0, e) : e.flags & 1 || (Dn.push(e), e.flags |= 1), ll();
  }
  function Xs(e, t, n = yt + 1) {
    for (; n < Fe.length; n++) {
      const r = Fe[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Fe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function fl(e) {
    if (Dn.length) {
      const t = [
        ...new Set(Dn)
      ].sort((n, r) => Pr(n) - Pr(r));
      if (Dn.length = 0, Yt) {
        Yt.push(...t);
        return;
      }
      for (Yt = t, xn = 0; xn < Yt.length; xn++) {
        const n = Yt[xn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Yt = null, xn = 0;
    }
  }
  const Pr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function dl(e) {
    try {
      for (yt = 0; yt < Fe.length; yt++) {
        const t = Fe[yt];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Fr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; yt < Fe.length; yt++) {
        const t = Fe[yt];
        t && (t.flags &= -2);
      }
      yt = -1, Fe.length = 0, fl(), go = null, (Fe.length || Dn.length) && dl();
    }
  }
  let Pe = null, hl = null;
  function mo(e) {
    const t = Pe;
    return Pe = e, hl = e && e.type.__scopeId || null, t;
  }
  Hf = function(e, t = Pe, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && To(-1);
      const i = mo(t);
      let s;
      try {
        s = e(...o);
      } finally {
        mo(i), r._d && To(1);
      }
      return s;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  ib = function(e, t) {
    if (Pe === null) return e;
    const n = Xo(Pe), r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
      let [i, s, a, c = re] = t[o];
      i && (Y(i) && (i = {
        mounted: i,
        updated: i
      }), i.deep && Nt(s), r.push({
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
  function un(e, t, n, r) {
    const o = e.dirs, i = t && t.dirs;
    for (let s = 0; s < o.length; s++) {
      const a = o[s];
      i && (a.oldValue = i[s].value);
      let c = a.dir[r];
      c && (kt(), ct(c, n, 8, [
        e.el,
        a,
        e,
        t
      ]), Mt());
    }
  }
  const pl = Symbol("_vte"), gl = (e) => e.__isTeleport, br = (e) => e && (e.disabled || e.disabled === ""), Zs = (e) => e && (e.defer || e.defer === ""), Qs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ea = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Wi = (e, t) => {
    const n = e && e.to;
    return ye(n) ? t ? t(n) : null : n;
  }, ml = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, o, i, s, a, c, u) {
      const { mc: l, pc: d, pbc: p, o: { insert: g, querySelector: m, createText: b, createComment: C } } = u, S = br(t.props);
      let { shapeFlag: I, children: D, dynamicChildren: E } = t;
      if (e == null) {
        const W = t.el = b(""), X = t.anchor = b("");
        g(W, n, r), g(X, n, r);
        const Z = (k, $) => {
          I & 16 && (o && o.isCE && (o.ce._teleportTarget = k), l(D, k, $, o, i, s, a, c));
        }, G = () => {
          const k = t.target = Wi(t.props, m), $ = wl(k, t, b, g);
          k && (s !== "svg" && Qs(k) ? s = "svg" : s !== "mathml" && ea(k) && (s = "mathml"), S || (Z(k, $), no(t, false)));
        };
        S && (Z(n, X), no(t, true)), Zs(t.props) ? (t.el.__isMounted = false, Ie(() => {
          G(), delete t.el.__isMounted;
        }, i)) : G();
      } else {
        if (Zs(t.props) && e.el.__isMounted === false) {
          Ie(() => {
            ml.process(e, t, n, r, o, i, s, a, c, u);
          }, i);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const W = t.anchor = e.anchor, X = t.target = e.target, Z = t.targetAnchor = e.targetAnchor, G = br(e.props), k = G ? n : X, $ = G ? W : Z;
        if (s === "svg" || Qs(X) ? s = "svg" : (s === "mathml" || ea(X)) && (s = "mathml"), E ? (p(e.dynamicChildren, E, k, o, i, s, a), Ls(e, t, true)) : c || d(e, t, k, $, o, i, s, a, false), S) G ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : zr(t, n, W, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Q = t.target = Wi(t.props, m);
          Q && zr(t, Q, null, u, 0);
        } else G && zr(t, X, Z, u, 1);
        no(t, S);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, i) {
      const { shapeFlag: s, children: a, anchor: c, targetStart: u, targetAnchor: l, target: d, props: p } = e;
      if (d && (o(u), o(l)), i && o(c), s & 16) {
        const g = i || !br(p);
        for (let m = 0; m < a.length; m++) {
          const b = a[m];
          r(b, t, n, g, !!b.dynamicChildren);
        }
      }
    },
    move: zr,
    hydrate: Uf
  };
  function zr(e, t, n, { o: { insert: r }, m: o }, i = 2) {
    i === 0 && r(e.targetAnchor, t, n);
    const { el: s, anchor: a, shapeFlag: c, children: u, props: l } = e, d = i === 2;
    if (d && r(s, t, n), (!d || br(l)) && c & 16) for (let p = 0; p < u.length; p++) o(u[p], t, n, 2);
    d && r(a, t, n);
  }
  function Uf(e, t, n, r, o, i, { o: { nextSibling: s, parentNode: a, querySelector: c, insert: u, createText: l } }, d) {
    function p(b, C, S, I) {
      C.anchor = d(s(b), C, a(b), n, r, o, i), C.targetStart = S, C.targetAnchor = I;
    }
    const g = t.target = Wi(t.props, c), m = br(t.props);
    if (g) {
      const b = g._lpa || g.firstChild;
      if (t.shapeFlag & 16) if (m) p(e, t, b, b && s(b));
      else {
        t.anchor = s(e);
        let C = b;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor") t.targetStart = C;
            else if (C.data === "teleport anchor") {
              t.targetAnchor = C, g._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          }
          C = s(C);
        }
        t.targetAnchor || wl(g, t, l, u), d(b && s(b), t, g, n, r, o, i);
      }
      no(t, m);
    } else m && t.shapeFlag & 16 && p(e, t, e, s(e));
    return t.anchor && s(t.anchor);
  }
  sb = ml;
  function no(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, o;
      for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function wl(e, t, n, r) {
    const o = t.targetStart = n(""), i = t.targetAnchor = n("");
    return o[pl] = i, e && (r(o, e), r(i, e)), i;
  }
  const Rt = Symbol("_leaveCb"), Yr = Symbol("_enterCb");
  function yl() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Hr(() => {
      e.isMounted = true;
    }), Os(() => {
      e.isUnmounting = true;
    }), e;
  }
  const Ke = [
    Function,
    Array
  ], bl = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Ke,
    onEnter: Ke,
    onAfterEnter: Ke,
    onEnterCancelled: Ke,
    onBeforeLeave: Ke,
    onLeave: Ke,
    onAfterLeave: Ke,
    onLeaveCancelled: Ke,
    onBeforeAppear: Ke,
    onAppear: Ke,
    onAfterAppear: Ke,
    onAppearCancelled: Ke
  }, vl = (e) => {
    const t = e.subTree;
    return t.component ? vl(t.component) : t;
  }, jf = {
    name: "BaseTransition",
    props: bl,
    setup(e, { slots: t }) {
      const n = on(), r = yl();
      return () => {
        const o = t.default && As(t.default(), true);
        if (!o || !o.length) return;
        const i = _l(o), s = ne(e), { mode: a } = s;
        if (r.isLeaving) return ui(i);
        const c = ta(i);
        if (!c) return ui(i);
        let u = Nr(c, s, r, n, (d) => u = d);
        c.type !== Re && nn(c, u);
        let l = n.subTree && ta(n.subTree);
        if (l && l.type !== Re && !Kt(l, c) && vl(n).type !== Re) {
          let d = Nr(l, s, r, n);
          if (nn(l, d), a === "out-in" && c.type !== Re) return r.isLeaving = true, d.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, l = void 0;
          }, ui(i);
          a === "in-out" && c.type !== Re ? d.delayLeave = (p, g, m) => {
            const b = Tl(r, l);
            b[String(l.key)] = l, p[Rt] = () => {
              g(), p[Rt] = void 0, delete u.delayedLeave, l = void 0;
            }, u.delayedLeave = () => {
              m(), delete u.delayedLeave, l = void 0;
            };
          } : l = void 0;
        } else l && (l = void 0);
        return i;
      };
    }
  };
  function _l(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Re) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Wf = jf;
  function Tl(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function Nr(e, t, n, r, o) {
    const { appear: i, mode: s, persisted: a = false, onBeforeEnter: c, onEnter: u, onAfterEnter: l, onEnterCancelled: d, onBeforeLeave: p, onLeave: g, onAfterLeave: m, onLeaveCancelled: b, onBeforeAppear: C, onAppear: S, onAfterAppear: I, onAppearCancelled: D } = t, E = String(e.key), W = Tl(n, e), X = (k, $) => {
      k && ct(k, r, 9, $);
    }, Z = (k, $) => {
      const Q = $[1];
      X(k, $), V(k) ? k.every((j) => j.length <= 1) && Q() : k.length <= 1 && Q();
    }, G = {
      mode: s,
      persisted: a,
      beforeEnter(k) {
        let $ = c;
        if (!n.isMounted) if (i) $ = C || c;
        else return;
        k[Rt] && k[Rt](true);
        const Q = W[E];
        Q && Kt(e, Q) && Q.el[Rt] && Q.el[Rt](), X($, [
          k
        ]);
      },
      enter(k) {
        let $ = u, Q = l, j = d;
        if (!n.isMounted) if (i) $ = S || u, Q = I || l, j = D || d;
        else return;
        let se = false;
        const Ae = k[Yr] = (tt) => {
          se || (se = true, tt ? X(j, [
            k
          ]) : X(Q, [
            k
          ]), G.delayedLeave && G.delayedLeave(), k[Yr] = void 0);
        };
        $ ? Z($, [
          k,
          Ae
        ]) : Ae();
      },
      leave(k, $) {
        const Q = String(e.key);
        if (k[Yr] && k[Yr](true), n.isUnmounting) return $();
        X(p, [
          k
        ]);
        let j = false;
        const se = k[Rt] = (Ae) => {
          j || (j = true, $(), Ae ? X(b, [
            k
          ]) : X(m, [
            k
          ]), k[Rt] = void 0, W[Q] === e && delete W[Q]);
        };
        W[Q] = e, g ? Z(g, [
          k,
          se
        ]) : se();
      },
      clone(k) {
        const $ = Nr(k, t, n, r, o);
        return o && o($), $;
      }
    };
    return G;
  }
  function ui(e) {
    if (zo(e)) return e = Dt(e), e.children = null, e;
  }
  function ta(e) {
    if (!zo(e)) return gl(e.type) && e.children ? _l(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && Y(n.default)) return n.default();
    }
  }
  function nn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, nn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function As(e, t = false, n) {
    let r = [], o = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
      s.type === ke ? (s.patchFlag & 128 && o++, r = r.concat(As(s.children, t, a))) : (t || s.type !== Re) && r.push(a != null ? Dt(s, {
        key: a
      }) : s);
    }
    if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r;
  }
  Gf = function(e, t) {
    return Y(e) ? Te({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function El(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  ab = function(e) {
    const t = on(), n = If(null);
    if (t) {
      const o = t.refs === re ? t.refs = {} : t.refs;
      Object.defineProperty(o, e, {
        enumerable: true,
        get: () => n.value,
        set: (i) => n.value = i
      });
    }
    return n;
  };
  const wo = /* @__PURE__ */ new WeakMap();
  function vr(e, t, n, r, o = false) {
    if (V(e)) {
      e.forEach((m, b) => vr(m, t && (V(t) ? t[b] : t), n, r, o));
      return;
    }
    if (_n(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && vr(e, t, n, r.component.subTree);
      return;
    }
    const i = r.shapeFlag & 4 ? Xo(r.component) : r.el, s = o ? null : i, { i: a, r: c } = e, u = t && t.r, l = a.refs === re ? a.refs = {} : a.refs, d = a.setupState, p = ne(d), g = d === re ? Nc : (m) => oe(p, m);
    if (u != null && u !== c) {
      if (na(t), ye(u)) l[u] = null, g(u) && (d[u] = null);
      else if (ve(u)) {
        u.value = null;
        const m = t;
        m.k && (l[m.k] = null);
      }
    }
    if (Y(c)) Fr(c, a, 12, [
      s,
      l
    ]);
    else {
      const m = ye(c), b = ve(c);
      if (m || b) {
        const C = () => {
          if (e.f) {
            const S = m ? g(c) ? d[c] : l[c] : c.value;
            if (o) V(S) && ps(S, i);
            else if (V(S)) S.includes(i) || S.push(i);
            else if (m) l[c] = [
              i
            ], g(c) && (d[c] = l[c]);
            else {
              const I = [
                i
              ];
              c.value = I, e.k && (l[e.k] = I);
            }
          } else m ? (l[c] = s, g(c) && (d[c] = s)) : b && (c.value = s, e.k && (l[e.k] = s));
        };
        if (s) {
          const S = () => {
            C(), wo.delete(e);
          };
          S.id = -1, wo.set(e, S), Ie(S, n);
        } else na(e), C();
      }
    }
  }
  function na(e) {
    const t = wo.get(e);
    t && (t.flags |= 8, wo.delete(e));
  }
  jo().requestIdleCallback;
  jo().cancelIdleCallback;
  let _n, zo, $f;
  _n = (e) => !!e.type.__asyncLoader;
  zo = (e) => e.type.__isKeepAlive;
  $f = {
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
      const n = on(), r = n.ctx;
      if (!r.renderer) return () => {
        const I = t.default && t.default();
        return I && I.length === 1 ? I[0] : I;
      };
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
      let s = null;
      const a = n.suspense, { renderer: { p: c, m: u, um: l, o: { createElement: d } } } = r, p = d("div");
      r.activate = (I, D, E, W, X) => {
        const Z = I.component;
        u(I, D, E, 0, a), c(Z.vnode, I, D, E, Z, a, W, I.slotScopeIds, X), Ie(() => {
          Z.isDeactivated = false, Z.a && mr(Z.a);
          const G = I.props && I.props.onVnodeMounted;
          G && Je(G, Z.parent, I);
        }, a);
      }, r.deactivate = (I) => {
        const D = I.component;
        vo(D.m), vo(D.a), u(I, p, null, 1, a), Ie(() => {
          D.da && mr(D.da);
          const E = I.props && I.props.onVnodeUnmounted;
          E && Je(E, D.parent, I), D.isDeactivated = true;
        }, a);
      };
      function g(I) {
        fi(I), l(I, n, a, true);
      }
      function m(I) {
        o.forEach((D, E) => {
          const W = qi(D.type);
          W && !I(W) && b(E);
        });
      }
      function b(I) {
        const D = o.get(I);
        D && (!s || !Kt(D, s)) ? g(D) : s && fi(s), o.delete(I), i.delete(I);
      }
      Fn(() => [
        e.include,
        e.exclude
      ], ([I, D]) => {
        I && m((E) => lr(I, E)), D && m((E) => !lr(D, E));
      }, {
        flush: "post",
        deep: true
      });
      let C = null;
      const S = () => {
        C != null && (_o(n.subTree.type) ? Ie(() => {
          o.set(C, qr(n.subTree));
        }, n.subTree.suspense) : o.set(C, qr(n.subTree)));
      };
      return Hr(S), Ss(S), Os(() => {
        o.forEach((I) => {
          const { subTree: D, suspense: E } = n, W = qr(D);
          if (I.type === W.type && I.key === W.key) {
            fi(W);
            const X = W.component.da;
            X && Ie(X, E);
            return;
          }
          g(I);
        });
      }), () => {
        if (C = null, !t.default) return s = null;
        const I = t.default(), D = I[0];
        if (I.length > 1) return s = null, I;
        if (!jn(D) || !(D.shapeFlag & 4) && !(D.shapeFlag & 128)) return s = null, D;
        let E = qr(D);
        if (E.type === Re) return s = null, E;
        const W = E.type, X = qi(_n(E) ? E.type.__asyncResolved || {} : W), { include: Z, exclude: G, max: k } = e;
        if (Z && (!X || !lr(Z, X)) || G && X && lr(G, X)) return E.shapeFlag &= -257, s = E, D;
        const $ = E.key == null ? W : E.key, Q = o.get($);
        return E.el && (E = Dt(E), D.shapeFlag & 128 && (D.ssContent = E)), C = $, Q ? (E.el = Q.el, E.component = Q.component, E.transition && nn(E, E.transition), E.shapeFlag |= 512, i.delete($), i.add($)) : (i.add($), k && i.size > parseInt(k, 10) && b(i.values().next().value)), E.shapeFlag |= 256, s = E, _o(D.type) ? D : E;
      };
    }
  };
  cb = $f;
  function lr(e, t) {
    return V(e) ? e.some((n) => lr(n, t)) : ye(e) ? e.split(",").includes(t) : $u(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  Bf = function(e, t) {
    Il(e, "a", t);
  };
  Vf = function(e, t) {
    Il(e, "da", t);
  };
  function Il(e, t, n = Me) {
    const r = e.__wdc || (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
    if (Yo(t, r, n), n) {
      let o = n.parent;
      for (; o && o.parent; ) zo(o.parent.vnode) && zf(r, t, n, o), o = o.parent;
    }
  }
  function zf(e, t, n, r) {
    const o = Yo(t, e, r, true);
    Rs(() => {
      ps(r[t], o);
    }, n);
  }
  function fi(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function qr(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function Yo(e, t, n = Me, r = false) {
    if (n) {
      const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
        kt();
        const a = Ur(n), c = ct(t, n, e, s);
        return a(), Mt(), c;
      });
      return r ? o.unshift(i) : o.push(i), i;
    }
  }
  let jt, Al, Ss, qf, Kf, Jf;
  jt = (e) => (t, n = Me) => {
    (!Cr || e === "sp") && Yo(e, (...r) => t(...r), n);
  };
  Yf = jt("bm");
  Hr = jt("m");
  Al = jt("bu");
  Ss = jt("u");
  Os = jt("bum");
  Rs = jt("um");
  qf = jt("sp");
  Kf = jt("rtg");
  Jf = jt("rtc");
  function Xf(e, t = Me) {
    Yo("ec", e, t);
  }
  const Zf = "components", Sl = Symbol.for("v-ndc");
  lb = function(e) {
    return ye(e) ? Qf(Zf, e, false) || e : e || Sl;
  };
  function Qf(e, t, n = true, r = false) {
    const o = Pe || Me;
    if (o) {
      const i = o.type;
      {
        const a = qi(i, false);
        if (a && (a === t || a === qe(t) || a === Uo(qe(t)))) return i;
      }
      const s = ra(o[e] || i[e], t) || ra(o.appContext[e], t);
      return !s && r ? i : s;
    }
  }
  function ra(e, t) {
    return e && (e[t] || e[qe(t)] || e[Uo(qe(t))]);
  }
  ed = function(e, t, n, r) {
    let o;
    const i = n, s = V(e);
    if (s || ye(e)) {
      const a = s && en(e);
      let c = false, u = false;
      a && (c = !et(e), u = tn(e), e = $o(e)), o = new Array(e.length);
      for (let l = 0, d = e.length; l < d; l++) o[l] = t(c ? u ? ho(Oe(e[l])) : Oe(e[l]) : e[l], l, void 0, i);
    } else if (typeof e == "number") {
      o = new Array(e);
      for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, i);
    } else if (de(e)) if (e[Symbol.iterator]) o = Array.from(e, (a, c) => t(a, c, void 0, i));
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
  ub = function(e, t, n = {}, r, o) {
    if (Pe.ce || Pe.parent && _n(Pe.parent) && Pe.parent.ce) return t !== "default" && (n.name = t), rt(), zi(ke, null, [
      Ye("slot", n, r && r())
    ], 64);
    let i = e[t];
    i && i._c && (i._d = false), rt();
    const s = i && Ol(i(n)), a = n.key || s && s.key, c = zi(ke, {
      key: (a && !Ht(a) ? a : `_${t}`) + (!s && r ? "_fb" : "")
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !o && c.scopeId && (c.slotScopeIds = [
      c.scopeId + "-s"
    ]), i && i._c && (i._d = true), c;
  };
  function Ol(e) {
    return e.some((t) => jn(t) ? !(t.type === Re || t.type === ke && !Ol(t.children)) : true) ? e : null;
  }
  const Gi = (e) => e ? Vl(e) ? Xo(e) : Gi(e.parent) : null, _r = Te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Gi(e.parent),
    $root: (e) => Gi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Pl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Is(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = cl.bind(e.proxy)),
    $watch: (e) => Id.bind(e)
  }), di = (e, t) => e !== re && !e.__isScriptSetup && oe(e, t), td = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: r, data: o, props: i, accessCache: s, type: a, appContext: c } = e;
      let u;
      if (t[0] !== "$") {
        const g = s[t];
        if (g !== void 0) switch (g) {
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
          if (di(r, t)) return s[t] = 1, r[t];
          if (o !== re && oe(o, t)) return s[t] = 2, o[t];
          if ((u = e.propsOptions[0]) && oe(u, t)) return s[t] = 3, i[t];
          if (n !== re && oe(n, t)) return s[t] = 4, n[t];
          $i && (s[t] = 0);
        }
      }
      const l = _r[t];
      let d, p;
      if (l) return t === "$attrs" && xe(e.attrs, "get", ""), l(e);
      if ((d = a.__cssModules) && (d = d[t])) return d;
      if (n !== re && oe(n, t)) return s[t] = 4, n[t];
      if (p = c.config.globalProperties, oe(p, t)) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: i } = e;
      return di(o, t) ? (o[t] = n, true) : r !== re && oe(r, t) ? (r[t] = n, true) : oe(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i, type: s } }, a) {
      let c, u;
      return !!(n[a] || e !== re && a[0] !== "$" && oe(e, a) || di(t, a) || (c = i[0]) && oe(c, a) || oe(r, a) || oe(_r, a) || oe(o.config.globalProperties, a) || (u = s.__cssModules) && u[a]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : oe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function yo(e) {
    return V(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  fb = function(e, t) {
    return !e || !t ? e || t : V(e) && V(t) ? e.concat(t) : Te({}, yo(e), yo(t));
  };
  let $i = true;
  function nd(e) {
    const t = Pl(e), n = e.proxy, r = e.ctx;
    $i = false, t.beforeCreate && oa(t.beforeCreate, e, "bc");
    const { data: o, computed: i, methods: s, watch: a, provide: c, inject: u, created: l, beforeMount: d, mounted: p, beforeUpdate: g, updated: m, activated: b, deactivated: C, beforeDestroy: S, beforeUnmount: I, destroyed: D, unmounted: E, render: W, renderTracked: X, renderTriggered: Z, errorCaptured: G, serverPrefetch: k, expose: $, inheritAttrs: Q, components: j, directives: se, filters: Ae } = t;
    if (u && rd(u, r, null), s) for (const ee in s) {
      const ce = s[ee];
      Y(ce) && (r[ee] = ce.bind(n));
    }
    if (o) {
      const ee = o.call(n, n);
      de(ee) && (e.data = Bo(ee));
    }
    if ($i = true, i) for (const ee in i) {
      const ce = i[ee], cn = Y(ce) ? ce.bind(n, n) : Y(ce.get) ? ce.get.bind(n, n) : st, Wr = !Y(ce) && Y(ce.set) ? ce.set.bind(n) : st, ln = xs({
        get: cn,
        set: Wr
      });
      Object.defineProperty(r, ee, {
        enumerable: true,
        configurable: true,
        get: () => ln.value,
        set: (lt) => ln.value = lt
      });
    }
    if (a) for (const ee in a) Rl(a[ee], r, n, ee);
    if (c) {
      const ee = Y(c) ? c.call(n) : c;
      Reflect.ownKeys(ee).forEach((ce) => {
        ld(ce, ee[ce]);
      });
    }
    l && oa(l, e, "c");
    function ge(ee, ce) {
      V(ce) ? ce.forEach((cn) => ee(cn.bind(n))) : ce && ee(ce.bind(n));
    }
    if (ge(Yf, d), ge(Hr, p), ge(Al, g), ge(Ss, m), ge(Bf, b), ge(Vf, C), ge(Xf, G), ge(Jf, X), ge(Kf, Z), ge(Os, I), ge(Rs, E), ge(qf, k), V($)) if ($.length) {
      const ee = e.exposed || (e.exposed = {});
      $.forEach((ce) => {
        Object.defineProperty(ee, ce, {
          get: () => n[ce],
          set: (cn) => n[ce] = cn,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    W && e.render === st && (e.render = W), Q != null && (e.inheritAttrs = Q), j && (e.components = j), se && (e.directives = se), k && El(e);
  }
  function rd(e, t, n = st) {
    V(e) && (e = Bi(e));
    for (const r in e) {
      const o = e[r];
      let i;
      de(o) ? "default" in o ? i = Tr(o.from || r, o.default, true) : i = Tr(o.from || r) : i = Tr(o), ve(i) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (s) => i.value = s
      }) : t[r] = i;
    }
  }
  function oa(e, t, n) {
    ct(V(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Rl(e, t, n, r) {
    let o = r.includes(".") ? jl(n, r) : () => n[r];
    if (ye(e)) {
      const i = t[e];
      Y(i) && Fn(o, i);
    } else if (Y(e)) Fn(o, e.bind(n));
    else if (de(e)) if (V(e)) e.forEach((i) => Rl(i, t, n, r));
    else {
      const i = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(i) && Fn(o, i, e);
    }
  }
  function Pl(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: i, config: { optionMergeStrategies: s } } = e.appContext, a = i.get(t);
    let c;
    return a ? c = a : !o.length && !n && !r ? c = t : (c = {}, o.length && o.forEach((u) => bo(c, u, s, true)), bo(c, t, s)), de(t) && i.set(t, c), c;
  }
  function bo(e, t, n, r = false) {
    const { mixins: o, extends: i } = t;
    i && bo(e, i, n, true), o && o.forEach((s) => bo(e, s, n, true));
    for (const s in t) if (!(r && s === "expose")) {
      const a = od[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
    return e;
  }
  const od = {
    data: ia,
    props: sa,
    emits: sa,
    methods: ur,
    computed: ur,
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
    components: ur,
    directives: ur,
    watch: sd,
    provide: ia,
    inject: id
  };
  function ia(e, t) {
    return t ? e ? function() {
      return Te(Y(e) ? e.call(this, this) : e, Y(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function id(e, t) {
    return ur(Bi(e), Bi(t));
  }
  function Bi(e) {
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
  function ur(e, t) {
    return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function sa(e, t) {
    return e ? V(e) && V(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Te(/* @__PURE__ */ Object.create(null), yo(e), yo(t ?? {})) : t;
  }
  function sd(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Te(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = De(e[r], t[r]);
    return n;
  }
  function Nl() {
    return {
      app: null,
      config: {
        isNativeTag: Nc,
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
  let ad = 0;
  function cd(e, t) {
    return function(r, o = null) {
      Y(r) || (r = Te({}, r)), o != null && !de(o) && (o = null);
      const i = Nl(), s = /* @__PURE__ */ new WeakSet(), a = [];
      let c = false;
      const u = i.app = {
        _uid: ad++,
        _component: r,
        _props: o,
        _container: null,
        _context: i,
        _instance: null,
        version: zd,
        get config() {
          return i.config;
        },
        set config(l) {
        },
        use(l, ...d) {
          return s.has(l) || (l && Y(l.install) ? (s.add(l), l.install(u, ...d)) : Y(l) && (s.add(l), l(u, ...d))), u;
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
            const g = u._ceVNode || Ye(r, o);
            return g.appContext = i, p === true ? p = "svg" : p === false && (p = void 0), e(g, l, p), c = true, u._container = l, l.__vue_app__ = u, Xo(g.component);
          }
        },
        onUnmount(l) {
          a.push(l);
        },
        unmount() {
          c && (ct(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(l, d) {
          return i.provides[l] = d, u;
        },
        runWithContext(l) {
          const d = Tn;
          Tn = u;
          try {
            return l();
          } finally {
            Tn = d;
          }
        }
      };
      return u;
    };
  }
  let Tn = null;
  ld = function(e, t) {
    if (Me) {
      let n = Me.provides;
      const r = Me.parent && Me.parent.provides;
      r === n && (n = Me.provides = Object.create(r)), n[e] = t;
    }
  };
  Tr = function(e, t, n = false) {
    const r = on();
    if (r || Tn) {
      let o = Tn ? Tn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && Y(t) ? t.call(r && r.proxy) : t;
    }
  };
  ud = function() {
    return !!(on() || Tn);
  };
  const Ll = {}, Cl = () => Object.create(Ll), xl = (e) => Object.getPrototypeOf(e) === Ll;
  function fd(e, t, n, r = false) {
    const o = {}, i = Cl();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), kl(e, t, o, i);
    for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
    n ? e.props = r ? o : Ef(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
  }
  function dd(e, t, n, r) {
    const { props: o, attrs: i, vnode: { patchFlag: s } } = e, a = ne(o), [c] = e.propsOptions;
    let u = false;
    if ((r || s > 0) && !(s & 16)) {
      if (s & 8) {
        const l = e.vnode.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          let p = l[d];
          if (Ko(e.emitsOptions, p)) continue;
          const g = t[p];
          if (c) if (oe(i, p)) g !== i[p] && (i[p] = g, u = true);
          else {
            const m = qe(p);
            o[m] = Vi(c, a, m, g, e, false);
          }
          else g !== i[p] && (i[p] = g, u = true);
        }
      }
    } else {
      kl(e, t, o, i) && (u = true);
      let l;
      for (const d in a) (!t || !oe(t, d) && ((l = Ut(d)) === d || !oe(t, l))) && (c ? n && (n[d] !== void 0 || n[l] !== void 0) && (o[d] = Vi(c, a, d, void 0, e, true)) : delete o[d]);
      if (i !== a) for (const d in i) (!t || !oe(t, d)) && (delete i[d], u = true);
    }
    u && Pt(e.attrs, "set", "");
  }
  function kl(e, t, n, r) {
    const [o, i] = e.propsOptions;
    let s = false, a;
    if (t) for (let c in t) {
      if (gr(c)) continue;
      const u = t[c];
      let l;
      o && oe(o, l = qe(c)) ? !i || !i.includes(l) ? n[l] = u : (a || (a = {}))[l] = u : Ko(e.emitsOptions, c) || (!(c in r) || u !== r[c]) && (r[c] = u, s = true);
    }
    if (i) {
      const c = ne(n), u = a || re;
      for (let l = 0; l < i.length; l++) {
        const d = i[l];
        n[d] = Vi(o, c, d, u[d], e, !oe(u, d));
      }
    }
    return s;
  }
  function Vi(e, t, n, r, o, i) {
    const s = e[n];
    if (s != null) {
      const a = oe(s, "default");
      if (a && r === void 0) {
        const c = s.default;
        if (s.type !== Function && !s.skipFactory && Y(c)) {
          const { propsDefaults: u } = o;
          if (n in u) r = u[n];
          else {
            const l = Ur(o);
            r = u[n] = c.call(null, t), l();
          }
        } else r = c;
        o.ce && o.ce._setProp(n, r);
      }
      s[0] && (i && !a ? r = false : s[1] && (r === "" || r === Ut(n)) && (r = true));
    }
    return r;
  }
  const hd = /* @__PURE__ */ new WeakMap();
  function Ml(e, t, n = false) {
    const r = n ? hd : t.propsCache, o = r.get(e);
    if (o) return o;
    const i = e.props, s = {}, a = [];
    let c = false;
    if (!Y(e)) {
      const l = (d) => {
        c = true;
        const [p, g] = Ml(d, t, true);
        Te(s, p), g && a.push(...g);
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    if (!i && !c) return de(e) && r.set(e, kn), kn;
    if (V(i)) for (let l = 0; l < i.length; l++) {
      const d = qe(i[l]);
      aa(d) && (s[d] = re);
    }
    else if (i) for (const l in i) {
      const d = qe(l);
      if (aa(d)) {
        const p = i[l], g = s[d] = V(p) || Y(p) ? {
          type: p
        } : Te({}, p), m = g.type;
        let b = false, C = true;
        if (V(m)) for (let S = 0; S < m.length; ++S) {
          const I = m[S], D = Y(I) && I.name;
          if (D === "Boolean") {
            b = true;
            break;
          } else D === "String" && (C = false);
        }
        else b = Y(m) && m.name === "Boolean";
        g[0] = b, g[1] = C, (b || oe(g, "default")) && a.push(d);
      }
    }
    const u = [
      s,
      a
    ];
    return de(e) && r.set(e, u), u;
  }
  function aa(e) {
    return e[0] !== "$" && !gr(e);
  }
  const Ps = (e) => e === "_" || e === "_ctx" || e === "$stable", Ns = (e) => V(e) ? e.map(vt) : [
    vt(e)
  ], pd = (e, t, n) => {
    if (t._n) return t;
    const r = Hf((...o) => Ns(t(...o)), n);
    return r._c = false, r;
  }, Dl = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Ps(o)) continue;
      const i = e[o];
      if (Y(i)) t[o] = pd(o, i, r);
      else if (i != null) {
        const s = Ns(i);
        t[o] = () => s;
      }
    }
  }, Fl = (e, t) => {
    const n = Ns(t);
    e.slots.default = () => n;
  }, Hl = (e, t, n) => {
    for (const r in t) (n || !Ps(r)) && (e[r] = t[r]);
  }, gd = (e, t, n) => {
    const r = e.slots = Cl();
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Hl(r, t, n), n && Mc(r, "_", o, true)) : Dl(t, r);
    } else t && Fl(e, t);
  }, md = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let i = true, s = re;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? i = false : Hl(o, t, n) : (i = !t.$stable, Dl(t, o)), s = t;
    } else t && (Fl(e, t), s = {
      default: 1
    });
    if (i) for (const a in o) !Ps(a) && s[a] == null && delete o[a];
  }, Ie = Ld;
  function wd(e) {
    return yd(e);
  }
  function yd(e, t) {
    const n = jo();
    n.__VUE__ = true;
    const { insert: r, remove: o, patchProp: i, createElement: s, createText: a, createComment: c, setText: u, setElementText: l, parentNode: d, nextSibling: p, setScopeId: g = st, insertStaticContent: m } = e, b = (f, h, w, P = null, O = null, R = null, F = void 0, M = null, x = !!h.dynamicChildren) => {
      if (f === h) return;
      f && !Kt(f, h) && (P = Gr(f), lt(f, O, R, true), f = null), h.patchFlag === -2 && (x = false, h.dynamicChildren = null);
      const { type: N, ref: z, shapeFlag: U } = h;
      switch (N) {
        case Jo:
          C(f, h, w, P);
          break;
        case Re:
          S(f, h, w, P);
          break;
        case Er:
          f == null && I(h, w, P, F);
          break;
        case ke:
          j(f, h, w, P, O, R, F, M, x);
          break;
        default:
          U & 1 ? W(f, h, w, P, O, R, F, M, x) : U & 6 ? se(f, h, w, P, O, R, F, M, x) : (U & 64 || U & 128) && N.process(f, h, w, P, O, R, F, M, x, Jn);
      }
      z != null && O ? vr(z, f && f.ref, R, h || f, !h) : z == null && f && f.ref != null && vr(f.ref, null, R, f, true);
    }, C = (f, h, w, P) => {
      if (f == null) r(h.el = a(h.children), w, P);
      else {
        const O = h.el = f.el;
        h.children !== f.children && u(O, h.children);
      }
    }, S = (f, h, w, P) => {
      f == null ? r(h.el = c(h.children || ""), w, P) : h.el = f.el;
    }, I = (f, h, w, P) => {
      [f.el, f.anchor] = m(f.children, h, w, P, f.el, f.anchor);
    }, D = ({ el: f, anchor: h }, w, P) => {
      let O;
      for (; f && f !== h; ) O = p(f), r(f, w, P), f = O;
      r(h, w, P);
    }, E = ({ el: f, anchor: h }) => {
      let w;
      for (; f && f !== h; ) w = p(f), o(f), f = w;
      o(h);
    }, W = (f, h, w, P, O, R, F, M, x) => {
      h.type === "svg" ? F = "svg" : h.type === "math" && (F = "mathml"), f == null ? X(h, w, P, O, R, F, M, x) : k(f, h, O, R, F, M, x);
    }, X = (f, h, w, P, O, R, F, M) => {
      let x, N;
      const { props: z, shapeFlag: U, transition: B, dirs: q } = f;
      if (x = f.el = s(f.type, R, z && z.is, z), U & 8 ? l(x, f.children) : U & 16 && G(f.children, x, null, P, O, hi(f, R), F, M), q && un(f, null, P, "created"), Z(x, f, f.scopeId, F, P), z) {
        for (const le in z) le !== "value" && !gr(le) && i(x, le, null, z[le], R, P);
        "value" in z && i(x, "value", null, z.value, R), (N = z.onVnodeBeforeMount) && Je(N, P, f);
      }
      q && un(f, null, P, "beforeMount");
      const te = bd(O, B);
      te && B.beforeEnter(x), r(x, h, w), ((N = z && z.onVnodeMounted) || te || q) && Ie(() => {
        N && Je(N, P, f), te && B.enter(x), q && un(f, null, P, "mounted");
      }, O);
    }, Z = (f, h, w, P, O) => {
      if (w && g(f, w), P) for (let R = 0; R < P.length; R++) g(f, P[R]);
      if (O) {
        let R = O.subTree;
        if (h === R || _o(R.type) && (R.ssContent === h || R.ssFallback === h)) {
          const F = O.vnode;
          Z(f, F, F.scopeId, F.slotScopeIds, O.parent);
        }
      }
    }, G = (f, h, w, P, O, R, F, M, x = 0) => {
      for (let N = x; N < f.length; N++) {
        const z = f[N] = M ? qt(f[N]) : vt(f[N]);
        b(null, z, h, w, P, O, R, F, M);
      }
    }, k = (f, h, w, P, O, R, F) => {
      const M = h.el = f.el;
      let { patchFlag: x, dynamicChildren: N, dirs: z } = h;
      x |= f.patchFlag & 16;
      const U = f.props || re, B = h.props || re;
      let q;
      if (w && fn(w, false), (q = B.onVnodeBeforeUpdate) && Je(q, w, h, f), z && un(h, f, w, "beforeUpdate"), w && fn(w, true), (U.innerHTML && B.innerHTML == null || U.textContent && B.textContent == null) && l(M, ""), N ? $(f.dynamicChildren, N, M, w, P, hi(h, O), R) : F || ce(f, h, M, null, w, P, hi(h, O), R, false), x > 0) {
        if (x & 16) Q(M, U, B, w, O);
        else if (x & 2 && U.class !== B.class && i(M, "class", null, B.class, O), x & 4 && i(M, "style", U.style, B.style, O), x & 8) {
          const te = h.dynamicProps;
          for (let le = 0; le < te.length; le++) {
            const ie = te[le], He = U[ie], Ue = B[ie];
            (Ue !== He || ie === "value") && i(M, ie, He, Ue, O, w);
          }
        }
        x & 1 && f.children !== h.children && l(M, h.children);
      } else !F && N == null && Q(M, U, B, w, O);
      ((q = B.onVnodeUpdated) || z) && Ie(() => {
        q && Je(q, w, h, f), z && un(h, f, w, "updated");
      }, P);
    }, $ = (f, h, w, P, O, R, F) => {
      for (let M = 0; M < h.length; M++) {
        const x = f[M], N = h[M], z = x.el && (x.type === ke || !Kt(x, N) || x.shapeFlag & 198) ? d(x.el) : w;
        b(x, N, z, null, P, O, R, F, true);
      }
    }, Q = (f, h, w, P, O) => {
      if (h !== w) {
        if (h !== re) for (const R in h) !gr(R) && !(R in w) && i(f, R, h[R], null, O, P);
        for (const R in w) {
          if (gr(R)) continue;
          const F = w[R], M = h[R];
          F !== M && R !== "value" && i(f, R, M, F, O, P);
        }
        "value" in w && i(f, "value", h.value, w.value, O);
      }
    }, j = (f, h, w, P, O, R, F, M, x) => {
      const N = h.el = f ? f.el : a(""), z = h.anchor = f ? f.anchor : a("");
      let { patchFlag: U, dynamicChildren: B, slotScopeIds: q } = h;
      q && (M = M ? M.concat(q) : q), f == null ? (r(N, w, P), r(z, w, P), G(h.children || [], w, z, O, R, F, M, x)) : U > 0 && U & 64 && B && f.dynamicChildren ? ($(f.dynamicChildren, B, w, O, R, F, M), (h.key != null || O && h === O.subTree) && Ls(f, h, true)) : ce(f, h, w, z, O, R, F, M, x);
    }, se = (f, h, w, P, O, R, F, M, x) => {
      h.slotScopeIds = M, f == null ? h.shapeFlag & 512 ? O.ctx.activate(h, w, P, F, x) : Ae(h, w, P, O, R, F, x) : tt(f, h, x);
    }, Ae = (f, h, w, P, O, R, F) => {
      const M = f.component = Ud(f, P, O);
      if (zo(f) && (M.ctx.renderer = Jn), jd(M, false, F), M.asyncDep) {
        if (O && O.registerDep(M, ge, F), !f.el) {
          const x = M.subTree = Ye(Re);
          S(null, x, h, w), f.placeholder = x.el;
        }
      } else ge(M, f, h, w, O, R, F);
    }, tt = (f, h, w) => {
      const P = h.component = f.component;
      if (Pd(f, h, w)) if (P.asyncDep && !P.asyncResolved) {
        ee(P, h, w);
        return;
      } else P.next = h, P.update();
      else h.el = f.el, P.vnode = h;
    }, ge = (f, h, w, P, O, R, F) => {
      const M = () => {
        if (f.isMounted) {
          let { next: U, bu: B, u: q, parent: te, vnode: le } = f;
          {
            const ft = Ul(f);
            if (ft) {
              U && (U.el = le.el, ee(f, U, F)), ft.asyncDep.then(() => {
                f.isUnmounted || M();
              });
              return;
            }
          }
          let ie = U, He;
          fn(f, false), U ? (U.el = le.el, ee(f, U, F)) : U = le, B && mr(B), (He = U.props && U.props.onVnodeBeforeUpdate) && Je(He, te, U, le), fn(f, true);
          const Ue = ca(f), ut = f.subTree;
          f.subTree = Ue, b(ut, Ue, d(ut.el), Gr(ut), f, O, R), U.el = Ue.el, ie === null && Nd(f, Ue.el), q && Ie(q, O), (He = U.props && U.props.onVnodeUpdated) && Ie(() => Je(He, te, U, le), O);
        } else {
          let U;
          const { el: B, props: q } = h, { bm: te, m: le, parent: ie, root: He, type: Ue } = f, ut = _n(h);
          fn(f, false), te && mr(te), !ut && (U = q && q.onVnodeBeforeMount) && Je(U, ie, h), fn(f, true);
          {
            He.ce && He.ce._def.shadowRoot !== false && He.ce._injectChildStyle(Ue);
            const ft = f.subTree = ca(f);
            b(null, ft, w, P, f, O, R), h.el = ft.el;
          }
          if (le && Ie(le, O), !ut && (U = q && q.onVnodeMounted)) {
            const ft = h;
            Ie(() => Je(U, ie, ft), O);
          }
          (h.shapeFlag & 256 || ie && _n(ie.vnode) && ie.vnode.shapeFlag & 256) && f.a && Ie(f.a, O), f.isMounted = true, h = w = P = null;
        }
      };
      f.scope.on();
      const x = f.effect = new Gc(M);
      f.scope.off();
      const N = f.update = x.run.bind(x), z = f.job = x.runIfDirty.bind(x);
      z.i = f, z.id = f.uid, x.scheduler = () => Is(z), fn(f, true), N();
    }, ee = (f, h, w) => {
      h.component = f;
      const P = f.vnode.props;
      f.vnode = h, f.next = null, dd(f, h.props, P, w), md(f, h.children, w), kt(), Xs(f), Mt();
    }, ce = (f, h, w, P, O, R, F, M, x = false) => {
      const N = f && f.children, z = f ? f.shapeFlag : 0, U = h.children, { patchFlag: B, shapeFlag: q } = h;
      if (B > 0) {
        if (B & 128) {
          Wr(N, U, w, P, O, R, F, M, x);
          return;
        } else if (B & 256) {
          cn(N, U, w, P, O, R, F, M, x);
          return;
        }
      }
      q & 8 ? (z & 16 && Kn(N, O, R), U !== N && l(w, U)) : z & 16 ? q & 16 ? Wr(N, U, w, P, O, R, F, M, x) : Kn(N, O, R, true) : (z & 8 && l(w, ""), q & 16 && G(U, w, P, O, R, F, M, x));
    }, cn = (f, h, w, P, O, R, F, M, x) => {
      f = f || kn, h = h || kn;
      const N = f.length, z = h.length, U = Math.min(N, z);
      let B;
      for (B = 0; B < U; B++) {
        const q = h[B] = x ? qt(h[B]) : vt(h[B]);
        b(f[B], q, w, null, O, R, F, M, x);
      }
      N > z ? Kn(f, O, R, true, false, U) : G(h, w, P, O, R, F, M, x, U);
    }, Wr = (f, h, w, P, O, R, F, M, x) => {
      let N = 0;
      const z = h.length;
      let U = f.length - 1, B = z - 1;
      for (; N <= U && N <= B; ) {
        const q = f[N], te = h[N] = x ? qt(h[N]) : vt(h[N]);
        if (Kt(q, te)) b(q, te, w, null, O, R, F, M, x);
        else break;
        N++;
      }
      for (; N <= U && N <= B; ) {
        const q = f[U], te = h[B] = x ? qt(h[B]) : vt(h[B]);
        if (Kt(q, te)) b(q, te, w, null, O, R, F, M, x);
        else break;
        U--, B--;
      }
      if (N > U) {
        if (N <= B) {
          const q = B + 1, te = q < z ? h[q].el : P;
          for (; N <= B; ) b(null, h[N] = x ? qt(h[N]) : vt(h[N]), w, te, O, R, F, M, x), N++;
        }
      } else if (N > B) for (; N <= U; ) lt(f[N], O, R, true), N++;
      else {
        const q = N, te = N, le = /* @__PURE__ */ new Map();
        for (N = te; N <= B; N++) {
          const Ve = h[N] = x ? qt(h[N]) : vt(h[N]);
          Ve.key != null && le.set(Ve.key, N);
        }
        let ie, He = 0;
        const Ue = B - te + 1;
        let ut = false, ft = 0;
        const Xn = new Array(Ue);
        for (N = 0; N < Ue; N++) Xn[N] = 0;
        for (N = q; N <= U; N++) {
          const Ve = f[N];
          if (He >= Ue) {
            lt(Ve, O, R, true);
            continue;
          }
          let dt;
          if (Ve.key != null) dt = le.get(Ve.key);
          else for (ie = te; ie <= B; ie++) if (Xn[ie - te] === 0 && Kt(Ve, h[ie])) {
            dt = ie;
            break;
          }
          dt === void 0 ? lt(Ve, O, R, true) : (Xn[dt - te] = N + 1, dt >= ft ? ft = dt : ut = true, b(Ve, h[dt], w, null, O, R, F, M, x), He++);
        }
        const Vs = ut ? vd(Xn) : kn;
        for (ie = Vs.length - 1, N = Ue - 1; N >= 0; N--) {
          const Ve = te + N, dt = h[Ve], zs = h[Ve + 1], Ys = Ve + 1 < z ? zs.el || zs.placeholder : P;
          Xn[N] === 0 ? b(null, dt, w, Ys, O, R, F, M, x) : ut && (ie < 0 || N !== Vs[ie] ? ln(dt, w, Ys, 2) : ie--);
        }
      }
    }, ln = (f, h, w, P, O = null) => {
      const { el: R, type: F, transition: M, children: x, shapeFlag: N } = f;
      if (N & 6) {
        ln(f.component.subTree, h, w, P);
        return;
      }
      if (N & 128) {
        f.suspense.move(h, w, P);
        return;
      }
      if (N & 64) {
        F.move(f, h, w, Jn);
        return;
      }
      if (F === ke) {
        r(R, h, w);
        for (let U = 0; U < x.length; U++) ln(x[U], h, w, P);
        r(f.anchor, h, w);
        return;
      }
      if (F === Er) {
        D(f, h, w);
        return;
      }
      if (P !== 2 && N & 1 && M) if (P === 0) M.beforeEnter(R), r(R, h, w), Ie(() => M.enter(R), O);
      else {
        const { leave: U, delayLeave: B, afterLeave: q } = M, te = () => {
          f.ctx.isUnmounted ? o(R) : r(R, h, w);
        }, le = () => {
          R._isLeaving && R[Rt](true), U(R, () => {
            te(), q && q();
          });
        };
        B ? B(R, te, le) : le();
      }
      else r(R, h, w);
    }, lt = (f, h, w, P = false, O = false) => {
      const { type: R, props: F, ref: M, children: x, dynamicChildren: N, shapeFlag: z, patchFlag: U, dirs: B, cacheIndex: q } = f;
      if (U === -2 && (O = false), M != null && (kt(), vr(M, null, w, f, true), Mt()), q != null && (h.renderCache[q] = void 0), z & 256) {
        h.ctx.deactivate(f);
        return;
      }
      const te = z & 1 && B, le = !_n(f);
      let ie;
      if (le && (ie = F && F.onVnodeBeforeUnmount) && Je(ie, h, f), z & 6) Wu(f.component, w, P);
      else {
        if (z & 128) {
          f.suspense.unmount(w, P);
          return;
        }
        te && un(f, null, h, "beforeUnmount"), z & 64 ? f.type.remove(f, h, w, Jn, P) : N && !N.hasOnce && (R !== ke || U > 0 && U & 64) ? Kn(N, h, w, false, true) : (R === ke && U & 384 || !O && z & 16) && Kn(x, h, w), P && $s(f);
      }
      (le && (ie = F && F.onVnodeUnmounted) || te) && Ie(() => {
        ie && Je(ie, h, f), te && un(f, null, h, "unmounted");
      }, w);
    }, $s = (f) => {
      const { type: h, el: w, anchor: P, transition: O } = f;
      if (h === ke) {
        ju(w, P);
        return;
      }
      if (h === Er) {
        E(f);
        return;
      }
      const R = () => {
        o(w), O && !O.persisted && O.afterLeave && O.afterLeave();
      };
      if (f.shapeFlag & 1 && O && !O.persisted) {
        const { leave: F, delayLeave: M } = O, x = () => F(w, R);
        M ? M(f.el, R, x) : x();
      } else R();
    }, ju = (f, h) => {
      let w;
      for (; f !== h; ) w = p(f), o(f), f = w;
      o(h);
    }, Wu = (f, h, w) => {
      const { bum: P, scope: O, job: R, subTree: F, um: M, m: x, a: N } = f;
      vo(x), vo(N), P && mr(P), O.stop(), R && (R.flags |= 8, lt(F, f, h, w)), M && Ie(M, h), Ie(() => {
        f.isUnmounted = true;
      }, h);
    }, Kn = (f, h, w, P = false, O = false, R = 0) => {
      for (let F = R; F < f.length; F++) lt(f[F], h, w, P, O);
    }, Gr = (f) => {
      if (f.shapeFlag & 6) return Gr(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const h = p(f.anchor || f.el), w = h && h[pl];
      return w ? p(w) : h;
    };
    let oi = false;
    const Bs = (f, h, w) => {
      f == null ? h._vnode && lt(h._vnode, null, null, true) : b(h._vnode || null, f, h, null, null, null, w), h._vnode = f, oi || (oi = true, Xs(), fl(), oi = false);
    }, Jn = {
      p: b,
      um: lt,
      m: ln,
      r: $s,
      mt: Ae,
      mc: G,
      pc: ce,
      pbc: $,
      n: Gr,
      o: e
    };
    return {
      render: Bs,
      hydrate: void 0,
      createApp: cd(Bs)
    };
  }
  function hi({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function fn({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function bd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Ls(e, t, n = false) {
    const r = e.children, o = t.children;
    if (V(r) && V(o)) for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let a = o[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = qt(o[i]), a.el = s.el), !n && a.patchFlag !== -2 && Ls(s, a)), a.type === Jo && a.patchFlag !== -1 && (a.el = s.el), a.type === Re && !a.el && (a.el = s.el);
    }
  }
  function vd(e) {
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
  function Ul(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Ul(t);
  }
  function vo(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const _d = Symbol.for("v-scx"), Td = () => Tr(_d);
  db = function(e, t) {
    return qo(e, null, t);
  };
  function Ed(e, t) {
    return qo(e, null, {
      flush: "sync"
    });
  }
  Fn = function(e, t, n) {
    return qo(e, t, n);
  };
  function qo(e, t, n = re) {
    const { immediate: r, deep: o, flush: i, once: s } = n, a = Te({}, n), c = t && r || !t && i !== "post";
    let u;
    if (Cr) {
      if (i === "sync") {
        const g = Td();
        u = g.__watcherHandles || (g.__watcherHandles = []);
      } else if (!c) {
        const g = () => {
        };
        return g.stop = st, g.resume = st, g.pause = st, g;
      }
    }
    const l = Me;
    a.call = (g, m, b) => ct(g, l, m, b);
    let d = false;
    i === "post" ? a.scheduler = (g) => {
      Ie(g, l && l.suspense);
    } : i !== "sync" && (d = true, a.scheduler = (g, m) => {
      m ? g() : Is(g);
    }), a.augmentJob = (g) => {
      t && (g.flags |= 4), d && (g.flags |= 2, l && (g.id = l.uid, g.i = l));
    };
    const p = Mf(e, t, a);
    return Cr && (u ? u.push(p) : c && p()), p;
  }
  function Id(e, t, n) {
    const r = this.proxy, o = ye(e) ? e.includes(".") ? jl(r, e) : () => r[e] : e.bind(r, r);
    let i;
    Y(t) ? i = t : (i = t.handler, n = t);
    const s = Ur(this), a = qo(o, i.bind(r), n);
    return s(), a;
  }
  function jl(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  hb = function(e, t, n = re) {
    const r = on(), o = qe(t), i = Ut(t), s = Wl(e, o), a = Rf((c, u) => {
      let l, d = re, p;
      return Ed(() => {
        const g = e[o];
        Be(l, g) && (l = g, u());
      }), {
        get() {
          return c(), n.get ? n.get(l) : l;
        },
        set(g) {
          const m = n.set ? n.set(g) : g;
          if (!Be(m, l) && !(d !== re && Be(g, d))) return;
          const b = r.vnode.props;
          b && (t in b || o in b || i in b) && (`onUpdate:${t}` in b || `onUpdate:${o}` in b || `onUpdate:${i}` in b) || (l = g, u()), r.emit(`update:${t}`, m), Be(g, m) && Be(g, d) && !Be(m, p) && u(), d = g, p = m;
        }
      };
    });
    return a[Symbol.iterator] = () => {
      let c = 0;
      return {
        next() {
          return c < 2 ? {
            value: c++ ? s || re : a,
            done: false
          } : {
            done: true
          };
        }
      };
    }, a;
  };
  const Wl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${Ut(t)}Modifiers`];
  function Ad(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || re;
    let o = n;
    const i = t.startsWith("update:"), s = i && Wl(r, t.slice(7));
    s && (s.trim && (o = n.map((l) => ye(l) ? l.trim() : l)), s.number && (o = n.map(Yu)));
    let a, c = r[a = ii(t)] || r[a = ii(qe(t))];
    !c && i && (c = r[a = ii(Ut(t))]), c && ct(c, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, ct(u, e, 6, o);
    }
  }
  const Sd = /* @__PURE__ */ new WeakMap();
  function Gl(e, t, n = false) {
    const r = n ? Sd : t.emitsCache, o = r.get(e);
    if (o !== void 0) return o;
    const i = e.emits;
    let s = {}, a = false;
    if (!Y(e)) {
      const c = (u) => {
        const l = Gl(u, t, true);
        l && (a = true, Te(s, l));
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !i && !a ? (de(e) && r.set(e, null), null) : (V(i) ? i.forEach((c) => s[c] = null) : Te(s, i), de(e) && r.set(e, s), s);
  }
  function Ko(e, t) {
    return !e || !Fo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, Ut(t)) || oe(e, t));
  }
  function ca(e) {
    const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [i], slots: s, attrs: a, emit: c, render: u, renderCache: l, props: d, data: p, setupState: g, ctx: m, inheritAttrs: b } = e, C = mo(e);
    let S, I;
    try {
      if (n.shapeFlag & 4) {
        const E = o || r, W = E;
        S = vt(u.call(W, E, l, d, g, p, m)), I = a;
      } else {
        const E = t;
        S = vt(E.length > 1 ? E(d, {
          attrs: a,
          slots: s,
          emit: c
        }) : E(d, null)), I = t.props ? a : Od(a);
      }
    } catch (E) {
      Ir.length = 0, Vo(E, e, 1), S = Ye(Re);
    }
    let D = S;
    if (I && b !== false) {
      const E = Object.keys(I), { shapeFlag: W } = D;
      E.length && W & 7 && (i && E.some(hs) && (I = Rd(I, i)), D = Dt(D, I, false, true));
    }
    return n.dirs && (D = Dt(D, null, false, true), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && nn(D, n.transition), S = D, mo(C), S;
  }
  const Od = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Fo(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Rd = (e, t) => {
    const n = {};
    for (const r in e) (!hs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function Pd(e, t, n) {
    const { props: r, children: o, component: i } = e, { props: s, children: a, patchFlag: c } = t, u = i.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && c >= 0) {
      if (c & 1024) return true;
      if (c & 16) return r ? la(r, s, u) : !!s;
      if (c & 8) {
        const l = t.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          const p = l[d];
          if (s[p] !== r[p] && !Ko(u, p)) return true;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? true : r === s ? false : r ? s ? la(r, s, u) : true : !!s;
    return false;
  }
  function la(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      if (t[i] !== e[i] && !Ko(n, i)) return true;
    }
    return false;
  }
  function Nd({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const _o = (e) => e.__isSuspense;
  function Ld(e, t) {
    t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : ul(e);
  }
  let Er, Ir;
  ke = Symbol.for("v-fgt");
  Jo = Symbol.for("v-txt");
  Re = Symbol.for("v-cmt");
  Er = Symbol.for("v-stc");
  Ir = [];
  let ze = null;
  rt = function(e = false) {
    Ir.push(ze = e ? null : []);
  };
  function Cd() {
    Ir.pop(), ze = Ir[Ir.length - 1] || null;
  }
  let Lr = 1;
  function To(e, t = false) {
    Lr += e, e < 0 && ze && t && (ze.hasOnce = true);
  }
  function $l(e) {
    return e.dynamicChildren = Lr > 0 ? ze || kn : null, Cd(), Lr > 0 && ze && ze.push(e), e;
  }
  Gt = function(e, t, n, r, o, i) {
    return $l(me(e, t, n, r, o, i, true));
  };
  zi = function(e, t, n, r, o) {
    return $l(Ye(e, t, n, r, o, true));
  };
  jn = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function Kt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Bl = ({ key: e }) => e ?? null, ro = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ye(e) || ve(e) || Y(e) ? {
    i: Pe,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  me = function(e, t = null, n = null, r = 0, o = null, i = e === ke ? 0 : 1, s = false, a = false) {
    const c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Bl(t),
      ref: t && ro(t),
      scopeId: hl,
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
    return a ? (Cs(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ye(n) ? 8 : 16), Lr > 0 && !s && ze && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && ze.push(c), c;
  };
  Ye = xd;
  function xd(e, t = null, n = null, r = 0, o = null, i = false) {
    if ((!e || e === Sl) && (e = Re), jn(e)) {
      const a = Dt(e, t, true);
      return n && Cs(a, n), Lr > 0 && !i && ze && (a.shapeFlag & 6 ? ze[ze.indexOf(e)] = a : ze.push(a)), a.patchFlag = -2, a;
    }
    if (Bd(e) && (e = e.__vccOpts), t) {
      t = kd(t);
      let { class: a, style: c } = t;
      a && !ye(a) && (t.class = ms(a)), de(c) && (Ts(c) && !V(c) && (c = Te({}, c)), t.style = Wo(c));
    }
    const s = ye(e) ? 1 : _o(e) ? 128 : gl(e) ? 64 : de(e) ? 4 : Y(e) ? 2 : 0;
    return me(e, t, n, r, o, s, i, true);
  }
  function kd(e) {
    return e ? Ts(e) || xl(e) ? Te({}, e) : e : null;
  }
  Dt = function(e, t, n = false, r = false) {
    const { props: o, ref: i, patchFlag: s, children: a, transition: c } = e, u = t ? Dd(o || {}, t) : o, l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && Bl(u),
      ref: t && t.ref ? n && i ? V(i) ? i.concat(ro(t)) : [
        i,
        ro(t)
      ] : ro(t) : i,
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
    return c && r && nn(l, c.clone(l)), l;
  };
  Md = function(e = " ", t = 0) {
    return Ye(Jo, null, e, t);
  };
  pb = function(e, t) {
    const n = Ye(Er, null, e);
    return n.staticCount = t, n;
  };
  pi = function(e = "", t = false) {
    return t ? (rt(), zi(Re, null, e)) : Ye(Re, null, e);
  };
  function vt(e) {
    return e == null || typeof e == "boolean" ? Ye(Re) : V(e) ? Ye(ke, null, e.slice()) : jn(e) ? qt(e) : Ye(Jo, null, String(e));
  }
  function qt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
  }
  function Cs(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (V(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), Cs(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !xl(t) ? t._ctx = Pe : o === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Y(t) ? (t = {
      default: t,
      _ctx: Pe
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      Md(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Dd = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const o in r) if (o === "class") t.class !== r.class && (t.class = ms([
        t.class,
        r.class
      ]));
      else if (o === "style") t.style = Wo([
        t.style,
        r.style
      ]);
      else if (Fo(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(V(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else o !== "" && (t[o] = r[o]);
    }
    return t;
  };
  function Je(e, t, n, r = null) {
    ct(e, t, 7, [
      n,
      r
    ]);
  }
  const Fd = Nl();
  let Hd = 0;
  function Ud(e, t, n) {
    const r = e.type, o = (t ? t.appContext : e.appContext) || Fd, i = {
      uid: Hd++,
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
      scope: new Uc(true),
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
      propsOptions: Ml(r, o),
      emitsOptions: Gl(r, o),
      emit: null,
      emitted: null,
      propsDefaults: re,
      inheritAttrs: r.inheritAttrs,
      ctx: re,
      data: re,
      props: re,
      attrs: re,
      slots: re,
      refs: re,
      setupState: re,
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
  let Me = null;
  on = () => Me || Pe;
  let Eo, Yi;
  {
    const e = jo(), t = (n, r) => {
      let o;
      return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
        o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
      };
    };
    Eo = t("__VUE_INSTANCE_SETTERS__", (n) => Me = n), Yi = t("__VUE_SSR_SETTERS__", (n) => Cr = n);
  }
  const Ur = (e) => {
    const t = Me;
    return Eo(e), e.scope.on(), () => {
      e.scope.off(), Eo(t);
    };
  }, ua = () => {
    Me && Me.scope.off(), Eo(null);
  };
  function Vl(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Cr = false;
  function jd(e, t = false, n = false) {
    t && Yi(t);
    const { props: r, children: o } = e.vnode, i = Vl(e);
    fd(e, r, i, t), gd(e, o, n || t);
    const s = i ? Wd(e, t) : void 0;
    return t && Yi(false), s;
  }
  function Wd(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, td);
    const { setup: r } = n;
    if (r) {
      kt();
      const o = e.setupContext = r.length > 1 ? $d(e) : null, i = Ur(e), s = Fr(r, e, 0, [
        e.props,
        o
      ]), a = Cc(s);
      if (Mt(), i(), (a || e.sp) && !_n(e) && El(e), a) {
        if (s.then(ua, ua), t) return s.then((c) => {
          fa(e, c);
        }).catch((c) => {
          Vo(c, e, 0);
        });
        e.asyncDep = s;
      } else fa(e, s);
    } else zl(e);
  }
  function fa(e, t, n) {
    Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = il(t)), zl(e);
  }
  function zl(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || st);
    {
      const o = Ur(e);
      kt();
      try {
        nd(e);
      } finally {
        Mt(), o();
      }
    }
  }
  const Gd = {
    get(e, t) {
      return xe(e, "get", ""), e[t];
    }
  };
  function $d(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Gd),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Xo(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(il(Es(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in _r) return _r[n](e);
      },
      has(t, n) {
        return n in t || n in _r;
      }
    })) : e.proxy;
  }
  function qi(e, t = true) {
    return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Bd(e) {
    return Y(e) && "__vccOpts" in e;
  }
  xs = (e, t) => xf(e, t, Cr);
  Vd = function(e, t, n) {
    const r = (i, s, a) => {
      To(-1);
      try {
        return Ye(i, s, a);
      } finally {
        To(1);
      }
    }, o = arguments.length;
    return o === 2 ? de(t) && !V(t) ? jn(t) ? r(e, null, [
      t
    ]) : r(e, t) : r(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && jn(n) && (n = [
      n
    ]), r(e, t, n));
  };
  const zd = "3.5.21";
  let Ki;
  const da = typeof window < "u" && window.trustedTypes;
  if (da) try {
    Ki = da.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Yl, Yd, qd, Ot, ha, Kd, $t, Qn, Wn, ql, Kl, Jd, dn, pa;
  Yl = Ki ? (e) => Ki.createHTML(e) : (e) => e;
  Yd = "http://www.w3.org/2000/svg";
  qd = "http://www.w3.org/1998/Math/MathML";
  Ot = typeof document < "u" ? document : null;
  ha = Ot && Ot.createElement("template");
  Kd = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t === "svg" ? Ot.createElementNS(Yd, e) : t === "mathml" ? Ot.createElementNS(qd, e) : n ? Ot.createElement(e, {
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
        ha.innerHTML = Yl(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = ha.content;
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
  $t = "transition";
  Qn = "animation";
  Wn = Symbol("_vtc");
  ql = {
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
  Kl = Te({}, bl, ql);
  Jd = (e) => (e.displayName = "Transition", e.props = Kl, e);
  gb = Jd((e, { slots: t }) => Vd(Wf, Jl(e), t));
  dn = (e, t = []) => {
    V(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  pa = (e) => e ? V(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Jl(e) {
    const t = {};
    for (const j in e) j in ql || (t[j] = e[j]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: o, enterFromClass: i = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: c = i, appearActiveClass: u = s, appearToClass: l = a, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: g = `${n}-leave-to` } = e, m = Xd(o), b = m && m[0], C = m && m[1], { onBeforeEnter: S, onEnter: I, onEnterCancelled: D, onLeave: E, onLeaveCancelled: W, onBeforeAppear: X = S, onAppear: Z = I, onAppearCancelled: G = D } = t, k = (j, se, Ae, tt) => {
      j._enterCancelled = tt, Vt(j, se ? l : a), Vt(j, se ? u : s), Ae && Ae();
    }, $ = (j, se) => {
      j._isLeaving = false, Vt(j, d), Vt(j, g), Vt(j, p), se && se();
    }, Q = (j) => (se, Ae) => {
      const tt = j ? Z : I, ge = () => k(se, j, Ae);
      dn(tt, [
        se,
        ge
      ]), ga(() => {
        Vt(se, j ? c : i), gt(se, j ? l : a), pa(tt) || ma(se, r, b, ge);
      });
    };
    return Te(t, {
      onBeforeEnter(j) {
        dn(S, [
          j
        ]), gt(j, i), gt(j, s);
      },
      onBeforeAppear(j) {
        dn(X, [
          j
        ]), gt(j, c), gt(j, u);
      },
      onEnter: Q(false),
      onAppear: Q(true),
      onLeave(j, se) {
        j._isLeaving = true;
        const Ae = () => $(j, se);
        gt(j, d), j._enterCancelled ? (gt(j, p), Ji()) : (Ji(), gt(j, p)), ga(() => {
          j._isLeaving && (Vt(j, d), gt(j, g), pa(E) || ma(j, r, C, Ae));
        }), dn(E, [
          j,
          Ae
        ]);
      },
      onEnterCancelled(j) {
        k(j, false, void 0, true), dn(D, [
          j
        ]);
      },
      onAppearCancelled(j) {
        k(j, true, void 0, true), dn(G, [
          j
        ]);
      },
      onLeaveCancelled(j) {
        $(j), dn(W, [
          j
        ]);
      }
    });
  }
  function Xd(e) {
    if (e == null) return null;
    if (de(e)) return [
      gi(e.enter),
      gi(e.leave)
    ];
    {
      const t = gi(e);
      return [
        t,
        t
      ];
    }
  }
  function gi(e) {
    return qu(e);
  }
  function gt(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Wn] || (e[Wn] = /* @__PURE__ */ new Set())).add(t);
  }
  function Vt(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Wn];
    n && (n.delete(t), n.size || (e[Wn] = void 0));
  }
  function ga(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Zd = 0;
  function ma(e, t, n, r) {
    const o = e._endId = ++Zd, i = () => {
      o === e._endId && r();
    };
    if (n != null) return setTimeout(i, n);
    const { type: s, timeout: a, propCount: c } = Xl(e, t);
    if (!s) return r();
    const u = s + "end";
    let l = 0;
    const d = () => {
      e.removeEventListener(u, p), i();
    }, p = (g) => {
      g.target === e && ++l >= c && d();
    };
    setTimeout(() => {
      l < c && d();
    }, a + 1), e.addEventListener(u, p);
  }
  function Xl(e, t) {
    const n = window.getComputedStyle(e), r = (m) => (n[m] || "").split(", "), o = r(`${$t}Delay`), i = r(`${$t}Duration`), s = wa(o, i), a = r(`${Qn}Delay`), c = r(`${Qn}Duration`), u = wa(a, c);
    let l = null, d = 0, p = 0;
    t === $t ? s > 0 && (l = $t, d = s, p = i.length) : t === Qn ? u > 0 && (l = Qn, d = u, p = c.length) : (d = Math.max(s, u), l = d > 0 ? s > u ? $t : Qn : null, p = l ? l === $t ? i.length : c.length : 0);
    const g = l === $t && /\b(?:transform|all)(?:,|$)/.test(r(`${$t}Property`).toString());
    return {
      type: l,
      timeout: d,
      propCount: p,
      hasTransform: g
    };
  }
  function wa(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => ya(n) + ya(e[r])));
  }
  function ya(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Ji() {
    return document.body.offsetHeight;
  }
  function Qd(e, t, n) {
    const r = e[Wn];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let Io, Zl;
  Io = Symbol("_vod");
  Zl = Symbol("_vsh");
  mb = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[Io] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : er(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), er(e, true), r.enter(e)) : r.leave(e, () => {
        er(e, false);
      }) : er(e, t));
    },
    beforeUnmount(e, { value: t }) {
      er(e, t);
    }
  };
  function er(e, t) {
    e.style.display = t ? e[Io] : "none", e[Zl] = !t;
  }
  const Ql = Symbol("");
  wb = function(e) {
    const t = on();
    if (!t) return;
    const n = t.ut = (o = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((i) => Ao(i, o));
    }, r = () => {
      const o = e(t.proxy);
      t.ce ? Ao(t.ce, o) : Xi(t.subTree, o), n(o);
    };
    Al(() => {
      ul(r);
    }), Hr(() => {
      Fn(r, st, {
        flush: "post"
      });
      const o = new MutationObserver(r);
      o.observe(t.subTree.el.parentNode, {
        childList: true
      }), Rs(() => o.disconnect());
    });
  };
  function Xi(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        Xi(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Ao(e.el, t);
    else if (e.type === ke) e.children.forEach((n) => Xi(n, t));
    else if (e.type === Er) {
      let { el: n, anchor: r } = e;
      for (; n && (Ao(n, t), n !== r); ) n = n.nextSibling;
    }
  }
  function Ao(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let r = "";
      for (const o in t) {
        const i = tf(t[o]);
        n.setProperty(`--${o}`, i), r += `--${o}: ${i};`;
      }
      n[Ql] = r;
    }
  }
  const eh = /(?:^|;)\s*display\s*:/;
  function th(e, t, n) {
    const r = e.style, o = ye(n);
    let i = false;
    if (n && !o) {
      if (t) if (ye(t)) for (const s of t.split(";")) {
        const a = s.slice(0, s.indexOf(":")).trim();
        n[a] == null && oo(r, a, "");
      }
      else for (const s in t) n[s] == null && oo(r, s, "");
      for (const s in n) s === "display" && (i = true), oo(r, s, n[s]);
    } else if (o) {
      if (t !== n) {
        const s = r[Ql];
        s && (n += ";" + s), r.cssText = n, i = eh.test(n);
      }
    } else t && e.removeAttribute("style");
    Io in e && (e[Io] = i ? r.display : "", e[Zl] && (r.display = "none"));
  }
  const ba = /\s*!important$/;
  function oo(e, t, n) {
    if (V(n)) n.forEach((r) => oo(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = nh(e, t);
      ba.test(n) ? e.setProperty(Ut(r), n.replace(ba, ""), "important") : e[r] = n;
    }
  }
  const va = [
    "Webkit",
    "Moz",
    "ms"
  ], mi = {};
  function nh(e, t) {
    const n = mi[t];
    if (n) return n;
    let r = qe(t);
    if (r !== "filter" && r in e) return mi[t] = r;
    r = Uo(r);
    for (let o = 0; o < va.length; o++) {
      const i = va[o] + r;
      if (i in e) return mi[t] = i;
    }
    return t;
  }
  const _a = "http://www.w3.org/1999/xlink";
  function Ta(e, t, n, r, o, i = ef(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_a, t.slice(6, t.length)) : e.setAttributeNS(_a, t, n) : n == null || i && !Dc(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ht(n) ? String(n) : n);
  }
  function Ea(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? Yl(n) : n);
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
      a === "boolean" ? n = Dc(n) : n == null && a === "string" ? (n = "", s = true) : a === "number" && (n = 0, s = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    s && e.removeAttribute(o || t);
  }
  function rh(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function oh(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const Ia = Symbol("_vei");
  function ih(e, t, n, r, o = null) {
    const i = e[Ia] || (e[Ia] = {}), s = i[t];
    if (r && s) s.value = r;
    else {
      const [a, c] = sh(t);
      if (r) {
        const u = i[t] = lh(r, o);
        rh(e, a, u, c);
      } else s && (oh(e, a, s, c), i[t] = void 0);
    }
  }
  const Aa = /(?:Once|Passive|Capture)$/;
  function sh(e) {
    let t;
    if (Aa.test(e)) {
      t = {};
      let r;
      for (; r = e.match(Aa); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Ut(e.slice(2)),
      t
    ];
  }
  let wi = 0;
  const ah = Promise.resolve(), ch = () => wi || (ah.then(() => wi = 0), wi = Date.now());
  function lh(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      ct(uh(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = ch(), n;
  }
  function uh(e, t) {
    if (V(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (o) => !o._stopped && r && r(o));
    } else return t;
  }
  const Sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fh = (e, t, n, r, o, i) => {
    const s = o === "svg";
    t === "class" ? Qd(e, r, s) : t === "style" ? th(e, n, r) : Fo(t) ? hs(t) || ih(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : dh(e, t, r, s)) ? (Ea(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ta(e, t, r, s, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ye(r)) ? Ea(e, qe(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ta(e, t, r, s));
  };
  function dh(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Sa(t) && Y(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const o = e.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
    }
    return Sa(t) && ye(n) ? false : t in e;
  }
  let eu, tu, So, Oa, hh, ph;
  eu = /* @__PURE__ */ new WeakMap();
  tu = /* @__PURE__ */ new WeakMap();
  So = Symbol("_moveCb");
  Oa = Symbol("_enterCb");
  hh = (e) => (delete e.props.mode, e);
  ph = hh({
    name: "TransitionGroup",
    props: Te({}, Kl, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = on(), r = yl();
      let o, i;
      return Ss(() => {
        if (!o.length) return;
        const s = e.moveClass || `${e.name || "v"}-move`;
        if (!yh(o[0].el, n.vnode.el, s)) {
          o = [];
          return;
        }
        o.forEach(gh), o.forEach(mh);
        const a = o.filter(wh);
        Ji(), a.forEach((c) => {
          const u = c.el, l = u.style;
          gt(u, s), l.transform = l.webkitTransform = l.transitionDuration = "";
          const d = u[So] = (p) => {
            p && p.target !== u || (!p || p.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[So] = null, Vt(u, s));
          };
          u.addEventListener("transitionend", d);
        }), o = [];
      }), () => {
        const s = ne(e), a = Jl(s);
        let c = s.tag || ke;
        if (o = [], i) for (let u = 0; u < i.length; u++) {
          const l = i[u];
          l.el && l.el instanceof Element && (o.push(l), nn(l, Nr(l, a, r, n)), eu.set(l, l.el.getBoundingClientRect()));
        }
        i = t.default ? As(t.default()) : [];
        for (let u = 0; u < i.length; u++) {
          const l = i[u];
          l.key != null && nn(l, Nr(l, a, r, n));
        }
        return Ye(c, null, i);
      };
    }
  });
  yb = ph;
  function gh(e) {
    const t = e.el;
    t[So] && t[So](), t[Oa] && t[Oa]();
  }
  function mh(e) {
    tu.set(e, e.el.getBoundingClientRect());
  }
  function wh(e) {
    const t = eu.get(e), n = tu.get(e), r = t.left - n.left, o = t.top - n.top;
    if (r || o) {
      const i = e.el.style;
      return i.transform = i.webkitTransform = `translate(${r}px,${o}px)`, i.transitionDuration = "0s", e;
    }
  }
  function yh(e, t, n) {
    const r = e.cloneNode(), o = e[Wn];
    o && o.forEach((a) => {
      a.split(/\s+/).forEach((c) => c && r.classList.remove(c));
    }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(r);
    const { hasTransform: s } = Xl(r);
    return i.removeChild(r), s;
  }
  let bh, vh, _h, Th;
  bh = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  vh = {
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
  bb = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = ((o, ...i) => {
      for (let s = 0; s < t.length; s++) {
        const a = vh[t[s]];
        if (a && a(o, t)) return;
      }
      return e(o, ...i);
    }));
  };
  _h = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  vb = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = ((o) => {
      if (!("key" in o)) return;
      const i = Ut(o.key);
      if (t.some((s) => s === i || _h[s] === i)) return e(o);
    }));
  };
  Th = Te({
    patchProp: fh
  }, Kd);
  let Ra;
  function Eh() {
    return Ra || (Ra = wd(Th));
  }
  const nu = ((...e) => {
    const t = Eh().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = Ah(r);
      if (!o) return;
      const i = t._component;
      !Y(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
      const s = n(o, false, Ih(o));
      return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
    }, t;
  });
  function Ih(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Ah(e) {
    return ye(e) ? document.querySelector(e) : e;
  }
  const Sh = "" + new URL("../favicon.svg", import.meta.url).href;
  let ru, Oh, ou, Rh, Ph, tr;
  ru = typeof global == "object" && global && global.Object === Object && global;
  Oh = typeof self == "object" && self && self.Object === Object && self;
  At = ru || Oh || Function("return this")();
  rn = At.Symbol;
  ou = Object.prototype;
  Rh = ou.hasOwnProperty;
  Ph = ou.toString;
  tr = rn ? rn.toStringTag : void 0;
  function Nh(e) {
    var t = Rh.call(e, tr), n = e[tr];
    try {
      e[tr] = void 0;
      var r = true;
    } catch {
    }
    var o = Ph.call(e);
    return r && (t ? e[tr] = n : delete e[tr]), o;
  }
  var Lh = Object.prototype, Ch = Lh.toString;
  function xh(e) {
    return Ch.call(e);
  }
  var kh = "[object Null]", Mh = "[object Undefined]", Pa = rn ? rn.toStringTag : void 0;
  sn = function(e) {
    return e == null ? e === void 0 ? Mh : kh : Pa && Pa in Object(e) ? Nh(e) : xh(e);
  };
  It = function(e) {
    return e != null && typeof e == "object";
  };
  Gn = Array.isArray;
  Zo = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Dh = "[object AsyncFunction]", Fh = "[object Function]", Hh = "[object GeneratorFunction]", Uh = "[object Proxy]";
  iu = function(e) {
    if (!Zo(e)) return false;
    var t = sn(e);
    return t == Fh || t == Hh || t == Dh || t == Uh;
  };
  var yi = At["__core-js_shared__"], Na = (function() {
    var e = /[^.]+$/.exec(yi && yi.keys && yi.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function jh(e) {
    return !!Na && Na in e;
  }
  var Wh = Function.prototype, Gh = Wh.toString;
  function In(e) {
    if (e != null) {
      try {
        return Gh.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var $h = /[\\^$.*+?()[\]{}|]/g, Bh = /^\[object .+?Constructor\]$/, Vh = Function.prototype, zh = Object.prototype, Yh = Vh.toString, qh = zh.hasOwnProperty, Kh = RegExp("^" + Yh.call(qh).replace($h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Jh(e) {
    if (!Zo(e) || jh(e)) return false;
    var t = iu(e) ? Kh : Bh;
    return t.test(In(e));
  }
  function Xh(e, t) {
    return e == null ? void 0 : e[t];
  }
  function An(e, t) {
    var n = Xh(e, t);
    return Jh(n) ? n : void 0;
  }
  let Zi, La, Zh;
  Zi = An(At, "WeakMap");
  La = Object.create;
  Zh = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!Zo(t)) return {};
      if (La) return La(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  Ca = (function() {
    try {
      var e = An(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function Qh(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var ep = 9007199254740991, tp = /^(?:0|[1-9]\d*)$/;
  np = function(e, t) {
    var n = typeof e;
    return t = t ?? ep, !!t && (n == "number" || n != "symbol" && tp.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  rp = function(e, t, n) {
    t == "__proto__" && Ca ? Ca(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  ks = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var op = Object.prototype, ip = op.hasOwnProperty;
  sp = function(e, t, n) {
    var r = e[t];
    (!(ip.call(e, t) && ks(r, n)) || n === void 0 && !(t in e)) && rp(e, t, n);
  };
  var ap = 9007199254740991;
  su = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ap;
  };
  cp = function(e) {
    return e != null && su(e.length) && !iu(e);
  };
  var lp = Object.prototype;
  au = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || lp;
    return e === n;
  };
  function up(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var fp = "[object Arguments]";
  function xa(e) {
    return It(e) && sn(e) == fp;
  }
  let cu, dp, hp;
  cu = Object.prototype;
  dp = cu.hasOwnProperty;
  hp = cu.propertyIsEnumerable;
  pp = xa(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? xa : function(e) {
    return It(e) && dp.call(e, "callee") && !hp.call(e, "callee");
  };
  function gp() {
    return false;
  }
  let lu, ka, mp, Ma, wp, yp, bp, vp, _p, Tp, Ep, Ip, Ap, Sp, Op, Rp, Pp, Np, Lp, Cp, xp, kp, Mp, Dp, Fp, Hp, Up, jp, Wp, he;
  lu = typeof exports == "object" && exports && !exports.nodeType && exports;
  ka = lu && typeof module == "object" && module && !module.nodeType && module;
  mp = ka && ka.exports === lu;
  Ma = mp ? At.Buffer : void 0;
  wp = Ma ? Ma.isBuffer : void 0;
  Oo = wp || gp;
  yp = "[object Arguments]";
  bp = "[object Array]";
  vp = "[object Boolean]";
  _p = "[object Date]";
  Tp = "[object Error]";
  Ep = "[object Function]";
  Ip = "[object Map]";
  Ap = "[object Number]";
  Sp = "[object Object]";
  Op = "[object RegExp]";
  Rp = "[object Set]";
  Pp = "[object String]";
  Np = "[object WeakMap]";
  Lp = "[object ArrayBuffer]";
  Cp = "[object DataView]";
  xp = "[object Float32Array]";
  kp = "[object Float64Array]";
  Mp = "[object Int8Array]";
  Dp = "[object Int16Array]";
  Fp = "[object Int32Array]";
  Hp = "[object Uint8Array]";
  Up = "[object Uint8ClampedArray]";
  jp = "[object Uint16Array]";
  Wp = "[object Uint32Array]";
  he = {};
  he[xp] = he[kp] = he[Mp] = he[Dp] = he[Fp] = he[Hp] = he[Up] = he[jp] = he[Wp] = true;
  he[yp] = he[bp] = he[Lp] = he[vp] = he[Cp] = he[_p] = he[Tp] = he[Ep] = he[Ip] = he[Ap] = he[Sp] = he[Op] = he[Rp] = he[Pp] = he[Np] = false;
  function Gp(e) {
    return It(e) && su(e.length) && !!he[sn(e)];
  }
  function Ms(e) {
    return function(t) {
      return e(t);
    };
  }
  let uu, Ar, $p, bi, $n, Da, Bp, Vp;
  uu = typeof exports == "object" && exports && !exports.nodeType && exports;
  Ar = uu && typeof module == "object" && module && !module.nodeType && module;
  $p = Ar && Ar.exports === uu;
  bi = $p && ru.process;
  $n = (function() {
    try {
      var e = Ar && Ar.require && Ar.require("util").types;
      return e || bi && bi.binding && bi.binding("util");
    } catch {
    }
  })();
  Da = $n && $n.isTypedArray;
  fu = Da ? Ms(Da) : Gp;
  Bp = Object.prototype;
  Vp = Bp.hasOwnProperty;
  zp = function(e, t) {
    var n = Gn(e), r = !n && pp(e), o = !n && !r && Oo(e), i = !n && !r && !o && fu(e), s = n || r || o || i, a = s ? up(e.length, String) : [], c = a.length;
    for (var u in e) (t || Vp.call(e, u)) && !(s && (u == "length" || o && (u == "offset" || u == "parent") || i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || np(u, c))) && a.push(u);
    return a;
  };
  function du(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Yp = du(Object.keys, Object), qp = Object.prototype, Kp = qp.hasOwnProperty;
  function Jp(e) {
    if (!au(e)) return Yp(e);
    var t = [];
    for (var n in Object(e)) Kp.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  Xp = function(e) {
    return cp(e) ? zp(e) : Jp(e);
  };
  var xr = An(Object, "create");
  function Zp() {
    this.__data__ = xr ? xr(null) : {}, this.size = 0;
  }
  function Qp(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var eg = "__lodash_hash_undefined__", tg = Object.prototype, ng = tg.hasOwnProperty;
  function rg(e) {
    var t = this.__data__;
    if (xr) {
      var n = t[e];
      return n === eg ? void 0 : n;
    }
    return ng.call(t, e) ? t[e] : void 0;
  }
  var og = Object.prototype, ig = og.hasOwnProperty;
  function sg(e) {
    var t = this.__data__;
    return xr ? t[e] !== void 0 : ig.call(t, e);
  }
  var ag = "__lodash_hash_undefined__";
  function cg(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = xr && t === void 0 ? ag : t, this;
  }
  function En(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  En.prototype.clear = Zp;
  En.prototype.delete = Qp;
  En.prototype.get = rg;
  En.prototype.has = sg;
  En.prototype.set = cg;
  function lg() {
    this.__data__ = [], this.size = 0;
  }
  function Qo(e, t) {
    for (var n = e.length; n--; ) if (ks(e[n][0], t)) return n;
    return -1;
  }
  var ug = Array.prototype, fg = ug.splice;
  function dg(e) {
    var t = this.__data__, n = Qo(t, e);
    if (n < 0) return false;
    var r = t.length - 1;
    return n == r ? t.pop() : fg.call(t, n, 1), --this.size, true;
  }
  function hg(e) {
    var t = this.__data__, n = Qo(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function pg(e) {
    return Qo(this.__data__, e) > -1;
  }
  function gg(e, t) {
    var n = this.__data__, r = Qo(n, e);
    return r < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[r][1] = t, this;
  }
  function Wt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Wt.prototype.clear = lg;
  Wt.prototype.delete = dg;
  Wt.prototype.get = hg;
  Wt.prototype.has = pg;
  Wt.prototype.set = gg;
  var kr = An(At, "Map");
  function mg() {
    this.size = 0, this.__data__ = {
      hash: new En(),
      map: new (kr || Wt)(),
      string: new En()
    };
  }
  function wg(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function ei(e, t) {
    var n = e.__data__;
    return wg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function yg(e) {
    var t = ei(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function bg(e) {
    return ei(this, e).get(e);
  }
  function vg(e) {
    return ei(this, e).has(e);
  }
  function _g(e, t) {
    var n = ei(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  Sn = function(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  };
  Sn.prototype.clear = mg;
  Sn.prototype.delete = yg;
  Sn.prototype.get = bg;
  Sn.prototype.has = vg;
  Sn.prototype.set = _g;
  function Tg(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
    return e;
  }
  var hu = du(Object.getPrototypeOf, Object), Eg = "[object Object]", Ig = Function.prototype, Ag = Object.prototype, pu = Ig.toString, Sg = Ag.hasOwnProperty, Og = pu.call(Object);
  Rg = function(e) {
    if (!It(e) || sn(e) != Eg) return false;
    var t = hu(e);
    if (t === null) return true;
    var n = Sg.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && pu.call(n) == Og;
  };
  var Pg = "[object DOMException]", Ng = "[object Error]";
  function Lg(e) {
    if (!It(e)) return false;
    var t = sn(e);
    return t == Ng || t == Pg || typeof e.message == "string" && typeof e.name == "string" && !Rg(e);
  }
  function Cg() {
    this.__data__ = new Wt(), this.size = 0;
  }
  function xg(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function kg(e) {
    return this.__data__.get(e);
  }
  function Mg(e) {
    return this.__data__.has(e);
  }
  var Dg = 200;
  function Fg(e, t) {
    var n = this.__data__;
    if (n instanceof Wt) {
      var r = n.__data__;
      if (!kr || r.length < Dg - 1) return r.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new Sn(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  xt = function(e) {
    var t = this.__data__ = new Wt(e);
    this.size = t.size;
  };
  xt.prototype.clear = Cg;
  xt.prototype.delete = xg;
  xt.prototype.get = kg;
  xt.prototype.has = Mg;
  xt.prototype.set = Fg;
  var gu = typeof exports == "object" && exports && !exports.nodeType && exports, Fa = gu && typeof module == "object" && module && !module.nodeType && module, Hg = Fa && Fa.exports === gu, Ha = Hg ? At.Buffer : void 0, Ua = Ha ? Ha.allocUnsafe : void 0;
  Ug = function(e, t) {
    if (t) return e.slice();
    var n = e.length, r = Ua ? Ua(n) : new e.constructor(n);
    return e.copy(r), r;
  };
  function jg(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (i[o++] = s);
    }
    return i;
  }
  function Wg() {
    return [];
  }
  var Gg = Object.prototype, $g = Gg.propertyIsEnumerable, ja = Object.getOwnPropertySymbols, Bg = ja ? function(e) {
    return e == null ? [] : (e = Object(e), jg(ja(e), function(t) {
      return $g.call(e, t);
    }));
  } : Wg;
  function Vg(e, t, n) {
    var r = t(e);
    return Gn(e) ? r : Tg(r, n(e));
  }
  function Qi(e) {
    return Vg(e, Xp, Bg);
  }
  var es = An(At, "DataView"), ts = An(At, "Promise"), ns = An(At, "Set"), Wa = "[object Map]", zg = "[object Object]", Ga = "[object Promise]", $a = "[object Set]", Ba = "[object WeakMap]", Va = "[object DataView]", Yg = In(es), qg = In(kr), Kg = In(ts), Jg = In(ns), Xg = In(Zi), ot = sn;
  (es && ot(new es(new ArrayBuffer(1))) != Va || kr && ot(new kr()) != Wa || ts && ot(ts.resolve()) != Ga || ns && ot(new ns()) != $a || Zi && ot(new Zi()) != Ba) && (ot = function(e) {
    var t = sn(e), n = t == zg ? e.constructor : void 0, r = n ? In(n) : "";
    if (r) switch (r) {
      case Yg:
        return Va;
      case qg:
        return Wa;
      case Kg:
        return Ga;
      case Jg:
        return $a;
      case Xg:
        return Ba;
    }
    return t;
  });
  var Zg = Object.prototype, Qg = Zg.hasOwnProperty;
  function em(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && Qg.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var Ro = At.Uint8Array;
  function Ds(e) {
    var t = new e.constructor(e.byteLength);
    return new Ro(t).set(new Ro(e)), t;
  }
  function tm(e, t) {
    var n = Ds(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var nm = /\w*$/;
  function rm(e) {
    var t = new e.constructor(e.source, nm.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var za = rn ? rn.prototype : void 0, Ya = za ? za.valueOf : void 0;
  function om(e) {
    return Ya ? Object(Ya.call(e)) : {};
  }
  im = function(e, t) {
    var n = t ? Ds(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var sm = "[object Boolean]", am = "[object Date]", cm = "[object Map]", lm = "[object Number]", um = "[object RegExp]", fm = "[object Set]", dm = "[object String]", hm = "[object Symbol]", pm = "[object ArrayBuffer]", gm = "[object DataView]", mm = "[object Float32Array]", wm = "[object Float64Array]", ym = "[object Int8Array]", bm = "[object Int16Array]", vm = "[object Int32Array]", _m = "[object Uint8Array]", Tm = "[object Uint8ClampedArray]", Em = "[object Uint16Array]", Im = "[object Uint32Array]";
  function Am(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case pm:
        return Ds(e);
      case sm:
      case am:
        return new r(+e);
      case gm:
        return tm(e);
      case mm:
      case wm:
      case ym:
      case bm:
      case vm:
      case _m:
      case Tm:
      case Em:
      case Im:
        return im(e, n);
      case cm:
        return new r();
      case lm:
      case dm:
        return new r(e);
      case um:
        return rm(e);
      case fm:
        return new r();
      case hm:
        return om(e);
    }
  }
  Sm = function(e) {
    return typeof e.constructor == "function" && !au(e) ? Zh(hu(e)) : {};
  };
  var Om = "[object Map]";
  function Rm(e) {
    return It(e) && ot(e) == Om;
  }
  var qa = $n && $n.isMap, Pm = qa ? Ms(qa) : Rm, Nm = "[object Set]";
  function Lm(e) {
    return It(e) && ot(e) == Nm;
  }
  var Ka = $n && $n.isSet, Cm = Ka ? Ms(Ka) : Lm, xm = 1, mu = "[object Arguments]", km = "[object Array]", Mm = "[object Boolean]", Dm = "[object Date]", Fm = "[object Error]", wu = "[object Function]", Hm = "[object GeneratorFunction]", Um = "[object Map]", jm = "[object Number]", yu = "[object Object]", Wm = "[object RegExp]", Gm = "[object Set]", $m = "[object String]", Bm = "[object Symbol]", Vm = "[object WeakMap]", zm = "[object ArrayBuffer]", Ym = "[object DataView]", qm = "[object Float32Array]", Km = "[object Float64Array]", Jm = "[object Int8Array]", Xm = "[object Int16Array]", Zm = "[object Int32Array]", Qm = "[object Uint8Array]", ew = "[object Uint8ClampedArray]", tw = "[object Uint16Array]", nw = "[object Uint32Array]", ue = {};
  ue[mu] = ue[km] = ue[zm] = ue[Ym] = ue[Mm] = ue[Dm] = ue[qm] = ue[Km] = ue[Jm] = ue[Xm] = ue[Zm] = ue[Um] = ue[jm] = ue[yu] = ue[Wm] = ue[Gm] = ue[$m] = ue[Bm] = ue[Qm] = ue[ew] = ue[tw] = ue[nw] = true;
  ue[Fm] = ue[wu] = ue[Vm] = false;
  function io(e, t, n, r, o, i) {
    var s, a = t & xm;
    if (s !== void 0) return s;
    if (!Zo(e)) return e;
    var c = Gn(e);
    if (c) s = em(e);
    else {
      var u = ot(e), l = u == wu || u == Hm;
      if (Oo(e)) return Ug(e, a);
      if (u == yu || u == mu || l && !o) s = l ? {} : Sm(e);
      else {
        if (!ue[u]) return o ? e : {};
        s = Am(e, u, a);
      }
    }
    i || (i = new xt());
    var d = i.get(e);
    if (d) return d;
    i.set(e, s), Cm(e) ? e.forEach(function(m) {
      s.add(io(m, t, n, m, e, i));
    }) : Pm(e) && e.forEach(function(m, b) {
      s.set(b, io(m, t, n, b, e, i));
    });
    var p = Qi, g = c ? void 0 : p(e);
    return Qh(g || e, function(m, b) {
      g && (b = m, m = e[b]), sp(s, b, io(m, t, n, b, e, i));
    }), s;
  }
  var rw = 1, ow = 4;
  Po = function(e) {
    return io(e, rw | ow);
  };
  var iw = "__lodash_hash_undefined__";
  function sw(e) {
    return this.__data__.set(e, iw), this;
  }
  function aw(e) {
    return this.__data__.has(e);
  }
  function No(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new Sn(); ++t < n; ) this.add(e[t]);
  }
  No.prototype.add = No.prototype.push = sw;
  No.prototype.has = aw;
  function cw(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return true;
    return false;
  }
  function lw(e, t) {
    return e.has(t);
  }
  var uw = 1, fw = 2;
  function bu(e, t, n, r, o, i) {
    var s = n & uw, a = e.length, c = t.length;
    if (a != c && !(s && c > a)) return false;
    var u = i.get(e), l = i.get(t);
    if (u && l) return u == t && l == e;
    var d = -1, p = true, g = n & fw ? new No() : void 0;
    for (i.set(e, t), i.set(t, e); ++d < a; ) {
      var m = e[d], b = t[d];
      if (r) var C = s ? r(b, m, d, t, e, i) : r(m, b, d, e, t, i);
      if (C !== void 0) {
        if (C) continue;
        p = false;
        break;
      }
      if (g) {
        if (!cw(t, function(S, I) {
          if (!lw(g, I) && (m === S || o(m, S, n, r, i))) return g.push(I);
        })) {
          p = false;
          break;
        }
      } else if (!(m === b || o(m, b, n, r, i))) {
        p = false;
        break;
      }
    }
    return i.delete(e), i.delete(t), p;
  }
  function dw(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(r, o) {
      n[++t] = [
        o,
        r
      ];
    }), n;
  }
  function hw(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(r) {
      n[++t] = r;
    }), n;
  }
  var pw = 1, gw = 2, mw = "[object Boolean]", ww = "[object Date]", yw = "[object Error]", bw = "[object Map]", vw = "[object Number]", _w = "[object RegExp]", Tw = "[object Set]", Ew = "[object String]", Iw = "[object Symbol]", Aw = "[object ArrayBuffer]", Sw = "[object DataView]", Ja = rn ? rn.prototype : void 0, vi = Ja ? Ja.valueOf : void 0;
  function Ow(e, t, n, r, o, i, s) {
    switch (n) {
      case Sw:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
        e = e.buffer, t = t.buffer;
      case Aw:
        return !(e.byteLength != t.byteLength || !i(new Ro(e), new Ro(t)));
      case mw:
      case ww:
      case vw:
        return ks(+e, +t);
      case yw:
        return e.name == t.name && e.message == t.message;
      case _w:
      case Ew:
        return e == t + "";
      case bw:
        var a = dw;
      case Tw:
        var c = r & pw;
        if (a || (a = hw), e.size != t.size && !c) return false;
        var u = s.get(e);
        if (u) return u == t;
        r |= gw, s.set(e, t);
        var l = bu(a(e), a(t), r, o, i, s);
        return s.delete(e), l;
      case Iw:
        if (vi) return vi.call(e) == vi.call(t);
    }
    return false;
  }
  var Rw = 1, Pw = Object.prototype, Nw = Pw.hasOwnProperty;
  function Lw(e, t, n, r, o, i) {
    var s = n & Rw, a = Qi(e), c = a.length, u = Qi(t), l = u.length;
    if (c != l && !s) return false;
    for (var d = c; d--; ) {
      var p = a[d];
      if (!(s ? p in t : Nw.call(t, p))) return false;
    }
    var g = i.get(e), m = i.get(t);
    if (g && m) return g == t && m == e;
    var b = true;
    i.set(e, t), i.set(t, e);
    for (var C = s; ++d < c; ) {
      p = a[d];
      var S = e[p], I = t[p];
      if (r) var D = s ? r(I, S, p, t, e, i) : r(S, I, p, e, t, i);
      if (!(D === void 0 ? S === I || o(S, I, n, r, i) : D)) {
        b = false;
        break;
      }
      C || (C = p == "constructor");
    }
    if (b && !C) {
      var E = e.constructor, W = t.constructor;
      E != W && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof W == "function" && W instanceof W) && (b = false);
    }
    return i.delete(e), i.delete(t), b;
  }
  var Cw = 1, Xa = "[object Arguments]", Za = "[object Array]", Kr = "[object Object]", xw = Object.prototype, Qa = xw.hasOwnProperty;
  function kw(e, t, n, r, o, i) {
    var s = Gn(e), a = Gn(t), c = s ? Za : ot(e), u = a ? Za : ot(t);
    c = c == Xa ? Kr : c, u = u == Xa ? Kr : u;
    var l = c == Kr, d = u == Kr, p = c == u;
    if (p && Oo(e)) {
      if (!Oo(t)) return false;
      s = true, l = false;
    }
    if (p && !l) return i || (i = new xt()), s || fu(e) ? bu(e, t, n, r, o, i) : Ow(e, t, c, n, r, o, i);
    if (!(n & Cw)) {
      var g = l && Qa.call(e, "__wrapped__"), m = d && Qa.call(t, "__wrapped__");
      if (g || m) {
        var b = g ? e.value() : e, C = m ? t.value() : t;
        return i || (i = new xt()), o(b, C, n, r, i);
      }
    }
    return p ? (i || (i = new xt()), Lw(e, t, n, r, o, i)) : false;
  }
  vu = function(e, t, n, r, o) {
    return e === t ? true : e == null || t == null || !It(e) && !It(t) ? e !== e && t !== t : kw(e, t, n, r, vu, o);
  };
  var Mw = "[object String]";
  function rs(e) {
    return typeof e == "string" || !Gn(e) && It(e) && sn(e) == Mw;
  }
  function Dw(e, t) {
    return vu(e, t);
  }
  const je = (e) => rs(e) ? e : JSON.stringify(e), ht = {
    unloaded: (...e) => `[loadModules] Module "${je(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${je(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${je(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${je(e[0])}" failed to load.
Trackback: 
${je(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${je(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${je(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${je(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${je(e[0])}" is missing the following dependencies: ${je(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${je(e[0])}" is loading its dependencies (${e.slice(1).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${je(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${je(e[0])}" dependencies failed to load. 

Trackback: 
${je(e[1])}`
  }, Fw = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function _u(e, t, n = 1e4, r = {}, o = 0, i = 0) {
    var _a2, _b2, _c2, _d2;
    const { logger: s = Fw, progressReporter: a, printLog: c = true } = r, u = e.find((m) => m.name === t);
    if (!u) throw new Error(`cannot exactly find module "${t}" from the library`);
    const l = e.findIndex((m) => m.name === u.name);
    if (e[l].status === "loaded") return c && s.info(ht.alreadyLoaded(u.name)), Promise.resolve();
    const d = u.dependencies || [], p = e.filter((m) => d.includes(m.name)), g = d.filter((m) => !e.find((b) => b.name === m));
    if (g.length > 0) {
      const m = ht.missingDependencies(u.name, g.join(", "));
      return c && s.error(m), Promise.reject(m);
    }
    if (e[l].status === "error") {
      const m = ht.errorDetermined(u.name);
      return c && s.info(m), Promise.reject(m);
    }
    if (e[l].status === "loading") return c && s.info(ht.alreadyLoading(u.name)), await Hw(e, u.name, n, s), Promise.resolve();
    try {
      if (p.length > 0) {
        s.info(ht.loadDependencies(u.name, p.map((C) => C.name)));
        const m = o === 0 ? p.length : i;
        let b = 0;
        await Promise.all(p.map(async (C) => {
          var _a3;
          await _u(e, C.name, n, {
            logger: s,
            progressReporter: a,
            printLog: c
          }, o + 1, i), b++, (_a3 = a == null ? void 0 : a.onOverallProgress) == null ? void 0 : _a3.call(a, b, m);
        })), c && s.info(ht.dependenciesReady(u.name));
      }
      e[l].status = "loading", (_a2 = a == null ? void 0 : a.onModuleStart) == null ? void 0 : _a2.call(a, u.displayName);
      try {
        return c && s.info(ht.loading(u.name)), await u.moduleInit(n), e[l].status = "loaded", (_b2 = a == null ? void 0 : a.onModuleComplete) == null ? void 0 : _b2.call(a, u.displayName), c && s.info(ht.loaded(u.name)), Promise.resolve();
      } catch (m) {
        e[l].status = "error";
        const b = ht.error(u.name, rs(m) ? m : Lg(m) ? m.message : JSON.stringify(m));
        return s.error(b), (_c2 = a == null ? void 0 : a.onModuleError) == null ? void 0 : _c2.call(a, u.displayName, rs(m) ? new Error(m) : m), Promise.reject(b);
      }
    } catch (m) {
      e[l].status = "error";
      const b = ht.error(u.name, m);
      return s.error(b), (_d2 = a == null ? void 0 : a.onModuleError) == null ? void 0 : _d2.call(a, u.displayName, m), Promise.reject(b);
    }
  }
  async function Hw(e, t, n = 1e4, r) {
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
  let Uw, jw, ec, Ww, Gw, $w, Tu;
  Uw = "modulepreload";
  jw = function(e, t) {
    return new URL(e, t).href;
  };
  ec = {};
  _i = function(t, n, r) {
    let o = Promise.resolve();
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
      o = s(n.map((l) => {
        if (l = jw(l, r), l in ec) return;
        ec[l] = true;
        const d = l.endsWith(".css"), p = d ? '[rel="stylesheet"]' : "";
        if (!!r) for (let b = a.length - 1; b >= 0; b--) {
          const C = a[b];
          if (C.href === l && (!d || C.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${l}"]${p}`)) return;
        const m = document.createElement("link");
        if (m.rel = d ? "stylesheet" : Uw, d || (m.as = "script"), m.crossOrigin = "", m.href = l, u && m.setAttribute("nonce", u), document.head.appendChild(m), d) return new Promise((b, C) => {
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
  Ww = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  Gw = [
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
  $w = {
    withStackTrace: false
  };
  Tu = (e, t, n = $w) => {
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
  function hn(e, t, n, r) {
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
  function tc(e) {
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
  function _t(e) {
    return this instanceof _t ? (this.v = e, this) : new _t(e);
  }
  function nc(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", s), o[Symbol.asyncIterator] = function() {
      return this;
    }, o;
    function s(g) {
      return function(m) {
        return Promise.resolve(m).then(g, d);
      };
    }
    function a(g, m) {
      r[g] && (o[g] = function(b) {
        return new Promise(function(C, S) {
          i.push([
            g,
            b,
            C,
            S
          ]) > 1 || c(g, b);
        });
      }, m && (o[g] = m(o[g])));
    }
    function c(g, m) {
      try {
        u(r[g](m));
      } catch (b) {
        p(i[0][3], b);
      }
    }
    function u(g) {
      g.value instanceof _t ? Promise.resolve(g.value.v).then(l, d) : p(i[0][2], g);
    }
    function l(g) {
      c("next", g);
    }
    function d(g) {
      c("throw", g);
    }
    function p(g, m) {
      g(m), i.shift(), i.length && c(i[0][0], i[0][1]);
    }
  }
  function Bw(e) {
    var t, n;
    return t = {}, r("next"), r("throw", function(o) {
      throw o;
    }), r("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function r(o, i) {
      t[o] = e[o] ? function(s) {
        return (n = !n) ? {
          value: _t(e[o](s)),
          done: false
        } : i ? i(s) : s;
      } : i;
    }
  }
  function Vw(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof tc == "function" ? tc(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
  class Ne {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const n = t.then((r) => new mt(r));
      return new Ne(n);
    }
    static fromPromise(t, n) {
      const r = t.then((o) => new mt(o)).catch((o) => new nt(n(o)));
      return new Ne(r);
    }
    static fromThrowable(t, n) {
      return (...r) => new Ne(hn(this, void 0, void 0, function* () {
        try {
          return new mt(yield t(...r));
        } catch (o) {
          return new nt(n ? n(o) : o);
        }
      }));
    }
    static combine(t) {
      return zw(t);
    }
    static combineWithAllErrors(t) {
      return Yw(t);
    }
    map(t) {
      return new Ne(this._promise.then((n) => hn(this, void 0, void 0, function* () {
        return n.isErr() ? new nt(n.error) : new mt(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new Ne(this._promise.then((n) => hn(this, void 0, void 0, function* () {
        if (n.isErr()) return new nt(n.error);
        const r = yield t(n.value);
        return r.isErr() ? new nt(r.error) : new mt(n.value);
      })));
    }
    andTee(t) {
      return new Ne(this._promise.then((n) => hn(this, void 0, void 0, function* () {
        if (n.isErr()) return new nt(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new mt(n.value);
      })));
    }
    orTee(t) {
      return new Ne(this._promise.then((n) => hn(this, void 0, void 0, function* () {
        if (n.isOk()) return new mt(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new nt(n.error);
      })));
    }
    mapErr(t) {
      return new Ne(this._promise.then((n) => hn(this, void 0, void 0, function* () {
        return n.isOk() ? new mt(n.value) : new nt(yield t(n.error));
      })));
    }
    andThen(t) {
      return new Ne(this._promise.then((n) => {
        if (n.isErr()) return new nt(n.error);
        const r = t(n.value);
        return r instanceof Ne ? r._promise : r;
      }));
    }
    orElse(t) {
      return new Ne(this._promise.then((n) => hn(this, void 0, void 0, function* () {
        return n.isErr() ? t(n.error) : new mt(n.value);
      })));
    }
    match(t, n) {
      return this._promise.then((r) => r.match(t, n));
    }
    unwrapOr(t) {
      return this._promise.then((n) => n.unwrapOr(t));
    }
    safeUnwrap() {
      return nc(this, arguments, function* () {
        return yield _t(yield _t(yield* Bw(Vw(yield _t(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return nc(this, arguments, function* () {
        const n = yield _t(this._promise);
        return n.isErr() && (yield yield _t(so(n.error))), yield _t(n.value);
      });
    }
  }
  function so(e) {
    return new Ne(Promise.resolve(new nt(e)));
  }
  const Eu = (e) => {
    let t = H([]);
    for (const n of e) if (n.isErr()) {
      t = L(n.error);
      break;
    } else t.map((r) => r.push(n.value));
    return t;
  }, zw = (e) => Ne.fromSafePromise(Promise.all(e)).andThen(Eu), Iu = (e) => {
    let t = H([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = L([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, Yw = (e) => Ne.fromSafePromise(Promise.all(e)).andThen(Iu);
  var os;
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
      return Eu(o);
    }
    e.combine = n;
    function r(o) {
      return Iu(o);
    }
    e.combineWithAllErrors = r;
  })(os || (os = {}));
  H = function(e) {
    return new mt(e);
  };
  L = function(e) {
    return new nt(e);
  };
  class mt {
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
      return Ne.fromSafePromise(t(this.value));
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
      throw Tu("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class nt {
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
      return so(this.error);
    }
    asyncAndThrough(t) {
      return so(this.error);
    }
    asyncMap(t) {
      return so(this.error);
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
      throw Tu("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  os.fromThrowable;
  jr = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(jr || {});
  Yn = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class Tt extends Yn {
    constructor(t, n = "GENERIC_ERROR", r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function qw(e) {
    return e instanceof Yn;
  }
  function Ti(e, t = "Unknown error occurred") {
    return qw(e) ? e : e instanceof Error ? new Tt(t, "UNKNOWN_ERROR", e) : new Tt(t, "UNKNOWN_ERROR");
  }
  function pt(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  }
  class Fs extends Yn {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "code");
      __publicField(this, "domain", jr.GEOLOCATION);
      this.code = n;
    }
  }
  class Rn extends Fs {
    constructor(t = "User denied geolocation permission", n) {
      super(t, "PERMISSION_DENIED", n);
    }
  }
  class Kw extends Fs {
    constructor(t = "Geolocation is not supported by this browser", n) {
      super(t, "UNSUPPORTED_BROWSER", n);
    }
  }
  class be extends Fs {
    constructor(t = "Geolocation update service error", n, r) {
      super(t, "UPDATE_SERVICE_ERROR", r), this.serviceName = n;
    }
  }
  var Jw = "2.0.5", is = 500, rc = "user-agent", Bn = "", oc = "?", Lo = "function", Xt = "undefined", Vn = "object", ss = "string", We = "browser", Lt = "cpu", Et = "device", it = "engine", Ze = "os", Hn = "result", T = "name", y = "type", _ = "vendor", A = "version", Ge = "architecture", Mr = "major", v = "model", fr = "console", K = "mobile", ae = "tablet", _e = "smarttv", wt = "wearable", Jr = "xr", dr = "embedded", Pn = "inapp", Hs = "brands", wn = "formFactors", Us = "fullVersionList", Un = "platform", js = "platformVersion", ti = "bitness", an = "sec-ch-ua", Xw = an + "-full-version-list", Zw = an + "-arch", Qw = an + "-" + ti, ey = an + "-form-factors", ty = an + "-" + K, ny = an + "-" + v, Au = an + "-" + Un, ry = Au + "-version", Su = [
    Hs,
    Us,
    K,
    v,
    Un,
    js,
    Ge,
    wn,
    ti
  ], Xr = "Amazon", Nn = "Apple", ic = "ASUS", sc = "BlackBerry", pn = "Google", ac = "Huawei", Ei = "Lenovo", cc = "Honor", Zr = "LG", Ii = "Microsoft", Ai = "Motorola", Si = "Nvidia", lc = "OnePlus", Oi = "OPPO", nr = "Samsung", uc = "Sharp", rr = "Sony", Ri = "Xiaomi", Pi = "Zebra", fc = "Chrome", dc = "Chromium", Bt = "Chromecast", ao = "Edge", or = "Firefox", ir = "Opera", Ni = "Facebook", hc = "Sogou", Ln = "Mobile ", sr = " Browser", as = "Windows", oy = typeof window !== Xt, $e = oy && window.navigator ? window.navigator : void 0, Jt = $e && $e.userAgentData ? $e.userAgentData : void 0, iy = function(e, t) {
    var n = {}, r = t;
    if (!Co(t)) {
      r = {};
      for (var o in t) for (var i in t[o]) r[i] = t[o][i].concat(r[i] ? r[i] : []);
    }
    for (var s in e) n[s] = r[s] && r[s].length % 2 === 0 ? r[s].concat(e[s]) : e[s];
    return n;
  }, ni = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, cs = function(e, t) {
    if (typeof e === Vn && e.length > 0) {
      for (var n in e) if (Zt(t) == Zt(e[n])) return true;
      return false;
    }
    return qn(e) ? Zt(t) == Zt(e) : false;
  }, Co = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? Co(e[n]) : false);
  }, qn = function(e) {
    return typeof e === ss;
  }, Li = function(e) {
    if (e) {
      for (var t = [], n = zn(/\\?\"/g, e).split(","), r = 0; r < n.length; r++) if (n[r].indexOf(";") > -1) {
        var o = xo(n[r]).split(";v=");
        t[r] = {
          brand: o[0],
          version: o[1]
        };
      } else t[r] = xo(n[r]);
      return t;
    }
  }, Zt = function(e) {
    return qn(e) ? e.toLowerCase() : e;
  }, Ci = function(e) {
    return qn(e) ? zn(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, Ct = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var n = e[t];
      typeof n == Vn && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, zn = function(e, t) {
    return qn(t) ? t.replace(e, Bn) : t;
  }, ar = function(e) {
    return zn(/\\?\"/g, e);
  }, xo = function(e, t) {
    if (qn(e)) return e = zn(/^\s\s*/, e), typeof t === Xt ? e : e.substring(0, is);
  }, xi = function(e, t) {
    if (!(!e || !t)) for (var n = 0, r, o, i, s, a, c; n < t.length && !a; ) {
      var u = t[n], l = t[n + 1];
      for (r = o = 0; r < u.length && !a && u[r]; ) if (a = u[r++].exec(e), a) for (i = 0; i < l.length; i++) c = a[++o], s = l[i], typeof s === Vn && s.length > 0 ? s.length === 2 ? typeof s[1] == Lo ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : s.length >= 3 && (typeof s[1] === Lo && !(s[1].exec && s[1].test) ? s.length > 3 ? this[s[0]] = c ? s[1].apply(this, s.slice(2)) : void 0 : this[s[0]] = c ? s[1].call(this, c, s[2]) : void 0 : s.length == 3 ? this[s[0]] = c ? c.replace(s[1], s[2]) : void 0 : s.length == 4 ? this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : void 0 : s.length > 4 && (this[s[0]] = c ? s[3].apply(this, [
        c.replace(s[1], s[2])
      ].concat(s.slice(4))) : void 0)) : this[s] = c || void 0;
      n += 2;
    }
  }, bt = function(e, t) {
    for (var n in t) if (typeof t[n] === Vn && t[n].length > 0) {
      for (var r = 0; r < t[n].length; r++) if (cs(t[n][r], e)) return n === oc ? void 0 : n;
    } else if (cs(t[n], e)) return n === oc ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, pc = {
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
  }, gc = {
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
  }, sy = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, mc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          Ln + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          ao + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        T,
        A
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          ir + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          ir + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          ir
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        A,
        [
          T,
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
        T,
        A
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        A,
        [
          T,
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
          T,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        A,
        [
          T,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "Smart " + Ei + sr
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          T,
          /(.+)/,
          "$1 Secure" + sr
        ],
        A
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          or + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          ir + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          ir + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "MIUI" + sr
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        A,
        [
          T,
          Ln + or
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        A,
        [
          T,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          T,
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
          T,
          /(.+)/,
          "$1" + sr
        ],
        A
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          nr + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        A,
        [
          T,
          hc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          T,
          hc + " Mobile"
        ],
        A
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        T,
        A
      ],
      [
        /(lbbrowser|rekonq)/i
      ],
      [
        T
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        A,
        T
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          T,
          Ni
        ],
        A,
        [
          y,
          Pn
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
        T,
        A,
        [
          y,
          Pn
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        A,
        [
          T,
          "GSA"
        ],
        [
          y,
          Pn
        ]
      ],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          "TikTok"
        ],
        [
          y,
          Pn
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        T,
        [
          y,
          Pn
        ]
      ],
      [
        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
      ],
      [
        [
          T,
          /(.+)/,
          "Zalo"
        ],
        A,
        [
          y,
          Pn
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        T,
        A
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        A,
        [
          T,
          fc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        A,
        [
          T,
          ao + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          T,
          fc + " WebView"
        ],
        A
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        A,
        [
          T,
          "Android" + sr
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        A,
        [
          T,
          Ln + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        T,
        A
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        A,
        [
          T,
          Ln + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          T,
          Ln + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        A,
        T
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        T,
        [
          A,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        T,
        A
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          T,
          Ln + or
        ],
        A
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          T,
          "Netscape"
        ],
        A
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        T,
        A
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        A,
        [
          T,
          or + " Reality"
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
        T,
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
        T,
        [
          A,
          /[^\d\.]+./,
          Bn
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
          Bn,
          Zt
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
          _,
          nr
        ],
        [
          y,
          ae
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
          _,
          nr
        ],
        [
          y,
          K
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
      ],
      [
        v,
        [
          _,
          Nn
        ],
        [
          y,
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
          _,
          Nn
        ],
        [
          y,
          ae
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        v,
        [
          _,
          Nn
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        v,
        [
          _,
          uc
        ],
        [
          y,
          K
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        v,
        [
          _,
          cc
        ],
        [
          y,
          ae
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        v,
        [
          _,
          cc
        ],
        [
          y,
          K
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        v,
        [
          _,
          ac
        ],
        [
          y,
          ae
        ]
      ],
      [
        /(?:huawei)([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
      ],
      [
        v,
        [
          _,
          ac
        ],
        [
          y,
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
          _,
          Ri
        ],
        [
          y,
          ae
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
          _,
          Ri
        ],
        [
          y,
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
          _,
          lc
        ],
        [
          y,
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
          _,
          Oi
        ],
        [
          y,
          K
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        v,
        [
          _,
          bt,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": Oi
          }
        ],
        [
          y,
          ae
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        v,
        [
          _,
          "BLU"
        ],
        [
          y,
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
          _,
          "Vivo"
        ],
        [
          y,
          K
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        v,
        [
          _,
          "Realme"
        ],
        [
          y,
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
          _,
          Ei
        ],
        [
          y,
          ae
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        v,
        [
          _,
          Ei
        ],
        [
          y,
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
          _,
          Ai
        ],
        [
          y,
          K
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        v,
        [
          _,
          Ai
        ],
        [
          y,
          ae
        ]
      ],
      [
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        v,
        [
          _,
          Zr
        ],
        [
          y,
          ae
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
          _,
          Zr
        ],
        [
          y,
          K
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        _,
        v,
        [
          y,
          ae
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
          y,
          K
        ],
        [
          _,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        v,
        [
          _,
          pn
        ],
        [
          y,
          ae
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        v,
        [
          _,
          pn
        ],
        [
          y,
          K
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        _,
        v
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        v,
        [
          _,
          rr
        ],
        [
          y,
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
          _,
          rr
        ],
        [
          y,
          ae
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
          _,
          Xr
        ],
        [
          y,
          ae
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
          _,
          Xr
        ],
        [
          y,
          K
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        v,
        _,
        [
          y,
          ae
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /\(bb10; (\w+)/i
      ],
      [
        v,
        [
          _,
          sc
        ],
        [
          y,
          K
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        v,
        [
          _,
          ic
        ],
        [
          y,
          ae
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        v,
        [
          _,
          ic
        ],
        [
          y,
          K
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        v,
        [
          _,
          "HTC"
        ],
        [
          y,
          ae
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        _,
        [
          v,
          /_/g,
          " "
        ],
        [
          y,
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
          _,
          "TCL"
        ],
        [
          y,
          ae
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        v,
        [
          _,
          "TCL"
        ],
        [
          y,
          K
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          _,
          Zt
        ],
        v,
        [
          y,
          bt,
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
          _,
          "Acer"
        ],
        [
          y,
          ae
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        v,
        [
          _,
          "Meizu"
        ],
        [
          y,
          K
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        v,
        [
          _,
          "Ulefone"
        ],
        [
          y,
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
          _,
          "Energizer"
        ],
        [
          y,
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
          _,
          "Cat"
        ],
        [
          y,
          K
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        v,
        [
          _,
          "Smartfren"
        ],
        [
          y,
          K
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        v,
        [
          _,
          "Nothing"
        ],
        [
          y,
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
          _,
          "Archos"
        ],
        [
          y,
          ae
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        v,
        [
          _,
          "Archos"
        ],
        [
          y,
          K
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        v,
        [
          _,
          "HMD"
        ],
        [
          y,
          K
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        _,
        v,
        [
          y,
          ae
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
        _,
        v,
        [
          y,
          K
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        _,
        v,
        [
          y,
          ae
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        v,
        [
          _,
          Ii
        ],
        [
          y,
          ae
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        v,
        [
          _,
          "Fairphone"
        ],
        [
          y,
          K
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        v,
        [
          _,
          Si
        ],
        [
          y,
          ae
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        _,
        v,
        [
          y,
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
          _,
          Ii
        ],
        [
          y,
          K
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        v,
        [
          _,
          Pi
        ],
        [
          y,
          ae
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        v,
        [
          _,
          Pi
        ],
        [
          y,
          K
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        _,
        [
          y,
          _e
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
          _,
          nr
        ],
        [
          y,
          _e
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        _,
        v,
        [
          y,
          _e
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          _,
          Zr
        ],
        [
          y,
          _e
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        _,
        [
          v,
          Nn + " TV"
        ],
        [
          y,
          _e
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          v,
          Bt + " Third Generation"
        ],
        [
          _,
          pn
        ],
        [
          y,
          _e
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
          _,
          pn
        ],
        [
          y,
          _e
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          v,
          Bt + " Nest Hub"
        ],
        [
          _,
          pn
        ],
        [
          y,
          _e
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          v,
          Bt
        ],
        [
          _,
          pn
        ],
        [
          y,
          _e
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        v,
        [
          _,
          Ni
        ],
        [
          y,
          _e
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        v,
        [
          _,
          Xr
        ],
        [
          y,
          _e
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        v,
        [
          _,
          Si
        ],
        [
          y,
          _e
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        v,
        [
          _,
          uc
        ],
        [
          y,
          _e
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        v,
        [
          _,
          rr
        ],
        [
          y,
          _e
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        v,
        [
          _,
          Ri
        ],
        [
          y,
          _e
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        _,
        v,
        [
          y,
          _e
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          _,
          /.+\/(\w+)/,
          "$1",
          bt,
          {
            LG: "lge"
          }
        ],
        [
          v,
          xo
        ],
        [
          y,
          _e
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        v,
        [
          _,
          rr
        ],
        [
          y,
          fr
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        v,
        [
          _,
          Ii
        ],
        [
          y,
          fr
        ]
      ],
      [
        /(ouya)/i,
        /(nintendo) (\w+)/i,
        /(retroid) (pocket ([^\)]+))/i
      ],
      [
        _,
        v,
        [
          y,
          fr
        ]
      ],
      [
        /droid.+; (shield)( bui|\))/i
      ],
      [
        v,
        [
          _,
          Si
        ],
        [
          y,
          fr
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        v,
        [
          _,
          nr
        ],
        [
          y,
          wt
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        _,
        v,
        [
          y,
          wt
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        v,
        [
          _,
          Oi
        ],
        [
          y,
          wt
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        v,
        [
          _,
          Nn
        ],
        [
          y,
          wt
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        v,
        [
          _,
          lc
        ],
        [
          y,
          wt
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        v,
        [
          _,
          Ai
        ],
        [
          y,
          wt
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        v,
        [
          _,
          rr
        ],
        [
          y,
          wt
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        v,
        [
          _,
          Zr
        ],
        [
          y,
          wt
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        v,
        [
          _,
          Pi
        ],
        [
          y,
          wt
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        v,
        [
          _,
          pn
        ],
        [
          y,
          Jr
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        _,
        v,
        [
          y,
          Jr
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        v,
        [
          _,
          Ni
        ],
        [
          y,
          Jr
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          y,
          Jr
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        _,
        [
          y,
          dr
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        v,
        [
          _,
          Xr
        ],
        [
          y,
          dr
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        v,
        [
          _,
          Nn
        ],
        [
          y,
          dr
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          y,
          dr
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        v,
        [
          y,
          _e
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          y,
          _e
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
      ],
      [
        v,
        [
          y,
          bt,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": ae
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          y,
          ae
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          y,
          K
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        v,
        [
          _,
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
          T,
          ao + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        T,
        A
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        A,
        [
          T,
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
        T,
        A
      ],
      [
        /ladybird\//i
      ],
      [
        [
          T,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        A,
        T
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          T,
          /N/,
          "R"
        ],
        [
          A,
          bt,
          pc
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        T,
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
          bt,
          pc
        ],
        [
          T,
          as
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        T,
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
          T,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          T,
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
          T,
          Bt + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        A,
        [
          T,
          Bt + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        A,
        [
          T,
          Bt + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        A,
        [
          T,
          Bt + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        A,
        [
          T,
          Bt
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        A,
        T
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          T,
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
        T,
        A
      ],
      [
        /\(bb(10);/i
      ],
      [
        A,
        [
          T,
          sc
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        A,
        [
          T,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        A,
        [
          T,
          or + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        A,
        [
          T,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          A,
          bt,
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
          T,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        A,
        [
          T,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          T,
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
        T,
        A
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          T,
          "Solaris"
        ],
        A
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        T,
        A
      ]
    ]
  }, Qr = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return Ct.call(e.init, [
      [
        We,
        [
          T,
          A,
          Mr,
          y
        ]
      ],
      [
        Lt,
        [
          Ge
        ]
      ],
      [
        Et,
        [
          y,
          v,
          _
        ]
      ],
      [
        it,
        [
          T,
          A
        ]
      ],
      [
        Ze,
        [
          T,
          A
        ]
      ]
    ]), Ct.call(e.isIgnore, [
      [
        We,
        [
          A,
          Mr
        ]
      ],
      [
        it,
        [
          A
        ]
      ],
      [
        Ze,
        [
          A
        ]
      ]
    ]), Ct.call(e.isIgnoreRgx, [
      [
        We,
        / ?browser$/i
      ],
      [
        Ze,
        / ?os$/i
      ]
    ]), Ct.call(e.toString, [
      [
        We,
        [
          T,
          A
        ]
      ],
      [
        Lt,
        [
          Ge
        ]
      ],
      [
        Et,
        [
          _,
          v
        ]
      ],
      [
        it,
        [
          T,
          A
        ]
      ],
      [
        Ze,
        [
          T,
          A
        ]
      ]
    ]), e;
  })(), ay = function(e, t) {
    var n = Qr.init[t], r = Qr.isIgnore[t] || 0, o = Qr.isIgnoreRgx[t] || 0, i = Qr.toString[t] || 0;
    function s() {
      Ct.call(this, n);
    }
    return s.prototype.getItem = function() {
      return e;
    }, s.prototype.withClientHints = function() {
      return Jt ? Jt.getHighEntropyValues(Su).then(function(a) {
        return e.setCH(new Ou(a, false)).parseCH().get();
      }) : e.parseCH().get();
    }, s.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != Hn && (s.prototype.is = function(a) {
      var c = false;
      for (var u in this) if (this.hasOwnProperty(u) && !cs(r, u) && Zt(o ? zn(o, this[u]) : this[u]) == Zt(o ? zn(o, a) : a)) {
        if (c = true, a != Xt) break;
      } else if (a == Xt && c) {
        c = !c;
        break;
      }
      return c;
    }, s.prototype.toString = function() {
      var a = Bn;
      for (var c in i) typeof this[i[c]] !== Xt && (a += (a ? " " : Bn) + this[i[c]]);
      return a || Xt;
    }), Jt || (s.prototype.then = function(a) {
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
  function Ou(e, t) {
    if (e = e || {}, Ct.call(this, Su), t) Ct.call(this, [
      [
        Hs,
        Li(e[an])
      ],
      [
        Us,
        Li(e[Xw])
      ],
      [
        K,
        /\?1/.test(e[ty])
      ],
      [
        v,
        ar(e[ny])
      ],
      [
        Un,
        ar(e[Au])
      ],
      [
        js,
        ar(e[ry])
      ],
      [
        Ge,
        ar(e[Zw])
      ],
      [
        wn,
        Li(e[ey])
      ],
      [
        ti,
        ar(e[Qw])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== Xt && (this[n] = e[n]);
  }
  function wc(e, t, n, r) {
    return this.get = function(o) {
      return o ? this.data.hasOwnProperty(o) ? this.data[o] : void 0 : this.data;
    }, this.set = function(o, i) {
      return this.data[o] = i, this;
    }, this.setCH = function(o) {
      return this.uaCH = o, this;
    }, this.detectFeature = function() {
      if ($e && $e.userAgent == this.ua) switch (this.itemType) {
        case We:
          $e.brave && typeof $e.brave.isBrave == Lo && this.set(T, "Brave");
          break;
        case Et:
          !this.get(y) && Jt && Jt[K] && this.set(y, K), this.get(v) == "Macintosh" && $e && typeof $e.standalone !== Xt && $e.maxTouchPoints && $e.maxTouchPoints > 2 && this.set(v, "iPad").set(y, ae);
          break;
        case Ze:
          !this.get(T) && Jt && Jt[Un] && this.set(T, Jt[Un]);
          break;
        case Hn:
          var o = this.data, i = function(s) {
            return o[s].getItem().detectFeature().get();
          };
          this.set(We, i(We)).set(Lt, i(Lt)).set(Et, i(Et)).set(it, i(it)).set(Ze, i(Ze));
      }
      return this;
    }, this.parseUA = function() {
      return this.itemType != Hn && xi.call(this.data, this.ua, this.rgxMap), this.itemType == We && this.set(Mr, Ci(this.get(A))), this;
    }, this.parseCH = function() {
      var o = this.uaCH, i = this.rgxMap;
      switch (this.itemType) {
        case We:
        case it:
          var s = o[Us] || o[Hs], a;
          if (s) for (var c = 0; c < s.length; c++) {
            var u = s[c].brand || s[c], l = s[c].version;
            this.itemType == We && !/not.a.brand/i.test(u) && (!a || /Chrom/.test(a) && u != dc || a == ao && /WebView2/.test(u)) && (u = bt(u, sy), a = this.get(T), a && !/Chrom/.test(a) && /Chrom/.test(u) || this.set(T, u).set(A, l).set(Mr, Ci(l)), a = u), this.itemType == it && u == dc && this.set(A, l);
          }
          break;
        case Lt:
          var d = o[Ge];
          d && (d && o[ti] == "64" && (d += "64"), xi.call(this.data, d + ";", i));
          break;
        case Et:
          if (o[K] && this.set(y, K), o[v] && (this.set(v, o[v]), !this.get(y) || !this.get(_))) {
            var p = {};
            xi.call(p, "droid 9; " + o[v] + ")", i), !this.get(y) && p.type && this.set(y, p.type), !this.get(_) && p.vendor && this.set(_, p.vendor);
          }
          if (o[wn]) {
            var g;
            if (typeof o[wn] != "string") for (var m = 0; !g && m < o[wn].length; ) g = bt(o[wn][m++], gc);
            else g = bt(o[wn], gc);
            this.set(y, g);
          }
          break;
        case Ze:
          var b = o[Un];
          if (b) {
            var C = o[js];
            b == as && (C = parseInt(Ci(C), 10) >= 13 ? "11" : "10"), this.set(T, b).set(A, C);
          }
          this.get(T) == as && o[v] == "Xbox" && this.set(T, "Xbox").set(A, void 0);
          break;
        case Hn:
          var S = this.data, I = function(D) {
            return S[D].getItem().setCH(o).parseCH().get();
          };
          this.set(We, I(We)).set(Lt, I(Lt)).set(Et, I(Et)).set(it, I(it)).set(Ze, I(Ze));
      }
      return this;
    }, Ct.call(this, [
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
        ay(this, e)
      ]
    ]), this;
  }
  Ft = function(e, t, n) {
    if (typeof e === Vn ? (Co(e, true) ? (typeof t === Vn && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === ss && !Co(t, true) && (n = t, t = void 0), n) if (typeof n.append === Lo) {
      var r = {};
      n.forEach(function(l, d) {
        r[String(d).toLowerCase()] = l;
      }), n = r;
    } else {
      var o = {};
      for (var i in n) n.hasOwnProperty(i) && (o[String(i).toLowerCase()] = n[i]);
      n = o;
    }
    if (!(this instanceof Ft)) return new Ft(e, t, n).getResult();
    var s = typeof e === ss ? e : n && n[rc] ? n[rc] : $e && $e.userAgent ? $e.userAgent : Bn, a = new Ou(n, true), c = t ? iy(mc, t) : mc, u = function(l) {
      return l == Hn ? function() {
        return new wc(l, s, c, a).set("ua", s).set(We, this.getBrowser()).set(Lt, this.getCPU()).set(Et, this.getDevice()).set(it, this.getEngine()).set(Ze, this.getOS()).get();
      } : function() {
        return new wc(l, s, c[l], a).parseUA().get();
      };
    };
    return Ct.call(this, [
      [
        "getBrowser",
        u(We)
      ],
      [
        "getCPU",
        u(Lt)
      ],
      [
        "getDevice",
        u(Et)
      ],
      [
        "getEngine",
        u(it)
      ],
      [
        "getOS",
        u(Ze)
      ],
      [
        "getResult",
        u(Hn)
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
          return qn(l) && (s = l.length > is ? xo(l, is) : l), this;
        }
      ]
    ]).setUA(s), this;
  };
  Ft.VERSION = Jw;
  Ft.BROWSER = ni([
    T,
    A,
    Mr,
    y
  ]);
  Ft.CPU = ni([
    Ge
  ]);
  Ft.DEVICE = ni([
    v,
    _,
    y,
    fr,
    K,
    _e,
    ae,
    wt,
    dr
  ]);
  Ft.ENGINE = Ft.OS = ni([
    T,
    A
  ]);
  var Se = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(Se || {});
  class cy {
    constructor() {
      __publicField(this, "parser");
      this.parser = new Ft(navigator.userAgent);
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
  const Ws = new cy();
  _b = function() {
    return Ws.getPlatformContext();
  };
  function ly(e, t, n, r) {
    if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
  }
  function uy(e, t, n, r, o) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var co;
  function fy(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function Ee(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class dy {
    get rid() {
      return ly(this, co, "f");
    }
    constructor(t) {
      co.set(this, void 0), uy(this, co, t);
    }
    async close() {
      return Ee("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  co = /* @__PURE__ */ new WeakMap();
  var yc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(yc || (yc = {}));
  async function hy(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await Ee("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function bc(e, t, n) {
    var r;
    const o = (r = void 0) !== null && r !== void 0 ? r : {
      kind: "Any"
    };
    return Ee("plugin:event|listen", {
      event: e,
      target: o,
      handler: fy(t)
    }).then((i) => async () => hy(e, i));
  }
  async function py(e, t) {
    return await ko.load(e, t);
  }
  class ko extends dy {
    constructor(t) {
      super(t);
    }
    static async load(t, n) {
      const r = await Ee("plugin:store|load", {
        path: t,
        options: n
      });
      return new ko(r);
    }
    static async get(t) {
      return await Ee("plugin:store|get_store", {
        path: t
      }).then((n) => n ? new ko(n) : null);
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
      return await bc("store://change", (r) => {
        r.payload.resourceId === this.rid && r.payload.key === t && n(r.payload.exists ? r.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await bc("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class we extends Yn {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", jr.STORAGE);
      this.code = n;
    }
  }
  var pe = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(pe || {});
  class Qe extends Yn {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", jr.GEOLOCATION);
      this.code = n;
    }
  }
  var Ce = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(Ce || {});
  class eo extends Yn {
    constructor(t, n, r) {
      super(t, r);
      __publicField(this, "domain", jr.GENERIC);
      this.code = n;
    }
  }
  var hr = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e))(hr || {});
  class gy {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return H(void 0);
      try {
        return this.store = await py(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, H(void 0);
      } catch (t) {
        return L(new we("Failed to initialize Tauri storage", pe.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, n) {
      if (!this.store) return L(new we("Tauri store not initialized", pe.NOT_INITIALIZED));
      try {
        return await this.store.set(t, n), H(void 0);
      } catch (r) {
        return L(new we(`Failed to set value for key: ${t}`, pe.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.store) return L(new we("Tauri store not initialized", pe.NOT_INITIALIZED));
      try {
        const n = await this.store.get(t);
        return H(n ?? null);
      } catch (n) {
        return L(new we(`Failed to get value for key: ${t}`, pe.GET_FAILED, n));
      }
    }
    async save() {
      if (!this.store) return L(new we("Tauri store not initialized", pe.NOT_INITIALIZED));
      try {
        return await this.store.save(), H(void 0);
      } catch (t) {
        return L(new we("Failed to save store", pe.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return L(new we("Tauri store not initialized", pe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), n = {};
        for (const r of t) {
          const o = await this.store.get(r);
          n[r] = o;
        }
        return H(JSON.stringify(n, null, 2));
      } catch (t) {
        return L(new we("Failed to export data to JSON", pe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return L(new we("Tauri store not initialized", pe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const n of t) await this.store.delete(n);
        return H(void 0);
      } catch (t) {
        return L(new we("Failed to clear store", pe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return L(new we("Tauri store not initialized", pe.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), H(void 0);
      } catch (n) {
        return L(new we(`Failed to remove key: ${t}`, pe.REMOVE_FAILED, n));
      }
    }
  }
  class my {
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
        return L(new we("Failed to initialize Web storage", pe.INITIALIZATION_FAILED, t));
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
      if (!this.db) return L(new we("Database not initialized", pe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (r) => new Promise((o, i) => {
          const s = r.put(Po(n), t);
          s.onsuccess = () => o(), s.onerror = () => i(new Error("Failed to set value"));
        })), H(void 0);
      } catch (r) {
        return L(new we(`Failed to set value for key: ${t}`, pe.SET_FAILED, r));
      }
    }
    async get(t) {
      if (!this.db) return L(new we("Database not initialized", pe.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (r) => new Promise((o, i) => {
          const s = r.get(t);
          s.onsuccess = () => o(s.result), s.onerror = () => i(new Error("Failed to get value"));
        }));
        return H(n);
      } catch (n) {
        return L(new we(`Failed to get value for key: ${t}`, pe.GET_FAILED, n));
      }
    }
    async save() {
      return H(void 0);
    }
    async exportToJson() {
      if (!this.db) return L(new we("Database not initialized", pe.NOT_INITIALIZED));
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
        return L(new we("Failed to export data to JSON", pe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return L(new we("Database not initialized", pe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((n, r) => {
          const o = t.clear();
          o.onsuccess = () => n(), o.onerror = () => r(new Error("Failed to clear store"));
        })), H(void 0);
      } catch (t) {
        return L(new we("Failed to clear store", pe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return L(new we("Database not initialized", pe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((r, o) => {
          const i = n.delete(t);
          i.onsuccess = () => r(), i.onerror = () => o(new Error("Failed to remove key"));
        })), H(void 0);
      } catch (n) {
        return L(new we(`Failed to remove key: ${t}`, pe.REMOVE_FAILED, n));
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
  class wy {
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
        return L(new Qe("Failed to initialize Tauri geolocation provider", Ce.INITIALIZATION_FAILED, t));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new yy(this.tauriHandlerName);
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
        return L(new Qe("Failed to get permission status", Ce.PERMISSION_DENIED, t));
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
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? H("denied") : L(new Qe("Failed to request permission", Ce.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return H(this.convertToGeolocationPosition(t));
      } catch (t) {
        return L(new Qe("Failed to get current position", Ce.POSITION_UNAVAILABLE, t));
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
        return L(new Qe("Failed to start watching position", Ce.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), H(void 0);
      } catch (n) {
        return L(new Qe("Failed to clear watch", Ce.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class yy {
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
  class by {
    constructor() {
      __publicField(this, "initialized", false);
    }
    async init() {
      return this.initialized ? H(void 0) : this.isSupported() ? (this.initialized = true, H(void 0)) : L(new Qe("Geolocation is not supported by this browser", Ce.UNSUPPORTED));
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return H(t.state);
      } catch (t) {
        return L(new Qe("Failed to get permission status", Ce.PERMISSION_DENIED, t));
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
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? H("denied") : L(new Qe("Failed to request permission", Ce.PERMISSION_DENIED, t));
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
              r = Ce.PERMISSION_DENIED;
              break;
            case n.POSITION_UNAVAILABLE:
              r = Ce.POSITION_UNAVAILABLE;
              break;
            case n.TIMEOUT:
              r = Ce.TIMEOUT;
              break;
            default:
              r = Ce.POSITION_UNAVAILABLE;
          }
          t(L(new Qe(o, r, new Error(n.message))));
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
        return L(new Qe("Failed to start watching position", Ce.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return navigator.geolocation.clearWatch(t), H(void 0);
      } catch (n) {
        return L(new Qe("Failed to clear watch", Ce.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  const _yn = class _yn {
    constructor(t) {
      __publicField(this, "context");
      __publicField(this, "storageProvider", null);
      __publicField(this, "geolocationProvider", null);
      __publicField(this, "fileProvider", null);
      __publicField(this, "initialized", false);
      this.context = t;
    }
    static getInstance(t) {
      if (!_yn.instance) {
        const n = Ws.getPlatformContext(), r = new _yn(n), o = r.initializeProviders(t);
        if (o.isErr()) return L(o.error);
        _yn.instance = r;
      }
      return H(_yn.instance);
    }
    initializeProviders(t) {
      try {
        return this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage), this.geolocationProvider = this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, H(void 0);
      } catch (n) {
        return L(new eo("Failed to initialize platform providers", hr.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case Se.TAURI:
          return new gy((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case Se.WEB:
        case Se.MOBILE_WEB:
        default:
          return new my((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    createGeolocationProvider(t) {
      switch (this.context.environment) {
        case Se.TAURI:
          return new wy((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
        case Se.WEB:
        case Se.MOBILE_WEB:
        default:
          return new by();
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
      return this.storageProvider ? H(this.storageProvider) : L(new eo("Storage provider not initialized", hr.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? H(this.geolocationProvider) : L(new eo("Geolocation provider not initialized", hr.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? H(this.fileProvider) : L(new eo("File provider not initialized", hr.DETECTION_FAILED));
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
      _yn.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
  };
  __publicField(_yn, "instance", null);
  let yn = _yn;
  ls = function(e) {
    return yn.getInstance(e);
  };
  vy = function() {
    return Ws.detectEnvironment() === Se.TAURI;
  };
  class _y {
    constructor() {
      __publicField(this, "permissionChangeListeners", /* @__PURE__ */ new Set());
      __publicField(this, "currentPermissionState", null);
      __publicField(this, "platformGeolocationProvider", null);
    }
    async getPermissionStatus() {
      if (this.platformGeolocationProvider) try {
        const t = await this.platformGeolocationProvider.getPermissionStatus();
        return t.isOk() ? (this.currentPermissionState = t.value, H(t.value)) : L(new Rn("Failed to get permission status from platform provider", t.error));
      } catch (t) {
        return L(new Rn("Platform provider permission check error", t));
      }
      if (!navigator.geolocation) return L(new Kw("Geolocation is not supported by this browser"));
      try {
        if (!navigator.permissions) return this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return this.currentPermissionState = t.state, H(t.state);
      } catch (t) {
        return L(new Rn("Failed to get permission status", t));
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
        return n.isOk() ? (this.currentPermissionState = n.value, H(n.value)) : L(new Rn("Failed to request permission from platform provider", n.error));
      } catch (n) {
        return L(new Rn("Platform provider permission request error", n));
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
        return L(new Rn("Failed to request permission", n));
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
  var Ru = ((e) => (e[e.PERMISSION_DENIED = 1] = "PERMISSION_DENIED", e[e.POSITION_UNAVAILABLE = 2] = "POSITION_UNAVAILABLE", e[e.TIMEOUT = 3] = "TIMEOUT", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.IOS_HTTPS_REQUIRED = 5] = "IOS_HTTPS_REQUIRED", e[e.FIREFOX_PERMISSION_ISSUE = 6] = "FIREFOX_PERMISSION_ISSUE", e))(Ru || {});
  const Qt = [];
  function Ty(e) {
    const t = {
      id: (Qt.length > 0 ? Qt[Qt.length - 1].id : 0) + 1,
      callback: e
    };
    return Qt.push(t), t.id;
  }
  function Ey(e) {
    Qt.splice(Qt.findIndex((t) => t.id === e), 1);
  }
  let to = -1, vc = {
    latitude: 0,
    longitude: 0
  };
  const _c = "https://ipapi.co/json/";
  class Iy {
    async getPermissionStatus() {
      try {
        return await fetch(_c), "granted";
      } catch {
        return "denied";
      }
    }
    async fetchRaw(t = 1e4) {
      const n = new Promise(async (o, i) => {
        try {
          const s = await fetch(_c);
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
      const n = Ty(t);
      return new Promise((r) => {
        if (to === -1) {
          const o = () => {
            this.getCurrentPosition().then((i) => {
              Dw(i, vc) || (console.info("[geolocation] IP geolocation position updated"), Qt.forEach((s) => s.callback(i)), vc = Po(i));
            }).catch((i) => {
              throw console.error("[geolocation] Error in IP geolocation watch:", i), new Error(`Error while watching the geolocation [IP]. Code: ${Ru.UNKNOWN}, Msg: ${i}`);
            });
          };
          to = setInterval(() => o(), 2e4), console.info("[geolocation] IP geolocation watch interval started"), o();
        }
        r(n);
      });
    }
    clearWatch(t) {
      console.info("[geolocation] Clearing IP geolocation watch handler"), Ey(t), Qt.length === 0 && (console.info("[geolocation] Stopping IP geolocation watch interval"), clearInterval(to), to = -1);
    }
  }
  class Ay {
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
      this.permissionService = t || new _y(), this.ipBackend = new Iy();
    }
    async initialize(t) {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), H(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with location trail strategy");
      try {
        const n = ls();
        if (n.isErr()) return console.warn("[GeolocationManager] Failed to get platform services, will try IP backend"), await this.initializeWithIPBackend();
        const r = n.value.getGeolocation();
        if (r.isErr()) return console.warn("[GeolocationManager] Failed to get geolocation provider, will try IP backend"), await this.initializeWithIPBackend();
        if (this.platformGeolocationProvider = r.value, (await this.platformGeolocationProvider.init()).isErr()) return console.warn("[GeolocationManager] Failed to initialize platform provider, will try IP backend"), await this.initializeWithIPBackend();
        this.permissionService.setPlatformProvider(this.platformGeolocationProvider);
        const i = await this.permissionService.getPermissionStatus();
        if (i.isErr()) return pt(i.error, "GeolocationManager.initialize.permission"), console.warn("[GeolocationManager] Failed to get permission status, will try IP backend"), await this.initializeWithIPBackend();
        const s = i.value;
        if (s === "prompt" && t && await t(s)) {
          const u = await this.platformGeolocationProvider.requestPermission();
          if (u.isErr()) return pt(u.error, "GeolocationManager.initialize.requestPermission"), console.warn("[GeolocationManager] Failed to request permission, will try IP backend"), await this.initializeWithIPBackend();
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
      if (!this.platformGeolocationProvider) return L(new be("No platform geolocation provider available", "no_platform_provider"));
      try {
        const t = await this.platformGeolocationProvider.getCurrentPosition();
        if (t.isOk()) {
          const n = t.value;
          return H({
            latitude: n.coords.latitude,
            longitude: n.coords.longitude
          });
        } else return L(new be("Failed to get location from platform provider", "platform_location_failed", t.error));
      } catch (t) {
        return L(new be("Exception while getting location from platform provider", "platform_location_exception", t));
      }
    }
    async initializeWithIPBackend() {
      if (console.info("[GeolocationManager] Initializing with IP backend as fallback"), !this.ipBackend) return L(new be("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Successfully got location via IP backend"), this.currentBackend = "ip", this.lastKnownLocation = t, this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using IP backend"), H(void 0);
      } catch (t) {
        const n = new be("Failed to initialize geolocation manager with IP backend", "ip_backend_failed", t);
        return pt(n, "GeolocationManager.initializeWithIPBackend"), L(n);
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new be("Geolocation manager not initialized", "not_initialized");
        return pt(t, "GeolocationManager.getCurrentLocation"), L(t);
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
      return L(new be("No working geolocation backend available", "no_working_backend"));
    }
    async getLocationFromPlatformProvider() {
      if (!this.platformGeolocationProvider) return L(new be("Platform geolocation provider not available", "platform_provider_unavailable"));
      const t = await this.platformGeolocationProvider.getCurrentPosition();
      if (t.isOk()) {
        const n = t.value, r = {
          latitude: n.coords.latitude,
          longitude: n.coords.longitude
        };
        return console.info("[GeolocationManager] Location retrieved from platform provider"), this.doLocationUpdate(r), H(r);
      } else return pt(t.error, "GeolocationManager.getLocationFromPlatformProvider"), L(new be("Failed to get location from platform provider", "platform_provider_failed", t.error));
    }
    async getLocationFromIPBackend() {
      if (!this.ipBackend) return L(new be("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Location retrieved from IP backend"), this.doLocationUpdate(t), H(t);
      } catch (t) {
        const n = Ti(t, "Failed to get location from IP backend");
        return pt(n, "GeolocationManager.getLocationFromIPBackend"), L(new be("Failed to get location from IP backend", "ip_backend_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new be("Geolocation manager not initialized", "not_initialized");
        return pt(n, "GeolocationManager.startLocationUpdates"), L(n);
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
      return L(new be("No working geolocation backend available for location updates", "no_working_backend_for_updates"));
    }
    async startPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return L(new be("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = await this.platformGeolocationProvider.watchPosition((r) => {
        const o = {
          latitude: r.coords.latitude,
          longitude: r.coords.longitude
        };
        this.doLocationUpdate(o), t(o);
      });
      return n.isOk() ? (console.info("[GeolocationManager] Location updates started via platform provider"), this.isWatching = true, this.watchId = n.value, H(n.value)) : L(new be("Failed to start location updates via platform provider", "platform_watch_failed", n.error));
    }
    async startIPLocationUpdates(t) {
      if (!this.ipBackend) return L(new be("IP backend not available", "ip_backend_unavailable"));
      try {
        const n = await this.ipBackend.watchPosition((r) => {
          this.lastKnownLocation = r, this.doLocationUpdate(r), t(r);
        });
        return console.info("[GeolocationManager] Location updates started via IP backend"), this.isWatching = true, this.watchId = n, H(n);
      } catch (n) {
        const r = Ti(n, "Failed to start location updates via IP backend");
        return pt(r, "GeolocationManager.startIPLocationUpdates"), L(new be("Failed to start location updates via IP backend", "ip_watch_failed", r));
      }
    }
    stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new be("Geolocation manager not initialized", "not_initialized");
        return pt(n, "GeolocationManager.stopLocationUpdates"), L(n);
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
        return L(n || new be("No working geolocation backend available for stopping updates", "no_working_backend_for_stop"));
      }
    }
    stopPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return L(new be("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = this.platformGeolocationProvider.clearWatch(t);
      return n.isOk() ? (console.info("[GeolocationManager] Location updates stopped via platform provider"), this.isWatching = false, this.watchId = null, H(void 0)) : L(new be("Failed to stop location updates via platform provider", "platform_clear_watch_failed", n.error));
    }
    stopIPLocationUpdates(t) {
      if (!this.ipBackend) return L(new be("IP backend not available", "ip_backend_unavailable"));
      try {
        return this.ipBackend.clearWatch(t), console.info("[GeolocationManager] Location updates stopped via IP backend"), this.isWatching = false, this.watchId = null, H(void 0);
      } catch (n) {
        const r = Ti(n, "Failed to stop location updates via IP backend");
        return pt(r, "GeolocationManager.stopIPLocationUpdates"), L(new be("Failed to stop location updates via IP backend", "ip_clear_watch_failed", r));
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
      this.lastKnownLocation = Po(t), this.locationUpdateCallbacks.forEach((n) => n(Po(t)));
    }
    getPermissionStatus() {
      return this.permissionService.currentPermission;
    }
    async refreshBackend() {
      return H(void 0);
    }
  }
  let Pu;
  const ri = (e) => Pu = e, Nu = Symbol();
  function us(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Sr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Sr || (Sr = {}));
  function Lu() {
    const e = jc(true), t = e.run(() => Xe({}));
    let n = [], r = [];
    const o = Es({
      install(i) {
        ri(o), o._a = i, i.provide(Nu, o), i.config.globalProperties.$pinia = o, r.forEach((s) => n.push(s)), r = [];
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
  const Cu = () => {
  };
  function Tc(e, t, n, r = Cu) {
    e.push(t);
    const o = () => {
      const i = e.indexOf(t);
      i > -1 && (e.splice(i, 1), r());
    };
    return !n && Wc() && nf(o), o;
  }
  function Cn(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const Sy = (e) => e(), Ec = Symbol(), ki = Symbol();
  function fs(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], o = e[n];
      us(o) && us(r) && e.hasOwnProperty(n) && !ve(r) && !en(r) ? e[n] = fs(o, r) : e[n] = r;
    }
    return e;
  }
  const Oy = Symbol();
  function Ry(e) {
    return !us(e) || !Object.prototype.hasOwnProperty.call(e, Oy);
  }
  const { assign: zt } = Object;
  function Py(e) {
    return !!(ve(e) && e.effect);
  }
  function Ny(e, t, n, r) {
    const { state: o, actions: i, getters: s } = t, a = n.state.value[e];
    let c;
    function u() {
      a || (n.state.value[e] = o ? o() : {});
      const l = Pf(n.state.value[e]);
      return zt(l, i, Object.keys(s || {}).reduce((d, p) => (d[p] = Es(xs(() => {
        ri(n);
        const g = n._s.get(e);
        return s[p].call(g, g);
      })), d), {}));
    }
    return c = xu(e, u, t, n, r, true), c;
  }
  function xu(e, t, n = {}, r, o, i) {
    let s;
    const a = zt({
      actions: {}
    }, n), c = {
      deep: true
    };
    let u, l, d = [], p = [], g;
    const m = r.state.value[e];
    !i && !m && (r.state.value[e] = {}), Xe({});
    let b;
    function C(G) {
      let k;
      u = l = false, typeof G == "function" ? (G(r.state.value[e]), k = {
        type: Sr.patchFunction,
        storeId: e,
        events: g
      }) : (fs(r.state.value[e], G), k = {
        type: Sr.patchObject,
        payload: G,
        storeId: e,
        events: g
      });
      const $ = b = Symbol();
      cl().then(() => {
        b === $ && (u = true);
      }), l = true, Cn(d, k, r.state.value[e]);
    }
    const S = i ? function() {
      const { state: k } = n, $ = k ? k() : {};
      this.$patch((Q) => {
        zt(Q, $);
      });
    } : Cu;
    function I() {
      s.stop(), d = [], p = [], r._s.delete(e);
    }
    const D = (G, k = "") => {
      if (Ec in G) return G[ki] = k, G;
      const $ = function() {
        ri(r);
        const Q = Array.from(arguments), j = [], se = [];
        function Ae(ee) {
          j.push(ee);
        }
        function tt(ee) {
          se.push(ee);
        }
        Cn(p, {
          args: Q,
          name: $[ki],
          store: W,
          after: Ae,
          onError: tt
        });
        let ge;
        try {
          ge = G.apply(this && this.$id === e ? this : W, Q);
        } catch (ee) {
          throw Cn(se, ee), ee;
        }
        return ge instanceof Promise ? ge.then((ee) => (Cn(j, ee), ee)).catch((ee) => (Cn(se, ee), Promise.reject(ee))) : (Cn(j, ge), ge);
      };
      return $[Ec] = true, $[ki] = k, $;
    }, E = {
      _p: r,
      $id: e,
      $onAction: Tc.bind(null, p),
      $patch: C,
      $reset: S,
      $subscribe(G, k = {}) {
        const $ = Tc(d, G, k.detached, () => Q()), Q = s.run(() => Fn(() => r.state.value[e], (j) => {
          (k.flush === "sync" ? l : u) && G({
            storeId: e,
            type: Sr.direct,
            events: g
          }, j);
        }, zt({}, c, k)));
        return $;
      },
      $dispose: I
    }, W = Bo(E);
    r._s.set(e, W);
    const Z = (r._a && r._a.runWithContext || Sy)(() => r._e.run(() => (s = jc()).run(() => t({
      action: D
    }))));
    for (const G in Z) {
      const k = Z[G];
      if (ve(k) && !Py(k) || en(k)) i || (m && Ry(k) && (ve(k) ? k.value = m[G] : fs(k, m[G])), r.state.value[e][G] = k);
      else if (typeof k == "function") {
        const $ = D(k, G);
        Z[G] = $, a.actions[G] = k;
      }
    }
    return zt(W, Z), zt(ne(W), Z), Object.defineProperty(W, "$state", {
      get: () => r.state.value[e],
      set: (G) => {
        C((k) => {
          zt(k, G);
        });
      }
    }), r._p.forEach((G) => {
      zt(W, s.run(() => G({
        store: W,
        app: r._a,
        pinia: r,
        options: a
      })));
    }), m && i && n.hydrate && n.hydrate(W.$state, m), u = true, l = true, W;
  }
  Tb = function(e, t, n) {
    let r;
    const o = typeof t == "function";
    r = o ? n : t;
    function i(s, a) {
      const c = ud();
      return s = s || (c ? Tr(Nu, null) : null), s && ri(s), s = Pu, s._s.has(e) || (o ? xu(e, t, r, s) : Ny(e, r, s)), s._s.get(e);
    }
    return i.$id = e, i;
  };
  let J;
  const ku = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && ku.decode();
  let pr = null;
  function lo() {
    return (pr === null || pr.byteLength === 0) && (pr = new Uint8Array(J.memory.buffer)), pr;
  }
  function bn(e, t) {
    return e = e >>> 0, ku.decode(lo().subarray(e, e + t));
  }
  let Mo = 0;
  const uo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Ly = typeof uo.encodeInto == "function" ? function(e, t) {
    return uo.encodeInto(e, t);
  } : function(e, t) {
    const n = uo.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function Mu(e, t, n) {
    if (n === void 0) {
      const a = uo.encode(e), c = t(a.length, 1) >>> 0;
      return lo().subarray(c, c + a.length).set(a), Mo = a.length, c;
    }
    let r = e.length, o = t(r, 1) >>> 0;
    const i = lo();
    let s = 0;
    for (; s < r; s++) {
      const a = e.charCodeAt(s);
      if (a > 127) break;
      i[o + s] = a;
    }
    if (s !== r) {
      s !== 0 && (e = e.slice(s)), o = n(o, r, r = s + e.length * 3, 1) >>> 0;
      const a = lo().subarray(o + s, o + r), c = Ly(e, a);
      s += c.written, o = n(o, r, s, 1) >>> 0;
    }
    return Mo = s, o;
  }
  function Cy(e) {
    return e == null;
  }
  let mn = null;
  function Ic() {
    return (mn === null || mn.buffer.detached === true || mn.buffer.detached === void 0 && mn.buffer !== J.memory.buffer) && (mn = new DataView(J.memory.buffer)), mn;
  }
  function Du(e) {
    const t = J.__wbindgen_export_0.get(e);
    return J.__externref_table_dealloc(e), t;
  }
  function Mi(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function xy(e, t, n) {
    Mi(e, Do), Mi(t, Do), Mi(n, Fu);
    const r = J.transform(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
    if (r[1]) throw Du(r[0]);
  }
  const Ac = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => J.__wbg_point_free(e >>> 0, 1));
  class Fu {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ac.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      J.__wbg_point_free(t, 0);
    }
    get x() {
      return J.__wbg_get_point_x(this.__wbg_ptr);
    }
    set x(t) {
      J.__wbg_set_point_x(this.__wbg_ptr, t);
    }
    get y() {
      return J.__wbg_get_point_y(this.__wbg_ptr);
    }
    set y(t) {
      J.__wbg_set_point_y(this.__wbg_ptr, t);
    }
    get z() {
      return J.__wbg_get_point_z(this.__wbg_ptr);
    }
    set z(t) {
      J.__wbg_set_point_z(this.__wbg_ptr, t);
    }
    constructor(t, n, r) {
      const o = J.point_new(t, n, r);
      return this.__wbg_ptr = o >>> 0, Ac.register(this, this.__wbg_ptr, this), this;
    }
  }
  const Sc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => J.__wbg_projection_free(e >>> 0, 1));
  class Do {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Sc.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      J.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const n = Mu(t, J.__wbindgen_malloc, J.__wbindgen_realloc), r = Mo, o = J.projection_new(n, r);
      if (o[2]) throw Du(o[1]);
      return this.__wbg_ptr = o[0] >>> 0, Sc.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, n;
      try {
        const r = J.projection_projName(this.__wbg_ptr);
        return t = r[0], n = r[1], bn(r[0], r[1]);
      } finally {
        J.__wbindgen_free(t, n, 1);
      }
    }
    get isLatlon() {
      return J.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return J.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, n;
      try {
        const r = J.projection_axis(this.__wbg_ptr);
        return t = r[0], n = r[1], bn(r[0], r[1]);
      } finally {
        J.__wbindgen_free(t, n, 1);
      }
    }
    get isNormalizedAxis() {
      return J.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return J.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, n;
      try {
        const r = J.projection_units(this.__wbg_ptr);
        return t = r[0], n = r[1], bn(r[0], r[1]);
      } finally {
        J.__wbindgen_free(t, n, 1);
      }
    }
  }
  async function ky(e, t) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (r) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r;
      }
      const n = await e.arrayBuffer();
      return await WebAssembly.instantiate(n, t);
    } else {
      const n = await WebAssembly.instantiate(e, t);
      return n instanceof WebAssembly.Instance ? {
        instance: n,
        module: e
      } : n;
    }
  }
  function My() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbg_buffer_e6c6daaa78528d53 = function(t) {
      return t.buffer;
    }, e.wbg.__wbg_getFloat32_e0872364daa466bb = function(t, n, r) {
      return t.getFloat32(n >>> 0, r !== 0);
    }, e.wbg.__wbg_getFloat64_3c55a5d18420aa12 = function(t, n, r) {
      return t.getFloat64(n >>> 0, r !== 0);
    }, e.wbg.__wbg_getInt32_6ea30555a7e6366d = function(t, n, r) {
      return t.getInt32(n >>> 0, r !== 0);
    }, e.wbg.__wbg_getUint32_78580012d2915dec = function(t, n, r) {
      return t.getUint32(n >>> 0, r !== 0);
    }, e.wbg.__wbg_parseFloat_40655e71a57d91e0 = function(t, n) {
      return parseFloat(bn(t, n));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, n, r) {
      return parseInt(bn(t, n), r);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, n, r) {
      return t.slice(n >>> 0, r >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, n) {
      return new Error(bn(t, n));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = J.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, n) {
      const r = n, o = typeof r == "string" ? r : void 0;
      var i = Cy(o) ? 0 : Mu(o, J.__wbindgen_malloc, J.__wbindgen_realloc), s = Mo;
      Ic().setInt32(t + 4, s, true), Ic().setInt32(t + 0, i, true);
    }, e.wbg.__wbindgen_throw = function(t, n) {
      throw new Error(bn(t, n));
    }, e;
  }
  function Dy(e, t) {
    return J = e.exports, Hu.__wbindgen_wasm_module = t, mn = null, pr = null, J.__wbindgen_start(), J;
  }
  async function Hu(e) {
    if (J !== void 0) return J;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = My();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: r } = await ky(await e, t);
    return Dy(n, r);
  }
  const Fy = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Di = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let Fi = false;
  async function Uu() {
    if (!Fi) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Hu({
        module_or_path: Fy
      }), Fi = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), Fi = true;
    }
  }
  async function Oc(e, t, n) {
    try {
      await Uu();
      const r = new Do(e), o = new Do(t), i = new Fu(n[0], n[1], 0);
      xy(r, o, i);
      const s = [
        i.x,
        i.y
      ];
      return r.free(), o.free(), i.free(), s;
    } catch (r) {
      throw new Error(`Failed to transform coordinate: ${r instanceof Error ? r.message : String(r)}`);
    }
  }
  function Hy(e, t) {
    const n = t.x - e.x, r = t.y - e.y;
    return Math.sqrt(n * n + r * r);
  }
  function Rc(e, t) {
    const r = e.latitude * Math.PI / 180, o = t.latitude * Math.PI / 180, i = (t.latitude - e.latitude) * Math.PI / 180, s = (t.longitude - e.longitude) * Math.PI / 180, a = Math.sin(i / 2) * Math.sin(i / 2) + Math.cos(r) * Math.cos(o) * Math.sin(s / 2) * Math.sin(s / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }
  async function Uy(e, t, n = {}) {
    const { projection: r = Di.CGCS2000_3_DEGREE, useHaversine: o = false } = n;
    if (o) return Rc(e, t);
    try {
      const i = await Oc(Di.WGS84, r, [
        e.longitude,
        e.latitude
      ]), s = await Oc(Di.WGS84, r, [
        t.longitude,
        t.latitude
      ]);
      return Hy({
        x: i[0],
        y: i[1]
      }, {
        x: s[0],
        y: s[1]
      });
    } catch (i) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", i), Rc(e, t);
    }
  }
  Eb = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let n = 0;
    for (let r = 1; r < e.length; r++) n += await Uy(e[r - 1], e[r], t);
    return n;
  };
  Ib = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  let Pc, jy, Wy, Gy, $y, By, Vy, zy, Yy, qy, Ky, Jy, Xy, Zy, Qy, tb, Gs;
  Pc = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a2;
        const e = nu((await _i(async () => {
          const { default: n } = await import("./App-BnHXkGSX.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3]), import.meta.url)).default);
        e.use(Lu()), e.use((await _i(async () => {
          const { default: n } = await import("./index-D3fVtwWd.js");
          return {
            default: n
          };
        }, __vite__mapDeps([4,2,1,5]), import.meta.url)).default), e.use((await _i(async () => {
          const { i18n: n } = await import("./index-BI4E3Xym.js");
          return {
            i18n: n
          };
        }, __vite__mapDeps([6,2]), import.meta.url)).i18n), window.splashScreen && window.splashScreen.unmount(), (_a2 = document.getElementById("splash")) == null ? void 0 : _a2.remove();
        const t = document.getElementById("app");
        t && (t.style.display = "inherit"), e.mount("#app");
      },
      dependencies: [
        "platform-services",
        "geolocation",
        "proj4-wasm"
      ]
    },
    {
      name: "proj4-wasm",
      displayName: "Proj4 Wasm",
      moduleInit: async () => {
        await Uu();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        try {
          console.time("Platform services initialise");
          const e = ls();
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
          if (!ls()) throw new Error("Platform services not initialized");
          const t = new Ay();
          console.time("Geolocation service initialise"), await t.initialize(async (n) => vy() ? void 0 : confirm(n === "prompt" ? "Later your browser will request permission to access your location." : "This app requires access to your location to track your movements.")), console.timeEnd("Geolocation service initialise"), console.time("Geolocation service start"), await t.startLocationUpdates((n) => {
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
  Ab = Gw;
  Sb = Ww;
  jy = {
    class: "splash-container"
  };
  Wy = {
    class: "splash-content"
  };
  Gy = {
    key: 0,
    class: "loading-section"
  };
  $y = {
    class: "progress-container"
  };
  By = {
    class: "progress-bar"
  };
  Vy = {
    class: "progress-text"
  };
  zy = {
    class: "loading-details"
  };
  Yy = {
    class: "current-module"
  };
  qy = {
    key: 1,
    class: "error-section"
  };
  Ky = {
    class: "error-message"
  };
  Jy = {
    key: 0
  };
  Xy = {
    key: 1
  };
  Zy = {
    key: 2,
    class: "timeout-section"
  };
  Qy = Gf({
    __name: "SplashScreen",
    setup(e) {
      const t = Xe(0), n = Xe("Initializing..."), r = Xe(""), o = Xe(0), i = Xe(0), s = Xe(false), a = Xe(false), c = Xe(""), u = Xe("light"), l = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? u.value = "dark" : u.value = "light";
        } catch {
          u.value = "light";
        }
      }, d = () => {
        u.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", u.value);
      }, p = xs(() => Math.round(t.value / 100 * 100)), g = {
        info: (...C) => {
          const S = C.join(" ");
          console.info(S), n.value = String(S);
        },
        warn: (...C) => {
          const S = C.join(" ");
          console.warn(S), n.value = String(S);
        },
        error: (...C) => {
          const S = C.join(" ");
          console.error(S), n.value = String(S), c.value = String(S);
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
        onModuleError: (C, S) => {
          n.value = `Failed to load ${C}`, c.value = S.message;
        },
        onOverallProgress: (C, S) => {
          o.value = S, i.value = C, t.value = Math.min(100, C / S * 100);
        }
      }, b = () => {
        window.location.reload();
      };
      return Hr(() => {
        var _a2;
        l(), d(), (_a2 = document.getElementById("pre-splash")) == null ? void 0 : _a2.remove();
        const C = (S, I = /* @__PURE__ */ new Set()) => {
          if (I.has(S)) return 0;
          I.add(S);
          const D = Pc.find((W) => W.name === S);
          if (!D) return 0;
          let E = 1;
          if (D.dependencies) for (const W of D.dependencies) E += C(W, I);
          return E;
        };
        o.value = C("trackmaker"), console.log("=== Start Loading Modules ==="), _u(Pc, "trackmaker", 3e4, {
          logger: g,
          progressReporter: m,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", r.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((S) => {
          const I = String(S.toString());
          if (I.toLowerCase().includes("timeout")) {
            const D = I.split("Trackback").map((E) => E.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(D.map((E) => ({
              Trackback: E
            })), [
              "Trackback"
            ]), a.value = true;
          } else c.value = I, s.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(S);
        });
      }), (C, S) => (rt(), Gt("div", jy, [
        me("div", Wy, [
          S[7] || (S[7] = me("div", {
            class: "logo-section"
          }, [
            me("div", {
              class: "app-logo"
            }, [
              me("img", {
                src: Sh,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            me("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !s.value && !a.value ? (rt(), Gt("div", Gy, [
            me("div", $y, [
              me("div", By, [
                me("div", {
                  class: "progress-fill",
                  style: Wo({
                    width: `${p.value}%`
                  })
                }, null, 4)
              ]),
              me("div", Vy, cr(p.value) + "% ", 1)
            ]),
            me("div", zy, [
              me("p", Yy, " Loading: " + cr(r.value), 1)
            ]),
            S[0] || (S[0] = me("div", {
              class: "loading-animation"
            }, [
              me("div", {
                class: "spinner"
              })
            ], -1))
          ])) : pi("", true),
          s.value ? (rt(), Gt("div", qy, [
            S[1] || (S[1] = me("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            S[2] || (S[2] = me("h2", null, "Loading Error", -1)),
            me("div", Ky, [
              (rt(true), Gt(ke, null, ed((c.value ?? "").split(`
`), (I) => (rt(), Gt("div", {
                key: I,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                I.toLocaleLowerCase().includes("trackback") ? (rt(), Gt("strong", Jy, cr(I), 1)) : (rt(), Gt("span", Xy, cr(I), 1))
              ]))), 128))
            ]),
            me("button", {
              class: "retry-button",
              onClick: b
            }, " Retry ")
          ])) : pi("", true),
          a.value ? (rt(), Gt("div", Zy, [
            S[3] || (S[3] = me("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            S[4] || (S[4] = me("h2", null, "Connection Timeout", -1)),
            S[5] || (S[5] = me("p", null, "Unable to load required modules within the timeout period.", -1)),
            S[6] || (S[6] = me("p", null, "Please check your internet connection and try again.", -1)),
            me("button", {
              class: "retry-button",
              onClick: b
            }, " Retry ")
          ])) : pi("", true)
        ])
      ]));
    }
  });
  eb = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
  tb = eb(Qy, [
    [
      "__scopeId",
      "data-v-5254237a"
    ]
  ]);
  Gs = nu(tb);
  Gs.use(Lu());
  Gs.mount("#splash");
  window.splashScreen = Gs;
})();
export {
  jr as $,
  cr as A,
  gb as B,
  zi as C,
  lb as D,
  Zo as E,
  ke as F,
  At as G,
  pb as H,
  on as I,
  Bf as J,
  cb as K,
  Vf as L,
  mb as M,
  cl as N,
  ib as O,
  Re as P,
  Dt as Q,
  Pf as R,
  Wo as S,
  sb as T,
  yb as U,
  Es as V,
  If as W,
  ve as X,
  Po as Y,
  Yn as Z,
  eb as _,
  __tla,
  me as a,
  H as a0,
  L as a1,
  Tb as a2,
  Eb as a3,
  fb as a4,
  hb as a5,
  ab as a6,
  ub as a7,
  ed as a8,
  bb as a9,
  Ug as aA,
  im as aB,
  Rg as aC,
  iu as aD,
  Sm as aE,
  Ef as aF,
  jn as aG,
  Jo as aH,
  ls as aI,
  Wc as aJ,
  nf as aK,
  ud as aL,
  rb as aM,
  Ft as aN,
  _b as aO,
  jc as aP,
  Ib as aa,
  vb as ab,
  Ab as ac,
  Sb as ad,
  _i as ae,
  vy as af,
  It as ag,
  sn as ah,
  Gn as ai,
  rn as aj,
  Ca as ak,
  rp as al,
  sp as am,
  cp as an,
  np as ao,
  ks as ap,
  au as aq,
  zp as ar,
  Sn as as,
  xt as at,
  vu as au,
  Xp as av,
  su as aw,
  pp as ax,
  Oo as ay,
  fu as az,
  Xe as b,
  Gt as c,
  Gf as d,
  Yf as e,
  Os as f,
  Bo as g,
  Vd as h,
  Tr as i,
  xs as j,
  Hr as k,
  Rs as l,
  Dd as m,
  ms as n,
  rt as o,
  ld as p,
  Fn as q,
  nl as r,
  Ye as s,
  ob as t,
  wb as u,
  ol as v,
  db as w,
  pi as x,
  Hf as y,
  Md as z
};
