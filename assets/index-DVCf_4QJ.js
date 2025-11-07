const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-BF5mDAS8.js","./platform-DWoe5Ur5.js","./vue-i18n-BFEtHe6A.js","./App-jBe8gYQr.css","./index-BBkZB2dD.js","./index-BYHzm7px.css","./index-Cbm8uFXN.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let gb, hi, bb, qo, hb, eo, Ue, Pt, Rt, ln, yb, db, cn, zf, Vf, vb, ll, lb, Ce, Gt, ub, Nf, Br, Ib, Ie, _s, Of, rb, we, wb, We, Ln, Zn, O, m, Ab, Sb, fb, pb, du, Gg, sm, Pg, su, Sm, Tf, Vn, Zr, Gi, Bc, rf, fd, ab, jt, Ob, Wc, td, _b, Rb, Tb, Pb, Nb, di, To, Iy, Kn, an, Ca, rp, ap, lp, ip, Ms, cu, Yp, Nn, Ft, Eu, Zp, au, gp, Lr, rt, Vt, Bf, Kf, Ss, Vr, Vd, Ai, xs, Bi, Rs, Fd, ms, lt, ud, Bn, Bo, Ge, cb, Eb, ol, mb, wo, Hf, Dd;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
    new MutationObserver((r) => {
      for (const o of r) if (o.type === "childList") for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(r) {
      const o = {};
      return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function i(r) {
      if (r.ep) return;
      r.ep = true;
      const o = n(r);
      fetch(r.href, o);
    }
  })();
  function ds(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const ie = {}, Gn = [], dt = () => {
  }, Cc = () => false, Hr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hs = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, ps = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Bu = Object.prototype.hasOwnProperty, re = (e, t) => Bu.call(e, t), z = Array.isArray, jn = (e) => ji(e) === "[object Map]", xc = (e) => ji(e) === "[object Set]", $u = (e) => ji(e) === "[object RegExp]", Y = (e) => typeof e == "function", be = (e) => typeof e == "string", Wt = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", Mc = (e) => (ce(e) || Y(e)) && Y(e.then) && Y(e.catch), kc = Object.prototype.toString, ji = (e) => kc.call(e), zu = (e) => ji(e).slice(8, -1), Dc = (e) => ji(e) === "[object Object]", gs = (e) => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bi = ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Gr = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Vu = /-\w/g, tt = Gr((e) => e.replace(Vu, (t) => t.slice(1).toUpperCase())), Yu = /\B([A-Z])/g, Bt = Gr((e) => e.replace(Yu, "-$1").toLowerCase()), jr = Gr((e) => e.charAt(0).toUpperCase() + e.slice(1)), ao = Gr((e) => e ? `on${jr(e)}` : ""), Je = (e, t) => !Object.is(e, t), vi = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, Fc = (e, t, n, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: n
    });
  }, Ku = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, qu = (e) => {
    const t = be(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Ks;
  const Wr = () => Ks || (Ks = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  Br = function(e) {
    if (z(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const i = e[n], r = be(i) ? Qu(i) : Br(i);
        if (r) for (const o in r) t[o] = r[o];
      }
      return t;
    } else if (be(e) || ce(e)) return e;
  };
  const Ju = /;(?![^(]*\))/g, Xu = /:([^]+)/, Zu = /\/\*[^]*?\*\//g;
  function Qu(e) {
    const t = {};
    return e.replace(Zu, "").split(Ju).forEach((n) => {
      if (n) {
        const i = n.split(Xu);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  ms = function(e) {
    let t = "";
    if (be(e)) t = e;
    else if (z(e)) for (let n = 0; n < e.length; n++) {
      const i = ms(e[n]);
      i && (t += i + " ");
    }
    else if (ce(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const ef = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tf = ds(ef);
  function Uc(e) {
    return !!e || e === "";
  }
  let Hc, Gc, co;
  Hc = (e) => !!(e && e.__v_isRef === true);
  hi = (e) => be(e) ? e : e == null ? "" : z(e) || ce(e) && (e.toString === kc || !Y(e.toString)) ? Hc(e) ? hi(e.value) : JSON.stringify(e, Gc, 2) : String(e);
  Gc = (e, t) => Hc(t) ? Gc(e, t.value) : jn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [i, r], o) => (n[co(i, o) + " =>"] = r, n), {})
  } : xc(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => co(n))
  } : Wt(t) ? co(t) : ce(t) && !z(t) && !Dc(t) ? String(t) : t;
  co = (e, t = "") => {
    var n;
    return Wt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function nf(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let ke;
  class jc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = ke, !t && ke && (this.index = (ke.scopes || (ke.scopes = [])).push(this) - 1);
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
        const n = ke;
        try {
          return ke = this, t();
        } finally {
          ke = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = ke, ke = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (ke = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, i;
        for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(true);
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
  Wc = function(e) {
    return new jc(e);
  };
  Bc = function() {
    return ke;
  };
  rf = function(e, t = false) {
    ke && ke.cleanups.push(e);
  };
  let he;
  const lo = /* @__PURE__ */ new WeakSet();
  class $c {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ke && ke.active && ke.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, lo.has(this) && (lo.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, qs(this), Yc(this);
      const t = he, n = ht;
      he = this, ht = true;
      try {
        return this.fn();
      } finally {
        Kc(this), he = t, ht = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) bs(t);
        this.deps = this.depsTail = void 0, qs(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? lo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Go(this) && this.run();
    }
    get dirty() {
      return Go(this);
    }
  }
  let zc = 0, Ei, Ii;
  function Vc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Ii, Ii = e;
      return;
    }
    e.next = Ei, Ei = e;
  }
  function ws() {
    zc++;
  }
  function ys() {
    if (--zc > 0) return;
    if (Ii) {
      let t = Ii;
      for (Ii = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Ei; ) {
      let t = Ei;
      for (Ei = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function Yc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Kc(e) {
    let t, n = e.depsTail, i = n;
    for (; i; ) {
      const r = i.prevDep;
      i.version === -1 ? (i === n && (n = r), bs(i), of(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = r;
    }
    e.deps = t, e.depsTail = n;
  }
  function Go(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (qc(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function qc(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Li) || (e.globalVersion = Li, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Go(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = he, i = ht;
    he = e, ht = true;
    try {
      Yc(e);
      const r = e.fn(e._value);
      (t.version === 0 || Je(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
    } catch (r) {
      throw t.version++, r;
    } finally {
      he = n, ht = i, Kc(e), e.flags &= -3;
    }
  }
  function bs(e, t = false) {
    const { dep: n, prevSub: i, nextSub: r } = e;
    if (i && (i.nextSub = r, e.prevSub = void 0), r && (r.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
      n.computed.flags &= -5;
      for (let o = n.computed.deps; o; o = o.nextDep) bs(o, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function of(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let ht = true;
  const Jc = [];
  function Ut() {
    Jc.push(ht), ht = false;
  }
  function Ht() {
    const e = Jc.pop();
    ht = e === void 0 ? true : e;
  }
  function qs(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = he;
      he = void 0;
      try {
        t();
      } finally {
        he = n;
      }
    }
  }
  let Li = 0;
  class sf {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class $r {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!he || !ht || he === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== he) n = this.activeLink = new sf(he, this), he.deps ? (n.prevDep = he.depsTail, he.depsTail.nextDep = n, he.depsTail = n) : he.deps = he.depsTail = n, Xc(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const i = n.nextDep;
        i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = he.depsTail, n.nextDep = void 0, he.depsTail.nextDep = n, he.depsTail = n, he.deps === n && (he.deps = i);
      }
      return n;
    }
    trigger(t) {
      this.version++, Li++, this.notify(t);
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
  function Xc(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) Xc(i);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const mr = /* @__PURE__ */ new WeakMap(), Tn = Symbol(""), jo = Symbol(""), Ci = Symbol("");
  function Fe(e, t, n) {
    if (ht && he) {
      let i = mr.get(e);
      i || mr.set(e, i = /* @__PURE__ */ new Map());
      let r = i.get(n);
      r || (i.set(n, r = new $r()), r.map = i, r.key = n), r.track();
    }
  }
  function xt(e, t, n, i, r, o) {
    const s = mr.get(e);
    if (!s) {
      Li++;
      return;
    }
    const a = (c) => {
      c && c.trigger();
    };
    if (ws(), t === "clear") s.forEach(a);
    else {
      const c = z(e), u = c && gs(n);
      if (c && n === "length") {
        const l = Number(i);
        s.forEach((d, p) => {
          (p === "length" || p === Ci || !Wt(p) && p >= l) && a(d);
        });
      } else switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)), u && a(s.get(Ci)), t) {
        case "add":
          c ? u && a(s.get("length")) : (a(s.get(Tn)), jn(e) && a(s.get(jo)));
          break;
        case "delete":
          c || (a(s.get(Tn)), jn(e) && a(s.get(jo)));
          break;
        case "set":
          jn(e) && a(s.get(Tn));
          break;
      }
    }
    ys();
  }
  function af(e, t) {
    const n = mr.get(e);
    return n && n.get(t);
  }
  function Cn(e) {
    const t = ne(e);
    return t === e ? t : (Fe(t, "iterate", Ci), st(e) ? t : t.map(Le));
  }
  function zr(e) {
    return Fe(e = ne(e), "iterate", Ci), e;
  }
  const cf = {
    __proto__: null,
    [Symbol.iterator]() {
      return uo(this, Symbol.iterator, Le);
    },
    concat(...e) {
      return Cn(this).concat(...e.map((t) => z(t) ? Cn(t) : t));
    },
    entries() {
      return uo(this, "entries", (e) => (e[1] = Le(e[1]), e));
    },
    every(e, t) {
      return Nt(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Nt(this, "filter", e, t, (n) => n.map(Le), arguments);
    },
    find(e, t) {
      return Nt(this, "find", e, t, Le, arguments);
    },
    findIndex(e, t) {
      return Nt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Nt(this, "findLast", e, t, Le, arguments);
    },
    findLastIndex(e, t) {
      return Nt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Nt(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return fo(this, "includes", e);
    },
    indexOf(...e) {
      return fo(this, "indexOf", e);
    },
    join(e) {
      return Cn(this).join(e);
    },
    lastIndexOf(...e) {
      return fo(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Nt(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return ni(this, "pop");
    },
    push(...e) {
      return ni(this, "push", e);
    },
    reduce(e, ...t) {
      return Js(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Js(this, "reduceRight", e, t);
    },
    shift() {
      return ni(this, "shift");
    },
    some(e, t) {
      return Nt(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return ni(this, "splice", e);
    },
    toReversed() {
      return Cn(this).toReversed();
    },
    toSorted(e) {
      return Cn(this).toSorted(e);
    },
    toSpliced(...e) {
      return Cn(this).toSpliced(...e);
    },
    unshift(...e) {
      return ni(this, "unshift", e);
    },
    values() {
      return uo(this, "values", Le);
    }
  };
  function uo(e, t, n) {
    const i = zr(e), r = i[t]();
    return i !== e && !st(e) && (r._next = r.next, r.next = () => {
      const o = r._next();
      return o.done || (o.value = n(o.value)), o;
    }), r;
  }
  const lf = Array.prototype;
  function Nt(e, t, n, i, r, o) {
    const s = zr(e), a = s !== e && !st(e), c = s[t];
    if (c !== lf[t]) {
      const d = c.apply(e, o);
      return a ? Le(d) : d;
    }
    let u = n;
    s !== e && (a ? u = function(d, p) {
      return n.call(this, Le(d), p, e);
    } : n.length > 2 && (u = function(d, p) {
      return n.call(this, d, p, e);
    }));
    const l = c.call(s, u, i);
    return a && r ? r(l) : l;
  }
  function Js(e, t, n, i) {
    const r = zr(e);
    let o = n;
    return r !== e && (st(e) ? n.length > 3 && (o = function(s, a, c) {
      return n.call(this, s, a, c, e);
    }) : o = function(s, a, c) {
      return n.call(this, s, Le(a), c, e);
    }), r[t](o, ...i);
  }
  function fo(e, t, n) {
    const i = ne(e);
    Fe(i, "iterate", Ci);
    const r = i[t](...n);
    return (r === -1 || r === false) && Is(n[0]) ? (n[0] = ne(n[0]), i[t](...n)) : r;
  }
  function ni(e, t, n = []) {
    Ut(), ws();
    const i = ne(e)[t].apply(e, n);
    return ys(), Ht(), i;
  }
  const uf = ds("__proto__,__v_isRef,__isVue"), Zc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Wt));
  function ff(e) {
    Wt(e) || (e = String(e));
    const t = ne(this);
    return Fe(t, "has", e), t.hasOwnProperty(e);
  }
  class Qc {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, i) {
      if (n === "__v_skip") return t.__v_skip;
      const r = this._isReadonly, o = this._isShallow;
      if (n === "__v_isReactive") return !r;
      if (n === "__v_isReadonly") return r;
      if (n === "__v_isShallow") return o;
      if (n === "__v_raw") return i === (r ? o ? Ef : il : o ? nl : tl).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const s = z(t);
      if (!r) {
        let c;
        if (s && (c = cf[n])) return c;
        if (n === "hasOwnProperty") return ff;
      }
      const a = Reflect.get(t, n, Ie(t) ? t : i);
      if ((Wt(n) ? Zc.has(n) : uf(n)) || (r || Fe(t, "get", n), o)) return a;
      if (Ie(a)) {
        const c = s && gs(n) ? a : a.value;
        return r && ce(c) ? Bo(c) : c;
      }
      return ce(a) ? r ? Bo(a) : Vr(a) : a;
    }
  }
  class el extends Qc {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, i, r) {
      let o = t[n];
      if (!this._isShallow) {
        const c = on(o);
        if (!st(i) && !on(i) && (o = ne(o), i = ne(i)), !z(t) && Ie(o) && !Ie(i)) return c || (o.value = i), true;
      }
      const s = z(t) && gs(n) ? Number(n) < t.length : re(t, n), a = Reflect.set(t, n, i, Ie(t) ? t : r);
      return t === ne(r) && (s ? Je(i, o) && xt(t, "set", n, i) : xt(t, "add", n, i)), a;
    }
    deleteProperty(t, n) {
      const i = re(t, n);
      t[n];
      const r = Reflect.deleteProperty(t, n);
      return r && i && xt(t, "delete", n, void 0), r;
    }
    has(t, n) {
      const i = Reflect.has(t, n);
      return (!Wt(n) || !Zc.has(n)) && Fe(t, "has", n), i;
    }
    ownKeys(t) {
      return Fe(t, "iterate", z(t) ? "length" : Tn), Reflect.ownKeys(t);
    }
  }
  class df extends Qc {
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
  const hf = new el(), pf = new df(), gf = new el(true);
  const Wo = (e) => e, Ki = (e) => Reflect.getPrototypeOf(e);
  function mf(e, t, n) {
    return function(...i) {
      const r = this.__v_raw, o = ne(r), s = jn(o), a = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, u = r[e](...i), l = n ? Wo : t ? wr : Le;
      return !t && Fe(o, "iterate", c ? jo : Tn), {
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
  function qi(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function wf(e, t) {
    const n = {
      get(r) {
        const o = this.__v_raw, s = ne(o), a = ne(r);
        e || (Je(r, a) && Fe(s, "get", r), Fe(s, "get", a));
        const { has: c } = Ki(s), u = t ? Wo : e ? wr : Le;
        if (c.call(s, r)) return u(o.get(r));
        if (c.call(s, a)) return u(o.get(a));
        o !== s && o.get(r);
      },
      get size() {
        const r = this.__v_raw;
        return !e && Fe(ne(r), "iterate", Tn), r.size;
      },
      has(r) {
        const o = this.__v_raw, s = ne(o), a = ne(r);
        return e || (Je(r, a) && Fe(s, "has", r), Fe(s, "has", a)), r === a ? o.has(r) : o.has(r) || o.has(a);
      },
      forEach(r, o) {
        const s = this, a = s.__v_raw, c = ne(a), u = t ? Wo : e ? wr : Le;
        return !e && Fe(c, "iterate", Tn), a.forEach((l, d) => r.call(o, u(l), u(d), s));
      }
    };
    return Ae(n, e ? {
      add: qi("add"),
      set: qi("set"),
      delete: qi("delete"),
      clear: qi("clear")
    } : {
      add(r) {
        !t && !st(r) && !on(r) && (r = ne(r));
        const o = ne(this);
        return Ki(o).has.call(o, r) || (o.add(r), xt(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !st(o) && !on(o) && (o = ne(o));
        const s = ne(this), { has: a, get: c } = Ki(s);
        let u = a.call(s, r);
        u || (r = ne(r), u = a.call(s, r));
        const l = c.call(s, r);
        return s.set(r, o), u ? Je(o, l) && xt(s, "set", r, o) : xt(s, "add", r, o), this;
      },
      delete(r) {
        const o = ne(this), { has: s, get: a } = Ki(o);
        let c = s.call(o, r);
        c || (r = ne(r), c = s.call(o, r)), a && a.call(o, r);
        const u = o.delete(r);
        return c && xt(o, "delete", r, void 0), u;
      },
      clear() {
        const r = ne(this), o = r.size !== 0, s = r.clear();
        return o && xt(r, "clear", void 0, void 0), s;
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
  function vs(e, t) {
    const n = wf(e, t);
    return (i, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(re(n, r) && r in i ? n : i, r, o);
  }
  const yf = {
    get: vs(false, false)
  }, bf = {
    get: vs(false, true)
  }, vf = {
    get: vs(true, false)
  };
  const tl = /* @__PURE__ */ new WeakMap(), nl = /* @__PURE__ */ new WeakMap(), il = /* @__PURE__ */ new WeakMap(), Ef = /* @__PURE__ */ new WeakMap();
  function If(e) {
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
  function _f(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : If(zu(e));
  }
  Vr = function(e) {
    return on(e) ? e : Es(e, false, hf, yf, tl);
  };
  Tf = function(e) {
    return Es(e, false, gf, bf, nl);
  };
  Bo = function(e) {
    return Es(e, true, pf, vf, il);
  };
  function Es(e, t, n, i, r) {
    if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = _f(e);
    if (o === 0) return e;
    const s = r.get(e);
    if (s) return s;
    const a = new Proxy(e, o === 2 ? i : n);
    return r.set(e, a), a;
  }
  function rn(e) {
    return on(e) ? rn(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function on(e) {
    return !!(e && e.__v_isReadonly);
  }
  function st(e) {
    return !!(e && e.__v_isShallow);
  }
  function Is(e) {
    return e ? !!e.__v_raw : false;
  }
  function ne(e) {
    const t = e && e.__v_raw;
    return t ? ne(t) : e;
  }
  _s = function(e) {
    return !re(e, "__v_skip") && Object.isExtensible(e) && Fc(e, "__v_skip", true), e;
  };
  const Le = (e) => ce(e) ? Vr(e) : e, wr = (e) => ce(e) ? Bo(e) : e;
  Ie = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  rt = function(e) {
    return rl(e, false);
  };
  Of = function(e) {
    return rl(e, true);
  };
  function rl(e, t) {
    return Ie(e) ? e : new Af(e, t);
  }
  class Af {
    constructor(t, n) {
      this.dep = new $r(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ne(t), this._value = n ? t : Le(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, i = this.__v_isShallow || st(t) || on(t);
      t = i ? t : ne(t), Je(t, n) && (this._rawValue = t, this._value = i ? t : Le(t), this.dep.trigger());
    }
  }
  ol = function(e) {
    return Ie(e) ? e.value : e;
  };
  ab = function(e) {
    return Y(e) ? e() : ol(e);
  };
  const Sf = {
    get: (e, t, n) => t === "__v_raw" ? e : ol(Reflect.get(e, t, n)),
    set: (e, t, n, i) => {
      const r = e[t];
      return Ie(r) && !Ie(n) ? (r.value = n, true) : Reflect.set(e, t, n, i);
    }
  };
  function sl(e) {
    return rn(e) ? e : new Proxy(e, Sf);
  }
  class Rf {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new $r(), { get: i, set: r } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = i, this._set = r;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Pf(e) {
    return new Rf(e);
  }
  Nf = function(e) {
    const t = z(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = al(e, n);
    return t;
  };
  class Lf {
    constructor(t, n, i) {
      this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = true, this._value = void 0;
    }
    get value() {
      const t = this._object[this._key];
      return this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return af(ne(this._object), this._key);
    }
  }
  class Cf {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  cb = function(e, t, n) {
    return Ie(e) ? e : Y(e) ? new Cf(e) : ce(e) && arguments.length > 1 ? al(e, t, n) : rt(e);
  };
  function al(e, t, n) {
    const i = e[t];
    return Ie(i) ? i : new Lf(e, t, n);
  }
  class xf {
    constructor(t, n, i) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new $r(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Li - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && he !== this) return Vc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return qc(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Mf(e, t, n = false) {
    let i, r;
    return Y(e) ? i = e : (i = e.get, r = e.set), new xf(i, r, n);
  }
  const Ji = {}, yr = /* @__PURE__ */ new WeakMap();
  let yn;
  function kf(e, t = false, n = yn) {
    if (n) {
      let i = yr.get(n);
      i || yr.set(n, i = []), i.push(e);
    }
  }
  function Df(e, t, n = ie) {
    const { immediate: i, deep: r, once: o, scheduler: s, augmentJob: a, call: c } = n, u = (T) => r ? T : st(T) || r === false || r === 0 ? Mt(T, 1) : Mt(T);
    let l, d, p, g, b = false, w = false;
    if (Ie(e) ? (d = () => e.value, b = st(e)) : rn(e) ? (d = () => u(e), b = true) : z(e) ? (w = true, b = e.some((T) => rn(T) || st(T)), d = () => e.map((T) => {
      if (Ie(T)) return T.value;
      if (rn(T)) return u(T);
      if (Y(T)) return c ? c(T, 2) : T();
    })) : Y(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
      if (p) {
        Ut();
        try {
          p();
        } finally {
          Ht();
        }
      }
      const T = yn;
      yn = l;
      try {
        return c ? c(e, 3, [
          g
        ]) : e(g);
      } finally {
        yn = T;
      }
    } : d = dt, t && r) {
      const T = d, G = r === true ? 1 / 0 : r;
      d = () => Mt(T(), G);
    }
    const P = Bc(), E = () => {
      l.stop(), P && P.active && ps(P.effects, l);
    };
    if (o && t) {
      const T = t;
      t = (...G) => {
        T(...G), E();
      };
    }
    let I = w ? new Array(e.length).fill(Ji) : Ji;
    const M = (T) => {
      if (!(!(l.flags & 1) || !l.dirty && !T)) if (t) {
        const G = l.run();
        if (r || b || (w ? G.some((X, Z) => Je(X, I[Z])) : Je(G, I))) {
          p && p();
          const X = yn;
          yn = l;
          try {
            const Z = [
              G,
              I === Ji ? void 0 : w && I[0] === Ji ? [] : I,
              g
            ];
            I = G, c ? c(t, 3, Z) : t(...Z);
          } finally {
            yn = X;
          }
        }
      } else l.run();
    };
    return a && a(M), l = new $c(d), l.scheduler = s ? () => s(M, false) : M, g = (T) => kf(T, false, l), p = l.onStop = () => {
      const T = yr.get(l);
      if (T) {
        if (c) c(T, 4);
        else for (const G of T) G();
        yr.delete(l);
      }
    }, t ? i ? M(true) : I = l.run() : s ? s(M.bind(null, true), true) : l.run(), E.pause = l.pause.bind(l), E.resume = l.resume.bind(l), E.stop = E, E;
  }
  function Mt(e, t = 1 / 0, n) {
    if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, Ie(e)) Mt(e.value, t, n);
    else if (z(e)) for (let i = 0; i < e.length; i++) Mt(e[i], t, n);
    else if (xc(e) || jn(e)) e.forEach((i) => {
      Mt(i, t, n);
    });
    else if (Dc(e)) {
      for (const i in e) Mt(e[i], t, n);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Mt(e[i], t, n);
    }
    return e;
  }
  function Wi(e, t, n, i) {
    try {
      return i ? e(...i) : e();
    } catch (r) {
      Yr(r, t, n);
    }
  }
  function pt(e, t, n, i) {
    if (Y(e)) {
      const r = Wi(e, t, n, i);
      return r && Mc(r) && r.catch((o) => {
        Yr(o, t, n);
      }), r;
    }
    if (z(e)) {
      const r = [];
      for (let o = 0; o < e.length; o++) r.push(pt(e[o], t, n, i));
      return r;
    }
  }
  function Yr(e, t, n, i = true) {
    const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ie;
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
      if (o) {
        Ut(), Wi(o, null, 10, [
          e,
          c,
          u
        ]), Ht();
        return;
      }
    }
    Ff(e, n, r, i, s);
  }
  function Ff(e, t, n, i = true, r = false) {
    if (r) throw e;
    console.error(e);
  }
  const $e = [];
  let _t = -1;
  const Wn = [];
  let Xt = null, Hn = 0;
  const cl = Promise.resolve();
  let br = null;
  ll = function(e) {
    const t = br || cl;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Uf(e) {
    let t = _t + 1, n = $e.length;
    for (; t < n; ) {
      const i = t + n >>> 1, r = $e[i], o = xi(r);
      o < e || o === e && r.flags & 2 ? t = i + 1 : n = i;
    }
    return t;
  }
  function Ts(e) {
    if (!(e.flags & 1)) {
      const t = xi(e), n = $e[$e.length - 1];
      !n || !(e.flags & 2) && t >= xi(n) ? $e.push(e) : $e.splice(Uf(t), 0, e), e.flags |= 1, ul();
    }
  }
  function ul() {
    br || (br = cl.then(hl));
  }
  function fl(e) {
    z(e) ? Wn.push(...e) : Xt && e.id === -1 ? Xt.splice(Hn + 1, 0, e) : e.flags & 1 || (Wn.push(e), e.flags |= 1), ul();
  }
  function Xs(e, t, n = _t + 1) {
    for (; n < $e.length; n++) {
      const i = $e[n];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        $e.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function dl(e) {
    if (Wn.length) {
      const t = [
        ...new Set(Wn)
      ].sort((n, i) => xi(n) - xi(i));
      if (Wn.length = 0, Xt) {
        Xt.push(...t);
        return;
      }
      for (Xt = t, Hn = 0; Hn < Xt.length; Hn++) {
        const n = Xt[Hn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Xt = null, Hn = 0;
    }
  }
  const xi = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function hl(e) {
    try {
      for (_t = 0; _t < $e.length; _t++) {
        const t = $e[_t];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; _t < $e.length; _t++) {
        const t = $e[_t];
        t && (t.flags &= -2);
      }
      _t = -1, $e.length = 0, dl(), br = null, ($e.length || Wn.length) && hl();
    }
  }
  let xe = null, pl = null;
  function vr(e) {
    const t = xe;
    return xe = e, pl = e && e.type.__scopeId || null, t;
  }
  Hf = function(e, t = xe, n) {
    if (!t || e._n) return e;
    const i = (...r) => {
      i._d && Ar(-1);
      const o = vr(t);
      let s;
      try {
        s = e(...r);
      } finally {
        vr(o), i._d && Ar(1);
      }
      return s;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  lb = function(e, t) {
    if (xe === null) return e;
    const n = Qr(xe), i = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
      let [o, s, a, c = ie] = t[r];
      o && (Y(o) && (o = {
        mounted: o,
        updated: o
      }), o.deep && Mt(s), i.push({
        dir: o,
        instance: n,
        value: s,
        oldValue: void 0,
        arg: a,
        modifiers: c
      }));
    }
    return e;
  };
  function hn(e, t, n, i) {
    const r = e.dirs, o = t && t.dirs;
    for (let s = 0; s < r.length; s++) {
      const a = r[s];
      o && (a.oldValue = o[s].value);
      let c = a.dir[i];
      c && (Ut(), pt(c, n, 8, [
        e.el,
        a,
        e,
        t
      ]), Ht());
    }
  }
  const gl = Symbol("_vte"), ml = (e) => e.__isTeleport, _i = (e) => e && (e.disabled || e.disabled === ""), Zs = (e) => e && (e.defer || e.defer === ""), Qs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ea = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, $o = (e, t) => {
    const n = e && e.to;
    return be(n) ? t ? t(n) : null : n;
  }, wl = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, i, r, o, s, a, c, u) {
      const { mc: l, pc: d, pbc: p, o: { insert: g, querySelector: b, createText: w, createComment: P } } = u, E = _i(t.props);
      let { shapeFlag: I, children: M, dynamicChildren: T } = t;
      if (e == null) {
        const G = t.el = w(""), X = t.anchor = w("");
        g(G, n, i), g(X, n, i);
        const Z = (D, B) => {
          I & 16 && l(M, D, B, r, o, s, a, c);
        }, W = () => {
          const D = t.target = $o(t.props, b), B = yl(D, t, w, g);
          D && (s !== "svg" && Qs(D) ? s = "svg" : s !== "mathml" && ea(D) && (s = "mathml"), r && r.isCE && (r.ce._teleportTargets || (r.ce._teleportTargets = /* @__PURE__ */ new Set())).add(D), E || (Z(D, B), ar(t, false)));
        };
        E && (Z(n, X), ar(t, true)), Zs(t.props) ? (t.el.__isMounted = false, Re(() => {
          W(), delete t.el.__isMounted;
        }, o)) : W();
      } else {
        if (Zs(t.props) && e.el.__isMounted === false) {
          Re(() => {
            wl.process(e, t, n, i, r, o, s, a, c, u);
          }, o);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const G = t.anchor = e.anchor, X = t.target = e.target, Z = t.targetAnchor = e.targetAnchor, W = _i(e.props), D = W ? n : X, B = W ? G : Z;
        if (s === "svg" || Qs(X) ? s = "svg" : (s === "mathml" || ea(X)) && (s = "mathml"), T ? (p(e.dynamicChildren, T, D, r, o, s, a), Ls(e, t, true)) : c || d(e, t, D, B, r, o, s, a, false), E) W ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Xi(t, n, G, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Q = t.target = $o(t.props, b);
          Q && Xi(t, Q, null, u, 0);
        } else W && Xi(t, X, Z, u, 1);
        ar(t, E);
      }
    },
    remove(e, t, n, { um: i, o: { remove: r } }, o) {
      const { shapeFlag: s, children: a, anchor: c, targetStart: u, targetAnchor: l, target: d, props: p } = e;
      if (d && (r(u), r(l)), o && r(c), s & 16) {
        const g = o || !_i(p);
        for (let b = 0; b < a.length; b++) {
          const w = a[b];
          i(w, t, n, g, !!w.dynamicChildren);
        }
      }
    },
    move: Xi,
    hydrate: Gf
  };
  function Xi(e, t, n, { o: { insert: i }, m: r }, o = 2) {
    o === 0 && i(e.targetAnchor, t, n);
    const { el: s, anchor: a, shapeFlag: c, children: u, props: l } = e, d = o === 2;
    if (d && i(s, t, n), (!d || _i(l)) && c & 16) for (let p = 0; p < u.length; p++) r(u[p], t, n, 2);
    d && i(a, t, n);
  }
  function Gf(e, t, n, i, r, o, { o: { nextSibling: s, parentNode: a, querySelector: c, insert: u, createText: l } }, d) {
    function p(w, P, E, I) {
      P.anchor = d(s(w), P, a(w), n, i, r, o), P.targetStart = E, P.targetAnchor = I;
    }
    const g = t.target = $o(t.props, c), b = _i(t.props);
    if (g) {
      const w = g._lpa || g.firstChild;
      if (t.shapeFlag & 16) if (b) p(e, t, w, w && s(w));
      else {
        t.anchor = s(e);
        let P = w;
        for (; P; ) {
          if (P && P.nodeType === 8) {
            if (P.data === "teleport start anchor") t.targetStart = P;
            else if (P.data === "teleport anchor") {
              t.targetAnchor = P, g._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          }
          P = s(P);
        }
        t.targetAnchor || yl(g, t, l, u), d(w && s(w), t, g, n, i, r, o);
      }
      ar(t, b);
    } else b && t.shapeFlag & 16 && p(e, t, e, s(e));
    return t.anchor && s(t.anchor);
  }
  ub = wl;
  function ar(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let i, r;
      for (t ? (i = e.el, r = e.anchor) : (i = e.targetStart, r = e.targetAnchor); i && i !== r; ) i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
      n.ut();
    }
  }
  function yl(e, t, n, i) {
    const r = t.targetStart = n(""), o = t.targetAnchor = n("");
    return r[gl] = o, e && (i(r, e), i(o, e)), o;
  }
  const Ct = Symbol("_leaveCb"), Zi = Symbol("_enterCb");
  function bl() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Bi(() => {
      e.isMounted = true;
    }), Ss(() => {
      e.isUnmounting = true;
    }), e;
  }
  const nt = [
    Function,
    Array
  ], vl = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: nt,
    onEnter: nt,
    onAfterEnter: nt,
    onEnterCancelled: nt,
    onBeforeLeave: nt,
    onLeave: nt,
    onAfterLeave: nt,
    onLeaveCancelled: nt,
    onBeforeAppear: nt,
    onAppear: nt,
    onAfterAppear: nt,
    onAppearCancelled: nt
  }, El = (e) => {
    const t = e.subTree;
    return t.component ? El(t.component) : t;
  }, jf = {
    name: "BaseTransition",
    props: vl,
    setup(e, { slots: t }) {
      const n = cn(), i = bl();
      return () => {
        const r = t.default && Os(t.default(), true);
        if (!r || !r.length) return;
        const o = Il(r), s = ne(e), { mode: a } = s;
        if (i.isLeaving) return ho(o);
        const c = ta(o);
        if (!c) return ho(o);
        let u = Mi(c, s, i, n, (d) => u = d);
        c.type !== Ce && sn(c, u);
        let l = n.subTree && ta(n.subTree);
        if (l && l.type !== Ce && !Qt(l, c) && El(n).type !== Ce) {
          let d = Mi(l, s, i, n);
          if (sn(l, d), a === "out-in" && c.type !== Ce) return i.isLeaving = true, d.afterLeave = () => {
            i.isLeaving = false, n.job.flags & 8 || n.update(), delete d.afterLeave, l = void 0;
          }, ho(o);
          a === "in-out" && c.type !== Ce ? d.delayLeave = (p, g, b) => {
            const w = _l(i, l);
            w[String(l.key)] = l, p[Ct] = () => {
              g(), p[Ct] = void 0, delete u.delayedLeave, l = void 0;
            }, u.delayedLeave = () => {
              b(), delete u.delayedLeave, l = void 0;
            };
          } : l = void 0;
        } else l && (l = void 0);
        return o;
      };
    }
  };
  function Il(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Ce) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Wf = jf;
  function _l(e, t) {
    const { leavingVNodes: n } = e;
    let i = n.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
  }
  function Mi(e, t, n, i, r) {
    const { appear: o, mode: s, persisted: a = false, onBeforeEnter: c, onEnter: u, onAfterEnter: l, onEnterCancelled: d, onBeforeLeave: p, onLeave: g, onAfterLeave: b, onLeaveCancelled: w, onBeforeAppear: P, onAppear: E, onAfterAppear: I, onAppearCancelled: M } = t, T = String(e.key), G = _l(n, e), X = (D, B) => {
      D && pt(D, i, 9, B);
    }, Z = (D, B) => {
      const Q = B[1];
      X(D, B), z(D) ? D.every((j) => j.length <= 1) && Q() : D.length <= 1 && Q();
    }, W = {
      mode: s,
      persisted: a,
      beforeEnter(D) {
        let B = c;
        if (!n.isMounted) if (o) B = P || c;
        else return;
        D[Ct] && D[Ct](true);
        const Q = G[T];
        Q && Qt(e, Q) && Q.el[Ct] && Q.el[Ct](), X(B, [
          D
        ]);
      },
      enter(D) {
        let B = u, Q = l, j = d;
        if (!n.isMounted) if (o) B = E || u, Q = I || l, j = M || d;
        else return;
        let se = false;
        const Pe = D[Zi] = (at) => {
          se || (se = true, at ? X(j, [
            D
          ]) : X(Q, [
            D
          ]), W.delayedLeave && W.delayedLeave(), D[Zi] = void 0);
        };
        B ? Z(B, [
          D,
          Pe
        ]) : Pe();
      },
      leave(D, B) {
        const Q = String(e.key);
        if (D[Zi] && D[Zi](true), n.isUnmounting) return B();
        X(p, [
          D
        ]);
        let j = false;
        const se = D[Ct] = (Pe) => {
          j || (j = true, B(), Pe ? X(w, [
            D
          ]) : X(b, [
            D
          ]), D[Ct] = void 0, G[Q] === e && delete G[Q]);
        };
        G[Q] = e, g ? Z(g, [
          D,
          se
        ]) : se();
      },
      clone(D) {
        const B = Mi(D, t, n, i, r);
        return r && r(B), B;
      }
    };
    return W;
  }
  function ho(e) {
    if (Kr(e)) return e = Gt(e), e.children = null, e;
  }
  function ta(e) {
    if (!Kr(e)) return ml(e.type) && e.children ? Il(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && Y(n.default)) return n.default();
    }
  }
  function sn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, sn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Os(e, t = false, n) {
    let i = [], r = 0;
    for (let o = 0; o < e.length; o++) {
      let s = e[o];
      const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
      s.type === Ue ? (s.patchFlag & 128 && r++, i = i.concat(Os(s.children, t, a))) : (t || s.type !== Ce) && i.push(a != null ? Gt(s, {
        key: a
      }) : s);
    }
    if (r > 1) for (let o = 0; o < i.length; o++) i[o].patchFlag = -2;
    return i;
  }
  Bf = function(e, t) {
    return Y(e) ? Ae({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Tl(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  fb = function(e) {
    const t = cn(), n = Of(null);
    if (t) {
      const r = t.refs === ie ? t.refs = {} : t.refs;
      Object.defineProperty(r, e, {
        enumerable: true,
        get: () => n.value,
        set: (o) => n.value = o
      });
    }
    return n;
  };
  const Er = /* @__PURE__ */ new WeakMap();
  function Ti(e, t, n, i, r = false) {
    if (z(e)) {
      e.forEach((b, w) => Ti(b, t && (z(t) ? t[w] : t), n, i, r));
      return;
    }
    if (On(i) && !r) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Ti(e, t, n, i.component.subTree);
      return;
    }
    const o = i.shapeFlag & 4 ? Qr(i.component) : i.el, s = r ? null : o, { i: a, r: c } = e, u = t && t.r, l = a.refs === ie ? a.refs = {} : a.refs, d = a.setupState, p = ne(d), g = d === ie ? Cc : (b) => re(p, b);
    if (u != null && u !== c) {
      if (na(t), be(u)) l[u] = null, g(u) && (d[u] = null);
      else if (Ie(u)) {
        u.value = null;
        const b = t;
        b.k && (l[b.k] = null);
      }
    }
    if (Y(c)) Wi(c, a, 12, [
      s,
      l
    ]);
    else {
      const b = be(c), w = Ie(c);
      if (b || w) {
        const P = () => {
          if (e.f) {
            const E = b ? g(c) ? d[c] : l[c] : c.value;
            if (r) z(E) && ps(E, o);
            else if (z(E)) E.includes(o) || E.push(o);
            else if (b) l[c] = [
              o
            ], g(c) && (d[c] = l[c]);
            else {
              const I = [
                o
              ];
              c.value = I, e.k && (l[e.k] = I);
            }
          } else b ? (l[c] = s, g(c) && (d[c] = s)) : w && (c.value = s, e.k && (l[e.k] = s));
        };
        if (s) {
          const E = () => {
            P(), Er.delete(e);
          };
          E.id = -1, Er.set(e, E), Re(E, n);
        } else na(e), P();
      }
    }
  }
  function na(e) {
    const t = Er.get(e);
    t && (t.flags |= 8, Er.delete(e));
  }
  Wr().requestIdleCallback;
  Wr().cancelIdleCallback;
  let On, Kr, $f;
  On = (e) => !!e.type.__asyncLoader;
  Kr = (e) => e.type.__isKeepAlive;
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
      const n = cn(), i = n.ctx;
      if (!i.renderer) return () => {
        const I = t.default && t.default();
        return I && I.length === 1 ? I[0] : I;
      };
      const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
      let s = null;
      const a = n.suspense, { renderer: { p: c, m: u, um: l, o: { createElement: d } } } = i, p = d("div");
      i.activate = (I, M, T, G, X) => {
        const Z = I.component;
        u(I, M, T, 0, a), c(Z.vnode, I, M, T, Z, a, G, I.slotScopeIds, X), Re(() => {
          Z.isDeactivated = false, Z.a && vi(Z.a);
          const W = I.props && I.props.onVnodeMounted;
          W && it(W, Z.parent, I);
        }, a);
      }, i.deactivate = (I) => {
        const M = I.component;
        Tr(M.m), Tr(M.a), u(I, p, null, 1, a), Re(() => {
          M.da && vi(M.da);
          const T = I.props && I.props.onVnodeUnmounted;
          T && it(T, M.parent, I), M.isDeactivated = true;
        }, a);
      };
      function g(I) {
        po(I), l(I, n, a, true);
      }
      function b(I) {
        r.forEach((M, T) => {
          const G = Xo(M.type);
          G && !I(G) && w(T);
        });
      }
      function w(I) {
        const M = r.get(I);
        M && (!s || !Qt(M, s)) ? g(M) : s && po(s), r.delete(I), o.delete(I);
      }
      Bn(() => [
        e.include,
        e.exclude
      ], ([I, M]) => {
        I && b((T) => pi(I, T)), M && b((T) => !pi(M, T));
      }, {
        flush: "post",
        deep: true
      });
      let P = null;
      const E = () => {
        P != null && (Or(n.subTree.type) ? Re(() => {
          r.set(P, Qi(n.subTree));
        }, n.subTree.suspense) : r.set(P, Qi(n.subTree)));
      };
      return Bi(E), As(E), Ss(() => {
        r.forEach((I) => {
          const { subTree: M, suspense: T } = n, G = Qi(M);
          if (I.type === G.type && I.key === G.key) {
            po(G);
            const X = G.component.da;
            X && Re(X, T);
            return;
          }
          g(I);
        });
      }), () => {
        if (P = null, !t.default) return s = null;
        const I = t.default(), M = I[0];
        if (I.length > 1) return s = null, I;
        if (!Vn(M) || !(M.shapeFlag & 4) && !(M.shapeFlag & 128)) return s = null, M;
        let T = Qi(M);
        if (T.type === Ce) return s = null, T;
        const G = T.type, X = Xo(On(T) ? T.type.__asyncResolved || {} : G), { include: Z, exclude: W, max: D } = e;
        if (Z && (!X || !pi(Z, X)) || W && X && pi(W, X)) return T.shapeFlag &= -257, s = T, M;
        const B = T.key == null ? G : T.key, Q = r.get(B);
        return T.el && (T = Gt(T), M.shapeFlag & 128 && (M.ssContent = T)), P = B, Q ? (T.el = Q.el, T.component = Q.component, T.transition && sn(T, T.transition), T.shapeFlag |= 512, o.delete(B), o.add(B)) : (o.add(B), D && o.size > parseInt(D, 10) && w(o.values().next().value)), T.shapeFlag |= 256, s = T, Or(M.type) ? M : T;
      };
    }
  };
  db = $f;
  function pi(e, t) {
    return z(e) ? e.some((n) => pi(n, t)) : be(e) ? e.split(",").includes(t) : $u(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  zf = function(e, t) {
    Ol(e, "a", t);
  };
  Vf = function(e, t) {
    Ol(e, "da", t);
  };
  function Ol(e, t, n = He) {
    const i = e.__wdc || (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
    if (qr(t, i, n), n) {
      let r = n.parent;
      for (; r && r.parent; ) Kr(r.parent.vnode) && Yf(i, t, n, r), r = r.parent;
    }
  }
  function Yf(e, t, n, i) {
    const r = qr(t, e, i, true);
    Rs(() => {
      ps(i[t], r);
    }, n);
  }
  function po(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function Qi(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function qr(e, t, n = He, i = false) {
    if (n) {
      const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
        Ut();
        const a = $i(n), c = pt(t, n, e, s);
        return a(), Ht(), c;
      });
      return i ? r.unshift(o) : r.push(o), o;
    }
  }
  let $t, Al, As, qf, Jf, Xf;
  $t = (e) => (t, n = He) => {
    (!Di || e === "sp") && qr(e, (...i) => t(...i), n);
  };
  Kf = $t("bm");
  Bi = $t("m");
  Al = $t("bu");
  As = $t("u");
  Ss = $t("bum");
  Rs = $t("um");
  qf = $t("sp");
  Jf = $t("rtg");
  Xf = $t("rtc");
  function Zf(e, t = He) {
    qr("ec", e, t);
  }
  const Qf = "components", Sl = Symbol.for("v-ndc");
  hb = function(e) {
    return be(e) ? ed(Qf, e, false) || e : e || Sl;
  };
  function ed(e, t, n = true, i = false) {
    const r = xe || He;
    if (r) {
      const o = r.type;
      {
        const a = Xo(o, false);
        if (a && (a === t || a === tt(t) || a === jr(tt(t)))) return o;
      }
      const s = ia(r[e] || o[e], t) || ia(r.appContext[e], t);
      return !s && i ? o : s;
    }
  }
  function ia(e, t) {
    return e && (e[t] || e[tt(t)] || e[jr(tt(t))]);
  }
  td = function(e, t, n, i) {
    let r;
    const o = n, s = z(e);
    if (s || be(e)) {
      const a = s && rn(e);
      let c = false, u = false;
      a && (c = !st(e), u = on(e), e = zr(e)), r = new Array(e.length);
      for (let l = 0, d = e.length; l < d; l++) r[l] = t(c ? u ? wr(Le(e[l])) : Le(e[l]) : e[l], l, void 0, o);
    } else if (typeof e == "number") {
      r = new Array(e);
      for (let a = 0; a < e; a++) r[a] = t(a + 1, a, void 0, o);
    } else if (ce(e)) if (e[Symbol.iterator]) r = Array.from(e, (a, c) => t(a, c, void 0, o));
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let c = 0, u = a.length; c < u; c++) {
        const l = a[c];
        r[c] = t(e[l], l, c, o);
      }
    }
    else r = [];
    return r;
  };
  pb = function(e, t, n = {}, i, r) {
    if (xe.ce || xe.parent && On(xe.parent) && xe.parent.ce) {
      const u = Object.keys(n).length > 0;
      return t !== "default" && (n.name = t), lt(), qo(Ue, null, [
        Ge("slot", n, i && i())
      ], u ? -2 : 64);
    }
    let o = e[t];
    o && o._c && (o._d = false), lt();
    const s = o && Rl(o(n)), a = n.key || s && s.key, c = qo(Ue, {
      key: (a && !Wt(a) ? a : `_${t}`) + (!s && i ? "_fb" : "")
    }, s || (i ? i() : []), s && e._ === 1 ? 64 : -2);
    return !r && c.scopeId && (c.slotScopeIds = [
      c.scopeId + "-s"
    ]), o && o._c && (o._d = true), c;
  };
  function Rl(e) {
    return e.some((t) => Vn(t) ? !(t.type === Ce || t.type === Ue && !Rl(t.children)) : true) ? e : null;
  }
  const zo = (e) => e ? Vl(e) ? Qr(e) : zo(e.parent) : null, Oi = Ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zo(e.parent),
    $root: (e) => zo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Nl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ts(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ll.bind(e.proxy)),
    $watch: (e) => Od.bind(e)
  }), go = (e, t) => e !== ie && !e.__isScriptSetup && re(e, t), nd = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: i, data: r, props: o, accessCache: s, type: a, appContext: c } = e;
      let u;
      if (t[0] !== "$") {
        const g = s[t];
        if (g !== void 0) switch (g) {
          case 1:
            return i[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
        else {
          if (go(i, t)) return s[t] = 1, i[t];
          if (r !== ie && re(r, t)) return s[t] = 2, r[t];
          if ((u = e.propsOptions[0]) && re(u, t)) return s[t] = 3, o[t];
          if (n !== ie && re(n, t)) return s[t] = 4, n[t];
          Vo && (s[t] = 0);
        }
      }
      const l = Oi[t];
      let d, p;
      if (l) return t === "$attrs" && Fe(e.attrs, "get", ""), l(e);
      if ((d = a.__cssModules) && (d = d[t])) return d;
      if (n !== ie && re(n, t)) return s[t] = 4, n[t];
      if (p = c.config.globalProperties, re(p, t)) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: r, ctx: o } = e;
      return go(r, t) ? (r[t] = n, true) : i !== ie && re(i, t) ? (i[t] = n, true) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: r, propsOptions: o, type: s } }, a) {
      let c, u;
      return !!(n[a] || e !== ie && a[0] !== "$" && re(e, a) || go(t, a) || (c = o[0]) && re(c, a) || re(i, a) || re(Oi, a) || re(r.config.globalProperties, a) || (u = s.__cssModules) && u[a]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : re(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function Ir(e) {
    return z(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  gb = function(e, t) {
    return !e || !t ? e || t : z(e) && z(t) ? e.concat(t) : Ae({}, Ir(e), Ir(t));
  };
  let Vo = true;
  function id(e) {
    const t = Nl(e), n = e.proxy, i = e.ctx;
    Vo = false, t.beforeCreate && ra(t.beforeCreate, e, "bc");
    const { data: r, computed: o, methods: s, watch: a, provide: c, inject: u, created: l, beforeMount: d, mounted: p, beforeUpdate: g, updated: b, activated: w, deactivated: P, beforeDestroy: E, beforeUnmount: I, destroyed: M, unmounted: T, render: G, renderTracked: X, renderTriggered: Z, errorCaptured: W, serverPrefetch: D, expose: B, inheritAttrs: Q, components: j, directives: se, filters: Pe } = t;
    if (u && rd(u, i, null), s) for (const ee in s) {
      const le = s[ee];
      Y(le) && (i[ee] = le.bind(n));
    }
    if (r) {
      const ee = r.call(n, n);
      ce(ee) && (e.data = Vr(ee));
    }
    if (Vo = true, o) for (const ee in o) {
      const le = o[ee], fn = Y(le) ? le.bind(n, n) : Y(le.get) ? le.get.bind(n, n) : dt, Vi = !Y(le) && Y(le.set) ? le.set.bind(n) : dt, dn = xs({
        get: fn,
        set: Vi
      });
      Object.defineProperty(i, ee, {
        enumerable: true,
        configurable: true,
        get: () => dn.value,
        set: (gt) => dn.value = gt
      });
    }
    if (a) for (const ee in a) Pl(a[ee], i, n, ee);
    if (c) {
      const ee = Y(c) ? c.call(n) : c;
      Reflect.ownKeys(ee).forEach((le) => {
        ud(le, ee[le]);
      });
    }
    l && ra(l, e, "c");
    function me(ee, le) {
      z(le) ? le.forEach((fn) => ee(fn.bind(n))) : le && ee(le.bind(n));
    }
    if (me(Kf, d), me(Bi, p), me(Al, g), me(As, b), me(zf, w), me(Vf, P), me(Zf, W), me(Xf, X), me(Jf, Z), me(Ss, I), me(Rs, T), me(qf, D), z(B)) if (B.length) {
      const ee = e.exposed || (e.exposed = {});
      B.forEach((le) => {
        Object.defineProperty(ee, le, {
          get: () => n[le],
          set: (fn) => n[le] = fn,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    G && e.render === dt && (e.render = G), Q != null && (e.inheritAttrs = Q), j && (e.components = j), se && (e.directives = se), D && Tl(e);
  }
  function rd(e, t, n = dt) {
    z(e) && (e = Yo(e));
    for (const i in e) {
      const r = e[i];
      let o;
      ce(r) ? "default" in r ? o = Ai(r.from || i, r.default, true) : o = Ai(r.from || i) : o = Ai(r), Ie(o) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => o.value,
        set: (s) => o.value = s
      }) : t[i] = o;
    }
  }
  function ra(e, t, n) {
    pt(z(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Pl(e, t, n, i) {
    let r = i.includes(".") ? jl(n, i) : () => n[i];
    if (be(e)) {
      const o = t[e];
      Y(o) && Bn(r, o);
    } else if (Y(e)) Bn(r, e.bind(n));
    else if (ce(e)) if (z(e)) e.forEach((o) => Pl(o, t, n, i));
    else {
      const o = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(o) && Bn(r, o, e);
    }
  }
  function Nl(e) {
    const t = e.type, { mixins: n, extends: i } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: s } } = e.appContext, a = o.get(t);
    let c;
    return a ? c = a : !r.length && !n && !i ? c = t : (c = {}, r.length && r.forEach((u) => _r(c, u, s, true)), _r(c, t, s)), ce(t) && o.set(t, c), c;
  }
  function _r(e, t, n, i = false) {
    const { mixins: r, extends: o } = t;
    o && _r(e, o, n, true), r && r.forEach((s) => _r(e, s, n, true));
    for (const s in t) if (!(i && s === "expose")) {
      const a = od[s] || n && n[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
    return e;
  }
  const od = {
    data: oa,
    props: sa,
    emits: sa,
    methods: gi,
    computed: gi,
    beforeCreate: je,
    created: je,
    beforeMount: je,
    mounted: je,
    beforeUpdate: je,
    updated: je,
    beforeDestroy: je,
    beforeUnmount: je,
    destroyed: je,
    unmounted: je,
    activated: je,
    deactivated: je,
    errorCaptured: je,
    serverPrefetch: je,
    components: gi,
    directives: gi,
    watch: ad,
    provide: oa,
    inject: sd
  };
  function oa(e, t) {
    return t ? e ? function() {
      return Ae(Y(e) ? e.call(this, this) : e, Y(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function sd(e, t) {
    return gi(Yo(e), Yo(t));
  }
  function Yo(e) {
    if (z(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function je(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function gi(e, t) {
    return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function sa(e, t) {
    return e ? z(e) && z(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Ae(/* @__PURE__ */ Object.create(null), Ir(e), Ir(t ?? {})) : t;
  }
  function ad(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ae(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) n[i] = je(e[i], t[i]);
    return n;
  }
  function Ll() {
    return {
      app: null,
      config: {
        isNativeTag: Cc,
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
    return function(i, r = null) {
      Y(i) || (i = Ae({}, i)), r != null && !ce(r) && (r = null);
      const o = Ll(), s = /* @__PURE__ */ new WeakSet(), a = [];
      let c = false;
      const u = o.app = {
        _uid: cd++,
        _component: i,
        _props: r,
        _container: null,
        _context: o,
        _instance: null,
        version: Yd,
        get config() {
          return o.config;
        },
        set config(l) {
        },
        use(l, ...d) {
          return s.has(l) || (l && Y(l.install) ? (s.add(l), l.install(u, ...d)) : Y(l) && (s.add(l), l(u, ...d))), u;
        },
        mixin(l) {
          return o.mixins.includes(l) || o.mixins.push(l), u;
        },
        component(l, d) {
          return d ? (o.components[l] = d, u) : o.components[l];
        },
        directive(l, d) {
          return d ? (o.directives[l] = d, u) : o.directives[l];
        },
        mount(l, d, p) {
          if (!c) {
            const g = u._ceVNode || Ge(i, r);
            return g.appContext = o, p === true ? p = "svg" : p === false && (p = void 0), e(g, l, p), c = true, u._container = l, l.__vue_app__ = u, Qr(g.component);
          }
        },
        onUnmount(l) {
          a.push(l);
        },
        unmount() {
          c && (pt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(l, d) {
          return o.provides[l] = d, u;
        },
        runWithContext(l) {
          const d = An;
          An = u;
          try {
            return l();
          } finally {
            An = d;
          }
        }
      };
      return u;
    };
  }
  let An = null;
  ud = function(e, t) {
    if (He) {
      let n = He.provides;
      const i = He.parent && He.parent.provides;
      i === n && (n = He.provides = Object.create(i)), n[e] = t;
    }
  };
  Ai = function(e, t, n = false) {
    const i = cn();
    if (i || An) {
      let r = An ? An._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (r && e in r) return r[e];
      if (arguments.length > 1) return n && Y(t) ? t.call(i && i.proxy) : t;
    }
  };
  fd = function() {
    return !!(cn() || An);
  };
  const Cl = {}, xl = () => Object.create(Cl), Ml = (e) => Object.getPrototypeOf(e) === Cl;
  function dd(e, t, n, i = false) {
    const r = {}, o = xl();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), kl(e, t, r, o);
    for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
    n ? e.props = i ? r : Tf(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
  }
  function hd(e, t, n, i) {
    const { props: r, attrs: o, vnode: { patchFlag: s } } = e, a = ne(r), [c] = e.propsOptions;
    let u = false;
    if ((i || s > 0) && !(s & 16)) {
      if (s & 8) {
        const l = e.vnode.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          let p = l[d];
          if (Xr(e.emitsOptions, p)) continue;
          const g = t[p];
          if (c) if (re(o, p)) g !== o[p] && (o[p] = g, u = true);
          else {
            const b = tt(p);
            r[b] = Ko(c, a, b, g, e, false);
          }
          else g !== o[p] && (o[p] = g, u = true);
        }
      }
    } else {
      kl(e, t, r, o) && (u = true);
      let l;
      for (const d in a) (!t || !re(t, d) && ((l = Bt(d)) === d || !re(t, l))) && (c ? n && (n[d] !== void 0 || n[l] !== void 0) && (r[d] = Ko(c, a, d, void 0, e, true)) : delete r[d]);
      if (o !== a) for (const d in o) (!t || !re(t, d)) && (delete o[d], u = true);
    }
    u && xt(e.attrs, "set", "");
  }
  function kl(e, t, n, i) {
    const [r, o] = e.propsOptions;
    let s = false, a;
    if (t) for (let c in t) {
      if (bi(c)) continue;
      const u = t[c];
      let l;
      r && re(r, l = tt(c)) ? !o || !o.includes(l) ? n[l] = u : (a || (a = {}))[l] = u : Xr(e.emitsOptions, c) || (!(c in i) || u !== i[c]) && (i[c] = u, s = true);
    }
    if (o) {
      const c = ne(n), u = a || ie;
      for (let l = 0; l < o.length; l++) {
        const d = o[l];
        n[d] = Ko(r, c, d, u[d], e, !re(u, d));
      }
    }
    return s;
  }
  function Ko(e, t, n, i, r, o) {
    const s = e[n];
    if (s != null) {
      const a = re(s, "default");
      if (a && i === void 0) {
        const c = s.default;
        if (s.type !== Function && !s.skipFactory && Y(c)) {
          const { propsDefaults: u } = r;
          if (n in u) i = u[n];
          else {
            const l = $i(r);
            i = u[n] = c.call(null, t), l();
          }
        } else i = c;
        r.ce && r.ce._setProp(n, i);
      }
      s[0] && (o && !a ? i = false : s[1] && (i === "" || i === Bt(n)) && (i = true));
    }
    return i;
  }
  const pd = /* @__PURE__ */ new WeakMap();
  function Dl(e, t, n = false) {
    const i = n ? pd : t.propsCache, r = i.get(e);
    if (r) return r;
    const o = e.props, s = {}, a = [];
    let c = false;
    if (!Y(e)) {
      const l = (d) => {
        c = true;
        const [p, g] = Dl(d, t, true);
        Ae(s, p), g && a.push(...g);
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    if (!o && !c) return ce(e) && i.set(e, Gn), Gn;
    if (z(o)) for (let l = 0; l < o.length; l++) {
      const d = tt(o[l]);
      aa(d) && (s[d] = ie);
    }
    else if (o) for (const l in o) {
      const d = tt(l);
      if (aa(d)) {
        const p = o[l], g = s[d] = z(p) || Y(p) ? {
          type: p
        } : Ae({}, p), b = g.type;
        let w = false, P = true;
        if (z(b)) for (let E = 0; E < b.length; ++E) {
          const I = b[E], M = Y(I) && I.name;
          if (M === "Boolean") {
            w = true;
            break;
          } else M === "String" && (P = false);
        }
        else w = Y(b) && b.name === "Boolean";
        g[0] = w, g[1] = P, (w || re(g, "default")) && a.push(d);
      }
    }
    const u = [
      s,
      a
    ];
    return ce(e) && i.set(e, u), u;
  }
  function aa(e) {
    return e[0] !== "$" && !bi(e);
  }
  const Ps = (e) => e === "_" || e === "_ctx" || e === "$stable", Ns = (e) => z(e) ? e.map(Ot) : [
    Ot(e)
  ], gd = (e, t, n) => {
    if (t._n) return t;
    const i = Hf((...r) => Ns(t(...r)), n);
    return i._c = false, i;
  }, Fl = (e, t, n) => {
    const i = e._ctx;
    for (const r in e) {
      if (Ps(r)) continue;
      const o = e[r];
      if (Y(o)) t[r] = gd(r, o, i);
      else if (o != null) {
        const s = Ns(o);
        t[r] = () => s;
      }
    }
  }, Ul = (e, t) => {
    const n = Ns(t);
    e.slots.default = () => n;
  }, Hl = (e, t, n) => {
    for (const i in t) (n || !Ps(i)) && (e[i] = t[i]);
  }, md = (e, t, n) => {
    const i = e.slots = xl();
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Hl(i, t, n), n && Fc(i, "_", r, true)) : Fl(t, i);
    } else t && Ul(e, t);
  }, wd = (e, t, n) => {
    const { vnode: i, slots: r } = e;
    let o = true, s = ie;
    if (i.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? o = false : Hl(r, t, n) : (o = !t.$stable, Fl(t, r)), s = t;
    } else t && (Ul(e, t), s = {
      default: 1
    });
    if (o) for (const a in r) !Ps(a) && s[a] == null && delete r[a];
  }, Re = Cd;
  function yd(e) {
    return bd(e);
  }
  function bd(e, t) {
    const n = Wr();
    n.__VUE__ = true;
    const { insert: i, remove: r, patchProp: o, createElement: s, createText: a, createComment: c, setText: u, setElementText: l, parentNode: d, nextSibling: p, setScopeId: g = dt, insertStaticContent: b } = e, w = (f, h, y, x = null, N = null, L = null, U = void 0, F = null, k = !!h.dynamicChildren) => {
      if (f === h) return;
      f && !Qt(f, h) && (x = Yi(f), gt(f, N, L, true), f = null), h.patchFlag === -2 && (k = false, h.dynamicChildren = null);
      const { type: C, ref: V, shapeFlag: H } = h;
      switch (C) {
        case Zr:
          P(f, h, y, x);
          break;
        case Ce:
          E(f, h, y, x);
          break;
        case Si:
          f == null && I(h, y, x, U);
          break;
        case Ue:
          j(f, h, y, x, N, L, U, F, k);
          break;
        default:
          H & 1 ? G(f, h, y, x, N, L, U, F, k) : H & 6 ? se(f, h, y, x, N, L, U, F, k) : (H & 64 || H & 128) && C.process(f, h, y, x, N, L, U, F, k, ei);
      }
      V != null && N ? Ti(V, f && f.ref, L, h || f, !h) : V == null && f && f.ref != null && Ti(f.ref, null, L, f, true);
    }, P = (f, h, y, x) => {
      if (f == null) i(h.el = a(h.children), y, x);
      else {
        const N = h.el = f.el;
        h.children !== f.children && u(N, h.children);
      }
    }, E = (f, h, y, x) => {
      f == null ? i(h.el = c(h.children || ""), y, x) : h.el = f.el;
    }, I = (f, h, y, x) => {
      [f.el, f.anchor] = b(f.children, h, y, x, f.el, f.anchor);
    }, M = ({ el: f, anchor: h }, y, x) => {
      let N;
      for (; f && f !== h; ) N = p(f), i(f, y, x), f = N;
      i(h, y, x);
    }, T = ({ el: f, anchor: h }) => {
      let y;
      for (; f && f !== h; ) y = p(f), r(f), f = y;
      r(h);
    }, G = (f, h, y, x, N, L, U, F, k) => {
      if (h.type === "svg" ? U = "svg" : h.type === "math" && (U = "mathml"), f == null) X(h, y, x, N, L, U, F, k);
      else {
        const C = f.el && f.el._isVueCE ? f.el : null;
        try {
          C && C._beginPatch(), D(f, h, N, L, U, F, k);
        } finally {
          C && C._endPatch();
        }
      }
    }, X = (f, h, y, x, N, L, U, F) => {
      let k, C;
      const { props: V, shapeFlag: H, transition: $, dirs: K } = f;
      if (k = f.el = s(f.type, L, V && V.is, V), H & 8 ? l(k, f.children) : H & 16 && W(f.children, k, null, x, N, mo(f, L), U, F), K && hn(f, null, x, "created"), Z(k, f, f.scopeId, U, x), V) {
        for (const ue in V) ue !== "value" && !bi(ue) && o(k, ue, null, V[ue], L, x);
        "value" in V && o(k, "value", null, V.value, L), (C = V.onVnodeBeforeMount) && it(C, x, f);
      }
      K && hn(f, null, x, "beforeMount");
      const te = vd(N, $);
      te && $.beforeEnter(k), i(k, h, y), ((C = V && V.onVnodeMounted) || te || K) && Re(() => {
        C && it(C, x, f), te && $.enter(k), K && hn(f, null, x, "mounted");
      }, N);
    }, Z = (f, h, y, x, N) => {
      if (y && g(f, y), x) for (let L = 0; L < x.length; L++) g(f, x[L]);
      if (N) {
        let L = N.subTree;
        if (h === L || Or(L.type) && (L.ssContent === h || L.ssFallback === h)) {
          const U = N.vnode;
          Z(f, U, U.scopeId, U.slotScopeIds, N.parent);
        }
      }
    }, W = (f, h, y, x, N, L, U, F, k = 0) => {
      for (let C = k; C < f.length; C++) {
        const V = f[C] = F ? Zt(f[C]) : Ot(f[C]);
        w(null, V, h, y, x, N, L, U, F);
      }
    }, D = (f, h, y, x, N, L, U) => {
      const F = h.el = f.el;
      let { patchFlag: k, dynamicChildren: C, dirs: V } = h;
      k |= f.patchFlag & 16;
      const H = f.props || ie, $ = h.props || ie;
      let K;
      if (y && pn(y, false), (K = $.onVnodeBeforeUpdate) && it(K, y, h, f), V && hn(h, f, y, "beforeUpdate"), y && pn(y, true), (H.innerHTML && $.innerHTML == null || H.textContent && $.textContent == null) && l(F, ""), C ? B(f.dynamicChildren, C, F, y, x, mo(h, N), L) : U || le(f, h, F, null, y, x, mo(h, N), L, false), k > 0) {
        if (k & 16) Q(F, H, $, y, N);
        else if (k & 2 && H.class !== $.class && o(F, "class", null, $.class, N), k & 4 && o(F, "style", H.style, $.style, N), k & 8) {
          const te = h.dynamicProps;
          for (let ue = 0; ue < te.length; ue++) {
            const oe = te[ue], ze = H[oe], Ve = $[oe];
            (Ve !== ze || oe === "value") && o(F, oe, ze, Ve, N, y);
          }
        }
        k & 1 && f.children !== h.children && l(F, h.children);
      } else !U && C == null && Q(F, H, $, y, N);
      ((K = $.onVnodeUpdated) || V) && Re(() => {
        K && it(K, y, h, f), V && hn(h, f, y, "updated");
      }, x);
    }, B = (f, h, y, x, N, L, U) => {
      for (let F = 0; F < h.length; F++) {
        const k = f[F], C = h[F], V = k.el && (k.type === Ue || !Qt(k, C) || k.shapeFlag & 198) ? d(k.el) : y;
        w(k, C, V, null, x, N, L, U, true);
      }
    }, Q = (f, h, y, x, N) => {
      if (h !== y) {
        if (h !== ie) for (const L in h) !bi(L) && !(L in y) && o(f, L, h[L], null, N, x);
        for (const L in y) {
          if (bi(L)) continue;
          const U = y[L], F = h[L];
          U !== F && L !== "value" && o(f, L, F, U, N, x);
        }
        "value" in y && o(f, "value", h.value, y.value, N);
      }
    }, j = (f, h, y, x, N, L, U, F, k) => {
      const C = h.el = f ? f.el : a(""), V = h.anchor = f ? f.anchor : a("");
      let { patchFlag: H, dynamicChildren: $, slotScopeIds: K } = h;
      K && (F = F ? F.concat(K) : K), f == null ? (i(C, y, x), i(V, y, x), W(h.children || [], y, V, N, L, U, F, k)) : H > 0 && H & 64 && $ && f.dynamicChildren ? (B(f.dynamicChildren, $, y, N, L, U, F), (h.key != null || N && h === N.subTree) && Ls(f, h, true)) : le(f, h, y, V, N, L, U, F, k);
    }, se = (f, h, y, x, N, L, U, F, k) => {
      h.slotScopeIds = F, f == null ? h.shapeFlag & 512 ? N.ctx.activate(h, y, x, U, k) : Pe(h, y, x, N, L, U, k) : at(f, h, k);
    }, Pe = (f, h, y, x, N, L, U) => {
      const F = f.component = Gd(f, x, N);
      if (Kr(f) && (F.ctx.renderer = ei), jd(F, false, U), F.asyncDep) {
        if (N && N.registerDep(F, me, U), !f.el) {
          const k = F.subTree = Ge(Ce);
          E(null, k, h, y), f.placeholder = k.el;
        }
      } else me(F, f, h, y, N, L, U);
    }, at = (f, h, y) => {
      const x = h.component = f.component;
      if (Nd(f, h, y)) if (x.asyncDep && !x.asyncResolved) {
        ee(x, h, y);
        return;
      } else x.next = h, x.update();
      else h.el = f.el, x.vnode = h;
    }, me = (f, h, y, x, N, L, U) => {
      const F = () => {
        if (f.isMounted) {
          let { next: H, bu: $, u: K, parent: te, vnode: ue } = f;
          {
            const wt = Gl(f);
            if (wt) {
              H && (H.el = ue.el, ee(f, H, U)), wt.asyncDep.then(() => {
                f.isUnmounted || F();
              });
              return;
            }
          }
          let oe = H, ze;
          pn(f, false), H ? (H.el = ue.el, ee(f, H, U)) : H = ue, $ && vi($), (ze = H.props && H.props.onVnodeBeforeUpdate) && it(ze, te, H, ue), pn(f, true);
          const Ve = ca(f), mt = f.subTree;
          f.subTree = Ve, w(mt, Ve, d(mt.el), Yi(mt), f, N, L), H.el = Ve.el, oe === null && Ld(f, Ve.el), K && Re(K, N), (ze = H.props && H.props.onVnodeUpdated) && Re(() => it(ze, te, H, ue), N);
        } else {
          let H;
          const { el: $, props: K } = h, { bm: te, m: ue, parent: oe, root: ze, type: Ve } = f, mt = On(h);
          pn(f, false), te && vi(te), !mt && (H = K && K.onVnodeBeforeMount) && it(H, oe, h), pn(f, true);
          {
            ze.ce && ze.ce._def.shadowRoot !== false && ze.ce._injectChildStyle(Ve);
            const wt = f.subTree = ca(f);
            w(null, wt, y, x, f, N, L), h.el = wt.el;
          }
          if (ue && Re(ue, N), !mt && (H = K && K.onVnodeMounted)) {
            const wt = h;
            Re(() => it(H, oe, wt), N);
          }
          (h.shapeFlag & 256 || oe && On(oe.vnode) && oe.vnode.shapeFlag & 256) && f.a && Re(f.a, N), f.isMounted = true, h = y = x = null;
        }
      };
      f.scope.on();
      const k = f.effect = new $c(F);
      f.scope.off();
      const C = f.update = k.run.bind(k), V = f.job = k.runIfDirty.bind(k);
      V.i = f, V.id = f.uid, k.scheduler = () => Ts(V), pn(f, true), C();
    }, ee = (f, h, y) => {
      h.component = f;
      const x = f.vnode.props;
      f.vnode = h, f.next = null, hd(f, h.props, x, y), wd(f, h.children, y), Ut(), Xs(f), Ht();
    }, le = (f, h, y, x, N, L, U, F, k = false) => {
      const C = f && f.children, V = f ? f.shapeFlag : 0, H = h.children, { patchFlag: $, shapeFlag: K } = h;
      if ($ > 0) {
        if ($ & 128) {
          Vi(C, H, y, x, N, L, U, F, k);
          return;
        } else if ($ & 256) {
          fn(C, H, y, x, N, L, U, F, k);
          return;
        }
      }
      K & 8 ? (V & 16 && Qn(C, N, L), H !== C && l(y, H)) : V & 16 ? K & 16 ? Vi(C, H, y, x, N, L, U, F, k) : Qn(C, N, L, true) : (V & 8 && l(y, ""), K & 16 && W(H, y, x, N, L, U, F, k));
    }, fn = (f, h, y, x, N, L, U, F, k) => {
      f = f || Gn, h = h || Gn;
      const C = f.length, V = h.length, H = Math.min(C, V);
      let $;
      for ($ = 0; $ < H; $++) {
        const K = h[$] = k ? Zt(h[$]) : Ot(h[$]);
        w(f[$], K, y, null, N, L, U, F, k);
      }
      C > V ? Qn(f, N, L, true, false, H) : W(h, y, x, N, L, U, F, k, H);
    }, Vi = (f, h, y, x, N, L, U, F, k) => {
      let C = 0;
      const V = h.length;
      let H = f.length - 1, $ = V - 1;
      for (; C <= H && C <= $; ) {
        const K = f[C], te = h[C] = k ? Zt(h[C]) : Ot(h[C]);
        if (Qt(K, te)) w(K, te, y, null, N, L, U, F, k);
        else break;
        C++;
      }
      for (; C <= H && C <= $; ) {
        const K = f[H], te = h[$] = k ? Zt(h[$]) : Ot(h[$]);
        if (Qt(K, te)) w(K, te, y, null, N, L, U, F, k);
        else break;
        H--, $--;
      }
      if (C > H) {
        if (C <= $) {
          const K = $ + 1, te = K < V ? h[K].el : x;
          for (; C <= $; ) w(null, h[C] = k ? Zt(h[C]) : Ot(h[C]), y, te, N, L, U, F, k), C++;
        }
      } else if (C > $) for (; C <= H; ) gt(f[C], N, L, true), C++;
      else {
        const K = C, te = C, ue = /* @__PURE__ */ new Map();
        for (C = te; C <= $; C++) {
          const Xe = h[C] = k ? Zt(h[C]) : Ot(h[C]);
          Xe.key != null && ue.set(Xe.key, C);
        }
        let oe, ze = 0;
        const Ve = $ - te + 1;
        let mt = false, wt = 0;
        const ti = new Array(Ve);
        for (C = 0; C < Ve; C++) ti[C] = 0;
        for (C = K; C <= H; C++) {
          const Xe = f[C];
          if (ze >= Ve) {
            gt(Xe, N, L, true);
            continue;
          }
          let yt;
          if (Xe.key != null) yt = ue.get(Xe.key);
          else for (oe = te; oe <= $; oe++) if (ti[oe - te] === 0 && Qt(Xe, h[oe])) {
            yt = oe;
            break;
          }
          yt === void 0 ? gt(Xe, N, L, true) : (ti[yt - te] = C + 1, yt >= wt ? wt = yt : mt = true, w(Xe, h[yt], y, null, N, L, U, F, k), ze++);
        }
        const zs = mt ? Ed(ti) : Gn;
        for (oe = zs.length - 1, C = Ve - 1; C >= 0; C--) {
          const Xe = te + C, yt = h[Xe], Vs = h[Xe + 1], Ys = Xe + 1 < V ? Vs.el || Vs.placeholder : x;
          ti[C] === 0 ? w(null, yt, y, Ys, N, L, U, F, k) : mt && (oe < 0 || C !== zs[oe] ? dn(yt, y, Ys, 2) : oe--);
        }
      }
    }, dn = (f, h, y, x, N = null) => {
      const { el: L, type: U, transition: F, children: k, shapeFlag: C } = f;
      if (C & 6) {
        dn(f.component.subTree, h, y, x);
        return;
      }
      if (C & 128) {
        f.suspense.move(h, y, x);
        return;
      }
      if (C & 64) {
        U.move(f, h, y, ei);
        return;
      }
      if (U === Ue) {
        i(L, h, y);
        for (let H = 0; H < k.length; H++) dn(k[H], h, y, x);
        i(f.anchor, h, y);
        return;
      }
      if (U === Si) {
        M(f, h, y);
        return;
      }
      if (x !== 2 && C & 1 && F) if (x === 0) F.beforeEnter(L), i(L, h, y), Re(() => F.enter(L), N);
      else {
        const { leave: H, delayLeave: $, afterLeave: K } = F, te = () => {
          f.ctx.isUnmounted ? r(L) : i(L, h, y);
        }, ue = () => {
          L._isLeaving && L[Ct](true), H(L, () => {
            te(), K && K();
          });
        };
        $ ? $(L, te, ue) : ue();
      }
      else i(L, h, y);
    }, gt = (f, h, y, x = false, N = false) => {
      const { type: L, props: U, ref: F, children: k, dynamicChildren: C, shapeFlag: V, patchFlag: H, dirs: $, cacheIndex: K } = f;
      if (H === -2 && (N = false), F != null && (Ut(), Ti(F, null, y, f, true), Ht()), K != null && (h.renderCache[K] = void 0), V & 256) {
        h.ctx.deactivate(f);
        return;
      }
      const te = V & 1 && $, ue = !On(f);
      let oe;
      if (ue && (oe = U && U.onVnodeBeforeUnmount) && it(oe, h, f), V & 6) Wu(f.component, y, x);
      else {
        if (V & 128) {
          f.suspense.unmount(y, x);
          return;
        }
        te && hn(f, null, h, "beforeUnmount"), V & 64 ? f.type.remove(f, h, y, ei, x) : C && !C.hasOnce && (L !== Ue || H > 0 && H & 64) ? Qn(C, h, y, false, true) : (L === Ue && H & 384 || !N && V & 16) && Qn(k, h, y), x && Bs(f);
      }
      (ue && (oe = U && U.onVnodeUnmounted) || te) && Re(() => {
        oe && it(oe, h, f), te && hn(f, null, h, "unmounted");
      }, y);
    }, Bs = (f) => {
      const { type: h, el: y, anchor: x, transition: N } = f;
      if (h === Ue) {
        ju(y, x);
        return;
      }
      if (h === Si) {
        T(f);
        return;
      }
      const L = () => {
        r(y), N && !N.persisted && N.afterLeave && N.afterLeave();
      };
      if (f.shapeFlag & 1 && N && !N.persisted) {
        const { leave: U, delayLeave: F } = N, k = () => U(y, L);
        F ? F(f.el, L, k) : k();
      } else L();
    }, ju = (f, h) => {
      let y;
      for (; f !== h; ) y = p(f), r(f), f = y;
      r(h);
    }, Wu = (f, h, y) => {
      const { bum: x, scope: N, job: L, subTree: U, um: F, m: k, a: C } = f;
      Tr(k), Tr(C), x && vi(x), N.stop(), L && (L.flags |= 8, gt(U, f, h, y)), F && Re(F, h), Re(() => {
        f.isUnmounted = true;
      }, h);
    }, Qn = (f, h, y, x = false, N = false, L = 0) => {
      for (let U = L; U < f.length; U++) gt(f[U], h, y, x, N);
    }, Yi = (f) => {
      if (f.shapeFlag & 6) return Yi(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const h = p(f.anchor || f.el), y = h && h[gl];
      return y ? p(y) : h;
    };
    let so = false;
    const $s = (f, h, y) => {
      f == null ? h._vnode && gt(h._vnode, null, null, true) : w(h._vnode || null, f, h, null, null, null, y), h._vnode = f, so || (so = true, Xs(), dl(), so = false);
    }, ei = {
      p: w,
      um: gt,
      m: dn,
      r: Bs,
      mt: Pe,
      mc: W,
      pc: le,
      pbc: B,
      n: Yi,
      o: e
    };
    return {
      render: $s,
      hydrate: void 0,
      createApp: ld($s)
    };
  }
  function mo({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function pn({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function vd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Ls(e, t, n = false) {
    const i = e.children, r = t.children;
    if (z(i) && z(r)) for (let o = 0; o < i.length; o++) {
      const s = i[o];
      let a = r[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[o] = Zt(r[o]), a.el = s.el), !n && a.patchFlag !== -2 && Ls(s, a)), a.type === Zr && a.patchFlag !== -1 && (a.el = s.el), a.type === Ce && !a.el && (a.el = s.el);
    }
  }
  function Ed(e) {
    const t = e.slice(), n = [
      0
    ];
    let i, r, o, s, a;
    const c = e.length;
    for (i = 0; i < c; i++) {
      const u = e[i];
      if (u !== 0) {
        if (r = n[n.length - 1], e[r] < u) {
          t[i] = r, n.push(i);
          continue;
        }
        for (o = 0, s = n.length - 1; o < s; ) a = o + s >> 1, e[n[a]] < u ? o = a + 1 : s = a;
        u < e[n[o]] && (o > 0 && (t[i] = n[o - 1]), n[o] = i);
      }
    }
    for (o = n.length, s = n[o - 1]; o-- > 0; ) n[o] = s, s = t[s];
    return n;
  }
  function Gl(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Gl(t);
  }
  function Tr(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Id = Symbol.for("v-scx"), _d = () => Ai(Id);
  mb = function(e, t) {
    return Jr(e, null, t);
  };
  function Td(e, t) {
    return Jr(e, null, {
      flush: "sync"
    });
  }
  Bn = function(e, t, n) {
    return Jr(e, t, n);
  };
  function Jr(e, t, n = ie) {
    const { immediate: i, deep: r, flush: o, once: s } = n, a = Ae({}, n), c = t && i || !t && o !== "post";
    let u;
    if (Di) {
      if (o === "sync") {
        const g = _d();
        u = g.__watcherHandles || (g.__watcherHandles = []);
      } else if (!c) {
        const g = () => {
        };
        return g.stop = dt, g.resume = dt, g.pause = dt, g;
      }
    }
    const l = He;
    a.call = (g, b, w) => pt(g, l, b, w);
    let d = false;
    o === "post" ? a.scheduler = (g) => {
      Re(g, l && l.suspense);
    } : o !== "sync" && (d = true, a.scheduler = (g, b) => {
      b ? g() : Ts(g);
    }), a.augmentJob = (g) => {
      t && (g.flags |= 4), d && (g.flags |= 2, l && (g.id = l.uid, g.i = l));
    };
    const p = Df(e, t, a);
    return Di && (u ? u.push(p) : c && p()), p;
  }
  function Od(e, t, n) {
    const i = this.proxy, r = be(e) ? e.includes(".") ? jl(i, e) : () => i[e] : e.bind(i, i);
    let o;
    Y(t) ? o = t : (o = t.handler, n = t);
    const s = $i(this), a = Jr(r, o.bind(i), n);
    return s(), a;
  }
  function jl(e, t) {
    const n = t.split(".");
    return () => {
      let i = e;
      for (let r = 0; r < n.length && i; r++) i = i[n[r]];
      return i;
    };
  }
  wb = function(e, t, n = ie) {
    const i = cn(), r = tt(t), o = Bt(t), s = Wl(e, r), a = Pf((c, u) => {
      let l, d = ie, p;
      return Td(() => {
        const g = e[r];
        Je(l, g) && (l = g, u());
      }), {
        get() {
          return c(), n.get ? n.get(l) : l;
        },
        set(g) {
          const b = n.set ? n.set(g) : g;
          if (!Je(b, l) && !(d !== ie && Je(g, d))) return;
          const w = i.vnode.props;
          w && (t in w || r in w || o in w) && (`onUpdate:${t}` in w || `onUpdate:${r}` in w || `onUpdate:${o}` in w) || (l = g, u()), i.emit(`update:${t}`, b), Je(g, b) && Je(g, d) && !Je(b, p) && u(), d = g, p = b;
        }
      };
    });
    return a[Symbol.iterator] = () => {
      let c = 0;
      return {
        next() {
          return c < 2 ? {
            value: c++ ? s || ie : a,
            done: false
          } : {
            done: true
          };
        }
      };
    }, a;
  };
  const Wl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${tt(t)}Modifiers`] || e[`${Bt(t)}Modifiers`];
  function Ad(e, t, ...n) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || ie;
    let r = n;
    const o = t.startsWith("update:"), s = o && Wl(i, t.slice(7));
    s && (s.trim && (r = n.map((l) => be(l) ? l.trim() : l)), s.number && (r = n.map(Ku)));
    let a, c = i[a = ao(t)] || i[a = ao(tt(t))];
    !c && o && (c = i[a = ao(Bt(t))]), c && pt(c, e, 6, r);
    const u = i[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, pt(u, e, 6, r);
    }
  }
  const Sd = /* @__PURE__ */ new WeakMap();
  function Bl(e, t, n = false) {
    const i = n ? Sd : t.emitsCache, r = i.get(e);
    if (r !== void 0) return r;
    const o = e.emits;
    let s = {}, a = false;
    if (!Y(e)) {
      const c = (u) => {
        const l = Bl(u, t, true);
        l && (a = true, Ae(s, l));
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !o && !a ? (ce(e) && i.set(e, null), null) : (z(o) ? o.forEach((c) => s[c] = null) : Ae(s, o), ce(e) && i.set(e, s), s);
  }
  function Xr(e, t) {
    return !e || !Hr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, Bt(t)) || re(e, t));
  }
  function ca(e) {
    const { type: t, vnode: n, proxy: i, withProxy: r, propsOptions: [o], slots: s, attrs: a, emit: c, render: u, renderCache: l, props: d, data: p, setupState: g, ctx: b, inheritAttrs: w } = e, P = vr(e);
    let E, I;
    try {
      if (n.shapeFlag & 4) {
        const T = r || i, G = T;
        E = Ot(u.call(G, T, l, d, g, p, b)), I = a;
      } else {
        const T = t;
        E = Ot(T.length > 1 ? T(d, {
          attrs: a,
          slots: s,
          emit: c
        }) : T(d, null)), I = t.props ? a : Rd(a);
      }
    } catch (T) {
      Ri.length = 0, Yr(T, e, 1), E = Ge(Ce);
    }
    let M = E;
    if (I && w !== false) {
      const T = Object.keys(I), { shapeFlag: G } = M;
      T.length && G & 7 && (o && T.some(hs) && (I = Pd(I, o)), M = Gt(M, I, false, true));
    }
    return n.dirs && (M = Gt(M, null, false, true), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && sn(M, n.transition), E = M, vr(P), E;
  }
  const Rd = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Hr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Pd = (e, t) => {
    const n = {};
    for (const i in e) (!hs(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
  function Nd(e, t, n) {
    const { props: i, children: r, component: o } = e, { props: s, children: a, patchFlag: c } = t, u = o.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && c >= 0) {
      if (c & 1024) return true;
      if (c & 16) return i ? la(i, s, u) : !!s;
      if (c & 8) {
        const l = t.dynamicProps;
        for (let d = 0; d < l.length; d++) {
          const p = l[d];
          if (s[p] !== i[p] && !Xr(u, p)) return true;
        }
      }
    } else return (r || a) && (!a || !a.$stable) ? true : i === s ? false : i ? s ? la(i, s, u) : true : !!s;
    return false;
  }
  function la(e, t, n) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      if (t[o] !== e[o] && !Xr(n, o)) return true;
    }
    return false;
  }
  function Ld({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Or = (e) => e.__isSuspense;
  function Cd(e, t) {
    t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : fl(e);
  }
  let Si, Ri;
  Ue = Symbol.for("v-fgt");
  Zr = Symbol.for("v-txt");
  Ce = Symbol.for("v-cmt");
  Si = Symbol.for("v-stc");
  Ri = [];
  let et = null;
  lt = function(e = false) {
    Ri.push(et = e ? null : []);
  };
  function xd() {
    Ri.pop(), et = Ri[Ri.length - 1] || null;
  }
  let ki = 1;
  function Ar(e, t = false) {
    ki += e, e < 0 && et && t && (et.hasOnce = true);
  }
  function $l(e) {
    return e.dynamicChildren = ki > 0 ? et || Gn : null, xd(), ki > 0 && et && et.push(e), e;
  }
  Vt = function(e, t, n, i, r, o) {
    return $l(we(e, t, n, i, r, o, true));
  };
  qo = function(e, t, n, i, r) {
    return $l(Ge(e, t, n, i, r, true));
  };
  Vn = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function Qt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const zl = ({ key: e }) => e ?? null, cr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || Ie(e) || Y(e) ? {
    i: xe,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  we = function(e, t = null, n = null, i = 0, r = null, o = e === Ue ? 0 : 1, s = false, a = false) {
    const c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && zl(t),
      ref: t && cr(t),
      scopeId: pl,
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
      shapeFlag: o,
      patchFlag: i,
      dynamicProps: r,
      dynamicChildren: null,
      appContext: null,
      ctx: xe
    };
    return a ? (Cs(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= be(n) ? 8 : 16), ki > 0 && !s && et && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && et.push(c), c;
  };
  Ge = Md;
  function Md(e, t = null, n = null, i = 0, r = null, o = false) {
    if ((!e || e === Sl) && (e = Ce), Vn(e)) {
      const a = Gt(e, t, true);
      return n && Cs(a, n), ki > 0 && !o && et && (a.shapeFlag & 6 ? et[et.indexOf(e)] = a : et.push(a)), a.patchFlag = -2, a;
    }
    if (zd(e) && (e = e.__vccOpts), t) {
      t = kd(t);
      let { class: a, style: c } = t;
      a && !be(a) && (t.class = ms(a)), ce(c) && (Is(c) && !z(c) && (c = Ae({}, c)), t.style = Br(c));
    }
    const s = be(e) ? 1 : Or(e) ? 128 : ml(e) ? 64 : ce(e) ? 4 : Y(e) ? 2 : 0;
    return we(e, t, n, i, r, s, o, true);
  }
  function kd(e) {
    return e ? Is(e) || Ml(e) ? Ae({}, e) : e : null;
  }
  Gt = function(e, t, n = false, i = false) {
    const { props: r, ref: o, patchFlag: s, children: a, transition: c } = e, u = t ? Fd(r || {}, t) : r, l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && zl(u),
      ref: t && t.ref ? n && o ? z(o) ? o.concat(cr(t)) : [
        o,
        cr(t)
      ] : cr(t) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ue ? s === -1 ? 16 : s | 16 : s,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Gt(e.ssContent),
      ssFallback: e.ssFallback && Gt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return c && i && sn(l, c.clone(l)), l;
  };
  Dd = function(e = " ", t = 0) {
    return Ge(Zr, null, e, t);
  };
  yb = function(e, t) {
    const n = Ge(Si, null, e);
    return n.staticCount = t, n;
  };
  wo = function(e = "", t = false) {
    return t ? (lt(), qo(Ce, null, e)) : Ge(Ce, null, e);
  };
  function Ot(e) {
    return e == null || typeof e == "boolean" ? Ge(Ce) : z(e) ? Ge(Ue, null, e.slice()) : Vn(e) ? Zt(e) : Ge(Zr, null, String(e));
  }
  function Zt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gt(e);
  }
  function Cs(e, t) {
    let n = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (z(t)) n = 16;
    else if (typeof t == "object") if (i & 65) {
      const r = t.default;
      r && (r._c && (r._d = false), Cs(e, r()), r._c && (r._d = true));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ml(t) ? t._ctx = xe : r === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Y(t) ? (t = {
      default: t,
      _ctx: xe
    }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
      Dd(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Fd = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      for (const r in i) if (r === "class") t.class !== i.class && (t.class = ms([
        t.class,
        i.class
      ]));
      else if (r === "style") t.style = Br([
        t.style,
        i.style
      ]);
      else if (Hr(r)) {
        const o = t[r], s = i[r];
        s && o !== s && !(z(o) && o.includes(s)) && (t[r] = o ? [].concat(o, s) : s);
      } else r !== "" && (t[r] = i[r]);
    }
    return t;
  };
  function it(e, t, n, i = null) {
    pt(e, t, 7, [
      n,
      i
    ]);
  }
  const Ud = Ll();
  let Hd = 0;
  function Gd(e, t, n) {
    const i = e.type, r = (t ? t.appContext : e.appContext) || Ud, o = {
      uid: Hd++,
      vnode: e,
      type: i,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new jc(true),
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
      propsOptions: Dl(i, r),
      emitsOptions: Bl(i, r),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: i.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
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
    return o.ctx = {
      _: o
    }, o.root = t ? t.root : o, o.emit = Ad.bind(null, o), e.ce && e.ce(o), o;
  }
  let He = null;
  cn = () => He || xe;
  let Sr, Jo;
  {
    const e = Wr(), t = (n, i) => {
      let r;
      return (r = e[n]) || (r = e[n] = []), r.push(i), (o) => {
        r.length > 1 ? r.forEach((s) => s(o)) : r[0](o);
      };
    };
    Sr = t("__VUE_INSTANCE_SETTERS__", (n) => He = n), Jo = t("__VUE_SSR_SETTERS__", (n) => Di = n);
  }
  const $i = (e) => {
    const t = He;
    return Sr(e), e.scope.on(), () => {
      e.scope.off(), Sr(t);
    };
  }, ua = () => {
    He && He.scope.off(), Sr(null);
  };
  function Vl(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Di = false;
  function jd(e, t = false, n = false) {
    t && Jo(t);
    const { props: i, children: r } = e.vnode, o = Vl(e);
    dd(e, i, o, t), md(e, r, n || t);
    const s = o ? Wd(e, t) : void 0;
    return t && Jo(false), s;
  }
  function Wd(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, nd);
    const { setup: i } = n;
    if (i) {
      Ut();
      const r = e.setupContext = i.length > 1 ? $d(e) : null, o = $i(e), s = Wi(i, e, 0, [
        e.props,
        r
      ]), a = Mc(s);
      if (Ht(), o(), (a || e.sp) && !On(e) && Tl(e), a) {
        if (s.then(ua, ua), t) return s.then((c) => {
          fa(e, c);
        }).catch((c) => {
          Yr(c, e, 0);
        });
        e.asyncDep = s;
      } else fa(e, s);
    } else Yl(e);
  }
  function fa(e, t, n) {
    Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = sl(t)), Yl(e);
  }
  function Yl(e, t, n) {
    const i = e.type;
    e.render || (e.render = i.render || dt);
    {
      const r = $i(e);
      Ut();
      try {
        id(e);
      } finally {
        Ht(), r();
      }
    }
  }
  const Bd = {
    get(e, t) {
      return Fe(e, "get", ""), e[t];
    }
  };
  function $d(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Bd),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Qr(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sl(_s(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Oi) return Oi[n](e);
      },
      has(t, n) {
        return n in t || n in Oi;
      }
    })) : e.proxy;
  }
  function Xo(e, t = true) {
    return Y(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function zd(e) {
    return Y(e) && "__vccOpts" in e;
  }
  xs = (e, t) => Mf(e, t, Di);
  Vd = function(e, t, n) {
    try {
      Ar(-1);
      const i = arguments.length;
      return i === 2 ? ce(t) && !z(t) ? Vn(t) ? Ge(e, null, [
        t
      ]) : Ge(e, t) : Ge(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Vn(n) && (n = [
        n
      ]), Ge(e, t, n));
    } finally {
      Ar(1);
    }
  };
  const Yd = "3.5.24";
  let Zo;
  const da = typeof window < "u" && window.trustedTypes;
  if (da) try {
    Zo = da.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Kl, Kd, qd, Lt, ha, Jd, Yt, ii, Yn, ql, Jl, Xd, gn, pa;
  Kl = Zo ? (e) => Zo.createHTML(e) : (e) => e;
  Kd = "http://www.w3.org/2000/svg";
  qd = "http://www.w3.org/1998/Math/MathML";
  Lt = typeof document < "u" ? document : null;
  ha = Lt && Lt.createElement("template");
  Jd = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const r = t === "svg" ? Lt.createElementNS(Kd, e) : t === "mathml" ? Lt.createElementNS(qd, e) : n ? Lt.createElement(e, {
        is: n
      }) : Lt.createElement(e);
      return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
    },
    createText: (e) => Lt.createTextNode(e),
    createComment: (e) => Lt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Lt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, r, o) {
      const s = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === o || !(r = r.nextSibling)); ) ;
      else {
        ha.innerHTML = Kl(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const a = ha.content;
        if (i === "svg" || i === "mathml") {
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
  Yt = "transition";
  ii = "animation";
  Yn = Symbol("_vtc");
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
  Jl = Ae({}, vl, ql);
  Xd = (e) => (e.displayName = "Transition", e.props = Jl, e);
  bb = Xd((e, { slots: t }) => Vd(Wf, Xl(e), t));
  gn = (e, t = []) => {
    z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  pa = (e) => e ? z(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Xl(e) {
    const t = {};
    for (const j in e) j in ql || (t[j] = e[j]);
    if (e.css === false) return t;
    const { name: n = "v", type: i, duration: r, enterFromClass: o = `${n}-enter-from`, enterActiveClass: s = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: c = o, appearActiveClass: u = s, appearToClass: l = a, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: g = `${n}-leave-to` } = e, b = Zd(r), w = b && b[0], P = b && b[1], { onBeforeEnter: E, onEnter: I, onEnterCancelled: M, onLeave: T, onLeaveCancelled: G, onBeforeAppear: X = E, onAppear: Z = I, onAppearCancelled: W = M } = t, D = (j, se, Pe, at) => {
      j._enterCancelled = at, qt(j, se ? l : a), qt(j, se ? u : s), Pe && Pe();
    }, B = (j, se) => {
      j._isLeaving = false, qt(j, d), qt(j, g), qt(j, p), se && se();
    }, Q = (j) => (se, Pe) => {
      const at = j ? Z : I, me = () => D(se, j, Pe);
      gn(at, [
        se,
        me
      ]), ga(() => {
        qt(se, j ? c : o), vt(se, j ? l : a), pa(at) || ma(se, i, w, me);
      });
    };
    return Ae(t, {
      onBeforeEnter(j) {
        gn(E, [
          j
        ]), vt(j, o), vt(j, s);
      },
      onBeforeAppear(j) {
        gn(X, [
          j
        ]), vt(j, c), vt(j, u);
      },
      onEnter: Q(false),
      onAppear: Q(true),
      onLeave(j, se) {
        j._isLeaving = true;
        const Pe = () => B(j, se);
        vt(j, d), j._enterCancelled ? (vt(j, p), Qo(j)) : (Qo(j), vt(j, p)), ga(() => {
          j._isLeaving && (qt(j, d), vt(j, g), pa(T) || ma(j, i, P, Pe));
        }), gn(T, [
          j,
          Pe
        ]);
      },
      onEnterCancelled(j) {
        D(j, false, void 0, true), gn(M, [
          j
        ]);
      },
      onAppearCancelled(j) {
        D(j, true, void 0, true), gn(W, [
          j
        ]);
      },
      onLeaveCancelled(j) {
        B(j), gn(G, [
          j
        ]);
      }
    });
  }
  function Zd(e) {
    if (e == null) return null;
    if (ce(e)) return [
      yo(e.enter),
      yo(e.leave)
    ];
    {
      const t = yo(e);
      return [
        t,
        t
      ];
    }
  }
  function yo(e) {
    return qu(e);
  }
  function vt(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yn] || (e[Yn] = /* @__PURE__ */ new Set())).add(t);
  }
  function qt(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const n = e[Yn];
    n && (n.delete(t), n.size || (e[Yn] = void 0));
  }
  function ga(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Qd = 0;
  function ma(e, t, n, i) {
    const r = e._endId = ++Qd, o = () => {
      r === e._endId && i();
    };
    if (n != null) return setTimeout(o, n);
    const { type: s, timeout: a, propCount: c } = Zl(e, t);
    if (!s) return i();
    const u = s + "end";
    let l = 0;
    const d = () => {
      e.removeEventListener(u, p), o();
    }, p = (g) => {
      g.target === e && ++l >= c && d();
    };
    setTimeout(() => {
      l < c && d();
    }, a + 1), e.addEventListener(u, p);
  }
  function Zl(e, t) {
    const n = window.getComputedStyle(e), i = (b) => (n[b] || "").split(", "), r = i(`${Yt}Delay`), o = i(`${Yt}Duration`), s = wa(r, o), a = i(`${ii}Delay`), c = i(`${ii}Duration`), u = wa(a, c);
    let l = null, d = 0, p = 0;
    t === Yt ? s > 0 && (l = Yt, d = s, p = o.length) : t === ii ? u > 0 && (l = ii, d = u, p = c.length) : (d = Math.max(s, u), l = d > 0 ? s > u ? Yt : ii : null, p = l ? l === Yt ? o.length : c.length : 0);
    const g = l === Yt && /\b(?:transform|all)(?:,|$)/.test(i(`${Yt}Property`).toString());
    return {
      type: l,
      timeout: d,
      propCount: p,
      hasTransform: g
    };
  }
  function wa(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, i) => ya(n) + ya(e[i])));
  }
  function ya(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Qo(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function eh(e, t, n) {
    const i = e[Yn];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let Rr, Ql;
  Rr = Symbol("_vod");
  Ql = Symbol("_vsh");
  vb = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[Rr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ri(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n && (i ? t ? (i.beforeEnter(e), ri(e, true), i.enter(e)) : i.leave(e, () => {
        ri(e, false);
      }) : ri(e, t));
    },
    beforeUnmount(e, { value: t }) {
      ri(e, t);
    }
  };
  function ri(e, t) {
    e.style.display = t ? e[Rr] : "none", e[Ql] = !t;
  }
  const eu = Symbol("");
  Eb = function(e) {
    const t = cn();
    if (!t) return;
    const n = t.ut = (r = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((o) => Pr(o, r));
    }, i = () => {
      const r = e(t.proxy);
      t.ce ? Pr(t.ce, r) : es(t.subTree, r), n(r);
    };
    Al(() => {
      fl(i);
    }), Bi(() => {
      Bn(i, dt, {
        flush: "post"
      });
      const r = new MutationObserver(i);
      r.observe(t.subTree.el.parentNode, {
        childList: true
      }), Rs(() => r.disconnect());
    });
  };
  function es(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        es(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Pr(e.el, t);
    else if (e.type === Ue) e.children.forEach((n) => es(n, t));
    else if (e.type === Si) {
      let { el: n, anchor: i } = e;
      for (; n && (Pr(n, t), n !== i); ) n = n.nextSibling;
    }
  }
  function Pr(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let i = "";
      for (const r in t) {
        const o = nf(t[r]);
        n.setProperty(`--${r}`, o), i += `--${r}: ${o};`;
      }
      n[eu] = i;
    }
  }
  const th = /(?:^|;)\s*display\s*:/;
  function nh(e, t, n) {
    const i = e.style, r = be(n);
    let o = false;
    if (n && !r) {
      if (t) if (be(t)) for (const s of t.split(";")) {
        const a = s.slice(0, s.indexOf(":")).trim();
        n[a] == null && lr(i, a, "");
      }
      else for (const s in t) n[s] == null && lr(i, s, "");
      for (const s in n) s === "display" && (o = true), lr(i, s, n[s]);
    } else if (r) {
      if (t !== n) {
        const s = i[eu];
        s && (n += ";" + s), i.cssText = n, o = th.test(n);
      }
    } else t && e.removeAttribute("style");
    Rr in e && (e[Rr] = o ? i.display : "", e[Ql] && (i.display = "none"));
  }
  const ba = /\s*!important$/;
  function lr(e, t, n) {
    if (z(n)) n.forEach((i) => lr(e, t, i));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const i = ih(e, t);
      ba.test(n) ? e.setProperty(Bt(i), n.replace(ba, ""), "important") : e[i] = n;
    }
  }
  const va = [
    "Webkit",
    "Moz",
    "ms"
  ], bo = {};
  function ih(e, t) {
    const n = bo[t];
    if (n) return n;
    let i = tt(t);
    if (i !== "filter" && i in e) return bo[t] = i;
    i = jr(i);
    for (let r = 0; r < va.length; r++) {
      const o = va[r] + i;
      if (o in e) return bo[t] = o;
    }
    return t;
  }
  const Ea = "http://www.w3.org/1999/xlink";
  function Ia(e, t, n, i, r, o = tf(t)) {
    i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ea, t.slice(6, t.length)) : e.setAttributeNS(Ea, t, n) : n == null || o && !Uc(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Wt(n) ? String(n) : n);
  }
  function _a(e, t, n, i, r) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? Kl(n) : n);
      return;
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
      const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let s = false;
    if (n === "" || n == null) {
      const a = typeof e[t];
      a === "boolean" ? n = Uc(n) : n == null && a === "string" ? (n = "", s = true) : a === "number" && (n = 0, s = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    s && e.removeAttribute(r || t);
  }
  function rh(e, t, n, i) {
    e.addEventListener(t, n, i);
  }
  function oh(e, t, n, i) {
    e.removeEventListener(t, n, i);
  }
  const Ta = Symbol("_vei");
  function sh(e, t, n, i, r = null) {
    const o = e[Ta] || (e[Ta] = {}), s = o[t];
    if (i && s) s.value = i;
    else {
      const [a, c] = ah(t);
      if (i) {
        const u = o[t] = uh(i, r);
        rh(e, a, u, c);
      } else s && (oh(e, a, s, c), o[t] = void 0);
    }
  }
  const Oa = /(?:Once|Passive|Capture)$/;
  function ah(e) {
    let t;
    if (Oa.test(e)) {
      t = {};
      let i;
      for (; i = e.match(Oa); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Bt(e.slice(2)),
      t
    ];
  }
  let vo = 0;
  const ch = Promise.resolve(), lh = () => vo || (ch.then(() => vo = 0), vo = Date.now());
  function uh(e, t) {
    const n = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= n.attached) return;
      pt(fh(i, n.value), t, 5, [
        i
      ]);
    };
    return n.value = e, n.attached = lh(), n;
  }
  function fh(e, t) {
    if (z(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((i) => (r) => !r._stopped && i && i(r));
    } else return t;
  }
  const Aa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dh = (e, t, n, i, r, o) => {
    const s = r === "svg";
    t === "class" ? eh(e, i, s) : t === "style" ? nh(e, n, i) : Hr(t) ? hs(t) || sh(e, t, n, i, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : hh(e, t, i, s)) ? (_a(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ia(e, t, i, s, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !be(i)) ? _a(e, tt(t), i, o, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Ia(e, t, i, s));
  };
  function hh(e, t, n, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && Aa(t) && Y(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const r = e.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return Aa(t) && be(n) ? false : t in e;
  }
  let tu, nu, Nr, Sa, ph, gh;
  tu = /* @__PURE__ */ new WeakMap();
  nu = /* @__PURE__ */ new WeakMap();
  Nr = Symbol("_moveCb");
  Sa = Symbol("_enterCb");
  ph = (e) => (delete e.props.mode, e);
  gh = ph({
    name: "TransitionGroup",
    props: Ae({}, Jl, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = cn(), i = bl();
      let r, o;
      return As(() => {
        if (!r.length) return;
        const s = e.moveClass || `${e.name || "v"}-move`;
        if (!bh(r[0].el, n.vnode.el, s)) {
          r = [];
          return;
        }
        r.forEach(mh), r.forEach(wh);
        const a = r.filter(yh);
        Qo(n.vnode.el), a.forEach((c) => {
          const u = c.el, l = u.style;
          vt(u, s), l.transform = l.webkitTransform = l.transitionDuration = "";
          const d = u[Nr] = (p) => {
            p && p.target !== u || (!p || p.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", d), u[Nr] = null, qt(u, s));
          };
          u.addEventListener("transitionend", d);
        }), r = [];
      }), () => {
        const s = ne(e), a = Xl(s);
        let c = s.tag || Ue;
        if (r = [], o) for (let u = 0; u < o.length; u++) {
          const l = o[u];
          l.el && l.el instanceof Element && (r.push(l), sn(l, Mi(l, a, i, n)), tu.set(l, {
            left: l.el.offsetLeft,
            top: l.el.offsetTop
          }));
        }
        o = t.default ? Os(t.default()) : [];
        for (let u = 0; u < o.length; u++) {
          const l = o[u];
          l.key != null && sn(l, Mi(l, a, i, n));
        }
        return Ge(c, null, o);
      };
    }
  });
  Ib = gh;
  function mh(e) {
    const t = e.el;
    t[Nr] && t[Nr](), t[Sa] && t[Sa]();
  }
  function wh(e) {
    nu.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function yh(e) {
    const t = tu.get(e), n = nu.get(e), i = t.left - n.left, r = t.top - n.top;
    if (i || r) {
      const o = e.el.style;
      return o.transform = o.webkitTransform = `translate(${i}px,${r}px)`, o.transitionDuration = "0s", e;
    }
  }
  function bh(e, t, n) {
    const i = e.cloneNode(), r = e[Yn];
    r && r.forEach((a) => {
      a.split(/\s+/).forEach((c) => c && i.classList.remove(c));
    }), n.split(/\s+/).forEach((a) => a && i.classList.add(a)), i.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(i);
    const { hasTransform: s } = Zl(i);
    return o.removeChild(i), s;
  }
  let vh, Eh, Ih, _h;
  vh = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Eh = {
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
  _b = (e, t) => {
    const n = e._withMods || (e._withMods = {}), i = t.join(".");
    return n[i] || (n[i] = ((r, ...o) => {
      for (let s = 0; s < t.length; s++) {
        const a = Eh[t[s]];
        if (a && a(r, t)) return;
      }
      return e(r, ...o);
    }));
  };
  Ih = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  Tb = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return n[i] || (n[i] = ((r) => {
      if (!("key" in r)) return;
      const o = Bt(r.key);
      if (t.some((s) => s === o || Ih[s] === o)) return e(r);
    }));
  };
  _h = Ae({
    patchProp: dh
  }, Jd);
  let Ra;
  function Th() {
    return Ra || (Ra = yd(_h));
  }
  const iu = ((...e) => {
    const t = Th().createApp(...e), { mount: n } = t;
    return t.mount = (i) => {
      const r = Ah(i);
      if (!r) return;
      const o = t._component;
      !Y(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const s = n(r, false, Oh(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
    }, t;
  });
  function Oh(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Ah(e) {
    return be(e) ? document.querySelector(e) : e;
  }
  const Sh = "" + new URL("../favicon.svg", import.meta.url).href;
  let ru, Rh, ou, Ph, Nh, oi;
  ru = typeof global == "object" && global && global.Object === Object && global;
  Rh = typeof self == "object" && self && self.Object === Object && self;
  Pt = ru || Rh || Function("return this")();
  an = Pt.Symbol;
  ou = Object.prototype;
  Ph = ou.hasOwnProperty;
  Nh = ou.toString;
  oi = an ? an.toStringTag : void 0;
  function Lh(e) {
    var t = Ph.call(e, oi), n = e[oi];
    try {
      e[oi] = void 0;
      var i = true;
    } catch {
    }
    var r = Nh.call(e);
    return i && (t ? e[oi] = n : delete e[oi]), r;
  }
  var Ch = Object.prototype, xh = Ch.toString;
  function Mh(e) {
    return xh.call(e);
  }
  var kh = "[object Null]", Dh = "[object Undefined]", Pa = an ? an.toStringTag : void 0;
  ln = function(e) {
    return e == null ? e === void 0 ? Dh : kh : Pa && Pa in Object(e) ? Lh(e) : Mh(e);
  };
  Rt = function(e) {
    return e != null && typeof e == "object";
  };
  Kn = Array.isArray;
  eo = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Fh = "[object AsyncFunction]", Uh = "[object Function]", Hh = "[object GeneratorFunction]", Gh = "[object Proxy]";
  su = function(e) {
    if (!eo(e)) return false;
    var t = ln(e);
    return t == Uh || t == Hh || t == Fh || t == Gh;
  };
  var Eo = Pt["__core-js_shared__"], Na = (function() {
    var e = /[^.]+$/.exec(Eo && Eo.keys && Eo.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function jh(e) {
    return !!Na && Na in e;
  }
  var Wh = Function.prototype, Bh = Wh.toString;
  function Rn(e) {
    if (e != null) {
      try {
        return Bh.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var $h = /[\\^$.*+?()[\]{}|]/g, zh = /^\[object .+?Constructor\]$/, Vh = Function.prototype, Yh = Object.prototype, Kh = Vh.toString, qh = Yh.hasOwnProperty, Jh = RegExp("^" + Kh.call(qh).replace($h, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Xh(e) {
    if (!eo(e) || jh(e)) return false;
    var t = su(e) ? Jh : zh;
    return t.test(Rn(e));
  }
  function Zh(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Pn(e, t) {
    var n = Zh(e, t);
    return Xh(n) ? n : void 0;
  }
  let ts, La, Qh;
  ts = Pn(Pt, "WeakMap");
  La = Object.create;
  Qh = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!eo(t)) return {};
      if (La) return La(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  Ca = (function() {
    try {
      var e = Pn(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function ep(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var tp = 9007199254740991, np = /^(?:0|[1-9]\d*)$/;
  ip = function(e, t) {
    var n = typeof e;
    return t = t ?? tp, !!t && (n == "number" || n != "symbol" && np.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  rp = function(e, t, n) {
    t == "__proto__" && Ca ? Ca(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  Ms = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var op = Object.prototype, sp = op.hasOwnProperty;
  ap = function(e, t, n) {
    var i = e[t];
    (!(sp.call(e, t) && Ms(i, n)) || n === void 0 && !(t in e)) && rp(e, t, n);
  };
  var cp = 9007199254740991;
  au = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cp;
  };
  lp = function(e) {
    return e != null && au(e.length) && !su(e);
  };
  var up = Object.prototype;
  cu = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || up;
    return e === n;
  };
  function fp(e, t) {
    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
    return i;
  }
  var dp = "[object Arguments]";
  function xa(e) {
    return Rt(e) && ln(e) == dp;
  }
  let lu, hp, pp;
  lu = Object.prototype;
  hp = lu.hasOwnProperty;
  pp = lu.propertyIsEnumerable;
  gp = xa(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? xa : function(e) {
    return Rt(e) && hp.call(e, "callee") && !pp.call(e, "callee");
  };
  function mp() {
    return false;
  }
  let uu, Ma, wp, ka, yp, bp, vp, Ep, Ip, _p, Tp, Op, Ap, Sp, Rp, Pp, Np, Lp, Cp, xp, Mp, kp, Dp, Fp, Up, Hp, Gp, jp, Wp, pe;
  uu = typeof exports == "object" && exports && !exports.nodeType && exports;
  Ma = uu && typeof module == "object" && module && !module.nodeType && module;
  wp = Ma && Ma.exports === uu;
  ka = wp ? Pt.Buffer : void 0;
  yp = ka ? ka.isBuffer : void 0;
  Lr = yp || mp;
  bp = "[object Arguments]";
  vp = "[object Array]";
  Ep = "[object Boolean]";
  Ip = "[object Date]";
  _p = "[object Error]";
  Tp = "[object Function]";
  Op = "[object Map]";
  Ap = "[object Number]";
  Sp = "[object Object]";
  Rp = "[object RegExp]";
  Pp = "[object Set]";
  Np = "[object String]";
  Lp = "[object WeakMap]";
  Cp = "[object ArrayBuffer]";
  xp = "[object DataView]";
  Mp = "[object Float32Array]";
  kp = "[object Float64Array]";
  Dp = "[object Int8Array]";
  Fp = "[object Int16Array]";
  Up = "[object Int32Array]";
  Hp = "[object Uint8Array]";
  Gp = "[object Uint8ClampedArray]";
  jp = "[object Uint16Array]";
  Wp = "[object Uint32Array]";
  pe = {};
  pe[Mp] = pe[kp] = pe[Dp] = pe[Fp] = pe[Up] = pe[Hp] = pe[Gp] = pe[jp] = pe[Wp] = true;
  pe[bp] = pe[vp] = pe[Cp] = pe[Ep] = pe[xp] = pe[Ip] = pe[_p] = pe[Tp] = pe[Op] = pe[Ap] = pe[Sp] = pe[Rp] = pe[Pp] = pe[Np] = pe[Lp] = false;
  function Bp(e) {
    return Rt(e) && au(e.length) && !!pe[ln(e)];
  }
  function ks(e) {
    return function(t) {
      return e(t);
    };
  }
  let fu, Pi, $p, Io, qn, Da, zp, Vp;
  fu = typeof exports == "object" && exports && !exports.nodeType && exports;
  Pi = fu && typeof module == "object" && module && !module.nodeType && module;
  $p = Pi && Pi.exports === fu;
  Io = $p && ru.process;
  qn = (function() {
    try {
      var e = Pi && Pi.require && Pi.require("util").types;
      return e || Io && Io.binding && Io.binding("util");
    } catch {
    }
  })();
  Da = qn && qn.isTypedArray;
  du = Da ? ks(Da) : Bp;
  zp = Object.prototype;
  Vp = zp.hasOwnProperty;
  Yp = function(e, t) {
    var n = Kn(e), i = !n && gp(e), r = !n && !i && Lr(e), o = !n && !i && !r && du(e), s = n || i || r || o, a = s ? fp(e.length, String) : [], c = a.length;
    for (var u in e) (t || Vp.call(e, u)) && !(s && (u == "length" || r && (u == "offset" || u == "parent") || o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || ip(u, c))) && a.push(u);
    return a;
  };
  function hu(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Kp = hu(Object.keys, Object), qp = Object.prototype, Jp = qp.hasOwnProperty;
  function Xp(e) {
    if (!cu(e)) return Kp(e);
    var t = [];
    for (var n in Object(e)) Jp.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  Zp = function(e) {
    return lp(e) ? Yp(e) : Xp(e);
  };
  var Fi = Pn(Object, "create");
  function Qp() {
    this.__data__ = Fi ? Fi(null) : {}, this.size = 0;
  }
  function eg(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var tg = "__lodash_hash_undefined__", ng = Object.prototype, ig = ng.hasOwnProperty;
  function rg(e) {
    var t = this.__data__;
    if (Fi) {
      var n = t[e];
      return n === tg ? void 0 : n;
    }
    return ig.call(t, e) ? t[e] : void 0;
  }
  var og = Object.prototype, sg = og.hasOwnProperty;
  function ag(e) {
    var t = this.__data__;
    return Fi ? t[e] !== void 0 : sg.call(t, e);
  }
  var cg = "__lodash_hash_undefined__";
  function lg(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Fi && t === void 0 ? cg : t, this;
  }
  function Sn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Sn.prototype.clear = Qp;
  Sn.prototype.delete = eg;
  Sn.prototype.get = rg;
  Sn.prototype.has = ag;
  Sn.prototype.set = lg;
  function ug() {
    this.__data__ = [], this.size = 0;
  }
  function to(e, t) {
    for (var n = e.length; n--; ) if (Ms(e[n][0], t)) return n;
    return -1;
  }
  var fg = Array.prototype, dg = fg.splice;
  function hg(e) {
    var t = this.__data__, n = to(t, e);
    if (n < 0) return false;
    var i = t.length - 1;
    return n == i ? t.pop() : dg.call(t, n, 1), --this.size, true;
  }
  function pg(e) {
    var t = this.__data__, n = to(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function gg(e) {
    return to(this.__data__, e) > -1;
  }
  function mg(e, t) {
    var n = this.__data__, i = to(n, e);
    return i < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[i][1] = t, this;
  }
  function zt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  zt.prototype.clear = ug;
  zt.prototype.delete = hg;
  zt.prototype.get = pg;
  zt.prototype.has = gg;
  zt.prototype.set = mg;
  var Ui = Pn(Pt, "Map");
  function wg() {
    this.size = 0, this.__data__ = {
      hash: new Sn(),
      map: new (Ui || zt)(),
      string: new Sn()
    };
  }
  function yg(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function no(e, t) {
    var n = e.__data__;
    return yg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function bg(e) {
    var t = no(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function vg(e) {
    return no(this, e).get(e);
  }
  function Eg(e) {
    return no(this, e).has(e);
  }
  function Ig(e, t) {
    var n = no(this, e), i = n.size;
    return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
  }
  Nn = function(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  };
  Nn.prototype.clear = wg;
  Nn.prototype.delete = bg;
  Nn.prototype.get = vg;
  Nn.prototype.has = Eg;
  Nn.prototype.set = Ig;
  function _g(e, t) {
    for (var n = -1, i = t.length, r = e.length; ++n < i; ) e[r + n] = t[n];
    return e;
  }
  var pu = hu(Object.getPrototypeOf, Object), Tg = "[object Object]", Og = Function.prototype, Ag = Object.prototype, gu = Og.toString, Sg = Ag.hasOwnProperty, Rg = gu.call(Object);
  Pg = function(e) {
    if (!Rt(e) || ln(e) != Tg) return false;
    var t = pu(e);
    if (t === null) return true;
    var n = Sg.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && gu.call(n) == Rg;
  };
  var Ng = "[object DOMException]", Lg = "[object Error]";
  function Cg(e) {
    if (!Rt(e)) return false;
    var t = ln(e);
    return t == Lg || t == Ng || typeof e.message == "string" && typeof e.name == "string" && !Pg(e);
  }
  function xg() {
    this.__data__ = new zt(), this.size = 0;
  }
  function Mg(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function kg(e) {
    return this.__data__.get(e);
  }
  function Dg(e) {
    return this.__data__.has(e);
  }
  var Fg = 200;
  function Ug(e, t) {
    var n = this.__data__;
    if (n instanceof zt) {
      var i = n.__data__;
      if (!Ui || i.length < Fg - 1) return i.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new Nn(i);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  Ft = function(e) {
    var t = this.__data__ = new zt(e);
    this.size = t.size;
  };
  Ft.prototype.clear = xg;
  Ft.prototype.delete = Mg;
  Ft.prototype.get = kg;
  Ft.prototype.has = Dg;
  Ft.prototype.set = Ug;
  var mu = typeof exports == "object" && exports && !exports.nodeType && exports, Fa = mu && typeof module == "object" && module && !module.nodeType && module, Hg = Fa && Fa.exports === mu, Ua = Hg ? Pt.Buffer : void 0, Ha = Ua ? Ua.allocUnsafe : void 0;
  Gg = function(e, t) {
    if (t) return e.slice();
    var n = e.length, i = Ha ? Ha(n) : new e.constructor(n);
    return e.copy(i), i;
  };
  function jg(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length, r = 0, o = []; ++n < i; ) {
      var s = e[n];
      t(s, n, e) && (o[r++] = s);
    }
    return o;
  }
  function Wg() {
    return [];
  }
  var Bg = Object.prototype, $g = Bg.propertyIsEnumerable, Ga = Object.getOwnPropertySymbols, zg = Ga ? function(e) {
    return e == null ? [] : (e = Object(e), jg(Ga(e), function(t) {
      return $g.call(e, t);
    }));
  } : Wg;
  function Vg(e, t, n) {
    var i = t(e);
    return Kn(e) ? i : _g(i, n(e));
  }
  function ns(e) {
    return Vg(e, Zp, zg);
  }
  var is = Pn(Pt, "DataView"), rs = Pn(Pt, "Promise"), os = Pn(Pt, "Set"), ja = "[object Map]", Yg = "[object Object]", Wa = "[object Promise]", Ba = "[object Set]", $a = "[object WeakMap]", za = "[object DataView]", Kg = Rn(is), qg = Rn(Ui), Jg = Rn(rs), Xg = Rn(os), Zg = Rn(ts), ut = ln;
  (is && ut(new is(new ArrayBuffer(1))) != za || Ui && ut(new Ui()) != ja || rs && ut(rs.resolve()) != Wa || os && ut(new os()) != Ba || ts && ut(new ts()) != $a) && (ut = function(e) {
    var t = ln(e), n = t == Yg ? e.constructor : void 0, i = n ? Rn(n) : "";
    if (i) switch (i) {
      case Kg:
        return za;
      case qg:
        return ja;
      case Jg:
        return Wa;
      case Xg:
        return Ba;
      case Zg:
        return $a;
    }
    return t;
  });
  var Qg = Object.prototype, em = Qg.hasOwnProperty;
  function tm(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && em.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var Cr = Pt.Uint8Array;
  function Ds(e) {
    var t = new e.constructor(e.byteLength);
    return new Cr(t).set(new Cr(e)), t;
  }
  function nm(e, t) {
    var n = Ds(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var im = /\w*$/;
  function rm(e) {
    var t = new e.constructor(e.source, im.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var Va = an ? an.prototype : void 0, Ya = Va ? Va.valueOf : void 0;
  function om(e) {
    return Ya ? Object(Ya.call(e)) : {};
  }
  sm = function(e, t) {
    var n = t ? Ds(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var am = "[object Boolean]", cm = "[object Date]", lm = "[object Map]", um = "[object Number]", fm = "[object RegExp]", dm = "[object Set]", hm = "[object String]", pm = "[object Symbol]", gm = "[object ArrayBuffer]", mm = "[object DataView]", wm = "[object Float32Array]", ym = "[object Float64Array]", bm = "[object Int8Array]", vm = "[object Int16Array]", Em = "[object Int32Array]", Im = "[object Uint8Array]", _m = "[object Uint8ClampedArray]", Tm = "[object Uint16Array]", Om = "[object Uint32Array]";
  function Am(e, t, n) {
    var i = e.constructor;
    switch (t) {
      case gm:
        return Ds(e);
      case am:
      case cm:
        return new i(+e);
      case mm:
        return nm(e);
      case wm:
      case ym:
      case bm:
      case vm:
      case Em:
      case Im:
      case _m:
      case Tm:
      case Om:
        return sm(e, n);
      case lm:
        return new i();
      case um:
      case hm:
        return new i(e);
      case fm:
        return rm(e);
      case dm:
        return new i();
      case pm:
        return om(e);
    }
  }
  Sm = function(e) {
    return typeof e.constructor == "function" && !cu(e) ? Qh(pu(e)) : {};
  };
  var Rm = "[object Map]";
  function Pm(e) {
    return Rt(e) && ut(e) == Rm;
  }
  var Ka = qn && qn.isMap, Nm = Ka ? ks(Ka) : Pm, Lm = "[object Set]";
  function Cm(e) {
    return Rt(e) && ut(e) == Lm;
  }
  var qa = qn && qn.isSet, xm = qa ? ks(qa) : Cm, Mm = 1, wu = "[object Arguments]", km = "[object Array]", Dm = "[object Boolean]", Fm = "[object Date]", Um = "[object Error]", yu = "[object Function]", Hm = "[object GeneratorFunction]", Gm = "[object Map]", jm = "[object Number]", bu = "[object Object]", Wm = "[object RegExp]", Bm = "[object Set]", $m = "[object String]", zm = "[object Symbol]", Vm = "[object WeakMap]", Ym = "[object ArrayBuffer]", Km = "[object DataView]", qm = "[object Float32Array]", Jm = "[object Float64Array]", Xm = "[object Int8Array]", Zm = "[object Int16Array]", Qm = "[object Int32Array]", ew = "[object Uint8Array]", tw = "[object Uint8ClampedArray]", nw = "[object Uint16Array]", iw = "[object Uint32Array]", de = {};
  de[wu] = de[km] = de[Ym] = de[Km] = de[Dm] = de[Fm] = de[qm] = de[Jm] = de[Xm] = de[Zm] = de[Qm] = de[Gm] = de[jm] = de[bu] = de[Wm] = de[Bm] = de[$m] = de[zm] = de[ew] = de[tw] = de[nw] = de[iw] = true;
  de[Um] = de[yu] = de[Vm] = false;
  function ur(e, t, n, i, r, o) {
    var s, a = t & Mm;
    if (s !== void 0) return s;
    if (!eo(e)) return e;
    var c = Kn(e);
    if (c) s = tm(e);
    else {
      var u = ut(e), l = u == yu || u == Hm;
      if (Lr(e)) return Gg(e, a);
      if (u == bu || u == wu || l && !r) s = l ? {} : Sm(e);
      else {
        if (!de[u]) return r ? e : {};
        s = Am(e, u, a);
      }
    }
    o || (o = new Ft());
    var d = o.get(e);
    if (d) return d;
    o.set(e, s), xm(e) ? e.forEach(function(b) {
      s.add(ur(b, t, n, b, e, o));
    }) : Nm(e) && e.forEach(function(b, w) {
      s.set(w, ur(b, t, n, w, e, o));
    });
    var p = ns, g = c ? void 0 : p(e);
    return ep(g || e, function(b, w) {
      g && (w = b, b = e[w]), ap(s, w, ur(b, t, n, w, e, o));
    }), s;
  }
  var rw = 1, ow = 4;
  We = function(e) {
    return ur(e, rw | ow);
  };
  var sw = "__lodash_hash_undefined__";
  function aw(e) {
    return this.__data__.set(e, sw), this;
  }
  function cw(e) {
    return this.__data__.has(e);
  }
  function xr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new Nn(); ++t < n; ) this.add(e[t]);
  }
  xr.prototype.add = xr.prototype.push = aw;
  xr.prototype.has = cw;
  function lw(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i; ) if (t(e[n], n, e)) return true;
    return false;
  }
  function uw(e, t) {
    return e.has(t);
  }
  var fw = 1, dw = 2;
  function vu(e, t, n, i, r, o) {
    var s = n & fw, a = e.length, c = t.length;
    if (a != c && !(s && c > a)) return false;
    var u = o.get(e), l = o.get(t);
    if (u && l) return u == t && l == e;
    var d = -1, p = true, g = n & dw ? new xr() : void 0;
    for (o.set(e, t), o.set(t, e); ++d < a; ) {
      var b = e[d], w = t[d];
      if (i) var P = s ? i(w, b, d, t, e, o) : i(b, w, d, e, t, o);
      if (P !== void 0) {
        if (P) continue;
        p = false;
        break;
      }
      if (g) {
        if (!lw(t, function(E, I) {
          if (!uw(g, I) && (b === E || r(b, E, n, i, o))) return g.push(I);
        })) {
          p = false;
          break;
        }
      } else if (!(b === w || r(b, w, n, i, o))) {
        p = false;
        break;
      }
    }
    return o.delete(e), o.delete(t), p;
  }
  function hw(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(i, r) {
      n[++t] = [
        r,
        i
      ];
    }), n;
  }
  function pw(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(i) {
      n[++t] = i;
    }), n;
  }
  var gw = 1, mw = 2, ww = "[object Boolean]", yw = "[object Date]", bw = "[object Error]", vw = "[object Map]", Ew = "[object Number]", Iw = "[object RegExp]", _w = "[object Set]", Tw = "[object String]", Ow = "[object Symbol]", Aw = "[object ArrayBuffer]", Sw = "[object DataView]", Ja = an ? an.prototype : void 0, _o = Ja ? Ja.valueOf : void 0;
  function Rw(e, t, n, i, r, o, s) {
    switch (n) {
      case Sw:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
        e = e.buffer, t = t.buffer;
      case Aw:
        return !(e.byteLength != t.byteLength || !o(new Cr(e), new Cr(t)));
      case ww:
      case yw:
      case Ew:
        return Ms(+e, +t);
      case bw:
        return e.name == t.name && e.message == t.message;
      case Iw:
      case Tw:
        return e == t + "";
      case vw:
        var a = hw;
      case _w:
        var c = i & gw;
        if (a || (a = pw), e.size != t.size && !c) return false;
        var u = s.get(e);
        if (u) return u == t;
        i |= mw, s.set(e, t);
        var l = vu(a(e), a(t), i, r, o, s);
        return s.delete(e), l;
      case Ow:
        if (_o) return _o.call(e) == _o.call(t);
    }
    return false;
  }
  var Pw = 1, Nw = Object.prototype, Lw = Nw.hasOwnProperty;
  function Cw(e, t, n, i, r, o) {
    var s = n & Pw, a = ns(e), c = a.length, u = ns(t), l = u.length;
    if (c != l && !s) return false;
    for (var d = c; d--; ) {
      var p = a[d];
      if (!(s ? p in t : Lw.call(t, p))) return false;
    }
    var g = o.get(e), b = o.get(t);
    if (g && b) return g == t && b == e;
    var w = true;
    o.set(e, t), o.set(t, e);
    for (var P = s; ++d < c; ) {
      p = a[d];
      var E = e[p], I = t[p];
      if (i) var M = s ? i(I, E, p, t, e, o) : i(E, I, p, e, t, o);
      if (!(M === void 0 ? E === I || r(E, I, n, i, o) : M)) {
        w = false;
        break;
      }
      P || (P = p == "constructor");
    }
    if (w && !P) {
      var T = e.constructor, G = t.constructor;
      T != G && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof G == "function" && G instanceof G) && (w = false);
    }
    return o.delete(e), o.delete(t), w;
  }
  var xw = 1, Xa = "[object Arguments]", Za = "[object Array]", er = "[object Object]", Mw = Object.prototype, Qa = Mw.hasOwnProperty;
  function kw(e, t, n, i, r, o) {
    var s = Kn(e), a = Kn(t), c = s ? Za : ut(e), u = a ? Za : ut(t);
    c = c == Xa ? er : c, u = u == Xa ? er : u;
    var l = c == er, d = u == er, p = c == u;
    if (p && Lr(e)) {
      if (!Lr(t)) return false;
      s = true, l = false;
    }
    if (p && !l) return o || (o = new Ft()), s || du(e) ? vu(e, t, n, i, r, o) : Rw(e, t, c, n, i, r, o);
    if (!(n & xw)) {
      var g = l && Qa.call(e, "__wrapped__"), b = d && Qa.call(t, "__wrapped__");
      if (g || b) {
        var w = g ? e.value() : e, P = b ? t.value() : t;
        return o || (o = new Ft()), r(w, P, n, i, o);
      }
    }
    return p ? (o || (o = new Ft()), Cw(e, t, n, i, r, o)) : false;
  }
  Eu = function(e, t, n, i, r) {
    return e === t ? true : e == null || t == null || !Rt(e) && !Rt(t) ? e !== e && t !== t : kw(e, t, n, i, Eu, r);
  };
  var Dw = "[object String]";
  function ss(e) {
    return typeof e == "string" || !Kn(e) && Rt(e) && ln(e) == Dw;
  }
  function Fw(e, t) {
    return Eu(e, t);
  }
  const Ye = (e) => ss(e) ? e : JSON.stringify(e), bt = {
    unloaded: (...e) => `[loadModules] Module "${Ye(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${Ye(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${Ye(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${Ye(e[0])}" failed to load.
Trackback: 
${Ye(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${Ye(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${Ye(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${Ye(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${Ye(e[0])}" is missing the following dependencies: ${Ye(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${Ye(e[0])}" is loading its dependencies (${e.slice(1).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${Ye(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${Ye(e[0])}" dependencies failed to load. 

Trackback: 
${Ye(e[1])}`
  }, Uw = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function Iu(e, t, n = 1e4, i = {}, r = 0, o = 0, s = 0) {
    var _a2, _b2, _c2, _d2, _e2, _f2;
    const { logger: a = Uw, progressReporter: c, printLog: u = true } = i, l = e.find((w) => w.name === t);
    if (!l) throw new Error(`cannot exactly find module "${t}" from the library`);
    const d = e.findIndex((w) => w.name === l.name);
    if (e[d].status === "loaded") return u && a.info(bt.alreadyLoaded(l.name)), {
      completed: s,
      total: o
    };
    const p = l.dependencies || [], g = e.filter((w) => p.includes(w.name)), b = p.filter((w) => !e.find((P) => P.name === w));
    if (b.length > 0) {
      const w = bt.missingDependencies(l.name, b.join(", "));
      throw u && a.error(w), new Error(w);
    }
    if (e[d].status === "error") {
      const w = bt.errorDetermined(l.name);
      throw u && a.info(w), new Error(w);
    }
    if (e[d].status === "loading") return u && a.info(bt.alreadyLoading(l.name)), await Hw(e, l.name, n, a), {
      completed: s,
      total: o
    };
    try {
      let w = o, P = s;
      if (r === 0) {
        const E = /* @__PURE__ */ new Set(), I = (M) => {
          if (E.has(M)) return;
          E.add(M);
          const T = e.find((G) => G.name === M);
          if (T && T.dependencies) for (const G of T.dependencies) I(G);
        };
        I(t), w = E.size, P = 0;
      }
      if (g.length > 0) {
        a.info(bt.loadDependencies(l.name, g.map((E) => E.name)));
        for (const E of g) {
          const I = await Iu(e, E.name, n, {
            logger: a,
            progressReporter: c,
            printLog: u
          }, r + 1, w, P);
          P = I.completed, w = I.total, (_a2 = c == null ? void 0 : c.onOverallProgress) == null ? void 0 : _a2.call(c, P, w);
        }
        u && a.info(bt.dependenciesReady(l.name));
      }
      e[d].status = "loading", (_b2 = c == null ? void 0 : c.onModuleStart) == null ? void 0 : _b2.call(c, l.displayName);
      try {
        return u && a.info(bt.loading(l.name)), await l.moduleInit(n), e[d].status = "loaded", P++, (_c2 = c == null ? void 0 : c.onModuleComplete) == null ? void 0 : _c2.call(c, l.displayName), (_d2 = c == null ? void 0 : c.onOverallProgress) == null ? void 0 : _d2.call(c, P, w), u && a.info(bt.loaded(l.name)), {
          completed: P,
          total: w
        };
      } catch (E) {
        e[d].status = "error";
        const I = bt.error(l.name, ss(E) ? E : Cg(E) ? E.message : JSON.stringify(E));
        throw a.error(I), (_e2 = c == null ? void 0 : c.onModuleError) == null ? void 0 : _e2.call(c, l.displayName, ss(E) ? new Error(E) : E), new Error(I);
      }
    } catch (w) {
      e[d].status = "error";
      const P = bt.error(l.name, w);
      throw a.error(P), (_f2 = c == null ? void 0 : c.onModuleError) == null ? void 0 : _f2.call(c, l.displayName, w), new Error(P);
    }
  }
  async function Hw(e, t, n = 1e4, i) {
    const r = Date.now();
    return new Promise((o, s) => {
      const a = setInterval(() => {
        const c = e.find((u) => u.name === t);
        if (c && c.status === "loaded") clearInterval(a), o();
        else if (Date.now() - r > n) {
          clearInterval(a);
          const u = new Error(`Load module ${t} timeout`);
          i == null ? void 0 : i.error(u.message), s(u);
        }
      }, 100);
    });
  }
  let Gw, jw, ec, Ww, Bw, $w, _u;
  Gw = "modulepreload";
  jw = function(e, t) {
    return new URL(e, t).href;
  };
  ec = {};
  To = function(t, n, i) {
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
        if (l = jw(l, i), l in ec) return;
        ec[l] = true;
        const d = l.endsWith(".css"), p = d ? '[rel="stylesheet"]' : "";
        if (!!i) for (let w = a.length - 1; w >= 0; w--) {
          const P = a[w];
          if (P.href === l && (!d || P.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${l}"]${p}`)) return;
        const b = document.createElement("link");
        if (b.rel = d ? "stylesheet" : Gw, d || (b.as = "script"), b.crossOrigin = "", b.href = l, u && b.setAttribute("nonce", u), document.head.appendChild(b), d) return new Promise((w, P) => {
          b.addEventListener("load", w), b.addEventListener("error", () => P(new Error(`Unable to preload CSS for ${l}`)));
        });
      }));
    }
    function o(s) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = s, window.dispatchEvent(a), !a.defaultPrevented) throw s;
    }
    return r.then((s) => {
      for (const a of s || []) a.status === "rejected" && o(a.reason);
      return t().catch(o);
    });
  };
  Ww = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  Bw = [
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
  _u = (e, t, n = $w) => {
    const i = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, r = n.withStackTrace ? new Error().stack : void 0;
    return {
      data: i,
      message: e,
      stack: r
    };
  };
  function mn(e, t, n, i) {
    function r(o) {
      return o instanceof n ? o : new n(function(s) {
        s(o);
      });
    }
    return new (n || (n = Promise))(function(o, s) {
      function a(l) {
        try {
          u(i.next(l));
        } catch (d) {
          s(d);
        }
      }
      function c(l) {
        try {
          u(i.throw(l));
        } catch (d) {
          s(d);
        }
      }
      function u(l) {
        l.done ? o(l.value) : r(l.value).then(a, c);
      }
      u((i = i.apply(e, [])).next());
    });
  }
  function tc(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], i = 0;
    if (n) return n.call(e);
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
  function At(e) {
    return this instanceof At ? (this.v = e, this) : new At(e);
  }
  function nc(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = n.apply(e, t || []), r, o = [];
    return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", s), r[Symbol.asyncIterator] = function() {
      return this;
    }, r;
    function s(g) {
      return function(b) {
        return Promise.resolve(b).then(g, d);
      };
    }
    function a(g, b) {
      i[g] && (r[g] = function(w) {
        return new Promise(function(P, E) {
          o.push([
            g,
            w,
            P,
            E
          ]) > 1 || c(g, w);
        });
      }, b && (r[g] = b(r[g])));
    }
    function c(g, b) {
      try {
        u(i[g](b));
      } catch (w) {
        p(o[0][3], w);
      }
    }
    function u(g) {
      g.value instanceof At ? Promise.resolve(g.value.v).then(l, d) : p(o[0][2], g);
    }
    function l(g) {
      c("next", g);
    }
    function d(g) {
      c("throw", g);
    }
    function p(g, b) {
      g(b), o.shift(), o.length && c(o[0][0], o[0][1]);
    }
  }
  function zw(e) {
    var t, n;
    return t = {}, i("next"), i("throw", function(r) {
      throw r;
    }), i("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function i(r, o) {
      t[r] = e[r] ? function(s) {
        return (n = !n) ? {
          value: At(e[r](s)),
          done: false
        } : o ? o(s) : s;
      } : o;
    }
  }
  function Vw(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof tc == "function" ? tc(e) : e[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
      return this;
    }, n);
    function i(o) {
      n[o] = e[o] && function(s) {
        return new Promise(function(a, c) {
          s = e[o](s), r(a, c, s.done, s.value);
        });
      };
    }
    function r(o, s, a, c) {
      Promise.resolve(c).then(function(u) {
        o({
          value: u,
          done: a
        });
      }, s);
    }
  }
  class Me {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const n = t.then((i) => new Et(i));
      return new Me(n);
    }
    static fromPromise(t, n) {
      const i = t.then((r) => new Et(r)).catch((r) => new ct(n(r)));
      return new Me(i);
    }
    static fromThrowable(t, n) {
      return (...i) => new Me(mn(this, void 0, void 0, function* () {
        try {
          return new Et(yield t(...i));
        } catch (r) {
          return new ct(n ? n(r) : r);
        }
      }));
    }
    static combine(t) {
      return Yw(t);
    }
    static combineWithAllErrors(t) {
      return Kw(t);
    }
    map(t) {
      return new Me(this._promise.then((n) => mn(this, void 0, void 0, function* () {
        return n.isErr() ? new ct(n.error) : new Et(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new Me(this._promise.then((n) => mn(this, void 0, void 0, function* () {
        if (n.isErr()) return new ct(n.error);
        const i = yield t(n.value);
        return i.isErr() ? new ct(i.error) : new Et(n.value);
      })));
    }
    andTee(t) {
      return new Me(this._promise.then((n) => mn(this, void 0, void 0, function* () {
        if (n.isErr()) return new ct(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new Et(n.value);
      })));
    }
    orTee(t) {
      return new Me(this._promise.then((n) => mn(this, void 0, void 0, function* () {
        if (n.isOk()) return new Et(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new ct(n.error);
      })));
    }
    mapErr(t) {
      return new Me(this._promise.then((n) => mn(this, void 0, void 0, function* () {
        return n.isOk() ? new Et(n.value) : new ct(yield t(n.error));
      })));
    }
    andThen(t) {
      return new Me(this._promise.then((n) => {
        if (n.isErr()) return new ct(n.error);
        const i = t(n.value);
        return i instanceof Me ? i._promise : i;
      }));
    }
    orElse(t) {
      return new Me(this._promise.then((n) => mn(this, void 0, void 0, function* () {
        return n.isErr() ? t(n.error) : new Et(n.value);
      })));
    }
    match(t, n) {
      return this._promise.then((i) => i.match(t, n));
    }
    unwrapOr(t) {
      return this._promise.then((n) => n.unwrapOr(t));
    }
    safeUnwrap() {
      return nc(this, arguments, function* () {
        return yield At(yield At(yield* zw(Vw(yield At(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return nc(this, arguments, function* () {
        const n = yield At(this._promise);
        return n.isErr() && (yield yield At(fr(n.error))), yield At(n.value);
      });
    }
  }
  function fr(e) {
    return new Me(Promise.resolve(new ct(e)));
  }
  const Tu = (e) => {
    let t = O([]);
    for (const n of e) if (n.isErr()) {
      t = m(n.error);
      break;
    } else t.map((i) => i.push(n.value));
    return t;
  }, Yw = (e) => Me.fromSafePromise(Promise.all(e)).andThen(Tu), Ou = (e) => {
    let t = O([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = m([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, Kw = (e) => Me.fromSafePromise(Promise.all(e)).andThen(Ou);
  var as;
  (function(e) {
    function t(r, o) {
      return (...s) => {
        try {
          const a = r(...s);
          return O(a);
        } catch (a) {
          return m(o ? o(a) : a);
        }
      };
    }
    e.fromThrowable = t;
    function n(r) {
      return Tu(r);
    }
    e.combine = n;
    function i(r) {
      return Ou(r);
    }
    e.combineWithAllErrors = i;
  })(as || (as = {}));
  O = function(e) {
    return new Et(e);
  };
  m = function(e) {
    return new ct(e);
  };
  class Et {
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
      return O(t(this.value));
    }
    mapErr(t) {
      return O(this.value);
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
      return O(this.value);
    }
    orTee(t) {
      return O(this.value);
    }
    orElse(t) {
      return O(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return Me.fromSafePromise(t(this.value));
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
      throw _u("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class ct {
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
      return m(this.error);
    }
    mapErr(t) {
      return m(t(this.error));
    }
    andThrough(t) {
      return m(this.error);
    }
    andTee(t) {
      return m(this.error);
    }
    orTee(t) {
      try {
        t(this.error);
      } catch {
      }
      return m(this.error);
    }
    andThen(t) {
      return m(this.error);
    }
    orElse(t) {
      return t(this.error);
    }
    asyncAndThen(t) {
      return fr(this.error);
    }
    asyncAndThrough(t) {
      return fr(this.error);
    }
    asyncMap(t) {
      return fr(this.error);
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
        throw yield m(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw _u("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  as.fromThrowable;
  Zn = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(Zn || {});
  Ln = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class Ne extends Ln {
    constructor(t, n = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function qw(e) {
    return e instanceof Ln;
  }
  function Ze(e, t = "Unknown error occurred") {
    return qw(e) ? e : e instanceof Error ? new Ne(t, "UNKNOWN_ERROR", e) : new Ne(t, "UNKNOWN_ERROR");
  }
  function Oe(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  }
  class Fs extends Ln {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", Zn.GEOLOCATION);
      this.code = n;
    }
  }
  class xn extends Fs {
    constructor(t = "User denied geolocation permission", n) {
      super(t, "PERMISSION_DENIED", n);
    }
  }
  class Jw extends Fs {
    constructor(t = "Geolocation is not supported by this browser", n) {
      super(t, "UNSUPPORTED_BROWSER", n);
    }
  }
  class ve extends Fs {
    constructor(t = "Geolocation update service error", n, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = n;
    }
  }
  var Xw = "2.0.6", Zw = 500, ic = "user-agent", Jn = "", rc = "?", _e = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Ke = "browser", kt = "cpu", St = "device", ft = "engine", Qe = "os", $n = "result", A = "name", v = "type", S = "vendor", R = "version", Be = "architecture", Hi = "major", _ = "model", mi = "console", q = "mobile", ae = "tablet", Te = "smarttv", It = "wearable", tr = "xr", wi = "embedded", Mn = "inapp", Us = "brands", En = "formFactors", Hs = "fullVersionList", zn = "platform", Gs = "platformVersion", io = "bitness", un = "sec-ch-ua", Qw = un + "-full-version-list", ey = un + "-arch", ty = un + "-" + io, ny = un + "-form-factors", iy = un + "-" + q, ry = un + "-" + _, Au = un + "-" + zn, oy = Au + "-version", Su = [
    Us,
    Hs,
    q,
    _,
    zn,
    Gs,
    Be,
    En,
    io
  ], nr = "Amazon", kn = "Apple", oc = "ASUS", sc = "BlackBerry", wn = "Google", ac = "Huawei", Oo = "Lenovo", cc = "Honor", ir = "LG", Ao = "Microsoft", So = "Motorola", Ro = "Nvidia", lc = "OnePlus", Po = "OPPO", si = "Samsung", uc = "Sharp", ai = "Sony", No = "Xiaomi", Lo = "Zebra", fc = "Chrome", dc = "Chromium", Kt = "Chromecast", dr = "Edge", ci = "Firefox", li = "Opera", Co = "Facebook", hc = "Sogou", Dn = "Mobile ", ui = " Browser", cs = "Windows", sy = typeof window !== _e.UNDEFINED, qe = sy && window.navigator ? window.navigator : void 0, en = qe && qe.userAgentData ? qe.userAgentData : void 0, ay = function(e, t) {
    var n = {}, i = t;
    if (!Mr(t)) {
      i = {};
      for (var r in t) for (var o in t[r]) i[o] = t[r][o].concat(i[o] ? i[o] : []);
    }
    for (var s in e) n[s] = i[s] && i[s].length % 2 === 0 ? i[s].concat(e[s]) : e[s];
    return n;
  }, ro = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, ls = function(e, t) {
    if (typeof e === _e.OBJECT && e.length > 0) {
      for (var n in e) if (tn(t) == tn(e[n])) return true;
      return false;
    }
    return zi(e) ? tn(t) == tn(e) : false;
  }, Mr = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? Mr(e[n]) : false);
  }, zi = function(e) {
    return typeof e === _e.STRING;
  }, xo = function(e) {
    if (e) {
      for (var t = [], n = Xn(/\\?\"/g, e).split(","), i = 0; i < n.length; i++) if (n[i].indexOf(";") > -1) {
        var r = kr(n[i]).split(";v=");
        t[i] = {
          brand: r[0],
          version: r[1]
        };
      } else t[i] = kr(n[i]);
      return t;
    }
  }, tn = function(e) {
    return zi(e) ? e.toLowerCase() : e;
  }, Mo = function(e) {
    return zi(e) ? Xn(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, Dt = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var n = e[t];
      typeof n == _e.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, Xn = function(e, t) {
    return zi(t) ? t.replace(e, Jn) : t;
  }, fi = function(e) {
    return Xn(/\\?\"/g, e);
  }, kr = function(e, t) {
    return e = Xn(/^\s\s*/, String(e)), typeof t === _e.UNDEFINED ? e : e.substring(0, t);
  }, ko = function(e, t) {
    if (!(!e || !t)) for (var n = 0, i, r, o, s, a, c; n < t.length && !a; ) {
      var u = t[n], l = t[n + 1];
      for (i = r = 0; i < u.length && !a && u[i]; ) if (a = u[i++].exec(e), a) for (o = 0; o < l.length; o++) c = a[++r], s = l[o], typeof s === _e.OBJECT && s.length > 0 ? s.length === 2 ? typeof s[1] == _e.FUNCTION ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : s.length >= 3 && (typeof s[1] === _e.FUNCTION && !(s[1].exec && s[1].test) ? s.length > 3 ? this[s[0]] = c ? s[1].apply(this, s.slice(2)) : void 0 : this[s[0]] = c ? s[1].call(this, c, s[2]) : void 0 : s.length == 3 ? this[s[0]] = c ? c.replace(s[1], s[2]) : void 0 : s.length == 4 ? this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : void 0 : s.length > 4 && (this[s[0]] = c ? s[3].apply(this, [
        c.replace(s[1], s[2])
      ].concat(s.slice(4))) : void 0)) : this[s] = c || void 0;
      n += 2;
    }
  }, Tt = function(e, t) {
    for (var n in t) if (typeof t[n] === _e.OBJECT && t[n].length > 0) {
      for (var i = 0; i < t[n].length; i++) if (ls(t[n][i], e)) return n === rc ? void 0 : n;
    } else if (ls(t[n], e)) return n === rc ? void 0 : n;
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
  }, cy = {
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
        R,
        [
          A,
          Dn + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          dr + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        A,
        R
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          li + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          li + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          li
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        R,
        [
          A,
          "Maxthon"
        ]
      ],
      [
        /(kindle)\/([\w\.]+)/i,
        /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
        /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
        /(?:ms|\()(ie) ([\w\.]+)/i,
        /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser|palemoon)\/([-\w\.]+)/i,
        /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
        /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
      ],
      [
        A,
        R
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        R,
        [
          A,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "Smart " + Oo + ui
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          A,
          /(.+)/,
          "$1 Secure" + ui
        ],
        R
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          ci + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          li + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          li + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "MIUI" + ui
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        R,
        [
          A,
          Dn + ci
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        R,
        [
          A,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          A,
          /(.+)/,
          "$1Browser"
        ],
        R
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          A,
          /(.+)/,
          "$1" + ui
        ],
        R
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          si + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        R,
        [
          A,
          hc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          A,
          hc + " Mobile"
        ],
        R
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        A,
        R
      ],
      [
        /(lbbrowser|rekonq)/i
      ],
      [
        A
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        R,
        A
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          A,
          Co
        ],
        R,
        [
          v,
          Mn
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
        A,
        R,
        [
          v,
          Mn
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        R,
        [
          A,
          "GSA"
        ],
        [
          v,
          Mn
        ]
      ],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          "TikTok"
        ],
        [
          v,
          Mn
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        A,
        [
          v,
          Mn
        ]
      ],
      [
        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
      ],
      [
        [
          A,
          /(.+)/,
          "Zalo"
        ],
        R,
        [
          v,
          Mn
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        A,
        R
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        R,
        [
          A,
          fc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        R,
        [
          A,
          dr + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          A,
          fc + " WebView"
        ],
        R
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        R,
        [
          A,
          "Android" + ui
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        R,
        [
          A,
          Dn + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        A,
        R
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        R,
        [
          A,
          Dn + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          A,
          Dn + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        R,
        A
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        A,
        [
          R,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        A,
        R
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          A,
          Dn + ci
        ],
        R
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          A,
          "Netscape"
        ],
        R
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        A,
        R
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        R,
        [
          A,
          ci + " Reality"
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
        A,
        [
          R,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        A,
        [
          R,
          /[^\d\.]+./,
          Jn
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          Be,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Be,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Be,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Be,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Be,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          Be,
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
          Be,
          /ower/,
          Jn,
          tn
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          Be,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          Be,
          "alpha"
        ]
      ]
    ],
    device: [
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [
        _,
        [
          S,
          si
        ],
        [
          v,
          ae
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        _,
        [
          S,
          si
        ],
        [
          v,
          q
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        _,
        [
          S,
          kn
        ],
        [
          v,
          q
        ]
      ],
      [
        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
      ],
      [
        _,
        [
          S,
          kn
        ],
        [
          v,
          ae
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        _,
        [
          S,
          kn
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        _,
        [
          S,
          uc
        ],
        [
          v,
          q
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        _,
        [
          S,
          cc
        ],
        [
          v,
          ae
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        _,
        [
          S,
          cc
        ],
        [
          v,
          q
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        _,
        [
          S,
          ac
        ],
        [
          v,
          ae
        ]
      ],
      [
        /(?:huawei) ?([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
      ],
      [
        _,
        [
          S,
          ac
        ],
        [
          v,
          q
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          _,
          /_/g,
          " "
        ],
        [
          S,
          No
        ],
        [
          v,
          ae
        ]
      ],
      [
        /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
        /\b; (\w+) build\/hm\1/i,
        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
        /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
        /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
        / ([\w ]+) miui\/v?\d/i
      ],
      [
        [
          _,
          /_/g,
          " "
        ],
        [
          S,
          No
        ],
        [
          v,
          q
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        _,
        [
          S,
          lc
        ],
        [
          v,
          q
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        _,
        [
          S,
          Po
        ],
        [
          v,
          q
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        _,
        [
          S,
          Tt,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": Po
          }
        ],
        [
          v,
          ae
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        _,
        [
          S,
          "BLU"
        ],
        [
          v,
          q
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        _,
        [
          S,
          "Vivo"
        ],
        [
          v,
          q
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        _,
        [
          S,
          "Realme"
        ],
        [
          v,
          q
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        _,
        [
          S,
          Oo
        ],
        [
          v,
          ae
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        _,
        [
          S,
          Oo
        ],
        [
          v,
          q
        ]
      ],
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        _,
        [
          S,
          So
        ],
        [
          v,
          q
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        _,
        [
          S,
          So
        ],
        [
          v,
          ae
        ]
      ],
      [
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        _,
        [
          S,
          ir
        ],
        [
          v,
          ae
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        _,
        [
          S,
          ir
        ],
        [
          v,
          q
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        S,
        _,
        [
          v,
          ae
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
      ],
      [
        [
          _,
          /_/g,
          " "
        ],
        [
          v,
          q
        ],
        [
          S,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        _,
        [
          S,
          wn
        ],
        [
          v,
          ae
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        _,
        [
          S,
          wn
        ],
        [
          v,
          q
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        S,
        _
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        _,
        [
          S,
          ai
        ],
        [
          v,
          q
        ]
      ],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [
        [
          _,
          "Xperia Tablet"
        ],
        [
          S,
          ai
        ],
        [
          v,
          ae
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        _,
        [
          S,
          nr
        ],
        [
          v,
          ae
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          _,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          S,
          nr
        ],
        [
          v,
          q
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        _,
        S,
        [
          v,
          ae
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /(?:blackberry|\(bb10;) (\w+)/i
      ],
      [
        _,
        [
          S,
          sc
        ],
        [
          v,
          q
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        _,
        [
          S,
          oc
        ],
        [
          v,
          ae
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        _,
        [
          S,
          oc
        ],
        [
          v,
          q
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        _,
        [
          S,
          "HTC"
        ],
        [
          v,
          ae
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        S,
        [
          _,
          /_/g,
          " "
        ],
        [
          v,
          q
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        _,
        [
          S,
          "TCL"
        ],
        [
          v,
          ae
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        _,
        [
          S,
          "TCL"
        ],
        [
          v,
          q
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          S,
          tn
        ],
        _,
        [
          v,
          Tt,
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
        _,
        [
          S,
          "Acer"
        ],
        [
          v,
          ae
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        _,
        [
          S,
          "Meizu"
        ],
        [
          v,
          q
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        _,
        [
          S,
          "Ulefone"
        ],
        [
          v,
          q
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        _,
        [
          S,
          "Energizer"
        ],
        [
          v,
          q
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        _,
        [
          S,
          "Cat"
        ],
        [
          v,
          q
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        _,
        [
          S,
          "Smartfren"
        ],
        [
          v,
          q
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        _,
        [
          S,
          "Nothing"
        ],
        [
          v,
          q
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        _,
        [
          S,
          "Archos"
        ],
        [
          v,
          ae
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        _,
        [
          S,
          "Archos"
        ],
        [
          v,
          q
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        _,
        [
          S,
          "HMD"
        ],
        [
          v,
          q
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        S,
        _,
        [
          v,
          ae
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
        S,
        _,
        [
          v,
          q
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        S,
        _,
        [
          v,
          ae
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        _,
        [
          S,
          Ao
        ],
        [
          v,
          ae
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        _,
        [
          S,
          "Fairphone"
        ],
        [
          v,
          q
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        _,
        [
          S,
          Ro
        ],
        [
          v,
          ae
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        S,
        _,
        [
          v,
          q
        ]
      ],
      [
        /(kin\.[onetw]{3})/i
      ],
      [
        [
          _,
          /\./g,
          " "
        ],
        [
          S,
          Ao
        ],
        [
          v,
          q
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        _,
        [
          S,
          Lo
        ],
        [
          v,
          ae
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        _,
        [
          S,
          Lo
        ],
        [
          v,
          q
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        S,
        [
          v,
          Te
        ]
      ],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [
        [
          _,
          /^/,
          "SmartTV"
        ],
        [
          S,
          si
        ],
        [
          v,
          Te
        ]
      ],
      [
        /(vizio)(?: |.+model\/)(\w+-\w+)/i,
        /tcast.+(lg)e?. ([-\w]+)/i
      ],
      [
        S,
        _,
        [
          v,
          Te
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          S,
          ir
        ],
        [
          v,
          Te
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        S,
        [
          _,
          kn + " TV"
        ],
        [
          v,
          Te
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          _,
          Kt + " Third Generation"
        ],
        [
          S,
          wn
        ],
        [
          v,
          Te
        ]
      ],
      [
        /crkey.*devicetype\/([^/]*)/i
      ],
      [
        [
          _,
          /^/,
          "Chromecast "
        ],
        [
          S,
          wn
        ],
        [
          v,
          Te
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          _,
          Kt + " Nest Hub"
        ],
        [
          S,
          wn
        ],
        [
          v,
          Te
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          _,
          Kt
        ],
        [
          S,
          wn
        ],
        [
          v,
          Te
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        _,
        [
          S,
          Co
        ],
        [
          v,
          Te
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        _,
        [
          S,
          nr
        ],
        [
          v,
          Te
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        _,
        [
          S,
          Ro
        ],
        [
          v,
          Te
        ]
      ],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
      ],
      [
        _,
        [
          S,
          uc
        ],
        [
          v,
          Te
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        _,
        [
          S,
          ai
        ],
        [
          v,
          Te
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        _,
        [
          S,
          No
        ],
        [
          v,
          Te
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        S,
        _,
        [
          v,
          Te
        ]
      ],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
      ],
      [
        [
          S,
          /.+\/(\w+)/,
          "$1",
          Tt,
          {
            LG: "lge"
          }
        ],
        [
          _,
          kr
        ],
        [
          v,
          Te
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        _,
        [
          S,
          ai
        ],
        [
          v,
          mi
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        _,
        [
          S,
          Ao
        ],
        [
          v,
          mi
        ]
      ],
      [
        /(ouya)/i,
        /(nintendo) (\w+)/i,
        /(retroid) (pocket ([^\)]+))/i
      ],
      [
        S,
        _,
        [
          v,
          mi
        ]
      ],
      [
        /droid.+; (shield)( bui|\))/i
      ],
      [
        _,
        [
          S,
          Ro
        ],
        [
          v,
          mi
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        _,
        [
          S,
          si
        ],
        [
          v,
          It
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        S,
        _,
        [
          v,
          It
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        _,
        [
          S,
          Po
        ],
        [
          v,
          It
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        _,
        [
          S,
          kn
        ],
        [
          v,
          It
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        _,
        [
          S,
          lc
        ],
        [
          v,
          It
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        _,
        [
          S,
          So
        ],
        [
          v,
          It
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        _,
        [
          S,
          ai
        ],
        [
          v,
          It
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        _,
        [
          S,
          ir
        ],
        [
          v,
          It
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        _,
        [
          S,
          Lo
        ],
        [
          v,
          It
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        _,
        [
          S,
          wn
        ],
        [
          v,
          tr
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        S,
        _,
        [
          v,
          tr
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        _,
        [
          S,
          Co
        ],
        [
          v,
          tr
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          v,
          tr
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        S,
        [
          v,
          wi
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        _,
        [
          S,
          nr
        ],
        [
          v,
          wi
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        _,
        [
          S,
          kn
        ],
        [
          v,
          wi
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          v,
          wi
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        _,
        [
          v,
          Te
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          v,
          Te
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        _,
        [
          v,
          Tt,
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
          v,
          ae
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          v,
          q
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        _,
        [
          S,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          dr + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        A,
        R
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        R,
        [
          A,
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
        A,
        R
      ],
      [
        /ladybird\//i
      ],
      [
        [
          A,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        R,
        A
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          A,
          /N/,
          "R"
        ],
        [
          R,
          Tt,
          pc
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        A,
        R
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          R,
          /(;|\))/g,
          "",
          Tt,
          pc
        ],
        [
          A,
          cs
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        A,
        R
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone))|ip(?:ad|hone)(?: |.+i(?:pad)?)os)[\/ ]([\w\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          R,
          /_/g,
          "."
        ],
        [
          A,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          A,
          "macOS"
        ],
        [
          R,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        R,
        [
          A,
          Kt + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        R,
        [
          A,
          Kt + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        R,
        [
          A,
          Kt + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        R,
        [
          A,
          Kt + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        R,
        [
          A,
          Kt
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        R,
        A
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          A,
          /(.+)/,
          "$1 Touch"
        ],
        R
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        A,
        R
      ],
      [
        /\(bb(10);/i
      ],
      [
        R,
        [
          A,
          sc
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        R,
        [
          A,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        R,
        [
          A,
          ci + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        R,
        [
          A,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          R,
          Tt,
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
          A,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        R,
        [
          A,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          A,
          "Chrome OS"
        ],
        R
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
        A,
        R
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          A,
          "Solaris"
        ],
        R
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        A,
        R
      ]
    ]
  }, rr = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return Dt.call(e.init, [
      [
        Ke,
        [
          A,
          R,
          Hi,
          v
        ]
      ],
      [
        kt,
        [
          Be
        ]
      ],
      [
        St,
        [
          v,
          _,
          S
        ]
      ],
      [
        ft,
        [
          A,
          R
        ]
      ],
      [
        Qe,
        [
          A,
          R
        ]
      ]
    ]), Dt.call(e.isIgnore, [
      [
        Ke,
        [
          R,
          Hi
        ]
      ],
      [
        ft,
        [
          R
        ]
      ],
      [
        Qe,
        [
          R
        ]
      ]
    ]), Dt.call(e.isIgnoreRgx, [
      [
        Ke,
        / ?browser$/i
      ],
      [
        Qe,
        / ?os$/i
      ]
    ]), Dt.call(e.toString, [
      [
        Ke,
        [
          A,
          R
        ]
      ],
      [
        kt,
        [
          Be
        ]
      ],
      [
        St,
        [
          S,
          _
        ]
      ],
      [
        ft,
        [
          A,
          R
        ]
      ],
      [
        Qe,
        [
          A,
          R
        ]
      ]
    ]), e;
  })(), ly = function(e, t) {
    var n = rr.init[t], i = rr.isIgnore[t] || 0, r = rr.isIgnoreRgx[t] || 0, o = rr.toString[t] || 0;
    function s() {
      Dt.call(this, n);
    }
    return s.prototype.getItem = function() {
      return e;
    }, s.prototype.withClientHints = function() {
      return en ? en.getHighEntropyValues(Su).then(function(a) {
        return e.setCH(new Ru(a, false)).parseCH().get();
      }) : e.parseCH().get();
    }, s.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != $n && (s.prototype.is = function(a) {
      var c = false;
      for (var u in this) if (this.hasOwnProperty(u) && !ls(i, u) && tn(r ? Xn(r, this[u]) : this[u]) == tn(r ? Xn(r, a) : a)) {
        if (c = true, a != _e.UNDEFINED) break;
      } else if (a == _e.UNDEFINED && c) {
        c = !c;
        break;
      }
      return c;
    }, s.prototype.toString = function() {
      var a = Jn;
      for (var c in o) typeof this[o[c]] !== _e.UNDEFINED && (a += (a ? " " : Jn) + this[o[c]]);
      return a || _e.UNDEFINED;
    }), en || (s.prototype.then = function(a) {
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
  function Ru(e, t) {
    if (e = e || {}, Dt.call(this, Su), t) Dt.call(this, [
      [
        Us,
        xo(e[un])
      ],
      [
        Hs,
        xo(e[Qw])
      ],
      [
        q,
        /\?1/.test(e[iy])
      ],
      [
        _,
        fi(e[ry])
      ],
      [
        zn,
        fi(e[Au])
      ],
      [
        Gs,
        fi(e[oy])
      ],
      [
        Be,
        fi(e[ey])
      ],
      [
        En,
        xo(e[ny])
      ],
      [
        io,
        fi(e[ty])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== _e.UNDEFINED && (this[n] = e[n]);
  }
  function wc(e, t, n, i) {
    return this.get = function(r) {
      return r ? this.data.hasOwnProperty(r) ? this.data[r] : void 0 : this.data;
    }, this.set = function(r, o) {
      return this.data[r] = o, this;
    }, this.setCH = function(r) {
      return this.uaCH = r, this;
    }, this.detectFeature = function() {
      if (qe && qe.userAgent == this.ua) switch (this.itemType) {
        case Ke:
          qe.brave && typeof qe.brave.isBrave == _e.FUNCTION && this.set(A, "Brave");
          break;
        case St:
          !this.get(v) && en && en[q] && this.set(v, q), this.get(_) == "Macintosh" && qe && typeof qe.standalone !== _e.UNDEFINED && qe.maxTouchPoints && qe.maxTouchPoints > 2 && this.set(_, "iPad").set(v, ae);
          break;
        case Qe:
          !this.get(A) && en && en[zn] && this.set(A, en[zn]);
          break;
        case $n:
          var r = this.data, o = function(s) {
            return r[s].getItem().detectFeature().get();
          };
          this.set(Ke, o(Ke)).set(kt, o(kt)).set(St, o(St)).set(ft, o(ft)).set(Qe, o(Qe));
      }
      return this;
    }, this.parseUA = function() {
      switch (this.itemType != $n && ko.call(this.data, this.ua, this.rgxMap), this.itemType) {
        case Ke:
          this.set(Hi, Mo(this.get(R)));
          break;
        case Qe:
          if (this.get(A) == "iOS" && this.get(R) == "18.6") {
            var r = /\) Version\/([\d\.]+)/.exec(this.ua);
            r && parseInt(r[1].substring(0, 2), 10) >= 26 && this.set(R, r[1]);
          }
          break;
      }
      return this;
    }, this.parseCH = function() {
      var r = this.uaCH, o = this.rgxMap;
      switch (this.itemType) {
        case Ke:
        case ft:
          var s = r[Hs] || r[Us], a;
          if (s) for (var c = 0; c < s.length; c++) {
            var u = s[c].brand || s[c], l = s[c].version;
            this.itemType == Ke && !/not.a.brand/i.test(u) && (!a || /Chrom/.test(a) && u != dc || a == dr && /WebView2/.test(u)) && (u = Tt(u, cy), a = this.get(A), a && !/Chrom/.test(a) && /Chrom/.test(u) || this.set(A, u).set(R, l).set(Hi, Mo(l)), a = u), this.itemType == ft && u == dc && this.set(R, l);
          }
          break;
        case kt:
          var d = r[Be];
          d && (d && r[io] == "64" && (d += "64"), ko.call(this.data, d + ";", o));
          break;
        case St:
          if (r[q] && this.set(v, q), r[_] && (this.set(_, r[_]), !this.get(v) || !this.get(S))) {
            var p = {};
            ko.call(p, "droid 9; " + r[_] + ")", o), !this.get(v) && p.type && this.set(v, p.type), !this.get(S) && p.vendor && this.set(S, p.vendor);
          }
          if (r[En]) {
            var g;
            if (typeof r[En] != "string") for (var b = 0; !g && b < r[En].length; ) g = Tt(r[En][b++], gc);
            else g = Tt(r[En], gc);
            this.set(v, g);
          }
          break;
        case Qe:
          var w = r[zn];
          if (w) {
            var P = r[Gs];
            w == cs && (P = parseInt(Mo(P), 10) >= 13 ? "11" : "10"), this.set(A, w).set(R, P);
          }
          this.get(A) == cs && r[_] == "Xbox" && this.set(A, "Xbox").set(R, void 0);
          break;
        case $n:
          var E = this.data, I = function(M) {
            return E[M].getItem().setCH(r).parseCH().get();
          };
          this.set(Ke, I(Ke)).set(kt, I(kt)).set(St, I(St)).set(ft, I(ft)).set(Qe, I(Qe));
      }
      return this;
    }, Dt.call(this, [
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
        n
      ],
      [
        "data",
        ly(this, e)
      ]
    ]), this;
  }
  jt = function(e, t, n) {
    if (typeof e === _e.OBJECT ? (Mr(e, true) ? (typeof t === _e.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === _e.STRING && !Mr(t, true) && (n = t, t = void 0), n) if (typeof n.append === _e.FUNCTION) {
      var i = {};
      n.forEach(function(l, d) {
        i[String(d).toLowerCase()] = l;
      }), n = i;
    } else {
      var r = {};
      for (var o in n) n.hasOwnProperty(o) && (r[String(o).toLowerCase()] = n[o]);
      n = r;
    }
    if (!(this instanceof jt)) return new jt(e, t, n).getResult();
    var s = typeof e === _e.STRING ? e : n && n[ic] ? n[ic] : qe && qe.userAgent ? qe.userAgent : Jn, a = new Ru(n, true), c = t ? ay(mc, t) : mc, u = function(l) {
      return l == $n ? function() {
        return new wc(l, s, c, a).set("ua", s).set(Ke, this.getBrowser()).set(kt, this.getCPU()).set(St, this.getDevice()).set(ft, this.getEngine()).set(Qe, this.getOS()).get();
      } : function() {
        return new wc(l, s, c[l], a).parseUA().get();
      };
    };
    return Dt.call(this, [
      [
        "getBrowser",
        u(Ke)
      ],
      [
        "getCPU",
        u(kt)
      ],
      [
        "getDevice",
        u(St)
      ],
      [
        "getEngine",
        u(ft)
      ],
      [
        "getOS",
        u(Qe)
      ],
      [
        "getResult",
        u($n)
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
          return zi(l) && (s = kr(l, Zw)), this;
        }
      ]
    ]).setUA(s), this;
  };
  jt.VERSION = Xw;
  jt.BROWSER = ro([
    A,
    R,
    Hi,
    v
  ]);
  jt.CPU = ro([
    Be
  ]);
  jt.DEVICE = ro([
    _,
    S,
    v,
    mi,
    q,
    Te,
    ae,
    It,
    wi
  ]);
  jt.ENGINE = jt.OS = ro([
    A,
    R
  ]);
  var Ee = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(Ee || {});
  class uy {
    constructor() {
      __publicField(this, "parser");
      this.parser = new jt(navigator.userAgent);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? Ee.TAURI : this.parser.getDevice().type === "mobile" ? Ee.MOBILE_WEB : Ee.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), n = this.parser.getDevice(), i = this.parser.getBrowser(), r = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: navigator.userAgent,
        isMobile: n.type === "mobile",
        isTablet: n.type === "tablet",
        browser: i.name || void 0,
        os: r.name || void 0
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
        },
        sensors: {
          deviceOrientation: "DeviceOrientationEvent" in window,
          motion: "DeviceMotionEvent" in window,
          highAccuracy: false
        }
      };
      switch (t) {
        case Ee.TAURI:
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
            },
            sensors: {
              deviceOrientation: "DeviceOrientationEvent" in window,
              motion: "DeviceMotionEvent" in window,
              highAccuracy: false
            }
          };
        case Ee.MOBILE_WEB:
          return {
            ...n,
            geolocation: {
              ...n.geolocation,
              highAccuracy: false
            },
            permissions: {
              ...n.permissions,
              geolocation: true
            },
            sensors: {
              ...n.sensors,
              highAccuracy: true
            }
          };
        case Ee.WEB:
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
        case Ee.TAURI:
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
        case Ee.MOBILE_WEB:
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
        case Ee.WEB:
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
        return !t.environment || !t.capabilities ? m(new Ne("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), O(true));
      } catch (t) {
        return m(new Ne("Platform detection failed", void 0, t));
      }
    }
  }
  const js = new uy();
  Ob = function() {
    return js.getPlatformContext();
  };
  function fy(e, t, n, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function dy(e, t, n, i, r) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var hr;
  function hy(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function Se(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class py {
    get rid() {
      return fy(this, hr, "f");
    }
    constructor(t) {
      hr.set(this, void 0), dy(this, hr, t);
    }
    async close() {
      return Se("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  hr = /* @__PURE__ */ new WeakMap();
  var yc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(yc || (yc = {}));
  async function gy(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await Se("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function bc(e, t, n) {
    var i;
    const r = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return Se("plugin:event|listen", {
      event: e,
      target: r,
      handler: hy(t)
    }).then((o) => async () => gy(e, o));
  }
  async function my(e, t) {
    return await Dr.load(e, t);
  }
  class Dr extends py {
    constructor(t) {
      super(t);
    }
    static async load(t, n) {
      const i = await Se("plugin:store|load", {
        path: t,
        options: n
      });
      return new Dr(i);
    }
    static async get(t) {
      return await Se("plugin:store|get_store", {
        path: t
      }).then((n) => n ? new Dr(n) : null);
    }
    async set(t, n) {
      await Se("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: n
      });
    }
    async get(t) {
      const [n, i] = await Se("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return i ? n : void 0;
    }
    async has(t) {
      return await Se("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await Se("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await Se("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await Se("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await Se("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await Se("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await Se("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await Se("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await Se("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await Se("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, n) {
      return await bc("store://change", (i) => {
        i.payload.resourceId === this.rid && i.payload.key === t && n(i.payload.exists ? i.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await bc("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class ye extends Ln {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zn.STORAGE);
      this.code = n;
    }
  }
  var ge = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(ge || {});
  class ot extends Ln {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zn.GEOLOCATION);
      this.code = n;
    }
  }
  var De = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(De || {});
  class Fn extends Ln {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zn.GENERIC);
      this.code = n;
    }
  }
  var bn = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e))(bn || {});
  class wy {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return O(void 0);
      try {
        return this.store = await my(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, O(void 0);
      } catch (t) {
        return m(new ye("Failed to initialize Tauri storage", ge.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, n) {
      if (!this.store) return m(new ye("Tauri store not initialized", ge.NOT_INITIALIZED));
      try {
        return await this.store.set(t, n), O(void 0);
      } catch (i) {
        return m(new ye(`Failed to set value for key: ${t}`, ge.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.store) return m(new ye("Tauri store not initialized", ge.NOT_INITIALIZED));
      try {
        const n = await this.store.get(t);
        return O(n ?? null);
      } catch (n) {
        return m(new ye(`Failed to get value for key: ${t}`, ge.GET_FAILED, n));
      }
    }
    async save() {
      if (!this.store) return m(new ye("Tauri store not initialized", ge.NOT_INITIALIZED));
      try {
        return await this.store.save(), O(void 0);
      } catch (t) {
        return m(new ye("Failed to save store", ge.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return m(new ye("Tauri store not initialized", ge.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), n = {};
        for (const i of t) {
          const r = await this.store.get(i);
          n[i] = r;
        }
        return O(JSON.stringify(n, null, 2));
      } catch (t) {
        return m(new ye("Failed to export data to JSON", ge.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return m(new ye("Tauri store not initialized", ge.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const n of t) await this.store.delete(n);
        return O(void 0);
      } catch (t) {
        return m(new ye("Failed to clear store", ge.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return m(new ye("Tauri store not initialized", ge.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), O(void 0);
      } catch (n) {
        return m(new ye(`Failed to remove key: ${t}`, ge.REMOVE_FAILED, n));
      }
    }
  }
  class yy {
    constructor(t = "trackmaker-db", n = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = n;
    }
    async init() {
      if (this.initialized) return O(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, O(void 0);
      } catch (t) {
        return m(new ye("Failed to initialize Web storage", ge.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, n) => {
        const i = indexedDB.open(this.dbName, 1);
        i.onupgradeneeded = (r) => {
          const o = r.target.result;
          o.objectStoreNames.contains(this.storeName) || o.createObjectStore(this.storeName);
        }, i.onsuccess = (r) => {
          t(r.target.result);
        }, i.onerror = (r) => {
          n(r.target.error);
        };
      });
    }
    async set(t, n) {
      if (!this.db) return m(new ye("Database not initialized", ge.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((r, o) => {
          const s = i.put(We(n), t);
          s.onsuccess = () => r(), s.onerror = () => o(new Error("Failed to set value"));
        })), O(void 0);
      } catch (i) {
        return m(new ye(`Failed to set value for key: ${t}`, ge.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.db) return m(new ye("Database not initialized", ge.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (i) => new Promise((r, o) => {
          const s = i.get(t);
          s.onsuccess = () => r(s.result), s.onerror = () => o(new Error("Failed to get value"));
        }));
        return O(n);
      } catch (n) {
        return m(new ye(`Failed to get value for key: ${t}`, ge.GET_FAILED, n));
      }
    }
    async save() {
      return O(void 0);
    }
    async exportToJson() {
      if (!this.db) return m(new ye("Database not initialized", ge.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (n) => new Promise((i, r) => {
          const o = n.getAll();
          o.onsuccess = () => {
            const s = o.result.reduce((a, c, u) => (a[u] = c, a), {});
            i(s);
          }, o.onerror = () => r(new Error("Failed to export data"));
        }));
        return O(JSON.stringify(t, null, 2));
      } catch (t) {
        return m(new ye("Failed to export data to JSON", ge.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return m(new ye("Database not initialized", ge.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((n, i) => {
          const r = t.clear();
          r.onsuccess = () => n(), r.onerror = () => i(new Error("Failed to clear store"));
        })), O(void 0);
      } catch (t) {
        return m(new ye("Failed to clear store", ge.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return m(new ye("Database not initialized", ge.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((i, r) => {
          const o = n.delete(t);
          o.onsuccess = () => i(), o.onerror = () => r(new Error("Failed to remove key"));
        })), O(void 0);
      } catch (n) {
        return m(new ye(`Failed to remove key: ${t}`, ge.REMOVE_FAILED, n));
      }
    }
    executeTransaction(t, n) {
      return new Promise((i, r) => {
        if (!this.db) {
          r(new Error("Database not initialized"));
          return;
        }
        const o = this.db.transaction(this.storeName, t), s = o.objectStore(this.storeName);
        n(s).then(i).catch(r), o.onerror = () => {
          r(new Error("Transaction failed"));
        };
      });
    }
  }
  class by {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init() {
      if (this.initialized) return O(void 0);
      try {
        return await this.injectTauriProvider(), this.initialized = true, O(void 0);
      } catch (t) {
        return m(new ot("Failed to initialize Tauri geolocation provider", De.INITIALIZATION_FAILED, t));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new vy(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return O(t.state);
      } catch (t) {
        return m(new ot("Failed to get permission status", De.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(O("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(O("denied")) : t(O("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), O("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? O("denied") : m(new ot("Failed to request permission", De.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return O(this.convertToGeolocationPosition(t));
      } catch (t) {
        return m(new ot("Failed to get current position", De.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await Se(this.tauriHandlerName);
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
      }, i = {
        coords: {
          ...n,
          toJSON: () => JSON.stringify(n)
        },
        timestamp: Date.now()
      };
      return {
        ...i,
        toJSON: () => JSON.stringify(i)
      };
    }
    async watchPosition(t) {
      try {
        const n = window.setInterval(async () => {
          try {
            const i = await this.getCurrentPosition();
            i.isOk() && t(i.value);
          } catch (i) {
            console.error("Error in watch position:", i);
          }
        }, 1e4);
        return this.watchCallbacks.set(n, n), O(n);
      } catch (n) {
        return m(new ot("Failed to start watching position", De.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), O(void 0);
      } catch (n) {
        return m(new ot("Failed to clear watch", De.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class vy {
    constructor(t) {
      __publicField(this, "tauriHandlerName");
      this.tauriHandlerName = t;
    }
    getCurrentPosition(t, n) {
      this.getTauriPosition().then(t).catch((i) => {
        n == null ? void 0 : n(this.createPositionError(i));
      });
    }
    watchPosition(t, n, i) {
      const r = (i == null ? void 0 : i.maximumAge) ?? 1e4;
      return window.setInterval(() => {
        this.getTauriPosition().then(t).catch((s) => {
          n == null ? void 0 : n(this.createPositionError(s));
        });
      }, r);
    }
    clearWatch(t) {
      clearInterval(t);
    }
    async getTauriPosition() {
      const t = await Se(this.tauriHandlerName), n = {
        latitude: t.point.latitude,
        longitude: t.point.longitude,
        altitude: null,
        accuracy: 0,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      }, i = {
        coords: {
          ...n,
          toJSON: () => JSON.stringify(n)
        },
        timestamp: Date.now()
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
  class Ey {
    constructor() {
      __publicField(this, "initialized", false);
    }
    async init() {
      return this.initialized ? O(void 0) : this.isSupported() ? (this.initialized = true, O(void 0)) : m(new ot("Geolocation is not supported by this browser", De.UNSUPPORTED));
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return O(t.state);
      } catch (t) {
        return m(new ot("Failed to get permission status", De.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(O("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(O("denied")) : t(O("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), O("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? O("denied") : m(new ot("Failed to request permission", De.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return m(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((n) => {
          t(O(n));
        }, (n) => {
          let i;
          const r = n.message;
          switch (n.code) {
            case n.PERMISSION_DENIED:
              i = De.PERMISSION_DENIED;
              break;
            case n.POSITION_UNAVAILABLE:
              i = De.POSITION_UNAVAILABLE;
              break;
            case n.TIMEOUT:
              i = De.TIMEOUT;
              break;
            default:
              i = De.POSITION_UNAVAILABLE;
          }
          t(m(new ot(r, i, new Error(n.message))));
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
        if (n.isErr()) return m(n.error);
      }
      try {
        const n = navigator.geolocation.watchPosition(t, (i) => {
          console.error("Geolocation watch error:", i);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 1e4
        });
        return O(n);
      } catch (n) {
        return m(new ot("Failed to start watching position", De.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return navigator.geolocation.clearWatch(t), O(void 0);
      } catch (n) {
        return m(new ot("Failed to clear watch", De.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class vc {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "isWatching", false);
      __publicField(this, "listeners", /* @__PURE__ */ new Map());
      __publicField(this, "nextListenerId", 0);
      __publicField(this, "lastReading", null);
      __publicField(this, "boundHandleOrientationEvent");
      this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);
    }
    async init() {
      return this.initialized ? O(void 0) : this.isSupported() ? (this.initialized = true, O(void 0)) : m(new Ne("Device orientation is not supported by this browser"));
    }
    async start() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return m(t.error);
      }
      if (this.isWatching) return O(void 0);
      try {
        return window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = true, O(void 0);
      } catch (t) {
        return m(new Ne("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return O(void 0);
      try {
        return window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = false, this.lastReading = null, O(void 0);
      } catch (t) {
        return m(new Ne("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return m(t.error);
      }
      return O(this.lastReading);
    }
    onOrientationChange(t) {
      const n = this.nextListenerId++;
      return this.listeners.set(n, t), !this.isWatching && this.listeners.size === 1 && this.start().catch(console.error), this.lastReading && t(this.lastReading), n;
    }
    removeEventListener(t) {
      return this.listeners.delete(t) && this.listeners.size === 0 && this.stop(), O(void 0);
    }
    isSupported() {
      return "DeviceOrientationEvent" in window;
    }
    handleOrientationEvent(t) {
      if (t.alpha === null && t.beta === null && t.gamma === null) return;
      const n = {
        alpha: t.alpha ?? 0,
        beta: t.beta ?? 0,
        gamma: t.gamma ?? 0,
        webkitCompassHeading: t.webkitCompassHeading,
        timestamp: Date.now()
      };
      this.lastReading = n;
      for (const i of this.listeners.values()) try {
        i(n);
      } catch (r) {
        console.error("Error in device orientation callback:", r);
      }
    }
  }
  class Ec {
    constructor() {
      __publicField(this, "initialized", false);
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
    }
    async init() {
      return this.initialized ? O(void 0) : this.isSupported() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.handleOrientationEvent.bind(this)), this.initialized = true, O(void 0)) : m(new Ne("Device motion is not supported by this browser"));
    }
    async startAcceleration(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return m(n.error);
      }
      if (this.isAccelerationActive) return O(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isAccelerationActive = true, O(void 0);
      } catch (n) {
        return m(new Ne("Failed to start acceleration monitoring", void 0, n));
      }
    }
    async startGyroscope(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return m(n.error);
      }
      if (this.isGyroscopeActive) return O(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isGyroscopeActive = true, O(void 0);
      } catch (n) {
        return m(new Ne("Failed to start gyroscope monitoring", void 0, n));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return O(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.handleMotionEvent.bind(this), true), O(void 0);
      } catch (t) {
        return m(new Ne("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return O(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.handleMotionEvent.bind(this), true), O(void 0);
      } catch (t) {
        return m(new Ne("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return m(t.error);
      }
      return O(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return m(t.error);
      }
      return O(this.lastGyroscopeReading);
    }
    onAccelerationReading(t) {
      const n = this.nextListenerId++;
      return this.accelerationListeners.set(n, t), this.lastAccelerationReading && t(this.lastAccelerationReading), n;
    }
    onGyroscopeReading(t) {
      const n = this.nextListenerId++;
      return this.gyroscopeListeners.set(n, t), this.lastGyroscopeReading && t(this.lastGyroscopeReading), n;
    }
    removeEventListener(t) {
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), O(void 0);
    }
    isSupported() {
      return "DeviceMotionEvent" in window;
    }
    handleOrientationEvent(t) {
      t.alpha !== null && t.beta !== null && t.gamma !== null && (this.deviceOrientation = {
        alpha: t.alpha,
        beta: t.beta,
        gamma: t.gamma
      });
    }
    handleMotionEvent(t) {
      if (this.isAccelerationActive) {
        let n = t.acceleration, i = "linear";
        if ((!n || n.x === null || n.y === null || n.z === null) && (n = t.accelerationIncludingGravity, i = "including_gravity"), n && n.x !== null && n.y !== null && n.z !== null) {
          let r = {
            x: n.x,
            y: n.y,
            z: n.z,
            timestamp: Date.now()
          };
          if (i === "including_gravity" && this.deviceOrientation) {
            const o = this.estimateGravityVector(this.deviceOrientation);
            r.x -= o.x, r.y -= o.y, r.z -= o.z;
          }
          this.normalizeAccelerationToENU && this.deviceOrientation && (r = this.normalizeToENU(r, this.deviceOrientation)), this.lastAccelerationReading = r;
          for (const o of this.accelerationListeners.values()) try {
            o(r);
          } catch (s) {
            console.error("Error in acceleration callback:", s);
          }
        }
      }
      if (this.isGyroscopeActive && t.rotationRate) {
        const n = t.rotationRate;
        if (n.alpha !== null && n.beta !== null && n.gamma !== null) {
          let i = {
            x: n.alpha,
            y: n.beta,
            z: n.gamma,
            timestamp: Date.now()
          };
          this.normalizeGyroscopeToENU && this.deviceOrientation && (i = this.normalizeToENU(i, this.deviceOrientation)), this.lastGyroscopeReading = i;
          for (const r of this.gyroscopeListeners.values()) try {
            r(i);
          } catch (o) {
            console.error("Error in gyroscope callback:", o);
          }
        }
      }
    }
    normalizeToENU(t, n) {
      const i = n.alpha * Math.PI / 180, r = n.beta * Math.PI / 180, o = n.gamma * Math.PI / 180, s = Math.cos(i), a = Math.sin(i), c = Math.cos(r), u = Math.sin(r), l = Math.cos(o), d = Math.sin(o), p = t.x * s - t.y * a, g = t.x * a + t.y * s, b = t.z, w = p * c + b * u, P = g, E = -p * u + b * c, I = w, M = P * l - E * d, T = P * d + E * l;
      return {
        x: I,
        y: M,
        z: T,
        timestamp: t.timestamp
      };
    }
    estimateGravityVector(t) {
      const i = t.alpha * Math.PI / 180, r = t.beta * Math.PI / 180, o = t.gamma * Math.PI / 180, s = Math.cos(i), a = Math.sin(i), c = Math.sin(r), u = Math.cos(o), l = Math.sin(o), d = 9.81 * (c * u), p = 9.81 * (a * c * l + s * u), g = 9.81 * (s * c * l - a * u);
      return {
        x: d,
        y: p,
        z: g,
        timestamp: Date.now()
      };
    }
  }
  const _In = class _In {
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
    static getInstance(t) {
      if (!_In.instance) {
        const n = js.getPlatformContext(), i = new _In(n), r = i.initializeProviders(t);
        if (r.isErr()) return m(r.error);
        _In.instance = i;
      }
      return O(_In.instance);
    }
    initializeProviders(t) {
      try {
        return this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage), this.geolocationProvider = this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.imuProvider = this.createIMUProvider(), this.deviceOrientationProvider = this.createDeviceOrientationProvider(), this.initialized = true, O(void 0);
      } catch (n) {
        return m(new Fn("Failed to initialize platform providers", bn.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case Ee.TAURI:
          return new wy((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case Ee.WEB:
        case Ee.MOBILE_WEB:
        default:
          return new yy((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    createGeolocationProvider(t) {
      switch (this.context.environment) {
        case Ee.TAURI:
          return new by((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
        case Ee.WEB:
        case Ee.MOBILE_WEB:
        default:
          return new Ey();
      }
    }
    createFileProvider() {
      return {
        init: async () => m(new Ne("File provider not implemented")),
        readFile: async () => m(new Ne("File provider not implemented")),
        writeFile: async () => m(new Ne("File provider not implemented")),
        deleteFile: async () => m(new Ne("File provider not implemented")),
        listFiles: async () => m(new Ne("File provider not implemented")),
        exists: async () => m(new Ne("File provider not implemented")),
        isSupported: () => false
      };
    }
    createIMUProvider() {
      switch (this.context.environment) {
        case Ee.TAURI:
          return new Ec();
        case Ee.WEB:
        case Ee.MOBILE_WEB:
        default:
          return new Ec();
      }
    }
    createDeviceOrientationProvider() {
      switch (this.context.environment) {
        case Ee.TAURI:
          return new vc();
        case Ee.WEB:
        case Ee.MOBILE_WEB:
        default:
          return new vc();
      }
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? O(this.storageProvider) : m(new Fn("Storage provider not initialized", bn.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? O(this.geolocationProvider) : m(new Fn("Geolocation provider not initialized", bn.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? O(this.fileProvider) : m(new Fn("File provider not initialized", bn.DETECTION_FAILED));
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
      _In.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? O(this.imuProvider) : m(new Fn("IMU provider not initialized", bn.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? O(this.deviceOrientationProvider) : m(new Fn("Device orientation provider not initialized", bn.DETECTION_FAILED));
    }
  };
  __publicField(_In, "instance", null);
  let In = _In;
  Gi = function(e) {
    return In.getInstance(e);
  };
  Iy = function() {
    return js.detectEnvironment() === Ee.TAURI;
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
        return t.isOk() ? (this.currentPermissionState = t.value, O(t.value)) : m(new xn("Failed to get permission status from platform provider", t.error));
      } catch (t) {
        return m(new xn("Platform provider permission check error", t));
      }
      if (!navigator.geolocation) return m(new Jw("Geolocation is not supported by this browser"));
      try {
        if (!navigator.permissions) return this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return this.currentPermissionState = t.state, O(t.state);
      } catch (t) {
        return m(new xn("Failed to get permission status", t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(O("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(O("denied")) : t(O("prompt"));
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
        return n.isOk() ? (this.currentPermissionState = n.value, O(n.value)) : m(new xn("Failed to request permission from platform provider", n.error));
      } catch (n) {
        return m(new xn("Platform provider permission request error", n));
      }
      if (!navigator.permissions) return this.getPermissionStatus();
      try {
        const n = await navigator.permissions.query({
          name: "geolocation"
        });
        if (n.state === "prompt" && t && await t(n.state)) {
          const r = await this.fallbackPermissionCheck();
          if (r.isOk()) return this.currentPermissionState = r.value, O(r.value);
        }
        return this.currentPermissionState = n.state, O(n.state);
      } catch (n) {
        return m(new xn("Failed to request permission", n));
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
        } catch (i) {
          console.error("Error in permission change listener:", i);
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
  class or {
    constructor(t, n) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      this.latitude = t, this.longitude = n;
    }
    toLngLatLike() {
      return [
        this.longitude,
        this.latitude
      ];
    }
  }
  var Pu = ((e) => (e[e.PERMISSION_DENIED = 1] = "PERMISSION_DENIED", e[e.POSITION_UNAVAILABLE = 2] = "POSITION_UNAVAILABLE", e[e.TIMEOUT = 3] = "TIMEOUT", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.IOS_HTTPS_REQUIRED = 5] = "IOS_HTTPS_REQUIRED", e[e.FIREFOX_PERMISSION_ISSUE = 6] = "FIREFOX_PERMISSION_ISSUE", e))(Pu || {});
  const nn = [];
  function Ty(e) {
    const t = {
      id: (nn.length > 0 ? nn[nn.length - 1].id : 0) + 1,
      callback: e
    };
    return nn.push(t), t.id;
  }
  function Oy(e) {
    nn.splice(nn.findIndex((t) => t.id === e), 1);
  }
  let sr = -1, Ic = {
    latitude: 0,
    longitude: 0
  };
  const _c = "https://ipapi.co/json/";
  class Ay {
    async getPermissionStatus() {
      try {
        return await fetch(_c), "granted";
      } catch {
        return "denied";
      }
    }
    async fetchRaw(t = 1e4) {
      const n = new Promise(async (r, o) => {
        try {
          const s = await fetch(_c);
          if (!s.ok) throw new Error(`HTTP error! Status: ${s.status}`);
          r(s.json());
        } catch {
          o(new Error("Failed to fetch IP geolocation data"));
        }
      }), i = new Promise((r, o) => {
        setTimeout(() => o(new Error("Request IP geolocation data timed out")), t);
      });
      return Promise.race([
        n,
        i
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
      return new Promise((i) => {
        if (sr === -1) {
          const r = () => {
            this.getCurrentPosition().then((o) => {
              Fw(o, Ic) || (console.info("[geolocation] IP geolocation position updated"), nn.forEach((s) => s.callback(o)), Ic = We(o));
            }).catch((o) => {
              throw console.error("[geolocation] Error in IP geolocation watch:", o), new Error(`Error while watching the geolocation [IP]. Code: ${Pu.UNKNOWN}, Msg: ${o}`);
            });
          };
          sr = setInterval(() => r(), 2e4), console.info("[geolocation] IP geolocation watch interval started"), r();
        }
        i(n);
      });
    }
    clearWatch(t) {
      console.info("[geolocation] Clearing IP geolocation watch handler"), Oy(t), nn.length === 0 && (console.info("[geolocation] Stopping IP geolocation watch interval"), clearInterval(sr), sr = -1);
    }
  }
  class Sy {
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
      this.permissionService = t || new _y(), this.ipBackend = new Ay();
    }
    async initialize(t) {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), O(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with location trail strategy");
      try {
        const n = Gi();
        if (n.isErr()) return console.warn("[GeolocationManager] Failed to get platform services, will try IP backend"), await this.initializeWithIPBackend();
        const i = n.value.getGeolocation();
        if (i.isErr()) return console.warn("[GeolocationManager] Failed to get geolocation provider, will try IP backend"), await this.initializeWithIPBackend();
        if (this.platformGeolocationProvider = i.value, (await this.platformGeolocationProvider.init()).isErr()) return console.warn("[GeolocationManager] Failed to initialize platform provider, will try IP backend"), await this.initializeWithIPBackend();
        this.permissionService.setPlatformProvider(this.platformGeolocationProvider);
        const o = await this.permissionService.getPermissionStatus();
        if (o.isErr()) return Oe(o.error, "GeolocationManager.initialize.permission"), console.warn("[GeolocationManager] Failed to get permission status, will try IP backend"), await this.initializeWithIPBackend();
        const s = o.value;
        if (s === "prompt" && t && await t(s)) {
          const u = await this.platformGeolocationProvider.requestPermission();
          if (u.isErr()) return Oe(u.error, "GeolocationManager.initialize.requestPermission"), console.warn("[GeolocationManager] Failed to request permission, will try IP backend"), await this.initializeWithIPBackend();
        }
        console.info("[GeolocationManager] Attempting to get location via platform provider (GPS)");
        const a = await this.tryGetGPSLocation();
        if (a.isOk()) console.info("[GeolocationManager] Successfully got location via GPS, using platform provider"), this.currentBackend = "platform", this.lastKnownLocation = a.value;
        else return console.warn("[GeolocationManager] Failed to get location via GPS, falling back to IP backend"), await this.initializeWithIPBackend();
        return this.permissionService.addPermissionChangeListener(async (c) => {
          console.info(`[GeolocationManager] Permission changed to: ${c}`), c === "denied" && this.isWatching && this.watchId !== null && this.stopLocationUpdates(this.watchId);
        }), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using platform provider"), O(void 0);
      } catch {
        return console.warn("[GeolocationManager] Exception during platform initialization, will try IP backend"), await this.initializeWithIPBackend();
      }
    }
    async tryGetGPSLocation() {
      if (!this.platformGeolocationProvider) return m(new ve("No platform geolocation provider available", "no_platform_provider"));
      try {
        const t = await this.platformGeolocationProvider.getCurrentPosition();
        if (t.isOk()) {
          const n = t.value;
          return O(new or(n.coords.latitude, n.coords.longitude));
        } else return m(new ve("Failed to get location from platform provider", "platform_location_failed", t.error));
      } catch (t) {
        return m(new ve("Exception while getting location from platform provider", "platform_location_exception", t));
      }
    }
    async initializeWithIPBackend() {
      if (console.info("[GeolocationManager] Initializing with IP backend as fallback"), !this.ipBackend) return m(new ve("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Successfully got location via IP backend"), this.currentBackend = "ip", this.lastKnownLocation = t, this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using IP backend"), O(void 0);
      } catch (t) {
        const n = new ve("Failed to initialize geolocation manager with IP backend", "ip_backend_failed", t);
        return Oe(n, "GeolocationManager.initializeWithIPBackend"), m(n);
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new ve("Geolocation manager not initialized", "not_initialized");
        return Oe(t, "GeolocationManager.getCurrentLocation"), m(t);
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
      return m(new ve("No working geolocation backend available", "no_working_backend"));
    }
    async getLocationFromPlatformProvider() {
      if (!this.platformGeolocationProvider) return m(new ve("Platform geolocation provider not available", "platform_provider_unavailable"));
      const t = await this.platformGeolocationProvider.getCurrentPosition();
      if (t.isOk()) {
        const n = t.value, i = new or(n.coords.latitude, n.coords.longitude);
        return console.info("[GeolocationManager] Location retrieved from platform provider"), this.doLocationUpdate(i), O(i);
      } else return Oe(t.error, "GeolocationManager.getLocationFromPlatformProvider"), m(new ve("Failed to get location from platform provider", "platform_provider_failed", t.error));
    }
    async getLocationFromIPBackend() {
      if (!this.ipBackend) return m(new ve("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Location retrieved from IP backend"), this.doLocationUpdate(t), O(t);
      } catch (t) {
        const n = Ze(t, "Failed to get location from IP backend");
        return Oe(n, "GeolocationManager.getLocationFromIPBackend"), m(new ve("Failed to get location from IP backend", "ip_backend_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new ve("Geolocation manager not initialized", "not_initialized");
        return Oe(n, "GeolocationManager.startLocationUpdates"), m(n);
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
      return m(new ve("No working geolocation backend available for location updates", "no_working_backend_for_updates"));
    }
    async startPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return m(new ve("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = await this.platformGeolocationProvider.watchPosition((i) => {
        const r = new or(i.coords.latitude, i.coords.longitude);
        this.doLocationUpdate(r), t(r);
      });
      return n.isOk() ? (console.info("[GeolocationManager] Location updates started via platform provider"), this.isWatching = true, this.watchId = n.value, O(n.value)) : m(new ve("Failed to start location updates via platform provider", "platform_watch_failed", n.error));
    }
    async startIPLocationUpdates(t) {
      if (!this.ipBackend) return m(new ve("IP backend not available", "ip_backend_unavailable"));
      try {
        const n = await this.ipBackend.watchPosition((i) => {
          this.lastKnownLocation = i, this.doLocationUpdate(i), t(i);
        });
        return console.info("[GeolocationManager] Location updates started via IP backend"), this.isWatching = true, this.watchId = n, O(n);
      } catch (n) {
        const i = Ze(n, "Failed to start location updates via IP backend");
        return Oe(i, "GeolocationManager.startIPLocationUpdates"), m(new ve("Failed to start location updates via IP backend", "ip_watch_failed", i));
      }
    }
    stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new ve("Geolocation manager not initialized", "not_initialized");
        return Oe(n, "GeolocationManager.stopLocationUpdates"), m(n);
      }
      if (console.info("[GeolocationManager] Stopping location updates"), this.currentBackend === "platform" && this.platformGeolocationProvider) return this.stopPlatformLocationUpdates(t);
      if (this.currentBackend === "ip" && this.ipBackend) return this.stopIPLocationUpdates(t);
      {
        let n = null;
        if (this.platformGeolocationProvider) {
          const i = this.stopPlatformLocationUpdates(t);
          if (i.isOk()) return i;
          n = i.error;
        }
        if (this.ipBackend) {
          const i = this.stopIPLocationUpdates(t);
          if (i.isOk()) return i;
          n = i.error;
        }
        return m(n || new ve("No working geolocation backend available for stopping updates", "no_working_backend_for_stop"));
      }
    }
    stopPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return m(new ve("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = this.platformGeolocationProvider.clearWatch(t);
      return n.isOk() ? (console.info("[GeolocationManager] Location updates stopped via platform provider"), this.isWatching = false, this.watchId = null, O(void 0)) : m(new ve("Failed to stop location updates via platform provider", "platform_clear_watch_failed", n.error));
    }
    stopIPLocationUpdates(t) {
      if (!this.ipBackend) return m(new ve("IP backend not available", "ip_backend_unavailable"));
      try {
        return this.ipBackend.clearWatch(t), console.info("[GeolocationManager] Location updates stopped via IP backend"), this.isWatching = false, this.watchId = null, O(void 0);
      } catch (n) {
        const i = Ze(n, "Failed to stop location updates via IP backend");
        return Oe(i, "GeolocationManager.stopIPLocationUpdates"), m(new ve("Failed to stop location updates via IP backend", "ip_clear_watch_failed", i));
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
      return this.lastKnownLocation ? this.lastKnownLocation : new or(0, 0);
    }
    addLocationListener(t) {
      const n = +`${Date.now()} + ${Math.floor(Math.random() * 1e4)}`;
      return this.locationUpdateCallbacks.set(n, t), n;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    doLocationUpdate(t) {
      this.lastKnownLocation = We(t), this.locationUpdateCallbacks.forEach((n) => n(We(t)));
    }
    getPermissionStatus() {
      return this.permissionService.currentPermission;
    }
    async refreshBackend() {
      return O(void 0);
    }
  }
  class Ry extends Ln {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zn.UPDATE_SERVICE);
      this.code = n, this.name = "ImuError";
    }
  }
  class fe extends Ry {
    constructor(t, n, i) {
      super(t, n, i), this.name = "ImuUpdateServiceError";
    }
  }
  class Py {
    constructor() {
      __publicField(this, "orientationProvider", null);
      __publicField(this, "motionProvider", null);
      __publicField(this, "isInitialized", false);
      __publicField(this, "orientationListeners", /* @__PURE__ */ new Map());
      __publicField(this, "orientationListenerCount", 0);
      __publicField(this, "lastKnownOrientation", null);
      __publicField(this, "accelerationListeners", /* @__PURE__ */ new Map());
      __publicField(this, "accelerationListenerCount", 0);
      __publicField(this, "lastKnownAcceleration", null);
      __publicField(this, "gyroscopeListeners", /* @__PURE__ */ new Map());
      __publicField(this, "gyroscopeListenerCount", 0);
      __publicField(this, "lastKnownGyroscope", null);
    }
    async initialize() {
      if (this.isInitialized) return console.info("[ImuOrientationManager] Already initialized"), O(void 0);
      console.info("[ImuOrientationManager] Initializing IMU and orientation services");
      try {
        const t = Gi();
        if (t.isErr()) return m(new fe("Failed to get platform services", "platform_services_failed", t.error));
        const n = t.value.getDeviceOrientation();
        if (n.isOk()) {
          this.orientationProvider = n.value;
          const r = await this.orientationProvider.init();
          if (r.isErr()) console.warn("[ImuOrientationManager] Failed to initialize orientation provider:", r.error);
          else {
            const o = await this.orientationProvider.getCurrentOrientation();
            o.isOk() && o.value && (this.lastKnownOrientation = o.value);
          }
        } else console.warn("[ImuOrientationManager] No orientation provider available");
        const i = t.value.getIMU();
        if (i.isOk()) {
          this.motionProvider = i.value;
          const r = await this.motionProvider.init();
          if (r.isErr()) console.warn("[ImuOrientationManager] Failed to initialize motion provider:", r.error);
          else {
            const o = await this.motionProvider.getAccelerationReading();
            o.isOk() && o.value && (this.lastKnownAcceleration = o.value);
            const s = await this.motionProvider.getGyroscopeReading();
            s.isOk() && s.value && (this.lastKnownGyroscope = s.value);
          }
        } else console.warn("[ImuOrientationManager] No motion provider available");
        return this.isInitialized = true, console.info("[ImuOrientationManager] Initialization complete"), O(void 0);
      } catch (t) {
        const n = Ze(t, "Exception during IMU initialization");
        return Oe(n, "ImuOrientationManager.initialize"), m(new fe("Initialization exception", "initialization_exception", n));
      }
    }
    async getCurrentOrientation() {
      if (!this.isInitialized) return m(new fe("Manager not initialized", "not_initialized"));
      if (!this.orientationProvider) return m(new fe("Orientation provider unavailable", "no_orientation_provider"));
      try {
        const t = await this.orientationProvider.getCurrentOrientation();
        return t.isOk() ? (t.value && (this.lastKnownOrientation = We(t.value), this.notifyOrientationListeners(t.value)), O(t.value)) : m(new fe("Failed to get orientation", "get_orientation_failed", t.error));
      } catch (t) {
        const n = Ze(t, "Exception getting orientation");
        return Oe(n, "ImuOrientationManager.getCurrentOrientation"), m(new fe("Orientation exception", "orientation_exception", n));
      }
    }
    async startOrientationUpdates(t) {
      if (!this.isInitialized) {
        const n = await this.initialize();
        if (n.isErr()) return m(n.error);
      }
      if (!this.orientationProvider) return m(new fe("Orientation provider unavailable", "no_orientation_provider"));
      try {
        if (this.orientationListenerCount === 0) {
          const r = await this.orientationProvider.start();
          if (r.isErr()) return m(new fe("Failed to start orientation provider", "start_orientation_failed", r.error));
        }
        const n = (r) => {
          this.doOrientationUpdate(r), t(r);
        }, i = this.orientationProvider.onOrientationChange(n);
        return this.orientationListeners.set(i, t), this.orientationListenerCount++, console.info("[ImuOrientationManager] Orientation updates started"), O(i);
      } catch (n) {
        const i = Ze(n, "Exception starting orientation updates");
        return Oe(i, "ImuOrientationManager.startOrientationUpdates"), m(new fe("Start orientation exception", "start_orientation_exception", i));
      }
    }
    stopOrientationUpdates(t) {
      if (!this.orientationProvider) return O(void 0);
      try {
        const n = this.orientationProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove orientation listener from provider:", n.error), this.orientationListeners.delete(t), this.orientationListenerCount > 0 && this.orientationListenerCount--, this.orientationListenerCount === 0 && (this.orientationProvider.stop(), console.info("[ImuOrientationManager] Orientation provider stopped")), console.info("[ImuOrientationManager] Orientation listener removed"), O(void 0);
      } catch (n) {
        const i = Ze(n, "Exception stopping orientation update");
        return Oe(i, "ImuOrientationManager.stopOrientationUpdates"), m(new fe("Stop orientation exception", "stop_orientation_exception", i));
      }
    }
    isOrientationServiceRunning() {
      return this.orientationListenerCount > 0;
    }
    getLastKnownOrientation() {
      return this.lastKnownOrientation ? We(this.lastKnownOrientation) : null;
    }
    async getCurrentAcceleration() {
      if (!this.isInitialized) return m(new fe("Manager not initialized", "not_initialized"));
      if (!this.motionProvider) return m(new fe("Motion provider unavailable", "no_motion_provider"));
      try {
        const t = await this.motionProvider.getAccelerationReading();
        return t.isOk() ? (t.value && (this.lastKnownAcceleration = We(t.value), this.notifyAccelerationListeners(t.value)), O(t.value)) : m(new fe("Failed to get acceleration", "get_acceleration_failed", t.error));
      } catch (t) {
        const n = Ze(t, "Exception getting acceleration");
        return Oe(n, "ImuOrientationManager.getCurrentAcceleration"), m(new fe("Acceleration exception", "acceleration_exception", n));
      }
    }
    async startAccelerationUpdates(t = {}, n) {
      if (!this.isInitialized) {
        const i = await this.initialize();
        if (i.isErr()) return m(i.error);
      }
      if (!this.motionProvider) return m(new fe("Motion provider unavailable", "no_motion_provider"));
      try {
        if (this.accelerationListenerCount === 0) {
          const o = await this.motionProvider.startAcceleration(t);
          if (o.isErr()) return m(new fe("Failed to start acceleration provider", "start_acceleration_failed", o.error));
        }
        const i = (o) => {
          if (!this.isValidIMUReading(o)) {
            console.warn("[ImuOrientationManager] Invalid acceleration data received:", o);
            return;
          }
          this.doAccelerationUpdate(o);
          try {
            n(o);
          } catch (s) {
            console.error("[ImuOrientationManager] Error in user acceleration callback:", s);
          }
        }, r = this.motionProvider.onAccelerationReading(i);
        return this.accelerationListeners.set(r, n), this.accelerationListenerCount++, console.info("[ImuOrientationManager] Acceleration updates started"), O(r);
      } catch (i) {
        const r = Ze(i, "Exception starting acceleration updates");
        return Oe(r, "ImuOrientationManager.startAccelerationUpdates"), m(new fe("Start acceleration exception", "start_acceleration_exception", r));
      }
    }
    stopAccelerationUpdates(t) {
      if (!this.motionProvider) return O(void 0);
      try {
        const n = this.motionProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove acceleration listener from provider:", n.error), this.accelerationListeners.delete(t), this.accelerationListenerCount > 0 && this.accelerationListenerCount--, this.accelerationListenerCount === 0 && (this.motionProvider.stopAcceleration(), this.lastKnownAcceleration = null, console.info("[ImuOrientationManager] Acceleration provider stopped")), console.info("[ImuOrientationManager] Acceleration listener removed"), O(void 0);
      } catch (n) {
        const i = Ze(n, "Exception stopping acceleration update");
        return Oe(i, "ImuOrientationManager.stopAccelerationUpdates"), m(new fe("Stop acceleration exception", "stop_acceleration_exception", i));
      }
    }
    isAccelerationServiceRunning() {
      return this.accelerationListenerCount > 0;
    }
    getLastKnownAcceleration() {
      return this.lastKnownAcceleration ? We(this.lastKnownAcceleration) : null;
    }
    async getCurrentGyroscope() {
      if (!this.isInitialized) return m(new fe("Manager not initialized", "not_initialized"));
      if (!this.motionProvider) return m(new fe("Motion provider unavailable", "no_motion_provider"));
      try {
        const t = await this.motionProvider.getGyroscopeReading();
        return t.isOk() ? (t.value && (this.lastKnownGyroscope = We(t.value), this.notifyGyroscopeListeners(t.value)), O(t.value)) : m(new fe("Failed to get gyroscope", "get_gyroscope_failed", t.error));
      } catch (t) {
        const n = Ze(t, "Exception getting gyroscope");
        return Oe(n, "ImuOrientationManager.getCurrentGyroscope"), m(new fe("Gyroscope exception", "gyroscope_exception", n));
      }
    }
    async startGyroscopeUpdates(t = {}, n) {
      if (!this.isInitialized) {
        const i = await this.initialize();
        if (i.isErr()) return m(i.error);
      }
      if (!this.motionProvider) return m(new fe("Motion provider unavailable", "no_motion_provider"));
      try {
        if (this.gyroscopeListenerCount === 0) {
          const o = await this.motionProvider.startGyroscope(t);
          if (o.isErr()) return m(new fe("Failed to start gyroscope provider", "start_gyroscope_failed", o.error));
        }
        const i = (o) => {
          if (!this.isValidIMUReading(o)) {
            console.warn("[ImuOrientationManager] Invalid gyroscope data received:", o);
            return;
          }
          this.doGyroscopeUpdate(o);
          try {
            n(o);
          } catch (s) {
            console.error("[ImuOrientationManager] Error in user gyroscope callback:", s);
          }
        }, r = this.motionProvider.onGyroscopeReading(i);
        return this.gyroscopeListeners.set(r, n), this.gyroscopeListenerCount++, console.info("[ImuOrientationManager] Gyroscope updates started"), O(r);
      } catch (i) {
        const r = Ze(i, "Exception starting gyroscope updates");
        return Oe(r, "ImuOrientationManager.startGyroscopeUpdates"), m(new fe("Start gyroscope exception", "start_gyroscope_exception", r));
      }
    }
    stopGyroscopeUpdates(t) {
      if (!this.motionProvider) return O(void 0);
      try {
        const n = this.motionProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove gyroscope listener from provider:", n.error), this.gyroscopeListeners.delete(t), this.gyroscopeListenerCount > 0 && this.gyroscopeListenerCount--, this.gyroscopeListenerCount === 0 && (this.motionProvider.stopGyroscope(), this.lastKnownGyroscope = null, console.info("[ImuOrientationManager] Gyroscope provider stopped")), console.info("[ImuOrientationManager] Gyroscope listener removed"), O(void 0);
      } catch (n) {
        const i = Ze(n, "Exception stopping gyroscope update");
        return Oe(i, "ImuOrientationManager.stopGyroscopeUpdates"), m(new fe("Stop gyroscope exception", "stop_gyroscope_exception", i));
      }
    }
    isGyroscopeServiceRunning() {
      return this.gyroscopeListenerCount > 0;
    }
    getLastKnownGyroscope() {
      return this.lastKnownGyroscope ? We(this.lastKnownGyroscope) : null;
    }
    async getCurrentMotion() {
      const [t, n] = await Promise.all([
        this.getCurrentAcceleration(),
        this.getCurrentGyroscope()
      ]);
      return t.isErr() && n.isErr() ? m(t.error) : O({
        acceleration: t.isOk() ? t.value : null,
        gyroscope: n.isOk() ? n.value : null
      });
    }
    getLastKnownMotion() {
      return !this.lastKnownAcceleration && !this.lastKnownGyroscope ? null : {
        acceleration: this.lastKnownAcceleration ? We(this.lastKnownAcceleration) : null,
        gyroscope: this.lastKnownGyroscope ? We(this.lastKnownGyroscope) : null
      };
    }
    isMotionServiceRunning() {
      return this.isAccelerationServiceRunning() || this.isGyroscopeServiceRunning();
    }
    isSupported() {
      var _a2, _b2;
      if (!this.isInitialized) {
        const t = Gi();
        if (t.isErr()) return false;
        const n = t.value.getDeviceOrientation(), i = t.value.getIMU();
        return n.isOk() && i.isOk() && n.value.isSupported() && i.value.isSupported();
      }
      return !!(((_a2 = this.orientationProvider) == null ? void 0 : _a2.isSupported()) && ((_b2 = this.motionProvider) == null ? void 0 : _b2.isSupported()));
    }
    addOrientationListener(t) {
      const n = Date.now() + Math.floor(Math.random() * 1e3);
      return this.orientationListeners.set(n, t), n;
    }
    removeOrientationListener(t) {
      this.orientationListeners.delete(t);
    }
    addAccelerationListener(t) {
      const n = Date.now() + Math.floor(Math.random() * 1e3);
      return this.accelerationListeners.set(n, t), n;
    }
    removeAccelerationListener(t) {
      this.accelerationListeners.delete(t);
    }
    addGyroscopeListener(t) {
      const n = Date.now() + Math.floor(Math.random() * 1e3);
      return this.gyroscopeListeners.set(n, t), n;
    }
    removeGyroscopeListener(t) {
      this.gyroscopeListeners.delete(t);
    }
    doOrientationUpdate(t) {
      if (!this.isValidOrientationReading(t)) {
        console.warn("[ImuOrientationManager] Invalid orientation data received:", t);
        return;
      }
      this.lastKnownOrientation = We(t), this.notifyOrientationListeners(t);
    }
    doAccelerationUpdate(t) {
      this.lastKnownAcceleration = We(t), this.notifyAccelerationListeners(t);
    }
    doGyroscopeUpdate(t) {
      this.lastKnownGyroscope = We(t), this.notifyGyroscopeListeners(t);
    }
    notifyOrientationListeners(t) {
      this.orientationListeners.forEach((n) => {
        try {
          n(t);
        } catch (i) {
          console.error("[ImuOrientationManager] Error in orientation listener:", i);
        }
      });
    }
    notifyAccelerationListeners(t) {
      this.accelerationListeners.forEach((n) => {
        try {
          n(t);
        } catch (i) {
          console.error("[ImuOrientationManager] Error in acceleration listener:", i);
        }
      });
    }
    notifyGyroscopeListeners(t) {
      this.gyroscopeListeners.forEach((n) => {
        try {
          n(t);
        } catch (i) {
          console.error("[ImuOrientationManager] Error in gyroscope listener:", i);
        }
      });
    }
    isValidIMUReading(t) {
      if (!t || typeof t != "object") return false;
      const { x: n, y: i, z: r, timestamp: o } = t;
      return typeof n == "number" && !isNaN(n) && isFinite(n) && typeof i == "number" && !isNaN(i) && isFinite(i) && typeof r == "number" && !isNaN(r) && isFinite(r) && typeof o == "number" && !isNaN(o) && isFinite(o) && o > 0;
    }
    isValidOrientationReading(t) {
      if (!t || typeof t != "object") return false;
      const { alpha: n, beta: i, gamma: r, timestamp: o } = t;
      return typeof n == "number" && !isNaN(n) && isFinite(n) && typeof i == "number" && !isNaN(i) && isFinite(i) && typeof r == "number" && !isNaN(r) && isFinite(r) && typeof o == "number" && !isNaN(o) && isFinite(o) && o > 0;
    }
  }
  di = new Py();
  let Nu;
  const oo = (e) => Nu = e, Lu = Symbol();
  function us(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Ni;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Ni || (Ni = {}));
  function Cu() {
    const e = Wc(true), t = e.run(() => rt({}));
    let n = [], i = [];
    const r = _s({
      install(o) {
        oo(r), r._a = o, o.provide(Lu, r), o.config.globalProperties.$pinia = r, i.forEach((s) => n.push(s)), i = [];
      },
      use(o) {
        return this._a ? n.push(o) : i.push(o), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return r;
  }
  const xu = () => {
  };
  function Tc(e, t, n, i = xu) {
    e.add(t);
    const r = () => {
      e.delete(t) && i();
    };
    return !n && Bc() && rf(r), r;
  }
  function Un(e, ...t) {
    e.forEach((n) => {
      n(...t);
    });
  }
  const Ny = (e) => e(), Oc = Symbol(), Do = Symbol();
  function fs(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, i) => e.set(i, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const i = t[n], r = e[n];
      us(r) && us(i) && e.hasOwnProperty(n) && !Ie(i) && !rn(i) ? e[n] = fs(r, i) : e[n] = i;
    }
    return e;
  }
  const Ly = Symbol();
  function Cy(e) {
    return !us(e) || !Object.prototype.hasOwnProperty.call(e, Ly);
  }
  const { assign: Jt } = Object;
  function xy(e) {
    return !!(Ie(e) && e.effect);
  }
  function My(e, t, n, i) {
    const { state: r, actions: o, getters: s } = t, a = n.state.value[e];
    let c;
    function u() {
      a || (n.state.value[e] = r ? r() : {});
      const l = Nf(n.state.value[e]);
      return Jt(l, o, Object.keys(s || {}).reduce((d, p) => (d[p] = _s(xs(() => {
        oo(n);
        const g = n._s.get(e);
        return s[p].call(g, g);
      })), d), {}));
    }
    return c = Mu(e, u, t, n, i, true), c;
  }
  function Mu(e, t, n = {}, i, r, o) {
    let s;
    const a = Jt({
      actions: {}
    }, n), c = {
      deep: true
    };
    let u, l, d = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), g;
    const b = i.state.value[e];
    !o && !b && (i.state.value[e] = {}), rt({});
    let w;
    function P(W) {
      let D;
      u = l = false, typeof W == "function" ? (W(i.state.value[e]), D = {
        type: Ni.patchFunction,
        storeId: e,
        events: g
      }) : (fs(i.state.value[e], W), D = {
        type: Ni.patchObject,
        payload: W,
        storeId: e,
        events: g
      });
      const B = w = Symbol();
      ll().then(() => {
        w === B && (u = true);
      }), l = true, Un(d, D, i.state.value[e]);
    }
    const E = o ? function() {
      const { state: D } = n, B = D ? D() : {};
      this.$patch((Q) => {
        Jt(Q, B);
      });
    } : xu;
    function I() {
      s.stop(), d.clear(), p.clear(), i._s.delete(e);
    }
    const M = (W, D = "") => {
      if (Oc in W) return W[Do] = D, W;
      const B = function() {
        oo(i);
        const Q = Array.from(arguments), j = /* @__PURE__ */ new Set(), se = /* @__PURE__ */ new Set();
        function Pe(ee) {
          j.add(ee);
        }
        function at(ee) {
          se.add(ee);
        }
        Un(p, {
          args: Q,
          name: B[Do],
          store: G,
          after: Pe,
          onError: at
        });
        let me;
        try {
          me = W.apply(this && this.$id === e ? this : G, Q);
        } catch (ee) {
          throw Un(se, ee), ee;
        }
        return me instanceof Promise ? me.then((ee) => (Un(j, ee), ee)).catch((ee) => (Un(se, ee), Promise.reject(ee))) : (Un(j, me), me);
      };
      return B[Oc] = true, B[Do] = D, B;
    }, T = {
      _p: i,
      $id: e,
      $onAction: Tc.bind(null, p),
      $patch: P,
      $reset: E,
      $subscribe(W, D = {}) {
        const B = Tc(d, W, D.detached, () => Q()), Q = s.run(() => Bn(() => i.state.value[e], (j) => {
          (D.flush === "sync" ? l : u) && W({
            storeId: e,
            type: Ni.direct,
            events: g
          }, j);
        }, Jt({}, c, D)));
        return B;
      },
      $dispose: I
    }, G = Vr(T);
    i._s.set(e, G);
    const Z = (i._a && i._a.runWithContext || Ny)(() => i._e.run(() => (s = Wc()).run(() => t({
      action: M
    }))));
    for (const W in Z) {
      const D = Z[W];
      if (Ie(D) && !xy(D) || rn(D)) o || (b && Cy(D) && (Ie(D) ? D.value = b[W] : fs(D, b[W])), i.state.value[e][W] = D);
      else if (typeof D == "function") {
        const B = M(D, W);
        Z[W] = B, a.actions[W] = D;
      }
    }
    return Jt(G, Z), Jt(ne(G), Z), Object.defineProperty(G, "$state", {
      get: () => i.state.value[e],
      set: (W) => {
        P((D) => {
          Jt(D, W);
        });
      }
    }), i._p.forEach((W) => {
      Jt(G, s.run(() => W({
        store: G,
        app: i._a,
        pinia: i,
        options: a
      })));
    }), b && o && n.hydrate && n.hydrate(G.$state, b), u = true, l = true, G;
  }
  Ab = function(e, t, n) {
    let i;
    const r = typeof t == "function";
    i = r ? n : t;
    function o(s, a) {
      const c = fd();
      return s = s || (c ? Ai(Lu, null) : null), s && oo(s), s = Nu, s._s.has(e) || (r ? Mu(e, t, i, s) : My(e, i, s)), s._s.get(e);
    }
    return o.$id = e, o;
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
  let yi = null;
  function pr() {
    return (yi === null || yi.byteLength === 0) && (yi = new Uint8Array(J.memory.buffer)), yi;
  }
  function _n(e, t) {
    return e = e >>> 0, ku.decode(pr().subarray(e, e + t));
  }
  let Fr = 0;
  const gr = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, ky = typeof gr.encodeInto == "function" ? function(e, t) {
    return gr.encodeInto(e, t);
  } : function(e, t) {
    const n = gr.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function Du(e, t, n) {
    if (n === void 0) {
      const a = gr.encode(e), c = t(a.length, 1) >>> 0;
      return pr().subarray(c, c + a.length).set(a), Fr = a.length, c;
    }
    let i = e.length, r = t(i, 1) >>> 0;
    const o = pr();
    let s = 0;
    for (; s < i; s++) {
      const a = e.charCodeAt(s);
      if (a > 127) break;
      o[r + s] = a;
    }
    if (s !== i) {
      s !== 0 && (e = e.slice(s)), r = n(r, i, i = s + e.length * 3, 1) >>> 0;
      const a = pr().subarray(r + s, r + i), c = ky(e, a);
      s += c.written, r = n(r, i, s, 1) >>> 0;
    }
    return Fr = s, r;
  }
  function Dy(e) {
    return e == null;
  }
  let vn = null;
  function Ac() {
    return (vn === null || vn.buffer.detached === true || vn.buffer.detached === void 0 && vn.buffer !== J.memory.buffer) && (vn = new DataView(J.memory.buffer)), vn;
  }
  function Fu(e) {
    const t = J.__wbindgen_export_0.get(e);
    return J.__externref_table_dealloc(e), t;
  }
  function Fo(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Fy(e, t, n) {
    Fo(e, Ur), Fo(t, Ur), Fo(n, Uu);
    const i = J.transform(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
    if (i[1]) throw Fu(i[0]);
  }
  const Sc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => J.__wbg_point_free(e >>> 0, 1));
  class Uu {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Sc.unregister(this), t;
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
    constructor(t, n, i) {
      const r = J.point_new(t, n, i);
      return this.__wbg_ptr = r >>> 0, Sc.register(this, this.__wbg_ptr, this), this;
    }
  }
  const Rc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => J.__wbg_projection_free(e >>> 0, 1));
  class Ur {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Rc.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      J.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const n = Du(t, J.__wbindgen_malloc, J.__wbindgen_realloc), i = Fr, r = J.projection_new(n, i);
      if (r[2]) throw Fu(r[1]);
      return this.__wbg_ptr = r[0] >>> 0, Rc.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, n;
      try {
        const i = J.projection_projName(this.__wbg_ptr);
        return t = i[0], n = i[1], _n(i[0], i[1]);
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
        const i = J.projection_axis(this.__wbg_ptr);
        return t = i[0], n = i[1], _n(i[0], i[1]);
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
        const i = J.projection_units(this.__wbg_ptr);
        return t = i[0], n = i[1], _n(i[0], i[1]);
      } finally {
        J.__wbindgen_free(t, n, 1);
      }
    }
  }
  async function Uy(e, t) {
    if (typeof Response == "function" && e instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(e, t);
      } catch (i) {
        if (e.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i);
        else throw i;
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
  function Hy() {
    const e = {};
    return e.wbg = {}, e.wbg.__wbg_buffer_e6c6daaa78528d53 = function(t) {
      return t.buffer;
    }, e.wbg.__wbg_getFloat32_e0872364daa466bb = function(t, n, i) {
      return t.getFloat32(n >>> 0, i !== 0);
    }, e.wbg.__wbg_getFloat64_3c55a5d18420aa12 = function(t, n, i) {
      return t.getFloat64(n >>> 0, i !== 0);
    }, e.wbg.__wbg_getInt32_6ea30555a7e6366d = function(t, n, i) {
      return t.getInt32(n >>> 0, i !== 0);
    }, e.wbg.__wbg_getUint32_78580012d2915dec = function(t, n, i) {
      return t.getUint32(n >>> 0, i !== 0);
    }, e.wbg.__wbg_parseFloat_40655e71a57d91e0 = function(t, n) {
      return parseFloat(_n(t, n));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, n, i) {
      return parseInt(_n(t, n), i);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, n, i) {
      return t.slice(n >>> 0, i >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, n) {
      return new Error(_n(t, n));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = J.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, n) {
      const i = n, r = typeof i == "string" ? i : void 0;
      var o = Dy(r) ? 0 : Du(r, J.__wbindgen_malloc, J.__wbindgen_realloc), s = Fr;
      Ac().setInt32(t + 4, s, true), Ac().setInt32(t + 0, o, true);
    }, e.wbg.__wbindgen_throw = function(t, n) {
      throw new Error(_n(t, n));
    }, e;
  }
  function Gy(e, t) {
    return J = e.exports, Hu.__wbindgen_wasm_module = t, vn = null, yi = null, J.__wbindgen_start(), J;
  }
  async function Hu(e) {
    if (J !== void 0) return J;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = Hy();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: i } = await Uy(await e, t);
    return Gy(n, i);
  }
  const jy = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Uo = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let Ho = false;
  async function Gu() {
    if (!Ho) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Hu({
        module_or_path: jy
      }), Ho = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), Ho = true;
    }
  }
  async function Pc(e, t, n) {
    try {
      await Gu();
      const i = new Ur(e), r = new Ur(t), o = new Uu(n[0], n[1], 0);
      Fy(i, r, o);
      const s = [
        o.x,
        o.y
      ];
      return i.free(), r.free(), o.free(), s;
    } catch (i) {
      throw new Error(`Failed to transform coordinate: ${i instanceof Error ? i.message : String(i)}`);
    }
  }
  function Wy(e, t) {
    const n = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(n * n + i * i);
  }
  function Nc(e, t) {
    const i = e.latitude * Math.PI / 180, r = t.latitude * Math.PI / 180, o = (t.latitude - e.latitude) * Math.PI / 180, s = (t.longitude - e.longitude) * Math.PI / 180, a = Math.sin(o / 2) * Math.sin(o / 2) + Math.cos(i) * Math.cos(r) * Math.sin(s / 2) * Math.sin(s / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }
  async function By(e, t, n = {}) {
    const { projection: i = Uo.CGCS2000_3_DEGREE, useHaversine: r = false } = n;
    if (r) return Nc(e, t);
    try {
      const o = await Pc(Uo.WGS84, i, [
        e.longitude,
        e.latitude
      ]), s = await Pc(Uo.WGS84, i, [
        t.longitude,
        t.latitude
      ]);
      return Wy({
        x: o[0],
        y: o[1]
      }, {
        x: s[0],
        y: s[1]
      });
    } catch (o) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", o), Nc(e, t);
    }
  }
  Sb = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let n = 0;
    for (let i = 1; i < e.length; i++) n += await By(e[i - 1], e[i], t);
    return n;
  };
  Rb = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  let Lc, $y, zy, Vy, Yy, Ky, qy, Jy, Xy, Zy, Qy, eb, tb, nb, ib, ob, Ws;
  Lc = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a2;
        const e = iu((await To(async () => {
          const { default: n } = await import("./App-BF5mDAS8.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3]), import.meta.url)).default);
        e.use(Cu()), e.use((await To(async () => {
          const { default: n } = await import("./index-BBkZB2dD.js");
          return {
            default: n
          };
        }, __vite__mapDeps([4,2,1,5]), import.meta.url)).default), e.use((await To(async () => {
          const { i18n: n } = await import("./index-Cbm8uFXN.js");
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
        "proj4-wasm",
        "imu-orientation"
      ]
    },
    {
      name: "proj4-wasm",
      displayName: "Proj4 Wasm",
      moduleInit: async () => {
        await Gu();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        try {
          console.time("Platform services initialise");
          const e = Gi();
          if (e.isErr()) throw e.error;
          const n = e.value.getStorage();
          if (n.isErr()) throw n.error;
          const i = await n.value.init();
          if (i.isErr()) throw i.error;
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
          if (!Gi()) throw new Error("Platform services not initialized");
          const t = new Sy();
          console.time("Geolocation service initialise"), await t.initialize(async (n) => Iy() ? void 0 : confirm(n === "prompt" ? "Later your browser will request permission to access your location." : "This app requires access to your location to track your movements.")), console.timeEnd("Geolocation service initialise"), console.time("Geolocation service start"), await t.startLocationUpdates((n) => {
            console.log(`[Geolocation] Location updated: ${n.latitude}, ${n.longitude}`);
          }), console.timeEnd("Geolocation service start"), window.GeolocationManager = t, console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
        } catch (e) {
          return console.error("[Geolocation] Failed to initialize geolocation service:", e), Promise.reject(e);
        }
      },
      dependencies: [
        "platform-services"
      ]
    },
    {
      name: "imu-orientation",
      displayName: "IMU & Orientation Service",
      moduleInit: async () => {
        try {
          console.time("IMU & Orientation service initialise");
          const e = await di.initialize();
          if (e.isErr()) throw e.error;
          await di.startOrientationUpdates(() => {
          }), await di.startAccelerationUpdates({}, () => {
          }), await di.startGyroscopeUpdates({}, () => {
          }), console.timeEnd("IMU & Orientation service initialise"), console.info("[IMU & Orientation] Service initialized successfully with initial values"), window.ImuOrientationManager = di;
        } catch (e) {
          return console.error("[IMU & Orientation] Failed to initialize service:", e), Promise.reject(e);
        }
      },
      dependencies: [
        "platform-services"
      ]
    }
  ];
  Pb = Bw;
  Nb = Ww;
  $y = {
    class: "splash-container"
  };
  zy = {
    class: "splash-content"
  };
  Vy = {
    key: 0,
    class: "loading-section"
  };
  Yy = {
    class: "progress-container"
  };
  Ky = {
    class: "progress-bar"
  };
  qy = {
    class: "progress-text"
  };
  Jy = {
    class: "loading-details"
  };
  Xy = {
    class: "current-module"
  };
  Zy = {
    key: 1,
    class: "error-section"
  };
  Qy = {
    class: "error-message"
  };
  eb = {
    key: 0
  };
  tb = {
    key: 1
  };
  nb = {
    key: 2,
    class: "timeout-section"
  };
  ib = Bf({
    __name: "SplashScreen",
    setup(e) {
      const t = rt(0), n = rt("Initializing..."), i = rt(""), r = rt(0), o = rt(0), s = rt(false), a = rt(false), c = rt(""), u = rt("light"), l = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? u.value = "dark" : u.value = "light";
        } catch {
          u.value = "light";
        }
      }, d = () => {
        u.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", u.value);
      }, p = xs(() => Math.round(t.value / 100 * 100)), g = {
        info: (...P) => {
          const E = P.join(" ");
          console.info(E), n.value = String(E);
        },
        warn: (...P) => {
          const E = P.join(" ");
          console.warn(E), n.value = String(E);
        },
        error: (...P) => {
          const E = P.join(" ");
          console.error(E), n.value = String(E), c.value = String(E);
        },
        debug: (...P) => {
          console.debug(...P);
        }
      }, b = {
        onModuleStart: (P) => {
          i.value = P, n.value = `Loading ${P}...`;
        },
        onModuleComplete: (P) => {
          o.value++, t.value = Math.min(100, o.value / r.value * 100), n.value = `Loaded ${P}`;
        },
        onModuleError: (P, E) => {
          n.value = `Failed to load ${P}`, c.value = E.message;
        },
        onOverallProgress: (P, E) => {
          r.value = E, o.value = P, t.value = Math.min(100, P / E * 100);
        }
      }, w = () => {
        window.location.reload();
      };
      return Bi(() => {
        var _a2;
        l(), d(), (_a2 = document.getElementById("pre-splash")) == null ? void 0 : _a2.remove();
        const P = (E, I = /* @__PURE__ */ new Set()) => {
          if (I.has(E)) return 0;
          I.add(E);
          const M = Lc.find((G) => G.name === E);
          if (!M) return 0;
          let T = 1;
          if (M.dependencies) for (const G of M.dependencies) T += P(G, I);
          return T;
        };
        r.value = P("trackmaker"), console.log("=== Start Loading Modules ==="), Iu(Lc, "trackmaker", 3e4, {
          logger: g,
          progressReporter: b,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((E) => {
          const I = String(E.toString());
          if (I.toLowerCase().includes("timeout")) {
            const M = I.split("Trackback").map((T) => T.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(M.map((T) => ({
              Trackback: T
            })), [
              "Trackback"
            ]), a.value = true;
          } else c.value = I, s.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(E);
        });
      }), (P, E) => (lt(), Vt("div", $y, [
        we("div", zy, [
          E[7] || (E[7] = we("div", {
            class: "logo-section"
          }, [
            we("div", {
              class: "app-logo"
            }, [
              we("img", {
                src: Sh,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            we("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !s.value && !a.value ? (lt(), Vt("div", Vy, [
            we("div", Yy, [
              we("div", Ky, [
                we("div", {
                  class: "progress-fill",
                  style: Br({
                    width: `${p.value}%`
                  })
                }, null, 4)
              ]),
              we("div", qy, hi(p.value) + "% ", 1)
            ]),
            we("div", Jy, [
              we("p", Xy, " Loading: " + hi(i.value), 1)
            ]),
            E[0] || (E[0] = we("div", {
              class: "loading-animation"
            }, [
              we("div", {
                class: "spinner"
              })
            ], -1))
          ])) : wo("", true),
          s.value ? (lt(), Vt("div", Zy, [
            E[1] || (E[1] = we("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            E[2] || (E[2] = we("h2", null, "Loading Error", -1)),
            we("div", Qy, [
              (lt(true), Vt(Ue, null, td((c.value ?? "").split(`
`), (I) => (lt(), Vt("div", {
                key: I,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                I.toLocaleLowerCase().includes("trackback") ? (lt(), Vt("strong", eb, hi(I), 1)) : (lt(), Vt("span", tb, hi(I), 1))
              ]))), 128))
            ]),
            we("button", {
              class: "retry-button",
              onClick: w
            }, " Retry ")
          ])) : wo("", true),
          a.value ? (lt(), Vt("div", nb, [
            E[3] || (E[3] = we("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            E[4] || (E[4] = we("h2", null, "Connection Timeout", -1)),
            E[5] || (E[5] = we("p", null, "Unable to load required modules within the timeout period.", -1)),
            E[6] || (E[6] = we("p", null, "Please check your internet connection and try again.", -1)),
            we("button", {
              class: "retry-button",
              onClick: w
            }, " Retry ")
          ])) : wo("", true)
        ])
      ]));
    }
  });
  rb = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, r] of t) n[i] = r;
    return n;
  };
  ob = rb(ib, [
    [
      "__scopeId",
      "data-v-5254237a"
    ]
  ]);
  Ws = iu(ob);
  Ws.use(Cu());
  Ws.mount("#splash");
  window.splashScreen = Ws;
})();
export {
  gb as $,
  hi as A,
  bb as B,
  qo as C,
  hb as D,
  eo as E,
  Ue as F,
  Pt as G,
  Rt as H,
  ln as I,
  yb as J,
  db as K,
  cn as L,
  zf as M,
  Vf as N,
  vb as O,
  ll as P,
  lb as Q,
  Ce as R,
  Gt as S,
  ub as T,
  Nf as U,
  Br as V,
  Ib as W,
  Ie as X,
  _s as Y,
  Of as Z,
  rb as _,
  __tla,
  we as a,
  wb as a0,
  We as a1,
  Ln as a2,
  Zn as a3,
  O as a4,
  m as a5,
  Ab as a6,
  Sb as a7,
  fb as a8,
  pb as a9,
  du as aA,
  Gg as aB,
  sm as aC,
  Pg as aD,
  su as aE,
  Sm as aF,
  Tf as aG,
  Vn as aH,
  Zr as aI,
  Gi as aJ,
  Bc as aK,
  rf as aL,
  fd as aM,
  ab as aN,
  jt as aO,
  Ob as aP,
  Wc as aQ,
  td as aa,
  _b as ab,
  Rb as ac,
  Tb as ad,
  Pb as ae,
  Nb as af,
  di as ag,
  To as ah,
  Iy as ai,
  Kn as aj,
  an as ak,
  Ca as al,
  rp as am,
  ap as an,
  lp as ao,
  ip as ap,
  Ms as aq,
  cu as ar,
  Yp as as,
  Nn as at,
  Ft as au,
  Eu as av,
  Zp as aw,
  au as ax,
  gp as ay,
  Lr as az,
  rt as b,
  Vt as c,
  Bf as d,
  Kf as e,
  Ss as f,
  Vr as g,
  Vd as h,
  Ai as i,
  xs as j,
  Bi as k,
  Rs as l,
  Fd as m,
  ms as n,
  lt as o,
  ud as p,
  Bn as q,
  Bo as r,
  Ge as s,
  cb as t,
  Eb as u,
  ol as v,
  mb as w,
  wo as x,
  Hf as y,
  Dd as z
};
