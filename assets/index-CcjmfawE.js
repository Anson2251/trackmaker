const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-DdEtSt2O.js","./platform-Do-7vXO7.js","./vue-i18n-BUuI8ekj.js","./App-jBe8gYQr.css","./index-q4aC9eBH.js","./index-BDpgnFJm.css","./index-D5RKaK0N.js"])))=>i.map(i=>d[i]);
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
let jh, hi, $v, Qs, Fv, xb, Rt, is, _n, Tn, lr, xv, Wv, ar, id, od, Bv, pu, Lv, It, Cv, Un, Bh, qo, Hv, at, Pa, Pv, tt, jv, Gv, kt, Nr, Zr, G, M, Xv, Kv, kv, Pg, xo, yf, Qm, bw, $m, hf, Gw, Dh, Vr, ns, Wi, Yc, wh, _d, Nv, Gn, Yv, qc, Dv, pd, Vv, Jv, qv, Zv, Qv, fi, sv, Ps, tv, Yr, sr, xl, wg, vg, Ig, mg, Ua, pf, sm, Rr, Fn, Af, fm, df, nn, Hn, nd, ad, La, Jo, op, Si, ja, zi, Ca, Jd, Ea, an, Td, Br, qs, Mt, Mv, zv, uu, Uv, Es, Zh, Kd;
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
  function wa(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const xe = {}, Gr = [], un = () => {
  }, Dc = () => false, Bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ya = (e) => e.startsWith("onUpdate:"), ht = Object.assign, ba = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, rh = Object.prototype.hasOwnProperty, Ue = (e, t) => rh.call(e, t), ve = Array.isArray, Wr = (e) => $i(e) === "[object Map]", jc = (e) => $i(e) === "[object Set]", ih = (e) => $i(e) === "[object RegExp]", Te = (e) => typeof e == "function", rt = (e) => typeof e == "string", Wn = (e) => typeof e == "symbol", ze = (e) => e !== null && typeof e == "object", Uc = (e) => (ze(e) || Te(e)) && Te(e.then) && Te(e.catch), Gc = Object.prototype.toString, $i = (e) => Gc.call(e), oh = (e) => $i(e).slice(8, -1), Wc = (e) => $i(e) === "[object Object]", va = (e) => rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, yi = wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), zo = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, sh = /-\w/g, Kt = zo((e) => e.replace(sh, (t) => t.slice(1).toUpperCase())), ah = /\B([A-Z])/g, $n = zo((e) => e.replace(ah, "-$1").toLowerCase()), Ho = zo((e) => e.charAt(0).toUpperCase() + e.slice(1)), hs = zo((e) => e ? `on${Ho(e)}` : ""), Wt = (e, t) => !Object.is(e, t), bi = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, $c = (e, t, n, i = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: i,
      value: n
    });
  }, lh = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, ch = (e) => {
    const t = rt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Xa;
  const Vo = () => Xa || (Xa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  qo = function(e) {
    if (ve(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const i = e[n], l = rt(i) ? dh(i) : qo(i);
        if (l) for (const c in l) t[c] = l[c];
      }
      return t;
    } else if (rt(e) || ze(e)) return e;
  };
  const uh = /;(?![^(]*\))/g, fh = /:([^]+)/, hh = /\/\*[^]*?\*\//g;
  function dh(e) {
    const t = {};
    return e.replace(hh, "").split(uh).forEach((n) => {
      if (n) {
        const i = n.split(fh);
        i.length > 1 && (t[i[0].trim()] = i[1].trim());
      }
    }), t;
  }
  Ea = function(e) {
    let t = "";
    if (rt(e)) t = e;
    else if (ve(e)) for (let n = 0; n < e.length; n++) {
      const i = Ea(e[n]);
      i && (t += i + " ");
    }
    else if (ze(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  const ph = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gh = wa(ph);
  function Bc(e) {
    return !!e || e === "";
  }
  let zc, Hc, ds;
  zc = (e) => !!(e && e.__v_isRef === true);
  hi = (e) => rt(e) ? e : e == null ? "" : ve(e) || ze(e) && (e.toString === Gc || !Te(e.toString)) ? zc(e) ? hi(e.value) : JSON.stringify(e, Hc, 2) : String(e);
  Hc = (e, t) => zc(t) ? Hc(e, t.value) : Wr(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [i, l], c) => (n[ds(i, c) + " =>"] = l, n), {})
  } : jc(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => ds(n))
  } : Wn(t) ? ds(t) : ze(t) && !ve(t) && !Wc(t) ? String(t) : t;
  ds = (e, t = "") => {
    var n;
    return Wn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  function mh(e) {
    return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
  }
  let At;
  class Vc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = At, !t && At && (this.index = (At.scopes || (At.scopes = [])).push(this) - 1);
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
        const n = At;
        try {
          return At = this, t();
        } finally {
          At = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = At, At = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (At = this.prevScope, this.prevScope = void 0);
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
  qc = function(e) {
    return new Vc(e);
  };
  Yc = function() {
    return At;
  };
  wh = function(e, t = false) {
    At && At.cleanups.push(e);
  };
  let Ye;
  const ps = /* @__PURE__ */ new WeakSet();
  class Kc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, At && At.active && At.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, ps.has(this) && (ps.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Za(this), Zc(this);
      const t = Ye, n = fn;
      Ye = this, fn = true;
      try {
        return this.fn();
      } finally {
        Qc(this), Ye = t, fn = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) _a(t);
        this.deps = this.depsTail = void 0, Za(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      zs(this) && this.run();
    }
    get dirty() {
      return zs(this);
    }
  }
  let Jc = 0, vi, Ei;
  function Xc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Ei, Ei = e;
      return;
    }
    e.next = vi, vi = e;
  }
  function Ia() {
    Jc++;
  }
  function Ta() {
    if (--Jc > 0) return;
    if (Ei) {
      let t = Ei;
      for (Ei = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; vi; ) {
      let t = vi;
      for (vi = void 0; t; ) {
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
  function Zc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Qc(e) {
    let t, n = e.depsTail, i = n;
    for (; i; ) {
      const l = i.prevDep;
      i.version === -1 ? (i === n && (n = l), _a(i), yh(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = l;
    }
    e.deps = t, e.depsTail = n;
  }
  function zs(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (eu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function eu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Mi) || (e.globalVersion = Mi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zs(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = Ye, i = fn;
    Ye = e, fn = true;
    try {
      Zc(e);
      const l = e.fn(e._value);
      (t.version === 0 || Wt(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
    } catch (l) {
      throw t.version++, l;
    } finally {
      Ye = n, fn = i, Qc(e), e.flags &= -3;
    }
  }
  function _a(e, t = false) {
    const { dep: n, prevSub: i, nextSub: l } = e;
    if (i && (i.nextSub = l, e.prevSub = void 0), l && (l.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
      n.computed.flags &= -5;
      for (let c = n.computed.deps; c; c = c.nextDep) _a(c, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function yh(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let fn = true;
  const tu = [];
  function Dn() {
    tu.push(fn), fn = false;
  }
  function jn() {
    const e = tu.pop();
    fn = e === void 0 ? true : e;
  }
  function Za(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = Ye;
      Ye = void 0;
      try {
        t();
      } finally {
        Ye = n;
      }
    }
  }
  let Mi = 0;
  class bh {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Yo {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!Ye || !fn || Ye === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== Ye) n = this.activeLink = new bh(Ye, this), Ye.deps ? (n.prevDep = Ye.depsTail, Ye.depsTail.nextDep = n, Ye.depsTail = n) : Ye.deps = Ye.depsTail = n, nu(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const i = n.nextDep;
        i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Ye.depsTail, n.nextDep = void 0, Ye.depsTail.nextDep = n, Ye.depsTail = n, Ye.deps === n && (Ye.deps = i);
      }
      return n;
    }
    trigger(t) {
      this.version++, Mi++, this.notify(t);
    }
    notify(t) {
      Ia();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Ta();
      }
    }
  }
  function nu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let i = t.deps; i; i = i.nextDep) nu(i);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const vo = /* @__PURE__ */ new WeakMap(), Tr = Symbol(""), Hs = Symbol(""), Li = Symbol("");
  function Pt(e, t, n) {
    if (fn && Ye) {
      let i = vo.get(e);
      i || vo.set(e, i = /* @__PURE__ */ new Map());
      let l = i.get(n);
      l || (i.set(n, l = new Yo()), l.map = i, l.key = n), l.track();
    }
  }
  function Ln(e, t, n, i, l, c) {
    const f = vo.get(e);
    if (!f) {
      Mi++;
      return;
    }
    const h = (p) => {
      p && p.trigger();
    };
    if (Ia(), t === "clear") f.forEach(h);
    else {
      const p = ve(e), v = p && va(n);
      if (p && n === "length") {
        const w = Number(i);
        f.forEach((I, P) => {
          (P === "length" || P === Li || !Wn(P) && P >= w) && h(I);
        });
      } else switch ((n !== void 0 || f.has(void 0)) && h(f.get(n)), v && h(f.get(Li)), t) {
        case "add":
          p ? v && h(f.get("length")) : (h(f.get(Tr)), Wr(e) && h(f.get(Hs)));
          break;
        case "delete":
          p || (h(f.get(Tr)), Wr(e) && h(f.get(Hs)));
          break;
        case "set":
          Wr(e) && h(f.get(Tr));
          break;
      }
    }
    Ta();
  }
  function vh(e, t) {
    const n = vo.get(e);
    return n && n.get(t);
  }
  function Lr(e) {
    const t = ke(e);
    return t === e ? t : (Pt(t, "iterate", Li), rn(e) ? t : t.map(Et));
  }
  function Ko(e) {
    return Pt(e = ke(e), "iterate", Li), e;
  }
  const Eh = {
    __proto__: null,
    [Symbol.iterator]() {
      return gs(this, Symbol.iterator, Et);
    },
    concat(...e) {
      return Lr(this).concat(...e.map((t) => ve(t) ? Lr(t) : t));
    },
    entries() {
      return gs(this, "entries", (e) => (e[1] = Et(e[1]), e));
    },
    every(e, t) {
      return Rn(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Rn(this, "filter", e, t, (n) => n.map(Et), arguments);
    },
    find(e, t) {
      return Rn(this, "find", e, t, Et, arguments);
    },
    findIndex(e, t) {
      return Rn(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Rn(this, "findLast", e, t, Et, arguments);
    },
    findLastIndex(e, t) {
      return Rn(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Rn(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return ms(this, "includes", e);
    },
    indexOf(...e) {
      return ms(this, "indexOf", e);
    },
    join(e) {
      return Lr(this).join(e);
    },
    lastIndexOf(...e) {
      return ms(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Rn(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return ti(this, "pop");
    },
    push(...e) {
      return ti(this, "push", e);
    },
    reduce(e, ...t) {
      return Qa(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Qa(this, "reduceRight", e, t);
    },
    shift() {
      return ti(this, "shift");
    },
    some(e, t) {
      return Rn(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return ti(this, "splice", e);
    },
    toReversed() {
      return Lr(this).toReversed();
    },
    toSorted(e) {
      return Lr(this).toSorted(e);
    },
    toSpliced(...e) {
      return Lr(this).toSpliced(...e);
    },
    unshift(...e) {
      return ti(this, "unshift", e);
    },
    values() {
      return gs(this, "values", Et);
    }
  };
  function gs(e, t, n) {
    const i = Ko(e), l = i[t]();
    return i !== e && !rn(e) && (l._next = l.next, l.next = () => {
      const c = l._next();
      return c.done || (c.value = n(c.value)), c;
    }), l;
  }
  const Ih = Array.prototype;
  function Rn(e, t, n, i, l, c) {
    const f = Ko(e), h = f !== e && !rn(e), p = f[t];
    if (p !== Ih[t]) {
      const I = p.apply(e, c);
      return h ? Et(I) : I;
    }
    let v = n;
    f !== e && (h ? v = function(I, P) {
      return n.call(this, Et(I), P, e);
    } : n.length > 2 && (v = function(I, P) {
      return n.call(this, I, P, e);
    }));
    const w = p.call(f, v, i);
    return h && l ? l(w) : w;
  }
  function Qa(e, t, n, i) {
    const l = Ko(e);
    let c = n;
    return l !== e && (rn(e) ? n.length > 3 && (c = function(f, h, p) {
      return n.call(this, f, h, p, e);
    }) : c = function(f, h, p) {
      return n.call(this, f, Et(h), p, e);
    }), l[t](c, ...i);
  }
  function ms(e, t, n) {
    const i = ke(e);
    Pt(i, "iterate", Li);
    const l = i[t](...n);
    return (l === -1 || l === false) && Aa(n[0]) ? (n[0] = ke(n[0]), i[t](...n)) : l;
  }
  function ti(e, t, n = []) {
    Dn(), Ia();
    const i = ke(e)[t].apply(e, n);
    return Ta(), jn(), i;
  }
  const Th = wa("__proto__,__v_isRef,__isVue"), ru = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Wn));
  function _h(e) {
    Wn(e) || (e = String(e));
    const t = ke(this);
    return Pt(t, "has", e), t.hasOwnProperty(e);
  }
  class iu {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, i) {
      if (n === "__v_skip") return t.__v_skip;
      const l = this._isReadonly, c = this._isShallow;
      if (n === "__v_isReactive") return !l;
      if (n === "__v_isReadonly") return l;
      if (n === "__v_isShallow") return c;
      if (n === "__v_raw") return i === (l ? c ? kh : lu : c ? au : su).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
      const f = ve(t);
      if (!l) {
        let p;
        if (f && (p = Eh[n])) return p;
        if (n === "hasOwnProperty") return _h;
      }
      const h = Reflect.get(t, n, at(t) ? t : i);
      if ((Wn(n) ? ru.has(n) : Th(n)) || (l || Pt(t, "get", n), c)) return h;
      if (at(h)) {
        const p = f && va(n) ? h : h.value;
        return l && ze(p) ? qs(p) : p;
      }
      return ze(h) ? l ? qs(h) : Jo(h) : h;
    }
  }
  class ou extends iu {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, i, l) {
      let c = t[n];
      if (!this._isShallow) {
        const p = ir(c);
        if (!rn(i) && !ir(i) && (c = ke(c), i = ke(i)), !ve(t) && at(c) && !at(i)) return p || (c.value = i), true;
      }
      const f = ve(t) && va(n) ? Number(n) < t.length : Ue(t, n), h = Reflect.set(t, n, i, at(t) ? t : l);
      return t === ke(l) && (f ? Wt(i, c) && Ln(t, "set", n, i) : Ln(t, "add", n, i)), h;
    }
    deleteProperty(t, n) {
      const i = Ue(t, n);
      t[n];
      const l = Reflect.deleteProperty(t, n);
      return l && i && Ln(t, "delete", n, void 0), l;
    }
    has(t, n) {
      const i = Reflect.has(t, n);
      return (!Wn(n) || !ru.has(n)) && Pt(t, "has", n), i;
    }
    ownKeys(t) {
      return Pt(t, "iterate", ve(t) ? "length" : Tr), Reflect.ownKeys(t);
    }
  }
  class Sh extends iu {
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
  const Oh = new ou(), Ah = new Sh(), Ph = new ou(true);
  const Vs = (e) => e, Xi = (e) => Reflect.getPrototypeOf(e);
  function Rh(e, t, n) {
    return function(...i) {
      const l = this.__v_raw, c = ke(l), f = Wr(c), h = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, v = l[e](...i), w = n ? Vs : t ? Eo : Et;
      return !t && Pt(c, "iterate", p ? Hs : Tr), {
        next() {
          const { value: I, done: P } = v.next();
          return P ? {
            value: I,
            done: P
          } : {
            value: h ? [
              w(I[0]),
              w(I[1])
            ] : w(I),
            done: P
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function Zi(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Nh(e, t) {
    const n = {
      get(l) {
        const c = this.__v_raw, f = ke(c), h = ke(l);
        e || (Wt(l, h) && Pt(f, "get", l), Pt(f, "get", h));
        const { has: p } = Xi(f), v = t ? Vs : e ? Eo : Et;
        if (p.call(f, l)) return v(c.get(l));
        if (p.call(f, h)) return v(c.get(h));
        c !== f && c.get(l);
      },
      get size() {
        const l = this.__v_raw;
        return !e && Pt(ke(l), "iterate", Tr), l.size;
      },
      has(l) {
        const c = this.__v_raw, f = ke(c), h = ke(l);
        return e || (Wt(l, h) && Pt(f, "has", l), Pt(f, "has", h)), l === h ? c.has(l) : c.has(l) || c.has(h);
      },
      forEach(l, c) {
        const f = this, h = f.__v_raw, p = ke(h), v = t ? Vs : e ? Eo : Et;
        return !e && Pt(p, "iterate", Tr), h.forEach((w, I) => l.call(c, v(w), v(I), f));
      }
    };
    return ht(n, e ? {
      add: Zi("add"),
      set: Zi("set"),
      delete: Zi("delete"),
      clear: Zi("clear")
    } : {
      add(l) {
        !t && !rn(l) && !ir(l) && (l = ke(l));
        const c = ke(this);
        return Xi(c).has.call(c, l) || (c.add(l), Ln(c, "add", l, l)), this;
      },
      set(l, c) {
        !t && !rn(c) && !ir(c) && (c = ke(c));
        const f = ke(this), { has: h, get: p } = Xi(f);
        let v = h.call(f, l);
        v || (l = ke(l), v = h.call(f, l));
        const w = p.call(f, l);
        return f.set(l, c), v ? Wt(c, w) && Ln(f, "set", l, c) : Ln(f, "add", l, c), this;
      },
      delete(l) {
        const c = ke(this), { has: f, get: h } = Xi(c);
        let p = f.call(c, l);
        p || (l = ke(l), p = f.call(c, l)), h && h.call(c, l);
        const v = c.delete(l);
        return p && Ln(c, "delete", l, void 0), v;
      },
      clear() {
        const l = ke(this), c = l.size !== 0, f = l.clear();
        return c && Ln(l, "clear", void 0, void 0), f;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((l) => {
      n[l] = Rh(l, e, t);
    }), n;
  }
  function Sa(e, t) {
    const n = Nh(e, t);
    return (i, l, c) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? i : Reflect.get(Ue(n, l) && l in i ? n : i, l, c);
  }
  const Mh = {
    get: Sa(false, false)
  }, Lh = {
    get: Sa(false, true)
  }, Ch = {
    get: Sa(true, false)
  };
  const su = /* @__PURE__ */ new WeakMap(), au = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap(), kh = /* @__PURE__ */ new WeakMap();
  function xh(e) {
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
  function Fh(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : xh(oh(e));
  }
  Jo = function(e) {
    return ir(e) ? e : Oa(e, false, Oh, Mh, su);
  };
  Dh = function(e) {
    return Oa(e, false, Ph, Lh, au);
  };
  qs = function(e) {
    return Oa(e, true, Ah, Ch, lu);
  };
  function Oa(e, t, n, i, l) {
    if (!ze(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const c = Fh(e);
    if (c === 0) return e;
    const f = l.get(e);
    if (f) return f;
    const h = new Proxy(e, c === 2 ? i : n);
    return l.set(e, h), h;
  }
  function rr(e) {
    return ir(e) ? rr(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function ir(e) {
    return !!(e && e.__v_isReadonly);
  }
  function rn(e) {
    return !!(e && e.__v_isShallow);
  }
  function Aa(e) {
    return e ? !!e.__v_raw : false;
  }
  function ke(e) {
    const t = e && e.__v_raw;
    return t ? ke(t) : e;
  }
  Pa = function(e) {
    return !Ue(e, "__v_skip") && Object.isExtensible(e) && $c(e, "__v_skip", true), e;
  };
  const Et = (e) => ze(e) ? Jo(e) : e, Eo = (e) => ze(e) ? qs(e) : e;
  at = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  nn = function(e) {
    return cu(e, false);
  };
  jh = function(e) {
    return cu(e, true);
  };
  function cu(e, t) {
    return at(e) ? e : new Uh(e, t);
  }
  class Uh {
    constructor(t, n) {
      this.dep = new Yo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ke(t), this._value = n ? t : Et(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, i = this.__v_isShallow || rn(t) || ir(t);
      t = i ? t : ke(t), Wt(t, n) && (this._rawValue = t, this._value = i ? t : Et(t), this.dep.trigger());
    }
  }
  uu = function(e) {
    return at(e) ? e.value : e;
  };
  Nv = function(e) {
    return Te(e) ? e() : uu(e);
  };
  const Gh = {
    get: (e, t, n) => t === "__v_raw" ? e : uu(Reflect.get(e, t, n)),
    set: (e, t, n, i) => {
      const l = e[t];
      return at(l) && !at(n) ? (l.value = n, true) : Reflect.set(e, t, n, i);
    }
  };
  function fu(e) {
    return rr(e) ? e : new Proxy(e, Gh);
  }
  class Wh {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new Yo(), { get: i, set: l } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = i, this._set = l;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  function $h(e) {
    return new Wh(e);
  }
  Bh = function(e) {
    const t = ve(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = hu(e, n);
    return t;
  };
  class zh {
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
      return vh(ke(this._object), this._key);
    }
  }
  class Hh {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Mv = function(e, t, n) {
    return at(e) ? e : Te(e) ? new Hh(e) : ze(e) && arguments.length > 1 ? hu(e, t, n) : nn(e);
  };
  function hu(e, t, n) {
    const i = e[t];
    return at(i) ? i : new zh(e, t, n);
  }
  class Vh {
    constructor(t, n, i) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Mi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && Ye !== this) return Xc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return eu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function qh(e, t, n = false) {
    let i, l;
    return Te(e) ? i = e : (i = e.get, l = e.set), new Vh(i, l, n);
  }
  const Qi = {}, Io = /* @__PURE__ */ new WeakMap();
  let wr;
  function Yh(e, t = false, n = wr) {
    if (n) {
      let i = Io.get(n);
      i || Io.set(n, i = []), i.push(e);
    }
  }
  function Kh(e, t, n = xe) {
    const { immediate: i, deep: l, once: c, scheduler: f, augmentJob: h, call: p } = n, v = (W) => l ? W : rn(W) || l === false || l === 0 ? Cn(W, 1) : Cn(W);
    let w, I, P, R, k = false, L = false;
    if (at(e) ? (I = () => e.value, k = rn(e)) : rr(e) ? (I = () => v(e), k = true) : ve(e) ? (L = true, k = e.some((W) => rr(W) || rn(W)), I = () => e.map((W) => {
      if (at(W)) return W.value;
      if (rr(W)) return v(W);
      if (Te(W)) return p ? p(W, 2) : W();
    })) : Te(e) ? t ? I = p ? () => p(e, 2) : e : I = () => {
      if (P) {
        Dn();
        try {
          P();
        } finally {
          jn();
        }
      }
      const W = wr;
      wr = w;
      try {
        return p ? p(e, 3, [
          R
        ]) : e(R);
      } finally {
        wr = W;
      }
    } : I = un, t && l) {
      const W = I, ue = l === true ? 1 / 0 : l;
      I = () => Cn(W(), ue);
    }
    const B = Yc(), F = () => {
      w.stop(), B && B.active && ba(B.effects, w);
    };
    if (c && t) {
      const W = t;
      t = (...ue) => {
        W(...ue), F();
      };
    }
    let U = L ? new Array(e.length).fill(Qi) : Qi;
    const ne = (W) => {
      if (!(!(w.flags & 1) || !w.dirty && !W)) if (t) {
        const ue = w.run();
        if (l || k || (L ? ue.some((Oe, Ae) => Wt(Oe, U[Ae])) : Wt(ue, U))) {
          P && P();
          const Oe = wr;
          wr = w;
          try {
            const Ae = [
              ue,
              U === Qi ? void 0 : L && U[0] === Qi ? [] : U,
              R
            ];
            U = ue, p ? p(t, 3, Ae) : t(...Ae);
          } finally {
            wr = Oe;
          }
        }
      } else w.run();
    };
    return h && h(ne), w = new Kc(I), w.scheduler = f ? () => f(ne, false) : ne, R = (W) => Yh(W, false, w), P = w.onStop = () => {
      const W = Io.get(w);
      if (W) {
        if (p) p(W, 4);
        else for (const ue of W) ue();
        Io.delete(w);
      }
    }, t ? i ? ne(true) : U = w.run() : f ? f(ne.bind(null, true), true) : w.run(), F.pause = w.pause.bind(w), F.resume = w.resume.bind(w), F.stop = F, F;
  }
  function Cn(e, t = 1 / 0, n) {
    if (t <= 0 || !ze(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, at(e)) Cn(e.value, t, n);
    else if (ve(e)) for (let i = 0; i < e.length; i++) Cn(e[i], t, n);
    else if (jc(e) || Wr(e)) e.forEach((i) => {
      Cn(i, t, n);
    });
    else if (Wc(e)) {
      for (const i in e) Cn(e[i], t, n);
      for (const i of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, i) && Cn(e[i], t, n);
    }
    return e;
  }
  function Bi(e, t, n, i) {
    try {
      return i ? e(...i) : e();
    } catch (l) {
      Xo(l, t, n);
    }
  }
  function hn(e, t, n, i) {
    if (Te(e)) {
      const l = Bi(e, t, n, i);
      return l && Uc(l) && l.catch((c) => {
        Xo(c, t, n);
      }), l;
    }
    if (ve(e)) {
      const l = [];
      for (let c = 0; c < e.length; c++) l.push(hn(e[c], t, n, i));
      return l;
    }
  }
  function Xo(e, t, n, i = true) {
    const l = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: f } = t && t.appContext.config || xe;
    if (t) {
      let h = t.parent;
      const p = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; h; ) {
        const w = h.ec;
        if (w) {
          for (let I = 0; I < w.length; I++) if (w[I](e, p, v) === false) return;
        }
        h = h.parent;
      }
      if (c) {
        Dn(), Bi(c, null, 10, [
          e,
          p,
          v
        ]), jn();
        return;
      }
    }
    Jh(e, n, l, i, f);
  }
  function Jh(e, t, n, i = true, l = false) {
    if (l) throw e;
    console.error(e);
  }
  const Ft = [];
  let yn = -1;
  const $r = [];
  let Jn = null, Ur = 0;
  const du = Promise.resolve();
  let To = null;
  pu = function(e) {
    const t = To || du;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Xh(e) {
    let t = yn + 1, n = Ft.length;
    for (; t < n; ) {
      const i = t + n >>> 1, l = Ft[i], c = Ci(l);
      c < e || c === e && l.flags & 2 ? t = i + 1 : n = i;
    }
    return t;
  }
  function Ra(e) {
    if (!(e.flags & 1)) {
      const t = Ci(e), n = Ft[Ft.length - 1];
      !n || !(e.flags & 2) && t >= Ci(n) ? Ft.push(e) : Ft.splice(Xh(t), 0, e), e.flags |= 1, gu();
    }
  }
  function gu() {
    To || (To = du.then(yu));
  }
  function mu(e) {
    ve(e) ? $r.push(...e) : Jn && e.id === -1 ? Jn.splice(Ur + 1, 0, e) : e.flags & 1 || ($r.push(e), e.flags |= 1), gu();
  }
  function el(e, t, n = yn + 1) {
    for (; n < Ft.length; n++) {
      const i = Ft[n];
      if (i && i.flags & 2) {
        if (e && i.id !== e.uid) continue;
        Ft.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
      }
    }
  }
  function wu(e) {
    if ($r.length) {
      const t = [
        ...new Set($r)
      ].sort((n, i) => Ci(n) - Ci(i));
      if ($r.length = 0, Jn) {
        Jn.push(...t);
        return;
      }
      for (Jn = t, Ur = 0; Ur < Jn.length; Ur++) {
        const n = Jn[Ur];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Jn = null, Ur = 0;
    }
  }
  const Ci = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function yu(e) {
    try {
      for (yn = 0; yn < Ft.length; yn++) {
        const t = Ft[yn];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bi(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; yn < Ft.length; yn++) {
        const t = Ft[yn];
        t && (t.flags &= -2);
      }
      yn = -1, Ft.length = 0, wu(), To = null, (Ft.length || $r.length) && yu();
    }
  }
  let Tt = null, bu = null;
  function _o(e) {
    const t = Tt;
    return Tt = e, bu = e && e.type.__scopeId || null, t;
  }
  Zh = function(e, t = Tt, n) {
    if (!t || e._n) return e;
    const i = (...l) => {
      i._d && No(-1);
      const c = _o(t);
      let f;
      try {
        f = e(...l);
      } finally {
        _o(c), i._d && No(1);
      }
      return f;
    };
    return i._n = true, i._c = true, i._d = true, i;
  };
  Lv = function(e, t) {
    if (Tt === null) return e;
    const n = rs(Tt), i = e.dirs || (e.dirs = []);
    for (let l = 0; l < t.length; l++) {
      let [c, f, h, p = xe] = t[l];
      c && (Te(c) && (c = {
        mounted: c,
        updated: c
      }), c.deep && Cn(f), i.push({
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
  function hr(e, t, n, i) {
    const l = e.dirs, c = t && t.dirs;
    for (let f = 0; f < l.length; f++) {
      const h = l[f];
      c && (h.oldValue = c[f].value);
      let p = h.dir[i];
      p && (Dn(), hn(p, n, 8, [
        e.el,
        h,
        e,
        t
      ]), jn());
    }
  }
  const vu = Symbol("_vte"), Eu = (e) => e.__isTeleport, Ii = (e) => e && (e.disabled || e.disabled === ""), tl = (e) => e && (e.defer || e.defer === ""), nl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, rl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ys = (e, t) => {
    const n = e && e.to;
    return rt(n) ? t ? t(n) : null : n;
  }, Iu = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, i, l, c, f, h, p, v) {
      const { mc: w, pc: I, pbc: P, o: { insert: R, querySelector: k, createText: L, createComment: B } } = v, F = Ii(t.props);
      let { shapeFlag: U, children: ne, dynamicChildren: W } = t;
      if (e == null) {
        const ue = t.el = L(""), Oe = t.anchor = L("");
        R(ue, n, i), R(Oe, n, i);
        const Ae = (ie, we) => {
          U & 16 && w(ne, ie, we, l, c, f, h, p);
        }, me = () => {
          const ie = t.target = Ys(t.props, k), we = Tu(ie, t, L, R);
          ie && (f !== "svg" && nl(ie) ? f = "svg" : f !== "mathml" && rl(ie) && (f = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(ie), F || (Ae(ie, we), uo(t, false)));
        };
        F && (Ae(n, Oe), uo(t, true)), tl(t.props) ? (t.el.__isMounted = false, mt(() => {
          me(), delete t.el.__isMounted;
        }, c)) : me();
      } else {
        if (tl(t.props) && e.el.__isMounted === false) {
          mt(() => {
            Iu.process(e, t, n, i, l, c, f, h, p, v);
          }, c);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const ue = t.anchor = e.anchor, Oe = t.target = e.target, Ae = t.targetAnchor = e.targetAnchor, me = Ii(e.props), ie = me ? n : Oe, we = me ? ue : Ae;
        if (f === "svg" || nl(Oe) ? f = "svg" : (f === "mathml" || rl(Oe)) && (f = "mathml"), W ? (P(e.dynamicChildren, W, ie, l, c, f, h), Fa(e, t, true)) : p || I(e, t, ie, we, l, c, f, h, false), F) me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : eo(t, n, ue, v, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Pe = t.target = Ys(t.props, k);
          Pe && eo(t, Pe, null, v, 0);
        } else me && eo(t, Oe, Ae, v, 1);
        uo(t, F);
      }
    },
    remove(e, t, n, { um: i, o: { remove: l } }, c) {
      const { shapeFlag: f, children: h, anchor: p, targetStart: v, targetAnchor: w, target: I, props: P } = e;
      if (I && (l(v), l(w)), c && l(p), f & 16) {
        const R = c || !Ii(P);
        for (let k = 0; k < h.length; k++) {
          const L = h[k];
          i(L, t, n, R, !!L.dynamicChildren);
        }
      }
    },
    move: eo,
    hydrate: Qh
  };
  function eo(e, t, n, { o: { insert: i }, m: l }, c = 2) {
    c === 0 && i(e.targetAnchor, t, n);
    const { el: f, anchor: h, shapeFlag: p, children: v, props: w } = e, I = c === 2;
    if (I && i(f, t, n), (!I || Ii(w)) && p & 16) for (let P = 0; P < v.length; P++) l(v[P], t, n, 2);
    I && i(h, t, n);
  }
  function Qh(e, t, n, i, l, c, { o: { nextSibling: f, parentNode: h, querySelector: p, insert: v, createText: w } }, I) {
    function P(L, B, F, U) {
      B.anchor = I(f(L), B, h(L), n, i, l, c), B.targetStart = F, B.targetAnchor = U;
    }
    const R = t.target = Ys(t.props, p), k = Ii(t.props);
    if (R) {
      const L = R._lpa || R.firstChild;
      if (t.shapeFlag & 16) if (k) P(e, t, L, L && f(L));
      else {
        t.anchor = f(e);
        let B = L;
        for (; B; ) {
          if (B && B.nodeType === 8) {
            if (B.data === "teleport start anchor") t.targetStart = B;
            else if (B.data === "teleport anchor") {
              t.targetAnchor = B, R._lpa = t.targetAnchor && f(t.targetAnchor);
              break;
            }
          }
          B = f(B);
        }
        t.targetAnchor || Tu(R, t, w, v), I(L && f(L), t, R, n, i, l, c);
      }
      uo(t, k);
    } else k && t.shapeFlag & 16 && P(e, t, e, f(e));
    return t.anchor && f(t.anchor);
  }
  Cv = Iu;
  function uo(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let i, l;
      for (t ? (i = e.el, l = e.anchor) : (i = e.targetStart, l = e.targetAnchor); i && i !== l; ) i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
      n.ut();
    }
  }
  function Tu(e, t, n, i) {
    const l = t.targetStart = n(""), c = t.targetAnchor = n("");
    return l[vu] = c, e && (i(l, e), i(c, e)), c;
  }
  const Mn = Symbol("_leaveCb"), to = Symbol("_enterCb");
  function _u() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return zi(() => {
      e.isMounted = true;
    }), La(() => {
      e.isUnmounting = true;
    }), e;
  }
  const Qt = [
    Function,
    Array
  ], Su = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Qt,
    onEnter: Qt,
    onAfterEnter: Qt,
    onEnterCancelled: Qt,
    onBeforeLeave: Qt,
    onLeave: Qt,
    onAfterLeave: Qt,
    onLeaveCancelled: Qt,
    onBeforeAppear: Qt,
    onAppear: Qt,
    onAfterAppear: Qt,
    onAppearCancelled: Qt
  }, Ou = (e) => {
    const t = e.subTree;
    return t.component ? Ou(t.component) : t;
  }, ed = {
    name: "BaseTransition",
    props: Su,
    setup(e, { slots: t }) {
      const n = ar(), i = _u();
      return () => {
        const l = t.default && Na(t.default(), true);
        if (!l || !l.length) return;
        const c = Au(l), f = ke(e), { mode: h } = f;
        if (i.isLeaving) return ws(c);
        const p = il(c);
        if (!p) return ws(c);
        let v = ki(p, f, i, n, (I) => v = I);
        p.type !== It && or(p, v);
        let w = n.subTree && il(n.subTree);
        if (w && w.type !== It && !Zn(w, p) && Ou(n).type !== It) {
          let I = ki(w, f, i, n);
          if (or(w, I), h === "out-in" && p.type !== It) return i.isLeaving = true, I.afterLeave = () => {
            i.isLeaving = false, n.job.flags & 8 || n.update(), delete I.afterLeave, w = void 0;
          }, ws(c);
          h === "in-out" && p.type !== It ? I.delayLeave = (P, R, k) => {
            const L = Pu(i, w);
            L[String(w.key)] = w, P[Mn] = () => {
              R(), P[Mn] = void 0, delete v.delayedLeave, w = void 0;
            }, v.delayedLeave = () => {
              k(), delete v.delayedLeave, w = void 0;
            };
          } : w = void 0;
        } else w && (w = void 0);
        return c;
      };
    }
  };
  function Au(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== It) {
        t = n;
        break;
      }
    }
    return t;
  }
  const td = ed;
  function Pu(e, t) {
    const { leavingVNodes: n } = e;
    let i = n.get(t.type);
    return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
  }
  function ki(e, t, n, i, l) {
    const { appear: c, mode: f, persisted: h = false, onBeforeEnter: p, onEnter: v, onAfterEnter: w, onEnterCancelled: I, onBeforeLeave: P, onLeave: R, onAfterLeave: k, onLeaveCancelled: L, onBeforeAppear: B, onAppear: F, onAfterAppear: U, onAppearCancelled: ne } = t, W = String(e.key), ue = Pu(n, e), Oe = (ie, we) => {
      ie && hn(ie, i, 9, we);
    }, Ae = (ie, we) => {
      const Pe = we[1];
      Oe(ie, we), ve(ie) ? ie.every((fe) => fe.length <= 1) && Pe() : ie.length <= 1 && Pe();
    }, me = {
      mode: f,
      persisted: h,
      beforeEnter(ie) {
        let we = p;
        if (!n.isMounted) if (c) we = B || p;
        else return;
        ie[Mn] && ie[Mn](true);
        const Pe = ue[W];
        Pe && Zn(e, Pe) && Pe.el[Mn] && Pe.el[Mn](), Oe(we, [
          ie
        ]);
      },
      enter(ie) {
        let we = v, Pe = w, fe = I;
        if (!n.isMounted) if (c) we = F || v, Pe = U || w, fe = ne || I;
        else return;
        let je = false;
        const ct = ie[to] = ($t) => {
          je || (je = true, $t ? Oe(fe, [
            ie
          ]) : Oe(Pe, [
            ie
          ]), me.delayedLeave && me.delayedLeave(), ie[to] = void 0);
        };
        we ? Ae(we, [
          ie,
          ct
        ]) : ct();
      },
      leave(ie, we) {
        const Pe = String(e.key);
        if (ie[to] && ie[to](true), n.isUnmounting) return we();
        Oe(P, [
          ie
        ]);
        let fe = false;
        const je = ie[Mn] = (ct) => {
          fe || (fe = true, we(), ct ? Oe(L, [
            ie
          ]) : Oe(k, [
            ie
          ]), ie[Mn] = void 0, ue[Pe] === e && delete ue[Pe]);
        };
        ue[Pe] = e, R ? Ae(R, [
          ie,
          je
        ]) : je();
      },
      clone(ie) {
        const we = ki(ie, t, n, i, l);
        return l && l(we), we;
      }
    };
    return me;
  }
  function ws(e) {
    if (Zo(e)) return e = Un(e), e.children = null, e;
  }
  function il(e) {
    if (!Zo(e)) return Eu(e.type) && e.children ? Au(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && Te(n.default)) return n.default();
    }
  }
  function or(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, or(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Na(e, t = false, n) {
    let i = [], l = 0;
    for (let c = 0; c < e.length; c++) {
      let f = e[c];
      const h = n == null ? f.key : String(n) + String(f.key != null ? f.key : c);
      f.type === Rt ? (f.patchFlag & 128 && l++, i = i.concat(Na(f.children, t, h))) : (t || f.type !== It) && i.push(h != null ? Un(f, {
        key: h
      }) : f);
    }
    if (l > 1) for (let c = 0; c < i.length; c++) i[c].patchFlag = -2;
    return i;
  }
  nd = function(e, t) {
    return Te(e) ? ht({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  function Ru(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  kv = function(e) {
    const t = ar(), n = jh(null);
    if (t) {
      const l = t.refs === xe ? t.refs = {} : t.refs;
      Object.defineProperty(l, e, {
        enumerable: true,
        get: () => n.value,
        set: (c) => n.value = c
      });
    }
    return n;
  };
  const So = /* @__PURE__ */ new WeakMap();
  function Ti(e, t, n, i, l = false) {
    if (ve(e)) {
      e.forEach((k, L) => Ti(k, t && (ve(t) ? t[L] : t), n, i, l));
      return;
    }
    if (_r(i) && !l) {
      i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Ti(e, t, n, i.component.subTree);
      return;
    }
    const c = i.shapeFlag & 4 ? rs(i.component) : i.el, f = l ? null : c, { i: h, r: p } = e, v = t && t.r, w = h.refs === xe ? h.refs = {} : h.refs, I = h.setupState, P = ke(I), R = I === xe ? Dc : (k) => Ue(P, k);
    if (v != null && v !== p) {
      if (ol(t), rt(v)) w[v] = null, R(v) && (I[v] = null);
      else if (at(v)) {
        v.value = null;
        const k = t;
        k.k && (w[k.k] = null);
      }
    }
    if (Te(p)) Bi(p, h, 12, [
      f,
      w
    ]);
    else {
      const k = rt(p), L = at(p);
      if (k || L) {
        const B = () => {
          if (e.f) {
            const F = k ? R(p) ? I[p] : w[p] : p.value;
            if (l) ve(F) && ba(F, c);
            else if (ve(F)) F.includes(c) || F.push(c);
            else if (k) w[p] = [
              c
            ], R(p) && (I[p] = w[p]);
            else {
              const U = [
                c
              ];
              p.value = U, e.k && (w[e.k] = U);
            }
          } else k ? (w[p] = f, R(p) && (I[p] = f)) : L && (p.value = f, e.k && (w[e.k] = f));
        };
        if (f) {
          const F = () => {
            B(), So.delete(e);
          };
          F.id = -1, So.set(e, F), mt(F, n);
        } else ol(e), B();
      }
    }
  }
  function ol(e) {
    const t = So.get(e);
    t && (t.flags |= 8, So.delete(e));
  }
  Vo().requestIdleCallback;
  Vo().cancelIdleCallback;
  let _r, Zo, rd;
  _r = (e) => !!e.type.__asyncLoader;
  Zo = (e) => e.type.__isKeepAlive;
  rd = {
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
      const n = ar(), i = n.ctx;
      if (!i.renderer) return () => {
        const U = t.default && t.default();
        return U && U.length === 1 ? U[0] : U;
      };
      const l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
      let f = null;
      const h = n.suspense, { renderer: { p, m: v, um: w, o: { createElement: I } } } = i, P = I("div");
      i.activate = (U, ne, W, ue, Oe) => {
        const Ae = U.component;
        v(U, ne, W, 0, h), p(Ae.vnode, U, ne, W, Ae, h, ue, U.slotScopeIds, Oe), mt(() => {
          Ae.isDeactivated = false, Ae.a && bi(Ae.a);
          const me = U.props && U.props.onVnodeMounted;
          me && tn(me, Ae.parent, U);
        }, h);
      }, i.deactivate = (U) => {
        const ne = U.component;
        Po(ne.m), Po(ne.a), v(U, P, null, 1, h), mt(() => {
          ne.da && bi(ne.da);
          const W = U.props && U.props.onVnodeUnmounted;
          W && tn(W, ne.parent, U), ne.isDeactivated = true;
        }, h);
      };
      function R(U) {
        ys(U), w(U, n, h, true);
      }
      function k(U) {
        l.forEach((ne, W) => {
          const ue = ta(ne.type);
          ue && !U(ue) && L(W);
        });
      }
      function L(U) {
        const ne = l.get(U);
        ne && (!f || !Zn(ne, f)) ? R(ne) : f && ys(f), l.delete(U), c.delete(U);
      }
      Br(() => [
        e.include,
        e.exclude
      ], ([U, ne]) => {
        U && k((W) => di(U, W)), ne && k((W) => !di(ne, W));
      }, {
        flush: "post",
        deep: true
      });
      let B = null;
      const F = () => {
        B != null && (Ro(n.subTree.type) ? mt(() => {
          l.set(B, no(n.subTree));
        }, n.subTree.suspense) : l.set(B, no(n.subTree)));
      };
      return zi(F), Ma(F), La(() => {
        l.forEach((U) => {
          const { subTree: ne, suspense: W } = n, ue = no(ne);
          if (U.type === ue.type && U.key === ue.key) {
            ys(ue);
            const Oe = ue.component.da;
            Oe && mt(Oe, W);
            return;
          }
          R(U);
        });
      }), () => {
        if (B = null, !t.default) return f = null;
        const U = t.default(), ne = U[0];
        if (U.length > 1) return f = null, U;
        if (!Vr(ne) || !(ne.shapeFlag & 4) && !(ne.shapeFlag & 128)) return f = null, ne;
        let W = no(ne);
        if (W.type === It) return f = null, W;
        const ue = W.type, Oe = ta(_r(W) ? W.type.__asyncResolved || {} : ue), { include: Ae, exclude: me, max: ie } = e;
        if (Ae && (!Oe || !di(Ae, Oe)) || me && Oe && di(me, Oe)) return W.shapeFlag &= -257, f = W, ne;
        const we = W.key == null ? ue : W.key, Pe = l.get(we);
        return W.el && (W = Un(W), ne.shapeFlag & 128 && (ne.ssContent = W)), B = we, Pe ? (W.el = Pe.el, W.component = Pe.component, W.transition && or(W, W.transition), W.shapeFlag |= 512, c.delete(we), c.add(we)) : (c.add(we), ie && c.size > parseInt(ie, 10) && L(c.values().next().value)), W.shapeFlag |= 256, f = W, Ro(ne.type) ? ne : W;
      };
    }
  };
  xv = rd;
  function di(e, t) {
    return ve(e) ? e.some((n) => di(n, t)) : rt(e) ? e.split(",").includes(t) : ih(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  id = function(e, t) {
    Nu(e, "a", t);
  };
  od = function(e, t) {
    Nu(e, "da", t);
  };
  function Nu(e, t, n = Nt) {
    const i = e.__wdc || (e.__wdc = () => {
      let l = n;
      for (; l; ) {
        if (l.isDeactivated) return;
        l = l.parent;
      }
      return e();
    });
    if (Qo(t, i, n), n) {
      let l = n.parent;
      for (; l && l.parent; ) Zo(l.parent.vnode) && sd(i, t, n, l), l = l.parent;
    }
  }
  function sd(e, t, n, i) {
    const l = Qo(t, e, i, true);
    Ca(() => {
      ba(i[t], l);
    }, n);
  }
  function ys(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function no(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function Qo(e, t, n = Nt, i = false) {
    if (n) {
      const l = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...f) => {
        Dn();
        const h = Hi(n), p = hn(t, n, e, f);
        return h(), jn(), p;
      });
      return i ? l.unshift(c) : l.push(c), c;
    }
  }
  let Bn, Mu, Ma, ld, cd, ud;
  Bn = (e) => (t, n = Nt) => {
    (!Fi || e === "sp") && Qo(e, (...i) => t(...i), n);
  };
  ad = Bn("bm");
  zi = Bn("m");
  Mu = Bn("bu");
  Ma = Bn("u");
  La = Bn("bum");
  Ca = Bn("um");
  ld = Bn("sp");
  cd = Bn("rtg");
  ud = Bn("rtc");
  function fd(e, t = Nt) {
    Qo("ec", e, t);
  }
  const hd = "components", Lu = Symbol.for("v-ndc");
  Fv = function(e) {
    return rt(e) ? dd(hd, e, false) || e : e || Lu;
  };
  function dd(e, t, n = true, i = false) {
    const l = Tt || Nt;
    if (l) {
      const c = l.type;
      {
        const h = ta(c, false);
        if (h && (h === t || h === Kt(t) || h === Ho(Kt(t)))) return c;
      }
      const f = sl(l[e] || c[e], t) || sl(l.appContext[e], t);
      return !f && i ? c : f;
    }
  }
  function sl(e, t) {
    return e && (e[t] || e[Kt(t)] || e[Ho(Kt(t))]);
  }
  pd = function(e, t, n, i) {
    let l;
    const c = n, f = ve(e);
    if (f || rt(e)) {
      const h = f && rr(e);
      let p = false, v = false;
      h && (p = !rn(e), v = ir(e), e = Ko(e)), l = new Array(e.length);
      for (let w = 0, I = e.length; w < I; w++) l[w] = t(p ? v ? Eo(Et(e[w])) : Et(e[w]) : e[w], w, void 0, c);
    } else if (typeof e == "number") {
      l = new Array(e);
      for (let h = 0; h < e; h++) l[h] = t(h + 1, h, void 0, c);
    } else if (ze(e)) if (e[Symbol.iterator]) l = Array.from(e, (h, p) => t(h, p, void 0, c));
    else {
      const h = Object.keys(e);
      l = new Array(h.length);
      for (let p = 0, v = h.length; p < v; p++) {
        const w = h[p];
        l[p] = t(e[w], w, p, c);
      }
    }
    else l = [];
    return l;
  };
  Dv = function(e, t, n = {}, i, l) {
    if (Tt.ce || Tt.parent && _r(Tt.parent) && Tt.parent.ce) {
      const v = Object.keys(n).length > 0;
      return t !== "default" && (n.name = t), an(), Qs(Rt, null, [
        Mt("slot", n, i && i())
      ], v ? -2 : 64);
    }
    let c = e[t];
    c && c._c && (c._d = false), an();
    const f = c && Cu(c(n)), h = n.key || f && f.key, p = Qs(Rt, {
      key: (h && !Wn(h) ? h : `_${t}`) + (!f && i ? "_fb" : "")
    }, f || (i ? i() : []), f && e._ === 1 ? 64 : -2);
    return !l && p.scopeId && (p.slotScopeIds = [
      p.scopeId + "-s"
    ]), c && c._c && (c._d = true), p;
  };
  function Cu(e) {
    return e.some((t) => Vr(t) ? !(t.type === It || t.type === Rt && !Cu(t.children)) : true) ? e : null;
  }
  const Ks = (e) => e ? Xu(e) ? rs(e) : Ks(e.parent) : null, _i = ht(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ks(e.parent),
    $root: (e) => Ks(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ra(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pu.bind(e.proxy)),
    $watch: (e) => jd.bind(e)
  }), bs = (e, t) => e !== xe && !e.__isScriptSetup && Ue(e, t), gd = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: i, data: l, props: c, accessCache: f, type: h, appContext: p } = e;
      let v;
      if (t[0] !== "$") {
        const R = f[t];
        if (R !== void 0) switch (R) {
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
          if (bs(i, t)) return f[t] = 1, i[t];
          if (l !== xe && Ue(l, t)) return f[t] = 2, l[t];
          if ((v = e.propsOptions[0]) && Ue(v, t)) return f[t] = 3, c[t];
          if (n !== xe && Ue(n, t)) return f[t] = 4, n[t];
          Js && (f[t] = 0);
        }
      }
      const w = _i[t];
      let I, P;
      if (w) return t === "$attrs" && Pt(e.attrs, "get", ""), w(e);
      if ((I = h.__cssModules) && (I = I[t])) return I;
      if (n !== xe && Ue(n, t)) return f[t] = 4, n[t];
      if (P = p.config.globalProperties, Ue(P, t)) return P[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: l, ctx: c } = e;
      return bs(l, t) ? (l[t] = n, true) : i !== xe && Ue(i, t) ? (i[t] = n, true) : Ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (c[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: l, propsOptions: c, type: f } }, h) {
      let p, v;
      return !!(n[h] || e !== xe && h[0] !== "$" && Ue(e, h) || bs(t, h) || (p = c[0]) && Ue(p, h) || Ue(i, h) || Ue(_i, h) || Ue(l.config.globalProperties, h) || (v = f.__cssModules) && v[h]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : Ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function Oo(e) {
    return ve(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  jv = function(e, t) {
    return !e || !t ? e || t : ve(e) && ve(t) ? e.concat(t) : ht({}, Oo(e), Oo(t));
  };
  let Js = true;
  function md(e) {
    const t = xu(e), n = e.proxy, i = e.ctx;
    Js = false, t.beforeCreate && al(t.beforeCreate, e, "bc");
    const { data: l, computed: c, methods: f, watch: h, provide: p, inject: v, created: w, beforeMount: I, mounted: P, beforeUpdate: R, updated: k, activated: L, deactivated: B, beforeDestroy: F, beforeUnmount: U, destroyed: ne, unmounted: W, render: ue, renderTracked: Oe, renderTriggered: Ae, errorCaptured: me, serverPrefetch: ie, expose: we, inheritAttrs: Pe, components: fe, directives: je, filters: ct } = t;
    if (v && wd(v, i, null), f) for (const Ne in f) {
      const We = f[Ne];
      Te(We) && (i[Ne] = We.bind(n));
    }
    if (l) {
      const Ne = l.call(n, n);
      ze(Ne) && (e.data = Jo(Ne));
    }
    if (Js = true, c) for (const Ne in c) {
      const We = c[Ne], Sn = Te(We) ? We.bind(n, n) : Te(We.get) ? We.get.bind(n, n) : un, Mr = !Te(We) && Te(We.set) ? We.set.bind(n) : un, On = ja({
        get: Sn,
        set: Mr
      });
      Object.defineProperty(i, Ne, {
        enumerable: true,
        configurable: true,
        get: () => On.value,
        set: (ye) => On.value = ye
      });
    }
    if (h) for (const Ne in h) ku(h[Ne], i, n, Ne);
    if (p) {
      const Ne = Te(p) ? p.call(n) : p;
      Reflect.ownKeys(Ne).forEach((We) => {
        Td(We, Ne[We]);
      });
    }
    w && al(w, e, "c");
    function He(Ne, We) {
      ve(We) ? We.forEach((Sn) => Ne(Sn.bind(n))) : We && Ne(We.bind(n));
    }
    if (He(ad, I), He(zi, P), He(Mu, R), He(Ma, k), He(id, L), He(od, B), He(fd, me), He(ud, Oe), He(cd, Ae), He(La, U), He(Ca, W), He(ld, ie), ve(we)) if (we.length) {
      const Ne = e.exposed || (e.exposed = {});
      we.forEach((We) => {
        Object.defineProperty(Ne, We, {
          get: () => n[We],
          set: (Sn) => n[We] = Sn,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    ue && e.render === un && (e.render = ue), Pe != null && (e.inheritAttrs = Pe), fe && (e.components = fe), je && (e.directives = je), ie && Ru(e);
  }
  function wd(e, t, n = un) {
    ve(e) && (e = Xs(e));
    for (const i in e) {
      const l = e[i];
      let c;
      ze(l) ? "default" in l ? c = Si(l.from || i, l.default, true) : c = Si(l.from || i) : c = Si(l), at(c) ? Object.defineProperty(t, i, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (f) => c.value = f
      }) : t[i] = c;
    }
  }
  function al(e, t, n) {
    hn(ve(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function ku(e, t, n, i) {
    let l = i.includes(".") ? Vu(n, i) : () => n[i];
    if (rt(e)) {
      const c = t[e];
      Te(c) && Br(l, c);
    } else if (Te(e)) Br(l, e.bind(n));
    else if (ze(e)) if (ve(e)) e.forEach((c) => ku(c, t, n, i));
    else {
      const c = Te(e.handler) ? e.handler.bind(n) : t[e.handler];
      Te(c) && Br(l, c, e);
    }
  }
  function xu(e) {
    const t = e.type, { mixins: n, extends: i } = t, { mixins: l, optionsCache: c, config: { optionMergeStrategies: f } } = e.appContext, h = c.get(t);
    let p;
    return h ? p = h : !l.length && !n && !i ? p = t : (p = {}, l.length && l.forEach((v) => Ao(p, v, f, true)), Ao(p, t, f)), ze(t) && c.set(t, p), p;
  }
  function Ao(e, t, n, i = false) {
    const { mixins: l, extends: c } = t;
    c && Ao(e, c, n, true), l && l.forEach((f) => Ao(e, f, n, true));
    for (const f in t) if (!(i && f === "expose")) {
      const h = yd[f] || n && n[f];
      e[f] = h ? h(e[f], t[f]) : t[f];
    }
    return e;
  }
  const yd = {
    data: ll,
    props: cl,
    emits: cl,
    methods: pi,
    computed: pi,
    beforeCreate: Ct,
    created: Ct,
    beforeMount: Ct,
    mounted: Ct,
    beforeUpdate: Ct,
    updated: Ct,
    beforeDestroy: Ct,
    beforeUnmount: Ct,
    destroyed: Ct,
    unmounted: Ct,
    activated: Ct,
    deactivated: Ct,
    errorCaptured: Ct,
    serverPrefetch: Ct,
    components: pi,
    directives: pi,
    watch: vd,
    provide: ll,
    inject: bd
  };
  function ll(e, t) {
    return t ? e ? function() {
      return ht(Te(e) ? e.call(this, this) : e, Te(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function bd(e, t) {
    return pi(Xs(e), Xs(t));
  }
  function Xs(e) {
    if (ve(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function Ct(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function pi(e, t) {
    return e ? ht(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function cl(e, t) {
    return e ? ve(e) && ve(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : ht(/* @__PURE__ */ Object.create(null), Oo(e), Oo(t ?? {})) : t;
  }
  function vd(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ht(/* @__PURE__ */ Object.create(null), e);
    for (const i in t) n[i] = Ct(e[i], t[i]);
    return n;
  }
  function Fu() {
    return {
      app: null,
      config: {
        isNativeTag: Dc,
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
  let Ed = 0;
  function Id(e, t) {
    return function(i, l = null) {
      Te(i) || (i = ht({}, i)), l != null && !ze(l) && (l = null);
      const c = Fu(), f = /* @__PURE__ */ new WeakSet(), h = [];
      let p = false;
      const v = c.app = {
        _uid: Ed++,
        _component: i,
        _props: l,
        _container: null,
        _context: c,
        _instance: null,
        version: sp,
        get config() {
          return c.config;
        },
        set config(w) {
        },
        use(w, ...I) {
          return f.has(w) || (w && Te(w.install) ? (f.add(w), w.install(v, ...I)) : Te(w) && (f.add(w), w(v, ...I))), v;
        },
        mixin(w) {
          return c.mixins.includes(w) || c.mixins.push(w), v;
        },
        component(w, I) {
          return I ? (c.components[w] = I, v) : c.components[w];
        },
        directive(w, I) {
          return I ? (c.directives[w] = I, v) : c.directives[w];
        },
        mount(w, I, P) {
          if (!p) {
            const R = v._ceVNode || Mt(i, l);
            return R.appContext = c, P === true ? P = "svg" : P === false && (P = void 0), e(R, w, P), p = true, v._container = w, w.__vue_app__ = v, rs(R.component);
          }
        },
        onUnmount(w) {
          h.push(w);
        },
        unmount() {
          p && (hn(h, v._instance, 16), e(null, v._container), delete v._container.__vue_app__);
        },
        provide(w, I) {
          return c.provides[w] = I, v;
        },
        runWithContext(w) {
          const I = Sr;
          Sr = v;
          try {
            return w();
          } finally {
            Sr = I;
          }
        }
      };
      return v;
    };
  }
  let Sr = null;
  Td = function(e, t) {
    if (Nt) {
      let n = Nt.provides;
      const i = Nt.parent && Nt.parent.provides;
      i === n && (n = Nt.provides = Object.create(i)), n[e] = t;
    }
  };
  Si = function(e, t, n = false) {
    const i = ar();
    if (i || Sr) {
      let l = Sr ? Sr._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
      if (l && e in l) return l[e];
      if (arguments.length > 1) return n && Te(t) ? t.call(i && i.proxy) : t;
    }
  };
  _d = function() {
    return !!(ar() || Sr);
  };
  const Du = {}, ju = () => Object.create(Du), Uu = (e) => Object.getPrototypeOf(e) === Du;
  function Sd(e, t, n, i = false) {
    const l = {}, c = ju();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Gu(e, t, l, c);
    for (const f in e.propsOptions[0]) f in l || (l[f] = void 0);
    n ? e.props = i ? l : Dh(l) : e.type.props ? e.props = l : e.props = c, e.attrs = c;
  }
  function Od(e, t, n, i) {
    const { props: l, attrs: c, vnode: { patchFlag: f } } = e, h = ke(l), [p] = e.propsOptions;
    let v = false;
    if ((i || f > 0) && !(f & 16)) {
      if (f & 8) {
        const w = e.vnode.dynamicProps;
        for (let I = 0; I < w.length; I++) {
          let P = w[I];
          if (ts(e.emitsOptions, P)) continue;
          const R = t[P];
          if (p) if (Ue(c, P)) R !== c[P] && (c[P] = R, v = true);
          else {
            const k = Kt(P);
            l[k] = Zs(p, h, k, R, e, false);
          }
          else R !== c[P] && (c[P] = R, v = true);
        }
      }
    } else {
      Gu(e, t, l, c) && (v = true);
      let w;
      for (const I in h) (!t || !Ue(t, I) && ((w = $n(I)) === I || !Ue(t, w))) && (p ? n && (n[I] !== void 0 || n[w] !== void 0) && (l[I] = Zs(p, h, I, void 0, e, true)) : delete l[I]);
      if (c !== h) for (const I in c) (!t || !Ue(t, I)) && (delete c[I], v = true);
    }
    v && Ln(e.attrs, "set", "");
  }
  function Gu(e, t, n, i) {
    const [l, c] = e.propsOptions;
    let f = false, h;
    if (t) for (let p in t) {
      if (yi(p)) continue;
      const v = t[p];
      let w;
      l && Ue(l, w = Kt(p)) ? !c || !c.includes(w) ? n[w] = v : (h || (h = {}))[w] = v : ts(e.emitsOptions, p) || (!(p in i) || v !== i[p]) && (i[p] = v, f = true);
    }
    if (c) {
      const p = ke(n), v = h || xe;
      for (let w = 0; w < c.length; w++) {
        const I = c[w];
        n[I] = Zs(l, p, I, v[I], e, !Ue(v, I));
      }
    }
    return f;
  }
  function Zs(e, t, n, i, l, c) {
    const f = e[n];
    if (f != null) {
      const h = Ue(f, "default");
      if (h && i === void 0) {
        const p = f.default;
        if (f.type !== Function && !f.skipFactory && Te(p)) {
          const { propsDefaults: v } = l;
          if (n in v) i = v[n];
          else {
            const w = Hi(l);
            i = v[n] = p.call(null, t), w();
          }
        } else i = p;
        l.ce && l.ce._setProp(n, i);
      }
      f[0] && (c && !h ? i = false : f[1] && (i === "" || i === $n(n)) && (i = true));
    }
    return i;
  }
  const Ad = /* @__PURE__ */ new WeakMap();
  function Wu(e, t, n = false) {
    const i = n ? Ad : t.propsCache, l = i.get(e);
    if (l) return l;
    const c = e.props, f = {}, h = [];
    let p = false;
    if (!Te(e)) {
      const w = (I) => {
        p = true;
        const [P, R] = Wu(I, t, true);
        ht(f, P), R && h.push(...R);
      };
      !n && t.mixins.length && t.mixins.forEach(w), e.extends && w(e.extends), e.mixins && e.mixins.forEach(w);
    }
    if (!c && !p) return ze(e) && i.set(e, Gr), Gr;
    if (ve(c)) for (let w = 0; w < c.length; w++) {
      const I = Kt(c[w]);
      ul(I) && (f[I] = xe);
    }
    else if (c) for (const w in c) {
      const I = Kt(w);
      if (ul(I)) {
        const P = c[w], R = f[I] = ve(P) || Te(P) ? {
          type: P
        } : ht({}, P), k = R.type;
        let L = false, B = true;
        if (ve(k)) for (let F = 0; F < k.length; ++F) {
          const U = k[F], ne = Te(U) && U.name;
          if (ne === "Boolean") {
            L = true;
            break;
          } else ne === "String" && (B = false);
        }
        else L = Te(k) && k.name === "Boolean";
        R[0] = L, R[1] = B, (L || Ue(R, "default")) && h.push(I);
      }
    }
    const v = [
      f,
      h
    ];
    return ze(e) && i.set(e, v), v;
  }
  function ul(e) {
    return e[0] !== "$" && !yi(e);
  }
  const ka = (e) => e === "_" || e === "_ctx" || e === "$stable", xa = (e) => ve(e) ? e.map(vn) : [
    vn(e)
  ], Pd = (e, t, n) => {
    if (t._n) return t;
    const i = Zh((...l) => xa(t(...l)), n);
    return i._c = false, i;
  }, $u = (e, t, n) => {
    const i = e._ctx;
    for (const l in e) {
      if (ka(l)) continue;
      const c = e[l];
      if (Te(c)) t[l] = Pd(l, c, i);
      else if (c != null) {
        const f = xa(c);
        t[l] = () => f;
      }
    }
  }, Bu = (e, t) => {
    const n = xa(t);
    e.slots.default = () => n;
  }, zu = (e, t, n) => {
    for (const i in t) (n || !ka(i)) && (e[i] = t[i]);
  }, Rd = (e, t, n) => {
    const i = e.slots = ju();
    if (e.vnode.shapeFlag & 32) {
      const l = t._;
      l ? (zu(i, t, n), n && $c(i, "_", l, true)) : $u(t, i);
    } else t && Bu(e, t);
  }, Nd = (e, t, n) => {
    const { vnode: i, slots: l } = e;
    let c = true, f = xe;
    if (i.shapeFlag & 32) {
      const h = t._;
      h ? n && h === 1 ? c = false : zu(l, t, n) : (c = !t.$stable, $u(t, l)), f = t;
    } else t && (Bu(e, t), f = {
      default: 1
    });
    if (c) for (const h in l) !ka(h) && f[h] == null && delete l[h];
  }, mt = Hd;
  function Md(e) {
    return Ld(e);
  }
  function Ld(e, t) {
    const n = Vo();
    n.__VUE__ = true;
    const { insert: i, remove: l, patchProp: c, createElement: f, createText: h, createComment: p, setText: v, setElementText: w, parentNode: I, nextSibling: P, setScopeId: R = un, insertStaticContent: k } = e, L = (T, O, x, X = null, K = null, J = null, se = void 0, Q = null, re = !!O.dynamicChildren) => {
      if (T === O) return;
      T && !Zn(T, O) && (X = An(T), ye(T, K, J, true), T = null), O.patchFlag === -2 && (re = false, O.dynamicChildren = null);
      const { type: Y, ref: de, shapeFlag: ae } = O;
      switch (Y) {
        case ns:
          B(T, O, x, X);
          break;
        case It:
          F(T, O, x, X);
          break;
        case Oi:
          T == null && U(O, x, X, se);
          break;
        case Rt:
          fe(T, O, x, X, K, J, se, Q, re);
          break;
        default:
          ae & 1 ? ue(T, O, x, X, K, J, se, Q, re) : ae & 6 ? je(T, O, x, X, K, J, se, Q, re) : (ae & 64 || ae & 128) && Y.process(T, O, x, X, K, J, se, Q, re, ur);
      }
      de != null && K ? Ti(de, T && T.ref, J, O || T, !O) : de == null && T && T.ref != null && Ti(T.ref, null, J, T, true);
    }, B = (T, O, x, X) => {
      if (T == null) i(O.el = h(O.children), x, X);
      else {
        const K = O.el = T.el;
        O.children !== T.children && v(K, O.children);
      }
    }, F = (T, O, x, X) => {
      T == null ? i(O.el = p(O.children || ""), x, X) : O.el = T.el;
    }, U = (T, O, x, X) => {
      [T.el, T.anchor] = k(T.children, O, x, X, T.el, T.anchor);
    }, ne = ({ el: T, anchor: O }, x, X) => {
      let K;
      for (; T && T !== O; ) K = P(T), i(T, x, X), T = K;
      i(O, x, X);
    }, W = ({ el: T, anchor: O }) => {
      let x;
      for (; T && T !== O; ) x = P(T), l(T), T = x;
      l(O);
    }, ue = (T, O, x, X, K, J, se, Q, re) => {
      if (O.type === "svg" ? se = "svg" : O.type === "math" && (se = "mathml"), T == null) Oe(O, x, X, K, J, se, Q, re);
      else {
        const Y = T.el && T.el._isVueCE ? T.el : null;
        try {
          Y && Y._beginPatch(), ie(T, O, K, J, se, Q, re);
        } finally {
          Y && Y._endPatch();
        }
      }
    }, Oe = (T, O, x, X, K, J, se, Q) => {
      let re, Y;
      const { props: de, shapeFlag: ae, transition: pe, dirs: Ee } = T;
      if (re = T.el = f(T.type, J, de && de.is, de), ae & 8 ? w(re, T.children) : ae & 16 && me(T.children, re, null, X, K, vs(T, J), se, Q), Ee && hr(T, null, X, "created"), Ae(re, T, T.scopeId, se, X), de) {
        for (const Fe in de) Fe !== "value" && !yi(Fe) && c(re, Fe, null, de[Fe], J, X);
        "value" in de && c(re, "value", null, de.value, J), (Y = de.onVnodeBeforeMount) && tn(Y, X, T);
      }
      Ee && hr(T, null, X, "beforeMount");
      const Le = Cd(K, pe);
      Le && pe.beforeEnter(re), i(re, O, x), ((Y = de && de.onVnodeMounted) || Le || Ee) && mt(() => {
        Y && tn(Y, X, T), Le && pe.enter(re), Ee && hr(T, null, X, "mounted");
      }, K);
    }, Ae = (T, O, x, X, K) => {
      if (x && R(T, x), X) for (let J = 0; J < X.length; J++) R(T, X[J]);
      if (K) {
        let J = K.subTree;
        if (O === J || Ro(J.type) && (J.ssContent === O || J.ssFallback === O)) {
          const se = K.vnode;
          Ae(T, se, se.scopeId, se.slotScopeIds, K.parent);
        }
      }
    }, me = (T, O, x, X, K, J, se, Q, re = 0) => {
      for (let Y = re; Y < T.length; Y++) {
        const de = T[Y] = Q ? Xn(T[Y]) : vn(T[Y]);
        L(null, de, O, x, X, K, J, se, Q);
      }
    }, ie = (T, O, x, X, K, J, se) => {
      const Q = O.el = T.el;
      let { patchFlag: re, dynamicChildren: Y, dirs: de } = O;
      re |= T.patchFlag & 16;
      const ae = T.props || xe, pe = O.props || xe;
      let Ee;
      if (x && dr(x, false), (Ee = pe.onVnodeBeforeUpdate) && tn(Ee, x, O, T), de && hr(O, T, x, "beforeUpdate"), x && dr(x, true), (ae.innerHTML && pe.innerHTML == null || ae.textContent && pe.textContent == null) && w(Q, ""), Y ? we(T.dynamicChildren, Y, Q, x, X, vs(O, K), J) : se || We(T, O, Q, null, x, X, vs(O, K), J, false), re > 0) {
        if (re & 16) Pe(Q, ae, pe, x, K);
        else if (re & 2 && ae.class !== pe.class && c(Q, "class", null, pe.class, K), re & 4 && c(Q, "style", ae.style, pe.style, K), re & 8) {
          const Le = O.dynamicProps;
          for (let Fe = 0; Fe < Le.length; Fe++) {
            const De = Le[Fe], _t = ae[De], St = pe[De];
            (St !== _t || De === "value") && c(Q, De, _t, St, K, x);
          }
        }
        re & 1 && T.children !== O.children && w(Q, O.children);
      } else !se && Y == null && Pe(Q, ae, pe, x, K);
      ((Ee = pe.onVnodeUpdated) || de) && mt(() => {
        Ee && tn(Ee, x, O, T), de && hr(O, T, x, "updated");
      }, X);
    }, we = (T, O, x, X, K, J, se) => {
      for (let Q = 0; Q < O.length; Q++) {
        const re = T[Q], Y = O[Q], de = re.el && (re.type === Rt || !Zn(re, Y) || re.shapeFlag & 198) ? I(re.el) : x;
        L(re, Y, de, null, X, K, J, se, true);
      }
    }, Pe = (T, O, x, X, K) => {
      if (O !== x) {
        if (O !== xe) for (const J in O) !yi(J) && !(J in x) && c(T, J, O[J], null, K, X);
        for (const J in x) {
          if (yi(J)) continue;
          const se = x[J], Q = O[J];
          se !== Q && J !== "value" && c(T, J, Q, se, K, X);
        }
        "value" in x && c(T, "value", O.value, x.value, K);
      }
    }, fe = (T, O, x, X, K, J, se, Q, re) => {
      const Y = O.el = T ? T.el : h(""), de = O.anchor = T ? T.anchor : h("");
      let { patchFlag: ae, dynamicChildren: pe, slotScopeIds: Ee } = O;
      Ee && (Q = Q ? Q.concat(Ee) : Ee), T == null ? (i(Y, x, X), i(de, x, X), me(O.children || [], x, de, K, J, se, Q, re)) : ae > 0 && ae & 64 && pe && T.dynamicChildren ? (we(T.dynamicChildren, pe, x, K, J, se, Q), (O.key != null || K && O === K.subTree) && Fa(T, O, true)) : We(T, O, x, de, K, J, se, Q, re);
    }, je = (T, O, x, X, K, J, se, Q, re) => {
      O.slotScopeIds = Q, T == null ? O.shapeFlag & 512 ? K.ctx.activate(O, x, X, se, re) : ct(O, x, X, K, J, se, re) : $t(T, O, re);
    }, ct = (T, O, x, X, K, J, se) => {
      const Q = T.component = Qd(T, X, K);
      if (Zo(T) && (Q.ctx.renderer = ur), ep(Q, false, se), Q.asyncDep) {
        if (K && K.registerDep(Q, He, se), !T.el) {
          const re = Q.subTree = Mt(It);
          F(null, re, O, x), T.placeholder = re.el;
        }
      } else He(Q, T, O, x, K, J, se);
    }, $t = (T, O, x) => {
      const X = O.component = T.component;
      if (Bd(T, O, x)) if (X.asyncDep && !X.asyncResolved) {
        Ne(X, O, x);
        return;
      } else X.next = O, X.update();
      else O.el = T.el, X.vnode = O;
    }, He = (T, O, x, X, K, J, se) => {
      const Q = () => {
        if (T.isMounted) {
          let { next: ae, bu: pe, u: Ee, parent: Le, vnode: Fe } = T;
          {
            const Xt = Hu(T);
            if (Xt) {
              ae && (ae.el = Fe.el, Ne(T, ae, se)), Xt.asyncDep.then(() => {
                T.isUnmounted || Q();
              });
              return;
            }
          }
          let De = ae, _t;
          dr(T, false), ae ? (ae.el = Fe.el, Ne(T, ae, se)) : ae = Fe, pe && bi(pe), (_t = ae.props && ae.props.onVnodeBeforeUpdate) && tn(_t, Le, ae, Fe), dr(T, true);
          const St = fl(T), Jt = T.subTree;
          T.subTree = St, L(Jt, St, I(Jt.el), An(Jt), T, K, J), ae.el = St.el, De === null && zd(T, St.el), Ee && mt(Ee, K), (_t = ae.props && ae.props.onVnodeUpdated) && mt(() => tn(_t, Le, ae, Fe), K);
        } else {
          let ae;
          const { el: pe, props: Ee } = O, { bm: Le, m: Fe, parent: De, root: _t, type: St } = T, Jt = _r(O);
          dr(T, false), Le && bi(Le), !Jt && (ae = Ee && Ee.onVnodeBeforeMount) && tn(ae, De, O), dr(T, true);
          {
            _t.ce && _t.ce._def.shadowRoot !== false && _t.ce._injectChildStyle(St);
            const Xt = T.subTree = fl(T);
            L(null, Xt, x, X, T, K, J), O.el = Xt.el;
          }
          if (Fe && mt(Fe, K), !Jt && (ae = Ee && Ee.onVnodeMounted)) {
            const Xt = O;
            mt(() => tn(ae, De, Xt), K);
          }
          (O.shapeFlag & 256 || De && _r(De.vnode) && De.vnode.shapeFlag & 256) && T.a && mt(T.a, K), T.isMounted = true, O = x = X = null;
        }
      };
      T.scope.on();
      const re = T.effect = new Kc(Q);
      T.scope.off();
      const Y = T.update = re.run.bind(re), de = T.job = re.runIfDirty.bind(re);
      de.i = T, de.id = T.uid, re.scheduler = () => Ra(de), dr(T, true), Y();
    }, Ne = (T, O, x) => {
      O.component = T;
      const X = T.vnode.props;
      T.vnode = O, T.next = null, Od(T, O.props, X, x), Nd(T, O.children, x), Dn(), el(T), jn();
    }, We = (T, O, x, X, K, J, se, Q, re = false) => {
      const Y = T && T.children, de = T ? T.shapeFlag : 0, ae = O.children, { patchFlag: pe, shapeFlag: Ee } = O;
      if (pe > 0) {
        if (pe & 128) {
          Mr(Y, ae, x, X, K, J, se, Q, re);
          return;
        } else if (pe & 256) {
          Sn(Y, ae, x, X, K, J, se, Q, re);
          return;
        }
      }
      Ee & 8 ? (de & 16 && Dt(Y, K, J), ae !== Y && w(x, ae)) : de & 16 ? Ee & 16 ? Mr(Y, ae, x, X, K, J, se, Q, re) : Dt(Y, K, J, true) : (de & 8 && w(x, ""), Ee & 16 && me(ae, x, X, K, J, se, Q, re));
    }, Sn = (T, O, x, X, K, J, se, Q, re) => {
      T = T || Gr, O = O || Gr;
      const Y = T.length, de = O.length, ae = Math.min(Y, de);
      let pe;
      for (pe = 0; pe < ae; pe++) {
        const Ee = O[pe] = re ? Xn(O[pe]) : vn(O[pe]);
        L(T[pe], Ee, x, null, K, J, se, Q, re);
      }
      Y > de ? Dt(T, K, J, true, false, ae) : me(O, x, X, K, J, se, Q, re, ae);
    }, Mr = (T, O, x, X, K, J, se, Q, re) => {
      let Y = 0;
      const de = O.length;
      let ae = T.length - 1, pe = de - 1;
      for (; Y <= ae && Y <= pe; ) {
        const Ee = T[Y], Le = O[Y] = re ? Xn(O[Y]) : vn(O[Y]);
        if (Zn(Ee, Le)) L(Ee, Le, x, null, K, J, se, Q, re);
        else break;
        Y++;
      }
      for (; Y <= ae && Y <= pe; ) {
        const Ee = T[ae], Le = O[pe] = re ? Xn(O[pe]) : vn(O[pe]);
        if (Zn(Ee, Le)) L(Ee, Le, x, null, K, J, se, Q, re);
        else break;
        ae--, pe--;
      }
      if (Y > ae) {
        if (Y <= pe) {
          const Ee = pe + 1, Le = Ee < de ? O[Ee].el : X;
          for (; Y <= pe; ) L(null, O[Y] = re ? Xn(O[Y]) : vn(O[Y]), x, Le, K, J, se, Q, re), Y++;
        }
      } else if (Y > pe) for (; Y <= ae; ) ye(T[Y], K, J, true), Y++;
      else {
        const Ee = Y, Le = Y, Fe = /* @__PURE__ */ new Map();
        for (Y = Le; Y <= pe; Y++) {
          const Lt = O[Y] = re ? Xn(O[Y]) : vn(O[Y]);
          Lt.key != null && Fe.set(Lt.key, Y);
        }
        let De, _t = 0;
        const St = pe - Le + 1;
        let Jt = false, Xt = 0;
        const fr = new Array(St);
        for (Y = 0; Y < St; Y++) fr[Y] = 0;
        for (Y = Ee; Y <= ae; Y++) {
          const Lt = T[Y];
          if (_t >= St) {
            ye(Lt, K, J, true);
            continue;
          }
          let Zt;
          if (Lt.key != null) Zt = Fe.get(Lt.key);
          else for (De = Le; De <= pe; De++) if (fr[De - Le] === 0 && Zn(Lt, O[De])) {
            Zt = De;
            break;
          }
          Zt === void 0 ? ye(Lt, K, J, true) : (fr[Zt - Le] = Y + 1, Zt >= Xt ? Xt = Zt : Jt = true, L(Lt, O[Zt], x, null, K, J, se, Q, re), _t++);
        }
        const ei = Jt ? kd(fr) : Gr;
        for (De = ei.length - 1, Y = St - 1; Y >= 0; Y--) {
          const Lt = Le + Y, Zt = O[Lt], Yi = O[Lt + 1], Ki = Lt + 1 < de ? Yi.el || Yi.placeholder : X;
          fr[Y] === 0 ? L(null, Zt, x, Ki, K, J, se, Q, re) : Jt && (De < 0 || Y !== ei[De] ? On(Zt, x, Ki, 2) : De--);
        }
      }
    }, On = (T, O, x, X, K = null) => {
      const { el: J, type: se, transition: Q, children: re, shapeFlag: Y } = T;
      if (Y & 6) {
        On(T.component.subTree, O, x, X);
        return;
      }
      if (Y & 128) {
        T.suspense.move(O, x, X);
        return;
      }
      if (Y & 64) {
        se.move(T, O, x, ur);
        return;
      }
      if (se === Rt) {
        i(J, O, x);
        for (let ae = 0; ae < re.length; ae++) On(re[ae], O, x, X);
        i(T.anchor, O, x);
        return;
      }
      if (se === Oi) {
        ne(T, O, x);
        return;
      }
      if (X !== 2 && Y & 1 && Q) if (X === 0) Q.beforeEnter(J), i(J, O, x), mt(() => Q.enter(J), K);
      else {
        const { leave: ae, delayLeave: pe, afterLeave: Ee } = Q, Le = () => {
          T.ctx.isUnmounted ? l(J) : i(J, O, x);
        }, Fe = () => {
          J._isLeaving && J[Mn](true), ae(J, () => {
            Le(), Ee && Ee();
          });
        };
        pe ? pe(J, Le, Fe) : Fe();
      }
      else i(J, O, x);
    }, ye = (T, O, x, X = false, K = false) => {
      const { type: J, props: se, ref: Q, children: re, dynamicChildren: Y, shapeFlag: de, patchFlag: ae, dirs: pe, cacheIndex: Ee } = T;
      if (ae === -2 && (K = false), Q != null && (Dn(), Ti(Q, null, x, T, true), jn()), Ee != null && (O.renderCache[Ee] = void 0), de & 256) {
        O.ctx.deactivate(T);
        return;
      }
      const Le = de & 1 && pe, Fe = !_r(T);
      let De;
      if (Fe && (De = se && se.onVnodeBeforeUnmount) && tn(De, O, T), de & 6) oe(T.component, x, X);
      else {
        if (de & 128) {
          T.suspense.unmount(x, X);
          return;
        }
        Le && hr(T, null, O, "beforeUnmount"), de & 64 ? T.type.remove(T, O, x, ur, X) : Y && !Y.hasOnce && (J !== Rt || ae > 0 && ae & 64) ? Dt(Y, O, x, false, true) : (J === Rt && ae & 384 || !K && de & 16) && Dt(re, O, x), X && Qr(T);
      }
      (Fe && (De = se && se.onVnodeUnmounted) || Le) && mt(() => {
        De && tn(De, O, T), Le && hr(T, null, O, "unmounted");
      }, x);
    }, Qr = (T) => {
      const { type: O, el: x, anchor: X, transition: K } = T;
      if (O === Rt) {
        fs(x, X);
        return;
      }
      if (O === Oi) {
        W(T);
        return;
      }
      const J = () => {
        l(x), K && !K.persisted && K.afterLeave && K.afterLeave();
      };
      if (T.shapeFlag & 1 && K && !K.persisted) {
        const { leave: se, delayLeave: Q } = K, re = () => se(x, J);
        Q ? Q(T.el, J, re) : re();
      } else J();
    }, fs = (T, O) => {
      let x;
      for (; T !== O; ) x = P(T), l(T), T = x;
      l(O);
    }, oe = (T, O, x) => {
      const { bum: X, scope: K, job: J, subTree: se, um: Q, m: re, a: Y } = T;
      Po(re), Po(Y), X && bi(X), K.stop(), J && (J.flags |= 8, ye(se, T, O, x)), Q && mt(Q, O), mt(() => {
        T.isUnmounted = true;
      }, O);
    }, Dt = (T, O, x, X = false, K = false, J = 0) => {
      for (let se = J; se < T.length; se++) ye(T[se], O, x, X, K);
    }, An = (T) => {
      if (T.shapeFlag & 6) return An(T.component.subTree);
      if (T.shapeFlag & 128) return T.suspense.next();
      const O = P(T.anchor || T.el), x = O && O[vu];
      return x ? P(x) : O;
    };
    let Bt = false;
    const qi = (T, O, x) => {
      T == null ? O._vnode && ye(O._vnode, null, null, true) : L(O._vnode || null, T, O, null, null, null, x), O._vnode = T, Bt || (Bt = true, el(), wu(), Bt = false);
    }, ur = {
      p: L,
      um: ye,
      m: On,
      r: Qr,
      mt: ct,
      mc: me,
      pc: We,
      pbc: we,
      n: An,
      o: e
    };
    return {
      render: qi,
      hydrate: void 0,
      createApp: Id(qi)
    };
  }
  function vs({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function dr({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Cd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Fa(e, t, n = false) {
    const i = e.children, l = t.children;
    if (ve(i) && ve(l)) for (let c = 0; c < i.length; c++) {
      const f = i[c];
      let h = l[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = l[c] = Xn(l[c]), h.el = f.el), !n && h.patchFlag !== -2 && Fa(f, h)), h.type === ns && h.patchFlag !== -1 && (h.el = f.el), h.type === It && !h.el && (h.el = f.el);
    }
  }
  function kd(e) {
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
  function Hu(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Hu(t);
  }
  function Po(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const xd = Symbol.for("v-scx"), Fd = () => Si(xd);
  Uv = function(e, t) {
    return es(e, null, t);
  };
  function Dd(e, t) {
    return es(e, null, {
      flush: "sync"
    });
  }
  Br = function(e, t, n) {
    return es(e, t, n);
  };
  function es(e, t, n = xe) {
    const { immediate: i, deep: l, flush: c, once: f } = n, h = ht({}, n), p = t && i || !t && c !== "post";
    let v;
    if (Fi) {
      if (c === "sync") {
        const R = Fd();
        v = R.__watcherHandles || (R.__watcherHandles = []);
      } else if (!p) {
        const R = () => {
        };
        return R.stop = un, R.resume = un, R.pause = un, R;
      }
    }
    const w = Nt;
    h.call = (R, k, L) => hn(R, w, k, L);
    let I = false;
    c === "post" ? h.scheduler = (R) => {
      mt(R, w && w.suspense);
    } : c !== "sync" && (I = true, h.scheduler = (R, k) => {
      k ? R() : Ra(R);
    }), h.augmentJob = (R) => {
      t && (R.flags |= 4), I && (R.flags |= 2, w && (R.id = w.uid, R.i = w));
    };
    const P = Kh(e, t, h);
    return Fi && (v ? v.push(P) : p && P()), P;
  }
  function jd(e, t, n) {
    const i = this.proxy, l = rt(e) ? e.includes(".") ? Vu(i, e) : () => i[e] : e.bind(i, i);
    let c;
    Te(t) ? c = t : (c = t.handler, n = t);
    const f = Hi(this), h = es(l, c.bind(i), n);
    return f(), h;
  }
  function Vu(e, t) {
    const n = t.split(".");
    return () => {
      let i = e;
      for (let l = 0; l < n.length && i; l++) i = i[n[l]];
      return i;
    };
  }
  Gv = function(e, t, n = xe) {
    const i = ar(), l = Kt(t), c = $n(t), f = qu(e, l), h = $h((p, v) => {
      let w, I = xe, P;
      return Dd(() => {
        const R = e[l];
        Wt(w, R) && (w = R, v());
      }), {
        get() {
          return p(), n.get ? n.get(w) : w;
        },
        set(R) {
          const k = n.set ? n.set(R) : R;
          if (!Wt(k, w) && !(I !== xe && Wt(R, I))) return;
          const L = i.vnode.props;
          L && (t in L || l in L || c in L) && (`onUpdate:${t}` in L || `onUpdate:${l}` in L || `onUpdate:${c}` in L) || (w = R, v()), i.emit(`update:${t}`, k), Wt(R, k) && Wt(R, I) && !Wt(k, P) && v(), I = R, P = k;
        }
      };
    });
    return h[Symbol.iterator] = () => {
      let p = 0;
      return {
        next() {
          return p < 2 ? {
            value: p++ ? f || xe : h,
            done: false
          } : {
            done: true
          };
        }
      };
    }, h;
  };
  const qu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Kt(t)}Modifiers`] || e[`${$n(t)}Modifiers`];
  function Ud(e, t, ...n) {
    if (e.isUnmounted) return;
    const i = e.vnode.props || xe;
    let l = n;
    const c = t.startsWith("update:"), f = c && qu(i, t.slice(7));
    f && (f.trim && (l = n.map((w) => rt(w) ? w.trim() : w)), f.number && (l = n.map(lh)));
    let h, p = i[h = hs(t)] || i[h = hs(Kt(t))];
    !p && c && (p = i[h = hs($n(t))]), p && hn(p, e, 6, l);
    const v = i[h + "Once"];
    if (v) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[h]) return;
      e.emitted[h] = true, hn(v, e, 6, l);
    }
  }
  const Gd = /* @__PURE__ */ new WeakMap();
  function Yu(e, t, n = false) {
    const i = n ? Gd : t.emitsCache, l = i.get(e);
    if (l !== void 0) return l;
    const c = e.emits;
    let f = {}, h = false;
    if (!Te(e)) {
      const p = (v) => {
        const w = Yu(v, t, true);
        w && (h = true, ht(f, w));
      };
      !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
    }
    return !c && !h ? (ze(e) && i.set(e, null), null) : (ve(c) ? c.forEach((p) => f[p] = null) : ht(f, c), ze(e) && i.set(e, f), f);
  }
  function ts(e, t) {
    return !e || !Bo(t) ? false : (t = t.slice(2).replace(/Once$/, ""), Ue(e, t[0].toLowerCase() + t.slice(1)) || Ue(e, $n(t)) || Ue(e, t));
  }
  function fl(e) {
    const { type: t, vnode: n, proxy: i, withProxy: l, propsOptions: [c], slots: f, attrs: h, emit: p, render: v, renderCache: w, props: I, data: P, setupState: R, ctx: k, inheritAttrs: L } = e, B = _o(e);
    let F, U;
    try {
      if (n.shapeFlag & 4) {
        const W = l || i, ue = W;
        F = vn(v.call(ue, W, w, I, R, P, k)), U = h;
      } else {
        const W = t;
        F = vn(W.length > 1 ? W(I, {
          attrs: h,
          slots: f,
          emit: p
        }) : W(I, null)), U = t.props ? h : Wd(h);
      }
    } catch (W) {
      Ai.length = 0, Xo(W, e, 1), F = Mt(It);
    }
    let ne = F;
    if (U && L !== false) {
      const W = Object.keys(U), { shapeFlag: ue } = ne;
      W.length && ue & 7 && (c && W.some(ya) && (U = $d(U, c)), ne = Un(ne, U, false, true));
    }
    return n.dirs && (ne = Un(ne, null, false, true), ne.dirs = ne.dirs ? ne.dirs.concat(n.dirs) : n.dirs), n.transition && or(ne, n.transition), F = ne, _o(B), F;
  }
  const Wd = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Bo(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, $d = (e, t) => {
    const n = {};
    for (const i in e) (!ya(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
  function Bd(e, t, n) {
    const { props: i, children: l, component: c } = e, { props: f, children: h, patchFlag: p } = t, v = c.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && p >= 0) {
      if (p & 1024) return true;
      if (p & 16) return i ? hl(i, f, v) : !!f;
      if (p & 8) {
        const w = t.dynamicProps;
        for (let I = 0; I < w.length; I++) {
          const P = w[I];
          if (f[P] !== i[P] && !ts(v, P)) return true;
        }
      }
    } else return (l || h) && (!h || !h.$stable) ? true : i === f ? false : i ? f ? hl(i, f, v) : true : !!f;
    return false;
  }
  function hl(e, t, n) {
    const i = Object.keys(t);
    if (i.length !== Object.keys(e).length) return true;
    for (let l = 0; l < i.length; l++) {
      const c = i[l];
      if (t[c] !== e[c] && !ts(n, c)) return true;
    }
    return false;
  }
  function zd({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const i = t.subTree;
      if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Ro = (e) => e.__isSuspense;
  function Hd(e, t) {
    t && t.pendingBranch ? ve(e) ? t.effects.push(...e) : t.effects.push(e) : mu(e);
  }
  let Oi, Ai;
  Rt = Symbol.for("v-fgt");
  ns = Symbol.for("v-txt");
  It = Symbol.for("v-cmt");
  Oi = Symbol.for("v-stc");
  Ai = [];
  let Yt = null;
  an = function(e = false) {
    Ai.push(Yt = e ? null : []);
  };
  function Vd() {
    Ai.pop(), Yt = Ai[Ai.length - 1] || null;
  }
  let xi = 1;
  function No(e, t = false) {
    xi += e, e < 0 && Yt && t && (Yt.hasOnce = true);
  }
  function Ku(e) {
    return e.dynamicChildren = xi > 0 ? Yt || Gr : null, Vd(), xi > 0 && Yt && Yt.push(e), e;
  }
  Hn = function(e, t, n, i, l, c) {
    return Ku(tt(e, t, n, i, l, c, true));
  };
  Qs = function(e, t, n, i, l) {
    return Ku(Mt(e, t, n, i, l, true));
  };
  Vr = function(e) {
    return e ? e.__v_isVNode === true : false;
  };
  function Zn(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Ju = ({ key: e }) => e ?? null, fo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? rt(e) || at(e) || Te(e) ? {
    i: Tt,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  tt = function(e, t = null, n = null, i = 0, l = null, c = e === Rt ? 0 : 1, f = false, h = false) {
    const p = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Ju(t),
      ref: t && fo(t),
      scopeId: bu,
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
      ctx: Tt
    };
    return h ? (Da(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= rt(n) ? 8 : 16), xi > 0 && !f && Yt && (p.patchFlag > 0 || c & 6) && p.patchFlag !== 32 && Yt.push(p), p;
  };
  Mt = qd;
  function qd(e, t = null, n = null, i = 0, l = null, c = false) {
    if ((!e || e === Lu) && (e = It), Vr(e)) {
      const h = Un(e, t, true);
      return n && Da(h, n), xi > 0 && !c && Yt && (h.shapeFlag & 6 ? Yt[Yt.indexOf(e)] = h : Yt.push(h)), h.patchFlag = -2, h;
    }
    if (ip(e) && (e = e.__vccOpts), t) {
      t = Yd(t);
      let { class: h, style: p } = t;
      h && !rt(h) && (t.class = Ea(h)), ze(p) && (Aa(p) && !ve(p) && (p = ht({}, p)), t.style = qo(p));
    }
    const f = rt(e) ? 1 : Ro(e) ? 128 : Eu(e) ? 64 : ze(e) ? 4 : Te(e) ? 2 : 0;
    return tt(e, t, n, i, l, f, c, true);
  }
  function Yd(e) {
    return e ? Aa(e) || Uu(e) ? ht({}, e) : e : null;
  }
  Un = function(e, t, n = false, i = false) {
    const { props: l, ref: c, patchFlag: f, children: h, transition: p } = e, v = t ? Jd(l || {}, t) : l, w = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: v,
      key: v && Ju(v),
      ref: t && t.ref ? n && c ? ve(c) ? c.concat(fo(t)) : [
        c,
        fo(t)
      ] : fo(t) : c,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: h,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Rt ? f === -1 ? 16 : f | 16 : f,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: p,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Un(e.ssContent),
      ssFallback: e.ssFallback && Un(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return p && i && or(w, p.clone(w)), w;
  };
  Kd = function(e = " ", t = 0) {
    return Mt(ns, null, e, t);
  };
  Wv = function(e, t) {
    const n = Mt(Oi, null, e);
    return n.staticCount = t, n;
  };
  Es = function(e = "", t = false) {
    return t ? (an(), Qs(It, null, e)) : Mt(It, null, e);
  };
  function vn(e) {
    return e == null || typeof e == "boolean" ? Mt(It) : ve(e) ? Mt(Rt, null, e.slice()) : Vr(e) ? Xn(e) : Mt(ns, null, String(e));
  }
  function Xn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Un(e);
  }
  function Da(e, t) {
    let n = 0;
    const { shapeFlag: i } = e;
    if (t == null) t = null;
    else if (ve(t)) n = 16;
    else if (typeof t == "object") if (i & 65) {
      const l = t.default;
      l && (l._c && (l._d = false), Da(e, l()), l._c && (l._d = true));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Uu(t) ? t._ctx = Tt : l === 3 && Tt && (Tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else Te(t) ? (t = {
      default: t,
      _ctx: Tt
    }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [
      Kd(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Jd = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      for (const l in i) if (l === "class") t.class !== i.class && (t.class = Ea([
        t.class,
        i.class
      ]));
      else if (l === "style") t.style = qo([
        t.style,
        i.style
      ]);
      else if (Bo(l)) {
        const c = t[l], f = i[l];
        f && c !== f && !(ve(c) && c.includes(f)) && (t[l] = c ? [].concat(c, f) : f);
      } else l !== "" && (t[l] = i[l]);
    }
    return t;
  };
  function tn(e, t, n, i = null) {
    hn(e, t, 7, [
      n,
      i
    ]);
  }
  const Xd = Fu();
  let Zd = 0;
  function Qd(e, t, n) {
    const i = e.type, l = (t ? t.appContext : e.appContext) || Xd, c = {
      uid: Zd++,
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
      scope: new Vc(true),
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
      propsOptions: Wu(i, l),
      emitsOptions: Yu(i, l),
      emit: null,
      emitted: null,
      propsDefaults: xe,
      inheritAttrs: i.inheritAttrs,
      ctx: xe,
      data: xe,
      props: xe,
      attrs: xe,
      slots: xe,
      refs: xe,
      setupState: xe,
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
    }, c.root = t ? t.root : c, c.emit = Ud.bind(null, c), e.ce && e.ce(c), c;
  }
  let Nt = null;
  ar = () => Nt || Tt;
  let Mo, ea;
  {
    const e = Vo(), t = (n, i) => {
      let l;
      return (l = e[n]) || (l = e[n] = []), l.push(i), (c) => {
        l.length > 1 ? l.forEach((f) => f(c)) : l[0](c);
      };
    };
    Mo = t("__VUE_INSTANCE_SETTERS__", (n) => Nt = n), ea = t("__VUE_SSR_SETTERS__", (n) => Fi = n);
  }
  const Hi = (e) => {
    const t = Nt;
    return Mo(e), e.scope.on(), () => {
      e.scope.off(), Mo(t);
    };
  }, dl = () => {
    Nt && Nt.scope.off(), Mo(null);
  };
  function Xu(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Fi = false;
  function ep(e, t = false, n = false) {
    t && ea(t);
    const { props: i, children: l } = e.vnode, c = Xu(e);
    Sd(e, i, c, t), Rd(e, l, n || t);
    const f = c ? tp(e, t) : void 0;
    return t && ea(false), f;
  }
  function tp(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gd);
    const { setup: i } = n;
    if (i) {
      Dn();
      const l = e.setupContext = i.length > 1 ? rp(e) : null, c = Hi(e), f = Bi(i, e, 0, [
        e.props,
        l
      ]), h = Uc(f);
      if (jn(), c(), (h || e.sp) && !_r(e) && Ru(e), h) {
        if (f.then(dl, dl), t) return f.then((p) => {
          pl(e, p);
        }).catch((p) => {
          Xo(p, e, 0);
        });
        e.asyncDep = f;
      } else pl(e, f);
    } else Zu(e);
  }
  function pl(e, t, n) {
    Te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ze(t) && (e.setupState = fu(t)), Zu(e);
  }
  function Zu(e, t, n) {
    const i = e.type;
    e.render || (e.render = i.render || un);
    {
      const l = Hi(e);
      Dn();
      try {
        md(e);
      } finally {
        jn(), l();
      }
    }
  }
  const np = {
    get(e, t) {
      return Pt(e, "get", ""), e[t];
    }
  };
  function rp(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, np),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function rs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fu(Pa(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in _i) return _i[n](e);
      },
      has(t, n) {
        return n in t || n in _i;
      }
    })) : e.proxy;
  }
  function ta(e, t = true) {
    return Te(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function ip(e) {
    return Te(e) && "__vccOpts" in e;
  }
  ja = (e, t) => qh(e, t, Fi);
  op = function(e, t, n) {
    try {
      No(-1);
      const i = arguments.length;
      return i === 2 ? ze(t) && !ve(t) ? Vr(t) ? Mt(e, null, [
        t
      ]) : Mt(e, t) : Mt(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Vr(n) && (n = [
        n
      ]), Mt(e, t, n));
    } finally {
      No(1);
    }
  };
  const sp = "3.5.24";
  let na;
  const gl = typeof window < "u" && window.trustedTypes;
  if (gl) try {
    na = gl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Qu, ap, lp, Nn, ml, cp, Vn, ni, qr, ef, tf, up, pr, wl;
  Qu = na ? (e) => na.createHTML(e) : (e) => e;
  ap = "http://www.w3.org/2000/svg";
  lp = "http://www.w3.org/1998/Math/MathML";
  Nn = typeof document < "u" ? document : null;
  ml = Nn && Nn.createElement("template");
  cp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const l = t === "svg" ? Nn.createElementNS(ap, e) : t === "mathml" ? Nn.createElementNS(lp, e) : n ? Nn.createElement(e, {
        is: n
      }) : Nn.createElement(e);
      return e === "select" && i && i.multiple != null && l.setAttribute("multiple", i.multiple), l;
    },
    createText: (e) => Nn.createTextNode(e),
    createComment: (e) => Nn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Nn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, l, c) {
      const f = n ? n.previousSibling : t.lastChild;
      if (l && (l === c || l.nextSibling)) for (; t.insertBefore(l.cloneNode(true), n), !(l === c || !(l = l.nextSibling)); ) ;
      else {
        ml.innerHTML = Qu(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
        const h = ml.content;
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
  Vn = "transition";
  ni = "animation";
  qr = Symbol("_vtc");
  ef = {
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
  tf = ht({}, Su, ef);
  up = (e) => (e.displayName = "Transition", e.props = tf, e);
  $v = up((e, { slots: t }) => op(td, nf(e), t));
  pr = (e, t = []) => {
    ve(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  wl = (e) => e ? ve(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function nf(e) {
    const t = {};
    for (const fe in e) fe in ef || (t[fe] = e[fe]);
    if (e.css === false) return t;
    const { name: n = "v", type: i, duration: l, enterFromClass: c = `${n}-enter-from`, enterActiveClass: f = `${n}-enter-active`, enterToClass: h = `${n}-enter-to`, appearFromClass: p = c, appearActiveClass: v = f, appearToClass: w = h, leaveFromClass: I = `${n}-leave-from`, leaveActiveClass: P = `${n}-leave-active`, leaveToClass: R = `${n}-leave-to` } = e, k = fp(l), L = k && k[0], B = k && k[1], { onBeforeEnter: F, onEnter: U, onEnterCancelled: ne, onLeave: W, onLeaveCancelled: ue, onBeforeAppear: Oe = F, onAppear: Ae = U, onAppearCancelled: me = ne } = t, ie = (fe, je, ct, $t) => {
      fe._enterCancelled = $t, Yn(fe, je ? w : h), Yn(fe, je ? v : f), ct && ct();
    }, we = (fe, je) => {
      fe._isLeaving = false, Yn(fe, I), Yn(fe, R), Yn(fe, P), je && je();
    }, Pe = (fe) => (je, ct) => {
      const $t = fe ? Ae : U, He = () => ie(je, fe, ct);
      pr($t, [
        je,
        He
      ]), yl(() => {
        Yn(je, fe ? p : c), gn(je, fe ? w : h), wl($t) || bl(je, i, L, He);
      });
    };
    return ht(t, {
      onBeforeEnter(fe) {
        pr(F, [
          fe
        ]), gn(fe, c), gn(fe, f);
      },
      onBeforeAppear(fe) {
        pr(Oe, [
          fe
        ]), gn(fe, p), gn(fe, v);
      },
      onEnter: Pe(false),
      onAppear: Pe(true),
      onLeave(fe, je) {
        fe._isLeaving = true;
        const ct = () => we(fe, je);
        gn(fe, I), fe._enterCancelled ? (gn(fe, P), ra(fe)) : (ra(fe), gn(fe, P)), yl(() => {
          fe._isLeaving && (Yn(fe, I), gn(fe, R), wl(W) || bl(fe, i, B, ct));
        }), pr(W, [
          fe,
          ct
        ]);
      },
      onEnterCancelled(fe) {
        ie(fe, false, void 0, true), pr(ne, [
          fe
        ]);
      },
      onAppearCancelled(fe) {
        ie(fe, true, void 0, true), pr(me, [
          fe
        ]);
      },
      onLeaveCancelled(fe) {
        we(fe), pr(ue, [
          fe
        ]);
      }
    });
  }
  function fp(e) {
    if (e == null) return null;
    if (ze(e)) return [
      Is(e.enter),
      Is(e.leave)
    ];
    {
      const t = Is(e);
      return [
        t,
        t
      ];
    }
  }
  function Is(e) {
    return ch(e);
  }
  function gn(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[qr] || (e[qr] = /* @__PURE__ */ new Set())).add(t);
  }
  function Yn(e, t) {
    t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
    const n = e[qr];
    n && (n.delete(t), n.size || (e[qr] = void 0));
  }
  function yl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let hp = 0;
  function bl(e, t, n, i) {
    const l = e._endId = ++hp, c = () => {
      l === e._endId && i();
    };
    if (n != null) return setTimeout(c, n);
    const { type: f, timeout: h, propCount: p } = rf(e, t);
    if (!f) return i();
    const v = f + "end";
    let w = 0;
    const I = () => {
      e.removeEventListener(v, P), c();
    }, P = (R) => {
      R.target === e && ++w >= p && I();
    };
    setTimeout(() => {
      w < p && I();
    }, h + 1), e.addEventListener(v, P);
  }
  function rf(e, t) {
    const n = window.getComputedStyle(e), i = (k) => (n[k] || "").split(", "), l = i(`${Vn}Delay`), c = i(`${Vn}Duration`), f = vl(l, c), h = i(`${ni}Delay`), p = i(`${ni}Duration`), v = vl(h, p);
    let w = null, I = 0, P = 0;
    t === Vn ? f > 0 && (w = Vn, I = f, P = c.length) : t === ni ? v > 0 && (w = ni, I = v, P = p.length) : (I = Math.max(f, v), w = I > 0 ? f > v ? Vn : ni : null, P = w ? w === Vn ? c.length : p.length : 0);
    const R = w === Vn && /\b(?:transform|all)(?:,|$)/.test(i(`${Vn}Property`).toString());
    return {
      type: w,
      timeout: I,
      propCount: P,
      hasTransform: R
    };
  }
  function vl(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, i) => El(n) + El(e[i])));
  }
  function El(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function ra(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
  }
  function dp(e, t, n) {
    const i = e[qr];
    i && (t = (t ? [
      t,
      ...i
    ] : [
      ...i
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let Lo, of;
  Lo = Symbol("_vod");
  of = Symbol("_vsh");
  Bv = {
    name: "show",
    beforeMount(e, { value: t }, { transition: n }) {
      e[Lo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ri(e, t);
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
    e.style.display = t ? e[Lo] : "none", e[of] = !t;
  }
  const sf = Symbol("");
  zv = function(e) {
    const t = ar();
    if (!t) return;
    const n = t.ut = (l = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((c) => Co(c, l));
    }, i = () => {
      const l = e(t.proxy);
      t.ce ? Co(t.ce, l) : ia(t.subTree, l), n(l);
    };
    Mu(() => {
      mu(i);
    }), zi(() => {
      Br(i, un, {
        flush: "post"
      });
      const l = new MutationObserver(i);
      l.observe(t.subTree.el.parentNode, {
        childList: true
      }), Ca(() => l.disconnect());
    });
  };
  function ia(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        ia(n.activeBranch, t);
      });
    }
    for (; e.component; ) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) Co(e.el, t);
    else if (e.type === Rt) e.children.forEach((n) => ia(n, t));
    else if (e.type === Oi) {
      let { el: n, anchor: i } = e;
      for (; n && (Co(n, t), n !== i); ) n = n.nextSibling;
    }
  }
  function Co(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      let i = "";
      for (const l in t) {
        const c = mh(t[l]);
        n.setProperty(`--${l}`, c), i += `--${l}: ${c};`;
      }
      n[sf] = i;
    }
  }
  const pp = /(?:^|;)\s*display\s*:/;
  function gp(e, t, n) {
    const i = e.style, l = rt(n);
    let c = false;
    if (n && !l) {
      if (t) if (rt(t)) for (const f of t.split(";")) {
        const h = f.slice(0, f.indexOf(":")).trim();
        n[h] == null && ho(i, h, "");
      }
      else for (const f in t) n[f] == null && ho(i, f, "");
      for (const f in n) f === "display" && (c = true), ho(i, f, n[f]);
    } else if (l) {
      if (t !== n) {
        const f = i[sf];
        f && (n += ";" + f), i.cssText = n, c = pp.test(n);
      }
    } else t && e.removeAttribute("style");
    Lo in e && (e[Lo] = c ? i.display : "", e[of] && (i.display = "none"));
  }
  const Il = /\s*!important$/;
  function ho(e, t, n) {
    if (ve(n)) n.forEach((i) => ho(e, t, i));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const i = mp(e, t);
      Il.test(n) ? e.setProperty($n(i), n.replace(Il, ""), "important") : e[i] = n;
    }
  }
  const Tl = [
    "Webkit",
    "Moz",
    "ms"
  ], Ts = {};
  function mp(e, t) {
    const n = Ts[t];
    if (n) return n;
    let i = Kt(t);
    if (i !== "filter" && i in e) return Ts[t] = i;
    i = Ho(i);
    for (let l = 0; l < Tl.length; l++) {
      const c = Tl[l] + i;
      if (c in e) return Ts[t] = c;
    }
    return t;
  }
  const _l = "http://www.w3.org/1999/xlink";
  function Sl(e, t, n, i, l, c = gh(t)) {
    i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_l, t.slice(6, t.length)) : e.setAttributeNS(_l, t, n) : n == null || c && !Bc(n) ? e.removeAttribute(t) : e.setAttribute(t, c ? "" : Wn(n) ? String(n) : n);
  }
  function Ol(e, t, n, i, l) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? Qu(n) : n);
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
      h === "boolean" ? n = Bc(n) : n == null && h === "string" ? (n = "", f = true) : h === "number" && (n = 0, f = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    f && e.removeAttribute(l || t);
  }
  function wp(e, t, n, i) {
    e.addEventListener(t, n, i);
  }
  function yp(e, t, n, i) {
    e.removeEventListener(t, n, i);
  }
  const Al = Symbol("_vei");
  function bp(e, t, n, i, l = null) {
    const c = e[Al] || (e[Al] = {}), f = c[t];
    if (i && f) f.value = i;
    else {
      const [h, p] = vp(t);
      if (i) {
        const v = c[t] = Tp(i, l);
        wp(e, h, v, p);
      } else f && (yp(e, h, f, p), c[t] = void 0);
    }
  }
  const Pl = /(?:Once|Passive|Capture)$/;
  function vp(e) {
    let t;
    if (Pl.test(e)) {
      t = {};
      let i;
      for (; i = e.match(Pl); ) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : $n(e.slice(2)),
      t
    ];
  }
  let _s = 0;
  const Ep = Promise.resolve(), Ip = () => _s || (Ep.then(() => _s = 0), _s = Date.now());
  function Tp(e, t) {
    const n = (i) => {
      if (!i._vts) i._vts = Date.now();
      else if (i._vts <= n.attached) return;
      hn(_p(i, n.value), t, 5, [
        i
      ]);
    };
    return n.value = e, n.attached = Ip(), n;
  }
  function _p(e, t) {
    if (ve(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((i) => (l) => !l._stopped && i && i(l));
    } else return t;
  }
  const Rl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Sp = (e, t, n, i, l, c) => {
    const f = l === "svg";
    t === "class" ? dp(e, i, f) : t === "style" ? gp(e, n, i) : Bo(t) ? ya(t) || bp(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Op(e, t, i, f)) ? (Ol(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Sl(e, t, i, f, c, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !rt(i)) ? Ol(e, Kt(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Sl(e, t, i, f));
  };
  function Op(e, t, n, i) {
    if (i) return !!(t === "innerHTML" || t === "textContent" || t in e && Rl(t) && Te(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const l = e.tagName;
      if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE") return false;
    }
    return Rl(t) && rt(n) ? false : t in e;
  }
  let af, lf, ko, Nl, Ap, Pp;
  af = /* @__PURE__ */ new WeakMap();
  lf = /* @__PURE__ */ new WeakMap();
  ko = Symbol("_moveCb");
  Nl = Symbol("_enterCb");
  Ap = (e) => (delete e.props.mode, e);
  Pp = Ap({
    name: "TransitionGroup",
    props: ht({}, tf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = ar(), i = _u();
      let l, c;
      return Ma(() => {
        if (!l.length) return;
        const f = e.moveClass || `${e.name || "v"}-move`;
        if (!Lp(l[0].el, n.vnode.el, f)) {
          l = [];
          return;
        }
        l.forEach(Rp), l.forEach(Np);
        const h = l.filter(Mp);
        ra(n.vnode.el), h.forEach((p) => {
          const v = p.el, w = v.style;
          gn(v, f), w.transform = w.webkitTransform = w.transitionDuration = "";
          const I = v[ko] = (P) => {
            P && P.target !== v || (!P || P.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", I), v[ko] = null, Yn(v, f));
          };
          v.addEventListener("transitionend", I);
        }), l = [];
      }), () => {
        const f = ke(e), h = nf(f);
        let p = f.tag || Rt;
        if (l = [], c) for (let v = 0; v < c.length; v++) {
          const w = c[v];
          w.el && w.el instanceof Element && (l.push(w), or(w, ki(w, h, i, n)), af.set(w, {
            left: w.el.offsetLeft,
            top: w.el.offsetTop
          }));
        }
        c = t.default ? Na(t.default()) : [];
        for (let v = 0; v < c.length; v++) {
          const w = c[v];
          w.key != null && or(w, ki(w, h, i, n));
        }
        return Mt(p, null, c);
      };
    }
  });
  Hv = Pp;
  function Rp(e) {
    const t = e.el;
    t[ko] && t[ko](), t[Nl] && t[Nl]();
  }
  function Np(e) {
    lf.set(e, {
      left: e.el.offsetLeft,
      top: e.el.offsetTop
    });
  }
  function Mp(e) {
    const t = af.get(e), n = lf.get(e), i = t.left - n.left, l = t.top - n.top;
    if (i || l) {
      const c = e.el.style;
      return c.transform = c.webkitTransform = `translate(${i}px,${l}px)`, c.transitionDuration = "0s", e;
    }
  }
  function Lp(e, t, n) {
    const i = e.cloneNode(), l = e[qr];
    l && l.forEach((h) => {
      h.split(/\s+/).forEach((p) => p && i.classList.remove(p));
    }), n.split(/\s+/).forEach((h) => h && i.classList.add(h)), i.style.display = "none";
    const c = t.nodeType === 1 ? t : t.parentNode;
    c.appendChild(i);
    const { hasTransform: f } = rf(i);
    return c.removeChild(i), f;
  }
  let Cp, kp, xp, Fp;
  Cp = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  kp = {
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
    exact: (e, t) => Cp.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  Vv = (e, t) => {
    const n = e._withMods || (e._withMods = {}), i = t.join(".");
    return n[i] || (n[i] = ((l, ...c) => {
      for (let f = 0; f < t.length; f++) {
        const h = kp[t[f]];
        if (h && h(l, t)) return;
      }
      return e(l, ...c);
    }));
  };
  xp = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  qv = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
    return n[i] || (n[i] = ((l) => {
      if (!("key" in l)) return;
      const c = $n(l.key);
      if (t.some((f) => f === c || xp[f] === c)) return e(l);
    }));
  };
  Fp = ht({
    patchProp: Sp
  }, cp);
  let Ml;
  function Dp() {
    return Ml || (Ml = Md(Fp));
  }
  const cf = ((...e) => {
    const t = Dp().createApp(...e), { mount: n } = t;
    return t.mount = (i) => {
      const l = Up(i);
      if (!l) return;
      const c = t._component;
      !Te(c) && !c.render && !c.template && (c.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
      const f = n(l, false, jp(l));
      return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), f;
    }, t;
  });
  function jp(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Up(e) {
    return rt(e) ? document.querySelector(e) : e;
  }
  const Gp = "" + new URL("../favicon.svg", import.meta.url).href;
  let uf, Wp, ff, $p, Bp, ii;
  uf = typeof global == "object" && global && global.Object === Object && global;
  Wp = typeof self == "object" && self && self.Object === Object && self;
  _n = uf || Wp || Function("return this")();
  sr = _n.Symbol;
  ff = Object.prototype;
  $p = ff.hasOwnProperty;
  Bp = ff.toString;
  ii = sr ? sr.toStringTag : void 0;
  function zp(e) {
    var t = $p.call(e, ii), n = e[ii];
    try {
      e[ii] = void 0;
      var i = true;
    } catch {
    }
    var l = Bp.call(e);
    return i && (t ? e[ii] = n : delete e[ii]), l;
  }
  var Hp = Object.prototype, Vp = Hp.toString;
  function qp(e) {
    return Vp.call(e);
  }
  var Yp = "[object Null]", Kp = "[object Undefined]", Ll = sr ? sr.toStringTag : void 0;
  lr = function(e) {
    return e == null ? e === void 0 ? Kp : Yp : Ll && Ll in Object(e) ? zp(e) : qp(e);
  };
  Tn = function(e) {
    return e != null && typeof e == "object";
  };
  Yr = Array.isArray;
  is = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Jp = "[object AsyncFunction]", Xp = "[object Function]", Zp = "[object GeneratorFunction]", Qp = "[object Proxy]";
  hf = function(e) {
    if (!is(e)) return false;
    var t = lr(e);
    return t == Xp || t == Zp || t == Jp || t == Qp;
  };
  var Ss = _n["__core-js_shared__"], Cl = (function() {
    var e = /[^.]+$/.exec(Ss && Ss.keys && Ss.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function eg(e) {
    return !!Cl && Cl in e;
  }
  var tg = Function.prototype, ng = tg.toString;
  function Ar(e) {
    if (e != null) {
      try {
        return ng.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var rg = /[\\^$.*+?()[\]{}|]/g, ig = /^\[object .+?Constructor\]$/, og = Function.prototype, sg = Object.prototype, ag = og.toString, lg = sg.hasOwnProperty, cg = RegExp("^" + ag.call(lg).replace(rg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function ug(e) {
    if (!is(e) || eg(e)) return false;
    var t = hf(e) ? cg : ig;
    return t.test(Ar(e));
  }
  function fg(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Pr(e, t) {
    var n = fg(e, t);
    return ug(n) ? n : void 0;
  }
  let oa, kl, hg;
  oa = Pr(_n, "WeakMap");
  kl = Object.create;
  hg = /* @__PURE__ */ (function() {
    function e() {
    }
    return function(t) {
      if (!is(t)) return {};
      if (kl) return kl(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  })();
  xl = (function() {
    try {
      var e = Pr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  })();
  function dg(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i && t(e[n], n, e) !== false; ) ;
    return e;
  }
  var pg = 9007199254740991, gg = /^(?:0|[1-9]\d*)$/;
  mg = function(e, t) {
    var n = typeof e;
    return t = t ?? pg, !!t && (n == "number" || n != "symbol" && gg.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  wg = function(e, t, n) {
    t == "__proto__" && xl ? xl(e, t, {
      configurable: true,
      enumerable: true,
      value: n,
      writable: true
    }) : e[t] = n;
  };
  Ua = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  var yg = Object.prototype, bg = yg.hasOwnProperty;
  vg = function(e, t, n) {
    var i = e[t];
    (!(bg.call(e, t) && Ua(i, n)) || n === void 0 && !(t in e)) && wg(e, t, n);
  };
  var Eg = 9007199254740991;
  df = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Eg;
  };
  Ig = function(e) {
    return e != null && df(e.length) && !hf(e);
  };
  var Tg = Object.prototype;
  pf = function(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || Tg;
    return e === n;
  };
  function _g(e, t) {
    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
    return i;
  }
  var Sg = "[object Arguments]";
  function Fl(e) {
    return Tn(e) && lr(e) == Sg;
  }
  let gf, Og, Ag;
  gf = Object.prototype;
  Og = gf.hasOwnProperty;
  Ag = gf.propertyIsEnumerable;
  Pg = Fl(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? Fl : function(e) {
    return Tn(e) && Og.call(e, "callee") && !Ag.call(e, "callee");
  };
  function Rg() {
    return false;
  }
  let mf, Dl, Ng, jl, Mg, Lg, Cg, kg, xg, Fg, Dg, jg, Ug, Gg, Wg, $g, Bg, zg, Hg, Vg, qg, Yg, Kg, Jg, Xg, Zg, Qg, em, tm, Je;
  mf = typeof exports == "object" && exports && !exports.nodeType && exports;
  Dl = mf && typeof module == "object" && module && !module.nodeType && module;
  Ng = Dl && Dl.exports === mf;
  jl = Ng ? _n.Buffer : void 0;
  Mg = jl ? jl.isBuffer : void 0;
  xo = Mg || Rg;
  Lg = "[object Arguments]";
  Cg = "[object Array]";
  kg = "[object Boolean]";
  xg = "[object Date]";
  Fg = "[object Error]";
  Dg = "[object Function]";
  jg = "[object Map]";
  Ug = "[object Number]";
  Gg = "[object Object]";
  Wg = "[object RegExp]";
  $g = "[object Set]";
  Bg = "[object String]";
  zg = "[object WeakMap]";
  Hg = "[object ArrayBuffer]";
  Vg = "[object DataView]";
  qg = "[object Float32Array]";
  Yg = "[object Float64Array]";
  Kg = "[object Int8Array]";
  Jg = "[object Int16Array]";
  Xg = "[object Int32Array]";
  Zg = "[object Uint8Array]";
  Qg = "[object Uint8ClampedArray]";
  em = "[object Uint16Array]";
  tm = "[object Uint32Array]";
  Je = {};
  Je[qg] = Je[Yg] = Je[Kg] = Je[Jg] = Je[Xg] = Je[Zg] = Je[Qg] = Je[em] = Je[tm] = true;
  Je[Lg] = Je[Cg] = Je[Hg] = Je[kg] = Je[Vg] = Je[xg] = Je[Fg] = Je[Dg] = Je[jg] = Je[Ug] = Je[Gg] = Je[Wg] = Je[$g] = Je[Bg] = Je[zg] = false;
  function nm(e) {
    return Tn(e) && df(e.length) && !!Je[lr(e)];
  }
  function Ga(e) {
    return function(t) {
      return e(t);
    };
  }
  let wf, Pi, rm, Os, Kr, Ul, im, om;
  wf = typeof exports == "object" && exports && !exports.nodeType && exports;
  Pi = wf && typeof module == "object" && module && !module.nodeType && module;
  rm = Pi && Pi.exports === wf;
  Os = rm && uf.process;
  Kr = (function() {
    try {
      var e = Pi && Pi.require && Pi.require("util").types;
      return e || Os && Os.binding && Os.binding("util");
    } catch {
    }
  })();
  Ul = Kr && Kr.isTypedArray;
  yf = Ul ? Ga(Ul) : nm;
  im = Object.prototype;
  om = im.hasOwnProperty;
  sm = function(e, t) {
    var n = Yr(e), i = !n && Pg(e), l = !n && !i && xo(e), c = !n && !i && !l && yf(e), f = n || i || l || c, h = f ? _g(e.length, String) : [], p = h.length;
    for (var v in e) (t || om.call(e, v)) && !(f && (v == "length" || l && (v == "offset" || v == "parent") || c && (v == "buffer" || v == "byteLength" || v == "byteOffset") || mg(v, p))) && h.push(v);
    return h;
  };
  function bf(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var am = bf(Object.keys, Object), lm = Object.prototype, cm = lm.hasOwnProperty;
  function um(e) {
    if (!pf(e)) return am(e);
    var t = [];
    for (var n in Object(e)) cm.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  fm = function(e) {
    return Ig(e) ? sm(e) : um(e);
  };
  var Di = Pr(Object, "create");
  function hm() {
    this.__data__ = Di ? Di(null) : {}, this.size = 0;
  }
  function dm(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var pm = "__lodash_hash_undefined__", gm = Object.prototype, mm = gm.hasOwnProperty;
  function wm(e) {
    var t = this.__data__;
    if (Di) {
      var n = t[e];
      return n === pm ? void 0 : n;
    }
    return mm.call(t, e) ? t[e] : void 0;
  }
  var ym = Object.prototype, bm = ym.hasOwnProperty;
  function vm(e) {
    var t = this.__data__;
    return Di ? t[e] !== void 0 : bm.call(t, e);
  }
  var Em = "__lodash_hash_undefined__";
  function Im(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Di && t === void 0 ? Em : t, this;
  }
  function Or(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  Or.prototype.clear = hm;
  Or.prototype.delete = dm;
  Or.prototype.get = wm;
  Or.prototype.has = vm;
  Or.prototype.set = Im;
  function Tm() {
    this.__data__ = [], this.size = 0;
  }
  function os(e, t) {
    for (var n = e.length; n--; ) if (Ua(e[n][0], t)) return n;
    return -1;
  }
  var _m = Array.prototype, Sm = _m.splice;
  function Om(e) {
    var t = this.__data__, n = os(t, e);
    if (n < 0) return false;
    var i = t.length - 1;
    return n == i ? t.pop() : Sm.call(t, n, 1), --this.size, true;
  }
  function Am(e) {
    var t = this.__data__, n = os(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Pm(e) {
    return os(this.__data__, e) > -1;
  }
  function Rm(e, t) {
    var n = this.__data__, i = os(n, e);
    return i < 0 ? (++this.size, n.push([
      e,
      t
    ])) : n[i][1] = t, this;
  }
  function zn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  zn.prototype.clear = Tm;
  zn.prototype.delete = Om;
  zn.prototype.get = Am;
  zn.prototype.has = Pm;
  zn.prototype.set = Rm;
  var ji = Pr(_n, "Map");
  function Nm() {
    this.size = 0, this.__data__ = {
      hash: new Or(),
      map: new (ji || zn)(),
      string: new Or()
    };
  }
  function Mm(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function ss(e, t) {
    var n = e.__data__;
    return Mm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function Lm(e) {
    var t = ss(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Cm(e) {
    return ss(this, e).get(e);
  }
  function km(e) {
    return ss(this, e).has(e);
  }
  function xm(e, t) {
    var n = ss(this, e), i = n.size;
    return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
  }
  Rr = function(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  };
  Rr.prototype.clear = Nm;
  Rr.prototype.delete = Lm;
  Rr.prototype.get = Cm;
  Rr.prototype.has = km;
  Rr.prototype.set = xm;
  function Fm(e, t) {
    for (var n = -1, i = t.length, l = e.length; ++n < i; ) e[l + n] = t[n];
    return e;
  }
  var vf = bf(Object.getPrototypeOf, Object), Dm = "[object Object]", jm = Function.prototype, Um = Object.prototype, Ef = jm.toString, Gm = Um.hasOwnProperty, Wm = Ef.call(Object);
  $m = function(e) {
    if (!Tn(e) || lr(e) != Dm) return false;
    var t = vf(e);
    if (t === null) return true;
    var n = Gm.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Ef.call(n) == Wm;
  };
  var Bm = "[object DOMException]", zm = "[object Error]";
  function Hm(e) {
    if (!Tn(e)) return false;
    var t = lr(e);
    return t == zm || t == Bm || typeof e.message == "string" && typeof e.name == "string" && !$m(e);
  }
  function Vm() {
    this.__data__ = new zn(), this.size = 0;
  }
  function qm(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function Ym(e) {
    return this.__data__.get(e);
  }
  function Km(e) {
    return this.__data__.has(e);
  }
  var Jm = 200;
  function Xm(e, t) {
    var n = this.__data__;
    if (n instanceof zn) {
      var i = n.__data__;
      if (!ji || i.length < Jm - 1) return i.push([
        e,
        t
      ]), this.size = ++n.size, this;
      n = this.__data__ = new Rr(i);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  Fn = function(e) {
    var t = this.__data__ = new zn(e);
    this.size = t.size;
  };
  Fn.prototype.clear = Vm;
  Fn.prototype.delete = qm;
  Fn.prototype.get = Ym;
  Fn.prototype.has = Km;
  Fn.prototype.set = Xm;
  var If = typeof exports == "object" && exports && !exports.nodeType && exports, Gl = If && typeof module == "object" && module && !module.nodeType && module, Zm = Gl && Gl.exports === If, Wl = Zm ? _n.Buffer : void 0, $l = Wl ? Wl.allocUnsafe : void 0;
  Qm = function(e, t) {
    if (t) return e.slice();
    var n = e.length, i = $l ? $l(n) : new e.constructor(n);
    return e.copy(i), i;
  };
  function ew(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
      var f = e[n];
      t(f, n, e) && (c[l++] = f);
    }
    return c;
  }
  function tw() {
    return [];
  }
  var nw = Object.prototype, rw = nw.propertyIsEnumerable, Bl = Object.getOwnPropertySymbols, iw = Bl ? function(e) {
    return e == null ? [] : (e = Object(e), ew(Bl(e), function(t) {
      return rw.call(e, t);
    }));
  } : tw;
  function ow(e, t, n) {
    var i = t(e);
    return Yr(e) ? i : Fm(i, n(e));
  }
  function sa(e) {
    return ow(e, fm, iw);
  }
  var aa = Pr(_n, "DataView"), la = Pr(_n, "Promise"), ca = Pr(_n, "Set"), zl = "[object Map]", sw = "[object Object]", Hl = "[object Promise]", Vl = "[object Set]", ql = "[object WeakMap]", Yl = "[object DataView]", aw = Ar(aa), lw = Ar(ji), cw = Ar(la), uw = Ar(ca), fw = Ar(oa), ln = lr;
  (aa && ln(new aa(new ArrayBuffer(1))) != Yl || ji && ln(new ji()) != zl || la && ln(la.resolve()) != Hl || ca && ln(new ca()) != Vl || oa && ln(new oa()) != ql) && (ln = function(e) {
    var t = lr(e), n = t == sw ? e.constructor : void 0, i = n ? Ar(n) : "";
    if (i) switch (i) {
      case aw:
        return Yl;
      case lw:
        return zl;
      case cw:
        return Hl;
      case uw:
        return Vl;
      case fw:
        return ql;
    }
    return t;
  });
  var hw = Object.prototype, dw = hw.hasOwnProperty;
  function pw(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && dw.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var Fo = _n.Uint8Array;
  function Wa(e) {
    var t = new e.constructor(e.byteLength);
    return new Fo(t).set(new Fo(e)), t;
  }
  function gw(e, t) {
    var n = Wa(e.buffer);
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var mw = /\w*$/;
  function ww(e) {
    var t = new e.constructor(e.source, mw.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var Kl = sr ? sr.prototype : void 0, Jl = Kl ? Kl.valueOf : void 0;
  function yw(e) {
    return Jl ? Object(Jl.call(e)) : {};
  }
  bw = function(e, t) {
    var n = t ? Wa(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  };
  var vw = "[object Boolean]", Ew = "[object Date]", Iw = "[object Map]", Tw = "[object Number]", _w = "[object RegExp]", Sw = "[object Set]", Ow = "[object String]", Aw = "[object Symbol]", Pw = "[object ArrayBuffer]", Rw = "[object DataView]", Nw = "[object Float32Array]", Mw = "[object Float64Array]", Lw = "[object Int8Array]", Cw = "[object Int16Array]", kw = "[object Int32Array]", xw = "[object Uint8Array]", Fw = "[object Uint8ClampedArray]", Dw = "[object Uint16Array]", jw = "[object Uint32Array]";
  function Uw(e, t, n) {
    var i = e.constructor;
    switch (t) {
      case Pw:
        return Wa(e);
      case vw:
      case Ew:
        return new i(+e);
      case Rw:
        return gw(e);
      case Nw:
      case Mw:
      case Lw:
      case Cw:
      case kw:
      case xw:
      case Fw:
      case Dw:
      case jw:
        return bw(e, n);
      case Iw:
        return new i();
      case Tw:
      case Ow:
        return new i(e);
      case _w:
        return ww(e);
      case Sw:
        return new i();
      case Aw:
        return yw(e);
    }
  }
  Gw = function(e) {
    return typeof e.constructor == "function" && !pf(e) ? hg(vf(e)) : {};
  };
  var Ww = "[object Map]";
  function $w(e) {
    return Tn(e) && ln(e) == Ww;
  }
  var Xl = Kr && Kr.isMap, Bw = Xl ? Ga(Xl) : $w, zw = "[object Set]";
  function Hw(e) {
    return Tn(e) && ln(e) == zw;
  }
  var Zl = Kr && Kr.isSet, Vw = Zl ? Ga(Zl) : Hw, qw = 1, Tf = "[object Arguments]", Yw = "[object Array]", Kw = "[object Boolean]", Jw = "[object Date]", Xw = "[object Error]", _f = "[object Function]", Zw = "[object GeneratorFunction]", Qw = "[object Map]", ey = "[object Number]", Sf = "[object Object]", ty = "[object RegExp]", ny = "[object Set]", ry = "[object String]", iy = "[object Symbol]", oy = "[object WeakMap]", sy = "[object ArrayBuffer]", ay = "[object DataView]", ly = "[object Float32Array]", cy = "[object Float64Array]", uy = "[object Int8Array]", fy = "[object Int16Array]", hy = "[object Int32Array]", dy = "[object Uint8Array]", py = "[object Uint8ClampedArray]", gy = "[object Uint16Array]", my = "[object Uint32Array]", qe = {};
  qe[Tf] = qe[Yw] = qe[sy] = qe[ay] = qe[Kw] = qe[Jw] = qe[ly] = qe[cy] = qe[uy] = qe[fy] = qe[hy] = qe[Qw] = qe[ey] = qe[Sf] = qe[ty] = qe[ny] = qe[ry] = qe[iy] = qe[dy] = qe[py] = qe[gy] = qe[my] = true;
  qe[Xw] = qe[_f] = qe[oy] = false;
  function po(e, t, n, i, l, c) {
    var f, h = t & qw;
    if (f !== void 0) return f;
    if (!is(e)) return e;
    var p = Yr(e);
    if (p) f = pw(e);
    else {
      var v = ln(e), w = v == _f || v == Zw;
      if (xo(e)) return Qm(e, h);
      if (v == Sf || v == Tf || w && !l) f = w ? {} : Gw(e);
      else {
        if (!qe[v]) return l ? e : {};
        f = Uw(e, v, h);
      }
    }
    c || (c = new Fn());
    var I = c.get(e);
    if (I) return I;
    c.set(e, f), Vw(e) ? e.forEach(function(k) {
      f.add(po(k, t, n, k, e, c));
    }) : Bw(e) && e.forEach(function(k, L) {
      f.set(L, po(k, t, n, L, e, c));
    });
    var P = sa, R = p ? void 0 : P(e);
    return dg(R || e, function(k, L) {
      R && (L = k, k = e[L]), vg(f, L, po(k, t, n, L, e, c));
    }), f;
  }
  var wy = 1, yy = 4;
  kt = function(e) {
    return po(e, wy | yy);
  };
  var by = "__lodash_hash_undefined__";
  function vy(e) {
    return this.__data__.set(e, by), this;
  }
  function Ey(e) {
    return this.__data__.has(e);
  }
  function Do(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new Rr(); ++t < n; ) this.add(e[t]);
  }
  Do.prototype.add = Do.prototype.push = vy;
  Do.prototype.has = Ey;
  function Iy(e, t) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i; ) if (t(e[n], n, e)) return true;
    return false;
  }
  function Ty(e, t) {
    return e.has(t);
  }
  var _y = 1, Sy = 2;
  function Of(e, t, n, i, l, c) {
    var f = n & _y, h = e.length, p = t.length;
    if (h != p && !(f && p > h)) return false;
    var v = c.get(e), w = c.get(t);
    if (v && w) return v == t && w == e;
    var I = -1, P = true, R = n & Sy ? new Do() : void 0;
    for (c.set(e, t), c.set(t, e); ++I < h; ) {
      var k = e[I], L = t[I];
      if (i) var B = f ? i(L, k, I, t, e, c) : i(k, L, I, e, t, c);
      if (B !== void 0) {
        if (B) continue;
        P = false;
        break;
      }
      if (R) {
        if (!Iy(t, function(F, U) {
          if (!Ty(R, U) && (k === F || l(k, F, n, i, c))) return R.push(U);
        })) {
          P = false;
          break;
        }
      } else if (!(k === L || l(k, L, n, i, c))) {
        P = false;
        break;
      }
    }
    return c.delete(e), c.delete(t), P;
  }
  function Oy(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(i, l) {
      n[++t] = [
        l,
        i
      ];
    }), n;
  }
  function Ay(e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function(i) {
      n[++t] = i;
    }), n;
  }
  var Py = 1, Ry = 2, Ny = "[object Boolean]", My = "[object Date]", Ly = "[object Error]", Cy = "[object Map]", ky = "[object Number]", xy = "[object RegExp]", Fy = "[object Set]", Dy = "[object String]", jy = "[object Symbol]", Uy = "[object ArrayBuffer]", Gy = "[object DataView]", Ql = sr ? sr.prototype : void 0, As = Ql ? Ql.valueOf : void 0;
  function Wy(e, t, n, i, l, c, f) {
    switch (n) {
      case Gy:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return false;
        e = e.buffer, t = t.buffer;
      case Uy:
        return !(e.byteLength != t.byteLength || !c(new Fo(e), new Fo(t)));
      case Ny:
      case My:
      case ky:
        return Ua(+e, +t);
      case Ly:
        return e.name == t.name && e.message == t.message;
      case xy:
      case Dy:
        return e == t + "";
      case Cy:
        var h = Oy;
      case Fy:
        var p = i & Py;
        if (h || (h = Ay), e.size != t.size && !p) return false;
        var v = f.get(e);
        if (v) return v == t;
        i |= Ry, f.set(e, t);
        var w = Of(h(e), h(t), i, l, c, f);
        return f.delete(e), w;
      case jy:
        if (As) return As.call(e) == As.call(t);
    }
    return false;
  }
  var $y = 1, By = Object.prototype, zy = By.hasOwnProperty;
  function Hy(e, t, n, i, l, c) {
    var f = n & $y, h = sa(e), p = h.length, v = sa(t), w = v.length;
    if (p != w && !f) return false;
    for (var I = p; I--; ) {
      var P = h[I];
      if (!(f ? P in t : zy.call(t, P))) return false;
    }
    var R = c.get(e), k = c.get(t);
    if (R && k) return R == t && k == e;
    var L = true;
    c.set(e, t), c.set(t, e);
    for (var B = f; ++I < p; ) {
      P = h[I];
      var F = e[P], U = t[P];
      if (i) var ne = f ? i(U, F, P, t, e, c) : i(F, U, P, e, t, c);
      if (!(ne === void 0 ? F === U || l(F, U, n, i, c) : ne)) {
        L = false;
        break;
      }
      B || (B = P == "constructor");
    }
    if (L && !B) {
      var W = e.constructor, ue = t.constructor;
      W != ue && "constructor" in e && "constructor" in t && !(typeof W == "function" && W instanceof W && typeof ue == "function" && ue instanceof ue) && (L = false);
    }
    return c.delete(e), c.delete(t), L;
  }
  var Vy = 1, ec = "[object Arguments]", tc = "[object Array]", ro = "[object Object]", qy = Object.prototype, nc = qy.hasOwnProperty;
  function Yy(e, t, n, i, l, c) {
    var f = Yr(e), h = Yr(t), p = f ? tc : ln(e), v = h ? tc : ln(t);
    p = p == ec ? ro : p, v = v == ec ? ro : v;
    var w = p == ro, I = v == ro, P = p == v;
    if (P && xo(e)) {
      if (!xo(t)) return false;
      f = true, w = false;
    }
    if (P && !w) return c || (c = new Fn()), f || yf(e) ? Of(e, t, n, i, l, c) : Wy(e, t, p, n, i, l, c);
    if (!(n & Vy)) {
      var R = w && nc.call(e, "__wrapped__"), k = I && nc.call(t, "__wrapped__");
      if (R || k) {
        var L = R ? e.value() : e, B = k ? t.value() : t;
        return c || (c = new Fn()), l(L, B, n, i, c);
      }
    }
    return P ? (c || (c = new Fn()), Hy(e, t, n, i, l, c)) : false;
  }
  Af = function(e, t, n, i, l) {
    return e === t ? true : e == null || t == null || !Tn(e) && !Tn(t) ? e !== e && t !== t : Yy(e, t, n, i, Af, l);
  };
  var Ky = "[object String]";
  function ua(e) {
    return typeof e == "string" || !Yr(e) && Tn(e) && lr(e) == Ky;
  }
  function Jy(e, t) {
    return Af(e, t);
  }
  const jt = (e) => ua(e) ? e : JSON.stringify(e), pn = {
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
    loadDependencies: (...e) => `[loadModules] Module "${jt(e[0])}" is loading its dependencies (${e.slice(1).join(", ")})`,
    dependenciesReady: (...e) => `[loadModules] Module "${jt(e[0])}" dependencies are ready`,
    dependenciesFailure: (...e) => `[loadModules] Module "${jt(e[0])}" dependencies failed to load. 

Trackback: 
${jt(e[1])}`
  }, Xy = {
    info: console.info,
    warn: console.warn,
    error: console.error,
    debug: console.debug
  };
  async function Pf(e, t, n = 1e4, i = {}, l = 0, c = 0, f = 0) {
    var _a2, _b2, _c2, _d2, _e, _f2;
    const { logger: h = Xy, progressReporter: p, printLog: v = true } = i, w = e.find((L) => L.name === t);
    if (!w) throw new Error(`cannot exactly find module "${t}" from the library`);
    const I = e.findIndex((L) => L.name === w.name);
    if (e[I].status === "loaded") return v && h.info(pn.alreadyLoaded(w.name)), {
      completed: f,
      total: c
    };
    const P = w.dependencies || [], R = e.filter((L) => P.includes(L.name)), k = P.filter((L) => !e.find((B) => B.name === L));
    if (k.length > 0) {
      const L = pn.missingDependencies(w.name, k.join(", "));
      throw v && h.error(L), new Error(L);
    }
    if (e[I].status === "error") {
      const L = pn.errorDetermined(w.name);
      throw v && h.info(L), new Error(L);
    }
    if (e[I].status === "loading") return v && h.info(pn.alreadyLoading(w.name)), await Zy(e, w.name, n, h), {
      completed: f,
      total: c
    };
    try {
      let L = c, B = f;
      if (l === 0) {
        const F = /* @__PURE__ */ new Set(), U = (ne) => {
          if (F.has(ne)) return;
          F.add(ne);
          const W = e.find((ue) => ue.name === ne);
          if (W && W.dependencies) for (const ue of W.dependencies) U(ue);
        };
        U(t), L = F.size, B = 0;
      }
      if (R.length > 0) {
        h.info(pn.loadDependencies(w.name, R.map((F) => F.name)));
        for (const F of R) {
          const U = await Pf(e, F.name, n, {
            logger: h,
            progressReporter: p,
            printLog: v
          }, l + 1, L, B);
          B = U.completed, L = U.total, (_a2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _a2.call(p, B, L);
        }
        v && h.info(pn.dependenciesReady(w.name));
      }
      e[I].status = "loading", (_b2 = p == null ? void 0 : p.onModuleStart) == null ? void 0 : _b2.call(p, w.displayName);
      try {
        return v && h.info(pn.loading(w.name)), await w.moduleInit(n), e[I].status = "loaded", B++, (_c2 = p == null ? void 0 : p.onModuleComplete) == null ? void 0 : _c2.call(p, w.displayName), (_d2 = p == null ? void 0 : p.onOverallProgress) == null ? void 0 : _d2.call(p, B, L), v && h.info(pn.loaded(w.name)), {
          completed: B,
          total: L
        };
      } catch (F) {
        e[I].status = "error";
        const U = pn.error(w.name, ua(F) ? F : Hm(F) ? F.message : JSON.stringify(F));
        throw h.error(U), (_e = p == null ? void 0 : p.onModuleError) == null ? void 0 : _e.call(p, w.displayName, ua(F) ? new Error(F) : F), new Error(U);
      }
    } catch (L) {
      e[I].status = "error";
      const B = pn.error(w.name, L);
      throw h.error(B), (_f2 = p == null ? void 0 : p.onModuleError) == null ? void 0 : _f2.call(p, w.displayName, L), new Error(B);
    }
  }
  async function Zy(e, t, n = 1e4, i) {
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
  let Qy, eb, rc, tb, nb, rb, Rf;
  Qy = "modulepreload";
  eb = function(e, t) {
    return new URL(e, t).href;
  };
  rc = {};
  Ps = function(t, n, i) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      let f = function(w) {
        return Promise.all(w.map((I) => Promise.resolve(I).then((P) => ({
          status: "fulfilled",
          value: P
        }), (P) => ({
          status: "rejected",
          reason: P
        }))));
      };
      const h = document.getElementsByTagName("link"), p = document.querySelector("meta[property=csp-nonce]"), v = (p == null ? void 0 : p.nonce) || (p == null ? void 0 : p.getAttribute("nonce"));
      l = f(n.map((w) => {
        if (w = eb(w, i), w in rc) return;
        rc[w] = true;
        const I = w.endsWith(".css"), P = I ? '[rel="stylesheet"]' : "";
        if (!!i) for (let L = h.length - 1; L >= 0; L--) {
          const B = h[L];
          if (B.href === w && (!I || B.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${w}"]${P}`)) return;
        const k = document.createElement("link");
        if (k.rel = I ? "stylesheet" : Qy, I || (k.as = "script"), k.crossOrigin = "", k.href = w, v && k.setAttribute("nonce", v), document.head.appendChild(k), I) return new Promise((L, B) => {
          k.addEventListener("load", L), k.addEventListener("error", () => B(new Error(`Unable to preload CSS for ${w}`)));
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
  tb = JSON.parse(`[{"id":"tauri","name":"Tauri","description":"A framework for building tiny, fast binaries for all major desktop and mobile platforms.","url":"https://github.com/tauri-apps/tauri","homepage":"https://v2.tauri.app/","licenseType":"MIT, Apache-2.0","license":"Code: (c) 2015 - Present - The Tauri Programme within The Commons Conservancy.\\n\\nMIT or MIT/Apache 2.0 where applicable."},{"id":"uuid","name":"uuid","description":"Generate a universally unique identifier (UUID) in JavaScript.","url":"https://github.com/uuidjs/uuid","licenseType":"MIT","license":"The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2010-2020 Robert Kieffer and other contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\t\\t\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."},{"id":"vue","name":"Vue.js","description":"An approachable, performant and versatile framework for building web user interfaces.","url":"https://github.com/vuejs/core","homepage":"https://vuejs.org","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n\\t\\tCopyright (c) 2018-present, Yuxi (Evan) You and Vue contributors\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in\\n\\t\\tall copies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\\n\\t\\tTHE SOFTWARE."},{"id":"vue-router","name":"Vue Router","description":"Expressive, configurable and convenient routing for Vue.js.","url":"https://github.com/vuejs/router","homepage":"https://router.vuejs.org/","licenseType":"MIT","license":"\\n        The MIT License (MIT)\\n\\n        Copyright (c) 2019-present Eduardo San Martin Morote\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"naive-ui","name":"Naive UI","description":"A Vue 3 based UI Components Library","url":"https://github.com/tusen-ai/naive-ui","homepage":"https://www.naiveui.com","licenseType":"MIT","license":"\\n        MIT License\\n\\n        Copyright (c) 2021 TuSimple\\n\\n        Permission is hereby granted, free of charge, to any person obtaining a copy\\n        of this software and associated documentation files (the \\"Software\\"), to deal\\n        in the Software without restriction, including without limitation the rights\\n        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n        copies of the Software, and to permit persons to whom the Software is\\n        furnished to do so, subject to the following conditions:\\n\\n        The above copyright notice and this permission notice shall be included in all\\n        copies or substantial portions of the Software.\\n\\n        THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n        SOFTWARE."},{"id":"uaparser-js","name":"UAParser.js","description":"The most comprehensive, compact, & up-to-date JavaScript library to detect user's Browser.","url":"https://github.com/faisalman/ua-parser-js","homepage":"https://uaparser.js.org/","licenseType":"AGPL-3.0","license":"\\n        GNU AFFERO GENERAL PUBLIC LICENSE\\n\\n        Version 3, 19 November 2007\\n\\nCopyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>\\nEveryone is permitted to copy and distribute verbatim copies\\nof this license document, but changing it is not allowed.\\n\\n             Preamble\\n\\nThe GNU Affero General Public License is a free, copyleft license for\\nsoftware and other kinds of works, specifically designed to ensure\\ncooperation with the community in the case of network server software.\\n\\nThe licenses for most software and other practical works are designed\\nto take away your freedom to share and change the works.  By contrast,\\nour General Public Licenses are intended to guarantee your freedom to\\nshare and change all versions of a program--to make sure it remains free\\nsoftware for all its users.\\n\\nWhen we speak of free software, we are referring to freedom, not\\nprice.  Our General Public Licenses are designed to make sure that you\\nhave the freedom to distribute copies of free software (and charge for\\nthem if you wish), that you receive source code or can get it if you\\nwant it, that you can change the software or use pieces of it in new\\nfree programs, and that you know you can do these things.\\n\\nDevelopers that use our General Public Licenses protect your rights\\nwith two steps: (1) assert copyright on the software, and (2) offer\\nyou this License which gives you legal permission to copy, distribute\\nand/or modify the software.\\n\\nA secondary benefit of defending all users' freedom is that\\nimprovements made in alternate versions of the program, if they\\nreceive widespread use, become available for other developers to\\nincorporate.  Many developers of free software are heartened and\\nencouraged by the resulting cooperation.  However, in the case of\\nsoftware used on network servers, this result may fail to come about.\\nThe GNU General Public License permits making a modified version and\\nletting the public access it on a server without ever releasing its\\nsource code to the public.\\n\\nThe GNU Affero General Public License is designed specifically to\\nensure that, in such cases, the modified source code becomes available\\nto the community.  It requires the operator of a network server to\\nprovide the source code of the modified version running there to the\\nusers of that server.  Therefore, public use of a modified version, on\\na publicly accessible server, gives the public access to the source\\ncode of the modified version.\\n\\nAn older license, called the Affero General Public License and\\npublished by Affero, was designed to accomplish similar goals.  This is\\na different license, not a version of the Affero GPL, but Affero has\\nreleased a new version of the Affero GPL which permits relicensing under\\nthis license.\\n\\nThe precise terms and conditions for copying, distribution and\\nmodification follow.\\n\\n        TERMS AND CONDITIONS\\n\\n0. Definitions.\\n\\n\\"This License\\" refers to version 3 of the GNU Affero General Public License.\\n\\n\\"Copyright\\" also means copyright-like laws that apply to other kinds of\\nworks, such as semiconductor masks.\\n\\n\\"The Program\\" refers to any copyrightable work licensed under this\\nLicense.  Each licensee is addressed as \\"you\\".  \\"Licensees\\" and\\n\\"recipients\\" may be individuals or organizations.\\n\\nTo \\"modify\\" a work means to copy from or adapt all or part of the work\\nin a fashion requiring copyright permission, other than the making of an\\nexact copy.  The resulting work is called a \\"modified version\\" of the\\nearlier work or a work \\"based on\\" the earlier work.\\n\\nA \\"covered work\\" means either the unmodified Program or a work based\\non the Program.\\n\\nTo \\"propagate\\" a work means to do anything with it that, without\\npermission, would make you directly or secondarily liable for\\ninfringement under applicable copyright law, except executing it on a\\ncomputer or modifying a private copy.  Propagation includes copying,\\ndistribution (with or without modification), making available to the\\npublic, and in some countries other activities as well.\\n\\nTo \\"convey\\" a work means any kind of propagation that enables other\\nparties to make or receive copies.  Mere interaction with a user through\\na computer network, with no transfer of a copy, is not conveying.\\n\\nAn interactive user interface displays \\"Appropriate Legal Notices\\"\\nto the extent that it includes a convenient and prominently visible\\nfeature that (1) displays an appropriate copyright notice, and (2)\\ntells the user that there is no warranty for the work (except to the\\nextent that warranties are provided), that licensees may convey the\\nwork under this License, and how to view a copy of this License.  If\\nthe interface presents a list of user commands or options, such as a\\nmenu, a prominent item in the list meets this criterion.\\n\\n1. Source Code.\\n\\nThe \\"source code\\" for a work means the preferred form of the work\\nfor making modifications to it.  \\"Object code\\" means any non-source\\nform of a work.\\n\\nA \\"Standard Interface\\" means an interface that either is an official\\nstandard defined by a recognized standards body, or, in the case of\\ninterfaces specified for a particular programming language, one that\\nis widely used among developers working in that language.\\n\\nThe \\"System Libraries\\" of an executable work include anything, other\\nthan the work as a whole, that (a) is included in the normal form of\\npackaging a Major Component, but which is not part of that Major\\nComponent, and (b) serves only to enable use of the work with that\\nMajor Component, or to implement a Standard Interface for which an\\nimplementation is available to the public in source code form.  A\\n\\"Major Component\\", in this context, means a major essential component\\n(kernel, window system, and so on) of the specific operating system\\n(if any) on which the executable work runs, or a compiler used to\\nproduce the work, or an object code interpreter used to run it.\\n\\nThe \\"Corresponding Source\\" for a work in object code form means all\\nthe source code needed to generate, install, and (for an executable\\nwork) run the object code and to modify the work, including scripts to\\ncontrol those activities.  However, it does not include the work's\\nSystem Libraries, or general-purpose tools or generally available free\\nprograms which are used unmodified in performing those activities but\\nwhich are not part of the work.  For example, Corresponding Source\\nincludes interface definition files associated with source files for\\nthe work, and the source code for shared libraries and dynamically\\nlinked subprograms that the work is specifically designed to require,\\nsuch as by intimate data communication or control flow between those\\nsubprograms and other parts of the work.\\n\\nThe Corresponding Source need not include anything that users\\ncan regenerate automatically from other parts of the Corresponding\\nSource.\\n\\nThe Corresponding Source for a work in source code form is that\\nsame work.\\n\\n2. Basic Permissions.\\n\\nAll rights granted under this License are granted for the term of\\ncopyright on the Program, and are irrevocable provided the stated\\nconditions are met.  This License explicitly affirms your unlimited\\npermission to run the unmodified Program.  The output from running a\\ncovered work is covered by this License only if the output, given its\\ncontent, constitutes a covered work.  This License acknowledges your\\nrights of fair use or other equivalent, as provided by copyright law.\\n\\nYou may make, run and propagate covered works that you do not\\nconvey, without conditions so long as your license otherwise remains\\nin force.  You may convey covered works to others for the sole purpose\\nof having them make modifications exclusively for you, or provide you\\nwith facilities for running those works, provided that you comply with\\nthe terms of this License in conveying all material for which you do\\nnot control copyright.  Those thus making or running the covered works\\nfor you must do so exclusively on your behalf, under your direction\\nand control, on terms that prohibit them from making any copies of\\nyour copyrighted material outside their relationship with you.\\n\\nConveying under any other circumstances is permitted solely under\\nthe conditions stated below.  Sublicensing is not allowed; section 10\\nmakes it unnecessary.\\n\\n3. Protecting Users' Legal Rights From Anti-Circumvention Law.\\n\\nNo covered work shall be deemed part of an effective technological\\nmeasure under any applicable law fulfilling obligations under article\\n11 of the WIPO copyright treaty adopted on 20 December 1996, or\\nsimilar laws prohibiting or restricting circumvention of such\\nmeasures.\\n\\nWhen you convey a covered work, you waive any legal power to forbid\\ncircumvention of technological measures to the extent such circumvention\\nis effected by exercising rights under this License with respect to\\nthe covered work, and you disclaim any intention to limit operation or\\nmodification of the work as a means of enforcing, against the work's\\nusers, your or third parties' legal rights to forbid circumvention of\\ntechnological measures.\\n\\n4. Conveying Verbatim Copies.\\n\\nYou may convey verbatim copies of the Program's source code as you\\nreceive it, in any medium, provided that you conspicuously and\\nappropriately publish on each copy an appropriate copyright notice;\\nkeep intact all notices stating that this License and any\\nnon-permissive terms added in accord with section 7 apply to the code;\\nkeep intact all notices of the absence of any warranty; and give all\\nrecipients a copy of this License along with the Program.\\n\\nYou may charge any price or no price for each copy that you convey,\\nand you may offer support or warranty protection for a fee.\\n\\n5. Conveying Modified Source Versions.\\n\\nYou may convey a work based on the Program, or the modifications to\\nproduce it from the Program, in the form of source code under the\\nterms of section 4, provided that you also meet all of these conditions:\\n\\na) The work must carry prominent notices stating that you modified\\nit, and giving a relevant date.\\n\\nb) The work must carry prominent notices stating that it is\\nreleased under this License and any conditions added under section\\n7.  This requirement modifies the requirement in section 4 to\\n\\"keep intact all notices\\".\\n\\nc) You must license the entire work, as a whole, under this\\nLicense to anyone who comes into possession of a copy.  This\\nLicense will therefore apply, along with any applicable section 7\\nadditional terms, to the whole of the work, and all its parts,\\nregardless of how they are packaged.  This License gives no\\npermission to license the work in any other way, but it does not\\ninvalidate such permission if you have separately received it.\\n\\nd) If the work has interactive user interfaces, each must display\\nAppropriate Legal Notices; however, if the Program has interactive\\ninterfaces that do not display Appropriate Legal Notices, your\\nwork need not make them do so.\\n\\nA compilation of a covered work with other separate and independent\\nworks, which are not by their nature extensions of the covered work,\\nand which are not combined with it such as to form a larger program,\\nin or on a volume of a storage or distribution medium, is called an\\n\\"aggregate\\" if the compilation and its resulting copyright are not\\nused to limit the access or legal rights of the compilation's users\\nbeyond what the individual works permit.  Inclusion of a covered work\\nin an aggregate does not cause this License to apply to the other\\nparts of the aggregate.\\n\\n6. Conveying Non-Source Forms.\\n\\nYou may convey a covered work in object code form under the terms\\nof sections 4 and 5, provided that you also convey the\\nmachine-readable Corresponding Source under the terms of this License,\\nin one of these ways:\\n\\na) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by the\\nCorresponding Source fixed on a durable physical medium\\ncustomarily used for software interchange.\\n\\nb) Convey the object code in, or embodied in, a physical product\\n(including a physical distribution medium), accompanied by a\\nwritten offer, valid for at least three years and valid for as\\nlong as you offer spare parts or customer support for that product\\nmodel, to give anyone who possesses the object code either (1) a\\ncopy of the Corresponding Source for all the software in the\\nproduct that is covered by this License, on a durable physical\\nmedium customarily used for software interchange, for a price no\\nmore than your reasonable cost of physically performing this\\nconveying of source, or (2) access to copy the\\nCorresponding Source from a network server at no charge.\\n\\nc) Convey individual copies of the object code with a copy of the\\nwritten offer to provide the Corresponding Source.  This\\nalternative is allowed only occasionally and noncommercially, and\\nonly if you received the object code with such an offer, in accord\\nwith subsection 6b.\\n\\nd) Convey the object code by offering access from a designated\\nplace (gratis or for a charge), and offer equivalent access to the\\nCorresponding Source in the same way through the same place at no\\nfurther charge.  You need not require recipients to copy the\\nCorresponding Source along with the object code.  If the place to\\ncopy the object code is a network server, the Corresponding Source\\nmay be on a different server (operated by you or a third party)\\nthat supports equivalent copying facilities, provided you maintain\\nclear directions next to the object code saying where to find the\\nCorresponding Source.  Regardless of what server hosts the\\nCorresponding Source, you remain obligated to ensure that it is\\navailable for as long as needed to satisfy these requirements.\\n\\ne) Convey the object code using peer-to-peer transmission, provided\\nyou inform other peers where the object code and Corresponding\\nSource of the work are being offered to the general public at no\\ncharge under subsection 6d.\\n\\nA separable portion of the object code, whose source code is excluded\\nfrom the Corresponding Source as a System Library, need not be\\nincluded in conveying the object code work.\\n\\nA \\"User Product\\" is either (1) a \\"consumer product\\", which means any\\ntangible personal property which is normally used for personal, family,\\nor household purposes, or (2) anything designed or sold for incorporation\\ninto a dwelling.  In determining whether a product is a consumer product,\\ndoubtful cases shall be resolved in favor of coverage.  For a particular\\nproduct received by a particular user, \\"normally used\\" refers to a\\ntypical or common use of that class of product, regardless of the status\\nof the particular user or of the way in which the particular user\\nactually uses, or expects or is expected to use, the product.  A product\\nis a consumer product regardless of whether the product has substantial\\ncommercial, industrial or non-consumer uses, unless such uses represent\\nthe only significant mode of use of the product.\\n\\n\\"Installation Information\\" for a User Product means any methods,\\nprocedures, authorization keys, or other information required to install\\nand execute modified versions of a covered work in that User Product from\\na modified version of its Corresponding Source.  The information must\\nsuffice to ensure that the continued functioning of the modified object\\ncode is in no case prevented or interfered with solely because\\nmodification has been made.\\n\\nIf you convey an object code work under this section in, or with, or\\nspecifically for use in, a User Product, and the conveying occurs as\\npart of a transaction in which the right of possession and use of the\\nUser Product is transferred to the recipient in perpetuity or for a\\nfixed term (regardless of how the transaction is characterized), the\\nCorresponding Source conveyed under this section must be accompanied\\nby the Installation Information.  But this requirement does not apply\\nif neither you nor any third party retains the ability to install\\nmodified object code on the User Product (for example, the work has\\nbeen installed in ROM).\\n\\nThe requirement to provide Installation Information does not include a\\nrequirement to continue to provide support service, warranty, or updates\\nfor a work that has been modified or installed by the recipient, or for\\nthe User Product in which it has been modified or installed.  Access to a\\nnetwork may be denied when the modification itself materially and\\nadversely affects the operation of the network or violates the rules and\\nprotocols for communication across the network.\\n\\nCorresponding Source conveyed, and Installation Information provided,\\nin accord with this section must be in a format that is publicly\\ndocumented (and with an implementation available to the public in\\nsource code form), and must require no special password or key for\\nunpacking, reading or copying.\\n\\n7. Additional Terms.\\n\\n\\"Additional permissions\\" are terms that supplement the terms of this\\nLicense by making exceptions from one or more of its conditions.\\nAdditional permissions that are applicable to the entire Program shall\\nbe treated as though they were included in this License, to the extent\\nthat they are valid under applicable law.  If additional permissions\\napply only to part of the Program, that part may be used separately\\nunder those permissions, but the entire Program remains governed by\\nthis License without regard to the additional permissions.\\n\\nWhen you convey a copy of a covered work, you may at your option\\nremove any additional permissions from that copy, or from any part of\\nit.  (Additional permissions may be written to require their own\\nremoval in certain cases when you modify the work.)  You may place\\nadditional permissions on material, added by you to a covered work,\\nfor which you have or can give appropriate copyright permission.\\n\\nNotwithstanding any other provision of this License, for material you\\nadd to a covered work, you may (if authorized by the copyright holders of\\nthat material) supplement the terms of this License with terms:\\n\\na) Disclaiming warranty or limiting liability differently from the\\nterms of sections 15 and 16 of this License; or\\n\\nb) Requiring preservation of specified reasonable legal notices or\\nauthor attributions in that material or in the Appropriate Legal\\nNotices displayed by works containing it; or\\n\\nc) Prohibiting misrepresentation of the origin of that material, or\\nrequiring that modified versions of such material be marked in\\nreasonable ways as different from the original version; or\\n\\nd) Limiting the use for publicity purposes of names of licensors or\\nauthors of the material; or\\n\\ne) Declining to grant rights under trademark law for use of some\\ntrade names, trademarks, or service marks; or\\n\\nf) Requiring indemnification of licensors and authors of that\\nmaterial by anyone who conveys the material (or modified versions of\\nit) with contractual assumptions of liability to the recipient, for\\nany liability that these contractual assumptions directly impose on\\nthose licensors and authors.\\n\\nAll other non-permissive additional terms are considered \\"further\\nrestrictions\\" within the meaning of section 10.  If the Program as you\\nreceived it, or any part of it, contains a notice stating that it is\\ngoverned by this License along with a term that is a further\\nrestriction, you may remove that term.  If a license document contains\\na further restriction but permits relicensing or conveying under this\\nLicense, you may add to a covered work material governed by the terms\\nof that license document, provided that the further restriction does\\nnot survive such relicensing or conveying.\\n\\nIf you add terms to a covered work in accord with this section, you\\nmust place, in the relevant source files, a statement of the\\nadditional terms that apply to those files, or a notice indicating\\nwhere to find the applicable terms.\\n\\nAdditional terms, permissive or non-permissive, may be stated in the\\nform of a separately written license, or stated as exceptions;\\nthe above requirements apply either way.\\n\\n8. Termination.\\n\\nYou may not propagate or modify a covered work except as expressly\\nprovided under this License.  Any attempt otherwise to propagate or\\nmodify it is void, and will automatically terminate your rights under\\nthis License (including any patent licenses granted under the third\\nparagraph of section 11).\\n\\nHowever, if you cease all violation of this License, then your\\nlicense from a particular copyright holder is reinstated (a)\\nprovisionally, unless and until the copyright holder explicitly and\\nfinally terminates your license, and (b) permanently, if the copyright\\nholder fails to notify you of the violation by some reasonable means\\nprior to 60 days after the cessation.\\n\\nMoreover, your license from a particular copyright holder is\\nreinstated permanently if the copyright holder notifies you of the\\nviolation by some reasonable means, this is the first time you have\\nreceived notice of violation of this License (for any work) from that\\ncopyright holder, and you cure the violation prior to 30 days after\\nyour receipt of the notice.\\n\\nTermination of your rights under this section does not terminate the\\nlicenses of parties who have received copies or rights from you under\\nthis License.  If your rights have been terminated and not permanently\\nreinstated, you do not qualify to receive new licenses for the same\\nmaterial under section 10.\\n\\n9. Acceptance Not Required for Having Copies.\\n\\nYou are not required to accept this License in order to receive or\\nrun a copy of the Program.  Ancillary propagation of a covered work\\noccurring solely as a consequence of using peer-to-peer transmission\\nto receive a copy likewise does not require acceptance.  However,\\nnothing other than this License grants you permission to propagate or\\nmodify any covered work.  These actions infringe copyright if you do\\nnot accept this License.  Therefore, by modifying or propagating a\\ncovered work, you indicate your acceptance of this License to do so.\\n\\n10. Automatic Licensing of Downstream Recipients.\\n\\nEach time you convey a covered work, the recipient automatically\\nreceives a license from the original licensors, to run, modify and\\npropagate that work, subject to this License.  You are not responsible\\nfor enforcing compliance by third parties with this License.\\n\\nAn \\"entity transaction\\" is a transaction transferring control of an\\norganization, or substantially all assets of one, or subdividing an\\norganization, or merging organizations.  If propagation of a covered\\nwork results from an entity transaction, each party to that\\ntransaction who receives a copy of the work also receives whatever\\nlicenses to the work the party's predecessor in interest had or could\\ngive under the previous paragraph, plus a right to possession of the\\nCorresponding Source of the work from the predecessor in interest, if\\nthe predecessor has it or can get it with reasonable efforts.\\n\\nYou may not impose any further restrictions on the exercise of the\\nrights granted or affirmed under this License.  For example, you may\\nnot impose a license fee, royalty, or other charge for exercise of\\nrights granted under this License, and you may not initiate litigation\\n(including a cross-claim or counterclaim in a lawsuit) alleging that\\nany patent claim is infringed by making, using, selling, offering for\\nsale, or importing the Program or any portion of it.\\n\\n11. Patents.\\n\\nA \\"contributor\\" is a copyright holder who authorizes use under this\\nLicense of the Program or a work on which the Program is based.  The\\nwork thus licensed is called the contributor's \\"contributor version\\".\\n\\nA contributor's \\"essential patent claims\\" are all patent claims\\nowned or controlled by the contributor, whether already acquired or\\nhereafter acquired, that would be infringed by some manner, permitted\\nby this License, of making, using, or selling its contributor version,\\nbut do not include claims that would be infringed only as a\\nconsequence of further modification of the contributor version.  For\\npurposes of this definition, \\"control\\" includes the right to grant\\npatent sublicenses in a manner consistent with the requirements of\\nthis License.\\n\\nEach contributor grants you a non-exclusive, worldwide, royalty-free\\npatent license under the contributor's essential patent claims, to\\nmake, use, sell, offer for sale, import and otherwise run, modify and\\npropagate the contents of its contributor version.\\n\\nIn the following three paragraphs, a \\"patent license\\" is any express\\nagreement or commitment, however denominated, not to enforce a patent\\n(such as an express permission to practice a patent or covenant not to\\nsue for patent infringement).  To \\"grant\\" such a patent license to a\\nparty means to make such an agreement or commitment not to enforce a\\npatent against the party.\\n\\nIf you convey a covered work, knowingly relying on a patent license,\\nand the Corresponding Source of the work is not available for anyone\\nto copy, free of charge and under the terms of this License, through a\\npublicly available network server or other readily accessible means,\\nthen you must either (1) cause the Corresponding Source to be so\\navailable, or (2) arrange to deprive yourself of the benefit of the\\npatent license for this particular work, or (3) arrange, in a manner\\nconsistent with the requirements of this License, to extend the patent\\nlicense to downstream recipients.  \\"Knowingly relying\\" means you have\\nactual knowledge that, but for the patent license, your conveying the\\ncovered work in a country, or your recipient's use of the covered work\\nin a country, would infringe one or more identifiable patents in that\\ncountry that you have reason to believe are valid.\\n\\nIf, pursuant to or in connection with a single transaction or\\narrangement, you convey, or propagate by procuring conveyance of, a\\ncovered work, and grant a patent license to some of the parties\\nreceiving the covered work authorizing them to use, propagate, modify\\nor convey a specific copy of the covered work, then the patent license\\nyou grant is automatically extended to all recipients of the covered\\nwork and works based on it.\\n\\nA patent license is \\"discriminatory\\" if it does not include within\\nthe scope of its coverage, prohibits the exercise of, or is\\nconditioned on the non-exercise of one or more of the rights that are\\nspecifically granted under this License.  You may not convey a covered\\nwork if you are a party to an arrangement with a third party that is\\nin the business of distributing software, under which you make payment\\nto the third party based on the extent of your activity of conveying\\nthe work, and under which the third party grants, to any of the\\nparties who would receive the covered work from you, a discriminatory\\npatent license (a) in connection with copies of the covered work\\nconveyed by you (or copies made from those copies), or (b) primarily\\nfor and in connection with specific products or compilations that\\ncontain the covered work, unless you entered into that arrangement,\\nor that patent license was granted, prior to 28 March 2007.\\n\\nNothing in this License shall be construed as excluding or limiting\\nany implied license or other defenses to infringement that may\\notherwise be available to you under applicable patent law.\\n\\n12. No Surrender of Others' Freedom.\\n\\nIf conditions are imposed on you (whether by court order, agreement or\\notherwise) that contradict the conditions of this License, they do not\\nexcuse you from the conditions of this License.  If you cannot convey a\\ncovered work so as to satisfy simultaneously your obligations under this\\nLicense and any other pertinent obligations, then as a consequence you may\\nnot convey it at all.  For example, if you agree to terms that obligate you\\nto collect a royalty for further conveying from those to whom you convey\\nthe Program, the only way you could satisfy both those terms and this\\nLicense would be to refrain entirely from conveying the Program.\\n\\n13. Remote Network Interaction; Use with the GNU General Public License.\\n\\nNotwithstanding any other provision of this License, if you modify the\\nProgram, your modified version must prominently offer all users\\ninteracting with it remotely through a computer network (if your version\\nsupports such interaction) an opportunity to receive the Corresponding\\nSource of your version by providing access to the Corresponding Source\\nfrom a network server at no charge, through some standard or customary\\nmeans of facilitating copying of software.  This Corresponding Source\\nshall include the Corresponding Source for any work covered by version 3\\nof the GNU General Public License that is incorporated pursuant to the\\nfollowing paragraph.\\n\\nNotwithstanding any other provision of this License, you have\\npermission to link or combine any covered work with a work licensed\\nunder version 3 of the GNU General Public License into a single\\ncombined work, and to convey the resulting work.  The terms of this\\nLicense will continue to apply to the part which is the covered work,\\nbut the work with which it is combined will remain governed by version\\n3 of the GNU General Public License.\\n\\n14. Revised Versions of this License.\\n\\nThe Free Software Foundation may publish revised and/or new versions of\\nthe GNU Affero General Public License from time to time.  Such new versions\\nwill be similar in spirit to the present version, but may differ in detail to\\naddress new problems or concerns.\\n\\nEach version is given a distinguishing version number.  If the\\nProgram specifies that a certain numbered version of the GNU Affero General\\nPublic License \\"or any later version\\" applies to it, you have the\\noption of following the terms and conditions either of that numbered\\nversion or of any later version published by the Free Software\\nFoundation.  If the Program does not specify a version number of the\\nGNU Affero General Public License, you may choose any version ever published\\nby the Free Software Foundation.\\n\\nIf the Program specifies that a proxy can decide which future\\nversions of the GNU Affero General Public License can be used, that proxy's\\npublic statement of acceptance of a version permanently authorizes you\\nto choose that version for the Program.\\n\\nLater license versions may give you additional or different\\npermissions.  However, no additional obligations are imposed on any\\nauthor or copyright holder as a result of your choosing to follow a\\nlater version.\\n\\n15. Disclaimer of Warranty.\\n\\nTHERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY\\nAPPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT\\nHOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM \\"AS IS\\" WITHOUT WARRANTY\\nOF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,\\nTHE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR\\nPURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM\\nIS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF\\nALL NECESSARY SERVICING, REPAIR OR CORRECTION.\\n\\n16. Limitation of Liability.\\n\\nIN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING\\nWILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS\\nTHE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY\\nGENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE\\nUSE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF\\nDATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD\\nPARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),\\nEVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF\\nSUCH DAMAGES.\\n\\n17. Interpretation of Sections 15 and 16.\\n\\nIf the disclaimer of warranty and limitation of liability provided\\nabove cannot be given local legal effect according to their terms,\\nreviewing courts shall apply local law that most closely approximates\\nan absolute waiver of all civil liability in connection with the\\nProgram, unless a warranty or assumption of liability accompanies a\\ncopy of the Program in return for a fee.\\n\\n      END OF TERMS AND CONDITIONS\\n\\nHow to Apply These Terms to Your New Programs\\n\\nIf you develop a new program, and you want it to be of the greatest\\npossible use to the public, the best way to achieve this is to make it\\nfree software which everyone can redistribute and change under these terms.\\n\\nTo do so, attach the following notices to the program.  It is safest\\nto attach them to the start of each source file to most effectively\\nstate the exclusion of warranty; and each file should have at least\\nthe \\"copyright\\" line and a pointer to where the full notice is found.\\n\\n<one line to give the program's name and a brief idea of what it does.>\\nCopyright (C) <year>  <name of author>\\n\\nThis program is free software: you can redistribute it and/or modify\\nit under the terms of the GNU Affero General Public License as published by\\nthe Free Software Foundation, either version 3 of the License, or\\n(at your option) any later version.\\n\\nThis program is distributed in the hope that it will be useful,\\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\nGNU Affero General Public License for more details.\\n\\nYou should have received a copy of the GNU Affero General Public License\\nalong with this program.  If not, see <https://www.gnu.org/licenses/>.\\n\\nAlso add information on how to contact you by electronic and paper mail.\\n\\nIf your software can interact with users remotely through a computer\\nnetwork, you should also make sure that it provides a way for users to\\nget its source.  For example, if your program is a web application, its\\ninterface could display a \\"Source\\" link that leads users to an archive\\nof the code.  There are many ways you could offer source, and different\\nsolutions will be better for different programs; see section 13 for the\\nspecific requirements.\\n\\nYou should also get your employer (if you work as a programmer) or school,\\nif any, to sign a \\"copyright disclaimer\\" for the program, if necessary.\\nFor more information on this, and how to apply and follow the GNU AGPL, see\\n<https://www.gnu.org/licenses/>."},{"id":"gcoord","name":"gcoord","description":"A coordinates converter","url":"https://github.com/hujiulong/gcoord","licenseType":"MIT","license":"\\n\\t\\tMIT License\\n\\n\\t\\tCopyright (c) 2018-present, Jiulong Hu\\n\\n\\t\\tPermission is hereby granted, free of charge, to any person obtaining a copy\\n\\t\\tof this software and associated documentation files (the \\"Software\\"), to deal\\n\\t\\tin the Software without restriction, including without limitation the rights\\n\\t\\tto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\n\\t\\tcopies of the Software, and to permit persons to whom the Software is\\n\\t\\tfurnished to do so, subject to the following conditions:\\n\\n\\t\\tThe above copyright notice and this permission notice shall be included in all\\n\\t\\tcopies or substantial portions of the Software.\\n\\n\\t\\tTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n\\t\\tIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n\\t\\tFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n\\t\\tAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n\\t\\tLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n\\t\\tOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n\\t\\tSOFTWARE."},{"id":"localforage","name":"localForage","description":"A fast and simple storage library for JavaScript.","url":"https://github.com/localForage/localForage","homepage":"https://localforage.github.io/localForage/","licenseType":"Apache-2.0","license":"\\n        Apache License\\n\\n        Version 2.0, January 2004\\n\\n     http://www.apache.org/licenses/\\n\\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\\n\\n1. Definitions.\\n\\n\\"License\\" shall mean the terms and conditions for use, reproduction,\\nand distribution as defined by Sections 1 through 9 of this document.\\n\\n\\"Licensor\\" shall mean the copyright owner or entity authorized by\\nthe copyright owner that is granting the License.\\n\\n\\"Legal Entity\\" shall mean the union of the acting entity and all\\nother entities that control, are controlled by, or are under common\\ncontrol with that entity. For the purposes of this definition,\\n\\"control\\" means (i) the power, direct or indirect, to cause the\\ndirection or management of such entity, whether by contract or\\notherwise, or (ii) ownership of fifty percent (50%) or more of the\\noutstanding shares, or (iii) beneficial ownership of such entity.\\n\\n\\"You\\" (or \\"Your\\") shall mean an individual or Legal Entity\\nexercising permissions granted by this License.\\n\\n\\"Source\\" form shall mean the preferred form for making modifications,\\nincluding but not limited to software source code, documentation\\nsource, and configuration files.\\n\\n\\"Object\\" form shall mean any form resulting from mechanical\\ntransformation or translation of a Source form, including but\\nnot limited to compiled object code, generated documentation,\\nand conversions to other media types.\\n\\n\\"Work\\" shall mean the work of authorship, whether in Source or\\nObject form, made available under the License, as indicated by a\\ncopyright notice that is included in or attached to the work\\n(an example is provided in the Appendix below).\\n\\n\\"Derivative Works\\" shall mean any work, whether in Source or Object\\nform, that is based on (or derived from) the Work and for which the\\neditorial revisions, annotations, elaborations, or other modifications\\nrepresent, as a whole, an original work of authorship. For the purposes\\nof this License, Derivative Works shall not include works that remain\\nseparable from, or merely link (or bind by name) to the interfaces of,\\nthe Work and Derivative Works thereof.\\n\\n\\"Contribution\\" shall mean any work of authorship, including\\nthe original version of the Work and any modifications or additions\\nto that Work or Derivative Works thereof, that is intentionally\\nsubmitted to Licensor for inclusion in the Work by the copyright owner\\nor by an individual or Legal Entity authorized to submit on behalf of\\nthe copyright owner. For the purposes of this definition, \\"submitted\\"\\nmeans any form of electronic, verbal, or written communication sent\\nto the Licensor or its representatives, including but not limited to\\ncommunication on electronic mailing lists, source code control systems,\\nand issue tracking systems that are managed by, or on behalf of, the\\nLicensor for the purpose of discussing and improving the Work, but\\nexcluding communication that is conspicuously marked or otherwise\\ndesignated in writing by the copyright owner as \\"Not a Contribution.\\"\\n\\n\\"Contributor\\" shall mean Licensor and any individual or Legal Entity\\non behalf of whom a Contribution has been received by Licensor and\\nsubsequently incorporated within the Work.\\n\\n2. Grant of Copyright License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\ncopyright license to reproduce, prepare Derivative Works of,\\npublicly display, publicly perform, sublicense, and distribute the\\nWork and such Derivative Works in Source or Object form.\\n\\n3. Grant of Patent License. Subject to the terms and conditions of\\nthis License, each Contributor hereby grants to You a perpetual,\\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\\n(except as stated in this section) patent license to make, have made,\\nuse, offer to sell, sell, import, and otherwise transfer the Work,\\nwhere such license applies only to those patent claims licensable\\nby such Contributor that are necessarily infringed by their\\nContribution(s) alone or by combination of their Contribution(s)\\nwith the Work to which such Contribution(s) was submitted. If You\\ninstitute patent litigation against any entity (including a\\ncross-claim or counterclaim in a lawsuit) alleging that the Work\\nor a Contribution incorporated within the Work constitutes direct\\nor contributory patent infringement, then any patent licenses\\ngranted to You under this License for that Work shall terminate\\nas of the date such litigation is filed.\\n\\n4. Redistribution. You may reproduce and distribute copies of the\\nWork or Derivative Works thereof in any medium, with or without\\nmodifications, and in Source or Object form, provided that You\\nmeet the following conditions:\\n\\n(a) You must give any other recipients of the Work or\\nDerivative Works a copy of this License; and\\n\\n(b) You must cause any modified files to carry prominent notices\\nstating that You changed the files; and\\n\\n(c) You must retain, in the Source form of any Derivative Works\\nthat You distribute, all copyright, patent, trademark, and\\nattribution notices from the Source form of the Work,\\nexcluding those notices that do not pertain to any part of\\nthe Derivative Works; and\\n\\n(d) If the Work includes a \\"NOTICE\\" text file as part of its\\ndistribution, then any Derivative Works that You distribute must\\ninclude a readable copy of the attribution notices contained\\nwithin such NOTICE file, excluding those notices that do not\\npertain to any part of the Derivative Works, in at least one\\nof the following places: within a NOTICE text file distributed\\nas part of the Derivative Works; within the Source form or\\ndocumentation, if provided along with the Derivative Works; or,\\nwithin a display generated by the Derivative Works, if and\\nwherever such third-party notices normally appear. The contents\\nof the NOTICE file are for informational purposes only and\\ndo not modify the License. You may add Your own attribution\\nnotices within Derivative Works that You distribute, alongside\\nor as an addendum to the NOTICE text from the Work, provided\\nthat such additional attribution notices cannot be construed\\nas modifying the License.\\n\\nYou may add Your own copyright statement to Your modifications and\\nmay provide additional or different license terms and conditions\\nfor use, reproduction, or distribution of Your modifications, or\\nfor any such Derivative Works as a whole, provided Your use,\\nreproduction, and distribution of the Work otherwise complies with\\nthe conditions stated in this License.\\n\\n5. Submission of Contributions. Unless You explicitly state otherwise,\\nany Contribution intentionally submitted for inclusion in the Work\\nby You to the Licensor shall be under the terms and conditions of\\nthis License, without any additional terms or conditions.\\nNotwithstanding the above, nothing herein shall supersede or modify\\nthe terms of any separate license agreement you may have executed\\nwith Licensor regarding such Contributions.\\n\\n6. Trademarks. This License does not grant permission to use the trade\\nnames, trademarks, service marks, or product names of the Licensor,\\nexcept as required for reasonable and customary use in describing the\\norigin of the Work and reproducing the content of the NOTICE file.\\n\\n7. Disclaimer of Warranty. Unless required by applicable law or\\nagreed to in writing, Licensor provides the Work (and each\\nContributor provides its Contributions) on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\\nimplied, including, without limitation, any warranties or conditions\\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\\nPARTICULAR PURPOSE. You are solely responsible for determining the\\nappropriateness of using or redistributing the Work and assume any\\nrisks associated with Your exercise of permissions under this License.\\n\\n8. Limitation of Liability. In no event and under no legal theory,\\nwhether in tort (including negligence), contract, or otherwise,\\nunless required by applicable law (such as deliberate and grossly\\nnegligent acts) or agreed to in writing, shall any Contributor be\\nliable to You for damages, including any direct, indirect, special,\\nincidental, or consequential damages of any character arising as a\\nresult of this License or out of the use or inability to use the\\nWork (including but not limited to damages for loss of goodwill,\\nwork stoppage, computer failure or malfunction, or any and all\\nother commercial damages or losses), even if such Contributor\\nhas been advised of the possibility of such damages.\\n\\n9. Accepting Warranty or Additional Liability. While redistributing\\nthe Work or Derivative Works thereof, You may choose to offer,\\nand charge a fee for, acceptance of support, warranty, indemnity,\\nor other liability obligations and/or rights consistent with this\\nLicense. However, in accepting such obligations, You may act only\\non Your own behalf and on Your sole responsibility, not on behalf\\nof any other Contributor, and only if You agree to indemnify,\\ndefend, and hold each Contributor harmless for any liability\\nincurred by, or claims asserted against, such Contributor by reason\\nof your accepting any such warranty or additional liability.\\n\\nEND OF TERMS AND CONDITIONS\\n\\nAPPENDIX: How to apply the Apache License to your work.\\n\\nTo apply the Apache License to your work, attach the following\\nboilerplate notice, with the fields enclosed by brackets \\"{}\\"\\nreplaced with your own identifying information. (Don't include\\nthe brackets!)  The text should be enclosed in the appropriate\\ncomment syntax for the file format. We also recommend that a\\nfile or class name and description of purpose be included on the\\nsame \\"printed page\\" as the copyright notice for easier\\nidentification within third-party archives.\\n\\nCopyright 2014 Mozilla\\n\\nLicensed under the Apache License, Version 2.0 (the \\"License\\");\\nyou may not use this file except in compliance with the License.\\nYou may obtain a copy of the License at\\n\\nhttp://www.apache.org/licenses/LICENSE-2.0\\n\\nUnless required by applicable law or agreed to in writing, software\\ndistributed under the License is distributed on an \\"AS IS\\" BASIS,\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\nSee the License for the specific language governing permissions and\\nlimitations under the License."},{"id":"lodash-es","name":"Lodash","description":"A modern JavaScript utility library delivering modularity, performance, & extras.","license":"Copyright OpenJS Foundation and other contributors <https://openjsf.org/>\\n\\nBased on Underscore.js, copyright Jeremy Ashkenas,\\nDocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>\\n\\nThis software consists of voluntary contributions made by many\\nindividuals. For exact contribution history, see the revision history\\navailable at https://github.com/lodash/lodash\\n\\nThe following license applies to all parts of this software except as\\ndocumented below:\\n\\n====\\n\\nPermission is hereby granted, free of charge, to any person obtaining\\na copy of this software and associated documentation files (the\\n\\"Software\\"), to deal in the Software without restriction, including\\nwithout limitation the rights to use, copy, modify, merge, publish,\\ndistribute, sublicense, and/or sell copies of the Software, and to\\npermit persons to whom the Software is furnished to do so, subject to\\nthe following conditions:\\n\\nThe above copyright notice and this permission notice shall be\\nincluded in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND,\\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n\\n====\\n\\nCopyright and related rights for sample code are waived via CC0. Sample\\ncode is defined as all source code displayed within the prose of the\\ndocumentation.\\n\\nCC0: http://creativecommons.org/publicdomain/zero/1.0/\\n\\n====\\n\\nFiles located in the node_modules and vendor directories are externally\\nmaintained libraries used by this software which have their own\\nlicenses; we recommend you read them, as their terms may differ from the\\nterms above.","licenseType":"MIT","url":"https://github.com/lodash/lodash","homepage":"https://lodash.com/"},{"id":"terradraw","name":"Terradraw","description":"A library for drawing on maps that supports Mapbox, MapLibre, Google Maps, OpenLayers and Leaflet out the box.","license":"Copyright 2022 James Milner\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \\"Software\\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/JamesLMilner/terra-draw","homepage":"https://terradraw.io/"},{"id":"vue-i18n","name":"Vue I18n","description":"Internationalization plugin for Vue.js","license":"The MIT License (MIT)\\n\\nCopyright (c) 2016 kazuya kawaguchi\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy of\\nthis software and associated documentation files (the \\"Software\\"), to deal in\\nthe Software without restriction, including without limitation the rights to\\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\\nthe Software, and to permit persons to whom the Software is furnished to do so,\\nsubject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","licenseType":"MIT","url":"https://github.com/intlify/vue-i18n","homepage":"https://kazupon.github.io/vue-i18n/"},{"id":"vue-markdown-render","name":"Vue Markdown Render","description":"A simple markdown parser for Vue using markdown-it.","license":"MIT License\\n\\nCopyright (c) 2023 cloudacy OG\\n\\nPermission is hereby granted, free of charge, to any person obtaining a copy\\nof this software and associated documentation files (the \\"Software\\"), to deal\\nin the Software without restriction, including without limitation the rights\\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\\ncopies of the Software, and to permit persons to whom the Software is\\nfurnished to do so, subject to the following conditions:\\n\\nThe above copyright notice and this permission notice shall be included in all\\ncopies or substantial portions of the Software.\\n\\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\nSOFTWARE.","licenseType":"MIT","url":"https://github.com/cloudacy/vue-markdown-render"},{"id":"proj4rs","name":"Proj4rs","description":"Rust adaptation of Proj4.","license":"","licenseType":"MIT, Apache-2.0","url":"https://github.com/3liz/proj4rs"}]`);
  nb = [
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
  rb = {
    withStackTrace: false
  };
  Rf = (e, t, n = rb) => {
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
  function gr(e, t, n, i) {
    function l(c) {
      return c instanceof n ? c : new n(function(f) {
        f(c);
      });
    }
    return new (n || (n = Promise))(function(c, f) {
      function h(w) {
        try {
          v(i.next(w));
        } catch (I) {
          f(I);
        }
      }
      function p(w) {
        try {
          v(i.throw(w));
        } catch (I) {
          f(I);
        }
      }
      function v(w) {
        w.done ? c(w.value) : l(w.value).then(h, p);
      }
      v((i = i.apply(e, [])).next());
    });
  }
  function ic(e) {
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
  function En(e) {
    return this instanceof En ? (this.v = e, this) : new En(e);
  }
  function oc(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = n.apply(e, t || []), l, c = [];
    return l = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), h("next"), h("throw"), h("return", f), l[Symbol.asyncIterator] = function() {
      return this;
    }, l;
    function f(R) {
      return function(k) {
        return Promise.resolve(k).then(R, I);
      };
    }
    function h(R, k) {
      i[R] && (l[R] = function(L) {
        return new Promise(function(B, F) {
          c.push([
            R,
            L,
            B,
            F
          ]) > 1 || p(R, L);
        });
      }, k && (l[R] = k(l[R])));
    }
    function p(R, k) {
      try {
        v(i[R](k));
      } catch (L) {
        P(c[0][3], L);
      }
    }
    function v(R) {
      R.value instanceof En ? Promise.resolve(R.value.v).then(w, I) : P(c[0][2], R);
    }
    function w(R) {
      p("next", R);
    }
    function I(R) {
      p("throw", R);
    }
    function P(R, k) {
      R(k), c.shift(), c.length && p(c[0][0], c[0][1]);
    }
  }
  function ib(e) {
    var t, n;
    return t = {}, i("next"), i("throw", function(l) {
      throw l;
    }), i("return"), t[Symbol.iterator] = function() {
      return this;
    }, t;
    function i(l, c) {
      t[l] = e[l] ? function(f) {
        return (n = !n) ? {
          value: En(e[l](f)),
          done: false
        } : c ? c(f) : f;
      } : c;
    }
  }
  function ob(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof ic == "function" ? ic(e) : e[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
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
  class Ot {
    constructor(t) {
      this._promise = t;
    }
    static fromSafePromise(t) {
      const n = t.then((i) => new mn(i));
      return new Ot(n);
    }
    static fromPromise(t, n) {
      const i = t.then((l) => new mn(l)).catch((l) => new sn(n(l)));
      return new Ot(i);
    }
    static fromThrowable(t, n) {
      return (...i) => new Ot(gr(this, void 0, void 0, function* () {
        try {
          return new mn(yield t(...i));
        } catch (l) {
          return new sn(n ? n(l) : l);
        }
      }));
    }
    static combine(t) {
      return sb(t);
    }
    static combineWithAllErrors(t) {
      return ab(t);
    }
    map(t) {
      return new Ot(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        return n.isErr() ? new sn(n.error) : new mn(yield t(n.value));
      })));
    }
    andThrough(t) {
      return new Ot(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        if (n.isErr()) return new sn(n.error);
        const i = yield t(n.value);
        return i.isErr() ? new sn(i.error) : new mn(n.value);
      })));
    }
    andTee(t) {
      return new Ot(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        if (n.isErr()) return new sn(n.error);
        try {
          yield t(n.value);
        } catch {
        }
        return new mn(n.value);
      })));
    }
    orTee(t) {
      return new Ot(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        if (n.isOk()) return new mn(n.value);
        try {
          yield t(n.error);
        } catch {
        }
        return new sn(n.error);
      })));
    }
    mapErr(t) {
      return new Ot(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        return n.isOk() ? new mn(n.value) : new sn(yield t(n.error));
      })));
    }
    andThen(t) {
      return new Ot(this._promise.then((n) => {
        if (n.isErr()) return new sn(n.error);
        const i = t(n.value);
        return i instanceof Ot ? i._promise : i;
      }));
    }
    orElse(t) {
      return new Ot(this._promise.then((n) => gr(this, void 0, void 0, function* () {
        return n.isErr() ? t(n.error) : new mn(n.value);
      })));
    }
    match(t, n) {
      return this._promise.then((i) => i.match(t, n));
    }
    unwrapOr(t) {
      return this._promise.then((n) => n.unwrapOr(t));
    }
    safeUnwrap() {
      return oc(this, arguments, function* () {
        return yield En(yield En(yield* ib(ob(yield En(this._promise.then((n) => n.safeUnwrap()))))));
      });
    }
    then(t, n) {
      return this._promise.then(t, n);
    }
    [Symbol.asyncIterator]() {
      return oc(this, arguments, function* () {
        const n = yield En(this._promise);
        return n.isErr() && (yield yield En(go(n.error))), yield En(n.value);
      });
    }
  }
  function go(e) {
    return new Ot(Promise.resolve(new sn(e)));
  }
  const Nf = (e) => {
    let t = G([]);
    for (const n of e) if (n.isErr()) {
      t = M(n.error);
      break;
    } else t.map((i) => i.push(n.value));
    return t;
  }, sb = (e) => Ot.fromSafePromise(Promise.all(e)).andThen(Nf), Mf = (e) => {
    let t = G([]);
    for (const n of e) n.isErr() && t.isErr() ? t.error.push(n.error) : n.isErr() && t.isOk() ? t = M([
      n.error
    ]) : n.isOk() && t.isOk() && t.value.push(n.value);
    return t;
  }, ab = (e) => Ot.fromSafePromise(Promise.all(e)).andThen(Mf);
  var fa;
  (function(e) {
    function t(l, c) {
      return (...f) => {
        try {
          const h = l(...f);
          return G(h);
        } catch (h) {
          return M(c ? c(h) : h);
        }
      };
    }
    e.fromThrowable = t;
    function n(l) {
      return Nf(l);
    }
    e.combine = n;
    function i(l) {
      return Mf(l);
    }
    e.combineWithAllErrors = i;
  })(fa || (fa = {}));
  G = function(e) {
    return new mn(e);
  };
  M = function(e) {
    return new sn(e);
  };
  class mn {
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
      return G(t(this.value));
    }
    mapErr(t) {
      return G(this.value);
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
      return G(this.value);
    }
    orTee(t) {
      return G(this.value);
    }
    orElse(t) {
      return G(this.value);
    }
    asyncAndThen(t) {
      return t(this.value);
    }
    asyncAndThrough(t) {
      return t(this.value).map(() => this.value);
    }
    asyncMap(t) {
      return Ot.fromSafePromise(t(this.value));
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
      throw Rf("Called `_unsafeUnwrapErr` on an Ok", this, t);
    }
    *[Symbol.iterator]() {
      return this.value;
    }
  }
  class sn {
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
      return M(this.error);
    }
    mapErr(t) {
      return M(t(this.error));
    }
    andThrough(t) {
      return M(this.error);
    }
    andTee(t) {
      return M(this.error);
    }
    orTee(t) {
      try {
        t(this.error);
      } catch {
      }
      return M(this.error);
    }
    andThen(t) {
      return M(this.error);
    }
    orElse(t) {
      return t(this.error);
    }
    asyncAndThen(t) {
      return go(this.error);
    }
    asyncAndThrough(t) {
      return go(this.error);
    }
    asyncMap(t) {
      return go(this.error);
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
        throw yield M(t), new Error("Do not use this generator out of `safeTry`");
      })();
    }
    _unsafeUnwrap(t) {
      throw Rf("Called `_unsafeUnwrap` on an Err", this, t);
    }
    _unsafeUnwrapErr(t) {
      return this.error;
    }
    *[Symbol.iterator]() {
      const t = this;
      return yield t, t;
    }
  }
  fa.fromThrowable;
  Zr = ((e) => (e.GENERIC = "generic", e.VALIDATION = "validation", e.NETWORK = "network", e.GEOLOCATION = "geolocation", e.STORAGE = "storage", e.CONVERSION = "conversion", e.UPDATE_SERVICE = "update_service", e))(Zr || {});
  Nr = class extends Error {
    constructor(t, n) {
      super(t), this.cause = n, this.name = this.constructor.name, n && (this.message = `${t} (caused by: ${n.message})`);
    }
  };
  class yt extends Nr {
    constructor(t, n = "GENERIC_ERROR", i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", "generic");
      this.code = n;
    }
  }
  function lb(e) {
    return e instanceof Nr;
  }
  function Vt(e, t = "Unknown error occurred") {
    return lb(e) ? e : e instanceof Error ? new yt(t, "UNKNOWN_ERROR", e) : new yt(t, "UNKNOWN_ERROR");
  }
  function ft(e, t) {
    const n = t ? `[${t}] ` : "";
    console.error(`${n}${e.domain}.${e.code}: ${e.message}`, {
      error: e,
      cause: e.cause,
      stack: e.stack
    });
  }
  class $a extends Nr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "code");
      __publicField(this, "domain", Zr.GEOLOCATION);
      this.code = n;
    }
  }
  class Cr extends $a {
    constructor(t = "User denied geolocation permission", n) {
      super(t, "PERMISSION_DENIED", n);
    }
  }
  class cb extends $a {
    constructor(t = "Geolocation is not supported by this browser", n) {
      super(t, "UNSUPPORTED_BROWSER", n);
    }
  }
  class it extends $a {
    constructor(t = "Geolocation update service error", n, i) {
      super(t, "UPDATE_SERVICE_ERROR", i), this.serviceName = n;
    }
  }
  var ub = "2.0.6", fb = 500, sc = "user-agent", Jr = "", ac = "?", lt = {
    FUNCTION: "function",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined"
  }, Ut = "browser", kn = "cpu", In = "device", cn = "engine", qt = "os", zr = "result", z = "name", D = "type", H = "vendor", q = "version", xt = "architecture", Ui = "major", $ = "model", gi = "console", Se = "mobile", $e = "tablet", ut = "smarttv", wn = "wearable", io = "xr", mi = "embedded", kr = "inapp", Ba = "brands", vr = "formFactors", za = "fullVersionList", Hr = "platform", Ha = "platformVersion", as = "bitness", cr = "sec-ch-ua", hb = cr + "-full-version-list", db = cr + "-arch", pb = cr + "-" + as, gb = cr + "-form-factors", mb = cr + "-" + Se, wb = cr + "-" + $, Lf = cr + "-" + Hr, yb = Lf + "-version", Cf = [
    Ba,
    za,
    Se,
    $,
    Hr,
    Ha,
    xt,
    vr,
    as
  ], oo = "Amazon", xr = "Apple", lc = "ASUS", cc = "BlackBerry", mr = "Google", uc = "Huawei", Rs = "Lenovo", fc = "Honor", so = "LG", Ns = "Microsoft", Ms = "Motorola", Ls = "Nvidia", hc = "OnePlus", Cs = "OPPO", oi = "Samsung", dc = "Sharp", si = "Sony", ks = "Xiaomi", xs = "Zebra", pc = "Chrome", gc = "Chromium", qn = "Chromecast", mo = "Edge", ai = "Firefox", li = "Opera", Fs = "Facebook", mc = "Sogou", Fr = "Mobile ", ci = " Browser", ha = "Windows", bb = typeof window !== lt.UNDEFINED, Gt = bb && window.navigator ? window.navigator : void 0, Qn = Gt && Gt.userAgentData ? Gt.userAgentData : void 0, vb = function(e, t) {
    var n = {}, i = t;
    if (!jo(t)) {
      i = {};
      for (var l in t) for (var c in t[l]) i[c] = t[l][c].concat(i[c] ? i[c] : []);
    }
    for (var f in e) n[f] = i[f] && i[f].length % 2 === 0 ? i[f].concat(e[f]) : e[f];
    return n;
  }, ls = function(e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
    return t;
  }, da = function(e, t) {
    if (typeof e === lt.OBJECT && e.length > 0) {
      for (var n in e) if (er(t) == er(e[n])) return true;
      return false;
    }
    return Vi(e) ? er(t) == er(e) : false;
  }, jo = function(e, t) {
    for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || (t ? jo(e[n]) : false);
  }, Vi = function(e) {
    return typeof e === lt.STRING;
  }, Ds = function(e) {
    if (e) {
      for (var t = [], n = Xr(/\\?\"/g, e).split(","), i = 0; i < n.length; i++) if (n[i].indexOf(";") > -1) {
        var l = Uo(n[i]).split(";v=");
        t[i] = {
          brand: l[0],
          version: l[1]
        };
      } else t[i] = Uo(n[i]);
      return t;
    }
  }, er = function(e) {
    return Vi(e) ? e.toLowerCase() : e;
  }, js = function(e) {
    return Vi(e) ? Xr(/[^\d\.]/g, e).split(".")[0] : void 0;
  }, xn = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) {
      var n = e[t];
      typeof n == lt.OBJECT && n.length == 2 ? this[n[0]] = n[1] : this[n] = void 0;
    }
    return this;
  }, Xr = function(e, t) {
    return Vi(t) ? t.replace(e, Jr) : t;
  }, ui = function(e) {
    return Xr(/\\?\"/g, e);
  }, Uo = function(e, t) {
    return e = Xr(/^\s\s*/, String(e)), typeof t === lt.UNDEFINED ? e : e.substring(0, t);
  }, Us = function(e, t) {
    if (!(!e || !t)) for (var n = 0, i, l, c, f, h, p; n < t.length && !h; ) {
      var v = t[n], w = t[n + 1];
      for (i = l = 0; i < v.length && !h && v[i]; ) if (h = v[i++].exec(e), h) for (c = 0; c < w.length; c++) p = h[++l], f = w[c], typeof f === lt.OBJECT && f.length > 0 ? f.length === 2 ? typeof f[1] == lt.FUNCTION ? this[f[0]] = f[1].call(this, p) : this[f[0]] = f[1] : f.length >= 3 && (typeof f[1] === lt.FUNCTION && !(f[1].exec && f[1].test) ? f.length > 3 ? this[f[0]] = p ? f[1].apply(this, f.slice(2)) : void 0 : this[f[0]] = p ? f[1].call(this, p, f[2]) : void 0 : f.length == 3 ? this[f[0]] = p ? p.replace(f[1], f[2]) : void 0 : f.length == 4 ? this[f[0]] = p ? f[3].call(this, p.replace(f[1], f[2])) : void 0 : f.length > 4 && (this[f[0]] = p ? f[3].apply(this, [
        p.replace(f[1], f[2])
      ].concat(f.slice(4))) : void 0)) : this[f] = p || void 0;
      n += 2;
    }
  }, bn = function(e, t) {
    for (var n in t) if (typeof t[n] === lt.OBJECT && t[n].length > 0) {
      for (var i = 0; i < t[n].length; i++) if (da(t[n][i], e)) return n === ac ? void 0 : n;
    } else if (da(t[n], e)) return n === ac ? void 0 : n;
    return t.hasOwnProperty("*") ? t["*"] : e;
  }, wc = {
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
  }, yc = {
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
  }, Eb = {
    Chrome: "Google Chrome",
    Edge: "Microsoft Edge",
    "Edge WebView2": "Microsoft Edge WebView2",
    "Chrome WebView": "Android WebView",
    "Chrome Headless": "HeadlessChrome",
    "Huawei Browser": "HuaweiBrowser",
    "MIUI Browser": "Miui Browser",
    "Opera Mobi": "OperaMobile",
    Yandex: "YaBrowser"
  }, bc = {
    browser: [
      [
        /\b(?:crmo|crios)\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          Fr + "Chrome"
        ]
      ],
      [
        /webview.+edge\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          mo + " WebView"
        ]
      ],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "Edge"
        ]
      ],
      [
        /(opera mini)\/([-\w\.]+)/i,
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
      ],
      [
        z,
        q
      ],
      [
        /opios[\/ ]+([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          li + " Mini"
        ]
      ],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          li + " GX"
        ]
      ],
      [
        /\bopr\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          li
        ]
      ],
      [
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "Baidu"
        ]
      ],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
      ],
      [
        q,
        [
          z,
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
        z,
        q
      ],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "Quark"
        ]
      ],
      [
        /\bddg\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "DuckDuckGo"
        ]
      ],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "UCBrowser"
        ]
      ],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "WeChat"
        ]
      ],
      [
        /konqueror\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "Konqueror"
        ]
      ],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
      ],
      [
        q,
        [
          z,
          "IE"
        ]
      ],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "Yandex"
        ]
      ],
      [
        /slbrowser\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "Smart " + Rs + ci
        ]
      ],
      [
        /(avast|avg)\/([\w\.]+)/i
      ],
      [
        [
          z,
          /(.+)/,
          "$1 Secure" + ci
        ],
        q
      ],
      [
        /\bfocus\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          ai + " Focus"
        ]
      ],
      [
        /\bopt\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          li + " Touch"
        ]
      ],
      [
        /coc_coc\w+\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "Coc Coc"
        ]
      ],
      [
        /dolfin\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "Dolphin"
        ]
      ],
      [
        /coast\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          li + " Coast"
        ]
      ],
      [
        /miuibrowser\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "MIUI" + ci
        ]
      ],
      [
        /fxios\/([\w\.-]+)/i
      ],
      [
        q,
        [
          z,
          Fr + ai
        ]
      ],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
      ],
      [
        q,
        [
          z,
          "360"
        ]
      ],
      [
        /\b(qq)\/([\w\.]+)/i
      ],
      [
        [
          z,
          /(.+)/,
          "$1Browser"
        ],
        q
      ],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [
        [
          z,
          /(.+)/,
          "$1" + ci
        ],
        q
      ],
      [
        /samsungbrowser\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          oi + " Internet"
        ]
      ],
      [
        /metasr[\/ ]?([\d\.]+)/i
      ],
      [
        q,
        [
          z,
          mc + " Explorer"
        ]
      ],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
      ],
      [
        [
          z,
          mc + " Mobile"
        ],
        q
      ],
      [
        /(electron)\/([\w\.]+) safari/i,
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
      ],
      [
        z,
        q
      ],
      [
        /(lbbrowser|rekonq)/i
      ],
      [
        z
      ],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        /ome\/([\w\.]+).+qihu (360)[es]e/i
      ],
      [
        q,
        z
      ],
      [
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
      ],
      [
        [
          z,
          Fs
        ],
        q,
        [
          D,
          kr
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
        z,
        q,
        [
          D,
          kr
        ]
      ],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
      ],
      [
        q,
        [
          z,
          "GSA"
        ],
        [
          D,
          kr
        ]
      ],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          "TikTok"
        ],
        [
          D,
          kr
        ]
      ],
      [
        /\[(linkedin)app\]/i
      ],
      [
        z,
        [
          D,
          kr
        ]
      ],
      [
        /(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i
      ],
      [
        [
          z,
          /(.+)/,
          "Zalo"
        ],
        q,
        [
          D,
          kr
        ]
      ],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
      ],
      [
        z,
        q
      ],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
      ],
      [
        q,
        [
          z,
          pc + " Headless"
        ]
      ],
      [
        /wv\).+chrome\/([\w\.]+).+edgw\//i
      ],
      [
        q,
        [
          z,
          mo + " WebView2"
        ]
      ],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
      ],
      [
        [
          z,
          pc + " WebView"
        ],
        q
      ],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
      ],
      [
        q,
        [
          z,
          "Android" + ci
        ]
      ],
      [
        /chrome\/([\w\.]+) mobile/i
      ],
      [
        q,
        [
          z,
          Fr + "Chrome"
        ]
      ],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
      ],
      [
        z,
        q
      ],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        q,
        [
          z,
          Fr + "Safari"
        ]
      ],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [
        [
          z,
          Fr + "Safari"
        ]
      ],
      [
        /version\/([\w\.\,]+) .*(safari)/i
      ],
      [
        q,
        z
      ],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
      ],
      [
        z,
        [
          q,
          "1"
        ]
      ],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [
        z,
        q
      ],
      [
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
      ],
      [
        [
          z,
          Fr + ai
        ],
        q
      ],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
      ],
      [
        [
          z,
          "Netscape"
        ],
        q
      ],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
      ],
      [
        z,
        q
      ],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
      ],
      [
        q,
        [
          z,
          ai + " Reality"
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
        z,
        [
          q,
          /_/g,
          "."
        ]
      ],
      [
        /(cobalt)\/([\w\.]+)/i
      ],
      [
        z,
        [
          q,
          /[^\d\.]+./,
          Jr
        ]
      ]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
      ],
      [
        [
          xt,
          "amd64"
        ]
      ],
      [
        /(ia32(?=;))/i,
        /\b((i[346]|x)86)(pc)?\b/i
      ],
      [
        [
          xt,
          "ia32"
        ]
      ],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
      ],
      [
        [
          xt,
          "arm64"
        ]
      ],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
      ],
      [
        [
          xt,
          "armhf"
        ]
      ],
      [
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [
        [
          xt,
          "arm"
        ]
      ],
      [
        / sun4\w[;\)]/i
      ],
      [
        [
          xt,
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
          xt,
          /ower/,
          Jr,
          er
        ]
      ],
      [
        /mc680.0/i
      ],
      [
        [
          xt,
          "68k"
        ]
      ],
      [
        /winnt.+\[axp/i
      ],
      [
        [
          xt,
          "alpha"
        ]
      ]
    ],
    device: [
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [
        $,
        [
          H,
          oi
        ],
        [
          D,
          $e
        ]
      ],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [
        $,
        [
          H,
          oi
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i
      ],
      [
        $,
        [
          H,
          xr
        ],
        [
          D,
          Se
        ]
      ],
      [
        /\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,
        /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i
      ],
      [
        $,
        [
          H,
          xr
        ],
        [
          D,
          $e
        ]
      ],
      [
        /(macintosh);/i
      ],
      [
        $,
        [
          H,
          xr
        ]
      ],
      [
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [
        $,
        [
          H,
          dc
        ],
        [
          D,
          Se
        ]
      ],
      [
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [
        $,
        [
          H,
          fc
        ],
        [
          D,
          $e
        ]
      ],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [
        $,
        [
          H,
          fc
        ],
        [
          D,
          Se
        ]
      ],
      [
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [
        $,
        [
          H,
          uc
        ],
        [
          D,
          $e
        ]
      ],
      [
        /(?:huawei) ?([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i
      ],
      [
        $,
        [
          H,
          uc
        ],
        [
          D,
          Se
        ]
      ],
      [
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
      ],
      [
        [
          $,
          /_/g,
          " "
        ],
        [
          H,
          ks
        ],
        [
          D,
          $e
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
          $,
          /_/g,
          " "
        ],
        [
          H,
          ks
        ],
        [
          D,
          Se
        ]
      ],
      [
        /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [
        $,
        [
          H,
          hc
        ],
        [
          D,
          Se
        ]
      ],
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [
        $,
        [
          H,
          Cs
        ],
        [
          D,
          Se
        ]
      ],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [
        $,
        [
          H,
          bn,
          {
            OnePlus: [
              "203",
              "304",
              "403",
              "404",
              "413",
              "415"
            ],
            "*": Cs
          }
        ],
        [
          D,
          $e
        ]
      ],
      [
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [
        $,
        [
          H,
          "BLU"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [
        $,
        [
          H,
          "Vivo"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [
        $,
        [
          H,
          "Realme"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [
        $,
        [
          H,
          Rs
        ],
        [
          D,
          $e
        ]
      ],
      [
        /lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i
      ],
      [
        $,
        [
          H,
          Rs
        ],
        [
          D,
          Se
        ]
      ],
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
        /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
      ],
      [
        $,
        [
          H,
          Ms
        ],
        [
          D,
          Se
        ]
      ],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [
        $,
        [
          H,
          Ms
        ],
        [
          D,
          $e
        ]
      ],
      [
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [
        $,
        [
          H,
          so
        ],
        [
          D,
          $e
        ]
      ],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [
        $,
        [
          H,
          so
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(nokia) (t[12][01])/i
      ],
      [
        H,
        $,
        [
          D,
          $e
        ]
      ],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i
      ],
      [
        [
          $,
          /_/g,
          " "
        ],
        [
          D,
          Se
        ],
        [
          H,
          "Nokia"
        ]
      ],
      [
        /(pixel (c|tablet))\b/i
      ],
      [
        $,
        [
          H,
          mr
        ],
        [
          D,
          $e
        ]
      ],
      [
        /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i
      ],
      [
        $,
        [
          H,
          mr
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(google) (pixelbook( go)?)/i
      ],
      [
        H,
        $
      ],
      [
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [
        $,
        [
          H,
          si
        ],
        [
          D,
          Se
        ]
      ],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [
        [
          $,
          "Xperia Tablet"
        ],
        [
          H,
          si
        ],
        [
          D,
          $e
        ]
      ],
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        /(kf[a-z]+)( bui|\)).+silk\//i
      ],
      [
        $,
        [
          H,
          oo
        ],
        [
          D,
          $e
        ]
      ],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
      ],
      [
        [
          $,
          /(.+)/g,
          "Fire Phone $1"
        ],
        [
          H,
          oo
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(playbook);[-\w\),; ]+(rim)/i
      ],
      [
        $,
        H,
        [
          D,
          $e
        ]
      ],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /(?:blackberry|\(bb10;) (\w+)/i
      ],
      [
        $,
        [
          H,
          cc
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [
        $,
        [
          H,
          lc
        ],
        [
          D,
          $e
        ]
      ],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [
        $,
        [
          H,
          lc
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(nexus 9)/i
      ],
      [
        $,
        [
          H,
          "HTC"
        ],
        [
          D,
          $e
        ]
      ],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
      ],
      [
        H,
        [
          $,
          /_/g,
          " "
        ],
        [
          D,
          Se
        ]
      ],
      [
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        $,
        [
          H,
          "TCL"
        ],
        [
          D,
          $e
        ]
      ],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [
        $,
        [
          H,
          "TCL"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(itel) ((\w+))/i
      ],
      [
        [
          H,
          er
        ],
        $,
        [
          D,
          bn,
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
        $,
        [
          H,
          "Acer"
        ],
        [
          D,
          $e
        ]
      ],
      [
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [
        $,
        [
          H,
          "Meizu"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [
        $,
        [
          H,
          "Ulefone"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [
        $,
        [
          H,
          "Energizer"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [
        $,
        [
          H,
          "Cat"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [
        $,
        [
          H,
          "Smartfren"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i
      ],
      [
        $,
        [
          H,
          "Nothing"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [
        $,
        [
          H,
          "Archos"
        ],
        [
          D,
          $e
        ]
      ],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [
        $,
        [
          H,
          "Archos"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /; (n159v)/i
      ],
      [
        $,
        [
          H,
          "HMD"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(imo) (tab \w+)/i,
        /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i
      ],
      [
        H,
        $,
        [
          D,
          $e
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
        H,
        $,
        [
          D,
          Se
        ]
      ],
      [
        /(kobo)\s(ereader|touch)/i,
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        /(kindle)\/([\w\.]+)/i
      ],
      [
        H,
        $,
        [
          D,
          $e
        ]
      ],
      [
        /(surface duo)/i
      ],
      [
        $,
        [
          H,
          Ns
        ],
        [
          D,
          $e
        ]
      ],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
      ],
      [
        $,
        [
          H,
          "Fairphone"
        ],
        [
          D,
          Se
        ]
      ],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
      ],
      [
        $,
        [
          H,
          Ls
        ],
        [
          D,
          $e
        ]
      ],
      [
        /(sprint) (\w+)/i
      ],
      [
        H,
        $,
        [
          D,
          Se
        ]
      ],
      [
        /(kin\.[onetw]{3})/i
      ],
      [
        [
          $,
          /\./g,
          " "
        ],
        [
          H,
          Ns
        ],
        [
          D,
          Se
        ]
      ],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
      ],
      [
        $,
        [
          H,
          xs
        ],
        [
          D,
          $e
        ]
      ],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [
        $,
        [
          H,
          xs
        ],
        [
          D,
          Se
        ]
      ],
      [
        /(philips)[\w ]+tv/i,
        /smart-tv.+(samsung)/i
      ],
      [
        H,
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
          $,
          /^/,
          "SmartTV"
        ],
        [
          H,
          oi
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
        H,
        $,
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
          H,
          so
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
        H,
        [
          $,
          xr + " TV"
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
          $,
          qn + " Third Generation"
        ],
        [
          H,
          mr
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
          $,
          /^/,
          "Chromecast "
        ],
        [
          H,
          mr
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
          $,
          qn + " Nest Hub"
        ],
        [
          H,
          mr
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
          $,
          qn
        ],
        [
          H,
          mr
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
        $,
        [
          H,
          Fs
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
        $,
        [
          H,
          oo
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
        $,
        [
          H,
          Ls
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
        $,
        [
          H,
          dc
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
        $,
        [
          H,
          si
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
        $,
        [
          H,
          ks
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
        H,
        $,
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
          H,
          /.+\/(\w+)/,
          "$1",
          bn,
          {
            LG: "lge"
          }
        ],
        [
          $,
          Uo
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
        $,
        [
          H,
          si
        ],
        [
          D,
          gi
        ]
      ],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
      ],
      [
        $,
        [
          H,
          Ns
        ],
        [
          D,
          gi
        ]
      ],
      [
        /(ouya)/i,
        /(nintendo) (\w+)/i,
        /(retroid) (pocket ([^\)]+))/i
      ],
      [
        H,
        $,
        [
          D,
          gi
        ]
      ],
      [
        /droid.+; (shield)( bui|\))/i
      ],
      [
        $,
        [
          H,
          Ls
        ],
        [
          D,
          gi
        ]
      ],
      [
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
      ],
      [
        $,
        [
          H,
          oi
        ],
        [
          D,
          wn
        ]
      ],
      [
        /((pebble))app/i,
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
      ],
      [
        H,
        $,
        [
          D,
          wn
        ]
      ],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
      ],
      [
        $,
        [
          H,
          Cs
        ],
        [
          D,
          wn
        ]
      ],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
      ],
      [
        $,
        [
          H,
          xr
        ],
        [
          D,
          wn
        ]
      ],
      [
        /(opwwe\d{3})/i
      ],
      [
        $,
        [
          H,
          hc
        ],
        [
          D,
          wn
        ]
      ],
      [
        /(moto 360)/i
      ],
      [
        $,
        [
          H,
          Ms
        ],
        [
          D,
          wn
        ]
      ],
      [
        /(smartwatch 3)/i
      ],
      [
        $,
        [
          H,
          si
        ],
        [
          D,
          wn
        ]
      ],
      [
        /(g watch r)/i
      ],
      [
        $,
        [
          H,
          so
        ],
        [
          D,
          wn
        ]
      ],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [
        $,
        [
          H,
          xs
        ],
        [
          D,
          wn
        ]
      ],
      [
        /droid.+; (glass) \d/i
      ],
      [
        $,
        [
          H,
          mr
        ],
        [
          D,
          io
        ]
      ],
      [
        /(pico) ([\w ]+) os\d/i
      ],
      [
        H,
        $,
        [
          D,
          io
        ]
      ],
      [
        /(quest( \d| pro)?s?).+vr/i
      ],
      [
        $,
        [
          H,
          Fs
        ],
        [
          D,
          io
        ]
      ],
      [
        /mobile vr; rv.+firefox/i
      ],
      [
        [
          D,
          io
        ]
      ],
      [
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
      ],
      [
        H,
        [
          D,
          mi
        ]
      ],
      [
        /(aeobc)\b/i
      ],
      [
        $,
        [
          H,
          oo
        ],
        [
          D,
          mi
        ]
      ],
      [
        /(homepod).+mac os/i
      ],
      [
        $,
        [
          H,
          xr
        ],
        [
          D,
          mi
        ]
      ],
      [
        /windows iot/i
      ],
      [
        [
          D,
          mi
        ]
      ],
      [
        /droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i
      ],
      [
        $,
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
        $,
        [
          D,
          bn,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": $e
          }
        ]
      ],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
      ],
      [
        [
          D,
          $e
        ]
      ],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
      ],
      [
        [
          D,
          Se
        ]
      ],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
      ],
      [
        $,
        [
          H,
          "Generic"
        ]
      ]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          mo + "HTML"
        ]
      ],
      [
        /(arkweb)\/([\w\.]+)/i
      ],
      [
        z,
        q
      ],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
      ],
      [
        q,
        [
          z,
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
        z,
        q
      ],
      [
        /ladybird\//i
      ],
      [
        [
          z,
          "LibWeb"
        ]
      ],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
      ],
      [
        q,
        z
      ]
    ],
    os: [
      [
        /(windows nt) (6\.[23]); arm/i
      ],
      [
        [
          z,
          /N/,
          "R"
        ],
        [
          q,
          bn,
          wc
        ]
      ],
      [
        /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
        /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i
      ],
      [
        z,
        q
      ],
      [
        /windows nt ?([\d\.\)]*)(?!.+xbox)/i,
        /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i
      ],
      [
        [
          q,
          /(;|\))/g,
          "",
          bn,
          wc
        ],
        [
          z,
          ha
        ]
      ],
      [
        /(windows ce)\/?([\d\.]*)/i
      ],
      [
        z,
        q
      ],
      [
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        /(?:ios;fbsv|ios(?=.+ip(?:ad|hone))|ip(?:ad|hone)(?: |.+i(?:pad)?)os)[\/ ]([\w\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [
        [
          q,
          /_/g,
          "."
        ],
        [
          z,
          "iOS"
        ]
      ],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i
      ],
      [
        [
          z,
          "macOS"
        ],
        [
          q,
          /_/g,
          "."
        ]
      ],
      [
        /android ([\d\.]+).*crkey/i
      ],
      [
        q,
        [
          z,
          qn + " Android"
        ]
      ],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
      ],
      [
        q,
        [
          z,
          qn + " Fuchsia"
        ]
      ],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
      ],
      [
        q,
        [
          z,
          qn + " SmartSpeaker"
        ]
      ],
      [
        /linux.*crkey\/([\d\.]+)/i
      ],
      [
        q,
        [
          z,
          qn + " Linux"
        ]
      ],
      [
        /crkey\/([\d\.]+)/i
      ],
      [
        q,
        [
          z,
          qn
        ]
      ],
      [
        /droid ([\w\.]+)\b.+(android[- ]x86)/i
      ],
      [
        q,
        z
      ],
      [
        /(ubuntu) ([\w\.]+) like android/i
      ],
      [
        [
          z,
          /(.+)/,
          "$1 Touch"
        ],
        q
      ],
      [
        /(harmonyos)[\/ ]?([\d\.]*)/i,
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [
        z,
        q
      ],
      [
        /\(bb(10);/i
      ],
      [
        q,
        [
          z,
          cc
        ]
      ],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
      ],
      [
        q,
        [
          z,
          "Symbian"
        ]
      ],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
      ],
      [
        q,
        [
          z,
          ai + " OS"
        ]
      ],
      [
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,
        /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i
      ],
      [
        q,
        [
          z,
          "webOS"
        ]
      ],
      [
        /web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i
      ],
      [
        [
          q,
          bn,
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
          z,
          "webOS"
        ]
      ],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
      ],
      [
        q,
        [
          z,
          "watchOS"
        ]
      ],
      [
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
      ],
      [
        [
          z,
          "Chrome OS"
        ],
        q
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
        z,
        q
      ],
      [
        /(sunos) ?([\d\.]*)/i
      ],
      [
        [
          z,
          "Solaris"
        ],
        q
      ],
      [
        /\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,
        /(unix) ?([\w\.]*)/i
      ],
      [
        z,
        q
      ]
    ]
  }, ao = (function() {
    var e = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {}
    };
    return xn.call(e.init, [
      [
        Ut,
        [
          z,
          q,
          Ui,
          D
        ]
      ],
      [
        kn,
        [
          xt
        ]
      ],
      [
        In,
        [
          D,
          $,
          H
        ]
      ],
      [
        cn,
        [
          z,
          q
        ]
      ],
      [
        qt,
        [
          z,
          q
        ]
      ]
    ]), xn.call(e.isIgnore, [
      [
        Ut,
        [
          q,
          Ui
        ]
      ],
      [
        cn,
        [
          q
        ]
      ],
      [
        qt,
        [
          q
        ]
      ]
    ]), xn.call(e.isIgnoreRgx, [
      [
        Ut,
        / ?browser$/i
      ],
      [
        qt,
        / ?os$/i
      ]
    ]), xn.call(e.toString, [
      [
        Ut,
        [
          z,
          q
        ]
      ],
      [
        kn,
        [
          xt
        ]
      ],
      [
        In,
        [
          H,
          $
        ]
      ],
      [
        cn,
        [
          z,
          q
        ]
      ],
      [
        qt,
        [
          z,
          q
        ]
      ]
    ]), e;
  })(), Ib = function(e, t) {
    var n = ao.init[t], i = ao.isIgnore[t] || 0, l = ao.isIgnoreRgx[t] || 0, c = ao.toString[t] || 0;
    function f() {
      xn.call(this, n);
    }
    return f.prototype.getItem = function() {
      return e;
    }, f.prototype.withClientHints = function() {
      return Qn ? Qn.getHighEntropyValues(Cf).then(function(h) {
        return e.setCH(new kf(h, false)).parseCH().get();
      }) : e.parseCH().get();
    }, f.prototype.withFeatureCheck = function() {
      return e.detectFeature().get();
    }, t != zr && (f.prototype.is = function(h) {
      var p = false;
      for (var v in this) if (this.hasOwnProperty(v) && !da(i, v) && er(l ? Xr(l, this[v]) : this[v]) == er(l ? Xr(l, h) : h)) {
        if (p = true, h != lt.UNDEFINED) break;
      } else if (h == lt.UNDEFINED && p) {
        p = !p;
        break;
      }
      return p;
    }, f.prototype.toString = function() {
      var h = Jr;
      for (var p in c) typeof this[c[p]] !== lt.UNDEFINED && (h += (h ? " " : Jr) + this[c[p]]);
      return h || lt.UNDEFINED;
    }), Qn || (f.prototype.then = function(h) {
      var p = this, v = function() {
        for (var I in p) p.hasOwnProperty(I) && (this[I] = p[I]);
      };
      v.prototype = {
        is: f.prototype.is,
        toString: f.prototype.toString
      };
      var w = new v();
      return h(w), w;
    }), new f();
  };
  function kf(e, t) {
    if (e = e || {}, xn.call(this, Cf), t) xn.call(this, [
      [
        Ba,
        Ds(e[cr])
      ],
      [
        za,
        Ds(e[hb])
      ],
      [
        Se,
        /\?1/.test(e[mb])
      ],
      [
        $,
        ui(e[wb])
      ],
      [
        Hr,
        ui(e[Lf])
      ],
      [
        Ha,
        ui(e[yb])
      ],
      [
        xt,
        ui(e[db])
      ],
      [
        vr,
        Ds(e[gb])
      ],
      [
        as,
        ui(e[pb])
      ]
    ]);
    else for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== lt.UNDEFINED && (this[n] = e[n]);
  }
  function vc(e, t, n, i) {
    return this.get = function(l) {
      return l ? this.data.hasOwnProperty(l) ? this.data[l] : void 0 : this.data;
    }, this.set = function(l, c) {
      return this.data[l] = c, this;
    }, this.setCH = function(l) {
      return this.uaCH = l, this;
    }, this.detectFeature = function() {
      if (Gt && Gt.userAgent == this.ua) switch (this.itemType) {
        case Ut:
          Gt.brave && typeof Gt.brave.isBrave == lt.FUNCTION && this.set(z, "Brave");
          break;
        case In:
          !this.get(D) && Qn && Qn[Se] && this.set(D, Se), this.get($) == "Macintosh" && Gt && typeof Gt.standalone !== lt.UNDEFINED && Gt.maxTouchPoints && Gt.maxTouchPoints > 2 && this.set($, "iPad").set(D, $e);
          break;
        case qt:
          !this.get(z) && Qn && Qn[Hr] && this.set(z, Qn[Hr]);
          break;
        case zr:
          var l = this.data, c = function(f) {
            return l[f].getItem().detectFeature().get();
          };
          this.set(Ut, c(Ut)).set(kn, c(kn)).set(In, c(In)).set(cn, c(cn)).set(qt, c(qt));
      }
      return this;
    }, this.parseUA = function() {
      switch (this.itemType != zr && Us.call(this.data, this.ua, this.rgxMap), this.itemType) {
        case Ut:
          this.set(Ui, js(this.get(q)));
          break;
        case qt:
          if (this.get(z) == "iOS" && this.get(q) == "18.6") {
            var l = /\) Version\/([\d\.]+)/.exec(this.ua);
            l && parseInt(l[1].substring(0, 2), 10) >= 26 && this.set(q, l[1]);
          }
          break;
      }
      return this;
    }, this.parseCH = function() {
      var l = this.uaCH, c = this.rgxMap;
      switch (this.itemType) {
        case Ut:
        case cn:
          var f = l[za] || l[Ba], h;
          if (f) for (var p = 0; p < f.length; p++) {
            var v = f[p].brand || f[p], w = f[p].version;
            this.itemType == Ut && !/not.a.brand/i.test(v) && (!h || /Chrom/.test(h) && v != gc || h == mo && /WebView2/.test(v)) && (v = bn(v, Eb), h = this.get(z), h && !/Chrom/.test(h) && /Chrom/.test(v) || this.set(z, v).set(q, w).set(Ui, js(w)), h = v), this.itemType == cn && v == gc && this.set(q, w);
          }
          break;
        case kn:
          var I = l[xt];
          I && (I && l[as] == "64" && (I += "64"), Us.call(this.data, I + ";", c));
          break;
        case In:
          if (l[Se] && this.set(D, Se), l[$] && (this.set($, l[$]), !this.get(D) || !this.get(H))) {
            var P = {};
            Us.call(P, "droid 9; " + l[$] + ")", c), !this.get(D) && P.type && this.set(D, P.type), !this.get(H) && P.vendor && this.set(H, P.vendor);
          }
          if (l[vr]) {
            var R;
            if (typeof l[vr] != "string") for (var k = 0; !R && k < l[vr].length; ) R = bn(l[vr][k++], yc);
            else R = bn(l[vr], yc);
            this.set(D, R);
          }
          break;
        case qt:
          var L = l[Hr];
          if (L) {
            var B = l[Ha];
            L == ha && (B = parseInt(js(B), 10) >= 13 ? "11" : "10"), this.set(z, L).set(q, B);
          }
          this.get(z) == ha && l[$] == "Xbox" && this.set(z, "Xbox").set(q, void 0);
          break;
        case zr:
          var F = this.data, U = function(ne) {
            return F[ne].getItem().setCH(l).parseCH().get();
          };
          this.set(Ut, U(Ut)).set(kn, U(kn)).set(In, U(In)).set(cn, U(cn)).set(qt, U(qt));
      }
      return this;
    }, xn.call(this, [
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
        Ib(this, e)
      ]
    ]), this;
  }
  Gn = function(e, t, n) {
    if (typeof e === lt.OBJECT ? (jo(e, true) ? (typeof t === lt.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e === lt.STRING && !jo(t, true) && (n = t, t = void 0), n) if (typeof n.append === lt.FUNCTION) {
      var i = {};
      n.forEach(function(w, I) {
        i[String(I).toLowerCase()] = w;
      }), n = i;
    } else {
      var l = {};
      for (var c in n) n.hasOwnProperty(c) && (l[String(c).toLowerCase()] = n[c]);
      n = l;
    }
    if (!(this instanceof Gn)) return new Gn(e, t, n).getResult();
    var f = typeof e === lt.STRING ? e : n && n[sc] ? n[sc] : Gt && Gt.userAgent ? Gt.userAgent : Jr, h = new kf(n, true), p = t ? vb(bc, t) : bc, v = function(w) {
      return w == zr ? function() {
        return new vc(w, f, p, h).set("ua", f).set(Ut, this.getBrowser()).set(kn, this.getCPU()).set(In, this.getDevice()).set(cn, this.getEngine()).set(qt, this.getOS()).get();
      } : function() {
        return new vc(w, f, p[w], h).parseUA().get();
      };
    };
    return xn.call(this, [
      [
        "getBrowser",
        v(Ut)
      ],
      [
        "getCPU",
        v(kn)
      ],
      [
        "getDevice",
        v(In)
      ],
      [
        "getEngine",
        v(cn)
      ],
      [
        "getOS",
        v(qt)
      ],
      [
        "getResult",
        v(zr)
      ],
      [
        "getUA",
        function() {
          return f;
        }
      ],
      [
        "setUA",
        function(w) {
          return Vi(w) && (f = Uo(w, fb)), this;
        }
      ]
    ]).setUA(f), this;
  };
  Gn.VERSION = ub;
  Gn.BROWSER = ls([
    z,
    q,
    Ui,
    D
  ]);
  Gn.CPU = ls([
    xt
  ]);
  Gn.DEVICE = ls([
    $,
    H,
    D,
    gi,
    Se,
    ut,
    $e,
    wn,
    mi
  ]);
  Gn.ENGINE = Gn.OS = ls([
    z,
    q
  ]);
  var ot = ((e) => (e.TAURI = "tauri", e.WEB = "web", e.MOBILE_WEB = "mobile_web", e.UNKNOWN = "unknown", e))(ot || {});
  class Tb {
    constructor() {
      __publicField(this, "parser");
      this.parser = new Gn(navigator.userAgent);
    }
    detectEnvironment() {
      return this.isTauriEnvironment() ? ot.TAURI : this.parser.getDevice().type === "mobile" ? ot.MOBILE_WEB : ot.WEB;
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
        userAgent: navigator.userAgent,
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
        case ot.TAURI:
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
        case ot.MOBILE_WEB:
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
        case ot.WEB:
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
        case ot.TAURI:
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
        case ot.MOBILE_WEB:
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
        case ot.WEB:
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
        return !t.environment || !t.capabilities ? M(new yt("Invalid platform detection results")) : (console.info("[PlatformDetector] Platform detected:", {
          environment: t.environment,
          isMobile: t.isMobile,
          isTablet: t.isTablet,
          browser: t.browser,
          os: t.os
        }), G(true));
      } catch (t) {
        return M(new yt("Platform detection failed", void 0, t));
      }
    }
  }
  const Va = new Tb();
  Yv = function() {
    return Va.getPlatformContext();
  };
  function _b(e, t, n, i) {
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
  }
  function Sb(e, t, n, i, l) {
    if (typeof t == "function" ? e !== t || true : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return t.set(e, n), n;
  }
  var wo;
  function Ob(e, t = false) {
    return window.__TAURI_INTERNALS__.transformCallback(e, t);
  }
  async function gt(e, t = {}, n) {
    return window.__TAURI_INTERNALS__.invoke(e, t, n);
  }
  class Ab {
    get rid() {
      return _b(this, wo, "f");
    }
    constructor(t) {
      wo.set(this, void 0), Sb(this, wo, t);
    }
    async close() {
      return gt("plugin:resources|close", {
        rid: this.rid
      });
    }
  }
  wo = /* @__PURE__ */ new WeakMap();
  var Ec;
  (function(e) {
    e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
  })(Ec || (Ec = {}));
  async function Pb(e, t) {
    window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t), await gt("plugin:event|unlisten", {
      event: e,
      eventId: t
    });
  }
  async function Ic(e, t, n) {
    var i;
    const l = (i = void 0) !== null && i !== void 0 ? i : {
      kind: "Any"
    };
    return gt("plugin:event|listen", {
      event: e,
      target: l,
      handler: Ob(t)
    }).then((c) => async () => Pb(e, c));
  }
  async function Rb(e, t) {
    return await Go.load(e, t);
  }
  class Go extends Ab {
    constructor(t) {
      super(t);
    }
    static async load(t, n) {
      const i = await gt("plugin:store|load", {
        path: t,
        options: n
      });
      return new Go(i);
    }
    static async get(t) {
      return await gt("plugin:store|get_store", {
        path: t
      }).then((n) => n ? new Go(n) : null);
    }
    async set(t, n) {
      await gt("plugin:store|set", {
        rid: this.rid,
        key: t,
        value: n
      });
    }
    async get(t) {
      const [n, i] = await gt("plugin:store|get", {
        rid: this.rid,
        key: t
      });
      return i ? n : void 0;
    }
    async has(t) {
      return await gt("plugin:store|has", {
        rid: this.rid,
        key: t
      });
    }
    async delete(t) {
      return await gt("plugin:store|delete", {
        rid: this.rid,
        key: t
      });
    }
    async clear() {
      await gt("plugin:store|clear", {
        rid: this.rid
      });
    }
    async reset() {
      await gt("plugin:store|reset", {
        rid: this.rid
      });
    }
    async keys() {
      return await gt("plugin:store|keys", {
        rid: this.rid
      });
    }
    async values() {
      return await gt("plugin:store|values", {
        rid: this.rid
      });
    }
    async entries() {
      return await gt("plugin:store|entries", {
        rid: this.rid
      });
    }
    async length() {
      return await gt("plugin:store|length", {
        rid: this.rid
      });
    }
    async reload(t) {
      await gt("plugin:store|reload", {
        rid: this.rid,
        ...t
      });
    }
    async save() {
      await gt("plugin:store|save", {
        rid: this.rid
      });
    }
    async onKeyChange(t, n) {
      return await Ic("store://change", (i) => {
        i.payload.resourceId === this.rid && i.payload.key === t && n(i.payload.exists ? i.payload.value : void 0);
      });
    }
    async onChange(t) {
      return await Ic("store://change", (n) => {
        n.payload.resourceId === this.rid && t(n.payload.key, n.payload.exists ? n.payload.value : void 0);
      });
    }
  }
  class nt extends Nr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zr.STORAGE);
      this.code = n;
    }
  }
  var Xe = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.SET_FAILED = "SET_FAILED", e.GET_FAILED = "GET_FAILED", e.SAVE_FAILED = "SAVE_FAILED", e.EXPORT_FAILED = "EXPORT_FAILED", e.CLEAR_FAILED = "CLEAR_FAILED", e.REMOVE_FAILED = "REMOVE_FAILED", e))(Xe || {});
  class wt extends Nr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zr.GEOLOCATION);
      this.code = n;
    }
  }
  var st = ((e) => (e.INITIALIZATION_FAILED = "INITIALIZATION_FAILED", e.NOT_INITIALIZED = "NOT_INITIALIZED", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.POSITION_UNAVAILABLE = "POSITION_UNAVAILABLE", e.TIMEOUT = "TIMEOUT", e.UNSUPPORTED = "UNSUPPORTED", e.WATCH_FAILED = "WATCH_FAILED", e.CLEAR_WATCH_FAILED = "CLEAR_WATCH_FAILED", e))(st || {});
  class Dr extends Nr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zr.GENERIC);
      this.code = n;
    }
  }
  var yr = ((e) => (e.DETECTION_FAILED = "DETECTION_FAILED", e.INVALID_CONTEXT = "INVALID_CONTEXT", e.UNSUPPORTED_PLATFORM = "UNSUPPORTED_PLATFORM", e))(yr || {});
  class Nb {
    constructor(t = "user-data.json") {
      __publicField(this, "store", null);
      __publicField(this, "initialized", false);
      __publicField(this, "storePath");
      this.storePath = t;
    }
    async init() {
      if (this.initialized) return G(void 0);
      try {
        return this.store = await Rb(this.storePath, {
          autoSave: false,
          defaults: {}
        }), this.initialized = true, G(void 0);
      } catch (t) {
        return M(new nt("Failed to initialize Tauri storage", Xe.INITIALIZATION_FAILED, t));
      }
    }
    async set(t, n) {
      if (!this.store) return M(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.store.set(t, n), G(void 0);
      } catch (i) {
        return M(new nt(`Failed to set value for key: ${t}`, Xe.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.store) return M(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        const n = await this.store.get(t);
        return G(n ?? null);
      } catch (n) {
        return M(new nt(`Failed to get value for key: ${t}`, Xe.GET_FAILED, n));
      }
    }
    async save() {
      if (!this.store) return M(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.store.save(), G(void 0);
      } catch (t) {
        return M(new nt("Failed to save store", Xe.SAVE_FAILED, t));
      }
    }
    async exportToJson() {
      if (!this.store) return M(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys(), n = {};
        for (const i of t) {
          const l = await this.store.get(i);
          n[i] = l;
        }
        return G(JSON.stringify(n, null, 2));
      } catch (t) {
        return M(new nt("Failed to export data to JSON", Xe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.store) return M(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        const t = await this.store.keys();
        for (const n of t) await this.store.delete(n);
        return G(void 0);
      } catch (t) {
        return M(new nt("Failed to clear store", Xe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.store) return M(new nt("Tauri store not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.store.delete(t), G(void 0);
      } catch (n) {
        return M(new nt(`Failed to remove key: ${t}`, Xe.REMOVE_FAILED, n));
      }
    }
  }
  class Mb {
    constructor(t = "trackmaker-db", n = "user-data") {
      __publicField(this, "db", null);
      __publicField(this, "initialized", false);
      __publicField(this, "dbName");
      __publicField(this, "storeName");
      this.dbName = t, this.storeName = n;
    }
    async init() {
      if (this.initialized) return G(void 0);
      try {
        return this.db = await this.openDatabase(), this.initialized = true, G(void 0);
      } catch (t) {
        return M(new nt("Failed to initialize Web storage", Xe.INITIALIZATION_FAILED, t));
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
          n(l.target.error);
        };
      });
    }
    async set(t, n) {
      if (!this.db) return M(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (i) => new Promise((l, c) => {
          const f = i.put(kt(n), t);
          f.onsuccess = () => l(), f.onerror = () => c(new Error("Failed to set value"));
        })), G(void 0);
      } catch (i) {
        return M(new nt(`Failed to set value for key: ${t}`, Xe.SET_FAILED, i));
      }
    }
    async get(t) {
      if (!this.db) return M(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        const n = await this.executeTransaction("readonly", (i) => new Promise((l, c) => {
          const f = i.get(t);
          f.onsuccess = () => l(f.result), f.onerror = () => c(new Error("Failed to get value"));
        }));
        return G(n);
      } catch (n) {
        return M(new nt(`Failed to get value for key: ${t}`, Xe.GET_FAILED, n));
      }
    }
    async save() {
      return G(void 0);
    }
    async exportToJson() {
      if (!this.db) return M(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        const t = await this.executeTransaction("readonly", (n) => new Promise((i, l) => {
          const c = n.getAll();
          c.onsuccess = () => {
            const f = c.result.reduce((h, p, v) => (h[v] = p, h), {});
            i(f);
          }, c.onerror = () => l(new Error("Failed to export data"));
        }));
        return G(JSON.stringify(t, null, 2));
      } catch (t) {
        return M(new nt("Failed to export data to JSON", Xe.EXPORT_FAILED, t));
      }
    }
    async clear() {
      if (!this.db) return M(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (t) => new Promise((n, i) => {
          const l = t.clear();
          l.onsuccess = () => n(), l.onerror = () => i(new Error("Failed to clear store"));
        })), G(void 0);
      } catch (t) {
        return M(new nt("Failed to clear store", Xe.CLEAR_FAILED, t));
      }
    }
    async remove(t) {
      if (!this.db) return M(new nt("Database not initialized", Xe.NOT_INITIALIZED));
      try {
        return await this.executeTransaction("readwrite", (n) => new Promise((i, l) => {
          const c = n.delete(t);
          c.onsuccess = () => i(), c.onerror = () => l(new Error("Failed to remove key"));
        })), G(void 0);
      } catch (n) {
        return M(new nt(`Failed to remove key: ${t}`, Xe.REMOVE_FAILED, n));
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
  class Lb {
    constructor(t = "get_geolocation") {
      __publicField(this, "initialized", false);
      __publicField(this, "tauriHandlerName");
      __publicField(this, "watchCallbacks", /* @__PURE__ */ new Map());
      this.tauriHandlerName = t;
    }
    async init() {
      if (this.initialized) return G(void 0);
      try {
        return await this.injectTauriProvider(), this.initialized = true, G(void 0);
      } catch (t) {
        return M(new wt("Failed to initialize Tauri geolocation provider", st.INITIALIZATION_FAILED, t));
      }
    }
    async injectTauriProvider() {
      if (navigator.geolocation.injected) return;
      const t = new Cb(this.tauriHandlerName);
      navigator.geolocation.getCurrentPosition = t.getCurrentPosition.bind(t), navigator.geolocation.watchPosition = t.watchPosition.bind(t), navigator.geolocation.clearWatch = t.clearWatch.bind(t), navigator.geolocation.injected = true;
    }
    async getPermissionStatus() {
      try {
        if (!navigator.permissions) return this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return G(t.state);
      } catch (t) {
        return M(new wt("Failed to get permission status", st.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(G("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(G("denied")) : t(G("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), G("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? G("denied") : M(new wt("Failed to request permission", st.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      try {
        const t = await this.locateTauri();
        return G(this.convertToGeolocationPosition(t));
      } catch (t) {
        return M(new wt("Failed to get current position", st.POSITION_UNAVAILABLE, t));
      }
    }
    async locateTauri() {
      return await gt(this.tauriHandlerName);
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
        return this.watchCallbacks.set(n, n), G(n);
      } catch (n) {
        return M(new wt("Failed to start watching position", st.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return this.watchCallbacks.has(t) && (clearInterval(t), this.watchCallbacks.delete(t)), G(void 0);
      } catch (n) {
        return M(new wt("Failed to clear watch", st.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return false;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  class Cb {
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
      const l = (i == null ? void 0 : i.maximumAge) ?? 1e4;
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
      const t = await gt(this.tauriHandlerName), n = {
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
  class kb {
    constructor() {
      __publicField(this, "initialized", false);
    }
    async init() {
      return this.initialized ? G(void 0) : this.isSupported() ? (this.initialized = true, G(void 0)) : M(new wt("Geolocation is not supported by this browser", st.UNSUPPORTED));
    }
    async getPermissionStatus() {
      if (!navigator.permissions) return this.fallbackPermissionCheck();
      try {
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return G(t.state);
      } catch (t) {
        return M(new wt("Failed to get permission status", st.PERMISSION_DENIED, t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(G("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(G("denied")) : t(G("prompt"));
        }, {
          timeout: 5e3,
          maximumAge: 1 / 0,
          enableHighAccuracy: false
        });
      });
    }
    async requestPermission() {
      try {
        return await this.getCurrentPosition(), G("granted");
      } catch (t) {
        return this.isPositionError(t) && t.code === t.PERMISSION_DENIED ? G("denied") : M(new wt("Failed to request permission", st.PERMISSION_DENIED, t));
      }
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition((n) => {
          t(G(n));
        }, (n) => {
          let i;
          const l = n.message;
          switch (n.code) {
            case n.PERMISSION_DENIED:
              i = st.PERMISSION_DENIED;
              break;
            case n.POSITION_UNAVAILABLE:
              i = st.POSITION_UNAVAILABLE;
              break;
            case n.TIMEOUT:
              i = st.TIMEOUT;
              break;
            default:
              i = st.POSITION_UNAVAILABLE;
          }
          t(M(new wt(l, i, new Error(n.message))));
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
        if (n.isErr()) return M(n.error);
      }
      try {
        const n = navigator.geolocation.watchPosition(t, (i) => {
          console.error("Geolocation watch error:", i);
        }, {
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 1e4
        });
        return G(n);
      } catch (n) {
        return M(new wt("Failed to start watching position", st.WATCH_FAILED, n));
      }
    }
    clearWatch(t) {
      try {
        return navigator.geolocation.clearWatch(t), G(void 0);
      } catch (n) {
        return M(new wt("Failed to clear watch", st.CLEAR_WATCH_FAILED, n));
      }
    }
    isSupported() {
      return "geolocation" in navigator;
    }
    isPositionError(t) {
      return typeof t == "object" && t !== null && "code" in t && "message" in t && typeof t.code == "number";
    }
  }
  xb = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  function xf(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function i() {
        return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
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
  var Re = {};
  const Fb = Object.prototype.toString;
  function Gi(e) {
    const t = Fb.call(e);
    return t.endsWith("Array]") && !t.includes("Big");
  }
  const Db = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAnyArray: Gi
  }, Symbol.toStringTag, {
    value: "Module"
  })), jb = xf(Db);
  function Ub(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Gi(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] > f && (f = e[h]);
    return f;
  }
  function Gb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Gi(e)) throw new TypeError("input must be an array");
    if (e.length === 0) throw new TypeError("input must not be empty");
    var n = t.fromIndex, i = n === void 0 ? 0 : n, l = t.toIndex, c = l === void 0 ? e.length : l;
    if (i < 0 || i >= e.length || !Number.isInteger(i)) throw new Error("fromIndex must be a positive integer smaller than length");
    if (c <= i || c > e.length || !Number.isInteger(c)) throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");
    for (var f = e[i], h = i + 1; h < c; h++) e[h] < f && (f = e[h]);
    return f;
  }
  function Wb(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Gi(e)) {
      if (e.length === 0) throw new TypeError("input must not be empty");
    } else throw new TypeError("input must be an array");
    var n;
    if (t.output !== void 0) {
      if (!Gi(t.output)) throw new TypeError("output option must be an array if specified");
      n = t.output;
    } else n = new Array(e.length);
    var i = Gb(e), l = Ub(e);
    if (i === l) throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");
    var c = t.min, f = c === void 0 ? t.autoMinMax ? i : 0 : c, h = t.max, p = h === void 0 ? t.autoMinMax ? l : 1 : h;
    if (f >= p) throw new RangeError("min option must be smaller than max option");
    for (var v = (p - f) / (l - i), w = 0; w < e.length; w++) n[w] = (e[w] - i) * v + f;
    return n;
  }
  const $b = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Wb
  }, Symbol.toStringTag, {
    value: "Module"
  })), Bb = xf($b);
  var Tc;
  function zb() {
    var _oe_instances, e_fn, _e;
    if (Tc) return Re;
    Tc = 1, Object.defineProperty(Re, "__esModule", {
      value: true
    });
    var e = jb, t = Bb;
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
      const { rows: u, columns: g } = d, m = Math.min(u, o), y = Math.min(g, s), b = [];
      if (a === "auto") {
        a = false;
        e: for (let A = 0; A < m; A++) for (let E = 0; E < y; E++) if (d.get(A, E) < 0) {
          a = true;
          break e;
        }
      }
      for (let A = 0; A < m; A++) {
        let E = [];
        for (let C = 0; C < y; C++) E.push(h(d.get(A, C), r, a));
        b.push(`${E.join(" ")}`);
      }
      return y !== g && (b[b.length - 1] += ` ... ${g - s} more columns`), m !== u && b.push(`... ${u - o} more rows`), b.join(`
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
    function w(d, o, s) {
      let r = s ? d.rows : d.rows - 1;
      if (o < 0 || o > r) throw new RangeError("Row index out of range");
    }
    function I(d, o, s) {
      let r = s ? d.columns : d.columns - 1;
      if (o < 0 || o > r) throw new RangeError("Column index out of range");
    }
    function P(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.columns) throw new RangeError("vector size must be the same as the number of columns");
      return o;
    }
    function R(d, o) {
      if (o.to1DArray && (o = o.to1DArray()), o.length !== d.rows) throw new RangeError("vector size must be the same as the number of rows");
      return o;
    }
    function k(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("row indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.rows) throw new RangeError("row indices are out of range");
    }
    function L(d, o) {
      if (!e.isAnyArray(o)) throw new TypeError("column indices must be an array");
      for (let s = 0; s < o.length; s++) if (o[s] < 0 || o[s] >= d.columns) throw new RangeError("column indices are out of range");
    }
    function B(d, o, s, r, a) {
      if (arguments.length !== 5) throw new RangeError("expected 4 arguments");
      if (U("startRow", o), U("endRow", s), U("startColumn", r), U("endColumn", a), o > s || r > a || o < 0 || o >= d.rows || s < 0 || s >= d.rows || r < 0 || r >= d.columns || a < 0 || a >= d.columns) throw new RangeError("Submatrix indices are out of range");
    }
    function F(d, o = 0) {
      let s = [];
      for (let r = 0; r < d; r++) s.push(o);
      return s;
    }
    function U(d, o) {
      if (typeof o != "number") throw new TypeError(`${d} must be a number`);
    }
    function ne(d) {
      if (d.isEmpty()) throw new Error("Empty matrix has no elements to index");
    }
    function W(d) {
      let o = F(d.rows);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[s] += d.get(s, r);
      return o;
    }
    function ue(d) {
      let o = F(d.columns);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[r] += d.get(s, r);
      return o;
    }
    function Oe(d) {
      let o = 0;
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) o += d.get(s, r);
      return o;
    }
    function Ae(d) {
      let o = F(d.rows, 1);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[s] *= d.get(s, r);
      return o;
    }
    function me(d) {
      let o = F(d.columns, 1);
      for (let s = 0; s < d.rows; ++s) for (let r = 0; r < d.columns; ++r) o[r] *= d.get(s, r);
      return o;
    }
    function ie(d) {
      let o = 1;
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) o *= d.get(s, r);
      return o;
    }
    function we(d, o, s) {
      const r = d.rows, a = d.columns, u = [];
      for (let g = 0; g < r; g++) {
        let m = 0, y = 0, b = 0;
        for (let A = 0; A < a; A++) b = d.get(g, A) - s[g], m += b, y += b * b;
        o ? u.push((y - m * m / a) / (a - 1)) : u.push((y - m * m / a) / a);
      }
      return u;
    }
    function Pe(d, o, s) {
      const r = d.rows, a = d.columns, u = [];
      for (let g = 0; g < a; g++) {
        let m = 0, y = 0, b = 0;
        for (let A = 0; A < r; A++) b = d.get(A, g) - s[g], m += b, y += b * b;
        o ? u.push((y - m * m / r) / (r - 1)) : u.push((y - m * m / r) / r);
      }
      return u;
    }
    function fe(d, o, s) {
      const r = d.rows, a = d.columns, u = r * a;
      let g = 0, m = 0, y = 0;
      for (let b = 0; b < r; b++) for (let A = 0; A < a; A++) y = d.get(b, A) - s, g += y, m += y * y;
      return o ? (m - g * g / u) / (u - 1) : (m - g * g / u) / u;
    }
    function je(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[s]);
    }
    function ct(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o[r]);
    }
    function $t(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) - o);
    }
    function He(d) {
      const o = [];
      for (let s = 0; s < d.rows; s++) {
        let r = 0;
        for (let a = 0; a < d.columns; a++) r += d.get(s, a) ** 2 / (d.columns - 1);
        o.push(Math.sqrt(r));
      }
      return o;
    }
    function Ne(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) / o[s]);
    }
    function We(d) {
      const o = [];
      for (let s = 0; s < d.columns; s++) {
        let r = 0;
        for (let a = 0; a < d.rows; a++) r += d.get(a, s) ** 2 / (d.rows - 1);
        o.push(Math.sqrt(r));
      }
      return o;
    }
    function Sn(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) / o[r]);
    }
    function Mr(d) {
      const o = d.size - 1;
      let s = 0;
      for (let r = 0; r < d.columns; r++) for (let a = 0; a < d.rows; a++) s += d.get(a, r) ** 2 / o;
      return Math.sqrt(s);
    }
    function On(d, o) {
      for (let s = 0; s < d.rows; s++) for (let r = 0; r < d.columns; r++) d.set(s, r, d.get(s, r) / o);
    }
    class ye {
      static from1DArray(o, s, r) {
        if (o * s !== r.length) throw new RangeError("data length does not match given dimensions");
        let u = new oe(o, s);
        for (let g = 0; g < o; g++) for (let m = 0; m < s; m++) u.set(g, m, r[g * s + m]);
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
        for (let g = 0; g < o; g++) for (let m = 0; m < s; m++) u.set(g, m, a());
        return u;
      }
      static randInt(o, s, r = {}) {
        if (typeof r != "object") throw new TypeError("options must be an object");
        const { min: a = 0, max: u = 1e3, random: g = Math.random } = r;
        if (!Number.isInteger(a)) throw new TypeError("min must be an integer");
        if (!Number.isInteger(u)) throw new TypeError("max must be an integer");
        if (a >= u) throw new RangeError("min must be smaller than max");
        let m = u - a, y = new oe(o, s);
        for (let b = 0; b < o; b++) for (let A = 0; A < s; A++) {
          let E = a + Math.round(g() * m);
          y.set(b, A, E);
        }
        return y;
      }
      static eye(o, s, r) {
        s === void 0 && (s = o), r === void 0 && (r = 1);
        let a = Math.min(o, s), u = this.zeros(o, s);
        for (let g = 0; g < a; g++) u.set(g, g, r);
        return u;
      }
      static diag(o, s, r) {
        let a = o.length;
        s === void 0 && (s = a), r === void 0 && (r = s);
        let u = Math.min(a, s, r), g = this.zeros(s, r);
        for (let m = 0; m < u; m++) g.set(m, m, o[m]);
        return g;
      }
      static min(o, s) {
        o = this.checkMatrix(o), s = this.checkMatrix(s);
        let r = o.rows, a = o.columns, u = new oe(r, a);
        for (let g = 0; g < r; g++) for (let m = 0; m < a; m++) u.set(g, m, Math.min(o.get(g, m), s.get(g, m)));
        return u;
      }
      static max(o, s) {
        o = this.checkMatrix(o), s = this.checkMatrix(s);
        let r = o.rows, a = o.columns, u = new this(r, a);
        for (let g = 0; g < r; g++) for (let m = 0; m < a; m++) u.set(g, m, Math.max(o.get(g, m), s.get(g, m)));
        return u;
      }
      static checkMatrix(o) {
        return ye.isMatrix(o) ? o : new oe(o);
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
          for (let g = s + 1; g < this.rows; g++) this.get(o, g) !== 0 && (a = false);
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
            for (let g = r; g < o.columns; g++) o.set(s, g, o.get(s, g) / u);
            for (let g = s + 1; g < o.rows; g++) {
              let m = o.get(g, r) / o.get(s, r);
              o.set(g, r, 0);
              for (let y = r + 1; y < o.columns; y++) o.set(g, y, o.get(g, y) - o.get(s, y) * m);
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
          let u = 0, g = false;
          for (; u < r && g === false; ) o.get(a, u) === 1 ? g = true : u++;
          for (let m = 0; m < a; m++) {
            let y = o.get(m, u);
            for (let b = u; b < s; b++) {
              let A = o.get(m, b) - y * o.get(a, b);
              o.set(m, b, A);
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
        for (let u = 0; u < s; u++) for (let g = 0; g < r; g++) a.setSubMatrix(this, this.rows * u, this.columns * g);
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
        w(this, o);
        let s = [];
        for (let r = 0; r < this.columns; r++) s.push(this.get(o, r));
        return s;
      }
      getRowVector(o) {
        return oe.rowVector(this.getRow(o));
      }
      setRow(o, s) {
        w(this, o), s = P(this, s);
        for (let r = 0; r < this.columns; r++) this.set(o, r, s[r]);
        return this;
      }
      swapRows(o, s) {
        w(this, o), w(this, s);
        for (let r = 0; r < this.columns; r++) {
          let a = this.get(o, r);
          this.set(o, r, this.get(s, r)), this.set(s, r, a);
        }
        return this;
      }
      getColumn(o) {
        I(this, o);
        let s = [];
        for (let r = 0; r < this.rows; r++) s.push(this.get(r, o));
        return s;
      }
      getColumnVector(o) {
        return oe.columnVector(this.getColumn(o));
      }
      setColumn(o, s) {
        I(this, o), s = R(this, s);
        for (let r = 0; r < this.rows; r++) this.set(r, o, s[r]);
        return this;
      }
      swapColumns(o, s) {
        I(this, o), I(this, s);
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
        o = R(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) + o[s]);
        return this;
      }
      subColumnVector(o) {
        o = R(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) - o[s]);
        return this;
      }
      mulColumnVector(o) {
        o = R(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) * o[s]);
        return this;
      }
      divColumnVector(o) {
        o = R(this, o);
        for (let s = 0; s < this.rows; s++) for (let r = 0; r < this.columns; r++) this.set(s, r, this.get(s, r) / o[s]);
        return this;
      }
      mulRow(o, s) {
        w(this, o);
        for (let r = 0; r < this.columns; r++) this.set(o, r, this.get(o, r) * s);
        return this;
      }
      mulColumn(o, s) {
        I(this, o);
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
        ne(this);
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
        ne(this);
        let o = this.get(0, 0), s = [
          0,
          0
        ];
        for (let r = 0; r < this.rows; r++) for (let a = 0; a < this.columns; a++) this.get(r, a) < o && (o = this.get(r, a), s[0] = r, s[1] = a);
        return s;
      }
      maxRow(o) {
        if (w(this, o), this.isEmpty()) return NaN;
        let s = this.get(o, 0);
        for (let r = 1; r < this.columns; r++) this.get(o, r) > s && (s = this.get(o, r));
        return s;
      }
      maxRowIndex(o) {
        w(this, o), ne(this);
        let s = this.get(o, 0), r = [
          o,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(o, a) > s && (s = this.get(o, a), r[1] = a);
        return r;
      }
      minRow(o) {
        if (w(this, o), this.isEmpty()) return NaN;
        let s = this.get(o, 0);
        for (let r = 1; r < this.columns; r++) this.get(o, r) < s && (s = this.get(o, r));
        return s;
      }
      minRowIndex(o) {
        w(this, o), ne(this);
        let s = this.get(o, 0), r = [
          o,
          0
        ];
        for (let a = 1; a < this.columns; a++) this.get(o, a) < s && (s = this.get(o, a), r[1] = a);
        return r;
      }
      maxColumn(o) {
        if (I(this, o), this.isEmpty()) return NaN;
        let s = this.get(0, o);
        for (let r = 1; r < this.rows; r++) this.get(r, o) > s && (s = this.get(r, o));
        return s;
      }
      maxColumnIndex(o) {
        I(this, o), ne(this);
        let s = this.get(0, o), r = [
          0,
          o
        ];
        for (let a = 1; a < this.rows; a++) this.get(a, o) > s && (s = this.get(a, o), r[0] = a);
        return r;
      }
      minColumn(o) {
        if (I(this, o), this.isEmpty()) return NaN;
        let s = this.get(0, o);
        for (let r = 1; r < this.rows; r++) this.get(r, o) < s && (s = this.get(r, o));
        return s;
      }
      minColumnIndex(o) {
        I(this, o), ne(this);
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
        ye.isMatrix(o) && (o = o.to1DArray());
        let s = this.to1DArray();
        if (s.length !== o.length) throw new RangeError("vectors do not have the same size");
        let r = 0;
        for (let a = 0; a < s.length; a++) r += s[a] * o[a];
        return r;
      }
      mmul(o) {
        o = oe.checkMatrix(o);
        let s = this.rows, r = this.columns, a = o.columns, u = new oe(s, a), g = new Float64Array(r);
        for (let m = 0; m < a; m++) {
          for (let y = 0; y < r; y++) g[y] = o.get(y, m);
          for (let y = 0; y < s; y++) {
            let b = 0;
            for (let A = 0; A < r; A++) b += this.get(y, A) * g[A];
            u.set(y, m, b);
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
        const r = this.get(0, 0), a = o.get(0, 0), u = this.get(0, 1), g = o.get(0, 1), m = this.get(1, 0), y = o.get(1, 0), b = this.get(1, 1), A = o.get(1, 1), E = (r + b) * (a + A), C = (m + b) * a, te = r * (g - A), N = b * (y - a), j = (r + u) * A, le = (m - r) * (a + g), _ = (u - b) * (y + A), ee = E + N - j + _, he = te + j, Ie = C + N, _e2 = E - C + te + le;
        return s.set(0, 0, ee), s.set(0, 1, he), s.set(1, 0, Ie), s.set(1, 1, _e2), s;
      }
      strassen3x3(o) {
        o = oe.checkMatrix(o);
        let s = new oe(3, 3);
        const r = this.get(0, 0), a = this.get(0, 1), u = this.get(0, 2), g = this.get(1, 0), m = this.get(1, 1), y = this.get(1, 2), b = this.get(2, 0), A = this.get(2, 1), E = this.get(2, 2), C = o.get(0, 0), te = o.get(0, 1), N = o.get(0, 2), j = o.get(1, 0), le = o.get(1, 1), _ = o.get(1, 2), ee = o.get(2, 0), he = o.get(2, 1), Ie = o.get(2, 2), _e2 = (r + a + u - g - m - A - E) * le, Ze = (r - g) * (-te + le), ge = m * (-C + te + j - le - _ - ee + Ie), be = (-r + g + m) * (C - te + le), Be = (g + m) * (-C + te), S = r * C, V = (-r + b + A) * (C - N + _), ce = (-r + b) * (N - _), Z = (b + A) * (-C + N), Qe = (r + a + u - m - y - b - A) * _, Ge = A * (-C + N + j - le - _ - ee + he), Ke = (-u + A + E) * (le + ee - he), et = (u - E) * (le - he), bt = u * ee, on = (A + E) * (-ee + he), dt = (-u + m + y) * (_ + ee - Ie), dn = (u - y) * (_ - Ie), Pn = (m + y) * (-ee + Ie), Ce = a * j, vt = y * he, zt = g * N, Ht = b * te, pt = E * Ie, Yf = S + bt + Ce, Kf = _e2 + be + Be + S + Ke + bt + on, Jf = S + V + Z + Qe + bt + dt + Pn, Xf = Ze + ge + be + S + bt + dt + dn, Zf = Ze + be + Be + S + vt, Qf = bt + dt + dn + Pn + zt, eh = S + V + ce + Ge + Ke + et + bt, th = Ke + et + bt + on + Ht, nh = S + V + ce + Z + pt;
        return s.set(0, 0, Yf), s.set(0, 1, Kf), s.set(0, 2, Jf), s.set(1, 0, Xf), s.set(1, 1, Zf), s.set(1, 2, Qf), s.set(2, 0, eh), s.set(2, 1, th), s.set(2, 2, nh), s;
      }
      mmulStrassen(o) {
        o = oe.checkMatrix(o);
        let s = this.clone(), r = s.rows, a = s.columns, u = o.rows, g = o.columns;
        a !== u && console.warn(`Multiplying ${r} x ${a} and ${u} x ${g} matrix: dimensions do not match.`);
        function m(E, C, te) {
          let N = E.rows, j = E.columns;
          if (N === C && j === te) return E;
          {
            let le = ye.zeros(C, te);
            return le = le.setSubMatrix(E, 0, 0), le;
          }
        }
        let y = Math.max(r, u), b = Math.max(a, g);
        s = m(s, y, b), o = m(o, y, b);
        function A(E, C, te, N) {
          if (te <= 512 || N <= 512) return E.mmul(C);
          te % 2 === 1 && N % 2 === 1 ? (E = m(E, te + 1, N + 1), C = m(C, te + 1, N + 1)) : te % 2 === 1 ? (E = m(E, te + 1, N), C = m(C, te + 1, N)) : N % 2 === 1 && (E = m(E, te, N + 1), C = m(C, te, N + 1));
          let j = parseInt(E.rows / 2, 10), le = parseInt(E.columns / 2, 10), _ = E.subMatrix(0, j - 1, 0, le - 1), ee = C.subMatrix(0, j - 1, 0, le - 1), he = E.subMatrix(0, j - 1, le, E.columns - 1), Ie = C.subMatrix(0, j - 1, le, C.columns - 1), _e2 = E.subMatrix(j, E.rows - 1, 0, le - 1), Ze = C.subMatrix(j, C.rows - 1, 0, le - 1), ge = E.subMatrix(j, E.rows - 1, le, E.columns - 1), be = C.subMatrix(j, C.rows - 1, le, C.columns - 1), Be = A(ye.add(_, ge), ye.add(ee, be), j, le), S = A(ye.add(_e2, ge), ee, j, le), V = A(_, ye.sub(Ie, be), j, le), ce = A(ge, ye.sub(Ze, ee), j, le), Z = A(ye.add(_, he), be, j, le), Qe = A(ye.sub(_e2, _), ye.add(ee, Ie), j, le), Ge = A(ye.sub(he, ge), ye.add(Ze, be), j, le), Ke = ye.add(Be, ce);
          Ke.sub(Z), Ke.add(Ge);
          let et = ye.add(V, Z), bt = ye.add(S, ce), on = ye.sub(Be, S);
          on.add(V), on.add(Qe);
          let dt = ye.zeros(2 * Ke.rows, 2 * Ke.columns);
          return dt = dt.setSubMatrix(Ke, 0, 0), dt = dt.setSubMatrix(et, Ke.rows, 0), dt = dt.setSubMatrix(bt, 0, Ke.columns), dt = dt.setSubMatrix(on, Ke.rows, Ke.columns), dt.subMatrix(0, te - 1, 0, N - 1);
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
          const g = this.getRow(u);
          g.length > 0 && t(g, {
            min: s,
            max: r,
            output: g
          }), a.setRow(u, g);
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
          const g = this.getColumn(u);
          g.length && t(g, {
            min: s,
            max: r,
            output: g
          }), a.setColumn(u, g);
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
        let s = this.rows, r = this.columns, a = o.rows, u = o.columns, g = new oe(s * a, r * u);
        for (let m = 0; m < s; m++) for (let y = 0; y < r; y++) for (let b = 0; b < a; b++) for (let A = 0; A < u; A++) g.set(a * m + b, u * y + A, this.get(m, y) * o.get(b, A));
        return g;
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
      sortRows(o = Qr) {
        for (let s = 0; s < this.rows; s++) this.setRow(s, this.getRow(s).sort(o));
        return this;
      }
      sortColumns(o = Qr) {
        for (let s = 0; s < this.columns; s++) this.setColumn(s, this.getColumn(s).sort(o));
        return this;
      }
      subMatrix(o, s, r, a) {
        B(this, o, s, r, a);
        let u = new oe(s - o + 1, a - r + 1);
        for (let g = o; g <= s; g++) for (let m = r; m <= a; m++) u.set(g - o, m - r, this.get(g, m));
        return u;
      }
      subMatrixRow(o, s, r) {
        if (s === void 0 && (s = 0), r === void 0 && (r = this.columns - 1), s > r || s < 0 || s >= this.columns || r < 0 || r >= this.columns) throw new RangeError("Argument out of range");
        let a = new oe(o.length, r - s + 1);
        for (let u = 0; u < o.length; u++) for (let g = s; g <= r; g++) {
          if (o[u] < 0 || o[u] >= this.rows) throw new RangeError(`Row index out of range: ${o[u]}`);
          a.set(u, g - s, this.get(o[u], g));
        }
        return a;
      }
      subMatrixColumn(o, s, r) {
        if (s === void 0 && (s = 0), r === void 0 && (r = this.rows - 1), s > r || s < 0 || s >= this.rows || r < 0 || r >= this.rows) throw new RangeError("Argument out of range");
        let a = new oe(r - s + 1, o.length);
        for (let u = 0; u < o.length; u++) for (let g = s; g <= r; g++) {
          if (o[u] < 0 || o[u] >= this.columns) throw new RangeError(`Column index out of range: ${o[u]}`);
          a.set(g - s, u, this.get(g, o[u]));
        }
        return a;
      }
      setSubMatrix(o, s, r) {
        if (o = oe.checkMatrix(o), o.isEmpty()) return this;
        let a = s + o.rows - 1, u = r + o.columns - 1;
        B(this, s, a, r, u);
        for (let g = 0; g < o.rows; g++) for (let m = 0; m < o.columns; m++) this.set(s + g, r + m, o.get(g, m));
        return this;
      }
      selection(o, s) {
        k(this, o), L(this, s);
        let r = new oe(o.length, s.length);
        for (let a = 0; a < o.length; a++) {
          let u = o[a];
          for (let g = 0; g < s.length; g++) {
            let m = s[g];
            r.set(a, g, this.get(u, m));
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
            return W(this);
          case "column":
            return ue(this);
          case void 0:
            return Oe(this);
          default:
            throw new Error(`invalid option: ${o}`);
        }
      }
      product(o) {
        switch (o) {
          case "row":
            return Ae(this);
          case "column":
            return me(this);
          case void 0:
            return ie(this);
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
            return we(this, r, a);
          }
          case "column": {
            if (!e.isAnyArray(a)) throw new TypeError("mean must be an array");
            return Pe(this, r, a);
          }
          case void 0: {
            if (typeof a != "number") throw new TypeError("mean must be a number");
            return fe(this, r, a);
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
            return je(this, r), this;
          }
          case "column": {
            if (!e.isAnyArray(r)) throw new TypeError("center must be an array");
            return ct(this, r), this;
          }
          case void 0: {
            if (typeof r != "number") throw new TypeError("center must be a number");
            return $t(this, r), this;
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
            if (r === void 0) r = He(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Ne(this, r), this;
          }
          case "column": {
            if (r === void 0) r = We(this);
            else if (!e.isAnyArray(r)) throw new TypeError("scale must be an array");
            return Sn(this, r), this;
          }
          case void 0: {
            if (r === void 0) r = Mr(this);
            else if (typeof r != "number") throw new TypeError("scale must be a number");
            return On(this, r), this;
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
    ye.prototype.klass = "Matrix", typeof Symbol < "u" && (ye.prototype[Symbol.for("nodejs.util.inspect.custom")] = l);
    function Qr(d, o) {
      return d - o;
    }
    function fs(d) {
      return d.every((o) => typeof o == "number");
    }
    ye.random = ye.rand, ye.randomInt = ye.randInt, ye.diagonal = ye.diag, ye.prototype.diagonal = ye.prototype.diag, ye.identity = ye.eye, ye.prototype.negate = ye.prototype.neg, ye.prototype.tensorProduct = ye.prototype.kroneckerProduct;
    const _oe = class _oe extends ye {
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
            if (!fs(r[a])) throw new TypeError("Input data contains non-numeric values");
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
        return w(this, o), this.data.splice(o, 1), this.rows -= 1, this;
      }
      addRow(o, s) {
        return s === void 0 && (s = o, o = this.rows), w(this, o, true), s = Float64Array.from(P(this, s)), this.data.splice(o, 0, s), this.rows += 1, this;
      }
      removeColumn(o) {
        I(this, o);
        for (let s = 0; s < this.rows; s++) {
          const r = new Float64Array(this.columns - 1);
          for (let a = 0; a < o; a++) r[a] = this.data[s][a];
          for (let a = o + 1; a < this.columns; a++) r[a - 1] = this.data[s][a];
          this.data[s] = r;
        }
        return this.columns -= 1, this;
      }
      addColumn(o, s) {
        typeof s > "u" && (s = o, o = this.columns), I(this, o, true), s = R(this, s);
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
    v(ye, oe);
    const _Dt = class _Dt extends ye {
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
        for (let u = 0, g = 0, m = 0; m < s; m++) a.set(u, g, o[m]), ++u >= r && (u = ++g);
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
    class An extends Dt {
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
        const o = new An(this.diagonalSize);
        for (const [s, r, a] of this.upperRightEntries()) s !== r && o.set(s, r, a);
        return o;
      }
      toCompact() {
        const { diagonalSize: o } = this, s = (o - 1) * o / 2, r = new Array(s);
        for (let a = 1, u = 0, g = 0; g < r.length; g++) r[g] = this.get(u, a), ++a >= o && (a = ++u + 1);
        return r;
      }
      static fromCompact(o) {
        const s = o.length;
        if (s === 0) return new this(0);
        const r = (Math.sqrt(8 * s + 1) + 1) / 2;
        if (!Number.isInteger(r)) throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(o)}`);
        const a = new this(r);
        for (let u = 1, g = 0, m = 0; m < s; m++) a.set(u, g, o[m]), ++u >= r && (u = ++g + 1);
        return a;
      }
    }
    An.prototype.klassSubType = "DistanceMatrix";
    class Bt extends ye {
      constructor(o, s, r) {
        super(), this.matrix = o, this.rows = s, this.columns = r;
      }
    }
    class qi extends Bt {
      constructor(o, s) {
        I(o, s), super(o, o.rows, 1), this.column = s;
      }
      set(o, s, r) {
        return this.matrix.set(o, this.column, r), this;
      }
      get(o) {
        return this.matrix.get(o, this.column);
      }
    }
    class ur extends Bt {
      constructor(o, s) {
        L(o, s), super(o, o.rows, s.length), this.columnIndices = s;
      }
      set(o, s, r) {
        return this.matrix.set(o, this.columnIndices[s], r), this;
      }
      get(o, s) {
        return this.matrix.get(o, this.columnIndices[s]);
      }
    }
    class Ya extends Bt {
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
    class T extends Bt {
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
    class O extends Bt {
      constructor(o, s) {
        w(o, s), super(o, 1, o.columns), this.row = s;
      }
      set(o, s, r) {
        return this.matrix.set(this.row, s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.row, s);
      }
    }
    class x extends Bt {
      constructor(o, s) {
        k(o, s), super(o, s.length, o.columns), this.rowIndices = s;
      }
      set(o, s, r) {
        return this.matrix.set(this.rowIndices[o], s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.rowIndices[o], s);
      }
    }
    class X extends Bt {
      constructor(o, s, r) {
        k(o, s), L(o, r), super(o, s.length, r.length), this.rowIndices = s, this.columnIndices = r;
      }
      set(o, s, r) {
        return this.matrix.set(this.rowIndices[o], this.columnIndices[s], r), this;
      }
      get(o, s) {
        return this.matrix.get(this.rowIndices[o], this.columnIndices[s]);
      }
    }
    class K extends Bt {
      constructor(o, s, r, a, u) {
        B(o, s, r, a, u), super(o, r - s + 1, u - a + 1), this.startRow = s, this.startColumn = a;
      }
      set(o, s, r) {
        return this.matrix.set(this.startRow + o, this.startColumn + s, r), this;
      }
      get(o, s) {
        return this.matrix.get(this.startRow + o, this.startColumn + s);
      }
    }
    class J extends Bt {
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
    class se extends ye {
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
    class Q extends ye {
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
    function re(d, o) {
      if (e.isAnyArray(d)) return d[0] && e.isAnyArray(d[0]) ? new Q(d) : new se(d, o);
      throw new Error("the argument is not an array");
    }
    class Y {
      constructor(o) {
        o = Q.checkMatrix(o);
        let s = o.clone(), r = s.rows, a = s.columns, u = new Float64Array(r), g = 1, m, y, b, A, E, C, te, N, j;
        for (m = 0; m < r; m++) u[m] = m;
        for (N = new Float64Array(r), y = 0; y < a; y++) {
          for (m = 0; m < r; m++) N[m] = s.get(m, y);
          for (m = 0; m < r; m++) {
            for (j = Math.min(m, y), E = 0, b = 0; b < j; b++) E += s.get(m, b) * N[b];
            N[m] -= E, s.set(m, y, N[m]);
          }
          for (A = y, m = y + 1; m < r; m++) Math.abs(N[m]) > Math.abs(N[A]) && (A = m);
          if (A !== y) {
            for (b = 0; b < a; b++) C = s.get(A, b), s.set(A, b, s.get(y, b)), s.set(y, b, C);
            te = u[A], u[A] = u[y], u[y] = te, g = -g;
          }
          if (y < r && s.get(y, y) !== 0) for (m = y + 1; m < r; m++) s.set(m, y, s.get(m, y) / s.get(y, y));
        }
        this.LU = s, this.pivotVector = u, this.pivotSign = g;
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
        let a = o.columns, u = o.subMatrixRow(this.pivotVector, 0, a - 1), g = s.columns, m, y, b;
        for (b = 0; b < g; b++) for (m = b + 1; m < g; m++) for (y = 0; y < a; y++) u.set(m, y, u.get(m, y) - u.get(b, y) * s.get(m, b));
        for (b = g - 1; b >= 0; b--) {
          for (y = 0; y < a; y++) u.set(b, y, u.get(b, y) / s.get(b, b));
          for (m = 0; m < b; m++) for (y = 0; y < a; y++) u.set(m, y, u.get(m, y) - u.get(b, y) * s.get(m, b));
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
        for (let u = 0; u < s; u++) for (let g = 0; g < r; g++) u > g ? a.set(u, g, o.get(u, g)) : u === g ? a.set(u, g, 1) : a.set(u, g, 0);
        return a;
      }
      get upperTriangularMatrix() {
        let o = this.LU, s = o.rows, r = o.columns, a = new oe(s, r);
        for (let u = 0; u < s; u++) for (let g = 0; g < r; g++) u <= g ? a.set(u, g, o.get(u, g)) : a.set(u, g, 0);
        return a;
      }
      get pivotPermutationVector() {
        return Array.from(this.pivotVector);
      }
    }
    function de(d, o) {
      let s = 0;
      return Math.abs(d) > Math.abs(o) ? (s = o / d, Math.abs(d) * Math.sqrt(1 + s * s)) : o !== 0 ? (s = d / o, Math.abs(o) * Math.sqrt(1 + s * s)) : 0;
    }
    class ae {
      constructor(o) {
        o = Q.checkMatrix(o);
        let s = o.clone(), r = o.rows, a = o.columns, u = new Float64Array(a), g, m, y, b;
        for (y = 0; y < a; y++) {
          let A = 0;
          for (g = y; g < r; g++) A = de(A, s.get(g, y));
          if (A !== 0) {
            for (s.get(y, y) < 0 && (A = -A), g = y; g < r; g++) s.set(g, y, s.get(g, y) / A);
            for (s.set(y, y, s.get(y, y) + 1), m = y + 1; m < a; m++) {
              for (b = 0, g = y; g < r; g++) b += s.get(g, y) * s.get(g, m);
              for (b = -b / s.get(y, y), g = y; g < r; g++) s.set(g, m, s.get(g, m) + b * s.get(g, y));
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
        let a = o.columns, u = o.clone(), g = s.columns, m, y, b, A;
        for (b = 0; b < g; b++) for (y = 0; y < a; y++) {
          for (A = 0, m = b; m < r; m++) A += s.get(m, b) * u.get(m, y);
          for (A = -A / s.get(b, b), m = b; m < r; m++) u.set(m, y, u.get(m, y) + A * s.get(m, b));
        }
        for (b = g - 1; b >= 0; b--) {
          for (y = 0; y < a; y++) u.set(b, y, u.get(b, y) / this.Rdiag[b]);
          for (m = 0; m < b; m++) for (y = 0; y < a; y++) u.set(m, y, u.get(m, y) - u.get(b, y) * s.get(m, b));
        }
        return u.subMatrix(0, g - 1, 0, a - 1);
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
        let o = this.QR, s = o.rows, r = o.columns, a = new oe(s, r), u, g, m, y;
        for (m = r - 1; m >= 0; m--) {
          for (u = 0; u < s; u++) a.set(u, m, 0);
          for (a.set(m, m, 1), g = m; g < r; g++) if (o.get(m, m) !== 0) {
            for (y = 0, u = m; u < s; u++) y += o.get(u, m) * a.get(u, g);
            for (y = -y / o.get(m, m), u = m; u < s; u++) a.set(u, g, a.get(u, g) + y * o.get(u, m));
          }
        }
        return a;
      }
    }
    class pe {
      constructor(o, s = {}) {
        if (o = Q.checkMatrix(o), o.isEmpty()) throw new Error("Matrix must be non-empty");
        let r = o.rows, a = o.columns;
        const { computeLeftSingularVectors: u = true, computeRightSingularVectors: g = true, autoTranspose: m = false } = s;
        let y = !!u, b = !!g, A = false, E;
        if (r < a) if (!m) E = o.clone(), console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
        else {
          E = o.transpose(), r = E.rows, a = E.columns, A = true;
          let S = y;
          y = b, b = S;
        }
        else E = o.clone();
        let C = Math.min(r, a), te = Math.min(r + 1, a), N = new Float64Array(te), j = new oe(r, C), le = new oe(a, a), _ = new Float64Array(a), ee = new Float64Array(r), he = new Float64Array(te);
        for (let S = 0; S < te; S++) he[S] = S;
        let Ie = Math.min(r - 1, a), _e2 = Math.max(0, Math.min(a - 2, r)), Ze = Math.max(Ie, _e2);
        for (let S = 0; S < Ze; S++) {
          if (S < Ie) {
            N[S] = 0;
            for (let V = S; V < r; V++) N[S] = de(N[S], E.get(V, S));
            if (N[S] !== 0) {
              E.get(S, S) < 0 && (N[S] = -N[S]);
              for (let V = S; V < r; V++) E.set(V, S, E.get(V, S) / N[S]);
              E.set(S, S, E.get(S, S) + 1);
            }
            N[S] = -N[S];
          }
          for (let V = S + 1; V < a; V++) {
            if (S < Ie && N[S] !== 0) {
              let ce = 0;
              for (let Z = S; Z < r; Z++) ce += E.get(Z, S) * E.get(Z, V);
              ce = -ce / E.get(S, S);
              for (let Z = S; Z < r; Z++) E.set(Z, V, E.get(Z, V) + ce * E.get(Z, S));
            }
            _[V] = E.get(S, V);
          }
          if (y && S < Ie) for (let V = S; V < r; V++) j.set(V, S, E.get(V, S));
          if (S < _e2) {
            _[S] = 0;
            for (let V = S + 1; V < a; V++) _[S] = de(_[S], _[V]);
            if (_[S] !== 0) {
              _[S + 1] < 0 && (_[S] = 0 - _[S]);
              for (let V = S + 1; V < a; V++) _[V] /= _[S];
              _[S + 1] += 1;
            }
            if (_[S] = -_[S], S + 1 < r && _[S] !== 0) {
              for (let V = S + 1; V < r; V++) ee[V] = 0;
              for (let V = S + 1; V < r; V++) for (let ce = S + 1; ce < a; ce++) ee[V] += _[ce] * E.get(V, ce);
              for (let V = S + 1; V < a; V++) {
                let ce = -_[V] / _[S + 1];
                for (let Z = S + 1; Z < r; Z++) E.set(Z, V, E.get(Z, V) + ce * ee[Z]);
              }
            }
            if (b) for (let V = S + 1; V < a; V++) le.set(V, S, _[V]);
          }
        }
        let ge = Math.min(a, r + 1);
        if (Ie < a && (N[Ie] = E.get(Ie, Ie)), r < ge && (N[ge - 1] = 0), _e2 + 1 < ge && (_[_e2] = E.get(_e2, ge - 1)), _[ge - 1] = 0, y) {
          for (let S = Ie; S < C; S++) {
            for (let V = 0; V < r; V++) j.set(V, S, 0);
            j.set(S, S, 1);
          }
          for (let S = Ie - 1; S >= 0; S--) if (N[S] !== 0) {
            for (let V = S + 1; V < C; V++) {
              let ce = 0;
              for (let Z = S; Z < r; Z++) ce += j.get(Z, S) * j.get(Z, V);
              ce = -ce / j.get(S, S);
              for (let Z = S; Z < r; Z++) j.set(Z, V, j.get(Z, V) + ce * j.get(Z, S));
            }
            for (let V = S; V < r; V++) j.set(V, S, -j.get(V, S));
            j.set(S, S, 1 + j.get(S, S));
            for (let V = 0; V < S - 1; V++) j.set(V, S, 0);
          } else {
            for (let V = 0; V < r; V++) j.set(V, S, 0);
            j.set(S, S, 1);
          }
        }
        if (b) for (let S = a - 1; S >= 0; S--) {
          if (S < _e2 && _[S] !== 0) for (let V = S + 1; V < a; V++) {
            let ce = 0;
            for (let Z = S + 1; Z < a; Z++) ce += le.get(Z, S) * le.get(Z, V);
            ce = -ce / le.get(S + 1, S);
            for (let Z = S + 1; Z < a; Z++) le.set(Z, V, le.get(Z, V) + ce * le.get(Z, S));
          }
          for (let V = 0; V < a; V++) le.set(V, S, 0);
          le.set(S, S, 1);
        }
        let be = ge - 1, Be = Number.EPSILON;
        for (; ge > 0; ) {
          let S, V;
          for (S = ge - 2; S >= -1 && S !== -1; S--) {
            const ce = Number.MIN_VALUE + Be * Math.abs(N[S] + Math.abs(N[S + 1]));
            if (Math.abs(_[S]) <= ce || Number.isNaN(_[S])) {
              _[S] = 0;
              break;
            }
          }
          if (S === ge - 2) V = 4;
          else {
            let ce;
            for (ce = ge - 1; ce >= S && ce !== S; ce--) {
              let Z = (ce !== ge ? Math.abs(_[ce]) : 0) + (ce !== S + 1 ? Math.abs(_[ce - 1]) : 0);
              if (Math.abs(N[ce]) <= Be * Z) {
                N[ce] = 0;
                break;
              }
            }
            ce === S ? V = 3 : ce === ge - 1 ? V = 1 : (V = 2, S = ce);
          }
          switch (S++, V) {
            case 1: {
              let ce = _[ge - 2];
              _[ge - 2] = 0;
              for (let Z = ge - 2; Z >= S; Z--) {
                let Qe = de(N[Z], ce), Ge = N[Z] / Qe, Ke = ce / Qe;
                if (N[Z] = Qe, Z !== S && (ce = -Ke * _[Z - 1], _[Z - 1] = Ge * _[Z - 1]), b) for (let et = 0; et < a; et++) Qe = Ge * le.get(et, Z) + Ke * le.get(et, ge - 1), le.set(et, ge - 1, -Ke * le.get(et, Z) + Ge * le.get(et, ge - 1)), le.set(et, Z, Qe);
              }
              break;
            }
            case 2: {
              let ce = _[S - 1];
              _[S - 1] = 0;
              for (let Z = S; Z < ge; Z++) {
                let Qe = de(N[Z], ce), Ge = N[Z] / Qe, Ke = ce / Qe;
                if (N[Z] = Qe, ce = -Ke * _[Z], _[Z] = Ge * _[Z], y) for (let et = 0; et < r; et++) Qe = Ge * j.get(et, Z) + Ke * j.get(et, S - 1), j.set(et, S - 1, -Ke * j.get(et, Z) + Ge * j.get(et, S - 1)), j.set(et, Z, Qe);
              }
              break;
            }
            case 3: {
              const ce = Math.max(Math.abs(N[ge - 1]), Math.abs(N[ge - 2]), Math.abs(_[ge - 2]), Math.abs(N[S]), Math.abs(_[S])), Z = N[ge - 1] / ce, Qe = N[ge - 2] / ce, Ge = _[ge - 2] / ce, Ke = N[S] / ce, et = _[S] / ce, bt = ((Qe + Z) * (Qe - Z) + Ge * Ge) / 2, on = Z * Ge * (Z * Ge);
              let dt = 0;
              (bt !== 0 || on !== 0) && (bt < 0 ? dt = 0 - Math.sqrt(bt * bt + on) : dt = Math.sqrt(bt * bt + on), dt = on / (bt + dt));
              let dn = (Ke + Z) * (Ke - Z) + dt, Pn = Ke * et;
              for (let Ce = S; Ce < ge - 1; Ce++) {
                let vt = de(dn, Pn);
                vt === 0 && (vt = Number.MIN_VALUE);
                let zt = dn / vt, Ht = Pn / vt;
                if (Ce !== S && (_[Ce - 1] = vt), dn = zt * N[Ce] + Ht * _[Ce], _[Ce] = zt * _[Ce] - Ht * N[Ce], Pn = Ht * N[Ce + 1], N[Ce + 1] = zt * N[Ce + 1], b) for (let pt = 0; pt < a; pt++) vt = zt * le.get(pt, Ce) + Ht * le.get(pt, Ce + 1), le.set(pt, Ce + 1, -Ht * le.get(pt, Ce) + zt * le.get(pt, Ce + 1)), le.set(pt, Ce, vt);
                if (vt = de(dn, Pn), vt === 0 && (vt = Number.MIN_VALUE), zt = dn / vt, Ht = Pn / vt, N[Ce] = vt, dn = zt * _[Ce] + Ht * N[Ce + 1], N[Ce + 1] = -Ht * _[Ce] + zt * N[Ce + 1], Pn = Ht * _[Ce + 1], _[Ce + 1] = zt * _[Ce + 1], y && Ce < r - 1) for (let pt = 0; pt < r; pt++) vt = zt * j.get(pt, Ce) + Ht * j.get(pt, Ce + 1), j.set(pt, Ce + 1, -Ht * j.get(pt, Ce) + zt * j.get(pt, Ce + 1)), j.set(pt, Ce, vt);
              }
              _[ge - 2] = dn;
              break;
            }
            case 4: {
              if (N[S] <= 0 && (N[S] = N[S] < 0 ? -N[S] : 0, b)) for (let ce = 0; ce <= be; ce++) le.set(ce, S, -le.get(ce, S));
              for (; S < be && !(N[S] >= N[S + 1]); ) {
                let ce = N[S];
                if (N[S] = N[S + 1], N[S + 1] = ce, b && S < a - 1) for (let Z = 0; Z < a; Z++) ce = le.get(Z, S + 1), le.set(Z, S + 1, le.get(Z, S)), le.set(Z, S, ce);
                if (y && S < r - 1) for (let Z = 0; Z < r; Z++) ce = j.get(Z, S + 1), j.set(Z, S + 1, j.get(Z, S)), j.set(Z, S, ce);
                S++;
              }
              ge--;
              break;
            }
          }
        }
        if (A) {
          let S = le;
          le = j, j = S;
        }
        this.m = r, this.n = a, this.s = N, this.U = j, this.V = le;
      }
      solve(o) {
        let s = o, r = this.threshold, a = this.s.length, u = oe.zeros(a, a);
        for (let C = 0; C < a; C++) Math.abs(this.s[C]) <= r ? u.set(C, C, 0) : u.set(C, C, 1 / this.s[C]);
        let g = this.U, m = this.rightSingularVectors, y = m.mmul(u), b = m.rows, A = g.rows, E = oe.zeros(b, A);
        for (let C = 0; C < b; C++) for (let te = 0; te < A; te++) {
          let N = 0;
          for (let j = 0; j < a; j++) N += y.get(C, j) * g.get(te, j);
          E.set(C, te, N);
        }
        return E.mmul(s);
      }
      solveForDiagonal(o) {
        return this.solve(oe.diag(o));
      }
      inverse() {
        let o = this.V, s = this.threshold, r = o.rows, a = o.columns, u = new oe(r, this.s.length);
        for (let A = 0; A < r; A++) for (let E = 0; E < a; E++) Math.abs(this.s[E]) > s && u.set(A, E, o.get(A, E) / this.s[E]);
        let g = this.U, m = g.rows, y = g.columns, b = new oe(r, m);
        for (let A = 0; A < r; A++) for (let E = 0; E < m; E++) {
          let C = 0;
          for (let te = 0; te < y; te++) C += u.get(A, te) * g.get(E, te);
          b.set(A, E, C);
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
    function Ee(d, o = false) {
      return d = Q.checkMatrix(d), o ? new pe(d).inverse() : Le(d, oe.eye(d.rows));
    }
    function Le(d, o, s = false) {
      return d = Q.checkMatrix(d), o = Q.checkMatrix(o), s ? new pe(d).solve(o) : d.isSquare() ? new Y(d).solve(o) : new ae(d).solve(o);
    }
    function Fe(d) {
      if (d = oe.checkMatrix(d), d.isSquare()) {
        if (d.columns === 0) return 1;
        let o, s, r, a;
        if (d.columns === 2) return o = d.get(0, 0), s = d.get(0, 1), r = d.get(1, 0), a = d.get(1, 1), o * a - s * r;
        if (d.columns === 3) {
          let u, g, m;
          return u = new X(d, [
            1,
            2
          ], [
            1,
            2
          ]), g = new X(d, [
            1,
            2
          ], [
            0,
            2
          ]), m = new X(d, [
            1,
            2
          ], [
            0,
            1
          ]), o = d.get(0, 0), s = d.get(0, 1), r = d.get(0, 2), o * Fe(u) - s * Fe(g) + r * Fe(m);
        } else return new Y(d).determinant;
      } else throw Error("determinant can only be calculated for a square matrix");
    }
    function De(d, o) {
      let s = [];
      for (let r = 0; r < d; r++) r !== o && s.push(r);
      return s;
    }
    function _t(d, o, s, r = 1e-9, a = 1e-9) {
      if (d > a) return new Array(o.rows + 1).fill(0);
      {
        let u = o.addRow(s, [
          0
        ]);
        for (let g = 0; g < u.rows; g++) Math.abs(u.get(g, 0)) < r && u.set(g, 0, 0);
        return u.to1DArray();
      }
    }
    function St(d, o = {}) {
      const { thresholdValue: s = 1e-9, thresholdError: r = 1e-9 } = o;
      d = oe.checkMatrix(d);
      let a = d.rows, u = new oe(a, a);
      for (let g = 0; g < a; g++) {
        let m = oe.columnVector(d.getRow(g)), y = d.subMatrixRow(De(a, g)).transpose(), A = new pe(y).solve(m), E = oe.sub(m, y.mmul(A)).abs().max();
        u.setRow(g, _t(E, A, g, s, r));
      }
      return u;
    }
    function Jt(d, o = Number.EPSILON) {
      if (d = oe.checkMatrix(d), d.isEmpty()) return d.transpose();
      let s = new pe(d, {
        autoTranspose: true
      }), r = s.leftSingularVectors, a = s.rightSingularVectors, u = s.diagonal;
      for (let g = 0; g < u.length; g++) Math.abs(u[g]) > o ? u[g] = 1 / u[g] : u[g] = 0;
      return a.mmul(oe.diag(u).mmul(r.transpose()));
    }
    function Xt(d, o = d, s = {}) {
      d = new oe(d);
      let r = false;
      if (typeof o == "object" && !oe.isMatrix(o) && !e.isAnyArray(o) ? (s = o, o = d, r = true) : o = new oe(o), d.rows !== o.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true } = s;
      a && (d = d.center("column"), r || (o = o.center("column")));
      const u = d.transpose().mmul(o);
      for (let g = 0; g < u.rows; g++) for (let m = 0; m < u.columns; m++) u.set(g, m, u.get(g, m) * (1 / (d.rows - 1)));
      return u;
    }
    function fr(d, o = d, s = {}) {
      d = new oe(d);
      let r = false;
      if (typeof o == "object" && !oe.isMatrix(o) && !e.isAnyArray(o) ? (s = o, o = d, r = true) : o = new oe(o), d.rows !== o.rows) throw new TypeError("Both matrices must have the same number of rows");
      const { center: a = true, scale: u = true } = s;
      a && (d.center("column"), r || o.center("column")), u && (d.scale("column"), r || o.scale("column"));
      const g = d.standardDeviation("column", {
        unbiased: true
      }), m = r ? g : o.standardDeviation("column", {
        unbiased: true
      }), y = d.transpose().mmul(o);
      for (let b = 0; b < y.rows; b++) for (let A = 0; A < y.columns; A++) y.set(b, A, y.get(b, A) * (1 / (g[b] * m[A])) * (1 / (d.rows - 1)));
      return y;
    }
    class ei {
      constructor(o, s = {}) {
        const { assumeSymmetric: r = false } = s;
        if (o = Q.checkMatrix(o), !o.isSquare()) throw new Error("Matrix is not a square matrix");
        if (o.isEmpty()) throw new Error("Matrix must be non-empty");
        let a = o.columns, u = new oe(a, a), g = new Float64Array(a), m = new Float64Array(a), y = o, b, A, E = false;
        if (r ? E = true : E = o.isSymmetric(), E) {
          for (b = 0; b < a; b++) for (A = 0; A < a; A++) u.set(b, A, y.get(b, A));
          Lt(a, m, g, u), Zt(a, m, g, u);
        } else {
          let C = new oe(a, a), te = new Float64Array(a);
          for (A = 0; A < a; A++) for (b = 0; b < a; b++) C.set(b, A, y.get(b, A));
          Yi(a, C, te, u), Ki(a, m, g, u, C);
        }
        this.n = a, this.e = m, this.d = g, this.V = u;
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
        let o = this.n, s = this.e, r = this.d, a = new oe(o, o), u, g;
        for (u = 0; u < o; u++) {
          for (g = 0; g < o; g++) a.set(u, g, 0);
          a.set(u, u, r[u]), s[u] > 0 ? a.set(u, u + 1, s[u]) : s[u] < 0 && a.set(u, u - 1, s[u]);
        }
        return a;
      }
    }
    function Lt(d, o, s, r) {
      let a, u, g, m, y, b, A, E;
      for (y = 0; y < d; y++) s[y] = r.get(d - 1, y);
      for (m = d - 1; m > 0; m--) {
        for (E = 0, g = 0, b = 0; b < m; b++) E = E + Math.abs(s[b]);
        if (E === 0) for (o[m] = s[m - 1], y = 0; y < m; y++) s[y] = r.get(m - 1, y), r.set(m, y, 0), r.set(y, m, 0);
        else {
          for (b = 0; b < m; b++) s[b] /= E, g += s[b] * s[b];
          for (a = s[m - 1], u = Math.sqrt(g), a > 0 && (u = -u), o[m] = E * u, g = g - a * u, s[m - 1] = a - u, y = 0; y < m; y++) o[y] = 0;
          for (y = 0; y < m; y++) {
            for (a = s[y], r.set(y, m, a), u = o[y] + r.get(y, y) * a, b = y + 1; b <= m - 1; b++) u += r.get(b, y) * s[b], o[b] += r.get(b, y) * a;
            o[y] = u;
          }
          for (a = 0, y = 0; y < m; y++) o[y] /= g, a += o[y] * s[y];
          for (A = a / (g + g), y = 0; y < m; y++) o[y] -= A * s[y];
          for (y = 0; y < m; y++) {
            for (a = s[y], u = o[y], b = y; b <= m - 1; b++) r.set(b, y, r.get(b, y) - (a * o[b] + u * s[b]));
            s[y] = r.get(m - 1, y), r.set(m, y, 0);
          }
        }
        s[m] = g;
      }
      for (m = 0; m < d - 1; m++) {
        if (r.set(d - 1, m, r.get(m, m)), r.set(m, m, 1), g = s[m + 1], g !== 0) {
          for (b = 0; b <= m; b++) s[b] = r.get(b, m + 1) / g;
          for (y = 0; y <= m; y++) {
            for (u = 0, b = 0; b <= m; b++) u += r.get(b, m + 1) * r.get(b, y);
            for (b = 0; b <= m; b++) r.set(b, y, r.get(b, y) - u * s[b]);
          }
        }
        for (b = 0; b <= m; b++) r.set(b, m + 1, 0);
      }
      for (y = 0; y < d; y++) s[y] = r.get(d - 1, y), r.set(d - 1, y, 0);
      r.set(d - 1, d - 1, 1), o[0] = 0;
    }
    function Zt(d, o, s, r) {
      let a, u, g, m, y, b, A, E, C, te, N, j, le, _, ee, he;
      for (g = 1; g < d; g++) o[g - 1] = o[g];
      o[d - 1] = 0;
      let Ie = 0, _e2 = 0, Ze = Number.EPSILON;
      for (b = 0; b < d; b++) {
        for (_e2 = Math.max(_e2, Math.abs(s[b]) + Math.abs(o[b])), A = b; A < d && !(Math.abs(o[A]) <= Ze * _e2); ) A++;
        if (A > b) do {
          for (a = s[b], E = (s[b + 1] - a) / (2 * o[b]), C = de(E, 1), E < 0 && (C = -C), s[b] = o[b] / (E + C), s[b + 1] = o[b] * (E + C), te = s[b + 1], u = a - s[b], g = b + 2; g < d; g++) s[g] -= u;
          for (Ie = Ie + u, E = s[A], N = 1, j = N, le = N, _ = o[b + 1], ee = 0, he = 0, g = A - 1; g >= b; g--) for (le = j, j = N, he = ee, a = N * o[g], u = N * E, C = de(E, o[g]), o[g + 1] = ee * C, ee = o[g] / C, N = E / C, E = N * s[g] - ee * a, s[g + 1] = u + ee * (N * a + ee * s[g]), y = 0; y < d; y++) u = r.get(y, g + 1), r.set(y, g + 1, ee * r.get(y, g) + N * u), r.set(y, g, N * r.get(y, g) - ee * u);
          E = -ee * he * le * _ * o[b] / te, o[b] = ee * E, s[b] = N * E;
        } while (Math.abs(o[b]) > Ze * _e2);
        s[b] = s[b] + Ie, o[b] = 0;
      }
      for (g = 0; g < d - 1; g++) {
        for (y = g, E = s[g], m = g + 1; m < d; m++) s[m] < E && (y = m, E = s[m]);
        if (y !== g) for (s[y] = s[g], s[g] = E, m = 0; m < d; m++) E = r.get(m, g), r.set(m, g, r.get(m, y)), r.set(m, y, E);
      }
    }
    function Yi(d, o, s, r) {
      let a = 0, u = d - 1, g, m, y, b, A, E, C;
      for (E = a + 1; E <= u - 1; E++) {
        for (C = 0, b = E; b <= u; b++) C = C + Math.abs(o.get(b, E - 1));
        if (C !== 0) {
          for (y = 0, b = u; b >= E; b--) s[b] = o.get(b, E - 1) / C, y += s[b] * s[b];
          for (m = Math.sqrt(y), s[E] > 0 && (m = -m), y = y - s[E] * m, s[E] = s[E] - m, A = E; A < d; A++) {
            for (g = 0, b = u; b >= E; b--) g += s[b] * o.get(b, A);
            for (g = g / y, b = E; b <= u; b++) o.set(b, A, o.get(b, A) - g * s[b]);
          }
          for (b = 0; b <= u; b++) {
            for (g = 0, A = u; A >= E; A--) g += s[A] * o.get(b, A);
            for (g = g / y, A = E; A <= u; A++) o.set(b, A, o.get(b, A) - g * s[A]);
          }
          s[E] = C * s[E], o.set(E, E - 1, C * m);
        }
      }
      for (b = 0; b < d; b++) for (A = 0; A < d; A++) r.set(b, A, b === A ? 1 : 0);
      for (E = u - 1; E >= a + 1; E--) if (o.get(E, E - 1) !== 0) {
        for (b = E + 1; b <= u; b++) s[b] = o.get(b, E - 1);
        for (A = E; A <= u; A++) {
          for (m = 0, b = E; b <= u; b++) m += s[b] * r.get(b, A);
          for (m = m / s[E] / o.get(E, E - 1), b = E; b <= u; b++) r.set(b, A, r.get(b, A) + m * s[b]);
        }
      }
    }
    function Ki(d, o, s, r, a) {
      let u = d - 1, g = 0, m = d - 1, y = Number.EPSILON, b = 0, A = 0, E = 0, C = 0, te = 0, N = 0, j = 0, le = 0, _, ee, he, Ie, _e2, Ze, ge, be, Be, S, V, ce, Z, Qe, Ge;
      for (_ = 0; _ < d; _++) for ((_ < g || _ > m) && (s[_] = a.get(_, _), o[_] = 0), ee = Math.max(_ - 1, 0); ee < d; ee++) A = A + Math.abs(a.get(_, ee));
      for (; u >= g; ) {
        for (Ie = u; Ie > g && (N = Math.abs(a.get(Ie - 1, Ie - 1)) + Math.abs(a.get(Ie, Ie)), N === 0 && (N = A), !(Math.abs(a.get(Ie, Ie - 1)) < y * N)); ) Ie--;
        if (Ie === u) a.set(u, u, a.get(u, u) + b), s[u] = a.get(u, u), o[u] = 0, u--, le = 0;
        else if (Ie === u - 1) {
          if (ge = a.get(u, u - 1) * a.get(u - 1, u), E = (a.get(u - 1, u - 1) - a.get(u, u)) / 2, C = E * E + ge, j = Math.sqrt(Math.abs(C)), a.set(u, u, a.get(u, u) + b), a.set(u - 1, u - 1, a.get(u - 1, u - 1) + b), be = a.get(u, u), C >= 0) {
            for (j = E >= 0 ? E + j : E - j, s[u - 1] = be + j, s[u] = s[u - 1], j !== 0 && (s[u] = be - ge / j), o[u - 1] = 0, o[u] = 0, be = a.get(u, u - 1), N = Math.abs(be) + Math.abs(j), E = be / N, C = j / N, te = Math.sqrt(E * E + C * C), E = E / te, C = C / te, ee = u - 1; ee < d; ee++) j = a.get(u - 1, ee), a.set(u - 1, ee, C * j + E * a.get(u, ee)), a.set(u, ee, C * a.get(u, ee) - E * j);
            for (_ = 0; _ <= u; _++) j = a.get(_, u - 1), a.set(_, u - 1, C * j + E * a.get(_, u)), a.set(_, u, C * a.get(_, u) - E * j);
            for (_ = g; _ <= m; _++) j = r.get(_, u - 1), r.set(_, u - 1, C * j + E * r.get(_, u)), r.set(_, u, C * r.get(_, u) - E * j);
          } else s[u - 1] = be + E, s[u] = be + E, o[u - 1] = j, o[u] = -j;
          u = u - 2, le = 0;
        } else {
          if (be = a.get(u, u), Be = 0, ge = 0, Ie < u && (Be = a.get(u - 1, u - 1), ge = a.get(u, u - 1) * a.get(u - 1, u)), le === 10) {
            for (b += be, _ = g; _ <= u; _++) a.set(_, _, a.get(_, _) - be);
            N = Math.abs(a.get(u, u - 1)) + Math.abs(a.get(u - 1, u - 2)), be = Be = 0.75 * N, ge = -0.4375 * N * N;
          }
          if (le === 30 && (N = (Be - be) / 2, N = N * N + ge, N > 0)) {
            for (N = Math.sqrt(N), Be < be && (N = -N), N = be - ge / ((Be - be) / 2 + N), _ = g; _ <= u; _++) a.set(_, _, a.get(_, _) - N);
            b += N, be = Be = ge = 0.964;
          }
          for (le = le + 1, _e2 = u - 2; _e2 >= Ie && (j = a.get(_e2, _e2), te = be - j, N = Be - j, E = (te * N - ge) / a.get(_e2 + 1, _e2) + a.get(_e2, _e2 + 1), C = a.get(_e2 + 1, _e2 + 1) - j - te - N, te = a.get(_e2 + 2, _e2 + 1), N = Math.abs(E) + Math.abs(C) + Math.abs(te), E = E / N, C = C / N, te = te / N, !(_e2 === Ie || Math.abs(a.get(_e2, _e2 - 1)) * (Math.abs(C) + Math.abs(te)) < y * (Math.abs(E) * (Math.abs(a.get(_e2 - 1, _e2 - 1)) + Math.abs(j) + Math.abs(a.get(_e2 + 1, _e2 + 1)))))); ) _e2--;
          for (_ = _e2 + 2; _ <= u; _++) a.set(_, _ - 2, 0), _ > _e2 + 2 && a.set(_, _ - 3, 0);
          for (he = _e2; he <= u - 1 && (Qe = he !== u - 1, he !== _e2 && (E = a.get(he, he - 1), C = a.get(he + 1, he - 1), te = Qe ? a.get(he + 2, he - 1) : 0, be = Math.abs(E) + Math.abs(C) + Math.abs(te), be !== 0 && (E = E / be, C = C / be, te = te / be)), be !== 0); he++) if (N = Math.sqrt(E * E + C * C + te * te), E < 0 && (N = -N), N !== 0) {
            for (he !== _e2 ? a.set(he, he - 1, -N * be) : Ie !== _e2 && a.set(he, he - 1, -a.get(he, he - 1)), E = E + N, be = E / N, Be = C / N, j = te / N, C = C / E, te = te / E, ee = he; ee < d; ee++) E = a.get(he, ee) + C * a.get(he + 1, ee), Qe && (E = E + te * a.get(he + 2, ee), a.set(he + 2, ee, a.get(he + 2, ee) - E * j)), a.set(he, ee, a.get(he, ee) - E * be), a.set(he + 1, ee, a.get(he + 1, ee) - E * Be);
            for (_ = 0; _ <= Math.min(u, he + 3); _++) E = be * a.get(_, he) + Be * a.get(_, he + 1), Qe && (E = E + j * a.get(_, he + 2), a.set(_, he + 2, a.get(_, he + 2) - E * te)), a.set(_, he, a.get(_, he) - E), a.set(_, he + 1, a.get(_, he + 1) - E * C);
            for (_ = g; _ <= m; _++) E = be * r.get(_, he) + Be * r.get(_, he + 1), Qe && (E = E + j * r.get(_, he + 2), r.set(_, he + 2, r.get(_, he + 2) - E * te)), r.set(_, he, r.get(_, he) - E), r.set(_, he + 1, r.get(_, he + 1) - E * C);
          }
        }
      }
      if (A !== 0) {
        for (u = d - 1; u >= 0; u--) if (E = s[u], C = o[u], C === 0) for (Ie = u, a.set(u, u, 1), _ = u - 1; _ >= 0; _--) {
          for (ge = a.get(_, _) - E, te = 0, ee = Ie; ee <= u; ee++) te = te + a.get(_, ee) * a.get(ee, u);
          if (o[_] < 0) j = ge, N = te;
          else if (Ie = _, o[_] === 0 ? a.set(_, u, ge !== 0 ? -te / ge : -te / (y * A)) : (be = a.get(_, _ + 1), Be = a.get(_ + 1, _), C = (s[_] - E) * (s[_] - E) + o[_] * o[_], Ze = (be * N - j * te) / C, a.set(_, u, Ze), a.set(_ + 1, u, Math.abs(be) > Math.abs(j) ? (-te - ge * Ze) / be : (-N - Be * Ze) / j)), Ze = Math.abs(a.get(_, u)), y * Ze * Ze > 1) for (ee = _; ee <= u; ee++) a.set(ee, u, a.get(ee, u) / Ze);
        }
        else if (C < 0) for (Ie = u - 1, Math.abs(a.get(u, u - 1)) > Math.abs(a.get(u - 1, u)) ? (a.set(u - 1, u - 1, C / a.get(u, u - 1)), a.set(u - 1, u, -(a.get(u, u) - E) / a.get(u, u - 1))) : (Ge = Ji(0, -a.get(u - 1, u), a.get(u - 1, u - 1) - E, C), a.set(u - 1, u - 1, Ge[0]), a.set(u - 1, u, Ge[1])), a.set(u, u - 1, 0), a.set(u, u, 1), _ = u - 2; _ >= 0; _--) {
          for (S = 0, V = 0, ee = Ie; ee <= u; ee++) S = S + a.get(_, ee) * a.get(ee, u - 1), V = V + a.get(_, ee) * a.get(ee, u);
          if (ge = a.get(_, _) - E, o[_] < 0) j = ge, te = S, N = V;
          else if (Ie = _, o[_] === 0 ? (Ge = Ji(-S, -V, ge, C), a.set(_, u - 1, Ge[0]), a.set(_, u, Ge[1])) : (be = a.get(_, _ + 1), Be = a.get(_ + 1, _), ce = (s[_] - E) * (s[_] - E) + o[_] * o[_] - C * C, Z = (s[_] - E) * 2 * C, ce === 0 && Z === 0 && (ce = y * A * (Math.abs(ge) + Math.abs(C) + Math.abs(be) + Math.abs(Be) + Math.abs(j))), Ge = Ji(be * te - j * S + C * V, be * N - j * V - C * S, ce, Z), a.set(_, u - 1, Ge[0]), a.set(_, u, Ge[1]), Math.abs(be) > Math.abs(j) + Math.abs(C) ? (a.set(_ + 1, u - 1, (-S - ge * a.get(_, u - 1) + C * a.get(_, u)) / be), a.set(_ + 1, u, (-V - ge * a.get(_, u) - C * a.get(_, u - 1)) / be)) : (Ge = Ji(-te - Be * a.get(_, u - 1), -N - Be * a.get(_, u), j, C), a.set(_ + 1, u - 1, Ge[0]), a.set(_ + 1, u, Ge[1]))), Ze = Math.max(Math.abs(a.get(_, u - 1)), Math.abs(a.get(_, u))), y * Ze * Ze > 1) for (ee = _; ee <= u; ee++) a.set(ee, u - 1, a.get(ee, u - 1) / Ze), a.set(ee, u, a.get(ee, u) / Ze);
        }
        for (_ = 0; _ < d; _++) if (_ < g || _ > m) for (ee = _; ee < d; ee++) r.set(_, ee, a.get(_, ee));
        for (ee = d - 1; ee >= g; ee--) for (_ = g; _ <= m; _++) {
          for (j = 0, he = g; he <= Math.min(ee, m); he++) j = j + r.get(_, he) * a.get(he, ee);
          r.set(_, ee, j);
        }
      }
    }
    function Ji(d, o, s, r) {
      let a, u;
      return Math.abs(s) > Math.abs(r) ? (a = r / s, u = s + a * r, [
        (d + a * o) / u,
        (o - a * d) / u
      ]) : (a = s / r, u = r + a * s, [
        (a * d + o) / u,
        (a * o - d) / u
      ]);
    }
    class Ka {
      constructor(o) {
        if (o = Q.checkMatrix(o), !o.isSymmetric()) throw new Error("Matrix is not symmetric");
        let s = o, r = s.rows, a = new oe(r, r), u = true, g, m, y;
        for (m = 0; m < r; m++) {
          let b = 0;
          for (y = 0; y < m; y++) {
            let A = 0;
            for (g = 0; g < y; g++) A += a.get(y, g) * a.get(m, g);
            A = (s.get(m, y) - A) / a.get(y, y), a.set(m, y, A), b = b + A * A;
          }
          for (b = s.get(m, m) - b, u && (u = b > 0), a.set(m, m, Math.sqrt(Math.max(b, 0))), y = m + 1; y < r; y++) a.set(m, y, 0);
        }
        this.L = a, this.positiveDefinite = u;
      }
      isPositiveDefinite() {
        return this.positiveDefinite;
      }
      solve(o) {
        o = Q.checkMatrix(o);
        let s = this.L, r = s.rows;
        if (o.rows !== r) throw new Error("Matrix dimensions do not match");
        if (this.isPositiveDefinite() === false) throw new Error("Matrix is not positive definite");
        let a = o.columns, u = o.clone(), g, m, y;
        for (y = 0; y < r; y++) for (m = 0; m < a; m++) {
          for (g = 0; g < y; g++) u.set(y, m, u.get(y, m) - u.get(g, m) * s.get(y, g));
          u.set(y, m, u.get(y, m) / s.get(y, y));
        }
        for (y = r - 1; y >= 0; y--) for (m = 0; m < a; m++) {
          for (g = y + 1; g < r; g++) u.set(y, m, u.get(y, m) - u.get(g, m) * s.get(g, y));
          u.set(y, m, u.get(y, m) / s.get(y, y));
        }
        return u;
      }
      get lowerTriangularMatrix() {
        return this.L;
      }
    }
    class Ja {
      constructor(o, s = {}) {
        o = Q.checkMatrix(o);
        let { Y: r } = s;
        const { scaleScores: a = false, maxIterations: u = 1e3, terminationCriteria: g = 1e-10 } = s;
        let m;
        if (r) {
          if (e.isAnyArray(r) && typeof r[0] == "number" ? r = oe.columnVector(r) : r = Q.checkMatrix(r), r.rows !== o.rows) throw new Error("Y should have the same number of rows as X");
          m = r.getColumnVector(0);
        } else m = o.getColumnVector(0);
        let y = 1, b, A, E, C;
        for (let te = 0; te < u && y > g; te++) E = o.transpose().mmul(m).div(m.transpose().mmul(m).get(0, 0)), E = E.div(E.norm()), b = o.mmul(E).div(E.transpose().mmul(E).get(0, 0)), te > 0 && (y = b.clone().sub(C).pow(2).sum()), C = b.clone(), r ? (A = r.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), A = A.div(A.norm()), m = r.mmul(A).div(A.transpose().mmul(A).get(0, 0))) : m = b;
        if (r) {
          let te = o.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0));
          te = te.div(te.norm());
          let N = o.clone().sub(b.clone().mmul(te.transpose())), j = m.transpose().mmul(b).div(b.transpose().mmul(b).get(0, 0)), le = r.clone().sub(b.clone().mulS(j.get(0, 0)).mmul(A.transpose()));
          this.t = b, this.p = te.transpose(), this.w = E.transpose(), this.q = A, this.u = m, this.s = b.transpose().mmul(b), this.xResidual = N, this.yResidual = le, this.betas = j;
        } else this.w = E.transpose(), this.s = b.transpose().mmul(b).sqrt(), a ? this.t = b.clone().div(this.s.get(0, 0)) : this.t = b, this.xResidual = o.sub(b.mmul(E.transpose()));
      }
    }
    return Re.AbstractMatrix = ye, Re.CHO = Ka, Re.CholeskyDecomposition = Ka, Re.DistanceMatrix = An, Re.EVD = ei, Re.EigenvalueDecomposition = ei, Re.LU = Y, Re.LuDecomposition = Y, Re.Matrix = oe, Re.MatrixColumnSelectionView = ur, Re.MatrixColumnView = qi, Re.MatrixFlipColumnView = Ya, Re.MatrixFlipRowView = T, Re.MatrixRowSelectionView = x, Re.MatrixRowView = O, Re.MatrixSelectionView = X, Re.MatrixSubView = K, Re.MatrixTransposeView = J, Re.NIPALS = Ja, Re.Nipals = Ja, Re.QR = ae, Re.QrDecomposition = ae, Re.SVD = pe, Re.SingularValueDecomposition = pe, Re.SymmetricMatrix = Dt, Re.WrapperMatrix1D = se, Re.WrapperMatrix2D = Q, Re.correlation = fr, Re.covariance = Xt, Re.default = oe, Re.determinant = Fe, Re.inverse = Ee, Re.linearDependencies = St, Re.pseudoInverse = Jt, Re.solve = Le, Re.wrap = re, Re;
  }
  var cs = zb();
  const _c = xb(cs), en = cs.Matrix;
  _c.Matrix ? _c.Matrix : cs.Matrix;
  const Hb = cs.inverse;
  let Me;
  const Ff = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  typeof TextDecoder < "u" && Ff.decode();
  let wi = null;
  function yo() {
    return (wi === null || wi.byteLength === 0) && (wi = new Uint8Array(Me.memory.buffer)), wi;
  }
  function Ir(e, t) {
    return e = e >>> 0, Ff.decode(yo().subarray(e, e + t));
  }
  let Wo = 0;
  const bo = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, Vb = typeof bo.encodeInto == "function" ? function(e, t) {
    return bo.encodeInto(e, t);
  } : function(e, t) {
    const n = bo.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function Df(e, t, n) {
    if (n === void 0) {
      const h = bo.encode(e), p = t(h.length, 1) >>> 0;
      return yo().subarray(p, p + h.length).set(h), Wo = h.length, p;
    }
    let i = e.length, l = t(i, 1) >>> 0;
    const c = yo();
    let f = 0;
    for (; f < i; f++) {
      const h = e.charCodeAt(f);
      if (h > 127) break;
      c[l + f] = h;
    }
    if (f !== i) {
      f !== 0 && (e = e.slice(f)), l = n(l, i, i = f + e.length * 3, 1) >>> 0;
      const h = yo().subarray(l + f, l + i), p = Vb(e, h);
      f += p.written, l = n(l, i, f, 1) >>> 0;
    }
    return Wo = f, l;
  }
  function qb(e) {
    return e == null;
  }
  let br = null;
  function Sc() {
    return (br === null || br.buffer.detached === true || br.buffer.detached === void 0 && br.buffer !== Me.memory.buffer) && (br = new DataView(Me.memory.buffer)), br;
  }
  function jf(e) {
    const t = Me.__wbindgen_export_0.get(e);
    return Me.__externref_table_dealloc(e), t;
  }
  function Gs(e, t) {
    if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  }
  function pa(e, t, n) {
    Gs(e, tr), Gs(t, tr), Gs(n, $o);
    const i = Me.transform(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
    if (i[1]) throw jf(i[0]);
  }
  const Oc = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Me.__wbg_point_free(e >>> 0, 1));
  class $o {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Oc.unregister(this), t;
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
    constructor(t, n, i) {
      const l = Me.point_new(t, n, i);
      return this.__wbg_ptr = l >>> 0, Oc.register(this, this.__wbg_ptr, this), this;
    }
  }
  const Ac = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => Me.__wbg_projection_free(e >>> 0, 1));
  class tr {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ac.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      Me.__wbg_projection_free(t, 0);
    }
    constructor(t) {
      const n = Df(t, Me.__wbindgen_malloc, Me.__wbindgen_realloc), i = Wo, l = Me.projection_new(n, i);
      if (l[2]) throw jf(l[1]);
      return this.__wbg_ptr = l[0] >>> 0, Ac.register(this, this.__wbg_ptr, this), this;
    }
    get projName() {
      let t, n;
      try {
        const i = Me.projection_projName(this.__wbg_ptr);
        return t = i[0], n = i[1], Ir(i[0], i[1]);
      } finally {
        Me.__wbindgen_free(t, n, 1);
      }
    }
    get isLatlon() {
      return Me.projection_isLatlon(this.__wbg_ptr) !== 0;
    }
    get isGeocentric() {
      return Me.projection_isGeocentric(this.__wbg_ptr) !== 0;
    }
    get axis() {
      let t, n;
      try {
        const i = Me.projection_axis(this.__wbg_ptr);
        return t = i[0], n = i[1], Ir(i[0], i[1]);
      } finally {
        Me.__wbindgen_free(t, n, 1);
      }
    }
    get isNormalizedAxis() {
      return Me.projection_isNormalizedAxis(this.__wbg_ptr) !== 0;
    }
    get to_meter() {
      return Me.projection_to_meter(this.__wbg_ptr);
    }
    get units() {
      let t, n;
      try {
        const i = Me.projection_units(this.__wbg_ptr);
        return t = i[0], n = i[1], Ir(i[0], i[1]);
      } finally {
        Me.__wbindgen_free(t, n, 1);
      }
    }
  }
  async function Yb(e, t) {
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
  function Kb() {
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
      return parseFloat(Ir(t, n));
    }, e.wbg.__wbg_parseInt_7deceafc75400ae4 = function(t, n, i) {
      return parseInt(Ir(t, n), i);
    }, e.wbg.__wbg_slice_ab0b7e3d75dccdee = function(t, n, i) {
      return t.slice(n >>> 0, i >>> 0);
    }, e.wbg.__wbindgen_error_new = function(t, n) {
      return new Error(Ir(t, n));
    }, e.wbg.__wbindgen_init_externref_table = function() {
      const t = Me.__wbindgen_export_0, n = t.grow(4);
      t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
    }, e.wbg.__wbindgen_string_get = function(t, n) {
      const i = n, l = typeof i == "string" ? i : void 0;
      var c = qb(l) ? 0 : Df(l, Me.__wbindgen_malloc, Me.__wbindgen_realloc), f = Wo;
      Sc().setInt32(t + 4, f, true), Sc().setInt32(t + 0, c, true);
    }, e.wbg.__wbindgen_throw = function(t, n) {
      throw new Error(Ir(t, n));
    }, e;
  }
  function Jb(e, t) {
    return Me = e.exports, Uf.__wbindgen_wasm_module = t, br = null, wi = null, Me.__wbindgen_start(), Me;
  }
  async function Uf(e) {
    if (Me !== void 0) return Me;
    typeof e < "u" && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof e > "u" && (e = new URL("" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, import.meta.url));
    const t = Kb();
    (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
    const { instance: n, module: i } = await Yb(await e, t);
    return Jb(n, i);
  }
  const Xb = "" + new URL("proj4rs_bg-Biz-E4lt.wasm", import.meta.url).href, Ri = {
    WGS84: "+proj=longlat +datum=WGS84 +no_defs",
    GRS80: "+proj=latlong +ellps=GRS80 +no_defs",
    UTM_ZONE_50N: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
    UTM_ZONE_51N: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
    CGCS2000_3_DEGREE: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
    BEIJING_1954: "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
    WEB_MERCATOR: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
  };
  let Ws = false;
  async function Gf() {
    if (!Ws) try {
      console.log("[Proj4WASM] Fetching WASM module..."), await Uf({
        module_or_path: Xb
      }), Ws = true, console.log("[Proj4WASM] WASM module loaded successfully.");
    } catch (e) {
      console.warn("[Proj4WASM] Failed to load WASM module, using the JS fallback."), console.error(e), Ws = true;
    }
  }
  async function Pc(e, t, n) {
    try {
      await Gf();
      const i = new tr(e), l = new tr(t), c = new $o(n[0], n[1], 0);
      pa(i, l, c);
      const f = [
        c.x,
        c.y
      ];
      return i.free(), l.free(), c.free(), f;
    } catch (i) {
      throw new Error(`Failed to transform coordinate: ${i instanceof Error ? i.message : String(i)}`);
    }
  }
  function Zb(e, t) {
    const n = t.x - e.x, i = t.y - e.y;
    return Math.sqrt(n * n + i * i);
  }
  function Rc(e, t) {
    const i = e.latitude * Math.PI / 180, l = t.latitude * Math.PI / 180, c = (t.latitude - e.latitude) * Math.PI / 180, f = (t.longitude - e.longitude) * Math.PI / 180, h = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(i) * Math.cos(l) * Math.sin(f / 2) * Math.sin(f / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
  }
  async function Qb(e, t, n = {}) {
    const { projection: i = Ri.CGCS2000_3_DEGREE, useHaversine: l = false } = n;
    if (l) return Rc(e, t);
    try {
      const c = await Pc(Ri.WGS84, i, [
        e.longitude,
        e.latitude
      ]), f = await Pc(Ri.WGS84, i, [
        t.longitude,
        t.latitude
      ]);
      return Zb({
        x: c[0],
        y: c[1]
      }, {
        x: f[0],
        y: f[1]
      });
    } catch (c) {
      return console.warn("Failed to use proj4 distance calculation, falling back to haversine:", c), Rc(e, t);
    }
  }
  Kv = async function(e, t = {}) {
    if (e.length < 2) return 0;
    let n = 0;
    for (let i = 1; i < e.length; i++) n += await Qb(e[i - 1], e[i], t);
    return n;
  };
  Jv = function(e) {
    return e < 1e3 ? `${Math.round(e)} m` : e < 1e4 ? `${(e / 1e3).toFixed(1)} km` : `${Math.round(e / 1e3)} km`;
  };
  class Wf {
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
        const n = new tr(Ri.WGS84), i = new tr(this.localProjection), l = new $o(t.longitude, t.latitude, 0);
        pa(n, i, l);
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
        const n = new tr(this.localProjection), i = new tr(Ri.WGS84), l = new $o(t.x, t.y, 0);
        pa(n, i, l);
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
  new Wf();
  class ev {
    constructor(t) {
      __publicField(this, "state");
      __publicField(this, "config");
      __publicField(this, "coordinateTransformer");
      this.config = {
        sigmaAcceleration: 1,
        initialPositionUncertainty: 20,
        initialVelocityUncertainty: 4,
        ...t
      }, this.coordinateTransformer = new Wf(), this.state = {
        position: {
          x: 0,
          y: 0
        },
        velocity: {
          x: 0,
          y: 0
        },
        covariance: new en([
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
        timestamp: Date.now()
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
      this.state.covariance = new en([
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
    predict(t, n) {
      const i = new en([
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
      ]), l = new en([
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
      ]), c = new en([
        [
          n ? n.x : 0
        ],
        [
          n ? n.y : 0
        ]
      ]), f = this.config.sigmaAcceleration, h = new en([
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
      ]).mul(f * f), p = new en([
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
      ]), v = i.mmul(p).add(l.mmul(c)), w = i.mmul(this.state.covariance).mmul(i.transpose()).add(h);
      this.state.position = {
        x: v.get(0, 0),
        y: v.get(1, 0)
      }, this.state.velocity = {
        x: v.get(2, 0),
        y: v.get(3, 0)
      }, this.state.covariance = w;
    }
    async updateGPS(t) {
      const n = new en([
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
      }), l = new en([
        [
          i.x
        ],
        [
          i.y
        ]
      ]), c = this.gpsAccuracyToSigma(t.accuracy), f = new en([
        [
          c * c,
          0
        ],
        [
          0,
          c * c
        ]
      ]), h = new en([
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
      ]), p = n.mmul(h), v = n.mmul(this.state.covariance).mmul(n.transpose()).add(f), w = this.state.covariance.mmul(n.transpose()).mmul(Hb(v)), I = l.sub(p), P = h.add(w.mmul(I)), k = en.eye(4).sub(w.mmul(n)).mmul(this.state.covariance);
      this.state.position = {
        x: P.get(0, 0),
        y: P.get(1, 0)
      }, this.state.velocity = {
        x: P.get(2, 0),
        y: P.get(3, 0)
      }, this.state.covariance = k;
    }
    gpsAccuracyToSigma(t) {
      return t / Math.sqrt(2 * Math.log(20));
    }
  }
  class $s {
    constructor(t, n = {}) {
      __publicField(this, "wrappedProvider");
      __publicField(this, "kalmanFilter");
      __publicField(this, "config");
      __publicField(this, "initialized", false);
      __publicField(this, "watchId", null);
      __publicField(this, "lastGPSReading", null);
      __publicField(this, "imuUpdateTimer", null);
      __publicField(this, "imuCallback", null);
      this.wrappedProvider = t, this.config = {
        enableIMUFusion: false,
        imuUpdateInterval: 100,
        maxAge: 5e3,
        sigmaAcceleration: 1,
        initialPositionUncertainty: 20,
        initialVelocityUncertainty: 4,
        ...n
      }, this.kalmanFilter = new ev({
        sigmaAcceleration: this.config.sigmaAcceleration,
        initialPositionUncertainty: this.config.initialPositionUncertainty,
        initialVelocityUncertainty: this.config.initialVelocityUncertainty
      });
    }
    async init() {
      if (this.initialized) return G(void 0);
      const t = await this.wrappedProvider.init();
      return t.isErr() ? M(new wt(t.error.message, st.INITIALIZATION_FAILED, t.error)) : (this.initialized = true, G(void 0));
    }
    async getPermissionStatus() {
      return (await this.wrappedProvider.getPermissionStatus()).mapErr((n) => new wt(n.message, st.PERMISSION_DENIED, n));
    }
    async requestPermission() {
      return (await this.wrappedProvider.requestPermission()).mapErr((n) => new wt(n.message, st.PERMISSION_DENIED, n));
    }
    async getCurrentPosition() {
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return M(i.error);
      }
      const t = await this.wrappedProvider.getCurrentPosition();
      if (t.isErr()) return M(new wt(t.error.message, st.POSITION_UNAVAILABLE, t.error));
      const n = await this.applyKalmanFilter(t.value);
      return G(n);
    }
    async watchPosition(t) {
      if (!this.initialized) {
        const i = await this.init();
        if (i.isErr()) return M(i.error);
      }
      if (this.watchId !== null) return M(new wt("Watch already active", st.WATCH_FAILED));
      const n = await this.wrappedProvider.watchPosition(async (i) => {
        const l = await this.applyKalmanFilter(i);
        t(l);
      });
      return n.isErr() ? M(new wt(n.error.message, st.WATCH_FAILED, n.error)) : (this.watchId = n.value, this.config.enableIMUFusion && this.startIMUFusion(), G(this.watchId));
    }
    clearWatch(t) {
      this.stopIMUFusion();
      const n = this.wrappedProvider.clearWatch(t);
      return n.isErr() ? M(new wt(n.error.message, st.CLEAR_WATCH_FAILED, n.error)) : (this.watchId = null, this.lastGPSReading = null, G(void 0));
    }
    isSupported() {
      return this.wrappedProvider.isSupported();
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
        timestamp: Date.now()
      };
      this.kalmanFilter.updateWithIMU(n), this.imuCallback && this.imuCallback(n);
    }
    getKalmanState() {
      return this.kalmanFilter.getState();
    }
    async applyKalmanFilter(t) {
      const n = {
        latitude: t.coords.latitude,
        longitude: t.coords.longitude,
        accuracy: t.coords.accuracy,
        timestamp: t.timestamp
      };
      await this.kalmanFilter.updateWithGPS(n), this.lastGPSReading = t;
      let i;
      try {
        i = await this.kalmanFilter.getFilteredPosition();
      } catch (c) {
        console.warn("[KalmanGeolocationProvider] Filter not initialized, returning raw position:", c), i = {
          latitude: t.coords.latitude,
          longitude: t.coords.longitude
        };
      }
      let l = t.coords.accuracy;
      try {
        const c = this.kalmanFilter.getState(), f = c.covariance.get(0, 0), h = c.covariance.get(1, 1);
        l = Math.sqrt(f + h) * Math.sqrt(2 * Math.log(20));
      } catch (c) {
        console.warn("[KalmanGeolocationProvider] Cannot calculate filtered accuracy, using original:", c);
      }
      return {
        coords: {
          latitude: i.latitude,
          longitude: i.longitude,
          accuracy: Math.max(l, 1),
          altitude: t.coords.altitude,
          altitudeAccuracy: t.coords.altitudeAccuracy,
          heading: t.coords.heading,
          speed: t.coords.speed,
          toJSON: () => ({
            latitude: i.latitude,
            longitude: i.longitude,
            accuracy: Math.max(l, 1),
            altitude: t.coords.altitude,
            altitudeAccuracy: t.coords.altitudeAccuracy,
            heading: t.coords.heading,
            speed: t.coords.speed
          })
        },
        timestamp: Date.now()
      };
    }
    startIMUFusion() {
      this.imuUpdateTimer === null && (this.imuUpdateTimer = window.setInterval(() => {
      }, this.config.imuUpdateInterval));
    }
    stopIMUFusion() {
      this.imuUpdateTimer !== null && (clearInterval(this.imuUpdateTimer), this.imuUpdateTimer = null);
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
      return this.initialized ? G(void 0) : this.isSupported() ? (this.initialized = true, G(void 0)) : M(new yt("Device orientation is not supported by this browser"));
    }
    async start() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      if (this.isWatching) return G(void 0);
      try {
        return window.addEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = true, G(void 0);
      } catch (t) {
        return M(new yt("Failed to start device orientation", void 0, t));
      }
    }
    stop() {
      if (!this.isWatching) return G(void 0);
      try {
        return window.removeEventListener("deviceorientation", this.boundHandleOrientationEvent, true), this.isWatching = false, this.lastReading = null, G(void 0);
      } catch (t) {
        return M(new yt("Failed to stop device orientation", void 0, t));
      }
    }
    async getCurrentOrientation() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      return G(this.lastReading);
    }
    onOrientationChange(t) {
      const n = this.nextListenerId++;
      return this.listeners.set(n, t), !this.isWatching && this.listeners.size === 1 && this.start().catch(console.error), this.lastReading && t(this.lastReading), n;
    }
    removeEventListener(t) {
      return this.listeners.delete(t) && this.listeners.size === 0 && this.stop(), G(void 0);
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
      } catch (l) {
        console.error("Error in device orientation callback:", l);
      }
    }
  }
  class Mc {
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
      return this.initialized ? G(void 0) : this.isSupported() ? ("DeviceOrientationEvent" in window && window.addEventListener("deviceorientation", this.handleOrientationEvent.bind(this)), this.initialized = true, G(void 0)) : M(new yt("Device motion is not supported by this browser"));
    }
    async startAcceleration(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return M(n.error);
      }
      if (this.isAccelerationActive) return G(void 0);
      this.normalizeAccelerationToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isAccelerationActive = true, G(void 0);
      } catch (n) {
        return M(new yt("Failed to start acceleration monitoring", void 0, n));
      }
    }
    async startGyroscope(t = {}) {
      if (!this.initialized) {
        const n = await this.init();
        if (n.isErr()) return M(n.error);
      }
      if (this.isGyroscopeActive) return G(void 0);
      this.normalizeGyroscopeToENU = t.normalizeToENU ?? false;
      try {
        return this.motionEventListenerCount === 0 && window.addEventListener("devicemotion", this.handleMotionEvent.bind(this), true), this.motionEventListenerCount++, this.isGyroscopeActive = true, G(void 0);
      } catch (n) {
        return M(new yt("Failed to start gyroscope monitoring", void 0, n));
      }
    }
    stopAcceleration() {
      if (!this.isAccelerationActive) return G(void 0);
      try {
        return this.motionEventListenerCount--, this.isAccelerationActive = false, this.lastAccelerationReading = null, this.normalizeAccelerationToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.handleMotionEvent.bind(this), true), G(void 0);
      } catch (t) {
        return M(new yt("Failed to stop acceleration monitoring", void 0, t));
      }
    }
    stopGyroscope() {
      if (!this.isGyroscopeActive) return G(void 0);
      try {
        return this.motionEventListenerCount--, this.isGyroscopeActive = false, this.lastGyroscopeReading = null, this.normalizeGyroscopeToENU = false, this.motionEventListenerCount === 0 && window.removeEventListener("devicemotion", this.handleMotionEvent.bind(this), true), G(void 0);
      } catch (t) {
        return M(new yt("Failed to stop gyroscope monitoring", void 0, t));
      }
    }
    async getAccelerationReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      return G(this.lastAccelerationReading);
    }
    async getGyroscopeReading() {
      if (!this.initialized) {
        const t = await this.init();
        if (t.isErr()) return M(t.error);
      }
      return G(this.lastGyroscopeReading);
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
      return this.accelerationListeners.delete(t), this.gyroscopeListeners.delete(t), G(void 0);
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
            timestamp: Date.now()
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
            timestamp: Date.now()
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
      const i = n.alpha * Math.PI / 180, l = n.beta * Math.PI / 180, c = n.gamma * Math.PI / 180, f = Math.cos(i), h = Math.sin(i), p = Math.cos(l), v = Math.sin(l), w = Math.cos(c), I = Math.sin(c), P = t.x * f - t.y * h, R = t.x * h + t.y * f, k = t.z, L = P * p + k * v, B = R, F = -P * v + k * p, U = L, ne = B * w - F * I, W = B * I + F * w;
      return {
        x: U,
        y: ne,
        z: W,
        timestamp: t.timestamp
      };
    }
    estimateGravityVector(t) {
      const i = t.alpha * Math.PI / 180, l = t.beta * Math.PI / 180, c = t.gamma * Math.PI / 180, f = Math.cos(i), h = Math.sin(i), p = Math.sin(l), v = Math.cos(c), w = Math.sin(c), I = 9.81 * (p * v), P = 9.81 * (h * p * w + f * v), R = 9.81 * (f * p * w - h * v);
      return {
        x: I,
        y: P,
        z: R,
        timestamp: Date.now()
      };
    }
  }
  const _Er = class _Er {
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
      if (!_Er.instance) {
        const n = Va.getPlatformContext(), i = new _Er(n), l = i.initializeProviders(t);
        if (l.isErr()) return M(l.error);
        _Er.instance = i;
      }
      return G(_Er.instance);
    }
    initializeProviders(t) {
      var _a2;
      try {
        return this.storageProvider = this.createStorageProvider(t == null ? void 0 : t.storage), this.imuProvider = this.createIMUProvider(), this.deviceOrientationProvider = this.createDeviceOrientationProvider(), this.geolocationProvider = this.createGeolocationProvider(t == null ? void 0 : t.geolocation), ((_a2 = t == null ? void 0 : t.geolocation) == null ? void 0 : _a2.enableKalmanFilter) && this.geolocationProvider instanceof $s && this.imuProvider && this.setupIMUFusion(), this.fileProvider = this.createFileProvider(), this.initialized = true, G(void 0);
      } catch (n) {
        return M(new Dr("Failed to initialize platform providers", yr.DETECTION_FAILED, n));
      }
    }
    createStorageProvider(t) {
      switch (this.context.environment) {
        case ot.TAURI:
          return new Nb((t == null ? void 0 : t.tauriStorePath) || "user-data.json");
        case ot.WEB:
        case ot.MOBILE_WEB:
        default:
          return new Mb((t == null ? void 0 : t.webDbName) || "trackmaker-db", (t == null ? void 0 : t.webStoreName) || "user-data");
      }
    }
    createGeolocationProvider(t) {
      let n;
      switch (this.context.environment) {
        case ot.TAURI:
          n = new Lb((t == null ? void 0 : t.tauriHandlerName) || "get_geolocation");
          break;
        case ot.WEB:
        case ot.MOBILE_WEB:
        default:
          n = new kb();
          break;
      }
      return (t == null ? void 0 : t.enableKalmanFilter) ? new $s(n, t.kalmanConfig) : n;
    }
    setupIMUFusion() {
      !(this.geolocationProvider instanceof $s) || !this.imuProvider || this.imuProvider.init().then((t) => {
        if (t.isErr()) {
          console.warn("Failed to initialize IMU provider for Kalman fusion:", t.error.message);
          return;
        }
        if (!this.imuProvider) {
          console.warn("IMU provider became unavailable during initialization");
          return;
        }
        this.imuProvider.startAcceleration({
          frequency: 10,
          normalizeToENU: true
        }).then((n) => {
          if (n.isErr()) {
            console.warn("Failed to start acceleration for Kalman fusion:", n.error.message);
            return;
          }
          if (!this.imuProvider) {
            console.warn("IMU provider became unavailable during acceleration setup");
            return;
          }
          this.imuProvider.onAccelerationReading((i) => {
            const l = this.geolocationProvider;
            l.updateWithIMU && l.updateWithIMU({
              x: i.x,
              y: i.y,
              z: i.z
            });
          });
        });
      }).catch((t) => {
        console.warn("Failed to set up IMU fusion for Kalman filter:", t);
      });
    }
    createFileProvider() {
      return {
        init: async () => M(new yt("File provider not implemented")),
        readFile: async () => M(new yt("File provider not implemented")),
        writeFile: async () => M(new yt("File provider not implemented")),
        deleteFile: async () => M(new yt("File provider not implemented")),
        listFiles: async () => M(new yt("File provider not implemented")),
        exists: async () => M(new yt("File provider not implemented")),
        isSupported: () => false
      };
    }
    createIMUProvider() {
      switch (this.context.environment) {
        case ot.TAURI:
          return new Mc();
        case ot.WEB:
        case ot.MOBILE_WEB:
        default:
          return new Mc();
      }
    }
    createDeviceOrientationProvider() {
      switch (this.context.environment) {
        case ot.TAURI:
          return new Nc();
        case ot.WEB:
        case ot.MOBILE_WEB:
        default:
          return new Nc();
      }
    }
    getContext() {
      return this.context;
    }
    getStorage() {
      return this.storageProvider ? G(this.storageProvider) : M(new Dr("Storage provider not initialized", yr.DETECTION_FAILED));
    }
    getGeolocation() {
      return this.geolocationProvider ? G(this.geolocationProvider) : M(new Dr("Geolocation provider not initialized", yr.DETECTION_FAILED));
    }
    getFile() {
      return this.fileProvider ? G(this.fileProvider) : M(new Dr("File provider not initialized", yr.DETECTION_FAILED));
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
      _Er.instance = null;
    }
    getGeolocationProvider() {
      return this.geolocationProvider;
    }
    getIMU() {
      return this.imuProvider ? G(this.imuProvider) : M(new Dr("IMU provider not initialized", yr.DETECTION_FAILED));
    }
    getDeviceOrientation() {
      return this.deviceOrientationProvider ? G(this.deviceOrientationProvider) : M(new Dr("Device orientation provider not initialized", yr.DETECTION_FAILED));
    }
  };
  __publicField(_Er, "instance", null);
  let Er = _Er;
  Wi = function(e) {
    return Er.getInstance(e);
  };
  tv = function() {
    return Va.detectEnvironment() === ot.TAURI;
  };
  class nv {
    constructor() {
      __publicField(this, "permissionChangeListeners", /* @__PURE__ */ new Set());
      __publicField(this, "currentPermissionState", null);
      __publicField(this, "platformGeolocationProvider", null);
    }
    async getPermissionStatus() {
      if (this.platformGeolocationProvider) try {
        const t = await this.platformGeolocationProvider.getPermissionStatus();
        return t.isOk() ? (this.currentPermissionState = t.value, G(t.value)) : M(new Cr("Failed to get permission status from platform provider", t.error));
      } catch (t) {
        return M(new Cr("Platform provider permission check error", t));
      }
      if (!navigator.geolocation) return M(new cb("Geolocation is not supported by this browser"));
      try {
        if (!navigator.permissions) return this.fallbackPermissionCheck();
        const t = await navigator.permissions.query({
          name: "geolocation"
        });
        return this.currentPermissionState = t.state, G(t.state);
      } catch (t) {
        return M(new Cr("Failed to get permission status", t));
      }
    }
    async fallbackPermissionCheck() {
      return new Promise((t) => {
        navigator.geolocation.getCurrentPosition(() => t(G("granted")), (n) => {
          n.code === n.PERMISSION_DENIED ? t(G("denied")) : t(G("prompt"));
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
        return n.isOk() ? (this.currentPermissionState = n.value, G(n.value)) : M(new Cr("Failed to request permission from platform provider", n.error));
      } catch (n) {
        return M(new Cr("Platform provider permission request error", n));
      }
      if (!navigator.permissions) return this.getPermissionStatus();
      try {
        const n = await navigator.permissions.query({
          name: "geolocation"
        });
        if (n.state === "prompt" && t && await t(n.state)) {
          const l = await this.fallbackPermissionCheck();
          if (l.isOk()) return this.currentPermissionState = l.value, G(l.value);
        }
        return this.currentPermissionState = n.state, G(n.state);
      } catch (n) {
        return M(new Cr("Failed to request permission", n));
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
  class lo {
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
  var $f = ((e) => (e[e.PERMISSION_DENIED = 1] = "PERMISSION_DENIED", e[e.POSITION_UNAVAILABLE = 2] = "POSITION_UNAVAILABLE", e[e.TIMEOUT = 3] = "TIMEOUT", e[e.UNKNOWN = 4] = "UNKNOWN", e[e.IOS_HTTPS_REQUIRED = 5] = "IOS_HTTPS_REQUIRED", e[e.FIREFOX_PERMISSION_ISSUE = 6] = "FIREFOX_PERMISSION_ISSUE", e))($f || {});
  const nr = [];
  function rv(e) {
    const t = {
      id: (nr.length > 0 ? nr[nr.length - 1].id : 0) + 1,
      callback: e
    };
    return nr.push(t), t.id;
  }
  function iv(e) {
    nr.splice(nr.findIndex((t) => t.id === e), 1);
  }
  let co = -1, Lc = {
    latitude: 0,
    longitude: 0
  };
  const Cc = "https://ipapi.co/json/";
  class ov {
    async getPermissionStatus() {
      try {
        return await fetch(Cc), "granted";
      } catch {
        return "denied";
      }
    }
    async fetchRaw(t = 1e4) {
      const n = new Promise(async (l, c) => {
        try {
          const f = await fetch(Cc);
          if (!f.ok) throw new Error(`HTTP error! Status: ${f.status}`);
          l(f.json());
        } catch {
          c(new Error("Failed to fetch IP geolocation data"));
        }
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
      return console.info("[geolocation] Successfully retrieved current position from IP"), {
        latitude: t.latitude,
        longitude: t.longitude
      };
    }
    watchPosition(t) {
      console.info("[geolocation] Starting IP geolocation watch");
      const n = rv(t);
      return new Promise((i) => {
        if (co === -1) {
          const l = () => {
            this.getCurrentPosition().then((c) => {
              Jy(c, Lc) || (console.info("[geolocation] IP geolocation position updated"), nr.forEach((f) => f.callback(c)), Lc = kt(c));
            }).catch((c) => {
              throw console.error("[geolocation] Error in IP geolocation watch:", c), new Error(`Error while watching the geolocation [IP]. Code: ${$f.UNKNOWN}, Msg: ${c}`);
            });
          };
          co = setInterval(() => l(), 2e4), console.info("[geolocation] IP geolocation watch interval started"), l();
        }
        i(n);
      });
    }
    clearWatch(t) {
      console.info("[geolocation] Clearing IP geolocation watch handler"), iv(t), nr.length === 0 && (console.info("[geolocation] Stopping IP geolocation watch interval"), clearInterval(co), co = -1);
    }
  }
  sv = class {
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
      this.permissionService = t || new nv(), this.ipBackend = new ov();
    }
    async initialize(t) {
      if (this.isInitialized) return console.info("[GeolocationManager] Already initialized"), G(void 0);
      console.info("[GeolocationManager] Initializing geolocation services with location trail strategy");
      try {
        const n = Wi();
        if (n.isErr()) return console.warn("[GeolocationManager] Failed to get platform services, will try IP backend"), await this.initializeWithIPBackend();
        const i = n.value.getGeolocation();
        if (i.isErr()) return console.warn("[GeolocationManager] Failed to get geolocation provider, will try IP backend"), await this.initializeWithIPBackend();
        if (this.platformGeolocationProvider = i.value, (await this.platformGeolocationProvider.init()).isErr()) return console.warn("[GeolocationManager] Failed to initialize platform provider, will try IP backend"), await this.initializeWithIPBackend();
        this.permissionService.setPlatformProvider(this.platformGeolocationProvider);
        const c = await this.permissionService.getPermissionStatus();
        if (c.isErr()) return ft(c.error, "GeolocationManager.initialize.permission"), console.warn("[GeolocationManager] Failed to get permission status, will try IP backend"), await this.initializeWithIPBackend();
        const f = c.value;
        if (f === "prompt" && t && await t(f)) {
          const v = await this.platformGeolocationProvider.requestPermission();
          if (v.isErr()) return ft(v.error, "GeolocationManager.initialize.requestPermission"), console.warn("[GeolocationManager] Failed to request permission, will try IP backend"), await this.initializeWithIPBackend();
        }
        console.info("[GeolocationManager] Attempting to get location via platform provider (GPS)");
        const h = await this.tryGetGPSLocation();
        if (h.isOk()) console.info("[GeolocationManager] Successfully got location via GPS, using platform provider"), this.currentBackend = "platform", this.lastKnownLocation = h.value;
        else return console.warn("[GeolocationManager] Failed to get location via GPS, falling back to IP backend"), await this.initializeWithIPBackend();
        return this.permissionService.addPermissionChangeListener(async (p) => {
          console.info(`[GeolocationManager] Permission changed to: ${p}`), p === "denied" && this.isWatching && this.watchId !== null && this.stopLocationUpdates(this.watchId);
        }), this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using platform provider"), G(void 0);
      } catch {
        return console.warn("[GeolocationManager] Exception during platform initialization, will try IP backend"), await this.initializeWithIPBackend();
      }
    }
    async tryGetGPSLocation() {
      if (!this.platformGeolocationProvider) return M(new it("No platform geolocation provider available", "no_platform_provider"));
      try {
        const t = await this.platformGeolocationProvider.getCurrentPosition();
        if (t.isOk()) {
          const n = t.value;
          return G(new lo(n.coords.latitude, n.coords.longitude, n.coords.accuracy));
        } else return M(new it("Failed to get location from platform provider", "platform_location_failed", t.error));
      } catch (t) {
        return M(new it("Exception while getting location from platform provider", "platform_location_exception", t));
      }
    }
    async initializeWithIPBackend() {
      if (console.info("[GeolocationManager] Initializing with IP backend as fallback"), !this.ipBackend) return M(new it("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Successfully got location via IP backend"), this.currentBackend = "ip", this.lastKnownLocation = t, this.isInitialized = true, console.info("[GeolocationManager] Geolocation services initialized successfully using IP backend"), G(void 0);
      } catch (t) {
        const n = new it("Failed to initialize geolocation manager with IP backend", "ip_backend_failed", t);
        return ft(n, "GeolocationManager.initializeWithIPBackend"), M(n);
      }
    }
    async getCurrentLocation() {
      if (!this.isInitialized) {
        const t = new it("Geolocation manager not initialized", "not_initialized");
        return ft(t, "GeolocationManager.getCurrentLocation"), M(t);
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
      return M(new it("No working geolocation backend available", "no_working_backend"));
    }
    async getLocationFromPlatformProvider() {
      if (!this.platformGeolocationProvider) return M(new it("Platform geolocation provider not available", "platform_provider_unavailable"));
      const t = await this.platformGeolocationProvider.getCurrentPosition();
      if (t.isOk()) {
        const n = t.value, i = new lo(n.coords.latitude, n.coords.longitude, n.coords.accuracy);
        return console.info("[GeolocationManager] Location retrieved from platform provider"), this.doLocationUpdate(i), G(i);
      } else return ft(t.error, "GeolocationManager.getLocationFromPlatformProvider"), M(new it("Failed to get location from platform provider", "platform_provider_failed", t.error));
    }
    async getLocationFromIPBackend() {
      if (!this.ipBackend) return M(new it("IP backend not available", "ip_backend_unavailable"));
      try {
        const t = await this.ipBackend.getCurrentPosition();
        return console.info("[GeolocationManager] Location retrieved from IP backend"), this.doLocationUpdate(t), G(t);
      } catch (t) {
        const n = Vt(t, "Failed to get location from IP backend");
        return ft(n, "GeolocationManager.getLocationFromIPBackend"), M(new it("Failed to get location from IP backend", "ip_backend_failed", n));
      }
    }
    async startLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new it("Geolocation manager not initialized", "not_initialized");
        return ft(n, "GeolocationManager.startLocationUpdates"), M(n);
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
      return M(new it("No working geolocation backend available for location updates", "no_working_backend_for_updates"));
    }
    async startPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return M(new it("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = await this.platformGeolocationProvider.watchPosition((i) => {
        const l = new lo(i.coords.latitude, i.coords.longitude, i.coords.accuracy);
        this.doLocationUpdate(l), t(l);
      });
      return n.isOk() ? (console.info("[GeolocationManager] Location updates started via platform provider"), this.isWatching = true, this.watchId = n.value, G(n.value)) : M(new it("Failed to start location updates via platform provider", "platform_watch_failed", n.error));
    }
    async startIPLocationUpdates(t) {
      if (!this.ipBackend) return M(new it("IP backend not available", "ip_backend_unavailable"));
      try {
        const n = await this.ipBackend.watchPosition((i) => {
          this.lastKnownLocation = i, this.doLocationUpdate(i), t(i);
        });
        return console.info("[GeolocationManager] Location updates started via IP backend"), this.isWatching = true, this.watchId = n, G(n);
      } catch (n) {
        const i = Vt(n, "Failed to start location updates via IP backend");
        return ft(i, "GeolocationManager.startIPLocationUpdates"), M(new it("Failed to start location updates via IP backend", "ip_watch_failed", i));
      }
    }
    stopLocationUpdates(t) {
      if (!this.isInitialized) {
        const n = new it("Geolocation manager not initialized", "not_initialized");
        return ft(n, "GeolocationManager.stopLocationUpdates"), M(n);
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
        return M(n || new it("No working geolocation backend available for stopping updates", "no_working_backend_for_stop"));
      }
    }
    stopPlatformLocationUpdates(t) {
      if (!this.platformGeolocationProvider) return M(new it("Platform geolocation provider not available", "platform_provider_unavailable"));
      const n = this.platformGeolocationProvider.clearWatch(t);
      return n.isOk() ? (console.info("[GeolocationManager] Location updates stopped via platform provider"), this.isWatching = false, this.watchId = null, G(void 0)) : M(new it("Failed to stop location updates via platform provider", "platform_clear_watch_failed", n.error));
    }
    stopIPLocationUpdates(t) {
      if (!this.ipBackend) return M(new it("IP backend not available", "ip_backend_unavailable"));
      try {
        return this.ipBackend.clearWatch(t), console.info("[GeolocationManager] Location updates stopped via IP backend"), this.isWatching = false, this.watchId = null, G(void 0);
      } catch (n) {
        const i = Vt(n, "Failed to stop location updates via IP backend");
        return ft(i, "GeolocationManager.stopIPLocationUpdates"), M(new it("Failed to stop location updates via IP backend", "ip_clear_watch_failed", i));
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
      return this.lastKnownLocation ? this.lastKnownLocation : (console.warn("[GeolocationManager] No known location available - returning default coordinates (0, 0)"), new lo(0, 0));
    }
    addLocationListener(t) {
      const n = +`${Date.now()} + ${Math.floor(Math.random() * 1e4)}`;
      return this.locationUpdateCallbacks.set(n, t), n;
    }
    removeLocationListener(t) {
      this.locationUpdateCallbacks.delete(t);
    }
    doLocationUpdate(t) {
      this.lastKnownLocation = kt(t), this.locationUpdateCallbacks.forEach((n) => n(kt(t)));
    }
    getPermissionStatus() {
      return this.permissionService.currentPermission;
    }
    async refreshBackend() {
      return G(void 0);
    }
  };
  class av extends Nr {
    constructor(t, n, i) {
      super(t, i);
      __publicField(this, "domain", Zr.UPDATE_SERVICE);
      this.code = n, this.name = "ImuError";
    }
  }
  class Ve extends av {
    constructor(t, n, i) {
      super(t, n, i), this.name = "ImuUpdateServiceError";
    }
  }
  class lv {
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
      if (this.isInitialized) return console.info("[ImuOrientationManager] Already initialized"), G(void 0);
      console.info("[ImuOrientationManager] Initializing IMU and orientation services");
      try {
        const t = Wi();
        if (t.isErr()) return M(new Ve("Failed to get platform services", "platform_services_failed", t.error));
        const n = t.value.getDeviceOrientation();
        if (n.isOk()) {
          this.orientationProvider = n.value;
          const l = await this.orientationProvider.init();
          if (l.isErr()) console.warn("[ImuOrientationManager] Failed to initialize orientation provider:", l.error);
          else {
            const c = await this.orientationProvider.getCurrentOrientation();
            c.isOk() && c.value && (this.lastKnownOrientation = c.value);
          }
        } else console.warn("[ImuOrientationManager] No orientation provider available");
        const i = t.value.getIMU();
        if (i.isOk()) {
          this.motionProvider = i.value;
          const l = await this.motionProvider.init();
          if (l.isErr()) console.warn("[ImuOrientationManager] Failed to initialize motion provider:", l.error);
          else {
            const c = await this.motionProvider.getAccelerationReading();
            c.isOk() && c.value && (this.lastKnownAcceleration = c.value);
            const f = await this.motionProvider.getGyroscopeReading();
            f.isOk() && f.value && (this.lastKnownGyroscope = f.value);
          }
        } else console.warn("[ImuOrientationManager] No motion provider available");
        return this.isInitialized = true, console.info("[ImuOrientationManager] Initialization complete"), G(void 0);
      } catch (t) {
        const n = Vt(t, "Exception during IMU initialization");
        return ft(n, "ImuOrientationManager.initialize"), M(new Ve("Initialization exception", "initialization_exception", n));
      }
    }
    async getCurrentOrientation() {
      if (!this.isInitialized) return M(new Ve("Manager not initialized", "not_initialized"));
      if (!this.orientationProvider) return M(new Ve("Orientation provider unavailable", "no_orientation_provider"));
      try {
        const t = await this.orientationProvider.getCurrentOrientation();
        return t.isOk() ? (t.value && (this.lastKnownOrientation = kt(t.value), this.notifyOrientationListeners(t.value)), G(t.value)) : M(new Ve("Failed to get orientation", "get_orientation_failed", t.error));
      } catch (t) {
        const n = Vt(t, "Exception getting orientation");
        return ft(n, "ImuOrientationManager.getCurrentOrientation"), M(new Ve("Orientation exception", "orientation_exception", n));
      }
    }
    async startOrientationUpdates(t) {
      if (!this.isInitialized) {
        const n = await this.initialize();
        if (n.isErr()) return M(n.error);
      }
      if (!this.orientationProvider) return M(new Ve("Orientation provider unavailable", "no_orientation_provider"));
      try {
        if (this.orientationListenerCount === 0) {
          const l = await this.orientationProvider.start();
          if (l.isErr()) return M(new Ve("Failed to start orientation provider", "start_orientation_failed", l.error));
        }
        const n = (l) => {
          this.doOrientationUpdate(l), t(l);
        }, i = this.orientationProvider.onOrientationChange(n);
        return this.orientationListeners.set(i, t), this.orientationListenerCount++, console.info("[ImuOrientationManager] Orientation updates started"), G(i);
      } catch (n) {
        const i = Vt(n, "Exception starting orientation updates");
        return ft(i, "ImuOrientationManager.startOrientationUpdates"), M(new Ve("Start orientation exception", "start_orientation_exception", i));
      }
    }
    stopOrientationUpdates(t) {
      if (!this.orientationProvider) return G(void 0);
      try {
        const n = this.orientationProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove orientation listener from provider:", n.error), this.orientationListeners.delete(t), this.orientationListenerCount > 0 && this.orientationListenerCount--, this.orientationListenerCount === 0 && (this.orientationProvider.stop(), console.info("[ImuOrientationManager] Orientation provider stopped")), console.info("[ImuOrientationManager] Orientation listener removed"), G(void 0);
      } catch (n) {
        const i = Vt(n, "Exception stopping orientation update");
        return ft(i, "ImuOrientationManager.stopOrientationUpdates"), M(new Ve("Stop orientation exception", "stop_orientation_exception", i));
      }
    }
    isOrientationServiceRunning() {
      return this.orientationListenerCount > 0;
    }
    getLastKnownOrientation() {
      return this.lastKnownOrientation ? kt(this.lastKnownOrientation) : null;
    }
    async getCurrentAcceleration() {
      if (!this.isInitialized) return M(new Ve("Manager not initialized", "not_initialized"));
      if (!this.motionProvider) return M(new Ve("Motion provider unavailable", "no_motion_provider"));
      try {
        const t = await this.motionProvider.getAccelerationReading();
        return t.isOk() ? (t.value && (this.lastKnownAcceleration = kt(t.value), this.notifyAccelerationListeners(t.value)), G(t.value)) : M(new Ve("Failed to get acceleration", "get_acceleration_failed", t.error));
      } catch (t) {
        const n = Vt(t, "Exception getting acceleration");
        return ft(n, "ImuOrientationManager.getCurrentAcceleration"), M(new Ve("Acceleration exception", "acceleration_exception", n));
      }
    }
    async startAccelerationUpdates(t = {}, n) {
      if (!this.isInitialized) {
        const i = await this.initialize();
        if (i.isErr()) return M(i.error);
      }
      if (!this.motionProvider) return M(new Ve("Motion provider unavailable", "no_motion_provider"));
      try {
        if (this.accelerationListenerCount === 0) {
          const c = await this.motionProvider.startAcceleration(t);
          if (c.isErr()) return M(new Ve("Failed to start acceleration provider", "start_acceleration_failed", c.error));
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
        return this.accelerationListeners.set(l, n), this.accelerationListenerCount++, console.info("[ImuOrientationManager] Acceleration updates started"), G(l);
      } catch (i) {
        const l = Vt(i, "Exception starting acceleration updates");
        return ft(l, "ImuOrientationManager.startAccelerationUpdates"), M(new Ve("Start acceleration exception", "start_acceleration_exception", l));
      }
    }
    stopAccelerationUpdates(t) {
      if (!this.motionProvider) return G(void 0);
      try {
        const n = this.motionProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove acceleration listener from provider:", n.error), this.accelerationListeners.delete(t), this.accelerationListenerCount > 0 && this.accelerationListenerCount--, this.accelerationListenerCount === 0 && (this.motionProvider.stopAcceleration(), this.lastKnownAcceleration = null, console.info("[ImuOrientationManager] Acceleration provider stopped")), console.info("[ImuOrientationManager] Acceleration listener removed"), G(void 0);
      } catch (n) {
        const i = Vt(n, "Exception stopping acceleration update");
        return ft(i, "ImuOrientationManager.stopAccelerationUpdates"), M(new Ve("Stop acceleration exception", "stop_acceleration_exception", i));
      }
    }
    isAccelerationServiceRunning() {
      return this.accelerationListenerCount > 0;
    }
    getLastKnownAcceleration() {
      return this.lastKnownAcceleration ? kt(this.lastKnownAcceleration) : null;
    }
    async getCurrentGyroscope() {
      if (!this.isInitialized) return M(new Ve("Manager not initialized", "not_initialized"));
      if (!this.motionProvider) return M(new Ve("Motion provider unavailable", "no_motion_provider"));
      try {
        const t = await this.motionProvider.getGyroscopeReading();
        return t.isOk() ? (t.value && (this.lastKnownGyroscope = kt(t.value), this.notifyGyroscopeListeners(t.value)), G(t.value)) : M(new Ve("Failed to get gyroscope", "get_gyroscope_failed", t.error));
      } catch (t) {
        const n = Vt(t, "Exception getting gyroscope");
        return ft(n, "ImuOrientationManager.getCurrentGyroscope"), M(new Ve("Gyroscope exception", "gyroscope_exception", n));
      }
    }
    async startGyroscopeUpdates(t = {}, n) {
      if (!this.isInitialized) {
        const i = await this.initialize();
        if (i.isErr()) return M(i.error);
      }
      if (!this.motionProvider) return M(new Ve("Motion provider unavailable", "no_motion_provider"));
      try {
        if (this.gyroscopeListenerCount === 0) {
          const c = await this.motionProvider.startGyroscope(t);
          if (c.isErr()) return M(new Ve("Failed to start gyroscope provider", "start_gyroscope_failed", c.error));
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
        return this.gyroscopeListeners.set(l, n), this.gyroscopeListenerCount++, console.info("[ImuOrientationManager] Gyroscope updates started"), G(l);
      } catch (i) {
        const l = Vt(i, "Exception starting gyroscope updates");
        return ft(l, "ImuOrientationManager.startGyroscopeUpdates"), M(new Ve("Start gyroscope exception", "start_gyroscope_exception", l));
      }
    }
    stopGyroscopeUpdates(t) {
      if (!this.motionProvider) return G(void 0);
      try {
        const n = this.motionProvider.removeEventListener(t);
        return n.isErr() && console.warn("[ImuOrientationManager] Failed to remove gyroscope listener from provider:", n.error), this.gyroscopeListeners.delete(t), this.gyroscopeListenerCount > 0 && this.gyroscopeListenerCount--, this.gyroscopeListenerCount === 0 && (this.motionProvider.stopGyroscope(), this.lastKnownGyroscope = null, console.info("[ImuOrientationManager] Gyroscope provider stopped")), console.info("[ImuOrientationManager] Gyroscope listener removed"), G(void 0);
      } catch (n) {
        const i = Vt(n, "Exception stopping gyroscope update");
        return ft(i, "ImuOrientationManager.stopGyroscopeUpdates"), M(new Ve("Stop gyroscope exception", "stop_gyroscope_exception", i));
      }
    }
    isGyroscopeServiceRunning() {
      return this.gyroscopeListenerCount > 0;
    }
    getLastKnownGyroscope() {
      return this.lastKnownGyroscope ? kt(this.lastKnownGyroscope) : null;
    }
    async getCurrentMotion() {
      const [t, n] = await Promise.all([
        this.getCurrentAcceleration(),
        this.getCurrentGyroscope()
      ]);
      return t.isErr() && n.isErr() ? M(t.error) : G({
        acceleration: t.isOk() ? t.value : null,
        gyroscope: n.isOk() ? n.value : null
      });
    }
    getLastKnownMotion() {
      return !this.lastKnownAcceleration && !this.lastKnownGyroscope ? null : {
        acceleration: this.lastKnownAcceleration ? kt(this.lastKnownAcceleration) : null,
        gyroscope: this.lastKnownGyroscope ? kt(this.lastKnownGyroscope) : null
      };
    }
    isMotionServiceRunning() {
      return this.isAccelerationServiceRunning() || this.isGyroscopeServiceRunning();
    }
    isSupported() {
      var _a2, _b2;
      if (!this.isInitialized) {
        const t = Wi();
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
      this.lastKnownOrientation = kt(t), this.notifyOrientationListeners(t);
    }
    doAccelerationUpdate(t) {
      this.lastKnownAcceleration = kt(t), this.notifyAccelerationListeners(t);
    }
    doGyroscopeUpdate(t) {
      this.lastKnownGyroscope = kt(t), this.notifyGyroscopeListeners(t);
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
  fi = new lv();
  let Bf;
  const us = (e) => Bf = e, zf = Symbol();
  function ga(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Ni;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Ni || (Ni = {}));
  function Hf() {
    const e = qc(true), t = e.run(() => nn({}));
    let n = [], i = [];
    const l = Pa({
      install(c) {
        us(l), l._a = c, c.provide(zf, l), c.config.globalProperties.$pinia = l, i.forEach((f) => n.push(f)), i = [];
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
  const Vf = () => {
  };
  function kc(e, t, n, i = Vf) {
    e.add(t);
    const l = () => {
      e.delete(t) && i();
    };
    return !n && Yc() && wh(l), l;
  }
  function jr(e, ...t) {
    e.forEach((n) => {
      n(...t);
    });
  }
  const cv = (e) => e(), xc = Symbol(), Bs = Symbol();
  function ma(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, i) => e.set(i, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const i = t[n], l = e[n];
      ga(l) && ga(i) && e.hasOwnProperty(n) && !at(i) && !rr(i) ? e[n] = ma(l, i) : e[n] = i;
    }
    return e;
  }
  const uv = Symbol();
  function fv(e) {
    return !ga(e) || !Object.prototype.hasOwnProperty.call(e, uv);
  }
  const { assign: Kn } = Object;
  function hv(e) {
    return !!(at(e) && e.effect);
  }
  function dv(e, t, n, i) {
    const { state: l, actions: c, getters: f } = t, h = n.state.value[e];
    let p;
    function v() {
      h || (n.state.value[e] = l ? l() : {});
      const w = Bh(n.state.value[e]);
      return Kn(w, c, Object.keys(f || {}).reduce((I, P) => (I[P] = Pa(ja(() => {
        us(n);
        const R = n._s.get(e);
        return f[P].call(R, R);
      })), I), {}));
    }
    return p = qf(e, v, t, n, i, true), p;
  }
  function qf(e, t, n = {}, i, l, c) {
    let f;
    const h = Kn({
      actions: {}
    }, n), p = {
      deep: true
    };
    let v, w, I = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set(), R;
    const k = i.state.value[e];
    !c && !k && (i.state.value[e] = {}), nn({});
    let L;
    function B(me) {
      let ie;
      v = w = false, typeof me == "function" ? (me(i.state.value[e]), ie = {
        type: Ni.patchFunction,
        storeId: e,
        events: R
      }) : (ma(i.state.value[e], me), ie = {
        type: Ni.patchObject,
        payload: me,
        storeId: e,
        events: R
      });
      const we = L = Symbol();
      pu().then(() => {
        L === we && (v = true);
      }), w = true, jr(I, ie, i.state.value[e]);
    }
    const F = c ? function() {
      const { state: ie } = n, we = ie ? ie() : {};
      this.$patch((Pe) => {
        Kn(Pe, we);
      });
    } : Vf;
    function U() {
      f.stop(), I.clear(), P.clear(), i._s.delete(e);
    }
    const ne = (me, ie = "") => {
      if (xc in me) return me[Bs] = ie, me;
      const we = function() {
        us(i);
        const Pe = Array.from(arguments), fe = /* @__PURE__ */ new Set(), je = /* @__PURE__ */ new Set();
        function ct(Ne) {
          fe.add(Ne);
        }
        function $t(Ne) {
          je.add(Ne);
        }
        jr(P, {
          args: Pe,
          name: we[Bs],
          store: ue,
          after: ct,
          onError: $t
        });
        let He;
        try {
          He = me.apply(this && this.$id === e ? this : ue, Pe);
        } catch (Ne) {
          throw jr(je, Ne), Ne;
        }
        return He instanceof Promise ? He.then((Ne) => (jr(fe, Ne), Ne)).catch((Ne) => (jr(je, Ne), Promise.reject(Ne))) : (jr(fe, He), He);
      };
      return we[xc] = true, we[Bs] = ie, we;
    }, W = {
      _p: i,
      $id: e,
      $onAction: kc.bind(null, P),
      $patch: B,
      $reset: F,
      $subscribe(me, ie = {}) {
        const we = kc(I, me, ie.detached, () => Pe()), Pe = f.run(() => Br(() => i.state.value[e], (fe) => {
          (ie.flush === "sync" ? w : v) && me({
            storeId: e,
            type: Ni.direct,
            events: R
          }, fe);
        }, Kn({}, p, ie)));
        return we;
      },
      $dispose: U
    }, ue = Jo(W);
    i._s.set(e, ue);
    const Ae = (i._a && i._a.runWithContext || cv)(() => i._e.run(() => (f = qc()).run(() => t({
      action: ne
    }))));
    for (const me in Ae) {
      const ie = Ae[me];
      if (at(ie) && !hv(ie) || rr(ie)) c || (k && fv(ie) && (at(ie) ? ie.value = k[me] : ma(ie, k[me])), i.state.value[e][me] = ie);
      else if (typeof ie == "function") {
        const we = ne(ie, me);
        Ae[me] = we, h.actions[me] = ie;
      }
    }
    return Kn(ue, Ae), Kn(ke(ue), Ae), Object.defineProperty(ue, "$state", {
      get: () => i.state.value[e],
      set: (me) => {
        B((ie) => {
          Kn(ie, me);
        });
      }
    }), i._p.forEach((me) => {
      Kn(ue, f.run(() => me({
        store: ue,
        app: i._a,
        pinia: i,
        options: h
      })));
    }), k && c && n.hydrate && n.hydrate(ue.$state, k), v = true, w = true, ue;
  }
  Xv = function(e, t, n) {
    let i;
    const l = typeof t == "function";
    i = l ? n : t;
    function c(f, h) {
      const p = _d();
      return f = f || (p ? Si(zf, null) : null), f && us(f), f = Bf, f._s.has(e) || (l ? qf(e, t, i, f) : dv(e, i, f)), f._s.get(e);
    }
    return c.$id = e, c;
  };
  let Fc, pv, gv, mv, wv, yv, bv, vv, Ev, Iv, Tv, _v, Sv, Ov, Av, Rv, qa;
  Fc = [
    {
      name: "trackmaker",
      displayName: "TrackMaker",
      moduleInit: async () => {
        var _a2;
        const e = cf((await Ps(async () => {
          const { default: n } = await import("./App-DdEtSt2O.js");
          return {
            default: n
          };
        }, __vite__mapDeps([0,1,2,3]), import.meta.url)).default);
        e.use(Hf()), e.use((await Ps(async () => {
          const { default: n } = await import("./index-q4aC9eBH.js");
          return {
            default: n
          };
        }, __vite__mapDeps([4,2,1,5]), import.meta.url)).default), e.use((await Ps(async () => {
          const { i18n: n } = await import("./index-D5RKaK0N.js");
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
        await Gf();
      },
      dependencies: []
    },
    {
      name: "platform-services",
      displayName: "Platform Services",
      moduleInit: async () => {
        try {
          console.time("Platform services initialise");
          const e = Wi();
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
          if (!Wi()) throw new Error("Platform services not initialized");
          const t = new sv();
          console.time("Geolocation service initialise"), await t.initialize(async (n) => tv() ? void 0 : confirm(n === "prompt" ? "Later your browser will request permission to access your location." : "This app requires access to your location to track your movements.")), console.timeEnd("Geolocation service initialise"), console.time("Geolocation service start"), await t.startLocationUpdates((n) => {
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
          const e = await fi.initialize();
          if (e.isErr()) throw e.error;
          await fi.startOrientationUpdates(() => {
          }), await fi.startAccelerationUpdates({}, () => {
          }), await fi.startGyroscopeUpdates({}, () => {
          }), console.timeEnd("IMU & Orientation service initialise"), console.info("[IMU & Orientation] Service initialized successfully with initial values"), window.ImuOrientationManager = fi;
        } catch (e) {
          return console.error("[IMU & Orientation] Failed to initialize service:", e), Promise.reject(e);
        }
      },
      dependencies: [
        "platform-services"
      ]
    }
  ];
  Zv = nb;
  Qv = tb;
  pv = {
    class: "splash-container"
  };
  gv = {
    class: "splash-content"
  };
  mv = {
    key: 0,
    class: "loading-section"
  };
  wv = {
    class: "progress-container"
  };
  yv = {
    class: "progress-bar"
  };
  bv = {
    class: "progress-text"
  };
  vv = {
    class: "loading-details"
  };
  Ev = {
    class: "current-module"
  };
  Iv = {
    key: 1,
    class: "error-section"
  };
  Tv = {
    class: "error-message"
  };
  _v = {
    key: 0
  };
  Sv = {
    key: 1
  };
  Ov = {
    key: 2,
    class: "timeout-section"
  };
  Av = nd({
    __name: "SplashScreen",
    setup(e) {
      const t = nn(0), n = nn("Initializing..."), i = nn(""), l = nn(0), c = nn(0), f = nn(false), h = nn(false), p = nn(""), v = nn("light"), w = () => {
        try {
          window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? v.value = "dark" : v.value = "light";
        } catch {
          v.value = "light";
        }
      }, I = () => {
        v.value === "dark" ? document.documentElement.setAttribute("data-theme", "dark") : document.documentElement.setAttribute("data-theme", "light"), console.info("[Splash Screen] Theme applied:", v.value);
      }, P = ja(() => Math.round(t.value / 100 * 100)), R = {
        info: (...B) => {
          const F = B.join(" ");
          console.info(F), n.value = String(F);
        },
        warn: (...B) => {
          const F = B.join(" ");
          console.warn(F), n.value = String(F);
        },
        error: (...B) => {
          const F = B.join(" ");
          console.error(F), n.value = String(F), p.value = String(F);
        },
        debug: (...B) => {
          console.debug(...B);
        }
      }, k = {
        onModuleStart: (B) => {
          i.value = B, n.value = `Loading ${B}...`;
        },
        onModuleComplete: (B) => {
          c.value++, t.value = Math.min(100, c.value / l.value * 100), n.value = `Loaded ${B}`;
        },
        onModuleError: (B, F) => {
          n.value = `Failed to load ${B}`, p.value = F.message;
        },
        onOverallProgress: (B, F) => {
          l.value = F, c.value = B, t.value = Math.min(100, B / F * 100);
        }
      }, L = () => {
        window.location.reload();
      };
      return zi(() => {
        var _a2;
        w(), I(), (_a2 = document.getElementById("pre-splash")) == null ? void 0 : _a2.remove();
        const B = (F, U = /* @__PURE__ */ new Set()) => {
          if (U.has(F)) return 0;
          U.add(F);
          const ne = Fc.find((ue) => ue.name === F);
          if (!ne) return 0;
          let W = 1;
          if (ne.dependencies) for (const ue of ne.dependencies) W += B(ue, U);
          return W;
        };
        l.value = B("trackmaker"), console.log("=== Start Loading Modules ==="), Pf(Fc, "trackmaker", 3e4, {
          logger: R,
          progressReporter: k,
          printLog: false
        }).then(() => {
          n.value = "All modules loaded successfully", i.value = "TrackMaker", t.value = 100, console.log("=== All Modules Loaded ===");
        }).catch((F) => {
          const U = String(F.toString());
          if (U.toLowerCase().includes("timeout")) {
            const ne = U.split("Trackback").map((W) => W.replace(/((^:\s*)|(,\s*$))/g, ""));
            console.table(ne.map((W) => ({
              Trackback: W
            })), [
              "Trackback"
            ]), h.value = true;
          } else p.value = U, f.value = true;
          console.log("=== Failed to initialize all modules ==="), console.error(F);
        });
      }), (B, F) => (an(), Hn("div", pv, [
        tt("div", gv, [
          F[7] || (F[7] = tt("div", {
            class: "logo-section"
          }, [
            tt("div", {
              class: "app-logo"
            }, [
              tt("img", {
                src: Gp,
                alt: "TrackMaker Logo",
                height: "80",
                width: "80"
              })
            ]),
            tt("h1", {
              class: "app-title"
            }, " TrackMaker ")
          ], -1)),
          !f.value && !h.value ? (an(), Hn("div", mv, [
            tt("div", wv, [
              tt("div", yv, [
                tt("div", {
                  class: "progress-fill",
                  style: qo({
                    width: `${P.value}%`
                  })
                }, null, 4)
              ]),
              tt("div", bv, hi(P.value) + "% ", 1)
            ]),
            tt("div", vv, [
              tt("p", Ev, " Loading: " + hi(i.value), 1)
            ]),
            F[0] || (F[0] = tt("div", {
              class: "loading-animation"
            }, [
              tt("div", {
                class: "spinner"
              })
            ], -1))
          ])) : Es("", true),
          f.value ? (an(), Hn("div", Iv, [
            F[1] || (F[1] = tt("div", {
              class: "error-icon"
            }, " \u26A0\uFE0F ", -1)),
            F[2] || (F[2] = tt("h2", null, "Loading Error", -1)),
            tt("div", Tv, [
              (an(true), Hn(Rt, null, pd((p.value ?? "").split(`
`), (U) => (an(), Hn("div", {
                key: U,
                style: {
                  display: "block",
                  "font-family": "monospace",
                  overflow: "auto"
                }
              }, [
                U.toLocaleLowerCase().includes("trackback") ? (an(), Hn("strong", _v, hi(U), 1)) : (an(), Hn("span", Sv, hi(U), 1))
              ]))), 128))
            ]),
            tt("button", {
              class: "retry-button",
              onClick: L
            }, " Retry ")
          ])) : Es("", true),
          h.value ? (an(), Hn("div", Ov, [
            F[3] || (F[3] = tt("div", {
              class: "timeout-icon"
            }, " \u23F0 ", -1)),
            F[4] || (F[4] = tt("h2", null, "Connection Timeout", -1)),
            F[5] || (F[5] = tt("p", null, "Unable to load required modules within the timeout period.", -1)),
            F[6] || (F[6] = tt("p", null, "Please check your internet connection and try again.", -1)),
            tt("button", {
              class: "retry-button",
              onClick: L
            }, " Retry ")
          ])) : Es("", true)
        ])
      ]));
    }
  });
  Pv = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, l] of t) n[i] = l;
    return n;
  };
  Rv = Pv(Av, [
    [
      "__scopeId",
      "data-v-5254237a"
    ]
  ]);
  qa = cf(Rv);
  qa.use(Hf());
  qa.mount("#splash");
  window.splashScreen = qa;
})();
export {
  jh as $,
  hi as A,
  $v as B,
  Qs as C,
  Fv as D,
  xb as E,
  Rt as F,
  is as G,
  _n as H,
  Tn as I,
  lr as J,
  xv as K,
  Wv as L,
  ar as M,
  id as N,
  od as O,
  Bv as P,
  pu as Q,
  Lv as R,
  It as S,
  Cv as T,
  Un as U,
  Bh as V,
  qo as W,
  Hv as X,
  at as Y,
  Pa as Z,
  Pv as _,
  __tla,
  tt as a,
  jv as a0,
  Gv as a1,
  kt as a2,
  Nr as a3,
  Zr as a4,
  G as a5,
  M as a6,
  Xv as a7,
  Kv as a8,
  kv as a9,
  Pg as aA,
  xo as aB,
  yf as aC,
  Qm as aD,
  bw as aE,
  $m as aF,
  hf as aG,
  Gw as aH,
  Dh as aI,
  Vr as aJ,
  ns as aK,
  Wi as aL,
  Yc as aM,
  wh as aN,
  _d as aO,
  Nv as aP,
  Gn as aQ,
  Yv as aR,
  qc as aS,
  Dv as aa,
  pd as ab,
  Vv as ac,
  Jv as ad,
  qv as ae,
  Zv as af,
  Qv as ag,
  fi as ah,
  sv as ai,
  Ps as aj,
  tv as ak,
  Yr as al,
  sr as am,
  xl as an,
  wg as ao,
  vg as ap,
  Ig as aq,
  mg as ar,
  Ua as as,
  pf as at,
  sm as au,
  Rr as av,
  Fn as aw,
  Af as ax,
  fm as ay,
  df as az,
  nn as b,
  Hn as c,
  nd as d,
  ad as e,
  La as f,
  Jo as g,
  op as h,
  Si as i,
  ja as j,
  zi as k,
  Ca as l,
  Jd as m,
  Ea as n,
  an as o,
  Td as p,
  Br as q,
  qs as r,
  Mt as s,
  Mv as t,
  zv as u,
  uu as v,
  Uv as w,
  Es as x,
  Zh as y,
  Kd as z
};
