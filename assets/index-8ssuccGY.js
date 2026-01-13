const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-nJgzJu0w.js","./sketch-store-sakaFyFN.js","./vue-i18n-DowhrP2k.js","./App-DBMmbccd.css","./index-DJeoizFU.js","./index-B0k-67r-.css","./index-pVsMOBgo.js"])))=>i.map(i=>d[i]);
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
let br, s0, Ji, r0, ra, Zv, Pt, qb, ds, On, i0, Xv, Jn, hd, dd, o0, Eu, qv, vt, Hn, Kv, Xh, ts, a0, at, Ca, Vh, $v, Ge, sr, st, Ot, e0, n0, Jv, Qv, Id, l0, v0, c0, _g, Ha, Ef, pm, Fi, Gn, Ff, bm, vf, xg, Bo, Sf, sw, Ow, Jm, bf, qw, Hh, fs, Ni, nu, Sh, kd, Hv, Vn, u0, xi, Hs, Ct, er, Yv, Zi, xs, mf, y0, p0, w0, m0, h0, g0, d0, I0, T0, f0, wv, Hb, Sn, hi, ui, Bl, Sg, Pg, Rg, Ut, x, R, b0, tu, kn, ud, gd, Ua, rs, dp, Nr, za, Yr, ja, rp, Pa, rn, Nd, E0, Zs, lo, Vv, Rt, Ki, t0, sd, ip, Ln;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
    new MutationObserver((l) => {
      for (const c of l) if (c.type === "childList") for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(l) {
      const c = {};
      return l.integrity && (c.integrity = l.integrity), l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
    }
    function i(l) {
      if (l.ep) return;
      l.ep = true;
      const c = n(l);
      fetch(l.href, c);
    }
  })();
  function Sa(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const Fe = {}, Vi = [], fn = () => {
  }, Hc = () => false, Jo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Oa = (e) => e.startsWith("onUpdate:"), ft = Object.assign, Aa = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, fh = Object.prototype.hasOwnProperty, We = (e, t) => fh.call(e, t), Ie = Array.isArray, qi = (e) => qr(e) === "[object Map]", Vc = (e) => qr(e) === "[object Set]", hh = (e) => qr(e) === "[object RegExp]", Se = (e) => typeof e == "function", ot = (e) => typeof e == "string", qn = (e) => typeof e == "symbol", qe = (e) => e !== null && typeof e == "object", qc = (e) => (qe(e) || Se(e)) && Se(e.then) && Se(e.catch), Kc = Object.prototype.toString, qr = (e) => Kc.call(e), dh = (e) => qr(e).slice(8, -1), Yc = (e) => qr(e) === "[object Object]", Xo = (e) => ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _r = Sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Zo = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, ph = /-\w/g, Jt = Zo((e) => e.replace(ph, (t) => t.slice(1).toUpperCase())), gh = /\B([A-Z])/g, Kn = Zo((e) => e.replace(gh, "-$1").toLowerCase()), Qo = Zo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Es = Zo((e) => e ? `on${Qo(e)}` : ""), Gt = (e, t) => !Object.is(e, t), Sr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, Jc = (e, t, n, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: n
    });
  }, mh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, wh = (e) => {
    const t = ot(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let rl;
  const es = () => rl || (rl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  ts = function(e) {
    if (Ie(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const i = e[n], l = ot(i) ? Eh(i) : ts(i);
        if (l) for (const c in l) t[c] = l[c];
      }
      return t;
    } else if (ot(e) || qe(e)) return e;
  };
  const yh = /;(?![^(]*\))/g, bh = /:([^]+)/, vh = /\/\*[^]*?\*\//g;
  function Eh(e) {
    const t = {};
    return e.replace(vh, "").split(yh).forEach((n) => {
      if (n) {
        const i = n.split(bh);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  Pa = function(e) {
    let t = "";
    if (ot(e)) t = e;
    else if (Ie(e)) for (let n = 0; n < e.length; n++) {
      const i = Pa(e[n]);
      i && (t += i + " ");
    }
    else if (qe(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const Ih = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Th = Sa(Ih);
  function Xc(e) {
    return !!e || e === "";
  }
  let Zc, Qc, Is;
  Zc = (e) => !!(e && e.__v_isRef === true);
  Ln = (e) => ot(e) ? e : e == null ? "" : Ie(e) || qe(e) && (e.toString === Kc || !Se(e.toString)) ? Zc(e) ? Ln(e.value) : JSON.stringify(e, Qc, 2) : String(e);
  Qc = (e, t) => Zc(t) ? Qc(e, t.value) : qi(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [i, l], c) => (n[Is(i, c) + " =>"] = l, n), {})
  } : Vc(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Is(n))
  } : qn(t) ? Is(t) : qe(t) && !Ie(t) && !Yc(t) ? String(t) : t;
  Is = (e, t = "") => {
    var n;
    return qn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function _h(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let St;
  class eu {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = St, !t && St && (this.index = (St.scopes || (St.scopes = [])).push(this) - 1);
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
        const n = St;
        try {
          return St = this, t();
        } finally {
          St = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = St, St = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (St = this.prevScope, this.prevScope = void 0);
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
          const l = this.parent.scopes.pop();
          l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  tu = function(e) {
    return new eu(e);
  };
  nu = function() {
    return St;
  };
  Sh = function(e, t = false) {
    St && St.cleanups.push(e);
  };
  let Xe;
  const Ts = /* @__PURE__ */ new WeakSet();
  class iu {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, St && St.active && St.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ts.has(this) && (Ts.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ou(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, ol(this), su(this);
      const t = Xe, n = hn;
      Xe = this, hn = true;
      try {
        return this.fn();
      } finally {
        au(this), Xe = t, hn = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Na(t);
        this.deps = this.depsTail = void 0, ol(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Ys(this) && this.run();
    }
    get dirty() {
      return Ys(this);
    }
  }
  let ru = 0, Or, Ar;
  function ou(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Ar, Ar = e;
      return;
    }
    e.next = Or, Or = e;
  }
  function Ma() {
    ru++;
  }
  function Ra() {
    if (--ru > 0) return;
    if (Ar) {
      let t = Ar;
      for (Ar = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Or; ) {
      let t = Or;
      for (Or = void 0; t; ) {
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
  function su(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function au(e) {
    let t, n = e.depsTail, i = n;
    for (; i; ) {
      const l = i.prevDep;
      i.version === -1 ? (i === n && (n = l), Na(i), Oh(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = l;
    }
    e.deps = t, e.depsTail = n;
  }
  function Ys(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (lu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function lu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Dr) || (e.globalVersion = Dr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ys(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = Xe, i = hn;
    Xe = e, hn = true;
    try {
      su(e);
      const l = e.fn(e._value);
      (t.version === 0 || Gt(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
    } catch (l) {
      throw t.version++, l;
    } finally {
      Xe = n, hn = i, au(e), e.flags &= -3;
    }
  }
  function Na(e, t = false) {
    const { dep: n, prevSub: i, nextSub: l } = e;
    if (i && (i.nextSub = l, e.prevSub = void 0), l && (l.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
      n.computed.flags &= -5;
      for (let c = n.computed.deps; c; c = c.nextDep) Na(c, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Oh(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let hn = true;
  const cu = [];
  function Bn() {
    cu.push(hn), hn = false;
  }
  function $n() {
    const e = cu.pop();
    hn = e === void 0 ? true : e;
  }
  function ol(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = Xe;
      Xe = void 0;
      try {
        t();
      } finally {
        Xe = n;
      }
    }
  }
  let Dr = 0;
  class Ah {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class ns {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Xe || !hn || Xe === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Xe) n = this.activeLink = new Ah(Xe, this), Xe.deps ? (n.prevDep = Xe.depsTail, Xe.depsTail.nextDep = n, Xe.depsTail = n) : Xe.deps = Xe.depsTail = n, uu(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const i = n.nextDep;
        i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Xe.depsTail, n.nextDep = void 0, Xe.depsTail.nextDep = n, Xe.depsTail = n, Xe.deps === n && (Xe.deps = i);
      }
      return n;
    }
    trigger(t) {
      this.version++, Dr++, this.notify(t);
    }
    notify(t) {
      Ma();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Ra();
      }
    }
  }
  function uu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) uu(i);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Po = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ Symbol(""), Js = /* @__PURE__ */ Symbol(""), Ur = /* @__PURE__ */ Symbol("");
  function At(e, t, n) {
    if (hn && Xe) {
      let i = Po.get(e);
      i || Po.set(e, i = /* @__PURE__ */ new Map());
      let l = i.get(n);
      l || (i.set(n, l = new ns()), l.map = i, l.key = n), l.track();
    }
  }
  function xn(e, t, n, i, l, c) {
    const f = Po.get(e);
    if (!f) {
      Dr++;
      return;
    }
    const h = (p) => {
      p && p.trigger();
    };
    if (Ma(), t === "clear") f.forEach(h);
    else {
      const p = Ie(e), v = p && Xo(n);
      if (p && n === "length") {
        const g = Number(i);
        f.forEach((E, P) => {
          (P === "length" || P === Ur || !qn(P) && P >= g) && h(E);
        });
      } else switch ((n !== void 0 || f.has(void 0)) && h(f.get(n)), v && h(f.get(Ur)), t) {
        case "add":
          p ? v && h(f.get("length")) : (h(f.get(Pi)), qi(e) && h(f.get(Js)));
          break;
        case "delete":
          p || (h(f.get(Pi)), qi(e) && h(f.get(Js)));
          break;
        case "set":
          qi(e) && h(f.get(Pi));
          break;
      }
    }
    Ra();
  }
  function Ph(e, t) {
    const n = Po.get(e);
    return n && n.get(t);
  }
  function Ui(e) {
    const t = Ce(e);
    return t === e ? t : (At(t, "iterate", Ur), Yt(e) ? t : t.map(dn));
  }
  function is(e) {
    return At(e = Ce(e), "iterate", Ur), e;
  }
  function ni(e, t) {
    return zn(e) ? jn(e) ? Xi(dn(t)) : Xi(t) : dn(t);
  }
  const Mh = {
    __proto__: null,
    [Symbol.iterator]() {
      return _s(this, Symbol.iterator, (e) => ni(this, e));
    },
    concat(...e) {
      return Ui(this).concat(...e.map((t) => Ie(t) ? Ui(t) : t));
    },
    entries() {
      return _s(this, "entries", (e) => (e[1] = ni(this, e[1]), e));
    },
    every(e, t) {
      return Nn(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Nn(this, "filter", e, t, (n) => n.map((i) => ni(this, i)), arguments);
    },
    find(e, t) {
      return Nn(this, "find", e, t, (n) => ni(this, n), arguments);
    },
    findIndex(e, t) {
      return Nn(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Nn(this, "findLast", e, t, (n) => ni(this, n), arguments);
    },
    findLastIndex(e, t) {
      return Nn(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Nn(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Ss(this, "includes", e);
    },
    indexOf(...e) {
      return Ss(this, "indexOf", e);
    },
    join(e) {
      return Ui(this).join(e);
    },
    lastIndexOf(...e) {
      return Ss(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Nn(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return cr(this, "pop");
    },
    push(...e) {
      return cr(this, "push", e);
    },
    reduce(e, ...t) {
      return sl(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return sl(this, "reduceRight", e, t);
    },
    shift() {
      return cr(this, "shift");
    },
    some(e, t) {
      return Nn(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return cr(this, "splice", e);
    },
    toReversed() {
      return Ui(this).toReversed();
    },
    toSorted(e) {
      return Ui(this).toSorted(e);
    },
    toSpliced(...e) {
      return Ui(this).toSpliced(...e);
    },
    unshift(...e) {
      return cr(this, "unshift", e);
    },
    values() {
      return _s(this, "values", (e) => ni(this, e));
    }
  };
  function _s(e, t, n) {
    const i = is(e), l = i[t]();
    return i !== e && !Yt(e) && (l._next = l.next, l.next = () => {
      const c = l._next();
      return c.done || (c.value = n(c.value)), c;
    }), l;
  }
  const Rh = Array.prototype;
  function Nn(e, t, n, i, l, c) {
    const f = is(e), h = f !== e && !Yt(e), p = f[t];
    if (p !== Rh[t]) {
      const E = p.apply(e, c);
      return h ? dn(E) : E;
    }
    let v = n;
    f !== e && (h ? v = function(E, P) {
      return n.call(this, ni(e, E), P, e);
    } : n.length > 2 && (v = function(E, P) {
      return n.call(this, E, P, e);
    }));
    const g = p.call(f, v, i);
    return h && l ? l(g) : g;
  }
  function sl(e, t, n, i) {
    const l = is(e);
    let c = n;
    return l !== e && (Yt(e) ? n.length > 3 && (c = function(f, h, p) {
      return n.call(this, f, h, p, e);
    }) : c = function(f, h, p) {
      return n.call(this, f, ni(e, h), p, e);
    }), l[t](c, ...i);
  }
  function Ss(e, t, n) {
    const i = Ce(e);
    At(i, "iterate", Ur);
    const l = i[t](...n);
    return (l === -1 || l === false) && os(n[0]) ? (n[0] = Ce(n[0]), i[t](...n)) : l;
  }
  function cr(e, t, n = []) {
    Bn(), Ma();
    const i = Ce(e)[t].apply(e, n);
    return Ra(), $n(), i;
  }
  const Nh = Sa("__proto__,__v_isRef,__isVue"), fu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qn));
  function kh(e) {
    qn(e) || (e = String(e));
    const t = Ce(this);
    return At(t, "has", e), t.hasOwnProperty(e);
  }
  class hu {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, i) {
      if (n === "__v_skip") return t.__v_skip;
      const l = this._isReadonly, c = this._isShallow;
      if (n === "__v_isReactive") return !l;
      if (n === "__v_isReadonly") return l;
      if (n === "__v_isShallow") return c;
      if (n === "__v_raw") return i === (l ? c ? Bh : mu : c ? gu : pu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const f = Ie(t);
      if (!l) {
        let p;
        if (f && (p = Mh[n])) return p;
        if (n === "hasOwnProperty") return kh;
      }
      const h = Reflect.get(t, n, at(t) ? t : i);
      if ((qn(n) ? fu.has(n) : Nh(n)) || (l || At(t, "get", n), c)) return h;
      if (at(h)) {
        const p = f && Xo(n) ? h : h.value;
        return l && qe(p) ? Zs(p) : p;
      }
      return qe(h) ? l ? Zs(h) : rs(h) : h;
    }
  }
  class du extends hu {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, i, l) {
      let c = t[n];
      const f = Ie(t) && Xo(n);
      if (!this._isShallow) {
        const v = zn(c);
        if (!Yt(i) && !zn(i) && (c = Ce(c), i = Ce(i)), !f && at(c) && !at(i)) return v || (c.value = i), true;
      }
      const h = f ? Number(n) < t.length : We(t, n), p = Reflect.set(t, n, i, at(t) ? t : l);
      return t === Ce(l) && (h ? Gt(i, c) && xn(t, "set", n, i) : xn(t, "add", n, i)), p;
    }
    deleteProperty(t, n) {
      const i = We(t, n);
      t[n];
      const l = Reflect.deleteProperty(t, n);
      return l && i && xn(t, "delete", n, void 0), l;
    }
    has(t, n) {
      const i = Reflect.has(t, n);
      return (!qn(n) || !fu.has(n)) && At(t, "has", n), i;
    }
    ownKeys(t) {
      return At(t, "iterate", Ie(t) ? "length" : Pi), Reflect.ownKeys(t);
    }
  }
  class Lh extends hu {
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
  const Ch = new du(), Fh = new Lh(), xh = new du(true);
  const Xs = (e) => e, no = (e) => Reflect.getPrototypeOf(e);
  function Dh(e, t, n) {
    return function(...i) {
      const l = this.__v_raw, c = Ce(l), f = qi(c), h = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, v = l[e](...i), g = n ? Xs : t ? Xi : dn;
      return !t && At(c, "iterate", p ? Js : Pi), {
        next() {
          const { value: E, done: P } = v.next();
          return P ? {
            value: E,
            done: P
          } : {
            value: h ? [
              g(E[0]),
              g(E[1])
            ] : g(E),
            done: P
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function io(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Uh(e, t) {
    const n = {
      get(l) {
        const c = this.__v_raw, f = Ce(c), h = Ce(l);
        e || (Gt(l, h) && At(f, "get", l), At(f, "get", h));
        const { has: p } = no(f), v = t ? Xs : e ? Xi : dn;
        if (p.call(f, l)) return v(c.get(l));
        if (p.call(f, h)) return v(c.get(h));
        c !== f && c.get(l);
      },
      get size() {
        const l = this.__v_raw;
        return !e && At(Ce(l), "iterate", Pi), l.size;
      },
      has(l) {
        const c = this.__v_raw, f = Ce(c), h = Ce(l);
        return e || (Gt(l, h) && At(f, "has", l), At(f, "has", h)), l === h ? c.has(l) : c.has(l) || c.has(h);
      },
      forEach(l, c) {
        const f = this, h = f.__v_raw, p = Ce(h), v = t ? Xs : e ? Xi : dn;
        return !e && At(p, "iterate", Pi), h.forEach((g, E) => l.call(c, v(g), v(E), f));
      }
    };
    return ft(n, e ? {
      add: io("add"),
      set: io("set"),
      delete: io("delete"),
      clear: io("clear")
    } : {
      add(l) {
        !t && !Yt(l) && !zn(l) && (l = Ce(l));
        const c = Ce(this);
        return no(c).has.call(c, l) || (c.add(l), xn(c, "add", l, l)), this;
      },
      set(l, c) {
        !t && !Yt(c) && !zn(c) && (c = Ce(c));
        const f = Ce(this), { has: h, get: p } = no(f);
        let v = h.call(f, l);
        v || (l = Ce(l), v = h.call(f, l));
        const g = p.call(f, l);
        return f.set(l, c), v ? Gt(c, g) && xn(f, "set", l, c) : xn(f, "add", l, c), this;
      },
      delete(l) {
        const c = Ce(this), { has: f, get: h } = no(c);
        let p = f.call(c, l);
        p || (l = Ce(l), p = f.call(c, l)), h && h.call(c, l);
        const v = c.delete(l);
        return p && xn(c, "delete", l, void 0), v;
      },
      clear() {
        const l = Ce(this), c = l.size !== 0, f = l.clear();
        return c && xn(l, "clear", void 0, void 0), f;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((l) => {
      n[l] = Dh(l, e, t);
    }), n;
  }
  function ka(e, t) {
    const n = Uh(e, t);
    return (i, l, c) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? i : Reflect.get(We(n, l) && l in i ? n : i, l, c);
  }
  const jh = {
    get: ka(false, false)
  }, Gh = {
    get: ka(false, true)
  }, Wh = {
    get: ka(true, false)
  };
  const pu = /* @__PURE__ */ new WeakMap(), gu = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap(), Bh = /* @__PURE__ */ new WeakMap();
  function $h(e) {
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
  function zh(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : $h(dh(e));
  }
  rs = function(e) {
    return zn(e) ? e : La(e, false, Ch, jh, pu);
  };
  Hh = function(e) {
    return La(e, false, xh, Gh, gu);
  };
  Zs = function(e) {
    return La(e, true, Fh, Wh, mu);
  };
  function La(e, t, n, i, l) {
    if (!qe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = zh(e);
    if (c === 0) return e;
    const f = l.get(e);
    if (f) return f;
    const h = new Proxy(e, c === 2 ? i : n);
    return l.set(e, h), h;
  }
  function jn(e) {
    return zn(e) ? jn(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function zn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Yt(e) {
    return !!(e && e.__v_isShallow);
  }
  function os(e) {
    return e ? !!e.__v_raw : false;
  }
  function Ce(e) {
    const t = e && e.__v_raw;
    return t ? Ce(t) : e;
  }
  Ca = function(e) {
    return !We(e, "__v_skip") && Object.isExtensible(e) && Jc(e, "__v_skip", true), e;
  };
  const dn = (e) => qe(e) ? rs(e) : e, Xi = (e) => qe(e) ? Zs(e) : e;
  at = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Ut = function(e) {
    return wu(e, false);
  };
  Vh = function(e) {
    return wu(e, true);
  };
  function wu(e, t) {
    return at(e) ? e : new qh(e, t);
  }
  class qh {
    constructor(t, n) {
      this.dep = new ns(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : Ce(t), this._value = n ? t : dn(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, i = this.__v_isShallow || Yt(t) || zn(t);
      t = i ? t : Ce(t), Gt(t, n) && (this._rawValue = t, this._value = i ? t : dn(t), this.dep.trigger());
    }
  }
  Ki = function(e) {
    return at(e) ? e.value : e;
  };
  Hv = function(e) {
    return Se(e) ? e() : Ki(e);
  };
  const Kh = {
    get: (e, t, n) => t === "__v_raw" ? e : Ki(Reflect.get(e, t, n)),
    set: (e, t, n, i) => {
      const l = e[t];
      return at(l) && !at(n) ? (l.value = n, true) : Reflect.set(e, t, n, i);
    }
  };
  function yu(e) {
    return jn(e) ? e : new Proxy(e, Kh);
  }
  class Yh {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new ns(), { get: i, set: l } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = i, this._set = l;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function Jh(e) {
    return new Yh(e);
  }
  Xh = function(e) {
    const t = Ie(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = bu(e, n);
    return t;
  };
  class Zh {
    constructor(t, n, i) {
      this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = true, this._value = void 0, this._raw = Ce(t);
      let l = true, c = t;
      if (!Ie(t) || !Xo(String(n))) do
        l = !os(c) || Yt(c);
      while (l && (c = c.__v_raw));
      this._shallow = l;
    }
    get value() {
      let t = this._object[this._key];
      return this._shallow && (t = Ki(t)), this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      if (this._shallow && at(this._raw[this._key])) {
        const n = this._object[this._key];
        if (at(n)) {
          n.value = t;
          return;
        }
      }
      this._object[this._key] = t;
    }
    get dep() {
      return Ph(this._raw, this._key);
    }
  }
  class Qh {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Vv = function(e, t, n) {
    return at(e) ? e : Se(e) ? new Qh(e) : qe(e) && arguments.length > 1 ? bu(e, t, n) : Ut(e);
  };
  function bu(e, t, n) {
    return new Zh(e, t, n);
  }
  class ed {
    constructor(t, n, i) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new ns(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Xe !== this) return ou(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return lu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function td(e, t, n = false) {
    let i, l;
    return Se(e) ? i = e : (i = e.get, l = e.set), new ed(i, l, n);
  }
  const ro = {}, Mo = /* @__PURE__ */ new WeakMap();
  let Ei;
  function nd(e, t = false, n = Ei) {
    if (n) {
      let i = Mo.get(n);
      i || Mo.set(n, i = []), i.push(e);
    }
  }
  function id(e, t, n = Fe) {
    const { immediate: i, deep: l, once: c, scheduler: f, augmentJob: h, call: p } = n, v = (G) => l ? G : Yt(G) || l === false || l === 0 ? Dn(G, 1) : Dn(G);
    let g, E, P, M, C = false, k = false;
    if (at(e) ? (E = () => e.value, C = Yt(e)) : jn(e) ? (E = () => v(e), C = true) : Ie(e) ? (k = true, C = e.some((G) => jn(G) || Yt(G)), E = () => e.map((G) => {
      if (at(G)) return G.value;
      if (jn(G)) return v(G);
      if (Se(G)) return p ? p(G, 2) : G();
    })) : Se(e) ? t ? E = p ? () => p(e, 2) : e : E = () => {
      if (P) {
        Bn();
        try {
          P();
        } finally {
          $n();
        }
      }
      const G = Ei;
      Ei = g;
      try {
        return p ? p(e, 3, [
          M
        ]) : e(M);
      } finally {
        Ei = G;
      }
    } : E = fn, t && l) {
      const G = E, pe = l === true ? 1 / 0 : l;
      E = () => Dn(G(), pe);
    }
    const se = nu(), te = () => {
      g.stop(), se && se.active && Aa(se.effects, g);
    };
    if (c && t) {
      const G = t;
      t = (...pe) => {
        G(...pe), te();
      };
    }
    let H = k ? new Array(e.length).fill(ro) : ro;
    const ie = (G) => {
      if (!(!(g.flags & 1) || !g.dirty && !G)) if (t) {
        const pe = g.run();
        if (l || C || (k ? pe.some((ge, re) => Gt(ge, H[re])) : Gt(pe, H))) {
          P && P();
          const ge = Ei;
          Ei = g;
          try {
            const re = [
              pe,
              H === ro ? void 0 : k && H[0] === ro ? [] : H,
              M
            ];
            H = pe, p ? p(t, 3, re) : t(...re);
          } finally {
            Ei = ge;
          }
        }
      } else g.run();
    };
    return h && h(ie), g = new iu(E), g.scheduler = f ? () => f(ie, false) : ie, M = (G) => nd(G, false, g), P = g.onStop = () => {
      const G = Mo.get(g);
      if (G) {
        if (p) p(G, 4);
        else for (const pe of G) pe();
        Mo.delete(g);
      }
    }, t ? i ? ie(true) : H = g.run() : f ? f(ie.bind(null, true), true) : g.run(), te.pause = g.pause.bind(g), te.resume = g.resume.bind(g), te.stop = te, te;
  }
  function Dn(e, t = 1 / 0, n) {
    if (t <= 0 || !qe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, at(e)) Dn(e.value, t, n);
    else if (Ie(e)) for (let i = 0; i < e.length; i++) Dn(e[i], t, n);
    else if (Vc(e) || qi(e)) e.forEach((i) => {
      Dn(i, t, n);
    });
    else if (Yc(e)) {
      for (const i in e) Dn(e[i], t, n);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Dn(e[i], t, n);
    }
    return e;
  }
  function Kr(e, t, n, i) {
    try {
      return i ? e(...i) : e();
    } catch (l) {
      ss(l, t, n);
    }
  }
  function pn(e, t, n, i) {
    if (Se(e)) {
      const l = Kr(e, t, n, i);
      return l && qc(l) && l.catch((c) => {
        ss(c, t, n);
      }), l;
    }
    if (Ie(e)) {
      const l = [];
      for (let c = 0; c < e.length; c++) l.push(pn(e[c], t, n, i));
      return l;
    }
  }
  function ss(e, t, n, i = true) {
    const l = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: f } = t && t.appContext.config || Fe;
    if (t) {
      let h = t.parent;
      const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; h; ) {
        const g = h.ec;
        if (g) {
          for (let E = 0; E < g.length; E++) if (g[E](e, p, v) === false) return;
        }
        h = h.parent;
      }
      if (c) {
        Bn(), Kr(c, null, 10, [
          e,
          p,
          v
        ]), $n();
        return;
      }
    }
    rd(e, n, l, i, f);
  }
  function rd(e, t, n, i = true, l = false) {
    if (l) throw e;
    console.error(e);
  }
  const xt = [];
  let vn = -1;
  const Yi = [];
  let ii = null, Hi = 0;
  const vu = Promise.resolve();
  let Ro = null;
  Eu = function(e) {
    const t = Ro || vu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function od(e) {
    let t = vn + 1, n = xt.length;
    for (; t < n; ) {
      const i = t + n >>> 1, l = xt[i], c = jr(l);
      c < e || c === e && l.flags & 2 ? t = i + 1 : n = i;
    }
    return t;
  }
  function Fa(e) {
    if (!(e.flags & 1)) {
      const t = jr(e), n = xt[xt.length - 1];
      !n || !(e.flags & 2) && t >= jr(n) ? xt.push(e) : xt.splice(od(t), 0, e), e.flags |= 1, Iu();
    }
  }
  function Iu() {
    Ro || (Ro = vu.then(Su));
  }
  function Tu(e) {
    Ie(e) ? Yi.push(...e) : ii && e.id === -1 ? ii.splice(Hi + 1, 0, e) : e.flags & 1 || (Yi.push(e), e.flags |= 1), Iu();
  }
  function al(e, t, n = vn + 1) {
    for (; n < xt.length; n++) {
      const i = xt[n];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        xt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function _u(e) {
    if (Yi.length) {
      const t = [
        ...new Set(Yi)
      ].sort((n, i) => jr(n) - jr(i));
      if (Yi.length = 0, ii) {
        ii.push(...t);
        return;
      }
      for (ii = t, Hi = 0; Hi < ii.length; Hi++) {
        const n = ii[Hi];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      ii = null, Hi = 0;
    }
  }
  const jr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Su(e) {
    try {
      for (vn = 0; vn < xt.length; vn++) {
        const t = xt[vn];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Kr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; vn < xt.length; vn++) {
        const t = xt[vn];
        t && (t.flags &= -2);
      }
      vn = -1, xt.length = 0, _u(), Ro = null, (xt.length || Yi.length) && Su();
    }
  }
  let Et = null, Ou = null;
  function No(e) {
    const t = Et;
    return Et = e, Ou = e && e.type.__scopeId || null, t;
  }
  sd = function(e, t = Et, n) {
    if (!t || e._n) return e;
    const i = (...l) => {
      i._d && Do(-1);
      const c = No(t);
      let f;
      try {
        f = e(...l);
      } finally {
        No(c), i._d && Do(1);
      }
      return f;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  qv = function(e, t) {
    if (Et === null) return e;
    const n = hs(Et), i = e.dirs || (e.dirs = []);
    for (let l = 0; l < t.length; l++) {
      let [c, f, h, p = Fe] = t[l];
      c && (Se(c) && (c = {
        mounted: c,
        updated: c
      }), c.deep && Dn(f), i.push({
        dir: c,
        instance: n,
        value: f,
        oldValue: void 0,
        arg: h,
        modifiers: p
      }));
    }
    return e;
  };
  function mi(e, t, n, i) {
    const l = e.dirs, c = t && t.dirs;
    for (let f = 0; f < l.length; f++) {
      const h = l[f];
      c && (h.oldValue = c[f].value);
      let p = h.dir[i];
      p && (Bn(), pn(p, n, 8, [
        e.el,
        h,
        e,
        t
      ]), $n());
    }
  }
  const Au = /* @__PURE__ */ Symbol("_vte"), Pu = (e) => e.__isTeleport, Pr = (e) => e && (e.disabled || e.disabled === ""), ll = (e) => e && (e.defer || e.defer === ""), cl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ul = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Qs = (e, t) => {
    const n = e && e.to;
    return ot(n) ? t ? t(n) : null : n;
  }, Mu = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, i, l, c, f, h, p, v) {
      const { mc: g, pc: E, pbc: P, o: { insert: M, querySelector: C, createText: k, createComment: se } } = v, te = Pr(t.props);
      let { shapeFlag: H, children: ie, dynamicChildren: G } = t;
      if (e == null) {
        const pe = t.el = k(""), ge = t.anchor = k("");
        M(pe, n, i), M(ge, n, i);
        const re = (ee, me) => {
          H & 16 && g(ie, ee, me, l, c, f, h, p);
        }, fe = () => {
          const ee = t.target = Qs(t.props, C), me = Ru(ee, t, k, M);
          ee && (f !== "svg" && cl(ee) ? f = "svg" : f !== "mathml" && ul(ee) && (f = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(ee), te || (re(ee, me), wo(t, false)));
        };
        te && (re(n, ge), wo(t, true)), ll(t.props) ? (t.el.__isMounted = false, gt(() => {
          fe(), delete t.el.__isMounted;
        }, c)) : fe();
      } else {
        if (ll(t.props) && e.el.__isMounted === false) {
          gt(() => {
            Mu.process(e, t, n, i, l, c, f, h, p, v);
          }, c);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const pe = t.anchor = e.anchor, ge = t.target = e.target, re = t.targetAnchor = e.targetAnchor, fe = Pr(e.props), ee = fe ? n : ge, me = fe ? pe : re;
        if (f === "svg" || cl(ge) ? f = "svg" : (f === "mathml" || ul(ge)) && (f = "mathml"), G ? (P(e.dynamicChildren, G, ee, l, c, f, h), Ba(e, t, true)) : p || E(e, t, ee, me, l, c, f, h, false), te) fe ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : oo(t, n, pe, v, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Pe = t.target = Qs(t.props, C);
          Pe && oo(t, Pe, null, v, 0);
        } else fe && oo(t, ge, re, v, 1);
        wo(t, te);
      }
    },
    remove(e, t, n, { um: i, o: { remove: l } }, c) {
      const { shapeFlag: f, children: h, anchor: p, targetStart: v, targetAnchor: g, target: E, props: P } = e;
      if (E && (l(v), l(g)), c && l(p), f & 16) {
        const M = c || !Pr(P);
        for (let C = 0; C < h.length; C++) {
          const k = h[C];
          i(k, t, n, M, !!k.dynamicChildren);
        }
      }
    },
    move: oo,
    hydrate: ad
  };
  function oo(e, t, n, { o: { insert: i }, m: l }, c = 2) {
    c === 0 && i(e.targetAnchor, t, n);
    const { el: f, anchor: h, shapeFlag: p, children: v, props: g } = e, E = c === 2;
    if (E && i(f, t, n), (!E || Pr(g)) && p & 16) for (let P = 0; P < v.length; P++) l(v[P], t, n, 2);
    E && i(h, t, n);
  }
  function ad(e, t, n, i, l, c, { o: { nextSibling: f, parentNode: h, querySelector: p, insert: v, createText: g } }, E) {
    function P(k, se, te, H) {
      se.anchor = E(f(k), se, h(k), n, i, l, c), se.targetStart = te, se.targetAnchor = H;
    }
    const M = t.target = Qs(t.props, p), C = Pr(t.props);
    if (M) {
      const k = M._lpa || M.firstChild;
      if (t.shapeFlag & 16) if (C) P(e, t, k, k && f(k));
      else {
        t.anchor = f(e);
        let se = k;
        for (; se; ) {
          if (se && se.nodeType === 8) {
            if (se.data === "teleport start anchor") t.targetStart = se;
            else if (se.data === "teleport anchor") {
              t.targetAnchor = se, M._lpa = t.targetAnchor && f(t.targetAnchor);
              break;
            }
          }
          se = f(se);
        }
        t.targetAnchor || Ru(M, t, g, v), E(k && f(k), t, M, n, i, l, c);
      }
      wo(t, C);
    } else C && t.shapeFlag & 16 && P(e, t, e, f(e));
    return t.anchor && f(t.anchor);
  }
  Kv = Mu;
  function wo(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let i, l;
      for (t ? (i = e.el, l = e.anchor) : (i = e.targetStart, l = e.targetAnchor); i && i !== l; ) i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
      n.ut();
    }
  }
  function Ru(e, t, n, i) {
    const l = t.targetStart = n(""), c = t.targetAnchor = n("");
    return l[Au] = c, e && (i(l, e), i(c, e)), c;
  }
  const Fn = /* @__PURE__ */ Symbol("_leaveCb"), so = /* @__PURE__ */ Symbol("_enterCb");
  function Nu() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return Yr(() => {
      e.isMounted = true;
    }), Ua(() => {
      e.isUnmounting = true;
    }), e;
  }
  const en = [
    Function,
    Array
  ], ku = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: en,
    onEnter: en,
    onAfterEnter: en,
    onEnterCancelled: en,
    onBeforeLeave: en,
    onLeave: en,
    onAfterLeave: en,
    onLeaveCancelled: en,
    onBeforeAppear: en,
    onAppear: en,
    onAfterAppear: en,
    onAppearCancelled: en
  }, Lu = (e) => {
    const t = e.subTree;
    return t.component ? Lu(t.component) : t;
  }, ld = {
    name: "BaseTransition",
    props: ku,
    setup(e, { slots: t }) {
      const n = Jn(), i = Nu();
      return () => {
        const l = t.default && xa(t.default(), true);
        if (!l || !l.length) return;
        const c = Cu(l), f = Ce(e), { mode: h } = f;
        if (i.isLeaving) return Os(c);
        const p = fl(c);
        if (!p) return Os(c);
        let v = Gr(p, f, i, n, (E) => v = E);
        p.type !== vt && ci(p, v);
        let g = n.subTree && fl(n.subTree);
        if (g && g.type !== vt && !oi(g, p) && Lu(n).type !== vt) {
          let E = Gr(g, f, i, n);
          if (ci(g, E), h === "out-in" && p.type !== vt) return i.isLeaving = true, E.afterLeave = () => {
            i.isLeaving = false, n.job.flags & 8 || n.update(), delete E.afterLeave, g = void 0;
          }, Os(c);
          h === "in-out" && p.type !== vt ? E.delayLeave = (P, M, C) => {
            const k = Fu(i, g);
            k[String(g.key)] = g, P[Fn] = () => {
              M(), P[Fn] = void 0, delete v.delayedLeave, g = void 0;
            }, v.delayedLeave = () => {
              C(), delete v.delayedLeave, g = void 0;
            };
          } : g = void 0;
        } else g && (g = void 0);
        return c;
      };
    }
  };
  function Cu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== vt) {
        t = n;
        break;
      }
    }
    return t;
  }
  const cd = ld;
  function Fu(e, t) {
    const { leavingVNodes: n } = e;
    let i = n.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
  }
  function Gr(e, t, n, i, l) {
    const { appear: c, mode: f, persisted: h = false, onBeforeEnter: p, onEnter: v, onAfterEnter: g, onEnterCancelled: E, onBeforeLeave: P, onLeave: M, onAfterLeave: C, onLeaveCancelled: k, onBeforeAppear: se, onAppear: te, onAfterAppear: H, onAppearCancelled: ie } = t, G = String(e.key), pe = Fu(n, e), ge = (ee, me) => {
      ee && pn(ee, i, 9, me);
    }, re = (ee, me) => {
      const Pe = me[1];
      ge(ee, me), Ie(ee) ? ee.every((he) => he.length <= 1) && Pe() : ee.length <= 1 && Pe();
    }, fe = {
      mode: f,
      persisted: h,
      beforeEnter(ee) {
        let me = p;
        if (!n.isMounted) if (c) me = se || p;
        else return;
        ee[Fn] && ee[Fn](true);
        const Pe = pe[G];
        Pe && oi(e, Pe) && Pe.el[Fn] && Pe.el[Fn](), ge(me, [
          ee
        ]);
      },
      enter(ee) {
        let me = v, Pe = g, he = E;
        if (!n.isMounted) if (c) me = te || v, Pe = H || g, he = ie || E;
        else return;
        let Ue = false;
        const ct = ee[so] = (Bt) => {
          Ue || (Ue = true, Bt ? ge(he, [
            ee
          ]) : ge(Pe, [
            ee
          ]), fe.delayedLeave && fe.delayedLeave(), ee[so] = void 0);
        };
        me ? re(me, [
          ee,
          ct
        ]) : ct();
      },
      leave(ee, me) {
        const Pe = String(e.key);
        if (ee[so] && ee[so](true), n.isUnmounting) return me();
        ge(P, [
          ee
        ]);
        let he = false;
        const Ue = ee[Fn] = (ct) => {
          he || (he = true, me(), ct ? ge(k, [
            ee
          ]) : ge(C, [
            ee
          ]), ee[Fn] = void 0, pe[Pe] === e && delete pe[Pe]);
        };
        pe[Pe] = e, M ? re(M, [
          ee,
          Ue
        ]) : Ue();
      },
      clone(ee) {
        const me = Gr(ee, t, n, i, l);
        return l && l(me), me;
      }
    };
    return fe;
  }
  function Os(e) {
    if (as(e)) return e = Hn(e), e.children = null, e;
  }
  function fl(e) {
    if (!as(e)) return Pu(e.type) && e.children ? Cu(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && Se(n.default)) return n.default();
    }
  }
  function ci(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, ci(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function xa(e, t = false, n) {
    let i = [], l = 0;
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      const h = n == null ? f.key : String(n) + String(f.key != null ? f.key : c);
      f.type === Pt ? (f.patchFlag & 128 && l++, i = i.concat(xa(f.children, t, h))) : (t || f.type !== vt) && i.push(h != null ? Hn(f, {
        key: h
      }) : f);
    }
    if (l > 1) for (let c = 0; c < i.length; c++) i[c].patchFlag = -2;
    return i;
  }
  ud = function(e, t) {
    return Se(e) ? ft({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  Yv = function() {
    const e = Jn();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
  };
  function xu(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  Jv = function(e) {
    const t = Jn(), n = Vh(null);
    if (t) {
      const l = t.refs === Fe ? t.refs = {} : t.refs;
      Object.defineProperty(l, e, {
        enumerable: true,
        get: () => n.value,
        set: (c) => n.value = c
      });
    }
    return n;
  };
  const ko = /* @__PURE__ */ new WeakMap();
  function Mr(e, t, n, i, l = false) {
    if (Ie(e)) {
      e.forEach((C, k) => Mr(C, t && (Ie(t) ? t[k] : t), n, i, l));
      return;
    }
    if (Mi(i) && !l) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Mr(e, t, n, i.component.subTree);
      return;
    }
    const c = i.shapeFlag & 4 ? hs(i.component) : i.el, f = l ? null : c, { i: h, r: p } = e, v = t && t.r, g = h.refs === Fe ? h.refs = {} : h.refs, E = h.setupState, P = Ce(E), M = E === Fe ? Hc : (C) => We(P, C);
    if (v != null && v !== p) {
      if (hl(t), ot(v)) g[v] = null, M(v) && (E[v] = null);
      else if (at(v)) {
        v.value = null;
        const C = t;
        C.k && (g[C.k] = null);
      }
    }
    if (Se(p)) Kr(p, h, 12, [
      f,
      g
    ]);
    else {
      const C = ot(p), k = at(p);
      if (C || k) {
        const se = () => {
          if (e.f) {
            const te = C ? M(p) ? E[p] : g[p] : p.value;
            if (l) Ie(te) && Aa(te, c);
            else if (Ie(te)) te.includes(c) || te.push(c);
            else if (C) g[p] = [
              c
            ], M(p) && (E[p] = g[p]);
            else {
              const H = [
                c
              ];
              p.value = H, e.k && (g[e.k] = H);
            }
          } else C ? (g[p] = f, M(p) && (E[p] = f)) : k && (p.value = f, e.k && (g[e.k] = f));
        };
        if (f) {
          const te = () => {
            se(), ko.delete(e);
          };
          te.id = -1, ko.set(e, te), gt(te, n);
        } else hl(e), se();
      }
    }
  }
  function hl(e) {
    const t = ko.get(e);
    t && (t.flags |= 8, ko.delete(e));
  }
  es().requestIdleCallback;
  es().cancelIdleCallback;
  let Mi, as, fd;
  Mi = (e) => !!e.type.__asyncLoader;
  as = (e) => e.type.__isKeepAlive;
  fd = {
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
      const n = Jn(), i = n.ctx;
      if (!i.renderer) return () => {
        const H = t.default && t.default();
        return H && H.length === 1 ? H[0] : H;
      };
      const l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
      let f = null;
      const h = n.suspense, { renderer: { p, m: v, um: g, o: { createElement: E } } } = i, P = E("div");
      i.activate = (H, ie, G, pe, ge) => {
        const re = H.component;
        v(H, ie, G, 0, h), p(re.vnode, H, ie, G, re, h, pe, H.slotScopeIds, ge), gt(() => {
          re.isDeactivated = false, re.a && Sr(re.a);
          const fe = H.props && H.props.onVnodeMounted;
          fe && nn(fe, re.parent, H);
        }, h);
      }, i.deactivate = (H) => {
        const ie = H.component;
        Fo(ie.m), Fo(ie.a), v(H, P, null, 1, h), gt(() => {
          ie.da && Sr(ie.da);
          const G = H.props && H.props.onVnodeUnmounted;
          G && nn(G, ie.parent, H), ie.isDeactivated = true;
        }, h);
      };
      function M(H) {
        As(H), g(H, n, h, true);
      }
      function C(H) {
        l.forEach((ie, G) => {
          const pe = sa(ie.type);
          pe && !H(pe) && k(G);
        });
      }
      function k(H) {
        const ie = l.get(H);
        ie && (!f || !oi(ie, f)) ? M(ie) : f && As(f), l.delete(H), c.delete(H);
      }
      Ji(() => [
        e.include,
        e.exclude
      ], ([H, ie]) => {
        H && C((G) => vr(H, G)), ie && C((G) => !vr(ie, G));
      }, {
        flush: "post",
        deep: true
      });
      let se = null;
      const te = () => {
        se != null && (xo(n.subTree.type) ? gt(() => {
          l.set(se, ao(n.subTree));
        }, n.subTree.suspense) : l.set(se, ao(n.subTree)));
      };
      return Yr(te), Da(te), Ua(() => {
        l.forEach((H) => {
          const { subTree: ie, suspense: G } = n, pe = ao(ie);
          if (H.type === pe.type && H.key === pe.key) {
            As(pe);
            const ge = pe.component.da;
            ge && gt(ge, G);
            return;
          }
          M(H);
        });
      }), () => {
        if (se = null, !t.default) return f = null;
        const H = t.default(), ie = H[0];
        if (H.length > 1) return f = null, H;
        if (!Zi(ie) || !(ie.shapeFlag & 4) && !(ie.shapeFlag & 128)) return f = null, ie;
        let G = ao(ie);
        if (G.type === vt) return f = null, G;
        const pe = G.type, ge = sa(Mi(G) ? G.type.__asyncResolved || {} : pe), { include: re, exclude: fe, max: ee } = e;
        if (re && (!ge || !vr(re, ge)) || fe && ge && vr(fe, ge)) return G.shapeFlag &= -257, f = G, ie;
        const me = G.key == null ? pe : G.key, Pe = l.get(me);
        return G.el && (G = Hn(G), ie.shapeFlag & 128 && (ie.ssContent = G)), se = me, Pe ? (G.el = Pe.el, G.component = Pe.component, G.transition && ci(G, G.transition), G.shapeFlag |= 512, c.delete(me), c.add(me)) : (c.add(me), ee && c.size > parseInt(ee, 10) && k(c.values().next().value)), G.shapeFlag |= 256, f = G, xo(ie.type) ? ie : G;
      };
    }
  };
  Xv = fd;
  function vr(e, t) {
    return Ie(e) ? e.some((n) => vr(n, t)) : ot(e) ? e.split(",").includes(t) : hh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  hd = function(e, t) {
    Du(e, "a", t);
  };
  dd = function(e, t) {
    Du(e, "da", t);
  };
  function Du(e, t, n = Mt) {
    const i = e.__wdc || (e.__wdc = () => {
      let l = n;
      for (; l; ) {
        if (l.isDeactivated) return;
        l = l.parent;
      }
      return e();
    });
    if (ls(t, i, n), n) {
      let l = n.parent;
      for (; l && l.parent; ) as(l.parent.vnode) && pd(i, t, n, l), l = l.parent;
    }
  }
  function pd(e, t, n, i) {
    const l = ls(t, e, i, true);
    ja(() => {
      Aa(i[t], l);
    }, n);
  }
  function As(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function ao(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function ls(e, t, n = Mt, i = false) {
    if (n) {
      const l = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...f) => {
        Bn();
        const h = Jr(n), p = pn(t, n, e, f);
        return h(), $n(), p;
      });
      return i ? l.unshift(c) : l.push(c), c;
    }
  }
  let Yn, Uu, Da, md, wd, yd;
  Yn = (e) => (t, n = Mt) => {
    (!Br || e === "sp") && ls(e, (...i) => t(...i), n);
  };
  gd = Yn("bm");
  Yr = Yn("m");
  Uu = Yn("bu");
  Da = Yn("u");
  Ua = Yn("bum");
  ja = Yn("um");
  md = Yn("sp");
  wd = Yn("rtg");
  yd = Yn("rtc");
  function bd(e, t = Mt) {
    ls("ec", e, t);
  }
  const vd = "components", ju = /* @__PURE__ */ Symbol.for("v-ndc");
  Zv = function(e) {
    return ot(e) ? Ed(vd, e, false) || e : e || ju;
  };
  function Ed(e, t, n = true, i = false) {
    const l = Et || Mt;
    if (l) {
      const c = l.type;
      {
        const h = sa(c, false);
        if (h && (h === t || h === Jt(t) || h === Qo(Jt(t)))) return c;
      }
      const f = dl(l[e] || c[e], t) || dl(l.appContext[e], t);
      return !f && i ? c : f;
    }
  }
  function dl(e, t) {
    return e && (e[t] || e[Jt(t)] || e[Qo(Jt(t))]);
  }
  Id = function(e, t, n, i) {
    let l;
    const c = n, f = Ie(e);
    if (f || ot(e)) {
      const h = f && jn(e);
      let p = false, v = false;
      h && (p = !Yt(e), v = zn(e), e = is(e)), l = new Array(e.length);
      for (let g = 0, E = e.length; g < E; g++) l[g] = t(p ? v ? Xi(dn(e[g])) : dn(e[g]) : e[g], g, void 0, c);
    } else if (typeof e == "number") {
      l = new Array(e);
      for (let h = 0; h < e; h++) l[h] = t(h + 1, h, void 0, c);
    } else if (qe(e)) if (e[Symbol.iterator]) l = Array.from(e, (h, p) => t(h, p, void 0, c));
    else {
      const h = Object.keys(e);
      l = new Array(h.length);
      for (let p = 0, v = h.length; p < v; p++) {
        const g = h[p];
        l[p] = t(e[g], g, p, c);
      }
    }
    else l = [];
    return l;
  };
  Qv = function(e, t, n = {}, i, l) {
    if (Et.ce || Et.parent && Mi(Et.parent) && Et.parent.ce) {
      const v = Object.keys(n).length > 0;
      return t !== "default" && (n.name = t), rn(), ra(Pt, null, [
        Rt("slot", n, i && i())
      ], v ? -2 : 64);
    }
    let c = e[t];
    c && c._c && (c._d = false), rn();
    const f = c && Gu(c(n)), h = n.key || f && f.key, p = ra(Pt, {
      key: (h && !qn(h) ? h : `_${t}`) + (!f && i ? "_fb" : "")
    }, f || (i ? i() : []), f && e._ === 1 ? 64 : -2);
    return !l && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), c && c._c && (c._d = true), p;
  };
  function Gu(e) {
    return e.some((t) => Zi(t) ? !(t.type === vt || t.type === Pt && !Gu(t.children)) : true) ? e : null;
  }
  const ea = (e) => e ? of(e) ? hs(e) : ea(e.parent) : null, Rr = ft(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ea(e.parent),
    $root: (e) => ea(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Eu.bind(e.proxy)),
    $watch: (e) => xd.bind(e)
  }), Ps = (e, t) => e !== Fe && !e.__isScriptSetup && We(e, t), Td = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: i, data: l, props: c, accessCache: f, type: h, appContext: p } = e;
      if (t[0] !== "$") {
        const P = f[t];
        if (P !== void 0) switch (P) {
          case 1:
            return i[t];
          case 2:
            return l[t];
          case 4:
            return n[t];
          case 3:
            return c[t];
        }
        else {
          if (Ps(i, t)) return f[t] = 1, i[t];
          if (l !== Fe && We(l, t)) return f[t] = 2, l[t];
          if (We(c, t)) return f[t] = 3, c[t];
          if (n !== Fe && We(n, t)) return f[t] = 4, n[t];
          ta && (f[t] = 0);
        }
      }
      const v = Rr[t];
      let g, E;
      if (v) return t === "$attrs" && At(e.attrs, "get", ""), v(e);
      if ((g = h.__cssModules) && (g = g[t])) return g;
      if (n !== Fe && We(n, t)) return f[t] = 4, n[t];
      if (E = p.config.globalProperties, We(E, t)) return E[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: l, ctx: c } = e;
      return Ps(l, t) ? (l[t] = n, true) : i !== Fe && We(i, t) ? (i[t] = n, true) : We(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (c[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: l, props: c, type: f } }, h) {
      let p;
      return !!(n[h] || e !== Fe && h[0] !== "$" && We(e, h) || Ps(t, h) || We(c, h) || We(i, h) || We(Rr, h) || We(l.config.globalProperties, h) || (p = f.__cssModules) && p[h]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : We(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function Lo(e) {
    return Ie(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  e0 = function(e, t) {
    return !e || !t ? e || t : Ie(e) && Ie(t) ? e.concat(t) : ft({}, Lo(e), Lo(t));
  };
  let ta = true;
  function _d(e) {
    const t = Bu(e), n = e.proxy, i = e.ctx;
    ta = false, t.beforeCreate && pl(t.beforeCreate, e, "bc");
    const { data: l, computed: c, methods: f, watch: h, provide: p, inject: v, created: g, beforeMount: E, mounted: P, beforeUpdate: M, updated: C, activated: k, deactivated: se, beforeDestroy: te, beforeUnmount: H, destroyed: ie, unmounted: G, render: pe, renderTracked: ge, renderTriggered: re, errorCaptured: fe, serverPrefetch: ee, expose: me, inheritAttrs: Pe, components: he, directives: Ue, filters: ct } = t;
    if (v && Sd(v, i, null), f) for (const Re in f) {
      const ze = f[Re];
      Se(ze) && (i[Re] = ze.bind(n));
    }
    if (l) {
      const Re = l.call(n, n);
      qe(Re) && (e.data = rs(Re));
    }
    if (ta = true, c) for (const Re in c) {
      const ze = c[Re], An = Se(ze) ? ze.bind(n, n) : Se(ze.get) ? ze.get.bind(n, n) : fn, Di = !Se(ze) && Se(ze.set) ? ze.set.bind(n) : fn, Pn = za({
        get: An,
        set: Di
      });
      Object.defineProperty(i, Re, {
        enumerable: true,
        configurable: true,
        get: () => Pn.value,
        set: (ve) => Pn.value = ve
      });
    }
    if (h) for (const Re in h) Wu(h[Re], i, n, Re);
    if (p) {
      const Re = Se(p) ? p.call(n) : p;
      Reflect.ownKeys(Re).forEach((ze) => {
        Nd(ze, Re[ze]);
      });
    }
    g && pl(g, e, "c");
    function Ke(Re, ze) {
      Ie(ze) ? ze.forEach((An) => Re(An.bind(n))) : ze && Re(ze.bind(n));
    }
    if (Ke(gd, E), Ke(Yr, P), Ke(Uu, M), Ke(Da, C), Ke(hd, k), Ke(dd, se), Ke(bd, fe), Ke(yd, ge), Ke(wd, re), Ke(Ua, H), Ke(ja, G), Ke(md, ee), Ie(me)) if (me.length) {
      const Re = e.exposed || (e.exposed = {});
      me.forEach((ze) => {
        Object.defineProperty(Re, ze, {
          get: () => n[ze],
          set: (An) => n[ze] = An,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    pe && e.render === fn && (e.render = pe), Pe != null && (e.inheritAttrs = Pe), he && (e.components = he), Ue && (e.directives = Ue), ee && xu(e);
  }
  function Sd(e, t, n = fn) {
    Ie(e) && (e = na(e));
    for (const i in e) {
      const l = e[i];
      let c;
      qe(l) ? "default" in l ? c = Nr(l.from || i, l.default, true) : c = Nr(l.from || i) : c = Nr(l), at(c) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (f) => c.value = f
      }) : t[i] = c;
    }
  }
  function pl(e, t, n) {
    pn(Ie(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Wu(e, t, n, i) {
    let l = i.includes(".") ? zu(n, i) : () => n[i];
    if (ot(e)) {
      const c = t[e];
      Se(c) && Ji(l, c);
    } else if (Se(e)) Ji(l, e.bind(n));
    else if (qe(e)) if (Ie(e)) e.forEach((c) => Wu(c, t, n, i));
    else {
      const c = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
      Se(c) && Ji(l, c, e);
    }
  }
  function Bu(e) {
    const t = e.type, { mixins: n, extends: i } = t, { mixins: l, optionsCache: c, config: { optionMergeStrategies: f } } = e.appContext, h = c.get(t);
    let p;
    return h ? p = h : !l.length && !n && !i ? p = t : (p = {}, l.length && l.forEach((v) => Co(p, v, f, true)), Co(p, t, f)), qe(t) && c.set(t, p), p;
  }
  function Co(e, t, n, i = false) {
    const { mixins: l, extends: c } = t;
    c && Co(e, c, n, true), l && l.forEach((f) => Co(e, f, n, true));
    for (const f in t) if (!(i && f === "expose")) {
      const h = Od[f] || n && n[f];
      e[f] = h ? h(e[f], t[f]) : t[f];
    }
    return e;
  }
  const Od = {
    data: gl,
    props: ml,
    emits: ml,
    methods: Er,
    computed: Er,
    beforeCreate: Lt,
    created: Lt,
    beforeMount: Lt,
    mounted: Lt,
    beforeUpdate: Lt,
    updated: Lt,
    beforeDestroy: Lt,
    beforeUnmount: Lt,
    destroyed: Lt,
    unmounted: Lt,
    activated: Lt,
    deactivated: Lt,
    errorCaptured: Lt,
    serverPrefetch: Lt,
    components: Er,
    directives: Er,
    watch: Pd,
    provide: gl,
    inject: Ad
  };
  function gl(e, t) {
    return t ? e ? function() {
      return ft(Se(e) ? e.call(this, this) : e, Se(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Ad(e, t) {
    return Er(na(e), na(t));
  }
  function na(e) {
    if (Ie(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function Lt(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function Er(e, t) {
    return e ? ft(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function ml(e, t) {
    return e ? Ie(e) && Ie(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : ft(/* @__PURE__ */ Object.create(null), Lo(e), Lo(t ?? {})) : t;
  }
  function Pd(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ft(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) n[i] = Lt(e[i], t[i]);
    return n;
  }
  function $u() {
    return {
      app: null,
      config: {
        isNativeTag: Hc,
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
  let Md = 0;
  function Rd(e, t) {
    return function(i, l = null) {
      Se(i) || (i = ft({}, i)), l != null && !qe(l) && (l = null);
      const c = $u(), f = /* @__PURE__ */ new WeakSet(), h = [];
      let p = false;
      const v = c.app = {
        _uid: Md++,
        _component: i,
        _props: l,
        _container: null,
        _context: c,
        _instance: null,
        version: pp,
        get config() {
          return c.config;
        },
        set config(g) {
        },
        use(g, ...E) {
          return f.has(g) || (g && Se(g.install) ? (f.add(g), g.install(v, ...E)) : Se(g) && (f.add(g), g(v, ...E))), v;
        },
        mixin(g) {
          return c.mixins.includes(g) || c.mixins.push(g), v;
        },
        component(g, E) {
          return E ? (c.components[g] = E, v) : c.components[g];
        },
        directive(g, E) {
          return E ? (c.directives[g] = E, v) : c.directives[g];
        },
        mount(g, E, P) {
          if (!p) {
            const M = v._ceVNode || Rt(i, l);
            return M.appContext = c, P === true ? P = "svg" : P === false && (P = void 0), e(M, g, P), p = true, v._container = g, g.__vue_app__ = v, hs(M.component);
          }
        },
        onUnmount(g) {
          h.push(g);
        },
        unmount() {
          p && (pn(h, v._instance, 16), e(null, v._container), delete v._container.__vue_app__);
        },
        provide(g, E) {
          return c.provides[g] = E, v;
        },
        runWithContext(g) {
          const E = Ri;
          Ri = v;
          try {
            return g();
          } finally {
            Ri = E;
          }
        }
      };
      return v;
    };
  }
  let Ri = null;
  Nd = function(e, t) {
    if (Mt) {
      let n = Mt.provides;
      const i = Mt.parent && Mt.parent.provides;
      i === n && (n = Mt.provides = Object.create(i)), n[e] = t;
    }
  };
  Nr = function(e, t, n = false) {
    const i = Jn();
    if (i || Ri) {
      let l = Ri ? Ri._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (l && e in l) return l[e];
      if (arguments.length > 1) return n && Se(t) ? t.call(i && i.proxy) : t;
    }
  };
  kd = function() {
    return !!(Jn() || Ri);
  };
  const Ld = /* @__PURE__ */ Symbol.for("v-scx"), Cd = () => Nr(Ld);
  t0 = function(e, t) {
    return cs(e, null, t);
  };
  function Fd(e, t) {
    return cs(e, null, {
      flush: "sync"
    });
  }
  Ji = function(e, t, n) {
    return cs(e, t, n);
  };
  function cs(e, t, n = Fe) {
    const { immediate: i, deep: l, flush: c, once: f } = n, h = ft({}, n), p = t && i || !t && c !== "post";
    let v;
    if (Br) {
      if (c === "sync") {
        const M = Cd();
        v = M.__watcherHandles || (M.__watcherHandles = []);
      } else if (!p) {
        const M = () => {
        };
        return M.stop = fn, M.resume = fn, M.pause = fn, M;
      }
    }
    const g = Mt;
    h.call = (M, C, k) => pn(M, g, C, k);
    let E = false;
    c === "post" ? h.scheduler = (M) => {
      gt(M, g && g.suspense);
    } : c !== "sync" && (E = true, h.scheduler = (M, C) => {
      C ? M() : Fa(M);
    }), h.augmentJob = (M) => {
      t && (M.flags |= 4), E && (M.flags |= 2, g && (M.id = g.uid, M.i = g));
    };
    const P = id(e, t, h);
    return Br && (v ? v.push(P) : p && P()), P;
  }
  function xd(e, t, n) {
    const i = this.proxy, l = ot(e) ? e.includes(".") ? zu(i, e) : () => i[e] : e.bind(i, i);
    let c;
    Se(t) ? c = t : (c = t.handler, n = t);
    const f = Jr(this), h = cs(l, c.bind(i), n);
    return f(), h;
  }
  function zu(e, t) {
    const n = t.split(".");
    return () => {
      let i = e;
      for (let l = 0; l < n.length && i; l++) i = i[n[l]];
      return i;
    };
  }
  n0 = function(e, t, n = Fe) {
    const i = Jn(), l = Jt(t), c = Kn(t), f = Hu(e, l), h = Jh((p, v) => {
      let g, E = Fe, P;
      return Fd(() => {
        const M = e[l];
        Gt(g, M) && (g = M, v());
      }), {
        get() {
          return p(), n.get ? n.get(g) : g;
        },
        set(M) {
          const C = n.set ? n.set(M) : M;
          if (!Gt(C, g) && !(E !== Fe && Gt(M, E))) return;
          const k = i.vnode.props;
          k && (t in k || l in k || c in k) && (`onUpdate:${t}` in k || `onUpdate:${l}` in k || `onUpdate:${c}` in k) || (g = M, v()), i.emit(`update:${t}`, C), Gt(M, C) && Gt(M, E) && !Gt(C, P) && v(), E = M, P = C;
        }
      };
    });
    return h[Symbol.iterator] = () => {
      let p = 0;
      return {
        next() {
          return p < 2 ? {
            value: p++ ? f || Fe : h,
            done: false
          } : {
            done: true
          };
        }
      };
    }, h;
  };
  const Hu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Jt(t)}Modifiers`] || e[`${Kn(t)}Modifiers`];
  function Dd(e, t, ...n) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || Fe;
    let l = n;
    const c = t.startsWith("update:"), f = c && Hu(i, t.slice(7));
    f && (f.trim && (l = n.map((g) => ot(g) ? g.trim() : g)), f.number && (l = n.map(mh)));
    let h, p = i[h = Es(t)] || i[h = Es(Jt(t))];
    !p && c && (p = i[h = Es(Kn(t))]), p && pn(p, e, 6, l);
    const v = i[h + "Once"];
    if (v) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, pn(v, e, 6, l);
    }
  }
  const Ud = /* @__PURE__ */ new WeakMap();
  function Vu(e, t, n = false) {
    const i = n ? Ud : t.emitsCache, l = i.get(e);
    if (l !== void 0) return l;
    const c = e.emits;
    let f = {}, h = false;
    if (!Se(e)) {
      const p = (v) => {
        const g = Vu(v, t, true);
        g && (h = true, ft(f, g));
      };
      !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !c && !h ? (qe(e) && i.set(e, null), null) : (Ie(c) ? c.forEach((p) => f[p] = null) : ft(f, c), qe(e) && i.set(e, f), f);
  }
  function us(e, t) {
    return !e || !Jo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), We(e, t[0].toLowerCase() + t.slice(1)) || We(e, Kn(t)) || We(e, t));
  }
  function wl(e) {
    const { type: t, vnode: n, proxy: i, withProxy: l, propsOptions: [c], slots: f, attrs: h, emit: p, render: v, renderCache: g, props: E, data: P, setupState: M, ctx: C, inheritAttrs: k } = e, se = No(e);
    let te, H;
    try {
      if (n.shapeFlag & 4) {
        const G = l || i, pe = G;
        te = En(v.call(pe, G, g, E, M, P, C)), H = h;
      } else {
        const G = t;
        te = En(G.length > 1 ? G(E, {
          attrs: h,
          slots: f,
          emit: p
        }) : G(E, null)), H = t.props ? h : jd(h);
      }
    } catch (G) {
      Lr.length = 0, ss(G, e, 1), te = Rt(vt);
    }
    let ie = te;
    if (H && k !== false) {
      const G = Object.keys(H), { shapeFlag: pe } = ie;
      G.length && pe & 7 && (c && G.some(Oa) && (H = Gd(H, c)), ie = Hn(ie, H, false, true));
    }
    return n.dirs && (ie = Hn(ie, null, false, true), ie.dirs = ie.dirs ? ie.dirs.concat(n.dirs) : n.dirs), n.transition && ci(ie, n.transition), te = ie, No(se), te;
  }
  const jd = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Jo(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Gd = (e, t) => {
    const n = {};
    for (const i in e) (!Oa(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
  function Wd(e, t, n) {
    const { props: i, children: l, component: c } = e, { props: f, children: h, patchFlag: p } = t, v = c.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return i ? yl(i, f, v) : !!f;
      if (p & 8) {
        const g = t.dynamicProps;
        for (let E = 0; E < g.length; E++) {
          const P = g[E];
          if (f[P] !== i[P] && !us(v, P)) return true;
        }
      }
    } else return (l || h) && (!h || !h.$stable) ? true : i === f ? false : i ? f ? yl(i, f, v) : true : !!f;
    return false;
  }
  function yl(e, t, n) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let l = 0; l < i.length; l++) {
      const c = i[l];
      if (t[c] !== e[c] && !us(n, c)) return true;
    }
    return false;
  }
  function Bd({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const qu = {}, Ku = () => Object.create(qu), Yu = (e) => Object.getPrototypeOf(e) === qu;
  function $d(e, t, n, i = false) {
    const l = {}, c = Ku();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Ju(e, t, l, c);
    for (const f in e.propsOptions[0]) f in l || (l[f] = void 0);
    n ? e.props = i ? l : Hh(l) : e.type.props ? e.props = l : e.props = c, e.attrs = c;
  }
  function zd(e, t, n, i) {
    const { props: l, attrs: c, vnode: { patchFlag: f } } = e, h = Ce(l), [p] = e.propsOptions;
    let v = false;
    if ((i || f > 0) && !(f & 16)) {
      if (f & 8) {
        const g = e.vnode.dynamicProps;
        for (let E = 0; E < g.length; E++) {
          let P = g[E];
          if (us(e.emitsOptions, P)) continue;
          const M = t[P];
          if (p) if (We(c, P)) M !== c[P] && (c[P] = M, v = true);
          else {
            const C = Jt(P);
            l[C] = ia(p, h, C, M, e, false);
          }
          else M !== c[P] && (c[P] = M, v = true);
        }
      }
    } else {
      Ju(e, t, l, c) && (v = true);
      let g;
      for (const E in h) (!t || !We(t, E) && ((g = Kn(E)) === E || !We(t, g))) && (p ? n && (n[E] !== void 0 || n[g] !== void 0) && (l[E] = ia(p, h, E, void 0, e, true)) : delete l[E]);
      if (c !== h) for (const E in c) (!t || !We(t, E)) && (delete c[E], v = true);
    }
    v && xn(e.attrs, "set", "");
  }
  function Ju(e, t, n, i) {
    const [l, c] = e.propsOptions;
    let f = false, h;
    if (t) for (let p in t) {
      if (_r(p)) continue;
      const v = t[p];
      let g;
      l && We(l, g = Jt(p)) ? !c || !c.includes(g) ? n[g] = v : (h || (h = {}))[g] = v : us(e.emitsOptions, p) || (!(p in i) || v !== i[p]) && (i[p] = v, f = true);
    }
    if (c) {
      const p = Ce(n), v = h || Fe;
      for (let g = 0; g < c.length; g++) {
        const E = c[g];
        n[E] = ia(l, p, E, v[E], e, !We(v, E));
      }
    }
    return f;
  }
  function ia(e, t, n, i, l, c) {
    const f = e[n];
    if (f != null) {
      const h = We(f, "default");
      if (h && i === void 0) {
        const p = f.default;
        if (f.type !== Function && !f.skipFactory && Se(p)) {
          const { propsDefaults: v } = l;
          if (n in v) i = v[n];
          else {
            const g = Jr(l);
            i = v[n] = p.call(null, t), g();
          }
        } else i = p;
        l.ce && l.ce._setProp(n, i);
      }
      f[0] && (c && !h ? i = false : f[1] && (i === "" || i === Kn(n)) && (i = true));
    }
    return i;
  }
  const Hd = /* @__PURE__ */ new WeakMap();
  function Xu(e, t, n = false) {
    const i = n ? Hd : t.propsCache, l = i.get(e);
    if (l) return l;
    const c = e.props, f = {}, h = [];
    let p = false;
    if (!Se(e)) {
      const g = (E) => {
        p = true;
        const [P, M] = Xu(E, t, true);
        ft(f, P), M && h.push(...M);
      };
      !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
    }
    if (!c && !p) return qe(e) && i.set(e, Vi), Vi;
    if (Ie(c)) for (let g = 0; g < c.length; g++) {
      const E = Jt(c[g]);
      bl(E) && (f[E] = Fe);
    }
    else if (c) for (const g in c) {
      const E = Jt(g);
      if (bl(E)) {
        const P = c[g], M = f[E] = Ie(P) || Se(P) ? {
          type: P
        } : ft({}, P), C = M.type;
        let k = false, se = true;
        if (Ie(C)) for (let te = 0; te < C.length; ++te) {
          const H = C[te], ie = Se(H) && H.name;
          if (ie === "Boolean") {
            k = true;
            break;
          } else ie === "String" && (se = false);
        }
        else k = Se(C) && C.name === "Boolean";
        M[0] = k, M[1] = se, (k || We(M, "default")) && h.push(E);
      }
    }
    const v = [
      f,
      h
    ];
    return qe(e) && i.set(e, v), v;
  }
  function bl(e) {
    return e[0] !== "$" && !_r(e);
  }
  const Ga = (e) => e === "_" || e === "_ctx" || e === "$stable", Wa = (e) => Ie(e) ? e.map(En) : [
    En(e)
  ], Vd = (e, t, n) => {
    if (t._n) return t;
    const i = sd((...l) => Wa(t(...l)), n);
    return i._c = false, i;
  }, Zu = (e, t, n) => {
    const i = e._ctx;
    for (const l in e) {
      if (Ga(l)) continue;
      const c = e[l];
      if (Se(c)) t[l] = Vd(l, c, i);
      else if (c != null) {
        const f = Wa(c);
        t[l] = () => f;
      }
    }
  }, Qu = (e, t) => {
    const n = Wa(t);
    e.slots.default = () => n;
  }, ef = (e, t, n) => {
    for (const i in t) (n || !Ga(i)) && (e[i] = t[i]);
  }, qd = (e, t, n) => {
    const i = e.slots = Ku();
    if (e.vnode.shapeFlag & 32) {
      const l = t._;
      l ? (ef(i, t, n), n && Jc(i, "_", l, true)) : Zu(t, i);
    } else t && Qu(e, t);
  }, Kd = (e, t, n) => {
    const { vnode: i, slots: l } = e;
    let c = true, f = Fe;
    if (i.shapeFlag & 32) {
      const h = t._;
      h ? n && h === 1 ? c = false : ef(l, t, n) : (c = !t.$stable, Zu(t, l)), f = t;
    } else t && (Qu(e, t), f = {
      default: 1
    });
    if (c) for (const h in l) !Ga(h) && f[h] == null && delete l[h];
  }, gt = Qd;
  function Yd(e) {
    return Jd(e);
  }
  function Jd(e, t) {
    const n = es();
    n.__VUE__ = true;
    const { insert: i, remove: l, patchProp: c, createElement: f, createText: h, createComment: p, setText: v, setElementText: g, parentNode: E, nextSibling: P, setScopeId: M = fn, insertStaticContent: C } = e, k = (T, O, F, Y = null, q = null, K = null, ae = void 0, X = null, ne = !!O.dynamicChildren) => {
      if (T === O) return;
      T && !oi(T, O) && (Y = Mn(T), ve(T, q, K, true), T = null), O.patchFlag === -2 && (ne = false, O.dynamicChildren = null);
      const { type: V, ref: we, shapeFlag: le } = O;
      switch (V) {
        case fs:
          se(T, O, F, Y);
          break;
        case vt:
          te(T, O, F, Y);
          break;
        case kr:
          T == null && H(O, F, Y, ae);
          break;
        case Pt:
          he(T, O, F, Y, q, K, ae, X, ne);
          break;
        default:
          le & 1 ? pe(T, O, F, Y, q, K, ae, X, ne) : le & 6 ? Ue(T, O, F, Y, q, K, ae, X, ne) : (le & 64 || le & 128) && V.process(T, O, F, Y, q, K, ae, X, ne, pi);
      }
      we != null && q ? Mr(we, T && T.ref, K, O || T, !O) : we == null && T && T.ref != null && Mr(T.ref, null, K, T, true);
    }, se = (T, O, F, Y) => {
      if (T == null) i(O.el = h(O.children), F, Y);
      else {
        const q = O.el = T.el;
        O.children !== T.children && v(q, O.children);
      }
    }, te = (T, O, F, Y) => {
      T == null ? i(O.el = p(O.children || ""), F, Y) : O.el = T.el;
    }, H = (T, O, F, Y) => {
      [T.el, T.anchor] = C(T.children, O, F, Y, T.el, T.anchor);
    }, ie = ({ el: T, anchor: O }, F, Y) => {
      let q;
      for (; T && T !== O; ) q = P(T), i(T, F, Y), T = q;
      i(O, F, Y);
    }, G = ({ el: T, anchor: O }) => {
      let F;
      for (; T && T !== O; ) F = P(T), l(T), T = F;
      l(O);
    }, pe = (T, O, F, Y, q, K, ae, X, ne) => {
      if (O.type === "svg" ? ae = "svg" : O.type === "math" && (ae = "mathml"), T == null) ge(O, F, Y, q, K, ae, X, ne);
      else {
        const V = T.el && T.el._isVueCE ? T.el : null;
        try {
          V && V._beginPatch(), ee(T, O, q, K, ae, X, ne);
        } finally {
          V && V._endPatch();
        }
      }
    }, ge = (T, O, F, Y, q, K, ae, X) => {
      let ne, V;
      const { props: we, shapeFlag: le, transition: ye, dirs: Te } = T;
      if (ne = T.el = f(T.type, K, we && we.is, we), le & 8 ? g(ne, T.children) : le & 16 && fe(T.children, ne, null, Y, q, Ms(T, K), ae, X), Te && mi(T, null, Y, "created"), re(ne, T, T.scopeId, ae, Y), we) {
        for (const xe in we) xe !== "value" && !_r(xe) && c(ne, xe, null, we[xe], K, Y);
        "value" in we && c(ne, "value", null, we.value, K), (V = we.onVnodeBeforeMount) && nn(V, Y, T);
      }
      Te && mi(T, null, Y, "beforeMount");
      const ke = Xd(q, ye);
      ke && ye.beforeEnter(ne), i(ne, O, F), ((V = we && we.onVnodeMounted) || ke || Te) && gt(() => {
        V && nn(V, Y, T), ke && ye.enter(ne), Te && mi(T, null, Y, "mounted");
      }, q);
    }, re = (T, O, F, Y, q) => {
      if (F && M(T, F), Y) for (let K = 0; K < Y.length; K++) M(T, Y[K]);
      if (q) {
        let K = q.subTree;
        if (O === K || xo(K.type) && (K.ssContent === O || K.ssFallback === O)) {
          const ae = q.vnode;
          re(T, ae, ae.scopeId, ae.slotScopeIds, q.parent);
        }
      }
    }, fe = (T, O, F, Y, q, K, ae, X, ne = 0) => {
      for (let V = ne; V < T.length; V++) {
        const we = T[V] = X ? ri(T[V]) : En(T[V]);
        k(null, we, O, F, Y, q, K, ae, X);
      }
    }, ee = (T, O, F, Y, q, K, ae) => {
      const X = O.el = T.el;
      let { patchFlag: ne, dynamicChildren: V, dirs: we } = O;
      ne |= T.patchFlag & 16;
      const le = T.props || Fe, ye = O.props || Fe;
      let Te;
      if (F && wi(F, false), (Te = ye.onVnodeBeforeUpdate) && nn(Te, F, O, T), we && mi(O, T, F, "beforeUpdate"), F && wi(F, true), (le.innerHTML && ye.innerHTML == null || le.textContent && ye.textContent == null) && g(X, ""), V ? me(T.dynamicChildren, V, X, F, Y, Ms(O, q), K) : ae || ze(T, O, X, null, F, Y, Ms(O, q), K, false), ne > 0) {
        if (ne & 16) Pe(X, le, ye, F, q);
        else if (ne & 2 && le.class !== ye.class && c(X, "class", null, ye.class, q), ne & 4 && c(X, "style", le.style, ye.style, q), ne & 8) {
          const ke = O.dynamicProps;
          for (let xe = 0; xe < ke.length; xe++) {
            const De = ke[xe], It = le[De], Tt = ye[De];
            (Tt !== It || De === "value") && c(X, De, It, Tt, q, F);
          }
        }
        ne & 1 && T.children !== O.children && g(X, O.children);
      } else !ae && V == null && Pe(X, le, ye, F, q);
      ((Te = ye.onVnodeUpdated) || we) && gt(() => {
        Te && nn(Te, F, O, T), we && mi(O, T, F, "updated");
      }, Y);
    }, me = (T, O, F, Y, q, K, ae) => {
      for (let X = 0; X < O.length; X++) {
        const ne = T[X], V = O[X], we = ne.el && (ne.type === Pt || !oi(ne, V) || ne.shapeFlag & 198) ? E(ne.el) : F;
        k(ne, V, we, null, Y, q, K, ae, true);
      }
    }, Pe = (T, O, F, Y, q) => {
      if (O !== F) {
        if (O !== Fe) for (const K in O) !_r(K) && !(K in F) && c(T, K, O[K], null, q, Y);
        for (const K in F) {
          if (_r(K)) continue;
          const ae = F[K], X = O[K];
          ae !== X && K !== "value" && c(T, K, X, ae, q, Y);
        }
        "value" in F && c(T, "value", O.value, F.value, q);
      }
    }, he = (T, O, F, Y, q, K, ae, X, ne) => {
      const V = O.el = T ? T.el : h(""), we = O.anchor = T ? T.anchor : h("");
      let { patchFlag: le, dynamicChildren: ye, slotScopeIds: Te } = O;
      Te && (X = X ? X.concat(Te) : Te), T == null ? (i(V, F, Y), i(we, F, Y), fe(O.children || [], F, we, q, K, ae, X, ne)) : le > 0 && le & 64 && ye && T.dynamicChildren ? (me(T.dynamicChildren, ye, F, q, K, ae, X), (O.key != null || q && O === q.subTree) && Ba(T, O, true)) : ze(T, O, F, we, q, K, ae, X, ne);
    }, Ue = (T, O, F, Y, q, K, ae, X, ne) => {
      O.slotScopeIds = X, T == null ? O.shapeFlag & 512 ? q.ctx.activate(O, F, Y, ae, ne) : ct(O, F, Y, q, K, ae, ne) : Bt(T, O, ne);
    }, ct = (T, O, F, Y, q, K, ae) => {
      const X = T.component = ap(T, Y, q);
      if (as(T) && (X.ctx.renderer = pi), lp(X, false, ae), X.asyncDep) {
        if (q && q.registerDep(X, Ke, ae), !T.el) {
          const ne = X.subTree = Rt(vt);
          te(null, ne, O, F), T.placeholder = ne.el;
        }
      } else Ke(X, T, O, F, q, K, ae);
    }, Bt = (T, O, F) => {
      const Y = O.component = T.component;
      if (Wd(T, O, F)) if (Y.asyncDep && !Y.asyncResolved) {
        Re(Y, O, F);
        return;
      } else Y.next = O, Y.update();
      else O.el = T.el, Y.vnode = O;
    }, Ke = (T, O, F, Y, q, K, ae) => {
      const X = () => {
        if (T.isMounted) {
          let { next: le, bu: ye, u: Te, parent: ke, vnode: xe } = T;
          {
            const Zt = tf(T);
            if (Zt) {
              le && (le.el = xe.el, Re(T, le, ae)), Zt.asyncDep.then(() => {
                T.isUnmounted || X();
              });
              return;
            }
          }
          let De = le, It;
          wi(T, false), le ? (le.el = xe.el, Re(T, le, ae)) : le = xe, ye && Sr(ye), (It = le.props && le.props.onVnodeBeforeUpdate) && nn(It, ke, le, xe), wi(T, true);
          const Tt = wl(T), Xt = T.subTree;
          T.subTree = Tt, k(Xt, Tt, E(Xt.el), Mn(Xt), T, q, K), le.el = Tt.el, De === null && Bd(T, Tt.el), Te && gt(Te, q), (It = le.props && le.props.onVnodeUpdated) && gt(() => nn(It, ke, le, xe), q);
        } else {
          let le;
          const { el: ye, props: Te } = O, { bm: ke, m: xe, parent: De, root: It, type: Tt } = T, Xt = Mi(O);
          wi(T, false), ke && Sr(ke), !Xt && (le = Te && Te.onVnodeBeforeMount) && nn(le, De, O), wi(T, true);
          {
            It.ce && It.ce._def.shadowRoot !== false && It.ce._injectChildStyle(Tt);
            const Zt = T.subTree = wl(T);
            k(null, Zt, F, Y, T, q, K), O.el = Zt.el;
          }
          if (xe && gt(xe, q), !Xt && (le = Te && Te.onVnodeMounted)) {
            const Zt = O;
            gt(() => nn(le, De, Zt), q);
          }
          (O.shapeFlag & 256 || De && Mi(De.vnode) && De.vnode.shapeFlag & 256) && T.a && gt(T.a, q), T.isMounted = true, O = F = Y = null;
        }
      };
      T.scope.on();
      const ne = T.effect = new iu(X);
      T.scope.off();
      const V = T.update = ne.run.bind(ne), we = T.job = ne.runIfDirty.bind(ne);
      we.i = T, we.id = T.uid, ne.scheduler = () => Fa(we), wi(T, true), V();
    }, Re = (T, O, F) => {
      O.component = T;
      const Y = T.vnode.props;
      T.vnode = O, T.next = null, zd(T, O.props, Y, F), Kd(T, O.children, F), Bn(), al(T), $n();
    }, ze = (T, O, F, Y, q, K, ae, X, ne = false) => {
      const V = T && T.children, we = T ? T.shapeFlag : 0, le = O.children, { patchFlag: ye, shapeFlag: Te } = O;
      if (ye > 0) {
        if (ye & 128) {
          Di(V, le, F, Y, q, K, ae, X, ne);
          return;
        } else if (ye & 256) {
          An(V, le, F, Y, q, K, ae, X, ne);
          return;
        }
      }
      Te & 8 ? (we & 16 && Dt(V, q, K), le !== V && g(F, le)) : we & 16 ? Te & 16 ? Di(V, le, F, Y, q, K, ae, X, ne) : Dt(V, q, K, true) : (we & 8 && g(F, ""), Te & 16 && fe(le, F, Y, q, K, ae, X, ne));
    }, An = (T, O, F, Y, q, K, ae, X, ne) => {
      T = T || Vi, O = O || Vi;
      const V = T.length, we = O.length, le = Math.min(V, we);
      let ye;
      for (ye = 0; ye < le; ye++) {
        const Te = O[ye] = ne ? ri(O[ye]) : En(O[ye]);
        k(T[ye], Te, F, null, q, K, ae, X, ne);
      }
      V > we ? Dt(T, q, K, true, false, le) : fe(O, F, Y, q, K, ae, X, ne, le);
    }, Di = (T, O, F, Y, q, K, ae, X, ne) => {
      let V = 0;
      const we = O.length;
      let le = T.length - 1, ye = we - 1;
      for (; V <= le && V <= ye; ) {
        const Te = T[V], ke = O[V] = ne ? ri(O[V]) : En(O[V]);
        if (oi(Te, ke)) k(Te, ke, F, null, q, K, ae, X, ne);
        else break;
        V++;
      }
      for (; V <= le && V <= ye; ) {
        const Te = T[le], ke = O[ye] = ne ? ri(O[ye]) : En(O[ye]);
        if (oi(Te, ke)) k(Te, ke, F, null, q, K, ae, X, ne);
        else break;
        le--, ye--;
      }
      if (V > le) {
        if (V <= ye) {
          const Te = ye + 1, ke = Te < we ? O[Te].el : Y;
          for (; V <= ye; ) k(null, O[V] = ne ? ri(O[V]) : En(O[V]), F, ke, q, K, ae, X, ne), V++;
        }
      } else if (V > ye) for (; V <= le; ) ve(T[V], q, K, true), V++;
      else {
        const Te = V, ke = V, xe = /* @__PURE__ */ new Map();
        for (V = ke; V <= ye; V++) {
          const Nt = O[V] = ne ? ri(O[V]) : En(O[V]);
          Nt.key != null && xe.set(Nt.key, V);
        }
        let De, It = 0;
        const Tt = ye - ke + 1;
        let Xt = false, Zt = 0;
        const gi = new Array(Tt);
        for (V = 0; V < Tt; V++) gi[V] = 0;
        for (V = Te; V <= le; V++) {
          const Nt = T[V];
          if (It >= Tt) {
            ve(Nt, q, K, true);
            continue;
          }
          let Qt;
          if (Nt.key != null) Qt = xe.get(Nt.key);
          else for (De = ke; De <= ye; De++) if (gi[De - ke] === 0 && oi(Nt, O[De])) {
            Qt = De;
            break;
          }
          Qt === void 0 ? ve(Nt, q, K, true) : (gi[Qt - ke] = V + 1, Qt >= Zt ? Zt = Qt : Xt = true, k(Nt, O[Qt], F, null, q, K, ae, X, ne), It++);
        }
        const lr = Xt ? Zd(gi) : Vi;
        for (De = lr.length - 1, V = Tt - 1; V >= 0; V--) {
          const Nt = ke + V, Qt = O[Nt], Qr = O[Nt + 1], eo = Nt + 1 < we ? Qr.el || Qr.placeholder : Y;
          gi[V] === 0 ? k(null, Qt, F, eo, q, K, ae, X, ne) : Xt && (De < 0 || V !== lr[De] ? Pn(Qt, F, eo, 2) : De--);
        }
      }
    }, Pn = (T, O, F, Y, q = null) => {
      const { el: K, type: ae, transition: X, children: ne, shapeFlag: V } = T;
      if (V & 6) {
        Pn(T.component.subTree, O, F, Y);
        return;
      }
      if (V & 128) {
        T.suspense.move(O, F, Y);
        return;
      }
      if (V & 64) {
        ae.move(T, O, F, pi);
        return;
      }
      if (ae === Pt) {
        i(K, O, F);
        for (let le = 0; le < ne.length; le++) Pn(ne[le], O, F, Y);
        i(T.anchor, O, F);
        return;
      }
      if (ae === kr) {
        ie(T, O, F);
        return;
      }
      if (Y !== 2 && V & 1 && X) if (Y === 0) X.beforeEnter(K), i(K, O, F), gt(() => X.enter(K), q);
      else {
        const { leave: le, delayLeave: ye, afterLeave: Te } = X, ke = () => {
          T.ctx.isUnmounted ? l(K) : i(K, O, F);
        }, xe = () => {
          K._isLeaving && K[Fn](true), le(K, () => {
            ke(), Te && Te();
          });
        };
        ye ? ye(K, ke, xe) : xe();
      }
      else i(K, O, F);
    }, ve = (T, O, F, Y = false, q = false) => {
      const { type: K, props: ae, ref: X, children: ne, dynamicChildren: V, shapeFlag: we, patchFlag: le, dirs: ye, cacheIndex: Te } = T;
      if (le === -2 && (q = false), X != null && (Bn(), Mr(X, null, F, T, true), $n()), Te != null && (O.renderCache[Te] = void 0), we & 256) {
        O.ctx.deactivate(T);
        return;
      }
      const ke = we & 1 && ye, xe = !Mi(T);
      let De;
      if (xe && (De = ae && ae.onVnodeBeforeUnmount) && nn(De, O, T), we & 6) oe(T.component, F, Y);
      else {
        if (we & 128) {
          T.suspense.unmount(F, Y);
          return;
        }
        ke && mi(T, null, O, "beforeUnmount"), we & 64 ? T.type.remove(T, O, F, pi, Y) : V && !V.hasOnce && (K !== Pt || le > 0 && le & 64) ? Dt(V, O, F, false, true) : (K === Pt && le & 384 || !q && we & 16) && Dt(ne, O, F), Y && ar(T);
      }
      (xe && (De = ae && ae.onVnodeUnmounted) || ke) && gt(() => {
        De && nn(De, O, T), ke && mi(T, null, O, "unmounted");
      }, F);
    }, ar = (T) => {
      const { type: O, el: F, anchor: Y, transition: q } = T;
      if (O === Pt) {
        vs(F, Y);
        return;
      }
      if (O === kr) {
        G(T);
        return;
      }
      const K = () => {
        l(F), q && !q.persisted && q.afterLeave && q.afterLeave();
      };
      if (T.shapeFlag & 1 && q && !q.persisted) {
        const { leave: ae, delayLeave: X } = q, ne = () => ae(F, K);
        X ? X(T.el, K, ne) : ne();
      } else K();
    }, vs = (T, O) => {
      let F;
      for (; T !== O; ) F = P(T), l(T), T = F;
      l(O);
    }, oe = (T, O, F) => {
      const { bum: Y, scope: q, job: K, subTree: ae, um: X, m: ne, a: V } = T;
      Fo(ne), Fo(V), Y && Sr(Y), q.stop(), K && (K.flags |= 8, ve(ae, T, O, F)), X && gt(X, O), gt(() => {
        T.isUnmounted = true;
      }, O);
    }, Dt = (T, O, F, Y = false, q = false, K = 0) => {
      for (let ae = K; ae < T.length; ae++) ve(T[ae], O, F, Y, q);
    }, Mn = (T) => {
      if (T.shapeFlag & 6) return Mn(T.component.subTree);
      if (T.shapeFlag & 128) return T.suspense.next();
      const O = P(T.anchor || T.el), F = O && O[Au];
      return F ? P(F) : O;
    };
    let $t = false;
    const Zr = (T, O, F) => {
      T == null ? O._vnode && ve(O._vnode, null, null, true) : k(O._vnode || null, T, O, null, null, null, F), O._vnode = T, $t || ($t = true, al(), _u(), $t = false);
    }, pi = {
      p: k,
      um: ve,
      m: Pn,
      r: ar,
      mt: ct,
      mc: fe,
      pc: ze,
      pbc: me,
      n: Mn,
      o: e
    };
    return {
      render: Zr,
      hydrate: void 0,
      createApp: Rd(Zr)
    };
  }
  function Ms({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function wi({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Xd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Ba(e, t, n = false) {
    const i = e.children, l = t.children;
    if (Ie(i) && Ie(l)) for (let c = 0; c < i.length; c++) {
      const f = i[c];
      let h = l[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = l[c] = ri(l[c]), h.el = f.el), !n && h.patchFlag !== -2 && Ba(f, h)), h.type === fs && h.patchFlag !== -1 && (h.el = f.el), h.type === vt && !h.el && (h.el = f.el);
    }
  }
  function Zd(e) {
    const t = e.slice(), n = [
      0
    ];
    let i, l, c, f, h;
    const p = e.length;
    for (i = 0; i < p; i++) {
      const v = e[i];
      if (v !== 0) {
        if (l = n[n.length - 1], e[l] < v) {
          t[i] = l, n.push(i);
          continue;
        }
        for (c = 0, f = n.length - 1; c < f; ) h = c + f >> 1, e[n[h]] < v ? c = h + 1 : f = h;
        v < e[n[c]] && (c > 0 && (t[i] = n[c - 1]), n[c] = i);
      }
    }
    for (c = n.length, f = n[c - 1]; c-- > 0; ) n[c] = f, f = t[f];
    return n;
  }
  function tf(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : tf(t);
  }
  function Fo(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const xo = (e) => e.__isSuspense;
  function Qd(e, t) {
    t && t.pendingBranch ? Ie(e) ? t.effects.push(...e) : t.effects.push(e) : Tu(e);
  }
  let kr, Lr;
  Pt = /* @__PURE__ */ Symbol.for("v-fgt");
  fs = /* @__PURE__ */ Symbol.for("v-txt");
  vt = /* @__PURE__ */ Symbol.for("v-cmt");
  kr = /* @__PURE__ */ Symbol.for("v-stc");
  Lr = [];
  let qt = null;
  rn = function(e = false) {
    Lr.push(qt = e ? null : []);
  };
  function ep() {
    Lr.pop(), qt = Lr[Lr.length - 1] || null;
  }
  let Wr = 1;
  function Do(e, t = false) {
    Wr += e, e < 0 && qt && t && (qt.hasOnce = true);
  }
  function nf(e) {
    return e.dynamicChildren = Wr > 0 ? qt || Vi : null, ep(), Wr > 0 && qt && qt.push(e), e;
  }
  kn = function(e, t, n, i, l, c) {
    return nf(Ge(e, t, n, i, l, c, true));
  };
  ra = function(e, t, n, i, l) {
    return nf(Rt(e, t, n, i, l, true));
  };
  Zi = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function oi(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const rf = ({ key: e }) => e ?? null, yo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ot(e) || at(e) || Se(e) ? {
    i: Et,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  Ge = function(e, t = null, n = null, i = 0, l = null, c = e === Pt ? 0 : 1, f = false, h = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && rf(t),
      ref: t && yo(t),
      scopeId: Ou,
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
      shapeFlag: c,
      patchFlag: i,
      dynamicProps: l,
      dynamicChildren: null,
      appContext: null,
      ctx: Et
    };
    return h ? ($a(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= ot(n) ? 8 : 16), Wr > 0 && !f && qt && (p.patchFlag > 0 || c & 6) && p.patchFlag !== 32 && qt.push(p), p;
  };
  Rt = tp;
  function tp(e, t = null, n = null, i = 0, l = null, c = false) {
    if ((!e || e === ju) && (e = vt), Zi(e)) {
      const h = Hn(e, t, true);
      return n && $a(h, n), Wr > 0 && !c && qt && (h.shapeFlag & 6 ? qt[qt.indexOf(e)] = h : qt.push(h)), h.patchFlag = -2, h;
    }
    if (hp(e) && (e = e.__vccOpts), t) {
      t = np(t);
      let { class: h, style: p } = t;
      h && !ot(h) && (t.class = Pa(h)), qe(p) && (os(p) && !Ie(p) && (p = ft({}, p)), t.style = ts(p));
    }
    const f = ot(e) ? 1 : xo(e) ? 128 : Pu(e) ? 64 : qe(e) ? 4 : Se(e) ? 2 : 0;
    return Ge(e, t, n, i, l, f, c, true);
  }
  function np(e) {
    return e ? os(e) || Yu(e) ? ft({}, e) : e : null;
  }
  Hn = function(e, t, n = false, i = false) {
    const { props: l, ref: c, patchFlag: f, children: h, transition: p } = e, v = t ? rp(l || {}, t) : l, g = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: v,
      key: v && rf(v),
      ref: t && t.ref ? n && c ? Ie(c) ? c.concat(yo(t)) : [
        c,
        yo(t)
      ] : yo(t) : c,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: h,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Pt ? f === -1 ? 16 : f | 16 : f,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: p,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Hn(e.ssContent),
      ssFallback: e.ssFallback && Hn(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return p && i && ci(g, p.clone(g)), g;
  };
  ip = function(e = " ", t = 0) {
    return Rt(fs, null, e, t);
  };
  i0 = function(e, t) {
    const n = Rt(kr, null, e);
    return n.staticCount = t, n;
  };
  lo = function(e = "", t = false) {
    return t ? (rn(), ra(vt, null, e)) : Rt(vt, null, e);
  };
  function En(e) {
    return e == null || typeof e == "boolean" ? Rt(vt) : Ie(e) ? Rt(Pt, null, e.slice()) : Zi(e) ? ri(e) : Rt(fs, null, String(e));
  }
  function ri(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hn(e);
  }
  function $a(e, t) {
    let n = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (Ie(t)) n = 16;
    else if (typeof t == "object") if (i & 65) {
      const l = t.default;
      l && (l._c && (l._d = false), $a(e, l()), l._c && (l._d = true));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Yu(t) ? t._ctx = Et : l === 3 && Et && (Et.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Se(t) ? (t = {
      default: t,
      _ctx: Et
    }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
      ip(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  rp = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      for (const l in i) if (l === "class") t.class !== i.class && (t.class = Pa([
        t.class,
        i.class
      ]));
      else if (l === "style") t.style = ts([
        t.style,
        i.style
      ]);
      else if (Jo(l)) {
        const c = t[l], f = i[l];
        f && c !== f && !(Ie(c) && c.includes(f)) && (t[l] = c ? [].concat(c, f) : f);
      } else l !== "" && (t[l] = i[l]);
    }
    return t;
  };
  function nn(e, t, n, i = null) {
    pn(e, t, 7, [
      n,
      i
    ]);
  }
  const op = $u();
  let sp = 0;
  function ap(e, t, n) {
    const i = e.type, l = (t ? t.appContext : e.appContext) || op, c = {
      uid: sp++,
      vnode: e,
      type: i,
      parent: t,
      appContext: l,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new eu(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(l.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Xu(i, l),
      emitsOptions: Vu(i, l),
      emit: null,
      emitted: null,
      propsDefaults: Fe,
      inheritAttrs: i.inheritAttrs,
      ctx: Fe,
      data: Fe,
      props: Fe,
      attrs: Fe,
      slots: Fe,
      refs: Fe,
      setupState: Fe,
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
    return c.ctx = {
      _: c
    }, c.root = t ? t.root : c, c.emit = Dd.bind(null, c), e.ce && e.ce(c), c;
  }
  let Mt = null;
  Jn = () => Mt || Et;
  let Uo, oa;
  {
    const e = es(), t = (n, i) => {
      let l;
      return (l = e[n]) || (l = e[n] = []), l.push(i), (c) => {
        l.length > 1 ? l.forEach((f) => f(c)) : l[0](c);
      };
    };
    Uo = t("__VUE_INSTANCE_SETTERS__", (n) => Mt = n), oa = t("__VUE_SSR_SETTERS__", (n) => Br = n);
  }
  const Jr = (e) => {
    const t = Mt;
    return Uo(e), e.scope.on(), () => {
      e.scope.off(), Uo(t);
    };
  }, vl = () => {
    Mt && Mt.scope.off(), Uo(null);
  };
  function of(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Br = false;
  function lp(e, t = false, n = false) {
    t && oa(t);
    const { props: i, children: l } = e.vnode, c = of(e);
    $d(e, i, c, t), qd(e, l, n || t);
    const f = c ? cp(e, t) : void 0;
    return t && oa(false), f;
  }
  function cp(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Td);
    const { setup: i } = n;
    if (i) {
      Bn();
      const l = e.setupContext = i.length > 1 ? fp(e) : null, c = Jr(e), f = Kr(i, e, 0, [
        e.props,
        l
      ]), h = qc(f);
      if ($n(), c(), (h || e.sp) && !Mi(e) && xu(e), h) {
        if (f.then(vl, vl), t) return f.then((p) => {
          El(e, p);
        }).catch((p) => {
          ss(p, e, 0);
        });
        e.asyncDep = f;
      } else El(e, f);
    } else sf(e);
  }
  function El(e, t, n) {
    Se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : qe(t) && (e.setupState = yu(t)), sf(e);
  }
  function sf(e, t, n) {
    const i = e.type;
    e.render || (e.render = i.render || fn);
    {
      const l = Jr(e);
      Bn();
      try {
        _d(e);
      } finally {
        $n(), l();
      }
    }
  }
  const up = {
    get(e, t) {
      return At(e, "get", ""), e[t];
    }
  };
  function fp(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, up),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function hs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yu(Ca(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Rr) return Rr[n](e);
      },
      has(t, n) {
        return n in t || n in Rr;
      }
    })) : e.proxy;
  }
  function sa(e, t = true) {
    return Se(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function hp(e) {
    return Se(e) && "__vccOpts" in e;
  }
  za = (e, t) => td(e, t, Br);
  dp = function(e, t, n) {
    try {
      Do(-1);
      const i = arguments.length;
      return i === 2 ? qe(t) && !Ie(t) ? Zi(t) ? Rt(e, null, [
        t
      ]) : Rt(e, t) : Rt(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Zi(n) && (n = [
        n
      ]), Rt(e, t, n));
    } finally {
      Do(1);
    }
  };
  const pp = "3.5.25";
  let aa;
  const Il = typeof window < "u" && window.trustedTypes;
  if (Il) try {
    aa = Il.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let af, gp, mp, Cn, Tl, wp, Zn, ur, Qi, lf, cf, yp, yi, _l;
  af = aa ? (e) => aa.createHTML(e) : (e) => e;
  gp = "http://www.w3.org/2000/svg";
  mp = "http://www.w3.org/1998/Math/MathML";
  Cn = typeof document < "u" ? document : null;
  Tl = Cn && Cn.createElement("template");
  wp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const l = t === "svg" ? Cn.createElementNS(gp, e) : t === "mathml" ? Cn.createElementNS(mp, e) : n ? Cn.createElement(e, {
        is: n
      }) : Cn.createElement(e);
      return e === "select" && i && i.multiple != null && l.setAttribute("multiple", i.multiple), l;
    },
    createText: (e) => Cn.createTextNode(e),
    createComment: (e) => Cn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Cn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, l, c) {
      const f = n ? n.previousSibling : t.lastChild;
      if (l && (l === c || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === c || !(l = l.nextSibling)); ) ;
      else {
        Tl.innerHTML = af(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const h = Tl.content;
        if (i === "svg" || i === "mathml") {
          const p = h.firstChild;
          for (; p.firstChild; ) h.appendChild(p.firstChild);
          h.removeChild(p);
        }
        t.insertBefore(h, n);
      }
      return [
        f ? f.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
  Zn = "transition";
  ur = "animation";
  Qi = /* @__PURE__ */ Symbol("_vtc");
  lf = {
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
  cf = ft({}, ku, lf);
  yp = (e) => (e.displayName = "Transition", e.props = cf, e);
  r0 = yp((e, { slots: t }) => dp(cd, uf(e), t));
  yi = (e, t = []) => {
    Ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  _l = (e) => e ? Ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function uf(e) {
    const t = {};
    for (const he in e) he in lf || (t[he] = e[he]);
    if (e.css === false) return t;
    const { name: n = "v", type: i, duration: l, enterFromClass: c = `${n}-enter-from`, enterActiveClass: f = `${n}-enter-active`, enterToClass: h = `${n}-enter-to`, appearFromClass: p = c, appearActiveClass: v = f, appearToClass: g = h, leaveFromClass: E = `${n}-leave-from`, leaveActiveClass: P = `${n}-leave-active`, leaveToClass: M = `${n}-leave-to` } = e, C = bp(l), k = C && C[0], se = C && C[1], { onBeforeEnter: te, onEnter: H, onEnterCancelled: ie, onLeave: G, onLeaveCancelled: pe, onBeforeAppear: ge = te, onAppear: re = H, onAppearCancelled: fe = ie } = t, ee = (he, Ue, ct, Bt) => {
      he._enterCancelled = Bt, ei(he, Ue ? g : h), ei(he, Ue ? v : f), ct && ct();
    }, me = (he, Ue) => {
      he._isLeaving = false, ei(he, E), ei(he, M), ei(he, P), Ue && Ue();
    }, Pe = (he) => (Ue, ct) => {
      const Bt = he ? re : H, Ke = () => ee(Ue, he, ct);
      yi(Bt, [
        Ue,
        Ke
      ]), Sl(() => {
        ei(Ue, he ? p : c), wn(Ue, he ? g : h), _l(Bt) || Ol(Ue, i, k, Ke);
      });
    };
    return ft(t, {
      onBeforeEnter(he) {
        yi(te, [
          he
        ]), wn(he, c), wn(he, f);
      },
      onBeforeAppear(he) {
        yi(ge, [
          he
        ]), wn(he, p), wn(he, v);
      },
      onEnter: Pe(false),
      onAppear: Pe(true),
      onLeave(he, Ue) {
        he._isLeaving = true;
        const ct = () => me(he, Ue);
        wn(he, E), he._enterCancelled ? (wn(he, P), la(he)) : (la(he), wn(he, P)), Sl(() => {
          he._isLeaving && (ei(he, E), wn(he, M), _l(G) || Ol(he, i, se, ct));
        }), yi(G, [
          he,
          ct
        ]);
      },
      onEnterCancelled(he) {
        ee(he, false, void 0, true), yi(ie, [
          he
        ]);
      },
      onAppearCancelled(he) {
        ee(he, true, void 0, true), yi(fe, [
          he
        ]);
      },
      onLeaveCancelled(he) {
        me(he), yi(pe, [
          he
        ]);
      }
    });
  }
  function bp(e) {
    if (e == null) return null;
    if (qe(e)) return [
      Rs(e.enter),
      Rs(e.leave)
    ];
    {
      const t = Rs(e);
      return [
        t,
        t
      ];
    }
  }
  function Rs(e) {
    return wh(e);
  }
  function wn(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qi] || (e[Qi] = /* @__PURE__ */ new Set())).add(t);
  }
  function ei(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const n = e[Qi];
    n && (n.delete(t), n.size || (e[Qi] = void 0));
  }
  function Sl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let vp = 0;
  function Ol(e, t, n, i) {
    const l = e._endId = ++vp, c = () => {
      l === e._endId && i();
    };
    if (n != null) return setTimeout(c, n);
    const { type: f, timeout: h, propCount: p } = ff(e, t);
    if (!f) return i();
    const v = f + "end";
    let g = 0;
    const E = () => {
      e.removeEventListener(v, P), c();
    }, P = (M) => {
      M.target === e && ++g >= p && E();
    };
    setTimeout(() => {
      g < p && E();
    }, h + 1), e.addEventListener(v, P);
  }
  function ff(e, t) {
    const n = window.getComputedStyle(e), i = (C) => (n[C] || "").split(", "), l = i(`${Zn}Delay`), c = i(`${Zn}Duration`), f = Al(l, c), h = i(`${ur}Delay`), p = i(`${ur}Duration`), v = Al(h, p);
    let g = null, E = 0, P = 0;
    t === Zn ? f > 0 && (g = Zn, E = f, P = c.length) : t === ur ? v > 0 && (g = ur, E = v, P = p.length) : (E = Math.max(f, v), g = E > 0 ? f > v ? Zn : ur : null, P = g ? g === Zn ? c.length : p.length : 0);
    const M = g === Zn && /\b(?:transform|all)(?:,|$)/.test(i(`${Zn}Property`).toString());
    return {
      type: g,
      timeout: E,
      propCount: P,
      hasTransform: M
    };
  }
  function Al(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, i) => Pl(n) + Pl(e[i])));
  }
  function Pl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function la(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function Ep(e, t, n) {
    const i = e[Qi];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let jo, hf;
  jo = /* @__PURE__ */ Symbol("_vod");
  hf = /* @__PURE__ */ Symbol("_vsh");
  o0 = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[jo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : fr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n && (i ? t ? (i.beforeEnter(e), fr(e, true), i.enter(e)) : i.leave(e, () => {
        fr(e, false);
      }) : fr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      fr(e, t);
    }
  };
  function fr(e, t) {
    e.style.display = t ? e[jo] : "none", e[hf] = !t;
  }
  const df = /* @__PURE__ */ Symbol("");
  s0 = function(e) {
    const t = Jn();
    if (!t) return;
    const n = t.ut = (l = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((c) => Go(c, l));
    }, i = () => {
      const l = e(t.proxy);
      t.ce ? Go(t.ce, l) : ca(t.subTree, l), n(l);
    };
    Uu(() => {
      Tu(i);
    }), Yr(() => {
      Ji(i, fn, {
        flush: "post"
      });
      const l = new MutationObserver(i);
      l.observe(t.subTree.el.parentNode, {
        childList: true
      }), ja(() => l.disconnect());
    });
  };
  function ca(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        ca(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Go(e.el, t);
    else if (e.type === Pt) e.children.forEach((n) => ca(n, t));
    else if (e.type === kr) {
      let { el: n, anchor: i } = e;
      for (; n && (Go(n, t), n !== i); ) n = n.nextSibling;
    }
  }
  function Go(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let i = "";
      for (const l in t) {
        const c = _h(t[l]);
        n.setProperty(`--${l}`, c), i += `--${l}: ${c};`;
      }
      n[df] = i;
    }
  }
  const Ip = /(?:^|;)\s*display\s*:/;
  function Tp(e, t, n) {
    const i = e.style, l = ot(n);
    let c = false;
    if (n && !l) {
      if (t) if (ot(t)) for (const f of t.split(";")) {
        const h = f.slice(0, f.indexOf(":")).trim();
        n[h] == null && bo(i, h, "");
      }
      else for (const f in t) n[f] == null && bo(i, f, "");
      for (const f in n) f === "display" && (c = true), bo(i, f, n[f]);
    } else if (l) {
      if (t !== n) {
        const f = i[df];
        f && (n += ";" + f), i.cssText = n, c = Ip.test(n);
      }
    } else t && e.removeAttribute("style");
    jo in e && (e[jo] = c ? i.display : "", e[hf] && (i.display = "none"));
  }
  const Ml = /\s*!important$/;
  function bo(e, t, n) {
    if (Ie(n)) n.forEach((i) => bo(e, t, i));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const i = _p(e, t);
      Ml.test(n) ? e.setProperty(Kn(i), n.replace(Ml, ""), "important") : e[i] = n;
    }
  }
  const Rl = [
    "Webkit",
    "Moz",
    "ms"
  ], Ns = {};
  function _p(e, t) {
    const n = Ns[t];
    if (n) return n;
    let i = Jt(t);
    if (i !== "filter" && i in e) return Ns[t] = i;
    i = Qo(i);
    for (let l = 0; l < Rl.length; l++) {
      const c = Rl[l] + i;
      if (c in e) return Ns[t] = c;
    }
    return t;
  }
  const Nl = "http://www.w3.org/1999/xlink";
  function kl(e, t, n, i, l, c = Th(t)) {
    i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Nl, t.slice(6, t.length)) : e.setAttributeNS(Nl, t, n) : n == null || c && !Xc(n) ? e.removeAttribute(t) : e.setAttribute(t, c ? "" : qn(n) ? String(n) : n);
  }
  function Ll(e, t, n, i, l) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? af(n) : n);
      return;
    }
    const c = e.tagName;
    if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
      const h = c === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (h !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let f = false;
    if (n === "" || n == null) {
      const h = typeof e[t];
      h === "boolean" ? n = Xc(n) : n == null && h === "string" ? (n = "", f = true) : h === "number" && (n = 0, f = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    f && e.removeAttribute(l || t);
  }
  function Sp(e, t, n, i) {
    e.addEventListener(t, n, i);
  }
  function Op(e, t, n, i) {
    e.removeEventListener(t, n, i);
  }
  const Cl = /* @__PURE__ */ Symbol("_vei");
  function Ap(e, t, n, i, l = null) {
    const c = e[Cl] || (e[Cl] = {}), f = c[t];
    if (i && f) f.value = i;
    else {
      const [h, p] = Pp(t);
      if (i) {
        const v = c[t] = Np(i, l);
        Sp(e, h, v, p);
      } else f && (Op(e, h, f, p), c[t] = void 0);
    }
  }
  const Fl = /(?:Once|Passive|Capture)$/;
  function Pp(e) {
    let t;
    if (Fl.test(e)) {
      t = {};
      let i;
      for (; i = e.match(Fl); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Kn(e.slice(2)),
      t
    ];
  }
  let ks = 0;
  const Mp = Promise.resolve(), Rp = () => ks || (Mp.then(() => ks = 0), ks = Date.now());
  function Np(e, t) {
    const n = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= n.attached) return;
      pn(kp(i, n.value), t, 5, [
        i
      ]);
    };
    return n.value = e, n.attached = Rp(), n;
  }
  function kp(e, t) {
    if (Ie(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((i) => (l) => !l._stopped && i && i(l));
    } else return t;
  }
  const xl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Lp = (e, t, n, i, l, c) => {
    const f = l === "svg";
    t === "class" ? Ep(e, i, f) : t === "style" ? Tp(e, n, i) : Jo(t) ? Oa(t) || Ap(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Cp(e, t, i, f)) ? (Ll(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && kl(e, t, i, f, c, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ot(i)) ? Ll(e, Jt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), kl(e, t, i, f));
  };
  function Cp(e, t, n, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && xl(t) && Se(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const l = e.tagName;
      if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
    }
    return xl(t) && ot(n) ? false : t in e;
  }
  let pf, gf, Wo, Dl, Fp, xp;
  pf = /* @__PURE__ */ new WeakMap();
  gf = /* @__PURE__ */ new WeakMap();
  Wo = /* @__PURE__ */ Symbol("_moveCb");
  Dl = /* @__PURE__ */ Symbol("_enterCb");
  Fp = (e) => (delete e.props.mode, e);
  xp = Fp({
    name: "TransitionGroup",
    props: ft({}, cf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = Jn(), i = Nu();
      let l, c;
      return Da(() => {
        if (!l.length) return;
        const f = e.moveClass || `${e.name || "v"}-move`;
        if (!Gp(l[0].el, n.vnode.el, f)) {
          l = [];
          return;
        }
        l.forEach(Dp), l.forEach(Up);
        const h = l.filter(jp);
        la(n.vnode.el), h.forEach((p) => {
          const v = p.el, g = v.style;
          wn(v, f), g.transform = g.webkitTransform = g.transitionDuration = "";
          const E = v[Wo] = (P) => {
            P && P.target !== v || (!P || P.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", E), v[Wo] = null, ei(v, f));
          };
          v.addEventListener("transitionend", E);
        }), l = [];
      }), () => {
        const f = Ce(e), h = uf(f);
        let p = f.tag || Pt;
        if (l = [], c) for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.el && g.el instanceof Element && (l.push(g), ci(g, Gr(g, h, i, n)), pf.set(g, {
            left: g.el.offsetLeft,
            top: g.el.offsetTop
          }));
        }
        c = t.default ? xa(t.default()) : [];
        for (let v = 0; v < c.length; v++) {
          const g = c[v];
          g.key != null && ci(g, Gr(g, h, i, n));
        }
        return Rt(p, null, c);
      };
    }
  });
  a0 = xp;
  function Dp(e) {
    const t = e.el;
    t[Wo] && t[Wo](), t[Dl] && t[Dl]();
  }
  function Up(e) {
    gf.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function jp(e) {
    const t = pf.get(e), n = gf.get(e), i = t.left - n.left, l = t.top - n.top;
    if (i || l) {
      const c = e.el.style;
      return c.transform = c.webkitTransform = `translate(${i}px,${l}px)`, c.transitionDuration = "0s", e;
    }
  }
  function Gp(e, t, n) {
    const i = e.cloneNode(), l = e[Qi];
    l && l.forEach((h) => {
      h.split(/\s+/).forEach((p) => p && i.classList.remove(p));
    }), n.split(/\s+/).forEach((h) => h && i.classList.add(h)), i.style.display = "none";
    const c = t.nodeType === 1 ? t : t.parentNode;
    c.appendChild(i);
    const { hasTransform: f } = ff(i);
    return c.removeChild(i), f;
  }
  let Wp, Bp, $p, zp;
  Wp = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Bp = {
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
    exact: (e, t) => Wp.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  l0 = (e, t) => {
    const n = e._withMods || (e._withMods = {}), i = t.join(".");
    return n[i] || (n[i] = ((l, ...c) => {
      for (let f = 0; f < t.length; f++) {
        const h = Bp[t[f]];
        if (h && h(l, t)) return;
      }
      return e(l, ...c);
    }));
  };
  $p = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  c0 = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return n[i] || (n[i] = ((l) => {
      if (!("key" in l)) return;
      const c = Kn(l.key);
      if (t.some((f) => f === c || $p[f] === c)) return e(l);
    }));
  };
  zp = ft({
    patchProp: Lp
  }, wp);
  let Ul;
  function Hp() {
    return Ul || (Ul = Yd(zp));
  }
  mf = ((...e) => {
    const t = Hp().createApp(...e), { mount: n } = t;
    return t.mount = (i) => {
      const l = qp(i);
      if (!l) return;
      const c = t._component;
      !Se(c) && !c.render && !c.template && (c.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
      const f = n(l, false, Vp(l));
      return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), f;
    }, t;
  });
  function Vp(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function qp(e) {
    return ot(e) ? document.querySelector(e) : e;
  }
  const Kp = "" + new URL("../favicon.svg", import.meta.url).href;
  let wf, Yp, yf, Jp, Xp, hr;
  wf = typeof global == "object" && global && global.Object === Object && global;
  Yp = typeof self == "object" && self && self.Object === Object && self;
  On = wf || Yp || Function("return this")();
  ui = On.Symbol;
  yf = Object.prototype;
  Jp = yf.hasOwnProperty;
  Xp = yf.toString;
  hr = ui ? ui.toStringTag : void 0;
  function Zp(e) {
    var t = Jp.call(e, hr), n = e[hr];
    try {
      e[hr] = void 0;
      var i = true;
    } catch {
    }
    var l = Xp.call(e);
    return i && (t ? e[hr] = n : delete e[hr]), l;
  }
  var Qp = Object.prototype, eg = Qp.toString;
  function tg(e) {
    return eg.call(e);
  }
  var ng = "[object Null]", ig = "[object Undefined]", jl = ui ? ui.toStringTag : void 0;
  hi = function(e) {
    return e == null ? e === void 0 ? ig : ng : jl && jl in Object(e) ? Zp(e) : tg(e);
  };
  Sn = function(e) {
    return e != null && typeof e == "object";
  };
  er = Array.isArray;
  ds = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var rg = "[object AsyncFunction]", og = "[object Function]", sg = "[object GeneratorFunction]", ag = "[object Proxy]";
  bf = function(e) {
    if (!ds(e)) return false;
    var t = hi(e);
    return t == og || t == sg || t == rg || t == ag;
  };
  var Ls = On["__core-js_shared__"], Gl = (function() {
    var e = /[^.]+$/.exec(Ls && Ls.keys && Ls.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function lg(e) {
    return !!Gl && Gl in e;
  }
  var cg = Function.prototype, ug = cg.toString;
  function Li(e) {
    if (e != null) {
      try {
        return ug.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var fg = /[\\^$.*+?()[\]{}|]/g, hg = /^\[object .+?Constructor\]$/, dg = Function.prototype, pg = Object.prototype, gg = dg.toString, mg = pg.hasOwnProperty, wg = RegExp("^" + gg.call(mg).replace(fg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function yg(e) {
    if (!ds(e) || lg(e)) return false;
    var t = bf(e) ? wg : hg;
    return t.test(Li(e));
  }
  function bg(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Ci(e, t) {
    var n = bg(e, t);
    return yg(n) ? n : void 0;
  }
  let ua, Wl, vg;
  ua = Ci(On, "WeakMap");
  Wl = Object.create;
  vg = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!ds(t)) return {};
      if (Wl) return Wl(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  Bl = (function() {
    try {
      var e = Ci(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function Eg(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var Ig = 9007199254740991, Tg = /^(?:0|[1-9]\d*)$/;
  _g = function(e, t) {
    var n = typeof e;
    return t = t ?? Ig, !!t && (n == "number" || n != "symbol" && Tg.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  Sg = function(e, t, n) {
    t == "__proto__" && Bl ? Bl(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  Ha = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var Og = Object.prototype, Ag = Og.hasOwnProperty;
  Pg = function(e, t, n) {
    var i = e[t];
    (!(Ag.call(e, t) && Ha(i, n)) || n === void 0 && !(t in e)) && Sg(e, t, n);
  };
  var Mg = 9007199254740991;
  vf = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mg;
  };
  Rg = function(e) {
    return e != null && vf(e.length) && !bf(e);
  };
  var Ng = Object.prototype;
  Ef = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ng;
    return e === n;
  };
  function kg(e, t) {
    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
    return i;
  }
  var Lg = "[object Arguments]";
  function $l(e) {
    return Sn(e) && hi(e) == Lg;
  }
  let If, Cg, Fg;
  If = Object.prototype;
  Cg = If.hasOwnProperty;
  Fg = If.propertyIsEnumerable;
  xg = $l(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? $l : function(e) {
    return Sn(e) && Cg.call(e, "callee") && !Fg.call(e, "callee");
  };
  function Dg() {
    return false;
  }
  let Tf, zl, Ug, Hl, jg, Gg, Wg, Bg, $g, zg, Hg, Vg, qg, Kg, Yg, Jg, Xg, Zg, Qg, em, tm, nm, im, rm, om, sm, am, lm, cm, Qe;
  Tf = typeof exports == "object" && exports && !exports.nodeType && exports;
  zl = Tf && typeof module == "object" && module && !module.nodeType && module;
  Ug = zl && zl.exports === Tf;
  Hl = Ug ? On.Buffer : void 0;
  jg = Hl ? Hl.isBuffer : void 0;
  Bo = jg || Dg;
  Gg = "[object Arguments]";
  Wg = "[object Array]";
  Bg = "[object Boolean]";
  $g = "[object Date]";
  zg = "[object Error]";
  Hg = "[object Function]";
  Vg = "[object Map]";
  qg = "[object Number]";
  Kg = "[object Object]";
  Yg = "[object RegExp]";
  Jg = "[object Set]";
  Xg = "[object String]";
  Zg = "[object WeakMap]";
  Qg = "[object ArrayBuffer]";
  em = "[object DataView]";
  tm = "[object Float32Array]";
  nm = "[object Float64Array]";
  im = "[object Int8Array]";
  rm = "[object Int16Array]";
  om = "[object Int32Array]";
  sm = "[object Uint8Array]";
  am = "[object Uint8ClampedArray]";
  lm = "[object Uint16Array]";
  cm = "[object Uint32Array]";
  Qe = {};
  Qe[tm] = Qe[nm] = Qe[im] = Qe[rm] = Qe[om] = Qe[sm] = Qe[am] = Qe[lm] = Qe[cm] = true;
  Qe[Gg] = Qe[Wg] = Qe[Qg] = Qe[Bg] = Qe[em] = Qe[$g] = Qe[zg] = Qe[Hg] = Qe[Vg] = Qe[qg] = Qe[Kg] = Qe[Yg] = Qe[Jg] = Qe[Xg] = Qe[Zg] = false;
  function um(e) {
    return Sn(e) && vf(e.length) && !!Qe[hi(e)];
  }
  function Va(e) {
    return function(t) {
      return e(t);
    };
  }
  let _f, Cr, fm, Cs, tr, Vl, hm, dm;
  _f = typeof exports == "object" && exports && !exports.nodeType && exports;
  Cr = _f && typeof module == "object" && module && !module.nodeType && module;
  fm = Cr && Cr.exports === _f;
  Cs = fm && wf.process;
  tr = (function() {
    try {
      var e = Cr && Cr.require && Cr.require("util").types;
      return e || Cs && Cs.binding && Cs.binding("util");
    } catch {
    }
  })();
  Vl = tr && tr.isTypedArray;
  Sf = Vl ? Va(Vl) : um;
  hm = Object.prototype;
  dm = hm.hasOwnProperty;
  pm = function(e, t) {
    var n = er(e), i = !n && xg(e), l = !n && !i && Bo(e), c = !n && !i && !l && Sf(e), f = n || i || l || c, h = f ? kg(e.length, String) : [], p = h.length;
    for (var v in e) (t || dm.call(e, v)) && !(f && (v == "length" || l && (v == "offset" || v == "parent") || c && (v == "buffer" || v == "byteLength" || v == "byteOffset") || _g(v, p))) && h.push(v);
    return h;
  };
  function Of(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var gm = Of(Object.keys, Object), mm = Object.prototype, wm = mm.hasOwnProperty;
  function ym(e) {
    if (!Ef(e)) return gm(e);
    var t = [];
    for (var n in Object(e)) wm.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  bm = function(e) {
    return Rg(e) ? pm(e) : ym(e);
  };
  var $r = Ci(Object, "create");
  function vm() {
    this.__data__ = $r ? $r(null) : {}, this.size = 0;
  }
  function Em(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Im = "__lodash_hash_undefined__", Tm = Object.prototype, _m = Tm.hasOwnProperty;
  function Sm(e) {
    var t = this.__data__;
    if ($r) {
      var n = t[e];
      return n === Im ? void 0 : n;
    }
    return _m.call(t, e) ? t[e] : void 0;
  }
  var Om = Object.prototype, Am = Om.hasOwnProperty;
  function Pm(e) {
    var t = this.__data__;
    return $r ? t[e] !== void 0 : Am.call(t, e);
  }
  var Mm = "__lodash_hash_undefined__";
  function Rm(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = $r && t === void 0 ? Mm : t, this;
  }
  function ki(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  ki.prototype.clear = vm;
  ki.prototype.delete = Em;
  ki.prototype.get = Sm;
  ki.prototype.has = Pm;
  ki.prototype.set = Rm;
  function Nm() {
    this.__data__ = [], this.size = 0;
  }
  function ps(e, t) {
    for (var n = e.length; n--; ) if (Ha(e[n][0], t)) return n;
    return -1;
  }
  var km = Array.prototype, Lm = km.splice;
  function Cm(e) {
    var t = this.__data__, n = ps(t, e);
    if (n < 0) return false;
    var i = t.length - 1;
    return n == i ? t.pop() : Lm.call(t, n, 1), --this.size, true;
  }
  function Fm(e) {
    var t = this.__data__, n = ps(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function xm(e) {
    return ps(this.__data__, e) > -1;
  }
  function Dm(e, t) {
    var n = this.__data__, i = ps(n, e);
    return i < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[i][1] = t, this;
  }
  function Xn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Xn.prototype.clear = Nm;
  Xn.prototype.delete = Cm;
  Xn.prototype.get = Fm;
  Xn.prototype.has = xm;
  Xn.prototype.set = Dm;
  var zr = Ci(On, "Map");
  function Um() {
    this.size = 0, this.__data__ = {
      hash: new ki(),
      map: new (zr || Xn)(),
      string: new ki()
    };
  }
  function jm(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function gs(e, t) {
    var n = e.__data__;
    return jm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Gm(e) {
    var t = gs(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Wm(e) {
    return gs(this, e).get(e);
  }
  function Bm(e) {
    return gs(this, e).has(e);
  }
  function $m(e, t) {
    var n = gs(this, e), i = n.size;
    return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
  }
  Fi = function(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  };
  Fi.prototype.clear = Um;
  Fi.prototype.delete = Gm;
  Fi.prototype.get = Wm;
  Fi.prototype.has = Bm;
  Fi.prototype.set = $m;
  function zm(e, t) {
    for (var n = -1, i = t.length, l = e.length; ++n < i; ) e[l + n] = t[n];
    return e;
  }
  var Af = Of(Object.getPrototypeOf, Object), Hm = "[object Object]", Vm = Function.prototype, qm = Object.prototype, Pf = Vm.toString, Km = qm.hasOwnProperty, Ym = Pf.call(Object);
  Jm = function(e) {
    if (!Sn(e) || hi(e) != Hm) return false;
    var t = Af(e);
    if (t === null) return true;
    var n = Km.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Pf.call(n) == Ym;
  };
  var Xm = "[object DOMException]", Zm = "[object Error]";
  function Mf(e) {
    if (!Sn(e)) return false;
    var t = hi(e);
    return t == Zm || t == Xm || typeof e.message == "string" && typeof e.name == "string" && !Jm(e);
  }
  function Qm() {
    this.__data__ = new Xn(), this.size = 0;
  }
  function ew(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function tw(e) {
    return this.__data__.get(e);
  }
  function nw(e) {
    return this.__data__.has(e);
  }
  var iw = 200;
  function rw(e, t) {
    var n = this.__data__;
    if (n instanceof Xn) {
      var i = n.__data__;
      if (!zr || i.length < iw - 1) return i.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new Fi(i);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  Gn = function(e) {
    var t = this.__data__ = new Xn(e);
    this.size = t.size;
  };
  Gn.prototype.clear = Qm;
  Gn.prototype.delete = ew;
  Gn.prototype.get = tw;
  Gn.prototype.has = nw;
  Gn.prototype.set = rw;
  var Rf = typeof exports == "object" && exports && !exports.nodeType && exports, ql = Rf && typeof module == "object" && module && !module.nodeType && module, ow = ql && ql.exports === Rf, Kl = ow ? On.Buffer : void 0, Yl = Kl ? Kl.allocUnsafe : void 0;
  sw = function(e, t) {
    if (t) return e.slice();
    var n = e.length, i = Yl ? Yl(n) : new e.constructor(n);
    return e.copy(i), i;
  };
  function aw(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
      var f = e[n];
      t(f, n, e) && (c[l++] = f);
    }
    return c;
  }
  function lw() {
    return [];
  }
  var cw = Object.prototype, uw = cw.propertyIsEnumerable, Jl = Object.getOwnPropertySymbols, fw = Jl ? function(e) {
    return e == null ? [] : (e = Object(e), aw(Jl(e), function(t) {
      return uw.call(e, t);
    }));
  } : lw;
  function hw(e, t, n) {
    var i = t(e);
    return er(e) ? i : zm(i, n(e));
  }
  function fa(e) {
    return hw(e, bm, fw);
  }
  var ha = Ci(On, "DataView"), da = Ci(On, "Promise"), pa = Ci(On, "Set"), Xl = "[object Map]", dw = "[object Object]", Zl = "[object Promise]", Ql = "[object Set]", ec = "[object WeakMap]", tc = "[object DataView]", pw = Li(ha), gw = Li(zr), mw = Li(da), ww = Li(pa), yw = Li(ua), cn = hi;
  (ha && cn(new ha(new ArrayBuffer(1))) != tc || zr && cn(new zr()) != Xl || da && cn(da.resolve()) != Zl || pa && cn(new pa()) != Ql || ua && cn(new ua()) != ec) && (cn = function(e) {
    var t = hi(e), n = t == dw ? e.constructor : void 0, i = n ? Li(n) : "";
    if (i) switch (i) {
      case pw:
        return tc;
      case gw:
        return Xl;
      case mw:
        return Zl;
      case ww:
        return Ql;
      case yw:
        return ec;
    }
    return t;
  });
  var bw = Object.prototype, vw = bw.hasOwnProperty;
  function Ew(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && vw.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var $o = On.Uint8Array;
  function qa(e) {
    var t = new e.constructor(e.byteLength);
    return new $o(t).set(new $o(e)), t;
  }
  function Iw(e, t) {
    var n = qa(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var Tw = /\w*$/;
  function _w(e) {
    var t = new e.constructor(e.source, Tw.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var nc = ui ? ui.prototype : void 0, ic = nc ? nc.valueOf : void 0;
  function Sw(e) {
    return ic ? Object(ic.call(e)) : {};
  }
  Ow = function(e, t) {
    var n = t ? qa(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var Aw = "[object Boolean]", Pw = "[object Date]", Mw = "[object Map]", Rw = "[object Number]", Nw = "[object RegExp]", kw = "[object Set]", Lw = "[object String]", Cw = "[object Symbol]", Fw = "[object ArrayBuffer]", xw = "[object DataView]", Dw = "[object Float32Array]", Uw = "[object Float64Array]", jw = "[object Int8Array]", Gw = "[object Int16Array]", Ww = "[object Int32Array]", Bw = "[object Uint8Array]", $w = "[object Uint8ClampedArray]", zw = "[object Uint16Array]", Hw = "[object Uint32Array]";
  function Vw(e, t, n) {
    var i = e.constructor;
    switch (t) {
      case Fw:
        return qa(e);
      case Aw:
      case Pw:
        return new i(+e);
      case xw:
        return Iw(e);
      case Dw:
      case Uw:
      case jw:
      case Gw:
      case Ww:
      case Bw:
      case $w:
      case zw:
      case Hw:
        return Ow(e, n);
      case Mw:
        return new i();
      case Rw:
      case Lw:
        return new i(e);
      case Nw:
        return _w(e);
      case kw:
        return new i();
      case Cw:
        return Sw(e);
    }
  }
  qw = function(e) {
    return typeof e.constructor == "function" && !Ef(e) ? vg(Af(e)) : {};
  };
  var Kw = "[object Map]";
  function Yw(e) {
    return Sn(e) && cn(e) == Kw;
  }
  var rc = tr && tr.isMap, Jw = rc ? Va(rc) : Yw, Xw = "[object Set]";
  function Zw(e) {
    return Sn(e) && cn(e) == Xw;
  }
  var oc = tr && tr.isSet, Qw = oc ? Va(oc) : Zw, ey = 1, Nf = "[object Arguments]", ty = "[object Array]", ny = "[object Boolean]", iy = "[object Date]", ry = "[object Error]", kf = "[object Function]", oy = "[object GeneratorFunction]", sy = "[object Map]", ay = "[object Number]", Lf = "[object Object]", ly = "[object RegExp]", cy = "[object Set]", uy = "[object String]", fy = "[object Symbol]", hy = "[object WeakMap]", dy = "[object ArrayBuffer]", py = "[object DataView]", gy = "[object Float32Array]", my = "[object Float64Array]", wy = "[object Int8Array]", yy = "[object Int16Array]", by = "[object Int32Array]", vy = "[object Uint8Array]", Ey = "[object Uint8ClampedArray]", Iy = "[object Uint16Array]", Ty = "[object Uint32Array]", Je = {};
  Je[Nf] = Je[ty] = Je[dy] = Je[py] = Je[ny] = Je[iy] = Je[gy] = Je[my] = Je[wy] = Je[yy] = Je[by] = Je[sy] = Je[ay] = Je[Lf] = Je[ly] = Je[cy] = Je[uy] = Je[fy] = Je[vy] = Je[Ey] = Je[Iy] = Je[Ty] = true;
  Je[ry] = Je[kf] = Je[hy] = false;
  function vo(e, t, n, i, l, c) {
    var f, h = t & ey;
    if (f !== void 0) return f;
    if (!ds(e)) return e;
    var p = er(e);
    if (p) f = Ew(e);
    else {
      var v = cn(e), g = v == kf || v == oy;
      if (Bo(e)) return sw(e, h);
      if (v == Lf || v == Nf || g && !l) f = g ? {} : qw(e);
      else {
        if (!Je[v]) return l ? e : {};
        f = Vw(e, v, h);
      }
    }
    c || (c = new Gn());
    var E = c.get(e);
    if (E) return E;
    c.set(e, f), Qw(e) ? e.forEach(function(C) {
      f.add(vo(C, t, n, C, e, c));
    }) : Jw(e) && e.forEach(function(C, k) {
      f.set(k, vo(C, t, n, k, e, c));
    });
    var P = fa, M = p ? void 0 : P(e);
    return Eg(M || e, function(C, k) {
      M && (k = C, C = e[k]), Pg(f, k, vo(C, t, n, k, e, c));
    }), f;
  }
  var _y = 1, Sy = 4;
  Ct = function(e) {
    return vo(e, _y | Sy);
  };
  var Oy = "__lodash_hash_undefined__";
  function Ay(e) {
    return this.__data__.set(e, Oy), this;
  }
  function Py(e) {
    return this.__data__.has(e);
  }
  function zo(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new Fi(); ++t < n; ) this.add(e[t]);
  }
  zo.prototype.add = zo.prototype.push = Ay;
  zo.prototype.has = Py;
  function My(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i; ) if (t(e[n], n, e)) return true;
    return false;
  }
  function Ry(e, t) {
    return e.has(t);
  }
  var Ny = 1, ky = 2;
  function Cf(e, t, n, i, l, c) {
    var f = n & Ny, h = e.length, p = t.length;
    if (h != p && !(f && p > h)) return false;
    var v = c.get(e), g = c.get(t);
    if (v && g) return v == t && g == e;
    var E = -1, P = true, M = n & ky ? new zo() : void 0;
    for (c.set(e, t), c.set(t, e); ++E < h; ) {
      var C = e[E], k = t[E];
      if (i) var se = f ? i(k, C, E, t, e, c) : i(C, k, E, e, t, c);
      if (se !== void 0) {
        if (se) continue;
        P = false;
        break;
      }
      if (M) {
        if (!My(t, function(te, H) {
          if (!Ry(M, H) && (C === te || l(C, te, n, i, c))) return M.push(H);
        })) {
          P = false;
          break;
        }
      } else if (!(C === k || l(C, k, n, i, c))) {
        P = false;
        break;
      }
    }
    return c.delete(e), c.delete(t), P;
  }
  function Ly(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(i, l) {
      n[++t] = [
        l,
        i
      ];
    }), n;
  }
  function Cy(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(i) {
      n[++t] = i;
    }), n;
  }
  var Fy = 1, xy = 2, Dy = "[object Boolean]", Uy = "[object Date]", jy = "[object Error]", Gy = "[object Map]", Wy = "[object Number]", By = "[object RegExp]", $y = "[object Set]", zy = "[object String]", Hy = "[object Symbol]", Vy = "[object ArrayBuffer]", qy = "[object DataView]", sc = ui ? ui.prototype : void 0, Fs = sc ? sc.valueOf : void 0;
  function Ky(e, t, n, i, l, c, f) {
    switch (n) {
      case qy:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
        e = e.buffer, t = t.buffer;
      case Vy:
        return !(e.byteLength != t.byteLength || !c(new $o(e), new $o(t)));
      case Dy:
      case Uy:
      case Wy:
        return Ha(+e, +t);
      case jy:
        return e.name == t.name && e.message == t.message;
      case By:
      case zy:
        return e == t + "";
      case Gy:
        var h = Ly;
      case $y:
        var p = i & Fy;
        if (h || (h = Cy), e.size != t.size && !p) return false;
        var v = f.get(e);
        if (v) return v == t;
        i |= xy, f.set(e, t);
        var g = Cf(h(e), h(t), i, l, c, f);
        return f.delete(e), g;
      case Hy:
        if (Fs) return Fs.call(e) == Fs.call(t);
    }
    return false;
  }
  var Yy = 1, Jy = Object.prototype, Xy = Jy.hasOwnProperty;
  function Zy(e, t, n, i, l, c) {
    var f = n & Yy, h = fa(e), p = h.length, v = fa(t), g = v.length;
    if (p != g && !f) return false;
    for (var E = p; E--; ) {
      var P = h[E];
      if (!(f ? P in t : Xy.call(t, P))) return false;
    }
    var M = c.get(e), C = c.get(t);
    if (M && C) return M == t && C == e;
    var k = true;
    c.set(e, t), c.set(t, e);
    for (var se = f; ++E < p; ) {
      P = h[E];
      var te = e[P], H = t[P];
      if (i) var ie = f ? i(H, te, P, t, e, c) : i(te, H, P, e, t, c);
      if (!(ie === void 0 ? te === H || l(te, H, n, i, c) : ie)) {
        k = false;
        break;
      }
      se || (se = P == "constructor");
    }
    if (k && !se) {
      var G = e.constructor, pe = t.constructor;
      G != pe && "constructor" in e && "constructor" in t && !(typeof G == "function" && G instanceof G && typeof pe == "function" && pe instanceof pe) && (k = false);
    }
    return c.delete(e), c.delete(t), k;
  }
  var Qy = 1, ac = "[object Arguments]", lc = "[object Array]", co = "[object Object]", eb = Object.prototype, cc = eb.hasOwnProperty;
  function tb(e, t, n, i, l, c) {
    var f = er(e), h = er(t), p = f ? lc : cn(e), v = h ? lc : cn(t);
    p = p == ac ? co : p, v = v == ac ? co : v;
    var g = p == co, E = v == co, P = p == v;
    if (P && Bo(e)) {
      if (!Bo(t)) return false;
      f = true, g = false;
    }
    if (P && !g) return c || (c = new Gn()), f || Sf(e) ? Cf(e, t, n, i, l, c) : Ky(e, t, p, n, i, l, c);
    if (!(n & Qy)) {
      var M = g && cc.call(e, "__wrapped__"), C = E && cc.call(t, "__wrapped__");
      if (M || C) {
        var k = M ? e.value() : e, se = C ? t.value() : t;
        return c || (c = new Gn()), l(k, se, n, i, c);
      }
    }
    return P ? (c || (c = new Gn()), Zy(e, t, n, i, l, c)) : false;
  }
  Ff = function(e, t, n, i, l) {
    return e === t ? true : e == null || t == null || !Sn(e) && !Sn(t) ? e !== e && t !== t : tb(e, t, n, i, Ff, l);
  };
  var nb = "[object String]";
  function ga(e) {
    return typeof e == "string" || !er(e) && Sn(e) && hi(e) == nb;
  }
  function ib(e, t) {
    return Ff(e, t);
  }
  const kt = (e) => ga(e) ? e : Mf(e) ? String(e) : JSON.stringify(e), mn = {
    unloaded: (...e) => `[loadModules] Module "${kt(e[0])}" has not been loaded yet`,
    loading: (...e) => `[loadModules] Module "${kt(e[0])}" is loading`,
    loaded: (...e) => `[loadModules] Module "${kt(e[0])}" has been loaded`,
    error: (...e) => `[loadModules] Module "${kt(e[0])}" failed to load.
Trackback: 
${kt(e[1])}`,
    errorDetermined: (...e) => `[loadModules] Module "${kt(e[0])}" failed to load, asserted by another instance, skip`,
    alreadyLoading: (...e) => `[loadModules] Module "${kt(e[0])}" is already loading by another instance, skip`,
    alreadyLoaded: (...e) => `[loadModules] Module "${kt(e[0])}" has been loaded by another instance, skip`,
    missingDependencies: (...e) => `[loadModules] Module "${kt(e[0])}" is missing the following dependencies: ${kt(e[1])}`,
    loadDependencies: (...e) => `[loadModules] Module "${kt(e[0])}" is loading its dependencies (${e.slice(1).map((t) => kt(t)).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${kt(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${kt(e[0])}" dependencies failed to load. 

Trackback: 
${kt(e[1])}`
  }, rb = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function xf(e, t, n = 1e4, i = {}, l = 0, c = 0, f = 0) {
    var _a2, _b2, _c2, _d2, _e, _f2;
    const { logger: h = rb, progressReporter: p, printLog: v = true } = i, g = e.find((k) => k.name === t);
    if (!g) throw new Error(`cannot exactly find module "${t}" from the library`);
    const E = e.findIndex((k) => k.name === g.name);
    if (e[E].status === "loaded") return v && h.info(mn.alreadyLoaded(g.name)), {
      completed: f,
      total: c
    };
    const P = g.dependencies || [], M = e.filter((k) => P.includes(k.name)), C = P.filter((k) => !e.find((se) => se.name === k));
    if (C.length > 0) {
      const k = mn.missingDependencies(g.name, C.join(", "));
      throw v && h.error(k), new Error(k);
    }
    if (e[E].status === "error") {
      const k = mn.errorDetermined(g.name);
      throw v && h.info(k), new Error(k);
    }
    if (e[E].status === "loading") return v && h.info(mn.alreadyLoading(g.name)), await ob(e, g.name, n, h), {
      completed: f,
      total: c
    };
    try {
      let k = c, se = f;
      if (l === 0) {
        const te = /* @__PURE__ */ new Set(), H = (ie) => {
          if (te.has(ie)) return;
          te.add(ie);
          const G = e.find((pe) => pe.name === ie);
          if (G && G.dependencies) for (const pe of G.dependencies) H(pe);
        };
        H(t), k = te.size, se = 0;
      }
      if (M.length > 0) {
        h.info(mn.loadDependencies(g.name, M.map((te) => te.name)));
        for (const te of M) {
          const H = await xf(e, te.name, n, {
            logger: h,
            progressReporter: p,
            printLog: v
          }, l + 1, k, se);
          se = H.completed, k = H.total, (_a2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a2.call(p, se, k);
        }
        v && h.info(mn.dependenciesReady(g.name));
      }
      e[E].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, g.displayName);
      try {
        return v && h.info(mn.loading(g.name)), await g.moduleInit(n), e[E].status = "loaded", se++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, g.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, se, k), v && h.info(mn.loaded(g.name)), {
          completed: se,
          total: k
        };
      } catch (te) {
        e[E].status = "error";
        const H = mn.error(g.name, ga(te) ? te : Mf(te) ? te.message : JSON.stringify(te));
        throw h.error(H), (_e = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e.call(p, g.displayName, ga(te) ? new Error(te) : te), new Error(H);
      }
    } catch (k) {
      e[E].status = "error", console.log(k);
      const se = mn.error(g.name, k);
      throw h.error(se), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, g.displayName, k), new Error(se);
    }
  }
  async function ob(e, t, n = 1e4, i) {
    const l = Date.now();
    return new Promise((c, f) => {
      const h = setInterval(() => {
        const p = e.find((v) => v.name === t);
        if (p && p.status === "loaded") clearInterval(h), c();
        else if (Date.now() - l > n) {
          clearInterval(h);
          const v = new Error(`Load module ${t} timeout`);
          i == null ? void 0 : i.error(v.message), f(v);
        }
      }, 100);
    });
  }
  let sb, ab, uc, lb, cb, ub, Df;
  sb = "modulepreload";
  ab = function(e, t) {
    return new URL(e, t).href;
  };
  uc = {};
  xs = function(t, n, i) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      let v = function(g) {
        return Promise.all(g.map((E) => Promise.resolve(E).then((P) => ({
          status: "fulfilled",
          value: P
        }), (P) => ({
          status: "rejected",
          reason: P
        }))));
      };
      const f = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), p = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      l = v(n.map((g) => {
        if (g = ab(g, i), g in uc) return;
        uc[g] = true;
        const E = g.endsWith(".css"), P = E ? '[rel="stylesheet"]' : "";
        if (i) for (let C = f.length - 1; C >= 0; C--) {
          const k = f[C];
          if (k.href === g && (!E || k.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${g}"]${P}`)) return;
        const M = document.createElement("link");
        if (M.rel = E ? "stylesheet" : sb, E || (M.as = "script"), M.crossOrigin = "", M.href = g, p && M.setAttribute("nonce", p), document.head.appendChild(M), E) return new Promise((C, k) => {
          M.addEventListener("load", C), M.addEventListener("error", () => k(new Error(`Unable to preload CSS for ${g}`)));
        });
      }));
    }
    function c(f) {
      const h = new Event("vite:preloadError", {
        cancelable: true
      });
      if (h.payload = f, window.dispatchEvent(h), !h.defaultPrevented) throw f;
    }
    return l.then((f) => {
      for (const h of f || []) h.status === "rejected" && c(h.reason);
      return t().catch(c);
    });
  };
  lb = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
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
  ub = {
    withStackTrace: false
  };
  Df = (e, t, n = ub) => {
    const i = t.isOk() ? {
      type: "Ok",
      value: t.value
    } : {
      type: "Err",
      value: t.error
    }, l = n.withStackTrace ? new Error().stack : void 0;
    return {
      data: i,
      message: e,
      stack: l
    };
  };
  function bi(e, t, n, i) {
    function l(c) {
      return c instanceof n ? c : new n(function(f) {
        f(c);
      });
    }
    return new (n || (n = Promise))(function(c, f) {
      function h(g) {
        try {
          v(i.next(g));
        } catch (E) {
          f(E);
        }
      }
      function p(g) {
        try {
          v(i.throw(g));
        } catch (E) {
          f(E);
        }
      }
      function v(g) {
        g.done ? c(g.value) : l(g.value).then(h, p);
      }
      v((i = i.apply(e, [])).next());
    });
  }
  function fc(e) {
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
  function In(e) {
    return this instanceof In ? (this.v = e, this) : new In(e);
  }
  function hc(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = n.apply(e, t || []), l, c = [];
    return l = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", f), l[Symbol.asyncIterator] = function() {
      return this;
    }, l;
    function f(M) {
      return function(C) {
        return Promise.resolve(C).then(M, E);
      };
    }
    function h(M, C) {
      i[M] && (l[M] = function(k) {
        return new Promise(function(se, te) {
          c.push([
            M,
            k,
            se,
            te
          ]) > 1 || p(M, k);
        });
      }, C && (l[M] = C(l[M])));
    }
    function p(M, C) {
      try {
        v(i[M](C));
      } catch (k) {
        P(c[0][3], k);
      }
    }
    function v(M) {
      M.value instanceof In ? Promise.resolve(M.value.v).then(g, E) : P(c[0][2], M);
    }
    function g(M) {
      p("next", M);
    }
    function E(M) {
      p("throw", M);
    }
    function P(M, C) {
      M(C), c.shift(), c.length && p(c[0][0], c[0][1]);
    }
  }
  function fb(e) {
    var t, n;
    return t = {}, i("next"), i("throw", function(l) {
      throw l;
    }), i("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function i(l, c) {
      t[l] = e[l] ? function(f) {
        return (n = !n) ? {
          value: In(e[l](f)),
          done: false
        } : c ? c(f) : f;
      } : c;
    }
  }
  function hb(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof fc == "function" ? fc(e) : e[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
      return this;
    }, n);
    function i(c) {
      n[c] = e[c] && function(f) {
        return new Promise(function(h, p) {
          f = e[c](f), l(h, p, f.done, f.value);
        });
      };
    }
    function l(c, f, h, p) {
      Promise.resolve(p).then(function(v) {
        c({
          value: v,
          done: h
        });
      }, f);
    }
  }
  class _t {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const n = t.then((i) => new yn(i));
      return new _t(n);
    }
    static fromPromise(t, n) {
      const i = t.then((l) => new yn(l)).catch((l) => new an(n(l)));
      return new _t(i);
    }
    static fromThrowable(t, n) {
      return (...i) => new _t(bi(this, void 0, void 0, function* () {
        try {
          return new yn(yield t(...i));
        } catch (l) {
          return new an(n ? n(l) : l);
        }
      }));
    }
    static combine(t) {
      return db(t);
    }
    static combineWithAllErrors(t) {
      return pb(t);
    }
    map(t) {
      return new _t(this._promise.then((n) => bi(this, void 0, void 0, function* () {
        return n.isErr() ? new an(n.error) : new yn(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new _t(this._promise.then((n) => bi(this, void 0, void 0, function* () {
        if (n.isErr()) return new an(n.error);
        const i = yield t(n.value);
        return i.isErr() ? new an(i.error) : new yn(n.value);
      })));
    }
    andTee(t) {
      return new _t(this._promise.then((n) => bi(this, void 0, void 0, function* () {
        if (n.isErr()) return new an(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new yn(n.value);
      })));
    }
    orTee(t) {
      return new _t(this._promise.then((n) => bi(this, void 0, void 0, function* () {
        if (n.isOk()) return new yn(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new an(n.error);
      })));
    }
    mapErr(t) {
      return new _t(this._promise.then((n) => bi(this, void 0, void 0, function* () {
        return n.isOk() ? new yn(n.value) : new an(yield t(n.error));
      })));
    }
    andThen(t) {
      return new _t(this._promise.then((n) => {
        if (n.isErr()) return new an(n.error);
        const i = t(n.value);
        return i instanceof _t ? i._promise : i;
      }));
    }
    orElse(t) {
      return new _t(this._promise.then((n) => bi(this, void 0, void 0, function* () {
        return n.isErr() ? t(n.error) : new yn(n.value);
      })));
    }
    match(t, n) {
      return this._promise.then((i) => i.match(t, n));
    }
    unwrapOr(t) {
      return this._promise.then((n) => n.unwrapOr(t));
    }
    safeUnwrap() {
      return hc(this, arguments, function* () {
        return yield In(yield In(yield* fb(hb(yield In(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return hc(this, arguments, function* () {
        const n = yield In(this._promise);
        return n.isErr() && (yield yield In(Eo(n.error))), yield In(n.value);
      });
    }
  }
  function Eo(e) {
    return new _t(Promise.resolve(new an(e)));
  }
  const Uf = (e) => {
    let t = x([]);
    for (const n of e) if (n.isErr()) {
      t = R(n.error);
      break;
    } else t.map((i) => i.push(n.value));
    return t;
  }, db = (e) => _t.fromSafePromise(Promise.all(e)).andThen(Uf), jf = (e) => {
    let t = x([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = R([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, pb = (e) => _t.fromSafePromise(Promise.all(e)).andThen(jf);
  var ma;
  (function(e) {
    function t(l, c) {
      return (...f) => {
        try {
          const h = l(...f);
          return x(h);
        } catch (h) {
          return R(c ? c(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function n(l) {
      return Uf(l);
    }
    e.combine = n;
    function i(l) {
      return jf(l);
    }
    e.combineWithAllErrors = i;
  })(ma || (ma = {}));
  x = function(e) {
    return new yn(e);
  };
  R = function(e) {
    return new an(e);
  };
  class yn {
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
      return x(t(this.value));
    }
    mapErr(t) {
      return x(this.value);
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
      return x(this.value);
    }
    orTee(t) {
      return x(this.value);
    }
    orElse(t) {
      return x(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return _t.fromSafePromise(t(this.value));
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
      throw Df("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class an {
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
      return R(this.error);
    }
    mapErr(t) {
      return R(t(this.error));
    }
    andThrough(t) {
      return R(this.error);
    }
    andTee(t) {
      return R(this.error);
    }
    orTee(t) {
      try {
        t(this.error);
      } catch {
      }
      return R(this.error);
    }
    andThen(t) {
      return R(this.error);
    }
    orElse(t) {
      return t(this.error);
    }
    asyncAndThen(t) {
      return Eo(this.error);
    }
    asyncAndThrough(t) {
      return Eo(this.error);
    }
    asyncMap(t) {
      return Eo(this.error);
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
        throw yield R(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw Df("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  ma.fromThrowable;
  sr = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(sr || {});
  xi = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class mt extends xi {
    constructor(t, n = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function gb(e) {
    return e instanceof xi;
  }
  Ot = function(e, t = "Unknown error occurred") {
    return gb(e) ? e : e instanceof Error ? new mt(t, "UNKNOWN_ERROR", e) : new mt(t, "UNKNOWN_ERROR");
  };
  st = function(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  };
  class Ka extends xi {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", sr.GEOLOCATION);
      this.code = n;
    }
  }
  class ji extends Ka {
    constructor(t = "User denied geolocation permission", n) {
      super(t, "PERMISSION_DENIED", n);
    }
  }
  class mb extends Ka {
    constructor(t = "Geolocation is not supported by this browser", n) {
      super(t, "UNSUPPORTED_BROWSER", n);
    }
  }
  class je extends Ka {
    constructor(t = "Geolocation update service error", n, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = n;
    }
  }
  var wb = "2.0.7", yb = 500, dc = "user-agent", nr = "", pc = "?", lt = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Wt = "browser", Wn = "cpu", _n = "device", un = "engine", Kt = "os", ir = "result", W = "name", D = "type", $ = "vendor", z = "version", Ft = "architecture", Hr = "major", j = "model", Io = "console", Ae = "mobile", He = "tablet", ut = "smarttv", bn = "wearable", uo = "xr", Ir = "embedded", Gi = "inapp", Ya = "brands", _i = "formFactors", Ja = "fullVersionList", rr = "platform", Xa = "platformVersion", ms = "bitness", di = "sec-ch-ua", bb = di + "-full-version-list", vb = di + "-arch", Eb = di + "-" + ms, Ib = di + "-form-factors", Tb = di + "-" + Ae, _b = di + "-" + j, Gf = di + "-" + rr, Sb = Gf + "-version", Wf = [
    Ya,
    Ja,
    Ae,
    j,
    rr,
    Xa,
    Ft,
    _i,
    ms
  ], fo = "Amazon", Wi = "Apple", gc = "ASUS", mc = "BlackBerry", vi = "Google", wc = "Huawei", Ds = "Lenovo", yc = "Honor", ho = "LG", Us = "Microsoft", js = "Motorola", bc = "Nvidia", vc = "OnePlus", Gs = "OPPO", dr = "Samsung", Ec = "Sharp", pr = "Sony", Ws = "Xiaomi", Bs = "Zebra", Ic = "Chrome", Tc = "Chromium", Qn = "Chromecast", To = "Edge", gr = "Firefox", mr = "Opera", $s = "Facebook", _c = "Sogou", Bi = "Mobile ", wr = " Browser", wa = "Windows", Ob = typeof window !== lt.UNDEFINED, jt = Ob && window.navigator ? window.navigator : void 0, Si = jt && jt.userAgentData ? jt.userAgentData : void 0, Ab = function(e, t) {
    var n = {}, i = t;
    if (!Ho(t)) {
      i = {};
      for (var l in t) for (var c in t[l]) i[c] = t[l][c].concat(i[c] ? i[c] : []);
    }
    for (var f in e) n[f] = i[f] && i[f].length % 2 === 0 ? i[f].concat(e[f]) : e[f];
    return n;
  }, ws = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, ya = function(e, t) {
    if (typeof e === lt.OBJECT && e.length > 0) {
      for (var n in e) if (si(t) == si(e[n])) return true;
      return false;
    }
    return Xr(e) ? si(t) == si(e) : false;
  }, Ho = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? Ho(e[n]) : false);
  }, Xr = function(e) {
    return typeof e === lt.STRING;
  }, zs = function(e) {
    if (e) {
      for (var t = [], n = or(/\\?\"/g, e).split(","), i = 0; i < n.length; i++) if (n[i].indexOf(";") > -1) {
        var l = Vo(n[i]).split(";v=");
        t[i] = {
          brand: l[0],
          version: l[1]
        };
      } else t[i] = Vo(n[i]);
      return t;
    }
  }, si = function(e) {
    return Xr(e) ? e.toLowerCase() : e;
  }, ba = function(e) {
    return Xr(e) ? or(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, Un = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var n = e[t];
      typeof n == lt.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, or = function(e, t) {
    return Xr(t) ? t.replace(e, nr) : t;
  }, yr = function(e) {
    return or(/\\?\"/g, e);
  }, Vo = function(e, t) {
    return e = or(/^\s\s*/, String(e)), typeof t === lt.UNDEFINED ? e : e.substring(0, t);
  }, va = function(e, t) {
    if (!(!e || !t)) for (var n = 0, i, l, c, f, h, p; n < t.length && !h; ) {
      var v = t[n], g = t[n + 1];
      for (i = l = 0; i < v.length && !h && v[i]; ) if (h = v[i++].exec(e), h) for (c = 0; c < g.length; c++) p = h[++l], f = g[c], typeof f === lt.OBJECT && f.length > 0 ? f.length === 2 ? typeof f[1] == lt.FUNCTION ? this[f[0]] = f[1].call(this, p) : this[f[0]] = f[1] : f.length >= 3 && (typeof f[1] === lt.FUNCTION && !(f[1].exec && f[1].test) ? f.length > 3 ? this[f[0]] = p ? f[1].apply(this, f.slice(2)) : void 0 : this[f[0]] = p ? f[1].call(this, p, f[2]) : void 0 : f.length == 3 ? this[f[0]] = p ? p.replace(f[1], f[2]) : void 0 : f.length == 4 ? this[f[0]] = p ? f[3].call(this, p.replace(f[1], f[2])) : void 0 : f.length > 4 && (this[f[0]] = p ? f[3].apply(this, [
        p.replace(f[1], f[2])
      ].concat(f.slice(4))) : void 0)) : this[f] = p || void 0;
      n += 2;
    }
  }, ln = function(e, t) {
    for (var n in t) if (typeof t[n] === lt.OBJECT && t[n].length > 0) {
      for (var i = 0; i < t[n].length; i++) if (ya(t[n][i], e)) return n === pc ? void 0 : n;
    } else if (ya(t[n], e)) return n === pc ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, Sc = {
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
  }, Oc = {
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
  }, Pb = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, Ac = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          Bi + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          To + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        W,
        z
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          mr + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          mr + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          mr
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        z,
        [
          W,
          "Maxthon"
        ]
      ],
      [
        /(kindle)\/([\w\.]+)/i,
        /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
        /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
        /(?:ms|\()(ie) ([\w\.]+)/i,
        /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser|palemoon)\/([-\w\.]+)/i,
        /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
        /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
      ],
      [
        W,
        z
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        z,
        [
          W,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "Smart " + Ds + wr
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          W,
          /(.+)/,
          "$1 Secure" + wr
        ],
        z
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          gr + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          mr + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          mr + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "MIUI" + wr
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        z,
        [
          W,
          Bi + gr
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        z,
        [
          W,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          W,
          /(.+)/,
          "$1Browser"
        ],
        z
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          W,
          /(.+)/,
          "$1" + wr
        ],
        z
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          dr + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          _c + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          W,
          _c + " Mobile"
        ],
        z
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        W,
        z
      ],
      [
        /(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i
      ],
      [
        W
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        z,
        W
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          W,
          $s
        ],
        z,
        [
          D,
          Gi
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
        W,
        z,
        [
          D,
          Gi
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        z,
        [
          W,
          "GSA"
        ],
        [
          D,
          Gi
        ]
      ],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          "TikTok"
        ],
        [
          D,
          Gi
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        W,
        [
          D,
          Gi
        ]
      ],
      [
        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
      ],
      [
        [
          W,
          /(.+)/,
          "Zalo"
        ],
        z,
        [
          D,
          Gi
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        W,
        z
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        z,
        [
          W,
          Ic + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        z,
        [
          W,
          To + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          W,
          Ic + " WebView"
        ],
        z
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        z,
        [
          W,
          "Android" + wr
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        z,
        [
          W,
          Bi + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        W,
        z
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        z,
        [
          W,
          Bi + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          W,
          Bi + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        z,
        W
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        W,
        [
          z,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        W,
        z
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          W,
          Bi + gr
        ],
        z
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          W,
          "Netscape"
        ],
        z
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        W,
        z
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        z,
        [
          W,
          gr + " Reality"
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
        W,
        [
          z,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        W,
        [
          z,
          /[^\d\.]+./,
          nr
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          Ft,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          Ft,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          Ft,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          Ft,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          Ft,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          Ft,
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
          Ft,
          /ower/,
          nr,
          si
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          Ft,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          Ft,
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
          dr
        ],
        [
          D,
          He
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
          dr
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        j,
        [
          $,
          Wi
        ],
        [
          D,
          Ae
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
          Wi
        ],
        [
          D,
          He
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        j,
        [
          $,
          Wi
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        j,
        [
          $,
          Ec
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        j,
        [
          $,
          yc
        ],
        [
          D,
          He
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        j,
        [
          $,
          yc
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        j,
        [
          $,
          wc
        ],
        [
          D,
          He
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
          wc
        ],
        [
          D,
          Ae
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
          Ws
        ],
        [
          D,
          He
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
          Ws
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        j,
        [
          $,
          vc
        ],
        [
          D,
          Ae
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
          Gs
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        j,
        [
          $,
          ln,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": Gs
          }
        ],
        [
          D,
          He
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
          D,
          Ae
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
          D,
          Ae
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
          D,
          Ae
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
          Ds
        ],
        [
          D,
          He
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        j,
        [
          $,
          Ds
        ],
        [
          D,
          Ae
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
          js
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        j,
        [
          $,
          js
        ],
        [
          D,
          He
        ]
      ],
      [
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        j,
        [
          $,
          ho
        ],
        [
          D,
          He
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
          ho
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        $,
        j,
        [
          D,
          He
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
          D,
          Ae
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
          vi
        ],
        [
          D,
          He
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        j,
        [
          $,
          vi
        ],
        [
          D,
          Ae
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
          pr
        ],
        [
          D,
          Ae
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
          pr
        ],
        [
          D,
          He
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
          fo
        ],
        [
          D,
          He
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
          fo
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        j,
        $,
        [
          D,
          He
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
          mc
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        j,
        [
          $,
          gc
        ],
        [
          D,
          He
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        j,
        [
          $,
          gc
        ],
        [
          D,
          Ae
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
          D,
          He
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
          D,
          Ae
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
          D,
          He
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
          D,
          Ae
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          $,
          si
        ],
        j,
        [
          D,
          ln,
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
          D,
          He
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
          D,
          Ae
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
          D,
          Ae
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
          D,
          Ae
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
          D,
          Ae
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
          D,
          Ae
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
          D,
          Ae
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
          D,
          He
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
          D,
          Ae
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
          D,
          Ae
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
          D,
          He
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
          D,
          Ae
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
          D,
          He
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        j,
        [
          $,
          Us
        ],
        [
          D,
          He
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
          D,
          Ae
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        j,
        [
          $,
          bc
        ],
        [
          D,
          He
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        $,
        j,
        [
          D,
          Ae
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
          Us
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        j,
        [
          $,
          Bs
        ],
        [
          D,
          He
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        j,
        [
          $,
          Bs
        ],
        [
          D,
          Ae
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        $,
        [
          D,
          ut
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
          dr
        ],
        [
          D,
          ut
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
          D,
          ut
        ]
      ],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [
        [
          $,
          ho
        ],
        [
          D,
          ut
        ]
      ],
      [
        /(apple) ?tv/i
      ],
      [
        $,
        [
          j,
          Wi + " TV"
        ],
        [
          D,
          ut
        ]
      ],
      [
        /crkey.*devicetype\/chromecast/i
      ],
      [
        [
          j,
          Qn + " Third Generation"
        ],
        [
          $,
          vi
        ],
        [
          D,
          ut
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
          vi
        ],
        [
          D,
          ut
        ]
      ],
      [
        /fuchsia.*crkey/i
      ],
      [
        [
          j,
          Qn + " Nest Hub"
        ],
        [
          $,
          vi
        ],
        [
          D,
          ut
        ]
      ],
      [
        /crkey/i
      ],
      [
        [
          j,
          Qn
        ],
        [
          $,
          vi
        ],
        [
          D,
          ut
        ]
      ],
      [
        /(portaltv)/i
      ],
      [
        j,
        [
          $,
          $s
        ],
        [
          D,
          ut
        ]
      ],
      [
        /droid.+aft(\w+)( bui|\))/i
      ],
      [
        j,
        [
          $,
          fo
        ],
        [
          D,
          ut
        ]
      ],
      [
        /(shield \w+ tv)/i
      ],
      [
        j,
        [
          $,
          bc
        ],
        [
          D,
          ut
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
          Ec
        ],
        [
          D,
          ut
        ]
      ],
      [
        /(bravia[\w ]+)( bui|\))/i
      ],
      [
        j,
        [
          $,
          pr
        ],
        [
          D,
          ut
        ]
      ],
      [
        /(mi(tv|box)-?\w+) bui/i
      ],
      [
        j,
        [
          $,
          Ws
        ],
        [
          D,
          ut
        ]
      ],
      [
        /Hbbtv.*(technisat) (.*);/i
      ],
      [
        $,
        j,
        [
          D,
          ut
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
          ln,
          {
            LG: "lge"
          }
        ],
        [
          j,
          Vo
        ],
        [
          D,
          ut
        ]
      ],
      [
        /(playstation \w+)/i
      ],
      [
        j,
        [
          $,
          pr
        ],
        [
          D,
          Io
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        j,
        [
          $,
          Us
        ],
        [
          D,
          Io
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
          ln,
          {
            Nvidia: "Shield",
            Anbernic: "RGCUBE",
            Logitech: "GR0006"
          }
        ],
        j,
        [
          D,
          Io
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        j,
        [
          $,
          dr
        ],
        [
          D,
          bn
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
          D,
          bn
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        j,
        [
          $,
          Gs
        ],
        [
          D,
          bn
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        j,
        [
          $,
          Wi
        ],
        [
          D,
          bn
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        j,
        [
          $,
          vc
        ],
        [
          D,
          bn
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        j,
        [
          $,
          js
        ],
        [
          D,
          bn
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        j,
        [
          $,
          pr
        ],
        [
          D,
          bn
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        j,
        [
          $,
          ho
        ],
        [
          D,
          bn
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        j,
        [
          $,
          Bs
        ],
        [
          D,
          bn
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        j,
        [
          $,
          vi
        ],
        [
          D,
          uo
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        $,
        j,
        [
          D,
          uo
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        j,
        [
          $,
          $s
        ],
        [
          D,
          uo
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          D,
          uo
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        $,
        [
          D,
          Ir
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        j,
        [
          $,
          fo
        ],
        [
          D,
          Ir
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        j,
        [
          $,
          Wi
        ],
        [
          D,
          Ir
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          D,
          Ir
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        j,
        [
          D,
          ut
        ]
      ],
      [
        /\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i
      ],
      [
        [
          D,
          ut
        ]
      ],
      [
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i
      ],
      [
        j,
        [
          D,
          ln,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": He
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          D,
          He
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          D,
          Ae
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
        z,
        [
          W,
          To + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        W,
        z
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        z,
        [
          W,
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
        W,
        z
      ],
      [
        /ladybird\//i
      ],
      [
        [
          W,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        z,
        W
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          W,
          /N/,
          "R"
        ],
        [
          z,
          ln,
          Sc
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        W,
        z
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          z,
          /(;|\))/g,
          "",
          ln,
          Sc
        ],
        [
          W,
          wa
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        W,
        z
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
        /\btvos ?([\w\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          z,
          /_/g,
          "."
        ],
        [
          W,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          W,
          "macOS"
        ],
        [
          z,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        z,
        [
          W,
          Qn + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          Qn + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        z,
        [
          W,
          Qn + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          Qn + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          Qn
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        z,
        W
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          W,
          /(.+)/,
          "$1 Touch"
        ],
        z
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        W,
        z
      ],
      [
        /\(bb(10);/i
      ],
      [
        z,
        [
          W,
          mc
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        z,
        [
          W,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        z,
        [
          W,
          gr + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        z,
        [
          W,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          z,
          ln,
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
          W,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        z,
        [
          W,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          W,
          "Chrome OS"
        ],
        z
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
        W,
        z
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          W,
          "Solaris"
        ],
        z
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        W,
        z
      ]
    ]
  }, po = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return Un.call(e.init, [
      [
        Wt,
        [
          W,
          z,
          Hr,
          D
        ]
      ],
      [
        Wn,
        [
          Ft
        ]
      ],
      [
        _n,
        [
          D,
          j,
          $
        ]
      ],
      [
        un,
        [
          W,
          z
        ]
      ],
      [
        Kt,
        [
          W,
          z
        ]
      ]
    ]), Un.call(e.isIgnore, [
      [
        Wt,
        [
          z,
          Hr
        ]
      ],
      [
        un,
        [
          z
        ]
      ],
      [
        Kt,
        [
          z
        ]
      ]
    ]), Un.call(e.isIgnoreRgx, [
      [
        Wt,
        / ?browser$/i
      ],
      [
        Kt,
        / ?os$/i
      ]
    ]), Un.call(e.toString, [
      [
        Wt,
        [
          W,
          z
        ]
      ],
      [
        Wn,
        [
          Ft
        ]
      ],
      [
        _n,
        [
          $,
          j
        ]
      ],
      [
        un,
        [
          W,
          z
        ]
      ],
      [
        Kt,
        [
          W,
          z
        ]
      ]
    ]), e;
  })(), Mb = function(e, t) {
    var n = po.init[t], i = po.isIgnore[t] || 0, l = po.isIgnoreRgx[t] || 0, c = po.toString[t] || 0;
    function f() {
      Un.call(this, n);
    }
    return f.prototype.getItem = function() {
      return e;
    }, f.prototype.withClientHints = function() {
      return Si ? Si.getHighEntropyValues(Wf).then(function(h) {
        return e.setCH(new Bf(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, f.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != ir && (f.prototype.is = function(h) {
      var p = false;
      for (var v in this) if (this.hasOwnProperty(v) && !ya(i, v) && si(l ? or(l, this[v]) : this[v]) == si(l ? or(l, h) : h)) {
        if (p = true, h != lt.UNDEFINED) break;
      } else if (h == lt.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, f.prototype.toString = function() {
      var h = nr;
      for (var p in c) typeof this[c[p]] !== lt.UNDEFINED && (h += (h ? " " : nr) + this[c[p]]);
      return h || lt.UNDEFINED;
    }), f.prototype.then = function(h) {
      var p = this, v = function() {
        for (var E in p) p.hasOwnProperty(E) && (this[E] = p[E]);
      };
      v.prototype = {
        is: f.prototype.is,
        toString: f.prototype.toString,
        withClientHints: f.prototype.withClientHints,
        withFeatureCheck: f.prototype.withFeatureCheck
      };
      var g = new v();
      return h(g), g;
    }, new f();
  };
  function Bf(e, t) {
    if (e = e || {}, Un.call(this, Wf), t) Un.call(this, [
      [
        Ya,
        zs(e[di])
      ],
      [
        Ja,
        zs(e[bb])
      ],
      [
        Ae,
        /\?1/.test(e[Tb])
      ],
      [
        j,
        yr(e[_b])
      ],
      [
        rr,
        yr(e[Gf])
      ],
      [
        Xa,
        yr(e[Sb])
      ],
      [
        Ft,
        yr(e[vb])
      ],
      [
        _i,
        zs(e[Ib])
      ],
      [
        ms,
        yr(e[Eb])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== lt.UNDEFINED && (this[n] = e[n]);
  }
  function fi(e, t, n, i) {
    return Un.call(this, [
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
        Mb(this, e)
      ]
    ]), this;
  }
  fi.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data;
  };
  fi.prototype.set = function(e, t) {
    return this.data[e] = t, this;
  };
  fi.prototype.setCH = function(e) {
    return this.uaCH = e, this;
  };
  fi.prototype.detectFeature = function() {
    if (jt && jt.userAgent == this.ua) switch (this.itemType) {
      case Wt:
        jt.brave && typeof jt.brave.isBrave == lt.FUNCTION && this.set(W, "Brave");
        break;
      case _n:
        !this.get(D) && Si && Si[Ae] && this.set(D, Ae), this.get(j) == "Macintosh" && jt && typeof jt.standalone !== lt.UNDEFINED && jt.maxTouchPoints && jt.maxTouchPoints > 2 && this.set(j, "iPad").set(D, He);
        break;
      case Kt:
        !this.get(W) && Si && Si[rr] && this.set(W, Si[rr]);
        break;
      case ir:
        var e = this.data, t = function(n) {
          return e[n].getItem().detectFeature().get();
        };
        this.set(Wt, t(Wt)).set(Wn, t(Wn)).set(_n, t(_n)).set(un, t(un)).set(Kt, t(Kt));
    }
    return this;
  };
  fi.prototype.parseUA = function() {
    switch (this.itemType != ir && va.call(this.data, this.ua, this.rgxMap), this.itemType) {
      case Wt:
        this.set(Hr, ba(this.get(z)));
        break;
      case Kt:
        if (this.get(W) == "iOS" && this.get(z) == "18.6") {
          var e = /\) Version\/([\d\.]+)/.exec(this.ua);
          e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(z, e[1]);
        }
        break;
    }
    return this;
  };
  fi.prototype.parseCH = function() {
    var e = this.uaCH, t = this.rgxMap;
    switch (this.itemType) {
      case Wt:
      case un:
        var n = e[Ja] || e[Ya], i;
        if (n) for (var l = 0; l < n.length; l++) {
          var c = n[l].brand || n[l], f = n[l].version;
          this.itemType == Wt && !/not.a.brand/i.test(c) && (!i || /Chrom/.test(i) && c != Tc || i == To && /WebView2/.test(c)) && (c = ln(c, Pb), i = this.get(W), i && !/Chrom/.test(i) && /Chrom/.test(c) || this.set(W, c).set(z, f).set(Hr, ba(f)), i = c), this.itemType == un && c == Tc && this.set(z, f);
        }
        break;
      case Wn:
        var h = e[Ft];
        h && (h && e[ms] == "64" && (h += "64"), va.call(this.data, h + ";", t));
        break;
      case _n:
        if (e[Ae] && this.set(D, Ae), e[j] && (this.set(j, e[j]), !this.get(D) || !this.get($))) {
          var p = {};
          va.call(p, "droid 9; " + e[j] + ")", t), !this.get(D) && p.type && this.set(D, p.type), !this.get($) && p.vendor && this.set($, p.vendor);
        }
        if (e[_i]) {
          var v;
          if (typeof e[_i] != "string") for (var g = 0; !v && g < e[_i].length; ) v = ln(e[_i][g++], Oc);
          else v = ln(e[_i], Oc);
          this.set(D, v);
        }
        break;
      case Kt:
        var E = e[rr];
        if (E) {
          var P = e[Xa];
          E == wa && (P = parseInt(ba(P), 10) >= 13 ? "11" : "10"), this.set(W, E).set(z, P);
        }
        this.get(W) == wa && e[j] == "Xbox" && this.set(W, "Xbox").set(z, void 0);
        break;
      case ir:
        var M = this.data, C = function(k) {
          return M[k].getItem().setCH(e).parseCH().get();
        };
        this.set(Wt, C(Wt)).set(Wn, C(Wn)).set(_n, C(_n)).set(un, C(un)).set(Kt, C(Kt));
    }
    return this;
  };
  Vn = function(e, t, n) {
    if (typeof e === lt.OBJECT ? (Ho(e, true) ? (typeof t === lt.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === lt.STRING && !Ho(t, true) && (n = t, t = void 0), n) if (typeof n.append === lt.FUNCTION) {
      var i = {};
      n.forEach(function(g, E) {
        i[String(E).toLowerCase()] = g;
      }), n = i;
    } else {
      var l = {};
      for (var c in n) n.hasOwnProperty(c) && (l[String(c).toLowerCase()] = n[c]);
      n = l;
    }
    if (!(this instanceof Vn)) return new Vn(e, t, n).getResult();
    var f = typeof e === lt.STRING ? e : n && n[dc] ? n[dc] : jt && jt.userAgent ? jt.userAgent : nr, h = new Bf(n, true), p = t ? Ab(Ac, t) : Ac, v = function(g) {
      return g == ir ? function() {
        return new fi(g, f, p, h).set("ua", f).set(Wt, this.getBrowser()).set(Wn, this.getCPU()).set(_n, this.getDevice()).set(un, this.getEngine()).set(Kt, this.getOS()).get();
      } : function() {
        return new fi(g, f, p[g], h).parseUA().get();
      };
    };
    return Un.call(this, [
      [
        "getBrowser",
        v(Wt)
      ],
      [
        "getCPU",
        v(Wn)
      ],
      [
        "getDevice",
        v(_n)
      ],
      [
        "getEngine",
        v(un)
      ],
      [
        "getOS",
        v(Kt)
      ],
      [
        "getResult",
        v(ir)
      ],
      [
        "getUA",
        function() {
          return f;
        }
      ],
      [
        "setUA",
        function(g) {
          return Xr(g) && (f = Vo(g, yb)), this;
        }
      ]
    ]).setUA(f), this;
  };
  Vn.VERSION = wb;
  Vn.BROWSER = ws([
    W,
    z,
    Hr,
    D
  ]);
  Vn.CPU = ws([
    Ft
  ]);
  Vn.DEVICE = ws([
    j,
    $,
    D,
    Io,
    Ae,
    ut,
    He,
    bn,
    Ir
  ]);
  Vn.ENGINE = Vn.OS = ws([
    W,
    z
  ]);
  var $e = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))($e || {});
  class Rb {
    constructor() {
      __publicField(this, "parser");
      const t = typeof navigator < "u" ? navigator.userAgent : "";
      this.parser = new Vn(t);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? $e.TAURI : this.parser.getDevice().type === "mobile" ? $e.MOBILE_WEB : $e.WEB;
    }
    isTauriEnvironment() {
      return false;
    }
    getPlatformContext() {
      const t = this.detectEnvironment(), n = this.parser.getDevice(), i = this.parser.getBrowser(), l = this.parser.getOS();
      return {
        environment: t,
        capabilities: this.getPlatformCapabilities(t),
        configuration: this.getDefaultConfiguration(t),
        userAgent: typeof navigator < "u" ? navigator.userAgent : "",
        isMobile: n.type === "mobile",
        isTablet: n.type === "tablet",
        browser: i.name || void 0,
        os: l.name || void 0
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
        case $e.TAURI:
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
              ...n.permissions,
              geolocation: true
            },
            sensors: {
              deviceOrientation: "DeviceOrientationEvent" in window,
              motion: "DeviceMotionEvent" in window,
              highAccuracy: false
            }
          };
        case $e.MOBILE_WEB:
          return {
            ...n,
            geolocation: {
              ...n.geolocation,
              highAccuracy: false,
              kalmanFilter: true
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
        case $e.WEB:
        case $e.UNKNOWN:
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
        case $e.TAURI:
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
        case $e.MOBILE_WEB:
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
        case $e.WEB:
        case $e.UNKNOWN:
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
        return !t.environment || !t.capabilities ? R(new mt("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), x(true));
      } catch (t) {
        return R(new mt("Platform detection failed", void 0, t));
      }
    }
  }
  const Za = new Rb();
  u0 = function() {
    return Za.getPlatformContext();
  };
  function Nb(e, t, n, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function kb(e, t, n, i, l) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var _o;
  function Lb(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function pt(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class Cb {
    get rid() {
      return Nb(this, _o, "f");
    }
    constructor(t) {
      _o.set(this, void 0), kb(this, _o, t);
    }
    async close() {
      return pt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  _o = /* @__PURE__ */ new WeakMap();
  var Pc;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Pc || (Pc = {}));
  async function Fb(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await pt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Mc(e, t, n) {
    var i;
    const l = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return pt("plugin:event|listen", {
      event: e,
      target: l,
      handler: Lb(t)
    }).then((c) => async () => Fb(e, c));
  }
  async function xb(e, t) {
    return await qo.load(e, t);
  }
  class qo extends Cb {
    constructor(t) {
      super(t);
    }
    static async load(t, n) {
      const i = await pt("plugin:store|load", {
        path: t,
        options: n
      });
      return new qo(i);
    }
    static async get(t) {
      return await pt("plugin:store|get_store", {
        path: t
      }).then((n) => n ? new qo(n) : null);
    }
    async set(t, n) {
      await pt("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: n
      });
    }
    async get(t) {
      const [n, i] = await pt("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return i ? n : void 0;
    }
    async has(t) {
      return await pt("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await pt("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await pt("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await pt("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await pt("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await pt("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await pt("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await pt("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await pt("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await pt("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, n) {
      return await Mc("store://change", (i) => {
        i.payload.resourceId === this.rid && i.payload.key === t && n(i.payload.exists ? i.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Mc("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class rt extends xi {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", sr.STORAGE);
      this.code = n;
    }
  }
  var et = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(et || {});
  class Vt extends xi {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", sr.GEOLOCATION);
      this.code = n;
    }
  }
  var bt = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(bt || {});
  class $i extends xi {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", sr.GENERIC);
      this.code = n;
    }
  }
  var Ii = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e))(Ii || {});
  class Db {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return x(void 0);
      try {
        return this.store = await xb(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, x(void 0);
      } catch (t) {
        return R(new rt("Failed to initialize Tauri storage", et.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, n) {
      if (!this.store) return R(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.set(t, n), x(void 0);
      } catch (i) {
        return R(new rt(`Failed to set value for key: ${t}`, et.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.store) return R(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const n = await this.store.get(t);
        return x(n ?? null);
      } catch (n) {
        return R(new rt(`Failed to get value for key: ${t}`, et.GET_FAILED, n));
      }
    }
    async save() {
      if (!this.store) return R(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.save(), x(void 0);
      } catch (t) {
        return R(new rt("Failed to save store", et.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return R(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), n = {};
        for (const i of t) {
          const l = await this.store.get(i);
          n[i] = l;
        }
        return x(JSON.stringify(n, null, 2));
      } catch (t) {
        return R(new rt("Failed to export data to JSON", et.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return R(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const n of t) await this.store.delete(n);
        return x(void 0);
      } catch (t) {
        return R(new rt("Failed to clear store", et.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return R(new rt("Tauri store not initialized", et.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), x(void 0);
      } catch (n) {
        return R(new rt(`Failed to remove key: ${t}`, et.REMOVE_FAILED, n));
      }
    }
  }
  let Ub, jb;
  Hs = {
    theme: "system",
    interfaceLanguage: "en",
    mapLanguage: "interface",
    watchCompatibilityMode: true,
    geolocationCorrection: false,
    debugMode: false,
    maxCacheSize: 100,
    gpsUpdateInterval: 1e3,
    mapTileServer: "maptiler",
    customMapTileUrl: "",
    mapTilerApiKey: "",
    autoRecenterTimeout: 6e4,
    showCompass: true,
    keepScreenOn: true,
    enableKalmanFilter: true,
    mapZoomLevel: 15
  };
  f0 = [
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
    }
  ];
  Ub = "trackmaker_settings";
  jb = typeof window < "u" && window.__TAURI_INTERNALS__ !== void 0;
  function on(e) {
    try {
      if (typeof localStorage > "u") return Hs[e];
      const t = localStorage.getItem(Ub);
      if (t !== null) return JSON.parse(t)[e] ?? Hs[e];
    } catch {
    }
    return Hs[e];
  }
  function Rc() {
    return on("debugMode");
  }
  function Qa() {
    return on("gpsUpdateInterval");
  }
  function Gb() {
    return on("enableKalmanFilter");
  }
  h0 = function() {
    return on("mapZoomLevel");
  };
  d0 = function() {
    return on("keepScreenOn");
  };
  p0 = function() {
    return on("mapTileServer");
  };
  g0 = function() {
    return on("showCompass");
  };
  m0 = function() {
    return on("autoRecenterTimeout");
  };
  w0 = function() {
    return on("customMapTileUrl");
  };
  y0 = function() {
    return on("mapTilerApiKey");
  };
  class Wb {
    constructor(t = "trackmaker-db", n = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = n;
    }
    getMaxCacheSize() {
      try {
        return on("maxCacheSize") || 100;
      } catch {
        return 100;
      }
    }
    async shouldPruneCache() {
      return this.db ? new Promise((t) => {
        const l = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).count();
        l.onsuccess = () => {
          const c = this.getMaxCacheSize() * 10;
          t(l.result > c);
        }, l.onerror = () => t(false);
      }) : false;
    }
    async pruneCache() {
      if (this.db) return new Promise((t, n) => {
        const i = this.db.transaction(this.storeName, "readwrite"), c = i.objectStore(this.storeName).index("timestamp").openCursor(null, "prev"), f = 100;
        let h = 0;
        c.onsuccess = (p) => {
          const v = p.target.result;
          v && h < f && (v.delete(), h++, v.continue());
        }, i.oncomplete = () => t(), i.onerror = () => n(new Error("Failed to prune cache"));
      });
    }
    async init() {
      if (this.initialized) return x(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, x(void 0);
      } catch (t) {
        return R(new rt("Failed to initialize Web storage", et.INITIALIZATION_FAILED, t));
      }
    }
    openDatabase() {
      return new Promise((t, n) => {
        const i = indexedDB.open(this.dbName, 1);
        i.onupgradeneeded = (l) => {
          const c = l.target.result;
          c.objectStoreNames.contains(this.storeName) || c.createObjectStore(this.storeName);
        }, i.onsuccess = (l) => {
          t(l.target.result);
        }, i.onerror = (l) => {
          n(l.target.error ?? Error("Failed to open database"));
        };
      });
    }
    async set(t, n) {
      if (!this.db) return R(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.shouldPruneCache() && await this.pruneCache(), await this.executeTransaction("readwrite", (i) => new Promise((l, c) => {
          const f = i.put(Ct(n), t);
          f.onsuccess = () => l(), f.onerror = () => c(new Error("Failed to set value"));
        })), x(void 0);
      } catch (i) {
        return R(new rt(`Failed to set value for key: ${t}`, et.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.db) return R(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (i) => new Promise((l, c) => {
          const f = i.get(t);
          f.onsuccess = () => l(f.result), f.onerror = () => c(new Error("Failed to get value"));
        }));
        return x(n);
      } catch (n) {
        return R(new rt(`Failed to get value for key: ${t}`, et.GET_FAILED, n));
      }
    }
    async save() {
      return x(void 0);
    }
    async exportToJson() {
      if (!this.db) return R(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (n) => new Promise((i, l) => {
          const c = n.getAll();
          c.onsuccess = () => {
            const h = c.result.reduce((p, v, g) => (p[g] = v, p), {});
            i(h);
          }, c.onerror = () => l(new Error("Failed to export data"));
        }));
        return x(JSON.stringify(t, null, 2));
      } catch (t) {
        return R(new rt("Failed to export data to JSON", et.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return R(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((n, i) => {
          const l = t.clear();
          l.onsuccess = () => n(), l.onerror = () => i(new Error("Failed to clear store"));
        })), x(void 0);
      } catch (t) {
        return R(new rt("Failed to clear store", et.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return R(new rt("Database not initialized", et.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((i, l) => {
          const c = n.delete(t);
          c.onsuccess = () => i(), c.onerror = () => l(new Error("Failed to remove key"));
        })), x(void 0);
      } catch (n) {
        return R(new rt(`Failed to remove key: ${t}`, et.REMOVE_FAILED, n));
      }
    }
    executeTransaction(t, n) {
      return new Promise((i, l) => {
        if (!this.db) {
          l(new Error("Database not initialized"));
          return;
        }
        const c = this.db.transaction(this.storeName, t), f = c.objectStore(this.storeName);
        n(f).then(i).catch(l), c.onerror = () => {
          l(new Error("Transaction failed"));
        };
      });
    }
  }
  class Bb {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "permissionCallback");
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init(t) {
      if (this.permissionCallback = t, this.initialized) return x(void 0);
      try {
        return await this.injectTauriProvider(), this.initialized = true, x(void 0);
      } catch (n) {
        return R(new Vt("Failed to initialize Tauri geolocation provider", bt.INITIALIZATION_FAILED, n));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new $b(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return await this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return x(t.state);
      } catch (t) {
        return R(new Vt("Failed to get permission status", bt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(x("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(x("denied")) : t(x("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), x("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? x("denied") : R(new Vt("Failed to request permission", bt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return x(this.convertToGeolocationPosition(t));
      } catch (t) {
        return R(new Vt("Failed to get current position", bt.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await pt(this.tauriHandlerName);
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
        timestamp: performance.now()
      };
      return {
        ...i,
        toJSON: () => JSON.stringify(i)
      };
    }
    async watchPosition(t) {
      try {
        const n = Qa(), i = window.setInterval(async () => {
          try {
            const l = await this.getCurrentPosition();
            l.isOk() && t(l.value);
          } catch (l) {
            console.error("Error in watch position:", l);
          }
        }, n);
        return this.watchCallbacks.set(i, i), x(i);
      } catch (n) {
        return R(new Vt("Failed to start watching position", bt.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), x(void 0);
      } catch (n) {
        return R(new Vt("Failed to clear watch", bt.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class $b {
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
      const l = Qa();
      return window.setInterval(() => {
        this.getTauriPosition().then(t).catch((f) => {
          n == null ? void 0 : n(this.createPositionError(f));
        });
      }, l);
    }
    clearWatch(t) {
      clearInterval(t);
    }
    async getTauriPosition() {
      const t = await pt(this.tauriHandlerName), n = {
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
  class zb {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "permissionCallback");
      __publicField(this, "compatibilityModeWatches", /* @__PURE__ */ new Map());
      __publicField(this, "lastCompatibilityPosition", null);
    }
    async init(t) {
      return this.permissionCallback = t, this.initialized ? x(void 0) : this.isSupported() ? (this.initialized = true, x(void 0)) : R(new Vt("Geolocation is not supported by this browser", bt.UNSUPPORTED));
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return x(t.state);
      } catch (t) {
        return R(new Vt("Failed to get permission status", bt.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(x("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(x("denied")) : t(x("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), x("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? x("denied") : R(new Vt("Failed to request permission", bt.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return R(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((n) => {
          t(x(n));
        }, (n) => {
          let i;
          const l = n.message;
          switch (n.code) {
            case n.PERMISSION_DENIED:
              i = bt.PERMISSION_DENIED;
              break;
            case n.POSITION_UNAVAILABLE:
              i = bt.POSITION_UNAVAILABLE;
              break;
            case n.TIMEOUT:
              i = bt.TIMEOUT;
              break;
            default:
              i = bt.POSITION_UNAVAILABLE;
          }
          t(R(new Vt(l, i, new Error(n.message))));
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 1e4
        });
      });
    }
    async watchPosition(t) {
      if (!this.initialized) {
        const l = await this.init();
        if (l.isErr()) return R(l.error);
      }
      const n = Qa();
      if (on("watchCompatibilityMode")) {
        console.info("[Geolocation] Using compatibility mode for position watch");
        try {
          const l = Date.now(), c = window.setInterval(async () => {
            const f = await this.getCurrentPosition();
            if (f.isOk()) {
              const h = f.value, p = {
                lat: h.coords.latitude,
                lng: h.coords.longitude
              };
              if (this.lastCompatibilityPosition && this.lastCompatibilityPosition.lat === p.lat && this.lastCompatibilityPosition.lng === p.lng) return;
              this.lastCompatibilityPosition = p, t(h);
            }
          }, n);
          return this.compatibilityModeWatches.set(l, c), x(l);
        } catch (l) {
          return R(new Vt("Failed to start watching position (compatibility mode)", bt.WATCH_FAILED, l));
        }
      }
      try {
        const l = navigator.geolocation.watchPosition(t, (c) => {
          console.error("Geolocation watch error:", c);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: n
        });
        return x(l);
      } catch (l) {
        return R(new Vt("Failed to start watching position", bt.WATCH_FAILED, l));
      }
    }
    clearWatch(t) {
      try {
        if (this.compatibilityModeWatches.has(t)) {
          const n = this.compatibilityModeWatches.get(t);
          window.clearInterval(n), this.compatibilityModeWatches.delete(t), this.lastCompatibilityPosition = null;
        } else navigator.geolocation.clearWatch(t);
        return x(void 0);
      } catch (n) {
        return R(new Vt("Failed to clear watch", bt.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class Nc {
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
      return this.initialized ? x(void 0) : this.isSupported() ? (this.initialized = true, x(void 0)) : R(new mt("Device orientation is not supported by this browser"));
    }
    async start() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return R(t.error);
      }
      if (this.isWatching) return x(void 0);
      try {
        return window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = true, x(void 0);
      } catch (t) {
        return R(new mt("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return x(void 0);
      try {
        return window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = false, this.lastReading = null, x(void 0);
      } catch (t) {
        return R(new mt("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return R(t.error);
      }
      return x(this.lastReading);
    }
    onOrientationChange(t) {
      const n = this.nextListenerId++;
      return this.listeners.set(n, t), !this.isWatching && this.listeners.size === 1 && this.start().catch(console.error), this.lastReading && t(this.lastReading), n;
    }
    removeEventListener(t) {
      return this.listeners.delete(t) && this.listeners.size === 0 && this.stop(), x(void 0);
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
        timestamp: performance.now()
      };
      this.lastReading = n;
      for (const i of this.listeners.values()) try {
        i(n);
      } catch (l) {
        console.error("Error in device orientation callback:", l);
      }
    }
  }
  class kc {
    constructor() {
      __publicField(this, "initialized", false);
      __publicField(this, "permissionCallback");
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
      __publicField(this, "boundHandleMotionEvent");
      __publicField(this, "boundHandleOrientationEvent");
      this.boundHandleMotionEvent = this.handleMotionEvent.bind(this), this.boundHandleOrientationEvent = this.handleOrientationEvent.bind(this);
    }
    async init(t) {
      return this.permissionCallback = t, this.initialized ? x(void 0) : this.isSupported() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.boundHandleOrientationEvent), this.initialized = true, x(void 0)) : R(new mt("Device motion is not supported by this browser"));
    }
    async startAcceleration(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return R(n.error);
      }
      if (this.isAccelerationActive) return x(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isAccelerationActive = true, x(void 0);
      } catch (n) {
        return R(new mt("Failed to start acceleration monitoring", void 0, n));
      }
    }
    async startGyroscope(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return R(n.error);
      }
      if (this.isGyroscopeActive) return x(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isGyroscopeActive = true, x(void 0);
      } catch (n) {
        return R(new mt("Failed to start gyroscope monitoring", void 0, n));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return x(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), x(void 0);
      } catch (t) {
        return R(new mt("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return x(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.boundHandleMotionEvent, true), x(void 0);
      } catch (t) {
        return R(new mt("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return R(t.error);
      }
      return x(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return R(t.error);
      }
      return x(this.lastGyroscopeReading);
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
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), x(void 0);
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
          let l = {
            x: n.x,
            y: n.y,
            z: n.z,
            timestamp: performance.now()
          };
          if (i === "including_gravity" && this.deviceOrientation) {
            const c = this.estimateGravityVector(this.deviceOrientation);
            l.x -= c.x, l.y -= c.y, l.z -= c.z;
          }
          this.normalizeAccelerationToENU && this.deviceOrientation && (l = this.normalizeToENU(l, this.deviceOrientation)), this.lastAccelerationReading = l;
          for (const c of this.accelerationListeners.values()) try {
            c(l);
          } catch (f) {
            console.error("Error in acceleration callback:", f);
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
            timestamp: performance.now()
          };
          this.normalizeGyroscopeToENU && this.deviceOrientation && (i = this.normalizeToENU(i, this.deviceOrientation)), this.lastGyroscopeReading = i;
          for (const l of this.gyroscopeListeners.values()) try {
            l(i);
          } catch (c) {
            console.error("Error in gyroscope callback:", c);
          }
        }
      }
    }
    normalizeToENU(t, n) {
      const i = n.alpha * Math.PI / 180, l = n.beta * Math.PI / 180, c = n.gamma * Math.PI / 180, f = Math.cos(i), h = Math.sin(i), p = Math.cos(l), v = Math.sin(l), g = Math.cos(c), E = Math.sin(c), P = t.x * f - t.y * h, M = t.x * h + t.y * f, C = t.z, k = P * p + C * v, se = M, te = -P * v + C * p, H = k, ie = se * g - te * E, G = se * E + te * g;
      return {
        x: H,
        y: ie,
        z: G,
        timestamp: t.timestamp
      };
    }
    estimateGravityVector(t) {
      const i = t.alpha * Math.PI / 180, l = t.beta * Math.PI / 180, c = t.gamma * Math.PI / 180, f = Math.cos(i), h = Math.sin(i), p = Math.sin(l), v = Math.cos(c), g = Math.sin(c), E = 9.81 * (p * v), P = 9.81 * (h * p * g + f * v), M = 9.81 * (f * p * g - h * v);
      return {
        x: E,
        y: P,
        z: M,
        timestamp: performance.now()
      };
    }
  }
  const _Oi = class _Oi {
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
      if (!_Oi.instance) {
        const n = Za.getPlatformContext(), i = new _Oi(n), l = i.initializeProviders(t);
        if (l.isErr()) return R(l.error);
        _Oi.instance = i;
      }
      return x(_Oi.instance);
    }
    initializeProviders(t) {
      try {
        return this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage), this.imuProvider = this.createIMUProvider(), this.deviceOrientationProvider = this.createDeviceOrientationProvider(), this.geolocationProvider = this.createGeolocationProvider(t == null ? void 0 : t.geolocation), this.fileProvider = this.createFileProvider(), this.initialized = true, x(void 0);
      } catch (n) {
        return R(new $i("Failed to initialize platform providers", Ii.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case $e.TAURI:
          return new Db((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case $e.WEB:
        case $e.MOBILE_WEB:
        case $e.UNKNOWN:
        default:
          return new Wb((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    createGeolocationProvider(t) {
      let n;
      switch (this.context.environment) {
        case $e.TAURI:
          n = new Bb((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case $e.WEB:
        case $e.MOBILE_WEB:
        case $e.UNKNOWN:
        default:
          n = new zb();
          break;
      }
      return n;
    }
    setupIMUFusion() {
    }
    createFileProvider() {
      return {
        init: async () => R(new mt("File provider not implemented")),
        readFile: async () => R(new mt("File provider not implemented")),
        writeFile: async () => R(new mt("File provider not implemented")),
        deleteFile: async () => R(new mt("File provider not implemented")),
        listFiles: async () => R(new mt("File provider not implemented")),
        exists: async () => R(new mt("File provider not implemented")),
        isSupported: () => false
      };
    }
    createIMUProvider() {
      switch (this.context.environment) {
        case $e.TAURI:
          return new kc();
        case $e.WEB:
        case $e.MOBILE_WEB:
        case $e.UNKNOWN:
        default:
          return new kc();
      }
    }
    createDeviceOrientationProvider() {
      switch (this.context.environment) {
        case $e.TAURI:
          return new Nc();
        case $e.WEB:
        case $e.MOBILE_WEB:
        case $e.UNKNOWN:
        default:
          return new Nc();
      }
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? x(this.storageProvider) : R(new $i("Storage provider not initialized", Ii.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? x(this.geolocationProvider) : R(new $i("Geolocation provider not initialized", Ii.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? x(this.fileProvider) : R(new $i("File provider not initialized", Ii.DETECTION_FAILED));
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
      _Oi.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? x(this.imuProvider) : R(new $i("IMU provider not initialized", Ii.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? x(this.deviceOrientationProvider) : R(new $i("Device orientation provider not initialized", Ii.DETECTION_FAILED));
    }
  };
  __publicField(_Oi, "instance", null);
  let Oi = _Oi;
  Ni = function(e) {
    return Oi.getInstance(e);
  };
  Hb = function() {
    return typeof navigator > "u" ? false : Za.detectEnvironment() === $e.TAURI;
  };
  class Vb {
    constructor() {
      __publicField(this, "permissionChangeListeners", /* @__PURE__ */ new Set());
      __publicField(this, "currentPermissionState", null);
      __publicField(this, "platformGeolocationProvider", null);
    }
    async getPermissionStatus() {
      if (this.platformGeolocationProvider) try {
        const t = await this.platformGeolocationProvider.getPermissionStatus();
        return t.isOk() ? (this.currentPermissionState = t.value, x(t.value)) : R(new ji("Failed to get permission status from platform provider", t.error));
      } catch (t) {
        return R(new ji("Platform provider permission check error", t));
      }
      if (!navigator.geolocation) return R(new mb("Geolocation is not supported by this browser"));
      try {
        if (!navigator.permissions) return await this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return this.currentPermissionState = t.state, x(t.state);
      } catch (t) {
        return R(new ji("Failed to get permission status", t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(x("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(x("denied")) : t(x("prompt"));
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
        return n.isOk() ? (this.currentPermissionState = n.value, x(n.value)) : R(new ji("Failed to request permission from platform provider", n.error));
      } catch (n) {
        return R(new ji("Platform provider permission request error", n));
      }
      if (!navigator.permissions) return this.getPermissionStatus();
      try {
        const n = await navigator.permissions.query({
          name: "geolocation"
        });
        if (n.state === "prompt" && t && await t(n.state)) {
          const l = await this.fallbackPermissionCheck();
          if (l.isOk()) return this.currentPermissionState = l.value, x(l.value);
        }
        return this.currentPermissionState = n.state, x(n.state);
      } catch (n) {
        return R(new ji("Failed to request permission", n));
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
  qb = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function $f(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function i() {
        var l = false;
        try {
          l = this instanceof i;
        } catch {
        }
        return l ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(i) {
      var l = Object.getOwnPropertyDescriptor(e, i);
      Object.defineProperty(n, i, l.get ? l : {
        enumerable: true,
        get: function() {
          return e[i];
        }
      });
    }), n;
  }
  var Me = {};
  const Kb = Object.prototype.toString;
  function Vr(e) {
    const t = Kb.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const Yb = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: Vr
  }, Symbol.toStringTag, {
    value: "Module"
  })), Jb = $f(Yb);
  function Xb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Vr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] > f && (f = e[h]);
    return f;
  }
  function Zb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Vr(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] < f && (f = e[h]);
    return f;
  }
  function Qb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Vr(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var n;
    if (t.output !== void 0) {
      if (!Vr(t.output)) throw new TypeError("output option must be an array if specified");
      n = t.output;
    } else n = new Array(e.length);
    var i = Zb(e), l = Xb(e);
    if (i === l) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var c = t.min, f = c === void 0 ? t.autoMinMax ? i : 0 : c, h = t.max, p = h === void 0 ? t.autoMinMax ? l : 1 : h;
    if (f >= p) throw new RangeError("min option must be smaller than max option");
    for (var v = (p - f) / (l - i), g = 0; g < e.length; g++) n[g] = (e[g] - i) * v + f;
    return n;
  }
  const ev = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Qb
  }, Symbol.toStringTag, {
    value: "Module"
  })), tv = $f(ev);
  var Lc;
  function nv() {
    var _oe_instances, e_fn, _e;
    if (Lc) return Me;
    Lc = 1, Object.defineProperty(Me, "__esModule", {
      value: true
    });
    var e = Jb, t = tv;
    const n = " ".repeat(2), i = " ".repeat(4);
    function l() {
      return c(this);
    }
    function c(d, o = {}) {
      const { maxRows: s = 15, maxColumns: r = 10, maxNumSize: a = 8, padMinus: u = "auto" } = o;
      return `${d.constructor.name} {
${n}[
${i}${f(d, s, r, a, u)}
${n}]
${n}rows: ${d.rows}
${n}columns: ${d.columns}
}`;
    }
    function f(d, o, s, r, a) {
      const { rows: u, columns: m } = d, w = Math.min(u, o), y = Math.min(m, s), b = [];
      if (a === "auto") {
        a = false;
        e: for (let A = 0; A < w; A++) for (let I = 0; I < y; I++) if (d.get(A, I) < 0) {
          a = true;
          break e;
        }
      }
      for (let A = 0; A < w; A++) {
        let I = [];
        for (let L = 0; L < y; L++) I.push(h(d.get(A, L), r, a));
        b.push(`${I.join(" ")}`);
      }
      return y !== m && (b[b.length - 1] += ` ... ${m - s} more columns`), w !== u && b.push(`... ${u - o} more rows`), b.join(`
${i}`);
    }
    function h(d, o, s) {
      return (d >= 0 && s ? ` ${p(d, o - 1)}` : p(d, o)).padEnd(o);
    }
    function p(d, o) {
      let s = d.toString();
      if (s.length <= o) return s;
      let r = d.toFixed(o);
      if (r.length > o && (r = d.toFixed(Math.max(0, o - (r.length - o)))), r.length <= o && !r.startsWith("0.000") && !r.startsWith("-0.000")) return r;
      let a = d.toExponential(o);
      return a.length > o && (a = d.toExponential(Math.max(0, o - (a.length - o)))), a.slice(0);
    }
    function v(d, o) {
      d.prototype.add = function(r) {
        return typeof r == "number" ? this.addS(r) : this.addM(r);
      }, d.prototype.addS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) + r);
        return this;
      }, d.prototype.addM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) + r.get(a, u));
        return this;
      }, d.add = function(r, a) {
        return new o(r).add(a);
      }, d.prototype.sub = function(r) {
        return typeof r == "number" ? this.subS(r) : this.subM(r);
      }, d.prototype.subS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) - r);
        return this;
      }, d.prototype.subM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) - r.get(a, u));
        return this;
      }, d.sub = function(r, a) {
        return new o(r).sub(a);
      }, d.prototype.subtract = d.prototype.sub, d.prototype.subtractS = d.prototype.subS, d.prototype.subtractM = d.prototype.subM, d.subtract = d.sub, d.prototype.mul = function(r) {
        return typeof r == "number" ? this.mulS(r) : this.mulM(r);
      }, d.prototype.mulS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) * r);
        return this;
      }, d.prototype.mulM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) * r.get(a, u));
        return this;
      }, d.mul = function(r, a) {
        return new o(r).mul(a);
      }, d.prototype.multiply = d.prototype.mul, d.prototype.multiplyS = d.prototype.mulS, d.prototype.multiplyM = d.prototype.mulM, d.multiply = d.mul, d.prototype.div = function(r) {
        return typeof r == "number" ? this.divS(r) : this.divM(r);
      }, d.prototype.divS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) / r);
        return this;
      }, d.prototype.divM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) / r.get(a, u));
        return this;
      }, d.div = function(r, a) {
        return new o(r).div(a);
      }, d.prototype.divide = d.prototype.div, d.prototype.divideS = d.prototype.divS, d.prototype.divideM = d.prototype.divM, d.divide = d.div, d.prototype.mod = function(r) {
        return typeof r == "number" ? this.modS(r) : this.modM(r);
      }, d.prototype.modS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) % r);
        return this;
      }, d.prototype.modM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) % r.get(a, u));
        return this;
      }, d.mod = function(r, a) {
        return new o(r).mod(a);
      }, d.prototype.modulus = d.prototype.mod, d.prototype.modulusS = d.prototype.modS, d.prototype.modulusM = d.prototype.modM, d.modulus = d.mod, d.prototype.and = function(r) {
        return typeof r == "number" ? this.andS(r) : this.andM(r);
      }, d.prototype.andS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) & r);
        return this;
      }, d.prototype.andM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) & r.get(a, u));
        return this;
      }, d.and = function(r, a) {
        return new o(r).and(a);
      }, d.prototype.or = function(r) {
        return typeof r == "number" ? this.orS(r) : this.orM(r);
      }, d.prototype.orS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) | r);
        return this;
      }, d.prototype.orM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) | r.get(a, u));
        return this;
      }, d.or = function(r, a) {
        return new o(r).or(a);
      }, d.prototype.xor = function(r) {
        return typeof r == "number" ? this.xorS(r) : this.xorM(r);
      }, d.prototype.xorS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ^ r);
        return this;
      }, d.prototype.xorM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ^ r.get(a, u));
        return this;
      }, d.xor = function(r, a) {
        return new o(r).xor(a);
      }, d.prototype.leftShift = function(r) {
        return typeof r == "number" ? this.leftShiftS(r) : this.leftShiftM(r);
      }, d.prototype.leftShiftS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) << r);
        return this;
      }, d.prototype.leftShiftM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) << r.get(a, u));
        return this;
      }, d.leftShift = function(r, a) {
        return new o(r).leftShift(a);
      }, d.prototype.signPropagatingRightShift = function(r) {
        return typeof r == "number" ? this.signPropagatingRightShiftS(r) : this.signPropagatingRightShiftM(r);
      }, d.prototype.signPropagatingRightShiftS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >> r);
        return this;
      }, d.prototype.signPropagatingRightShiftM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >> r.get(a, u));
        return this;
      }, d.signPropagatingRightShift = function(r, a) {
        return new o(r).signPropagatingRightShift(a);
      }, d.prototype.rightShift = function(r) {
        return typeof r == "number" ? this.rightShiftS(r) : this.rightShiftM(r);
      }, d.prototype.rightShiftS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >>> r);
        return this;
      }, d.prototype.rightShiftM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) >>> r.get(a, u));
        return this;
      }, d.rightShift = function(r, a) {
        return new o(r).rightShift(a);
      }, d.prototype.zeroFillRightShift = d.prototype.rightShift, d.prototype.zeroFillRightShiftS = d.prototype.rightShiftS, d.prototype.zeroFillRightShiftM = d.prototype.rightShiftM, d.zeroFillRightShift = d.rightShift, d.prototype.not = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, ~this.get(r, a));
        return this;
      }, d.not = function(r) {
        return new o(r).not();
      }, d.prototype.abs = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.abs(this.get(r, a)));
        return this;
      }, d.abs = function(r) {
        return new o(r).abs();
      }, d.prototype.acos = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.acos(this.get(r, a)));
        return this;
      }, d.acos = function(r) {
        return new o(r).acos();
      }, d.prototype.acosh = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.acosh(this.get(r, a)));
        return this;
      }, d.acosh = function(r) {
        return new o(r).acosh();
      }, d.prototype.asin = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.asin(this.get(r, a)));
        return this;
      }, d.asin = function(r) {
        return new o(r).asin();
      }, d.prototype.asinh = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.asinh(this.get(r, a)));
        return this;
      }, d.asinh = function(r) {
        return new o(r).asinh();
      }, d.prototype.atan = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.atan(this.get(r, a)));
        return this;
      }, d.atan = function(r) {
        return new o(r).atan();
      }, d.prototype.atanh = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.atanh(this.get(r, a)));
        return this;
      }, d.atanh = function(r) {
        return new o(r).atanh();
      }, d.prototype.cbrt = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.cbrt(this.get(r, a)));
        return this;
      }, d.cbrt = function(r) {
        return new o(r).cbrt();
      }, d.prototype.ceil = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.ceil(this.get(r, a)));
        return this;
      }, d.ceil = function(r) {
        return new o(r).ceil();
      }, d.prototype.clz32 = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.clz32(this.get(r, a)));
        return this;
      }, d.clz32 = function(r) {
        return new o(r).clz32();
      }, d.prototype.cos = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.cos(this.get(r, a)));
        return this;
      }, d.cos = function(r) {
        return new o(r).cos();
      }, d.prototype.cosh = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.cosh(this.get(r, a)));
        return this;
      }, d.cosh = function(r) {
        return new o(r).cosh();
      }, d.prototype.exp = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.exp(this.get(r, a)));
        return this;
      }, d.exp = function(r) {
        return new o(r).exp();
      }, d.prototype.expm1 = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.expm1(this.get(r, a)));
        return this;
      }, d.expm1 = function(r) {
        return new o(r).expm1();
      }, d.prototype.floor = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.floor(this.get(r, a)));
        return this;
      }, d.floor = function(r) {
        return new o(r).floor();
      }, d.prototype.fround = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.fround(this.get(r, a)));
        return this;
      }, d.fround = function(r) {
        return new o(r).fround();
      }, d.prototype.log = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.log(this.get(r, a)));
        return this;
      }, d.log = function(r) {
        return new o(r).log();
      }, d.prototype.log1p = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.log1p(this.get(r, a)));
        return this;
      }, d.log1p = function(r) {
        return new o(r).log1p();
      }, d.prototype.log10 = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.log10(this.get(r, a)));
        return this;
      }, d.log10 = function(r) {
        return new o(r).log10();
      }, d.prototype.log2 = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.log2(this.get(r, a)));
        return this;
      }, d.log2 = function(r) {
        return new o(r).log2();
      }, d.prototype.round = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.round(this.get(r, a)));
        return this;
      }, d.round = function(r) {
        return new o(r).round();
      }, d.prototype.sign = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.sign(this.get(r, a)));
        return this;
      }, d.sign = function(r) {
        return new o(r).sign();
      }, d.prototype.sin = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.sin(this.get(r, a)));
        return this;
      }, d.sin = function(r) {
        return new o(r).sin();
      }, d.prototype.sinh = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.sinh(this.get(r, a)));
        return this;
      }, d.sinh = function(r) {
        return new o(r).sinh();
      }, d.prototype.sqrt = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.sqrt(this.get(r, a)));
        return this;
      }, d.sqrt = function(r) {
        return new o(r).sqrt();
      }, d.prototype.tan = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.tan(this.get(r, a)));
        return this;
      }, d.tan = function(r) {
        return new o(r).tan();
      }, d.prototype.tanh = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.tanh(this.get(r, a)));
        return this;
      }, d.tanh = function(r) {
        return new o(r).tanh();
      }, d.prototype.trunc = function() {
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.set(r, a, Math.trunc(this.get(r, a)));
        return this;
      }, d.trunc = function(r) {
        return new o(r).trunc();
      }, d.pow = function(r, a) {
        return new o(r).pow(a);
      }, d.prototype.pow = function(r) {
        return typeof r == "number" ? this.powS(r) : this.powM(r);
      }, d.prototype.powS = function(r) {
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ** r);
        return this;
      }, d.prototype.powM = function(r) {
        if (r = o.checkMatrix(r), this.rows !== r.rows || this.columns !== r.columns) throw new RangeError("Matrices dimensions must be equal");
        for (let a = 0; a < this.rows; a++) for (let u = 0; u < this.columns; u++) this.set(a, u, this.get(a, u) ** r.get(a, u));
        return this;
      };
    }
    function g(d, o, s) {
      let r = s ? d.rows : d.rows - 1;
      if (o < 0 || o > r) throw new RangeError("Row index out of range");
    }
    function E(d, o, s) {
      let r = s ? d.columns : d.columns - 1;
      if (o < 0 || o > r) throw new RangeError("Column index out of range");
    }
    function P(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.columns) throw new RangeError("vector size must be the same as the number of columns");
      return o;
    }
    function M(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.rows) throw new RangeError("vector size must be the same as the number of rows");
      return o;
    }
    function C(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("row indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.rows) throw new RangeError("row indices are out of range");
    }
    function k(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("column indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.columns) throw new RangeError("column indices are out of range");
    }
    function se(d, o, s, r, a) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (H("startRow", o), H("endRow", s), H("startColumn", r), H("endColumn", a), o > s || r > a || o < 0 || o >= d.rows || s < 0 || s >= d.rows || r < 0 || r >= d.columns || a < 0 || a >= d.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function te(d, o = 0) {
      let s = [];
      for (let r = 0; r < d; r++) s.push(o);
      return s;
    }
    function H(d, o) {
      if (typeof o != "number") throw new TypeError(`${d} must be a number`);
    }
    function ie(d) {
      if (d.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function G(d) {
      let o = te(d.rows);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[s] += d.get(s, r);
      return o;
    }
    function pe(d) {
      let o = te(d.columns);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[r] += d.get(s, r);
      return o;
    }
    function ge(d) {
      let o = 0;
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) o += d.get(s, r);
      return o;
    }
    function re(d) {
      let o = te(d.rows, 1);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[s] *= d.get(s, r);
      return o;
    }
    function fe(d) {
      let o = te(d.columns, 1);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[r] *= d.get(s, r);
      return o;
    }
    function ee(d) {
      let o = 1;
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) o *= d.get(s, r);
      return o;
    }
    function me(d, o, s) {
      const r = d.rows, a = d.columns, u = [];
      for (let m = 0; m < r; m++) {
        let w = 0, y = 0, b = 0;
        for (let A = 0; A < a; A++) b = d.get(m, A) - s[m], w += b, y += b * b;
        o ? u.push((y - w * w / a) / (a - 1)) : u.push((y - w * w / a) / a);
      }
      return u;
    }
    function Pe(d, o, s) {
      const r = d.rows, a = d.columns, u = [];
      for (let m = 0; m < a; m++) {
        let w = 0, y = 0, b = 0;
        for (let A = 0; A < r; A++) b = d.get(A, m) - s[m], w += b, y += b * b;
        o ? u.push((y - w * w / r) / (r - 1)) : u.push((y - w * w / r) / r);
      }
      return u;
    }
    function he(d, o, s) {
      const r = d.rows, a = d.columns, u = r * a;
      let m = 0, w = 0, y = 0;
      for (let b = 0; b < r; b++) for (let A = 0; A < a; A++) y = d.get(b, A) - s, m += y, w += y * y;
      return o ? (w - m * m / u) / (u - 1) : (w - m * m / u) / u;
    }
    function Ue(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[s]);
    }
    function ct(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[r]);
    }
    function Bt(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o);
    }
    function Ke(d) {
      const o = [];
      for (let s = 0; s < d.rows; s++) {
        let r = 0;
        for (let a = 0; a < d.columns; a++) r += d.get(s, a) ** 2 / (d.columns - 1);
        o.push(Math.sqrt(r));
      }
      return o;
    }
    function Re(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) / o[s]);
    }
    function ze(d) {
      const o = [];
      for (let s = 0; s < d.columns; s++) {
        let r = 0;
        for (let a = 0; a < d.rows; a++) r += d.get(a, s) ** 2 / (d.rows - 1);
        o.push(Math.sqrt(r));
      }
      return o;
    }
    function An(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) / o[r]);
    }
    function Di(d) {
      const o = d.size - 1;
      let s = 0;
      for (let r = 0; r < d.columns; r++) for (let a = 0; a < d.rows; a++) s += d.get(a, r) ** 2 / o;
      return Math.sqrt(s);
    }
    function Pn(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) / o);
    }
    class ve {
      static from1DArray(o, s, r) {
        if (o * s !== r.length) throw new RangeError("data length does not match given dimensions");
        let u = new oe(o, s);
        for (let m = 0; m < o; m++) for (let w = 0; w < s; w++) u.set(m, w, r[m * s + w]);
        return u;
      }
      static rowVector(o) {
        let s = new oe(1, o.length);
        for (let r = 0; r < o.length; r++) s.set(0, r, o[r]);
        return s;
      }
      static columnVector(o) {
        let s = new oe(o.length, 1);
        for (let r = 0; r < o.length; r++) s.set(r, 0, o[r]);
        return s;
      }
      static zeros(o, s) {
        return new oe(o, s);
      }
      static ones(o, s) {
        return new oe(o, s).fill(1);
      }
      static rand(o, s, r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { random: a = Math.random } = r;
        let u = new oe(o, s);
        for (let m = 0; m < o; m++) for (let w = 0; w < s; w++) u.set(m, w, a());
        return u;
      }
      static randInt(o, s, r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { min: a = 0, max: u = 1e3, random: m = Math.random } = r;
        if (!Number.isInteger(a)) throw new TypeError("min must be an integer");
        if (!Number.isInteger(u)) throw new TypeError("max must be an integer");
        if (a >= u) throw new RangeError("min must be smaller than max");
        let w = u - a, y = new oe(o, s);
        for (let b = 0; b < o; b++) for (let A = 0; A < s; A++) {
          let I = a + Math.round(m() * w);
          y.set(b, A, I);
        }
        return y;
      }
      static eye(o, s, r) {
        s === void 0 && (s = o), r === void 0 && (r = 1);
        let a = Math.min(o, s), u = this.zeros(o, s);
        for (let m = 0; m < a; m++) u.set(m, m, r);
        return u;
      }
      static diag(o, s, r) {
        let a = o.length;
        s === void 0 && (s = a), r === void 0 && (r = s);
        let u = Math.min(a, s, r), m = this.zeros(s, r);
        for (let w = 0; w < u; w++) m.set(w, w, o[w]);
        return m;
      }
      static min(o, s) {
        o = this.checkMatrix(o), s = this.checkMatrix(s);
        let r = o.rows, a = o.columns, u = new oe(r, a);
        for (let m = 0; m < r; m++) for (let w = 0; w < a; w++) u.set(m, w, Math.min(o.get(m, w), s.get(m, w)));
        return u;
      }
      static max(o, s) {
        o = this.checkMatrix(o), s = this.checkMatrix(s);
        let r = o.rows, a = o.columns, u = new this(r, a);
        for (let m = 0; m < r; m++) for (let w = 0; w < a; w++) u.set(m, w, Math.max(o.get(m, w), s.get(m, w)));
        return u;
      }
      static checkMatrix(o) {
        return ve.isMatrix(o) ? o : new oe(o);
      }
      static isMatrix(o) {
        return o != null && o.klass === "Matrix";
      }
      get size() {
        return this.rows * this.columns;
      }
      apply(o) {
        if (typeof o != "function") throw new TypeError("callback must be a function");
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) o.call(this, s, r);
        return this;
      }
      to1DArray() {
        let o = [];
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) o.push(this.get(s, r));
        return o;
      }
      to2DArray() {
        let o = [];
        for (let s = 0; s < this.rows; s++) {
          o.push([]);
          for (let r = 0; r < this.columns; r++) o[s].push(this.get(s, r));
        }
        return o;
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
          for (let o = 0; o < this.rows; o++) for (let s = 0; s <= o; s++) if (this.get(o, s) !== this.get(s, o)) return false;
          return true;
        }
        return false;
      }
      isDistance() {
        if (!this.isSymmetric()) return false;
        for (let o = 0; o < this.rows; o++) if (this.get(o, o) !== 0) return false;
        return true;
      }
      isEchelonForm() {
        let o = 0, s = 0, r = -1, a = true, u = false;
        for (; o < this.rows && a; ) {
          for (s = 0, u = false; s < this.columns && u === false; ) this.get(o, s) === 0 ? s++ : this.get(o, s) === 1 && s > r ? (u = true, r = s) : (a = false, u = true);
          o++;
        }
        return a;
      }
      isReducedEchelonForm() {
        let o = 0, s = 0, r = -1, a = true, u = false;
        for (; o < this.rows && a; ) {
          for (s = 0, u = false; s < this.columns && u === false; ) this.get(o, s) === 0 ? s++ : this.get(o, s) === 1 && s > r ? (u = true, r = s) : (a = false, u = true);
          for (let m = s + 1; m < this.rows; m++) this.get(o, m) !== 0 && (a = false);
          o++;
        }
        return a;
      }
      echelonForm() {
        let o = this.clone(), s = 0, r = 0;
        for (; s < o.rows && r < o.columns; ) {
          let a = s;
          for (let u = s; u < o.rows; u++) o.get(u, r) > o.get(a, r) && (a = u);
          if (o.get(a, r) === 0) r++;
          else {
            o.swapRows(s, a);
            let u = o.get(s, r);
            for (let m = r; m < o.columns; m++) o.set(s, m, o.get(s, m) / u);
            for (let m = s + 1; m < o.rows; m++) {
              let w = o.get(m, r) / o.get(s, r);
              o.set(m, r, 0);
              for (let y = r + 1; y < o.columns; y++) o.set(m, y, o.get(m, y) - o.get(s, y) * w);
            }
            s++, r++;
          }
        }
        return o;
      }
      reducedEchelonForm() {
        let o = this.echelonForm(), s = o.columns, r = o.rows, a = r - 1;
        for (; a >= 0; ) if (o.maxRow(a) === 0) a--;
        else {
          let u = 0, m = false;
          for (; u < r && m === false; ) o.get(a, u) === 1 ? m = true : u++;
          for (let w = 0; w < a; w++) {
            let y = o.get(w, u);
            for (let b = u; b < s; b++) {
              let A = o.get(w, b) - y * o.get(a, b);
              o.set(w, b, A);
            }
          }
          a--;
        }
        return o;
      }
      set() {
        throw new Error("set method is unimplemented");
      }
      get() {
        throw new Error("get method is unimplemented");
      }
      repeat(o = {}) {
        if (typeof o != "object") throw new TypeError("options must be an object");
        const { rows: s = 1, columns: r = 1 } = o;
        if (!Number.isInteger(s) || s <= 0) throw new TypeError("rows must be a positive integer");
        if (!Number.isInteger(r) || r <= 0) throw new TypeError("columns must be a positive integer");
        let a = new oe(this.rows * s, this.columns * r);
        for (let u = 0; u < s; u++) for (let m = 0; m < r; m++) a.setSubMatrix(this, this.rows * u, this.columns * m);
        return a;
      }
      fill(o) {
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, o);
        return this;
      }
      neg() {
        return this.mulS(-1);
      }
      getRow(o) {
        g(this, o);
        let s = [];
        for (let r = 0; r < this.columns; r++) s.push(this.get(o, r));
        return s;
      }
      getRowVector(o) {
        return oe.rowVector(this.getRow(o));
      }
      setRow(o, s) {
        g(this, o), s = P(this, s);
        for (let r = 0; r < this.columns; r++) this.set(o, r, s[r]);
        return this;
      }
      swapRows(o, s) {
        g(this, o), g(this, s);
        for (let r = 0; r < this.columns; r++) {
          let a = this.get(o, r);
          this.set(o, r, this.get(s, r)), this.set(s, r, a);
        }
        return this;
      }
      getColumn(o) {
        E(this, o);
        let s = [];
        for (let r = 0; r < this.rows; r++) s.push(this.get(r, o));
        return s;
      }
      getColumnVector(o) {
        return oe.columnVector(this.getColumn(o));
      }
      setColumn(o, s) {
        E(this, o), s = M(this, s);
        for (let r = 0; r < this.rows; r++) this.set(r, o, s[r]);
        return this;
      }
      swapColumns(o, s) {
        E(this, o), E(this, s);
        for (let r = 0; r < this.rows; r++) {
          let a = this.get(r, o);
          this.set(r, o, this.get(r, s)), this.set(r, s, a);
        }
        return this;
      }
      addRowVector(o) {
        o = P(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) + o[r]);
        return this;
      }
      subRowVector(o) {
        o = P(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) - o[r]);
        return this;
      }
      mulRowVector(o) {
        o = P(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) * o[r]);
        return this;
      }
      divRowVector(o) {
        o = P(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) / o[r]);
        return this;
      }
      addColumnVector(o) {
        o = M(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) + o[s]);
        return this;
      }
      subColumnVector(o) {
        o = M(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) - o[s]);
        return this;
      }
      mulColumnVector(o) {
        o = M(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) * o[s]);
        return this;
      }
      divColumnVector(o) {
        o = M(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) / o[s]);
        return this;
      }
      mulRow(o, s) {
        g(this, o);
        for (let r = 0; r < this.columns; r++) this.set(o, r, this.get(o, r) * s);
        return this;
      }
      mulColumn(o, s) {
        E(this, o);
        for (let r = 0; r < this.rows; r++) this.set(r, o, this.get(r, o) * s);
        return this;
      }
      max(o) {
        if (this.isEmpty()) return NaN;
        switch (o) {
          case "row": {
            const s = new Array(this.rows).fill(Number.NEGATIVE_INFINITY);
            for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) > s[r] && (s[r] = this.get(r, a));
            return s;
          }
          case "column": {
            const s = new Array(this.columns).fill(Number.NEGATIVE_INFINITY);
            for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) > s[a] && (s[a] = this.get(r, a));
            return s;
          }
          case void 0: {
            let s = this.get(0, 0);
            for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) > s && (s = this.get(r, a));
            return s;
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      maxIndex() {
        ie(this);
        let o = this.get(0, 0), s = [
          0,
          0
        ];
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) > o && (o = this.get(r, a), s[0] = r, s[1] = a);
        return s;
      }
      min(o) {
        if (this.isEmpty()) return NaN;
        switch (o) {
          case "row": {
            const s = new Array(this.rows).fill(Number.POSITIVE_INFINITY);
            for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) < s[r] && (s[r] = this.get(r, a));
            return s;
          }
          case "column": {
            const s = new Array(this.columns).fill(Number.POSITIVE_INFINITY);
            for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) < s[a] && (s[a] = this.get(r, a));
            return s;
          }
          case void 0: {
            let s = this.get(0, 0);
            for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) < s && (s = this.get(r, a));
            return s;
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      minIndex() {
        ie(this);
        let o = this.get(0, 0), s = [
          0,
          0
        ];
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) < o && (o = this.get(r, a), s[0] = r, s[1] = a);
        return s;
      }
      maxRow(o) {
        if (g(this, o), this.isEmpty()) return NaN;
        let s = this.get(o, 0);
        for (let r = 1; r < this.columns; r++) this.get(o, r) > s && (s = this.get(o, r));
        return s;
      }
      maxRowIndex(o) {
        g(this, o), ie(this);
        let s = this.get(o, 0), r = [
          o,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(o, a) > s && (s = this.get(o, a), r[1] = a);
        return r;
      }
      minRow(o) {
        if (g(this, o), this.isEmpty()) return NaN;
        let s = this.get(o, 0);
        for (let r = 1; r < this.columns; r++) this.get(o, r) < s && (s = this.get(o, r));
        return s;
      }
      minRowIndex(o) {
        g(this, o), ie(this);
        let s = this.get(o, 0), r = [
          o,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(o, a) < s && (s = this.get(o, a), r[1] = a);
        return r;
      }
      maxColumn(o) {
        if (E(this, o), this.isEmpty()) return NaN;
        let s = this.get(0, o);
        for (let r = 1; r < this.rows; r++) this.get(r, o) > s && (s = this.get(r, o));
        return s;
      }
      maxColumnIndex(o) {
        E(this, o), ie(this);
        let s = this.get(0, o), r = [
          0,
          o
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, o) > s && (s = this.get(a, o), r[0] = a);
        return r;
      }
      minColumn(o) {
        if (E(this, o), this.isEmpty()) return NaN;
        let s = this.get(0, o);
        for (let r = 1; r < this.rows; r++) this.get(r, o) < s && (s = this.get(r, o));
        return s;
      }
      minColumnIndex(o) {
        E(this, o), ie(this);
        let s = this.get(0, o), r = [
          0,
          o
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, o) < s && (s = this.get(a, o), r[0] = a);
        return r;
      }
      diag() {
        let o = Math.min(this.rows, this.columns), s = [];
        for (let r = 0; r < o; r++) s.push(this.get(r, r));
        return s;
      }
      norm(o = "frobenius") {
        switch (o) {
          case "max":
            return this.max();
          case "frobenius":
            return Math.sqrt(this.dot(this));
          default:
            throw new RangeError(`unknown norm type: ${o}`);
        }
      }
      cumulativeSum() {
        let o = 0;
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) o += this.get(s, r), this.set(s, r, o);
        return this;
      }
      dot(o) {
        ve.isMatrix(o) && (o = o.to1DArray());
        let s = this.to1DArray();
        if (s.length !== o.length) throw new RangeError("vectors do not have the same size");
        let r = 0;
        for (let a = 0; a < s.length; a++) r += s[a] * o[a];
        return r;
      }
      mmul(o) {
        o = oe.checkMatrix(o);
        let s = this.rows, r = this.columns, a = o.columns, u = new oe(s, a), m = new Float64Array(r);
        for (let w = 0; w < a; w++) {
          for (let y = 0; y < r; y++) m[y] = o.get(y, w);
          for (let y = 0; y < s; y++) {
            let b = 0;
            for (let A = 0; A < r; A++) b += this.get(y, A) * m[A];
            u.set(y, w, b);
          }
        }
        return u;
      }
      mpow(o) {
        if (!this.isSquare()) throw new RangeError("Matrix must be square");
        if (!Number.isInteger(o) || o < 0) throw new RangeError("Exponent must be a non-negative integer");
        let s = oe.eye(this.rows), r = this;
        for (let a = o; a >= 1; a /= 2) (a & 1) !== 0 && (s = s.mmul(r)), r = r.mmul(r);
        return s;
      }
      strassen2x2(o) {
        o = oe.checkMatrix(o);
        let s = new oe(2, 2);
        const r = this.get(0, 0), a = o.get(0, 0), u = this.get(0, 1), m = o.get(0, 1), w = this.get(1, 0), y = o.get(1, 0), b = this.get(1, 1), A = o.get(1, 1), I = (r + b) * (a + A), L = (w + b) * a, Q = r * (m - A), N = b * (y - a), U = (r + u) * A, ce = (w - r) * (a + m), _ = (u - b) * (y + A), Z = I + N - U + _, de = Q + U, _e2 = L + N, Oe = I - L + Q + ce;
        return s.set(0, 0, Z), s.set(0, 1, de), s.set(1, 0, _e2), s.set(1, 1, Oe), s;
      }
      strassen3x3(o) {
        o = oe.checkMatrix(o);
        let s = new oe(3, 3);
        const r = this.get(0, 0), a = this.get(0, 1), u = this.get(0, 2), m = this.get(1, 0), w = this.get(1, 1), y = this.get(1, 2), b = this.get(2, 0), A = this.get(2, 1), I = this.get(2, 2), L = o.get(0, 0), Q = o.get(0, 1), N = o.get(0, 2), U = o.get(1, 0), ce = o.get(1, 1), _ = o.get(1, 2), Z = o.get(2, 0), de = o.get(2, 1), _e2 = o.get(2, 2), Oe = (r + a + u - m - w - A - I) * ce, tt = (r - m) * (-Q + ce), be = w * (-L + Q + U - ce - _ - Z + _e2), Ee = (-r + m + w) * (L - Q + ce), Ve = (m + w) * (-L + Q), S = r * L, B = (-r + b + A) * (L - N + _), ue = (-r + b) * (N - _), J = (b + A) * (-L + N), nt = (r + a + u - w - y - b - A) * _, Be = A * (-L + N + U - ce - _ - Z + de), Ze = (-u + A + I) * (ce + Z - de), it = (u - I) * (ce - de), wt = u * Z, sn = (A + I) * (-Z + de), ht = (-u + w + y) * (_ + Z - _e2), gn = (u - y) * (_ - _e2), Rn = (w + y) * (-Z + _e2), Le = a * U, yt = y * de, zt = m * N, Ht = b * Q, dt = I * _e2, nh = S + wt + Le, ih = Oe + Ee + Ve + S + Ze + wt + sn, rh = S + B + J + nt + wt + ht + Rn, oh = tt + be + Ee + S + wt + ht + gn, sh = tt + Ee + Ve + S + yt, ah = wt + ht + gn + Rn + zt, lh = S + B + ue + Be + Ze + it + wt, ch = Ze + it + wt + sn + Ht, uh = S + B + ue + J + dt;
        return s.set(0, 0, nh), s.set(0, 1, ih), s.set(0, 2, rh), s.set(1, 0, oh), s.set(1, 1, sh), s.set(1, 2, ah), s.set(2, 0, lh), s.set(2, 1, ch), s.set(2, 2, uh), s;
      }
      mmulStrassen(o) {
        o = oe.checkMatrix(o);
        let s = this.clone(), r = s.rows, a = s.columns, u = o.rows, m = o.columns;
        a !== u && console.warn(`Multiplying ${r} x ${a} and ${u} x ${m} matrix: dimensions do not match.`);
        function w(I, L, Q) {
          let N = I.rows, U = I.columns;
          if (N === L && U === Q) return I;
          {
            let ce = ve.zeros(L, Q);
            return ce = ce.setSubMatrix(I, 0, 0), ce;
          }
        }
        let y = Math.max(r, u), b = Math.max(a, m);
        s = w(s, y, b), o = w(o, y, b);
        function A(I, L, Q, N) {
          if (Q <= 512 || N <= 512) return I.mmul(L);
          Q % 2 === 1 && N % 2 === 1 ? (I = w(I, Q + 1, N + 1), L = w(L, Q + 1, N + 1)) : Q % 2 === 1 ? (I = w(I, Q + 1, N), L = w(L, Q + 1, N)) : N % 2 === 1 && (I = w(I, Q, N + 1), L = w(L, Q, N + 1));
          let U = parseInt(I.rows / 2, 10), ce = parseInt(I.columns / 2, 10), _ = I.subMatrix(0, U - 1, 0, ce - 1), Z = L.subMatrix(0, U - 1, 0, ce - 1), de = I.subMatrix(0, U - 1, ce, I.columns - 1), _e2 = L.subMatrix(0, U - 1, ce, L.columns - 1), Oe = I.subMatrix(U, I.rows - 1, 0, ce - 1), tt = L.subMatrix(U, L.rows - 1, 0, ce - 1), be = I.subMatrix(U, I.rows - 1, ce, I.columns - 1), Ee = L.subMatrix(U, L.rows - 1, ce, L.columns - 1), Ve = A(ve.add(_, be), ve.add(Z, Ee), U, ce), S = A(ve.add(Oe, be), Z, U, ce), B = A(_, ve.sub(_e2, Ee), U, ce), ue = A(be, ve.sub(tt, Z), U, ce), J = A(ve.add(_, de), Ee, U, ce), nt = A(ve.sub(Oe, _), ve.add(Z, _e2), U, ce), Be = A(ve.sub(de, be), ve.add(tt, Ee), U, ce), Ze = ve.add(Ve, ue);
          Ze.sub(J), Ze.add(Be);
          let it = ve.add(B, J), wt = ve.add(S, ue), sn = ve.sub(Ve, S);
          sn.add(B), sn.add(nt);
          let ht = ve.zeros(2 * Ze.rows, 2 * Ze.columns);
          return ht = ht.setSubMatrix(Ze, 0, 0), ht = ht.setSubMatrix(it, Ze.rows, 0), ht = ht.setSubMatrix(wt, 0, Ze.columns), ht = ht.setSubMatrix(sn, Ze.rows, Ze.columns), ht.subMatrix(0, Q - 1, 0, N - 1);
        }
        return A(s, o, y, b);
      }
      scaleRows(o = {}) {
        if (typeof o != "object") throw new TypeError("options must be an object");
        const { min: s = 0, max: r = 1 } = o;
        if (!Number.isFinite(s)) throw new TypeError("min must be a number");
        if (!Number.isFinite(r)) throw new TypeError("max must be a number");
        if (s >= r) throw new RangeError("min must be smaller than max");
        let a = new oe(this.rows, this.columns);
        for (let u = 0; u < this.rows; u++) {
          const m = this.getRow(u);
          m.length > 0 && t(m, {
            min: s,
            max: r,
            output: m
          }), a.setRow(u, m);
        }
        return a;
      }
      scaleColumns(o = {}) {
        if (typeof o != "object") throw new TypeError("options must be an object");
        const { min: s = 0, max: r = 1 } = o;
        if (!Number.isFinite(s)) throw new TypeError("min must be a number");
        if (!Number.isFinite(r)) throw new TypeError("max must be a number");
        if (s >= r) throw new RangeError("min must be smaller than max");
        let a = new oe(this.rows, this.columns);
        for (let u = 0; u < this.columns; u++) {
          const m = this.getColumn(u);
          m.length && t(m, {
            min: s,
            max: r,
            output: m
          }), a.setColumn(u, m);
        }
        return a;
      }
      flipRows() {
        const o = Math.ceil(this.columns / 2);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < o; r++) {
          let a = this.get(s, r), u = this.get(s, this.columns - 1 - r);
          this.set(s, r, u), this.set(s, this.columns - 1 - r, a);
        }
        return this;
      }
      flipColumns() {
        const o = Math.ceil(this.rows / 2);
        for (let s = 0; s < this.columns; s++) for (let r = 0; r < o; r++) {
          let a = this.get(r, s), u = this.get(this.rows - 1 - r, s);
          this.set(r, s, u), this.set(this.rows - 1 - r, s, a);
        }
        return this;
      }
      kroneckerProduct(o) {
        o = oe.checkMatrix(o);
        let s = this.rows, r = this.columns, a = o.rows, u = o.columns, m = new oe(s * a, r * u);
        for (let w = 0; w < s; w++) for (let y = 0; y < r; y++) for (let b = 0; b < a; b++) for (let A = 0; A < u; A++) m.set(a * w + b, u * y + A, this.get(w, y) * o.get(b, A));
        return m;
      }
      kroneckerSum(o) {
        if (o = oe.checkMatrix(o), !this.isSquare() || !o.isSquare()) throw new Error("Kronecker Sum needs two Square Matrices");
        let s = this.rows, r = o.rows, a = this.kroneckerProduct(oe.eye(r, r)), u = oe.eye(s, s).kroneckerProduct(o);
        return a.add(u);
      }
      transpose() {
        let o = new oe(this.columns, this.rows);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) o.set(r, s, this.get(s, r));
        return o;
      }
      sortRows(o = ar) {
        for (let s = 0; s < this.rows; s++) this.setRow(s, this.getRow(s).sort(o));
        return this;
      }
      sortColumns(o = ar) {
        for (let s = 0; s < this.columns; s++) this.setColumn(s, this.getColumn(s).sort(o));
        return this;
      }
      subMatrix(o, s, r, a) {
        se(this, o, s, r, a);
        let u = new oe(s - o + 1, a - r + 1);
        for (let m = o; m <= s; m++) for (let w = r; w <= a; w++) u.set(m - o, w - r, this.get(m, w));
        return u;
      }
      subMatrixRow(o, s, r) {
        if (s === void 0 && (s = 0), r === void 0 && (r = this.columns - 1), s > r || s < 0 || s >= this.columns || r < 0 || r >= this.columns) throw new RangeError("Argument out of range");
        let a = new oe(o.length, r - s + 1);
        for (let u = 0; u < o.length; u++) for (let m = s; m <= r; m++) {
          if (o[u] < 0 || o[u] >= this.rows) throw new RangeError(`Row index out of range: ${o[u]}`);
          a.set(u, m - s, this.get(o[u], m));
        }
        return a;
      }
      subMatrixColumn(o, s, r) {
        if (s === void 0 && (s = 0), r === void 0 && (r = this.rows - 1), s > r || s < 0 || s >= this.rows || r < 0 || r >= this.rows) throw new RangeError("Argument out of range");
        let a = new oe(r - s + 1, o.length);
        for (let u = 0; u < o.length; u++) for (let m = s; m <= r; m++) {
          if (o[u] < 0 || o[u] >= this.columns) throw new RangeError(`Column index out of range: ${o[u]}`);
          a.set(m - s, u, this.get(m, o[u]));
        }
        return a;
      }
      setSubMatrix(o, s, r) {
        if (o = oe.checkMatrix(o), o.isEmpty()) return this;
        let a = s + o.rows - 1, u = r + o.columns - 1;
        se(this, s, a, r, u);
        for (let m = 0; m < o.rows; m++) for (let w = 0; w < o.columns; w++) this.set(s + m, r + w, o.get(m, w));
        return this;
      }
      selection(o, s) {
        C(this, o), k(this, s);
        let r = new oe(o.length, s.length);
        for (let a = 0; a < o.length; a++) {
          let u = o[a];
          for (let m = 0; m < s.length; m++) {
            let w = s[m];
            r.set(a, m, this.get(u, w));
          }
        }
        return r;
      }
      trace() {
        let o = Math.min(this.rows, this.columns), s = 0;
        for (let r = 0; r < o; r++) s += this.get(r, r);
        return s;
      }
      clone() {
        return this.constructor.copy(this, new oe(this.rows, this.columns));
      }
      static copy(o, s) {
        for (const [r, a, u] of o.entries()) s.set(r, a, u);
        return s;
      }
      sum(o) {
        switch (o) {
          case "row":
            return G(this);
          case "column":
            return pe(this);
          case void 0:
            return ge(this);
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      product(o) {
        switch (o) {
          case "row":
            return re(this);
          case "column":
            return fe(this);
          case void 0:
            return ee(this);
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      mean(o) {
        const s = this.sum(o);
        switch (o) {
          case "row": {
            for (let r = 0; r < this.rows; r++) s[r] /= this.columns;
            return s;
          }
          case "column": {
            for (let r = 0; r < this.columns; r++) s[r] /= this.rows;
            return s;
          }
          case void 0:
            return s / this.size;
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      variance(o, s = {}) {
        if (typeof o == "object" && (s = o, o = void 0), typeof s != "object") throw new TypeError("options must be an object");
        const { unbiased: r = true, mean: a = this.mean(o) } = s;
        if (typeof r != "boolean") throw new TypeError("unbiased must be a boolean");
        switch (o) {
          case "row": {
            if (!e.isAnyArray(a)) throw new TypeError("mean must be an array");
            return me(this, r, a);
          }
          case "column": {
            if (!e.isAnyArray(a)) throw new TypeError("mean must be an array");
            return Pe(this, r, a);
          }
          case void 0: {
            if (typeof a != "number") throw new TypeError("mean must be a number");
            return he(this, r, a);
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      standardDeviation(o, s) {
        typeof o == "object" && (s = o, o = void 0);
        const r = this.variance(o, s);
        if (o === void 0) return Math.sqrt(r);
        for (let a = 0; a < r.length; a++) r[a] = Math.sqrt(r[a]);
        return r;
      }
      center(o, s = {}) {
        if (typeof o == "object" && (s = o, o = void 0), typeof s != "object") throw new TypeError("options must be an object");
        const { center: r = this.mean(o) } = s;
        switch (o) {
          case "row": {
            if (!e.isAnyArray(r)) throw new TypeError("center must be an array");
            return Ue(this, r), this;
          }
          case "column": {
            if (!e.isAnyArray(r)) throw new TypeError("center must be an array");
            return ct(this, r), this;
          }
          case void 0: {
            if (typeof r != "number") throw new TypeError("center must be a number");
            return Bt(this, r), this;
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      scale(o, s = {}) {
        if (typeof o == "object" && (s = o, o = void 0), typeof s != "object") throw new TypeError("options must be an object");
        let r = s.scale;
        switch (o) {
          case "row": {
            if (r === void 0) r = Ke(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Re(this, r), this;
          }
          case "column": {
            if (r === void 0) r = ze(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return An(this, r), this;
          }
          case void 0: {
            if (r === void 0) r = Di(this);
            else if (typeof r != "number") throw new TypeError("scale must be a number");
            return Pn(this, r), this;
          }
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      toString(o) {
        return c(this, o);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      *entries() {
        for (let o = 0; o < this.rows; o++) for (let s = 0; s < this.columns; s++) yield [
          o,
          s,
          this.get(o, s)
        ];
      }
      *values() {
        for (let o = 0; o < this.rows; o++) for (let s = 0; s < this.columns; s++) yield this.get(o, s);
      }
    }
    ve.prototype.klass = "Matrix", typeof Symbol < "u" && (ve.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = l);
    function ar(d, o) {
      return d - o;
    }
    function vs(d) {
      return d.every((o) => typeof o == "number");
    }
    ve.random = ve.rand, ve.randomInt = ve.randInt, ve.diagonal = ve.diag, ve.prototype.diagonal = ve.prototype.diag, ve.identity = ve.eye, ve.prototype.negate = ve.prototype.neg, ve.prototype.tensorProduct = ve.prototype.kroneckerProduct;
    const _oe = class _oe extends ve {
      constructor(o, s) {
        super();
        __privateAdd(this, _oe_instances);
        __publicField(this, "data");
        if (_oe.isMatrix(o)) __privateMethod(this, _oe_instances, e_fn).call(this, o.rows, o.columns), _oe.copy(o, this);
        else if (Number.isInteger(o) && o >= 0) __privateMethod(this, _oe_instances, e_fn).call(this, o, s);
        else if (e.isAnyArray(o)) {
          const r = o;
          if (o = r.length, s = o ? r[0].length : 0, typeof s != "number") throw new TypeError("Data must be a 2D array with at least one element");
          this.data = [];
          for (let a = 0; a < o; a++) {
            if (r[a].length !== s) throw new RangeError("Inconsistent array dimensions");
            if (!vs(r[a])) throw new TypeError("Input data contains non-numeric values");
            this.data.push(Float64Array.from(r[a]));
          }
          this.rows = o, this.columns = s;
        } else throw new TypeError("First argument must be a positive number or an array");
      }
      set(o, s, r) {
        return this.data[o][s] = r, this;
      }
      get(o, s) {
        return this.data[o][s];
      }
      removeRow(o) {
        return g(this, o), this.data.splice(o, 1), this.rows -= 1, this;
      }
      addRow(o, s) {
        return s === void 0 && (s = o, o = this.rows), g(this, o, true), s = Float64Array.from(P(this, s)), this.data.splice(o, 0, s), this.rows += 1, this;
      }
      removeColumn(o) {
        E(this, o);
        for (let s = 0; s < this.rows; s++) {
          const r = new Float64Array(this.columns - 1);
          for (let a = 0; a < o; a++) r[a] = this.data[s][a];
          for (let a = o + 1; a < this.columns; a++) r[a - 1] = this.data[s][a];
          this.data[s] = r;
        }
        return this.columns -= 1, this;
      }
      addColumn(o, s) {
        typeof s > "u" && (s = o, o = this.columns), E(this, o, true), s = M(this, s);
        for (let r = 0; r < this.rows; r++) {
          const a = new Float64Array(this.columns + 1);
          let u = 0;
          for (; u < o; u++) a[u] = this.data[r][u];
          for (a[u++] = s[r]; u < this.columns + 1; u++) a[u] = this.data[r][u - 1];
          this.data[r] = a;
        }
        return this.columns += 1, this;
      }
    };
    _oe_instances = new WeakSet();
    e_fn = function(o, s) {
      if (this.data = [], Number.isInteger(s) && s >= 0) for (let r = 0; r < o; r++) this.data.push(new Float64Array(s));
      else throw new TypeError("nColumns must be a positive integer");
      this.rows = o, this.columns = s;
    };
    let oe = _oe;
    v(ve, oe);
    const _Dt = class _Dt extends ve {
      constructor(o) {
        super();
        __privateAdd(this, _e);
        if (oe.isMatrix(o)) {
          if (!o.isSymmetric()) throw new TypeError("not symmetric data");
          __privateSet(this, _e, oe.copy(o, new oe(o.rows, o.rows)));
        } else if (Number.isInteger(o) && o >= 0) __privateSet(this, _e, new oe(o, o));
        else if (__privateSet(this, _e, new oe(o)), !this.isSymmetric()) throw new TypeError("not symmetric data");
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
      static isSymmetricMatrix(o) {
        return oe.isMatrix(o) && o.klassType === "SymmetricMatrix";
      }
      static zeros(o) {
        return new this(o);
      }
      static ones(o) {
        return new this(o).fill(1);
      }
      clone() {
        const o = new _Dt(this.diagonalSize);
        for (const [s, r, a] of this.upperRightEntries()) o.set(s, r, a);
        return o;
      }
      toMatrix() {
        return new oe(this);
      }
      get(o, s) {
        return __privateGet(this, _e).get(o, s);
      }
      set(o, s, r) {
        return __privateGet(this, _e).set(o, s, r), __privateGet(this, _e).set(s, o, r), this;
      }
      removeCross(o) {
        return __privateGet(this, _e).removeRow(o), __privateGet(this, _e).removeColumn(o), this;
      }
      addCross(o, s) {
        s === void 0 && (s = o, o = this.diagonalSize);
        const r = s.slice();
        return r.splice(o, 1), __privateGet(this, _e).addRow(o, r), __privateGet(this, _e).addColumn(o, s), this;
      }
      applyMask(o) {
        if (o.length !== this.diagonalSize) throw new RangeError("Mask size do not match with matrix size");
        const s = [];
        for (const [r, a] of o.entries()) a || s.push(r);
        s.reverse();
        for (const r of s) this.removeCross(r);
        return this;
      }
      toCompact() {
        const { diagonalSize: o } = this, s = new Array(o * (o + 1) / 2);
        for (let r = 0, a = 0, u = 0; u < s.length; u++) s[u] = this.get(a, r), ++r >= o && (r = ++a);
        return s;
      }
      static fromCompact(o) {
        const s = o.length, r = (Math.sqrt(8 * s + 1) - 1) / 2;
        if (!Number.isInteger(r)) throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(o)}`);
        const a = new _Dt(r);
        for (let u = 0, m = 0, w = 0; w < s; w++) a.set(u, m, o[w]), ++u >= r && (u = ++m);
        return a;
      }
      *upperRightEntries() {
        for (let o = 0, s = 0; o < this.diagonalSize; void 0) {
          const r = this.get(o, s);
          yield [
            o,
            s,
            r
          ], ++s >= this.diagonalSize && (s = ++o);
        }
      }
      *upperRightValues() {
        for (let o = 0, s = 0; o < this.diagonalSize; void 0) yield this.get(o, s), ++s >= this.diagonalSize && (s = ++o);
      }
    };
    _e = new WeakMap();
    let Dt = _Dt;
    Dt.prototype.klassType = "SymmetricMatrix";
    class Mn extends Dt {
      static isDistanceMatrix(o) {
        return Dt.isSymmetricMatrix(o) && o.klassSubType === "DistanceMatrix";
      }
      constructor(o) {
        if (super(o), !this.isDistance()) throw new TypeError("Provided arguments do no produce a distance matrix");
      }
      set(o, s, r) {
        return o === s && (r = 0), super.set(o, s, r);
      }
      addCross(o, s) {
        return s === void 0 && (s = o, o = this.diagonalSize), s = s.slice(), s[o] = 0, super.addCross(o, s);
      }
      toSymmetricMatrix() {
        return new Dt(this);
      }
      clone() {
        const o = new Mn(this.diagonalSize);
        for (const [s, r, a] of this.upperRightEntries()) s !== r && o.set(s, r, a);
        return o;
      }
      toCompact() {
        const { diagonalSize: o } = this, s = (o - 1) * o / 2, r = new Array(s);
        for (let a = 1, u = 0, m = 0; m < r.length; m++) r[m] = this.get(u, a), ++a >= o && (a = ++u + 1);
        return r;
      }
      static fromCompact(o) {
        const s = o.length;
        if (s === 0) return new this(0);
        const r = (Math.sqrt(8 * s + 1) + 1) / 2;
        if (!Number.isInteger(r)) throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(o)}`);
        const a = new this(r);
        for (let u = 1, m = 0, w = 0; w < s; w++) a.set(u, m, o[w]), ++u >= r && (u = ++m + 1);
        return a;
      }
    }
    Mn.prototype.klassSubType = "DistanceMatrix";
    class $t extends ve {
      constructor(o, s, r) {
        super(), this.matrix = o, this.rows = s, this.columns = r;
      }
    }
    class Zr extends $t {
      constructor(o, s) {
        E(o, s), super(o, o.rows, 1), this.column = s;
      }
      set(o, s, r) {
        return this.matrix.set(o, this.column, r), this;
      }
      get(o) {
        return this.matrix.get(o, this.column);
      }
    }
    class pi extends $t {
      constructor(o, s) {
        k(o, s), super(o, o.rows, s.length), this.columnIndices = s;
      }
      set(o, s, r) {
        return this.matrix.set(o, this.columnIndices[s], r), this;
      }
      get(o, s) {
        return this.matrix.get(o, this.columnIndices[s]);
      }
    }
    class tl extends $t {
      constructor(o) {
        super(o, o.rows, o.columns);
      }
      set(o, s, r) {
        return this.matrix.set(o, this.columns - s - 1, r), this;
      }
      get(o, s) {
        return this.matrix.get(o, this.columns - s - 1);
      }
    }
    class T extends $t {
      constructor(o) {
        super(o, o.rows, o.columns);
      }
      set(o, s, r) {
        return this.matrix.set(this.rows - o - 1, s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.rows - o - 1, s);
      }
    }
    class O extends $t {
      constructor(o, s) {
        g(o, s), super(o, 1, o.columns), this.row = s;
      }
      set(o, s, r) {
        return this.matrix.set(this.row, s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.row, s);
      }
    }
    class F extends $t {
      constructor(o, s) {
        C(o, s), super(o, s.length, o.columns), this.rowIndices = s;
      }
      set(o, s, r) {
        return this.matrix.set(this.rowIndices[o], s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.rowIndices[o], s);
      }
    }
    class Y extends $t {
      constructor(o, s, r) {
        C(o, s), k(o, r), super(o, s.length, r.length), this.rowIndices = s, this.columnIndices = r;
      }
      set(o, s, r) {
        return this.matrix.set(this.rowIndices[o], this.columnIndices[s], r), this;
      }
      get(o, s) {
        return this.matrix.get(this.rowIndices[o], this.columnIndices[s]);
      }
    }
    class q extends $t {
      constructor(o, s, r, a, u) {
        se(o, s, r, a, u), super(o, r - s + 1, u - a + 1), this.startRow = s, this.startColumn = a;
      }
      set(o, s, r) {
        return this.matrix.set(this.startRow + o, this.startColumn + s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.startRow + o, this.startColumn + s);
      }
    }
    class K extends $t {
      constructor(o) {
        super(o, o.columns, o.rows);
      }
      set(o, s, r) {
        return this.matrix.set(s, o, r), this;
      }
      get(o, s) {
        return this.matrix.get(s, o);
      }
    }
    class ae extends ve {
      constructor(o, s = {}) {
        const { rows: r = 1 } = s;
        if (o.length % r !== 0) throw new Error("the data length is not divisible by the number of rows");
        super(), this.rows = r, this.columns = o.length / r, this.data = o;
      }
      set(o, s, r) {
        let a = this._calculateIndex(o, s);
        return this.data[a] = r, this;
      }
      get(o, s) {
        let r = this._calculateIndex(o, s);
        return this.data[r];
      }
      _calculateIndex(o, s) {
        return o * this.columns + s;
      }
    }
    class X extends ve {
      constructor(o) {
        super(), this.data = o, this.rows = o.length, this.columns = o[0].length;
      }
      set(o, s, r) {
        return this.data[o][s] = r, this;
      }
      get(o, s) {
        return this.data[o][s];
      }
    }
    function ne(d, o) {
      if (e.isAnyArray(d)) return d[0] && e.isAnyArray(d[0]) ? new X(d) : new ae(d, o);
      throw new Error("the argument is not an array");
    }
    class V {
      constructor(o) {
        o = X.checkMatrix(o);
        let s = o.clone(), r = s.rows, a = s.columns, u = new Float64Array(r), m = 1, w, y, b, A, I, L, Q, N, U;
        for (w = 0; w < r; w++) u[w] = w;
        for (N = new Float64Array(r), y = 0; y < a; y++) {
          for (w = 0; w < r; w++) N[w] = s.get(w, y);
          for (w = 0; w < r; w++) {
            for (U = Math.min(w, y), I = 0, b = 0; b < U; b++) I += s.get(w, b) * N[b];
            N[w] -= I, s.set(w, y, N[w]);
          }
          for (A = y, w = y + 1; w < r; w++) Math.abs(N[w]) > Math.abs(N[A]) && (A = w);
          if (A !== y) {
            for (b = 0; b < a; b++) L = s.get(A, b), s.set(A, b, s.get(y, b)), s.set(y, b, L);
            Q = u[A], u[A] = u[y], u[y] = Q, m = -m;
          }
          if (y < r && s.get(y, y) !== 0) for (w = y + 1; w < r; w++) s.set(w, y, s.get(w, y) / s.get(y, y));
        }
        this.LU = s, this.pivotVector = u, this.pivotSign = m;
      }
      isSingular() {
        let o = this.LU, s = o.columns;
        for (let r = 0; r < s; r++) if (o.get(r, r) === 0) return true;
        return false;
      }
      solve(o) {
        o = oe.checkMatrix(o);
        let s = this.LU;
        if (s.rows !== o.rows) throw new Error("Invalid matrix dimensions");
        if (this.isSingular()) throw new Error("LU matrix is singular");
        let a = o.columns, u = o.subMatrixRow(this.pivotVector, 0, a - 1), m = s.columns, w, y, b;
        for (b = 0; b < m; b++) for (w = b + 1; w < m; w++) for (y = 0; y < a; y++) u.set(w, y, u.get(w, y) - u.get(b, y) * s.get(w, b));
        for (b = m - 1; b >= 0; b--) {
          for (y = 0; y < a; y++) u.set(b, y, u.get(b, y) / s.get(b, b));
          for (w = 0; w < b; w++) for (y = 0; y < a; y++) u.set(w, y, u.get(w, y) - u.get(b, y) * s.get(w, b));
        }
        return u;
      }
      get determinant() {
        let o = this.LU;
        if (!o.isSquare()) throw new Error("Matrix must be square");
        let s = this.pivotSign, r = o.columns;
        for (let a = 0; a < r; a++) s *= o.get(a, a);
        return s;
      }
      get lowerTriangularMatrix() {
        let o = this.LU, s = o.rows, r = o.columns, a = new oe(s, r);
        for (let u = 0; u < s; u++) for (let m = 0; m < r; m++) u > m ? a.set(u, m, o.get(u, m)) : u === m ? a.set(u, m, 1) : a.set(u, m, 0);
        return a;
      }
      get upperTriangularMatrix() {
        let o = this.LU, s = o.rows, r = o.columns, a = new oe(s, r);
        for (let u = 0; u < s; u++) for (let m = 0; m < r; m++) u <= m ? a.set(u, m, o.get(u, m)) : a.set(u, m, 0);
        return a;
      }
      get pivotPermutationVector() {
        return Array.from(this.pivotVector);
      }
    }
    function we(d, o) {
      let s = 0;
      return Math.abs(d) > Math.abs(o) ? (s = o / d, Math.abs(d) * Math.sqrt(1 + s * s)) : o !== 0 ? (s = d / o, Math.abs(o) * Math.sqrt(1 + s * s)) : 0;
    }
    class le {
      constructor(o) {
        o = X.checkMatrix(o);
        let s = o.clone(), r = o.rows, a = o.columns, u = new Float64Array(a), m, w, y, b;
        for (y = 0; y < a; y++) {
          let A = 0;
          for (m = y; m < r; m++) A = we(A, s.get(m, y));
          if (A !== 0) {
            for (s.get(y, y) < 0 && (A = -A), m = y; m < r; m++) s.set(m, y, s.get(m, y) / A);
            for (s.set(y, y, s.get(y, y) + 1), w = y + 1; w < a; w++) {
              for (b = 0, m = y; m < r; m++) b += s.get(m, y) * s.get(m, w);
              for (b = -b / s.get(y, y), m = y; m < r; m++) s.set(m, w, s.get(m, w) + b * s.get(m, y));
            }
          }
          u[y] = -A;
        }
        this.QR = s, this.Rdiag = u;
      }
      solve(o) {
        o = oe.checkMatrix(o);
        let s = this.QR, r = s.rows;
        if (o.rows !== r) throw new Error("Matrix row dimensions must agree");
        if (!this.isFullRank()) throw new Error("Matrix is rank deficient");
        let a = o.columns, u = o.clone(), m = s.columns, w, y, b, A;
        for (b = 0; b < m; b++) for (y = 0; y < a; y++) {
          for (A = 0, w = b; w < r; w++) A += s.get(w, b) * u.get(w, y);
          for (A = -A / s.get(b, b), w = b; w < r; w++) u.set(w, y, u.get(w, y) + A * s.get(w, b));
        }
        for (b = m - 1; b >= 0; b--) {
          for (y = 0; y < a; y++) u.set(b, y, u.get(b, y) / this.Rdiag[b]);
          for (w = 0; w < b; w++) for (y = 0; y < a; y++) u.set(w, y, u.get(w, y) - u.get(b, y) * s.get(w, b));
        }
        return u.subMatrix(0, m - 1, 0, a - 1);
      }
      isFullRank() {
        let o = this.QR.columns;
        for (let s = 0; s < o; s++) if (this.Rdiag[s] === 0) return false;
        return true;
      }
      get upperTriangularMatrix() {
        let o = this.QR, s = o.columns, r = new oe(s, s), a, u;
        for (a = 0; a < s; a++) for (u = 0; u < s; u++) a < u ? r.set(a, u, o.get(a, u)) : a === u ? r.set(a, u, this.Rdiag[a]) : r.set(a, u, 0);
        return r;
      }
      get orthogonalMatrix() {
        let o = this.QR, s = o.rows, r = o.columns, a = new oe(s, r), u, m, w, y;
        for (w = r - 1; w >= 0; w--) {
          for (u = 0; u < s; u++) a.set(u, w, 0);
          for (a.set(w, w, 1), m = w; m < r; m++) if (o.get(w, w) !== 0) {
            for (y = 0, u = w; u < s; u++) y += o.get(u, w) * a.get(u, m);
            for (y = -y / o.get(w, w), u = w; u < s; u++) a.set(u, m, a.get(u, m) + y * o.get(u, w));
          }
        }
        return a;
      }
    }
    class ye {
      constructor(o, s = {}) {
        if (o = X.checkMatrix(o), o.isEmpty()) throw new Error("Matrix must be non-empty");
        let r = o.rows, a = o.columns;
        const { computeLeftSingularVectors: u = true, computeRightSingularVectors: m = true, autoTranspose: w = false } = s;
        let y = !!u, b = !!m, A = false, I;
        if (r < a) if (!w) I = o.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          I = o.transpose(), r = I.rows, a = I.columns, A = true;
          let S = y;
          y = b, b = S;
        }
        else I = o.clone();
        let L = Math.min(r, a), Q = Math.min(r + 1, a), N = new Float64Array(Q), U = new oe(r, L), ce = new oe(a, a), _ = new Float64Array(a), Z = new Float64Array(r), de = new Float64Array(Q);
        for (let S = 0; S < Q; S++) de[S] = S;
        let _e2 = Math.min(r - 1, a), Oe = Math.max(0, Math.min(a - 2, r)), tt = Math.max(_e2, Oe);
        for (let S = 0; S < tt; S++) {
          if (S < _e2) {
            N[S] = 0;
            for (let B = S; B < r; B++) N[S] = we(N[S], I.get(B, S));
            if (N[S] !== 0) {
              I.get(S, S) < 0 && (N[S] = -N[S]);
              for (let B = S; B < r; B++) I.set(B, S, I.get(B, S) / N[S]);
              I.set(S, S, I.get(S, S) + 1);
            }
            N[S] = -N[S];
          }
          for (let B = S + 1; B < a; B++) {
            if (S < _e2 && N[S] !== 0) {
              let ue = 0;
              for (let J = S; J < r; J++) ue += I.get(J, S) * I.get(J, B);
              ue = -ue / I.get(S, S);
              for (let J = S; J < r; J++) I.set(J, B, I.get(J, B) + ue * I.get(J, S));
            }
            _[B] = I.get(S, B);
          }
          if (y && S < _e2) for (let B = S; B < r; B++) U.set(B, S, I.get(B, S));
          if (S < Oe) {
            _[S] = 0;
            for (let B = S + 1; B < a; B++) _[S] = we(_[S], _[B]);
            if (_[S] !== 0) {
              _[S + 1] < 0 && (_[S] = 0 - _[S]);
              for (let B = S + 1; B < a; B++) _[B] /= _[S];
              _[S + 1] += 1;
            }
            if (_[S] = -_[S], S + 1 < r && _[S] !== 0) {
              for (let B = S + 1; B < r; B++) Z[B] = 0;
              for (let B = S + 1; B < r; B++) for (let ue = S + 1; ue < a; ue++) Z[B] += _[ue] * I.get(B, ue);
              for (let B = S + 1; B < a; B++) {
                let ue = -_[B] / _[S + 1];
                for (let J = S + 1; J < r; J++) I.set(J, B, I.get(J, B) + ue * Z[J]);
              }
            }
            if (b) for (let B = S + 1; B < a; B++) ce.set(B, S, _[B]);
          }
        }
        let be = Math.min(a, r + 1);
        if (_e2 < a && (N[_e2] = I.get(_e2, _e2)), r < be && (N[be - 1] = 0), Oe + 1 < be && (_[Oe] = I.get(Oe, be - 1)), _[be - 1] = 0, y) {
          for (let S = _e2; S < L; S++) {
            for (let B = 0; B < r; B++) U.set(B, S, 0);
            U.set(S, S, 1);
          }
          for (let S = _e2 - 1; S >= 0; S--) if (N[S] !== 0) {
            for (let B = S + 1; B < L; B++) {
              let ue = 0;
              for (let J = S; J < r; J++) ue += U.get(J, S) * U.get(J, B);
              ue = -ue / U.get(S, S);
              for (let J = S; J < r; J++) U.set(J, B, U.get(J, B) + ue * U.get(J, S));
            }
            for (let B = S; B < r; B++) U.set(B, S, -U.get(B, S));
            U.set(S, S, 1 + U.get(S, S));
            for (let B = 0; B < S - 1; B++) U.set(B, S, 0);
          } else {
            for (let B = 0; B < r; B++) U.set(B, S, 0);
            U.set(S, S, 1);
          }
        }
        if (b) for (let S = a - 1; S >= 0; S--) {
          if (S < Oe && _[S] !== 0) for (let B = S + 1; B < a; B++) {
            let ue = 0;
            for (let J = S + 1; J < a; J++) ue += ce.get(J, S) * ce.get(J, B);
            ue = -ue / ce.get(S + 1, S);
            for (let J = S + 1; J < a; J++) ce.set(J, B, ce.get(J, B) + ue * ce.get(J, S));
          }
          for (let B = 0; B < a; B++) ce.set(B, S, 0);
          ce.set(S, S, 1);
        }
        let Ee = be - 1, Ve = Number.EPSILON;
        for (; be > 0; ) {
          let S, B;
          for (S = be - 2; S >= -1 && S !== -1; S--) {
            const ue = Number.MIN_VALUE + Ve * Math.abs(N[S] + Math.abs(N[S + 1]));
            if (Math.abs(_[S]) <= ue || Number.isNaN(_[S])) {
              _[S] = 0;
              break;
            }
          }
          if (S === be - 2) B = 4;
          else {
            let ue;
            for (ue = be - 1; ue >= S && ue !== S; ue--) {
              let J = (ue !== be ? Math.abs(_[ue]) : 0) + (ue !== S + 1 ? Math.abs(_[ue - 1]) : 0);
              if (Math.abs(N[ue]) <= Ve * J) {
                N[ue] = 0;
                break;
              }
            }
            ue === S ? B = 3 : ue === be - 1 ? B = 1 : (B = 2, S = ue);
          }
          switch (S++, B) {
            case 1: {
              let ue = _[be - 2];
              _[be - 2] = 0;
              for (let J = be - 2; J >= S; J--) {
                let nt = we(N[J], ue), Be = N[J] / nt, Ze = ue / nt;
                if (N[J] = nt, J !== S && (ue = -Ze * _[J - 1], _[J - 1] = Be * _[J - 1]), b) for (let it = 0; it < a; it++) nt = Be * ce.get(it, J) + Ze * ce.get(it, be - 1), ce.set(it, be - 1, -Ze * ce.get(it, J) + Be * ce.get(it, be - 1)), ce.set(it, J, nt);
              }
              break;
            }
            case 2: {
              let ue = _[S - 1];
              _[S - 1] = 0;
              for (let J = S; J < be; J++) {
                let nt = we(N[J], ue), Be = N[J] / nt, Ze = ue / nt;
                if (N[J] = nt, ue = -Ze * _[J], _[J] = Be * _[J], y) for (let it = 0; it < r; it++) nt = Be * U.get(it, J) + Ze * U.get(it, S - 1), U.set(it, S - 1, -Ze * U.get(it, J) + Be * U.get(it, S - 1)), U.set(it, J, nt);
              }
              break;
            }
            case 3: {
              const ue = Math.max(Math.abs(N[be - 1]), Math.abs(N[be - 2]), Math.abs(_[be - 2]), Math.abs(N[S]), Math.abs(_[S])), J = N[be - 1] / ue, nt = N[be - 2] / ue, Be = _[be - 2] / ue, Ze = N[S] / ue, it = _[S] / ue, wt = ((nt + J) * (nt - J) + Be * Be) / 2, sn = J * Be * (J * Be);
              let ht = 0;
              (wt !== 0 || sn !== 0) && (wt < 0 ? ht = 0 - Math.sqrt(wt * wt + sn) : ht = Math.sqrt(wt * wt + sn), ht = sn / (wt + ht));
              let gn = (Ze + J) * (Ze - J) + ht, Rn = Ze * it;
              for (let Le = S; Le < be - 1; Le++) {
                let yt = we(gn, Rn);
                yt === 0 && (yt = Number.MIN_VALUE);
                let zt = gn / yt, Ht = Rn / yt;
                if (Le !== S && (_[Le - 1] = yt), gn = zt * N[Le] + Ht * _[Le], _[Le] = zt * _[Le] - Ht * N[Le], Rn = Ht * N[Le + 1], N[Le + 1] = zt * N[Le + 1], b) for (let dt = 0; dt < a; dt++) yt = zt * ce.get(dt, Le) + Ht * ce.get(dt, Le + 1), ce.set(dt, Le + 1, -Ht * ce.get(dt, Le) + zt * ce.get(dt, Le + 1)), ce.set(dt, Le, yt);
                if (yt = we(gn, Rn), yt === 0 && (yt = Number.MIN_VALUE), zt = gn / yt, Ht = Rn / yt, N[Le] = yt, gn = zt * _[Le] + Ht * N[Le + 1], N[Le + 1] = -Ht * _[Le] + zt * N[Le + 1], Rn = Ht * _[Le + 1], _[Le + 1] = zt * _[Le + 1], y && Le < r - 1) for (let dt = 0; dt < r; dt++) yt = zt * U.get(dt, Le) + Ht * U.get(dt, Le + 1), U.set(dt, Le + 1, -Ht * U.get(dt, Le) + zt * U.get(dt, Le + 1)), U.set(dt, Le, yt);
              }
              _[be - 2] = gn;
              break;
            }
            case 4: {
              if (N[S] <= 0 && (N[S] = N[S] < 0 ? -N[S] : 0, b)) for (let ue = 0; ue <= Ee; ue++) ce.set(ue, S, -ce.get(ue, S));
              for (; S < Ee && !(N[S] >= N[S + 1]); ) {
                let ue = N[S];
                if (N[S] = N[S + 1], N[S + 1] = ue, b && S < a - 1) for (let J = 0; J < a; J++) ue = ce.get(J, S + 1), ce.set(J, S + 1, ce.get(J, S)), ce.set(J, S, ue);
                if (y && S < r - 1) for (let J = 0; J < r; J++) ue = U.get(J, S + 1), U.set(J, S + 1, U.get(J, S)), U.set(J, S, ue);
                S++;
              }
              be--;
              break;
            }
          }
        }
        if (A) {
          let S = ce;
          ce = U, U = S;
        }
        this.m = r, this.n = a, this.s = N, this.U = U, this.V = ce;
      }
      solve(o) {
        let s = o, r = this.threshold, a = this.s.length, u = oe.zeros(a, a);
        for (let L = 0; L < a; L++) Math.abs(this.s[L]) <= r ? u.set(L, L, 0) : u.set(L, L, 1 / this.s[L]);
        let m = this.U, w = this.rightSingularVectors, y = w.mmul(u), b = w.rows, A = m.rows, I = oe.zeros(b, A);
        for (let L = 0; L < b; L++) for (let Q = 0; Q < A; Q++) {
          let N = 0;
          for (let U = 0; U < a; U++) N += y.get(L, U) * m.get(Q, U);
          I.set(L, Q, N);
        }
        return I.mmul(s);
      }
      solveForDiagonal(o) {
        return this.solve(oe.diag(o));
      }
      inverse() {
        let o = this.V, s = this.threshold, r = o.rows, a = o.columns, u = new oe(r, this.s.length);
        for (let A = 0; A < r; A++) for (let I = 0; I < a; I++) Math.abs(this.s[I]) > s && u.set(A, I, o.get(A, I) / this.s[I]);
        let m = this.U, w = m.rows, y = m.columns, b = new oe(r, w);
        for (let A = 0; A < r; A++) for (let I = 0; I < w; I++) {
          let L = 0;
          for (let Q = 0; Q < y; Q++) L += u.get(A, Q) * m.get(I, Q);
          b.set(A, I, L);
        }
        return b;
      }
      get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
      }
      get norm2() {
        return this.s[0];
      }
      get rank() {
        let o = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON, s = 0, r = this.s;
        for (let a = 0, u = r.length; a < u; a++) r[a] > o && s++;
        return s;
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
        return oe.diag(this.s);
      }
    }
    function Te(d, o = false) {
      return d = X.checkMatrix(d), o ? new ye(d).inverse() : ke(d, oe.eye(d.rows));
    }
    function ke(d, o, s = false) {
      return d = X.checkMatrix(d), o = X.checkMatrix(o), s ? new ye(d).solve(o) : d.isSquare() ? new V(d).solve(o) : new le(d).solve(o);
    }
    function xe(d) {
      if (d = oe.checkMatrix(d), d.isSquare()) {
        if (d.columns === 0) return 1;
        let o, s, r, a;
        if (d.columns === 2) return o = d.get(0, 0), s = d.get(0, 1), r = d.get(1, 0), a = d.get(1, 1), o * a - s * r;
        if (d.columns === 3) {
          let u, m, w;
          return u = new Y(d, [
            1,
            2
          ], [
            1,
            2
          ]), m = new Y(d, [
            1,
            2
          ], [
            0,
            2
          ]), w = new Y(d, [
            1,
            2
          ], [
            0,
            1
          ]), o = d.get(0, 0), s = d.get(0, 1), r = d.get(0, 2), o * xe(u) - s * xe(m) + r * xe(w);
        } else return new V(d).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function De(d, o) {
      let s = [];
      for (let r = 0; r < d; r++) r !== o && s.push(r);
      return s;
    }
    function It(d, o, s, r = 1e-9, a = 1e-9) {
      if (d > a) return new Array(o.rows + 1).fill(0);
      {
        let u = o.addRow(s, [
          0
        ]);
        for (let m = 0; m < u.rows; m++) Math.abs(u.get(m, 0)) < r && u.set(m, 0, 0);
        return u.to1DArray();
      }
    }
    function Tt(d, o = {}) {
      const { thresholdValue: s = 1e-9, thresholdError: r = 1e-9 } = o;
      d = oe.checkMatrix(d);
      let a = d.rows, u = new oe(a, a);
      for (let m = 0; m < a; m++) {
        let w = oe.columnVector(d.getRow(m)), y = d.subMatrixRow(De(a, m)).transpose(), A = new ye(y).solve(w), I = oe.sub(w, y.mmul(A)).abs().max();
        u.setRow(m, It(I, A, m, s, r));
      }
      return u;
    }
    function Xt(d, o = Number.EPSILON) {
      if (d = oe.checkMatrix(d), d.isEmpty()) return d.transpose();
      let s = new ye(d, {
        autoTranspose: true
      }), r = s.leftSingularVectors, a = s.rightSingularVectors, u = s.diagonal;
      for (let m = 0; m < u.length; m++) Math.abs(u[m]) > o ? u[m] = 1 / u[m] : u[m] = 0;
      return a.mmul(oe.diag(u).mmul(r.transpose()));
    }
    function Zt(d, o = d, s = {}) {
      d = new oe(d);
      let r = false;
      if (typeof o == "object" && !oe.isMatrix(o) && !e.isAnyArray(o) ? (s = o, o = d, r = true) : o = new oe(o), d.rows !== o.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true } = s;
      a && (d = d.center("column"), r || (o = o.center("column")));
      const u = d.transpose().mmul(o);
      for (let m = 0; m < u.rows; m++) for (let w = 0; w < u.columns; w++) u.set(m, w, u.get(m, w) * (1 / (d.rows - 1)));
      return u;
    }
    function gi(d, o = d, s = {}) {
      d = new oe(d);
      let r = false;
      if (typeof o == "object" && !oe.isMatrix(o) && !e.isAnyArray(o) ? (s = o, o = d, r = true) : o = new oe(o), d.rows !== o.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true, scale: u = true } = s;
      a && (d.center("column"), r || o.center("column")), u && (d.scale("column"), r || o.scale("column"));
      const m = d.standardDeviation("column", {
        unbiased: true
      }), w = r ? m : o.standardDeviation("column", {
        unbiased: true
      }), y = d.transpose().mmul(o);
      for (let b = 0; b < y.rows; b++) for (let A = 0; A < y.columns; A++) y.set(b, A, y.get(b, A) * (1 / (m[b] * w[A])) * (1 / (d.rows - 1)));
      return y;
    }
    class lr {
      constructor(o, s = {}) {
        const { assumeSymmetric: r = false } = s;
        if (o = X.checkMatrix(o), !o.isSquare()) throw new Error("Matrix is not a square matrix");
        if (o.isEmpty()) throw new Error("Matrix must be non-empty");
        let a = o.columns, u = new oe(a, a), m = new Float64Array(a), w = new Float64Array(a), y = o, b, A, I = false;
        if (r ? I = true : I = o.isSymmetric(), I) {
          for (b = 0; b < a; b++) for (A = 0; A < a; A++) u.set(b, A, y.get(b, A));
          Nt(a, w, m, u), Qt(a, w, m, u);
        } else {
          let L = new oe(a, a), Q = new Float64Array(a);
          for (A = 0; A < a; A++) for (b = 0; b < a; b++) L.set(b, A, y.get(b, A));
          Qr(a, L, Q, u), eo(a, w, m, u, L);
        }
        this.n = a, this.e = w, this.d = m, this.V = u;
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
        let o = this.n, s = this.e, r = this.d, a = new oe(o, o), u, m;
        for (u = 0; u < o; u++) {
          for (m = 0; m < o; m++) a.set(u, m, 0);
          a.set(u, u, r[u]), s[u] > 0 ? a.set(u, u + 1, s[u]) : s[u] < 0 && a.set(u, u - 1, s[u]);
        }
        return a;
      }
    }
    function Nt(d, o, s, r) {
      let a, u, m, w, y, b, A, I;
      for (y = 0; y < d; y++) s[y] = r.get(d - 1, y);
      for (w = d - 1; w > 0; w--) {
        for (I = 0, m = 0, b = 0; b < w; b++) I = I + Math.abs(s[b]);
        if (I === 0) for (o[w] = s[w - 1], y = 0; y < w; y++) s[y] = r.get(w - 1, y), r.set(w, y, 0), r.set(y, w, 0);
        else {
          for (b = 0; b < w; b++) s[b] /= I, m += s[b] * s[b];
          for (a = s[w - 1], u = Math.sqrt(m), a > 0 && (u = -u), o[w] = I * u, m = m - a * u, s[w - 1] = a - u, y = 0; y < w; y++) o[y] = 0;
          for (y = 0; y < w; y++) {
            for (a = s[y], r.set(y, w, a), u = o[y] + r.get(y, y) * a, b = y + 1; b <= w - 1; b++) u += r.get(b, y) * s[b], o[b] += r.get(b, y) * a;
            o[y] = u;
          }
          for (a = 0, y = 0; y < w; y++) o[y] /= m, a += o[y] * s[y];
          for (A = a / (m + m), y = 0; y < w; y++) o[y] -= A * s[y];
          for (y = 0; y < w; y++) {
            for (a = s[y], u = o[y], b = y; b <= w - 1; b++) r.set(b, y, r.get(b, y) - (a * o[b] + u * s[b]));
            s[y] = r.get(w - 1, y), r.set(w, y, 0);
          }
        }
        s[w] = m;
      }
      for (w = 0; w < d - 1; w++) {
        if (r.set(d - 1, w, r.get(w, w)), r.set(w, w, 1), m = s[w + 1], m !== 0) {
          for (b = 0; b <= w; b++) s[b] = r.get(b, w + 1) / m;
          for (y = 0; y <= w; y++) {
            for (u = 0, b = 0; b <= w; b++) u += r.get(b, w + 1) * r.get(b, y);
            for (b = 0; b <= w; b++) r.set(b, y, r.get(b, y) - u * s[b]);
          }
        }
        for (b = 0; b <= w; b++) r.set(b, w + 1, 0);
      }
      for (y = 0; y < d; y++) s[y] = r.get(d - 1, y), r.set(d - 1, y, 0);
      r.set(d - 1, d - 1, 1), o[0] = 0;
    }
    function Qt(d, o, s, r) {
      let a, u, m, w, y, b, A, I, L, Q, N, U, ce, _, Z, de;
      for (m = 1; m < d; m++) o[m - 1] = o[m];
      o[d - 1] = 0;
      let _e2 = 0, Oe = 0, tt = Number.EPSILON;
      for (b = 0; b < d; b++) {
        for (Oe = Math.max(Oe, Math.abs(s[b]) + Math.abs(o[b])), A = b; A < d && !(Math.abs(o[A]) <= tt * Oe); ) A++;
        if (A > b) do {
          for (a = s[b], I = (s[b + 1] - a) / (2 * o[b]), L = we(I, 1), I < 0 && (L = -L), s[b] = o[b] / (I + L), s[b + 1] = o[b] * (I + L), Q = s[b + 1], u = a - s[b], m = b + 2; m < d; m++) s[m] -= u;
          for (_e2 = _e2 + u, I = s[A], N = 1, U = N, ce = N, _ = o[b + 1], Z = 0, de = 0, m = A - 1; m >= b; m--) for (ce = U, U = N, de = Z, a = N * o[m], u = N * I, L = we(I, o[m]), o[m + 1] = Z * L, Z = o[m] / L, N = I / L, I = N * s[m] - Z * a, s[m + 1] = u + Z * (N * a + Z * s[m]), y = 0; y < d; y++) u = r.get(y, m + 1), r.set(y, m + 1, Z * r.get(y, m) + N * u), r.set(y, m, N * r.get(y, m) - Z * u);
          I = -Z * de * ce * _ * o[b] / Q, o[b] = Z * I, s[b] = N * I;
        } while (Math.abs(o[b]) > tt * Oe);
        s[b] = s[b] + _e2, o[b] = 0;
      }
      for (m = 0; m < d - 1; m++) {
        for (y = m, I = s[m], w = m + 1; w < d; w++) s[w] < I && (y = w, I = s[w]);
        if (y !== m) for (s[y] = s[m], s[m] = I, w = 0; w < d; w++) I = r.get(w, m), r.set(w, m, r.get(w, y)), r.set(w, y, I);
      }
    }
    function Qr(d, o, s, r) {
      let a = 0, u = d - 1, m, w, y, b, A, I, L;
      for (I = a + 1; I <= u - 1; I++) {
        for (L = 0, b = I; b <= u; b++) L = L + Math.abs(o.get(b, I - 1));
        if (L !== 0) {
          for (y = 0, b = u; b >= I; b--) s[b] = o.get(b, I - 1) / L, y += s[b] * s[b];
          for (w = Math.sqrt(y), s[I] > 0 && (w = -w), y = y - s[I] * w, s[I] = s[I] - w, A = I; A < d; A++) {
            for (m = 0, b = u; b >= I; b--) m += s[b] * o.get(b, A);
            for (m = m / y, b = I; b <= u; b++) o.set(b, A, o.get(b, A) - m * s[b]);
          }
          for (b = 0; b <= u; b++) {
            for (m = 0, A = u; A >= I; A--) m += s[A] * o.get(b, A);
            for (m = m / y, A = I; A <= u; A++) o.set(b, A, o.get(b, A) - m * s[A]);
          }
          s[I] = L * s[I], o.set(I, I - 1, L * w);
        }
      }
      for (b = 0; b < d; b++) for (A = 0; A < d; A++) r.set(b, A, b === A ? 1 : 0);
      for (I = u - 1; I >= a + 1; I--) if (o.get(I, I - 1) !== 0) {
        for (b = I + 1; b <= u; b++) s[b] = o.get(b, I - 1);
        for (A = I; A <= u; A++) {
          for (w = 0, b = I; b <= u; b++) w += s[b] * r.get(b, A);
          for (w = w / s[I] / o.get(I, I - 1), b = I; b <= u; b++) r.set(b, A, r.get(b, A) + w * s[b]);
        }
      }
    }
    function eo(d, o, s, r, a) {
      let u = d - 1, m = 0, w = d - 1, y = Number.EPSILON, b = 0, A = 0, I = 0, L = 0, Q = 0, N = 0, U = 0, ce = 0, _, Z, de, _e2, Oe, tt, be, Ee, Ve, S, B, ue, J, nt, Be;
      for (_ = 0; _ < d; _++) for ((_ < m || _ > w) && (s[_] = a.get(_, _), o[_] = 0), Z = Math.max(_ - 1, 0); Z < d; Z++) A = A + Math.abs(a.get(_, Z));
      for (; u >= m; ) {
        for (_e2 = u; _e2 > m && (N = Math.abs(a.get(_e2 - 1, _e2 - 1)) + Math.abs(a.get(_e2, _e2)), N === 0 && (N = A), !(Math.abs(a.get(_e2, _e2 - 1)) < y * N)); ) _e2--;
        if (_e2 === u) a.set(u, u, a.get(u, u) + b), s[u] = a.get(u, u), o[u] = 0, u--, ce = 0;
        else if (_e2 === u - 1) {
          if (be = a.get(u, u - 1) * a.get(u - 1, u), I = (a.get(u - 1, u - 1) - a.get(u, u)) / 2, L = I * I + be, U = Math.sqrt(Math.abs(L)), a.set(u, u, a.get(u, u) + b), a.set(u - 1, u - 1, a.get(u - 1, u - 1) + b), Ee = a.get(u, u), L >= 0) {
            for (U = I >= 0 ? I + U : I - U, s[u - 1] = Ee + U, s[u] = s[u - 1], U !== 0 && (s[u] = Ee - be / U), o[u - 1] = 0, o[u] = 0, Ee = a.get(u, u - 1), N = Math.abs(Ee) + Math.abs(U), I = Ee / N, L = U / N, Q = Math.sqrt(I * I + L * L), I = I / Q, L = L / Q, Z = u - 1; Z < d; Z++) U = a.get(u - 1, Z), a.set(u - 1, Z, L * U + I * a.get(u, Z)), a.set(u, Z, L * a.get(u, Z) - I * U);
            for (_ = 0; _ <= u; _++) U = a.get(_, u - 1), a.set(_, u - 1, L * U + I * a.get(_, u)), a.set(_, u, L * a.get(_, u) - I * U);
            for (_ = m; _ <= w; _++) U = r.get(_, u - 1), r.set(_, u - 1, L * U + I * r.get(_, u)), r.set(_, u, L * r.get(_, u) - I * U);
          } else s[u - 1] = Ee + I, s[u] = Ee + I, o[u - 1] = U, o[u] = -U;
          u = u - 2, ce = 0;
        } else {
          if (Ee = a.get(u, u), Ve = 0, be = 0, _e2 < u && (Ve = a.get(u - 1, u - 1), be = a.get(u, u - 1) * a.get(u - 1, u)), ce === 10) {
            for (b += Ee, _ = m; _ <= u; _++) a.set(_, _, a.get(_, _) - Ee);
            N = Math.abs(a.get(u, u - 1)) + Math.abs(a.get(u - 1, u - 2)), Ee = Ve = 0.75 * N, be = -0.4375 * N * N;
          }
          if (ce === 30 && (N = (Ve - Ee) / 2, N = N * N + be, N > 0)) {
            for (N = Math.sqrt(N), Ve < Ee && (N = -N), N = Ee - be / ((Ve - Ee) / 2 + N), _ = m; _ <= u; _++) a.set(_, _, a.get(_, _) - N);
            b += N, Ee = Ve = be = 0.964;
          }
          for (ce = ce + 1, Oe = u - 2; Oe >= _e2 && (U = a.get(Oe, Oe), Q = Ee - U, N = Ve - U, I = (Q * N - be) / a.get(Oe + 1, Oe) + a.get(Oe, Oe + 1), L = a.get(Oe + 1, Oe + 1) - U - Q - N, Q = a.get(Oe + 2, Oe + 1), N = Math.abs(I) + Math.abs(L) + Math.abs(Q), I = I / N, L = L / N, Q = Q / N, !(Oe === _e2 || Math.abs(a.get(Oe, Oe - 1)) * (Math.abs(L) + Math.abs(Q)) < y * (Math.abs(I) * (Math.abs(a.get(Oe - 1, Oe - 1)) + Math.abs(U) + Math.abs(a.get(Oe + 1, Oe + 1)))))); ) Oe--;
          for (_ = Oe + 2; _ <= u; _++) a.set(_, _ - 2, 0), _ > Oe + 2 && a.set(_, _ - 3, 0);
          for (de = Oe; de <= u - 1 && (nt = de !== u - 1, de !== Oe && (I = a.get(de, de - 1), L = a.get(de + 1, de - 1), Q = nt ? a.get(de + 2, de - 1) : 0, Ee = Math.abs(I) + Math.abs(L) + Math.abs(Q), Ee !== 0 && (I = I / Ee, L = L / Ee, Q = Q / Ee)), Ee !== 0); de++) if (N = Math.sqrt(I * I + L * L + Q * Q), I < 0 && (N = -N), N !== 0) {
            for (de !== Oe ? a.set(de, de - 1, -N * Ee) : _e2 !== Oe && a.set(de, de - 1, -a.get(de, de - 1)), I = I + N, Ee = I / N, Ve = L / N, U = Q / N, L = L / I, Q = Q / I, Z = de; Z < d; Z++) I = a.get(de, Z) + L * a.get(de + 1, Z), nt && (I = I + Q * a.get(de + 2, Z), a.set(de + 2, Z, a.get(de + 2, Z) - I * U)), a.set(de, Z, a.get(de, Z) - I * Ee), a.set(de + 1, Z, a.get(de + 1, Z) - I * Ve);
            for (_ = 0; _ <= Math.min(u, de + 3); _++) I = Ee * a.get(_, de) + Ve * a.get(_, de + 1), nt && (I = I + U * a.get(_, de + 2), a.set(_, de + 2, a.get(_, de + 2) - I * Q)), a.set(_, de, a.get(_, de) - I), a.set(_, de + 1, a.get(_, de + 1) - I * L);
            for (_ = m; _ <= w; _++) I = Ee * r.get(_, de) + Ve * r.get(_, de + 1), nt && (I = I + U * r.get(_, de + 2), r.set(_, de + 2, r.get(_, de + 2) - I * Q)), r.set(_, de, r.get(_, de) - I), r.set(_, de + 1, r.get(_, de + 1) - I * L);
          }
        }
      }
      if (A !== 0) {
        for (u = d - 1; u >= 0; u--) if (I = s[u], L = o[u], L === 0) for (_e2 = u, a.set(u, u, 1), _ = u - 1; _ >= 0; _--) {
          for (be = a.get(_, _) - I, Q = 0, Z = _e2; Z <= u; Z++) Q = Q + a.get(_, Z) * a.get(Z, u);
          if (o[_] < 0) U = be, N = Q;
          else if (_e2 = _, o[_] === 0 ? a.set(_, u, be !== 0 ? -Q / be : -Q / (y * A)) : (Ee = a.get(_, _ + 1), Ve = a.get(_ + 1, _), L = (s[_] - I) * (s[_] - I) + o[_] * o[_], tt = (Ee * N - U * Q) / L, a.set(_, u, tt), a.set(_ + 1, u, Math.abs(Ee) > Math.abs(U) ? (-Q - be * tt) / Ee : (-N - Ve * tt) / U)), tt = Math.abs(a.get(_, u)), y * tt * tt > 1) for (Z = _; Z <= u; Z++) a.set(Z, u, a.get(Z, u) / tt);
        }
        else if (L < 0) for (_e2 = u - 1, Math.abs(a.get(u, u - 1)) > Math.abs(a.get(u - 1, u)) ? (a.set(u - 1, u - 1, L / a.get(u, u - 1)), a.set(u - 1, u, -(a.get(u, u) - I) / a.get(u, u - 1))) : (Be = to(0, -a.get(u - 1, u), a.get(u - 1, u - 1) - I, L), a.set(u - 1, u - 1, Be[0]), a.set(u - 1, u, Be[1])), a.set(u, u - 1, 0), a.set(u, u, 1), _ = u - 2; _ >= 0; _--) {
          for (S = 0, B = 0, Z = _e2; Z <= u; Z++) S = S + a.get(_, Z) * a.get(Z, u - 1), B = B + a.get(_, Z) * a.get(Z, u);
          if (be = a.get(_, _) - I, o[_] < 0) U = be, Q = S, N = B;
          else if (_e2 = _, o[_] === 0 ? (Be = to(-S, -B, be, L), a.set(_, u - 1, Be[0]), a.set(_, u, Be[1])) : (Ee = a.get(_, _ + 1), Ve = a.get(_ + 1, _), ue = (s[_] - I) * (s[_] - I) + o[_] * o[_] - L * L, J = (s[_] - I) * 2 * L, ue === 0 && J === 0 && (ue = y * A * (Math.abs(be) + Math.abs(L) + Math.abs(Ee) + Math.abs(Ve) + Math.abs(U))), Be = to(Ee * Q - U * S + L * B, Ee * N - U * B - L * S, ue, J), a.set(_, u - 1, Be[0]), a.set(_, u, Be[1]), Math.abs(Ee) > Math.abs(U) + Math.abs(L) ? (a.set(_ + 1, u - 1, (-S - be * a.get(_, u - 1) + L * a.get(_, u)) / Ee), a.set(_ + 1, u, (-B - be * a.get(_, u) - L * a.get(_, u - 1)) / Ee)) : (Be = to(-Q - Ve * a.get(_, u - 1), -N - Ve * a.get(_, u), U, L), a.set(_ + 1, u - 1, Be[0]), a.set(_ + 1, u, Be[1]))), tt = Math.max(Math.abs(a.get(_, u - 1)), Math.abs(a.get(_, u))), y * tt * tt > 1) for (Z = _; Z <= u; Z++) a.set(Z, u - 1, a.get(Z, u - 1) / tt), a.set(Z, u, a.get(Z, u) / tt);
        }
        for (_ = 0; _ < d; _++) if (_ < m || _ > w) for (Z = _; Z < d; Z++) r.set(_, Z, a.get(_, Z));
        for (Z = d - 1; Z >= m; Z--) for (_ = m; _ <= w; _++) {
          for (U = 0, de = m; de <= Math.min(Z, w); de++) U = U + r.get(_, de) * a.get(de, Z);
          r.set(_, Z, U);
        }
      }
    }
    function to(d, o, s, r) {
      let a, u;
      return Math.abs(s) > Math.abs(r) ? (a = r / s, u = s + a * r, [
        (d + a * o) / u,
        (o - a * d) / u
      ]) : (a = s / r, u = r + a * s, [
        (a * d + o) / u,
        (a * o - d) / u
      ]);
    }
    class nl {
      constructor(o) {
        if (o = X.checkMatrix(o), !o.isSymmetric()) throw new Error("Matrix is not symmetric");
        let s = o, r = s.rows, a = new oe(r, r), u = true, m, w, y;
        for (w = 0; w < r; w++) {
          let b = 0;
          for (y = 0; y < w; y++) {
            let A = 0;
            for (m = 0; m < y; m++) A += a.get(y, m) * a.get(w, m);
            A = (s.get(w, y) - A) / a.get(y, y), a.set(w, y, A), b = b + A * A;
          }
          for (b = s.get(w, w) - b, u && (u = b > 0), a.set(w, w, Math.sqrt(Math.max(b, 0))), y = w + 1; y < r; y++) a.set(w, y, 0);
        }
        this.L = a, this.positiveDefinite = u;
      }
      isPositiveDefinite() {
        return this.positiveDefinite;
      }
      solve(o) {
        o = X.checkMatrix(o);
        let s = this.L, r = s.rows;
        if (o.rows !== r) throw new Error("Matrix dimensions do not match");
        if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
        let a = o.columns, u = o.clone(), m, w, y;
        for (y = 0; y < r; y++) for (w = 0; w < a; w++) {
          for (m = 0; m < y; m++) u.set(y, w, u.get(y, w) - u.get(m, w) * s.get(y, m));
          u.set(y, w, u.get(y, w) / s.get(y, y));
        }
        for (y = r - 1; y >= 0; y--) for (w = 0; w < a; w++) {
          for (m = y + 1; m < r; m++) u.set(y, w, u.get(y, w) - u.get(m, w) * s.get(m, y));
          u.set(y, w, u.get(y, w) / s.get(y, y));
        }
        return u;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class il {
      constructor(o, s = {}) {
        o = X.checkMatrix(o);
        let { Y: r } = s;
        const { scaleScores: a = false, maxIterations: u = 1e3, terminationCriteria: m = 1e-10 } = s;
        let w;
        if (r) {
          if (e.isAnyArray(r) && typeof r[0] == "number" ? r = oe.columnVector(r) : r = X.checkMatrix(r), r.rows !== o.rows) throw new Error("Y should have the same number of rows as X");
          w = r.getColumnVector(0);
        } else w = o.getColumnVector(0);
        let y = 1, b, A, I, L;
        for (let Q = 0; Q < u && y > m; Q++) I = o.transpose().mmul(w).div(w.transpose().mmul(w).get(0, 0)), I = I.div(I.norm()), b = o.mmul(I).div(I.transpose().mmul(I).get(0, 0)), Q > 0 && (y = b.clone().sub(L).pow(2).sum()), L = b.clone(), r ? (A = r.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), A = A.div(A.norm()), w = r.mmul(A).div(A.transpose().mmul(A).get(0, 0))) : w = b;
        if (r) {
          let Q = o.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0));
          Q = Q.div(Q.norm());
          let N = o.clone().sub(b.clone().mmul(Q.transpose())), U = w.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), ce = r.clone().sub(b.clone().mulS(U.get(0, 0)).mmul(A.transpose()));
          this.t = b, this.p = Q.transpose(), this.w = I.transpose(), this.q = A, this.u = w, this.s = b.transpose().mmul(b), this.xResidual = N, this.yResidual = ce, this.betas = U;
        } else this.w = I.transpose(), this.s = b.transpose().mmul(b).sqrt(), a ? this.t = b.clone().div(this.s.get(0, 0)) : this.t = b, this.xResidual = o.sub(b.mmul(I.transpose()));
      }
    }
    return Me.AbstractMatrix = ve, Me.CHO = nl, Me.CholeskyDecomposition = nl, Me.DistanceMatrix = Mn, Me.EVD = lr, Me.EigenvalueDecomposition = lr, Me.LU = V, Me.LuDecomposition = V, Me.Matrix = oe, Me.MatrixColumnSelectionView = pi, Me.MatrixColumnView = Zr, Me.MatrixFlipColumnView = tl, Me.MatrixFlipRowView = T, Me.MatrixRowSelectionView = F, Me.MatrixRowView = O, Me.MatrixSelectionView = Y, Me.MatrixSubView = q, Me.MatrixTransposeView = K, Me.NIPALS = il, Me.Nipals = il, Me.QR = le, Me.QrDecomposition = le, Me.SVD = ye, Me.SingularValueDecomposition = ye, Me.SymmetricMatrix = Dt, Me.WrapperMatrix1D = ae, Me.WrapperMatrix2D = X, Me.correlation = gi, Me.covariance = Zt, Me.default = oe, Me.determinant = xe, Me.inverse = Te, Me.linearDependencies = Tt, Me.pseudoInverse = Xt, Me.solve = ke, Me.wrap = ne, Me;
  }
  var ys = nv();
  const Cc = qb(ys), tn = ys.Matrix;
  Cc.Matrix ? Cc.Matrix : ys.Matrix;
  const iv = ys.inverse;
  class Tn {
    constructor(t, n, i = 0) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      __publicField(this, "accuracy");
      this.latitude = t, this.longitude = n, this.accuracy = i;
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
  var zf = ((e) => (e[e.PERMISSION_DENIED = 1] = "PERMISSION_DENIED", e[e.POSITION_UNAVAILABLE = 2] = "POSITION_UNAVAILABLE", e[e.TIMEOUT = 3] = "TIMEOUT", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.IOS_HTTPS_REQUIRED = 5] = "IOS_HTTPS_REQUIRED", e[e.FIREFOX_PERMISSION_ISSUE = 6] = "FIREFOX_PERMISSION_ISSUE", e))(zf || {});
  const ai = [];
  function rv(e) {
    const t = {
      id: (ai.length > 0 ? ai[ai.length - 1].id : 0) + 1,
      callback: e
    };
    return ai.push(t), t.id;
  }
  function ov(e) {
    ai.splice(ai.findIndex((t) => t.id === e), 1);
  }
  let go = -1, Fc = new Tn(0, 0);
  const xc = "https://ipapi.co/json/";
  class sv {
    async getPermissionStatus() {
      try {
        return await fetch(xc), "granted";
      } catch {
        return "denied";
      }
    }
    async fetchRaw(t = 1e4) {
      const n = new Promise((l, c) => {
        (async () => {
          try {
            const f = await fetch(xc);
            if (!f.ok) throw new Error(`HTTP error! Status: ${f.status}`);
            l(f.json());
          } catch {
            c(new Error("Failed to fetch IP geolocation data"));
          }
        })().catch(c);
      }), i = new Promise((l, c) => {
        setTimeout(() => c(new Error("Request IP geolocation data timed out")), t);
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
      return console.info("[geolocation] Successfully retrieved current position from IP"), new Tn(t.latitude, t.longitude, 5e4);
    }
    watchPosition(t) {
      console.info("[geolocation] Starting IP geolocation watch");
      const n = rv(t);
      return new Promise((i) => {
        if (go === -1) {
          const l = () => {
            this.getCurrentPosition().then((c) => {
              ib(c, Fc) || (console.info("[geolocation] IP geolocation position updated"), ai.forEach((f) => f.callback(c)), Fc = Ct(c));
            }).catch((c) => {
              throw console.error("[geolocation] Error in IP geolocation watch:", c), new Error(`Error while watching the geolocation [IP]. Code: ${zf.UNKNOWN}, Msg: ${String(c)}`);
            });
          };
          go = setInterval(() => l(), 2e4), console.info("[geolocation] IP geolocation watch interval started"), l();
        }
        i(n);
      });
    }
    clearWatch(t) {
      console.info("[geolocation] Clearing IP geolocation watch handler"), ov(t), ai.length === 0 && (console.info("[geolocation] Stopping IP geolocation watch interval"), clearInterval(go), go = -1);
    }
  }
  let Ne;
  const Hf = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && Hf.decode();
  let Tr = null;
  function So() {
    return (Tr === null || Tr.byteLength === 0) && (Tr = new Uint8Array(Ne.memory.buffer)), Tr;
  }
  function Ai(e, t) {
    return e = e >>> 0, Hf.decode(So().subarray(e, e + t));
  }
  let Ko = 0;
  const Oo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, av = typeof Oo.encodeInto == "function" ? function(e, t) {
    return Oo.encodeInto(e, t);
  } : function(e, t) {
    const n = Oo.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function Vf(e, t, n) {
    if (n === void 0) {
      const h = Oo.encode(e), p = t(h.length, 1) >>> 0;
      return So().subarray(p, p + h.length).set(h), Ko = h.length, p;
    }
    let i = e.length, l = t(i, 1) >>> 0;
    const c = So();
    let f = 0;
    for (; f < i; f++) {
      const h = e.charCodeAt(f);
      if (h > 127) break;
      c[l + f] = h;
    }
    if (f !== i) {
      f !== 0 && (e = e.slice(f)), l = n(l, i, i = f + e.length * 3, 1) >>> 0;
      const h = So().subarray(l + f, l + i), p = av(e, h);
      f += p.written, l = n(l, i, f, 1) >>> 0;
    }
    return Ko = f, l;
  }
  function lv(e) {
    return e == null;
  }
  let Ti = null;
  function Dc() {
    return (Ti === null || Ti.buffer.detached === true || Ti.buffer.detached === void 0 && Ti.buffer !== Ne.memory.buffer) && (Ti = new DataView(Ne.memory.buffer)), Ti;
  }
  function qf(e) {
    const t = Ne.__wbindgen_export_0.get(e);
    return Ne.__externref_table_dealloc(e), t;
  }
  function Vs(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function Ea(e, t, n) {
    Vs(e, li), Vs(t, li), Vs(n, Yo);
    const i = Ne.transform(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
    if (i[1]) throw qf(i[0]);
  }
  const Uc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ne.__wbg_point_free(e >>> 0, 1));
  class Yo {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Uc.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ne.__wbg_point_free(t, 0);
    }
    get x() {
      return Ne.__wbg_get_point_x(this.__wbg_ptr);
    }
    set x(t) {
      Ne.__wbg_set_point_x(this.__wbg_ptr, t);
    }
    get y() {
      return Ne.__wbg_get_point_y(this.__wbg_ptr);
    }
    set y(t) {
      Ne.__wbg_set_point_y(this.__wbg_ptr, t);
    }
    get z() {
      return Ne.__wbg_get_point_z(this.__wbg_ptr);
    }
    set z(t) {
      Ne.__wbg_set_point_z(this.__wbg_ptr, t);
    }
    constructor(t, n, i) {
      const l = Ne.point_new(t, n, i);
      return this.__wbg_ptr = l >>> 0, Uc.register(this, this.__wbg_ptr, this), this;
    }
  }
  const jc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Ne.__wbg_projection_free(e >>> 0, 1));
  class li {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, jc.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Ne.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const n = Vf(t, Ne.__wbindgen_malloc, Ne.__wbindgen_realloc), i = Ko, l = Ne.projection_new(n, i);
      if (l[2]) throw qf(l[1]);
      return this.__wbg_ptr = l[0] >>> 0, jc.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, n;
      try {
        const i = Ne.projection_projName(this.__wbg_ptr);
        return t = i[0], n = i[1], Ai(i[0], i[1]);
      } finally {
        Ne.__wbindgen_free(t, n, 1);
      }
    }
    get isLatlon() {
      return Ne.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Ne.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, n;
      try {
        const i = Ne.projection_axis(this.__wbg_ptr);
        return t = i[0], n = i[1], Ai(i[0], i[1]);
      } finally {
        Ne.__wbindgen_free(t, n, 1);
      }
    }
    get isNormalizedAxis() {
      return Ne.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Ne.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, n;
      try {
        const i = Ne.projection_units(this.__wbg_ptr);
        return t = i[0], n = i[1], Ai(i[0], i[1]);
      } finally {
        Ne.__wbindgen_free(t, n, 1);
      }
    }
  }
  async function cv(e, t) {
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
  function uv() {
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
      return parseFloat(Ai(t, n));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, n, i) {
      return parseInt(Ai(t, n), i);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, n, i) {
      return t.slice(n >>> 0, i >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, n) {
      return new Error(Ai(t, n));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Ne.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, n) {
      const i = n, l = typeof i == "string" ? i : void 0;
      var c = lv(l) ? 0 : Vf(l, Ne.__wbindgen_malloc, Ne.__wbindgen_realloc), f = Ko;
      Dc().setInt32(t + 4, f, true), Dc().setInt32(t + 0, c, true);
    }, e.wbg.__wbindgen_throw = function(t, n) {
      throw new Error(Ai(t, n));
    }, e;
  }
  function fv(e, t) {
    return Ne = e.exports, Kf.__wbindgen_wasm_module = t, Ti = null, Tr = null, Ne.__wbindgen_start(), Ne;
  }
  async function Kf(e) {
    if (Ne !== void 0) return Ne;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = uv();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: i } = await cv(await e, t);
    return fv(n, i);
  }
  const hv = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Fr = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let qs = false;
  async function Yf() {
    if (!qs) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Kf({
        module_or_path: hv
      }), qs = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), qs = true;
    }
  }
  async function Gc(e, t, n) {
    try {
      await Yf();
      const i = new li(e), l = new li(t), c = new Yo(n[0], n[1], 0);
      Ea(i, l, c);
      const f = [
        c.x,
        c.y
      ];
      return i.free(), l.free(), c.free(), f;
    } catch (i) {
      throw new Error(`Failed to transform coordinate: ${i instanceof Error ? i.message : String(i)}`);
    }
  }
  function dv(e, t) {
    const n = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(n * n + i * i);
  }
  function Wc(e, t) {
    const i = e.latitude * Math.PI / 180, l = t.latitude * Math.PI / 180, c = (t.latitude - e.latitude) * Math.PI / 180, f = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(i) * Math.cos(l) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  }
  async function pv(e, t, n = {}) {
    const { projection: i = Fr.CGCS2000_3_DEGREE, useHaversine: l = false } = n;
    if (l) return Wc(e, t);
    try {
      const c = await Gc(Fr.WGS84, i, [
        e.longitude,
        e.latitude
      ]), f = await Gc(Fr.WGS84, i, [
        t.longitude,
        t.latitude
      ]);
      return dv({
        x: c[0],
        y: c[1]
      }, {
        x: f[0],
        y: f[1]
      });
    } catch (c) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", c), Wc(e, t);
    }
  }
  b0 = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let n = 0;
    for (let i = 1; i < e.length; i++) n += await pv(e[i - 1], e[i], t);
    return n;
  };
  v0 = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  class Jf {
    constructor(t = {}) {
      __publicField(this, "referencePoint", null);
      __publicField(this, "localProjection", null);
      t.referencePoint && this.setReferencePoint(t.referencePoint, t.projection);
    }
    setReferencePoint(t, n) {
      this.referencePoint = t, this.localProjection = n || `+proj=tmerc +lat_0=${t.latitude} +lon_0=${t.longitude} +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs`;
    }
    async geographicToLocal(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      try {
        const n = new li(Fr.WGS84), i = new li(this.localProjection), l = new Yo(t.longitude, t.latitude, 0);
        Ea(n, i, l);
        const c = {
          x: l.x,
          y: l.y
        };
        return n.free(), i.free(), l.free(), c;
      } catch {
        return this.geographicToLocalFallback(t);
      }
    }
    async localToGeographic(t) {
      if (!this.referencePoint || !this.localProjection) throw new Error("Reference point not set. Call setReferencePoint() first.");
      try {
        const n = new li(this.localProjection), i = new li(Fr.WGS84), l = new Yo(t.x, t.y, 0);
        Ea(n, i, l);
        const c = {
          longitude: l.x,
          latitude: l.y
        };
        return n.free(), i.free(), l.free(), c;
      } catch {
        return this.localToGeographicFallback(t);
      }
    }
    geographicToLocalFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const n = 6371e3, i = this.referencePoint.latitude * Math.PI / 180, l = this.referencePoint.longitude * Math.PI / 180, c = t.latitude * Math.PI / 180, f = t.longitude * Math.PI / 180, h = n * (f - l) * Math.cos((i + c) / 2), p = n * (c - i);
      return {
        x: h,
        y: p
      };
    }
    localToGeographicFallback(t) {
      if (!this.referencePoint) throw new Error("Reference point not set");
      const n = 6371e3, i = this.referencePoint.latitude * Math.PI / 180, l = this.referencePoint.longitude * Math.PI / 180, c = (t.y / n + i) * 180 / Math.PI, f = (t.x / (n * Math.cos(i)) + l) * 180 / Math.PI;
      return {
        latitude: c,
        longitude: f
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
  new Jf();
  class gv {
    constructor(t) {
      __publicField(this, "state");
      __publicField(this, "config");
      __publicField(this, "coordinateTransformer");
      __publicField(this, "lastKalmanGain", null);
      this.config = {
        sigmaAcceleration: 0.1,
        initialPositionUncertainty: 20,
        initialVelocityUncertainty: 4,
        ...t
      }, this.coordinateTransformer = new Jf(), this.state = {
        position: {
          x: 0,
          y: 0
        },
        velocity: {
          x: 0,
          y: 0
        },
        covariance: new tn([
          [
            Math.pow(this.config.initialPositionUncertainty, 2),
            0,
            0,
            0
          ],
          [
            0,
            Math.pow(this.config.initialPositionUncertainty, 2),
            0,
            0
          ],
          [
            0,
            0,
            Math.pow(this.config.initialVelocityUncertainty, 2),
            0
          ],
          [
            0,
            0,
            0,
            Math.pow(this.config.initialVelocityUncertainty, 2)
          ]
        ]),
        timestamp: performance.now()
      };
    }
    async initialize(t) {
      if (t.latitude === 0 && t.longitude === 0) throw new Error("Invalid GPS coordinates: Cannot initialize Kalman filter with (0, 0)");
      if (!this.coordinateTransformer.isInitialized()) {
        const l = {
          longitude: t.longitude,
          latitude: t.latitude
        };
        this.coordinateTransformer.setReferencePoint(l);
      }
      const n = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      });
      this.state.position = {
        x: n.x,
        y: n.y
      }, this.state.timestamp = t.timestamp;
      const i = this.gpsAccuracyToSigma(t.accuracy);
      this.state.covariance = new tn([
        [
          i * i,
          0,
          0,
          0
        ],
        [
          0,
          i * i,
          0,
          0
        ],
        [
          0,
          0,
          Math.pow(this.config.initialVelocityUncertainty, 2),
          0
        ],
        [
          0,
          0,
          0,
          Math.pow(this.config.initialVelocityUncertainty, 2)
        ]
      ]);
    }
    async updateWithGPS(t) {
      if (t.latitude === 0 && t.longitude === 0) return console.warn("[KalmanFilter] Ignoring invalid GPS coordinates (0, 0)"), this.state;
      if (!this.coordinateTransformer.isInitialized()) return await this.initialize(t), this.state;
      const n = (t.timestamp - this.state.timestamp) / 1e3;
      return this.predict(n), await this.updateGPS(t), this.state.timestamp = t.timestamp, this.state;
    }
    updateWithIMU(t) {
      if (!this.coordinateTransformer.isInitialized()) return this.state;
      const n = (t.timestamp - this.state.timestamp) / 1e3;
      return this.predict(n, t.acceleration), this.state.timestamp = t.timestamp, this.state;
    }
    async getFilteredPosition() {
      if (!this.coordinateTransformer.isInitialized()) throw new Error("Kalman filter not initialized - cannot get filtered position");
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
      return this.lastKalmanGain || null;
    }
    predict(t, n) {
      const i = new tn([
        [
          1,
          0,
          t,
          0
        ],
        [
          0,
          1,
          0,
          t
        ],
        [
          0,
          0,
          1,
          0
        ],
        [
          0,
          0,
          0,
          1
        ]
      ]), l = new tn([
        [
          0.5 * t * t,
          0
        ],
        [
          0,
          0.5 * t * t
        ],
        [
          t,
          0
        ],
        [
          0,
          t
        ]
      ]), c = new tn([
        [
          n ? n.x : 0
        ],
        [
          n ? n.y : 0
        ]
      ]), f = this.config.sigmaAcceleration, h = new tn([
        [
          Math.pow(t, 4) / 4,
          0,
          Math.pow(t, 3) / 2,
          0
        ],
        [
          0,
          Math.pow(t, 4) / 4,
          0,
          Math.pow(t, 3) / 2
        ],
        [
          Math.pow(t, 3) / 2,
          0,
          t * t,
          0
        ],
        [
          0,
          Math.pow(t, 3) / 2,
          0,
          t * t
        ]
      ]).mul(f * f), p = new tn([
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
        ]
      ]), v = i.mmul(p).add(l.mmul(c)), g = i.mmul(this.state.covariance).mmul(i.transpose()).add(h);
      this.state.position = {
        x: v.get(0, 0),
        y: v.get(1, 0)
      }, this.state.velocity = {
        x: v.get(2, 0),
        y: v.get(3, 0)
      }, this.state.covariance = g;
    }
    async updateGPS(t) {
      const n = new tn([
        [
          1,
          0,
          0,
          0
        ],
        [
          0,
          1,
          0,
          0
        ]
      ]), i = await this.coordinateTransformer.geographicToLocal({
        longitude: t.longitude,
        latitude: t.latitude
      }), l = new tn([
        [
          i.x
        ],
        [
          i.y
        ]
      ]), c = this.gpsAccuracyToSigma(t.accuracy), f = new tn([
        [
          c * c,
          0
        ],
        [
          0,
          c * c
        ]
      ]), h = new tn([
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
        ]
      ]), p = n.mmul(h), v = n.mmul(this.state.covariance).mmul(n.transpose()).add(f), g = this.state.covariance.mmul(n.transpose()).mmul(iv(v));
      this.lastKalmanGain = g;
      const E = l.sub(p), P = h.add(g.mmul(E)), C = tn.eye(4).sub(g.mmul(n)).mmul(this.state.covariance);
      this.state.position = {
        x: P.get(0, 0),
        y: P.get(1, 0)
      }, this.state.velocity = {
        x: P.get(2, 0),
        y: P.get(3, 0)
      }, this.state.covariance = C;
    }
    gpsAccuracyToSigma(t) {
      return t / Math.sqrt(2 * Math.log(20));
    }
  }
  class mv {
    constructor(t, n = {}, i) {
      __publicField(this, "wrappedBackend");
      __publicField(this, "kalmanFilter");
      __publicField(this, "config");
      __publicField(this, "imuProvider", null);
      __publicField(this, "initialized", false);
      __publicField(this, "watchId", null);
      __publicField(this, "lastGPSReading", null);
      __publicField(this, "imuUpdateTimer", null);
      __publicField(this, "imuListenerId", null);
      __publicField(this, "imuCallback", null);
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "nextCallbackId", 1);
      this.wrappedBackend = t, this.imuProvider = i || null, this.config = {
        enableIMUFusion: false,
        imuUpdateInterval: 100,
        maxAge: 5e3,
        sigmaAcceleration: 1,
        initialPositionUncertainty: 20,
        initialVelocityUncertainty: 4,
        ...n
      }, this.kalmanFilter = new gv({
        sigmaAcceleration: this.config.sigmaAcceleration,
        initialPositionUncertainty: this.config.initialPositionUncertainty,
        initialVelocityUncertainty: this.config.initialVelocityUncertainty
      });
    }
    isIMUAvailable() {
      return this.imuProvider ? this.imuProvider.isSupported() : false;
    }
    async getPermissionStatus() {
      return this.wrappedBackend.getPermissionStatus();
    }
    async getCurrentPosition() {
      const t = await this.wrappedBackend.getCurrentPosition();
      return await this.applyKalmanFilter(t);
    }
    async watchPosition(t) {
      if (this.watchId !== null) throw new Error("Watch already active");
      const n = this.nextCallbackId++;
      return this.watchCallbacks.set(n, t), this.watchId = await this.wrappedBackend.watchPosition((i) => {
        (async () => {
          const l = await this.applyKalmanFilter(i);
          this.watchCallbacks.forEach((c) => c(l));
        })().catch((l) => {
          console.warn("[KalmanGeolocationBackend] Failed to process position update:", l);
        });
      }), this.config.enableIMUFusion && this.isIMUAvailable() ? this.startIMUFusion().catch((i) => {
        console.warn("[KalmanGeolocationBackend] Failed to start IMU fusion:", i);
      }) : this.config.enableIMUFusion && !this.isIMUAvailable() && console.warn("[KalmanGeolocationBackend] IMU fusion enabled but IMU not available, falling back to GPS-only"), n;
    }
    clearWatch(t) {
      this.stopIMUFusion(), this.watchCallbacks.delete(t), this.watchCallbacks.size === 0 && this.watchId !== null && (this.wrappedBackend.clearWatch(this.watchId), this.watchId = null, this.lastGPSReading = null);
    }
    setIMUCallback(t) {
      this.imuCallback = t;
    }
    updateWithIMU(t) {
      if (!this.config.enableIMUFusion || !this.lastGPSReading) return;
      const n = {
        acceleration: {
          ...t,
          z: 0
        },
        timestamp: performance.now()
      };
      this.kalmanFilter.updateWithIMU(n), this.imuCallback && this.imuCallback(n), this.updateCallbacksWithCurrentState();
    }
    getKalmanState() {
      return this.kalmanFilter.getState();
    }
    getLastKalmanGain() {
      return this.kalmanFilter.getLastKalmanGain();
    }
    async applyKalmanFilter(t) {
      const n = {
        latitude: t.latitude,
        longitude: t.longitude,
        accuracy: t.accuracy,
        timestamp: performance.now()
      };
      await this.kalmanFilter.updateWithGPS(n), this.lastGPSReading = t;
      let i;
      try {
        i = await this.kalmanFilter.getFilteredPosition();
      } catch (c) {
        console.warn("[KalmanGeolocationBackend] Filter not initialized, returning raw position:", c), i = {
          latitude: t.latitude,
          longitude: t.longitude
        };
      }
      let l = t.accuracy;
      try {
        const c = this.kalmanFilter.getState(), f = c.covariance.get(0, 0), h = c.covariance.get(1, 1);
        l = Math.sqrt(f + h) * Math.sqrt(2 * Math.log(20));
      } catch (c) {
        console.warn("[KalmanGeolocationBackend] Cannot calculate filtered accuracy, using original:", c);
      }
      return new Tn(i.latitude, i.longitude, Math.max(l, 1));
    }
    async updateCallbacksWithCurrentState() {
      if (this.watchCallbacks.size !== 0) try {
        const t = await this.kalmanFilter.getFilteredPosition(), n = this.kalmanFilter.getState(), i = n.covariance.get(0, 0), l = n.covariance.get(1, 1), c = Math.sqrt(i + l) * Math.sqrt(2 * Math.log(20)), f = new Tn(t.latitude, t.longitude, Math.max(c, 1));
        this.watchCallbacks.forEach((h) => h(f));
      } catch (t) {
        console.warn("[KalmanGeolocationBackend] Failed to update callbacks with current state:", t);
      }
    }
    async startIMUFusion() {
      if (this.imuListenerId === null) {
        if (!this.isIMUAvailable() || !this.config.enableIMUFusion) {
          console.warn("[KalmanGeolocationBackend] IMU fusion not available or disabled");
          return;
        }
        try {
          const t = await this.imuProvider.startAcceleration({
            frequency: 1e3 / (this.config.imuUpdateInterval ?? 100),
            normalizeToENU: true
          });
          if (t.isErr()) {
            console.warn("[KalmanGeolocationBackend] Failed to start IMU acceleration:", t.error);
            return;
          }
          this.imuListenerId = this.imuProvider.onAccelerationReading((n) => {
            this.updateWithIMU({
              x: n.x,
              y: n.y,
              z: n.z
            });
          }), console.info("[KalmanGeolocationBackend] IMU fusion started successfully");
        } catch (t) {
          console.error("[KalmanGeolocationBackend] Error starting IMU fusion:", t);
        }
      }
    }
    stopIMUFusion() {
      this.imuListenerId !== null && this.imuProvider && (this.imuProvider.removeEventListener(this.imuListenerId), this.imuListenerId = null), this.imuProvider && this.imuProvider.stopAcceleration(), this.imuUpdateTimer !== null && (clearInterval(this.imuUpdateTimer), this.imuUpdateTimer = null);
    }
  }
  wv = class {
    constructor(t) {
      __publicField(this, "permissionService");
      __publicField(this, "isInitialized", false);
      __publicField(this, "platformGeolocationProvider", null);
      __publicField(this, "imuProvider", null);
      __publicField(this, "ipBackend", null);
      __publicField(this, "kalmanBackend", null);
      __publicField(this, "isWatching", false);
      __publicField(this, "watchId", null);
      __publicField(this, "locationUpdateCallbacks", /* @__PURE__ */ new Map());
      __publicField(this, "lastKnownLocation", null);
      __publicField(this, "currentBackend", null);
      this.permissionService = t || new Vb(), this.ipBackend = new sv();
    }
    async isIMUAvailable() {
      try {
        const t = Ni();
        if (t.isErr()) return false;
        const n = t.value.getIMU();
        if (n.isErr()) return false;
        const i = n.value;
        return (await i.init()).isErr() ? false : i.isSupported();
      } catch (t) {
        return console.warn("[GeolocationManager] Error checking IMU availability:", t), false;
      }
    }
    async initialize(t) {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), x(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with location trail strategy");
      try {
        const n = Ni();
        if (n.isErr()) return console.warn("[GeolocationManager] Failed to get platform services, will try IP backend"), await this.initializeWithIPBackend();
        const i = n.value.getGeolocation();
        if (i.isErr()) return console.warn("[GeolocationManager] Failed to get geolocation provider, will try IP backend"), await this.initializeWithIPBackend();
        if (this.platformGeolocationProvider = i.value, (await this.platformGeolocationProvider.init()).isErr()) return console.warn("[GeolocationManager] Failed to initialize platform provider, will try IP backend"), await this.initializeWithIPBackend();
        this.permissionService.setPlatformProvider(this.platformGeolocationProvider);
        const c = await this.permissionService.getPermissionStatus();
        if (c.isErr()) return st(c.error, "GeolocationManager.initialize.permission"), console.warn("[GeolocationManager] Failed to get permission status, will try IP backend"), await this.initializeWithIPBackend();
        const f = c.value;
        if (f === "prompt" && t && (console.log("GPS Permission not granted, prompting user."), await t(f))) {
          const E = await this.platformGeolocationProvider.requestPermission();
          if (E.isErr()) return st(E.error, "GeolocationManager.initialize.requestPermission"), console.warn("[GeolocationManager] Failed to request permission, will try IP backend"), await this.initializeWithIPBackend();
        }
        const h = await this.isIMUAvailable(), p = Gb();
        console.info(`[GeolocationManager] IMU available: ${h}, Kalman filter enabled: ${p}`), console.info("[GeolocationManager] Attempting to get location via platform provider (GPS)");
        const v = await this.tryGetGPSLocation();
        if (v.isOk()) console.info("[GeolocationManager] Successfully got location via GPS"), this.lastKnownLocation = v.value, h && p ? (console.info("[GeolocationManager] Both GPS and IMU available, Kalman filter enabled, initializing Kalman filter"), await this.initializeWithKalmanBackend()) : h && !p ? (console.info("[GeolocationManager] IMU available but Kalman filter disabled by settings, using GPS-only mode"), this.currentBackend = "platform") : (console.info("[GeolocationManager] Using platform provider (GPS-only mode)"), this.currentBackend = "platform");
        else return console.warn("[GeolocationManager] Failed to get location via GPS, falling back to IP backend", v.error), await this.initializeWithIPBackend();
        return this.permissionService.addPermissionChangeListener((g) => {
          console.info(`[GeolocationManager] Permission changed to: ${g}`), g === "denied" && this.isWatching && this.watchId !== null && this.stopLocationUpdates(this.watchId);
        }), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using platform provider"), x(void 0);
      } catch {
        return console.warn("[GeolocationManager] Exception during platform initialization, will try IP backend"), this.initializeWithIPBackend();
      }
    }
    async tryGetGPSLocation() {
      if (!this.platformGeolocationProvider) return R(new je("No platform geolocation provider available", "no_platform_provider"));
      try {
        console.log("Trying to get the location via Geolocation API");
        const t = await this.platformGeolocationProvider.getCurrentPosition();
        if (t.isOk()) {
          const n = t.value;
          return x(new Tn(n.coords.latitude, n.coords.longitude, n.coords.accuracy));
        } else return console.log("Geolocation API Calling Failed"), R(new je("Failed to get location from platform provider", "platform_location_failed", t.error));
      } catch (t) {
        return R(new je("Exception while getting location from platform provider", "platform_location_exception", t));
      }
    }
    async initializeWithIPBackend() {
      if (console.info("[GeolocationManager] Initializing with IP backend as fallback"), !this.ipBackend) return R(new je("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Successfully got location via IP backend"), this.currentBackend = "ip", this.lastKnownLocation = t, this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using IP backend"), x(void 0);
      } catch (t) {
        const n = new je("Failed to initialize geolocation manager with IP backend", "ip_backend_failed", t);
        return st(n, "GeolocationManager.initializeWithIPBackend"), R(n);
      }
    }
    async initializeWithKalmanBackend() {
      if (console.info("[GeolocationManager] Initializing with Kalman backend (GPS + IMU fusion)"), !this.platformGeolocationProvider) return R(new je("Platform geolocation provider not available", "platform_provider_unavailable"));
      try {
        const t = Ni();
        if (t.isErr()) return console.warn("[GeolocationManager] Failed to get platform services for IMU, falling back to GPS-only"), this.currentBackend = "platform", x(void 0);
        const n = t.value.getIMU();
        if (n.isErr()) return console.warn("[GeolocationManager] Failed to get IMU provider, falling back to GPS-only"), this.currentBackend = "platform", x(void 0);
        this.imuProvider = n.value;
        const i = {
          getPermissionStatus: async () => {
            const l = await this.permissionService.getPermissionStatus();
            return l.isOk() ? l.value : "unknown";
          },
          getCurrentPosition: async () => {
            const l = await this.platformGeolocationProvider.getCurrentPosition();
            if (l.isOk()) return new Tn(l.value.coords.latitude, l.value.coords.longitude, l.value.coords.accuracy);
            throw new Error("Failed to get position");
          },
          watchPosition: async (l) => {
            const c = await this.platformGeolocationProvider.watchPosition((f) => {
              l(new Tn(f.coords.latitude, f.coords.longitude, f.coords.accuracy));
            });
            if (c.isErr()) throw new Error("Failed to watch position");
            return c.value;
          },
          clearWatch: (l) => {
            this.platformGeolocationProvider.clearWatch(l);
          }
        };
        return this.kalmanBackend = new mv(i, {
          enableIMUFusion: true,
          imuUpdateInterval: 100,
          maxAge: 5e3,
          sigmaAcceleration: 1,
          initialPositionUncertainty: 20,
          initialVelocityUncertainty: 4
        }, this.imuProvider), this.currentBackend = "kalman", console.info("[GeolocationManager] Kalman backend initialized successfully"), x(void 0);
      } catch (t) {
        return console.warn("[GeolocationManager] Failed to initialize Kalman backend, falling back to GPS-only:", t), this.currentBackend = "platform", x(void 0);
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new je("Geolocation manager not initialized", "not_initialized");
        return st(t, "GeolocationManager.getCurrentLocation"), R(t);
      }
      if (this.currentBackend === "kalman" && this.kalmanBackend) return this.getLocationFromKalmanBackend();
      if (this.currentBackend === "platform" && this.platformGeolocationProvider) return this.getLocationFromPlatformProvider();
      if (this.currentBackend === "ip" && this.ipBackend) return this.getLocationFromIPBackend();
      if (console.warn("[GeolocationManager] No backend determined, attempting fallback strategy"), this.kalmanBackend) {
        const t = await this.getLocationFromKalmanBackend();
        if (t.isOk()) return this.currentBackend = "kalman", t;
      }
      if (this.platformGeolocationProvider) {
        const t = await this.getLocationFromPlatformProvider();
        if (t.isOk()) return this.currentBackend = "platform", t;
      }
      if (this.ipBackend) {
        const t = await this.getLocationFromIPBackend();
        if (t.isOk()) return this.currentBackend = "ip", t;
      }
      return R(new je("No working geolocation backend available", "no_working_backend"));
    }
    async getLocationFromKalmanBackend() {
      if (!this.kalmanBackend) return R(new je("Kalman backend not available", "kalman_backend_unavailable"));
      try {
        const t = await this.kalmanBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Location retrieved from Kalman backend"), this.doLocationUpdate(t), x(t);
      } catch (t) {
        const n = Ot(t, "Failed to get location from Kalman backend");
        return st(n, "GeolocationManager.getLocationFromKalmanBackend"), R(new je("Failed to get location from Kalman backend", "kalman_backend_failed", n));
      }
    }
    async getLocationFromPlatformProvider() {
      if (!this.platformGeolocationProvider) return R(new je("Platform geolocation provider not available", "platform_provider_unavailable"));
      const t = await this.platformGeolocationProvider.getCurrentPosition();
      if (t.isOk()) {
        const n = t.value, i = new Tn(n.coords.latitude, n.coords.longitude, n.coords.accuracy);
        return console.info("[GeolocationManager] Location retrieved from platform provider"), this.doLocationUpdate(i), x(i);
      } else return st(t.error, "GeolocationManager.getLocationFromPlatformProvider"), R(new je("Failed to get location from platform provider", "platform_provider_failed", t.error));
    }
    async getLocationFromIPBackend() {
      if (!this.ipBackend) return R(new je("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Location retrieved from IP backend"), this.doLocationUpdate(t), x(t);
      } catch (t) {
        const n = Ot(t, "Failed to get location from IP backend");
        return st(n, "GeolocationManager.getLocationFromIPBackend"), R(new je("Failed to get location from IP backend", "ip_backend_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new je("Geolocation manager not initialized", "not_initialized");
        return st(n, "GeolocationManager.startLocationUpdates"), R(n);
      }
      if (console.info("[GeolocationManager] Starting location updates"), this.currentBackend === "kalman" && this.kalmanBackend) return this.startKalmanLocationUpdates(t);
      if (this.currentBackend === "platform" && this.platformGeolocationProvider) return this.startPlatformLocationUpdates(t);
      if (this.currentBackend === "ip" && this.ipBackend) return this.startIPLocationUpdates(t);
      if (console.warn("[GeolocationManager] No backend determined, attempting fallback strategy"), this.kalmanBackend) {
        const n = await this.startKalmanLocationUpdates(t);
        if (n.isOk()) return this.currentBackend = "kalman", n;
      }
      if (this.platformGeolocationProvider) {
        const n = await this.startPlatformLocationUpdates(t);
        if (n.isOk()) return this.currentBackend = "platform", n;
      }
      if (this.ipBackend) {
        const n = await this.startIPLocationUpdates(t);
        if (n.isOk()) return this.currentBackend = "ip", n;
      }
      return R(new je("No working geolocation backend available for location updates", "no_working_backend_for_updates"));
    }
    async startKalmanLocationUpdates(t) {
      if (!this.kalmanBackend) return R(new je("Kalman backend not available", "kalman_backend_unavailable"));
      try {
        const n = await this.kalmanBackend.watchPosition((i) => {
          this.lastKnownLocation = i, this.doLocationUpdate(i), t(i);
        });
        return console.info("[GeolocationManager] Location updates started via Kalman backend"), this.isWatching = true, this.watchId = n, x(n);
      } catch (n) {
        const i = Ot(n, "Failed to start location updates via Kalman backend");
        return st(i, "GeolocationManager.startKalmanLocationUpdates"), R(new je("Failed to start location updates via Kalman backend", "kalman_watch_failed", i));
      }
    }
    async startPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return R(new je("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = await this.platformGeolocationProvider.watchPosition((i) => {
        const l = new Tn(i.coords.latitude, i.coords.longitude, i.coords.accuracy);
        this.doLocationUpdate(l), t(l);
      });
      return n.isOk() ? (console.info("[GeolocationManager] Location updates started via platform provider"), this.isWatching = true, this.watchId = n.value, x(n.value)) : R(new je("Failed to start location updates via platform provider", "platform_watch_failed", n.error));
    }
    async startIPLocationUpdates(t) {
      if (!this.ipBackend) return R(new je("IP backend not available", "ip_backend_unavailable"));
      try {
        const n = await this.ipBackend.watchPosition((i) => {
          this.lastKnownLocation = i, this.doLocationUpdate(i), t(i);
        });
        return console.info("[GeolocationManager] Location updates started via IP backend"), this.isWatching = true, this.watchId = n, x(n);
      } catch (n) {
        const i = Ot(n, "Failed to start location updates via IP backend");
        return st(i, "GeolocationManager.startIPLocationUpdates"), R(new je("Failed to start location updates via IP backend", "ip_watch_failed", i));
      }
    }
    stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new je("Geolocation manager not initialized", "not_initialized");
        return st(n, "GeolocationManager.stopLocationUpdates"), R(n);
      }
      if (console.info("[GeolocationManager] Stopping location updates"), this.currentBackend === "kalman" && this.kalmanBackend) return this.stopKalmanLocationUpdates(t);
      if (this.currentBackend === "platform" && this.platformGeolocationProvider) return this.stopPlatformLocationUpdates(t);
      if (this.currentBackend === "ip" && this.ipBackend) return this.stopIPLocationUpdates(t);
      {
        let n = null;
        if (this.kalmanBackend) {
          const i = this.stopKalmanLocationUpdates(t);
          if (i.isOk()) return i;
          n = i.error;
        }
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
        return R(n || new je("No working geolocation backend available for stopping updates", "no_working_backend_for_stop"));
      }
    }
    stopKalmanLocationUpdates(t) {
      if (!this.kalmanBackend) return R(new je("Kalman backend not available", "kalman_backend_unavailable"));
      try {
        return this.kalmanBackend.clearWatch(t), console.info("[GeolocationManager] Location updates stopped via Kalman backend"), this.isWatching = false, this.watchId = null, x(void 0);
      } catch (n) {
        const i = Ot(n, "Failed to stop location updates via Kalman backend");
        return st(i, "GeolocationManager.stopKalmanLocationUpdates"), R(new je("Failed to stop location updates via Kalman backend", "kalman_clear_watch_failed", i));
      }
    }
    stopPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return R(new je("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = this.platformGeolocationProvider.clearWatch(t);
      return n.isOk() ? (console.info("[GeolocationManager] Location updates stopped via platform provider"), this.isWatching = false, this.watchId = null, x(void 0)) : R(new je("Failed to stop location updates via platform provider", "platform_clear_watch_failed", n.error));
    }
    stopIPLocationUpdates(t) {
      if (!this.ipBackend) return R(new je("IP backend not available", "ip_backend_unavailable"));
      try {
        return this.ipBackend.clearWatch(t), console.info("[GeolocationManager] Location updates stopped via IP backend"), this.isWatching = false, this.watchId = null, x(void 0);
      } catch (n) {
        const i = Ot(n, "Failed to stop location updates via IP backend");
        return st(i, "GeolocationManager.stopIPLocationUpdates"), R(new je("Failed to stop location updates via IP backend", "ip_clear_watch_failed", i));
      }
    }
    isServiceRunning() {
      return this.isWatching;
    }
    isUsingGPS() {
      return this.currentBackend === "platform" || this.currentBackend === "kalman";
    }
    getCurrentBackend() {
      return this.currentBackend;
    }
    getLastKnownLocation() {
      return this.lastKnownLocation ? this.lastKnownLocation : (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new Tn(0, 0));
    }
    addLocationListener(t) {
      const n = +`${Date.now()} + ${Math.floor(Math.random() * 1e4)}`;
      return this.locationUpdateCallbacks.set(n, t), n;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    doLocationUpdate(t) {
      this.lastKnownLocation = Ct(t), this.locationUpdateCallbacks.forEach((n) => {
        n(Ct(t));
      });
    }
    getPermissionStatus() {
      return this.permissionService.currentPermission;
    }
    async refreshBackend() {
      return x(void 0);
    }
    getLastKalmanGain() {
      return this.currentBackend === "kalman" && this.kalmanBackend ? this.kalmanBackend.getLastKalmanGain() : null;
    }
  };
  class Ao extends xi {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", sr.UPDATE_SERVICE);
      this.code = n, this.name = "ImuError";
    }
  }
  class Ye extends Ao {
    constructor(t, n, i) {
      super(t, n, i), this.name = "ImuUpdateServiceError";
    }
  }
  class yv {
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
    async initialize(t) {
      if (this.isInitialized) return console.info("[ImuOrientationManager] Already initialized"), x(void 0);
      if (console.info("[ImuOrientationManager] Initializing IMU and orientation services"), DeviceMotionEvent.requestPermission) try {
        await DeviceMotionEvent.requestPermission();
      } catch {
        if (!await t("permission.imu.required")) return x();
        if (console.info("[IMU Permission] IOS 13+ Mobile device detected, requesting IMU permission on DeviceMotion"), await DeviceMotionEvent.requestPermission() !== "granted") return console.warn("[IMU Permission] Device motion permission denied"), x();
      }
      if (DeviceOrientationEvent.requestPermission) try {
        await DeviceOrientationEvent.requestPermission();
      } catch {
        if (!await t("permission.imu.required")) return x();
        if (console.info("[IMU Permission] Requesting device orientation permission"), await DeviceOrientationEvent.requestPermission() !== "granted") return console.warn("[IMU Permission] Device orientation permission denied"), x();
      }
      try {
        const n = Ni();
        if (n.isErr()) return R(new Ye("Failed to get platform services", "platform_services_failed", n.error));
        const i = n.value.getDeviceOrientation();
        if (i.isOk()) {
          this.orientationProvider = i.value;
          const c = await this.orientationProvider.init();
          if (c.isErr()) console.warn("[ImuOrientationManager] Failed to initialize orientation provider:", c.error);
          else {
            const f = await this.orientationProvider.getCurrentOrientation();
            f.isOk() && f.value && (this.lastKnownOrientation = f.value);
          }
        } else console.warn("[ImuOrientationManager] No orientation provider available");
        const l = n.value.getIMU();
        if (l.isOk()) {
          this.motionProvider = l.value;
          const c = await this.motionProvider.init();
          if (c.isErr()) console.warn("[ImuOrientationManager] Failed to initialize motion provider:", c.error);
          else {
            const f = await this.motionProvider.getAccelerationReading();
            f.isOk() && f.value && (this.lastKnownAcceleration = f.value);
            const h = await this.motionProvider.getGyroscopeReading();
            h.isOk() && h.value && (this.lastKnownGyroscope = h.value);
          }
        } else console.warn("[ImuOrientationManager] No motion provider available");
        return this.isInitialized = true, console.info("[ImuOrientationManager] Initialization complete"), x(void 0);
      } catch (n) {
        const i = Ot(n, "Exception during IMU initialization");
        return st(i, "ImuOrientationManager.initialize"), R(new Ye("Initialization exception", "initialization_exception", i));
      }
    }
    async getCurrentOrientation() {
      if (!this.isInitialized) return R(new Ye("Manager not initialized", "not_initialized"));
      if (!this.orientationProvider) return R(new Ye("Orientation provider unavailable", "no_orientation_provider"));
      try {
        const t = await this.orientationProvider.getCurrentOrientation();
        return t.isOk() ? (t.value && (this.lastKnownOrientation = Ct(t.value), this.notifyOrientationListeners(t.value)), x(t.value)) : R(new Ye("Failed to get orientation", "get_orientation_failed", t.error));
      } catch (t) {
        const n = Ot(t, "Exception getting orientation");
        return st(n, "ImuOrientationManager.getCurrentOrientation"), R(new Ye("Orientation exception", "orientation_exception", n));
      }
    }
    async startOrientationUpdates(t) {
      if (!this.isInitialized) return R(new Ao("Initialisation exception", "initialisation_exception", Error("Cannot update without being initialised")));
      if (!this.orientationProvider) return R(new Ye("Orientation provider unavailable", "no_orientation_provider"));
      try {
        if (this.orientationListenerCount === 0) {
          const l = await this.orientationProvider.start();
          if (l.isErr()) return R(new Ye("Failed to start orientation provider", "start_orientation_failed", l.error));
        }
        const n = (l) => {
          this.doOrientationUpdate(l), t(l);
        }, i = this.orientationProvider.onOrientationChange(n);
        return this.orientationListeners.set(i, t), this.orientationListenerCount++, console.info("[ImuOrientationManager] Orientation updates started"), x(i);
      } catch (n) {
        const i = Ot(n, "Exception starting orientation updates");
        return st(i, "ImuOrientationManager.startOrientationUpdates"), R(new Ye("Start orientation exception", "start_orientation_exception", i));
      }
    }
    stopOrientationUpdates(t) {
      if (!this.orientationProvider) return x(void 0);
      try {
        const n = this.orientationProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove orientation listener from provider:", n.error), this.orientationListeners.delete(t), this.orientationListenerCount > 0 && this.orientationListenerCount--, this.orientationListenerCount === 0 && (this.orientationProvider.stop(), console.info("[ImuOrientationManager] Orientation provider stopped")), console.info("[ImuOrientationManager] Orientation listener removed"), x(void 0);
      } catch (n) {
        const i = Ot(n, "Exception stopping orientation update");
        return st(i, "ImuOrientationManager.stopOrientationUpdates"), R(new Ye("Stop orientation exception", "stop_orientation_exception", i));
      }
    }
    isOrientationServiceRunning() {
      return this.orientationListenerCount > 0;
    }
    getLastKnownOrientation() {
      return this.lastKnownOrientation ? Ct(this.lastKnownOrientation) : null;
    }
    async getCurrentAcceleration() {
      if (!this.isInitialized) return R(new Ye("Manager not initialized", "not_initialized"));
      if (!this.motionProvider) return R(new Ye("Motion provider unavailable", "no_motion_provider"));
      try {
        const t = await this.motionProvider.getAccelerationReading();
        return t.isOk() ? (t.value && (this.lastKnownAcceleration = Ct(t.value), this.notifyAccelerationListeners(t.value)), x(t.value)) : R(new Ye("Failed to get acceleration", "get_acceleration_failed", t.error));
      } catch (t) {
        const n = Ot(t, "Exception getting acceleration");
        return st(n, "ImuOrientationManager.getCurrentAcceleration"), R(new Ye("Acceleration exception", "acceleration_exception", n));
      }
    }
    async startAccelerationUpdates(t = {}, n) {
      if (!this.isInitialized) return R(new Ao("Initialisation exception", "initialisation_exception", Error("Cannot update without being initialised")));
      if (!this.motionProvider) return R(new Ye("Motion provider unavailable", "no_motion_provider"));
      try {
        if (this.accelerationListenerCount === 0) {
          const c = await this.motionProvider.startAcceleration(t);
          if (c.isErr()) return R(new Ye("Failed to start acceleration provider", "start_acceleration_failed", c.error));
        }
        const i = (c) => {
          if (!this.isValidIMUReading(c)) {
            console.warn("[ImuOrientationManager] Invalid acceleration data received:", c);
            return;
          }
          this.doAccelerationUpdate(c);
          try {
            n(c);
          } catch (f) {
            console.error("[ImuOrientationManager] Error in user acceleration callback:", f);
          }
        }, l = this.motionProvider.onAccelerationReading(i);
        return this.accelerationListeners.set(l, n), this.accelerationListenerCount++, console.info("[ImuOrientationManager] Acceleration updates started"), x(l);
      } catch (i) {
        const l = Ot(i, "Exception starting acceleration updates");
        return st(l, "ImuOrientationManager.startAccelerationUpdates"), R(new Ye("Start acceleration exception", "start_acceleration_exception", l));
      }
    }
    stopAccelerationUpdates(t) {
      if (!this.motionProvider) return x(void 0);
      try {
        const n = this.motionProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove acceleration listener from provider:", n.error), this.accelerationListeners.delete(t), this.accelerationListenerCount > 0 && this.accelerationListenerCount--, this.accelerationListenerCount === 0 && (this.motionProvider.stopAcceleration(), this.lastKnownAcceleration = null, console.info("[ImuOrientationManager] Acceleration provider stopped")), console.info("[ImuOrientationManager] Acceleration listener removed"), x(void 0);
      } catch (n) {
        const i = Ot(n, "Exception stopping acceleration update");
        return st(i, "ImuOrientationManager.stopAccelerationUpdates"), R(new Ye("Stop acceleration exception", "stop_acceleration_exception", i));
      }
    }
    isAccelerationServiceRunning() {
      return this.accelerationListenerCount > 0;
    }
    getLastKnownAcceleration() {
      return this.lastKnownAcceleration ? Ct(this.lastKnownAcceleration) : null;
    }
    async getCurrentGyroscope() {
      if (!this.isInitialized) return R(new Ye("Manager not initialized", "not_initialized"));
      if (!this.motionProvider) return R(new Ye("Motion provider unavailable", "no_motion_provider"));
      try {
        const t = await this.motionProvider.getGyroscopeReading();
        return t.isOk() ? (t.value && (this.lastKnownGyroscope = Ct(t.value), this.notifyGyroscopeListeners(t.value)), x(t.value)) : R(new Ye("Failed to get gyroscope", "get_gyroscope_failed", t.error));
      } catch (t) {
        const n = Ot(t, "Exception getting gyroscope");
        return st(n, "ImuOrientationManager.getCurrentGyroscope"), R(new Ye("Gyroscope exception", "gyroscope_exception", n));
      }
    }
    async startGyroscopeUpdates(t = {}, n) {
      if (!this.isInitialized) return R(new Ao("Initialisation exception", "initialisation_exception", Error("Cannot update without being initialised")));
      if (!this.motionProvider) return R(new Ye("Motion provider unavailable", "no_motion_provider"));
      try {
        if (this.gyroscopeListenerCount === 0) {
          const c = await this.motionProvider.startGyroscope(t);
          if (c.isErr()) return R(new Ye("Failed to start gyroscope provider", "start_gyroscope_failed", c.error));
        }
        const i = (c) => {
          if (!this.isValidIMUReading(c)) {
            console.warn("[ImuOrientationManager] Invalid gyroscope data received:", c);
            return;
          }
          this.doGyroscopeUpdate(c);
          try {
            n(c);
          } catch (f) {
            console.error("[ImuOrientationManager] Error in user gyroscope callback:", f);
          }
        }, l = this.motionProvider.onGyroscopeReading(i);
        return this.gyroscopeListeners.set(l, n), this.gyroscopeListenerCount++, console.info("[ImuOrientationManager] Gyroscope updates started"), x(l);
      } catch (i) {
        const l = Ot(i, "Exception starting gyroscope updates");
        return st(l, "ImuOrientationManager.startGyroscopeUpdates"), R(new Ye("Start gyroscope exception", "start_gyroscope_exception", l));
      }
    }
    stopGyroscopeUpdates(t) {
      if (!this.motionProvider) return x(void 0);
      try {
        const n = this.motionProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove gyroscope listener from provider:", n.error), this.gyroscopeListeners.delete(t), this.gyroscopeListenerCount > 0 && this.gyroscopeListenerCount--, this.gyroscopeListenerCount === 0 && (this.motionProvider.stopGyroscope(), this.lastKnownGyroscope = null, console.info("[ImuOrientationManager] Gyroscope provider stopped")), console.info("[ImuOrientationManager] Gyroscope listener removed"), x(void 0);
      } catch (n) {
        const i = Ot(n, "Exception stopping gyroscope update");
        return st(i, "ImuOrientationManager.stopGyroscopeUpdates"), R(new Ye("Stop gyroscope exception", "stop_gyroscope_exception", i));
      }
    }
    isGyroscopeServiceRunning() {
      return this.gyroscopeListenerCount > 0;
    }
    getLastKnownGyroscope() {
      return this.lastKnownGyroscope ? Ct(this.lastKnownGyroscope) : null;
    }
    async getCurrentMotion() {
      const [t, n] = await Promise.all([
        this.getCurrentAcceleration(),
        this.getCurrentGyroscope()
      ]);
      return t.isErr() && n.isErr() ? R(t.error) : x({
        acceleration: t.isOk() ? t.value : null,
        gyroscope: n.isOk() ? n.value : null
      });
    }
    getLastKnownMotion() {
      return !this.lastKnownAcceleration && !this.lastKnownGyroscope ? null : {
        acceleration: this.lastKnownAcceleration ? Ct(this.lastKnownAcceleration) : null,
        gyroscope: this.lastKnownGyroscope ? Ct(this.lastKnownGyroscope) : null
      };
    }
    isMotionServiceRunning() {
      return this.isAccelerationServiceRunning() || this.isGyroscopeServiceRunning();
    }
    isSupported() {
      var _a2, _b2;
      if (!this.isInitialized) {
        const t = Ni();
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
      this.lastKnownOrientation = Ct(t), this.notifyOrientationListeners(t);
    }
    doAccelerationUpdate(t) {
      this.lastKnownAcceleration = Ct(t), this.notifyAccelerationListeners(t);
    }
    doGyroscopeUpdate(t) {
      this.lastKnownGyroscope = Ct(t), this.notifyGyroscopeListeners(t);
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
      const { x: n, y: i, z: l, timestamp: c } = t;
      return typeof n == "number" && !isNaN(n) && isFinite(n) && typeof i == "number" && !isNaN(i) && isFinite(i) && typeof l == "number" && !isNaN(l) && isFinite(l) && typeof c == "number" && !isNaN(c) && isFinite(c) && c > 0;
    }
    isValidOrientationReading(t) {
      if (!t || typeof t != "object") return false;
      const { alpha: n, beta: i, gamma: l, timestamp: c } = t;
      return typeof n == "number" && !isNaN(n) && isFinite(n) && typeof i == "number" && !isNaN(i) && isFinite(i) && typeof l == "number" && !isNaN(l) && isFinite(l) && typeof c == "number" && !isNaN(c) && isFinite(c) && c > 0;
    }
  }
  br = new yv();
  let Xf;
  const bs = (e) => Xf = e, Zf = /* @__PURE__ */ Symbol();
  function Ia(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var xr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(xr || (xr = {}));
  function Qf() {
    const e = tu(true), t = e.run(() => Ut({}));
    let n = [], i = [];
    const l = Ca({
      install(c) {
        bs(l), l._a = c, c.provide(Zf, l), c.config.globalProperties.$pinia = l, i.forEach((f) => n.push(f)), i = [];
      },
      use(c) {
        return this._a ? n.push(c) : i.push(c), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return l;
  }
  const eh = () => {
  };
  function Bc(e, t, n, i = eh) {
    e.add(t);
    const l = () => {
      e.delete(t) && i();
    };
    return !n && nu() && Sh(l), l;
  }
  function zi(e, ...t) {
    e.forEach((n) => {
      n(...t);
    });
  }
  const bv = (e) => e(), $c = /* @__PURE__ */ Symbol(), Ks = /* @__PURE__ */ Symbol();
  function Ta(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, i) => e.set(i, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const i = t[n], l = e[n];
      Ia(l) && Ia(i) && e.hasOwnProperty(n) && !at(i) && !jn(i) ? e[n] = Ta(l, i) : e[n] = i;
    }
    return e;
  }
  const vv = /* @__PURE__ */ Symbol();
  function Ev(e) {
    return !Ia(e) || !Object.prototype.hasOwnProperty.call(e, vv);
  }
  const { assign: ti } = Object;
  function Iv(e) {
    return !!(at(e) && e.effect);
  }
  function Tv(e, t, n, i) {
    const { state: l, actions: c, getters: f } = t, h = n.state.value[e];
    let p;
    function v() {
      h || (n.state.value[e] = l ? l() : {});
      const g = Xh(n.state.value[e]);
      return ti(g, c, Object.keys(f || {}).reduce((E, P) => (E[P] = Ca(za(() => {
        bs(n);
        const M = n._s.get(e);
        return f[P].call(M, M);
      })), E), {}));
    }
    return p = th(e, v, t, n, i, true), p;
  }
  function th(e, t, n = {}, i, l, c) {
    let f;
    const h = ti({
      actions: {}
    }, n), p = {
      deep: true
    };
    let v, g, E = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set(), M;
    const C = i.state.value[e];
    !c && !C && (i.state.value[e] = {}), Ut({});
    let k;
    function se(fe) {
      let ee;
      v = g = false, typeof fe == "function" ? (fe(i.state.value[e]), ee = {
        type: xr.patchFunction,
        storeId: e,
        events: M
      }) : (Ta(i.state.value[e], fe), ee = {
        type: xr.patchObject,
        payload: fe,
        storeId: e,
        events: M
      });
      const me = k = /* @__PURE__ */ Symbol();
      Eu().then(() => {
        k === me && (v = true);
      }), g = true, zi(E, ee, i.state.value[e]);
    }
    const te = c ? function() {
      const { state: ee } = n, me = ee ? ee() : {};
      this.$patch((Pe) => {
        ti(Pe, me);
      });
    } : eh;
    function H() {
      f.stop(), E.clear(), P.clear(), i._s.delete(e);
    }
    const ie = (fe, ee = "") => {
      if ($c in fe) return fe[Ks] = ee, fe;
      const me = function() {
        bs(i);
        const Pe = Array.from(arguments), he = /* @__PURE__ */ new Set(), Ue = /* @__PURE__ */ new Set();
        function ct(Re) {
          he.add(Re);
        }
        function Bt(Re) {
          Ue.add(Re);
        }
        zi(P, {
          args: Pe,
          name: me[Ks],
          store: pe,
          after: ct,
          onError: Bt
        });
        let Ke;
        try {
          Ke = fe.apply(this && this.$id === e ? this : pe, Pe);
        } catch (Re) {
          throw zi(Ue, Re), Re;
        }
        return Ke instanceof Promise ? Ke.then((Re) => (zi(he, Re), Re)).catch((Re) => (zi(Ue, Re), Promise.reject(Re))) : (zi(he, Ke), Ke);
      };
      return me[$c] = true, me[Ks] = ee, me;
    }, G = {
      _p: i,
      $id: e,
      $onAction: Bc.bind(null, P),
      $patch: se,
      $reset: te,
      $subscribe(fe, ee = {}) {
        const me = Bc(E, fe, ee.detached, () => Pe()), Pe = f.run(() => Ji(() => i.state.value[e], (he) => {
          (ee.flush === "sync" ? g : v) && fe({
            storeId: e,
            type: xr.direct,
            events: M
          }, he);
        }, ti({}, p, ee)));
        return me;
      },
      $dispose: H
    }, pe = rs(G);
    i._s.set(e, pe);
    const re = (i._a && i._a.runWithContext || bv)(() => i._e.run(() => (f = tu()).run(() => t({
      action: ie
    }))));
    for (const fe in re) {
      const ee = re[fe];
      if (at(ee) && !Iv(ee) || jn(ee)) c || (C && Ev(ee) && (at(ee) ? ee.value = C[fe] : Ta(ee, C[fe])), i.state.value[e][fe] = ee);
      else if (typeof ee == "function") {
        const me = ie(ee, fe);
        re[fe] = me, h.actions[fe] = ee;
      }
    }
    return ti(pe, re), ti(Ce(pe), re), Object.defineProperty(pe, "$state", {
      get: () => i.state.value[e],
      set: (fe) => {
        se((ee) => {
          ti(ee, fe);
        });
      }
    }), i._p.forEach((fe) => {
      ti(pe, f.run(() => fe({
        store: pe,
        app: i._a,
        pinia: i,
        options: h
      })));
    }), C && c && n.hydrate && n.hydrate(pe.$state, C), v = true, g = true, pe;
  }
  E0 = function(e, t, n) {
    let i;
    const l = typeof t == "function";
    i = l ? n : t;
    function c(f, h) {
      const p = kd();
      return f = f || (p ? Nr(Zf, null) : null), f && bs(f), f = Xf, f._s.has(e) || (l ? th(e, t, i, f) : Tv(e, i, f)), f._s.get(e);
    }
    return c.$id = e, c;
  };
  let zc, _a, _v, Sv, mo, Ov, Av, Pv, Mv, Rv, Nv, kv, Lv, Cv, Fv, xv, Dv, Uv, jv, Gv, Wv, Bv, zv, el;
  zc = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a2;
        const e = mf((await xs(async () => {
          const { default: n } = await import("./App-nJgzJu0w.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3]), import.meta.url)).default);
        e.use(Qf()), e.use((await xs(async () => {
          const { default: n } = await import("./index-DJeoizFU.js").then(async (m) => {
            await m.__tla;
            return m;
          }).then((i) => i.w);
          return {
            default: n
          };
        }, __vite__mapDeps([4,2,1,5]), import.meta.url)).default), e.use((await xs(async () => {
          const { i18n: n } = await import("./index-pVsMOBgo.js");
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
        await Yf();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        let e = false;
        try {
          e = Rc();
        } catch {
        }
        try {
          e && console.time("Platform services initialise");
          const t = Ni();
          if (t.isErr()) throw t.error;
          const i = t.value.getStorage();
          if (i.isErr()) throw i.error;
          const l = await i.value.init();
          if (l.isErr()) throw l.error;
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
          e = Rc();
        } catch {
        }
        try {
          if (!Ni()) throw new Error("Platform services not initialized");
          const n = new wv();
          e && console.time("Geolocation service initialise"), await n.initialize(async (i) => {
            if (Hb()) return;
            const l = i === "prompt" ? "permission.location.prompt" : "permission.location.required";
            return window.permissionConfirm ? window.permissionConfirm(l) : confirm(l);
          }), e && console.timeEnd("Geolocation service initialise"), e && console.time("Geolocation service start"), await n.startLocationUpdates(() => {
          }), e && console.timeEnd("Geolocation service start"), e && console.info("[Geolocation] Requesting IMU permissions as temporary fix"), window.GeolocationManager = n, console.info("[Geolocation] Unified geolocation service initialized successfully using platform providers");
        } catch (t) {
          return console.error("[Geolocation] Failed to initialize geolocation service:", t), Promise.reject(t instanceof Error ? t : new Error(String(t)));
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
          const e = await br.initialize(async () => window.permissionConfirm ? window.permissionConfirm("permission.imu.required") : confirm("permission.imu.required"));
          if (e.isErr()) throw e.error;
          await br.startOrientationUpdates(() => {
          }), await br.startAccelerationUpdates({}, () => {
          }), await br.startGyroscopeUpdates({}, () => {
          }), console.timeEnd("IMU & Orientation service initialise"), console.info("[IMU & Orientation] Service initialized successfully with initial values"), window.ImuOrientationManager = br;
        } catch (e) {
          return console.error("[IMU & Orientation] Failed to initialize service:", e), Promise.reject(e instanceof Error ? e : new Error(String(e)));
        }
      },
      dependencies: [
        "platform-services"
      ]
    }
  ];
  I0 = cb;
  T0 = lb;
  _a = {
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
  _v = () => {
    try {
      const t = localStorage.getItem("interface-language");
      if (t && _a[t]) return t;
    } catch {
    }
    return navigator.language.startsWith("zh") ? "zh-CN" : "en";
  };
  Sv = _v();
  mo = (e) => _a[Sv][e] || _a.en[e] || e;
  Ov = {
    class: "splash-container"
  };
  Av = {
    class: "splash-content"
  };
  Pv = {
    key: 0,
    class: "loading-section"
  };
  Mv = {
    class: "progress-container"
  };
  Rv = {
    class: "progress-bar"
  };
  Nv = {
    class: "progress-text"
  };
  kv = {
    class: "loading-details"
  };
  Lv = {
    class: "current-module"
  };
  Cv = {
    key: 1,
    class: "error-section"
  };
  Fv = {
    class: "error-message"
  };
  xv = {
    key: 0
  };
  Dv = {
    key: 1
  };
  Uv = {
    key: 2,
    class: "timeout-section"
  };
  jv = {
    key: 3,
    class: "permission-section"
  };
  Gv = {
    class: "permission-message"
  };
  Wv = {
    class: "permission-buttons"
  };
  Bv = ud({
    __name: "SplashScreen",
    setup(e) {
      const t = Ut(0), n = Ut(""), i = Ut(""), l = Ut(0), c = Ut(0), f = Ut(false), h = Ut(false), p = Ut(""), v = Ut(false), g = Ut("");
      let E = null;
      const P = Ut("light"), M = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? P.value = "dark" : P.value = "light";
        } catch {
          P.value = "light";
        }
      }, C = () => {
        P.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", P.value);
      }, k = za(() => Math.round(t.value / 100 * 100)), se = {
        info: (...ge) => {
          const re = ge.join(" ");
          console.info(re), n.value = String(re);
        },
        warn: (...ge) => {
          const re = ge.join(" ");
          console.warn(re), n.value = String(re);
        },
        error: (...ge) => {
          const re = ge.join(" ");
          console.error(re), n.value = String(re), p.value = String(re);
        },
        debug: (...ge) => {
          console.debug(...ge);
        }
      }, te = {
        onModuleStart: (ge) => {
          i.value = ge, n.value = `Loading ${ge}...`;
        },
        onModuleComplete: (ge) => {
          c.value++, t.value = Math.min(100, c.value / l.value * 100), n.value = `Loaded ${ge}`;
        },
        onModuleError: (ge, re) => {
          n.value = `Failed to load ${ge}`, p.value = re.message;
        },
        onOverallProgress: (ge, re) => {
          l.value = re, c.value = ge, t.value = Math.min(100, ge / re * 100);
        }
      }, H = () => {
        window.location.reload();
      }, ie = (ge) => (g.value = mo(ge), v.value = true, new Promise((re) => {
        E = (fe) => {
          v.value = false, re(fe);
        };
      })), G = () => {
        E == null ? void 0 : E(true);
      }, pe = () => {
        E == null ? void 0 : E(false);
      };
      return window.permissionConfirm = ie, Yr(() => {
        var _a2;
        M(), C(), (_a2 = document.getElementById("pre-splash")) == null ? void 0 : _a2.remove();
        const ge = (re, fe = /* @__PURE__ */ new Set()) => {
          if (fe.has(re)) return 0;
          fe.add(re);
          const ee = zc.find((Pe) => Pe.name === re);
          if (!ee) return 0;
          let me = 1;
          if (ee.dependencies) for (const Pe of ee.dependencies) me += ge(Pe, fe);
          return me;
        };
        l.value = ge("trackmaker"), console.log("=== Start Loading Modules ==="), xf(zc, "trackmaker", 3e4, {
          logger: se,
          progressReporter: te,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((re) => {
          const fe = String(re.toString());
          if (fe.toLowerCase().includes("timeout")) {
            const ee = fe.split("Trackback").map((me) => me.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(ee.map((me) => ({
              Trackback: me
            })), [
              "Trackback"
            ]), h.value = true;
          } else p.value = fe, f.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(re);
        });
      }), (ge, re) => (rn(), kn("div", Ov, [
        Ge("div", Av, [
          re[8] || (re[8] = Ge("div", {
            class: "logo-section"
          }, [
            Ge("div", {
              class: "app-logo"
            }, [
              Ge("img", {
                src: Kp,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            Ge("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !f.value && !h.value ? (rn(), kn("div", Pv, [
            Ge("div", Mv, [
              Ge("div", Rv, [
                Ge("div", {
                  class: "progress-fill",
                  style: ts({
                    width: `${k.value}%`
                  })
                }, null, 4)
              ]),
              Ge("div", Nv, Ln(k.value) + "% ", 1)
            ]),
            Ge("div", kv, [
              Ge("p", Lv, " Loading: " + Ln(i.value), 1)
            ]),
            re[0] || (re[0] = Ge("div", {
              class: "loading-animation"
            }, [
              Ge("div", {
                class: "spinner"
              })
            ], -1))
          ])) : lo("", true),
          f.value ? (rn(), kn("div", Cv, [
            re[1] || (re[1] = Ge("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            re[2] || (re[2] = Ge("h2", null, "Loading Error", -1)),
            Ge("div", Fv, [
              (rn(true), kn(Pt, null, Id((p.value ?? "").split(`
`), (fe) => (rn(), kn("div", {
                key: fe,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                fe.toLocaleLowerCase().includes("trackback") ? (rn(), kn("strong", xv, Ln(fe), 1)) : (rn(), kn("span", Dv, Ln(fe), 1))
              ]))), 128))
            ]),
            Ge("button", {
              class: "retry-button",
              onClick: H
            }, " Retry ")
          ])) : lo("", true),
          h.value ? (rn(), kn("div", Uv, [
            re[3] || (re[3] = Ge("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            re[4] || (re[4] = Ge("h2", null, "Connection Timeout", -1)),
            re[5] || (re[5] = Ge("p", null, "Unable to load required modules within the timeout period.", -1)),
            re[6] || (re[6] = Ge("p", null, "Please check your internet connection and try again.", -1)),
            Ge("button", {
              class: "retry-button",
              onClick: H
            }, " Retry ")
          ])) : lo("", true),
          v.value ? (rn(), kn("div", jv, [
            re[7] || (re[7] = Ge("div", {
              class: "permission-icon"
            }, " \u{1F4CD} ", -1)),
            Ge("h2", null, Ln(Ki(mo)("permission.title")), 1),
            Ge("p", Gv, Ln(g.value), 1),
            Ge("div", Wv, [
              Ge("button", {
                class: "permission-button deny",
                onClick: pe
              }, Ln(Ki(mo)("permission.deny")), 1),
              Ge("button", {
                class: "permission-button allow",
                onClick: G
              }, Ln(Ki(mo)("permission.allow")), 1)
            ])
          ])) : lo("", true)
        ])
      ]));
    }
  });
  $v = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, l] of t) n[i] = l;
    return n;
  };
  zv = $v(Bv, [
    [
      "__scopeId",
      "data-v-5bb5ba4c"
    ]
  ]);
  el = mf(zv);
  el.use(Qf());
  el.mount("#splash");
  window.splashScreen = el;
})();
export {
  br as $,
  s0 as A,
  Ji as B,
  r0 as C,
  ra as D,
  Zv as E,
  Pt as F,
  qb as G,
  ds as H,
  On as I,
  i0 as J,
  Xv as K,
  Jn as L,
  hd as M,
  dd as N,
  o0 as O,
  Eu as P,
  qv as Q,
  vt as R,
  Hn as S,
  Kv as T,
  Xh as U,
  ts as V,
  a0 as W,
  at as X,
  Ca as Y,
  Vh as Z,
  $v as _,
  __tla,
  Ge as a,
  sr as a$,
  st as a0,
  Ot as a1,
  e0 as a2,
  n0 as a3,
  Jv as a4,
  Qv as a5,
  Id as a6,
  l0 as a7,
  v0 as a8,
  c0 as a9,
  _g as aA,
  Ha as aB,
  Ef as aC,
  pm as aD,
  Fi as aE,
  Gn as aF,
  Ff as aG,
  bm as aH,
  vf as aI,
  xg as aJ,
  Bo as aK,
  Sf as aL,
  sw as aM,
  Ow as aN,
  Jm as aO,
  bf as aP,
  qw as aQ,
  Hh as aR,
  fs as aS,
  Ni as aT,
  nu as aU,
  Sh as aV,
  kd as aW,
  Hv as aX,
  Vn as aY,
  u0 as aZ,
  xi as a_,
  Hs as aa,
  Ct as ab,
  er as ac,
  Yv as ad,
  Zi as ae,
  xs as af,
  mf as ag,
  y0 as ah,
  p0 as ai,
  w0 as aj,
  m0 as ak,
  h0 as al,
  g0 as am,
  d0 as an,
  I0 as ao,
  T0 as ap,
  f0 as aq,
  wv as ar,
  Hb as as,
  Sn as at,
  hi as au,
  ui as av,
  Bl as aw,
  Sg as ax,
  Pg as ay,
  Rg as az,
  Ut as b,
  x as b0,
  R as b1,
  b0 as b2,
  tu as b3,
  kn as c,
  ud as d,
  gd as e,
  Ua as f,
  rs as g,
  dp as h,
  Nr as i,
  za as j,
  Yr as k,
  ja as l,
  rp as m,
  Pa as n,
  rn as o,
  Nd as p,
  E0 as q,
  Zs as r,
  lo as s,
  Vv as t,
  Rt as u,
  Ki as v,
  t0 as w,
  sd as x,
  ip as y,
  Ln as z
};
